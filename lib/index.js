// Archived-session browser — host half.
//
// Responsibilities:
//   * `/__arcv/*` HTTP route: the browser half POSTs {sessionId} for
//     unarchive / delete / diag (the official rc.6 API surface has no
//     unarchive or delete RPC; the 41-file upstream patch added them to
//     apiproxy, which this deployment cannot carry).
//   * agents.create/resume wrapper capturing AgentHandle.dispose — rc.6 has
//     no agents.stop; the wrapper is the external twin of the patch's
//     `stoppers` map. Because this plugin loads at boot, EVERY resumed
//     session gets a captured disposer, so delete always takes the full
//     teardown path (loop exit, unregister, session detach, broadcast).
import path from 'node:path'

export const name = 'archive-manager'
export const inject = ['webServer', 'agents', 'sessionPersistence', 'workspaceRegistry', 'storageDomain', 'shell', 'sessions']

export function apply(ctx) {
  const agentDisposers = new Map()
  const agents = ctx.agents
  // Grace window for a wedged agent teardown (whenIdle that never settles):
  // after it elapses the still-live recheck below reports the session instead
  // of hanging the delete request forever.
  const DISPOSE_GRACE_MS = 15000

  // ── AgentHandle.dispose capture (41-version stoppers equivalent) ──
  // ensureSession returns live agents without calling create/resume, so a
  // disposer can only be captured at creation time. Boot-time wrapping
  // guarantees coverage for every session this process ever opens.
  const origCreate = agents.create.bind(agents)
  const origResume = agents.resume.bind(agents)
  const dispose = ctx.effect(() => {
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

  // ── domain write helpers (the plugin owns the workspace domain writes
  //    the official RPC surface never exposed) ──

  // Serialized read-modify-write on the registry's own operation chain: the
  // registry's canonical mutations (create/delete/order) are also non-atomic
  // multi-step domain writes that spread the prior state, so an independent
  // plugin-side chain could interleave and silently roll archivedSessionIds
  // back. enqueueOperation puts this mutation on the same mutual-exclusion
  // chain as every official write, and its setState already mirrors the
  // in-memory registry cache (workspace.list reads the cache, not the domain).
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
    await mutateArchived((archived) => (archived.includes(id) ? archived.filter((x) => x !== id) : archived))
    return { ok: true }
  }

  async function handleDelete(args) {
    const id = args.sessionId
    // 1) Live agent: full official teardown via the captured disposer.
    const agent = ctx.agents.get(id)
    if (agent !== undefined) {
      const disposer = agentDisposers.get(id)
      if (disposer !== undefined) {
        // Bounded teardown: a wedged agent loop (whenIdle that never settles)
        // must not hang the delete request forever; after the grace window the
        // still-live recheck below reports it instead.
        let graceTimer
        try {
          await Promise.race([
            // Retire the captured disposer once it completes: entries are
            // otherwise retained for the process lifetime (unbounded growth
            // and an ever-inflated diag capturedCount).
            disposer().then(() => { agentDisposers.delete(id) }),
            new Promise((resolve) => { graceTimer = setTimeout(resolve, DISPOSE_GRACE_MS) }),
          ])
        } catch (e) {} finally { clearTimeout(graceTimer) }
      }
    }
    // A live agent with no captured disposer (only possible after a host
    // reload lost the boot-time capture) has exactly one remedy — restart —
    // so it gets its own code; the still-live copy would wrongly tell the
    // user to switch sessions, which cannot release an agent.
    if (ctx.agents.get(id) !== undefined && !agentDisposers.has(id)) {
      return { ok: false, code: 'no-captured-disposer' }
    }
    if (ctx.agents.get(id) !== undefined || ctx.sessions?.get(id) !== undefined) {
      return { ok: false, code: 'still-live', detail: { agent: ctx.agents.get(id) !== undefined, session: ctx.sessions?.get(id) !== undefined, captured: agentDisposers.has(id) } }
    }
    // 2) Durable log removal — the authoritative delete. ~/.dsh/sessions is
    //    outside the default workspace-write sandbox, so the call carries a
    //    per-call danger-full-access policy; failure is a hard error and
    //    nothing else is touched (no orphan "ungrouped" rows).
    const persistence = ctx.sessionPersistence
    if (persistence !== undefined && typeof persistence.list === 'function' && typeof persistence.locate === 'function') {
      const header = (await persistence.list()).find((h) => h.id === id)
      if (header !== undefined) {
        const loc = persistence.locate(header)
        if (loc !== undefined && typeof loc.path === 'string') {
          const slash = loc.path.lastIndexOf('/')
          const dir = slash > 0 ? loc.path.slice(0, slash) : '.'
          // Resolve BEFORE the allowlist: a resolved absolute path can never
          // contain a `..` segment, so traversal components are collapsed
          // (or, combined with the character gate below, rejected) before
          // anything reaches the shell string.
          const resolvedDir = path.resolve(dir)
          // Path allowlist + strict shell quoting: JSON.stringify's double quotes still
          // let bash expand $(...) and backticks, and the dir passes through a cwd
          // slug that can carry user path characters. Allowlist first, then hard
          // single-quote escaping — two independent layers. `~` is legal in segment
          // names: the official encoder escapes non-filesystem-safe chars as ~XXXX.
          if (!/^\/[A-Za-z0-9._~/-]*$/.test(resolvedDir)) {
            return { ok: false, code: 'log-path-rejected' }
          }
          const quoted = "'" + resolvedDir.replace(/'/g, "'\\''") + "'"
          const result = await ctx.shell.run(ctx.shell.resolve({
            command: 'rm -rf ' + quoted,
            sandboxPolicy: { mode: 'danger-full-access', workspaceRoot: '/' },
          }))
          if (result.exitCode !== undefined && result.exitCode !== 0) {
            return { ok: false, code: 'log-removal-failed', detail: { code: result.exitCode } }
          }
        }
      }
    }
    // 3) Workspace account: official WorkspaceEntity.detachSession (domain
    //    persist + in-memory sync + broadcast).
    const registry = ctx.workspaceRegistry
    if (registry !== undefined && registry.entities !== undefined && typeof registry.entities.values === 'function') {
      for (const entity of registry.entities.values()) {
        if (Array.isArray(entity.sessionIds) && entity.sessionIds.includes(id)) {
          await entity.detachSession(id)
        }
      }
    }
    // 4) Archive list (inside the serialized chain).
    await mutateArchived((archived) => (archived.includes(id) ? archived.filter((x) => x !== id) : archived))
    return { ok: true }
  }

  const handlers = {
    unarchive: handleUnarchive,
    delete: handleDelete,
    diag: async (args) => ({
      agentLive: ctx.agents.get(args.sessionId) !== undefined,
      sessionLive: ctx.sessions?.get(args.sessionId) !== undefined,
      captured: agentDisposers.has(args.sessionId),
      capturedCount: agentDisposers.size,
    }),
  }

  // ── /__arcv/<method> POST route (private plugin channel) ──
  // webServer.host's schema domain is '127.0.0.1' | '0.0.0.0' — BOTH binds
  // accept loopback connections, so the loopback Host-literal rule (layer 3
  // in the handler) must apply to either (DNS-rebinding hardening).
  const LOOP_REACHABLE = ctx.webServer.host === '127.0.0.1' || ctx.webServer.host === '0.0.0.0'
  const disposeRoute = ctx.webServer.register({
    kind: 'prefix',
    path: '/__arcv',
    handler: (req, res) => {
      const chunks = []
      let bytes = 0
      let oversized = false
      let settled = false
      res.setHeader('content-type', 'application/json')
      const fail = (status, code) => {
        if (settled || res.writableEnded) return
        settled = true
        res.statusCode = status
        res.end(JSON.stringify({ ok: false, code }))
      }
      req.on('data', (c) => {
        bytes += c.length
        if (bytes <= 1024 * 1024 && !oversized) chunks.push(c)
        else oversized = true
      })
      req.on('error', () => fail(400, 'read-error'))
      req.on('aborted', () => { settled = true })
      req.on('end', async () => {
        // An errored/aborted request may still emit 'end' on some teardown
        // paths; the handler's side effects (delete/unarchive) must not run
        // after the request is already dead.
        if (settled) return
        try {
          // CSRF defense, three layers:
          //   1. content-type must be exactly application/json (a hostile page
          //      can POST text/plain as a simple no-preflight request).
          //   2. Origin, when present, must match Host (cross-origin refused).
          //   3. DNS-rebinding hardening: a rebound attacker domain satisfies
          //      Origin==Host, so whenever the bind is loop-reachable
          //      ('127.0.0.1' and '0.0.0.0' both are) the Host must be a
          //      loopback literal — a rebound public name cannot present one.
          if (req.method !== 'POST') return fail(405, 'method-not-allowed')
          const contentType = String(req.headers['content-type'] ?? '')
          if (contentType.split(';')[0].trim() !== 'application/json') return fail(415, 'content-type-required')
          const hostHeader = String(req.headers.host ?? '')
          const origin = req.headers.origin
          if (origin !== undefined) {
            let sameOrigin = false
            try { sameOrigin = new URL(String(origin)).host === hostHeader } catch (e) {}
            if (!sameOrigin) return fail(403, 'cross-origin-refused')
          }
          if (LOOP_REACHABLE && !/^(\[::1\]|localhost|127(\.\d+){3})(:\d+)?$/.test(hostHeader)) {
            return fail(403, 'host-refused')
          }
          const method = (req.url ?? '').replace(/^\/__arcv\/?/, '').split('?')[0]
          const handler = handlers[method]
          if (handler === undefined) return fail(404, 'unknown-method')
          if (oversized) return fail(413, 'body-too-large')
          let args = {}
          try { args = chunks.length > 0 ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {} } catch (e) { return fail(400, 'invalid-json') }
          if (args === null || typeof args !== 'object' || Array.isArray(args)) args = {}
          const result = await handler(args)
          if (settled || res.writableEnded) return
          settled = true
          res.end(JSON.stringify(result ?? { ok: true }))
        } catch (error) {
          ctx.logger?.warn(`__arcv handler failed: ${error instanceof Error ? error.stack : String(error)}`)
          fail(500, 'internal-error')
        }
      })
    },
  })

  return () => {
    disposeRoute()
    dispose()
  }
}

export default { name, inject, apply }
