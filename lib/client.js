window.__ModuleLoader__.load({
  id: "dsh-archive-manager",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    let react = require("react");
    let dsw = require("@deepseek-ai/dsh-client-ui-primitives");

    const css = `
[class*="_root"]:has(> [class*="_footArea"]){position:relative}
.arcv-panel{pointer-events:auto;position:absolute;top:120px;bottom:0;left:0;right:0;z-index:70;box-sizing:border-box;padding:0 12px;display:flex;flex-direction:column;background:var(--dsw-specific-sidebar-fill,var(--dsw-alias-bg-base,#0d1117));font-size:14px;color:var(--dsw-alias-label-primary,#e6edf3);animation:arcv-in .2s var(--ds-ease-in-out)}
@keyframes arcv-in{0%{opacity:0}}
.arcv-sectionHeader{box-sizing:border-box;height:36px;color:var(--dsw-alias-label-tertiary);border-radius:12px;flex:none;justify-content:flex-end;align-items:center;gap:4px;margin:2px 0 4px 0;padding:0 0 0 4px;display:flex;overflow:hidden}
.arcv-sectionLabel{white-space:nowrap;min-width:0;line-height:20px;overflow:hidden}
.arcv-iconButton{cursor:pointer;width:28px;height:28px;color:var(--dsw-alias-label-secondary);background:0 0;border:none;border-radius:50%;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex}
.arcv-iconButton:hover{background:var(--dsw-alias-interactive-bg-hover)}
.arcv-sectionLabelArcv{flex:none;max-width:45%;min-width:0;overflow:hidden;white-space:nowrap;line-height:20px;opacity:1;visibility:visible;transition:max-width 180ms var(--ds-ease-in-out),margin-right 180ms var(--ds-ease-in-out),opacity 120ms var(--ds-ease-in-out),transform 180ms var(--ds-ease-in-out),visibility 0s linear}
.arcv-sectionLabelHidden{max-width:0;margin-right:-4px;opacity:0;transform:translateX(-4px);visibility:hidden;transition-delay:0s,0s,0s,0s,180ms}
.arcv-searchSlot{flex:1;max-width:28px;min-width:0;display:flex;align-items:center;margin-left:auto;padding-left:0;box-sizing:border-box;transition:max-width 180ms var(--ds-ease-in-out),padding-left 180ms var(--ds-ease-in-out)}
.arcv-searchSlotExpanded{max-width:100%;padding-left:0}
.arcv-search{flex:none;display:flex;align-items:center;gap:0;width:100%;height:28px;margin:0;padding:0;box-sizing:border-box;border:none;border-radius:50%;background:transparent;cursor:text;color:var(--dsw-alias-label-secondary);overflow:hidden;transition:width 180ms var(--ds-ease-in-out),padding 180ms var(--ds-ease-in-out),border-color 180ms var(--ds-ease-in-out),background-color 180ms var(--ds-ease-in-out)}
.arcv-searchExpanded{width:calc(100% + 4px);height:30px;margin-inline:-2px;padding:0 4px 0 0;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:transparent;color:var(--dsw-alias-label-caption)}
.arcv-searchButton{flex:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;border-radius:50%;padding:0;background:transparent;cursor:pointer;color:inherit}
.arcv-searchExpanded .arcv-searchButton{width:28px;height:30px}
.arcv-searchButton:hover{background:var(--dsw-alias-interactive-bg-hover)}
.arcv-searchExpanded .arcv-searchButton:hover{background:transparent}
.arcv-searchInput{flex:1;width:0;min-width:0;border:none;outline:none;background:transparent;opacity:0;pointer-events:none;font-size:13px;line-height:18px;color:var(--dsw-alias-label-primary);transition:opacity 120ms var(--ds-ease-in-out)}
.arcv-searchExpanded .arcv-searchInput{margin-left:-2px;opacity:1;pointer-events:auto}
.arcv-searchInput::placeholder{color:var(--dsw-alias-label-tertiary)}
.arcv-clearButton{flex:none;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;border-radius:50%;padding:0;background:transparent;cursor:pointer;color:var(--dsw-alias-label-secondary)}
.arcv-clearButton:hover{background:var(--dsw-alias-interactive-bg-hover)}
.arcv-headerActions{flex:none;display:flex;align-items:center;gap:4px;max-width:60px;opacity:1;overflow:hidden;visibility:visible;transition:max-width 180ms var(--ds-ease-in-out),opacity 120ms var(--ds-ease-in-out),transform 180ms var(--ds-ease-in-out),visibility 0s linear}
.arcv-headerActionsHidden{max-width:0;opacity:0;transform:translateX(4px);visibility:hidden;pointer-events:none;transition-delay:0s,0s,0s,180ms}
.arcv-menuCard{box-sizing:border-box;padding:4px;display:flex;flex-direction:column;gap:0;border:1px solid var(--dsw-alias-border-inverted);border-radius:12px;background:var(--dsw-specific-menu,#1c2128);box-shadow:var(--dsw-shadow-lv3);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);min-width:218px;max-width:360px}
.arcv-menuItem{display:flex;align-items:center;gap:8px;width:100%;min-height:34px;padding:5px 10px;border:none;border-radius:10px;background:transparent;cursor:pointer;font-size:14px;line-height:22px;color:var(--dsw-alias-label-primary);text-align:left;font-family:inherit}
.arcv-menuItem:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.arcv-menuItemIcon{display:inline-flex;flex:none;width:16px;height:16px;align-items:center;justify-content:center;color:var(--dsw-alias-label-tertiary)}
.arcv-menuItemLabel{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.arcv-menuCheck{flex:none;color:var(--dsw-alias-label-primary)}
.arcv-menuLabel{padding:8px 10px;font-size:12px;line-height:16px;color:var(--dsw-alias-label-tertiary)}
.arcv-menuLabelDense{padding-block:4px}
.arcv-menuSeparator{height:1px;margin:4px 2px;background:var(--dsw-alias-border-l1)}
.arcv-sessionRow.arcv-dropBefore::before,.arcv-sessionRow.arcv-dropAfter::after{content:'';position:absolute;z-index:1;left:0;right:4px;height:12px;background:linear-gradient(55deg,transparent calc(50% - 1px),var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),transparent calc(50% + 1px)) 0 0/5px 7px no-repeat,linear-gradient(125deg,transparent calc(50% - 1px),var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),transparent calc(50% + 1px)) 0 5px/5px 7px no-repeat,linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px/calc(100% - 4px) 2px no-repeat;pointer-events:none}
.arcv-sessionRow.arcv-dropBefore::before{top:-7px}
.arcv-sessionRow.arcv-dropAfter::after{bottom:-7px}
.arcv-sessionRow{position:relative}
.arcv-menuPortal{position:fixed;z-index:1100}
.arcv-searchPending{color:var(--dsw-alias-label-tertiary);padding:10px 12px;font-size:12px;line-height:18px}
.arcv-searchWarning{color:var(--dsw-alias-label-secondary);padding:10px 12px;font-size:12px;line-height:18px}
.arcv-searchResultRow{display:flex;flex-direction:column;align-items:stretch;width:100%;min-height:48px;box-sizing:border-box;border:none;border-radius:8px;padding:4px 8px;background:transparent;cursor:pointer;text-align:left;color:var(--dsw-alias-label-primary);font-family:inherit}
.arcv-searchResultRow:hover{background:var(--dsw-alias-interactive-bg-hover)}
.arcv-searchResultRow.arcv-selected{background:var(--dsw-alias-interactive-bg-hover)}
.arcv-searchResultHeading{display:flex;align-items:center;min-width:0}
.arcv-searchResultTitle{min-width:0;margin-left:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;line-height:20px}
.arcv-searchResultMeta{display:flex;align-items:center;gap:6px;min-width:0;margin-left:20px}
.arcv-searchResultWorkspace{flex:none;max-width:40%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;line-height:17px;color:var(--dsw-alias-label-tertiary)}
.arcv-searchResultSnippet{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;line-height:17px;color:var(--dsw-alias-label-secondary)}
.arcv-list{margin-left:-4px;padding-left:4px;padding-right:2px;scrollbar-gutter:stable;flex:1;padding-bottom:16px;overflow-y:auto;display:flex;flex-direction:column}
.arcv-groupSection{position:relative}
.arcv-groupSection+.arcv-groupSection{margin-top:4px}
.arcv-groupSection>*+*{margin-top:2px}
.arcv-projectRow,.arcv-sessionRow{cursor:pointer;user-select:none;color:var(--dsw-alias-label-primary);border-radius:8px;align-items:center;gap:6px;padding:0 8px;display:flex}
.arcv-projectRow:hover,.arcv-sessionRow:hover,.arcv-sessionRow.arcv-selected{background:var(--dsw-alias-interactive-bg-hover)}
.arcv-projectRow{box-sizing:border-box;align-items:center;height:34px}
.arcv-sessionRow{height:32px;animation:arcv-row-in .15s var(--ds-ease-in-out);gap:0}
@keyframes arcv-row-in{0%{opacity:0}}
.arcv-sessionRow .arcv-title{margin:0 6px 0 4px;flex:1}
.arcv-sessionRow.arcv-flatNoStatus .arcv-title{margin-left:0}
.arcv-slot{width:16px;height:20px;color:var(--dsw-alias-label-tertiary);flex:none;justify-content:center;align-items:center;display:inline-flex}
.arcv-folderActive{color:var(--dsw-alias-state-business-primary)}
.arcv-projectText{flex-direction:column;flex:1;gap:2px;min-width:0;display:flex}
.arcv-title{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:14px;line-height:20px;overflow:hidden}
.arcv-time{color:var(--dsw-alias-label-tertiary);flex:none;font-size:12px;line-height:20px}
.arcv-rowActions{flex:none;align-items:center;gap:6px;display:none}
.arcv-sessionRow:hover .arcv-rowActions,.arcv-sessionRow.arcv-selected .arcv-rowActions{display:inline-flex}
.arcv-sessionRow:hover .arcv-time,.arcv-sessionRow.arcv-selected .arcv-time{display:none}
.arcv-iconRow{cursor:pointer;width:16px;height:16px;color:var(--dsw-alias-label-tertiary);background:0 0;border:none;border-radius:4px;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex}
.arcv-iconRow:hover{color:var(--dsw-alias-label-primary)}
.arcv-restoreAction{margin-left:2px}
.arcv-restoreAction:hover{color:var(--dsw-alias-state-business-primary)}
.arcv-dangerAction:hover{color:var(--dsw-alias-state-error-primary)}
.arcv-empty{color:var(--dsw-alias-label-tertiary);padding:16px 12px;font-size:13px}
.arcv-error{color:var(--dsw-alias-state-error-primary);font-size:12px;padding:6px 12px;margin:0 8px 6px;border-radius:6px;background:rgba(248,81,73,.08);cursor:pointer}
/* Negative bottom margin: the settings trigger's own rail margin-top (8px)
   is the other half of the gap; -6px pulls the pair to a 2px visual gap. */
.arcv-footer-btn{box-sizing:border-box;cursor:pointer;width:36px;height:36px;color:var(--dsw-alias-label-primary);background:0 0;border:none;border-radius:50%;flex:none;justify-content:center;align-items:center;gap:0;margin:8px 0 -6px;padding:0;font-family:inherit;font-size:14px;line-height:22px;display:inline-flex;overflow:hidden}
.arcv-footer-btn:hover{background:var(--dsw-alias-interactive-bg-hover)}
.arcv-footer-label{white-space:nowrap;overflow:hidden}
[class*="_root"]:not([class*="_collapsed"]) .arcv-footer-btn{width:calc(100% + 8px);height:34px;border-radius:12px;justify-content:flex-start;gap:8px;margin:4px -4px -2px;padding:6px 2px 6px 10px}
.arcv-modal-backdrop{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px}
.arcv-modal-mask{position:absolute;inset:0;background:var(--dsw-alias-bg-mask-1);backdrop-filter:var(--dsw-mask-blur)}
.arcv-modal{position:relative;z-index:1;box-sizing:border-box;display:flex;flex-direction:column;gap:12px;width:min(360px,100%);padding:0 0 14px;overflow:hidden;border:1px solid var(--dsw-alias-border-inverted);border-radius:24px;background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-shadow-lv3)}
.arcv-modal-header{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:16px 12px 8px 20px}
.arcv-modal-title{margin:0;font-size:16px;line-height:24px;font-weight:600;color:var(--dsw-alias-label-primary)}
.arcv-modal-close{flex:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:none;border-radius:8px;background:transparent;cursor:pointer;color:var(--dsw-alias-label-secondary);padding:0}
.arcv-modal-close:hover{background:var(--dsw-alias-interactive-bg-hover)}
.arcv-modal-desc{margin:0;padding:0 20px;font-size:14px;line-height:22px;font-weight:400;color:var(--dsw-alias-label-secondary)}
.arcv-modal-status{margin-top:12px;padding:0 20px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.arcv-modal-error{margin-top:12px;padding:6px 20px 0;font-size:12px;line-height:18px;color:var(--dsw-alias-state-error-primary)}
.arcv-modal-footer{display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:0 20px}
.arcv-modal-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:30px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;cursor:pointer;font-size:13px;line-height:20px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-active);padding:0 14px;font-family:inherit}
.arcv-modal-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.arcv-modal-btn:disabled{opacity:.4;cursor:not-allowed}
.arcv-modal-btn-danger{background:var(--dsw-alias-state-error-primary);border-color:var(--dsw-alias-state-error-primary);color:#ffffff}
.arcv-modal-btn-danger:hover:not(:disabled){background:var(--dsw-alias-state-error-primary);filter:brightness(1.08)}
.arcv-modal-btn-danger:not(:disabled) .arcv-modal-kbd{color:rgba(255,255,255,.72)}
.arcv-modal-kbd{font-size:12px;line-height:16px;color:var(--dsw-alias-label-tertiary);flex:none;user-select:none}
@media (prefers-reduced-motion:reduce){.arcv-sessionRow,.arcv-panel{transition:none;animation:none}}
`

    const client = {
      name: 'archive-manager',
      // Load contract deliberately kept at the pre-review shape ('slots'
      // only): the 4-service waiting declaration (review M1) is the prime
      // suspect for the entry disappearing in the real browser — the panel
      // reads the other services defensively at apply time instead.
      inject: ['slots'],
      apply(ctx) {
        const slots = ctx.slots
        const sessions = ctx.get('sessions')
        const workspaces = ctx.get('workspaces')
        const locale = ctx.get('locale')
        // Official connection RPC channel ('/arcv', loopback authority on the
        // host side): the platform fence replaces the private /__arcv route.
        // Transport/HTTP failures collapse to a stable code for hostError().
        const connection = ctx.get('connection')
        const hostCall = (method, args) => {
          if (connection === undefined || connection.rpc === undefined || typeof connection.rpc.call !== 'function') {
            return Promise.resolve({ ok: false, code: 'network' })
          }
          return connection.rpc.call('/arcv', method, args ?? {})
            .catch(() => ({ ok: false, code: 'network' }))
        }
        const cleanups = []
        const styleEl = document.createElement('style')
        styleEl.textContent = css
        document.head.appendChild(styleEl)
        const h = react.createElement

        // Follow the system locale: register zh/en dictionaries and bind the translator.
        // register() returns a removal disposer — held so unload retires the
        // dictionaries (a dropped disposer would leave them resident forever).
        let t = (key, params) => key
        if (locale !== undefined) {
          const NS = 'arcv-archive'
          const zh = { 'footer': '已归档', 'section': '归档区', 'close': '关闭', 'close.aria': '关闭归档视图', 'restore': '恢复', 'restore.aria': '恢复会话“{name}”', 'delete': '删除', 'delete.aria': '删除会话“{name}”', 'empty': '没有已归档的会话', 'empty.noMatches': '无匹配结果', 'ungrouped': '未分组', 'delete.title': '删除会话', 'delete.desc': '将永久删除会话“{name}”及其全部记录，此操作不可撤销。', 'cancel': '取消', 'delete.pending': '正在删除会话…', 'error.dismiss': '（点击关闭）', 'time.now': '刚刚', 'time.minutes': '{n} 分钟前', 'time.hours': '{n} 小时前', 'time.days': '{n} 天前', 'time.months': '{n} 个月前', 'time.years': '{n} 年前', 'status.running': '运行中', 'status.completed': '已完成', 'status.waitingApproval': '等待批准', 'status.planReview': '等待计划审阅', 'status.waitingAnswer': '等待回答', 'err.still-live': '会话仍在本页打开，请先切换到其他会话再删除', 'err.no-captured-disposer': '无法停止该会话的代理（控制权已随插件重载丢失），请重启 dsh 后再删除', 'err.not-archived': '该会话不在归档区（可能已被其他页面处理），请刷新后重试', 'err.bad-session-id': '无效的会话标识', 'err.network': '网络异常，请重试', 'err.delete-pending': '该会话正在删除中，请稍候片刻再恢复', 'err.log-removal-failed': '日志删除失败，请重试', 'err.persistence-unavailable': '持久化服务不可用，无法删除日志', 'err.unknown': '操作失败，请重试', 'viewOptions.label': '视图选项', 'groupBy.label': '分组方式', 'groupBy.workspace': '按工作区', 'groupBy.flat': '单列表', 'orderBy.label': '排序方式', 'orderBy.manual': '手动排序', 'orderBy.updated': '最近更新', 'section.sessions': '会话', 'search.sessions.aria': '搜索会话', 'search.placeholder': '搜索会话…', 'search.clear': '清除搜索', 'search.pending': '正在搜索会话历史…', 'search.unavailable': '内容搜索暂不可用，仅显示名称匹配。' }
          const en = { 'footer': 'Archived', 'section': 'Archive', 'close': 'Close', 'close.aria': 'Close archive view', 'restore': 'Restore', 'restore.aria': 'Restore session “{name}”', 'delete': 'Delete', 'delete.aria': 'Delete session “{name}”', 'empty': 'No archived sessions', 'empty.noMatches': 'No matches', 'ungrouped': 'Ungrouped', 'delete.title': 'Delete session', 'delete.desc': 'This permanently deletes session “{name}” and its full record. This cannot be undone.', 'cancel': 'Cancel', 'delete.pending': 'Deleting session…', 'error.dismiss': ' (click to dismiss)', 'time.now': 'Just now', 'time.minutes': '{n} min ago', 'time.hours': '{n} h ago', 'time.days': '{n} d ago', 'time.months': '{n} mo ago', 'time.years': '{n} y ago', 'status.running': 'Running', 'status.completed': 'Completed', 'status.waitingApproval': 'Waiting for approval', 'status.planReview': 'Waiting for plan review', 'status.waitingAnswer': 'Waiting for answer', 'err.still-live': 'Session is open in this page; switch to another session before deleting', 'err.no-captured-disposer': 'Cannot stop the session agent (control lost after a plugin reload); restart dsh and retry', 'err.not-archived': 'Session is no longer archived (possibly handled elsewhere); refresh and retry', 'err.bad-session-id': 'Invalid session id', 'err.network': 'Network error; please retry', 'err.delete-pending': 'This session is still being deleted; try restoring again shortly', 'err.log-removal-failed': 'Log removal failed; please retry', 'err.persistence-unavailable': 'Session persistence unavailable; cannot delete the log', 'err.unknown': 'Operation failed; please retry', 'viewOptions.label': 'View options', 'groupBy.label': 'Group by', 'groupBy.workspace': 'WorkSpace', 'groupBy.flat': 'In one list', 'orderBy.label': 'Order by', 'orderBy.manual': 'Manual', 'orderBy.updated': 'Recently updated', 'section.sessions': 'Sessions', 'search.sessions.aria': 'Search sessions', 'search.placeholder': 'Search sessions…', 'search.clear': 'Clear search', 'search.pending': 'Searching session history…', 'search.unavailable': 'Content search unavailable; showing name matches only.' }
          try { cleanups.push(locale.register(NS, 'zh', zh)) } catch (e) {}
          try { cleanups.push(locale.register(NS, 'en', en)) } catch (e) {}
          t = locale.bind(NS)
        }

        // Module-private pure function from the official client.js, copied verbatim: project() uses it to derive recentWorkspaceId.
        function recentWorkspaceOf(wsItems, sessionsById) {
          let selected
          let selectedTime = Number.NEGATIVE_INFINITY
          for (const workspace of wsItems) {
            let latest = Number.NEGATIVE_INFINITY
            for (const sessionId of workspace.sessionIds) {
              const session = sessionsById[sessionId]
              if (session !== undefined) latest = Math.max(latest, session.updatedAt)
            }
            if (latest === Number.NEGATIVE_INFINITY) latest = Date.parse(workspace.createdAt)
            if (selected === undefined || latest > selectedTime) {
              selected = workspace.workspaceId
              selectedTime = latest
            }
          }
          return selected
        }

        // The 41-file upstream fix: project() no longer runs the "archived current session → clear selection"
        // sweep; the clear moves to the archive gesture instead.
        const restorePatches = []
        if (workspaces !== undefined && typeof workspaces.project === 'function') {
          const originalProject = workspaces.project
          workspaces.project = function patchedProject() {
            try {
              const workspace = this.manager.getSnapshot()
              const sessionsSnap = this.sessions.list.getSnapshot()
              const baselinesReady = workspace.phase === 'ready' && sessionsSnap.phase === 'ready'
              this.list.set({
                items: workspace.items,
                archivedSessionIds: workspace.archivedSessionIds,
                state: workspace.state,
                phase: workspace.phase,
                error: workspace.error,
                baselinesReady,
                recentWorkspaceId: baselinesReady ? recentWorkspaceOf(workspace.items, sessionsSnap.byId) : undefined,
              })
            } catch (error) {
              return originalProject.call(this)
            }
          }
          restorePatches.push(() => { workspaces.project = originalProject })
        }
        if (workspaces !== undefined && typeof workspaces.archiveSession === 'function') {
          const originalArchive = workspaces.archiveSession
          workspaces.archiveSession = function patchedArchive(sessionId) {
            const result = originalArchive.call(this, sessionId)
            result.then(() => {
              try {
                if (this.sessions.list.getSnapshot().current === sessionId) this.sessions.clear()
              } catch (e) {}
            }, () => {})
            return result
          }
          restorePatches.push(() => { workspaces.archiveSession = originalArchive })
        }

        // Official primitives replace the local icon set and status-dot
        // replica (identical component contracts, one require).
        const ICONS = {
          FolderOpen: dsw.IconFolderOpen16,
          FolderClose: dsw.IconFolderClose16,
          Archive: dsw.IconArchiveOutline20,
          Close: dsw.IconCloseOutline16,
          Refresh: dsw.IconRefreshOutline16,
          Search: dsw.IconSearchOutline16,
          Personalization: dsw.IconPersonalizationOutline16,
          Check: dsw.IconCheckOutline16,
          Trash: dsw.IconTrashOutline16,
        }
        function Icon({ name, size, className }) {
          const Cmp = ICONS[name]
          if (Cmp === undefined) return null
          return h(Cmp, { size, className })
        }
        const StateDot = ({ state, size }) => h(dsw.StateDot, { state, size })

        // Official sessionStatuses precedence (the subagent-count dimension has no data source here yet):
        // pending interaction (warning) > running (ongoing) > completed (done; idle shows no dot).
        function sessionStatusOf(row) {
          if (row.pendingInteraction !== undefined) return { state: 'warning', label: t('status.' + String(row.pendingInteraction).replace(/^plan-review$/, 'planReview').replace(/^question$/, 'waitingAnswer').replace(/^approval$/, 'waitingApproval')) }
          if (row.running) return { state: 'ongoing', label: t('status.running') }
          if (row.completed) return { state: 'done', label: t('status.completed') }
          return null
        }

        // Map a host-side {ok:false, code, detail} envelope to a localized message.
        // The host has no locale seat (cross-process), so it speaks stable codes.
        function hostError(r) {
          const code = r !== null && typeof r === 'object' && typeof r.code === 'string' ? r.code : 'unknown'
          const detail = r !== null && typeof r === 'object' && r.detail !== null && typeof r.detail === 'object' ? r.detail : {}
          const key = 'err.' + code
          const known = t(key) !== key
          return new Error(known ? t(key, detail) : t('err.unknown'))
        }

        function relativeTime(updatedAt, now) {
          const MIN = 6e4; const HOUR = 36e5; const DAY = 864e5
          const parsed = typeof updatedAt === 'number' ? updatedAt : Date.parse(updatedAt)
          if (!Number.isFinite(parsed)) return ''
          const diff = Math.max(0, now - parsed)
          if (diff < MIN) return t('time.now')
          if (diff < HOUR) return t('time.minutes', { n: Math.floor(diff / MIN) })
          if (diff < DAY) return t('time.hours', { n: Math.floor(diff / HOUR) })
          if (diff < 30 * DAY) return t('time.days', { n: Math.floor(diff / DAY) })
          if (diff < 365 * DAY) return t('time.months', { n: Math.floor(diff / (30 * DAY)) })
          return t('time.years', { n: Math.floor(diff / (365 * DAY)) })
        }

        // ── Shared view state (groupBy / orderBy / manual orders) ──
        // The native browser's view store is a root-scoped EngineStoreHandle
        // registered with the sidebar.workspaces slot; the slots registry
        // resolves ONE instance for it and the native component renders from
        // that same instance. Taking it directly makes the sync exact in both
        // directions: subscribe() covers native -> panel instantly, actions
        // cover panel -> native (the native tree re-renders off the shared
        // instance, and its persistence layer keeps writing localStorage).
        const DEFAULT_VIEW = { groupBy: 'workspace', orderBy: 'updated', accounts: {} }
        function normalizeView(snapshot) {
          const accounts = snapshot.sessionOrderByAccount
          return {
            groupBy: snapshot.groupBy === 'flat' ? 'flat' : 'workspace',
            orderBy: snapshot.orderBy === 'manual' ? 'manual' : 'updated',
            accounts: accounts !== null && typeof accounts === 'object' && !Array.isArray(accounts) ? accounts : {},
          }
        }
        function nativeViewStore() {
          try {
            for (const entry of slots.entriesOfSlot('sidebar.workspaces')) {
              if (entry.store === undefined) continue
              return slots.resolveStore(entry.store)
            }
          } catch (e) {}
          return null
        }
        // The root slot's layout store instance (AppFrame's store seat):
        // sidebar geometry is the authoritative collapse signal (AppFrame:
        // collapsed = narrow ? !narrowExpanded : sidebar === 0).
        function nativeLayoutStore() {
          try {
            for (const entry of slots.entriesOfSlot('root')) {
              if (entry.store === undefined) continue
              return slots.resolveStore(entry.store)
            }
          } catch (e) {}
          return null
        }
        function useSidebarCollapsed() {
          const [collapsed, setCollapsed] = react.useState(false)
          react.useEffect(() => {
            let disposed = false
            let unsubStore
            // Registration order is unconstrained (the official slot registry
            // makes no promises): if the layout store is not yet registered at
            // first render, re-resolve when the 'root' slot's entries change.
            const attach = () => {
              const instance = nativeLayoutStore()
              if (instance === null) return false
              // Retries must not stack store subscriptions: release the
              // previous one before taking a fresh handle.
              if (unsubStore !== undefined) { unsubStore(); unsubStore = undefined }
              const read = () => {
                const s = instance.getSnapshot()
                setCollapsed(s.narrow === true ? s.narrowExpanded !== true : s.sidebar === 0)
              }
              read()
              unsubStore = instance.subscribe(read)
              return true
            }
            if (attach()) return () => { disposed = true; if (unsubStore !== undefined) unsubStore() }
            const unsubSlots = slots.subscribe('root', () => {
              if (disposed || attach()) return
            })
            return () => { disposed = true; unsubSlots(); if (unsubStore !== undefined) unsubStore() }
          }, [])
          return collapsed
        }

        // The native flat order account tracks only visible sessions (archived
        // ids are reconciled away), so the archived flat order is panel-owned.
        const FLAT_ORDER_KEY = 'dsh.archive-manager.flatOrder.v1'
        function readFlatOrder() {
          try {
            const raw = window.localStorage.getItem(FLAT_ORDER_KEY)
            const parsed = raw === null ? null : JSON.parse(raw)
            return Array.isArray(parsed) ? parsed : []
          } catch (e) { return [] }
        }
        // Orphan from an earlier build that wrote the wrong persist key.
        try { window.localStorage.removeItem('dsh.workspace.view.v5.root') } catch (e) {}

        // Official search query hygiene: strip NUL, cap at 500 code units without
        // splitting a surrogate pair (the session.search wire contract).
        const SEARCH_MAX = 500
        function sanitizeSearchQuery(value) {
          const withoutNul = value.replaceAll('\0', '')
          if (withoutNul.length <= SEARCH_MAX) return withoutNul
          let end = SEARCH_MAX
          const last = withoutNul.charCodeAt(end - 1)
          const next = withoutNul.charCodeAt(end)
          if (last >= 0xD800 && last <= 0xDBFF && next >= 0xDC00 && next <= 0xDFFF) end--
          return withoutNul.slice(0, end)
        }

        function makeStore(initial) {
          let value = initial
          const listeners = new Set()
          return {
            get: () => value,
            set: (next) => { value = next; for (const fn of listeners) fn() },
            subscribe: (fn) => { listeners.add(fn); return () => { listeners.delete(fn) } },
          }
        }
        const panel = makeStore(false)

        function useStore(store) {
          const [value, setValue] = react.useState(store.get())
          react.useEffect(() => store.subscribe(() => setValue(store.get())), [store])
          return value
        }

        // Official ViewOptionsMenu replica: personalization trigger + portal menu
        // with two labeled radio groups (group-by, order-by), dense rows, checks.
        function ViewOptionsMenu({ groupBy, orderBy, onPick }) {
          const [open, setOpen] = react.useState(false)
          const [rect, setRect] = react.useState(null)
          const anchorRef = react.useRef(null)
          const portalRef = react.useRef(null)
          react.useEffect(() => {
            if (!open) return
            const place = () => {
              const el = anchorRef.current
              if (el === null || el.getBoundingClientRect === undefined) return
              const r = el.getBoundingClientRect()
              setRect({ top: r.bottom + 4, right: window.innerWidth - r.right })
            }
            place()
            const onDoc = (e) => {
              const target = e.target
              if (target instanceof Node
                && ((anchorRef.current !== null && anchorRef.current.contains(target))
                  || (portalRef.current !== null && portalRef.current.contains(target)))) return
              setOpen(false)
            }
            const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
            document.addEventListener('pointerdown', onDoc)
            document.addEventListener('keydown', onKey)
            window.addEventListener('resize', place)
            return () => {
              document.removeEventListener('pointerdown', onDoc)
              document.removeEventListener('keydown', onKey)
              window.removeEventListener('resize', place)
            }
          }, [open])
          const selected = new Set([groupBy, orderBy])
          const items = [
            { type: 'label', id: 'groupBy.label' },
            { id: 'workspace', label: t('groupBy.workspace') },
            { id: 'flat', label: t('groupBy.flat') },
            { type: 'separator' },
            { type: 'label', id: 'orderBy.label' },
            { id: 'manual', label: t('orderBy.manual') },
            { id: 'updated', label: t('orderBy.updated') },
          ]
          return h(react.Fragment, null,
            h('button', {
              type: 'button', ref: anchorRef,
              className: 'arcv-iconButton',
              'aria-label': t('viewOptions.label'), title: t('viewOptions.label'),
              'aria-expanded': open,
              onClick: (e) => { e.stopPropagation(); setOpen(!open) },
            }, h(Icon, { name: 'Personalization', size: 16 })),
            open && rect !== null
              ? h('div', {
                  ref: portalRef,
                  className: 'arcv-menuPortal', role: 'menu',
                  style: { top: rect.top + 'px', right: rect.right + 'px' },
                },
                h('div', { className: 'arcv-menuCard' },
                  ...items.map((item) => item.type === 'label'
                    ? h('div', { key: item.id, className: 'arcv-menuLabel arcv-menuLabelDense' }, t(item.id))
                    : item.type === 'separator'
                      ? h('div', { key: 'sep', className: 'arcv-menuSeparator' })
                      : h('button', {
                          type: 'button', key: item.id, role: 'menuitemradio',
                          'aria-checked': selected.has(item.id),
                          className: 'arcv-menuItem',
                          onClick: (e) => { e.stopPropagation(); onPick(item.id); setOpen(false) },
                        },
                        h('span', { className: 'arcv-menuItemIcon' }),
                        h('span', { className: 'arcv-menuItemLabel' }, item.label),
                        selected.has(item.id) ? h('span', { className: 'arcv-menuCheck' }, h(Icon, { name: 'Check', size: 14 })) : null))))
              : null)
        }

        function ArchivePanel(props) {
          const open = useStore(panel)
          const archivedIds = props.useWorkspaces((s) => s.archivedSessionIds)
          const items = props.useWorkspaces((s) => s.items)
          const byId = props.useSessions((s) => s.byId)
          const current = props.useSessions((s) => s.current)
          const [expandedSet, setExpandedSet] = react.useState({})
          const [view, setView] = react.useState(DEFAULT_VIEW)
          const viewStoreRef = react.useRef(null)
          const [flatOrder, setFlatOrder] = react.useState(readFlatOrder)
          const [query, setQuery] = react.useState('')
          const [searchExpanded, setSearchExpanded] = react.useState(false)
          const [searchStatus, setSearchStatus] = react.useState('idle')
          const [searchItems, setSearchItems] = react.useState([])
          const searchRootRef = react.useRef(null)
          const searchInputRef = react.useRef(null)
          // Native -> panel: subscribe to the shared store instance — the
          // same one the native browser renders from. localStorage bridging
          // cannot work here: the engine rehydrates only at instance creation
          // and offers no cross-instance notification.
          react.useEffect(() => {
            let disposed = false
            let unsubStore
            // Late registration retry (see useSidebarCollapsed): without it a
            // store registered after first render would leave the panel's view
            // options permanently on local state, silently breaking the sync.
            const attach = () => {
              const instance = nativeViewStore()
              viewStoreRef.current = instance
              if (instance === null) return false
              // Retries must not stack store subscriptions (see the layout
              // twin above): release the previous one first.
              if (unsubStore !== undefined) { unsubStore(); unsubStore = undefined }
              const read = () => setView(normalizeView(instance.getSnapshot()))
              read()
              unsubStore = instance.subscribe(read)
              return true
            }
            if (attach()) return () => { disposed = true; if (unsubStore !== undefined) unsubStore() }
            const unsubSlots = slots.subscribe('sidebar.workspaces', () => {
              if (disposed || attach()) return
            })
            return () => { disposed = true; unsubSlots(); if (unsubStore !== undefined) unsubStore() }
          }, [])
          // Collapse search on outside click only when the query is empty:
          // an active search keeps the box open — clicking rows or elsewhere
          // must not discard a typed query; only close/clear/esc collapses it.
          react.useEffect(() => {
            if (!searchExpanded || query !== '') return
            const onDoc = (e) => {
              const target = e.target
              if (target instanceof Node && searchRootRef.current !== null && searchRootRef.current.contains(target)) return
              setSearchExpanded(false)
            }
            document.addEventListener('pointerdown', onDoc)
            return () => document.removeEventListener('pointerdown', onDoc)
          }, [searchExpanded, query])
          // Debounced content search (native pattern: abort superseded).
          // 200ms (native uses 250): the host side is an indexed FTS5 query
          // (~tens of ms), so the debounce dominated the perceived latency.
          // A bounded LRU cache makes retried/backspaced queries instant.
          const searchCacheRef = react.useRef(new Map())
          const normalizedQuery = sanitizeSearchQuery(query).trim()
          react.useEffect(() => {
            if (normalizedQuery === '') { setSearchStatus('idle'); setSearchItems([]); return }
            const cache = searchCacheRef.current
            const cached = cache.get(normalizedQuery)
            if (cached !== undefined) {
              cache.delete(normalizedQuery) // LRU touch: re-insert moves the key to the eviction tail
              cache.set(normalizedQuery, cached)
              setSearchItems(cached); setSearchStatus('ready'); return
            }
            const controller = new AbortController()
            setSearchStatus('loading')
            const timer = window.setTimeout(() => {
              if (sessions === undefined || typeof sessions.search !== 'function') { setSearchStatus('name-only'); return }
              sessions.search(normalizedQuery, controller.signal).then((result) => {
                if (controller.signal.aborted) return
                if (result.ok !== true) { setSearchStatus('name-only'); return }
                cache.set(normalizedQuery, result.value.items)
                if (cache.size > 16) cache.delete(cache.keys().next().value)
                setSearchItems(result.value.items)
                setSearchStatus('ready')
              }).catch(() => { if (!controller.signal.aborted) setSearchStatus('name-only') })
            }, 200)
            return () => { window.clearTimeout(timer); controller.abort() }
          }, [normalizedQuery])
          const [confirmTarget, setConfirmTarget] = react.useState(null)
          const [busy, setBusy] = react.useState(false)
          const [error, setError] = react.useState(null)
          const [confirmError, setConfirmError] = react.useState(null)
          const busyRef = react.useRef(false)
          busyRef.current = busy
          const confirmDeleteRef = react.useRef(null)
          const confirmBtnRef = react.useRef(null)
          const modalRef = react.useRef(null)
          // Focus lifecycle for the destructive-confirm modal (client review
          // M1/M2): focus moves to the confirm button on open, is trapped
          // inside the dialog while open, and is restored to the trigger on
          // close. The global Enter handler ignores events aimed at embedded
          // controls (cancel button, inputs) and swallows their default
          // activation, so Enter on "Cancel" can never confirm the delete.
          const restoreFocusRef = react.useRef(null)
          react.useEffect(() => {
            if (confirmTarget === null) return
            if (modalRef.current !== null && !modalRef.current.contains(document.activeElement)) {
              restoreFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
              if (confirmBtnRef.current !== null) confirmBtnRef.current.focus()
            }
            const onKey = (e) => {
              // A delete in flight cannot be dismissed mid-air (native modal
              // discipline): Esc while busy would swallow the failure report.
              if (e.key === 'Escape') { if (!busyRef.current) setConfirmTarget(null); return }
              if (e.key === 'Enter') {
                const target = e.target
                const fromConfirm = target instanceof Node && confirmBtnRef.current !== null && confirmBtnRef.current.contains(target)
                const fromDialog = target === modalRef.current
                if (!fromConfirm && !fromDialog) return // inputs/cancel keep their own key semantics
                e.preventDefault() // no double-fire with native button activation
                if (!busyRef.current && confirmDeleteRef.current !== null) confirmDeleteRef.current()
              }
              if (e.key === 'Tab') {
                const dialog = modalRef.current
                if (dialog === null) return
                const focusables = dialog.querySelectorAll('button:not(:disabled)')
                // Busy window: every button is disabled, so the browser has
                // blurred to <body> and an empty focusables list must still
                // trap the Tab press — otherwise focus escapes to background
                // controls while the modal is open.
                if (focusables.length === 0) { e.preventDefault(); return }
                const first = focusables[0]
                const last = focusables[focusables.length - 1]
                const active = document.activeElement
                if (e.shiftKey) {
                  if (active === first || !dialog.contains(active)) { e.preventDefault(); last.focus() }
                } else if (active === last || !dialog.contains(active)) { e.preventDefault(); first.focus() }
              }
            }
            document.addEventListener('keydown', onKey)
            return () => {
              document.removeEventListener('keydown', onKey)
              const restore = restoreFocusRef.current
              restoreFocusRef.current = null
              if (restore !== null && restore.isConnected) try { restore.focus() } catch (e2) {}
            }
          }, [confirmTarget === null])
          // Entering/closing the panel resets its search (a reopened panel
          // starts fresh, matching the native browser's initial state).
          react.useEffect(() => {
            if (open) return
            setQuery('')
            setSearchExpanded(false)
          }, [open])
          // Manual-order drag state (hooks must sit above the open guard).
          const [drag, setDrag] = react.useState(null)
          const dragCommittedRef = react.useRef(false)
          // Dropped-row settle animation: a committed drag remounts the moved
          // row once (key suffix) so the standard row mount fade replays at
          // its new position — the native sidebar's drop-settle visual. The
          // seq alternator keeps rapid consecutive drags of the same row
          // remounting; the key STAYS suffixed after the timer (clearing it
          // would remount a second time and replay the fade). Only the map
          // entry is retired; the suffix persists until the same row is
          // dragged again. prefers-reduced-motion disables the animation.
          const [settledRow, setSettledRow] = react.useState(null)
          const settleTimerRef = react.useRef(undefined)
          react.useEffect(() => () => {
            if (settleTimerRef.current !== undefined) clearTimeout(settleTimerRef.current)
          }, [])
          const markSettled = (id) => {
            if (settleTimerRef.current !== undefined) clearTimeout(settleTimerRef.current)
            setSettledRow((prev) => ({ id, seq: (prev !== null && prev.id === id ? prev.seq : 0) + 1 }))
            // Retire the tracking entry after the settle window so a NEW drag
            // of a different row replaces state cleanly; the rendered key for
            // the settled row keeps its suffix (see renderRow).
            settleTimerRef.current = setTimeout(() => {
              settleTimerRef.current = undefined
            }, 250)
          }
          // Computed BEFORE the effects that reference it — a `const` in the
          // dependency array of an earlier hook is a TDZ crash at mount.
          const searching = normalizedQuery !== ''
          // Drop any in-flight drag when the panel closes or a search
          // replaces the rows: both unmount the source row, whose detached
          // dragend never reaches the React root — without this reset the
          // document-level drag acceptance and the insertion marker would
          // linger until the next drag.
          react.useEffect(() => {
            if (open && !searching) return
            setDrag(null)
          }, [open, searching])
          // Document-level drag acceptance while a row drag is active
          // (official useNativeDragAcceptance replica): row hover still owns
          // the insertion marker, and releasing outside the list must not be
          // rendered as a rejected drop (or, on Firefox, navigate the
          // text/plain payload) before dragend commits the last marker.
          react.useEffect(() => {
            if (drag === null) return
            const acceptDrag = (e) => {
              e.preventDefault()
              if (e.dataTransfer !== null) e.dataTransfer.dropEffect = 'move'
            }
            const acceptDrop = (e) => { e.preventDefault() }
            document.addEventListener('dragover', acceptDrag)
            document.addEventListener('drop', acceptDrop)
            return () => {
              document.removeEventListener('dragover', acceptDrag)
              document.removeEventListener('drop', acceptDrop)
            }
          }, [drag === null])
          if (!open) return null
          const now = Date.now()
          // Search mode: archived rows matching name/workspace plus host content
          // results intersected with the archive set (native merges local-first,
          // newest order; content-only rows keep backend order). (`searching`
          // itself is computed above, before the hooks that need it.)
          const q = normalizedQuery.toLowerCase()
          // Deduplicate at the data inlet: a corrupted archivedSessionIds
          // (external tampering) must not yield duplicate rows anywhere
          // downstream (both the search branch and the grouping branch).
          const allRows = [...new Set(archivedIds)].map((id) => byId[id]).filter((s) => s !== undefined && s.origin !== 'subagent').map((s) => ({
            id: s.id, displayTitle: s.displayTitle, blank: s.blank, updatedAt: s.updatedAt,
            running: s.running === true, completed: s.completed === true, pendingInteraction: s.pendingInteraction,
          }))
          const workspaceTitleOf = (id) => {
            const owner = items.find((w) => w.sessionIds.includes(id))
            return owner !== undefined ? owner.title : t('ungrouped')
          }
          const byRecency = (a, b) => (b.updatedAt !== a.updatedAt ? b.updatedAt - a.updatedAt : (a.id < b.id ? -1 : 1))
          let rows
          if (searching) {
            const contentIds = new Set(searchStatus === 'ready' ? searchItems.map((item) => item.sessionId) : [])
            const localMatches = allRows.filter((row) =>
              String(row.displayTitle).toLowerCase().includes(q) || workspaceTitleOf(row.id).toLowerCase().includes(q))
            if (searchStatus === 'loading') {
              rows = localMatches
            } else {
              const seen = new Set(localMatches.map((r) => r.id))
              const contentSnippets = new Map(searchStatus === 'ready' ? searchItems.map((item) => [item.sessionId, item.snippet]) : [])
              rows = [
                ...localMatches.sort(byRecency).map((r) => ({ ...r, snippet: contentSnippets.get(r.id) })),
                ...allRows.filter((r) => contentIds.has(r.id) && !seen.has(r.id)).map((r) => ({ ...r, snippet: contentSnippets.get(r.id) })),
              ]
            }
          } else {
            rows = allRows
          }
          // View-order application (native semantics):
          //  - workspace groups + manual: rows follow the workspace account
          //    order (workspace.sessionIds) — archived rows keep the relative
          //    position they had as members, exactly like the native archived
          //    view; updated sorts by newest activity.
          //  - flat + manual: the panel-owned archived flat order with recency
          //    for untracked rows; updated = newest-first.
          const storedAccounts = view.accounts
          // Order follows the STORED sequence: rows the account knows come
          // out in the dragged order (not the previous render order); rows it
          // has never seen append after.
          const orderFrom = (stored, memberIds) => {
            const memberSet = new Set(memberIds)
            // Dedupe first: an externally corrupted account holding a
            // repeated id must not yield a repeated row (undefined holes
            // crash renderRow) nor push a `null` back into the store.
            const known = [...new Set(stored)].filter((id) => memberSet.has(id))
            const knownSet = new Set(known)
            return [...known, ...memberIds.filter((id) => !knownSet.has(id))]
          }
          const accountOrder = (key, memberIds) => orderFrom(Array.isArray(storedAccounts[key]) ? storedAccounts[key] : [], memberIds)
          // Workspace manual order: a drag-written account covering every
          // member wins wholesale; otherwise the workspace ledger orders rows
          // (archived rows keep their member positions) with unknown rows last.
          const workspaceOrder = (workspaceId, memberIds) => {
            const stored = Array.isArray(storedAccounts[workspaceId]) ? storedAccounts[workspaceId] : []
            const memberSet = new Set(memberIds)
            let knownCount = 0
            for (const id of stored) if (memberSet.has(id)) knownCount++
            if (knownCount === memberIds.length) return accountOrder(workspaceId, memberIds)
            const owner = items.find((w) => w.workspaceId === workspaceId)
            if (owner === undefined) return memberIds
            const ledger = owner.sessionIds
            const ordered = ledger.filter((id) => memberSet.has(id))
            const orderedSet = new Set(ordered)
            return [...ordered, ...memberIds.filter((id) => !orderedSet.has(id))]
          }
          if (view.groupBy === 'flat') {
            if (view.orderBy === 'manual') {
              const order = orderFrom(flatOrder, rows.map((r) => r.id))
              const byIdRow = new Map(rows.map((r) => [r.id, r]))
              rows = order.map((id) => byIdRow.get(id)).filter((r) => r !== undefined)
            } else {
              rows = [...rows].sort(byRecency)
            }
          }
          const groups = []
          const byWorkspace = new Map()
          const ungrouped = []
          const flatView = view.groupBy === 'flat' || searching
          if (!flatView) {
            for (const row of rows) {
              const owner = items.find((w) => w.sessionIds.includes(row.id))
              if (owner === undefined) ungrouped.push(row)
              else {
                let entry = byWorkspace.get(owner.workspaceId)
                if (entry === undefined) { entry = { key: 'w:' + owner.workspaceId, title: owner.title, rows: [], workspaceId: owner.workspaceId }; byWorkspace.set(owner.workspaceId, entry) }
                entry.rows.push(row)
              }
            }
            for (const entry of byWorkspace.values()) {
              if (view.orderBy === 'updated') {
                entry.rows.sort(byRecency)
              } else {
                const order = workspaceOrder(entry.workspaceId, entry.rows.map((r) => r.id))
                const map = new Map(entry.rows.map((r) => [r.id, r]))
                entry.rows = order.map((id) => map.get(id)).filter((r) => r !== undefined)
              }
            }
            // Ungrouped rows follow the shared "" account (native reconcile
            // keys that account on ALL unaccounted ids, archived included,
            // so the order genuinely round-trips through the native store).
            if (view.orderBy === 'updated') ungrouped.sort(byRecency)
            else {
              const order = accountOrder('', ungrouped.map((r) => r.id))
              const map = new Map(ungrouped.map((r) => [r.id, r]))
              const ordered = order.map((id) => map.get(id)).filter((r) => r !== undefined)
              ungrouped.length = 0
              ungrouped.push(...ordered)
            }
          }
          if (flatView) {
            groups.push({ key: 'flat', title: t('section.sessions'), rows, flat: true })
          } else {
            for (const entry of byWorkspace.values()) groups.push(entry)
            if (ungrouped.length > 0) groups.push({ key: 'ungrouped', title: t('ungrouped'), rows: ungrouped })
          }
          const fail = (reason) => setError(reason instanceof Error ? reason.message : String(reason))
          const run = (action) => { setBusy(true); setError(null); return Promise.resolve().then(action).catch(fail).finally(() => setBusy(false)) }
          const localRemove = (id) => {
            if (workspaces !== undefined) {
              // Optimistic echo saving one frame before the host's broadcast
              // frame lands (the domain write always follows). Talks to two
              // internal manager fields — guarded so an upstream rename merely
              // drops the optimization, never throws.
              try {
                const m = workspaces.manager
                if (m !== undefined && Array.isArray(m.archivedSessionIds)) {
                  m.archivedSessionIds = m.archivedSessionIds.filter((x) => x !== id)
                  if (m.notifier !== undefined && typeof m.notifier.markDirty === 'function') m.notifier.markDirty()
                }
              } catch (e) {}
              workspaces.project()
              if (typeof workspaces.refresh === 'function') workspaces.refresh()
            }
            if (sessions !== undefined && typeof sessions.refresh === 'function') sessions.refresh()
          }
          const onOpen = (id) => {
            // The sweep is gone in the project patch (41-version semantics): open directly, archive state unchanged.
            if (sessions !== undefined) sessions.open(id)
          }
          const onRestore = (id) => {
            run(() => hostCall('unarchive', { sessionId: id }).then((r) => { if (r !== null && typeof r === 'object' && r.ok !== true) throw hostError(r) }).then(() => localRemove(id)))
          }
          const onConfirmDelete = () => {
            if (confirmTarget === null || busyRef.current) return
            const id = confirmTarget.id
            // Page-open protection (host no longer guards this): never delete
            // the session currently shown in the live view. Archived sessions
            // are usually not current; this covers the archive-then-clear race.
            if (current === id) {
              setConfirmError(t('err.still-live'))
              return
            }
            busyRef.current = true
            const work = () => hostCall('delete', { sessionId: id }).then((r) => { if (r !== null && typeof r === 'object' && r.ok !== true) throw hostError(r) })
            setBusy(true)
            setError(null)
            setConfirmError(null)
            Promise.resolve().then(work)
              // Local row removal only after the host confirmed: a failed
              // delete must not flicker the row away (client review m1). The
              // optional private-API echo is best-effort — a throw here must
              // not misreport a completed delete as failed.
              .then(() => {
                const m = sessions !== undefined ? sessions.manager : undefined
                if (m !== undefined && typeof m.recordMutation === 'function') {
                  try { m.recordMutation({ kind: 'remove', sessionId: id }) } catch (e) {}
                }
                return localRemove(id)
              })
              .then(() => { setConfirmTarget(null) })
              .catch((reason) => {
                if (sessions !== undefined && typeof sessions.refresh === 'function') sessions.refresh()
                setConfirmError(reason instanceof Error ? reason.message : String(reason))
                // Failure path: focus was lost to <body> when busy disabled
                // the confirm button — put the keyboard user back on it.
                if (confirmBtnRef.current !== null) { try { confirmBtnRef.current.focus() } catch (e) {} }
              })
              .finally(() => { setBusy(false); busyRef.current = false })
          }
          confirmDeleteRef.current = onConfirmDelete
          // ── Manual-order drag commit (native replica): the marker is the
          // dashed insertion rule on the hovered row's half; commit writes the
          // shared store account (workspace groups) or the panel-owned flat
          // order, so manual order stays in sync both ways. Hook state lives
          // above the open guard; only the handlers sit here.
          const rowHalf = (e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            return e.clientY < rect.top + rect.height / 2 ? 'before' : 'after'
          }
          const persistOrder = (accountKey, order) => {
            const instance = viewStoreRef.current
            if (instance !== null && typeof instance.actions.setSessionOrder === 'function') instance.actions.setSessionOrder(accountKey, order)
            else setView((v) => ({ ...v, accounts: { ...v.accounts, [accountKey]: order } }))
          }
          const persistFlatOrder = (order) => {
            try { window.localStorage.setItem(FLAT_ORDER_KEY, JSON.stringify(order)) } catch (e) {}
            setFlatOrder(order)
          }
          const commitDrag = (active, over) => {
            if (dragCommittedRef.current) return
            dragCommittedRef.current = true
            setDrag(null)
            const group = groups.find((g) => g.key === active.accountKey)
            if (group === undefined) return
            const targetIndex = group.rows.findIndex((r) => r.id === over.id)
            if (targetIndex === -1) return
            const anchor = over.half === 'before' ? over.id : (group.rows[targetIndex + 1] !== undefined ? group.rows[targetIndex + 1].id : undefined)
            if (anchor === active.sessionId) return
            const sourceIndex = group.rows.findIndex((r) => r.id === active.sessionId)
            const anchorIndex = anchor === undefined ? group.rows.length : group.rows.findIndex((r) => r.id === anchor)
            if (sourceIndex !== -1 && (anchorIndex === sourceIndex || anchorIndex === sourceIndex + 1)) return
            const memberIds = group.rows.map((r) => r.id)
            const nextOrder = memberIds.filter((id) => id !== active.sessionId)
            const insertAt = anchor === undefined ? nextOrder.length : nextOrder.indexOf(anchor)
            nextOrder.splice(insertAt === -1 ? nextOrder.length : insertAt, 0, active.sessionId)
            if (group.flat === true) { persistFlatOrder(nextOrder); markSettled(active.sessionId); return }
            // Workspace/ungrouped accounts are shared with the native browser
            // and hold the FULL membership (active + archived; the ungrouped
            // account key is "" — writing `undefined` would poison the store):
            // reorder only among the archived members and keep every active
            // member's absolute slot, so a panel drag never scrambles the
            // native manual order.
            const accountKey = group.key === 'ungrouped' ? '' : group.workspaceId
            if (accountKey === undefined) return
            // Dedupe at the point the skeleton takes its final shape (both
            // the stored branch and the ledger/member fallbacks): a repeated
            // id would advance the cursor past nextOrder's end and persist a
            // `null` into the shared store.
            let skeleton
            if (Array.isArray(storedAccounts[accountKey]) && storedAccounts[accountKey].length > 0) {
              skeleton = storedAccounts[accountKey]
            } else if (accountKey === '') {
              const accounted = new Set()
              for (const w of items) for (const sid of w.sessionIds) accounted.add(sid)
              skeleton = Object.keys(byId).filter((id) => !accounted.has(id))
            } else {
              const owner = items.find((w) => w.workspaceId === accountKey)
              skeleton = owner !== undefined ? owner.sessionIds : memberIds
            }
            skeleton = [...new Set(skeleton)]
            const nextSet = new Set(nextOrder)
            let cursor = 0
            const merged = []
            for (const id of skeleton) {
              if (nextSet.has(id)) merged.push(nextOrder[cursor++])
              else merged.push(id)
            }
            while (cursor < nextOrder.length) merged.push(nextOrder[cursor++])
            persistOrder(accountKey, merged)
            markSettled(active.sessionId)
          }
          const renderRow = (row, flat, group) => {
            const status = row.blank ? null : sessionStatusOf(row)
            const draggable = !searching && group !== undefined
            const sameGroupDrag = drag !== null && group !== undefined && drag.accountKey === group.key
            const marker = sameGroupDrag && drag.over !== null && drag.over.id === row.id ? drag.over.half : null
            // One-shot remount key for the just-dropped row: replays the
            // standard mount fade as the drop-settle animation.
            const rowKey = settledRow !== null && settledRow.id === row.id ? row.id + '#settle' + settledRow.seq : row.id
            return h('div', {
              className: 'arcv-sessionRow'
                + (row.id === current ? ' arcv-selected' : '')
                + (flat && status === null ? ' arcv-flatNoStatus' : '')
                + (marker === 'before' ? ' arcv-dropBefore' : '')
                + (marker === 'after' ? ' arcv-dropAfter' : ''),
              key: rowKey,
              onClick: () => onOpen(row.id),
              ...(draggable ? {
                draggable: true,
                onDragStart: (e) => { dragCommittedRef.current = false; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', row.id); setDrag({ accountKey: group.key, sessionId: row.id, over: null }) },
                onDragEnd: () => {
                  if (drag !== null && drag.over !== null) commitDrag(drag, drag.over)
                  else setDrag(null)
                  dragCommittedRef.current = false
                },
                onDragOver: (e) => {
                  if (!sameGroupDrag) return
                  e.preventDefault()
                  e.dataTransfer.dropEffect = 'move'
                  const half = rowHalf(e)
                  setDrag((d) => (d === null || (d.over !== null && d.over.id === row.id && d.over.half === half)) ? d : { ...d, over: { id: row.id, half } })
                },
                onDrop: (e) => {
                  if (!sameGroupDrag) return
                  e.preventDefault()
                  if (drag !== null) commitDrag(drag, { id: row.id, half: rowHalf(e) })
                },
              } : {}),
            },
            (!flat || status !== null)
              ? h('span', { className: 'arcv-slot', ...(status !== null ? { title: status.label } : {}) },
                  status !== null ? h(StateDot, { state: status.state }) : null)
              : null,
            h('span', { className: 'arcv-title' }, row.displayTitle),
            !row.blank ? h('span', { className: 'arcv-time' }, relativeTime(row.updatedAt, now)) : null,
            h('span', { className: 'arcv-rowActions' },
              h('button', {
                type: 'button', className: 'arcv-iconRow arcv-restoreAction',
                'aria-label': t('restore.aria', { name: row.displayTitle }), title: t('restore'),
                onClick: (e) => { e.stopPropagation(); onRestore(row.id) },
              }, h(Icon, { name: 'Refresh', size: 14 })),
              h('button', {
                type: 'button', className: 'arcv-iconRow arcv-dangerAction',
                'aria-label': t('delete.aria', { name: row.displayTitle }), title: t('delete'),
                onClick: (e) => { e.stopPropagation(); setError(null); setConfirmError(null); setConfirmTarget({ id: row.id, title: row.displayTitle }) },
              }, h(Icon, { name: 'Trash', size: 14 }))))
          }
          return h('div', { className: 'arcv-panel', role: 'dialog', 'aria-label': t('section') },
            h('div', { className: 'arcv-sectionHeader' },
              h('span', { className: 'arcv-sectionLabel arcv-sectionLabelArcv' + (searchExpanded ? ' arcv-sectionLabelHidden' : '') },
                t('section')),
              h('div', { className: 'arcv-searchSlot' + (searchExpanded ? ' arcv-searchSlotExpanded' : '') },
                h('div', {
                  className: 'arcv-search' + (searchExpanded ? ' arcv-searchExpanded' : ''),
                  ref: searchRootRef,
                  onClick: () => { setSearchExpanded(true); if (searchInputRef.current !== null) searchInputRef.current.focus() },
                },
                  h('button', {
                    type: 'button', className: 'arcv-searchButton',
                    'aria-label': t('search.sessions.aria'), 'aria-expanded': searchExpanded, title: t('search.sessions.aria'),
                    onClick: (e) => { e.stopPropagation(); setSearchExpanded(true); if (searchInputRef.current !== null) searchInputRef.current.focus() },
                  }, h(Icon, { name: 'Search', size: searchExpanded ? 11 : 14 })),
                  h('input', {
                    ref: searchInputRef,
                    className: 'arcv-searchInput',
                    type: 'text',
                    placeholder: t('search.placeholder'),
                    maxLength: 500,
                    value: query,
                    tabIndex: searchExpanded ? 0 : -1,
                    onChange: (e) => setQuery(sanitizeSearchQuery(e.target.value)),
                    onKeyDown: (e) => {
                      if (e.key !== 'Escape') return
                      setQuery('')
                      setSearchExpanded(false)
                    },
                  }),
                  searchExpanded && query !== ''
                    ? h('button', {
                        type: 'button', className: 'arcv-clearButton',
                        'aria-label': t('search.clear'),
                        onClick: (e) => { e.stopPropagation(); setQuery(''); setSearchExpanded(false) },
                      }, h(Icon, { name: 'Close', size: 14 }))
                    : null)),
              h('div', { className: 'arcv-headerActions' + (searchExpanded ? ' arcv-headerActionsHidden' : '') },
                h(ViewOptionsMenu, {
                  groupBy: view.groupBy, orderBy: view.orderBy,
                  onPick: (id) => {
                    const instance = viewStoreRef.current
                    if (id === 'workspace' || id === 'flat') {
                      if (instance !== null && typeof instance.actions.setGroupBy === 'function') instance.actions.setGroupBy(id)
                      else setView((v) => ({ ...v, groupBy: id }))
                    } else {
                      if (instance !== null && typeof instance.actions.setOrderBy === 'function') instance.actions.setOrderBy(id)
                      else setView((v) => ({ ...v, orderBy: id }))
                    }
                  },
                }),
                h('button', {
                  type: 'button', className: 'arcv-iconButton', title: t('close'), 'aria-label': t('close.aria'),
                  onClick: () => panel.set(false),
                }, h(Icon, { name: 'Close', size: 17 })))),
            error !== null ? h('div', { className: 'arcv-error', onClick: () => setError(null) }, error + t('error.dismiss')) : null,
            // Native SearchResults layout: the status rows live INSIDE the
            // scrolling list, after the result rows (rows → pending →
            // warning → no-matches), not above the list.
            rows.length === 0 && !(searching && searchStatus === 'loading')
              ? h('div', { className: 'arcv-empty' }, searching ? t('empty.noMatches') : t('empty'))
              : h('div', { className: 'arcv-list' },
                groups.map((group) => {
                  // Search mode: native two-line result rows, no group folder.
                  if (searching) {
                    return h('div', { className: 'arcv-groupSection', key: group.key },
                      ...group.rows.map((row) => {
                        const st = row.blank ? null : sessionStatusOf(row)
                        return h('button', {
                          type: 'button',
                          className: 'arcv-searchResultRow' + (row.id === current ? ' arcv-selected' : ''),
                          key: row.id,
                          role: 'treeitem', 'aria-selected': row.id === current,
                          onClick: () => onOpen(row.id),
                        },
                        h('span', { className: 'arcv-searchResultHeading' },
                          h('span', { className: 'arcv-slot' }, st !== null ? h(StateDot, { state: st.state }) : null),
                          h('span', { className: 'arcv-searchResultTitle' }, row.displayTitle)),
                        h('span', { className: 'arcv-searchResultMeta' },
                          h('span', { className: 'arcv-searchResultWorkspace' }, workspaceTitleOf(row.id)),
                          row.snippet !== undefined ? h('span', { className: 'arcv-searchResultSnippet' }, row.snippet) : null))
                      }))
                  }
                  if (group.flat === true) {
                    return h('div', { className: 'arcv-groupSection', key: group.key },
                      ...group.rows.map((r) => renderRow(r, true, group)))
                  }
                  const isExpanded = expandedSet[group.key] === true
                  return h('div', { className: 'arcv-groupSection', key: group.key },
                    h('div', { className: 'arcv-projectRow', onClick: () => setExpandedSet((prev) => ({ ...prev, [group.key]: !isExpanded })) },
                      h('span', { className: 'arcv-slot' + (isExpanded ? ' arcv-folderActive' : '') }, h(Icon, { name: isExpanded ? 'FolderOpen' : 'FolderClose', size: 16 })),
                      h('span', { className: 'arcv-projectText' }, h('span', { className: 'arcv-title' }, group.title))),
                    ...(isExpanded ? group.rows : []).map((r) => renderRow(r, false, group)))
                }),
                // Status rows trail the result rows inside the list
                // (native order: rows → pending → warning).
                searching && searchStatus === 'loading' ? h('div', { className: 'arcv-searchPending', role: 'status' }, t('search.pending')) : null,
                searching && searchStatus === 'name-only' ? h('div', { className: 'arcv-searchWarning', role: 'status' }, t('search.unavailable')) : null),
            confirmTarget !== null
              ? h('div', { className: 'arcv-modal-backdrop', role: 'presentation' },
                h('div', { className: 'arcv-modal-mask', 'aria-hidden': true, onClick: () => { if (!busyRef.current) setConfirmTarget(null) } }),
                h('div', { className: 'arcv-modal', role: 'dialog', 'aria-modal': true, 'aria-label': t('delete.title'), ref: modalRef },
                  h('div', { className: 'arcv-modal-header' },
                    h('h2', { className: 'arcv-modal-title' }, t('delete.title')),
                    h('button', {
                      type: 'button', className: 'arcv-modal-close', 'aria-label': t('close'), disabled: busy,
                      onClick: () => { if (!busyRef.current) setConfirmTarget(null) },
                    }, h(Icon, { name: 'Close', size: 14 }))),
                  h('p', { className: 'arcv-modal-desc' }, t('delete.desc', { name: confirmTarget.title })),
                  busy ? h('div', { className: 'arcv-modal-status', role: 'status' }, t('delete.pending')) : null,
                  confirmError !== null ? h('div', { className: 'arcv-modal-error', role: 'alert' }, confirmError) : null,
                  h('div', { className: 'arcv-modal-footer' },
                    h('button', {
                      type: 'button', className: 'arcv-modal-btn', disabled: busy,
                      onClick: () => { if (!busyRef.current) setConfirmTarget(null) },
                    },
                      t('cancel'), h('span', { className: 'arcv-modal-kbd' }, 'esc')),
                    h('button', {
                      type: 'button', className: 'arcv-modal-btn arcv-modal-btn-danger', disabled: busy,
                      ref: confirmBtnRef, onClick: onConfirmDelete,
                    },
                      t('delete'), h('span', { className: 'arcv-modal-kbd' }, '⏎')))))
              : null)
        }

        function FooterButton(props) {
          const open = useStore(panel)
          const collapsed = useSidebarCollapsed()
          // Collapsing the sidebar (the rail toggle) closes the archive panel:
          // the rail has no room for it and a zombie-open state would linger.
          react.useEffect(() => { if (collapsed) panel.set(false) }, [collapsed])
          return h('button', {
            type: 'button',
            className: 'arcv-footer-btn',
            'aria-label': t('footer'), title: t('footer'),
            'aria-expanded': open,
            onClick: () => {
              const next = !open
              // Opening the archive panel closes the native browser's inline
              // search (the same DOM click would land inside it); closing the
              // panel resets the panel search via the panel's own effect.
              if (next) {
                // :not([class*="arcv"]) — the panel's own input class contains
                // "searchInput" too and must never be matched here.
                const input = document.querySelector('input[class*="searchInput"]:not([class*="arcv"])')
                if (input !== null) {
                  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
                  setter.call(input, '')
                  input.dispatchEvent(new window.Event('input', { bubbles: true }))
                }
                // footer.action slot props carry only { wide }; expansion goes
                // through the layout service (the official sidebar channel).
                if (collapsed) {
                  const layout = ctx.get('layout')
                  if (layout !== undefined && typeof layout.toggleSidebar === 'function') layout.toggleSidebar()
                }
              }
              panel.set(next)
            },
          },
            h(Icon, { name: 'Archive', size: props.wide ? 16 : 18 }),
            props.wide ? h('span', { className: 'arcv-footer-label' }, t('footer')) : null)
        }

        // The disposer is the ONLY cleanup channel for inject: slots.inject
        // registers its effect on the service's own context, not this fiber —
        // dropping it would leave the footer entry (pointing at dead host
        // routes) resident after unload.
        cleanups.push(slots.inject('sidebar.footer.action', () => slots.register(
          { name: 'sidebar.footer.action', id: 'archive-view-entry', label: t('footer') },
          (props) => h(react.Fragment, null, h(FooterButton, { ...props }), h(ArchivePanel, { ...props })),
        )))
        return () => {
          // Each step isolated: one failing disposer must not skip the rest.
          for (const restore of restorePatches) { try { restore() } catch (e) {} }
          for (const dispose of cleanups) { try { dispose() } catch (e) {} }
          styleEl.remove()
        }
      },
    }
    return client
  },
})
