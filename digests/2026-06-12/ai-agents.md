# OpenClaw 生态日报 2026-06-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-12 00:44 UTC

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

# OpenClaw 项目动态日报 — 2026-06-12

---

## 1. 今日速览

过去 24 小时 OpenClaw 社区极为活跃：Issues 更新 **500 条**（新开/活跃 478 条，关闭 22 条），PR 更新 **500 条**（待合并 390 条，已合并/关闭 110 条），但无新版本发布。项目积压的待合并 PR 数量较大（390 条），反映出审查带宽存在瓶颈。今日多个 bug fix PR 被合并，核心稳定性问题在持续消化中。（数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)）

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

---

## 3. 项目进展

今日共有 **110 个 PR 被合并或关闭**，以下为最重要的合并成果：

| PR | 状态 | 核心内容 |
|---|---|---|
| [#92250](https://github.com/openclaw/openclaw/pull/92250) | ✅ CLOSED | 修复 cron 调度更新后误追跑陈旧槽位的问题（fixes #91944） |
| [#92277](https://github.com/openclaw/openclaw/pull/92277) | ✅ CLOSED | 同一 cron fix 的精简版合并，确保 `cron.update` 后不会重播已过期的时间槽 |
| [#92295](https://github.com/openclaw/openclaw/pull/92295) | 🟢 OPEN | 修复 `cron edit --cron` 静默剥离 `tz`/`staggerMs` 的问题（fixes #92291） |
| [#92292](https://github.com/openclaw/openclaw/pull/92292) | 🟢 OPEN | 修复 `openclaw doctor` 在默认模型被移除目录后给出无用报错（fixes #92009） |
| [#92111](https://github.com/openclaw/openclaw/pull/92111) | 🟢 OPEN · 👀 ready | 修复 managed gateway 更新失败后 gateway 进程不再自动重启的问题（fixes #92088） |
| [#92294](https://github.com/openclaw/openclaw/pull/92294) | 🟢 OPEN | 修复 OpenAI/Codex 运行时 isolated cron 报 exec tool unavailable 的根因（fixes #92238） |
| [#90552](https://github.com/openclaw/openclaw/pull/90552) | 🟢 OPEN | 在 JSONL 转录中持久化 sender 元数据，补全群聊场景下的身份信息 |
| [#86649](https://github.com/openclaw/openclaw/pull/86649) | 🟢 OPEN | 将 Claude CLI assistant 记录转为流式 delta，改善 WebChat UI 的渐进输出体验 |

**项目整体向前迈进：** Cron 调度稳定性（追赶逻辑、编辑覆盖丢失时区）是当前修复重心；Gateway 更新可靠性、跨平台工具执行（Codex/OAuth 运行时）也在同步推进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

1. **[#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** — 💬 109 👍 79
   - 诉求：已有 macOS/iOS/Android 客户端，Linux 和 Windows 原生应用缺失。用户期待与 macOS 同等级的功能集，是目前获赞最多的开放 issue。

2. **[#9443 — Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443)** — 💬 25 👍 2
   - 诉求：希望 GitHub Release 中提供预编译 APK，而非仅含源码。降低非开发者群体的使用门槛。

3. **[#32473 — Control UI requires device identity (HTTPS/localhost)](https://github.com/openclaw/openclaw/issues/32473)** — 💬 17 👍 5
   - 诉求：Docker + VPS 环境下 Control UI 报安全上下文错误，缺乏清晰的配置指引。

4. **[#32296 — Agent replies to previous message instead of current message](https://github.com/openclaw/openclaw/issues/32296)** — 💬 15 👍 1
   - 诉求：会话上下文混淆，Agent 回复错位。影响多轮对话体验。

5. **[#10659 — Masked Secrets: Prevent Agent from Accessing Raw API Keys](https://github.com/openclaw/openclaw/issues/10659)** — 💬 13 👍 4
   - 诉求：安全增强——允许 Agent 使用 API Key 但不能被读取，防止 prompt injection 泄露凭证。

### 🌟 关键信号
- **跨平台桌面客户端**（#75）长期占据讨论榜首且获赞量极高，是平台化路线图的核心诉求。
- **安全隔离**（masked secrets、exec sandboxing、filesystem access control）成为高频被提及的治理议题。

---

## 5. Bug 与稳定性

按严重程度排列今日报告 / 活跃的问题：

### 🔴 P1 — 严重 / 影响核心功能

| # | 描述 | 影响 | Fix PR |
|---|---|---|---|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon SIGUSR1 重启竞态——orphaned processes + send failures | crash-loop, message-loss | ⏳ 有 linked PR |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent 回复错位（回复了上一条而非当前消息） | session-state confusion | 暂无 PR |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | agentDir 下的 bootstrap 文件被静默忽略，仅加载 workspace 目录 | security, session-state | 暂无 PR |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 工具缺少 append mode，隔离 cron 并发覆写共享文件导致静默数据丢失 | data-loss | 暂无 PR |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send 双方互发导致消息重复 | message-loss | 暂无 PR |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026.3.2 回归：google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined or null to object" | crash-loop, auth-provider | 暂无 PR |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | `openclaw update` 在 Windows 上报 EBUSY 错误，无法自更新 | availability (Windows) | 暂无 PR |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker + Sandbox 无法正确绑定 workspace（DooD 路径问题） | session-state, security | 暂无 PR |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | sandbox workspaceAccess=none 时 workspace 挂载为只读 | security, session-state | 暂无 PR |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | 隔离 cron 持续报 "LLM request failed"——usage.input=0，请求未到达 provider | session-state, message-loss | 暂无 PR |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | Heartbeat drift fix（PR #39182）导致 Telegram 在活跃对话中被心跳阻塞 | message-loss | 暂无 PR |

### 🟡 P2 — 重要 / 局部影响

| # | 描述 | Fix PR |
|---|---|---|
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | Safeguard compaction 忽略 compaction.model 配置 | 有 linked PR |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | exec 工具不继承 skills.entries.*.env 环境变量（回归） | 有 linked PR |
| [#41545](https://github.com/openclaw/openclaw/issues/41545) | 编辑 WebSocket URL 时 Gateway Token 被清空 | 有 linked PR |
| [#85888](https://github.com/openclaw/openclaw/issues/85888) | MiniMax cron 在凌晨 CST 5-7:30 持续 503，手动触发成功 | 有 linked PR |
| [#85249](https://github.com/openclaw/openclaw/pull/85249) | isolated cron executor 中 undefined sourceDelivery 导致 TypeError | ✅ 有 PR 待合并 |

### 稳定性健康度评分
- **整体：⚠️ 中等风险** — 多个 P1 crash-loop / data-loss 问题尚无 fix PR，尤其是 Signal 竞态、Agent 回复错位、Write 工具 append 缺失等核心功能缺陷。好消息是 cron 调度类 bug 正在被快速修复。

---

## 6. 功能请求与路线图信号

| 方向 | 代表 Issue | 信号强度 | 已有进展 |
|---|---|---|---|
| **多平台桌面客户端** | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot | ⭐⭐⭐⭐⭐（109 评论，79 赞）| 暂无官方 PR |
| **移动端预编译** | [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt APK | ⭐⭐⭐⭐ | 仅源码，无打包流程 |
| **安全隔离增强** | [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets、[#7722](https://github.com/openclaw/openclaw/issues/7722) FileAccess Sandbox、[#6615](https://github.com/openclaw/openclaw/issues/6615) Exec Denylist、[#39979](https://github.com/openclaw/openclaw/issues/39979) Path-scoped RWX | ⭐⭐⭐⭐⭐（多条高赞）| 部分已有设计讨论，尚无实现 PR |
| **多 Agent 协作** | [#35203](https://github.com/openclaw/openclaw/issues/35203) RFC: Capability Profiling + Shared Blackboard + Layered Memory | ⭐⭐⭐（8 评论，正式 RFC）| 处于设计阶段 |
| **Agent 记忆持久化** | [#40418](https://github.com/openclaw/openclaw/issues/40418) Automated Session Memory Preservation | ⭐⭐⭐ | 暂无 PR |
| **Secrets 管理集成** | [#13610](https://github.com/openclaw/openclaw/issues/13610) AWS Secrets Manager / Vault | ⭐⭐⭐ | 暂无 PR |
| **Cron 可靠性** | [#85888](https://github.com/openclaw/openclaw/issues/85888) MiniMax 过载 | ⭐⭐⭐ | 有 linked PR |
| **备份/恢复工具** | [#13616](https://github.com/openclaw/openclaw/issues/13616) Backup/Restore Utility、[#40786](https://github.com/openclaw/openclaw/issues/40786) exclude patterns | ⭐⭐⭐ | 待规划 |

**预计下一版本优先纳入：** Cron 调度稳定性修复系列（tz/staggerMs 保留、catch-up 逻辑）；安全审计矩阵（PR [#92086](https://github.com/openclaw/openclaw/pull/92086) 已在 PR 队列中）。

---

## 7. 用户反馈摘要

**真实痛点提炼：**

1. **"安全上下文"部署门槛过高** — 多来自 VPS + Docker 用户（[#32473](https://github.com/openclaw/openclaw/issues/32473)），在配置 HTTPS / localhost 时缺乏清晰指引，导致 Control UI 完全不可用。用户表示 *"I can't find how to solve this"*。

2. **多轮对话错位令人沮丧** — [#32296](https://github.com/openclaw/openclaw/issues/32296) 用户描述 Agent 回答上一条而非当前消息，*"conversation misalignment"* 严重影响信任感。

3. **配置文件模型过时导致不可用** — [#38327](https://github.com/openclaw/openclaw/issues/38327) 升级后 google-vertex 模型立即崩溃，回归问题说明 Provider 目录更新与兼容性测试存在缺口。

4. **隔离 cron 场景数据丢失隐患** — [#40001](https://github.com/openclaw/openclaw/issues/40001) 指出 write 工具无 append mode，*"silent data loss"* 是多 cron job 用户的核心担忧。

5. **Android / Windows 缺席被频繁提及** — 桌面和移动覆盖度的呼声持续高涨（#75、#9443），平台覆盖率是扩大非开发者用户群的瓶颈。

6. **对安全性的期待在升级** — Masked Secrets、exec sandboxing、denylist 等请求表明企业级部署需求在增长，当前 ".env 明文存储 secrets" 方案已不满足用户。

---

## 8. 待处理积压

以下长期未响应的重要 Issue / PR 需要维护者关注：

| 类型 | # | 创建时间 | 状态 | 说明 |
|---|---|---|---|---|
| Issue | [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 🟢 开放 | Linux/Windows 客户端，5 个月无官方回应，109 讨论 |
| Issue | [#32296](https://github.com/openclaw/openclaw/issues/32296) | 2026-03-02 | 🟢 开放 | P1 Agent 回复错位，3 个月无 fix |
| Issue | [#29387](https://github.com/openclaw/openclaw/issues/29387) | 2026-02-28 | 🟢 开放 | P1 bootstrap 文件在 agentDir 被静默忽略 |
| Issue | [#40001](https://github.com/openclaw/openclaw/issues/40001) | 2026-03-08 | 🟢 开放 | P1 Write 工具缺少 append mode，数据丢失 |
| Issue | [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026-03-06 | 🟢 开放 | P1 gemini 回归 crash，3 个月无修复 |
| PR | [#90872](https://github.com/openclaw/openclaw/pull/90872) | 2026-06-06 | 🟢 开放 | size:XL，跨多模块（discord/docker/agents），需大量审查 |
| PR | [#89569](https://github.com/openclaw/openclaw/pull/89569) | 2026-06-02 | 🟢 开放 | size:XL，Telegram/WhatsApp pre-auth + allowlist，安全边界变更 |
| PR | [#38295](https://github.com/openclaw/openclaw/pull/38295) | 2026-03-06 | 🟢 开放 | config warning 去重 + 慢重启风暴修复，审查停滞 |
| PR | [#92086](https://github.com/openclaw/openclaw/pull/92086) | 2026-06-11 | 🟢 开放 | Security Matrix 运行时审计模型，size:XL，安全核心变更 |
| Issue | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 2026-02-06 | 🟢 开放 | Masked Secrets，4 个月无官方回复 |

**积压健康度：🔴 偏高** — 10 个待处理积压中有 5 个 P1 critical bug 超 3 个月未修复，3 个 XL 级 PR 审查周期可能较长。建议维护者近期优先分配 review 时间给 Signal 竞态（#22676）、Data-loss（#40001）和 bootstrap 忽略（#29387）这三个 P1。

---

*本报告由 OWL 自动生成，数据截至 2026-06-12 UTC。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

*基于 2026-06-12 各项目社区动态 | 分析引擎：OWL*

---

## 1. 生态全景

2026 年 6 月，个人 AI 助手/自主智能体开源生态正处于**从"功能验证"向"生产就绪"跨越**的关键阶段。今日 14 个被监控的项目中，超过 10 个有活跃代码提交，6 个发布了新版本或 nightly build，生态整体活跃度处于高位。**Cron 调度可靠性、MCP 协议兼容性、多 Agent 协作架构**成为横跨多个项目的共同技术攻坚方向，反映出生态正在从单一 Agent 响应走向复杂的自动化工作流编排。与此同时，Windows/Linux 桌面客户端缺失、安全隔离（Secrets 管理、exec sandboxing）、本地模型部署体验等"最后一公里"问题在多个项目中集中暴露，说明社区需求正从"能用"向"好用、安全、可运维"升级。值得注意的是，以 OpenClaw 为参照，生态中形成了"核心框架 → 轻量变体 → 垂直定制"的分层格局，Rust 组件引入、AgentScope 2.0 迁移、Computer Use 能力落地等信号表明，下一轮技术竞争将围绕**性能、自主性、跨平台分发**展开。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 版本 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（478/22） | 500（390/110） | 无 | — | ⚠️ 中等（积压严重） |
| **NanoBot** | 5（3/2） | 19（13/6） | 无 | — | 🟡 良好 |
| **Hermes Agent** | 50（42/8） | 50（38/12） | 无 | — | 🟢 较高 |
| **PicoClaw** | 6（3/3） | 32（13/19） | Nightly | v0.2.9-nightly.20260611 | 🟡 良好 |
| **NanoClaw** | 3（2/1） | 18（9/9） | 无 | — | 🟡 修复中上升 |
| **NullClaw** | 1（1/0） | 0 | 无 | — | 🔴 低活跃 |
| **IronClaw** | 31 | 49 | 无 | — | 🟡 良好 |
| **LobsterAI** | 2 | 19（1/18） | 无 | — | 🟢 高（批量清理后为功能大版本蓄力） |
| **TinyClaw** | 0 | 0 | 无 | — | 🔴 无活动 |
| **Moltis** | 1 | 1 | 无 | — | 🔴 低活跃 |
| **CoPaw** | 31（19/12） | 40（21/19） | 2×post | v1.1.11.post2 | 🟡 震荡修复期 |
| **ZeptoClaw** | 0 | 0 | 无 | — | 🔴 无活动 |
| **ZeroClaw** | 50（50/0） | 50（49/1） | 有（里程碑） | v0.8.0 | 🟡 重大发布后消化期 |

> **注：** Issues/PR 更新格式中，括号内分别为新开或待合并数 / 关闭或已合并数。健康度基于积压量、响应速度、崩溃 bug 数量综合评定。

---

## 3. OpenClaw 在生态中的定位

### 社区规模与活跃度

OpenClaw 是今日生态中**绝对的核心参照项目**——Issues 和 PR 更新量均达 500 条，远超其他所有项目之和（其余 13 个项目合计约 288 条 Issues 更新、约 328 条 PR 更新）。这意味着 OpenClaw 的社区贡献量占整个被监控生态的 **50% 以上**，具备事实上的生态锚点地位。

### 技术路线差异

| 维度 | OpenClaw | 典型同类 |
|---|---|---|
| **架构哲学** | 全能型 Agent OS（Gateway + Cron + Skills + Security + Multi-provider） | 多数为精简框架（如 NanoClaw 专注安全容器，NanoBot 专注高并发消息路由） |
| **桌面端** | macOS/iOS/Android 已有，Linux/Windows 缺失（Issue #75 积压 5 个月，109 讨论） | LobsterAI 以 Electron 全平台桌面端为核心产品形态 |
| **安全隔离** | Masked Secrets、Exec Denylist、FileAccess Sandbox 等诉求密集但实现缓赶 | NanoClaw 将隔离做到极致（Docker 容器绑定挂载校验、并发上限熔断、egress lockdown） |
| **Cron 调度** | 今日合并 2 个 cron bug fix，调度稳定性是当前修复重心 | ZeroClaw 为 cron 添加 claim/release 锁防止重复执行，Moltis cron 尚未成为焦点 |
| **MCP 支持** | MCP 工具暴露不一致、OAuth 注册缓存等问题在推进中 | Hermes 修复了 prompt-only server 兼容性，IronClaw 推进附件提取与 MCP 上下文集成 |

### 核心优势与短板

**优势：** 生态最大、通道覆盖最全（Signal/Discord/Telegram/WhatsApp 等）、技能系统最成熟、多 provider 支持最广泛。Issue #75（桌面端）和 #10659（Masked Secrets）等高赞需求若落地，将进一步拉开与竞品的差距。

**短板：** 积压 PR 390 条，审查带宽严重不足；多个 P1 级 bug 超 3 个月未修复（Agent 回复错位、Write 工具数据丢失、Gemini 回归崩溃）；Windows 缺席是平台化最大障碍。相较之下，LobsterAI 和 Hermes 在桌面体验和响应速度上已展现更好的"产品感"。

---

## 4. 共同关注的技术方向

以下技术方向在**两个及以上项目**中同时出现，反映行业共性需求：

### 4.1 Cron / 定时任务调度可靠性
- **涉及项目：** OpenClaw、NanoBot、ZeroClaw、CoPaw
- **具体诉求：** 任务不重播已过期时间槽（OpenClaw #92250/#92277）、cron 等待子代理完成后再结束（NanoBot #4290）、cron claim/release 锁防重复执行（ZeroClaw #6038）、Agent 创建的定时任务无法触发（CoPaw #5064）

### 4.2 MCP 协议兼容性深化
- **涉及项目：** OpenClaw、Hermes Agent、NanoBot、IronClaw、Moltis
- **具体诉求：** 支持纯 Prompt 类型 MCP Server（Hermes #44550）、MCP 重连后优雅恢复（NanoBot #4302）、动态 HTTP 头透传给 MCP Server（PicoClaw #2696）、附件提取后注入 MCP 上下文（IronClaw #4676）、Fastmail MCP 第三方邮件授权（Moltis #1115）

### 4.3 多 Agent 协作架构
- **涉及项目：** OpenClaw、PicoClaw、ZeroClaw、LobsterAI、NanoClaw
- **具体诉求：** Capability Profiling + Shared Blackboard（OpenClaw #35203）、Agent Collaboration Bus（PicoClaw #2937）、多 Agent 单 Daemon（ZeroClaw v0.8.0）、Manager Agent 调度子 Agent "房间模式"（LobsterAI #1462）、子代理消息路由与隔离会话（NanoClaw #3094→#2937）

### 4.4 安全隔离增强
- **涉及项目：** OpenClaw、NanoClaw、Hermes Agent、CoPaw
- **具体诉求：** Masked Secrets 防 prompt injection 读取（OpenClaw #10659）、沙箱文件访问控制（OpenClaw #7722）、容器绑定挂载路径校验与并发熔断（NanoClaw #2732）、Keychain 主密钥隔离（CoPaw #5028）、Desktop 审批流 GUI 渲染（Hermes #37812）

### 4.5 桌面端与跨平台
- **涉及项目：** OpenClaw、Hermes Agent、PicoClaw、NanoClaw、CoPaw
- **具体诉求：** Linux/Windows 原生应用（OpenClaw #75，5 个月无回应）、Electron Desktop 认证（Hermes #43720）、Windows 路径分隔符兼容性（PicoClaw #2472，2 个月未修复）、Docker Desktop drvfs 部署（NanoClaw #2732）、Tauri 桌面端 SSL 崩溃（CoPaw #5106）

### 4.6 记忆系统
- **涉及项目：** OpenClaw、NanoClaw、CoPaw、ZeroClaw
- **具体诉求：** 自动会话记忆持久化（OpenClaw #40418）、记忆系统架构 Redesign（NanoClaw #1356）、Dream Mode 周期性记忆巩固（ZeroClaw #5849，17 条评论最热门）、本地向量记忆配置持久化（CoPaw #3817/#5137）

### 4.7 本地模型支持优化
- **涉及项目：** Hermes Agent、NanoBot、CoPaw、NullClaw
- **具体诉求：** Ollama 默认 4K context 窗口被低估（Hermes #43900）、per-provider 流超时配置（NanoBot #4020）、Ollama/GGUF 模型回答不完整（NullClaw #952）、本地 vLLM 模型对话无响应（CoPaw #4989）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 核心架构特征 | 差异化标签 |
|---|---|---|---|---|
| **OpenClaw** | 全能 Agent OS：多通道、多 provider、安全策略、技能市场 | 技术型个人用户 / 小团队 | Monorepo 全栈（Gateway + Runtime + Channels），规模最大 | "生态标准" |
| **NanoBot** | 高并发消息路由、多 Provider 支持、Python SDK | 开发者 / 企业集成 | 异步消息总线 + Provider 抽象层 | "API 优先" |
| **Hermes Agent** | Desktop GUI 体验、MCP 生态、多 Profile/Sidecar | 桌面端深度用户 | Electron Desktop + CLI + Gateway 多模态 | "桌面原生" |
| **PicoClaw** | 多 Agent 协作总线、MCP 协议扩展、WhatsApp 原生 | 个人用户 + 飞书/Telegram 重度用户 | Agent Collaboration Bus + 容器化部署 | "协作先锋" |
| **NanoClaw** | 安全容器隔离、多 Bot 基础设施、精细会话管理 | 安全敏感型部署（Docker/K8s） | 容器级安全（bind-mount 校验、并发熔断、egress lockdown）| "安全堡垒" |
| **IronClaw** | Reborn 子系统生产化、WebUI v2、可观测性 | NEAR AI 生态用户 / 新一代 Agent 构建者 | 双轨架构（Legacy + Reborn），PostgreSQL 生产存储 | "生产就绪" |
| **LobsterAI** | 桌面端全功能 Agent、Computer Use、语音交互、美团生态 | 国内个人用户 / 企业办公 | Electron 桌面端 + OpenClaw  Gateway 后端 + Cowork 语音 | "国内旗舰桌面" |
| **CoPaw** | 后端 Agent 框架（AgentScope）、Tauri 桌面端、插件生态 | Python 开发者 / AgentScope 生态用户 | AgentScope 运行时 + Tauri 桌面 + 插件系统 | "AgentScope 载体" |
| **ZeroClaw** | 多 Agent 单 Daemon、V3 Config、可观测性 | 多实例运维者 / 开发者 | Rust 核心 + 多 Agent 运行时 + OTel 集成 | "多实例管理" |
| **NullClaw** | 极简 Agent 框架 | 初学者 / 轻量用户 | 最小化设计 | "待观察" |
| **Moltis** | Fastmail/WhatsApp 通道集成 | 特定通道用户 | 通道扩展型 | "小众通道" |
| **TinyClaw** | 未明确 | — | — | "休眠中" |
| **ZeptoClaw** | 未明确 | — | — | "休眠中" |

**关键架构差异：**
- **桌面产品型**（LobsterAI、Hermes）：以 Electron/Tauri 桌面应用为核心，追求开箱即用体验
- **框架/运行时型**（OpenClaw、ZeroClaw、NanoBot）：以 Gateway + Runtime 为核心，追求可扩展性和多渠道路由
- **安全容器型**（NanoClaw）：以 Docker 容器隔离为核心设计约束
- **后端迁移型**（CoPaw）：核心工作是从 AgentScope 1.x 迁移到 2.0

---

## 6. 社区热度与成熟度

### 🌡️ 活跃度分层

**第一梯队——超高活跃（日 Issues+PR > 100 条）**
- **OpenClaw**（1000 条）：生态核心，但积压 390 PR、P1 bug 修复缓慢，处于**规模扩张与质量治理的矛盾期**
- **ZeroClaw**（100 条）：v0.8.0 重大发布后首个高活跃期，49 个 PR 待合并，处于**发布后震荡消化期**

**第二梯队——高活跃（日 Issues+PR 30–100 条）**
- **Hermes Agent**（100 条）：Desktop 方向集中贡献，38 PR 待审，处于**桌面体验快速迭代期**
- **PicoClaw**（38 条）：合并窗口期高效推进，19 PR 同日合并，处于**密集功能交付期**
- **CoPaw**（71 条）：v1.1.11 发布后连续 post 发版，桌面端崩溃问题集中，处于**版本震荡修复期**
- **IronClaw**（80 条）：Reborn 生产化推进 + 遗留问题清理，处于**新老架构过渡期**

**第三梯队——中等活跃（日 Issues+PR 5–30 条）**
- **NanoBot**（24 条）：稳定性修复主导，子代理 + MCP 崩溃 PR 推进中，处于**核心稳定性巩固期**
- **NanoClaw**（21 条）：批量修复合入 + 安全加固，处于**修复中上升期**
- **LobsterAI**（21 条）：Computer Use MVP + ASR 语音 + 历史积压清理，处于**功能大版本蓄力期**

**第四梯队——低活跃（日 Issues+PR < 5 条）**
- **NullClaw**（1 条）：仅 1 个新 Issue，社区参与度低
- **Moltis**（2 条）：1 Issue + 1 PR，维护性微迭代
- **TinyClaw、ZeptoClaw**（0 条）：无活动，处于休眠或早期开发状态

### 成熟度判断

| 阶段 | 项目 | 标志 |
|---|---|---|
| **快速迭代期** | Hermes、PicoClaw、IronClaw | 新功能集中合入，架构级 PR 推进中 |
| **质量巩固期** | OpenClaw、NanoBot、ZeroClaw、CoPaw | 大量 bug fix PR 合并，回归问题修复 |
| **功能蓄力期** | LobsterAI、NanoClaw | 批量修复收尾后即将迎来功能大版本 |
| **探索/休眠期** | NullClaw、Moltis、TinyClaw、ZeptoClaw | 无明确产品方向或社区推动力不足 |

---

## 7. 值得关注的趋势信号

### 信号一：Agent 正从"对话响应"走向"自主工作流"

**数据支撑：** Cron 调度可靠性（OpenClaw/NanoBot/ZeroClaw/CoPaw 四项目同步攻坚）、Agent 创建定时任务（CoPaw #5064）、Dream Mode 反思学习（ZeroClaw #5849 最热门 issue）、子代理生命周期管理（NanoBot #4290）。

**开发者启示：** 定时任务编排、子代理协调、Agent 自主计划与反思将成为下一个能力标杆。仅支持"用户提问→Agent 回答"的产品将迅速失去竞争力。

### 信号二：MCP 正成为 Agent 生态的"USB 接口"，但协议兼容性是最大摩擦

**数据支撑：** 5 个项目同时推进 MCP 相关修复和功能扩展，涵盖 prompt-only server 支持（Hermes）、动态 HTTP 头透传（PicoClaw）、附件上下文注入（IronClaw）、第三方邮件授权（Moltis）。NanoBot 甚至因 MCP 重连崩溃导致 gateway 整体不可用（#4302 P0）。

**开发者启示：** MCP 工具链的成熟度是 Agent 能力天花板的关键变量。建议优先投资 MCP server 的错误处理、重连降级和能力探测机制，而非单纯增加工具数量。

### 信号三：安全隔离从"nice-to-have"变为"must-have"

**数据支撑：** Masked Secrets（OpenClaw #10659，4 个月未回应但高赞）、容器级沙箱（NanoClaw 将安全做到极致）、Keychain 隔离（CoPaw #5028）、Desktop 审批流安全（Hermes #37812）。

**开发者启示：** 企业级部署需求正在快速增长，`.env 明文存储 secrets`、无沙箱的 exec 执行、Agent 可读取任意文件等设计已不满足用户对安全性的期待。提前规划安全审计矩阵将获得市场竞争优势。

### 信号四：桌面端是"最后一公里"，但战略优先级在各项目中分化严重

**数据支撑：** OpenClaw 的 Linux/Windows 客户端诉求积压 5 个月无官方回应（Issue #75 最高赞），LobsterAI 和 Hermes 则将桌面端作为核心产品持续投入。PicoClaw 的 Windows 路径兼容性 bug 同样 2 个月未修（#2472），CoPaw 的 Tauri 桌面崩溃已造成用户系统黑屏（#5106）。

**开发者启示：** 桌面端是撬动非开发者用户群的关键杠杆，但也是投入最大的方向。建议根据目标用户群体做明确取舍——面向开发者可优先 CLI/API，面向大众用户则桌面端体验是生死线。

### 信号五：多 Agent 协作是"下一代架构"共识，但实现路径分化

**数据支撑：** 5 个项目同时推进多 Agent 相关能力——OpenClaw 的 Capability Profiling RFC、PicoClaw 的 Agent Collaboration Bus、ZeroClaw 的多 Agent 单 Daemon、LobsterAI 的 Manager Agent 房间模式、NanoClaw 的 multi-bot substrate。

**开发者启示：** 多 Agent 协作不是单一功能，而是需要通信总线、会话隔离、权限感知投递、任务分解与结果聚合等一整套基础设施。建议从"子代理 + 结果回传"的最小闭环开始验证，而非一步到位构建完整的多 Agent 操作系统。

### 信号六：本地模型支持是差异化竞争点，但体验欠账普遍

**数据支撑：** 4 个项目存在本地模型相关问题——Ollama context 窗口被低估（Hermes）、流超时过短（NanoBot）、回答不完整（NullClaw）、vLLM 对话无响应（CoPaw）。

**开发者启示：** 随着开源模型能力持续提升，本地部署需求将持续增长。针对 Ollama/vLM 等主流本地推理框架的适配优化（自动检测 context 窗口、per-provider 超时配置、流式输出稳定性）将成为重要的差异化竞争力。

---

*本报告由 OWL 基于 14 个开源项目的 GitHub 社区数据自动生成。数据截至 2026-06-12 UTC。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# HKUDS/nanobot 项目动态日报 — 2026-06-12

---

## 1. 📊 今日速览

NanoBot 在 6 月 11–12 日呈现**高活跃度**：过去 24 小时共处理 5 条 Issue 更新（3 开/2 闭）和 19 条 PR 更新（13 待合并、6 已合并/关闭），社区贡献节奏明显加快。**无新版本发布**。当前项目正集中修复 cron 子代理生命周期管理、MCP 重连崩溃等核心稳定性问题，同时推进 Python SDK 增强、多 Provider 支持等架构级改进。Slack 集成、转录 Provider 扩展等周边生态也在持续完善。整体来看项目处于密集迭代期，积压的开放 PR 数量偏高。

---

## 2. 🚀 版本发布

**无新版本发布。**

---

## 3. 🔧 项目进展 — 今日合并/关闭的重要 PR

| PR | 类型 | 摘要 | 链接 |
|---|---|---|---|
| #4257 | **已合并** `fix` | `split_message` 增加围栏代码块感知能力，修复长消息截断导致 HTML 渲染损坏的问题 | [查看](https://github.com/HKUDS/nanobot/pull/4257) |
| #4281 | **已合并** `feat` | 新增 SiliconFlow 转录 Provider（`FunAudioLLM/SenseVoiceSmall`），复用 OpenAI Whisper 兼容适配器 | [查看](https://github.com/HKUDS/nanobot/pull/4281) |
| #4289 | **已合并** `feat` | Slack `groupRequireMention` 选项：allowlist 频道中仅在被 @提及 时响应，完善频道策略粒度 | [查看](https://github.com/HKUDS/nanobot/pull/4289) |
| #4020 | **已合并** `feat` | 流空闲超时（stream-idle timeout）改为 per-provider 可配置，解决本地 LLM（Ollama/LM Studio）90s 超时过短问题 | [查看](https://github.com/HKUDS/nanobot/pull/4020) |
| #4297 / #4298 | **已关闭** | worktree 相关实验性分支（含 hermes 研究文档），已清理 | — |

**关键推进总结：**
- 修复了长消息中代码块被截断的渲染 bug（#4257），提升多频道（含富文本渲染渠道）的消息可靠性
- SiliconFlow 转录 Provider 上线（#4281），拓宽了音频处理能力覆盖
- Slack 频道策略精细化（#4289），解决了用户无法在 allowlist 频道中仅通过 @提及 触发响应的痛点
- 流超时可配置化（#4020）是对本地 LLM 用户体验的重要改善

---

## 4. 🔥 社区热点 — 最受关注的 Issue & PR

### 稳定性焦点：Cron + 子代理
- **Issue #4290** [OPEN · bug]: *cronjob ends early when there's a subagent spawned*
  Cron 任务在子代理完成后未等待即提前结束，导致主 Agent 无法处理子代理返回结果。已有两个并行 PR 尝试修复：PR #4304 和 PR #4293。
  👉 [查看 Issue](https://github.com/HKUDS/nanobot/issues/4290)

- **Issue #4302** [OPEN · bug]: *nanobot gateway crashes after mcp reconnect*
  MCP `streamableHttp` 会话终止后重连时触发 `RuntimeError: cancel scope` 崩溃，PR #4303 已定位根因为跨 asyncio task 关闭 generator。
  👉 [查看 Issue](https://github.com/HKUDS/nanobot/issues/4302)

### 架构级讨论：多 Provider 支持
- **Issue #4305** [OPEN · enhancement]: *Multiple custom providers: ?*
  用户 smurfix 提出需要多个自定义（OpenAI 兼容）Provider 的需求。PR #3239（创建已 2 个月+）正在实现此功能，但尚未合并。Issue 与 PR 形成呼应，说明这是社区长期诉求。
  👉 [查看 Issue](https://github.com/HKUDS/nanobot/issues/4305) | [相关 PR #3239](https://github.com/HKUDS/nanobot/pull/3239)

- **PR #4296** [OPEN · feat]: *expand Python SDK runtime controls*
  将 Python SDK 从极简 `bot.run()` 扩展为完整的开发者 API，增强 session、memory、runtime 控制能力。这是平台化的重要一步。
  👉 [查看 PR](https://github.com/HKUDS/nanobot/pull/4296)

### 细节体验
- **Issue #4233** [CLOSED · enhancement]: *Show the nanobot version in the webui somewhere*
  用户希望在 WebUI 中直接显示当前版本号并可提示更新。已关闭，可能通过其他方式实现或暂搁置。

---

## 5. 🐛 Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 P0—崩溃 | [#4302](https://github.com/HKUDS/nanobot/issues/4302) | MCP 重连后 gateway 崩溃（RuntimeError: cancel scope 跨 task 关闭） | OPEN | [#4303](https://github.com/HKUDS/nanobot/pull/4303)（OPEN，已定位根因） |
| 🔴 P0—数据丢失 | [#4290](https://github.com/HKUDS/nanobot/issues/4290) | Cron 任务在子代理完成前提前结束，后续工作流失败 | OPEN | [#4304](https://github.com/HKUDS/nanobot/pull/4304)、[#4293](https://github.com/HKUDS/nanobot/pull/4293) 均在处理 |
| 🟡 P1—功能缺陷 | [#4236](https://github.com/HKUDS/nanobot/issues/4236) | Bubblewrap 沙箱在 Ubuntu 24.04 因用户命名空间限制失败 | **CLOSED** | 暂无明确 fix PR（可能为文档说明或配置调整） |
| 🟢 P2—体验 | [#4257](https://github.com/HKUDS/nanobot/pull/4257) | 长消息截断破坏围栏代码块 HTML 渲染 | **已修复合并** | #4257 |

**稳定性评估：** 当前有两个 P0 级 bug（MCP 重连崩溃 + Cron 子代理生命周期）均有修复 PR 在推进中，表明维护者响应及时。#4302 的 `cancel scope` 问题涉及 asyncio 底层，可能需要细致 review 后合并。

---

## 6. 🗺️ 功能请求与路线图信号

| 需求来源 | 内容 | 对应 PR | 判断 |
|---|---|---|---|
| #4305 | 多自定义 OpenAI 兼容 Provider | [#3239](https://github.com/HKUDS/nanobot/pull/3239)（已存在 ~2 月） | **高优先级**，PR 已存在但进展缓慢，需推动合并 |
| #4300 | Skill 类型可用性检查（`_is_skill_fully_available`） | [#4300](https://github.com/HKUDS/nanobot/pull/4300) | **近期可合并**，实现明确 |
| #4291 | 子代理可配置模型预设 | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | 有需求场景，审查后可纳入 |
| #4301 | SkillsLoader 缓存避免重复扫描 | [#4301](https://github.com/HKUDS/nanobot/pull/4301) | 性能优化，建议尽早合入 |
| #4233（已关闭） | WebUI 显示版本号 | — | 低悬已关闭，可能后续重新打开 |
| #4294 | 桌面应用移出核心仓库 | [#4294](https://github.com/HKUDS/nanobot/pull/4294) | 架构清理，简化 repo 维护 |

**路线图信号：** 项目正从"功能可用"向"企业级可用"演进——Python SDK 增强（#4296）、cron 与 session 绑定（#4299）、gateway 命令完善（#3538）均指向更好的可运维性和开发者体验。

---

## 7. 💬 用户反馈摘要

| 维度 | 内容 |
|---|---|
| **痛点 — 沙箱** | Ubuntu 24.04 默认限制非特权用户命名空间，`bwrap` 沙箱直接失败，用户需要明确的配置指引或自动降级方案 (#4236) |
| **痛点 — 可靠性** | MCP 连接不稳定后导致 gateway 整体崩溃，用户期望优雅重连而非进程终止 (#4302) |
| **痛点 — Cron + Subagent** | 定时任务 + 子代理组合是真实使用场景，但 cron 不等子代理完成就标记完成，导致业务工作流中断 (#42290) |
| **痛点 — 本地 LLM** | Ollama/LM Studio 用户反映 90s 流超时偏短，希望 per-provider 配置 (#4013 / PR #4020 已合并) |
| **痛点 — 多 Provider** | 用户需要同时对接多个内部/云端 OpenAI 兼容 API，但当前只支持单个 `custom` provider (#4305) |
| **满意度 — Slack** | 用户认可 Slack 集成并支持 `groupRequireMention` 细化（PR #4289 已合并） |
| **满意度 — 转录** | SiliconFlow 转录提供商的加入受到积极响应 (#4281) |

---

## 8. 📋 待处理积压 — 需维护者关注

| 事项 | 创建/最后更新 | 风险 |
|---|---|---|
| **[PR #3239](https://github.com/HKUDS/nanobot/pull/3239)** feat: 多自定义 OpenAI 兼容 Provider | 创建 2026-04-17，**已开放近 2 个月**未合并 | 社区明确需要此功能（Issue #4305 呼应），长期积压可能导致 contributor 流失 |
| **[PR #3538](https://github.com/HKUDS/nanobot/pull/3538)** feat: gateway start/stop/restart 命令 | 创建 2026-04-29，**已开放 1.5 个月** | 运维基础功能，建议优先评审 |
| **[PR #4021](https://github.com/HKUDS/nanobot/pull/4021)** fix(codex): 去重 reasoning 项 | 创建 2026-05-27，关联 issue #3633 | AI 辅助 PR，需验证正确性 |
| **[PR #4294](https://github.com/HKUDS/nanobot/pull/4294)** chore: 桌面应用移出核心 repo | 2026-06-11 新提交 | 架构决策类 PR，需核心维护者拍板 |

⚠️ **提醒：** PR #3239 和 #3538 已超过常规评审周期，建议本周内安排 review 或给出明确反馈，以维持社区贡献积极性。

---

*本报告由 OWL 基于 HKUDS/nanobot GitHub 数据自动生成，时间范围：2026-06-11 ~ 2026-06-12。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-12

---

## 1. 今日速览

Hermes Agent 今日维持高活跃状态：过去24小时 Issues 和 PR 各更新 50 条，其中新开/活跃 Issues 42 条、已关闭 8 条，PR 待合并 38 条、已合并/关闭 12 条。项目未发布新版本，但合并了多篇重要 Bug 修复和功能分支。**近半数活跃 PR 处于 Desktop 体验改进和 Agent 核心稳定性两大方向**，显示社区贡献非常集中。整体项目健康度较高，但维护者审查压力依然较大（待合并 PR 积压达 38 条）。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定发行版本仍为上一轮次版本。

---

## 3. 项目进展 — 今日合并/关闭的重要 PRs

| PR | 说明 | 状态 |
|---|---|---|
| **#43720** | **修复 Desktop WebSocket 认证失败**：Electron 主进程 spawn 后端时生成的 token 与 dashboard 服务器 session token 不一致，导致 WebSocket 连接鉴权失败。该修复统一了 token 传递路径。 | ✅ 已合并/关闭 → [链接](https://github.com/NousResearch/hermes-agent/pull/43720) |
| **#44550** | **修复 MCP Prompt-only 服务器连接失败**：之前 Hermes 在 discovery/keepalive 阶段无条件调用 `tools/list`，导致不支持该方法的纯 Prompt/资源型 MCP 服务器永久连接失败。此 PR 增加了 capability-gate 判断（移植自 opencode #31271）。 | ✅ 已合并/关闭 → [链接](https://github.com/NousResearch/hermes-agent/pull/44550) |
| **#44545** | **修复 coding context 泄漏主 worktree 绝对路径**：工作区快照中暴露了主 tree 的绝对路径，可能导致 Agent 误操作。现在 coding 上下文中不再包含 primary worktree 路径。 | ✅ 已合并/关闭 → [链接](https://github.com/NousResearch/hermes-agent/pull/44545) |
| **#23594** | **新增 Profile MCP 同步和 Session Sidecar 功能**：允许在多个 profile 之间同步 MCP server 定义，并发布当前 session sidecar（含 cmux surface）。 | ✅ 已合并/关闭 → [链接](https://github.com/NousResearch/hermes-agent/pull/23594) |
| **#25997** | **新增 cron test-run 验证流程和 Profile Sidecar 集成**：cron 任务在执行前可安全验证；同时加入 session sidecar 从 foreground CLI 发布；并让 `hermes update` 拒绝从非 main/detached HEAD 的隐式分支切换。 | ✅ 已合并/关闭 → [链接](https://github.com/NousResearch/hermes-agent/pull/25997) |
| **#44101** | **修复 kanban --skill 创建时未校验 skill 名称**：之前 `hermes kanban create --skill <name>` 接受任意字符串，worker 启动时才崩溃并浪费重试槽位。此修复在创建时即校验。 | 🔄 开放待审 → [链接](https://github.com/NousResearch/hermes-agent/pull/44101) |
| **#44138** | **修复 Desktop 默认 profile session 删除失败**：侧边栏通过 `GET /api/profiles/sessions` 列出 session，但 primary backend 在 DELETE 时未能正确路由 owning profile，导致"Session not found"错误。 | 🔄 开放待审 → [链接](https://github.com/NousResearch/hermes-agent/pull/44138) |
| **#44518** | **修复 gateway 复用缓存 Agent 时 DB flush 游标未重置**：`_last_flushed_db_idx` 在 `_init_cached_agent_for_turn` 中没有重置，导致新一轮消息被跳过持久化，表现为连续 user message、缺少 assistant 回复。 | 🔄 开放待审 → [链接](https://github.com/NousResearch/hermes-agent/pull/44518) |

**项目整体推进评估：** 今日合并集中在 Desktop 认证、MCP 生态兼容性和多-profile/sidecar 三个方向。cron standalone daemon 模式（#43864）、Rust-backed 安装管理器（#44067）等重要 PR 仍在开放中，预计将成为下一版本的亮点功能。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| # | 讨论焦点 | 评论 | 👍 | 分析 |
|---|---|---|---|---|
| **#38240** | Skills index 自动化探针报告服务索引降级（degraded），GitHub source 命中数 0 < 阈值 30 | 9 | 0 | 开发者对 Skills Hub 的可靠性持续关注；cron 触发的索引重建工作流未正常工作，影响 skills 文档系统可用性。 |
| **#16525** | 请求将 `model_switch` 暴露为 Agent 可调用工具，实现基于任务复杂度的自主路由 | 7 | 3 | 用户希望 Agent 能像人类一样根据任务轻重自动切换模型（轻任务用小模型，重任务用大模型），而非依赖手动 `/model` 命令。这是一个重要的**自治性增强**信号。 |
| **#37812** | Hermes Desktop App 在 `approvals.mode: manual` 时审批确认弹窗不在 GUI 中渲染（macOS 26.2 beta） | 7 | 4 | 👍 数最高（4），说明 Desktop 用户的**审批流体验**痛点非常真实。已有修复 PR #39218 尝试解决 `/undo` 类似问题。 |
| **#38945** | Desktop/TUI 会话不可靠地暴露 enabled MCP 工具（以 Todoist 为例），同一 MCP server 在 CLI 正常识别 | 6 | 0 | MCP 工具在 Desktop/TUI 和 CLI 之间暴露不一致，影响跨平台工作流体验。可能与 #44550 的 capability-gate 修复相关。 |
| **#44121** | `npm ci` 在干净 checkout 下因 lock 文件与 `@types/node` 版本不符而失败 | 6 | 0 | 首次接触项目的贡献者被构建流程阻断，影响新人入门体验。应为低门槛修复。 |

### 🔥 活跃 PRs

| # | 焦点 | 分析 |
|---|---|---|
| **#44067** | Rust-backed 安装管理器和 bootstrap 编排 | 引入 Rust 组件是**架构级提升**，可能为未来 Desktop 跨平台分发和性能优化铺路。 |
| **#38846** | 桌面端 15 语言 i18n 支持 | 与 PR #44531（阿拉伯语完整本地化）形成互补，国际化是用户扩张的关键基础设施。 |
| **#43864** | 独立 cron daemon 模式 | 解决无 gateway 环境（Windows 无服务、headless 服务器）下 cron 无法执行的问题。 |
| **#44551** | TUI slash_worker 覆盖率从 0% 提升到 98% | 大幅提高测试覆盖率，减少回归风险。 |

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1/P0 — 严重（未发现）

### 🟠 P2 — 高优先级

| # | 问题描述 | 已有 Fix PR |
|---|---|---|
| **#37812** | Desktop `approvals.mode: manual` 审批弹窗不在 GUI 渲染（macOS beta） | 尚无直接 fix PR；相关 #39218 修复 `/undo` 但非同一问题 |
| **#38945** | Desktop/TUI 会话不可靠暴露 MCP 工具 | #44550 间接关联（MCP 连接稳定性） |
| **#44242** | ACP image content blocks 在 API 调用前被丢弃，所有提供商多模态输入失效 | **#44552** 修复 tool_call/tool_result 对清理，间接相关 |
| **#44499** | Desktop agent 忽略用户配置的 BrowserOS MCP，仍使用内置 `browser_*` 工具 | 无 |
| **#43900** | Ollama 本地模型默认 4096 token context 导致 finish_reason=length 和乱码重试 | 无 |
| **#44394** | tool_call/tool_result 对不一致导致 API 报错 | **#44552** 已开放待合并 ✅ |
| **#44327** | Gateway 复用缓存 Agent 时消息未持久化 | **#44518** 已开放待合并 ✅ |
| **#44471** | Dashboard 文件浏览器在非 Docker 远程访问时 500（Permission denied '/opt/data'） | 无 |
| **#44468** | `hermes send` 到 Discord 遇到 429 限速时不重试，剩余消息块静默丢弃 | 无 |
| **#37096** | MCP stale OAuth client registration 后需手动删除三个缓存文件 | **#37096** PR 已开放待审 ✅ |

### 🟡 P3 — 中低优先级

| # | 问题 | Fix PR |
|---|---|---|
| **#38240** | Skills index 自动化探针报告 degraded | 无 |
| **#44032** | profile alias 扫描 `~/.local/bin` 大文件 | 无 |
| **#43967** | Dashboard model selector 双层滚动难以导航 | 无 |
| **#44456** | Desktop `/compress` 内置命令未重定向到 slash.exec，报错 | 无 |
| **#44515** | Desktop 更新需要手动停止后台进程 | 无 |
| **#44523** | 远程 gateway 模式下点击文件链接为 silent dead end | 无 |
| **#44522** | 远程 gateway 文件夹选择器长列表无 scrollbar | 无 |
| **#44530** | Windows Desktop 无法启动非默认 profile | 无 |
| **#44001** | 内置 piper TTS provider 缺失 lazy-install 注册 | 无 |
| **#44009** | 侧边栏 "Load N more" 按钮因 pinned sessions 计数不匹配永不消 | 无 |
| **#26670** | Windows `hermes update` 隔离 hermes.exe 失败 | 无（已关闭，但原因不明） |

---

## 6. 功能请求与路线图信号

| # | 功能请求 | 信号强度 | 预期方向 |
|---|---|---|---|
| **#16525** | `model_switch` 作为 Agent 可调用工具 | 🔥 高（7 评论 + 👍3，且 Feature + Agent + Gateway 多维标签） | **下一版本大概率方向** — 与自主 Agent 体验高度相关 |
| **#44072** | kanban create `--skill` 创建时校验 skill 存在 | ✅ PR #44101 已跟进 | 即将合并 |
| **#44531** | 阿拉伯语完整本地化 + RTL 支持 | ✅ PR 开放中 | 与 i18n 基础建设（#38846）共同推进 |
| **#42448** | Desktop OIDC 登录中 WebAuthn/Passkey/Touch ID 不触发 | ⚠️ 低（仅有 1 条评论） | OIDC 密码less 认证 |
| **#43864** | cron standalone daemon 模式 | ✅ PR 开放中 | 重要性突出 — 无 gateway 环境下仍可调度任务 |

**路线图综合判断：**
- **Agent 自治性**：#16525（模型自主路由）是社区呼声最高的 feature，且覆盖了 agent/gateway/tools 三层，预计维护者优先级会提升。
- **Desktop 质量杀手（quality-of-life）修复浪潮**：大量 P2/P3 issue 集中于 Desktop GUI 交互细节（approval 弹窗、文件链接、picker scrollbar、profile 切换），说明 Desktop 是用户扩张最快的入口但稳定性欠账较多。
- **MCP 生态深耕**：#45550（prompt-only server）+ #37096（OAuth auto-recover）+ #38945（tool exposure 不一致）显示 Hermes 在 MCP 兼容性上正大幅追赶 Claude Code/Codex。

---

## 7. 用户反馈摘要

### 😤 不满意 / 痛点

| 痛点 | 典型用户场景 |
|---|---|
| **Desktop 审批流脱节** | 用户设置 `approvals.mode: manual` 期待安全审批，但 GUI 不渲染确认弹窗，安全流形同虚设。（#37812） |
| **MCP 工具跨平台不一致** | 同一个 MCP server 在 CLI 可用、在 Desktop/TUI 不可用，导致工作流断裂。（#38945） |
| **Ollama 本地模型上下文窗口被低估** | 用户投资 131K 上下文 GGUF 模型，但 Ollama 默认只给 4K，长期任务频繁截断。（#43900） |
| **首次构建体验差** | `npm ci` 在干净 checkout 就失败，新人贡献者被立在门口。（#4421） |
| **Desktop 文件链接无用** | 远程 gateway 模式下 agent 放置的文件链接点击无反应，文件传输体验差。（#44523） |

### ✅ 满意 / 正面信号

- **多语言扩展热情高涨**：阿拉伯语（#44531）和 15 语言 i18n（#38846）均显示国际化社区自发贡献的势头。
- **Rust 化基础设施获得关注**：#44067 引入 Rust installer 获得社区正面期待，显示对性能和分发可靠性的追求。

---

## 8. 待处理积压 — 需维护者关注

以下 Issue/PR 长期未响应或解决，可能影响项目口碑和社区活跃度：

| # | 类型 | 创建日期 | 最后活动 | 天数 | 标签 | 建议 |
|---|---|---|---|---|---|---|
| **#38240** | Issue（degraded probes） | 2026-06-03 | 2026-06-11 | 9 天 | P3/tool/skills | Skills Hub 文档系统降级持续一周，影响 skills 发现性 |
| **#16525** | Issue（feature: model_switch tool） | 2026-04-27 | 2026-06-12 | **46 天** | P3/type/feature | 高讨论度但无官方回应，建议明确 roadmap 规划或标注 `help-wanted` |
| **#37812** | Issue（Desktop approval GUI） | 2026-06-03 | 2026-06-11 | 9 天 | P2/area/auth | 审批安全流核心体验 bug，建议优先排期 |
| **#25542** | Issue（MiniMax 中国区 OAuth） | — | — | 长期 | P3/provider | PR #36286 已开放 40+ 天，需 review |
| **#44032** | Issue（profile alias 大文件扫描） | 2026-06-11 | 2026-06-11 | 1 天 | P3/perf | 小 fix，新人友好，建议 tag `good first issue` |
| **#44121** | Issue（npm ci lock 不同步） | 2026-06-11 | 2026-06-11 | 1 天 | P2/dependencies | **新人贡献者阻断**，建议立即修复并更新 lock 文件 |

> **积压总结：** 待合并 PR 38 条、活跃 Issues 42 条，维护者审查压力不容忽视。建议近期优先处理 Desktop 审批流渲染（#37812）和 npm ci 构建阻断（#44121），同时为高讨论度 feature request #16525 提供里程碑回应，稳定社区预期。

---

**日报生成：OWL | 数据来源：NousResearch/hermes-agent | 生成时间：2026-06-12**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-11

---

## 1. 今日速览

PicoClaw 今日处于**高强度开发迭代期**。过去 24 小时内共处理 **32 个 PR**（19 个已合并/关闭，13 个待合并），**6 个 Issue 活动**（新开 3 个、关闭 3 个），并发布了 **nightly v0.2.9-nightly.20260611**。PR 活跃度远高于日常水位，表明多个功能分支和依赖升级正在集中合并窗口期推进。值得注意的是，待合并 PR 中有大量前端依赖升级（vite、shadcn、eslint、typescript-eslint），说明前端技术栈正在系统性同步。Bug 报告集中在 Windows 路径兼容性、子代理消息重复和视觉模型幻觉三个方向，均已有原创者跟进。

---

## 2. 版本发布

### Nightly: `v0.2.9-nightly.20260611.d955d5bb`
- **发布类型**：自动化 Nightly Build
- **基础版本**：基于 v0.2.9 主线，包含 main 分支最新提交
- **风险提示**：自动化构建，可能不稳定，建议谨慎使用
- **完整变更日志**：[v0.2.9 → main diff](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **说明**：正式版尚未发布，当前 nightly 通道主要面向早期测试者收集和验证今日合并的大量修复与功能变更。

---

## 3. 项目进展

今日合并/关闭了 19 个 PR，涵盖修复、功能增强和依赖升级三个维度：

### 🔒 安全与基础设施
| PR | 说明 |
|---|---|
| **[#3080 Issue](https://github.com/sipeed/picoclaw/issues/3080) 关闭** | `allowed_cidrs` 在同主机 loopback 代理场景下可被绕过的安全问题已确认并关闭 |

### 🐛 稳定性修复
| PR | 说明 |
|---|---|
| **[#2934](https://github.com/sipeed/picoclaw/pull/2934)** | 修复 WhatsApp 原生模式（whatsmeow）配置检测逻辑，允许 `use_native: true` 无 bridge_url 时正常启动 |
| **[#2947](https://github.com/sipeed/picoclaw/pull/2947)** | 修正 `claude-sonnet-4.6` 模型 ID 为合规的 `claude-sonnet-4-6`（连字符），消除 Anthropic API 404 错误 |
| **[#2955](https://github.com/sipeed/picoclaw/pull/2955)** | 增强 singleton PID 校验——验证 PID 对应进程确实是 picoclaw 而非被复用的无关进程（如 systemd-resolved） |
| **[#2956](https://github.com/sipeed/picoclaw/pull/2956)** | 修复 `security.yml` 合并时 channel `enabled: true` 状态被意外覆盖的问题 |
| **[#3060](https://github.com/sipeed/picoclaw/pull/3060)** | 错误包裹 `%v → %w` 修正 + `json.MarshalIndent` 错误处理，修复 `errors.Is`/`errors.As` 链路断裂 |
| **[#3067](https://github.com/sipeed/picoclaw/pull/3067)** | 新增 `DmScope` 字段到 `SessionConfig`，修复 UI 配置的"会话隔离范围"无法持久化的问题 |

### 🔗 MCP 协议
| PR | 说明 |
|---|---|
| **[#2696](https://github.com/sipeed/picoclaw/pull/2696)** | 通道可通过 `InboundContext.Raw` 中以 `mcp:` 为前缀的键向 MCP 服务器透传逐请求动态 HTTP 头 |

### 📦 依赖升级（7 个 dependabot PR）
- `aws-sdk-go-v2/config` 1.32.17 → 1.32.25
- `aws-sdk-go-v2` 1.41.11 → 1.42.0
- `golang.org/x/sync` 0.20.0 → 0.21.0
- `modelcontextprotocol/go-sdk` 1.5.0 → 1.6.1

### 📌 项目整体进度判断
- **v0.3.0 信号**：`Agent Collaboration Bus`（PR #2937）仍在开放中，这是下一代多智能体协作架构的核心模块，短期不会合并到稳定版
- **当前主线**：v0.2.9 的 nightly 通道正在消化一批中期积累的修复，正式版发布节奏可能在 1-2 周内

---

## 4. 社区热点

### 🔥 Issue #2472 — Windows 路径分隔符导致 list_dir 失效
- **链接**：[sipeed/picoclaw#2472](https://github.com/sipeed/picoclaw/issues/2472)
- **数据**：5 条评论（今日评论最多），👍1
- **分析**：这是持续近 2 个月的老 Bug。Windows 平台下 `list_dir` 工具将反斜杠 `\` 直接传入 Go 的 `os.Root`/`fs.FS`，而后者严格接受正斜杠 `/`。虽然 Issue 创建较早，但社区近期仍有活跃讨论，说明**Windows 用户群体在扩大**且此问题阻塞了核心文件操作功能。目前未见对应 Fix PR 公开，属于**待处理的阻塞性 Bug**。

### 🔥 Issue #3094 — spawn 子代理导致消息重复推送
- **链接**：[sipeed/picoclaw#3094](https://github.com/sipeed/picoclaw/issues/3094)
- **数据**：1 条评论，中文用户报告，涉及飞书/Telegram 通道
- **分析**：`ForUser` 字段被同时用于子代理结果直接推送和主代理汇总两个路径。这是一个**架构设计缺陷**，在子代理（subagent）功能日益常用的背景下，消息重复严重影响用户体验。中文用户积极参与报告，说明**中国市场是 PicoClaw 重要用户群**。

### 🔥 PR #2937 — Agent Collaboration Bus（头等公民特性）
- **链接**：[sipeed/picoclaw#2937](https://github.com/sipeed/picoclaw/pull/2937)
- **数据**：最大功能型 PR，包含每 Agent 邮箱、协作线程、隔离会话历史、结构化消息信封、权限感知投递
- **分析**：这是 PicoClaw 向**多智能体操作系统**演进的关键一步。与 Issue #3094 的消息重复问题直接相关——协作总线的实现将从根本上重构子代理通信机制。

### 🔥 Issue #3108 — 非视觉模型产生图像幻觉
- **链接**：[sipeed/picoclaw#3108](https://github.com/sipeed/picoclaw/issues/3108)
- **分析**：使用 `deepseek/deepseek-v4-flash`（纯文本模型）通过 OpenRouter 请求图像描述时，`load_image` 工具成功加载图像但模型输出与图像无关内容。这是**模型能力与路由匹配**问题，而非纯粹的代码 Bug。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 高 | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Windows `list_dir` 因路径分隔符崩溃 | ❌ 无 |
| 🔴 高 | [#3080](https://github.com/sipeed/picoclaw/issues/3080) | `allowed_cidrs` 可被 loopback 代理绕过 | ⚠️ Issue 关闭，但未确认修复 PR |
| 🟡 中 | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | spawn 子代理消息双重推送 | ❌ 无（长期方案在 #2937） |
| 🟡 中 | [#3108](https://github.com/sipeed/picoclaw/issues/3108) | 非视觉模型图像描述幻觉 | ❌ 无（需路由层能力检查） |
| 🟢 低 | [#2954](https://github.com/sipeed/picoclaw/issues/2954) | 不支持 32 位 Android | ✅ 已关闭（stale，低优先级） |
| 🟢 低 | [#2958](https://github.com/sipeed/picoclaw/issues/2958) | pico channel 连续请求 tool_calls 丢失 | ✅ 已关闭（PR #2957 修复） |

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 判断 |
|---|---|---|
| **多智能体协作** | PR #2937（Agent Collaboration Bus） | 🔵 高概率纳入 v0.3.0，代码量大，架构复杂，需要更多审查周期 |
| **MCP 协议增强** | PR #2696（动态 HTTP 头透传） | ✅ 已合并，v0.2.x 可用 |
| **前端现代化** | PR #3100-3105（vite/shadcn/eslint 升级） | 🔵 高概率近期合并，纯依赖升级，风险低 |
| **模型能力路由** | Issue #3108 | 🟡 中概率，需要在模型路由层增加 vision 能力检测，属于体验优化 |
| **Windows 兼容性** | Issue #2472 | 🟡 中概率，影响面明确但修复方案直接，可能以 hotfix 形式进入 v0.2.9 |

---

## 7. 用户反馈摘要

### 😤 痛点
- **Windows 用户被忽视**：Issue #2472 自 4 月创建至今未修复，Windows 平台文件操作完全不可用，社区讨论中可见用户自行尝试 patch 但无官方响应
- **子代理体验粗糙**：Issue #3094 用户描述"第一条消息几乎无排版，内容粗糙"，说明子代理输出缺乏统一的格式化管道
- **安全配置学习曲线陡峭**：`security.yml` 与 `config.json` 的合并行为不直观（PR #2956），用户不清楚为何添加凭证后 channel 被禁用

### 😊 满意
- **WhatsApp 原生模式**：PR #2934 修复后，用户无需 bridge_url 即可使用 whatsmeow 原生模式，降低了部署门槛
- **Anthropic 模型配置**：PR #2947 修正模型 ID 后，首次使用不再 404，开箱即用体验改善
- **依赖维护积极**：dependabot 持续跟进 Go 和前端生态升级，用户无需手动管理

### 🌍 使用场景
- 飞书/Telegram 通道 + 子代理（中国用户典型配置）
- OpenRouter 多模型路由（deepseek-v4-flash 等第三方模型）
- WhatsApp 原生模式（whatsmeow）
- Windows 桌面端部署

---

## 8. 待处理积压

| 项目 | 类型 | 创建/最后更新 | 状态 | 建议 |
|---|---|---|---|---|
| **[#2472](https://github.com/sipeed/picoclaw/issues/2472) Windows 路径分隔符** | Bug | 2026-04-10 / 2026-06-11 | 🔴 开放，2 个月未修复 | **高优先级**：影响 Windows 用户核心功能，建议分配 owner 或标记为 good first issue |
| **[#2937](https://github.com/sipeed/picoclaw/pull/2937) Agent Collaboration Bus** | Feature PR | 2026-05-24 / 2026-06-11 | 🟡 开放，3 周 | 需要架构审查，建议安排专门 review session |
| **[#3048](https://github.com/sipeed/picoclaw/pull/3048) mcp add 参数解析** | Fix PR | 2026-06-07 / 2026-06-11 | 🟡 开放 | 修复 root-level persistent flag 泄漏到子命令解析器，逻辑清晰，建议尽快 review |
| **[#3094](https://github.com/sipeed/picoclaw/issues/3094) 子代理消息重复** | Bug | 2026-06-10 / 2026-06-11 | 🔴 开放，1 天 | 短期 workaround + 长期依赖 #2937 |
| **[#3108](https://github.com/sipeed/picoclaw/issues/3108) 图像幻觉** | Bug | 2026-06-11 / 2026-06-11 | 🔴 开放，当天 | 需要确认是路由层问题还是 prompt 工程问题 |

---

> **日报生成时间**：2026-06-12 | **数据来源**：GitHub API | **分析引擎**：OWL

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-12

---

## 1. 今日速览

NanoClaw 今日活跃度**极高**：过去 24 小时内共 18 条 PR 更新（9 条已合并、9 条待合并），3 条 Issue 更新（2 新开、1 关闭），单日合并贡献主要集中在 security fix 补齐和基础设施健壮性改善方面，提交者 `gavrielc` 集中合并了 8 条 PR。社区呈现典型的**高贡献—高频修复**模式：Signal、Telegram、隔离锁定、CLI 等多模块同时暴露边界 Bug，但绝大部分已有配套 Fix PR，项目整体稳定性呈**修复中上升**态势，未发布新版本（发版节奏可能在收尾这批批量修复后才会释放）。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 9 条 PR 覆盖了从安全加固到核心数据路径的多个层面，以下是关键进展：

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 1 | [#2738](https://github.com/nanocoai/nanoclaw/pull/2738) | 🔧 Fix | **修复 `writeOutboundDirect` 以只读模式打开 outbound.db** —— 这是 Issue #2495 的根因修复，此前 command-gate 拒绝响应全部被静默丢弃，现在已可正常投递 |
| 2 | [#2736](https://github.com/nanocoai/nanoclaw/pull/2736) | 🔧 Fix | **host-sweep 对刚唤醒但持有陈旧 processing claims 的容器增加宽限期**，避免活容器被误判为僵尸后强制回收 |
| 3 | [#2735](https://github.com/nanocoai/nanoclaw/pull/2735) | 🔧 Fix | **chat-sdk-bridge 在已解决的审批卡片上记录实际操作者身份**，审批审计链完整度提升 |
| 4 | [#2733](https://github.com/nanocoai/nanoclaw/pull/2733) | ✨ Feature | **原生 channel-instance 维度** —— 多 bot 底层基础能力（multi-bot substrate）落地，为同一频道下运行多个独立 bot 实例铺路 |
| 5 | [#2741](https://github.com/nanocoai/nanoclaw/pull/2741) | 🔧 Fix | **setup 流程自动将 handoff 上下文提交为 Claude 的首条提示**，解决交互式引导中途转交 Claude 后无任何动作的问题 |
| 6 | [#2740](https://github.com/nanocoai/nanoclaw/pull/2740) | ✨ Feature | **per-group idle timeout** —— 每个 messaging group 的生存期隔离退出，会话生命周期管理更精细 |
| 7 | [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) | 🔧 Fix | **host + agent-runner 多重安全加固**（容器绑定挂载路径校验、并发上限熔断、docker kill 兜底）—— 见 Bug 与稳定性节 |
| 8 | [#2734](https://github.com/nanocoai/nanoclaw/pull/2734) | ✨ Feature | `getDeliveryAction` 只读侧 action registry 接口新增 |
| 9 | [#2737](https://github.com/nanocoai/nanoclaw/pull/2737) | ✨ Feature | approval-resolved callback 注册机制 —— 各模块可监听审批结果，解耦扩展 |

**项目整体向前推进显著**：核心数据投递路径 Bug（outbound DB 只读）完成闭环、容器生存期从全局统一管理进入 per-group 粒度、multi-bot 架构迈出第一步、容器健壮性经健康审计后系统修复。

---

## 4. 社区热点

### Issue #1356 — Agent Memory System Redesign
- **链接**: https://github.com/nanocoai/nanoclaw/issues/1356
- **状态**: 🟡 OPEN | 👍 6 | 💬 2
- **作者**: Ordinath（创建于 3 月，活跃至 6 月）
- **分析**: 这是社区中**长期关注的核心架构议题**。当前方案以 `MEMORY.md` + 卫星 Markdown 文件实现，在 ~54 文件 / 83 KB 的规模下勉强可用，但扩展性问题已有明确瓶颈。Issue 追踪了调研过程并提出 redesign 方案。👍 数在同类架构设计讨论中最高，反映出社区对记忆系统重大升级的**普遍期待与维护者尚未排期**之间的张力。其长时间未合并进入正式路线图，可能是领域复杂度所致。

### Issue #2731 — Egress Lockdown Hijacks host.docker.internal
- **链接**: https://github.com/nanocoai/nanoclaw/issues/2731
- **状态**: 🔴 OPEN | 👍 0 | 💬 0
- **作者**: sturdy4days（今日新建）
- **分析**: 新隔离策略（egress-lockdown）启用后，OneCLI 网关容器接入自建网络导致 `host.docker.internal` 解析被劫持，内部网络上所有 host-local 服务（ollama 端点、代理等）全部不可达。这是**安全性与可用性之间的典型冲突**，且对环境配置敏感，Docker Desktop 与 Linux 原生环境下表现可能不同。尚无 PR。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 — 数据静默丢失

**Bug: `writeOutboundDirect` 以只读方式打开 outbound.db，command-gate 拒绝响应全部丢失**
- Issue: [#2495](https://github.com/nanocoai/nanoclaw/issues/2495)（已关闭）
- Fix PR: [#2738](https://github.com/nanocoai/nanoclaw/pull/2738) **✅ 已合并**
- 影响范围：所有经 command-gate 拒绝的出站消息被静默 drop，无任何错误提示。

### 🔴 严重 — 隔离策略阻断合法流量

**Bug: Egress lockdown 劫持 host.docker.internal，内部网络 agent 失去所有 host-local 服务**
- Issue: [#2731](https://github.com/nanocoai/nanoclaw/issues/2731)
- Fix PR: **尚无**
- 影响范围：启用 `NANOCLAW_EGRESS_LOCKDOWN=true` 后，依赖 `host.docker.internal` 的 ollama、本地代理等服务全部不可达。

### 🟠 高 — 容器生命周期误判

**Bug: host-sweep 对刚唤醒但持有陈旧 processing claims 的容器误判为僵尸**
- Fix PR: [#2736](https://github.com/nanocoai/nanoclaw/pull/2736) **✅ 已合并**

### 🟠 高 — 容器绑定挂载路径问题导致崩溃循环

**Bug: Docker Desktop drvfs 环境下容器因 bind-mount 源路径未 realpath 化而 crash-loop / exit 127**
- Fix PR: [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) **🟡 待合并**

### 🟡 中 — CLI 创建 wiring 后消息投递静默失败

**Bug: `ncl wirings create` 跳过 `agent_destinations` 副作用，agent 向新 chat 发送的消息被丢弃**
- Fix PR: [#2743](https://github.com/nanocoai/nanoclaw/pull/2743) **🟡 待合并**

### 🟡 中 — Telegram pairing 未创建 wiring 行

**Bug: Telegram `--intent wire-to:<folder>` 配对成功但未创建 `messaging_group_agents` 行**
- Fix PR: [#2728](https://github.com/nanocoai/nanoclaw/pull/2728) **🟡 待合并**

### 🟡 中 — .env 中 NANOCLAW_* 标志在 launchd/systemd 下不生效

**Bug: 多个模块直接从 `process.env` 读取标志，但 .env 文件未被加载**
- Fix PR: [#2730](https://github.com/nanocoai/nanoclaw/pull/2730) **🟡 待合并**

### 🟢 低 — Signal 适配器静默丢弃 agent 反应

**Bug: Signal adapter 的 `deliver()` 无 `operation: 'reaction'` 处理，agent 的 `add_reaction` 工具输出被静默丢弃**
- Fix PR: [#2744](https://github.com/nanocoai/nanoclaw/pull/2744) **🟡 待合并**

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 状态 | 判断 |
|------|----------|------|------|
| **Agent Memory 系统重构** | Issue [#1356](https://github.com/nanocoai/nanoclaw/issues/1356) | 调研阶段，无 PR | 高优先级架构议题，但短期内不会进入发版；可能以 RFC 形式推进 |
| **Multi-bot 架构** | PR [#2733](https://github.com/nanocoai/nanoclaw/pull/2733) | ✅ 已合并 | 底层能力已落地，上层配置/管理界面可能随后续 PR 补齐 |
| **Per-group 会话生命周期** | PR [#2740](https://github.com/nanocoai/nanoclaw/pull/2740) | ✅ 已合并 | 功能已就绪，文档和默认值调优可能跟进 |
| **PR 自动化审查工厂** | PR [#2742](https://github.com/nanocoai/nanoclaw/pull/2742) | 🟡 待合并 | 社区贡献的 recipe/skill，属于生态扩展，合并门槛较低 |
| **审批结果可观测性** | PR [#2737](https://github.com/nanocoai/nanoclaw/pull/2737) | ✅ 已合并 | 回调注册机制已就位，后续模块可逐步接入 |
| **Egress lockdown 与 host 服务共存** | Issue [#2731](https://github.com/nanocoai/nanoclaw/issues/2731) | 🔴 无 PR | 需架构决策：是修复网络路由还是提供白名单机制 |

---

## 7. 用户反馈摘要

- **静默失败是最大痛点**：多个 Issue（#2495、#2744、#2743、#2728）的共同主题是**操作表面成功但实际未执行**，用户无法区分"已排队"和"已丢失"。社区对可观测性和错误反馈的诉求强烈。
- **环境差异导致部署困难**：drvfs 路径问题（#2732）、launchd/systemd 下 .env 不加载（#2730）、Docker Desktop 与 Linux 网络行为差异（#2731）—— 用户在 macOS/Windows 生产部署中踩坑频率高，文档和自动化检测需加强。
- **交互式 setup 体验待提升**：PR #2741 修复了 handoff 后 Claude 无动作的问题，说明当前引导流程在"人机交接"边界仍有断裂。
- **Signal 渠道功能完整度受关注**：反应（reaction）支持、群组打字指示器、引用回复等功能的文档和实现同步在推进（PR #2685、#2744），说明 Signal 是活跃用户的主要渠道之一。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于关键阻塞状态，建议维护者优先关注：

| # | 项目 | 类型 | 等待时间 | 说明 |
|---|------|------|----------|------|
| [#1356](https://github.com/nanocoai/nanoclaw/issues/1356) | Agent Memory Redesign | Issue | ~3 个月 | 架构级 redesign，👍6，社区期待高但无排期信号 |
| [#2611](https://github.com/nanocoai/nanoclaw/pull/2611) | Preserve caller context after approval | PR | ~18 天 | 安全相关，审批后命令重放时上下文丢失，影响审计链 |
| [#2731](https://github.com/nanocoai/nanoclaw/issues/2731) | Egress lockdown hijacks host.docker.internal | Issue | 1 天（新建） | 安全策略与可用性冲突，影响所有启用隔离的用户 |
| [#2730](https://github.com/nanocoai/nanoclaw/pull/2730) | .env flags not loaded under launchd/systemd | PR | 1 天 | 影响所有使用服务管理器部署的用户，配置静默失效 |
| [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) | Host + agent-runner hardening | PR | 1 天 | 来自对抗性验证的健康审计，修复面广，建议优先审查合并 |

---

> **项目健康度评估**：🟡 **良好，修复中上升**。今日合并密度高、Bug 修复覆盖核心路径，但积压的架构议题（memory redesign）和环境适配问题（Docker Desktop、launchd）需持续关注。建议下一版本聚焦"稳定性 + 可观测性"主题，将已合并的批量修复打包发布。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期：2026-06-12**

---

## 1. 今日速览

过去24小时，NullClaw 项目整体活跃度较低。共收到 **1 条新 Issue**，无 PR 提交，无新版本发布。唯一的活动来自用户 `bloodgroup-cplusplus` 提交的 Bug 报告，涉及 Ollama 本地模型回答不完整的问题。项目当前处于相对平静期，社区贡献和代码合并节奏放缓，建议维护者关注积压 Issue 的响应速度，避免社区参与度进一步下降。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

过去24小时无 PR 合并或关闭，项目代码库无实质性推进。

---

## 4. 社区热点

| 项目 | 链接 |
|------|------|
| **[#952] [bug] Local model using ollama returns incomplete answers** | [nullclaw/nullclaw#952](https://github.com/nullclaw/nullclaw/issues/952) |

**分析：** 这是今日唯一的社区动态。用户报告在使用 Ollama 拉取 Gemma 模型启动 Agent 后，模型无法返回完整句子。该问题反映了两个潜在诉求：一是对 Ollama 作为本地模型后端的兼容性支持尚不完善；二是 Agent 输出截断或流式响应处理可能存在底层逻辑缺陷。目前该 Issue 尚未收到任何评论或维护者响应，需尽快跟进。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | Issue 链接 | 状态 | Fix PR |
|----------|------|-----------|------|--------|
| ⚠️ 中 | Ollama 本地模型（Gemma）返回回答不完整，Agent 输出句子被截断 | [#952](https://github.com/nullclaw/nullclaw/issues/952) | OPEN，0 评论 | 暂无 |

**说明：** 该 Bug 影响本地模型用户的核心使用体验（Agent 无法正常输出完整回答），属于功能性缺陷。虽未导致崩溃或数据丢失，但会直接影响用户对产品可靠性的信任。目前无关联 Fix PR，建议优先排查流式响应（streaming）拼接逻辑或 Ollama API 调用参数配置。

---

## 6. 功能请求与路线图信号

过去24小时无新功能请求（Feature Request）提交，也无活跃 PR 暗示即将落地的功能方向。

**趋势判断：** 结合当前唯一的 Issue（#952）聚焦于 Ollama 本地模型兼容性，可推测社区对**本地模型支持完善度**有较高期待。若后续类似 Issue 增多，建议将「提升 Ollama 及其他本地模型后端的稳定性与兼容性」纳入近期路线图优先级。

---

## 7. 用户反馈摘要

- **痛点：** 用户尝试使用 Ollama 作为本地模型后端运行 Agent，但模型输出不完整，无法获得可用的对话体验。
- **使用场景：** 用户在本地环境通过 Ollama 拉取开源模型（如 Gemma）接入 NullClaw Agent，属于典型的本地部署 + 开源模型组合场景。
- **满意度信号：** 该 Issue 尚无评论和互动，无法判断更广泛的用户情绪，但核心功能（Agent 回答）的失效属于高优先级负面反馈。

---

## 8. 待处理积压

| 项目 | 链接 | 状态 | 备注 |
|------|------|------|------|
| [#952] Ollama 本地模型回答不完整 | [nullclaw/nullclaw#952](https://github.com/nullclaw/nullclaw/issues/952) | OPEN，已开放 0 天，0 评论 | 虽为新 Issue，但涉及核心功能失效，建议 48 小时内响应 |

**提醒：** 当前积压量较小，但鉴于项目今日整体活跃度偏低，建议维护者主动在 Issue 中回复确认问题、请求复现步骤或环境信息，以维持社区信任并推动问题解决。

---

*数据来源：[NullClaw GitHub](https://github.com/nullclaw/nullclaw) | 生成时间：2026-06-12*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**📅 2026-06-12 ｜ 数据来源：nearai/ironclaw GitHub**

---

## 1. 今日速览

IronClaw 过去 24 小时活跃度极高：**31 条 Issues 更新 + 49 条 PR 更新**，合计 80 条活动记录，涉及至少 15 位贡献者。项目重心集中在 **Reborn 子系统的生产化推进**（PostgreSQL 存储、生产切换门控、自动化 QA）和 **WebUI v2 体验修复**（工具审批、日志页面、模型选择器、Slack 交付）。今日无新版本发布，但多条大型 PR 已合并，标志着 Reborn 从"可本地运行"向"可生产部署"阶段迈进。

---

## 2. 版本发布

**无新版本发布。**

> 注：PR [#3708](https://github.com/nearai/ironclaw/pull/3708) 是一个自动化 release chore PR（`ironclaw` crate 从 0.24.0 → 0.29.1，含 `ironclaw_common` 和 `ironclaw_skills` 的 API breaking changes），目前仍处于 **OPEN** 状态，尚未完成发布流程。

---

## 3. 项目进展

### 🔧 生产化 & 基础设施（Reborn 核心）

| PR | 状态 | 要点 |
|---|---|---|
| [#4551](https://github.com/nearai/ironclaw/issues/4551) → 关联 PR [#4615](https://github.com/nearai/ironclaw/pull/4615) | ✅ 已合并 | `ironclaw-reborn run` 现在可在 `profile=production` 下针对 PostgreSQL 存储启动，打通了生产存储 substrate 的运行时路径 |
| [#4619](https://github.com/nearai/ironclaw/pull/4619) | ✅ 已合并 | 新增 **production cutover gate**：在配置的生产图完整之前，Reborn 拒绝服务生产流量（fail-closed 安全策略） |
| [#4620](https://github.com/nearai/ironclaw/pull/4620) | ✅ 已合并 | PostgreSQL/libSQL 生产就绪性的 **后端对等覆盖**，为 #3026 提供生产图各节点的 readiness 证据 |
| [#4775](https://github.com/nearai/ironclaw/pull/4775) | 🟡 待合并 | Epic：Reborn 二进制自动化 QA（hermetic + fixture + e2e + live），目标让所有手动 QA 用例在 CI 中零人工验证 |
| [#4769](https://github.com/nearai/ironclaw/pull/4769) | 🟡 待合并 | 将手动 QA 工作流移植到 `RebornBinaryE2EHarness`，新增 **22 个确定性测试**，无需外部服务/API 密钥/Docker |

### 🌐 WebUI v2 体验修复

| PR | 状态 | 要点 |
|---|---|---|
| [#4772](https://github.com/nearai/ironclaw/pull/4772) | 🟡 待合并 | 批量修复 WebChat v2 UI bug + NEAR AI 模型选择器 provider bug + 自动滚动 |
| [#4758](https://github.com/nearai/ironclaw/pull/4758) | 🟡 待合并 | WebUI v2 Logs 页面接入真实 operator log 源（当前为空壳） |
| [#4771](https://github.com/nearai/ironclaw/pull/4771) | 🟡 待合并 | 跟进：run/thread 粒度的 operator 日志过滤 |
| [#4757](https://github.com/nearai/ironclaw/pull/4757) | ✅ 已合并 | 修复 Automations 页面触发运行的导航/404 问题 |

### 🔌 扩展 & 集成

| PR | 状态 | 要点 |
|---|---|---|
| [#4744](https://github.com/nearai/ironclaw/pull/4744) | ✅ 已合并 | 整合扩展激活/认证门控 + GSuite OAuth 复用，修复 GitHub/Gmail/Google Drive 等扩展的端到端安装流程 |
| [#4782](https://github.com/nearai/ironclaw/pull/4782) | ✅ 已合并 | 统一 outbound state store，修复 WebUI 设置的 Slack DM 默认交付不生效的问题 |
| [#4753](https://github.com/nearai/ironclaw/pull/4753) | ✅ 已合并 | Slack gate routing Phase B：conversation-keyed delivered-gate routes，修复裸 "approve" 回复在 Slack 线程中解析失败的问题 |
| [#4778](https://github.com/nearai/ironclaw/pull/4778) | 🟡 待合并 | 将 Slack 重构为 product-adapter 扩展（从硬编码内置通道列表中移除） |
| [#4779](https://github.com/nearai/ironclaw/pull/4779) | 🟡 待合并 | 向 Reborn 模型暴露 outbound delivery targets，支持模型主动选择交付通道 |

### 📎 附件 & 文档处理

| PR | 状态 | 要点 |
|---|---|---|
| [#4676](https://github.com/nearai/ironclaw/pull/4676) | 🟡 待合并 | 入站附件经过 `ironclaw_extractors` 提取文档文本，持久化到 transcript |
| [#4672](https://github.com/nearai/ironclaw/pull/4672) | 🟡 待合并 | WebChat v2 发送路径支持内联附件上传（#4644 的端到端入口接线） |

### 🤖 AI Review 试验

| PR | 状态 | 要点 |
|---|---|---|
| [#4774](https://github.com/nearai/ironclaw/pull/4774) | 🟡 待合并 | 新增 `.coderabbit.yaml` 配置，试验 CodeRabbit 作为主要 AI reviewer，与 Copilot/Gemini Code Assist/Codex 对比评估 |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

| Issue | 评论 | 👍 | 分析 |
|---|---|---|---|
| **[#3036](https://github.com/nearai/ironclaw/issues/3036)** Configuration-as-Code for IronClaw Reborn: tenant blueprints and use-case harnesses | 7 | 1 | **EPIC 级增强请求**。用户 ilblackdragon 提出：当前配置 IronClaw 需要手工编辑 `.env`、`.system/` 下的 workspace 文档、settings JSON、扩展安装和运行时参数，缺乏 schema、diff、审计追踪。诉求是声明式的 Configuration-as-Code。这是对 Reborn 架构层面的长期愿景，与当前生产化工作（#4551、#4619 等）形成呼应——先让系统能跑，再让配置可管理。 |
| **[#4766](https://github.com/nearai/ironclaw/issues/4766)** Chat runtime does not use UI-saved NEAR AI credentials after restart | 2 | 0 | 本地 Reborn WebUI v2 中，通过 UI 设置的 NEAR AI 凭证在重启后不被 chat runtime 使用。**已关闭**，说明已有修复。 |
| **[#4703](https://github.com/nearai/ironclaw/issues/4703)** NEAR AI model picker saves display name instead of model ID | 2 | 0 | 模型选择器保存了显示名而非模型 ID，导致后续调用失败。**仍 OPEN**，PR [#4772](https://github.com/nearai/ironclaw/pull/4772) 中包含后端修复。 |

### 📌 值得关注的活跃 Issue

| Issue | 要点 |
|---|---|
| **[#4783](https://github.com/nearai/ironclaw/issues/4783)** | 无凭证 WASM 扩展能力在 local-dev 中调度失败（误报 network obligation 错误）。影响纯计算型第三方扩展的可用性。 |
| **[#4761](https://github.com/nearai/ironclaw/issues/4761)** | Agent 在连续工具失败后停止而非恢复，影响长流程任务的鲁棒性。 |
| **[#4776](https://github.com/nearai/ironclaw/issues/4776)** | 请求全局 "Always Allow" 工具设置，减少频繁审批的打断感。 |
| **[#4751](https://github.com/nearai/ironclaw/issues/4751)** | 大响应请求因 provider tool arguments 超过 16384 字节限制而失败。 |
| **[#4750](https://github.com/nearai/ironclaw/issues/4750)** | WebUI 中无法浏览 workspace 文件，用户看不到 agent 创建的文件。 |

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | **[#4783](https://github.com/nearai/ironclaw/issues/4783)** | 无凭证 WASM 扩展能力在调度阶段被错误拒绝（network obligation 误报），导致纯计算扩展完全不可用 | ❌ 暂无 |
| 🔴 高 | **[#4761](https://github.com/nearai/ironclaw/issues/4761)** | Agent 连续工具失败后停止运行，不尝试恢复或重试 | ❌ 暂无 |
| 🟡 中 | **[#4751](https://github.com/nearai/ironclaw/issues/4751)** | 大响应请求因 tool arguments 超 16384 字节限制失败 | ❌ 暂无 |
| 🟡 中 | **[#4762](https://github.com/nearai/ironclaw/issues/4762)** | 工具工作流失败后，后续消息和活动排序不一致 | ❌ 暂无 |
| 🟡 中 | **[#4770](https://github.com/nearai/ironclaw/issues/4770)** | 刷新后工具活动停止更新（疑似 SSE 重连问题） | ❌ 暂无 |
| 🟡 中 | **[#4759](https://github.com/nearai/ironclaw/issues/4759)** | 使用 workspace-relative 路径时路径被重复拼接 | ❌ 暂无 |
| 🟢 低 | **[#4748](https://github.com/nearai/ironclaw/issues/4748)** | 代码块 Wrap/No Wrap 切换无效果 | ❌ 暂无 |
| 🟢 低 | **[#4764](https://github.com/nearai/ironclaw/issues/4764)** | 拒绝 shell 审批后工具调用挂起且无用户反馈 | ❌ 暂无 |
| ✅ 已修复 | [#4766](https://github.com/nearai/ironclaw/issues/4766) | UI 保存的凭证重启后不生效 | 已关闭 |
| ✅ 已修复 | [#4705](https://github.com/nearai/ironclaw/issues/4705) | 本地环境 NEAR AI SSO 设置失败 | 已关闭 |
| ✅ 已修复 | [#4683](https://github.com/nearai/ironclaw/issues/4683) | 无效模型配置时显示无意义的通用错误 | 已关闭 |
| ✅ 已修复 | [#4699](https://github.com/nearai/ironclaw/issues/4699) | NEAR AI MCP fallback web search tool name 错误 | 已关闭 |
| ✅ 已修复 | [#4714](https://github.com/nearai/ironclaw/issues/4714) | OpenAI Responses retrieve 未返回 failed/cancelled 状态 | 已关闭 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 纳入可能性 |
|---|---|---|---|
| **Configuration-as-Code**（声明式配置、schema、审计） | [#3036](https://github.com/nearai/ironclaw/issues/3036) | 无直接 PR，但与 #3026 生产化 EPIC 关联 | 🟡 中期（EPIC 级，需架构设计） |
| **全局 Always Allow 工具设置** | [#4776](https://github.com/nearai/ironclaw/issues/4776) | 无 | 🟢 高（UX 改善，实现简单） |
| **Workspace 文件浏览器** | [#4750](https://github.com/nearai/ironclaw/issues/4750) | 无 | 🟢 高（用户刚需，WebUI 层面可独立实现） |
| **Reborn 自动化 QA 全量覆盖** | [#4775](https://github.com/nearai/ironclaw/issues/4775) | [#4769](https://github.com/nearai/ironclaw/pull/4769)（22 个测试） | 🟢 高（PR 已就绪） |
| **Reborn 可观测性**（trajectory observer + LLM provider injection） | 无直接 Issue | [#4588](https://github.com/nearai/ironclaw/pull/4588) | 🟢 高（PR 已就绪，面向 benchmark 集成） |
| **Reborn 持久化租户沙箱 & agent-built 扩展** | 无直接 Issue | [#4785](https://github.com/nearai/ironclaw/pull/4785)（设计文档） | 🟡 中期（设计阶段） |
| **CodeRabbit AI Review 试验** | 无直接 Issue | [#4774](https://github.com/nearai/ironclaw/pull/4774) | 🟢 高（PR 已就绪） |
| **Slack 作为 product-adapter 扩展** | 无直接 Issue | [#4778](https://github.com/nearai/ironclaw/pull/4778) | 🟢 高（PR 已就绪，架构清理） |

---

## 7. 用户反馈摘要

### 😤 痛点

1. **凭证管理割裂**：用户通过 UI 配置 NEAR AI 凭证后，重启即丢失（[#4766](https://github.com/nearai/ironclaw/issues/4766)），且 SSO 设置在本地环境直接报错（[#4705](https://github.com/nearai/ironclaw/issues/4705)）。这严重阻碍了本地开发体验。
2. **工具审批体验差**：审批弹窗缺乏上下文（[#4701](https://github.com/nearai/ironclaw/issues/4701)，已修复）、拒绝后无反馈（[#4764](https://github.com/nearai/ironclaw/issues/4764)）、缺少全局"始终允许"选项（[#4776](https://github.com/nearai/ironclaw/issues/4776)）。用户感到审批流程既频繁又无信息量。
3. **Agent 鲁棒性不足**：连续工具失败后直接停止（[#4761](https://github.com/nearai/ironclaw/issues/4761)），大请求因参数大小限制失败（[#4751](https://github.com/nearai/ironclaw/issues/4751)），失败后的消息排序混乱（[#4762](https://github.com/nearai/ironclaw/issues/4762)）。
4. **WebUI 功能缺失**：无法浏览 workspace 文件（[#4750](https://github.com/nearai/ironclaw/issues/4750)）、Logs 页面为空壳（[#4758](https://github.com/nearai/ironclaw/issues/4758)）、代码块换行切换无效（[#4748](https://github.com/nearai/ironclaw/issues/4748)）。

### 😃 满意 / 正面信号

- 多位社区成员（sunglow666、think-in-universe）在本地测试中主动发现并报告了大量细节问题，说明 **Reborn 本地开发体验已足够可用**，吸引了积极的测试参与。
- 核心团队响应迅速：sunglow666 报告的多个问题（#4766、#4705、#4683、#4699、#4714）均在同日或次日关闭，展现了高效的 bug 修复节奏。
- 社区贡献者 BenKurrek 主动提交 CodeRabbit AI Review 配置（[#4774](https://github.com/nearai/ironclaw/pull/4774)），体现了外部贡献者对项目基础设施的关注。

---

## 8. 待处理积压

以下 Issue/PR 已存在较长时间或影响面较大，建议维护者优先关注：

| 项目 | 创建日期 | 说明 | 建议 |
|---|---|---|---|
| **[#3036](https://github.com/nearai/ironclaw/issues/3036)** Configuration-as-Code EPIC | 2026-04-28 | 已 45 天，7 条评论，EPIC 级架构请求 | 需要拆分子任务或给出路线图回应 |
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** Nightly E2E 失败 | 2026-05-27 | 已 16 天，Nightly E2E 持续失败 | 需排查 CI 稳定性，避免掩盖真实回归 |
| **[#3708](https://github.com/nearai/ironclaw/pull/3708)** Release chore（breaking changes） | 2026-05-16 | 已 27 天，含 `ironclaw_common` 和 `ironclaw_skills` 的 API breaking changes | 需尽快完成发布或回退 breaking changes |
| **[#4783](https://github.com/nearai/ironclaw/issues/4783)** WASM 扩展调度误报 | 2026-06-11 | 影响所有无凭证第三方扩展 | 应优先修复，影响生态系统扩展可用性 |
| **[#4761](https://github.com/nearai/ironclaw/issues/4761)** Agent 连续失败后停止 | 2026-06-11 | 影响长流程任务可靠性 | 需明确恢复策略（重试/跳过/报告） |
| **[#4751](https://github.com/nearai/ironclaw/issues/4751)** 大请求参数超限 | 2026-06-11 | 影响所有需要大上下文的请求 | 需评估是否需要参数压缩或限制调整 |

---

**📊 项目健康度评估：🟡 良好（活跃但需关注积压）**

- **活跃度**：🟢 极高（80 条活动/天，多贡献者并行）
- **响应速度**：🟢 核心团队对 bug 响应迅速（同日关闭率高）
- **代码质量**：🟡 需关注（Nightly E2E 失败、多个高严重度 Bug 未修复）
- **发布节奏**：🟡 需关注（Release PR 积压 27 天，breaking changes 未发布）
- **社区参与**：🟢 良好（外部贡献者主动参与 AI Review 试验、多用户参与本地测试）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-06-12**

---

## 今日速览

LobsterAI 今日处于**高强度开发期**，但呈现"一边极速推进、一边历史欠账集中清理"的典型特征。

- **Issue 端**：过去 24 小时新开/活跃 Issue **仅 2 条**，数量极低，说明社区当前没有大规模新问题涌入，但也可能意味着 Issue 响应节奏偏慢（两条中最老的一条开放已超 2 个月）。
- **PR 端**：过去 24 小时共处理 **19 条 PR**，其中 **18 条已合并/关闭**，仅有 1 条仍处于开启状态。合并密度极高——经核验，其中 **13 条为 2026-04-03 至 2026-04-05 期间积压的历史 PR**（均已标记 `stale`），被集中在今日批量关闭处理；真正当日新建即合并的活跃 PR 为 **6 条**，仍属高活跃水平。
- **版本端**：无新版本发布。当前高频合入的代码预计沉淀至下一正式版本。

> **健康度评估**：活跃开发中 • 历史积压清理加速 • 版本发布时间窗值得关注

---

## 版本发布

无新版本发布。

---

## 项目进展

### 🆕 今日新建并合并的核心 PR（6 条）

| # | 标题 | 领域 | 摘要 |
|---|------|------|------|
| [#2143](https://github.com/netease-youdao/LobsterAI/pull/2143) | feat: add computer use MVP | renderer / main / skills | 新增 Windows x64 内置 Computer Use 技能包，含应用/窗口枚举、截屏、启动应用等能力，通过桥接 MCP Server 实现，标志着 LobsterAI 开始支持 Agent 自主操控桌面环境 |
| [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148) | feat(cowork): add realtime ASR voice input | renderer / main / cowork | 为 Cowork 增加实时 ASR 语音输入模式，支持流式 PCM 音频通过 WebSocket 发送至主进程识别，设置页新增语音模式切换选项，补全中英文 i18n |
| [#2146](https://github.com/netease-youdao/LobsterAI/pull/2146) | feat(html-share): 支持分享访问方式选择与切换 | renderer / main / artifacts | HTML 分享创建时支持选择"分享码"或"公开访问"两种模式，已有分享可更新访问方式，补全主进程/preload/类型声明全链路 |
| [#2145](https://github.com/netease-youdao/LobsterAI/pull/2145) | feat(cowork): improve post-compaction context continuity | docs / main | 在 OpenClaw 压缩历史上下文后，新增 LobsterAI 自有连续性层，维护会话级任务状态和工作区快照，提升 Agent 在长对话压缩后继续执行任务的可靠性 |
| [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) | fix(openclaw): raise gateway heap limit | main / openclaw | 为 OpenClaw Gateway 进程显式设置 V8 老年代堆内存上限，减少长时间多通道高负载场景下的 OOM 崩溃 |
| [#2152](https://github.com/netease-youdao/LobsterAI/pull/2152) | fix(cowork): extend pre-send model sync timeout on slow gateways | renderer / main / cowork | 将 pre-send 模型同步超时从 30s 提升至 90s，解决冷启动或进程卡顿（实测 35–107s）场景下消息被静默丢弃的问题 |

### 🧹 历史积压 PR 集中清理（13 条，均为 2026-04 创建）

| # | 标题 | 类型 |
|---|------|------|
| [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) | feat(skills): 技能 hover 时展示完整描述 Tooltip | 功能（仍 OPEN） |
| [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) | fix(cowork): CopyButton 组件卸载后定时器未清理导致内存泄漏 | 修复 |
| [#1479](https://github.com/netease-youdao/LobsterAI/pull/1479) | fix(skills): reject duplicate skill folder on install | 修复 |
| [#1480](https://github.com/netease-youdao/LobsterAI/pull/1480) | fix(skills): toast and refresh after adding skill | 修复 |
| [#1481](https://github.com/netease-youdao/LobsterAI/pull/1481) | fix(cowork): scroll-friendly active skill chips in prompt bar | 修复 |
| [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482) | fix(scheduled-tasks): 编辑定时任务后描述信息被清空、启用状态被强制覆盖 | 修复 |
| [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) | feat(models): add automatic model failover when primary model fails | 功能 |
| [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) | feat(automation): add Gmail email trigger for automatic agent activation | 功能 |
| 其余 5 条 | 各类 renderer / main 修复 | 修复 |

### 📌 项目整体推进评估

今日合入内容覆盖了 **4 个关键方向**：

1. **Computer Use MVP**（#2143）—— 这是里程碑式功能，标志着 LobsterAI 从纯对话 Agent 向桌面自主操作 Agent 演进。
2. **语音交互升级**（#2148）—— 实时 ASR 补全了语音输入的最后一块拼图。
3. **稳定性加固**（#2149、#2152、#2145）—— Gateway 堆内存、超时策略、上下文连续性三重保障。
4. **分享与协作**（#2146）—— HTML 分享访问控制更灵活。

加上历史积压的 13 条 PR 清理（含模型自动 failover、Gmail 邮件触发等），**项目整体向前推进了一个明显的台阶**，下一版本的功能丰富度将显著提升。

---

## 社区热点

### Issue #1462 — 许愿：期望每个 agent 能够单独绑定模型、期望有正式的多 agent 协作能力
- **链接**：[netease-youdao/LobsterAI#1462](https://github.com/netease-youdao/LobsterAI/issues/1462)
- **状态**：OPEN（已开放 69 天，标记 stale）
- **评论**：2 条
- **核心诉求**：
  1. **单 Agent 绑定模型**：每个 Agent 可独立配置使用的模型，而非全局统一。
  2. **Agent 小组/房间模式**：引入 Manager Agent 概念，由 Manager 在房间内按需调度其他 Agent 协作完成任务。
- **背景**：用户提到已尝试阿里 HiClaw 但交互体验不如 LobsterAI，说明这是**跨平台竞品对比后的高期望用户**。
- **分析**：这是当前社区最具战略价值的功能请求。多 Agent 协作是 Agent 平台的下一个主战场，LobsterAI 已有 OpenClaw 底层，具备实现基础。

### Issue #2121 — 对一个现象的疑问（怀疑是 bug）
- **链接**：[netease-youdao/LobsterAI#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)
- **状态**：OPEN（创建 5 天前）
- **评论**：1 条
- **核心诉求**：用户观察到输出中存在**重复文字**，怀疑是 bug 并担心造成 token 浪费。
- **分析**：涉及推理/输出稳定性，可能与模型流式输出或上下文压缩后的重复生成有关。需排查是模型侧问题还是 LobsterAI 渲染/去重逻辑问题。

---

## Bug 与稳定性

| 严重程度 | 问题 | 来源 | 状态 | Fix PR |
|----------|------|------|------|--------|
| 🔴 高 | OpenClaw Gateway OOM 崩溃（长时间多通道高负载） | 线上反馈 | ✅ 已修复 | [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) |
| 🔴 高 | 慢网关场景下 pre-send 模型同步超时导致消息静默丢失 | 线上反馈（实测 35–107s） | ✅ 已修复 | [#2152](https://github.com/netease-youdao/LobsterAI/pull/2152) |
| 🟡 中 | 输出重复文字，疑似 token 浪费 | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | ⚠️ 待排查 | 无 |
| 🟡 中 | 上下文压缩后 Agent 任务连续性差 | 架构层面 | ✅ 已修复 | [#2145](https://github.com/netease-youdao/LobsterAI/pull/2145) |
| 🟢 低 | CopyButton 组件卸载后定时器未清理（内存泄漏） | 历史 Issue #886 | ✅ 已修复 | [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) |
| 🟢 低 | 编辑定时任务后描述被清空、启用状态被覆盖 | 历史 Issue #1062 | ✅ 已修复 | [#1482](https://github.com/netease-youdao/LobsterAI/pull/1478) |
| 🟢 低 | 技能安装时重复文件夹未拦截 | 历史 Issue #1427 | ✅ 已修复 | [#1479](https://github.com/netease-youdao/LobsterAI/pull/1479) |

**总结**：今日高/中度稳定性问题均已合入修复。唯一待排查的是 #2121 的重复输出问题，建议优先响应。

---

## 功能请求与路线图信号

| 功能请求 | 来源 | 相关 PR | 纳入可能性 |
|----------|------|---------|------------|
| **Computer Use（桌面自主操作）** | 产品路线 | [#2143](https://github.com/netease-youdao/LobsterAI/pull/2143) ✅ 已合入 | ✅ 已纳入，MVP 完成 |
| **实时 ASR 语音输入** | 产品路线 | [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148) ✅ 已合入 | ✅ 已纳入 |
| **模型自动 Failover** | 用户需求 + 历史 PR | [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) ✅ 已合入 | ✅ 已纳入 |
| **Gmail 邮件触发 Agent** | 历史 PR | [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) ✅ 已合入 | ✅ 已纳入 |
| **单 Agent 独立绑定模型** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | 无 | 🔶 高概率，需排期 |
| **多 Agent 协作/房间模式** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | 无 | 🔶 战略方向，但实现复杂度高 |
| **HTML 分享访问控制** | 产品路线 | [#2146](https://github.com/netease-youdao/LobsterAI/pull/2146) ✅ 已合入 | ✅ 已纳入 |
| **上下文压缩后连续性** | 架构优化 | [#2145](https://github.com/netease-youdao/LobsterAI/pull/2145) ✅ 已合入 | ✅ 已纳入 |

**路线图判断**：下一版本（推测为 4.4 或 2026.7.x）将是一个**功能大版本**，Computer Use、实时 ASR、模型 Failover、Gmail 触发等多项能力将集中交付。多 Agent 协作是社区呼声最高的中长期目标。

---

## 用户反馈摘要

### 痛点

1. **重复输出浪费 token**（[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)）
   - 用户直接质疑"是不是在大量吃我的 token"，说明 token 消耗透明度是用户敏感点。
   - 使用场景：日常对话中观察到重复文字，担心 API 成本。

2. **多 Agent 协作能力缺失**（[#1462](https://github.com/netease-youdao/LobsterAI/issues/1462)）
   - 用户已横向对比阿里 HiClaw，认可 LobsterAI 交互体验更优，但协作能力不足。
   - 使用场景：期望 Manager Agent 在"房间"中调度多个子 Agent 协同完成任务。

3. **慢网关场景消息丢失**（已修复，[#2152](https://github.com/netease-youdao/LobsterAI/pull/2152)）
   - 实测冷启动耗时 35–107s，远超 30s 默认超时，导致消息被静默丢弃。
   - 使用场景：网络环境差或资源受限设备上的用户体验。

### 满意点

- **4.3 版本同 IM 渠道多实例**获得用户明确好评（#1462 中提及"很实用"）。
- 用户将 LobsterAI 与阿里 HiClaw 对比后，**交互体验**被认为更优。

---

## 待处理积压

| 项目 | 链接 | 状态 | 开放天数 | 建议 |
|------|------|------|----------|------|
| Issue #1462 — 多 Agent 协作 + 单 Agent 绑定模型 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1462) | OPEN / stale | **69 天** | ⚠️ 高优先级，社区战略级需求，建议官方明确回应路线图 |
| PR #1459 — 技能 hover Tooltip | [链接](https://github.com/netease-youdao/LobsterAI/pull/1459) | OPEN / stale | **70 天** | ⚠️ 功能完整但长期未合并，需 review 决策（合并或关闭） |
| Issue #2121 — 重复输出 bug 怀疑 | [链接](https://github.com/netease-youdao/LobsterAI/issues/2121) | OPEN | **5 天** | 🔴 新 Issue，需尽快响应排查 |

**积压分析**：
- **#1462** 是最值得关注的长期未响应 Issue。用户已等待超过 2 个月，且诉求具有战略意义。即使短期无法实现，也建议官方给出明确的时间线或设计讨论，避免社区流失。
- **#1459**（技能 Tooltip）功能实现完整，长期未合并可能是 review 资源不足，建议尽快决策。
- **#2121** 为新 Issue，尚在合理响应窗口内，但涉及用户成本敏感度，建议优先排查。

---

*数据来源：LobsterAI GitHub (github.com/netease-youdao/LobsterAI) | 统计时间：2026-06-12*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-06-12

---

## 1. 今日速览

过去24小时内，Moltis 项目整体活跃度**偏低**，日均贡献节奏趋缓。共产生 **1 条新 Issue**（Fastmail MCP 授权问题）和 **1 条新 PR**（WhatsApp @lid 聊天回复投递修复），无新版本发布。项目处于维护性迭代阶段，未见大规模功能推进或架构变更，社区参与度温和但响应链路有待加强。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无 PR 合并/关闭记录。**

当日有一条新 PR 处于开放状态：

- **PR #1116** [fix(whatsapp): deliver replies to @lid chats via PN JID rewrite](https://github.com/moltis-org/moltis/pull/1116)
  - **状态：开放中，待审查合并**
  - 修复内容：当用户使用隐私号码（LID）发送消息时，Moltis 的 WhatsApp 网关虽然运行 Agent 并生成了回复（在 Web UI 中可见），但回复消息从未实际送达用户，也未收到 Delivered 回执。此 PR 通过对 PN JID（推送通知 JID）重写来修正回复路由逻辑，确保回应正确投递至对话终点。
  - 影响范围：WhatsApp 网关的消息投递层，涉及 JID 路由与隐私标识映射。

项目整体技术债继续被消化，但合并节奏偏慢——该 PR 尚未获得审查反馈。

---

## 4. 社区热点

当前活跃讨论与反应点：

- **Issue #1115** [Bug: Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)
  - 已有 **1 条评论**，👍 反应 0（暂未被广泛投票）。
  - 发帖者 kmath313 已确认搜索过同类 Issue，声称使用最新版 Moltis，问题尚未关闭。未填写 chat session 上下文。
  - 背后诉求：用户尝试通过 MCP 协议连接 Fastmail（邮件服务端点）时遭遇授权失败，可能与 OAuth/token 刷新、MCP 工具链集成或沙箱网络限制相关。反映用户对 Moltis 支持第三方邮件骨干网络的期望增强。

- **PR #1116** [fix(whatsapp): deliver replies to @lid chats via PN JID rewrite](https://github.com/moltis-org/moltis/pull/1116)
  - 暂无评论反馈，但属于关键路由修复，对 WhatsGate 功能完整性意义重大。

---

## 5. Bug 与稳定性

当日报告 Bug（按严重程度排列）：

- **[Medium] Fastmail MCP 授权失败**
  - Issue #1115 | 新报 · 作者：kmath313
  - 复现条件：使用 Fastmail 的 MCP 授权流程崩溃或拒绝访问
  - 是否已有 Fix PR：**无**
  - 建议：需社区协助复现 + 确认是否为 Fastmail API 策略变更导致，或为 Moltis 集成层缺失适配。

---

## 6. 功能请求与路线图信号

- **暂无明确 Feature Request Issue。**
- 隐含信号：Fastmail MCP 授权 Issue（#1115）暴露了 Moltis 与第三方邮件服务 MCP 接合的薄弱点，可能推动团队在下一版本中：
  - 增强 MCP connector 的错误处理与 fallback 机制。
  - 提供更多邮件服务商（Fastmail、iCloud Mail 等）的授权文档与配置模板。
- PR #1116 若顺利合并，将成为 WhatsApp 功能稳定性的重要里程碑。

---

## 7. 用户反馈摘要

| 要点 | 来源 |
|------|------|
| Fastmail MCP 授权失败，影响邮件 Agent 使用 | Issue #1115 |
| WhatsApp 隐私 LID 聊天中回复丢失（已修复尝试中） | PR #1116 摘要 |

- **正面**：WhatsApp 功能设计方向受到认可（Web UI 可见回复）。
- **痛点**：跨邮件服务商的 MCP 授权稳定性仍是生产环境部署的阻碍。
- 用户倾向于通过 Issue 报告问题，但复现细节不足，调查效率受影响。

---

## 8. 待处理积压

- **Issue #1115** 已 1 天，尚未有维护者回复，建议尽早 triage，确认是否为已知问题或需要复现步骤。
- **PR #1116** 今日新提交，尚未获得 code review，建议维护者优先审查——该修复影响 WhatsApp 核心投递逻辑，拖延合并可能导致更多用户遇到静默丢消息。

---

### 总结

Moltis 在 2026-06-12 呈现 **低活跃、小幅修复** 的状态。唯一的 PR 针对 WhatsApp @lid 回复丢失问题提了解决方案，审查或合并延迟是当前主瓶颈；Fastmail MCP 授权 Bug 暴露第三方邮件适配脆弱性。建议维护者加大 Review 投入并关注邮件服务生态集成，以保持项目在 AI 智能体领域的竞争力。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 · 2026-06-12

---

## 1. 今日速览

CoPaw 今日处于**高活跃度维护期**：过去 24 小时内 Issues 更新 31 条（新开 19，关闭 12）、PR 更新 40 条（待合并 21，合并/关闭 19），并连续发布了两个补丁版本（v1.1.11.post1、v1.1.11.post2）。项目当前的核心工作围绕 **v1.1.11 的稳定性修复**展开 — 桌面端 SSL 崩溃、记忆配置丢失、上下文压缩统计异常等多个回归问题集中爆发，维护团队正密集响应。同时，**AgentScope 2.0 后端迁移**（Issue #4727）作为最高优先级的 Breaking Change 议题持续讨论，社区对架构演进方向高度关注。整体来看，项目处于"大规模新版本发布后的震荡修复期"，稳定性是当下主线，但长期路线图信号同样丰富。

---

## 2. 版本发布

### v1.1.11.post2
- **发布时间：** 2026-06-11
- **变更内容：**
  - `style: truncate tool card titles to single line with ellipsis` — 工具卡片标题截断为单行省略号，改善 UI 布局溢出问题（PR #5119）
  - `chore: bump version to 1.1.11.post2` — 版本号提升（PR #5124）
- **性质：** 纯视觉优化补丁，无破坏性变更
- **链接：** [Release v1.1.11.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post2)

### v1.1.11.post1
- **发布时间：** 2026-06-11
- **变更内容：**
  - Revert `fix(pack): compile-check discord after conda-unpack` 回退一项有问题的打包修复
  - 发布流程 checklist 补充
- **性质：** 回退性补丁，修复 post 版本引入的回归
- **链接：** [Release v1.1.11.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post1)

> **⚠️ 迁移/注意：** 两个 post 版本均属微补丁。但需特别关注 — Issue #5086 和 #5106 报告的 **OpenSSL 3.5 回归 bug 导致桌面端无法启动** 问题在当前 post2 中**尚未有明确修复 PR 合并**，受影响用户建议暂时回退至 1.1.10。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 内容 | 状态 |
|---|---|---|---|
| **#5114** | feat(voice) | 语音功能相关更新 | 已合并 |
| **#5119** | style | Tool 卡片标题单行截断 + 省略号 | 已合并 ✅ |
| **#5124** | chore | 版本号提升至 1.1.11.post2 | 已合并 ✅ |
| **#5133** | feat(ui) | 将 AionUi 设计语言引入 Console 布局（纯 CSS/Less 变更） | 已合并 ✅ |
| **#5134** | feat(.claude) | 新增 qwenpaw-changelog Historian Agent — 开发流水线第 5 阶段文档自动化 | 已合并 ✅ |
| **#5136** | feat(i18n) | 新增 pt-BR（巴西葡萄牙语）完整翻译 | 已合并 ✅ |

**进展分析：**
- **前端体验集中升级：** PR #5133 是一次显著的设计语言升级，将 AionUi 的视觉风格融入 Console 界面（仅 CSS 层变更，无逻辑改动），反映项目对前端体验的持续打磨意愿。
- **国际化扩展：** pt-BR 翻译的加入（#5136）标志着 CoPaw 社区从中英双语向更广泛语言覆盖扩展，暗示拉美/巴西社区的活跃度提升。
- **开发者工具链完善：** #5134 引入 Historian Agent 自动记录开发周期的 gotcha/trap，属于 meta-level 的工程效能创新，说明团队在构建"自文档化开发流程"。
- **工具卡片 UI 修复：** #5119 解决了工具卡片标题溢出问题，虽是小修复但直接响应了日常使用中的视觉痛点。

---

## 4. 社区热点

### 🔥 Issue #4727 — [Breaking Change] Migrate backend from AgentScope 1.x to AgentScope 2.0
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/4727
- **评论：** 9 条 | 👍 2 | 创建：05-27
- **热评分析：** 这是过去 24 小时内**评论数最多的议题**，核心关注 AgentScope 2.0 架构迁移。Discussion 涉及新 API 适配成本、Runtime 模型变更、以及对现有插件生态的兼容性影响。社区成员关心迁移路径是否平滑、是否需要用户侧配置变更，以及是否会引入新的 Breaking Change 链。**这是整个项目的长期技术路线图焦点。**

### 🔥 Issue #5064 — [Bug] 由 Agent 生产的定时任务无法正常触发
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/5064
- **评论：** 8 条 | 👍 0 | 创建：06-10
- **热评分析：** 用户报告 Agent 自动创建的定时任务到达设定时间后无法触发，且不支持手动编辑。这直接影响 CoPaw 作为"个人 AI 智能体"的核心自动化场景。讨论集中在任务调度模块与 Agent 生成逻辑的衔接上。

### 🔥 Issue #5106 — [Bug] Tauri 端 SSL 证书错误 + 无限进程占满内存致黑屏
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/5106
- **评论：** 7 条 | 👍 0 | 创建：06-11
- **热评分析：** 这是**最严重的可用性崩溃报告** — Windows 11 用户安装最新 Tauri 桌面版后，SSL 异常触发无限进程创建，最终导致系统死机黑屏。旧版 PyInstaller 端也受影响。该 Issue 得到了 Issue #5086（OpenSSL 3.5 回归 bug）的根因佐证，共同指向 **OpenSSL 3.5.7 的 DER 证书加载 bug**。社区情绪焦虑，强烈要求紧急修复。

### 🔥 Issue #4989 — [Bug] 本地千问 3.6-27B 模型对话无响应
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/4989
- **评论：** 6 条 | 👍 0 | 创建：06-06 | 持续活跃中
- **热评分析：** 使用 vLLM 部署的本地模型在 1.1.9+ 版本无法正常回复（一直转圈），而 1.1.5.post2 正常。该 bug 跨度多个版本未被修复，影响本地部署用户群体。

---

## 5. Bug 与稳定性（按严重程度排序）

### 🔴 P0 — 系统级崩溃 / 完全不可用

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **#5106** | Tauri 桌面端 SSL 证书异常 → 无限进程 → 系统黑屏死机 | CLOSED（但根因仍在讨论） | **尚无明确合并的修复 PR**，相关 OpenSSL 根因在 #5086 |
| **#5086** | OpenSSL 3.5 回归 bug 导致 Desktop 无法启动（`ssl.SSLContext.load_verify_locations` 失败） | CLOSED | ⚠️ **未看到对应修复 PR 合并**，用户可能需要等待上游 OpenSSL 修复或项目自行规避 |

### 🟠 P1 — 核心功能受损

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **#5064** | Agent 创建的定时任务无法触发执行 | OPEN | 无 |
| **#4989** | 本地模型对话提交后一直转圈无响应 | CLOSED | ⚠️ 关闭但用户未确认修复，可能仅是信息补充后关闭 |
| **#5098** | auto_memory_search 搜索结果 UI 渲染异常（显示 `unknown`） | OPEN | 无 |
| **#5137** | 向量模型自动记忆搜索配置丢失（未展开卡片时保存无效） | OPEN | 无 |

### 🟡 P2 — 功能异常 / 体验降级

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **#5122** | 上下文压缩后统计值与实际 API 输入体量不符 | OPEN | 无 |
| **#5053** | Tauri 客户端切换 4+ 会话 Tab 卡顿超 10 秒 | CLOSED | 无明确修复 PR |
| **#5102** | 1.1.11 附件无法下载/预览报错 | CLOSED | ⚠️ 关闭但属回退解决 |
| **#3817** | 长期记忆向量模型配置重启后被覆盖 | CLOSED | 根因为初始化逻辑覆盖，未见修复 PR |

### 🟢 P3 — 配置/使用问题

| # | 问题 | 状态 |
|---|---|---|
| **#5132** | `enable_thinking: false` 配置不生效 | OPEN |
| **#5108** | v1.1.11 控制台无法选择 Ollama 模型 | CLOSED |
| **#5095** | Windows v1.1.11 桌面版安装后无法启动 | CLOSED |

---

## 6. 功能请求与路线图信号

| # | 功能请求 | 对应 PR | 纳入可能性 |
|---|---|---|---|
| **#5063** | 集成 Headroom 上下文压缩层，减少 60-95% Token 消耗 | 无 | 🟡 中等 — 技术可行性高但需插件化评估 |
| **#5103** | 对话队列（不等回复完成即可输入下一条）+ Token 统计 + 准确时间戳 | **#5130** 已在开发 Token 统计 Popover | 🟢 高 — Token 统计 PR 已存在 |
| **#5078** | **Runtime 2.0 模块化架构** + ToolCoordinator（Breaking Change） | 自身即为大型 PR | 🟢 高 — 直接对应 #4727 AgentScope 2.0 迁移 |
| **#4887** | 钉钉私有化部署自定义 Endpoint 支持 | **#5061** 已修复钉钉 AI 卡片空输出 | 🟢 高 — 钉钉功能 PR 已在活跃开发 |
| **#5116** | 可配置对话交互模式（interrupt/steering/queueing）替代手动 `/stop` | 无 | 🟡 中等 — 需跨平台 Channel 适配 |
| **#5110** | 引用/回复上文片段作为后续上下文（类似 Perplexity） | 无 | 🟡 中等 — UX 增强型需求 |
| **#5107** | Tool Guard 审批块决策后自动折叠 | 无 | 🟢 高 — 纯前端优化，实现成本低 |
| **#4622** | **DataPaw** — 含 12 个 BI 技能的数据分析插件 | 自身即为插件 PR | 🟢 高 — 已实现为 bundled plugin |
| **#4669** | Tauri 桌面自动更新器 | 自身即为 PR | 🟢 高 — 持续迭代中 |
| **#5067** | Agent OS Driver — 统一 MCP/A2A/ACP 外部能力抽象层 | 自身即为大型 PR | 🟢 高 — 架构级 PR，与 Runtime 2.0 路线一致 |

**路线图信号总结：** 社区诉求集中在三个方向 — **(1) 运行时架构升级**（Runtime 2.0、Agent OS Driver），**(2) 对话 UX 打磨**（队列、引用、Token 统计），**(3) 插件生态扩展**（DataPaw、钉钉定制）。其中 #5078 Runtime 2.0 和 #4727 AgentScope 迁移构成项目的**下一代架构主轴**。

---

## 7. 用户反馈摘要

**📌 真实痛点：**
- **桌面客户端稳定性是最大槽点：** 多名 Windows 用户反映升级 1.1.11 后遭遇无法启动、黑屏死机、附件失效等问题，有用户称"升级后新旧两个版本都坏了"（#5106）。从 1.1.5 可用到 1.1.9+ 不可用的版本退化（#4989）让用户对升级产生恐惧。
- **配置持久性差：** 记忆向量模型配置重启后丢失（#3817, #5137），用户反复保存无效，严重影响长期记忆的可靠使用体验。
- **本地部署用户被忽视：** Ollama 模型在 v1.1.11 控制台无法选择（#5108），vLLM 部署的本地模型持续对话失败（#4989）——本地/NPU 用户的体验问题修复速度明显滞后于云端用户。
- **改名遗留问题：** copaw → qwenpaw 改名后的数据目录不一致、插件安装失败等遗留 bug 仍在困扰用户（#5104）。

**📌 满意/正面信号：**
- 用户对新版 UI / AionUi 设计语言的视觉体验升级持期待态度（#5133 已被积极合并）
- 对话中自动注入记忆片段的 auto_memory_search 功能本身受到认可，只是 UI 展示层面有 bug（#5098）
- 社区活跃贡献者增多 — 今日多个 first-time-contributor PR 被合并

---

## 8. 待处理积压（提醒维护者关注）

| # | 类型 | 问题摘要 | 创建日期 | 最后更新 | 停留天数 | 紧急度 |
|---|---|---|---|---|---|---|
| **#4727** | Breaking Change | AgentScope 2.0 后端迁移 | 05-27 | 06-12 | **16 天** | 🔴 高 — 最重要的架构级议题，需里程碑规划 |
| **#5064** | Bug | Agent 定时任务无法触发 | 06-10 | 06-11 | **2 天** | 🔴 高 — 核心自动化场景 |
| **#4989** | Bug | 本地模型对话无响应（跨版本存在） | 06-06 | 06-11 | **6 天** | 🔴 高 — 本地部署用户群体大 |
| **#5063** | Feature | Headroom 上下文压缩集成 | 06-10 | 06-11 | **2 天** | 🟡 中 |
| **#4887** | Feature | 钉钉私有化部署自定义端点 | 06-02 | 06-11 | **10 天** | 🟡 中 — 有对应 PR #5061 跟进中 |
| **#4622** | Feature | DataPaw 数据分析插件 | 05-22 | 06-11 | **21 天** | 🟡 中 — 已实现，等待 review |
| **#5067** | Feature | Agent OS Driver | 06-10 | 06-11 | **2 天** | 🟡 中 |
| **#4669** | Feature | Tauri 自动更新器 | 05-25 | 06-11 | **18 天** | 🟡 中 |
| **#5028** | Security | Keychain master key 隔离 | 06-08 | 06-11 | **4 天** | 🟠 中高 — 安全类议题 |
| **#5088** | Governance | 治理与沙箱接口讨论 | 06-10 | 06-12 | **2 天** | 🟡 中 |

> **📋 维护者行动建议：**
> 1. **#4727 AgentScope 2.0 迁移** 作为最高优先级架构议题，建议尽快发布 migration guide 草稿，明确 Breaking Change 范围
> 2. **OpenSSL 3.5 回归问题（#5086/#5106）** 影响面极广且涉及系统级崩溃，建议考虑在 1.1.11.post3 中合并规避方案（如升级捆绑 OpenSSL 版本或回退至 3.4.x）
> 3. **#4989 本地模型无响应** 跨度 3 个版本仍有用户受影响，建议标记为 `regression` 并分配 owner
> 4. **#4622/#4669/#5067** 等大型 PR review 周期较长，建议指定 reviewer 避免 stagnation

---

*数据来源：agentscope-ai/QwenPaw | 采集时间：2026-06-12 | OWL 自动生成*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-12

---

## 1. 今日速览

ZeroClaw 正处于 **v0.8.0 正式发布后的首个高活跃期**。过去 24 小时内，Issues 更新 50 条（全部新开/活跃，0 关闭），PR 更新 50 条（49 待合并，仅 1 合并/关闭），社区讨论热度极高。v0.8.0 是一次重大版本升级，带来了多 Agent 单daemon 架构，但目前积压 PR 合并率偏低（仅 2%），大量已创建的修复和功能 PR 悬而未决，值得关注。新项目健康度评分：**6.5/10**（活跃度高但积压严重）。

---

## 2. 版本发布

### v0.8.0 — 里程碑式重大发布

**核心变更：**
- **多 Agent 单 Daemon 架构**：一个 daemon 现在可运行多个命名 Agent，每个 Agent 拥有独立的工作空间、记忆、模型提供商、安全策略、通信渠道和人格配置
- **重新设计的配置架构（V3 Config）**：自动迁移现有配置，支持类型化别名条目、级联删除等
- **破坏性变更**：配置格式迁移至 V3 schema，旧版本配置需自动迁移（维护者确认已有迁移逻辑）

**迁移注意事项：**
- 现有配置将通过新的 schema 自动迁移，用户应验证迁移后配置与预期一致
- 多 Agent 模式下，session 默认 TTL 已由 0（无限）改为 168 小时（7 天），可能影响长期会话行为（参见 PR #6085）

**相关追踪 Issue**：Week 10 & 11 Stability Sprint（注释中提及的稳定性冲刺计划，v0.8.0 发布后集中修复期）

---

## 3. 项目进展

### 合并/关闭的 PR

| PR | 说明 |
|---|---|
| **#7520** [CLOSED] | **CI 修复**：为 ARM glibc 目标安装 cross g++，解决 v0.8.0 Release Stable 运行中三个 ARM 目标的构建失败问题 |

### 今日活跃的重大待合并 PR（按影响力排序）

| PR | 标签 | 说明 |
|---|---|---|
| #7522 | `runtime, tool:file` | 修复 `file_read` 对二进制/图像文件返回乱码 mojibake 的问题，改为直接拒绝。已丢失的二进制文件拒绝行为被恢复 |
| #6303 | `provider, size: XL` | 修复 Gemini 400 错误（`assistant tool_call` 出现在首个 non-system turn 前的历史序列不变量违反）。严格 provider（如 Google Gemini）拒绝请求，宽松 provider 静默容忍 |
| #6038 | `cron, runtime` | 为 cron 作业调度添加 claim/release 锁，防止同一作业在超过调度器轮询间隔时重复执行 |
| #6362 | `runtime` | 修复上下文压缩器在边界对齐时无法识别纯文本 assistant 携带 trailing tool messages 的问题 |
| #5892 | `provider, runtime` | 修复三个生产阻塞级 bug：vLLM 0.19+ 拒绝空 tools 列表时的 `tool_choice: "auto"`、孤立 tool_use、vision capability 问题 |
| #6190 | `observability` | 为运行时内存操作添加 OTel GenAI spans 全链路追踪 |
| #6392 | `gateway, web` | 节点仪表板（Nodes Dashboard）+ 设备识别功能 |

**整体进展评估**：v0.8.0 发布后，大量 PR 正排队等待合并。当前合并速度明显滞后于 PR 创建速度，Week 10 & 11 Stability Sprint 的节奏需要加快。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排行）

| Issue | 标题 | 评论 | 热度分析 |
|---|---|---|---|
| **#5849** | [Feature] Dream Mode — 周期性记忆巩固与反思学习 | 💬 17 | 社区最期待的功能之一。用户希望 ZeroClaw 在空闲期自动进入"梦境模式"，压缩当日记忆、反思近期交互、更新长期知识结构。这反映了用户对"真正自主智能体"的期望——不仅仅是响应，而是主动学习 |
| **#6699** | [Bug] `tool_filter_groups` 对 MCP 工具无效 + 未与 deferred_loading 集成 | 💬 7 | 安全策略配置失灵，用户配置了工具过滤组但实际上无法生效。涉及 MCP 工具表面的前缀检查逻辑 bug，安全敏感性高 |
| **#7470** | [Bug] delegate agentic 模式拒绝空的 `risk_profile.allowed_tools` | 💬 7 | 多 Agent 审查/研究场景被阻塞。当目标 Agent 的 `risk_profile.allowed_tools` 为空时，委托机制失败，限制了 v0.8.0 多 Agent 架构的实际应用场景 |

### 核心诉求提炼

1. **"让 Agent 真正自主"** — Dream Mode (#5849) 代表了社区对 ZeroClaw 从"高级自动化"向"学习型智能体"跃升的期待
2. **"多 Agent 架构必须可用"** — v0.8.0 的多 Agent 愿景需要 delegate 路径 (#7470)、路由 (#6312)、心跳追踪 (#6391) 等配套功能的稳定
3. **"安全策略不能是摆设"** — tool_filter_groups (#6699)、allowed_tools 执行时强制 (#6914) 等安全问题被反复提起

---

## 5. Bug 与稳定性

### S0/S1 高危 Bug

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|---|
| **S0** | #5542 | WSL2 连续 OOM，zeroclaw 进程被内核 Kill | 无 | ⚠️ 长期未解决（报告于 2026-04-09） |
| **S1** | #6434 | Shell 工具调用在 `autonomy.level = "full"` 时被拒绝，`tool_dispatch` 未到达运行时 | 无 | ⚠️ 工作流完全阻塞 |
| **S1** | #5808 | 默认 32k token 上下文预算在第 1 次迭代即被系统提示 + 工具定义耗尽（超支 ~3.3x） | 无 | ⚠️ 影响所有默认配置用户 |
| **S1** | #7470 | delegate agentic 模式 + 空 `risk_profile.allowed_tools` 导致委托失败 | 无 | ⚠️ 多 Agent 场景阻塞 |
| **S1** | #6914 | `allowed_tools` 仅在工具列表时过滤，call dispatch 执行时不强制 | 无 | ⚠️ 安全策略绕过风险 |
| **S1** | #6361 | context_compression 对 OpenAI 兼容 provider（如 MiniMax）丢弃 assistant(tool_calls) 和 tool(result)，导致工具循环 | PR #6362 | 🔧 Fix 已提交 |
| **S1** | #6891 | Scheduled Jobs 编辑返回 API 422（v0.8.0 后旧表单字段不匹配） | 无 | ⚠️ Web UI 功能回归 |
| **S1** | #6699 | MCP 工具 filter gate 前缀检查 bug | 无 | 🔍 定位明确，待修复 |

### 中低危 Bug

| Issue | 描述 | Fix PR |
|---|---|---|
| #5903 | heartbeat.enabled=true 时 stdio MCP 子进程泄漏（每个 tick 一个孤儿进程） | 无 |
| #6037 | cron 作业在超过调度器轮询间隔时可能重复执行 | PR #6038 |
| #6350 | WhatsApp Web 中 LID-based 联系人的 allowed-numbers 检查被绕过，消息静默丢弃 | 无 |
| #6173 | model_switch 工具不跨轮次持久化，gateway/UI 路径完全忽略它 | 无 |
| #6227 | 多实例运行时的 `status` 命令硬编码 `zeroclaw.service`，报告 "stopped" | PR #6288 |
| #6642 | llm.call spans 未捕获完整 prompt/completion | PR #6190 |
| #6678 | Anthropic API 拒绝技能工具名（`format!(...)` 生成违反 `^[a-zA-Z0-9_-]{1,128}$` 的名称） | 无 |
| #6683 | skill_manage `patch` 绕过冷却限制，可能被无限调用 | 无 |
| #6302 | Gemini 400 — 历史序列违反 assistant tool_call 位置约束 | PR #6303 |
| #6312 | webhook 路径路由不支持按 alias 前缀路由 | 无（PR #7297 已提供 `?agent=` query 参数替代方案） |
| #6548 | channel runtime 命令回复绕过 Fluent 本地化 | PR #6578 |
| #6645 | SkillImprover 和 skill_manage 只处理 `SKILL.toml`，不处理 `manifest.toml` | 无 |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（已有或可能有 PR 推进）

| Issue | 功能 | 信号强度 | 路线图关联 |
|---|---|---|---|
| **#5849** | Dream Mode（周期性记忆巩固与反思学习） | ⭐⭐⭐⭐⭐ | v0.9.0 或更后期的核心差异化功能 |
| **#6823** | TUI ACP Bridge | ⭐⭐⭐⭐ | 已作为 Tracker issue 被接受，影响 Terminal UI 生态 |
| **#6390** / **#6346** | `zeroclaw node add <url>` CLI + 仪表板节点管理 | ⭐⭐⭐⭐ | #6392 PR 已推进 Nodes Dashboard |
| **#6365** | Web 仪表板 "Update ZeroClaw" 按钮 | ⭐⭐⭐ | 降低非 CLI 用户升级门槛 |
| **#7175** | 类型化 delete-with-cascade（aliased entries） | ⭐⭐⭐ | V3 Config 架构内的完善性改进 |
| **#5618** | 用类型化 Registry API 替换 DaemonSubsystems 回调 | ⭐⭐⭐ | 架构现代化，Phase 2 D1 |
| **#6312** | per-alias webhook 路径路由 | ⭐⭐ | PR #7297 已提供部分替代方案 |

### 即将到来的功能信号

- **多实例 Fleet 管理**：#6390 node CLI + #6392 Nodes Dashboard + #6391 实际心跳追踪 → 形成一个完整的远程实例管理套件
- **可观测性增强**：#6642（全 prompt/completion OTel span）+ #6190（运行时内存操作 OTel spans）→ ZeroClaw 正在构建企业级可观测性体系
- **Skills 生态扩展**：#6143 universal skill registry（agentskills.io, skills.sh）→ 向开放技能市场迈出重要一步

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **"文档与实际脱节"** — PR #6102（Windows 设置指南重写）、PR #6760（Docker 文档更新）、PR #6583（gateway.web_dist_dir 配置文档）均来自用户反馈的文档不一致问题。配置迁移后文档未同步是 v0.8.0 的最大用户摩擦点

2. **"多 Agent 愿景很酷，但跑不起来"** — #7470（delegate 路径阻塞）、#6699（工具过滤失效）、#5808（上下文预算不足）共同指向一个问题：v0.8.0 的多 Agent 架构在默认配置下即遭遇功能性障碍

3. **"OOM 让我不敢在生产环境部署"** — #5542 WSL2 OOM 已持续 2 个月未解决，严重影响用户信心

4. **"Cron 调度不可靠"** — #6037（重复执行 #20 次）和 #6224（WhatsApp 投递缺失）表明 cron 子系统的生产就绪度不足

### 满意信号

- 社区对 v0.8.0 的多 Agent 架构愿景表示强烈兴趣（Dream Mode #5849 获得 17 条评论）
- 通用 Skills Registry (#6143)、OTel 可观测性 (#6190) 等提案获得社区技术层面的积极参与
- 跨 provider 兼容性改进（Gemini、MiniMax、Anthropic 等）被持续报告，说明 ZeroClaw 正被用于多样化模型部署场景

---

## 8. 待处理积压

### 长期未响应（创建超 60 天）的高危 Issue

| Issue | 创建日期 | 标签 | 风险 |
|---|---|---|---|
| **#5542** WSL2 连续 OOM | 2026-04-09 | S0 | 🔴 2 个月，核心稳定性风险，无响应 |
| **#5808** 默认 32k 上下文预算不足 | 2026-04-16 | S1 | 🔴 近 2 个月，影响所有默认用户，无响应 |
| **#5849** Dream Mode | 2026-04-18 | enhancement | 🟡 近 2 个月，但讨论活跃，需路线图确认 |
| **#5903** stdio MCP 子进程泄漏 | 2026-04-19 | P1, no-stale | 🔴 近 2 个月，有 no-stale 标签但仍未修复 |
| **#6037** Cron 作业重复执行 | 2026-04-23 | P1 | 🟡 Fix PR #6038 已存在但未合并 |

### 关键 Fix PR 积压

| PR | 创建日期 | 对应 Issue | 风险 |
|---|---|---|---|
| **#6303** Gemini history 修复 | 2026-05-03 | #6302 | 🔴 3 天未合并，blocker |
| **#6038** Cron claim/release 锁 | 2026-04-23 | #6037 | 🟡 近 3 周未合并 |
| **#6288** systemd 单元名推导 | 2026-05-02 | #6227 | 🟡 多实例场景依赖 |

### 📌 维护者关注建议

1. **立即处理**：#7522（质量合入，低风险高价值）、#6303（Gemini 用户阻塞）
2. **本周优先**：#5542（OOM，S0 级别）、#5808（上下文预算，默认配置阻塞）、#5903（子进程泄漏，有 no-stale 标签）
3. **v0.8.1 目标**：delegate 路径修复 (#7470)、cron WhatsApp 投递 (#6230)、模型切换持久化 (#6173)
4. **路线图决策**：Dream Mode (#5849) 需要官方路线图确认，目前社区期待过高而无明确答复

---

*数据来源：github.com/zeroclaw-labs/zeroclaw | 报告生成时间：2026-06-12*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*