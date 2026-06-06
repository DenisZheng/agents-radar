# OpenClaw 生态日报 2026-06-06

> Issues: 467 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-06 00:38 UTC

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

# OpenClaw 项目动态日报
**日期**: 2026-06-06 | **数据来源**: github.com/openclaw/openclaw

---

## 1. 今日速览

过去 24 小时 OpenClaw 社区呈现**极高活跃度**：Issues 更新 467 条（新开/活跃 340，已关闭 127），PR 更新 500 条（待合并 376，已合并/关闭 124），但**无新版本发布**。项目目前处于 2026.6.1 发布后的密集修复期——围绕该版本暴露的性能回退（高 CPU、Cron 数据丢失）、认证链路断裂（OpenAI gpt-5.4/5.5 content type 错误、Matrix 崩溃）等问题，社区和守护者（maintainer）集中火力产出了一批 fix PR。整体健康度**短期承压但响应迅速**：回归 bug 密度偏高，但积压的 important PR 推进节奏明显加快。

---

## 2. 版本发布

**过去 24 小时无新版本发布。**

根据 Issue 标签密度，项目近期处于多个发布 blocker 并行处理状态，下一修补版本（推测 2026.6.2）高度可能落地的修复集中在 §5 "Bug 与稳定性" 中已 fix 的回归问题。

---

## 3. 项目进展

### 已合并 / 已关闭的重要 PR

| PR | 方向 | 说明 |
|---|---|---|
| **[#90775] fix: refresh prompt fence after compaction writes** | 修复会话接管误报 | 当 OpenClaw 自动压缩写入 `compaction` session 条目后释放 prompt fence 时，避免被错误识别为外部 session takeover。核心 session 状态一致性修复。|
| **[#90785] Ignore Artifacts** | 工程维护 | 将 `.toon`, `.wav`, `.xlsx` 根目录产物加入 `.gitignore`，防止演练文件污染仓库。|
| **[#84252 关联] doctor/status 误报修复** [#84252 相关] | 认证诊断 | `openai-codex` OAuth 侧边通道修复但运行时仍失败的 CLI status 误报问题已关闭。|
| **[#45269 关联] apply_patch 被策略管道剥离** | 策略管道回归修复 | Agent tool-policy pipeline 将内置 `apply_patch` 工具从 allowlist 中错误移除的问题已关闭。|
| **[#90072 关联] Cron 静默被 SQLite 迁移清除** | 数据完整性 | 升级至 2026.6.1 时 Cron 作业（44/45 条）被静默抹除的重大数据丢失问题已关闭（应已有对应修复合并）。|
| **[#89554] continue_delegate batch fanout 状态码不透明** | 错误可见性 | batch 扇出超出 `maxChildrenPerAgent` 时返回 `status=forbidden` 但丢失 `result.error` 信息的问题已关闭。|
| **[#68113] Mattermost slash command 503 初始化竞速** | 通道兼容性 | v2026.4.15 起 Mattermost slash command 返回 503 "not yet initialized" 的回归已关闭。|
| **[#76562] 升级后高 CPU + 控制面 RPC 延迟** | 性能回退修复 | 从 2026.4.24 → 2026.4.29/2026.5.2 的严重性能回退（CPU 100% + RPC 延迟）已关闭。|
| **[#64752] Telegram reaction context 不触发 agent turn** | 通道行为修复 | Telegram 回复的 emoji 反应事件虽接收但未能触发 agent 新一轮回复的问题已关闭。|
| **[#70493] 隔离 session 缺少完整 Playwright 支持** | 隔离环境补全 | 子 agent 隔离 session 中 Playwright 不可用的问题已关闭。|
| **[#78016] Matrix 语音消息不生效** | 通道适配 | Matrix channel 语音消息 agent 无法识别的问题已关闭。|
| **[#75167] heartbeat poll 泄漏到 Telegram/Slack/Discord UI** | 多通道通道修复 | 内部心跳轮询信息泄漏到 Telegram、Slack、Discord 用户 DM 的问题已关闭。|

### 已就绪 / 推进中的高价值 PR

- **[#89040] perf: 避免 embedded_run bootstrap-context 中事件循环阻塞 14–22 秒** — P1，session-state/availability 合并风险标记，但已有充分的 proof 和 maintainer review 待进。解决高并发下消息丢失的根源问题。([链接](https://github.com/openclaw/openclaw/pull/89040))
- **[#85155] fix(agents): 避免模型别名引导触发不必要 provider swap** — P2 diamond lobster 评级，已 ready for maintainer look。([链接](https://github.com/openclaw/openclaw/pull/85155))
- **[#90788] feat: Chain-of-Thought 预飞行目标规划** — XL 级新特性 PR，为长运行目标添加结构化 CoT 预规划，关注未来 agent 可靠性。([链接](https://github.com/openclaw/openclaw/pull/90788))
- **[#90792] feat: 统一 Amazon AWS 服务插件（Polly TTS / Transcribe STT / Nova Sonic 语音）** — 新增 AWS AI 三件套集成，扩展语音交互能力。([链接](https://github.com/openclaw/openclaw/pull/90792))
- **[#85651] feat(continuation): 上下文压力感知的 continuation 信号** — 大规模重构 PR，为持久化 agent 引入 `continue_work/continue_delegate/request_compaction` 信号。如果合并，将是 agent 自治能力的关键里程碑。([链接](https://github.com/openclaw/openclaw/pull/85651))

---

## 4. 社区热点

### Top 高讨论量 Issues（按评论数排序）

1. **[#22438] feat: 分层 Bootstrap 文件加载实现渐进式上下文控制** — 评论 17
   最受关注的功能提案。主张按层级（全局/工作区/会话）按需加载 bootstrap 文件，为子 agent 和 cron 作业节省平均 ~3,500 个 token 的固定开销。这是上下文成本优化的长期诉求，与 [#14785] 工具 schema token 开销减少形成呼应。([链接](https://github.com/openclaw/openclaw/issues/22438))

2. **[#62505] Coding Agent 在 2026.4.2 之后完全停止工作** — 评论 14，👍1
   P1 回归 bug，用户的 coding agent 升级后停止一切实际工作，只输出模糊状态消息。典型的"用户生产力归零"级别问题，已 stale 但讨论仍在增长。需要 guardian 设定 clone-needed 标签。([链接](https://github.com/openclaw/openclaw/issues/62505))

3. **[#76562] 升级至 2026.4.29/2026.5.2 后高 CPU 和控制面 RPC 延迟** — 评论 13，👍5 → **已关闭**
   该 Issue 以最高点赞数成为过去 24 小时最具共鸣的痛点。反映升级后 Node 进程 CPU 100%、RPC 不稳定的严重回退。今日已关闭，说明维护者已交付修复。([链接](https://github.com/openclaw/openclaw/issues/76562))

4. **[#78308] Channel-mediated 审批机制触发 MCP 工具调用（consent envelope）** — 评论 12
   安全提案，要求 MCP 工具调用（写邮件、写 vault 等副作用操作）复用已有的 `/approve <id>` 审批通道。社区对 agent 安全边界的关切持续上升。([链接](https://github.com/openclaw/openclaw/issues/78308))

5. **[#90083] OpenAI ChatGPT Responses 传输对 gpt-5.4/gpt-5.5 报 invalid_provider_content_type** — 评论 12，👍3
   2026.6.1 版本新引入的 P1 回归。多个用户报告升级到 2026.6.1 后 OpenAI 模型彻底不可用，已有 PR [#90793] 尝试修复。([链接](https://github.com/openclaw/openclaw/issues/90083))

### Top 高互动 PR

- **[#90248] channel turn 投递和控制面可观测性增强** — P1 活跃度，将 turn 事件状态建模引入 Gateway，为故障诊断和性能归因提供基础设施。([链接](https://github.com/openclaw/openclaw/pull/90248))
- **[#85651] 上下文压力感知的 continuation 信号** — 本章 §3 所列，自治 agent 信号协议的 XL 合并。([链接](https://github.com/openclaw/openclaw/pull/85651))

---

## 5. Bug 与稳定性

### 🔴 Critical（P0 / 数据丢失 / 完全不可用）

| ID | 问题 | 👍 | 状态 | 关联 PR |
|---|---|---|---|---|
| [#90072] | **升级至 2026.6.1 时 SQLite 迁移静默抹除 44/45 个 Cron 作业** | 3 | 已关闭（fix 已合并） | 无独立 PR 号（已并入主修复） |
| [#62505] | **Coding Agent 升级后完全停止工作**；此前持续产出工作，现仅输出模糊状态 | 1 | 🔴 开放 | 无 |

### 🟠 High（P1 回归 / 认证断裂 / 消息丢失）

| ID | 问题 | 👍 | 状态 | 关联 PR |
|---|---|---|---|---|
| [#90083] | **OpenAI gpt-5.4/gpt-5.5 `invalid_provider_content_type`** — 2026.6.1 后彻底不可用 | 3 | 🔴 开放 | [#90793]（修复音频认证路由） |
| [#90093] | **openai-chatgpt-responses native replay 发送加密 reasoning 数据**，新会话第二轮即 fail 400 | 2 | 🔴 开放 | 无 |
| [#90325] | **Matrix channel v2026.6.1 crash** — `TypeError: Cannot read properties of undefined (reading 'run')` | 2 | 🔴 开放 | 无 |
| [#86215] | **Codex OAuth refresh 失败后 agent 被 wedge 数小时**，无告警、无 profile rotation | 1 | 🔴 开放 | 无 |
| [#77012] | **WebChat session JSONL 在每次 turn 后被覆盖**（5.2 回归，SessionManager 移除） | 1 | 🔴 开放 | 无 |
| [#78309相关 #76562] | **升级后高 CPU + 控制面 RPC 延迟** | 5 | ✅ 已关闭 | 已修复 |
| [#87756] | **Lobster workflow 通过 prompt 启动后 thumbs-up 时挂起** | 1 | 🔴 开放 | 无 |
| [#88929] | **Feishu streaming card 打字机效果异常 + 内容截断至最后一字** | 1 | 🔴 开放 | 无 |
| [#85030] | **MCP tools 未注入子 agent session** — sessions_spawn 忽略 bundle-mcp/allowlist 配置 | 3 | 🔴 开放 | 无 |
| [#85103] | **Model fallback chain 在 provider-wide 429 quota 耗尽时未触发** | 1 | 🔴 开放 | 无 |
| [#64810] | **Heartbeat/async 系统事件吞没 Telegram topic session 进行中的回复** | 1 | 🔴 开放 | 无 |
| [#62985] | **Telegram 多账户配置升级后报错 + 行为错乱** | 0 | 🔴 开放（stale） | 无 |

### 🟡 Medium（P2 体验退化）

| ID | 问题 | 👍 | 状态 |
|---|---|---|---|
| [#63101] | Feishu channel 配置升级 v4.5 → v4.8 后校验失败 | 1 | 🔴 开放（stale） |
| [#64267] | Agent 内部 thinking 过程泄露给用户（安全 + 体验） | 2 | 🔴 开放（stale） |
| [#90466] | memory-core dreaming 读取已删除的 `.jsonl.deleted.*` 会话文件 | 1 | 🔴 开放 |
| [#90711] | macOS launchd plist 重定向 stderr 到 /dev/null，隐藏所有错误 | 1 | 🔴 开放 |
| [#61005] | Android onboarding "Connect" 按钮在 operator 离线时不可用 | 5 | 🔴 开放（stale） |
| [#69572] | Feishu typing indicator 误用反应 API，应使用 Typing API | 0 | 🔴 开放（stale） |

**趋势观察**: 2026.6.1 版本带来了至少 3 个新的 P1 回归（OpenAI content type、Matrix crash、Cron wipe），**强烈建议运维暂缓自动升级**，待下一个修补版本发布后再迁移。stale P1 问题数量偏高（62505、63101、62985、61005 均 stale），建议维护者重新评估 staleness policy。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（已有活跃 PR 或足够社区支持）

| 请求 | Issue | 信号强度 | 预计落地 |
|---|---|---|---|
| **分层 Bootstrap 文件加载** | [#22438] | 💎 Diamond Lobster（17 评论，守护者标签充足） | 中 |
| **MCP 工具调用的审批通道（consent envelope）** | [#78308] | 🐚 Platinum Hermit（12 评论，安全评审标签） | 中 |
| **Per-agent memory-wiki 独立 vault** | [#63829] | 💎 Diamond Lobster，👍9（社区高度需求） | 中 |
| **Session 最大持续时间/令牌数硬限制** | [#64463] | 运行安全诉求，久期讨论 | 低-中 |
| **Discord 精细化访问控制（role 支持 + per-channel override）** | [#69748] | ✅ 已就绪 L-size PR 待审 | 高 |
| **continue_work/continue_delegate 上下文压力感知信号** | [#85651 设计文档] | XL PR 已在审 | 高 |
| **Chain-of-Thought 长运行目标预规划** | [#90788] | 新 PR，XL 级 | 高（如果概念验证通过） |
| **Amazon AWS 统一集成** | [#90792] | 新建 PR，语音三件套 | 中-高 |

### 未来方向信号
- **Agent 自治性** 是下一个主要主题：CoT 预规划、continuation 信号、session 容量限制——三者共同指向 agent 需要更自主的目标管理和上下文生命周期控制能力。
- **安全与可观测性**：MCP consent envelope、launchd stderr 日志、turn delivery 可观测性——社区对"可审计、可诊断"的需求在快速升级。

---

## 7. 用户反馈摘要

### 痛点（Pain Points）

> **"升级即回退"信任危机**
> - "从 2026.4.24 升级到 2026.4.29 和 2026.5.2 后，Node 进程 CPU 直冲 100%，RPC 延迟不可控。" [#76562](https://github.com/openclaw/openclaw/issues/76562)
> - "升级 2026.6.1 后，OpenAI/ChatGPT Responses 完全废掉，gpt-5.4/5.5 报 `invalid_provider_content_type`。" [#90083](https://github.com/openclaw/openclaw/issues/90083)
> - "2026.6.1 的 SQLite 迁移静默抹掉了我 44/45 个 Cron 作业，没有警告也没有备份提示。" [#90072](https://github.com/openclaw/openclaw/issues/90072)

> **"Agent 生产力丧失"的无力感**
> - "我专门配置了一个 coding agent，过去几周它一直在产出工作，现在它什么都做不了，只会发模糊的状态更新然后为模糊道歉。" [#62505](https://github.com/openclaw/openclaw/issues/62505)
> - "Matrix channel 在 2026.6.1 上彻底炸了——每条入站消息都 crash。" [#90325](https://github.com/openclaw/openclaw/issues/90325)

> **"工具/配置升级即破坏"**
> - "Telegram 多账户配置从 2026.4.5 升到 2026.4.8 就报错，而 2026.4.5 还能用。" [#62985](https://github.com/openclaw/openclaw/issues/62985)
> - "Feishu channel 从 v4.5 升到 v4.8 后 `channels.feishu: invalid config: must NOT have additional properties`。" [#63101](https://github.com/openclaw/openclaw/issues/63101)
> - "apply_patch 工具存在于运行时，但 agent tool-policy pipeline 在运行前从 allowlist 剥离。" [#45269](https://github.com/openclaw/openclaw/issues/45269)

**关键使用场景**：企业多通道（Telegram + Slack + Discord + Matrix + Feishu）部署、长时间运行的 coding agent、多 agent 协作（subagent + memory-wiki）、MCP 工具扩展。

**满意的声音**（从 reversed 反馈角度）：[#76562] 点赞 5、[#63829] 点赞 9——社区对已解决问题的积极响应表明用户同时是高度参与的建设者；连续多个 P1 回归在同日关闭也说明维护团队的响应速度在提升。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| ID | 标题 | 年龄 | 优先级 | 状态 | 问题 |
|---|---|---|---|---|---|
| [#62505] | **Coding Agent 完全停止工作** | 2 个月+ | P1 + Regression | 开放，stale | 无修复 PR，用户核心工作流中断 |
| [#63101] | Feishu 配置升级后校验失败 | 2 个月+ | P1 | 开放，stale | 无修复 PR，阻塞 Feishu 用户升级 |
| [#62985] | Telegram 多账户升级后配置报错 | 2 个月+ | P1 + Regression | 开放，stale | 无修复 PR |
| [#61005] | Android onboarding "Connect" 不可用 | 2 个月+ | P1 | 开放，stale，👍5 | 无修复 PR，新用户激活受阻 |
| [#64267] | Agent thinking 泄露给用户 | 2 个月+ | P1 + Security | 开放，stale，👍2 | 无修复 PR |
| [#64664] | Gateway 重启后审批 ID 丢失 | 2 个月+ | P2 + Security | 开放，stale | 无修复 PR |
| [#14785] | 工具 schema token 开销减少（~3,500 tok/session） | 4 个月+ | P2 + Enhancement | 开放 | 高度相关但进展缓慢 |
| [#63829] | Per-agent memory-wiki vault（👍9） | 2 个月+ | P1 + Enhancement | 开放 | 社区高需求但无产品决策 |

### ⚠️ 长期 PR（已在审超 2 周未合并）

| ID | 标题 | 年龄 | 合并风险 | 说明 |
|---|---|---|---|---|
| [#89040] | perf: 避免 embedded_run 阻塞事件循环 14–22 秒 | 5 天 | 🚨 session-state / 🚨 availability | P1，主要性能问题，**建议尽快合并** |
| [#75167] | 修复 heartbeat poll 泄漏到 Telegram/Slack/Discord DM | 6 天 | 🚨 security-boundary | 已关闭，但不代表已合并至主线 |
| [#78441] | 子 agent 工具 allow 列表转发 | 1 个月 | 🚨 compatibility / 🚨 session-state | L-size，重要扩展特性 |
| [#65198] | 测试：字符串格式非流式 assistant reply 覆盖 | 2 个月+ | 低 | 测试 PR，实际需要合并以保持测试完整性 |
| [#85651] | 上下文压力感知的 continuation 协议 | 2 周 | 🚨 三项 XL 重构风险 | 正在关键审查窗口期，需维护者决策 |

### 维护者关注建议

1. **2026.6.2 修补版本**：优先合并 [#90793]（OpenAI 认证修复）、[#90019]（memory search sync 回退）、已有 Matrix crash 相关修复——这三项是最直接影响用户升级决策的阻塞性问题。
2. **stale 标签审查**：批量重审 stale P1 Issues（[#62505]、[#63101]、[#62985]、[#61005]），为其中无法复现或产品决策延迟的问题更新标签或关闭。
3. **安全评审队列**：确认 [#78308]、[#58730]、[#63829] 等有 `needs-security-review` 标签的 PR/issue 的 reviewer 分配状态。

---

*日报由 OWL 基于 GitHub 数据自动生成 | 2026-06-06*

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告

**报告日期**: 2026-06-06 | **覆盖项目**: 12 个活跃 / 静默项目 | **生成**: OWL

---

## 1. 生态全景

2026 年 6 月，个人 AI 助手与自主智能体开源生态正处于**功能爆发与质量阵痛并存的密集迭代期**。以 OpenClaw 为代表的全功能框架在 Channel 横向扩展和多 Agent 自治能力两个方向上快速冲刺，而 NanoBot、CoPaw 等项目则在 SDK 嵌入体验和商业化转化路径上持续深耕。社区整体贡献量高——仅今日统计窗口内，12 个项目合计产生 **380+ Issue 更新和 530+ PR 更新**，但多个头部项目（OpenClaw、ZeroClaw、Hermes Agent）均出现"升级即回退"的信任危机，反映出快速迭代模式下 QA 能力的结构性不足。架构层面，schema-v3 通道插件化（ZeroClaw）、continuation 信号协议（OpenClaw）、WASM 插件化（ZeroClaw）和 MCP 安全审批（多项目共同诉求）正在勾勒下一代 Agent 框架的核心骨架。安全与可观测性从"进阶需求"升级为"基线诉求"，多个社区同时对 human-in-the-loop 审批、审计日志和内建 observability 提出了明确要求。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | 新版本 | 健康度评估 | 一句话状态 |
|---|---|---|---|---|---|
| **OpenClaw** | 467（活跃340/关127） | 500（待376/合124） | 无（2026.6.1 后密集修复期） | 🟠 短期承压 | 回归 bug 密度高但响应快，积压 PR 审查中 |
| **NanoBot** | 10（活跃6/关4） | 28（待17/合11） | 无 | 🟢 良好 | 桌面端和多渠道适配并进，响应迅速 |
| **Hermes Agent** | 45（活跃45） | 45（待45） | 无 | 🟡 中等 | 活跃但 P1 回归和安全审计积压 |
| **PicoClaw** | 4（活跃1/关3） | 22（待2/合20） | Nightly Build | 🟢 良好 | 集中合并期，Evolution 新回归需关注 |
| **NanoClaw** | 0 | 3（待1/合2） | 无 | 🟢 稳定 | 静默维护期，API 容错和部署体验优化 |
| **NullClaw** | 0 | 1（待1） | 无 | 🟤 极低活跃 | 单一 Provider 接入 PR，近乎静默 |
| **IronClaw** | 13（活跃10/关3） | 50（待28/合22） | 无（v0.29.1） | 🟠 活跃但积压 | Hook 框架生产和 WeCom 体验双轨推进 |
| **LobsterAI** | 3（均为 stale） | 13（全合并） | **2026.6.5** | 🟡 回稳中 | 版本发布后清理 stale UX bug |
| **TinyClaw** | 0 | 0 | — | ⚫ 无活动 | 过去 24 小时零活动 |
| **Moltis** | 4（活跃3/关1） | 5（待4/合1） | 无 | 🟢 良好 | Telegram streaming 闭环，容器兼容跟进 |
| **CoPaw** | 24（活跃18/关6） | 25（待10/合15） | 无（v1.1.10） | 🟡 中等 | Yuanbao 通道发布质量事件，Agent 死循环新报 |
| **ZeptoClaw** | 0 | 0 | — | ⚫ 无活动 | 过去 24 小时零活动 |
| **ZeroClaw** | 50（活跃44/关6） | 50（待36/合14） | 无 | 🟠 高张力 | 4 个 XL PR 涌入，安全架构 blocked 超 50 天 |

> **注**: 健康度综合考量响应速度、积压率、版本发布节奏和严重 bug 处置情况。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中功能覆盖面最广、社区吞吐量最大的旗舰项目**。其单日 467 条 Issue 更新和 500 条 PR 更新的规模远超其他所有项目（第二名 ZeroClaw 仅为其 1/10），支撑这一体量的是其**全栈 Agent 框架**定位——从 Gateway/Channel 层到 Agent 运行时层、从 Cron 调度到 MCP 工具生态，完整覆盖个人 AI 助手的所有子系统。

### 优势
- **Channel 生态最丰富**: Telegram、Slack、Discord、Matrix、Feishu、WhatsApp 等多通道深度适配，且协议级修复迭代速度最快。
- **Agent 自治能力前瞻性**: CoT 预规划（#90788）、continuation 信号协议（#85651）正在解决行业尚未标准化的"长运行 Agent 目标管理和上下文生命周期控制"问题。
- **开源个人助手定位的标杆效应**: 多个项目（LobsterAI、CoPaw）在生态对比中均以 OpenClaw 为参照点。

### 技术路线差异
- 与 **ZeroClaw** 的 schema-v3/WASM 插件化路线不同，OpenClaw 走的是"核心引擎功能完备 + 按需扩展"路线，功能深度优先于架构解耦。
- 与 **Hermes Agent** 不同，OpenClaw 的桌面端不是首要战场，Gateway/CLI 是核心交互界面。
- 与 **NanoBot/NanoClaw** 不同，OpenClaw 不是 SDK-first 设计，其面向的是"直接使用"而非"嵌入其他系统"的用户。

### 社区规模对比
OpenClaw 的 Issue/PR 量级约为 NanoBot 的 **40-50 倍**，约为 ZeroClaw 的 **10 倍**，社区贡献者基数和生态影响力在个人 AI 助手领域处于绝对头部。但这一体量也带来了显著的维护者带宽压力——376 个待合并 PR、6 个 stale P1 Issue 未处置，治理挑战已浮现。

---

## 4. 共同关注的技术方向

以下方向被 3 个以上项目同时列为活跃开发主题：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **① 上下文管理精细化** | OpenClaw（分层 Bootstrap #22438、continuation 信号 #85651）、NanoBot（记忆回注防止未确认推断 #4212）、Hermes Agent（后压缩合成虚构引用 #40201） | 长会话下 token 成本控制、压缩后信息保真、bootstrap 按需加载节省开销是共性需求。OpenClaw 和 NanoBot 均有具体 PR 推进。 |
| **② 安全审批 / Human-in-the-loop** | OpenClaw（MCP consent envelope #78308）、Hermes Agent（MCP 审批工具空操作 #21563、Tirith 门控不覆盖非 shell 工具 #35357）、ZeroClaw（shell 命令执行确认层级 #7155、pluggable security provider #7142）、CoPaw（Yuanbao/AuthBind 认证链） | 多项目共同认识到"agent 自主执行不可逆操作时必须有人工确认"的安全底线，但实现层面均存在架构缺失或功能不完整。 |
| **③ Channel 适配质量与横向扩展** | OpenClaw（Matrix crash、Telegram reaction、Feishu streaming）、PicoClaw（OneBot 群聊路由错误）、ZeroClaw（新增 9 通道 #7265/#7270）、CoPaw（Yuanbao proto 缺失 4 个 bug）、IronClaw（WeCom 审批流程 3 个 bug） | 通道集成的"长尾兼容"——每个 IM 平台都有特有的字段映射、路由逻辑和认证链路，是最容易产生回归的模块。 |
| **④ 可观测性与诊断能力** | OpenClaw（turn delivery 可观测性 #90248）、ZeroClaw（结构化 ObserverEvent #7233）、Hermes Agent（桌面端诊断 / macOS launchd stderr 被隐藏）、NanoBot（WebUI 输入丢失 #4200） | 用户需要理解 agent "在做什么、为什么失败"，当前普遍缺乏结构化的执行追踪、错误归因和性能诊断能力。 |
| **⑤ 升级体验 / 信任维护** | OpenClaw（3 个由 2026.6.1 引入的 P1 回归）、PicoClaw（Evolution token 消耗回归）、LobsterAI（Cowork 输入框内容丢失 stale bug 2 个月）、CoPaw（Yuanbao v1.1.10 几乎不可用） | "升级即回退"已成为全生态的信任危机。多项目在新版本发布后跟进密集修复版本（如 OpenClaw 推测的 2026.6.2），但缺乏系统性的 CI/E2E 质量门禁。 |

---

## 5. 差异化定位分析

| 维度 | 全功能 Agent 框架 | 轻量/嵌入式 SDK | 桌面优先 |
|---|---|---|---|
| **代表项目** | OpenClaw、ZeroClaw、Hermes Agent | NanoBot、NanoClaw、PicoClaw | LobsterAI、Hermes Agent（桌面版） |
| **目标用户** | 技术型企业自建 Agent 平台、高级个人用户 | 开发者嵌入 Agent 能力到自有应用 | 终端用户，开箱即用 |
| **核心架构** | Gateway + 多 Channel + Agent Loop + Tool Ecosystem | 精简 Agent Loop + Provider 适配器 | Electron/Tauri + 内嵌 Agent |
| **部署模式** | Docker / CLI / Gateway 服务 | SDK import（Python/TS） | 桌面安装包 |
| **功能侧重** | 多通道无缝接入、子 Agent 协作、Cron 调度 | API 兼容、快速集成、低资源占用 | UX/UI、语音交互、文件预览 |
| **商业化路径** | 企业部署 + 能力扩展 | SaaS/产品内嵌 | 订阅制桌面应用（LobsterAI） |

**架构路线分叉**:
- **OpenClaw** — "大而全的单体内核"，所有能力集成在 monorepo 中，适合一站式部署。
- **ZeroClaw** — "schema-v3 + WASM 插件化"，通过配置槽位和插件接口实现扩展，适合需要高度定制的场景。
- **Hermes Agent** — "CLI-first + Desktop 追赶"，桌面端体验（CJK IME、OAuth、迁移）仍在补全。
- **NanoBot/NanoClaw** — "SDK-first + 轻量 Gateway"，不追求功能完备，聚焦核心 Agent Loop 和 API 弹性。
- **CoPaw** — "沙箱化执行 + Cron 自动化"，差异化在 shell 沙箱和定时任务增强。

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高强度迭代期（日活 Issues+PRs > 80）
- **OpenClaw** — 功能体量最大，处于 2026.6.1 之后的密集修补期，治理压力显著。
- **ZeroClaw** — 4 个 XL PR 驱动的快速扩张期，同时面临安全架构 57 天 blocked 的治理瓶颈。

### 🔵 第二梯队：稳定迭代期（日活 Issues+PRs 25-60）
- **Hermes Agent** — 多功能线并进，但 macOS 桌面稳定性和 P1 回归处置偏慢。
- **CoPaw** — Yuanbao 通道质量事件暴露发布流程短板，Cron 和中断机制是下一个增长方向。
- **IronClaw** — Hook 框架生产和 WeCom 体验双轨道推进，CI Nightly 失效应优先处置。
- **LobsterAI** — 版本发布节奏良好， stale UX bug 需集中清理以提升口碑。

### 🟢 第三梯队：精益优化期（日活 Issues+PRs 5-28）
- **NanoBot** — 响应速度最快（当日提 bug 当日有 fix PR），桌面端成熟度和多 Provider 兼容性是增量方向。
- **PicoClaw** — 安全加固和 JSONL 存储可靠性已有实质进展，Evolution 模块是新差异化方向。
- **Moltis** — 小团队但闭环质量高，容器兼容性和 Web UI 体验是待完善方向。

### ⚪ 第四梯队：静默/观察期
- **NanoClaw** — 极低活跃但维护者响应快，处于稳定维护阶段。
- **NullClaw** — 近乎静默，单一 Provider PR 待审。
- **TinyClaw、ZeptoClaw** — 过去 24 小时零活动，建议持续观察。

---

## 7. 值得关注的趋势信号

### 趋势一：Agent 自治性正从"执行工具"升级为"目标管理者"
**信号来源**: OpenClaw（CoT 预规划 #90788、continuation 信号 #85651）、NanoBot（跨 Agent 消息总线 #3992）、Hermes Agent（ToolCallStormBreaker RFC #35573）

当前 Agent 框架的焦点已超越"如何调用工具"，转向"Agent 如何自主管理长运行目标的上下文生命周期、子任务委派和死循环回避"。OpenClaw 的 continuation 信号协议（`continue_work`/`continue_delegate`/`request_compaction`）如果成功落地，将成为行业参考实现。**对开发者的启示**: 在设计 Agent 工作流时，应预先规划"Agent 何时该继续、何时该暂停/移交/压缩"的状态机模型，而非仅关注单次 tool-call 的成功率。

### 趋势二：安全审批不是一次性功能而是持续演进的架构能力
**信号来源**: 4+ 项目同时推进 MCP consent envelope、shell 命令审批、pluggable security provider

多项目几乎在同一时间窗口内识别出"human-in-the-loop 审批"的架构缺失，说明这已从"可选安全增强"变为"生产部署的前置条件"。ZeroClaw 选择 pluggable security provider 接口（#7142）、OpenClaw 选择 channel-mediated 审批复用（#78308）、Hermes Agent 的 MCP bridge IPC 通道缺失（#21563）——三种不同实现路径反映了行业尚未形成统一标准。**对开发者的启示**: 在 Agent 框架选型时，应将"审批机制的架构扩展性"作为核心评估维度，而非仅看当前支持的工具列表。

### 趋势三：Channel 集成的质量正成为框架竞争力的分水岭
**信号来源**: OpenClaw（Matrix crash、Feishu streaming 截断）、ZeroClaw（单日新增 9 个通道 PR）、PicoClaw（OneBot 路由错误）、IronClaw（WeCom 审批流程 3 个 bug）、CoPaw（Yuanbao proto 缺失 4 个 bug）

每个 IM 平台的"字段映射差异、认证链路、消息格式和路由逻辑"都在持续产生回归。**能够提供"开箱即用且长期维护"的 Channel 适配能力，正在成为框架差异化竞争的关键**。ZeroClaw 的 schema-v3 配置槽位模式（新增通道只需新增配置模板，不改核心代码）是一个值得关注的方向。

### 趋势四：桌面端正从"CLI 的 GUI 包装"走向独立产品
**信号来源**: Hermes Agent（CJK IME、CLI→Desktop 迁移数据丢失）、LobsterAI（Cowork 文件预览、语音输入、快捷键重构）、CoPaw（Tauri vs exe 打包讨论 #4754）

桌面端不再是 CLI 的附属品，而是独立的交互形态——文件预览、语音输入、快捷键、多会话切换、移动端响应式等需求在 LobsterAI 和 Hermes Agent 中大量涌现。**对开发者的启示**: 如果你的目标用户包含非技术用户，桌面端 UX 的优先级需要提升到与核心 Agent Loop 同等水平。

### 趋势五：升级信任危机正在推动 E2E 和社区 QA 流程的范式转变
**信号来源**: OpenClaw（2026.6.1 引入 3 个 P1 回归）、IronClaw（Nightly E2E 连续失败 10 天 #4108）、CoPaw（Yuanbao v1.1.10 几乎不可用）

多个头部项目在密集迭代中暴露出"核心功能回归未被 CI 捕获"的共性问题。IronClaw 的 Nightly E2E 连续失败 10 天且无人处置，说明缺乏对质量门禁的制度性维护。**对开发者的启示**: 在选择 Agent 框架时，应评估其 CI 覆盖率和发布后的"修补版本响应速度"，而非仅关注功能列表。OpenClaw 在发现问题后同日跟进 PR 修复的模式值得参考。

---

*本报告由 OWL 基于 2026-06-06 各项目 GitHub 动态自动生成。数据统计窗口为过去 24 小时，覆盖个人 AI 助手与自主智能体生态中 14 个主要开源项目。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-06

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 统计周期：过去 24 小时

---

## 1. 今日速览

Nanoobot 今日活跃度**极高**：PR 更新 28 条（待合并 17 条、已合并/关闭 11 条），Issues 更新 10 条（新开/活跃 6 条、已关闭 4 条）。项目处于密集迭代期，一天内完成了多项 bug 修复和功能合并，涵盖 SDK、Session 管理、桌面端、子 Agent、WebUI、多渠道适配等多个模块。无新版本发布，但多个已合并 PR 预示着一次较大版本升级蓄势待发。整体项目健康度**良好**，响应速度快，bug fix 与 feature 并行推进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展（今日合并/关闭的 PR）

| # | PR | 作者 | 说明 |
|---|-----|------|------|
| [#4210](https://github.com/HKUDS/nanobot/pull/4210) | **Fix desktop restart token and replay gaps** | chengyongru | 桌面端重启后正确刷新 bootstrap/WebSocket replay 不再丢失输出流 |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) | **feat(command): add /skill slash command** | Endeavour-Yuan | 新增 `/skill` 内置斜杠命令，列出所有已启用技能的名称和描述，解决 #3959 中用户无法发现可用技能的问题 |
| [#4197](https://github.com/HKUDS/nanobot/pull/4197) | **Fix DM pairing for Weixin and Telegram** | chengyongru | 修复微信和 Telegram 私聊配对流程 |

**关键推进：**
- **桌面端体验**迈入正轨（重启令牌刷新、WebSocket 断线重连补偿、桌面通知）。
- **技能发现能力**补齐，`/skill` 命令让用户能实时查看可用能力。
- **多渠道适配**持续完善（钉钉群白名单、微信/Telegram DM 配对）。

---

## 4. 社区热点

### 🔥 最活跃 Issue

**[#4211 — SDK leaves stdio MCP open → "exit cancel scope in a different task" at shutdown](https://github.com/HKUDS/nanobot/issues/4211)**
- **作者**：pblocz | 评论 0（新发，尚未讨论）
- **诉求**：通过 SDK 嵌入 nanobot 并使用 stdio MCP server 时，Python 解释器关闭时抛出未处理的 `RuntimeError`。功能本身运行正常，但优雅退出未保证。
- **响应速度**：已有对应 fix PR [#4216](https://github.com/HKUDS/nanobot/pull/4216)（axelray-dev），当日提出当日跟进。

### 🔥 最受关注功能请求

**[#4204 — [PATCH] Add extra_query support for OpenAI-compatible providers](https://github.com/HKUDS/nanobot/issues/4204)**
- **作者**：mraad | 评论 1
- **诉求**：Azure 等网关需要在 `/chat/completions` 请求上附加 `?api-version=` 查询参数，现有配置体系无法注入。
- **意义**：此举将解锁大量 Azure OpenAI 兼容网关用户，降低接入门槛。

**最活跃新功能信号**
- **[#4212 — Prevent re-injected history from reinforcing unconfirmed inferences](https://github.com/HKUDS/nanobot/issues/4212)**：长时记忆回注导致 Agent 将未确认的推断当作事实的问题，涉及 prompt 工程核心逻辑。

### 🔥 最活跃 PR

**[#3992 — feat(agent-collab) — enable cross agent messaging](https://github.com/HKUDS/nanobot/pull/3992)**
- **作者**：ysofologis | 创建：5月24日，仍在审核中
- **内容**：跨实例消息总线，支持多 Agent 协作通信。功能已完成并通过测试，但合并进度较慢。
- **意义**：这是 NanoBot 向多 Agent 协作架构迈进的核心 PR，值得关注其审核进展。

---

## 5. Bug 与稳定性

| 严重程度 | # | Bug 描述 | 状态 | Fix PR |
|----------|---|----------|------|--------|
| 🔴 **高** | [#4203](https://github.com/HKUDS/nanobot/issues/4203) | `find_legal_message_start` 在用户消息后跟孤立工具结果时**丢弃所有消息** | Open | ✅ [#4215](https://github.com/HKUDS/nanobot/pull/4215) |
| 🟠 **中** | [#4200](https://github.com/HKUDS/nanobot/issues/4200) | 浏览器刷新时用户消息丢失 | **已关闭** | 同日修复 |
| 🟠 **中** | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | SDK 嵌入 stdio MCP 关闭时 RuntimeError | Open | ✅ [#4216](https://github.com/HKUDS/nanobot/pull/4216) |
| 🟡 **低** | [#3959](https://github.com/HKUDS/nanobot/issues/3959) | `/skill list` 仍列出 disabled skills | **已关闭** | PR #3968 新增 `/skill` 命令 |
| 🟡 **低** | [#1946](https://github.com/HKUDS/nanobot/issues/1946) | Matrix test error on `main` | Open | ❌ 无（3个月老 issue） |

**评估：** 核心 bug 当日均有跟进，响应迅速。消息丢弃 bug（#4203）虽严重但已当日提 fix，预计近期合并。

---

## 6. 功能请求与路线图信号

| # | 需求 | 是否有 PR | 评估 |
|---|------|-----------|------|
| [#4204](https://github.com/HKUDS/nanobot/issues/4204) | ProviderConfig.extra_query 支持 | Issue 自带 PATCH | 🔴 高概率纳入（门槛低、用户广） |
| [#4198](https://github.com/HKUDS/nanobot/issues/4198) | 子 Agent fail_on_tool_error 行为可配置化 | ❌ | 🟡 中等 |
| [#4212](https://github.com/HKUDS/nanobot/issues/4212) | 长时记忆回注防止未确认推断变事实 | ❌ | 🟡 中等（设计复杂） |
| [#4213](https://github.com/HKUDS/nanobot/pull/4213) | 新增 Exa 网页搜索 Provider | ✅ PR 已提交 | 🟢 可能纳入 |
| [#4209](https://github.com/HKUDS/nanobot/pull/4209) | 允许通过 null extraBody 丢弃默认 OpenAI 图片参数 | ✅ PR 已提交 | 🟢 可能纳入 |
| [#4170](https://github.com/HKUDS/nanobot/pull/4170) | 邮件 IMAP 后处理动作（归档/删除/标记已读） | ✅ PR 已提交 | 🟢 有价值，审核中 |
| [#1408](https://github.com/HKUDS/nanobot/pull/1408) / [#1284](https://github.com/HKUDS/nanobot/pull/1284) | CI 流水线 | ✅ PR 已提交 | 🟡 两个重复 PR，需决策 |

**路线图判断：** 下一版本预计将集中在（1）多 Provider 兼容性扩展（extra_query、图片参数灵活控制）；（2）Agent 子系统完善（子 Agent 容错、记忆回注质量）；（3）桌面端体验成熟化。多 Agent 协作（#3992）可能是更远期的里程碑功能。

---

## 7. 用户反馈摘要

**真实痛点提炼：**

1. **数据丢失恐惧**：浏览器刷新丢失消息（#4200）、孤立工具结果导致整段会话丢弃（#4203）—— 用户对会话持久性的信任脆弱，任何消息丢失都会严重影响信心。

2. **SDK 优雅退出**：嵌入式 nanobot 用户（#4211）期望即使在简单脚本中也能无警告退出，这反映了 SDK 用户从"Demo 跑通"走向"生产部署"的成熟度提升。

3. **技能发现盲区**：用户无法知道哪些技能被禁用（#3959），导致配置困惑。`/skill` 命令的加入是正确方向，但这类可见性/调试能力仍需系统性补齐。

4. **子 Agent 容错不足**：子 Agent 在工具调用失败后直接返回（#4198），无法自我恢复，限制了 Agent 在复杂任务中的自主性。

5. **Azure/企业网关兼容**：企业用户被 `?api-version` 这类"微小差异"拦在门外（#4204），说明 NanoBot 的生态扩展策略需要正视长尾兼容需求。

**满意信号：** 
- 社区贡献者活跃（28 条 PR），多位用户直接提交 patch 而非仅报告问题。
- 核心 bug 当日有 fix PR 跟进，用户响应体验良好。

---

## 8. 待处理积压（长期未响应）

| # | 主题 | 年龄 | 风险 | 建议 |
|---|------|------|------|------|
| [#1946](https://github.com/HKUDS/nanobot/issues/1946) | Matrix test error on `main` | **3+ 个月** | 🟡 中（测试覆盖缺口） | 定期检查 CI Matrix 测试是否仍失败 |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | Agent 跨实例消息总线 | **13 天** | 🟠 高（核心功能 PR 积压） | 考虑及时 review 或给 contributor 反馈，避免寒心 |
| [#1408](https://github.com/HKUDS/nanobot/pull/1408) / [#1284](https://github.com/HKUDS/nanobot/pull/1284) | CI 流水线（两个重复 PR） | **3+ 个月** | 🟡 中 | 尽快决策保留哪个、拒绝哪个，避免 contributor 困惑 |
| [#4207](https://github.com/HKUDS/nanobot/pull/4207) | Drop Python 3.11/3.12 support | **2 天** | 🟡 中 | 版本兼容性决策需及时明确，影响用户环境配置 |

---

**总体评估**：NanoBot 今日开发节奏紧凑、响应迅速。最大亮点是桌面端快速迭代和多渠道适配并行；最大风险在于核心架构 PR（#3992 多 Agent 协作、#4212 记忆回注质量）审核周期可能过长。建议维护者近期优先推进 #3992 review 并决策 CI/drop-Python 版本等积压议题。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-06

## 1. 今日速览

Hermes Agent 今日继续保持高活跃状态：过去24小时内新增/活跃 Issues 达 **45 条**，同时待合并 PR 也达到 **45 条**，项目吞吐量维持在较高水平。核心开发线围绕 **max_tokens 参数传播链**（PR #40175、#40185、#40186）、**桌面端输入法与 CJK 兼容**（PR #40200）、**跨进程数据库完整性**（PR #40177）以及 **安全依赖升级**（PR #40179）等多条战线并行推进。今日无新版本释放，多条阻塞性问题已有对应 fix PR，整体迭代节奏健康。

---

## 2. 版本发布

无新 Release。

---

## 3. 项目进展

今日进入关闭/合并状态的 PR 共 5 条，关键进展如下：

| PR | 类型 | 说明 |
|---|---|---|
| **#40194** (merged) | fix | `hermes update` 在 editable/git 安装模式下错误识别项目根目录的问题已修复，解决用户无法通过 `hermes update` 自更新的回归 |
| **#40197** (merged) | feat | "全部归档会话"确认对话框新增**可归档/受保护会话计数**展示，提升用户对批量操作的感知可控性 |
| **#40062** (merged) | feat | 桌面端新增**简体中文 i18n** 语言包（英语/简体中文双语文案），显著改善中文用户 UI 体验 |

> **整体推进评估**：三条合并分别覆盖了更新流程回归修复、桌面 UX 增强和国际化三条线。PR #40175/#40185/#40186（max_tokens 传播链）、PR #40200（IME 输入）、PR #40177（DB 跨进程锁定）等高关注度 fix 仍处于 open 状态，预计将在近期合并。

---

## 4. 社区热点

### 🔥 最活跃讨论 Issue

- **[#13944](https://github.com/NousResearch/hermes-agent/issues/13944)** — *System prompt skill index truncates descriptions to 60 chars*（6 条评论）
  - 被标记 Closed，但技术讨论持续发酵。核心诉求：60 字符的 skill 描述截断导致模型路由时丢失 trigger criteria，尤其影响 skills 丰富的配置下模型工具选择的准确性。
  - 关键词：**skill routing 可靠性、prompt 工程**

- **[#31101](https://github.com/NousResearch/hermes-agent/issues/31101)** — *QQ Bot adapter: silent loop after reconnect failure*（4 条评论）
  - P2 级 QQ Bot WebSocket 断线后静默死循环问题，Bot 永久断开且无重试逻辑。PR **#40198** 已进入修复，社区对此响应速度表示认可。
  - 关键词：**IM 平台适配器韧性、WebSocket 重连**

- **[#40146](https://github.com/NousResearch/hermes-agent/issues/40146)** — *Desktop: Send button doesn't switch from voice when typing Chinese (IME)*（3 条评论）
  - CJK 用户在桌面端输入体验差，语音/发送按钮状态在 IME composition 期间不切换。PR **#40200** 直接针对此问题提交修复，根因定位在 Electron 的 `compositionend` 事件未正确触发提交。
  - 关键词：**桌面端 IME 兼容性、CJK 用户体验**

- **[#21563](https://github.com/NousResearch/hermes-agent/issues/21563)** — *MCP approval tools are no-ops: bridge subprocess has no IPC channel to gateway approval state*（3 条评论）
  - MCP 桥接工具的审批功能实际上是空操作，缺乏与 gateway 审批状态的 IPC 通道。这是一个持续较久的结构性问题，尚无对应 PR。
  - 关键词：**MCP 安全审批、IPC 架构**

### 📌 今日高优先级新 Issue

- **[#40201](https://github.com/NousResearch/hermes-agent/issues/40201)** — *Post-compression final synthesis can fabricate source-backed findings without re-grounding*
  - 今日新上报的严重问题：长会话经上下文压缩后，最终合成阶段可能产生看似有源引用但实际虚构的发现。涉及 agent 输出的可信度，尚无 PR。

- **[#40176](https://github.com/NousResearch/hermes-agent/issues/40176)** — *Pinned Python deps carry known CVEs（urllib3 / python-multipart / PyJWT / idna）*
  - 安全依赖升级需求，PR **#40179** 已跟进。

---

## 5. Bug 与稳定性

按严重程度排列，今日所有 Bug 报告及修复状态：

### 🔴 P1/P2 严重 / 高优先级

| # | 问题摘要 | 状态 | Fix PR | 严重程度 |
|---|---|---|---|---|
| [#40201](https://github.com/NousResearch/hermes-agent/issues/40201) | 后压缩阶段合成虚构源引用 | OPEN, 0 评论 | — | 🔴 **严重** |
| [#40178](https://github.com/NousResearch/hermes-agent/issues/40178) | Desktop 安装覆盖 CLI 已有 sessions/state.db | OPEN, 0 评论 | — | 🟠 P2 |
| [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) | macOS desktop 编译 electron-builder 失败 | NEW | — | 🟠 P2 |
| [#39860](https://github.com/NousResearch/hermes-agent/issues/39860) | macOS Desktop 更新 npm ci postinstall EAGAIN | OPEN | — | 🟠 P2（macOS 兼容性） |
| [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) | 同工具重复调用循环（token burn） | OPEN, 1 评论 | — | 🟠 P2 功能缺陷 |
| [#31101](https://github.com/NousResearch/hermes-agent/issues/31101) | QQ Bot 断线后静默死循环 | OPEN | **#40198** ✅ | 🟡 P2（for QQ Bot 用户为高） |

### 🟡 P3 中优先级 / UI 交互 / 平台兼容

| # | 问题摘要 | Fix PR | 备注 |
|---|---|---|---|
| [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) | 桌面端 CJK IME 语音/发送按钮不切换 | **#40200** ✅ | |
| [#40145](https://github.com/NousResearch/hermes-agent/issues/40145) | 桌面端中文输入截断（独立报告） | 重叠 #40146 | |
| [#40137](https://github.com/NousResearch/hermes-agent/issues/40137) | WSL 后端 Windows 路径注入 shell | — | 影响 WSL 工作流 |
| [#37589](https://github.com/NousResearch/hermes-agent/issues/37589) | Desktop 会话缺少已配置 MCP 工具 | — | MCP 配置同步问题 |
| [#37918](https://github.com/NousResearch/hermes-agent/issues/37918) | 长机器首消息被 sticky clamp 遮挡 | — | cron/scheduled 会话 UI |
| [#21563](https://github.com/NousResearch/hermes-agent/issues/21563) | MCP 审批工具空操作 | — | 架构级缺陷 |
| [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) | Skill index 60 字符截断 | — | 已关闭但影响持续 |

### 🟢 已修复 / 今日关闭

| # | 问题摘要 | 关闭 |
|---|---|---|
| [#40129](https://github.com/NousResearch/hermes-agent/issues/40129) | CLI resume Rich markup ANSI escape 崩溃 | ✅ 已关闭 |
| [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) | Skill index 截truncation（已关闭） | ✅ 已关闭（code-side） |

---

## 6. 功能请求与路线图信号

### 明确功能请求（RFC / Feature Request）

| # | 需求 | 信号强度 | 进展 |
|---|---|---|---|
| **[#35573](https://github.com/NousResearch/hermes-agent/issues/35573)** | ToolCallStormBreaker — 抑制重复工具调用循环 | ⭐⭐⭐ 高（P3 + 社区自发 RFC） | 无 PR，方向已明确 |
| **[#40173](https://github.com/NousResearch/hermes-agent/issues/40173)** | Telegram channel_profiles — 单 Gateway 多 chat-to-profile 路由 | ⭐⭐⭐ 高 | 无 PR，架构扩展 |
| **[#40189](https://github.com/NousResearch/hermes-agent/issues/40189)** | 委托会话增加 delegated_role 字段 | ⭐⭐ 中 | 无 PR |
| **[#40195](https://github.com/NousResearch/hermes-agent/issues/40195)** | 官方 ByteDance BytePlus ModelArk provider | ⭐⭐ 中 | 无 PR |
| **[#40190](https://github.com/NousResearch/hermes-agent/issues/40190)** | Firecrawl 配置读取兼容 Hermes env 体系 | ⭐⭐ 中 | **#40192** ✅ 已提交 PR |
| **[#40191](https://github.com/NousResearch/hermes-agent/issues/40196)** | CLI/TUI 会话血缘树查看器 | ⭐⭐ 中 | 无 PR |

### 开发中的功能 PR

| # | 内容 | 状态 |
|---|---|---|
| **#40202** | 新增 `/version` slash command | OPEN |
| **#39271** | Desktop 自动归档旧会话 | OPEN |
| **#40062** | 简体中文 i18n ✅ | **已合并** |
| **#40197** | 归档对话框显示可归档/保护计数 ✅ | **已合并** |

**路线图判断**：下一版本（推断 v0.15.2 或 v0.16）大概率将包含 **max_tokens 传播链修复**（3 条 PR）、**CJK IME 修复**、**安全依赖升级**、**QQ Bot 重连修复**，以及**跨平台路径 / WSL 兼容性**改进。ToolCallStormBreaker 和 Telegram channel_profiles 属于前瞻性功能，可能需要更长设计周期。

---

## 7. 用户反馈摘要

### 👍 满意 / 正面

- **#40062 合并（简体中文 i18n）**：社区对桌面端中文本地化呼声较高，PR 落地速度受到好评，尤其国内用户（#40145 的作者）表达了对中文输入体验改进的期待。
- **#40198（QQBot 重连修复）** 提交后，原 Issue #31101 社区迅速跟进确认，对维护者响应效率表示认可。

### 👎 痛点 / 不满意

- **桌面端 CJK 输入法体验**是最高频痛点——#40146（发送按钮 / 语音按钮状态）、#40145（输入截断）、#40200（compositionend 根因）三个 Issue 从不同角度描述了同一类问题，说明 CJK 输入法适配是**桌面端的高优先UX负债**。
- **macOS 桌面构建/更新稳定性**：#39860（EAGAIN in npm ci）、#40187（electron-builder 失败）两条 Issue 表明 macOS 用户的安装和更新路径仍存在较多痛点，涉及 electron-winstaller 在 Windows npm workspace 中的 macOS 兼容性问题。
- **CLI → Desktop 迁移体验**：#40178 反映 Desktop 安装时完全忽略已有 CLI 数据和 sessions，造成用户从 CLI 迁移到 Desktop 时的数据断档。这是一个** adoption blocker**。
- **MCP 审批机制信任问题**：#21563 揭示 MCP 审批工具实际上是空操作，使用户对"human-in-the-loop"安全机制产生信任危机。
- **安全依赖滞后**：#40176 显示 pinned urllib3 和 python-multipart 存在 HIGH 级别 CVE，用户安全意识在提升但对管理侧依赖版本更新节奏有期待。

### 📌 典型使用场景浮现

- **WSL + Windows Desktop 混合环境**（#40137）：路径注入问题反映了 Windows 用户使用 WSL 作为后端的实际需求。
- **Cron/定时任务长会话**（#37918）：大量机器生成首消息的 sticky clamp 遮挡说明定场景调度已是核心使用模式。
- **多平台 IM 统一接入**：QQ Bot（#31101）、Telegram channel_profiles（#40173）、WhatsApp（#40182）等多平台适配需求集中爆发，说明 Hermes Agent 正在成为**跨平台统一 agent 网关**。

---

## 8. 待处理积压（长期未响应）

以下 Issue/PR 长期处于 open 状态但缺乏维护者回应，建议优先关注：

| # | 类型 | 创建日期 | 内容摘要 | 建议优先级 |
|---|---|---|---|---|
| **[#21563](https://github.com/NousResearch/hermes-agent/issues/21563)** | bug | 2026-05-07 | MCP 审批工具空操作（IPC 缺失） | 🔴 **高** — 涉及安全架构完整性 |
| **[#35357](https://github.com/NousResearch/hermes-agent/issues/35357)** | security | 2026-05-30 | Tirith 审批门控不覆盖非 shell 工具 | 🟠 **高** — 安全功能绕过 |
| **[#35573](https://github.com/NousResearch/hermes-agent/issues/35573)** | rfc | 2026-05-30 | ToolCallStormBreaker 提案 | 🟡 **中** — 自发 RFC，有社区支持 |
| **[#37589](https://github.com/NousResearch/hermes-agent/issues/37589)** | bug | 2026-06-02 | Desktop 会话缺失已配置 MCP 工具 | 🟠 **高** — MCP 核心功能 |
| **[#40137](https://github.com/NousResearch/hermes-agent/issues/40137)** | bug | 2026-06-05 | WSL 路径注入 shell | 🟡 **中** |
| **#40174** | PR | 2026-06-05 | Desktop OAuth Content-Length ERR | 🟡 **中** — 阻塞远程 OAuth 用户 |
| **#40182** | PR | 2026-06-05 | WhatsApp JID 标准化修复 | 🟡 **中** — 影响 WhatsApp 出站 |

> **总体积压评估**：当前 open PR 积压 45 条，open Issues 积压 45 条，MCP 相关安全和功能问题（#21563、#35357、#37589）是最早创建但缺乏进展的。安全类 Issue 应优先安排评审。

---

*数据来源：NousResearch/hermes-agent GitHub，统计窗口：过去24小时（2026-06-05 至 2026-06-06）*
*本日报由 OWL 自动生成，数据驱动，仅供参考。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-06

---

## 1. 今日速览

PicoClaw 今日活跃度**极高**，处于密集集成与修复周期。22 条 PR 更新中 20 条已合并/关闭，主要来自 5 月下旬积压的批量合并窗口；同时 4 条 Issues 被清理关闭。项目发布新版 Nightly Build（based on v0.2.9），表明 v0.3.0 的开发主线正在快速推进。今日新开的 Issue #3012 揭示了 Evolution 模块存在每小时持续消耗 token 的严重回归，需重点关注。

---

## 2. 版本发布

### Nightly Build — `v0.2.9-nightly.20260605.5224b9a4`

- **发布时间**：2026-06-05
- **版本类型**：自动化 Nightly Build，**不稳定，请谨慎使用**
- **基础版本**：基于 `v0.2.9`，追踪 `main` 分支最新提交
- **Full Changelog**：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- **迁移注意事项**：Nightly 版本包含大量未经验证的变更（安全修复、OneBot 路由修复、上下文显示修复、依赖升级等），生产环境建议继续使用稳定版；如需测试，建议备份 workspace 与配置文件。

---

## 3. 项目进展

今日合并/关闭的 20 条 PR 可按主题归纳为以下几类（按影响范围排序）：

### 🔴 安全加固
| PR | 贡献者 | 内容概要 |
|---|---|---|
| [#2900](https://github.com/sipeed/picoclaw/pull/2900) | yangwenjie1231 | **为 Web 后端添加 CSRF 防护、路径穿越验证和安全响应头**。修复了 `handleDeleteSkill` 中未校验路径边界的漏洞（可能通过符号链接读取 workspace 外文件），以及 `EvalSymlinks` 处理缺失问题。 |

> **意义**：这是近一个月内最重要的安全加固 PR，堵住了 Web UI 管理功能的两个潜在攻击面。

### 🟠 核心稳定性修复
| PR | 贡献者 | 内容概要 |
|---|---|---|
| [#3009](https://github.com/sipeed/picoclaw/pull/3009) | chengzhichao-xydt | **OneBot 群聊回复路由修复**：群消息 ChatID 未加 `group:` 前缀，导致误用 `send_private_msg` 向群号发送消息。修复后恢复为 `send_group_msg`。 |
| [#2907](https://github.com/sipeed/picoclaw/pull/2907) | SiYue-ZO | **JSONL 存储元数据漂移修复**：`.jsonl` 追加数据后、`.meta.json` 更新前进程崩溃会导致元数据与数据不同步。 |
| [#2905](https://github.com/sipeed/picoclaw/pull/2905) | SiYue-ZO | **过期 Context 的降级链处理修复**：`context.DeadlineExceeded` 未被正确识别，导致已过期的请求级 context 仍尝试后续 provider 候选。 |
| [#2913](https://github.com/sipeed/picoclaw/pull/2913) | SiYue-ZO | **JSONL Session 索引热路径克隆消除**：`ResolveSessionKey` 缓存命中时仍全量 clone index，对高频会话产生不必要 GC 压力。 |

### 🟡 体验与兼容性修复
| PR | 贡献者 | 内容概要 |
|---|---|---|
| [#2985](https://github.com/sipeed/picoclaw/pull/2985) | chengzhichao-xydt | **`/context` 命令显示增强**：新增 `SummarizeAtTokens`（软摘要阈值），此前仅显示硬压缩阈值，导致 MiniMax 等长上下文模型用户困惑（Issue #2968）。 |
| [#2908](https://github.com/sipeed/picoclaw/pull/2908) | SiYue-ZO | **Provider Logo 降级显示修复**：后端 catalog metadata 重构后 models 配置页的 provider logo 消失，新增前端 fallback 映射表。 |
| [#3013](https://github.com/sipeed/picoclaw/pull/3013) | shenjiecode | **skill-creator 文档修复**：删除指向不存在脚本 `init_skill.py` / `package_skill.py` 的引用，替换为 Picoclaw 兼容的手动创建流程（Issue #652）。 |

### 🔵 依赖升级（批量）
| PR | 升级内容 |
|---|---|
| [#2962](https://github.com/sipeed/picoclaw/pull/2962) | `anthropic-sdk-go` 1.26.0 → 1.46.0 |
| [#2927](https://github.com/sipeed/picoclaw/pull/2927) | `react` + `@types/react` 19.2.5 → 19.2.6 |
| [#2926](https://github.com/sipeed/picoclaw/pull/2926) | `shadcn` 4.7.0 → 4.8.0 |
| [#2925](https://github.com/sipeed/picoclaw/pull/2925) | `@tanstack/react-router` 1.169.2 → 1.170.6 |
| [#2924](https://github.com/sipeed/picoclaw/pull/2924) | `@tanstack/react-query` 5.99.0 → 5.100.11 |
| [#2922](https://github.com/sipeed/picoclaw/pull/2922) | `@tabler/icons-react` 3.43.0 → 3.44.0 |
| [#2919](https://github.com/sipeed/picoclaw/pull/2919) | `go.mau.fi/util` 0.9.8 → 0.9.9 |

### 🟢 防御性编程
| PR | 贡献者 | 内容概要 |
|---|---|---|
| [#3010](https://github.com/sipeed/picoclaw/pull/3010) | chengzhichao-xydt | `toChannelHashes` 中两处 `json.Unmarshal` 后未做 `ok` 检查的类型断言，当配置异常时可致 panic。 |
| [#3011](https://github.com/sipeed/picoclaw/pull/3011) | chengzhichao-xydt | `UnsubscribeEvents` 中 `sync.Map.LoadAndDelete` 返回值未做 `ok` 断言，极端情况下可能 panic。 |

### ⏳ 仍开放的 PR
| PR | 状态 | 内容 |
|---|---|---|
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | OPEN, stale | 入站图片可配置多级压缩策略，避免 vision payload 过大 |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | OPEN, stale | Channel 名称与 Provider 类型解耦，支持同 provider 多实例 |

---

## 4. 社区热点

### 🔥 Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) — exec 工具 guardCommand 误判路径（已关闭）
- **作者**：icyfire | **👍 2** | 评论 15 条（最高互动）
- **核心诉求**：`restrict_to_workspace=true` 时，`guardCommand` 使用过于简单的正则提取相对路径，导致执行 `curl -s "wttr.in/Beijing?T"` 这类不包含文件路径的命令被误判为 `../../../../Beijing?T` 并拦截。
- **背景分析**：该 Bug 自 3 月提出，历经 15 条评论的根因分析与复现讨论，最终在 6 月 5 日标记关闭。这反映出安全沙箱逻辑与用户体验之间的经典张力，社区贡献者通过充分的讨论才达成修复方案。

### 🔥 Issue [#2968](https://github.com/sipeed/picoclaw/issues/2968) — `/context` 始终显示 Compress at: 76800 tokens（已关闭）
- **作者**：xpader | 评论 5 条
- **核心诉求**：使用 MiniMax-M2.7-highspeed（`max_tokens: 128000`）时，`/context` 只显示硬压缩阈值，用户无法看到软摘要触发点。
- **修复对应**：PR [#2985](https://github.com/sipeed/picoclaw/pull/2985) 已合并，在输出中同时展示 `SummarizeAtTokens`。

### 🔥 Issue [#3002](https://github.com/sipeed/picoclaw/issues/3002) — OneBot 群聊 reply 使用 send_private_msg（已关闭）
- **作者**：Xuan-Xuann
- **核心诉求**：OneBot 通道群消息回复使用了错误的 API 端点，NapCat 返回"无法获取用户信息"。
- **修复对应**：PR [#3009](https://github.com/sipeed/picoclaw/pull/3009) 当日合并。

---

## 5. Bug 与稳定性

### 🔴 严重（新发现，待确认）

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| Evolution 模式每小时持续消耗 token | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | 🔴 **NEW, OPEN** | ❌ 尚无 |
| **复现条件**：Evolution 启用、Mode=Draft、Code Path Trigger=_（未完整）_; 每数分钟产生 token 消耗 | | | |

> **分析**：这是今日唯一新开的 Bug 报告，报告者 xpader 仅 3 天前刚报告了 `/context` display 问题。Evolution 模块的 token 无条件消耗可能导致用户账单异常增长，建议优先排查 Draft 模式的轮询/触发逻辑是否存在循环调用。

### 🟡 中等（已修复）

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| OneBot 群聊回复路由错误 | [#3002](https://github.com/sipeed/picoclaw/issues/3002) | ✅ CLOSED | [#3009](https://github.com/sipeed/picoclaw/pull/3009) |
| `/context` 只显示压缩阈值 | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | ✅ CLOSED | [#2985](https://github.com/sipeed/picoclaw/pull/2985) |
| JSONL 崩溃后元数据漂移 | — | ✅ CLOSED | [#2907](https://github.com/sipeed/picoclaw/pull/2907) |
| Fallback 链未停止于 deadline exceeded | — | ✅ CLOSED | [#2905](https://github.com/sipeed/picoclaw/pull/2905) |
| `toChannelHashes` 类型断言 panic | — | ✅ CLOSED | [#3010](https://github.com/sipeed/picoclaw/pull/3010) |
| `UnsubscribeEvents` 类型断言 panic | — | ✅ CLOSED | [#3011](https://github.com/sipeed/picoclaw/pull/3011) |

### 🟢 低优先级（历史上报告，已关闭）

| Bug | Issue | 备注 |
|---|---|---|
| exec guardCommand 误判非路径命令 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | 3 个月的老 Bug，6 月 5 日关闭 |
| CPU/Memory/IO 优化建议 | [#2916](https://github.com/sipeed/picoclaw/issues/2916) | 标记 stale 后关闭，可能转入 Discussion |

---

## 6. 功能请求与路线图信号

| 方向 | 对应 Issue/PR | 状态 | 判断 |
|---|---|---|---|
| **入站图片压缩策略** | PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) | OPEN, stale | 功能完整度较高但未合并；PicoClaw 面向多通道（含移动端），此功能对带宽敏感场景至关重要，**可能进入 v0.3.0** |
| **Channel 多实例支持** | PR [#2551](https://github.com/sipeed/picoclaw/pull/2551) | OPEN, stale | 自 4 月停滞，涉及核心架构变更（ChannelType 引入、消息总线路由改造），**短期合并可能性低**，需要 maintainer review |
| **MiMo Provider CommonModels** | PR [#2915](https://github.com/sipeed/picoclaw/pull/2915) | CLOSED | 已关闭，可能在未来重新提交 |
| **skill-creator 工作流完善** | Issue [#652](https://github.com/sipeed/picoclaw/issues/652) | OPEN | PR [#3013](https://github.com/sipeed/picoclaw/pull/3013) 仅修复了文档引用，skill-creator 本身仍缺少 `init_skill.py` 等辅助脚本，完整的 Skill 创建体验**尚未闭环** |
| **Evolution 模块稳定性** | Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012) | 🔴 NEW | Evolution 是 PicoClaw 的差异化功能，此 Bug 若确认将直接影响核心卖点，**需要尽快响应** |

---

## 7. 用户反馈摘要

**痛点与真实使用场景（从 Issue 评论与描述中提炼）**：

1. **🔐 安全沙箱 vs. 功能可用性**（Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042)）：PicoClaw 定位为个人 AI 助手，用户会调用天气查询、网络请求等"无文件路径"命令，但 `restrict_to_workspace` 安全策略过度拦截导致功能不可用。用户对"安全"与"可用"的平衡点有不同期待。

2. **📊 长上下文模型配置复杂**（Issue [#2968](https://github.com/sipeed/picoclaw/issues/2968)）：使用 MiniMax-M2.7-highspeed 等支持 128k+ 上下文模型的用户，期望在 `/context` 看到软摘要与硬压缩两个阈值的完整信息。这说明高端模型用户对上下文管理的可视化有强需求。

3. **💬 消息通道集成质量参差不齐**（Issue [#3002](https://github.com/sipeed/picoclaw/issues/3002)）：OneBot（NapCat）用户遇到群聊回复路由错误，说明 CQHTTP/OneBot 适配层在 ChatID 前缀处理上存在的历史遗留问题。用户自行搭建 bot 并直接暴露问题、提供根因分析，参与度较高。

4. **🏗️ Skill 生态入门门槛**（Issue [#652](https://github.com/sipeed/picoclaw/issues/652)）：`skill-creator` 技能文档引用不存在的脚本，新用户按文档操作会直接失败。这直接破坏了"Skill 可扩展"这一核心价值的首次体验。PR #3013 修复文档但未提供自动化脚本，**体验未完全修复**。

5. **💰 Evolution 成本焦虑**（Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012)）：用户开启 Draft 模式后持续被收取 token 费用，对"自主进化"功能的成本不可预期感到担忧。核心用户对 AI Agent 的自动化行为有更严格的成本控制需求。

---

## 8. 待处理积压

⚠️ **以下 Issue/PR 长期未响应，建议维护者优先关注**：

| 编号 | 类型 | 创建时间 | 最后活跃 | 标题 | 风险等级 |
|---|---|---|---|---|---|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Issue | 2026-06-05 | 2026-06-05 | Evolution 模式 token 持续消耗 | 🔴 高（新发，核心功能回归） |
| [#652](https://github.com/sipeed/picoclaw/issues/652) | Issue | 2026-02-22 | 2026-06-05 | skill-creator 无法运行 | 🟡 中（文档已修，脚本缺失未解决） |
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) | PR | 2026-05-28 | 2026-06-05 | 入站图片压缩策略 | 🟡 中（实现完整，需 review） |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | PR | 2026-04-16 | 2026-06-05 | Channel 多实例支持架构重构 | 🟠 中高（近 2 个月 stale，涉及核心改造） |

> **维护者建议**：
> - **立即响应 #3012**：该问题可能导致用户产生高额 API 费用，应至少在 Issue 中确认复现并给出临时规避方案（如设置 Evolution 时间窗口或 token 上限）。
> - **评估 #2964 合并时机**：图片压缩策略实现已完整，可与 Nightly 版本一同进入测试周期。
> - **决策 #2551 去向**：近 2 个月的 stale PR，建议 maintainer 明确反馈是否需要重构 scope 或直接关闭，避免贡献者精力浪费。

---

**总结**：PicoClaw 6 月 5 日处于一个集中合并期，安全、稳定性和通道兼容性均有实质进展。新暴露的 Evolution token 消耗问题是当前最高优先级风险。项目整体健康度良好，但积压的架构级 PR 和 Skill 生态工具链的完整性仍需 maintainer 层面做出明确决策。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw 项目动态日报  
**日期：2026-06-06**

---

### 1. 今日速览  
过去24小时内，NanoClaw 项目整体活跃度中等：无新 Issue 提交，但收到 3 个 Pull Request 更新，其中 2 个已关闭（含合并），1 个开放中。无新版本发布。项目当前处于稳定维护阶段，主要聚焦于错误处理优化与用户体验改进。社区贡献集中在 API 错误重试机制和身份认证流程的简化上。

---

### 2. 版本发布  
无。

---

### 3. 项目进展  

- **[PR #2691](https://github.com/nanocoai/nanoclaw/pull/2691)**（已合并）：  
  修复了 Hugging Face (HF) token 缺失时 OneCLI 引导用户前往错误 setup URL 的问题。现在系统能正确返回容器背后实际运行网关的 URL，避免硬编码带来的环境适配问题。此变更提升了自托管场景下的用户引导准确性。

- **[PR #2690](https://github.com/nanocoai/nanoclaw/pull/2690)**（已合并）：  
  简化 HF token 的初始化逻辑，并修正了 `secret-mode` 的文档说明。明确指出新创建代理默认使用 `all` secret 模式（非 `selective`），删除了冗余的逐代理赋值步骤，同时更新 `upload-trace.ts` 相关逻辑以匹配实际行为。该 PR 清理了配置误解点，增强了文档与实现的一致性。

> 项目整体在用户初始化体验和背景知识配置方面向前迈进一步，减少新用户上手摩擦。

---

### 4. 社区热点  

- **最高关注度 PR**：[#2692](https://github.com/nanocoai/nanoclaw/pull/2692)（开放中，0 👍）  
  虽然尚无点赞，但作为唯一活跃的 PR，其提出的“对 Claude Agent SDK 内部重试耗尽后的 transient 5xx 错误进行二次重试”属于稳定性增强方向，可能解决生产环境中的 transient 故障下的任务中断问题。社区反馈尚待观察，设计意图符合提高弹性系统的常见实践。

---

### 5. Bug 与稳定性  

- **关键稳定性问题**（有修复 PR）：  
  **[PR #2692](https://github.com/nanocoai/nanoclaw/pull/2692)** 正在解决 Claude Agent SDK 在遇到 5xx（如 `529 Overloaded`）错误时，因内部重试耗尽而将错误伪装为“正常结束结果”（`is_error: true` 但非异常抛出）的问题。若不处理，上层逻辑可能误判任务成功，导致静默失败。  
  → **状态**：已有 fix PR，待评审合并。

- **已修复 Bug**：  
  - PR #2691：HF token 缺失时错误展示 setup URL 的问题（已合并）  
  - PR #2690：`secret-mode` 文档与实现不一致问题（已合并）

无崩溃或回归问题报告。

---

### 6. 功能请求与路线图信号  

过去24小时无新功能请求（Issues 为 0）。  
但从近期 PR 可推断开发重点为：
- **提升 API 层容错能力**（PR #2692）
- **优化本地/自托管部署的用户引导流程**（PR #2691、#2690）

推测下一版本可能聚焦于 **transient 错误处理标准化** 与 **身份凭证管理 UX 改进**，信号已明确体现。

---

### 7. 用户反馈摘要  

- **痛点**：  
  - 用户在未登录 HF 时获得错误的 setup URL（已通过 PR #2691 解决）  
  - 文档对 `secret-mode` 的描述与实际行为不符，导致配置困惑（PR #2690 已修正）

- **满意点**：  
  - 快速响应：两个关键 UX 问题均在创建后24小时内合并，体现维护者高效响应社区需求

总体用户反馈集中在**初始配置体验上**，对易用性要求较高。

---

### 8. 待处理积压  

- **唯一开放 PR**：[#2692](https://github.com/nanocoai/nanoclaw/pull/2692)  
  创建与更新均为 2026-06-05，尚无评论。建议维护者及时安排评审，避免成为沉默的技术债务。  
  → 该 PR 涉及核心错误处理逻辑，优先级较高。

- 无积压 Issue（过去24小时零 Issue，历史需另行审计）

---

**总结简述**：NanoClaw 今日处于稳健发育期，无重大变故。两项 PR 高效合并优化部署体验，一项悬置 PR 瞄准 API 弹性，建议尽快处理存量 PR。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-06

---

## 1. 今日速览

NullClaw 今日整体活跃度极低，过去 24 小时内 Issues 零更新（新开与关闭均为 0），PR 仅有 1 条新增且仍处于开放状态，无版本发布。该开源 AI 智能体框架处于典型的静默期，社区贡献以单次 Provider 接入 PR 为主，未见维护者密集响应或批量合并动作。项目无 Bug 报告或紧急问题浮现，整体处于稳定但低活跃状态。

---

## 2. 版本发布

过去 24 小时内无新版本发布，本节省略。

---

## 3. 项目进展

过去 24 小时内 **零 PR 被合并或关闭**，无实质性代码推进至主分支。当前唯一活跃 PR 仍处于 Open 状态，项目版本内容无变化。

---

## 4. 社区热点

| 编号 | 类型 | 标题 | 备注 |
|---|---|---|---|
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | PR | feat(providers): add Evolink as an OpenAI-compatible provider | ✅ 今日唯一更新项 |

**背景与诉求分析：** EvolinkAI 提交 PR #947，希望将 **Evolink**（evolink.ai）以一等 Provider 的身份集成进 NullClaw。Evolink 本身是一个多模型网关，将 GPT-5、Gemini、DeepSeek、Doubao、MiniMax 等模型统一封装在一个兼容 OpenAI `/v1/chat/completions` 的端点后方，仅需 Bearer-token 认证即可接入。

该 PR 反映出用户希望 NullClaw 能够更广泛拥抱第三方聚集型 AI Gateway，降低多模型切换的配置成本。这与项目"多 Provider 兼容"的路线方向高度一致。PR 目前尚无评论与👍，维护者尚未评审。

---

## 5. Bug 与稳定性

过去 24 小时内 **无 Bug 报告、崩溃或回归问题**，项目稳定性无异常。

---

## 6. 功能请求与路线图信号

| 信号来源 | 描述 | 与路线图的契合度 |
|---|---|---|
| PR [#947](https://github.com/nullclaw/nullclaw/pull/947) | Evolink Provider 接入 | 高 — 多 Provider 支持是核心能力 |

该 PR 反映的"第三方多模型网关（Gateway）优先接入"诉求可能成为后续版本的方向性信号。类似的需求（其他 Gateway Provider 接入）可能会在下一个版本规划中被批量纳入。

---

## 7. 用户反馈摘要

今日无用户反馈（Issues 更新为 0）。从 PR #947 的发起行为可以推断，用户在使用中遇到了 **需要配置多个不同 AI 模型的痛点**，希望通过 Gateway 统一管理，减少逐一 Provider 配置的负担。这是多模型使用场景下的典型诉求。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 状态 | 建议 |
|---|---|---|---|---|
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | PR | feat(providers): add Evolink as an OpenAI-compatible provider | 🟡 OPEN（创建至今 1 天，无评论） | 建议维护者尽快评审，确认 Provider 目录规范与配置字段是否对齐 |

由于该项目长期公开 Issues/PR 总数未提供，无法列出更多积压项。建议维护者整体回顾超过 7 天无响应的 Community PR。

---

> **数据来源：NullClaw GitHub（github.com/nullclaw/nullclaw）** | 日报生成时间：2026-06-06 | 生成工具：OWL AI 项目分析引擎

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 · 2026-06-06

---

## 1. 今日速览

IronClaw 今日处于**高活跃度开发期**，24 小时内共 63 条 Issue/PR 更新，其中 PR 更新多达 50 条（28 条待合并，22 条已合并/关闭），显示大量前期排队 PR 正在被批量处理与合并。Issues 方面净增 7 条（新开/活跃 10 条，关闭 3 条），问题积压小幅上升。**无新版本发布**，但项目处于 v0.29.1 阶段，多个功能分支持续集成中。整体健康度：**活跃但积压增长，需关注 CI 稳定性**。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为 v0.29.1。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在三大方向：

### 🎣 挂钩框架生产化收官（Hooks Framework）
- **PR #3938 ✅ 合并** — 将 hook 框架生产线径正式引入 `HOOKS_ENABLED` 标志位（默认关闭），实现"暗部署"（ships dark），不影响现有生产行为。
- **PR #3951 ✅ 合并** — 第三方扩展 hook 激活，采用 "hook-only projection" 隔离模型，通过 `HOOKS_THIRD_PARTY_ENABLED`（默认 OFF）控制。
- **PR #3931 → #3937（4 个耐用后端 PR）** — 围绕持久化 hook 后端的事务性修复、跨后端对抗性测试套件全量合并完成。

> **信号**：整个 hook 子系统的地基 + 安全加固 + 多后端适配在一个冲刺窗口内集中落地，说明该项目正在从原型走向生产就绪的扩展能力阶段。

### 🔒 安全加固
- **PR #3931 ✅ 合并** — 修复 3 个 CRITICAL 级安全漏洞：跨租户泄漏、重放攻击、服务商伪造。全部采用 fail-closed 方式修复，TDD 覆盖（先写失败测试再修复）。
- **PR #3922 ✅ 合并** — 将 `SecurityAuditSink` 连接到义务处理器和 hook 拒绝路径，补全了审计链路的最后两段。

### 🔧 维护 & 依赖
- 2 个 Dependabot PR（#4002, #4503）仍在开放中，涵盖 16+38 个 GitHub Actions 和 Rust 依赖项更新，存在较大 rebase 冲突风险，建议优先处理。
- PR #3941 ✅ 合并 — 清理了之前合并遗留的死 API 和可维护性 follow-up。

---

## 4. 社区热点

### 🔥 Issue #4311 — Reborn 模型网关将预算治理错误折叠为上下文溢出恢复
**[nearai/ironclaw#4311](https://github.com/nearai/ironclaw/issues/4311)**
- **标签**：scope: agent, scope: llm, reborn, M3-agentloop-turns
- **痛点**：错误映射过于粗糙，多种非上下文的预算治理失败被统一折叠为 `BudgetExceeded`， agent loop 将其当作 `ContextOverflow` 处理，导致错误的恢复策略（本应中止或降级，却触发了上下文压缩）。
- **背后诉求**：希望对 budget governance 的错误分类更加精细化，避免误用恢复路径。

### 🔥 Issue #4488 + PR #4506 — ProductWorkflow 拆分为 submit/read/subscribe 三门
**[nearai/ironclaw#4488](https://github.com/nearai/ironclaw/issues/4488)** · **PR #4506 OPEN**
- **标签**：reborn, M2-inbound-workflow
- **背景**：这是 Issue #3280 的子任务，为 OpenAI 兼容 API 接线建立清晰的 effect boundary。
- **诉求**：`submit_inbound`（写入）、`read_projection`（只读）、`subscribe`（订阅）三扇门的分离，使后续 OpenAI wiring 拥有稳定的不变量边界。
- **进展**：Issue 和 PR 同日创建，作者 danielwpz 已自行推进实现，等待 review。

### 🔥 Issue #4491 — 使用 Slack AI streaming 替代临时方案
**[nearai/ironclaw#4491](https://github.com/nearai/ironclaw/issues/4491)**
- **背景**：PR #4490 加入的 "Ironclaw is thinking..." → 完成后删除 的交互是临时方案（stopgap）。
- **诉求**：Slack 端应使用原生 streaming 消息推送体验，类似 ChatGPT 的打字机效果。

### 🚨 Issue #4108 — Nightly E2E 持续失败
**[nearai/ironclaw#4108](https://github.com/nearai/ironclaw/issues/4108)**
- **最新报告**：2026-06-05 04:44 UTC 再次失败
- **影响面**：需要排查是否是基础设施问题还是代码回归。自 5 月 27 日开启后持续未解决，已成为**积弊 Issue**。

---

## 5. Bug 与稳定性

| 严重度 | Issue / PR | 描述 | Fix PR | 状态 |
|--------|-----------|------|--------|------|
| 🔴 High | [#4512](https://github.com/nearai/ironclaw/issues/4512) | 并发沙箱的 `job_semaphore` 已定义但从未被 `.acquire()`，等于形同虚设，失去并发保护 | 无 | **未修复** |
| 🔴 High | [#4311](https://github.com/nearai/ironclaw/issues/4311) | Reborn 预算治理错误分类错误，导致错误恢复策略 | 无 | **未修复** |
| 🟠 Medium | [#4502](https://github.com/nearai/ironclaw/issues/4502) | WeCom 群聊审批回复无效（回复 y/yes/always 无法通过） | 无 | **未修复** |
| 🟠 Medium | [#4500](https://github.com/nearai/ironclaw/issues/4500) | 渠道配对完成后 onboarding system event 被写入错误的 conversation | 无 | **未修复** |
| 🟡 Low | [#4505](https://github.com/nearai/ironclaw/issues/4505) | Web UI 侧边栏群聊标题不可区分 | 无 | **未修复** |
| ⚫ CI | [#4108](https://github.com/near222222ai/ironclaw/issues/4108) | Nightly E2E 持续失败（自 5/27 起） | 无 | **未修复** |

**关键提醒**：Issue #4512 是今日新发现的安全相关 bug（信号量未使用），建议**高优先级**处理。

---

## 6. 功能请求与路线图信号

| 方向 | Issue / PR | 信号强度 | 判断 |
|------|-----------|---------|------|
| **ProductWorkflow 架构拆分** | #4488 + #4506 | 🟢 强 | PR 已存在，极可能在下版本合并 |
| **Slack 原生 streaming** | #4491 + #4510 | 🟢 强 | #4510 已 OPEN，正在推进 admin wiring |
| **IronHub 安装流程 Reborn 化** | #4479 | 🟡 中 | XL PR，含签名验证、能力门控，复杂度较高 |
| **运行时 profile 接入审批门控** | #4390 | 🟡 中 | L 尺寸，核心贡献者推动，预计中期合并 |
| **外送偏好 facade 合约** | #4511 | 🟡 中 | Phase 1 合约在做，PR 刚提交 |
| **WeCom 群聊审批修复** | #4502 | 🔴 需关注 | 关键功能失效，用户阻塞，尚未有 fix PR |

**预测下一版本 (v0.30.0?) 可能包含**：ProductWorkflow 拆分、Hook 框架全面激活（flag 转正）、IronHub Reborn 安装流程、Slack streaming 替换。

---

## 7. 用户反馈摘要

### ✅ 满意点（从 Issue 中逆推）
- WeCom 渠道整体核心文本消息流程"基本稳定"
- 配对/重连/持久化/Markdown/Emoji/多语言支持"运作良好"（Issue #4191 总结）

### ❌ 痛点
1. **WeCom 群聊体验差**：审批流程不可用（#4502）、群聊标题不可区分（#4505）—— 三个相关 Issue 集中在同一天开启，说明用户**刚做了一个深度 staged 回归测试后批量提交**。
2. **渠道 onboarding 事件错位**（#4500）：配对完成后的 event 被写入旧 conversation，影响 Telegram 和 WeCom 两端，说明这是通用渠道框架的 bug。
3. **错误恢复策略迷途**（#4311）：预算耗尽与上下文溢出被混淆，用户观察到"行为怪异"但难以定位根因。
4. **Nightly E2E 持续失败**（#4108）：自动化质量门禁已破损近 10 天，社区信心或受影响。

### 场景推断
用户群主要为企业微信（WeCom）集成用户 + Slack 渠道用户 + AI agent 开发者，部署环境以 staging 为主，正在从 v0.29.0 向 v0.29.1 迁移验证中。

---

## 8. 待处理积压

| Issue/PR | 创建日期 | 天数 | 状态 | 风险 |
|----------|---------|------|------|------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | 2026-05-27 | 10 天 | Nightly E2E 持续失败 | 🔴 CI 门禁失效应在 48h 内处置 |
| [#4191](https://github.com/nearai/ironclaw/issues/4191) | 2026-05-28 | 9 天 | WeCom 渠道验证多项发现 | 🟠 多个 sub-issue 已单独跟进，主 Issue 需关闭汇聚 |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) | 2026-05-16 | 21 天 | Release PR 含 Breaking Changes | 🟠 发布流程阻塞 |
| [#4311](https://github.com/nearai/ironclaw/issues/4311) | 2026-06-01 | 5 天 | Reborn 错误分类 bug | 🟡 已有讨论但未分配 |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) | 2026-05-24 | 13 天 | Dependabot Actions 16 项升级 | 🟡 CI 依赖老化 |
| [#4502](https://github.com/nearai/ironclaw/issues/4502) | 2026-06-05 | 1 天 | WeCom 审批回复失效 | 🔴 用户阻塞 |

### 💡 给维护者的建议
1. **立即排查** #4108（Nightly E2E 失败根因），这是信任基线问题。
2. **组织 WeCom 专题修复日**：#4502、#4505、#4500 三个 Issue 高度关联且均为渠道框架层问题，可由一人集中修复。
3. **推进 #4512** （job_semaphore 未使用）为高优先级安全修复，复杂度低但影响大。
4. **关闭/汇聚 #4191**：其 sub-issue 已独立跟踪，避免主 Issue 无限膨胀。

---

*报告生成时间：2026-06-06 · 数据来源：GitHub ironclaw (nearai/ironclaw) · 生成器：OWL 项目分析引擎*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-06-06

---

## 1. 今日速览

LobsterAI 在 2026-06-5 经历了高度活跃的一天：**13 个 PR 全部合并/关闭**，且无一个 PR 处于待合并积压状态，流水线消化能力极强。发布新版本 **2026.6.5**，主要聚焦 Cowork 协作模块的会话同步与键盘快捷键重构。3 个存量 Issue 在当日有新活动，但均为此前已标记为 `[stale]` 的老问题，**无新增 Issue**。整体项目健康度良好，维护响应节奏紧凑，社区 Bug 修复类贡献（安全、权限、统计功能）也得到有效推进。

---

## 2. 版本发布

### LobsterAI 2026.6.5（2026-06-05 发布）

| 条目 | 详情 |
|------|------|
| **Release 链接** | [https://github.com/netease-youdao/LobsterAI/releases](https://github.com/netease-youdao/LobsterAI/releases) |
| **核心变更** | Cowork 渠道会话同步与清理机制优化；键盘快捷键全面重构，扩展可操作动作并改进 UX |
| **对应 PR** | [#2108](https://github.com/netease-youdao/LobsterAI/pull/2108)（会话同步）、[#2108 及快捷键相关 PR](https://github.com/netease-youdao/LobsterAI/pull/2108) |
| **破坏性变更** | 无明确标注 |
| **迁移注意事项** | 键盘快捷键行为发生变更，依赖旧快捷键的用户需重新熟悉映射关系；建议查阅更新后的快捷键说明文档 |

> **注**：此版本为近期一系列 PR（含安全感限修复、语音输入、IM 修复等）的累积交付，实际包含的功能范围远超 release notes 摘要部分，详见下方 PR 分析。

---

## 3. 项目进展

### 今日合并/关闭的 13 个 PR 概览

#### 🔥 核心功能推进

| PR | 标签 | 说明 |
|----|------|------|
| [#2118](https://github.com/netease-youdao/LobsterAI/pull/2118) | cowork, renderer, main | **改进剪贴板复制与提交 UX**：新增多平台剪贴板回退链（Electron → navigator.clipboard → textarea execCommand），修复分享链接和消息复制在各平台的可靠性；无可访问模型时提示登录或订阅 |
| [#2116](https://github.com/netease-youdao/LobsterAI/pull/2116) | cowork, renderer, main | **改进 Cowork 错误 UX 和空状态引导**：对免费额度耗尽错误进行分类并在系统消息中展示升级链接；10 秒内流错误消息去重避免重复横幅；未安装专家套件时在 kits 弹窗中显示安装引导 |
| [#2114](https://github.com/netease-youdao/LobsterAI/pull/2114) | artifacts, cowork, renderer | **增强文件预览与展开面板体验**：Office 缩放/预览切换收纳到更多菜单；修复 Excel 行重叠、PPT 缩放滚动和展开态布局；支持预览面板展开、紧凑输入区、HTML 浏览器预览 |
| [#2112](https://github.com/netease-youdao/LobsterAI/pull/2112) | openclaw, renderer, main | **订阅提示与 OpenClaw 修复流程**：锁定计划模型点击后弹出登录/订阅提示而非静默禁用；限制条目显示锁图标保持可见；防止锁定模型被选为默认/每个 Agent 的模型 |
| [#2115](https://github.com/netease-youdao/LobsterAI/pull/2115) | im, main, docs | **IM 回复仅基于当前轮次消息组装**，防止历史消息混入回复；替代 VBScript 启动器为 PowerShell 分离进程 |
| [#2113](https://github.com/netease-youdao/LobsterAI/pull/2113) | voice, build, macos | **macOS 麦克风权限请求**：添加麦克风使用描述与音频输入授权；注册可信的渲染进程媒体权限策略；新增 ASR 请求诊断功能 |

#### 🐛 安全与稳定性修复

| PR | 标签 | 说明 |
|----|------|------|
| [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | renderer | **迁移后保留用户已删除的 Provider 模型**：追踪 Provider 模型迁移版本，仅注入一次新增默认模型；添加全供应商回归测试覆盖 |
| [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) | security | **避免 API 代理日志泄露凭证与完整响应体**：URL 仅保留协议+主机+路径（去除 query/hash）；请求/响应详情仅记录数量和字节数，不再记录具体内容 |
| [#1535](https://github.com/netease-youdao/LobsterAI/pull/2115) | security | **渲染进程 KV Store IPC 增加键白名单**：阻止渲染进程读写 `auth_tokens`、`enterprise_config` 等敏感数据，加固纵深防御 |
| [#367](https://github.com/netease-youdao/LobsterAI/pull/367) | mcp | **导入 MCP JSON Streamable HTTP 配置**：启动时将 `userData/mcp.json` 导入 SQLite-backed MCP Store；规范化外部 `streamable_http` 配置为内部 `http` 传输；UI 中区分 SSE 与 Streamable HTTP |

#### 🎨 UI 改进与清理

| PR | 标签 | 说明 |
|----|------|------|
| [#1531](https://github.com/netease-youdao/LobsterAI/pull/1531) | settings | **主题色选择器重构**：用对角渐变色圆圈替代多卡片网格 |
| [#1533](https://github.com/netease-youdao/LobsterAI/pull/1533) | cowork | **设置页新增本地会话使用统计面板**：基于 SQLite 展示总会话/消息数、今日/本周数据 |
| [#2119](https://github.com/netease-youdao/LobsterAI/pull/2119) | release | **2026.6.4 版本发布**（累积此前 Cowork、语音输入、Artifacts、快捷键和更新模块的变更） |

#### 📊 今日进展评估

**项目整体向前推进了显著一步**：本日交付了涵盖 **安全加固（2 项）、Cowork 核心体验（3 项）、语音/IM/OpenClaw（3 项）、文件预览（1 项）、UI 改进（2 项）、MCP 兼容性（1 项）和版本发布（1 项）** 的 13 个 PR。全部 13 个 PR 当日关闭，零积压，项目节奏极为高效。尤其值得关注的是两个安全类 PR 的落地，说明团队对安全债务的重视。

---

## 4. 社区热点

### Issue 活动排行（按当日更新排序）

| Issue | 热度信号 | 分析 |
|-------|---------|------|
| [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) | 2 条评论，当日更新 | **会话中调用 Python 脚本异常**（2 条👍，创建于 4 月 5 日）。作者在本地 30B 模型下复现，同样的 skills 在 Claude Code CLI 及其他环境正常。这指向 LobsterAI 的本地模型执行环境或沙箱可能存在兼容性缺陷。底层诉求：**本地模型的工具调用稳定性**。 |
| [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) | 1 条评论，当日更新 | **切换会话时输入框草稿丢失**（1 条👍，创建于 4 月 4 日）。因 300ms 去抖机制未在组件卸载时立即持久化到 Redux。底层诉求：**输入状态的可靠持久化**。 |
| [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) | 1 条评论，当日更新 | **重新编辑历史消息直接覆盖当前输入框内容，无确认提示**（1 条👍，创建于 4 月 4 日）。底层诉求：**防止用户内容意外丢失的确认机制**。 |

> **观察**：3 个活跃 Issue 均为 `[stale]` 状态（创建距今约 2 个月），说明维护者尚未深度介入这些 Bug 的修复。[#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) 和 [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) 均由同一用户（MaoQianTu）报告，反映的是 Cowork 输入体验的系统性问题。

---

## 5. Bug 与稳定性

### 当日报告/活跃的 Bug（按严重程度排列）

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|----------|-------|------|--------|------|
| 🔴 **高** | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) 会话中 Python 脚本调用失败 | 本地 30B 模型下执行异常，其他环境正常，涉及工具调用的核心路径 | ❌ 无 | 未修复 |
| 🟡 **中** | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) 切换会话时输入框草稿因去抖未持久化丢失 | Redux 去抖在组件卸载时被清除，数据丢失 | ❌ 无明确关联 PR | 未修复 |
| 🟡 **中** | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) 编辑历史消息静默覆盖未发送的输入内容 | 无确认对话框，用户内容直接丢失 | ❌ 无明确关联 PR | 未修复 |

**已在本日 PR 中修复的稳定性问题**（历史积累）：
- 免费额度耗尽错误分类与去重、IM 消息组装逻辑修正、macOS 麦克风权限管理等均间接提升了系统稳定性。

---

## 6. 功能请求与路线图信号

本日从 PR 活动可推断的下一版本（或近期）方向：

| 信号来源 | 推断方向 | 说明 |
|----------|---------|------|
| [#2112](https://github.com/netease-youdao/LobsterAI/pull/2112) + [#2116](https://github.com/netease-youdao/LobsterAI/pull/2116) | **订阅与付费转化体验持续优化** | 锁定模型的订阅提示、免费配额耗尽的升级链接均已落地，说明商业化转化流程是近期的核心迭代方向 |
| [#2114](https://github.com/netease-youdao/LobsterAI/pull/2114) | **文件预览体系深化** | Office/PDF/Excel/PPT 预览体验连续迭代，可能计划成为 Cowork 的核心卖点 |
| [#2113](https://github.com/netease-youdao/LobsterAI/pull/2115) | **语音输入能力扩展** | macOS 麦克风权限 + ASR 诊断刚落地，后续可能扩展更多语音平台或改进识别准确度 |
| [#367](https://github.com/netease-youdao/LobsterAI/pull/367) | **MCP 生态兼容性** | MCP Streamable HTTP 导入支持落地，说明 MCP 协议兼容是持续投入方向 |
| [#2108](https://github.com/netease-youdao/LobsterAI/pull/2108) / Release notes | **键盘快捷键体系** | 快捷键全面重构，后续可能开放自定义快捷键配置 |

---

## 7. 用户反馈摘要

### 痛点

1. **本地模型工具调用不可靠**（[#1487](https://github.com/netease-youdao/LobsterAI/issues/1487)）：
   - 使用本地 30B 模型执行 Python 脚本失败，但同样的 skills 在 Claude Code CLI 中正常。
   - **用户真实诉求**：LobsterAI 的本地执行环境需要与其他主流 CLI 工具对齐稳定性。
   - 附截图，说明用户有一定技术能力，可协助定位问题。

2. **Cowork 输入体验的系统性缺陷**（[#1471](https://github.com/netease-youdao/LobsterAI/issues/1471)、[#1472](https://github.com/netease-youdao/LobsterAI/issues/1472)）：
   - 两位同一作者的 Bug 报告均涉及**用户已输入但未保存的内容被意外覆盖或丢失**。
   - **用户真实诉求**：输入框内容的安全保障——无论是草稿持久化还是覆盖前的确认提示。
   - 描述中提供了详细的复现步骤和期望行为，说明反馈质量较高。

### 满意信号

- 本日 PR 中来自社区贡献者（fisherdaddy、liuzhq1986、liugang519、kayo5994、btc69m979y-dotcom、leedalei、MaoQanTu、fancyboi999 等）的工作被快速合并，说明社区协作氛围良好。
- 安全类修复的快速落地表明团队对安全反馈响应迅速。

---

## 8. 待处理积压

| 类型 | Issue/PR | 创建/最后更新 | 等待时长 | 建议优先级 |
|------|----------|--------------|---------|-----------|
| 🐛 Bug | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) 会话 Python 脚本调用失败 | 2026-04-05 / 2026-06-05 | ~2 个月 | 🔴 高 — 涉及核心工具调用路径，且已有 2 条评论表明多人受影响 |
| 🐛 Bug | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) 草稿去抖丢失 | 2026-04-04 / 2026-06-05 | ~2 个月 | 🟡 中 — 高频操作路径，300ms 窗口内切换属于常见场景 |
| 🐛 Bug | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) 编辑覆盖无确认 | 2026-04-04 / 2026-06-05 | ~2 个月 | 🟡 中 — 内容静默丢失属于严重 UX 问题，修复成本低（增加确认对话框） |
| 🔧 PR | [#367](https://github.com/netease-youdao/LobsterAI/pull/367) MCP JSON 导入 | 2026-03-10 / 2026-06-05 | ~3 个月 | ✅ 已合并（本日关闭） |
| 🔧 PR | [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) 安全日志修复 | 2026-04-07 / 2026-06-05 | ~2 个月 | ✅ 已合并（本日关闭） |
| 🔧 PR | [#1535](https://github.com/netease-youdao/LobsterAI/pull/2115) KV Store 白名单 | 2026-04-07 / 2026-06-05 | ~2 个月 | ✅ 已合并（本日关闭） |

### ⚠️ 维护者关注建议

**3 个 `[stale]` Issue 已积压约 2 个月**，建议：
1. **对 [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) 优先响应** — 工单已有社区复现材料，可安排定位。即使短期不能修复，也应回复确认。
2. **[#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) 与 [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) 可在同一 PR 中一并修复** — 均涉及 Cowork 输入框的内容生命周期管理，修复逻辑相近（一个是 unmount 时立即 flush 去抖定时器，一个是编辑前检查输入框内容并弹出确认）。
3. 积压的 stale PR 已全部在本日清除，当前无 PR 积压状态，**流水线健康度优秀**。

---

*日报生成时间：2026-06-06 · 数据来源：LobsterAI GitHub 仓库（netease-youdao/LobsterAI）· 覆盖时段：2026-06-05*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-06

> 来源：[moltis-org/moltis](https://github.com/moltis-org/moltis) · 数据统计窗口：过去 24 小时

---

## 1. 今日速览

过去 24 小时，Moltis 共产生 **4 条 Issue 更新**（3 开/活跃，1 关闭）和 **5 条 PR 更新**（4 待合并，1 已合并关闭），代码活动量中等偏活跃。一个重要的 Telegram streaming 显示 Bug 已通过合并 PR 正式关闭，同期 3 个新 Issue 和 4 个新 PR 快速跟进，说明社区响应节奏良好。无新版本发布，项目目前处于持续迭代优化阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭：修复 Telegram 流式输出混叠问题

| 编号 | 类型 | 摘要 |
|---|---|---|
| [#1099](https://github.com/moltis-org/moltis/pull/1099) | PR（已合并关闭） | **Separate Telegram progress stream from final replies** — 将 Telegram 流式进度提示与最终回复分离开来 |
| [#1097](https://github.com/moltis-org/moltis/issues/1097) | Issue（已关闭） | **Telegram edit-in-place streaming mixes intermediate output into final reply** — 同一 Bug 报告 |

**进展说明：** 这是今日唯一完成闭环的事项。PR #1099 通过将 Telegram 的流式输出改为"临时进度消息"，在流式推送时编辑一条静音进度消息，流结束后删除该消息，再单独发送最终回复。此方案有效解决了用户看到的"中间结果混入最终回复"的体验问题。

**项目进度评估：** ✅ 关键 UX 闭环 1 项，其余 4 个新 PR 全部为同日新提交，尚未进入合并阶段。

---

## 4. 社区热点

当前没有出现高评论量（>3 条）或高赞爆发的热点 Issue/PR。以下按贡献集中度突出的作者分析活跃方向：

| 作者 | 活动 | 关注方向 |
|---|---|---|
| [s-salamatov](https://github.com/moltis-org/moltis/issues?q=author%3As-salamatov) | 3 PR + 1 Issue | Telegram 流式 UX、会话历史工具结果上限 |
| [penso](https://github.com/moltis-org/moltis/issues?q=author%3Apenso) | 3 个同日开放 PR | 沙箱兼容性（Podman/Docker）、provider 模型偏好管理 |
| [IlyaBizyaev](https://github.com/moltis-org/moltis/issues?q=author%3AIlyaBizyaev) | 2 Bug + 1 Feature | Web UI 体验（Docker 提示横幅、时间格式、移动端输入） |

*当前社区关注焦点呈两个明显聚类：① 多平台部署兼容性（容器/沙箱方向），② Web UI 细节打磨。*

---

## 5. Bug 与稳定性

### 🔴 高优先级

| 编号 | Bug 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#1097](https://github.com/moltis-org/moltis/issues/1097) | Telegram 流式消息将中间输出混入最终回复，用户体验严重受损 | ✅ 已关闭 | [#1099](https://github.com/moltis-org/moltis/pull/1099)（已合并） |

### 🟡 中优先级

| 编号 | Bug 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#1109](https://github.com/moltis-org/moltis/issues/1109) | 更新提示横幅未考虑 Docker 安装方式，容器用户被错误提示更新 | 开 | — |
| [#1108](https://github.com/moltis-org/moltis/issues/1108) | Web UI 会话列表仅显示时间未显示日期，昨日会话无法辨认 | 开 | — |

### 🟢 低优先级（沙箱稳定性改进）

| 编号 | 描述 | 状态 | 对应 PR |
|---|---|---|---|
| [#1105](https://github.com/moltis-org/moltis/pull/1105) | Docker 沙箱文件系统工具回退逻辑 + 诊断信息改进 | PR 开放中 | 自我 fix PR |
| [#1106](https://github.com/moltis-org/moltis/pull/1106) | Podman 沙箱逃逸通道 + rootless Podman 失败诊断 | PR 开放中 | 自我 fix PR |

---

## 6. 功能请求与路线图信号

| 编号 | 需求 | 类型 | 信号强度 |
|---|---|---|---|
| [#1107](https://github.com/moltis-org/moltis/issues/1107) | 移动端 Web UI 增加多行文本输入 | Enhancement | 🟡 未否决，但距下一版本较远 |
| [#1104](https://github.com/moltis-org/moltis/pull/1104) | 允许替换/清除 provider 的优选模型（PR 已在审） | Enhancement | 🟢 已有 PR，近期可落地 |

**判断：** PR #1104 属于中小型后端功能，测试已就绪，最可能率先合入。Issue #1107 的移动端多行输入属纯前端 Issue，目前无任何开发分支信号，预计短期内不会进入下一版本。

---

## 7. 用户反馈摘要

从今日 Issue 中提取的用户真实痛点与使用场景：

**① 部署方式碎片化导致 UI 提示逻辑割裂**
> *用户（IlyaBizyaev，Issue [#1109](https://github.com/moltis-org/moltis/issues/1109)）* 明确反映了：Docker 部署用户被"更新横幅"误导——横幅检测逻辑未能识别 Docker 环境。**隐含诉求：** 需要一条根据部署方式自适应的 UI 提示通道。

**② Web 端历史会话信息不完整**
> *用户（IlyaBizyaev，Issue [#1108](https://github.com/moltis-org/moltis/issues/1108)）* 指出会话列表无法区分昨日与今日会话。**隐含诉求：** 历史会话管理是重度用户的刚需，纯时间显示不足。

**③ 移动端输入体验欠缺**
> *用户（IlyaBizyaev，Issue [#1107](https://github.com/moltis-org/moltis/issues/1107)）* 请求移动端多行输入框。**隐含诉求：** 手机浏览器用户增长，UI 需要响应式适配，而非仅面向桌面端设计。

> **整体情感：** 中性偏建设性。三位新 Issue 报告者均完成了全部预检清单，体验问题细致具体，未出现情绪化表达，说明用户群体成熟度较高。

---

## 8. 待处理积压

### ⚠️ 建议维护者关注的长期开放 PR

| 编号 | 提交日期 | 已开放天数 | 摘要 | 风险提示 |
|---|---|---|---|---|
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | 2026-06-01 | 5 天 | Cap persisted tool results before rehydration | 影响会话历史重加载逻辑，涉及 chat、streaming、compaction 等多个核心路径，合并需谨慎 |

**状态分析：** PR #1089 已开放 5 天（超出平均响应窗口），作者为活跃贡献者 s-salamatov，但至今无 review 评论（评论字段为 `undefined`）。该 PR 涉及会话历史重加载的底层逻辑，影响面广，建议维护者在今日或明日内给出首次 review 反馈，防止贡献者流失。

### 📋 积压 Bug（无 fix PR）

| 编号 | 创建日期 | 已开放天数 | 摘要 |
|---|---|---|---|
| [#1109](https://github.com/moltis-org/moltis/issues/1109) | 2026-06-05 | 1 天 | Docker 更新横幅逻辑问题 |
| [#1108](https://github.com/moltis-org/moltis/issues/1108) | 2026-06-05 | 1 天 | Web UI 会话列表缺少日期 |

> 此两项均为今日新开 Issue，尚未进入积压状态，暂无需预警。若 3 天内无响应，则需升级关注。

---

*报告由 OWL 自动生成 · 数据来源：GitHub API · 生成时间：2026-06-06*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报

## 2026-06-06

---

## 1. 今日速览

CoPaw 今日活跃度处于**高水平**，过去24小时内产生24条 Issue 更新和25条 PR 更新，社区参与度持续旺盛。整体呈现"高收敛"特征——15条 PR 已合并/关闭，6条 Issue 已关闭，维护者处理积压的效率较高。今日无新版本发布，但多个修复性 PR 密集合并，项目在**稳定性加固和问题修复**阶段持续推进。值得关注的是，Yuanbao 通道相关集中爆发了多个低级 bug（proto 缺失、字段缺失、兼容性），已被同一位贡献者 rapid-fire 式提交 PR 修复，反映出该功能在 v1.1.10 版本中存在发布前 QA 不足的问题。

---

## 2. 版本发布

**无新版本发布。** 当前最新正式版本仍为近期发布的 v1.1.10。多个今日合并/待合并的修复 PR 可能正在为下一个 patch 版本（v1.1.11 或 v1.2.0）蓄力。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#4972](https://github.com/agentscope-ai/CoPaw/pull/4972) | **Bug Fix** | 启用 LaTeX 数学公式渲染（依赖 KaTeX），修复了 [#4756](https://github.com/agentscope-ai/CoPaw/issues/4756) 中用户反馈公式异常显示的问题 |
| [#4944](https://github.com/agentscope-ai/CoPaw/pull/4944) | **Bug Fix** | 为 browser_use 添加 CDP 超时参数和浏览器用户数据目录隔离，解决 Chrome/Edge 切换时配置文件冲突导致的启动失败（对应 [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919)） |
| [#4905](https://github.com/agentscope-ai/CoPaw/pull/4905) | **Feature** | 为 browser_control 点击操作添加 page_x/page_y 坐标参数支持 |
| [#4934](https://github.com/agentscope-ai/CoPaw/pull/4934) | **Feature** | 新增 OpenSandbox 插件，支持在沙箱环境中执行 shell 命令 |
| [#3403](https://github.com/agentscope-ai/CoPaw/pull/3403) | **Bug Fix** | 延迟内置 Provider 实例化，修复 gunicorn 启动时 pydantic ValidationError 崩溃 |
| [#2079](https://github.com/agentscope-ai/CoPaw/pull/2079) | **Bug Fix** | 修复 Anthropic 工具返回图片内容后后续轮次失败的问题 |
| [#1347](https://github.com/agentscope-ai/CoPaw/pull/1347) | **Bug Fix** | 修复 MCP stdio 客户端崩溃后无法自动重连的问题（修复 #1308 的根因） |
| [#1240](https://github.com/agentscope-ai/CoPaw/pull/1240) | **Bug Fix** | 将状态存储从易损坏的 JSON 文件切换为 SQLite 后端，加固状态存储（对应 #1217） |
| [#4765](https://github.com/agentscope-ai/CoPaw/pull/4765) | **UI Fix** | 安全页面 shield 图标居中 + 规则表列宽调整 |
| [#4766](https://github.com/agentscope-ai/CoPaw/pull/4766) | **UI Fix** | 移除环境变量页面 hover transform，修复滚动条闪烁 |

**项目整体推进评估：** 今日合并的 PR 覆盖了两个方向——**(1) 长期积压的深层 bug 修复**（gunicorn crash、MCP reconnect、Anthropic media replay、state storage 共4个跨越数月的问题集中收网），以及 **(2) 新功能增强**（OpenSandbox 插件、坐标点击、LaTeX 渲染）。这表明项目正在同时推进稳定性债务清理和功能并行开发。

---

## 4. 社区热点

### 🔥 最活跃 Issues（按评论数排序）

| 讨论热度 | Issue | 核心诉求 |
|---|---|---|
| ⭐⭐⭐⭐⭐ | [#4754](https://github.com/agentscope-ai/CoPaw/issues/4754)（7条评论，已关闭） | 用户询问官方桌面客户端两种打包方式（exe/Tauri）的区别，反映用户对**桌面端分发和多平台支持**的关注 |
| ⭐⭐⭐⭐ | [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919)（6条评论，已关闭） | Windows 上 browser_use 启动失败、CDP 超时、浏览器闪退，经调查为 Profile 冲突 → **已提交 PR #4944 修复** |
| ⭐⭐⭐ | [#4770](https://github.com/agentscope-ai/CoPaw/issues/4770)（5条评论，开放中） | 左侧会话列表列顺序不符合直觉 → **已有 PR #4975 在开发中** |

### 🔥 最活跃 PRs

| 讨论热度 | PR | 核心内容 |
|---|---|---|
| ⭐⭐⭐⭐⭐ | [#4822](https://github.com/agentscope-ai/CoPaw/pull/4822) | 修复 share_session Cron agent 产生空 Trace 的问题 |
| ⭐⭐⭐⭐ | [#4884](https://github.com/agentscope-ai/CoPaw/pull/4884) | 修复 channel 替换时未先停止旧 channel 导致的资源泄漏 |

**热点分析：** 当前社区讨论围绕三大主题——**(1) 浏览器自动化工具的稳定性**（browser_use 是高频痛点），**(2) Cron/定时任务功能增强**（多条 Issue 和 PR 集中在此），**(3) Yuanbao 通道的完善**（低级 bug 集中爆发）。用户对桌面端体验（UI布局、跨网络访问、打包方式）也有持续关注。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 🔴 严重（系统崩溃/不可用）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#4968](https://github.com/agentscope-ai/CoPaw/issues/4968) | subprocess fork 因虚拟内存泄漏导致 "Cannot allocate memory" | 🟡 Open | 无 |
| [#4705](https://github.com/agentscope-ai/CoPaw/issues/4705) | Mission Phase 2 在 agent 请求用户输入后仍继续死循环迭代 | ✅ Closed | 已处理 |
| [#4967](https://github.com/agentscope-ai/CoPaw/issues/4967) | Agent 执行过程陷入死循环无法退出（v1.1.10） | 🟡 Open | 无 |
| [#4970](https://github.com/agentscope-ai/CoPaw/issues/4970) | `loop_config.json`/`prd.json` 损坏导致整个 Agent 会话崩溃 | 🟡 Open | 无 |

### 🟠 中等（功能异常/体验受损）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#4976](https://github.com/agentscope-ai/CoPaw/issues/4976) | v1.1.10 wheel 缺失 Yuanbao proto 文件，通道无法启动 | 🟡 Open | 无（需打包修复） |
| [#4977](https://github.com/agentscope-ai/CoPaw/issues/4977) | protobuf 兼容性：`including_default_value_fields` 参数在当前 protobuf 版本中不支持 | 🟡 Open | 无 |
| [#4978](https://github.com/agentscope-ai/CoPaw/issues/4978) | `AuthBindRsp` 缺少 `connectId` 字段，连接跟踪失败 | 🟡 Open | [#4983](https://github.com/agentscope-ai/CoPaw/pull/4983) |
| [#4979](https://github.com/agentscope-ai/CoPaw/issues/4979) | streaming 回复被静默丢弃（`on_streaming_end` 为空） | 🟡 Open | [#4982](https://github.com/agentscope-ai/CoPaw/pull/4982) |
| [#4962](https://github.com/agentscope-ai/CoPaw/issues/4962) | DeepSeek API 回复内容折叠进思考过程，需手动展开 | 🟡 Open | 无 |
| [#4832](https://github.com/agentscope-ai/CoPaw/issues/4832) | Windows shell 命令执行时每次弹出 cmd 窗口（缺少 `CREATE_NO_WINDOW` 标记） | 🟡 Open | 无（PR #4900 部分关联） |

### 🟡 轻微（UI/展示问题）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#4959](https://github.com/agentscope-ai/CoPaw/issues/4959) | LaTeX 公式显示异常 | ✅ Closed | [#4972](https://github.com/agentscope-ai/CoPaw/pull/4972) |
| [#4980](https://github.com/agentscope-ai/CoPaw/issues/4980) | SendC2CMessage 持续报 "bot_id is required" | 🟡 Open | 无 |

⚠️ **特别提醒：** 4个 Yuanbao 通道相关 bug（#4976-#4979）由同一位贡献者集中报告，均源自 v1.1.10 的打包遗漏和 protobuf 定义不完整。PR #4982 和 #4983 正在处理其中两个，但 proto 文件缺失（#4976）和 protobuf 兼容性问题（#4977）仍处于开放状态，建议尽快修复并发布 patch。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 实现状态 | 预计纳入版本 |
|---|---|---|---|
| Cron 任务支持直接执行脚本/shell | [#4963](https://github.com/agentscope-ai/CoPaw/issues/4963) / [#4950](https://github.com/agentscope-ai/CoPaw/issues/4950) | 🟡 讨论中（重复请求，#4950 已关闭） | 需求明确，可能被纳入近期版本 |
| Agent 执行中发送新消息可中断当前任务 | [#4961](https://github.com/agentscope-ai/CoPaw/issues/4961) / [#4964](https://github.com/agentscope-ai/CoPaw/issues/4964) | 🟡 讨论中（#4961 已关闭） | 高频交互场景需求，值得优先 |
| 会话列表列顺序自定义 | [#4770](https://github.com/agentscope-ai/CoPaw/issues/4770) | 🔵 PR 已提交 [#4975](https://github.com/agentscope-ai/CoPaw/pull/4975) | 即将合并 |
| Agent 头像配置 | [#4974](https://github.com/agentscope-ai/CoPaw/issues/4974) | 🟡 开放中 | UI 增强，中等优先级 |
| 会话管理UI优化（快捷切换） | [#4971](https://github.com/agentscope-ai/CoPaw/issues/4971) | 🟡 开放中 | 与 #4770/4974 可组合处理 |
| 同品牌 Provider 卡片合并 | [#4965](https://github.com/agentscope-ai/CoPaw/issues/4965) | 🟡 开放中 | UI 整理，低优先级 |
| Skill 批量下载支持标签过滤 | ~~[#2961](https://github.com/agentscope-ai/CoPaw/issues/2961)~~ | 🔵 PR 已提交 [#4969](https://github.com/agentscope-ai/CoPaw/pull/4969) | 即将合并 |

**路线图信号总结：** 社区当前最强烈的诉求集中在 **(1) Cron 功能增强**（脚本执行、中断能力）和 **(2) 会话管理 UI 优化**（列顺序、快捷切换、头像）。这两个方向已有活跃 PR 跟进，预计在下一个版本中会有所体现。中断 Agent 执行（#4961/#4964）属于交互层面的核心体验改进，值得关注。

---

## 7. 用户反馈摘要

### 痛点（不满意）

- **Yuanbao 通道在 v1.1.10 几乎不可用**：多位用户（ABAC-123456 连续提交4条）反馈 proto 文件缺失、字段不足、protobuf 兼容性问题，需逐个 workaround 才能运行。用户对发布质量有明显不满。
- **browser_use 在 Windows 上体验差**：CDP 超时、浏览器闪退（#4919）、shell 命令执行时 cmd 窗口闪烁（#4832），Windows 用户的体验明显落后于 Linux/macOS。
- **Agent 死循环无退出机制**：用户遇到 Agent 陷入死循环后完全无法干预（#4967），且执行过程中发消息无法中断（#4961），在实时交互场景中严重影响可用性。
- **配置/状态文件损坏导致全面崩溃**：`loop_config.json` 或 `prd.json` 损坏直接让 Agent 完全不可用（#4970），缺乏容错和恢复机制。
- **移动端/局域网访问桌面版困难**：用户希望从手机浏览器访问控制台但遭遇各种网络问题（#4960），文档支持不足。

### 满意/认可

- 社区对 LaTeX 公式渲染的修复响应积极（#4756 → #4972 快速关闭）。
- 新用户（first-time-contributor）持续涌入提交 PR，社区贡献活跃度健康。

### 使用场景

- **沙箱化执行**：用户希望通过 OpenSandbox 在隔离环境中执行不可信代码（PR #4934 反映此需求）。
- **定时自动化任务**：大量 Cron 相关请求（#4963、#4950）表明用户将 CoPaw 用于定时报告、自动运维等场景。
- **多 Agent 管理**：用户配置多个 Agent 但切换不便（#4974、#4971、#4770），说明多 Agent 工作流已是实际使用模式。

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR 建议维护者关注：

| Issue/PR | 创建日期 | 状态 | 建议优先级 | 说明 |
|---|---|---|---|---|
| [#4968](https://github.com/agentscope-ai/CoPaw/issues/4968) | 2026-06-05 | 🟡 Open | 🔴 今日新报告即需关注 | 虚拟内存泄漏导致 fork 失败，生产环境严重问题 |
| [#4967](https://github.com/agentscope-ai/CoPaw/issues/4967) | 2026-06-05 | 🟡 Open | 🔴 今日新报告即需关注 | Agent 死循环，v1.1.10 新引入或新发现 |
| [#4970](https://github.com/agentscope-ai/CoPaw/issues/4970) | 2026-06-05 | 🟡 Open | 🟠 高 | 配置文件容错处理，影响可用性 |
| [#4962](https://github.com/agentscope-ai/CoPaw/issues/4962) | 2026-06-04 | 🟡 Open | 🟠 高 | DeepSeek 作为重要 Provider，回复展示问题需排查是否渲染层通用问题 |
| [#4900](https://github.com/agentscope-ai/CoPaw/pull/4900) | 2026-06-02 | 🔵 Open | 🟠 高 | 解决冻结环境（Tauri/PyInstaller）中的插件加载和桌面宠物问题，关联桌面端稳定性 |
| [#4832](https://github.com/agentscope-ai/CoPaw/issues/4832) | 2026-05-31 | 🟡 Open | 🟡 中 | Windows shell 窗口闪烁，已知根因但无 PR |
| [#4744](https://github.com/agentscope-ai/CoPaw/issues/4744) | 2026-05-28 | 🟡 Open | 🟡 中 | macOS Tauri 版是否支持 Intel 芯片，无官方回应 |
| [#4960](https://github.com/agentscope-ai/CoPaw/issues/4960) | 2026-06-04 | 🟡 Open | 🟡 中 | 桌面版局域网访问文档/配置缺失 |

---

> 📊 **项目健康度总评：** 🟡 **良好但需关注。** 活跃度高、PR 收敛快、核心维护者响应及时。但 v1.1.10 中 Yuanbao 通道发布质量问题和今日新报告的 Agent 死循环/内存泄漏问题需要尽快修复。建议下一版本以稳定性 patch 为优先。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-06-06**

---

## 1. 今日速览

ZeroClaw 过去 24 小时呈现**高活跃但高张力**的开发节奏：Issues 与 PR 各更新 50 条，分别有 44 个活跃 Issue 和 36 个待合并 PR 同时涌入，社区讨论集中在**安全架构、可观测性、通道横向扩展**三大方向。版本发布停滞（0 个），但主干上单日即诞生 4 个 XL 级 PR（新增 5 条 SMS 通道、4 条社交/聊天通道、结构化可观测性增强、Replicate WASM 插件），说明项目正经历一轮密集的 schema-v3 通道插件化与新 provider 整合 sprint。值得警惕的是，多个高优先级安全与稳定性 bug（#5601、#7059、#7155）仍处于 `blocked` / `needs-maintainer-review` 状态，维护者带宽明显吃紧。

**关键数字一览：**

| 指标 | 数值 |
|---|---|
| Issues 更新 | 50（新开/活跃 44，关闭 6） |
| PR 更新 | 50（待合并 36，已合并/关闭 14） |
| 新版本 | 0 |
| XL 级 PR（今日创建） | 4 |
| P1 活跃 Issue | 7+ |
| 状态为 blocked / needs-maintainer-review | 10+ |

---

## 2. 版本发布

**无新版本发布。** 项目目前处于密集开发期，多个大型 RFC 与功能 PR 正在评审中，预计下一版本（可能为 0.8.0-beta/0.9.0）将承载本轮 channel 插件化与安全架构重写的成果。

---

## 3. 项目进展

过去 24 小时有 14 个 PR 完成合并或关闭。其中最具方向性意义的进展包括：

### 🔹 通道生态大扩容（schema v3）
- **PR #7265** — 新增 **Twilio / Plivo / Telnyx / Sinch / Vonage 五条 SMS 通道**，均采用 alias-keyed v3 配置槽位，入站走签名校验 webhook，出站走厂商 REST API。这使得 ZeroClaw 的通道数跃升至两位数级别，大幅拓宽企业短信触达能力。
  🔗 [zeroclaw-labs/zeroclaw PR #7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265)
- **PR #7270** — 新增 **Mastodon / Rocket.Chat / Zulip / Lemmy 四条社交/团队聊天通道**，均通过 REST API + 轮询监听实现。覆盖面从 Fediverse 到企业自托管聊天，ZeroClaw 正在成为"多平台 AI agent 网关"。
  🔗 [zeroclaw-labs/zeroclaw PR #7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270)
- **PR #7275** — 利用 IRC 通道的已有能力薄封装出 **Twitch 聊天通道**，快速落地游戏直播场景。
  🔗 [zeroclaw-labs/zeroclaw PR #7275](https://github.com/zeroclaw-labs/zeroclaw/pull/7275)

### 🔹 Provider 生态扩容
- **PR #7260** — 新增 **morph / github_models / upstage / featherless / arcee / lambda_ai / inception** 七个 OpenAI-compatible provider 家族，全部 wired 进 0.8.0 schema-v3 typed-slot 架构。
  🔗 [zeroclaw-labs/zeroclaw PR #7260](https://github.com/zeroclaw-labs/zeroclaw/pull/7260)
- **PR #7163** — 为 OpenAI-compatible provider 增加 `extra_body` 支持，用户可透传 provider 专属 JSON 字段（如 `thinking` 参数），对 Gemini/OpenRouter 等高级调参场景意义重大。
  🔗 [zeroclaw-labs/zeroclaw PR #7163](https://github.com/zeroclaw-labs/zeroclaw/pull/7163)

### 🔹 质量 & 安全修复
- **PR #7261** — 修复嵌套对象数组中的 `#[secret]` 字段未正确 redact 的问题，消除安全审计报表中的凭证泄露风险。
  🔗 [zeroclaw-labs/zeroclaw PR #7261](https://github.com/zeroclaw-labs/zeroclaw/pull/7261)
- **PR #7258** — 为被 `session/kill` 终止的 ACP session 添加 `killed_at` 永久墓碑，防止管理员已杀死的会话被后续请求静默复活。
  🔗 [zeroclaw-labs/zeroclaw PR #7258](https://github.com/zeroclaw-labs/zeroclaw/pull/7258)
- **PR #7254** — 在 native tool-call 输出持久化前剥离 `<think>` 块，防止 reasoning tokens 污染对话上下文，同时增加流式文本消毒器。
  🔗 [zeroclaw-labs/zeroclaw PR #7254](https://github.com/zeroclaw-labs/zeroclaw/pull/7254)

### 🔹 可观测性 & 运维
- **PR #7233**（今日创建，待合入）— 结构化可观测性增强：丰富 ObserverEvent 字段（channel 归属、agent 别名、LLM I/O 明细、结构化 token 拆分），并将 OTel spans 改为相关联的 trace tree。
  🔗 [zeroclaw-labs/zeroclaw PR #7233](https://github.com/zeroclaw-labs/zeroclaw/pull/7233)

---

## 4. 社区热点

### 🔥 讨论量最高 Issue

| # | 讨论焦点 | 评论数 | 核心诉求 |
|---|---|---|---|
| **#6808** | RFC: Work Lanes + Board Automation + Label Cleanup | 9 | 贡献者 Audacity88 提出轻量化工单路由与看板自动化 RFC，希望减少维护者对手动系统的依赖。背后是项目 PR/Issue 量暴涨 → triage 压力过大。 |
| **#6969** | RFC: 统一输出路由模型（per-peer 模态偏好 + agent send_via 工具） | 7 | 从 Letta 迁移来的用户强烈要求恢复"控制回复投递方式"的能力（晨间简报邮件推送 vs 实时聊天回复）。这是一个跨渠道路由架构级别的需求。 |
| **#5601** | OAuth 订阅原生认证支持（Ollama Cloud / z.ai / Kimi / MiniMax） | 6 | 用户不想管静态 API key，要求用订阅账号直接登录。已获 1 个 👍，反映了"免 key 认证"是社区高频期望。 |

**深度分析：** 三个热点覆盖了 **项目治理**（#6808）、**迁移用户流失风险**（#6969）、**onboarding 门槛**（#5601），分别对应维护者、现有用户、潜在新用户三组利益相关方，说明社区已进入"规模增长"与"治理跟不上"的矛盾期。

### 🔥 评论较多 Issue（4 评论聚集区）

- **#6165** — 通过外部技能集成"瘦身"ZeroClaw 内核。争论焦点：哪些内置工具该迁出？维持核心精简 vs 用户开箱即用体验。
- **#7155** — 高风险 shell 命令增加"每次运行需人工确认"的执行确认层级，对齐 Claude Code 式的 allow/ask/deny 模式。
- **#7142** — 将安全执行层暴露为 pluggable provider 接口，目标 v0.9.0。
- **#7141** — RPC/WSS 传输层增加 OIDC Authentication Provider 支持，与 #7142 构成 v0.9.0 安全架构双子星。
- **#5907** — 为 ZeroCode 编码工作流增加 LSP 支持，减少 LLM 幻觉。

这四个 4 评论 Issue 共同指向一个方向：**将 ZeroClaw 从"功能完备但耦合的单体"拆为"核心精简 + 可插拔扩展"架构。**

### 🔥 今日 PR 活动亮点

- **PR #7267** — `[[mcp.servers]]` 的 per-field 编辑能力加入 web dashboard 和 zerocode TUI，此前只能手工编辑 `config.toml`，大幅降低 MCP 服务配置门槛。
  🔗 [zeroclaw-labs/zeroclaw PR #7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267)
- **PR #7244** — 为 `file_write` 增加健壮的畸形 JSON 回退 parser，修复 Gemini/Discord 场景中 HTML 载荷内的未转义双引号导致的 tool-call 解析失败。
  🔗 [zeroclaw-labs/zeroclaw PR #7244](https://github.com/zeroclaw-labs/zeroclaw/pull/7244)

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 S1 — 工作流阻断

| Issue | 描述 | 修复 PR | 状态 |
|---|---|---|---|
| **#6120** | 选择 OpenAI Codex 作为 provider 时，onboarding 错误地要求输入 OpenAI API key | — | ✅ 已关闭 |
| **#7059** | channel orchestrator 中残留"默认 provider/model/key"凭证/URL 回退逻辑，与 V3 schema 冲突，属于 S2 退化行为 | — | PR 待创建，标记 in-progress |

### 🟠 S2 — 高风险 / 生产行为退化

| Issue | 描述 | 修复 PR | 状态 |
|---|---|---|---|
| **#6916** | 子进程内存无上限，LLM 回退到 `wkhtmltopdf` 等 shell 命令时可 OOM 整个容器 | — | 待修复，status:accepted |
| **#7123** | Bluesky 文本截断在 UTF-8 多字节字符边界处 CJK 会话摘要 panic | PR #7123 | ✅ PR 已提交 |
| **#7247** | `is_gateway_managed_field` 的 kebab-case / snake_case 拼写不一致导致 paired_tokens 漂移误报 | PR #7247 | ✅ PR 已提交 |

### 🟡 S3 — 缺陷 & 退化

| Issue | 描述 | 修复 PR | 状态 |
|---|---|---|---|
| **#6914** | `allowed_tools` 字段在主 agent loop 中未一致强制执行（仅在 tool spec 过滤时生效） | — | 待修复 |
| **#6915** | skill 声明的 composio/builtin 工具未在 skill 执行期间临时激活 | — | 待修复 |
| **#7089** | Windows 上 shell 工具硬编码 cmd.exe，未评估 PowerShell/Git Bash 替代方案 | — | RFC 讨论中 |
| **#5842** | `extra_args` 对 Codex CLI 安全敏感 flag 缺乏验证/白名单 | — | 待修复 |
| **#6120** (已关闭) | onboarding OpenAI Codex provider 选择显示错误 UI | PR #7240 | 闭合验证中 |

**总体评估：** 内存安全（#6916）、工具执行沙箱（#6914、#6915）构成一组相互关联的高危缺口，建议合并为一个安全加固专项处理。好消息是 #7123（UTF-8 panic）和 #7247（配置漂移）已有即时修复 PR。

---

## 6. 功能请求与路线图信号

**大概率纳入下一版本（0.8.x）：**

| 方向 | 依据 |
|---|---|
| **Schema-v3 channel/provider 继续扩容** | 今日 3 个 XL PR（#7265、#7270、#7260）密集落地，维护者明显在 sprint |
| **WASM 插件生态** | #7277（Shazam WASM）、#7280（Replicate model-runner WASM）已提交 |
| **Per-model 能力配置** | #7100 RFC（per-model vision/context_window + 上下文预算 + UI 展示）已 accepted |
| **Web 插件管理 UI** | #7235（plugin lifecycle endpoints + management UI stubs）已提交 |

**可能在 0.9.0 落地：**

| 方向 | 依据 |
|---|---|
| **可插拔安全 provider 接口** | #7142（pluggable security provider）标记 v0.9.0 |
| **OIDC 认证** | #7141（OIDC on RPC/WSS transport）标记 v0.9.0 |
| **air-gapped 执行模式** | #6293（daemon 隔离架构）被标记为 RFC accepted |
| **LSP 集成** | #5907 为编码 agent 接入 Language Server |
| **A2A agent 发现** | #7218（多 agent 场景下的 `/.well-known/agent-card.json`） |

**尚处于 RFC 讨论期，去向未定：**
- #6808（Work Lanes 治理）— 可能与项目流程相关，未必转化为代码
- #6969（统一输出路由）— 需要底层 channel 抽象改造，工期较大

---

## 7. 用户反馈摘要

### 😤 痛点

1. **"从 Letta 迁移过来后，我丢失了控制回复投递方式的能力"** — #6969 用户详细描述了晨间简报邮件推送、定时日报等场景，说明当前 ZeroClaw 的 channel agent 绑定粒度不够，用户无法为"不同场景偏好不同通道"建模。这是一个 **留存风险信号**。
2. **"我不想管理静态 API key"** — #5601 代表了一批对"云原生零配置"有强烈期待的用户。当前 ZeroClaw 要求用户手动在 TOML 里填 key，对非技术用户不友好。
3. **"skill audit 的 remote-markdown-link 检查误报率太高"** — #6714 反映内部工具链（插件审核器）与真实使用场景脱节。
4. **"Windows 只用 cmd.exe 太受限"** — #7089 用户希望 shell 工具在 Windows 上默认使用 PowerShell，或至少可配置。

### 👍 满意信号

- `@singlerider` 一个人连续提交了多篇高质量 RFC（#7141、#7142、#7218），说明社区中存在深度参与且系统思维强的贡献者。
- 大量 XS/S 级小修复 PR 被快速发起（#7240、#7123、#7247、#7254），反映出社区对 bug 响应的积极性高。
- `@theonlyhennygod` 一天内串联提交多个 channel/provider 扩展 PR（#7260、#7265、#7270、#7275）以及 #7235、#7277、#7280，展现出极强的产出能力。

### 💡 典型使用场景

- **"运行 ZeroClaw 在离网环境中，通过 ACP/MCP 服务器代理所有互联网访问"**（#6293 air-gapped）
- **"ZeroClaw 作为 Xcode 内的主要 AI agent"**（#6065 ZeroClaw MCP to Xcode）
- **"多 agent 安装下通过 A2A 协议被发现和互操作"**（#7218）
- **"将 Office 文档交给 agent 处理时能直接提取文本/Markdown"**（#7024 WASM office-tools）

---

## 8. 待处理积压

以下 Issue/PR 对项目健康度影响较大，但长期缺少维护者响应，建议优先关注：

### 🚨 高优先级、长期 blocked

| # | 标签 | 等待时间 | 说明 | 建议 |
|---|---|---|---|---|
| **#5601** | P2, blocked, needs-maintainer-review | **57 天** | OAuth 订阅认证支持，覆盖 4 个 provider | 分配一位维护者确认架构方向 |
| **#6165** | P2, blocked, needs-maintainer-review | **40 天** | 通过外部技能"瘦身"内核的 RFC | 需要架构决策者拍板 |
| **#6293** | P2, blocked, needs-maintainer-review | **34 天** | Air-gapped 执行模式 | 与 v0.9.0 安全架构关联，建议纳入规划 |
| **#6914** | P1, blocked, needs-maintainer-review | **12 天** | `allowed_tools` 未强制执行 | 安全风险，建议优先处理 |
| **#6915** | P2, blocked, needs-maintainer-review | **12 天** | skill-scoped tool 临时激活 | 与 #6914 关联，可合并处理 |
| **#6917** | P2, blocked, needs-maintainer-review | **12 天** | Composio action-scope 过滤 | 与 #6914/#6915 同属工具权限体系 |

### ⚠️ 长期未关闭的 bug

| # | 标签 | 等待时间 | 说明 |
|---|---|---|---|
| **#5842** | P2, accepted | **50 天** | Codex CLI `extra_args` 安全验证缺失 |
| **#6074** | P2, in-progress | **43 天** | 153 个 commit 在 bulk revert 后待恢复 |
| **#6715** | P3, blocked | **21 天** | 仓库 200+ 分支清理 |

### 📋 积压 PR 风险

当前有 **36 个 PR 待合并**，其中多个 XL 级 PR（#7233、#7265、#7270、#7280）体量巨大，若 review 资源不足将导致合并冲突快速积累。建议：
1. 对 #7265、#7270 等通道 PR 优先 review，因其依赖新 schema-v3 架构，越早合入越减少后续冲突；
2. 对 #7233（可观测性 XL）考虑拆分为多个子 PR 以加速 review；
3. 对 #6914、#6915、#6917 三个工具权限相关 Issue，建议合并为一个"工具执行沙箱加固"专项，统一分配维护者。

---

**日报总结：** ZeroClaw 正处于"功能爆发期"与"治理瓶颈期"的交汇点。通道与 provider 生态在 schema-v3 架构驱动下快速扩张，但安全加固、工具权限、onboarding 体验等基础能力仍有明显缺口。建议维护者近期优先处理 `needs-maintainer-review` 积压（当前 10+ 项），并考虑为 v0.9.0 安全架构（pluggable security + OIDC + air-gapped）设立明确里程碑，避免 RFC 长期停留在 accepted 状态。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*