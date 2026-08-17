// Archived-session manager — host half (v2.1).
//
// Transport: the official connection RPC channel (`/arcv`, loopback
// authority) — the platform fence (loopback + Origin/Host + sec-fetch-site)
// replaces the hand-rolled /__arcv route and its three CSRF layers.
//
// Delete pipeline. Common (idle/no-agent) path, fully synchronous in the
// request: bounded agent teardown → durable log rm → workspace detach →
// archive-list removal. The log rm runs BEFORE any accounting change, so the
// session can never surface as a live "ungrouped" row — it vanishes
// atomically. Busy-agent path: the request returns ok once the teardown has
// been started (bounded), and a background chain finishes the same order —
// rm first, de-archive LAST — after the agent's final write-behind events
// flush (settle + grace), so the persistence coordinator's retirement runs
// against a live file instead of ENOENT-ing into a permanent leak. Until the
// chain completes the session stays in archivedSessionIds (hidden), never
// visible as active.
import { rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

export const name = 'archive-manager'

export const inject = ['connection', 'agents', 'sessionPersistence', 'workspaceRegistry', 'storageDomain', 'sessions']

export function apply(ctx) {
  const agentDisposers = new Map()
  const agents = ctx.agents

  // Teardown budget for a busy agent (whenIdle waits for its current turn to
  // settle — unbounded by nature). An idle agent disposes in ms, so the race
  // rarely binds; after the budget the delete switches to the background
  // chain instead of blocking the request.
  const TEARDOWN_WAIT_MS = 1000
  // Grace after a settled teardown before the log rm: the persistence
  // coordinator retires (flushing the agent's final events) shortly AFTER
  // the disposer resolves; the write-behind drain is immediate once
  // barrier-flushed. Half a second covers dispatch + flush with margin.
  const RM_GRACE_MS = 500

  // ── AgentHandle.dispose capture ──
  // rc.6 has no agents.stop and agent/created carries no disposal capability,
  // so wrapping the registry entry points is the only capture surface. Covers
  // every agent created or resumed through ctx.agents; config-declared agents
  // (agent-loop's internal create path) bypass this — their deletion reports
  // no-captured-disposer and needs a restart, by design.
  const origCreate = agents.create.bind(agents)
  const origResume = agents.resume.bind(agents)
  const disposeWrapper = ctx.effect(() => {
    agents.create = async (options) => {
      const handle = await origCreate(options)
      try { agentDisposers.set(handle.agent.id, handle.dispose) } catch (e) {}
      return handle
    }
    agents.resume = async (options) => {
      const handle = await origResume(options)
      try { agentDisposers.set(handle.agent.id, handle.dispose) } catch (e) {}
      return handle
    }
    return () => {
      agents.create = origCreate
      agents.resume = origResume
    }
  })

  function archivedIds() {
    const state = ctx.workspaceRegistry.state
    const ids = state !== undefined ? state.archivedSessionIds : undefined
    return Array.isArray(ids) ? ids : []
  }

  // Serialized read-modify-write on the registry's own operation chain: the
  // registry's canonical mutations (create/delete/order) are also non-atomic
  // multi-step domain writes, so an independent plugin-side chain could
  // interleave and silently roll archivedSessionIds back. enqueueOperation
  // puts this mutation on the same mutual-exclusion chain as every official
  // write; the mirror write reuses the registry's own state reference.
  function mutateArchived(update) {
    return ctx.workspaceRegistry.enqueueOperation(async () => {
      const domain = ctx.storageDomain.get('workspace')
      const state = domain.global.get()
      const archived = Array.isArray(state.archivedSessionIds) ? state.archivedSessionIds : []
      const nextIds = update(archived)
      if (nextIds === archived) return
      await domain.global.set({ ...state, archivedSessionIds: nextIds })
      const registry = ctx.workspaceRegistry
      if (registry.state !== undefined) registry.state.archivedSessionIds = nextIds
    })
  }

  async function handleUnarchive(args) {
    const id = args.sessionId
    if (typeof id !== 'string' || id === '') return { ok: false, code: 'bad-session-id' }
    if (!archivedIds().includes(id)) return { ok: false, code: 'not-archived' }
    // A busy-agent delete whose background chain has not landed yet: the
    // chain unconditionally finishes the removal, so an unarchive here would
    // resurrect a session the chain then silently destroys. Refuse until the
    // chain settles (it clears its pendingFinalize entry).
    if (pendingFinalize.has(id)) return { ok: false, code: 'delete-pending' }
    await mutateArchived((archived) => (archived.includes(id) ? archived.filter((x) => x !== id) : archived))
    return { ok: true }
  }

  // ── durable log removal ──
  // findLog (async!) probes each project directory with existence checks
  // only (no header parsing), including the cwd-less `_no-cwd` bucket. It is
  // a jsonl-backend member, so guard with typeof. Resolves undefined when no
  // log exists — already gone counts as removed.
  async function removeLogDir(id) {
    const persistence = ctx.sessionPersistence
    if (persistence === undefined || typeof persistence.findLog !== 'function') return false
    let path
    try { path = await persistence.findLog(id) } catch (e) { return false }
    if (typeof path !== 'string' || path === '') return true
    const dir = resolve(dirname(path))
    if (dir === '/') return false
    try {
      await rm(dir, { recursive: true, force: true })
      return true
    } catch (error) {
      ctx.logger?.warn(`archive-manager: log removal for ${id} failed: ${error instanceof Error ? error.message : String(error)}`)
      return false
    }
  }

  // Accounting AFTER a successful rm: detach from every workspace entity
  // (detachSession is idempotent; calling it unconditionally also cleans
  // durable records the visible sessionIds getter would filter out) and
  // remove the archive flag LAST — the moment the id leaves the archive set
  // it must already be gone from disk, or it would surface as an ungrouped
  // live session.
  async function finalizeRemoval(id) {
    const registry = ctx.workspaceRegistry
    if (registry !== undefined && registry.entities !== undefined && typeof registry.entities.values === 'function') {
      for (const entity of registry.entities.values()) {
        try { await entity.detachSession(id) } catch (e) {}
      }
    }
    await mutateArchived((archived) => (archived.includes(id) ? archived.filter((x) => x !== id) : archived))
  }

  // Bounded best-effort agent teardown. Both handlers retire the captured
  // entry, so nothing rejects unhandled; a synchronous throw from the
  // disposal call counts as a failed teardown (entry retired, delete
  // proceeds). Returns the settled-teardown promise and whether it settled
  // within the budget, so the caller picks the sync or background pipeline.
  async function teardownAgent(id) {
    const disposer = agentDisposers.get(id)
    if (disposer === undefined) {
      return { state: ctx.agents.get(id) !== undefined ? 'no-captured-disposer' : 'idle', teardown: undefined, settled: true }
    }
    let teardown
    try {
      teardown = disposer()
    } catch (error) {
      agentDisposers.delete(id)
      return { state: 'ok', teardown: undefined, settled: true }
    }
    const settled = teardown.then(
      () => { agentDisposers.delete(id) },
      () => { agentDisposers.delete(id) },
    )
    let settledWithinBudget = false
    let timer
    try {
      await Promise.race([
        settled.then(() => { settledWithinBudget = true }),
        new Promise((resolve2) => { timer = setTimeout(resolve2, TEARDOWN_WAIT_MS) }),
      ])
    } finally {
      if (timer !== undefined) clearTimeout(timer)
    }
    return { state: 'ok', teardown: settled, settled: settledWithinBudget }
  }

  // ── background finalization for busy agents ──
  // One chain per id. On any step's failure the session simply stays archived
  // (hidden) with its log on disk — the row may reappear in the archive panel
  // after a refresh, which is the honest state for an unfinished delete.
  const pendingFinalize = new Map()
  function scheduleFinalization(id, teardown) {
    if (pendingFinalize.has(id)) return
    const entry = { done: false }
    pendingFinalize.set(id, entry)
    const finish = () => {
      if (entry.done) return
      entry.done = true
      pendingFinalize.delete(id)
      removeLogDir(id).then((removed) => {
        if (removed) return finalizeRemoval(id)
        ctx.logger?.warn(`archive-manager: deferred log removal for ${id} failed; session stays archived`)
      }).catch(() => {})
    }
    // The teardown promise never rejects (both handlers attached in
    // teardownAgent); settle → grace → finish.
    teardown.then(() => { setTimeout(finish, RM_GRACE_MS) })
  }

  async function handleDelete(args) {
    const id = args.sessionId
    if (typeof id !== 'string' || id === '') return { ok: false, code: 'bad-session-id' }
    // Route-level authorization: only archived members may be deleted (the
    // panel lists exactly these; anything else is a forged request).
    if (!archivedIds().includes(id)) return { ok: false, code: 'not-archived' }
    // Durable removal needs the jsonl findLog surface; without it the delete
    // would strip the archive/workspace accounting and leave the log on disk
    // — fail fast instead of reporting a fake success.
    if (ctx.sessionPersistence === undefined || typeof ctx.sessionPersistence.findLog !== 'function') {
      return { ok: false, code: 'persistence-unavailable' }
    }
    // Live agent: bounded teardown. An agent whose disposer was lost to a
    // host reload is the single hard refusal — only a restart can release it.
    let agentWasLive = false
    let teardown
    let settled = true
    if (ctx.agents.get(id) !== undefined) {
      agentWasLive = true
      const result = await teardownAgent(id)
      if (result.state === 'no-captured-disposer') {
        return { ok: false, code: 'no-captured-disposer' }
      }
      teardown = result.teardown
      settled = result.settled
    }
    // Page-open protection: the client checks its own current session; this
    // host-side recheck covers the gap where the session record is live in
    // another tab/page but its agent already settled here (v1 refused this).
    if (ctx.sessions?.get(id) !== undefined) {
      return { ok: false, code: 'still-live' }
    }
    if (!agentWasLive || settled) {
      // Synchronous pipeline (idle agent or none): the response waits for the
      // real removal, exactly like v1. The grace only covers a settled
      // teardown's in-flight retirement flush.
      if (agentWasLive) {
        await new Promise((resolve2) => setTimeout(resolve2, RM_GRACE_MS))
      }
      const removed = await removeLogDir(id)
      if (!removed) return { ok: false, code: 'log-removal-failed' }
      await finalizeRemoval(id)
      return { ok: true }
    }
    // Busy agent: ok now, chain finishes after the turn ends. The session
    // stays archived (hidden) until the log is actually gone.
    scheduleFinalization(id, teardown)
    return { ok: true }
  }

  const dispatch = {
    unarchive: handleUnarchive,
    delete: handleDelete,
    diag: async (args) => {
      const id = args.sessionId
      if (typeof id !== 'string' || !archivedIds().includes(id)) return { ok: false, code: 'not-archived' }
      return {
        agentLive: ctx.agents.get(id) !== undefined,
        sessionLive: ctx.sessions?.get(id) !== undefined,
        captured: agentDisposers.has(id),
      }
    },
  }

  const disposeRoute = ctx.connection.rpc.handle('/arcv', (endpoint, payload) => {
    const handler = Object.prototype.hasOwnProperty.call(dispatch, endpoint) ? dispatch[endpoint] : undefined
    if (handler === undefined) throw new Error(`unknown endpoint: ${String(endpoint)}`)
    return handler(payload ?? {})
  }, { authority: 'loopback' })

  return () => {
    disposeRoute()
    disposeWrapper()
    for (const entry of pendingFinalize.values()) entry.done = true
    pendingFinalize.clear()
  }
}

export default { name, inject, apply }
