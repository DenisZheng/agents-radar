# OpenClaw 生态日报 2026-08-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-17 00:53 UTC

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

# OpenClaw 项目日报 | 2026-08-17

---

## 1. 今日速览

**项目整体状态：高负荷运行，核心稳定性与消息投递可靠性是当前最大痛点，社区活跃度极高但积压严重。**

- **活跃度评估**：过去 24 小时 Issues 更新 500 条（新开/活跃 460，关闭 40），PR 更新 500 条（待合并 394，合并/关闭 106），合并率约 21%，显示审核吞吐跟不上提交速度。
- **核心矛盾**：高优先级（P1）Bug 密集在“静默消息丢失”、“子任务完成态丢失”、“事件循环阻塞”、“会话状态不一致”等可靠性领域，多个 Issue 持续数月未根治（如 #44925、#48003、#115908）。
- **发布节奏**：仅 1 个性能分析归档发布（`pr-124528-profiles`），无功能性版本推送，说明主分支处于“修补期”而非“特性交付期”。
- **PR 质量**：合并/关闭的 106 个 PR 中，多数为维护者（`steipete`、`clawsweeper` 等）推动的修复、重构、文档与 CI 改进，大规模重构（如 Composer 重写 #124301、网关轮询修复 #124891）正在进行，兼容性风险标记（🚨 compatibility）普遍较高。
- **社区信号**：用户对“静默失败”“无感知丢失”“排查成本高”极度不满，多个 Diamond Lobster（🦞）级 Issue 反复被评论置顶，呼吁建立“端到端可观测的投递语义”（#87561）。

---

## 2. 版本发布

### `pr-124528-profiles` — Gateway 性能剖面证据包
- **链接**：[Release pr-124528-profiles](https://github.com/openclaw/openclaw/releases/tag/pr-124528-profiles)
- **内容**：PR #124528 相关的 Gateway CPU Profile 归档。包含“修复前/修复后”在三节点、十二并发轮次压测下的事件循环热点对比数据。
- **性质**：非功能发布，供性能评审与基准回溯使用。
- **迁移提示**：无代码变更，仅供性能工程参考。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 标题 | 类型 | 影响面 | 状态 | 关键点 |
|----|------|------|--------|------|--------|
| [#124837](https://github.com/openclaw/openclaw/pull/124837) | `fix(channels): route targetless direct-message replies to sender` | Bug Fix | 消息投递、Reef 协议 | **CLOSED** | 修复代理回复 Reef 直消时误向自身句柄而非发送者路由的问题，消除“回复被对端收到但对端回复却丢失”的诡异现象。 |
| [#124838](https://github.com/openclaw/openclaw/pull/124838) | `fix(media): bound image-optimize fetch headroom to the image cap` | Bug Fix | 媒体处理、DoS 防护 | **CLOSED** | 修复 `loadWebMedia` 在开启优化时忽略调用侧 `maxBytes`、放行 100MB 上限的越权读取，堵住单条消息撑爆内存的路径。 |
| [#124791](https://github.com/openclaw/openclaw/pull/124791) | `fix(runners): align reclaim results with runtime` | Bug Fix | 会话生命周期、SDK 契约 | **CLOSED** | 统一 `sessions.reclaim` 返回值（`local`/`reclaimed`），修复原生模型校验拒绝合法响应的契约不匹配。 |
| [#124824](https://github.com/openclaw/openclaw/pull/124824) | `fix(ui): show session changes in the review panel` | UX Fix | Control UI、Review 面板 | **CLOSED** | 修复 Review 面板长期显示空状态，无法查看会话变更的回归。 |
| [#124814](https://github.com/openclaw/openclaw/pull/124814) | `fix(ui): make light-theme diff syntax readable` | UX Fix | Control UI、Light 主题 | **CLOSED** | 修复浅色主题下 diff 新增行近乎不可见的可访问性缺陷。 |
| [#124823](https://github.com/openclaw/openclaw/pull/124823) | `fix(ci): render only aggregate QA evidence` | CI/Infra | QA 证据渲染、矩阵验证 | **CLOSED** | 修复成熟度渲染递归扫描嵌套分片导致合法载荷被拒的假阳性。 |
| [#124695](https://github.com/openclaw/openclaw/pull/124695) | `chore(i18n): refresh native locales` | Chore | i18n、Android/iOS/macOS | **CLOSED** | 自动化同步原生客户端语言包，保护分支合规。 |
| [#124715](https://github.com/openclaw/openclaw/pull/124715) | `chore(ui): refresh control ui locales` | Chore | i18n、Web UI | **CLOSED** | 同上，Control UI 语言包自动刷新。 |
| [#124808](https://github.com/openclaw/openclaw/pull/124808) | `refactor(validation): type producers and drop internal re-validation` | Refactor | 类型系统、Agent 事件、Memory 插件 | **CLOSED** | 消除内部事件的重复 `unknown` 校验，收敛契约边界，减少运行时开销与死代码。 |
| [#124810](https://github.com/openclaw/openclaw/pull/124810) | `feat(tools): prompt proactive widget use` | Enhancement | Agent 提示词、Widget 渲染 | **CLOSED** | 强化 `show_widget` 系统提示，引导模型主动生成可视化而非等待用户显式要求。 |

**进展小结**：今日合并以 **“小步快跑、修补回归、收敛契约”** 为主，未见大型特性入主干。维护者集中清理了 UI 回归、媒体越界、Reef 路由、SDK 契约不一致等高可见度缺陷，显著降低了“可见表层 Bug”密度，但深层可靠性问题（事件循环阻塞、投递语义、子任务丢失）仍在开放 PR 中攻关。

---

## 4. 社区热点（高评论/高关注 Issue 与 PR）

### Issues Top 5（按评论数）

| # | Issue | 评论 | 核心诉求 | 关键标签 |
|---|-------|------|----------|----------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | **Silent reply failures still recurring after #116277 closed** | 97 | **P1、消息丢失**：监控 cron 持续记录“静默回复失败”，#116277 修复无效，无队列载荷证据，排查极难。 | `P1`, `impact:message-loss`, `CLOSED`(但复发) |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | **Subagent completion silently lost — no retry, no notification, no auto-restart on timeout** | 31 | **P1、钻石龙虾级**：子任务完成在 E31/E42/E45 等多种模式下静默丢失，无重试、无通知、无自动重启，会话状态不可靠。 | `P1`, `🦞`, `impact:session-state`, `impact:data-loss`, `impact:message-loss` |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | **Per-agent cost budget enforcement at the gateway level** | 26 | **P2、特性**：网关层面强制单代理日/月成本上限，防止失控支出，无需外部监控。 | `P2`, `🌊`, `feature` |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | **Steer mode does not inject messages mid-turn for main sessions** | 21 | **P1、回归**：`steer` 模式不在工具边界注入用户消息，导致主会话转向延迟至轮次结束，根因指向 `KeyedAsyncQueue` 引入。 | `P1`, `🦞`, `regression`, `clawsweeper-recovery-stuck` |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | **Tiered bootstrap file loading for progressive context control** | 19 | **P2、特性**：分级加载 bootstrap 文件，避免大工作区每会话全量注入浪费上下文窗口。 | `P2`, `🌊`, `feature` |

### PRs 关注焦点（维护者驱动的大型重构）

| # | PR | 状态 | 评论/风险 | 核心价值 |
|---|----|------|-----------|----------|
| [#124301](https://github.com/openclaw/openclaw/pull/124301) | `improve(control-ui): restructure the composer as a multiline surface` | **OPEN**, ⏳ waiting on author | 🚨 compatibility, XL, 有视频演示 | **Composer 彻底重写**：多行编辑、参数分阶段、斜杠命令原生化，解决长期以来单行编辑器对复杂指令的束缚。 |
| [#124891](https://github.com/openclaw/openclaw/pull/124891) | `fix(gateway): prevent control-plane polling stalls` | **OPEN**, ⏳ waiting on author | 🚨 automation, XL | **控制平面轮询阻塞根治**：共享网关下多工作树被单仓库锁串行化，导致 UI/RPC 多秒卡顿。 |
| [#124773](https://github.com/openclaw/openclaw/pull/124773) | `fix(reply): report settled delivery outcomes once` | **OPEN**, ⏳ waiting on author | 🚨 compatibility, 🚨 message-delivery, XL, 覆盖 9 个渠道 | **统一投递终态上报**：消除“入队即视为成功”再经多层修补导致的可见性不一致，直接对接 #87561 “持久化最终投递语义”诉求。 |
| [#124910](https://github.com/openclaw/openclaw/pull/124910) | `fix: deliver requested image artifacts across agent runtimes` | **OPEN**, ⏳ waiting on author | 🚨 compatibility, 🚨 security-boundary, M | **跨运行时镜像制品交付**：修复 Codex/Claude CLI 路径下“活动显示生成图片但无附件”的缺失。 |
| [#124858](https://github.com/openclaw/openclaw/pull/124858) | `fix(security): prevent approved scripts from changing before execution` | **OPEN**, ⏳ waiting on author | 🚨 compatibility, 🚨 security-boundary, XL | **执行时脚本防篡改**：批准与执行间的 TOCTOU 窗口，默认 Codex harness 受影响。 |

**热点分析**：社区讨论集中在 **“看不见的丢失”**（静默失败、子任务幽灵态、投递黑洞）与 **“动不动就卡死”**（事件循环阻塞、轮询锁竞争、SQLite 同步 IO）。维护者侧正以“大手术”回应：Composer 重写、投递语义重构、控制平面解锁、安全边界加固，但均处于“等待作者/评审”状态，**交付周期拉长**是隐患。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 标题 | 核心症状 | 是否有 Fix PR | 关联标签 |
|--------|-------|------|----------|---------------|----------|
| **P0 级（生产环境数据丢失/服务不可用）** | [#121058](https://github.com/openclaw/openclaw/issues/121058) | Silent reply failures recurring | 回复静默丢失，监控持续报警，**已关闭 Issue 复发** | 无（原 #116277 失效） | `P1`, `impact:message-loss`, `CLOSED`(复发) |
| | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost | 子任务完成多模式静默丢失，**无重试/通知/重启**，会话状态损坏 | 无（`clawsweeper:no-new-fix-pr`） | `P1`, `🦞`, `impact:data-loss`, `clawsweeper-recovery-stuck` |
| | [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript projection livelock blocks main thread | 持续写入下重建循环不收敛，主线程卡顿数十秒，**阻塞所有通道传输** | 无（`clawsweeper:source-repro`） | `P1`, `🦞`, `impact:session-state` |
| | [#112423](https://github.com/openclaw/openclaw/issues/112423) | Large SQLite transcript cleanup blocks event loop | 归档大型 SQLite 逐行物化/压缩/落盘/回读，**全在网关线程** | 无（`clawsweeper:source-repro`） | `P1`, `🦞` |
| | [#100941](https://github.com/openclaw/openclaw/issues/100941) | Gateway drops concurrent tool-to-g

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告 | 2026-08-17

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现 **“头部深耕稳定性、腰部竞跑协议标准、长尾探索垂直场景”** 的三层态势。  
**OpenClaw、ZeroClaw、Hermes Agent** 三大头部项目同步陷入 **“发布即热修复、核心可靠性债务集中爆发”** 的成长烦恼，集体从特性竞赛转向投递语义、会话状态、事件循环阻塞等基础设施硬仗；**NanoClaw、IronClaw、Moltis、CoPaw** 等腰部项目在 **ACP/MCP 协议适配、Provider 标准化、插件沙箱安全** 上形成竞合，推动生态互操作基线上移；**PicoClaw、LobsterAI** 等长尾项目聚焦 **企业级合规（SSRF、IPC 隔离）、端侧多模态体验** 等垂直深耕。整体来看，生态已度过“Demo 可跑通”阶段，进入 **“生产级可靠性、协议互操作、安全合规”** 三大门槛的攻关期。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新(新开/活跃/关闭) | PR 更新(待合并/合并关闭) | Release | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (460/40) | 500 (394/106) | 1 (性能归档) | ⚠️ **高负荷/积压严重** | P1 Bug 密集、合并率 21%、核心可靠性攻坚期 |
| **ZeroClaw** | 48 (46/2) | 50 (46/4) | 0 | 🟢 **高强度治理/架构演进** | RFC 决策密集、并行测试基建债务、安全沙箱落地 |
| **Hermes Agent** | 50 (50/0) | 47 (47/3) | 1 (v0.20.2) | 🔴 **发布后震荡/债务爆发** | 0 Issue 关闭、36 天滞留核心修复 PR、回归缺陷密集 |
| **NanoClaw** | 1 (0/1) | 32 (19/13) | 0 | 🟢 **高吞吐/小步快跑** | 单日 13 PR 合并、架构重构与基建并行、主分支可发布态 |
| **Moltis** | 3 (2/1) | 8 (0/8) | 0 | 🟢 **稳健推进/基建收敛** | 7 PR 合并覆盖编译/测试/安全/长期债、CI 门禁恢复绿标 |
| **IronClaw** | 1 (1/0) | 9 (7/2) | 0 | 🟢 **中等偏高/依赖维护主导** | 核心成员 Issue-to-PR <1h、Dependabot 占 55%、Slack UX 极速修复 |
| **PicoClaw** | 3 (1/2) | 5 (4/1) | 0 | 🟡 **中等偏低/安全债清理期** | 3 安全 PR 搁置 9 天、Slack 上传 P0 阻断、Exa Provider 就绪 |
| **CoPaw (QwenPaw)** | 9 (6/3) | 9 (9/0) | 0 | 🔴 **审核瓶颈/稳定性回归** | 0 PR 合并、v2.1.0 两大 P0 崩溃无 Fix PR、9 修复型 PR 待审 |
| **LobsterAI** | 10 (0/10) | 17 (8/9) | 0 | 🟡 **低活跃/陈旧资产清理** | 10 Issues 全 stale、9 陈旧 PR 批量合并、安全基线达标 |
| **NanoBot / NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 0 | ⚪ **静默/无活动** | 过去 24h 无动态 |

> **指标说明**：Issues/PR 数据基于各项目日报“今日速览”汇总；健康度综合考量吞吐率、阻塞项严重度、发布节奏、技术债偿还进度。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类头部对比 |
| :--- | :--- | :--- |
| **核心优势** | **协议栈最完整**（Reef/Channels/Gateway 三层解耦）、**多运行时编排能力最强**（原生/Codex/Claude CLI/ACP 统一抽象）、**企业级控制面最成熟**（Control UI、Review Panel、权限审批流）。 | ZeroClaw 侧重插件沙箱与 WASI 边界；Hermes Agent 侧重 Desktop 原生体验与 Tool Calling 密度。 |
| **技术路线差异** | **“重网关、重协议、重可观测”**：以持久化事件溯源、KeyedAsyncQueue、端到端投递语义为核心，牺牲部署轻量度换取状态一致性与审计能力。 | ZeroClaw 采用 **“轻内核、重插件、WASI 沙箱”**；Hermes Agent 走 **“Electron/Tauri 重客户端、本地优先”** 路线。 |
| **社区规模与活跃度** | **生态规模最大**：单日 500+ Issue/PR 活动、百人级核心维护者、Diamond Lobster (🦞) 级长期追踪机制成熟。 | ZeroClaw 核心团队决策高效（RFC 20+ 评论深度）；Hermes Agent 贡献者多但审核吞吐低（合并率 ~6%）。 |
| **当前痛点** | **规模带来的熵增**：投递黑洞、子任务幽灵态、事件循环阻塞属于“成功的烦恼”，需架构级重构（Composer 重写、投递语义重构）而非点修复。 | ZeroClaw 面临并行测试基建债；Hermes Agent 面临“修复在途、发布在先”的流程反模式。 |

**定位结论**：OpenClaw 是当前生态中 **最接近“企业级生产部署就绪”** 的平台型项目，其技术债本质是 **规模化后的分布式系统一致性难题**，解决路径将直接惠及整个生态的工程实践。

---

## 4. 共同关注的技术方向（多项目共振信号）

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **投递可靠性与端到端可观测** | **OpenClaw** (#87561、#124773)、**ZeroClaw** (#9580/9582 网络防护铺路)、**NanoClaw** (#3255 多实例去重、#3284 单一流式入口) | 统一“入队即成功”反模式，建立持久化终态上报、回声抑制、幂等键、跨实例去重机制。 |
| **ACP / MCP / OpenAI Chat Completions 协议互操作** | **ZeroClaw** (#8603 RFC 22💬)、**Moltis** (#1204 MiniMax ACP)、**CoPaw** (#6302 Provider 统一路由)、**IronClaw** (ACP 适配隐性)、**PicoClaw** (#3302 MCP OAuth 2.1) | 头部项目竞相实现 **“标准入口”**，ZeroClaw 推 Chat Completions Profile 打通 Open WebUI/LobeChat，Moltis/CoPaw 落地 ACP Agent 注册表。 |
| **插件/工具沙箱与出站安全** | **ZeroClaw** (#9582 WASI HTTP 默认拦截、Grant Ceremony)、**PicoClaw** (#3322-3324 SSRF 三件套)、**LobsterAI** (#1832 IPC 越权修复、#1833 Scheme 白名单) | 从“事后修补”转向 **“默认拒绝、显式授予”**，WASI HTTP 策略、SSRF 防护、IPC 能力最小化成共识基线。 |
| **会话/上下文工程：压缩、分级、跨会话记忆** | **OpenClaw** (#22438 分级 Bootstrap)、**Hermes Agent** (#63298 提示词边界保留、#63009 压缩阈值)、**NanoClaw** (#3257 跨会话扇出/回填)、**CoPaw** (#7003 ViBo 外挂记忆) | 解决“大上下文窗口下的成本与噪音”，分级加载、语义压缩、长期记忆外挂成标配需求。 |
| **事件循环/异步运行时非阻塞化** | **OpenClaw** (#112423 SQLite 阻塞、#115908 Transcript 活锁)、**ZeroClaw** (#9965/10011 ETXTBSY 竞态)、**NanoClaw** (#3254 入站两阶段选取) | 将重 IO/计算任务（归档、编译、模型推理）移出网关/主循环，引入后台运行时、暂停时钟测试、两阶段调度。 |
| **多模态原生化（视频/音频/图片流式）** | **OpenClaw** (#124910 跨运行时镜像制品)、**CoPaw** (#7070/7071 view_video 修复)、**Moltis** (#1093 Activity Log 可见性含媒体)、**IronClaw** (#7682 Slack 音频私密化) | 从“Base64 落盘”转向 **流式分块、CDN 直传、Provider 原生多模态路由**，解决大文件内存打满与渲染延迟。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户/场景 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **平台级编排、多租户、审计合规、极致可靠性** | 企业内部 AI 平台团队、需要自建 Gateway 的 SaaS 厂商 | **三层解耦**（Reef 协议/Channels/Gateway）、**事件溯源 + SQLite 事务日志**、重状态一致性 |
| **ZeroClaw** | **插件生态、WASI 安全沙箱、协议网关、可扩展性** | 插件开发者、需要安全隔离的多租户部署、协议转换层 | **WASI 组件模型**、**默认拒绝网络策略**、**RFC 治理流程**、**外部化集成战略** |
| **Hermes Agent** | **桌面原生体验、Tool Calling 密度、本地优先、多模态** | 个人开发者、重度 CLI/TUI 用户、本地大模型爱好者 | **Electron/Tauri 重客户端**、**本地 SQLite + 向量索引**、**Codex/Claude CLI 原生集成** |
| **NanoClaw** | **轻量网关、适配器热插拔、Chat SDK 桥接、运维自动化** | 中小团队自建 Bot、多渠道（Slack/Telegram/Discord）统一接入 | **Channel Registry 热启动**、**投递批次预览 Hook**、**中转流式单一入口**、**MCP 文档记忆** |
| **Moltis** | **日程/CalDAV、心跳守护、Activity Log 多级可见性、Agent 生态** | 个人知识管理、日程自动化、隐私敏感用户 | **Rust 全栈**、**CalDAV 原生 REPORT 查询**、**三级 Activity Log 策略**、**MiniMax ACP 落地** |
| **IronClaw** | **Slack/协作平台深度集成、自动化引擎、确定性结果抑制** | 依赖 Slack 工作流的团队、自动化运维场景 | **IronLoop 自动化引擎**、**结构化输出内置工具**、**Dependabot 高频供应链维护** |
| **PicoClaw** | **嵌入式/边缘部署、SSRF 合规、Exa 搜索、Simplex 通道** | IoT/边缘网关、合规要求高的企业内网、去中心化通讯 | **轻量级核心**、**安全加固优先 (SSRF/IPC)**、**原生 Web Search Provider** |
| **CoPaw (QwenPaw)** | **阿里云生态、DataPaw 数据分析、多模态视频、插件隔离** | 阿里云 Model Studio 用户、数据分析师、企业内部低代码 | **统一 Provider Catalog**、**原生 DataPaw Runtime**、**插件 System Prompt 隔离** |
| **LobsterAI** | **桌面客户端打磨、OpenClaw 代理适配、Agent 资产导入导出、安全基线** | 个人桌面用户、OpenClaw 下游消费者、隐私关注者 | **Electron + OpenClaw Provider**、**IPC 安全加固**、**Agent 模板资产化** |

---

## 6. 社区热度与成熟度分层

| 分层 | 项目 | 特征信号 | 阶段判定 | 关键风险/机遇 |
| :--- | :--- | :--- | :--- | :--- |
| **第一梯队：平台化攻坚期** | **OpenClaw、ZeroClaw** | 日均 500+/50+ 动态、RFC 治理成熟、核心维护者全职投入、企业级采用案例公开 | **快速

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-17

---

## 1. 今日速览

**整体状态：高活跃度、高债务、发布后震荡期**  
项目昨日发布 v0.20.2 补丁版（含 397 个 PR），但过去 24 小时涌入 50 个新增/活跃 Issue 且 **0 个关闭**，新报告的严重回归缺陷涵盖 Desktop 音频重复、Vision 工具失效、Windows 更新挂起、配置写入损坏、Cron 调度器死锁、前端渲染卡死等核心路径。PR 端有 47 个待合并、仅 3 个合并/关闭，多个 7 月中旬的大型修复 PR（如 #63298、#63292、#63009）仍滞留未合并。社区讨论集中在 **技术债务爆发**（技能索引过期、会话状态泄漏、多 Profile 隔离失效）与 **新版本回归**。项目健康度呈现「发布即热修复」态势，需警惕稳定性债务累积。

---

## 2. 版本发布

### v2026.8.16 — Hermes Agent v0.20.2 (2026-08-16)
- **性质**：补丁版，聚合自 v0.20.1 以来 ~397 个 PR 的稳定标签，供 Docker 镜像、托管部署、全新安装下游消费。
- **范围**：未列出具体变更清单，但据 Issue 反馈，v0.20.1 → v0.20.2 窗口期引入了多个 P1/P2 回归（见下文 Bug 章节）。
- **迁移提示**：
  - Windows 用户更新前建议手动关闭 Desktop 及 `cua-driver` 进程（#87703、#87772）。
  - 依赖 `skills-index.json` 的下游需确认索引刷新 cron 正常（#66616）。
  - 多 Profile 网关用户注意会话/密钥隔离已知缺陷（#87722、#87723）。
- **链接**：[Release v2026.8.16](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16)

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（3 个）
| PR | 标题 | 影响面 | 状态 |
|----|------|--------|------|
| [#88031](https://github.com/NousResearch/hermes-agent/pull/88031) | fix(tools): route openai-api through native vision and fail closed on vision refusals | Vision 工具路由、OpenAI 兼容层 | **CLOSED** (今日创建即合并) |
| [#6410](https://github.com/NousResearch/hermes-agent/pull/6410) | feat(codex-chat): native multimodal vision, /fast mode, /contextlimit… | Codex 聊天多模态、CLI 命令 | **CLOSED** (长期 PR 今日关闭) |
| [#88037](https://github.com/NousResearch/hermes-agent/pull/88037) | GXTD-390 add first-class cross-profile handoff tool | 跨 Profile 任务移交、Kanban 集成 | **OPEN** (今日新建，里程碑级特性) |

### 滞留的高价值 PR（建议优先 Review）
| PR | 创建时间 | 核心修复/特性 | 关联 Issue | 停滞天数 |
|----|----------|---------------|------------|----------|
| [#63298](https://github.com/NousResearch/hermes-agent/pull/63298) | 2026-07-12 | 端到端保留排队提示词边界（会话状态核心重构） | #45560 | 36 |
| [#63292](https://github.com/NousResearch/hermes-agent/pull/63292) | 2026-07-12 | Desktop 将中断补全视为元数据而非助手文案 | — | 36 |
| [#63009](https://github.com/NousResearch/hermes-agent/pull/63009) | 2026-07-12 | 压缩阈值自动上调扩展至自定义 `codex_responses` Provider | — | 36 |
| [#57687](https://github.com/NousResearch/hermes-agent/pull/57687) | 2026-07-03 | TUI/Gateway WS 分离时关闭 `slash_worker` 防内存泄漏 | — | 45 |
| [#56034](https://github.com/NousResearch/hermes-agent/pull/56034) | 2026-07-01 | TUI/CLI 预检路径新增硬性消息计数安全阀 | — | 47 |

> **进展评估**：核心会话/压缩/内存泄漏修复已编码完成但积压 30+ 天未合并，导致 v0.20.2 发布时未包含这些稳定性改进，形成「修复在途、发布在先」的反模式。

---

## 4. 社区热点

| Issue | 评论数 | 核心诉求 | 热度分析 |
|-------|--------|----------|----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **45** | 技能索引 `skills-index.json` 过期 29.8h（阈值 26h），自动化刷新失效，文档站技能搜索降级 | **持续 1 个月未愈**，涉及 CI cron、部署流水线、下游技能发现，影响面广且长期未修 |
| [#53480](https://github.com/NousResearch/hermes-agent/issues/53480) | 5 | 更新器需检测活跃 Desktop 会话并阻塞/延迟/强制确认，防止会话被杀 | 典型 **用户体验安全缺口**，关联 Windows 更新挂起（#87703、#87772） |
| [#87652](https://github.com/NousResearch/hermes-agent/issues/87652) | 3 | Desktop v0.20.1 为单条回复打开两个 `/api/audio/speak-stream` WebSocket，导致朗读重复 | **v0.20.x 回归**，用户感知强，易复现 |
| [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) | 3 | Vision 工具首次探测后消失，`_AuxProbeClientStub` 被错误缓存 | **工具链可用性回归**，长进程会话受影响 |
| [#87644](https://github.com/NousResearch/hermes-agent/issues/87644) | 1 | Cron 调度器遇 `EMFILE` 后永久停摆，心跳仍正常导致监控失效 | **基础设施级故障**，FD 泄漏家族（#60859、#79742、#80792）再发 |

> **趋势**：Top 5 热点中 4 个为 **过去 24h 新开** 的 P1/P2 回归，仅 #66616 为长期债务。社区焦点已从「新特性」转向「版本可用性」。

---

## 5. Bug 与稳定性

按严重程度排序（P0=数据丢失/安全/全站不可用，P1=核心流程阻断，P2=功能缺陷，P3=体验/边缘）：

| 严重度 | Issue | 标题 | 关键症状 | 已有 Fix PR |
|--------|-------|------|----------|-------------|
| **P1** | [#87644](https://github.com/NousResearch/hermes-agent/issues/87644) | Cron 调度器 `EMFILE` 后永久停摆，心跳正常掩盖故障 | 定时任务全面失效，监控无感知 | 无 |
| **P1** | [#87694](https://github.com/NousResearch/hermes-agent/issues/87694) | `hermes update` autostash 产生孤儿提交，导致后续所有更新失败 (`git pull --ff-only` 断裂) | 更新通道永久性损坏 | 无 |
| **P1** | [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) | Windows 更新卡 11 分钟于 `cua-driver` UAC 提示（隐藏非交互 PowerShell） | 更新挂死，需手动杀进程 | 无

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-17

> **数据来源**：GitHub API / 仓库 `sipeed/picoclaw`  
> **统计窗口**：2026-08-16 00:00 – 2026-08-17 23:59 (UTC)  
> **报告生成**：2026-08-17

---

## 1. 今日速览
- **整体活跃度：中等偏低**。过去 24 小时无新版本发布，**新增 Issue 3 条**（含 1 条当日新增 Bug）、**PR 活动 5 条**（4 个待合并、1 个关闭），核心维护者主要在处理安全加固与新通道接入的 Review 阶段。  
- **核心动向**：安全修复集中于 **SSRF 防护**（Weixin/Wecom/通用入站下载），新功能集中在 **Exa 搜索提供商** 与 **Simplex 通道** 接入。  
- **风险点**：Slack 媒体上传 **完全失效**（#3338），已影响生产环境文件分发，且暂无对应 Fix PR。  
- **社区响应**：Issue 评论数极低（均 ≤ 3），表明讨论多集中在内部或即时通讯渠道，GitHub 仅作追踪用途。  
- **技术债标记**：3 个安全 PR（#3322/3323/3324）均打 `[stale]` 标签，提示长期未推进，需排期合并以收敛攻击面。

---

## 2. 版本发布
> **无新版本发布**。当前最新稳定版仍为 `picoclaw 0.3.x` 系列（Issue #3338 环境信息佐证）。

---

## 3. 项目进展
| PR | 状态 | 类型 | 核心变更 | 对项目推进度 |
|----|------|------|----------|--------------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | **CLOSED** (stale) | ✨ New Feature | 新增 **Simplex 通道类型**，扩展去中心化即时通讯接入能力 | +1 通道生态，但因 stale 关闭，后续可能以重构形式回归 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **OPEN** | ✨ New Feature | 引入 **Exa 原生 Web 搜索 Provider**（`tools.web`/`web_search`），支持高亮、时间范围、API Key 认证 | 丰富 AI Agent 工具链，替代/补充现有搜索源，Review 中 |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | **OPEN** (stale) | 🔒 Security | **通用入站媒体下载启用 `BlockPrivateTargets`**，覆盖 QQ/Telegram/Discord/LINE/Slack，修复 SSRF | 关键安全基线补全，**建议优先合并** |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | **OPEN** (stale) | 🔒 Security | **WeCom 媒体客户端改用 `CreateSafeHTTPClient`**，防止重定向访问内网 | 配套 #3322，收敛企微攻击面 |
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | **OPEN** (stale) | 🔒 Security | **Weixin 媒体客户端同步加固**，新增 `mediaClient` 与 URL 校验 | 同 #3323，微信生态安全闭环 |

> **整体进度评估**：安全加固系列（3 个 PR）已完成代码编写，卡在 Review/合并环节；Exa Provider 功能完整，测试通过后可直接入主干；Simplex 通道因设计变更被搁置。

---

## 4. 社区热点
| 排名 | 对象 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302) | 👍 0 / 评论 3 / **存活 18 天** | **MCP Server OAuth 2.1 支持**（引用 #2546）。用户期望 PicoClaw 作为 MCP Client 能对接最新 OAuth 2.1 规范的 Server，属于**协议跟进型增强**，优先级标为 Nice-to-Have，但随 MCP 生态演进可能升级为 Core。 |
| 2 | [Issue #3325](https://github.com/sipeed/picoclaw/issues/3325) | 👍 0 / 评论 1 / 存活 8 天 | **Telegram 原生表格渲染**（Bot API 10.1+）。当前 Markdown 表格降级为代码块，用户希望利用 `reply_markup`/`table` 新能力提升可读性，**属于 UX 细节打磨**。 |
| 3 | [Issue #3338](https://github.com/sipeed/picoclaw/issues/3338) | 👍 0 / 评论 0 / **当日新增** | **Slack 媒体上传彻底失败**（`file.size=0` SDK 拦截）。**生产级阻断 Bug**，虽无点赞但影响面广（所有 Slack 文件分发场景），需立即排期修复。 |

> **趋势**：安全类 PR 虽标 `stale` 但近期集中更新（8/16 仍有活动），说明维护者正在批量清理技术债；新增 Bug #3338 打破了近期“零 Bug 报告”的假象。

---

## 5. Bug 与稳定性
| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR | 建议动作 |
|--------|-------|------|----------|---------------|----------|
| **P0 - 阻断** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack `SendMedia` 未设置 `FileSize` → SDK 拒绝上传 | 所有使用 Slack 发送图片/文件的 Bot/工作流 | **无** | 1. 立即指派维护者补全 `UploadFileParameters.FileSize` 计算；2. 补充单测防回归 |
| P2 - 功能缺失 | #3302 | MCP Server OAuth 2.1 不兼容 | 接入新版 MCP Server 的用户 | 无 | 纳入下一季度路线图，参考 #2546 实现 |
| P3 - 体验降级 | #3325 | Telegram 表格渲染为纯文本/代码块 | 重度 Telegram Markdown 用户 | 无 | 适配 Bot API 10.1 `table` 类型，低优先级 |

---

## 6. 功能请求与路线图信号
| 来源 | 需求 | 关联 PR/进展 | 入版本可能性 |
|------|------|--------------|--------------|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | MCP OAuth 2.1 客户端支持 | 无 PR，仅设计讨论 | **中** – 随 MCP 标准化推进，可能在 v0.4 / v1.0 纳入 |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Telegram 原生表格 | 无 PR | **低** – 属于锦上添花，依赖 Bot API 普及率 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Exa Web Search Provider | **PR Ready**，测试通过即可合并 | **高** – 扩展工具生态，无破坏性变更 |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Simplex Channel | PR 已关闭，可能重写 | **不确定** – 取决于 Simplex 协议稳定性与社区需求 |

> **路线图推测**：v0.3.x 维护分支将优先合并 **安全三件套（#3322-3324）** 与 **Exa Provider（#3299）**；OAuth 2.1 与 Simplex 更可能规划在下一个大版本。

---

## 7. 用户反馈摘要
- **痛点**：Slack 文件上传**完全不可用**（#3338），用户被迫回退到手动上传或外部链接分发。  
- **期望**：MCP 生态跟进更快（#3302），Telegram 消息渲染更现代化（#3325）。  
- **隐性信号**：Issue 评论极少，但 PR `#3322-3324` 近期仍有维护者推送，说明**安全合规压力来自内部审计或大客户要求**，而非社区呼声。  
- **满意点**：Exa Provider PR（#3299）获得作者快速迭代，说明**工具链扩展性设计**被开发者认可。

---

## 8. 待处理积压（建议维护者本周关注）
| 对象 | 停滞时长 | 风险 | 建议 |
|------|----------|------|------|
| [PR #3322](https://github.com/sipeed/picoclaw/pull/3322) | 9 天 (stale) | **全通道 SSRF 防护缺失** | **立即 Review/合并**，配合 CI 增加 SSRF 回归测试 |
| [PR #3323](https://github.com/sipeed/picoclaw/pull/3323) | 9 天 (stale) | WeCom 内网探测风险 | 同 #3322 批量合并 |
| [PR #3324](https://github.com/sipeed/picoclaw/pull/3324) | 9 天 (stale) | Weixin CDN 劫持风险 | 同 #3322 批量合并 |
| [Issue #3338](https://github.com/sipeed/picoclaw/issues/3338) | 0 天 | Slack 文件分发中断 | **今日内指派**，输出 Hotfix PR |
| [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302) | 18 天 | MCP 协议落后 | 创建 Epic/Issue 拆解任务，纳入 Sprint 规划 |

---

> **下一期预告**：关注安全三件套合并后的 v0.3.x 补丁版本发布、Slack Hotfix 进度、Exa Provider 入主干情况。  
> **联系维护组**：如需加速 Review，可在对应 PR `@sipeed/core-maintainers` 或内部 Slack `#picoclaw-dev` 催办。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-17

> 数据周期：2026-08-16 00:00 – 23:59 (UTC) | 数据来源：GitHub API / 仓库 `nanocoai/nanoclaw`

---

## 1. 今日速览

- **整体活跃度：高** —— 单日 32 条 PR 更新（19 个待合并、13 个已合并/关闭），核心团队 (`gavrielc`) 推动了 10+ 个核心模块的并行落地，呈现典型的 “大批量小步快跑” 节奏。
- **核心交付聚焦**：跨会话上下文扇出/回填、消息组 `detached_at` 生命周期、出站投递多实例去重、入站批次两阶段选取、中转流式交付唯一入口、Chat SDK 桥接增强、权限/注册/工具链/技能等 8 个子系统同步推进。
- **稳定性信号**：13 个 PR 已合并/关闭，均带 `[follows-guidelines, core-team]` 或 `[PR: Fix]` 标签，代码评审与 CI 门禁运行正常，未见回滚或热修复 PR。
- **社区端**：仅 1 条 Issue（误提交已关闭），外部贡献者 `amit-shafnir`、`wakqasahmed`、`stumpjumper`、`adar666` 各自提交针对性修复/增强 PR，生态参与度平稳。
- **版本发布**：无新 Release，主分支处于 “积累变更 → 待下一周期打包” 状态。

---

## 2. 版本发布

> 本周期无新版本发布。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#3284](https://github.com/nanocoai/nanoclaw/pull/3284) | **核心重构** | 确立 “中转流式交付为唯一内容入口”，移除结果门发送，引入 DB 支持的回声抑制 | 消除流式/非流式双轨并存导致的重复/丢包风险，为后续多模态流式奠定确定性架构基石 |
| [#3262](https://github.com/nanocoai/nanoclaw/pull/3262) | **功能增强 (A8+C4)** | Chat SDK 桥接：DM 线程归一化、app-context 缓存挂载、dm-opened 钩子 | 统一跨平台 DM 体验，解决线程 ID 不一致导致的上下文断裂，直接服务于多平台 Agent 部署 |
| [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) | **基建 (A1)** | Channel Registry 新增 `startChannelAdapter(key)` 热启动单一适配器 | 支持运行时动态注册/升级适配器，零停机扩展新渠道，运维弹性显著提升 |
| [#3264](https://github.com/nanocoai/nanoclaw/pull/3264) | **基建 (A2)** | 投递批次预览 Hook `registerDeliveryBatchPreview` | 为昂贵预取（嵌入/工具预热）提供安全切点，且失败不阻塞主流程 |
| [#3265](https://github.com/nanocoai/nanoclaw/pull/3265) | **体验 (A3)** | `CreateAgentOptions.suppressCreatedNotify` 抑制成功通知 | 允许上层编排在创建后继续补全配置再统一通知，减少噪音 |
| [#3266](https://github.com/nanocoai/nanoclaw/pull/3266) | **权限 (A4)** | 注册卡片拦截器 `registerChannelCardInterceptor` | 为自动化审批/拒绝/静默处理提供标准化扩展点，支持企业级治理策略 |
| [#3259](https://github.com/nanocoai/nanoclaw/pull/3259) | **工具链修复** | skill-apply 标题序号剥离、headless 浏览器 URL 暴露、脚本继承提取 | 消除向导步骤编号漂移，提升无头模式可观测性，开发体验打磨 |
| [#3260](https://github.com/nanocoai/nanoclaw/pull/3260) | **权限策略** | 新增 `decline_notify` 未知发送人策略：礼貌拒绝 + 所有者 FYI | 在 “静默丢弃” 与 “管理员审批卡片” 之间提供轻量中间态，降低运营干扰 |
| [#3261](https://github.com/nanocoai/nanoclaw/pull/3261) | **适配器能力扩展** | 可选能力：`setTyping(status)`、`setThreadTitle`、`setSuggestedPrompts` + 注册表透传 | 为支持富在线状态/线程标题/建议提示的平台（Slack/Teams/Chat SDK）提供标准化能力声明 |
| [#3278](https://github.com/nanocoai/nanoclaw/pull/3278) | **新功能 (MCP)** | `save_document` MCP 工具：持久化 Word/PDF 到 Agent 记忆 | 文档记忆 + 填充编辑 Epic 首个故事落地，开启非结构化知识资产托管 |
| [#3283](https://github.com/nanocoai/nanoclaw/pull/3283) | **Bug 修复** | 保留 Chat SDK 超链接目标，显示文本被截断/重标时仍保留隐藏去重 URL | 修复富文本链接丢失回归，保障引用完整性 |
| [#3282](https://github.com/nanocoai/nanoclaw/pull/3282) | **Bug 修复** | Telegram 配对码提取兼容空格分隔（`12 34 56`） | 消除用户粘贴官方卡片码失败的高频入口阻塞 |
| [#3280](https://github.com/nanocoai/nanoclaw/pull/3280) | **Bug 修复** | `ncl groups config update` 支持将可空标量置 NULL（而非空串） | 修复配置取消赋值无效的长期易用性缺陷 |

**整体进度评估**：13 个 PR 全部合并入主干，涵盖 **架构重构 2、核心功能 4、基建/工具链 4、缺陷修复 3**，单日交付密度处于项目历史高位，主分支处于 “可随时发布” 状态。

---

## 4. 社区热点（讨论/关注度最高）

| 排名 | 对象 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) (Open) | 评论数最多（未披露具体数） | **跨会话上下文扇出/回填/历史查询** —— 核心团队主推的重量级特性，涉及多会话共享上下文一致性、DM 回填策略、CLI 历史命令新增，架构评审讨论集中于此 |
| 2 | [#3256](https://github.com/nanocoai/nanoclaw/pull/3256) (Open) | 高关注 | **消息组 `detached_at` 生命周期** —— 引入软删除语义，影响投递拒绝、重新加入、布线保留，运维与数据一致性关注点密集 |
| 3 | [#3254](https://github.com/nanocoai/nanoclaw/pull/3254) (Open) | 高关注 | **入站批次两阶段选取** —— 修复 “上下文行挤占任务行导致唤醒空转” 的生产级稳定性缺陷，测试用例与边界条件讨论活跃 |
| 4 | [#3281](https://github.com/nanocoai/nanoclaw/pull/3281) (Open) | 外部贡献者修复遗留会话兼容 | **Agent 级 `ncl tasks` 兼容 pre-2.1.54 会话** —— 解决历史数据迁移盲区，用户升级无感知诉求明确 |
| 5 | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) (Open, 长期) | 持续更新 | **Discord 附件仅含 URL 无法读取** —— 两个月未合并，涉及 Chat SDK 桥接下载/暂存/呈现全链路，平台用户痛点强烈 |

> **趋势**：核心团队 PR (`gavrielc`) 占据讨论带宽前 3 位，外部贡献者集中在兼容性修复与平台适配，Issue 端极度安静（仅 1 条误提交），说明 **主要协作发生在 PR 评审而非 Issue 追踪**。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 来源 | 是否有 Fix PR | 状态 |
|--------|------|------|---------------|------|
| **P0 生产阻塞** | 入站批次选取逻辑导致任务行被上下文行挤出，唤醒后无活可干 | [#3254](https://github.com/nanocoai/nanoclaw/pull/3254) | ✅ 已合并 | 已修复入主干 |
| **P0 数据一致性** | 多实例共享同一平台地址时，出站投递解析到任意实例而非发送者自身 | [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) | ✅ Open (核心团队) | 待合并，风险可控 |
| **P1 功能缺陷** | Telegram 配对码含空格粘贴失败 | [#3282](https://github.com/nanocoai/nanoclaw/pull/3282) | ✅ Open (外部) | 待合并，单行修复 |
| **P1 易用性** | `ncl groups config update` 无法清空可空标量（写入空串而非 NULL） | [#3280](https://github.com/nanocoai/nanoclaw/pull/3280) | ✅ Open (外部) | 待合并 |
| **P2 兼容性** | Agent 级任务命令不识别旧版会话 (`thread_id LIKE 'sys_%'` 判断缺失) | [#3281](https://github.com/nanocoai/nanoclaw/pull/3281) | ✅ Open (外部) | 待合并 |
| **P2 平台适配** | Discord 入站附件仅含 URL，无字节/路径，Agent 仅见 `[file: ...]` 占位 | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | ✅ Open (外部, 长期) | **积压 66 天**，需核心团队介入评审 |

**稳定性结论**：P0 级均已修复或处于最终评审，无未处理的崩溃/回归。长期积压项 `#2752` 需纳入下周迭代排期。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 对应 PR / 规格 | 纳入下一版本概率 |
|----------|----------|----------------|------------------|
| [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) | 跨会话上下文扇出、DM 回填、回声剪枝、`ncl sessions history` | 核心团队主线 Epic | **极高**（已进入评审终局） |
| [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) | 适配器热启动 (A1) | `architecture-nanoclaw-v2-2026-08-16` A1 | **极高**（已合并） |
| [#3264](https://github.com/nanocoai/nanoclaw/pull/3264) | 投递批次预览 Hook (A2) | 同规格 A2 | **极高**（已合并） |
| [#3278](https://github.com/nanocoai/nanoclaw/pull/3278) | `save_document` MCP 工具 (Story 1.1) | `spec-document-memory` Epic | **高**（已合并，后续 Story 1.2/1.3 将跟进） |
| [#3261](https://github.com/nanocoai/nanoclaw/pull/3261) | 适配器可选能力标准化 | 平台差异化能力声明 | **高**（已合并，文案需同步更新文档） |
| 外部 Issue/讨论 | OpenMail 邮件渠道技能 (`/add-openmail`) | [#1251](https://github.com/nanocoai/nanoclaw/pull/1251) (长期 Open) | **中**（需安全审查与 CI 集成，近期无推进） |

**路线图推断**：下一版本 (v2.2 或 v2.1.60+) 将以 **“跨会话上下文 + 文档记忆 MVP + 适配器运维自动化”** 为主题，核心团队 4 个 A 系列基建项已就绪，文档记忆 Epic 首故事落地，外部贡献修复的兼容性问题将随版本发布。

---

## 7. 用户反馈摘要

> 本周期 **Issue 评论区无实质用户反馈**（仅 1 条误提交关闭）。从 PR 描述与提交者视角反推痛点：

| 痛点场景 | 反映来源 | 解决进度 |
|----------|----------|----------|
| **多 Bot 同房间投递错乱** | 核心团队生产排查 → [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) | Fix PR 待合并

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-17

---

## 1. 今日速览

*   **整体活跃度：中等偏高**。过去 24 小时内共有 **1 个新 Issue** 与 **9 个 PR 更新**（含 2 个已关闭/合并），显示项目处于持续迭代与依赖维护的活跃期。
*   **核心动向**：核心贡献者 `sergeiest` 针对 Slack 集成的用户引导体验问题（#7681）极速推出修复 PR（#7682），体现了“Issue-to-PR”快速响应机制的有效运行。
*   **维护负荷**：Dependabot 产生了 **5 个依赖更新 PR**（Rust crates、GitHub Actions、WASM 工具链），占 PR 总数 55%，表明自动化依赖管理是当前维护工作的主要组成部分。
*   **技术债清理**：核心成员 `hanakannzashi` 移除了已弃用的 IronLoop 网络配置（#7683），CI 机器人同步了代码库知识图谱（#7680），项目架构持续精简。
*   **大型特性推进**：`serrrfirat` 发起的自动化确定性结果抑制特性（#7651，XL 级）持续更新，预示着自动化引擎核心逻辑的重大演进。

---

## 2. 版本发布

*   **今日无新版本发布。**

---

## 3. 项目进展

### ✅ 已合并/关闭（2 个）

| PR | 标题 | 类型 | 影响评估 |
| :--- | :--- | :--- | :--- |
| **[#7683](https://github.com/nearai/ironclaw/pull/7683)** | `chore: remove retired IronLoop network settings` | **技术债清理 / 架构精简** | **高价值**。移除废弃的 `network_access` 配置字段，简化可信仓库配置 Schema，降低认知负担与误配风险。由核心成员 `hanakannzashi` 操作，通过 `git diff --check` 校验。 |
| **[#7632](https://github.com/nearai/ironclaw/pull/7632)** | `chore(deps): bump the everything-else group...` | **依赖维护** | **常规维护**。更新 `base64`, `toml`, `rstest`, `jsonschema` 等 4 个 Rust 依赖至新版本，已合并入主干。 |

### 🚧 进行中/待评审重点 PR（3 个）

| PR | 标题 | 规模/风险 | 关键进展 |
| :--- | :--- | :--- | :--- |
| **[#7682](https://github.com/nearai/ironclaw/pull/7682)** | `fix(slack): deliver the unlinked-user connect nudge privately...` | **L / Low** | **关键 UX 修复**。针对今日新 Issue #7681，实现：1. 共享频道中 @bot 回复私密化（仅用户可见）；2. 引入一键连接链接（携带上下文），消除手动多步跳转。解决安全与体验双重痛点。 |
| **[#7651](https://github.com/nearai/ironclaw/pull/7651)** | `feat(automations): add deterministic no-result suppression` | **XL / Low** | **核心特性**。重构自动化触发器 `trigger_create` 逻辑，引入 `result_delivery` 确定性推导（仅匹配/变更/有结果时通知），消除歧义。涉及宿主内置工具暴露，影响自动化引擎核心行为。 |
| **[#7680](https://github.com/nearai/ironclaw/pull/7680)** | `chore(agents): refresh codebase knowledge graph` | **XS / Low** | **CI 基建**。夜ly 工作流自动生成的代码库记忆快照更新，辅助 AI Agent 上下文理解，需常规 Review 合并。 |

---

## 4. 社区热点

### 🔥 最高关联度：Slack 用户引导体验优化
*   **Issue**: **[#7681](https://github.com/nearai/ironclaw/issues/7681)** `[enhancement, epic]` **Slack: unlinked-user connect message is public and requires a manual round trip**
    *   **作者**: `sergeiest` (核心贡献者)
    *   **核心诉求**：
        1.  **隐私泄露**：共享频道中，未关联账户用户 @bot 触发的“请去 Web 端关联”提示**公开可见**，泄露用户未授权状态。
        2.  **体验断层**：用户需手动跳转 Web App -> 关联 -> 返回 Slack 重试，无上下文传递，流程割裂。
    *   **响应速度**：**Issue 创建即同步提交修复 PR [#7682](https://github.com/nearai/ironclaw/pull/7682)**，体现核心团队对 Slack 集成体验的高优先级关注。

### 🤖 依赖更新集中营（Dependabot 批量产出）
*   5 个 Dependabot PR 同天更新（[#7684](https://github.com/nearai/ironclaw/pull/7684), [#7406](https://github.com/nearai/ironclaw/pull/7406), [#7020](https://github.com/nearai/ironclaw/pull/7020), [#7262](https://github.com/nearai/ironclaw/pull/7262), [#7632](https://github.com/nearai/ironclaw/pull/7632)），覆盖 Rust 生态、GitHub Actions、WASM 工具链。虽无人工讨论，但反映项目**供应链安全维护的高频节奏**。

---

## 5. Bug 与稳定性

| 严重度 | 来源 | 现象描述 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **中** | **[Issue #7681](https://github.com/nearai/ironclaw/issues/7681)** | **Slack 集成信息泄露与交互死胡同**：共享频道公开提示未关联用户状态；引导流程需手动往返，易导致用户流失。 | ✅ **已有修复 PR [#7682](https://github.com/nearai/ironclaw/pull/7682)** (Open, 待 Review) |
| 低 | 依赖更新 PR 系列 | 潜在的版本不兼容风险（如 `tokio-tungstenite 0.30.0` [#7020](https://github.com/nearai/ironclaw/pull/7020) 可能含 Breaking Changes）。 | 🔄 **持续验证中** (CI 测试通过后方可合并) |

> **稳定性结论**：今日无生产级崩溃或回归报告。主要风险点集中在依赖升级链的兼容性验证上，核心功能 Bug 已在数小时内进入修复流程。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 纳入下一版本概率 | 分析依据 |
| :--- | :--- | :--- | :--- |
| **Issue #7681 / PR #7682** | **Slack 引导流程私密化 + 一键魔法链接** | **极高 (95%)** | Epic 标签 + 核心成员主导 + PR 已就绪 + 直接解决安全/体验痛点。 |
| **PR #7651** | **自动化确定性结果抑制** | **高 (80%)** | XL 级重构，核心成员 `serrrfirat` 推动，涉及 `builtin.structured_output` 等底层能力，属规划内核心演进。 |
| **PR #7683** | **清理弃用 IronLoop 配置** | **确定 (100%)** | 已合并。为后续 IronLoop v1 Schema 彻底落地扫清障碍。 |
| **Dependabot PRs** | **工具链现代化 (Rust 2024 Edition 预演, Actions v4+)** | **中 (持续进行)** | 非功能性需求，但为长期维护奠基。`toml 1.1.4` 等更新暗示 Edition 迁移准备。 |

---

## 7. 用户反馈摘要

*   **数据来源有限**：今日唯一 Issue 由核心贡献者 `sergeiest` 内部发起，非外部社区用户反馈。
*   **隐性痛点投影**：Issue #7681 暴露的问题实质是**“隐式假设用户已完成授权”**与**“跨平台上下文传递缺失”**——这是 AI Agent 类产品接入协作平台（Slack/Discord/Teams）时的通用架构短板。
*   **满意度侧写**：核心团队对 “Time-to-Fix” 极其敏感（Issue-to-PR < 1h），说明项目内部对 **DX (Developer Experience) 与 UX 一致性** 有极高标准，间接惠及终端用户。

---

## 8. 待处理积压

| 项目 | 状态 | 停滞时长 | 风险提示 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **[PR #7020](https://github.com/nearai/ironclaw/pull/7020)** `chore(deps): bump tokio-tungstenite 0.29.0 -> 0.30.0` | **Open** | **15 天** (创建于 8/2) | **中**。WebSocket 核心依赖大版本升级，若未充分测试可能引入网络层不稳定。Dependabot PR 易被忽视。 | **指派核心成员 Review**，重点跑集成测试/压测，确认无 Breaking Change 后合并。 |
| **[PR #7406](https://github.com/nearai/ironclaw/pull/7406)** `chore(deps): bump actions group` | **Open** | **8 天** (创建于 8/9) | **低-中**。GitHub Actions 升级 (`setup-node`, `rust-cache`, `docker/login`) 可能影响 CI 稳定性。 | 合并前触发完整 CI 验证，关注 `rust-cache` 行为变更。 |
| **[PR #7262](https://github.com/nearai/ironclaw/pull/7262)** `chore(deps): bump wasm group` | **Open** | **12 天** (创建于 8/5) | **低**。WASM 组件工具链更新，若项目近期无 WASM 发布计划可降级处理。 | 确认 WASM 发布管道兼容性后合并，或暂时搁置至下个发布周期。 |
| **[PR #7651](https://github.com/nearai/ironclaw/pull/7651)** `feat(automations): deterministic no-result suppression` | **Open** | **3 天** (创建于 8/14) | **高 (机会成本)**。XL 级核心特性，Review 负载大，拖延会阻塞后续自动化能力迭代。 | **安排专项 Review 会议**，拆解为可增量合并的子 PR 或集中精力一次性通过。 |

---

**📌 维护者行动建议摘要**：
1.  **即时**：Review 并合并 **#7682** (Slack 隐私/体验修复)，回归测试共享频道场景。
2.  **今日内**：清理 Dependabot 积压，**优先处理 #7020 (tokio-tungstenite)** 网络层风险。
3.  **本周**：安排 **#7651** (自动化核心重构) 的深度代码评审，确保架构演进可控落地。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-08-17

> **数据基准**：GitHub 过去 24 小时（~2026-08-16 更新）Issues/PRs 活动聚合  
> **核心结论**：项目处于 **“大规模陈旧资产清理与安全加固收尾”** 阶段。无新版本发布，无新增 Issue，核心开发活力集中在 4 月底前的 PR 批量合并，当前处于技术债偿还与架构硬化的空窗期。

---

## 1. 今日速览
- **活跃度评级：⭐⭐☆☆☆ (低)** —— 10 条 Issue 全为 `[stale]` 标记的旧单（创建于 4 月），由机器人或人工批量更新状态；17 条 PR 中 9 条关闭/合并，均为 4 月提交的“陈旧 PR”集中入库，仅 #2452 为 8 月新增活跃 PR。
- **核心动作**：安全加固 3 连合并（日志脱敏、IPC 越权修复、Scheme 白名单）、Agent 生态补全（导入导出、图片头像）、Cowork 体验修复（模型入口、草稿保留、会话 ID 透传）。
- **风险信号**：依赖升级 PR #1765 (`@headlessui/react` 1.7 → 2.2) 搁置 4 月；多个 UI/体验优化 PR (#1682, #1683, #1707, #1769, #1770, #1773) 长期挂起，阻塞用户感知迭代。

---

## 2. 版本发布
**无新版本发布**。建议关注后续是否将今日合并的安全修复与 Agent 功能打包为补丁版本（如 `v0.x.y-patch`）。

---

## 3. 项目进展：批量合并推进的关键里程碑

| PR | 类型 | 核心价值 | 状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#1831** | **Security (Critical)** | 主进程 & IM 模块敏感日志脱敏（Token、AuthCode、Profile、SSE 内容不再落盘） | ✅ **Closed/Merged** | [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) |
| **#1832** | **Security (Critical)** | 限制 `store:*` IPC 越权访问，收窄 `ipcRenderer` 通用桥，防渲染端 XSS 窃取/篡改 `auth_tokens`、`github_copilot_token` | ✅ **Closed/Merged** | [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) |
| **#1833** | **Security (High)** | `shell.openExternal` 增加 Scheme 白名单，拦截 `file:`/`javascript:`/`data:` 等危险协议，堵塞模型输出诱导的本地文件探测/代码执行链路 | ✅ **Closed/Merged** | [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) |
| **#1691** | **Feature (Agent)** | Agent 模板导入导出 (`.agent.json`)，支持跨设备/用户共享自定义 Agent，含 UI 入口 | ✅ **Closed/Merged** | [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691) |
| **#1760** | **Feature (Agent)** | Agent 头像支持图片上传，兼容 Emoji，提升多 Agent 识别度 | ✅ **Closed/Merged** | [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) |
| **#1693** | **UX (Cowork)** | 无模型时 ModelSelector 一键跳转设置页；修复切换会话/发送导致草稿丢失 | ✅ **Closed/Merged** | [#1693](https://github.com/netease-youdao/LobsterAI/pull/1693) |
| **#1715** | **Fix (OpenClaw)** | 修复 OpenClaw 代理请求缺失 `session_id`，恢复多 Cowork 会话并发识别 | ✅ **Closed/Merged** | [#1715](https://github.com/netease-youdao/LobsterAI/pull/1715) |
| **#1835** | **Fix (Cowork)** | 去除 `continueSession` 失败时重复推送的双系统错误消息，净化对话流 | ✅ **Closed/Merged** | [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835) |
| **#1690** | **UX (IM)** | IM 实例删除增加二次确认弹窗，合并 i18n Key，防误删高成本配置 | ✅ **Closed/Merged** | [#1690](https://github.com/netease-youdao/LobsterAI/pull/1690) |

**整体推进度**：安全基线达标（3/3 关键项合并），Agent 资产化能力落地（导入导出+头像），Cowork 核心流程体验修复基本完成。下一步需清理挂起的 UI/PR 积压以释放用户价值。

---

## 4. 社区热点：存量问题的“技术考古”与真实阻塞

| Item | 热度指标 | 核心诉求 | 分析 |
| :--- | :--- | :--- | :--- |
| **#1813** DeepSeek V4 Schema 报错 | 👍 0 / 💬 8 / **Closed (stale)** | 供应商拒绝请求 Schema/Tool Payload，疑似模型侧兼容性断裂 | 已标记 Stale 关闭，但若 DeepSeek V4 为主力模型，**需确认是否已由 Provider 侧修复或客户端适配**，否则属生产环境阻塞。 |
| **#1783** Diff 失灵根因定位 | 👍 0 / 💬 2 / **Open (stale)** | 前端 `extractDiffFromToolInput` 仅从顶层取 `old_str`/`new_str`，忽略嵌套结构，**给出精确代码定位与修复建议** | **高价值技术债**：用户已完成 Root Cause Analysis，建议立即转为 PR 修复，恢复 Edit 工具核心体验。 |
| **#1698** 龙虾与“智企帝王蟹”端口冲突 | 👍 0 / 💬 3 / **Open (stale)** | 同机部署两款产品 Gateway 端口竞争，**需进程隔离或端口动态协商机制** | 涉及产品线共存的工程化问题，优先级取决于内部协同战略。 |
| **#2452** OpenClaw Provider 前缀保留 | 👍 0 / 💬 - / **Open (新)** | 修复 `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` 持久化丢失 Provider 前缀导致渲染侧解析异常 | **唯一近期活跃开发 PR**，直指模型标识符解析健壮性，建议优先 Review 合并。 |

---

## 5. Bug 与稳定性：已修复与待修复的对比

| 严重度 | Issue | 现状 | 关联 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (安全/数据)** | 敏感信息泄露日志、IPC 越权、Scheme 注入 | ✅ **已修复合并** | #1831, #1832, #1833 | 安全基线已建立，需回归测试验证无副作用。 |
| **P1 (核心功能)** | **Write/Edit Tool 执行失败** (#1796) | 🟡 **Closed (stale)** | 无 | 用户反馈“最近几天持续失败”，Stale 关闭掩盖风险，**必须复现验证**。 |
| **P1 (核心功能)** | **Diff 异常/不显示** (#1783) | 🔴 **Open** | 无 (用户给出修复代码) | 编辑器核心交互受损，**建议立即基于用户分析创建 PR**。 |
| **P1 (兼容性)** | **Win11 安装图标白色无效** (#1714) | 🔴 **Open** | 无 | 首次安装体验受损，影响分发转化。 |
| **P2 (模型适配)** | DeepSeek V4 Provider Schema 报错 (#1813) | 🟡 **Closed (stale)** | 无 | 需确认是否由 #2452 间接修复或需单独适配。 |
| **P2 (并发冲突)** | 智企帝王蟹 Gateway 端口冲突 (#1698) | 🔴 **Open** | 无 | 进程级资源竞争，需架构层面解决（命名管道/随机端口/单例锁）。 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 社区声量 | 纳

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-17

> 数据统计窗口：2026-08-16 00:00 – 2026-08-16 23:59 (UTC)  
> 数据来源：GitHub API / Webhook 实时同步

---

## 1. 今日速览
- **整体活跃度：高**。过去 24 小时内共有 **8 个 PR 合并/关闭**、**3 个 Issue 更新**（2 新开、1 关闭），无新版本发布。  
- **核心主线**：修复 CI 阻塞（文件行数超限、编译报错）、消除一处冒烟测试、补齐安全加固、引入 MiniMax Code ACP Agent 新能力。  
- **技术债清理**：`store.rs` 与 `admin.rs` 两文件超行数限制导致 Format Gate 失败，已通过 PR #1201 编译修复为前置条件，后续需拆分或申请豁免。  
- **稳定性提升**：心跳机制忽略“活跃时段”配置（Issue #1205）已登记，待排期修复；CalDAV 时间范围查询（PR #1147）历时 36 天终于落地。  
- **依赖维护**：Dependabot 自动升级 PostCSS 与 js-yaml，零人工干预合入。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 标题 | 类型 | 影响范围 | 合并时间 | 关键点 |
|----|------|------|----------|----------|--------|
| [#1147](https://github.com/moltis-org/moltis/pull/1147) | fix(caldav): honor list_events time ranges | Bug Fix / Feature | `moltis-caldav` | 2026-08-16 | 使用 RFC 4791 `calendar-query` REPORT 替代全量拉取，显著降低大日历场景带宽与延迟；单测覆盖扩展至循环事件边界。 |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) | Add channel activity log visibility settings | Feature | Gateway / UI / Settings | 2026-08-16 | 新增账号/频道/用户三级 `activity_log` 可见性（`all/errors_only/off`），优先级：用户 > 频道 > 账号。配套迁移脚本与 UI 控件同步入库。 |
| [#1203](https://github.com/moltis-org/moltis/pull/1203) | test(gateway): run the push fanout test on a paused clock | Test Fix | `moltis-gateway` | 2026-08-16 | 依赖 #1201 编译修复，将冒烟测试 `fanout_is_bounded_and_times_out_a_hung_endpoint` 迁移至 `tokio::time::pause()` 确定性时钟，彻底消除全量套件下的间歇性失败（Issue #1193）。 |
| [#1201](https://github.com/moltis-org/moltis/pull/1201) | fix(gateway): thread start_background_tasks into the memory runtime builder | Bug Fix (Compile) | `moltis-gateway` | 2026-08-16 | 修复 #1158 重构后遗留的 `start_background_tasks` 未导出导致主分支编译失败，解锁后续 CI 与 #1203 测试。 |
| [#1186](https://github.com/moltis-org/moltis/pull/1186) | fix(vault): normalize recovery phrase before hashing | Security / Bug Fix | `moltis-vault` | 2026-08-16 | 统一恢复短语规范化（去短横线、大写）逻辑至哈希存储阶段，消除“同一短语不同大小写/分隔符导致解封失败”的一致性缺陷。 |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | fix(security): harden model and zip paths | Security | `clawhub` / Model Loader | 2026-08-16 | 修复 Zip Slip 与 HuggingFace 模型路径遍历两类任意文件写入漏洞：新增 `is_safe_path` 规范化校验、禁止绝对路径/父目录逃逸、单元测试覆盖恶意载荷。 |
| [#1200](https://github.com/moltis-org/moltis/pull/1200) | chore(deps): bump npm_and_yarn group | Dependency | `crates/web/ui`、`docs` | 2026-08-16 | PostCSS 8.4.47 → 8.4.48、js-yaml 4.1.0 → 4.1.1，含安全修复，自动合入。 |

> **进展评估**：单日 7 个 PR 合并，涵盖编译阻塞、冒烟测试、安全加固、长期功能债（CalDAV、Activity Log），主分支健康度显著回升。

---

## 4. 社区热点
| 对象 | 互动指标 | 核心诉求 |
|------|----------|----------|
| [Issue #1205](https://github.com/moltis-org/moltis/issues/1205) | 👍 0 / 评论 0 | **Bug**：Heartbeat 守护进程忽略 `active_hours` 配置全天候运行，导致非工作时段仍消耗资源/触发告警。用户期望严格遵守时间窗。 |
| [Issue #1202](https://github.com/moltis-org/moltis/issues/1202) | 👍 0 / 评论 0 | **CI 阻塞**：`check-file-size.sh` 在 main 分支失败，两文件超 1500 行限制。维护者需决定：拆分文件、调整阈值、或加入例外名单。 |
| [PR #1204](https://github.com/moltis-org/moltis/pull/1204) | 👍 0 / 评论 0 | **新能力**：引入 MiniMax Code ACP Agent（`acp-minimax-code`），含可执行文件自动发现、注册表录入、TOML 手动配置、UI 固件同步。社区对多模型 Agent 生态扩展关注度高。 |

> **洞察**：当前讨论集中在 **CI 治理**（文件大小、编译通过性）与 **Agent 生态扩展** 两条主线，反映项目正处于“稳固基建+向外扩展”并行期。

---

## 5. Bug 与稳定性

| 严重度 | Issue / PR | 标题 | 状态 | 关联 Fix PR |
|--------|------------|------|------|-------------|
| **High** | [#1205](https://github.com/moltis-org/moltis/issues/1205) | Heartbeat ignores configured active hours | Open | 暂无 |
| **High** | [#1193](https://github.com/moltis-org/moltis/issues/1193) | Flaky test: push fanout timeout assertion races | Closed | [#1203](https://github.com/moltis-org/moltis/pull/1203) ✅ |
| **Medium** | [#1202](https://github.com/moltis-org/moltis/issues/1202) | Format CI gate red: two files over 1500-line limit | Open | 需人工决策（拆分/豁免/调阈值） |
| **Medium** | — | `moltis-gateway` compile failure (`start_background_tasks` missing) | Fixed | [#1201](https://github.com/moltis-org/moltis/pull/1201) ✅ |
| **Low** | — | Vault recovery phrase case/dash sensitivity | Fixed | [#1186](https://github.com/moltis-org/moltis/pull/1186) ✅ |
| **Critical (Security)** | — | Zip Slip / Model path traversal | Fixed | [#1180](https://github.com/moltis-org/moltis/pull/1180) ✅ |

> **整体稳定性趋势**：关键安全漏洞与编译阻塞已清零，冒烟测试确定性修复到位。剩余高优先级仅 Heartbeat 配置忽略（Issue #1205），建议下一迭代优先处理。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 已有实现进度 | 可能纳入版本 |
|------|----------|--------------|--------------|
| [PR #1204](https://github.com/moltis-org/moltis/pull/1204) | MiniMax Code ACP Agent 集成 | PR 已开，含注册表、自动发现、配置校验、UI 固件 | **v0.14.x**（下一小版本）可能性大，符合“Agent 即插即用”路线图 |
| [Issue #1205](https://github.com/moltis-org/moltis/issues/1205) | Heartbeat 严格遵守 `active_hours` | 仅 Issue，无 PR | 需评估实现复杂度，若为配置读取遗漏，极大概率进 **v0.14.x** 热修复 |
| [PR #1147](https://github.com/moltis-org/moltis/pull/1147) | CalDAV 时间范围查询优化 | 已合并 | 已在主线，随下一版本发布 |
| [PR #1093](https://github.com/moltis-org/moltis/pull/1093) | 多级 Activity Log 可见性 | 已合并 | 已在主线，随下一版本发布 |

> **路线图推测**：v0.14.x 将聚焦 **Agent 生态扩展**（MiniMax、后续 OpenAI/Anthropic 等）、**运维友好性**（Heartbeat、CI 治理）、**安全合规**（已完成项）。大版本 v0.15 可能规划多租户/权限模型重构（暂未见 Issue）。

---

## 7. 用户反馈摘要
> 今日 Issue/PR 评论区均为 **0 条用户评论**，无法直接提炼用户痛点。  
> 侧写：  
> - Issue #1205 作者 IlyaBizyaev 完成 Preflight Checklist，表明为资深用户/贡献者，痛点明确：生产环境 Heartbeat 非预期运行导致资源浪费/告警噪音。  
> - PR #1204 作者 heaoBackend 主动补充文档与 UI 固件，显示贡献者对“开箱即用”体验的重视。  
> - 无负面反馈涌现，社区情绪中性偏积极。

---

## 8. 待处理积压（需维护者关注）

| 对象 | 停留时长 | 风险 | 建议动作 |
|------|----------|------|----------|
| [Issue #1202](https://github.com/moltis-org/moltis/issues/1202) | 1 天 | **Format Gate 持续红**，阻断所有合并 | ① 拆分 `store.rs` / `admin.rs` ② 或在 `check-file-size.sh` 增加例外名单 ③ 或暂时调高阈值并创建技术债 Issue 跟踪 |
| [Issue #1205](https://github.com/moltis-org/moltis/issues/1205) | 1 天 | 生产环境资源浪费 | 指派 Owner，产出最小复现脚本，评估 1-2 天内修复并回港到 main |
| [PR #1204](https://github.com/moltis-org/moltis/pull/1204) | 1 天 | 新 Agent 集成未 Review | 安排至少 1 位 Core Reviewer 过 Code + 文档 + UI 测试，争取 48h 内合入 |
| 长期未响应 | — | — | 当前数据窗口内无“>30 天无响应”高优 Item，整体秩序良好 |

---

### 📌 维护者行动清单（优先级排序）
1. **立即**：决策 Issue #1202 文件大小策略，恢复 Format Gate 绿标。  
2. **今日内**：指派 Issue #1205 修复 Owner，产出 PR。  
3. **48h 内**：完成 PR #1204 Review 合入，扩充 Agent 矩阵。  
4. **本周**：规划 `store.rs` / `admin.rs` 重构拆分，彻底消除行数债务。

---

*报告生成时间：2026-08-17 06:00 UTC*  
*下一期预告：2026-08-18 同步发布*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-17

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时动态  
> **统计窗口**：2026-08-16 00:00 – 2026-08-17 00:00 (UTC)  
> **报告生成**：2026-08-17

---

## 1. 今日速览

- **活跃度评级**：🟢 **高** — 单日 9 个 Issue 更新（含 3 个关闭）+ 9 个 PR 全部处于“待合并”状态，且多为 `first-time-contributor` 标签，说明社区贡献管道通畅，维护者审核成为当前瓶颈。
- **核心冲突**：`v2.1.0` 存在 **Agent 工具调用必现崩溃**（`async for` 误用 coroutine）与 **聊天历史截断** 两大阻塞性 Bug，已分别有 Issue（#7063、#7065）跟踪，但暂无对应 Fix PR 进入合并队列。
- **架构演进信号**：PR #6302（统一 Provider 发现/路由/模型元数据）与 PR #6940（原生 DataPaw Runtime）仍在长周期 Review，预示下一大版本将重构模型抽象层并引入数据分析工作空间。
- **稳定性债务**：APScheduler Cron misfire（#6471）、OAuth2 refresh_token 持久化缺失（#7066/7053）、视频内联阈值硬编码（#7071/7060）等 5 个修复型 PR 同天涌现，显示运维痛点集中爆发。
- **用户体验短板**：插件 `system_prompt` 隔离（#7052）、会话级 `reasoning_effort` 覆盖（#7062）、C#/Shader 语法高亮（#7068）、深链接切 Agent（#7067）等增强需求集中在 “多租户/多模态/精细化控制” 方向。

---

## 2. 版本发布

> **无新版本发布**。当前最新稳定版 `v2.1.0` 仍带有 #7063 致命崩溃，建议维护者优先切一条 `v2.1.1-hotfix` 分支回滚或修复 `_execute_tool_call` 后再发布。

---

## 3. 项目进展

| PR | 状态 | 核心推进 | 影响面 |
|----|------|----------|--------|
| **#6302** | Open (长周期) | 统一 Provider 发现、模型元数据、路由、Agent 模型控制；引入 Catalog-Driven 架构 | 🔴 核心架构重构，影响所有模型接入与调度 |
| **#6940** | Open (长周期) | 新增原生 DataPaw App Runtime + 持久化分析工作空间 | 🟡 新业务线（数据分析/Notebook 化） |
| **#7072** | Open | Console 新增“后台任务列表 API” (`GET /console/chat/tasks`) | 🟢 多 Agent 协同观测能力补齐 |
| **#7071** | Open | `view_video` 内联阈值改为可配置（移除硬编码 2MB） | 🟢 视频多模态体验修复 |
| **#7070** | Open | 修复 OpenAI Responses API 路径下 `view_video` 静默失败 | 🟢 视频多模态关键修复 |
| **#7069** | Open | 修复历史消息中 data-URL 图片渲染异常 | 🟢 会话复用体验修复 |
| **#7067** | Open | 新增 `/chat/:agentId/:sessionId` 深链接，支持直接切 Agent | 🟢 多 Agent 交互入口补齐 |
| **#7066** | Open | OAuth2 Authorization Code 场景持久化旋转后的 `refresh_token` | 🟡 远程 MCP 认证稳定性修复 |
| **#7064** | Open | CLI `cron update --text` 同步顶层 `text` 字段（Agent Job） | 🟢 定时任务管理一致性修复 |

> **整体进度**：**0 个 PR 合并**，9 个 PR 全在审核/等待 CI。建议维护者今日集中精力合并 #7070、#7071、#7069、#7067、#7066、#7064 这 6 个 “单一职责、测试覆盖完备、标记 `first-time-contributor`” 的修复型 PR，快速回笼稳定性。

---

## 4. 社区热点

| 排名 | Item | 互动量 | 核心诉求 |
|------|------|--------|----------|
| 1 | **#7063** [Bug] Agent 工具调用必现崩溃 | 3 评论 / 0 👍 | **P0 阻塞**：`async for` 遍历 coroutine 导致 `TypeError`，用户无法使用任何工具调用功能。 |
| 2 | **#7003** [Proposal] ViBo 外挂记忆方案（-97.5% Token） | 3 评论 / 0 👍 | 长期记忆成本优化，第三方商业方案推销，维护者已关闭并标记 “不纳入核心”。 |
| 3 | **#7052** [Feature] 插件 API 增加 `system_prompt` 权限隔离 | 2 评论 / 0 👍 | 企业级插件开发需求：提示词不希望在前端暴露，涉及知识产权保护。 |
| 4 | **#6471** [Bug] APScheduler Cron 长空闲后 misfire | 2 评论 / 0 👍 | 生产环境定时任务可靠性，WSL2 + uvicorn 多 worker 场景复现。 |
| 5 | **#7073** [Feat] Skill 名称去重（防止工作区/内置技能重复加载） | 1 评论 / 0 👍 | 技能系统加载逻辑缺陷，路径去重不够，需按名称去重。 |

> **洞察**：社区讨论集中在 **“可用性阻塞”**（#7063、#6471）与 **“企业级能力补齐”**（#7052、#7062、#7068），而非纯探索性功能。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 崩溃** | **#7063** | Agent 执行工具调用 100% 崩溃：`TypeError: 'async for' requires async generator, got coroutine` | 无 | 🔴 无 PR，急需修复 `_execute_tool_call` → `await self._acting(...)` |
| **P0 数据丢失** | **#7065** | 7 轮对话后历史仅显示最近 3-4 条，滚动条无法加载更早消息 | 无 | 🔴 无 PR，疑似前端虚拟列表/后端分页参数错误 |
| **P1 静默失败** | #7059 → **#7070** | OpenAI Responses API 路径 `view_video` 返回成功但模型未收到帧 | **#7070** | 🟡 PR 就绪，待合并 |
| **P1 渲染异常** | #7051 → **#7069** | 会话重载后历史消息图片显示为空/损坏 | **#7069** | 🟡 PR 就绪，待合并 |
| **P1 认证失效** | #7053 → **#7066** | OAuth2 旋转 refresh_token 未持久化，导致长周期后 401 | **#7066** | 🟡 PR 就绪，待合并 |
| **P2 功能受限** | #7060 → **#7071** | `view_video` 硬编码 2MB 内联阈值，忽略 provider 配置 | **#7071** | 🟡 PR 就绪，待合并 |
| **P2 调度失效** | **#6471** | APScheduler AsyncIOScheduler 事件循环长空闲后 misfire | 无 | 🟡 无 PR，需排查 `misfire_grace_time` / `coalesce` 策略 |
| **P2 显示不一致** | #7048 → **#7064** | `cron update --text` 仅更新嵌套字段，顶层 `text` 陈旧 | **#7064** | 🟡 PR 就绪，待合并 |

> **建议**：今日 **必须** 合并 #7070、#7069、#7066、#7071、#7064  fünf 个修复型 PR；并行开 #7063、#7065 两个热修复分支。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR / 实现线索 | 纳入下版本概率 |
|------|-------|---------------------|----------------|
| **插件 `system_prompt` 隔离** | #7052 | 无 PR，涉及插件清单 schema 与前端渲染管线 | 🟡 中（企业级强需求，但需设计权限模型） |
| **会话/Agent 级 `reasoning_effort` 覆盖** | #7062 | 无 PR，需在模型调用链路注入 `generate_kwargs` 覆盖逻辑 | 🟢 高（仅配置层面变更，低风险） |
| **C# / Shader 语法高亮** | #7068 | 无 PR，前端 Monaco/Shiki 语言注册即可 | 🟢 高（纯前端增量，极易合并） |
| **Skill 名称去重** | #7073 | 无 PR，`builder.py` 加载器需按 `skill.name` 去重 | 🟢 高（单点修复，已有明确复现路径） |
| **后台任务列表 API** | #7056 → **#7072** | **#7072** 已实现列表端点 | 🟢 极高（PR 就绪，解除多 Agent 协同观测盲区） |
| **深链接 `/chat/:agentId/:sessionId`** | 隐性需求 → **#7067** | **#7067** 已实现路由与 SDK 支持 | 🟢 极高（PR 就绪，提升分享/集成体验） |
| **DataPaw 原生 Runtime** | 长期规划 → **#6940** | **#6940** 基建级 PR，涉及新仓库、新镜像、新 API | 🔴 低（需完整 Review + E2E，预计下大版本） |
| **统一 Provider/模型路由** | 长期规划 → **#6302** | **#6302** 重构核心抽象，影响面极广 | 🔴 低（需充分测试，预计 v2.2/v3.0） |

> **下版本（v2.1.x）候选**：#7072、#7067、#7071、#7070、#7069、#7066、#7064、#7068、#7073、#7062 — 共 10 项低风险增强/修复，**可在本周内形成 `v2.1.1` 稳定性释放**。

---

## 7. 用户反馈摘要

| 维度 | 代表性声音（Issue 评论/描述） | 情感倾向 |
|------|-------------------------------|----------|
| **工具调用不可用** | “`v2.1.0` 完全无法跑工具，`async for` 报错，生产环境回滚到 `v2.0.x`” (#7063) | 😡 极度负面 |
| **历史消息丢失** | “7 轮对话只能看最近 3 条，滚动条拉到底也加载不出更早内容，严重影响上下文回溯” (#7065) | 😟 负面 |
| **定时任务不可靠** | “WSL2 + uvicorn 多 worker 下，循环空闲几小时后 Cron 全部 misfire，重启才恢复” (#6471) | 😟 负面 |
| **插件提示词泄露** | “公司内部插件带有机密 system_prompt，不希望用户在前端看到，求隔离 API” (#7052) | 😐 中性（刚需） |
| **视频多模态坑多** | “2MB 硬编码导致 5MB 视频直接丢弃；Responses API 路径下根本不工作” (#7060, #7059) | 😟 负面 |
| **多 Agent 切换麻烦** | “深链接只能带 sessionId，打开后还得手动切 Agent，自动化集成很痛苦” (隐性 → #7067) | 😐 中性 |
| **技能重复加载** | “工作区自建同名 Skill 会和内置并存，导致 Agent 行为不可预期” (#7073) | 😐 中性 |
| **语法高亮缺失** | “游戏开发场景下 `.shader/.hlsl/.gdshader` 全是纯文本，阅读效率极低” (#7068) | 😐 中性 |

> **核心痛点**：**稳定性回归（工具调用、历史、定时任务）** 正在侵蚀 `v2.1.0` 的用户信任；**企业级细分能力（提示词隔离、推理强度覆盖、多语言高亮）** 成为留存关键。

---

## 8. 待处理积压（Long-standing / High-impact）

| Item | 类型 | 停滞天数 | 关键阻碍 | 建议动作 |
|------|------|----------|----------|----------|
| **#6302** | PR (Architecture) | ~27 天 | 极大改动面，需

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-17

> **数据范围**：过去 24 小时（2026-08-16 至 2026-08-17）  
> **数据源**：GitHub Issues (48 条更新), Pull Requests (50 条更新), Releases (0 个)

---

## 1. 今日速览

*   **高强度治理与架构演进期**：项目当前处于**密集 RFC 讨论与核心基础设施重构**并行阶段。过去 24 小时无版本发布，但有 **48 条 Issue 更新**（含 46 条新开/活跃）和 **50 条 PR 更新**（含 46 条待合并），显示核心维护者团队正在推进多条高优先级技术债清理与架构重构线程。
*   **核心关注点聚焦**：**插件安全沙箱（WASI HTTP 出站策略）**、**Provider 生态标准化（OpenAI Chat Completions 兼容、Hailo/Ollama 原生支持）**、**运行时稳定性（并行测试 ETXTBSY 竞态修复）** 及 **Telemetry/可观测性建设** 是当前并行推进的四大主线。
*   **活跃度评级**：⭐⭐⭐⭐⭐ **极高**。Issues/PRs 评论活跃度高，多个 RFC 达到 20+ 评论深度，维护者（如 Audacity88, JordanTheJet, IftekharUddin）高频参与审查与推进，决策周期短。
*   **风险点**：多个 `priority:p1` `risk:high` 的并行大型 PR（如 #9582, #9137, #9126, #9745）相互依赖，合并顺序管理复杂；并行测试门禁（`Parallel Runtime Test`）持续暴露 `ETXTBSY` 等竞态问题（#9965, #10006, #10011），可能阻塞无关 PR 合并。

---

## 2. 版本发布

**今日无新版本发布。** 当前主线版本维持在 `0.8.4`（据 #6808 追踪）。重大特性（如插件出站策略、Provider 落地、Swarm 架构）均在 RFC 或大型 PR 阶段，预计将汇聚至下一个 Beta/RC 里程碑。

---

## 3. 项目进展：今日合并/关闭的关键 PR

数据中显示 **4 条 PR 已合并/关闭**，其中 1 个显式关闭，其余推测为合并或关闭。关键进展如下：

| PR | 标题 | 类型 | 影响 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **[#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)** | `fix(security): harden built-in HTTP egress on the shared network guard` | **Security Fix / Arch Refactor** | **核心基建**：强化内置 HTTP 出站边界，拒绝非全局 IPv4/IPv6 地址；将网络分类原语下沉 `zeroclaw-infra::net_guard`，为后续插件 WASI HTTP 策略（#9582）铺路。 | **CLOSED** (已合并入主线) |
| **[#9416](https://github.com/zeroclaw-labs/zeroclaw/pull/9416)** | `docs(tools): document that AllToolsResult.tools is the pre-filter registry` | **Docs** | 澄清工具注册表字段语义，消除 `tools` 与 `unfiltered_tool_arcs` 歧义，辅助插件/工具链开发者。 | **CLOSED** (已合并) |
| **[#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953)** | `[Bug]: SOP step schema validation rejects a double-encoded output object` | **Bug Fix (S2)** | 修复 SOP 步骤输出 Schema 校验对双重编码 JSON 的拒绝问题，增加解包容错。 | **CLOSED** (Issue 关闭，修复 PR 推测已合并) |

**整体推进评估**：**安全基建落地（#9580）是今日最大增量**，解锁了插件沙箱网络隔离的后续链路（#9582, #9584, #9137）。文档修正（#9416）与 SOP 稳定性修复（#9953）提升了开发者体验与运行时鲁棒性。

---

## 4. 社区热点：高讨论度 Issues/PRs 深度解析

### 🔥 Top 3 高热度 RFC（治理与架构决策层）

| # | Issue | 评论 | 核心诉求 | 当前阶段 | 关键信号 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, and Label Cleanup** | **23** | **治理效能**：引入 "Work Lanes" 概念自动化看板流转，清理 200+ 标签体系，降低维护者心智负担。 | **Ratified / Rollout in progress** (Rev. 25) | 已决策落地执行期，关联 #8692 (Maintainer Decision Queue) 追踪。 |
| **2** | **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: ZeroClaw Chat Completions Profile** | **22** | **生态兼容**：新增 OpenAI Chat Completions 协议适配层，接入 Open WebUI, LobeChat, Continue.dev 等主流客户端。 | **Open, needs-maintainer-review, risk:high** | **战略级 RFC**，打破 WebSocket/ACP 单一入口，直接关乎商业化采用与生态扩张。 |
| **3** | **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified Attachment Architecture** | **17** | **多模态统一**：统一 Web Chat 与 Channel（Telegram/Matrix等）的附件处理架构，解决当前碎片化实现。 | **Proposed, needs-maintainer-review, risk:high** | 涉及 Gateway, Channel, Runtime, Security 多域，若通过将重构文件/图片/音频全链路。 |

### 🔥 高关注 PR（实施落地层）

| # | PR | 核心变更 | 依赖/阻塞 | 维护者关注点 |
| :--- | :--- | :--- | :--- | :--- |
| **[#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606)** | `fix(providers): honor runtime proxy for OpenAI Responses` | **P1 Security/Bug**：修复 OpenAI Responses API 忽略运行时代理配置的漏洞。 | 无 | **Distinguished Contributor (Audacity88) 主导**，优先级最高，修复生产环境代理穿透风险。 |
| **[#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582)** | `feat(plugins): enforce a host-owned egress policy on plugin wasi:http` | **P1 Arch/Security**：插件 WASI HTTP 强制宿主策略（Stage 2），默认拦截所有出站请求。 | **依赖 #9580 (已合并)**，**阻塞 #9584 (Grant Ceremony)** | 核心安全边界，**JordanTheJet 推进**，需审慎评估对现有插件生态的破坏性影响。 |
| **[#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)** | `feat(plugins): validate typed instance config` | **XL Refactor**：插件实例配置强类型化校验（JSON Schema Draft 2020-12）。 | 需 Author Action | 插件生态成熟度关键里程碑，配置安全性与开发者体验双提升。 |

---

## 5. Bug 与稳定性：严重度排序

| 严重度 | Issue | 组件 | 现象 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P1 / S1 (Workflow Blocked)** | **[#10013](https://github.com/zeroclaw-labs/zeroclaw/issues/10013)** | `channel` (TTS) | 并行测试下 Edge TTS 取消测试冒烟：子进程启动侧车文件写入竞态。 | `status:accepted, follow-up` | 无 (需修复 Test Fixture) |
| **P1 / S1 (CI Gate Flake)** | **[#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006)** | `runtime` (RPC) | `endpoint_lock_is_held_through_guard_cleanup` 在并行门禁下因端点所有权竞态随机失败，**污染无关 PR 合并**。 | `status:in-progress, status:accepted` | 无 (需修复 Test 逻辑隔离) |
| **P1 / S1 (Test Fixture ETXTBSY)** | **[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** | `cron`, `runtime`, `tests` | 运行时写入可执行文件后并行启动触发 `ETXTBSY` (Text file busy)，影响 Cron Shell 执行测试。 | `status:accepted` | 无 (Task: Harden Fixtures) |
| **P1 / S1 (Test Fixture ETXTBSY)** | **[#10011](https://github.com/zeroclaw-labs/zeroclaw/issues/10011)** | `daemon`, `runtime` | Daemon 心跳测试写入可执行文件导致并行测试 `ETXTBSY`。 | `status:in-progress, status:accepted` | 无 (Task: Avoid Runtime-Written Executable) |
| **P1 / Security** | **[#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655)** | `channel` (Telegram/WASM) | 审批卡片无位置索引，连续多张卡片来自同一消息时用户无法区分点击目标。 | `status:accepted, follow-up` | 无 |
| **S2 (Degraded)** | **[#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811)** | `channel` (Telegram), `health` | `/health` 报告从未连接的 Channel (Token 无效) 为 Healthy (404 轮询误判为存活)。 | `status:accepted` | 无 |
| **S2 (Degraded)** | **[#10020](https://github.com/zeroclaw-labs/zeroclaw/issues/10020)** | `runtime` (Delegate) | Agentic `delegate` (independent mode) 忽略目标 Agent 的 `thinking` 配置策略。 | `status:in-progress, status:accepted` | 无 |
| **S2 (Degraded)** | **[#10037](https://github.com/zeroclaw-labs/zeroclaw/issues/10037)** | `gateway/api` (Cron) | `POST /api/cron` 静默存储非法 `session_target` (非 isolated/main) 而非报错。 | `status:in-progress, status:accepted` | 无 |

**稳定性趋势判读**：**并行测试基建（`Parallel Runtime Test` Gate）是当前最大稳定性债务源**，连续暴露 3 个 `ETXTBSY` / 竞态 Flake 问题（#9965, #10006, #10011），且阻塞无关 PR 合并。建议优先投入资源隔离测试环境或重构 Fixture 机制（如预编译/只读 Fixture）。

---

## 6. 功能请求与路线图信号

结合 RFC 讨论热度与 PR 实施进度，判断下一版本（`0.9.0` 或 `0.8.5`）纳入概率：

| 功能/方向 | 信号来源 | 纳入概率 | 理由 |
| :--- | :--- | :--- | :--- |
| **OpenAI Chat Completions 协议原生支持** | #8603 (22💬, High Risk), #9606 (Proxy Fix Merged) | ⭐⭐⭐⭐⭐ **极高** | 战略级生态入口，Proxy 修复已合并铺路，RFC 讨论深度极高，维护者高度关注。 |
| **插件 WASI HTTP 出站策略 (Default-Deny + Grant Ceremony)** | #9580 (Merged), #9582 (Open), #9584 (Open), #9137 (Open) | ⭐⭐⭐⭐ **高** | 核心安全架构 ADR-013 落地，Stage 1/2 已合并/审查中，Stage 3 (Grant) 待合并，依赖链清晰。 |
| **统一附件架构** | #9488 (17💬, High Risk) | ⭐⭐⭐ **中高** | 多模态统一迫切需求，但涉及面广 (Web, Channel, Gateway, Security)，可能分期交付。 |
| **Gemini Live 实时语音通道** | #8780 (13💬, v2 Rewritten) | ⭐⭐⭐ **中高** | 重写为 Broker Contract 降低耦合，Feature-gated 可选，技术路径清晰。 |
| **外部化集成 / 精简 Core** | #6165 (14💬, High Risk) | ⭐⭐ **中** | 长期战略方向，但需逐个集成评估替代方案，短期内难大规模落地。 |
| **分阶段 Opt-in 产品遥测** | #9621 (6💬, High Risk) | ⭐⭐ **中** | 决策数据缺失痛点真实，但涉及隐私/合规，需 Operator Review 机制成熟后推进。 |
| **Agent Swarm / Crush-style TUI** | #10025 (New, 1💬, High Risk) | ⭐ **低 (下版本)** | 全新交互范式 (Swarm + TUI)，架构影响巨大 (Dynamic Agents, Orchestration)，处于极早期 RFC。 |
| **SOP Daemon

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*