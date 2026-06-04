# OpenClaw 生态日报 2026-06-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-04 00:48 UTC

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

# OpenClaw 项目动态日报 — 2026-06-04

---

## 1. 今日速览

OpenClaw 今日处于**高活跃维护期**：过去 24 小时内 Issues 更新 500 条（新开/活跃 367、关闭 133），PR 更新 500 条（待合并 400、已合并/关闭 100），并连续发布 3 个版本（含 1 个稳定版 + 2 个 beta）。项目整体节奏快，维护者正集中处理 session-state 稳定性、消息投递可靠性和插件安全等核心议题。待合并 PR 积压达 400 条，显示审查带宽是当前瓶颈。

---

## 2. 版本发布

### v2026.6.2-beta.1（最新）
- **插件与技能安装策略重构**：用 operator install policy 替代旧的 dangerous-code scanner 路径，统一了 doctor、CLI、ClawHub 及故障排查界面中 package/archive/source/upload/marketplace 的安装体验。(#89516) Thanks @joshavant。
- ⚠️ **迁移注意**：依赖旧扫描路径的自定义安装流程需适配新 policy 接口。

### v2026.6.1（稳定版）
- **Agent 与 CLI 运行时恢复能力增强**：更干净地从中断的 tool call、过期 session binding、compaction handoff 和媒体投递重试中恢复。(#88129, #88136, #88141, #88162, #88182)
- **渠道投递稳定性提升**：Telegram、WhatsApp、iMessage、Slack 及移动端投递更稳定。

### v2026.6.1-beta.3
- 内容与 v2026.6.1 稳定版一致，为 beta 通道同步。

---

## 3. 项目进展

今日合并/关闭的代表性 PR：

| PR | 状态 | 说明 |
|---|---|---|
| [#90067](https://github.com/openclaw/openclaw/pull/90067) | ✅ 已合并 | 修复 Workboard 批量更新中 stale lifecycle 补丁互相污染的 bug，隔离 effectivePatch 避免状态回写 |
| [#88957](https://github.com/openclaw/openclaw/pull/88957) | ✅ 已合并 | 修复 Workboard 卡片状态持久化问题，拖拽/编辑后状态不再被 session lifecycle 同步覆盖 |
| [#88968](https://github.com/openclaw/openclaw/pull/88968) | 🔍 待审查 | 防止 memory flush 失败中止用户回复（#85645），标记为 ready for maintainer look |
| [#88969](https://github.com/openclaw/openclaw/pull/88969) | 🔍 待审查 | 修复 iMessage echo marker 竞态——在 bridge send 调用前先持久化 echo marker，避免消息回显丢失 |
| [#89584](https://github.com/openclaw/openclaw/pull/89584) | 🔍 待审查 | memory-core 新增可选 cross-encoder rerank 阶段，补全当前仅有 hybrid retrieval + MMR 的搜索链路 |
| [#88504](https://github.com/openclaw/openclaw/pull/88504) | 🔍 待审查 | 多 slot memory role 架构（recall/compaction/capture 等），允许 memory plugin 组合而非互斥替换 |
| [#89724](https://github.com/openclaw/openclaw/pull/89724) | ⏳ 等待作者 | 新增 Microsoft Teams 语音 provider（OpenClawTeamsBridge），扩展 voice-call 扩展 |

**整体判断**：项目在 session 稳定性、消息投递可靠性和 memory 子系统架构三个方向同时推进。多个标记为 "ready for maintainer look" 的高质量 PR 等待合并，审查吞吐量是主要瓶颈。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 |
|---|---|---|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | 17 评论 | 推动 session/transcript 运行时状态向 SQLite 迁移，要求以 branch-by-abstraction 方式分小 PR 落地，避免一次性大重构的高风险 |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) | 14 评论 | Heartbeat isolated mode 多维度退化：cadence 停滞、heartbeat last 误标 exec-event、lightContext 持续臃肿 |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 14 评论 | Windows chat UI 严重回归：输入文字被吞、流式回复不可见直到刷新（已关闭） |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | 12 评论 | Codex app-server turn-completion stall 回归（2026.5.27 起），多 tool agent turn 稳定失败 |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | 11 评论 | Mattermost slash commands 返回 503 "not yet initialized"（v2026.4.15 回归） |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 11 评论 | 同一 session key 反复 hard reset，即使 reserveTokensFloor 已设很高，retry loop 反复注入 bootstrap context |

### 📌 关键信号
- **Session 状态管理**是社区最大痛点，横跨 SQLite 迁移、heartbeat 退化、compaction 失效、context bloat 等多个子议题。
- **Codex 集成**的稳定性问题（#88312、#86214、#86215）集中爆发，涉及 turn 中止、OAuth 刷新失败、长时间无告警阻塞。

---

## 5. Bug 与稳定性

### 🔴 P1 — 严重 / 回归

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | OPEN | Codex app-server turn-completion stall 回归（2026.5.27） | 无 |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | OPEN | Codex app-server 客户端在 image/tool 请求中途关闭（大 logs_2.sqlite 场景） | 无 |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | OPEN | MCP tools 未注入 subagent sessions_spawn 会话，所有 allowlist 配置被忽略 | 无 |
| [#87310](https://github.com/openclaw/openclaw/issues/87310) | OPEN | Stale diagnostic tool_call activity 在 recovery/reset 后存活，阻塞后续 session | 无 |
| [#81484](https://github.com/openclaw/openclaw/issues/81484) | OPEN | Discord guild 回复回归：畸形 send payload 和外发循环 | 无 |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | OPEN | Mattermost slash commands 503（v2026.4.15 回归） | 无 |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | OPEN | 反复 hard reset + bootstrap context 重注入 | 无 |
| [#63998](https://github.com/openclaw/openclaw/issues/63998) | OPEN | Session transcript doomloop：crash-restart 循环导致 gateway OOM | 无 |
| [#66747](https://github.com/openclaw/openclaw/issues/66747) | OPEN | macOS CLI gateway probes 1006 失败 + task registry EPERM | 无 |

### 🟡 P2 — 重要

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | OPEN | amazon-bedrock-mantle 缺少 config.discovery.enabled 门控，每次请求运行不必要 discovery | 无 |
| [#64500](https://github.com/openclaw/openclaw/issues/64500) | OPEN | globalCircuitBreakerThreshold 按 tool 而非按 pair 阻断，ping-pong loop 绕过熔断 | 无 |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | OPEN | Session context bloat：bootstrap files 每轮重注入，浪费 20-30% tokens | 无 |
| [#76038](https://github.com/openclaw/openclaw/issues/76038) | OPEN | Stuck Session Recovery 双重失效 + 预处理耗时过长 | 无 |
| [#77467](https://github.com/openclaw/openclaw/issues/77467) | OPEN | MiniMax Portal OAuth token 无法自动刷新（refreshOAuth 未实现） | 无 |

### 🟢 已关闭（今日）

| Issue | 描述 |
|---|---|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows chat UI 输入/流式回复回归 |
| [#67793](https://github.com/openclaw/openclaw/issues/67793) | queue.mode "collect" 不批处理消息 |
| [#71992](https://github.com/openclaw/openclaw/issues/71992) | Control UI webchat 重复显示助手回复 |
| [#88020](https://github.com/openclaw/openclaw/issues/88020) | REPLAY_INVALID_RE 缺少 Anthropic thinking block 签名失效处理 |
| [#86811](https://github.com/openclaw/openclaw/issues/86811) | WebChat dashboard 工具调用期间冻结、WebSocket 断连无重连 |
| [#67423](https://github.com/openclaw/openclaw/issues/67423) | Auth router 忽略 provider entry 的 apiKey 字段 |
| [#63427](https://github.com/openclaw/openclaw/issues/63427) | CLI WebSocket probe 无 backoff 重试 |
| [#48780](https://github.com/openclaw/openclaw/issues/48780) | Windows exec()/read() 命令被 </arg_value>> 后缀破坏 |
| [#73699](https://github.com/openclaw/openclaw/issues/73699) | Discord voice channel I/O 桥接功能请求 |

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 描述 | 相关 PR / 信号 |
|---|---|---|---|
| [#72741](https://github.com/openclaw/openclaw/issues/72741) | 安全 | 外部安全检查与 guardrail 的标准接口 | 无 PR，但 #90003 正在推进 exec approvals 策略覆盖 |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | 架构 | 多 index embedding memory + model-aware 故障转移 | #89584（cross-encoder rerank）和 #88504（multi-slot memory role）正在推进 memory 子系统架构升级 |
| [#64438](https://github.com/openclaw/openclaw/issues/64438) | 功能 | Remote Reranker Endpoint 支持 | #89584 已提供内置 cross-encoder rerank，remote endpoint 尚未覆盖 |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | 功能 | Control UI 可配置上传大小限制（当前硬编码 5MB） | 无 PR |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | 功能 | Anthropic advisor tool（beta server-side tool）支持 | 无 PR |
| [#76159](https://github.com/openclaw/openclaw/issues/76159) | 功能 | Per-job acceptSilentStop flag——允许 cron job 无输出时不标记为错误 | 无 PR |
| [#67000](https://github.com/openclaw/openclaw/issues/67000) | 性能 | Warm-up / session reuse for embedded agents（避免每次冷启动） | 无 PR |
| [#67735](https://github.com/openclaw/openclaw/issues/67735) | 功能 | WebChat/Control UI 应像 Telegram DM 一样遵循 canonical direct-session identityLinks | 无 PR |

**路线图判断**：
- **Memory 子系统重构**是当前最明确的架构方向，multi-slot role 架构（#88504）+ cross-encoder rerank（#89584）+ session/transcript SQLite 迁移（#88838）三条线并行。
- **安全加固**正在通过 exec approvals 策略（#90003）和插件安装策略重构（v2026.6.2-beta.1）推进。
- **Microsoft Teams 语音**（#89724）是下一个渠道扩展目标。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Session 状态不可靠是最高频投诉**：用户报告 session 反复 hard reset、context 每轮膨胀 20-30%、compaction 失效导致 OOM、stuck session 无法自动恢复。多个 issue 跨越 2 个月仍无修复。
2. **Codex 集成体验差**：turn 中途停止、OAuth 刷新失败后长时间无告警阻塞、大数据库文件场景下连接断开。用户明确表示"worked before, now fails"。
3. **渠道间行为不一致**：WebChat 不遵循 Telegram DM 的 identityLinks 逻辑；Discord guild 回复回归；Mattermost slash commands 503；iMessage echo marker 竞态。
4. **Windows 平台二等公民**：chat UI 输入被吞、exec/read 命令被后缀破坏、CLI probe 持续失败。
5. **Heartbeat 机制退化**：isolated mode 下 cadence 停滞、heartbeat last 误标、lightContext 持续臃肿。

### 😊 满意点

- v2026.6.1 的运行时恢复能力增强获得正面反馈（多个 issue 引用该版本修复）。
- 插件安装策略重构（v2026.6.2-beta.1）被认为方向正确，统一了分散的安装路径。
- Workboard 卡片状态修复（#88957、#90067）快速合并，响应及时。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

### 🔴 高优先级积压 Issue

| Issue | 创建日期 | 最后更新 | 描述 |
|---|---|---|---|
| [#63998](https://github.com/openclaw/openclaw/issues/63998) | 2026-04-10 | 2026-06-03 | Session transcript doomloop → gateway OOM，P1，无修复 |
| [#63612](https://github.com/openclaw/openclaw/issues/63612) | 2026-04-09 | 2026-06-03 | Main session prompt crash: Cannot read properties of undefined (reading 'length')，P1 |
| [#64810](https://github.com/openclaw/openclaw/issues/64810) | 2026-04-11 | 2026-06-03 | Heartbeat/async system events 吞没 Telegram topic sessions 中的回复，P1 |
| [#68691](https://github.com/openclaw/openclaw/issues/68691) | 2026-04-18 | 2026-06-03 | Sandbox zombie processes 积累至 pids.max 风险，P1 |
| [#68751](https://github.com/openclaw/openclaw/issues/68751) | 2026-04-19 | 2026-06-03 | session-memory hook 导致 prior-session turns 在 /reset 后被重放执行，P1 安全 |
| [#66747](https://github.com/openclaw/openclaw/issues/66747) | 2026-04-14 | 2026-06-03 | macOS CLI gateway probes 1006 + EPERM，P1 |

### 🟡 积压 PR（已准备好但等待审查）

| PR | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| [#88968](https://github.com/openclaw/openclaw/pull/88968) | 2026-06-01 | ready for maintainer look | 防止 memory flush 失败中止用户回复，P1 |
| [#88969](https://github.com/openclaw/openclaw/pull/88969) | 2026-06-01 | ready for maintainer look | iMessage echo marker 竞态修复，P1 |
| [#89584](https://github.com/openclaw/openclaw/pull/89584) | 2026-06-02 | ready for maintainer look | memory-core cross-encoder rerank，P2 |
| [#80707](https://github.com/openclaw/openclaw/pull/80707) | 2026-05-11 | ready for maintainer look | cron task liveness guard，P2 |
| [#88585](https://github.com/openclaw/openclaw/pull/88585) | 2026-05-31 | ready for maintainer look | Pin official npm plugin install records，P2 |
| [#89681](https://github.com/openclaw/openclaw/pull/89681) | 2026-06-03 | ready for maintainer look | Skills panel toggle state 在过滤后错位，P2 |
| [#90053](https://github.com/openclaw/openclaw/pull/90053) | 2026-06-03 | ready for maintainer look | 隐藏 Skill Workshop revision handoff 到 chat，P2 |
| [#90073](https://github.com/openclaw/openclaw/pull/90073) | 2026-06-04 | ready for maintainer look | Guard plugin metadata snapshot owner rows，P2 |

**建议**：当前有 8 个标记为 "ready for maintainer look" 的 PR 等待审查，其中 2 个为 P1 级别。建议维护者集中处理这些 PR 以释放积压压力。同时，6 个创建超过 6 周的 P1 Issue 需要明确分配 owner 或关闭/降级。

---

*数据来源：OpenClaw GitHub Repository | 统计时间：2026-06-04 | 生成：OWL*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**日期：2026-06-04 | 分析引擎：OWL**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态处于**高密度竞争与快速分化期**。以 OpenClaw 为参照核心，衍生项目（NanoClaw、TinyClaw、PicoClaw、ZeptoClaw 等）和独立路线项目（NanoBot、Hermes Agent、IronClaw、ZeroClaw、CoPaw、Moltis、LobsterAI）共同构成了从**轻量级网关到全功能 Agent 平台**的光谱。生态整体呈现三大特征：**① 稳定性债务集中爆发**——几乎所有项目都在处理 session 管理、上下文压缩、消息投递可靠性等基础问题；**② 安全加固成为共识优先级**——沙箱隔离、凭证管理、审批流程在多项目中同步推进；**③ 多 Agent 协作与记忆系统架构升级**是最明确的下一代能力方向，多个项目已在 PR 层面落地。社区贡献活跃度两极分化严重，头部项目（OpenClaw、CoPaw、IronClaw）日处理 PR 50+，尾部项目（NullClaw、TinyClaw）近乎停滞。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度 | 一句话评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（开367/关133） | 500（待400/合100） | v2026.6.2-beta.1 + v2026.6.1 稳定版 | 🟡 良好 | 高产出但 PR 积压严重，审查带宽是瓶颈 |
| **NanoBot** | 32（开26/关6） | 31（待15/合16） | 无 | 🟢 健康 | 核心贡献者高效推进，WebUI/记忆/多Agent三线并进 |
| **Hermes Agent** | 50（开44/关6） | 50（待36/合14） | 无 | 🟡 良好 | 高频迭代但未冻结发布，Desktop/Slack/MCP多线推进 |
| **PicoClaw** | 3 | 10（待7/合3） | v0.2.9-nightly | 🟢 健康 | 安全加固节奏稳定，积压PR需加快消化 |
| **NanoClaw** | 1 | 9（待9/合0） | 无 | 🟢 健康 | 调度系统稳定性快速推进，PR待首次合并 |
| **NullClaw** | 0 | 1（待1/合0） | 无 | 🔴 停滞 | 极低活跃，仅1个工具过滤优化PR |
| **IronClaw** | 27（开21/关6） | 50（待22/合28） | v0.29.1 | 🟡 良好 | Slack集成+Reborn架构双线冲刺，今日爆发6个架构级Issue |
| **LobsterAI** | 1 | 16（待2/合14） | 2026.6.3 | 🟡 良好 | Cowork/MCP功能密集交付，积分清零投诉需紧急响应 |
| **TinyClaw** | 0 | 0 | 无 | 🔴 停滞 | 过去24小时零活动 |
| **Moltis** | 14（开5/关9） | 4（待4/合0） | v20260603.01 + v20260602.05 | 🟡 良好 | 批量清积压，容器兼容性是系统性短板 |
| **CoPaw** | 49（开28/关21） | 50（待29/合21） | 无 | 🟡 良好 | 上下文压缩/浏览器工具链快速修复，向量DB稳定性是长期隐患 |
| **ZeptoClaw** | 0 | 16（待16/合0） | 无 | 🟡 依赖更新 | 纯dependabot驱动，无实质性开发活动 |
| **ZeroClaw** | 50（开?/关24） | 50（待43/合7） | 无 | 🟡 良好 | v0.8.0冲刺期，安全架构重构已规划至v0.9.0 |

> **活跃度分层**：高活跃（50+ updates）— OpenClaw、CoPaw、ZeroClaw、IronClaw；中活跃（10-50）— NanoBot、Hermes Agent、LobsterAI、Moltis、PicoClaw、NanoClaw；低活跃/停滞 — NullClaw、TinyClaw、ZeptoClaw。

---

## 3. OpenClaw 在生态中的定位

**规模优势**：OpenClaw 的日 Issue/PR 更新量（各500条）远超所有竞品，约为第二名 CoPaw 的10倍，是生态中事实上的**核心参照项目（reference implementation）**。多个衍生项目（NanoClaw、PicoClaw、ZeptoClaw）直接基于其架构或命名体系。

**技术路线差异**：

| 维度 | OpenClaw | 主要竞品对比 |
|---|---|---|
| **架构定位** | 全功能 Agent 操作系统 | ZeroClaw 更聚焦安全网关；NanoBot 追求极简（4k行）；PicoClaw 专注IoT/嵌入式 |
| **Session 管理** | 最复杂（SQLite迁移、compaction、branch-by-abstraction） | NanoClaw 同样重视调度可靠性但实现更轻量；IronClaw 走 Reborn 架构路线 |
| **插件生态** | ClawHub 市场 + 统一安装策略（今日beta重构） | CoPaw 有技能市场但桌面端插件加载器存在503问题；Hermes 走 MCP-first |
| **渠道覆盖** | 最广（Telegram/WhatsApp/iMessage/Slack/Discord/Mattermost/Teams） | IronClaw 正冲刺 Slack MVP；ZeroClaw 覆盖9渠道但 WhatsApp 有协议回归 |
| **Memory 架构** | 最激进（multi-slot role + cross-encoder rerank + SQLite迁移三条线并行） | NanoBot 走 MECE去重路线；CoPaw 有 memory-distill 插件但长期未合并 |

**社区规模**：OpenClaw 的 Issue 积压量（400待合并PR、9个P1未修复Issue）既是社区活跃的标志，也反映了维护者带宽不足的结构性问题。相比之下，NanoBot 和 PicoClaw 的 PR 积压控制在个位数，审查效率更高。

---

## 4. 共同关注的技术方向

以下方向在**3个及以上项目**中同时出现，代表生态级共识：

### ① Session 状态管理与上下文压缩（OpenClaw、NanoBot、CoPaw、IronClaw、ZeroClaw、NanoClaw）
- **OpenClaw**：SQLite 迁移、compaction handoff 恢复、context bloat（每轮膨胀20-30%）
- **CoPaw**：上下文压缩因旧格式 file block 崩溃（已修复）、向量索引膨胀至37GB
- **NanoClaw**：永久失败任务重调度、预任务脚本重试
- **IronClaw**：上下文溢出恢复、压缩摘要写入竞态
- **ZeroClaw**：context compressor 丢弃 reasoning_content
- **NanoBot**：compaction benchmark + consolidator 提示词优化

### ② 安全加固与沙箱隔离（OpenClaw、NanoBot、PicoClaw、ZeroClaw、CoPaw、Moltis、IronClaw）
- **OpenClaw**：插件安装策略重构（v2026.6.2-beta.1）、exec approvals 策略
- **ZeroClaw**：设备 token 轮换/删除后旧 bearer token 未失效、ACP memory 工具越权
- **NanoBot**：AI 绕过 rm 安全限制、文件系统未强制执行 restrict_to_workspace
- **PicoClaw**：MQTT TLS 安全加固（InsecureSkipVerify 默认 true → false）
- **Moltis**：MCP stdio 环境变量泄露至 LLM
- **IronClaw**：子代理能力面安全门控、AllowAll 工具面暴露
- **CoPaw**：浏览器沙箱 PermissionError

### ③ 记忆系统架构升级（OpenClaw、NanoBot、CoPaw、Hermes Agent、ZeroClaw）
- **OpenClaw**：multi-slot memory role + cross-encoder rerank + SQLite 迁移
- **NanoBot**：MECE 去重 + Dream/Consolidator 提示词优化
- **CoPaw**：memory-distill 插件（92% 噪声过滤率）、Dream Agent 路径隔离修复
- **Hermes Agent**：自动化工作区记忆、1Password 密钥后端
- **ZeroClaw**：SQLite memory schema 并发初始化失败

### ④ 多 Agent 协作（NanoBot、CoPaw、Hermes Agent、IronClaw）
- **NanoBot**：邮箱频道插件（已合并）+ A2A 编排功能请求 + 跨实例消息总线 PR
- **CoPaw**：spawn_subagent 子任务可见性、ACP 协议元数据扩展
- **Hermes Agent**：Kanban Executor Board、Claude 子进程运行时桥接
- **IronClaw**：子代理完成观察者投递修复、spawn_subagent 不可调用

### ⑤ 容器/沙箱部署体验（Moltis、Hermes Agent、NanoClaw、PicoClaw）
- **Moltis**：Docker 中 Read/Write/Edit 工具失效、Podman 不兼容
- **Hermes Agent**：Windows TUI 传入 host cwd 到容器、s6-overlay 镜像兼容性
- **NanoClaw**：加密主目录 linger 服务无法启动、NO_PROXY 容器配置
- **PicoClaw**：32位 Android（Termux）不支持

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 差异化壁垒 |
|---|---|---|---|---|
| **OpenClaw** | Agent 操作系统 / 生态核心参照 | 高级用户、企业部署、渠道集成开发者 | 多渠道网关 + ClawHub 插件市场 + SQLite session | 渠道覆盖最广、插件生态最成熟 |
| **NanoBot** | 轻量级个人 AI 助手 | 个人用户、快速部署、Telegram/WhatsApp 用户 | <4k行核心 + 事件总线 + 邮箱多Agent | 极简架构、低门槛上手 |
| **Hermes Agent** | 研究级 Agent 平台 | 研究人员、多模型用户、macOS 重度用户 | Desktop-first + MCP-first + Kanban + Claude 子进程 | Nous 研究背景、Slack 原生集成深度 |
| **PicoClaw** | 嵌入式/IoT AI 网关 | 边缘计算开发者、MQTT 场景、RISC-V 用户 | Go 运行时 + WebSocket + MQTT + 安全网关 | 资源占用小、IoT 协议原生支持 |
| **NanoClaw** | 调度增强型 Agent | 需要可靠定时任务的用户 | 调度系统 + 容器运行器 + 技能版本管理 | 调度可靠性差异化 |
| **IronClaw** | 安全优先的 Agent 运行时 | 企业用户、Slack 工作流、NEAR 生态 | Reborn 架构 + ProductAdapter + 能力面安全门控 | 安全模型最严格、Slack MVP 冲刺中 |
| **ZeroClaw** | 安全网关 + 评估框架 | 安全敏感部署、评估驱动开发 | OIDC + 可插拔安全层 + 确定性回放评估 | 安全架构前瞻性、评估工具独特 |
| **CoPaw** | 协作型 Agent 平台 | 团队协作、浏览器自动化用户 | Tauri Desktop + 浏览器工具链 + 技能市场 | 桌面端体验、浏览器自动化深度 |
| **LobsterAI** | 协作 IDE 型 Agent | 重度协作用户、知识工作者 | Cowork + HTML Share + MCP + 对话分叉 | 协作工作流最丰富 |
| **Moltis** | 多模型 Web UI 网关 | 模型切换频繁用户、Web UI 偏好者 | Vault + Skill 粒度启停 + Activity Log | 模型管理 UI、Vault 凭证管理 |
| **NullClaw** | （定位不明） | — | 工具过滤优化 | 极低活跃，无明确差异化 |
| **ZeptoClaw** | 依赖维护中 | — | Rust + Docker | 无实质性开发活动 |
| **TinyClaw** | 零活动 | — | — | — |

---

## 6. 社区热度与成熟度

### 🔥 快速迭代期（日处理 20+ PR/Issue，新功能密集交付）

| 项目 | 阶段特征 | 风险 |
|---|---|---|
| **OpenClaw** | 高产出高积压，3个版本/日，审查带宽不足 | 400待合并PR可能引发贡献者流失 |
| **IronClaw** | Slack MVP + Reborn 架构双线冲刺，v0.29.x 快速迭代 | 今日爆发6个架构级Issue，安全模型需系统性加固 |
| **CoPaw** | 上下文压缩/浏览器工具链快速修复，21个PR/日合并 | ChromaDB segfault（38天未修）是致命隐患 |
| **ZeroClaw** | v0.8.0 冲刺期，安全加固+provider修复密集 | 43待合并PR，安全审批绕过Issue未修复 |
| **LobsterAI** | Cowork/MCP/HTML Share 三连发，2026.6.3 功能密度高 | 积分清零投诉是信任危机，需24h内响应 |

### 🔧 质量巩固期（日处理 5-20 PR/Issue，聚焦稳定性）

| 项目 | 阶段特征 | 风险 |
|---|---|---|
| **NanoBot** | WebUI重构/记忆优化/多Agent三线并进，核心贡献者高效 | 安全漏洞（#143 filesystem sandbox）4个月未修 |
| **Hermes Agent** | Desktop/Slack/MCP打磨，从功能扩张转向稳定性 | Vision fallback链系统性缺陷，3个关联Issue无修复 |
| **Moltis** | 批量清积压（9 Issue同日关闭），容器兼容性是短板 | Docker/Podman 系统性适配不足，4个PR零合并 |
| **NanoClaw** | 调度系统稳定性增强，9个PR待首次合并 | 尚无合并记录，审查流程待建立 |

### 📦 维护/停滞期

| 项目 | 状态 |
|---|---|
| **PicoClaw** | 安全加固稳定推进，但7个PR积压需消化 |
| **NullClaw** | 极低活跃，仅1个工具过滤PR |
| **ZeptoClaw** | 纯dependabot驱动，无实质性开发 |
| **TinyClaw** | 零活动 |

---

## 7. 值得关注的趋势信号

### 趋势一：Session 管理正在成为"新操作系统内核"

几乎所有项目都在重构 session 状态管理——从 OpenClaw 的 SQLite 迁移、IronClaw 的 Reborn 运行时、CoPaw 的上下文压缩修复，到 NanoClaw 的调度重试机制。**Session 的可靠性直接决定 Agent 的可用性**，这一层正在从"附属功能"升级为"核心基础设施"。

> **对开发者的启示**：如果你正在构建 Agent 应用，session 状态持久化、compaction 策略、上下文窗口管理是需要从第一天就架构好的核心能力，而非后期补丁。

### 趋势二：安全模型从"功能开关"走向"可插拔架构"

ZeroClaw 明确提出将安全执行层抽象为可插拔 trait（#7142），IronClaw 推进能力面安全门控，OpenClaw 重构插件安装策略。安全不再是"加个沙箱"就能解决的问题，而是需要**贯穿工具调用、凭证管理、渠道隔离、审批流程的系统性设计**。

> **对开发者的启示**：安全架构需要前置设计。OIDC 认证、per-tool 审批、凭证零化、沙箱隔离是生产级 Agent 的标配，而非可选项。

### 趋势三：多 Agent 协作从"功能请求"进入"架构落地"阶段

NanoBot 的邮箱插件已合并、A2A PR 待审；CoPaw 的 ACP 协议扩展推进中；IronClaw 的子代理完成观察者修复已合并；Hermes Agent 的 Kanban Executor Board 趋于完善。多 Agent 协作不再是愿景，而是**正在被工程化实现**。

> **对开发者的启示**：Agent 间通信协议（A2A/ACP）、任务分解与结果聚合、子 Agent 生命周期管理是下一个技术制高点。

### 趋势四：容器化部署体验是"最后一公里"短板

Moltis、Hermes Agent、NanoClaw 均在容器/沙箱部署上暴露系统性问题。随着 Agent 从开发环境走向生产部署，**Docker/Podman 兼容性、文件系统隔离、环境变量注入**将成为影响采用率的关键因素。

> **对开发者的启示**：CI/CD 测试矩阵需要纳入 Docker/Podman 场景，路径映射、权限模型、网络隔离需要专项测试覆盖。

### 趋势五：记忆系统正在经历"从检索到推理"的范式升级

OpenClaw 的 multi-slot role + cross-encoder rerank、NanoBot 的 MECE 去重、CoPaw 的 memory-distill（92% 噪声过滤率）——记忆系统不再只是"存和取"，而是需要**理解信息的相关性、去重、分层、按需注入**。

> **对开发者的启示**：记忆系统的质量上限决定 Agent 的长期可用性上限。BM25 + 向量检索 + rerank 的三段式架构正在成为标配，而跨会话记忆隔离和路径安全是常被忽视的隐患。

---

*本报告基于 2026-06-04 各项目 GitHub 社区动态生成，数据窗口为过去 24 小时。分析引擎：OWL*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-04

---

## 1. 今日速览

NanoBot 今日活跃度处于**高位**：过去 24 小时内 Issues 更新 32 条（新开/活跃 26 条，关闭 6 条），PR 更新 31 条（待合并 15 条，已合并/关闭 16 条），无新版本发布。项目正处于密集迭代期，核心贡献者 `chengyongru` 今日合并了 10+ 个 PR，涵盖 WebUI 重构、Agent 生命周期钩子、记忆系统优化、Cron 流修复等多个方向。社区侧，多 Agent 协作、安全沙箱、跨渠道通信等高级功能诉求持续涌现，但大量早期 Issue 仍处于 stale 状态，积压问题值得维护者关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 16 条，以下为最重要的几项：

| PR | 作者 | 说明 |
|---|---|---|
| [#4174](https://github.com/HKUDS/nanobot/pull/4174) | chengyongru | **修复顶层导入顺序** — 恢复 `nanobot.cli.commands` 模块级导入到顶部，修复 E402 lint 违规，提升代码规范性 |
| [#4157](https://github.com/HKUDS/nanobot/pull/4157) | chengyongru | **WebUI 启动请求超时保护** — 新增 `fetchWithTimeout` 辅助函数，防止启动时请求无限挂起，增加回归测试覆盖 |
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | chengyongru | **WebUI 运行时状态迁移至事件总线** — 引入进程内运行时事件总线，将 turn/run/model/goal 状态通知与 WebUI/WebSocket 解耦，架构更清晰 |
| [#3999](https://github.com/HKUDS/nanobot/pull/3999) | chengyongru | **修复 sustained goal 导致 runner 提前退出** — 当用户设置 `/goal` 后，AgentRunner 不再因 LLM 返回最终文本而过早退出，保证长时任务持续执行 |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | chengyongru | **重构 Dream 类** — 用简单的 cron + `process_direct` 替代旧的两阶段 Dream 类，简化架构 |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | chengyongru | **增强 Dream + Consolidator 提示词** — 解决记忆重复膨胀问题，实现 MECE（互斥且穷尽）长期记忆 |
| [#3932](https://github.com/HKUDS/nanobot/pull/3932) | chengyongru | **修复 stream 模式下重复 tool_call_id** — 解决 OpenAI 兼容 provider 在流式解析中产生重复 ID 导致 API 拒绝请求的 bug |
| [#3920](https://github.com/HKUDS/nanobot/pull/3920) | chengyongru | **新增 compaction benchmark + 优化 consolidator 提示词** — 系统化基准测试驱动上下文压缩优化 |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | chengyongru | **提取 `ContextBuilder.build_user_content()` 公共方法** — 合并多个内部方法为单一调用，降低复杂度 |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | chengyongru | **新增多 Agent 邮箱频道插件** — 基于文件系统的邮箱频道插件，实现 Agent 间通信，零侵入现有代码 |
| [#3221](https://github.com/HKUDS/nanobot/pull/3221) | chengyongru | **新增 `nanobot auth` 命令** — 支持 OAuth Device Flow 和 `--auth-key`，自动配置默认 provider/model |

**整体评估**：项目在今日取得了显著进展，特别是在 **WebUI 架构重构**（事件总线解耦）、**Agent 可靠性**（sustained goal 修复）、**记忆系统优化**（MECE 去重）和 **多 Agent 通信**（邮箱插件）四个方向上均有实质性推进。`chengyongru` 作为核心贡献者，今日合并的 PR 数量和质量都非常高。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 👍 | 核心诉求 |
|---|---|---|---|
| [#222](https://github.com/HKUDS/nanobot/issues/222) Multi agents setup - Supported ? | 10 | 7 | 用户希望了解多 Agent 配置是否支持，并期望有文档/指南 |
| [#979](https://github.com/HKUDS/nanobot/issues/979) 防止执行 rm 指令是防不住 AI 的 | 5 | 0 | AI 绕过安全限制执行危险 `rm` 命令，安全机制形同虚设 |
| [#1022](https://github.com/HKUDS/nanobot/issues/1022) Nanobot fails for long-running task | 4 | 3 | 长时任务（如爬取+分析）执行时 Agent 返回"Starting execution now"后无响应 |
| [#80](https://github.com/HKUDS/nanobot/issues/80) Add lightweight memory retrieval? | 4 | 0 | 希望引入 BM25/TF-IDF 轻量记忆检索，仅注入 top-k 相关记忆片段 |
| [#954](https://github.com/HKUDS/nanobot/issues/954) Progress streaming leaks internal tool calls | 3 | 1 | v0.1.4 进度流式传输将内部工具调用（exec/read_file/list_dir）泄露到用户聊天界面 |
| [#912](https://github.com/HKUDS/nanobot/issues/912) Support Task-Specific Model Configuration | 3 | 3 | 希望为不同任务类型（对话/工具使用/浏览器使用）配置不同模型 |
| [#143](https://github.com/HKUDS/nanobot/issues/143) Filesystem tools do not enforce restrict_to_workspace | 2 | 4 | 文件系统工具未强制执行 `restrict_to_workspace` 配置，存在安全漏洞 |

### 🔥 今日新开/活跃的重要 PRs

| PR | 说明 |
|---|---|
| [#4181](https://github.com/HKUDS/nanobot/pull/4181) | 新增 Cmd/Ctrl+Shift+O 快捷键开始新聊天（WebUX 体验优化） |
| [#4179](https://github.com/HKUDS/nanobot/issues/4179) | 原生 Agent-to-Agent (A2A) 编排功能请求 — 支持 Supervisor → Researcher → Writer 多 Agent 协作 |
| [#4176](https://github.com/HKUDS/nanobot/pull/4176) | 新增 run-level Agent 生命周期钩子（before_run/after_run/on_error/on_finally） |
| [#4177](https://github.com/HKUDS/nanobot/pull/4177) | 改善新手入门文档，降低上手门槛 |
| [#4180](https://github.com/HKUDS/nanobot/pull/4180) | 修复 QQ 频道未授权 C2C 用户发送配对码问题 |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | Agent 跨实例消息总线 — 多 Agent 实例间通信 |

**分析**：社区热点集中在三个方向：
1. **多 Agent 协作**（#222, #4179, #3992, #3461）— 这是当前最强烈的用户需求，已有多个 PR 在推进
2. **安全性**（#979, #143, #931）— 危险命令执行、文件系统沙箱逃逸、SSRF 防护等安全问题持续被关注
3. **长时任务可靠性**（#1022, #3999）— 用户期望 Agent 能可靠执行长时间任务，今日 #3999 的合并是重要修复

---

## 5. Bug 与稳定性

### 🔴 严重（已有 Fix PR）

| 问题 | Issue | Fix PR | 状态 |
|---|---|---|---|
| sustained goal 导致 runner 提前退出，长时任务无法持续 | [#1022](https://github.com/HKUDS/nanobot/issues/1022) | [#3999](https://github.com/HKUDS/nanobot/pull/3999) | ✅ 已合并 |
| stream 模式下重复 tool_call_id 导致 API 拒绝请求 | — | [#3932](https://github.com/HKUDS/nanobot/pull/3932) | ✅ 已合并 |
| WebUI 启动请求无限挂起 | — | [#4157](https://github.com/HKUDS/nanobot/pull/4157) | ✅ 已合并 |
| Cron 提醒缺少 stream_id 导致 WebSocket 客户端无法关联流 | [#3718](https://github.com/HKUDS/nanobot/issues/3718) | [#3720](https://github.com/HKUDS/nanobot/pull/3720) | ⏳ 待合并 |

### 🟡 中等（待修复）

| 问题 | Issue | 说明 |
|---|---|---|
| 进度流式传输泄露内部工具调用到用户聊天 | [#954](https://github.com/HKUDS/nanobot/issues/954) | v0.1.4 引入的 PR #802 副作用，影响用户体验 |
| 文件系统工具未强制执行 restrict_to_workspace | [#143](https://github.com/HKUDS/nanobot/issues/143) | 安全漏洞，👍4 但长期未处理 |
| AI 绕过 rm 安全限制执行危险命令 | [#979](https://github.com/HKUDS/nanobot/issues/979) | 安全机制被绕过，已关闭但问题未根本解决 |
| exec 工具幻觉过多 | [#937](https://github.com/HKUDS/nanobot/issues/937) | 用户因此停止评估框架 |
| Remote MCP URL 超时（asyncio.CancelledError） | [#935](https://github.com/HKUDS/nanobot/issues/935) | 远程 MCP 服务器连接失败 |
| Telegram/Discord 媒体文件永不清理 | [#896](https://github.com/HKUDS/nanobot/issues/896) | 磁盘无限增长 |

### 🟢 低优先级

| 问题 | Issue |
|---|---|
| WhatsApp 频道在 Linux Python 3.12 下 WebSocket 断连 | [#150](https://github.com/HKUDS/nanobot/issues/150) |
| 媒体路径在工作区外，restrictToWorkspace=true 时无法访问 | [#984](https://github.com/HKUDS/nanobot/issues/984) |

---

## 6. 功能请求与路线图信号

### 高优先级（已有 PR 推进）

| 功能 | 需求 Issue | 相关 PR | 信号强度 |
|---|---|---|---|
| **多 Agent 协作/通信** | [#222](https://github.com/HKUDS/nanobot/issues/222), [#4179](https://github.com/HKUDS/nanobot/issues/4179), [#1006](https://github.com/HKUDS/nanobot/issues/1006) | [#3461](https://github.com/HKUDS/nanobot/pull/3461) ✅, [#3992](https://github.com/HKUDS/nanobot/pull/3992) ⏳ | ⭐⭐⭐⭐⭐ |
| **Agent 生命周期钩子** | — | [#4176](https://github.com/HKUDS/nanobot/pull/4176) ⏳ | ⭐⭐⭐⭐ |
| **新手入门文档改善** | — | [#4177](https://github.com/HKUDS/nanobot/pull/4177) ⏳ | ⭐⭐⭐ |
| **WebUI 快捷键** | [#4178](https://github.com/HKUDS/nanobot/issues/4178) | [#4181](https://github.com/HKUDS/nanobot/pull/4181) ⏳ | ⭐⭐⭐ |

### 中优先级（仅有 Issue，无 PR）

| 功能 | 需求 Issue | 👍 | 说明 |
|---|---|---|---|
| 任务特定模型配置 | [#912](https://github.com/HKUDS/nanobot/issues/912) | 3 | 为对话/工具/浏览器使用配置不同模型 |
| 轻量记忆检索（BM25/TF-IDF） | [#80](https://github.com/HKUDS/nanobot/issues/80) | 0 | 减少 token 消耗，提升记忆相关性 |
| 持久化长期记忆系统 | [#135](https://github.com/HKUDS/nanobot/issues/135) | 4 | 跨会话上下文保持 |
| 多租户网关 | [#936](https://github.com/HKUDS/nanobot/issues/936), [#976](https://github.com/HKUDS/nanobot/issues/976) | 0 | 单实例管理多 Agent |
| 子 Agent 配置文件（可配置工具和技能） | [#1012](https://github.com/HKUDS/nanobot/issues/1012) | 0 | 专业化子 Agent 类型 |
| 原生沙箱接口 | [#931](https://github.com/HKUDS/nanobot/issues/931) | 0 | Deno/Firecracker 隔离执行不可信插件 |
| 零 Token 消息路由（Pre-handler Hook） | [#990](https://github.com/HKUDS/nanobot/issues/990) | 0 | 特定模式消息绕过 LLM 处理 |
| 核心架构改进 RFC | [#97](https://github.com/HKUDS/nanobot/issues/97) | 6 | 内存、安全、测试的综合改进提案 |

### 渠道扩展需求

| 渠道 | Issue | 👍 |
|---|---|---|
| Mattermost | [#1011](https://github.com/HKUDS/nanobot/issues/1011) | 4 |
| SimpleX Chat | [#240](https://github.com/HKUDS/nanobot/issues/240) | 2 |
| WeChat | [#192](https://github.com/HKUDS/nanobot/issues/192) | 0 |

**路线图判断**：下一版本（推测为 v0.1.5 或 v0.2.0）极可能聚焦于：
1. **多 Agent 协作架构**（邮箱插件已合并，A2A PR 待审）
2. **Agent 可靠性与生命周期管理**（sustained goal 已修复，生命周期钩子 PR 待审）
3. **WebUI 体验提升**（事件总线重构已完成，快捷键 PR 待审）
4. **记忆系统持续优化**（MECE 去重已合并，轻量检索仍在讨论）

---

## 7. 用户反馈摘要

### 😤 痛点（不满意）

- **安全机制形同虚设**：用户报告 AI 能绕过 `rm` 防护执行危险命令（[#979](https://github.com/HKUDS/nanobot/issues/979)），文件系统工具未强制执行工作区限制（[#143](https://github.com/HKUDS/nanobot/issues/143)）
- **长时任务不可靠**：用户尝试让 Agent 执行"爬取电子表格并分析"等长时任务时，Agent 返回"Starting execution now"后无响应（[#1022](https://github.com/HKUDS/nanobot/issues/1022)）
- **exec 工具幻觉严重**：用户因 exec 工具幻觉过多而停止评估框架（[#937](https://github.com/HKUDS/nanobot/issues/937)）
- **进度流式传输泄露内部细节**：升级 v0.1.4 后，内部工具调用暴露在用户聊天中（[#954](https://github.com/HKUDS/nanobot/issues/954)）
- **WhatsApp 频道不稳定**：Linux Python 3.12 下 WebSocket 反复断连（[#150](https://github.com/HKUDS/nanobot/issues/150)）
- **磁盘无限增长**：Telegram/Discord 媒体文件永不清理（[#896](https://github.com/HKUDS/nanobot/issues/896)）

### 😊 满意

- 用户称赞 NanoBot **架构简洁轻量**，复杂 Agent 实现控制在 4k 行以内（[#97](https://github.com/HKUDS/nanobot/issues/97)）
- 长时任务用户感谢项目（"thanks for a great project"），尽管遇到了问题仍持正面态度（[#1022](https://github.com/HKUDS/nanobot/issues/1022)）
- 多 Agent 配置用户表示"Would love to see docs / small guide"，说明对功能有兴趣（[#222](https://github.com/HKUDS/nanobot/issues/222)）

### 📋 典型使用场景

1. **个人 AI 助手**：通过 Telegram/WhatsApp/Discord 与 Agent 对话
2. **自动化任务**：爬取网页、分析电子表格、批量处理数据
3. **多 Agent 协作**：希望搭建 Supervisor → Researcher → Writer 的多 Agent 团队
4. **跨平台通信**：需要在 Mattermost、SimpleX Chat 等渠道部署
5. **长时后台任务**：设置目标后让 Agent 持续运行（如持续监控、定期报告）

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，提醒维护者关注：

### 🔴 高优先级积压

| Issue/PR | 创建日期 | 最后更新 | 说明 |
|---|---|---|---|
| [#143](https://github.com/HKUDS/nanobot/issues/143) Filesystem tools do not enforce restrict_to_workspace | 2026-02-05 | 2026-06-03 | **安全漏洞**，👍4，近 4 个月未解决 |
| [#97](https://github.com/HKUDS/nanobot/issues/97) RFC: Core Architecture Improvements | 2026-02-04 | 2026-06-03 | 👍6 的综合改进提案，涉及内存/安全/测试 |
| [#135](https://github.com/HKUDS/nanobot/issues/135) Persistent long-term memory | 2026-02-05 | 2026-06-03 | 👍4，跨会话上下文是核心 UX 问题 |
| [#912](https://github.com/HKUDS/nanobot/issues/912) Task-Specific Model Configuration | 2026-02-20 | 2026-06-03 | 👍3，灵活模型配置需求 |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) Mattermost Bot | 2026-02-22 | 2026-06-03 | 👍4，渠道扩展需求 |

### 🟡 中等优先级积压

| Issue/PR | 创建日期 | 最后更新 | 说明 |
|---|---|---|---|
| [#222](https://github.com/HKUDS/nanobot/issues/222) Multi agents setup | 2026-02-06 | 2026-06-03 | 👍10 但评论未得到官方回应 |
| [#80](https://github.com/HKUDS/nanobot/issues/80) Lightweight memory retrieval | 2026-02-04 | 2026-06-03 | BM25/TF-IDF 检索提议 |
| [#936](https://github.com/HKUDS/nanobot/issues/936) Multi-Tenant Gateway | 2026-02-21 | 2026-06-03 | 多租户网关 |
| [#931](https://github.com/HKUDS/nanobot/issues/931) Native Sandbox Interface | 2026-02-21 | 2026-06-03 | 不可信插件沙箱 |
| [#240](https://github.com/HKUDS/nanobot/issues/240) SimpleX Chat support | 2026-02-07 | 2026-06-03 | 👍2，去中心化通信渠道 |

### 积压 PR

| PR | 创建日期 | 说明 |
|---|---|---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) Agent Collaboration — Cross-Instance Message Bus | 2026-05-24 | 跨实例消息总线，已测试完成待审 |
| [#3720](https://github.com/HKUDS/nanobot/pull/3720) Fix cron reminders streaming | 2026-05-09 | Cron 流修复，近一个月未审 |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) Fix MCP unsafe HTTP URLs | 2026-05-31 | SSRF 防护，安全相关 |
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) Azure AAD Auth support | 2026-05-31 | Azure 企业认证支持 |

**建议**：
1. 对 stale Issue 进行批量处理：关闭已解决的、标记需要更多信息、或将高价值需求纳入路线图
2. 优先审查安全相关 PR（#4123 SSRF 防护）
3. 对 #222（多 Agent）给出官方回应，即使当前不支持也应说明路线图计划

---

*日报生成时间：2026-06-04 | 数据来源：GitHub HKUDS/nanobot | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-04

---

## 1. 今日速览

Hermes Agent 今日活跃度极高，过去 24 小时内 Issues 与 PR 各更新 **50 条**，社区贡献节奏紧凑。Issues 侧新开/活跃 44 条、关闭 6 条，净增 38 条，积压仍在扩大；PR 侧待合并 36 条、已合并/关闭 14 条，合并率约 28%，消化速度尚可但追赶压力明显。**无新版本发布**，项目处于高频迭代但未冻结发布的阶段。今日贡献集中在 Desktop 体验修复、Docker 部署稳定性、macOS launchd 支持、MCP 工具链以及 TUI 审批流程改进，反映出项目正从"功能扩张期"向"打磨与稳定性期"过渡。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 14 条，以下为最具实质推进意义的条目：

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 1 | [#38577](https://github.com/NousResearch/hermes-agent/pull/38577) | Feature (已合并) | **Onboarding 流程优化**：明确区分 Anthropic API Key 与 OAuth 订阅两条路径，消除用户配置歧义，降低新用户上手门槛。 |
| 2 | [#38574](https://github.com/NousResearch/hermes-agent/pull/38574) | Feature (已合并) | **Slack AI Assistant Steps API**：用原生 `chat.startStream/appendStream/stopStream` 替代 legacy postMessage 编辑循环，Slack 对话线程中可展示原生折叠步骤卡片，体验大幅提升。 |
| 3 | [#38562](https://github.com/NousResearch/hermes-agent/pull/38562) | Bug Fix (已合并) | **`hermes -c / --resume` 恢复原始工作目录**：经典 CLI 此前未读写 sessions 表的 `cwd` 列，导致 resume 后在错误目录执行。此 PR 补全了该逻辑。 |
| 4 | [#37109](https://github.com/NousResearch/hermes-agent/issues/37109) 关联 | Feature (Issue 已关闭) | **Kanban Executor Board 活跃 Worker 面板**：Kanban 看板新增实时 worker 健康状态可见性。 |
| 5 | [#37108](https://github.com/NousResearch/hermes-agent/issues/37108) | Bug Fix (Issue 已关闭) | **Kanban 看板列与 scheduled/review 状态对齐**：前端展示与后端规范一致，消除任务被隐藏或错分的问题。 |

**整体判断**：项目在 Desktop/Slack/CLI 三个入口的用户体验上向前迈进了一步，Kanban 插件的看板功能趋于完善。但 36 条待合并 PR 的积压量仍然偏大，建议维护者加快 review 节奏。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**① [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) — Add `--host` and CORS config for Hermes Dashboard (👍10, 6 评论)**
- **诉求**：Dashboard 默认绑定 `127.0.0.1:9119` 且 CORS 白名单硬编码为 localhost，导致无法通过 Tailscale/VPN 远程访问。用户希望增加 `--host` 参数和 `allow_origin_regex` 配置项。
- **分析**：这是长期存在的基础设施级需求（Issue 创建于 4 月），👍 数最高但至今未合并 fix。随着 Hermes Desktop 用户增多，远程访问诉求会持续升温。

**② [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) — Gemini 503 不触发 provider fallback (4 评论)**
- **诉求**：当 Gemini 返回 503（高负载）时，即使配置了 `fallback_provider`，系统也不会切换备用提供商，直接将错误抛给调用方。
- **分析**：与 [#35876](https://github.com/NousResearch/hermes-agent/issues/35876)（Gemini 429 quota fallback 静默失败）属于同一类问题——**vision 子系统的 fallback 链存在系统性缺陷**，影响所有依赖 Gemini 的视觉工作流。

**③ [#24357](https://github.com/NousResearch/hermes-agent/issues/24357) — QQBot gateway 心跳停止后陷入 4009 循环 (3 评论)**
- **诉求**：QQBot 适配器在 Docker 中运行一段时间后停止心跳，重连后循环报 `4009 Session timed out`。
- **分析**：平台适配器的长连接稳定性问题，影响 QQ 生态用户。

### 🔥 今日最受关注的 PR

**④ [#38578](https://github.com/NousResearch/hermes-agent/pull/38578) — fix(desktop): render approval/sudo/secret prompts**
- Desktop 网关事件处理器此前只处理 `clarify.request`，完全缺失 `approval.request`、`sudo.request`、`secret.request` 的分支，导致工具审批静默超时。这是一个**影响所有 Desktop 用户工具调用**的关键修复。

**⑤ [#38588](https://github.com/NousResearch/hermes-agent/pull/38588) — feat: Claude subprocess runtime bridge (/claude-runtime)**
- 新增 `/claude-runtime` 命令，将 Anthropic/Claude 请求路由到官方 `claude` CLI 子进程，使用 Claude Pro/Max 订阅 token 而非 API credits。这是对 [#38577](https://github.com/NousResearch/hermes-agent/pull/38577) onboarding 改进的功能延伸。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 严重

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#38471](https://github.com/NousResearch/hermes-agent/issues/38471) | Hermes Desktop 跳过 onboarding 却加载了无效的 OpenAI API key，用户无处配置 OAI/Codex 信息 | 无 |

### 🟠 P2 — 高

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) | Gemini 503 不触发 vision fallback | 无 |
| [#35876](https://github.com/NousResearch/hermes-agent/issues/35876) | Gemini 429 quota fallback 链因 kwargs 未透传而静默失败 | 无 |
| [#38156](https://github.com/NousResearch/hermes-agent/issues/38156) | Windows TUI 将 host launch cwd 传入 Docker terminal 会话 | 无 |
| [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) | MCP server 在临时断线后永久放弃重连，需重启 gateway | 无 |
| [#32766](https://github.com/NousResearch/hermes-agent/issues/32766) | computer_use (cua-driver) 过于脆弱，破坏 auxiliary vision 路由 | 无 |
| [#38575](https://github.com/NousResearch/hermes-agent/issues/38575) | `.env` 中固定的 `HERMES_DASHBOARD_SESSION_TOKEN` 导致 Desktop LOCAL 模式无限 SIGTERM 重启循环 | [#38586](https://github.com/NousResearch/hermes-agent/pull/38586) 🔧 |
| [#38580](https://github.com/NousResearch/hermes-agent/issues/38580) | `requests==2.33.0` aarch64 wheel 缺失 `_types.py`，Jetson ARM 上启动崩溃 | 无 |

### 🟡 P3 — 中/低

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#37869](https://github.com/NousResearch/hermes-agent/issues/37869) | Desktop 显示远程连接失败但日志显示后端已就绪 | 已关闭 |
| [#24357](https://github.com/NousResearch/hermes-agent/issues/24357) | QQBot 心跳停止后 4009 循环 | 无 |
| [#29418](https://github.com/NousResearch/hermes-agent/issues/29418) | Nous inference API 流式调用在 agent 级 payload 下超时 | 无 |
| [#38270](https://github.com/NousResearch/hermes-agent/issues/38270) | Desktop 不实时显示 Telegram gateway 会话 | 无 |
| [#38581](https://github.com/NousResearch/hermes-agent/issues/38581) | TUI 审批提示截断多行 execute_code payload，无法在提示内查看完整内容 | 无 |
| [#38575](https://github.com/NousResearch/hermes-agent/issues/38575) | Desktop LOCAL 模式 SIGTERM 启动循环 | [#38586](https://github.com/NousResearch/hermes-agent/pull/38586) 🔧 |

**稳定性评估**：Vision 子系统的 fallback 链存在**系统性缺陷**（至少 3 个相关 Issue），是影响可靠性的最大风险点。Desktop 的 onboarding 和 session token 管理有多个 P1/P2 问题，建议优先处理。

---

## 6. 功能请求与路线图信号

### 高可能性纳入下一版本

| 方向 | Issue/PR | 信号强度 | 说明 |
|------|----------|----------|------|
| **Desktop 审批流程完善** | [#38578](https://github.com/NousResearch/hermes-agent/pull/38578) PR 待合并 | ⭐⭐⭐⭐⭐ | 修复已就绪，只等 review |
| **Claude 子进程运行时** | [#38588](https://github.com/NousResearch/hermes-agent/pull/38588) PR 待合并 | ⭐⭐⭐⭐ | 与 onboarding 改进形成闭环 |
| **1Password 密钥后端** | [#38569](https://github.com/NousResearch/hermes-agent/pull/38569) PR 待合并 | ⭐⭐⭐ | 企业/高级用户需求，实现完整 |
| **macOS launchd 支持** | [#38567](https://github.com/NousResearch/hermes-agent/pull/38567) + [#38568](https://github.com/NousResearch/hermes-agent/pull/38568) 两个 PR | ⭐⭐⭐⭐ | macOS 用户 gateway 稳定性的关键补全 |
| **MCP 环境变量解析** | [#38571](https://github.com/NousResearch/hermes-agent/pull/38571) PR 待合并 | ⭐⭐⭐ | 影响 n8n 等 auth-requiring MCP server 的接入 |

### 中期可能推进

| 方向 | Issue | 说明 |
|------|-------|------|
| **Dashboard 远程访问** | [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | 👍10，需求明确但涉及安全考量，需谨慎设计 |
| **Context Preflight（行动前强制反思）** | [#36053](https://github.com/NousResearch/hermes-agent/issues/36053) | RFC 草案阶段，架构级变更 |
| **按需工具/MCP 发现** | [#34038](https://github.com/NousResearch/hermes-agent/issues/34038) | 解决启动时全量加载导致的 token 浪费 |
| **自动化工作区记忆** | [#38552](https://github.com/NousResearch/hermes-agent/issues/38552) | Agent 跨会话记住目录用途 |
| **Agent 经济层** | [#38280](https://github.com/NousResearch/hermes-agent/issues/38280) | 原生钱包、服务注册、信誉账本——愿景宏大，早期阶段 |

### 低可能性 / 需更多讨论

- [#38570](https://github.com/NousResearch/hermes-agent/issues/38570) Windows 桌面应用中文支持——功能请求但信息不完整
- [#38585](https://github.com/NousResearch/hermes-agent/issues/38585) execute_code 在 cron 模式下的可用性——涉及安全模型变更

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Vision fallback 链不可靠**：多个用户（saved-j 至少提了 3 个相关 Issue）报告 Gemini 503/429 错误不会触发 fallback，导致视觉工作流直接中断。这是**最高频的稳定性投诉**。

2. **Desktop onboarding 体验断裂**：用户下载 Desktop 后跳过 onboarding 却遇到无效 API key、远程连接失败但日志显示正常等矛盾现象，说明 onboarding 流程与运行时状态之间存在**状态同步缺陷**。

3. **Docker 部署体验差**：Windows TUI 传入 host cwd 到容器、`--user` 参数静默破坏 s6-overlay 镜像、config migration 在容器升级后未自动执行——Docker 用户面临多个"能启动但不能正常工作"的陷阱。

4. **TUI 审批流程不安全**：多行 execute_code payload 被截断且无法在提示内查看完整内容，用户可能在不知情的情况下批准危险脚本。

5. **MCP server 断线后永久放弃**：临时网络波动导致 MCP server 永久离线，必须重启 gateway，对生产环境不可接受。

### 😊 满意 / 期待

- Slack 原生 AI Assistant Steps 的合并获得正面反馈，用户期待更丰富的消息平台集成体验。
- Claude 子进程运行时（`/claude-runtime`）提案受到关注，用户希望利用 Claude Pro/Max 订阅而非消耗 API credits。
- 1Password 密钥后端提案显示用户对**企业级密钥管理**的需求。

### 📋 典型使用场景

- **远程开发者**：通过 Tailscale/VPN 访问 Dashboard（#10567）
- **多平台消息用户**：同时使用 Telegram、Discord、Slack 与 Hermes 交互
- **Docker 部署用户**：在容器中运行 gateway + QQBot 适配器
- **视觉工作流用户**：依赖 Gemini 进行图像理解，需要可靠的 fallback
- **macOS 用户**：通过 launchd 管理 gateway 服务

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR 需维护者关注：

| 条目 | 创建时间 | 状态 | 紧急度 | 说明 |
|------|----------|------|--------|------|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) Dashboard 远程访问 | 2026-04-15 | 开放 40 天 | 🔴 高 | 👍10，需求明确，涉及安全设计 |
| [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) Gemini 503 fallback | 2026-05-14 | 开放 21 天 | 🔴 高 | Vision 核心路径缺陷 |
| [#35876](https://github.com/NousResearch/hermes-agent/issues/35876) Gemini 429 fallback kwargs | 2026-05-31 | 开放 4 天 | 🔴 高 | 与 #25822 同根因 |
| [#24357](https://github.com/NousResearch/hermes-agent/issues/24357) QQBot 心跳 4009 | 2026-05-12 | 开放 23 天 | 🟠 中 | 平台适配器稳定性 |
| [#29418](https://github.com/NousResearch/hermes-agent/issues/29418) Nous API 流式超时 | 2026-05-20 | 开放 15 天 | 🟠 中 | 影响 Nous 官方推理用户 |
| [#34038](https://github.com/NousResearch/hermes-agent/issues/34038) 按需工具/MCP 发现 RFC | 2026-05-28 | 开放 7 天 | 🟡 中 | 架构级提案，需设计讨论 |
| [#14768](https://github.com/NousResearch/hermes-agent/pull/14768) LLM Gateway 内置提供商 | 2026-04-23 | 开放 42 天 | 🟡 中 | PR 长期未 review |
| [#30704](https://github.com/NousResearch/hermes-agent/issues/30704) Gemini 2.5+ 缺失 allowlist | 2026-05-23 | 开放 12 天 | 🟠 中 | 影响 Gemini 2.5-flash 用户 |

**建议**：
1. **Vision fallback 链**应作为专项治理，统一修复 #25822、#35876、#30704 三个关联 Issue。
2. **#10567 Dashboard 远程访问** 已开放 40 天且 👍 最高，建议至少给出设计回复或纳入里程碑。
3. **PR #14768 (LLM Gateway)** 已开放 42 天，需要 review 或关闭。

---

*数据来源：NousResearch/hermes-agent GitHub 仓库 | 报告生成时间：2026-06-04 | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-04

---

## 1. 今日速览

PicoClaw 今日活跃度**较高**，共处理 3 条 Issue 更新和 10 条 PR 更新，其中 3 个 PR 已合并/关闭，7 个 PR 仍待合并。项目发布了新的 Nightly Build（`v0.2.9-nightly.20260603`），表明主分支迭代节奏稳定。社区贡献者集中在**通道（channel）稳定性修复**和**安全加固**两个方向，反映出 v0.2.9 发布后用户正积极回归测试并暴露边缘问题。整体项目健康度良好，但积压的 stale PR 数量偏多，需维护者加快审查节奏。

---

## 2. 版本发布

### Nightly Build — `v0.2.9-nightly.20260603.a502aa7f`

- **类型**：自动化夜间构建，**非稳定版本**，仅供测试使用
- **基于**：`v0.2.9` → `main` 的增量变更
- **完整变更日志**：https://github.com/sipeed/picocaw/compare/v0.2.9...main
- **注意事项**：此版本为自动构建，可能不稳定，不建议用于生产环境。从今日合并的 PR 来看，nightly 中已包含 Go 运行时安全补丁（GO-2026-5039）等修复。

---

## 3. 项目进展

今日合并/关闭的 3 个 PR 推进了以下方向：

| PR | 状态 | 说明 |
|---|---|---|
| **#2997** [CLOSED] | ✅ 合并 | **Go 运行时安全升级**：将 Go 从 1.25.10 升级至 1.25.11，修复 `net/textproto` 中 HTTP 头名称未转义导致的安全漏洞（GO-2026-5039）。这是重要的安全补丁。 |
| **#2899** [CLOSED] | ✅ 合并 | **MQTT 通道 TLS 安全加固**：此前 `InsecureSkipVerify` 硬编码为 `true`，所有 MQTT 连接均面临 MITM 攻击风险。新增 `TLSSkipVerify` 配置项（默认 `false`），用户可自主决定是否跳过证书验证。 |
| **#2994** [CLOSED] | ✅ 合并 | **新增 Picocaw Agent 技能文档**：在 `workspace/skills/picoclaw-agent/SKILL.md` 中添加面向 PicoClaw 的操作指南，覆盖 CLI 使用、provider 配置等核心工作流。 |

**整体推进评估**：项目在**安全加固**方向迈进了重要一步（Go 运行时 + MQTT TLS），同时完善了 Agent 技能生态。这三个合并均为质量改进型变更，无破坏性变更。

---

## 4. 社区热点

### 🔥 Issue #2404 — 支持流式 HTTP 请求配置
- **链接**：https://github.com/sipeed/picoclaw/issues/2404
- **数据**：11 条评论，1 个 👍，创建已逾 2 个月仍活跃
- **分析**：这是今日讨论最活跃的 Issue。用户希望在配置文件中添加 `"streaming": true` 选项，以支持向 LLM 后端发送流式 HTTP 请求（类似 Python OpenAI 客户端的 `stream=True`）。11 条评论表明社区对此需求有持续讨论，但尚未有官方回应或关联 PR。这是一个**高需求的功能缺口**——流式输出是 LLM 应用的基础体验需求，PicoClaw 作为 AI 网关，缺少配置层面的显式支持会阻碍用户接入更多后端。

### 🔧 PR #2957 — 修复流式传输中 tool_calls 丢失
- **链接**：https://github.com/sipeed/picoclaw/pull/2957
- **关联 Bug**：Issue #2958
- **分析**：此 PR 直接对应 Issue #2958 报告的 bug——通过 pico WebSocket 通道连续发起工具调用请求时，后续 `tool_calls` 消息未送达 UI。PR 作者（loafoe）提出通过新增 `outboundMessageIsToolCalls()` 辅助函数，在 `preSend()` 中排除 tool_calls 被错误过滤。这是一个**关键的功能修复**，直接影响多轮工具调用的可用性。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高 — tool_calls 消息在连续请求中丢失
- **Issue #2958**：https://github.com/sipeed/picoclaw/issues/2958
- **现象**：通过 pico WebSocket 通道连续发起工具调用时，仅第一次请求的 `tool_calls` 送达 UI，后续全部丢失。
- **根因**：#2892 引入的辅助消息过滤逻辑错误地将 `tool_calls` 归类为辅助消息并过滤。
- **Fix PR**：✅ **#2957** 已提交，待合并。

### 🟡 中 — 32位 Android 系统不支持
- **Issue #2954**：https://github.com/sipeed/picoclaw/issues/2954
- **现象**：PicoClaw 无法在 32 位 Android 系统（如 Termux）上运行。
- **状态**：标记 stale，仅 2 条评论，无关联 PR。
- **影响范围**：移动端/嵌入式场景用户。

### 🟡 中 — 安全配置合并后通道被意外禁用
- **PR #2956**：https://github.com/sipeed/picoclaw/pull/2956
- **现象**：用户在 `config.json` 中配置 `enabled: true` 的通道，在加载 `.security.yml` 后被意外禁用。
- **Fix PR**：✅ **#2956** 已提交，待合并。

### 🟢 低 — Singleton PID 检查误判导致启动失败
- **PR #2955**：https://github.com/sipeed/picoclaw/pull/2955
- **现象**：PID 文件中的 PID 被无关进程（如 `systemd-replicated`）复用时，PicoClaw 错误地认为已有实例在运行而拒绝启动。
- **Fix PR**：✅ **#2955** 已提交，待合并。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 判断 |
|---|---|---|---|
| **流式 HTTP 请求配置** | Issue #2404 | 无关联 PR | 高优先级。11 条评论 + 长期活跃，用户需求明确，且流式是 LLM 网关的核心能力。预计下一版本应考虑支持。 |
| **MCP 通道动态请求头** | PR #2696 | 待合并 | 中优先级。允许通道通过 `InboundContext.Raw` 中以 `mcp:` 为前缀的键向 MCP 服务器转发 HTTP 头。已存在 PR，实现方案清晰，合并可能性较高。 |
| **32位 Android 支持** | Issue #2954 | 无关联 PR | 低优先级。标记 stale，社区关注度低，可能涉及 Go 交叉编译和架构适配，工作量较大。 |

**路线图信号**：社区需求正从"基础功能完善"转向"企业级安全配置"（TLS 控制、安全配置合并）和"多协议深度集成"（MCP 动态头、流式支持）。

---

## 7. 用户反馈摘要

**痛点**：
- **流式支持缺失**（Issue #2404）：用户明确对比 Python OpenAI 客户端的 `stream=True`，说明 PicoClaw 在流式输出配置上存在体验差距，用户期望通过简单的配置文件开关启用。
- **工具调用不可靠**（Issue #2958）：多轮工具调用场景下消息丢失，直接影响 Agent 工作流的可靠性，这是核心功能缺陷。
- **安全配置体验差**（PR #2956 关联场景）：用户添加凭证到 `.security.yml` 时期望通道保持启用状态，但实际被意外禁用，说明配置合并逻辑的隐式行为让用户困惑。

**满意点**：
- 社区贡献者（loafoe、yuxuan-7814、chengzhichao-xydt 等）积极提交修复 PR，响应速度较快，说明项目对贡献者友好。

**使用场景**：
- WebSocket 通道 + 多轮工具调用（Agent 工作流）
- MQTT 通道 + TLS 安全连接（IoT 场景）
- Android Termux 移动端部署

---

## 8. 待处理积压

以下 PR/Issue 长期未响应，提醒维护者关注：

| 项目 | 链接 | 创建日期 | 状态 | 建议 |
|---|---|---|---|---|
| **PR #2696** — MCP 动态请求头 | https://github.com/sipeed/picoclaw/pull/2696 | 2026-04-28 | stale, 待合并 | 已逾 1 个月，方案清晰，建议优先审查合并。 |
| **PR #2955** — Singleton PID 身份验证 | https://github.com/sipeed/picoclaw/pull/2955 | 2026-05-27 | stale, 待合并 | 修复生产环境启动失败问题，建议尽快合并。 |
| **PR #2956** — 安全配置合并通道状态 | https://github.com/sipeed/picoclaw/pull/2956 | 2026-05-27 | stale, 待合并 | 配置体验问题，影响用户日常使用。 |
| **PR #2957** — tool_calls 流式修复 | https://github.com/sipeed/picoclaw/pull/2957 | 2026-05-27 | stale, 待合并 | 关键功能修复，关联 Issue #2958。 |
| **Issue #2404** — 流式 HTTP 请求 | https://github.com/sipeed/picoclaw/issues/2404 | 2026-04-07 | 活跃 | 2 个月未获官方回应，建议至少给出路线图反馈。 |
| **Issue #2954** — 32位 Android 支持 | https://github.com/sipeed/picoclaw/issues/2954 | 2026-05-27 | stale | 如无计划支持，建议明确关闭并说明原因。 |

> **总结**：当前积压的 4 个 stale PR 均为质量修复型变更，建议维护者在本周内集中审查处理，以提升社区贡献积极性并改善 v0.2.9 的用户体验。

---

*日报生成时间：2026-06-04 | 数据来源：GitHub sipeed/picoclaw | 分析引擎：OWL*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 — 2026-06-04**

---

### 1. 今日速览

过去24小时内，NanoClaw 社区活跃度显著提升：共新增 **1 个 Issue** 和 **9 个 Pull Requests**，无新版本发布。所有 PR 均处于开放状态，尚未合并，表明当前处于功能迭代与问题修复的快速推进期。项目整体健康度良好，贡献者响应迅速——例如 Issue #2680 在报告当日即有对应修复 PR #2681 提交。多个 PR 聚焦于调度系统稳定性、容器运行兼容性及第三方集成健壮性，反映出项目正从基础功能向生产级可靠性演进。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

今日无 PR 合并或关闭，但多个高质量 PR 已提交并等待审查，关键进展包括：

- **调度系统可靠性增强**：  
  - PR #2678 修复了永久失败任务未重新触发下一次周期执行的问题，将 `getCompletedRecurring` 扩展为 `getFinishedRecurring`，确保失败任务也能正确重调度。  
  - PR #2679 新增 `notifyFailedTasks` 钩子，将永久失败任务转化为用户可见通知，提升可观测性。  
  - PR #2677 为预任务脚本添加单次重试机制并附带诊断信息，降低因临时故障导致任务中断的风险。

- **服务启动兼容性修复**：  
  PR #2681 针对加密主目录（如 ecryptfs/fscrypt）场景下 linger 启用后服务无法启动的问题提供修复，直接响应 Issue #2680。

- **容器与代理环境适配**：  
  PR #2676 在容器运行器中添加 `NO_PROXY` 配置，绕过 OneCLI 代理对本地服务的干扰，提升混合部署环境下的稳定性。

- **技能系统兼容性改进**：  
  PR #2682 在 `update-skills` 流程中引入 v2 兼容性检查，自动跳过仅支持 v1 的技能分支，避免升级冲突。

- **Slack 集成健壮性提升**：  
  PR #2675 修复因 Slack section 块超 3000 字符限制导致整条消息被丢弃的问题，增强长内容消息的兼容性。

- **权限继承机制探索**：  
  PR #2605（近期更新）尝试通过 OneCLI 实现父代理权限继承，可能为多代理协作场景奠定基础。

> 尽管尚无合并动作，上述 PR 覆盖核心模块，若顺利合入将显著提升系统稳定性与用户体验。

---

### 4. 社区热点

- **Issue #2680**（[链接](https://github.com/nanocoai/nanoclaw/issues/2680)）：  
  报告在加密主目录（非 LUKS 全盘加密）系统中启用 linger 后，nanoclaw 服务无法随系统启动。该问题直接影响依赖用户级加密的 Linux 用户群体，属关键启动路径缺陷。已有对应修复 PR #2681，显示社区响应高效。

- **PR #2683**（[链接](https://github.com/nanocoai/nanoclaw/pull/2683)）：  
  新增 QMD（Query Markdown Documents）容器技能，支持本地混合搜索（BM25 + 向量），反映用户对本地知识库检索能力的需求增长。作为纯技能扩展（无源码改动），风险低、易集成。

- **PR #2675**（[链接](https://github.com/nanocoai/nanoclaw/pull/2675)）：  
  针对 Slack 消息截断问题，暴露了第三方 SDK（Vercel Chat Adapter）与 Slack API 规范不一致的集成隐患，凸显跨平台适配器测试的重要性。

---

### 5. Bug 与稳定性

| 严重程度 | 问题描述 | Issue | 是否有 Fix PR |
|--------|--------|-------|--------------|
| **高** | 加密主目录 + linger 导致服务无法启动 | [#2680](https://github.com/nanocoai/nanoclaw/issues/2680) | ✅ PR #2681 |
| **中** | 永久失败任务未通知用户且未重调度 | — | ✅ PR #2678, #2679 |
| **中** | 预任务脚本失败后无重试机制 | — | ✅ PR #2677 |
| **低** | Slack 长消息因 section 块超限被整体拒绝 | — | ✅ PR #2675 |

所有已知 Bug 均有对应修复 PR，项目维护响应及时，稳定性风险可控。

---

### 6. 功能请求与路线图信号

- **本地知识检索能力**：PR #2683 引入 QMD 技能，表明社区对“本地 Markdown 文档智能搜索”有明确需求，可能推动未来内置搜索能力或技能市场建设。
- **多代理权限模型**：PR #2605 探索父代理权限继承，虽未明确标记为功能请求，但暗示用户对复杂代理协作场景的支持期待。
- **技能版本兼容性管理**：PR #2682 主动处理 v1/v2 技能分支冲突，预示项目正为技能生态的长期演进做准备。

目前无显式功能请求 Issue，但 PR 内容本身构成强烈的路线图信号：**提升系统鲁棒性、扩展本地能力、优化多代理架构**。

---

### 7. 用户反馈摘要

- **痛点**：  
  - 加密主目录用户遭遇服务无法自启（Issue #2680），属关键部署障碍。  
  - Slack 集成中长消息静默丢失（PR #2675 背景），影响沟通可靠性。  
  - 调度任务失败后缺乏可见反馈（PR #2679 动机），用户难以察觉异常。

- **使用场景**：  
  - 用户在个人 Linux 工作站（含加密主目录）部署 NanoClaw 作为常驻 AI 助手。  
  - 依赖 Slack 进行团队协作，需稳定传递结构化或长文本信息。  
  - 使用定时任务执行自动化工作流，要求失败可观测、可恢复。

- **满意度**：  
  社区贡献者积极提交修复，问题响应迅速，体现较高的参与满意度；但核心功能（如调度、集成）的边界案例仍需加强测试覆盖。

---

### 8. 待处理积压

- **PR #2605**（[链接](https://github.com/nanocoai/nanoclaw/pull/2605)）：  
  提交于 2026-05-24，最后更新于 2026-06-03，涉及“通过 OneCLI 继承父代理权限”。作为潜在架构级变更，需更多设计讨论，建议维护者明确是否纳入近期路线图。

- **长期未响应项**：  
  当前数据未显示超过7天无响应的 Issue 或 PR，积压风险较低。建议持续关注 PR #2675–#2683 的审查进度，避免新功能积压。

---

**总结**：NanoClaw 今日虽无版本发布，但社区贡献活跃，聚焦于提升系统稳定性、兼容性与用户体验。所有关键 Bug 均有对应修复，项目健康度良好。建议优先审查调度系统相关 PR（#2677–#2679）及加密启动修复（#2681），以加速稳定版本迭代。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-04

---

## 1. 今日速览

NullClaw 今日整体活跃度**极低**，处于典型的间歇期平静状态。过去 24 小时内无新 Issue 提交或关闭，无新版本发布，仅有一条 PR 于前日创建后今日仍处于开放待审状态。项目当前处于**维护性迭代阶段**，社区贡献节奏放缓，核心开发工作聚焦于系统提示词与工具过滤机制的精细化打磨。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

今日无 PR 合并或关闭。唯一活跃的 PR 仍处于开放状态，尚未进入合并流程，因此**项目整体功能推进量为零**。

---

## 4. 社区热点

### PR #946 — `fix(agent): filter tools in system prompt text by tool_filter_groups`

- **链接：** [nullclaw/nullclaw#946](https://github.com/nullclaw/nullclaw/pull/946)
- **作者：** vernonstinebaker | 创建于 2026-06-03，最后更新 2026-06-03
- **状态：** OPEN，待合并，👍 0，评论数未定义

**分析：** 该 PR 引入 `filterToolsForPromptText` 函数，对系统提示词文本中的工具列表进行精细化过滤——仅保留内置工具和属于 `always` 过滤组的 MCP 工具，而动态组 MCP 工具从文本提示中移除（其 schema 仍通过原生 API 工具调用在关键词匹配时发送）。此举旨在**减少系统提示词 token 占用**，降低上下文窗口压力，同时不影响动态工具的运行时可用性。这是 Agent 核心推理链路的性能优化，反映出社区对**大规模工具集场景下成本控制**的持续关注。

---

## 5. Bug 与稳定性

过去 24 小时内**无新 Bug 报告、崩溃或回归问题**提交。当前无已知未修复的高危缺陷。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue 提交。从 PR #946 的方向判断，**系统提示词优化与工具调用效率**仍是近期开发重点，下一版本大概率会围绕 Agent 上下文管理、MCP 工具分组策略等方向继续演进。

---

## 7. 用户反馈摘要

今日无新 Issue 或评论产生，无法提炼新的用户痛点。从 PR #946 的改动方向可间接推断：**用户在多 MCP 工具集成场景下，面临系统提示词过长、token 消耗过大的实际问题**，这是当前社区最核心的使用痛点之一。

---

## 8. 待处理积压

当前唯一待处理项即为 **PR #946**，由 vernonstinebaker 于 2026-06-03 提交，已开放超过 24 小时但尚未收到维护者审查或反馈。建议维护者尽快 review 该 PR——其改动涉及 Agent 核心系统提示词生成逻辑，虽为优化性质，但影响面较广，需确认过滤逻辑不会导致特定场景下工具不可用。

> **⚠️ 提醒：** 若该 PR 长期未获响应，可能影响贡献者积极性。建议在 48 小时内给予初步反馈。

---

*数据来源：GitHub API | 生成时间：2026-06-04 | 分析引擎：OWL*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-04

---

## 1. 今日速览

IronClaw 今日处于**高活跃开发期**，过去 24 小时共产生 27 条 Issue 更新（21 开/活跃，6 关闭）和 50 条 PR 更新（22 待合并，28 已合并/关闭），并发布了 **v0.29.1** 补丁版本。开发重心集中在 **Reborn 架构的稳定性加固**（上下文溢出恢复、能力面校验、触发器策略）和 **Slack 集成 MVP**（OAuth 绑定、ProductAdapter 路由）两条主线上。同时，由 henrypark133 主导的一批深度架构问题（Issue #4424–#4429）集中爆发，揭示了 Reborn 本地开发模式下的多个设计缺陷，值得高度关注。社区贡献者 serrrfirat 和 zmanian 持续推动 Slack 集成和 Hooks 子系统的完善。

---

## 2. 版本发布

### ironclaw-v0.29.1 — 2026-06-04

| 类型 | 内容 |
|------|------|
| **新增** | *(web)* 通过 Responses API 透传 temperature 参数（[#3641](https://github.com/nearai/ironclaw/pull/3641)） |
| **修复** | *(engine)* 限定 channel 对话的 v1 历史作用域（[#4320](https://github.com/nearai/ironclaw/pull/4320)） |
| **CI/Release** | 添加 WeCo |

**评估：** 这是一个低风险补丁版本，主要修复了 channel 对话历史隔离的 bug，并补充了 Responses API 的 temperature 透传能力。无破坏性变更，可直接升级。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 说明 |
|----|------|------|
| [#4421](https://github.com/nearai/ironclaw/pull/4421) | ✅ 已合并 | **Slack actor 绑定 Reborn 用户身份** — 新增 product workflow actor-user resolver hook，使外部 Slack 参与者可通过 host-supplied 用户身份查找绑定到 Reborn 用户，是 Slack 集成 MVP 的关键一步 |
| [#4418](https://github.com/nearai/ironclaw/pull/4418) | ✅ 已合并 | **Slack host-beta 路由接入 Reborn serve** — 添加 `[slack]` 配置解析和 feature-gated 服务布线，将 Slack Events API 通过 Reborn runtime、ProductWorkflow、HTTP egress 完整串联，含 DB 迁移 |
| [#4417](https://github.com/nearai/ironclaw/pull/4417) | ✅ 已合并 | **修复 WebUI 实时投影游标恢复** — 拆分 WebUI 投影游标，防止合成实时进度更新推进持久化运行时游标，含回归测试 |
| [#4415](https://github.com/nearai/ironclaw/pull/4415) | ✅ ✅ 已合并 | **PR18.7: 触发器轮询器全路径集成测试** — 在组合层驱动真实后台触发器轮询器，验证从 TriggerRecord 到 LLM 网关的完整路径 |
| [#4412](https://github.com/nearai/ironclaw/pull/4412) | ✅ 已合并 | **绑定本地开发运行时作用域到运行 actor** — 修复 SSO 请求填充 turn actor 但本地开发运行时未使用的问题 |
| [#4380](https://github.com/nearai/ironclaw/pull/4380) | ✅ 已合并 | **WebUI v2 只读 automations API** — 新增 `GET /api/webchat/v2/automations` 端点，暴露调度自动化摘要 |
| [#4222](https://github.com/nearai/ironclaw/issues/4222) | ✅ 已关闭 | HTTP 凭证材料零化修复已合并 |
| [#4351](https://github.com/nearai/ironclaw/issues/4351) | ✅ 已关闭 | Reborn 子代理能力面安全门控已合并 |

**整体进展评估：** Slack 集成从身份绑定到路由布线已打通核心链路，v0.29.x 有望看到 Slack ProductAdapter MVP 的完整交付。触发器子系统的测试覆盖显著增强。WebUI v2 的实时状态和自动化管理 API 逐步完善。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 热度信号 | 核心诉求 |
|-------|----------|----------|
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | 💬 6 条评论，持续活跃 13 天 | **Slack ProductAdapter MVP** — serrrfirat 推动添加默认关闭的 Slack ProductAdapter，支持 DM 和 app mentions，全部通过 Reborn 服务路由。这是 Lane 10 的核心交付物 |
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | 💬 5 条评论，P0 优先级 | **ProductWorkflow 和 InboundTurnService 门面** — 在 ProductAdapter 和 host-layer Reborn 服务之间建立产品级工作流门面，是 Reborn 架构的核心抽象层 |
| [#4376](https://github.com/nearai/ironclaw/issues/4376) | 💬 2 条评论 | **HTTP 凭证载体加固** — 跟进 PR #4372，要求用非 clone 类型和 DTO 边界彻底消除凭证明文泄露风险 |
| [#4425](https://github.com/nearai/ironclaw/issues/4425) | 💬 1 条评论 | **builtin.http 上下文炸弹** — 单次 fetch 可注入 ~1.2MB 原始 HTML 到模型上下文，无大小上限、无 HTML→text 剥离、无引导模型使用 `.save` 的机制 |

### 🔥 待合并的重要 PR

| PR | 规模/风险 | 说明 |
|----|-----------|------|
| [#4430](https://github.com/nearai/ironclaw/pull/4430) | XL / 低风险 | **Slack 个人绑定配对流程** — 新增 Reborn-native Slack 配对挑战/兑换服务和受保护的 WebUI 配对码兑换路由，是 Slack 用户自助绑定的关键 |
| [#4423](https://github.com/nearai/ironclaw/pull/4423) | XL / 低风险 | **Slack 个人绑定 WebUI OAuth 流** — 添加 opt-in WebUI Slack OAuth 路由挂载 |
| [#4414](https://github.com/nearai/ironclaw/pull/4414) | L / 低风险 | **加固循环能力验证** — 修复 #4360，对未解析的 provider schema $ref 形状进行失效保护 |
| [#4413](https://github.com/nearai/ironclaw/pull/4413) | XL / 低风险 | **修复子代理完成观察者投递** — 修复 #4349，防止重放和恢复时重复写入子代理结果 |
| [#4406](https://github.com/nearai/ironclaw/pull/4406) | XL / 中风险 | **PR 18.5a: 类型密封可信触发器入口** — 密封 `TrustedTriggerSubmitRequest`，移除旧的公共 authority-token 门面 |
| [#4379](https://github.com/nearai/ironclaw/pull/4379) | XL / 低风险 | **迁移只读 CLI 命令到 Reborn** — 将 `doctor`、`status`、`config list/get` 迁移到 `ironclaw-reborn` 二进制，使用结构化 DTO |

**热点分析：** 社区当前最关注的两条主线是 **Slack 集成交付**（从 OAuth 绑定到 ProductAdapter 路由）和 **Reborn 运行时稳定性**（能力面安全、触发器策略、上下文管理）。Slack 相关的 PR 正在快速推进合并，预计近期将有显著进展。

---

## 5. Bug 与稳定性

### 🔴 严重（影响核心功能）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#4424](https://github.com/nearai/ironclaw/issues/4424) | `builtin.spawn_subagent` 在系统提示中声明但未出现在结构化 tools 数组中，模型无法调用 | 🆕 新开 | 无 |
| [#4426](https://github.com/nearai/ironclaw/issues/4426) | 父循环工具面为 AllowAll — `interactive_tools` profile_id 被读取后丢弃，生命周期/变异工具暴露在所有聊天中 | 🆕 新开 | 无 |
| [#4420](https://github.com/nearai/ironclaw/issues/4420) | `TriggerCompletionPolicy::CompleteAfterFirstFire` 存储但从未被 settle 路径查询，触发器永远重复触发 | 🆕 新开 | 无 |

### 🟡 中等（影响开发体验/可观测性）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#4427](https://github.com/nearai/ironclaw/issues/4427) | LoopFailureKind 退出原因不可见 — 仅持久化到 DB，无 tracing 输出 | 🆕 新开 | 无 |
| [#4429](https://github.com/nearai/ironclaw/issues/4429) | 提示包重建浪费 — 每次模型调用重新读取 identity 文件和组装 skill 片段，无缓存 | 🆕 新开 | 无 |
| [#4428](https://github.com/nearai/ironclaw/issues/4428) | `builtin.skill_list` 无界返回 — 单次调用返回 14,612 字节（31 个 skill），无分页/截断 | 🆕 新开 | 无 |
| [#4425](https://github.com/nearai/ironclaw/issues/4425) | `builtin.http` 上下文炸弹 — 单次 fetch 注入 ~1.2MB 原始 HTML | 🆕 新开 | 无 |
| [#4400](https://github.com/nearai/ironclaw/issues/4400) | 陈旧 PID 文件导致 IronClaw 无法启动，生产环境需手动干预 | 🆕 新开 | 无 |
| [#4377](https://github.com/nearai/ironclaw/issues/4377) | `/model` 返回的显示名称无法直接用于 NEAR AI provider 的模型切换 | 🆕 新开 | 无 |

### 🟢 已修复/关闭

| Issue | 描述 | 关闭时间 |
|-------|------|----------|
| [#4310](https://github.com/nearai/ironclaw/issues/4310) | 上下文溢出恢复发出 ShrinkContext 但执行器重试时不收缩 | ✅ 已关闭 |
| [#4309](https://github.com/nearai/ironclaw/issues/4309) | 压缩摘要写入可能在失败的 BeforeModel 检查点后存活并阻塞重试 | ✅ 已关闭 |
| [#4222](https://github.com/nearai/ironclaw/issues/4222) | HTTP 凭证材料未零化 | ✅ 已关闭 |
| [#4351](https://github.com/nearai/ironclaw/issues/4351) | 子代理能力面安全门控缺口 | ✅ 已关闭 |

**稳定性评估：** 今日新开 6 个中等以上 severity 的 Issue，其中 #4424（spawn_subagent 不可调用）和 #4426（AllowAll 工具面）直接影响 Reborn 核心安全模型，建议优先处理。#4425（上下文炸弹）和 #4428（skill_list 无界）组合起来可导致单次对话上下文爆炸性增长，需系统性解决。

---

## 6. 功能请求与路线图信号

| 方向 | Issue/PR | 信号强度 | 判断 |
|------|----------|----------|------|
| **Slack 集成 MVP** | [#3857](https://github.com/nearai/ironclaw/issues/3857) + PR [#4421](https://github.com/nearai/ironclaw/pull/4421) + [#4418](https://github.com/nearai/ironclaw/pull/4418) + [#4430](https://github.com/nearai/ironclaw/pull/4430) | 🟢🟢🟢 强 | 多 PR 并行推进，核心链路已合并，配对流程和 OAuth 流即将落地，**下一版本极可能包含 Slack MVP** |
| **Reborn 只读 CLI 迁移** | PR [#4379](https://github.com/nearai/ironclaw/pull/4379) | 🟡 中 | denbite 推动，将 `doctor`/`status`/`config` 迁移到 Reborn 原生 API，结构化 DTO 解耦输出与渲染 |
| **Hooks 第三方扩展激活** | PR [#3951](https://github.com/nearai/ironclaw/pull/3951) | 🟡 中 | zmanian 推动，基于 hook-only projection 模型，默认关闭，等待审查和合并 |
| **Provider 工具数量限制适配** | [#4407](https://github.com/nearai/ironclaw/issues/4407) | 🟡 中 | 新 Issue，Reborn 可能暴露超出 provider tools 数组限制的能力，需要设计模型可见能力选择机制 |
| **OAuth 默认账户** | [#4382](https://github.com/nearai/ironclaw/issues/3857) | 🟡 中 | 用户认证后 OAuth gate 不应再次触发，需设置默认凭证 |
| **Reborn 身份解析器** | [#4381](https://github.com/nearai/ironclaw/issues/4381) | 🟡 中 | 需要规范的 Reborn 身份解析器用于 OAuth 和外部 actor 绑定 |
| **模型切换 UX** | [#4377](https://github.com/nearai/ironclaw/issues/4377) | 🟢 低 | `/model` 返回名称与 provider 可用名称不匹配，影响用户体验 |

---

## 7. 用户反馈摘要

### 真实痛点

1. **生产环境可靠性** — [#4400](https://github.com/nearai/ironclaw/issues/4400) 报告陈旧 PID 文件导致生产实例无法自动恢复，说明进程管理缺少对 stale PID 的自动清理机制。

2. **模型切换体验断裂** — [#4377](https://github.com/nearai/ironclaw/issues/4377) 反映 `/model` 返回的显示名称（如 "GPT OSS 120B"）无法直接用于切换，用户需要了解 provider 内部模型 ID 映射，增加了使用门槛。

3. **Reborn 本地开发模式的设计缺陷集中暴露** — henrypark133 在一天内提交了 6 个深度架构 Issue（#4424–#4429），涵盖能力面安全、工具声明一致性、上下文管理、可观测性等多个维度，说明 **Reborn serve 模式在推向生产前需要一轮系统性的安全加固和性能优化**。

4. **Slack 集成需求迫切** — #3857 和 #3280 的持续活跃表明社区对 Slack 作为一等渠道适配器的需求明确，当前 MVP 交付进度是社区关注焦点。

### 满意信号

- v0.29.1 快速发布修复了 channel 历史隔离 bug，响应速度良好。
- Slack 集成 PR 的快速合并（#4421、#4418）显示了核心团队对社区需求的积极响应。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于阻塞状态，建议维护者关注：

| 项目 | 创建/更新时间 | 状态 | 建议行动 |
|------|---------------|------|----------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E 失败 | 创建: 05-27，更新: 06-03 | 🔴 持续 8 天 | 夜间 E2E 持续失败，需排查根因并修复，否则会掩盖真实回归 |
| [#4432](https://github.com/nearai/ironclaw/issues/4432) — Python E2E cron 触发场景 | 创建: 06-04 | 🚧 阻塞 | 被 Reborn production profile 布线阻塞，需先完成 profile 端到端布线 |
| [#4407](https://github.com/nearai/ironclaw/issues/4407) — Provider 工具数量限制设计 | 创建: 06-03 | 💭 需设计 | 需要架构设计讨论，建议安排 design review |
| [#4389](https://github.com/nearai/ironclaw/issues/4389) — PR #4354 后续行为变更项 | 创建: 06-03 | 📋 待拆分 | 从已合并 PR 中拆出的高风险行为变更，需单独评估和排期 |
| [#3951](https://github.com/nearai/ironclaw/pull/3951) — Hooks 第三方扩展激活 | 创建: 05-23，11 天未合并 | ⏳ 待审查 | 依赖 #3938，需审查 hook-only projection 模型的安全性 |
| [#3936](https://github.com/nearai/ironclaw/pull/3936) — LibSqlPredicateStateBackend | 创建: 05-23，12 天未合并 | ⏳ 待审查 | 持久化后端 PR 3/4，需推进审查和合并 |
| [#3937](https://github.com/nearai/ironclaw/pull/3937) — Hooks 跨后端对抗测试套件 | 创建: 05-23，12 天未合并 | ⏳ 待审查 | 持久化后端 PR 4/4，最终 PR |

---

**日报总结：** IronClaw 今日处于高产出开发阶段，Slack 集成和 Reborn 稳定性是双主线。需重点关注今日集中爆发的 6 个 Reborn 架构级 Issue，其中 spawn_subagent 不可调用和 AllowAll 工具面问题应优先排入修复计划。Nightly E2E 持续失败超过一周，建议立即排查。Hooks 子系统的多个 PR 积压超过 10 天，需要审查资源投入。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-04

---

## 1. 今日速览

LobsterAI 今日处于**高活跃迭代期**。过去 24 小时内共处理 16 条 PR（14 条已合并/关闭，2 条待合并），发布新版本 **2026.6.3**，涵盖 MCP、Cowork、HTML Share 等多个核心模块的功能增强与缺陷修复。Issue 侧新增 1 条用户投诉，涉及订阅积分清零问题，需关注。整体来看，项目正处于密集的功能打磨与稳定性提升阶段，社区贡献者（fisherdaddy、liuzhq1986、liugang519、btc69m979y-dotcom）协作节奏紧凑，代码合并效率较高。

---

## 2. 版本发布

### LobsterAI 2026.6.3（2026-06-03）

**主要更新内容：**

| 模块 | 变更类型 | 说明 |
|------|---------|------|
| **MCP** | feat | 优化 npx MCP 启动解析逻辑，新增首次响应耗时日志（PR #2091） |
| **HTML Share** | feat | 重新设计分享对话框，优化分享链接与代码的复制体验（PR #2092, #2099） |
| **Cowork** | feat | 新增本地对话分叉（Local Conversation Forking）功能（PR #2085） |
| **Cowork** | feat | 支持从 Artifact 预览中选中文本添加到聊天上下文（PR #2101, #2098） |
| **Cowork** | fix | 改进频道会话同步与清理逻辑（PR #2108） |
| **MCP** | fix | 防止 Gateway 配置重载期间的会话超时（PR #2104） |
| **MCP** | fix | 校验远程服务器 URL 合法性（PR #2103） |
| **MCP** | fix | 修复托管安装的 Node 环境感知问题（PR #2100） |
| **UI** | fix | 修复 Kits/Skills 弹窗交互问题（PR #2106） |
| **Config** | fix | 保留用户配置的上下文窗口，新增 mimo v2.5 模型（PR #2102） |

**破坏性变更：** 未发现明确的破坏性变更。

**迁移注意事项：** MCP 远程服务器 URL 现已增加校验，若用户配置中存在非法 URL，可能会在配置同步时收到本地化验证错误提示，需检查并修正。

---

## 3. 项目进展

今日合并的 PR 主要集中在以下方向：

### 🔹 Cowork 功能大幅推进
- **本地对话分叉**（PR #2085）：用户可从任意助手消息处创建新的本地对话分支，长会话中符合条件的压缩上下文将被保留。这是 Cowork 工作流的重要增强。
- **选中文本上下文**（PR #2098, #2101）：支持从助手消息和 Artifact 预览（Markdown/纯文本）中选中文本，以片段形式添加到聊天草稿中，且不改变 OpenClaw API。
- **频道会话同步优化**（PR #2108）：重建频道会话时仅同步最新用户轮次，删除 Gateway 会话转录时同步清理，减少冗余数据。

### 🔹 MCP 稳定性三连修
- 修复 Gateway 配置重载期间的会话超时（PR #2104）
- 新增远程服务器 URL 校验（PR #2103）
- 修复托管安装的 Node 工具链路径注入问题（PR #2100）

### 🔹 HTML Share 体验优化
- 重新设计分享对话框的三种状态（已创建/活跃/已停止）（PR #2099）
- 优化分享链接与代码的复制格式（PR #2105）

### 🔹 键盘快捷键重构
- PR #2109 对键盘快捷键进行了全面重构，扩展了可绑定动作范围并改进 UX，但状态为 CLOSED（未合并），可能需进一步评审。

**整体评估：** 项目在 Cowork 协作体验和 MCP 稳定性两个核心方向上迈出了实质性步伐，2026.6.3 是一个功能密度较高的版本。

---

## 4. 社区热点

### 🔥 Issue #2081 — 订阅积分清零投诉
- **链接：** [netease-youdao/LobsterAI#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)
- **作者：** zjk648491625 | **更新：** 2026-06-03 | **评论：** 2 条
- **摘要：** 用户反映订阅的 5500 积分在月底被直接清零，语气激烈（"来搞笑的吧???"），并附有截图。
- **分析：** 这是典型的**订阅/计费策略信任危机**。用户的核心诉求是积分应有合理的有效期提醒或结转机制。此类问题若不及时响应，容易在社区中引发负面情绪扩散。

### 📌 PR #1277 — Electron 依赖升级（长期未合并）
- **链接：** [netease-youdao/LobsterAI#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)
- **作者：** dependabot[bot] | **创建：** 2026-04-02 | **状态：** OPEN
- **摘要：** 将 Electron 从 40.2.1 升级至 42.3.1，electron-builder 同步升级。
- **分析：** 该 PR 已开放近两个月未合并，跨大版本升级可能存在兼容性风险，需要维护者主动评估。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 模块 | 状态 | 关联 PR |
|---------|---------|------|------|---------|
| 🔴 **高** | 订阅积分月底清零，用户资产损失 | 订阅/计费 | **未修复** | 无 |
| 🟡 **中** | MCP 远程服务器 URL 未校验导致潜在配置错误 | MCP | ✅ 已修复 | [#2103](https://github.com/netease-youdao/LobsterAI/pull/2103) |
| 🟡 **中** | MCP 托管安装未正确注入 Node 工具链路径 | MCP | ✅ 已修复 | [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100) |
| 🟡 **中** | Gateway 配置重载期间 MCP 会话超时 | MCP | ✅ 已修复 | [#2104](https://github.com/netease-youdao/LobsterAI/pull/2104) |
| 🟢 **低** | Kits/Skills 弹窗关闭延迟、子菜单高度异常 | UI/Renderer | ✅ 已修复 | [#2106](https://github.com/netease-youdao/LobsterAI/pull/2106) |
| 🟢 **低** | 搜索模态框缺少标题栏关闭按钮 | UI/Cowork | ✅ 已修复 | [#2097](https://github.com/netease-youdao/LobsterAI/pull/2097) |
| 🟢 **低** | 长模态框标题溢出（Issue #1435） | UI | **待合并** | [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) |

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能方向 | 判断 |
|---------|---------|------|
| PR #2085（已合并） | 本地对话分叉 | ✅ 已纳入 2026.6.3 |
| PR #2098, #2101（已合并） | Artifact 选中文本→聊天上下文 | ✅ 已纳入 2026.6.3 |
| PR #2099（已合并） | HTML Share 体验重构 | ✅ 已纳入 2026.6.3 |
| PR #2091（已合并） | MCP 启动性能优化与日志 | ✅ 已纳入 2026.6.3 |
| PR #2109（已关闭未合并） | 键盘快捷键全面重构 | ⏳ 可能需进一步评审后纳入下一版本 |
| Issue #2081 | 积分有效期管理/提醒 | 🔴 用户痛点明确，尚无对应 PR |

**判断：** 下一版本（2026.6.4 或 2026.7.1）可能继续围绕 Cowork 协作体验（快捷键重构、更多上下文引用场景）和 MCP 生态完善（更多服务器类型支持、性能监控）推进。

---

## 7. 用户反馈摘要

### 不满意
- **积分清零无预警**（Issue #2081）：用户订阅了 5500 积分，月底直接清零且无任何提醒。用户情绪激烈，认为这是对产品信任的严重损害。这暴露了订阅系统在**有效期通知机制**上的缺失。

### 使用场景观察
- 用户对 **Cowork 协作工作流** 的需求非常活跃（对话分叉、选中文本引用、Artifact 上下文），说明核心用户群是**重度协作型用户**，对工作效率工具的深度集成有较高期待。
- **HTML Share** 的持续优化表明项目在对外分享/演示场景上投入较多精力。

### 满意
- 未在今日数据中观察到明确的正面评价，但高频的 PR 合并和版本发布节奏本身反映了开发团队对用户需求的响应速度。

---

## 8. 待处理积压

| 项目 | 链接 | 创建日期 | 状态 | 建议 |
|------|------|---------|------|------|
| Issue #2081 — 积分清零投诉 | [链接](https://github.com/netease-youdao/LobsterAI/issues/2081) | 2026-06-01 | OPEN，2 条评论 | 🔴 **需立即响应**，建议在 24 小时内回复用户，说明积分规则并评估是否需要补偿或机制改进 |
| PR #1277 — Electron 升级 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1277) | 2026-04-02 | OPEN，近 2 个月未合并 | 🟡 跨大版本升级需评估兼容性，建议安排 CI 全量测试后决定是否合并 |
| PR #1463 — 长模态框标题截断 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1463) | 2026-04-04 | OPEN，标记为 stale | 🟢 功能合理但优先级低，建议关闭或排入低优先级 backlog |

---

> **项目健康度总评：** 🟡 **良好，需关注订阅侧用户信任问题**
>
> 开发迭代节奏健康，核心模块（Cowork、MCP、HTML Share）持续交付。主要风险点在于 Issue #2081 涉及的订阅/计费体验问题——这不仅是功能 Bug，更是用户信任问题，建议产品与工程团队协同处理。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-04

---

## 1. 今日速览

Moltis 今天处于**高修复节奏、低合并吞吐**的状态。过去 24 小时共关闭 9 个 Issue（多为 5 月下旬积压的 Bug），新开的 5 个 Issue 全部集中在容器/沙箱兼容性和模型管理层面。有 4 个 PR 待合并但尚未被处理，合并队列为零。发布了两个新版本（20260603.01、20260602.05），说明维护者正在加速迭代。整体来看，项目处于**清积压 + 补新坑**的密集维护期，但 PR 积压是潜在瓶颈。

---

## 2. 版本发布

- **v20260603.01**：2026-06-03 发布。从今日 PR 和关闭 Issue 的组合推断，本次发布应包含了对 Vault 密码初始化逻辑、Skill 单条启停、会话标题自动生成（#1046、#1083、#1053）等在内的一批 Bug 修复。
- **v20260602.05**：2026-06-02 发布。应无破坏性变更；涉及稳定性修补。

> ⚠️ 注意：release 页面未提供 changelog 正文，建议维护者为每个 tag 补充 Release Notes，降低用户排查成本。

---

## 3. 项目进展

今日**无 PR 被合并**——所有 4 个开放 PR 均处于待审状态。但大量旧 Issue 在同一时间窗口（2026-06-03 下午）被批量关闭，说明维护者做了一轮集中清理。关闭的 Issue 涵盖：

| 关闭 Issue | 修复方向 |
|---|---|
| [#1046](https://github.com/moltis-org/moltis/issues/1046) | Vault 密码识别逻辑修复 |
| [#1083](https://github.com/moltis-org/moltis/issues/1083) | Skill 粒度启停（分类 vs 单条）|
| [#1053](https://github.com/moltis-org/moltis/issues/1053) | 会话自动标题生成修复 |
| [#1054](https://github.com/moltis-org/moltis/issues/1054) | MCP stdio 环境变量泄露至 LLM 的安全修复 |
| [#1052](https://github.com/moltis-org/moltis/issues/1052) | 模型选择器 UI 适配 |
| [#1045](https://github.com/moltis-org/moltis/issues/1045) | 亮色模式代码高亮修复 |
| [#1037](https://github.com/moltis-org/moltis/issues/1037) | Docker 中 send_image/send_document 修复 |
| [#1036](https://github.com/moltis-org/moltis/issues/1036) | Web UI 任意文件附件支持（功能实现）|
| [#1028](https://github.com/moltis-org/moltis/issues/1028) | Agent 开箱即用访问 Moltis 文档（功能实现）|

**关键进展**：安全层面修复了 MCP 环境变量泄露问题（#1054），Docker 部署场景的多项适配（#1037、#1046）也已落地。

---

## 4. 社区热点

### 🔥 Issue #1097 — Telegram 流式编辑混入中间输出
- **链接**：[moltis-org/moltis#1097](https://github.com/moltis-org/moltis/issues/1097)
- **状态**：OPEN，已有对应 PR #1099
- **分析**：Telegram 的 edit-in-place 流式回复将中间思考过程混入最终回答，严重影响阅读体验。这是**消息通道层的设计缺陷**，用户期望"流式 = 进度提示，最终回复 = 干净答案"。PR #1099 的方案（进度消息与最终回复分离）方向正确，应优先合并。

### 🔥 Issue #1096 — Read/Write/Edit 工具在 Docker 中失效
- **链接**：[moltis-org/moltis#1096](https://github.com/moltis-org/moltis/issues/1096)
- **状态**：OPEN，无 PR
- **分析**：与昨日刚关闭的 #1037（Docker 中 send_image 失败）形成呼应，说明 **Docker 沙箱的文件系统隔离**是系统性问题，而非单点 Bug。用户选择 Docker 部署的比例可能不低，建议统一排查沙箱内工具调用的路径映射。

### 🔥 Issue #1092 — 可配置关闭 Activity Log 工具状态消息
- **链接**：[moltis-org/moltis#1092](https://github.com/moltis-org/moltis/issues/1092)
- **状态**：OPEN，已有对应 PR #1093
- **分析**：用户希望精细控制 Activity Log 的可见性（全部/仅错误/关闭），支持 per-user 覆盖。这是**可观测性与用户体验的平衡**诉求，PR #1093 已实现三层优先级（user > channel > account），设计合理。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#1054](https://github.com/moltis-org/moltis/issues/1054) | MCP stdio 环境变量暴露给 LLM（安全风险）| ✅ 已关闭，已修复 |
| 🔴 高 | [#1096](https://github.com/moltis-org/moltis/issues/1096) | Read/Write/Edit 工具在 Docker 中完全不可用 | ❌ 无 PR |
| 🟡 中 | [#1097](https://github.com/moltis-org/moltis/issues/1097) | Telegram 流式输出混入中间内容 | ✅ PR #1099 待合并 |
| 🟡 中 | [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman 无法通过 moltis 运行 | ❌ 无 PR |
| 🟡 中 | [#1094](https://github.com/moltis-org/moltis/issues/1094) | 模型降级/去优先化行为异常 | ❌ 无 PR |
| 🟢 低 | [#1052](https://github.com/moltis-org/moltis/issues/1052) | 模型选择器 UI 显示不全 | ✅ 已关闭，已修复 |
| 🟢 低 | [#1045](https://github.com/moltis-org/moltis/issues/1045) | 亮色模式无代码高亮 | ✅ 已关闭，已修复 |

**重点关注**：#1096（Docker 工具失效）和 #1095（Podman 不兼容）共同指向**容器化部署**这一场景的覆盖不足，建议维护者将 Docker/Podman 纳入 CI 测试矩阵。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 信号强度 | 判断 |
|---|---|---|---|
| Agent 开箱访问 Moltis 文档 | [#1028](https://github.com/moltis-org/moltis/issues/1028) | ✅ 已关闭 | 已纳入当前版本 |
| Web UI 支持任意文件附件 | [#1036](https://github.com/moltis-org/moltis/issues/1036) | ✅ 已关闭 | 已纳入当前版本 |
| Activity Log 可见性可配置 | [#1092](https://github.com/moltis-org/moltis/issues/1092) | 🔄 PR #1093 待合并 | 极可能纳入下一版本 |
| Telegram 流式/最终回复分离 | [#1097](https://github.com/moltis-org/moltis/issues/1097) | 🔄 PR #1099 待合并 | 极可能纳入下一版本 |
| 浏览器工具容错 null 参数 | — | 🔄 PR #1098 待合并 | 小修复，应快速合并 |
| 持久化工具结果截断 | — | 🔄 PR #1089 待合并 | 内存/上下文优化，方向正确 |

**路线图判断**：当前迭代的核心主题是 **① 通道消息质量（Telegram）② 容器兼容性 ③ 安全加固**。下一版本大概率继续围绕这三条线推进。

---

## 7. 用户反馈摘要

**真实痛点**：
1. **Docker 部署体验差**：文件发送、工具调用、Vault 初始化在 Docker 下均有问题（#1037、#1046、#1096），说明官方对容器化场景的测试覆盖不足。
2. **小模型兼容性弱**：PR #1098 提到 Gemma 4 等本地小模型会显式传 `null` 可选参数导致反序列化失败，说明工具 schema 的健壮性需要提升。
3. **Telegram 交互体验**：流式输出和 Activity Log 的展示方式让用户感到混乱（#1097、#1092），消息通道的 UX 需要整体审视。
4. **Podman 用户被忽视**：#1095 表明有用户使用 Podman 替代 Docker，但项目未做适配。

**满意点**：
- 积压 Bug 的集中清理（9 个同日关闭）说明维护者响应速度在提升。
- MCP 环境变量泄露（#1054）这类安全问题能被快速修复，体现了安全优先级。

---

## 8. 待处理积压

以下 PR 已开放超过 24 小时但未被合并，建议维护者优先处理：

| PR | 等待时长 | 优先级 | 说明 |
|---|---|---|---|
| [#1089](https://github.com/moltis-org/moltis/pull/1089) — 持久化工具结果截断 | 3 天 | ⭐⭐⭐ | 影响会话重hydration 的内存安全，覆盖面广 |
| [#1098](https://github.com/moltis-org/moltis/pull/1098) — 浏览器工具 null 参数容错 | 1 天 | ⭐⭐ | 小修复，低风险，可快速合入 |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) — Activity Log 可见性配置 | 1 天 | ⭐⭐⭐ | 有对应 Issue #1092，用户需求明确 |
| [#1099](https://github.com/moltis-org/moltis/pull/1099) — Telegram 流式/最终回复分离 | < 1 天 | ⭐⭐⭐ | 有对应 Issue #1097，影响用户体验核心路径 |

> 📌 **建议**：当前 4 个 PR 均无 reviewer 评论，建议至少指定一名 reviewer 开始 code review 流程，避免贡献者等待过久失去动力。

---

*数据来源：GitHub moltis-org/moltis | 报告生成时间：2026-06-04 | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期**: 2026-06-04
**数据来源**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. 今日速览

过去 24 小时 CoPaw 社区保持高活跃度：**49 条 Issue 更新**（新开/活跃 28 条，已关闭 21 条）和 **50 条 PR 更新**（待合并 29 条，已合并/关闭 21 条），无新版本发布。项目正处于密集迭代期，核心团队在上下文压缩稳定性、浏览器工具链、插件系统初始化等关键路径上快速推进修复。社区反馈集中在 Windows 环境下的浏览器启动失败、向量索引膨胀、Dream Agent 记忆管理异常等生产级痛点，整体项目健康度良好但稳定性债务需要持续关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共有 **21 个 PR 被合并/关闭**，以下是推进项目前进的关键变更：

### 已合并的重要修复

| PR | 作者 | 内容 | 影响 |
|---|---|---|---|
| [#4933](https://github.com/agentscope-ai/CoPaw/pull/4933) | jinliyl | **fix(context): 处理 media block 中非 dict 类型的 source 对象** | 修复了上下文压缩因旧格式 file block 导致的崩溃（`'str' object has no attribute 'get'`），直接关联 Issue #4924 和 #4811 |
| [#4935](https://github.com/agentscope-ai/CoPaw/pull/4935) | jinliyl | **chore(deps): 升级 reme-ai 至 0.3.1.10** | 修复文件监视器重启后 stop-event 未重置的可靠性问题 |
| [#4940](https://github.com/agentscope-ai/CoPaw/pull/4940) | yutai78786 | **fix(integration): 上传大小限制 + 插件加载器超时容错** | 修复 nightly 测试在 4 个平台上因上传限制配置变更导致的回归 |
| [#4942](https://github.com/agentscope-ai/CoPaw/pull/4942) | cuiyuebing | **docs(roadmap): 更新路线图** | 项目方向性文档更新 |
| [#4888 关联修复](https://github.com/agentscope-ai/CoPaw/issues/4888) | — | **Dream Agent 使用相对路径覆盖其他 workspace 的 MEMORY.md** | 已关闭，根因为 workspace 路径解析问题 |

### 待合并的重要 PR（活跃开发中）

| PR | 作者 | 内容 | 状态 |
|---|---|---|---|
| [#4900](https://github.com/agentscope-ai/CoPaw/pull/4900) | wangfei010313 | **解耦插件加载器初始化与 Agent 启动** | 修复 Tauri Desktop v1.1.10 插件系统始终未就绪的根本原因 |
| [#4944](https://github.com/agentscope-ai/CoPaw/pull/4944) | x1n95c | **fix(browser): 增加 CDP 超时参数 + 浏览器 profile 隔离** | 修复 browser_use 在 Chrome/Edge 切换时的启动失败和 profile 冲突 |
| [#4936](https://github.com/agentscope-ai/CoPaw/pull/4936) | ployts | **fix(memory): Dream 应使用 cron runner 的 workspace** | 修复 Dream Agent 跨 workspace 写入 MEMORY.md 的路径错误 |
| [#4949](https://github.com/agentscope-ai/CoPaw/pull/4949) | ekzhu | **feat(acp): 扩展 ACP 协议元数据暴露** | 为 TUI 客户端提供命令列表、错误信息、工具参数等元数据 |
| [#4881](https://github.com/agentscope-ai/CoPaw/pull/4881) | octo-patch | **feat(providers): 添加 MiniMax M3 内置模型** | 将 MiniMax 旗舰模型 M3 设为默认模型 |
| [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) | jinglinpeng | **feat(desktop): Tauri 桌面自动更新** | 为桌面端添加自动更新能力 |
| [#4171](https://github.com/agentscope-ai/CoPaw/pull/4171) | wjt0321 | **feat: memory-distill 工具插件** | 智能记忆蒸馏引擎，~92% 噪声过滤率 |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 热度焦点 |
|---|---|---|
| [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) — browser_use 启动失败：managed CDP 超时 + Chrome/Edge 闪退 | 6 | Windows 环境下浏览器自动化工具链的稳定性，三种启动模式均失败 |
| [#3470](https://github.com/agentscope-ai/CoPaw/issues/3470) — 是否有类似 Hermes Agent 的自我进化功能研发计划 | 6 | 社区对 Agent 长期自主进化能力的强烈兴趣 |
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) — ChromaDB Rust binding segfault 导致整个进程崩溃 | 5 | Linux 下向量数据库的致命稳定性问题，45+ 次崩溃 |
| [#3905](https://github.com/agentscope-ai/CoPaw/issues/3905) — Dream Agent 记忆管理异常 | 5 | Dream Agent 执行后 MEMORY.md 被清空为空白模板 |
| [#4924](https://github.com/agentscope-ai/CoPaw/issues/4924) — 上下文压缩失败 | 4 | 旧格式 file block 导致压缩崩溃，已有 PR #4933 修复 |

### 🔥 关键 PR 动态

- **[#4900](https://github.com/agentscope-ai/CoPaw/pull/4900)** — 插件加载器解耦是 Tauri Desktop 用户最关注的修复，直接解决 "Plugin loader is not ready yet (503)" 错误
- **[#4944](https://github.com/agentscope-ai/CoPaw/pull/4944)** — 浏览器工具链修复，增加 CDP 超时配置和 profile 隔离，回应了 Issue #4919 的核心诉求
- **[#4945](https://github.com/agentscope-ai/CoPaw/pull/4945)** — 新增 55 个 agent 级集成测试用例，覆盖路由、技能、工具等核心契约

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（崩溃/数据丢失）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) | ChromaDB Rust binding SIGSEGV 杀死整个进程，单会话 45+ 次崩溃 | 🟡 开放中 | 无 |
| [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) | 向量索引膨胀至 37GB 导致 memory_search 崩溃，每 30 分钟崩溃一次 | 🟡 开放中 | 无 |
| [#4888](https://github.com/agentscope-ai/CoPaw/issues/4888) | Dream Agent 用相对路径覆盖其他 workspace 的 MEMORY.md | ✅ 已关闭 | [#4936](https://github.com/agentscope-ai/CoPaw/pull/4936) 修复中 |
| [#4922](https://github.com/agentscope-ai/CoPaw/issues/4922) | 微信渠道图片路径 PermissionError，清空会话后仍持续报错 | 🟡 开放中 | 无 |

### 🟡 中等（功能异常）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) | browser_use 启动失败，managed CDP 超时 + 浏览器闪退 | 🟡 开放中 | [#4944](https://github.com/agentscope-ai/CoPaw/pull/4944) 修复中 |
| [#4924](https://github.com/agentscope-ai/CoPaw/issues/4924) | 上下文压缩因旧格式 file block 失败 | ✅ 已关闭 | [#4933](https://github.com/agentscope-ai/CoPaw/pull/4933) 已合并 |
| [#4448](https://github.com/agentscope-ai/CoPaw/issues/4448) | 上下文压缩频繁失败（missing ## header） | ✅ 已关闭 | 已修复 |
| [#4811](https://github.com/agentscope-ai/CoPaw/issues/4811) | media block source 为字符串 URL 时压缩崩溃 | ✅ 已关闭 | [#4933](https://github.com/agentscope-ai/CoPaw/pull/4933) 已合并 |
| [#4937](https://github.com/agentscope-ai/CoPaw/issues/4937) | /compact 命令忽略模型 max_input_length，仍用 128K 默认值 | 🟡 开放中 | 无 |
| [#4877](https://github.com/agentscope-ai/CoPaw/issues/4877) | custom channel 每次保存设置都会停止监听 | 🟡 开放中 | 无 |
| [#4889](https://github.com/agentscope-ai/CoPaw/issues/4889) | Tauri 桌面版插件加载器未启动 | 🟡 开放中 | [#4900](https://github.com/agentscope-ai/CoPaw/pull/4900) 修复中 |
| [#4916](https://github.com/agentscope-ai/CoPaw/issues/4916) | 备份因浏览器缓存文件 PermissionError 失败 | 🟡 开放中 | 无 |
| [#4928](https://github.com/agentscope-ai/CoPaw/issues/4928) | 技能市场下载超限报错（5MB 限制） | 🟡 开放中 | [#4941](https://github.com/agentscope-ai/CoPaw/pull/4941) 修复中 |

### 🟢 轻微（体验问题）

| Issue | 描述 | 状态 |
|---|---|---|
| [#4920](https://github.com/agentscope-ai/CoPaw/issues/4920) | 输入框按上键应回到行首而非召回历史消息 | ✅ 已关闭 |
| [#4903](https://github.com/agentscope-ai/CoPaw/issues/4903) | 切换聊天时加载动画异常 | ✅ 已关闭 |
| [#4923](https://github.com/agentscope-ai/CoPaw/issues/4923) | spawn_subagent 子任务运行时无法查看内容 | 🟡 开放中 |

---

## 6. 功能请求与路线图信号

### 高优先级（已有 PR 推进）

| 需求 | Issue | 对应 PR | 信号强度 |
|---|---|---|---|
| 插件系统稳定性 | [#4889](https://github.com/agentscope-ai/CoPaw/issues/4889) | [#4900](https://github.com/agentscope-ai/CoPaw/pull/4900) | 🔴 高 — 阻塞桌面端核心功能 |
| 浏览器工具链稳定性 | [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) | [#4944](https://github.com/agentscope-ai/CoPaw/pull/4944) | 🔴 高 — 影响 Windows 用户核心工作流 |
| 智能记忆蒸馏 | — | [#4171](https://github.com/agentscope-ai/CoPaw/pull/4171) | 🟡 中 — 长期功能，Under Review |
| Tauri 自动更新 | — | [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) | 🟡 中 — 桌面端体验提升 |
| ACP 协议扩展 | — | [#4949](https://github.com/agentscope-ai/CoPaw/pull/4949) | 🟡 中 — 生态扩展 |
| MiniMax M3 模型支持 | [#4937](https://github.com/agentscope-ai/CoPaw/issues/4937) | [#4881](https://github.com/agentscope-ai/CoPaw/pull/4881) | 🟡 中 — 模型生态 |

### 社区呼声高但尚无 PR

| 需求 | Issue | 社区反应 |
|---|---|---|
| Agent 自我进化能力（Hermes 理念） | [#3470](https://github.com/agentscope-ai/CoPaw/issues/3470), [#3516](https://github.com/agentscope-ai/CoPaw/issues/3516) | 6 条评论，多个用户追问 |
| 无损上下文压缩（DAG 摘要） | [#4551](https://github.com/agentscope-ai/CoPaw/issues/4551) | 3 条评论，长期开发场景痛点 |
| 会话结束自动总结 | [#4640](https://github.com/agentscope-ai/CoPaw/issues/4640) | RFC 提案，2 条评论 |
| 图片/附件不占上下文窗口 | [#4921](https://github.com/agentscope-ai/CoPaw/issues/4921) | 2 条评论，Base64 图片 token 浪费 |
| mem0 集成 | [#4208](https://github.com/agentscope-ai/CoPaw/issues/4208) | 2 条评论，缺少文档 |
| Auto-Memory 排除心跳/定时任务 | [#3944](https://github.com/agentscope-ai/CoPaw/issues/3944) | 4 条评论，已关闭 |

---

## 7. 用户反馈摘要

### 痛点

1. **Windows 环境稳定性堪忧**：browser_use 启动失败（[#4919](https://github.com/agentscope-ai/CoPaw/issues/4919)）、备份 PermissionError（[#4916](https://github.com/agentscope-ai/CoPaw/issues/4916)）集中爆发，Windows 用户的生产体验受到明显影响。

2. **向量数据库是长期隐患**：ChromaDB segfault（[#3854](https://github.com/agentscope-ai/CoPaw/issues/3854)）和索引膨胀至 37GB（[#4795](https://github.com/agentscope-ai/CoPaw/issues/4795)）两个问题均无修复 PR，属于系统性风险。用户反馈"删除 file_store/ 后恢复正常"，说明缺乏自动清理和容量控制机制。

3. **上下文压缩是高频故障点**：今日至少 3 个 Issue（[#4924](https://github.com/agentscope-ai/CoPaw/issues/4924)、[#4448](https://github.com/agentscope-ai/CoPaw/issues/4448)、[#4811](https://github.com/agentscope-ai/CoPaw/issues/4811)）与此相关，好消息是核心修复 PR #4933 已合并。

4. **Dream Agent 记忆管理不可靠**：多个用户报告 Dream Agent 执行后记忆文件被清空（[#3905](https://github.com/agentscope-ai/CoPaw/issues/3905)）或跨 workspace 覆盖（[#4888](https://github.com/agentscope-ai/CoPaw/issues/4888)），记忆系统的路径解析和隔离机制需要系统性审查。

5. **插件系统在桌面端形同虚设**：Tauri Desktop 用户无法安装或启用任何插件（[#4889](https://github.com/agentscope-ai/CoPaw/issues/4889)），PR #4900 正在推进根本性修复。

### 满意点

- 上下文压缩相关修复响应迅速，PR #4933 在 Issue 报告当天即合并
- 集成测试覆盖大幅增加（PR #4945 新增 55 个用例），项目质量保障在加强
- 路线图文档更新（PR #4942），社区对项目方向透明度有正面反馈

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

### 长期开放 Issue（>7 天无实质进展）

| Issue | 创建日期 | 天数 | 严重程度 | 说明 |
|---|---|---|---|---|
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) — ChromaDB segfault | 2026-04-27 | 38 天 | 🔴 致命 | Linux 下进程崩溃，无修复 PR |
| [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) — 向量索引膨胀 37GB | 2026-05-29 | 6 天 | 🔴 严重 | 生产环境数据丢失风险 |
| [#3905](https://github.com/agentscope-ai/CoPaw/issues/3905) — Dream Agent 记忆异常 | 2026-04-28 | 37 天 | 🟡 中等 | 记忆管理核心功能不可靠 |
| [#4710](https://github.com/agentscope-ai/CoPaw/issues/4710) — 向量存储时间戳不一致 | 2026-05-27 | 8 天 | 🟡 中等 | naive datetime vs UTC 时区问题 |
| [#4781](https://github.com/agentscope-ai/CoPaw/issues/4781) — tool_result_pruning 无法防止上下文膨胀 | 2026-05-28 | 7 天 | 🟡 中等 | 单条大输出可撑爆上下文 |
| [#4640](https://github.com/agentscope-ai/CoPaw/issues/4640) — 会话结束自动总结 RFC | 2026-05-23 | 12 天 | 🟢 功能 | 社区提案，等待团队回应 |
| [#4208](https://github.com/agentscope-ai/CoPaw/issues/4208) — mem0 集成支持 | 2026-05-11 | 24 天 | 🟢 功能 | 缺少文档和官方立场 |

### 长期开放 PR（等待 Review）

| PR | 创建日期 | 天数 | 说明 |
|---|---|---|---|
| [#4171](https://github.com/agentscope-ai/CoPaw/pull/4171) — memory-distill 插件 | 2026-05-10 | 25 天 | Under Review，功能完整但等待合并 |
| [#4669](https://github.com/agentscope-ai/CoPaw/pull/4669) — Tauri 自动更新 | 2026-05-25 | 10 天 | 桌面端关键体验功能 |
| [#4637](https://github.com/agentscope-ai/CoPaw/pull/4637) — 自定义斜杠命令菜单 | 2026-05-22 | 13 天 | 用户体验改进 |

---

**总结**：CoPaw 今日处于高活跃迭代状态，核心团队在上下文压缩和浏览器工具链上快速修复，但向量数据库稳定性（segfault + 索引膨胀）和 Dream Agent 路径隔离两个系统性问题仍无修复 PR，建议优先排期。插件系统解耦（PR #4900）和浏览器修复（PR #4944）是近期最值得关注的合并候选。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

好的，这是根据您提供的数据生成的 ZeptoClaw 项目日报。

---

# ZeptoClaw 项目动态日报 (2026-06-04)

## 1. 今日速览

ZeptoClaw 项目在 2026-06-03 至 2026-06-04 期间表现出**高活跃度**，主要集中在**依赖项更新**。
*   **Issues 活动**：无新开或活跃的 Issues，也无已关闭的 Issues。
*   **PR 活动**：共有 16 个新的 Pull Requests 处于待合并状态，均由 `dependabot[bot]` 提交，旨在更新项目中的各种依赖项。
*   **版本发布**：无新版本发布。
*   **整体评估**：项目维护良好，自动化依赖更新流程运行顺畅，但缺乏新功能开发或问题修复的直接贡献。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，因此没有新的功能推进或问题修复。所有 16 个 PR 均为待合并状态。

## 4. 社区热点

由于今日所有 PR 均由 `dependabot[bot]` 自动提交，且无 Issues 活动，因此没有明显的社区讨论热点或用户直接参与的活跃 PR。

## 5. Bug 与稳定性

今日无新的 Bug 报告、崩溃或回归问题。

## 6. 功能请求与路线图信号

今日无新的功能请求。所有 PR 均为依赖项更新，不直接提供新功能。

## 7. 用户反馈摘要

由于今日无 Issues 活动或用户评论，无法提炼用户反馈。

## 8. 待处理积压

目前积压的 16 个 PR 均为 `dependabot[bot]` 提交的依赖项更新。建议维护者尽快审查并合并这些 PR，以保持项目依赖的最新状态和安全性。

**待合并 PR 列表 (共 16 个)：**

1.  **PR #628**: [dependencies, github\_actions] chore(deps): bump docker/login-action from 4.1.0 to 4.2.0
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #628](https://github.com/qhkm/zeptoclaw/pull/628)
2.  **PR #627**: [dependencies, rust] chore(deps): bump serde\_json from 1.0.149 to 1.0.150
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #627](https://github.com/qhkm/zeptoclaw/pull/627)
3.  **PR #626**: [dependencies, github\_actions] chore(deps): bump taiki-e/install-action from 2.78.2 to 2.79.7
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #626](https://github.com/qhkm/zeptoclaw/pull/626)
4.  **PR #625**: [dependencies, rust] chore(deps): bump rpassword from 7.4.0 to 7.5.2
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #625](https://github.com/qhkm/zeptoclaw/pull/625)
5.  **PR #624**: [dependencies, github\_actions] chore(deps): bump codecov/codecov-action from 6.0.0 to 6.0.1
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #624](https://github.com/qhkm/zeptoclaw/pull/624)
6.  **PR #623**: [dependencies, rust] chore(deps): bump tokio from 1.52.1 to 1.52.3
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #623](https://github.com/qhkm/zeptoclaw/pull/623)
7.  **PR #622**: [dependencies, github\_actions] chore(deps): bump docker/build-push-action from 7.1.0 to 7.2.0
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #622](https://github.com/qhkm/zeptoclaw/pull/622)
8.  **PR #621**: [dependencies, javascript] chore(deps-dev): bump @types/node from 25.3.5 to 25.9.1 in /panel
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #621](https://github.com/qhkm/zeptoclaw/pull/621)
9.  **PR #620**: [dependencies, rust] chore(deps): bump scraper from 0.26.0 to 0.27.0
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #620](https://github.com/qhkm/zeptoclaw/pull/620)
10. **PR #619**: [dependencies, javascript] chore(deps-dev): bump tailwindcss from 4.2.2 to 4.3.0 in /panel
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #619](https://github.com/qhkm/zeptoclaw/pull/619)
11. **PR #618**: [dependencies, github\_actions] chore(deps): bump docker/metadata-action from 6.0.0 to 6.1.0
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #618](https://github.com/qhkm/zeptoclaw/pull/618)
12. **PR #617**: [dependencies, rust] chore(deps): bump tower-http from 0.6.10 to 0.6.11
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #617](https://github.com/qhkm/zeptoclaw/pull/617)
13. **PR #616**: [dependencies, javascript] chore(deps): bump react and @types/react in /panel
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #616](https://github.com/qhkm/zeptoclaw/pull/616)
14. **PR #615**: [dependencies, javascript] chore(deps): bump astro from 6.3.1 to 6.3.7 in /landing/zeptoclaw/docs
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #615](https://github.com/qhkm/zeptoclaw/pull/615)
15. **PR #614**: [dependencies, javascript] chore(deps): bump astro from 6.3.3 to 6.3.7 in /landing/r8r/docs
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #614](https://github.com/qhkm/zeptoclaw/pull/614)
16. **PR #613**: [dependencies, docker] chore(deps): bump rust from 1.95-slim-trixie to 1.96-slim-trixie
    *   作者: dependabot[bot] | 链接: [qhkm/zeptoclaw PR #613](https://github.com/qhkm/zeptoclaw/pull/613)

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-04

---

## 1. 今日速览

ZeroClaw 今日处于**高活跃维护期**，Issues 与 PR 各录得 50 条更新，社区参与度极高。24 条 Issue 已关闭、7 条 PR 已合并/关闭，显示维护团队在积极消化积压。当前无新版本发布，但多条高优先级 PR（安全加固、配置弹性、provider 修复）正在推进，项目整体处于 **v0.8.0 发布冲刺阶段**（#7112 追踪器活跃）。值得关注的是，今日新开 Issue 集中在安全架构（OIDC 认证、可插拔安全层）和会话管理（空闲回收），反映社区对生产就绪能力的迫切需求。

---

## 2. 版本发布

**无新版本发布。**

当前版本追踪器 #7112 指向 v0.8.0，#6970 指向 v0.8.1，均处于 PR 队列整合阶段。

---

## 3. 项目进展

今日合并/关闭的 PR 共 7 条，关键进展如下：

| PR | 状态 | 说明 |
|---|---|---|
| **#7166** | ✅ 已合并 | 修复 zerocode Quickstart 中 agent 名称字段误吞热键字符（如 `e`、`t`、`c`、`d`）的问题，改善新手引导体验 |
| **#7172** | ✅ 已合并 | 修复 llamacpp provider 未遵守 `wire_api = "responses"` 配置的问题，确保 llamacpp 端点正确走 Responses API |

**待合并的重要 PR（43 条开放中，以下按影响力排序）：**

| PR | 方向 | 说明 |
|---|---|---|
| **#7180** | Provider 修复 | 修复自定义/OpenAI-compatible provider 未遵守 `wire_api = "responses"` 的问题（#7172 的泛化版本） |
| **#7160** | 配置弹性 | 重构 `Config::load`，引入安全关键门控机制，避免单个字段损坏导致 daemon 完全无法启动 |
| **#7066** | Channel 安全 | 彻底移除 channel orchestrator 中"默认 model provider"的隐式回退逻辑，消除凭证泄露风险 |
| **#6988** | 安全 | 修复设备 token 轮换/删除后旧 bearer token 未失效的漏洞 |
| **#7177** | ACP 安全 | 服务端强制排除 ACP 会话中的 memory 工具，防止越权访问 |
| **#7178** | Provider 高可用 | 重新引入 per-alias model-provider 故障转移链（显式声明式，替代此前被移除的隐式机制） |
| **#7067** | 评估框架 | Phase 0 agent 评估工具——确定性回放 LLM trace fixtures 并自动评分 |
| **#6389** | Channel 体验 | 9 个出站渠道（Telegram/Discord/Slack 等）的 per-recipient 回复速率限制 |
| **#5987** | 基础设施 | Nix flake 支持，解耦 Rust 后端与 Web UI 构建 |

**整体判断：** 项目在安全加固（token 生命周期、配置弹性、ACP 隔离）和 provider 生态（故障转移、wire_api 一致性）两个维度同步推进，v0.8.0 的稳定性目标正在落地。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

**#6123** — [Bug]: default_model issue on fresh install（18 条评论）
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6123
- **诉求：** 全新安装后 `zerocaw agent` 报错，用户配置了 Ollama 作为 provider 但 `default_model` 解析失败。讨论涉及 LXC 容器网络隔离、provider 配置优先级、onboarding 流程缺陷。
- **状态：** 已关闭，但 18 条评论显示该问题影响面广，根因可能与配置迁移逻辑有关。

**#5722** — Default shell sandbox blocks all realistic Python skill patterns（6 条评论）
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/5722
- **诉求：** 默认 shell 沙箱配置过于严格，导致 Python skill 的常见模式（如 `subprocess`、`os.system`）全部被拦截。报告者正在开发 InvestorClaw（FINOS CDM 合规的投资组合分析 skill），被沙箱阻断。
- **状态：** 已关闭，但暴露了沙箱策略与实际 skill 开发之间的张力。

**#6246** — WhatsApp Web channel messages don't flow after April 2026 protocol bump（6 条评论）
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/6246
- **诉求：** WhatsApp Web 服务端协议升级后，pairing 成功但消息静默失败。影响所有使用 `whatsapp-web` feature 的用户。
- **状态：** 已关闭，依赖 `wa-rs` 上游修复。

### 📌 今日新开的重要 Issues

**#7141** — OIDC Authentication Provider support for RPC/WSS transport
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7141
- **诉求：** 为 RPC/WSS 传输层添加 OIDC 认证提供者支持，目标 v0.9.0。这是企业级部署的刚需。

**#7142** — Expose security enforcement layer as pluggable provider interface
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7142
- **诉求：** 将安全执行层抽象为可插拔 trait，允许自定义安全策略。与 #7141 配套，构成安全架构重构的双子追踪器。

**#7179** — ZeroClaw Reaps Idle RPC Sessions at 10 Minutes
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7179
- **诉求：** RPC 会话在 10 分钟无活动后被强制回收，用户认为此行为过于激进且不可配置。

---

## 5. Bug 与稳定性

### 🔴 高风险（P1 / S1）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| **#6207** | Web dashboard WebSocket 路径绕过 ApprovalManager，受监管工具审批不显示 | 🔄 In-Progress | 无明确 PR |
| **#6269** | Context compressor 丢弃 `reasoning_content`，影响 DeepSeek 等依赖推理内容的 provider | 🔄 In-Progress | 无明确 PR |
| **#6516** | ACP `cwd` 变更导致 agent 无法读取自身 workspace 中的 skill 文件 | 🔴 已关闭 | 无明确 PR |
| **#5697** | `skills.allow_scripts = true` 时 skill 仍被拦截 | 🔴 已关闭 | 无明确 PR |
| **#7179** | RPC 空闲会话 10 分钟被强制回收 | 🆕 Open | 无 |
| **#7173** | Quickstart webhook channel 未提示端口配置，导致 agent 启动报 `missing field port` | 🆕 Open | 无 |

### 🟡 中风险（P2 / S2）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| **#6123** | Fresh install `default_model` 解析失败 | 🔴 已关闭 | 无明确 PR |
| **#6210** | SkillForge 自动集成器在 `[skill]` 块中生成非 schema 字段 | 🔴 已关闭 | 无明确 PR |
| **#6431** | SQLite memory schema 并发初始化失败 | 🔄 In-Progress | 无明确 PR |
| **#7133** | Path policy 在引号/heredoc 命令数据中对 `~` 标记误报 | 🆕 Open | 无 |

### 🟢 低风险（P3 / S3）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| **#6702** | Dashboard assistant bubble 为每个 tool-call 卡片累积空行 | 🔄 Accepted | 无明确 PR |
| **#6097** | 本地图像读取失败（skill 生成的图像使用本地路径，API 模型无法读取） | 🔴 已关闭 | 无明确 PR |

**稳定性评估：** 高风险 bug 中 #6207（审批绕过）和 #6269（推理内容丢失）仍在活跃，建议优先分配资源。#7179（会话回收）和 #7173（quickstart 端口缺失）为新开问题，需尽快响应。

---

## 6. 功能请求与路线图信号

### 明确纳入路线图

| 需求 | 追踪 Issue | 目标版本 | 配套 PR |
|---|---|---|---|
| OIDC 认证提供者 | #7141 | v0.9.0 | 无（架构设计阶段） |
| 可插拔安全层接口 | #7142 | v0.9.0 | 无（架构设计阶段） |
| Per-alias provider 故障转移 | — | 待确认 | **#7178**（已开放） |
| Agent 评估框架 | — | 待确认 | **#7067**（Phase 0 已开放） |
| 9 渠道 per-recipient 回复速率限制 | — | 待确认 | **#6389**（已开放） |
| Nix flake 支持 | — | 待确认 | **#5987**（已开放） |

### 社区呼声较高但尚未排期

| 需求 | Issue | 说明 |
|---|---|---|
| 会话分支（Session Branching） | #7167, #7168 | 允许在任意消息点 fork 对话，两个重复 Issue 同日被关闭，可能已有内部规划 |
| 配置级联删除 | #7175 | V3 config 中 aliased entries 的级联删除支持 |
| ACP 会话取消支持 | #5837 | ACP 协议会话缺乏取消端点，已关闭但功能未实现 |
| 文档完善 | #5836, #5956 | Skill 开发文档、审计范围文档 |

**路线图判断：** v0.8.0 聚焦稳定性与安全（#7112），v0.8.1 聚焦渠道/集成扩展（#6970），v0.9.0 已明确规划安全架构重构（OIDC + 可插拔安全层）。会话分支功能虽被关闭，但社区需求明确，可能在 v0.8.x 或 v0.9.x 中重新开放。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **新手体验断裂：** #6123（fresh install 即报错）、#7173（quickstart 缺少端口配置）表明 onboarding 流程存在明显断点，新用户可能在第一步就放弃。
2. **沙箱策略与 skill 开发矛盾：** #5722 中开发者明确表示默认沙箱配置"blocks all realistic Python skill patterns"，这直接阻碍了复杂 skill（如 InvestorClaw）的开发。
3. **安全审批形同虚设：** #6207 中用户发现 Web dashboard 完全不显示工具审批提示，这意味着 supervised mode 在 Web UI 端实际上失效。
4. **Provider 生态碎片化：** #6246（WhatsApp 协议变更）、#5636（Z.AI 错误 1214）、#6269（DeepSeek reasoning_content 丢失）显示第三方 provider/channel 的兼容性问题频发。

### 😐 中性 / 建设性

- #7179 用户理解会话回收的合理性，但希望超时时间可配置。
- #7141/#7142 用户（singlerider）主动承担了安全架构重构的追踪工作，提交了结构清晰的 DoD 清单，社区协作质量高。

### 😊 满意

- #7166 快速合并了 Quickstart 名称字段的修复，响应速度值得肯定。
- #7067 评估框架 PR 获得社区关注，开发者对"deterministic, offline, and free"的评估方案表示认可。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于阻塞状态，建议维护者关注：

| 项目 | 最后更新 | 状态 | 风险 |
|---|---|---|---|
| **#6103** — webhook observer token accounting | 2026-06-03 | 🚫 Blocked | 可观测性数据缺失，影响成本追踪 |
| **#5453** — WebSocket `/ws/chat` 不处理 `[IMAGE:]` 多模态标记 | 2026-06-03 | 🔄 In-Progress | 多模态用户无法通过 Web UI 发送图像 |
| **#5266** — 非默认端口 gateway 不显示 pairing code | 2026-06-03 | ✅ Accepted | 测试/开发场景受阻 |
| **#5636** — Z.AI provider glm-5-turbo 返回错误 1214 | 2026-06-03 | 🔄 In-Progress | 中国用户群体受影响 |
| **#6431** — SQLite memory schema 并发初始化失败 | 2026-06-03 | 🔄 In-Progress | 多进程/容器部署场景 |
| **#5987** — Nix flake 支持 | 2026-06-03 | 🔄 Open | Nix 社区长期等待 |
| **#6389** — 9 渠道 per-recipient 回复速率限制 | 2026-06-03 | 🔄 Open | 大规模部署必需 |

**特别提醒：**
- **#6103** 处于 `blocked` 状态，需明确阻塞原因并解除。
- **#5453** 和 **#5636** 均为高优先级 provider/channel 兼容性问题，影响用户核心工作流。
- **#5987**（Nix flake）自 4 月 22 日开放至今，建议至少给出审查反馈。

---

*日报生成时间：2026-06-04 | 数据来源：GitHub API | 分析引擎：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*