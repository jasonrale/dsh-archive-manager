# dsh-archive-manager

[English](README.md) | 中文

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) WebUI 的归档会话管理插件：侧栏底部“已归档”入口，按工作区分组的归档面板，支持打开继续对话、恢复、删除（完整停止 live agent + 物理删除日志）。

原生 DSH 只有“归档”动作（把会话从侧栏隐藏），没有任何查看/恢复/删除归档会话的入口——本插件补上这一块。

## 功能

- **归档列表**——侧栏底部新增“已归档”入口，打开面板按工作区分组浏览，视觉与官方侧栏一致
- **继续对话**——点击归档会话直接打开，接着聊；归档状态不变
- **恢复（取消归档）**——一键把会话放回原工作区，位置不变
- **彻底删除**——先安全停止会话，再删除磁盘上的完整记录；删除前弹确认框
- **搜索**——按标题、工作区名即时过滤，还能搜索对话消息（你的提问和助手回复）；与官方搜索行为一致
- **视图同步**——按工作区 / 单列表分组、手动 / 最近更新排序、拖拽调整顺序，全部与官方侧栏实时双向同步
- **双语界面**——中英文自动跟随系统语言
- 会话状态一目了然：运行中 / 已完成 / 等待你操作，与官方一致

## 兼容性

针对 `@deepseek-ai/dsh` **0.1.0-rc.6** 开发。依赖官方内部形态（`workspaceRegistry.enqueueOperation`、`AgentHandle.dispose`、client runtime 服务形状），dsh 升级可能需要适配——升级后若行为异常请先确认本仓库是否已跟进新版本。

## 安装

从 npm 安装：

```sh
npx @deepseek-ai/dsh plugin --profile web add dsh-archive-manager
```

### 更新

```sh
npx @deepseek-ai/dsh plugin --profile web update dsh-archive-manager
```

## 卸载

```sh
npx @deepseek-ai/dsh plugin --profile web remove dsh-archive-manager
```

然后重启 dsh web。

## 已知限制

- 若在本插件**热重载**时有会话正在运行，这些会话之后将无法删除——插件会明确拒绝并提示先重启 dsh。普通使用不受影响：装好即用，包括安装插件之前就已归档的会话，全部可以查看、继续、恢复和删除

## License

MIT
