window.__ModuleLoader__.load({
  id: "dsh-archive-manager",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    let react = require("react");

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
.arcv-menuPortal{position:fixed;z-index:1100}
.arcv-searchPending{color:var(--dsw-alias-label-tertiary);padding:10px 12px;font-size:12px;line-height:18px}
.arcv-searchWarning{color:var(--dsw-alias-label-secondary);padding:10px 12px;font-size:12px;line-height:18px}
.arcv-sessionRow.arcv-dropBefore::before,.arcv-sessionRow.arcv-dropAfter::after{content:'';position:absolute;z-index:1;left:0;right:4px;height:12px;background:linear-gradient(55deg,transparent calc(50% - 1px),var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),transparent calc(50% + 1px)) 0 0/5px 7px no-repeat,linear-gradient(125deg,transparent calc(50% - 1px),var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),transparent calc(50% + 1px)) 0 5px/5px 7px no-repeat,linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px/calc(100% - 4px) 2px no-repeat;pointer-events:none}
.arcv-sessionRow.arcv-dropBefore::before{top:-7px}
.arcv-sessionRow.arcv-dropAfter::after{bottom:-7px}
.arcv-sessionRow{position:relative}
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
.arcv-dot{position:relative;display:inline-block;flex:none}
.arcv-dot::before{content:'';position:absolute;inset:0;border-radius:50%;background:currentColor;opacity:.1}
.arcv-dot::after{content:'';position:absolute;inset:20%;border-radius:50%;background:currentColor}
.arcv-dot[data-state='done']{color:var(--dsw-alias-state-success-primary)}
.arcv-dot[data-state='warning']{color:var(--dsw-alias-state-warn-primary)}
.arcv-dot[data-state='error']{color:var(--dsw-alias-state-error-primary)}
.arcv-matrix{flex:none;color:var(--dsw-static-deepseek-450)}
.arcv-matrix .arcv-cell{fill:currentColor;opacity:.15;animation:arcv-dot-chase 1s infinite}
@keyframes arcv-dot-chase{0%,12.4%{opacity:1}12.5%,24.9%{opacity:.6}25%,37.4%{opacity:.35}37.5%,100%{opacity:.15}}
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

    // Private host channel: POST /__arcv/<method> (route registered on the host-side webServer service).
    function hostCall(method, args) {
      return fetch('/__arcv/' + method, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(args ?? {}),
      })
        .then((r) => r.json())
        .catch((e) => ({ ok: false, message: String(e && e.message ? e.message : e) }))
    }

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
          const zh = { 'footer': '已归档', 'section': '归档区', 'close': '关闭', 'close.aria': '关闭归档视图', 'restore': '恢复', 'restore.aria': '恢复会话“{name}”', 'delete': '删除', 'delete.aria': '删除会话“{name}”', 'empty': '没有已归档的会话', 'empty.noMatches': '无匹配结果', 'ungrouped': '未分组', 'delete.title': '删除会话', 'delete.desc': '将永久删除会话“{name}”及其全部记录，此操作不可撤销。', 'cancel': '取消', 'delete.pending': '正在删除会话…', 'error.dismiss': '（点击关闭）', 'time.now': '刚刚', 'time.minutes': '{n} 分钟前', 'time.hours': '{n} 小时前', 'time.days': '{n} 天前', 'time.months': '{n} 个月前', 'time.years': '{n} 年前', 'status.running': '运行中', 'status.completed': '已完成', 'status.waitingApproval': '等待批准', 'status.planReview': '等待计划审阅', 'status.waitingAnswer': '等待回答', 'err.still-live': '会话仍在本页打开，请先切换到其他会话再删除', 'err.no-captured-disposer': '无法停止该会话的代理（控制权已随插件重载丢失），请重启 dsh 后再删除', 'err.log-path-rejected': '日志路径含异常字符，已拒绝删除', 'err.log-removal-failed': '日志删除失败（退出码 {code}）', 'err.persistence-unavailable': '持久化服务不可用', 'err.unknown': '操作失败，请重试', 'viewOptions.label': '视图选项', 'groupBy.label': '分组方式', 'groupBy.workspace': '按工作区', 'groupBy.flat': '单列表', 'orderBy.label': '排序方式', 'orderBy.manual': '手动排序', 'orderBy.updated': '最近更新', 'section.sessions': '会话', 'search.sessions.aria': '搜索会话', 'search.placeholder': '搜索会话…', 'search.clear': '清除搜索', 'search.pending': '正在搜索会话历史…', 'search.unavailable': '内容搜索暂不可用，仅显示名称匹配。' }
          const en = { 'footer': 'Archived', 'section': 'Archive', 'close': 'Close', 'close.aria': 'Close archive view', 'restore': 'Restore', 'restore.aria': 'Restore session “{name}”', 'delete': 'Delete', 'delete.aria': 'Delete session “{name}”', 'empty': 'No archived sessions', 'empty.noMatches': 'No matches', 'ungrouped': 'Ungrouped', 'delete.title': 'Delete session', 'delete.desc': 'This permanently deletes session “{name}” and its full record. This cannot be undone.', 'cancel': 'Cancel', 'delete.pending': 'Deleting session…', 'error.dismiss': ' (click to dismiss)', 'time.now': 'Just now', 'time.minutes': '{n} min ago', 'time.hours': '{n} h ago', 'time.days': '{n} d ago', 'time.months': '{n} mo ago', 'time.years': '{n} y ago', 'status.running': 'Running', 'status.completed': 'Completed', 'status.waitingApproval': 'Waiting for approval', 'status.planReview': 'Waiting for plan review', 'status.waitingAnswer': 'Waiting for answer', 'err.still-live': 'Session is open in this page; switch to another session before deleting', 'err.no-captured-disposer': 'Cannot stop the session agent (control lost after a plugin reload); restart dsh and retry', 'err.log-path-rejected': 'Log path has unexpected characters; delete refused', 'err.log-removal-failed': 'Log removal failed (exit code {code})', 'err.persistence-unavailable': 'Session persistence unavailable', 'err.unknown': 'Operation failed; please retry', 'viewOptions.label': 'View options', 'groupBy.label': 'Group by', 'groupBy.workspace': 'WorkSpace', 'groupBy.flat': 'In one list', 'orderBy.label': 'Order by', 'orderBy.manual': 'Manual', 'orderBy.updated': 'Recently updated', 'section.sessions': 'Sessions', 'search.sessions.aria': 'Search sessions', 'search.placeholder': 'Search sessions…', 'search.clear': 'Clear search', 'search.pending': 'Searching session history…', 'search.unavailable': 'Content search unavailable; showing name matches only.' }
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

        const ICONS = {
          FolderOpen: ["0 0 16 16", [{ d: "M5.19629 1.57104C5.81144 1.5711 6.38623 1.8786 6.72754 2.39038L7.19922 3.09839C7.28454 3.22635 7.42824 3.30344 7.58203 3.30347H12.1699C13.5039 3.30348 14.5859 4.38548 14.5859 5.71948V6.62671C15.2694 7.02689 15.6605 7.85012 15.4385 8.68726L14.3848 12.658C14.1037 13.7164 13.1449 14.4527 12.0498 14.4529H2.91699C1.51651 14.4529 0.451662 13.2814 0.501954 11.9519V3.98706C0.501954 2.65305 1.58396 1.57104 2.91797 1.57104H5.19629ZM3.7793 7.75562C3.30994 7.75562 2.89883 8.07153 2.77832 8.52515L1.91602 11.7722C1.74167 12.4291 2.23734 13.073 2.91699 13.073H12.0498C12.5191 13.0728 12.9304 12.757 13.0508 12.3035L14.1045 8.33374C14.1819 8.04202 13.9619 7.756 13.6602 7.75562H3.7793ZM2.91797 2.9519C2.34625 2.9519 1.88281 3.41534 1.88281 3.98706V7.2937C2.33068 6.7269 3.02249 6.37476 3.7793 6.37476H13.2051V5.71948C13.2051 5.14777 12.7416 4.68434 12.1699 4.68433H7.58203C6.96675 4.6843 6.39209 4.37595 6.05078 3.86401L5.5791 3.15601C5.49379 3.02821 5.34995 2.95196 5.19629 2.9519H2.91797Z" }, { d: "M13.6602 7.75525C13.9618 7.7556 14.1815 8.04179 14.1045 8.33337L13.0508 12.3031C12.9304 12.7567 12.5191 13.0725 12.0498 13.0726H2.91701C2.23744 13.0725 1.7417 12.4287 1.91603 11.7719L2.77834 8.52478C2.89898 8.07146 3.31018 7.75532 3.77931 7.75525H13.6602ZM5.1963 2.95154C5.34985 2.95159 5.49377 3.02803 5.57912 3.15564L6.0508 3.86365C6.39205 4.37553 6.96685 4.68385 7.58205 4.68396H12.1699C12.7416 4.68396 13.2049 5.14754 13.2051 5.71912V6.37439H3.77931C3.02267 6.37444 2.33067 6.72671 1.88283 7.29333V3.98669C1.88299 3.4152 2.34649 2.95168 2.91798 2.95154H5.1963Z", o: "0.2" }]],
          FolderClose: ["0 0 16 16", [{ d: "M5.05582 0.518756L4.50669 0.86654L5.05582 0.518756ZM13 9.4837L13.65 9.4837L13.65 3.53962L13 3.53962L12.35 3.53962L12.35 9.4837L13 9.4837ZM11.3264 1.86603L11.3264 1.21603L6.52313 1.21603L6.52313 1.86603L6.52313 2.51603L11.3264 2.51603L11.3264 1.86603ZM5.58054 1.34727L6.12968 0.999489L5.60495 0.170972L5.05582 0.518756L4.50669 0.86654L5.03141 1.69506L5.58054 1.34727ZM4.11323 1.23058e-13L4.11323 -0.65L1.67359 -0.65L1.67359 5.00699e-14L1.67359 0.65L4.11323 0.65L4.11323 1.23058e-13ZM0 1.67359L-0.65 1.67359L-0.65 9.4837L0 9.4837L0.65 9.4837L0.65 1.67359L0 1.67359ZM11.3264 11.1573L11.3264 10.5073L1.67359 10.5073L1.67359 11.1573L1.67359 11.8073L11.3264 11.8073L11.3264 11.1573ZM0 9.4837L-0.65 9.4837C-0.65 10.767 0.390308 11.8073 1.67359 11.8073L1.67359 11.1573L1.67359 10.5073C1.10828 10.5073 0.65 10.049 0.65 9.4837L0 9.4837ZM1.67359 5.00699e-14L1.67359 -0.65C0.390307 -0.65 -0.65 0.390309 -0.65 1.67359L0 1.67359L0.65 1.67359C0.65 1.10828 1.10828 0.65 1.67359 0.65L1.67359 5.00699e-14ZM5.05582 0.518756L5.60495 0.170972C5.28121 -0.340193 4.71829 -0.65 4.11323 -0.65L4.11323 1.23058e-13L4.11323 0.65C4.27282 0.65 4.4213 0.731715 4.50669 0.86654L5.05582 0.518756ZM6.52313 1.86603L6.52313 1.21603C6.36354 1.21603 6.21507 1.13431 6.12968 0.999489L5.58054 1.34727L5.03141 1.69506C5.35515 2.20622 5.91808 2.51603 6.52313 2.51603L6.52313 1.86603ZM13 3.53962L13.65 3.53962C13.65 2.25634 12.6097 1.21603 11.3264 1.21603L11.3264 1.86603L11.3264 2.51603C11.8917 2.51603 12.35 2.97431 12.35 3.53962L13 3.53962ZM13 9.4837L12.35 9.4837C12.35 10.049 11.8917 10.5073 11.3264 10.5073L11.3264 11.1573L11.3264 11.8073C12.6097 11.8073 13.65 10.767 13.65 9.4837L13 9.4837Z", t: "translate(1.5 2.429)" }]],
          Archive: ["0 0 20 20", [{ d: "M15.8659 2.05975C17.2603 2.05995 18.3913 3.19096 18.3914 4.58527V5.4874C18.3914 6.02747 18.2192 6.52672 17.9303 6.93735C17.9336 6.96524 17.9388 6.99318 17.9388 7.02195V12.8884C17.9388 13.6345 17.9395 14.2379 17.8996 14.7254C17.8642 15.1593 17.7936 15.5499 17.6373 15.9141L17.5654 16.0685C17.278 16.6328 16.8405 17.1046 16.3038 17.434L16.0679 17.5661C15.66 17.7739 15.2196 17.8598 14.7237 17.9003C14.2362 17.9401 13.6327 17.9405 12.8867 17.9405H7.11122C6.36511 17.9405 5.76171 17.9401 5.27418 17.9003C4.84051 17.8649 4.44949 17.7952 4.08545 17.6391L3.93104 17.5661C3.36673 17.2785 2.89392 16.8414 2.56465 16.3044L2.43245 16.0685C2.22473 15.6608 2.13878 15.2211 2.09825 14.7254C2.05841 14.2379 2.05912 13.6345 2.05912 12.8884V7.02195C2.05912 6.99284 2.06422 6.96449 2.06758 6.93629C1.77931 6.52592 1.60858 6.02687 1.60858 5.4874V4.58527C1.60876 3.19084 2.73962 2.05975 4.1341 2.05975H15.8659ZM16.4984 7.92936C16.296 7.98169 16.0847 8.01288 15.8659 8.01291H4.1341C3.91478 8.01291 3.70246 7.98194 3.49955 7.92936V12.8884C3.49955 13.6582 3.50053 14.1927 3.53445 14.608C3.56769 15.0146 3.62923 15.244 3.71635 15.415L3.7925 15.5514C3.98339 15.8627 4.25749 16.1165 4.58464 16.2833L4.72529 16.3435C4.88095 16.3993 5.08638 16.4402 5.39158 16.4651C5.80685 16.4991 6.34138 16.5001 7.11122 16.5001H12.8867C13.6564 16.5001 14.1911 16.499 14.6063 16.4651C15.0128 16.432 15.2423 16.3703 15.4133 16.2833L15.5508 16.2061C15.8618 16.0152 16.116 15.7419 16.2827 15.415L16.3429 15.2732C16.3985 15.1177 16.4396 14.9128 16.4645 14.608C16.4985 14.1927 16.4984 13.6583 16.4984 12.8884V7.92936ZM4.1341 3.50019C3.53511 3.50019 3.0492 3.98631 3.04902 4.58527V5.4874C3.04902 6.08649 3.535 6.57248 4.1341 6.57248H15.8659C16.4648 6.57228 16.951 6.08638 16.951 5.4874V4.58527C16.9509 3.98644 16.4647 3.50038 15.8659 3.50019H4.1341Z" }, { d: "M12.7962 12.5661V11.0832H7.20548V12.5661L12.7962 12.5661Z" }]],
          Close: ["0 0 14 14", [{ d: "M10.6074 4.40278L8.00975 6.99973L10.6074 9.59739L9.59736 10.6074L6.9997 8.00978L4.40274 10.6074L3.3927 9.59739L5.98966 6.99973L3.3927 4.40278L4.40274 3.39273L6.9997 5.98969L9.59736 3.39273L10.6074 4.40278Z" }]],
          CloseOutline: ["0 0 16 16", [{ d: "M14.1168 13.197L13.197 14.1167L1.8833 2.80303L2.80309 1.88324L14.1168 13.197Z" }, { d: "M13.197 1.88326L14.1168 2.80305L2.80309 14.1168L1.8833 13.197L13.197 1.88326Z" }]],
          Refresh: ["0 0 16 16", [{ d: "M7.92136 0.349152C10.3744 0.349234 12.5564 1.5052 13.9557 3.29894L15.1281 2.12759C15.3303 1.92546 15.6767 2.06943 15.6767 2.35538V5.53923C15.6766 5.71626 15.5329 5.85976 15.3559 5.86002H12.171C11.8854 5.8597 11.7426 5.51465 11.9443 5.31249L12.9641 4.29056C11.8237 2.74305 9.98908 1.74106 7.92136 1.74097C4.46436 1.74097 1.66233 4.543 1.66233 8C1.66233 11.457 4.46436 14.259 7.92136 14.259C11.3782 14.2589 14.1804 11.4569 14.1804 8H15.5722C15.5722 12.2251 12.1465 15.6507 7.92136 15.6508C3.69614 15.6508 0.270508 12.2252 0.270508 8C0.270508 3.77478 3.69614 0.349152 7.92136 0.349152Z" }]],
          Search: ["0 0 16 16", [{ d: "M11.894845 6.647401C11.894845 3.725463 9.534486 1.356779 6.623219 1.35657C3.711786 1.35657 1.351635 3.725338 1.351635 6.647401C1.351843 9.569296 3.711911 11.938273 6.623219 11.938273C9.534361 11.938064 11.894637 9.569171 11.894845 6.647401ZM13.245462 6.647401C13.245254 10.317935 10.280401 13.293613 6.623219 13.293821C2.965871 13.293821 0.000204 10.31806 0 6.647401C0 2.976574 2.965746 0 6.623219 0C10.280526 0.000205 13.245462 2.9767 13.245462 6.647401Z" }, { d: "M16.000417 15.041079L15.044449 16.000433L11.530434 12.473588L12.486298 11.514234L16.000417 15.041079Z" }]],
      Personalization: ["0 0 16 16", [{ d: "M10.3232 9.18164C11.2868 9.18164 12.0985 9.82833 12.3506 10.7109L13.415 10.7109L13.415 11.8711L12.3496 11.8711C12.0971 12.7532 11.2864 13.3994 10.3232 13.3994C9.36031 13.3992 8.55012 12.7531 8.29785 11.8711L0 11.8711L0 10.7109L8.29688 10.7109C8.54876 9.82845 9.35988 9.18186 10.3232 9.18164ZM10.3232 10.3418C9.7999 10.3421 9.37534 10.7667 9.375 11.29C9.375 11.8137 9.79969 12.239 10.3232 12.2393C10.847 12.2393 11.2725 11.8138 11.2725 11.29C11.2721 10.7666 10.8468 10.3418 10.3232 10.3418ZM12.4326 11.291C12.4326 11.3549 12.4284 11.418 12.4229 11.4805C12.4287 11.4181 12.4326 11.355 12.4326 11.291ZM8.21484 11.2832C8.21484 11.2856 8.21484 11.2886 8.21484 11.291L8.21484 11.29C8.21484 11.2878 8.21484 11.2855 8.21484 11.2832ZM3.08301 4.59082C4.04605 4.59095 4.85696 5.23717 5.10938 6.11914L13.415 6.11914L13.415 7.2793L5.11035 7.2793C4.85833 8.16202 4.04648 8.80846 3.08301 8.80859C2.11972 8.80843 1.30963 8.16179 1.05762 7.2793L0 7.2793L0 6.11914L1.05762 6.11914C1.30994 5.23728 2.12006 4.59098 3.08301 4.59082ZM3.08301 5.75098C2.55962 5.75117 2.13512 6.17587 2.13477 6.69922C2.13477 7.22287 2.5594 7.64824 3.08301 7.64844C3.60665 7.64828 4.03223 7.2229 4.03223 6.69922C4.03187 6.17585 3.60643 5.75113 3.08301 5.75098ZM5.19238 6.69922C5.19238 6.763 5.18816 6.82633 5.18262 6.88867C5.18846 6.82629 5.19238 6.76313 5.19238 6.69922C5.19236 6.63495 5.18853 6.57152 5.18262 6.50879C5.18826 6.57154 5.19236 6.635 5.19238 6.69922ZM0.982422 6.52344C0.977382 6.58136 0.97463 6.63999 0.974609 6.69922C0.974609 6.75775 0.977496 6.81579 0.982422 6.87305C0.977758 6.81579 0.974609 6.75767 0.974609 6.69922C0.974628 6.64 0.977618 6.58142 0.982422 6.52344ZM10.3232 0C11.2869 0 12.0986 0.646596 12.3506 1.5293L13.415 1.5293L13.415 2.68945L12.3496 2.68945C12.363 2.64266 12.3754 2.59488 12.3857 2.54688C12.1838 3.50118 11.3376 4.21777 10.3232 4.21777C9.36037 4.21756 8.55018 3.57139 8.29785 2.68945L0 2.68945L0 1.5293L8.29688 1.5293C8.5487 0.646717 9.35981 0.00021854 10.3232 0ZM10.3232 1.16016C9.79984 1.16042 9.37524 1.58499 9.375 2.1084C9.375 2.63201 9.79969 3.05735 10.3232 3.05762C10.847 3.05762 11.2725 2.63217 11.2725 2.1084C11.2722 1.58483 10.8469 1.16016 10.3232 1.16016ZM12.4229 2.29883C12.4287 2.23641 12.4326 2.17331 12.4326 2.10938C12.4326 2.17327 12.4284 2.23638 12.4229 2.29883ZM8.21484 2.10938L8.21484 2.1084L8.21484 2.10938ZM8.22266 1.93359C8.21785 1.98897 8.21506 2.04499 8.21484 2.10156C8.21503 2.04501 8.2181 1.98902 8.22266 1.93359ZM8.22266 11.1162C8.2179 11.1713 8.21507 11.2273 8.21484 11.2832C8.21504 11.2273 8.21814 11.1713 8.22266 11.1162Z", t: "translate(1.292 1.3)" }]],
      Check: ["0 0 14 14", [{ d: "M11.5635 4.58984L7.61426 9.07715C7.35154 9.37561 7.11346 9.64812 6.89453 9.84668C6.66593 10.054 6.38519 10.2506 6.01465 10.3164C5.82079 10.3508 5.62207 10.3529 5.42773 10.3213C5.0561 10.2609 4.77266 10.0674 4.54102 9.86328C4.31926 9.66791 4.07752 9.39911 3.81055 9.10449L2.44531 7.59863L3.55664 6.59082L4.92188 8.09766C5.21256 8.41844 5.38878 8.61191 5.53223 8.73828C5.61022 8.80699 5.65253 8.83192 5.66895 8.83984C5.69648 8.84429 5.72449 8.84467 5.75195 8.83984C5.72657 8.84451 5.75564 8.85422 5.88672 8.73535C6.02833 8.60692 6.20225 8.41088 6.48828 8.08594L10.4385 3.59961L11.5635 4.58984Z" }]],
      Trash: ["0 0 16 16", [{ d: "M14.4782 4.84067L14.2138 10.1152C14.1102 12.1872 14.067 13.0115 13.3866 13.9607C13.1044 14.3546 12.7498 14.6912 12.3424 14.9535C11.8239 15.2872 11.2415 15.4316 10.5585 15.4998C9.88727 15.5668 9.04946 15.5656 7.99998 15.5656C6.95051 15.5656 6.1127 15.5668 5.44142 15.4998C4.75851 15.4316 4.17602 15.2872 3.65753 14.9535C3.25012 14.6912 2.89559 14.3546 2.61332 13.9607C1.93296 13.0115 1.88979 12.1872 1.78619 10.1152L1.52179 4.84067L2.89006 4.77277L3.15343 10.0463C3.26221 12.2218 3.32452 12.6015 3.72646 13.1624C3.90825 13.4161 4.13686 13.6334 4.39927 13.8023C4.66204 13.9714 5.00263 14.0792 5.57825 14.1367C6.16562 14.1953 6.92298 14.1963 7.99998 14.1963C9.07699 14.1963 9.83434 14.1953 10.4217 14.1367C10.9973 14.0792 11.3379 13.9714 11.6007 13.8023C11.8631 13.6334 12.0917 13.4161 12.2735 13.1624C12.6755 12.6015 12.7378 12.2218 12.8465 10.0463L13.1099 4.77277L14.4782 4.84067ZM5.43011 6.22849H6.7994V11.3909H5.43011V6.22849ZM9.20056 6.22849H10.5699V11.3909H9.20056V6.22849ZM8.53597 0.434431C9.17976 0.434431 9.6522 0.426926 10.0966 0.571258C10.2357 0.616451 10.3717 0.672554 10.502 0.738948C10.9182 0.951107 11.2464 1.29099 11.7015 1.74612L12.4978 2.54136H15.3742V3.91169H0.625732V2.54136H3.50218L4.29845 1.74612C4.75358 1.29099 5.08174 0.951107 5.49801 0.738948C5.62831 0.672554 5.76425 0.616451 5.90334 0.571258C6.34776 0.426926 6.82021 0.434431 7.46399 0.434431H8.53597ZM7.46399 1.80476C6.73208 1.80476 6.51641 1.81187 6.32617 1.87369C6.25545 1.89667 6.18668 1.92533 6.12041 1.95907C5.96398 2.03878 5.82348 2.16253 5.44142 2.54136H10.5585C10.1765 2.16253 10.036 2.03878 9.87955 1.95907C9.81329 1.92533 9.74452 1.89667 9.6738 1.87369C9.48356 1.81187 9.26789 1.80476 8.53597 1.80476H7.46399Z" }]],
        }

        function Icon({ name, size, className }) {
          const spec = ICONS[name]
          if (spec === undefined) return null
          const [vb, paths] = spec
          return h('svg', {
            width: size, height: size, className, viewBox: vb, fill: 'none', 'aria-hidden': true,
          }, ...paths.map((p) => h('path', {
            d: p.d, fill: 'currentColor',
            ...(p.t !== undefined ? { transform: p.t } : {}),
            ...(p.o !== undefined ? { opacity: p.o } : {}),
          })))
        }

        // Status dot (official StateDot replica): done/warning/error are same-color halo dots; ongoing is the blue 8-cell pixel chase matrix.
        const DOT_MATRIX_CELLS = [[0, 0], [4, 0], [8, 0], [8, 4], [8, 8], [4, 8], [0, 8], [0, 4]]
        function StateDot({ state, size }) {
          const s = size ?? 10
          if (state === 'ongoing') {
            return h('svg', {
              className: 'arcv-matrix', 'data-state': 'ongoing', width: s, height: s,
              viewBox: '0 0 10 10', shapeRendering: 'crispEdges', 'aria-hidden': true,
            }, ...DOT_MATRIX_CELLS.map(([x, y], index) => h('rect', {
              key: x + '-' + y, className: 'arcv-cell', x, y, width: 2, height: 2,
              style: { animationDelay: ((index - DOT_MATRIX_CELLS.length) * 125) + 'ms' },
            })))
          }
          return h('span', { className: 'arcv-dot', 'data-state': state, style: { width: s + 'px', height: s + 'px' }, 'aria-hidden': true })
        }

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
          react.useEffect(() => {
            if (confirmTarget === null) return
            const onKey = (e) => {
              // A delete in flight cannot be dismissed mid-air (native modal
              // discipline): Esc while busy would swallow the failure report.
              if (e.key === 'Escape') { if (!busyRef.current) setConfirmTarget(null); return }
              if (e.key === 'Enter' && !busyRef.current && confirmDeleteRef.current !== null) confirmDeleteRef.current()
            }
            document.addEventListener('keydown', onKey)
            return () => document.removeEventListener('keydown', onKey)
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
          // downstream — including paths that never pass through orderFrom
          // (the search branch and the workspace ledger branch).
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
            if (confirmTarget === null || busy) return
            const id = confirmTarget.id
            const work = () => hostCall('delete', { sessionId: id }).then((r) => { if (r !== null && typeof r === 'object' && r.ok !== true) throw hostError(r) })
            const m = sessions !== undefined ? sessions.manager : undefined
            if (m !== undefined && typeof m.recordMutation === 'function') {
              m.recordMutation({ kind: 'remove', sessionId: id })
            }
            setBusy(true)
            setError(null)
            setConfirmError(null)
            Promise.resolve().then(work)
              .then(() => localRemove(id))
              .then(() => { setConfirmTarget(null) })
              .catch((reason) => {
                if (sessions !== undefined && typeof sessions.refresh === 'function') sessions.refresh()
                setConfirmError(reason instanceof Error ? reason.message : String(reason))
              })
              .finally(() => setBusy(false))
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
            if (group.flat === true) { persistFlatOrder(nextOrder); return }
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
          }
          const renderRow = (row, flat, group) => {
            const status = row.blank ? null : sessionStatusOf(row)
            const draggable = !searching && group !== undefined
            const sameGroupDrag = drag !== null && group !== undefined && drag.accountKey === group.key
            const marker = sameGroupDrag && drag.over !== null && drag.over.id === row.id ? drag.over.half : null
            return h('div', {
              className: 'arcv-sessionRow'
                + (row.id === current ? ' arcv-selected' : '')
                + (flat && status === null ? ' arcv-flatNoStatus' : '')
                + (marker === 'before' ? ' arcv-dropBefore' : '')
                + (marker === 'after' ? ' arcv-dropAfter' : ''),
              key: row.id,
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
                h('div', { className: 'arcv-modal', role: 'dialog', 'aria-modal': true, 'aria-label': t('delete.title') },
                  h('div', { className: 'arcv-modal-header' },
                    h('h2', { className: 'arcv-modal-title' }, t('delete.title')),
                    h('button', {
                      type: 'button', className: 'arcv-modal-close', 'aria-label': t('close'), disabled: busy,
                      onClick: () => { if (!busyRef.current) setConfirmTarget(null) },
                    }, h(Icon, { name: 'CloseOutline', size: 14 }))),
                  h('p', { className: 'arcv-modal-desc' }, t('delete.desc', { name: confirmTarget.title })),
                  busy ? h('div', { className: 'arcv-modal-status', role: 'status' }, t('delete.pending')) : null,
                  confirmError !== null ? h('div', { className: 'arcv-modal-error', role: 'alert' }, confirmError) : null,
                  h('div', { className: 'arcv-modal-footer' },
                    h('button', { type: 'button', className: 'arcv-modal-btn', disabled: busy, onClick: () => setConfirmTarget(null) },
                      t('cancel'), h('span', { className: 'arcv-modal-kbd' }, 'esc')),
                    h('button', { type: 'button', className: 'arcv-modal-btn arcv-modal-btn-danger', disabled: busy, onClick: onConfirmDelete },
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
