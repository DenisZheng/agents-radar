# OpenClaw 生态日报 2026-06-10

> Issues: 453 | PRs: 496 | 覆盖项目: 13 个 | 生成时间: 2026-06-10 00:42 UTC

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

# OpenClaw 项目动态日报 — 2026-06-10

---

## 1. 今日速览

OpenClaw 今日处于**高活跃维护期**：过去 24 小时内 Issues 更新 432 条（新开/活跃 315 条，关闭 138 条），PR 更新 276 条（待合并 122 条，已合并/关闭 154 条），并发布了 2 个新版本（含 1 个稳定版 + 1 个 beta 版）。项目整体行进节奏健康——大量积压 Issue 正在被系统性清理（关闭率约 30%），同时 PR 吞吐量高，表明维护者处理能力充沛。本日发布的核心更新聚焦于**消息泄露修复**和 **MCP 工具结果兼容性**两个方向，均是近期社区最高频的痛点。

---

## 2. 版本发布

### v2026.6.5（稳定版）
🔗 [Release Note](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5)

**核心更新：**

- **QQBot 推理链剥离**：QQBot 在原生投递前自动剥离模型推理/思考脚手架，防止原始 `<think>`/`<thinking>` 内容泄露到频道回复。(#89913, #90132) — 由 @openperf 贡献。这直接回应了社区多日来关于内部工具调用痕迹泄漏到消息频道的安全投诉。
- **MCP 工具结果类型强制转换**：MCP 工具结果现在对 `resource_link`、`resource`、`audio`、格式错误的 image 及未来新增类型进行兼容性强制转换（coerce），减少工具调用因类型不匹配导致的静默失败或崩溃。

**迁移注意事项：**
- 无破坏性变更报告；v2026.6.5 与 6.5-beta.6 的 highlights 基本一致，稳定版可视为 beta 的正式发布。
- 依赖 QQBot 渠道的用户可立即升级以解决 `<think>` 标签泄漏问题。

### v2026.6.5-beta.6（Beta 预发布）
🔗 [Release Note](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.6)

内容与稳定版基本相同，为正式发布前的最后验证版本。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 内容摘要 | 重要性 |
|---|---|---|
| **#91787** [CLOSED] | 修复 `openclaw doctor` 中 TTS 旧版迁移仅在合法 schema 路径上执行 | 中 — 防止配置被错误重写 |
| **#91782** [CLOSED] | 被 #91784 替代（voice-call realtime WebSocket 路径边界修复的被更干净的单提交 PR 取代） | 低 — 过程性合并 |
| **#91757** [CLOSED] | 澄清已废弃的 `skill-workshop` 插件警告信息，指引用户至当前内置 Skill Workshop | 低 — 文档/UX 改善 |
| **#91750** [CLOSED] | 在执行原生 web search 前强制执行完整的 OpenClaw 工具策略策略链（全局/Provider/Agent/Profile/Group/Sender/Subagent 多层继承） | **高 — 安全策略闭合** |

### 今日新开的重点 PR

| PR | 内容摘要 | 状态 |
|---|---|---|
| **#91790** | 为 `google-gemini-cli` 添加 image capability shim，修复 Gemini CLI 拒绝图片附件的问题 | 待证明 |
| **#91791** | 沙箱启动 prompt 使用 materialized skill 路径，修复沙箱会话中 skill 找不到的问题 (#91761) | 待证明 |
| **#91786** | 修复 managed npm root overrides 与 managed peer pins 之间的不兼容冲突 (#91772) | **高优先级待审** |
| **#91785** | iMessage 入站启动诊断信息可见化 | 待审 |
| **#91783** | iMessage 出站发送传输层加固（新增 `sendTransport` 配置，分离监控与发送 RPC 客户端） | 待审 |
| **#91770** | `memory_search` 工具超时时取消底层 embedding 嵌入搜索 (#91718) | 待审 |
| **#91762** | Gateway 支持 opt-in `clientContext` 附加到 Run 上，便于外部可观察性插件进行链路归因 | 待审 |
| **#91747** | 验证 browser 发现的 CDP WebSocket URL 安全性后再返回 | 待审 |
| **#91722** | HTTP 出口重构：以 `proxy.enabled + 外部代理` 替换分散的进程内 SSRF 防护 | 待审（大型重构） |

**综合评估：** 项目在 iMessage 渠道加固（3 个独立 PR）、沙箱 skill 路径修复、CDP 浏览器安全验证上同时推进，安全策略执行闭合（web_search 策略链）是一个里程碑式的合并。HTTP 出口的大型重构 PR（#91722）值得重点关注，方向正确但有兼容性风险。

---

## 4. 社区热点

### 讨论最活跃 Issues（按评论数排序）

| Issue | 评论数 | 核心问题 |
|---|---|---|
| **#25592** [29 评论] | 🔗 [Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592) | Agent 工具调用之间产生的错误处理文本、处理确认、旁白等被路由到消息频道，**严重影响用户体验**。标记了 `impact:security` + `impact:message-loss`，是最高评级的 🦞 Diamond Lobster。 |
| **#88312** [15 评论] | 🔗 [Codex app-server turn-completion stall regression](https://github.com/openclaw/openclaw/issues/88312) | 2026.5.27 起 Codex 多工具 agent turn 可靠失败（"Codex stopped before confirming the turn was complete"），是 #84076 修复后的**回归**。 |
| **#87307** [14 评论] | 🔗 [Matrix thread replies regression](https://github.com/openclaw/openclaw/issues/87307) | 2026.5.22 升级后 Matrix 线程回复行为退化，且 `/status` 和 `/model` 命令无响应。 |
| **#54253** [13 评论, 👍4] | 🔗 [RISC-V64 系统上 OpenClaw "LLM Request Failed"](https://github.com/openclaw/openclaw/issues/54253) | RISC-V64 架构上的兼容性问题，长期未响应用户关注度上升。 |
| **#53628** [13 评论] | 🔗 [`${XDG_CONFIG_HOME}` 在安装 skill 时未被解析](https://github.com/openclaw/openclaw/issues/53628) | 安装 skill 时 XDG 变量未展开，Docker 部署用户受影响。 |

### 最高互动 Issues（按 👍 排序）

| Issue | 👍 | 说明 |
|---|---|---|
| **#42840** | 👍6 | 为 Control UI 添加 MathJax/LaTeX 支持——学术/科学用户群体的刚性需求。 |
| **#53599** | 👍4 | Chrome extension browser relay 无跨机器替代方案被移除（回归），托管服务商受影响。 |
| **#54253** | 👍4 | RISC-V64 兼容性。 |
| **#88312** / **#74586** / **#83184** / **#89315** / **#84569** / **#53548** | 👍3 | 多个 P1 级 Bug 并列。 |

### 分析

社区核心诉求高度集中在**消息泄露**（工具调用痕迹、中间文本）和**多平台消息投递正确性**（Matrix 线程、Codex turn 完成确认、WhatsApp 长调用 stall）。这两个方向恰好是今日 v2026.6.5 修复和待合并 PR 的处理重点——响应路径清晰，但需要加速推进。

---

## 5. Bug 与稳定性

### P1 级严重 Bug（按影响范围排列）

| Issue | 描述 | 严重程度 | Fix PR |
|---|---|---|---|
| **#25592** | 工具调用间文本泄露到消息频道 | 🔴 安全 + UX | 无直接 PR（v2026.6.5 部分修复 QQBot 场景） |
| **#88312** | Codex turn stall 回归 | 🔴 功能回归 | 无 |
| **#89315** | Gateway 堆内存无界增长，Linux systemd 部署 OOM | 🔴 稳定性 | 无 |
| **#87307** | Matrix 线程回复回归 + /status /model 失声 | 🟠 功能回归 | 无 |
| **#84569** | WhatsApp 长 model_call 后 session stall，回复永远不投递 | 🟠 消息丢失 | 无 |
| **#83184** | 心跳驱动回复导致 pendingFinalDelivery 卡死，阻塞后续心跳 | 🟠 死锁 | 有 linked PR |
| **#86996** | Active Memory + Codex 组合导致响应延迟/钩子超时/启动中止/事件循环停滞 | 🟠 性能/稳定性 | 无 |
| **#48003** | Steer 模式无法在主会话 turn 中注入消息 | 🟠 功能缺陷 | 有 linked PR |
| **#53540** | 大参数工具调用超时导致 "Network connection lost" 错误 | 🟠 超时处理 | 无 |
| **#40611** | 心跳 drift 修复（#39182）导致 Telegram 主动对话期间被阻塞 | 🟠 回归 | 无 |

### P2 级 Bug

| Issue | 描述 | Fix PR |
|---|---|---|
| **#74586** | AM embedded run 中 memory_search 工具调用被中止误判为超时 | 无 |
| **#87299** | 大型 Telegram 直聊中偶发 "Something went wrong" 和 Codex 失败 | 无 |
| **#53486** | 飞书 message(action=send) 将卡片 JSON 作为纯文本发送（回归） | 有 linked PR |
| **#54435** | sessions_list API 只返回主 session | 有 linked PR |
| **#54634** | HOME 变更后更新静默丢弃配置 | 无 |
| **#56096** | Telegram sendChatAction 无限重试循环无退避 | 无 |

**稳定性评估：** 当前积压的 P1 Bug 中，约 60%（~6个）无直接 Fix PR，主要集中在内存泄漏（#89315）、Codex turn stall（#88312）、WhatsApp stall（#84569）三个独立的需要深入排查的根因型问题上。v2026.6.5 的发布部分缓解了消息泄露和 MCP 工具兼容性，但积压中仍有大量高优先级修复需求。

---

## 6. 功能请求与路线图信号

### 新功能请求汇总

| Issue | 内容 | 优先级信号 |
|---|---|---|
| **#52640** | 长运行 channel 任务的持久化任务状态面（先 Discord，后通用抽象） | 有 linked PR — 正在推进 |
| **#54531** | 强制回复到来源渠道（Telegram/Discord/WhatsApp） | 高用户需求，无 PR |
| **#42840** | Control UI MathJax/LaTeX 渲染支持（👍6，社区最高互动之一） | 社区呼声高，无 PR |
| **#90354** | 预压缩 memory flush 的有界/校验追加语义 | 新开 Feature，讨论活跃（6 评论） |
| **#53638** | per-channel/per-group/per-DM 模型覆盖配置 | 有 linked PR，推进中 |
| **#56110** | 将 STATE.md 加入自动加载的 workspace 引导文件 | 实用功能，与 compaction 恢复密切相关 |
| **#51441** | 在 session_status 和 agent runtime 中暴露解析后的后端模型 | 有 linked PR |
| **#55249** | Session 标签/昵称便于识别 | 改善多 session 管理体验 |
| **#54794** | Telegram Inline Query 支持（@bot 在任何聊天中调用） | 渠道能力扩展 |
| **#53548** | 解除 mode="session" 与 thread binding 的强制绑定 | 👍3，有 linked PR |
| **#55484** | ACP 非线程持久 affinity 支持（cron 和 orchestrator 会话） | 高级编排需求 |
| **#54373** | Context Provenance：为注入的上下文段添加来源/易变性元数据 | RFC 级别讨论 |
| **#56263** | 多用户部署可配置文件权限（chmod 0o640/0o750） | 企业/多用户部署刚性需求 |
| **#39406** | 抑制瞬态工具错误警告的配置选项 | 改善终端用户 UX |

### 路线图判断

- **下一版本几乎确定包含**：长运行任务状态面（#52640，有 PR）、per-channel 模型覆盖（#53638，有 PR）、memory flush 边界语义（#90354，新开讨论活跃）。
- **中期方向**：Context Provenance（#54373）代表着对 agent 可观察性的深度投资，与 #91762（Run 归因）和 #90354 形成了一条清晰的"可观测性+可靠性"路线。
- **社区压力和短期可做**：MathJax/LaTeX（#42840）功能简单但呼声高，可作为快速胜利项；Telegram Inline Query（#54794）是渠道差异化能力的补充。

---

## 7. 用户反馈摘要

### 真实痛点

1. **消息安全和隐私**：用户强烈不满于内部工具调用痕迹（`NO_REPLY`、`to=functions.*`、思考链）泄露到公开频道（Discord #44905、#25592）。这在企业部署和多用户场景中尤为敏感。"我在企业 Slack 工作区部署 OpenClaw，用户开始看到 `<thinking>` 标签和内部调试信息，这是不可接受的。"

2. **跨渠道消息投递不可靠**：大量用户报告在某些渠道中消息送达确认不可靠——WhatsApp 长调用后丢失（#84569）、Telegram 心跳卡死（#83184）、Matrix 线程回复退化（#87307）、飞书卡片渲染回归（#53486）。用户期望的是"说了就能收到"的确定性。

3. **长时间运行的稳定性**：Google Gemini CLI 模型在 large tool call 参数生成时超时（#53540），Gateway 内存无界增长（#89315），Active Memory + Codex 组合的延迟螺旋（#86996）——这三个问题指向同一个核心场景：**长时间运行、大容量推理的 agent 在生产环境中的可靠性**。

4. **配置/安装体验**：RISC-V64 不兼容（#54253）、XDG 变量未解析（#53628）、`OPENCLAW_CONFIG_DIR` 无法包含空格（#44599）、HOME 变更后配置静默丢失（#54634）——这些问题覆盖了边缘架构、Docker 部署和日常配置变更，降低了大采用门槛。

5. **文档跟不上代码**：Live Docs 超前于 release（#48920），doctor 操作指引不完整（#54877），加重了用户的困惑。

### 满意点

- #88312 用户明确标注了 beta.26 和 beta.27 版本对比，表明用户仍在积极升级测试，对快速迭代有信心。
- v2026.6.5 的发布快速响应了 `<think>` 泄露和 MCP 工具兼容性问题，社区反馈路径有效。
- 多个 PR 作者（@openperf、@SkyWolfDreamer、@TurboTheTurtle、@RomneyDa）持续稳定贡献，社区信任度高。

---

## 8. 待处理积压

### 长期未响应的重要 Issue（按创建时间排序 + 优先级）

| Issue | 创建日期 | 状态 | 关注原因 |
|---|---|---|---|
| **#31331** [P1, 🦞] Docker + Sandbox 无法 workspaceAccess | 2026-03-02 | 开放 3+ 月 | 标记 `fix-shape-clear` + `linked-pr-open`，但长期未合并 |
| **#44905** [P1, 🦞] Discord 内部工具调用痕迹泄露 | 2026-03-13 | 开放 3+ 月 | 与 #25592 同根因，安全级别 |
| **#48003** [P1, 🦞] Steer 模式 turn 中消息注入 | 2026-03-16 | 开放 3+ 月 | 有 linked PR，待审 |
| **#42840** [P2, 🦞] MathJax/LaTeX | 2026-03-11 | 开放 3+ 月 | 👍6 社区最高呼声之一，快速可做 |
| **#46031** [P2, 🦞] GitHub Copilot auth.order 被忽略 | 2026-03-14 | 开放 3+ 月 | 有 linked PR |
| **#53628** [P2, 🦞] XDG_CONFIG_HOME 未解析 | 2026-03-24 | 开放 2.5+ 月 | 有 linked PR |
| **#54253** [P2, 🦪] RISC-V64 不兼容 | 2026-03-25 | 开放 2.5+ 月 | 架构支持缺口 |
| **#54373** [P3, 🌊] Context Provenance RFC | 2026-03-25 | 开放 2.5+ 月 | 架构级讨论，需要 maintainer 主导 |
| **#54435** [P2, 🦞] sessions_list 只返回主 session | 2026-03-25 | 开放 2.5+ 月 | 有 linked PR，影响 dashboard 使用 |
| **#54531** [P1, 🦞] 强制回复到来源渠 channel | 2026-03-25 | 开放 2.5+ 月 | 高需求功能请求 |

### 长期开放的重点 PR（等待维护者审查）

| PR | 创建 | 摘要 | 风险标注 |
|---|---|---|---|
| **#87893** | 2026-05-29 | 修复 Control UI 会话中 fallback auth/model 被误认为持久用户选择 | `compat + auth + session-state` 变更风险 |
| **#84792** | 2026-05-21 | 在 preflight compaction 前运行 memory flush（#84695） | `session-state` 变更风险 |
| **#84569** 相关 PR | — | WhatsApp session stall 修复 | — |
| **#85316** | 2026-05-22 | 保持 alias-compatible auth-profile overrides 不被清除 | `auth` 变更风险 |
| **#85505** | 2026-05-22 | 添加 host-only CLI auth epoch 模式 | `compat + auth + session` 变更风险 |
| **#84540** | 2026-05-20 | cli-runner 在 stdout 期间发出 run.progress 事件 | `availability` 风险 |
| **#88800** | 2026-05-31 | 将 generated secret ref 保持在加密引用中 | `compat + auth` 变更风险 |
| **#84434** | 2026-05-20 | 禁用 --print claude runs 中的 ScheduleWakeup/CronCreate | `compat` 变更风险 |

> ⚠️ **提醒**：以上 8 个 PR 均已标记 `👀 ready for maintainer look` 且开放超过 7 天，部分仅在等待维护者合并批准。建议每日审查队列中优先处理 `P1` + `🦞` 评级的积压。

---

*数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)，统计窗口：2026-06-09 至 2026-06-10。本报告由 OWL 生成，仅供参考，不构成技术决策依据。*

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向分析报告

**日期：2026-06-10 | 分析：OWL**

---

## 1. 生态全景

2026 年 6 月，个人 AI 助手开源生态已进入**多项目并行、分竞争态势**。OpenClaw 以压倒性的社区体量和维护吞吐量为生态"基础设施层"，日处理 400+ Issues / 270+ PR；NanoBot、Hermes Agent、PicoClaw、CoPaw、IronClaw、ZeroClaw 等数十个从不同维度（轻量化、特定平台、全渠道、多租户、桌面客户端）切入的差异化项目正在快速成熟。当前核心矛盾从"有没有"转向"稳不稳、安不安全"——消息泄露防护、跨平台投递确定性、LLM 多供应商兼容性、安全沙箱与权限模型成为集体攻关方向。桌面端和 Windows 体验成为新兴痛点集中区，Agent Runtime 抽象化与多模型路由正在形成新的架构共识。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | 新版本 | PR 更新 | 待合并 PR | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 432 条（开 315 / 关 138） | ✅ v2026.6.5 + beta.6 | 276 条（待 122 / 合 154） | 122 | 🟢 高活跃，消化力强 |
| **Hermes Agent** | 50 条（开 45 / 关 5） | — | 50 条（待 43 / 合 7） | 43 | 🟡 高活跃，积压偏重 |
| **PicoClaw** | 20 条（开 18 / 关 2） | ✅ Nightly v0.2.9 | 20 条（待 15 / 合 5） | 15 | 🟡 安全警报集中 |
| **NanoBot** | 6 条活跃 | — | 23 条（待 12 / 合 11） | 12 | 🟢 节奏稳定 |
| **NanoClaw** | 1 条 | — | 43 条（待 4 / 合 39） | 4 | 🟢 清算积压期 |
| **NullClaw** | 5 条（开 1 / 关 4） | — | 7 条（待 1 / 合 6） | 1 | 🟢 小型维护期 |
| **IronClaw** | 47 条（开 42 / 关 5） | — | 50 条（待 42 / 合 8） | 42 | 🟡 大型重构冲刺 |
| **LobsterAI** | 2 条活跃 | — | 5 条（待 1 / 合 4） | 1 | 🟢 功能收敛 |
| **CoPaw** | 33 条（开 16 / 关 17） | ✅ v1.1.11-beta.2 | 34 条（待 16 / 合 18） | 16 | 🟢 高消化效率 |
| **ZeroClaw** | 50 条（开 48 / 关 2） | — | 50 条（待 49 / 合 1） | 49 | 🔴 积压严重 |
| **TinyClaw** | — | — | — | — | ⚪ 休眠 |
| **Moltis** | — | — | — | — | ⚪ 休眠 |
| **ZeptoClaw** | — | — | — | — | ⚪ 休眠 |

> **关键发现**：ZeroClaw PR 积压比达 49:1（待合并:已合并），已进入瓶颈状态；Hermes Agent 积压比 43:7，同样需要维护者加速审查。

---

## 3. OpenClaw 在生态中的定位

**规模对标**：OpenClaw 的 Issue 日处理量（432）是第二名 ZeroClaw（50）的 **8.6 倍**，PR 日处理量（276）同样是第二名 IronClaw（50）的 **5.5 倍**。社区体量远超同类项目一个数量级。

**核心壁垒**：

| 维度 | OpenClaw | 同类典型 |
|---|---|---|
| 渠道数量 | 20+（QQBot、Telegram、Discord、WhatsApp、iMessage、Slack、Matrix、飞书等） | 通常 3-8 个 |
| 安全模型 | 多层工具策略链（全局/Provider/Agent/Profile/Group/Sender/Subagent 继承）、MCP 兼容性强制转换、推理链剥离 | 基础 allowlist |
| 可观测性 | Run clientContext 链路归因（#91762）、Context Provenance RFC | 有限的日志输出 |
| 版本节奏 | 稳定版 + beta 预发，迭代周期约 2 周 | 月级或更长 |
| 积压管理 | Issue 关闭率 ~30%，系统性清理 | 多个项目关闭率 <15% |

**技术路线差异**：OpenClaw 选择"全渠道统一平台"路线，追求一个 runtime 覆盖所有消息通道和使用场景；PicoClaw 和 ZeroClaw 同样全渠道定位但体量较小；CoPaw/LobsterAI 走桌面端深度体验路线；Hermes Agent 走"开箱即用 + 学术社区"路线；IronClaw 走"Reborn 新架构彻底重构"路线。OpenClaw 的架构哲学是**渐进兼容**，IronClaw 是**破坏性重生**。

**OpenClaw 的压力面**：消息泄露（#25592）的安全事件评级极高（ Diamond Lobster + 29 个社区讨论），Gateway OOM（#89315）和 Codex turn stall（#88312）两大 P1 无修复 PR，说明在安全深水区和多 Agent 可靠性层面仍有艰巨工程。

---

## 4. 共同关注的技术方向

以下方向在 3 个及以上项目中同时涌现：

### 🔴 1. 消息泄露与隐私保护
| 项目 | 诉求 |
|---|---|
| **OpenClaw** | QQBot 推理链 `<think>` 泄露（v2026.6.5 部分修复）；工具调用间文本路由至消息频道（#25592，最高优先级安全 Issue） |
| **NullClaw** | PII 脱敏回归——日期输出被误判为电话号码（#944，已修复）；脱敏导致工具调用语义破坏（#43083） |

**行业意义**：Agent 内部状态的脱敏与隔离是走向企业级部署的必经门槛，需要在安全防御与功能正确性之间寻找更优架构。

### 🟠 2. 多模型 / 多供应商兼容性
| 项目 | 诉求 |
|---|---|
| **NanoBot** | GPT-5.x `max_tokens` 参数不兼容；OpenAI 兼容供应商 tool calls 解析失败 |
| **PicoClaw** | Claude-sonnet 模型 ID 点号/连字符格式差异导致安装即失败 |
| **CoPaw** | DeepSeek、MiniMax、KimiCode 推理内容显示、tool name 校验、`max_tokens` 差异 |
| **IronClaw** | 严格模式供应商 null 参数被拒绝、DeepSeek 重复 model 字段、temperature 参数不支持 |
| **ZeroClaw** | OpenAI 兼容供应商 user message 丢失、reasoning 字段不兼容 |

**行业意义**：LLM 供应商 API 碎片化是所有 Agent 框架面临的持续性适配负担，**统一的参数归一化层和供应商能力探测机制**正在成为架构标配。

### 🟠 3. 安全与权限模型
| 项目 | 诉求 |
|---|---|
| **OpenClaw** | 多层策略链（#91750 已合并）；HTTP 出口 SSRF 防护（#91722） |
| **PicoClaw** | 批量安全 Issue：Feishu/WeCom/LINE 权限绕过、web_fetch SSRF 多重绕过（12 个安全 Issue） |
| **NanoClaw** | 配对码 CSPRNG 安全修复（#2722）；安全策略引擎（#1605 blocked） |
| **ZeroClaw** | Per-sender RBAC / 多租户隔离（#5982）；Cron 重复执行安全漏洞 |
| **IronClaw** | 项目级自动化所有权核心模型重构；SSO 权限边界修复 |

**行业意义**：Agent 框架的安全模型正从"简单的 allowlist"向**多租户 RBAC、通道级权限隔离、资源作用域化**的纵深防御体系演化。

### 🟡 4. 桌面端体验（尤其 Windows）
| 项目 | 诉求 |
|---|---|
| **CoPaw** | Windows 前端卡顿、流式输出致整机卡死、Tauri 外链无法打开、文件下载被阻止、路径超限 |
| **Hermes Agent** | macOS launchd 服务重启回归；Desktop 文件浏览器 ENOENT |
| **LobsterAI** | 系统通知恢复主窗口（已修复）；数据备份/迁移回撤 |

**行业意义**：桌面端是下一个体验深水区。Windows 特有的路径长度限制、CPU 调度、Tauri/Sandbox 桥接等问题的复杂度远超服务端部署。

### 🟡 5. 上下文管理可靠性
| 项目 | 诉求 |
|---|---|
| **NanoBot** | `history.jsonl` 跨会话污染；`idleCompact` 压缩写入错误结论 |
| **NullClaw** | `compact_context` 配置标码为死代码（已修复） |
| **CoPaw** | `/compact` 忽略模型实际 `max_input_length`（已修复） |
| **ZeroClaw** | System prompt 超出 context budget 时无限 preemptive trim |
| **Hermes Agent** | 上下文压缩后 assistant 消息丢失（#43067） |

### 🟢 6. Agent Runtime 抽象化
| 项目 | 诉求 |
|---|---|
| **NanoClaw** | Multi-runtime agent SDK 抽象层（#1690）——以模块化 skill 方式接入 Claude/Codex/本地模型 |
| **Hermes Agent** | per-task 委托模型/provider 覆盖（#43134 + #43185，8 位 reviewer 审查中） |
| **Hermes Agent** | `model_switch` 暴露为 Agent 可调用工具（#16525） |
| **OpenClaw** | ACP 非线程持久 affinity 支持（#55484）；Gateway 支持 opt-in clientContext 可观察性（#91762） |

**行业意义**：将底层模型调用与上层 Agent 调度解耦，是解锁多模型混合部署和按业务场景自动路由的关键架构跃迁。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 渠道覆盖 | 差异化亮点 |
|---|---|---|---|---|---|
| **OpenClaw** | 全渠道统一 Agent 平台 | 企业/团队/重度个人用户 | 插件化渠道、多层策略链、MCP 兼容、子代理耐久性 | 20+ 渠道 | 生态体量、安全模型深度、生产就绪度 |
| **Hermes Agent** | 学术社区驱动的个人 AI | 开发者/学术研究者 | Profile 管理、委托系统、Dashboard Web UI、学习循环 | Telegram/Discord 等 5-8 个 | 委托 fallback 模型链、Desktop UI、社区文档 |
| **NanoBot** | 轻量级多模型对话框架 | 个人用户/隐私敏感场景 | 会话隔离、WebUI、多模型路由 | Telegram/Discord/WebUI | 隐私保护（identity 文件防护）、WebUI 分叉功能 |
| **PicoClaw** | 全渠道轻量 Agent | 中小企业快速部署 | Agent 协作总线、多协议网关 | Feishu/WeCom/LINE/OneBot/MQTT 等 | 企业级通道覆盖（中国本土优先）、Agent 协作功能 |
| **CoPaw** | 桌面端优先的 AI 助手 | 国内个人消费者 | Tauri 桌面端、一键 OAuth、OpenSandbox 隔离 | Web UI + 桌面端 + 钉钉等 | 本地化体验、零配置上手、国内模型生态深度集成 |
| **LobsterAI** | AI 协作桌面应用 | 国内办公用户 | 桌面端 Native、Cowork 任务通知 | 桌面端为主 | 跨平台桌面体验、任务完成通知系统 |
| **IronClaw** | 下一代 Reborn 架构 | NEAR 生态/企业级部署 | Reborn、项目所有权模型、子代理门控耐久性 | Slack/Discord/WebUI | 持久化审批策略、子代理耐久性规格 |
| **ZeroClaw** | 全渠道可扩展平台 | 智能家居/多场景用户 | 插件化渠道、per-turn 路由、SMS 扩展 | 15+ 渠道含 SMS/Mastodon | 智能家居工具集成（Home Assistant/Spotify/Sonos）|
| **NullClaw** | 轻量个人 Agent | 个人用户 | PII 脱敏、Telegram 内联按钮 | Telegram 为核心 | PII 自动脱敏、cron 调度 |
| **NanoClaw** | 轻量 Nano 方案 | Nano 生态爱好者 | 安全配对、多 Runtime 规划中 | Telegram/Slack | 轻量化、CSPRNG 安全 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一层：高活跃 + 成熟平台期
**OpenClaw** — 体量和成熟度远超同类。 daily Issue 处理量 400+、PR 吞吐 270+、版本节奏稳定。核心挑战从功能开发转为安全深水区和生产可靠性攻坚。

### 🔥 第二层：高活跃 + 快速迭代期（质量冲刺阶段）
| 项目 | 阶段特征 |
|---|---|
| **Hermes Agent** | 功能密集扩展（委托模型灵活性、fallback 模型链），PR 积压需加速消化 |
| **IronClaw** | Reborn 架构重构冲刺期，42 个 PR 待合并但多个为 XL 规模 |
| **CoPaw** | 消化效率最高（Issue 关闭率 51%），桌面端体验欠账是下个攻坚方向 |
| **ZeroClaw** | 渠道快速扩展但 PR 合并严重滞后（积压比 49:1），要防"贡献者流失" |

### ⚡ 第三层：稳定迭代 + 功能收敛期
| 项目 | 阶段特征 |
|---|---|
| **NanoBot** | 稳定的 UX 改进和功能扩展，安全加固和上下文管理是核心方向 |
| **NullClaw** | 小型维护期，集中在 Telegram 体验和 PII 脱敏修复，节奏健康 |
| **LobsterAI** | Cowork 通知链路收尾，功能探索后有纪律回撤，成熟度在提升 |
| **PicoClaw** | 安全审计驱动的快速迭代期，12 个安全 Issue 需要紧急响应 |

### 🌱 第四层：早期孵化期
| 项目 | 阶段特征 |
|---|---|
| **NanoClaw** | 积压 PR 大规模清理阶段，架构决策（多 Runtime 抽象）尚在等待 |

### ⚪ 休眠期
TinyClaw、Moltis、ZeptoClaw — 过去 24 小时无活动记录。

---

## 7. 值得关注的趋势信号

### 趋势1：Agent Runtime 抽象正在成为架构共识

NanoClaw 的 Multi-Runtime SDK 抽象（#1690）、Hermes 的 per-task 委托模型覆盖（#43134）、OpenClaw 的 Context Provenance RFC（#54373）——**三个不同项目的社区在同一周提出了同一方向**。这标志着 Agent 框架正在类比"消息渠道模块化"的成功经验，向"底层模型调用模块化"推进。**对开发者的启示**：在设计新 Agent 框架时，应将模型 runtime 抽象纳入核心架构而非事后补丁。

### 趋势2：安全正在从功能特性升级为架构特性

OpenClaw 的 7 层策略链（#91750）、PicoClaw 批量发现的 12 个安全漏洞、NanoClaw 的配对码 CSPRNG 修复、ZeroClaw 的 per-sender RBAC 需求——所有活跃项目几乎在同一时间遭遇了安全边界的系统性审视。这表明 **Agent 框架的威胁模型正在被社区重新定义**，从早期的"防止 prompt 注入"扩展到"防止渠道权限绕过、防止内部状态泄露、防止 SSRF 和 CSRF"。**对开发者的启示**：安全 SSRF 防护应作为 web_fetch/web_search 等工具的标配，多租户 RBAC 应尽早纳入架构设计。

### 趋势3：消息投递可靠性和"静默失败"是最大用户体验杀手

OpenClaw 的 WhatsApp stall（#84569）、Codex turn stall（#88312）；NullClaw 的 cron 任务子进程不启动（#941）；ZeroClaw 的 cron 重复执行 20 次（#6037）——**静默失败**（用户看到"完成"但实际未执行）是 Agent 产品走向生产环境的最大信任障碍。多个项目同时暴露这一问题，说明 agent 调度系统与运行时之间的可靠性工程是下一个核心攻关领域。

### 趋势4：Windows 桌面端体验正成为新兴痛点集中区

CoPaw 今日连续 4 个 Windows 桌面端 bug（路径超限、Tauri 桥接缺陷、流式输出导致整机卡顿），加上 Hermes Agent 的 macOS launchd 服务回归——**跨平台桌面部署**的复杂度远超预期。对于面向消费者的产品，桌面端体验的一致性正在成为差异化竞争的关键维度。

### 趋势5：LLM 供应商 API 碎片化将长期存在

今日共有 **6 个项目** 报告了 OpenAI 兼容供应商（DeepSeek、MiniMax、KimiCode、GPT-5.x、vLLM、Ollama）的 API 不兼容问题。这不是偶发适配问题，而是**结构性的供应商碎片化**。那些能建立完善的供应商兼容性测试矩阵和参数归一化层的框架，将在长期竞争中获得维护成本优势。

### 趋势6：预算/成本可见性正在浮现

ZeroClaw 今日修复了渠道成本追踪 bug（cost_usd 静默记录为零）并提出了 cached token 成本核算需求。随着 Agent 在生产环境中的调用量增长，**token 级别的成本归因**将从可选功能变为运营刚需。具备精细化成本追踪能力的框架将在企业级采购决策中获得优势。

---

*本报告基于 2026-06-10 各项目的 GitHub OpenAPI 数据窗口生成。项目健康度评估综合考虑了活跃度、积压比、Issue 关闭率、版本节奏四个维度。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

  

# NanoBot 项目动态日报 · 2026-06-10

---

## 1. 今日速览

过去24小时，**NanoBot** 社区保持高活跃度：共处理 **6个活跃 Issue** 和 **23个 PR（11个已合并/关闭，12个待合并）**，无新版本发布。开发节奏稳定，主要集中在 **上下文管理健壮性、WebUI/UX 改进、提供商兼容性（GPT-5.x、ASR）和安全性修复** 上。多个长期 PR 获得推进，显示维护者正系统性提升测试覆盖与核心模块可靠性。社区反馈集中于跨会话历史污染、模型切换灵活性和工具调用解析等高级用例痛点。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展（今日合并/关闭的关键 PR）

今日合并的 PR 显著推进了以下方向：

### ✅ 用户体验与引导优化
- **[#4177] docs: make onboarding friendlier for beginners**  
  重构文档入口，区分 CLI/WebUI/Provider 配置等路径，大幅降低新手上手门槛。  
  → HKUDS/nanobot/pull/4177

### ✅ WebUI 功能增强与修复
- **[#4252] fix(webui): render TeX math delimiters**  
  新增对 `\(...\)`, `\[...\]` 和 `$...$` 的数学公式支持，复用现有 KaTeX 渲染路径，解决 Markdown 中公式无法显示的问题。  
  → HKUDS/nanobot/pull/4252
- **[#4208] feat(webui): add assistant reply fork-from-here**  
  允许用户从任意助手回复处“分叉”出新对话，保留前部上下文，提升复杂任务迭代效率。  
  → HKUDS/nanobot/pull/4208

### ✅ 安全与稳定性强化
- **[#4190] Improve tool call validation strictness**  
  阻止将非对象参数静默修复为 `{}`，确保工具调用仅在合法 JSON 对象下执行，避免潜在误调用风险。  
  → HKUDS/nanobot/pull/4190

### ✅ 扩展功能支持
- **[#3434] feat(lateX): add lateX to feishu channel using codecogs**  
  飞书频道新增 LaTeX 转图片支持（通过 CodeCogs API），需手动开启，满足学术/工程场景公式分享需求。  
  → HKUDS/nanobot/pull/3434
- **[#3400] feat(dream): allow users to decide whether dream can edit USER.md and SOUL.md or not**  
  引入 `allow_edit_identity_files` 配置项（默认 True），防止 Dream 进程意外修改核心身份文件。  
  → HKUDS/nanobot/pull/3400

### ✅ 自动化任务调优
- **[#4265] feat(english-read): change cron schedule from daily to every 2 days**  
  调整英语阅读技能频率为两天一次，减少非必要资源消耗。  
  → HKUDS/nanobot/pull/4265

### ✅ 协议兼容性探索（已关闭）
- **[#4034] Add GitAgent Protocol support (agent.yaml + SOUL.md)**  
  虽标记为 duplicate，但体现了社区对标准化 AI agent 配置格式的关注，可能在未来以更集成方式纳入。  
  → HKUDS/nanobot/pull/4034

> **整体进展评估**：今日合并 PR 覆盖了 UX、安全、多模态（数学/LaTeX）、身份安全控制等多个维度，表明项目正从“功能可用”向“稳定可靠 + 企业级配置”演进。

---

## 4. 社区热点（高互动/高影响力议题）

### 🔥 Issue #4259 — `history.jsonl` 跨会话注入导致上下文污染  
- **链接**: [HKUDS/nanobot/issues/4259](https://github.com/HKUDS/nanobot/issues/4259)  
- **状态**: OPEN，2条评论  
- **分析**: 用户指出 `ContextBuilder` 在构建系统提示时未隔离会话历史，导致私有/混合场景下信息泄露风险。这是对 **隐私与上下文完整性** 的核心诉求，尤其影响多用户/多任务部署环境。  
- **社区信号**: 结合 Issue #4253（按需切换模型），反映用户希望实现 **会话级别的细粒度控制**（模型+历史）。

### 🔧 PR #4263 — 修复 GPT-5.x 使用 `max_tokens` 被拒绝的问题  
- **链接**: [HKUDS/nanobot/pull/4263](https://github.com/HKUDS/nanobot/pull/4263)  
- **状态**: OPEN  
- **分析**: 直接响应 Issue #4261，通过模型名称启发式兼容 `max_completion_tokens`，解决 Azure OpenAI GPT-5.4 等新版模型无法调用问题。属于 **高优先级兼容性修复**，预计很快合并。

### 🐛 PR #4267 — 修复 WebUI 因高频 token 流导致的会话内容丢失  
- **链接**: [HKUDS/nanobot/pull/4267](https://github.com/HKUDS/nanobot/pull/4267)  
- **状态**: OPEN  
- **分析**: 修复间歇性渲染丢失缺陷，提升 WebUI 在快速生成场景下的可靠性。属于 **关键 UI 稳定性补丁**，对终端用户感知影响较大。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue/PR | 描述 | 状态 | 是否已有 fix PR |
|--------|----------|------|------|----------------|
| 🔴 高 | [#4259](https://github.com/HKUDS/nanobot/issues/4259) | `history.jsonl` 跨会话污染 | OPEN | ❌ |
| 🟠 中 | [#4264](https://github.com/HKUDS/nanobot/issues/4264) | `idleCompact` 使用不完整历史记录，导致错误结论写入 | OPEN | ❌ |
| 🟡 中 | [#4061](https://github.com/HKUDS/nanobot/issues/4061) | OpenAI 兼容提供商文本格式 tool calls 未被解析 | OPEN, 1条评论 | ❌（但 [#4263](https://github.com/HKUDS/nanobot/pull/4263) 解决相关模型参数问题） |
| 🟢 低 | [#4262](https://github.com/HKUDS/nanobot/issues/4262) | agent 模式启动首帧显示默认图标而非 `botIcon` | OPEN | ❌ |

> **稳定性总结**：核心风险集中在 **上下文管理一致性**（#4259, #4264），需尽快修复以避免数据污染；工具链兼容性正在积极修复中。

---

## 6. 功能请求与路线图信号

### 明确功能需求
- **[#4253] Per-conversation model override**  
  用户希望根据任务类型（速度 vs 隐私）动态切换模型。此功能需扩展会话配置层，与 #4259 结合可实现 **会话级隔离策略**。
- **[#4262] Start agent mode with configured botIcon**  
  简单的 UI 一致性改进，成本低，高概率在下一版本落地。
- **[#4255] On-demand version check in Settings > About**  
  避免后台轮询，按需检查更新，符合隐私与性能最佳实践。

### 路线图推断
结合近期合并 PR，下一版本可能聚焦：
更强的 **会话隔离机制**（模型 + 历史）
更健壮的 **工具调用管道**（验证 + 回退）
**WebUI 稳定性与功能完善**（分叉、公式、版本检查）
**多提供商深度兼容**（GPT-5.x、ASR 如 StepFun）

---

## 7. 用户反馈摘要

- **痛点**:
  - 高级用户需要 **细粒度的会话控制**（#4253, #4259）
  - **上下文污染** 导致输出质量下降，影响可信度（#4259）
  - **模型提供商碎片化** 带来适配成本（#4261, #4061）
  - **压缩机制设计缺陷** 可能记录错误结论（#4264）

- **满意点**:
  - 对 **WebUI 新功能**（分叉、公式渲染）表示欢迎
  - 认可文档改进（#4177）对新手更友好
  - 积极社区推动 **安全与身份保护**（#3400）

- **使用场景**:
  - 学术研究（LaTeX 渲染、跨会话任务）
  - 私有化部署（本地模型 + 隐私敏感任务）
  - 多模型混合调度（OpenRouter + Llama.cpp）

---

## 8. 待处理积压（长期未响应事项）

| Issue/PR | 类型 | 创建天数 | 建议优先级 |
|----------|------|----------|------------|
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) — Tool call parsing for OpenAI-compatible providers | Bug | 12天 | 🟡 中（已有 #4263 部分解决） |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) — Block workspace escapes via symlinks | Security | 10天 | 🔴 高（安全相关） |
| [#3982/#3983](https://github.com/HKUDS/nanobot/pull/3982) — Agent runner test harness | Test Infra | 16天 | 🟡 中（基础能力） |
| [#4208](https://github.com/HKUDS/nanobot/pull/4208) — WebUI fork-from-here（已合并） | Feature | 5天 | ✅ 已完成 |

> **维护者建议**:
> - 优先审查 **安全类 PR #4119**，防止路径穿越；
> - 推动 **上下文隔离设计讨论**（#4259 + #4253），可合并为 RFC；
> - 考虑设立 **“跨会话隔离”专项**，因其影响范围广且诉求集中。

--- 

*数据来源: GitHub 公开数据 | 生成时间: 2026-06-10 | 分析由 OWL 提供*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-10

---

## 1. 今日速览

过去24小时 Hermes Agent 社区活跃度高：**50 条 Issues 更新**（新开/活跃 45 条，已关闭 5 条）、**50 条 PR 更新**（待合并 43 条，已合并/关闭 7 条），无新版本发布。讨论热点集中在 **macOS launchd 重启回归**（#42006）、**密码在历史记录中脱敏引发的模型二次调用失败**（#43083，P1 Bug）、以及 **Telegram 网关功能扩展**（#21587）。项目整体处于高推进节奏，多个 P1/P2 修复 PR 正在快速流动，积压的待合并 PR 较多（43 条），维护者审阅压力不减。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **7 个 PR 被合并或关闭**，以下为最重要的几项：

| PR | 状态 | 说明 |
|---|---|---|
| [#43151](https://github.com/NousResearch/hermes-agent/pull/43151) | 已合并 | 新增 OpenRC 服务支持，Alpine Linux 用户可原生运行 Hermes Gateway 为系统服务 |
| [#41224](https://github.com/NousResearch/hermes-agent/pull/41224) | 已合并 | 添加 `fallback_models` 配置选项，当委托主模型不可用时自动降级，解决资源受限硬件（如 M1/16GB）的委托失败问题 |
| [#20056](https://github.com/NousResearch/hermes-agent/pull/20056) | 已合并 | **安全修复**：快照脚本 `hermes-snap-*.sh` 写入权限从默认 umask 收紧为 `600`，并在退出时清理孤立文件，防止环境变量中敏感信息泄露 |
| [#42871](https://github.com/NousResearch/hermes-agent/pull/42871) | 已合并 | 修复单机配置下无法编辑默认 Profile 的 SOUL.md 的问题（此前仅在多 Profile 时展示管理入口） |

**当前待合并队列中有几个值得关注的 PR：**

- **[#43067](https://github.com/NousResearch/hermes-agent/pull/43067)** — 修复上下文压缩后 assistant 消息丢失和用户 follow-up 被合并到单轮的问题（P1 Bug fix，有对应 issue #43066）
- **[#43189](https://github.com/NousResearch/hermes-agent/pull/43189)** — 修复 Dashboard 托管的聊天会话无法发现 MCP 服务器工具的问题
- **[#43187](https://github.com/NousResearch/hermes-agent/pull/43187)** — 修复 `bedrock.profile` 配置项不生效的问题（对应 issue #43143）
- **[#41224](https://github.com/NousResearch/hermes-agent/pull/41224)** — 已合并，见上
- **[#43134](https://github.com/NousResearch/hermes-agent/pull/43134) + [#43185](https://github.com/NousResearch/hermes-agent/pull/43185)** — 委托工具支持 **per-task 模型/provider 覆盖**，#43185 为基于 8位 reviewer 反馈的修复跟进，是解决多任务委托场景下模型灵活性不足的关键改进

项目整体向前推进：涵盖了 **安全加固、平台兼容性（Alpine/OpenRC）、委托可靠性、上下文管理正确性** 四个维度。

---

## 4. 社区热点

### Issue #21587 — Telegram Guest Bots、Bot-to-Bot 交互与群聊自动化

- **讨论量**：9 条评论（今日最高），创建于 2026-05-08
- **核心诉求**：Telegram 在 2026-05-07 推出了包含 11 项新功能的 AI Bot 更新，提议 Hermes 跟进支持 **Guest AI Bots**（在任意群聊中 @bot）、**Bot-to-Bot 通信**、**Sticker 支持**和 **Chat Automation**。这对 Hermes 的多 Agent 协作和团队工作流有重要意义。
- **分析**：这是一个长期战略级功能请求，涉及 Gateway 层架构变动。评论数最多但点赞仅 1，说明想法新颖但暂未形成广泛共识。

### Issue #10567 — 添加 `--host` 和 CORS 配置以支持 Tailscale/VPN 远程访问

- **讨论量**：8 条评论，**11 个 👍**（今日所有 issue 中最高点赞）
- **核心诉求**：`hermes dashboard` 默认绑定 `127.0.0.1:9119`，`allow_origin_regex` 硬编码仅允许 localhost。用户希望通过 Tailscale/VPN 远程访问 Web UI dashboard，需要暴露 `--host` 参数和灵活的 CORS 配置。
- **分析**：**这是社区呼声最强的功能请求**，点赞数远超同类。痛点明确：Dashboard 远程访问是大量开发者/运维人员的刚需。技术实现改动小（web_server.py 中两处），优先级较高。值得关注是否有 PR 跟进。

### Issue #43083 — 密码在对话历史中被脱敏后模型第二次工具调用失败（P1 Bug）

- **讨论量**：6 条评论
- **核心诉求**：`chat_completion_helpers.py` 在工具调用参数传入对话历史前会将凭证替换为 `***`。模型读取自身回话历史时得到的是脱敏后的第二次调用参数（含 `***`），导致 API 调用失败。
- **分析**：这是一个 **安全防御（defense-in-depth）与功能正确性的经典矛盾**。脱敏是正确的安全实践，但副作用导致工具执行语义被破坏。需要注意 PR #43067 不直接解决此问题，建议独立 fix。

### Issue #16525 — 将 `model_switch` 暴露为 Agent 可调用工具

- **讨论量**：6 条评论
- **核心诉求**：实现 Agent 自主根据任务复杂度切换模型（而非用户手动 `/model` 命令），实现"自主路由"。
- **分析**：与 #38954（自动角色模型路由）和 #43134（per-task 委托模型覆盖）共同构成了 **模型路由自动化** 的路线图信号。

### Issue #42006 — macOS launchd 重启后 gateway 回落到 detached 模式

- **讨论量**：5 条评论
- **核心诉求**：`hermes update` 后 `launchd_restart()` 因未先 `bootout` 再 `bootstrap` 导致 launchd job 已注册（stopped 状态）而被拒绝，gateway 回落到 detached 模式。
- **分析**：这是一个 **macOS 特定的回归问题**，影响更新后自动恢复服务的用户体验。修复逻辑明确（先 bootout 再 bootstrap），改动范围小，优先级中。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1 — 高优先级

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | 密码脱敏后模型二次工具调用失败 | 🔴 开放 | ❌ 暂无 |
| [#43014](https://github.com/NousResearch/hermes-agent/issues/43014) | cron `deliver=origin` 在 CLI 会话中无法解析投递目标 | 🔴 开放 | ❌ 暂无 |

### P2 — 中优先级

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | macOS launchd 重启失败，gateway 回落 detached | 🔴 开放 | ❌ 暂无 |
| [#43026](https://github.com/NousResearch/hermes-agent/issues/43026) | Gemini OpenAI 兼容 provider 返回 HTTP 400/404 | 🔴 开放 | ❌ 暂无 |
| [#37968](https://github.com/NousResearch/hermes-agent/issues/37968) | cron gateway approvals 环境变量污染（CVSS 7.0） | 🔴 开放 | ❌ 暂无 |

### P3 — 低优先级 / 回归

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#34070](https://github.com/NousResearch/hermes-agent/issues/34070) | Honcho 内存预取在 v0.15.0 冷启动时挂起（#27190 回归） | 🔴 开放 | ❌ 暂无 |
| [#43042](https://github.com/NousResearch/hermes-agent/issues/43042) | Desktop 文件浏览器 ENOENT（session.info CWD 覆盖） | 🔴 开放 | ❌ 暂无 |
| [#43117](https://github.com/NousResearch/hermes-agent/issues/43117) | `hermes plugins enable` 拒绝 pip entry-point 插件 | 🔴 开放 | ❌ 暂无 |
| [#43054](https://github.com/NousResearch/hermes-agent/issues/43054) | Gmail get 仅返回顶层 MIME 部分，嵌套邮件正文丢失 | 🔴 开放 | ❌ 暂无 |
| [#43122](https://github.com/NousResearch/hermes-agent/issues/43122) | 消息 provider 图标在暗色 UI 主题下不可见 | 🔴 开放 | ❌ 暂无 |

**稳定性评估**：当前有 **2 个 P1 Bug 无修复 PR**，其中 #43083 涉及安全与功能的交叉问题需要谨慎设计。macOS launchd 回归（#42006）影响更新流程。整体稳定性中等，建议优先处理 P1 积压。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本的功能

| 方向 | Issue(s) | 信号强度 | 说明 |
|---|---|---|---|
| **委托模型灵活性** | [#16525](https://github.com/NousResearch/hermes-agent/issues/16525), [#38954](https://github.com/NousResearch/hermes-agent/issues/38954), [#43134](https://github.com/NousResearch/hermes-agent/pull/43134) | ⭐⭐⭐⭐⭐ | PR #43134 + #43185 已在审查中，8位 reviewer 参与，说明社区高度重视。per-task 模型覆盖是委托系统的核心缺失能力 |
| **Dashboard 远程访问** | [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | ⭐⭐⭐⭐ | 11 👍，需求明确，改动小，但尚无 PR |
| **上下文压缩正确性** | [#43066](https://github.com/NousResearch/hermes-agent/issues/43066) / PR [#43067](https://github.com/NousResearch/hermes-agent/pull/43067) | ⭐⭐⭐⭐ | P1 Bug fix PR 已在审查，大概率近期合并 |
| **MCP 工具发现** | PR [#43189](https://github.com/NousResearch/hermes-agent/pull/43189) | ⭐⭐⭐ | Dashboard 托管会话的 MCP 发现缺失，PR 已提交 |

### 中期路线图信号

| 方向 | Issue(s) | 说明 |
|---|---|---|
| **Telegram 网关扩展** | [#21587](https://github.com/NousResearch/hermes-agent/issues/21587), [#42696](https://github.com/NousResearch/hermes-agent/issues/42696) | Guest Bots、Bot-to-Bot、inline keyboard 审批按钮，需要 Gateway 层架构调整 |
| **多 Profile 支持** | [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | Dashboard 多 Profile 切换，设计复杂度高 |
| **安全合规** | [#43074](https://github.com/NousResearch/hermes-agent/issues/43074) | OpenSSF Scorecard 工作流，提升供应链安全 |
| **本地 Provider 体验** | [#43028](https://github.com/NousResearch/hermes-agent/issues/43028), [#43052](https://github.com/NousResearch/hermes-agent/issues/43052) | Ollama spinner 超时、local provider overlay 配置 |

---

## 7. 用户反馈摘要

### 真实痛点

1. **远程访问 Dashboard 困难**（#10567）：大量用户通过 Tailscale/VPN 工作，当前硬编码的 localhost CORS 限制是最大摩擦点。用户明确表示"这阻止了远程使用"。

2. **macOS 更新后服务中断**（#42006）：`hermes update` 后 gateway 无法自动恢复为 launchd 管理，需要手动干预。macOS 用户对服务连续性期望高。

3. **密码脱敏导致工具调用失败**（#43083）：安全脱敏与功能正确性的矛盾。用户理解脱敏的必要性，但期望有更好的方案（如仅在显示层脱敏，不在工具调用参数中脱敏）。

4. **委托模型不够灵活**（#16525, #38954）：用户希望 Agent 能自主根据任务复杂度切换模型，而非手动干预。这是 Agent 自主性的核心诉求。

5. **Desktop 体验细节**（#42516, #42767, #42989）：会话排序、上下文统计显示、暗色主题图标可见性等 UI 细节问题持续反馈，说明 Desktop 用户群体在增长。

### 满意点

- Alpine Linux OpenRC 支持（PR #43151）快速合并，社区对平台兼容性扩展反应积极
- 委托 fallback 模型链（PR #41224）解决了资源受限硬件的痛点
- 安全快照权限收紧（PR #20056）体现了项目对安全问题的响应速度

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

### 长期开放的重要 Issue

| Issue | 标题 | 创建日期 | 未响应天数 | 优先级 |
|---|---|---|---|---|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | Dashboard --host 和 CORS 配置 | 2026-04-15 | 56 天 | P3（高需求） |
| [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | Dashboard 多 Profile 切换 | 2026-04-16 | 55 天 | P3 |
| [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) | model_switch 作为 Agent 工具 | 2026-04-27 | 44 天 | P3 |
| [#21587](https://github.com/NousResearch/hermes-agent/issues/21587) | Telegram Guest Bots 等功能 | 2026-05-08 | 33 天 | P3 |
| [#37968](https://github.com/NousResearch/hermes-agent/issues/37968) | cron 环境变量污染（CVSS 7.0） | 2026-06-03 | 7 天 | **P2 安全** |
| [#33865](https://github.com/NousResearch/hermes-agent/issues/33865) | state.db FTS 损坏无检测/修复 | 2026-05-28 | 13 天 | P2（已关闭但问题可能仍存在） |

### 长期开放的 PR

| PR | 标题 | 创建日期 | 未合并天数 | 说明 |
|---|---|---|---|---|
| [#14390](https://github.com/NousResearch/hermes-agent/pull/14390) | 稳定 gateway 运行时 + 恢复绿色测试套件 | 2026-04-23 | 48 天 | P1，涉及测试套件稳定性，长期未合并 |
| [#13314](https://github.com/NousResearch/hermes-agent/pull/13314) | 添加 You.com 作为 web backend | 2026-04-21 | 50 天 | 功能 PR，长期审查中 |
| [#37106](https://github.com/NousResearch/hermes-agent/pull/37106) | 精选默认 skills bootstrap | 2026-06-02 | 8 天 | 功能 PR，审查中 |

**特别提醒**：
- **PR #14390**（48 天未合并）涉及测试套件稳定性，是其他 PR 正确性的基础，建议优先处理
- **Issue #37968**（CVSS 7.0 安全漏洞）已开放 7 天，虽为 P2 但涉及 cron 环境隔离，建议尽快分配 owner
- **Issue #10567**（Dashboard 远程访问）已积压 56 天且社区需求强烈（11 👍），建议评估是否可在近期版本中解决

---

*报告生成时间：2026-06-10 | 数据来源：GitHub NousResearch/hermes-agent | 分析：OWL*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报  
**日期：2026-06-10**

---

### 1. 今日速览

PicoClaw 在过去24小时内保持高活跃度：共处理 20 条 Issue 和 20 条 PR 更新，其中包含 18 个新开/活跃 Issue、2 个已关闭 Issue、15 个待合并 PR、5 个已合并/关闭 PR，并发布一个 Nightly 构建版本（v0.2.9-nightly.20260609.46b29a0a）。安全类问题集中爆发（占今日 Security Issue 的 80%），显示社区对权限控制、SSRF 防护和水合验证等安全边界的关注度显著提升。整体项目处于快速迭代期，稳定性修复与新功能推进并行，但积压的安全修复需引起核心团队重视。

---

### 2. 版本发布

- **Nightly Build v0.2.9-nightly.20260609.46b29a0a**  
  类型：自动化夜间构建，非稳定版。  
  风险提示：此版本由 CI 自动生成，未经充分测试，仅供尝鲜用户和技术验证使用。生产环境请等待正式 Release。  
  变更日志链接：[Compare v0.2.9...main](https://github.com/sipeed/picocaw/compare/v0.2.9...main)

---

### 3. 项目进展

今日合并/关闭的 PR 主要聚焦于 **核心稳定性修复** 和 **关键 Bug 根因治理**：

| PR | 内容摘要 | 影响力 |
|----|--------|-------|
| [#3064](https://github.com/sipeed/picoclaw/pull/3064) | 修复 config migration 中 model name 类型断言未检查导致的 panic | ⭐⭐⭐ 关键健壮性修复 |
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) | 修正 Anthropic claude-sonnet 默认模型 ID 格式（点号 → 连字符），解决首次安装即失败问题 | ⭐⭐⭐ 用户入门体验修复 |
| [#2940](https://github.com/sipeed/picoclaw/pull/2940) | 移除 claude-opus-4-7 的 temperature 参数发送，避免 HTTP 400 错误 | ⭐⭐ 提升主流模型兼容性 |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | 新增 Agent Collaboration Bus，支持跨代理邮箱、协作线程与会话隔离 | ⭐⭐⭐⭐ 重大架构功能推进 |

> **整体前进方向**：项目正从“基础可用性”向“企业级安全与多代理协作”演进。今日合并的 PR 显著降低了新用户首次配置失败率，并为高级用户场景打下基础。

---

### 4. 社区热点

#### 🔥 高互动 Issue
- **[#2404](https://github.com/sipeed/picoclaw/issues/2404)**：请求在 config 中支持 `streaming: true` 以启用 LLM 流式响应（11 条评论，👍1）。反映用户对实时交互体验的强烈需求，尤其针对长文本生成场景。目前尚无官方回应或关联 PR。
- **[#2796](https://github.com/sipeed/picoclaw/issues/2796)**（已关闭）：历史对话中仅显示最后一条用户消息。配套 PR [#2990](https://github.com/sipeed/picoclaw/pull/2990) 存在但尚未合并，表明问题已定位但排期滞后。

#### 🚨 安全焦点
今日由 **YLChen-007** 一次性提交 12 个安全类 Issue（#3068–#3082），覆盖：
- Feishu/WeCom/LINE/OneBot/MQTT 等通道的权限绕过
- `web_fetch` SSRF 防护的多重绕过路径（包括 IPv6 ISATAP、198.18.0.0/15 特殊网段）
- Launcher 的 CSRF 和 CIDR 绕过风险

其中 [#3085](https://github.com/sipeed/picoclaw/pull/3085) 已提 PR 修补 SSRF 中 198.18.0.0/15 缺失问题，其余多数尚无修复方案。

---

### 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否已有 Fix PR |
|--------|------|------|----------------|
| 🔴 Critical | [#3082](https://github.com/sipeed/picoclaw/issues/3082) | Feishu 回复上下文绕过 `allow_from` 权限控制 | 否 |
| 🔴 Critical | [#3072](https://github.com/sipeed/picoclaw/issues/3072) | Launcher 首次设置密码端点存在 CSRF 漏洞 | 否 |
| 🟠 High | [#3077](https://github.com/sipeed/picoclaw/issues/3077) | `web_fetch` SSRF 被 198.18.0.0/15 绕过 | ✅ [#3085](https://github.com/sipeed/picoclaw/pull/3085) |
| 🟠 High | [#3074](https://github.com/sipeed/picoclaw/issues/3074) | `web_fetch` 未识别 ISATAP IPv6 内嵌私有 IPv4 | 否 |
| 🟡 Medium | [#3067](https://github.com/sipeed/picoclaw/issues/3067) | 前端修改 `dm_scope` 后无法持久化保存 | ✅ [#3067](https://github.com/sipeed/picoclaw/pull/3067)（同名 PR） |
| 🟡 Medium | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史消息仅显示最后一条用户输入 | ✅ [#2990](https://github.com/sipeed/picoclaw/pull/2990)（待合并） |

> **建议**：安全类 Critical 漏洞应优先安排修复，尤其是涉及控制平面接管（#3072）和权限绕过（#3082）的问题。

---

### 6. 功能请求与路线图信号

- **流式 HTTP 支持**（[#2404](https://github.com/sipeed/picoclaw/issues/2404)）：用户希望配置中开启 `streaming: true`，当前无替代方案。若实现，将显著提升终端和 Web UI 的响应体验。
- **显式轮换完成信号**（[#2984](https://github.com/sipeed/picoclaw/issues/2984)）：为 WebSocket 客户端增加确定性的 turn-end 事件，对构建可靠前端状态机至关重要。
- **DeltaChat 网关**（[#3063](https://github.com/sipeed/picoclaw/pull/3063)）：拓展去中心化通信通道，符合 PicoClaw 多协议战略。
- **NEAR AI Cloud 支持**（[#2917](https://github.com/sipeed/picoclaw/pull/2917)）：新增 TEE 兼容模型生态选项。

> **预测下一版本重点**：流式交互、安全加固（尤其 SSRF 和权限模型）、Agent 协作原语。

---

### 7. 用户反馈摘要

- **痛点**：
  - 新手配置 Anthropic 模型时因格式错误（如 `claude-sonnet-4.6` vs `claude-sonnet-4-6`）导致首次对话即失败，体验极差。
  - 历史消息不完整严重影响对话连续性，尤其在多轮调试场景中。
  - WebSocket 客户端缺乏清晰的处理完成信号，导致前端状态同步困难。

- **满意点**：
  - 社区积极响应 claude-opus-4-7 的兼容性问题（Issue #2939 → PR #2940），修复周期短。
  - 安全研究者系统性披露漏洞，推动项目主动加固边界。

- **使用场景**：
  - 企业级多通道（Feishu/WeCom/MQTT）集成 + 安全审计需求上升。
  - 多 Agent 协作成为高级用户关注焦点。

---

### 8. 待处理积压

| Item | 类型 | 风险 | 建议行动 |
|------|------|------|--------|
| [#3071](https://github.com/sipeed/picoclaw/issues/3071) | Security | 高（已认证用户可触发配置重载） | 尽快评估是否需要鉴权机制 |
| [#3073](https://github.com/sipeed/picoclaw/issues/3073) | Security | 中（LINE webhook 重放攻击） | 需加入 nonce 或事件 ID 去重 |
| [#2983](https://github.com/sipeed/picoclaw/pull/2990) | PR | 中（修复历史消息显示） | 审核逻辑后合并 |
| [#2988](https://github.com/sipeed/picoclaw/pull/2988) | PR | 低（UI 显示不一致） | 低优先级，可排入下个 patch |

> **特别提醒**：超过 **12 个新报告的安全 Issue 尚无修复计划**，存在被恶意利用风险。建议维护者启动安全响应流程（SIRT），即使暂未公开承认漏洞。

---  
*报告生成时间：2026-06-10 | 数据来源：GitHub API & PicoClaw 仓库*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-06-10

> **数据来源**: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | 统计窗口: 过去24小时

---

## 1. 今日速览

NanoClaw 今日呈现**高吞吐量、低净增**的开发态势：43 条 PR 更新中有 39 条已合并/关闭，同时仅有 4 条新 PR 待合并——积压主要在快速消化。Issue 侧活跃度极低，过去24小时仅 1 条更新且为新开，社区讨论声量不大。**无新版本发布**，项目处于迭代积累期而非发版冲刺期。整体健康度良好：合并节奏通畅，但待合并 PR 数量偏少（4 条），可能意味着高质量新特性或重大修复尚未集中到达评审窗口。

| 指标 | 数值 | 趋势 |
|---|---|---|
| Issues 新开/活跃 | 1 | ⬇ 极低 |
| Issues 已关闭 | 0 | — |
| PR 更新总量 | 43 | 🔺 高活跃 |
| PR 待合并 | 4 | 🟡 偏低 |
| PR 已合并/关闭 | 39 | 🔺 极高 |
| 新版本发布 | 0 | — |

---

## 2. 版本发布

**无新版本发布。** 本次日报省略此节。

---

## 3. 项目进展

今日无"日新 PR 集中合并"窗口——43 条更新中绝大多数（39 条）属于历史积压 PR 的状态跃迁（blocked → closed 或 needs-review → closed），合并/关闭集中在**2 月底至 4 月初提交的存量 PR 上**。这一清理动作本身对项目有积极意义：维护者将长期悬挂的 PR 做了决断性处理，降低了积压噪音。

**值得关注的新进展方向**（来自近期活跃 PR 的摘要内容推断）：

- 🔒 **安全加固** — 配对码改用 CSPRNG（Issue #2722 摘要指向安全修复）正在评审中。
- 📚 **文档体系建设** — 技能定制化文档（#2721）、容器沙箱设计文档（#1084）、安全审计文档（#214）等纳入，说明项目正在补全文档短板。
- 🔧 **演进中的重大特性** — WebUI 控制面板（#212）、Agent 追踪可观测性（#1202）、直接运行器模式（#1285）、安全策略引擎（#1605）、技能市场（#1309）等均被标记为 *Blocked / Pending Closure*，**尚未进入合并轨道**，说明这些特性可能在等待架构讨论或设计统一。

> **解读**：项目整体在"打扫房间"——清历史 PR、补文档、夯实安全基础，但核心新功能仍在孵化或等待决策，短期内可能需要一个架构对齐的动作来解锁这批 blocked PR。

---

## 4. 社区热点

### 🔥 Issue #1690 — Multi-runtime agent SDK abstraction
- **链接**: [nanocoai/nanoclaw Issue #1690](https://github.com/qwibitai/nanoclaw/issues/1690)
- **状态**: OPEN | 👍 3 | 💬 4
- **创建**: chiptoe-svg | 最后更新: 2026-06-09

**诉求分析**：该 Issue 反映社区希望 NanoClaw 能像聚合消息渠道（`/add-telegram`、`/add-slack`）一样，**以模块化 skill 的方式接入不同 Agent Runtime**（Claude、Codex、本地模型）。这是一个架构级需求：定义 `AgentRuntime` 接口，将底层模型调用与上层调度解耦。👍 3 在 NanoClaw 中已属中等热度，且 Issue 由外部贡献者提出并附上实现说明，说明有真实使用场景驱动。这很可能是下一阶段项目的**核心架构决策信号**。

### 🔒 PR #2722 — Fix: use CSPRNG for pairing codes
- **链接**: [nanocoai/nanoclaw PR #2722](https://github.com/qwibitai/nanoclaw/pull/2722)
- **状态**: OPEN (待合并) | 作者: dweekly
- **类型**: 安全修复

**诉求分析**：P 配码保护聊天注册流程，首个配对者可能被提升为 owner。原实现使用 `Math.random()` 生成配对码，可被预测。PR 将其替换为 `crypto.randomInt`（CSPRNG）。这是**低风险高价值的安全修复**，逻辑清晰，应优先合并。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 |
|---|---|---|
| 🔴 安全 | 配对码生成使用 `Math.random()`，可被预测导致未授权注册 | PR #2722 已提，待合并 |
| 🟠 中 | WebUI 控制面板（#212）长期 blocked，功能不完整 | 已关闭（未合并） |
| 🟡 低 | 多处历史 PR 文档类问题已清理 | 已关闭 |

**关键风险**：配对码安全问题是当前唯一已知待修复的安全隐患（PR #2722 正在审查）。该修复范围小、无破坏性变更，建议尽快合并。

---

## 6. 功能请求与路线图信号

从 Issues 和已关闭/blocked PR 中识别出的功能方向：

| 方向 | 来源 | 信号强度 | 判断 |
|---|---|---|---|
| **多 Runtime 抽象层** | Issue #1690 | ⭐⭐⭐ 高 | 架构级，社区主动实现，大概率纳入路线图 |
| **安全策略引擎** | PR #1605 (blocked) | ⭐⭐⭐ 高 | 跨度大（用户门控、工具限制、只读挂载），待架构对齐 |
| **直接运行器（无 Docker）** | PR #1285 (blocked) | ⭐⭐ 中 | 降低部署门槛，需求明确，但被 blocked |
| **技能市场/注册表** | PR #1309 (blocked) | ⭐⭐ 中 | 生态扩展关键，但依赖核心架构稳定 |
| **Agent 追踪可观测性 + WebUI** | PR #1202 (blocked) | ⭐⭐ 中 | 可观测性需求强烈，可作为独立模块先行 |
| **CSPRNG 安全修复** | PR #2722 | ⭐⭐⭐ 高 | 应尽快合并，不依赖路线图 |

**路线推测**：当前项目可能处于 **"核心稳定化 → 架构扩展化"** 的过渡阶段。多 Runtime 抽象一旦落地，会解锁技能市场、安全策略引擎、直接运行器等一系列 blocked PR。

---

## 7. 用户反馈摘要

基于 Issue #1690（评论 4 条）及相关 PR 摘要提炼：

| 维度 | 反馈 |
|---|---|
| **痛点** | 用户希望自由切换底层 Agent Runtime，但当前架构硬编码依赖特定 SDK，扩展成本高 |
| **使用场景** | 多模型混合部署（Claude + Codex + 本地模型），按业务场景路由不同 Agent |
| **满意点** | 渠道层（Telegram/Slack）的模块化设计受到认可，用户希望 Agent Runtime 层复用同样模式 |
| **不满意** | 安全审计类文档、架构设计文档不够完善（多个文档类 PR 正在补位） |
| **隐含诉求** | 贡献者希望有清晰的贡献规范和 PR 流程指引（部分 PR 被要求"加 SKILL.md"后才推进） |

---

## 8. 待处理积压

以下为重点关注项，提醒维护者：

| 优先级 | 项目 | 说明 |
|---|---|---|
| 🔴 **紧急合并** | **PR #2722** — CSPRNG pairing fix | 安全风险，修复范围小，无破坏性变更，应在本日内/本周内完成评审合并 |
| 🟠 **需要决策** | **Issue #1690** — Multi-runtime abstraction | 架构级提案，已有外部贡献者实现。需维护者明确是否接受此方向、接口规范如何定义。阻塞下游多个 PR 合并 |
| 🟡 **需要解阻塞** | **PR #1285** — Direct runner (no Docker) | 降低部署门槛的重要功能，blocked 超过 2 个月。需明确阻碍因素 |
| 🟡 **需要解阻塞** | **PR #1605** — Security policy engine | 跨度大的安全特性，supersedes #1360。需架构对齐后推进 |
| 🟡 **需要验收** | **PR #2721** — Customizing docs | 文档体系建设的一部分，建议尽快 review 后合并 |

---

*报告生成时间: 2026-06-10 | 数据来源: GitHub API | 分析仪: OWL*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw 项目动态日报 · 2026-06-10

生成时间：2026-06-10 | 数据窗口：过去 24 小时

---

## 1. 今日速览

NullClaw 今日处于高活跃修复期——过去 24 小时内 **5 条 Issue 更新**（1 开 / 4 闭）、**7 条 PR 更新**（1 开 / 6 闭），无新版本发布。无版本发布并非停滞，而是多个修复 PR 集中在今日完成合并/关闭，表明维护者在消化此前数周积累的 Bug 报告。整体来看，项目从 5 月下旬暴露的一批 PII 脱敏回归、Telegram 交互问题及配置缺陷正在被系统性清理，短期健康度良好。**唯一值得关注的信号**是 Issue #941（Agent cron 任务不产生子进程）为新开且尚无对应 PR，可能是下一个需要优先处理的阻塞性 Bug。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 6 个 PR 可按功能域归类如下：

### 🔒 PII 脱敏修复

| PR | 说明 |
|---|---|
| [PR #945](https://github.com/nullclaw/nullclaw/pull/945) | **fix(redaction): 拒绝 ISO 日期/时间格式被误判为电话号码** — 为 `matchPhone` 添加 `isDateLike()` 守卫，解决 `date` 命令输出被 `[PHONE_X]` 占位符替换的问题。直接修复 Issue #944。 |

### 📱 Telegram 交互修复

| PR | 说明 |
|---|---|
| [PR #943](https://github.com/nullclaw/nullclaw/pull/943) | **fix(telegram): 内联按钮按下后显示输入指示器** — 解决 `callback_query` 场景下"typing…"指示器缺失的问题（Issue #942）。长耗时模型调用期间用户不再面对静默。 |

### 🧠 Agent 配置与模型发现修复

| PR | 说明 |
|---|---|
| [PR #939](https://github.com/nullclaw/nullclaw/pull/939) | **fix(agent): 使 `compact_context` 标志真正生效** — 该标志此前是"死代码"（解析/序列化存在，但运行时从未读取）。修复后用户可自主控制是否启用上下文压缩（Issue #937）。 |
| [PR #940](https://github.com/nullclaw/nullclaw/pull/940) | **fix(models): 自定义 OpenAI 兼容供应商通过 `/v1/models` 查询真实模型列表** — 此前选择自定义供应商后 `/models` 菜单仅回退到硬编码的 Claude 模型列表（Issue #936）。 |

### 🔌 新供应商集成

| PR | 说明 |
|---|---|
| [PR #947](https://github.com/nullclaw/nullclaw/pull/947) | **feat(providers): 新增 Evolink 作为 OpenAI 兼容供应商** — Evolink 是多模型网关（GPT-5、Gemini、DeepSeek、豆包、MiniMax 等），通过单一 `/v1/chat/completions` 端点暴露，Bearer-token 认证。 |

### 🧬 长期功能分支

| PR | 说明 |
|---|---|
| [PR #711](https://github.com/nullclaw/nullclaw/pull/711) | **feat: Cross Memory（跨 Agent 实例记忆同步）** — 为 nullclaw 添加确定性记忆事件流，使 Agent B 能获知 Agent A 记录的偏好。自 2026-03-23 创建至今（近 3 个月），今日被关闭。关闭原因需关注——是合并后 revert、设计变更还是搁置，作者和审阅者需同步结论。 |

**整体推进评估**：今日合并质量较高——5 个修复 PR 各对应一个已报告 Issue，形成精确的"发现-修复-关闭"闭环，说明社区反馈流转效率稳定。功能层面新增 Evolink 供应商扩展了模型的覆盖面，但跨记忆同步的 PR #711 关闭方式需要进一步确认。

---

## 4. 社区热点

### Issue #941 — Agent 类型 Cron 任务不产生子进程，Telegram 投递永不触发
🔗 [nullclaw/nullclaw#941](https://github.com/nullclaw/nullclaw/issues/941)
- **状态**：OPEN · 1 条评论 · 创建于 2026-05-31
- **核心诉求**：用户通过 `schedule` 创建 `job_type: "agent"` 定时任务，并正确配置 `delivery_mode: "always"` + `delivery_channel: "telegram"`，任务被标记为 completed，但 Agent 子进程从未启动，Telegram 端收不到任何消息。
- **分析**：这是今日唯一处于 OPEN 状态且尚未有对应 PR 的 Issue。涉及调度系统与 Agent 运行时的接合部，是典型的"静默失败"——用户看到任务完成却收不到输出，体验最恶劣。Issue 由 `weissfl` 报告（同一位作者在今日有 #936、#937、#942 被关闭），说明该用户在系统性测试 Agent 投递链路。**建议优先级：高，需要复现 + fix。**

### Issue #936 — 自定义 OpenAI 兼容供应商被硬编码 Claude 模型替换
🔗 [nullclaw/nullclaw#936](https://github.com/nullclaw/nullclaw/issues/936)
- **状态**：CLOSED · 由 [PR #940](https://github.com/nullclaw/nullclaw/pull/940) 修复
- **分析**：这是"自托管模型 + nullclaw"工作流的关键路径 Bug。当用户配置 `base_url` 指向自己的 Ollama、LiteLLM 或其他网关时，模型选择界面形同虚设。此修复使得 nullClaw 真正对任意 OpenAI 兼容端点可用，对自托管社区意义重大。

### Issue #944 — PII 脱敏将日期/时间输出误判为电话号码
🔗 [nullclaw/nullclaw#944](https://github.com/nullclaw/nullclaw/issues/944)
- **状态**：CLOSED · 由 [PR #945](https://github.com/nullclaw/nullclaw/pull/945) 修复
- **分析**：此 Bug 由 2026-05 的 commit `41cdb493`（`enable_pii_redaction` 默认开启）引入，是**回归性缺陷**。Agent `date` 命令输出被 `[PHONE_X]` 占位符替代，严重削弱 Agent 可用性。修复及时（从发现到关闭 ~7 天）。

---

## 5. Bug 与稳定性

按严重程度排列：

| # | 问题 | 严重性 | 状态 | Fix PR | Issue |
|---|------|--------|------|--------|-------|
| 1 | **Agent cron 任务子进程不启动，Telegram 投递静默失败** | 🔴 高 | 开放中 | 暂无 | [#941](https://github.com/nullclaw/nullclaw/issues/941) |
| 2 | **PII 脱敏将 `date` 命令输出误匹配为电话号码** | 🟡 中 | 已关闭 | [#945](https://github.com/nullclaw/nullclaw/pull/945) | [#944](https://github.com/nullclaw/nullclaw/issues/944) |
| 3 | **自定义供应商不被查询，菜单列表回退到硬编码 Claude 模型** | 🟡 中 | 已关闭 | [#940](https://github.com/nullclaw/nullclaw/pull/940) | [#936](https://github.com/nullclaw/nullclaw/issues/936) |
| 4 | **Telegram 内联按钮按下后无 typing 指示器（5~30s 静默）** | 🟢 低 | 已关闭 | [#943](https://github.com/nullclaw/nullclaw/pull/943) | [#942](https://github.com/nullclaw/nullclaw/issues/942) |
| 5 | **`compact_context` 配置标志为死代码** | 🟢 低 | 已关闭 | [#939](https://github.com/nullclaw/nullclaw/pull/939) | [#937](https://github.com/nullclaw/nullclaw/issues/937) |

**稳定性趋势**：5 个 Bug 中 4 个已在今日解决，修复响应速度从 Issue 创建到 PR 关闭约 7~12 天，整体回归周期在合理范围内。唯一遗留的 #941（调度/子进程）可能涉及更深层的运行时问题，需跟进。

---

## 6. 功能请求与路线图信号

### 待合并 PR

| PR | 说明 | 状态 |
|---|---|---|
| [PR #946](https://github.com/nullclaw/nullclaw/pull/946) | **fix(agent): 按 `tool_filter_groups` 在系统提示文本中过滤工具** — 仅将内置工具和"always"分组的 MCP 工具包含在文本系统提示中，动态分组 MCP 工具的文本描述被移除（仍通过原生 API 工具调用下发）。移除 `ParallelToolCallPlan`。 | **OPEN** |

**路线图信号解读**：

- **工具过滤与提示词精简**（PR #946）：此 PR 处于开放状态，方向是减少系统 prompt 中冗余的工具定义文本，降低 token 消耗、提升推理质量。尤其对 MCP 工具有大量动态分组的部署场景有意义。如果设计评审通过，很可能成为下个版本的亮点功能。
- **跨 Agent 记忆同步**（PR #711 已关闭）：虽然此 PR 今日被关闭，但它代表了"多实例协作"方向的需求。关闭原因需弄清楚——如果被其他方案替代，说明该需求仍在路线图中。
- **供应商生态扩展**：Evolink 的加入（PR #947）延续了 nullClaw 对多模型供应商的策略。社区对未来方案（如 Ollama、LiteLLM 的更好支持 #940 修复）期望较高，供应商兼容性将是持续的路线图主题。

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点来源 | 场景描述 |
|---|---|
| **Issue #941** `weissfl` | 用户使用 Agent 定时任务 + Telegram 投递的组合场景（"设置后忘记"型自动化任务）。任务标记完成但 Telegram 端无消息——静默失败是最糟糕的体验，因为用户没有任何渠道感知问题。 |
| **Issue #944** `vernonstinebaker` | Agent 执行 `date` 命令查看系统时间，输出被 PII 脱敏规则破坏。这类"Agent 执行系统工具输出被误清洗"问题会系统性削弱 Agent 能力——不仅是 `date`，未来任何含数字序列的输出（IP 地址、版本号、MAC 地址等）都可能被误匹配。 |
| **Issue #936** `weissfl` | 用户使用自托管模型网关（Ollama/LiteLLM 等），期望 nullClaw 能真正发现并使用供应商的模型列表。此前等同于被迫使用硬编码的 Claude 回退列表，自托管工作流完全断裂。 |
| **Issue #942** `weissfl` | 用户通过 Telegram 内联按钮与 Agent 交互时，数秒至数十秒无反馈——无法区分"已收到"还是"卡住了"。这是对话式 AI 产品的核心 UX 问题。 |

### 用户群像

- **`weissfl`** 是本周最活跃报告者（4 个 Issue），覆盖了 Agent 调度、配置、Telegram 交互、模型发现四个完全不同模块，描述详尽。很可能是深度用户或集成测试者。
- **`vernonstinebaker`** 贡献了 PII 脱敏 Bug 报告和两项 PR（#945 #946），是兼具问题发现和修复能力的贡献者。

---

## 8. 待处理积压

### 🔴 需要立即关注

| 项目 | 等待时长 | 问题 |
|---|---|---|
| **[Issue #941](https://github.com/nullclaw/nullclaw/issues/941)** — Agent cron 子进程不启动 | 创建 ~10 天，仍 OPEN，无 PR | 调度 + Agent 运行时跨模块问题，需复现和排查。影响所有使用 Agent 定时任务的用户。 |

### 🟡 建议近期跟进

| 项目 | 等待时长 | 问题 |
|---|---|---|
| **[PR #946](https://github.com/nullclaw/nullclaw/pull/946)** — 工具过滤系统提示 | OPEN，创建于 2026-06-03 | 需要设计评审。涉及 prompt 工程方向的变动，可能引入工具不可见的风险。 |
| **[PR #711](https://github.com/nullclaw/nullclaw/pull/711)** — Cross Memory（跨实例记忆同步） | **创建 ~80 天后于今日关闭**，需确认关闭原因 | 是设计变更、被替代方案取代、还是单纯搁置？应给社区一个明确结论，因为这个 PR 承载了"多 Agent 协作"的重要需求。 |

### 💡 积压风险提示

目前 nullClaw 的 Issue backlog 没有出现长期未响应的陈旧问题（全部 Issue 创建于 2026-05-27 之后），说明维护者的反馈流转节奏良好。但需注意：**当修复速度超过新功能开发速度时（本期 5 fix PR + 1 feature addition），版本发布节奏应跟上**，否则用户可能面临"修了很多但拿不到新版本"的体验断层。

---

> **OWL 日报小结**：NullClaw 今日是一次集中的"Bug 清扫日"，4 个中期积累的问题被一次性解决，PII 脱敏回归、Telegram UX 和自托管供应商支持均得到改善。当前唯一阻塞点是 Agent 调度子进程的静默失败（#941）。建议维护者在下个版本中优先覆盖 #941 + PR #946 的工具过滤功能。

---

*数据来源：GitHub API · 报告范围：2026-06-09 活动窗口 · 由 OWL 自动生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-10

---

## 1. 今日速览

IronClaw 今日处于**高活跃开发期**，过去 24 小时内 Issues 更新 47 条（新开/活跃 42 条，关闭 5 条），PR 更新 50 条（待合并 42 条，已合并/关闭 8 条），无新版本发布。项目核心工作集中在 **Reborn 生产化就绪（Production Cutover Readiness）**、**WebUI v2 端到端测试覆盖**、**项目级自动化所有权模型重构**以及**安全与审计加固**四条主线上。多个 XL 规模 PR 同日提交，显示核心团队正处于密集冲刺阶段。值得关注的是，新贡献者（contributor: new）也开始在 LLM 提供者和扩展功能层面提交 PR，社区贡献面有所扩大。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的 PR（8 条）

| PR | 说明 |
|---|---|
| [#4604](https://github.com/nearai/ironclaw/issues/4604) | 关闭：Reborn WebUI v2 缺少浏览器驱动全栈 E2E 测试 → 已由 #4632 Epic 及配套子任务承接 |
| [#4609](https://github.com/nearai/ironclaw/issues/4609) | 关闭：WebChat v2 认证审计 → 已分解为具体测试子任务 |
| [#4591](https://github.com/nearai/ironclaw/issues/4591) | 关闭：Operator 命令平面基础 → 已完成路由/Handler 骨架搭建 |
| [#4447](https://github.com/nearai/ironclaw/issues/4447) | 关闭：OpenAI 兼容 API 迁移收尾 → 兼容性/安全测试已合并 |
| [#4446](https://github.com/nearai/ironclaw/issues/4446) | 关闭：投影流到 OpenAI 兼容 SSE 转换 → 已合并 |

### 推进中的重要开放 PR（精选）

- **[#4663](https://github.com/nearai/ironclaw/pull/4663) · feat(reborn): project-scoped automation ownership core model** — 项目级自动化所有权核心模型实现，引入 `CommunicationPreferenceKey::project(tenant, project)`，以项目为作用域替代原有的 agent-keyed 共享作用域，在线程所有权不明确时 fail-closed。这是项目治理模型的关键重构。

- **[#4664](https://github.com/nearai/ironclaw/pull/4664) · refactor(reborn): project vocabulary on the product surface** — 与 #4663 堆叠，完成产品表面（facade 方法 + DTO）的项目词汇统一重命名，使整个项目所有权栈从设计到表面一致。

- **[#4656](https://github.com/nearai/ironclaw/pull/4656) · feat(reborn): WU-C2 durable gate resolution store + capacity counter** — 子代理门控决议的持久化后端，使等待子代理的父运行在主机重启后仍能存活，是子代理耐久性规格（§1）的关键实现。

- **[#4659](https://github.com/nearai/ironclaw/pull/4659) · fix SSO operator WebUI auth** — 修复 SSO 部署中 env bearer token 作为操作员凭证与普通 SSO 会话的隔离问题，确保权限边界正确。

- **[#4660](https://github.com/nearai/ironclaw/pull/4660) · fix Reborn Docker production storage opt-in** — 为 `Dockerfile.reborn` 启用 `postgres` 特性，使 Docker 镜像可运行生产级 Reborn 存储路径，同时保持本地开发默认使用 `local-dev`。

- **[#4661](https://github.com/nearai/ironclaw/pull/4661) · feat(extensions): read-only NEAR mainnet first-party extension** — 新贡献者提交的 NEAR 主网只读扩展，暴露 6 个只读能力，全部通过主机 `RuntimeHttpEgress` 路由，统一受网络策略和字节计量约束。

- **[#4650](https://github.com/nearai/ironclaw/pull/4650) · fix(llm): drop temperature for models that reject it** — 修复 OpenAI 推理模型（o1/o3/o4, gpt-5.x）和 Claude Opus 4.7/4.8 因显式 `temperature` 参数返回 400 的问题，改为按模型粒度而非仅按提供者粒度剔除不支持参数。

- **[#4613](https://github.com/nearai/ironclaw/pull/4613) · Implement Reborn persistent approval policies** — 实现持久化审批策略存储，支持作用域化的允许/查找/撤销，并将 `AlwaysAllow` 通过 Reborn 审批交互和主机运行时授权注入进行连线。

**整体判断**：项目在 Reborn 生产化、子代理耐久性、项目所有权模型、安全审计和 WebUI 测试覆盖五个方向上同步推进，多条大型 PR 处于同日提交状态，预计未来 1-2 周内将迎来密集的合并窗口。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 热度信号 | 核心诉求 |
|---|---|---|
| **[#3026](https://github.com/nearai/ironclaw/issues/3026) · Epic: Reborn production wiring and cutover readiness** | 3 条评论，P0 级别，跨多个子任务引用 | 这是当前最核心的生产化 Epic，要求建立完整的生产图构建、验证、报告和流量阻断机制。多个子 PR（#4551, #4620, #4621）均以其为父项，显示这是整个团队的首要目标。 |
| **[#4642](https://github.com/nearai/ironclaw/issues/4642) · Strict-mode providers' null-for-unset-optionals rejected** | 1 条评论，bug 标签 | 严格模式 LLM 提供者对未设置的可选参数发送 `null`，但能力端口验证器按原始（非 nullable）模式检查导致拒绝。影响大多数第一方工具，是一个跨提供者的兼容性缺陷。 |
| **[#4548](https://github.com/nearai/ironclaw/issues/4548) · Chat completion duplicate `model` field (DeepSeek 400)** | 1 条评论，bug 标签 | 当请求包含 tools 时，JSON 请求体出现两个顶层 `model` 字段，DeepSeek API 返回 400。这是一个特定提供者的序列化 bug。 |
| **[#4647](https://github.com/nearai/ironclaw/issues/4647) · Unified (omni) search across threads, skills, extensions, and memory** | enhancement, P1 | Reborn WebUI v2 缺少统一搜索，用户无法跨线程、消息、文件、扩展、技能和记忆进行一站式搜索。现有前端命令面板是仅前端的部分实现。 |
| **[#4644](https://github.com/nearai/ironclaw/issues/4644) · Universal attachments across all channels** | enhancement, P1 | 附件在 v1/v2 栈上工作但在 Reborn 上被静默丢弃，且格式支持逻辑在多个调用点重复。需要统一的附件管道和可扩展格式注册表。 |

### 热点 PR

- **[#4600](https://github.com/nearai/ironclaw/pull/4600) · Add Slack personal DM outbound targets** — 实现 Slack 个人 DM 目标授权，保持后端合同通道中立，是触发器交付默认出站计划的 Phase 4 C2。
- **[#4559](https://github.com/nearai/ironclaw/pull/4559) · Agent-driven Trace Commons onboarding via invite link** — 用户粘贴单个邀请链接到 IronClaw 聊天中，代理收集两次同意并向 Trace Commons 服务器注册客户端，替代旧的需要 ~15 个 CLI 参数的流程。

---

## 5. Bug 与稳定性

### 严重（影响核心功能）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| **[#4642](https://github.com/nearai/ironclaw/issues/4642)** | 严格模式提供者 `null` 可选参数被能力端口验证器拒绝，影响大多数第一方工具 | 🔴 开放中 | 暂无 |
| **[#4548](https://github.com/nearai/ironclaw/issues/4548)** | DeepSeek 请求体重复 `model` 字段导致 400 | 🔴 开放中 | 暂无 |
| **[#4587](https://github.com/nearai/ironclaw/issues/4587)** | Minimax 提供者配置后无法使用，密钥元数据读取失败 | 🔴 开放中 | 暂无 |

### 中等（影响特定场景）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| **[#4640](https://github.com/nearai/ironclaw/issues/4640)** | Google Calendar `list_events` 返回最旧/无序事件，缺少 `timeMin` 默认值和 `singleEvents/orderBy` | 🔴 开放中 | 暂无 |
| **[#4575](https://github.com/nearai/ironclaw/pull/4575)** | `ResourceScope::system()` JSON 往返失败（序列化成功但反序列化拒绝控制字节） | 🟡 PR 开放中 | [#4575](https://github.com/nearai/ironclaw/pull/4575) |
| **[#4650](https://github.com/nearai/ironclaw/issues/4650)** | OpenAI 推理模型和 Claude Opus 4.7/4.8 因 `temperature` 参数返回 400 | 🟡 PR 开放中 | [#4650](https://github.com/nearai/ironclaw/pull/4650) |

### 低（代码质量/架构）

| Issue | 描述 | 状态 |
|---|---|---|
| **[#4666](https://github.com/nearai/ironclaw/issues/4666)** | `slack_host_state.rs` 达 2,823 行，接近 3,000 行上限 | 跟踪中 |
| **[#4665](https://github.com/nearai/ironclaw/issues/4665)** | `slack_host_beta.rs` 达 3,359 行，超过阈值需分解 | 跟踪中 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 信号强度 | 判断 |
|---|---|---|---|
| **统一搜索（Omni Search）** | [#4647](https://github.com/nearai/ironclaw/issues/4647) | P1, enhancement | 高概率纳入下一版本。需求明确（跨线程/消息/文件/扩展/技能/记忆搜索），现有实现被标注为"碎片化且部分不诚实"。 |
| **跨渠道通用附件** | [#4644](https://github.com/nearai/ironclaw/issues/4644) | P1, enhancement | 高概率。Reborn 上附件被静默丢弃是明显的功能缺口，且 v1 上格式支持逻辑重复。 |
| **Slack 个人/团队代理路由** | [#4625](https://github.com/nearai/ironclaw/issues/4625) | P1, enhancement | 中高概率。与 [#4600](https://github.com/nearai/ironclaw/pull/4600)（Slack 个人 DM 出站目标）PR 方向一致，显示团队已在推进 Slack 渠道深化。 |
| **管理员共享工具与技能** | [#4628](https://github.com/nearai/ironclaw/issues/4628) | P1, high-risk, enhancement | 中概率。多租户场景的核心需求，但标记为高风险，可能需要更多设计评审。 |
| **Reborn/Crabshack 遗留代码清理** | [#4629](https://github.com/nearai/ironclaw/issues/4629) | high-risk, refactoring | 中概率。迁移完成后清理双轨运行时代码和配置，是技术债务管理的必然步骤。 |
| **NEAR 主网扩展** | [#4661](https://github.com/nearai/ironclaw/pull/4661) | new contributor, PR 开放中 | 中高概率。已有实现 PR，只读扩展风险低，且通过标准 `RuntimeHttpEgress` 路由。 |
| **Google OAuth 凭证统一** | [#4657](https://github.com/nearai/ironclaw/issues/4657) | enhancement | 中概率。改善用户体验（一次认证覆盖多个 Google API），但需要跨扩展协调。 |

---

## 7. 用户反馈摘要

### 痛点

1. **LLM 提供者兼容性问题频发**：多个 Issue（#4642, #4548, #4587, #4650）集中在不同 LLM 提供者的兼容性上——严格模式 `null` 参数、重复字段、不支持的参数、密钥读取失败。这表明 IronClaw 的多提供者抽象层在面对各提供者 API 差异时仍有大量边界情况未覆盖。

2. **Reborn 功能缺口明显**：附件在 Reborn 上被静默丢弃（#4644）、Google Calendar 返回错误结果（#4640）、缺少统一搜索（#4647）——用户从 v1 迁移到 Reborn 时遇到的功能降级问题正在积累。

3. **认证体验碎片化**：用户完成一次 Google OAuth 授权后，仍可能遇到另一个认证门槛（#4657）；SSO 部署中操作员凭证与普通用户会话的隔离问题（#4659）也反映了认证模型的复杂性。

### 满意信号

- **安全审计体系持续加固**：多个 PR（#4565, #4563, #4567, #4568, #4569）围绕安全审计边界、凭证通道出口拦截、Hook 隔离、扇出上限等展开，显示项目在安全层面的投入力度。
- **子代理耐久性**（#4656）和**持久化审批策略**（#4613）的推进表明项目正在解决生产环境中的可靠性痛点。
- **新贡献者参与**：NEAR 扩展（#4661）和 temperature 修复（#4650）来自新贡献者，显示项目对外部贡献的开放性。

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建日期 | 状态 | 风险 |
|---|---|---|---|
| **[#88](https://github.com/nearai/ironclaw/issues/88) · Security hardening (device pairing, elevated mode, safe bins, media URL validation)** | 2026-02-14 | 开放，1 条评论 | ⚠️ 创建已近 4 个月，涉及设备配对、提升模式、安全 bin 和媒体 URL 验证等多个安全特性，优先级 P2-P3 但长期未推进 |
| **[#4642](https://github.com/nearai/ironclaw/issues/4642) · Strict-mode providers null rejection** | 2026-06-09 | 开放，无 fix PR | ⚠️ 影响大多数第一方工具，跨提供者兼容性问题，需尽快分配 owner |
| **[#4587](https://github.com/nearai/ironclaw/issues/4587) · Cannot configure Minimax provider** | 2026-06-09 | 开放，无 fix PR | ⚠️ 提供者完全不可用，影响使用 Minimax 的用户 |

### 需关注的架构债务

| Issue | 描述 | 建议 |
|---|---|---|
| **[#4666](https://github.com/nearai/ironclaw/issues/4666)** | `slack_host_state.rs` 达 2,823 行 | 每次 PR 应缩短而非延长，需制定分解计划 |
| **[#4665](https://github.com/nearai/ironclaw/issues/4665)** | `slack_host_beta.rs` 达 3,359 行，超阈值 | 候选拆分：事件路由挂载、频道路由管理 API、出站目标提供者接线 |

### 积压 PR 风险

当前有 **42 条 PR 待合并**，其中多条为 XL 规模（#4600, #4559, #4664, #4663, #4656, #4661, #4492 等）。如此大量的开放 PR 可能导致合并冲突和审查瓶颈，建议团队优先确定合并顺序，特别是存在堆叠依赖的 PR 组（#4662 → #4663 → #4664）。

---

*数据来源：GitHub nearai/ironclaw，统计窗口：2026-06-09 至 2026-06-10。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-06-10

> **项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

| 维度 | 数据 |
|---|---|
| Issues 新开/活跃 | 2 条 |
| PR 合并/关闭 | 4 条 |
| PR 待合并 | 1 条 |
| 新版本发布 | 0 个 |
| 近 24h 活跃度 | ⭐⭐⭐☆☆ 中等活跃（有持续迭代但产出收敛） |

**总结**：LobsterAI 今日处于稳定迭代期，核心方向聚焦于 **Cowork 任务完成通知系统的构建与收尾**——一天内密集关闭了 3 个关联 PR。同时收到 2 个社区需求 Issue，分别指向 Hermes Agent 集成规划与跨模型子任务协作。无新版本发布。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的 PR（共 4 条）

| # | 链接 | 说明 | 状态 | 工作方向 |
|---|---|---|---|---|
| #2130 | [feat: add task completion notifications](https://github.com/netease-youdao/LobsterAI/pull/2130) | 为 Cowork 会话添加隐私安全的任务完成系统通知；支持 macOS Dock 角标计数与 Windows 任务栏激活提醒 | 已合并 ✅ | 功能新增 |
| #2134 | [fix: restore LobsterAI from task completion notifications](https://github.com/netease-youdao/LobsterAI/pull/2134) | 修复主窗口关闭/销毁后从通知恢复 LobsterAI 渲染器的逻辑；增加 macOS 通知中心点击后恢复主窗口的支撑 | 已合并 ✅ | 功能新增 / 修复 |
| #2136 | [feat: data backup and migration](https://github.com/netease-youdao/LobsterAI/pull/2136) | 增加了数据备份与迁移能力（渲染器、文档、主进程涉及） | 已关闭（未合并） | 功能新增（撤销） |
| #2135 | [chore: temporary close databackup](https://github.com/netease-youdao/LobsterAI/pull/2135) | 临时关闭了 data backup 功能的开关 | 已关闭（未合并） | 维护操作 |

**小结**：项目当前集中交付 **Cowork 任务通知链路的完整闭环**（触发 → 系统通知 → 恢复主窗口）并短暂探索后回撤了数据备份/迁移的 PR，整体推进方向明确、纪律性较强。

---

## 4. 社区热点

> 今日讨论较少的 Issues/PRs：#2131 和 #2132。

| # | 链接 | 讨论热度 | 核心诉求 |
|---|---|---|---|
| #2132 | [跨模型子任务调动问题](https://github.com/netease-youdao/LobsterAI/issues/2132) | 🔁 关注度高 | 用户提出一套清晰的跨模型子任务协作方案（同模型子任务 → 借鉴到跨模型），并提出"主任务应知晓子任务完成" 的机制诉求。 |
| #2131 | [支持 Hermes Agent](https://github.com/netease-youdao/LobsterAI/issues/2131) | 🔁 关注度高 | 用户询问是否有计划支持 Hermes Agent 集成计划。 |

---

## 5. Bug 与稳定性

| # | 链接 | 严重程度 | Bug 描述 | Fix PR |
|---|---|---|---|---|
| #2132 | [跨模型子任务问题](https://github.com/netease-youdao/LobsterAI/issues/2132) | ⚠️ 中 | 跨模型子任务完成后，主任务无法自动感知；根本原因为"网关级函数调用"未被 sessions_spawn 标记，导致 `call_function_gblu0nmqpcej_1` 不在 sessions_list / subagents 中 | ❌ 无已有关联 PR |

暂无已合并的修复 PR。该 Issue 中已给出了较详细的根因分析和两套优化方案，有望推动后续修复。

---

## 6. 功能请求与路线图信号

| # | 链接 | 功能请求 | 可能被纳入下一版本的可能性 |
|---|---|---|---|
| #2131 | [支持 Hermes Agent](https://github.com/netease-youdao/LobsterAI/issues/2131) | Hermes Agent 集成 | 🔵 待评估：该项目尚未有维护者回复，但社区 Hermes Agent 关注度高，有望成为下版本特性 |
| #2132 | [跨模型子任务问题](https://github.com/netease-youdao/LobsterAI/issues/2132) | 跨模型子任务协作机制优化 | ✅ 较高：Issue 中已有明确方案和根因定位，维护者可根据方案进行实现升级  |

---

## 7. 用户反馈摘要

| # | 链接 | 用户反馈/痛点 |
|---|---|---|
| #2132 | [跨模型子任务问题](https://github.com/netease-youdao/LobsterAI/issues/2132) | 跨模型场景下，主任务 M3 规划完成后子任务（DeepSeek）完成无法自动通知主任务，导致体验断层 |
| #2131 | [支持 Hermes Agent](https://github.com/netease-youdao/LobsterAI/issues/2131) | 询问 Hermes Agent 集成计划 |

---

## 8. 待处理积压

| # | 链接 | 积压天数 | 说明 |
|---|---|---|---|
| #2131 | [支持 Hermes Agent](https://github.com/netease-youdao/LobsterAI/issues/2131) | 24h | 尚未有任何维护者回答，询问 Hermes Agent 集成计划 |
| #2132 | [跨模型子任务问题](https://github.com/netease-youdao/LobsterAI/issues/2132) | 24h | 已有一轮社区方案形成，尚无 mark/标签/PR 对接 |
| #2133 | [fix: fix export and code copy bugs](https://github.com/netease-youdao/LobsterAI/pull/2133) | 24h | 修复导出和代码复制 Bug 的 PR，仍待合并 |

---

*日报由 OWL AI 助手自动生成 · [源码](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-10

---

## 1. 今日速览

CoPaw 今日处于**高活跃迭代期**，过去 24 小时内 Issues 与 PR 更新量均达 30+，且关闭/合并率较高（Issues 关闭 17/33，PR 合并/关闭 18/34），显示维护团队消化积压能力强。项目发布新版本 **v1.1.11-beta.2**，涵盖浏览器控制能力增强。从 Issue 内容看，用户群正在从基础可用期过渡到**深度使用反馈期**，大量 Bug 集中在 Windows 桌面端体验、多模型兼容性、流式输出稳定性等生产使用场景。AgentScope 2.0 后端迁移的打破性变更 Issue 持续活跃，是近期最值得关注的技术方向信号。

---

## 2. 版本发布

### v1.1.11-beta.2

| 条目 | 详情 |
|------|------|
| 版本号 | `1.1.11-beta.2` |
| 发布 PR | [PR #5055](https://github.com/agentscope-ai/QwenPaw/pull/5055) |
| 关键变更 | `feat(browser)`: 新增页面坐标点击支持（`page coordinate click`）至 `browser_control`；`fix(browser)`: 新增 CDP 超时参数及浏览器 Profile 隔离，修复跨浏览器切换问题 |
| 破坏性变更 | 无 |
| 迁移注意事项 | 浏览器相关配置若有自定义 CDP 超时或 Profile 路径，建议升级后验证跨浏览器切换场景 |

---

## 3. 项目进展

今日合并/关闭的重要 PR 覆盖了**安全性、稳定性、开发者体验、CI 基础设施**四大维度，项目整体向前推进显著：

| PR | 状态 | 核心贡献 |
|----|------|----------|
| [PR #5043](https://github.com/agentscope-ai/QwenPaw/pull/5043) | ✅ Merged | **OpenSandbox 插件集成** — 以 MCP 协议接入 OpenSandbox，Agent 执行 shell 命令/不可信代码时获得隔离运行时安全保护，默认禁用 |
| [PR #5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) | ✅ Merged | **修复 `/compact` 与自动压缩忽略模型实际 `max_input_length`** — 此前 fallback 到 128K 默认值导致长上下文模型（如 MiniMax M3 512K）压缩过早，影响可用上下文窗口 |
| [PR #5049](https://github.com/agentscope-ai/QwenPaw/pull/5049) | ✅ Merged | **零配置免费模型 & 一键 OAuth 认证** — 用户无需手动配置即可使用免费模型；付费 Provider（如 OpenRouter）支持 OAuth 一键登录，大幅降低上手门槛 |
| [PR #5048](https://github.com/agentscope-ai/QwenPaw/pull/5048) | ✅ Merged | **修复 `_broadcast_to_subscribers` 中未 await 的协程** — agentscope 元类 hook 可能将 async 方法误判为 sync，导致 reply_msg 成为未消费协程，现已防御性 await |
| [PR #5054](https://github.com/agentscope-ai/QwenPaw/pull/5043) | ✅ Merged | **E2E Playwright CI 流水线完善** — 在 CI 中启动真实后端，通过后端子进程覆盖率采集，合并四类覆盖率报告，测试基础设施成熟度大幅提升 |
| [PR #5056](https://github.com/agentscope-ai/QwenPaw/pull/5056) | ✅ Merged | **移除冗余 channel-tests workflow** — 避免 CI 资源浪费 |
| [PR #4857](https://github.com/agentscope-ai/QwenPaw/pull/4857) | ✅ Merged | **增强 make-skill 流程，支持自进化 Skill 创建** — 可后台执行 `make-skill`，子 Agent 继承完整对话上下文完成 Skill 生成 |
| [PR #5050](https://github.com/agentscope-ai/QwenPaw/pull/5050) | ✅ Merged | 主题切换图标从 computer 改为 sun，修复"跟随系统"含义不明确的 UX 问题 |

**整体评估**：今日合并质量高，安全（OpenSandbox、文件路径限制）、稳定性（协程 / compact / 广播）、开发者体验（零配置 / OAuth）多线并进，且 CI 基础设施趋于成熟。

---

## 4. 社区热点

### 🔥 Issue #5017 — 建议借鉴 Hermes Agent "学习循环"特性（[链接](https://github.com/agentscope-ai/QwenPaw/issues/5017)）

- **互动量**：💬 10 / 👍 3
- **核心诉求**：用户在盛赞 QwenPaw 本地化体验优秀的同时，指出 Hermes Agent（GitHub Star 两个月冲至 46k+）的核心创新——**Agent 从自身行为中自动创建并迭代技能**——值得 CoPaw 借鉴
- **背后信号**：用户希望 CoPaw 不仅开箱即用，更能在**长期使用中持续自我进化**，反映用户对"记忆自进化"（Issue #4994）和"Skill 自创建"（PR #4857 刚合并）的同类诉求

### 🔥 Issue #5003 — 使用阿里 Coding Plan qwen3.7-plus 会一直卡住（[链接](https://github.com/agentscope-ai/QwenPaw/issues/5003)）

- **互动量**：💬 8
- **核心诉求**：特定 Coding Plan 模型兼容性问题，用户在阿里 Coding Plan 场景下完全阻塞

### 🔥 Issue #4727 — AgentScope 1.x → 2.0 后端迁移（[链接](https://github.com/agentscope-ai/QwenPaw/issues/4727)）

- **互动量**：💬 7 / 👍 2 / **OPEN + Breaking Change**
- **核心诉求**：AgentScope 2.0 正式发布后，社区期待 CoPaw 完成架构升级以享受新 API 和运行时模型优势
- **重要提醒**：这是长期跟踪的关键 Breaking Change，升级后依赖 AgentScope 的插件/自定义代码均需适配

### 讨论活跃但已关闭 Issue 集中的方向
- **多模型 Thinking/Reasoning 内容显示**（#4962 DeepSeek、#5013 KimiCode）：用户非常关注推理内容可视化，已集中修复
- **Windows 桌面端体验**（#5015、#4792、#5044）：Tauri 桌面版的卡顿、外部链接无法打开、文件下载被阻止、路径超限等是 Windows 用户的核心痛点群

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高影响 / 已阻塞

| Issue | 描述 | 严重程度 | Fix PR 状态 |
|-------|------|----------|-------------|
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 本地千问 3.6-27B (vLLM) 在 1.1.9/1.1.10 对话无响应，1.1.5 正常 — **版本回归** | 🔴 高 | ⏳ 无 PR |
| [#5003](https://github.com/agentscope-ai/QwenPaw/issues/5003) | 阿里 Coding Plan qwen3.7-plus 卡住 | 🔴 高 | ⏳ 无 PR |
| [#5057](https://github.com/agentscope-ai/QwenPaw/issues/5057) | 钉钉 AI Card 在 Agent 输出为空时仍发送空卡片 | 🟡 中 | ⏳ 无 PR |

### 🟡 中影响 / 有 PR 处理中

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) | Windows Session 文件名重复拼接导致路径超限 | [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) |
| [#5025](https://github.com/agentscope-ai/QwenPaw/issues/5025) | `submit_to_agent` 会话文件路径错误导致 `FileNotFoundError` | 包含于 [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) |
| [#5045](https://github.com/agentscope-ai/QwenPaw/issues/5045) | PAT 工具名含点号违反 DeepSeek API 命名规范 | 已关闭（后续版本修复） |
| [#5034](https://github.com/agentscope-ai/QwenPaw/issues/5045) | MCP 工具名含点号导致 OpenAI API 400 | 已关闭（后续版本修复） |
| [#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) | 微信开启主动模式后同一问题两次回复 | ⏳ 无 PR |
| [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) | Console 中 Skill 斜杠调用显示为展开的 SKILL.md 内容而非执行结果 | ⏳ 无 PR |

### 🟢 低影响 / 已修复合并

| Issue | 描述 | 修复 PR |
|-------|------|---------|
| [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | `/compact` 忽略模型 `max_input_length` | [#5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) |
| [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | DeepSeek 回复折叠到思考过程 | 已关闭 |
| [#5013](https://github.com/agentscope-ai/QwenPaw/issues/5013) | KimiCode thinking 内容不显示 | 已关闭 |
| [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | OpenAI-Compatible Provider 未过滤 Reasoning Content | 已关闭 |
| [#5039](https://github.com/agentscope-ai/QwenPaw/issues/5039) | OpenAI-compat 流解析中 tool call 被覆盖 | 已关闭 |
| [#5044](https://github.com/agentscope-ai/QwenPaw/issues/5044) | Tauri 桌面版外部链接无法打开 & 文件下载被阻止 | 已关闭 |
| [#5042](https://github.com/agentscope-ai/QwenPaw/issues/5042) | Windows 下 code-Open Directory 无法打开 C 盘外目录 | 已关闭 |
| [#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) | GPT-5.x 模型 `max_tokens` 参数错误 | 已关闭 |

---

## 6. 功能请求与路线图信号

| 方向 | Issue/PR | 判断 |
|------|----------|------|
| **Skill 自进化** | [Issue #5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) / [Issue #4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) / [PR #4857（已合并）✅ | PR #4857 已迈出第一步，方向明确，Hermes 式学习循环为中期目标 |
| **视觉模型 Fallback** | [Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)（👍3） | 纯文本主模型 + 独立视觉模型的解耦方案，使用场景清晰，无相关 PR，建议评估排期 |
| **AgentScope 2.0 迁移** | [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)（👍2 / Breaking Change） | 社区期待高，但涉及底层架构迁移，需版本规划和大规模兼容性测试 |
| **桌面端自动更新** | [PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)（开放中） | Tauri 自动更新功能在审，与 [#4733](https://github.com/agentscope-ai/QwenPaw/pull/5051) / [#5051](https://github.com/agentscope-ai/QwenPaw/pull/5051) 端口持久化关联 |
| **AgentHub 导入 & A2A 增强** | [PR #5033](https://github.com/agentscope-ai/QwenPaw/pull/5033)（开放中） | 支持从 AgentHub 导入 Agent，增强 A2A 生态互操作，反映平台化路线 |
| **可观测性/OpenTelemetry 集成** | [Issue #5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) | 企业级需求，Langfuse / OTel 链路追踪，目前无相关 PR |
| **会话管理优化** | [Issue #4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | 用户体验诉求，会话切换交互改进 |
| **定时任务 UI 优化** | [Issue #4778](https://github.com/agentscope-ai/QwenPaw/issues/4778) | 定时任务创建流程多项 UX 优化建议 |
| **Matrix 加密媒体下载** | [PR #5059](https://github.com/agentscope-ai/QwenPaw/pull/5059) | Matrix E2EE 房间加密媒体下载修复 |

---

## 7. 用户反馈摘要

### 😊 满意点
- **本地化体验获赞**（Issue #5017）：用户明确指出"国内用起来特别舒服——本地化做得很到位，设置清晰无门槛，开箱即用"
- **零配置免费模型 & OAuth 上线**（PR #5049 已合并）：将进一步强化"开箱即用"口碑

### 😐 痛点 — Windows 桌面端生态
- **前端加载卡顿、CPU 激增**（Issue #5015）：1.1.11 以下版本 Windows Desktop 会话切换时卡顿
- **流式输出导致整机卡死**（Issue #4792）：远程访问 Console 时长回复流式输出引发系统级性能崩溃
- **Tauri 桌面版外链无法打开、文件下载被阻止**（Issue #5044）：架构缺陷，启动→后端重定向模式导致
- **Windows 路径超限**（Issue #4988）及 **C 盘外目录无法打开**（Issue #5042）
- **桌面端端口随机导致 Agent 选择丢失**（Issue #4733 / PR #5051）

> **总结**：Windows 桌面体验是用户集中抱怨的领域，覆盖性能、文件系统、网络端口持久化等多层问题，建议列为专项集中攻坚。

### 😐 痛点 — 多模型兼容性
- DeepSeek / MiniMax / KimiCode 等模型厂商的 API 差异（thinking 显示、tool name 校验、max_tokens 参数）是持续摩擦点
- 中国厂商 API 规范不统一导致 CoPaw 需持续适配维护

### 😐 痛点 — 早期功能稳定性
- Pet 功能闪退卡顿（Issue #5029）：建议标记为实验性
- 默认 Agent 无法自定义（Issue #5029）

---

## 8. 待处理积压

以下为长期未响应或处理缓慢的重要事项，提醒维护者关注：

| 项目 | 状态 | 创建/最后更新 | 说明 |
|------|------|---------------|------|
| [Issue #2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) — GPT-5.x `max_tokens` 参数 + 硬编码模型列表 | Open / 💬4 | 创建 2026-04-01 / 更新 2026-06-09 | **最长未解决高影响 Issue**，OpenAI 兼容性问题涉及模型列表硬编码根因，2 个月未根本解决 |
| [Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) — 千问 3.6-27B 版本回归 | Open / 💬4 | 创建 2026-06-06 | 1.1.5→1.1.9 回归，无 Fix PR，阻塞本地 vLLM 部署用户 |
| [Issue #5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) — 微信主动模式双回复 | Open / 💬2 | 创建 2026-06-09 | 新报告，无 PR |
| [Issue #5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) — Skill 斜杠调用 UI 异常 | Open / 💬2 | 创建 2026-06-09 | 新报告，影响 Skill 使用流程 |
| [Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) — 独立视觉模型 Fallback | Open / 💬3 / 👍1 | 创建 2026-06-07 | 功能需求，无 PR，但使用场景明确 |
| [PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) — Tauri 自动更新 | Open | 创建 2026-05-25 | 已开放 15 天，与桌面端体验相关，需评审推进 |
| [PR #4981](https://github.com/agentscope-ai/QwenPaw/pull/4981) — 安全修复：限制文件预览路径 | Under Review | 创建 2026-06-05 | 安全类 PR，建议优先评审合并 |

---

> **📊 项目健康度评估**：CoPaw 项目今日呈**高活跃度、高消化效率**的健康状态，安全性和稳定性修复密集合并。主要风险集中在 Windows 桌面端体验欠账较多、多模型兼容适配的持续摩擦、以及 AgentScope 2.0 迁移的技术规划透明度不足。建议维护者针对 Windows 桌面端成立专项，并发布 AgentScope 2.0 迁移的路线图时间表以回应社区期待。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-10

---

## 1. 今日速览

ZeroClaw 今日活跃度极高，过去 24 小时内 Issues 与 PR 各更新 50 条，社区参与度持续处于高位。Issues 以新开/活跃为主（48 条新开 vs 2 条关闭），PR 积压明显（49 条待合并 vs 1 条已合并），表明贡献者提交节奏快于维护者审查节奏。今日无新版本发布，项目仍处于 v0.8.0-beta-1 之后的密集迭代期。整体来看，项目正处于功能快速扩张与稳定性修复并行的关键阶段，多通道支持、安全加固和运行时可靠性是核心焦点。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版本仍为 v0.8.0-beta-1。

---

## 3. 项目进展

今日仅有 **1 条 PR 被合并/关闭**：

| PR | 状态 | 说明 |
|---|---|---|
| [#7425](https://github.com/zeroclaw-labs/zeroclaw/pull/7425) | ✅ 已合并 | **fix(runtime): resolve channel pricing via bare-type fallback in cost lookup** — 修复了渠道成本追踪静默记录 `cost_usd = 0` 的 bug。根因是渠道编排器使用裸 provider `<type>` 作为定价 map 的 key，导致每个渠道 agent 的按日预算限制失效。这是一个重要的财务/运营可见性修复。 |

**值得关注的高优先级开放 PR（今日活跃更新）：**

- **[#7441](https://github.com/zeroclaw-labs/zeroclaw/pull/7441)** — `fix(doctor)`: 修复 `zeroclaw doctor` 对自定义 model_provider 的验证逻辑，从 legacy factory 改为基于实际配置验证，避免误报。
- **[#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440)** — `fix(runtime)`: 当 system prompt 本身已超过 context budget 时，跳过无意义的历史裁剪，直接报错而非进入无限循环。直接回应 [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)。
- **[#7417](https://github.com/zeroclaw-labs/zeroclaw/pull/7417)** — `fix(cron)`: 修复 Web 控制台 cron 编辑弹窗字段缺失问题，使编辑表单与创建表单字段一致。
- **[#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)** — `feat(rfc-6969)`: 实现 per-turn output routing（`send_via`），修复 Telegram 语音/文本双发 bug，覆盖 8 个渠道。这是一个大型架构 PR。
- **[#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367)** — `feat(gateway)`: 支持按 channel alias 路由入站 webhook，解决多实例配置下仅首个实例收到消息的问题。
- **[#7344](https://github.com/zeroclaw-labs/zeroclaw/pull/7344)** — `feat(gateway)`: 新增 `gateway.allow_remote_admin` 配置项，允许远程调用 `/admin/reload`，无需完整重启进程。
- **[#7345](https://github.com/zeroclaw-labs/zeroclaw/pull/7345)** — `fix(loop)`: 修复路径列表工具结果被误判为包含图像标记导致错误路由到 vision provider 的问题。
- **[#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278)** — `feat(tools)`: 批量集成 5 个智能家居/娱乐工具（Home Assistant、Philips Hue、8Sleep、Spotify、Sonos）。
- **[#7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270)** — `feat(channels)`: 新增 4 个社交/聊天渠道（Mastodon、Rocket.Chat、Zulip、Lemmy），采用轮询模式。
- **[#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265)** — `feat(channels)`: 新增 5 个 SMS 渠道（Twilio、Plivo、Telnyx、Sinch、Vonage），支持签名验证 webhook。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|---|---|---|---|
| 1 | [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) **[已关闭]** | 19 条 / 👍2 | 社区 Logo 设计征集。虽已关闭但讨论热度最高，反映社区对品牌认同感的关注。 |
| 2 | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | 12 条 | Agent 不知道自身具备 `zeroclaw cron` 能力，导致用户请求定时任务时 AI 回复"无法做到"。核心诉求：**改进工具自描述/system prompt 中的工具发现机制**。 |
| 3 | [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 10 条 | 重构 providers 架构，统一 reqwest client 管理，消除代码重复和配置碎片化。这是**架构层面的技术债务清理**。 |
| 4 | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 9 条 | 多租户场景下的 per-sender RBAC：不同用户类（客户/运维/开发者）应有独立 workspace、工具集、rate limit 和 system prompt。**企业级部署的核心安全需求**。 |
| 5 | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | 7 条 | Discord Bot 仅响应指定 channel，与 Matrix/Nextcloud Talk 的 `allowed_rooms` 模式对齐。**渠道细粒度权限控制**。 |
| 6 | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | 6 条 | Memory 权重过高，尤其在 cron job 中 agent 过度依赖历史记忆而忽略当前 prompt。**Agent 行为调优**。 |
| 7 | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | 5 条 | 支持从 `.well-known` URI 安装 skills，与 Agent Skills 标准对齐。**生态互操作性**。 |
| 8 | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 5 条 | 单轮/多轮对话中 user message 丢失，导致自定义 provider 返回 400。**运行时可靠性**。 |

### 📌 热点 PR

- **[#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)** (RFC-6969) — per-turn output routing 是社区期待已久的架构统一，涉及 8 个渠道的输出路由重构。
- **[#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** — RFC: 统一三个 agent turn 引擎（`run_tool_call_loop` + `turn_streamed` + `Agent::turn`），这是今日新提交的重要架构 RFC。

---

## 5. Bug 与稳定性

### 🔴 P1 — 工作流阻塞（S1）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 自定义 provider 场景下 user message 丢失，对话中断 | ❌ |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | 默认 32k context budget 在首轮即被 system prompt + tool definitions 超出，导致无限 preemptive trim | ✅ [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) |
| [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) | Telegram 渠道下 `web_search_tool` 和 `web_fetch` 不触发（v0.7.5） | ✅ [#7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438) |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | Cron job 在运行中可被重复调度，导致同一任务执行 20+ 次 | ❌（status: in-progress） |
| [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) | MQTT 启动的 SOP 运行对 agent `sop_status` 不可见（双 SopEngine 实例状态不同步） | ❌ |
| [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) | `risk_profile.allowed_tools` 不限制 MCP 工具，仅限制内置工具 | ❌（设计决策待确认） |

### 🟡 P2 — 行为降级（S2）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Memory 权重过高，cron job 中 agent 过度依赖历史记忆 | ❌ |
| [#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584) | OpenAI-Compatible provider 忽略 `reasoning` 字段，仅读取 `reasoning_content` | ❌ |
| [#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376) | zerocode Dashboard 隐藏不可用/错误状态，将历史标记为活跃会话 | ❌ |
| [#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377) | zerocode 深色主题在浅色终端下文字不可读 | ❌ |

### 🟢 P3 — 轻微问题（S3）

| Issue | 描述 |
|---|---|
| [#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378) | macOS Cmd-C 被 zerocode 误判为退出快捷键 |
| [#7400](https://github.com/zeroclaw-labs/zeroclaw/issues/7400) | zerocode 语言环境选择需重启才生效 |
| [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) | Gateway SPA fallback 对未实现的 `/api/*` 路由返回 index.html，导致 dashboard JSON.parse 崩溃 |

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本的功能

| 功能 | 信号强度 | 依据 |
|---|---|---|
| **多渠道路由与 webhook 改进** | ⭐⭐⭐⭐⭐ | PR [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) + [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) 均已就绪，涉及 8+ 渠道 |
| **SMS 渠道批量上线** | ⭐⭐⭐⭐⭐ | PR [#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265)（5 个 SMS 渠道）+ 配套文档 PR [#7272](https://github.com/zeroclaw-labs/zeroclaw/pull/7272) |
| **社交/聊天渠道扩展** | ⭐⭐⭐⭐ | PR [#7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270)（Mastodon/Rocket.Chat/Zulip/Lemmy）+ 文档 PR [#7273](https://github.com/zeroclaw-labs/zeroclaw/pull/7273) |
| **智能家居/娱乐工具集成** | ⭐⭐⭐⭐ | PR [#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278)（Home Assistant/Hue/8Sleep/Spotify/Sonos） |
| **远程管理 API** | ⭐⭐⭐⭐ | PR [#7344](https://github.com/zeroclaw-labs/zeroclaw/pull/7344)（`allow_remote_admin`） |
| **Agent turn 引擎统一** | ⭐⭐⭐ | 新 RFC [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)，架构层面共识正在形成 |
| **Per-sender RBAC / 多租户** | ⭐⭐⭐ | Issue [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)（9 条评论）+ 相关 skills 安全 PR [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) |
| **Cached token 成本核算** | ⭐⭐ | Issue [#7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248)，运营可见性需求 |
| **Shell/Skill 子进程内存限制** | ⭐⭐ | Issue [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)，生产环境 OOM 防护 |

### 值得关注的架构方向

- **Providers 架构统一**（[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)，10 条评论）：reqwest client 管理和模型构建参数的一致性重构，是降低长期维护成本的关键。
- **Skills 安全模型**（[#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) + [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)）：per-skill 权限粒度和 `.well-known` URI 安装标准，指向更安全的 skill 生态。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Agent "不知道自己能做什么"** — [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) 中用户明确反馈：要求定时任务时 agent 回复"没有工具"，但 `zeroclaw cron` 实际可用。这暴露了 tool discovery/system prompt 自描述的不足。

2. **Context budget 管理失控** — 多个 issue（[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)、[#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)）反映默认 32k 配置下 system prompt + tool definitions 即超限，且 memory 权重过高导致 agent 行为偏差。用户期望更智能的 budget 分配。

3. **自定义 provider 兼容性差** — [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)（user message 丢失）、[#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)（Telegram 工具不触发）、[#6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584)（reasoning 字段不兼容）均涉及 OpenAI-compatible 后端（LM Studio、vLLM、OpenRouter），说明自定义 provider 的兼容性测试覆盖不足。

4. **Cron 可靠性** — [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) 中用户观察到同一 cron job 在 3 分钟内被重复执行 20 次，这是生产环境的严重问题。

5. **zerocode TUI 体验** — 今日连续出现 4 个 zerocode bug report（[#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376)、[#7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377)、[#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378)、[#7400](https://github.com/zeroclaw-labs/zeroclaw/issues/7400)），涵盖主题兼容性、快捷键冲突、错误状态隐藏、locale 设置不生效，说明 zerocode 作为新组件的打磨程度仍需提升。

### 😊 满意信号

- **多渠道支持快速扩展**：社区对新增 SMS、社交渠道、智能家居集成的 PR 反应积极，说明 ZeroClaw 的"全渠道 AI agent"定位得到认可。
- **安全关注度提升**：多个安全相关 issue（RBAC、token revocation、MCP tool 限制、Composio action scope）被提出，反映用户群体正从早期采用者向企业级部署演进。

### 📋 典型使用场景

- **多租户客服部署**（[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)）：单一 ZeroClaw 实例服务多类用户，需隔离 workspace 和工具集。
- **本地 LLM + Telegram**（[#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)）：用户在容器中运行 ZeroClaw + llama.cpp/LM Studio，通过 Telegram 交互，使用 web_search 等工具。
- **定时任务自动化**（[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)、[#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)）：用户期望通过自然语言设置 cron job，但当前 agent 工具发现机制不足。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获响应，建议维护者关注：

### 🔴 高优先级积压（P1，超过 30 天无实质进展）

| Issue | 创建日期 | 等待天数 | 描述 |
|---|---|---|---|
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | 2026-04-23 | 48 天 | Cron job 重复执行，status: in-progress 但无 PR 关联 |
| [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) | 2026-05-15 | 26 天 | MQTT SOP 双引擎状态不同步 |
| [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876) | 2026-05-23 | 18 天 | MCP 工具不受 `allowed_tools` 限制，需明确是设计决策还是文档缺失 |

### 🟡 重要架构 Issue（高讨论度但无实施 PR）

| Issue | 创建日期 | 评论数 | 描述 |
|---|---|---|---|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 2026-04-20 | 10 | Providers 架构统一重构，涉及核心模块 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 2026-04-22 | 9 | Per-sender RBAC，企业级部署核心需求 |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | 2026-04-18 | 12 | Agent 工具发现机制缺陷 |

### 📦 大型待合并 PR（可能产生合并冲突）

| PR | 创建日期 | 规模 | 描述 |
|---|---|---|---|
| [#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265) | 2026-06-05 | XL | 5 个 SMS 渠道 |
| [#7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270) | 2026-06-05 | XL | 4 个社交渠道 |
| [#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) | 2026-06-05 | XL | 5 个智能家居工具 |
| [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | 2026-06-07 | XL | Per-turn output routing（RFC-6969） |
| [#7256](https://github.com/zeroclaw-labs/zeroclaw/pull/7256) | 2026-06-05 | XL | Lark/Feishu 集成加固 |

> ⚠️ **风险提示**：5 个 XL 级 PR 同时积压，均涉及渠道/工具的 schema v3 变更，合并顺序和冲突解决策略需要维护者统筹规划。建议优先合并 [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367)（webhook 路由）作为基础设施，再依次合并渠道扩展 PR。

---

*日报生成时间：2026-06-10 | 数据来源：GitHub API | 分析引擎：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*