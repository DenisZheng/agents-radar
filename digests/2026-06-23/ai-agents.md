# OpenClaw 生态日报 2026-06-23

> Issues: 265 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-23 00:39 UTC

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

# OpenClaw 项目动态日报 — 2026-06-23

---

## 1. 今日速览

OpenClaw 社区今日保持极高活跃度：**265 条 Issue 更新**（新开/活跃 178 条，关闭 87 条），**500 条 PR 更新**（待合并 436 条，已合并/关闭 64 条），并发布了 **v2026.6.10-beta.2** 新版本。项目处于密集迭代期，核心议题集中在**会话状态稳定性**（session-state / message-loss 标签高频出现）、**内存泄漏修复**、以及**多提供商兼容性**。社区对 Beta 回归问题的反应非常强烈，多个高赞 Issue 直指生产环境稳定性。

---

## 2. 版本发布

### v2026.6.10-beta.2

**主要更新：**

- **对话自动快速模式（Automatic fast mode for talks）：** OpenClaw 现在可以为短对话轮次自动启用快速模式，对较长运行则回退到正常模式，并具备有界的回退和投递行为。(#85104)
- **更可靠的模型路由（More reliable model routing）：** 模型路由逻辑得到增强，减少跨提供商切换时的失败。

**迁移注意事项：** 当前为 Beta 版本，快速模式自动切换可能影响依赖固定延迟的用户工作流，建议在测试环境验证后再升级生产。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推进了以下方向：

| PR | 状态 | 进展 |
|---|---|---|
| **#95765** | 已关闭 | 修复首次引导安装外部 provider plugin 后跳过选定 auth flow 的问题 (#95765) |
| **#95218** | 已合并 | 限制 provider JSON 响应读取上限（16 MiB），防止内存溢出 (#95218) |
| **#95614** | 已合并 | 修复 memory-wiki 重新摄入时覆盖用户手写注释块的问题 (#95614) |
| **#95880** | 已合并 | 泛化 QA profile evidence 工作流，支持任意 taxonomy-backed profile (#95880) |
| **#93041** | 已关闭 | 修复 2026.6.6 后 Telegram /usage 不显示的回归 (#93041) |
| **#92302** | 已关闭 | 修复 Windows 上 QMD memory 后端路径拼接错误 (#92302) |
| **#78396** | 已关闭 | 修复 `--force-reset-cross-signing` 重复触发导致 E2EE 状态损坏 (#78396) |
| **#67868** | 已关闭 | 修复 `memory status` 在仅启用 light phase 时误报 "Dreaming: off" (#67868) |
| **#56979** | 已关闭 | 修复 auth token 过期时模型回退日志 spam (#56979) |
| **#65355** | 已关闭 | 修复远程 gateway probe 因非 loopback 目标超时误判为不健康 (#65355) |

**关键方向总结：**
- **安全性：** provider 响应边界限制、cross-signing 修复
- **跨平台兼容：** Windows 路径修复、QMD 后端修复
- **可观测性：** memory status 显示修正、QA 工作流泛化
- **Telegram 稳定性：** /usage 回归修复

---

## 4. 社区热点

以下 Issue 今日讨论最活跃（按评论数排序）：

### 🔥 #88838 — SQLite 会话/转录迁移（34 条评论）
**标签：** P1, diamond lobster, session-state, message-loss
**链接：** https://github.com/openclaw/openclaw/issues/88838

社区对核心 session/transcript 从 SQLite 向 accessor seam 迁移的进展高度关注。当前 Path 3 已基本完成文件支撑的 seam 采用阶段，剩余工作集中在 transcript/plugin-adjacent identity tail 和 3.2 SQLite foundation/adapters。这是影响数据持久化和会话恢复架构的**基础性工程**。

### 🔥 #88312 — Codex app-server turn 完成停滞回归（17 条评论，4 👍）
**标签：** P1, regression, platinum hermit
**链接：** https://github.com/openclaw/openclaw/issues/88312

自 2026.5.27 起，多工具 agent turn 在 Codex app-server 上可靠失败，报 "Codex stopped before confirming the turn was complete"。这是 #84076 修复后的**回归**，影响 ChatGPT Plus 订阅用户的日常使用。

### 🔥 #91588 — Gateway 内存泄漏，RSS 从 350MB 涨至 15.5GB（13 条评论）
**标签：** P0, platinum hermit, crash-loop
**链接：** https://github.com/openclaw/openclaw/issues/91588

严重的生产环境问题：gateway 进程在 2-3 天内从 350MB 涨到 15.5GB，触发 OOM killer 后反复重启。直接影响所有自托管用户的稳定性。

### 🔥 #86538 — Session 写锁超时阻塞子 agent 投递通道（13 条评论）
**标签：** P1, diamond lobster
**链接：** https://github.com/openclaw/openclaw/issues/86538

Session JSONL 写锁超时阻塞主通道、cron 嵌套通道和子 agent 通道，且缺乏足够的诊断信息。影响多 agent 并发场景。

### 🔥 #92201 — Anthropic thinking 签名在回放时无效（12 条评论）
**标签：** P1, diamond lobster
**链接：** https://github.com/openclaw/openclaw/issues/92201

嵌入式 agent runner（Slack plugin）间歇性持久化无效签名的 thinking blocks，且恢复包装器因错误文本被泛化而永远不触发。关联 PR #94493 已尝试修复。

---

## 5. Bug 与稳定性

按严重程度排列的今日重点 Bug：

### 🔴 P0 — 需立即关注

| # | 问题 | 状态 | 有 Fix PR |
|---|---|---|---|
| **#91588** | Gateway 内存泄漏 → OOM → 反复重启 | 开放 | ❌ 无 |
| **#95623** | tool_use.id sanitizer 未覆盖 OpenAI-responses 复合 ID，跨提供商故障转移到 Anthropic 时 400 砖化 session | 开放 | ❌ 无 |
| **#95833** | Subagent abort-settle 未释放 .jsonl.lock，永久破坏 session | 开放 | ❌ 无 |

### 🟠 P1 — 高优先级

| # | 问题 | 状态 | 有 Fix PR |
|---|---|---|---|
| **#88312** | Codex app-server turn 完成停滞回归 | 开放 | ❌ 无 |
| **#86538** | Session 写锁超时阻塞子 agent 投递 | 开放 | ❌ 无 |
| **#92201** | Anthropic thinking 签名回放无效 | 开放 | ✅ #94493 |
| **#95495** | 2026.6.9 静默迁移 memory store 无迁移警告 | 开放 | ❌ 无 |
| **#91363** | 隔离 cron 在 model-call-started 阶段一致失败 | 开放 | ❌ 无 |
| **#95489** | claude-cli 额度耗尽错误绕过模型回退链 | 开放 | ❌ 无 |
| **#95612** | cli-backend agent 对 Anthropic 返回 401 而 shell 正常 | 开放 | ❌ 无 |
| **#85743** | pendingFinalDelivery 心跳重放无限循环，无尝试上限 | 开放 | ❌ 无 |
| **#89095** | 子 agent 超时未通知父 session | 开放 | ❌ 无 |
| **#93858** | auto-reply foreground fence 消息交错 | 开放 | ❌ 无 |
| **#92516** | 容器化部署无法使用外部 channel 插件 | 开放 | ❌ 无 |

### 🟡 P2 — 中优先级

| # | 问题 | 状态 | 有 Fix PR |
|---|---|---|---|
| **#88657** | DeepSeek V4 Flash 不完整 turn | 开放 | ❌ 无 |
| **#87318** | Bedrock Haiku 4.5 inference profile ARN 不支持 | 开放 | ❌ 无 |
| **#93807** | web_fetch useTrustedEnvProxy 忽略 NO_PROXY | 开放 | ❌ 无 |
| **#95760** | NVIDIA Build provider 流式在工具调用中截断 | 开放 | ❌ 无 |
| **#85822** | Discord 轮次后 48s 静默间隙 | 开放 | ❌ 无 |
| **#87996** | Vertex beta INVALID_ARGUMENT 卡死长 session | 开放 | ❌ 无 |
| **#94251** | Ollama 远程 provider 流式未消费 | 开放 | ❌ 无 |
| **#93905** | Telegram /usage 不显示（已修复） | 已关闭 | ✅ 已合并 |
| **#87058** | Android node 连接但广告零命令 | 开放 | ❌ 无 |

---

## 6. 功能请求与路线图信号

| # | 需求 | 信号强度 | 判断 |
|---|---|---|---|
| **#90370** | 支持 PostgreSQL 替代 SQLite 作为内部存储（11 条评论，2 👍） | 🟡 中 | 与 #88838 SQLite 迁移方向相关，可能在 accessor seam 完成后考虑 |
| **#95724** | 按 source directory 而非 agent 索引 memory，消除重复向量存储（5 条评论） | 🟡 中 | 与 #95495 memory store 迁移问题高度关联，可能在近期修复中一并解决 |
| **#8299** | 配置选项抑制 sub-agent announce（7 条评论） | 🟢 低 | 长期开放，社区反复提及，可能纳入 agent 配置增强 |
| **#53638** | per-channel/per-group/per-DM 模型覆盖（6 条评论，2 👍） | 🟢 低 | 已关闭，但需求持续存在 |
| **#54794** | Telegram Inline Query 支持（6 条评论，2 👍） | 🟢 低 | stale 状态，优先级不高 |
| **#43564** | ACP Session Skill Context Injection（4 条评论） | 🟢 低 | 长期开放，架构复杂度高 |
| **#95279** | 提供受信的 inbound-decoration 合约（4 👍） | 🟡 中 | 较新，涉及安全边界设计 |

**路线图判断：** 当前项目重心明显在**稳定性回归修复**（session-state、message-loss、crash-loop 标签密集）和**核心架构迁移**（SQLite accessor seam）。新功能合并窗口可能需等到 Beta 稳定性达标后。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的痛点与场景：

### 😤 不满意

- **"静默迁移导致 1499 个文件全量重新嵌入"** — #95495 用户升级 2026.6.8 → 2026.6.9 后，memory vector store 被静默迁移，无升级警告，导致完整 re-embed。用户期望至少有一个迁移提示或原地兼容。
- **"Gateway 每 2-3 天 OOM 重启"** — #91588 自托管用户承受反复崩溃，严重影响生产可用性。
- **"Codex 多工具 turn 从 5.27 开始完全不可用"** — #88312 ChatGPT Plus 订阅用户发现之前正常的工作流突然中断。
- **"子 agent 超时后父 session 完全无感知"** — #89095 用户期望超时事件能被传递，而非静默丢弃。
- **"Android node 连接了但什么命令都没有"** — #87058 移动端用户配对后无法使用任何 node 功能。

### 😐 中性 / 建设性

- **"希望支持 PostgreSQL 避免维护两套数据库"** — #90370 企业用户已有 PostgreSQL 基础设施，强制 SQLite 造成运维负担。
- **"多个 agent 共享同一 workspace 时向量索引重复"** — #95724 用户发现资源浪费，提出按目录索引的合理建议。
- **"tool_use.id sanitizer 遗漏了复合 ID 格式"** — #95623 跨提供商用户在故障转移场景下遇到 session 砖化。

### 😊 满意 / 积极

- **"fast mode for talks 显著减少了短对话延迟"** — v2026.6.10-beta.2 用户对自动快速模式表示期待。
- **"memory-wiki 注释块保留修复很关键"** — #95614 合并获得社区正面反馈。

---

## 8. 待处理积压

以下长期未响应或需维护者重点关注的项目：

| # | 项目 | 等待时间 | 风险 |
|---|---|---|---|
| **#91588** | Gateway 内存泄漏（P0） | 14 天 | 🔴 影响所有自托管用户 |
| **#95833** | Subagent abort 未释放 .jsonl.lock | 1 天 | 🔴 永久破坏 session |
| **#95623** | tool_use.id 复合 ID 遗漏 | 1 天 | 🔴 跨提供商 session 砖化 |
| **#88838** | SQLite 会话迁移（P1, diamond lobster） | 22 天 | 🟠 核心架构变更 |
| **#88312** | Codex turn 停滞回归（P1） | 24 天 | 🟠 影响 ChatGPT Plus 用户 |
| **#86538** | Session 写锁超时（P1） | 29 天 | 🟠 影响多 agent 并发 |
| **#85743** | pendingFinalDelivery 无限重放 | 30 天 | 🟠 孤儿 session 资源泄漏 |
| **#89095** | 子 agent 超时未通知父 session | 22 天 | 🟠 影响 agent 编排 |
| **#85822** | Discord 48s 静默间隙 | 31 天 | 🟠 影响 Discord 用户体验 |
| **#8299** | 抑制 sub-agent announce | 141 天 | 🟡 长期功能请求 |
| **#43564** | ACP Session Skill 注入 | 103 天 | 🟡 架构复杂 |
| **#92516** | 容器化 channel 插件信任链 | 11 天 | 🟠 影响自托管部署 |

**维护者建议：** 优先处理 3 个 P0 问题（#91588、#95833、#95623），它们均可在 1-2 个发布周期内显著改善稳定性口碑。#88838 的 SQLite 迁移是中期架构里程碑，建议保持当前节奏推进。

---

*数据来源：github.com/openclaw/openclaw | 日报生成时间：2026-06-23*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**分析周期：2026-06-23 ｜ 分析师：OWL**

---

## 1. 生态全景

2026 年 6 月下旬，个人 AI 助手与自主智能体开源生态处于**密集迭代与架构演进并行**的高速发展期。15 个跟踪项目中，13 个在过去 24 小时内有显著活动，其中 OpenClaw、Hermes Agent、ZeroClaw 和 CoPaw 的日 PR 处理量均超过 40 条，显示出社区参与度空前高涨。当前生态的三大核心主线是：**稳定性回归修复**（几乎所有项目都在处理 session 状态、内存泄漏、崩溃一致性）、**跨平台/多渠道覆盖**（Telegram、Discord、Mattermost、DingTalk、PWA 等），以及**安全加固**（供应链安全、SSRF 防护、凭证隔离）。值得注意的是，新功能合并窗口正在收窄——多个项目明确表示需等稳定性达标后再推进功能，行业整体正从"功能竞赛"转向"质量巩固"阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度 | 阶段判断 |
|---|---|---|---|---|---|
| **OpenClaw** | 265 | 500 | v2026.6.10-beta.2 | 🟠 活跃但积压严重 | 密集迭代期，P0 积压 |
| **NanoBot** | 4 | 27 | 无（v0.2.2 准备中） | 🟢 良好 | 快速迭代，健康度高 |
| **Hermes Agent** | 50 | 50 | 无 | 🟠 良好，P1 积压 | 多平台扩展期 |
| **PicoClaw** | 2 | 44 | Nightly v0.3.0 | 🟢 良好 | 快速迭代，合并节奏快 |
| **NanoClaw** | 0 | 6 | 无 | 🟡 中等，PR 审查慢 | 稳定维护期 |
| **NullClaw** | 0 | 2 | 无 | 🟢 良好 | 低强度维护 |
| **IronClaw** | 18 | 23 | 无 | 🟠 活跃，回归风险 | Reborn 生产化攻坚 |
| **LobsterAI** | 5 | 14 | 无 | 🟡 功能活跃但积压 | 功能推进，债务累积 |
| **CoPaw** | 20 | 50 | 无 | 🟠 活跃，严重 Bug 积压 | 功能/稳定性并行 |
| **ZeroClaw** | 50 | 50 | 无 | 🟡 高活跃高积压 | v0.9.0 安全冲刺 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 无活动 | — |
| **Moltis** | 0 | 0 | 无 | ⚪ 无活动 | — |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 | — |

> **注：** TinyClaw、Moltis、ZeptoClaw 三项目连续无活动，可能处于维护暂停或社区沉寂状态，建议持续观察。

---

## 3. OpenClaw 在生态中的定位

### 社区规模优势

OpenClaw 是生态中**社区活跃度最高的项目**：日 Issues 更新 265 条、PR 更新 500 条，远超第二名 CoPaw（70 条总量）。其 Issue 生态的复杂度（P0/P1/P2 分层、diamond lobster/platinum hermit 标签体系）反映出企业级用户群体的深度参与。

### 技术路线差异

| 维度 | OpenClaw | 同类对比 |
|---|---|---|
| **存储架构** | SQLite → accessor seam 迁移中（#88838），探索 PostgreSQL | NanoBot/NanoClaw 均使用 SQLite；ZeroClaw 使用 Rust 原生存储 |
| **会话管理** | JSONL 文件 + 写锁机制，面临并发瓶颈 | Hermes 使用 state.db（SQLite + WAL）；IronClaw 使用 Postgres |
| **多提供商** | 最广泛的提供商支持矩阵，跨提供商故障转移是核心议题 | PicoClaw 聚焦 OpenAI-compatible 聚合；Hermes 聚焦 Anthropic 生态 |
| **Agent 编排** | 子 agent 通道 + cron 嵌套，架构复杂度高 | NanoBot 的 MCP 传输层更轻量；CoPaw 的 ACP 协议更标准化 |

### 核心优势与风险

**优势：** 社区规模带来的生态飞轮效应、最广泛的 IM 渠道覆盖、企业级多 Profile 支持。

**风险：** P0 积压（Gateway 内存泄漏 #91588 已 14 天、Subagent 锁未释放 #95833）可能侵蚀社区信任；500 条 PR 中仅 64 条合并/关闭（12.8% 合并率），审查带宽是明显瓶颈。

---

## 4. 共同关注的技术方向

### 方向一：会话状态稳定性（全生态共同痛点）

| 项目 | 具体问题 | 表现 |
|---|---|---|
| OpenClaw | Session 写锁超时、message-loss、SQLite 迁移 | 多 agent 并发阻塞 |
| Hermes Agent | state.db SIGTERM 损坏、会话恢复丢失 tool-loop | 数据完整性风险 |
| PicoClaw | JSONL 崩溃一致性、session index 热路径 | 重启后元数据漂移 |
| CoPaw | 子 Agent 上下文压缩导致进程冻结 | 数据丢失级别 |
| ZeroClaw | 默认 32k 上下文预算首轮超标 3.3x | 开箱即用体验差 |

**共性诉求：** 用户期望"升级不丢数据、重启不坏会话"，当前所有项目均在会话持久化和崩溃一致性上投入大量资源。

### 方向二：多渠道/跨平台覆盖

| 项目 | 渠道扩展动态 |
|---|---|
| NanoBot | Mattermost 集成（#4459）、PWA 移动端（#4458）、Telegram Rich Messages |
| Hermes Agent | Linux computer-use、Telegram 流式修复、Photon iMessage |
| PicoClaw | Android ADB 远程操作（#3157）、远程 Agent WebSocket 模式 |
| IronClaw | Telegram 频道（#5124 规划中） |
| NanoClaw | IMAP/SMTP Email（#1235）、Telegram（#2831 已关闭） |
| OpenClaw | DingTalk/Lark/WeCom/POPO（通过 LobsterAI 集成） |

**共性诉求：** 用户期望 AI 助手成为"统一消息入口"，而非绑定单一平台。企业 IM（Mattermost、DingTalk、Lark）和移动端（PWA、ADB）是新兴方向。

### 方向三：安全与供应链治理

| 项目 | 安全议题 |
|---|---|
| ZeroClaw | SSRF 防护（#8128）、插件原始 env 移除（#8137）、HMAC 回执（#8009）、供应链 RFC |
| OpenClaw | Provider 响应边界限制（16 MiB）、cross-signing 修复、tool_use.id sanitizer |
| Hermes Agent | 多 Profile token 泄漏（#51029）、Honcho OAuth 一键连接 |
| CoPaw | Keychain 主密钥隔离（#5028） |
| NanoBot | MCP enabledTools 权限泄漏修复 |

**共性诉求：** 随着 AI 智能体获得更多系统权限（文件读写、API 调用、消息发送），安全边界设计已成为社区核心议题，尤其关注凭证泄露和供应链攻击面。

### 方向四：提供商协议适配

| 项目 | 适配问题 |
|---|---|
| PicoClaw | Doubao Seed 工具调用以 XML 泄漏（#3153） |
| OpenClaw | tool_use.id 复合 ID 遗漏导致跨提供商 session 砖化（#95623） |
| Hermes Agent | Telegram 流式 4096 字符溢出无限循环（#48648） |
| CoPaw | 智谱供应商 API 路由/名称解析问题（#5330） |

**共性诉求：** OpenAI API 事实标准之外，各模型提供商的协议碎片化（Doubao XML、Telegram 字符限制、智谱路由差异）迫使每个项目重复建设适配层，生态级共享适配库的需求日益凸显。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特色 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手框架 | 技术用户、自托管社区 | Rust + 多渠道网关 + 子 Agent 编排 |
| **NanoBot** | 轻量级 AI 智能体框架 | 个人用户、快速部署 | Python + MCP 传输层 + WebUI |
| **Hermes Agent** | 桌面原生 AI 助手 | macOS/Linux 桌面用户 | TUI/Desktop 双模 + computer-use + Honcho 记忆 |
| **PicoClaw** | 嵌入式 AI 网关 | IoT/边缘场景 + 开发者 | MiMo 多模态 + Android ADB + 远程 Agent |
| **IronClaw** | 多租户 AI 工作流平台 | 企业团队 | Rust + Postgres + Reborn 运行时 + 权限模型 |
| **CoPaw** | 知识管理与智能体平台 | 企业/个人知识工作者 | 个人知识库 + 移动端 + 批量模型管理 |
| **ZeroClaw** | 安全优先的 AI 智能体 | 安全敏感用户 | Rust + WebAssembly-first + 供应链安全 |
| **LobsterAI** | AI 增强协作工作台 | 企业协作场景 | Cowork 计划模式 + OpenClaw 生态集成 |
| **NanoClaw** | 极简 AI 消息中枢 | 极客/开发者 | Email/Telegram + 审批工作流 |
| **NullClaw** | Matrix 原生 AI 助手 | Matrix 社区用户 | Matrix 协议专精 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：快速迭代期（日 PR > 30）

| 项目 | 特征 | 风险 |
|---|---|---|
| OpenClaw | 社区最大、议题最复杂 | P0 积压，审查带宽不足 |
| CoPaw | 移动端适配批量铺开 | 严重 Bug（进程冻结）未修复 |
| ZeroClaw | v0.9.0 安全冲刺 | 48 条 PR 待合并，S1 Bug 积压 |
| PicoClaw | 合并节奏最快，健康度最佳 | 体量较小，生态依赖有限 |

### ⚡ 第二梯队：稳健推进期（日 PR 10-30）

| 项目 | 特征 | 风险 |
|---|---|---|
| Hermes Agent | 多平台扩展（Linux computer-use） | P1 数据完整性问题积压 30+ 天 |
| NanoBot | Gateway 关闭稳定性系统性修复 | 积压少，但体量小 |
| IronClaw | Reborn 生产化（并发、权限、审批） | 回归 Bug（任务挂起）需紧急处理 |
| LobsterAI | Cowork 计划模式落地 | stale Issue/PR 积压 80+ 天 |

### 🛡️ 第三梯队：质量巩固期（日 PR < 10）

| 项目 | 特征 | 风险 |
|---|---|---|
| NanoClaw | 功能 PR 在途但审查慢 | #1235 开放 97 天未合并 |
| NullClaw | 低强度维护 | 功能单一，社区增长有限 |

### ⚪ 沉寂期

TinyClaw、Moltis、ZeptoClaw 连续无活动，需观察是否已停止维护。

---

## 7. 值得关注的趋势信号

### 趋势一：从"功能竞赛"到"稳定性优先"

多个项目（OpenClaw、CoPaw、IronClaw）社区中反复出现"先修 Bug 再合功能"的共识。用户反馈从"希望支持更多渠道"转向"希望现有渠道稳定运行"。**对开发者的启示：** 在 AI 智能体领域，可靠性已超越功能丰富度成为用户留存的第一要素。

### 趋势二：安全边界设计成为核心竞争力

ZeroClaw 的 SSRF 防护、OpenClaw 的 cross-signing 修复、Hermes 的 Profile 凭证隔离——三个项目从不同角度解决同一问题：**AI 智能体拥有越多权限，攻击面就越大。** 预计 2026 年下半年，"安全设计声明"将成为 AI 智能体项目的标配文档。

### 趋势三：提供商协议碎片化倒逼适配层标准化

Doubao XML 泄漏、Telegram 字符限制、智谱路由问题——每个项目都在重复踩坑。社区开始出现"共享提供商适配库"的呼声（OpenClaw #95623 讨论中有人提议提取独立 crate/cross-project 共享）。**对开发者的启示：** 与其各自维护脆弱的适配逻辑，不如推动跨项目协议适配层标准化。

### 趋势四：桌面端与移动端双线并行

Hermes Agent 的 computer-use（桌面操控）与 PicoClaw 的 Android ADB（移动端操控）形成互补，NanoBot 的 PWA 支持则代表 Web 端移动化方向。**趋势判断：** 2026-2027 年，AI 智能体将从"文本对话"扩展到"跨设备物理操控"，computer-use 和移动端集成将成为标配能力。

### 趋势五：企业 IM 集成成为必争之地

Mattermost（NanoBot）、DingTalk（LobsterAI/OpenClaw）、Lark/WeCom（LobsterAI）——传统 IM 工具的 AI 化改造正在加速。与 Telegram/Discord 等开发者社区 IM 不同，企业 IM 集成涉及更严格的权限模型、合规要求和部署复杂性，将成为下一个差异化竞争焦点。

---

*本报告基于 2026-06-23 各项目 GitHub 公开数据生成，分析视角供技术决策参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-23

---

## 1. 今日速览

NanoBot 今日活跃度**极高**，过去 24 小时内共处理 **27 个 PR**（15 个待合并、12 个已合并/关闭）和 **4 个 Issue**（2 开 2 闭），无新版本发布。项目当前处于**密集迭代期**，核心贡献者 `Re-bin` 单日合并了 7 个 PR，集中修复了 gateway 关闭稳定性、WebUI 渲染竞态和 MCP 传输层等多项关键问题。社区侧，Mattermost 频道集成、PWA 移动端支持、子 Agent 模型预设等新功能 PR 正在推进，显示出项目在**多平台覆盖**和**开发者体验**两个方向上的持续扩张。整体项目健康度良好，合并节奏快，积压 PR 数量可控。

---

## 2. 版本发布

**无新版本发布。**

最近一次版本准备 PR（`v0.2.2`，#4445）已于昨日合并，但尚未创建正式 Release。

---

## 3. 项目进展

今日合并/关闭的 12 个 PR 可按主题归纳为以下几个方向：

### 🔧 Gateway 关闭稳定性（重大修复，3 个 PR）

| PR | 说明 |
|---|---|
| [#4454](https://github.com/HKUDS/nanobot/pull/4454) | 前台 gateway 的 `SIGINT`/`SIGTERM` 信号处理重构，不再依赖 `asyncio.run()` 的自动清理 |
| [#4456](https://github.com/HKUDS/nanobot/pull/4456) | 修复 `WebSocketChannel.stop()` 在 Python 3.11+ 上因 `CancelledError` 未被捕获导致的关闭失败 |
| [#4450](https://github.com/HKUDS/nanobot/pull/4450) | MCP stdio 传输层改为由 `AgentLoop.run()` 任务自行关闭，避免 AnyIO cancel-scope 跨任务 shutdown 错误 |

**意义**：这三个 PR 构成了一组完整的 gateway 关闭链路修复，解决了长期存在的"关不掉"和"关时崩"问题，是 v0.2.2 的核心稳定性变更。

### 🖥️ WebUI 渲染竞态修复（3 个 PR）

| PR | 说明 |
|---|---|
| [#4455](https://github.com/HKUDS/nanobot/pull/4455) | 修复 fork 线程中已渲染的 assistant 回复在下一次消息触发历史刷新后消失的问题 |
| [#4453](https://github.com/HKUDS/nanobot/pull/4453) | 修复发送消息后自动跟随流式输出的逻辑，区分程序化滚动与用户手动滚动 |
| [#4451](https://github.com/HKUDS/nanobot/pull/4451) | 稳定发送消息后的布局锚定，防止短消息回合的 flex 对齐异常 |

**意义**：WebUI 的流式渲染和 fork 交互体验得到系统性修复，用户可见的 UI 闪烁和消息丢失问题大幅减少。

### ⚙️ 配置与基础设施（2 个 PR）

| PR | 说明 |
|---|---|
| [#4448](https://github.com/HKUDS/nanobot/pull/4448) | 默认上下文窗口从 65,536 tokens 提升至 **200,000 tokens**，并在 WebUI/API 中添加 200K 选项 |
| [#4445](https://github.com/HKUDS/nanobot/pull/4445) | 版本号升至 v0.2.2，清理 ruff 导入顺序阻塞项，更新 README 新闻栏 |

**意义**：200K 默认上下文反映了对长上下文模型（如 Claude 3.5、Gemini 1.5 Pro）的适配趋势，降低了用户手动配置的门槛。

### 📋 其他关闭

- [#4452](https://github.com/HKUDS/nanobot/pull/4452)（enforce MCP enabledTools for resources and prompts）— 已合并，与 [#4436](https://github.com/HKUDS/nanobot/pull/4436) 共同解决了 MCP 权限泄漏问题。

---

## 4. 社区热点

### 🔥 最活跃 Issue

**[#4413](https://github.com/HKUDS/nanobot/issues/4413) — Telegram Bot API 10.1 Rich Messages 支持**
- 状态：OPEN | 评论：2 | 创建于 2026-06-19
- 诉求：Telegram 新版 API 引入了富文本消息格式（见 [官方文档](https://core.telegram.org/bots/features#rich-messages)），用户希望 nanobot 在发送消息时自动将标准 Markdown 转换为 Telegram 原生格式。
- 分析：这是一个**平台适配性需求**。Telegram 的富文本格式（如 spoiler、blockquote、custom emoji）无法通过简单的 Markdown 转 HTML 实现，需要专门的转换层。目前无对应 PR，但有实现空间。

**[#4457](https://github.com/HKUDS/nanobot/issues/4457) — PWA 支持移动端主屏幕安装**
- 状态：OPEN | 评论：0 | 创建于 2026-06-22
- 诉求：为 WebUI 添加 PWA 支持，允许用户将 nanobot 安装到移动设备主屏幕，获得类原生应用体验。
- 分析：已有配套 PR [#4458](https://github.com/HKUDS/nanobot/pull/4458) 同日提交，包含 manifest.json、service worker 和主题配置，实现完整，预计将较快合并。

### 🔥 最活跃 PR

**[#4459](https://github.com/HKUDS/nanobot/pull/4459) — 新增 Mattermost 频道集成**
- 状态：OPEN | 创建于 2026-06-22
- 内容：通过 WebSocket + REST API 实现 Mattermost 实时消息收发，支持流式回复（长消息逐步编辑）。
- 分析：这是继 Slack、Telegram、DingTalk 之后又一个企业 IM 平台的集成，表明 nanobot 正在向**企业协作工具全覆盖**方向推进。

**[#4397](https://github.com/HKUDS/nanobot/pull/4397) — 工具链执行期间用户消息中断提示**
- 状态：OPEN | 创建于 2026-06-18
- 内容：当 LLM 正在执行工具链时收到用户新消息，插入独立的 `user` 角色 hint 消息，提醒 LLM 优先响应用户。
- 分析：这是一个**交互体验优化**，解决了多轮工具调用场景下用户"插话"被忽略的问题。方案简洁，但需要关注 hint 注入对 LLM 行为的实际影响。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（已有 Fix PR 并合并）

| 问题 | Fix PR | 状态 |
|---|---|---|
| Gateway 前台关闭时 `CancelledError` 未捕获导致崩溃 | [#4454](https://github.com/HKUDS/nanobot/pull/4454) + [#4456](https://github.com/HKUDS/nanobot/pull/4456) | ✅ 已合并 |
| MCP stdio 传输层跨任务关闭导致 `RuntimeError: cancel scope` | [#4450](https://github.com/HKUDS/nanobot/pull/4450) | ✅ 已合并 |
| MCP 服务器 `enabledTools` 白名单对 resources/prompts 未生效，权限泄漏 | [#4436](https://github.com/HKUDS/nanobot/pull/4436) + [#4452](https://github.com/HKUDS/nanobot/pull/4452) | ✅ 已合并 |

### 🟡 中等（已有 Fix PR 待合并）

| 问题 | Fix PR | 状态 |
|---|---|---|
| 流式响应中重复 `tool_use` ID 导致会话永久损坏（HTTP 400） | [#4443](https://github.com/HKUDS/nanobot/pull/4443) | ⏳ 待合并 |
| MCP `streamable_http` 生成器在重连失败时未正确关闭 | [#4441](https://github.com/HKUDS/nanobot/pull/4441) | ⏳ 待合并 |
| Pairing store 中 sender ID 类型不一致导致静默拒绝配对 | [#4433](https://github.com/HKUDS/nanobot/pull/4433) | ⏳ 待合并 |

### 🟢 低（功能优化类）

| 问题 | Fix PR | 状态 |
|---|---|---|
| WebUI fork 回复在历史刷新后消失 | [#4455](https://github.com/HKUDS/nanobot/pull/4455) | ✅ 已合并 |
| WebUI 发送后流式输出锚定异常 | [#4453](https://github.com/HKUDS/nanobot/pull/4453) | ✅ 已合并 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 对应 PR | 纳入可能性 |
|---|---|---|---|
| **PWA 移动端支持** | [#4457](https://github.com/HKUDS/nanobot/issues/4457) | [#4458](https://github.com/HKUDS/nanobot/pull/4458) | ⭐⭐⭐ 高 — PR 已就绪，实现完整 |
| **Mattermost 频道集成** | 社区贡献 | [#4459](https://github.com/HKUDS/nanobot/pull/4459) | ⭐⭐⭐ 高 — 功能完整，代码结构清晰 |
| **Telegram Rich Messages** | [#4413](https://github.com/HKUDS/nanobot/issues/4413) | 无 | ⭐⭐ 中 — 需等待贡献者 |
| **统一守护进程网关语义层** | [#1461](https://github.com/HKUDS/nanobot/issues/1461) | 无 | ⭐⭐ 中 — 架构提案，讨论中 |
| **子 Agent 可配置模型预设** | 社区贡献 | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | ⭐⭐ 中 — PR 已存在但较旧，需 review |
| **只读 search_history 工具** | 社区贡献 | [#4439](https://github.com/HKUDS/nanobot/pull/4439) | ⭐⭐ 中 — 功能明确，待 review |
| **DingTalk 私聊开关 + 群聊 @提及** | 社区贡献 | [#4446](https://github.com/HKUDS/nanobot/pull/4446) | ⭐⭐ 中 — 功能合理，待 review |
| **Node 24 升级** | 社区贡献 | [#4460](https://github.com/HKUDS/nanobot/pull/4460) | ⭐ 低 — 基础设施升级，需充分测试 |

**路线图判断**：下一版本（v0.2.2 或 v0.3.0）极可能包含 PWA 支持、Mattermost 集成和 Telegram Rich Messages 适配。子 Agent 模型预设和 search_history 工具属于 Agent 能力增强，可能在 v0.3.0 中集中发布。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Gateway 关闭不可靠**：多个 Issue 和 PR 反映出 gateway 在 SIGINT/SIGTERM 下无法干净关闭，WebSocket 和 MCP 传输层存在资源泄漏。今日已系统性修复。
2. **WebUI 交互体验差**：fork 回复消失、流式输出不跟随、布局跳动等问题集中爆发，表明 WebUI 的状态管理在并发场景下存在设计缺陷。今日合并的 3 个 PR 是针对性修复。
3. **MCP 权限控制不完整**：`enabledTools` 白名单仅对 tools 生效，resources 和 prompts 被无条件注册，存在安全隐患。已修复。
4. **默认上下文窗口过小**：65K 默认值对现代长上下文模型不够用，用户需要手动调整。已提升至 200K。

### 😊 满意点

1. **响应速度快**：`Re-bin` 在 24 小时内合并 7 个 PR，社区贡献者的问题能得到及时处理。
2. **多平台支持持续扩展**：Mattermost、DingTalk 等企业 IM 的集成表明项目在平台覆盖上积极进取。
3. **PWA 支持呼声高**：移动端安装需求反映了用户对 nanobot 作为"个人 AI 助手"的定位认同。

### 📋 使用场景

- **企业协作**：Mattermost、DingTalk 集成需求来自企业用户，需要在团队 IM 中部署 AI 助手。
- **移动端个人助手**：PWA 需求表明用户希望将 nanobot 作为手机上的常驻 AI 工具。
- **长上下文任务**：200K 上下文窗口调整反映了用户对复杂多轮对话和长文档处理的需求。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 项目 | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| [#1461](https://github.com/HKUDS/nanobot/issues/1461) — 统一守护进程网关语义层 | 2026-03-03 | OPEN，4 条评论，无 PR | 架构提案，已搁置 3.5 个月。建议明确是否纳入路线图或关闭。 |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) — 子 Agent 可配置模型预设 | 2026-06-11 | OPEN，无评论 | 功能 PR，已存在 12 天未 review。建议安排 review 或请求作者更新。 |
| [#4397](https://github.com/HKUDS/nanobot/pull/4397) — 工具链中断提示 | 2026-06-18 | OPEN，无评论 | 交互优化 PR，已 5 天未 review。方案简洁，建议优先处理。 |
| [#4439](https://github.com/HKUDS/nanobot/pull/4397) — search_history 工具 | 2026-06-21 | OPEN，无评论 | 新功能 PR，2 天未 review。功能明确，建议尽快反馈。 |

---

> **日报生成时间**：2026-06-23 | **数据来源**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **分析周期**：过去 24 小时

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-23

---

## 1. 今日速览

Hermes Agent 今日活跃度极高，Issues 与 PR 各录得 **50 条更新**，社区参与度持续旺盛。Issue 侧新开/活跃 41 条、关闭 9 条，净积压仍在增长；PR 侧待合并 34 条、已合并/关闭 16 条，合并节奏尚可但积压压力明显。**无新版本发布**，当前主线处于 v0.17.0 之后的密集迭代期。今日焦点集中在 **Telegram 网关稳定性**（流式消息、话题绑定、token 泄漏）、**Windows 平台支持**（computer-use、路径修复、bootstrap 崩溃）以及 **多 Profile 凭证隔离**三大方向，反映出项目正从 macOS 优先走向多平台成熟化的关键阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的重要 PR 共 16 条，以下为关键进展：

| PR | 状态 | 说明 |
|---|---|---|
| **[#51111](https://github.com/NousResearch/hermes-agent/pull/51111)** | ✅ 已合并 | TUI 消息事件处理改进，提升桌面端消息渲染一致性 |
| **[#51103](https://github.com/NousResearch/hermes-agent/pull/51103)** | ✅ 已合并 | Desktop 工具预览改为手动触发（状态栈链接），避免自动打开干扰用户 |
| **[#51040](https://github.com/NousResearch/hermes-agent/pull/51104)** | ✅ 已合并 | `/resume-last`（`/rl`）斜杠命令提案已关闭（实现合并），一步恢复最近会话 |
| **[#50469](https://github.com/NousResearch/hermes-agent/pull/50469)** | ✅ 已合并 | 修复容器内 git/pip 安装方式下 `hermes update` 被错误拦截的问题 |
| **[#44335](https://github.com/NousResearch/hermes-agent/pull/44335)** | ✅ 已合并 | Honcho OAuth 一键连接（Desktop + CLI），支持 token 刷新，告别手动复制 API Key |
| **[#48180](https://github.com/NousResearch/hermes-agent/pull/48180)** | ✅ 已合并 | **computer-use 新增 Linux 后端**，通过 linux-computer-use MCP driver 实现，自动平台检测 |
| **[#50952](https://github.com/NousResearch/hermes-agent/pull/50952)** | ✅ 已合并 | 修复自定义端点模型上下文窗口回退逻辑（Claude Opus 4 等 1M 上下文模型不再被误判为 200k） |
| **[#51104](https://github.com/NousResearch/hermes-agent/pull/51104)** | ✅ 已合并 | 为 SearXNG + Firecrawl 拆分后端路由添加回归测试覆盖 |

**整体判断：** 项目在平台扩展（Linux computer-use）、用户体验（Honcho OAuth、/resume-last）、容器化部署三个方向稳步推进。Linux 后端的合并是标志性节点，意味着 computer-use 正式跨出 macOS 单平台时代。

---

## 4. 社区热点

### 🔥 Issue #48648 — Telegram 流式消息 4096 字符溢出导致无限嵌套回复循环
- **链接：** [NousResearch/hermes-agent#48648](https://github.com/NousResearch/hermes-agent/issues/48648)
- **数据：** 4 条评论，👍 1，P2 优先级
- **分析：** 这是今日评论数最多的 Issue。当 Telegram 流式响应超过 4096 字符限制时，网关进入无限嵌套回复循环。根因在于流式分段逻辑未正确处理字符边界截断。此 Bug 直接影响所有使用 Telegram 长回复的用户，属于**高频高影响**问题，社区期待快速修复。

### 🔥 Issue #30636 — 高负载下 SIGTERM 导致 state.db 损坏
- **链接：** [NousResearch/hermes-agent#30636](https://github.com/NousResearch/hermes-agent/issues/30636)
- **数据：** 4 条评论，P1 优先级，自 2026-05-22 起持续活跃
- **分析：** macOS launchd 在高负载关机时 SIGTERM 导致 SQLite 数据库损坏，48 小时内复现 3 次。这是**数据完整性**问题，P1 优先级合理。Issue 已存在超过一个月，社区对修复进展缓慢有所不满。

### 🔥 Issue #50755 — Photon iMessage 密钥轮换后出站消息认证失败
- **链接：** [NousResearch/hermes-agent#50755](https://github.com/NousResearch/hermes-agent/issues/50755)
- **数据：** 3 条评论，P3
- **分析：** 运行 `hermes photon setup` 二次轮换项目密钥后，入站正常但出站报 `AuthenticationError`。已有配套 PR [#51075](https://github.com/NousResearch/hermes-agent/pull/51075) 修复中，升级 spectrum-ts 并加固 DM space 解析逻辑。

### 🔥 Issue #46515 — Telegram 富文本最终消息回退到 MarkdownV2
- **链接：** [NousResearch/hermes-agent#46515](https://github.com/NousResearch/hermes-agent/issues/46515)
- **数据：** 👍 3（今日 Issues 中最高），P2
- **分析：** 流式预览阶段富文本渲染正常，但最终持久化消息却降级为 MarkdownV2。3 个 👍 表明此问题影响面较广，用户对 Telegram 富文本体验有明确期待。

### 🔥 PR #49037 — 一等公民 Project 实体 + 后端权威会话树
- **链接：** [NousResearch/hermes-agent#49037](https://github.com/NousResearch/hermes-agent/pull/49037)
- **分析：** 这是今日最重量级的开放 PR，旨在用显式命名的 Project 实体取代隐式 git-branch/worktree 工作区模型，并将会话分组关系的权威来源从前端推断移至后端。涉及 Desktop 侧边栏架构重构，影响深远。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 数据丢失/服务中断

| Issue | 描述 | Fix PR |
|---|---|---|
| [#30636](https://github.com/NousResearch/hermes-agent/issues/30636) | state.db 高负载 SIGTERM 损坏 | ❌ 无 |
| [#50090](https://github.com/NousResearch/hermes-agent/issues/50090) ✅已关闭 | Windows bootstrap-installer 杀 Gateway 后未重启，Telegram bot 静默死亡 | ✅ 已关闭 |

### 🟠 P2 — 功能异常/安全

| Issue | 描述 | Fix PR |
|---|---|---|
| [#48648](https://github.com/NousResearch/hermes-agent/issues/48648) | Telegram 流式消息无限循环 | ❌ 无 |
| [#50199](https://github.com/NousResearch/hermes-agent/issues/50199) | delegation.base_url 运行时忽略，跨主机委托失败 | ❌ 无 |
| [#51029](https://github.com/NousResearch/hermes-agent/issues/51029) | 多 Profile 下平台 token 泄漏（secondary 继承 default token） | ✅ [#51115](https://github.com/NousResearch/hermes-agent/pull/51115) |
| [#51030](https://github.com/NousResearch/hermes-agent/issues/51030) | 多 Profile 同 token 碰撞检测对 Telegram 失效 | ❌ 无 |
| [#51089](https://github.com/NousResearch/hermes-agent/issues/51089) | 会话恢复丢失进行中 tool-loop 或压缩状态 | ❌ 无 |
| [#50713](https://github.com/NousResearch/hermes-agent/issues/50713) | 跨部署重新打开会话后聊天文本缺失 | ❌ 无 |
| [#50991](https://github.com/NousResearch/hermes-agent/issues/50991) | Agent 缓存淘汰后 Telegram typing 指示器永久残留 | ❌ 无 |
| [#51009](https://github.com/NousResearch/hermes-agent/issues/51009) | `/whoami` 等斜杠命令在 Desktop/TUI 返回 unknown command | ❌ 无 |
| [#38053](https://github.com/NousResearch/hermes-agent/issues/38053) | macOS launchd 多 Profile 更新后未重启全部 gateway | ❌ 无 |

### 🟡 P3 — 体验/兼容性问题

| Issue | 描述 | Fix PR |
|---|---|---|
| [#50755](https://github.com/NousResearch/hermes-agent/issues/50755) | Photon iMessage 密钥轮换后出站失败 | ✅ [#51075](https://github.com/NousResearch/hermes-agent/pull/51075) |
| [#51099](https://github.com/NousResearch/hermes-agent/issues/51099) | Honcho memory provider 在依赖缺失时仍激活 | ❌ 无 |
| [#51053](https://github.com/NousResearch/hermes-agent/issues/51053) | Codex 服务端图像上下文丢失 | ❌ 无 |
| [#44183](https://github.com/NousResearch/hermes-agent/issues/44183) | Mac 睡眠/唤醒后会话丢失（20s 孤儿回收过短） | ❌ 无 |
| [#51033](https://github.com/NousResearch/hermes-agent/issues/51033) ✅已关闭 | Linux list_windows 返回 0 | ✅ 已关闭 |

**稳定性评估：** P1 级 Issue #30636 已积压超 30 天无修复，存在数据丢失风险，建议优先处理。多 Profile token 泄漏（#51029）已有 PR 跟进是好信号，但同 token 碰撞检测（#51030）仍无修复。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR | 信号强度 |
|---|---|---|---|
| **computer-use Windows 后端** | [#41044](https://github.com/NousResearch/hermes-agent/issues/41044) ✅已关闭 | [#48180](https://github.com/NousResearch/hermes-agent/pull/48180) ✅已合并 + [#51087](https://github.com/NousResearch/hermes-agent/pull/51087) 🔄开放中 | ✅ 已交付 + 增强中 |
| **项目本地 skills 作用域** | [#51114](https://github.com/NousResearch/hermes-agent/issues/51114) | ❌ 无 | 🟡 新提案，今日创建 |
| **Telegram BotCommand i18n** | [#51046](https://github.com/NousResearch/hermes-agent/issues/51046) | ❌ 无 | 🟡 已有 i18n 基础设施，实现成本低 |
| **项目 .mcp.json 支持** | [#51069](https://github.com/NousResearch/hermes-agent/issues/51069) | ❌ 无 | 🟡 与 #51114 理念一致，均指向项目级配置 |
| **Desktop 远程创建工作区文件夹** | [#50885](https://github.com/NousResearch/hermes-agent/issues/50885) | ❌ 无 | 🟢 体验增强 |
| **OIDC/WebAuthn/Passkey 登录** | [#42448](https://github.com/NousResearch/hermes-agent/issues/42448) | ❌ 无 | 🟡 安全认证增强 |
| **Gemma 4 推理 token 归一化** | — | [#43950](https://github.com/NousResearch/hermes-agent/pull/43950) 🔄开放中 | 🟡 本地模型兼容性 |
| **会话 channel 上下文文件快照** | — | [#50680](https://github.com/NousResearch/hermes-agent/pull/50680) 🔄开放中 | 🟢 Discord 体验增强 |
| **一等公民 Project 实体** | — | [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) 🔄开放中 | 🔴 架构级变更 |

**路线图判断：** 从 PR 活跃度看，**Windows 平台支持**（computer-use + 路径修复 + bootstrap 稳定性）和**多 Profile 凭证隔离**是下一版本的核心主题。项目级配置（skills、MCP）的需求开始涌现，可能催生统一的 `.hermes/` 项目本地配置规范。

---

## 7. 用户反馈摘要

**真实痛点：**

1. **Telegram 体验割裂** — 多个 Issue（#48648 流式溢出、#46515 富文本降级、#45323 表格变列表、#50991 typing 残留）共同指向 Telegram 网关的消息渲染管线不够健壮。用户期望 Telegram 作为一等平台获得与 Desktop 同等的富文本体验。

2. **Windows 用户存在感增强** — #50090（Gateway 静默死亡）、#51033（list_windows 返回 0）、#51113（路径损坏）以及 computer-use Windows 后端的持续推动，表明 Windows 用户群体正在扩大，但平台成熟度仍落后于 macOS。

3. **多 Profile/多部署场景复杂** — #51029（token 泄漏）、#51030（碰撞检测失效）、#50713（跨部署会话文本丢失）、#50199（委托 base_url 忽略）反映出多 Profile 和跨机器部署场景下的配置隔离和状态一致性是高级用户的核心痛点。

4. **记忆系统可靠性** — #48552（cron tilde 路径解析）、#47363（/memory approve 失败）、#46783（Desktop 审批失败）、#51099（Honcho 依赖缺失静默失败）表明记忆子系统的错误处理和用户反馈不够友好。

5. **正面信号** — Honcho OAuth 一键连接（#44335 已合并）获得社区好评，用户认可降低配置门槛的方向。`/resume-last` 命令的快速合并也显示团队对 UX 改进的响应速度。

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR 需维护者关注：

| 项目 | 创建日期 | 状态 | 风险 |
|---|---|---|---|
| [#30636](https://github.com/NousResearch/hermes-agent/issues/30636) — state.db SIGTERM 损坏 | 2026-05-22 | 开放，P1，>30天 | 🔴 数据丢失 |
| [#38053](https://github.com/NousResearch/hermes-agent/issues/38053) — macOS launchd 多 Profile 更新 | 2026-06-03 | 开放，P2，>20天 | 🟠 服务中断 |
| [#42448](https://github.com/NousResearch/hermes-agent/issues/42448) — OIDC/WebAuthn 登录 | 2026-06-08 | 开放，P3，>15天 | 🟡 安全认证 |
| [#48648](https://github.com/NousResearch/hermes-agent/issues/48648) — Telegram 流式无限循环 | 2026-06-18 | 开放，P2，无 PR | 🟠 高频影响 |
| [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) — Project 实体重构 | 2026-06-19 | 开放 PR，架构级 | 🟡 需及时 review 避免 drift |
| [#43950](https://github.com/NousResearch/hermes-agent/pull/43950) — Gemma 4 推理 token | 2026-06-11 | 开放 PR，>12天 | 🟡 本地模型用户 |

**建议：** #30636 作为 P1 数据完整性问题已积压超一个月，建议本周内给出修复方案或至少明确时间线。#49037 作为架构级 PR 需要核心维护者尽早 review，避免长期开放导致合并冲突和贡献者流失。

---

*数据来源：GitHub API | 统计窗口：2026-06-22 至 2026-06-23 | 生成时间：2026-06-23*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-23

---

## 1. 今日速览

过去24小时 PicoClaw 项目活跃度**极高**：共处理 44 条 PR（34 条已合并/关闭，10 条待合并），新开/活跃 Issue 2 条，并发布了一个新的 Nightly Build。项目处于**快速迭代期**，大量依赖升级、稳定性修复和功能合入集中在同一窗口完成。Nightly 版本已推进到 `v0.3.0-nightly.20260622`，表明 v0.3.0 正式版的开发已进入密集集成阶段。整体项目健康度良好，维护者对积压 PR 的清理节奏明显加快。

---

## 2. 版本发布

### 🌙 Nightly Build — `v0.3.0-nightly.20260622.287853ab`

- **链接**: [Nightly Build](https://github.com/sipeed/picoclaw/releases)
- **Full Changelog**: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

**说明**: 这是基于 `main` 分支的自动构建版本，**不稳定，仅供测试**。Nightly 版本持续集成当前主干的最新变更，涵盖本报告所述的大部分 PR 合入内容。建议开发者在非生产环境中验证功能后再跟进。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日共有 **34 条 PR 关闭**（含合并与 stale 关闭），以下按重要性排序：

### 🔧 核心稳定性修复

| # | PR | 作者 | 内容摘要 |
|---|-----|------|----------|
| 3053 | [CLOSED] fix(evolution): add ok check for LoadOrStore type assertion in lockStoreFile | chengzhichao-xydt | 修复 `sync.Map.LoadOrStore` 类型断言缺少 `ok` check 导致的 panic [→](https://github.com/sipeed/picoclaw/pull/3053) |
| 3091 | [CLOSED] fix(openai_compat): add ok check for native_search type assertion | chengzhichao-xydt | 修复 `native_search` 类型断言静默失败导致原生搜索被意外关闭的问题 [→](https://github.com/sipeed/picoclaw/pull/3091) |
| 2906 | [CLOSED] Fix message bus backpressure handling and health visibility | SiYue-ZO | 将消息总线从 unbounded blocking 改为 bounded waiting，增加 per-stream 丢弃统计和健康检查可见性 [→](https://github.com/sipeed/picoclaw/pull/2906) |
| 2907 | [CLOSED] Fix JSONL store metadata drift after crash | SiYue-ZO | 修复 JSONL 内存存储在崩溃后 `.jsonl` 文件与 `.meta.json` 元数据不一致的崩溃一致性问题 [→](https://github.com/sipeed/picoclaw/pull/2907) |
| 2913 | [CLOSED] Fix JSONL session index hot-path cloning and TTL refresh semantics | SiYue-ZO | 消除 `ResolveSessionKey` 热路径上每次缓存命中时的全量 in-memory index 克隆开销 [→](https://github.com/sipeed/picoclaw/pull/2913) |

### 🔌 提供商与集成

| # | PR | 作者 | 内容摘要 |
|---|-----|------|----------|
| 2915 | [CLOSED] feat(providers): add CommonModels for MiMo provider | SiYue-ZO | 为 MiMo 提供商添加 `mimo-v2.5`（多模态）和 `mimo-v2.5-pro`（纯文本）的 `CommonModels` 标记，WebUI 可据此正确推荐支持视觉的模型 [→](https://github.com/sipeed/picoclaw/pull/2915) |
| 3155 | [CLOSED] feat(spawn): add direct_reply parameter with SkipInboundTurn support | v2up-32mb | 修复 spawn async callback 中 `ForUser` 投递和 `PublishInbound` 同时触发导致消息重复的问题 [→](https://github.com/sipeed/picoclaw/pull/3155) |

### 📦 依赖升级（前端）

| # | PR | 作者 | 内容摘要 |
|---|-----|------|----------|
| 3101 | [CLOSED] build(deps-dev): bump vite 8.0.13 → 8.0.16 | dependabot | Vite 安全更新 [→](https://github.com/sipeed/picoclaw/pull/3101) |
| 3105 | [CLOSED] build(deps-dev): bump eslint 10.2.1 → 10.4.1 | dependabot | ESLint 错误修复更新 [→](https://github.com/sipeed/picoclaw/pull/3105) |

### 📝 其他

| # | PR | 作者 | 内容摘要 |
|---|-----|------|----------|
| 3152 | [CLOSED] add installation instructions to picoclaw skills search | phoeagon | 在 `picoclaw skills search` 输出中增加安装说明，提升技能发现可用性 [→](https://github.com/sipeed/picoclaw/pull/3152) |

**整体推进评估**: 今日最大的架构进步来自 SiYue-ZO 的四项合入——消息总线背压控制、JSONL 崩溃一致性修复、session index 热路径优化和 MiMo 多模态支持——这些直接提升了 PicoClaw 在生产环境下的可靠性和性能基准。chengzhichao-xydt 的一系列 `ok check` 修复虽然单个体量小，但系统性消除了多处潜在 panic 点。v2up-32mb 的 `SkipInboundTurn` 机制为 spawn 子系统建立了清晰的消息路由语义。

---

## 4. 社区热点

### 🐛 [Issue #3153 ] Volcengine Doubao Seed 工具调用泄漏为原始 XML 文本
- **链接**: [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)
- **作者**: ms8great | **创建**: 2026-06-22 | **更新**: 2026-06-22
- **严重**: 报告中未提供 👍 数据（0）
- **分析**: 这是今日新开的 Bug 报告，描述 `doubao-seed-2.0-pro` 在调用工具时偶尔将工具调用以 `<seed:tool_call>` XML 格式嵌入 `message.content` 文本中返回，而不是通过标准的 `tool_calls` 字段传递。该问题的根本原因是 Doubao Seed 模型对工具调用协议的非标准实现。**已有关联修复 PR #3154**（见下文 Bug 章节），响应速度极快，显示维护者对提供商兼容性问题的关注度很高。

### 💡 [Issue #3093 ] 希望支持 SimpleX / Wire / Tox 网关
- **链接**: [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
- **作者**: Damian-o2 | **创建**: 2026-06-10 | **更新**: 2026-06-22
- **反应**: 👍 1 | **评论**: 3 条
- **分析**: 用户对 PicoClaw 作为 AI 智能体网关的通信渠道扩展提出需求，希望增加 SimpleX（注重隐私的去中心化协议）、Wire 和 Tox 三个以隐私保护为核心的即时通讯平台的集成。这反映出 PicoClaw 的用户群体中有相当一部分关注数据主权和端到端加密通信。该 Issue 已开放近两周，尚未有 PR 跟进，可能需要更多社区讨论来确定优先级。

---

## 5. Bug 与稳定性

### 🔴 P0 — 已修复 / 有 Fix PR

| # | 严重程度 | 问题 | Fix PR | 状态 |
|---|---------|------|--------|------|
| #3153 | **高** | Doubao Seed 工具调用以 `<seed:tool_call>` XML 泄漏到用户输出 | [#3154](https://github.com/sipeed/picoclaw/pull/3154) | 🔄 修复 PR 已开待审 |

**PR #3154 详情** (作者: hanZeng-08): 在 `openai_compat` provider 中增加对 Doubao Seed 模型嵌入在 `message.content` 中的 `<seed:tool_call>` XML 的恢复/解析逻辑。该修复特别关注长对话或多工具调用场景下的协议兼容性问题。[[→](https://github.com/sipeed/picoclaw/pull/3154)]

### 🟡 已知但尚未关闭的稳定性相关 PR

| # | 作者 | 内容 | 等待合入原因 |
|---|------|------|-------------|
| [#3131](https://github.com/sipeed/picoclaw/pull/3131) | chengzhichao-xydt | `pkg/tools/registry.go` 中三个工具 schema 类型断言增加 `ok` check | 标记 stale，可能需要 review 后合入 |
| [#3128](https://github.com/sipeed/picoclaw/pull/3128) | chengzhichao-xydt | `web.go` 中四个搜索 provider 的 `resp.Body.Close()` 错误显式忽略 | 标记 stale，低风险清理 |

> **评估**: 当前不存在无修复方案的已知 Panic 或数据丢失路径。今日合入的 PR 已系统性地消除了此前积压的多处 `ok check` 缺失问题。

---

## 6. 功能请求与路线图信号

### 活跃且可能有进展的功能

| # | 功能 | PR/已有实现 | 判断 |
|---|------|-----------|------|
| **远程 Agent 模式** | [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) 为 `picoclaw agent` 添加 `--remote ws://` WebSocket 远程模式 | jp39 | 🔄 开发中，标记 stale 但代码已成型 |
| **Android ADB 远程操作** | [PR #3157](https://github.com/sipeed/picoclaw/pull/3157) 新增 Android ADB 工具（设备列表、截图、UI 层级、点击/滑动/输入等） | danmobot | 🆕 今日新开，实验性功能，默认禁用 |
| **Per-turn Token 用量** | [PR #3156](https://github.com/sipeed/picoclaw/pull/3156) 在最终 assistant message 上输出每轮 LLM token 用量（分 input/output） | loafoe | 🆕 今日新开 |
| **隐私通讯网关** | [Issue #3093](https://https://github.com/sipeed/picoclaw/issues/3093) 支持 SimpleX / Wire / Tox | 无 PR | ⏳ 需求明确但无实现 |

**路线图推断**: v0.3.0 的 Nightly 持续迭代表明该版本可能重点聚焦于以下方向：
1. **提供商兼容性加固**（Doubao Seed 修复合入、MiMo 多模态标记）
2. **运行时可靠性**（消息总线背压、崩溃一致性）
3. **远程/跨设备操作能力**（WebSocket 远程 Agent、Android ADB）
4. **可观测性**（token 用量追踪、健康检查增强）

---

## 7. 用户反馈摘要

### 痛点

1. **AI 提供商协议碎片化**: Doubao Seed 的工具调用通过非标准 XML 嵌入内容字段返回而非 `tool_calls`，迫使用户收到乱码 XML 而非执行实际工具。这反映出 PicoClaw 作为 OpenAI-compatible 聚合层面临的**模型提供商协议适配压力**持续增大。([Issue #3153](https://github.com/sipeed/picoclaw/issues/3153))

2. **隐私通讯渠道缺口**: 用户希望 PicoClaw 不仅仅停留在 Telegram/Discord 等主流平台，而是支持 SimpleX、Wire、Tox 等以隐私为核心的通信协议。这暗示部分用户将 PicoClaw 定位为**个人 AI 隐私网关**而非简单的 chatbot 框架。([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093))

3. **技能发现与安装体验**: PR #3152 合入"picoclaw skills search 输出安装指令"的维护者主动改进，说明此前用户在发现技能后不知道如何安装是一个**持续的摩擦点**。

### 满意信号

- Volcengine Doubao Seed 用户在积极使用 PicoClaw 的 Coding Plan 集成（Issue #3153 中提供了详细的复现场景），说明该集成具有真实使用价值。
- 社区开发者（chengzhichao-xydt、SiYue-ZO、danmobot 等）持续贡献代码，且维护者审核节奏快（多个 PR 在同一天内被关闭/合入），表明项目对贡献者友好。

---

## 8. 待处理积压

以下 Issue/PR 标记为 **stale** 或长期未响应，建议维护者评估处理：

| # | 类型 | 标题 | 创建/最后更新 | 状态 | 建议 |
|---|------|------|-------------|------|------|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Issue | Feature: SimpleX / Wire / Tox 网关支持 | 2026-06-10 / 06-22 | 开放中 | 已有 3 条评论互动，评估是否纳入路线图或标记为 `help wanted` |
| [#3104](https://github.com/sipeed/picoclaw/pull/3104) | PR | build(deps): bump shadcn 4.7.0 → 4.11.0 | 2026-06-11 / 06-22 | stale | 前端依赖升级，低风险，建议尽快合入或关闭 |
| [#3100](https://github.com/sipeed/picoclaw/pull/3100) | PR | build(deps-dev): bump @vitejs/plugin-react 6.0.1 → 6.0.2 | 2026-06-11 / 06-22 | stale | 前端 dev依赖，建议批量处理 |
| [#3103](https://github.com/sipeed/picoclaw/pull/3103) | PR | build(deps-dev): bump typescript-eslint 8.59.3 → 8.62.0 | 2026-06-11 / 06-22 | stale | 前端 lint 工具升级 |
| [#3131](https://github.com/sipeed/picoclaw/pull/3131) | PR | fix(registry): tool schema type assertion ok checks | 2026-06-15 / 06-22 | stale | 安全修复，建议评审后合入而非继续积压 |
| [#3128](https://github.com/sipeed/picoclaw/pull/3128) | PR | fix(web): ignore resp.Body.Close() errors | 2026-06-15 / 06-22 | stale | 代码卫生修复 |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | PR | feat: remote Pico WebSocket mode for agent | 2026-06-12 / 06-22 | stale | 功能完整度高，与 #3157 Android ADB 方向一致，建议优先评审 |

> **积压健康度**: 当前积压主要集中在 **dependabot 前端依赖升级**（可批量处理）和 **少量 core 修复**（低风险，可快速合入）。远程 Agent 模式的 PR (#3118) 是唯一有较大评审成本的功能型积压，但其战略价值较高。

---

*日报生成时间: 2026-06-23 | 数据来源: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 分析引擎: OWL*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-23

---

## 1. 今日速览

NanoClaw 今日处于**中高活跃度的开发推进期**，无新 Issue 报告，但 PR 管线活跃（6 条更新，5 条待合并，1 条已关闭）。项目当前无新版本发布，开发重心集中在**渠道集成扩展**（Email、Telegram）、**审批流程增强**和**安装/运维稳定性修复**上。整体来看，社区贡献者持续涌入，功能迭代节奏稳健，但 PR 积压量较大（多条开放 PR 等待合并），维护者审查带宽可能成为瓶颈。

---

## 2. 版本发布

**无新版本发布。** 本节省略。

---

## 3. 项目进展

今日 **1 条 PR 已关闭**，**5 条 PR 保持开放**等待合并：

### 已合并/关闭

| PR | 状态 | 说明 |
|---|---|---|
| [#2831](https://github.com/nanocoai/nanoclaw/pull/2831) — Telegram integration | **CLOSED** | 作者 aarchh 提交的 Telegram 渠道集成 PR，标记为已关闭（未合并即关闭，可能因重复、冲突或作者自行撤回）。该功能方向与 #1235 的邮件集成共同表明社区对**多渠道消息接入**有强烈需求。 |

### 待合并（活跃推进中）

| PR | 作者 | 方向 | 摘要 |
|---|---|---|---|
| [#1235](https://github.com/nanocoai/nanoclaw/pull/1235) — IMAP/SMTP email integration | aronjanosch | **渠道 + 工具集** | 将 IMAP 邮件作为可选 channel（收件箱轮询 → agent 消息）和 toolset（agent 按需读/写/管理邮件），通过 `imap-mcp-stdio` 子进程暴露 6 个 MCP 工具。这是目前最重量级的集成 PR 之一。 |
| [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) — `/add-clidash` CLI dashboard skill | leetwito | **Utility Skill** | 新增只读 CLI 衍生仪表盘技能，属于独立工具型 skill，不修改核心源码。 |
| [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) — Reject with reason | moshe-nanoco | **审批增强** | 为模块审批卡片增加"附带理由拒绝"路径，审批者可附加一行原因回传给请求 agent，使其能自适应调整。 |
| [#2830](https://github.com/nanocoai/nanoclaw/pull/2830) — Reap dead peer service registrations | amit-shafnir | **稳定性修复** | 清理因未运行 uninstaller 而残留的 launchd plist / systemd unit，防止 OS 反复尝试启动已不存在的二进制文件。 |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) — Suppress duplicate text in poll-loop | cfis | **Bug 修复** | 修复 `send_message` 在对话轮次中间触发时产生重复文本的问题。 |

**项目整体向前推进评估：** 若 #1235 邮件集成和 #2832 审批增强合并，将显著扩展 NanoClaw 的**企业适用性**（邮件工作流）和**多 agent 协作体验**（拒绝理由反馈闭环）。#2830 的运维清理修复虽小，但对长期稳定运行至关重要。

---

## 4. 社区热点

今日所有 PR 评论数均为 `undefined`（数据源未返回具体评论数），无 Issue 活动。从 PR 主题判断，**社区关注焦点**集中在：

- **多渠道集成**：#1235（Email）和已关闭的 #2831（Telegram）表明社区强烈希望 NanoClaw 成为**统一消息中枢**，接入主流通讯平台。
- **Agent 协作体验**：#2832 的"拒绝附带理由"功能反映出多 agent 工作流中**反馈闭环**的诉求——agent 不仅需要知道"被拒"，还需要知道"为什么"。
- **运维稳定性**：#2830 揭示了一个实际痛点——开发者在频繁测试/删除 NanoClaw 实例后，系统残留幽灵服务注册，影响机器健康度。

---

## 5. Bug 与稳定性

| 严重程度 | PR | 问题描述 | 状态 |
|---|---|---|---|
| 🔴 **中** | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | poll-loop 中 `send_message` 在对话轮次中间触发时产生重复文本 | ✅ 已有修复 PR，待合并 |
| 🟡 **低** | [#2830](https://github.com/nanocoai/nanoclaw/pull/2830) | 删除 NanoClaw 目录后残留 launchd/systemd 服务注册，OS 持续尝试启动不存在的二进制 | ✅ 已有修复 PR，待合并 |

**无新报告 Bug，无崩溃/回归问题。** 两条已知问题均有对应修复 PR 在管线中，稳定性风险可控。

---

## 6. 功能请求与路线图信号

从当前 PR 管线可推断以下**路线图信号**：

| 方向 | 信号来源 | 可能性 |
|---|---|---|
| **邮件渠道集成** | #1235（IMAP/SMTP，功能完整，含 6 个 MCP 工具） | ⭐⭐⭐⭐⭐ 高 — 实现完整，合并后即上线 |
| **多 agent 审批工作流增强** | #2832（拒绝理由） | ⭐⭐⭐⭐ 高 — 逻辑清晰，改动范围可控 |
| **Telegram 渠道** | #2831（已关闭，但需求存在） | ⭐⭐⭐ 中 — 需重新提交或替代方案 |
| **CLI 仪表盘** | #2795（只读 dashboard skill） | ⭐⭐⭐ 中 — 独立 skill，不阻塞核心 |
| **多渠道统一接入框架** | #1235 + #2831 共同指向 | ⭐⭐⭐⭐ 高 — 项目可能正在向"统一消息路由层"演进 |

**判断：** 下一版本（或近期）最可能落地的功能是 **IMAP/SMTP 邮件集成** 和 **审批拒绝理由**，两者均已有成熟 PR。

---

## 7. 用户反馈摘要

今日无新 Issue，评论数据不可用。从 PR 内容中可提炼以下**间接用户反馈**：

- **痛点 1 — 幽灵服务残留**：开发者频繁测试/删除 NanoClaw 后，系统级服务注册未被清理（#2830），说明当前 uninstaller 流程不够健壮，或用户未意识到需要手动卸载。
- **痛点 2 — Agent 反馈缺失**：多 agent 协作中，被拒后仅收到"declined"无法指导 agent 调整策略（#2832），这是**可观测性/可调试性**的缺口。
- **痛点 3 — 消息重复**：poll-loop 中的重复文本问题（#2531）影响对话质量，属于**核心消息管线**的稳定性缺陷。
- **满意点**：社区贡献者积极提交高质量 PR（含完整 MCP 工具集、SKILL.md 规范），说明项目**贡献者体验良好**，文档/规范足够清晰。

---

## 8. 待处理积压

以下 PR 已开放较长时间，**提醒维护者关注**：

| PR | 创建日期 | 已开放天数 | 说明 |
|---|---|---|---|
| [#1235](https://github.com/nanocoai/nanoclaw/pull/1235) — IMAP/SMTP email integration | 2026-03-18 | **~97 天** | 重量级集成 PR，开放近 3 个月，建议优先审查或给出反馈 |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) — Suppress duplicate text | 2026-05-18 | **~36 天** | Bug 修复 PR，开放超 1 个月，建议尽快合并或请求修改 |
| [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) — CLI dashboard skill | 2026-06-17 | **~6 天** | 较新，正常等待审查 |

**⚠️ 重点关注：** #1235 已开放近 3 个月，作为最重量级的渠道集成 PR，长期未合并可能影响贡献者积极性。建议维护者给出明确的审查时间表或反馈。

---

> **项目健康度总评：** 🟡 **良好，需关注 PR 积压**。开发活跃，无严重未修复 Bug，但 PR 审查速度跟不上提交速度，长期可能影响社区贡献动力。建议维护者近期集中处理 #1235 和 #2531。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-06-23

## 1. 今日速览

NullClaw 在过去24小时内保持低强度活跃，共2条 PR 更新，无新 Issue 也无新版本发布。项目当前处于稳定维护期，社区贡献以依赖升级和关键 Bug 修复为主。整体健康度良好，无紧急问题积压。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无 PR 合并或关闭，但有2条 PR 处于待合并状态：

- **PR #968** — `fix(matrix): persist next_batch across restart + test env isolation` — 修复了 Matrix 频道在重启后丢失 `/sync` 游标（`next_batch`）的关键问题，同时改进了测试环境隔离。该修复将避免每次重启触发全量初始同步，减少不必要的网络开销和重复消息处理。
- **PR #956** — `ci(deps): bump alpine from 3.23 to 3.24` — 通过 Dependabot 自动升级 Docker 基础镜像，属于常规依赖维护。

## 4. 社区热点

当前无活跃 Issue 讨论。PR #968 因涉及 Matrix 频道的核心同步逻辑修复，预计合并后将显著改善重启稳定性，值得关注。

## 5. Bug 与稳定性

- **Matrix 重启后触发全量同步**（PR #968 修复中）
  - **严重程度：中高** — 影响所有 Matrix 频道用户，每次重启导致重复处理历史消息
  - **状态：** 已有修复 PR 待合并（PR #968）

## 6. 功能请求与路线图信号

今日无新功能请求提交。从 PR #968 可看出项目正在加强 Matrix 后端的持久化与稳定性，后续可能继续围绕多频道可靠性展开优化。

## 7. 用户反馈摘要

今日无新增 Issue 评论。

## 8. 待处理积压

- **PR #956**（Dependabot Alpine 升级）已开放8天，建议尽快审查合并，避免依赖版本持续滞后。
- **PR #968** 涉及核心同步逻辑修复，建议优先审查，确认测试覆盖充分后合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-06-23

## 1. 今日速览

IronClaw 社区保持高活跃度：过去 24 小时共处理 **18 条 Issue 更新**（14 个新开/活跃、4 个关闭）和 **23 条 PR 更新**（15 个待合并、8 个已合并/关闭）。本周核心主题明确：**Reborn 性能优化**、**自动化管理（暂停/恢复/删除）**、**审批与权限模型完善**，以及**大型代码重构（composition god-crate 拆分）**。无新版本发布，项目处于密集迭代阶段。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动了多个核心方向：

| PR | 状态 | 内容 |
|---|---|---|
| [#5085](https://github.com/nearai/ironclaw/pull/5085) | ✅ 已合并 | **Reborn 并发轮次执行**：引入 `TurnRunScheduler` + 每用户/每类型并发上限，取代此前严格串行的 `TurnRunnerWorker`，是吞吐量的基础性改进 |
| [#5063](https://github.com/nearai/ironclaw/pull/5063) | ✅ 已合并 | **每轮自动审批决议 + 永不自动审批的硬底线**：DB -backed 的 per-(tenant, user) 全局 auto-approve 设置，无需重启即生效 |
| [#5062](https://github.com/nearai/ironclaw/pull/5062) | ✅ 已合并 | **Reborn 每工具权限覆盖模型**：新增 `CapabilityPermissionState`（always_allow / ask_each_time / disabled）+ per-(tenant, user, capability) 存储 |
| [#5140](https://github.com/nearai/ironclaw/pull/5140) | ✅ 已合并 | **修复 trigger_create 输入错误信息不透明**：将结构化修复细节从首方调度传递至运行时 |
| [#5081](https://github.com/nearai/ironclaw/pull/5081) | ✅ 已合并 | **Hosted 单租户 Postgres 配置**：保留本地开发产品/运行时表面，使用 PostgreSQL 持久化状态，作为托管预览路径 |
| [#4985](https://github.com/nearai/ironclaw/issues/4985) | ✅ 已关闭 | **Engine V2 LLM 用量持久化**：修复 `/api/admin/usage` 在 Engine V2 下返回空数据的问题 |

**整体判断**：本周合并的 PR 集中在 Reborn 运行时核心能力（并发、审批、权限），标志着 Reborn 从"能用"向"好用"的生产化方向迈进。

---

## 4. 社区热点

### 🔥 最值得关注的 Issue

- **[#5139](https://github.com/nearai/ironclaw/issues/5139) — Reborn 回归：web/research 任务在初始化阶段挂起（0 次 LLM 调用）**
  - 自 `2b2ccc55` → `704fcd43`（10 个 commit）后，Reborn 在任务初始化时完全卡住，超时退出且未发出任何 LLM/工具调用。今日 PinchBench 日常测试中 21/147 任务受影响。严重程度高，疑似与近期并发调度或 composition 拆分相关。

- **[#5125](https://github.com/nearai/ironclaw/issues/5125) — Reborn 性能问题追踪（06/22–06/28）**
  - 父 Issue，下分三个子任务：延迟日志与归因（[#5126](https://github.com/nearai/ironclaw/issues/5126)）、推理延迟与 provider 调优（[#5127](https://github.com/nearai/ironclaw/issues/5127)）、减少不必要的 agent/运行时步骤（[#5128](https://github.com/nearai/ironclaw/issues/5128)）。社区对"本地 Reborn 感觉慢"的反馈集中爆发。

- **[#5119](https://github.com/nearai/ironclaw/issues/5119) / [#4879](https://github.com/nearai/ironclaw/issues/4879) — Local Dogfooding 发现汇总**
  - 两个 dogfooding Issue 并行追踪，覆盖 WebUI 启动、配置、模型提供者设置、首次运行可用性等痛点，反映核心团队正在以自身日常使用驱动打磨。

### 🔥 最值得关注的 PR

- **[#5137](https://github.com/nearai/ironclaw/pull/5137) — 提取 `ironclaw_reborn_http_kit`（composition god-crate 拆分 1/N）**
  - 将约 132k 行的 `ironclaw_reborn_composition` "上帝 crate" 拆分为独立 crate，首个 PR 提取 HTTP 中间件工具包。此前 [#5135](https://github.com/nearai/ironclaw/pull/5135) 的一次性拆分方案已关闭，改为渐进式拆分策略。

- **[#5061](https://github.com/nearai/ironclaw/pull/5061) — Reborn 技能提取与自进化**
  - Hermes 风格的技能提取：在实质性成功的轮次后，后台任务将对话记录蒸馏为可复用的 `SKILL.md`，安装后提示"已学习技能"。代表了 AI agent 自进化方向的新探索。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 详情 |
|---|---|---|---|
| 🔴 **高** | [#5139](https://github.com/nearai/ironclaw/issues/5139) | 开放 | Reborn web/research 任务初始化挂起，0 LLM 调用即超时；21/147 PinchBench 任务受影响。**尚无 fix PR** |
| 🟡 **中** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | 开放 | Nightly E2E 持续失败（自 05/27 起），涉及 v2-engine 全量测试。**尚无修复** |
| 🟡 **中** | [#5129](https://github.com/nearai/ironclaw/issues/5129) | 开放 | "Always approve" 对 `outbound_delivery_target_set` 不生效，需复现确认 |
| 🟢 **低** | [#4925](https://github.com/nearai/ironclaw/issues/4925) | 已关闭 | NEAR AI MCP 显示"SETUP NEEDED"但实际已可用（UI 状态错误） |

**关键风险**：#5139 是明确的回归 bug，影响 Reborn 核心路径，建议优先排查是否与 #5085（并发轮次执行）或 composition 拆分有关。

---

## 6. 功能请求与路线图信号

| 方向 | 相关 Issue/PR | 信号强度 |
|---|---|---|
| **Reborn 自动化管理** | [#5121](https://github.com/nearai/ironclaw/issues/5121) / [#5122](https://github.com/nearai/ironclaw/issues/5122) + 已开 PR [#5131](https://github.com/nearai/ironclaw/pull/5131)（暂停/恢复）、[#5133](https://github.com/nearai/ironclaw/pull/5133)（删除） | 🟢 高 — PR 已就绪，预计近期合并 |
| **Telegram 频道支持** | [#5124](https://github.com/nearai/ironclaw/issues/5124) | 🟡 中 — 已有追踪，待排期 |
| **GitHub Bug 自动修复工作流** | [#5134](https://github.com/nearai/ironclaw/pull/5134)（设计文档 PR） | 🟡 中 — 设计阶段，代表社区对自动化 bug 修复的期待 |
| **Reborn 技能自进化** | [#5061](https://github.com/nearai/ironclaw/pull/5061) | 🟡 中 — 功能新颖，待 review |
| **OpenAI 兼容 `/v1/models`** | [#5094](https://github.com/nearai/ironclaw/pull/5094) | 🟡 中 — 外部工具门控基础，当前为安全 no-op |
| **Slack 配置迁移至 WebUI** | [#4712](https://github.com/nearai/ironclaw/pull/4712) | 🟡 中 — 长期开放 PR，持续更新 |
| **Gate 拒绝语义统一** | [#5120](https://github.com/nearai/ironclaw/issues/5120) | 🟢 低 — 代码质量改善 |

---

## 7. 用户反馈摘要

**不满意 / 痛点：**
- **性能退化**：本地 Reborn 用户普遍反映"感觉慢"，本周首次建立系统化的性能追踪体系（#5125 系列），说明该问题已严重到无法忽视。
- **任务挂起无诊断**：#5139 中 PinchBench 21/147 任务失败，且失败时"0 LLM 调用"——意味着问题出在调度/初始化层而非模型层，用户缺乏足够的错误信息定位问题。
- **审批/权限配置复杂**：#5129 反映 "always approve" 对特定工具不生效，#4959/#4958 反映缺乏全局开关和每工具权限——说明当前权限模型对终端用户不够直观。

**满意 / 积极信号：**
- Dogfooding 系列（#4879、#5119）由核心维护者亲自使用并记录问题，体现了团队对产品质量的认真态度。
- 社区贡献者活跃：新贡献者提交了依赖更新、WebUI 路由修复、设计文档等多种 PR，项目对外来贡献保持开放。

---

## 8. 待处理积压

| 积压项 | 类型 | 等待天数 | 建议 |
|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E 持续失败 | Issue | **26 天** | 🔴 建议立即排查，持续失败的 CI 会掩盖真实回归 |
| [#5139](https://github.com/nearai/ironclaw/issues/5139) — Reborn 任务挂起回归 | Issue | **1 天** | 🔴 高优，需确认是否与 #5085 或 composition 拆分相关 |
| [#4787](https://github.com/nearai/ironclaw/pull/4787) — Barcelona Hackathon fork 同步 | PR | **11 天** | 🟡 标记 NO MERGE，保持 fork 同步，无需主仓库 action |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) — wasm 依赖更新 | PR | **28 天** | 🟡 长期未合并的 dependabot PR，可能有冲突需手动解决 |
| [#4712](https://github.com/nearai/ironclaw/pull/4712) — Slack WebUI 配置 | PR | **12 天** | 🟡 持续更新中，需 reviewer 排期 |
| [#5094](https://github.com/nearai/ironclaw/pull/5094) — `/v1/models` + 外部工具门控 | PR | **4 天** | 🟡 功能明确，需 review 后合并 |

---

**日报总结**：IronClaw 本周处于 Reborn 生产化的关键攻坚期——并发调度、权限模型、自动化管理等核心能力密集落地，同时暴露出性能回归和 E2E 稳定性两个需要紧急关注的风险点。建议优先处理 #5139（任务挂起）和 #4108（E2E 持续失败），避免影响后续功能合并的信心。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-06-22

---

## 1. 今日速览

LobsterAI 今日活跃度较高，过去24小时内 **PR 更新达14条**（8条待合并，6条已合并/关闭），**Issues 更新5条**（全部标记为 stale，无新关闭），**无新版本释放**。项目今日的主要推动力来自 OpenClaw 生态集成相关的合并工作流及 Cowork 计划模式的落地。值得注意的是，多个 stale 标记的 Issues 和 PR 已积压超过两个月未闭合，需要维护者关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共合并/关闭 **6 个 PR**，主要集中在 OpenClaw 生态集成与 Cowork 工作流增强：

| # | PR | 作者 | 核心变更 |
|---|---|---|---|
| **#2183** | [feat(cowork): add plan mode workflow](https://github.com/netease-youdao/LobsterAI/pull/2183) | liuzhq1986 | Cowork 新增 **Plan Mode（计划模式）** — 在编写器菜单中增加规划入口，将提案以独立交互块呈现，支持复制/下载/展开/折叠，阻断工具调用修改直至批准后进入正常执行流程。这是 Cowork 工作流迈向前向规划协作的一大步。 |
| **#2182** | [fix(openclaw): support upgraded im plugin installs](https://github.com/netease-youdao/LobsterAI/pull/2182) | btc69m979y-dotcom | 支持 OpenClaw 2026.6.1 的 IM 插件安装布局（DingTalk/Lark/WeCom/POPO），同时兼容 `extensions/` 和 `npm/projects/.../node_modules/` 两种路径。 |
| **#2184** | [docs(agents): update repository guidance](https://github.com/netease-youdao/LobsterAI/pull/2184) | btc69m979y-dotcom | 更新 AGENTS.md：同步 Cowork/OpenClaw 最新架构与命令体系，补充 Codex 指令范围、质量门控、变更文件 Lint 策略和验证规范。 |
| **#2185** | [fix(openclaw): include cwd in reply options patch](https://github.com/netease-youdao/LobsterAI/pull/2185) | btc69m979y-dotcom | 修复 OpenClaw v2026.6.1 的 cwd 补丁：补充缺失的 `GetReplyOptions.cwd` 字段，修正插件 SDK 声明生成失效问题。 |
| **#2186** | [fix(openclaw): compile NIM plugin runtime entry](https://github.com/netease-youdao/LobsterAI/pull/2186) | btc69m979y-dotcom | 提取 TypeScript 插件包准备逻辑为共享脚本 `scripts/openclaw-plugin-preparers`，在 OpenClaw CLI 安装前对 NIM 通道的纯 TS 运行时入口进行编译与重新打包。 |
| **#2187** | [test: align OpenClaw metadata expectations](https://github.com/netease-youdao/LobsterAI/pull/2187) | btc69m979y-dotcom | 对齐全场景测试：更新渲染器模型默认元数据和历史会话协调测试，对齐 reasoning-capable 模型元数据变更。Vitest 146 项通过。 |

**整体评估**：#2183 计划模式的功能性是今日最大实质进展，标志着 Cowork 正在向更完整的 Agent 工作流平台演进。其余合并项均为 OpenClaw 2026.6.1 升级链路上的修复与文档刷新，属于生态维系性维护。

---

## 4. 社区热点

今日所有 Issues 的评论数均只有 **1 条**，互动量不高。更新最活跃的是以下几条（评论数并列不高，按关注度排列）：

### 🔸 [#1411 · 概览页"过去30天"时间维度筛选器点击无响应](https://github.com/netease-youdao/LobsterAI/issues/1411)
> **作者**: STUPIDDDD0 (2026-04-03 创建，2026-06-22 更新)

用户体验类 Bug：概览页 `#/profile` 的"过去30天"时间筛选器可 hover 但无交互响应，统计分析时间范围无法切换。

**长期未关状态**：已超过 80 天 stale，用户期望统计维度的灵活性未能得到满足。

### 🔸 [#1414 · 概览页"总会话数"始终显示为 0](https://github.com/netease-youdao/LobsterAI/issues/1414)
> **作者**: STUPIDDDD0

数据统计 Bug：用户使用量明显存在（API 调用 432 次），但会话数统计一直为 0，属于数据展示核心指标异常。

### 🔸 [#1409 · 定时任务已触发，未生成历史记录](https://github.com/netease-youdao/LobsterAI/issues/1409)
> **作者**: devilszy

用户提供了截图复现材料，说明跨天定时任务触发后历史记录条目未持久化。

---

## 5. Bug 与稳定性

今日 **新开/活跃 Bug 报告 5 条**，均已标记 stale，其中 4 条由同一用户 (STUPIDDDD0) 在 2026-04-03 系统性提交。按严重程度排列：

### 🔴 P0 — 数据异常（有修复 PR 但未合并）

| # | Bug 描述 | 严重程度 | 关联 Fix PR |
|---|---|---|---|
| #1414 | 概览页总会话数始终为 0 | 数据展示核心指标异常 | 无 |
| #1409 | 定时任务触发后历史记录未生成 | 核心功能失效 | 无 |

### 🟡 P1 — 交互崩溃与并发安全（有修复 PR 待合并）

| # | Bug/PR 描述 | 严重程度 | 关联 Fix PR |
|---|---|---|---|
| #1420 | CronJobService.pollOnce() 重入并发与幽灵事件 | 可能引发事件风暴、IPC 风暴 | ✅ PR #1420 (OPEN, stale) |
| #1410 | SqliteStore.set() 高频写入阻塞事件循环 | 流式响应卡顿 | ✅ PR #1410 (OPEN, stale) |
| #1415 | 数据库迁移完成标志判断逻辑错误 | 迁移失败时仍标记完成，历史记忆永久丢失 | ✅ PR #1415 (OPEN, stale) |
| #1407 | OpenClaw Token Proxy 无请求体大小限制 | OOM 安全风险（仅限 localhost） | ✅ PR #1407 (OPEN, stale) |
| #1408 | MCP Bridge Server handleRequest 未处理 Promise rejection | Node.js 进程可能崩溃/连接永久挂起 | ✅ PR #1408 (OPEN, stale) |

### 🟢 P2 — UI 体验 Bug（无修复 PR）

| # | Bug 描述 |
|---|---|
| #1411 | 概览页"过去30天"时间筛选器无法交互切换 |
| #1413 | Skills 较多时输入框区域布局展示不友好 |
| #1416 | 英文模式 UI 文本数字重叠、布局错乱 |

**修复积压状况**：5 个修复 PR 全部处于 stale 状态且未得到审核，最长的已积压超过 80 天，存在严重的技术债务堆积。

---

## 6. 功能请求与路线图信号

今日无新增功能请求。结合近期 PR 分析：

- **Cowork 计划模式 (#2183)** 已合并，说明 Agent 工作流中的规划能力正在被积极开发，后续应关注该模式的高级配置与工具集成深度。
- **IM 插件矩阵持续扩展**（#2182 合入），支持 DingTalk/Lark/WeCom/POPO，且同时兼容两套插件路径安装布局，表明 OpenClaw IM 生态接入正在深化。
- **构建性能优化**（PR #1277, dependabot 的 Electron 版本升级 40.2.1 → 42.4.0）仍处于待合并状态，依赖升级未落地。

**推测下一版本可能方向**：Cowork 计划模式进一步打磨、OpenClaw 插件深度集成后的 GUI 界面完善。

---

## 7. 用户反馈摘要

从 stale Issues 和 PR 摘要中可以提炼以下真实用户痛点：

- **功能可用性问题**：概览页的时间筛选器无法切换，Skill 添加多后输入框拥挤，英文布局适配不完整 — 说明在生产使用中长期存在功能达成度不足，影响核心功能体验。
- **数据统计失真**：会话数统计为 0，但 API 调用数据存在，用户无法获得准确的使用画像反馈。
- **文档与期望管理**：PR #2184 专门更新 AGENTS.md 以明确质量门控和指令边界，反映出当前用户对 Codex/指令性行为可能感到困惑，需要更明确的使用规范引导。
- **安全与稳定性**：liulingfeng 提交的一系列安全/性能 PR（请求体限制、防抖写入、Promise 处理）反映了用户/开发者在实际运行中对 OOM 风险和事件循环阻塞的真实担忧。

---

## 8. 待处理积压

以下 Issues/PR 长期处于 stale 状态，强烈建议维护者优先处理：

### 🔴 高危积压（Bug + 已有修复 PR）

| 创建时间 | Issue/PR | 问题 | 修复 PR | 积压天数 |
|---|---|---|---|---|
| 2026-04-03 | [PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407) | Token Proxy 无请求体大小限制（OOM） | — | >80 天 |
| 2026-04-03 | [PR #1408](https://github.com/netease-youdao/LobsterAI/pull/1408) | MCP Bridge Promise rejection | — | >80 天 |
| 2026-04-03 | [PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410) | SQLite 高频写入阻塞事件循环 | — | >80 天 |
| 2026-04-03 | [PR #1415](https://github.com/netease-youdao/LobsterAI/pull/1415) | 数据库迁移标志错误 | — | >80 天 |
| 2026-04-03 | [PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420) | CronJobService 重入并发安全 | — | >80 天 |

### 🟡 积压 Issues（无修复 PR）

| 创建时间 | Issue | 问题 | 积压天数 |
|---|---|---|---|
| 2026-04-03 | [Issue #1409](https://github.com/netease-youdao/LobsterAI/issues/1409) | 定时任务无历史记录 | >80 天 |
| 2026-04-03 | [Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411) | 概览页时间筛选器无效 | >80 天 |
| 2026-04-03 | [Issue #1413](https://github.com/netease-youdao/LobsterAI/issues/1413) | Skills 布局不友好 | >80 天 |
| 2026-04-03 | [Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414) | 总会话数始终为 0 | >80 天 |
| 2026-04-03 | [Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416) | 英文 UI 布局错乱 | >80 天 |

### ⚠️ 自动化依赖更新积压

| 创建时间 | PR | 内容 | 积压天数 |
|---|---|---|---|
| 2026-04-02 | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 40→42 升级 | >81 天 |

> ☝️ **建议**：#1277 作为 dependabot 提交的 Electron 大版本跨越式升级，虽需充分测试，但超过 80 天未处理意味着依赖债务继续膨胀，建议尽快排入测试队列。

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐ | PR 产出活跃，Cowork 计划模式成功落地 |
| Issue 响应速度 | ⭐⭐ | 大量 stale，积压天数过长 |
| 代码质量 | ⭐⭐⭐⭐ | OpenClaw 集成链测试完善（146 passed Vitest） |
| 安全/稳定性 | ⭐⭐⭐ | 安全修复 PR 积压但已识别，悬而未决 |
| 版本节奏 | ⭐⭐ | 无新版本发布 |
| 社区满意度 | ⭐⭐ | stale Bug 集中，用户痛点持续 |

**总体评价**：项目在功能开发维度保持良好推进，Cowork 计划模式和 OpenClaw 生态集成是亮点；但 Issue/PR 响应积压与安全修复债务构成了显著的运维风险窗口。建议近期安排对 2026-04-03 批量 stale 事项的统一清扫和技术债务清偿。

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

# CoPaw 项目动态日报

**日期：2026-06-23 ｜ 数据来源：agentscope-ai/QwenPaw**

---

## 1. 今日速览

过去 24 小时，CoPaw 项目共处理 **20 条 Issues**（新开/活跃 17 条，已关闭 3 条）和 **50 条 Pull Requests**（待合并 30 条，已合并/关闭 20 条），社区活跃度处于**高位**。今日无新版本发布，但 PR 吞吐量显著，团队正集中推进移动端适配、上下文管理策略和记忆系统优化。值得关注的是，多个影响核心体验的稳定性 Bug（进程冻结、消息串台、Cron 调度停止）仍在开放状态，需优先处理。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在以下方向：

### 移动端适配全面铺开（已合并/进行中）
多位贡献者（以首次贡献者 yaozy2020 为主力）系统性地为 Console 各页面添加移动端响应式布局，今日活跃 PR 覆盖：

| 页面 | PR | 状态 |
|---|---|---|
| Settings → Models | [#5397](https://github.com/agentscope-ai/QwenPaw/pull/5397) | 待合并 |
| Settings → Environments | [#5385](https://github.com/agentscope-ai/QwenPaw/pull/5385) | 待合并 |
| Settings → Workspace (Files) | [#5384](https://github.com/agentscope-ai/QwenPaw/pull/5384) | 待合并 |
| Settings → CronJobs | [#5362](https://github.com/agentscope-ai/QwenPaw/pull/5362) | 待合并 |
| Settings → Sessions | [#5364](https://github.com/agentscope-ai/QwenPaw/pull/5364) | 待合并 |
| Settings → Channels | [#5369](https://github.com/agentscope-ai/QwenPaw/pull/5369) | 待合并 |
| Settings → MCP Clients | [#5381](https://github.com/agentscope-ai/QwenPaw/pull/5381) | 待合并 |
| Settings → ACP | [#5382](https://github.com/agentscope-ai/QwenPaw/pull/5382) | 待合并 |
| Chat 页 ModelSelector | [#5355](https://github.com/agentscope-ai/QwenPaw/pull/5355) | 待合并 |

> **判断：** 移动端适配已进入批量收尾阶段，预计近期将集中合并。

### 上下文与记忆系统增强
- **[#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) feat(context): scroll context manager** — 引入基于 SQLite 的持久化对话历史 + REPL 召回机制，作为原生摘要压缩的替代方案。架构级变更，Under Review。
- **[#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) feat(memory): recency-aware ranking for memory_search** — 为每日记忆文件添加指数时间衰减排序，已关联关闭 [#5316](https://github.com/agentscope-ai/QwenPaw/issues/5316)。

### 模型管理体验优化
- **[#5297](https://github.com/agentscope-ai/QwenPaw/pull/5297) feat(models): batch test & batch delete models** — 支持并行批量测试和删除模型，直接回应了长期存在的管理效率痛点。
- **[#5399](https://github.com/agentscope-ai/QwenPaw/pull/5399) feat(providers): custom model ordering** — 支持拖拽/按钮调整模型排序并持久化。

### 已关闭的重要 PR
- **[#5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) fix(security): isolate keychain master key per install** — 修复了多安装共享同一 OS keychain 条目的安全隐患。✅ 已合并。
- **[#5027](https://github.com/agentscope-ai/QwenPaw/pull/5027) feat(acp): stop backend-warmup sessions from polluting console** — 清理启动预热会话产生的垃圾数据，并增加 session resume 能力。✅ 已合并。

---

## 4. 社区热点

### 🔥 Issue #5218 — 子 Agent 触发上下文压缩时 QwenPaw 进程冻结
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/5218
- **评论：17 条**（今日最高）
- **核心诉求：** 子 Agent 触发上下文压缩后，整个 QwenPaw 进程完全无响应，必须手动重启。这是**数据丢失级别**的严重 Bug，直接影响多 Agent 工作流的可信度。社区讨论深入，但尚未有官方修复 PR 关联。

### 🔥 Issue #5262 — 升级后内置技能禁用状态被重置
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/5262
- **评论：9 条**
- **核心诉求：** 用户明确不需要 docx/xlsx 等内置技能，每次升级后都需要重新禁用。这是**第二次被报告**（前次 #4807 未彻底解决），用户不满情绪明显，属于升级体验回归问题。

### 🔥 Issue #5354 — 消息发送队列串台 + 对话切换卡死
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/5354
- **评论：4 条**（已关闭）
- **核心诉求：** 新增消息队列功能后，跨 Agent 消息会"串台"（发到错误的 Agent），且切换对话后无法切回。已有关联修复 PR [#5357](https://github.com/agentscope-ai/QwenPaw/pull/5357)，Under Review。

### 🔥 Issue #5370 — send_file_to_user 返回 HTTP 404
- **链接：** https://github.com/agentscope-ai/QwenPaw/issues/5370
- **评论：5 条**（已关闭）
- **核心诉求：** 文件发送工具生成的绝对路径 URL 被前端截断为文件名，导致 `/api/files/preview/` 路由 404。影响文件共享场景。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 已有 Fix PR |
|---|---|---|---|
| 🔴 **严重** | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 子 Agent 上下文压缩导致进程冻结，需手动重启 | ❌ 无 |
| 🔴 **严重** | [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398) | Cron 调度器停止触发已启用任务（应用进程存活但 jobs 不执行） | ❌ 无 |
| 🟠 **高** | [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) | 提交指令后 Agent 卡住不动，UI 显示状态不一致（可提交 vs 应暂停） | ❌ 无 |
| 🟠 **高** | [#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373) | Shell 命令执行无法解析重定向、管道等特殊字符 | ❌ 无 |
| 🟠 **高** | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | pip 安装后启动直接报 Internal Server Error（`get_remote_addr` 异常） | ❌ 无 |
| 🟡 **中** | [#5378](https://github.com/agentscope-ai/QwenPaw/issues/5378) | 新增自定义模型后 endpoint 自动填入查询框且无法删除，页面不可用 | ❌ 无 |
| 🟡 **中** | [#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330) | 智谱供应商 API 测试成功但所有模型测试失败（路由/名称解析问题） | ❌ 无 |
| 🟡 **中** | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | 自定义 OpenAI 兼容提供商（如 OMLX）不支持 function calling | ❌ 无 |
| 🟡 **中** | [#5358](https://github.com/agentscope-ai/QwenPaw/issues/5358) | 切换会话时 ui-vendor bundle 报 TypeError | ❌ 无 |
| 🟢 **低** | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | 升级后内置技能禁用状态被重置（第二次复发） | ❌ 无 |
| 🟢 **低** | [#5374](https://github.com/agentscope-ai/QwenPaw/issues/5374) | Mac Chrome 浏览器无法拖拽上传附件 | ❌ 无 |

> **注意：** 已关闭的 Bug（#5354、#5370、#4889）已有或正在推进修复，不计入上表。

---

## 6. 功能请求与路线图信号

| 功能 | Issue | 关联 PR / 信号 | 纳入可能性 |
|---|---|---|---|
| **个人知识库** | [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) | 无直接 PR，但 #5321 (scroll context) 和 #5325 (memory ranking) 为底层支撑 | ⭐⭐⭐ 高 — 基础设施已在建设 |
| **智能体与工作空间解耦** | [#5392](https://github.com/agentscope-ai/QwenPaw/issues/5392) | 无直接 PR | ⭐⭐ 中 — 架构改动大，需充分设计 |
| **Recall-aware 记忆整合** | [#5387](https://github.com/agentscope-ai/QwenPaw/issues/5387) | #5325 已落地 recency ranking，本需求为其自然延伸 | ⭐⭐⭐ 高 — 已有前置工作 |
| **核心稳定性优先** | [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360) | 无 PR，但社区呼声明确 | ⭐⭐⭐ 高 — 多个严重 Bug 积压 |
| **OpenClaw/Hermes 配置迁移** | [#5254](https://github.com/agentscope-ai/QwenPaw/issues/5254) | 无 PR | ⭐ 低 — 生态兼容优先级不高 |

---

## 7. 用户反馈摘要

### 😤 不满意
- **升级体验差：** 每次升级都要重新禁用不需要的内置技能（#5262），用户明确表示"之前提过一次没修好"，对重复回归感到失望。
- **消息队列串台：** 新功能引入后导致跨 Agent 消息混乱（#5354），用户肯定效率提升但无法接受串台。
- **Cron 任务静默失败：** 任务配置了但不再触发，且无明显错误提示（#5398），用户只能被动发现。
- **文档/引导不足：** 多个 Question 类型 Issue（#5317、#5254）反映用户不清楚如何迁移或配置环境。

### 😊 满意
- **消息队列整体方向获认可：** #5354 用户肯定"极大地提高了效率"，只是希望修复串台。
- **移动端适配获社区积极响应：** 多位首次贡献者主动参与，维护者快速 Review，协作氛围良好。
- **安全修复及时：** keychain 隔离（#5028）和预热会话清理（#5027）已合并，安全反馈闭环。

### 📋 典型使用场景
- 多 Agent 协作工作流（子 Agent 触发上下文压缩 → #5218）
- 定时任务自动化（Cron 调度 → #5398）
- 企业/个人知识库集成（#2969）
- 跨平台模型管理（自定义 OpenAI 兼容提供商 → #5345）

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于关键路径，建议维护者优先关注：

| 项目 | 链接 | 等待时间 | 建议 |
|---|---|---|---|
| **子 Agent 上下文压缩冻结** | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 7 天 | 🔴 严重 Bug，17 条评论，需立即响应或关联修复 PR |
| **Cron 调度停止** | [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398) | 1 天 | 🔴 严重 Bug，影响自动化用户，需排查调度器状态机 |
| **个人知识库 Feature Request** | [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) | 78 天 | 长期需求，已有 2 👍，建议纳入路线图讨论 |
| **scroll context manager** | [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) | 4 天 | 架构级 PR，需尽快完成 Review 或提供反馈 |
| **消息队列串台修复** | [#5357](https://github.com/agentscope-ai/QwenPaw/pull/5357) | 2 天 | 关联已关闭 Issue #5354，建议加速合并 |
| **Shell 特殊字符解析** | [#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373) | 1 天 | 影响 Agent 执行复杂命令的能力，建议评估修复优先级 |
| **pip 安装启动报错** | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | 1 天 | 阻断新用户首次体验，需确认是否为主流安装路径 |

---

**总结：** CoPaw 项目当前处于**功能快速迭代与稳定性债务并存**的阶段。移动端适配和记忆/上下文系统升级是明确的推进方向，但多个严重级别 Bug（尤其是 #5218 进程冻结和 #5398 Cron 静默失败）对用户体验构成重大威胁。建议团队在保持功能节奏的同时，分配资源优先处理积压的严重 Issue，避免社区信任度下降。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-06-23 | 数据来源：github.com/zeroclaw-labs/zeroclaw**

---

## 1. 今日速览

过去 24 小时，ZeroClaw 项目共处理 **50 条 Issues**（新开/活跃 42，已关闭 8）和 **50 条 Pull Requests**（待合并 48，已合并/关闭 2），社区活跃度处于**高位**。项目当前无新版本发布，但安全加固、供应链治理和跨平台兼容性是今日最突出的主题。值得注意的是，待合并 PR 积压达 48 条，维护者的合并吞吐面临明显压力。整体来看，项目正处于 **v0.9.0 安全/架构大版本**的密集冲刺阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日仅有 **2 条 PR 被合并/关闭**，合并率偏低，大量修复和新功能处于排队等待审核状态。

### 已合并/关闭的重要 PR

| PR | 状态 | 内容摘要 |
|---|---|---|
| **#7853** — fix(update): repair Windows self-update and harden the update pipeline | 已合并 | 修复 Windows 上 `zeroclaw update` 因进程锁导致的二进制替换失败问题，彻底加固了自更新管线。对 Windows 用户是关键稳定性修复。 |
| **#7999** — fix(zerocode): surface active config directory in Config header | 已合并 | ZeroCode TUI 的 Config 面板现在显示当前使用的配置目录路径，解决了多配置环境下用户无法辨别当前状态的痛点。 |

### 积压中的重要待合并 PR（按影响面排序）

| PR | 类型 | 内容摘要 |
|---|---|---|
| **#8196** — refactor(history): rip out history pruning/compression | 重构 (XL) | 移除 6 阶段历史剪枝/压缩子系统，替换为单一全轮次 trim 函数并暴露可见的 RPC 事件。大幅简化上下文管理，是 v0.9.0 核心架构变更。 |
| **#8128** — feat(plugins): add SSRF guard to zc_http_request host function | 安全 (S) | 为插件运行时的 `zc_http_request` 增加 SSRF 防护，阻止插件访问 loopback、私有链路和云元数据端点。直接回应供应链安全诉求。 |
| **#8137** — feat(plugins): scope plugin config per-alias and remove raw env access | 安全 (M) | 移除插件的原始环境变量读取能力（`zc_env_read`），关闭跨插件和原始环境秘密泄露路径。 |
| **#8009** — fix(receipts): wire HMAC tool receipts through the agent turn paths | 安全 (M) | 将 HMAC 工具回执子系统接入所有 agent turn 路径（ACP、gateway WS、CLI），修复回执仅在 channel 编排层生效的遗漏。 |
| **#8127** — fix(telegram): redact bot token via global leak detector | 安全 (S) | 修复 Telegram API 请求失败时日志泄露 bot token 的安全问题。 |
| **#8199** — fix(zerocode): initialize MCP for Chat TUI sessions | 功能修复 (S) | 修复 Chat 模式 TUI 会话未初始化 MCP 导致工具不可用的回归问题。 |
| **#8133** — feat(presets): redefine Balanced as the trusted-local daily driver | 功能 (S) | 将 `Balanced` 风险预设重新定义为可信的本地日常驱动模式，降低新手上手门槛。 |
| **#8200** — [QA] Integration branch for all open PRs | 集成测试 | 将所有开放 PR 合并至临时分支进行端到端 QA 验证，标记为"intended to die"，不进入 master。 |

---

## 4. 社区热点

以下按评论数和互动热度排序，展示今日最受关注的 Issues 和 RFCs：

### 🔥 最热讨论

1. **[#7420] RFC: Native Dynamic-Library Plugin System** — 6 条评论
   - 讨论围绕是否用原生动态库插件替代当前方案展开，涉及架构方向性选择。已关闭，但讨论反映了社区对插件系统性能和安全边界的深度关注。
   - 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7420

2. **[#7674] RFC: WebAssembly-first, eliminate Node.js from ZeroClaw's build and runtime** — 5 条评论
   - 提议彻底消除 ZeroClaw 对 Node.js/npm 的依赖，将供应链攻击面降至最低。该 RFC 已关闭，但已拆分为多个子 RFC（#8132、#8135）继续推进，是 v0.9.0 的核心方向之一。
   - 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7674

3. **[#5808] Bug: Default 32k context budget exceeded by system prompt + tool definitions on iteration 1** — 4 条评论
   - 默认 32k 上下文预算在首轮迭代即被系统提示和工具定义超出约 3.3 倍，导致持续的预emptive trim。这是影响所有默认配置用户的 S1 级阻塞 bug，已标记 in-progress。
   - 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/5808

4. **[#8193] Bug: MCP tools/tool_search missing from TUI sessions while gateway sees them** — 3 条评论
   - MCP 服务器连接正常但 TUI 会话收不到发现的工具，与 #8199 PR 直接相关。反映了 MCP 工具分发链路的断裂问题。
   - 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8193

5. **[#8013] Bug: disabling an agent does not stop its bound Discord channel** — 3 条评论
   - 禁用 agent 后其绑定的 Discord 频道仍在线响应用户消息，构成 S0 级数据丢失/安全风险。已关闭，但暴露了 agent 生命周期管理的严重缺陷。
   - 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8013

6. **[#8059 / #8177] 供应链安全系列 RFC** — 各 3 条评论
   - 涵盖 deny.toml 策略清理、硬件 PGP 签名、SLSA 来源证明等。社区对供应链安全表现出极高关注度，多个 RFC 并行推进。
   - 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8059 | https://github.com/zeroclaw-labs/zeroclaw/issues/8177

### 📌 关键信号

- **安全议题占据主导**：今日 Top 热点中，安全/供应链相关占 60% 以上，社区对零信任架构、SSRF 防护、秘密泄露的诉求非常强烈。
- **RFC 拆分模式成熟**：大 RFC（如 #7674）被系统性地拆分为可独立实现的子 RFC（#8132、#8135），说明维护者的治理流程在有效运作。

---

## 5. Bug 与稳定性

按严重程度（S0 > S1 > S2 > S3）排列今日活跃 Bug：

### S0 — 数据丢失/安全风险

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| **#8013** — 禁用 agent 后 Discord 频道未停止 | 已关闭 | agent 生命周期管理缺陷，已禁用 agent 仍响应消息 | 无明确 PR，已关闭 |

### S1 — 工作流阻塞

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| **#5808** — 默认 32k 上下文预算首轮即超标 | Open, in-progress | 默认配置下首轮迭代即超出上下文预算 3.3x，持续触发 trim | 无 |
| **#8193** — MCP 工具在 TUI 会话中缺失 | Open, accepted | MCP 工具发现正常但 TUI 会话收不到 | **#8199**（待合并） |
| **#7756** — 原生/MCP 工具在 OpenAI/Anthropic 模型轮次不可用 | Open, accepted | 工具注册成功但模型实际未收到工具列表 | 无 |
| **#8154** — Kimi Code Moonshot 端点 404 回归 | Open | `api.moonshot.cn/coder/v1` 已下线，正确地址为 `api.kimi.com/coding/v1` | 无 |

### S2 — 行为降级

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| **#6360** — Telegram 渠道 Prompt Caching 不工作 | Open | CLI 下正常，Telegram 渠道强制全量重处理 prompt | 无 |
| **#7462** — Windows 上 74 个测试失败 | Open | Unix 专用命令、路径语义、控制台编码问题 | 无 |

### S3 — 轻微问题

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| **#7269** — 文档构建警告噪声 | Open, in-progress | rustdoc 和 mdBook 产生多类警告 | 无 |

---

## 6. 功能请求与路线图信号

结合今日活跃 Issues、RFCs 和待合并 PR，以下功能方向大概率纳入 **v0.9.0 或近期版本**：

### 🔴 高置信度（已有 RFC + 活跃 PR）

| 方向 | 相关 Issue/PR | 信号强度 |
|---|---|---|
| **WebAssembly-first 架构**（消除 Node.js 依赖） | #7674 (RFC), #8132 (RFC), #8135 (RFC), #8128 (PR) | ⭐⭐⭐⭐⭐ |
| **供应链安全加固**（SLSA、签名、deny.toml 策略） | #8059, #8177, #8056, #8057 | ⭐⭐⭐⭐⭐ |
| **插件系统安全隔离**（移除原始 env 访问、SSRF 防护） | #8137 (PR), #8128 (PR) | ⭐⭐⭐⭐⭐ |
| **v0.9.0 认证/安全/网关大版本** | #7432 (Tracker) | ⭐⭐⭐⭐⭐ |

### 🟡 中置信度（有明确需求，PR 在途）

| 方向 | 相关 Issue/PR | 信号强度 |
|---|---|---|
| **历史上下文管理简化** | #8196 (PR, XL) | ⭐⭐⭐⭐ |
| **Telegram webhook 模式** | #8046 (Feature) | ⭐⭐⭐ |
| **OpenRouter 模型回退数组** | #8138 (Feature) | ⭐⭐⭐ |
| **Session TTL 自动截断** | #8134 (Feature) | ⭐⭐⭐ |
| **Quickstart 自动 yolo 风险配置** | #8125 (Feature) | ⭐⭐⭐ |
| **本地用户名/密码 AuthProvider** | #8076 (Feature) | ⭐⭐ |

### 🟢 低置信度（讨论阶段）

| 方向 | 相关 Issue | 信号强度 |
|---|---|---|
| **Retire aardvark-sys crate** | #8043 (RFC) | ⭐⭐ |
| **In-app 升级 + 仪表盘重启** | #8170 (RFC) | ⭐⭐ |
| **Zerocode 本地预提交门控** | #8078 (RFC) | ⭐⭐ |

---

## 7. 用户反馈摘要

从今日 Issues 评论和描述中提炼的真实用户声音：

### 😤 痛点

- **"默认配置就崩"**：#5808 反映默认 32k 上下文预算完全不够用，首轮迭代就超标 3.3 倍。用户期望默认配置能开箱即用，而非需要手动调参。
- **"禁用了 agent 还在回消息"**：#8013 暴露了严重的安全/数据风险，用户对 agent 生命周期管理的信任受到冲击。
- **"MCP 工具时有时无"**：#8193 和 #7756 反映了工具分发链路的不稳定性，用户无法确定工具是否会在特定会话中可用。
- **"Windows 上 74 个测试失败"**：#7462 说明 CI 的 Windows 覆盖长期缺失，Windows 用户的体验被忽视。
- **"Telegram 没有 prompt caching"**：#6360 导致 Telegram 用户承担更高的 token 成本和延迟。

### 👍 满意/认可

- **RFC 流程透明**：多个 RFC（如 #7420、#7674）明确标注了 AI 辅助起草和人工审核责任，社区对治理流程的专业性表示认可。
- **安全响应迅速**：#8127（Telegram token 泄露）、#8128（SSRF 防护）等安全 PR 快速响应，体现了维护者对安全问题的重视。
- **新手体验改善诉求**：#8125 提出 quickstart 自动应用 yolo 风险预设，反映了社区对降低上手门槛的关注。

### 🎯 使用场景信号

- **多配置/多环境用户**：#7999 的合并（显示活跃配置目录）反映了用户在多配置环境下切换的频繁需求。
- **企业/团队部署**：#8134（session TTL 自动截断）和 #8013（agent 生命周期管理）反映了团队/企业用户对多租户管理的需求。
- **离线/本地优先用户**：#8076（IdP-less 认证）和 #8125（ylo 模式）反映了无企业 IdP 环境下的用户需求。

---

## 8. 待处理积压

以下长期未响应或处理缓慢的重要 Issue/PR，建议维护者优先关注：

### 🔴 高优先级积压

| Issue | 创建日期 | 等待天数 | 问题描述 | 建议行动 |
|---|---|---|---|---|
| **#5808** — 默认上下文预算超标 | 2026-04-16 | **68 天** | S1 阻塞 bug，默认配置不可用 | 需立即分配 owner，考虑提高默认值或优化系统提示 |
| **#7462** — Windows 74 测试失败 | 2026-06-10 | **13 天** | CI 缺乏 Windows 覆盖 | 需将 Windows 测试纳入 CI 矩阵 |
| **#7756** — MCP 工具在特定模型不可用 | 2026-06-16 | **7 天** | S1 阻塞，影响 OpenAI/Anthropic 用户 | 需调查工具注册与模型轮次之间的交互 |
| **#6360** — Telegram Prompt Caching 失效 | 2026-05-04 | **80 天** | S2 降级，长期未响应 | 需确认是否可修复或需调整架构 |

### 🟡 中优先级积压

| Issue | 创建日期 | 等待天数 | 问题描述 | 建议行动 |
|---|---|---|---|---|
| **#6037** — Cron 任务重复触发 | 2026-04-23 | **61 天** | S1 阻塞，cron 调度器缺陷 | 需实现运行中任务的互斥锁 |
| **#6943** — Plugin System FND-001 目标冲突 | 2026-05-26 | **28 天** | RFC 需解决 Extism vs wasmtime 的方向冲突 | 需维护者明确架构方向 |
| **#8043** — Retire aardvark-sys crate RFC | 2026-06-20 | **3 天** | RFC 待审核 | 需分配 reviewer |

### 📦 PR 积压提醒

当前 **48 条 PR 待合并**，其中多条是安全关键修复（#8128、#8127、#8137、#8009）。建议：
1. 优先审核安全类 PR（SSRF 防护、token 泄露、HMAC 回执）
2. 考虑增加 reviewer 带宽或引入自动化合并策略（如对 CI 通过的 S 级 PR 启用 auto-merge）
3. #8200 集成测试分支已创建，可利用其作为批量验证手段加速审核

---

**日报生成时间：2026-06-23 | 分析师：OWL**
**项目健康度评估：🟡 良好（活跃度高，但 PR 积压和长期 Bug 需关注）**

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*