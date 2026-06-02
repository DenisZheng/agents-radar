# OpenClaw 生态日报 2026-06-02

> Issues: 471 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-02 00:43 UTC

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
**日期**：2026-06-02 | **数据来源**：github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日继续保持高节奏迭代：**471 条 Issue 更新**（新开/活跃 295、关闭 176）、**500 条 PR 更新**（开放 396、合并/关闭 104），过去 24 小时内发布 **3 个 Beta 预发版本**，体现出团队强烈的"发小版、发快版"倾向。当前大量编辑集中在 Codex/Telegram/Feishu 三条线路的稳定性回归修复上，尤其是 `2026.5.27` 引入的多个回归问题正在通过密集 PR 群快速收敛。社区讨论热度最高的话题围绕 SQLite 会话迁移路线图、webchat prompt cache 失效、以及长期悬而未决的 Token 成本膨胀问题。

---

## 2. 版本发布

### v2026.6.1-beta.2（最新）
- **核心主题**：Agent 与 CLI 运行时从异常中更干净地恢复。
- 修复中断的工具调用、过期会话绑定（stale session bindings）、压缩交接（compaction handoffs）、媒体投递重试等场景的恢复逻辑。相关 PR：[#88129](#)、[#88136](#)、[#88141](#)、[#88162](#)、[#88182](#)。
- **渠道稳定性**：Telegram、WhatsApp、iMessage、Slack 等多通道投递更平稳。

### v2026.6.1-beta.1 / v2026.5.31-beta.4
- 同样包含 Agent 运行时恢复及多通道投递稳定性改进，与 beta.2 同属"2026.6.1 修复链"。

> ⚠️ **迁移注意**：多个 Issue 反映 `2026.5.27`→`2026.5.31`/`6.1` 的 Codex OAuth compaction 回退到直接 OpenAI API 时会因缺少 `OPENAI_API_KEY` 而失败（[#86820](https://github.com/openclaw/openclaw/issues/86820)）。仍在使用 Codex OAuth + OAuth-only 配置的用户应在升级前确认 key 是否到位。

---

## 3. 项目进展（今日值得关注的 PR）

| 方向 | 代表 PR / Issue | 状态 | 说明 |
|---|---|---|---|
| Codex 稳定性密集补丁 | [#89151](https://github.com/openclaw/openclaw/issues/89151)、[#89040](https://github.com/openclaw/openclaw/issues/89040)、[#89045](https://github.com/openclaw/openclaw/issues/89045) | 开放/P1 | 从 Codex 内部协议乱码过滤、事件循环锁死、multi-turn 超时三个维度修复 Codex 回归 |
| 消息不丢失修复群 | [#88992](https://github.com/openclaw/openclaw/issues/88992)、[#88968](https://github.com/openclaw/openclaw/issues/88968)、[#89039](https://github.com/openclaw/openclaw/issues/89039) | 开放/P1 | 修复 LLM 忘记调用 message_tool 时回复静默丢弃、memoryFlush 失败导致用户回复中断、session lock 释放窗口期 steering 消息丢失 |
| SQLite 会话迁移 | [#89261](https://github.com/openclaw/openclaw/issues/89261)、[#89262](https://github.com/openclaw/openclaw/issues/89262) | 开放/P2 | 为 plugin/SDK 层增加 transcript identity 与 scoped writer 抽象，是 session/transcript 迁移到 SQLite 的前置工作 |
| Cron 修复 | [#85249](https://github.com/openclaw/openclaw/issues/85249)、[#83933](https://github.com/openclaw/openclaw/issues/83933) | 开放/P1 | 保护 `sourceDelivery` 为空时的 cron 崩溃、隔离手动 `cron run` 对 `deleteAfterRun` 的副作用 |
| Doctor 误报 | [#89260](https://github.com/openclaw/openclaw/issues/89260) | 开放 | `doctor` 将"平台不兼容但正常安装的 skill"错误归类为缺失依赖 |
| Telegram | [#83988](https://github.com/openclaw/openclaw/issues/83988)、[#87072](https://github.com/openclaw/openclaw/issues/87072) | 开放/P2 | TTS final 模式下的文字闪现抖动、可选的交错式推理文本实时投递通道 |
| 文档/SDK 加固 | [#89263](https://github.com/openclaw/openclaw/issues/89263)、[#89157](https://github.com/openclaw/openclaw/issues/89157) | 开放 | 拒绝畸形工具描述；长期补充可复用 helper contracts 的文档注释 |
| 模型兼容 | [#88946](https://github.com/openclaw/openclaw/issues/88946)、[#88976](https://github.com/openclaw/openclaw/issues/89263) | 开放 | Azure AI Foundry / Foundry 端点与 Mistral prompt_cache_key 兼容 |

**整体进度**：本日 PR 大量集中在 **P1 稳定性回归修复** 与 **SQLite 会话抽象准备** 两条主线，可视为 6 月中旬 beta.3 / 稳定版本的重要铺垫阶段。

---

## 4. 社区热点

### 🔥 讨论最活躍 Issues（按评论数排序）

1. **[#80171](https://github.com/openclaw/openclaw/issues/80171) Codex-vs-Pi runtime parity QA harness** · 评论 15 · 👍 1 · 已关闭(stale)
长期跟踪的 Codex 作为 OpenAI agent turns 默认运行时的 QA 对齐框架。已 stale，但标志着 Codex→默认运行时的路线已实质落地。

2. **[#80380](https://github.com/openclaw/openclaw/issues/80380) 更新到 gemini-3.1-flash-lite (GA)** · 评论 14 · 👍 4 · 仍打开
Google 于 5 月 7 日正式 GA 了 `gemini-3.1-flash-lite`，用户要求从 preview 升级，社区正在等待兼容性验证结果。

3. **[#88838](https://github.com/openclaw/openclaw/issues/88838) Track core session/transcript SQLite 迁移** · 评论 12 · 👍 1
明确以 **branch-by-abstraction** 方式分小 PR 推进迁移，避免一次性高风险重写。jalehman 的贡献是核心推动者。

4. **[#84038](https://github.com/openclaw/openclaw/issues/84038) doctor --fix 静默迁移 openai-codex/ 配置** · 评论 12 · 👍 3
回归级别安全问题：原生 Codex runtime 相比 PI runtime 出现 **3–4× token 膨胀**，同时 `doctor --fix` 还会干扰已有的 OAuth 配置。

5. **[#86820](https://github.com/openclaw/openclaw/issues/86820) Codex OAuth compaction 回退到直接 OpenAI API** · 评论 12 · 👍 6（最高点赞）
👍 数最高的一条，说明**受影响的 OAuth 用户量较大**。

6. **[#87177](https://github.com/openclaw/openclaw/issues/87177) QQBot 消息重复** · 评论 11 · 已关闭
心跳会话内容泄漏 + 消息去重逻辑缺陷。

7. **[#78308](https://github.com/openclaw/openclaw/issues/78308) MCP tool call 通道授权 envelope** · 评论 11 · 仍打开
建议在 MCP 工具层复用已有的 `/approve` 通道授权管道。属于平台安全模型方向性讨论。

### 🔥 最热 PR

- **[#88946](https://github.com/openclaw/openclaw/issues/88946)**  maintainer 级别修 live model inference edge cases，覆盖 CLI silent no-reply、Azure 端点 compatibility。
- **[#88992 + #89039](#)**  Jerry-Xin 双人组同日修复"message_tool_only 静默丢消息"与"EmbeddedAttemptSessionTakeoverError 丢消息"，合计贡献显著。

---

## 5. Bug 与稳定性

### 🔴 P1 级（今日重点修复方向）

| Issue/场景 | 关联 PR | 状态 |
|---|---|---|
| **[#88312](https://github.com/openclaw/openclaw/issues/88312)** Codex turn-completion stall（2026.5.27 回归） | 同上 Codex 修复群 | 已有关联 PR 群 |
| **[#87744](https://github.com/openclaw/openclaw/issues/87744)** Codex Telegram 连续超时无 final answer | 同上 | 待合并 |
| **[#86519](https://github.com/openclaw/openclaw/issues/86519)** Telegram agent 重复回复 2–10× | — | 已缓解，仍调查 |
| **[#89039](https://github.com/openclaw/openclaw/issues/89039)** EmbeddedAttemptSessionTakeoverError 静默丢消息 | 有 fix PR | 待合并 |
| **[#88992](https://github.com/openclaw/openclaw/issues/88992)** message_tool_only 模式 LLM 忘记调 message_tool 时静默丢弃回复 | 有 fix PR | 待合并 |
| **[#89045](https://github.com/openclaw/openclaw/issues/89045)** 群聊 session 进入 `failed` 终态后所有后续消息静默丢失 | 有 fix PR | 待合并 |

### 🟠 P2 影响面

| Issue | 说明 | 有 PR |
|---|---|---|
| **[#89139](https://github.com/openclaw/openclaw/issues/89139)** webchat 每条消息触发新 agent run，prompt cache hit 从 93% 跌至 29% | 性能级 Bug | — |
| **[#86215](https://github.com/openclaw/openclaw/issues/86215)** Codex OAuth 刷新失败数小时无告警、不轮换 | 体验级 Bug | — |
| **[#80607](https://github.com/openclaw/openclaw/issues/80607)** 非默认 multi-agent 用 `embedded_run` 导致 10–17s 延迟 | 性能 Issue | — |
| **[#83988](https://github.com/openclaw/openclaw/issues/83988)** Telegram TTS 文字"churn"（闪现再被删除）| 有 PR | — |

### 🟡 已关闭 / 已缓解

- **[#84038](https://github.com/openclaw/openclaw/issues/84038)** doctor --fix 迁移问题 → 已关闭，但社区仍在讨论根因（token 膨胀对比 PI）。
- **[#86820](https://github.com/openclaw/openclaw/issues/86820)** Codex OAuth compaction → 已关闭。
- **[#87177](https://github.com/openclaw/openclaw/issues/87177)** QQBot 消息重复 → 已关闭。
- **[#87616](https://github.com/openclaw/openclaw/issues/87616)** LM Studio 超时 → 已标记 invalid。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 Issue / PR | 可能性评估 |
|---|---|---|
| **MCP 工具调用通道授权** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | 🔴 尚早 – 需要 RFC 和 SDK 级改动 |
| **Multi-agent 协作增强（共享黑板 / 分层记忆 / Token 治理）** | [#35203](https://github.com/openclaw/openclaw/issues/35203) | 🔴 长期讨论，短期内不会落地 |
| **Telegram Bot-to-Bot / Guest Bot** | [#79077](https://github.com/openclaw/openclaw/issues/79077) `stale` | 🟡 暂搁置；Telegram 5 月官方已发出能力 |
| **Per-agent/per-cron 请求头自定义** | [#79990](https://github.com/openclaw/openclaw/issues/79990)（PR 长期 open） | 🟢 贡献者已通过 PR 提供实现，尚未合并 |
| **Gemini 3.1 Flash-Lite GA 升级** | [#80380](https://github.com/openclaw/openclaw/issues/80380)（14 评论） | 🟢 可能快 – 只是模型 ID 替换 |
| **Google OAuth profile 桥接到 CLI runtime** | [#88748](https://github.com/openclaw/openclaw/issues/88748) | 🟢 已有 PR，合并风险标记为 auth-provider |
| **Webchat prompt cache 命中率恢复** | [#89139](https://github.com/openclaw/openclaw/issues/89139)（4 评论，新 Issue） | 🟢 可能进入下一版 – 影响用户体验 |
| **Discord ws 8.21.0 接收限制绕过** | [#89041](https://github.com/openclaw/openclaw/issues/89041) | 🟢 P1 已修复，有望合并 |

---

## 7. 用户反馈摘要

痛点提炼（按频次与严重性）：

1. **"静默失败"类体验最招忌**：message_tool 不投消息、memoryFlush 失败被当成回复、群聊 `failed` 终态吞消息……用户普遍反馈"nothing happened"比报错更令人困惑。建议团队为用户侧更好的"错误可观测性"给予 P0 级投入。
2. **Token 成本敏感**：Codex runtime 与 PI runtime 的 token 消耗差异（3–4×）仍然是高级用户（尤其 ChatGPT Plus 订阅用户）的核心关切；prompt cache 命中率下降在 webchat 也被广泛关注。
3. **升级必读破坏性变更**：多个 Issue 反馈"升级后突然出现"，尤其是 `2026.5.27` 对 Codex 对接的改动（compaction 回退、OAuth profile 断裂）。建议每个 Beta 版本发布时提供更显眼的 **Breaking Changes** 摘要。
4. **渠道间体验不均**：Feishu DM/群聊丢消息、Telegram TTS 抖动、QQBot 重复……多通道场景下稳定性差异仍是普通用户流失的高风险点。
5. **正面信号**：维护者 steipete、Jerry-Xin 等人通过密集 PR 群在 24h 内覆盖多个 P1，响应速度显著，社区对此有感知。

---

## 8. 待处理积压（建议维护者优先注意）

| Issue | 原因 | 优先级建议 |
|---|---|---|
| **[#80040](https://github.com/openclaw/openclaw/issues/80040)** – OAuth 失效 + provider 切换 + 会话级联失败（3 合 1） | 已 stale，但描述的现象在后续版本仍复现 | 🟠 建议复盘、拆分为独立跟踪 |
| **[#80380](https://github.com/openclaw/openclaw/issues/80380)** – Gemini 3.1 Flash-Lite GA 升级 | 14 评论、4 赞；GA 已 3 周未响应 | 🟢 尽快给出 PR |
| **[#78055](https://github.com/openclaw/openclaw/issues/78055)** – Subagent announce 旧结果泄漏 + 无关历史继承 | P1、主仓库 tester 提交，仍 open | 🟠 建议加入 next milestone |
| **[#80607](https://github.com/openclaw/openclaw/issues/80607)** – 非默认 agent 使用 `embedded_run` 导致 10–17s 延迟 | P2 但 5 赞 + 有 Perf 标签 | 🟡 明确是否加入性能优化 backlog |
| **[#75767](https://github.com/openclaw/openclaw/issues/75767)** – macOS SMB 挂载量 gateway restart hang | stale 且未复现 | 🟡 closing candidate |
| **[#88838](https://github.com/openclaw/openclaw/issues/88838)** – SQLite 迁移 accessor seam | 有新 PR 但整体跟踪分散 | 🟠 需要明确 milestones / owner |
| **[#83933](https://github.com/openclaw/openclaw/issues/83933)** – cron deleteAfterRun 手动运行语义 | 关联 fix PR 已 open 近 2 周未合并 | 🟢 建议 review |
| **[#79990](https://github.com/openclaw/openclaw/issues/79990)** – per-agent/per-cron 请求头 | 长期 open，但已有 PR，可能被遗忘 | 🟢 建议 maintainers 重新认领 |

---

**总结**：OpenClaw 当前处于"高并发迭代-快速修回归-推进 SQLite 迁移"的密集开发阶段，社区活跃但多处"静默失败"体验问题尚未收敛。建议优先解决 **message loss 系列 P1**、尽快给出 **Gemini GA / webchat cache** 的跟进，并对 SQLite 迁移设立阶段性里程碑，以降低跟踪碎片化带来的协作成本。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析

**生成日期**：2026-06-02 | **核心参照**：OpenClaw | **数据来源**：各项目 GitHub 仓库

---

## 1. 生态全景

当前个人 AI 助手开源生态处于 **"高并发迭代与架构分化并行"** 的阶段。OpenClaw 作为吞吐量最大的核心参照项目，单日 471 Issue / 500 PR 的更新量远超同类，已跻身"基础设施级"项目的行列。其余项目按活跃度形成鲜明分层——NanoBot、Hermes Agent、IronClaw、CoPaw 处于高速迭代的第二梯队，而 NanoClaw、Moltis、ZeptoClaw、PicoClaw、NullClaw 处于渐进式修补阶段。整体来看，社区关注焦点正从"能否跑起来"转向"能否稳定跑得久"——token 成本控制、会话持久化、模型兼容三大质量指标成为共性考核标准。

---

## 2. 各项目活跃度对比

| 项目 | Issues（开→闭） | PR（开放→合并/关闭） | Release | 健康度 |
|---|---|---|---|---|
| **OpenClaw** | 295 → 176 | 396 → 104 | 3 Beta | ⭐⭐⭐⭐⭐ |
| **NanoBot** | 3 新 / 25 闭 | 13 → 17 | v0.2.1 正式版 | ⭐⭐⭐⭐ |
| **Hermes Agent** | ~50 更新 | ~50 更新（22 PR 关门） | 无新版本 | ⭐⭐⭐⭐ |
| **IronClaw** | 11 新 / 1 闭 | 14 → 32 | 无新版本 | ⭐⭐⭐⭐ |
| **CoPaw** | 32 → 18 | 26 → 9 | v1.1.10 + beta.2 | ⭐⭐⭐⭐ |
| **PicoClaw** | 7 新 / 0 闭 | 5 合/闭 / 6 开放 | Nightly Build | ⭐⭐⭐ |
| **NanoClaw** | 2 新 / 1 闭 | 4 开放 / 1 闭 | 无新版本 | ⭐⭐⭐ |
| **Moltis** | 0 | 3 → 1 | 无新版本 | ⭐⭐⭐ |
| **ZeptoClaw** | 1 新 | 1 → 17 | 无新版本 | ⭐⭐⭐ |
| **LobsterAI** | 1 新 | 11 合并 | v2026.6.1 正式版 | ⭐⭐⭐⭐ |
| **NullClaw** | 0 | 1 开放 | 无新版本 | ⭐⭐ |
| **TinyClaw** | 无活动 | 无活动 | 无新版本 | ⚠️ 低活跃 |

> **注**：Hermes Agent 和 IronClaw 有具体 PR 合并计数但仅提供更新总数；可能因批处理关闭多个关联 Issue 导致比例畸形。

---

## 3. OpenClaw 在生态中的定位

### 3.1 绝对规模优势

| 指标 | OpenClaw | 第二梯队均值 | 倍数 |
|---|---|---|---|
| 单日 Issue 更新 | 471 | ~30 | **~16×** |
| 单日 PR 更新 | 500 | ~25 | **~20×** |
| 版本发布密度（24h） | 3 Beta | 0–2 | 领先 |

OpenClaw 的堆栈对同类项目的 **Issue/PR 吞吐量呈现数量级差距**，已进入"规模化开源组织"模式。

### 3.2 技术路线差异

| 维度 | OpenClaw | NanoBot | Hermes Agent | IronClaw |
|---|---|---|---|---|
| **核心引擎** | 自研 Agent Runtime（Codex/PI 双引擎） | 轻量 Agent 框架 | 自研 Gateway 代理层 | 双引擎（Legacy + Reborn v2） |
| **会话存储** | JSON 文件中转，正在迁移 SQLite | 未明确 | 文件系统持久化 | Reborn 内置存储 + DB Migration |
| **多渠道路由** | 12+ 渠道（Telegram/WhatsApp/iMessage/Slack/飞书/QQ 等） | Telegram + WhatsApp + Discord + QQ + 钉钉 | Discord/Slack/Telegram/WhatsApp 等 8+ | 以 IM 为王，支持飞书 WebSocket 长连接 |
| **扩展模型** | Plugin + SDK | Skill 集成 | Skills + MCP + Hooks | Extension + OAuth + Notion/GSuite/GitHub 一体化 |
| **稳定性短板** | token 膨胀 3–4×（Codex vs PI）、静默丢消息 | agent 模式偶发全报错无根因 | Gateway 响应丢失、cron 格式容错 | compaction 语义一致性、E2E 宕机 6 天 |

### 3.3 生态护城河判断

OpenClaw 的核心壁垒在于**多渠道路由的覆盖面与深度**（iMessage、WhatsApp 等少数渠道具备通讯层直连能力）以及 **Plugin/SDK 体系** 的成熟度。NanoBot 走"轻量+可嵌入"路线，Hermes 走"社区技能生态"路线，IronClaw 走"Reborn 云原生"路线，三者在各自维度形成差异化防御，但目前没有任何单一项目能覆盖 OpenClaw 的全量渠道矩阵。

---

## 4. 共同关注的技术方向

以下需求在 ≥2 个项目中同时出现，构成了当前生态的共性技术议题：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Token 成本控制** | OpenClaw (#89139 29%→93% cache hit 下跌)、NanoBot (#2482 heartbeat 空跑)、PicoClaw (#2781 技能目录 PR token 优化 30–70%)、NanoClaw (#4142 cache miss) | 减少无意义的 LLM 调用、压缩系统 prompt 体积、恢复 prompt cache 命中 |
| **会话持久化攻坚** | OpenClaw (SQLite 迁移 #89261/#89262)、IronClaw (compaction 语义一致性 #4309–#4314)、NanoClaw (#2669 crash-loop)、Moltis (#1089 rehydration 容错) | 从"能读到数据"升级到"数据永远安全一致"，长会话场景已对所有项目构成压力测试 |
| **模型兼容性补丁** | OpenClaw (#88946/#88976 Azure/Mistral)、NanoBot (#4126 Azure AAD)、PicoClaw (#2982/#2939/#2942 Bedrock/Anthropic Opus 4.x)、LobsterAI (#2089 MiniMax M3) | 模型版本迭代速度已超过框架适配速度，400 报错成为社区高频事件 |
| **Cron / 定时任务鲁棒性** | OpenClaw (#85249/#83933)、Hermes Agent (#36867 cron 宕机、#37070 投递不可达)、CoPaw (#4653/#4649/#4835 cron 系列 4 个热点 Issue) | 三个项目同日出现 cron 相关 P1，说明跨会话的"后台触发"是一个被系统性低估的难点 |
| **安全沙箱误报** | OpenClaw (#84038 doctor 误报)、PicoClaw (#1042 guardCommand 正则误杀 90 天积压)、Hermes Agent (#37036 skills_guard 误报) | 安全守卫的可用性正在反噬各类生态——过于粗暴的正则或黑名单让用户无法使用基本工具 |
| **多渠道体验一致性** | OpenClaw (飞书/QQ/Telegram 多路回归)、NanoBot (#4133 Telegram 静默丢消息)、Hermes Agent (#29346 Discord 响应丢失)、ZeptoClaw (#592/#610 NIM provider 路由失败) | 渠道数量增加与每渠道深度稳定之间形成明显张力，"长尾渠道"质量拖后腿 |
| **自动化 Agent 能力自持** | OpenClaw (Steering + message_tool 修复群)、Hermes Agent (#5354 确定性工作流引擎)、IronClaw (#4301 Trigger Poller)、PicoClaw (#2937 Agent 协作总线) | Agent 不再只是"被调用工具"，而是需要管理自己的任务、调度子 Agent、自动恢复错误 |

---

## 5. 差异化定位分析

### 5.1 目标用户与核心卖点

| 项目 | 目标用户 | 核心卖点 | 架构哲学 |
|---|---|---|---|
| **OpenClaw** | 极客/高级用户、多平台重度使用者 | 最全渠道矩阵 + Plugin SDK | "全能工具箱"——用复杂性换覆盖面 |
| **NanoBot** | 开发者/小团队 | 轻量可嵌入 + Heartbeat 机制 + fast-whisper 本地 ASR | "最小可用"——用精简换部署灵活性 |
| **Hermes Agent** | 研究者 / 技能生态贡献者 | Skills 社区 + Gateway 代理 + 多角色路由 | "社区驱动"——用开放生态换扩展性 |
| **PicoClaw** | 国内用户 / 嵌入式开发者 | Server酱渠道 + 多 Provider + Collaborative Agent Bus | "本地化 + 前沿架构"——用垂直场景切入 |
| **IronClaw** | 团队协作 / 企业用户 | 双引擎（Legacy + Reborn）+ OAuth 全家桶 + 成本预算 | "生产就绪"——用企业级功能换信任 |
| **LobsterAI** | 终端用户（消费者向） | Kit 专家套件市场 + Cowork 会话分叉 + 微信深度集成 | "产品化体验"——用 UI/UX 换用户黏性 |
| **CoPaw** | 企业开发者 | Spawn Subagent + MCP 共享池 + AgentScope SDK | "SDK 生态"——用标准接口换平台锁定 |
| **NanoClaw** | Docker/K8s 运维者 | rootless Podman 兼容 + Provider 容错链 | "部署弹性"——用基础设施兼容换取运维友好 |
| **Moltis** | 隐私敏感用户 | TEE-aware provider + 显式能力策略 + Codex 链路 | "治理能力"——用严格声明换安全性 |
| **ZeptoClaw** | CLI 爱好者 | Rust 编写 + Binary Size 门禁 + RustSec 零容忍 | "精益工程"——用工程纪律换发布体积极致 |

### 5.2 关键架构取舍

- **自研 Runtime vs SDK 嵌入**：OpenClaw、Hermes、IronClaw 选择自研 Agent Runtime，换取最大控制力但维护成本极高；CoPaw 拥抱 AgentScope 2.0 SDK 迁移（标记为 Breaking Change），用生态锁定换可维护性。
- **单 Agent vs 多 Agent 协作**：PicoClaw (#2937 Agent 协作总线) 和 IronClaw (Trigger Poller) 已越过单 Agent 范式；OpenClaw、NanoBot 仍以单 Agent + Tool 调用为主。
- **渠道驱动 vs 能力驱动**：OpenClaw/LobsterAI/CoPaw 以 IM 渠道接入数量区分竞品；IronClaw/Hermes 则以 Workspace 能力（GSuite/GitHub/Notion）为护城河。

---

## 6. 社区热度与成熟度（活跃度分层）

### 第一梯队：基础设施级项目

| 项目 | 迭代阶段 | 典型特征 |
|---|---|---|
| **OpenClaw** | 快速迭代 + 质量修补并行 | 500 PR 吞吐量提供足够"试验田"，P1 修复节奏快，但"静默失败"类体验问题仍在暴露成熟度缺口 |
| **IronClaw** | 架构攻坚期 | Reborn 的 compaction、Trigger Poller、OAuth 三条线同步推进，高强度但 CI 红灯 6 天未解 |

### 第二梯队：功能扩展期项目

| 项目 | 迭代阶段 | 典型特征 |
|---|---|---|
| **NanoBot** | 功能扩张 Web 平台化 | v0.2.1 将 WebUI 升级为"工作台"，渠道持续丰富，但 82 天积压的技能开关 issue (#1932) 暴露优先级判断问题 |
| **Hermes Agent** | 社区驱动的功能迭代 | Searxng/Brave 搜索后端合计 53 赞体现明确需求方向，但响应速度滞后 |
| **CoPaw** | 双轨（修 Bug + 准备大版本） | AgentScope 2.0 Breaking Change 进行中，cron 系统 4 个叠加 Issue 暴露设计级缺陷 |

### 第三梯队：工程维护期项目

| 项目 | 迭代阶段 | 典型特征 |
|---|---|---|
| **ZepetoClaw** | 精简体积 + 依赖治理 | 单一维护者高度自动化；核心 provider 路由 bug 依赖外部 PR cherry-pick |
| **PicoClaw** | 品质收敛 | agent 协作总线是方向亮点，但 3 个 Anthropic 兼容 PR 和安全沙箱误报 90 天积压有待解决 |
| **Moltis** | 基础设施加固 | rehydration 稳定性 + provider 能力模型表明进入"内核打磨"阶段，节奏适合低风险迭代 |
| **NanoClaw** | 护城河型基建 | rootless Podman + Provider 容错链的目标明确，产出质量高但速率偏低 |

### 低活跃观察

| 项目 | 状态 |
|---|---|
| **NullClaw** | 基本停滞，仅 1 条 PR 未合并 |
| **LobsterAI** | 较强交付速率但社区反馈极少（明显依托闭源/企业渠道运营） |
| **TinyClaw** | 过去 24h 零活动，需观察是否已停止维护 |

---

## 7. 值得关注的趋势信号

### 趋势一：从"能对话"到"能持久运行"

**证据**：OpenClaw SQLite 迁移、IronClaw compaction Issue 集群、NanoClaw crash-loop 恢复、Moltis rehydration cap——所有高活跃项目同时将"会话持久化一致性"列为优先事项。

**对开发者的启示**：Agent 系统的可靠性瓶颈已从"LlmInference错误"转移到"状态管理层"。在设计新系统时应优先考虑 transcript 格式版本化、checkpoint 幂等性、rehydration 容错三大基础设施。

### 趋势二：Token 成本从隐性担忧转为显性指标

**证据**：OpenClaw webchat prompt cache 从 93% 跌至 29% 成为热点 Issue、Hermes #5354 用户要求"确定性工作流引擎"以绕过重规划、NanoBot heartbeat 空跑优化终于合入、PicoClaw #2781 技能目录 token 减少 30–70%。

**对开发者的启示**："不做 LLM 调用"已成为一种架构决策——prompt caching 命中率、tool_result 裁剪、确定性子流程绕过 LLM 三类策略应作为 Agent 框架的内建能力，而非用户侧补丁。

### 趋势三：安全守卫与可用性的矛盾开始集中爆发

**证据**：OpenClaw doctor 误报、PicoClaw guardCommand 90 天积压且 15 条评论为全仓库最高热度、Hermes skills_guard 将教学性文字标为 DANGEROUS。

**对开发者的启示**：白名单制 + 意图参数分析（而非正则匹配）应是安全守卫的底线策略。任何会导致"curl wttr.in 天气查询被拦截"的粗暴实现已不可接受。

### 趋势四：多 Agent 协作从概念走向架构级落地

**证据**：PicoClaw Agent 协作总线（per-agent mailbox + 投递状态机制）PR #2937 已提交、IronClaw Trigger Poller + product outbound orchestration 系列 PR 合入、CoPaw Spawn Subagent 进入 v1.1.10、OpenClaw multi-agent 长期讨论（#35203）推动 SDK 抽象。

**对开发者的启示**：单 Agent + MCP Tool 已不足以满足复杂工作流需求。Agent 间通信协议（A2A envelope）、任务路由策略（per-channel isolation）、失败恢复机制（retry + dead-letter）应作为框架层面的标准组件提供。

### 趋势五："静默失败"成为最被痛恨的反模式

**证据**：OpenClaw 今日 3 条 P1（message_tool 静默丢消息、session takeover 丢消息、failed 终态吞消息）合计评论量居前；Hermes #29346/Gateway 响应丢失从"response ready"到"Sending response"之间断裂；CoPaw #4818 cron agent 执行轨迹为空。

**对开发者的启示**：Agent 框架应强制要求——任何"预期应产出用户可见结果"的执行路径都必须在失败时回传明确错误信号给用户，哪怕是以降级形式。日志中的 `response ready` 对用户毫无意义。

### 趋势六：IM 渠道已进入"长尾质量攻坚"阶段

**证据**：OpenClaw Telegram TTS 抖动、飞书群聊丢消息、QQ 重复消息；NanoBot Telegram 回复静默丢失；CoPaw 微信投递失败；ZeptoClaw NIM provider 路由误报。

**对开发者的启示**：每新增一个 IM 渠道不应只是"adapter 接入"，更需要包含完整的端到端 E2E 测试矩阵和质量监控。渠道质量已成为用户留存的决定性因素，而非加分项。

---

> **总结一句话**：个人 AI 助手开源生态已从"谁的 agent 能跑"的分散竞争，进入"谁的 agent 能不出错地持续运行"的质量淘汰赛。**持久化一致性、token 经济模型、安全守卫精度、多 Agent 协作协议** 四大方向，将决定下一阶段的项目格局。

---

*报告由 OWL 基于各项目 GitHub 公开数据生成 · 2026-06-02*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-06-02

---

## 1. 今日速览

NanoBot 今日处于**高活跃维护期**：24小时内处理了 28 条 Issue（关闭 25 条、新开 3 条）和 30 条 PR（合并/关闭 17 条、待合并 13 条），并同步发布了 **v0.2.1** 版本。整体来看，积压 Issue 正在被快速清理，大量 PR 集中在会话稳定性、WebUI 体验和多渠道扩展三个方向推进。社区贡献者参与度高，多个长期悬而未决的问题在本轮得到集中收敛。项目健康度评估：**良好——维护节奏稳健，下游阻塞问题有响应。**

---

## 2. 版本发布

### 🐈 nanobot v0.2.1

> 🔗 Release: [v0.2.1](https://github.com/HKUDS/nanobot/releases/tag/v0.2.1)

- **合并 84 个 PR，新增 17 位贡献者。** 本轮是一个较大的迭代版本。
- **核心亮点：WebUI 成为实际工作台。** 聊天界面更流畅、更快、更可信：实时文件编辑以活动流形式呈现，工具调用 trace 渲染更完善。
- **迁移注意事项：** 未在数据中明确标注 Breaking Change，但涉及 WebUI 运行时状态重构（[#4135](https://github.com/HKUDS/nanobot/pull/4135)），建议升级后验证 WebUI 的 WebSocket 推送和状态同步是否正常。

---

## 3. 项目进展

今日合并/关闭的代表 PR 主要集中在以下方向：

### ✅ 已合并/关闭（17 条）

| PR | 方向 | 摘要 |
|---|---|---|
| [#4143](https://github.com/HKUDS/nanobot/pull/4143) | 会话/内存 | 重构 session 保留逻辑，返回明确的 `RetentionResult`，解决上下文推断歧义 |
| [#4124](https://github.com/HKUDS/nanobot/pull/4124) | 模型兼容性 | 修复 mimo/glm 等模型以 XML 文本形式发出 tool_calls 导致原始 XML 泄露到聊天频道的问题 |
| [#3126](https://github.com/HKUDS/nanobot/pull/3126) | Cron 静默 | 修复 cron 任务在输出最终结果前发送中间 thinking 消息的噪音问题 |
| [#2482](https://github.com/HKUDS/nanobot/pull/2482) / [#2435](https://github.com/HKUDS/nanobot/pull/2435) | Heartbeat 优化 | 合并多个针对 heartbeat 空跑浪费 token 的优化——当 HEARTBEAT.md 无活跃任务时跳过 LLM 调用 |
| [#4016](https://github.com/HKUDS/nanobot/pull/4016) | 钉钉渠道 | 新增 `group_user_isolation` 配置，实现钉钉群聊按用户隔离 Session |
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | WebUI 架构 | 将 WebUI 运行时状态迁移到事件总线，解耦状态通知逻辑 |
| [#3723](https://github.com/HKUDS/nanobot/pull/3723) | 语音转写 | 集成 faster-whisper 支持本地语音转写（无需 API Key） |

### ⏳ 待合并（13 条，关注重点）

| PR | 方向 | 摘要 |
|---|---|---|
| [#4147](https://github.com/HKUDS/nanobot/pull/4147) | 内存/并发 | 为 `append_history` 加锁，修复并发写入时的 cursor 重复 bug (#4081) |
| [#4148](webui) | WebUI | 已发送消息的内联编辑按钮 |
| [#4139](https://github.com/HKUDS/nanobot/pull/4139) | 云平台部署 | 新增 `deploy/cloud/` 抽象层，统一 HF Spaces / ModelScope 部署 |
| [#4141](https://github.com/HKUDS/nanobot/pull/4141) | 搜索渠道 | 新增 Volcengine 搜索引擎 provider |
| [#4146](https://github.com/HKUDS/nanobot/pull/4146) | QQ 渠道 | Napcat (QQ) OneBot v11 WebSocket 渠道（从 #3509 回迁至 main） |
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) | 认证 | Azure OpenAI 支持 Azure AAD 身份认证（替代 API Key） |
| [#4122](https://github.com/HKUDS/nanobot/pull/4122) | WebUI/语音 | WebUI 录音 + 本地 FunASR 转写 |
| [#4138](https://github.com/HKUDS/nanobot/pull/4138) | 工具配置 | 新增 `tools.file.enable` 开关控制内置文件系统工具的注册 |

### 📌 项目整体进展

```
稳定性 +++++ ████████░░  会话/内存/并发修复正在收敛
渠道扩展 +++  ██████░░░░  QQ/Napcat、钉钉隔离、Volcengine 搜索持续补充
WebUI    ++++ ███████░░░  事件总线重构 + 编辑/录音功能上线
模型兼容 +++  ██████░░░░  XML tool_call、Azure AAD、image provider 均在完善
Heartbeat ++  █████░░░░░  空跑优化终于合并，节省用户 token 开支
```

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 方向 | 分析 |
|---|---|---|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) (18 条评论) | Bug: 无论发什么消息都回复报错 | 用户反馈 agent 模式下所有消息均报错，重装/清除无效。评论量最高说明影响面广，可能与特定模型/配置组合有关，主注册模式下正常但 agent 模式异常。**已关闭**，但根因未在当前数据中明确。 |
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) (8 条评论) | Feature: 技能无法禁用只能删除 | 用户需要灵活的技能开关管理能力。这是一个长期悬而未决的 UX 痛点——当前只能删除技能来禁用，缺乏 enable/disable 语义。 |
| [#101](https://github.com/HKUDS/nanobot/issues/101) (6 条评论) | Feature: 免费 API 作为默认端点 | 用户希望使用 Google/Grok 免费 API 替代 OpenRouter。反映了降低使用成本的强烈需求。**已关闭**，说明已有回应但可能未完全满足。 |
| [#3028](https://github.com/HKUDS/nanobot/issues/3028) (4 条评论) | Bug: 心跳触发时重复创建定时任务 | v0.15 版本下心跳和 cron 双重触发导致重复发送。揭示了 heartbeat 与 cron 系统的职责边界模糊问题。 |
| [#1536](https://github.com/HKUDS/nanobot/issues/1536) (4 条评论, 👍3) | Feature: MCP 断连重连 | Kubernetes 环境下 MCP server 迁移后 nanobot 无法自动恢复，需重启 agent。👍 数较高，说明生产环境用户关注此问题。 |

### 💡 社区诉求暗线

1. **成本控制** 是高频主题：heartbeat 空跑 (#2406/#2482/#2435)、cron 消息噪音 (#3064)、免费 API 端点 (#101)、cache miss token 优化 (#4142)。
2. **多渠道路由** 是第二大主题：钉钉群隔离 (#4016)、QQ/Napcat (#4146)、Discord bot-to-bot (#3217)、WhatsApp chatid 文档纠错 (#115)。
3. **可观测性/状态感知**：用户希望 `/status` 命令 (#2131)、WebSocket 推送 outbound 消息 (#2819)，说明 IM 渠道下用户缺乏对 agent 内部状态的感知手段。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#2880](https://github.com/HKUDS/nanobot/issues/2880) | agent 模式下所有消息回复报错，重装无效 | 已关闭（根因不明） |
| 🔴 高 | [#4133](https://github.com/HKUDS/nanobot/issues/4133) | 工具调用后 agent 回复静默丢失（Telegram） | 未修复 |
| 🟡 中 | [#4128](https://github.com/HKUDS/nanobot/issues/4128) | `retain_recent_legal_suffix` else 分支导致用户消息重复归档 | **待修复** → 相关 Issue #4136 和 PR #4135/#4143 正在跟进 |
| 🟡 中 | [#4069](https://github.com/HKUDS/nanobot/issues/4069) | Dream cron 任务未检查 enabled/manual-memory-mode 就无条件注册 | 待修复 |
| 🟡 中 | [#3028](https://github.com/HKUDS/nanobot/issues/3028) | 心跳触发重复创建定时任务 | 已关闭（未确认修复版本） |
| 🟡 中 | [#3064](https://github.com/HKUDS/nanobot/issues/3064) | Cron 发送中间 thinking 消息 | **已修复** → PR #3126 已合并 |
| 🟢 低 | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | GPT 模型出现 Duplicate item 错误 | 已关闭 |
| 🟢 低 | [#2601](https://github.com/HKUDS/nanobot/issues/2601) | agent 模式下 cron 提醒未送达 | 已关闭 |
| 🟢 低 | [#115](https://github.com/HKUDS/nanobot/issues/115) | README 中 WhatsApp chatid 文档错误（缺少 + 号） | 已关闭 |

> ⚠️ **需关注：** #4133（工具调用后回复静默丢失）在 6 月 1 日当日仍活跃，可能存在回归风险，建议确认是否已定位根因。

---

## 6. 功能请求与路线图信号

### 已提出且正在推进的功能

| 需求 | Issue | 相关 PR | 信号强度 |
|---|---|---|---|
| QQ 渠道支持 | 长期需求 | PR #4146 (Napcat) | 🟢 高 - 已接近合并 |
| 云平台部署层 | 长期需求 | PR #4139 (HF Spaces / ModelScope) | 🟢 高 - 新增 9 文件 +851 行 |
| Azure AAD 认证 | #4125 | PR #4126 | 🟢 高 - 待 Review |
| 语音转写（本地） | 长期需求 | PR #3723 (已合并), #4122 (WebUI 端) | 🟢 中 - 后端已完成 |
| 技能开关管理 | #1932 | 无 | 🔴 中 - 8 条评论但无 PR |
| /status 命令 | #2131 | 无 | 🔴 中 - 持续需求 |
| Hooks 机制 | #2182 (👍2) | 无 | 🟡 低 - 类似 Claude Code 生命周期 hooks |
| WebSocket 消息推送 #2819 | 无 | 🟡 低 | 长期架构方向 |

### 可能纳入下一版本的信号

- **`tools.file.enable`** (#4138)：与已有的 `tools.exec.enable`、`tools.web.enable` 对称，填补了配置一致性缺口，很可能快速合并。
- **自定义 image generation provider** (#4132, #3903)：#3903 已定位 MIME 类型和 HTTP 客户端绕过的 bug，#4132 提出 custom provider 需求，两者可能合并处理。
- **Heartbeat + Cron 混合优化**：#3126 和多个 heartbeat PR 刚合入，后续可能进一步整合调度层。

---

## 7. 用户反馈摘要

### 😤 不满意/痛点

- **"用 nanobot agent 的话就能正常回复，卸载重装清空都无效"** — Issue #2880。agent 模式下的报错问题与用户环境强相关，排查门槛高，用户体验极差。
- **"这对暂时无法接触到终端的用户不太友好"** — Issue #2131。IM 用户缺乏状态感知手段，既无法确认 bot 状态，又担心发消息污染上下文。
- **"当前系统的心跳机制在触发时，直接创建了定时任务"** — Issue #3028。系统设计层面 heartbeat 和 cron 职责边界不清。

### 👍 满意/认可方向

- v0.2.1 发布说明"WebUI becoming the place where work actually happens"反映了团队对用户体验的重视，与 PR #4135（事件总线重构）、#4148（消息编辑）一脉相承。
- Heartbeat 空跑优化（PR #2482/#2435）终于落地，多个 Issue 共振说明节省 token 成本是用户的真实诉求。
- QQ/Napcat 渠道从 community PR (#3509) 回迁至 main (#4146)，说明团队在积极接纳社区贡献。

### 📌 使用场景画像

| 场景 | 代表 Issue |
|---|---|
| Kubernetes 环境 + MCP 多节点 | #1536 |
| Telegram 轻量化 / 远程确认 | #4133, #2131 |
| 钉钉企业群聊隔离 | #4016 (已解决) |
| QQ 生态集成 | #4146 |
| 本地语音转写（隐私优先） | #3723 (已合并), #4122 |
| 免费/低成本 API 端点 | #101 |
| 云平台零配置部署 | #4139 |

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或状态不明，建议维护者关注：

| 项目 | 创建日期 | 持续天数 | 说明 |
|---|---|---|---|
| [#1932](https://github.com/HKUDS/nanobot/issues/1932) 技能开关 | 2026-03-12 | **82 天** | 8 条评论、`good first issue` 标签但无 PR，用户反复请求 enable/disable 能力 |
| [#2182](https://github.com/HKUDS/nanobot/issues/2182) Hooks 机制 | 2026-03-17 | **77 天** | 3 条评论、👍2，类似 Claude Code 的 hooks 系统，架构级需求但无跟进 |
| [#3217](https://github.com/HKUDS/nanobot/issues/3217) Discord bot-to-bot 通信 | 2026-04-16 | **47 天** | 仅 1 条评论，提到了 `message.author.bot` 硬编码问题 |
| PR [#3994](https://github.com/HKUDS/nanobot/pull/3994) 注册驱动 provider 配置 | 2026-05-25 | **8 天** | 引入 Bedrock region/profile 配置字段，架构方向正确但未被 Review |
| PR [#4138](https://github.com/HKUDS/nanobot/pull/4138) `tools.file.enable` | 2026-06-01 | **1 天** | 与 `tools.exec.enable` 对称，建议尽快 Review |
| [#4142](https://github.com/HKUDS/nanobot/issues/4142) Cache miss token 成本优化 | 2026-06-01 | **1 天** | Discussion 类型，DeepSeek V4 Flash 等模型下 cache miss 成本占比突出的讨论 |
| [#4136](https://github.com/HKUDS/nanobot/issues/4136) Retention result API 重设计 | 2026-06-01 | **1 天** | 针对 #4135 和 #4129 修复后的后续重构建议 |

> 📋 **优先建议：** #1932（技能开关）困扰用户最长且标签为 `good first issue`，可邀请社区认领以减轻维护压力。#2182 (Hooks) 是架构级需求，建议由维护者在设计上先给出 RFC，避免社区 PR 方向不一致。

---

*日报由 OWL 基于 HKUDS/nanobot GitHub 数据生成 · 2026-06-02*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-02

---

## 1. 今日速览

Hermes Agent 今日处于**高活跃、高强度维护**状态：过去 24 小时内 Issues 与 PR 各更新 50 条，社区 Bug 报告与功能讨论持续涌入。今日无新版本发布，但合并/关闭了 **22 个 PR**，修复集中在 **Gateway 代理/响应丢失、Agent 工作目录解析、Cron 子系统稳定性、Dashboard Docker 体验**等核心路径。多个高赞 Feature Request（Searxng 搜索、多角色路由、Brave Search 后端）仍处于开放状态，显示社区对扩展性的强烈诉求。整体项目健康度：**高交付节奏，积压可控，但 P1/P2 Bug 修复仍需关注**。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为近期发布的版本，今日所有变更均为 main 分支的持续集成。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 作者 | 状态 | 内容摘要 |
|---|---|---|---|
| [#34336](https://github.com/NousResearch/hermes-agent/pull/34336) | banditburai | ✅ Merged | **修复 Gateway 工具调用后响应静默丢失**（closes #29346）。工具调用轮次产出的最终答案未被用户收到，日志显示 `response ready` 但无 `Sending response`。修复了网关侧两个独立根因，并增加了非空响应的强不变量检测。**可靠性重大修复**。 |
| [#35028](https://github.com/NousResearch/hermes-agent/pull/35028) | banditburai | ✅ Merged | **修复 Agent 工作目录解析错误**（closes #24882、#24969、#27383）。Agent 启动目录错误地回退到守护进程安装目录而非 `terminal.cwd` / `TERMINAL_CWD`，导致 gateway、cron、Telegram 会话中模型工作目录错误。通过统一读取 `TERMINAL_CWD` 的单一路径方法修复。**影响面广的回归修复**。 |
| [#35117](https://github.com/NousResearch/hermes-agent/pull/35117) | banditburai | ✅ Merged | **修复 Weixin(微信) asyncio.wait_for 超时崩溃**。恢复 @caojiguang 的生产修复，添加回归测试套件，解决更广泛的微信 asyncio 超时集群问题。 |
| [#35988](https://github.com/NousResearch/hermes-agent/pull/35988) | athebolt | ✅ Merged | **修复 `honcho_conclude` 静默失败**。`create_conclusion()` / `delete_conclusion()` 因缺少 `workspace_id` 导致所有写入尝试静默失败，现已修复。 |
| [#37085](https://github.com/NousResearch/hermes-agent/pull/37085) | benbarclay | ✅ Merged | **修复 Dashboard Docker 环境下的 Update 按钮**（closes #34347）。前端现在展示 Docker 更新指引而非原始 SystemExit 错误信息。 |
| [#37088](https://github.com/NousResearch/hermes-agent/pull/37088) | bfm92485 | ✅ Merged | **修复 Codex Responses SDK 在 null output 时的解析器崩溃**。`get_final_response()` 返回 `output=None` 时 OpenAI Responses SDK 抛出 `TypeError`，已恢复。 |
| [#37091](https://github.com/NousResearch/hermes-agent/pull/37091) | teknium1 | 🔄 Open | **BlueBubbles/iMessage 群聊 mention 门控支持**。恢复 #35606 的工作，Hermes 在群聊中仅在唤醒词响应，与其余 8 个平台对齐。 |
| [#37059](https://github.com/NousResearch/hermes-agent/pull/37059) | justinh20 | 🔄 Open | **OpenAI 和 Google Gemini 的 `service_tier flex/priority` 支持**。为延迟敏感型工作负载（cron、后台子代理）提供约 50% 成本削减路径。 |

**项目整体进展评估**：今日合并的 PR 集中在**稳定性与数据一致性**修复，特别是响应丢失和工作目录错误这两个严重问题，标志着 v0.15.x 分支的成熟度在稳步提升。BlueBubbles 功能恢复和 service_tier 支持显示新功能也在并行推进。

---

## 4. 社区热点

### 🔥 讨论最活跃 / 反应最多的 Issues

| Issue | 类型 | 👍 | 评论 | 摘要 |
|---|---|---|---|---|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | Feature | **30** | 5 | **请求将 Searxng 添加为默认 Web 搜索后端**（与 Firecrawl、Tavily 并列）。👍 数最高，显示社区对自托管搜索的强需求。 |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | Feature | **23** | 5 | **请求添加 Brave Search 作为原生 web 搜索后端**。强调 Brave 的免费额度和成本效益。 |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | Feature | **13** | 3 | **内置自动备份与版本控制**（针对 `~/.hermes/`）。用户希望原生支持 agent memory、skills、对话历史的增量备份，防止 agent 学习状态丢失。 |
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | Feature | **8** | 7 | **确定性工作流引擎（Lobster 风格）**。用户希望在关键任务/重复任务中绕过 LLM 重规划以节省 token 成本，讨论最深入（7 条评论）。 |
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) | Feature | **14** | 5 | **Gateway Hooks 多角色自动路由**（已升级为 v2，对齐 v0.14.0 架构）。引入上下文分类器和误路由恢复机制。 |
| [#10149](https://github.com/NousResearch/hermes-agent/issues/10149) | Bug | **16** | 1 | **辅助 LLM provider 未正确配置**。用户设置了 `OPENROUTER_API_KEY` 但仍收到辅助 provider 未配置警告，今日已关闭。 |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | Feature | **10** | 5 | **原生 Google Cloud Vertex AI provider 支持**。Vertex 使用短期 OAuth 访问令牌路径，当前 Hermes 缺乏认证机制。 |

### 分析
- **搜索后端生态**是最大社区信号：#5941（Searxng，👍30）和 #10644（Brave，👍23）合计超过 50 赞，强烈表明用户需要**更多自托管/低成本搜索选项**。
- **企业级/云端需求**上升：Vertex AI（#13484）、service_tier flex（#12700、PR #37059）表明用户正将 Hermes 推向生产工作负载。
- **多智能体编排**持续受关注：#5143（多角色路由）和 #35986（Kanban 可靠性缺口）显示社区对复杂工作流编排的期待。

---

## 5. Bug 与稳定性

### P1 — 严重 / 系统崩溃

| Issue | 摘要 | 状态 | Fix PR |
|---|---|---|---|
| [#29346](https://github.com/NousResearch/hermes-agent/issues/29346) | **Discord 工具调用响应静默丢失** | ✅ Closed | [#34336](https://github.com/NousResearch/hermes-agent/pull/34336) ⬆️ 今日合并 |
| [#36867](https://github.com/NousResearch/hermes-agent/issues/36867) | **`cron/jobs.json` 非字典格式导致 `load_jobs()` 抛 uncaught AttributeError，整个 cron 子系统宕机** | 🔄 Open | 无 |

### P2 — 功能异常

| Issue | 摘要 | 状态 | Fix PR |
|---|---|---|---|
| [#35703](https://github.com/NousResearch/hermes-agent/issues/35703) | **MCP server tools 在 api_server 平台无**（Slack/CLI 正常），影响 v0.15.1 | ✅ Closed | 未标注具体 PR |
| [#19776](https://github.com/NousResearch/hermes-agent/issues/19776) | **Discord 网关连接超时过短（30s）**，slash command sync 需 28-31s 时被误杀 | 🔄 Open | 无 |
| [#29711](https://github.com/NousResearch/hermes-agent/issues/29711) | **Discord 混合附件中非图片数据被错误序列化为 Responses `input_image`**，导致 400 | 🔄 Open | 无 |
| [#24882](https://github.com/NousResearch/hermes-agent/issues/24882) | **`terminal.cwd` 未正确注入系统 prompt** | ✅ Closed | [#35028](https://github.com/NousResearch/hermes-agent/pull/35028) ⬆️ 今日合并 |
| [#24969](https://github.com/NousResearch/hermes-agent/issues/24969) | **Cron `--workdir` 未反映在 agent system prompt 的 working directory 字段** | ✅ Closed | [#35028](https://github.com/NousResearch/hermes-agent/pull/35028) ⬆️ 今日合并 |
| [#27383](https://github.com/NousResearch/hermes-agent/issues/27383) | **Telegram agent working directory 不可配置** | ✅ Closed | [#35028](https://github.com/NousResearch/hermes-agent/pull/35028) ⬆️ 今日合并 |

### P3 — 体验 / 边缘

| Issue | 摘要 | 状态 | Fix PR |
|---|---|---|---|
| [#37036](https://github.com/NousResearch/hermes-agent/issues/37036) | **skills_guard 误报**：`mksglu/context-mode` 被 12 个 DANGEROUS 发现误判为危险，实际均为教学性文字 | 🔄 Open | 无 |
| [#37070](https://github.com/NousResearch/hermes-agent/issues/37070) | **Agent 无法感知 cron job 投递内容** | 🔄 Open | [#37073](https://github.com/NousResearch/hermes-agent/pull/37073)、[#37071](https://github.com/NousResearch/hermes-agent/pull/37071) 已提交 |
| [#9220](https://github.com/NousResearch/hermes-agent/issues/9220) | **WhatsApp `/sethome` 在重启后不持久** | 🔄 Open | 无 |
| [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) | **Gateway working directory config 不被 `hermes update` 持久化** | ✅ Closed | 未标注 |

### ⚠️ 需要新 PR 跟进的遗留问题
- **#36867（P1）**：cron jobs.json 格式容错崩溃，无任何修复 PR 关联，需尽快处理。
- **#19776（P2）**：Discord 超时配置硬编码，简单配置化即可修复。
- **#37036（P3）**：skills_guard 安全扫描误报率过高，可能影响社区 skill 生态的信任度。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 相关 PR | 纳入下一版本可能性 |
|---|---|---|---|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | Searxng Web 搜索后端 | 无 | ⭐⭐⭐ 高（👍30，社区压力最大） |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | Brave Search 后端 | 无 | ⭐⭐⭐ 高（👍23） |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) / [#37059](https://github.com/NousResearch/hermes-agent/pull/37059) | Gemini/OpenAI service_tier flex | **PR #37059 已提交** | ⭐⭐⭐ 极高（PR 已就绪） |
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) | 多角色自动路由（v2 已重设计） | 无 | ⭐⭐ 中（设计已完善，待实现） |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | 内置备份与版本控制 | 无 | ⭐⭐ 高（👍13，生产部署强需求） |
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | 确定性工作流引擎 | 无 | ⭐ 中（讨论深入但复杂度高） |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | Vertex AI 原生支持 | 无 | ⭐⭐ 中（企业用户需求） |
| [#35408](https://github.com/NousResearch/hermes-agent/issues/35408) | Dashboard 已认证用户身份传播至 agent session | 无 | ⭐ 低（需架构变更） |
| [#35986](https://github.com/NousResearch/hermes-agent/issues/35986) | Kanban 编排可靠性缺口（umbrella） | [#37092](https://github.com/NousResearch/hermes-agent/pull/37092) 已有修复 | ⭐⭐ 中 |
| [#36903](https://github.com/NousResearch/hermes-agent/issues/36903) | Google Meet 实时语音插件（Gemini Live） | 无 | ⭐ 低（插件方向） |

**路线图判断**：
- **最可能近期落地**：搜索后端扩展（Searxng / Brave）+ service_tier flex（PR 已就绪）。
- **中期关注**：多角色路由 v2（#5143 设计已完善）、Kanban 可靠性修复（#37092 已开 PR）。
- **长期架构**：确定性工作流引擎（#5354）、Vertex AI 支持（#13484）。

---

## 7. 用户反馈摘要

### ✅ 正面 / 使用中
- **v0.15.1 已在 Windows 上生产运行**（#35703 用户报告），MCP 工具在 Slack/CLI 上工作正常。
- **BlueBubbles 群聊 mention gating** 功能需求被恢复并仍在推进（#37091），说明跨平台响应策略一致性的价值获得维护者认同。

### ❌ 核心痛点

1. **响应丢失 / 安静失败**：多个用户报告 Gateway 层面的响应静默丢失（#29346），`honcho_conclude` 静默失败（#35988），`load_jobs()` 未捕获异常（#36867）。**用户对 Hermes 的静默失败模式感到不安**，倾向要求更明确的错误反馈。

2. **工作目录不一致**：#24882、#24969、#27383 三个 Issue 指向同一根因——`terminal.cwd` 未正确注入。这是**今日合并 #35028 的最大动机**，用户对 agent 在错误目录下执行操作存在安全隐患。

3. **搜索后端生态不足**：Searxng（#5941）和 Brave（#10644）合计 53 赞，强烈反映社区对**自托管和低成本搜索选项**的刚需。当前 Firecrawl、Tavily、Exa 等商业/半商业后端的覆盖不够。

4. **Cron 子系统成熟度不足**：多个 Bug（#24969、#36867、#37070）围绕 cron 的 workdir 隔离、配置容错、交付可见性。用户希望 cron 与交互式会话更紧密地集成。

5. **Docker 体验**：#34347 显示 Docker 环境中点击 Update 按钮时出现原始错误，体验粗糙。#37085 已修复前端，但可能需要更深入的 Docker-native 更新机制。

6. **安全扫描误报**：#33036 中 `skills_guard` 将教学性文字标记为 DANGEROUS，可能**抑制社区 skill 生态发展**。

---

## 8. 待处理积压 — 需维护者关注

| Issue | 类型 | 开 Issue 时长 | 积压风险 |
|---|---|---|---|
| [#36867](https://github.com/NousResearch/hermes-agent/issues/36867) | P1 Bug：cron jobs.json 崩溃 | 1天（新） | 🔴 **最高** — 无关联 PR，任意 cron 子系统用户受影响 |
| #5354 | 确定性工作流引擎 | 58天 | 🟡 高 — 讨论深入（7评论）但无 PR |
| #5495 | 官方 MongoDB memory .provider | 57天 | 🟡 高 — 闭档但曾请求 |
| #9220 | WhatsApp `/sethome` 不持久 | 50天 | 🟠 中 — 长期未响应 |
| #5143 | 多角色自动路由 v2 | 59天 | 🟠 中 — 设计已完善，等待实现优先级 |
| #13484 | Vertex AI 原生支持 | 42天 | 🟠 中 — 企业用户需求，需 auth 架构设计 |
| #5941 | Searxng 搜索后端 | 56天 | 🟠 中 —社区 👍 最高 |
| #10644 | Brave Search 后端 | 47天 | 🟠 中 — 社区 👍 次高 |
| #12238 | 内置备份与版本控制 | 45天 | 🟠 中 — 用户数据保护需求 |
| #35986 | Kanban 编排可靠性（umbrella） | 1天 | 🟢 低 — 修复 PR #37092 已提交 |

### 建议维护者优先处理：
1. **#36867**（P1）— 小小一行代码即可修复 cron 格式容错，但宕机风险高。
2. **#5941 / #10644** — 搜索后端扩展的社区呼声最高，且实现路径明确（仿照现有 provider 架构），可考虑批量纳入。
3. **#9220** — WhatsApp `/sethome` 持久化是 50 天老 issue，受影响的是移动端核心用户群。
4. **#5143** — 提案已在 v2 完全重设计，可直接要求作者提交 PR 或指派开发者。

---

> **日报生成时间**：2026-06-02 (OWL)
> **数据来源**：[NousResearch/hermes-agent GitHub](https://github.com/NousResearch/hermes-agent)
> **覆盖周期**：过去 24 小时（2026-06-01 ～ 2026-06-02）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-06-02**

---

## 1. 今日速览

PicoClaw 今日处于**高活跃迭代期**，11 个 PR 中有 5 个完成合并/关闭，功能推进节奏较快。社区侧新增了 7 个 Issue，全部处于新开/活跃状态，零关闭，积压略有上升。版本发布管道正常运转， Nightly Build 已推至 `v0.2.9-nightly.20260601` 版本。整体来看，项目正围绕 v0.2.9 做密集打磨，Anthropic 模型兼容性、Agent 内部协作总线、多 Provider 扩展是近期三大主线。

---

## 2. 版本发布

### 🚧 Nightly Build — `v0.2.9-nightly.20260601.ba806592`

> **类型为自动化每日构建，非稳定发布。** 变更范围覆盖 `v0.2.9` 标签至今所有 main 分支提交。

完整变更日志：
https://github.com/sipeed/picoclaw/compare/v0.2.9...main

⚠️ **注意：** 此夜间构建已包含以下已合入的重要修复（见第 4 节），可作为验证环境使用，切勿直接部署到生产环境。Nightly 构建已过 24h，请尽快跟进正式 v0.2.9.x 补丁发布。

---

## 3. 项目进展

### ✅ 今日合并/关闭的 PR（5 个）

| # | 标题 | 优先级 | 合入影响 |
|---|------|--------|----------|
| **#2982** | [fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)](https://github.com/sipeed/picoclaw/pull/2982) | 🔴 P0 | **AWS Bedrock Claude Opus 4.8 兼容性修复**。解决升级模型后所有 LLM 调用以 HTTP 400 `temperature deprecated` 报错的问题。直接回应 Issue #2939、#2940 的同类诉求。 |
| **#2977** | [feat(cron): add get and update actions to cron tool](https://github.com/sipeed/picoclaw/pull/2977) | 🟡 P1 | **Cron 工具能力升级**。Agent 现在可以查询完整的 cron job 负载后再做部分更新，避免了 remove→add 的粗暴重置流程，解决了 cron 任务重调度时触发意外执行窗口的隐患。 |
| **#2781** | [perf: reduce skill catalog token usage on tool iterations and subsequent turns](https://github.com/sipeed/picoclaw/pull/2781) | 🟡 P1 | **Token 消耗优化**。技能目录 XML 从每次 LLM 请求缩减为仅首轮注入，中间 tool-call 轮次和后续对话轮次不再重复发送。对无 prompt caching 的 Provider 端效果显著，可预期降低 30%~70% 的系统 prompt token 开销。 |
| **#2893** | [feat: add Server酱³ Bot (SC3Bot) channel support](https://github.com/sipeed/picoclaw/pull/2893) | 🟢 P2 | **新增通讯渠道**。支持中国主流通知服务 Server酱³ Bot 的双向消息通道（Polling + Webhook），拓展了国内用户的部署生态。 |
| **#2890** | [fix: resolve symlinks in cwdPath on macOS to fix path validation](https://github.com/sipeed/picoclaw/pull/2890) | 🟡 P1 | **macOS 路径校验修复**。解决 macOS 上 `/var` → `/private/var` symlink 导致临时目录路径验证失败的问题。 |

### 📌 ① 项目整体前进了多少

今日合入的 PR 覆盖了**核心稳定性**（Bedrock 兼容 + macOS 路径）、**运行效率**（Token 优化）、**功能扩展**（Cron 工具 + SC3 渠道）三个维度。其中 **PR #2781 的 token 优化**是迟来已久的架构级改进（原 PR 创建于 5 月 6 日），合入意义重大。**Bedrock Opus 4.8 修复**直接打通了用户升级模型的最后一公里。项目整体健康度向好，版本发布节奏稳定。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

| # | 标题 | 评论数 | 👍 | 核心诉求 |
|---|------|--------|-----|----------|
| **#1042** | [BUG exec工具的guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042) | **15** | 2 | 安全守卫正则误判非文件操作为路径遍历 |
| **#2887** | [.deb version on RISC-V & OpenAI model issue ](https://github.com/sipeed/picoclaw/issues/2887) | 8 | 0 | RISC-V + .deb 安装的 OpenAI 模型兼容性 |
| **#2720** | [Singleton PID check doesn't verify process identity](https://github.com/sipeed/picoclaw/issues/2720) | 7 | 0 | PID 复用导致 gateway 崩溃循环 |
| **#2796** | [BUG 历史记录中一次对话只显示最后一条用户消息](https://github.com/sipeed/picoclaw/issues/2796) | 5 | 0 | Chat UI 历史消息展示残缺 |

**深度分析：**

- **#1042（最热 Issue，15 条评论）** 暴露了一个**安全性与可用性之间的经典权衡问题**：`guardCommand` 的正则匹配把所有包含 `/` 的命令参数都视为路径，导致 `curl -s "wttr.in/Beijing?T"` 这样的无辜请求被拦截。路径守卫的朴素实现在安全沙箱项目中非常常见，社区呼吁引入 AST 级别的参数识别或白名单机制，而非简单的 glob 匹配。该 Issue 创建于 **2026-03-04**，已积压近 3 个月，**至今无官方回应或关联 PR**。

- **#2887（8 条评论）** 反映了**边缘架构部署**（RISC-V + .deb）场景下的痛点。用户指出在 Debian GNU/Linux 的 RISC-V 版本上 OpenAI 模型不工作，但目前缺乏足够的环境信息来复现。这暗示 PicoClaw 在 Gopher Browser 的交叉编译与多架构 CI 覆盖上可能存在盲区。

### 🔥 关注度最高的待合并 PR

| # | 标题 | 状态 | 意义 |
|---|------|------|------|
| **#2937** | [Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937) | OPEN | 新增了**Agent 协作总线**——per-agent mailbox、协作线程、结构化消息信封、投递状态机制。这是架构级重大扩展，暗示 PicoClaw 正在向**多 Agent 协作**方向演进。合并后可能需要在文档和配置上同步大量变更。 |
| **#2983** | [fix(agent): retry empty llm response](https://github.com/sipeed/picoclaw/pull/2983) | OPEN | 针对 OpenAI 兼容端返回 HTTP 200 但 `content: null` 的语义空响应场景补上了 Agent LLM loop 的重试逻辑。**属于 Agent 执行稳定性的高频隐患**。 |

---

## 5. Bug 与稳定性

### 今日/近期报告 Bug（按严重程度排列）

| 严重度 | Issue | 标题 | 已报告天数 | Fix PR 状态 |
|--------|-------|------|-----------|-------------|
| 🔴 P0 | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | .deb on RISC-V 不兼容 OpenAI 模型（完全无法使用） | 15 天 | ❌ 无 |
| 🔴 P0 | [#2982](https://github.com/sipeed/picoclaw/issues/2982)* → 已合并 | Bedrock Opus 4.8 `temperature deprecated` | — | ✅ PR #2982 已合并 |
| 🔴 P0 | [#2939](https://github.com/sipeed/picoclaw/issues/2939) | `claude-opus-4-7` temperature 废弃报错 | 8 天 | ⏳ PR #2940 待合并（Anthropic 端同类修复） |
| 🟠 P1 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | guardCommand 正则误杀 curl 等非路径命令 | **90 天** ⚠️ | ❌ 无 |
| 🟠 P1 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Singleton PID 未验证进程身份导致崩溃循环 | 33 天 | ⏳ PR #2813 待合并 |
| 🟡 P2 | [#2941](https://github.com/sipeed/picoclaw/issues/2941) | 默认配置 `claude-sonnet-4.6` 含点号，Anthropic API 需要连字符 | 8 天 | ⏳ PR #2942 待合并 |
| 🟡 P2 | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史记录只保留每条对话最后一条用户消息 | 26 天 | ❌ 无 |

> *注：Issue #2982 的修复 PR 当日创建当日合并，在 Issue 报告中可能尚未作为独立 Issue 创建，但可以从 [PR #2982](https://github.com/sipeed/picoclaw/pull/2982) 的 Problem 描述侧面对应。

**关键发现：**
- **RISC-V + .deb 的 P0 Bug 悬而未决 15 天**，无任何关联 PR 出现。如果社区存在 RISC-V 用户群体，此问题会直接影响口碑。
- **3 个 Anthropic/Bedrock 模型兼容性问题中，仅 AWS Bedrock 端当日修复了**，原生 Anthropic 端的 `claude-sonnet-4.6`（点号）和 `claude-opus-4-7`（temperature）仍各自挂着一个 PR 未合并，估计需要统一 review。
- **Issue #1042 已积压 90 天**，是当前存在时间最长的活跃 Bug，维护者需要明确是否接受 PR 或调整优先级。

---

## 6. 功能请求与路线图信号

### 直接功能请求

| # | 标题 | 类型 | 判断 |
|---|------|------|------|
| **#2981** | [Task] 文档需更新至 v0.2.9 | 文档 | 🟢 维护者自提，预示 v0.2.9 正式发布临近 |

### 从 PR 反推路线图方向

| 信号 | 已存在的 PR | 判断 |
|------|-------------|------|
| **多 Agent 协作架构** | [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) Agent Collaboration Bus | 🔮 重大架构方向，可能成为 v0.3.0 核心主题。一旦合并，PicoClaw 将从单 Agent 迭代器升级为 Agent 集群协调平台。 |
| **多 Provider 生态拓展** | [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) NEAR AI Cloud provider | 🔮 延续 OpenAI-compatible provider 的扩展策略，暗示未来可能覆盖更多国产和去中心化 LLM 供应商。 |
| **Cron 工具 Agent-first 增强** | PR #2977（已合并）get/update cron | 🟢 已落地，Agent 的自治调度能力进入新阶段。 |
| **通讯渠道本地化** | PR #2893（已合并）Server酱³ Bot | 🟢 中国本地化生态布局加速。 |

**预判：** 下一版本（v0.2.9 正式版 或 v0.3.0）将围绕 **文档升级、Anthropic/Bedrock 模型兼容全面收敛、Agent 协作 ABI 稳定化** 三大主题展开。

---

## 7. 用户反馈摘要

### 🟢 正面信号

- **模型覆盖广**：用户已在 claude-sonnet-4.6、claude-opus-4-7、claude-opus-4.8、gpt-5.4 等多种前沿模型上测试，说明 PicoClaw 用户对最新模型的跟进意愿极强。
- **部署场景多元**：从 Debian RISC-V 到 macOS 开发环境，再到中国生态的 Server酱，用户对 PicoClaw 的期望不仅限于标准云端部署。

### 🔴 痛点提炼

| 痛点 | 来源 Issue | 具体描述 |
|------|-----------|----------|
| **安全沙箱过于粗暴** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `restrict_to_workspace=true` 下，任何含 `/` 的命令参数都被当成路径拦截，严重影响工具调用的可用性。用户原话："这个问题导致天气技能等基本工具完全不可用。" |
| **模型 ID 配置的坑** | [#2941](https://github.com/sipeed/picoclaw/issues/2941), [#2939](https://github.com/sipeed/picoclaw/issues/2939) | 首次安装即报 404/400，所有新用户都会被"默认配置不可用"劝退。**这是一个体验 0-day bug**——毫无文档提示的情况下安装即崩溃。 |
| **RISC-V 部署残缺** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | 用户连 Go 编译器都没有（在目标板部署），问题复现门槛高，意味着此类边缘部署的调试对普通用户几乎不可能自助完成。 |
| **历史对话 UI 残缺** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 用户期望的是完整对话历史，但当前看起来是历史消息的用户侧被做了 compaction，需要区分"对 LLM 的压缩"和"对 UI 的展示"两种场景。 |

---

## 8. 待处理积压 ⚠️

以下 Issue / PR 长期未响应，建议维护者近期 review：

| # | 标题 | 创建日期 | 积压天数 | 类型 | 紧急度 |
|---|------|----------|----------|------|--------|
| **#1042** | [exec guardCommand 方法问题](https://github.com/sipeed/picoclaw/issues/1042) | 2026-03-04 | **90 天** | Bug | 🔴 亟需 |
| **#2720** | [Singleton PID 未验证进程身份](https://github.com/sipeed/picoclaw/issues/2720) | 2026-04-30 | 33 天 | Bug（high） | 🟠 高 |
| **#2796** | [历史记录只显示最后一条消息](https://github.com/sipeed/picoclaw/issues/2796) | 2026-05-07 | 26 天 | Bug | 🟠 高 |
| **#2813** | [PR: verify gateway identity before blocking startup on stale PID](https://github.com/sipeed/picoclaw/pull/2813) | 2026-05-05 | 25 天 | Fix PR | 🟠 高 |
| **#2940** | [PR: omit temperature for claude-opus-4-7](https://github.com/sipeed/picoclaw/pull/2940) | 2026-05-25 | 8 天 | Fix PR | 🟡 中 |
| **#2942** | [PR: canonical hyphenated model ID for claude-sonnet](https://github.com/sipeed/picoclaw/pull/2942) | 2026-05-25 | 8 天 | Fix PR | 🟡 中 |
| **#2937** | [PR: Agent Collaboration Bus](https://github.com/sipeed/picoclaw/pull/2937) | 2026-05-24 | 9 天 | Feature PR | 🟡 中 |

### 📋 维护者行动建议

1. **立即合并 #2940 + #2942**：两个 PR 已在 5 月 25 日提交，修复的是**安装即报错**的 P0 体验问题，完全可以与 Bedrock 端修复一并聚合到 v0.2.9 正式版本中。
2. **对 #1042 给出明确答复**：90 天积压，15 条评论，是社区最热的 Bug。即使短期无法修复，也需要至少一个 maintainer 回复确认认知、评估优先级或提出 workaround。
3. **合并 #2813**：该 PR 直接对应 #2720（PID 复用崩溃），PR 状态为"updated"，说明作者已做修改，等待 review。
4. **对 RISC-V 问题 (#2887) 补充 CI 矩阵**：即使短期内无法从代码层面修复，至少在 issue 评论区补充已知限制，避免用户陷入无限调试。

---

> 📊 **项目健康度总评：7.5 / 10**
>
> 🟢 积极信号：版本迭代正常、PR 吞吐量稳定、重大架构方向明确（Agent 协作总线）、中国本土化渠道（Server酱）已补齐。
>
> 🟡 风险信号：3 个 Anthropic/Bedrock 兼容 PR 悬而未决、#1042 安全沙箱 Bug 积压 90 天、RISC-V P0 缺陷无响应。建议维护者完成一轮积压清理冲刺。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-02

---

## 1. 今日速览

过去24小时项目活跃度为**中等**：共 **3 条 Issue** 更新（2 新开 / 1 关闭）、**5 条 PR** 更新（1 已关闭 / 4 仍开放），无新版本发布。今日的讨论高度集中在 **agent-runner 的健壮性**上——两条引起关注的核心 Bug（损坏 transcript 导致的死循环、工具调用无超时报错）均已获得对应 fix PR 提交，修复节奏较快。container 层的 rootless Podman 兼容性问题也在推进中。整体来看，项目**稳定性在持续加固，但积压 PR 的合并速度有待提升**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) | 🟠 开放 | **agent-runner 自愈修复**：针对损坏 transcript 导致的永久 crash-loop 事件，引入对"result event 而非 throw"场景的捕获与恢复逻辑，使 session 能自动从 poisoned-resume 状态恢复。直接响应 Issue #2669。 |
| [#2666](https://github.com/nanocoai/nanoclaw/pull/2666) | 🟠 开放 | **Provider 容错增强**（回滚、重放、in-turn ack、友好降级）：构建机制化的 Provider 故障恢复链路，降低单点 API 故障对 agent session 的影响。⚠️ 依赖 #2667 先合并。 |
| [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) | 🟠 开放 | **Container 层 rootless Podman + root 用户兼容**：修复 Claude Code v2+ 在非 rootless 容器中因安全策略拒绝启动的问题，是多环境部署的关键基础设施修复。 |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 🟠 开放 | **消息格式化容错**：未知 slash commands 不再被 passthrough 进 Claude Code SDK，避免响应被静默丢弃。这是一个轻微但影响用户体验的细节修复。 |
| [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) | 🔴 已关闭 | **v2 容器中运行浏览器爬取 sidecar**——已关闭，可能已转向其他方案或被合并。 |

**整体迈进**：今日最显著的进展是 agent-runner 稳定性层——#2670 使系统能够从此前无法自愈的 crash-loop 中恢复，#2667 则拓宽了部署环境的兼容性。两者均为 **基础设施护城河型** 工作。

---

## 4. 社区热点

### 🔥 Bug: A2A 多通道组会话路由错误 [#2331](https://github.com/nanocoai/nanoclaw/issues/2331)
- **作者**: glifocat | **优先级**: High | **状态**: 已关闭 (2026-06-01)
- **问题**: `findSessionByAgentGroup` 使用 `created_at DESC` 排序选择目标 session，在多渠道 group 场景下可能将 A2A 回复路由到**错误的会话**。
- **诉求分析**: 这是一个多 agent 协作场景下的**数据一致性 bug**，直接关闭（而非"不需要修复"）表明已有修复落地，对依赖 A2A 消息互通的用户至关重要。

### 🆕 高关注 Issue: 损坏 transcript 永久 crash-loop [#2669](https://github.com/nanocoai/nanoclaw/issues/2669)
- **作者**: ddaniels | **状态**: 开放（无评论但已有 PR #2670 跟进）
- **诉求**: 当 resumed transcript 含不可修改的 `thinking`/`redacted_thinking` blocks 时，系统进入死循环而非自愈——这是**弹性设计的核心诉求**。

### 🆕 功能类 Bug: MCP 工具无超时保护 [#2668](https://github.com/nanocoai/nanoclaw/issues/2668)
- **作者**: mshirel | **状态**: 开放
- **诉求**: 单次工具调用同步阻塞 agent turn 长达 30 分钟，用户希望**引入 per-tool 超时机制**，属于 agent 可靠性增强需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) | A2A 多组 session 路由错误（**已修复关闭**） | —（已关闭） |
| 🔴 高 | [#2669](https://github.com/nanocoai/nanoclaw/issues/2669) | 损坏 transcript → 永久 crash-loop | ✅ [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) |
| 🟡 中 | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) | Hung MCP 工具无 per-tool timeout，阻塞 session 30min | ❌ 暂无 PR |
| 🟢 低 | [#2346 (PR)](https://github.com/nanocoai/nanoclaw/pull/2346) | 未知 slash commands 被 passthrough 而非作为普通聊天 | ✅ PR 已提交待合并 |

**稳定性评估**: agent-runner 的 resilience 是今日核心主题。#2669 已有 fix PR 跟进且逻辑清晰（区分 result event vs throw），预计合并阻力小；#2668 目前**缺乏 fix PR**，属于待处理的稳定性缺口，建议维护者评估优先级。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 描述 | 路线图判断 |
|---|---|---|---|
| **per-tool 超时控制** | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) | 用户期望 MCP 工具调用粒度超时，而非 session 级冷杀 | 🔶 被纳入可能性高（可靠性类需求，有明显痛点） |
| **Provider 故障恢复** | [#2666 (PR)](https://github.com/nanocoai/nanoclaw/pull/2666) | 系统化处理 Provider 失败：回滚、重放、降级 | 🔶 依赖 #2667 合并后才能推进，可能需要一定时间 |
| **rootless 容器兼容** | [#2667 (PR)](https://github.com/nanocoai/nanoclaw/pull/2667) | 扩展部署面至 Podman/root 环境 | 🟢 基础设施方向，合并可能性大 |

**综合判断**: 项目当前路线图明显在**加固 agent 运行的弹性与可部署性**。Provider 容错（#2666）和工具超时（#2668）均为**下一版本稳定性增强**的有力候选，但 #2666 存在 PR 依赖链，时序上可能落后。

---

## 7. 用户反馈摘要

从今日 Issues 中提取的真实用户痛点：

- 🔴 **"Session crash-loops forever"** — [#2669](https://github.com/nanocoai/nanoclaw/issues/2669)：用户在 `docker logs` 中看到密集的 400 错误循环，完全无法自行恢复。**核心不满**：系统缺乏自我修复能力。
- 🔴 **"A2A replies to wrong session"** — [#2331](https://github.com/nanocoai/nanoclaw/issues/2331)：多 channel 高级用户遇到消息路由混乱。该 issue 已有 1 条评论且迅速关闭，说明修复已获得社区认可。
- 🟡 **"hung MCP tool blocks session up to 30 min"** — [#2668](https://github.com/nanocoai/nanoclaw/issues/2668)：生产环境中工具调用挂起导致 session 资源长时间被占用，**期望精细化超时控制**。
- 🟡 **"slash commands silently dropped"** — [#2346 (PR)](https://github.com/nanocoai/nanoclaw/pull/2346)：用户体验级别问题——输入未知命令后无任何响应反馈，用户感到困惑。

**满意度倾向**: 从 issue 关闭和 PR 创建速度看，维护者响应较快（#2669 在同日即有 PR），但积压 PR 的合并节奏可能成为长期痛点。

---

## 8. 待处理积压

以下为长期未响应或依赖链阻塞的重要 Issue/PR，提醒维护者关注：

| 项目 | 链接 | 状态 | 创建时长 | 建议 |
|---|---|---|---|---|
| PR: unknown slash commands 格式化修复 | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 🟠 开放 | ~25 天 | **低复杂度高价值**，建议优先合并 |
| Issue: MCP 工具无 per-tool timeout | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) | 🟠 开放 | 1 天 | 暂无 PR，需评估是否排入下一迭代 |
| PR: Provider 故障恢复（依赖 #2667） | [#2666](https://github.com/nanocoai/nanoclaw/pull/2666) | 🟠 开放 | 1 天 | **需先推动 #2667 合并**，否则将长期阻塞 |
| PR: rootless Podman 兼容 | [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) | 🟠 开放 | 1 天 | **前置依赖解除**的关键 PR，建议优先 review |

---

> **健康度总评**: 项目今日活跃度良好，核心稳定性方向推进积极。主要风险在于**PR 合并速度落后于创建速度**（4 个开放 PR 中 3 个已开放 ≥1 天），可能影响社区贡献者积极性。建议维护者尽快处理 #2667 → #2666 的依赖链，以及合并低复杂度 PR #2346。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-06-02

> 数据来源: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) | 生成时间: 2026-06-02

---

## 1. 今日速览

过去 24 小时（2026-06-01 至 2026-06-02）项目整体活跃度较低。Issue 侧无新开或关闭记录；Pull Request 侧有 1 条更新，尚未合并；无新版本发布。项目处于常规维护期，社区贡献仍在持续但节奏平缓。

---

## 2. 版本发布

**无新 Release。**

本日无新版本发布，最近发布动态请自行查阅 [Releases 页面](https://github.com/nullclaw/nullclaw/releases)。

---

## 3. 项目进展

- **`[#943 [OPEN] fix(telegram): show typing indicator during callback-query processing**
  [查看链接](https://github.com/nullclaw/nullclaw/pull/943)

  该 PR 自创建以来仍处于**待合并**状态。其宗旨是修复 Telegram 内联按钮（如 `nc_choices` 选项）被点击后，等待 agent 处理期间聊天界面无任何"正在输入…" 提示的交互反馈问题。

  若合并，将提升 Telegram 端 Callback Query 场景下的用户体验。

---

## 4. 社区热点

**本日尚无活跃讨论。**

过去 24 小时 Issue 更新为 0 条，PR 仅 1 条且无评论互动，未形成热点话题。

---

## 5. Bug 与稳定性

- **`[#943](https://github.com/nullclaw/nullclaw/pull/943)** 涉及的 Bug 现象：Telegram 内联按钮（callback_query）触发后，等待 agent 处理期间，缺少"输入中…"指示，导致用户界面在 5–30 秒的模型调用期间完全无反馈，影响交互体验。该 PR 提供了修复方案，但尚未合并。

  严重程度：中等（影响用户体验，非崩溃类 bug）。**已有 Fix PR：#943，待合并。**

---

## 6. 功能请求与路线图信号

- 从 PR #943 可看出，社区关注 **Telegram 交互体验优化**方向。虽非新功能请求，但体现了对消息渠道（尤其是 Telegram）的深度打磨趋势。

---

## 7. 用户反馈摘要

- 从 PR #943 摘要可提炼：
  - **痛点**：用户在 Telegram 点击内联按钮后，等待时间长达数秒甚至数十秒，期间无任何操作反馈，不清楚请求是否被处理。
  - **使用场景**：使用 `nc_choices` 等通过 inline keyboard 呈现选项的交互流程，agent 模型调用耗时较长。
  - **满意/不满意**：用户对静默等待状态不满意，期望获得即时的"typing"指示反馈。

---

## 8. 待处理积压

- **`[#943](https://github.com/nullclaw/nullclaw/pull/943)** — 创建于 2026-06-01，已等待合并 1 天，目前无评审评论。建议维护者关注并及时 review，以尽快合并该用户体验修复。

---

*本报告由 OWL 自动生成。数据截止 2026-06-02。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-06-02 | 数据窗口：过去 24 小时**

---

## 1. 今日速览

IronClaw 今日活跃度处于**高位**——过去 24 小时共产生 12 条 Issue 更新（11 新开 + 1 关闭）和 46 条 PR 更新（14 待合并 + 32 已合并/关闭），合并流水线吞吐强劲。核心贡献者 `henrypark133` 和 `serrrfirat` 密集输出，围绕 Reborn 核心的 **Compaction 稳定性**、**Trigger Poller 架构**、**Model Gateway 错误治理**、**OAuth/Extension 生态**四条主线同时推进。Nightly E2E 持续失败（#4108）已存在 6 天，是最高优先级的未关闭信号。无新版本发布。

---

## 2. 版本发布

**无新版本发布。** 合并中的多个大型 PR（GitHub 能力迁移 #4280、GSuite 能力 #4293、OAuth 登录 #4294、Notion OAuth #4300、Trigger Poller #4301）预示着下一个版本的规模和破坏性均较大，预计需要配套的 RELEASE NOTES 和迁移指南。

---

## 3. 项目进展

今日共有 **32 个 PR 被合并或关闭**，以下为最具代表性的推进项：

| # | PR | 贡献者 | 状态 | 核心进展 |
|---|---|---|---|---|
| 1 | **#4280** Port GitHub capabilities to Reborn | serrrfirat | ✅ Merged | 将铁爪从 issue-only 切片扩展为完整 v1 GitHub 能力 surface（issues/PRs/Actions/搜索），含 DB MIGRATION，是 Reborn 生态扩展的里程碑 |
| 2 | **#4293** Surface activated GSuite capabilities to the model | serrrfirat | ✅ Merged | 允许 Gmail/Google Calendar 等 first-party 动态密钥消费者在无静态凭证下保持可见，含 DB MIGRATION，Agent 可直接使用 Google 工作区能力 |
| 3 | **#4297** Enable GSuite OAuth setup and recovery | serrrfirat | ✅ Merged | Google 专属 product-auth start/callback 路由、PKCE 交换、Reborn serve/runtime 配置串联，GSuite AuthN/AuthZ 闭环完成 |
| 4 | **#4300** Wire Reborn Notion OAuth provider | serrrfirat | ✅ Merged | 将 Google-only OAuth 适配器重构为共享 host-mediated OAuth 客户端，新增 Notion MCP OAuth 交换/刷新，提供商组合数据驱动 |
| 5 | **#4301** PR15: Add trigger poller core | henrypark133 | ✅ Merged | Reborn scheduled trigger 的 poller 核心（`TriggerPollerWorker::tick_once`），后端无关抽象——prompt materialization、trusted trigger fire、active-run 清理 |
| 6 | **#4299** Migrate bundled extension manifest hash on startup | serrrfirat | ✅ Merged | **修复启动崩溃**：二进制更新后 first-party extension manifest 变更不再硬失败，自动迁移 hash |
| 7 | **#4295** Stop processing after cancelled gate resolution | serrrfirat | ✅ Merged | 修复 Reborn WebUI gate 拒绝/取消后从处理状态恢复的 UX bug |
| 8 | **#4305** Progressively disclose Reborn skill activation context | serrrfirat | ✅ Merged | 按需加载 SKILL.md body（先按 name 过滤再加载），减少 token 浪费；本地-dev skill context budget 对齐 6000 token legacy 上限 |
| 9 | **#3899** Reborn budgets: address all #3841 follow-ups E2E | ilblackdragon | ✅ Merged | #3841 成本预算基础设施的**全部** follow-up 收尾——provider token 追踪、usage 传播、预算违规规范化、driver 层集成，闭环 3 周前的路线图承诺 |
| 10 | **#4277** PR7: Add product outbound orchestration seam | henrypark133 | ✅ Merged | product-workflow 出站策略验证 + verified target metadata 注入 + delivered/failed attempt 路由，Outbound 通道可靠性基础 |

---

## 4. 社区热点

**A. Compaction & Context 稳定性问题集群**
- `henrypark133` 在 6 月 1 日单日提交 **5 个**互相关联的 Issue：
  - [#4310](https://github.com/nearai/ironclaw/issues/4310) — context-overflow 恢复发出 `ShrinkContext` 但 executor 不执行
  - [#4309](https://github.com/nearai/ironclaw/issues/4309) — compaction summary write 可存活于失败的 checkpoint 之后
  - [#4311](https://github.com/nearai/ironclaw/issues/4311) — model gateway 将 budget 治理错误折叠进 context-overflow 恢复路径
  - [#4312](https://github.com/nearai/ironclaw/issues/4312) — compaction 进度无法在 Reborn 实时 projection 中表面化
  - [#4314](https://github.com/nearai/ironclaw/issues/4314) — dead compaction leak milestone 应移除或正确触发
  
  **背后的核心诉求：** Reborn compaction 语义仍存在一组一致性问题——错误归类、checkpoint/幂等性、对用户的不透明。这不是零散 bug，而是**子系统级的正确性审计**，贡献者在系统性地消除 compaction 路径上的技术债。

**B. 社区架构反馈**
- [#4278](https://github.com/nearai/ironclaw/issues/4278) (liaoqianchuan) — ENGINE_V2 中对话历史无界增长导致 context window 耗尽的可扩展性警告
- [#4279](https://github.com/nearai/ironclaw/issues/4279) (liaoqianchuan) — Reborn 分支特性与云原生架构路线图的询问

  **诉求信号：** 社区关注 Reborn 的长期可扩展性设计，希望看到对话存储的 compaction/分页策略和云原生多租户隔离的路径说明。

**C. Trigger Poller 持续建设**
- [#4303](https://github.com/nearai/ironclaw/issues/4303) — 将 2500 行的 `worker.rs` 拆分为聚焦模块
- [#4292](https://github.com/nearai/ironclaw/pull/4292) ✅ 已合并 — trigger materialization turn-state seams（PR14）
- [#4301](https://github.com/nearai/ironclaw/pull/4301) ✅ 已合并 — trigger poller core（PR15）
- [#4308](https://github.com/nearai/ironclaw/pull/4308) 🔓 Open — PR16: trigger poller harness coverage

  **背后的核心诉求：** Trigger Poller 正以每周多个 PR 的速度推进，问题是模块分层正在积累复杂度，需要尽快拆分（#4303）以避免维护瓶颈。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 问题摘要 | Fix 状态 |
|---|---|---|---|
| 🔴 P0 | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E 流水线连续失败（commit 749f5844，6 天），Full E2E / E2E (v2-engine) job 均 failure | **未修复**，无人响应 |
| 🟠 P1 | [#4310](https://github.com/nearai/ironclaw/issues/4310) | context-overflow 恢复：executor 忽略 `ShrinkContext` 导致重复提交过大 prompt | 待分配 |
| 🟠 P1 | [#4309](https://github.com/nearai/ironclaw/issues/4309) | compaction summary 写入 persist 成功后 checkpoint 失败 → 重试阻塞 | 待分配 |
| 🟡 P2 | [#4311](https://github.com/nearai/ironclaw/issues/4311) | model gateway error mapping 将非 budget 类错误折叠进 context-overflow 恢复 | 待分配 |
| 🟡 P2 | [#4312](https://github.com/nearai/ironclaw/issues/4312) | compaction 期间 WebUI 无 live 进度反馈，用户感知为代理卡死 | 待分配 |
| 🟡 P2 | [#4278](https://github.com/nearai/ironclaw/issues/4278) | ENGINE_V2 对话历史单 JSON 对象无界增长 → context window 耗尽 | 需设计讨论 |
| 🟢 P3 - 已修复 | [#4295](https://github.com/nearai/ironclaw/issues/4295) | WebUI gate 取消后恢复 processing state | ✅ PR 已合并 |
| 🟢 P3 - 已修复 | [#4299](https://github.com/nearai/ironclaw/issues/4299) | extension manifest hash 变更导致启动崩溃 | ✅ PR 已合并 |

**总结：** 当前最高风险不是某个具体 bug，而是 **compaction 路径的系统性正确性问题集群**（P0/P1 共 3 项），叠加 Nightly E2E 6 天失控。建议将 compaction 修复列为下一个发布阻断项。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 Issue | 关联进展 | 纳入可能性 |
|---|---|---|---|
| **Feishu/Lark WebSocket 长连接事件接收** | PR [#4178](https://github.com/nearai/ironclaw/pull/4178) | XL 规模，支持 protobuf 帧解码、碎片合并、ACK、connection_mode 回退 | 🔴 高 — 已进入 PR 审查 |
| **WebUI v2 Google/GitHub/Notion OAuth 登录** | [#4287](https://github.com/nearai/ironclaw/issues/4287), [#4294](https://github.com/nearai/ironclaw/pull/4294) | Notion OAuth 已合并（#4300）；GSuite 全套已合并（#4293 + #4297）；Google/GitHub #4294 开放中 | 🔴 高 — 多端已落地上线 |
| **MiniMax 默认模型升级至 M3** | PR [#4298](https://github.com/nearai/ironclaw/pull/4298) | XS 规模，删除了 M2.5 弃用条目，保持 M2.7 可选 | 🟡 中 — 模型版本迭代常规 |
| **Trigger Poller 模块拆分** | [#4303](https://github.com/nearai/ironclaw/issues/4303) | Trigger Poller 核心已合并（#4301），PR16 harness 开放中（#4308） | 🔴 高 — 随 Poller 主干推进自然触发 |
| **Compaction progress live streaming** | [#4312](https://github.com/nearai/ironclaw/issues/4312) | 无关联 PR | 🟡 中 — 依赖 compaction 路径修复后开展 |
| **Reborn 云原生多租户架构说明** | [#4279](https://github.com/nearai/ironclaw/issues/4279) | 无相关 PR | 🟡 中 — 社区期望，但需维护者产出路线图文档 |

---

## 7. 用户反馈摘要

**痛点（Pain Points）**
- **Compaction 语义模糊：** 外部观察者（`henrypark133` 深度审计系列）发现 compaction detect → emit → execute → checkpoint 整条链路存在语义空洞，说明对内也缺乏统一规范文档
- **E2E 反馈延迟：** #4108 Nightly E2E 持续 6 天失败，自动化 CI/CD 信号的信任度在侵蚀，贡献者可能已对红 CI 脱敏
- **ENGINE_V2 可扩展性隐忧：** 来自新社区贡献者（liaoqianchuan）——单 JSON 对象存储全量对话历史在云原生/多租户场景下不可持续

**满意信号（Positive Signals）**
- **Reborn + Extensions + OAuth 生态快速收敛：** GitHub/GSuite/Notion 三套能力的宿主迁移和认证衔接在 24 小时内并行推进，说明 Reborn 的扩展架构已足够成熟支持快速接入
- **贡献者活跃度极高：** `serrrfirat` 一天内合并/关闭 6 个 PR、`henrypark133` 一天内提交 5 个 Issue + 2 个 PR，社区处于高强度协同状态
- **社区新面孔：** `thisisjoshford` 贡献 docs-only PR（#4302），`octo-patch` 贡献模型升级 PR（#4298），表明非核心成员的参与意愿在上升

---

## 8. 待处理积压

| 积压项目 | 创建/更新时间 | 状态 | 建议 |
|---|---|---|---|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败** | 2026-05-27 / 2026-06-01 | 🔴 **6 天无响应** | 应立刻排查根因，评估是否需暂停夜间 E2E 或分片隔离失效 job |
| **Compaction 正确性 Issue 集群**（#4309-#4314 共 5 项） | 2026-06-01 / 新开 | 🟠 **0 评论** | 报告人即核心贡献者，建议分配对应 reviewer 及时认领或建立统一 tracking issue |
| **[#4313](https://github.com/nearai/ironclaw/issues/4313) Reconcile compaction milestone payload schema** | 2026-06-01 / 新开 | 🟠 **0 评论** | schema 与 live enum 不一致可能影响下游 consumer，需尽快标注 breaking/non-breaking |
| **[#4277 之后的 Trigger Poller 后续 PR 系列](https://github.com/nearai/ironclaw/pull/4308)** | 2026-06-01 / 2026-06-02 | 🔓 14 个 PR 待合并 | 积压规模持续扩大，部分 PR review 周期可能已超过合理阈值 |

---

## 今日结论

IronClaw 处于 **"高吞吐 + 高债务"** 的双轨状态：合并流水线极为高效（32 个 PR 关门），但 Compaction 正确性、E2E 稳定性、模块复杂度三类技术债在同步积累。下一个版本的关键质量门应设为：① compaction 测试路径端到端覆盖，② Nightly E2E 恢复绿态，③ Trigger Poller 模块拆分落地。社区健康度整体良好，但需警惕 E2E 持续红灯对贡献者信心的隐性消耗。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-02

---

## 1. 今日速览

LobsterAI 今日处于高活跃交付期，团队集中合并了 11 个 PR 并发布了 **2026.6.1** 正式版，Kit（专家套件）生态与 Cowork 会话能力是本轮迭代的核心主题。社区侧出现 1 条新 Issue，用户积分清零问题需维护者尽快响应。整体项目节奏紧凑，feature 与 fix 并行推进，健康度良好。

---

## 2. 版本发布

### 🏷️ LobsterAI 2026.6.1（2026-06-01）

**Release:** [netease-youdao/LobsterAI/releases/2026.6.1](https://github.com/netease-youdao/LobsterAI)

主要变更（What's Changed）：

| 变更类型 | 内容 | 对应 PR |
|---------|------|---------|
| ✨ Feature | **Expert Kit Store & Conversation Integration** — 新增 Kit 市场 UI、Redux 集成、安装/卸载/卡片元信息展示；对话输入框支持选择 Kit 并 try-asking 跳转 | [#2060](https://github.com/netease-youdao/LobsterAI/pull/2060) |
| ✨ Feature | **插件更新检查** — 支持 npm / ClawHub 来源的插件手动更新检查 | [#2069](https://github.com/netease-youdao/LobsterAI/pull/2069) |
| 🐛 Fix | **MCP 相关修复**（摘要截断，细节待补充） | 未完整列出 |

> ⚠️ **迁移注意事项：** 本次引入了 Kit 市场相关的 Redux 状态结构和新的 IPC 通道，从早期版本升级的用户建议清除本地缓存后重启。若使用了自定义插件同时从 npm 和 ClawHub 来源安装，新增的 update-check 逻辑可能触发重复更新提示，属预期行为。

---

## 3. 项目进展

今日合并/关闭的 11 个 PR 覆盖了 **Kit 生态完善、Cowork 会话分叉、UI 优化、多模型支持、稳定性修复** 五大方向：

### 🔧 核心功能推进

| PR | 状态 | 说明 |
|----|------|------|
| [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090) | ✅ Merged | 将 `release/2026.5.28` 合并回 `main`，包含 73 个提交——Kit 市场、Cowork 本地分叉、插件更新检查及 MCP/Gateway/Artifacts 稳定性修复 |
| [#2085](https://github.com/netease-youdao/LobsterAI/pull/2085) | ✅ Merged | **Cowork 本地会话分叉** — 在助手消息上新增 fork 操作，从选中消息创建新本地对话，保留长会话中符合条件的 compacted 上下文 |
| [#2083](https://github.com/netease-youdao/LobsterAI/pull/2083) | ✅ Merged | **Kit 技能描述本地化** — 安装 Kit 时持久化技能元数据，在 Skills UI 中提供本地化描述 |

### 🎨 UI/体验优化

| PR | 状态 | 说明 |
|----|------|------|
| [#2088](https://github.com/netease-youdao/LobsterAI/pull/2088) | ✅ Merged | 更新 Kits UI 视觉 |
| [#2087](https://github.com/netease-youdao/LobsterAI/pull/2073) | ✅ Merged | 优化 Kits 在 Cowork 中的交互 |
| [#2084](https://github.com/netease-youdao/LobsterAI/pull/2084) | ✅ Merged | **卸载确认弹窗** — Kit 列表与详情页卸载前增加中英文确认模态框 |
| [#2080](https://github.com/netease-youdao/LobsterAI/pull/2080) | ✅ Merged | 优化 Kits 和文件上传 UI |

### 🐛 Bug 修复

| PR | 状态 | 说明 |
|----|------|------|
| [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) | ✅ Merged | **Artifacts 缺失文件提示** — 本地文件被移动/删除/不可访问时显示清晰的 toast 错误信息，保留远程链接不变 |
| [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) | ✅ Merged | **微信更新/重装 Bug 修复** — 修复 Windows 平台微信渠道在更新或重装过程中的异常 |

### ⚙️ 基础设施

| PR | 状态 | 说明 |
|----|------|------|
| [#2089](https://github.com/netease-youdao/LobsterAI/pull/2089) | ✅ Merged | 新增 MiniMax M3 模型支持，更新 BYOK 模型默认上下文窗口 |
| [#2082](https://github.com/netease-youdao/LobsterAI/pull/2082) | ✅ Merged | 补充日志输出（排查性改进） |

### 📈 阶段总结

LobsterAI 在过去 48 小时内完成了一次较大规模的版本发布冲刺，**Kit 专家套件**从市场浏览→安装→卸载→技能本地化已形成完整闭环，**Cowork 会话分叉**标志着多线程协作能力迈入实用阶段。项目的迭代速度与工程质量（含 eslint/tsc 验证流程）维持在较高水平。

---

## 4. 社区热点

### 🔥 Issue #2081 — 订阅积分月底清零问题
- **链接:** [netease-youdao/LobsterAI#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)
- **作者:** zjk648491625
- **状态:** OPEN | 创建: 2026-06-01 | 评论: 1 | 👍: 0

**摘要：**
> "来搞笑的吧??? 我订阅的5500积分 还没用 月底直接清零了???"

用户附截图显示订阅积分在月底被清零且未收到有效提醒。这是今日唯一新开 Issue，且已有 1 条评论互动，代表真实付费用户的权益诉求。

**分析：** 该问题触及订阅制产品的核心信任机制。无论积分清零是否为预期策略（如月度订阅点数到期），至少暴露出两个产品问题：(1) 到期前的提醒机制不足；(2) 用户对积分有效期规则感知不清晰。建议维护者在积分临近到期前主动 push 通知，并在 UI 中明确展示有效期。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 对应 Issue/PR | 状态 | Fix PR |
|---------|---------|---------------|------|--------|
| 🔴 高 | **积分清零无提醒** — 5500 订阅积分月底直接归零，用户无感知 | [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) | OPEN | ⚠️ 尚无 fix PR |
| 🟡 中 | **微信更新/重装异常** — Windows 平台更新或重装过程中微信渠道故障 | — | 已修复 | [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) ✅ |
| 🟡 中 | **Artifacts 本地文件丢失无提示** — 生成的本地文件链接失效时缺少错误反馈 | — | 已修复 | [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) ✅ |
| 🟢 低 | **MCP 相关稳定性问题** | — | 已修复 | Release 2026.6.1 中包含 |

**总结：** 除积分清零 Issue 待处理外，其余稳定性问题已在此版本中全部修复。

---

## 6. 功能请求与路线图信号

结合近期 PR 方向，以下领域已被确认在活跃开发中：

| 方向 | 证据 | 信号强度 |
|------|------|---------|
| **Kit 专家套件生态** | 市场 UI、安装/卸载、技能本地化、插件更新检查（PR #2060, #2069, #2083, #2084） | ⭐⭐⭐⭐⭐ 核心主线 |
| **Cowork 多会话协作** | 本地会话分叉（PR #2085） | ⭐⭐⭐⭐ 重点推进 |
| **插件生态扩展** | npm + ClawHub 双源插件更新检查（PR #2069） | ⭐⭐⭐⭐ |
| **多模型支持** | MiniMax M3 新增 + BYOK 上下文窗口调整（PR #2089） | ⭐⭐⭐ 持续跟进 |
| **IM 多实例去重** | 钉钉/飞书/QQ 实例名与凭证重复校验（PR #1464，已 stale） | ⭐⭐ 积压中 |

**判断：** 下一个版本大概率延续 Kit 生态深化（如 Kit 评分/评论）和 Cowork 协作增强（如分叉会话合并、跨会话引用）。

---

## 7. 用户反馈摘要

### 满意点（从 PR 方向推断）
- Kit 市场的推出满足了用户对"专家能力模块化安装"的期待
- Cowork 会话分叉回应了长对话场景下"另起分支"的刚需
- 多模型持续接入保持了产品竞争力

### 不满意 / 痛点
| 痛点 | 来源 | 描述 |
|------|------|------|
| **积分/订阅透明度不足** | [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) | 用户对积分有效期规则缺乏感知，月底清零造成信任损伤 |
| **卸载误操作风险** | 产品侧预判 | 社区此前已预判此风险—PR #2084 增加卸载确认弹窗即为此类体验修复 |
| **文件管理易失效** | 用户侧实际场景 | Artifacts 本地文件移动后链接无反馈（已修复） |

### 用户画像洞察
从 Issue #2081 可观察到存在**付费订阅用户**群体，且他们对积分/权益敏感度极高。这类用户的留存直接关系到项目商业化健康度。

---

## 8. 待处理积压

| 项目 | 链接 | 创建时间 | 状态 | 建议优先级 |
|------|------|---------|------|-----------|
| **IM 多实例重复校验** (钉钉/飞书/QQ) | [PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) | 2026-04-04 | OPEN / stale | 🔴 需关注 — 已标记 stale，创建逾 59 天未合并，涉及多 IM 平台数据完整性校验，属安全/体验双重风险 |
| **积分清零机制** | [Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081) | 2026-06-01 | OPEN | 🔴 需立即响应 — 涉及付费用户权益，如未在 48h 内回复可能升级为信任危机 |

**行动建议：**
1. PR #1464 因创建时间较早，代码可能已产生较多冲突，建议 @gongzhi-netease 确认是否仍需推进，若否则关闭并新建 PR；
2. Issue #2081 建议优先由社区运营/产品同学回复，明确积分规则、补充到期提醒功能需求单。

---

> *数据来源: GitHub API | LobsterAI (netease-youdao/LobsterAI) | 统计周期: 2026-06-01 ~ 2026-06-02*
> *日报由 OWL 自动生成，如有偏差请以实际仓库为准。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-02

---

## 1. 今日速览

Moltis 在过去 24 小时内无新 Issue 报告，但有 4 条 PR 更新，其中 3 条已合并/关闭、1 条待合并。项目处于维护迭代节奏，合并速率较快，表明维护者响应及时。今日无新版本发布，说明当前集中在代码层重构与稳定性打磨阶段，而非功能发布窗口。整体活跃度评估：中等活跃、偏后端及基础设施演进。

---

## 2. 版本发布

过去 24 小时无新版本发布，本节略去。

---

## 3. 项目进展

今日合并/关闭的 3 条 PR 共同指向两个主线：**provider 能力治理**与**会话持久化稳定性**。

### ✅ `provicer` 能力模型重构 — PR 已合 ([#1090](https://github.com/moltis-org/moltis/pull/1090))

- 之前 provider 行为依赖 URL/name 规则推断，重构后引入显式 capability 策略，并在注册流程中绑定 provider 与模型能力。
- 自定义 provider 仍采用严格默认值，避免破坏性影响。
- 同时补充回归测试，覆盖已知 provider URL 与模型名场景。
- **进展**：统一能力描述、减少 provider 推断风险, 为多 provider 生态提供基础设施。

### ✅ NEAR AI Cloud 支持（OpenAI 兼容） — PR 已合 ([#1031](https://github.com/moltis-org/moltis/pull/1031))

- 新增 `NEARAI_API_KEY + https://cloud-api.near.ai/v1` 接入。
- 支持从 `/v1/model/list` 发现模型，并推荐与 TEE 能力相关配置。
- 同步更新 provider 接入、onboarding、文档与列表。
- **进展**：扩展 OpenAI 兼容生态，也增加 TEE 相关场景。

### ✅ OpenAI Codex arguments 处理 — PR 已合 ([#1088](https://github.com/moltis-org/moltis/pull/1088))

- 处理 `function_call_arguments.done` 的最终参数 payload。
- 当无 streaming 增量时仍可合成参数 delta,保持 decode diagnostics 中累积参数行为不变。
- **进展**：修复 Codex 场景下的参数丢失与错误分支。

---

## 4. 社区热点

今日无新 Issue，但 PR 更新中有两条较值得注意：

### PR [#1089 OPEN] Cap persisted tool results before rehydration — [s-salamatov](https://github.com/moltis-org/moltis/pull/1089)

- **内容**：在会话历史 rehydrate 为 `ChatMessage` 时对 `tool` 与 `tool_result` content 做裁剪（capped conversion），并覆盖 chat、streaming、retry、inspection、silent memory、compaction 等路径。
- **诉求**：避免旧历史或长 tool result 在重注入时压垮 provider 上下文，属于**稳定性保守化修复**，典型从一次真实崩溃或溢出排查后驱动的后置修复。

### PR [#1090 CLOSED] refactor(providers): use explicit OpenAI capabilities — [penso](https://github.com/moltis-org/moltis/pull/1090)

- **诉求**：显式能力声明、可测试、可扩展, 在 provider 列表继续扩张后意义更大。

---

## 5. Bug 与稳定性

今日无 Issue, 但合入的 PR 本身修复了若干稳定性问题：

| # | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| 1 | 高 | Rehydration 阶段 tool/tool_result 内容无限增长, 可能阻碍会话恢复或导致 provider 超长 prompt | [#1089](https://github.com/moltis-org/moltis/pull/1089)（OPEN, 待合） |
| 2 | 中 | OpenAI Codex 链路下 function_call_arguments.done 未记录, 导致 Codex 工具调用异常或参数丢失 | [#1088](https://github.com/moltis-org/moltis/pull/1088)（已合） |
| 3 | 低 | provider 能力推断未完成, 边缘 provider 可能出现错误行为 | [#1090](https://github.com/moltis-org/moltis/pull/1090)（已合） |

---

## 6. 功能请求与路线图信号

- **provider 能力模型** — 显式策略化治理进入 repo, 后续可能在暴露给用户侧（选择 provider 过滤）。
- **新 OpenAI 兼容 Cloud** — NEAR AI Cloud 接入模式可复用于其他 provider（可能后续扩展类似布局的 provider）。
- **Codex / TEE 链路** — Codex tool arguments、TEE-aware provider 布局都暗示 Moltis 在企业级或隐私计算场景方向延展, 可能后续推动「可审计环境」「可信执行推理」向功能。
- 今日无其他显式功能请求 Issue。

---

## 7. 用户反馈摘要

今日无新 Issue 开打, 因此直接用户反馈数据为零。从 PR 可推断：

- **痛点**：长会话重注入可能崩溃或极大压缩显示; Codex、assistant tool calls 稳定链路未全覆盖。
- **满意点**：社区贡献者被合入速率较高（PR 当日创建当日合）, 对贡献者积极。
- 建议后续更多对标用户真实案例（session 长度、tool 结果格式、混合 provider 场景）以沉淀测试用例。

---

## 8. 待处理积压

当前 GitHub status 显示 0 Issues open, 但有一条关键 PR 仍 OPEN 且很可能需要尽快处理:

| PR | 建议优先级 | 建议 |
|---|---|---|
| [#1089 OPEN] Cap persisted tool results before rehydration | 高 | 如合入后不过风险低, 建议尽快 take-review 合并; 这是一条复旧会话稳定性主线, 阻塞长会话用户。 |

建议制定 **下版本目标**：

1. [#1089](https://github.com/moltis-org/moltis/pull/1089) 合并并在文档中更新（推荐版本 tag b/c 会话稳定性）。
2. 现有 NEAR AI Cloud provider 与 TEE-aware provider 在文档里单独列 "Experimental Cloud" 子节。
3. 给 `cap rehydration` 写回归测试, 避免重新出现长 result 问题。

---

**日报总结**：Moltis 今日呈现「不发版、但持续活跃合并」的状态。重点在 provider 能力治理重构、NEAR AI Cloud 生态扩展、以及危及会话持久化的稳定性修复（tool 重注入）。下一步应尽快处理 PR 1089 并考虑版本发布。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-02

---

## 1. 今日速览

过去24小时 CoPaw 社区活跃度保持高位：**50 条 Issues 更新**（32 新开/活跃，18 已关闭），**35 条 PR 更新**（26 待合并，9 已合并/关闭），**2 个新版本发布**（v1.1.10 稳定版 + v1.1.10-beta.2）。今日有多项 bug fix PR 开放审核，社区贡献者参与积极，项目迭代节奏稳健。

---

## 2. 版本发布

### v1.1.10（稳定版）  

**Agent System**
- **Spawn Subagent**：新增 `spawn_subagent` 工具，支持在工作空间内执行临时子智能体（相关 PR [#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)）

**Coding Mode**
- **Open Directory**：新增"Open Directory"标签页，可引用本地目录

> *注：其余内容因日志截断未完整展示，建议查阅完整 Release Notes。*

### v1.1.10-beta.2

- 修复网站 header 样式问题，支持自动继续视频播放（[#4812](https://github.com/agentscope-ai/QwenPaw/pull/4812)）
- 修复 skill 相关：保留标签、启用/禁用功能修复（通过 PR 推断）
- 版本号更新（[#4861](https://github.com/agentscope-ai/QwenPaw/pull/4861)）

无破坏性变更报告。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| # | 关键内容 |
|---|---------|
| [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | **浏览器进程残留修复**：修复 Windows 上浏览器会话结束后进程树和临时文件锁未清理的问题（对应 Issue [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844)） |
| [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) | **MCP 服务池化**：引入 `SharedMCPPool`，多智能体共享 MCP 服务器进程，解决 Windows 下 300+ 智能体时 MCP 进程爆炸问题（对应 Issue [#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842)） |
| [#4867](https://github.com/agentscope-ai/QwenPaw/pull/4867) | **版本号升级至 v1.1.10** 并添加发行说明 |
| [#4812](https://github.com/agentscope-ai/QwenPaw/pull/4812) | **Web UI 修复**：header 样式、自动继续视频播放 |

**整体评估**：项目在 **Windows 稳定性**（浏览器清理、MCP 资源池化）方面有实质推进，今日合并的 PR 直接解决了两个高严重度问题。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| # | 标题 | 评论 | 热度信号 |
|---|------|------|---------|
| [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) | [CLOSED] 定时任务与用户消息共享 session 导致任务被中断 | 9 | 高关注 Cron 隔离性 |
| [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) | [CLOSED] 希望像 TRAE 一样支持对话删除与回退 | 9 👍1 | 高关注 UX 诉求 |
| [#4808](https://github.com/agentscope-ai/QwenPaw/issues/4808) | [OPEN] Agent [person_stat_skill] not exists | 7 | Skill 调用错误排查 |
| [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) | [CLOSED] Orphaned cron jobs not cleaned up | 6 | Cron 遗留任务 |
| [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) | [OPEN] 一个无效 job 导致整个 workspace 崩溃 | 4 | Cron 健壮性 |

### 📌 热点分析

**Cron 系统**是绝对焦点：评论量 Top 5 中 4 条与 cron/定时任务相关，涵盖 session 隔离、孤儿任务清理、配置容错、微信投递失败等问题。用户诉求明确——**cron 需要与用户会话彻底解耦，且需要失效容错机制**。

**UX/交互改进**需求突出：Issue [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789)（对话回退）获得最高评论数之一和 👍，说明用户对"细粒度变更管理"有强烈期待。

---

## 5. Bug 与稳定性

### 🔴 严重（已有 Fix PR 或修复中）

| # | Bug 描述 | 状态 | Fix PR |
|---|---------|------|--------|
| [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) | Windows 浏览器进程和临时目录锁残留 | OPEN | **[#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) 已合并** ✅ |
| [#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842) | MCP 服务实例随智能体数量爆炸 | OPEN | **[#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) 已合并** ✅ |
| [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) | Cron 任务与用户消息共享 session 被中断 | CLOSED | 已关闭（待关联 PR 确认） |
| [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) | jobs.json 更新后孤儿 cron 任务不清理 | CLOSED | 已关闭 |
| [#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839) | Windows pip 升级后残留 ~前缀内置技能目录 | CLOSED | 已关闭 |

### 🟡 中等（待修复）

| # | Bug 描述 | 状态 |
|---|---------|------|
| [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) | 一个无效 job 导致整个 workspace 启动失败 | OPEN |
| [#4818](https://github.com/agentscope-ai/QwenPaw/issues/4818) | `share_session=true` 时 cron agent 执行轨迹为空 | OPEN（有 PR [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) 审核中） |
| [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | MCP 服务进程跨重启累积，控制台加载缓慢 | OPEN |
| [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) | ACP 连接 Claude Code 协议不匹配 | OPEN |

### 🟠 低/功能回归

| # | Bug 描述 | 状态 |
|---|---------|------|
| [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807) | 升级后被禁用的内置技能重新启用 | CLOSED |
| [#4864](https://github.com/agentscope-ai/QwenPaw/issues/4864) | v1.1.9 安装后发送消息无反应 | CLOSED |

---

## 6. 功能请求与路线图信号

### 🎯 高信号（有实施中 PR 或明确需求）

| # | 功能请求 | 信号强度 | 对应 PR |
|---|---------|---------|---------|
| [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882) | 模型自动降级链（Model Fallback Chain） | 🔴 高 | 无 |
| [#4859](https://github.com/agentscope-ai/QwenPaw/issues/4859) | Agent 级别的 Web 登录账户隔离 | 🟡 中 | 无 |
| [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) | 对话删除与回退（类 TRAE） | 🟡 中 | 无 |
| [#4841](https://github.com/agentscope-ai/QwenPaw/issues/4841) | Before You Build Skill 提案 | 🟡 中 | 无 |

### 🔧 已推进的 PR 功能

| # | 功能描述 | 状态 |
|---|---------|------|
| [#4879](https://github.com/agentscope-ai/QwenPaw/pull/4879) | 飞书交互式卡片内容提取与消息解析重构 | OPEN |
| [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) | **[Breaking]** AgentScope 1.x → 2.0.0 迁移 | WIP |
| [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) | 飞书群会话共享模式 | Under Review |
| [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) | 添加 MiniMax M3 内置模型 | OPEN |
| [#4737](https://github.com/agentscope-ai/QwenPaw/pull/4737) | Telegram tool_guard 交互式审批（内联键盘） | Under Review |
| [#4848](https://github.com/agentscope-ai/QwenPaw/pull/4848) | QQ 频道二维码授权 | OPEN |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | 每轮对话 Token 用量可见性 | Under Review |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Tauri 桌面自动更新 | OPEN |
| [#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772) | Windows 启动优化（懒加载、缓存） | OPEN |

### ⚠️ 重大变更预警

**PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)** 正在推进 AgentScope 1.x → 2.0.0 的迁移，标记为 `[Breaking Change]` 和 `[WIP]`。这将影响所有依赖 AgentScope 的组件，维护者需高度关注。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Cron 系统稳定性差**：session 隔离、配置容错、孤儿任务、微信投递等多维度问题集中爆发，多位用户（如 @feng183043996）反复报告
2. **Windows 体验碎片化**：浏览器进程残留、MCP 进程爆炸、pip 升级遗留目录、Shell 弹窗干扰等问题叠加
3. **缺少对话回退机制**：用户明确要求类似 TRAE 的文件级回退，而非"整个沙箱"管理
4. **升级体验不佳**：禁用状态丢失（[#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807)）、旧目录残留

### 😊 满意/期待

- **v1.1.10 Spawn Subagent 功能** 受到关注，用户期待子智能体能力
- **MCP 共享池** 的及时修复获得正面反馈
- 社区贡献者活跃，多位首次贡献者参与修复

---

## 8. 待处理积压

### ⏳ 长期未响应的重要 Issues

| # | 标题 | 创建日期 | 天数 | 建议优先级 |
|---|------|---------|------|-----------|
| [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | 字体大小可调节、后台服务模式文件路径可点击 | 2026-05-09 | 24 天 | P2 |
| [#4211](https://github.com/agentscope-ai/QwenPaw/issues/4211) | 多智能体协作 skill 与内置工具对齐 | 2026-05-11 | 22 天 | P2 |
| [#4659](https://github.com/agentscope-ai/QwenPaw/issues/4659) | 空返回问题 | 2026-05-25 | 8 天 | P3 |
| [#4714](https://github.com/agentscope-ai/QwenPaw/issues/4714) | 推理未结束时后续任务无法入队 | 2026-05-27 | 6 天 | P2 |
| [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) | Shell 执行弹窗干扰 | 2026-05-28 | 5 天 | P2 |

### 🔍 审核积压的重要 PRs

| # | 标题 | 创建天数 | 建议行动 |
|---|------|---------|---------|
| [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) | AgentScope 2.0.0 迁移（Breaking）| 1 天 | **优先评审** |
| [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) | share_session cron 空轨迹修复 | 3 天 | 审核 |
| [#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772) | Windows 启动优化 | 5 天 | 审核 |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | Token 用量可见性 | 18 天 | 需关注 |

---

**📊 项目健康度评估**：社区活跃度高，cron 系统是主要痛点集中区，Windows 稳定性修复推进有效，AgentScope 2.0 迁移是需要重点关注的技术债务。建议优先解决 cron 系统的 session 隔离和容错问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 — 2026-06-02

---

## 1. 今日速览

过去 24 小时 ZeptoClaw 项目整体**高度活跃**：PR 吞吐量极高（17 条已合并/关闭，1 条待合并），但 Issues 新增量极低（仅 1 条新开）。项目当前处于 **"稳定冲刺期"**——核心功能迭代放缓，工作重心集中在依赖更新（13 条 Dependabot PR）、CI 治理、以及少量高价值 bug fix。无新版本发布，无破坏性变更。项目健康度良好，但维护者 qhkm 明显是唯一活跃的开发者，深度依赖自动化工具维持依赖新鲜度。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 核心功能修复（📌 本周最高价值合并）

- **PR #609 → cherry-pick #610：修复 providers keyword fallback 误报未配置 provider**
  **链接**: [PR #610](https://github.com/qhkm/zeptoclaw/pull/610) | [PR #592](https://github.com/qhkm/zeptoclaw/pull/592)
  这是 2026-05-20 Sisuthros 提交的原始修复（`infer_provider_name_for_model` 在 keyword 回退阶段未过滤 `available_providers`），经 qhkm 改写分支合并到主分支。直接影响：**配置 NIM 或其他自定义 provider 的用户使用 `openai/gpt-oss-120b` 等含 `openai/` 前缀的模型名将触发 100% 错误率**。这是一个影响线上用户的稳定性修复。

### CI/CD 治理

- **PR #611（待合并）：将 binary-size 检测提升为 PR gate，上限 7.5MB**
  **链接**: [PR #611](https://github.com/qhkm/zeptoclaw/pull/610)
  将 `binary-size` 从仅在 main 分支后执行的被动监控，升级为每次 PR 必须通过的硬性关卡。当前 darwin-arm64 stripped binary 为 6.98MB，预留 21KB 余量。值得注意的是，PR#612 很快跟进指出 7.5MB 的门槛与项目内部"7MB strategic target"之间存在偏差，预计下限将被收紧到 7MB。

### 依赖更新（已合并 13 条）

| 类别 | 范围 |
|------|------|
| Rust | `mail-parser` 0.11.2→0.11.3, `uuid` 1.23.0→1.23.1, `bcrypt` 0.19.0→0.19.1, `tower-http` 0.6.8→0.6.10, `clap` 4.6.0→4.6.1 |
| JavaScript | `astro` 6.1.x→6.3.3 (×2), `@astrojs/starlight` 0.38.x→0.39.2 (×2), `eslint` 10.0.2→10.3.0 |
| GitHub Actions | `taiki-e/install-action` 2.77.3→2.78.2, `EmbarkStudios/cargo-deny-action` 2.0.17→2.0.18 |
| Docker | `rust` 1.93-slim→1.95-slim, `debian` trixie-slim 哈希更新 |
| 安全 | `lettre` 0.11.22, `diesel` 2.3.8（清除了 6 个 RUSTSEC advisory） |

**链接**: [PR #594](https://github.com/qhkm/zeptoclaw/pull/594)（RUSTSEC 清除，是唯一由 qhkm 手动合入的非依赖 PR）

### 项目整体进度判断
- **provider 路由稳定性**：重大 bug 已修复，cherry-pick 合并完成 ✅
- **CI 完整性**：binary-size 门禁化进行中（最后 1 条开放 PR）
- **供应链安全**：RUSTSEC 零容忍策略生效，advisory 已全部清除 ✅
- **文档依赖**：landing 页面和 panel 工具链均已更新到最新稳定版 ✅

---

## 4. 社区热点

### 🔥 Issue #612：二进制品大小门禁校准
**链接**: [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612)
**热度指标**：PR #611 创建后立即被 qhkm 自提 issue 跟进计为"同级/更高优先级"的跟踪事项。
**核心诉求**：质疑 binary-size 门禁设在 7.5MB 的合理性——项目历史最低水位为 6.2MB，当前已涨至 6.98MB（+780KB 漂移），与设定的 7MB 战略目标存在巨大差距。作者要求审计 780KB 的来源并将 gate 收紧至 7MB。
**背景分析**：这是 ZeptoClaw 作为 CLI 智能体工具，对分发包体积极度敏感的表现。二进制膨胀会直接影响 npm/pip 安装速度和 Docker 层缓存效率。此 issue 的提出几乎必然导致 PR #611 被要求修改上限，或者触发新的上游 trimming PR。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 |
|----------|------|------|
| **高** | `infer_provider_name_for_model` keyword fallback 错误地将未配置 provider 声明为已配置，导致 NIM/Custom provider 用户遇到 100% 路由失败 | ✅ 已修复，PR #610（#592 cherry-pick）已合并 |
| **⚠️ 中等** | 二进制尺寸从 6.2MB 基线漂移 ~800KB（当前 6.98MB），逼近 7MB 战略上限，来源未审计 | 🆕 跟踪中，Issue #612 已提出，尚无审计 PR |

---

## 6. 功能请求与路线图信号

今日无新的功能请求类 Issue。但在"已合并 PR"中可以识别出以下项目方向信号：

- **持续压缩分发产物**（Issue #612 暗示）：下一步很可能出现 audit 800KB diff、trim dead code 或调整 `strip`/`opt-level` 的 PR。
- **CI gate 持续收紧**：从 binary-size 门禁化来看，项目在向"每次 PR 多维度硬件门禁"方向演进，未来可能看到更多的 Gate 候选（如编译时间、test coverage delta 等）。

---

## 7. 用户反馈摘要

由于今日 Issue/PR 评论数量极少（#612 评论数为 0，其余 PR 评论为 `undefined`/`0`），**无法提取有效的用户评论文本**。以下为从 Issue/PR title 和描述中推断的间接信号：

- **真实痛点**：使用 NIM（NVIDIA Inference Microservices）部署 Photon 等大模型时，因 model ID 包含 `openai/` prefix 而被错误路由到 OpenAI provider——这是典型的 enterprise/self-hosted 部署场景问题。Sisuthros（PR #592）作为外部贡献者提交修复，说明此痛点已有非核心团队用户受到影响。
- **间接满意度**：项目依赖自动化工具体验良好（Dependabot 策略成熟，GitHub Actions 和 Docker 基础镜像保持最新），维护节奏稳定。

---

## 8. 待处理积压

### 🚨 需立即关注

| 项目 | 详情 |
|------|------|
| **PR #611 亟待修订** | 门禁上限应从 7.5MB 降至 7MB（见 Issue #612）。当前 open，无冲突，预计今日内将有 update。 |
| **Issue #612 待处理** | Binary size audit 任务无人认领。qhkm 是唯一维护者且 self-assigned 该 issue，但目前尚无关联 PR 出现。建议：在合并 #611 后立即启动 Cargo bloat 或 `cargo-deny` alike 分析。 |

### 📋 历史沉积（长期未响应）

今日数据中 PR #592（原始 fix）创建于 2026-05-20，经 12 天后通过 cherry-pick 合并——**说明原始分支因 CI 依赖链断裂（需 lettre/diesel bump + taiki-e action SHA 更新）而长期处于不可合并状态**。这不是积压问题（最终已解决），但暴露了项目的一个结构风险：**单一维护者瓶颈 + 分支因依赖更新传导而阻塞**。建议外来贡献者在 fork 前同步最新 main HEAD。

---

*数据来源: github.com/qhkm/zeptoclaw | 报告时间: 2026-06-02*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*