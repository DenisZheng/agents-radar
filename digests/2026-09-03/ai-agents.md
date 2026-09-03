# OpenClaw 生态日报 2026-09-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-03 02:29 UTC

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

# OpenClaw 项目日报 | 2026-09-03

---

## 1. 今日速览

OpenClaw 今日呈现**高强度并行开发态势**，过去 24 小时内 Issues 与 PR 均达 500 条更新上限（GitHub API 分页限制），实际活动量远超此数。无新版本发布，但合并/关闭 PR 126 个，新增/更新 PR 374 个，显示主干开发极其活跃。核心矛盾集中在 **2026.8.x 版本升级后的稳定性债务**（崩溃循环、认证迁移、会话状态损坏）、**多 Agent 协作架构缺陷**（MCP 注入失败、AgentSelectionRequiredError 泛滥）、**实时语音/移动端体验断层** 以及 **长尾遗留 Bug 积压**（僵尸进程、SQLite 损坏、消息丢失）。维护者正通过大量小尺寸 PR（S/XS）快速修补 UI、诊断工具、通道适配器，但 P0/P1 级核心 Bug 多为“需产品决策”或“需安全审查”长期搁置，**项目处于“高速迭代修补外围，核心稳定性风险累积”状态**。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的重要 PR 推进了移动端实时对讲、Web UI 会话协作、发布工程链路与诊断能力：

| PR | 标题 | 规模/评级 | 核心进展 | 状态 |
|----|------|-----------|----------|------|
| [#135934](https://github.com/openclaw/openclaw/pull/135934) | **fix(android): keep realtime Talk responsive through playback and interruption** | XL / 🐚 platinum hermit / 🚨 compatibility | 解决 Android 实时对讲“播放时不可打断”核心体验问题，引入全双工音频所有权证明，超越 #128101 成为基线。 | **CLOSED (Merged)** |
| [#128101](https://github.com/openclaw/openclaw/pull/128101) | fix(android): make realtime Talk full-duplex on built-in speaker | XL / 🦐 gold shrimp / 🚨 compatibility | 奠定 Android 实时语音全双工基础，经物理设备复现验证，今日被 #135934 替代合并。 | **CLOSED (Superseded)** |
| [#136719](https://github.com/openclaw/openclaw/pull/136719) | improve(ui): show linked session participants | M / 🐚 platinum hermit | Control UI 会话悬浮卡片支持展开查看全量参与者，解决 “N others” 不可交互痛点。 | **CLOSED (Merged)** |
| [#134057](https://github.com/openclaw/openclaw/pull/134057) | fix(ci): fetch pinned Kova archive with retries | S / 🦐 gold shrimp / 🚨 automation | CI 稳健性提升：替换不可重试的 `git fetch` 为带重试的 GitHub codeload 归档下载。 | **CLOSED (Merged)** |
| [#118625](https://github.com/openclaw/openclaw/pull/118625) | [Bug]: Main-session compaction holds write-lock past 60s... | - / 🦪 silver shellfish | 主会话压缩持锁超时导致子代理结果丢失，标记 `close:already-fixed` 关闭。 | **CLOSED (Fixed)** |

**新增/待审 PR 热点（均为今日创建/更新）：**
- **性能与诊断**：[#136862](https://github.com/openclaw/openclaw/pull/136862) (L) WebSocket 帧压缩/预热加速深链冷启动；[#136861](https://github.com/openclaw/openclaw/pull/136861) (XS) 文件引用分类去路径数组化；[#136859](https://github.com/openclaw/openclaw/pull/136859) (L) 节点实时负载/内存/磁盘上报。
- **多 Agent 协作解禁**：[#136755](https://github.com/openclaw/openclaw/pull/136755) (L) 默认开启跨 Agent 会话访问 (`tools.agentToAgent.enabled=true`, `tools.sessions.visibility=global`)，涉及安全边界评审。
- **通道适配器修复**：[#136864](https://github.com/openclaw/openclaw/pull/136864) WhatsApp 终止原因透出；[#136838](https://github.com/openclaw/openclaw/pull/136838) Twitch Token 路径修正；[#136727](https://github.com/openclaw/openclaw/pull/136727) Discord 语音强制咨询取消提供商回复；[#134817](https://github.com/openclaw/openclaw/pull/134817) Nextcloud Talk 结构化斜杠命令识别。
- **插件/工程**：[#136835](https://github.com/openclaw/openclaw/pull/136835) 释放流程冻结插件预发布授权；[#135709](https://github.com/openclaw/openclaw/pull/135709) 统一稳定版 Pin 语法；[#136849](https://github.com/openclaw/openclaw/pull/136849) 插件包名提取性能优化。

---

## 4. 社区热点

评论数/反应数 Top 5 Issues 反映用户最痛的生产环境阻滞：

| Issue | 评论/👍 | 核心诉求 | 状态/标签 |
|-------|---------|----------|-----------|
| [#99551](https://github.com/openclaw/openclaw/issues/99551) | 17 / 1 | **Codex Worker 失控硬化冲刺** Tracker：追踪 5 个子 Issue，旨在不改动 #98186 前提下修复 Worker 失控模式。 | **CLOSED (Duplicate)** |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 13 / 0 | **Cron Agent 在 DeepSeek 上严重卡顿**：`[cron:<jobId>]` 前缀导致 DeepSeek 边缘网关低优先级处理，需协议层适配或可配置前缀。 | **OPEN** P1, `clawsweeper:needs-product-decision` |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | 13 / **6** | **MCP 工具完全不注入子代理 (`sessions_spawn`)**：`bundle-mcp`、允许列表全失效，子代理仅能用内置工具，阻断多 Agent 编排。 | **OPEN** P1, `impact:session-state`, `impact:security`, `needs-security-review` |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 12 / 0 | **显式多 Agent 所有权下 `AgentSelectionRequiredError` 刷屏日志**：Logbook 插件、Control UI 全局 RPC、系统 Agent 轮次均缺 `agentId`。 | **OPEN** P1, `impact:session-state` |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | 12 / 1 | **网关重启后 MCP Loopback 传输不自动重连**：`recovered=1` 误导用户会话已恢复，实则工具调用失效。 | **OPEN** P2, `impact:session-state` |

**高赞/长周期关注点**：
- [#65374](https://github.com/openclaw/openclaw/issues/65374) (9 评论, 2 👍) **Dreaming 系统跨 Agent 污染记忆库** — 架构级设计缺陷，需产品决策拆分语料库。
- [#97616](https://github.com/openclaw/openclaw/issues/97616) (10 评论, 1 👍) **Hook/Tool 子进程泄漏成僵尸** — 运行时退化，长期未修。
- [#123327](https://github.com/openclaw/openclaw/issues/123327) (6 评论) **P0: SQLite WAL 检查点把索引页覆盖 Page 1 导致数据库损坏** — 核心存储可靠性，树莓派复现。

---

## 5. Bug 与稳定性

按严重程度分层（P0 > P1 > P2），标注是否有关联 Fix PR：

### 🔴 P0 / 致命 / 数据损坏
| Issue | 现象 | 关联 PR | 处理建议 |
|-------|------|---------|----------|
| [#123327](https://github.com/openclaw/openclaw/issues/123327) | **SQLite 共享状态数据库损坏**：WAL checkpoint 将索引叶页字节级覆盖 Page 1，破坏文件头。树莓派 5 + NVMe/ext4 复现两次。 | 无 | **需立即组织存储专家复现，回滚或热修补 WAL 逻辑** |
| [#1345

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-09-03）

---

## 1. 生态全景

当前生态呈现 **“头部巨无霸并行重构、腰部项目分化求稳、长尾项目边缘化”** 的两极态势。OpenClaw、ZeroClaw、IronClaw、NanoClaw、CoPaw 等核心项目均处于 **高强度架构演进期**，核心矛盾已从“功能实现”转移至 **多 Agent 会话所有权界定、MCP/ACP 协议落地细节、沙箱与供应链安全硬化、长上下文与状态持久化可靠性** 等生产级课题。Moltis 等新锐项目以极高发布频率验证 Hook/Event 核心契约，LobsterAI、PicoClaw 等则暴露出“审核瓶颈”与“单点阻塞”风险。生态整体正经历 **从“可用”向“可靠、可控、可互操作”** 的跃迁阵痛期。

---

## 2. 各项目活跃度对比

| 项目 | 核心定位 | 今日 Issues 更新量 | 今日 PR 活跃度 | Release 情况 | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 全模态/多渠道/企业级中枢 | **500+ (触及 API 上限)** | **500+ (合并 126, 新增 374)** | 无 | 🟡 **高风险/高吞吐** | 核心稳定性债务累积 (P0 SQLite/会话状态)，外围高速修补，多 Agent 协作架构缺陷显性化 |
| **ZeroClaw** | 架构治理/安全优先/Rust 原生 | ~50 | ~50 (合并 3, 47 待审) | 无 | 🟢 **高活跃/治理成熟** | RFC 驱动决策 (会话持久化/沙箱/内存所有权)，S0 级安全修复 PR 待审，审查吞吐成瓶颈 |
| **IronClaw** | 原生 UI/高性能/TypeScript 全栈 | 隐性 (PR 驱动) | **高 (合并 10+ 含 XL 级特性)** | 无 | 🟢 **高质量/工程卓越** | 里程碑特性落地 (Durable Replies/Slack UI)，CI 效能量级优化，TS 严格化战役全面展开 |
| **CoPaw (QwenPaw)** | 桌面端/插件生态/中文社区 | 25 (新开/活跃 16) | 35 (合并 10) | **v2.2.0-beta.7** | 🟡 **冲刺期/阻塞性 Bug 多** | Beta 高频迭代，沙箱逃逸/上下文丢失/Cron 重复触发等 P0 缺陷集中爆发 |
| **NanoClaw** | 轻量核心/Provider 抽象/技能分发 | 2 | 21 (合并 3, 18 待审) | 无 | 🟢 **重构期/基建扎实** | Provider 契约体系重构收尾，供应链安全加固，7 个高质量 Bug 修复 PR 并行 |
| **Moltis** | Hook 驱动/Schema 优先/极简内核 | 2 (核心维护者自报) | 3 (核心修复 1) | **3 版本/天** | 🟢 **内核稳固/外部冷启动** | 核心 Hook 机制补全 (P0 修复 PR 就绪)，推理能力扩展，极度依赖核心团队自驱 |
| **PicoClaw** | 硬件/嵌入式/特定渠道适配 | 1 | 1 (合并 1, 周期 175 天) | 无 | 🔴 **阻塞/流程低效** | QQ 频道富媒体里程碑合并，但网关认证 P0 Bug 导致全量不可用，PR 周期极长 |
| **LobsterAI** | 产品化应用/有道业务支撑 | -6 (Stale 机制自动关闭) | 3 (合并, 均为修正类) | 无 | 🔴 **维护停滞/流程失效** | 核心 Bug 被 Bot 误关 (#1569/#1561)，高成熟度 PR 长期积压 (搜索/沙箱/安全)，审核链路断裂 |
| **其余 5 项** | (NanoBot, Hermes, NullClaw, TinyClaw, ZeptoClaw) | 0 | 0 | 无 | ⚫ **无活动/归档态** | 过去 24h 无任何社区信号 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
*   **规模与兼容性护城河**：唯一支撑 500+ 并发 Issue/PR 吞吐的项目，覆盖 Android/iOS/Web/CLI/桌面全端，集成 Discord/Slack/Telegram/WhatsApp/QQ/Matrix 等最全渠道适配器矩阵。
*   **协议事实标准制定者**：MCP 注入、ACP 运行时拥有权、Agent 选择协议等生态核心契约均在 OpenClaw 内部优先验证、迭代并外溢。
*   **最复杂的多 Agent 编排实战场景**：`AgentSelectionRequiredError`、跨 Agent 会话访问 (`tools.agentToAgent`)、子代理工具注入失败等问题是生态中最早、最密集暴露并推动解决的。

### 技术路线差异
| 维度 | OpenClaw | ZeroClaw | IronClaw | NanoClaw | CoPaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心语言** | Go + TS (多进程) | **Rust** (单二进制/多进程) | **Rust + TS** (Tauri/Reborn) | **Go + TS** (插件化) | **Python + TS** (Electron/PyInstaller) |
| **会话/状态模型** | SQLite + WAL (主会话/子会话锁竞争) | **ACL/所有权模型** (显式 Agent 归属) | **ReplyDocument/持久化流** (原生 UI 同步) | **Provider 契约** (外部化状态) | **ReMe/向量索引** (本地优先内存) |
| **多 Agent 协作** | 隐式路由 + 显式 `agentId` (当前失效高发) | **显式授权/作用域** (RFC 定义中) | **子运行 Gate 事件路由** (PR #8046) | **技能隔离/技能间通信** | **主从轮询/心跳** (Issue #7450) |
| **安全边界** | Governance 插件/沙箱 (进程级) | **细粒度路径/OS 沙箱/委托链** (代码级) | **能力协商/网关凭据通道** | **Egress Grant/最小释龄** | **Governance 引擎/路径拦截** (近期被突破) |

### 社区规模对比
*   **开发者带宽**：OpenClaw 单日合并 PR 数 (126) ≈ ZeroClaw + IronClaw + NanoClaw + CoPaw 合计，维

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目日报 | 2026-09-03

---

## 1. 今日速览
- **整体活跃度：低** 🟡。过去 24 小时仅有 1 条 Issue 活跃更新 和 1 个 PR 关闭/合并，无新版本发布，社区讨论热度平平。
- **核心进展**：**QQ 频道适配能力显著增强**，PR #1349 已合并，新增对表情、语音、图片、视频、文件等多类型附件的解析与主动发送支持，标志着 QQ 频道协议适配进入“富媒体可用”阶段。
- **主要风险**：**QQ 频道网关认证异常**（Issue #3349）阻断 Docker 与 Linux x86 环境下的基础连接，错误码 `401/11241` 指向 Authorization 头格式或 Token 刷新逻辑失效，属 **P0 级阻塞性 Bug**，亟需修复。
- **维护者响应**：Issue #3349 已有 2 条评论跟进，但尚无修复 PR 关联；PR #1349 从创建到合并耗时近 6 个月，提示审核流程较长，建议优化小型增强类 PR 的合并节奏。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
### ✅ 已合并 PR
| PR | 类型 | 核心变更 | 对项目推进度 |
|----|------|----------|--------------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) `feat(qq): support parsing and replying to more attachment types` | **Enhancement / Channel / Go** | 1. 解析 QQ 频道 Emoji 结构<br>2. 支持接收语音/图片/视频/文件<br>3. 支持本地附件上传后回复（语音/图片/视频/文件）<br>4. 回复优先走 Markdown，降级为纯文本 | **🟢 重大里程碑**：QQ Channel 从“仅文本”跨越到“全媒体类型收发”，补齐与 OneBot 11 / Discord 等主流适配器的功能对齐度，为上层插件生态解锁多媒体交互场景。 |

> **合并统计**：PR 开启于 2026-03-11，合并于 2026-09-02，**周期 175 天**。建议后续引入“小型增强快速通道”缩短等待。

---

## 4. 社区热点
| 排名 | 对象 | 热度指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | **Issue [#3349](https://github.com/sipeed/picoclaw/issues/3349)** `[BUG] QQ频道无法正常使用` | 💬 2 条评论 · 👍 0 · 更新 2026-09-02 | **生产环境完全不可用**：Docker 与原生 Linux x86 均复现 `401 Authorization 格式错误`，怀疑 Token 获取/刷新、Gateway 意图配置、或腾讯侧接口变更导致。用户期待官方给出最小复现 Docker Compose 或配置检查清单。 |

> **洞察**：尽管 PR #1349 丰富了上层能力，但网关层认证失效导致“连不上服务器”，所有新功能对受影响用户均不可用。建议维护者在下一个 Patch 版本中优先修复该回归。

---

## 5. Bug 与稳定性
| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0 - 阻塞** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) QQ Channel Gateway 401 | `failed to get websocket info: code:401, text:{"message":"请求头Authorization参数格式错误","code":11241...}` | 所有使用 Docker 或 Linux x86 部署的 QQ 频道实例 | ❌ 无关联 PR |

> **建议**：尽快在 `internal/channel/qq` 的 `Gateway` / `WebSocket` 握手逻辑中排查 `Authorization` 头构造（Bot Token vs QQ Token）、`Intent` 位掩码、以及 `session.Start` 返回的 `url` 与 `token` 拼接方式。可参考 [QQ 官方 Bot API 文档](https://bot.q.qq.com/wiki/develop/api/gateway/gateway.html) 近期变更。

---

## 6. 功能请求与路线图信号
| 来源 | 需求描述 | 关联 PR / 实现就绪度 | 纳入下版本可能性 |
|------|----------|----------------------|------------------|
| PR [#1349](https://github.com/sipeed/picoclaw/pull/1349) (已合并) | QQ Channel 富媒体收发（Emoji/Voice/Image/Video/File） | ✅ 已合入 `main` | **100%**（已在主分支） |
| Issue [#3349](https://github.com/sipeed/picoclaw/issues/3349) 评论区隐性诉求 | 官方提供“开箱即用”的 Docker Compose / 配置模板，降低接入门槛 | 文档/样例缺失 | **高** —— 建议在 `docs/` 或 `examples/` 补充，配合修复同步发布 |

> **路线图推测**：v0.17.x / v0.18.0 将以“QQ Channel 稳定化 + 富媒体完善”为主题，预期包含：认证修复、附件上传重试/断点续传、Markdown 渲染回退策略完善。

---

## 7. 用户反馈摘要
> 来源：Issue #3349 评论区（2 条）

| 用户场景 | 痛点原话 | 情绪倾向 |
|----------|----------|----------|
| **Docker 部署** | “目前测试过 docker 版本和 Linux x86 版本 均无法正常使用” | 😡 **强烈不满** —— 两种主流部署方式全挂 |
| **调试困难** | “gateway 日志只报 401，没有更详细的调试信息定位不到具体哪一步出错” | 😟 **焦虑** —— 缺乏可观测性（建议增加 `--debug` 或 `trace` 级别日志输出 `Authorization` 头脱敏后的值） |

> **正面反馈**：暂无。PR #1349 合并后尚无用户在 Issue 反馈验证结果（受限于网关不通）。

---

## 8. 待处理积压提醒
| 对象 | 停滞时长 | 优先级 | 建议行动 |
|------|----------|--------|----------|
| **Issue [#3349](https://github.com/sipeed/picoclaw/issues/3349)** QQ Channel 401 认证失败 | 创建 2026-08-30，更新 2026-09-02（已 4 天） | **🔴 Critical** | 1. 指派核心维护者复现（Docker + Linux x86）<br>2. 产出最小复现脚本 & 修复 PR<br>3. 同步更新 `docker-compose.yml` 与 `config.yaml.example` |
| **PR 审核周期长** | #1349 耗时 175 天 | 🟡 中 | 引入 “`size: S` / `type: enhancement`” 自动合并策略（通过 CI + 1 Approve 即合并） |

---

## 📌 维护者行动清单（建议今日/明日完成）
1. **[P0] 复现并修复 #3349** —— 在 `main` 分支切出 `hotfix/qq-gateway-401`，定位 `Authorization` 构造差异。
2. **[P1] 补充 QQ Channel 接入文档** —— `docs/qq-channel.md` 增加 Docker Compose 完整示例、Token 获取步骤、常见 401/403 排查表。
3. **[P2] 发布 v0.17.1 Patch** —— 仅含 #3349 修复 + 文档更新，快速解除用户阻塞。
4. **[长期] 优化 PR 流程** —— 配置 GitHub Actions 自动打标、小型 PR 快速合并、依赖机器人（Dependabot/Renovate）保持 Go 模块更新。

---

*报告生成时间：2026-09-03 06:00 UTC | 数据来源：GitHub API (sipeed/picoclaw) | 下次更新：2026-09-04*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-09-03

---

## 1. 今日速览
- **活跃度评估：高** —— 过去 24 小时内有 **21 个 PR 更新**（其中 18 个待合并、3 个已关闭/合并）与 **2 个 Issue 活跃**，呈现典型的“修复与重构并行”冲刺态势。
- **核心动向**：Provider 契约体系重构（`corex`/`opencode`/`host`/`setup`）进入收尾验证阶段；消息投递链路（`delivery`/`channels`）修复离线适配器重试风暴与 MIME 类型缺失；CLI 任务调度引入即时触发机制；供应链安全加固 `minimumReleaseAge` 门控再次推进。
- **风险点**：Issue #3529 揭示技能刷新机制对本地适配器误判，可能阻塞用户自定义扩展的更新流程；Issue #3701 提出的网关凭据通道诉求尚无对应 PR，属路线图级讨论。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#2973](https://github.com/nanocoai/nanoclaw/pull/2973) | **Fix / Supply-chain** | 将 `minimumReleaseAge: 4320` 从 `pnpm:` 块提升至 `pnpm-workspace.yaml` 顶层，激活“新包 3 天不可安装”供应链守门。 | **关键安全基线落地**，彻底修复此前配置不生效的回归。 |
| [#3672](https://github.com/nanocoai/nanoclaw/pull/3672) | **Test / Skills** | 修正 `add-slack` 技能测试对 `slack-raw-text` 文件的期望值。 | 消除 CI 假阴性，保障技能安装验证链路可信。 |
| [#3593](https://github.com/nanocoai/nanoclaw/pull/3593) | **Test / Providers** | 钉死 Codex `speed → service_tier` 渲染行为（`fast` 输出 `service_tier = "fast"`）。 | 为 Provider 契约渲染提供回归基准，配合 #3584 同步入库。 |

> **整体评估**：3 个关闭 PR 均属 **基础设施/测试/安全加固** 类，未直接交付用户可见新功能，但为后续 Provider 重构与供应链治理扫清障碍。

---

## 4. 社区热点（高互动/高关注）

| 编号 | 标题 | 互动 | 核心诉求分析 |
|------|------|------|--------------|
| [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | **update-nanoclaw skill refresh: local adapters fail validation or get overwritten, no opt-out** | 💬2 | **痛点**：技能刷新逻辑默认 `src/channels/index.ts` 全量来自技能，导致自研适配器被误判为“陈旧/冲突”而阻塞更新或被覆盖。**诉求**：提供 opt-out 机制或识别本地扩展标记。 |
| [#3701](https://github.com/nanocoai/nanoclaw/issues/3701) | **Would you accept a gateway-declared credential lane in validateSpec?** | 💬0（新开） | **路线图信号**：维护 24 组 Agent 的网关模式用户，请求在 `validateSpec` 中引入“网关声明式凭据通道”，以替代当前 `contributedEnv` 占位符换装模式。涉及**多租户凭据隔离**与**代理边界注入**架构演进。 |

> **趋势**：社区关注点从“单通道适配”转向 **“多租户网关化部署”** 与 **“扩展点自治”**，建议核心团队在下一里程碑规划中显性化 `Gateway Credential Lane` 与 `Local Adapter Opt-out` 两条技术债偿还项。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | PR/Issue | 现象 | 已有 Fix PR | 备注 |
|--------|----------|------|-------------|------|
| **P0 - 数据面中断** | [#3703](https://github.com/nanocoai/nanoclaw/pull/3703) | `delivery` 对已断连适配器仍消耗 3 次重试，导致重连风暴与延迟抖动。 | ✅ **#3703 已开** | 新增 `isConnected()` 前置判断，切中适配器契约核心。 |
| **P1 - 调度延迟** | [#3702](https://github.com/nanocoai/nanoclaw/pull/3702) | `ncl tasks run` 写入 due 行后不触发 reconcile 队列，最长等待 60 s (`SWEEP_INTERVAL_MS`)。 | ✅ **#3702 已开** | 立即喂入队列，实现“即时启动”。 |
| **P1 - 协议不兼容** | [#3674](https://github.com/nanocoai/nanoclaw/pull/3674) | Teams 出站文件缺失 MIME 类型，导致卡片/附件渲染失败。 | ✅ **#3674 已开** | 补全 `mimeType` 传递，解锁 Teams 富媒体场景。 |
| **P1 - 网络不通** | [#3597](https://github.com/nanocoai/nanoclaw/pull/3597) | 网关模式下 `host.docker.internal` 的 HTTP MCP Server 被代理拦截导致不可达。 | ✅ **#3597 已开** | 绕过网关代理直连宿主回环，恢复本地 MCP 连通性。 |
| **P2 - 安全绕过** | [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) | `validateSpec` 允许 `allowlisted-extra` 挂载绕过，可能越权访问宿主路径。 | ✅ **#3680 已开** | 收紧挂载白名单校验，属纵深防御增强。 |
| **P2 - 工具契约失真** | [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | `send_card` 承诺支持回调按钮，实则被 Chat SDK 静默丢弃，误导 Agent。 | ✅ **#3427 已开** | 将卡片降级为纯文本展示，修正工具契约诚实性。 |
| **P2 - 媒体落盘** | [#3113](https://github.com/nanocoai/nanoclaw/pull/3113) | WhatsApp 入站媒体未落在容器可读路径，导致下游处理失败。 | ✅ **#3113 已开** | 调整暂存目录映射，补全容器卷挂载一致性。 |

> **稳定性结论**：今日 7 个 Bug 修复 PR 全部处于 **Open/审查中**，覆盖投递、调度、协议、网络、安全、工具契约、媒体管线七大面，属**高质量修复波次**；建议优先合并 P0/P1 项（#3703, #3702, #3674, #3597）以止血生产环境隐患。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/进展 | 纳入下一版本概率 |
|------|----------|--------------|------------------|
| [#3701](https://github.com/nanocoai/nanoclaw/issues/3701) | **Gateway-declared credential lane** —— 网关层统一声明凭据，供 `validateSpec` 直接消费，替代 `contributedEnv` 占位符模式。 | 无对应 PR，属架构级 RFC。 | ⭐⭐☆（需设计评审，可能纳入 vNext 里程碑） |
| [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) | **Core-owned `speed` 推理属性** —— 在 Agent Group 级引入 `speed: fast|standard`，CLI 可配，Provider 词表化。 | PR Open，配套 Codex/OpenCode 渲染已就绪 (#3584, #3588, #3593)。 | ⭐⭐⭐（配套完整，极大概率下周合并） |
| [#3584](https://github.com/nanocoai/nanoclaw/pull/3584) / [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) / [#3585](https://github.com/nanocoai/nanoclaw/pull/3585) / [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) / [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) | **Provider 契约体系全面重构** —— Codex/OpenCode/Host/Setup 四大 Provider 接入统一契约，指令渲染核心化。 | 5 个 PR 并行推进，测试 (#3593) 已关闭。 | ⭐⭐⭐（核心重构主线，预计本周内陆续合并） |
| [#3573](https://github.com/nanocoai/nanoclaw/pull/3573) | **AIML API 集成请求** —— 新增模型提供商技能。 | PR Open，走技能贡献流程。 | ⭐⭐☆（需通过技能审核清单） |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点/期望 | 代表性原声（摘要） |
|------|-----------|---------------------|
| **自研适配器维护者** | 技能更新机制不识别本地扩展，导致“自家适配器反成拦截者”，无法优雅退出更新流程。 | “I have an adapter that lives in my tree… There is no `.claude/skills/add-<name>`… update thinks it came from a skill.” — @glifocat [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) |
| **大规模网关运维者** | 24 组 Agent 共享网关，凭据注入需在代理边界完成，现有 `contributedEnv` 模式需手工占位符换装，运维成本高。 | “Most of that fits the driver seam cleanly: `contributedEnv` is the right shape… but a gateway-declared lane would be cleaner.” — @davekim917 [#3701](https://github.com/nanocoai/nanoclaw/issues/3701) |
| **Teams 重度用户** | 发送文件/卡片长期失败，排查发现缺 MIME 类型，怀疑是平台适配层遗漏。 | 隐性反馈：#3674 由核心成员 @orgads 主动修复，说明内部已复现并定级为阻断级。 |
| **容器化 MCP 开发者** | `host.docker.internal` 访问被网关代理拦截，调试本地 MCP Server 极其痛苦。 | 隐性反馈：#3597 同为 @orgads 提交，印证该场景为高频开发痛点。 |

---

## 8. 待处理积压（长期未响应/高价值）

| 编号 | 状态 | 停滞时长 | 价值/风险 | 建议动作 |
|------|------|----------|-----------|----------|
| [#3492](https://github.com/nanocoai/nanoclaw/pull/3492) | **Open** | 11 天（2026-08-23 → 今） | 与已合并 #2973 同源，**重复实现** `minimumReleaseAge` 门控；若不关闭将造成配置双写风险。 | **建议 Close as duplicate**，引用 #2973 作为唯一实现。 |
| [#3113](https://github.com/nanocoai/nanoclaw/pull/3113) | **Open** | 44 天（2026-07-21 → 今） | WhatsApp 媒体管线阻断性 Bug，虽有修复 PR 但长期未审。 | **加速 Review**，或指派熟悉 WhatsApp 适配器的维护者。 |
| [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | **Open** | 9 天（2026-08-25 → 今） | 影响所有自研扩展用户的更新体验，属“长尾开发者体验”债。 | **纳入下 Sprint**，设计 `local-adapter` 标记或 `--skip-local` 标志。 |
| [#2973](https://github.com/nanocoai/nanoclaw/pull/2973) | **Closed** | — | 已合并，但配套文档/CHANGELOG 未见同步更新。 | **补齐 Release Note 与 `CLAUDE.md` 例证**，防止贡献者再踩坑。 |

---

## 📌 维护者行动清单（优先级排序）
1. **合并 P0/P1 修复**：#3703 → #3702 → #3674 → #3597（止血生产隐患）。
2. **推进 Provider 契约主线**：批量审核 #3584/#3588/#3585/#3586/#3591/#3592，争取本周内完成重构落地。
3. **清理重复 PR**：关闭 #3492，避免配置分叉。
4. **响应长尾 Issue**：指派 #3529 与 #3113 给对应模块 Owner，给出时间线。
5. **研讨 #3701**：在下周架构会上纳入议程，输出 `Gateway Credential Lane` 设计草案。

---

*报告生成时间：2026-09-03 08:00 UTC | 数据来源：GitHub API（过去 24 小时增量） | 下次更新：2026-09-04*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-09-03

> **数据统计周期**：2026-09-02 至 2026-09-03（UTC）  
> **数据来源**：GitHub Issues / PRs / Releases API  
> **项目地址**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

**整体状态：高活跃度、重里程碑交付、深度技术债偿还并行。**

过去 24 小时，项目呈现 **"一大特性落地 + 多项基建强化 + 系统性前端重构启动"** 的高密度推进态势。核心里程碑 **PR #8006**（耐用渐进式回复与原生 Slack Agent UI）已合并，标志着多模态交互通道建设取得实质性突破。同时，CI 构建性能通过 **PR #8050** 实现量级优化（消除冷编译），前端技术债偿还计划（`@ts-nocheck` 清零）以 5 个 Issue + 3 个 PR 的矩阵式推进全面展开，设计系统组件统一化迁移（`Input`/`SelectMenu`/`SearchField`/`InlineNotice`）同步收尾 4 个 Issue。项目处于 **架构巩固与交付加速** 的双重上升期。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展 | 今日合并/关闭的关键 PR

以下 PR 已合并或关闭，代表已落地的增量价值：

| PR | 标题 | 类型 | 核心影响 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#8006** | **feat(channels): add durable progressive replies and native Slack Agent UI** | **重大特性** | **核心里程碑**。引入 `ReplyDocument` 统一回复契约，实现渐进式流式回复持久化、Slack/Telegram 原生 Agent UI（Block Kit/MarkdownV2），统一发布-订阅路由。解决了历史流式回复碎片化、无法撤回、多端一致性差等痛点。 | [#8006](https://github.com/nearai/ironclaw/pull/8006) |
| **#8050** | **ci: stop cold-compiling every Reborn lane (stable hermetic Cargo home...)** | **基建/性能** | **CI 效能跃升**。通过稳定的 Hermetic Cargo Home、Push-only 共享缓存、稳定工具链、原地预热变异门控，消除 Reborn 通道每次全量冷编译。参考数据显示重编译时间大幅缩减，合并队列吞吐显著提升。 | [#8050](https://github.com/nearai/ironclaw/pull/8050) |
| **#8042** | **fix(cli,ci): keep serve alive when stderr closes, bind before the banner...** | **稳定性/修复** | **解除 #8006 合并阻塞的关键修复**。修复 `serve` 冒烟测试因 stderr 关闭误杀进程、端口绑定竞态、变异测试关键门控误判三大顽疾，合并队列通过率从 ~16% 恢复至 100%。 | [#8042](https://github.com/nearai/ironclaw/pull/8042) |
| **#8045** | **fix(ci): wait for CLI listener readiness in smoke tests** | **测试/稳定性** | 统一 TCP 回环连接就绪探测，替代脆弱的 Banner 文本等待，消除 CLI 冒烟测试假阴性。 | [#8045](https://github.com/nearai/ironclaw/pull/8045) |
| **#8051** | **fix(reply): the answer is the current model call's text; earlier calls are narration** | **逻辑修复/文档** | 澄清并修复渐进式回复拼接逻辑：仅当前模型调用文本为“答案”，历史调用为“旁白”。修正 Slack/Telegram 回复内容污染问题。 | [#8051](https://github.com/nearai/ironclaw/pull/8051) |
| **#8018 / #8020 / #8019 / #8017** | **UI 组件统一迁移系列** | **重构/技术债** | 4 个 Issue 同步关闭，标志着 Settings/Workspace/Logs/Automations/Extensions 页面全面迁移至共享设计系统（`Input`、`SelectMenu`、`SearchField`、`InlineNotice`），视觉一致性与维护性双提升。 | [#8018](https://github.com/nearai/ironclaw/issues/8018) · [#8020](https://github.com/nearai/ironclaw/issues/8020) · [#8019](https://github.com/nearai/ironclaw/issues/8019) · [#8017](https://github.com/nearai/ironclaw/issues/8017) |
| **#8003** | **chore(deps): bump everything-else group (17 updates)** | **依赤维护** | 批量更新 `uuid`、`base64`、`toml` 等 17 个 Rust 依赖，保持供应链新鲜度。 | [#8003](https://github.com/nearai/ironclaw/pull/8003) |

> **进展评估**：单日合并 **1 XL 特性 + 1 XL CI 基建 + 3 稳定性修复 + 4 UI 重构 + 1 依赖更新**，交付密度极高，技术债偿还与新特性交付形成良性共振。

---

## 4. 社区热点 | 高关注度讨论

当前数据中显式评论数（`评论` 字段）多为 `0` 或 `undefined`（GitHub API 返回限制），结合 **PR 体量、关联 Issue 数、跨模块影响面** 判断以下为隐性热点：

| 热点 | 形式 | 核心诉求/争议点 | 分析 |
| :--- | :--- | :--- | :--- |
| **前端 TypeScript 严格化战役** | 5 Issues + 3 PRs 矩阵 | **彻底清除 170 文件/6.1 万行 `@ts-nocheck`**，建立类型安全防线。`italic-jinxin` 主导，自上而下拆解：边界类型定义(#8034) → 生产组件分类(#8035) → 测试基建分类(#8036) → 冗余清理与 CI 卡口(#8033) → 总纲追踪(#8032)。 | **战略级治理**。非单点修复，而是建立“类型安全防退化机制”。PR #8038/39/40 已开启实战，预计将持续 1-2 周高频合并。 |
| **子代理审批/授权网关直达所有者收件箱** | PR #8046 (Open) | 子任务被审批/凭证阻塞时不可见，父任务无感知。**需将子运行的 Gate 事件路由至所有者 Durable Inbox**，打破“子运行不可见”架构假设。 | **多代理编排核心解锁**。当前 `RunOutcomeProcessCommitObserver` 过滤掉所有子运行，导致人工介入断链。该 PR 为 R3 切片 3a，后续将跟进可观测性与中断恢复。 |
| **新 Claude 模型族缓存策略兼容** | PR #8044 (Open) | `supports_prompt_cache` 白名单机制导致 `claude-fable-*`/`claude-mythos-*` 等新族群静默降级为无缓存，**需改为黑名单 + 显式 `prompt_cache_key` 发送**。 | **供应商适配前置性维护**。避免新模型发布日性能回退，体现对上游变更的快速响应能力。 |
| **流式文本增量合并性能优化** | PR #8043 (Open) | `ProviderStreamSink::text_delta` 每增量全量重清洗+全量下推，O(N·k) 字节复制。实测 16KB/1000增量耗时 1000s → 目标 O(N) 合并。 | **长上下文/高吞吐场景关键优化**。直接影响用户感知的流式延迟与服务端 CPU 成本。 |

---

## 5. Bug 与稳定性 | 今日报告/修复的缺陷

按严重程度排序（P0=阻塞发布/数据丢失，P1=核心路径异常，P2=边缘/体验）：

| 严重度 | 标题/来源 | 现象 | 根因/状态 | 修复 PR / 追踪 Issue |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | **合并队列系统性绿建失败** | #8006 合并队列 6 次运行 5 次失败，阻塞核心特性上线。 | 1. `serve` 冒烟测试 harness 误杀进程（stderr 关闭触发）<br>2. 端口绑定竞态（Banner 前绑定）<br>3. 关键变异门控误判未命名变异体 | **已修复合并**：[#8042](https://github.com/nearai/ironclaw/pull/8042) |
| **P1** | **工具失败分类错误导致模型无法恢复** | `FailureKind::InputEncode` 被误用于“文档不存在”场景，模型误判为参数编码错误而非资源缺失，陷入错误重试循环。 | `NativeMemoryService::read` 将 `MissingDocument` 映射为 `InputEncode` 而非 `UnknownCapability`/`ExecutionError` | **追踪中**：[Issue #8041](https://github.com/nearai/ironclaw/issues/8041) · 相关修复尝试 [PR #7985](https://github.com/nearai/ironclaw/pull/7985) (Open) |
| **P1** | **内存服务：缺失文档错误分类错误** | 同 #8041 根因，`MemoryServiceError::input()` 导致上层映射为 `FailureKind::InputEncode`。 | 域错误（资源不存在）被包装为输入错误（参数编码失败）。 | **修复中**：[PR #7985](https://github.com/nearai/ironclaw/pull/7985) (Open, 待 Review) |
| **P2** | **CLI 冒烟测试假阴性** | 测试依赖 Banner 文本判断就绪，网络抖动/日志缓冲导致超时失败。 | 缺乏真实 TCP 连通性探测。 | **已修复合并**：[#8045](https://github.com/nearai/ironcl

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-09-03

---

## 1. 今日速览
- **整体状态**：项目处于**维护与技术债清理期**。过去 24 小时无新版本发布，核心动作集中在 **Stale 机制自动关闭 6 个长期无响应 Issue（均为 4 月创建）**，以及 **3 个 PR 合并/关闭**（含 1 个安全加固回滚、1 个文档/埋点修复、1 个 Windows 引导修复）。
- **活跃度评估**：**中低**。Issue 区呈“负增长”（净减少 6 个），PR 区虽有 7 个开放 PR 但均为 3 月底创建的“陈年”草案（标记 `stale`），仅 #2590、#2598 为近期新建。核心维护力量疑似集中于内部分支或下一版本筹备，**社区外部贡献参与度极低**。
- **关键信号**：并发安全（IM 消息竞态、CoworkRunner 重入）、沙箱环境就绪探测、会话全文搜索等**架构级优化 PR 已就绪但长期未合并**，提示审核瓶颈或发布窗口未到。

---

## 2. 版本发布
> 过去 24 小时无新版本发布（`Releases: 0`）。

---

## 3. 项目进展：已合并/关闭的重要 PR（3 个）

| PR | 标题/领域 | 状态 | 核心变更 | 对项目的推进意义 |
|----|-----------|------|----------|------------------|
| [#2597](https://github.com/netease-youdao/LobsterAI/pull/2597) | `revert(browser): remove in-app browser from 2026.8.31 release` | **CLOSED** (已合并回主干) | 回滚 #2574 引入的应用内浏览器功能，恢复 2026.8.31 发布线之前的行为；保留特性分支以便后续重新应用。 | **风险控制**：承认新功能未达发布标准，果断回滚保护主干稳定性，体现“小步快跑、可随时回滚”的工程纪律。 |
| [#2598](https://github.com/netease-youdao/LobsterAI/pull/2598) | `[area: renderer] Liuzhq/fix guide win` | **CLOSED** (已合并) | 修复 Windows 平台引导/指引页面相关渲染或逻辑问题。 | **平台兼容性**：补齐 Windows 端首次体验缺口，降低新用户流失。 |
| [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) | `fix(analytics): track chat login CTA clicks` | **CLOSED** (已合并) | 上报“聊天登录 CTA 点击”埋点事件，更新分析规范文档。 | **数据驱动**：完善登录转化漏斗监控，为后续增长实验提供基建。 |

> **进展小结**：今日合并 PR 均为**修正/补强类**，无新功能交付。7 个开放 PR（含 5 个 `stale`）积压待审，建议建立“每周 PR 审阅日”机制打破停滞。

---

## 4. 社区热点：高互动 Issues/PRs 分析

| 对象 | 互动指标 | 核心诉求 | 维护者响应现状 |
|------|----------|----------|----------------|
| [Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 💬 6 条评论、👍 0 | **提问后无任何响应/运行**，附带完整截图日志，疑似核心推理链路阻塞。 | ✅ 已被 Stale Bot 关闭（标记 `[stale]`），**但无人工诊断结论**，用户可能仍阻塞。 |
| [Issue #1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 💬 3 条评论 | **文件上传后模型感知不到**，回归 Bug（旧版将文件放入 project 目录可工作）。 | ✅ 已被 Stale Bot 关闭，**未关联 Fix PR**，文件上传链路存疑。 |
| [Issue #1099](https://github.com/netease-youdao/LobsterAI/issues/1099) | 💬 1 条评论、关联 PR #1100 | **IM 并发消息导致重复会话创建 & 响应丢失**，附详细竞态分析 & 代码定位。 | 🔄 **PR #1100 开放中（stale）**，已实现 per-conversation 异步锁串行化，急需 Review 合并。 |
| [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | 新建 1 天、跨 3 个 area | **安全加固**：MCP stdio 命令/参数校验、外部 URL 协议白名单、防止 Shell 注入。 | 🟢 **最新活跃 PR**，涉及 `main`/`openclaw` 核心路径，优先级应最高。 |

> **洞见**：用户痛点聚焦于**基础可用性（无响应、文件感知失效）**，而非高阶功能；核心并发 Bug（#1099）已有完整修复方案却因流程滞留，暴露**“修复已就绪、审核未跟进”**的结构性矛盾。

---

## 5. Bug 与稳定性：按严重程度排序

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR | 备注 |
|--------|-------|------|----------|---------------|------|
| **P0 阻塞** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 任意提问后**完全无输出、无报错**、界面静默 | 核心对话流，疑似大面积用户受影响 | ❌ 无 | 已被 Stale 关闭，**强烈建议人工重开并定责** |
| **P0 数据/安全** | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) | IM 并发导致**重复会话创建、消息响应丢失、映射覆盖** | 多用户/高频 IM 场景，数据一致性受损 | ✅ [PR #1100](https://github.com/netease-youdao/LobsterAI/pull/1100) (Open, stale) | PR 实现完善（双重锁 + 幂等创建），**应立即安排 Review** |
| **P1 回归** | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 文件上传后**模型不感知上下文**，旧版通过 project 目录工作 | 文件问答/知识库核心场景 | ❌ 无 | 需排查文件上传→向量化/上下文注入链路 |
| **P1 逻辑错误** | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | **无论输入什么回复相同内容**，附日志 | 疑似 Prompt 模板/上下文组装固化 | ❌ 无 | 已 Stale 关闭，日志可作为复现线索 |
| **P2 体验** | [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | MD→PDF 调用在线服务**弹多窗口、含会员框** | 导出功能，用户体验差 | ❌ 无 | 建议改用本地渲染（如 puppeteer/pdfkit） |
| **P2 文案** | [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | 官网流量包服务条款**文字错误** | 法务/合规风险 | ❌ 无 | 非代码问题，需联动运营修复 |
| **P3 增强** | [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) | 缺**停止/压缩上下文/Help**等急救入口 | 异常恢复能力不足 | ❌ 无 | 可结合 PR #1125 搜索重构时同步设计 |

> **关键提醒**：#1569 与 #1561 被 Stale Bot 误判为“非活跃”而关闭，**实为高优 Bug**，建议立即人工 Reopen 并打上 `bug`+`regression` 标签纳入当前 Sprint。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能描述 | 关联 PR | 成熟度 | 入版本概率判断 |
|----------|----------|---------|--------|----------------|
| [Issue #1567](https://github.com/netease-youdao/LobsterAI/issues/1567) | 输入框急救按钮：停止生成、压缩上下文、Help 指令 | 无 | 概念期 | 🟡 中 — 结合异常恢复机制，建议纳入下一版本 MVP |
| [PR #1125](https://github.com/netease-youdao/LobsterAI/pull/1125) | **会话内容全文搜索 + 关键词高亮 + 智能摘要**（原仅搜标题） | #1125 (Open, stale) | **代码完备**，含多词优先匹配、上下文摘要、高亮防遮蔽 | 🟢 **高** — 高频刚需，实现质量高，仅待 Review |
| [PR #1103](https://github.com/netease-youdao/LobsterAI/pull/1103) | **Docker Sandbox 就绪探测 & 状态 UI**（只读 `docker info`，12s 超时，含 i18n） | #1103 (Open, stale) | **代码完备**，含设置页只读状态展示、手动刷新、错误分类 | 🟢 **高** — OpenClaw 沙箱前置依赖，降低用户配置挫折感 |
| [PR #1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | 修复**跨 Provider 切模型后立即发消息报错**竞态（等待 Gateway 重启完成） | #1101 (Open, stale) | **代码完备**，定位精准（void 丢弃 Promise） | 🟢 **高** — 直接消除用户感知的“切模型即闪退” |
| [PR #1102](https://github.com/netease-youdao/LobsterAI/pull/1102) | 定时任务启用/禁用开关**增加 Tooltip 提示**（含中英 i18n） | #1102 (Open, stale) | 微小增强 | 🟢 **高** — 低风险、高性价比，捎带合并 |
| [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | **MCP stdio 命令/参数校验 + 外部 URL 协议白名单**（安全加固） | #2590 (Open, 1 天前) | 设计完整，涉及表单/JSON 导入/配置同步全链路 | 🟢 **必合** — 安全基线，阻塞下一版本发布 |

> **路线图推测**：下一版本（或 2026.9.x）大概率聚焦 **“稳定性收口 + 搜索增强 + 沙箱就绪 + 安全基线”**，而非大功能。建议维护者将上述 5 个高成熟度 PR 列入 **“下一版本必合清单”**，设定 1 周内完成 Review。

---

## 7. 用户反馈摘要：真实痛点与场景

| 痛点类别 | 典型原声（摘自 Issue 评论/描述） | 使用场景 | 情感倾向 |
|----------|----------------------------------|----------|----------|
| **核心功能不可用** | “提问后不运行，也不显示任何信息，不知道出什么问题了” (#1569) | 日常对话/提问 | 😡 **极度挫败** — 无报错、无日志指引，用户无法自救 |
| **文件能力回归** | “将文件拖入聊天框之后，模型不知道我有上传文件。这个是新版本才有的 bug” (#1561) | 文档问答、代码审查、知识库 | 😟 **失望** — 明确指出版本回归，信任受损 |
| **并发可靠性** | “同一 IM 对话快速连续收到多条消息时，存在两个竞态问题：重复会话创建、消息响应丢失” (#1099) | 群聊机器人、Webhook 高频回调、自动化流程 | 😐 **技术型用户理性报告** — 已提供代码级定位，期待专业修复 |
| **导出体验差** | “打开了三个浏览器页面，没有关掉；转换结果页面多了一个会员框” (#1096) | 文档归档、分享导出 | 😕 **厌烦** — 依赖第三方在线服务引入不可控干扰 |
| **异常无急救** | “当前使用过程中，可能因为上下文过长、或者后端 bug 导致出问题，需要有快速恢复手段” (#1567) | 长对话、复杂任务、异常兜底 | 🙏 **建设性诉求** — 希望产品提供“刹车与方向盘” |

> **满意度信号**：负面反馈集中在**基础交互链路（对话、文件、并发、导出）**，且多为**回归或长期未修**，提示“发布前冒烟测试覆盖不

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-09-03

> **数据统计周期**：2026-09-02 至 2026-09-03  
> **数据来源**：GitHub API (moltis-org/moltis)  
> **报告生成时间**：2026-09-03

---

## 1. 今日速览

- **发布高频迭代**：项目在 24 小时内连续发布 **3 个版本**（20260902.01 ~ .03），呈现极高的发布节奏，疑似为修复关键回归或推送热修复。
- **核心 Hook 机制补全**：核心贡献者 GTanger 发现并修复了 `AgentEnd`、`MessageSending`、`MessageSent` 三大生命周期 Hook **已声明但未分发** 的严重缺陷（Issue #1255），并通过 PR #1257 同步补全了工具调用链路追踪 ID（`tool_call_id`），解决了 Issue #1254 提出的关联性缺失问题。
- **推理能力扩展**：PR #1253 引入 `max` 推理等级，完善 `ReasoningEffort` Schema，并适配 OpenAI Codex Responses API，标志着模型推理控制粒度进一步细化。
- **依赖维护常态化**：Dependabot 自动提升 `browserslist` 至 4.28.8（PR #1256），前端构建链路依赖保持最新。
- **社区互动冷启动**：新 Issue 与 PR 均由核心成员发起，外部贡献者参与度为 0，项目处于**核心团队驱动的高强度内部迭代期**。

---

## 2. 版本发布

| 版本 | 发布时间 | 关联提交/说明 | 破坏性变更 | 迁移建议 |
| :--- | :--- | :--- | :--- | :--- |
| **20260902.03** | 2026-09-02 | 未提供详细 Changelog | 未知 | 建议查看 `CHANGELOG.md` 或 Release Assets 确认二进制兼容性 |
| **20260902.02** | 2026-09-02 | 未提供详细 Changelog | 未知 | 同上 |
| **20260902.01** | 2026-09-02 | 基线版本，Issue #1254/#1255 基于此版本复现 | - | 当前稳定基线 |

> ⚠️ **关注点**：三个版本在数小时内发布，且均无 Release Notes，强烈建议维护者在后续版本中补全发布日志，或通过 `git log --oneline 20260902.01..20260902.03` 补充变更上下文，便于下游用户评估升级风险。

---

## 3. 项目进展

### ✅ 待合并核心 PR（推进度：关键阻塞项修复中）

| PR | 标题 | 作者 | 状态 | 核心推进内容 | 关联 Issue |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[#1257](https://github.com/moltis-org/moltis/pull/1257)** | **fix(hooks): complete lifecycle dispatch** | GTanger | **Open** | **1. 分发 `AgentEnd`、`MessageSending`、`MessageSent` 事件（修复原生非流式场景缺失）<br>2. 新增 `tool_call_id` 字段关联 `BeforeToolCall`/`AfterToolCall`/`ToolResultPersist` 全链路<br>3. 保持 JSON 负载向后兼容** | #1255, #1254 |
| **[#1253](https://github.com/moltis-org/moltis/pull/1253)** | **feat(reasoning): add max effort level** | GTanger | **Open** | **1. Schema 新增 `max` 枚举值<br>2. 支持 `@reasoning-max` 模型后缀解析<br>3. OpenAI Codex API 透传 `max`，其余 Provider 兜底 clamp<br>4. UI 选择器、翻译、Broker 全链路暴露** | - |
| **[#1256](https://github.com/moltis-org/moltis/pull/1256)** | **chore(deps-dev): bump browserslist to 4.28.8** | dependabot[bot] | **Open** | 前端构建依赖常规升级，修复潜在目标浏览器解析问题 | - |

> **进度评估**：PR #1257 解决了 Hook 系统的**数据完整性**与**可观测性**两大核心短板，属于 P0 级修复，建议优先 Review 合并。PR #1253 为增值特性，可并行推进。

---

## 4. 社区热点

| 排名 | 对象 | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **[Issue #1255](https://github.com/moltis-org/moltis/issues/1255)**<br>`[Bug]: AgentEnd, MessageSending, and MessageSent hooks are declared but never dispatched` | 👍 0 / 💬 0 / ⏱️ 新建 | **API 契约不履行**：用户期望的生命周期钩子在非流式/原生模式下静默失效，导致依赖 Hook 做审计、日志、状态同步的外部集成完全失效。属于**功能性缺陷**而非边缘 Bug。 |
| **2** | **[Issue #1254](https://github.com/moltis-org/moltis/issues/1254)**<br>`[Feature]: Include a stable tool call ID in hook payloads` | 👍 0 / 💬 0 / ⏱️ 新建 | **可观测性缺口**：工具调用链路缺乏稳定 ID，无法在 `Before`/`After`/`Persist` 三阶段做端到端关联，阻碍复杂 Agent 编排的调试与追踪。 |
| **3** | **[PR #1257](https://github.com/moltis-org/moltis/pull/1257)** | 👍 0 / 💬 0 | 上述两个 Issue 的**统一修复方案**，技术债偿还与特性补全并行，代码变更涉及 Hook 分发核心路径，需重点 Code Review。 |

> **趋势**：当前讨论完全由核心维护者内部驱动，外部社区尚未介入。建议在 PR #1257 合并后，主动在 Release Notes / Discord / 论坛同步“Hook 系统修复完成”，引导插件作者适配 `tool_call_id`。

---

## 5. Bug 与稳定性

| 严重级 | Issue | 标题 | 复现版本 | 影响范围 | 修复进展 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0 - 阻塞/数据丢失** | **[#1255](https://github.com/moltis-org/moltis/issues/1255)** | Hook 声明未分发 | `20260902.01` | 所有依赖 `AgentEnd`/`MessageSending`/`MessageSent` 的插件、审计系统、自动化工作流 | **PR #1257 已提交修复**，待合并 |
| **P1 - 功能缺陷** | **[#1254](https://github.com/moltis-org/moltis/issues/1254)** | Tool Call 缺乏稳定 ID | `20260902.01` | 工具调用链路追踪、复杂 Agent 编排调试、持久化关联 | **PR #1257 已提交修复**（新增 `tool_call_id`），待合并 |

> **稳定性结论**：核心事件总线存在**实现缺失**，属于架构层面回归。好在发现及时且修复方案已就绪，合并后可彻底解决。建议在 CI 增加 Hook 分发完整性的集成测试用例，防止回归。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 优先级判断 | 纳入下一版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue #1254 + PR #1257** | Hook Payload 标准化：引入 `tool_call_id` 实现端到端关联 | **High** | **★★★★★** | 修复型需求，已有完整 PR，且保持向后兼容，极大概率随下个 Patch 发布 |
| **PR #1253** | Reasoning Effort 新增 `max` 等级，适配 OpenAI Codex Responses API | **Medium-High** | **★★★★☆** | 功能完善型，实现完备（Schema/API/UI/Translation），符合“模型能力跟进”路线图，大概率进入下个 Minor 版本 |
| **隐性信号** | 连续 3 个 Patch 版本发布 | - | - | 暗示项目可能正在为 **v2026.09 稳定分支** 或 **重大重构前的基线固化** 做准备 |

---

## 7. 用户反馈摘要

> **数据限制**：过去 24h 无外部用户评论，仅核心维护者 GTanger 自我复现并报告。
> **痛点推演**（基于 Issue 内容）：
> - **插件开发者**：无法在 Agent 结束、消息发送前/后注入逻辑（如成本统计、内容审查、状态持久化）。
> - **平台运维者**：工具调用链路断裂，无法构建完整的调用树，排查“工具调用超时/重试/幂等”极其困难。
> - **高阶用户**：期望对推理深度有更细粒度控制（`max` 级），以适配复杂推理任务。

---

## 8. 待处理积压

| 对象 | 类型 | 停留时长 | 风险提示 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #1257** | Fix (Core) | < 24h | **核心 Hook 失效修复**，阻塞插件生态可用性 | **🔴 立即 Review & Merge**；合并后触发 20260902.04 热修复发布 |
| **PR #1253** | Feature | < 24h | 功能完整，测试覆盖未知 | **🟡 并行 Review**；关注 OpenAI Codex API 兼容性测试用例 |
| **PR #1256** | Chore (Deps) | < 24h | 低风险依赖升级 | **🟢 自动合并** 或 快速 CI 通过后合并 |
| **Release Notes 缺失** | Process | 3 个版本 | 用户无法评估升级影响，破坏信任 | **🟠 建立 Release 自动化模板**，强制关联 PR/Issue 生成 Changelog |

---

## 📌 给维护者的行动建议

1.  **优先合并 PR #1257**，并立即切 tag `20260902.04` 发布，在 Release Note 中明确标注：**“修复 Hook 生命周期分发缺失，新增 tool_call_id 关联字段”**。
2.  **补全近 3 个版本的 Changelog**，哪怕是一句 “Internal refactor / Hotfix for hooks”，也优于空白。
3.  **在 CI 中加入 Hook 分发契约测试**：模拟流式/非流式、工具调用/无工具调用全场景，断言所有声明的 Hook 均被分发且 Payload 结构符合 Schema。
4.  **关注 PR #1253 的 Provider 兼容性矩阵**：确认 `max` 在 Anthropic、Google、Ollama 等 Provider 的 clamp 行为是否符合预期，避免静默降级导致用户感知偏差。

---

**下一期报告关注点**：PR #1257 合并后的回归验证、v2026.09 稳定分支切分计划、外部贡献者首个 PR 入选情况。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-09-03

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时增量（Issues 25 条、PRs 35 条、Release 1 个）  
> **统计口径**：2026-09-02 00:00 – 2026-09-03 00:00 (UTC)

---

## 1. 今日速览
- **发布节奏**：v2.2.0-beta.7 正式推送，Beta 迭代进入高频周期（b6→b7 间隔 <24h），说明核心团队正全力冲刺稳定版。  
- **代码活跃度**：35 个 PR 并行，其中 10 个已合并/关闭，合并率 28.6%；Open 状态 PR 多为“大块重构/新功能”（如 Creator 1.1.2、Sidebar 重设计、Theme Token 统一），处于 Code Review 瓶颈期。  
- **Issue 热度**：25 条更新，16 个新开/活跃，9 个关闭。**严重 Bug 占比高**（沙箱突破、内存索引失效、Cron 重复触发、上下文丢失），且多集中在 v2.2.0-beta 分支，暴露 Beta 质量门槛尚需提升。  
- **社区信号**：用户关注点从“能否跑通”转向“生产可用性”——A2A 协议、主从 Agent 协同、长上下文保真、局域网模型稳定性、主题定制等进入议程。  
- **健康度评分**：🟡 **中风险**——发布频率高但阻塞性 Bug 仍在涌现；PR 审核积压；安全类 Issue (#7511) 需 0-day 响应。

---

## 2. 版本发布
### v2.2.0-beta.7 (2026-09-02 发布)
| 变更类别 | 核心内容 | 影响面 |
|---|---|---|
| **Fix** | `fix(memory): normalize backend-specific embedding dimensions` (#7465) | 修复多 Embedding 后端维度不一致导致的索引报错，**ReMe 用户必须升级** |
| **Chore** | 版本号推至 v2.2.0b7 | 无破坏性变更 |
| **Fix** | `fix(webui): add dark-mode overrides for M...` | 暗色模式下 MCP 区域白块修复 (#7471 关联) |

> **迁移提示**  
> - 若使用 OpenAI-compatible Embedding 后端，**需重建索引**（后端维度归一化已生效）。  
> - 自定义 Provider 仍受 #7337 迁移影响（`max_tokens → max_output_length`），升级前请确认配置已适配（#7474 仍 Open）。

---

## 3. 项目进展（已合并/关闭的关键 PR）
| PR | 类型 | 核心推进 | 关联 Issue |
|---|---|---|---|
| #7489 | **Fix (Desktop)** | 保留 PyInstaller multiprocessing runtime hook，解决 macOS StdIO MCP 子进程重入 `backend_guard` 导致后端被杀 | #7481 |
| #7465 | **Fix (Memory)** | Embedding 维度归一化，彻底修复 ReMe 后台索引任务 `as_embedding:default accessed before start()` | #7469 |
| #7497 | **Fix (Security)** | Governance OFF 模式下依然拦截敏感路径工具调用，修复沙箱旁路 | #7511 (关联) |
| #7494 | **Fix (Privacy)** | 聊天可见文本不再泄露宿主绝对路径（Provider 错误、上传文件提示） | — |
| #7500 | **Fix (Providers)** | 连接测试阶段透传 `extra_headers`，修复自定义 OpenAI 端点鉴权失败 | #6464 (部分) |
| #7499 | **Chore (UI)** | 统一导航/主题切换图标为 Spark 线性风格，消除视觉割裂 | #7376 |
| #7495 | **A11y** | 语言/主题按钮加上无障碍名称与悬浮提示 | — |
| #7498 | **Fix (API)** | 未知工具配置更新返回 404 而非 500 | — |

> **整体进度**：核心稳定性（内存、安全、Desktop、Provider 连通性）获得实质性修复；UI/UX 统一化、Creator 插件体系、Skill v2 等大型特性仍在 Review 队列（#7486, #7502, #7509, #7348）。

---

## 4. 社区热点（评论/反应 Top 5）
| 排名 | Issue/PR | 评论数 | 核心诉求 | 分析 |
|---|---|---|---|---|
| 1 | **#7450** 主 Agent 不主动轮询子 Agent 状态 | 7 💬 | “主从协同半自动化，用户必须干预才能感知进度” | **架构级痛点**：需在 Runtime 引入心跳/事件总线，或提供 `auto_poll_subagents` 开关。 |
| 2 | **#7417** Console 流式输出重复/乱序 | 6 💬 | SSE 重放路径导致前端渲染重复 Chunk | 前后端协议层 Bug，影响观感，已关闭但需回归测试。 |
| 3 | **#7443** 危险指令规避安全策略 | 5 💬 | 知乎披露绕过案例，**安全红线** | 需配合 #7497、#7511 统一加固 Governance 引擎。 |
| 4 | **#7469** ReMe 后台索引崩溃 | 4 💬 | Embedding 维度不匹配导致静默失败 | 已经由 #7465 修复并随 b7 发布。 |
| 5 | **#7474** Custom Provider 加载失败 | 3 💬 | `max_tokens` 字段废弃后配置不兼容 | 文档/迁移脚本滞后，建议出 Codemod 或兼容层。 |

---

## 5. Bug 与稳定性（按严重度）
| 严重度 | Issue | 现象 | 是否有 Fix PR | 状态 |
|---|---|---|---|---|
| **🔴 Critical** | **#7511** 沙箱被突破 | 知乎实测可逃逸执行任意命令 | #7497 (部分) | **Open** 需紧急验证 #7497 是否完全覆盖 |
| **🔴 Critical** | **#7447** 长上下文早期记录彻底丢失 | 160 页文档会话，手工压缩后历史消失 | 无 | Open，疑似压缩/摘要策略 Bug |
| **🟠 High** | **#7480** Cron 升级重启非计划补发 + 卡死 | 两次升级后均出现 3 次触发，Inbox 通知异常 | 无 | Open，涉及调度器持久化与补偿逻辑 |
| **🟠 High** | **#7476** Cron 在 misfire_grace 窗口重复执行 | 备份脚本双跑，间隔 17-48s | 无 | Open，APScheduler 配置/锁机制缺失 |
| **🟠 High** | **#7510** `/memory/status` 500 (Desktop b7) | 新版本安装即复现，ReMe 诊断不可用 | 无 | Open，疑似打包缺少依赖或路径解析错 |
| **🟡 Medium** | **#7505** 局域网 LLM 频繁 `client disconnect` | LM Studio 直连重试最终超时 | 无 | Open，需增加连接池/超时/重试策略可配置 |
| **🟡 Medium** | **#7507** WeCom 流式逐字 150ms 节流 | 体验远差于 WeChat 原生 | 无 | Open，建议对齐 WeChat 渠道实现 |
| **🟡 Medium** | **#7512** 会话思考/输出中无法切换 | UI 阻塞，仅停止后可切 | 无 | Open，前端状态机锁定过度 |
| **🟢 Low** | **#7493** Agent Model Routing 面板不可见 | `showAdvancedModelControls` 未开启 | #7501 (功能 PR) | Open，PR 已提交待合并 |
| **🟢 Low** | **#7471** MCP 区域暗色模式白块 | 视觉回归 | #7489 (随 b7 修复) | **Closed** |

---

## 6. 功能请求与路线图信号
| 需求 | Issue/PR | 社区热度 | 纳入可能性 | 备注 |
|---|---|---|---|---|
| **A2A 协议官方支持** | #7484 | 👍0 / 2💬 | **高** | 架构文档已承诺 Driver 统一，MCP 已有，A2A 为自然下一步；需核心团队排期。 |
| **Agent Model Routing UI** | #7493 / #7501 | 1💬 / 新 PR | **极高** | PR #7501 已实现完整交互，预计下个 Beta 合入。 |
| **主题/字体/间距定制** | #7406 / #7487 | 1💬 / 新 PR | **中高** | #7487 做 Token 统一铺路，后续将出 Settings 面板。 |
| **PawPort 导入流** | #6960 | 首贡献者 PR | **中** | 已开发完善，需 Review 通过；对用户迁移极具价值。 |
| **Make-Skill v2** | #7508/#7509 | 重复 PR | **中** | 标记 `DO NOT MERGE`，设计评审中；若通过将重塑 Skill 生态。 |
| **Reranker UI** | #6399 | 老 PR 长期挂起 | **低** | 后端已就绪，UI 迟迟未合，优先级被新特性挤占。 |

---

## 7. 用户反馈摘要（真实痛点）
| 场景 | 代表引用 | 情绪倾向 |
|---|---|---|
| **主从 Agent 协同** | “不问‘进度如何’主 Agent 从不查子 Agent，长时间无动静让人焦虑” (#7450) | 😤 **强烈不满** — 核心工作流断点 |
| **长文档处理** | “两个会话昨天中午前的上下文彻底丢失，任务无法继续” (#7447) | 😰 **恐慌** — 数据信任度崩塌 |
| **生产环境稳定性** | “升级重启后 Cron 非计划补发三次，Inbox 全是重复通知” (#7480) | 😡 **愤怒** — 运维事故风险 |
| **局域网模型** | “频繁 client disconnect → 重试 → 超时，完全跑不通” (#7505) | 😞 **失望** — 私有化部署核心场景受阻 |
| **安全信任** | “沙箱被突破，知乎已公开绕过细节” (#7511) | 😨 **恐惧** — 企业级采用红线 |
| **UI 细节** | “暗色模式下 MCP 区域大白块、图标风格不统一” (#7471, #7376) | 😐 **挑剔** — 体验完美主义者关注点 |

---

## 8. 待处理积压（维护者关注清单）
| 项目 | 停滞时长 | 风险 | 建议行动 |
|---|---|---|---|
| **#6960 PawPort 导入流** | 21 天 | 用户获取关键路径缺失 | 安排 Core Reviewer 专项 Review，设定合入 Deadline。 |
| **#6399 Reranker UI** | 42 天 | 功能完备但不可见 | 拆分为最小可用 PR，优先合入；或标记 `help wanted` 招募社区。 |
| **#7401 Windows ACP 启动卡死** | 5 天 | Windows 用户首屏体验阻断 | 标记 `P0`，指派熟悉事件循环/插件加载的工程师。 |
| **#7348 v2.2.0 Release Notes** | 7 天 | 发布文档滞后于二进制 | 同步撰写 Changelog，配合下一个 Beta/RC 发布。 |
| **#7486 Creator 1.1.2 大 PR** | 1 天 | 变更面极广（T2V/I2V/S2V、锁、Docker） | **拆分为多个小 PR** 逐步合入，降低审核风险。 |
| **#7509/7508 Make-Skill v2 重复 PR** | 1 天 | 设计未定案即重复提交 | 关闭旧 PR，在 Issue 中先达成设计共识再实现。 |

---

### 📌 给维护者的三条建议
1. **安全止血优先**：#7511 为 0-day，建议今日内发布 **v2.2.0-beta.7.1** 热修复，仅含 #7497 及沙箱加固回测。  
2. **稳定性冻结窗口**：v2.2.0 正式版前建议设立 **“仅修 Bug”周**，暂缓 Creator/Skill v2/Sidebar 等大重构合入。  
3. **文档/迁移自动化**：针对 #7337、`max_tokens` 等破坏性变更，提供 **Codemod 脚本** 与 **版本兼容层**，减少用户手工改配置导致的 #7474 类问题。

> **下一期关注点**：Beta.8 是否包含沙箱加固、上下文丢失 Root Cause、Cron 幂等性修复、A2A 原型。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-09-03

---

## 1. 今日速览

- **活跃度评级：🔥 高** — 过去 24 小时共有 **100 条** Issue/PR 更新（Issue 50、PR 50），其中 35 个 Issue 处于活跃/新开状态，47 个 PR 待合并，显示社区与核心团队并行推进多条重型重构与 RFC。
- **核心主题聚焦**：运行时会话/持久化契约（#9487、#9600）、内存生命周期与知识图谱所有权（#6850、#9103、#9745、#9746）、沙箱/安全策略细粒度化（#6996、#10165、#10188）、Web 多会话与网关直发（#9353、#10050）、MCP 多模态工具结果修复（#10501、#10566）。
- **交付节奏**：无新版本发布；3 个 PR 已合并/关闭，多数大体量 PR（XL/L）仍在“需作者行动”或“需维护者审查”状态，表明审查吞吐是当前瓶颈。
- **风险信号**：多个 **S0/S1 级安全/数据丢失 Bug** 已有修复 PR 但尚未合并（#10165、#10188、#8559），需优先推进。
- **治理演进**：RFC 流程本身在迭代（#10288 定义延期投票周期，#9330 落地 AI 辅助审查 SOP），显示项目在规模化协作上投入治理成本。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展

### ✅ 已合并/关闭（3 个）
| PR/Issue | 标题 | 影响面 | 状态 |
|----------|------|--------|------|
| #10510 | 升级 mdBook 到 0.5.4 并启用内置图片缩放 | 文档部署 | Closed |
| #10243 | 退役未使用的遗留 HMAC node_transport 模块 | 配置/安全清理 | Closed |
| #10193 | Matrix 完整推理与生成的 thinking 状态冲突 | Channel/Matrix | Closed |

> 注：数据仅显示“已合并/关闭 3 条”，未列出具体 PR 编号，以上为同期关闭的 Issue 关联 PR 推测。

### 🚧 关键进行中大型 PR（XL/L，需作者/维护者行动）
| PR | 标题 | 规模 | 核心推进 | 关联 Issue/Tracker |
|----|------|------|----------|---------------------|
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | fix(memory): 为知识图谱添加按 Agent 的归属与作用域 | XL | 强制 Agent 所有权写入共享 SQLite KG，`KnowledgeScope` 绑定可信注册，读取需显式 `read_knowledge_from` 授权 | #6850, #9103 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | fix(tools): 会话工具与 discord_search 的按 Agent 所有权作用域 | XL | `sessions_*` 与 `discord_search` 绑定可信 Agent 所有权，关闭 check/use 竞态 | #9745 配套 |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | feat(cli): 插件安装/列表加入出站授权仪式 | XL | 引入 egress grant ceremony，首次安装需显式授权网络访问 | 安全强化 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | fix(delegate): 有界委托文件系统工具遵守目标工作区 | L | 重构 8 个核心 FS 工具、内存工具、目标 OS 沙箱/时间限制，修复委托越权 | #10165 |
| [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) | feat(channels): 同会话消息串行化 | XL | 同作用域消息等待在途 turn 完成，避免并发竞态 | Channel 可靠性 |
| [#9353](https://github.com/zeroclaw-labs/zeroclaw/pull/9353) | feat(web): 单 Agent 维持多独立会话 | XL | Web 端新增会话选择器、创建/恢复/重命名/删除，`/new` 平滑切换 | #8559 缓解 |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | feat(runtime): 上下文压缩锚定模型窗口比率 | XL | 引入 `context_compact_ratio`，按选中模型窗口动态计算压缩预算 | #10068 相关 |

### 🆕 今日新开 PR（高信号）
| PR | 标题 | 关键点 |
|----|------|--------|
| [#10567](https://github.com/zeroclaw-labs/zeroclaw/pull/10567) | feat(memory): 为召回条目打上召回日期戳 | 解决“旧条目与新条目文本不可区分”痛点 |
| [#10563](https://github.com/zeroclaw-labs/zeroclaw/pull/10563) | feat(runtime): 重采样并标记声称未收到动作的回复 | 以 `tool_receipts` 为锚，检测模型仅自然语言叙述未发工具调用的幻觉 |
| [#10566](https://github.com/zeroclaw-labs/zeroclaw/pull/10566) | feat(mcp): 将 type:image/audio 工具结果物化进多模态管线 | 补全 #9196 的 `blob` 形态，修复 OpenAI 兼容端点 400 报错（#10501） |

---

## 4. 社区热点

| Issue | 评论 | 状态/标签 | 核心诉求 |
|-------|------|-----------|----------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 32 | RFC, **risk:high**, channel:acp | **运行时拥有会话会话与传输适配器** — 重新定义会话持久化契约、传输面解耦，影响 ACP/网关/Channel 全链路，正在进行第 5 版修订投票。 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 25 | RFC, **accepted**, **risk:high** | **内存生命周期策略与存储后端解耦** — `Memory` trait 仅管存储，巩固/治理由上层策略统一，避免各 Gateway/Channel 重复实现。 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 22 | RFC, **in-progress**, **risk:high** | **细粒度沙箱策略** — 统一应用层路径准入与 OS 级沙箱，按风险画像表达工作区/路径限制。 |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | 19 | RFC, **accepted** | **权威内存存储与可选丰富连接器分离** — 存储/丰富架构边界明确，连接器走 bounded 决策评审。 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 19 | RFC, **needs-maintainer-review** | **Provider 构造与上线流程中将线协议一等化** — 统一 provider 别名、wire protocol 能力协商。 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 16 | RFC, **accepted**, desktop | **桌面屏幕交互与输入控制** — Computer-use 支持，明确有界批准单元、执行时重验证、sidecar 信任。 |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | 15 | Tracker, **risk:high** | **会话持久化契约所有权与层序 Tracker** — 四条工作流并行触达同一契约，急需指定 Owner 与合并顺序。 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 14 | Tracker, **accepted** | **维护者决策队列** — RFC/设计/发布策略的集中决策入口，避免分散滞留。 |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | 13 | RFC, **accepted**, **risk:high** | **网关直发 verbatim 频道消息** — 新增 `/api` 路由，无需 Agent turn 直接下发外部消息到 Channel。 |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) | 12 | RFC, **accepted**, web | **Web bundle/daemon 兼容性契约** — 以能力协商为契约定义 `web_dist_dir` 部署兼容性。 |

> **趋势**：Top 10 均为 **RFC/Tracker**，且多为 `risk:high`、`status:accepted` 或 `in-progress`，说明社区正处于**架构决策密集期**，实现交付滞后于设计共识。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 状态 | 关联 Fix PR |
|--------|-------|------|------|-------------|
| **S0** 数据丢失/安全 | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | 独立委托绕过自身 `block_high_risk_commands` | **in-progress** | [#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188) `needs-maintainer-review`、`#10391` `needs-author-action` |
| **S0** 数据丢失/安全 | [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | Matrix 未按 `.well-known` 发现 homeserver | **Closed** | 已修复合并 |
| **S1** 工作流阻断 | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web 端退出聊天窗口导致 Agent 停止 | **in-progress** | [#9353](https://github.com/zeroclaw-labs/zeroclaw/pull/9353) 多会话架构缓解 |
| **S2** 退化行为 | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | Bootstrap 文件静默截断 6000 字符 | **OPEN** | 无 |
| **S2** 退化行为 | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | 交互式会话硬顶

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*