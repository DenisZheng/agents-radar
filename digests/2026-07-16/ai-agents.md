# OpenClaw 生态日报 2026-07-16

> Issues: 468 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-16 02:01 UTC

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

# OpenClaw 项目日报 | 2026-07-16

---

## 1. 今日速览

*   **整体状态**：项目处于**高强度维护与缺陷修复期**。过去 24 小时内 Issues 更新 468 条（新开/活跃 300，关闭 168），PR 更新 500 条（待合并 323，合并/关闭 177），活跃度极高，但 **Open/Closed 比例接近 2:1**，技术债与回归问题清理压力大。
*   **版本动态**：发布 **v2026.7.2-beta.1**，核心亮点为 **Remote Coding Sessions**（远程编码会话）支持，标志着云端 Worker 与本地终端集成能力迈出关键一步。
*   **核心痛点**：**v2026.7.1 版本引入的网关启动崩溃循环** 是当前最大的稳定性阻塞，涉及遗留状态迁移、内存索引冲突、插件元数据冲突等多个 P0 级 Issue，导致大量用户无法升级或启动服务。
*   **社区热度**：老牌 Issue #75（Linux/Windows 原生 App 缺失）持续高热（113 评论，81 👍），反映跨平台覆盖是长期未满足的核心需求。
*   **开发重心**：PR 队列以 **XS/S 级微修复** 为主（修正解析逻辑、竞态条件、类型安全、配置校验），大型特性 PR 仍在评审等待中，迭代节奏偏向“止血修复”而非“特性交付”。

---

## 2. 版本发布

### 🚀 v2026.7.2-beta.1
*   **发布时间**：2026-07-16 (隶属于今日数据周期)
*   **核心亮点**：
    *   **Remote Coding Sessions (#107670, #107086, #107200)**：
        *   Control UI 会话现可在云端 Worker 上运行。
        *   支持在 Codex / Claude 目录会话的宿主机终端中直接打开。
        *   支持在终端中直接恢复 OpenCode 与 Pi 会话。
    *   **Native Automation & Nodes**：原生自动化与节点能力增强（Release Note 截断，详见完整日志）。
*   **破坏性变更/迁移风险**：
    *   ⚠️ **高风险**：v2026.7.1 存在严重启动回归（见 Bug 部分），**强烈建议生产环境跳过 7.1 直接观察 7.2-beta 稳定性或等待 7.2 正式版**。
    *   远程会话架构变更可能涉及认证、网络策略、会话状态同步协议调整，升级前需备份 `~/.openclaw/state` 与数据库。
*   **链接**：[Release v2026.7.2-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.1)

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响模块 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **#108225** | **Fix (Config)** | 修复配置备份快照因瞬态 I/O 失败（如 `EBUSY` 锁）导致路径永久残留集合中，阻塞后续备份。 | `src/config/backup-rotation.ts` | ✅ **Closed (Merged)** |
| **#108177** | **Fix (MCP)** | 修复 `normalizeToolCallContent` 丢弃 MCP 工具结果中的图片块 `data`/`mimeType` 字段。 | Gateway, MCP | ✅ **Closed (Merged)** |
| **#108190** | **Fix (Agents)** | 移除工具调用 ID 生成中意外的 `slice(0,9)` 截断，恢复 10 字符熵值，降低碰撞风险。 | Agents Core | ✅ **Closed (Merged)** |
| **#108192** | **Fix (Shared)** | 修复 `ignore-rules.ts` 吞噬 `EACCES` 等非 `ENOENT` 文件系统错误，改为重新抛出。 | Shared Utils | ✅ **Closed (Merged)** |
| **#108358** | **Fix (Transcripts)** | 为非流式转录 JSON 解析添加 `try/catch`，防止畸形行导致进程崩溃。 | Transcripts Store | ✅ **Closed (Merged)** |
| **#108551** | **Fix (Gradium)** | 修复语音提供商 `isConfigured` 因非法 `baseUrl` 抛出异常而非返回布尔值。 | Extensions: Gradium | ✅ **Closed (Merged)** |
| **#107847** | **Fix (Docker)** | 修复 Docker 启动脚本 `chown` 追踪符号链接导致宿主机权限篡改风险。 | Docker, Scripts | ✅ **Closed (Merged)** |
| **#107833** | **Fix (CLI Status)** | `status --all` 信任网关实时多账号通道状态，修复配置与运行时状态不一致显示。 | CLI, Gateway | 🟢 **Open (Ready)** |
| **#107845** | **Fix (Codex)** | 转录中标识 Codex-backed 运行，解决运维无法区分 Codex 与标准 OpenAI 运行的问题。 | Codex, Transcripts | 🟢 **Open (Ready)** |
| **#86764** | **Fix (Agents)** | **重大**：用户轮次在外部运行器失败前持久化到内部尝试转录，防止消息丢失。 | Agents, Session State | 🟢 **Open (Ready for Maintainer)** |
| **#101276** | **Feat (Exec)** | **重大**：引入 `deny-over-allow` 执行审批拒绝列表，安全边界增强。 | Exec, Security, MacOS, WebUI | 🟢 **Open (Needs Proof)** |

> **进展评估**：今日合并 PR 多为 **XS 级防御性修复**，有效封堵了崩溃、数据丢失、权限泄露等边缘路径。大型特性（如 #101276 安全模型、#86764 会话持久化、#106832 会话元数据暴露）处于“待评审/需补充证明”状态，**主干推进速度受限于评审吞吐**。

---

## 4. 社区热点：高互动 Issues 深度分析

| Issue | 评论/👍 | 核心诉求 | 标签信号 | 分析 |
| :--- | :--- | :--- | :--- | :--- |
| **[#75] Linux/Windows Clawdbot Apps** | 113 / 81 | **原生桌面客户端缺位** | `enhancement`, `help wanted`, `P2`, `needs-product-decision` | **项目历史遗留最大痛点**。仅支持 macOS/iOS/Android，Linux/Windows 用户被迫用 Web/CLI，体验割裂。需产品决策投入原生或 Electron/TAURI 资源。 |
| **[#104721] 所有工具返回 "(see attached image)"** | 17 / 1 | **工具输出完全被占位符替换** | `bug`, `regression`, `P0`, `impact:message-loss`, `ux-release-blocker` | **v2026.7.1 核心回归**。文件读取、命令执行结果全丢，仅剩字面量字符串。阻断所有自动化流程，必须热修复。 |
| **[#102020] 第二条消息失败 "reply session initialization conflicted"** | 14 / 1 | **会话多轮对话根本性故障** | `bug`, `cross-channel`, `position-dependent` | 首轮正常，次轮即挂。涉及 Signal/Discord 等多通道，疑似会话状态机或锁竞争引入的回归。 |
| **[#107220] 2026.7.1 网关崩溃循环：legacy memory sidecar 冲突** | 8 / 1 | **升级即砖** | `P0`, `crash-loop`, `ux-release-blocker` | **最严重阻塞**。`meta`/`chunks` 冲突被视为致命，而 `files` 冲突却自动修复，策略不一致。`openclaw doctor` 无法修复。 |
| **[#107227] 启动迁移门控致死，doctor 无法修复** | 8 / 3 | **无文档补救路径** | `P0`, `crash-loop`, `ux-release-blocker` | 同根同源 #107220。用户被锁在版本外，无降级指引，信任度受损。 |
| **[#107694] 严格启动迁移警报拦截良性跳过** | 7 / 0 | **误报导致拒绝启动** | `P0`, `data-loss`, `crash-loop` | 迁移警告分级缺失，良性跳过被视为致命。需引入 `warn` vs `fatal` 分级。 |
| **[#94518] DeepSeek 缓存命中率 <10%（6.x 升级后）** | 9 / 10 | **前缀缓存失效** | `P1`, `auth-provider`, `performance` | 边界感知缓存破坏了 DeepSeek 依赖的前缀匹配，成本激增。需提供兼容模式开关。 |
| **[#91009] Codex PreToolUse Hook 狂刷 CPU** | 12 / 2 | **Hook 进程风暴拖垮网关** | `P1`, `crash-loop`, `cpu-bound` | `openclaw-hooks` 短进程高频启动，RPC 阻塞。架构层面需池化或合并调用。 |

---

## 5. Bug 与稳定性：按严重程度分级

### 🔴 P0 / Release Blocker / Crash Loop (必须即刻修复)
1.  **#104721** 工具结果全量丢失 → `(see attached image)` **[无 Fix PR]**
2.  **#107220** / **#107227** / **#107694** / **#103076** / **#107727** / **#107330** **网关启动崩溃循环家族** (遗留状态迁移冲突、插件元数据冲突、迁移警报误判) → **[#108225 修复了备份快照阻塞，但核心迁移冲突逻辑未见 Fix PR]**
3.  **#102020** 会话第二轮消息冲突 → **[无 Fix PR]**
4.  **#107814** (新) `gpt-5.3-codex-spark` 发送空参数工具调用 → **[无 Fix PR]**

### 🟠 P1 / 严重功能缺陷 / 性能劣化
5.  **#106779** llama.cpp 本地提供商 400 解析器生成失败 → **[无 Fix PR]**
6.  **#91009** Codex Hook CPU 风暴 → **[#94870 相关 PR 待评审]**
7.  **#96834** WhatsApp 图片楔入主通道 3 分钟 → **[无 Fix PR]**
8.  **#94518** DeepSeek 缓存命中率暴跌 → **[无 Fix PR]**
9.  **#85103** 模型降级链在配额耗尽时不触发 + 会话接管错误 → **[无 Fix PR]**
10. **#107449** Cron 工具 JSON Schema 与 llama.cpp 解析器不兼容 (`pattern: "\S"`) → **[无 Fix PR]**

### 🟡 P2 / 体验受损 / 数据一致性风险
11. **#11665** Webhook Hook 会话复用失效 (文档与实现不符) → **[有关联 PR #11665? 待验证]**
12. **#93139** `write`/`exec` heredoc 插入字面 `\n` → **[无 Fix PR]**
13. **#67915** 本地附件误判 "Outside allowed folders" → **[无 Fix PR]**
14. **#91532** Cron 隔离会话工具级错误误判整体失败 → **[无 Fix PR]**
15. **#98753** CLI 健康检查/列表命令触发网关 WS 1006 关闭 → **[无 Fix PR]**

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 社区热度 | 现有 PR 支撑 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Linux/Windows 原生 App** | #75 | ⭐⭐⭐⭐⭐ (81👍) | 无 | 低 | 需产品决策 (`needs-product-decision`)，非工程可单独解决。 |
| **执行审批 `deny-over-allow` 拒绝列表** | #6615 / #101276 | ⭐⭐⭐ | **#101276 (XL, Ready)** | **高** | 安全边界核心需求，PR 已备齐，待维护者评审合并。 |
| **会话可读元数据暴露 (解耦内部 Key)** | #106793 | ⭐⭐⭐ | **#106832 (L, Waiting Author)** | 中 | 客户端生态建设关键，PR 作者需响应评审意见。 |
| **智能多模型路由/成本优化** | #107686 | ⭐ | 无 | 低 | 新增 Issue，属长期规划，需架构设计。 |
| **MEMORY.md 生命周期感知策划** | #87660 | ⭐⭐ | 无 | 中 | 记忆系统演进方向，无 PR 但标签清晰。 |
| **Webhook Hook 多轮会话复用** | #11665 | ⭐⭐ | 无 | 中 | 文档承诺未兑现，修复成本低，收益高。 |
| **iOS 后台模式 `location` 权限补全** |

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-07-16）

---

## 1. 生态全景

当前生态呈现**“头部重构、腰部交付、长尾停滞”**的三层结构。OpenClaw、IronClaw、Hermes Agent、NanoBot 等头部项目正经历大规模架构重写与安全审计，技术债偿还压力极大，版本发布呈“高频 Beta、低频稳定态”；NanoClaw、Moltis、CoPaw 等腰部项目已完成核心架构定型，进入多 Provider 接入、记忆体系落地、ACP 协议适配的功能交付期；LobsterAI 等产品化项目在商业化探索（广告植入）与用户体验边界博弈。**会话状态一致性、多模型/多协议互操作（ACP）、原生跨平台部署**是全生态共性的硬仗，**安全基线建设**已从事后补丁转为架构级前置约束。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 (新/活跃/关闭) | PRs 更新 (待合并/合并/关闭) | 今日 Release | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 468 (300/168) | 500 (323/177) | **v2026.7.2-beta.1** | ⭐⭐⭐☆☆ (高负债) | 远程编码会话、崩溃循环阻塞、技术债高强度止血 |
| **NanoBot** | ~51 (含 21 关闭) | 11 合并 / 16 待合并 | 无 | ⭐⭐⭐⭐☆ (偿债期) | 安全审计 42 项清零、统一会话稳定性、架构重构 |
| **Hermes Agent** | 50 (22 关闭) | 50 (0 合并/50 待合并) | 无 | ⭐⭐⭐☆☆ (评审瓶颈) | 插件接口扩展、会话一致性、零合并吞吐 |
| **IronClaw** | 23 活动 | 38 更新 (多 XL 级) | 无 (积压 #5598) | ⭐⭐⭐⭐☆ (架构决战) | Reborn 统一运行时、V1 清理、Slack 稳定性危机 |
| **NanoClaw** | 2 新 / 11 PR | 4 合并 / 7 待合并 | 无 | ⭐⭐⭐⭐☆ (交付期) | OpenCode Provider、Provider-agnostic Memory、部署自动化 |
| **Moltis** | 1 更新 | 6 全部合并 | 无 | ⭐⭐⭐⭐⭐ (高效交付) | ACP 代理自动检测、能力驱动上下文窗口、非 systemd 支持 |
| **CoPaw/QwenPaw** | 50 (19/31) | 43 (21/22) | 无 (当前 v2.0.0.post2) | ⭐⭐⭐⭐☆ (修复期) | v2.0 失忆/渲染回归修复、ReMe 记忆、Chrome 插件、信创适配 |
| **LobsterAI** | 5 关闭 (Stale) + 1 新 | 11 全部合并 | **v2026.7.15** | ⭐⭐⭐⭐☆ (产品化) | Web Installer、更新阻塞层、模型更新、**广告争议** |
| **PicoClaw** | 3 新 / 3 关闭 | 2 待合并 / 0 合并 | 无 (v0.3.1 停 13 天) | ⭐⭐☆☆☆ (真空期) | ARM64 缺失、Hook 反序列化失效、发布工程缺位 |
| **TinyClaw** | 0 | 1 待合并 | 无 | ⭐☆☆☆☆ (维护态) | CLI 微修复、社区零互动 |
| **NullClaw / ZeptoClaw** | 0 | 0 | 无 | ⭐☆☆☆☆ (休眠) | 无活动 |
| **ZeroClaw** | 数据获取失败 | - | - | - | - |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
*   **规模与野心最大**：单日 Issue/PR 吞吐量是其他项目总和的数倍，**Remote Coding Sessions (云端 Worker + 本地终端)** 确立了“云原生 IDE 代理”差异化护城河。
*   **生态中心地位**：OpenClaw 的插件机制、MCP 网关、会话协议正在成为下游项目（NanoClaw、PicoClaw 等）对齐的事实标准。

### 技术路线差异
*   **重运行时、重状态**：采用复杂的本地网关 + 云端 Worker 混合架构，引入遗留状态迁移、内存索引、插件元数据等强状态组件，导致升级崩溃循环（P0 级）成为常态化风险——**这是“平台级”项目的必经之痛**。
*   **原生 App 缺位**：Issue #75（Linux/Windows 原生 App，81👍）长期未决，反映其“Web/CLI 优先、桌面端外包/延后”的策略与 IronClaw、Hermes、CoPaw 的“Tauri/Electron 原生优先”形成鲜明对比。

### 社区规模
*   **核心贡献者极度集中**：高强度维护依赖极少数 Core Maintainer，评审吞吐成为主干推进瓶颈（Open/Closed ≈ 2:1）。
*   **用户痛点聚焦于“可用性而非功能”**：社区高热 Issue 多为回归 Bug、升级受阻、跨平台缺失，而非功能请求。

---

## 4. 共同关注的技术方向（多项目共振信号）

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **会话/状态一致性与持久化** | **OpenClaw** (迁移冲突/崩溃循环), **NanoBot** (统一会话心跳崩溃 #4924), **Hermes** (Desktop 会话漂移/Checkpoint 恢复), **CoPaw** (v2.0 严重失忆/Compact 失效 #6148), **NanoClaw** (Provider-agnostic Memory #3012), **Moltis** (能力驱动上下文窗口 #1150) | **全生态 P0 级痛点**。核心矛盾：长上下文压缩、多设备/多渠道状态同步、升级迁移原子性、断点续跑可靠性。 |
| **ACP / 多协议互操作** | **Moltis** (自动检测 13 种 ACP 代理 #1149), **IronClaw** (Reborn 统一泛型扩展运行时 #6116), **NanoClaw** (OpenCode Provider #3056), **Hermes** (Provider/Model 清单脚本化 #23359), **CoPaw** (MCP

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-07-16

> 数据范围：2026-07-15 至 2026-07-16 UTC | 数据来源：HKUDS/nanobot GitHub API

---

## 1. 今日速览

- **整体状态**：项目处于**高强度安全加固与架构重构期**。过去 24 小时无新版本发布，但合并/关闭了 11 个 PR、关闭 21 个 Issue，活跃度极高（Issue/PR 更新总计 51 条）。
- **核心动向**：集中解决 `hamb1y` 深度审计（Issue #4815）暴露的 42 项安全/正确性问题，覆盖授权绕过、会话隔离、并发键泄露、多模态消息崩溃、配置回退静默失败等高危缺陷。
- **新功能并行**：心跳触发器（PR #4620）、会话级本地触发器（PR #4942）、Render 一键部署（PR #4937）、Telegram 自定义 Bot API（PR #4919）等特性同步推进。
- **风险提示**：仍有 16 个 PR 待合并，其中多个标记 `conflict`（如 #4918、#4822），需关注合并冲突对主分支稳定性的影响；新增 Bug #4924（统一会话心跳崩溃）与 #4934（Qwen 思维链泄露）已有对应 Fix PR（#4928、#4946）。
- **健康度评估**：⭐⭐⭐⭐☆（安全债务快速偿还中，架构整理力度大，但并发 PR 多、冲突多，需把控合并节奏）。

---

## 2. 版本发布

**无新版本发布**。当前主分支积累大量安全修复与重构，预计近期将切 v0.x.0 或 v1.0.0-rc 里程碑版本。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR 与 Issue

| 类别 | 编号 | 标题/摘要 | 影响面 | 状态 |
|------|------|-----------|--------|------|
| **安全-授权绕过** | #4779 | `process_direct()` 绕过所有渠道 `is_allowed()`，影响 6+ 调用链 | 核心安全 | ✅ Closed |
| **安全-系统渠道** | #4778 | `system` 渠道零鉴权直达 `_process_system_message()` | 核心安全 | ✅ Closed |
| **安全-命令越权** | #4777 | `/stop` 按 `channel:chat_id` 取消任务，群聊/统一会话可踢他人任务 | 多用户隔离 | ✅ Closed |
| **安全-重启漏洞** | #4776 | `/restart` 无鉴权，配对用户即可 DoS 全进程 | 可用性/安全 | ✅ Closed |
| **安全-消息工具** | #4076 | `message` 工具缺出站鉴权、允许任意绝对媒体路径 | 工具安全 | ✅ Closed |
| **安全-Dream 技能** | #4075 | Dream 可覆盖用户技能，缺所有权强制检查 | 数据完整性 | ✅ Closed |
| **正确性-多模态崩溃** | #4800 | `.strip()` 作用于 `list[dict]` 导致 `AttributeError` | 稳定性 | ✅ Closed / PR #4813 Merged |
| **正确性-Cron 会话复用** | #4082 | 定时任务复用固定 `cron:{job.id}` 会话键导致上下文污染 | 定时任务隔离 | ✅ Closed |
| **正确性-ExecSession 单例** | #4793 | 全局 `DEFAULT_EXEC_SESSION_MANAGER` 跨 AgentLoop 泄露会话数据 | 会话隔离 | ✅ Closed / PR #4862 Open |
| **正确性-弱引用锁失效** | #4789 | `WeakValueDictionary` 存 `asyncio.Lock` 可能被 GC 破坏互斥 | 并发安全 | ✅ Closed |
| **正确性-配置静默回退** | #4067 | 无效配置静默回退默认值，行为突变 | 运维可观测性 | ✅ Closed |
| **性能-深拷贝滥用** | #4808 | `json.loads(json.dumps())` 替代 `copy.deepcopy()`，3 处热点 | 性能/类型安全 | ✅ Closed |
| **性能-setdefault 分配** | #4809 | `kwargs.setdefault("extra_body", {}).update()` 热点重复分配 | LLM 请求延迟 | ✅ Closed |
| **重构-渠道基类** | #4807 | 16 个渠道重复 `__init__` 提取至 `BaseChannel` | 代码可维护性 | ✅ Closed |
| **重构-Markdown 复用** | #4810 / PR #4870 | 3 渠道 100-200 行 Markdown 转换器抽取共享工具 | 代码复用 | ✅ Closed / PR #4870 Merged |
| **重构-死代码清理** | #4806 | 移除 11 孤儿函数、8 测试函数、3 未用导出 | 代码库体积 | ✅ Closed |
| **修复-WebUI 活动计时** | PR #4649 | 修正 WebUI “Working for…” 计时起点 | 用户体验 | ✅ Merged |
| **修复-Codex 代理** | PR #4943 | 统一传播 Codex 代理配置至 OAuth 与 HTTP | 网络配置 | ✅ Merged |
| **修复-网关关闭序** | PR #4944 | 先停渠道再排空任务，修复 DingTalk 等 SDK 吞异常 | 优雅关闭 | ✅ Merged |
| **依赖-Feishu SDK** | PR #4926 | `dev` extra 增加 `lark-oapi` | 开发体验 | ✅ Merged |

> **进展小结**：单日关闭 21 个 Issue、合并 11 个 PR，**安全债务偿还率 100%（审计 42 项中 12 项今日结清）**，核心授权、隔离、稳定性缺陷基本清零。架构层面完成渠道基类、Markdown 工具、配置仓库（PR #4918 仍在 Review）等重构基石。

---

## 4. 社区热点 —— 高互动 Issue/PR

| 编号 | 类型 | 评论/👍 | 核心诉求 | 链接 |
|------|------|---------|----------|------|
| #4815 | Issue (Audit) | 1 / 0 | **全量安全审计汇总**——42 项发现，引发连锁 Issue/PR，社区核心关注点 | [#4815](https://github.com/HKUDS/nanobot/issues/4815) |
| #4924 | Issue (Bug) | 4 / 0 | **统一会话心跳崩溃**——`unifiedSession: true` 且无历史会话时 `_pick_heartbeat_target_from_sessions` 抛异常，阻断网关启动 | [#4924](https://github.com/HKUDS/nanobot/issues/4924) |
| #4934 | Issue (Bug) | 1 / 0 | **Qwen 思维链泄露**——`qwen3.6-flash` 等模型推理内容直接回显，污染对话 | [#4934](https://github.com/HKUDS/nanobot/issues/4934) |
| #4940 | Issue (Bug) | 0 / 0 | **WebUI `workspace_scope` 丢失**——旧会话文件名兼容性缺失，重启后项目路径丢失 | [#4940](https://github.com/HKUDS/nanobot/issues/4940) |
| #4918 | PR (Refactor) | - / - | **配置持久化仓库化**——`FileConfigRepository` 统管读写、校验、版本、原子写入，解决 `${VAR}` 回写泄密，**标记 conflict** | [#4918](https://github.com/HKUDS/nanobot/pull/4918) |
| #4928 | PR (Fix) | - / - | **心跳路由修复**——持久化最后用户渠道路由，拒绝 CLI/system/禁用渠道，**直接对应 #4924** | [#4928](https://github.com/HKUDS/nanobot/pull/4928) |
| #4946 | PR (Fix) | - / - | **Qwen 思维模型控制**——新增 `_QWEN_THINKING_MODELS` 列表，自动抑制 reasoning 内容，**对应 #4934** | [#4946](https://github.com/HKUDS/nanobot/pull/4946) |

**分析**：社区焦点集中在 **“审计落地落地再落地”** 与 **“统一会话/多模态/新模型兼容性”** 两大主线。#4924 评论数最多（4 条），说明统一会话模式下的心跳机制是当前用户最易触发的阻断性 Bug。

---

## 5. Bug 与稳定性 —— 今日新报告/回归（按严重度）

| 严重度 | 编号 | 现象 | 影响范围 | Fix PR 状态 |
|--------|------|------|----------|-------------|
| 🔴 **Critical** | #4924 | 统一会话+空历史 → 网关心跳线程崩溃 → 服务不可用 | 所有开启 `unifiedSession` 的新部署 | **PR #4928 Open**（已标 `priority: p1`） |
| 🔴 **Critical** | #4934 | Qwen 3.x 思维链直接回显用户可见，响应延迟升高 | 使用 DashScope/Qwen 系列模型的所有会话 | **PR #4946 Open**（`priority: p2`） |
| 🟠 **High** | #4940 | WebUI 旧会话重启后丢失 `workspace_scope`（项目路径） | 升级用户、历史会话迁移 | 无 PR，**需补兼容读取逻辑** |
| 🟡 **Medium** | - | 无其他新高危 Bug；其余已关闭 Issue 均为审计存量 | - | - |

> **回归风险提示**：PR #4918（配置仓库重构）与 #4822（WebUI 自动化源保留）均标 `conflict`，合并后需回归配置热加载、WebUI 流式记录、多渠道启动流程。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 对应 PR/进展 | 纳入下一版本可能性 |
|----------|----------|--------------|---------------------|
| #3437 / PR #4620 | **心跳触发器 CLI/定时器统一**——Phase 1 LLM 决策、任务摘要、工作区锁 | PR #4620 Open（大型特性，持续迭代） | ⭐⭐⭐⭐☆（核心自动化能力） |
| #4702 / PR #4919 | **Telegram 自定义 Bot API Base URL/Headers**——自建/企业网关支持 | PR #4919 Open（`priority: p2`，测试完备） | ⭐⭐⭐⭐☆（企业级部署刚需） |
| PR #4942 | **会话级本地触发器**——Agent 可动态增删 `local_trigger`，技能文档化 | PR #4942 Open（新工具+技能） | ⭐⭐⭐☆（增强 Agent 自主性） |
| PR #4937 | **Render 一键部署 Blueprint**——网关+WebUI 单服务、持久化磁盘 | PR #4937 Open（文档+CI/CD） | ⭐⭐⭐☆（降低部署门槛） |
| PR #4945 | **项目指令作用域收敛+默认 Prompt 裁剪**——仅加载当前项目 `AGENTS.md`、懒加载技能 | PR #4945 Open（`priority: p1`，性能+Token 省） | ⭐⭐⭐⭐⭐（核心体验优化） |

**路线图推测**：下一版本（v0.12 / v1.0-rc）将聚焦 **“安全基线达标 + 统一会话稳定 + 部署分发易用性”**，心跳触发器、本地触发器、Render 部署为差异化特性。

---

## 7. 用户反馈摘要 —— 从评论中提炼的真实痛点

| 痛点 | 代表性声音（Issue/PR 评论意译） | 关联编号 |
|------|----------------------------------|----------|
| **统一会话模式下心跳即崩** | “刚开 `unifiedSession` 就起不来网关，日志里全是 `_pick_heartbeat_target_from_sessions` 抛异常” | #4924 |
| **Qwen 模型“思考”刷屏** | “`qwen3.6-flash` 回复里全是 `<thinking>...</thinking>`，用户根本看不懂，延迟还高” | #4934 |
| **WebUI 升级后项目路径丢** | “重启后侧边栏还在，但打开会话发现 `workspace_scope` 变回默认，得手动改” | #4940 |
| **配置修改后不敢重启** | “之前改配置重启会静默回退默认值（#4067），现在审计修了但愿别再复发” | #4067 / #4918 |
| **Telegram 自建 API 无法用** | “公司内网部署得走自建 Bot API，硬编码 `api.telegram.org` 完全跑不通” | #4702 / #4919 |

**满意度信号**：审计修复速度获隐性好评（Issue 关闭快、PR 质量高）；但 **统一会话、多模态、新模型兼容** 三大场景仍是“踩坑高发区”，文档与迁移指南滞后。

---

## 8. 待处理积压 —— 长

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-16

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时共有 **50 个 Issue** 与 **50 个 PR** 产生更新，且无一 PR 被合并/关闭，呈现“并行开发、批量评审”态势。  
- **零版本发布**：今日无新 Release，主分支仍在积累修复与功能增量。  
- **核心主题聚焦**：插件接口扩展（#64182）、会话/状态一致性修复（Desktop、Telegram、Subagent）、安全加固（备份、缓存权限）、跨平台兼容性（Windows 控制台、macOS 路径、Linux node-pty）、CLI 结构化输出与工具超时可配置化。  
- **社区参与度**：Issue #64182（插件接口扩展）获 12 条评论，Issue #3326（CLI JSON 输出）获 5 个 👍，显示社区对可编程化与扩展性的强烈诉求。  
- **整体健康度**：Issue 关闭率 44%（22/50），PR 积压 50 个待合并，审查吞吐可能成为下一阶段瓶颈。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展

> **注意**：数据中显示“过去 24 小时 PR 更新：50 条（待合并: 50，已合并/关闭: 0）”，因此本节列出**今日活跃度最高、最可能进入下一版本**的 PR，而非已合并 PR。

| PR | 类型 | 核心变更 | 关联 Issue | 影响面 |
|----|------|----------|------------|--------|
| [#64205](https://github.com/NousResearch/hermes-agent/pull/64205) | Security | 备份写入原子化、目录权限收敛、审批记录显式权限 | — | 全平台数据完整性 |
| [#64192](https://github.com/NousResearch/hermes-agent/pull/64192) | Bug/Security | Kanban 分派前拦截非法 assignee，复用 profile 校验器 | — | 任务调度安全 |
| [#65318](https://github.com/NousResearch/hermes-agent/pull/65318) | Bug | 后台任务上报前先关闭，引入 3h 协作预算 | — | 网关稳定性 |
| [#65206](https://github.com/NousResearch/hermes-agent/pull/65206) | CI/Feature | 语义化 `package-lock.json` 差异作为 PR 评论自动更新 | — | 依赖审查效率 |
| [#64202](https://github.com/NousResearch/hermes-agent/pull/64202) | Security | 模型缓存/元数据写入 `0600` 权限，原子 JSON 写入 | — | 本地凭证泄露风险 |
| [#64195](https://github.com/NousResearch/hermes-agent/pull/64195) | Bug | Desktop 首启迁移 legacy 信号到 `active-profile.json` | #64160 | 多配置用户体验 |
| [#64188](https://github.com/NousResearch/hermes-agent/pull/64188) | Bug/Infra | 插件 Hook/Middleware 惰性发现与可靠投递（Phase-0） | #64178, #64182 | 插件生态基石 |
| [#64189](https://github.com/NousResearch/hermes-agent/pull/64189) | Bug/Infra | 插件发现后重新拉取 SecretSource（Phase-1） | #64177, #64182 | 插件凭证管理 |
| [#64171](https://github.com/NousResearch/hermes-agent/pull/64171) | Perf | Token 统计移出热路径，异步批量写入 | — | 高并发延迟降低 |
| [#64175](https://github.com/NousResearch/hermes-agent/pull/64175) | Security | 包管理器卸载纳入危险命令审批流 | — | 供应链安全 |

**进展评估**：安全加固（4 个 PR）、插件基建（2 个 PR）、Desktop 会话一致性（2 个 PR）、跨平台兼容（3 个 PR）并行推进，主分支代码质量显著提升，但合并吞吐为零，建议本周安排专门合并窗口。

---

## 4. 社区热点

| Issue | 状态 | 评论/👍 | 核心诉求 | 分析 |
|-------|------|---------|----------|------|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | OPEN | 12 评论 | **插件接口扩展总跟踪** —— 社区希望稳定、可发布的插件 API，解决长期积压 PR | 已衍生 #64177、#64178 两个子 Issue 与对应 PR（见 #64188、#64189），核心维护者 teknium1 主导，极大概率纳入 v0.19 |
| [#3326](https://github.com/NousResearch/hermes-agent/issues/3326) | OPEN | 2 评论 / 5 👍 | **CLI `--output-format json`** —— CI/MCP/Symphony 等编排场景需结构化输出 | 高 👍 且长期开放（2026-03 创建），属“纸面功能”长期未落地，建议优先级提至 P2 |
| [#23359](https://github.com/NousResearch/hermes-agent/issues/23359) | OPEN | 4 评论 | **Provider/Model 清单可脚本化** —— 5 个 PR 重复造轮子、4 个 Issue 被阻塞 | 典型“内部碎片化”痛点，解决后可统一 CLI/TUI/Web/API 入口，建议列入 v0.19 路线图 |
| [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) | CLOSED | 5 评论 | **Telegram DM Topic 模式下根大厅吞噬 Kanban 唤醒事件** | 已关闭且标记 `sweeper:cannot-reproduce`，但涉及会话状态与消息投递核心链路，需回归测试覆盖 |
| [#44771](https://github.com/NousResearch/hermes-agent/issues/44771) | OPEN | 2 评论 | **Curator 因 symlink 技能簇陷 4h 循环，耗 91M tokens** | 严重资源泄漏，触发速率限制；涉及技能去重与文件系统遍历，建议引入 symlink 守卫与 token 预算 |

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 关键症状 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0** | [#63712](https://github.com/NousResearch/hermes-agent/issues/63712) | CLOSED | `AsyncSessionDB` 方法未 `await` 导致写入丢失 + `RuntimeWarning` | ✅ `sweeper:implemented-on-main` |
| **P2** | [#64201](https://github.com/NousResearch/hermes-agent/issues/64201) | CLOSED | 主流式输出时 Subagent 结果丢失 | ✅ `sweeper:implemented-on-main` |
| **P2** | [#63680](https://github.com/NousResearch/hermes-agent/issues/63680) | CLOSED | `provider: custom` 不传工具定义，`tool_turns=0` | ✅ `sweeper:implemented-on-main` |
| **P2** | [#63698](https://github.com/NousResearch/hermes-agent/issues/63698) | CLOSED | Windows `windows_hide_console: true` 仍闪黑框 | ✅ `sweeper:implemented-on-main` |
| **P2** | [#64789](https://github.com/NousResearch/hermes-agent/issues/64789) | OPEN | Desktop `prompt.submit` 可能命中陈旧 runtime A | ❌ 无 PR，需关注会话三元组一致性 |
| **P2** | [#65297](https://github.com/NousResearch/hermes-agent/issues/65297) | OPEN | Desktop 粘贴图片：`image.attach` 与 `prompt.submit` 会话 ID 漂移 | ❌ 无 PR，同会话状态分裂 |
| **P2** | [#52514](https://github.com/NousResearch/hermes-agent/issues/52514) | OPEN | 检查点恢复报错 “target user message no longer in session history” | ❌ 无 PR，长期未解 |
| **P2** | [#65034](https://github.com/NousResearch/hermes-agent/issues/65034) | OPEN | Dashboard 全量备份静默失败（CLI 参数不匹配） | ❌ 无 PR，运维高频场景 |
| **P2** | [#63805](https://github.com/NousResearch/hermes-agent/issues/63805) | CLOSED | Linux Desktop 缺 `node-pty` linux-x64 预编译 | ✅ `sweeper:implemented-on-main` |
| **P3** | [#64079](https://github.com/NousResearch/hermes-agent/issues/64079) | CLOSED | Studio 自动更新后嵌入 Python 缺 pip 依赖（二次发生） | ✅ `sweeper:implemented-on-main` |

**趋势**：会话/状态一致性类 Bug 占比高（Desktop、Subagent、Telegram、Checkpoint），且多为“已在主分支修复但未回归测试/发布”；Windows/Linux 平台适配问题持续收敛。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 现有 PR/实现迹象 | 入版概率 |
|------|-------|----------|------------------|----------|
| 插件接口扩展（稳定 API、SecretSource、Hook 投递） | #64182 | ⭐⭐⭐⭐⭐ (12 评论) | #64188、#64189 已开 PR，Phase-0/1 并行 | **极高** (v0.19 核心) |
| CLI `--output-format json` | #3326 | ⭐⭐⭐⭐ (5 👍) | 无 PR，长期搁置 | **中** (需主动认领) |
| Provider/Model 清单脚本化接口 | #23359 | ⭐⭐⭐ (4 评论) | 无 PR，但阻塞 4 Issue/5 PR | **高** (消除内部碎片) |
| `delegate_task`/`delegate_subagent` 超时可配置 | #64089 | ⭐⭐ (2 评论) | 标记 `duplicate` 且 `sweeper:implemented-on-main` | **已落地主分支** |
| Desktop 右侧预览默认视图可配置 | #64666 | ⭐⭐ (2 评论) | 无 PR | **中** (UX 细节) |
| OpenAI 图像端点/凭证配置化 | #65309 | ⭐ (1 评论) | 无 PR | **低** (小众) |
| MiniMax highspeed 模型变体 | #11367 | ⭐ (1 评论) | 无 PR，仅需增模型列表 | **高** (低成本) |
| 保留用户自定义跨版本更新 | #63923 | ⭐⭐ (2 评论) | 

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-16

> **数据周期**：2026-07-15 00:00 – 2026-07-15 23:59 (UTC)  
> **数据来源**：GitHub Issues / PRs / Releases API  
> **维护者提示**：当前无合并 PR，代码库处于“积累变更”阶段；ARM64 缺失与 Hook 反序列化缺陷为今日最高优先级阻塞项。

---

## 1. 今日速览
- **活跃度评级**：⭐⭐☆☆☆ (低) — 过去 24 h 仅 3 个新 Issue、2 个新 PR，且均未合并；3 个旧 Issue 被标记 `[stale]` 批量关闭，实质推进有限。
- **核心动向**：社区关注点集中在 **ARM64 发布缺失**、**Process Hook 反序列化缺陷** 与 **Gateway 无状态会话** 三大刚需；文档微调与 DeltaChat 重构 PR 处于等待 Review 状态。
- **风险信号**：v0.3.1 发布后一周内未出补丁版本，ARM64 用户无法安装、Hook 机制失效，可能影响边缘设备与自动化场景的用户留存。

---

## 2. 版本发布
> **今日无新版本发布**。最近稳定版仍为 **v0.3.1 (2026-07-03)**。

---

## 3. 项目进展
| PR | 标题 | 状态 | 影响面 | 进展说明 |
|----|------|------|--------|----------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | `refactor(deltachat): cleanup implementation, documentation -200LOC` | **Open** (2026-07-03 → 2026-07-15 更新) | DeltaChat 适配层、认证流程、测试覆盖 | 删除遗留密码登录、硬编码中继列表；重命名字段并新增 `show_invite_link`。需 Review 通过后合并，可减少 ~200 LOC 并修复潜在安全隐患。 |
| [#3259](https://github.com/sipeed/picoclaw/pull/3259) | `Update PicoClaw description for parallelization` | **Open** (2026-07-15) | README / 项目元数据 | 仅文案微调，标注并行化优势；无代码变更，优先级极低。 |

> **合并/关闭 PR**：**0** 个。代码库在过去 24 h 无实质推进。

---

## 4. 社区热点
| 排名 | Issue/PR | 评论数 | 👍 | 核心诉求 |
|------|----------|--------|-----|----------|
| 1 | [#3153](https://github.com/sipeed/picoclaw/issues/3153) `[CLOSED]` | 4 | 0 | Volcengine Doubao Seed `tool_call` 泄漏为明文；已标记 `[stale]` 关闭，但未见 Fix Commit，用户可能仍受影响。 |
| 2 | [#3197](https://github.com/sipeed/picoclaw/issues/3197) / [#3196](https://github.com/sipeed/picoclaw/issues/3196) `[CLOSED]` | 各 2 | 0 | Codex / Antygravity OAuth 登录失败；同为 `[stale]` 批量关闭，缺乏根因分析。 |
| 3 | [#3260](https://github.com/sipeed/picoclaw/issues/3260) | 0 | 0 | **ARM64 Launcher 缺失** —— 树莓派 3B / Raspbian aarch64 无法安装，阻塞边缘部署。 |
| 4 | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | 0 | 0 | **Process Hook `before_tool` 反序列化缺陷** —— `decision` 字段丢失、`args` 解析错误，自动化流程不可用。 |
| 5 | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | 0 | 0 | Gateway 模式需 **无状态/无历史会话** 支持，便于 CLI 短链接调用。 |

> **洞见**：高互动 Issue 均为 `[stale]` 关闭的旧 Bug，反映维护端“清理积压”大于“解决问题”；新开的三个 0 评论 Issue 均为 **P0 阻塞型**，亟需维护者介入分流。

---

## 5. Bug 与稳定性
| 严重度 | Issue | 标题 | 环境 | 是否有 Fix PR | 备注 |
|--------|-------|------|------|---------------|------|
| **P0 - 阻塞** | [#3260](https://github.com/sipeed/picoclaw/issues/3260) | ARM64 Launcher 缺失 | Raspbian aarch64 / RPi 3B / v0.3.1 | ❌ | 官网下载页无 ARM64 资产，CI/CD 发布矩阵疑似遗漏 `linux/arm64`。 |
| **P0 - 功能失效** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Hook `before_tool` 反序列化缺陷 | Ubuntu 22.04 / DeepSeek / Telegram / v0.3.1 | ❌ | `decision` 字段被丢弃、`args` 误解析，导致工具拦截/改写完全失效。 |
| **P1 - 遗留未决** | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Doubao Seed `tool_call` 明文泄漏 | Volcengine / doubao-seed-2.0-pro / v0.2.8 | ❌ | 已 `[stale]` 关闭，但无修复记录；若用户回滚版本仍会复现。 |
| **P1 - 认证失效** | [#3196](https://github.com/sipeed/picoclaw/issues/3196) / [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Codex / Antygravity OAuth 失败 | v0.2.9 | ❌ | 同为 `[stale]` 关闭，认证链路可能随上游变更失效。 |

---

## 6. 功能请求与路线图信号
| 需求 | Issue | 关联 PR / 实现线索 | 纳入下一版本可能性 |
|------|-------|---------------------|---------------------|
| **Gateway 无状态会话** | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | 无 PR | 🟡 **中** — 符合 “Agent/Gateway 统一会话模型” 长期规划，实现成本低（仅需 session key 生成策略可配置）。 |
| **DeltaChat 现代化重构** | — | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 🟢 **高** — PR 已就绪，清理债务并修复安全项，Review 通过即可合并进 v0.3.2。 |
| **ARM64 发布自动化** | [#3260](https://github.com/sipeed/picoclaw/issues/3260) | 无 PR | 🔴 **必须** — 非功能性需求，属发布工程修复，预计下一 Patch 必含。 |
| **Hook 反序列化修复** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | 无 PR | 🔴 **必须** — 核心扩展点失效，优先级并列 ARM64。 |

---

## 7. 用户反馈摘要
| 场景 | 痛点原话 (摘自 Issue) | 情感倾向 |
|------|------------------------|----------|
| **边缘部署** | “Downloaded the ARM64 from picoclaw.io … launcher doesn’t exist” ([#3260](https://github.com/sipeed/picoclaw/issues/3260)) | 😡 **强烈不满** — 官网给出 ARM64 下载入口却无产物，信任度受损。 |
| **自动化 Hook** | “decision field discarded, args misparsed due to deserialization defect” ([#3258](https://github.com/sipeed/picoclaw/issues/3258)) | 😰 **焦虑** — 核心扩展机制失效，无法进行工具拦截/审计。 |
| **Gateway 集成** | “In gateway mode, the session key is derived from channel/chat_id … need stateless mode” ([#3257](https://github.com/sipeed/picoclaw/issues/3257)) | 🤔 **建设性** — 明确给出 CLI 对比场景，期望最小改动满足无状态调用。 |
| **旧版遗留** | “tool calls are sometimes returned to the user as raw `<seed:tool_call>` text” ([#3153](https://github.com/sipeed/picoclaw/issues/3153)) | 😕 **无奈** — 被 `[stale]` 关闭但未修复，用户仅能回避或降级。 |

---

## 8. 待处理积压 (Action Required)
| 项目 | 类型 | 滞留时长 | 建议动作 | 责任建议 |
|------|------|----------|----------|----------|
| [#3260](https://github.com/sipeed/picoclaw/issues/3260) | Bug (P0) | 0 天 (新开) | 1️⃣ 检查 CI `release.yml` 是否包含 `linux/arm64`；2️⃣ 补发 v0.3.1-arm64 资产或发布 v0.3.1-hotfix.1。 | @release-engineers |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Bug (P0) | 0 天 (新开) | 复现 Hook 反序列化流程，定位 `before_tool` 参数绑定代码；提交回归测试。 | @core-maintainers |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR (Refactor) | 13 天 | 安排 Code Review，合并后同步更新 CHANGELOG 与文档。 | @trufae / @reviewers |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Bug (P1) | 24 天 | 确认是否已在 v0.3.1 中修复；若未修复，重新打开并纳入里程碑。 | @triage-team |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | Feature | 0 天 | 评估实现成本，若 ≤ 1 SP 可纳入 v0.3.2；否则标记 `good first issue` 招募贡献。 | @product-owner |

---

### 📌 维护者行动清单 (Next 24h)
1. **立即**：在 CI/CD 中启用 `linux/arm64` 构建并推送补丁包，解除 #3260 阻塞。  
2. **今日内**：指派核心成员复现 #3258，产出最小复现用例与 Fix 分支。  
3. **本周内**：完成 #3222 Review 合并，释放 DeltaChat 债务清理红利。  
4. **持续**：建立 “stale 关闭复查” 机制，避免 #3153 / #3196 类回归被静默忽略。

> **健康度结论**：代码库处于 **“发布后真空期”** —— 关键平台缺失、核心扩展点失效，且无 Patch 计划可见。建议尽快切入 **v0.3.2-hotfix** 迭代，恢复用户信心。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-16

> 数据统计窗口：2026-07-15 00:00 – 2026-07-15 23:59 (UTC)  
> 数据来源：GitHub Issues / PRs / Releases API

---

## 1. 今日速览

- **活跃度评级：高** —— 单日产出 11 条 PR、2 条 Issue，其中 4 个 PR 已合并入主分支，覆盖**新 Provider 接入**、**核心内存系统**、**部署自动化**、**容器生命周期**等关键路径。
- **核心交付**：OpenCode 正式成为第 4 个原生 Agent Provider（Claude/Codex/OpenCode/Ollama）；Provider-agnostic 持久化内存体系落地；`deploy.sh` 实现一键重部署。
- **风险点**：出站消息投递在瞬态网络错误后会被永久丢弃（#3058），已有修复 PR（#3059）但尚未合并；容器闲置不自动退出（#3053）导致资源浪费，修复 PR 已开。
- **技术债清理**：统一审批锁生命周期（#3054 已关闭、#3040 进行中），修正用户 ID 命名空间分隔符（#2591 长期开放）。
- **无新版本发布**，主分支累积足量特性与修复，建议近期切 v0.14.0 或 v0.15.0。

---

## 2. 版本发布

> 今日无新 Release。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| [#3056](https://github.com/nanocoai/nanoclaw/pull/3056) ✅ **Merged** | **Feat: OpenCode Provider** | 新增 `container/agent-runner/src/providers/opencode.ts`：托管 `opencode serve` 子进程、共享服务器生命周期、MCP 配置转译、空闲超时/优雅关闭。 | **里程碑级**：Provider 矩阵扩展至 4 个，生态中立性显著增强。 |
| [#3012](https://github.com/nanocoai/nanoclaw/pull/3012) ✅ **Merged** | **Feat: Provider-Agnostic Persistent Memory** | 新增 `memory/index.md` 与 `memory/system/definition.md` 脚手架；在 startup/clear/compaction 时加载共享内存树，排除 resume 场景。 | **基础设施级**：为多 Provider 间上下文共享奠定统一数据契约。 |
| [#3013](https://github.com/nanocoai/nanoclaw/pull/3013) ✅ **Merged** | **Feat: Codex Memory Integration** | 注册 Codex 原生 `SessionStart` 钩子，复用 #3012 记忆体系，保留既有 Codex 钩子。 | 补齐 Codex 侧记忆加载闭环，配合 #3012 形成“写一次、多端读”能力。 |
| [#3055](https://github.com/nanocoai/nanoclaw/pull/3055) ✅ **Merged** | **Ops: One-Command Redeploy** | 新增根目录 `deploy.sh`：SSH → `git pull --ff-only` → `pnpm i --frozen-lockfile` → `pnpm build` → systemd 重启；支持位置参数/环境变量指定宿主机。 | 运维效率大幅提升，CI/CD 外的手动/半自动部署标准化。 |
| [#3054](https://github.com/nanocoai/nanoclaw/pull/3054) ✅ **Closed** (Issue) | **Bug: FK Leak on Group Delete** | `agent_message_policies` 两个 `NOT NULL REFERENCES agent_groups(id)` 导致组删除/CLI 目的地移除时外键报错，残留脏数据。 | 数据完整性隐患消除，配合 #3040 统一审批生命周期彻底收口。 |

> **合计**：5 个关键 PR/入库，覆盖 **Provider 扩展**、**核心记忆**、**部署自动化**、**数据完整性** 四大支柱。

---

## 4. 社区热点（讨论/反应最多）

| 排名 | 对象 | 互动量 | 核心诉求 |
|------|------|--------|----------|
| 1 | [#3058](https://github.com/nanocoai/nanoclaw/issues/3058) Issue + [#3059](https://github.com/nanocoai/nanoclaw/pull/3059) PR | 👍 0 / 评论 1 | **生产级可靠性**：瞬态网络抖动（429/5xx/超时/RESET）不应导致消息永久丢弃；需指数退避 + 可配置重试上限 + 永久/瞬态错误分类。 |
| 2 | [#3057](https://github.com/nanocoai/nanoclaw/pull/3057) PR | 👍 0 / 评论 0 | **多模型容灾**：Claude 配额耗尽时自动透明切换到 Codex；同时新增 Telegram/WhatsApp 通道适配器与 Pilot 激活模块。 |
| 3 | [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) PR (长期) | 👍 0 / 评论 多 | **用户 ID 命名空间规范化**：将裸冒号 `:` 改为 `channel-type:` 前缀，避免跨通道 ID 冲突；阻塞多通道融合场景。 |
| 4 | [#3053](https://github.com/nanocoai/nanoclaw/pull/3053) PR | 👍 0 / 评论 0 | **容器成本控制**：`processQuery` 长连接阻塞轮询循环，导致容器只能靠 30-min SIGTERM 强杀；需实现空闲主动立下。 |

> **洞察**：社区关注点已从“功能堆砌”转向**生产级稳定性（重试/熔断/资源回收）**与**多 Provider/多通道互操作规范**。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue/PR | 现象 | 影响面 | 修复状态 |
|--------|----------|------|--------|----------|
| **P0 - 数据丢失** | [#3058](https://github.com/nanocoai/nanoclaw/issues/3058) / [#3059](https://github.com/nanocoai/nanoclaw/pull/3059) | 3 次快速重试后直接 `markDeliveryFailed()`，瞬态网络错误导致 Agent 回复永久丢弃。 | 所有出站通道（Slack/Telegram/WhatsApp/自定义 Webhook） | **PR 已开**，待 Review 合并 |
| **P1 - 资源泄漏** | [#3053](https://github.com/nanocoai/nanoclaw/pull/3053) | 容器空闲不退出，等待 30-min 硬性 SIGTERM，集群成本膨胀。 | 所有自托管容器实例 | **PR 已开**，待合并 |
| **P1 - 网络不通** | [#3052](https://github.com/nanocoai/nanoclaw/pull/3052) | Colima/Lima/Rancher Desktop 缺失 `host.docker.internal` 映射，容器无法访问宿主服务。 | macOS 非 Docker Desktop 开发者/CI | **PR 已开**，待合并 |
| **P2 - 数据完整性** | [#3054](https://github.com/nanocoai/nanoclaw/issues/3054) (Closed) | 组删除/目的地移除残留 `agent_message_policies` 行，外键报错。 | 管理员操作路径 | **已关闭**，随 #3040 统一生命周期解决 |
| **P2 - 命名空间冲突** | [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) | 裸冒号分隔符导致跨通道用户 ID 冲突。 | 多通道并存部署 | **长期开放**，需破坏性迁移方案 |

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 关联 PR/Issue | 纳入下一版本可能性 |
|----------|----------|---------------|---------------------|
| **自动配额回退** | Claude 触及限额时无感切换 Codex，保持会话连续 | [#3057](https://github.com/nanocoai/nanoclaw/pull/3057) | **极高**（核心团队作者、已含通道适配器） |
| **新通道适配器** | Telegram / WhatsApp 原生 Bot 支持 | [#3057](https://github.com/nanocoai/nanoclaw/pull/3057) | **高**（随配额回退同批交付） |
| **Pilot 激活模块** | 受控灰度发布新 Provider/Channel | [#3057](https://github.com/nanocoai/nanoclaw/pull/3057) | **中高**（运营级特性） |
| **统一审批锁生命周期** | 消息审批、组删除、目的地移除共享同一清理契约 | [#3040](https://github.com/nanocoai/nanoclaw/pull/3040) | **高**（核心团队推进、解决 #3054 遗留） |
| **Provider 配置预检** | 保存前校验 Provider 配置合法性，防止运行期报错 | [#3051](https://github.com/nanocoai/nanoclaw/pull/3051) | **中**（DX 改进，低风险） |
| **用户 ID 命名空间重构** | `channel-type:` 前缀替代裸冒号 | [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) | **低**（破坏性迁移，需主版本号） |

> **路线图推测**：v0.14.x 将聚焦 **稳定性三件套（#3059/#3053/#3052）+ OpenCode 交付（#3056）+ 记忆体系完善（#3012/#3013）**，v0.15.x 合并 **配额回退与新通道（#3057）**。

---

## 7. 用户反馈摘要（从评论提炼）

| 场景 | 痛点/期望 | 代表性引用/推断 |
|------|-----------|-----------------|
| **生产环境消息投递** | “一次网络抖动就丢回复，运维完全不可控” | #3058 作者明确指出：当前 1s 轮询 + 3 次重试 = 3 秒判死刑，无指数退避、无死信队列。 |
| **开发环境异构 Runtime** | “Colima 下容器连不上宿主数据库/Redis” | #3052 暴露：文档假设 macOS=Docker Desktop，导致大量非标 Runtime 用户踩坑。 |
| **成本敏感型自托管** | “空闲容器跑满 30 分钟才死，账单翻倍” | #3053 描述：SDK 流保持打开阻塞轮询，建议引入 `idleTimeoutMs` 主动立下。 |
| **多通道运营** | “Telegram/WhatsApp 接入要自己写 Adapter，门槛高” | #3057 直接内置两大通道 + Pilot 灰度，回应社区长期呼声。 |
| **跨 Provider 记忆共享** | “Claude 记的事 Codex 不知道，换模型等于失忆” | #3012/#3013 奠定 provider-neutral memory 基石，用户期待“换脑不换魂”。 |

---

## 8. 待处理积压（建议维护者本周关注）

| 对象 | 停滞时长 | 风险 | 建议动作 |
|------|----------|------|----------|
| [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) PR | **60+ 天** | 破坏性变更阻塞多通道融合，所有新通道适配器（含 #3057）均受影响 | 评估发布 `v1.0.0-break` 分支，或提供迁移脚本后强行合并 |
| [#3040](https://github.com/nanocoai/nanoclaw/pull/3040) PR | 2 天 | 统一审批生命周期为 #3054 根治方案，核心团队自提，宜优先 Review | 安排核心维护者 48h 内完成 Review，解除数据完整性隐患 |
| [#3059](https://github.com/nanocoai/nanoclaw/pull/3059) PR | 1 天 | P0 数据丢失修复，测试用例已补齐（按描述） | 快速通道合并，回填 CHANGELOG，考虑 cherry-pick 到 `stable` 分支 |
| [#3053](https://github.com/nanocoai/nanoclaw/pull/3053) / [#3052](https://github.com/nanocoai/nanoclaw/pull/3052) PR | 1 天 | 直接影响自托管成本与 macOS 开发体验 | 并行 Review，均为单文件/小范围改动，风险低 |

---

### 📌 结语
今日 NanoClaw 交出 **“Provider 矩阵完备化 + 记忆基建落地 + 运维工程化”** 三张高含金量合并卡，标志着项目从“多模型聚合原型”向“生产级多 Agent 编排平台”跨越。  
**下一周关键动作**：合并 P0 稳定性三件套（#3059/#3053/#3052）、推进 #3040 统一审批、决策 #2591 破坏性迁移时间表。建议维护者在周三前切出 `v0.14.0-rc.1` 供社区验收。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-16

---

## 1. 今日速览
- **整体状态**：项目处于**高强度架构重构与稳定性攻坚并行期**。核心精力集中在 "Reborn" 新架构的统一泛型扩展运行时落地（PR #6116）、V1 运行时彻底清理（PR #6123）以及 OAuth/认证流程的卫生修复（PR #6130, #6135）。
- **活跃度评估**：⭐⭐⭐⭐⭐ **极高**。过去 24h 共有 38 条 PR 更新、23 条 Issue 活动，且多为核心贡献者（Core Contributor）推动的大体量结构性变更（多个 XL/L 级 PR）。
- **核心矛盾**：**Slack 集成稳定性极差**，连续两周 QA 波次暴露同类顶层 Bug（断连被拒、DM 误投、错人通知、重连状态机崩坏），已上升为 #1 用户感知 Bug 家族（Issue #6105）。
- **发布情况**：今日无新版本发布，但发布准备 PR #5598（版本跨度大、含破坏性变更）已挂起 13 天，需关注是否因架构合并阻塞。

---

## 2. 版本发布
**无新版本发布。**

> **关注点**：PR #5598 `chore: release` 显示 `ironclaw_common` 0.4.2→0.5.0、 `ironclaw_skills` 0.3.0→0.4.0 均含 **Breaking Changes**，且主程版本 0.24.0→0.29.1。该 PR 创建于 7/3，至今未合并，疑因等待 #6116/#6123 等架构级变更落地后统一切版本。

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 标题 | 规模/风险 | 核心推进内容 | 关联 Issue |
| :--- | :--- | :--- | :--- | :--- |
| **[#6135](https://github.com/nearai/ironclaw/pull/6135)** | `fix(reborn): recover Slack host after OAuth activation` | **XL / Low** | **修复 Slack OAuth 激活后 Host 恢复失败**；强制校验 Host-bundled 扩展清单资源完整性，仅豁免规范的 HTTP MCP 包。直接回应 Slack 重连/认证系列 Bug。 | #5882, #5834, #6105 |
| **[#6128](https://github.com/nearai/ironclaw/pull/6128)** | `fix(auth): audit + review blockers` | **XL / Low** | **认证/生命周期审计修复包**：作用域上限修正、Notion 刷新令牌、扇出重试幂等、移除/回调竞态。每个修复均有红→绿回归测试。 | 认证审计内部追踪 |
| **[#6084](https://github.com/nearai/ironclaw/pull/6084)** | `feat(webui): replace native confirmations with a shared modal` | **M / Low** | **统一确认对话框组件**替代原生 `confirm()`，覆盖删除会话/自动化/扩展三处破坏性操作，统一设计语言并解决阻塞主线程问题。 | #6083 |
| **[#6082](https://github.com/nearai/ironclaw/pull/6082)** | `fix(webui-v2): render extension registry without enrichment delay` | **S / Low** | **扩展注册表渲染解耦**：目录数据到达即渲染骨架，异步增强已安装卡片，解决 10s 白屏/空状态误判。 | #6052, #6087 |
| **[#6055](https://github.com/nearai/ironclaw/pull/6055)** | `test(reborn): StaleSurface same-run refresh + extension-remove cleanup` | **M / Low** | **集成测试补强**：钉住 `StaleSurface` 同跑刷新与扩展移除时通道清理两条生产路径，零行为变更。 | #5950, #6026 |

> **整体进度判断**：**Reborn 架构“硬骨头”正在被啃下**。认证卫生（#6128, #6130）、扩展运行时统一（#6116）、V1 代码清理（#6123）三条主线并行推进，测试基建（Tier-2 故障注入、SSE 契约、通道生命周期）同步跟进，**技术债偿还与新架构落地同步进行**，工程健康度向好。

---

## 4. 社区热点：讨论最活跃、关注度最高的议题

| Item | 类型 | 热度指标 | 核心诉求/争议点 |
| :--- | :--- | :--- | :--- |
| **[#6105](https://github.com/nearai/ironclaw/issues/6105)** | Issue (Meta) | 💬 3 | **Slack 通道生命周期状态机测试 + 金丝雀巡检**。明确指出过去两周 4 波 QA 全军覆没，Slack 为 #1 Bug 家族，要求建立 `install→connect→disconnect→reconnect→uninstall` 全链路 E2E 守护。 |
| **[#6116](https://github.com/nearai/ironclaw/pull/6116)** | PR (Arch) | **XL / Medium** | **统一泛型扩展运行时 + 诚实状态机（reconcile main）**。92 commits rebase 合并主干，架构级变更，涉及 agent/channel/workspace/sandbox/ci/docs 等全栈，**审阅负载极大**，是当前最大单点风险。 |
| **[#6123](https://github.com/nearai/ironclaw/pull/6123)** | PR (Refactor) | **XL / High** | **移除退役 V1 运行时**（含 DB 迁移）。根包转为 Reborn 集成/对齐哈尼斯，加入架构护栏防回归。**高风险、高收益**，需核心组集中 Review。 |
| **[#5834](https://github.com/nearai/ironclaw/issues/5834)** 等 Slack 簇群 | Issues | 5 个 P1/P2 Issue | **Slack 集成基础可用性崩塌**：断连被拒、DM 静默失败/误投频道、通知错人、重连状态机卡死。用户反馈直指“完全不可信”，阻塞企业级采纳。 |

> **信号分析**：社区（内部 QA + 核心开发）共识明确——**必须先稳住 Slack 通道生命周期，再谈高级功能**。Issue #6105 已转化为 PR #6113（测试先行）与 PR #6135（修复 Host 恢复）双管齐下。

---

## 5. Bug 与稳定性：今日报告/更新的缺陷（按严重度）

| 严重度 | Issue | 标题 | 状态 | 是否有 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (P1)** | **[#5834](https://github.com/nearai/ironclaw/issues/5834)** | Slack 断连请求被 Agent 错误拒绝 | OPEN | 无直接 PR | Agent 回复无关内容，无法通过 UI 断连，**数据面失控** |
| **🔴 Critical (P1)** | **[#5943](https://github.com/nearai/ironclaw/issues/5943)** | Slack DM 动作误投当前频道 | OPEN | 无直接 PR | 敏感信息泄露风险，**隐私/合规红线** |
| **🔴 Critical (P1)** | **[#5877](https://github.com/nearai/ironclaw/issues/5877)** | Slack 通知投递给错误用户 | OPEN | 无直接 PR | 多租户隔离失效，**安全事件** |
| **🟠 High (P2)** | **[#5944](https://github.com/nearai/ironclaw/issues/5944)** | Slack DM 静默失败但上报成功 | OPEN | 无直接 PR | 状态不诚实，破坏信任 |
| **🟠 High (P2)** | **[#5882](https://github.com/nearai/ironclaw/issues/5882)** | 重复重连导致认证流程永久损坏 | OPEN | **#6135 (Merged)** | 需卸载重装扩展恢复，**已有修复入主干** |
| **🟠 High (P2)** | **[#6125](https://github.com/nearai/ironclaw/issues/6125)** | 后台 Routine 运行时用户消息被 "busy" 拒绝 | OPEN | 无 | 并发模型缺陷，用户被锁定对话 |
| **🟡 Medium** | [#5741](https://github.com/nearai/ironclaw/issues/5741) | `builtin.http.save` 大响应触发 OutputTooLarge | **CLOSED** | 隐含修复 | 已关闭，推测随存储/流式改进解决 |
| **🟡 Medium** | [#6052](https://github.com/nearai/ironclaw/issues/6052) | 扩展注册表加载 10s+ 骨架屏 | **CLOSED** | **#6082 (

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-16

> **数据统计周期**：2026-07-15 00:00 - 2026-07-15 23:59 (UTC)  
> **数据来源**：GitHub API / 页面抓取 (netease-youdao/LobsterAI)

---

## 1. 今日速览

*   **发布新版本**：项目发布了 **v2026.7.15** 正式版，包含文件卡片优化、Windows Web 安装器支持、首页快捷操作场景重构等核心功能。
*   **极高交付效率**：单日合并/关闭 **11 个 PR**，涵盖 UI 重构、设置分组、更新机制阻塞层、模型支持更新、协作会话状态恢复等，代码库活跃度极高。
*   **技术债偿还**：Dependabot 批量更新了 4 个核心 CI 依赖，并有长期搁置的 Electron 升级 PR (#1277) 持续跟进，显示维护者重视供应链安全与底层稳定性。
*   **社区反馈两极分化**：5 个陈旧 Issue 被标记 `[stale]` 批量关闭（主要为 4 月历史遗留 Bug），但新版本发布即引发新 Issue (#2342) 投诉“左下角广告无法彻底关闭”，用户体验细节仍有打磨空间。
*   **整体健康度**：⭐⭐⭐⭐☆ (高)。发布节奏稳定，代码审查流转快，但需警惕商业化动作（广告）对社区信任的侵蚀。

---

## 2. 版本发布

### **LobsterAI 2026.7.15** ([Release 页面](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.15) | [关联 PR #2341](https://github.com/netease-youdao/LobsterAI/pull/2341))

| 变更类型 | 核心内容 | 影响范围与迁移提示 |
| :--- | :--- | :--- |
| **Feat (UI/UX)** | **优化文件卡片** (#2322) | 交互细节提升，无破坏性变更。 |
| **Feat (Build/Dist)** | **新增 Windows Web Installer 可选目标** (#2323) | **安装分发方式变更**：提供在线安装器选项，减少首包体积，便于企业分发。现有 MSI/EXE 离线包保留。 |
| **Feat (Cowork)** | **重构首页快捷操作场景** | 首页交互逻辑调整，旧版快捷方式配置可能需重新适配。 |
| **Refactor (Settings)** | **通用设置分组卡片化** (#2336) | 设置项重组为“基础/通知/数据隐私”三类，合并通知开关，**用户需重新确认通知权限设置**。 |
| **Fix (Renderer)** | **修复内容复制 Bug** (#2335) | 修复 Artifacts/代码块复制异常，建议所有用户升级。 |
| **Feat (Models)** | **新增 GPT-5.6 / Grok 4.5 默认模型** (#2332) | **模型迁移策略**：引入版本化迁移路径，按归一化 ID 匹配现有模型，**避免升级重复创建用户自定义模型**，平滑无感。 |
| **Feat (Update UX)** | **用户主动更新时阻塞交互覆盖层** (#2333, #2338) | 更新下载/安装期间锁定界面，防止状态不一致；支持取消恢复、错误恢复、键盘焦点保持。 |
| **Fix (Cowork/IM)** | **恢复 IM 会话加载状态** (#2334) | 订阅网关生命周期事件 + 轮询兜底，修复定时任务/桌面端事件干扰加载态的问题。 |

> **⚠️ 破坏性变更提示**：设置项重组 (#2336) 可能导致自动化脚本/配置迁移失败；Windows Web Installer 为新增分发渠道，非强制迁移。

---

## 3. 项目进展

今日合并/关闭的 11 个 PR 形成三大推进主线：

### **A. 发布工程化与更新体验闭环** (4 PRs)
*   **#2341** Release/2026.7.13 → 打包发布主分支。
*   **#2333** `feat(update): block app interactions during user-initiated updates` → 解决更新期间用户误操作导致状态损坏。
*   **#2338** `feat(update): refine the blocking update overlay` → 进度居中、长日志滚动、错误恢复、诊断日志、焦点管理，**更新体验达到商业级 Electron 应用标准**。
*   **#2339** `fix(update): align update card header content` → 侧边栏窄屏下标题完整显示。

### **B. 核心交互与稳定性修复** (4 PRs)
*   **#2335** `fix: fixed content copy bug` → 修复 Artifacts/Markdown 复制失效，**高频痛点即时修复**。
*   **#2334** `fix(cowork): restore IM session loading state` → 引入网关事件驱动替代纯轮询，修复 Cron/桌面端干扰 IM 加载态，**架构向事件驱动演进**。
*   **#2336** `feat(settings): group General settings into labeled cards` → 设置信息架构重组，合并冗余通知开关，修复 `ThemedSelect` 长标签溢出，**易用性显著提升**。
*   **#2332** `feat(providers): add GPT-5.6 and Grok 4.5 default models` → 模型库跟进最新厂商发布，迁移逻辑健壮。

### **C. 代码质量与回滚** (3 PRs)
*   **#2340** `Revert "fix: fixed model not allowed"` (#2337) → 快速回滚有副作用的修复，**体现发布前质量把关机制有效**。
*   **#2322, #2323** (Release Notes 中提及) → 文件卡片优化、Web Installer 基建。

---

## 4. 社区热点

| 排名 | 项目 | 互动指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **🔥 TOP 1** | **Issue #2342** `左下角广告可以彻底关闭吗` | **新开即热** (1 评论, 0 👍, 创建于发布日) | **用户强烈抵触 v2026.7.15 新增的左下角广告横幅**。虽可点击关闭，但无永久关闭开关，且设置中无相关项。用户感知为“版本强推广告”，信任度受损。需尽快回应：是否提供“永不显示”开关、是否为误发、商业化策略说明。 |
| **📌 关注** | **PR #2341** `Release/2026.7.13` | 合并即关闭 (0 评论) | 发布流程自动化/手动确认的关键节点，无社区讨论。 |
| **📌 关注** | **Issue #1382, #1381, #1383, #1384, #1385** | 全部被标记 `[stale]` **批量关闭** (各 2-3 评论) | 维护者执行清理策略，关闭 3 个月无进展的历史 Issue。#1384 (多文件仅显示最后一个) 已有对应 Fix PR #1372 (仍 Open/stale)，建议确认修复是否已包含在 v2026.7.15 中。 |

---

## 5. Bug 与稳定性

| 严重度 | Issue / PR | 标题 | 状态 | 关联 Fix / 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (阻塞/数据风险)** | **#2342** (New) | 左下角广告无法彻底关闭 | **Open** | **非代码 Bug，但为用户体验严重缺陷**。需在设置页增加 `showBottomAd: false` 持久化配置。 |
| **P1 (功能缺失)** | **#1384** (Stale Closed) | 会话中上传多文件仅显示最后一个 | **Closed (Stale)** | **PR #1372** 已提供修复 (提取 `mergeAttachments` 纯函数 + 8 单测)，但 PR 处于 Open/Stale 状态。**需确认 v2026.7.15 是否已包含此修复**，若无则为回归风险。 |
| **P1 (数据一致性)** | **#1385** (Stale Closed) | 微信机器人删除任务后历史记录未清理 | **Closed (Stale)** | 涉及跨端数据同步逻辑，关闭前无明确 Fix PR 关联，潜在数据残留风险。 |
| **P2 (交互异常)** | **#1381** (Stale Closed) | 定时任务每次新开会话窗口 | **Closed (Stale)** | 产品设计与用户预期不符，需在 Cron 配置中增加“复用会话”选项。 |
| **P2 (同步缺失)** | **#1383** (Stale Closed) | 微信发送相同提问仅同步一条 | **Closed (Stale)** | 去重逻辑过于激进，需引入消息 ID 或时间戳区分。 |
| **P3 (UI 细节)** | **#1382** (Stale Closed) | 导出日志红色提示易误认为失败 | **Closed (Stale)** | 视觉规范问题，建议改为黄色/蓝色信息色。 |

> **稳定性结论**：v2026.7.15 修复了复制、更新阻塞、IM 加载态等关键路径 Bug，**核心稳定性向好**；但历史遗留的多文件上传 (#1384/#1372) 需验证是否真修复，新版广告投放 (#2342) 引入新的“功能性缺陷”。

---

## 6. 功能请求与路线图信号

| 用户需求 (Issue) | 关联 PR / 实现迹象 | 纳入下版本概率 | 分析 |
| :--- | :--- | :--- | :--- |
| **永久关闭左下角广告** (#2342) | 无 | **极高 (Hotfix 级)** | 核心用户体验阻断点，维护者极大概率会在 1-2 周内发布 Hotfix 增加开关。 |
| **定时任务复用会话** (#1381) | 无 | 中 | 需产品决策：是否在 Cron 编辑器增加“目标会话 ID”配置。当前已 Stale 关闭，需用户重新提交或维护者主动拾遗。 |
| **多文件上传完整保留** (#1384) | **#1372 (Open/Stale)** | **高 (若未合入)** | PR #1372 代码质量高 (含测试)，极大概率已被 Cherry-pick 或将合入下一版。需核对 Release Notes 未提及此项。 |
| **微信机器人去重优化** (#1383) | 无 | 低 | 涉及微信协议层消息 ID 获取难度，优先级较低。 |
| **设置项** | **#2336 (Merged)** | **已完成** | 设置分组、合并通知开关、修复溢出，**已在 v2026.7.15 交付**。 |
| **更新体验专业化** | **#2333, #2338, #2339 (Merged)** | **已完成** | 阻塞层、进度、错误恢复、**已在 v2026.7.15 交付**。 |

---

## 7. 用户反馈摘要

从 Issue 评论与新 Issue 中提炼的真实用户画像：

1.  **“更新即广告”引发信任危机** (#2342)：
    *   *场景*：用户升级到 v2026.7.15，启动即见左下角横幅广告。
    *   *痛点*：无前置告知、无设置入口、关闭非持久化。
    *   *原话*：“虽然可以点叉子关掉，但能不能以后就彻底不弹出这个广告…没有找到和这个广告相关的设置开关”。
    *   *信号*：开源/免费工具商业化探索需极度克制，**“用户控制权”是底线**。

2.  **历史遗留 Bug 修复期待落空** (#1384 等 Stale 关闭)：
    *   *场景*：用户 4 月反馈多文件上传丢失、定时任务堆积会话、微信同步去重。
    *   *痛点*：核心工作流受阻，等待 3 个月未修复，最终被标记 Stale 关闭。
    *   *信号*：**Stale 机制不应等同于“拒绝修复”**，对于有明确复现步骤且影响核心流程的 Bug，建议打上 `triage:accepted` 而非自动关闭。

3.  **对专业级更新体验的认可** (隐性)：
    *   v2026.7.15 的更新阻塞层、进度展示、错误恢复 (#2333/#2338) 解决了 Electron 应用“更新时乱点导致崩溃/白屏”的通病，符合专业用户预期。

---

## 8. 待处理积压

| 项目 | 类型 | 停滞时长 | 风险等级 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #1277** | `chore(deps-dev): bump electron 40 → 43` | **~100 天** (创建 2026-04-02) | **🔴 高** | Electron 主版本升级涉及

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI) 项目日报 | 2026-07-16

---

## 1. 今日速览
- **整体活跃度：低** 。过去 24 小时仅有 1 条 Pull Request 更新，无 Issue 活动，无版本发布。
- **代码演进：** 唯一活跃 PR #295 处于待审核状态，针对 CLI 团队管理命令中移除 Leader 后的提示逻辑缺陷进行修复，属于典型的“小而确定”的工程质量改进。
- **社区互动：** 社区静默，无新讨论、无用户反馈、无 Bug 上报，项目处于维护期平稳运行或开发间隙。
- **健康度提示：** 积压风险极低，但长期缺乏外部贡献与 Issue 涌入可能预示社区增长放缓，建议维护者关注推广与文档完善以激活贡献者生态。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
### 待合并 PR（1 条）
| PR | 标题 | 作者 | 状态 | 影响范围 | 进展评估 |
|----|------|------|------|----------|----------|
| [#295](https://github.com/TinyAGI/tinyagi/pull/295) | **fix(cli): print the "New leader" note after removing a team leader** | [Osamaali313](https://github.com/Osamaali313) | `OPEN` | `packages/cli/src/team.ts` — 团队 Leader 移除后的交互提示逻辑 | **工程质量提升**<br>修复了“移除 Leader 后始终打印‘New leader’提示” 的死逻辑分支，确保仅在真正选出新 Leader 时提示用户。属于低风险、高确定性的修复，建议优先 Review 合并以保持 CLI 体验一致性。 |

- **今日合并/关闭 PR：0 条**
- **整体推进度：** 代码库无实质性功能推进，仅有一处交互细节修复待合并。

---

## 4. 社区热点
> 过去 24 小时无 Issue 创建、评论或 Reaction，社区处于完全静默状态。无热点讨论可供分析。

---

## 5. Bug 与稳定性
| 严重程度 | 来源 | 描述 | 修复状态 |
|----------|------|------|----------|
| **低 (Low)** | [PR #295](https://github.com/TinyAGI/tinyagi/pull/295) | `teamRemoveAgent` 中移除 Leader 后，成功消息构建逻辑存在永远为 `false` 的条件判断，导致“New leader”提示异常显示。 | **已有 Fix PR (#295)**，待 Review 合并。 |

- **新报告 Bug：0 个**
- **回归/崩溃报告：0 个**

---

## 6. 功能请求与路线图信号
> 过去 24 小时无新增 Feature Request Issue，亦无关联 PR 暗示新功能开发。当前唯一 PR 为纯修复类，不包含路线图级功能信号。

---

## 7. 用户反馈摘要
> 无 Issue 评论、Discussion 或用户反馈数据，无法提炼痛点与满意度。

---

## 8. 待处理积压提醒
| 类型 | 编号 | 标题 | 停滞时长 | 建议动作 |
|------|------|------|----------|----------|
| **PR** | [#295](https://github.com/TinyAGI/tinyagi/pull/295) | fix(cli): print the "New leader" note after removing a team leader | ~1 天 (创建于 2026-07-15) | **建议今日内完成 Code Review 并合并**；变更极小、测试覆盖清晰，合并后可立即关闭该积压项。 |
| **Issue/PR** | — | 其它长期未响应项 | — | 根据 GitHub 提供的数据概览，当前无长期积压 Issue 或 PR（数据显示过去 24h 无活跃/关闭，暗示近期整体流量极低）。建议维护者定期执行 `gh issue list --state open --limit 100` 与 `gh pr list --state open` 全量扫描，确认是否存在半年以上未响应的旧单。 |

---

### 📌 维护者行动建议
1. **合并 #295**：无阻塞项，合并后可释放唯一待处理 PR。
2. **激活社区**：考虑发布 “Good First Issue” 标签任务、完善贡献指南或撰写技术博客，打破长期“零 Issue/零讨论”局面。
3. **例行巡检**：确认 CI/CD、依赖更新（Dependabot/Renovate）与安全扫描正常运行，防止静默期积累隐性技术债。

---
*报告生成时间：2026-07-16 00:00 UTC | 数据来源：GitHub REST API / GraphQL 采样 | 下次更新：2026-07-17*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-16

---

## 1. 今日速览
- **整体活跃度：高** —— 过去 24 小时内无新版本发布，但 **6 个 PR 全部合并/关闭**，涵盖模型支持、依赖升级、认证修复、上下文窗口推导、ACP 代理自动检测及非 systemd 环境兼容等核心领域，显示维护团队处于高效交付节奏。  
- **Issue 活动：低** —— 仅 1 条增强类 Issue（`#574` 模型按话题路由）更新，社区新需求涌入较少，现有积压 Issue 未见新进展。  
- **代码健康度：良好** —— 依赖批量升级（`#1148`）与认证/上下文窗口等关键路径修复（`#1152`、`#1150`）同步落地，技术债偿还与新特性并行。  
- **架构演进信号：** 正向“多提供商、多协议（ACP）、多运行环境”方向推进，Provider 抽象层与外部代理集成能力显著增强。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 项目进展（已合并/关闭 PR，按影响力排序）

| PR | 类型 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| [#1149](https://github.com/moltis-org/moltis/pull/1149) `feat(external-agents): auto-detect ACP agents` | **重大特性** | 新增 13 个主流 ACP 代理（Copilot、Codex、Claude、Gemini、OpenHands 等）的命名种类与默认配置，实现 `stdio` 协议下的自动发现与注册。 | ★★★★★ 将 Moltis 定位为 **统一 ACP 网关**，大幅降低用户接入外部代理门槛。 |
| [#1150](https://github.com/moltis-org/moltis/pull/1150) `fix(providers): derive context windows from capabilities` | **核心修复/重构** | 统一模型能力元数据中的 `context-window` 字段；解析 GitHub Copilot 实时元数据；动态 Provider（Copilot/Codex）按能力自动构建上下文窗口。 | ★★★★☆ 消除硬编码上下文限制，提升多模型切换时的 Token 管理可靠性。 |
| [#1152](https://github.com/moltis-org/moltis/pull/1152) `fix(providers): derive openai-codex token expiry from JWT exp claim` | **关键 Bug 修复** | 修复 `openai-codex` Provider 因 `expires_at: null` 导致 ~10 天后 Token 失效且无法自动恢复的问题，改为从 JWT `exp` 声明推导过期时间。 | ★★★★☆ 解决长周期会话中断的阻塞性缺陷，提升生产可用性。 |
| [#1151](https://github.com/moltis-org/moltis/pull/1151) `feat(providers): add MiniMax M3 model support` | **模型扩展** | 在静态注册表新增 MiniMax M3，保留 M2.7；记录上下文/图像能力；文档化全球/中国双端点兼容模式。 | ★★★☆☆ 快速跟进国内主流模型，丰富中文场景选型。 |
| [#1153](https://github.com/moltis-org/moltis/pull/1153) `fix(cli): support services without systemd` | **基础设施兼容** | 新增无 systemd 容器（Coder/devbox）下的用户级 Supervisor 脚本，支持 install/status/stop/restart/uninstall。 | ★★★☆☆ 打通云开发环境/CI 容器部署链路，拓宽运行环境矩阵。 |
| [#1148](https://github.com/moltis-org/moltis/pull/1148) `chore(deps): bump npm_and_yarn group` | **依赖维护** | `/crates/web/ui` 与 `/docs` 目录下 esbuild、vite 等前端工具链批量升级。 | ★★☆☆☆ 例行安全/兼容性维护，规避供应链风险。 |

**整体迈进评估：** 单日合并 6 PR，其中 3 个为架构级增强（ACP、能力驱动上下文、非 systemd 运行时），1 个为严重认证修复，项目在 **“多协议互操作”** 与 **“运行时鲁棒性”** 两大战略方向均取得实质性进展。

---

## 4. 社区热点
| 对象 | 热度指标 | 核心诉求分析 |
|------|----------|--------------|
| [#574](https://github.com/moltis-org/moltis/issues/574) `[enhancement] Model Routing Per topic` | 👍 1｜💬 1｜更新于 2026-07-15 | 用户期望 **按话题/任务类型自动路由至最适模型**（如代码任务走 Codex，文本走 Claude），而非手动切换。当前仅 1 条评论，讨论深度不足，但信号明确：社区渴望 **智能路由层** 而非静态模型选择。建议维护者在下一里程碑纳入设计讨论。 |

---

## 5. Bug 与稳定性
| 严重程度 | Issue/PR | 现象 | 修复状态 |
|----------|----------|------|----------|
| **Critical** | [#1152](https://github.com/moltis-org/moltis/pull/1152) | `openai-codex` 会话 ~10 天后因 Token 过期彻底失效，需手动重新登录 | ✅ **已合并**，JWT `exp` 推导过期时间 |
| **High** | [#1150](https://github.com/moltis-org/moltis/pull/1150) | 硬编码上下文窗口导致动态模型（Copilot/Codex）Token 截断或报错 | ✅ **已合并**，能力元数据驱动 |
| **Medium** | [#1153](https://github.com/moltis-org/moltis/pull/1153) | 无 systemd 容器中 CLI 服务管理失效 | ✅ **已合并**，Supervisor 兜底方案 |
| **Low** | 无新报告 | — | — |

> **结论：** 今日无新增未修复 Bug，核心阻塞性缺陷均在 24h 内闭环，稳定性趋势向好。

---

## 6. 功能请求与路线图信号
| 来源 | 需求 | 关联 PR/实现就绪度 | 入版本概率 |
|------|------|-------------------|------------|
| [#574](https://github.com/moltis-org/moltis/issues/574) | **按话题智能路由模型** | 无直接 PR，但 `#1149` ACP 自动检测与 `#1150` 能力元数据为路由层提供基础设施 | ⭐⭐⭐（需设计讨论，可能 v0.12+） |
| `#1149` 隐性诉求 | **更多 ACP 代理零配置接入** | 已覆盖 13 个主流代理，扩展机制成熟 | ⭐⭐⭐⭐⭐（持续增量） |
| `#1151` 隐性诉求 | **国内模型厂商快速跟进** | MiniMax M3 当日上线，注册表扩展流程标准化 | ⭐⭐⭐⭐（持续增量） |

---

## 7. 用户反馈摘要（来自 Issue 评论）
- **痛点：** `#574` 评论者指出“手动切模型破坏 Flow，希望按任务语义自动分发”，反映 **高频多模型用户** 的认知负荷问题。  
- **满意点：** 暂无新正面反馈，但近期 PR 密集合并暗示维护者响应速度快，社区隐性满意度较高。  
- **场景补充：** `#1153` 引入的 Coder/devbox 场景说明 **云原生开发环境** 成为新增长点。

---

## 8. 待处理积压提醒
| 对象 | 停滞时长 | 关注理由 | 建议行动 |
|------|----------|----------|----------|
| [#574](https://github.com/moltis-org/moltis/issues/574) `Model Routing Per topic` | 创建 2026-04-06，>100 天 | 核心增强需求，架构就绪度高（ACP+Capabilities），但长期无设计讨论/里程碑规划 | **指派 Product Owner 发起设计 RFC**，纳入 v0.12 或 v0.13 路线图 |
| 无长期未响应 PR | — | 所有活跃 PR 均在 24h 内闭环 | 维持现有 Review SLA |

---

> **下一观测点：** 关注 `#574` 是否进入设计讨论、ACP 代理列表扩展节奏、以及是否发布包含上述 6 个 PR 的 **v0.11.x 维护版本**。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw/QwenPaw 项目日报 | 2026-07-16

---

## 1. 今日速览

**整体状态：高活跃度，处于 v2.0 发布后的密集修复与功能完善期。**  
过去 24 小时：Issues 50 条更新（19 新/活跃、31 关闭），PRs 43 条更新（21 待合并、22 已合并/关闭），**零新版本发布**。社区呈现“旧 Issue 集中清理 + 新版本回归 Bug 修复 + 新特性并行开发”三线并行态势。核心矛盾集中在 v2.0 升级后的**记忆/上下文管理回归**（失忆、截断、压缩失效）、**多模态渲染缺陷**、**Windows/Tauri 桌面端稳定性**以及**多 Agent 协作触发困难**。维护团队响应迅速，多个关键修复 PR 已进入 `ready-for-human-review` 状态。

---

## 2. 版本发布

**无新版本发布。** 当前最新版本为 `v2.0.0.post2`（见 Issue #6129、#6148）。建议关注后续 `v2.0.1` 或 `v2.1.0` 里程碑，预计将打包本周累积的修复。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 关联 Issue | 状态 |
|----|------|----------|------------|------|
| [#6142](https://github.com/agentscope-ai/QwenPaw/pull/6142) | Bug Fix | 修复 Web UI 自动记忆间隔无法设为 0 关闭功能的表单验证与类型问题，更新 7 语言 i18n | [#6132](https://github.com/agentscope-ai/QwenPaw/issues/6132) | ✅ **CLOSED** |
| [#6140](https://github.com/agentscope-ai/QwenPaw/pull/6140) | Bug Fix | `_run_command` 新增 `errors='replace'` 解决 Windows GBK 编码兼容性崩溃 | — | ✅ **CLOSED** |
| [#6147](https://github.com/agentscope-ai/QwenPaw/pull/6147) | Feature | 官网博客新增浏览/点赞计数（Supabase），GA 切换至 QwenPaw 资源 | — | ✅ **CLOSED** |
| [#6143](https://github.com/agentscope-ai/QwenPaw/pull/6143) | CI | 网站构建注入 Supabase 配置 | — | ✅ **CLOSED** |
| [#6137](https://github.com/agentscope-ai/QwenPaw/pull/6137) | Bug Fix | 调整 Doom Loop 阈值（警告 3/停止 4）并保留 thinking 块空白 | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)、[#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) | ✅ **CLOSED** |
| [#6039](https://github.com/agentscope-ai/QwenPaw/pull/6039) | Bug Fix | MCP 旧驱动迁移时解析 `${VAR}` 环境变量引用 | [#6029](https://github.com/agentscope-ai/QwenPaw/issues/6029) | ✅ **CLOSED** |

> **进展评估**：核心回归 Bug（记忆开关、编码崩溃、MCP 迁移、Doom Loop、思考块渲染）已修复并合并；文站建设同步推进。下一步重点将转向**待审 PR 的合并**与**长期架构重构**（ReMe 记忆、Channel 基类、后台工具卸载、Chrome 插件）。

---

## 4. 社区热点（高互动 Issue/PR 分析）

| 对象 | 互动 | 核心诉求 | 分析 |
|------|------|----------|------|
| [#2911](https://github.com/agentscope-ai/QwenPaw/issues/2911) (6💬) | **Windows 客户端长时间运行自动退出** | 生产环境稳定性阻断，涉及所有版本至 1.0.1b1 | 已关闭但未见修复 PR，疑似重现困难或归因于 Electron/Tauri 生命周期管理，建议复盘 |
| [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) (5💬) | **思考块流式渲染缺失空格/换行** | 直接影响推理模型可读性，v2.0 回归 | [#6139](https://github.com/agentscope-ai/QwenPaw/pull/6139) 已修复待合并，优先级高 |
| [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125) (5💬) | **银河麒麟（国产化 OS）安装包支持** | 政企信创替代硬需求，当前仅支持源码编译 | 涉及打包/签名/适配链，建议纳入 v2.1 路线图并提供 `.deb`/`.rpm`/自解压包 |
| [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) (5💬, 3👍) | **个人知识库/记忆库控制台集成** | 非技术用户核心诉求，期望「开箱即用」的 RAG 能力 | 与 ReMe 集成（#6153）强相关，已关闭但功能仍在演进中 |
| [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148) (2💬) | **v2.0 严重「失忆」：上下文截断、compact 失效** | 核心体验回归，多用户确认 | [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123) 重构 Scroll 上下文压力控制与恢复协议，关键修复 |
| [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) (2💬) | **可编辑安装启动内存泄漏：36 后台循环占 48GB+** | 开发者/贡献者环境阻断，ReMe 索引问题 | [#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153) 升级 ReMe 并加单文件 10MiB 上限，缓解但需根治 |

> **信号**：社区关注点已从「功能缺失」转向 **v2.0 质量兑现**（记忆、多模态、稳定性、国产化适配），且政企/非技术用户声音放大。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 影响范围 | 修复进展 |
|--------|-------|------|----------|----------|
| **P0 阻断** | [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) | 可编辑安装启动 OOM，ReMe 后台循环失控 | 开发者/贡献者全量 | [#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153) 升级 ReMe 0.4.1.1 + 单文件限长，**待合并** |
| **P0 阻断** | [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148) | v2.0 上下文丢失、compact 空转、频繁「截断」 | 所有 v2.0 用户 | [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123) 重构 Scroll 恢复协议，**待合并** |
| **P1 严重** | [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | 忙碌会话下新消息静默丢弃（飞书等渠道） | 多渠道高并发场景 | 无对应 PR，**需尽快排期** |
| **P1 严重** | [#6141](https://github.com/agentscope-ai/QwenPaw/issues/6141) | `MODEL_EXECUTION_ERROR` 后对话永久不可用（tool 角色顺序错位） | 长任务/多 Worker 场景 | 无 PR，**需根因分析** |
| **P1 严重** | [#2911](https://github.com/agentscope-ai/QwenPaw/issues/2911) | Windows 客户端数小时后自动关闭 | 全量 Windows 用户 | 已关闭但无修复，**需复现定位** |
| **P2 体验** | [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) | 思考块流式渲染丢失空白 | 推理模型用户 | [#6139](https://github.com/agentscope-ai/QwenPaw/pull/6139) **ready-for-review** |
| **P2 体验** | [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | 响应完成后加载动画不消失 | Console 前端 | 无 PR |
| **P2 体验** | [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) | Embedding 映射漏传 `pass_dimensions` 导致 400 | 本地 Embedding 用户 | 无 PR，作者已给出修复建议 |
| **P3 轻微** | [#6132](https://github.com/agentscope-ai/QwenPaw/issues/6132) | 自动记忆间隔无法设 0 | Web UI 设置 | ✅ **已修复合并（#6142）** |
| **P3 轻微** | [#2906](https://github.com/agentscope-ai/QwenPaw/issues/2906) | Tavily MCP Node.js v25 ES Module 不兼容 | MCP 使用者 | 已关闭，疑似上游修复 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 社区热度 | 相关 PR/实现进度 | 入版本概率 |
|------|------|----------|------------------|------------|
| **预制 Agent 模板/角色市集** | [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) | 3💬 | 无 PR，**降低非技术门槛核心** | ⭐⭐⭐⭐ v2.1+ |
| **个人知识库/记忆库 Console 集成** | [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) | 5💬, 3👍 | [#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153) ReMe 增强，**进行中** | ⭐⭐⭐⭐ v2.1 |
| **多渠道共享会话上下文** | [#2899](https://github.com/agentscope-ai/QwenPaw/issues/2899) | 3💬 | 无 PR，架构涉及 Channel 统一 | ⭐⭐⭐ v2.2 |
| **Chrome 官方扩展插件** | — | — | [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) **已开 PR**，含 Native Messaging 桥 | ⭐⭐⭐⭐⭐ **极大概率

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*