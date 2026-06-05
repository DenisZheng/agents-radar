# OpenClaw 生态日报 2026-06-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-05 00:40 UTC

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

# OpenClaw 项目动态日报 — 2026-06-05

---

## 1. 今日速览

OpenClaw 今日处于**高活跃但高压力**状态：过去 24 小时内 Issues 与 PR 更新量均达到 500 条，其中新开/活跃 Issues 346 条、已关闭 154 条，待合并 PR 394 条、已合并/关闭 106 条，社区活跃度极高。**无新版本发布**，项目当前稳定版本仍为 2026.6.1（上周四发布）。今日最突出的信号集中在三大方向：**v2026.6.1 升级后的迁移回归问题集中爆发**（cron 状态丢失、SQLite 迁移兼容性）、**多通道消息投递可靠性危机**（Discord、Telegram、Slack 均有严重 bug），以及**活跃 PR 积压严重**——394 个待合并 PR 中大量标记为 `ready for maintainer look`，维护者审查瓶颈明显。

---

## 2. 版本发布

**无新版本发布。**

当前最新稳定版为 **v2026.6.1**（2026-06-04 发布），该版本引入了 SQLite session/transcript 迁移和原生 Codex 运行时，但伴随显著的升级回归风险（详见第 5 节）。

---

## 3. 项目进展

今日 PR 以**新提交和审查就绪**为主，合并数量有限。以下为今日关注度最高的 PR 及其推进方向：

### 审查就绪、等待维护者处理（P1/P2，已提供充分 proof）

| PR | 方向 | 摘要 |
|---|---|---|
| [#90198](https://github.com/openclaw/openclaw/pull/90198) | Discord 出站修复 | 修复 Discord 运行时适配器解析失败导致的 `Outbound not configured for channel: discord` 错误，解决最终回复丢失问题 |
| [#90212](https://github.com/openclaw/openclaw/pull/90212) | Feishu / 斜杠命令 | 修复原生 `/compact` 回复无法通过飞书投递的问题（[#90185](https://github.com/openclaw/openclaw/issues/90185)） |
| [#89502](https://github.com/openclaw/openclaw/pull/89502) | Google Chat 新功能 | 为 Google Chat 添加原生审批卡片（exec/plugin approval），使用 opaque server-side action tokens |
| [#88992](https://github.com/openclaw/openclaw/pull/88992) | 消息投递恢复 | 修复 `message_tool_only` 模式下 LLM 忘记调用 message tool 时回复被静默丢弃的问题（[#85714](https://github.com/openclaw/openclaw/issues/85714)） |
| [#85249](https://github.com/openclaw/openclaw/pull/85249) | Cron 执行器稳定性 | 防护 isolated cron executor 中 `sourceDelivery` 为 undefined 导致的 TypeError |
| [#90490](https://github.com/openclaw/openclaw/pull/90490) | Gateway 恢复 | 添加周期性重启/会话投递恢复机制，解决 entries 被 retry backoff 延迟后不再重试的问题（[#76087](https://github.com/openclaw/openclaw/issues/76087)） |
| [#89041](https://github.com/openclaw/openclaw/pull/89041) | Discord WebSocket | 禁用 ws 8.21.0 新增的 receiver part limits，防止 gateway 连接因 `WS_ERR_TOO_MANY_BUFFERED_PARTS` 异常关闭 |

### 项目整体前进方向

当前项目正处于 **v2026.6.1 发布后的修复窗口期**：大量 PR 聚焦于升级后的回归修复（SQLite 迁移、Cron 状态、Discord/Fishu 通道适配），同时并行推进多通道原生审批卡片（Google Chat、WhatsApp QA 覆盖扩大）、安全加固（Discord moderation 身份校验）和性能优化（模型配置内容哈希、终端 ANSI 扫描复用）。整体处于"新功能与安全修复并行，但积压严重"的状态。

---

## 4. 社区热点

### 🔥 讨论最活跃 / 评论数最高的 Issues

| Issue | 热度指标 | 核心诉求 |
|---|---|---|
| [#72808](https://github.com/openclaw/openclaw/issues/72808) Slack 静默断连 | 20 评论 / 👍3 / P1 / Diamond Lobster | 用户报告 Slack 连接在稳定运行数日后静默断开，无错误提示，影响核心可用性。**标签 `impact:message-loss`** |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) SQLite session/transcript 迁移跟踪 | 17 评论 / P2 | 维护者发起，要求通过 branch-by-abstraction 方式分阶段迁移核心会话运行时状态到 SQLite，避免一次性高风险重写 |
| [#80171](https://github.com/openclaw/openclaw/issues/80171) Codex-vs-Pi 运行时 parity QA | 15 评论 / 已关闭 | OpenClaw 正将 Codex 设为默认 OpenAI agent turns 运行时，该 RFC 跟踪 Pi-built tool surface 与 Codex 的 QA parity 验证 |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) Heartbeat isolated mode 多项回归 | 14 评论 / P1 / Diamond Lobster | Heartbeat 调度频率异常、exec-event 误标为 heartbeat-last、heartbeat-state writer 缺失等多重问题 |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) Matrix 回复退化 | 13 评论 / P1 | v2026.5.22 中将 Matrix thread replies 作为普通回复发送，丢失 thread context；/status 和 /model 命令静默无响应 |

### 💥 反应最多（👍 最高）的 Issues

| Issue | 👍 | 描述 |
|---|---|---|
| [#72808](https://github.com/openclaw/openclaw/issues/72808) Slack 静默断连 | 3 | 影响生产演示场景 |
| [#90083](https://github.com/openclaw/openclaw/issues/90083) OpenAI Responses transport 失败 (gpt-5.4/5.5) | 3 | v2026.6.1 升级后 ChatGPT Responses 推理失败，`invalid_provider_content_type` |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) 会话 hard resets 重复触发 | 3 | 高 reserveTokensFloor 下仍反复触发 context-overflow 重置 |
| [#90072](https://github.com/openclaw/openclaw/issues/90072) Cron 状态在 SQLite 迁移中被静默清除 | 3 | 44/45 cron jobs 在升级中丢失，无警告 |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) Mattermost slash commands 503 | 3 | v2026.4.15 后所有 slash commands 返回 503 |

### 热点背后的核心诉求

1. **升级到 v2026.6.1 的用户期待清晰的迁移风险公告和修复**——cron 静默丢失和 OpenAI transport 失败是最紧迫的痛点
2. **消息投递可靠性是第一优先级**——Slack 静默断连、Discord outbound 失败、Matrix 回复退化，三个主流 IM 通道同时出现严重问题
3. **Session/Cron 状态管理**是用户最不透明的领域，需要更好的可观测性和迁移安全保障

---

## 5. Bug 与稳定性

### 🔴 严重 / P1 级别（生产影响）

| Issue | 严重程度 | 描述 | Fix PR 状态 |
|---|---|---|---|
| [#90072](https://github.com/openclaw/openclaw/issues/90072) | 🔴 数据丢失 | v2026.5.28 → 2026.6.1 升级中 44/45 cron jobs 被静默清除，无备份提示 | 暂无 PR |
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | 🔴 功能中断 | v2026.6.1 中 OpenAI ChatGPT Responses transport 对 gpt-5.4/gpt-5.5 报 `invalid_provider_content_type` | 关联 [#90487](https://github.com/openclaw/openclaw/pull/90487)（审查中） |
| [#90093](https://github.com/openclaw/openclaw/issues/90093) | 🔴 功能中断 | native OpenAI-ChatGPT-Responses 第二轮报 `invalid_encrypted_content`（加密 reasoning 回放问题） | 暂无 PR |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) | 🔴 静默故障 | Slack 连接静默断开，无恢复，有 open PR 关联 | 有 linked PR，标记 `needs-live-repro` |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | 🔴 功能中断 | Mattermost slash commands 自 v2026.4.15 起全部返回 503 | 有 fix-shape，`needs-product-decision` |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | 🔴 功能中断 | Matrix thread replies 在 v2026.5.22 中被发送为普通回复，丢失 thread context | `needs-info` |
| [#77642](https://github.com/openclaw/openclaw/issues/77642) | 🔴 回归 | v5.3 lossless-claw 重复回复 + synthetic "missing tool result" 错误 | `needs-live-repro` |

### 🟡 P2 / 显著影响

| Issue | 描述 |
|---|---|
| [#67366](https://github.com/openclaw/openclaw/issues/67366) | `openclaw onboard` 替换 Telegram token 时 TypeError 崩溃 |
| [#73814](https://github.com/openclaw/openclaw/issues/73814) | `curl | bash` 安装挂起并截断 install.sh 函数名（stdin 消耗问题） |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | Session bootstrap files 每轮重新注入，浪费 20-30% tokens |
| [#76038](https://github.com/openclaw/openclaw/issues/76038) | Stuck Session Recovery 双重失效 + session 预处理耗时过长 |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | amazon-bedrock-mantle 每次请求都运行不必要的 IAM token discovery |
| [#65624](https://github.com/openclaw/openclaw/issues/65624) | Mattermost slash cleartext callback URLs 暴露 reusable command tokens（CVSS 8.6） |

### 🟢 已关闭（今日有活动）

| Issue | 描述 |
|---|---|
| [#79794](https://github.com/openclaw/openclaw/issues/79794) | Discord gateway READY 事件不再触发 — 已关闭 |
| [#87177](https://github.com/openclaw/openclaw/issues/87177) | QQBot 消息重复 — 已关闭 |
| [#88234](https://github.com/openclaw/openclaw/issues/88234) | Feishu dispatch TypeError — 已关闭 |
| [#84820](https://github.com/openclaw/openclaw/issues/84820) | Gateway Node 24+ 上 FileHandle 泄漏崩溃 — 已关闭 |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（有活跃 PR 或维护者关注）

| Issue | 描述 | PR / 路线信号 |
|---|---|---|
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | 多索引 embedding memory + 模型感知 failover | 无活跃 PR，但 SQLite migration (#88838) 可能是前置依赖 |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | 敏感数据脱敏（API key/日志/UI） | 无活跃 PR，`needs-security-review` |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) | Control UI 插件贡献槽位（RFC） | stale，讨论阶段 |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | Anthropic advisor tool 支持（server-side tool） | 无活跃 PR |
| [#89502](https://github.com/openclaw/openclaw/pull/89502) | Google Chat 原生审批卡片 | PR 已就绪，审查中 |
| [#89569](https://github.com/openclaw/openclaw/pull/89569) | Telegram/WhatsApp 静默访问请求 + 分组 DM allowlist | PR 提交，XL 规模 |
| [#90478](https://github.com/openclaw/openclaw/pull/90478) | 从 GitHub-backed ClawHub 安装 skills | PR 提交，等待作者 |
| [#75918](https://github.com/openclaw/openclaw/pull/75918) | Hooks 持久化 session 模式 | PR 提交，`needs-proof` |

### 路线图判断

- **近期（当前 sprint）**：v2026.6.1 升级回归修复（cron 迁移安全、OpenAI transport、多通道适配）是最紧迫的
- **中期（下一版本）**：多通道原生审批卡片（Google Chat → Discord → WhatsApp）和 ClawHub skills 生态正在成型
- **长期**：敏感数据脱敏、多 embedding 索引 failover、Control UI 插件化架构仍停留在 RFC 阶段

---

## 7. 用户反馈摘要

### 😤 痛点与不满

| 痛点 | 典型场景 | 来源 Issue |
|---|---|---|
| **升级后无声数据丢失** | 用户从 2026.5.28 升级到 2026.6.1，45 个 cron jobs 丢了 44 个，毫无预警 | [#90072](https://github.com/openclaw/openclaw/issues/90072) |
| **IM 通道投递不可靠** | Slack 用户演示时静默断连；Discord 升级后 guild 消息收不到；Telegram heartbeat 吞回复 | [#72808](https://github.com/openclaw/openclaw/issues/72808)、[#79794](https://github.com/openclaw/openclaw/issues/79794)、[#64810](https://github.com/openclaw/openclaw/issues/64810) |
| **gpt-5.x 新模型不兼容** | 想用最新 gpt-5.4/5.5 时 transport 就报 content type 错误 | [#90083](https://github.com/openclaw/openclaw/issues/90083) |
| **Context 效率低下** | bootstrap files 每轮重注浪费 20-30% tokens，用户配置了高 reserveTokensFloor 仍然 hard reset | [#67419](https://github.com/openclaw/openclaw/issues/67419)、[#63216](https://github.com/openclaw/openclaw/issues/63216) |
| **安全顾虑** | 敏感信息在配置文件、日志、UI 中明文展示；Mattermost 命令 token 通过 HTTP 暴露 | [#64046](https://github.com/openclaw/openclaw/issues/64046)、[#65624](https://github.com/openclaw/openclaw/issues/65624) |
| **恢复机制缺失** | Stuck session 无法自动恢复，最终被 systemd 强杀；heartbeat 在 isolated mode 下畸形 | [#76038](https://github.com/openclaw/openclaw/issues/76038)、[#65161](https://github.com/openclaw/openclaw/issues/65161) |

### 😐 中性 / 建设性反馈

- 多位用户通过 PR 积极参与修复（如 [#90489](https://github.com/openclaw/openclaw/pull/90489)、[#90490](https://github.com/openclaw/openclaw/pull/90490)），但反映 maintainer 审查响应慢
- QA-lab 社区的 [@100yenadmin](https://github.com/100yenadmin) 持续输出 parity 测试基础设施（[#80171](https://github.com/openclaw/openclaw/issues/80171)、[#80397](https://github.com/openclaw/openclaw/issues/80397)）

### ✅ 满意度信号

- 多个 issue 在今日得到关闭（Discord READY 事件、QQBot 重复消息、Feishu TypeError、FileHandle 泄漏），说明维护者仍在积极处理积压
- Codex-vs-Pi parity QA 框架正在系统化建立中

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issues（超过 30 天无维护者实质性回复）

| Issue | 创建日期 | 最后活动 | 问题 |
|---|---|---|---|
| [#65161](https://github.com/openclaw/openclaw/issues/65161) Heartbeat isolated mode 多项回归 | 2026-04-12 | 2026-06-04 | P1，14 条评论，标记 `needs-product-decision`，heartbeat 核心逻辑畸变 |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) 会话 hard resets | 2026-04-08 | 2026-06-04 | P1，Diamond Lobster，高 reserveTokensFloor 下仍反复触发 |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) 敏感数据脱敏 | 2026-04-10 | 2026-06-04 | 安全相关，8 条评论，需跨团队协作 |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Bootstrap 文件 token 浪费 | 2026-04-15 | 2026-06-04 | 8 条评论，`needs-product-decision` |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) bedrock-mantle 不必要的 discovery | 2026-04-15 | 2026-06-04 | 有 open PR，`needs-product-decision` |
| [#65729](https://github.com/openclaw/openclaw/issues/65729) Mattermost 线程可靠性 | 2026-04-13 | 2026-06-04 | 6 条评论，含本地 fix 方案 |
| [#48300](https://github.com/openclaw/openclaw/issues/48300) memory_search hybrid 模式不返回 FTS 匹配 | 2026-03-16 | 2026-06-04 | **已存在 54 天**，有 open PR，Diamond Lobster |
| [#60612](https://github.com/openclaw/openclaw/issues/60612) Doctor 误报 NVM node | 2026-04-04 | 2026-06-04 | 用户无法自行修复的 launchd plist 问题 |

### ⚠️ 长期积压的 PR（创建超过 30 天仍未合并）

| PR | 创建 | 大小 | 状态 |
|---|---|---|---|
| [#73260](https://github.com/openclaw/openclaw/pull/73260) content-hash auth-profiles | 2026-04-28 | XL | `needs-proof` |
| [#75918](https://github.com/openclaw/openclaw/pull/75918) persistent hook session mode | 2026-05-02 | L | `needs-proof` |
| [#81864](https://github.com/openclaw/openclaw/pull/81864) plain-language plugin approvals | 2026-05-14 | XL | `waiting-on-author` |

### 维护者行动建议

1. **紧急**：为 [#90072](https://github.com/openclaw/openclaw/issues/90072)（cron 静默丢失）编写升级迁移保护逻辑或回滚指南
2. **优先**：推进 [#90487](https://github.com/openclaw/openclaw/pull/90487) 和 [#90198](https://github.com/openclaw/openclaw/pull/90198) 的审查——OpenAI transport 和 Discord outbound 是两个最高频的 P1 问题
3. **审查轮次**：394 个待合并 PR 中至少 12 个标记为 `ready for maintainer look`，建议安排集中审查时段
4. **长期 backlog 清理**：超过 45 天的 Diamond Lobster rated issues（[#48300](https://github.com/openclaw/openclaw/issues/48300)）应明确 closing plan 或分配 owner

---

*数据来源：openclaw/openclaw GitHub API | 统计时间：2026-06-05 UTC*

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告

**数据来源：OWL | 生成时间：2026-06-05**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态处于**高频迭代与稳定性博弈**的关键阶段。OpenClaw 以 500+ 条 Issue/PR 日更新量成为生态绝对核心，社区压力已达维护者审查瓶颈（394 个待合并 PR）；多通道消息投递（Slack/Discord/Telegram/WhatsApp）的可靠性问题在同一时间窗口内集中爆发，折射出整个生态在通道适配层面临的共性工程挑战。MCP 工具链的集成质量（断连重连、工具名兼容性、SSRF防护）正在成为各项目的关键基建议题，标志着生态从"能力堆叠"向"生产可靠性"迈进。新 Com 模型范式（Reasoning、Computer-use、A2A 互操作）正驱动各架构向更加原子化、可插拔的方向演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues 活跃 | Issues 关闭 | PR 待合并 | PR 已合并/关闭 | Release | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 346 | 154 | 394 | 106 | 无（v2026.6.1） | 🟡 高压 |
| **NanoBot** | 1 | 5 | 16 | 61 | 无 | 🟢 良好 |
| **Hermes Agent** | 活跃 | 活跃 | ~25 | 18 | 无（v0.15.1） | 🟢 良好 |
| **PicoClaw** | 1 | 4 | 7 | 12 | 无 | 🟢 良好 |
| **NanoClaw** | 1（低质） | 0 | 5 | 3 | 无 | 🟢 稳定 |
| **IronClaw** | 25 | 15 | 31 | 19 | 无 | 🟡 活跃 |
| **LobsterAI** | 1 | 0 | ~8 | 17 | 无（2026.5.28） | 🟢 良好 |
| **Moltis** | 2 | 0 | 4 | 0 | 无 | 🟡 中等 |
| **CoPaw** | 13 | 19 | 10 | 16 | v1.1.11-beta.1 | 🟡 良好 |
| **ZeroClaw** | 30 | 5 | 33 | 17 | 无（v0.8.0 冲刺中） | 🟡 活跃 |
| **NullClaw** | 0 | 0 | 0 | 0 | — | ⚪ 静止 |
| **TinyClaw** | 0 | 0 | 0 | 0 | — | ⚪ 静止 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | — | ⚪ 静止 |

*注：Hermes Agent 与 PicoClaw 的 Issue 数据为估算值（原文未精确拆分），CoPaw 的健康度扣分项为 Windows 端稳定性积压。*

---

## 3. OpenClaw 在生态中的定位

**规模优势一骑尘远**：OpenClaw 今日 Issues 活跃量（346 条）是第二名 IronClaw（25 条）的 **14 倍**，待合并 PR 394 条超过其余所有项目之和。这既证明了其社区引力，也暴露了维护基础设施的极限压力。

**技术路线的"全家桶"定位**：与 IronClaw 聚焦 Rust 实现的 Reborn 子代理架构、ZeroClaw 专注 TUI/WebUI 体验、Hermes Agent 深耕 Desktop 客户端生态不同，OpenClaw 试图**同时覆盖从 Gateway 运行时、SQLite 迁移、Cron 执行器、10+ IM 通道适配到 ClawHub Skills 市场的全栈生态**——这使其成为事实上的"一站式"基础平台，但也带来了远超社区承载力的复杂度。

**与同类项目的关键差异**：

| 维度 | OpenClaw | IronClaw | CoPaw | ZeroClaw |
|---|---|---|---|---|
| 核心语言 | TypeScript | Rust | Python | Rust |
| 通道数量 | 15+ | Slack 为主深度集成 | 飞书/钉钉/QQ 中国市场 | Slack/Telegram/WhatsApp |
| 状态存储 | SQLite 迁移中 | Redis/PostgreSQL | 插件可插拔 | JSON-based |
| 子代理能力 | Cron 隔离执行器内置 | Reborn 独立持久化 | spawn_subagent | 基础 spawn |
| 用户体验层 | WebUI + TUI + Channels | WebChat v2 + Slack | WebUI + Desktop | TUI 优先 |

OpenClaw 面临的核心挑战是：**功能广度与维护者审查能力严重不匹配**（394 个 PR 积压中大量已标记 `ready for maintainer look`），而 IronClaw 已经在主动治理架构债务（#4470 提出 Reborn composition 拆分为独立 crate），CoPaw 则在 Token 用量可视化和子代理生命周期追踪等体验细节上更细致。

---

## 4. 共同关注的技术方向

通过 13 个项目的横向对照，以下技术方向为多点共有的热点：

### 🔧 MCP 工具链成熟度（涉及：OpenClaw / NanoBot / Moltis / CoPaw / ZeroClaw / NanoClaw）

| 诉求 | 项目 | 具体表现 |
|---|---|---|
| 断连自动重连 | OpenClaw, NanoBot | MCP streamable 会话丢失后无法恢复 |
| 工具名格式兼容性 | CoPaw | 含 `.` 的工具名被 OpenAI/Anthropic 拒绝 |
| SSRF 防护 | NanoBot | MCP SSE 端点连接前缺少源校验 |
| 子代理 MCP 继承 | NanoBot | spawned 子代理默认不继承主代理的 live MCP 工具 |
| Dashboard 统一管理 | ZeroClaw | MCP 服务器管理独立标签页 |

**判断**：MCP 已从"可选集成"变为"核心运行依赖"，可靠性要求正快速向生产级对齐。

### 📡 多通道消息投递可靠性（涉及：OpenClaw / NanoClaw / Moltis / CoPaw / ZeroClaw）

| 诉求 | 项目 | 具体表现 |
|---|---|---|
| 静默断连 | OpenClaw | Slack/Telegram 连接断开无告警/无恢复 |
| 群组寻址迁移 | NanoClaw | WhatsApp LID 迁移导致 Bot 回复静默失败 |
| 流媒体输出混合 | Moltis | Telegram 流式输出与最终回复混合刷屏 |
| 跨渠道卡片格式 | CoPaw | 飞书交互卡片提取重构 |
| 群聊路由错误 | PicoClaw | OneBot 群聊用错 API |

**判断**：消息投递层是各平台上最高频的故障域，随着 IM 平台持续变更 API（WhatsApp LID、Discord WebSocket 版本），维护适配成本持续上升。

### 🔄 上下文管理与 Compaction（涉及：OpenClaw / CoPaw / PicoClaw / NanoClaw）

| 诉求 | 项目 | 具体表现 |
|---|---|---|
| Compaction 阈值不透明 | CoPaw | `/compact` 硬编码 128K 忽略模型实际 max_input_length |
| Bootstrap 文件重复注入 | OpenClaw | 每轮重注浪费 20-30% tokens |
| Compaction 后输出格式丢失 | NanoClaw | auto-compaction 后模型输出丢失 `<message>` 标签 |
| 双阈值可视化 | PicoClaw | `/context` 命令显示 summarize 和 compress 双阈值 |

**判断**：上下文管理正从"黑盒"走向"用户可观测、可配置"，这是 Agent 从"可演示"到"可信赖"的关键一步。

### 🤖 子代理与 Agent 编排（涉及：OpenClaw / IronClaw / CoPaw / NanoBot）

| 诉求 | 项目 | 具体表现 |
|---|---|---|
| 子代理持久化交付 | IronClaw | 后台子代理结果无法传递给父代理（已修复） |
| 子代理生命周期事件 | CoPaw | 父子 agent 完成事件、心跳检测、取消传播 |
| Cron 隔离执行器稳定性 | OpenClaw | isolated cron executor 中 TypeError |
| 子代理 MCP 工具继承 | NanoBot | spawned 子代理默认不继承 MCP 工具 |

**判断**：子代理编排是 Agent 能力从"单线程对话"到"并发工作流"的架构跃迁，各项目均在早期实现阶段。

### 🔐 安全加固（涉及：OpenClaw / NanoBot / IronClaw / CoPaw）

| 诉求 | 项目 | 具体表现 |
|---|---|---|
| 敏感数据脱敏 | OpenClaw | API key/日志/UI 中明文展示 |
| 沙箱逃逸防护 | NanoBot | 符号链接逃逸、只读根路径写入保护 |
| 跨租户泄露 | IronClaw | Hook 框架中跨租户数据泄露（CRITICAL，PR 待合并） |
| 渠道 ACL 校验 | CoPaw | 批量合并 payload 时 acl_sender_id 丢失 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 差异化壁垒 |
|---|---|---|---|---|
| **OpenClaw** | 全栈 Agent 运行时平台 | 需要多通道部署的技术团队 | TS/Node.js, SQLite, 15+ 通道 | 生态规模 + ClawHub Skills 市场 |
| **NanoBot** | 轻量高可靠 Agent 引擎 | 个人开发者 / 注重安全的用户 | TS/Node.js, 确定性测试框架 | 测试基础设施质量 + 安全沙箱 |
| **Hermes Agent** | Desktop-first Agent 体验 | 非技术个人用户 | Electron, Docker 沙箱, OpenViking | Desktop 客户端 + 远程网关模式 |
| **PicoClaw** | 嵌入式/轻量 Agent 运行时 | IoT 和边缘设备开发者 | Go, 低资源占用 | 跨平台编译 + 低内存占用 |
| **NanoClaw** | 多通道消息路由中枢 | 需要 WhatsApp/Signal 部署的用户 | TS/Node.js, Baileys | WhatsApp LID + Signal DM 适配深度 |
| **IronClaw** | 企业级 Agent 编排框架 | 需要子代理持久化的企业用户 | Rust, Reborn 架构, Redis | Rust 性能 + 子代理持久化交付 |
| **LobsterAI** | 桌面端 AI 协作工作台 | 企业协作场景 | Electron, Kit 专家套件市场 | Kit 市场生态 + Cowork 协作 |
| **Moltis** | 多渠道 Agent 消息平台 | 需要 Telegram/Slack/Discord 的个人用户 | TS, 浏览器自动化 | Shadow DOM 穿透 + 浏览器工具 |
| **CoPaw** | 中国市场 Agent 平台 | 飞书/钉钉/QQ 用户 | Python, 插件系统 | 中国市场渠道深度 + 插件 Prompt Section Registry |
| **ZeroClaw** | 终端优先的轻量 Agent | 开发者 / TUI 爱好者 | Rust, TUI-first | 资源占用低 + TUI 体验 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高活跃 + 高压力（快速迭代期）

| 项目 | 日活跃量 | 阶段判断 |
|---|---|---|
| **OpenClaw** | 500+ | 功能扩张与维护瓶颈并存，处于"增长阵痛期" |
| **ZeroClaw** | 85 | v0.8.0 发布冲刺，功能密集落地 |
| **IronClaw** | 90 | Reborn 子代理架构从设计进入实现，架构治理启动 |

### 🟢 第二梯队：高活跃 + 健康节奏（质量巩固期）

| 项目 | 日活跃量 | 阶段判断 |
|---|---|---|
| **NanoBot** | 83 | 测试基础设施爆发式增强，安全加固系统化 |
| **CoPaw** | 58 | 版本发布节奏稳定（v1.1.11-beta.1），前端测试里程碑完成 |
| **LobsterAI** | 18 | 2026.5.28 发布后快速迭代，积压 PR 集中清理 |
| **Hermes Agent** | ~50 | Desktop 客户端密集修复期，Docker 沙箱 + 远程网关稳定性提升 |

### 🟡 第三梯队：中等活跃（打磨期）

| 项目 | 日活跃量 | 阶段判断 |
|---|---|---|
| **PicoClaw** | 24 | v0.2.9 回归修复快速收敛，依赖管理流程成熟 |
| **NanoClaw** | 9 | 多通道路由 Bug 修复为主，语音转录扩展信号浮现 |
| **Moltis** | 6 | Shadow DOM 兼容性 + Telegram 流分离，密集代码打磨 |

### ⚪ 第四梯队：静止/极早期

NullClaw、TinyClaw、ZeptoClaw — 过去 24 小时零活动。

---

## 7. 值得关注的趋势信号

### 趋势一：MCP 可靠性成为生产准入标准

**信号**：今日 6 个项目同时出现 MCP 相关 Issue/PR（断连重连、工具名兼容性、SSRF防护、子代理继承），而 3 个月前 MCP 集成还是"锦上添花"。

**对开发者的启示**：如果你的 Agent 产品依赖 MCP 工具链，**必须**实现：① 断连自动重连 + 会话状态恢复；② 工具名 sanitize（兼容 OpenAI/Anthropic 正则约束）；③ 连接前 SSRF 校验。这三项将成为 2026 年下半年 MCP 集成的"最低可行标准"。

### 趋势二：上下文管理从黑盒走向用户可观测

**信号**：OpenClaw（bootstrap 文件 token 浪费）、CoPaw（`/compact` 忽略模型实际 max_input_length）、NanoClaw（compaction 后输出格式丢失）、PicoClaw（双阈值可视化）——四个项目同时从不同角度攻击上下文管理的"黑盒"问题。

**对开发者的启示**：提供**实时的上下文预算可视化**（已用/总量/压缩阈值）和**可配置的 compaction 策略**不再是增值功能，而是用户留存的基本要求。

### 趋势三：子代理编排是下一个架构分水岭

**信号**：IronClaw 的 Reborn 持久化交付、CoPaw 的子代理生命周期事件、NanoBot 的 MCP 工具继承、OpenClaw 的 Cron 隔离执行器——四个项目在**同一天**推进子代理相关能力。

**对开发者的启示**：单线程 Agent 对话已触及天花板，**子代理编排能力**（持久化交付、取消传播、生命周期事件、资源隔离）将成为 2026 年下半年区分"玩具"和"工具"的关键架构特征。

### 趋势四：Desktop 客户端成为新战场

**信号**：Hermes Agent 在 Desktop 端集中修复 7+ 个独立 bug（自动滚动、CJK IME、TTS、远程网关），LobsterAI 以 Electron + Kit 市场构建桌面协作工作台，CoPaw 推进 Tauri 自动更新。

**对开发者的启示**：WebUI 已趋于同质化，**桌面端体验**（本地模型集成、离线能力、系统级快捷键、自动更新）正在成为差异化竞争的新维度。

### 趋势五：安全加固从"最佳实践"变为"阻塞项"

**信号**：IronClaw 的跨租户泄露 PR（#3931）已搁置 13 天仍未合并；NanoBot 今日集中合并 3 个安全 PR（SSRF、符号链接逃逸、只读路径保护）；OpenClaw 的敏感数据脱敏 Issue 已存在 56 天。

**对开发者的启示**：安全类 PR 的审查延迟是社区可见的"信任损耗点"。建议项目建立**安全 PR 快速通道**（SLA < 72h），并将安全审计纳入 CI/CD 门禁。

### 趋势六：中国市场渠道适配形成独立生态

**信号**：CoPaw 深度适配飞书/钉钉/QQ（扫码授权、交互卡片、conversation_id 碰撞修复），LobsterAI 的 Cowork 功能针对中文语音输入重构，OpenClaw 的飞书 `/compact` 投递修复——中国 IM 平台的适配深度已显著区别于国际项目。

**对开发者的启示**：飞书/钉钉/QQ 的 API 生态（交互卡片、流式输出格式、授权模式）与 Slack/Discord/Telegram 存在显著差异，**中国市场需要独立的适配层设计**，无法简单复用国际渠道代码。

---

*本报告由 OWL 基于 2026-06-05 各项目的 GitHub 公开数据生成。数据抓取截止于报告生成时点，部分项目的精确数字可能因 API 延迟存在微小偏差。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-05

**数据来源：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

过去24小时内，NanoBot 展现出**极高的开发活跃度**：共收到 **77 条 PR 更新**（16 个待合并，61 个已合并/关闭），Issue 更新 **6 条**（1 个活跃，5 个已关闭），但**无新版本发布**。项目正处于一个密集的功能迭代与质量加固期——PR 吞吐量巨大，大量安全、测试覆盖、WebUI 体验和子代理能力的 PR 在同日快速完成合并，说明维护者的审查节奏非常快。值得关注的是，Issue #4168 暴露的 MCP 服务端断连韧性问题和 Issue #1121 的 fallback 超时不触发问题尚无合入修复，是潜在的风险点。

---

## 2. 版本发布

今日无新版本发布，省略。

---

## 3. 项目进展

今日共有 **61 条 PR 合并/关闭**。以下按领域归类最重要的合并成果：

### 🔒 安全与沙箱加固

| PR | 核心内容 |
|---|---|
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | 阻止 exec 工具通过工作区内的相对符号链接逃逸，补全 Workspace 沙箱的边界漏洞 |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | MCP SSE/streamable HTTP 端点探测前增加 SSRF 防护校验，重定向目标同样受策略约束 |

**意义：** 两项安全加固合入后，NanoBot 的工具执行边界和 MCP 连接通道安全性显著提升，特别是 SSRF 防护思路可推广到其他 HTTP 工具路径。

### 🧪 测试基础设施大幅扩充

| PR | 核心内容 |
|---|---|
| [#4189](https://github.com/HKUDS/nanobot/pull/4189) | 用确定性时钟、事件驱动和任务排空替换测试中的 timing-based wait，增强 CI 稳定性 |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) | 新增可复用的 scripted agent runner 测试回路，覆盖完整工具调用循环（模型→工具→结果→最终响应→usage 累计） |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) | 补充 runner 层对 refusal/content_filter/error 等非可执行 finish reason 的行为断言 |
| [#4193](https://github.com/HKUDS/nanobot/pull/4193) | 新增 memory 生命周期测试 harness，覆盖会话归档、Consolidator、history.jsonl、GitStore 正向路径和降级回退路径 |
| [#4194](https://github.com/HKUDS/nanobot/pull/4194) | 重构 SDKCaptureHook 改用 run-level hook 快照数据，消除逐轮状态累积带来的测试不确定性 |

**意义：** 测试基础设施集中爆发式增强，为后续各功能模块的可靠性保障奠定坚实基础。

### 🔧 核心架构与生命周期

| PR | 核心内容 |
|---|---|
| [#4176](https://github.com/HKUDS/nanobot/pull/4176) | 新增 run-level Agent 钩子生命周期（before_run / after_run / on_error / on_finally），CompositeHook 广播和各类异常路径均已覆盖 |
| [#4027](https://github.com/HKUDS/nanobot/pull/4027) | 修复 MCP 断连无法重连的关键 Bug：重置 `_mcp_connected` 标志位并加入重连回调 |

**意义：** 钩子体系的完善让外部观测和扩展 Agent 行为变得更规范；MCP 重连修复直接对应 Issue #4168 的根因。

### 🌐 WebUI / CLI 体验

| PR | 核心内容 |
|---|---|
| [#3966](https://github.com/HKUDS/nanobot/pull/3966) | 修复 CLI 生成图片资源在 WebUI 中的渲染问题；安装/更新/卸载 CLI App 后即时刷新可用列表 |
| [#4164](https://github.com/HKUDS/nanobot/pull/4164) | 修复 `uv tool install` 场景下 `cliapp` pip 安装失败（`No module named pip`）— 回退至 `uv pip` 命令，对应 Issue #4158 |
| [#4163](https://github.com/HKUDS/nanobot/pull/4163) | 为用户消息添加 "Fork from here" 功能，支持从历史消息分叉创建新会话并记录溯源元数据 |

### ☁️ Provider 与认证

| PR | 核心内容 |
|---|---|
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) | Azure OpenAI Provider 新增 Azure AAD 基于身份的认证路径（对应 Issue #4125） |
| [#3984](https://github.com/HKUDS/nanobot/pull/3984) | 修复 OpenAI 兼容 API（如 GLM-4.7、Kimi 2.6 via antchat）的工具调用 ID 被内部短 ID 覆盖导致不匹配的问题 |

### 📐 整理与质量提升

| PR | 核心内容 |
|---|---|
| [#4191](https://github.com/HKUDS/nanobot/pull/4191) | 增强 memory 管理（细节待补充） |

---

## 4. 社区热点

### Issue #912 — [Feat] 支持按任务类型配置不同模型
链接：[HKUDS/nanobot#912](https://github.com/HKUDS/nanobot/issues/912)

- **状态：** OPEN（stale），创建于 2026-02-20，仍在活跃
- **反馈：** 👍 3，4 条评论
- **诉求分析：** 用户希望能针对对话、工具调用、浏览器操作等不同任务类型配置独立模型，而非全局单一模型。这是企业级用户和高阶个人用户的常见诉求（例如对话用小模型节约成本，推理/工具调用用强模型保证质量）。Issue 长期处于 stale 状态未被关闭但无 PR 跟进，说明需求已获得认可但优先级较低或实现方案仍在讨论中。

### Issue #1121 — LLM 超时 / 503 时 Fallback 模型未被触发
链接：[HKUDS/nanobot#1121](https://github.com/HKUDS/nanobot/issues/1121)

- **状态：** CLOSED，创建于 2026-02-24
- **反馈：** 👍 3，3 条评论
- **诉求分析：** 用户配置了 `agents.defaults.fallbacks`，但在主要模型超时（如 Gemini 600 秒后返回 503）时，fallback 链未生效，直接向用户抛出错误。该 Issue 在今日被关闭——推测可能是因为实现复杂度或依赖 litellm 行为限制导致短期内不可行，但数据中未看到对应的修复 PR 合入时间线，需关注关闭原因是否为 "wontfix" 或通过其他方式解决。

---

## 5. Bug 与稳定性

### P0 — 高严重度

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#4168](https://github.com/HKUDS/nanobot/issues/4168) | MCP streamable 服务器在随机会话终止后无法重连（`McpError: Session terminated`），重启 nanobot 可临时修复 | **CLOSED 但根因仍在** | [#4027](https://github.com/HKUDS/nanobot/pull/4027)（已合并，但 Issue 关闭时间疑有差异，建议确认修复是否覆盖该路径） |

**分析：** Issue #4168 反映的 MCP 会话断连问题影响所有依赖 streamable MCP 服务的长时任务。PR #4027 今日合并，引入了 `_mcp_connected` 状态重置和重连回调机制，理论上应覆盖该路径，但 Issue #4168 本身在 2026-06-02 才创建并于今日关闭——需要验证 #4027 的影响范围是否确实匹配。

### P1 — 中严重度

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#4158](https://github.com/HKUDS/nanobot/issues/4158) | WebUI CLI App 安装失败——`uv tool install` 方式下 `sys.executable` 对应的 Python 不含 `pip` 模块 | **已修复** | [#4164](https://github.com/HKUDS/nanobot/pull/4164)（已合并） |
| [#1121](https://github.com/HKUDS/nanobot/issues/1121) | Fallback 模型链在 LLM 超时/503 时不生效 | **已关闭** | **无明确修复 PR**（⚠️ 需关注关闭原因） |

### P2 — 低严重度

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#3980](https://github.com/HKUDS/nanobot/issues/3980) | OpenAI 兼容 API 工具调用 ID 不匹配 | **已修复** | [#3984](https://github.com/HKUDS/nanobot/pull/3984)（已合并） |
| [#4178](https://github.com/HKUDS/nanobot/issues/4178) | WebUI 缺少 Cmd/Ctrl+Shift+O 新建聊天快捷键 | **已关闭** | 无对应 PR 合入可见 |

---

## 6. 功能请求与路线图信号

根据活跃 Issues 和待合并 PRs，以下为可能的下一版本方向判断：

| 方向 | 信号来源 | 成熟度 |
|---|---|---|
| **桌面端 Shell** | PR [#4195](https://github.com/HKUDS/nanobot/pull/4195)（OPEN）— 正在开发桌面宿主层，共享现有 WebUI 组件 | 🔄 开发中 |
| **子代理 MCP 工具继承** | PR [#4192](https://github.com/HKUDS/nanobot/pull/4192)（OPEN）— 允许 spawned 子代理继承主代理的 live MCP 工具，默认关闭 | 🔄 开发中 |
| **Skill 发现命令** | PR [#3968](https://github.com/HKUDS/nanobot/pull/3968)（OPEN）— 新增 `/skill` 斜杠命令列出已启用技能 | 🔄 审查中 |
| **工具调用校验严格化** | PR [#4190](https://github.com/HKUDS/nanobot/pull/4190)（OPEN）— 近失工具名匹配和非标量参数直接返回显式错误，减少误执行 | 🔄 开发中 |
| **按任务类型配置模型** | Issue [#912](https://github.com/HKUDS/nanobot/issues/912)— stale 状态但需求合理，可能随桌面端和子代理功能成熟后一并考虑 | ⏳ 远期 |
| **只读根路径保护** | PR [#4053](https://github.com/HKUDS/nanobot/pull/4053)（OPEN）— 阻止 write/edit 工具继承 media-dir 写入权限 | 🔄 审查中 |

---

## 7. 用户反馈摘要

从今日 Issues 及 PR 讨论中提炼的关键用户声音：

- **MCP 服务韧性是实际高频痛点。** Issue #4168 和 PR #4027 共同印证：用户在生产环境中依赖 MCP 工具链，会话断开且无法自动恢复会直接中断工作流。这说明 MCP 连接的健壮性是 NanoBot 从"可演示"走向"可生产"的关键门槛。
- **`uv tool install` 场景未被早期测试充分覆盖。** Issue #4158 暴露了 `CliAppManager` 硬编码 `python -m pip` 的假设问题。`uv` 生态的快速普及正在重塑 Python 工具的交付方式，NanoBot 对此的适配速度决定了新用户的上手体验。
- **OpenAI 兼容 API 生态的碎片化挑战。** PR #3984 和 Issue #3980 反映了 GLM-4.7、Kimi 2.6 等国内模型提供商在工具调用 ID 规范上的不一致性。NanoBot 需要在此类兼容层上做更多防御性编程。
- **Azure 企业用户有 AAD 认证需求。** Issue #4125 + PR #4126 的组合说明 NanoBot 正在进入企业用户的视野，使用场景从个人开发者向企业订阅环境延伸。

---

## 8. 待处理积压

以下 Issue/PR 值得关注，建议维护者给出明确回应：

| # | 标题 | 创建 | 状态 | 风险 |
|---|---|---|---|---|
| [#912](https://github.com/HKUDS/nanobot/issues/912) | 按任务类型配置不同模型 | 2026-02-20 | OPEN (stale) | 长期 stale 可能导致社区贡献者流失或重复提 Issue |
| [#1121](https://github.com/HKUDS/nanobot/issues/1121) | Fallback 超时不生效 | 2026-02-24 | CLOSED（无可见修复 PR） | 需明确关闭原因；若为 wontfix，建议说明替代方案 |
| [#4195](https://github.com/HKUDS/nanobot/pull/4195) | Desktop shell 首次结构化开发 | 2026-06-04 | OPEN | 涉及新架构方向，建议尽早 review 以避免大范围重构 |
| [#4192](https://github.com/HKUDS/nanobot/pull/4192) | 子代理 MCP 工具继承 | 2026-06-04 | OPEN | 功能设计有安全与权限考量，需维护者明确默认策略 |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | MCP SSRF 防护 | 2026-05-31 | OPEN | 安全类 PR 应优先合并 |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | 只读根路径写入保护 | 2026-05-29 | OPEN | 同上，安全加固类应加速审查 |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) | /skill 命令列出技能 | 2026-05-23 | OPEN | 纯用户体验改进，影响面广，合入成本低 |

---

**总结：** 2026-06-05 是 NanoBot 的高产日。61 个 PR 的审查和合并节奏体现了维护团队极强的执行力。安全加固（SSRF防护、符号链接逃逸、只读路径保护）、测试基础设施（确定性测试框架、runner test harness）和 MCP 可靠性（重连机制）是这个冲刺周期的主旋律。接下来需要重点关注 Issue #1121 关闭原因确认、desktop/desktop shell 方向的架构评审节奏，以及积压安全 PR 的优先合入。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-05 | 数据来源：github.com/NousResearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 今日处于**高活跃维护期**，Issues 与 PR 更新量均达 50 条/24h，处于同步高频处理节奏。社区修复 Desktop 客户端的意愿强烈，今日合并/关闭的 18 条 PR 中约 70% 为 bug fix，覆盖 Docker 沙箱恢复、会话持久化、远程网关鉴权、Desktop 会话标题等 5 月中旬集中积累的问题。Desktop 客户端（v0.15.1）是本周用户反馈最密集的组件，远程网关模式下的会话稳定性、自动更新逻辑、UI 交互（自动滚动、CJK IME、TTS）等多个独立 bug 在 48 小时内集中涌现。项目整体健康度良好：核心维护者（`teknium1`、`benbarclay`、`ethernet8023`）活跃，历史积压的"salvage PR"策略在高效消化早期贡献者的遗留工作。

---

## 2. 版本发布

无新版本发布。（最近版本仍为 Hermes Agent v0.15.1，2026.5.29。）

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| [#39002](https://github.com/NousResearch/hermes-agent/pull/39002) | `fix(openviking): scope memory writes per-agent` | ✅ MERGED | **多智能体隔离修复**：OpenViking 记忆写入现在按 agent 作用域隔离，解决了 #36969 中跨租户数据泄漏问题。（salvage of #37279） |
| [#39415](https://github.com/NousResearch/hermes-agent/pull/39415) | `fix(docker): recover from out-of-band container removal` | ✅ MERGED | **Docker 沙箱自愈**：持久化容器被外部移除后，gateway 不再无限循环报"No such container"，而是自动重建。（salvage of #36631，关闭 #36266） |
| [#39410](https://github.com/NousResearch/hermes-agent/pull/39410) | `fix(desktop): rename session via session.title RPC` | ✅ MERGED | **Desktop 会话命名修复**：`/title` 命令现在正确调用 `session.title` RPC，修复全平台 404 问题。（关闭 #38508，替代 #38576） |
| [#39409](https://github.com/NousResearch/hermes-agent/pull/39409) | `feat(models): add qwen/qwen3.7-plus` | ✅ MERGED | **新模型入库**：Qwen3.7-Plus 加入 Nous Portal 和 OpenRouter 精选模型目录。 |
| [#39402](https://github.com/NousResearch/hermes-agent/pull/39402) | `fix(desktop): offer remote sign-in on gated-gateway boot failure` | ✅ MERGED | **远程网关鉴权流程改进**：远程 dashboard 重启后不再陷入重试循环，而是正确弹出登录入口。 |
| [#39405](https://github.com/NousResearch/hermes-agent/pull/39405) | `Switch model order` | ✅ MERGED | **模型选择器 UX**：模型列表优先展示 HA 列表再展示 Portal 列表，改善默认可见的模型排序。 |
| [#39128](https://github.com/NousResearch/hermes-agent/pull/39128) | `docs: dashboard/gateway prerequisites for desktop remote` | ✅ MERGED | **文档更新**：远程后端文档明确说明 Desktop 连接的是 `hermes dashboard` 而非 gateway，降低用户理解成本。 |
| [#39066](https://github.com/NousResearch/hermes-agent/pull/39066) | `fix(file): verify file exists after write to catch CWD-drift` | ✅ MERGED | **文件写入可靠性**：`write_file` 后验证文件是否存在于预期路径，捕获长会话中的 CWD 漂移问题。（salvage of #26336） |
| [#26227](https://github.com/NousResearch/hermes-agent/pull/26227) | `fix(openrouter): show all tool-capable models from live API` | ✅ MERGED | **OpenRouter 模型选择器扩展**：从硬编码 ~31 个模型改为实时获取所有支持工具的模型（400+）。 |

**项目整体进展评估**：今日 9 个合并 PR 中有 5 个是 bug fix（集中在 Desktop + Docker），2 个新功能/模型入库，2 个文档与工具链改进。"Docker 沙箱 + Desktop 远程网关"这条用户主路径的稳定性在本日获得显著提升。

---

## 4. 社区热点

### 🔥 #23717 — RFC: Pluggable SessionDB Provider — PostgreSQL, MySQL, and Beyond
- **作者**：DoubleDD | **评论**：7 | **标签**：type/feature, comp/agent
- **链接**：[Issue #23717](https://github.com/NousResearch/hermes-agent/issues/23717)
- **核心诉求**：当前 SQLite `state.db` 在热更新（`git pull`/`hermes update`）时会产生"死亡循环"——文件被锁定或损坏。提案要求引入可插拔的 SessionDB Provider 接口，支持 PostgreSQL、MySQL 等生产级数据库，为多实例部署和高可用场景铺路。
- **分析**：这是基础设施级别的重构提案，由社区成员自发提交 RFC 形式的 Tracking Issue，表明 Hermes 正在面临从"个人工具"到"企业级部署"的架构瓶颈。维护者尚未回应，但此 Issue 会随着多机/多 agent 场景增多而重要性提升。

### 🐛 #34120 — `[Bug]: cronjob tool: create action always fails with "schedule is required for create"`
- **作者**：ftt1211 | **评论**：5 | **标签**：type/bug, comp/cron, provider/xai, P3
- **链接**：[Issue #34120](https://github.com/NousResearch/hermes-agent/issues/34120)
- **核心诉求**：使用 Grok 4.3 + Discord 时，用户让 agent 创建定期新闻摘要 cronjob，但 `cronjob(action=create)` 持续报错"schedule is required"——即使用户已通过自然语言提供了参数。出在 xAI provider 的工具参数映射层。

### 🖥️ #37549 — `[Bug]: Flickering on the Hermes Desktop app for chat transcripts`
- **作者**：maxsonderby | **评论**：5 | **👍**：5 | **标签**：type/bug, P3
- **链接**：[Issue #37549](https://github.com/NousResearch/hermes-agent/issues/37549)
- **核心诉求**：桌面端聊天窗口在回复流中和回复结束后出现跳动、自动滚到底部与用户手动滚动之间的"拉锯战"。5 赞表示此问题影响面广。
- **相关**：Issue [#38272](https://github.com/NousResearch/hermes-agent/issues/38272)（类似报告，4 条评论）进一步确认此行为存在。

### 🖥️ #38272 — `[Bug]: Desktop Chat window auto-scrolls erratically and fights user input during text streaming`
- **作者**：lingordone | **评论**：4 | **标签**：type/bug, P3
- **链接**：[Issue #38272](https://github.com/NousResearch/hermes-agent/issues/38272)
- **核心诉求**：与 #37549 同属"自动滚动"问题，补充描述了在流式输出期间用户用鼠标滚轮/触控板向上滚时，窗口持续强制回滚到底部的问题。

---

## 5. Bug 与稳定性

### 🔴 P2 — 高优先级

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#38115](https://github.com/NousResearch/hermes-agent/issues/38115) | Remote gateway mode (macOS): 会话无法持久保持，gateway SIGTERM → WebSocket 1012 循环；auto-updater 损坏安装 | OPEN | 无 |
| [#39365](https://github.com/NousResearch/hermes-agent/issues/39365) | Desktop 误导性错误："OpenRouter API key missing" 实际是 401 API_SERVER_KEY 鉴权失败 | OPEN | 无 |
| [#39332](https://github.com/NousResearch/hermes-agent/issues/39332) | Mac 安装失败：`npm run pack` 阶段报错 | OPEN | 无 |
| [#39333](https://github.com/NousResearch/hermes-agent/issues/39333) | Desktop 在 detached HEAD 上卡住并报"cancelled by user" | OPEN | 无 |

### 🟡 P3 — 中高优先级

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) | Desktop 聊天窗口跳动/滚动跳动 (👍5) | OPEN | 无 |
| [#38272](https://github.com/NousResearch/hermes-agent/issues/38272) | Desktop 流式输出时自动滚动与用户拉锯 | OPEN | 无 |
| [#34120](https://github.com/NousResearch/hermes-agent/issues/34120) | cronjob create 持续报"schedule is required" (xAI provider) | OPEN | 无 |
| [#39349](https://github.com/NousResearch/hermes-agent/issues/39349) | `~/.hermes/.env` 覆盖 `HERMES_DASHBOARD_SESSION_TOKEN` 导致 WS 失败 | OPEN | 无 |
| [#38873](https://github.com/NousResearch/hermes-agent/issues/38272) | Desktop 远程 gateway 验证成功后回退到本地后端 | OPEN | 无 |
| [#39292](https://github.com/NousResearch/hermes-agent/issues/39292) | Desktop TTS "Read aloud" 间歇性 15s 超时 + 功能入口隐蔽 | OPEN | 无 |
| [#38078](https://github.com/NousResearch/hermes-agent/issues/38078) | Desktop 粘贴图片在远程 gateway 模式下失败（本地路径被发送到远程） | OPEN | 无 |
| [#39231](https://github.com/NousResearch/hermes-agent/issues/39231) | Desktop CJK IME 输入期间发送按钮不出现 | OPEN | 无 |
| [#38901](https://github.com/NousResearch/hermes-agent/issues/38901) | Desktop 切换会话时模型显示不刷新 | OPEN | 无 |
| [#38858](https://github.com/NousResearch/hermes-agent/issues/38858) | Desktop pinned sessions 重启后丢失 | OPEN | 无 |
| [#39339](https://github.com/NousResearch/hermes-agent/issues/39339) | Desktop 更新安装后版本号不变（macOS 更新循环） | OPEN | 无 |

### ⚪ 已关闭（近日修复）

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#36969](https://github.com/NousResearch/hermes-agent/issues/36969) | OpenViking 记忆跨租户写入 | [#39002](https://github.com/NousResearch/hermes-agent/pull/39002) ✅ |
| [#36266](https://github.com/NousResearch/hermes-agent/issues/36266) | Docker 持久容器被移除后 gateway 死循环 | [#39415](https://github.com/NousResearch/hermes-agent/pull/39415) ✅ |
| [#38508](https://github.com/NousResearch/hermes-agent/issues/38508) | Desktop `/title` 不生效 | [#39410](https://github.com/NousResearch/hermes-agent/pull/39410) ✅ |
| [#37981](https://github.com/NousResearch/hermes-agent/issues/37981) | Dashboard token 缺失时 kanban 模块未 fail closed（安全） | 已修复 |

---

## 6. 功能请求与路线图信号

### 高置信度（已有活跃 PR / 明确合并路径）

| 需求 | Issue | 相关 PR |
|------|-------|---------|
| Desktop 会话列表分类：将 cron/自主会话与手动聊天分离 | [#38894](https://github.com/NousResearch/hermes-agent/issues/38894) | 无（新建，但场景明确） |
| Desktop 状态栏快速切换 workspace | [#38849](https://github.com/NousResearch/hermes-agent/issues/38849) | 无 |
| Desktop 国际化：轻量 i18n + 简体中文 | — | [#38206](https://github.com/NousResearch/hermes-agent/pull/38206) 开放中 |
| Dashboard `--allowed-hosts` 反向代理支持 | [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) | 无 |
| 群组聊天平台的"观察但不触发"模式（分离存储与 LLM 调用） | [#15621](https://github.com/NousResearch/hermes-agent/issues/15621) | 无 |

### 中期信号（RFC 级别，可能影响架构）

| 需求 | Issue | 
|------|-------|
| 可插拔 SessionDB Provider（PostgreSQL/MySQL） | [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) |
| 一等公民 Loop Contract：cron-backed agent 循环的声明式预算/停止/刷新 | [#21172](https://github.com/NousResearch/hermes-agent/issues/21172) |

**判断**：Desktop 会话管理和 i18n 是最可能在下一版本落地的功能，因为用户基数大且已有 PR 在推进。SessionDB 可插拔化则属于架构升级，需要 RFC 评审周期。

---

## 7. 用户反馈摘要

### 😤 核心痛点

1. **远程网关模式是最大痛点群**：至少 7 条独立 Issue 涉及远程网关（#38115、#39349、#39365、#38078、#38873、#38871、#39333），覆盖 macOS 和 Windows，问题从"会话断开循环"到"鉴权不透明"到"自动更新损坏安装"。这表明远程网关虽然在功能上可用，但**生产可靠性尚未达到桌面稳定版标准**。

2. **Desktop 自动滚动是最高频 UI 抱怨**：2 条独立 Issue（#37549 + #38272）共 9 条评论 + 5 赞，用户在"阅读中"和"强制滚动"之间体验极差。这是一个**纯前端交互 bug**，不依赖后端，修复成本低但体验收益高。

3. **错误信息误导性**：#39365 中用户被告知"OpenRouter API key missing"，但实际上 API key 是正确的，真正的失败在 gateway auth。这种二次误导增加了用户排查成本。

4. **macOS 安装/更新可靠性**：#39332（安装失败）、#39339（版本号不变陷入更新循环）、#38871（xattr 警告）——打包管线在 macOS 上问题集中。

### ✅ 满意 / 正向信号

- Docker 沙箱自愈修复（#39415）和 OpenViking 跨租户隔离修复（#39002）的合并，表明核心稳定性问题得到响应。
- Qwen3.7-Plus 迅速入库（#39409），模型生态更新节奏快。
- 文档改进 PR #39128 精准降低了用户对"remote backend"概念的理解门槛。

### 📍 典型使用场景

- **远程 VPS + Tailscale + 本地 Desktop**：高频部署模式，用户期望开箱即用的远程连接体验（#38115、#38873、#39349）。
- **Discord 上的 cronjob 自动化**：用户尝试用自然语言让 agent 创建定时任务（#34120），表明非技术用户在使用 agentic 功能。
- **多 agent 共享 OpenViking 记忆**：企业级部署场景（#36969），已修复。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或为高优先级但尚未分配 fix，建议维护者关注：

| # | 类型 | 年龄 | 摘要 | 建议 |
|---|------|------|------|------|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | RFC | 25 天 | Pluggable SessionDB Provider | 需要核心维护者回应 RFC 方向，决定是否纳入路线图 |
| [#15621](https://github.com/NousResearch/hermes-agent/issues/15621) | Feature | 41 天 | 群组聊天"observe but don't invoke"模式 | 架构设计讨论，需要维护者定调 |
| [#21172](https://github.com/NousResearch/hermes-agent/issues/21172) | Feature | 29 天 | 一等公民 Loop Contract for cron-backed agent | 与 Boris Cherny & Claude Code workflow 趋势对齐，战略价值高 |
| [#34120](https://github.com/NousResearch/hermes-agent/issues/34120) | Bug | 8 天 | cronjob create 在 xAI provider 下失败 | 可能影响所有 xAI 用户，建议提升至 P2 |
| [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) | Bug | 3 天 | Desktop 自动滚动跳动 (👍5) | 高频用户体验问题，修复成本低，建议 v0.15.2 优先修复 |
| [#38115](https://github.com/NousResearch/hermes-agent/issues/38115) | Bug | 2 天 | Remote gateway session won't hold (macOS) | 核心远程工作流阻断，需尽快复现并修复 |

---

*本报告由 OWL 自动生成，数据截至 2026-06-05。数据来源于 GitHub Issues/PRs 公开 API，分析基于 OWL 对 AI Agent 开源项目的理解。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 — 2026-06-05**

---

### 1. 今日速览

PicoClaw 今日活跃度较高，共处理 **5 条 Issue 更新**（1 开/4 闭）和 **19 条 PR 更新**（7 待合并/12 已合并或关闭），无新版本发布。项目处于快速迭代期，重点聚焦于 **v0.2.9 回归修复**、**依赖升级适配**和**稳定性增强**。多个高优先级 Bug 在 24 小时内完成从报告到修复合并的全流程，响应效率显著。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

今日合并/关闭的 PR 主要集中在以下方向：

| 方向 | 代表 PR | 说明 |
|---|---|---|
| **Singleton PID 竞态修复** | [#3000](https://github.com/sipeed/picoclaw/pull/3000) | 修复 `isProcessRunning()` 仅检查 PID 存在性而未验证进程身份的问题，防止因 PID 被系统复用（如 `systemd-resolved`）导致 Gateway 启动崩溃循环。对应 Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720)。 |
| **Web UI 会话历史污染修复** | [#2992](https://github.com/sipeed/picoclaw/pull/2992) | 修复 v0.2.9 升级后新会话错误继承旧消息的问题。根因是 `PromoteAliasHistory` 将 `agent:main:main` 的迁移内容复制到每个新会话。对应 Issue [#2972](https://github.com/sipeed/picoclaw/issues/2972)。 |
| **Codex OAuth 工具调用丢失修复** | [#3007](https://github.com/sipeed/picoclaw/pull/3007) | 修复使用 Codex OAuth + `gpt-5.5` 时，流式响应中 `function_call` 事件被丢弃的问题。对应 Issue [#3006](https://github.com/sipeed/picoclaw/issues/3006)。 |
| **依赖升级与适配** | [#3005](https://github.com/sipeed/picoclaw/pull/3005), [#3008](https://github.com/sipeed/picoclaw/pull/3008), [#3004](https://github.com/sipeed/picoclaw/pull/3004), [#3003](https://github.com/sipeed/picoclaw/pull/3003), [#2963](https://github.com/sipeed/picoclaw/pull/2963) | Dependabot 批量升级 `larksuite/oapi-sdk-go`、`aws-sdk-go-v2/bedrockruntime`、`modernc.org/sqlite` 等依赖，其中 [#3008](https://github.com/sipeed/picoclaw/pull/3008) 作为 [#3005](https://github.com/sipeed/picoclaw/pull/3005) 的 follow-up 修复了 `ReceiveIdTypeChatId` → `CreateMessageV1ReceiveIDTypeChatId` 的重命名导致的编译错误。 |
| **Makefile 构建修复** | [#2999](https://github.com/sipeed/picoclaw/pull/2999), [#2976](https://github.com/sipeed/picoclaw/pull/2976) | 修复 `go env GOVERSION` 返回值含空格（如 `go1.25.10 X:nodwarf5`）时导致 `-ldflags` 链接参数断裂的问题。 |
| **文档更新** | [#2995](https://github.com/sipeed/picoclaw/pull/2995) | 将 README News 从 v0.2.4 补全至 v0.2.9，关闭 Issue [#2981](https://github.com/sipeed/picoclaw/issues/2981)。 |
| **Exec 工具错误处理** | [#2996](https://github.com/sipeed/picoclaw/pull/2996) | 修复 `pkg/tools/shell.go` 中 7 处 `json.Marshal` 错误被静默忽略的问题，改为返回 `ErrorResult`。 |

**整体评估**：项目在 v0.2.9 发布后快速收敛回归问题，稳定性显著提升。依赖管理流程成熟（Dependabot + 人工适配 PR 配合）。

---

### 4. 社区热点

| Issue/PR | 热度指标 | 分析 |
|---|---|---|
| **[#2720](https://github.com/sipeed/picoclaw/issues/2720)** — Singleton PID check doesn't verify process identity | 8 条评论，高优先级 | 核心稳定性问题。用户报告 Gateway 因 PID 被系统进程复用而陷入崩溃循环。社区讨论深入，涉及 Unix `Signal(0)` 和 Windows `OpenProcess` 的局限性。已由 [#3000](https://github.com/sipeed/picoclaw/pull/3000) 修复。 |
| **[#2972](https://github.com/sipeed/picoclaw/issues/2972)** — Web UI message chaos after v0.2.9 upgrade | 2 条评论 | 升级后用户体验严重受损，新会话被旧消息污染。反映出版本升级时数据迁移逻辑的边界条件处理不足。已由 [#2992](https://github.com/sipeed/picoclaw/pull/2992) 修复。 |
| **[#3006](https://github.com/sipeed/picoclaw/issues/3006)** — Codex OAuth GPT-5.5 drops tool calls | 0 条评论（当日报告当日修复） | 特定 AI 提供商 + 模型组合下的工具调用失效，影响高级用户的工作流。已由 [#3007](https://github.com/sipeed/picoclaw/pull/3007) 修复。 |

---

### 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Bug 描述 | Issue | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **高** | Singleton PID 未验证进程身份，导致 Gateway 崩溃循环 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | ✅ 已关闭 | [#3000](https://github.com/sipeed/picoclaw/pull/3000) |
| 🔴 **高** | v0.2.9 升级后 Web UI 新会话附加旧消息历史 | [#2972](https://github.com/sipeed/picoclaw/issues/2972) | ✅ 已关闭 | [#2992](https://github.com/sipeed/picoclaw/pull/2992) |
| 🟡 **中** | Codex OAuth + gpt-5.5 工具调用丢失 | [#3006](https://github.com/sipeed/picoclaw/issues/3006) | ✅ 已关闭 | [#3007](https://github.com/sipeed/picoclaw/pull/3007) |
| 🟡 **中** | OneBot 群聊回复错误使用 `send_private_msg` 而非 `send_group_msg` | [#3002](https://github.com/sipeed/picoclaw/issues/3002) | 🟠 **待处理** | 无 |
| 🟢 **低** | Makefile 中 `GOVERSION` 含空格导致构建失败 | — | ✅ 已关闭 | [#2999](https://github.com/sipeed/picoclaw/pull/2999), [#2976](https://github.com/sipeed/picoclaw/pull/2976) |

**待关注**：Issue [#3002](https://github.com/sipeed/picoclaw/issues/3002)（OneBot 群聊路由错误）目前无修复 PR，影响 NapCat 等 OneBot 实现的用户。

---

### 6. 功能请求与路线图信号

| 方向 | 代表 PR/Issue | 状态 | 分析 |
|---|---|---|---|
| **上下文管理增强** | [#2985](https://github.com/sipeed/picoclaw/pull/2985) — `/context` 命令显示 summarize 和 compress 双阈值 | 🟠 Open | 用户期望更透明的上下文预算管理。此 PR 直接回应 [#2968](https://github.com/sipeed/picoclaw/issues/2968)，可能纳入下一版本。 |
| **Channel 安全配置合并逻辑** | [#2956](https://github.com/sipeed/picoclaw/pull/2956) — 修复 `security.yml` 合并时 `enabled: true` 被覆盖 | 🟠 Open | 影响 Telegram 等渠道的用户体验，配置合并逻辑需更精细。 |
| **WhatsApp 原生模式支持** | [#2934](https://github.com/sipeed/picoclaw/pull/2934) — 允许 `use_native: true` 的 WhatsApp 配置 | 🟠 Open (stale) | 扩展 WhatsApp 部署灵活性，但已标记 stale，需维护者确认是否继续推进。 |
| **Anthropic 模型 ID 修正** | [#2947](https://github.com/sipeed/picoclaw/pull/2947) — `claude-sonnet-4.6` → `claude-sonnet-4-6` | 🟠 Open (stale) | 修复导致 HTTP 404 的模型 ID 错误，低风险高价值，建议尽快合并。 |
| **Workspace Guard 无协议 URL 放行** | [#3001](https://github.com/sipeed/picoclaw/pull/3001) — 允许 `curl wttr.in/Beijing` 等 scheme-less URL | 🟠 Open | 提升工具调用的灵活性，避免误拦截合法命令。 |

---

### 7. 用户反馈摘要

**痛点**：
- **升级体验**：v0.2.9 引入了会话历史污染（[#2972](https://github.com/sipeed/picoclaw/issues/2972)），用户明确表达了对升级后"新会话不新"的困惑。
- **平台兼容性**：FreeBSD 用户报告了 Web UI 问题（[#2972](https://github.com/sipeed/picoclaw/issues/2972)），Go 工具链版本字符串差异导致构建失败（[#2999](https://github.com/sipeed/picoclaw/pull/2999), [#2976](https://github.com/sipeed/picoclaw/pull/2976)），反映跨平台测试覆盖不足。
- **AI 提供商兼容性**：Codex OAuth + gpt-5.5 的工具调用丢失（[#3006](https://github.com/sipeed/picoclaw/issues/3006)）和 OneBot 群聊路由错误（[#3002](https://github.com/sipeed/picoclaw/issues/3002)）表明多提供商适配仍需加强。

**满意点**：
- 多个高优先级 Bug 在 24 小时内完成修复合并，响应速度获得社区认可。
- Dependabot 依赖升级流程顺畅，人工适配 PR 及时跟进。

**使用场景**：
- 用户广泛使用 Web UI、OneBot（NapCat）、Telegram、WhatsApp 等多渠道接入。
- 高级用户依赖工具调用（exec、workspace guard）和上下文管理功能。

---

### 8. 待处理积压

| 项目 | 类型 | 创建/最后更新 | 说明 |
|---|---|---|---|
| **[#3002](https://github.com/sipeed/picoclaw/issues/3002)** — OneBot 群聊回复路由错误 | Issue | 2026-06-04 | 影响 NapCat 用户，无修复 PR，需优先处理。 |
| **[#2813](https://github.com/sipeed/picoclaw/pull/2813)** — Singleton PID 验证（早期版本） | PR | 创建: 2026-05-07 | 已被 [#3000](https://github.com/sipeed/picoclaw/pull/3000) 替代，建议关闭。 |
| **[#2947](https://github.com/sipeed/picoclaw/pull/2947)** — Claude 模型 ID 修正 | PR | 创建: 2026-05-26 (stale) | 低风险修复，建议尽快合并或关闭。 |
| **[#2934](https://github.com/sipeed/picoclaw/pull/2934)** — WhatsApp 原生模式 | PR | 创建: 2026-05-24 (stale) | 需维护者确认是否继续推进。 |
| **[#2962](https://github.com/sipeed/picoclaw/pull/2962)** — Anthropic SDK 升级 1.26.0 → 1.46.0 | PR | 创建: 2026-05-28 | 大版本跨度升级，需充分测试。 |

---

**项目健康度评估**：🟢 **良好**。v0.2.9 回归问题快速收敛，依赖管理流程成熟，社区响应及时。建议加强跨平台测试覆盖和多提供商兼容性测试，减少升级引入的回归风险。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 · 2026-06-05

---

## 1. 今日速览

NanoClaw 今日处于**中高活跃度**的开发节奏中。过去 24 小时内无新版本发布，但 PR 活动密集（8 条更新，5 条待合并），表明社区贡献者正在推进多项通道修复和功能增强工作。今日仅新增 1 条 Issue，为低质量非技术类帖子。整体来看，项目当前重心集中在多通道消息路由的 Bug 修复（WhatsApp LID 群组兼容性、Signal DM 路由）和语音转录功能的扩展上，技术健康度良好。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展（合并/关闭的 PR）

今日有 **3 条 PR 被合并/关闭**：

| PR | 类型 | 概要 |
|---|---|---|
| **#2687** [CLOSED] Trip agent | 功能 Skill | 作者提交了一个旅行 Agent Skill，但随即自行关闭，属于无效提交，不构成功能损失。 |
| **#2633** [CLOSED] Fix/whatsapp self destruct and shutdown auth wipe | 🔴 Bug Fix | 修复了 WhatsApp 在 Baileys 7.x 上两个结构性 Bug：适配器错误自销毁已配对的会话，以及关闭流程中的认证数据清除逻辑缺陷。**这是今日最重要的合并项**——此前使用 `WHATSAPP_PHONE_NUMBER` 配置的 WhatsApp 安装会因会话被意外删除而反复失联，直接影响所有 WhatsApp 用户的稳定性。 |
| **#104** [CLOSED] fix: replace `as any` casts with proper BoomError type | ⚡ 代码质量 | 将两处 `as any` 类型断言替换为正确的 `BoomError` 接口定义（位于 `types.ts`），提升类型安全性。该 PR 自 2026-02-06 创建至今方合并，属于积压清理性质。 |

**整体点评**：#2633 的合并是今日最大进展——解除了 WhatsApp 通道上一个长期存在的会话稳定性隐患，直接提升该通道在 Baileys 7.x 生态下的可靠性。#104 虽属小修，但清理了近 4 个月的类型债务。

---

## 4. 社区热点

今日整体讨论热度偏低，所有 Issues 和活跃 PR 评论数为 0，👍 反应数均为 0。从 PR 摘要的深度来判断，以下两条具有较高的技术关注度和用户影响面：

### 🏷️ #2688 — fix(whatsapp): stop translating group participants to phone JIDs
- **链接**: [nanocoai/nanoclaw#2688](https://github.com/qwibitai/nanoclaw/pull/2688)
- **问题**: WhatsApp 正在将群组迁移到 LID (LinkedID) 参与者寻址模式，但 NanoClaw 的 Baileys 适配层仍在尝试将 LID 参与者翻译为电话号码 JID，导致每条 Bot 回复以 **ack 错误码 421** 静默失败——Bot 发出的消息永远不会送达，且**无任何用户可见的错误提示**。
- **严重性**: 🔴 高——LID 群组迁移由 WhatsApp 侧推进，受影响群组会随时间持续增加，Bot 回复的静默丢失是极难诊断的故障。
- **状态**: 开放中，等待合并。

### 🏷️ #2689 — fix(signal): set isMention for DMs and use signal: prefix for platform IDs
- **链接**: [nanocoai/nanoclaw#2689](https://github.com/qwibitai/nanoclaw/pull/2689)
- **问题**: Signal 私信（DM）未设置 `isMention: true`，而路由层仅在 `isMention` 为 true 时才自动创建 `messaging_groups` 行——这意味着 Signal DM 的**第一条消息会被静默丢弃，群组永远不会被注册**。此外 DM 的 platform ID 缺少 `signal:` 前缀。
- **严重性**: 🔴 高——直接影响信号通道 DM 功能的完整性。
- **状态**: 开放中，等待合并。

---

## 5. Bug 与稳定性

今日待合并的 Bug Fix PR 汇总，按严重程度排序：

| # | PR | 通道 | 严重程度 | Bug 描述 | Fix 状态 |
|---|---|---|---|---|---|
| 1 | **#2688** | WhatsApp | 🔴 P0 严重 | LID 群组中 Bot 回复静默失败 (ack 421)，无错误提示 | ✅ 已有 PR，待合并 |
| 2 | **#2689** | Signal | 🔴 P0 严重 | DM 首条消息静默丢弃，群组未注册 | ✅ 已有 PR，待合并 |
| 3 | **#2405** | 核心轮询 | 🟡 P1 中等 | auto-compaction 后模型输出丢失 `<message>` 标签包裹 | ✅ 已有 PR，待合并 (53天无合并) |
| 4 | **#2633** | WhatsApp | 🔴 P0（已合并）| Baileys 7.x 上适配器和关闭流程存在结构 Bug | ✅ **已合并** |

**关键风险**：WhatsApp LID 群组迁移和 Signal DM 路由失效是当前最紧迫的两条线，两者都是静默性故障（用户感知不到错误发生），一旦进入生产环境会极难排查。建议维护者优先审查合并 #2688 和 #2689。

---

## 6. 功能请求与路线图信号

今日可见的功能方向集中在**多通道语音转录扩展**：

| PR | 方向 | 状态 | 路线图信号 |
|---|---|---|---|
| **#2459** | 🎙️ `add-voice-transcription-chat-sdk`：通过设备端 Whisper.cpp 为 Chat SDK 桥接的所有通道（Discord、Slack、Teams、Webex、Google Chat 等）提供语音转录，无需云端 API | OPEN，已活跃 ~23 天 | 🔮 高优先级候选——与 #2317（Signal 侧）配套打通后，该项目将覆盖几乎所有消息通道的语音转录。标签含 `PR: Feature` + `PR: Skill`，符合项目 Skill 体系规范。 |
| **#2685** | 📝 docs(signal)：更新 Signal 群组打字指示符、出站反应 (emoji reaction) 和引用回复格式的文档 | OPEN，同日创建 | 伴随底层功能的文档可视为底层 Feature 接近成熟的信号，说明 Signal 群组打字和反应功能已实现待文档化。 |

**判断**：语音转录（on-device Whisper）很可能在下一版本/大功能周期中被统一推出，覆盖 WhatsApp 之外的全部通道。Signal 的群组反应和打字功能已秘密接近完成，文档 PR 即佐证。

---

## 7. 用户反馈摘要

### 今日有效技术反馈：

1. **WhatsApp 群组迁移刺痛** (#2688)：随着 WhatsApp LID 迁移推进，群组内 Bot 回复静默失败是"无声死亡"级别的痛点，用户期望至少有一条有意义的错误日志吐出。
2. **Signal DM 信任危机** (#2689)：Signal DM 用户首次发消息给 Bot 即被丢弃，这种"冷启动失败"会严重损害用户对 Bot 可靠性的信任。
3. **语音转录跨通道需求** (#2459)：用户明确表达了"不依赖云 API、设备端 Whisper、覆盖所有 Chat SDK 通道"的需求，隐私和可扩展性是两个关键驱动因素。

### 新增 Issue 质量注意：

- **#2686** (Traveling to Canada) — 与项目完全无关，属低质/垃圾 Issue，建议关闭。

---

## 8. 待处理积压

以下长期悬而未决的 PR 需要维护者重点关注：

| # | PR | 创建日期 | 搁置天数 | 风险等级 | 备注 |
|---|---|---|---|---|---|
| ⚡ | **#104** | 2026-02-06 | ~119天 | 🟡 低 | 已于今日合并 ✅ 积压已清 |
| 🟡 | **#2405** fix(poll-loop): deliver unwrapped output after compaction | 2026-05-11 | **75天** | 🟡 中 | 模型行为 Bug，auto-compaction 场景下输出格式丢失，影响所有通道 |
| 🟡 | **#2459** feat(skill): add-voice-transcription-chat-sdk | 2026-05-13 | **73天** | 🟡 中 | 大型 Skill，代码规范和审查可能是导致延迟的原因 |

**核心风险项**：

- **#2405 (搁置 75 天)**：poll-loop compaction 后的标签包裹丢失，是影响所有通道稳定性的底层 Bug，搁置周期已超过两个月，建议尽快给出审查意见（合并或请求修改），长期搁置会挫伤贡献者积极性。

---

> **今日综合健康评分：★★★★☆ (7.5/10)** — WhatsApp/Signal 核心通道的两条关键修复 PR 亟待审查合并，PR 整体处理节奏尚可但存在个别长期积压，语音转录跨通道扩展的信号值得关注。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 — 2026-06-05

---

## 1. 今日速览

IronClaw 今日处于**高活跃推进期**：过去 24 小时内共处理 40 条 Issue 更新（新开/活跃 25 条，关闭 15 条）和 50 条 PR 更新（待合并 31 条，已合并/关闭 19 条），合并吞吐量强劲。今日无新版本发布，但多个核心功能轨道（Reborn 子代理、触发器生命周期、Slack 集成、Hook 框架生产化）均有实质性 PR 合并，表明项目正处于功能密集落地阶段而非维护冻结期。架构重构（composition 工厂与运行时分解）被正式提上议程，反映出代码库规模增长后的治理需求。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的重要 PR 按功能域分组：

### 🔧 Reborn 子代理与触发器稳定性（核心轨道）

| PR | 作者 | 关键内容 |
|---|---|---|
| [#4466](https://github.com/nearai/ironclaw/pull/4466) | henrypark133 | `builtin.trigger_create` 中配对触发器创建者，防止孤立的 pairing hook，修复触发器持久化与创建的竞态窗口 |
| [#4440](https://github.com/nearai/ironclaw/pull/4440) | henrypark133 | 可延迟的压缩范围处理（`LoopCompactionOutcome::Deferred`），避免 UI-only 消息导致硬错误，是 #4366 的核心修复 |
| [#4467](https://github.com/nearai/ironclaw/pull/4467) | henrypark133 | 修复模型可见的 HTTP 结果预算控制，在工具调用边界实施 body/header/serialized-output 上限，防止上下文溢出 |

这三条合并标志着 **Reborn agent loop 的 compaction → trigger lifecycle → tool output control** 这一核心稳定性链路的系统性加固。

### 💬 Slack 集成与 Auth 体验

| PR | 作者 | 关键内容 |
|---|---|---|
| [#4476](https://github.com/nearai/ironclaw/pull/4476) | serrrfirat | 拆分 Slack actor/subject 身份路由，使 channel 路由在配置的 subject 下执行，同时保留配对发送者为 actor |
| [#4478](https://github.com/nearai/ironclaw/pull/4478) | serrrfirat | 在 Slack 提示中暴露 auth setup 链接，共享 WebUI 和 Slack 的 auth prompt 富化路径 |

Slack 集成的核心骨架和认证体验已趋于闭环——产品适配层从 WebUI 扩展到 Slack 多端一致。

### 🖥️ WebUI v2 改进

| PR | 作者 | 关键内容 |
|---|---|---|
| [#4477](https://github.com/nearai/ironclaw/pull/4477) | serrrfirat | LLM Providers 设置面板重新设计：按运行状态分组、渐进式披露，解决"信息墙"问题 |
| [#4480](https://github.com/nearai/ironclaw/pull/4480) | serrrfirp | 修复 #4477 的评审反馈：分离原生按钮控件、折叠非活跃卡片、增加缺失配置标签的防御性处理 |
| [#4481](https://github.com/nearai/ironclaw/pull/4481) | ilblackdragon *(待合并)* | WebChat v2 首次运行体验：新用户选择 LLM 提供商、NEAR AI/Codex 登录或粘贴 API key，无需重启即可开始 |

### 📦 依赖与安全

| PR | 作者 | 关键内容 |
|---|---|---|
| [#3719](https://github.com/nearai/ironclaw/pull/3719) | ilblackdragon | 升级 rustls-webpki 至 0.103.13，修补 CRL 解析 panic (RUSTSEC-2026-0104) 及名称约束 CVE |

**整体进展评估：** 今日合并的 19 条 PR 覆盖了 agent loop 稳定性、Slack 多端集成、WebUI 体验、安全补丁四条主线，推进量可观。Reborn 子代理的持久化交付（durable completion delivery）从设计讨论进入了具体实现的多 PR 并行推进阶段。

---

## 4. 社区热点

### 🔥 评论最活跃的 Issues

**[#3280](https://github.com/nearai/ironclaw/issues/3280) — Add ProductWorkflow and InboundTurnService facade**（6 条评论，目前仍为 OPEN）
- 这是 Reborn 产品工作流骨架的核心 Issue，创建后已持续活跃近一个月，关联了 12 个相关 Issue/PR。讨论集中在 `ProductAdapter` → `ProductWorkflow` → Reborn services 三层边界的 API 形态。它代表的是从"能跑"到"产品化"的架构跨越诉求。

**[#3857](https://github.com/nearai/ironclaw/issues/3857) — Slack ProductAdapter MVP with preconfigured credentials**（6 条评论，今日 CLOSED）
- 已被相关实施 PR 关闭。社区关注点是 Slack DMs + app mentions 的路由完整性，以及是否支持异步回发到 Slack。

**[#4424](https://github.com/nearai/ironclaw/issues/4424) — spawn_subagent advertised in text but absent from tools array**（4 条评论，今日 CLOSED）
- 这个 bug 揭示了 Reborn 工具暴露机制的系统性漏洞：模型从 surface text 看到的工具与实际发送到 API 的 `tools:[]` 数组不一致，导致模型"知道"但"调不到"。后续已推动 [#4431](https://github.com/nearai/ironclaw/issues/4431) 作为回归测试保障。

### 👀 今日新开的高关注度 Issues

- **[#4474](https://github.com/nearai/ironclaw/issues/4474)** — 子代理持久化交付的 umbrella issue，整合了 #4147、#4348、#4437，表明这一功能域已从分散讨论进入统一规划。
- **[#4475](https://github.com/nearai/ironclaw/issues/4475)** — 触发器生命周期正确性的 umbrella issue，整合了 #4420、#4472、#4473。
- **[#4470](https://github.com/nearai/ironclaw/issues/4470)** — Reborn composition 拆分为独立 crate 并施加 CI 强制边界，这是对代码库膨胀的主动治理。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（影响核心功能正确性）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#4424](https://github.com/nearai/ironclaw/issues/4424) | `builtin.spawn_subagent` 在 system prompt 中声明但未出现在结构化 tools 数组中，模型无法调用 | ✅ CLOSED | 已修复 |
| [#4084](https://github.com/nearai/ironclaw/issues/4084) | 后台子代理结果永远无法传递给父代理（`SubagentCompletionObserver` 写入但不通知） | ✅ CLOSED | 已修复 |
| [#4420](https://github.com/nearai/ironclaw/issues/4420) | `TriggerCompletionPolicy::CompleteAfterFirstFire` 被存储但从未被查询，导致触发器无限重复触发 | ✅ CLOSED | 已修复 |

### 🟡 中等（影响可观测性或边界行为）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#4427](https://github.com/nearai/ironclaw/issues/4427) | Reborn loop 退出原因不可见——`LoopFailureKind` 被持久化到 DB 但从未被 trace 输出 | 🟡 OPEN | 无 |
| [#4464](https://github.com/nearai/ironclaw/issues/4464) | 压缩重试需要仅含状态的稳定化元数据（避免重复触发） | 🟡 OPEN | 无（但 #4440 已处理主路径） |
| [#4431](https://github.com/nearai/ironclaw/issues/4431) | 回归测试需求：visible_capabilities 必须与 tool_definitions 严格一致 | 🟡 OPEN | 无 |

### 🟢 低（架构/代码质量）

| Issue | 描述 | 状态 |
|---|---|---|
| [#4368](https://github.com/nearai/ironclaw/issues/4368) | `RebornLoopDriverHostFactory` 六个 Option 字段在类型层可选但生产必需，违反架构规范 | 🟡 OPEN |
| [#4471](https://github.com/nearai/ironclaw/issues/4471) | `runtime.rs` 超过 3000 行架构预算，需分解 | 🟡 OPEN |
| [#4469](https://github.com/nearai/ironclaw/issues/4469) | `factory.rs` 超过 3000 行架构预算，需分解 | 🟡 OPEN |

**稳定性评估：** 今日关闭了 3 个严重 bug，但 loop 可观测性（#4427）和工具暴露一致性回归测试（#4431）仍待处理。架构债务（超大文件）已被正式追踪但尚未启动修复。

---

## 6. 功能请求与路线图信号

### 高置信度（已有实施 PR 或明确规划）

| 需求 | 信号来源 | 状态 |
|---|---|---|
| **WebChat v2 首次运行体验** | PR [#4481](https://github.com/nearai/ironclaw/pull/4481) | 待合并，预计近期落地 |
| **IronHub 安装流程迁移到 Reborn** | PR [#4479](https://github.com/nearai/ironclaw/pull/4479) | 待合并，含 Ed25519 验证和 sha256 检查 |
| **Reborn 身份解析器（OAuth + 外部 actor）** | PR [#4461](https://github.com/nearai/ironclaw/pull/4461) | 待合并，统一所有外部身份到稳定 `UserId` |
| **Hook 框架生产化** | PR [#3938](https://github.com/nearai/ironclaw/pull/3938) + [#3951](https://github.com/nearai/ironclaw/pull/3951) | 待合并，默认 OFF 的安全上线策略 |
| **子代理持久化交付** | Issue [#4474](https://github.com/nearai/ironclaw/issues/4474)（umbrella） | 设计文档已就绪，多 PR 并行推进 |
| **触发器生命周期正确性** | Issue [#4475](https://github.com/nearai/ironclaw/issues/4475)（umbrella） | 已关闭 3 个子 issue，umbrella 追踪剩余工作 |

### 中置信度（有 Issue 但尚未有实施 PR）

| 需求 | 信号来源 |
|---|---|
| **OpenAI-compatible API 迁移到 Reborn** | Issue [#3283](https://github.com/nearai/ironclaw/issues/3283)，关联 PR #4442/#4459 已在进行 |
| **`previous_response_id` 暴露给工具** | Issue [#4468](https://github.com/nearai/ironclaw/issues/4468)，实现 engine v2 的 parity |
| **产品认证账户投影到 CredentialAccountStore** | Issue [#4238](https://github.com/nearai/ironclaw/issues/4238)，follow-up 到已合并的 #4234 |
| **Reborn CLI 只读命令迁移** | PR [#4379](https://github.com/nearai/ironclaw/pull/4379) 待合并 |

### 架构治理信号

- **Reborn composition 分解**（[#4470](https://github.com/nearai/ironclaw/issues/4470)）被正式提出，`ironclaw_reborn_composition` crate 已积累过多职责。这预示着下一阶段可能有一系列 crate 拆分 PR 涌现。

---

## 7. 用户反馈摘要

从今日 Issue 评论和 PR 讨论中提炼的真实痛点：

**🔴 工具暴露不一致导致模型行为不可预测**
> 模型在 system prompt 中"看到" `builtin.spawn_subagent`，但实际调用时工具不存在于结构化数组中，导致模型反复尝试调用一个不存在的工具。这不仅是功能缺失，更是对模型推理资源的浪费。社区已推动建立 visible_capabilities ⇔ tool_definitions 的回归测试保障。

**🔴 后台子代理"静默完成"**
> 子代理在后台运行完毕后，父代理完全不知道结果。对于依赖子代理完成特定任务的自动化工作流来说，这是致命缺陷。用户期望的是"fire and forget with guaranteed delivery"。

**🟡 触发器行为与用户心智模型不符**
> 用户创建"一次性触发器"时，系统实际创建的是 cron 重复触发器。`CompleteAfterFirstFire` 策略被存储但从未执行。这反映出产品语义与实现之间的脱节。

**🟡 调试可见性不足**
> 即使设置 `RUST_LOG=ironclaw=debug`，operator 仍然无法看到 agent loop 的退出原因。`LoopFailureKind` 被写入 DB 但从未输出到 trace，使得生产环境问题排查极为困难。

**🟢 WebUI 设置面板信息过载**
> 用户面对 LLM Providers 设置页面时看到的是"一堵元数据墙"，无法快速回答"什么在运行、什么可以切换、什么需要配置"这个核心问题。PR #4477 的重新设计直接回应了这个痛点。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于关键路径但进展缓慢，建议维护者关注：

| 项目 | 创建日期 | 状态 | 风险 |
|---|---|---|---|
| **[#3283](https://github.com/nearai/ironclaw/issues/3283)** — Migrate OpenAI-compatible APIs onto Reborn | 2026-05-06 | OPEN，2 条评论 | 高：这是 Reborn 迁移的核心轨道之一，已持续近一个月 |
| **[#3280](https://github.com/nearai/ironclaw/issues/3280)** — ProductWorkflow and InboundTurnService facade | 2026-05-06 | OPEN，6 条评论 | 高：产品化骨架，阻塞多个下游功能 |
| **[#4238](https://github.com/nearai/ironclaw/issues/4238)** — Project product-auth accounts into CredentialAccountStore | 2026-05-29 | OPEN，1 条评论 | 中：follow-up 到已合并 PR，但尚未有实施 PR |
| **[#4427](https://github.com/nearai/ironclaw/issues/4427)** — Loop exit reason invisible | 2026-06-03 | OPEN，2 条评论 | 中：影响生产可观测性，无 fix PR |
| **[#4431](https://github.com/nearai/ironclaw/issues/4431)** — visible_capabilities ⇔ tool_definitions parity regression test | 2026-06-04 | OPEN，1 条评论 | 中：防止 #4424 类 bug 再次出现的保障机制 |
| **PR [#3931](https://github.com/nearai/ironclaw/pull/3931)** — Fix cross-tenant leakage + replay + provider spoofing in event-triggered hooks | 2026-05-23 | OPEN | 高：安全类 bug 修复，涉及跨租户泄露 |
| **PR [#3922](https://github.com/nearai/ironclaw/pull/3922)** — Wire SecurityAuditSink into obligation handler + hook deny paths | 2026-05-23 | OPEN | 中：安全审计基础设施 |
| **PR [#4461](https://github.com/nearai/ironclaw/pull/4461)** — Canonical Reborn identity resolver | 2026-06-04 | OPEN | 中：统一身份解析，影响 OAuth 和外部 actor 的正确性 |

**特别提醒：** PR #3931 修复的是跨租户泄露、重放攻击和 provider 欺骗三个 CRITICAL 安全漏洞，自 5 月 23 日提交以来仍未合并，建议优先审查。

---

*日报生成时间：2026-06-05 | 数据来源：GitHub nearai/ironclaw | 分析引擎：OWL*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-05

---

## 1. 今日速览

LobsterAI 今日活跃度**极高**，共处理 **17 个 PR 合并/关闭** 和 **1 个新 Issue**，无新版本发布。项目正处于 **2026.5.28 版本发布后的密集迭代期**，大量 stale PR（来自 4 月）被集中清理合并，同时 6 月新增的 MCP 稳定性、Cowork 功能增强、i18n 修复等 PR 也在快速推进。整体来看，项目维护节奏健康，积压清理与新功能开发并行。

---

## 2. 版本发布

**无新版本发布。**

最近一次版本发布为 **2026.5.28**（PR [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090)），于今日合并回 `main`，包含 73 个提交，主要亮点：

- **Kit 专家套件市场**：新增 Kit 市场 UI 与 Redux 集成，支持获取/安装/卸载，对话输入框支持选择 Kit 并 try-asking 跳转
- **Cowork 会话本地分叉**：支持在本地对会话进行分叉操作
- **插件手动更新**：新增插件手动更新能力
- **稳定性修复**：修复 MCP / Gateway / Artifacts 相关的多项稳定性问题

---

## 3. 项目进展

今日合并/关闭的 17 个 PR 可按主题归类如下：

### 🔧 MCP 稳定性与优化（5 个 PR）

| PR | 内容摘要 |
|---|---|
| [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) | 优化 npx MCP 启动解析，前置 npm 包解析与本地安装，避免重复走 npx 慢路径；增加首次响应计时日志 |
| [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100) | 修复 managed installs 的 Node 工具链路径注入问题，确保 Electron shim 环境兼容 |
| [#2103](https://github.com/netease-youdao/LobsterAI/pull/2103) | 新增远程 MCP 服务器 URL 校验，拒绝无效 URL 并在表单中展示本地化错误提示 |
| [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) | 修复 OpenClaw 图片 payload 过大导致的网关发送失败，增加 payload 预估与错误分类 |
| [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090) | 版本发布合并，含 MCP 相关稳定性修复 |

**进展评估**：MCP 子系统的启动性能、错误处理和配置健壮性得到系统性提升，从启动解析、Node 环境适配到远程 URL 校验形成了完整的质量闭环。

### 🤖 Cowork 功能增强（4 个 PR）

| PR | 内容摘要 |
|---|---|
| [#2111](https://github.com/netease-youdao/LobsterAI/pull/2111) | 重构语音输入模块，将 ASR IPC 注册、录音、WAV 编码、ASR 客户端、错误处理拆分为独立模块 |
| [#2095](https://github.com/netease-youdao/LobsterAI/pull/2095) | 支持 subagent 批量删除，异步化 gateway transcript 清理，限制并发与重试 |
| [#2101](https://github.com/netease-youdao/LobsterAI/pull/2101) | 支持从 artifact 预览中选中文本添加到当前 Cowork 草稿 |
| [#2097](https://github.com/netease-youdao/LobsterAI/pull/2097) | 为搜索模态框添加标题栏关闭按钮 |

### 📦 Stale PR 集中清理（6 个 PR，均来自 2026-04-07）

| PR | 内容摘要 |
|---|---|
| [#1536](https://github.com/netease-youdao/LobsterAI/pull/1536) | Cowork 会话完成/失败时发送系统通知 |
| [#1538](https://github.com/netease-youdao/LobsterAI/pull/1538) | AI 回复消息收藏/书签功能 |
| [#1540](https://github.com/netease-youdao/LobsterAI/pull/1540) | 修复设置面板记忆模块编辑按钮缺少翻译 |
| [#1542](https://github.com/netease-youdao/LobsterAI/pull/1542) | 会话标签分类系统，支持自定义标签和筛选过滤 |
| [#1543](https://github.com/netease-youdao/LobsterAI/pull/1543) | 修复审批对话框硬编码中文导致英文模式失效 |
| [#1544](https://github.com/netease-youdao/LobsterAI/pull/1544) | 修复关闭 Settings 面板时 GitHub Copilot OAuth 轮询未取消的问题 |

### 🐛 其他修复

| PR | 内容摘要 |
|---|---|
| [#2093](https://github.com/netease-youdao/LobsterAI/pull/2093) | 修复 MiniMax-M3 图片输入支持被硬编码为 false 的问题 |
| [#2096](https://github.com/netease-youdao/LobsterAI/pull/2096) | 隐藏内部 OpenClaw 插件，避免在插件管理界面暴露 |

---

## 4. 社区热点

### Issue [#769](https://github.com/netease-youdao/LobsterAI/issues/769) — OpenClaw 网关未能在规定时间内启动成功

- **作者**：15999803458-boop
- **状态**：OPEN，仅 1 条评论，👍 0
- **分析**：用户附截图反馈 OpenClaw 网关超时启动失败，但未提供详细环境信息（操作系统、日志、复现步骤）。该 Issue 创建于 3 月 24 日，直到 6 月 4 日才被更新，说明可能是用户自行发现或遇到类似问题后重新激活。**诉求**：希望获得网关启动失败的排查指引或根因修复。
- **建议**：维护者应引导用户提供 `gateway.log` 和环境信息，判断是否为配置错误、端口冲突或依赖缺失。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | OpenClaw 网关启动超时失败 | OPEN，待排查 | 无 |
| 🟡 中 | MiniMax-M3 图片输入被硬编码禁用 | 已修复 | [#2093](https://github.com/netease-youdao/LobsterAI/pull/2093) |
| 🟡 中 | 审批对话框硬编码中文，英文模式失效 | 已修复 | [#1543](https://github.com/netease-youdao/LobsterAI/pull/1543) |
| 🟡 中 | GitHub Copilot OAuth 轮询在 Settings 关闭后未取消 | 已修复 | [#1544](https://github.com/netease-youdao/LobsterAI/pull/1544) |
| 🟢 低 | 设置面板记忆模块编辑按钮缺少翻译 | 已修复 | [#1540](https://github.com/netease-youdao/LobsterAI/pull/1540) |
| 🟢 低 | 搜索模态框缺少关闭按钮 | 已修复 | [#2097](https://github.com/netease-youdao/LobsterAI/pull/2097) |

**总结**：今日无新增严重 Bug 报告。唯一开放 Issue（网关启动失败）需要更多诊断信息。其余已知问题均已通过今日合并的 PR 修复。

---

## 6. 功能请求与路线图信号

从今日合并的 stale PR 和近期活跃 PR 中，可识别以下功能方向已实质性推进：

| 功能方向 | 状态 | 信号来源 |
|---|---|---|
| **MCP 生态完善** | 快速推进中 | PR #2091、#2100、#2103 — 启动性能、环境适配、URL 校验 |
| **Cowork 协作体验** | 持续增强 | PR #2111（语音重构）、#2095（批量删除）、#2101（artifact 文本添加） |
| **会话管理** | 已落地 | PR #1536（系统通知）、#1538（收藏）、#1542（标签分类） |
| **Kit 专家套件市场** | 已随 2026.5.28 发布 | PR #2090 |
| **i18n 完整性** | 修复中 | PR #1540、#1543 — 翻译缺失和硬编码问题集中修复 |

**判断**：下一版本的重点可能集中在 **MCP 远程服务器管理**（URL 校验已铺垫）、**Cowork 语音交互体验**（模块重构为后续功能打基础）以及 **Kit 市场的生态扩展**。

---

## 7. 用户反馈摘要

今日仅有 1 个活跃 Issue，反馈较为有限：

- **网关启动失败**（Issue [#769](https://github.com/netease-youdao/LobsterAI/issues/769)）：用户遇到 OpenClaw 网关超时问题，但描述简略，未提供日志。反映出一部分用户在**环境配置和错误诊断**方面存在门槛，项目可能需要更友好的启动失败提示或自检工具。

从历史 stale PR 的积压来看，社区对 **Cowork 协作功能**（通知、收藏、标签）和 **i18n 国际化**有持续需求，这些诉求已在今日得到集中响应。

---

## 8. 待处理积压

| 项目 | 详情 | 建议 |
|---|---|---|
| Issue [#769](https://github.com/netease-youdao/LobsterAI/issues/769) | OpenClaw 网关启动失败，创建于 3 月 24 日，近 2.5 个月未解决 | 🔴 需要维护者主动跟进，引导用户提供诊断信息 |
| PR [#1536](https://github.com/netease-youdao/LobsterAI/pull/1536) ~ [#1544](https://github.com/netease-youdao/LobsterAI/pull/1544) | 6 个 stale PR 虽已合并，但积压近 2 个月才处理 | 建议审视 stale 标记策略，避免社区贡献被长期搁置 |

**整体健康度评估**：🟢 良好。项目在版本发布后迅速进入迭代周期，积压 PR 得到清理，MCP 和 Cowork 两大核心模块持续增强。唯一需要关注的是开放 Issue 的响应速度。

---

*数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 报告生成时间：2026-06-05*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-06-05

> 来源: https://github.com/moltis-org/moltis | 统计窗口: 过去 24 小时

---

## 1. 今日速览

Moltis 今日活跃度**中等偏上**：社区共提交 **4 个新 PR、2 个新 Issue**，全部处于开放状态，尚无合并或关闭记录。未发布新版本。当前开发重心集中在 **浏览器工具的 Shadow DOM 兼容性修复**（3 个关联 PR 并行推进）和 **Telegram 频道的消息流分离重构**，整体处于密集的代码打磨期，尚未进入发布窗口。Issue 方面出现了两个方向明确的**功能扩展诉求**（本地 STT 引擎、SMS/LINE 渠道），值得关注。

---

## 2. 版本发布

**无新版本发布。** 日报生成窗口内（过去 24 小时）Releases 总数为 0。

---

## 3. 项目进展

今日无 PR 被合并或关闭，均在评审 / 开发阶段。以下 PR 按技术方向梳理其推进的进度：

| 方向 | 关联 PR | 进展说明 |
|---|---|---|
| **浏览器 Shadow DOM 穿透** | [#1100](https://github.com/moltis-org/moltis/pull/1100) · [#1103](https://github.com/moltis-org/moltis/pull/1103) | #1100 由原提交者发起初版修复；#1103 是同一位维护者（s-salamatov）整理的替代/升级版，合并了两轮 review 意见。问题覆盖 snapshot 采集与 ref 解析两条路径，目标是解决 **Salesforce Lightning** 等 Web Component 环境下元素不可见的痛点。 |
| **持久化 Tool 结果截断** | [#1089](https://github.com/moltis-org/moltis/pull/1089) | 5 天前创建，昨日再次更新。对 conversation history 在做 rehydration 时施加长度上限，防止超长 tool 结果把 provider context window 撑爆，影响正常 chat、streaming、compaction 等多条代码路径。 |
| **Telegram 进度消息流分离** | [#1099](https://github.com/moltis-org/moltis/pull/1099) | 修复 [#1097](https://github.com/moltis-org/moltis/issues/1097)。将流式输出从最终回答中剥离：发送→限时静默进度→流式结束后删除→再发最终回复，避免 Telegram 长文本重复刷屏。 |

**整体判断**：主干开发稳定，当前积压 PR 全部有明确 owner，无 stagnation（停滞）迹象，预计本周内可进入 review-merge 阶段。

---

## 4. 社区热点

当前所有 Issue / PR 的 👍 反应数与评论数均为 0（数据统计截至抓取时点），暂未形成热点讨论。但以下 Issue **诉求明确、潜在影响力大**，后续可能升温：

- **[#1102 — Feature: Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102)**
  用户希望接入 ModelScope 生态的 SenseVoice-Small（70ms/10s 音频、Paraformer 流式识别）作为**离线 STT 备选引擎**。这对于无网络环境或在意隐私的用户是关键路径。项目当前 STT 接入框架已有 Whisper、Groq Cloud；接入 FunASR/SenseVoice 只需实现新的 provider 插件，工作量和破坏性不大。

- **[#1101 — [Feature]: Add SMS and LINE channels](https://github.com/moltis-org/moltis/issues/1101)**
  请求新增 `moltis-sms` 与 `moltis-line` 两个渠道。与已有的 Telegram / Slack / Discord 渠道并列，属于**平台适配层**的扩展。对面向日本/东南亚市场、偏好免费短信的场景有价值，但需要对接 SMPP/LINE Messaging API，集成工作量较大，短期内未必进入路线图。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 关联 | Fix PR 状态 |
|---|---|---|---|
| 🟠 **中** | 浏览器 snapshot / ref 查找无法穿越 Shadow DOM 边界（Salesforce Lightning 等 Web Component 页面交互失效） | [#1100](https://github.com/moltis-org/moltis/pull/1100) | ✅ #1103（替代 PR，含 review 修复，待 merge） |
| 🟡 **低** | Telegram 流式输出与最终回答混合刷屏 | [#1097](https://github.com/moltis-org/moltis/issues/1097) | ✅ #1099（待 merge） |
| ⚪ **待确认** | 长 session history rehydration 可能撑爆 context window | [#1089](https://github.com/moltis-org/moltis/pull/1089) | ✅ PR 已提交 |

**结论**：所有已报告 Bug 均有对应 PR 覆盖，无"裸奔"（open）bug，健康状况良好。Shadow DOM 兼容性问题因已有成熟替代方案，预计很快合并；其余 bug 需等待 maintainer 审核节奏。

---

## 6. 功能请求与路线图信号

| 信号来源 | 诉求 | 方向判断 | 进入下一版本的可能性 |
|---|---|---|---|
| [#1102](https://github.com/moltis-org/moltis/issues/1102) | 本地 STT：FunASR / SenseVoice | **语音输入扩展**，满足离线/低延迟需求 | 🟡 中 — 依赖社区贡献或 maintainer 对 FunASR 生态的兴趣 |
| [#1101](https://github.com/moltis-org/moltis/issues/1101) | SMS & LINE 渠道 | **平台渠道扩展**，面向日本/东南亚用户 | 🟢 高 — 架构上已有渠道层抽象，社区贡献者 joeblew999 已自检排重，动机较强 |

**值得关注的可预见里程碑**：
- Shadow DOM 修复合并后，浏览器工具模块的适用场景将显著拓宽（企业级 Web App 自动化成为可能）。
- Telegram 消息流分离合并后，Telegram 渠道体验将大幅提升。
- 若 STT 插件合并，本地语音交互链路将更完整，降低对云 API 依赖。

---

## 7. 用户反馈摘要

今日为新 Issue 创建首日，暂无评论讨论。从 Issue 描述中提炼的核心诉求与场景：

- **离线 / 低延迟语音输入场景**：用户希望摆脱 Whisper 模型的在线依赖，转向 FunASR/SenseVoice 这类可在 NVIDIA Jetson / Mac M 系列上原生运行、延迟极低的方案。
- **亚洲渠道覆盖诉求**：LINE 在日本/台湾市占极高；SMS 在部分行业客服流水号通知中不可替代。说明 Moltis 用户群正从"个人 AI 助手"向**多渠道客服 / 消息中枢**方向延伸。
- **Web 应用自动化场景**：Shadow DOM 问题直接指向 Salesforce Lightning、Google Workspace 等采用 Web Component 技术栈的企业 SaaS 平台，说明有用户在尝试用 Moltis 做 RPA 级操作。

整体反馈呈正向，未出现"不满足/不满意"情绪，说明当前功能基线处于可用、有探索空间的状态。

---

## 8. 待处理积压提醒

截至报告生成时点，无超过 30 天未响应的 Issue/PR。所有新活跃 Issue/PR 均在 72 小时以内创建或更新。积压压力**极低**。

唯一需要注意的是：

- **[#1089 Cap persisted tool results before rehydration](https://github.com/moltis-org/moltis/pull/1089)** — 创建于 2026-06-01，近 5 天未合并。虽昨日更新过，但若后续再次沉寂需关注。该 PR 涉及 context window 安全边界，**建议优先审核**，防止超长 session 导致意外截断或费用飙升。

---

## 项目健康度雷达

| 维度 | 状态 | 说明 |
|---|---|---|
| **发布节奏** | 🟡 缓慢 | 近 24h 无 Release |
| **Issue 响应速度** | 🟡 正常 | 新 Issue 尚无评论，但无长期堆积 |
| **PR 合并率** | 🟢 活跃 | 4 个 PR 均有明确受众，无 abandoned PR |
| **Bug 覆盖度** | 🟢 良好 | 所有 Bug 均有对应 PR |
| **社区参与** | 🟢 积极 | 新贡献者（resumeparseeval）参与 Shadow DOM 修复 |
| **文档/沟通** | ⚪ 待观察 | 今日无文档类 PR，新功能合并后需跟进 |

> **一句话总结**：Moltis 本周处于"密集打磨期"，PR 质量高、积压低，核心痛点（Shadow DOM、Telegram 流式体验）有望本周内收敛；功能扩展方向（SenseVoice 本地化、SMS/LINE）已浮现未落地，值得在下一版本规划会上讨论排期。

---

*日报由 OWL 自动生成 | 数据来源: GitHub API (moltis-org/moltis) | 生成时间: 2026-06-05*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-05

---

## 1. 今日速览

CoPaw 今日活跃度处于**高位**：过去 24 小时内 Issues 更新 32 条（新开/活跃 13 条，关闭 19 条），PR 更新 26 条（待合并 10 条，已合并/关闭 16 条），并发布了 **v1.1.11-beta.1** 新版本。社区贡献者参与度较高，多个首次贡献者（first-time-contributor）提交了 PR。项目整体呈现**快速迭代、密集修复**的态势，前端测试覆盖、桌面端稳定性、MCP 工具兼容性是今日三条主线。

---

## 2. 版本发布

### v1.1.11-beta.1

**更新内容：**

| 类型 | 说明 | PR |
|------|------|-----|
| Bug Fix | `ProviderManager` 增加 `get_model_max_input_length` 的回退逻辑，修复 `/compact` 命令忽略模型实际 `max_input_length` 而硬编码 128K 默认值的问题 | [#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827) |
| Refactor | Cron 任务中 `agent` 类型禁用推送气泡（push bubbles），减少不必要的 UI 干扰 | [#4803](https://github.com/agentscope-ai/QwenPaw/pull/4803) |

**迁移注意事项：** 无破坏性变更。`get_model_max_input_length` 的回退修复意味着此前因模型配置缺失导致上下文压缩行为异常的用户，升级后将自动恢复正确行为。

---

## 3. 项目进展

今日合并/关闭的重要 PR 共 16 条，以下为关键进展：

| PR | 状态 | 说明 |
|----|------|------|
| [#4958](https://github.com/agentscope-ai/QwenPaw/pull/4958) | ✅ 已合并 | **MCP 工具名兼容性修复**：对含 `.` 的 MCP 工具名（如 `pat.batch_plan`）进行 sanitize/alias 重写，解决 OpenAI/Anthropic 模型因 `tools[].name` 正则校验失败导致整个请求被拒绝的问题 |
| [#4954](https://github.com/agentscope-ai/QwenPaw/pull/4954) | ✅ 已合并 | **文件写入异步化**：`write_file` / `append_file` 改用 `aiofiles`，消除阻塞事件循环的风险 |
| [#4879](https://github.com/agentscope-ai/QwenPaw/pull/4879) | ✅ 已合并 | **飞书交互卡片支持**：新增飞书 `msg_type=interactive` 卡片内容提取，重构消息解析逻辑 |
| [#4848](https://github.com/agentscope-ai/QwenPaw/pull/4848) | ✅ 已合并 | **QQ 渠道扫码授权**：QQ 渠道新增二维码扫码获取 `app_id` / `client_secret`，对齐钉钉的扫码配置模式 |
| [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | ✅ 已合并 | **Windows 浏览器进程清理**：修复 `browser_use` 后残留进程和临时目录锁未释放的问题 |
| [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) | ✅ 已合并 | **桌面版 Pet 插件依赖自修复**：Windows Desktop v1.1.9 缺失 `pyside6-essentials` 导致 Pet 插件初始化失败，增加自动安装缺失依赖的逻辑 |
| [#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332) | ✅ 已合并 | **前端单元测试里程碑完成**：新增 10 个测试文件、约 100 个测试用例，覆盖 constants、contexts、layouts、api-types、components 等模块 |
| [#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) | ✅ 已合并 | **插件 Prompt Section Registry**：插件系统新增 `register_prompt_section()` API，允许插件在系统提示词的指定锚点注入自定义段落，无需 monkey-patching |
| [#4925](https://github.com/agentscope-ai/QwenPaw/pull/4925) | ✅ 已合并 | **渠道 ACL 发送者 ID 保留**：修复批量合并原生 payload 时 `acl_sender_id` 字段丢失导致白名单校验回退到显示名的问题 |

**整体评估：** 今日合并的 PR 覆盖了 MCP 兼容性、渠道集成（飞书/QQ）、桌面端稳定性、前端测试、插件架构等多个维度，项目在**生态扩展**和**工程质量**两个方向均稳步推进。

---

## 4. 社区热点

### 🔥 Issue #4644 — Console UI 工具调用不实时显示（20 条评论）
- **链接：** [agentscope-ai/QwenPaw#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)
- **状态：** 已关闭
- **分析：** 这是今日评论数最多的 Issue。用户反馈网页控制台中大多数工具调用（除 `read_file` 外）无法实时显示，需手动刷新页面才能看到，且无任何错误日志。这反映了**前端 WebSocket 推送或状态同步机制**存在间歇性缺陷，是影响用户体验的核心痛点。

### 🔥 Issue #4937 — `/compact` 命令忽略模型 `max_input_length`（3 条评论）
- **链接：** [agentscope-ai/QwenPaw#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937)
- **状态：** 开放中
- **分析：** 用户配置了 MiniMax M3（512K 上下文），但 `/compact` 仍使用 128K 默认值。此问题已在 v1.1.11-beta.1 中通过 PR #4827 修复，但 Issue 本身尚未关闭，可能需要确认修复效果。

### 🔥 Issue #4956 / #4953 — `/compact` 触发 `AttributeError: 'str' object has no attribute 'get'`（各 2 条评论）
- **链接：** [#4956](https://github.com/agentscope-ai/QwenPaw/issues/4956) | [#4953](https://github.com/agentscope-ai/QwenPaw/issues/4953)
- **状态：** #4956 已关闭，#4953 已关闭
- **分析：** 两个 Issue 描述同一类 bug：当消息 content 为混合类型列表（含字符串元素）时，`as_msg_handler.py` 中尝试对字符串调用 `.get()` 导致崩溃。这暴露了**消息格式校验和类型处理**的健壮性问题。

### 🔥 Issue #4796 — 输入框 `/skills` Tab 自动补全（6 条评论）
- **链接：** [agentscope-ai/QwenPaw#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796)
- **状态：** 已关闭
- **分析：** 用户希望在输入框中输入 `/` 后能 Tab 自动关联出可调用的 skill，参考其他主流 agent 的交互模式。这反映了用户对**命令行式交互效率**的期待。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|--------|-------|------|------|--------|
| 🔴 高 | [#4956](https://github.com/agentscope-ai/QwenPaw/issues/4956) [#4953](https://github.com/agentscope-ai/QwenPaw/issues/4953) | `/compact` 在消息 content 为混合类型列表时抛出 `AttributeError`，每次 agent 交互都触发，日志刷屏 | 已关闭 | 待确认具体修复 PR |
| 🔴 高 | [#4918](https://github.com/agentscope-ai/QwenPaw/issues/4918) | MCP 工具名含 `.` 时，gpt-5.5 等模型因 `tools[].name` 校验失败导致整个请求被拒绝 | 已关闭 | ✅ [#4958](https://github.com/agentscope-ai/QwenPaw/pull/4958) 已合并 |
| 🟡 中 | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | Console UI 工具调用不实时显示，需手动刷新 | 已关闭 | 待确认 |
| 🟡 中 | [#4781](https://github.com/agentscope-ai/QwenPaw/issues/4781) | `tool_result_pruning` 无法防止单次超大 shell 输出导致上下文膨胀 | 已关闭 | 待确认 |
| 🟡 中 | [#4957](https://github.com/agentscope-ai/QwenPaw/issues/4957) | TaskEngineMixin 返回过时的 `"running"` 状态，API 消费者获取到错误的任务状态 | 开放中 | 无 |
| 🟡 中 | [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | DeepSeek API 回复内容被折叠到思考过程中，需手动展开 | 开放中 | 无 |
| 🟢 低 | [#4959](https://github.com/agentscope-ai/QwenPaw/issues/4959) | Latex 公式显示异常 | 开放中 | 无 |
| 🟢 低 | [#4928](https://github.com/agentscope-ai/QwenPaw/issues/4928) | 技能市场下载报错（响应体超过 5MB 限制） | 已关闭 | 无 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 信号强度 |
|----------|-------|---------|----------|
| **Agent 执行中断**：用户发送新消息时能中断正在执行的 agent | [#4961](https://github.com/agentscope-ai/QwenPaw/issues/4961) / [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964) | 无 | ⭐⭐⭐ 高频需求，同一用户在同一天提了两个相同请求 |
| **Cron 支持直接执行脚本/shell** | [#4950](https://github.com/agentscope-ai/QwenPaw/issues/4950) / [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | 无 | ⭐⭐⭐ 同上，重复提交表明强烈需求 |
| **Token 用量可视化** | [#4767](https://github.com/agentscope-ai/QwenPaw/issues/4767) / [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782) | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)（审查中） | ⭐⭐⭐ PR 已存在，正在审查 |
| **自动 Provider 降级** | [#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757) | 无 | ⭐⭐ 参考 cc-switch 的自动切换机制 |
| **生成文件快捷打开/预览** | [#4786](https://github.com/agentscope-ai/QwenPaw/issues/4786) | 无 | ⭐⭐ 用户体验改善 |
| **子 Agent 生命周期事件** | — | [#4955](https://github.com/agentscope-ai/QwenPaw/pull/4955)（开放中） | ⭐⭐ PR 已提交，增加父子 agent 生命周期追踪、完成事件、心跳检测和取消传播 |
| **桌面端自动更新** | — | [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)（开放中） | ⭐⭐ Tauri 自动更新流程 |
| **OpenSandbox 插件** | — | [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934)（开放中） | ⭐ 沙箱执行 shell 命令 |
| **ACP 协议扩展** | — | [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949)（审查中） | ⭐ 为 paw TUI 终端提供命令广告、错误展示、工具参数等元数据 |

**判断：** Token 用量可视化（PR #4433 已在审查中）和子 Agent 生命周期事件（PR #4955）最有可能在下一版本落地。Agent 执行中断和 Cron 脚本执行是社区呼声最高的新功能，但尚未有 PR 启动。

---

## 7. 用户反馈摘要

**痛点：**
- **上下文管理不透明**：多个 Issue（#4767、#4782、#4937）集中反映用户无法直观了解当前上下文使用情况，导致频繁遭遇意外的 context compact 或截断。
- **工具调用可见性差**：#4644 的高评论数（20 条）说明 Console UI 的工具调用实时显示问题是影响日常使用的主要障碍。
- **记忆系统利用率低**：#4652 指出记忆系统"只记录不提炼"，agent 踩过的坑会反复踩，缺乏自动总结和关联索引能力。
- **桌面端 Windows 兼容性问题多发**：#3555（HTTP 服务挂起）、#4801（Pet 插件依赖缺失）、#4853（浏览器进程残留）均指向 Windows 桌面端的打包和运行时稳定性。
- **跨渠道消息处理不一致**：飞书交互卡片（#4879）、钉钉 conversation_id 碰撞（#4932）、QQ 授权（#4848）表明各渠道的适配深度参差不齐。

**满意点：**
- 社区对 MCP 工具生态的扩展持积极态度（#4918 的快速修复和 #4934 OpenSandbox 插件）。
- 前端测试覆盖率的提升（#4332）获得认可。

**使用场景：**
- 用户普遍将 CoPaw 用于**多渠道路由**（飞书、钉钉、QQ）的 agent 工作流。
- **定时任务**（Cron）是高频使用场景，用户希望支持纯脚本执行而不仅限于 agent 类型。
- **子 Agent 编排**（spawn_subagent）是高级用户的核心诉求。

---

## 8. 待处理积压

以下长期未响应或状态不明的 Issue/PR 需维护者关注：

| 项目 | 创建日期 | 状态 | 说明 |
|------|----------|------|------|
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) — DeepSeek 前缀缓存命中率偏低 | 2026-04-27 | 开放中 | 已超 1 个月未解决，涉及成本优化，👍=1 |
| [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) — Windows Desktop 挂起 | 2026-04-18 | 已关闭 | 已超 1 个月，虽已关闭但根因是否彻底解决需确认 |
| [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) — 记忆系统增强 | 2026-05-24 | 已关闭 | 涉及架构级改进，关闭后是否有跟进计划？ |
| [#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757) — 自动 Provider 降级 | 2026-05-28 | 开放中 | 无 PR，无响应 |
| [#4957](https://github.com/agentscope-ai/QwenPaw/issues/4957) — Task Status API 返回过时状态 | 2026-06-04 | 开放中 | 今日新报告，需尽快确认 |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) — Tauri 自动更新 | 2026-05-25 | 开放中 | 审查中，已超 10 天 |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) — 解耦插件加载器与 agent 启动 | 2026-06-02 | 开放中 | 解决 PyInstaller 打包环境的关键问题 |
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) — Token 用量可视化 | 2026-05-15 | 审查中 | 审查已超 3 周，社区需求强烈 |

---

**项目健康度评估：** 🟡 **良好但需关注**

CoPaw 今日展现出强劲的迭代能力和社区活跃度，PR 合并效率高，版本发布节奏稳定。主要风险点在于：(1) Windows 桌面端稳定性问题持续累积；(2) 部分高需求功能（Agent 中断、Cron 脚本执行）尚无 PR 跟进；(3) 积压的审查中 PR（#4433、#4669）等待时间较长，可能影响贡献者积极性。建议维护者优先推进 Token 用量可视化的 PR 审查，并对 Agent 中断功能给出明确的路线图回应。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-06-05

---

## 1. 今日速览

ZeroClaw 今日活跃度处于**高位**：过去 24 小时内 Issues 更新 35 条（新开/活跃 30 条，关闭 5 条），PR 更新 50 条（待合并 33 条，已合并/关闭 17 条），无新版本发布。项目当前处于 **v0.8.0 发布冲刺阶段**（#7112 追踪器活跃），多条 PR 围绕发布阻塞项展开修复。社区贡献者参与度显著提升，今日至少有 10 位以上贡献者提交了 PR，涉及 Web UI 增强、Provider 修复、安全架构、文档清理等多个维度。整体来看，项目正从功能扩张期向稳定性收敛期过渡。

---

## 2. 版本发布

**无新版本发布。**

当前版本追踪器 #7112 显示 v0.8.0 仍在队列中，多项阻塞项尚未完成合并。

---

## 3. 项目进展

今日合并/关闭的 PR 共 17 条，以下为关键进展：

| PR | 状态 | 说明 |
|---|---|---|
| **#7231** [fix(ollama): restore compiling master build](https://github.com/zeroclaw-labs/zeroclaw/pull/7231) | ✅ 已合并 | 修复 master 分支因 #7095 引入的 Ollama provider 编译错误（类型不匹配 + clippy 警告），恢复主干可构建状态 |
| **#7083** 关联修复 | ✅ 已关闭 | Windows shell tool 双引号转义问题（S1 级阻塞性 Bug）已关闭，表明相关修复已落地 |
| **#7179** 关联修复 | ✅ 已关闭 | ZeroClaw 空闲 RPC 会话 10 分钟自动清理问题已关闭 |
| **#7069** 关联修复 | ✅ 已关闭 | Twitter/X 频道在预编译二进制中不可用的文档/功能不一致问题已关闭 |
| **#7211** | ✅ 已关闭 | 仓库体积过大问题（S3 级），已处理 |

**整体推进评估：** 今日合并的 PR 以**编译修复和 Bug 关闭**为主，主干稳定性得到恢复。多条高优先级 PR（#7229、#7221、#7222、#7136 等）仍在评审中，预计将在 v0.8.0 中集中落地。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**#5962** — [Ollama Provider call failed when tools are needed](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)（6 条评论）
- **状态：** 已关闭
- **分析：** 这是持续最久的活跃讨论之一（自 4 月 21 日至今）。Ollama 在需要调用工具时会抛出错误并阻塞整个会话。今日关闭表明修复已合并。社区对本地模型 + 工具调用的组合需求强烈。

**#6909** — [computer-use support (screen interaction)](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)（5 条评论）
- **状态：** 开放中，已接受（accepted）
- **分析：** 用户希望 ZeroClaw 像 OpenAI Codex / Peekaboo 一样支持截图和鼠标/键盘事件。这是一个**高风险的架构级功能请求**（type:rfc），涉及桌面 GUI 交互能力。社区对"让 AI 真正操控电脑"有明确期待。

**#3566** — [A2A (Agent-to-Agent) Protocol Support](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)（5 条评论，👍7）
- **状态：** 开放中，已接受但被阻塞（blocked）
- **分析：** 获得最多点赞的功能请求。用户希望 ZeroClaw 原生支持 Linux Foundation 的 A2A v0.3.0 协议，实现跨实例、跨框架的 Agent 互操作。今日新增的 #7218（`.well-known/agent-card.json` 发现机制）是该方向的延伸讨论。

### 🔥 今日最受关注的 PR

**#7229** — [MCP, Skills, Plugins & Providers dashboard tabs](https://github.com/zeroclaw-labs/zeroclaw/pull/7229)
- 为 Web UI 新增四个一级管理标签页，让运维人员可以通过界面管理 MCP 服务器、Skills、插件和 Provider，无需手动编辑配置。这是 Web 管理面板的重大升级。

**#7136** — [add Kilo AI Gateway as first-class model provider](https://github.com/zeroclaw-labs/zeroclaw/pull/7136)
- 将 Kilo AI Gateway 作为一等公民 Provider 集成，附带定价捕获能力。反映了社区对**多 Provider 生态**的持续需求。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 S1 — 工作流阻塞

| Issue | 描述 | Fix PR |
|---|---|---|
| **#7227** [zerocode Quickstart hardcodes model-provider alias to `default`](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) | TUI 快速启动将别名硬编码为 `default`，与已有 Provider 冲突 | 暂无 |
| **#7125** [TUI freezes entirely when daemon disconnects](https://github.com/zeroclaw-labs/zeroclaw/issues/7125) | daemon 断开后 TUI 完全冻结，用户必须强制退出 | 暂无 |
| **#7143** [Agent repeatedly runs near-duplicate shell discovery commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7143) | Agent 在 Slack 中反复执行近似的 shell 命令直到耗尽 max_tool_iterations | 暂无 |

### 🟠 S2 — 行为降级

| Issue | 描述 | Fix PR |
|---|---|---|
| **#7225** [WhatsApp Web mention_only ignores replies to the bot](https://github.com/zeroclaw-labs/zeroclaw/issues/7225) | WhatsApp 群聊中直接回复机器人消息被丢弃 | 暂无 |
| **#7126** [Web UI "Clear all" only wipes rendered messages](https://github.com/zeroclaw-labs/zeroclaw/issues/7126) | 清除按钮仅重置前端，后端 session 历史未删除 | **#7222** ✅ 已提交 |
| **#7151** [Observability tool_call telemetry leaks onto chat WebSocket](https://github.com/zeroclaw-labs/zeroclaw/issues/7151) | 遥测数据泄漏到聊天 WS，显示永久"unknown"工具卡片 | **#7221** ✅ 已提交 |

### 🟡 S3 — 次要问题

| Issue | 描述 | Fix PR |
|---|---|---|
| **#7157** [Chat message timestamp rendered inside message bubble](https://github.com/zeroclaw-labs/zeroclaw/issues/7157) | 时间戳作为文本前缀显示在消息气泡内 | 暂无 |
| **#7139** [i18n: missing translation keys for chat toolbar buttons](https://github.com/zeroclaw-labs/zeroclaw/issues/7139) | 聊天工具栏按钮缺少国际化翻译键 | 暂无 |

**稳定性评估：** 今日有 3 个 S1 级 Bug 尚无修复 PR，其中 TUI 冻结问题（#7125）和 Agent 循环调用问题（#7143）影响用户体验较大，建议优先处理。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或已接受）

| 功能 | Issue | 信号 |
|---|---|---|
| **Web UI 管理面板大升级** | #7229 (PR) | MCP/Skills/Plugins/Providers 四个管理标签页，直接提升运维体验 |
| **Web 聊天支持斜杠命令** | #7137 → **#7223** (PR) | `/clear`、`/help`、`/model` 等，与 TUI/Channel 对齐 |
| **Per-model 能力配置** | #7100 | 按模型配置 vision/context_window，影响上下文预算管理 |
| **Pluggable security provider** | #7142 | 安全层插件化，目标 v0.9.0 |
| **OIDC 认证支持** | #7141 | RPC/WSS 传输层 OIDC 认证，目标 v0.9.0 |
| **Shell 命令审批中间层** | #7155 | 允许/询问/拒绝三级策略，类 Claude Code 体验 |

### 中期方向（RFC 阶段，被阻塞）

| 功能 | Issue | 说明 |
|---|---|---|
| **Computer-use 支持** | #6909 | 截图 + 鼠标/键盘事件，对标 Codex |
| **A2A 协议支持** | #3566 | Agent 互操作，👍7，社区呼声高 |
| **LSP 支持** | #5907 | 编码 Agent 减少幻觉，对标 Claude Code |
| **A2A Agent 发现机制** | #7218 | `.well-known/agent-card.json`，多 Agent 安装场景 |

### 路线图信号总结

社区需求正从"能用"转向"好用"和"安全"：**Web UI 完善**、**安全架构插件化**、**Agent 间互操作**是三大主线。v0.8.0 预计聚焦稳定性收敛，v0.9.0 可能承载安全架构和 OIDC 等重量级特性。

---

## 7. 用户反馈摘要

### 😤 痛点

- **本地模型体验割裂：** Ollama 工具调用长期存在问题（#5962），本地部署用户工作流被阻塞，修复姗姗来迟。
- **Web UI 功能残缺：** 用户多次反映 Web 聊天不如 TUI/Channel 完善——缺少斜杠命令（#7137）、文件上传（#7138）、正确的清除功能（#7126），感觉像是"半成品"。
- **Windows 兼容性差：** Shell 工具在 Windows 上双引号转义直接导致命令失败（#7083），Windows 用户被当作二等公民。
- **Agent 行为不可控：** Slack 场景下 Agent 反复执行近似命令耗尽迭代次数（#7143），用户缺乏细粒度控制手段。

### ✅ 满意

- **资源占用低：** #7143 评论者明确提到"ZeroClaw 比许多其他 Agent 系统资源占用少得多"，Rust 实现的性能优势得到认可。
- **响应速度：** 多个 Bug 在报告后 1-2 天内即有关闭/修复（#7179、#7083、#7069），维护者响应效率较高。

### 📋 使用场景

- **Slack 编码 Agent：** 企业用户将 ZeroClaw 作为 Slack 中的编码助手，但遇到 Agent 循环调用和缺乏进度反馈的问题。
- **本地模型 + Ollama：** 注重隐私的用户选择本地部署，但工具调用稳定性是最大障碍。
- **多 Agent 互操作：** 高级用户希望 ZeroClaw 与其他 Agent 框架（NanoClaw、OpenClaw 等）通过 A2A 协议通信。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，提醒维护者关注：

| 项目 | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| **#3566** [A2A Protocol Support](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | 2026-03-15 | 开放，blocked | 已近 3 个月，👍7，社区需求明确但持续被阻塞 |
| **#5907** [LSP support](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | 2026-04-19 | 开放，blocked | 超过 1.5 个月，编码 Agent 核心能力 |
| **#6074** [audit: track 153 commits lost in bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 2026-04-24 | 开放，in-progress | 大量已合并代码在回滚中丢失，恢复工作进展不明 |
| **#7112** [v0.8.0 release queue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) | 2026-06-02 | 开放 | 发布追踪器，多项阻塞项待解决 |
| **#6970** [v0.8.1 integration tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | 2026-05-27 | 开放 | v0.8.1 PR 队列已开始积累 |
| **#7125** [TUI freezes when daemon disconnects](https://github.com/zeroclaw-labs/zeroclaw/issues/7125) | 2026-06-03 | 开放 | S1 级，尚无修复 PR |
| **#7143** [Agent duplicate shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7143) | 2026-06-03 | 开放 | S1 级，尚无修复 PR |

**建议：** 优先为 #7125 和 #7143 分配维护者；对 #3566 和 #5907 给出明确的路线图预期或解除阻塞条件，避免社区热情消退。

---

*数据来源：GitHub zeroclaw-labs/zeroclaw | 报告生成时间：2026-06-05 | 分析引擎：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*