# OpenClaw 生态日报 2026-06-13

> Issues: 500 | PRs: 486 | 覆盖项目: 13 个 | 生成时间: 2026-06-13 00:43 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-06-13

---

## 1. 今日速览

OpenClaw 今日处于**高活跃维护期**：过去 24 小时内 Issues 更新 500 条（新开/活跃 402、关闭 98），PR 更新 486 条（待合并 356、已合并/关闭 130），并发布了 **v2026.6.6** 正式版及 beta.2 两个版本。项目整体以**安全加固**和**QA 基础设施完善**为主线推进，同时积压的高优先级 Bug（内存泄漏、会话状态混乱、消息重复等）仍在持续涌入。社区讨论热度最高的话题集中在安全边界收紧、Android APK 预构建、以及 Control UI 的设备身份要求上。

---

## 2. 版本发布

### v2026.6.6（正式版）& v2026.6.6-beta.2

**核心主题：安全边界全面收紧**

本次版本将安全加固作为最高优先级，覆盖以下领域：

| 安全领域 | 说明 |
|---|---|
| **Transcripts** | 会话转录文件的访问控制更严格 |
| **Sandbox binds** | 沙箱挂载绑定策略收紧 |
| **Host environment inheritance** | 限制子进程继承宿主机环境变量 |
| **MCP stdio** | MCP 标准输入/输出通道的安全策略 |
| **Codex HTTP access** | Codex 工具的 HTTP 访问权限控制 |
| **Native search policy** | 本地搜索策略的安全边界 |
| **Elevated sender checks** | 提升权限发送者校验 |
| **Deleted-agent ACP bypasses** | 防止已删除 Agent 的 ACP 绕过 |
| **Loopback tools** | 回环工具的安全限制 |
| **Discord moderation** | Discord 频道的审核操作安全 |
| **Teams group actions** | Teams 群组操作安全 |
| **Exec** | 执行工具的安全策略更新 |

**迁移注意事项：**
- 沙箱配置（`sandbox`）和环境变量继承行为有变化，使用自定义沙箱绑定的用户需验证现有配置是否仍符合预期。
- MCP stdio 通道的安全策略收紧可能导致部分第三方 MCP 工具需要重新授权。
- 已删除 Agent 的 ACP 权限不再可被绕过，依赖此行为的自动化流程需提前调整。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 说明 |
|---|---|---|
| **#92554** feat(moonshot): add Kimi K2.7 Code support | ✅ 已合并 | 新增 Moonshot Kimi K2.7 Code 模型支持，含 256K 上下文/输出限制、始终开启推理的 wire contract |
| **#84082** fix(telegram): allow expandable blockquotes | ✅ 已合并 | 修复 Telegram 输出中 `<blockquote expandable>` 被剥离的问题 |
| **#91500** Add QA scorecard taxonomy validation | ✅ 已合并 | 新增 QA 记分卡分类法验证，建立可执行的 QA 证据映射层 |
| **#20418** feat(hooks): add session:pre-spawn and agent:pre-run hook events | ✅ 已合并 | 新增子 Agent 生命周期钩子事件，覆盖 17+ 个渠道和多个扩展模块 |
| **#19922 / #6797** feat(hooks): add message:received and message:sent hook events | ✅ 已合并 | 新增消息生命周期钩子，支持内存提取、语义召回等场景 |
| **#14403** Add agent-install.sh stub | ✅ 已合并 | 为 NOVA-INSTALL.sh 兼容性添加安装脚本桩 |

### 当前活跃的重要 PR（待合并）

| PR | 优先级 | 说明 |
|---|---|---|
| **#92086** security: add Security Matrix runtime-fact audit model | P2 | 新增安全矩阵运行时事实审计模型，将 actor、工具能力、审批状态、操作策略建模为独立输入 |
| **#92509** fix(memory-core): WAL checkpoint after writeMeta | 🔴 P1 | 修复 memory-core 的 WAL 检查点问题，防止进程崩溃后元数据丢失 |
| **#92216** fix(gateway): mirror hidden commentary-phase assistant events | 🔴 P1 | 修复隐藏频道会话订阅者无法接收已规范化为 commentary 的 assistant 事件 |
| **#92545** fix(cron): fail closed on repeated unavailable-tool self-debug | — | 修复 cron 任务中重复不可用工具被错误分类为可交付输出的问题 |
| **#92035** feat(memory): apply temporal decay to QMD search results | P2 | 将时间衰减应用到 QMD 后端搜索结果，修复高级召回场景下缺失近期加权的问题 |
| **#88815** feat: channel echo / session pinning | 🔴 P1 | 渠道无关的会话轮次镜像功能，支持跨线程 pin 会话 |
| **#91586** fix(update): continue after package doctor warnings | 🔴 P1 | 修复包更新后 doctor 警告导致更新流程中断的问题 |

**项目整体进展评估：** 今日合并的 PR 主要集中在 **QA 基础设施**（记分卡分类法验证、QA 运行配置）、**安全审计模型**、**生命周期钩子扩展**和**渠道兼容性修复**上。项目在安全加固和测试体系建设方面向前推进了显著一步，但积压的高优先级 Bug PR（内存泄漏、会话状态混乱）仍未合并。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

**1. [#25592] Text between tool calls leaks to messaging channels** — 32 条评论
- 🔗 https://github.com/openclaw/openclaw/issues/25592
- **标签：** P1, impact:security, impact:message-loss, 🦞 diamond lobster
- **诉求：** Agent 在工具调用之间产生的文本（错误处理、处理确认、叙述）被路由到消息渠道（Slack、iMessage 等），造成严重的 UX 问题——内部处理输出、失败的 exec 输出对用户可见。这是**安全 + 消息丢失**双重影响的高优先级问题。

**2. [#9443] Request: Prebuilt Android APK releases** — 25 条评论
- 🔗 https://github.com/openclaw/openclaw/issues/9443
- **标签：** P2, enhancement, 🦞 diamond lobster
- **诉求：** 用户希望 GitHub Releases 提供预构建的 Android APK 下载。目前仓库包含 Android 源码（`apps/android`），但没有预编译产物，增加了普通用户的使用门槛。

**3. [#32473] control ui requires device identity (use HTTPS or localhost secure context)** — 17 条评论
- 🔗 https://github.com/openclaw/openclaw/issues/32473
- **标签：** P2, bug, regression, impact:security, 🦞 diamond lobster
- **诉求：** 在 VPS + Docker 环境下，Control UI 要求设备身份（HTTPS 或 localhost 安全上下文），用户无法找到解决方案。这是一个**回归问题**（之前可用，现在不可用）。

**4. [#22438] Tiered bootstrap file loading for progressive context control** — 17 条评论
- 🔗 https://github.com/openclaw/openclaw/issues/22438
- **标签：** P2, impact:session-state, 🦞 diamond lobster
- **诉求：** 引导文件在每个会话中消耗 LLM token。对于大型工作区的用户，将所有文件加载到每个会话（包括子 Agent 和 cron 任务）中会浪费上下文窗口预算。提议引入分层加载机制。

**5. [#22676] Signal daemon stop() race condition on SIGUSR1 restart** — 17 条评论
- 🔗 https://github.com/openclaw/openclaw/issues/22676
- **标签：** P1, impact:message-loss, impact:crash-loop, 🦞 diamond lobster
- **诉求：** Signal 守护进程在 SIGUSR1 重启时存在竞态条件——发送 SIGTERM 后不等待进程退出，新实例在旧实例释放 HTTP 端口和配置文件锁之前启动，导致孤儿进程和发送失败。

### 📊 社区热点分析

今日社区讨论呈现三个明显趋势：
1. **安全边界意识增强** — 工具调用间文本泄漏、设备身份要求、环境变量继承等安全相关议题占据主导，与 v2026.6.6 的安全加固方向高度吻合。
2. **平台覆盖诉求** — Android APK 预构建、Telegram Business Bot 支持、Slack Block Kit 支持等需求反映了用户希望 OpenClaw 覆盖更多平台。
3. **会话状态管理是核心痛点** — 多个高评论 Issue 涉及会话上下文混乱、子 Agent 生命周期管理、引导文件加载策略等，说明会话状态管理是用户最不满意的领域。

---

## 5. Bug 与稳定性

### 🔴 P0/P1 严重 Bug

| Issue | 严重程度 | 描述 | 已有 Fix PR |
|---|---|---|---|
| **[#91588] Gateway Memory Leak — RSS 从 350MB 增长到 15.5GB** | 🔴 P0 | Gateway 进程存在严重内存泄漏，2-3 天内 RSS 从 ~350MB 增长到 15.5GB，最终被 OOM killer 杀死，触发 launchd-handoff 重启循环 | ❌ 无 |
| **[#91778] memory_search cassé — index metadata missing depuis v2026.6.1** | 🔴 P0 | 自 v2026.6.1 起 memory_search 向量索引元数据丢失，所有 Agent 的向量搜索功能失效 | ❌ 无 |
| **[#25592] Text between tool calls leaks to messaging channels** | 🔴 P1 | 工具调用间文本泄漏到消息渠道 | ❌ 无（有 linked PR 但未合并） |
| **[#22676] Signal daemon race condition on SIGUSR1 restart** | 🔴 P1 | Signal 守护进程竞态条件导致孤儿进程和发送失败 | ❌ 无（有 linked PR 但未合并） |
| **[#32296] Agent replies to previous message instead of current message** | 🔴 P1 | Agent 回复上一条消息而非当前消息，会话上下文混乱 | ❌ 无 |
| **[#29387] Bootstrap files in agentDir are silently ignored** | 🔴 P1 | agentDir 中的引导文件被静默忽略，仅 workspace 目录文件被注入系统提示 | ❌ 无 |
| **[#57326] CLI-backed helper paths still bypass CLI dispatch** | 🔴 P1 | 部分 helper 路径绕过 CLI 调度，直接走 embedded/API 路径 | ❌ 无 |
| **[#31583] exec tool does not inherit skills.entries.*.env environment variables** | 🔴 P1 | exec 工具不继承 skills 配置中的环境变量（回归问题） | ❌ 无（有 linked PR 但未合并） |
| **[#83184] Heartbeat-driven agent replies leave pendingFinalDelivery stuck** | 🔴 P1 | 心跳驱动的 Agent 回复导致 pendingFinalDelivery 卡住，阻塞后续心跳 | ❌ 无（有 linked PR 但未合并） |
| **[#86538] Session write-lock timeouts block subagent delivery lanes** | 🔴 P1 | 会话 JSONL 写入锁超时阻塞子 Agent 交付通道 | ❌ 无（有 linked PR 但未合并） |
| **[#92043] 180s compaction timeout causes repeated failures** | 🔴 P1 | 压缩超时从 900s 降至 180s 后，长历史/慢提供商的合法压缩每次都失败 | ❌ 无 |
| **[#38327] "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview** | 🔴 P1 | 2026.3.2 更新后，使用 google-vertex/gemini-3.1-pro-preview 时任何消息都导致 embedded agent 失败 | ❌ 无 |
| **[#88951] Duplicate message content (2-4x per message)** | 🔴 P1 | 每条消息重复 2-4 次，从 2026.5.4 升级到 2026.5.27 后出现 | ❌ 无 |

### 🟡 P2 中等 Bug

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| **[#32473] Control UI requires device identity** | VPS + Docker 环境下 Control UI 无法使用 | ❌ 无 |
| **[#38439] Webchat avatar endpoint returns 404** | Agent 头像在 webchat 中显示为缺失图片（回归问题） | ❌ 无 |
| **[#37634] sandbox: keep workspaceAccess none workspaces writable** | sandbox workspaceAccess=none 时工作区挂载为只读 | ❌ 无 |
| **[#31331] Docker + Sandbox can't workspaceAccess** | Docker 内 Gateway + Docker-outside-of-Docker 沙箱时工作区挂载失败 | ❌ 无 |
| **[#37966] cacheRetention ignored for LiteLLM-proxied Anthropic models** | LiteLLM 代理的 Anthropic 模型忽略 cacheRetention 配置 | ❌ 无 |
| **[#47975] Subagent sessions persist after completion, main session unresponsive** | 子 Agent 完成后会话持续存在，主会话无响应 | ❌ 无 |
| **[#77340] Deferred turn-maintenance livelocks** | 稳态聊天流量下延迟轮次维护死锁 | ❌ 无 |
| **[#33413] Slack: Show tool-level progress in assistant thread status** | Slack 线程状态仅显示静态 "is typing..."，不反映当前运行的工具 | ❌ 无（有 linked PR） |

### 稳定性评估

**⚠️ 项目稳定性处于警戒水平。** 当前存在 2 个 P0 级 Bug（Gateway 内存泄漏、memory_search 索引丢失）和超过 10 个 P1 级 Bug 处于开放状态且无已合并的修复。内存泄漏问题（#91588）尤其严重——它影响所有用户，导致 Gateway 进程在数天内必然崩溃。memory_search 索引丢失（#91778）影响所有依赖向量搜索的 Agent。这两个 P0 问题应被视为**最高优先级修复目标**。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（按社区热度排序）

| Issue | 描述 | 信号强度 | 判断 |
|---|---|---|---|
| **[#9443] Prebuilt Android APK releases** | 预构建 Android APK | 💬 25 评论, 👍 2 | 高概率纳入——降低使用门槛，已有源码基础 |
| **[#18160] Direct Exec Mode for Cron Jobs** | Cron 任务直接执行模式（无需 LLM 解释） | 💬 13 评论, 👍 11 | 高概率纳入——👍 数最高，解决可靠性痛点 |
| **[#12602] Slack Block Kit support** | Agent 消息支持 Slack Block Kit | 💬 13 评论 | 中概率——丰富消息格式是常见需求 |
| **[#22438] Tiered bootstrap file loading** | 分层引导文件加载 | 💬 17 评论 | 中概率——直接影响 token 成本和性能 |
| **[#20786] Telegram Business Bot support** | Telegram Business 机器人支持 | 💬 8 评论, 👍 6 | 中概率——平台覆盖扩展 |
| **[#35203] Multi-Agent Collaboration Enhancement** | 多 Agent 协作增强（能力画像 + 共享黑板 + 分层记忆 + Token 成本治理） | 💬 8 评论 | 低概率——RFC 范围较大，需分阶段实施 |
| **[#13583] Pre-response enforcement hooks (hard gates)** | 响应前强制钩子（硬门控） | 💬 11 评论, 👍 2 | 中概率——安全/合规场景需求明确 |
| **[#22358] Post-subagent completion extension hook** | 子 Agent 完成后扩展钩子 | 💬 12 评论 | 高概率——已有 session:pre-spawn 和 agent:pre-run 钩子合并，post-complete 是自然延伸 |
| **[#27445] announceTarget option for sub-agent completion** | 子 Agent 完成通知路由选项 | 💬 10 评论, 👍 5 | 中概率——多步骤工作流编排需求 |
| **[#6615] Denylist support for exec-approvals** | exec-approvals 支持拒绝列表 | 💬 7 评论, 👍 7 | 高概率——安全策略补全，👍 数相对较高 |
| **[#14785] Reduce tool schema token overhead (~3,500 tok/session)** | 减少工具 schema token 开销 | 💬 7 评论 | 中概率——性能优化，但需权衡功能完整性 |
| **[#13610] Native secrets management integration** | 原生密钥管理集成（AWS Secrets Manager、Vault 等） | 💬 7 评论, 👍 1 | 低概率——安全架构变更，影响面大 |
| **[#13616] Backup/restore utility** | 配置、Cron 任务、会话历史的备份/恢复工具 | 💬 8 评论 | 中概率——灾难恢复和迁移需求 |
| **[#16670] Onboarding Wizard should include Memory/Embedding setup** | 引导向导应包含记忆/嵌入设置 | 💬 8 评论, 👍 1 | 高概率——改善首次使用体验 |
| **[#7707] Memory Trust Tagging by Source** | 按来源标记记忆信任级别 | 💬 8 评论 | 低概率——安全增强，但实现复杂 |

### 路线图信号总结

从功能请求和社区讨论来看，下一版本的重点方向可能包括：
1. **安全策略补全** — exec-approvals 拒绝列表、响应前硬门控、安全矩阵审计模型（已有 PR #92086）
2. **子 Agent 生命周期完善** — post-complete 钩子、announceTarget 路由、子 Agent 会话清理
3. **性能优化** — 分层引导文件加载、工具 schema token 开销减少、QMD 搜索时间衰减
4. **平台覆盖** — Android APK 预构建、Telegram Business Bot、Slack Block Kit
5. **运维工具** — 备份/恢复工具、密钥管理集成

---

## 7. 用户反馈摘要

### 🔴 主要痛点

**1. 会话状态管理混乱**
- Agent 回复上一条消息而非当前消息（#32296），导致对话错位
- 子 Agent 完成后会话持续存在，主会话无响应（#47975）
- 会话 JSONL 写入锁超时阻塞子 Agent 交付通道（#86538）
- 跨客户端（Telegram /new）重置会话后 TUI 不刷新（#38966）

**2. 安全边界不清晰**
- 工具调用间文本泄漏到消息渠道（#25592）——用户看到内部处理输出
- exec 工具不继承 skills 环境变量（#31583）——密钥无法注入
- Control UI 在 VPS 环境下要求设备身份（#32473）——Docker 用户无法使用

**3. 稳定性问题严重**
- Gateway 内存泄漏导致数天内必然崩溃（#91588）
- memory_search 向量索引丢失（#91778）——所有 Agent 的向量搜索失效
- 消息重复 2-4 次（#88951）
- compaction 超时过短导致合法压缩失败（#92043）

**4. 平台/环境覆盖不足**
- Android 无预构建 APK（#9443）
- Windows node-host 连接后报告无命令（#84644）
- Docker + 沙箱环境下工作区挂载失败（#31331）

### 🟢 满意点

- **安全加固方向获认可** — v2026.6.6 的安全边界收紧覆盖了多个关键领域，社区对安全优先的策略方向表示支持
- **生命周期钩子扩展** — session:pre-spawn 和 agent:pre-run 钩子（#20418）的合并获得了正面反馈，用户期待 post-complete 钩子
- **QA 基础设施完善** — QA 记分卡分类法验证和运行配置的加入被视为项目成熟度提升的标志

### 📋 典型使用场景

从 Issue 描述中提炼的真实使用场景：
- **VPS + Docker 部署** — 用户在 Hostinger VPS 上通过 Docker 运行 Gateway，需要 Control UI 和沙箱功能
- **多 Agent 协作** — 用户通过子 Agent 编排多步骤工作流，需要完成通知路由和生命周期管理
- **大型工作区** — 用户有数千个会话转录文件（4,052 JSONL / 158MB），需要分层引导文件加载和高效导出
- **安全敏感工作流** — 量化/金融、安全、运营场景需要硬门控策略，不允许 Agent 在调用必要工具前发出最终答案
- **多平台消息** — 用户同时使用 Slack、Telegram、Discord、iMessage 等多个渠道，需要一致的消息格式和交互体验

---

## 8. 待处理积压

### ⚠️ 长期未响应的高优先级 Issue

| Issue | 创建日期 | 最后更新 | 状态 | 建议行动 |
|---|---|---|---|---|
| **[#91588] Gateway Memory Leak** | 2026-06-09 | 2026-06-12 | 🔴 P0, OPEN | **立即分配** — 影响所有用户，导致必然崩溃 |
| **[#91778] memory_search index metadata missing** | 2026-06-09 | 2026-06-12 | 🔴 P0, OPEN | **立即分配** — 所有向量搜索功能失效 |
| **[#25592] Text between tool calls leaks** | 2026-02-24 | 2026-06-12 | 🔴 P1, OPEN | 已 3.5 个月，有 linked PR 但未合并，需推进 |
| **[#9443] Prebuilt Android APK** | 2026-02-05 | 2026-06-12 | P2, OPEN | 已 4 个月，社区需求明确，建议排入路线图 |
| **[#22676] Signal daemon race condition** | 2026-02-21 | 2026-06-12 | 🔴 P1, OPEN | 已 3.5 个月，有 linked PR 但未合并 |
| **[#32296] Agent replies to previous message** | 2026-03-02 | 2026-06-12 | 🔴 P1, OPEN | 已 3 个月，核心功能缺陷 |
| **[#29387] Bootstrap files in agentDir ignored** | 2026-02-28 | 2026-06-12 | 🔴 P1, OPEN | 已 3.5 个月，影响多 Agent 配置用户 |
| **[#31583] exec tool env var inheritance** | 2026-03-02 | 2026-06-12 | 🔴 P1, OPEN | 已 3 个月，回归问题，有 linked PR |
| **[#32473] Control UI device identity** | 2026-03-03 | 2026-06-12 | P2, OPEN | 已 3 个月，Docker 用户核心痛点 |
| **[#18160] Direct Exec Mode for Cron Jobs** | 2026-02-16 | 2026-06-12 | P2, OPEN | 已 4 个月，👍 数最高（11），社区需求强烈 |

### 📦 积压 PR 关注

| PR | 创建日期 | 说明 | 建议 |
|---|---|---|---|
| **#92086** Security Matrix runtime-fact audit model | 2026-06-11 | 安全审计模型，与 v2026.6.6 安全加固方向一致 | 优先审查合并 |
| **#92509** fix(memory-core): WAL checkpoint | 2026-06-12 | 修复 memory-core 崩溃后元数据丢失 | 优先审查合并 |
| **#88815** feat: channel echo / session pinning | 2026-05-31 | 跨渠道会话镜像，范围较大（XL） | 需充分测试后合并 |
| **#75662** fix(agents): pause yielded main-session runs | 2026-05-01 | 修复主会话 yield-pause 问题 | 已开放 1.5 个月，需审查 |
| **#90057** Polish Workboard operations view | 2026-06-03 | Workboard UI 优化（XL） | 需 UI 审查 |

### 积压总结

当前积压的核心问题是 **P0/P1 级 Bug 修复速度跟不上报告速度**。内存泄漏（#91588）和 memory_search 索引丢失（#91778）是近一周内新报告的 P0 问题，需要立即分配资源。此外，多个 3-4 个月前的 P1 Issue（工具调用间文本泄漏、Signal 竞态条件、Agent 回复错位等）虽有 linked PR 但长期未合并，建议维护者集中推进这些 PR 的审查和合并。

---

*日报生成时间：2026-06-13 | 数据来源：GitHub openclaw/openclaw | 分析周期：过去 24 小时*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-06-13 | 分析周期：过去 24 小时 | 覆盖项目：12 个**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态处于**高密度竞争与快速分化期**。过去 24 小时内，仅 12 个核心项目就产生了合计 **194+ 条 Issue 更新**和 **230+ 条 PR 更新**，社区开发强度已接近主流基础设施工具的水平。所有项目几乎同步收敛于三个方向：**安全边界收紧**（沙箱隔离、供应链检查、审计日志）、**状态管理韧性**（记忆系统、会话生命周期、compaction 可靠性）和 **多平台通道扩展**（Telegram、WhatsApp、企业微信等）。值得注意的是，生态已出现明确的分层——以 OpenClaw 为代表的"全功能平台型"项目与 PicoClaw、Moltis 等"轻量专项型"项目形成互补格局，而非简单竞争。**没有项目处于停滞状态**，反映出 AI Agent 赛道已从概念验证进入工程深耕阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃→关闭） | PR（待合并→已合并/关闭） | 版本发布 | 核心方向 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（402→98） | 486（356→130） | v2026.6.6 + beta.2 | 安全加固、QA 基础设施 | ⚠️ 警戒（2 个 P0 Bug 未修） |
| **Hermes Agent** | 50（41→9） | 50（39→11） | 无 | 上下文管理清理、Gateway 稳定性 | 🟡 活跃但积压偏高 |
| **ZeroClaw** | 14（11→3） | 35（31→4） | 无 | Turn 引擎统一、MCP 整合 | 🟡 PR 积压严重 |
| **CoPaw** | 23（16→7） | 27（16→11） | 无（v1.1.12b1 准备中） | 内存泄漏修复、AgentScope 2.0 迁移 | 🟡 回归问题较多 |
| **NanoBot** | 6（3→3） | 30（21→9） | 无 | Cron 子 Agent 可靠性、记忆稳定性 | 🟢 快速迭代中 |
| **IronClaw** | 50（33→17） | 50（32→18） | 无 | Reborn 稳定性、附件系统全链路 | 🟢 CI 被 CVE 阻塞 |
| **NanoClaw** | 5（4→1） | 9（9→0） | 无 | 多 Provider 抽象、容器安全 | 🟡 积压明显 |
| **PicoClaw** | 5（4→1） | 14（11→3） | nightly v0.2.9 | 通道权限模型、WebSocket 协议 | 🟢 活跃 |
| **LobsterAI** | 0（0→0） | 17（6→11） | 无（release/2026.6.11→main） | Computer Use MVP、ASR 语音 | 🟡 大量 stale PR |
| **NullClaw** | 1（1→0） | 3（3→0） | 无 | 启动稳定性、Discord 通道韧性 | 🟢 低活跃 |
| **Moltis** | 3（3→0） | 1（1→0） | 无 | K8s 沙箱、本地 STT | 🟢 低活跃 |
| **TinyClaw / ZeptoClaw** | 无活动 | 无活动 | — | — | 🔴 停滞 |

> **注：** OpenClaw 的 Issue/PR 数量级远超其他项目，为便于对比，可将其理解为"核心参照"。

---

## 3. OpenClaw 在生态中的定位

### 社区规模断层领先

OpenClaw 过去 24 小时的 Issue 更新量（500）是第二名 IronClaw（50）的 **10 倍**，PR 更新量（486）是第二名 ZeroClaw（35）的 **14 倍**。这种量级差距意味着 OpenClaw 已是事实上的**生态中心节点**——大量其他项目（LobsterAI、CoPaw/QwenPaw）直接依赖或兼容 OpenClaw 协议。

### 技术路线差异

| 维度 | OpenClaw | 同类关键差异 |
|---|---|---|
| **架构定位** | 全栈平台（Gateway + 多渠道 + 沙箱 + MCP + Skills） | ZeroClaw 聚焦运行时轻量化（WASM/Embedded）；NanoClaw 侧重容器化多租户隔离 |
| **安全策略** | 分层收紧（Transcript 访问控制、环境变量继承限制、ACP 绕过防护） | Moltis 探索 K8s Pod 级 VM 隔离；NanoClaw 推进容器安全 flags + npm 供应链检查 |
| **状态管理** | 自研 memory-core（WAL checkpoint）、QMD 后端、分层引导加载 | Hermes Agent 仍在使用 SQLite state.db + JSONL 双轨，存在消息丢失问题 |
| **版本节奏** | 日历化高频发布（v2026.6.6 正式版 + beta.2 同日发布） | CoPaw 处于 beta 版本格式混乱期；NullClaw/NanoBot 无正式版本体系 |

### OpenClaw 的相对优势与风险

**优势：** 最完整的渠道覆盖（Telegram/Discord/Slack/iMessage/Teams/WhatsApp）、最强的安全审计投入（3 个专项 PR 同日合并）、最活跃的社区贡献基础设施（QA 记分卡分类法）。

**风险：** 2 个 P0 级 Bug（内存泄漏 RSS 350MB→15.5GB、memory_search 向量索引丢失）在报告中处于未修复状态，且影响面为**全用户**。对于一个定位为平台级基础设施的项目，这是系统性风险信号。

---

## 4. 共同关注的技术方向

以下为**跨 3 个以上项目**同时出现的技术方向：

### 4.1 安全边界收紧（10/12 项目）

| 项目 | 具体措施 |
|---|---|
| **OpenClaw** | Transcript 访问控制、沙箱绑定收紧、环境变量继承限制、ACP 绕过防护、exec 安全策略 |
| **NanoClaw** | `--cap-drop=ALL`、`no-new-privileges`、`--pids-limit 2048` 容器安全 flags |
| **NanoClaw** | npm 3 天最小发布时间检查 |
| **Moltis** | Kubernetes Pod 级沙箱 + Kata Containers/gVisor VM 级隔离提案 |
| **CoPaw** | Agent workspace 恢复目标路径防护、发布验证门禁 |
| **IronClaw** | SecurityAuditSink 覆盖、租户谓词键总量上限、per-scheduling hook 上限 |
| **Hermes Agent** | VIRTUAL_ENV 泄露修复（Gateway → 子进程） |

**行业判断：** 社区已达成共识——LLM 生成的不可信命令执行需要与宿主系统强隔离。当前解决方案呈光谱分布：轻量派使用 Linux Capabilities 和 PidsLimit（NanoClaw），重量派规划 K8s Pod 级隔离（Moltis），中间路线走沙箱绑定策略（OpenClaw）。

### 4.2 记忆与会话状态管理（10/12 项目）

| 项目 | 核心问题 |
|---|---|
| **NanoBot** | 短期记忆断裂（多轮对话中"失忆"） |
| **NanoClaw** | 消息去重静默丢弃、工具无超时、resumed transcript 崩溃循环 |
| **Hermes Agent** | context compaction 可见污染、企业微信重复回复、会话隔离 |
| **CoPaw** | 记忆配置保存丢失、长对话死循环 |
| **IronClaw** | DeferredBusy 排干、跨线程 always allow 持久化 |
| **ZeroClaw** | Turn 引擎不统一导致 compaction 行为分歧 |
| **PicoClaw** | data URL 误判为媒体附件污染会话历史 |
| **OpenClaw** | Gateway 内存泄漏、memory_search 索引丢失、Agent 回复错位 |
| **NullClaw** | Ollama 本地模型输出截断 |

**行业判断：** 记忆与会序状态管理已取代"模型能力瓶颈"，成为用户满意度的**最大变量**。几乎每个项目的 Top 3 痛点都指向会话断裂、消息丢失或记忆失效。这说明当前 Agent 框架在 LLM 之上的状态管理层尚不成熟。

### 4.3 多平台通道扩展（8/12 项目）

- **Telegram：** PicoClaw（Forum 权限分级）、OpenClaw（blockquote 修复）、NanoClaw（swarm/多 bot 迁移路径）
- **WhatsApp：** ZeroClaw（媒体转发/表情反应）、Moltis（@lid 回复丢失）
- **企业通讯：** Hermes Agent（企业微信重复回复）、ZeroClaw（QQ/钉钉/飞书卡片）
- **Web Chat：** ZeroClaw（多会话管理）、CoPaw（Yuanbao 频道）、IronClaw（Slack 重构为 product-adapter）

### 4.4 可观测性与审计（6/12 项目）

- **NanoBot**：审计模块（4 种 transport：webhook/JSONL/日志/回调）
- **IronClaw**：SecurityAuditSink、LLM 用量 admin 可见性、连接信道/投递状态作为运行时上下文
- **CoPaw**：Langfuse traces 碎片化问题、per-token 用量弹出面板
- **Hermes Agent**：Auxiliary fallback 静默降级警告
- **ZeroClaw**：Doctor 检查多代理感知
- **OpenClaw**：Security Matrix 运行时事实审计模型（PR 待合并）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键词 |
|---|---|---|---|
| **OpenClaw** | 全栈 Agent 平台 | 企业/高级个人用户 | 多渠道 Gateway、沙箱分层、Skills/MCP 生态 |
| **NanoClaw** | 容器化多租户 Agent 集群 | 开发者/SaaS 供应商 | Provider 抽象层、容器安全、capability registry |
| **PicoClaw** | 轻量嵌入式 Agent（RISC-V/边缘） | IoT/开发者 | Pico WebSocket 协议、nightly 构建、Go 实现 |
| **NanoBot** | 极简 Python Agent 框架 | 个人开发者/Python 程序员 | v0.x 快速迭代、SDK-first、Python asyncio |
| **Hermes Agent** | 多模型 + 多通道路由 | 研究人员/高级 CLI 用户 | Desktop + CLI + Gateway 多前端、context compaction |
| **IronClaw** | 高成熟度 Agent 运行时（Rust） | 企业/云原生团队 | Reborn 架构、Rust、Postgres/libSQL、附件格式注册表 |
| **ZeroClaw** | 嵌入式/轻量 + WASM 运行时 | 前端开发者/WASM 爱好者 | Rust + Wasmtime、doctor 诊断、低资源部署 |
| **LobsterAI** | AI 桌面助手（Computer Use）| 国内个人用户 | Electron 桌面端、Computer Use MVP、ASR 语音 |
| **CoPaw (QwenPaw)** | 通义千问生态桌面 Agent | 国内 Qwen 用户 | Electron + AgentScope 2.0（待迁移）、Coding Mode |
| **Moltis** | 通讯集成型 Agent | 个人用户/小团队 | WhatsApp/Fastmail MCP 桥接、拟推 K8s 沙箱 |
| **NullClaw** | 最小化 Zig Agent | Zig 语言社区 | Zig 实现、config.json 驱动、Discord 通道 |

---

## 6. 社区热度与成熟度

### 第一梯队：高活跃 + 平台级

| 项目 | 日 Issue/PR 量 | 特征 |
|---|---|---|
| **OpenClaw** | 500/486 | 安全加固冲刺期，P0 Bug 积压是主要风险 |
| **IronClaw** | 50/50 | 大型功能轨道并行（附件系统、DeferredBusy、Reborn），架构成熟度高 |

### 第二梯队：高活跃 + 快速迭代

| 项目 | 日 Issue/PR 量 | 特征 |
|---|---|---|
| **Hermes Agent** | 50/50 | 历史债务清理期（context compaction 批量关闭），输出截断问题长期未解决 |
| **ZeroClaw** | 14/35 | 架构重构关键期（Turn 引擎统一），PR 积压是瓶颈 |
| **CoPaw** | 23/27 | 回归修复期（v1.1.11 系列问题），AgentScope 2.0 迁移讨论活跃 |
| **NanoBot** | 6/30 | 质量巩固期，底层消息序列 bug 快速修复，高层记忆体验待闭环 |
| **NanoClaw** | 5/9 | 架构升级期（多 Provider 抽象层），当日零合并 |
| **PicoClaw** | 5/14 | 功能扩展期（远程 Agent 模式、通道权限分级） |
| **LobsterAI** | 0/17 | 功能集成期（Computer Use MVP 合入），大量 stale PR 待清理 |

### 第三梯队：低活跃 / 早期探索

| 项目 | 日 Issue/PR 量 | 特征 |
|---|---|---|
| **NullClaw** | 1/3 | 维护期，3 个 PR 等待 review |
| **Moltis** | 3/1 | 探索期，K8s 沙箱提案具有前瞻性 |
| **TinyClaw / ZeptoClaw** | 0/0 | 停滞 |

---

## 7. 值得关注的趋势信号

### 趋势 1：安全隔离从"可选"变为"必选"

**信号强度：** 🔴 极高

OpenClaw、NanoClaw、Moltis、IronClaw、CoPaw 五个项目在同日推进安全加固。从 Linux Capabilities 到 K8s Pod 级 VM 隔离，社区正在为"LLM 执行不可信代码"这一核心风险构建多层防御。**对开发者的启示：** 如果你的 Agent 项目还没有沙箱策略，现在就应该开始规划——这已从差异化功能变为社区基线要求。

### 趋势 2：记忆系统是下一个"卡脖子"工程

**信号强度：** 🔴 极高

10/12 个项目报告了记忆/会话相关的严重问题。OpenClaw 的 memory_search 索引丢失（P0）、NanoBot 的短期记忆断裂、Hermes 的 context compaction 污染、CoPaw 的长对话死循环——这些问题跨越不同架构和语言实现，说明**记忆管理是 Agent 领域的共性工程难题**，而非某个项目的实现缺陷。**对开发者的启示：** 投入 WAL 持久化、compaction 策略、会话状态机设计的优先级，应不低于模型集成。

### 趋势 3：WASM 运行时正在成为 Agent 扩展的新范式

**信号强度：** 🟡 中高

ZeroClaw 正在从 Extism 迁移到 wasmtime 43（PR #7429），PicoClaw 的 Go 实现天然支持轻量部署，NanoClaw 的 provider 抽象层也为 WASM 插件预留了接口。**对开发者的启示：** WASM 正在成为 Agent 工具/插件的通用运行时目标，类似容器镜像之于微服务。

### 趋势 4：Computer Use 从概念走向主线

**信号强度：** 🟡 中

LobsterAI 将 Computer Use MVP 合并入主线（PR #2158），并同日修复 runtime 升级和 ASR 语音稳定性。这是国内项目中首个将"AI 操作桌面"作为核心功能推进的案例。**对开发者的启示：** Computer Use 能力正在从研究 demo 进入产品化阶段，相关工具链（UIA breadcrumbs、屏幕截图路由）将成为 Agent 框架的标配。

### 趋势 5：多模型/多 Provider 抽象成为架构刚需

**信号强度：** 🟡 中

NanoClaw 同日提交 provider capability registry + memory scaffold + onecli SDK 大版本升级三个 PR；NanoBot 收到多 custom provider 需求；IronClaw 的 Reborn 架构支持 NEAR AI/Ollama 等多 provider 路由。**对开发者的启示：** 硬编码单一模型 provider 的架构正在被淘汰，声明式的 provider 能力注册表是下一代 Agent 框架的标配。

### 趋势 6：Web Dashboard 体验是普遍短板

**信号强度：** 🟡 中

ZeroClaw 的 Web Dashboard 集中了 3 个 S1/S2 问题（ask_user 失败、前端未构建、legacy 路径数据隔离失效）；IronClaw 的 WebUI 存在多个 UX bug（PINNED 逻辑、身份显示、闪烁）；OpenClaw 的 Control UI 在 VPS 环境下要求设备身份。**对开发者的启示：** Web 前端已成为 Agent 框架的用户体验瓶颈，投入前端工程资源的优先级需要提升。

---

*报告由 OWL 生成 · 数据来源：各开源项目 GitHub 仓库 · 截至 2026-06-13 UTC 00:00*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-13

---

## 1. 今日速览

NanoBot 今日处于**高活跃维护期**，共处理 36 条 Issue/PR 更新，其中 30 条 PR（21 待合并、9 已合并/关闭）、6 条 Issue（3 新开、3 已关闭）。社区提交节奏密集，多名贡献者集中在**会话记忆稳定性**、**工具调用健壮性**、**MCP 运行时**和**配置系统解耦**等方向同时推进。无新版本发布，但多个关联 bug 的 PR 正在收敛，项目整体处于 v0.x 快速迭代的健康状态。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭了 9 个 PR，主要成果如下：

| PR | 类型 | 说明 |
|---|---|---|
| **#4304** [LINK](https://github.com/HKUDS/nanobot/pull/4304) | 合并 ✅ | **fix(cron): wait for spawned subagents before marking cron job complete** — 修复 cron 任务在子 agent 尚未完成时就被标记为已完成的问题。现在 cron 会等到子 agent 的 `asyncio.Task` 结束后才标记完成，避免任务实际未完成却显示成功。 |
| **#4318** [LINK](https://github.com/HKUDS/nanobot/pull/4318) | 关闭（重复） | 与 #4320 重复，已关闭 |
| **#4319** [LINK](https://github.com/HKUDS/nanobot/pull/4319) | 关闭（重复） | 与 #4320 重复，已关闭 |

> **核心进展总结：**
> - **Cron/子 Agent 可靠性** — PR #4304 的合并是今日最重要的里程碑，解决了 cron 任务竞态条件导致子 agent 被遗忘的问题。
> - **审计模块多 PR 竞争** — bjoshuanoah 同时提交了 #4318、#4319、#4320 三个审计 PR，其中 #4318/#4319 已被合并/关闭，主干方案收敛到 #4320（含更完整的 scope + transport 配置）。
> - **MCP 稳定性修复推进中** — #4303 修复 `streamableHttp` MCP 服务器关闭时的 GC crash，待合并。

---

## 4. 社区热点

### Issue #4044 — `[bug] short term memory loss` [LINK](https://github.com/HKUDS/nanobot/issues/4044)
- **👍 5 条评论**，今日仍有讨论
- **热度分析**：这是用户反馈最直观、影响面最广的问题——AI 在多轮对话中"失忆"，问完问题后不记得自己说过什么。根本原因指向两个方向：(1) context window 压力下过早截断系统提示/记忆文件；(2) 对话轮次之间的消息链断裂。该 issue 与其他待合并的 memory 修复 PR（#4256、#4193、#4315）高度关联，是当前**用户体验层面的头号痛点**。

### PR #4313 — `Feat(webui): config.json/webui parity` [LINK](https://github.com/HKUDS/nanobot/pull/4313)
- **热度分析**：填补 WebUI 设置面板与 `config.json` 之间的差距，新增 temperature、tool limits、dream、channels、memory 等字段的写入端点和 UI 控件。这是提升用户体验和管理便捷性的重要一步。

### PR #4296 — `feat(sdk): expand Python SDK runtime controls` [LINK](https://github.com/HKUDS/nanobot/pull/4296)
- **热度分析**：将 Python SDK 从 `bot.run(...)` 极简门面扩展为完整的开发者 API，新增 RunResult 元数据、稳定 session/memory/runtime 控制接口，同时保持向后兼容。这标志着 NanoBot 作为**可编程 SDK/框架**的定位在增强。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | # | 标题 | 状态 | 修复进展 |
|---|---|---|---|---|
| 🔴 **高** | [#4044](https://github.com/HKUDS/nanobot/issues/4044) | Short term memory loss — 对话线程断裂 | 🟡 Open 待解 | 关联 PR #4256、#4193、#4315 待合并 |
| 🔴 **高** | [#4203](https://github.com/HKUDS/nanobot/issues/4203) | `find_legal_message_start` 丢弃所有消息 | ✅ Closed | 已关闭（PR 合并中，具体 PR 未标注） |
| 🔴 **高** | [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 孤立 tool result 破坏消息序列 | ✅ Closed | 已关闭 |
| 🟠 **中高** | [#4307](https://github.com/HKUDS/nanobot/issues/4307) | Post-turn consolidation 清空 agent 自身投递消息 | 🟡 Open 待解 | 暂无明确关联 PR |
| 🟠 **中** | [#4309](https://github.com/HKUDS/nanobot/issues/4309) | `/v1/chat/completions` 始终返回零 usage tokens | 🟡 Open 待解 | 暂无 PR |
| 🟠 **中** | [#4303](https://github.com/HKUDS/nanobot/issue/4303) | MCP `_close_server` 跨任务 cancel scope crash | 🟠 PR 待合并 | PR #4303 正在审查 |
| 🟢 **低** | [#4321](https://github.com/HKUDS/nanobot/pull/4321) | Dream disabled 时 cursor 不前进导致 prompt 膨胀 | 🟠 PR 待合并 | PR #4321 待合 |

**稳定性趋势判断：** 底层消息序列和对话历史的 bug（#4203、#4006）正被快速修复，但更高层的记忆体验问题（#4044）仍需多 PR 合入后才能验证闭环。

---

## 6. 功能请求与路线图信号

从中长期看，以下需求最可能被纳入下一版本：

1. **多自定义 Provider 支持** — Issue #4305 提出需要多个 "custom" provider 实例，建议通过模板参数复用已有内置 provider。目前尚无 PR，但属于配置系统解耦（#4314）后的自然延伸。

2. **WebUI 与配置完全对齐** — PR #4313 正在推进，已成为社区共识方向，合入概率高。

3. **TTS 多 Provider 支持** — PR #4316 新增 OpenAI/Groq/ElevenLabs 的 TTS 配置系统，暴露 WebUI 设置，属于多媒体能力的自然扩展。

4. **审计/可观测性模块** — PR #4320 提供完整的 agent 工具调用审计能力（4 种 transport：loguru/HTTP webhook/JSONL/回调），与 cron 子 Agent 可靠性治理配套，合入概率高。

5. **Python SDK 完整化** — PR #4296 扩展 SDK 能力，保持向后兼容，属于框架定位升级的关键一步。

---

## 7. 用户反馈摘要

| 维度 | 反馈内容 |
|---|---|
| **😤 痛点：记忆断裂** | "you answer, and it has no memory of asking. The conversational thread snaps" — 用户感到 AI 持续"失忆"，严重影响信任感。 |
| **😤 痛点：工具调用不可靠** | 孤立 tool result 导致严格 API 拒绝请求、渲染器报错（#4006）；文件被逐字拆分（#4312）。 |
| **😤 痛点：API 零 usage** | OpenAI-compatible 端点返回全零 token 用量，用户无法进行成本追踪（#4309）。 |
| **😤 痛点：cron 子 Agent 失控** | 子 Agent 还在跑，cron 却标记完成（已修 #4304）。 |
| **👍 满意：响应速度快** | 多个 bug issue 在数天内被识别、PR 上线，维护效率高。 |
| **👍 期待：SDK 和 WebUI 完善** | 开发者希望 SDK 提供更丰富的运行时控制和元数据。 |
| **📌 使用场景** | 长对话多轮迭代、cron 定时子 Agent 编排、MCP streamableHttp provider、OpenAPI 兼容替代方案。 |

---

## 8. 待处理积压

以下长期未解决的 Issue/PR 需要维护者关注：

| # | 标题 | 创建/更新时间 | 状态 | 备注 |
|---|---|---|---|---|
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) | Short term memory loss | 2026-05-28 / 2026-06-12 | 🟡 Open | **最早创建，今天是唯一活跃讨论日**，关联 3 个待合并 PR，但仍无标签/里程碑 |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | fix(tools): keep read-only roots out of write paths | 2026-05-29 | 🟠 Open | **15 天无合并**，涉及文件写安全，优先级应高 |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | fix(exec): block relative symlink workspace escapes | 2026-05-31 | 🟠 Open | **13 天未合并**，安全相关，应尽快审查 |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) | test: cover runner blocked tool-call finish reasons | 2026-05-24 | 🟠 Open | **20 天未响应** |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) | test: add scripted agent runner harness | 2026-05-24 | 🟠 Open | **20 天未响应** |
| [#4309](https://github.com/HKUDS/nanobot/issues/4309) | Chat completions zero usage tokens | 2026-06-12 | 🟡 Open 新建 | 影响开发者集成体验，建议快速确认修复方案 |
| [#4305](https://github.com/HKUDS/nanobot/issues/4305) | Multiple custom providers | 2026-06-11 | 🟡 Closed | 虽已关闭但仅 1 条评论，**建议留下开放状态或明确拒绝理由**，避免贡献者误解 |

**维护者建议：**
- 为 #4044 添加 `priority:high` 或关联 milestone，明确修复路线图。
- 将安全相关 PR（#4053、#4119）标记为高优先级。
- 审查积压的测试 PR（#3982/#3983），即便暂不合入也请留下反馈，避免贡献者流失。

---

*报告由 OWL 生成 · 数据来源：HKUDS/nanobot · 截至 2026-06-13 UTC 00:00*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-13

---

## 1. 今日速览

Hermes Agent 今日处于**高活跃维护期**，过去 24 小时内 Issues 与 PR 各更新 50 条，贡献者涌入明显。Issue 侧以 Bug 报告为主（41 条新开/活跃），覆盖 gateway、agent、CLI、Desktop 等多组件；PR 侧有 39 条待合并，贡献者集中在 Desktop UX 修复、gateway 多平台适配、MCP 工具链健壮性等方向。无新版本发布，意味着当前处于**功能积累与问题消化阶段**，下一版本可能是一次较大规模的稳定性更新。整体项目健康度：**活跃但积压偏高**，多个 P1/P2 Bug 已存在数周未闭合。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 状态 | 说明 |
|---|---|---|
| [#45270](https://github.com/NousResearch/hermes-agent/pull/45270) | ✅ 已合并 | **Desktop 启动恢复上次活跃会话**：Desktop 应用重启后不再丢失上下文，自动恢复到上次选定的 session，改善多会话工作流体验。 |
| [#44837](https://github.com/NousResearch/hermes-agent/issues/44837) | ✅ 已关闭 | Gateway session DB 在 repair_message_sequence 压缩后丢失 assistant 消息的问题确认并关闭。 |
| [#38389](https://github.com/NousResearch/hermes-agent/issues/38389) / [#38391](https://github.com/NousResearch/hermes-agent/issues/38391) / [#38392](https://github.com/NousResearch/hermes-agent/issues/38392) | ✅ 已关闭（duplicate 合并） | 上下文压缩摘要污染可见对话的 P1 Bug，三个重复 issue 合并关闭，表明已有修复方案落地。 |
| [#33256](https://github.com/NousResearch/hermes-agent/issues/33256) / [#29824](https://github.com/NousResearch/hermes-agent/issues/29824) | ✅ 已关闭 | 同类 context compaction 可见污染问题的历史 issue 批量清理关闭。 |
| [#45230](https://github.com/NousResearch/hermes-agent/issues/45230) | ✅ 已合并 | 修复 Gateway 中断长工具执行后的无限重放循环（工具调用尾部的错误重放导致死循环）。 |
| [#45242](https://github.com/NousResearch/hermes-agent/issues/45242) | ✅ 已关闭 | `auxiliary_client.py` 未处理 `oauth_minimax` auth_type 的 Bug 确认关闭。 |

**总结**：今日的合并/关闭集中在**上下文管理的历史债务清理**和**Gateway 执行稳定性**两个方向，属于对前一阶段密集开发的收尾巩固。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| Issue | 评论数 | 👍 | 焦点 |
|---|---|---|---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | **41** | 5 | **输出长度限制截断**：生成长回复时频繁抛出 `Response truncated due to output length limit`，中断流式输出。这是跨 CLI/Telegram/Discord/Slack 的全局问题，社区讨论最热烈。 |
| [#44497](https://github.com/NousResearch/hermes-agent/issues/44497) | 4 | 0 | **企业微信重复回复**：用户单条消息触发两条独立生成的回复，疑似 context 未清理或线程交叉。 |
| [#44976](https://github.com/NousResearch/hermes-agent/issues/44976) | 3 | 0 | **MiniMax-M3 MCP 工具参数嵌套数组合并**：深层单元素数组被错误折叠为 `{"item": ...}`。 |
| [#17999](https://github.com/NousResearch/hermes-agent/issues/17999) | 3 | 0 | **Windows D 盘文件读取失败**：`read_file` 工具在 Windows 原生环境（非 WSL2）下无法访问有效路径。 |

### 热点 PR

| PR | 状态 | 焦点 |
|---|---|---|
| [#45314](https://github.com/NousResearch/hermes-agent/pull/45314) | Draft | Auxiliary 链 fallback 静默降级警告，此前用户无感知切换到弱模型。 |
| [#45313](https://github.com/NousResearch/hermes-agent/pull/45313) | Draft | `/steer` 命令污染历史记录和破坏 prompt cache 的修复，直接影响 steer 功能的可靠性。 |
| [#45284](https://github.com/NousResearch/hermes-agent/pull/45313) | Open | Per-turn reasoning override 路由，为高级用户提供逐轮推理参数控制。 |

**背后诉求分析**：
- **#7237 的高评论量**（41 条）反映了用户对**流式输出稳定性**的迫切需求，这是 Hermes Agent 作为多平台网关的核心体验。用户需要可配置的最大输出长度或智能截断续传机制。
- **企业微信重复回复**（#44497）暴露了 gateway 层**会话隔离**的薄弱环节，尤其是在消息队列并发场景下。
- 多个 Draft PR（#45314、#45313、#45312）集中在**今天早上同时提交**，表明有一位贡献者（comicsansbestfont）在进行一轮系统性的边界条件修复，涉及 auxiliary chain、steer 指令、Telegram 限流等核心路径。

---

## 5. Bug 与稳定性

### P1 — 严重 / 数据丢失风险

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| Matrix gateway 中断后 assistant 消息丢失（state.db 无 .jsonl 回退） | [#43936](https://github.com/NousResearch/hermes-agent/issues/43936) | 🟡 Open | ❌ 暂无 |
| Gateway 泄露 VIRTUAL_ENV 到子进程，agent 操作可破坏 Hermes 自身 venv | [#23473](https://github.com/NousResearch/hermes-agent/issues/23473) | 🟡 Open | ❌ 暂无 |

### P2 — 影响功能完整性

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| 企业微信重复回复（context 隔离问题） | [#44497](https://github.com/NousResearch/hermes-agent/issues/44497) | 🟡 Open | ❌ 暂无 |
| MiniMax-M3 MCP 嵌套数组参数折叠 | [#44976](https://github.com/NousResearch/hermes-agent/issues/44976) | 🟡 Open | ❌ 暂无 |
| Windows 原生 read_file D 盘路径找不到 | [#17999](https://github.com/NousResearch/hermes-agent/issues/17999) | 🟡 Open | ❌ 暂无 |
| Telegram 视频消息缓存但未暴露给 agent | [#41366](https://github.com/NousResearch/hermes-agent/issues/41366) | 🟡 Open | ❌ 暂无 |
| Slack 线程中 bot 消息静默丢弃 | [#30091](https://github.com/NousResearch/hermes-agent/issues/30091) | 🟡 Open | ❌ 暂无 |
| MCP OAuth /oauth/start 轮询 30s 而非立即返回失败 | [#44866](https://github.com/NousResearch/hermes-agent/issues/44866) | 🟡 Open | ❌ 暂无 |
| SELinux 导致 Docker backend 绑定失败 | [#45106](https://github.com/NousResearch/hermes-agent/issues/45106) | 🟡 Open | ❌ 暂无 |
| BlueBubbles webhook IPv4 → IPv6 转换导致附件丢失 | [#45308](https://github.com/NousResearch/hermes-agent/issues/45308) | 🟡 Open | ❌ 暂无 |
| `fallback_providers` 嵌套在 model 下被静默忽略 | [#45309](https://github.com/NousResearch/hermes-agent/issues/45309) | 🟡 Open | ❌ 暂无 |
| WhatsApp Go bridge 被 Node.js 当作 JS 执行报错 | [#45268](https://github.com/NousResearch/hermes-agent/pull/45268) 提 Issue 待建 | 🟡 Open | ✅ [#45268](https://github.com/NousResearch/hermes-agent/pull/45268) |

### P3 — 体验瑕疵

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| macOS codesign 签名身份冲突导致本地构建失败 | [#41499](https://github.com/NousResearch/hermes-agent/issues/41499) | 🟡 Open | ❌ 暂无 |
| Desktop 渲染器崩溃 "tapClientLookup Index out of bounds" | [#41693](https://github.com/NousResearch/hermes-agent/issues/41693) | 🟡 Open | ❌ 暂无 |
| CLI 流式输出按字符截断断行 | [#45272](https://github.com/NousResearch/hermes-agent/issues/45272) | 🟡 Open | ❌ 暂无 |
| `/sessions` 命令仅显示 cli 来源的会话 | [#44964](https://github.com/NousResearch/hermes-agent/issues/44964) | 🟡 Open | ❌ 暂无 |
| `/new` 不刷新模型元数据（KV cache 大小） | [#45029](https://github.com/NousResearch/hermes-agent/issues/45029) | 🟡 Open | ❌ 暂无 |
| auxiliary_client.py oauth_minimax 未处理（duplicate of #45242） | [#45241](https://github.com/NousResearch/hermes-agent/issues/45241) | 🟡 Open | ❌ 暂无（#45242 已关闭） |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 类型 | 信号强度 |
|---|---|---|---|
| Signal adapter 支持引用回复、编辑、远程删除 | [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | Feature | 🟢 低（1 条评论） |
| Desktop GUI 自动滚动、侧边栏重叠修复、自定义会话分组 | [#44140](https://github.com/NousResearch/hermes-agent/issues/44140) | Feature | 🟡 中（已有 MR #45273、#45266 在推进类似 UX 修复） |
| 跨 Desktop 和 Telegram 的统一会话历史 | [#45275](https://github.com/NousResearch/hermes-agent/issues/45275) | Feature | 🟡 中（重复提交，社区有需求） |
| Dependency Review gate（依赖安全审查） | [#45041](https://github.com/NousResearch/hermes-agent/issues/45041) | CI/CD | 🟢 低（基础设施改进） |
| Auxiliary fallback 警告（已有 PR） | [#45314](https://github.com/NousResearch/hermes-agent/pull/45314) | Enhancement | 🔴 高（Draft PR 已提交） |
| Per-turn reasoning override（已有 PR） | [#45284](https://github.com/NousResearch/hermes-agent/pull/45284) | Enhancement | 🔴 高（PR 已提交） |
| MCP stderr 日志轮换和过滤（已有 PR） | [#45285](https://github.com/NousResearch/hermes-agent/pull/45285) | Enhancement | 🔴 高（PR 已提交） |

**判断**：当前有多个功能增强类 PR 已提交但未合并（#45314、#45284、#45285、#45273），结合 Desktop UX 修复 PR（#45266、#45270 已合），**下一版本的主题很可能是 "稳定性 + Desktop 体验提升 + Auxiliary chain 可观测性"**。Signal 和跨平台会话统一属于中远期需求，尚无实质 PR 推进。

---

## 7. 用户反馈摘要

### 😤 不满意 / 痛点

1. **流式输出频繁截断**（#7237，41 条评论）：用户在使用 Telegram/Discord/Slack 进行长对话时，响应经常被截断，严重影响可用性。多名用户复现，说明这不是个别模型提供商的限制，而是 Hermes 输出处理层的普遍问题。

2. **企业微信重复回复**（#44497）：在生产环境中使用 Hermes 作为企业微信机器人时，回复消息出现双条，影响专业形象。用户强调两条回复用词和结构完全不同，说明不是简单的消息重放，而是两次独立的推理调用。

3. **Desktop 会话管理混乱**（#44964、#45275）：用户在不同模式（CLI、TUI、Desktop、Telegram）之间切换时，会话互不可见，无法形成统一工作流。用户期望 "一个地方看到所有对话"。

4. **Windows 原生支持不足**（#17999）：Windows 用户在非 WSL2 环境下连基本文件读取都无法使用，限制了 Windows 用户群。

5. **各种静默失败**：auxiliary fallback 静默降级（#45314 针对的问题）、fallback_providers 配置被忽略（#45309）、MCP OAuth 失败要等 30 秒（#44866）——用户对**配置不报错但行为不符合预期**的模式非常不满。

### ✅ 满意 / 积极信号

- PR #45270（恢复上次会话）已合并，体验改善得到快速响应。
- 上下文压缩污染对话的 P1 bug（#38389 系列）批量关闭，表明维护团队在集中处理历史债务。
- 新 PR 质量较高，伴随测试（如 #45314），社区贡献者在向项目规范靠拢。

---

## 8. 待处理积压 — 维护者关注提醒

以下 Issue 存在时间较长、严重级别高但尚无修复动向：

| Issue | 存在时长 | 严重级别 | 说明 |
|---|---|---|---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) — 输出截断 | 2+ 个月（4/10–） | 🟡 P2 | 41 条评论，社区最高讨论热度，但始终未闭合，需要明确的修复计划或 workaround 文档 |
| [#23473](https://github.com/NousResearch/hermes-agent/issues/23473) — VIRTUAL_ENV 泄露 | 1+ 个月（5/11–） | 🔴 P1 | 可能导致 Hermes 自身 venv 被破坏，影响所有用户，但仅有 1 条评论，可能被忽视 |
| [#17999](https://github.com/NousResearch/hermes-agent/issues/17999) — Windows 文件读取 | 1+ 个月（4/30–） | 🟡 P2 | Windows 用户基础功能缺失 |
| [#30091](https://github.com/NousResearch/hermes-agent/issues/30091) — Slack bot 消息丢弃 | 3+ 周（5/21–） | 🟡 P2 | Slack 多 agent 协作场景 |
| [#43936](https://github.com/NousResearch/hermes-agent/issues/43936) — Matrix 消息丢失 | 2+ 周（6/11–） | 🔴 P1 | 数据丢失，且在 .jsonl 移除后无 fallback |

**建议**：
- 对 #7237 发布维护者回复（哪怕只是确认已知问题 + 预计修复时间窗），41 条无回复的社区讨论正在消耗善意。
- #23473 属于 P1 环境的破坏性 Bug，建议优先排期。
- #17999 的 Windows 支持问题已持续 6 周，如果短期内不计划支持，建议明确标注 `platform/windows` 的已知限制。

---

*数据来源：NousResearch/hermes-agent GitHub | 报告生成时间：2026-06-13 | 报告周期：过去 24 小时*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-13

---

## 1. 今日速览

PicoClaw 今日活跃度处于**中高水平**：24小时内新增/活跃 Issue 5 条、关闭 1 条，PR 更新 14 条（其中 11 条待合并、3 条已合并/关闭），并发布了 nightly 构建版本。项目整体呈现**快速迭代**态势，社区贡献者集中在通道权限模型、WebSocket 协议、工具调用健壮性、多模态路由等方向推进工作。值得注意的是，多个 PR 由不同贡献者针对**静默错误丢弃**（unchecked type assertions、ignored marshal errors）集中修复，反映出代码质量审计正在系统性展开。

---

## 2. 版本发布

### Nightly Build — `v0.2.9-nightly.20260612.413d3749`

- **类型**：自动化 nightly 构建，**非稳定版本**，仅供测试使用
- **基于**：`v0.2.9` → `main` 分支的最新增量
- **完整变更日志**：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- **迁移注意事项**：nightly 版本可能包含不稳定变更，不建议用于生产环境。关注 `main` 分支上已合并的多个 bug fix（JSON 序列化错误处理、类型断言检查等），这些修复预计将进入下一个稳定版本。

---

## 3. 项目进展

今日 **3 条 PR 已合并/关闭**，均为**健壮性修复**，推进了代码质量的系统性提升：

| PR | 状态 | 内容摘要 |
|---|---|---|
| [#3113](https://github.com/sipeed/picoclaw/pull/3113) | ✅ 已合并 | **通道配置序列化错误检查** — `pkg/channels/manager_channel.go` 中 3 处 `json.Marshal`/`json.Unmarshal` 错误被静默丢弃，现全部补上错误处理，避免通道哈希计算在序列化失败时产生静默错误结果 |
| [#3112](https://github.com/sipeed/picoclaw/pull/3112) | ✅ 已合并 | **工具调用参数序列化错误检查** — `pkg/tools/toolloop.go` 中 `json.Marshal(tc.Arguments)` 错误被 `_` 丢弃，导致工具调用参数在对话历史中静默变为空字符串，现已修复 |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | ❌ 已关闭 | **通道标识标准化重构** — 解耦通道名称（config key）与通道类型（provider ID），支持同一 provider 多实例。该 PR 自 4 月创建以来标记 stale，最终被关闭，可能由其他方案替代 |

**整体进展评估**：项目在**错误处理完备性**方向迈出了扎实的一步。两个合并的 PR 虽然改动不大，但修复了可能导致数据静默丢失的关键隐患，对系统可靠性有实质提升。

---

## 4. 社区热点

### 🔥 Issue #2984 — Pico WebSocket 客户端缺少明确的回合完成信号
- **链接**：https://github.com/sipeed/picoclaw/issues/2984
- **👍 2 | 💬 2**
- **诉求分析**：外部 Pico Protocol WebSocket 客户端（如第三方 UI）需要一种**确定性方式**来判断 agent 是否已完整处理完一条用户消息。当前仅有 `message.create`、`message.update`、`typing.start`、`typing.stop` 等事件，缺乏明确的 `turn.done` 信号，导致客户端难以准确同步状态。
- **进展**：已有配套 PR [#3116](https://github.com/sipeed/picoclaw/pull/3116) 正在推进，补全 `turn.done` 生命周期信号，修复 `request_id 保留` 等 3 个缺口。

### 🔥 Issue #3114 — Telegram 渠道按对话类型的权限分级控制
- **链接**：https://github.com/sipeed/picoclaw/issues/3114
- **👍 0 | 💬 0**（新创建，尚未获得社区反应）
- **诉求分析**：用户希望 Telegram 通道能区分**私聊/群组/频道**三种对话类型，分别设置不同的安全策略。私聊开放全部能力，群组和频道限制危险操作（如 `exec`、`write_file`、`delete_file`）。这是对 Issue #3109（已关闭的通道级权限作用域提案）的**细化和延续**。

### 🔥 PR #3118 — 为 picoclaw agent 添加远程 Pico WebSocket 模式
- **链接**：https://github.com/sipeed/picoclaw/pull/3118
- **诉求分析**：允许 `picoclaw agent` 通过 `--remote ws://...` 连接到远程 Pico WebSocket 服务，实现**本地 agent 与远程推理后端**的解耦部署。这对需要在边缘设备运行 agent 但使用云端推理的场景有重要意义。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高 — 工具调用失败（Gemini 3.5 Flash 不兼容）
- **Issue**：[#3111](https://github.com/sipeed/picoclaw/issues/3111) — `gemini-3.5-flash` 模型的工具调用返回 `400 Bad Request`，原因是后端响应 schema 与新 Agentic 推理要求的 `thought_signature` 字段不兼容
- **影响**：使用 Gemini 3.5 Flash 的用户完全无法使用工具/技能系统
- **Fix PR**：暂无，需 provider 层适配

### 🔴 高 — 会话历史污染（data URL 误判为媒体附件）
- **Issue**：无独立 Issue，由 PR 直接发现
- **PR**：[#3115](https://github.com/sipeed/picoclaw/pull/3115) — `read_file`、`exec` 等通用工具返回的纯文本中若包含 `data:image/...;base64,...` 字符串，会被误判为真实媒体附件，导致会话历史损坏
- **Fix PR**：✅ 已有，待合并

### 🟡 中 — Telegram Forum 话题回复路由错误
- **Issue**：[#3110](https://github.com/sipeed/picoclaw/issues/3110) — Telegram 群组转换为 Forum 后，bot 在正确的 topic 中触发 "typing..."，但最终文本消息被发送到根 topic（`#General`），`message_thread_id` 被忽略
- **影响**：Forum 模式下多话题并行对话场景不可用
- **Fix PR**：暂无

### 🟡 中 — Evolution 模式下 Token 持续消耗
- **Issue**：[#3012](https://github.com/sipeed/picoclaw/issues/3012) — 启用 Evolution（Draft 模式、Code Path Trigger）后，每隔数分钟持续消耗 token，即使无用户交互
- **影响**：运行成本异常升高
- **Fix PR**：暂无，标记 stale

### 🟢 低 — 媒体回合未路由到图像模型
- **Issue**：[#3108](https://github.com/sipeed/picoclaw/issues/3108)（由 PR 引用）
- **PR**：[#3117](https://github.com/sipeed/picoclaw/pull/3117) — 媒体回合和 `load_image` 后续请求被错误地路由到纯文本模型重试
- **Fix PR**：✅ 已有，待合并

---

## 6. 功能请求与路线图信号

| 方向 | 需求来源 | 已有 PR | 纳入可能性 |
|---|---|---|---|
| **通道权限分级** | [#3109](https://github.com/sipeed/picoclaw/issues/3109)（已关闭）、[#3114](https://github.com/sipeed/picoclaw/issues/3114)（新） | 无 | ⭐⭐⭐ 高 — 需求明确且持续演进，从通道级细化到对话类型级 |
| **远程 Agent 模式** | 社区贡献 | [#3118](https://github.com/sipeed/picoclaw/pull/3118) | ⭐⭐⭐ 高 — PR 已就绪，架构清晰 |
| **Pico WebSocket 协议完善** | [#2984](https://github.com/sipeed/picoclaw/issues/2984) | [#3116](https://github.com/sipeed/picoclaw/pull/3116) | ⭐⭐⭐ 高 — 配套 PR 正在推进 |
| **图像输入压缩** | 社区贡献 | [#2964](https://github.com/sipeed/picoclaw/pull/2964) | ⭐⭐ 中 — PR 存在但 stale，需更新 |
| **NEAI AI Cloud Provider** | 社区贡献 | [#2917](https://github.com/sipeed/picoclaw/pull/2917) | ⭐⭐ 中 — PR 存在但 stale，需更新 |
| **DeltaChat 网关** | 社区贡献 | [#3063](https://github.com/sipeed/picoclaw/pull/3063) | ⭐⭐ 中 — 功能新颖，需审查 |
| **Web UI 体验优化** | 社区贡献 | [#3097](https://github.com/sipeed/picoclaw/pull/3097)（Shift+Enter 提示） | ⭐⭐ 中 — 低风险 UI 改进 |

**路线图判断**：下一稳定版本（预计 `v0.2.10` 或 `v0.3.0`）大概率将包含：JSON 错误处理修复（已合并）、Pico WebSocket `turn.done` 信号、远程 agent 模式、媒体路由修复。通道权限分级模型可能需要更长时间设计。

---

## 7. 用户反馈摘要

**真实痛点：**
- **安全边界模糊**：用户将 bot 加入 Telegram 群组时，群成员可以执行 shell 命令和文件操作，缺乏内置的"最小权限"原则（[#3114](https://github.com/sipeed/picoclaw/issues/3114)）
- **协议不完整导致客户端开发困难**：WebSocket 客户端开发者无法可靠判断 agent 回合结束，只能依赖启发式等待（[#2984](https://github.com/sipeed/picoclaw/issues/2984)）
- **新模型适配滞后**：Gemini 3.5 Flash 的工具调用直接报错，用户无法使用最新模型（[#3111](https://github.com/sipeed/picoclaw/issues/3111)）
- **Forum 模式不可用**：Telegram Supergroup Forum 用户无法在正确的话题中收到回复（[#3110](https://github.com/sipeed/picoclaw/issues/3110)）

**满意信号：**
- 社区贡献者积极提交修复 PR，多个 PR 在同日快速合并，响应速度良好
- 项目持续发布 nightly 构建，方便早期测试者验证修复

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 项目 | 创建日期 | 状态 | 建议行动 |
|---|---|---|---|
| **Issue #3012** — Evolution token 持续消耗 | 2026-06-05 | OPEN, stale | 确认是否可复现，若已修复则关闭；否则需排查 Evolution 循环触发逻辑 |
| **PR #2964** — 图像输入压缩 | 2026-05-28 | OPEN, stale | 与作者确认是否继续推进，或关闭后由其他贡献者接手 |
| **PR #2917** — NEAR AI Cloud Provider | 2026-05-21 | OPEN, stale | 评估该 provider 的用户需求，决定是否合并或关闭 |
| **PR #3045** — Matrix allow_from 冒号解析回退 | 2026-06-07 | OPEN | 修复 Matrix 用户 ID 格式解析 bug，改动小、风险低，建议优先审查合并 |
| **PR #3053** — evolution store 类型断言检查 | 2026-06-08 | OPEN | 防止 panic 的健壮性修复，建议优先审查合并 |
| **PR #3091** — openai_compat native_search 类型断言 | 2026-06-10 | OPEN | 防止 native search 被静默禁用的修复，建议优先审查合并 |

> **积压健康度评估**：当前待合并 PR 共 11 条，其中 4 条标记 stale 或超过 2 周未响应。建议维护者本周内对 stale PR 进行状态确认（关闭/重新激活），并对 3 个低风险健壮性修复 PR（#3045、#3053、#3091）优先审查合并，以降低积压并提升社区贡献者积极性。

---

*数据来源：GitHub sipeed/picoclaw | 报告生成时间：2026-06-13 | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw 项目动态日报 · 2026-06-13
> 项目名称：NanoClaw · 仓库：[github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

### 1. 今日速览

NanoClaw 在 2026-06-13 维持高活跃度，项目开发节奏紧凑。昨日共发生 ** 5 条 Issue 更新**（新开/活跃 4 条、关闭 1 条）和 **9 条 PR 新增**，均待合并，无任何 PR 完成合并——评审队列积压明显。无新版本发布，但功能与安全类的 PR 集中涌来，显示团队处于 v2.x 版本的密集修补与加固阶段中。社区侧的 Issue 集中在 **会话可靠性（消息去重丢失、工具挂起无超时）、权限安全（create_agent 未做 admin 鉴权）和部署安全性（容器逃生防护）** 三大方向，稳定性诉求强烈。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

**昨日无 PR 合并或关闭**，9 条新 PR 全部处于待合并状态，表明维护者可能在等待 CI 评审或集中分批合并。但内容方向非常值得关注：

| PR | 类型 | 摘要 |
|---|---|---|
| **#2745** · feat(memory) | 核心架构 | 新增 `usesMemoryScaffold` provider 能力 + 容器侧脚手架，为不同 provider 提供可选的持久记忆接入点。这是 v2 系列向多 provider 扩展路线上的重要基础设施 |
| **#2746** · feat(providers) | 核心架构 | 建立 provider 能力声明注册表（capability registry）， agent 可据此表面化自身能力给调用方——与 #2745 配套，构成 provider 抽象层的两个支柱 |
| **#2747** · feat(onecli) | 依赖升级 | 将 `@onecli-sh/sdk` 从 0.5.0 直接升级到 **2.2.1**，引入 credential-stub 挂载和机读版本锁定，是一次较大的 BOM 跃升 |
| **#2748** · security | 容器安全 | 以 `--cap-drop=ALL`、`no-new-privileges`、`--pids-limit 2048` 新建 agent 容器，显著降低容器逃逸后的攻击面，属防御纵深加固 |
| **#2749** · security | 供应链安全 | 对 agent 发起的 npm 安装请求执行 **3 天最小发布时间检查**，与 host 侧的 pnpm workspace 策略对齐 |
| **#2750** | Bug Fix | 修复容器被 SIGKILL 后 `outbound.db` 残留 stale journal、以及热 journal 竞争轮询的两类故障（对接 Issue #2516/#2640） |
| **#2670** | Bug Fix | 修复因 resumed transcript 损坏（`thinking`/`redacted_thinking` 块不可修改）导致的 agent 会话无限 crash 循环（对接 Issue #2669） |
| **#2752** | Bug Fix | 修复 Discord 入站附件（文字截图/图片）无法以可读形式送达 agent 的问题 |
| **#2753** | DevOps Fix | 修复 pre-commit hook 在 `pnpm` 不在 PATH 时"fall open"（检验失灵）的问题 |

> **总结**：三条 provider/memory 架构 PR（#2745–#2747）构成一次 mini-spike，标志项目正在为 v2 的多 provider 战略铺设底层能力；两条安全加固 PR（#2748、#2749）说明 security audit 正在推动落地。但当日无合并意味着积压增加，建议维护者安排集中的 PR review window。

---

### 4. 社区热点

#### Issue #2506 · send_message 去重逻辑静默丢弃回复
- **状态**：OPEN · 3 条评论
- **链接**：[nanocoai/nanoclaw#2506](https://github.com/nanocoai/nanoclaw/issues/2506)
- **核心诉求**：当两次 turn 在 60 秒内完成，或 follow-up 消息在 streaming 时到达，`send_message` 的去重逻辑会把第二次回复静默丢弃，客户端只收到超时。这是**消息可靠性与可用性**的直接冲突，影响所有高频交互场景下的用户体验。

#### Issue #2711 · create_agent MCP 工具未做 admin 鉴权
- **状态**：OPEN · 1 条评论
- **链接**：[nanocoai/nanoclaw#2711](https://github.com/qwibitai/nanoclaw/issues/2711)
- **核心诉求**：代码注释和描述都写"admin-only"，但 host 端未做任何角色校验，任意 container 都可调用 `create_agent` 创建新 agent group。这暴露了 MCP 工具粒度的权限模型缺口。

#### Issue #2668 · agent session 无 per-tool 超时
- **状态**：OPEN · 1 条评论
- **链接**：[nanocoai/nanoclaw#2668](https://github.com/nanocoai/nanoclaw/issues/2668)
- **核心诉求**：单个工具调用会阻塞整个 agent turn，最长 30 分钟才能被 cold-kill。用户期望对每个 MCP 工具独立配置超时阈值。

#### Issue #2632 · v2 中 Telegram agent-swarm / 多 bot 身份的迁移路径
- **状态**：OPEN · 1 条评论
- **链接**：[nanocoai/nanoclaw#2632](https://github.com/nanocoai/nanoclaw/issues/2632)
- **核心诉求**：用户在规划 v1→v2 迁移，发现旧版 `/add-telegram-swarm` 功能在新版中位置不明，需要维护者明确说明迁移策略或兼容性承诺。

---

### 5. Bug 与稳定性

按严重程度排列：

| # | Issue / PR | 严重级别 | 描述 | Fix PR 状态 |
|---|---|---|---|---|
| 1 | **#2711** | 🔴 高（安全风险） | `create_agent` 未做 admin 鉴权，任意容器可创建 agent group | **暂无直接 fix PR**；但 #2748 容器安全加固是相关纵深防御 |
| 2 | **#2668** | 🔴 高（可用性） | 挂起的 MCP 工具无超时，阻塞 session 最长 30 min | **暂无 fix PR** |
| 3 | **#2506** | 🟠 中（数据丢失） | 快速连续消息被去重逻辑静默丢弃 | **暂无 fix PR**；#2750 修复的 outbound.db 竞争与此相关但可能不直接解决 |
| 4 | **#2516 / #2640** | 🟠 中（数据完整性） | outbound.db stale journal 竞争 | ✅ **#2750** 已提出，待合并 |
| 5 | **#2669** | 🟠 中（崩溃循环） | 损坏的 resumed transcript 导致 agent 无限 crash-loop | ✅ **#2670** 已提出，待合并 |
| 6 | **#2751**（已关闭） | 🟡 低 | budget 耗尽时 LLM 返回伪造 HTTP 200，agent 当正常回复处理 | 已关闭，原因未详 |
| 7 | **#2752**（相应 bug） | 🟡 低 | Discord 附件无法送达 agent | ✅ **#2752** 已提出，待合并 |

---

### 6. 功能请求与路线图信号

从当前 PR 布局可以读出 v2 路线图正在聚焦三个方向：

1. **多 Provider 抽象层**：#2745（memory scaffold）、#2746（capability registry）、#2747（onecli SDK 大版本升级）三条 PR 同日切入，说明团队已启动 provider 可扩展性的系统性改造。预期下一版本将支持更多 cloud provider（可能是 Anthropic、OpenRouter 等）通过统一接入层管理。

2. **安全纵深加固**：#2748（容器安全 flags）和 #2749（npm 供应链年龄检查）两条 PR 同日提出，透露出项目在"多租户/agent 自治"场景下补齐了高优先级安全 gap。这与 Issue #2711 暴露的权限模型问题相呼应——虽然 #2711 尚无直接 fix，但容器级加固是正确的防御纵深方向。

3. **Telegram 生态复兴**：Issue #2632 显示了社区对 v2 中 Telegram swarm 能力的强烈依赖。当前 repo 内未见直接对应的 PR，但 #2745 的 memory scaffold 和 #2746 的 capability registry 为跨 bot 身份共享记忆提供了基础设施——相关功能可能在后续迭代中出现。

---

### 7. 用户反馈摘要

从 Issue 评论和描述中提炼的真实痛点与使用场景：

**稳定性痛点（高频）：**
- **消息丢失**：用户在高频率对话或 follow-up 场景下，消息被静默丢弃而没有任何错误提示（#2506）。这类"静默失败"对终端用户最不友好，一旦发生几乎不可排查。
- **Agent 崩溃循环**：容器重启后尝试 resume 时，因历史 transcript 损坏导致无限 crash-loop，session 永远不可用（#2669 → PR #2670）。这说明在跨容器迁移/重启场景下，agent session 的韧性不足。
- **工具超时黑洞**：MCP 工具无超时导致整个 session 卡住，用户只能通过 30 分钟 cold-kill 恢复（#2668）。

**安全诉求（强烈但小众）：**
- 多 container 环境下，`create_agent` 权限缺口让用户担心 agent 集群的被恶意横向扩展（#2711）。
- npm 供应链攻击面已被关注，用户自己提了 PR（#2749），说明部分用户具备一定安全成熟度。

**部署场景（分化）：**
- Telegram swarm 用户正在规划 v1→v2 迁移，对旧功能废弃有焦虑（#2632）。
- Discord 用户遇到附件不可读的集成 bug（PR #2752），说明 NanoClaw 在 multi-channel 场景下的 QA 覆盖有待提升。

**隐式满意点：**
- 多位社区成员（boazdori、omri-maya、sturdy4days、jsigwart）直接提了 PR 而非仅报告 Issue，说明对项目代码库的熟悉度和信任度较高，社区参与质量良好。

---

### 8. 待处理积压

以下长期未响应的 Issue 和老化 PR 需要维护者优先关注：

| 项目 | 类型 | 创建日期 | 最后更新 | 距今天数 | 备注 |
|---|---|---|---|---|---|
| **Issue #2506** | 消息去重 Bug | 05-16 | 06-12 | ⚠️ 28 天 | 3 条评论仍未解决，影响高频交互用户 |
| **Issue #2632** | v2 迁移咨询 | 05-28 | 06-12 | 16 天 | 仅 1 条评论，需官方明确回应 swarm 功能的 v2 位置 |
| **Issue #2668** | 工具超时 | 06-01 | 06-12 | 12 天 | 高影响用户场景，无 fix PR |
| **Issue #2669** | crash 循环 | 05-31 | 06-12 | 13 天 | **已有 PR #2670 可合并**，建议优先处理 |
| **PR #2670** | crash 循环 fix | 06-01 | 06-12 | 12 天 | **已等待 12 天未合并**，对应 Issue #2669，建议加快 review |
| **PRs #2745–2753** | 9 条新 PR | 06-12 | 06-12 | 1 天 | 昨日全部新提，尚无一条进入 review 流程 |

**建议行动项：**
1. 优先 review 并合并 **#2670**（crash-loop 自愈），它修复了已存在近两周的 P1 Bug。
2. 对 **#2506** 和 **#2711** 给出官方回应或纳入 sprint——前者影响面广，后者涉及安全。
3. 对 **#2632** 的 Telegram swarm 迁移路径及时回复，降低社区焦虑，避免 fork 分化。
4. 安排一次集中 PR review session 消化 9 条待合并 PR——特别是两条安全加固 PR（#2748、#2749），其重要性高但客观上可能因 review 流程滞后产生窗口期风险。

---

*报告由 OWL 生成 · 数据截止 2026-06-13 00:00 UTC*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw 项目动态日报 — 2026-06-13

---

### 1. 今日速览

过去 24 小时 NullClaw 无新版本发布，项目开发节奏处于"修复驱动"阶段。Issue 报告较少且以 Bug 为主，Pull Request 活跃（3 条均处于 OPEN 状态），均由高频贡献者 vernonstinebaker 提交，聚焦于启动噪音、配置灵活性和通道连接稳定性。整体活跃但未出现集中合并，维护者在 PR Review 环节存在一定积压。

---

### 2. 版本发布

无。

---

### 3. 项目进展

今日无 PR 合并/关闭，但有 3 条活跃 PR 等待处理（均为同一作者在推进）：

| PR | 方向 | 内容摘要 |
|----|------|----------|
| [#949](https://github.com/nullclaw/nullclaw/pull/949) — *fix: make queue_mode configurable from config.json* | 配置灵活性 | 新增 `agent.default_queue_mode` 配置字段，允许通过 `config.json` 设置新 Session 的默认队列模式，并将 `QueueMode` 枚举统一到 `config_types.zig` 作为单一来源。 |
| [#951](https://github.com/nullclaw/nullclaw/pull/951) — *fix(agent_runner): suppress stderr initialization logs on agent failure* | 启动稳定性 | 修复 Agent 子进程非零退出时，误将初始化日志（内存计划、MCP 注册、频道启动信息）作为 Agent 响应发送到频道的问题。 |
| [#953](https://github.com/nullclaw/nullclaw/pull/953) — *fix(discord): recover closed gateway sockets* | Discord 通道健壮性 | 修复关闭的 Discord Gateway Socket 恢复逻辑，增加停滞预 HELLO 重连的健康检查和重连 Session 保持的回归覆盖。 |

**解读**：三个 PR 均针对实际使用中暴露的"噪音"问题——启动日志泄露、配置不可定制、通道断连恢复缺失。合并后将显著提升日常运维体验，降低社区 Discord 频道因误发初始化日志造成的困扰。

---

### 4. 社区热点

- **[#952 [bug] Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)**
  - 状态：OPEN，作者 bloodgroup-cplusplus，创建于 06-11，更新于 06-12，暂无评论和反应。
  - 背景：用户通过 Ollama 拉取 Gemma 模型后启动 Agent，得到的回答为不完整句子（从截图感受）。这类问题指向本地模型推理链路与 NullClaw Agent Runner 的集成，属于"最后一公里"的稳定性问题。由于缺少评论和复现步骤，尚待补充信息。

---

### 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复情况 |
|----------|------|------|----------|
| ⚠️ 中等 | **LLM 输出截断** — Ollama Gemma 模型返回不完整回答 | [#952 OPEN](https://github.com/nullclaw/nullclaw/issues/952) | 暂无关联 PR |
| ⚠️ 中等 | **stderr 初始化日志泄露** — Agent 退出时启动噪音被发到频道 | [#951 OPEN](https://github.com/nullclaw/nullclaw/pull/951) | 已有 PR 修复 |
| 🔵 已知 | **Discord Gateway Socket 断连恢复** | [#953 OPEN](https://github.com/nullclaw/nullclaw/pull/953) | 已有 PR 修复 |

**建议**：Bug #952 应优先要求提供 Ollama 版本、Gemma 量化参数、NullClaw Agent Runner 日志，以便判断是推理端截断还是 Agent 侧超时/缓冲问题。

---

### 6. 功能请求与路线图信号

| 方向 | 信号来源 | 判断 |
|------|----------|------|
| **可配置默认队列模式** | PR [#949](https://github.com/nullclaw/nullclaw/pull/949) | 已进入代码实现阶段，合并即为功能落地。 |
| **Agent 启动可观测性** | PR [#951](https://github.com/nullclaw/nullclaw/pull/951) | 解决噪音，提升运维体验。 |
| **通道连接韧性** | PR [#953](https://github.com/nullclaw/nullclaw/pull/953) | 基础设施稳定性，对重度用户价值明显。 |

暂未出现新的、尚未有 PR 跟进的功能请求 Issue。

---

### 7. 用户反馈摘要

| 信号 | 来源 | 解读 |
|------|------|------|
| **本地模型集成不稳定** | [#952](https://github.com/nullclaw/nullclaw/issues/952) | 用户尝试通过 Ollama 运行开源模型（Gemma），但回答不完整，暴露了 NullClaw 对本地模型输出流式处理或超时的缺乏防御。 |
| **启动噪音困扰** | [#951 PR](https://github.com/nullclaw/nullclaw/pull/951) | 非零退出时初始化日志被当作 Agent 响应发送，说明维护者自己已在修复这个噪音问题。 |

整体上社区对 NullClaw 的稳定性和"开箱即用"体验提出了更高期待。

---

### 8. 待处理积压

| 项目 | 状态 | 备注 |
|------|------|------|
| **PR #949 — queue_mode 配置化** | OPEN，创建于 06-10 | 4 天未合并，涉及配置字段变更，可能需要确认是否向后兼容。 |
| **PR #951 — 抑制 stderr 噪音** | OPEN，创建于 06-10 | 4 天未合并，逻辑较直接，建议通读后合并。 |
| **PR #953 — Discord 断连恢复** | OPEN，创建于 06-12 | 24h 内新 PR，建议尽快 Review，避免丢失上下文。 |
| **Issue #952 — Ollama 截断** | OPEN，更新于 06-12 | 仅 1 天，待补充复现信息后可分流至已有 PR（若 Runner 侧需修改则新建）或关闭为 Ollama 端问题。 |

**维护者关注点**：三条 OPEN PR 的处理周期不宜拉长，建议尽快完成 Review 窗口，避免作者反复 rebase 造成合并成本升高。

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-06-13

---

## 1. 今日速览

IronClaw 今日活跃度较高且侧重明确：过去24小时共处理 **50 条 Issues 更新**（33 新开/活跃，17 已关闭）和 **50 条 PR 更新**（32 待合并，18 已合并/关闭），无新版本发布。社区贡献者以核心团队为主（henrypark133、ilblackdragon、sunglow666、serrrfirat 最为活跃），工作重心集中在 **Reborn 架构的稳定性补全、附件系统多轨道推进、DeferredBusy 排干机制的架构细化** 三个方面。整体项目处于密集开发迭代期，多条大型功能轨道并行推进，合并节奏稳健。

---

## 2. 版本发布

**无新版本发布。**

当前最老待合并的 release PR **#3708**（创建于 2026-05-16）已积压近一个月，包含 `ironclaw_common` 0.4.2 → 0.5.0（含 Breaking Changes）和 `ironclaw` 0.24.0 → 0.29.1 等多个 crate 版本抬升，仍待合并。积压时间较长，建议维护者优先处理。

---

## 3. 项目进展——今日合并/关闭的关键 PR

| PR | 状态 | 摘要 |
|---|---|---|
| **#4773** | ✅ 已合并 | 为 Reborn runtime 添加真实 Anthropic 模型 trace 录制/回放机制，实现 QA 短语的确定性 CI 测试（无需外部服务/API key），为回归测试奠定基础 |
| **#4568** | ✅ 已合并 | Hooks：对 BeforeCapability 广播添加每调度上限（fail-closed），防止 hook fan-out 失控 |
| **#4562** | ✅ 已合并 | Hooks：AuthContinuation 调度失败现在会写入 SecurityAuditSink，安全审计覆盖更完整 |
| **#4569** | ✅ 已合并 | Hooks：强制执行跨调用和值历史的租户谓词键总量上限，更新内存/libSQL/Postgres 三种后端淘汰策略 |
| **#4834** | ✅ 已合并 | 晋升至 QA 分支，加速核心变更进入质量验收流程 |
| **#4769** | ✅ 已合并 | 将手工 QA 工作流移植为 5 个确定性根级测试套件（22 个新测试），基于 `RebornBinaryE2EHarness`，CI 可直接覆盖 Reborn 用例 |

**关键进展总结：**

- **安全审计边界补齐**：3 个 hook 相关 PR（#4562、#4568、#4569）同日合并，标志着安全审计链路在 MCP/能力调度/租户隔离层面形成闭环。
- **Reborn 测试基础设施跨越式提升**：#4773 的录制回放 + #4769 的 22 个 E2E 测试，让 Reborn 路径首次具备与 legacy 路径同等的 CI 自动化保障。

---

## 4. 社区热点

### 🔥 Issue #4825 — Reborn: "always allow" 批准无法跨 Thread 持久化
**作者**: henrypark133 | **评论**: 3 | [链接](https://github.com/nearai/ironclaw/issues/4825)

**核心诉求**：用户在某个线程中对能力审批门（capability approval gate）选择了 "always allow"，此批准的 scope 包含 `thread_id`，导致每次新建线程都会重复触发相同的审批门，违背了 "always allow" 的语义。

**响应速度**：同日即有 fix PR **#4835**（打开于 2026-06-12），将 `thread_id` 从持久化审批 scope 中移除，scope key 改为 `(tenant_id, user_id, agent_id?, project_id?)`。该 PR 目前已开放待合并。

---

### 🔥 Issue #4703 — Reborn: NEAR AI model picker 保存 displayName 而非 model ID
**作者**: sunglow666 | **评论**: 3 | [链接](https://github.com/nearai/ironclaw/issues/4703)

**核心诉求**：在 Reborn 中配置 NEAR AI provider 时，model picker 将显示名称（如 "DeepSeek V4 Flash"）而非实际 model ID 持久化，导致后续推理调用出错。

**状态**：已关闭（被认为已修复）。

---

### 🔥 Issue #4817 — DeferredBusy 排干后续设计决策跟踪
**作者**: henrypark133 | **评论**: 2 | [链接](https://github.com/nearai/ironclaw/issues/4817)

这是 #4812（DeferredBusy 排干 PR）合并后的设计跟进，跟踪三个非阻塞的架构决策：排干提交入口、过期 intent 策略、启动扫描。体现了团队在快速推进同时对架构债务的精细化管理。

---

### 🔥 Issue #4705 — Reborn: NEAR AI SSO 在本地环境失败
**作者**: sunglow666 | **评论**: 2 | [链接](https://github.com/nearai/ironclaw/issues/4705)

**核心诉求**：本地环境下 GitHub/Google SSO 返回 `Invalid frontend_callback`，NEAR Wallet 返回签入失败。影响本地开发和测试体验。

**状态**：已关闭。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Issue | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| **#4824** | 🔴 阻塞 CI | `cargo-deny` 因新发布 RUSTSEC 告警（postgres 相关 3 个 CVE：SCRAM 迭代 DoS、hstore 解码 panic、DataRow panic）在整个 repo 及所有 open PR 上持续失败 | 尚无 |
| **#4823** | 🔴 UX 缺陷 | 删除运行中状态的 conversation 时失败但无 UI 反馈，用户完全无法感知操作结果 | 尚无 |
| **#4796** | 🟡 功能缺陷 | LLM 在不使用 time tool 时无法感知当前日期/时间，影响日程/提醒等时间敏感工作流质量 | 尚无 |

### 🟡 中优先级

| Issue | 描述 | Fix PR |
|---|---|---|
| **#4762** | 工具工作流失败导致后续消息和活动顺序不一致 | 尚无 |
| **#4696** | Local Ollama 在服务未运行时 "Test connection" 错误报告成功 | 尚无 |
| **#4697** | Inference 页面显示的活跃 provider 状态不一致 | 尚无 |
| **#4759** | workspace-relative 路径使用时路径被重复拼接 | 尚无 |

### 🟢 已关闭（已修复）

| Issue | 摘要 |
|---|---|
| **#4733** | 回复中链接点击会离开当前对话页面 |
| **#4722** | 对话消息不显示用户/助手身份 |
| **#4721** | Sidebar PINNED 区域实际显示活跃对话而非固定对话 |
| **#4719** | 返回对话时内容区闪烁 |
| **#4725** | Working 状态下 composer 仍然显示可交互样式 |
| **#4720** | 附件警告在不同对话间残留 |
| **#4724** | 离开新对话时未发送草稿丢失 |
| **#4706** | 授权流程失败后无法恢复 |

> **⚠️ CI 稳定性风险**：Issue **#4824**（cargo-deny RUSTSEC 告警）目前阻塞所有 PR 的 CI 检查，是最高优先级的运维问题，建议尽快升级 postgres 相关依赖或添加 deny 例外规则。

---

## 6. 功能请求与路线图信号

### ⬆️ 大型功能轨道（多 PR 并行推进）

**轨道 A：附件系统全链路（#4644 史诗）**

仍在活跃的大型 PR 链：

| 轨道 | PR | 状态 |
|---|---|---|
| Track 1: 格式注册表 | **#4654** | 待合并 |
| Track 2: 转录合约扩展 | **#4655** | 待合并 |
| Track 6: 字节着陆层 | **#4668** | 待合并 |
| Track 6→2 桥接 | **#4670** | 待合并 |
| 前端上传 UX | **#4738** | 待合并 |

该轨道已持续 5 天以上，全部为大中型 PR，属于下一版本的核心功能增量。

**轨道 B：DeferredBusy 排干与批量化**

- **#4812** 已实现基础排干（每次排一条）
- **#4825/#4835** 跨线程 "always allow" 持久化（已开 PR）
- **#4831** 通过 `product_workflow` 重播入口路由排干重提交
- **#4832** 将排干消息批量化为单次调用（依赖 #4831）
- **#4833** 文件系统后端为 DeferredBusy 添加 per-thread 索引，避免全量扫描

这组 issue 呈现清晰的迭代脉络，核心目标是 **将 DeferredBusy 从串行排干演进为高性能批量处理**。

**轨道 C：Reborn WebUI 成熟度**

- **#4777** 持久化 Slack 已连接状态到 WebUI
- **#4778** 将 Slack 重构为 product-adapter 扩展，移出硬编码信道列表
- **#4738** 附件前端 UX（拖拽/上传/预览）

### 🧭 潜在路线图信号

- **#4822**（Engine V2 LLM 用量在 admin/usage 中的可见性）：需求清晰，实现相对独立，可预期会较快合并。
- **#4828/#4836**（连接信道/投递状态/运行来源作为运行时上下文切片）：赋予 LLM 感知其运行环境的能力，是 Agent 可观测性的重要补充，PR #4836 已打开，预计近期合并。
- **#4588**（Reborn 可观测性接缝—轨迹观察者 + LLM 提供者注入）：支持外部 host（如 nearai-bench）驱动和观察 Reborn 运行，是 benchmarking 基础设施的关键。

---

## 7. 用户反馈摘要

从今日 Issues 评论和内容中提炼出的核心痛点：

### 😤 不满 / 痛点

1. **审批疲劳（Approval Fatigue）** #4825："always allow" 本意为一次性永久授权，但每次新建线程都需要重新审批。这在多线程工作流中严重打断心流，是体验层面的高痛点。

2. **运行中对话无法删除且无反馈** #4823：用户尝试删除正在运行中的对话时，操作静默失败，没有任何错误提示。不可预测的行为严重影响信任感。

3. **LLM 时间感知缺失** #4796：当用户询问"今天"、"明天"、"下周"等问题时，模型可能给出错误答案——即使有可用工具。这直接影响日程、提醒等高频工作流的可靠性。

4. **Ollama 连接检测误报** #4696：Test connection 在 Ollama 未运行时返回成功，让用户误以为配置正确，浪费排查时间。

5. **CI 持续失败** #4824（间接影响贡献者）：所有 open PR 的 CI 因 cargo-deny 告警持续失败，贡献者无法判断自己的变更是否通过检查，形成贡献阻力。

### ✅ 满意的方面

- 多条 UI/UX bug（#4721 PINNED 逻辑、#4722 身份显示、#4733 链接导航、#4719 闪烁等）在短时间内被批量关闭，反映团队响应速度快。
- 安全审计链路的系统补齐（#4562、#4568、#4569同日合并）展示了团队对安全边界的高度重视。

### 🎯 高频使用场景

- **多线程对话管理**：用户频繁创建/切换线程，需要跨线程状态持久的授权机制
- **本地开发与调试**：Local Ollama + NEAR AI provider 的本地配置体验仍有改进空间
- **文件/附件工作流**：上传 → 代理处理 → 转录持久化是核心使用模式，全链路正在完善中

---

## 8. 待处理积压

### 🚨 需要维护者关注的长期积压项

| 项目 | 创建时间 | 等待天数 | 说明 |
|---|---|---|---|
| **PR #3708**（release） | 2026-05-16 | **28 天** | 版本发布 PR 含多个 Breaking Changes，积压近一个月。建议尽快合并或关闭 |
| **Issue #4824**（cargo-deny CVE） | 2026-06-12 | 1 天 | 阻塞所有 PR CI，为新发现 RUSTSEC 告警，需紧急处理 |
| **PR #4812**（DeferredBusy 排干） | 2026-06-12 | 1 天 | XL 级别 PR，已有 3 个跟进 issue，建议尽快 review 合并以解锁下游工作 |
| **PR #4738**（附件前端 UX） | 2026-06-10 | 3 天 | 大型 PR，附件系统关键轨道，已被下游 PR 依赖 |
| **Issue #4696**（Ollama 误报） | 2026-06-10 | 3 天 | 无 fix PR，本地开发体验问题 |
| **Issue #4697**（provider 状态不一致） | 2026-06-10 | 3 天 | 无 fix PR，核心推理路由正确性疑虑 |
| **PR #4813**（CI 大任务分片） | 2026-06-12 | 1 天 | 改善 CI 反馈速度，技术债治理 |
| **PR #4818**（slack_delivery.rs 重构） | 2026-06-12 | 1 天 | ~4000 行文件分解，架构健康维护 |

### 📋 建议优先级排序

1. **立即处理**：#4824（解除 CI 阻塞）、#3708（清理发布积压）
2. **本周内 review**：#4812（解锁 DeferredBusy 下游）、#4835（always allow 跨线程修复）
3. **下轮迭代考虑**：#4696、#4697、#4759（本地开发体验问题组）

---

> **项目健康度评分：7.5 / 10**
> 
> - ✅ 合并节奏稳定，安全审计链路完善，测试基础设施大幅提升
> - ✅ 大型功能轨道（附件、DeferredBusy、WebUI）推进有序，架构债务可控
> - ⚠️ CI 被 cargo-deny 告警阻塞，需尽快处理
> - ⚠️ 版本发布 PR 积压 28 天，Breaking Changes 延迟合并可能增加冲突风险
> - ⚠️ 若干本地开发体验 bug（#4696、#4697）无 fix PR，可能影响新贡献者入场体验

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-13

---

## 1. 今日速览

LobsterAI 昨日（2026-06-12）迎来了 **一高强度集成日**：共计 **17 条 PR 更新，其中 11 条已合并/关闭**，没有新 Issue 开放（1 条旧 Issue 被关闭），无新版本发版。核心工作集中在 **release/2026.6.11 → main 的主线合并**（PR #2158），一次性将 Computer Use MVP、实时 ASR 语音输入、HTML artifact 公开分享模式、图片/SVG artifact 分享支持等多项功能带入主线。同日还有多条修复 PR 快速合入，整体项目活跃度**高**，处于密集迭代周期中。

---

## 2. 版本发布

无正式新版本发布。但 PR #2158 已将 `release/2026.6.11` 合并入 `main`，预计近期将发布 **2026.6.x** 版本。

---

## 3. 项目进展

### 主线功能合并（大批量合入）

| PR | 作者 | 状态 | 核心内容 |
|---|---|---|---|
| [#2158](https://github.com/netease-youdao/LobsterAI/pull/2158) | liuzhq1986 | ✅ 已合并 | 将 `release/2026.6.11` 合并入主线，带入 Computer Use MVP、实时 ASR 语音输入、HTML/SVG artifact 分享等大量功能 |

### 同日快速修复 PR（均已合并）

| PR | 作者 | 核心修复 |
|---|---|---|
| [#2156](https://github.com/netease-youdao/LobsterAI/pull/2156) | btc69m979y-dotcom | 升级 Computer Use runtime 至 1.0.7，增加 UIA breadcrumbs 诊断辅助退出问题 |
| [#2157](https://github.com/netease-youdao/LobsterAI/pull/2157) | liugang519 | **fix(media)** — 保存文生图时优先根据文件字节识别真实格式，用正确扩展名覆盖服务端可能返回的错误后缀（如 PNG 内容被存为 .jpg 的问题） |
| [#2155](https://github.com/netease-youdao/LobsterAI/pull/2155) | btc69m979y-dotcom | **fix(voice-input)** — 防止 cowork 实时 ASR 语音流重复触发 start 请求 |
| [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154) | liuzhq1986 | **fix(cowork)** — 手动停止流式回复后保留 model metadata，确保模型信息在停止后仍然正确显示 |
| [#2153](https://github.com/netease-youdao/LobsterAI/pull/2153) | liuzhq1986 | **fix(cowork)** — 修复 `lobsterai-server/...` 模型 refs 在 OpenClaw model normalization 过程中丢失的问题，确保同名包模型选择被保留 |

### 里程碑意义

本次 release 合并标志着 **Computer Use MVP 正式进入主线**，是 LobsterAI 从纯对话助手向"可操作计算机的 AI Agent"演进的关键节点。实时 ASR 语音、artifact 体系的完善（HTML/SVG 分享）也表明项目正在快速补齐多媒体交互和协作能力。

---

## 4. 社区热点

### Issue: [#1 — hit API error with OpenAI API Type](https://github.com/netease-youdao/LobsterAI/issues/1)

- **状态：** 已于 2026-06-12 关闭（创建日期 2026-02-19，已活跃约 4 个月）
- **评论：** 7 条
- **热度：** 👍 0（该 Issue 本身无点赞，但持续吸引用户回复）
- **内容分析：** 用户在 Mac 上配置 MiniMax API Key 测试通过后，切换到 OpenAI 消息类型时收到 400 错误，提示 `invalid params`。7 条讨论中积累了对 OpenAI 兼容模式参数校验问题的反复排查。Issue 在 4 个月后关闭，可能在某次 release 修复中被解决。
- **背后诉求：** 用户对 **多模型/多供应商 API 兼容性** 高度敏感，期望能够无缝切换不同 provider 而不产生格式错误。

### 遗留待合并 PR：用户配置保护系列

5 个 stale 状态但 PR 创建日期仅为 2026-04-03 的修复 PR（#1446、#1448、#1449、#1453、#1454）在 2026-06-12 仍有更新活动但被标记 stale，说明社区贡献活跃但维护者审查存在积压。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重（影响核心功能可用性）

| 问题 | 状态 | Fix PR |
|---|---|---|
| **OpenClaw 网关反复启动失败导致无限重启循环**（4.1 版本升级后，进程崩溃与 `waitForGatewayReady` 竞态条件导致应用瘫痪） | 待合并 | [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446)（stale，已定位根本原因，含两处竞态修复） |
| **已停用技能仍被注入对话提示词**（用户关闭技能后仍可被调用） | 待合并 | [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453)（stale，已定位 `toggleSkill` reducer 的三处漏洞） |

### 🟡 中严重（功能异常但有 workaround）

| 问题 | 状态 | Fix PR |
|---|---|---|
| **定时任务记录平铺堆积**：同名任务多次执行后侧栏会话列表混乱 | 待合并 | [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449)（stale，已实现折叠分组展示方案） |
| **定时任务「不重复」模式清空日期后点击创建无响应**（无声失败） | 待合并 | [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454)（stale，已定位三处缺陷叠加根因） |
| **快捷键设置缺少重复检测**（用户可为不同功能绑定相同快捷键，无冲突提示） | 待合并 | [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456)（stale，方案完整） |
| **Agent 设置页面删除按钮及技能选择器显示英文**（i18n 缺失） | 待合并 | [#1448](https://github.com/netease-youdao/LobsterAI/pull/1448)（stale，已新增 i18n key） |

### 🟢 低严重（已修复并合并）

| 问题 | 修复 PR |
|---|---|
| 流式回复停止后 model metadata 丢失 | [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154) ✅ |
| Computer Use runtime 辅助进程意外退出诊断困难 | [#2156](https://github.com/netease-youdao/LobsterAI/pull/2156) ✅ |
| 文生图保存扩展名错误（PNG 内容存为 .jpg） | [#2157](https://github.com/netease-youdao/LobsterAI/pull/2157) ✅ |
| ASR 语音流重复触发 start | [#2155](https://github.com/netease-youdao/LobsterAI/pull/2155) ✅ |
| OpenAI API Type 下 400 参数错误 | Issue [#1](https://github.com/netease-youdao/LobsterAI/issues/1) 已关闭 ✅ |

---

## 6. 功能请求与路线图信号

从 PR 标签和内容提炼出的功能方向：

| 功能方向 | 信号来源 | 判断 |
|---|---|---|
| **Computer Use Agent 能力** | PR #2158（MVP 合并）、#2156（runtime 1.0.7 升级） | ✅ 已进入主线，是当前版本核心方向 |
| **实时语音交互（ASR）** | PR #2155（合并）、#2158（功能列表提及） | ✅ 主线已有，正在快速修复稳定性 |
| **Artifact 协作体系**（HTML 公开分享、SVG 分享） | PR #2158 | ✅ 主线已有 |
| **定时任务执行记录分组展示** | PR #1449（stale） | ⏳ 方案已就绪，待 review |
| **配置防丢失保护** | PR #1473~#1477（均已合并） | ✅ 今日合入，覆盖 Agent/MCP/会话多个场景 |

**综合判断：** 下一版本的重点是 **Computer Use 能力打磨和 stability fix**，而定时任务 UX 改进、快捷键冲突检测等社区 PR 由于处于 stale 状态，可能被纳入再下一个版本周期。

---

## 7. 用户反馈摘要

### 痛点

1. **多模型切换兼容性不足**（Issue #1）：配置 MiniMax API 后切换到 OpenAI 消息类型产生 400 错误，用户无法无缝跨 provider 使用。
2. **配置静默丢失**：用户反复报告创建 Agent、编辑配置、切换会话时内容无声丢失。这些反馈已催生 PR #1473~#1477 的批量修复，说明该痛点面广、频次高。
3. **定时任务管理混乱**（PR #1449）：任务执行记录在侧栏不断堆积，严重影响会话查找体验。
4. **4.1 升级导致网关循环崩溃**（PR #1446）：版本升级直接导致应用不可用，属于高影响回归。

### 满意方向
- Computer Use MVP 的引入表明用户对"让 AI 直接操作电脑"有较高期待。
- ASR 语音输入功能的快速迭代（新功能合入 + 同日修复稳定性）说明团队响应速度较快。

---

## 8. 待处理积压

以下 PR 自 2026-04-03 创建后至今（已超 **10 周**），均被标记 `stale`，但涉及核心功能修复，建议维护者优先审查：

| PR | 内容摘要 | 创建日期 | 当前状态 |
|---|---|---|---|
| [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) | 修复 OpenClaw 网关无限重启循环（高影响回归） | 2026-04-03 | stale / OPEN |
| [#1448](https://github.com/netease-youdao/LobsterAI/pull/1448) | i18n 修复：Agent 设置页删除按钮英文 | 2026-04-03 | stale / OPEN |
| [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | 定时任务执行记录折叠分组展示 | 2026-04-03 | stale / OPEN |
| [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453) | 修复已停用技能仍被注入提示词 | 2026-04-03 | stale / OPEN |
| [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) | 修复不重复定时任务清空日期后创建无响应 | 2026-04-03 | stale / OPEN |
| [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) | 快捷键设置增加重复检测 | 2026-04-03 | stale / OPEN |

> ⚠️ **特别提醒：** PR #1446（网关无限重启）关联 4.1 版本升级回归，影响用户面广，建议作为最高优先级处理。

---

*数据来源：GitHub netease-youdao/LobsterAI | 报告生成时间：2026-06-13*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-13

---

## 1. 今日速览

Moltis 今日整体处于低活跃维护状态。过去 24 小时内共产生 **3 条 Issue 活动**和 **1 条新 PR**，无新版本发布，无 PR 合并或关闭。新增内容覆盖 WhatsApp 网关权限修复、Kubernetes 沙箱后端提案、以及本地方语音识别引擎需求，显示社区仍在持续探索 Moltis 在通讯集成与运行时隔离方面的边界。项目节奏偏向小步迭代，无紧急发布压力。

---

## 2. 版本发布

> 无新版本发布，本节省略。

---

## 3. 项目进展

**无 PR 在过去 24 小时内被合并或关闭。**

唯一活跃 PR #1116 处于待合并状态（见下文 Bug 与稳定性节）。整体项目本周无实质性代码合入进展。

---

## 4. 社区热点

**Issue #1118 — 新增 Kubernetes 原生沙箱后端（含 `runtimeClassName` 支持）**
moltis-org/moltis/issues/1118 | 作者：@AzgadAGZ

该 Issue 是目前最具战略意义的社区诉求。提案要求新增 `kubernetes` 沙箱后端，利用临时 Kubernetes Pod 执行 Agent 生成的不可信命令，并通过 `runtimeClassName` 支持 Kata Containers、gVisor 等 VM 级隔离运行时。**核心驱动力**：Moltis Agent 当前直接执行 LLM 生成的代码/命令，在生产部署中缺乏足够的安全边界。此需求反映了企业级用户对多租户安全隔离的强烈诉求，若能落地将显著拓宽 Moltis 在云原生场景的适用性。

**Issue #1115 — Fastmail MCP 授权流程崩溃**
moltis-org/moltis/issues/1115 | 作者：@kmath313 | 2 条评论

Fastmail 用户通过 MCP（Model Context Protocol）桥接 Moltis 时遭遇授权失败。属于**平台集成兼容性**问题，回复量虽不高但代表了一个真实使用场景的阻断。

**Issue #1102 — 集成 FunASR/SenseVoice 作为本地 STT 引擎**
moltis-org/moltis/issues/1102 | 作者：@LauraGPT | 自 06-04 起持续关注

用户提议引入阿里达摩院开源的 FunASR / SenseVoice 作为本地语音转文字引擎，理由是超低延迟（10 秒音频约 70ms）与原生流式支持（Paraformer-streaming）。该诉求面对的用户群体为**注重低延迟与数据隐私的语音助手使用者**，与 Moltis 作为个人 AI 助手的定位契合。

**PR #1116 — 修复 WhatsApp @lid 聊天回复投递**
moltis-org/moltis/pull/1116 | 作者：@juanlotito

修复 WhatsApp Gateway 中对隐私启用（@lid）Sender 的回复静默丢失问题。技术根因是回复路由未正确执行 PN JID 重写，导致消息虽由 Agent 生成并在 Web UI 可见，但永远不会到达用户端的 WhatsApp 聊天，且无任何 Delivered 回执。详情见下节。

---

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#1115](https://github.com/moltis-org/moltis/issues/1115) | **Fastmail MCP 授权流程异常** — 用户通过 MCP 桥接 Fastmail 时认证流程中断，无法正常使用邮箱集成功能 | Open，无 fix PR |

**Issue #1115** 是当日唯一被标记为 `bug` 的 Issue，且用户已确认使用最新版本并检索过历史 Issue 库，说明这是一个**回归问题或新发现的边界场景**。当前尚无 PR 介入修复，需要维护者介入排查 MCP OAuth 授权链路与 Fastmail 服务端的兼容性。

> 注：PR #1116 修复的 WhatsApp回复丢失问题虽属高影响 Bug，但尚无对应 Issue 编号，暂不列入此表。

---

## 6. 功能请求与路线图信号

| 来源 | 方向 | 信号强度 | 预估落地可能性 |
|---|---|---|---|
| [#1118](https://github.com/moltis-org/moltis/issues/1118) | Kubernetes 沙箱后端 + VM 级隔离 | ⭐⭐⭐⭐ 需求明确，设计完整 | 中等 — 架构改动较大，但若已有沙箱抽象层则可行性较高 |
| [#1102](https://github.com/moltis-org/moltis/issues/1102) | 本地化 STT 引擎（FunASR/SenseVoice） | ⭐⭐⭐️ 社区呼声持续一周 | 高 — 属于模块化插件扩展，侵入性低，已有成熟开源实现 |

**综合判断**：Moltis 当前有两条清晰的功能演进路径——**安全运行时（沙箱化）** 与 **本地化语音能力**。前者面向企业/多租户场景落地，后者面向注重隐私的个人用户。若维护团队精力有限，STT 引擎集成的性价比更高、交付周期更短。Kubernetes 沙箱后端可以作为下一个大版本（minor release）的核心 feature 来推进。

---

## 7. 用户反馈摘要

从今日活跃的 Issue 与使用场景中提炼出以下核心痛点与满意信号：

- 🔧 **通讯集成的可靠性堪忧**：WhatsApp Gateway 的 @lid 回复丢失（PR #1116）和 Fastmail MCP 授权失败（#1115）集中暴露了**第三方平台集成的认证与路由链路脆弱**。随着 Moltis 扩展更多 MCP 桥接与通讯渠道，系统性的集成测试覆盖亟需加强。

- 🔒 **安全隔离是第一级诉求**：Issue #1118 的作者明确指出了"执行 LLM 生成的不可信命令"这一根本性安全风险，说明已有用户将 Moltis 用于**非交互式、自动化任务场景**，本地命令行执行模式已不能满足需求。

- 🎙️ **低延迟语音交互存在真实需求**：FunASR/SenseVoice Issue（#1102）获得持续关注，用户关注的具体指标（70ms、流式）表明这不是概念性请求，而是**已有具体部署预期的工程需求**。用户对 Moltis 作为"语音助手"的定位存在期待。

- 😐 **满意度暂未在 Issue 评论中直接体现**，但 Issue #1102 开头"Great voice assistant project!" 反映用户对项目整体的认可度较好。

---

## 8. 待处理积压

以下 Issue 长期未响应或处于停滞状态，提醒维护者关注：

| 条目 | 创建日期 | 搁置天数 | 建议优先级 |
|---|---|---|---|
| [#1102](https://github.com/moltis-org/moltis/issues/1102) Add FunASR/SenseVoice as local STT engine | 2026-06-04 | 9 天 | 🟡 中 — 良好的 first-contributor机会，可标注 `good first issue` |
| [#1115](https://github.com/moltis-org/moltis/issues/1115) Fastmail MCP Authorisation | 2026-06-11 | 2 天 | 🔴 高 — 已影响用户正常使用，需尽快回复排查方向 |
| [#1116](https://github.com/moltis-org/moltis/pull/1116) WhatsApp @lid 回复修复 PR | 2026-06-12 | 1 天 | 🔴 高 — Bug fix PR，审阅成本较低，建议尽快合并 |
| [#1118](https://github.com/moltis-org/moltis/issues/1118) Kubernetes sandbox backend | 2026-06-12 | 1 天 | 🟢 低 — 大型 feature，需设计评审，可安排在未来里程碑规划中 |

> **本周关注建议**：优先 review & merge PR #1116（WhatsApp Bug 修复），回复 Issue #1115 给用户一个明确的排查方向，并将 Issue #1102 标记为 `help wanted` 吸引社区贡献。

---

*数据来源：github.com/moltis-org/moltis | 统计周期：2026-06-12 至 2026-06-13*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-13

---

## 1. 今日速览

过去24小时内，CoPaw 社区活跃度较高：共处理 **23 条 Issues**（新开/活跃 16 条，已关闭 7 条）和 **27 条 PRs**（待合并 16 条，已合并/关闭 11 条），无新版本发布，但有多项 beta 版本号准备工作正在推进中。项目整体处于积极迭代期，大量 bug 报告和修复工作形成闭环，同时基础设施层面的重大架构升级（Runtime 2.0、AgentScope 2.0 迁移）持续讨论中。社区反馈集中在稳定性问题（宕机、内存泄漏、死循环）和 UI 渲染缺陷（数学公式、附件下载），反应出当前 v1.1.11.x 版本存在多个回归问题亟待解决。

---

## 2. 版本发布

**无正式版本发布。**

但值得注意的是，维护者已通过两项版本号 PR 推进了下个版本的准备工作：
- **PR #5159** `[CLOSED]` — 将版本号从 `1.1.12.beta1` 修正为 `1.1.12b1`（格式规范）
- **PR #5157** `[CLOSED]` — 将版本号从当前主线提升至 `1.1.12.beta1`

这表明 **v1.1.12b1** 即将进入发布通道，主要补丁内容已陆续合并到 main 分支。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 作者 | 说明 | 影响 |
|---|---|---|---|
| [#5154](https://github.com/agentscope-ai/QwenPaw/pull/5154) | zhaozhuang521 | **修复记忆搜索工具结果样式渲染问题** | 修复 [#5098]，解决 `auto_memory_search` UI 表格中 `file` 列显示 `unknown`、搜索结果渲染异常的问题 |
| [#5144](https://github.com/agentscope-ai/QwenPaw/pull/5144) | zhaozhuang521 | **强制渲染 Collapse 面板防止记忆配置丢失** | 修复 [#5137]，通过添加 `forceRender: true` 确保未展开的表单卡片值能被正确读取并保存 |
| [#5147](https://github.com/agentscope-ai/QwenPaw/pull/5147) | zhaozhuang521 | **修复 Coding Mode 刷新后 Session 跳转问题** | 修复 [#5142]，新增统一 Session 路由工具函数 `sessionRoute.ts`，确保 `/coding/*` 路径下刷新页面后保持当前 Session |
| [#5121](https://github.com/agentscope-ai/QwenPaw/pull/5121) | yutai78786 | **CI 流水线增加发布验证门禁** | 在 build 与 publish 之间加入安装、启动、健康检查的端到端验证，防止有缺陷的构建产物进入 PyPI/DockerHub |
| [#5022](https://github.com/agentscope-ai/QwenPaw/pull/5022) | jinglinpeng | **防护 Agent workspace 恢复目标路径** | 防止 Agent workspace 被意外放置进 QwenPaw 管理目录（plugins、secrets、backups 等），消除安全风险 |
| [#4144](https://github.com/agentscope-ai/QwenPaw/pull/4144) | jinglinpeng | **修复 `0.0.0.0` 绑定时 desktop readiness check** | 解决 Windows 上 `--host 0.0.0.0` 启动后 readiness check 因 TCP 连接目标无效而失败的问题 |

### 🔧 待审查的重要 PR

| PR | 作者 | 说明 | 进展 |
|---|---|---|---|
| [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | xiaoming-qxm | **Agent OS Driver — 统一外部能力调用抽象层（MCP/A2A/ACP）** | Under Review，基础设施重大变更 |
| [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | XiuShenAl | **Runtime 2.0 模块化架构 + ToolCoordinator** | 破坏性变更，将 monolithic `Runner` 拆分为可组合单元 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | EliasMei | **DataPaw 数据分析插件（12 项 BI 技能）** | 首次贡献者，标准插件结构，功能较完整 |
| [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) | weidankong | **治理与沙箱接口设计讨论** | 架构探索性 PR |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | wangfei010313 | **解耦插件加载器与 Agent 启动流程** | 修复冻结环境（PyInstaller/Tauri）中插件系统无法初始化的关键问题 |
| [#5160](https://github.com/agentscope-ai/QwenPaw/pull/5160) | hongxicheng | **Yuanbao 频道引用消息支持 + 媒体下载管道统一** | 修复附件下载缺陷、消除死代码 |
| [#5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) | yuanxs21 | **每轮 Token 用量和上下文用量弹出面板** | 新增 Console 端可观测性功能 |
| [#5069](https://github.com/agentscope-ai/QwenPaw/pull/5069) | yuanxs21 | **主模型为纯文本时可选视觉模型兜底** | 在 formatter 层转写图片/视频为文字描述 |

**项目整体向前推进：**预计在 v1.1.12b1 中，将包含一批针对 v1.1.11.x 回归问题的修复（记忆配置保存、Coding Mode Session 保持、桌面进程优化、CI 发布门禁），同时 Yuanbao 频道功能对齐微信/钉钉，DataPaw 插件有望成为首批 bundle 插件之一。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**1. [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) — Agent 生成的定时任务无法正常触发（11 条评论）**

这是今日评论最多的 Issue。用户 @tina0501853 报告在 v1.1.10 中，Agent 创建的定时任务流程执行无异常、系统正常生成并展示任务，但到达设定时间后无法自动触发执行，且该类任务不支持手动编辑。11 条评论表明这是严重的功能性阻断问题，目前仍 **OPEN** 且未分配修复 PR。

**2. [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — 后端从 AgentScope 1.x 迁移至 AgentScope 2.0（10 条评论，👍2）**

这是一个标记为 Breaking Change 的架构级提案。维护者 @rayrayraykk 主动提出，描述详尽（含 PR 拆分计划、测试计划），AgentScope 2.0 已正式发布，迁移将采用新的架构、API 和运行时模型。10 条评论中包含架构讨论和兼容性考量，获得 2 个👍，属于高优先级 Roadmap 议题。

**3. [#5149](https://github.com/agentscope-ai/QwenPaw/issues/5149) — 何时升级到 AgentScope 2.0（已关闭，3 条评论）**

作为 [#4727] 的追随者被关闭，说明社区对此迁移时间线高度关注。

### 🔥 今日新增高关注 PR

- **PR #5067** Agent OS Driver — 为 MCP/A2A/ACP 提供统一抽象，是平台能力扩展的基础设施，建议重点审查。
- **PR #5078** Runtime 2.0 — 与 Issue #4727 相呼应，可能是后端迁移的配套前端改造。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（影响核心功能 / 数据安全）

| 问题 | Issue | 版本 | 状态 | Fix PR |
|---|---|---|---|---|
| Windows 客户端进程持续增加，内存占用 90%+ | [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) | v1.1.11.post2 | OPEN | 无 |
| 升级到 v1.1.11 后 Docker 环境不定期宕机重启 | [#5155](https://github.com/agentscope-ai/QwenPaw/issues/5155) | v1.1.11 | OPEN | 无 |
| Agent 生成的定时任务无法触发，不支持手动编辑 | [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | v1.1.10 | OPEN | 无 |
| 对话思考逻辑进入死循环 | [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | 未标注 | OPEN | 无 |
| 长对话后 QwenPaw 无响应 | [#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161) | 未标注 | OPEN | 无 |
| v1.1.11 → v1.1.11.post2 回归：Gemini tool calling 失效 | [#5163](https://github.com/agentscope-ai/QwenPaw/issues/5163) | v1.1.11.post2 | OPEN | 无 |

### 🟡 中等（特定场景下功能异常）

| 问题 | Issue | 版本 | 状态 | Fix PR |
|---|---|---|---|---|
| docx/pdf 附件下载 404 | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | v1.1.11.post2 | OPEN | 无 |
| Python 3.13 安装 TeamChat 插件失败（`No module named 'imghdr'`） | [#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166) | 未标注 | OPEN | 无 |
| 打包安装后白屏（spec 引用不存在模块） | [#5165](https://github.com/agentscope-ai/QwenPaw/issues/5165) | 未标注 | OPEN | 无 |
| Langfuse traces 在单次 ReAct loop 中碎片化 | [#5127](https://github.com/agentscope-ai/QwenPaw/issues/5127) | 未标注 | OPEN | 无 |
| 模型参数 `enable_thinking: false` 不生效 | [#5132](https://github.com/agentscope-ai/QwenPaw/issues/5132) | 未标注 | **CLOSED** | 无（可能已有解答） |

### 🟢 已修复 / 已关闭

| 问题 | Issue | 修复 PR |
|---|---|---|
| 记忆搜索配置保存丢失 | [#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137) | [#5144](https://github.com/agentscope-ai/QwenPaw/pull/5144) ✅ |
| 记忆搜索结果 UI 为空/错误 | [#5098](https://github.com/agentscope-ai/QwenPaw/issues/5098) | [#5154](https://github.com/agentscope-ai/QwenPaw/pull/5144) ✅ |
| 网页 UI 数学公式根号显示错误 | [#5143](https://github.com/agentscope-ai/QwenPaw/issues/5143) & [#5148](https://github.com/agentscope-ai/QwenPaw/issues/5148) | **已关闭** ✅ |
| Coding Mode 刷新后 Session 跳回第一个 | [#5142](https://github.com/agentscope-ai/QwenPaw/issues/5142) | [#5147](https://github.com/agentscope-ai/QwenPaw/pull/5147) ✅ |

**稳定性评估：** v1.1.11 系列引入了较多回归问题（宕机、附件下载、Gemini tool calling、内存泄漏），建议维护者在 v1.1.12b1 发布前优先处理上述红色级别 bug。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 信号强度 | 对应 PR | 预估纳入版本 |
|---|---|---|---|---|
| 支持 kimi-for-coding / 加入 uv 白名单 | [#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) | 中（3 评论） | 无 | 待排期 |
| Agent Team / Swarm 协作能力（类 WorkBuddy Expert Team） | [#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) | 中（3 评论） | 无 | 中长期 |
| 桌面版系统托盘 / 开机自启 / 后台常驻 | [#5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) | 低（2 评论） | 无 | 待排期 |
| Slack 频道支持 | [#5152](https://github.com/agentscope-ai/QwenPaw/issues/5152) | 低（1 评论） | 无 | 待排期 |
| 执行详情默认折叠 | [#5145](https://github.com/agentscope-ai/QwenPaw/issues/5145) | 低（1 评论） | 无 | 待排期 |
| 后端迁移至 AgentScope 2.0 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | **高（10 评论，👍2）** | 无 | Roadmap 核心任务 |
| Agent OS Driver 统一抽象 | — | **高** | [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) | Roadmap 核心任务 |
| Runtime 2.0 模块化架构 | — | **高** | [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) | Roadmap 核心任务 |

**路线图判断：**
- **短期（v1.1.12x）：** 回归修复 + 插件加载器解耦 + Yuanbao 功能对齐 + DataPaw 插件预览
- **中期（v1.2.x）：** Agent OS Driver + Runtime 2.0 + AgentScope 2.0 后段迁移
- **长期：** Agent Team/Swarm、多频道扩展（Slack）、桌面体验完善

---

## 7. 用户反馈摘要

**痛点：**
1. **定时任务功能不可用** — Agent 创建的任务到点不触发、无法手动编辑，核心功能形同虚设 [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)
2. **内存泄漏严重** — Windows 端打开后进程持续增长，内存飙至 90%+ [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138)
3. **附件下载体验差** — 纯文本可以，但 docx/pdf 直接 404，影响实际工作场景 [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)
4. **长对话工具体验差** — 对话轮数多后出现死循环 [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) 或无响应 [#5161](https://github.com/agentscope-ai/QwenPaw/issues/5161)，影响重度用户
5. **Python 3.13 兼容性问题** — `imghdr` 模块已在 Python 3.13 中移除，插件安装直接报错 [#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166)
6. **模型配置不透明** — `enable_thinking: false` 配置不生效，用户不清楚是配置方式问题还是 Bug [#5132](https://github.com/agentscope-ai/QwenPaw/issues/5132)

**满意/正面信号：**
- 社区对 AgentScope 2.0 迁移讨论积极，说明对新架构期待度高 [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)
- PR 活跃度高（27 条），多位首次贡献者参与（DataPaw、Agent OS Driver），社区生态健康
- 多个 UI Bug 在当天即被快速修复并关闭，维护者响应速度较好

---

## 8. 待处理积压

### 长期未响应的重要 Issues

| Issue | 标题 | 创建距今 | 状态 | 优先级 |
|---|---|---|---|---|
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | Agent 定时任务无法触发 | 3 天 | OPEN，无修复 | **高** — 阻断核心功能 |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | docx/pdf 附件下载 404 | 1 天 | OPEN，无修复 | **高** — 文件管理基础功能 |
| [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) | Windows 内存泄漏 | 1 天 | OPEN，无修复 | **高** — 系统稳定性 |
| [#5163](https://github.com/agentscope-ai/QwenPaw/issues/5163) | Gemini tool calling 回归 | 1 天 | OPEN，无修复 | **高** — 模型兼容性 |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | AgentScope 2.0 迁移 | 17 天 | OPEN，讨论中 | **中** — Roadmap 级别，需排期 |
| [#5127](https://github.com/agentscope-ai/QwenPaw/issues/5127) | Langfuse traces 碎片化 | 2 天 | OPEN，无修复 | **低** — 可观测性增强 |

### 长期未审查的重要 PRs

| PR | 标题 | 创建距今 | 状态 |
|---|---|---|---|
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | 解耦插件加载器与 Agent 启动（修复冻结环境） | 11 天 | OPEN |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | DataPaw 数据分析插件 | 22 天 | OPEN |

**提醒：** PR #4900 涉及冻结环境（桌面端打包）的关键缺陷修复，已开放 11 天未获审查，建议尽快安排。PR #4622 DataPaw 插件已存在 22 天，作为潜在的 bundle 插件候选，审查进度影响社区贡献者积极性。

---

> 📊 **项目健康度评分：7/10** — 社区活跃、bug 修复及时率良好，但 v1.1.11 回归问题较多且部分严重 bug（内存泄漏、定时任务、Gemini 兼容性）尚未分配修复，建议 v1.1.12 前集中清理。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 · 2026-06-13

---

## 1. 今日速览

ZeroClaw 今日处于高活跃开发期。过去 24 小时内共产生 **14 条 Issue 更新**（11 条新开/活跃、3 条关闭）和 **35 条 PR 更新**（31 条待合并、4 条合并/关闭），无新版本发布。项目正处于 v0.8.x 稳定化冲刺阶段，核心议题集中在：三个 Agent Turn 引擎的统一重构（RFC #7415 已进入实施）、MCP 工具发现与 risk_profile 的集成修复、多平台 CI/Docker 构建稳定性修补，以及 Gateway Web Dashboard 的多个可用性问题。整体 PR 积压较多（31 条待合并），维护者审查带宽是项目当前的主要瓶颈。

---

## 2. 版本发布

今日无新版本发布。当前版本轨迹：
- **v0.8.0** 发布队列仍在推进（Issue #7112 已关闭，相关 Stable-tier 阻塞项已清理）
- **v0.8.1** 跟踪器已活跃（Issue #6970），多项渠道/提供者/工具类 PR 正在排队

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

| PR/Issue | 内容 | 意义 |
|---|---|---|
| **PR #7545** [CLOSED] | fix(runtime): auto-include discovered MCP tools in risk_profile allowed_tools | 首次提交后被关闭，由 PR #7547 替代（见下方待合并） |
| **Issue #7263** [CLOSED] | Subagents do not inherit "cwd" in ACP sessions | ACP 子代理工作目录继承问题已确认修复，解除了 SubAgent 开发模式的阻塞 ✅ |
| **Issue #7112** [CLOSED] | v0.8.0 release queue tracker | v0.8.0 发布队列的阻塞项已被清理完毕，标志着 v0.8.0 稳定化工作进入收尾阶段 |
| **Issue #6443** [CLOSED] | Add Twitch chat channel (thin IRC adapter) | Twitch 聊天渠道功能需求已关闭，相关实现已完成合并 |

### 🔧 待合并的重要 PR（高优先级）

| PR | 标签 | 摘要 |
|---|---|---|
| **[PR #7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540)** | `[docs, agent, channel, gateway, runtime]` | **Implementing RFC #7415** — 将三个 Agent Turn 引擎（`run_tool_call_loop`、`turn_streamed`、`Agent::turn`）统一到单一 `run_tool_call_loop` 引擎上。这是一个高影响架构重构，消除引擎之间的行为不一致 |
| **[PR #7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547)** | `[risk: high, agent, runtime, tool]` | **MCP 工具自动注入 risk_profile** — 修复 #7464 将 `mcp.enabled` 默认开启后，已发现的 MCP 工具不会自动出现在 `risk_profile.allowed_tools` 中的问题，影响所有使用 MCP 的用户 |
| **[PR #7549](https://github.com/zeroclaw-labs/zeroclaw/pull/7549)** | `[core, config, gateway, runtime, skills]` | **插件安装/发现路径对齐** — 修复 `zeroclaw plugin install` 写入目录与运行时期望扫描目录不一致导致 CLI 安装 WASM 插件不可见的核心 bug |
| **[PR #7548](https://github.com/zeroclaw-labs/zeroclaw/pull/7548)** | 覆盖 30+ 标签 | **Cargo Chore 清理** — 涉及 CI、依赖、文档的全量大范围维护清理 |
| **[PR #7544](https://github.com/zeroclaw-labs/zeroclaw/pull/7544)** | `[doctor, runtime]` | **Doctor 检查多代理感知** — 修复 workspace doctor 在 0.8+ 多代理配置下检查 `SOUL.md`/`AGENT.md` 路径错误的问题 |
| **[PR #7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534)** | `[docker, bug]` | **Docker 构建修复** — 添加 `g++` 到 web 构建层，修复 `cc-rs` C++ 检测失败 |
| **[PR #7530](https://github.com/zeroclaw-labs/zeroclaw/pull/7530)** | `[update, bug]` | **Windows 自更新修复** — 支持 `.zip` 格式发布资产，修复 Windows 上 `zeroclaw update` 无法自更新 |
| **[PR #7429](https://github.com/zeroclaw-labs/zeroclaw/pull/7429)** | `[runtime:wasm, risk: high]` | **Wasmtime 依赖引入** — 为最终弃用 Extism 做准备，添加 wasmtime 43 直接依赖 |

### 整体进展评估

项目正向三大方向推进：
1. **架构简化** — Turn 引擎统一（#7540/#7415）是本周期内最高价值的技术债清偿
2. **MCP 生态整合** — 从默认启用（#7464）到工具可见性修复（#7547），MCP 集成正在变得开箱即用
3. **v0.8.x 稳定化** — Docker 构建、Windows 更新、Doctor 检查等多平台稳定性补丁密集合并

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

**[Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** — RFC: Unify the three agent turn engines
- **评论 3 条** | 👍 0
- 这是本周期内最具架构重要性的讨论。RFC 已由维护者批准以**单次整合 PR**（而非分阶段迁移）方式执行，对应的实现 PR #7540 已经提交。社区讨论集中在合并阶段的边界条件验证上
- **诉求**：消除三个引擎长期并行导致的行为分歧（gateway WS 会话 vs cron/SubAgent 提示词差异、compaction 逻辑不一致等），降低维护成本

### 📊 反馈密度最高的功能区域

**[Issue #7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)** — `ask_user` 在 Web Dashboard 中立即失败
**[Issue #7541](https://github.com/zeroclaw-labs/zeroclaw/issues/7541)** — V3 遗留路径 workspace_dir 误用
**[Issue #7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523)** — Web Dashboard 不可用

这三个同日报告的 Issue 集中暴露了 **Gateway Web Dashboard 是当前用户体验最脆弱的模块** — `ask_user` 交互中断、legacy 路径数据隔离失效、以及前端构建产物未正确分发。这表明 v0.8.0 的架构迁移（#6398 schema 重命名）在前端层存在未完全覆盖的遗留兼容问题。

---

## 5. Bug 与稳定性

### 🔴 S1 — Workflow Blocked

| Issue | 组件 | 描述 | Fix PR |
|---|---|---|---|
| **[#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)** | gateway/api | `ask_user` 在 Web Dashboard 中报 "Channel closed before receiving a response" | 🔜 无（新报） |
| **[#7537](https://github.com/zeroclaw-labs/zeroclaw/issues/7537)** | runtime/daemon | Windows 10 上 `zeroclaw quickstart` 报 "no map-keyed/list section at peer-groups" | 🔜 无（新报） |
| **[#7533](https://github.com/zeroclaw-labs/zeroclaw/issues/7533)** | docker | Docker 构建因缺少 `g++` 失败 | ✅ PR #7534 |
| **[#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)** | runtime/daemon | macOS 15.7.7 上 App 无法检测权限、窗口消失 | 🔜 无（新报） |
| **[#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523)** | web dashboard | Web Dashboard 无法访问（前端未构建） | ✅ PR #7529 |

### 🟡 S2 — Degraded Behavior

| Issue | 组件 | 描述 | Fix PR |
|---|---|---|---|
| **[#7541](https://github.com/zeroclaw-labs/zeroclaw/issues/7541)** | gateway/api | legacy V3 路径 `data_dir` 被用作 `workspace_dir` | 🔜 无（新报） |

### ✅ 已修复（CLOSED）

| Issue | 描述 |
|---|---|
| **[#7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)** | Subagents 未继承 ACP sessions 中的 "cwd" |
| **[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)** | v0.8.0 Stable-tier 阻塞项已全部解决 |

### 风险评估

**Gateway Web Dashboard 的可靠性是当前最大的稳定性风险点**，集中了 3 个 S1/S2 问题，且部分尚无修复 PR。建议维护者将 `#7542`（`ask_user` WebSocket 生命周期管理）作为最高优先级处理，因为它直接阻断了通过 Web 界面进行人机交互式工作流的用户。

---

## 6. 功能请求与路线图信号

### 新功能请求（按潜在纳入概率排序）

| Issue | 功能 | 评估 |
|---|---|---|
| **[#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)** | Gateway Web Chat 多会话支持（新建/切换/重命名/删除） | **高概率** — 与 #7542 同属 Web Chat 体验改进，社区呼声集中，且架构上已有 gateway WS session 基础 |
| **[#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531)** | QQ/钉钉/微信/飞书流式卡片消息支持 | **中高概率** — 已有 WhatsApp PR 活跃，渠道扩展模式成熟，但需要逐个实现 |
| **[#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)** | llama.cpp 模型路由（快速切换模型） | **中概率** — 本地模型用户增长中，但需评估与现有 provider 架构的整合复杂度 |
| **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** | v0.8.1 整合/渠道/提供者 PR 队列跟踪器 | **活跃中** — #7536（WhatsApp 转发出媒体附件）、#7535（WhatsApp 表情回应）已在队列 |

### 下一版本预测

v0.8.1 很可能会聚焦于：
1. **Gateway Web Chat 完善** — 多会话 + `ask_user` 修复
2. **渠道能力补齐** — WhatsApp 媒体转发/表情反应、可能新增的流媒体卡片支持
3. **MCP 工具链畅通** — 插件安装路径对齐 + MCP 工具自动注入

---

## 7. 用户反馈摘要

### 😤 痛点

1. **"入门即受阻"** — 多位新用户报告 Windows quickstart 配置损坏（#7537）和 macOS 权限检测失败（#7527），首次体验摩擦严重。`cargo web build` 是推荐入口但文档不够醒目（#7523）
2. **Web 体验断裂** — `ask_user` 在 gateway Web 中从未成功过（#7542），dashboard 默认不可用（#7523），legacy 路径导致数据隔离问题（#7541）。Web 渠道是当前用户满意度的最大短板
3. **Docker 构建体验差** — 从零开始构建因缺少 C++ 编译器而失败（#7533），任何新用户尝试容器化部署都会撞墙
4. **Windows 生态二等公民** — `.zip` 资产不被识别（#7530）、`.tar.gz` 测试硬编码（#7528）、quickstart 配置 bug（#7537），Windows 用户面临的障碍明显多于 macOS/Linux

### 😊 满意信号

- ACP 子代理工作目录继承修复（#7263 关闭）说明 SubAgent 开发模式已被实际用户使用并推进到了可生产状态
- 社区自发提交了多个跨平台修复 PR（Windows 更新、Docker 构建、macOS Cmd-C 快捷键），说明用户参与度和归属感较强

### 典型使用场景浮现

从 Issue 中可识别出以下核心场景：
- **本地模型 + SubAgent 开发工作流** — 使用 llama.cpp 本地模型驱动子代理进行开发
- **多渠道路由** — 用户同时接入 Telegram、Discord、WhatsApp、Web Chat 等多路渠道
- **Web 轻量交互** — 希望通过 Web Dashboard 快速与 agent 对话，而非仅在 CLI 中操作

---

## 8. 待处理积压

### ⏳ 长期未响应的重要 Issue

| Issue | 创建日期 | 等待天数 | 重要性 | 建议动作 |
|---|---|---|---|---|
| **[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** (v0.8.1 Tracker) | 2026-05-27 | 17 天 | 🔴 高 | 作为路线图协调中枢，需维护者进行一次全面状态梳理 |
| **[#6443](https://github.com/zerocaw-labs/zeroclaw/issues/6443)** (Twitch) | 2026-05-06 | 38 天 | 🟡 中 | 已关闭，Twitch 渠道合并完成 ✅ |

### ⏳ 长期开放的重要 PR

| PR | 创建日期 | 等待天数 | 重要性 | 建议动作 |
|---|---|---|---|---|
| **[#7429](https://github.com/zeroclaw-labs/zerocaw-labs/zeroclaw/pull/7429)** (Wasmtime 依赖) | 2026-06-09 | 4 天 | 🔴 高 | 高影响架构变更，需尽快审查或给出方向性反馈，但可能需等待 turn engine 重构 #7540 合并后再合并 |
| **[#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842)** (NEAR AI Cloud Provider) | 2026-05-21 | 23 天 | 🟡 中 | 已开放 23 天，属新增 provider 类型，维护者需给出是否接受的明确信号 |

---

> **维护者行动建议（优先级排序）**
> 1. 立即审查并推进 **PR #7540**（Turn 引擎统一）— 这是解锁后续多个 PR 合并的前提
> 2. 对 **Issue #7542**（`ask_user` WebSocket 失败）进行分类并指派修复 — Web 渠道可用性的最关键阻塞
> 3. 对 **PR #6842**（NEAR AI Provider）给出明确接受/拒绝信号 — 23 天等待已超过合理响应时间
> 4. 合并低风险的构建修复 PR（#7534 Docker、#7530 Windows 自更新、#7529 Dashboard URL 打印），释放 CI/CD 流水线堵塞

---

*数据来源: github.com/zeroclaw-labs/zeroclaw · 截至 2026-06-13*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*