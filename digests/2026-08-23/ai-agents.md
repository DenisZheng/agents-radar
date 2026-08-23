# OpenClaw 生态日报 2026-08-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-23 00:55 UTC

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

# OpenClaw 项目日报 | 2026-08-23

---

## 1. 今日速览

**项目整体状态：高强度维护期，Beta 版本验证与核心稳定性修复并行**  
过去 24 小时，OpenClaw 仓库呈现 **极高活跃度**：500 条 Issue 更新（474 新开/活跃，26 关闭），500 条 PR 更新（437 待合并，63 已合并/关闭），**零新版本发布**。核心精力集中在 **v2026.8.1-beta.2 发布验证（#125626）**、**事件循环阻塞 P0 级回归（#124788）**、**SQLite 损坏复发（#126821）** 以及 **子代理/会话状态丢失** 等关键稳定性问题的排查与修复。PR 端呈现“大量小步快跑”特征：UI 性能优化、会话流修复、MCP/ACL/OAuth 认证链路完善、macOS 实时语音落地等 63 个 PR 已合并/关闭，显示维护团队正通过高频迭代压降 Beta 阻塞项。

---

## 2. 版本发布

**无新版本发布**。当前处于 **v2026.8.1-beta.2 验证期**（Issue #125626，19 条评论，维护者主导），验证工作表要求测试者复制真实网关升级后逐项打勾，尚未进入 RC 阶段。

---

## 3. 项目进展 —— 今日已合并/关闭的关键 PR（63 个，选取高影响项）

| PR | 标题/摘要 | 影响面 | 状态 | 链接 |
|---|---|---|---|---|
| **#125471** | `fix(models): keep Claude CLI OAuth available in Control UI` — 修复网关重启后 legacy `auth.profiles` 导致 Claude CLI OAuth 丢失 | 认证/Provider | **CLOSED** | [#125471](https://github.com/openclaw/openclaw/pull/125471) |
| **#126424** | `fix(gateway): keep conversation delivery within agent bindings` — 多代理会话工具跨绑定投递修复，涉及 Discord/Slack/Telegram 等 10+ 渠道 | 消息投递/安全边界 | **CLOSED** | [#126424](https://github.com/openclaw/openclaw/pull/126424) |
| **#116489** | `feat(security): require acknowledgement for install policy warnings` — 外部安装策略可返回 `warn`，CLI/UI 需显式确认 | 安全/插件安装 | **CLOSED** | [#116489](https://github.com/openclaw/openclaw/pull/116489) |
| **#120900** | `feat(ui): review install policy warnings` — Control UI 可审阅并继续被警告的插件安装 | 安全/UI | **CLOSED** | [#120900](https://github.com/openclaw/openclaw/pull/120900) |
| **#123535** | `fix(ui): avoid session catalog refresh storms` — 合并并发侧边栏/会话视图的目录刷新，消除启动期风暴 | UI 性能 | **OPEN (ready)** | [#123535](https://github.com/openclaw/openclaw/pull/123535) |
| **#127818** | `perf(ui): stop long-lived request and session caches from growing forever` — 长连缓存淘汰，修复侧边栏重排 | UI 内存/性能 | **OPEN (ready)** | [#127818](https://github.com/openclaw/openclaw/pull/127818) |
| **#126278** | `fix(ui): keep one agent run in one transcript response` — 单次工具调用不再拆分为多条响应帧 | UI/会话呈现 | **OPEN (ready)** | [#126278](https://github.com/openclaw/openclaw/pull/126278) |
| **#128071** | `fix: continue code mode with read-only recovery` — Code Mode 失败后发起只读重演，保留核心观测面 | Agent 运行时/恢复 | **OPEN** | [#128071](https://github.com/openclaw/openclaw/pull/128071) |
| **#128034** | `fix(ollama): start local services for native chat` — 原生 `/api/chat` 请求现在会拉起配置的本地 Ollama 服务 | Provider/Ollama | **OPEN (ready)** | [#128034](https://github.com/openclaw/openclaw/pull/128034) |
| **#113089** | `feat(agents): return sessionId from sessions_spawn accept payload` — 父编排器可直接拿到持久化 child sessionId | 子代理/编排 | **OPEN (ready)** | [#113089](https://github.com/openclaw/openclaw/pull/113089) |
| **#121576** | `fix(text): only insert separator between word chars when stripping model tokens` — 修正特殊 token 剥离导致的多余空格 | 文本处理/多模态 | **OPEN** | [#121576](https://github.com/openclaw/openclaw/pull/121576) |
| **#93218** | `feat: add session stream mode command` — 会话级切换 final/partial/block/progress 流式模式，无需重启 | 渠道/流式控制 | **OPEN (needs proof)** | [#93218](https://github.com/openclaw/openclaw/pull/93218) |
| **#118499** | `macOS: add realtime Gateway-relay Talk support` — macOS Talk 获得有界网关实时中继路径 | macOS/语音/实时 | **OPEN (needs proof)** | [#118499](https://github.com/openclaw/openclaw/pull/118499) |

> **进展判读**：已合并 PR 集中在 **安全策略确认流、多渠道会话投递边界、Claude CLI OAuth 持久化**——均为 Beta 阻塞或生产可用性硬指标。待合并 PR 则以 **UI 长连缓存治理、会话流合并、子代理元数据补全、Provider 本地服务自启** 为主，指向“Beta 可用性打磨”主线。

---

## 4. 社区热点 —— 评论/反应最集中的 Issue 与 PR

| 编号 | 标题/核心诉求 | 评论 | 👍 | 热点分析 | 链接 |
|---|---|---:|---:|---|---|
| **#125626** | **Release validation: v2026.8.1-beta.2** — 官方验证工作表，要求真实网关升级测试 | 19 | 0 | **全项目最高关注**，维护者主导的发布门控流程，直接决定 Beta 能否转 RC | [#125626](https://github.com/openclaw/openclaw/issues/125626) |
| **#124788** | **beta.2 gateway: event loop blocks ~100s every ~10 min** (P0) — 定时器锚定、字符串拼接+fs scan，禁用所有 memory 插件仍复现 | 6 | 0 | **P0 级回归**，直接导致 WebSocket 断连、/ready 失效、cron 停摆，Beta 发布前必须修复 | [#124788](https://github.com/openclaw/openclaw/issues/124788) |
| **#126821** | **SQLite corruption recurs on pristine rebuilt DBs within 15–24h** (P0) — 5 天 5 次，含“瘫痪网关”模式 | 5 | 0 | **数据完整性 P0**，全新 VACUUM 重建库仍在 24h 内损坏，WAL/检查点/并发写入疑云 | [#126821](https://github.com/openclaw/openclaw/issues/126821) |
| **#68596** | **Configurable streaming watchdog timeout threshold** — 长推理模型（kimi-k2.5, DeepSeek-R1）频繁触发 30s 看门狗 | 15 | 8 | **高赞痛点**：推理模型成主流，硬编码 30s 成系统性误报源，需可配置化 | [#68596](https://github.com/openclaw/openclaw/issues/68596) |
| **#96834** | **WhatsApp 1:1: inbound image wedges main lane ~3min** — 多模态图片注入导致主车道阻塞 | 1

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-08-23

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **“头部高强度攻坚、腰部差异化深耕、长尾维护模式”** 的三层结构。OpenClaw、ZeroClaw、Hermes Agent、IronClaw、NanoClaw、NanoBot 六大头部项目日均 PR/Issue 更新超 20 条，集中解决 **Beta 发布阻塞、核心运行时稳定性、多模态/长上下文工程化、安全沙箱与权限模型** 等生产级难题；PicoClaw、Moltis、CoPaw 等腰部项目聚焦 **特定协议适配（MCP/Telegram/Slack）、浏览器自动化、Hook 安全策略** 等垂直场景；LobsterAI、NullClaw、TinyClaw、ZeptoClaw 处于低频维护或休眠状态。生态整体已从“功能堆砌”转入 **“架构定型、稳定性收敛、企业级交付能力建设”** 关键期，跨项目共性痛点高度收敛于 **会话状态持久化、Provider 抽象与路由、工具调用可靠性、跨平台分发** 四大基建层。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Releases | 核心贡献者数(估) | 健康度评估 | 阶段标签 |
| :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **OpenClaw** | 500 (474活跃) | 500 (437待合并) | 0 | 15+ | ⭐⭐⭐⭐⭐ **极高** | **Beta 冲刺/高强度稳定性修复** |
| **ZeroClaw** | 50 | 50 | 0 | 10+ | ⭐⭐⭐⭐⭐ **极高** | **架构重构/RFC 决策期** |
| **Hermes Agent** | 50 (48活跃) | 50 (47待合并) | 0 | 8+ | ⭐⭐⭐⭐ **高** | **Desktop/Gateway 稳定性攻坚** |
| **IronClaw** | 5 新开 + 存量 | 5 新开 + 5合并 | 0 | 6+ | ⭐⭐⭐⭐ **高** | **基建重构/成本治理并行** |
| **NanoClaw** | 1 新开 | 25 (8合并) | 0 | 6+ | ⭐⭐⭐⭐ **高** | **多实例/多提供商就绪** |
| **NanoBot** | 0 | 21 (7合并) | 0 | 5+ | ⭐⭐⭐ **中高** | **WebUI 体验闭环/Provider 基建收尾** |
| **CoPaw (QwenPaw)** | 7 (6新开) | 4 (0合并) | 0 | 3+ | ⭐⭐⭐ **中高** | **体验细节打磨/首贡友好** |
| **Moltis** | 1 新开 | 3 (0合并) | 0 | 2+ | ⭐⭐ **中** | **安全策略/MCP 稳定性补漏** |
| **PicoClaw** | 2 新开 | 6 (4合并) | 0 | 2+ | ⭐⭐ **中** | **技术债偿还/核心 Bug 积压** |
| **LobsterAI** | 0 | 6 (5合并/关闭) | 0 | 2+ | ⭐ **低** | **维护模式/积压清理** |
| **NullClaw** | 0 | 0 | 0 | - | ⚪ **无活动** | 休眠 |
| **TinyClaw** | 0 | 0 | 0 | - | ⚪ **无活动** | 休眠 |
| **ZeptoClaw** | 0 | 0 | 0 | - | ⚪ **无活动** | 休眠 |

> **注**：OpenClaw 与 ZeroClaw 活跃度断层领先，构成生态“双核”；Hermes、IronClaw、NanoClaw 形成第二梯队；NanoBot、CoPaw 处于功能收敛期；其余项目社区规模较小或处于低维护态。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 定位 | 差异化优势 | 技术路线差异 | 社区规模对比 |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **生态“标准内核”与“网关枢纽”** | 完整的 **Gateway + Control UI + 多渠道适配器** 一体化架构，原生支持 Discord/Slack/Telegram/WhatsApp 等 10+ 即时通讯渠道，具备舰队管理、OAuth 代理、ACL 策略等企业级特性。 | **中心化网关模式**：区别于 ZeroClaw/Hermes 的“Runtime-owned Session”去中心化探索，以及 NanoClaw/IronClaw 的“单二进制/轻量级”路线。OpenClaw 强调网关作为状态中枢，支撑多租户、多代理编排、会话跨设备无缝迁移。 | **贡献者广度与 Issue 吞吐量断层第一**。日均 500+ Issue/PR 更新量远超 ZeroClaw (100) 与 Hermes (100)，维护者主导的验证工作表（如 #125626）显示成熟的发布治理流程。 |
| **生态角色** | 下游项目（如 LobsterAI、PicoClaw）常集成其 Provider/网关协议；上游向标准制定（MCP、A2A）输出实现参考。 | 拥有最完善的 **插件安装策略**、**子代理编排协议**、**实时语音中继** 等生产级细节实现。 | 采用 **SQLite + WAL + 事件溯源** 持久化路线，近期面临损坏复发挑战（#126821），倒逼存储层工程化成熟。 | 核心维护团队规模最大，商业化支撑（ClawCloud）提供资源保障，形成“开源内核+云托管”可持续模式。 |

**结论**：OpenClaw 是当前生态中 **唯一具备“分布式网关级交付能力”** 的项目，是企业级私有化部署、多渠道统一接入的首选参考实现，但其复杂度也带来了最高的稳定性维护成本（P0 级事件循环阻塞、SQLite 损坏）。

---

## 4. 共同关注的技术方向（跨项目高频诉求）

| 共性技术方向 | 涉及项目 | 具体诉求与推进现状 |
| :--- | :--- | :--- |
| **1. 会话/状态持久化与恢复的可靠性** | **OpenClaw** (#126821 SQLite损坏, #113089 child sessionId), **ZeroClaw** (RFC #9487 Runtime-owned Session), **Hermes** (#78981 压缩挂死, #92594 心跳恢复), **NanoBot** (#5483 删除会话重建, #5471 ephemeral持久化), **IronClaw** (#7824 Context成本/压缩), **CoPaw** (#7213 空行噪音) | 核心痛点：**SQLite 并发损坏、长上下文压缩挂死、子会话元数据丢失、幂等性恢复**。OpenClaw/ZeroClaw 正从架构层重构所有权模型；IronClaw 引入结构化摘要/压缩屏障；Hermes/NanoBot 修复具体数据竞争。 |
| **2. Provider 抽象、路由与本地模型集成** | **OpenClaw** (#128034 Ollama自启, #125471 OAuth持久化), **ZeroClaw** (#8396 Wire Protocol一等公民, #9645 ZeroRouter), **IronClaw** (#7491 编码工具契约, #7810 沙箱凭证代理), **NanoClaw** (#3355 Cursor Agent SDK), **NanoBot** (#3869 DeepSeek清洗, #5485 LangSmith追踪), **Moltis** (#1232 OpenAI Schema兼容), **CoPaw** (#7215 OpenRouter渲染) | 趋势：**标准化 Tool Contract（OpenAI Schema）、原生本地服务拉起、多模型路由/回退、凭证代理化、可观测性埋点**。OpenClaw/ZeroClaw 推协议标准化；IronClaw/NanoClaw 落地具体 Provider SDK 集成。 |
| **3. 工具调用与 MCP 生态稳定性** | **OpenClaw** (#126424 跨绑定投递), **ZeroClaw** (WASM超时 #9255), **IronClaw** (#7491 omp core-tool), **NanoBot** (#5484 MCP isError包装, #5156 Telegram长轮询), **Moltis** (#1231 MCP Client重启恢复, #1232 Schema兼容), **PicoClaw** (#3269 MCP死循环, #3319 exec超时) | **MCP 已成标配，但“长连接生命周期管理、Schema 严格模式兼容、错误语义透传、沙箱超时兜底”仍是通病**。Moltis/OpenClaw/ZeroClaw 均在修补 MCP 客户端/服务端的边缘场景。 |
| **4. 安全沙箱、权限模型与 Hook 策略** | **ZeroClaw** (RFC #6996 Granular Sandbox, #7821), **IronClaw** (#7810 通用凭证代理, #7765 AfterTurn Hook), **Moltis** (#1230 Fail-Closed Hook策略), **OpenClaw** (#116489/#120900 安装策略确认), **NanoClaw** (#3447 熔断器隔离, #3446 Bot自触发审批) | 从“进程隔离”升级为 **“应用层路径准入 + OS 沙箱后端 + 策略即代码 + 生命周期 Hook”**。Moltis 的 Fail-Closed 需求代表零信任合规场景的强诉求。 |
| **5. 跨平台分发与桌面端原生体验** | **OpenClaw** (#118499 macOS实时语音), **Hermes** (#92095 uv/.desktop修复, #58593 Linux自更新失败, #91459 Win11 HUD), **ZeroClaw** (#9291 AppImage检测, #7462 Windows CI 74失败), **CoPaw** (#7043 Win UTF-8, #7054 Chrome远程桥接), **NanoBot** (#5156 Telegram网络自愈) | **Windows CI 缺位、Linux 桌面入口（.desktop/AppImage）、macOS 权限/沙箱、浏览器原生消息桥接** 是四大共性短板。Hermes/ZeroClaw 受困最深。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户/场景 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **多租户网关、舰队管理、即时通讯全渠道接入、企业级治理** | 企业私有化部署、SaaS 服务商、需要统一管理数百 Bot/Agent 的组织 | **Centered Gateway + SQLite Event Sourcing + 子代理编排协议**。重状态、重治理、重协议兼容。 |
| **ZeroClaw** | **运行时所有权重构、安全沙箱规范化、零代码 SOP 编排、Provider 解耦** | 极客开发者、安全敏感场景、追求架构极简与形式化验证的团队 | **Runtime-owned Session + Capability-based Sandbox + Wire Protocol First + Wasm 插件**。激进重构、RFC 驱动、强类型契约。 |
| **Hermes Agent** | **桌面端原生体验、本地模型优先、技能生态、舰队可靠更新** | 个人高级用户、本地隐私优先、需要跨设备同步的开发者 | **Electron + 本地后端 + 技能索引 + 分布式心跳**。重客户端、重本地推理、弱网关依赖。 |
| **IronClaw** | **Context 成本治理、沙箱通用化、CI/CD 效能、编码工具标准化** | AI 编码代理场景、成本敏感团队、需要高并发 CI 的工程组 | **Process Journal 状态机 + Iron Proxy 沙箱侧车 + Nextest CI + OMP Tool Contract**。重可观测性、重工程效能、重成本控制。 |
| **NanoClaw** | **Setup 向导多实例、Telegram/Slack 企业级适配、熔断器隔离、Cursor Agent 集成** | 中小团队快速落地、多 Bot 运维、IM 机器人开发者 | **单二进制 + 向导驱动配置 + 实例级数据隔离 + 适配器插件化**。重开箱即用、重 IM 集成深度。 |
| **NanoBot** | **WebUI 交互闭环、Provider 基建、可观

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-23

> 数据来源：GitHub API（过去 24 小时）  
> 报告生成时间：2026-08-23 06:00 UTC  
> 统计窗口：2026-08-22 00:00 – 2026-08-23 00:00 UTC

---

## 1. 今日速览
- **整体活跃度：高**（21 条 PR 更新，0 条 Issue 更新，0 个 Release）。  
- **核心动向**：集中在 **WebUI 交互细节打磨**（回答/推理分离、Token 统计、文件预览、多语言活动标签）、**Provider 基础设施重构**（Usage Contract、LangSmith 追踪恢复、原生 SDK 迁移收尾）、**会话/运行时鲁棒性**（短暂运行状态隔离、已删除会话防重建、MCP 错误包装识别）以及 **Email/Telegram 通道性能与稳定性**。  
- **合并/关闭**：7 条 PR 已落地，涵盖文档更新、团队名单刷新、WebUI 统一可观测性、Telegram 长轮询自愈等。  
- **风险点**：5 条 PR 标记 `conflict`，需尽快解决合并冲突以免阻塞后续发布；`priority: p2` 缺陷修复占比高，说明团队正在清理技术债而非追新功能。  
- **社区互动**：过去 24 h 无新 Issue 且 PR 评论数均为 0，讨论多集中在内部 Review，外部贡献者反馈通道相对安静。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#5488](https://github.com/HKUDS/nanobot/pull/5488) | `docs` | 更新维护者名单、替换贡献者墙为原生可交互头像、剔除 Bot | 提升项目治理透明度，便于新贡献者识别核心维护者 |
| [#5486](https://github.com/HKUDS/nanobot/pull/5486) | `feat(webui)` | 统一 Turn 可观测性：单一答案面板承载推理/工具/文件编辑片段，保留展开/折叠偏好 | 解决 WebUI 长期存在的“消息碎片化”体验问题，为后续审计/回放奠基 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | `fix(telegram)` | 修复网络抖动导致的长轮询静默卡死，新增自动重连与健康检查 | 消除生产环境高频事故，Telegram 通道可用性显著提升 |
| [#4430](https://github.com/HKUDS/nanobot/pull/4430) | `feat(web)` | `web_fetch` Provider 可配置化（auto/tavily/jina/readability） | 完成 2 个月前的功能交付，Web 搜索能力不再硬编码 |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | `fix(providers)` | DeepSeek 消息清洗：修复 null content 400、(empty) 占位符泄漏、assistant 文本丢弃 | 修复 DeepSeek 系列模型集成的阻断性缺陷 |
| [#3294](https://github.com/HKUDS/nanobot/pull/3294) | `feat(dream)` | 可选 Kill Switch + 自定义 Phase 1/2 模板路径 | 为自学习循环提供运维级开关，降低升级维护成本 |
| [#5485](https://github.com/HKUDS/nanobot/pull/5485) | `fix` | 恢复原生 Provider 的 LangSmith 追踪（OpenAI/Anthropic/Bedrock） | 补齐迁移后的可观测性缺口，满足企业级审计需求 |

> **整体评估**：本周期合并 PR 以**稳定性、可观测性、治理完善**为主，功能交付集中在 WebUI 体验闭环与 Provider 基建收尾，项目向 “生产就绪” 又迈进一步。

---

## 4. 社区热点（评论/反应最多的 PR）
> 过去 24 h 所有 PR 评论数均为 0，👍 反应均为 0。  
> **推断**：讨论主要在内部 Code Review 或私有 Slack/Discord 进行，公开 Issue 区暂无外部热点。建议维护者定期在 Issue 区发起 “RFC” 或 “Good First Issue” 活跃社区。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | PR / Issue | 标题 | 状态 | 关联 Fix PR |
|--------|------------|------|------|-------------|
| **P0（生产阻断）** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | Telegram 长轮询静默卡死 | ✅ **已合并** | 自带修复 |
| **P1（数据不一致）** | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | 已删除会话被延迟消息重建 | 🟡 Open | 自带修复 |
| **P1（错误掩盖）** | [#5484](https://github.com/HKUDS/nanobot/pull/5484) | MCP 业务错误包装 `isError=false` 导致 Agent 误判成功 | 🟡 Open | 自带修复 |
| **P2（回归）** | [#5490](https://github.com/HKUDS/nanobot/pull/5490) | WebUI 聚合 Turn Token 统计不准 | 🟡 Open | 自带修复 + 回归测试 |
| **P2（回归）** | [#5491](https://github.com/HKUDS/nanobot/pull/5491) | WebUI 回答文本混入 Reasoning Shell | 🟡 Open | 自带修复 |
| **P2（回归）** | [#5469](https://github.com/HKUDS/nanobot/pull/5469) | TUI 未展示实测请求上下文 | 🟡 Open | 自带修复 |
| **P2（可观测性缺失）** | [#5485](https://github.com/HKUDS/nanobot/pull/5485) | 原生 Provider 丢失 LangSmith 追踪 | ✅ **已合并** | 自带修复 |
| **P2（SDK 语义违背）** | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | `ephemeral=True` 仍持久化会话状态 | 🟡 Open | 自带修复 |

> **关注点**：`#5483`、`#5484` 涉及核心会话/工具调用链路，建议优先 Review 并回归测试；5 条 `conflict` PR 需尽快 Rebase 避免阻塞发布。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 可能纳入下一版本的概率 | 依据 |
|----------|----------|------------------------|------|
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | WebUI Follow-up Suggestions（类 DeerFlow 交互） | 🟢 高 | 已有完整实现 + 测试，仅待解冲突 |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | WebUI Agent Activity 10 语言本地化 | 🟢 高 | 实现完备，仅需 Rebase |
| [#5487](https://github.com/HKUDS/nanobot/pull/5487) | 文件预览 Markdown 渲染 + 系统打开 + Subagent 生命周期回放 | 🟡 中 | 两批工作打包，冲突标记需拆分 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | 用户可控的 Turn Recovery（Continue/Dismiss） | 🟡 中 | 设计审慎，涉及检查点持久化，需充分测试 |
| [#5489](https://github.com/HKUDS/nanobot/pull/5489) | Email IMAP 性能优化（Header 先行 + UID SEARCH） | 🟢 高 | 纯性能提升，风险低，已含测试 |
| [#5481](https://github.com/HKUDS/nanobot/pull/5481) / [#5480](https://github.com/HKUDS/nanobot/pull/5480) | 统一 Provider Usage 后端 + Typed LLMUsage Contract | 🟢 高 | 基建重构核心，已分层堆叠，`#5480` 已合并前置依赖 |

> **路线图推测**：v0.17.x 将以 **“WebUI 体验闭环 + Provider 基建定型 + 通道稳定性”** 为主题；`#5420` 等运行时新特性可能延至 v0.18。

---

## 7. 用户反馈摘要
- **过去 24 h 无新 Issue/评论**，无法直接提炼外部用户痛点。  
- 从已关闭 PR 反推的隐性反馈：  
  1. **Telegram 生产环境稳定性** 是企业用户最关切（`#5156` 修复后无回归报告）。  
  2. **DeepSeek 兼容性** 曾阻断部分用户接入（`#3869` 修复）。  
  3. **WebUI 消息碎片化** 导致长对话难以阅读（`#5486` 统一面板）。  
  4. **可观测性**（LangSmith、Token 明细）为团队采纳决策关键指标。

---

## 8. 待处理积压（长期未响应/高优先级）

| 项目 | 类型 | 停滞天数 | 关键阻碍 | 建议行动 |
|------|------|----------|----------|----------|
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | PR (feat) | 6 天 | `conflict` + 无 Review 通过 | 指派 Reviewer，拆分冲突文件单独 Rebase |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | PR (feat) | 10 天 | `conflict` | 同上 |
| [#5469](https://github.com/HKUDS/nanobot/pull/5469) | PR (fix) | 2 天 | `conflict` | 高优先级，TUI 核心指标缺失 |
| [#5487](https://github.com/HKUDS/nanobot/pull/5487) | PR (feat) | 1 天 | `conflict` | 拆分为两个 PR 降低合并难度 |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | PR (refactor) | 2 天 | 依赖 `#5481` | 确认 `#5481` CI 通过后尽快合并 |
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) | Issue (tracking) | — | 由 `#5485` 修复 | 验证 LangSmith 追踪全链路后关闭 |

> **维护者提醒**：当前 5 条 `conflict` PR 集中在 WebUI 核心文件，建议本周内安排 “合并冲突清理专场”，避免技术债积压影响下周发布窗口。

---

## 附录：关键链接汇总
- **Open PR 列表**（按优先级）：[#5491](https://github.com/HKUDS/nanobot/pull/5491) · [#5490](https://github.com/HKUDS/nanobot/pull/5490) · [#5487](https://github.com/HKUDS/nanobot/pull/5487) · [#5469](https://github.com/HKUDS/nanobot/pull/5469) · [#5408](https://github.com/HKUDS/nanobot/pull/5408) · [#5367](https://github.com/HKUDS/nanobot/pull/5367) · [#5489](https://github.com/HKUDS/nanobot/pull/5489) · [#5481](https://github.com/HKUDS/nanobot/pull/5481) · [#5480](https://github.com/HKUDS/nanobot/pull/5480) · [#5420](https://github.com/HKUDS/nanobot/pull/5420) · [#5485](https://github.com/HKUDS/nanobot/pull/5485) · [#5471](https://github.com/HKUDS/nanobot/pull/5471) · [#5484](https://github.com/HKUDS/nanobot/pull/5484) · [#5483](https://github.com/HKUDS/nanobot/pull/5483)
- **已合并/关闭 PR**：[#5488](https://github.com/HKUDS/nanobot/pull/5488) · [#5486](https://github.com/HKUDS/nanobot/pull/5486) · [#5156](https://github.com/HKUDS/nanobot/pull/5156) · [#4430](https://github.com/HKUDS/nanobot/pull/4430) · [#3869](https://github.com/HKUDS/nanobot/pull/3869) · [#3294](https://github.com/HKUDS/nanobot/pull/3294) · [#5485](https://github.com/HKUDS/nanobot/pull/5485)

---

*报告由 AI 分析师自动生成，数据截至 2026-08-23 06:00 UTC

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-23

---

## 1. 今日速览
- **活跃度极高**：过去 24 小时共 50 个 Issue 更新（48 活跃/新开、2 关闭）与 50 个 PR 更新（47 待合并、3 合并/关闭），无新版本发布。  
- **核心矛盾聚焦**：Desktop 端安装/更新链路（Linux `.desktop`、Windows 打包、自更新失效）、Gateway 控制面缺失导致的舰队管理混乱、长会话上下文压缩挂死、MCP 凭据变更不重连等稳定性痛点集中爆发。  
- **安全边界收紧**：控制 Socket 禁用世界可连、PKCE Cookie 语法修复、Webhook 凭据轮换、MCP 会话凭据变更感知等安全相关 PR 同步推进。  
- **架构债偿还**：技能索引新鲜度监控失效（已超时 29.8h）、Gateway 无自有控制面、state.db 无文件身份守卫等长期技术债进入显性追踪。  
- **社区响应迅速**：多个高热 Issue 在数小时内产出对应 Fix PR（如 #92095→#92090/#92122、#92565→#92596），显示维护团队对阻塞性 Bug 的快速响应能力。

---

## 2. 版本发布
**今日无新版本发布**。当前主线仍在积累修复，预计下一版本将包含大量 Desktop/Gateway/安全修复。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 关联 Issue | 状态 |
|----|------|----------|------------|------|
| [#92594](https://github.com/NousResearch/hermes-agent/pull/92594) | Bug Fix | 恢复持久化心跳监听：启动时从持久会话路由恢复活跃心跳监听，适配器重连后重试平台级恢复 | #89332 (会话状态) | **已合并** |
| [#92088](https://github.com/NousResearch/hermes-agent/pull/92088) | Bug Fix | 解析能导入 `hermes_cli` 的解释器用于 `.desktop Exec=`，修复 uv/venv 启动静默失败 | #92086, #92095 | **已合并** |
| [#17235](https://github.com/NousResearch/hermes-agent/pull/17235) | Feature | 为辅助 LLM 调用（视觉/压缩/会话搜索）增加同 Provider 有序回退模型 | — | **已关闭** (长期 PR，可能被替代方案吸收) |
| [#40391](https://github.com/NousResearch/hermes-agent/issues/40391) | Bug Fix | Desktop 远程网关 WebSocket 连接失败回退本地后端 | — | **Issue 已关闭** |
| [#92551](https://github.com/NousResearch/hermes-agent/issues/92551) | Security | `computer_use` 审批在无 CLI 回调时误判通过 | — | **Issue 已关闭 (重复)** |

**进展评估**：核心阻塞项（Desktop 启动、Gateway 心跳恢复）已落地修复；长期架构 PR（#17235）关闭暗示路线图调整；安全类 Issue 快速闭环。

---

## 4. 社区热点（高互动 Issue/PR 深度解析）

| 排名 | Issue/PR | 评论/👍 | 核心诉求 | 维护动向 |
|------|----------|---------|----------|----------|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **技能索引陈旧/降级** | 78 💬 | 自动化新鲜度探针失败：索引 29.8h 未更新（阈值 26h），文档站技能中心依赖 `/docs/api/skills-index.json`，重建工作流 cron 失效 | **持续 36 天未愈**，需排查 `skills-index.yml` 与 `deploy-site.yml` 触发条件 |
| 2 | [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) **Webhook 功能包：图门控修复** | 22 💬 | 对 Webhook 全表面（入口/执行/投递/配置/管理 UI/部署/文档）实施 5×2×3 图门控修复，属于大型重构追踪 Issue | 已形成规范计划文档，正在拆解子任务 |
| 3 | [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) **舰队更新可靠性：统一部署计划** | 14 💬 | 安装/更新是最不可靠能力（~30 个 Issue + ~15 个 PR 各自修补一角），缺乏统一计划、验证、回滚 | **P1 追踪 Issue**，teknium1 主导，关联 #92091 Gateway 控制 Socket 设计 |
| 4 | [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) **DeepSeek 500k Token 会话永久挂死** | 8 💬 | 上下文压缩流卡住 120s+，流等待 600s 上限后中断轮次永不恢复，后续消息无法开启新轮次 | 涉及流式、压缩、会话状态、Windows 桌面端，P1 优先级 |
| 5 | [#92095](https://github.com/NousResearch/hermes-agent/issues/92095) **uv 安装下 `.desktop Exec=` 指向裸解释器** | 5 💬 | Linux uv 安装生成的 `.desktop` 直接指向 uv shim 而非项目 venv python，点击图标静默失败 | **已有两个修复 PR**：[#92090](https://github.com/NousResearch/hermes-agent/pull/92090) (保留 venv 解释器) 与 [#92122](https://github.com/NousResearch/hermes-agent/pull/92122) (解析可导入 hermes_cli 的解释器) 并行推进 |
| 6 | [#92091](https://github.com/NousResearch/hermes-agent/issues/92091) **Gateway 控制 Socket：替换进程扫描启发式** | 5 💬 | 所有舰队更新 Bug 根因：Gateway 无自有控制面，导致更新器/Desktop/重启助手均通过进程表扫描管理 | 设计阶段，teknium1 推动，配合 #91277 统一部署计划 |
| 7 | [#83832](https://github.com/NousResearch/hermes-agent/issues/83832) **PKCE state cookie 字面分号破坏 OIDC 登录** | 4 💬 | Cookie 值含字面 `;` 违反 RFC 6265，导致 OIDC 登录中断 | 明确定位到 `hermes_cli/dashboard_auth/cookies.py`，待修复 |
| 8 | [#92457](https://github.com/NousResearch/hermes-agent/issues/92457) **安全：轮换泄露 Webhook 凭据并重新发布受影响镜像** | 1 💬 | #92394 清理了 `default.tar.gz` 但档案 blob 仍可达、镜像层仍含密钥，**P1 安全边界** | 需立即轮换凭据、重建镜像、清理历史 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 影响面 | 是否有 Fix PR |
|--------|-------|------|--------|---------------|
| **Critical** | [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) | DeepSeek 500k Token 会话压缩挂死 → 永久不可用 | Desktop + DeepSeek + 长上下文 | 无 |
| **Critical** | [#92271](https://github.com/NousResearch/hermes-agent/issues/92271) | Windows Docker 沙箱会话目录含 `:` 导致 `WinError 267` | Windows + Docker 后端 | 无 |
| **High** | [#92302](https://github.com/NousResearch/hermes-agent/issues/92302) | 本地模型大上下文 120s 超时过短（Qwen3 8-27B） | 本地后端 + 大模型 | 无 |
| **High** | [#83832](https://github.com/NousResearch/hermes-agent/issues/83832) | PKCE Cookie 语法错误 → OIDC 登录全面失效 | 所有使用 OIDC 的部署 | 无 (定位精确) |
| **High** | [#92565](https://github.com/NousResearch/hermes-agent/issues/92565) | MCP 服务器凭据变更不重连，仅按名称复用会话 | MCP 集成场景 | **有**：[#92596](https://github.com/NousResearch/hermes-agent/pull/92596) (今日新建) |
| **High** | [#92553](https://github.com/NousResearch/hermes-agent/issues/92553) | `pre_tool_call` shell hook 返回 `{"action":"approve"}` 被静默丢弃 | Hook 审批机制 | 无 |
| **Medium** | [#92095](https://github.com/NousResearch/hermes-agent/issues/92095) | uv 安装 `.desktop Exec=` 指向错误解释器 → 静默启动失败 | Linux uv 用户 | **有**：#92090, #92122 (均已合并/待合并) |
| **Medium** | [#58593](https://github.com/NousResearch/hermes-agent/issues/58593) | Linux Desktop 应用内更新反复失败、Electron 沙箱权限重置 | Linux Desktop 自更新 | 无 |
| **Medium** | [#70606](https://github.com/NousResearch/hermes-agent/issues/70606) | Hindsight `local_embedded` 每次启动覆盖 `.env` 破坏用户嵌入/重排配置 | 记忆/嵌入配置持久化 | 无 |
| **Medium** | [#91459](https://github.com/NousResearch/hermes-agent/issues/91459) | Windows 11 HUD 模式持久不透明主题背景 | Windows Desktop UI | 无 |
| **Medium** | [#92506](https://github.com/NousResearch/hermes-agent/issues/92506) | `profiles.list` JSON-RPC 无响

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-23

> **数据基准**：GitHub 过去 24 小时增量（Issues: 2, PRs: 6, Releases: 0）  
> **项目地址**：github.com/sipeed/picoclaw

---

## 1. 今日速览
- **活跃度评级**：🟡 **中等偏低** — 无新版本发布，Issue 新增仅 2 条（均为 Bug），PR 活动以旧存量清理为主（4 个陈旧 PR 批量关闭/合并），核心维护力量疑似处于“技术债偿还期”而非新特性开发期。
- **核心矛盾**：两个高优先级 Bug（MCP 连接失败导致 Agent 死循环 #3269、Telegram 编辑风暴 #3343）均未合并修复，用户端可用性风险较高。
- **代码库健康度**：PR #3222（-200 LOC）与 #3319（exec 工具超时修复）显示团队正在收敛历史技术债，但审阅吞吐率偏低（6 个 PR 中 4 个为数月前提交），需警惕“积压审阅”成为新瓶颈。
- **社区信号**：Issue #3269 已获 1 👍 且评论 6 条，说明 MCP 稳定性已影响核心用户流程；#3343 暴露 Telegram 适配器在异常分支下的资源泄漏隐患。

---

## 2. 版本发布
**今日无新版本发布**。建议关注后续 Nightly 构建是否包含 #3337（MCP 挂起修复）与 #3319（exec 超时修正）。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 标题 | 类型 | 影响面 | 备注 |
|----|------|------|--------|------|
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | `fix(tools): honor exec timeout and boolean run options` | **Bug Fix / Core Tooling** | `exec` 工具同步执行路径 | 修复 per-run `timeout` 被忽略、布尔参数类型声明错误，**直接提升工具调用可靠性**，已合并。 |
| [#714](https://github.com/sipeed/picoclaw/pull/714) | `skills: install/reinstall CLI and refactor into skillsCmd` | **Feature / CLI** | 技能安装/重装流程 | 引入 GitHub Trees API 全量拉取、支持 `repo@branch` 与子路径、新增 `reinstall` 子命令，**技能生态基建完善**，已合并。 |
| [#1083](https://github.com/sipeed/picoclaw/pull/1083) | `fix(cron): preserve recurring job schedule after execution` | **Bug Fix / Cron** | 循环定时任务 | 修复 `every_seconds`/`cron_expr` 任务执行一次后停止复发，**定时调度正确性恢复**，已合并。 |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | `fix: merge PR #1500 #1490 #1488 #1487 #1485` | **Batch Merge / Maintenance** | 多模块历史修复 | 批量合并 5 个早期 PR，属“清理积压”性质，无单一业务突破。 |

> **进展小结**：今日合并 4 个 PR，覆盖 **工具链、技能系统、定时任务** 三大核心子系统，属“补课式”质量提升，非新能力交付。

---

## 4. 社区热点（高互动/高关注）

| 入口 | 互动指标 | 核心诉求 | 分析 |
|------|----------|----------|------|
| [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) | 👍 1 · 💬 6 · 🕒 34 天 | **MCP 连接失败 → Agent 循环挂起 → 聊天界面完全无响应** | 多位用户确认复现，附带完整堆栈与日志；PR #3337 已提交修复但**停滞 9 天未合并**，维护者响应延迟导致用户信心受损。 |
| [Issue #3343](https://github.com/sipeed/picoclaw/issues/3343) | 👍 0 · 💬 0 · 🕒 1 天 | **Telegram `editMessageText` 疯狂重试 22.8 万次触发速率限制** | 新提交，尚无讨论；暴露“工具反馈动画”缺乏**熔断/退避/最大重试**机制，属典型“快乐路径充分、异常路径缺失”。 |
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | 💬 未披露 · 🕒 51 天 | **DeltaChat 实现大幅精简（-200 LOC）、移除密码明文配置** | 长期标记 `stale`，架构清理价值高但优先级被挤占，建议设专人 Review 推进。 |

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 现象 | 影响范围 | 已有 Fix PR | 状态 |
|--------|-------|------|----------|-------------|------|
| 🔴 **P0 - 服务不可用** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败 → AgentLoop 退出 → 全用户会话冻结 | 所有启用 MCP 的部署 | [#3337](https://github.com/sipeed/picoclaw/pull/3337) | **Open (9 天未合并)** |
| 🟠 **P1 - 资源泄漏/外部封禁** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Telegram 编辑风暴 → 22.8 万次调用 → 账号被限流 | Telegram 适配器用户 | 无 | **Open (0 天)** |
| 🟡 **P2 - 功能降级** | 隐含于 #3319 | `exec` 超时参数无效、布尔参数类型错 | 依赖精确超时控制的工具调用 | [#3319](https://github.com/sipeed/picoclaw/pull/3319) | ✅ **已合并** |

> **建议**：立即安排 #3337 Review 并热补丁发布；为 #3343 编写最小复现用例并补充 Telegram 适配器熔断逻辑。

---

## 6. 功能请求与路线图信号
- **技能系统 CLI 化**（#714 已合并）→ 下一步预期：技能市场索引、版本锁定、私有仓库凭证托管。
- **DeltaChat 现代化**（#3222 待合并）→ 信号：团队倾向剥离 legacy IM 协议包袱，聚焦 MCP / Telegram / Discord 主流渠道。
- **定时任务可靠性**（#1083 已合并）→ 后续可能引入分布式锁、作业持久化、可视化调度面板。

> **路线图推测**：v0.12.x 将以“稳定性巩固 + 技能生态 CLI”为主题；MCP 与 Telegram 适配器的异常处理补强将是 v0.12.1 热补丁核心。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点场景 | 真实呼声 | 满意度倾向 |
|----------|----------|------------|
| **MCP 故障时无降级** | “一旦 MCP 挂了，整个 Picoclaw 就假死，只能重启进程” | ❌ 极度不满 |
| **Telegram 编辑风暴** | “Bot 被 Telegram 限流 24 小时，业务通知全断” | ❌ 严重不满 |
| **技能安装体验** | “终于有 `reinstall` 和子路径支持了，CI/CD 集成方便多了” | ✅ 高度认可 |
| **Cron 任务单次执行** | “定时备份脚本只跑了一次，害丢数据” | ❌ 信任受损（已修复） |

---

## 8. 待处理积压（长期未响应/高价值）

| 入口 | 停滞时长 | 价值判定 | 建议动作 |
|------|----------|----------|----------|
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | 51 天 | 高：-200 LOC、安全加固、文档同步 | **指派 Code Owner 48 h 内完成 Review** |
| [PR #3337](https://github.com/sipeed/picoclaw/pull/3337) | 9 天 | **Critical**：解除 P0 阻塞 | **设为“Must Merge”标签，跳过常规队列** |
| [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) | 34 天 | Critical：用户流失风险 | 同 #3337，捆绑发布 Hotfix |
| [Issue #3343](https://github.com/sipeed/picoclaw/issues/3343) | 1 天 | High：外部依赖风暴 | **立即建立复现脚本，纳入本 Sprint** |

---

### 📌 维护者行动清单（优先级排序）
1. **合并 #3337** → 切 Nightly → 发布 Hotfix v0.11.x（解除 MCP 死锁）  
2. **Review #3222** → 合并清理 DeltaChat 技术债  
3. **立项 #3343 修复** → 在 `telegram_adapter` 引入 `editMessageText` 速率限制器（Token Bucket + 指数退避 + 最大重试 10 次）  
4. **清理 stale 标签**：建议自动化脚本将 >30 天无活动 PR/Issue 自动标记需人工复核，避免隐形积压。

---

*报告生成时间：2026-08-23 06:00 UTC | 数据源：GitHub REST API / GraphQL 增量同步*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-23

---

## 1. 今日速览

**整体状态：高活跃度，核心维护团队主导的密集修复与重构期。**  
过去 24 小时内，**无新版本发布**，但提交了 **25 个 PR**（其中 8 个已合并/关闭，17 个待审核）并新增 **1 个 Issue**。核心贡献者（witek, gavrielc, amit-shafnir, wakqasahmed, Koshkoshinsk, zvi-fried）集中推进了 **Telegram/Slack 适配器稳定性、Setup 向导多实例支持、电路熔断器作用域隔离、CLI 测试兼容性（Node 25+）、Cursor Agent 技能集成** 等关键领域。项目呈现“修复旧债 + 铺设新能力”并行态势，代码库健康度提升信号明显。

---

## 2. 版本发布

> **今日无新版本发布。**

---

## 3. 项目进展：今日合并/关闭的重要 PR（8 个）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#3394](https://github.com/nanocoai/nanoclaw/pull/3394) | **Fix (Slack)** | 修复手动安装回退 URL 的 `redirect_uri` 校验失败；修复 Agent 驱动供应的死胡同 | Slack 集成的企业级部署成功率 |
| [#3390](https://github.com/nanocoai/nanoclaw/pull/3390) | **Fix (Setup)** | 重跑 Setup 时识别已保存的 `SLACK_BOT_TOKEN`，避免重复预配同名 Slack App | 运维体验、幂等性 |
| [#3443](https://github.com/nanocoai/nanoclaw/pull/3443) | **Build** | 从 `onlyBuiltDependencies` 移除 `better-sqlite3`，改用其内置预构建二进制 | 安装速度↑，原生编译依赖↓，CI 稳定性↑ |
| [#3444](https://github.com/nanocoai/nanoclaw/pull/3444) | **Fix (Upgrade)** | Git 无法识别检出时，允许版本号匹配作为升级判断的弱回退（附带 WARN） | 容器/不可变部署场景的升级检测鲁棒性 |
| [#3445](https://github.com/nanocoai/nanoclaw/pull/3445) | **Chore** | 误提交到错误上游，已关闭 | 无实质影响 |
| [#3434](https://github.com/nanocoai/nanoclaw/pull/3434) | **Fix (Chat-SDK)** | 轮询模式适配器不再开启 Webhook 服务器 | 资源占用↓，避免端口冲突 |
| [#3431](https://github.com/nanocoai/nanoclaw/pull/3431) | **Fix (Telegram-Setup)** | 配对卡片修正为 6 位数字（此前显示错误） | 首次接入体验 |
| [#3447](https://github.com/nanocoai/nanoclaw/pull/3447) | **Fix (Circuit-Breaker)** | 熔断计数器按实例隔离（基于 `data/` 挂载点），避免多实例共享计数器导致误判 | 多实例部署的启动可靠性 |

**整体推进度评估：**  
- **基础设施层**：构建依赖瘦身（#3443）、升级检测容错（#3444）、熔断器多实例安全（#3447）已落地。  
- **集成层**：Slack 企业级安装链路打通（#3394, #3390），Telegram 轮询/配对修复（#3434, #3431）。  
- **向导层**：多 Telegram Bot 支持、实例感知配对、文档同步（#3435, #3437, #3438）进入审核末期。

---

## 4. 社区热点：讨论最活跃 / 关注度最高的 Items

| Item | 类型 | 热度指标 | 核心诉求 |
|------|------|----------|----------|
| [#3453](https://github.com/nanocoai/nanoclaw/issues/3453) | **Issue (Bug)** | 新建 0 评论，但关联 **Node 25+ 兼容性** | `tsx loader` 弃用警告污染 stderr，导致 `stdin-json` 测试误判。阻断 CI 升级 Node 25。 |
| [#3450](https://github.com/nanocoai/nanoclaw/pull/3450) | **PR (Telegram)** | 关联 Issue #2991 | 广播频道匿名消息的 `sender_chat` 身份未被 `agent_permissions` 识别，导致权限拦截失效。 |
| [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) | **PR (Telegram)** | 修复 `allowedUpdates` 服务端持久化导致的 channel-post 丢失 | 显式声明 `allowedUpdates` 防止历史配置黑洞。 |
| [#3446](https://github.com/nanocoai/nanoclaw/pull/3446) | **PR (Core)** | 修复 #3235 | 自动化发送者（Bot/Webhook）触发未知发送者审批卡片，陷入永久拒绝循环。 |
| [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) / [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) | **PR (Feature/Skill)** | Cursor Agent SDK 集成 + `/add-cursor` 技能 | 引入新代理提供商，扩展多模型编排能力。 |

**信号分析：**  
社区核心关注点集中在 **“多平台适配器的边缘场景修复”** 与 **“新 Agent 提供商的原生接入”**。Telegram 相关 PR 聚焦于“频道匿名身份识别”与“长轮询配置幂等性”，反映出生产环境中高并发频道场景的真实痛点。

---

## 5. Bug 与稳定性：今日报告/修复的缺陷

| 严重度 | 编号 | 标题 | 状态 | 关联 Fix PR |
|--------|------|------|------|-------------|
| **P1 (阻断 CI/升级)** | [#3453](https://github.com/nanocoai/nanoclaw/issues/3453) | Node 25+ `tsx loader` 弃用警告污染 stderr，导致 `stdin-json` 测试失败 | **Open** | 暂无 |
| **P1 (数据丢失风险)** | [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) | Telegram `allowedUpdates` 服务端持久化导致 channel-post 被黑洞 | **Open (PR Ready)** | #3449 |
| **P1 (权限绕过)** | [#3450](https://github.com/nanocoai/nanoclaw/pull/3450) | 广播频道匿名身份未被权限系统识别 | **Open (PR Ready)** | #3450 |
| **P2 (功能失效循环)** | [#3446](https://github.com/nanocoai/nanoclaw/pull/3446) | Bot/Webhook 触发未知发送者审批，永久拒绝循环 | **Open (PR Ready)** | #3446 |
| **P2 (多实例干扰)** | [#3447](https://github.com/nanocoai/nanoclaw/pull/3447) | 熔断计数器跨实例共享，导致误延迟 | **Merged** | #3447 ✅ |
| **P2 (重复预配)** | [#3390](https://github.com/nanocoai/nanoclaw/pull/3390) | Slack Setup 重跑时重复创建 App | **Merged** | #3390 ✅ |
| **P3 (安装受阻)** | [#3394](https://github.com/nanocoai/nanoclaw/pull/3394) | Slack 手动安装回退 URL 校验失败 | **Merged** | #3394 ✅ |

> **关键观察：** 3 个 P1 级 Bug 均已有 **Ready-to-merge PR**，建议优先审核合并以解除 Node 25 升级阻塞与 Telegram 消息丢失风险。

---

## 6. 功能请求与路线图信号

| 需求来源 | 信号强度 | 可能落地版本 | 备注 |
|----------|----------|--------------|------|
| **Cursor Agent SDK 原生支持** ([#3355](https://github.com/nanocoai/nanoclaw/pull/3355), [#3356](https://github.com/nanocoai/nanoclaw/pull/3356)) | 🔥🔥🔥 (核心成员推进，带 SKILL.md) | **下一个 Minor** | 已实现 Provider + CLI 技能，文档完备，仅待合并。 |
| **Setup 向导：多 Telegram Bot / 实例感知配对** ([#3435](https://github.com/nanocoai/nanoclaw/pull/3435), [#3437](https://github.com/nanocoai/nanoclaw/pull/3437), [#3438](https://github.com/nanocoai/nanoclaw/pull/3438)) | 🔥🔥 (核心成员，文档同步) | **下一个 Minor** | 解决“单实例只能绑定一个 Bot”的长期限制。 |
| **Slack MPDM 审批卡片人类可读名称** ([#3385](https://github.com/nanocoai/nanoclaw/pull/3385)) | 🔥 (核心成员) | **下一个 Patch/Minor** | 改善群组 DM 场景 UX。 |
| **CLI 分派命令：组上下文覆盖显式参数时警告** ([#3448](https://github.com/nanocoai/nanoclaw/pull/3448)) | 🔥 (修复 #2464) | **下一个 Patch** | 防止静默覆盖导致的误操作。 |
| **Update 命令捕获输出缓冲区真实化** ([#3452](https://github.com/nanocoai/nanoclaw/pull/3452)) | 🔥 | **下一个 Patch** | 修复更新流程中输出丢失。 |
| **Barrel Import 归属技能修正** ([#3451](https://github.com/nanoclaw/pull/3451)) | 🔥 | **下一个 Patch** | 构建系统细节修复。 |

**路线图推断：**  
下一个版本（预计 v0.x.y 或 v1.0.0-rc）将聚焦 **“多实例/多提供商就绪”** 与 **“Telegram/Slack 生产级稳定性”**。Cursor Agent 集成标志着“多模型编排”能力正式入栈。

---

## 7. 用户反馈摘要（从 Issue/PR 评论隐性提炼）

| 痛点场景 | 典型反馈 | 项目响应进度 |
|----------|----------|--------------|
| **企业 Slack 审批策略阻断自动安装** | “手动安装链接打不开、Agent 自供应无回退” | ✅ 已修复合并 (#3394) |
| **反复运行 Setup 导致重复 Slack App** | “取消后重跑，多出一堆同名 App” | ✅ 已修复合并 (#3390) |
| **Telegram 频道匿名消息被权限系统拦截** | “频道发帖没人能批准，功能不可用” | 🔄 PR 待审 (#3450) |
| **长轮询配置变更不生效，消息丢失** | “改了代码不重启 Bot 就收不到频道帖子” | 🔄 PR 待审 (#3449) |
| **Bot 发消息自己触发审批卡片** | “机器人发个通知还要自己点批准，死循环” | 🔄 PR 待审 (#3446) |
| **Node 25 升级后 CI 红了** | “tsx 警告跑到 stderr，测试判定失败” | ⚠️ Issue 新开，待修复 (#3453) |

**满意度信号：**  
核心维护者对“安装/升级/多实例”这类运维高频痛点响应极快（同日合并 3 个 Setup/Slack PR），用户不满主要集中在 **Telegram 长尾边缘场景**（频道匿名、轮询配置幂等、Bot 自触发审批），目前均已有 PR 排队。

---

## 8. 待处理积压：长期未响应 / 高价值待推进

| Item | 类型 | 停留时长 | 优先级建议 | 原因 |
|------|------|----------|------------|------|
| [#3453](https://github.com/nanocoai/nanoclaw/issues/3453) | **Issue (Node 25 兼容)** | 0 天 (新) | **P0 - 本周内** | 阻断 Node 版本升级，影响 CI 与贡献者环境。 |
| [#3450](https://github.com/nanocoai/nanoclaw/pull/3450) | **PR (Telegram 权限)** | 0 天 | **P0 - 本周内** | 生产环境频道消息权限失效，影响面广。 |
| [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) | **PR (Telegram 数据丢失)** | 0 天 | **P0 - 本周内** | 静默消息丢失，难发现。 |
| [#3446](https://github.com/nanocoai/nanoclaw/pull/3446) | **PR (Bot 审批死循环)** | 0 天 | **P1 - 本周内** | 自动化流程完全卡死。 |
| [#3385](https://github.com/nanocoai/nanoclaw/pull/3385) | **PR (Slack MPDM 名称)** | 3 天 | **P1 - 下个 Sprint** | UX 细节，但涉及对话解

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-23

> 数据范围：2026-08-22 00:00 - 23:59 (UTC) | 数据来源：GitHub API

---

## 1. 今日速览

IronClaw 今日呈现**高强度基建与核心重构并行**的态势。过去 24 小时无新版本发布，但合并了 5 个 PR（含 3 个 WebUI 修复、1 个通知系统重构、1 个陈旧依赖清理），新开 5 个 Issue 与 5 个大型 PR，核心聚焦于 **Context 成本治理（#7824）**、**沙箱通用凭证代理（#7825/#7810）**、**CI/CD 全链路加速（#7817/19/20/21/09）**、**Subagent 后台模式（#7818）** 与 **Onboarding 体验闭环（#7815/#7816）**。社区反馈暴露 Notion/Slack 集成安装受阻（#7823/#7822），已纳入追踪。整体活跃度极高，核心贡献者推进多条 XL 级并行工程，项目处于**架构演进关键期**，技术债偿还与新能力建设同步推进。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR（5 个）

| PR | 标题 | 规模/风险 | 核心变更 | 关联 Issue |
|----|------|-----------|----------|------------|
| [#7700](https://github.com/nearai/ironclaw/pull/7700) | **feat(notifications): publish authoritative run outcomes** | XL / Low | 通知系统重构：基于 Process Journal 状态机发布运行完成/失败通知；仅在助手回复持久化后发送完成通知；排除前台/子/无主运行；避免重复通知。 | #7691 |
| [#7773](https://github.com/nearai/ironclaw/pull/7773) | **refactor(webui): remove duplicate Settings and Extensions tabs** | L / Low | 移除未使用的 Settings/Extensions 标签组件、废弃测试、重复导航元数据（`SETTINGS_TABS`/`EXTENSIONS_TABS`），保留字段 Schema 与展示元数据。 | #7768 |
| [#7774](https://github.com/nearai/ironclaw/pull/7774) | **test(webui): make automation presenter date assertions timezone-robust** | M / Low | 修复 Automation presenter 日期断言对 UTC 的隐性依赖，改用浏览器本地格式化器派生期望值，新增 UTC 与 Asia/Shanghai 显式格式化快照。 | #7767 |
| [#7772](https://github.com/nearai/ironclaw/pull/7772) | **fix(webui): surface extension setup phase and blockers in Configure** | L / Low | Configure 模态框现完整渲染扩展设置 `phase` 与 `blockers`，覆盖认证选择、配对、通用阻塞器的本地化解释。 | #7769 |
| [#7076](https://github.com/nearai/ironclaw/pull/7076) | **Install the packages the catalog already publishes** | XL / Low | 清理 3 个月陈旧分支：安装目录已发布的包，修复 `MixedManifestFixture` 与 `Basic-manifest` 固定装置兼容性。 | — |

**进展评估**：单日合并 5 个 PR，其中 3 个解决 WebUI 长期技术债（重复组件、时区脆弱测试、扩展配置可见性），1 个落地通知系统核心重构，1 个清理陈旧依赖分支。**交付节奏健康，偿还债务与推进新特性并重。**

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue
| Issue | 标题 | 评论/👍 | 核心诉求 |
|-------|------|---------|----------|
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | **Context projection: Pi-style compaction barrier, structured summaries, overflow recovery** | 2 / 0 | **成本/性能危机**：全量历史注入导致 PinchBench 输入 Token 227.7M ($10.31) vs 基线 55.1M ($2.52)；需引入结构化摘要、压缩屏障、溢出恢复机制。 |
| [#7815](https://github.com/nearai/ironclaw/issues/7815) | **Onboarding suggestions: cumulative net-new work to close the connect → suggest → thread flow** | 1 / 0 | **Onboarding 端到端闭环**：串联 #7693（结构化输出）、#7694（后端建议 API）、#6994（OOBE 界面）三大里程碑，补齐“刷新就绪建议”“连接入口”两个前端缺口。 |

### 🚀 关注度最高的在审 PR（按规模与战略权重）
| PR | 标题 | 规模/风险 | 战略意义 |
|----|------|-----------|----------|
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | **feat(coding): omp core-tool contract + engines + benchmark arm** | XL / Medium | **编码工具统一契约**：将 6 个裸工具名（read/write/edit/glob/grep/bash）标准化，移除旧工具面与混合命名，附带基准测试臂。 |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | **feat(sandbox): mediate GitHub CLI through generic credential bindings** | XL / Low | **沙箱通用出站认证**：以 `iron-proxy` 侧车替代 GitHub 专用凭证注入，完成“每用户一个持久沙箱”运行时。 |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) | **feat(subagent): background mode — receipt spawns, per-child delivery, activation, healing sweeps** | XL / Low | **后台 Subagent 生产侧**：实现收据生成、逐子投递、激活与自愈扫描，配合 #7788（UI 侧）完成后台代理闭环。 |
| [#7765](https://github.com/nearai/ironclaw/pull/7765) | **feat(hooks): AfterTurn lifecycle point + memory curation** | XL / Low | **首个可执行生命周期钩子**：`AfterTurn` 仅在轮次终态触发，内建/受信插件可用，首个消费者为记忆整理。 |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | **ci: nextest test pipeline, full-failure signal, PR unthrottle** | XL / Medium | **CI 加速主轨**：引入 nextest、全量失败信号、PR 解除节流，壁钟时间大幅压缩。 |

**热点分析**：社区核心关注点集中在 **Token 成本治理（#7824）**、**沙箱通用化（#7810/#7825）**、**CI 效能（#7817 系）** 与 **Agent 编排能力（#7818/#7765）**。Onboarding（#7815）虽评论少，但为产品化关键路径，已有 3 个前置 PR 就绪，前端补丁 #7816 同日开出。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 状态 | 修复 PR |
|--------|-------|------|------|---------|
| **High** | [#7823](https://github.com/nearai/ironclaw/issues/7823) | **Notion 集成安装失败**（Slack 用户反馈，2026-07-28） | OPEN | 无 |
| **High** | [#7822](https://github.com/nearai/ironclaw/issues/7822) | **Slack 集成无法配置**，疑与 Notion 同根因 | OPEN | 无 |
| **Medium** | [#7767](https://github.com/nearai/ironclaw/issues/7767) | Automation presenter 日期测试在非 UTC 时区（如 Asia/Shanghai）失败 | **CLOSED** | [#7774](https://github.com/nearai/ironclaw/pull/7774) ✅ |
| **Medium** | [#7769](https://github.com/nearai/ironclaw/issues/7769) | Configure 仅处理 Hosted MCP 认证阻

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-23

> **数据范围**：2026-08-22 00:00 – 23:59 (UTC)  
> **数据源**：GitHub Issues/PRs/Releases API  
> **统计口径**：过去 24 小时内有更新动作（评论、关闭、合并、推送）的条目

---

## 1. 今日速览
- **整体活跃度：低/维护模式**。过去 24 小时无新 Issue 创建、无新 PR 提交、无版本发布。所有动作集中在**清理历史积压**：2 个长期挂起的 Issues 被标记 `[stale]` 并关闭，5 个创建于 4 月的 PR 被集中合并/关闭，1 个 8 月初的新 PR（#2452）保持开放并持续更新。
- **核心进展**：修复了协作会话重命名失败静默吞报错、Web Search 报错、自定义模型提供商上限受限等历史缺陷；合并了“会话导出 Markdown”、“错误重试按钮”两项高呼声功能。
- **风险信号**：仅 1 个开放 PR（#2452）处于审查中，且涉及模型 ID 解析的核心逻辑，需优先 Review 避免回归。

---

## 2. 版本发布
**无新版本发布**。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响模块 | 进展评估 |
|----|------|----------|----------|----------|
| [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | **Feature** | 新增会话详情「导出为 Markdown」：复用现有数据结构生成结构化 MD，含工具调用摘要、自动截断长文本、文件头元数据。关联 Issue #1345（原 #1213）。 | `CoworkSessionDetail.tsx` / Electron IPC | ✅ **已合并** – 补齐导出能力短板，直接提升知识沉淀体验。 |
| [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | **Feature** | 引入错误分类体系 `RETRYABLE_ERROR_KEYS`，在错误气泡内联「重试」按钮，覆盖 429/网络/5xx 等瞬时错误。 | `coworkErrorClassify.ts` / Cowork UI | ✅ **已合并** – 显著降低高频调用场景下的用户挫败感。 |
| [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | **Bugfix** | 会话重命名失败时不再静默吞报错：try-catch 包裹 IPC、弹 Toast、保持输入框聚焦供重试。 | 协作会话重命名流程 | ✅ **已合并** – 修复交互细节缺陷，提升鲁棒性。 |
| [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | **Bugfix/Enhancement** | 自定义模型提供商上限 10 → 20，将硬编码键名迁移至动态生成。 | Settings / Model Provider | ✅ **已合并** – 解决高级用户配置受限痛点。 |
| [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | **Bugfix** | 修复 Web Search 报错 `--disable-blink-features=AutomationControlled` 在 Chrome 130+ 导致的启动失败，溯源外部注入并规避。 | Web Search Skill / Chromium Flags | ✅ **已合并** – 消除环境差异导致的崩溃。 |
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | **Bugfix** | **进行中**：修复 OpenClaw 模型 ID 含 `/` 时 provider 前缀丢失（如 `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` 仅持久化后者）。 | OpenClaw / Model Persistence | 🔄 **Open / 需 Review** – 核心模型路由逻辑，回归风险高。 |

> **里程碑视角**：今日一次性清理 5 个 4 月积压 PR，标志着 v2026.3.30 后的「协作体验增强」小版本功能基本落地，后续重心或将转向 OpenClaw 稳定性与下一大版本规划。

---

## 4. 社区热点

| 排名 | 条目 | 互动量 | 核心诉求 | 分析 |
|------|------|--------|----------|------|
| 1 | [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) → [PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | 👍 0 / 评论 2 | **会话导出 Markdown** – 仅支持导出图片，无法编辑/检索/版本控制。 | 用户自提 PR 并合并，**需求闭环极快**，体现社区「自助解决」活跃度。 |
| 2 | [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | 👍 0 / 评论 2 | **私有化 Kimi 2.5 重复回复进度** – 必现，切模型即恢复。 | 典型厂商适配 Bug，已标 `[stale]` 关闭，但未见 Fix PR，**潜在风险**：私有化部署用户若未升级模型版本将持续受困。 |
| 3 | [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | 👍 0 / 评论 0 | **OpenClaw Provider 前缀丢失** – 模型 ID 含 `/` 导致持久化异常。 | 近期唯一活跃 PR，涉及多模型路由核心链路，**维护者需优先分配 Review 资源**。 |

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 关联 Fix |
|--------|------|------|----------|
| **P1 (核心路由)** | OpenClaw 模型 ID 含 `/` 导致 provider 丢失，可能引发模型调度错乱 | 🔄 Open | [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) |
| **P2 (功能受阻)** | 私有化 Kimi 2.5 分析文档重复回复进度，阻断文档分析流程 | ❌ Closed (stale) | **无 Fix PR** – 仅标记 stale 关闭，建议重新评估或转交模型适配组 |
| **P3 (交互缺陷)** | 会话重命名失败静默、Web Search 启动崩溃、自定义提供商上限 10 | ✅ Fixed | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) / [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) / [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 纳入下版本概率 |
|------|------|----------|----------------|
| 会话导出 Markdown | [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | ✅ **已合并 #1214** | **100%** – 已入主分支 |
| 错误气泡内联重试 | 内部规划 → [PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | ✅ **已合并** | **100%** – 已入主分支 |
| 自定义提供商 >10 个 | 内部规划 → [PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | ✅ **已合并** | **100%** – 已入主分支 |
| OpenClaw 多段模型 ID 支持 | [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | 🔄 Review 中 | **90%** – 修复型需求，极大概率热修复进下一 Patch |
| 私有化 Kimi 2.5 兼容性 | [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | ❌ Stale Closed | **30%** – 无人认领，需产品侧确认优先级 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

- **痛点**：
  1. **导出格式单一**：仅支持图片，无法二次编辑、全文检索、Git 管理会话记录（#1213）。
  2. **私有化模型适配不稳定**：Kimi 2.5 重复进度提示导致无法判断任务是否卡死，切换官方模型即正常，暗示适配层解析逻辑与厂商流式协议不匹配（#1206）。
  3. **高频调用易中断**：429/网络抖动需手动重发，缺乏一键重试（#1208 隐性需求）。
- **满意点**：
  - 社区响应速度快：用户提 Issue 并自行 PR，维护者 24h 内审合（#1213→#1214）。
  - 细节体验持续打磨：重命名报错、提供商上限等「纸切」Bug 均在本批次修复。

---

## 8. 待处理积压（需维护者关注）

| 条目 | 停滞时长 | 风险 | 建议动作 |
|------|----------|------|----------|
| [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) 私有化 Kimi 重复进度 | 创建 2026-04-01，今日被 stale 关闭 | **高** – 私有化部署场景核心阻断，标记 stale 不等于修复 | 1) 重新打开或新建 Bug；2) 指派模型适配负责人复现；3) 纳入回归测试矩阵。 |
| [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) OpenClaw provider 保持 | 创建 2026-08-07，持续更新至今日 | **中高** – 核心模型路由，合并前需充分 E2E 测试 | 安排核心维护者今日内完成 Code Review + CI 验证，争取明日合并。 |
| 无新 Issue/PR 流入 | 连续 24h 0 新建 | **中** – 社区外部贡献降温，或用户迁移至其他渠道 | 检查 Discord/论坛/反馈渠道是否有未同步诉求；考虑发布 v2026.8.x Patch 激活社区。 |

---

## 📌 一句话总结
**LobsterAI 今日完成「春季积压大扫除」：5 个功能/修复 PR 集中入库，导出 Markdown、错误重试、提供商扩容等高频诉求落地；唯一隐患是 OpenClaw 模型 ID 解析修复（#2452）仍在审查，且私有化 Kimi 兼容性问题被「stale」掩盖未真修——建议维护者优先敲定 #2452 并重审 #1206，随后切 Patch 版本发布。**

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-23

---

## 1. 今日速览
- **整体活跃度：中等** 🟡。过去 24 小时无新版本发布，但提交了 **3 个 PR** 并新开 **1 个 Issue**，显示核心维护者与社区贡献者正在并行推进“安全策略补全”、“MCP 稳定性”与“浏览器工具兼容”三条主线。
- **代码库健康度**：PR 均为 `fix` 类型，聚焦于修复 OpenAI Schema 兼容性、MCP 客户端生命周期管理及 Browserless v2 协议适配，属于高优先级的稳定性与互操作性债务偿还，风险可控。
- **社区信号**：新 Issue #1230 提出 **Hook 安全策略的“Fail-Closed”需求**，标志着企业级安全边界场景（如合规审计、零信任执行）正成为核心诉求，后续或将引入策略引擎重构。
- **积压风险**：当前 3 个 PR 均处于 `OPEN` 且 0 评论状态，Code Review 吞吐可能成为瓶颈，建议维护者在 48h 内完成首轮审查。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
> 今日无 PR 合并/关闭。以下为 **待合并 PR**，代表项目当前最确定的前进方向：

| PR | 标题 | 核心推进 | 影响面 | 链接 |
|----|------|----------|--------|------|
| **#1232** | `fix(tools): make object schemas OpenAI-safe` | 为 Cron/Webhook/MCP Env 等工具补全 `additionalProperties: false` 与显式字段声明，解决 OpenAI Strict Schema 下参数序列化为 `null`/空值的阻断性 Bug。 | **高** — 直接影响所有接入 OpenAI/Codex 模型的 Tool Calling 可用性。 | [#1232](https://github.com/moltis-org/moltis/pull/1232) |
| **#1231** | `fix(mcp): resolve current client after server restart` | 修复 MCP Server 重启后，Tool Registry 持有已关闭 Client 导致的“幽灵调用”问题；引入连接级客户端解析机制。 | **高** — MCP 长连接场景下的稳定性基石，避免会话中途静默失败。 | [#1231](https://github.com/moltis-org/moltis/pull/1231) |
| **#1229** | `fix(browser): support Browserless v2 containers` | 兼容 Browserless v2 协议（Base64 `launch` 参数、`TIMEOUT`/`CONCURRENT` 环境变量），保留 v1 默认配置实现平滑升级。 | **中** — 扩展浏览器自动化基础设施选型范围，降低运维锁定风险。 | [#1229](https://github.com/moltis-org/moltis/pull/1229) |

---

## 4. 社区热点
| 排名 | Item | 互动数据 | 核心诉求分析 | 链接 |
|------|------|----------|--------------|------|
| **1** | **Issue #1230** `feat(hooks): add an opt-in fail-closed error policy for modifying security hooks` | 💬 1 条评论 · 👍 0 | **安全合规刚需**：当前 Hook 运行时错误（超时、崩溃、网络分区）默认“Fail-Open”继续执行，无法满足零信任/审计场景“必须拦截”的要求。作者提出可选 `failClosed: true` 策略，若获批将触发策略引擎与执行器的联动改造。 | [#1230](https://github.com/moltis-org/moltis/issues/1230) |

> **洞察**：唯一高互动 Item 即为安全策略增强，说明社区关注点已从“功能完备”转向“生产级可信执行”。

---

## 5. Bug 与稳定性
| 严重度 | 来源 | 现象 | 关联 Fix PR | 状态 |
|--------|------|------|-------------|------|
| **P0 阻断** | PR #1232 | OpenAI Strict Schema 模式下，`patch`/`map` 类字段未显式声明导致模型被迫传 `null`/空对象，Tool Calling 实质失效。 | **已有 PR #1232** | 待 Review |
| **P0 数据一致性** | PR #1231 | MCP Server 重启后，活跃 Chat Turn 继续派发至已关闭 Client，导致工具调用静默失败、无重试。 | **已有 PR #1231** | 待 Review |
| **P1 兼容性** | PR #1229 | Browserless v2 容器启动参数格式变更（Base64 `launch`），现有集成无法启动实例。 | **已有 PR #1229** | 待 Review |

> **稳定性结论**：三大 P0/P1 Bug 均已有针对性 Fix PR，修复范围局限、测试路径清晰（Schema 单测、MCP 重启集成测、Browserless 矩阵测），合并后回归风险低。

---

## 6. 功能请求与路线图信号
| 需求来源 | 需求描述 | 纳入下一版本概率 | 依赖/阻塞 |
|----------|----------|------------------|-----------|
| **Issue #1230** | Hook 执行失败时可选 **Fail-Closed** 策略（拦截而非放行） | **高** 🎯 — 符合企业级安全基线，实现复杂度可控（策略标记 + 执行器分支）。 | 需同步更新 Hook SDK 文档、策略配置 Schema、审计日志字段。 |
| **PR #1229 隐含** | Browserless v2 正式支持（非实验性） | **中** — 已实现兼容层，待 v2 生态成熟后切默认版本。 | 上游 Browserless 稳定性验证。 |
| **PR #1231/1232 隐含** | MCP / OpenAI 互操作性测试矩阵纳入 CI | **高** — 避免同类回归，建议在 `make test-integration` 新增矩阵职位。 | CI 资源配额（需 Browserless、MCP Server 容器）。 |

---

## 7. 用户反馈摘要
> 仅 Issue #1230 含 1 条评论，提炼如下：

- **痛点**：*“在合规审计场景下，Hook 超时/崩溃不应被视为‘放行’信号；现有 `Block` 仅覆盖显式拦截，运行时故障属于盲区。”* —— 来自安全工程师视角。
- **使用场景**：金融/医疗数据处理管线，要求**所有**修改性工具调用（写 DB、发邮件、起容器）必须经过策略评估，**评估不可用即拒绝**。
- **满意度**：对现有 `BeforeToolCall` 等 Hook 机制设计表示认可，但期望**策略语义更显式**（如 `failClosed`、`failOpen` 枚举而非隐式行为）。

---

## 8. 待处理积压提醒
| Item | 停滞时长 | 关键性 | 建议行动 | 链接 |
|------|----------|--------|----------|------|
| **PR #1232** | ~24h | P0 | **优先 Review**：阻断 OpenAI/Codex 生产可用性，建议指派熟悉 JSON Schema 的维护者 4h 内完成。 | [#1232](https://github.com/moltis-org/moltis/pull/1232) |
| **PR #1231** | ~24h | P0 | **并行 Review**：MCP 长连接稳定性核心，建议由 MCP 模块 Owner 复核 Client 生命周期逻辑。 | [#1231](https://github.com/moltis-org/moltis/pull/1231) |
| **PR #1229** | ~24h | P1 | **常规 Review**：Browserless v2 适配，需确认 v1/v2 共存测试用例覆盖。 | [#1229](https://github.com/moltis-org/moltis/pull/1229) |
| **Issue #1230** | ~24h | P1 路线图 | **启动设计评审**：邀请 Security/Platform 组讨论 `failClosed` 语义、配置 Schema、审计日志扩展，产出 RFC 或 Design Doc。 | [#1230](https://github.com/moltis-org/moltis/issues/1230) |

---

### 📌 维护者行动清单（Next 24h）
1. **Review & Merge #1232 / #1231** — 解除 P0 阻断。
2. **Triage #1230** — 打上 `security`、`policy-engine` 标签，指派 Owner 发起设计讨论。
3. **CI 扩容** — 在集成测试矩阵中加入 `Browserless v2` 与 `MCP Restart` 场景，防止回归。

> 报告生成时间：2026-08-23 06:00 UTC | 数据来源：GitHub REST API / GraphQL 实时快照

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-08-23

> **数据来源**: GitHub `agentscope-ai/QwenPaw` 仓库 | 统计周期：2026-08-22 至 2026-08-23 (UTC)

---

## 1. 今日速览
- **整体活跃度：中高** — 过去 24 小时累计 7 个 Issue 更新（6 个新开/活跃，1 个关闭）与 4 个活跃 PR，呈现“用户反馈密集、贡献者修复跟进”的健康互动态势。
- **核心矛盾点聚焦于“体验细节与稳定性”** — 用户高频抱怨推理过程视觉干扰、Shell 编码乱码、会话多余空行、媒体内联崩溃等前端/工具链痛点，而非核心模型能力缺失。
- **社区贡献结构优化** — 4 个开放 PR 均来自首次贡献者，涵盖文档完善、Chrome 远程桥接、定时任务模型覆盖、自定义 Profile 显示，表明项目治理对外部贡献友好。
- **零版本发布** — 当前处于 v2.1.0 后的迭代积累期，积压的高优 Bug 与增强建议预示下一个补丁版本（v2.1.1 或 v2.2.0）内容将较丰富。
- **跨平台兼容性成隐性技术债** — Windows PowerShell UTF-8、Chrome 插件非回环地址、媒体尺寸超限降级等问题暴露出“开发环境多为 Linux/macOS、生产环境多样化”的测试覆盖盲区。

---

## 2. 版本发布
**今日无新版本发布**。最近发行版仍为 `v2.1.0`（Docker 镜像 `xk-qwenpaw:v2.1.0f1`）。

---

## 3. 项目进展
本周期 **无 PR 合并/关闭**，全部 4 个 PR 处于“Open/Under Review”状态。以下为已进入审查流程、预计将推进下一版本的关键变更：

| PR | 类型 | 核心推进内容 | 审查状态 |
|----|------|--------------|----------|
| [#7214](https://github.com/agentscope-ai/QwenPaw/pull/7214) | Docs | 修正 README 安全层级描述，补全“Access Policy”为第五层，消除文档与代码实现的不一致 | Open (first-time) |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | Feat (Chrome) | 支持非回环地址的 Native Messaging 桥接，解决 LAN/跨主机浏览器无法连接问题 | **Under Review** |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | Feat (Console) | Cron Job 新增单任务模型覆盖选择器，解决定时任务“跟随当前 Agent 模型”的不确定性 | Open (first-time) |
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | Fix (Console) | 工作区 Profile 列表不再硬编码内置 6 个文件名，改为展示所有根目录 Markdown，兼容自定义 Persona | Open (first-time) |

> **进展评估**：4 个 PR 均已通过 CI（推测），处于等待 Maintainer Review/合并窗口。若本周内合并，将直接构成 v2.1.1 的主要变更集。

---

## 4. 社区热点
按 **评论数 + 👍 反应 + 讨论时效性** 综合排序：

| 排名 | Issue/PR | 核心诉求 | 热度指标 | 链接 |
|------|----------|----------|----------|------|
| 1 | **#7196** [Enhancement] 推理过程默认折叠/可配置 | 用户在关注工作进程时被冗长思维链干扰，期望类似 Hermes “默认折叠、点击展开、全局/会话级配置” | 2 条评论、1 👍、跨天持续讨论 | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) |
| 2 | **#7216** [Bug] `execute_shell_command` 工具名被间歇性字符替换 (l→\|) 导致 `ToolNotFoundError` | 疑似流式输出/ANSI 转义序列污染 JSON 解析，严重阻断 Shell 工具可用性 | 1 条评论、新开即高优 | [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) |
| 3 | **#7212** [Bug] 图片像素超限直接崩溃而非优雅降级 | 2 MB 内联上限内但分辨率超模型限制时抛 `MODEL_EXECUTION_ERROR` 终止会话，期望自动缩放/拆分/报警不中断 | 1 条评论、Docker 环境复现 | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) |
| 4 | **#7215** [Bug] OpenRouter/OpenCode 后端添加后 GUI 不完整显示 | 模型后端扩展后前端渲染异常，阻碍多模型切换体验 | 1 条评论、附截图 | [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) |
| 5 | **#7043** [Enhancement] Windows 启动自动 `chcp 65001` 切 UTF-8 | 中文 Windows 默认 GBK 导致 Shell 输出乱码，用户 Profile 不加载，需内置编码切换选项 | 1 条评论、持续 8 天、已关闭（可能已由其他 PR 解决或标记重复） | [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) |

> **信号分析**：前 3 条均为 **“阻断性/强感知体验”** 问题，用户容忍度低；#7196 虽为增强但触及核心交互，建议纳入下一版本。

---

## 5. Bug 与稳定性
按 **严重程度（P0 阻断 > P1 严重 > P2 体验）** 分级，标注是否已有对应 Fix PR：

| 严重度 | Issue | 现象 | 影响范围 | 已有 Fix PR? |
|--------|-------|------|----------|--------------|
| **P0** | [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | Shell 工具名字符替换 → `ToolNotFoundError` | 所有使用 Shell 工具的 Agent/用户，间歇性但高频 | ❌ 无 |
| **P0** | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | 大尺寸图片内联直接崩溃结束会话 | 多模态场景、Docker/生产环境 | ❌ 无 |
| **P1** | [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | 新增 OpenRouter/OpenCode 后端 GUI 渲染不全 | 多模型后端用户 | ❌ 无 |
| **P1** | [#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213) | 会话输出大量无意义空行 | 所有对话查看体验 | ❌ 无 |
| **P2** | [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | Windows PowerShell 默认非 UTF-8 导致乱码 | 中文 Windows 用户 | ❌ 无（Issue 已关闭，但未见代码变更） |

> **建议**：P0 级 #7216、#7212 建议立即排期 Hotfix；#7216 涉及工具调用核心链路，建议优先复现并加单测回归。

---

## 6. 功能请求与路线图信号
结合 Issue 诉求与现有 PR 进度，判断下一版本（v2.1.1/v2.2.0）纳入概率：

| 需求 | Issue | 关联 PR | 纳入概率 | 理由 |
|------|-------|---------|----------|------|
| **推理过程默认折叠/可配置** | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | 无 | 🟢 **高** | 高频痛点、实现成本低（前端状态+配置项）、符合 Hermes/同类产品范式 |
| **Cron Job 单任务模型覆盖** | — | [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | 🟢 **高** | PR 已就绪、后端契约已支持、仅需前端审查合并 |
| **Chrome 远程桥接 (LAN/跨主机)** | — | [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | 🟡 **中** | Under Review，涉及安全模型变更，需 Maintainer 仔细评估 |
| **Provider 级媒体上限拆分 (图/视/音)** | [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | 无 | 🟡 **中** | 架构清晰，但需后端配置 Schema 变更 + 前端高级设置 UI，工程量中等 |
| **自定义 Profile Markdown 显示** | — | [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | 🟢 **高** | 纯前端修复，PR 待合并超 2 周，技术债清理优先级高 |
| **Windows 启动自动 UTF-8** | [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | 无 | 🟡 **中** | 需在 Shell 工具启动参数注入 `chcp 65001` 或环境变量，兼容性测试成本可控 |

---

## 7. 用户反馈摘要
从 Issue 评论与描述中提炼的 **真实痛点与场景**：

| 痛点 | 典型场景 | 用户原声/行为证据 | 满意度倾向 |
|------|----------|-------------------|------------|
| **思维链视觉噪音** | 日常编码/写作协作，仅需最终答案 | “一直显示推理过程是严重的视觉干扰……只有调试时才需要” ([#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196)) | 😟 负面 |
| **Shell 工具不可靠** | 自动化运维、文件操作、命令行任务 | “工具名被间歇性替换导致 ToolNotFoundError” 附完整堆栈 ([#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216)) | 😡 强负面 |
| **多模态易崩溃** | 截图/图表分析、设计评审 | “像素超限直接崩溃结束会话，而非降级” Docker 环境复现 ([#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212)) | 😟 负面 |
| **Windows 中文环境乱码** | 企业内网/个人 Windows 开发 | “PowerShell 默认 GBK，Profile 不加载，无环境变量可改输出编码” ([#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043)) | 😟 负面 |
| **会话输出噪音** | 长对话回溯、日志分析 | “说了 N 次不要输出空行，还是很多空行” 附截图 ([#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213)) | 😐 中性偏负 |
| **多后端扩展性** | 团队统一接入 OpenRouter/OpenCode | “添加后 GUI 不全显示” 截图显示列表截断 ([#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215)) | 😐 中性 |

> **整体情绪**：核心功能可用，但 **“最后一公里”体验（前端交互、跨平台工具链、异常兜底）粗糙**，用户期望“开箱即用的专业级稳定性”。

---

## 8. 待处理积压 ⚠️
以下长期未响应/进展缓慢的高价值 Item，建议 Maintainer 本周关注：

| Item | 类型 | 停滞天数 | 关键阻碍 | 建议行动 |
|------|------|----------|----------|----------|
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | PR (Fix) | **16 天** | 无明显技术分歧，单纯等待 Review | **指派 Reviewer / 直接合并**，快速清理技术债 |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | PR (Feat) | **8 天** | 涉及 Native Messaging 安全模型，需核心成员把关 | 安排安全/架构 Review，决定是否合并或要求额外测试 |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | PR (Feat) | **8 天** | 功能完整，后端已支持 | 优先合并，丰富定时任务能力 |
| [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | Issue (Enh) | **2 天** | 设计明确，缺实现 | 评估纳入 v2.2.0 里程碑，招募贡献者或内部排期 |
| [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | Issue (Enh) | **

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-23

---

## 1. 今日速览
- **整体活跃度：极高**。过去 24 小时累计 **100 条** Issue/PR 更新（Issues 50、PRs 50），零版本发布，呈现“密集研发、重构攻坚、稳定性补漏”并行态势。
- **核心主线**：围绕 **运行时会话所有权重构（RFC #9487）**、**安全沙箱规范化（#6996/#7821）**、**Provider/网关架构解耦（#8396/#9645/#9324）**、**zerocode/SOP 可用性提升（#9682/#9694）** 四大架构级议题展开。
- **风险敞口**：Windows CI 长期失守（#7462，19 条评论）、多个 P1 级安全/阻塞类 Bug 仍在修复中（#10164、#9946）、多个 XL 级重构 PR 卡在 `needs-author-action`/`needs-maintainer-review` 状态，审阅吞吐可能成为瓶颈。
- **交付信号**：6 个 PR 合并/关闭，覆盖桌面端安装检测、SOP 状态面板 MVP、配置事务回滚、认证 Webhook 接入、WASM 超时兜底等高价值修复，项目向“生产就绪”迈进一步。

---

## 2. 版本发布
**无新版本发布**。当前主分支处于 v0.9.0 预备期（见 Tracker #7432），积累大量破坏性变更与安全加固，预计需待核心 RFC 落地后再切版本。

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 标题 | 影响面 | 状态 | 关联 Issue | 进展说明 |
|----|------|--------|------|------------|----------|
| [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) | `fix(cli): detect installed AppImage and use a working desktop download URL` | CLI/桌面端分发 | **Closed** | [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) | 修复 `zeroclaw desktop` 误报未安装、下载链接失效，**解除桌面端入口阻塞**。 |
| [#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) | `feat(zerocode): expose the SOP pane as a read-only status view` | zerocode/TUI、SOP | **Closed** | [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) | SOP 面板 MVP **状态只读视图**入主模式栏，完成 #9682 追踪器里程碑。 |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | `fix(config): roll back auto-created map aliases when config set fails` | 配置系统、事务性 | **Closed** | — | 配置写入引入**原子回滚**，消除部分失败留下的脏别名。 |
| [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) | `fix(sop): wire authenticated HTTP fan-in` | SOP、网关、安全 | **Closed** | [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | SOP 控制平面接入**认证 HTTP 扇入**，推进 Daemon-owned SOP 里程碑（5/5）。 |
| [#9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640) | WhatsApp Web 策略文档引用不存在的 V2 键 | 文档、安全 | **Closed** | — | 修正文档误导，避免运维配置失效。 |
| [#9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) | WASM 插件调用无壁钟超时 | 插件运行时、稳定性 | **Closed** | — | 为 `WasmTool::execute` 引入超时边界，**堵住“滴答 HTTP”无界挂起风险**。 |

> **小结**：今日合并集中在**“修补交付链路（桌面端/配置/文档）”**与**“兜底运行时安全（SOP 认证/WASM 超时）”**，为后续大规模重构扫清障碍。

---

## 4. 社区热点：讨论最活跃的 Issues/PRs

| 排名 | Issue/PR | 评论数 | 核心诉求 | 分析 |
|------|----------|--------|----------|------|
| 1 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) **RFC: Runtime-owned conversation sessions and transport surface adapters** | 24 | 确立**运行时拥有会话所有权**、引入 `InboundAction` 统一入口、明确传输适配器边界 | **架构基石级 RFC**，涉及 Channel/Gateway/Runtime 所有权重划，`risk:high`、`needs-maintainer-review`，讨论深度高，决策将决定 v0.9.0 核心数据流。 |
| 2 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) **[Bug]: 74 test failures on Windows** | 19 | Windows CI 缺位导致 74 个测试长期失败（路径语义、控制台编码、Unix-only 命令） | **平台兼容性债务**集中爆发，`priority:p1` 却仅靠 Linux CI，**阻碍 Windows 正式支持**，需投入专项修复或引入 Windows CI Runner。 |
| 3 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue for RFCs** | 13 | 建立维护者对 RFC/设计文件的**决策队列**，避免长期悬而未决 | **治理工单**，反映当前 RFC 积压严重（见 #9487、#6996、#8396、#10050 等），急需显式优先级与 SLA。 |
| 4 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) **RFC: Granular sandbox policy** | 11 | 统一应用层路径准入与 OS 沙箱后端，引入 `SandboxPolicyConfig` | 与 PR [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) 配套，**安全模型核心重构**，已 `in-progress` 但需作者进一步行动。 |
| 5 | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) **RFC: Make wire protocol first-class in provider construction** | 9 | 将线协议作为 Provider 构建/接入的一等公民，支撑 A2A/多模态/路由 | **Provider 生态扩展前置条件**，`needs-maintainer-review`，配合 #9645 (ZeroRouter) 与 #9324 (A2A) 推进。 |

> **趋势**：高热度均集中在**架构决策（RFC）与跨平台质量**上，而非单一功能缺陷，说明项目处于**“定范式、还债、

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*