# OpenClaw 生态日报 2026-06-24

> Issues: 187 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-24 00:34 UTC

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

# OpenClaw 项目动态日报 — 2026-06-24

---

## 1. 今日速览

OpenClaw 今日保持高活跃度：**187 条 Issues 更新**（新开/活跃 141，已关闭 46）、**500 条 PR 更新**（待合并 473，已合并/关闭 27）。无新版本发布。社区讨论聚焦于**会话数据稳定性、多平台兼容性、以及内存/压缩子系统的可靠性**。多个高评分（🦞 diamond lobster、🐚 platinum hermit）的长期 Issue 在今日有显著推进，维护者与社区协作紧密。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的代表性 PR：

| PR | 状态 | 概要 |
|---|---|---|
| [PR #90404](https://github.com/openclaw/openclaw/issues/90404) | CLOSED | acpx TypeError（`in` operator on integer）修复，恢复 ACP Claude Code 在 `sessions_spawn(runtime="acp")` 路径下的可用性 |
| [PR #76729](https://github.com/openclaw/openclaw/issues/76729) | CLOSED | 修复飞书 webchat compaction 轮转后 assistant 消息丢失的问题 |
| [PR #92273](https://github.com/openclaw/openclaw/issues/92273) | CLOSED | Tool Search（mode: "tools"）静默破坏 pre-compaction memory flush 导致 durable memory 丢失 |
| [PR #90991](https://github.com/openclaw/openclaw/issues/90991) | CLOSED | Cron 触发污染全局运行时状态导致瞬时系统过载 |
| [PR #93465](https://github.com/openclaw/openclaw/issues/93465) | CLOSED | Windows 嵌入式 ACPX runtime `spawn EINVAL` 问题定位 |
| [PR #95760](https://github.com/openclaw/openclaw/issues/95760) | CLOSED | NVIDIA Build provider 流式中断 / stream 在 tool calls 中途切断的 zombie 状态 |
| [PR #90643](https://github.com/openclaw/openclaw/issues/90643) | CLOSED | Discord mention aliases 在 fenced code block 内被错误重写 |
| [PR #96226](https://github.com/openclaw/openclaw/pull/96226) | MERGED | macOS 客户端移除 Textual 依赖，改用原生 AttributedString 渲染 Markdown |

**整体判断**：今日合并着力修复了一批**数据完整性**与**跨平台兼容性**问题（memory 丢失、compaction 数据丢弃、Windows 崩溃、Discord 渲染修复），是稳定性加固日，非功能扩张日。

---

## 4. 社区热点

今日讨论量最大、👍 最多的 Issues（按评论数排列）：

### 🔥 热度 Top 5

**① [#88838](https://github.com/openclaw/openclaw/issues/88838) — Session/Transcript SQLite 迁移**（35 条评论，🦞 diamond lobster）
- 状态：Open，持续追踪中（Path 3 已通过 file-backed seam-adoption 阶段）
- 诉求：将核心 session/transcript 存储从 JSONL 迁移到 SQLite，解决大规模会话下的可靠性与查询能力

**② [#96148](https://github.com/openclaw/openclaw/issues/96148) — iMessage source-reply 延迟测量**（17 条评论）
- 涉及 PR #95621、#95942
- 诉求：量化 iMessage 渠道的响应延迟，建立性能基线

**③ [#92201](https://github.com/openclaw/openclaw/issues/92201) — Embedded runner thinking block 签名校验失败**（14 条评论，🦞 diamond lobster）
- Anthropic 流式 thinking block 在 replay 时签名不匹配，recovery wrapper 未被触发
- 关联：[#94228](https://github.com/openclaw/openclaw/issues/94228)（native Anthropic path 同样问题）

**④ [#90991](https://github.com/openclaw/openclaw/issues/90991) — Cron 运行时状态污染**（14 条评论，已关闭）
- 已修复

**⑤ [#92043](https://github.com/openclaw/openclaw/issues/92043) — 180s compaction timeout 不合理**（10 条评论，🦞 diamond lobster，👍 2）
- 历史调整 PR #91361 将超时从 900s 降至 180s，导致长上下文/慢链路场景反复失败
- 社区请求：按 chunk pipeline 阶段计时而非全局 wall clock

### 📈 最受期待功能请求

| Issue | 👍 | 诉求 |
|---|---|---|
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | 7 | Control UI 添加 MathJax/LaTeX 渲染 |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) | 1 | Vector store 按 workspace 目录而非按 agent 索引，消除重复 |
| [#96156](https://github.com/openclaw/openclaw/issues/96156) | 0 | Compaction provider 支持 MCP server 注册（新提出，3 条评论） |
| [#93422](https://github.com/openclaw/openclaw/issues/93422) | 2 | WebChat/Control UI `/label` 与 `/new <name>` 会话命名 |

---

## 5. Bug 与稳定性

按严重程度排序：

### P1 级（数据丢失 / 崩溃 / 全线路径失效）

| Issue | 标签 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#95833](https://github.com/openclaw/openclaw/issues/95833) | 🔒 jsonl.lock 未释放导致 session 永久不可用 | OPEN | ⚠️ 未分配 |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x SQLite 迁移后 channel conversation-store 为空，破坏 Teams 发送 | OPEN | ❌ |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Native Anthropic path 长期会话 brick（thinking block 400） | OPEN | ❌ |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Embedded runner thinking signature 间歇性无效 | OPEN | ❌ |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | Subagent 完成投递失败（requester session 不可用 + transcript 被锁） | OPEN | ❌ |
| [#94251](https://github.com/openclaw/openclaw/issues/94251) | Ollama 远程 provider 流式不被消费，session 卡死在 model_call:started | OPEN | ❌ |
| [#73910](https://github.com/openclaw/openclaw/issues/73910) | Codex ACP 因隔离 COX_HOME 缺 auth 而失败，且发送不支持的 timeout 配置 | OPEN | ❌ |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Session/transcript 存储架构限制 | OPEN（调研/迁移中） | 内部 PR |

### P2 级（行为异常 / 性能 / 部分功能不可用）

| Issue | 状态 |
|---|---|
| [#88657](https://github.com/openclaw/openclaw/issues/88657) — DeepSeek V4 Flash 在 2026.5.27+ 产生空 turn | OPEN |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) — 180s compaction timeout 全局一刀切 | OPEN |
| [#95566](https://github.com/openclaw/openclaw/issues/95566) — WebChat assistant reply 渲染早于 user prompt，消息重复 | OPEN |
| [#95136](https://github.com/openclaw/openclaw/issues/95136) — provider id 移除后 OAuth 配置静默孤儿化，无迁移路径 | OPEN |
| [#95554](https://github.com/openclaw/openclaw/issues/95554) — Telegram richMessages 在 2026.6.9 破坏段落与表格渲染 | OPEN |
| [#94032](https://github.com/openclaw/openclaw/issues/94032) — exec 工具无法访问私网 LAN，GUI 正常 | OPEN |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) — Prompt cache prefix 动态注入导致 OpenAI 缓存命中率下降 | OPEN |

**🔴 风险提示**：`#95833`（锁泄漏）与 `#94939`（SQLite 迁移数据丢失）是今日最需优先响应的 P1 数据完整性 bug，涉及持久化可靠性与版本升级回归。

---

## 6. 功能请求与路线图信号

### 可能纳入下版本的 Feature Request

| Issue | 信号强度 | 判断依据 |
|---|---|---|
| [#95793](https://github.com/openclaw/openclaw/pull/95793) — SOUL.md 自进化（reflection sub-turn + soul_update） | 🟢 高 | PR 已开放，设计完备，关闭了关联 Issue #95790 |
| [#95591](https://github.com/openclaw/openclaw/pull/95591) — MCP shared bundled runtime scope | 🟢 高 | PR 已开放，修复 #95506 性能痛点，解决 MCP 进程重复创建 |
| [#96229](https://github.com/openclaw/openclaw/pull/96229) — Per-agent env subprocess contract | 🟢 高 | PR 已开放，关闭 #93425，解决多 agent 环境隔离需求 |
| [#96156](https://github.com/openclaw/openclaw/issues/96156) — Compaction provider 支持 MCP server | 🟡 中 | 设计理念与现有 `registerCompactionProvider()` 兼容，但尚无 PR |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) — MathJax/LaTeX（👍 7） | 🟡 中 | 长期需求，无活跃 PR；macOS 端刚完成 Textual→原生渲染迁移（PR #96226），HTML 端渲染能力已具备基础 |
| [#93422](https://github.com/openclaw/openclaw/issues/93422) — WebChat/Control UI 会话命名（👍 2） | 🟢 中高 | PR #90184（session picker rename）已就绪，关联度高 |
| [#79047](https://github.com/openclaw/openclaw/issues/79047) — 跨 backend 模型切换时保留会话上下文 | 🟡 中 | 架构敏感，尚无明确方案，PR 预计较大 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点与情绪：

### 😤 高频痛点

1. **长期会话数据完整性焦虑**：多个用户反映 6.x 升级后出现数据丢失（SQLite 空文件、compaction 丢消息、migration 静默失败），用户对"升级即信任"感到动摇。（#94939、#76729、#92273）

2. **性能退化感知明显**：2026.6.x 升级后，多 session 并发下 gateway 变慢 (#92057)、DeepSeek cache 命中率从 80%+ 暴跌至 <10% (#94518)、prompt cache 因动态注入失效 (#95610) —— 用户对"新版比旧版慢"的反馈集中且具体。

3. **跨平台不可用**：Windows ACPX spawn EINVAL (#93425)、Mac 私网访问失败 (#94032)、Windows exec 硬编码 PowerShell 导致复杂 shell 命令不可用 (#49931) —— 非 Linux 用户体验仍有明显差距。

### 😊 满意表达

- iMessage source-reply 延迟测量 Issue (#96148) 中，用户对细致的性能量化工作表示认可
- Codex native post-tool middleware (#95611) 的 Codex 辅助开发 模式被正面引用
- SOUL.md 自进化 PR (#95793) 的设计（reflection sub-turn + 显式确认 + undo 命令）获得社区好评，被认为"平衡了自主性与安全性"

### 💡 关键使用场景

- **Ironclad 多 session 并发部署**（#92057）：运维型用户同时运行数十 session，gateway 稳定性直接决定可用性
- **长上下文深度分析**（#92043、#88870）：用户用 thinking: max 模式做 deep review，超时误杀严重打断工作流
- **飞书/Teams 企业集成**（#76729、#94939）：compaction/迁移 bug 直接导致企业消息链断裂

---

## 8. 待处理积压 ⚠️

以下高优先级 Issue/PR 长期未响应，建议维护者优先审视：

| Issue | 创建天数 | 状态 | 风险 |
|---|---|---|---|
| [#95833](https://github.com/openclaw/openclaw/issues/95833) | 2 天 | 🔴 OPEN，无 assignee | 锁泄漏导致 session 不可逆损坏 |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 5 天 | 🔴 OPEN，无 assignee | 6.x 升级回归，Teams 受影响 |
| [#73910](https://github.com/openclaw/openclaw/issues/73910) | 28+ 天 | 🟠 stale 风险 | Codex ACP 功能半失效 |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | 23 天 | 🟡 推进中，Path 3 阶段 | SQLite 迁移为大型架构变更，需持续资源投入 |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 14 天 | 🟡 无 PR | 影响所有长上下文部署 |
| [#46548](https://github.com/openclaw/openclaw/issues/46548) | 95+ 天 | 🟠 stale 风险 | 工具错误信息缺失，影响所有用户的日常调试体验 |
| [#49931](https://github.com/openclaw/openclaw/issues/49931) | 90+ 天 | 🟠 stale 风险 | Windows exec 不可配置 shell |
| [#71712](https://github.com/openclaw/openclaw/issues/71712) | 60 天 | 🟠 stale 需求 | Agent-facing cron API RFC，内容详实但无人认领 |
| [PR #95793](https://github.com/openclaw/openclaw/pull/95793) | 2 天 | 🟡 waiting on author | SOUL.md 自进化，热门需求但需 author 继续推进 |

---

## 📊 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| **社区活跃度** | 🟢 高 | 187 Issues + 500 PR / 天，参与度极强 |
| **稳定性** | 🟡 中 | P1 数据完整性 bug 积压（#95833、#94939），6.x 升级引入多处回归 |
| **响应速度** | 🟡 中 | 高流量时段的 gateway 性能与 compaction timeout 问题尚无修复 PR |
| **跨平台** | 🟠 偏低 | Windows / Mac / 私网场景持续暴露兼容性缺口 |
| **路线图推进** | 🟢 良好 | SOUL 自进化、MCP runtime scope、per-agent env 等高质量 PR 在管线中 |

**一句话总结**：社区热度与贡献量持续攀升，但 6.x 版本升级带来的**数据稳定性回归**正成为用户信任的最大风险点，建议将锁泄漏（#95833）与 SQLite 迁移空文件（#94939）升级为发布阻断级优先修复。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态

## 横向对比分析报告 — 2026-06-24

---

## 1. 生态全景

2026 年 6 月 24 日，个人 AI 助手与自主智能体开源生态处于**高密度并行迭代期**。11 个活跃项目今日合计处理约 **380+ 条 Issue** 与 **750+ 条 PR**，无一声明显降温。整体呈现出三个核心特征：

1. **稳定性回填压倒功能扩张**——多数项目 6.x / 2.0 版本升级后出现数据完整性回归（锁泄漏、SQLite 迁移空文件、compaction 丢消息），社区资源集中投入于修复而非创新。
2. **跨平台与 IM 企业集成成为标配战场**——Windows/macOS 兼容性、WhatsApp/Telegram/Slack/飞书/钉钉通道稳定性几乎在所有项目中高频出现，反映终端用户已突破"Linux 开发者尝鲜"阶段。
3. **从单 agent 工具向多设备、多 agent、记忆演进架构迁移**——SOUL.md 自进化、cron 子代理引擎、delegate 模式、滚动上下文管理、plugin extension point 等方向同时涌现，标志着生态正从"聊天机器人"走向"自主执行系统"。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PRs (待合并/已合并) | Release | 健康度 | 一句话状态 |
|---|---|---|---|---|---|
| **OpenClaw** | 141 / 46 | 473 / 27 | — | 🟡 中（数据完整性风险） | 高流量下集中修复 6.x 回归 |
| **NanoBot** | 7 / 4 | 32 / 7 | **v0.2.2** | 🟢 良好 | 稳定性加固 + PWA + 记忆深化 |
| **Hermes Agent** | 39 / 11 | 41 / 9 | — | 🟢 良好 | 多 agent 编排 + Telegram 稳定性攻坚 |
| **PicoClaw** | ~3 / 1 | 11 / 6 | — | 🟢 B+ | 低噪音，通道修复 + PR 清理 |
| **NanoClaw** | ~1 / 0 | 4 / 8 | — | 🟢 良好 | SDK 统一升级 + Slack Socket Mode |
| **NullClaw** | 1 / 0 | 1 / 0 | — | 🟠 偏冷 | PR #783 cron 引擎 80+ 天未决 |
| **IronClaw** | 14 / 7 | 23 / 19 | — | 🟡 中（死锁/超时风险） | Reborn CRUD 冲刺 + 上下文瘦身 |
| **LobsterAI** | 1 / 0 | 6 / 5 | — | 🟠 偏冷 | 6.x 回归修复 + LiteLLM 网关 |
| **TinyClaw** | 0 / 0 | 0 / 0 | — | ⚪ 无活动 | 休眠状态 |
| **Moltis** | 0 / 0 | 1 / 0 | — | ⚪ 极低 | 4 月 PR 刚被关闭 |
| **CoPaw** | ~38 / 0 | ~50 / 0 | **v1.1.12.post2** | 🟡 中 | 2.0 迁移震荡 + 移动端适配潮 |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | — | ⚪ 无活动 | 休眠状态 |
| **ZeroClaw** | 21 / 13 | 31 / 19 | — | 🟢 良好 | 基础设施补课 + 安全加固 |

> **注**：部分项目 Issues 统计口径为实际活跃数，PR 数为当日变更总量。

---

## 3. OpenClaw 在生态中的定位

### 3.1 社区规模绝对领先

| 指标 | OpenClaw | 生态均值（其余10项目） |
|---|---|---|
| 日均 Issues | 187 | ~15 |
| 日均 PRs | 500 | ~35 |
| 🦞 高优 Issue 数量 | 5+ | ~0.5 |

OpenClaw 的日活贡献量约为**第 2-3 名（IronClaw、ZeroClaw）的 6-10 倍**，是生态中无可争议的**流量中心**。

### 3.2 技术路线差异

| 维度 | OpenClaw | 竞品差异化 |
|---|---|---|
| **架构哲学** | "万能胶水"——统一接入 20+ Providers、15+ Channels，强调开箱即用 | Hermes 侧重 AI 原生自研协议；PicoClaw 聚焦嵌入式/移动端；ZeroClaw 强调 Rust WASM 安全沙箱 |
| **扩展机制** | Provider Plugin + Skill 系统，今日开放 SOUL.md 自进化 | ZeroClaw 走 WASM component model；NanoClaw 走 registerX/applyX extension point |
| **记忆子系统** | compaction + durable memory，今日暴露多个数据完整性 bug | NanoClaw scroll context manager（SQLite + REPL）为更激进路线 |
| **企业集成** | 原生飞书/Teams/iMessage/Discord/Telegram，覆盖最广 | IronClaw 深度绑定 Slack + Google Workspace；LobsterAI 尝试验证 OpenClaw 兼容层+企业 IM |
| **运行环境** | Linux-first，Windows/macOS 仍有兼容性缺口 | PicoClaw 明确支持 Termux/Android；CoPaw 优先 Tauri 桌面端 |

### 3.3 OpenClaw 的核心优势与风险

| 优势 | 风险 |
|---|---|
| Provider 生态最丰富，迁移成本最低 | 6.x 升级频繁出现数据完整性回归，用户信任受损 |
| Issue 响应速度与维护者互动密度高 | Windows/macOS 兼容性持续落后于 Linux |
| 每日期报中 #88838 SQLite 迁移代表架构进化野心 | 庞大的 Issue 积压（#95833、#96156 等 90+ 天 stale）显示维护带宽瓶颈 |
| SOUL 自进化等前沿方向获得社区好评 | 性能退化反馈集中（DeepSeek cache 暴跌、gateway 变慢） |

---

## 4. 共同关注的技术方向

以下方向在 ≥3 个项目中同步出现，代表生态共识：

### 4.1 数据持久化与存储架构升级

| 项目 | Issue/PR | 诉求 |
|---|---|---|
| OpenClaw | #88838（🦞） | Session/Transcript 从 JSONL → SQLite |
| NanoClaw | #5321 | Scroll context manager：对话持久化到 SQLite + REPL 召回 |
| OpenClaw | #95833 | jsonl.lock 未释放导致 session 永久不可用 |
| OpenClaw | #94939 | 6.x SQLite 迁移后 channel conversation-store 为空 |

**共识**：JSONL 文件存储已成为瓶颈，向 SQLite / 结构化 KV 迁移是大趋势。但迁移过程中的数据完整性保障是共同痛点。

### 4.2 Cron / 定时任务可靠性

| 项目 | Issue/PR | 诉求 |
|---|---|---|
| OpenClaw | #90991 | Cron 触发污染全局运行时状态 |
| NullClaw | PR #783（80+ 天 open） | Cron 子代理引擎：DB 后端、历史追踪、JSON 输出 |
| CoPaw | #5064、#5398 | Cron 任务停止分发、Agent 创建的任务无法触发 |
| IronClaw | #5133、#5166 | Reborn 自动化 CRUD 闭环 + Slack 交付通道 |

**共识**：Cron 已从"nice-to-have"变为核心能力，但状态管理、失败重试、会话复用是共同的工程短板。

### 4.3 IM 企业集成稳定性

| 项目 | 问题 |
|---|---|
| Hermes Agent | Telegram 无限循环 + 连接池泄漏 + 打字指示器卡死 |
| OpenClaw | Telegram 富消息破坏渲染 + 飞书 compaction 丢消息 |
| NanoBot | Telegram 换行丢失 + 流式闪烁 |
| PicoClaw | WhatsApp WebSocket 断线 + LINE sync.Map panic |
| ZeroClaw | Matrix 房间管理 + 钉钉流式消息 |
| IronClaw | Slack setup 迁移进 WebUI + 交付通道 |

**共识**：IM 通道的稳定性已成为用户留存关键，Telegram 因其 API 限制（4096 字符、Markdown 渲染）成为 bug 高发区，多个项目在考虑消息传输层重构。

### 4.4 Compaction / 上下文管理

| 项目 | Issue/PR | 诉求 |
|---|---|---|
| OpenClaw | #92043（🦞） | 180s 全局超时一刀切，请求按 chunk pipeline 阶段计时 |
| OpenClaw | #92273 | Tool Search 静默破坏 pre-compaction memory flush |
| OpenClaw | #76729 | 飞书 webchat compaction 轮转后 assistant 消息丢失 |
| CoPaw | #5416 | thinking/content 分离导致用户看不到回复 |
| OpenClaw | #96156 | Compaction provider 支持 MCP server 注册 |

**共识**：长上下文 + thinking 模型的组合让 compaction 从"可选项"变为"必选项"，但其数据丢失风险是用户最大焦虑。

### 4.5 多 Agent 协同与记忆增强

| 项目 | 方向 |
|---|---|
| OpenClaw | SOUL.md 自进化（reflection sub-turn + soul_update） |
| Hermes Agent | 通用 ACP 多代理编排层 |
| ZeroClaw | 独立 delegate mode + specialist handoff |
| NanoBot | Wiki 记忆系统 + 归档事实溯源 |
| CoPaw | scroll context manager + 记忆时间感知排序 |

**共识**：从"单次对话"到"长期记忆"、从"单 agent"到"agent 协同"是 2026 年下半年的核心叙事。

---

## 5. 差异化定位分析

```
┌────────────────────────────────────────────────────────────────────┐
│                    生态定位光谱（按复杂度与目标用户）                    │
├────────┬──────────────┬──────────────────┬────────────────────────┤
│  定位   │    项目       │   核心差异        │   目标用户              │
├────────┼──────────────┼──────────────────┼────────────────────────┤
│ 轻量级  │ PicoClaw     │ 嵌入式/移动端优先  │ Termux 用户、IoT 场景   │
│ 轻量级  │ NullClaw     │ 极简, v2026.5.x   │ 低资源环境、单一模型用户  │
│ 轻量级  │ Moltis       │ 工具/技能导向      │ 技能开发者              │
├────────┼──────────────┼──────────────────┼────────────────────────┤
│ 中量级  │ NanoClaw     │ SDK 统一 +        │ 需要 Slack 集成的团队   │
│         │              │ Socket Mode       │                        │
│ 中量级  │ NanoBot      │ PWA + 轻量 Agent  │ 移动优先用户            │
│ 中量级  │ CoPaw        │ AgentScope 2.0 + │ 学术/桌面端 Tauri 用户  │
│         │              │ 移动端适配         │                        │
├────────┼──────────────┼──────────────────┼────────────────────────┤
│ 企业级  │ IronClaw     │ WASM 扩展 +       │ 需要 Google Workspace   │
│         │              │ Reborn 自动化      │ 集成 + 审批流的企业      │
│ 企业级  │ LobsterAI    │ OpenClaw 兼容层   │ 已有 OpenClaw 部署     │
│         │              │ + 企业 IM          │ 需要 GUI 的团队         │
├────────┼──────────────┼──────────────────┼────────────────────────┤
│ 全能平台│ OpenClaw     │ Provider/Channel  │ 全栈开发者、极客、       │
│         │              │ 覆盖最广           │ 多模型/多渠道用户        │
│ 全能平台│ Hermes Agent │ 自研协议 +        │ 需要自定义 Agent 逻辑   │
│         │              │ 多模型 + 安全门控  │ 的安全敏感用户           │
│ 全能平台│ ZeroClaw     │ Rust + WASM       │ 安全优先、需要硬件集成   │
│         │              │ 沙箱 + RFC 流程   │ 的嵌入式/边缘用户        │
└────────┴──────────────┴──────────────────┴────────────────────────┘
```

### 关键技术架构差异

| 维度 | OpenClaw | ZeroClaw | CoPaw | Hermes Agent |
|---|---|---|---|---|
| 语言 | Python | Rust | Python | Python |
| 安全模型 | Provider sandbox | WASM component model | AgentScope 2.0 | Tirith 审批门控 |
| 插件系统 | Skill + Provider | WASM plugins (migration to wasmtime RFC) | Memory hooks (PR #8238) | Plugin hooks (static_context) |
| 配置存储 | YAML/TOML + SQLite 迁移中 | TOML + DB | YAML + AgentScope | JSON + WebUI |
| 企业认证 | OAuth pool | WASM sandbox env | AgentScope auth | OAuth + credential_process |
| 独特优势 | 生态广度 | 安全/性能平衡 | 学术框架背景 | 自定义 Agent 协议 |

---

## 6. 社区热度与成熟度分层

### 🔴 快速迭代期（日均 Issues > 15，PR 吞吐高，有新版本发布或即将发布）

| 项目 | 特征 | 所处阶段 |
|---|---|---|
| **OpenClaw** | 500 PR/天，但 P1 bug 积压 | Version 6.x → 修复冲刺 |
| **IronClaw** | 42 PR/天，Reborn CRUD + Slack 重构 | 功能冲刺 → 稳定化 |
| **ZeroClaw** | 50 PR/天，基础设施补课 | v0.9.0 里程碑前夜 |
| **CoPaw** | 50 PR/天 + v1.1.12.post2，2.0 迁移震荡 | 大版本迁移 → 震荡清理 |
| **NanoBot** | 39 PR/天 + v0.2.2 发布 | 稳定扩张期 |
| **Hermes Agent** | 50 Issue/天，多个架构 RFC | 协议设计 → 实现期 |

### 🟢 质量巩固期（日均 Issues < 10，PR 集中在 bug fix）

| 项目 | 特征 |
|---|---|
| **PicoClaw** | 17 PR/天但无集中通道修复，安全相关 PR 积压 |
| **NanoClaw** | 12 PR/天，SDK 升级 + 增量功能，主干稳定 |

### ⚪ 休眠/停滞期

| 项目 | 风险 |
|---|---|
| **NullClaw** | PR #783 80+ 天 open，Issue #967 关闭无说明，社区信心流失 |
| **LobsterAI** | #1400 致命升级阻断 80+ 天未修复，PR #1401 安全修复亦 80+ 天未合并 |
| **TinyClaw** | 24 小时零活动 |
| **ZeptoClaw** | 24 小时零活动 |
| **Moltis** | 仅 1 PR 被关闭，社区参与度极低 |

> **生态规律**：快速迭代期的项目同质化严重（都在修 compaction 崩溃、IM 通道 bug、cron 可靠性），成熟度差异主要体现在**响应速度和积压管理能力**。

---

## 7. 值得关注的趋势信号

### 🔮 信号 1：Compaction 将成为 2026 H2 核心战场

当 thinking 模型成为主流，单次对话 token 量从 10K 飙升至 100K+。OpenClaw 的 compaction timeout 争议（#92043）和 message 丢失（#76729）、CoPaw 的 context 截断（#5416）只是冰山一角。预期所有项目在 2026 Q3 前都需要构建或接入更可靠的上下文管理方案。

**开发者参考**：NanoClaw scroll context manager（SQLite + REPL 召回）和 SOUL.md 自进化（显式记忆更新 + undo）是两个值得研究的方向。

### 🔮 信号 2：从"聊天 UX"向"后台执行 UX"迁移

Cron 任务修复（NullClaw #783、CoPaw #5398）、IronClaw Reborn 自动化 CRUD、OpenClaw SOUL.md 自进化——趋势是用户不再盯着对话窗口，而是期望 agent 安静、可靠地在后台完成长时间工作。这对可观测性（IronClaw #51590 启动遥测）、错误恢复（OpenClaw #90991 状态污染）、会话管理提出新要求。

**开发者参考**：IronClaw 的"dashboard 自动化管理 + 启动阻塞遥测"思路是正确的演进方向。

### 🔮 信号 3：Plugin 生态标准化竞赛

NanoClaw registerX/applyX extension point（零影响合并）、OpenClaw provider 注册机制、ZeroClaw WASM component model RFC、Hermes static_context 插件钩子——所有项目都在解决同一问题：如何在不修改主干的情况下让第三方扩展 agent 能力。2026 Q3 可能会看到某种事实标准的雏形。

**开发者参考**：NanoClaw 的"零注册者时与上游字节级相同"的安全降级设计值得借鉴。

### 🔮 信号 4：移动端不再是边缘场景

NanoBot PWA（#4480）、PicoClaw Termux（#3164）、CoPaw Tauri 桌面端（#5317）、Hermes iMessage（#5257）——移动端用户在总用户占比可能已超过 30%。但 Android/Termux 的 hook 崩溃（PicoClaw #3164）和 iOS Safari 缩放问题（NanoBot #4471）表明，移动端适配仍停留在"能跑"而非"好用"。

### 🔮 信号 5：安全隐患正在集中暴露

- OpenClaw #95833（锁泄露导致 session 不可逆损坏）
- LobsterAI #1401（SSE 请求 ID Math.random() 可预测）
- NanoClaw #2840（端口绑定暴露生产环境）
- Hermes #5169（安全词汇误杀导致可用性下降）
- PicoClaw #3160（跨站 launcher 设置请求）

所有安全相关 Issue 都处于**长期未响应**状态，这与社区对速度的追逐形成矛盾。2026 H2 可能会出现因安全问题导致的信任危机。

### 🔮 信号 6：AI 智能体框架呈现"M 型"分化

```
        全能平台（高维护成本、高能力上限）
           /                          \
    OpenClaw                    ZeroClaw
    Hermes Agent                IronClaw
           \                          /
        轻量级（低维护成本、场景聚焦）
           /                          \
    PicoClaw                    NanoClaw
    NanoBot                     CoPaw
```

两头活跃，中间地带（NullClaw、TinyClaw、Moltis、ZeptoClaw、LobsterAI）由于缺乏差异化定位而逐渐边缘化。生态正在经历自然的淘汰与整合。

---

## 附录：关键数字速查

| 指标 | 数值 |
|---|---|
| 今日活跃项目数（有 PR/Issue 变化） | 9/11 |
| 总 Issues 变更 | ~380+ |
| 总 PR 变更 | ~750+ |
| 新版本发布 | 3（NanoBot v0.2.2, CoPaw v1.1.12.post2, TinyClaw 无） |
| 🦞 高优 Issue | 5+ |
| 超过 30 天未解决的 P1 Issue | 6 |
| 最严重积压 | NullClaw PR #783（80+ 天）、LobsterAI #1400（80+ 天） |

---

*报告由 OWL 基于 2026-06-24 GitHub 公开数据生成。健康度评估受Issue 数据完整性和日报撰写者主观判断影响，仅供参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-06-24

## 1. 今日速览

NanoBot 在 2026-06-23 经历了一个**高度活跃**的开发日。过去 24 小时内共处理 11 条 Issue 更新（新开/活跃 7 条，关闭 4 条）和 39 条 PR 更新（32 条待合并，7 条已合并/关闭），并发布了 **v0.2.2** 版本。社区贡献者活跃，Bug 修复与新功能推进并行，项目处于**快速迭代、健康推进**的状态。

---

## 2. 版本发布

### 🐈 v0.2.2 正式发布

> **"The agent got sturdier!"**

- **140 PRs 合并**，新增 **21 位贡献者**
- 主打方向：**耐用性（Durability）**
  - WebUI 对话记录改为分段存储，不再依赖单一脆弱文件
  - Fork 聊天更可靠地保留回复
  - 改进了活跃对话的持续性与状态恢复能力

> **迁移注意事项：** 对话记录的存储格式发生变化，老版本的 transcript 文件可能需要进行兼容性适配。建议升级后检查历史对话是否仍可正常加载。

---

## 3. 项目进展

今日合并/关闭的重要 PR 涵盖了多个关键方向：

| 方向 | PR | 说明 |
|------|----|------|
| 🔗 PWA 支持 | [#4458](https://github.com/HKUDS/nanobot/pull/4458)（已关闭，由 #4480 替代） | WebUI 添加 manifest.json 和 service worker，支持移动端安装到主屏幕 |
| 🔗 Context 回退 | [#4387](https://github.com/HKUDS/nanobot/pull/4387)（已合并） | 项目级 AGENTS.md 加载后，缺失的 SOUL.md/USER.md 可回退到默认 workspace |
| 🔗 MCP 测试稳定性 | [#4417](https://github.com/HKUDS/nanobot/pull/4417)（已合并） | 使用可解析的回归测试 URL，避免依赖不可解析主机名 |
| 🔗 Git 子目录测试 | [#4393](https://github.com/HKUDS/nanobot/pull/4393)（已合并） | 补充 workspace 子目录下 git 命令的端到端回归测试 |

**项目整体进展：**

1. **移动端体验大幅提升** — PWA 支持、iOS Safari 缩放修复（#4471）、Telegram 流式消息修复（#4472）集中解决移动场景问题
2. **Provider 多样性扩展** — OpenCode Zen & Go 两个新 provider（#4476）、Kimi Coding Plan 支持（#4463）持续丰富模型生态
3. **Memory 系统深化** — 热记忆整合（#4402）、归档事实溯源（#4424）、Wiki 记忆写入（#4477）等功能推动 Agent 记忆能力向更精细化方向发展
4. **稳定性持续加固** — MCP 重连崩溃修复（#4441）、tool_use ID 去重（#4474/#4444）、Dream cursor 推进（#4481）等修复提升系统鲁棒性

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**Issue [#2298](https://github.com/HKUDS/nanobot/issues/2298) — 工具调用无限循环**
- 状态：OPEN（已开放近 3 个月，持续讨论中）
- 5 条评论 | 2026-03-20 创建
- **核心诉求：** 小模型/本地模型场景下，Agent 反复调用相同工具进入死循环。用户建议增加检测机制——当模型重复调用同一工具时自动中断或降级。

**Issue [#4470](https://github.com/HKUDS/nanobot/issues/4470) — Telegram 显示 Bug**
- 状态：OPEN，已关联修复 PR
- **核心问题：** v0.2.2 升级后 Telegram 消息换行丢失（单块文本）+ 流式编辑导致消息闪烁

**Issue [#4463](https://github.com/HKUDS/nanobot/issues/4463) — Kimi Coding Plan 支持**
- 状态：OPEN
- **核心诉求：** 为订阅用户支持 Kimi 付费 Coding 端点

### 🔥 关注最多的 PRs

- **[#4480](https://github.com/HKUDS/nanobot/pull/4480) PWA + 移动端侧边栏滑动手势** — 替代已关闭的 #4458，功能更完整
- **[#4482](https://github.com/HKUDS/nanobot/pull/4482) 自定义 provider 支持 thinking style** — 解决火山引擎/豆包等非标准 thinking 参数适配问题

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 修复 PR |
|--------|------|------|---------|
| 🔴 **高** | MCP server 重连时 cancel scope 崩溃（RuntimeError） | 修复中 | [#4441](https://github.com/HKUDS/nanobot/pull/4441) |
| 🔴 **高** | AnthropicProvider 并行 tool_use ID 重复 → 400 错误 | 已修复 | [#4474](https://github.com/HKUDS/nanobot/pull/4474)（已关闭），[#4444](https://github.com/HKUDS/nanobot/pull/4444)（待确认合并） |
| 🟡 **中** | 升级后 heartbeat 错误发送消息（原本要求不发送时仍发送） | 待关闭 | [#4410](https://github.com/HKUDS/nanobot/issues/4410)（已关闭但需确认修复） |
| 🟡 **中** | Telegram 消息换行丢失 + 流式闪烁 | 修复中 | [#4472](https://github.com/HKUDS/nanobot/pull/4472) |
| 🟡 **中** | WebUI 渲染 `<thinking/>` 标签为可见文本（内部信息泄露） | 待修复 | [#4465](https://github.com/HKUDS/nanobot/issues/4465) |
| 🟢 **低** | iOS Safari 输入框字体小于 16px 导致自动缩放 | 修复中 | [#4471](https://github.com/HKUDS/nanobot/pull/4471) |

---

## 6. 功能请求与路线图信号

基于今日 Issues 和活跃 PR，以下功能大概率进入下一版本规划：

**高 Roadmap 优先级（已有活跃 PR）：**

1. **📦 PWA 支持 + 移动端体验优化** — [#4480](https://github.com/HKUDS/nanobot/pull/4480)
   - 包含 manifest.json、Service Worker、移动端滑动手势

2. **🤖 OpenCode Zen & Go 新 Provider** — [#4476](https://github.com/HKUDS/nanobot/pull/4476) / [#4475](https://github.com/HKUDS/nanobot/issues/4475)
   - 面向编码场景的优化模型与高性价比模型

3. **🧠 Wiki 记忆系统** — [#4477](https://github.com/HKUDS/nanobot/pull/4477)
   - 生命周期感知的派生记忆写入器，支持概念验证和确定性修复

4. **🔀 Cron 任务模型预设 + 子 Agent 模型覆盖** — [#4416](https://github.com/HKUDS/nanobot/pull/4416) / [#4415](https://github.com/HKUDS/nanobot/pull/4415)
   - 为 cron 和子 Agent 支持独立模型配置

5. **💡 自定义 Provider Thinking Style** — [#4482](https://github.com/HKUDS/nanobot/pull/4482)
   - 开放火山引擎/豆包等非标准 thinking 参数配置

**中优先级（社区需求强烈，但暂无活跃 PR）：**

6. **🔧 工具调用循环检测与中断** — [#2298](https://github.com/HKUDS/nanobot/issues/2298)
   - 近 3 个月老龄 Issue，社区持续呼吁，可能需要架构层改动

7. **📝 隐藏推理步骤显示** — [#2305](https://github.com/HKUDS/nanobot/issues/2305)
   - 用户希望保留 reasoning 但隐藏中间步骤展示

8. **🔄 Dream 更新现有 workspace skill 而非重复创建** — [#4467](https://github.com/HKUDS/nanobot/issues/4467)
   - 影响日常使用体验的工作流改进

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键痛点与使用场景：

### 😤 痛点

| 场景 | 反馈内容 | Issue |
|------|----------|-------|
| **小模型场景** | "使用较小/本地模型时，nanobot 进入无限循环，反复调用同一工具" | [#2298](https://github.com/HKUDS/nanobot/issues/2298) |
| **Telegram 用户** | "v0.2.2 升级后消息变成一整块文本，没有换行；流式回复不断编辑导致闪烁" | [#4470](https://github.com/HKUDS/nanobot/issues/4470) |
| **Heartbeat 误触发** | "升级前 heartbeat 正确不发送消息，升级后反而开始发送了" | [#4410](https://github.com/HKUDS/nanobot/issues/4410) |
| **Dream 技能重复** | "每次 Dream 运行都创建新 skill 而不是更新现有的，导致 skills/ 目录不断膨胀" | [#4467](https://github.com/HKUDS/nanobot/issues/4467) |
| **WebUI 信息泄露** | "thinking 标签作为可见文本渲染，模型控制文本暴露给前端用户" | [#4465](https://github.com/HKUDS/nanobot/issues/4465) |

### 😃 满意信号

- 用户对 **v0.2.2 的耐用性改进**给予正面评价（"The agent got sturdier!"），说明对话存储稳定性和 fork 聊天的改进方向符合用户期望。
- **PWA 支持**被多个用户积极讨论和推动，说明移动端使用 NanoBot 是真实且强烈的需求。

---

## 8. 待处理积压

以下长期活跃的 Issue/PR 建议维护者优先关注：

| Issue/PR | 年龄 | 建议行动 |
|----------|------|----------|
| [#2298](https://github.com/HKUDS/nanobot/issues/2298) — 工具调用无限循环 | ~3 个月 | 考虑列入 v0.2.3 里程碑，需要设计循环检测机制 |
| [#2305](https://github.com/HKUDS/nanobot/issues/2305) — 隐藏推理步骤显示 | ~3 个月 | UI 层改动，评估是否可快速实现 |
| [#2604](https://github.com/HKUDS/nanobot/issues/2604) — 记忆系统相关（PR #4402 引述） | 长期 | 查看 #4402 合并进度，决定后续计划 |
| [#4373](https://github.com/HKUDS/nanobot/pull/4373) — Memory 投递上下文保留 | 活跃中 | 审查改动范围，尽快给出 review 结论 |
| [#4378](https://github.com/HKUDS/nanobot/issues/4378) — Cron 模型预设需求 | 已有关联 PR #4416 | 跟踪 #4416 合并进度 |
| [#4242](https://github.com/HKUDS/nanobot/issues/4242) — Dream disabled 时 cursor 不推进 | 有修复 PR #4481 | 审查并合并修复 |

---

**本报告基于 2026-06-24 的 GitHub 公开数据生成。** NanoBot 社区展现出了良好的贡献者增长势头（v0.2.2 新增 21 位贡献者），同时在稳定性、多 Provider 支持和移动端体验三个方向上集中发力。建议重点关注 tool_use ID 去重（#4474/#4444）和 MCP 重连崩溃（#4441）的合并进度，这两个修复直接影响线上稳定性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

## Hermes Agent 项目动态日报  
**日期：2026-06-24**

---

### 1. 今日速览  
Hermes Agent 今日活跃度极高，共处理 **50 条 Issues 更新**（新开/活跃 39 条，关闭 11 条）和 **50 条 PR 更新**（待合并 41 条，已合并/关闭 9 条），无新版本发布。社区贡献显著，尤其集中在 **多智能体编排、安全性增强、桌面与网关稳定性** 以及 **OAuth/MCP 集成** 等方向。整体项目健康度高，响应迅速（多个当日 issue 已有对应 PR），但部分关键 bug（如 Telegram 无限循环、凭证丢失）仍处于开放状态，需持续关注。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 项目进展  

今日合并/关闭的重要 PR 共 **9 个**，其中具有代表性的包括：

- **[PR #51594](https://github.com/NousResearch/hermes-agent/pull/51594)**：修复 `fallback_providers` 配置项以 JSON 字符串形式存储时导致整个回退链静默失效的问题（对应 Issue #51560）。**意义**：提升 CLI 配置可靠性，避免用户误操作导致服务中断。
- **[PR #51161](https://github.com/NousResearch/hermes-agent/pull/51161)**：修复 Photon iMessage 插件上游 gRPC 流无响应但 sidecar 仍存活的“静默失败”模式。**意义**：显著改善 iMessage 频道的消息投递鲁棒性。
- **[PR #51590](https://github.com/NousResearch/hermes-agent/pull/51590)**：为网关增加结构化启动阻塞遥测与崩溃循环可见性至 `/api/status` 端点。**意义**：增强运维可观测性，便于诊断 systemd/s6 等场景下的重复崩溃问题。

上述合并标志着项目在 **配置安全、消息通道稳定性、运维监控** 三方面取得实质性进展。

---

### 4. 社区热点  

#### 🔥 高讨论量 Issues（按评论数排序）

- **[Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257)**（11 👍，11 条评论）：提议将 ACP 客户端从仅限 Copilot 泛化为通用多智能体 CLI 编排层，支持 Claude、Gemini 等主流编码代理。**诉求**：打破 IDE 绑定，实现跨代理工作流自动化。
- **[Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083)**（8 条评论）：密码在工具调用参数中被正确脱敏，但模型读取自身历史后导致第二次工具调用失败。**诉求**：安全防御不应破坏功能完整性，需保留原始凭证供底层执行。
- **[Issue #38387](https://github.com/NousResearch/hermes-agent/issues/38387)**（8 条评论，1 👍）：Windows 计划任务因 `uv venv` 将 `pythonw.exe` 重定向至 `python.exe`，导致网关无法作为后台进程运行。**诉求**：确保平台兼容性，避免用户误关控制台终止服务。
- **[Issue #19566](https://github.com/NousResearch/hermes-agent/issues/19566)**（8 条评论，1 👍）：OpenAI-Codex 凭证池在轮换时因并发写入 `auth.json` 丢失新凭证。**诉求**：提升凭证管理原子性与一致性。

#### 🔧 活跃 PR 亮点

- **[PR #51589](https://github.com/NousResearch/hermes-agent/pull/51589)**：新增 `static_context` 插件钩子，允许插件向系统提示注入静态文档。**意义**：扩展插件能力边界，支持动态知识集成。
- **[PR #51591](https://github.com/NousResearch/hermes-agent/pull/51591)**：引入 Turso 作为外部记忆后端。**意义**：丰富存储选项，满足用户对轻量级分布式 SQLite 的需求。
- **[PR #22648](https://github.com/NousResearch/hermes-agent/pull/22648)**：将 Ollama Cloud 作为插件化 Web 搜索/提取提供者。**意义**：强化本地模型生态整合。

**趋势分析**：社区强烈关注 **多代理协同、安全边界清晰化、跨平台鲁棒性**，且贡献者正通过插件架构推动功能解耦。

---

### 5. Bug 与稳定性  

按严重程度排列的当前关键 Bug：

| 严重等级 | Issue 描述 | 状态 | 是否已有 Fix PR |
|--------|-----------|------|----------------|
| **P1** | Telegram 流式响应超 4096 字符时进入无限嵌套回复循环（[#48648](https://github.com/NousResearch/hermes-agent/issues/48648)） | OPEN | 否 |
| **P1** | Telegram 网关因 httpx 连接池泄漏导致 fd 耗尽（[#31599](https://github.com/NousResearch/hermes-agent/issues/31599)） | CLOSED | — |
| **P1** | Web/WeChat 会话历史串扰（[#49106](https://github.com/NousResearch/hermes-agent/issues/49106)） | OPEN | 否 |
| **P1** | Docker 容器每次启动自动迁移配置，清除 `.env`（[#51579](https://github.com/NousResearch/hermes-agent/issues/51579)） | OPEN | 否 |
| **P2** | Ollama 下 `reasoning_effort: none` 被静默忽略（[#25758](https://github.com/NousResearch/hermes-agent/issues/25758)） | OPEN | 否 |
| **P2** | Telegram 打字指示器因竞态条件永久卡住（[#28004](https://github.com/NousResearch/hermes-agent/issues/28004)） | OPEN | 否 |

**特别提醒**：Telegram 相关 bug 集中爆发（字符溢出、连接泄漏、状态卡住），建议优先排查消息传输层重构必要性。

---

### 6. 功能请求与路线图信号  

- **通用 ACP 客户端多代理编排**（[#5257](https://github.com/NousResearch/hermes-agent/issues/5257)）：高互动量（11 👍）且方向明确，极可能成为下一版本核心特性。
- **HTTPS OAuth 回调支持**（[#29299](https://github.com/NousResearch/hermes-agent/issues/29299)）：企业级集成刚需，已有类似实现参考，落地可能性高。
- **静态上下文插件钩子**（[PR #51589](https://github.com/NousResearch/hermes-agent/pull/51589)）：技术方案成熟，若测试通过很可能快速合并。
- **Turso 记忆后端**（[PR #51591](https://github.com/NousResearch/hermes-agent/pull/51591)）：符合插件化战略，需验证 API 稳定性。

**预测**：下一版本或将聚焦 **插件系统增强**（上下文注入、新存储后端）与 **多代理协议标准化**（ACP 泛化）。

---

### 7. 用户反馈摘要  

- **痛点**：
  - 安全机制（如 Tirith 审批门）覆盖不全，非 shell 工具（如 `write_file`）绕过人工审核（[#35357](https://github.com/NousResearch/hermes-agent/issues/35357)）。
  - 桌面端 UX 问题突出：长提示词遮挡回复（[#39721](https://github.com/NousResearch/hermes-agent/issues/39721)）、停止按钮指引错误（[#51576](https://github.com/NousResearch/hermes-agent/issues/51576)）。
  - OAuth/MCP 集成体验差：Any.do 等主流服务因 405 错误无法连接（[#51535](https://github.com/NousResearch/hermes-agent/issues/51535)）；Anthropic 登录硬编码失效 URL（[#51559](https://github.com/NousResearch/hermes-agent/issues/51559)）。

- **满意点**：
  - 用户对项目响应速度表示认可（如 #51560 当日提 issue，同日即有 PR 修复）。
  - 插件化架构（如 Ollama Cloud、Turso）获积极评价，被视为灵活扩展的基石。

---

### 8. 待处理积压  

以下长期开放且影响较广的 Issue/PR 需维护者关注：

- **[Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083)**（创建于 2026-06-09）：凭证脱敏与模型上下文脱节问题，影响所有使用敏感参数的工具调用。
- **[Issue #19566](https://github.com/NousResearch/hermes-agent/issues/19566)**（创建于 2026-05-04）：OpenAI-Codex 凭证丢失，涉及核心认证逻辑，存在 **40 天未解决**。
- **[Issue #49106](https://github.com/NousResearch/hermes-agent/issues/49106)**：Web/WeChat 会话隔离失效，属严重架构缺陷，已开放 5 天，尚无修复迹象。
- **[PR #47959](https://github.com/NousResearch/hermes-agent/pull/47959)**：宠物生成功能（Cmd+K 集成），虽为趣味性功能，但已开发 7 天且保持更新，建议尽快评审。

---

**项目健康度评估**：整体活跃、响应迅速、架构演进清晰。需重点解决 **Telegram 稳定性** 与 **会话隔离** 问题，防止短期爆点演变为长期技术债。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 🌅 PicoClaw 项目动态日报 — 2026-06-24

> 数据来源：sipeed/picoclaw | 生成时间：2026-06-24 00:00 UTC

---

## 1. 今日速览

过去 24 小时，PicoClaw 项目维持中等活跃度：Issues 更新 3 条（新开 2 / 关闭 1，均为陈旧自动化关闭），PR 更新 17 条（11 个待合并、6 个已成功关闭），无新版本发布。当天无新 Issue 或 PR 收到👍或评论，暂未形成社区讨论焦点。

整体评估：**项目社区运转平稳，低噪音状态**。维护侧以积压 PR 清理为主线，无紧急中断，但功能落地与用户反馈响应均有提升空间。

---

## 2. 版本发布

*今日无新版本发布。最近一个版本为 v0.2.9，下一版本仍为 Unreleased 状态。*

---

## 3. 项目进展

今日合并/关闭的 PR 多为积压问题修复，涉及安全性、稳定性和前端技术债清理：

| PR | 作者 | 状态 | 内容摘要 |
|---|---|---|---|
| [#3154](https://github.com/sipeed/picoclaw/pull/3154) | hanZeng-08 | ✅ 合并 | **修复火山引擎豆包 Seed 模型 tool call 泄露为原始 XML** — 解决 AI 输出中出现 `<seed:tool_call>` 标签的解析 bug |
| [#3162](https://github.com/sipeed/picoclaw/pull/3162) | Jh123x | ✅ 合并 | **WhatsApp 频道增加自动重连与异步消息处理** — 加入 goroutine 消息处理、pong handler、读取 deadline 和指数退避重连，解决 WebSocket 断线问题 |
| [#3054](https://github.com/sipeed/picoclaw/pull/3054) | chengzhichao-xydt | ✅ 陈旧关闭 | **修复 LINE 频道 Send 中 `sync.Map` 类型断言缺少 ok 检查** — 防止类型不匹配导致 panic |
| [#3059](https://github.com/sipeed/picoclaw/pull/3059) | chengzhichao-xydt | ✅ 陈旧关闭 | **显式忽略 Close() 返回值消除 linter 警告** — 代码卫生改善 |
| [#3047](https://github.com/sipeed/picoclaw/pull/3047) | SutraHsing | ✅ 陈旧关闭 | **修复 session 详情 API 无法读取归档 JSONL 历史消息** — 改进会话历史完整性 |
| [#2888](https://github.com/sipeed/picoclaw/pull/2888) | ghost | ✅ 陈旧关闭 | 工具配置图片反应加载修复（外部贡献者 PR） |

**关键推进：**

- **多平台通道稳定性**：WhatsApp（[#3162](https://github.com/sipeed/picoclaw/pull/3162)）自动重连修复已落地，LINE（[#3054](https://github.com/sipeed/picoclaw/pull/3054)）防崩溃修复已清理。
- **AI Provider 兼容性**：火山引擎豆包 Seed 模型的 tool call 解析修复（[#3154](https://github.com/sipeed/picoclaw/pull/3154)）已交付，保护输出清洁度，避免 XML 标签泄漏到用户会话。
- **会话管理**：归档 JSONL 历史读取修复（[#3047](https://github.com/sipeed/picoclaw/pull/3047)）确保了用户在查看旧会话时能看到完整的消息记录。

---

## 4. 社区热点

今日无高互动 Issues/PR（最高评论数 4 条出现在已关闭的 [#3015](https://github.com/sipeed/picoclaw/issues/3015)）。当前最具实质意义的开放 PR：

- **[#3163](https://github.com/sipeed/picoclaw/pull/3163) feat(bedrock): Converse prompt caching via cache points** — 利用 AWS Bedrock 的 prompt caching API，大幅降低 token 使用量和延迟，是本周最有价值的新功能之一。
- **[#3160](https://github.com/sipeed/picoclaw/pull/3160) fix(auth): reject cross-site launcher setup requests** — 通过 `Sec-Fetch-Site`、`Origin`、`Referer` 头检查，阻止跨站 launcher 设置请求，加固首次运行密码存储安全。
- **[#3161](https://github.com/sipeed/picoclaw/pull/3161) fix(exec): keep deny patterns active for custom allow rules** — 修复 exec 工具自定义 allow 规则绕过 deny pattern 的安全漏洞，确保 `^jq\b` 白名单不会放行读取环境变量的 jq 载荷。
- **[#3157](https://github.com/sipeed/picoclaw/pull/3157) feat: add Android ADB remote operations tool** — 新增实验性 ADB 工具，支持设备列表、截图、UI 层级解析、点击、滑动、按键等操作。
- **[#3118](https://github.com/sipeed/picoclaw/pull/3118) Add remote Pico WebSocket mode to picoclaw agent** — 为 agent 命令新增 `--remote` 模式，支持远程 WebSocket 连接。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 环境 | 状态 | Fix PR |
|---|---|---|---|---|---|
| 🔴 **高** | [#3164](https://github.com/sipeed/picoclaw/issues/3164) | Process hooks crash gateway on Android/Termux | Android/Termux, v0.2.9 | ⚠️ 新开，未修复 | 无 |
| 🟡 **中** | [#3159](https://github.com/sipeed/picoclaw/issues/3159) | 经常重复任务（AI 执行旧任务后才执行新任务） | Debian 13, Web UI, deepseek-v4-flash-free | ⚠️ 新开，未修复 | 无 |
| 🟢 **低** | [#3015](https://github.com/sipeed/picoclaw/issues/3015) | QQ 频道 Windows 下 token 获取超时 | Windows | ✅ 已关闭（stale） | 无 |

**分析：**

- **Android/Termux 进程钩子崩溃**（[#3164](https://github.com/sipeed/picoclaw/issues/3164)）：最小的 "hello world" hook 即可在 2 秒内导致 gateway 崩溃，表明 JSON-RPC over stdio 实现在 Android/Termux 环境下存在严重的兼容性问题（可能涉及管道、信号或进程生命周期）。此问题**需要优先处理**，因为 PicoClaw 在移动端（Termux）的用户体验完全不可用。
- **重复任务 bug**（[#3159](https://github.com/sipeed/picoclaw/issues/3159)）：用户在连续提问时，AI 执行完第一个问题后会错误地重新执行旧任务再处理新任务，可能与 session 上下文管理或 job queue 调度有关。

---

## 6. 功能请求与路线图信号

### 当前可观察的新功能方向：

| 方向 | 对应 PR | 进展 | 可能纳入版本 |
|---|---|---|---|
| **远程 Agent 模式** | [#3118](https://github.com/sipeed/picoclaw/pull/3118) | 开放中，已更新 | v0.3.x |
| **Bedrock Prompt Caching** | [#3163](https://github.com/sipeed/picoclaw/pull/3163) | 开放中，已更新 | v0.3.x（如及时合并可能进入小版本） |
| **Android ADB 远程操作** | [#3157](https://github.com/sipeed/picoclaw/pull/3157) | 开放中，已更新 | v0.3.x |
| **安全加固（跨站 setup 防护）** | [#3160](https://github.com/sipeed/picoclaw/pull/3160) | 开放中 | 可快速合并 |
| **Exec deny pattern 修复** | [#3161](https://github.com/sipeed/picoclaw/pull/3161) | 开放中 | 应优先合并 |

### 技术债与基础设施：

- 前端依赖升级（shadcn 4.11.0、typescript-eslint 8.62.0、@vitejs/plugin-react 6.0.2）——三条 dependabot PR（[#3104](https://github.com/sipeed/picoclaw/pull/3104)、[#3103](https://github.com/sipeed/picoclaw/pull/3103)、[#3100](https://github.com/sipeed/picoclaw/pull/3100)）均仍在打开状态，建议尽快批量合并以释放维护带宽。

### 路线图推断：

PicoClaw 下一版本的重点方向可归纳为三个主题：

1. **Agent 远程化与多设备协同**（Remote Pico WebSocket + ADB 工具）
2. **AI Provider 深度集成**（Bedrock Prompt Caching、豆包修复）
3. **安全性与稳定性基线**（跨站防护、exec 规则完整性、WhatsApp 重连）

Telegram 群组回复即 @mention 功能（[#2975](https://github.com/sipeed/picoclaw/pull/2975)）虽被标记为陈旧，但反映了用户对 IM 交互更自然触发方式的持续需求。

---

## 7. 用户反馈摘要

### 痛点：

1. **Android/Termux 完全不可用**：Issue [#3164](https://github.com/sipeed/picoclaw/issues/3164) 用户反映，任何 process hook（哪怕是 "hello world"）都会导致 gateway 在 2 秒内崩溃。这意味着 Termux 用户无法使用 PicoClaw 的钩子扩展功能，严重影响移动端用户体验。

2. **AI 任务调度异常**：Issue [#3159](https://github.com/sipeed/picoclaw/issues/3159) 中用户描述，当向 AI 提问"今天的美国新闻"后紧接着提问"今天的法国新闻"，AI 会在第二次回答中错误地**重新执行旧任务**再处理新任务，造成额外的 token 消耗和等待时间。

3. **Windows QQ 频道连接不稳定**（已过期，[#3015](https://github.com/sipeed/picoclaw/issues/3015)）：Windows 构建版本在获取 QQ 频道 app access token 时超时，但 Pico 频道工作正常，4 条评论未能推动修复，最终以陈旧关闭。

### 使用场景观察：

- **Debian 桌面用户**使用 deepseek-v4-flash-free 模型配合 Web UI（Issue [#3159](https://github.com/sipeed/picoclaw/issues/3159)）——关注成本和响应正确性
- **Android/Termux 用户**尝试使用 process hooks 功能（Issue [#3164](https://github.com/sipeed/picoclaw/issues/3164)）——新兴移动端场景
- **Bedrock 用户**关注 prompt caching 以降低 token 成本（PR [#3163](https://github.com/sipeed/picoclaw/pull/3163)）——成本优化驱动

### 满意/不满意：

- **不满意**：Android/Termux 崩溃问题无回应；重复任务问题尚无诊断；陈旧 Issue 占据编号空间。
- **中性偏积极**：社区贡献者持续提交修复（LINE、WhatsApp 稳定性等），表明用户对平台有投入感。
- **期待**：Bedrock caching、远程 agent、ADB 工具等新功能受到提交者积极响应。

---

## 8. 待处理积压

### ⚠️ 需要关注：

| 编号 | 类型 | 标题 | 状态 | 等待天数 | 建议 |
|---|---|---|---|---|---|
| [#3164](https://github.com/sipeed/picoclaw/issues/3164) | Issue | Android/Termux 进程钩子崩溃 | 🔴 新开 | 1 天 | **立即响应** — 移动端核心功能不可用，需确认是否可复现 |
| [#3159](https://github.com/sipeed/picoclaw/issues/3159) | Issue | AI 重复任务调度异常 | 🟡 新开 | 1 天 | 请求用户提供日志和 session ID，定位 job queue 问题 |
| [#3104](https://github.com/sipeed/picoclaw/pull/3104) - [#3100](https://github.com/sipeed/picoclaw/pull/3100) | PR (×3) | 前端依赖升级（dependabot） | 🟢 打开 | 12 天 | 批量合并，减少维护噪音；合并后关闭对应陈旧 PR |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | PR | Telegram 群组回复即 @mention | 陈旧 | 25+ 天 | 关闭或明确路线图定位，避免僵尸 PR |
| [#2888](https://github.com/sipeed/picoclaw/pull/2888) | PR | 工具配置加载图片反应 | 已关闭 | — | 已处理 |
| [#3054](https://github.com/sipeed/picoclaw/pull/3054) | PR | LINE sync.Map 类型断言 | 已关闭 | — | 已处理 |

### 中期观察：

- **安全相关 PR**（[#3160](https://github.com/sipeed/picoclaw/pull/3160)、[#3161](https://github.com/sipeed/picoclaw/pull/3161)）建议尽快合并，两者都是防止安全策略被绕过的修复，不应长期停留。
- **Bedrock Prompt Caching**（[#3163](https://github.com/sipeed/picoclaw/pull/3163)）如预算允许尽早合并，是降低用户成本的高杠杆功能。
- **远程 Agent 模式**（[#3118](https://github.com/sipeed/picoclaw/pull/3118)）和 **ADB 工具**（[#3157](https://github.com/sipeed/picoclaw/pull/3157)）都指向多设备协同场景，建议在合并后补充端到端测试覆盖。

---

## 总结评估

🟢 **健康度：良好（B+）**

- 项目在低噪音状态下持续推进，多平台通道稳定性修复（WhatsApp、LINE）和 AI Provider 兼容性修复（豆包 Seed）已交付。
- 安全加固 PR 和改善成本的功能 PR 均已就位，有待合并。
- **主要风险**：Android/Termux 崩溃问题（[#3164](https://github.com/sipeed/picoclaw/issues/3164)）是移动端用户的阻断性 bug，建议 48 小时内给出初步诊断或 workaround。

---

*本报告由 OWL 自动分析生成。如有偏差，请以 GitHub 原始数据为准。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-06-24

## 1. 今日速览

过去 24 小时 NanoClaw 项目活跃度**中等偏高**：共 12 条 PR 更新（8 条已合并/关闭，4 条待合并），1 条新 Issue 开启，无新版本发布。主线推进集中在两条脉络——**Chat SDK 版本统一升级至 4.29.0** 覆盖 `/main`、`/channels`、`/providers` 三个分支，以及 **Slack Socket Mode 适配器的首次引入**。此外，以 `registerX/applyX` 为核心的扩展点重构（Extension-Point Seams）正在以"零影响合并"策略分拆推进，体现了团队对主干稳定性的重视。社区端有一条涉及生产环境端口绑定的安全反馈尚未回应，值得关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 3.1 Chat SDK 全面升级至 4.29.0（已合并）

这是今日最大的结构性变更，由 **gabi-simons** 在三个关联分支间同步完成：

| 分支 | PR | 变更 |
|------|----|------|
| `main` | [#2834](https://github.com/nanocoai/nanoclaw/pull/2834) | 核心 `chat` + `@chat-adapter/*` pin 统一升至 `4.29.0` |
| `channels` | [#2835](https://github.com/nanocoai/nanoclaw/pull/2835) | 8 个 channel SKILL.md 安装钉 + setup 脚本同步升级 |
| `providers` | [#2836](https://github.com/nanocoai/nanoclaw/pull/2836) | 提供方注册表分支同步升级 |

由于 Chat SDK 的版本锁机制（adapter `ChatInstance` 必须与 bridge 匹配），跨分支同步升级是**正确且必要**的做法，避免运行时类型检查失败。

### 3.2 Slack Socket Mode 适配器（已合并）

- **PR [#2837](https://github.com/nanocoai/nanoclaw/pull/2837)**：gabi-simons 为 Slack channel 增加了 **Socket Mode** 支持。设置 `SLACK_APP_TOKEN`（`xapp-…`）后，bot 通过出站 WebSocket 连接，**无需公网端点**，适用于 NAT 后的本地开发场景。不设 token 时适配器自动回退到原有 webhook 模式，向后兼容。
- 随后 [**#2839**](https://github.com/nanocoai/nanoclaw/pull/2839) 补了一个流程性修复：因合并时序问题，#2837 的提交需要显式合入 `channels` 分支（此前目标分支 ~12 分钟前已被合入主干）。

### 3.3 扩展点重构：Extension-Point Seams（进行中）

- **PR [#2841](https://github.com/nanocoai/nanoclaw/pull/2841)（已关闭）**：foxsky 提交的初始版本，在 host 与 container runtime 中引入 `registerX()`/`applyX()` 扩展点。设计原则为"零注册者时行为与上游字节级相同"（no-op pass-through），安全性高。
- **PR [#2842](https://github.com/nanocoai/nanoclaw/pull/2842)（待合并）**：对 #2841 的修订版本，额外**保留了内建 MCP server 命名空间**，防止扩展注册与内建服务名冲突。这是 #2841 关闭后被分拆出的改进版。

### 3.4 `/update-nanoclaw` 技能更新通知改进（已合并）

- **PR [#2826](https://github.com/nanocoai/nanoclaw/pull/2826)**：Koshkoshinsk 修复了一个升级流程隐患——Step 7 将技能更新标记为"可选、可安全跳过"，但实际上渠道/提供方代码分布在 `channels`/`providers` 分支上，host 更新不会触及；用户可能在不知情的情况下遗漏关键 upstream 修复。修复后会在更新流程中**主动提示技能更新并在重新应用时重建容器**。

### 3.5 Hook Surface Guard（已合并）

- **PR [#2833](https://github.com/nanocoai/nanoclaw/pull/2833)**：javexed 增加了 hook surface 的守护逻辑，确保暴露给插件/技能的 hook 边界可控。性质偏防御性加固。

---

## 4. 社区热点

| 项目 | 链接 | 说明 |
|------|------|------|
| Slack Socket Mode | [#2837](https://github.com/nanocoai/nanoclaw/pull/2837) | 今日功能亮点。对 NAT 后用户（家庭服务器、内网穿透困难者）实用性极强，是 Slack 集成从"需要公网域名"到"开箱即用"的关键一步。 |
| 扩展点 Extension-Point Seams | [#2841](https://github.com/nanocoai/nanoclaw/pull/2841) / [#2842](https://github.com/nanocoai/nanoclaw/pull/2842) | 受关注度高。该设计允许下游 fork 在不修改主干的情况下注入自定义逻辑，对插件生态和二次开发社区意义重大。 |
| Manifest Model Router Provider | [#2838](https://github.com/nanocoai/nanoclaw/pull/2838) | SebConejo 提交的待合并 PR，新增 Manifest 模型路由提供方，暗示社区对多模型路由能力有真实需求。 |
| 审批拒绝原因 | [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) | moshe-nanoco 提交的待合入 PR，在 module approval card 中增加"附带理由拒绝"按钮，使 agent 收到拒绝后可自适应调整。体现了从"人对人审批"到"人对 agent 反馈"的体验升级诉求。 |

---

## 5. Bug 与稳定性

### 🔴 未修复 — 生产环境端口绑定冲突

| ID | 严重度 | 链接 | 描述 |
|----|--------|------|------|
| #2840 | **中高** | [Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840) | 安装 NanoClaw 选择 Slack 渠道时，官方指引要求创建到 localhost:3000 的隧道。但 NanoClaw 自身就将 3000 端口绑定在外部网卡上，**使安全隧道形同虚设**，存在生产暴露风险。 |

> 该 Issue 由 sirpy 于 2026-06-23 提交，截至本报告发布尚无评论或修复 PR。建议维护者尽快响应：要么将 WebSocket 监听改为 `127.0.0.1`，要么在文档中显明网络拓扑要求。

### ✅ 已修复 — 升级流程遗漏渠道更新

- [#2826](https://github.com/nanocoai/nanoclaw/pull/2826)（见 3.4 节），修复了 `/update-nanoclaw` 流程中渠道技能可能被静默跳过的隐患。

---

## 6. 功能请求与路线图信号

| 功能/方向 | 信号来源 | 判断 |
|-----------|----------|------|
| **Slack Socket Mode** | [#2837](https://github.com/nanocoai/nanoclaw/pull/2837) ✅ 已合并 | 已交付，可作为下一版本的亮点功能。 |
| **扩展点/插件架构** | [#2841](https://github.com/nanocoai/nanoclaw/pull/2841) → [#2842](https://github.com/nanocoai/nanoclaw/pull/2842) 待合并 | #2842 明确保留了 MCP server 命名空间，该 PR 合并后主干将具备 inert extension-point 基础设施。后续可预期社区插件 PR 跟进。 |
| **审批反馈增强** | [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) 待合并 | 对 agent 交互体验有明确改善，且改动范围有限（UI 按钮 + 理由传递），合并阻力小，可能被纳入近期版本。 |
| **Manifest 模型路由** | [#2838](https://github.com/nanocoai/nanoclaw/pull/2838) 待合并 | 新增模型提供方，可能服务于多后端路由策略，暗示团队正在构建统一的 provider manifest 体系。 |
| **容器运行时性能** | [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) 待合并（更新 06-23） | `--shm-size=1g` 解决 Chromium 渲染器的 `/dev/shm` 默认 64MB 瓶颈，`--init` 防止僵尸进程。属于容器稳定性基础改进，虽创建已 9 天但仍有活动。 |

---

## 7. 用户反馈摘要

| 痛点/场景 | 来源 | 要点 |
|-----------|------|------|
| **Slack 套件本地部署安全性** | [#2840](https://github.com/nanocoai/nanoclaw/issues/2840) — sirpy | 用户在真实服务器上安装后发现 3000 端口默认暴露外网，与官方"通过隧道访问"的安全指引矛盾。用户实际场景是生产部署，对端口安全敏感。 |
| **升级后遗漏渠道修复** | [#2826](https://github.com/nanocoai/nanoclaw/pull/2826) — Koshkoshinsk | 真实用户可能在完成主机更新后以为万事大吉，但渠道侧关键修复被跳过。属于"静默失效"场景，改进后将强制提示。 |
| **Agent 审批闭环缺失** | [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) — moshe-nanoco | Agent 收到 "declined" 后缺乏上下文，无法自动调整策略或回复用户，需要审批侧提供方向性反馈。 |

整体用户满意度倾向正面：Slack Socket Mode 的合并收到社区认可，扩展点架构被视为插件生态的前置条件。唯一负面反馈集中在端口安全问题，需要优先处理。

---

## 8. 待处理积压

| 积压项 | 链接 | 状态 | 建议 |
|--------|------|------|------|
| **#2840 端口绑定冲突** | [Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840) | 🟡 开放，0 评论，0 👍 | **建议在 1-2 个工作日内响应**。若确认 bug，修复方式明确（绑定 `127.0.0.1` 或文档更新）；若属预期行为，应在 Issue 中明确说明并关闭。 |
| **#2842 Extension-Point Seams 修订版** | [PR #2842](https://github.com/nanocoai/nanoclaw/pull/2842) | 🟡 待合并 | 对 #2841 的改进版本，核心差异在于保留 MCP server 命名空间。建议尽快完成审查并入主干。 |
| **#2838 Manifest 模型路由提供方** | [PR #2838](https://github.com/nanocoai/nanoclaw/pull/2838) | 🟡 待合并 | 较大 PR（新增提供方 + SKILL.md），审查可能需要时间，建议分配 reviewer。 |
| **#2832 审批拒绝原因** | [PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832) | 🟡 待合并 | 改动范围小、价值明确，但需跨前端卡片 + 后端 relay 适配，建议确认完整测试覆盖后合并。 |
| **#2771 容器 SHM + init 优化** | [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) | 🟡 待合并，已 9 天 | 虽更新活跃（06-23），但创建时间较早。涉及容器运行时底层参数，建议在 CI 中补充稳定性基准测试后再合并。 |

---

**项目健康度总评：🟢 良好。** 主干保持稳定（8 条合并均无冲突报告），功能交付节奏清晰（Socket Mode、SDK 升级均为同日完成），插件生态基础设施正在铺设。唯一需要跟进的是 Issue #2840 的端口安全反馈——在涉及生产部署的场景下，此类问题不应长期无人响应。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-06-24

## 1. 今日速览

NullClaw 今日整体活跃度**较低**。过去 24 小时内仅有 1 条 Issue 被关闭、1 条 PR 继续推进，无新版本发布。核心开发力量明显集中于 cron 子代理引擎这一长期 PR（#783，已开放超 80 天），项目处于**功能深修期**，日常 issue 响应速度偏慢——最近关闭的 #967 从创建到关闭耗时 4 天。

---

## 2. 版本发布

今日无新版本发布。最新可用版本仍为 **v2026.5.29**。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| **#783** `feat(cron): cron subagent, run history, JSON output, security hardening` | 🟡 待合并（OPEN，已 80+ 天） | 引入 DB 后端调度器，含 `cron_runs` 历史表、`cron_run_queue` 工作器、原子 tick/enqueue/complete 流程；支持 skill/agent/shell 三种 job 类型、per-job 时区偏移、投递路由与Operator告警；新增 `cron list --json`、`cron schedule --json` JSON CLI 输出并加固安全。 |

**评估：** #783 是近两个月来体量最大的功能 PR，一旦合并将显著增强 NullClaw 的定时任务与自动化能力。但超长 open 状态（自 2026-04-07 起）提示可能存在 review 瓶颈或设计分歧，建议维护者尽快给出明确的合并/修订时间线。

---

## 4. 社区热点

**Issue #967 — `[bug] error: NoResponseContent`**（已关闭）

- 链接：<https://github.com/nullclaw/nullclaw/issues/967>
- 👍 0 ｜ 💬 评论 2 条
- 用户报告在 **Windows 11 + Agnes-2.0-Flash 模型**环境下，超过 50% 的对话（21 次中 12 次）触发 `error: NoResponseContent`。用户特别提到**同款模型 + 同 API Key 在 PicoClaw 中运行正常**，暗示问题出在 NullClaw 的响应解析或 API 调用层。
- **核心诉求：** NullClaw 对特定第三方模型（尤其是 Flash 类轻量模型）的响应兼容性与竞品存在差距，社区期待官方修复或给出配置规避方案。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 详情 |
|---|---|---|---|
| 🔴 **高** | [#967](https://github.com/nullclaw/nullclaw/issues/967) `NoResponseContent` | 已关闭 | 高频复现（>50%），影响核心对话功能，仅 Windows 11 + Agnes-2.0-Flash 特定组合触发 |

**是否有 fix PR：** 否。Issue 被关闭但**未关联修复 PR 或 commit**，关闭原因不明（可能为"无法复现"/"wontfix"/用户自行解决）。建议后续维护者在 Issue 留档中补充根因或修复版本号，以便受影响用户追踪。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求方向 | 当前状态 | 判断 |
|---|---|---|---|
| PR #783 | 定时任务（cron）+ 子代理引擎 + 历史追踪 + JSON 输出 | 开发中（OPEN） | 高概率纳入下一主要版本 |

**路线图推断：** 根据 #783 的变更幅度（新增 DB schema、worker 模块、CLI 子命令），一旦合并大概率对应一个 **minor 版本升级**（如 v2026.7.x）。暂无其他独立功能请求排队。

---

## 7. 用户反馈摘要

从 Issue #967 中提炼：

| 维度 | 内容 |
|---|---|
| **痛点** | 高频 `NoResponseContent` 导致对话不可用，严重影响日常 agent 调用 |
| **使用场景** | Windows 桌面端，配合第三方 Flash 类模型进行轻量对话 |
| **对比反馈** | 用户在 PicoClaw 中使用相同环境无此问题，**对 NullClaw 的兼容性不满** |
| **满意方面** | 无明确正向反馈记录 |
| **不满意方面** | 响应不稳定、缺乏透明度（关闭时未提供修复说明） |

---

## 8. 待处理积压

| 项目 | 状态 | 已等待 | 建议 |
|---|---|---|---|
| [**PR #783**](https://github.com/nullclaw/nullclaw/pull/783) `feat(cron): cron subagent` | OPEN | **78 天**（自 2026-04-07） | 建议维护者拆分 review 或设定合并 deadline；超长 open 会打消贡献者积极性 |

> **维护者行动项：**
> 1. 对 #967 关闭原因追加评论，补充根因或 workaround，避免同类 issue 重复提交。
> 2. 为 #783 指定明确 reviewer 与合并时间窗口，推进 cron 功能尽快落地。
> 3. 关注第三方 Flash 模型兼容性，考虑在 CI 中增加多模型回归测试。

---

*数据来源：GitHub API ｜ 日报生成时间：2026-06-24*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-24

## 1. 今日速览

IronClaw 今日活跃度极高：**21 条 Issue 更新**（14 新开/活跃、7 已关闭）、**42 条 PR 更新**（23 待合并、19 已合并/关闭），无新版本发布。项目正处于密集迭代期，核心贡献者围绕 Reborn 自动化系统、WASM 扩展认证、Slack 集成、记忆层重构等多条战线并行推进。E2E Canary 测试持续运转验证 GitHub issue 工作流，但夜间 E2E 仍存在失败记录需关注。

## 2. 版本发布

无新版本发布，省略。

## 3. 项目进展

今日合并/关闭的 PR 推进了多项重要功能落地：

| PR | 关键进展 |
|---|---|
| **#5133** [已合并] | Reborn 自动化**删除支持**上线：新增 `DELETE /api/webchat/v2/automations/{id}` 路由，用户可在 WebUI v2 自动化详情面板中直接删除自动化。 |
| **#5166** [已合并] | Slack 例行动态交付通道完成构建，将 WebUI 管理的 Slack setup 接入触发运行交付路径。 |
| **#5152** [已合并] | **Slack setup 迁移进 WebUI**：废弃旧 TOML 配置键，改为 `[slack].enabled` 加 WebUI workspace 安装流程，密钥统一走 Reborn secret store。 |
| **#4969** [已合并] | 修复 Google WASM 扩展（Drive/Docs/Sheets/Slides）401 响应的结构化错误处理——现在正确返回 `auth_required` 而非模糊的 `operation_failed`。 |
| **#5164** [已合并] | 恢复 Slack 例行的出站目标选注册逻辑。 |
| **#5155** [已合并] | 新增 Reborn Emulate 全路径日历 E2E 测试，夯实扩展安装/认证/Gate 审批的端到端回归覆盖。 |

**整体判断**：Reborn 自动化 CRUD（创建、暂停/恢复、删除）闭环已接近完善；Slack 从配置到交付全链路正在被现代化重构；Google 扩展认证体验显著改善。项目处于"功能冲刺收尾 + 技术债清理"阶段。

## 4. 社区热点

以下 Issue 与 PR 今日最受关注或最具讨论价值：

- **#5169** [Bundled skills trip the prompt-safety vocabulary denylist](https://github.com/nearai/ironclaw/issues/5169)
  **诉求**：在干净的默认 Reborn setup 中，普通请求因 bundled skill 指令里含有 "Authorization"/"Bearer"/"API key" 等无害 API 词汇而被 model-safety denylist 误杀，系统返回误导性的"temporary system issue"。用户希望 denylist 要么排除 skill 指令区域，要么给出清晰的拒绝原因。已收到 1 条评论反馈。

- **#5149** [Context management — progressive tool disclosure (flag-gated)](https://github.com/nearai/ironclaw/pull/5149)
  **诉求**：生产日志显示每次模型调用都发送约 91 个 tool schema + system prompt + history ≈ 25.8k tokens，且每轮重复 ~4 次，导致 NEAR AI 超出 120s 请求超时无回复。该 PR 提出渐进式工具披露策略，默认关闭（flag-gated），被标记为 XL 规模、低风险。是解决当前 NEAR AI 可靠性问题的关键努力。

- **#5148** [Turn scheduler heartbeat can self-deadlock](https://github.com/nearai/ironclaw/issues/5148)
  **诉求**：当调度器心跳与执行器状态更新同时持有同一异步 Store 锁时，运行中的 turn 可能永久卡住。在 GitHub 扩展安装流程中已观察到 `extension_search` 完成后 `extension_install` 永久处于 pending。属于严重并发缺陷。

- **#5147** [Flaky test: trigger_poller_does_not_submit_turn_for_unpaired_actor](https://github.com/nearai/ironclaw/issues/5147)
  **诉求**：该用例在 main 分支上约 1/3 概率失败，直接将 PR #5061 踢出合并队列，阻塞了 CI 流水线。请求优先修复以减少对贡献者的摩擦。

- **#5163** [feat(memory): model memory as a userland extension](https://github.com/nearai/ironclaw/pull/5163)
  **诉求**：将 Reborn memory 层从 kernel 中提取为 provider-neutral 契约 crate（`ironclaw_memory`）加原生文件系统 provider，是当前架构现代化和解耦的关键一步（XL 规模）。

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| 严重级别 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 **高** | [#5148 Turn scheduler self-deadlock](https://github.com/nearai/ironclaw/issues/5148) | 死锁导致 turn 永久卡住，在 GitHub 扩展安装流程复现 | 新开，**无修复 PR** |
| 🔴 **高** | [#5151 Claude fails to create Reborn automation](https://github.com/nearai/ironclaw/issues/5151) | claude-sonnet-4-5 在 trigger pause/resume tools 暴露后无法正确调用 `builtin.trigger_create`，转而调用无关工具并失败 | 新开，**无修复 PR** |
| 🟡 **中** | [#5169 Bundled skills trip safety denylist](https://github.com/nearai/ironclaw/issues/5169) | 安全词汇误判导致良性请求失败，错误信息误导用户 | 新开，**无修复 PR** |
| 🟡 **中** | [#3733 Invalid Gmail token shows success toast](https://github.com/nearai/ironclaw/issues/3733) | 提交无效 token 仍显示成功提示，随后立即再次请求 OAuth——UI 欺骗性反馈 | 老问题（05-17），**无修复 PR** |
| 🟡 **中** | [#3732 Gmail auth gate inconsistent UI](https://github.com/nearai/ironclaw/issues/3732) | 同样的场景中 OAuth link 和 manual token input 两种 UI 随机出现 | 老问题（05-17），**无修复 PR** |
| 🟡 **中** | [#4640 google-calendar list_events returns oldest/unordered events](https://github.com/nearai/ironclaw/issues/4640) | 日历查询缺少 timeMin 默认值和排序参数，"upcoming meetings" 返回最旧事件 | 老问题（06-09），**无修复 PR** |
| 🟢 **低** | [#5154/#5158 E2E Canary closed](https://github.com/nearai/ironclaw/issues/5154) | Canary PR 流程正常完成 | ✅ 已关闭 |
| 🟢 **低** | [#5147 Flaky trigger_poller test](https://github.com/nearai/ironclaw/issues/5147) | 测试不稳定性阻塞合并队列 | **需修复但非线上故障** |

**值得注意的修复进展**：PR #4969 已合并修复了 Google WASM auth_required 错误返回路径（[#4991](https://github.com/nearai/ironclaw/issues/4991) had reported this root cause area），但 #3733 和 #3732 中的 Gmail 前端 UI 一致性问题仍未解决。

## 6. 功能请求与路线图信号

从今日 Issue 和 PR 可以提取以下路线图方向：

| 方向 | 信号来源 | 状态 |
|---|---|---|
| **Reborn 自动化完整 CRUD** | #5133 (delete) 已合并, #5121 (pause/resume) 已合并 | ✅ 接近完成 |
| **Slack WebUI Setup 现代化** | #5152, #5166, #5161, #5162 等 PR | 🔨 在途合并中 |
| **渐进式工具上下文管理（降本提速）** | #5149 (flag-gated progressive tool disclosure) | 🔨 XL PR 待审 |
| **记忆层架构解耦** | #5163 (memory as userland extension), #5165 (native memory seeding) | 🔨 XL PR 待审 |
| **Activity Gate 身份统一** | #5145 (refactor activity gate identity), #5120 (unify declined semantics) | 🔨 双轨并进 |
| **取消 dist 目录 Git 追踪** | #5167 (Stop tracking `dist` in git) | 📋 Issue 待实施，可减少 PR churn |
| **扩展页面提供 Deactivate 按钮** | #5146 | 📋 小型 UX 改进待排期 |
| **NEAR AI provider base URL 展示** | #5144 | 📋 小修复，"None" 展示误导用户 |
| **Skill Learning 审批门控** | #5156 (any-backend distillation, approval gate) | 🔨 重要安全改进，已指定为 #5061 残余风险项 |

**可纳入下一版本的判断**：自动化 CRUD、Slack WebUI Setup、Google auth_required 修复已进入合并通道，几乎确定随下一个发布落地。Context management (#5149) 和 Memory 重构 (#5163) 虽为 XL 规模，但因直接关联 NEAR AI 可靠性瓶颈和架构现代化，优先级大概率较高。

## 7. 用户反馈摘要

从今日 Issues 提炼的真实痛点：

- **"干净环境即失败"的挫败感**：#5169 中用户强调 clean default setup 下请求即被误杀，体验感极差——说明 safety denylist 缺乏对 skill 指令上下文感知，或在 prompt-assembly 粒度过于粗暴。
- **"假成功"的认证体验**：#3733 用户报告无效 Gmail token 显示 success toast，属于典型的 UI/UX 欺骗性反馈，损害信任。
- **Scheduler 死锁的隐蔽性**：#5148 描述的场景（heartbeat + executor lock contention）在常规测试中难以暴露，用户仅在特定扩展安装流程中偶然发现，说明需要更强的并发压力测试覆盖。
- **"Always approve" 未覆盖所有 tool**：#5129 报告显示 `outbound_delivery_target_set` 的 Always Approve 被跳过——用户对"批准一次即永久放行"的期望与实现存在差距。
- **NEAR AI 超时导致的"无应答"**：PR #5149 描述了每次调用 ~25.8k tokens × 4 次 = 103k tokens/turn 的臃肿 prompt 是直接原因，用户面对的是沉默而非错误，难以诊断。
- **Railway hosting 上 Inference 设置间歇性消失**：#5157 指出托管环境特定问题，影响自助部署用户。

## 8. 待处理积压

以下为长期未响应或状态停滞的重要 Issue/PR，提醒维护者关注：

| 项目 | 创建于 | 最后活动 | 问题 |
|---|---|---|---|
| **[#4640] google-calendar list_events returns oldest events** | 2026-06-09 | 2026-06-23 | 两周未解决，日历功能核心体验受损 |
| **[#3733] Invalid Gmail token success toast** | 2026-05-17 | 2026-06-23 | 超 1 个月，UI bug 未修复 |
| **[#3732] Gmail auth gate inconsistent UI** | 2026-05-17 | 2026-06-23 | 超 1 个月，认证流程不一致 |
| **[#4108] Nightly E2E failed** | 2026-05-27 | 2026-06-23 | 近 1 个月，夜间 E2E 持续失败未根因分析 |
| **[#5129] Always approve not working for outbound_delivery_target_set** | 2026-06-22 | 2026-06-23 | 需复现确认，尚未有明确 owner |
| **[#4997] add a seam for download_file binary extraction** | 2026-06-16 | 2026-06-23 | XL PR，允许从 Drive 读取 PDF/PPTX 等二进制文件，待审 |

> **总结**：IronClaw 今日呈现高吞吐迭代态势——Reborn 自动化、Slack 交付和认证修复是三条主要推进线。最紧迫的风险点是 scheduler 死锁（#5148）和 NEAR AI 超时（#5149），建议优先安排 review 与复现。Gmail 本地系列 bug 和 Nightly E2E 长期失败是积累的技术债，适合集中清理 sprint。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 🗓️

**日期：2026-06-24 | 数据来源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

过去 24 小时，LobsterAI 项目活跃度处于**中等偏高水平**。共处理 11 个 PR（5 个已合并/关闭，6 个待审/待合并），新增 1 个 Issue，无新版本发布。从 PR 标签分布来看，开发力量在 **OpenClaw 定时任务体系重构**、**Cowork 模式体验优化**以及 **AI 网关扩展**三条主线同时推进。合并的 5 个 PR 均集中在 `area: openclaw` 与 `area: cowork` 模块，说明当前迭代重心在自动化任务可靠性和协作文档工作流上。今日未发布新版本，但合并的改动体量不小，预计会在近期集成至下一个 release。

---

## 2. 版本发布

📦 **无新版本发布。**

---

## 3. 项目进展

今日合并/关闭了 5 个 PR，涉及 OpenClaw 定时任务、Cowork 协作文档以及日志改进，具体如下：

### 🔧 OpenClaw 定时任务链路全面加固（3 PR 合并）

这一系列修改是当前最核心的架构改进，解决了定时任务在会话管理和存储上的多个隐患：

| PR | 状态 | 要点 |
|---|---|---|
| **[#2189](https://github.com/netease-youdao/LobsterAI/pull/2189)** — 迁移遗留 cron 存储 | ✅ 已合并 | 在网关启动时自动检测旧版 cron JSON/run-log 存储，调用官方 OpenClaw doctor 进行迁移，确保存储层升级不丢失历史任务 |
| **[#2190](https://github.com/netease-youdao/LobsterAI/pull/2190)** — 同步 cron 运行会话 | ✅ 已合并 | 识别 `agent:{id}:cron:{jobId}:run:{runId}` 格式的会话 key，归一化为稳定缓存 key，使重复运行复用同一个本地 Cowork 会话 |
| **[#2191](https://github.com/netease-youdao/LobsterAI/pull/2191)** — 明确启动状态反馈 | ✅ 已合并 | 区分 scheduled-task 的 startup / loading / ready / error 四种状态，网关握手后立即刷新 cron 数据，不再等待下一轮轮询 |

> **📌 小结**：这 3 个 PR 形成了一个完整的修复链——从存储迁移 → 会话一致性 → 状态可观测，显著提升了定时任务在企业级场景下的可靠性。

### 🧑‍💻 Cowork 协作模式体验优化

| PR | 状态 | 要点 |
|---|---|---|
| **[#2192](https://github.com/netease-youdao/LobsterAI/pull/2192)** — 持久化计划确认流程 | ✅ 已合并 | Plan Mode 现在在用户明确禁用或确认执行之前会持续保留；新增「确认执行」和「调整计划」按钮，确认后恢复正常 skill/kit 上下文 |

### 📝 日志改进

| PR | 状态 | 要点 |
|---|---|---|
| **[#2188](https://github.com/netease-youdao/LobsterAI/pull/2188)** — Liuzhq/rlog | ✅ 已合并 | 日志基础设施改进 |

### 📥 待审 PR（6 个开放）

| PR | 标签 | 状态 | 要点 |
|---|---|---|---|
| **[#2193](https://github.com/netease-youdao/LobsterAI/pull/2193)** | openclaw / main / renderer | 🔀 待合并 | 新增 LiteLLM 作为 AI 网关入口，复用已有 `chatWithOpenAICompatible` 处理器，无新增依赖，接入 100+ LLM |
| **#1401** | stale | 🔀 待合并 | 修复 SSE 请求 ID 安全性：用 `crypto.randomUUID()` 替代 `Math.random()` |
| **#1402–1404, 1406** | stale | 🔀 待合并 | 多文件附件、i18n 翻译键、时间控件优化等历史遗留修复 |

---

## 4. 社区热点

### 🔥 Issue #1400 — 4.1 版本升级后网关无限重启死循环
- **链接**：[LobsterAI Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)
- **作者**：danielmonlite | **评论**：6 条 | 👍：0
- **严重程度**：🔴 **用户系统完全瘫痪**

**痛点分析**：这是当前社区反馈最激烈的问题。用户从 3.3.0 升级至 4.1 后，网关陷入反复重启的死循环，彻底无法使用。此外还报告了「自定义 qwen3.5-plus LLM 因 web-extractor 依赖检查无法启动」的关联 bug。用户提供了自己的邮箱和微信号以求直接沟通，说明**该问题严重影响生产环境信任度，且缺少自助修复路径**。

> 建议：此类阻塞性 bug 应优先响应，至少提供回滚指南或配置绕过方案。

### 🔀 PR #2193 — LiteLLM 网关支持
- **链接**：[LobsterAI PR #2193](https://github.com/netease-youdao/LobsterAI/pull/2193)
- **作者**：RheagalFire

**社区信号**：将 LiteLLM 作为入口接入 100+ LLM，反映出用户对**多模型提供商灵活切换**和**统一管理入口**的强烈诉求。且实现复用了现有 OpenAI 兼容接口，无额外依赖，预期评审阻力较低——这很可能成为下一个版本的亮点功能之一。

---

## 5. Bug 与稳定性

按严重程度降序排列：

| # | 问题 | 严重度 | 状态 |
|---|---|---|---|
| 1 | **[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)** — 4.1 版本升级后网关无限重启 + web-extractor 阻止自定义 LLM 启动 | 🔴 致命 / 无法使用 | ❌ 暂无已合并 fix 关联 |
| 2 | **[#1401](https://github.com/netease-youdao/LobsterAI/pull/1401)** — SSE 请求 ID 可预测导致数据流劫持风险（CSPRNG 缺失） | 🟠 安全高危 | ✅ 有已提 PR 待合并 |
| 3 | **[#1402](https://github.com/netease-youdao/LobsterAI/pull/1402)** — 多文件选择仅保留最后一个（闭包 bug） | 🟡 功能缺陷 | ✅ 有已提 PR 待合并 |
| 4 | **[#1403](https://github.com/netease-youdao/LobsterAI/pull/1403)** — 中文 UI 中「delete」按钮显示英文关键字 | 🟢 小问题 | ✅ 有已提 PR 待合并 |
| 5 | **[#1404](https://github.com/netease-youdao/LobsterAI/pull/1404)** — 定时任务时间选择器在 Electron 中交互受限 | 🟡 体验问题 | ✅ 有已提 PR 待合并 |
| 6 | **[#1406](https://github.com/netease-youdao/LobsterAI/pull/1406)** — IM 过滤列表为空时通知渠道下拉为空 | 🟡 功能缺陷 | ✅ 有已提 PR 待合并 |

**评估**：PR #1401–1404、#1406 均为 4 月 3 日创建的老牌 stale PR，覆盖了大量已知问题，**在今日无任何进展或 review 活动**。它们构成了积压主力。最令人担忧的是 #1400 这个升级阻断性 bug——自 4 月 3 日报告至今已超过 2 个月，仍未有关联的修复 PR 进入合并阶段。

---

## 6. 功能请求与路线图信号

根据今日活跃 PR 和近期合并趋势，以下方向大概率将纳入下一版本：

| 方向 | 依据 | 可能性 |
|---|---|---|
| **LiteLLM 网关集成** | [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193) 已提交，实现优雅，无新增依赖 | ⭐⭐⭐ 高 |
| **OpenClaw 定时任务稳定性** | 今日 3 个相关 PR 全部合并，是明确的迭代主线 | ⭐⭐⭐ 高（已在进行中） |
| **Cowork 计划模式持久化** | [#2192](https://github.com/netease-youdao/LobsterAI/pull/2192) 刚合并，后续可能还有配套改进 | ⭐⭐⭐ 高 |
| **多文件选择修复** | #1402 已有 PR，需求明确 | ⭐⭐ 中（取决于 review） |
| **统一通知渠道** | #1406 修复 IM 过滤空列表通知 | ⭐⭐ 中 |

---

## 7. 用户反馈摘要

### 😤 不满 / 痛点

1. **升级即瘫痪**（[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)）：3.3.0 → 4.1.0 的升级桥接体验极差。用户描述「彻底瘫痪」，并主动留下联系方式请求帮助——说明现有升级日志和回滚机制未能满足期望。
2. **自定义 LLM 被静默阻断**：qwen3.5-plus 自定义配置因 web-extractor 前置检查而无法启动，给用户的体验是「不登录能用、登录了反而不能用」，反馈系统在配置冲突时缺乏明确提示。
3. **安全顾虑**（[#1401](https://github.com/netease-youdao/LobsterAI/pull/1401)）：SSE 请求 ID 使用 `Math.random()` 被指出可被预测，影响 SSE 流式通信安全。虽然已有修复 PR，但至今未合并，持续暴露。

### ✅ 满意 / 正向信号

1. **LiteLLM 集成方案受好评**：社区自发提交的 LiteLLM 整合 PR 显示用户对开源生态兼容性和多模型灵活性的期待，反映社区活跃度健康。
2. **定时任务改进方向正确**：今日合并的 3 个 OpenClaw PR 从会话一致性角度解决实际痛点，用户可感知到任务调度稳定性的提升。

---

## 8. 待处理积压

以下是最值得维护者关注的积压项：

| Issue/PR | 年龄 | 严重度 | 风险 |
|---|---|---|---|
| **[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)** — 网关无限重启 | **>80 天**（2026-04-03） | 🔴 致命 | 升级阻断，严重损害版本升级信心，建议立即响应并提供回滚指南 |
| **[#1401](https://github.com/netease-youdao/LobsterAI/pull/1401)** — SSE ID 安全修复 | **>80 天** | 🟠 安全高危 | 安全问题长期未合并，公开暴露攻击面 |
| **#1402–1404, #1406** — 4 个 stale UX 修复 PR | **>80 天** | 🟡 中 | 代码已就绪但长期无 review，建议批量处理或关闭 |

> **📊 积压严重度评估**：项目目前有 **5 个 4 月初创建的 stale PR** 和 **1 个同日期的 open Issue** 均处于无响应状态。其中 #1400 和 #1401 属于高优先级但未得到相应处理，这可能反映出维护资源与社区需求之间的瓶颈。建议在近期迭代中至少对这些积压进行官方关闭或合并，以修复社区信任。

---

*OWL 🐾 | 数据来源：netease-youdao/LobsterAI | 生成时间：2026-06-24*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-06-24

---

## 1. 今日速览

Moltis 项目在过去 24 小时内整体活跃度较低：无新开或活跃中的 Issue，无新版本发布，仅有 1 条 PR 被关闭（#215，`feat(tools): add send_image tool for channel image delivery`）。该 PR 由社区贡献者 maximilize 发起，最终未被合并而关闭，表明该功能方向可能仍在讨论中或实现方案尚未满足合并标准。项目当前处于相对平静期，维护者响应和社区参与均需关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已关闭 PR

| PR | 标题 | 作者 | 状态 | 关闭时间 |
|---|---|---|---|---|
| [#215](https://github.com/moltis-org/moltis/pull/215) | feat(tools): add send_image tool for channel image delivery | maximilize | ❌ Closed | 2026-06-23 |

**PR 内容摘要：** 该 PR 旨在新增 `send_image` 工具，允许技能（skills）将本地图片文件（PNG、JPEG、GIF、WebP）通过 Telegram 等渠道发送。实现复用了现有的截图管线，在 `screenshot` 键中返回 `data:` URI，由 chat runner 自动拾取；同时支持可选的 `caption` 参数。

**关闭分析：** 该 PR 创建于 2026-02-23，距今已有约 4 个月，最终于 2026-06-23 被关闭而非合并。可能原因包括：实现方案与项目架构方向不一致、代码质量或测试覆盖不足、维护者未及时 review、或该功能已被其他方式覆盖。建议维护者向该贡献者说明关闭原因，避免社区贡献积极性受挫。

---

## 4. 社区热点

过去 24 小时无活跃讨论。当前社区互动处于低位，无高评论量或高反应量的 Issue/PR。

---

## 5. Bug 与稳定性

过去 24 小时无新增 Bug 报告、崩溃或回归问题。

---

## 6. 功能请求与路线图信号

**已提出但未合并的功能：**

- **多渠道图片发送工具（send_image）** — PR #215 提出了在 Telegram 等渠道发送本地图片的能力。该需求反映了社区对富媒体消息支持的强烈诉求。鉴于 PR 已被关闭，该功能是否会被重新实现或纳入路线图尚不明确。

**路线图判断：** 图片/富媒体发送是 AI 智能体框架的核心能力之一，预计该功能方向仍有可能以其他实现形式出现在后续版本中。

---

## 7. 用户反馈摘要

过去 24 小时无新增用户反馈。从已关闭的 PR #215 可提炼以下信息：

- **使用场景：** 用户期望技能能够将本地生成的图片（如图表、截图、AI 生成图像）直接通过 Telegram 等消息渠道发送给接收方，而非仅发送文本消息。
- **痛点：** 当前框架缺乏原生的图片发送工具，开发者需要自行实现或绕过限制，增加了技能开发复杂度。
- **满意度信号：** 社区贡献者主动提交 PR 说明需求真实存在，但 PR 被关闭且无合并可能暗示实现方案或优先级尚未对齐。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 等待时长 | 建议 |
|---|---|---|---|---|---|
| PR | [#215](https://github.com/moltis-org/moltis/pull/215) | feat(tools): add send_image tool | ❌ Closed | ~4 个月 | 建议维护者明确关闭原因并告知贡献者；若功能仍有价值，可新开 Issue 重新追踪 |

**维护者行动建议：**

1. **PR #215 后续处理：** 该 PR 关闭已超过 24 小时，建议维护者在 PR 评论区补充关闭原因（如"架构调整中""需补充测试""功能重复"等），以维护健康的社区贡献文化。
2. **Issue 积压：** 当前活跃 Issue 数为 0，项目表面清爽，但需警惕是否因社区参与度下降而导致的问题沉默期。
3. **整体健康度评估：** 🟡 中等 — 项目无紧急问题，但社区活跃度和贡献者响应速度需持续关注，避免项目进入维护停滞状态。

---

*数据来源：github.com/moltis-org/moltis | 日报生成时间：2026-06-24*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-06-24

**项目地址** · https://github.com/agentscope-ai/CoPaw

---

## 一、今日速览

CoPaw 今日处于高活跃迭代期：过去 24 小时内 Issue 更新 38 条、PR 更新 50 条、新版本发布 1 个，三项指标均处于高位。项目当前正处在 **AgentScope 2.0 迁移后的震荡清理阶段** —— 大量 PR 聚焦于合并后 Bug 修复（`#5440` Ponytail cleanup）和前端移动端适配（持续涌现的 responsive PR 浪潮）。社区反馈的核心矛盾已从"新功能缺失"转向"核心稳定性不足"，用户的升级体验、定时任务可靠性、内存占用等问题反复出现。移动端适配是本期最显著的推进方向，多个 PR 密集覆盖 Skill Pool、Security、Debug、Chat 等页面的窄屏适配。

---

## 二、版本发布

### v1.1.12.post2

| 条目 | 详情 |
|---|---|
| 版本号 | `v1.1.12.post2` |
| 发布时间 | 2026-06-24 |
| 类型 | 补丁修复（post-release） |

**变更内容：**

1. **删除当前会话后自动导航至新会话**
   - PR `#5376` | `@zhaozhuang521`
   - 修复用户删除当前活跃会话后界面未自动跳转至新会话的问题，改善会话管理流畅度。

2. **控制台文件预览支持相对路径**（feat）
   - PR `#5377` | `@zhijianma`
   - 增强聊天中的文件预览功能，支持相对路径引用，解决此前只能使用绝对路径的限制。

3. **修复 WSL 环境下 `localhost` 无法连接的问题**（已包含在该版本 `CHANGELOG` 中）
   - PR `#5378` | `@qiyuanlicn`
   - 修复 WSL 环境下启动后因 `get_remote_addr(transport)` 导致的 `Internal Server Error`（关联 Issue `#5379`）。

> **迁移注意事项：** 本次为补丁版本，无破坏性变更。WSL 用户和此前遭遇 `#5379` Internal Server Error 的用户可直接升级。

---

## 三、项目进展

### 今日合并 / 关闭的重要 PR

| PR | 状态 | 作者 | 概要 |
|---|---|---|---|
| `#5440` | 已合并 | `nguyenthanhthe` | **AgentScope 2.0 合并后 Bug 清理**：+4/-1493 行，修复 `CancelledError` 未正确吞掉、`ModelSelector` 状态异常等 P0 回归问题。为 2.0 迁移扫尾的关键 PR。 |
| `#5437` | 已关闭（待定审查） | `hanson-hex` | 前端 M3-B 单元测试（Inbox + 11 个 API 模块），14 个测试文件 / 171 用例，覆盖此前零测试的前端模块。 |
| `#5433` | 已关闭（待定审查） | `hanson-hex` | 前端 M3-A 单元测试（M1 Agent hooks + Settings），19 个测试文件 / ~135 用例。 |
| `#5366` | 已关闭 | `lecheng2018` | Agent Config 页移动端适配 CSS。 |
| `#5397` | 已关闭 | `lecheng2018` | Settings → Models 页移动端适配。 |
| `#5435` | 已关闭 | `jinliyl` | 移除 `get_memory_prompt` 中多余的语言参数，简化记忆接口。 |

**整体推进评估：**

- **稳定性**：`#5440` 的合并标志着 AgentScope 2.0 迁移后第一批阻塞性回归被清除，项目正从"迁移中"过渡到"迁移后优化"阶段。
- **质量工程**：两个批量测试 PR（`#5433`、`#5437`）虽暂未合并但已就绪，前端测试覆盖率将显著提升，为后续 UI 重构提供安全网。
- **移动端适配**：今日关闭的 `#5366`、`#5397` 加上多个待合并的 responsive PR（`#5444`–`#5452`），移动端体验正在系统性补齐。

---

## 四、社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 标签 | 核心诉求 |
|---|---|---|---|
| `#5262` [升级后内置技能禁用状态被重置](https://github.com/agentscope-ai/CoPaw/issues/5262) | 12 | bug | 用户每次升级后，手动禁用的内置技能（如 `docx`、`xlsx`）会被重新启用，需反复手动关闭。这是**第二次提 Issue**（前次 `#4807`），说明问题长期未根治。 |
| `#5064` [Agent 创建的定时任务无法触发](https://github.com/agentscope-ai/CoPaw/issues/5064) | 12 | bug, invalid | Agent 通过对话生成的定时任务到达时间点后不执行，且不支持手动编辑。已关闭标记为 invalid，但 12 条评论说明社区分歧较大。 |
| `#5317` [Tauri 下找不到 Python，skill 无法运行](https://github.com/agentscope-ai/CoPaw/issues/5317) | 6 | question | Windows Tauri 桌面端用户发现内置 conda Python 路径丢失，自定义 skill 中的 Python 脚本全部无法执行。 |
| `#5345` [自定义 OpenAI 兼容提供商不支持 function calling](https://github.com/agentscope-ai/CoPaw/issues/5345) | 6 | bug | 用户手动添加 OMLX 等自定义提供商后，模型只返回文本不调用工具，而 Ollama 原生支持正常。期望自定义提供商也能完整支持 tool use。 |

### 📌 热点 PR

| PR | 作者 | 亮点 |
|---|---|---|
| `#5321` [feat: scroll context manager](https://github.com/agentscope-ai/CoPaw/pull/5321) | `niceIrene` | 首次贡献者引入 **scroll 上下文管理策略**：将完整对话持久化到 SQLite，模型可通过 Python REPL 按需召回历史轮次，替代原生压缩方案。是上下文管理架构的重要探索。 |
| `#5440` [fix: agentscope 2.0 post-merge bugs](https://github.com/agentscope-ai/CoPaw/pull/5440) | `nguyenthanhthe` | 已合并，见项目进展。 |

**热点分析：**

- **技能管理持久化**（`#5262`）是社区最持久的痛点之一，两次 Issue 跨越多个版本仍未解决，反映出配置持久化层在升级流程中的设计缺陷。
- **定时任务可靠性**（`#5064`、`#5235`、`#5398`）是另一高频问题群，涉及 cron 调度器的核心功能，已出现多个相关 Issue 和 Bug 报告。
- **自定义模型提供商兼容性**（`#5345`）暴露了当前 provider 适配层对 OpenAI 兼容 API 的工具调用支持不够通用，影响用户接入第三方模型的体验。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 核心功能崩溃 / 数据丢失

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| `#5398` [Cron 调度器停止分发已启用的任务](https://github.com/agentscope-ai/CoPaw/issues/5398) | 应用进程存活但 cron job 不再触发，影响所有依赖定时任务的 Agent | ✅ 已关闭 | 待确认 |
| `#5401` [大量工具调用历史导致前端崩溃白屏](https://github.com/agentscope-ai/CoPaw/issues/5401) | 后端将 `tool_use`/`tool_result` 转为 `type: "data"` 的 DataContent，前端渲染组件不识别导致崩溃 | 🟡 Open | 无 |
| `#5379` [Python 安装后启动报 Internal Server Error](https://github.com/agentscope-ai/CoPaw/issues/5379) | `get_remote_addr(transport)` 在 WSL 环境下报错 | ✅ 已关闭 | ✅ 已包含在 v1.1.12.post2 |

### 🟠 P1 — 功能异常 / 体验严重受损

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| `#5262` [升级后内置技能禁用状态被重置](https://github.com/agentscope-ai/CoPaw/issues/5262) | 跨版本升级后配置丢失 | 🟡 Open | 无 |
| `#5345` [自定义 OpenAI 提供商不支持 function calling](https://github.com/agentscope-ai/CoPaw/issues/5345) | 自定义提供商仅返回文本不调用工具 | 🟡 Open | 无 |
| `#5328` [DeepSeek 模型 thinking 过程中卡死](https://github.com/agentscope-ai/CoPaw/issues/5328) | 使用 DeepSeek 时 Agent 在推理阶段频繁卡死，需手动停止后继续 | 🟡 Open | 无 |
| `#5373` [Shell 命令特殊字符解析失败](https://github.com/agentscope-ai/CoPaw/issues/5373) | `execute_shell_command` 无法处理重定向、管道等 shell 特殊字符 | 🟡 Open | 无 |
| `#5421` [切换 Agent 和聊天窗口严重卡顿](https://github.com/agentscope-ai/CoPaw/issues/5421) | 多 Agent 切换和同 Agent 内聊天窗口切换均出现明显卡顿 | 🟡 Open | 无 |

### 🟡 P2 — 体验问题 / 边界场景

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| `#5416` [思考输出 / 上下文截断问题](https://github.com/agentscope-ai/CoPaw/issues/5416) | 部分模型将回复放入 `thinking`/`reasoning_content`，`content` 为空导致用户看不到回复 | 🟡 Open | 无 |
| `#5166` [Python 3.13 安装 TeamChat 插件失败](https://github.com/agentscope-ai/CoPaw/issues/5161) | `imghdr` 模块在 Python 3.13 中已移除 | 🟡 Open | 无 |
| `#5403` [浏览器 autofill 劫持模型配置页搜索框](https://github.com/agentscope-ai/CoPaw/issues/5403) | 搜索框被浏览器误识别为密码字段，弹出 autofill 建议 | 🟡 Open | 无 |
| `#5378` [新增自定义模型后模型页面无法使用](https://github.com/agentscope-ai/CoPaw/issues/5378) | 新增模型后 endpoint 自动填入查询框且无法删除 | 🟡 Open | 无 |

---

## 六、功能请求与路线图信号

| Issue | 诉求 | 关联 PR | 纳入可能性 |
|---|---|---|---|
| `#5453` [KaTeX / LaTeX 公式渲染支持](https://github.com/agentscope-ai/CoPaw/issues/5453) | 桌面端支持 LaTeX 公式渲染 | 无 | ⭐⭐ 中 — 用户群体明确但非核心功能 |
| `#5316` [memory_search 增加时间感知排序](https://github.com/agentscope-ai/CoPaw/issues/5316) | 记忆检索结果可按时间新鲜度加权排序 | 无 | ⭐⭐⭐ 高 — 与 `#3995` 记忆增强方向一致 |
| `#3995` [增强记忆管理与召回机制](https://github.com/agentscope-ai/CoPaw/issues/3995) | 记忆文件生命周期管理、冲突检测、自动归档 | `#5321`（scroll context manager） | ⭐⭐⭐ 高 — 已有架构级 PR 在推进 |
| `#5441` / `#5439` [优化内存占用](https://github.com/agentscope-ai/CoPaw/issues/5441) | 启动即占 1.4GB 内存，期望优化 | 无 | ⭐⭐ 中 — 性能优化通常排在新功能之后 |
| `#5360` [先稳定核心再添加新功能](https://github.com/agentscope-ai/CoPaw/issues/5360) | 优先解决移动端适配、Agent 交互等核心稳定性问题 | 多个移动端 PR 正在进行 | ⭐⭐⭐ 高 — 与当前开发方向完全一致 |
| `#5427` [Kimi Coding Plan 模型配置支持](https://github.com/agentscope-ai/CoPaw/issues/5427) | 支持 Anthropic 兼容端点的自定义提供商 | 无 | ⭐⭐ 中 — 与 `#5345` 自定义提供商兼容性问题相关 |

**路线图判断：**

- **短期（v1.1.13 / v1.2）**：AgentScope 2.0 回归修复收尾 → 移动端适配全面覆盖 → 定时任务可靠性修复
- **中期**：记忆系统增强（scroll context + 时间感知排序）→ 自定义提供商 function calling 通用化
- **长期**：内存优化、LaTeX 渲染等体验增强

---

## 七、用户反馈摘要

### 😤 不满意 / 痛点

1. **升级体验差**：多位用户反映升级后配置被重置（`#5262`），这直接破坏了用户对配置持久化的基本信任。一位用户明确指出"之前提过一次 issue"，说明问题被忽视后用户耐心消耗殆尽。

2. **定时任务不可靠**：多个独立用户报告 cron 任务不触发（`#5064`、`#5235`、`#5398`），涉及 Agent 自动创建和手动创建两种场景。这是 Agent 自动化能力的核心功能，频繁失效严重影响使用信心。

3. **内存占用过高**：用户反馈"刚启动，什么都还没有做内存占用已经 1.4g"（`#5441`、`#5439`），对于期望在本地运行的个人 AI 助手产品来说，这是影响用户选择的关键因素。

4. **模型兼容性碎片化**：DeepSeek 卡死（`#5338`）、自定义提供商不支持 tool use（`#5345`）、部分模型 thinking 内容不可见（`#5416`）——用户在使用非官方推荐模型时面临大量兼容性问题。

5. **桌面端体验缺陷**：Tauri 下 Python 路径丢失（`#5317`）、浏览器 autofill 干扰（`#5403`）等桌面端特有问题长期未解决。

### ✅ 满意 / 期待

1. **移动端适配获积极响应**：`#4635` 移动端入口需求已关闭，说明团队已在系统性解决移动端体验，今日多个 responsive PR 印证了这一点。

2. **AgentScope 2.0 迁移推进**：用户关注到 2.0 beta 版本（`#5456`、`#5455`），对新版架构持期待态度，说明社区对技术升级方向认可。

3. **scroll context manager**（`#5321`）作为首次贡献者的架构级 PR，展示了社区对创新上下文管理方案的兴趣。

---

## 八、待处理积压

以下 Issue/PR 长期未响应或处于关键阻塞状态，建议维护者优先关注：

| 项目 | 链接 | 等待时长 | 优先级 | 建议行动 |
|---|---|---|---|---|
| `#5262` 升级后技能禁用状态重置 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/5262) | 7 天（第二次提） | 🔴 高 | 确认根因（升级脚本覆盖配置？），给出修复 ETA |
| `#5345` 自定义提供商 function calling | [Issue](https://github.com/agentscope-ai/CoPaw/issues/5345) | 4 天 | 🔴 高 | 排查 provider 适配层对 tool use 的处理逻辑 |
| `#5328` DeepSeek thinking 卡死 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/5328) | 5 天 | 🟠 中 | 确认是否为流式输出超时问题 |
| `#5373` Shell 特殊字符解析 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/5373) | 2 天 | 🟠 中 | 评估 `execute_shell_command` 的解析逻辑是否需要重构 |
| `#5064` 定时任务无法触发（已关闭但争议大） | [Issue](https://github.com/agentscope-ai/CoPaw/issues/5064) | 14 天 | 🟠 中 | 12 条评论标记 invalid 但社区分歧大，建议重新审查 |
| `#5321` scroll context manager | [PR](https://github.com/agentscope-ai/CoPaw/pull/5321) | 5 天 | 🟡 中 | 首次贡献者架构级 PR，需要核心维护者 review |
| `#5166` Python 3.13 兼容性 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/5166) | 12 天 | 🟡 中 | Python 3.13 已稳定发布，`imghdr` 移除是已知变更，应尽快适配 |
| `#3995` 记忆管理增强 | [Issue](https://github.com/agentscope-ai/CoPaw/issues/3995) | 54 天 | 🟡 中 | 长期功能请求，已有 `#5321` 部分回应，需整体规划 |

---

> **日报生成时间**：2026-06-24
> **数据来源**：GitHub API（agentscope-ai/CoPaw）
> **分析周期**：过去 24 小时

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-24

---

## 1. 今日速览

ZeroClaw 今日保持高活跃度：共处理 **34 条 Issue 更新**（21 条新开/活跃、13 条已关闭）与 **50 条 PR 更新**（31 条待合并、19 条已合并/关闭）。无新版本发布，但多个基础设施、安全和互操作性方向持续推进。项目健康度良好——issue 关闭节奏稳健，PR 评论区有实质技术讨论，数项关键 bug fix 已合并落地。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的重要 PR 覆盖了多个领域：

| PR | 状态 | 内容摘要 |
|---|---|---|
| [#8074](https://github.com/zeroclaw-labs/zeroclaw/pull/8074) | 已合并 | 修复 gateway 级联删除不一致：删除 provider/channel 别名时预览会触发级联但实际 API 调用产生悬空引用。这是配置管理的关键修复，消除了因配置残留导致的运行时崩溃风险。 |
| [#8011](https://github.com/zeroclaw-labs/zeroclaw/pull/8011) | 已合并 | 恢复 per-sender `/thinking` 命令，支持按发送方单独设置推理强度级别（minimal/low/medium/high/max），从 6074 号 revert 中恢复的重要功能。 |
| [#8068](https://github.com/zeroclaw-labs/zeroclaw/pull/8068) | 已合并 | 恢复 Matrix 房间管理 tool（创建房间、邀请用户），将之前恢复的矩阵 API 真正接入调用链路。 |
| [#8143](https://github.com/zeroclaw-labs/zeroclaw/pull/8143) | 已合并 | 将 gettext `.po` 翻译文件迁移至独立 git submodule（zeroclaw-i18n），减小主仓库体积并改善翻译工作流。 |
| [#8186](https://github.com/zeroclaw-labs/zeroclaw/pull/8186) | 已合并 | Zerocode TUI 连接 daemon 时增加版本不匹配检测，防止因版本差异导致静默功能异常。 |
| [#8195](https://github.com/zeroclaw-labs/zeroclaw/pull/8195) | 已合并 | 在 PR CI 流程中增加文档链接门禁（docs link gate），提升外部文档引用质量。 |
| [#8105](https://github.com/zeroclaw-labs/zeroclaw/pull/8105) | 已合并 | 明确 Node 容器基础镜像大版本策略，防止 `cargo generate installers` 静默升级 Node 主版本引发 CI 回归。 |

**节奏判断**：今日合并偏向"基础设施补课 + 历史 revert 功能恢复"，为 v0.9.0 里程碑（auth/security/gateway，见 Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）夯实基础。

---

## 4. 社区热点

以下按评论热度与议题重要度排序：

### Issue [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) — `zc_env_read` allowlist（6 条评论，已关闭）
要求为 WASM plugin 的 `env_read` host function 增加 allowlist 机制。当前任何持有 `env_read` 权限的插件可读取任意环境变量，存在凭据泄露风险。核心诉求：**最小权限原则在插件沙箱中的落地**。

### Issue [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) — RFC: 供应链签名（4 条评论，活跃）
提出为容器镜像和发布二进制增加硬件 PGP 密钥签名、多方 quorum、离线签名与 SLSA provenance 完整链路。属于 Phase 3 (Jobs 9-17) 的扩展，反映社区对**供应链安全高标准**的诉求。

### Issue [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) — MCP tools 在 TUI 缺失（4 条评论，已关闭）
用户发现 MCP server 工具在 gateway 侧可见，但 Zerocode TUI 会话收不到。影响工作流阻断（S1），说明**工具发现机制在 entry points 之间的不一致**是实际用户体验痛点。

### Issue [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) — RFC: 取消 Extism、改用原生 wasmtime component model（3 条评论）
建议用直接 wasmtime component model 替代 Extism 作为 plugin host，目标构建目标 `wasm-wasip2`。深层诉求：**减少外部依赖、简化插件开发链路**，但涉及 FND-001 架构文档的多处矛盾。

### Issue [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) — RFC: 合并 aardvark-sys 到 zeroclaw-hardware（3 条评论）
逐步清理独立 crate，统一硬件管理模块。属于增量代码卫生工作。

### Issue [#8238](https://github.com/zeroclaw-labs/zeroclaw/pull/8238) — 独立 delegate mode（新功能开发中）
请求为 specialist handoff 添加独立的 delegate 模式，允许 specialist agent 在自身策略和工具集下运行，同时保留 bounded delegation 为默认。这代表 **多智能体协作模型** 的演进方向。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| **S1** | [#8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202) | 新会话系统 prompt 缺失 bundled_skill 加载，导致新会话不识别工作区技能 | 进行中，fix PR [#8202](https://github.com/zeroclaw-labs/zeroclaw/pull/8202) 部分就绪 |
| **S1** | [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) | Matrix channel 延迟加载图片时丢失可重载引用，机器人声称"没看到"用户图片 | 调查中 |
| **S1** | [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt 工具可用性与实际 effective tools 不匹配（跨所有 entry points） | #8053 已修复直接路径，其他入口仍待解决 |
| **S2** | [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) | `voice_wake.rs` ChannelMessage 缺少 `subject` 字段，`--all-features` 构建失败 | 新开，待确认是否已有 fix |
| **S2** | [#8186](https://github.com/zeroclaw-labs/zeroclaw/issues/8186) | Zerocode TUI 连接时不检测 daemon/TUI 版本不匹配 | 已合并修复 |
| **S3** | [#2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091) | Telegram poll 错误日志可能泄露 Bot API token URL 片段 | 已关闭 |
| **S2** | [#8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219) | gpt-oss-120b 在 Groq 执行多轮工具调用时第二请求失败（tool_call_id null + reasoning_content 拒绝） | 进行中 |

---

## 6. 功能请求与路线图信号

汇总今日活跃的新功能需求，判断下一版本的优先信号：

| 方向 | Issue | 路线图信号强度 | 备注 |
|---|---|---|---|
| 加权环境变量（per-agent 配置） | [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | ⭐⭐⭐ | AliasedAgentConfig 增加 env map，需求具体，可能近期有 PR |
| 钉钉 channel 流式消息 | [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) | ⭐⭐⭐ | 降低长任务延迟，体验类需求 |
| 应用内升级（web dashboard） | [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | ⭐⭐ | 减少用户手动操作，中期 UX 改进 |
| 统一 slash-command 注册中心 | [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | ⭐⭐ | 三端命令一致性，需要 RFC 审核 |
| 能力门控 WASI 硬件接口 | [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) | ⭐⭐⭐ | plugin 硬件访问（GPIO/SPI/I2C），扩展 plugin 生态 |
| 关系记忆工作流化 | [#8251](https://github.com/zeroclaw-labs/zeroclaw/issues/8251) | ⭐⭐ | 新增期，后续可能演化为用户功能 |

**判断**：加权环境变量、流式消息、WASI 硬件接口是需求明确、影响面中等的"快赢"项，可能在 v0.9.x 早期合并。

---

## 7. 用户反馈摘要

从今日 Issue 评论与描述中提炼：

**痛点**：
- **跨入口点工具可用性不一致**——用户发现 MCP 工具在 gateway 可见、TUI 不可见；system prompt 说"no tools"但实际在请求中携带工具。这是直接破坏用户体验的核心问题。
- **SSO/认证状态管理薄弱**——Bot token 泄露于日志、持久化 session 的凭据/环境变量不隔离。
- **多 IM channel 能力碎片化**——钉钉/QQ/飞书/企微各有不同流式消息、卡片消息、房间管理能力，部分 channel 功能滞后。

**满意**：
- RFC 驱动的重构（如 [#5615](https://github.com/zeroclaw-labs/zeroclaw/blob/master/docs/book/src/contributing/rfcs.md) 流程）被社区引用为正面示例。
- v0.8.3 tracker（[#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)）被认为有效促进了大规模 bug fix 整合。

**使用场景**：
- 小型/中型部署（树莓派、NUC、家用服务器）的多 channel 接入。
- 需严格凭据隔离的安全敏感用户（credential_process、env_read 权限讨论高频出现）。
- 跨 delegate/sub-agent 的自动化任务编排。

---

## 8. 待处理积压

以下长期未响应或处理缓慢，需维护者关注：

| Issue/PR | 等待时长 | 关注原因 |
|---|---|---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — audit bulk revert c3ff635 | ~60 天 | 153 commits 被整体 revert，用户提交了明确的 commit hash 清单供恢复评估，但长期无回复。问题核心明确，但审计工作量较大。 |
| [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) — zc_env_read allowlist | ~66 天 | 已关闭但有 6 条评论，后续 PR [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918)（SSRF 保护）已合并，allowlist 实现仍需跟进。 |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — system prompt 工具匹配（所有入口） | ~4 天（但影响范围广） | 已有 #8053 修复直接 runtime 路径，但 channel/WebSocket/multimodal 等入口未覆盖，需明确修复计划。 |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) — 废弃 Extism 改用 wasmtime | ~4 天 | 影响 FND-001 架构文档和 Phase 2 D2 实施方向，需尽早确认接受/拒绝，以免引起实现侧反复。 |
| [#8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202) — 新会话 bundled_skill 缺失 | ~1 天 | S1 阻断性 bug，应优先合并 fix PR。 |
| [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) — Matrix 延迟加载图片丢失引用 | ~2 天 | S1，影响视觉交互场景。 |

---

**日报结语**：ZeroClaw 今日节奏稳健，重点在基础设施修复与安全加固方向持续补课。v0.9.0 里程碑尚有 134 个 open items（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)），建议维护者近期优先处理跨入口点工具一致性（#8054）和 Revert 审计收尾（#6074）两项长尾风险。社区参与度良好，RFC 流程运行正常，供应链安全、WASI 硬件接口、独立 delegate 等新方向值得持续跟踪。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*