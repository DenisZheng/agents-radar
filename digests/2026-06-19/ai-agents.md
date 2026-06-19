# OpenClaw 生态日报 2026-06-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-19 00:48 UTC

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

# OpenClaw 项目动态日报 — 2026-06-19

---

## 1. 今日速览

OpenClaw 今日处于**高活跃、高积压**状态。过去 24 小时内 Issues 更新 500 条（新开/活跃 475 条，关闭仅 25 条），PR 更新 500 条（待合并 463 条，已合并/关闭仅 37 条），净积压持续扩大。无新版本发布。项目当前的核心矛盾集中在**消息投递可靠性**（Telegram/Discord/Slack 多通道丢消息）、**会话状态管理**（compaction 旋转、子代理交付、cron 竞争）以及**认证与提供者配置**三大领域。维护者审查速度明显跟不上社区贡献节奏，463 个待合并 PR 和大量标记 `needs-maintainer-review` 的 Issue 表明项目正面临严重的审查瓶颈。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 仅 37 条，相对于 463 条待合并的积压而言推进有限。以下是最值得关注的活跃 PR 及其代表的方向：

| PR | 状态 | 说明 |
|---|---|---|
| [#94697](https://github.com/openclaw/openclaw/pull/94697) | 待合并 | **fix(kill-tree)**: 修复 `killProcessTree` 在 Unix 上误杀网关自身进程组的安全问题（#76259）。验证进程组 leader 后再使用 group kill，防止 gateway 被 SIGTERM。 |
| [#94698](https://github.com/openclaw/openclaw/pull/94698) | 待合并 | **fix(cli)**: 将 post-turn compaction 失败降级为非致命错误（#94688），避免已生成回复因 compaction 失败而丢失。 |
| [#94720](https://github.com/openclaw/openclaw/pull/94720) | 待合并 | **fix(agents)**: 修复 compaction 旋转时最后一条 assistant 回复被丢弃的问题（#76729），直接影响 Feishu/WebChat 用户体验。 |
| [#94717](https://github.com/openclaw/openclaw/pull/94717) | 待合并 | **feat(snapshot)**: 新增 `openclaw snapshot` CLI 插件接口，支持 create/list/verify/restore 快照操作。 |
| [#94718](https://github.com/openclaw/openclaw/pull/94718) | 待合并 | **fix(supervisor)**: 修复 Windows 上 npm 全局 CLI shim（claude/codex/gemini）无法启动的问题，通过 PATHEXT 遍历和 cmd.exe 包装解决。 |
| [#92892](https://github.com/openclaw/openclaw/pull/92892) | 待合并 | **fix(gateway)**: 允许 Gemini CLI 的 flash/pro 模型被识别为支持图片输入（#91739）。 |
| [#90885](https://github.com/openclaw/openclaw/pull/90885) | 待合并 | **fix(agent)**: 修复 compaction model alias 未解析为 canonical model ref 导致的 `Unknown model` 错误。 |
| [#90239](https://github.com/openclaw/openclaw/pull/90239) | 待合并 | **feat(session history)**: 添加跨 reset transcript 的 session history family lookup，使 `chat.history` 和 `sessions_history` 工具能读取完整会话族。规模 XL，涉及面广。 |

**整体判断**：项目在消息投递修复、Windows 兼容性、快照功能等方向稳步推进，但大量 PR 处于 `needs-proof` 或 `waiting on author` 状态，实际合并节奏缓慢。

---

## 4. 社区热点

以下按评论数与互动量排序，反映社区最迫切关注的议题：

### 🔥 Issue [#80319](https://github.com/openclaw/openclaw/issues/80319) — QA tool-defaults suite 混淆 Codex-native 工具与 OpenClaw 动态工具
- **评论 17 条** | P2 | 评级：🐚 platinum hermit
- **核心诉求**：QA 测试套件将 Codex 原生工具（read/write/edit）与 OpenClaw 动态工具混为一谈，导致误报 Codex 运行时工具丢失。已确认为测试框架问题而非 Codex 运行时缺陷，但需要维护者决策如何重构测试架构。

### 🔥 Issue [#79902](https://github.com/openclaw/openclaw/issues/79902) — SQLite transcript/session seams 功能请求
- **评论 13 条** | P2 | 评级：🌊 off-meta tidepool
- **核心诉求**：在 database-first runtime 之上提供 companion-friendly 的 SQLite transcript/session 读取接口，让高级用户无需解析内部 blob 即可构建应用。这是 100yenadmin 提出的系列 SQLite 可观测性需求（#79902/#79903/#79904/#79905）中的总纲，已有多个子 PR 关联。

### 🔥 Issue [#78308](https://github.com/openclaw/openclaw/issues/78308) — MCP 工具调用的通道审批机制
- **评论 13 条** | P2 | 评级：🦞 diamond lobster
- **核心诉求**：让 MCP 服务器通过标准 envelope 接入现有的 `/approve <id>` 审批管道，与 shell-exec 调用享有同等的安全审批流程。涉及安全边界，标记 `needs-security-review`。

### 🔥 Issue [#54531](https://github.com/openclaw/openclaw/issues/54531) — 强制回复到原始通道
- **评论 11 条** | P1 stale | 评级：🦞 diamond lobster
- **核心诉求**：Agent 生成的回复有时不回传到发起请求的通道（Telegram/Discord/WhatsApp），用户仅在 Gateway UI 中看到回复但手机端收不到。这是长期存在的 P1 问题，已标记 stale，社区不满情绪明显。

### 🔥 Issue [#80520](https://github.com/openclaw/openclaw/issues/80520) — Telegram 消息静默丢失
- **评论 11 条** | P1 | 评级：🐚 platinum hermit | 👍3
- **核心诉求**：Telegram 消息被静默丢弃，gateway 接收并处理消息但无 `sendMessage` 日志，用户始终收不到回复。已有 PR [#85403](https://github.com/openclaw/openclaw/pull/85403) 关联修复。

### 🔥 Issue [#83184](https://github.com/openclaw/openclaw/issues/83184) — Heartbeat 回复阻塞后续 heartbeat
- **评论 8 条** | P1 | 评级：🦞 diamond lobster | 👍3
- **核心诉求**：`runHeartbeatOnce` 发送成功后未清空 `pendingFinalDelivery*` 字段，导致后续 heartbeat 被阻塞。

### 🔥 Issue [#79077](https://github.com/openclaw/openclaw/issues/79077) — Telegram bot-to-bot 和 guest-bot 模式支持
- **评论 8 条** | P2 stale | 评级：🐚 platinum hermit | 👍8（最高）
- **核心诉求**：Telegram 于 2026-05-07 发布了 Guest Bots 和 Bot-to-Bot Communication 功能，社区希望 OpenClaw 尽快适配。👍8 表明社区期待极高，但已标记 stale。

---

## 5. Bug 与稳定性

按严重程度排列今日最突出的 Bug：

### 🔴 P1 — 消息投递丢失/错误

| Issue | 描述 | Fix PR |
|---|---|---|
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | Telegram 消息静默丢弃，无 sendMessage 日志 | [#85403](https://github.com/openclaw/openclaw/pull/85403) 待合并 |
| [#81484](https://github.com/openclaw/openclaw/issues/81484) | Discord guild 回复回归：畸形 send payload 和外发循环 | 无 |
| [#79308](https://github.com/openclaw/openclaw/issues/79308) | Telegram 群组回复发送到错误的 chat_id（DM 而非群组） | 无 |
| [#79552](https://github.com/openclaw/openclaw/issues/79552) | Android node 在 websocket 握手完成前发送 node.event，通知事件丢失 | 无 |
| [#78061](https://github.com/openclaw/openclaw/issues/78061) | Slack 线程会话生成回复但无法投递到 Slack | 无 |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | 回复不回传原始通道（Telegram/Discord/WhatsApp） | 无（stale） |

### 🔴 P1 — 会话状态与 Compaction

| Issue | 描述 | Fix PR |
|---|---|---|
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | Heartbeat 回复后 pendingFinalDelivery 未清空，阻塞后续 heartbeat | 无 |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | cron announce 交付触发 EmbeddedAttemptSessionTakeoverError | 无 |
| [#76729](https://github.com/openclaw/openclaw/issues/76729) | Feishu 回复在 compaction 旋转后消失 | [#94720](https://github.com/openclaw/openclaw/pull/94720) 待合并 |
| [#78055](https://github.com/openclaw/openclaw/issues/78055) | Subagent announce 交付过期输出，子代理会话继承无关历史 | 无 |
| [#76233](https://github.com/openclaw/openclaw/issues/76233) | exec-approval-followup 与 bundle-mcp runtime 析构竞争 → UNAVAILABLE | 无 |

### 🟡 P1 — 认证与提供者

| Issue | 描述 | Fix PR |
|---|---|---|
| [#79752](https://github.com/openclaw/openclaw/issues/79752) | Node v26 下 gzip 未解压，Discord HTTP 响应失败 | 无 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | Isolated cron agentTurn 因 setup 超时失败，所有 fallback 模型耗尽 | 无 |
| [#82070](https://github.com/openclaw/openclaw/issues/82070) | 2026.5.12 更新后 CLI 冷启动 ~14s 回归 | 无 |
| [#82250](https://github.com/openclaw/openclaw/issues/82250) | macOS LaunchAgent KeepAlive=true 在网关已运行时仍重启 | 无 |

### 🟡 P2 — 安全与权限

| Issue | 描述 | Fix PR |
|---|---|---|
| [#79451](https://github.com/openclaw/openclaw/issues/79451) | `tools.deny` 对 claude-cli 后端 MCP 不生效 | 无 |
| [#94032](https://github.com/openclaw/openclaw/issues/94032) | exec 无法访问 private-LAN，GUI 同一用户可访问 | 无 |
| [#80040](https://github.com/openclaw/openclaw/issues/80040) | OAuth 失效级联：空占位回复 + 重复工具执行 + 上下文丢失 | 无（stale） |

### 🟢 P2 — 性能

| Issue | 描述 | Fix PR |
|---|---|---|
| [#80607](https://github.com/openclaw/openclaw/issues/80607) | 非默认多 agent 使用 embedded_run 而非直接 session，延迟 10-17s | 无 |
| [#78041](https://github.com/openclaw/openclaw/issues/78041) | 冷路径 auth 解析 ~4s（热路径 2-4ms） | 无 |

---

## 6. 功能请求与路线图信号

以下功能请求结合已有 PR 判断其被纳入下一版本的可能性：

| 功能 | Issue | 关联 PR | 可能性 |
|---|---|---|---|
| **SQLite transcript/session 可观测性** | [#79902](https://github.com/openclaw/openclaw/issues/79902) 及子系列 #79903/#79904/#79905 | 多个子 PR 关联 | ⭐⭐⭐⭐⭐ 极高。100yenadmin 持续推动，database-first runtime 重构（#78595）已在进行，这是架构演进的必然方向。 |
| **MCP 工具调用审批** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | 有 linked PR | ⭐⭐⭐⭐ 高。安全相关功能，已有 PR 开放，但需安全审查。 |
| **Session history 跨 reset 查找** | 隐含需求 | [#90239](https://github.com/openclaw/openclaw/pull/90239) | ⭐⭐⭐⭐ 高。PR 规模 XL 但已存在，涉及面广需谨慎合并。 |
| **Snapshot CLI** | 新需求 | [#94717](https://github.com/openclaw/openclaw/pull/94717) | ⭐⭐⭐⭐ 高。PR 已就绪，维护者审查中。 |
| **Telegram bot-to-bot/guest-bot** | [#79077](https://github.com/openclaw/openclaw/issues/79077) | 无 | ⭐⭐ 低。👍8 但已 stale，无 PR，维护者尚未响应。 |
| **Skill setup hook** | [#80213](https://github.com/openclaw/openclaw/issues/80213) | 有 linked PR | ⭐⭐⭐ 中。有 PR 但需产品决策。 |
| **多提供者 onboarding** | [#81960](https://github.com/openclaw/openclaw/issues/81960) | 无 | ⭐⭐ 低。stale，无 PR。 |
| **外部 reranker 支持** | 新需求 | [#92725](https://github.com/openclaw/openclaw/pull/92725) | ⭐⭐⭐ 中。PR 规模 XL，等待作者更新。 |
| **Windows supervisor 修复** | 新需求 | [#94718](https://github.com/openclaw/openclaw/pull/94718) | ⭐⭐⭐⭐ 高。PR 已就绪，Windows 兼容性修复优先级通常较高。 |

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点：

**🔴 最不满意：消息投递不可靠**
- 多通道（Telegram/Discord/Slaw/Feishu）用户普遍反映回复丢失或投递到错误位置。用户描述"消息被静默丢弃"、"回复出现在 DM 而非群组"、"Slack 线程生成了回复但从未投递"。这是影响日常使用体验的最严重问题。
- 用户 @kyle20026（#80520）："今天多次发生，9:53 AM 发送消息后始终收不到回复，gateway 日志中完全没有 sendMessage 记录。"

**🔴 会话状态令人困惑**
- Compaction 旋转后回复消失（#76729）、子代理交付过期输出（#78055）、cron 任务与用户聊天竞争导致 SessionTakeoverError（#84583）——用户对会话一致性缺乏信心。
- 用户 @njuboy11（#76729）："飞书回复在 compaction 后从 webchat 消失，需要手动刷新才能看到。"

**🟡 性能退化被感知**
- CLI 冷启动从 ~2s 退化到 ~14s（#82070），多 agent 场景每条消息延迟 10-17s（#80607），冷路径 auth 解析 ~4s（#78041）。用户对性能退化非常敏感。

**🟡 调试体验差**
- 插件加载静默失败导致数小时调试（#78301），WebSocket 握手失败无阶段信息（#79603），`openclaw doctor` 对正常工作的 cron 任务误报（#94655）。用户期望更好的可观测性和错误信息。

**🟢 满意与期待**
- 社区对 SQLite 可观测性系列功能（#79902 系列）表现出高度兴趣，认为这是"让 OpenClaw 从黑盒走向可组合平台"的关键一步。
- Telegram 语音打字提示（#94384）、QR 码渲染（#93869）等 UI 增强获得正面反馈。

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR 需要维护者关注：

### ⚠️ 长期 P1 Issue 无响应

| Issue | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | 2026-03-25 | **stale** | 强制回复到原始通道。P1 但已 stale，社区持续报告同类问题。 |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | 2026-05-07 | **stale** | Telegram bot-to-bot/guest-bot 支持。👍8 最高互动，但已 stale 且无 PR。 |
| [#80040](https://github.com/openclaw/openclaw/issues/80040) | 2026-05-10 | **stale** | OAuth 失效级联。三个故障模式复合，已 stale。 |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | 2026-05-12 | **stale** | Hook: before_route_inbound_message。架构级需求，已 stale。 |
| [#81525](https://github.com/openclaw/openclaw/issues/81525) | 2026-05-13 | **stale** | media-understanding 静默路由到无视觉能力的模型。 |
| [#81567](https://github.com/openclaw/openclaw/issues/81567) | 2026-05-13 | **stale** | GPT-4o agent 会话在单次文本响应后退出。 |
| [#82020](https://github.com/openclaw/openclaw/issues/82020) | 2026-05-15 | OPEN | 自定义 provider 与内置 provider 共享 baseUrl 仍损坏。回归自 4.29。 |

### ⚠️ 长期 PR 等待合并

| PR | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| [#90239](https://github.com/openclaw/openclaw/pull/90239) | 2026-06-04 | waiting on author | Session history family lookup，规模 XL，涉及面广。 |
| [#85403](https://github.com/openclaw/openclaw/pull/85403) | 2026-05-22 | waiting on author | Telegram 消息预览抑制，关联 #80520。 |
| [#92725](https://github.com/openclaw/openclaw/pull/92725) | 2026-06-13 | waiting on author | 外部 reranker 支持，规模 XL。 |
| [#91502](https://github.com/openclaw/openclaw/pull/91502) | 2026-06-08 | waiting on author | QA crabline channel driver，规模 XL。 |

### 📊 积压健康度指标

- **Issue 关闭率**：25/500 = **5%**（极低，正常健康项目应 >30%）
- **PR 合并率**：37/500 = **7.4%**（极低）
- **`needs-maintainer-review` 标签**：大量 Issue 和 PR 标记此标签，表明维护者审查是主要瓶颈
- **Stale 率**：展示的 50 条 Issue 中至少 7 条已 stale，占比 **14%**

**建议**：项目需要增加维护者审查带宽，或引入更积极的 stale 管理策略（如自动关闭 30 天无活动的 `needs-maintainer-review` 项目），以避免社区贡献者流失。

---

*数据来源：OpenClaw GitHub Repository (github.com/openclaw/openclaw) | 报告生成时间：2026-06-19*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-06-19 | 分析项目数：14 | 生成：OWL**

---

## 1. 生态全景

2026 年 6 月中旬，个人 AI 助手开源生态处于**高活跃、高分化**的并行发展期。OpenClaw 以 500+ Issues / 500+ PR 的日更新量成为生态绝对核心，但 463 个待合并 PR 和 5% 的 Issue 关闭率暴露出严重的审查瓶颈，折射出社区贡献热情与维护者带宽之间的结构性矛盾。第二梯队的 NanoBot、Hermes Agent、IronClaw、CoPaw、ZeroClaw 均处于密集功能迭代期，日 PR 更新在 25-50 条区间，合并节奏明显更快。安全议题正在成为全生态的共同焦点——TinyClaw、LobsterAI、ZeroClaw、NanoClaw 均在今日收到高危安全报告，涉及未认证访问、任意文件读取、SSRF 等体系性安全缺口，说明随着 Agent 从"玩具"走向"半生产"，安全审计已成为不可回避的刚需。上下文管理（compaction、consolidation、scroll 策略）和消息投递可靠性（多通道丢消息）是横跨多个项目的两大技术痛点，表明 Agent 的"长对话一致性"和"多渠道可达性"仍是行业尚未解决的基础难题。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 待合并 PR | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 475） | 500（待合并 463） | 463 | 无 | 🔴 高积压，审查瓶颈严重 |
| **NanoBot** | 5（活跃 4） | 25（待合并 20） | 20 | 无 | 🟡 活跃，积压可控 |
| **Hermes Agent** | 50（活跃 40） | 50（待合并 42） | 42 | 无 | 🟡 活跃，积压中等 |
| **PicoClaw** | 2（新开 1） | 15（待合并 8） | 8 | 无 | 🟢 健康，积压少 |
| **NanoClaw** | 5（活跃 3） | 21（待合并 15） | 15 | 无 | 🟡 活跃，积压可控 |
| **NullClaw** | 4 | 5（待合并 5） | 5 | 无 | 🟢 健康，低积压 |
| **IronClaw** | 32（活跃 18） | 43（待合并 26） | 26 | 无 | 🟡 高活跃，积压中等 |
| **LobsterAI** | 2（新开 2） | 15（已合并/关闭 14） | ~1 | 无 | 🟢 高消化率 |
| **TinyClaw** | 3（安全 Issue） | 0 | 0 | 无 | 🔴 安全债务集中 |
| **Moltis** | 1 | 0 | 0 | 无 | ⚪ 低活跃 |
| **CoPaw** | 50（关闭 34） | 32（合并/关闭 17） | ~15 | v1.1.12.post1 | 🟢 高消化率，发布节奏稳定 |
| **ZeroClaw** | 27（活跃 26） | 50（待合并 35） | 35 | 无（v0.8.1 准备中） | 🟡 高活跃，积压中等 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 |

**关键数据点：**
- Issue 关闭率最高：**CoPaw**（68%），其次 **LobsterAI**（14/15 PR 合并）
- PR 积压最严重：**OpenClaw**（463 个待合并，合并率仅 7.4%）
- 唯一今日发布版本：**CoPaw**（v1.1.12.post1）

---

## 3. OpenClaw 在生态中的定位

**规模绝对领先，但效率是短板。** OpenClaw 的日 Issues 更新量（500）和 PR 更新量（500）均超过其余 13 个项目之和，GitHub 生态影响力无可争议。与同类项目相比：

| 维度 | OpenClaw | 最接近的竞争者 |
|---|---|---|
| **社区规模** | 500+ Issues/天，463 PR 积压 | Hermes Agent（50/天）、ZeroClaw（50/天）——差一个数量级 |
| **通道覆盖** | Telegram/Discord/Slack/Feishu/WhatsApp/WebChat/Android Node | NanoBot（Feishu/WhatsApp）、IronClaw（Slack/WeCom）、CoPaw（钉钉/飞书/微信/QQ） |
| **技术路线** | 自研 gateway + 多 provider 适配 + 动态工具系统 | ZeroClaw 偏向安全隔离和 pipeline 架构；CoPaw 深度绑定 AgentScope 2.0；NanoBot 强调轻量和并发安全 |
| **核心优势** | 通道覆盖最广、社区贡献最活跃、功能最全面 | — |
| **核心劣势** | 审查瓶颈严重（5% Issue 关闭率）、消息投递可靠性差（多通道丢消息 P1 长期未解）、性能退化（CLI 冷启动 14s） | — |

**技术路线差异：** OpenClaw 走的是"大而全"的平台路线，自研 gateway 层统一多通道接入，动态工具系统支持运行时工具发现。相比之下，ZeroClaw 更强调安全隔离（credential redaction 层、per-agent tool gating、shell 内存上限），CoPaw 正在向 AgentScope 2.0 原生能力迁移，NanoBot 则聚焦并发安全和轻量化。OpenClaw 的架构复杂度远高于同类项目，这是其审查瓶颈的结构性原因。

---

## 4. 共同关注的技术方向

以下需求在多个项目中同时涌现，代表行业共性挑战：

### ① 上下文管理与 Compaction 可靠性
**涉及项目：OpenClaw、NanoBot、Hermes Agent、CoPaw（全部 4 个第一梯队项目）**

- OpenClaw：compaction 旋转丢弃 assistant 回复（#76729）、post-turn compaction 失败导致回复丢失（#94688）
- NanoBot：consolidation 丢失 delivery 消息（#4307）、eager consolidation 需求（#4402）
- Hermes Agent：`/compress` 删除原始消息（#44794）、context compression 静默丢失未刷新消息（#47202）
- CoPaw：子 Agent compaction 导致进程冻结（#5218）、人设文件被压缩丢失（#5171）

**行业信号：** 上下文压缩是 Agent 长对话能力的核心，但目前所有项目的实现都存在"压缩后信息丢失"的问题。CoPaw 正在探索 Headroom 外部可逆压缩 + scroll 检索驱动策略的分层方案，可能是行业方向。

### ② 消息投递可靠性（多通道丢消息）
**涉及项目：OpenClaw、NanoClaw、CoPaw**

- OpenClaw：Telegram 静默丢消息（#80520）、Discord 畸形 payload（#81484）、Slack 线程无法投递（#78061）、回复不回传原始通道（#54531）
- NanoClaw：Discord 长文截断（#2812）
- CoPaw：飞书群聊回复路由到私聊（#5264）

**行业信号：** 多通道消息投递是 Agent 从"开发工具"走向"日常助手"的关键门槛。OpenClaw 的 P1 问题已标记 stale 且社区不满情绪明显，说明这是用户最痛但最难解决的问题。

### ③ 安全与权限隔离
**涉及项目：TinyClaw、LobsterAI、ZeroClaw、NanoClaw、OpenClaw、Hermes Agent**

- TinyClaw：未认证 API 权限绕过（#284）、任意文件读取（#283）、文件外发（#282）
- LobsterAI：自动 artifact 加载导致任意本地文件读取（#2176）
- ZeroClaw：`execute_pipeline` 绕过 per-agent tool gating（#7947）、SSRF 防护（#7902）
- NanoClaw：非 Owner 成员可创建持久子 Agent（#2807）、`send_file` 路径穿越（#2817）
- OpenClaw：`tools.deny` 对 MCP 不生效（#79451）、exec 无法访问 private-LAN（#94032）
- Hermes Agent：子 profile 下 state.db 为空导致会话数据丢失（#48519）

**行业信号：** 安全议题在 6 月 19 日集中爆发，涉及认证绕过、文件越权、SSRF、权限隔离等多个维度。随着 Agent 开始处理敏感数据和操作本地系统，安全审计已从"加分项"变为"必选项"。

### ④ 会话状态管理
**涉及项目：OpenClaw、NanoBot、NullClaw、Moltis**

- OpenClaw：cron 竞争导致 SessionTakeoverError（#84583）、子代理交付过期输出（#78055）
- NanoBot：project workspace 读写不对称（#4374）
- NullClaw：流式工具调用被禁用（#964）
- Moltis：main session 无法删除/归档（#1132）

### ⑤ Windows 兼容性
**涉及项目：OpenClaw、CoPaw、ZeroClaw、Hermes Agent**

- OpenClaw：Windows npm 全局 CLI shim 无法启动（#94718）
- CoPaw：Windows SSL 证书问题（#5298）、ChromaDB SQLite 兼容性（#5265）
- ZeroClaw：74 个 Windows 测试失败（#7462）
- Hermes Agent：WSL 下 Windows 路径泄漏（#40137）

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 差异化亮点 |
|---|---|---|---|---|
| **OpenClaw** | 全功能 AI Agent 平台 | 需要多通道部署的高级用户/团队 | 自研 gateway、动态工具、多 provider | 通道覆盖最广，社区最大 |
| **NanoBot** | 轻量高并发 Agent 框架 | 需要并发安全的开发者 | 并发安全、consolidation、sandbox | 并发安全修复响应最快 |
| **Hermes Agent** | 桌面端优先的 Agent 体验 | 桌面用户、macOS 重度用户 | Dashboard、Desktop app、profile 系统 | 桌面端产品化最深入 |
| **PicoClaw** | 嵌入式/边缘 Agent | IoT 开发者、资源受限场景 | 子代理 spawn、web_search/fetch | 唯一明确面向嵌入式场景 |
| **NanoClaw** | 多 Agent 协作平台 | 需要 Agent-to-Agent 协作的团队 | Agent-to-Agent 审批、容器运行时 | 多 Agent 权限管控领先 |
| **NullClaw** | 高性能流式 Agent | 追求低延迟的开发者 | Zig 语言、流式工具调用、A2A 协议 | 唯一使用 Zig 编写，性能导向 |
| **IronClaw** | 企业级 Agent 平台 | 企业用户、团队协作 | Projects、Automations、Slack 入口 | 企业协作功能最完整 |
| **LobsterAI** | 桌面 AI 工作站 | 中文用户、内容创作者 | Electron、ASR、Computer Use、Artifact | 语音输入和 Computer Use MVP |
| **TinyClaw** | 极简 Agent 运行时 | 轻量化需求用户 | 最小化设计 | 代码量最小，安全债务最高 |
| **CoPaw** | AgentScope 生态 Agent | AgentScope 用户、钉钉/飞书用户 | AgentScope 2.0、MCP 池化、向量记忆 | 与 AgentScope 深度集成 |
| **ZeroClaw** | 安全优先的 Agent 平台 | 安全敏感场景用户 | Pipeline、credential redaction、SSRF 防护 | 安全架构最完善 |

---

## 6. 社区热度与成熟度

### 第一梯队：高活跃 + 高积压（快速迭代期）

| 项目 | 日 PR 更新 | 积压 PR | 特征 |
|---|---|---|---|
| **OpenClaw** | 500 | 463 | 社区贡献爆发但审查严重滞后，需解决维护者带宽问题 |
| **ZeroClaw** | 50 | 35 | v0.8.1 冲刺期，安全加固和回归修复并行，发布节奏健康 |
| **IronClaw** | 43 | 26 | Reborn 大版本冲刺，Projects/并发/Slack 入口多条线并行 |
| **Hermes Agent** | 50 | 42 | 桌面端体验和多平台适配器补全并举，积压增长中 |

### 第二梯队：活跃 + 可控积压（质量巩固期）

| 项目 | 日 PR 更新 | 积压 PR | 特征 |
|---|---|---|---|
| **NanoBot** | 25 | 20 | 并发安全和上下文管理修复为主，合并节奏合理 |
| **NanoClaw** | 21 | 15 | 安全修复响应快，但出现"重复修复"内耗 |
| **CoPaw** | 32 | ~15 | **今日唯一发布版本**，Issue 关闭率 68%，消化率全生态最高 |

### 第三梯队：低活跃 / 维护期

| 项目 | 状态 |
|---|---|
| **LobsterAI** | 高产出日（14/15 PR 合并），但安全漏洞需紧急响应 |
| **PicoClaw** | 中等活跃，依赖升级主导，安全修复待合并 |
| **NullClaw** | 低活跃，核心功能修复 PR 就绪待审 |
| **Moltis** | 极低活跃，仅 1 个新 Issue |
| **ZeptoClaw** | 无活动 |
| **TinyClaw** | 代码停滞，安全债务集中爆发 |

---

## 7. 值得关注的趋势信号

### 趋势 1：Agent 安全从"可选"变为"刚需"

**信号强度：🔴🔴🔴 极高**

今日 TinyClaw（3 个高危）、LobsterAI（1 个高危）、ZeroClaw（S0 混淆代理漏洞）、NanoClaw（2 个安全 Issue）共收到 7 个高危安全报告，涉及认证绕过、文件越权、SSRF、权限隔离。安全研究者 YLChen-007 在 LobsterAI 和 TinyClaw 的系统性审计表明，外部安全社区已开始关注 AI Agent 生态。**对开发者的建议：** 在架构设计阶段就引入安全审查，而非事后修补；建立 SECURITY.md 和安全响应流程；对文件操作、API 入口、子代理权限实施最小权限原则。

### 趋势 2：上下文管理正在从"简单截断"走向"分层策略"

**信号强度：🔴🔴🔴 极高**

CoPaw 的 Headroom 外部可逆压缩（#5244）+ scroll 检索驱动策略（#5321）代表了上下文管理的最新方向——不再依赖单一的 compaction，而是形成"原生压缩 + 可插拔策略 + 检索召回"的分层体系。NanoBot 的 eager consolidation（#4402）和 OpenClaw 的 session history 跨 reset 查找（#90239）同样指向这一趋势。**对开发者的建议：** 上下文管理不应是单一的 trim/summarize，而应提供可配置的多策略选项（保留最近 N 条、锁定人设文件、外部压缩、检索召回）。

### 趋势 3：多 Agent 协作从"自由流转"走向"受控协作"

**信号强度：🔴🔴🔴 高**

NanoClaw 今日合并了 Agent-to-Agent 逐条审批策略（#2793），OpenClaw 的 MCP 工具调用审批（#78308）和 Hermes Agent 的 delegate_task 跨 profile 支持（#35409）都指向同一方向：多 Agent 协作需要细粒度的权限控制。**对开发者的建议：** 多 Agent 系统应默认提供审批机制，而非完全自由的消息流转；需要支持 per-agent 的 tool access policy 和跨 agent 的身份认证。

### 趋势 4：桌面端体验成为差异化竞争焦点

**信号强度：🔴🔴 中高**

Hermes Agent 的桌面端 zoom 控制（#40166，👍6）、LobsterAI 的 Computer Use MVP 和语音输入重构、NullClaw 的 ESP32 嵌入式探索，表明 Agent 的交互形态正在从"命令行 + Web"扩展到桌面端、移动端、嵌入式。**对开发者的建议：** 桌面端用户期望的是"原生应用体验"而非"Web 套壳"，需要关注字体缩放、主题、离线能力、系统集成等细节。

### 趋势 5：消息投递可靠性是用户留存的关键门槛

**信号强度：🔴🔴🔴 极高**

OpenClaw 的 P1 消息投递问题（#54531）已标记 stale 且社区不满持续积累，CoPaw 的飞书路由错误（#5264）和 NanoClaw 的 Discord 截断（#2812）表明这不是个例。**对开发者的建议：** 消息投递应作为核心功能而非附加功能来对待；需要端到端的投递确认机制（sendMessage 日志、投递状态回执）；多通道场景下需要严格的会话路由隔离。

### 趋势 6：生态正在从"单一 Agent"走向"Agent 平台"

**信号强度：🔴🔴 中**

IronClaw 的 Projects 系列（5 层 PR 栈）、OpenClaw 的 snapshot CLI（#94717）和 session history 跨 reset 查找（#90239）、NanoClaw 的 Agent-to-Agent 审批，都表明项目正在从"运行单个 Agent"向"管理 Agent 生态"演进。**对开发者的建议：** 平台化是必然趋势，需要提前考虑多 Agent 管理、项目/工作区隔离、Agent 生命周期管理（创建/重命名/删除/归档）等基础设施。

---

*本报告基于 2026-06-19 各项目的 GitHub 公开数据生成。数据抓取时间截至当日 00:00 UTC。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-19

## 1. 今日速览

NanoBot 社区保持高活跃度，过去 24 小时共处理 5 条 Issue 更新（4 条新开/活跃、1 条已关闭）和 25 条 PR 更新（20 条待合并、5 条已合并/关闭）。无新版本发布。项目在 **并发安全、上下文管理、WebUI 体验、多平台通道** 四个方向均有实质性推进，多位贡献者围绕 consolidation 机制、per-run hooks 并发问题和 sandbox 配置提交了高质量修复。整体健康度良好，待合并 PR 积压 20 条，需关注 review 节奏。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 5 条 PR 汇总如下：

| PR | 状态 | 内容摘要 |
|---|---|---|
| **#4400** | 已合并 | CI 优化：仅变更 `docs/` 目录的 push/PR 跳过 CI 运行，减少资源浪费。 |
| **#4391** | 已合并 | Feishu 通道新增 QR 扫码创建 Bot 的 CLI 登录命令（设备码流），免去手动创建应用和查找凭证的步骤。 |
| **#4403** | 已关闭 | 将 Firecrawl 集成为无 API Key 的托管 MCP 端点，从本地 `npx firecrawl-mcp` 切换到托管模式。 |
| **#1391** | 已关闭 | 为 `AgentDefaults` 添加 `consolidation_model` 字段，允许将 memory consolidation 路由到更便宜的模型（主模型为 Opus 等高价模型时尤为实用）。 |
| **#4375** | 已关闭（Issue） | Git 命令在 workspace 子目录中被安全策略阻止的 bug 已关闭，关联修复 PR #4380 此前已合并。 |

**关键推进点：**
- **#4391** 大幅降低了 Feishu 通道的接入门槛，对国内用户友好。
- **#1391** 关闭了 consolidation 自定义模型请求，说明该功能已被接受合并，后续版本将支持。
- **#4400** 是社区基础设施优化，体现维护者对 CI 效率的关注。

---

## 4. 社区热点

### 🔥 最值得关注的 3 个讨论

**① Issue #4307 — Post-turn consolidation 清除了 agent 自身的 delivery 消息**
- 链接：[HKUDS/nanobot#4307](https://github.com/HKUDS/nanobot/issues/4307)
- 👍 0 · 💬 3 条评论
- **核心问题：** 当 `context_window_tokens` 设置较小（如 40k）时，多轮迭代累积 100k+ tokens 后才触发 consolidation，此时归档过程会丢失 assistant 自身的 delivery 消息，导致用户后续引用无上下文。
- **关联 PR：** #4373（fix: preserve delivery context during consolidation）正在修复中。

**② Issue #4374 — Project workspace 中 SOUL.md/USER.md 读写不对称**
- 链接：[HKUDS/nanobot#4374](https://github.com/HKUDS/nanobot/issues/4374)
- 👍 0 · 💬 2 条评论
- **核心问题：** WebUI 项目工作区从项目目录读取 `SOUL.md`/`USER.md`，但 agent 写入时却写入默认工作区，导致配置不一致。
- **关联 PR：** #4387（fix: fall back to default memory bootstrap）部分相关，但 #4374 的核心写入不对称问题仍在讨论中。

**③ PR #4397 — 中途注入用户消息时添加系统提示**
- 链接：[HKUDS/nanobot#4397](https://github.com/HKUDS/nanobot/pull/4397)
- **核心问题：** 用户在 agent 工具执行期间发送消息，AgentRunner 将消息注入迭代之间，但 LLM 可能忽略这些消息继续调用工具，导致用户长时间等待无回应。
- **方案：** 在注入的用户消息开头追加提示，要求 LLM 优先确认并回应用户。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 状态 | 描述 |
|---|---|---|---|
| 🔴 高 | [#4408](https://github.com/HKUDS/nanobot/issues/4408) | **已有 fix PR #4409（待合并）** | `Nanobot.run()` 的 per-run hooks 通过修改共享的 `self._loop._extra_hooks` 实现，并发场景下会被覆盖（clobbered），导致 hook 丢失或交叉污染。 |
| 🟡 中 | [#4307](https://github.com/HKUDS/nanobot/issues/4307) | **已有 fix PR #4373（待合并）** | Post-turn consolidation 丢失 delivery 消息，影响用户后续引用体验。 |
| 🟡 中 | [#4374](https://github.com/HKUDS/nanobot/issues/4374) | **部分相关 PR #4387** | Project workspace 读写不对称，SOUL.md/USER.md 写入位置与读取位置不一致。 |
| 🟢 低 | [#4375](https://github.com/HKUDS/nanobot/issues/4375) | ✅ 已关闭 | Git 命令在 workspace 子目录中被安全策略阻止（此前已由 #4380 修复）。 |

**并发安全预警：** #4408 是今日最需要优先关注的 bug，涉及 `AgentLoop` 共享状态在多线程/多协程场景下的数据竞争。PR #4409 已提出将 per-run hooks 通过参数传递而非修改共享状态的方案，建议尽快 review 合并。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 路线图信号 |
|---|---|---|---|
| **Eager consolidation（可选的即时记忆归档）** | [#4402](https://github.com/HKUDS/nanobot/pull/4402) | PR 待合并 | 高 — 直接回应 #2604 的功能请求，实现不注入 prompt 的后台归档。 |
| **bwrap sandbox 额外绑定根目录** | [#4404](https://github.com/HKUDS/nanobot/pull/4404) | PR 待合并 | 高 — 回应 #4107，允许暴露 `~/.local/bin` 等用户级工具目录到沙箱。 |
| **WebUI 隐藏设置区域（简化 UI）** | [#4399](https://github.com/HKUDS/nanobot/pull/4399) | PR 待合并 | 中 — 面向多实例部署的"普通用户友好"UI 简化。 |
| **Serper.dev 搜索提供商** | [#4406](https://github.com/HKUDS/nanobot/pull/4406) | PR 待合并 | 中 — 新增 Google Search API 后端，丰富搜索选项。 |
| **Keenable 无 API Key 模式** | [#4405](https://github.com/HKUDS/nanobot/pull/4405) | PR 待合并 | 中 — 降低搜索功能接入门槛。 |
| **WhatsApp LID→phone 启动映射** | [#4407](https://github.com/HKUDS/nanobot/pull/4407) | PR 待合并 | 中 — 解决 WhatsApp 首次消息无法解析发送者的问题。 |
| **可选功能启用/发现机制** | [#4396](https://github.com/HKUDS/nanobot/pull/4396) | PR 待合并 | 中 — 为 CLI 和 WebUI 添加统一的可选功能管理，Bedrock 等移至可选扩展。 |
| **多实例管理（normie-friendly）** | [#4390](https://github.com/HKUDS/nanobot/issues/4390) | Issue 讨论中 | 低 — 用户希望隐藏 UI 设置/显示选项，与 #4399 方向一致。 |
| **工具微压缩可配置化** | [#4392](https://github.com/HKUDS/nanobot/pull/4392) | PR 待合并 | 中 — 允许缓存敏感部署禁用动态工具结果微压缩。 |

**路线图判断：** 当前开发重点明显集中在 **三大方向**：
1. **上下文与记忆管理**（consolidation 修复 + eager consolidation + delivery 上下文保留）
2. **沙箱安全与工具暴露**（bwrap 配置 + git 子目录测试覆盖）
3. **多平台/多通道体验**（WhatsApp、Feishu、搜索提供商、WebUI 简化）

---

## 7. 用户反馈摘要

### 😤 痛点

- **并发使用不安全：** 多实例或并发调用 `Nanobot.run()` 时 hook 互相覆盖（#4408），影响生产环境稳定性。
- **上下文丢失影响体验：** 长对话后 consolidation 丢失关键 delivery 消息，用户后续引用无上下文（#4307）。
- **项目工作区配置不一致：** 读取和写入路径不同步，导致用户自定义的 SOUL.md/USER.md 在写入后不被读取（#4374）。
- **Git 操作受限：** 安全策略过于严格，阻止了 workspace 子目录内的正常 git 操作（#4375，已修复）。

### 😐 使用场景

- **多实例部署用户** 希望简化 UI，隐藏不常用的设置区域（#4390、#4399）。
- **WhatsApp 用户** 遇到首次消息无法识别发送者的问题（#4407）。
- **使用高价主模型（如 Opus）的用户** 希望 consolidation 使用更便宜的模型以降低成本（#1391）。

### 😊 满意

- Feishu 通道的 QR 扫码登录流程（#4391）被认为大幅降低了接入门槛。
- CI 跳过 docs-only 变更（#4400）获得社区认可，减少不必要的等待。

---

## 8. 待处理积压

| 积压项 | 类型 | 等待时间 | 建议 |
|---|---|---|---|
| **PR #4409** — 修复 per-run hooks 并发安全 | 关键 bug fix | 1 天 | 🔴 **建议优先 review 合并**，涉及共享状态修改，影响所有并发使用场景。 |
| **PR #4373** — 修复 consolidation 丢失 delivery 上下文 | bug fix | 3 天 | 🟡 关联 #4307，建议与 #4402（eager consolidation）一起 review，确保逻辑一致。 |
| **Issue #4374** — Project workspace 读写不对称 | bug | 3 天 | 🟡 #4387 部分相关但未完全解决写入问题，需明确修复方案。 |
| **PR #1391** — consolidation_model 自定义模型 | enhancement | 109 天 | 该 PR 已关闭，功能似乎已被接受，需确认是否已合并到主分支或需要重新提交。 |
| **PR #4397** — 中途用户消息注入提示 | bug fix | 1 天 | 影响用户体验，建议尽快 review。 |
| **PR #4398** — 避免 WebUI settings 路由缓慢刷新 | enhancement | 1 天 | 影响 WebUI 响应速度，建议 review。 |

**维护者行动建议：**
1. **立即处理 #4409** — 并发安全问题不应等待，建议今天内完成 review。
2. **批量 review consolidation 相关 PR**（#4373、#4402、#4392）— 这些 PR 涉及同一子系统，集中 review 可避免逻辑冲突。
3. **关注 #4374 的写入路径修复** — 当前 #4387 只解决了读取回退问题，写入不对称的核心问题仍在。

---

*本报告基于 2026-06-18 至 2026-06-19 的 GitHub 数据自动生成。数据源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-19 ｜ 数据来源：NousResearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 今日社区活跃度较高，过去 24 小时共产生 50 条 Issue 更新（新开/活跃 40 条，关闭 10 条）和 50 条 PR 更新（待合并 42 条，已合并/关闭 8 条），无新版本发布。活跃Issue 中 Bug 与 Feature 占比相当，显示项目正处于稳定使用与功能拓展并行的阶段。多条高赞/多评论 Issues 集中在桌面端体验改进和多平台兼容性上，反映出桌面用户群体持续扩大。今日有多个高质量 Fix PR 待合并（Cron profile-aware、Gemini thinking tokens、Telegram streaming、Docker WebUI 等），若顺利合入将显著提升下一版本的稳定性和平台覆盖度。

---

## 2. 版本发布

**无新版本发布。** 最近正式版本仍为 v0.16.0（v2026.6.5）。

---

## 3. 项目进展

### 已合入/已关闭的重要 PR

| PR | 状态 | 说明 |
|---|---|---|
| **#48629** — memory tool 写操作无返回全部条目导致的线性 token waste | 已由 main 分支修复 | 性能修复：memory_tool.py 的写操作不再全量返回，降低 token 消耗。Will ship in next release。 |
| **#48649 / #48719** — Cron jobs profile-aware 修复 | Fix PR 已开放 | 非默认 profile 创建的 cron 任务会错误存储到全局目录，#48719 提供了修复，即将合入。 |
| **#47477 / #47202 / #44794 / #39704** — Context compression 系列 Bug | 已关闭（多个重复/关联） | context compression 导致原始消息永久丢失的系列问题已有修复跟踪。 |
| **#37369** — Telegram gateway SQLite FD 泄漏（P1） | 已关闭 | response_store.db 未正常关闭连接导致 ~2 天后触发 ulimit，已修复。 |
| **#48709** — Dashboard Observatory 主题 | 已合入 | 新增冷蓝/紫罗兰天文主题的主题。 |

### 方向性进展判断

今天 PR 队列呈现明显的 **"Bug 修复 + Dashboard/Desktop 体验增强 + 平台适配器补全"** 三位一体的特征，项目正从核心引擎稳定性向终端用户可用性和多平台覆盖两个方向同时推进。

---

## 4. 社区热点

以下按评论数/讨论热度排序，展示最受关注的 Issue 与 PR：

### 🔥 热度最高（≥ 4 条评论）

**1. Issue #38478 — [Bug] camofox browser screenshots are cropped** — 5 comments
- 用户: panikinator | 平台: browser/camofox
- 使用 camofox 时所有网页截图被裁剪或异常缩放，疑似 viewport/resolution 不匹配。
- 链接: https://github.com/NousResearch/hermes-agent/issues/38478

**2. Issue #40166 — [Feature] Desktop app: add font size / zoom control** — 5 comments, 👍 6（最高）
- 用户: garretttwillis | 平台: macOS Desktop
- macOS 桌面端无法调节字体大小或缩放级别，Cmd+/- 和捏合手势均无效。**这是今日反应数最高（👍6）的请求**，说明桌面用户对无障碍/可读性需求强烈。
- 链接: https://github.com/NousResearch/hermes-agent/issues/40166

**3. Issue #47477 — [Feature] WhatsApp Group Sending with Hermes Skill (Termux)** — 5 comments
- 用户: bookra123456 | 平台: WhatsApp
- 希望提供 WhatsApp 群组发送能力的 Termux 一键指南，反映移动端/低资源环境的用户需求。
- 链接: https://github.com/NousResearch/hermes-agent/issues/47477

**4. Issue #33314 — [Feature] Post-update check hooks for skill/profile drift** — 4 comments
- 用户: hehehe0803 | 类型: Feature
- 希望在 `hermes update` 后自动检测本地 skill/profile 与上游的偏移，防止更新覆盖自定义配置。
- 链接: https://github.com/NousResearch/hermes-agent/issues/33314

**5. Issue #41190 — [Feature] Unified plugin route selector for provider/model override** — 4 comments
- 用户: MarkoPaasila | 类型: Feature/Plugin
- 当前 provider/model 路由逻辑分散在配置、启发式逻辑和故障恢复路径中，需要统一 hook。与 #35409（delegate_task profile override）形成呼应。
- 链接: https://github.com NousResearch/hermes-agent/issues/41190

**6. Issue #35409 / #41889 — delegate_task 跨 profile 支持** — 各 3 comments
- 子代理继承父代理配置，无法指定别的 profile/model，影响任务路由灵活性。
- 链接: https://github.com/NousResearch/hermes-agent/issues/35409 / https://github.com/NousResearch/hermes-agent/issues/41889

### 分析

社区讨论集中在三个主题：
1. **桌面端体验**（zoom、workspace per session、TUI 可靠性）— 高频、高赞
2. **多平台/多 profile 正确性**（WhatsApp、Telegram streaming、cron profile-aware）— 多为 Bug，修复意愿高
3. **插件/路由架构优化**（unified route selector、delegate cross-profile）— 深层架构诉求

---

## 5. Bug 与稳定性

按严重程度排序，今日值得注意的 Bug：

### 🔴 P0/P1 — 严重功能损失

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| #37369 | Telegram gateway FD 泄漏（~2 天后触发 ulimit） | ✅ 已关闭 | 已有修复 |
| #44794 | `/compress` 删除 state.db 原始消息 | ✅ 已关闭 | 关联修复中 |
| #47202 | Context compression 静默丢失未刷新消息 | ✅ 已关闭 | 关联修复中 |
| #48519 | 子 profile 下 gateway state.db 为空 — **会话数据完全丢失**（P1） | 🔴 OPEN | 无 |
| #37369 同上，但已修复关闭 | — | — | — |

⚠️ **#48519 是最需要紧急关注的 Bug**：子 profile 下 sessions.json 有记录但 state.db 为空，导致完整的会话数据丢失。与 #40344、#46144 相关联，目前无 fix PR。

### 🟡 P2 — 功能受限或体验严重下降

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| #38478 | camofox 浏览器截图裁剪（🗣️ 5 comments） | OPEN | 无 |
| #45924 | Hermes + Gemma 4 12B（Ollama）运行报错 | OPEN | 无 |
| #48649 | Cron jobs 非 profile-aware，存储/调度路径错误 | OPEN | ✅ **#48719 已提交** |
| #47868 | messages[] 泄漏 `timestamp` 字段导致严格 provider 拒绝请求 | OPEN | 无 |
| #48648 | Telegram 流式超过 4096 字符时无限嵌套回复 | OPEN | ✅ **#48718 已提交** |
| #48689 | `hermes doctor` 报告过时的 npm 漏洞 + 误报 Gemini API key 无效 | OPEN | 无 |
| #48702 | Desktop 应用不实时显示 Telegram 会话新消息 | OPEN | 无 |
| #40137 | WSL 下终端注入 Windows 路径 | OPEN | 无 |

### 🟢 P3 — 体验问题

| # | 问题 | 状态 |
|---|---|---|
| #47477 | WhatsApp 群组发送 Termux 引导 | CLOSED（已回应） |
| #48658 | Desktop 缩放级别切换会话后重置 | OPEN |
| #40166 | Desktop 无字体/缩放控制（👍6，高优先级） | OPEN |
| #48715 | `/status` 不显示当前活跃 model | OPEN |
| #48707 | 错误打开，非贡献 | 已关闭 |

---

## 6. 功能请求与路线图信号

### 高意图功能请求（与进行中的 PR 之间有强烈的信号关联）

| 功能请求 Issue | 关联 PR | 纳入可能性 |
|---|---|---|
| **#48649** Cron profile-aware → | ✅ **#48719** 已提交 | 🎯 极高（已有 PR） |
| **#48648** Telegram streaming overflow → | ✅ **#48718** 已提交 | 🎯 极高（已有 PR） |
| Dashboard 可配置聊天模式 | ✅ **#48568** 已开放 | 🎯 高 |
| Desktop zoom 控制（👍6） | Issue #48658（PR 仅有 bug 修复） | 🟡 中（需求强烈但无 PR） |
| Microsoft Teams 适配器 V2 | ✅ **#13767** 长期开放 | 🟡 中（长期 PR，近期有活动） |
| Slack 富文本 Markdown | ✅ **#47051** 开放中，作者称 supersedes 之前所有同类 PR | 🟡 月中 |

### 值得关注的实验性 Feature（无对应 Fix PR，但有 RFC 级 Issue）

1. **#48011 — Mission/Project 原语**：用户提出需要一个 "mission/project source-of-truth" 原语，类似 Kanban 系统中的项目概念。这是对 agent 记忆/目标系统的结构扩展，可能需要 RFC 级讨论。
   - https://github.com/NousResearch/hermes-agent/issues/48011

2. **#41190 — 统一插件路由选择器**：长期架构诉求，提供单一 hook 控制所有 LLM 调用的 provider/model。暗示对当前分散路由逻辑的不满。
   - https://github.com/NousResearch/hermes-agent/issues/41190

3. **#33314 — Post-update check hooks**：更新后自动检测 skill/profile 漂移。若技能系统持续扩展，此需求会越发重要。
   - https://github.com/NousResearch/hermes-agent/issues/33314

4. **#48708 — Agentic Resource Discovery (ARD)**：让 agent 在运行时动态发现和连接能力，PR 已提交，较新的 feature。
   - https://github.com/NousResearch/hermes-agent/pull/48708

---

## 7. 用户反馈摘要

### 📌 提炼的核心用户痛点

| 痛点类别 | 具体表现 | 频次/强度 |
|---|---|---|
| **桌面端体验不完整** | zoom 不可用（👍6）、workspace 不能按会话切换、TUI 在长任务下卡顿、Mac 平台缩放设置失职 | 高，多 issue 集中体现 |
| **多平台消息同步问题** | Telegram 新消息不实时显示、WhatsApp 群组发送失败 | 中高 |
| **配置/环境兼容性差** | WSL 下 Windows 路径泄漏、Windows 上 CMD 黑框一闪而过（#48714 已修复）、Windows 不支持直装需 WSL2/Docker | 中 |
| **状态/会话数据丢失** | `/compress` 删消息（系列 issue）、子 profile 下 state.db 为空（#48519）、`hermes dump` 报告错误的 provider 名称 | 高，涉及核心可靠性 |
| **子代理/任务路由不灵活** | delegate_task 不能指定 profile/model、Kanban 与 delegate 功能割裂 | 中 |

### 😊 满意信号

- Docker 安装支持 read-only 源（#48541）反映 Docker 用户增长和可维护性改善
- 15 语言 i18n 支持（#38846）在持续开发，社区本地化活跃
- Dashboard 新增可配置对话模式（#48568）和主题扩展，显示桌面端产品化投入持续
- ARD（Agentic Resource Discovery）PR（#48708）代表 agent 生态开放性的探索

### 😟 不满意信号

- 多个 Old Issue 活跃数周至数月仍未被指派或修复（#40137 2026-06-05 至今 open，#35409 2026-05-30 至今 open）
- `hermes doctor` 误报问题（#48689）影响用户对诊断工具的信任
- 内存工具线性 token waste（#48629）虽已修复，但说明发布版本监控有待加强

---

## 8. 待处理积压

以下 Issue/PR 社区已提出较长时间或重要性高但响应不足，建议维护者优先关注：

### 🔴 高优先级积压（数据丢失/核心功能）

| # | 标题 | 创建/最后更新 | 说明 |
|---|---|---|---|
| **#48519** | 子 profile 下 gateway state.db 完全为空 — 会话数据丢失 | 2026-06-18 / 2026-06-18 | **无 fix PR**，子 profile 数据丢失是严重可靠性问题 |
| **#40137** | WSL 下终端注入 Windows 路径 | 2026-06-05 / 2026-06-18 | **开放 44 天**，无修复 PR，Windows/WSL 日常使用受阻 |
| **#38478** | camofox 截图裁剪（🗣️ 5 comments） | 2026-06-03 / 2026-06-18 | **开放 45 天**，多讨论但无修复 |

### 🟡 中优先级积压

| # | 标题 | 创建/最后更新 | 说明 |
|---|---|---|---|
| **#35409** | delegate_task 缺少 profile/model override | 2026-05-30 / 2026-06-18 | **开放 50 天**，功能诉求明确，社区讨论有共识但无 PR |
| **#33314** | Post-update check hooks | 2026-05-27 / 2026-06-18 | **开放 53 天**，多次 `hermes update` 覆盖用户自定义配置的报告 |
| **#40166** | Desktop zoom/font-size 控制（👍6） | 2026-06-05 / 2026-06-18 | **开放 44 天**，桌面用户显著需求，无 PR |
| **#13767** | Microsoft Teams 适配器 V2 | 2026-04-22 / 2026-06-19 | **开放 58 天**，近期有活动（可能是社区自行维护的长期 PR） |

### 🟢 低优先级积压

| # | 标题 | 说明 |
|---|---|---|
| **#43784** | Shareable Profile Templates（开放 40 天） | 用户希望分享/复用 agent profile 配置 |
| **#47058** | Dashboard config hot-reload（开放 3 天，较新） | 需求明确，Dashboard 每次需重启 |
| **#13767** | Microsoft Teams 适配器 V2（58 天） | 长期开放，但不影响多数用户 |

---

**总结评估：** 项目今日社区活跃度健康，Bug 修复和功能演进并举。需紧急关注的核心问题是 **#48519 子 profile 会话数据丢失**（P1、无 fix PR）和 **#40137 WSL 路径泄漏**（开放 44 天、Windows 用户日常受阻）。 desktop 端体验（zoom、workspace、TUI）是社区反应最集中的方向，建议后续版本以 **桌面可用性 + 多 platform 稳定性** 为优先级导向。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-19

---

## 1. 今日速览

PicoClaw 今日活跃度**中等偏高**，共处理 15 个 PR（7 个已合并/关闭，8 个待合并）和 2 个 Issue（1 新开，1 关闭）。无新版本发布。项目当前处于**密集维护期**：依赖升级 PR 占据主导（11/15），同时社区贡献者针对 SSRF 安全漏洞和子代理重复消息 bug 提交了实质性修复代码。整体健康度良好，但积压的 stale PR 较多（5 个），需维护者关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| **#3141** [CLOSED] | Bug Fix | `web_search` 工具在 Brave API 返回空结果时增加诊断日志，解决静默失败问题（对应 Issue #3125） |
| **#3144** [CLOSED] | CI/Deps | `actions/checkout` v6 → v7 升级 |
| **#3146** [CLOSED] | Deps | `golang.org/x/term` v0.43.0 → v0.44.0 |
| **#3147** [CLOSED] | Deps | Azure SDK `azidentity` v1.13.1 → v1.14.0 |
| **#3148** [CLOSED] | Deps | `golang.org/x/sys` v0.45.0 → v0.46.0（新增 GPIO 常量与结构体） |
| **#3149** [CLOSED] | Deps | Anthropic SDK `anthropic-sdk-go` v1.46.0 → v1.50.2 |
| **#3107** [CLOSED] | Deps | GitHub Copilot SDK `go` v0.2.0 → v1.0.1 |

**关键进展：**
- **安全修复待合并**：PR #3143 修复了 `web_fetch` 的 SSRF 防护绕过问题（Issue #3074），通过让共享 IP 分类器识别 ISATAP IPv6 字面量中嵌入的私有/回环 IPv4 地址，覆盖了两种常见 ISATAP IID 形式（`00:00:5e:fe` 和 `02:00:5e:fe`）。此 PR 尚未合并，建议优先审查。
- **子代理重复消息修复待合并**：PR #3142 通过清除 spawn 子轮次 `ToolResult` 中的 `ForUser` 字段来防止异步子代理完成时的重复消息推送，直接对应 Issue #3094。

---

## 4. 社区热点

### Issue #3094 — 异步子代理重复消息 Bug
- **链接**：https://github.com/sipeed/picoclaw/issues/3094
- **状态**：OPEN，标记 stale，2 条评论
- **热度分析**：此 Issue 自 6 月 10 日创建以来持续活跃，用户报告使用 `spawn` 工具派发异步子代理任务时，飞书/Telegram 等通道会收到**两条内容相同的消息**——一条是子代理原始结果的直接推送（无排版），另一条是主代理汇总后的最终输出。这严重影响多通道用户体验。
- **社区诉求**：用户期望子代理完成后仅收到一条经过主代理整理的消息，避免信息冗余。PR #3142 已提交修复方案，社区等待合并。

### Issue #3125 — web_search 工具静默失败
- **链接**：https://github.com/sipeed/picoclaw/issues/3125
- **状态**：CLOSED（6 月 18 日关闭）
- **热度分析**：架构更新将 API 密钥迁移至 `.security.yml` 后，Brave API 的 `web_search` 工具停止工作。LLM 能正确识别工具并格式化 JSON 调用，但后端立即返回 `"No results for: [query]"` 字符串，未实际发起 API 请求。PR #3141 已合并，增加了诊断日志。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| `web_fetch` SSRF 防护绕过（ISATAP IPv6 字面量嵌入私有 IPv4） | #3074 | 有 PR 待合并 | **#3143** [OPEN] |
| 异步子代理 spawn 完成时重复消息推送 | #3094 | 有 PR 待合并 | **#3142** [OPEN] |

### 🟡 中优先级

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| `web_search` 使用 Brave API 密钥时静默失败 | #3125 | ✅ 已关闭 | **#3141** [CLOSED] 已合并 |

**稳定性评估**：两个高优先级 bug 均有对应修复 PR 待合并，建议维护者尽快审查。SSRF 绕过问题涉及安全风险，应优先处理。

---

## 6. 功能请求与路线图信号

今日无新的功能请求 Issue。当前待合并 PR 中的功能信号：

- **安全加固**：PR #3143 的 SSRF 修复表明项目正在加强 `web_fetch` 工具的安全防护，ISATAP 字面量识别能力的加入意味着未来可能进一步扩展 IPv6 过渡机制的防护覆盖。
- **诊断可观测性**：PR #3141 为 `web_search` 增加诊断日志，反映项目在提升工具链可调试性方面的投入。
- **依赖现代化**：今日合并了 Anthropic SDK（v1.46.0 → v1.50.2）和 GitHub Copilot SDK（v0.2.0 → 1.0.1/1.0.2）的重大版本升级，表明项目在积极跟进上游 AI 模型 SDK 生态。

---

## 7. 用户反馈摘要

**痛点：**
- **多通道消息重复**：使用飞书/Telegram 等通道的用户在异步子代理场景下收到重复消息，影响使用体验（Issue #3094）。
- **工具静默失败**：`web_search` 在配置变更后不报错、不提示，直接返回空结果，用户难以排查问题（Issue #3125）。

**使用场景：**
- 用户广泛使用 `spawn` 工具进行异步子代理任务派发，涉及多通道（飞书、Telegram）消息推送。
- 用户依赖 Brave API 进行网络搜索，对 `.security.yml` 密钥迁移后的兼容性敏感。

**满意度趋势：**
- Issue #3125 的快速关闭（创建后 4 天）和 PR #3141 的及时合并表明维护者对工具链 bug 响应较快。
- Issue #3094 已标记 stale，用户可能对修复进度有所期待。

---

## 8. 待处理积压

### ⚠️ 长期未响应的 PR（标记 stale）

| PR | 创建日期 | 内容 | 建议 |
|---|---|---|---|
| **#3105** | 2026-06-11 | `eslint` v10.2.1 → v10.4.1（前端） | 审查合并或关闭 |
| **#3104** | 2026-06-11 | `shadcn` v4.7.0 → v4.11.0（前端） | 审查合并或关闭 |
| **#3103** | 2026-06-11 | `typescript-eslint` v8.59.3 → v8.61.0（前端） | 审查合并或关闭 |
| **#3101** | 2026-06-11 | `vite` v8.0.13 → v8.0.16（前端） | 审查合并或关闭 |
| **#3100** | 2026-06-11 | `@vitejs/plugin-react` v6.0.1 → v6.0.2（前端） | 审查合并或关闭 |

**积压分析**：5 个前端依赖升级 PR 自 6 月 11 日创建以来已超过一周未处理，均被标记为 stale。这些均为低风险依赖升级，建议维护者批量审查合并，减少积压。

### ⚠️ 待合并的高价值 PR

| PR | 创建日期 | 内容 | 建议 |
|---|---|---|---|
| **#3143** | 2026-06-18 | 修复 `web_fetch` SSRF 绕过 | 🔴 优先审查（安全相关） |
| **#3142** | 2026-06-17 | 修复 spawn 重复消息 | 🟡 尽快审查 |
| **#3145** | 2026-06-18 | GitHub Copilot SDK v0.2.0 → v1.0.2 | 🟡 审查（大版本跳跃） |

---

> **维护者行动建议**：
> 1. 🔴 **立即审查** PR #3143（SSRF 安全修复）
> 2. 🟡 **本周内合并** PR #3142（子代理重复消息修复）
> 3. 🟢 **批量处理** 5 个 stale 前端依赖升级 PR
> 4. 📋 **关注** PR #3145 中 Copilot SDK 大版本升级的兼容性影响

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-19

---

## 1. 今日速览

NanoClaw 今日活跃度较高，**24 小时内处理了 21 个 PR（15 个待合并，6 个已合并/关闭）和 5 个 Issue（3 个新开/活跃，2 个已关闭）**。项目连续发布趋势稳定（当前 v2.1.18），但过去 24 小时无新版本。值得关注的是，多个社区贡献者同时提交了与原 PR 重叠的"竞争性修复"，折射出当前合并队列堵塞的问题。安全类议题（文件读取越权、非 owner 子 agent 创建）是今日的绝对焦点。

---

## 2. 版本发布

**无新版本发布。** 当前最新正式版为 v2.1.18。

---

## 3. 项目进展

今日共有 **6 个 PR 已合并/关闭**，涉及修复与重构：

| PR | 作者 | 类型 | 摘要 |
|---|---|---|---|
| [#2793](https://github.com/nanocoai/nanoclaw/pull/2793) | moshe-nanoco | **Feature（Agent-to-Agent）** | 为已连接的 Agent 间消息新增**可选的逐条审批策略**，默认无策略保持现有自由流转，向后兼容。 |
| [#2811](https://github.com/nanocoai/nanoclaw/pull/2811) | amit-shafnir | **Fix（Setup）** | 修复 setup 流程允许通过环境变量选择 Agent provider 的问题。 |
| [#2810](https://github.com/nanocoai/nanoclaw/pull/2810) | Koshkoshinsk | **Refactor（Skills 同步）** | 将 `.agents/skills` 和 `AGENTS.md` 改为指向 `.claude` 的符号链接，消除双写维护负担，方便 Codex 等 agents-convention 工具复用同一套 skill。 |
| [#2803](https://github.com/nanocoai/nanoclaw/pull/2803) | sturdy4days | **Refactor（死代码清理）** | 移除无人调用的 `resolveGroupIpcPath`。v2 架构已移除 IPC，仅剩测试引用此前缀。 |
| [#2806](https://github.com/nanocoai/nanoclaw/pull/2806) | arkjun | **Docs** | 新增韩语 README（`README_ko.md`）并加入语言切换器，社区覆盖进一步完善。 |
| [#28xx（security send_file）](https://github.com/nanocoai/nanoclaw/pull/2817) | mksocial19-code | **Fix（Security）** | `send_file` 路径限制为合法 workspace 路径，防止目录穿越与 symlink 逃逸。 |

**整体向前推进：** Agent-to-Agent 审批策略的合并意味着多 Agent 协作流程将具备细粒度的权限控制能力；安全修复虽处于 PR 阶段但已有多个竞争实现，预计将很快落地。

---

## 4. 社区热点

### 🔥 最活跃 Issues

| Issue | 标题 | 讨论热度 | 核心诉求 |
|---|---|---|---|
| **#957**（已关闭）| [Enhancement] 支持 Podman 作为 Docker 替代 | 👍 7 · 💬 10 | macOS/Linux 用户希望 Podman 支持或文档提及，理由为 Docker 桌面许可证变更。 |

**分析：**
Podman 社区自去年 Docker Desktop 收费政策变化后持续发酵，但目前官方似乎已将其关闭。社区呼声（7 赞，10 条评论）表明实际用户需求真实存在，但优先级标注为 Medium，暂未纳入路线图。

| Issue | 标题 | 讨论热度 | 核心诉求 |
|---|---|---|---|
| **#29**（已关闭）| [Enhancement] 添加 Signal 作为消息通道 | 👍 4 · 💬 7 | 希望增加 `/add-signal` skill，参考 Telegram/Slack/Discord 模式。 |

**分析：** Signal 的安全通信特性与 NanoClaw 的私密助手定位高度契合，但此 Issue 创建于 2月且长期搁置后关闭。可能受限于 Signal 官方 Bot API 生态不成熟。

---

## 5. Bug 与稳定性

按严重程度排列（🔴 高危 → 🟡 低危）：

| 严重级别 | Issue/PR | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **安全** | [#2807](https://github.com/nanocoai/nanoclaw/issues/2807) | **非 Owner 成员可在 owner 初始化的群组中未经审批创建持久子 Agent** | OPEN，今日新报，尚未分配 | —— |
| 🔴 **安全** | [#2818](https://github.com/nanocoai/nanoclaw/pull/2818) / [#2817](https://github.com/nanocoai/nanoclaw/pull/2817) | `send_file` 路径解析可逃逸出 workspace | 待合并 | ✅ 已有 PR（#2818 为更严格版本） |
| 🟠 **功能失效** | [#2784](https://github.com/nanocoai/nanoclaw/issues/2784) | container-runner 仅监听 `index.ts` 变更，`ipc-mcp-stdio.ts` 修改后不会同步 | OPEN | —— |
| 🟠 **功能失效** | [#2804](https://github.com/nanocoai/nanoclaw/pull/2804) / [PR #2804](https://github.com/nanocoai/nanoclaw/pull/2804) | `ncl messaging-groups create` 始终因 `NOT NULL constraint` 崩溃 | OPEN | ✅ 已有修复 PR |
| 🟡 **路由异常** | [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) / [PR #2815](https://github.com/nanocoai/nanoclaw/pull/2815) | `safeParseContent` 对 JSON 原始值无防护，导致 `.text` 等路由字段为 undefined | 待合并 | ✅ 两 PR 竞合 |
| 🟡 **Discord 长文截断** | [#2812](https://github.com/nanocoai/nanoclaw/pull/2812) / [#2816](https://github.com/nanocoai/nanoclaw/pull/2816) | Discord 回复超过 2000 字符时被截断而非分块 | 待合并 | ✅ 两 PR 竞合 |
| 🟢 **CLI 无限阻塞** | [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) / [#2813](https://github.com/nanocoai/nanoclaw/pull/2813) | `ncl socket client` 无请求超时和响应大小限制 | 待合并 | ✅ 两 PR 竞合（#2813 为字节级优化版） |

> **趋势观察：** 今日 PR 中出现大量"替代式"PR（#2815 替代 #2801、#2816 替代 #2812、#2818 替代 #2817、#2813 替代 #2802、#2814 替代 #2800），表明同一 bug 被多人独立发现并修复，这可能反映社区 contributor 之间的沟通协作有待加强，也说明 CI 合并队列堵塞导致修复积压。

---

## 6. 功能请求与路线图信号

| 方向 | 请求 | 状态 | 概率评估 |
|---|---|---|---|
| **容器运行时多样化** | Podman 支持（[#957](https://github.com/nanocoai/nanoclaw/issues/957)） | Issue 已关闭 | ⚠️ 关闭意味着短期内不计划实现 |
| **Apple Container 原生支持** | 新增 `CONTAINER_RUNTIME=container` 适配 macOS Apple Container + 远程 OneCLI 网关（[#2809](https://github.com/nanocoai/nanoclaw/pull/2809)） | PR 待合并 | ✅ 高——PR 详细、带环境开关、默认不变 |
| **Agent-to-Agent 审批** | 逐条消息的审批策略（[#2793](https://github.com/nanocoai/nanoclaw/pull/2793)） | 已合并 | ✅ 已落地 |
| **新消息通道** | Signal（[#29](https://github.com/nanocoai/nanoclaw/issues/29)）、iMessage（[#2792](https://github.com/nanocoai/nanoclaw/pull/2792)） | Issue 关闭 / PR 待合并 | ⚠️ iMessage PR 有进展；Signal 暂搁置 |
| **CLI 仪表盘** | `/add-clidash` CLI 只读仪表盘 skill（[#2795](https://github.com/nanocoai/nanoclaw/pull/2795)） | PR 待合并 | 🔶 中——独立 skill、无源码变更，审核门槛低 |
| **Telegram 多 Bot/Swarm** | v2 迁移后 agent-swarm 状态不明（[#2632](https://github.com/nanocoai/nanoclaw/issues/2632)） | OPEN，只有 2 条评论未确认 | 🔶 需官方明确回应 |

---

## 7. 用户反馈摘要

汇总今日 Issues 评论与 PR 描述中的真实用户声音：

| 维度 | 摘要 |
|---|---|
| **安全顾虑强烈** | 用户主动提交安全咨询（#2807），说明早期 adopter 已将 NanoClaw 用于生产/半生产环境，对权限隔离期望高。 |
| **macOS 生态适配诉求** | Podman、Apple Container 两个 macOS 用户高频使用场景均有活跃贡献，反映 NanoClaw 的核心用户群中有相当比例 Mac 开发者。 |
| **多 Agent 协作需求明确** | Agent-to-Agent 审批策略 PR 的合并满足了"自由协作→受控协作"的演进路线；Telegram swarm 迁移困惑说明多 Bot 部署在社区中已有一定存量用户。 |
| **文档与开发者体验痛点** | `ncl messaging-groups create` 一旦迁移后完全不可用（#2804），说明 CLI schema 迁移的文档和兼容性测试存在盲区。韩语 README 的持续添加（#2806）说明国际化需求真实存在。 |
| **对信号通道的需求** | Signal 虽 Issue 被关闭，但具体原因不明，用户（尤其注重隐私的群体）的需求悬而未决。 |

---

## 8. 待处理积压

以下 Issue 或 PR 长期未响应或处于不确定状态，建议维护者优先关注：

| 项目 | 链接 | 等待时长 | 重要性 | 建议行动 |
|---|---|---|---|---|
| Telegram swarm v2 迁移状态确认 | [#2632](https://github.com/nanocoai/nanoclaw/issues/2632) | 自 5/28 起无 official reply | 🔴 高（存量迁移阻塞） | 官方回复明确 v2 替代方案或回滚计划 |
| container-runner 文件监听遗漏 bug | [#2784](https://github.com/nanocoai/nanoclaw/issues/2784) | 3 天，已有 workaround | 🟠 中 | 合并对应修复 PR 或自行 pick |
| PR 合并队列堵塞 | 多条待合并（15 个 Open PR，多个互相替代） | 持续 | 🔴 高 | 明确替代 PR 的优先级，关闭重复 PR，加速 CI 流程 |
| Korean / i18n 文档持续扩展 | [#2806](https://github.com/nanocoai/nanoclaw/pull/2806) ✅ | — | 🟢 低 | 已有贡献者自发维护，无需干预 |
| 安全类 Issue 响应时效 | [#2807](https://github.com/nanocoai/nanoclaw/issues/2807) | 今日新报 | 🔴 紧急 | 安全类 Issue 应在 24h 内完成初步评估与 severity 标记 |

---

> **项目健康度总评：** 🟡 **中等偏积极**。社区贡献活跃（21 PR/24h），安全修复响应迅速，但合并队列积压严重且出现"重复修复"内耗。建议维护者优化 PR Review SLA 并建立安全 Issue 快速响应机制。Agent-to-Agent 审批功能的落地标志着多 Agent 协作进入精细化管控阶段，值得在下一版本发布公告中重点突出。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-19

## 1. 今日速览

NullClaw 今日活跃度处于中高等水平，共产生 4 条 Issue 更新与 5 条新 PR，无新版本发布。项目核心开发集中在 **流式工具调用（streaming tool-call）** 和 **记忆系统可配置化** 两个方向，同时社区文档贡献活跃（微信登录、Anthropic Provider）。整体健康度良好，维护者响应及时，多个 PR 在创建当天即进入 Review 状态。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭，但 5 条待合并 PR 均于 2026-06-18 创建，方向明确：

| PR | 方向 | 说明 |
|---|---|---|
| **#964** — 启用流式原生工具调用 | 核心修复 | 修复 `agent/root.zig` 在流式请求中错误地将 `tools` 置为 `null` 的 bug，使 OpenAI 兼容 Provider 在流式场景下也能使用 API 级工具调用 |
| **#965** — SSE 解析器结构化流式工具调用支持 | 核心增强 | 作为 #964 的配套 PR，在 SSE 解析层处理模型在 `delta.content` 中输出的 XML 工具调用，完善流式工具链 |
| **#961** — 记忆系统可配置化 | 功能新增 | 新增 `auto_recall`、`recall_limit`、`max_context_bytes` 三个配置项，允许用户精细控制记忆召回行为 |
| **#963** — 微信个人号扫码登录文档 | 文档 | 补充微信个人号（QR Code Login）频道配置文档，中英双语，关闭 Issue #817 |
| **#962** — Anthropic 原生 Provider 文档 | 文档 | 补充 Anthropic API Key 直连与 OAuth/Pro-Plan Token 自动检测的配置文档，关闭 Issue #767 |

**关键信号：** #964 + #965 是一对关联 PR，解决了流式模式下工具调用的核心阻塞问题，合并后将显著提升 Agent 在流式场景下的工具使用可靠性。

---

## 4. 社区热点

### Issue #50 — ESP32 移植可行性讨论
- **链接：** https://github.com/nullclaw/nullclaw/issues/50
- **状态：** OPEN，4 条评论，创建于 2026-02-21
- **分析：** 用户询问 NullClaw 是否可以在 ESP32 微控制器上运行。这反映了社区对 **边缘计算 / IoT 场景** 的兴趣。考虑到 NullClaw 使用 Zig 编写，其交叉编译能力理论上支持嵌入式目标，但内存和运行时约束是主要障碍。该 Issue 已持续近 4 个月，建议维护者给出官方立场（supported / not-planned / help-wanted）。

### Issue #817 — 微信扫码登录支持
- **链接：** https://github.com/nullclaw/nullclaw/issues/817
- **状态：** OPEN，2 条评论，创建于 2026-04-14
- **分析：** 用户明确询问是否支持微信个人号扫码登录。PR #963 已通过文档补充回应此 Issue 并标记 Closes，说明该功能已存在但文档缺失。**一旦 #963 合并，#817 将自动关闭。**

### Issue #190 — Subagent 跨 Provider 通信
- **链接：** https://github.com/nullclaw/nullclaw/issues/190
- **状态：** OPEN，2 条评论，创建于 2026-03-01
- **分析：** 用户询问是否支持子代理（subagent）之间的跨 Provider 通信。这涉及 Agent 编排架构，是高级多 Agent 场景的核心需求。已持续 3.5 个月，属于长期功能请求。

### Issue #913 — A2A 协议性能基准
- **链接：** https://github.com/nullclaw/nullclaw/issues/913
- **状态：** OPEN，1 条评论，创建于 2026-05-12
- **分析：** 用户发现 A2A 协议实现比原始 NullClaw 消息/响应更慢，请求基准测试数据。这反映了 **性能回归** 的关注，A2A 作为较新的协议适配层，可能需要性能优化。

---

## 5. Bug 与稳定性

| 严重度 | 描述 | 状态 | 关联 PR |
|---|---|---|---|
| 🔴 高 | 流式模式下原生工具调用被禁用（`agent/root.zig` 将 `tools` 置 `null`） | **已有 fix PR** | **#964**（待合并） |
| 🟡 中 | A2A 协议实现性能低于原始消息通道 | 调查中 | Issue #913，无 fix PR |
| 🟢 低 | ESP32 嵌入式运行可行性未明确 | 未响应 | Issue #50，无 fix PR |

**评估：** 唯一的严重 Bug（流式工具调用）已有明确修复方案且 PR 已就绪，预计短期内可合并。A2A 性能问题需进一步基准测试定位瓶颈。

---

## 6. 功能请求与路线图信号

| 功能 | 来源 | 信号强度 | 判断 |
|---|---|---|---|
| 流式原生工具调用 | PR #964 + #965 | 🟢 强 | **即将合并**，已有关联 PR 对 |
| 记忆系统可配置化 | PR #961 | 🟢 强 | **即将合并**，PR 已提交 |
| 微信个人号扫码登录 | Issue #817 → PR #963 | 🟢 强 | **即将合并**，文档 PR 已就绪 |
| Anthropic 原生 Provider | Issue #767 → PR #962 | 🟢 强 | **即将合并**，文档 PR 已就绪 |
| Subagent 跨 Provider 通信 | Issue #190 | 🟡 中 | 长期需求，暂无 PR，可能纳入 v0.x 中期规划 |
| A2A 性能优化 | Issue #913 | 🟡 中 | 需基准数据，可能引发后续优化 PR |
| ESP32 / 嵌入式支持 | Issue #50 | 🟢 弱 | 社区兴趣但无官方路线图确认 |

---

## 7. 用户反馈摘要

- **微信生态需求强烈：** 用户明确需要个人号扫码登录（非公众号），说明 NullClaw 在中文社区有实际部署需求，微信集成是核心使用场景。
- **嵌入式/IoT 探索：** ESP32 提问反映技术社区对轻量化 AI Agent 运行时的期待，用户群体可能超出传统 Server 场景。
- **A2A 协议性能顾虑：** 用户已实际使用 A2A 协议并与原生通道做对比，表明有生产级使用，性能回归可能影响其部署决策。
- **文档缺口：** 微信登录和 Anthropic Provider 功能已存在但文档缺失，导致用户反复提 Issue。近期文档 PR 集中补充，说明维护者已意识到此问题。

---

## 8. 待处理积压

| Issue/PR | 等待时长 | 建议操作 |
|---|---|---|
| **Issue #50** — ESP32 支持 | ~4 个月 | 维护者给出官方立场（是否支持 / 欢迎社区 PR），避免长期悬挂 |
| **Issue #190** — Subagent 跨 Provider | ~3.5 个月 | 评估架构可行性，标记为 `enhancement` 或加入路线图 |
| **Issue #913** — A2A 性能基准 | ~1.5 个月 | 请求用户提供具体场景数据，或维护者发布官方 benchmark |
| **PR #964 / #965** — 流式工具调用修复 | 1 天 | ⚡ **优先 Review & 合并**，这是阻塞性 Bug 修复 |
| **PR #961** — 记忆系统配置化 | 1 天 | 正常 Review 节奏，建议合并前确认默认值向后兼容 |

---

**总结：** NullClaw 项目今日处于 **功能迭代加速期**，核心流式工具调用修复（#964 + #965）和记忆系统增强（#961）是近期最值得关注的合并候选。文档贡献活跃，社区对微信生态和嵌入式场景的关注度持续上升。建议优先推进核心 Bug 修复 PR 的 Review 与合并，同时积压 Issue 的响应效率是维持社区健康度的关键。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 · 2026-06-19

> OWL 自动抓取 nearai/ironclaw 仓库 2026-06-18 全天活动，生成以下摘要。

---

## 1. 今日速览

过去 24 小时 IronClaw 开发节奏极快：**43 条 PR 更新（26 条仍在开放）、32 条 Issue 更新（18 条仍在开放）**，没有新版本发布。今日没有 RC/正式版 tag，但多条 XL 级 PR 进入核心功能线（Projects、自动批准、Slack 通用入口、并发回合执行），表明团队正在为 Reborn 大版本做密集冲刺。整体活跃度 **高**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 说明 |
|---|---|---|
| **#5067** [🔗](https://github.com/nearai/ironclaw/pull/5067) | fix | 当 OAuth 凭证需求没有授权 URL 时，保持 OAuth 卡片可见，不再退回通用认证提示 — 对应 Issue #5066，已实现修复 |
| **#5065** [🔗](https://github.com/nearai/ironclaw/pull/5065) | feat | 一次性调度触发器（fire-once triggers）：`trigger_create` 现在要求显式指定 `completion_policy`（recurring / complete_after_first_fire），不再静默默认为 recurring |
| **#5055** [🔗](https://github.com/nearai/ironclaw/pull/5055) | fix | WebUI 自动化运行错误前端呈现优化：error 状态改为黄色"Needs attention"而非红色终端错误，修复"No runsNo runs"重复文本 |
| **#5018** [🔗](https://github.com/nearai/ironclaw/pull/5018) | feat | Projects 系列栈 4/5：WebChat v2 项目相关 HTTP 路由（列表/创建/获取/更新/删除项目 + 成员管理共 9 个路由） |
| **#5079** [🔗](https://github.com/nearai/ironclaw/pull/5065)–#5079 | fix | 新贡献者空内容 PR，已自行关闭，无影响 |

**正在推进的关键功能（OPEN PR）：**

| PR | 功能 |
|---|---|
| **#5019** [🔗](https://github.com/nearai/ironclaw/pull/5019) | Projects 栈 5/5：WebChat v2 前端 Projects 页面 CRUD 联调 |
| **#5063** [🔗](https://github.com/nearai/ironclaw/pull/5063) | 逐轮自动批准决议 DB 存储 + 永不自动批准硬底线 |
| **#5085** [🔗](https://github.com/nearai/ironclaw/pull/5085) | 通过 TurnRunScheduler + 每用户/每类型上限实现并发回合执行 |
| **#5082** [🔗](https://github.com/nearai/ironclaw/pull/5082) | 截断审批命令预览，添加"查看完整命令"展开开关，对应 Issue #5078 |
| **#5072** [🔗](https://github.com/nearai/ironclaw/pull/5072) | Slack 通用主机入口（host-owned ingress）+ E2E 等价性证明 |
| **#5081** [🔗](https://github.com/nearai/ironclaw/pull/5081) | 新增托管单租户 PostgreSQL 配置 profile |
| **#5086** [🔗](https://github.com/nearai/ironclaw/pull/5086) | CI 实验性全量门控 spike（nextest archive + mold + sccache + sharding），非阻塞测量用 |

---

## 4. 社区热点

| Issue / PR | 评论数 | 焦点 |
|---|---|---|
| **#4761** [🔗](https://github.com/nearai/ironclaw/issues/4761) | 5 评论 | Agent 在工具反复失败后停止而非恢复 — Reborn 容错路径核心 bug，讨论最活跃 |
| **#4907** [🔗](https://github.com/nearai/ironclaw/issues/4907) | 3 评论 | Google OAuth 成功后 run 失败而非恢复 — 与认证恢复路径相关 |
| **#4942** [🔗](https://github.com/nearai/ironclaw/issues/4942) | 3 评论 | 工具调用失败在重取/重载前不显示 — SSE 实时推送缺失 |
| **#1520** [🔗](https://github.com/nearai/ironclaw/issues/1520) | 3 评论 | Qwen 3.5-plus 405 错误（Coding Plan 限流）— 跨仓库模型提供方兼容 |

**分析：** Reborn 的认证恢复和 SSE 稳定性是今日最集中的痛点。用户反复遭遇工具失败后 Agent 停滞、OAuth 完成后 run 并没有恢复，反映出 Reborn 运行时在"半成功"状态下的状态机还有明显缺口。

---

## 5. Bug 与稳定性

### 严重（功能阻断 / 高丢失数据风险）

| Issue | 严重程度 | 状态 | Fix PR |
|---|---|---|---|
| **#4761** [🔗](https://github.com/nearai/ironclaw/issues/4761) Agent 工具反复失败后停止 | 🔴 高 | CLOSED（今日关闭） | 未确认已合并修复 |
| **#4992** [🔗](https://github.com/nearai/ironclaw/issues/4992) 本地开发 SSO 不匹配导致 Railway 自动化失败 | 🔴 高 | OPEN | 无 |
| **#4907** [🔗](https://github.com/nearai/ironclaw/issues/4907) Google OAuth 成功后 run 失败 | 🟠 高 | CLOSED（今日关闭） | 未确认合并 |
| **#5060** [🔗](https://github.com/nearai/ironclaw/issues/5060) GitHub 分析工作流审批循环永不产出结果 | 🟠 高 | CLOSED（今日关闭） | 无 |
| **#5071** [🔗](https://github.com/nearai/ironclaw/issues/5071) 高：Google OAuth token 到期前应主动刷新 | 🟠 高 | OPEN | 无 |
| **#4108** [🔗](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 持续失败 | 🔴 高 | OPEN | 无（老 issue，始于 5/27） |

### 中等 / UI

| Issue | 状态 | Fix PR |
|---|---|---|
| **#5078** [🔗](https://github.com/nearai/ironclaw/issues/5078) 审批模态框大命令难审阅 | OPEN | **#5082**（已有） |
| **#5007** [🔗](httpshttps://github.com/nearai/ironclaw/issues/5007) Skills 验证错误填写后不清除 | CLOSED | 未确认 |
| **#4942** [🔗](https://github.com/nearai/ironclaw/issues/4942) 工具调用失败不实时显示 | CLOSED | 无 |
| **#5077** [🔗](https://github.com/nearai/ironclaw/issues/5077) 无效 chat URL 应重定向到新聊天 | OPEN | 无 |
| **#5076** [🔗](https://github.com/nearai/ironclaw/issues/5076) 非聊天页面侧边栏仍显示聊天高亮 | OPEN | 无 |
| **#4502** [🔗](https://github.com/nearai/ironclaw/issues/4502) WeCom 群聊审批回复不工作 | OPEN | 无 |
| **#4500** [🔗](https://github.com/nearai/ironclaw/issues/4500) Channel onboarding 系统事件写错 conversation | OPEN | 无 |
| **#5070** [🔗](https://github.com/nearai/ironclaw/issues/5070) Auth gate cancel 后重放 OAuth 提示 | CLOSED | 未确认 |

**回归预警：** #4108 Nightly E2E 自 5 月 27 日以来持续失败，值得维护者重点关注。

---

## 6. 功能请求与路线图信号

| Issue / PR | 方向 | 信号强度 | 判断 |
|---|---|---|---|
| **#5084** [🔗](https://github.com/nearai/ironclaw/pull/5084) Automations 页面重设计 | UX 重设计 | 强 | 直接落地 PR，前端重布局已进入开发 |
| **#5069** [🔗](https://github.com/nearai/ironclaw/issues/5069) Automation UX Redesign（需求） | UX 方向确认 | 中 | 与 PR #5084 呼应，有人正在执行 |
| **#5071** [🔗](https://github.com/nearai/ironclaw/issues/5071) Google OAuth 主动刷新 | 认证体验 | 强 | 与本周多条 OAuth/PR 修复并行，优先级提升 |
| **#5081** [🔗](https://github.com/nearai/ironclaw/pull/5081) Hosted single-tenant Postgres profile | 托管部署路径 | 强 | 项目向正式托管服务迈进的关键基础设施 |
| **#5085** [🔗](https://github.com/nearai/ironclaw/pull/5085) 并发回合执行 | 性能/并发 | 强 | 解除串行瓶颈，Reborn 性能里程碑 |
| **#5072** [🔗](https://github.com/nearai/ironclaw/pull/5072) Slack 通用入口 | 渠道集成 | 强 | 将 Slack 从特殊路径迁移至统一 host ingress |
| **#3840** [🔗](https://github.com/nearai/ironclaw/issues/3840) 改善 WebUI 频道徽章 | UI 细节 | 中 | 非核心，待排期 |
| **#4505** [🔗](https://github.com/nearai/ironclaw/issues/4505) WeCom 群聊标题不可区分的侧边栏 | UX 细节 | 中 | 用户长期使用痛点 |

---

## 7. 用户反馈摘要

**痛点（来自 Issue 正文与复现步骤）**

1. **"工具失败后 Agent 死了"**

   > #4761："运行完成了，但是 work...（截图显示 agent 中途退出而非恢复）"
   >
   > #5060："analyze trackers... enters repeated approval loops and never produce results" — 用户期望的是有效输出，而非无限审批循环。

2. **OAuth 中断让工作白费**

   > #4907："Google Calendar authentication 完成后，run fails instead of resuming" — 用户不想在认证成功后重跑整个 prompt。
   >
   > #5070："cancel auth prompt leaves activity running or replays OAuth" — 取消操作后 UI 状态混乱。

3. **UI 反馈不明确/不可见**

   > #4942："Tool calls failed won't appear until re-fetch/reload" — 实时性缺失。
   >
   > #4823："deleting a running conversation fails, but UI shows nothing" — 静默失败。
   >
   > #5078："Approval modal dominated by huge commands" — 信息过载。

4. **WeCom 渠道集成远未完成**

   > #4502 和 #4500：多个用户反映 WeCom 群聊审批回复失效、onboarding 事件写错 conversation。这一渠道体验显著落后于 Telegram/Slack。

**满意/肯定信号**

多个狗食（dogfooding）报告 (#4810, #4879) 按模块逐项列出测试发现，说明有内部团队在日常使用并系统反馈，对 QA 流程本身是一种正面信号。

---

## 8. 待处理积压

以下 Issue / PR 长期未响应或缺乏进展，建议维护者优先关注：

| GitHub 编号 | 类型 | 创建/最后更新 | 备注 |
|---|---|---|---|
| **#4108** [🔗](https://github.com/nearai/ironclaw/issues/4108) | issue | 创建于 2026-05-27，今日仍有活动 | Nightly E2E 持续失败 >3 周，基础设施阻塞 |
| **#1520** [🔗](https://github.com/nearai/ironclaw/issues/1520) | issue | 创建于 2026-03-21，今日更新 | Qwen 模型 405 兼容问题仍开放，影响阿里云用户 |
| **#4992** [🔗](https://github.com/nearai/ironclaw/issues/4992) | issue | 创建于 2026-06-16，今日更新 | Railway local-dev SSO 不匹配，标签含 medium risk |
| **#5071** [🔗](https://github.com/nearai/ironclaw/issues/5071) | issue | 今日创建，高优先级 | Google OAuth 刷新，无 fix PR |
| **#4500** [🔗](https://github.com/nearai/ironclaw/issues/4500) | issue | 创建于 2026-06-05，今日更新 | Channel onboarding 写错 conversation，影响 WeCom + Telegram |
| **#4502** [🔗](https://github.com/nearai/ironclaw/issues/4502) | issue | 创建于 2026-06-05，今日更新 | WeCom 群聊审批回复不工作 |
| **#5030** [🔗](https://github.com/nearai/ironclaw/pull/5030) | PR | 创建于 2026-06-17，今日更新 | 生产 trigger poller 接线，XL 风险中等 |
| **#5085** [🔗](https://github.com/nearai/ironclaw/pull/5085) | PR | 今日创建 | 并发回合执行，核心架构变更，待 review |

---

*本日报由 OWL 自动生成，数据截至 2026-06-19 00:00 UTC。如需订阅每日推送，请联系项目维护者。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-06-19

---

## 1. 今日速览

过去24小时内，LobsterAI 开发活动高度密集：**15 条 PR 更新（14 条已合并/关闭）、2 条 Issue 新开、无新版本发布**。核心工作集中在两大方向：语音输入（ASR）模块完成了从"一次性录入"到"实时流式识别全线切换"的重大重构，以及 Artifact 面板新增了 Markdown / Mermaid 文件分享能力。Computer Use（电脑操控）MVP 套件也已在本轮合入主线。此外，一个高危安全 Issue 于昨日被披露，需重点关注。整体来看，项目处于快速迭代期，开发节奏健康，但安全债务和 UI 体验问题开始积累。

---

## 2. 版本发布

**无新版本 Release。**

最近一次 Release 动作可追溯到 PR #2179（`chore(release): merge release/2026.6.11 into main`），于今日合并。当前主干已包含截至 2026.6.11 的所有功能，正式版本号标签尚未标记。

---

## 3. 项目进展

今日合并/关闭的 14 条 PR 可归纳为以下五大推进方向：

| 方向 | PR | 关键内容 |
|---|---|---|
| **Release 合并** | [#2107](https://github.com/netease-youdao/LobsterAI/pull/2107)、[#2119](https://github.com/netease-youdao/LobsterAI/pull/2119)、[#2179](https://github.com/netease-youdao/LobsterAI/pull/2119) | 将 release/2026.6.2、release/2026.6.4、release/2026.6.11 依次合并到主干，完成多轮功能发布的主干同步 |
| **语音输入重构** | [#2111](https://github.com/netease-youdao/LobsterAI/pull/2111)、[#2113](https://github.com/netease-youdao/LobsterAI/pull/2113)、[#2148](https://github.com/netease-youdao/LobsterAI/pull/2148)、[#2155](https://github.com/netease-youdao/LobsterAI/pull/2155)、[#2160](https://github.com/netease-youdao/LobsterAI/pull/2160)、[#2163](https://github.com/netease-youdao/LobsterAI/pull/2163)、[#2177](https://github.com/netease-youdao/LobsterAI/pull/2177) | 语音输入完成了一次完整架构升级：(1) 将 ASR IPC 注册拆分至 `ipcHandlers/asr`，解耦录音、WAV 编码、ASR 客户端逻辑；(2) 修复 macOS 麦克风权限元数据与授权策略；(3) 新增实时 ASR 模式（WebSocket 流式 PCM 传输）；(4) 移除旧的短片段上传 ASR 流，使 Cowork 语音输入全面切换为实时模式并删除设置页的模式切换开关；(5) 增加 ASR 每日配额内存缓存；(6) 将中文文案从"听写"统一更名为"语音输入" |
| **Computer Use MVP** | [#2143](https://github.com/netease-youdao/LobsterAI/pull/2143)、[#2156](https://github.com/netease-youdao/LobsterAI/pull/2156) | 合入 Windows x64 内置 Computer Use 套件，含市场元数据、完整性校验、安装/卸载生命周期、内置 MCP 桥接；运行时升级至 1.0.7，新增 UIA breadcrumbs 诊断信息 |
| **Artifact 面板** | [#2178](https://github.com/netease-youdao/LobsterAI/pull/2178) | 新增 `markdown_file` 与 `mermaid_file` 分享来源，支持 Markdown 资源打包（入口文件、本地图片、Mermaid 单文件 zip）并接入 Artifact 面板分享入口 |
| **UI 体验修复** | [#2150](https://github.com/netease-youdao/LobsterAI/pull/2150) | 修复 Expert Suite 页面在 Skills/MCP 市场切换时标题栏不固定的问题，对齐搜索栏 sticky 布局 |

**整体进度评估**：语音输入架构在本周完成了一次从"能用"到"好用"的冲刺，实时流式和权限问题集中解决；Computer Use 首版能力落地主线；Artifact 预览和分享能力在大文件类型上持续扩展。项目在 2026.6.18 这天实质上已积累了一个小版本的完整变更集。

---

## 4. 社区热点

### 🔴 高危安全 Issue — 任意本地文件读取

- **Issue [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)** — *LobsterAI automatic artifact loading allows message-derived arbitrary local file reads*
  - 作者：YLChen-007 | 创建：2026-06-18 | 评论：1
  - **核心诉求**：LobsterAI 会自动解析 assistant/tool 输出中的 `MEDIA:` 文件引用，并将解析后的文件路径传入特权 Electron 上下文。攻击者可通过构造恶意消息内容，诱导应用读取任意本地文件。这是一个典型的 **路径遍历 + 权限提升** 组合漏洞。
  - **严重程度**：🔴 高危。涉及本地文件系统越权读取，且触发路径来自不可信的消息内容。
  - **当前状态**：尚无修复 PR 关联，Issue 刚创建，需维护者尽快响应。

### 🟡 UI 展示问题 — MCP 自定义页面删除弹框

- **Issue [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422)** — *MCP-自定义页面，对应的服务名称较长时，删除弹框那展示不友好*
  - 作者：xuzx-code | 创建：2026-04-03 | 更新：2026-06-18 | 评论：1
  - **核心诉求**：MCP 自定义页面中，当服务名称较长时，删除确认弹窗的文本排版出现溢出或截断，影响用户确认操作。
  - **严重程度**：🟡 低-中。纯 UI 体验问题，不影响功能，但已标记 stale，说明长期未处理。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | 状态 |
|---|---|---|---|
| 🔴 高危 | 自动 artifact 加载允许消息派生的任意本地文件读取 | [Issue #2176](https://github.com/netease-youdao/LobsterAI/issues/2176) | **无 fix PR**，需紧急处理 |
| 🟡 中 | 实时 ASR 启动竞态导致重复请求 | [PR #2155](https://github.com/netease-youdao/LobsterAI/pull/2155) | ✅ 已修复并合并 |
| 🟡 中 | macOS 麦克风权限未正确请求 | [PR #2113](https://github.com/netease-youdao/LobsterAI/pull/2113) | ✅ 已修复并合并 |
| 🟢 低 | MCP 自定义页面删除弹框长名称展示不友好 | [Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) | ⚠️ 已 stale，无修复 |
| 🟢 低 | Expert Suite 页面标题栏不固定 | [PR #2150](https://github.com/netease-youdao/LobsterAI/pull/2150) | ✅ 已修复并合并 |

**稳定性评估**：本轮迭代中，语音输入相关的竞态和权限问题均已闭环修复，Computer Use 运行时也做了诊断增强。唯一需要警惕的是新披露的安全漏洞，建议优先排期。

---

## 6. 功能请求与路线图信号

从近期 PR 和 Issue 中可观察到以下路线图信号：

1. **语音输入持续深化** — 实时 ASR 已上线，下一步方向可能包括：多语言识别支持、离线 ASR 模式、更细粒度的配额管理（当前仅内存级日配额）。PR #2163 中提到的 ASR quota slice 是这一方向的早期铺垫。

2. **Computer Use 能力扩展** — MVP 已落地 Windows x64，后续可能扩展到 macOS/Linux、增加更多操作原语（键盘输入、拖拽等）。运行时版本号（1.0.7）表明仍在快速迭代。

3. **Artifact 生态丰富** — 本轮新增 Markdown/Mermaid 分享，结合此前已支持的 DOCX/PPPTX/XLSX/PDF/CSV/TSV，Artifact 正向"全能文件工作台"演进。用户可能期待更多格式（如图片批注、代码高亮预览）和协作能力。

4. **Electron 版本升级** — Dependabot PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 尝试将 Electron 从 40.2.1 升级至 42.4.0，目前仍处于 OPEN 状态。Electron 大版本升级通常伴随安全修复和性能改进，但需要充分回归测试。

---

## 7. 用户反馈摘要

- **安全研究者关注**：Issue #2176 由安全研究员提交，说明 LobsterAI 已进入安全社区视野。自动 artifact 加载机制的设计初衷是提升用户体验（自动预览文件），但缺乏对消息来源的信任边界校验，是典型的"便利性 vs 安全性"权衡失衡。

- **中文用户 UI 细节敏感**：Issue #1422 和 PR #2177（"听写"→"语音输入"更名）均表明中文用户对文案和排版细节有较高期待。MCP 服务名称过长导致弹框排版问题虽小，但 stale 标签说明维护者响应速度有待提升。

- **语音输入体验持续优化**：从一次性录入到实时流式、从权限缺失到完整授权链、从"听写"到"语音输入"的文案统一，用户侧的语音交互体验在本轮迭代中得到了系统性提升。

---

## 8. 待处理积压

| 项目 | 链接 | 等待时长 | 建议优先级 |
|---|---|---|---|
| **安全漏洞：任意文件读取** | [Issue #2176](https://github.com/netease-youdao/LobsterAI/issues/2176) | 1 天 | 🔴 紧急 — 需立即评估影响范围并发布修复 |
| **MCP 弹框 UI 展示问题** | [Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) | 76 天 | 🟡 建议处理 — 已 stale，影响 MCP 用户体验 |
| **Electron 版本升级** | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 78 天 | 🟡 建议处理 — Electron 40→42 跨度较大，需回归测试 |

---

> **日报总结**：LobsterAI 在 2026-06-18 经历了一个高产出日，语音输入架构重构和 Computer Use MVP 落地是最大亮点。但新披露的高危安全漏洞需要维护者立即关注——在追求功能快速迭代的同时，安全审计机制应同步跟进。建议尽快为 Issue #2176 创建修复 PR，并在下一个 Release 中包含安全补丁。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报 — 2026-06-19

**项目：TinyClaw** | 仓库：github.com/TinyAGI/tinyagi

---

## 1. 今日速览

TinyClaw 在过去 24 小时内无新版本发布、无 PR 合并或提交，项目代码层面处于静默期。然而，安全层面出现集中预警——同一研究者连续提交 3 个未认证访问相关的高危安全 Issue，涉及未授权 API 调用、任意本地文件泄露、以及主机文件外发。社区讨论尚未启动（0 评论），但安全债务已快速累积，需维护者尽快响应。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

过去 24 小时内无 PR 提交、合并或关闭，项目功能开发及代码合并处于停滞状态。当前项目推进信号全部来自安全侧的问题报告，无正向功能迭代。

---

## 4. 社区热点

今日全部 3 条 Issue 均由用户 **YLChen-007** 在 2026-06-18 集中提交，均属安全通告类 Issue，目前评论数为 0，尚未引发社区讨论。

| # | Issue | 核心风险 |
|---|-------|----------|
| [#284](https://github.com/TinyAGI/tinyagi/issues/284) | 未认证 API 消息可绕过 provider 权限检查调用 Claude | 未授权 API 访问 / 权限绕过 |
| [#283](https://github.com/TinyAGI/tinyagi/issues/283) | 未认证的 `prompt_file` 配置可导致任意本地文件泄露给模型提供商 | 任意文件读取 / 数据泄露 |
| [#282](https://github.com/TinyAGI/tinyagi/issues/282) | 不可信的 `[send_file: ...]` 响应标签可触发任意主机文件外发 | 主机文件泄露 / 数据外泄 |

**分析：** 三条 Issue 构成一条完整的攻击链——从绕过认证调用模型（#284），到读取本地敏感文件（#283），再到将文件内容向外发送（#282）。研究者似乎在系统性审计 TinyClJaw 的认证与文件处理边界，反映出项目在安全设计层面存在体系性缺口。

---

## 5. Bug 与稳定性

今日无普通 Bug 或崩溃报告。上述 3 条安全 Issue 按严重程度排列如下：

| 严重程度 | Issue | 类型 | 已有 fix PR |
|----------|-------|------|-------------|
| 🔴 高危 | [#284](https://github.com/TinyAGI/tinyagi/issues/284) — 未认证 API 调用绕过权限检查 | 认证/授权绕过 | ❌ 无 |
| 🔴 高危 | [#283](https://github.com/TinyAGI/tinyagi/issues/283) — 任意本地文件泄露 | 任意文件读取 | ❌ 无 |
| 🔴 高危 | [#282](https://github.com/TinyAGI/tinyagi/issues/282) — 任意主机文件外发 | 数据外泄 | ❌ 无 |

**评估：** 三条均为高危安全漏洞，且目前均无修复 PR。若攻击者在公开 Issue 之前未获得 CVE 编号，建议维护者尽快联系报告者协调披露时间线。

---

## 6. 功能请求与路线图信号

今日无功能请求类 Issue，无活跃 PR 提供路线图信号。当前项目路线图方向无法从今日数据判断。

---

## 7. 用户反馈摘要

- **安全研究者视角（YLChen-007）：** 以系统性审计方式提交安全通告，Issue 格式规范（包含标题、摘要、描述），表明研究者具备专业安全背景，且对 TinyClaw 架构有一定深度了解。目前尚无法判断其满意或不满意，但连续提交 3 条说明项目安全现状与其预期存在较大差距。
- **普通用户视角：** 今日无普通用户反馈。

---

## 8. 待处理积压

今日新增的 3 条安全 Issue 是当前最高优先级积压项：

| Issue | 状态 | 建议 |
|-------|------|------|
| [#284](https://github.com/TinyAGI/tinyagi/issues/284) — 未认证 API 权限绕过 | 🟡 OPEN / 无响应 | 建议 24h 内确认并开始修复 |
| [#283](https://github.com/TinyAGI/tinyagi/issues/283) — 任意文件读取 | 🟡 OPEN / 无响应 | 建议 24h 内确认并开始修复 |
| [#282](https://github.com/TinyAGI/tinyagi/issues/282) — 任意文件外发 | 🟡 OPEN / 无响应 | 建议 24h 内确认并开始修复 |

**维护者关注提醒：** 三条 Issue 均涉及未认证入口点的安全缺陷，且攻击链完整（读取 → 外发）。建议在修复前临时关闭相关 API 入口的公开暴露，或启用认证中间件。同时建议建立安全响应流程（SECURITY.md），以便未来安全类 Issue 能得到更快速的闭环处理。

---

*日报由 OWL 基于 2026-06-19 的 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-19

---

## 1. 今日速览

过去 24 小时内，Moltis 项目整体处于**低活跃期**：共收到 1 条新 Issue，无 PR 更新，也无新版本发布。社区仍在使用并关注项目，但当前处于日常维护间歇状态。

| 指标 | 数值 |
|---|---|
| Issues 更新 | 1 |
| PR 更新 | 0 |
| 新版本 | 0 |
| 活跃度评级 | ⚪ 低 |

---

## 2. 版本发布

> 过去 24 小时内无新版本发布，本节省略。

---

## 3. 项目进展

> 无 PR 合并或关闭。项目在代码层面今日无可见推进。

---

## 4. 社区热点

今日仅 1 条新 Issue，无显著社区讨论热点。

- **#1132 — "main" session can't be deleted/archived**
  - 状态：🟢 OPEN | 标签：bug | 作者：vvuk
  - 评论：0 | 反应：👍
  - 链接：[moltis-org/moltis#1132](https://github.com/moltis-org/moltis/issues/1132)
  - 分析：用户报告核心的 "main" 会话无法删除或归档，属于会话管理流程阻断问题。目前尚无社区回复，关注度待观察。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🟡 中 | [#1132](https://github.com/moltis-org/moltis/issues/1132) | "main" session 无法删除/归档 | ❌ 暂无 |

- 该 Bug 涉及会话生命周期管理的基础功能，可能影响多会话工作流的用户体验，建议优先排期。

---

## 6. 功能请求与路线图信号

> 今日无新的功能请求 Issue。

- 当前可见的会话管理类 Bug 暗示用户正在深度使用多会话工作流，后续可关注是否有与会话归档、会话切换、会话清理相关的新 Feature Request。

---

## 7. 用户反馈摘要

- 从 #1132 可见，用户期望能够对 "main" 会话执行删除/归档操作，说明用户在实际使用中会积累多个会话并希望进行整理清理。
- 无评论细节可供进一步提炼使用场景。

---

## 8. 待处理积压

> 当前数据仅覆盖过去 24 小时，无法判断长期积压情况。建议维护者定期回顾长时间未响应的 Issue/PR。

---

*数据来源：github.com/moltis-org/moltis · 生成时间：2026-06-19*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-19

---

## 1. 今日速览

CoPaw（github.com/agentscope-ai/CoPaw）过去 24 小时呈现**高活跃、高消化**的特征：50 条 Issue 更新中 34 条已关闭（关闭率 68%），32 条 PR 更新中 17 条已合并或关闭，同时发布了 v1.1.12.post1 补丁版本。项目整体处于**快速迭代期**，大量积压 Bug 被集中清理（尤其是 3 月~5 月的旧 Issue 集中关闭），同时多个新 PR 瞄准 v1.2 的上下文管理重构。维护团队今日合并节奏显著加快，PR 吞吐量处于近期高位。

---

## 2. 版本发布

### v1.1.12.post1

| 条目 | 详情 |
|------|------|
| **发布时间** | 2026-06-19 |
| **核心修复** | ① `scripts`：修正 prerelease 参数展开逻辑，版本号校正；② `memory`：将 ChromaDB probe collection 重命名为 `probe-test`，避免与用户数据冲突 |
| **破坏性变更** | 无 |
| **迁移注意事项** | 使用 ChromaDB 作为向量存储的用户升级后，probe collection 名称变更属于内部实现细节，不影响已有数据；无额外操作要求 |
| **Release 链接** | agentscope-ai/QwenPaw Releases |

> 注：版本号为 `.post1` 后缀，属于紧急热修复性质，未引入新功能。

---

## 3. 项目进展

今日合并/关闭的关键 PR 汇总：

| # | PR 标题 | 状态 | 意义 |
|---|---------|------|------|
| [#5309](https://github.com/agentscope-ai/QwenPaw/pull/5309) | feat(context): 上下文管理从 LightContextManager 迁移至 AgentScope 2.0 原生压缩 | ✅ 已合并 | **重大架构升级**——弃用自定义 `LightContextManager`，全面转向 AS 2.0 的 `Agent.compress_context()`、`Offloader` 协议和中间件式工具结果裁剪。为后续 Headroom 插件和 scroll 策略奠定基础 |
| [#5303](https://github.com/agentscope-ai/QwenPaw/pull/5303) | fix(token_usage): 使用活跃模型的 max_input_length 计算上下文用量显示 | ✅ 已合并 | 修复 Agent 切换模型后上下文使用率显示不准确的 Bug |
| [#5306](https://github.com/agentscope-ai/QwenPaw/pull/5306) | fix: 修复 Console 聊天轮次上下文分母计算 | ✅ 已合并 | 与 #5303 配套，修复 Console 端弹层中的上下文窗口大小取值问题 |
| [#5291](https://github.com/agentscope-ai/QwenPaw/pull/5291) | fix: 为钉钉频道 HTTP 客户端显式配置 SSL 证书 | ✅ 合并 | 修复 `uv tool install` 安装后因 SSL 证书缺失导致的钉钉频道通信失败 |
| [#5298](https://github.com/agentscope-ai/QwenPaw/pull/5298) | fix: 处理 Windows 构建验证中的 SSL 证书错误 | ✅ 合并 | CI/CD 流水线稳定性修复 |
| [#5293](https://github.com/agentscope-ai/QwenPaw/pull/5293) | feat: 聊天历史改为右侧固定面板 | ✅ 合并 | UX 改进——聊天历史列表从抽屉弹出改为嵌入式侧边栏，提升切换体验 |
| [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) | perf(mcp): 新增 SharedMCPPool 跨 Agent 复用 MCP 服务器 | ✅ 合并 | 解决 300+ Agent 场景下 MCP 服务器进程爆炸式增长的问题 |
| [#4860](https://github.com/agentscope-ai/QwenPaw/pull/4860) | fix: 清理 Windows pip 升级残留的过时 skill 目录 | ✅ 合并 | 启动时主动清理 `~` 前缀的 ghost 技能目录 |

### 整体进度评估

**架构迁移是主线**：#5309 的合入标志着上下文管理模块开始从自研实现向 AgentScope 2.0 原生能力迁移。配合正在审查的 Headroom 插件（#5244）和 scroll 策略（#5321），v1.2 的上下文管理将形成"原生压缩 + 可插拔策略（Headroom/scroll）"的分层架构。

---

## 4. 社区热点

### 🔥 Issue #5218 — 子 Agent 触发上下文压缩时进程冻结无响应

- **链接**: [agentscope-ai/QwenPaw#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)
- **互动**: 👍0 · 💬16 条讨论（今日最热）
- **分析**: 子 Agent 在执行上下文压缩（context compaction）时，主进程完全冻结，只能手动重启。这直接关联今日刚合并的 #5309（上下文管理架构迁移）。**社区期待此次架构重构能从根本上解决该问题。** 用户评论中多次提到"生产环境中不得不禁用上下文压缩来规避"。

### 🔥 Issue #5171 — 上下文压缩缺少按条数保留/排除人设文件机制

- **链接**: [agentscope-ai/QwenPaw#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)
- **互动**: 👍0 · 💬8 条
- **分析**: 当 Agent 人设文件（system prompt）token 数大于压缩阈值时，压缩可能将上下文完全清空为 0，导致模型丢失所有上下文而任务中断。用户诉求是压缩策略应支持"按条数保留最近 N 条对话"和"排除/锁定人设文件不被压缩"。

### 🔥 Issue #5262 — 升级后被禁用的内置技能重新变为启用

- **链接**: [agentscope-ai/QwenPaw#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)
- **互动**: 👍0 · 💬7 条
- **分析**: 用户每次升级都需重新手动禁用不需要的内置技能（如 docx、xlsx），否则可能被误调用。该问题此前已有 #4807 提出，属于**回归性问题**仍未彻底解决。

### 🔥 PR #5321 — feat(context): scroll context manager

- **链接**: [agentscope-ai/QwenPaw#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)
- **分析**: 新增 **scroll 上下文管理策略**——基于检索驱动的上下文替代方案，支持持久化历史 + REPL 召回，同时修复非默认 Agent 无法加载自身上下文配置的策略的新贡献者 PR。如果合并，将与 Headroom 插件形成互补的两套上下文压缩方案。

### 🔥 Issue #5264 — 群聊消息回复被发送到私聊而非群聊

- **链接**: [agentscope-ai/QwenPaw#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264)
- **互动**: 👍0 · 💬4 条
- **分析**: 飞书渠道中，当用户同时有活跃的私聊和群聊会话时，群聊回复被错误路由到私聊窗口。属于**会话路由 Bug**，影响飞书群聊场景的正常使用。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（影响核心功能 / 数据丢失）

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 子 Agent 上下文压缩导致进程冻结 | **OPEN** | 🟢 #5309（架构迁移，可能间接修复）+ #5287（防止 compaction summary 超 maxLength 崩溃） |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | 上下文压缩将人设文件完全压缩丢失 | **OPEN** | 🔴 暂无直接修复 PR |

### 🟡 中等（功能异常但可规避）

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | 升级后禁用技能状态重置 | **OPEN** | 🔴 无 |
| [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | 飞书群聊回复路由到私聊 | **OPEN** | 🔴 无 |
| [#5253](https://github.com/agentscope-ai/QwenPaw/issues/5253) | custom_channel 每次保存后监听宕掉 | **OPEN** | 🔴 无 |
| [#5319](https://github.com/agentscope-ai/QwenPaw/issues/5319) | Console channel 始终显示"Answers have stopped" | **OPEN**（今日新建） | 🔴 无 |
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | 不支持为图像输入单独路由视觉模型 | **OPEN** | 🔴 无 |

### 🟢 已修复 / 已关闭

| # | 问题 | 修复方式 |
|---|------|----------|
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | docx/pdf 附件下载 404 | ✅ 已关闭 |
| [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | ChromaDB Rust binding segfault 导致进程崩溃 | ✅ 已关闭 |
| [#5313](https://github.com/agentscope-ai/QwenPaw/issues/5313) | MCP streamable_http 丢失 Bearer 前缀 | ✅ 已关闭 |
| [#4922](https://github.com/agentscope-ai/QwenPaw/issues/4922) | 微信渠道图片路径 PermissionError | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

### 明确可能被纳入下一版本的功能

| # | 需求 | 对应 PR | 信号强度 |
|---|------|---------|----------|
| [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | 集成 Headroom 作为可选上下文压缩层，可降低 60-95% token 消耗 | [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244)（Under Review） | 🟢🟢🟢 高——PR 活跃审查中，与 #5309 架构迁移互补 |
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | scroll context manager —— 基于检索的持久化历史 + REPL 召回 | PR 本身 | 🟢🟢 中高——新贡献者 PR，需审查周期 |
| [#5314](https://github.com/agentscope-ai/QwenPaw/pull/5314) | Discord 渠道流式响应（消息编辑 + 输入指示器） | PR 本身 | 🟢🟢 中——功能明确，渠道扩展类 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | DataPaw 数据分析插件（12 个 BI 技能） | PR 本身（Under Review） | 🟢 中——大型插件 PR，审查周期长 |
| [#5304](https://github.com/agentscope-ai/QwenPaw/pull/5304) | `qwenpaw terminal` 交互式编程终端模式 | PR 本身 | 🟢 中——CLI 新功能 |
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | 支持为图像输入单独路由视觉模型 | 无 PR | 🟡 低——仅有 Issue，无贡献者认领 |

### 路线图判断

下一版本（预计 v1.2）的**核心主题将是上下文管理重构**：以 #5309 的 AgentScope 2.0 原生压缩为基础，叠加 Headroom（外部可逆压缩插件）、scroll（检索驱动策略）两套可选方案，形成分层上下文管理体系。**技能状态持久化**（#5262）和**飞书渠道路由修复**（#5264）是高优先级回归 Bug，建议在 v1.2 之前以 post 版本修复。

---

## 7. 用户反馈摘要

### 痛点和不满

1. **上下文压缩可靠性堪忧**：多位用户报告压缩导致进程冻结（#5218）、上下文完全丢失（#5171）、Agent 任务中断——这是当前**最高频、最严重**的用户痛点。部分用户已选择完全禁用上下文压缩作为 workaround。

2. **升级体验差**：版本升级后禁用状态不保留（#5262），用户每次升级需重复操作，类似问题此前 #4807 已提但未根治，用户明显感到沮丧。

3. **渠道体验不一致**：钉钉仅 uv 安装不工作（#5237，已关闭）；飞书群聊/私聊路由混乱（#5264）；QQ 不支持文件发送（#1983，已关闭）；微信渠道持续报错（#4922，已关闭）。多渠道适配质量参差不齐。

4. **Windows 环境兼容性**：今天是 Windows 问题集中解决日（SSL 证书、ChromaDB SQLite 兼容性、skill 目录清理），说明 Windows 用户体验长期存在缺口。

### 满意信号

- v1.1.11.post2 修复了纯文本附件下载问题（#5140 已关闭），用户跟帖确认修复有效。
- 今日多个积压超过 2 个月的旧 Issue 集中关闭（#3854、#3905、#3821 等），社区开发者反馈 PM 回应速度有改善。
- 聊天历史右侧面板（#5293）合并后，用户在 Issue 评论中表达了"终于等到这个功能"的正面反馈。

---

## 8. 待处理积压

### Issue 积压（长期未响应的高价值 Issue）

| # | 标题 | 创建日期 | 状态 | 建议优先级 |
|---|------|----------|------|-----------|
| [#3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) | 图像输入独立视觉模型路由 | 2026-04-29 | OPEN | ⭐⭐⭐ 无 PR、无回应，但需求明确 |
| [#3929](https://github.com/agentscope-ai/QwenPaw/issues/3929) | 自定义模型独立 timeout/context_window_size | 2026-04-28 | CLOSED | 已关闭，但方案是否完整存疑（仅关闭无 PR 关联） |
| [#3768](https://github.com/agentscope-ai/QwenPaw/issues/3768) | 命令自动拒绝功能 | 2026-04-24 | CLOSED | 已关闭 |
| [#4697](https://github.com/agentscope-ai/QwenPaw/issues/4697) | 微信 poll 线程在 zero-downtime reload 后崩溃无自愈 | 2026-05-26 | CLOSED | 已关闭，但用户报告"关闭后未验证修复" |

### PR 积压（长期未审查的 PR）

| # | 标题 | 创建日期 | 状态 | 建议处理 |
|---|------|----------|------|----------|
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | 解耦 plugin loader 初始化与 agent 启动 | 2026-06-02 | OPEN | ⭐⭐⭐ 已超 16 天，修复 PyInstaller/Trozen 环境下 plugin 系统不初始化的高优先级 Bug |
| [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) | fix: compaction summary 超 maxLength 不崩溃 | 2026-06-17 | OPEN | ⭐⭐⭐ 与 #5218 关联，应尽快审查 |
| [#5265](https://github.com/agentscope-ai/QwenPaw/pull/5265) | fix(memory): Windows 强制重建向量索引 | 2026-06-17 | OPEN | ⭐⭐ 改善 Windows 记忆后端可靠性 |

### 维护者建议

1. **优先处理 #5287 + #4900**：前者直接防止 compaction 崩溃（关联最热 Issue #5218），后者修复插件系统初始化死区。两者合并后可显著提升稳定性。
2. **#3940（视觉模型路由）** 已搁置 51 天且无 PR，建议至少回复确认是否纳入路线图。
3. **#5262（技能禁用状态持久化）** 为二次回归（#4807→未根治），建议在 v1.2.0 发布前以 post 热修复版本解决，避免影响升级体验。

---

*日报生成时间：2026-06-19 · 数据来源：agentscope-ai/QwenPaw GitHub API*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-19

---

## 1. 今日速览

ZeroClaw 今日处于**高活跃开发期**，过去 24 小时内 Issues 更新 27 条（新开/活跃 26 条，关闭 1 条）、PR 更新 50 条（待合并 35 条，已合并/关闭 15 条），无新版本发布。项目正处于 **v0.8.1 发布冲刺阶段**（PR #7938 版本号已 bump，但标注"Do not merge"等待审批门禁），多条 v0.8.0 回归修复和 provider/channel/runtime 安全加固 PR 密集合入。整体健康度良好，但积压 PR 较多（35 条待合并），需关注 review 带宽。

---

## 2. 版本发布

**无新版本发布。**

v0.8.1 正在准备中：
- **PR #7938** `chore(release): bump version to 0.8.1` 已创建但明确标注"Do not merge"，等待审批门禁通过后由作者合并。
- **PR #7939** `docs(i18n): refresh fluent strings and mdbook catalogs for v0.8.1` 已合入，完成了 v0.8.1 的本地化字符串和文档目录刷新。

---

## 3. 项目进展

今日合并/关闭的 15 条 PR 主要集中在 **v0.8.0 回归修复、安全加固和测试覆盖** 三个方向：

| PR | 方向 | 说明 |
|---|---|---|
| [#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848) | 回归修复 | 修复预编译二进制中已配置 channel 缺失的问题（对应 Issue #7787 的 Slack/Discord 回归） |
| [#7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933) | 可观测性 | 为 native tool delivery 决策添加 DEBUG 级诊断日志，覆盖 OpenAI/Anthropic/compatible providers |
| [#7934](https://github.com/zeroclaw-labs/zeroclaw/pull/7934) | 可观测性 | 将 cron 删除诊断从 stdout 迁移到结构化日志事件 |
| [#7939](https://github.com/zeroclaw-labs/zeroclaw/pull/7939) | 文档 | 刷新 fluent 本地化字符串和 mdbook 文档目录，为 v0.8.1 做准备 |
| [#7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) | 测试/跨平台 | 修复 Windows 路径和 shell 可移植性测试（对应 Issue #7462 的 74 个 Windows 测试失败） |
| [#7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547) | 功能修复 | 自动将发现的 MCP tools 纳入 risk_profile allowed_tools（修复 MCP 工具在显式 risk_profile 下不可见的问题） |
| [#7826](https://github.com/zeroclaw-labs/zeroclaw/pull/7826) | 安全 | 将 credential redaction 从工具执行数据路径移至渲染层，避免 scrubbed 值污染模型输入和 HMAC receipt |
| [#7774](https://github.com/zeroclaw-labs/zeroclaw/pull/7774) | 文档 | 修复翻译中受保护字面量（产品名/协议名/命令名等）被意外翻译的问题 |

**整体评估：** 项目正在系统性地修复 v0.8.0 的回归问题（channel 编译缺失、MCP 工具可见性、Windows 兼容性），同时在安全（credential redaction 层迁移、shell 内存上限）和可观测性（provider 决策日志）方面持续加固。v0.8.1 的发布准备已进入最后阶段。

---

## 4. 社区热点

### Issue #2079 — [Feature]: Restore GitHub as a native channel
- **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/2079
- **数据：** 7 条评论，创建于 2026-02-27，近期活跃
- **分析：** 这是社区讨论最活跃的 issue。用户希望将 GitHub 作为一等 channel，使 agent 能够以统一的 channel 接口观察和操作 repo 活动（issues、PR、评论、review）。当前集成 GitHub 需要自定义胶水代码（webhook 解析、认证、事件路由、去重、权限），诉求本质是**降低 GitHub 集成的门槛**，与 #6970 的 v0.8.1 integration tracker 直接相关。

### Issue #7787 — Prebuilt v0.8.0 binaries ship without Slack/Discord channel features
- **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/7787
- **数据：** 3 条评论，👍 1，P1 优先级
- **分析：** v0.8.0 预编译二进制未包含 Slack/Discord channel 功能的回归问题。已有 PR #7848 合入修复。这反映了**预编译二进制 feature flag 管理**的持续挑战。

### Issue #6971 — RFC: Security UX, runtime credential boundaries, and isolation defaults
- **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/6971
- **数据：** 3 条评论，RFC 类型，P2
- **分析：** 关于安全 UX、运行时凭证边界和隔离默认值的 RFC，与今日多条安全加固 PR（#7826、#7937、#7902）形成呼应，说明社区和核心团队对**安全默认值**的关注正在转化为实际代码变更。

### Issue #7756 — [Bug]: native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns
- **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/7756
- **数据：** 1 条评论，P1，S1 严重级别
- **分析：** MCP 工具在 OpenAI Responses/reasoning 和 Anthropic turns 上不可用，是**工作流阻塞级别**的 bug。PR #7931 和 #7933 部分相关（修复 compatible history 角色合并、添加工具交付诊断），但根本问题可能尚未完全解决。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### S0 — 数据丢失/安全风险

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) `execute_pipeline` bypasses per-agent tool gating (confused deputy) | `execute_pipeline` 仅依据全局 `[pipeline].allowed_tools` 授权子工具步骤，忽略调用 agent 的 per-agent `ToolAccessPolicy`，构成**混淆代理漏洞** | ⚠️ 暂无 |

### S1 — 工作流阻塞

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) native/MCP tools unavailable on OpenAI/Anthropic turns | MCP 工具在特定 provider turns 上不可用 | 🔄 部分相关：[#7931](https://github.com/zeroclaw-labs/zeroclaw/pull/7931)、[#7933](https://github.com/zeroclaw-labs/zeroclaw/pull/7933) |
| [#7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941) agent delete can purge owned state before config persistence | `delete_agent_cascade()` 在 config 持久化之前清除已拥有状态（#7907 的镜像问题） | 🔄 [#7940](https://github.com/zeroclaw-labs/zeroclaw/pull/7940)（待合并） |
| [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) agent rename can move owned state before config persistence | `rename_agent_cascade()` 在 config 持久化之前移动已拥有状态 | 🔄 [#7940](https://github.com/zeroclaw-labs/zeroclaw/pull/7940)（待合并） |
| [#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804) Code history can send non-alternating Anthropic messages | 长会话或恢复的 Code/ACP 会话可能向 Anthropic 发送相邻同角色消息，导致 400 错误 | 🔄 [#7931](https://github.com/zeroclaw-labs/zeroclaw/pull/7931)（待合并） |

### S2 — 降级行为

| Issue | 描述 | Fix PR |
|---|---|---|
| [#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221) Model cost not captured for schedules, command line and web agents | 通过 schedules、CLI 和 web agents 交互时模型成本未被捕获 | ⚠️ 暂无 |
| [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) Prebuilt v0.8.0 binaries ship without Slack/Discord channel features | v0.8.0 预编译二进制缺少 Slack/Discord channel | ✅ [#7848](https://github.com/zeroclaw-labs/zeroclaw/pull/7848) 已合入 |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 74 test failures on Windows | Windows 上 74 个测试失败（Unix 专用命令、路径语义、控制台编码） | ✅ [#7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) 已合入 |
| [#7949](https://github.com/zeroclaw-labs/zeroclaw/issues/7949) `[[embedding_routes]]` silently degrades to NoopEmbedding | 配置的 embedding route 静默降级为 NoopEmbedding | ⚠️ 暂无 |

### S3 — 次要问题

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7892](https://github.com/zeroclaw-labs/zeroclaw/issues/7892) CLI approval prompt should read controlling terminal when stdin is detached | stdin 分离时 CLI 审批提示应从控制终端读取 | 🔄 [#7936](https://github.com/zeroclaw-labs/zeroclaw/pull/7936)（待合并） |
| [#7917](https://github.com/zeroclaw-labs/zeroclaw/issues/7917) i18n: file_download tool strings untranslated | file_download 工具字符串在所有非英语 locale 中未翻译 | ⚠️ 暂无 |

### 今日已关闭

| Issue | 描述 |
|---|---|
| [#7799](https://github.com/zeroclaw-labs/zeroclaw/issues/7799) Resumed Code sessions reopen with a blank transcript | 恢复的 Code 会话以空白 transcript 重新打开 |

---

## 6. 功能请求与路线图信号

### 高概率纳入 v0.8.1（已有 PR 或已 accepted）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) Effort-based local/cloud model routing | 基于难度的本地/云端模型路由，简单轮次用本地模型，困难轮次升级到云端模型 | 今日新开，已 accepted |
| [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) Unify slash-command registries across web UI, zerocode TUI, and channel runtime | 统一 web UI、zerocode TUI 和 channel runtime 的斜杠命令注册表 | 今日新开 |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) Realtime voice-host channel | 后端无关的 WebSocket 客户端 voice-host channel，支持 CrispASR 等 | 今日新开 |
| [#7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) Voice satellite (ESP32/smartphone/browser PWA) | 语音卫星设备，通过 realtime voice-host contract 与控制主机通信 | 今日新开 |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) Process-memory limits on shell/skill_tool subprocess execution | shell/skill_tool 子进程内存限制 | 已 accepted，[#7937](https://github.com/zeroclaw-labs/zeroclaw/pull/7937) 待合并 |
| [#7175](https://github.com/zeroclaw-labs/zeroclaw/issues/7175) Typed delete-with-cascade for aliased entries | 类型化级联删除（providers、agents、channels） | 已 accepted |

### 中期路线图信号

| Issue | 描述 |
|---|---|
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) Restore GitHub as a native channel | GitHub 作为一等 channel |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) v0.8.1 integration/channel/provider/tool queue tracker | v0.8.1 集成/通道/提供者/工具队列追踪器 |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) RFC: Security UX, runtime credential boundaries, and isolation defaults | 安全 UX 和运行时凭证边界 RFC |
| [#7948](https://github.com/zeroclaw-labs/zeroclaw/issues/7948) Persist embedding identity and auto-migrate vectors | 持久化 embedding 身份并在模型变更时自动迁移向量 |
| [#7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950) Docker images to include zeroclaw docs | Docker 镜像中包含 ZeroClaw 文档 |

**路线图判断：** v0.8.1 的核心主题是**稳定性修复 + 安全加固 + provider 生态扩展**。voice-host channel（#7943/#7944）和 effort-based routing（#7951）是今日新开的功能请求，已被 accepted，可能进入 v0.8.x 后续版本。GitHub native channel（#2079）讨论活跃但实现复杂，预计需要更长时间。

---

## 7. 用户反馈摘要

### 真实痛点

1. **预编译二进制功能不完整** — Issue #7787 用户发现 v0.8.0 预编译二进制缺少 Slack/Discord 支持，不得不降级到 v0.7.5。这反映了用户对**开箱即用体验**的期望与实际交付之间的差距。

2. **MCP 工具集成体验差** — Issue #7756 和 #7547 都指向 MCP 工具在特定场景下不可见或不可用。用户配置了 MCP server 但模型实际收不到工具，这种**静默失败**是最令人沮丧的体验。

3. **Windows 支持薄弱** — Issue #7462 报告 74 个 Windows 测试失败，Issue #7910 跟进 Windows 自更新路径测试覆盖。Windows 用户群体存在但被 CI 覆盖不足。

4. **成本可观测性缺失** — Issue #5221 指出通过 schedules、CLI 和 web agents 交互时模型成本未被捕获，用户对**成本归因**有明确需求。

5. **Docker 镜像中缺少文档** — Issue #7904 和 #7950 反映用户希望 agent 能回答 ZeroClaw 自身的使用问题，但 Docker 镜像中没有包含文档，导致 agent 无法自助。

### 满意信号

- PR #7848 快速合入修复了 Slack/Discord 回归，说明核心团队对**回归问题的响应速度**较快。
- 安全加固 PR（#7826、#7937、#7902）的密集合入表明项目在**安全方面的投入**得到社区认可。

---

## 8. 待处理积压

以下长期未响应或积压的重要 Issue/PR，提醒维护者关注：

### 长期 Issue（创建超过 30 天且仍开放）

| Issue | 创建日期 | 描述 | 风险 |
|---|---|---|---|
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | 2026-02-27 | Restore GitHub as a native channel | 高 — 讨论活跃但无明确 owner |
| [#5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221) | 2026-04-02 | Model cost not captured for schedules/CLI/web agents | 中 — 影响成本可观测性 |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | 2026-05-27 | v0.8.1 integration/channel/provider/tool queue tracker | 中 — 作为 tracker 需要持续更新 |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 2026-05-27 | RFC: Security UX and credential boundaries | 高 — RFC 需要社区共识 |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | 2026-05-25 | Process-memory limits on shell/skill_tool | 高 — 已有 PR #7937 待合并 |

### 积压 PR（待合并 35 条中的重点关注）

| PR | 创建日期 | 描述 | 建议 |
|---|---|---|---|
| [#7938](https://github.com/zeroclaw-labs/zeroclaw/pull/7938) | 2026-06-18 | chore(release): bump version to 0.8.1 | 尽快完成审批门禁，推进 v0.8.1 发布 |
| [#7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902) | 2026-06-17 | fix(tools): pin http_request to vetted DNS addresses (SSRF 防护) | 安全相关，优先 review |
| [#7937](https://github.com/zeroclaw-labs/zeroclaw/pull/7937) | 2026-06-18 | fix(runtime): cap shell subprocess memory | 安全相关，优先 review |
| [#7940](https://github.com/zeroclaw-labs/zeroclaw/pull/7940) | 2026-06-18 | fix(gateway): persist agent rename before moving owned state | 修复 S1 bug，优先合入 |
| [#7931](https://github.com/zeroclaw-labs/zeroclaw/pull/7931) | 2026-06-18 | fix(providers): coalesce stripped compatible history roles | 修复 S1 bug，优先合入 |
| [#7923](https://github.com/zeroclaw-labs/zeroclaw/pull/7923) | 2026-06-18 | feat(auto-clean): automatic clearing of temporary files | 新功能，需要 review |

### ⚠️ 特别提醒

- **Issue #7947**（`execute_pipeline` 绕过 per-agent tool gating）是今日新开的 **S0 安全漏洞**，目前无任何 fix PR，建议立即分配 owner。
- **Issue #7949**（`[[embedding_routes]]` 静默降级）是今日新开的 S2 bug，embedding route 功能实际上已失效，影响所有使用该功能的用户。
- **PR #7938**（v0.8.1 版本 bump）已就绪但等待审批，建议尽快完成 review 流程以发布包含所有回归修复的 v0.8.1。

---

*日报生成时间：2026-06-19 | 数据来源：ZeroClaw GitHub Repository (github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*