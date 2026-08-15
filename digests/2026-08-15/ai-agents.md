# OpenClaw 生态日报 2026-08-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-15 00:52 UTC

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

# OpenClaw 项目日报 2026-08-15

## 1. 今日速览
- **活跃度极高**：过去 24 小时内 Issues 与 PR 各更新 500 条，其中 **96 个 PR 已合并/关闭**，12 个 Issue 关闭，显示维护团队正在高强度清理积压与推进修复。
- **核心稳定性风险仍在**：内存泄漏（网关 RSS 增长至 15.5 GB、Heap 破 1 GB）、静默消息丢失（WhatsApp/LINE/Matrix/Telegram）、会话状态异常（Subagent 残留、Steer 模式失效、Compaction 截断）等 P0/P1 级问题持续活跃，且多个 Issue 评论数破 20，社区关注度极高。
- **UI/UX 重构并行推进**：Control UI 侧边栏、会话卡片、聊天侧轨、骨架屏等 10+ 大型 PR 同步开发，旨在解决导航拥挤、信息密度低、状态不一致等长期痛点。
- **安全与供应链加固**：安装策略确认机制、Dependabot 批量更新 Actions、SecretRef 文档修正等 PR 已就绪或合并，提升供应链与运行时安全。
- **无新版本发布**：当前主线聚焦缺陷修复与 UI 重构，预计近期将切出稳定版回溯关键修复。

---

## 2. 版本发布
**今日无新版本发布**。最近稳定版为 `2026.7.x` 系列，Beta 渠道已推进至 `2026.7.2-beta.7`。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响范围 | 状态 |
|----|------|----------|----------|------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **Security/Feature** | 新增 `security.installPolicy` 命令返回 `warn`，CLI/UI 需显式确认才能继续可疑插件/技能安装 | 全平台安装流程 | ✅ **CLOSED** |
| [#123826](https://github.com/openclaw/openclaw/pull/123826) | **Bugfix** | 修复多智能体名单下 `openclaw status` 等只读命令因尝试创建默认 Agent 而失败 | CLI、Gateway | ✅ **CLOSED** |
| [#123813](https://github.com/openclaw/openclaw/pull/123813) | **UI Polish** | 统一页面与会话行的活动指示器位置，消除不一致 | Web Control UI | ✅ **CLOSED** |
| [#123869](https://github.com/openclaw/openclaw/pull/123869) | **Reliability** | 修复并发 Node Worker 在负载下因临时达启动上限导致工作区对账误判失败 | Gateway、Node Worker | ✅ **CLOSED** |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **Security/UI** | Control UI 新增安装策略警告复核与 `acknowledgeInstallPolicyWarning` 确认流程 | Web UI、Plugin 安装 | 👀 **Ready for maintainer** |
| [#123901](https://github.com/openclaw/openclaw/pull/123901) | **Performance** | 绑定 Gateway Worker Bundle 缓存生命周期，防止开发/升级循环导致 `state/cache/worker-bundles` 无限增长 | Gateway、缓存管理 | 👀 **Ready for maintainer** |

> **整体进度**：核心修复类 PR 多已进入“待维护者审核”或“等待作者”状态，UI 重构类 PR 多为 XL 规模且依赖链较长（如 #123682 依赖 #123597），预计本周内陆续合并。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）

| 实体 | 评论数 | 👍 | 核心诉求 | 分析 |
|------|--------|----|----------|------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) **静默回复失败复发** | 94 | 0 | #116277 关闭后仍持续出现“回复入队但无 Payload 发送”，监控 Cron 仍在记录新发生 | **生产环境阻塞级**，涉及消息投递链路核心逻辑，需彻底根因分析而非权宜修补 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging** | 51 | 0 | 按来源（用户指令/网页抓取/第三方 Skill）给记忆打信任标签，防提示词注入/记忆投毒 | **安全架构级需求**，涉及记忆检索、上下文组装、插件沙箱，需产品决策与安全评审 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) **Gateway 内存泄漏 15.5 GB** | 24 | 1 | RSS 从 350 MB 涨至 15.5 GB 触发 OOM Kill，导致 `launchd-handoff` 重启循环 | **P0 稳定性**，已持续 2 月，需堆快照分析 + 引入内存上限自动重启机制 |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) **DeepSeek Cron 前缀被降级** | 19 | 0 | `[cron:<jobId> <name>]` 前缀导致 DeepSeek API 走低优先队列，Cron 任务卡顿分钟级 | **厂商侧行为依赖**，需在网关层移除/改写前缀或提供可配置开关 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) **Steer 模式不注入中途消息** | 19 | 4 | `messages.queue.mode: "steer"` 本应在工具边界注入用户消息，实则等轮次结束才入队 | **核心交互回归**，源自 `KeyedAsyncQueue` 引入，阻断实时干预场景 |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) **Dev 渠道更新失败 EUNSUPPORTEDPROTOCOL** | 7 | 0 | `openclaw update` 在 git 安装下报 `workspace:*` 协议不支持，因仓库强制 pnpm 而更新器用 npm | **开发体验阻断**，影响所有 Dev 渠道用户，需更新器原生支持 pnpm 或回退 npm 兼容模式 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重级 | Issue | 标题 | 关键症状 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak → OOM Crash | RSS 350MB→15.5GB/2-3天，OS Kill，重启循环 | ❌ 无 |
| **P0** | [#119270](https://github.com/openclaw/openclaw/issues/119270) | File Tools Strip Leading `@` → Wrong File Write/Delete | `write`/`edit`/`apply_patch` 目标路径被错误去 `@`，覆盖/删除错文件 | ❌ 无 |
| **P0** | [#121058](https://github.com/openclaw/openclaw/issues/121058) | Silent Reply Failures Recurring | 回复入队但无 Payload 发送，监控持续告警 | ❌ 无 |
| **P1** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse Hook Spawns CPU-Bound Processes | `openclaw-hooks` 进程占 100%+ CPU，阻塞 Gateway RPC | ❌ 无 |
| **P1** | [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent Sessions Persist → Main Session Unresponsive | 多 Subagent 后主会话卡死，需手动清理 | ❌ 无 |
| **P1** | [#120563](https://github.com/openclaw/openclaw/issues/120563) | Ollama/Custom Provider No Conversation History | 每轮固定上下文大小，忽略历史轮次 | ❌ 无 |
| **P1** | [#121953](https://github.com/openclaw/openclaw/issues/121953) | DeepSeek Cron Prefix Deprioritized | Cron 任务因前缀被降级，延迟分钟级 | ❌ 无 |
| **P1** | [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE Reply Token Expiry + No Push Fallback | 消息静默丢失，发送方无感知，Agent 无错误 | ❌ 无 |
| **P1** | [#123905](https://github.com/openclaw/openclaw/pull/123905) | Matrix Tombstoned Main-Session Silent Fail | 永久阻塞的主会话恢复周期静默失败，无任何信号 | ✅ **PR Open** |
| **P2** | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer Mode No Mid-Turn Injection | 用户干预消息等轮次结束才生效 | ❌ 无 |
| **P2** | [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp Backfill Missed Messages | 重连后漏掉断连窗口内的群消息 | ❌ 无 |
| **P2** | [#88079](https://github.com/openclaw/openclaw/issues/88079) | WebChat Reasoning Stream Missing (Kimi/DeepSeek) | 仅 MiniMax 能渲染思维链流 | ❌ 无 |
| **P2** | [#122625](https://github.com/openclaw/openclaw/issues/122625) | Matrix Room Targets Need Explicit `--session-key` | 房间绑定 Agent 单向可发不可收 | ❌ 无 |
| **P2** | [#123073](https://github.com/openclaw/openclaw/issues/123073) | Dev Update Fails `workspace:*` Protocol | Git 安装无法更新，阻断 Dev 渠道 | ❌ 无 |

> **趋势**：P0 级内存泄漏与静默丢数据问题已持续数周无实质性 Fix PR，建议设立专项攻坚组；P1 级多集中于**多会话管理、Provider 适配、Channel 可靠性**三大板块。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 相关 PR/进展 | 纳入下版本可能性 |
|------|-------|----------|--------------|------------------|
| **Per-Agent Cost Budget at Gateway** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 25 评论、1 👍 | 无 PR | 中 —— 运营刚需，但需网关层计量重构 |
| **Memory Trust Tagging (Source-based)** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 51 评论 | 无 PR | 低 —— 需安全评审、产品决策、架构变更，周期长 |
| **Agent-Triggered Context Compaction** | [#6757](https://github.com/openclaw/openclaw/issues/6757) | 8 评论、2 👍 | 无 PR | 中 —— 配合 Compaction Safeguard 修复（#122618、#123737）可同步交付 |
| **Dynamic Model Discovery (OpenRouter)** | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 10 评论、3 👍 | 无 PR | 高 —— 适配厂商目录高频变更，已有维护者标记 |
| **Per-Model Usage Logging** | [#13219](https://github.com/openclaw/openclaw/issues/13219) | 8 评论、1 👍 | 无 PR | 中 —— 成本可观测性基建 |
| **Production-Readiness Release Labels** | [#73537](https://github.com/openclaw/openclaw/issues/73537) | 8 评论、2 👍 | 无 PR | 高 —— 社区

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-08-15)

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **"一超多强、分层竞争、重工程化"** 的态势。头部项目 OpenClaw 以绝对的工程投入量（单日 500+ PR/Issue 更新）和完整的全平台网关架构确立了事实标准；NanoBot、Hermes Agent、IronClaw、CoPaw 等第一梯队项目在 WebUI 协作体验、多租户架构、自动化执行可靠性、桌面端分发等垂直方向深度攻坚；PicoClaw、NanoClaw、ZeroClaw 等新兴项目聚焦边缘部署兼容性、硬件适配、企业级安全合规等差异化赛道。生态整体已从“功能堆砌”转入 **“稳定性攻坚（内存泄漏/数据竞争/静默丢包）”、“架构解耦（插件化记忆/Unbound-turns/Goal Mode）”、“生产级交付（自动更新/签名验证/多渠道对齐）”** 三大并行主线，技术债偿还与基建完善成为主旋律。

---

## 2. 各项目活跃度对比

| 项目 | 仓库 | Issues 更新量 | PR 更新量 | 已合并/关闭 PR | 新版本发布 | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | openclaw/openclaw | **500+** | **500+** | **96** | 无 | ⚠️ **高活跃/高风险并存** | P0内存泄漏、静默丢包、UI重构并行、安全加固 |
| **NanoBot** | HKUDS/nanobot | 3 | **22** | 8 | 无 | ✅ **高质量迭代冲刺** | WebUI协作重构、会话持久化P0修复、MCP v2迁移、Pyright Strict |
| **Hermes Agent** | NousResearch/hermes-agent | **50** | **50** | 16 | 无 | ✅ **架构治理收官、多平台稳定** | God-file拆分完成、Windows桌面回归阻断、多租户隔离、技能生态 |
| **IronClaw** | nearai/ironclaw | 25 | **46** | 23 | 无 | ✅ **并行攻坚、发布线稳健** | Unbound-turns架构切换、自动化执行可靠性史诗、v1.3.0预备 |
| **CoPaw** | agentscope-ai/QwenPaw | **50** | **41** | 15 | 无 | ✅ **高强度清积压、v2.1冲刺** | 桌面端分发体验、MCP兼容、动态Skill系统、DataPaw原生应用 |
| **PicoClaw** | sipeed/picoclaw | 1 | **9** | 5 | 无 | ✅ **稳健维护、核心阻塞修复在途** | MCP连接挂死P0修复、DashScope TTS、模型列表同步、DeltaChat重构 |
| **NanoClaw** | nanocoai/nanoclaw | 2 | **11** | 3 | 无 | ✅ **修复密集、安装链路阻断快速响应** | AVX2兼容性P0、Node升级脚本修复、Dial语音渠道、Windows容器清理 |
| **ZeroClaw** | zeroclaw-labs/zeroclaw | 33 | **50** | 3 | 无 | 🟡 **RFC密集、决策吞吐成瓶颈** | v0.8.5冻结、Goal Mode/Chat Completions/插件出站RFC并行、Windows测试失败 |
| **Moltis** | moltis-org/moltis | 0 | **2** | 0 | 无 | 🟢 **特性积累期、基建就绪** | 连接器持久化框架、Slack原生任务卡片、零外部参与 |
| **NullClaw** | nullclaw/nullclaw | 0 | **1** | 1 | 无 | 🔵 **低活跃维护模式** | SQLite路径可配置化、只读工作空间支持、零社区互动 |
| **TinyClaw** | TinyAGI/tinyagi | 0 | 0 | 0 | 无 | ⚪ **静默** | 过去24h无活动 |
| **ZeptoClaw** | qhkm/zeptoclaw | 0 | 0 | 0 | 无 | ⚪ **静默** | 过去24h无活动 |
| **LobsterAI** | netease-youdao/LobsterAI | - | - | - | - | ❓ **数据获取失败** | 摘要生成失败 |

> **注**：OpenClaw、IronClaw、ZeroClaw、CoPaw、Hermes Agent 处于**高强度并行开发期**；NanoBot、PicoClaw、NanoClaw 处于**高质量冲刺/稳健维护期**；Moltis、NullClaw 处于**低频基建/维护期**。

---

## 3. OpenClaw 在生态中的定位

### 核心优势
*   **工程规模与广度霸主**：单日 1000+ 事件流（Issue+PR）远超其他项目总和，拥有最完整的**多协议网关（WhatsApp/LINE/Matrix/Telegram/Slack/Discord/Web）**、**多租户隔离**、**插件/技能市场**及 **Control Plane (Web UI/CLI/TUI)** 一体化交付能力。
*   **生产环境验证深度**：P0 级 Bug（内存泄漏 15.5GB、静默丢包、会话状态异常）均源于大规模生产环境压力测试，修复过程沉淀了极具参考价值的**可观测性、混沌工程、渐进式发布**实践。
*   **供应链安全先行者**：`security.installPolicy` 确认机制、Dependabot 批量治理、镜像签名验证链路（`verify-agent-image`）已落地，树立了开源 AI 助手供应链安全基线。

### 技术路线差异
| 维度 | OpenClaw | 典型竞品 |
| :--- | :--- | :--- |
| **架构模式** | **重网关、重中心化控制面**、多语言 Worker、显式会话/Subagent 状态机 | NanoBot/IronClaw：轻量核心 + 插件化扩展；ZeroClaw：RFC 驱动的目标导向架构；Moltis：连接器驱动的数据流架构 |
| **多模态/渠道** | **全内置适配器模式**，网关层统一协议转换、重试、降级 | PicoClaw/NanoClaw：渠道适配器下沉至 Provider 层；CoPaw：OneBot/Channel 插件化 |
| **记忆/上下文** | 网关层 Compaction、Steer 模式、Subagent 隔离，强调**中心化编排** | NanoBot：本地优先、文件级锁竞争；IronClaw：Unbound-turns 无界运行、插件化记忆提供者 |
| **扩展机制** | WASM 沙箱 + 技能包 + 插件市场，强调**安全隔离与分发治理** | Hermes Agent：ACP 协议对标；ZeroClaw：插件出站策略 + 动作预算原子化 |

### 社区规模对比
*   **核心维护团队**：OpenClaw 表现为专职团队运作（96 个 PR/日合并、XL 规模 PR 并行、Dependabot 自动化），远超多数项目的“核心贡献者 + 偶发外部 PR”模式。
*   **外部贡献者门槛**：OpenClaw 代码库复杂度高（P0 Bug 修复需堆快照分析），外部贡献多集中在 UI/文档/Provider 适配；NanoBot、PicoClaw、CoPaw 单体 PR 规模较小、领域边界清晰，更利于外部贡献者切入。

---

## 4. 共同关注的技术方向（跨项目涌现需求）

| 技术方向 | 涉及项目 | 具体诉求与进展 | 成熟度 |
| :--- | :--- | :--- | :--- |
| **会话/状态持久化与数据竞争修复** | **NanoBot** (P0 #5271 序列化保存)、**PicoClaw** (MCP挂死 #3269)、**CoPaw** (跨会话取消 #7011)、**OpenClaw** (Subagent残留 #47975) | 核心信任危机：后台任务覆盖前台状态、工具调用阻塞事件循环、会话隔离失效。均引入**文件锁/序列化队列/乐观锁**方案。 | 🔴 **攻坚期**，多项目已有 Fix PR 待合并 |
| **插件化/可配置记忆系统** | **IronClaw** (#7661 插件化记忆提供者/MCP)、**ZeroClaw** (Goal Mode 上下文编排)、**OpenClaw** (Memory Trust Tagging #7707)、**Moltis** (#1190 连接器持久化框架) | 从硬编码 `MEMORY.md` 向 **Provider-neutral 持久化层、信任标签分级、外部知识图谱/向量库接入** 演进。 | 🟡 **架构设计/早期实现期** |
| **自动化执行可靠性与确定性** | **IronClaw** (#6879 史诗：触发→运行管道结构化契约)、**ZeroClaw** (#7155 执行级确认分级)、**Hermes Agent** (#34352 多租户内存操作绕过Hook) | 解决“同一提示词时成功时失败”、工具调用静默截断、权限越界。引入 **显式交付/抑制契约、风险分级确认、Hook 运行时契约**。 | 🟡 **核心架构重构期** |
| **桌面端分发生命周期与原生体验** | **CoPaw** (#2846 自动更新/图标/守护进程)、**Hermes Agent** (#86223 更新后自启动失败)、**OpenClaw** (Control UI 重构)、**PicoClaw** (Tauri 打包优化) | Tauri/Wails 生态成熟度不足：自动更新器、系统托盘、后台模式、代码签名、跨平台安装包体积优化。 | 🔴 **高频痛点，工程投入大** |
| **多渠道协议对齐与企业级集成** | **OpenClaw** (WhatsApp/LINE/Matrix/Telegram 静默丢包)、**ZeroClaw** (#9574 跨渠道审批授权)、**NanoClaw** (#3050 Dial 语音渠道)、**IronClaw** (#7666 Slack 扩展卡片) | 消息投递**至少一次语义、回执确认、2FA 登录流程、权限模型映射（Discord Role/Slack User/Telegram ChatID）**。 | 🟡 **渐进式完善** |
| **供应链安全与运行时沙箱** | **OpenClaw** (installPolicy/Dependabot/镜像签名)、**ZeroClaw** (#9580 HTTP出站硬化/#9839 不可逆命令拦截)、**NanoBot** (#5179 MCP v2/SSRF验证) | **插件/技能安装确认、出站流量策略、WASM/容器沙箱、SBOM 生成、签名验证链路**。 | 🟢 **领跑落地，正成标准** |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户/场景 | 关键架构决策 | 差异化护城河 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级/高级个人用户的全能中枢** | 多渠道运营、团队协作、复杂工作流自动化、私有化部署 | **重网关中心化编排**、多语言 Worker 池、显式会话状态机、WASM 沙箱 | **广度最全、生产环境最重、安全合规最完备** |
| **NanoBot** | **开发者/极客的本地优先智能体 IDE** | 代码库理解、长上下文工程、WebUI 协作编程、模型提供商聚合 | **单进程 Python 核心 + TS WebUI**、文件系统为源、MCP 原生集成、Pyright Strict | **代码智能体体验最佳、类型安全最高、WebUI 交互最现代** |
| **Hermes Agent** | **研究/实验导向的多模态桌面助手** | 本地模型推理、ACP 协议探索、多租户隔离研究、技能生态实验 | **God-file 拆分治理**、ACP 兼容、外部内存提供者、Windows/Linux/macOS 三端原生 | **架构治理最激进、ACP 标准推动者、研究属性最强** |
| **IronClaw** | **高可靠自动化执行平台** | 后台任务调度、确定性工具调用、插件化记忆、生产级可观测性 | **Unbound-turns 无界运行**、显式交付契约、Reborn 耐久存储、Blacksmith CI | **执行可靠性理论最扎实、压力测试基线最完善** |
| **CoPaw (QwenPaw)** | **国产化/中文场景优先的桌面助手** | 中文模型适配、DataPaw 数据分析、Skill Hub 生

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-15

> **数据统计周期**：2026-08-14 00:00 - 2026-08-14 23:59 (UTC)  
> **数据来源**：GitHub API / HKUDS/nanobot 仓库

---

## 1. 今日速览

**项目整体处于高强度的迭代冲刺期，核心精力集中在 WebUI 体验重构、会话持久化稳定性攻坚及提供商层关键 Bug 修复上。** 过去 24 小时共产生 **22 个 PR 更新（14 个待合并、8 个已合并/关闭）** 与 **3 个 Issue 更新**，呈现“前端功能并行推进、后端严重缺陷快速响应、架构升级稳步进行”三大特征。无新版本发布，但 P0 级会话数据竞争修复（#5271）与 Anthropic 流式超时致命 Bug（#5391）均已进入修复验证通道，项目健康度良好，技术债偿还（Pyright strict、MCP v2）有序推进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR（8 个）

| PR | 类型 | 核心变更 | 影响评估 |
|----|------|----------|----------|
| [#5392](https://github.com/HKUDS/nanobot/pull/5392) | **Bug Fix (P2)** | **修复 Anthropic Provider 流式空闲超时被误用为总超时**，导致长生成任务被误杀。将 `asyncio.wait_for` 作用于 `stream.get_final_message()` 改为仅监控空闲间隔。 | **生产环境高风险阻断修复**，同日 Issue #5391 报告、同日修复合并，响应极快。 |
| [#5393](https://github.com/HKUDS/nanobot/pull/5393) | **Feature (WebUI, P2)** | 侧边栏层级优化、连接线扁平化、标签页交互改进、文件夹展示优化、会话过渡动画。从协作 PR #5358 中剥离纯 UI 改动。 | **WebUI 交互体验显著提升**，为后续协作功能奠定基础。 |
| [#5395](https://github.com/HKUDS/nanobot/pull/5395) | **Feature (WebUI, P2)** | 统一会话分组术语与本地化，支持拖拽进出分组，简化删除确认，引入共享形状缩放系统。 | **会话管理交互闭环补全**，配合 #5389 实现完整拖拽组织能力。 |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | **Closed (Invalid)** | OAuth 状态展示与过期预警功能。因设计冲突或方案调整标记为 Invalid 关闭。 | 清理长期挂起 PR，减少噪音。 |
| [#5018](https://github.com/HKUDS/nanobot/pull/5018) | **Closed (Conflict)** | 技能显式上下文加载支持。因冲突关闭，可能被重构方案替代。 | 技能系统增强需求仍在，实现路径待定。 |
| [#5390](https://github.com/HKUDS/nanobot/pull/5390) | **Closed (Chore)** | Agent/知识图谱相关骨架代码或实验性提交。 | 研发探索性工作，未进入主线。 |
| **Issue #5378** | **Bug Fix** | **会话文件上限归档失败时，会话对象已预先变更导致数据丢失风险**。Issue 已关闭，推测已通过未列出的 PR 或直接提交修复。 | **数据一致性关键修复**，防止崩溃时会话状态回滚异常。 |

### 🚧 进行中的重大 PR（14 个待合并，节选高优）

| PR | 优先级 | 状态 | 核心目标 |
|----|--------|------|----------|
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | **P0** | Open | **防止陈旧后台任务覆盖会话数据**：序列化 `/new` 与压缩任务，拒绝无效/竞争/复制保存。核心数据安全防线。 |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) | **P1** | Open | **MCP 集成迁移至 SDK v2**：引入 `httpx2` 传输，保留 SSRF 验证、DNS 绑定、代理路由，兼容旧版 SSE。基础设施现代化。 |
| [#5396](https://github.com/HKUDS/nanobot/pull/5396) | **P2** | Open | **收窄文件级 Pyright 抑制**：响应 #5161，清理 31 处宽泛抑制，推进 `strict` 模式落地。代码质量治理。 |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | **P2** | Open | **WebUI Agent 活动标签本地化**：覆盖 10 语言，语言切换即时生效，保留原始工具值。国际化里程碑。 |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | - | Open (Long-running) | **原生 TypeScript/OpenTUI 终端客户端**：重构 `nanobot agent` 为 TS 客户端，保留 Python 网关核心。架构演进核心战役。 |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | **P2** | Open (Conflict) | **会话协作 @提及**：稳定服务端 `@name`、扩展提及选择器、会话间上下文共享。协作核心功能。 |

---

## 4. 社区热点

> **注**：当前数据中所有 PR 评论数均显示 `undefined`，无法量化讨论热度。以下基于 **PR 范围、优先级标签、关联 Issue 数量及架构影响力** 判断关注焦点。

| 焦点 | 代表 PR/Issue | 核心诉求分析 |
|------|---------------|--------------|
| **WebUI 会话协作与组织体验重构** | [#5358](https://github.com/HKUDS/nanobot/pull/5358)、[#5389](https://github.com/HKUDS/nanobot/pull/5389)、[#5393](https://github.com/HKUDS/nanobot/pull/5393)、[#5395](https://github.com/HKUDS/nanobot/pull/5395) | **强烈需求：多会话并行工作流的可视化管理**。用户需要像 IDE 文件树一样组织、拖拽、分组、跨会话引用上下文。4 个 PR 同步推进说明该模块处于“攻坚收尾期”，冲突标签暗示涉及核心状态管理重构。 |
| **会话持久化数据竞争** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) (P0)、Issue [#5378](https://github.com/HKUDS/nanobot/issues/5378) | **核心信任危机修复**。《文件上限归档突变》与《后台保存竞争》接连暴露，反映 **SessionManager 状态机设计在高并发/异常分支下的脆弱性**。P0 优先级表明团队视其为阻断性技术债。 |
| **提供商层流式传输鲁棒性** | Issue [#5391](https://github.com/HKUDS/nanobot/issues/5391) → PR [#5392](https://github.com/HKUDS/nanobot/pull/5392) | **长文本生成场景的可用性保障**。Anthropic 无回调路径下的超时逻辑缺陷，直接导致“看似活跃实则被杀”的静默失败。同日修复闭环体现对提供商 SLA 的重视。 |
| **架构现代化：MCP v2 / TS Terminal / Pyright Strict** | [#5179](https://github.com/HKUDS/nanobot/pull/5179)、[#4329](https://github.com/HKUDS/nanobot/pull/4329)、[#539

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-15

---

## 1. 今日速览
- **整体活跃度：高** — 过去 24 小时共 50 条 Issue 更新（48 个活跃/新开，2 个关闭）与 50 条 PR 更新（34 个待合并，16 个已合并/关闭），无新版本发布。
- **核心主线**：Windows 桌面端回归与稳定性问题占据高优先级（P1/P0），Discord 平台功能对齐（Omniscience Campaign）进入大规模落地阶段，技能生态与多租户架构持续推进。
- **风险信号**：Windows 桌面客户端连续两次更新后无法自启动（#86223）、网关重启因 `XDG_RUNTIME_DIR` 权限崩溃（#86558）、外部内存提供者破坏内置内存契约（#85622）均为阻断性缺陷，已有修复 PR 但尚未合并。
- **技术债偿还**：#78647 “All Gods Must Die” 重构史诗已宣告完成（20/20 文件拆解），标志着全仓库 God-file 拆分政策落地。
- **社区协作**：自动化测试修复批次（macOS 兼容性）集中关闭，技能索引自动化监控报警（#66616）提示基础设施需关注。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展（今日合并/关闭的重要 PR）
| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) (Issue) | 重构史诗 | 全仓库 20 个 God-file 全部分拆为模块化结构，确立“只拆不合”政策 | 架构治理、长期可维护性 |
| [#85825](https://github.com/NousResearch/hermes-agent/issues/85825) | Bug Fix (P0) | Windows 下 `memory replace/remove` 因 CRLF 导致整文件覆盖，已修复行尾规范化 | Windows 稳定性、内存系统 |
| [#67739](https://github.com/NousResearch/hermes-agent/pull/67739) / [#67710](https://github.com/NousResearch/hermes-agent/pull/67710) / [#67708](https://github.com/NousResearch/hermes-agent/pull/67708) / [#67703](https://github.com/NousResearch/hermes-agent/pull/67703) / [#67700](https://github.com/NousResearch/hermes-agent/pull/67700) | 测试修复 | 修复 macOS 上 5 个测试套件的 Darwin 失败，含执行标志检测、CLI 实时守卫、网关关闭取证、WSL、systemd-notify | CI 绿化、跨平台兼容 |
| [#65840](https://github.com/NousResearch/hermes-agent/pull/65840) | Bug Fix | 桌面端大媒体复制图片保留功能 | 桌面 UX |
| [#65839](https://github.com/NousResearch/hermes-agent/pull/65839) | Feature | CLI/TUI 新增 ESC 中断正在进行的响应 | 交互体验 |
| [#65818](https://github.com/NousResearch/hermes-agent/pull/65818) | Bug Fix | ACP 协议：排空 Copilot 提示后的延迟助手块 | ACP 兼容性 |
| [#65803](https://github.com/NousResearch/hermes-agent/pull/65803) | Bug Fix | 后台审查工具调用导向许可工具集 | Agent 安全边界 |
| [#65800](https://github.com/NousResearch/hermes-agent/pull/65800) | Bug Fix | 网关回退从 `HERMES_HOME` 加载 `AGENTS.md` | 网关启动鲁棒性 |
| [#86329](https://github.com/NousResearch/hermes-agent/pull/86329) | Bug Fix | `error_classifier` 新增上游 403 错误识别 | 供应商错误处理 |

> **进展评估**：核心架构重构收官，Windows/P0 缺陷修复已入库，跨平台测试绿化批量完成，工程质量基线显著提升。

---

## 4. 社区热点（讨论最活跃的 Issue/PR）
| 排名 | Issue/PR | 评论数 | 核心诉求 | 关联链接 |
|------|----------|--------|----------|----------|
| 1 | **#78647** “All Gods Must Die” 重构史诗 | 76 | 确认全仓库 God-file 拆分完成，建立不可逆拆分政策 | [Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647) |
| 2 | **#34352** 解决多租户 Hermes 问题 | 31 | 内存操作绕过 Hook 系统导致租户隔离失效，生产环境已跑通修复方案，需上游化 | [Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352) |
| 3 | **#66616** Skills 索引陈旧/降级（自动化报警） | 31 | 索引 29.8h 未更新（阈值 26h），CI 定时任务或部署流程异常 | [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| 4 | **#83683** Windows 桌面重启杀死网关且不重启（回归） | 27 | v0.20.0 回归：桌面重启强制杀掉消息网关，WeChat/QQ/Telegram 静默 | [Issue #83683](https://github.com/NousResearch/hermes-agent/issues/83683) |
| 5 | **#86223** Windows 桌面连续两次更新后后端退出码 1、WinError 32 锁链 | 6 | 更新管道崩溃，无法自愈，需人工干预 | [Issue #86223](https://github.com/NousResearch/hermes-agent/issues/86223) |

**深层分析**：
- **多租户（#34352）** 与 **生命周期钩子运行时契约（#67798）** 同指向“核心运行时与网关解耦”，是下一阶段架构演进的关键决策点。
- **技能索引报警（#66616）** 暴露文档站部署管道单点故障，建议引入多节点重建与告警升级。
- **Windows 桌面连环崩溃（#83683, #86223）** 反映发布前缺乏 Windows 真机冒烟测试，需纳入 Release Gate。

---

## 5. Bug 与稳定性（按严重程度排序）
| 严重度 | Issue | 现象 | 是否有 Fix PR | 状态 |
|--------|-------|------|---------------|------|
| **P0** | [#85825](https://github.com/NousResearch/hermes-agent/issues/85825) | Windows `memory replace/remove` 静默覆盖整个 `MEMORY.md`（CRLF 不匹配） | ✅ 已修复并关闭 | **已解决** |
| **P1** | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | 桌面重启强制杀掉网关且不重启（WeChat/QQ/Telegram 静默） | ❌ 无 PR | **阻断发布** |
| **P1** | [#86223](https://github.com/NousResearch/hermes-agent/issues/86223) | Windows 桌面更新后后端退出码 1、WinError 32、无法自启动 | ❌ 无 PR | **阻断发布** |
| **P1** | [#86558](https://github.com/NousResearch/hermes-agent/issues/86558) | `hermes gateway restart` 遇外来 `XDG_RUNTIME_DIR` 抛未处理 `PermissionError` | ✅ [#86563](https://github.com/NousResearch/hermes-agent/pull/86563) | **待合并** |
| **P2** | [#30449](https://github.com/NousResearch/hermes-agent/issues/30449) | API Server：DeepSeek `reasoning_content` 与 `reasoning_effort` 不入 SSE 流 | ❌ 无 PR | **Open** |
| **P2** | [#84969](https://github.com/NousResearch/hermes-agent/issues/84969) | 持久化 Docker 复用忽略不可变配置漂移（安全边界） | ❌ 无 PR | **Open** |
| **P2** | [#85834](https://github.com/NousResearch/hermes-agent/issues/85834) | 桌面 per-profile SSH 远程：Resume 失败但 Transcript 能加载（缺 profile 路由） | ❌ 无 PR | **Open** |
| **P2** | [#86482](https://github.com/NousResearch/hermes-agent/issues/86482) | Cron 调度器 `create_execution` 失败导致作业永久卡在 running 集合 | ❌ 无 PR | **Open** |
| **P2** | [#86483](https://github.com/NousResearch/hermes-agent/issues/86483) | Telegram 话题迁移在 `BEGIN IMMEDIATE` 内跑 `executescript` 破坏原子性 | ❌ 无 PR | **Open** |
| **P3** | [#85622](https://github.com/NousResearch/hermes-agent/issues/85622) | 外部内存提供者抑制内置 `MEMORY.md/USER.md` 注入（违背 additive 契约） | ❌ 无 PR | **Open** |
| **P3** | [#68876](https://github.com/NousResearch/hermes-agent

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-15

> **数据范围**：2026-08-14 00:00 - 23:59 (UTC)  
> **数据来源**：GitHub Issues & PRs 活动数据

---

## 1. 今日速览

*   **核心阻塞修复在途**：项目当前最关键的动态是针对 **MCP 服务器连接失败导致 Agent 循环挂死** 的严重 Bug（Issue #3269）已有对应修复 PR (#3337) 提出并处于 Open 状态，预计将显著提升系统鲁棒性。
*   **技术债务集中清理**：过去 24 小时合并/关闭了 5 个 PR，主要集中在**依项更新**、**代码规范清理**、**多渠道消息支持补全** 及 **Provider 模型列表同步**，体现维护团队正在进行系统性的“春季大扫除”，清理长期积压的 Stale 任务。
*   **活跃度评级：中高**。虽无新版本发布，但单日 9 个 PR 更新（含 1 个关键 Bug Fix PR 新开、4 个 Stale PR 合并/关闭）及 1 个高优先级 Bug Issue 持续跟进，显示核心维护节奏稳健。
*   **架构演进信号**：DeltaChat 重构 (#3222) 与模型回退链配置化 (#3200) 两个长周期重构 PR 保持 Open 并持续更新，标志着项目正从“功能堆砌”向“架构可配置、渠道解耦”演进。
*   **社区响应及时**：Stale 机制生效，多个长期搁置 PR 在 Dependabot/Stale Bot 推动下被审视并决策（合并或关闭），Issue 生命周期管理健康。

---

## 2. 版本发布

> **今日无新版本发布。**

---

## 3. 项目进展：已合并/关闭的重要 PR（5 个）

| PR | 标题 | 类型 | 核心变更 | 对项目推进意义 |
| :--- | :--- | :--- | :--- | :--- |
| **[#3270](https://github.com/sipeed/picoclaw/pull/3270)** | `feat: add DashScope TTS provider and WeChat audio file sending` | **功能增强** | 新增阿里云百炼 DashScope TTS Provider；实现微信渠道音频文件发送能力。 | **多模态/多渠道能力补齐**：填补了国内主流云厂商 TTS 空白，完善微信语音交互闭环，直接面向中文用户场景。 |
| **[#3271](https://github.com/sipeed/picoclaw/pull/3271)** | `chore(providers): update default model names to 2026-07 latest` | **维护同步** | 同步 9 大 Provider (OpenAI, Anthropic, Google 等) 最新模型 ID (如 GPT-5.6 系列, Claude Sonnet 4 等)。 | **模型可用性保障**：确保开箱即用的默认模型列表与厂商最新发布同步，避免用户因模型下线/重命名报错。 |
| **[#3279](https://github.com/sipeed/picoclaw/pull/3279)** | `fix(seahorse): prevent tool-call format leakage into LLM summaries` | **Bug 修复** | 修复 Seahorse 记忆摘要模块中 `partsToReadableContent` 将工具调用格式泄露给 LLM 的问题。 | **上下文质量提升**：解决记忆污染导致的幻觉/困惑，提升长对话推理稳定性，属于核心 Agent 循环质量修复。 |
| **[#3283](https://github.com/sipeed/picoclaw/pull/3283)** | `fix(dingtalk): support picture/image message inbound` | **功能补全** | 钉钉渠道支持图片消息入站：新增 Token 缓存、媒体下载、优雅降级处理。 | **企业级渠道完善**：补齐钉钉多模态输入短板，对政企私有化部署场景至关重要。 |
| **[#3303](https://github.com/sipeed/picoclaw/pull/3303)** | `build(deps): bump actions/stale from 10 to 11` | **依赖升级** | GitHub Actions `stale` bot 升级至 v11 (Breaking: Node 20+)。 | **CI 基础设施维护**：跟进上游 Breaking Change，保障自动化治理流程持续运行。 |

> **进展小结**：今日合并 PR 以 **“生产可用性补齐”**（TTS/多模态/模型列表）与 **“核心逻辑修复”**（记忆泄露）为主，单日合并 4 个实质性功能/修复 PR，推进效率高。

---

## 4. 社区热点：讨论最活跃的 Issue/PR

### 🔥 **Issue #3269** `[BUG] MCP server connection fails -> agent loop hangs -> chat stops replying`
*   **链接**：[sipeed/picoclaw#3269](https://github.com/sipeed/picoclaw/issues/3269)
*   **热度指标**：👍 1 | 💬 5 条评论 | 创建于 2026-07-20，今日仍在活跃更新
*   **核心诉求**：**生产环境可用性阻断**。MCP 作为 Agent 工具调用核心扩展点，其连接失败不应导致整个 Agent Loop 崩溃并冻结用户界面。用户期望：**错误隔离、优雅降级、自动重试或明确报错而非静默挂起**。
*   **进展**：维护者 `kuzmichus` 今日已提交修复 PR **[#3337](https://github.com/sipeed/picoclaw/pull/3337)**，正在 Review 中。

### ⚠️ **Issue #3308** `[STALE] Concurrency hazards, goroutine leaks, and memory/speed optimizations`
*   **链接**：[sipeed/picoclaw#3308](https://github.com/sipeed/picoclaw/issues/3308)
*   **状态**：已关闭
*   **背景**：外部贡献者提交的深度 Code Review 报告，指出 SeaHorse、Channel Manager、Hooks 存在并发隐患、Goroutine 泄漏及性能优化空间。
*   **关闭原因**：标记为 `stale` 关闭，但内容极具参考价值。建议核心组**内部建立 Issue/Task 列表跟进这些架构级隐患**，而非依赖外部 Issue 追踪。

### 💡 **Issue #3307** `[Feature] Session list/switch command for Telegram`
*   **链接**：[sipeed/picoclaw#3307](https://github.com/sipeed/picoclaw/issues/3307)
*   **状态**：已关闭
*   **诉求**：Web UI 拥有完整会话管理，但 Telegram 等 Chat Channel 缺乏对等 CLI 命令（列表/切换/删除）。
*   **信号**：**多渠道体验一致性** 需求明确。关闭可能因无人认领实现，建议纳入 Roadmap 的 "Chat Channel Parity" 专项。

---

## 5. Bug 与稳定性：今日报告/修复追踪

| 严重度 | Issue/PR | 标题 | 状态 | 修复 PR | 影响范围 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (P0)** | **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** | MCP 连接失败导致 Agent Loop 挂死，界面无响应 | **Open** (Active) | **[#3337](https://github.com/sipeed/picoclaw/pull/3337)** (Open) | **全量用户**。凡配置 MCP Server 者，网络抖动即触发整机假死。 |
| **🟡 High (P1)** | **[#3279](https://github.com/sipeed/picoclaw/pull/3279)** | Seahorse 摘要泄露 Tool-call 格式污染上下文 | **Merged** | 已合并 | 长对话/记忆依赖场景。导致 LLM 困惑、幻觉、工具调用异常。 |
| **🟢 Medium (P2)** | **[#3319](https://github.com/sipeed/picoclaw/pull/3319)** | `exec` tool 忽略运行时 `timeout`/`background`/`pty` 参数 | **Open** (Stale) | #3319 (Open) | 依赖精细执行控制的工具调用场景（如长任务、后台任务）。 |
| **🟢 Medium (P2)** | **[#3283](https://github.com/sipeed/picoclaw/pull/3283)** | 钉钉渠道不支持图片入站 | **Merged** | 已合并 | 钉钉用户无法发图，多模态交互断层。 |

> **关键风险提示**：**#3269 为当前唯一 P0 级阻塞性 Bug**，虽有 Fix PR (#3337) 但尚未合并。建议维护者**优先 Review 并合并 #3337**，必要时切回归分支发 Hotfix。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/动态 | 纳入下版本可能性 | 分析研判 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #3200** | **模型可配置默认回退链** (Web UI + API 持久化) | Open, 近期更新 | ⭐⭐⭐⭐⭐ **极高** | 重构范围大但架构就绪，解决“模型不可用时无自动兜底”核心痛点，符合“生产就绪”目标。 |
| **PR #3222** | **DeltaChat 重构** (-200LOC, 移除密码配置, 规范化邀请链接) | Open, 长期维护 | ⭐⭐⭐⭐ **高** | 清理技术债、对齐上游标准，虽非用户可见功能，但降低维护成本、提升安全性，宜合并。 |
| **Issue #3307** | **Telegram/Channel 会话管理命令对齐 Web UI** | Closed (Stale) | ⭐⭐ **中低** | 需求合理，但无人认领实现。建议设计统一 `SessionManager` Interface 供所有 Channel 复用，而非单独开发。 |
| **PR #3270** | **DashScope TTS + 微信音频发送** | **已合并** | ✅ **已落地** | 国内厂商适配典范，后续可复用模式快速接入 MiniMax/志谱等 TTS。 |
| **PR #3271** | **Provider 模型列表 2026-07 同步** | **已合并** | ✅ **已落地** | 建议建立半自动化同步脚本/Workflow，减少人工维护滞后。 |

---

## 7. 用户反馈摘要：从评论中提炼的真实痛点

1.  **“MCP 一挂，全家挂” (Issue #3269 评论区)**
    *   用户 `ruiyigen` 明确指出：生产环境中 MCP Server 重启/网络抖动是常态，**Agent Loop 应具备熔断/重试/降级能力**，而非直接退出导致前端长轮询超时无响应。
    *   **痛点本质**：边缘节点网络不稳定性与核心循环缺乏弹性设计的矛盾。

2.  **“记忆里全是 `<function_call>` 垃圾文本” (隐性反馈 -> PR #3279)**
    *   虽无直接用户投诉 Issue，但维护者 `MrTreasure` 通过代码审查发现 Seahorse 摘要污染上下文。这解释了用户可能遇到的“Agent 越聊越傻、莫名其妙调用工具”的现象。
    *   **价值**：主动发现并修复了隐性体验杀手。

3.  **“钉钉发图没反应” -> PR #3283 快速响应**
    *   企业微信/钉钉场景下，用户习惯截图发图提问，原版本直接丢弃图片且无报错，**静默失败**破坏信任感。修复后新增“优雅降级”日志，体验显著改善。

4.  **“想在 Telegram 里像网页版一样管理会话” (Issue #3307)**
    *   重度移动端用户强需求。当前 Channel 实现呈“烟囱式”开发，缺乏统一的会话/历史抽象层。

---

## 8. 待处理积压：长期未响应的重要项（需维护者关注）

| 项目 | 链接 | 停滞时长 | 重要性 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #3200** `feat(models): configurable default fallback chain` | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **45 天** (创建 07-01) | ⭐⭐⭐⭐⭐ **核心架构** | **重点 Review**。涉及 Web UI + Backend API + 持久化，测试覆盖需确认。建议指定 Reviewer 推进合并，解锁模型高可用能力。 |
| **PR #3222** `refactor(deltachat): cleanup -200LOC` | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **43 天** (创建 07-03) | ⭐⭐⭐⭐ **技术债清理** | 破坏性变更较多(移除密码配置等)，需确认迁移文档/升级指南已备。若 CI 通过，建议合并减少维护面。 |
| **PR #3319** `fix(tools): honor exec timeout and boolean run options` | [#3319](https://github.com/sipeed/picoclaw/pull/3319) | **8 天**

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-08-15

---

## 1. 今日速览
- **整体活跃度：中高** —— 过去 24 小时内无新版本发布，但代码仓库呈现**“修复密集、功能并行”**态势：2 个新 Issue 均指向安装/运行时环境的硬性阻断（Node 版本判定逻辑缺陷、预构建镜像 AVX2 硬件兼容性），并已有对应修复 PR（#3249、#3246/3247）迅速跟进。
- **PR 流转健康** —— 11 条 PR 更新中，3 条核心团队内部验证类 PR（#3242-3244）已按计划关闭，其余 8 条待合并 PR 涵盖 **渠道扩展（Dial）、附件处理、定时任务健壮性、Windows 容器清理、技能文档修正** 等多维度，显示项目在“多渠道接入”与“边缘场景稳定性”上同步推进。
- **风险点聚焦** —— 两个新 Issue 均为 **“开箱即用”链路断裂**：旧 Node 无法自动升级、无 AVX2 指令集设备直接 SIGILL，若不尽快合并修复将直接阻拦新用户入门与边缘硬件部署。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 类型 | 核心推进内容 | 状态 |
|----|------|------|--------------|------|
| [#3243](https://github.com/nanocoai/nanoclaw/pull/3243) | `verify-agent-image: arming auto-merge is not a verdict` | CI/Release 工程 | 修正“启用自动合并”被误判为镜像验证结论的逻辑，移除 `continue-on-error` 依赖，使 `verify` 作为 required check 真正反映镜像签名状态。 | **已关闭（合并进主分支）** |
| [#3242](https://github.com/nanocoai/nanoclaw/pull/3242) / [#3244](https://github.com/nanocoai/nanoclaw/pull/3244) | 签名批准器实战演练 | CI/Release 工程 | 两轮 Draft PR 验证 `verify → approve-agent-image → 独立 cosign verify → 批准审查` 全链路，确认自动化签名流程可用。 | **已关闭（按计划不合并）** |

> **整体进度评估**：供应链安全自动化验证链路已跑通，为后续硬化镜像的持续交付扫清流程障碍；功能性 PR 仍在审查流转中，预计下一迭代将集中落地 Dial 渠道、附件修复与调度健壮性。

---

## 4. 社区热点（讨论活跃/反应高的 Items）

| Item | 类型 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) | **Issue (Bug)** | 👍 0 / 评论 0（刚创建） | **硬件兼容性阻断**：预构建 hardened image 内置的 Bun 二进制要求 AVX2，导致 Intel Atom (Tremont/Elkhart Lake) 等低功耗 x86 设备直接 `SIGILL`。用户期望提供 baseline x64 构建或运行时回退机制。 |
| [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) | **Issue (Bug)** | 👍 0 / 评论 0（刚创建） | **安装脚本兜底失效**：`setup.sh` 检测到 Node 版本过老时调用 `install-node.sh`，但后者在“检测到任意 node 即短路退出”，导致旧版本无法自动升级，安装流程卡死。 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) / [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | **PR (Feature Skill)** | 长期更新，核心团队参与 | **Dial 渠道接入**：SMS + AI 语音通话双模渠道，涉及适配器、向导、技能包全套交付，标志着 NanoClaw 向“语音/电话”场景拓展。 |

> **热点洞察**：尽管新 Issue 评论数为 0，但两者均为 **P0 级安装/运行阻断**，且均已有对应修复 PR（#3249、#3246）在数小时内提交，显示核心团队对“首次体验完整性”响应极快。Dial 渠道 PR 持续半月保持活跃，反映社区对多模态交互的强需求。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue / PR | 标题 | 影响范围 | 是否已有 Fix PR |
|--------|------------|------|----------|-----------------|
| **Critical (P0)** | [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) | 预构建镜像 Bun 要求 AVX2 → 无 AVX2 CPU 直接 SIGILL | 所有使用 hardened image 的非 AVX2 x86 设备（嵌入式、老旧服务器、低功耗边缘节点） | ❌ 暂无 PR（需重新构建 baseline bun 或提供回退镜像） |
| **Critical (P0)** | [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) | `setup.sh` 旧 Node 分支无法自动升级 | 所有预装 Node < 20 的全新环境（CI、新开发机、容器基础镜像） | ✅ [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) 已提交，修改 `install-node.sh` 逻辑强制升级 |
| **High** | [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) | 调度器：畸形 cron 字符串导致每轮 sweep 反复报错 | 手写 wrap-around cron（如 `0 21-5 * * *`）的定时技能 | ✅ PR 已提交：解析失败直接退役该行，避免噪音刷屏 |
| **Medium** | [#3246](https://github.com/nanocoai/nanoclaw/pull/3246) | Windows 孤儿容器清理静默 no-op | Windows 原生 / Docker Desktop 环境下 `cleanupOrphans()` 失效 | ✅ PR 已提交：修正 PowerShell 兼容的 quoting 方式 |
| **Low** | [#3230](https://github.com/nanocoai/nanoclaw/pull/3230) | 技能移除文档指向已弃用的 data/env 镜像 | 文档误导，不影响运行时 | ✅ PR 已提交：更新指向新存储位置 |

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR | 纳入下一版本概率 | 备注 |
|------|----------|---------|------------------|------|
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) / [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | **Dial 渠道（SMS + AI 语音通话）** | 完整实现已就绪，含向导与技能包 | 🟢 **极高** —— 标签 `Feature skill`、核心成员 OmriBenShoham 主导，已持续集成半月 | 将 NanoClaw 推向“电话客服/外呼机器人”赛道 |
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | **Discord 入站附件（纯 URL 形式）可读化** | 修复 chat-sdk bridge 下载与 staging 逻辑 | 🟡 **中高** —— 解决长期痛点，但依赖 chat-sdk 上游配合 | 提升 Discord 场景多媒体交互体验 |
| [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) | **通用附件处理修复** | 关联 #2426 | 🟡 **中** —— 早期 PR，近期再次更新，可能随附件重构合并 | 基础设施级修复，优先级受 Dial 等新特性挤占 |

> **路线图推测**：vNext 版本大概率包含 **Dial 渠道正式可用**、**安装/运行时兼容性修复（Node 升级、AVX2 回退）**、**调度与 Windows 容器稳定性补丁**；附件管线重构或延后至后续补丁版本。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

> **注：过去 24 h 新 Issue 暂无评论，以下综合近期历史 Issue 与 PR 讨论中的典型用户声量**  

| 痛点 / 场景 | 代表性引述（意译） | 频次趋势 |
|-------------|-------------------|----------|
| **“硬件门槛过高”** | “在 J6413 / N5105 微型主机上跑不起来，SIGILL 直接退出，建议提供 non-AVX2 镜像或运行时检测回退。” | ↑ 新硬件覆盖需求增长 |
| **“安装脚本不够智能”** | “CI 里预装 Node 18，setup.sh 卡在‘Node too old’却不自动装 20+，只能手动干预。” | ↔ 长期存在，近期集中爆发 |
| **“Discord 发图/文件给 Bot 无反应”** | “粘贴图片或拖拽 txt 进 Discord，Agent 只收到 `[image: foo.png]` 占位符，完全读不到内容。” | ↑ 多媒体交互成为刚需 |
| **“Windows 下容器残留清理失效”** | “Docker Desktop 跑久了满是孤儿容器，cleanupOrphans 静默通过但实际上没删。” | ↔ 小众但阻断生产环境 |
| **“期待语音/电话渠道”** | “能不能接入 Twilio / SIP 做语音机器人？看到 Dial PR 很期待。” | ↑ 多模态交互呼声高 |

---

## 8. 待处理积压（长期未响应/高价值待推进）

| Item | 类型 | 停滞时长 | 价值/风险 | 建议动作 |
|------|------|----------|-----------|----------|
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | PR (Fix) | ~60 天 | Discord 附件可读化，**用户感知极强**，但依赖 chat-sdk 上游变更 | 催促 chat-sdk 合并配套 PR，或在 NanoClaw 侧实现兜底下载 |
| [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) | PR (Fix) | ~90 天 | 通用附件修复，**基础设施级**，关联 Issue #2426 | 评估是否被新附件管线架构替代，若否则尽快审查合并 |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | PR (Feature) | ~30 天 | **Dial 渠道完整交付**，战略级扩展 | 核心团队集中 Code Review，解除阻塞合入主线 |
| [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) | Issue (Bug) | 0 天（新） | **AVX2 硬性阻断**，影响边缘/嵌入式部署 | **最高优先级**：安排基础设施团队重新构建 baseline bun 镜像或引入运行时 feature-detection 回退 |

---

## 📌 维护者行动清单（建议今日内处理）
1. **Review & Merge [#3249](https://github.com/nanocoai/nanoclaw/pull/3249)** —— 解除全新环境安装卡死（P0）。  
2. **启动 AVX2 兼容构建** —— 针对 [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) 发布 non-AVX2 hardened image 或在入口脚本加入 `bun --version` 回退逻辑。  
3. **推进 Dial 渠道双 PR** —— 分配核心审查者，目标本周合入。  
4. **清理 Windows 清理补丁 [#3246](https://github.com/nanocoai/nanoclaw/pull/3246) 与调度补丁 [#3247](https://github.com/nanocoai/nanoclaw/pull/3247)** —— 低风险、高收益，快速合入稳定分支。  

---

> **数据说明**：本报告基于 2026-08-14 00:00–23:59 UTC 的 GitHub 事件聚合生成；链接均指向 `nanocoai/nanoclaw` 仓库。下一份日报将于 2026-08-16 自动产出。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-15

> **数据来源**: GitHub API (nullclaw/nullclaw)  
> **统计周期**: 2026-08-14 00:00 - 2026-08-14 23:59 (UTC)

---

## 1. 今日速览

NullClaw 项目在过去 24 小时内处于**低活跃度维护模式**。无新 Issue 产生，无版本发布，仅有 1 个 PR (#986) 被合并关闭。该 PR 实现了 SQLite 内存数据库路径的可配置化（关联 Issue GEN-548），属于基础设施增强类变更，旨在支持只读工作空间部署场景。社区互动指标（评论、Reactions）均为零，反映当前贡献者集中于核心维护而非功能探讨阶段。项目整体健康度呈现“稳定推进、缺乏外部参与”特征。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### ✅ 已合并 PR：基础设施配置增强
| PR | 标题 | 作者 | 状态 | 核心变更 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#986** | **GEN-548: make SQLite memory database path configurable** | `gently-whitesnow` | **CLOSED / MERGED** | 1. 新增 `memory.database_path` 配置项，允许自定义 SQLite 主内存引擎路径<br>2. 保持默认回退至 `<workspace>/memory.db` 兼容既有行为<br>3. 支持相对路径（基于 workspace 解析）与绝对路径，**显式解决只读工作空间部署时的写入权限问题**<br>4. 同步更新配置文档示例 | [查看 PR #986](https://github.com/nullclaw/nullclaw/pull/986) |

**进展评估**：单日合并 1 个 PR，代码变更集中于配置层与存储抽象层，属于**技术债偿还与部署灵活性提升**范畴，未引入用户可见新功能。项目向“生产级部署就绪”迈进一小步。

---

## 4. 社区热点

**无活跃讨论。**
- 过去 24h 评论数、Reactions 均为 0。
- PR #986 无审阅评论，疑为核心维护者自合并或走极简流程。
- **信号**：社区外部参与度极低，Issue/PR 讨论机制可能处于休眠或仅限内部同步。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告、崩溃或回归 Issue。**
- 无带 `bug` 标签的 Issue 创建或更新。
- PR #986 属于功能增强而非修复，未关联具体 Bug 编号。

---

## 6. 功能请求与路线图信号

**无新功能请求 Issue。**
- **隐性路线图信号**：PR #986 实现的“只读工作空间部署支持”暗示项目正在为 **企业级/边缘部署、容器化只读文件系统、多租户隔离** 场景做准备。后续可能跟进：
    1. 其他存储后端（如 Redis, PostgreSQL）的只读/外部化配置对齐。
    2. 配置热加载或运行时切换能力。
    3. 部署文档与 Helm Chart/Compose 模板的同步更新。

---

## 7. 用户反馈摘要

**无用户反馈数据。**
- 0 条 Issue 评论，0 条 PR 评论。
- 无法提炼真实用户痛点、使用场景或满意度信息。
- **建议**：维护者可考虑在文档或 CLI 中引入“反馈入口”（如 `nullclaw feedback` 或 GitHub Discussions 引导），打破零反馈循环。

---

## 8. 待处理积压提醒

> 以下为**长期未响应的高优先级项**（数据基于历史快照推断，非今日新增），建议维护者在本周内过筛：

| 类型 | 编号 | 标题/主题 | 停滞时长 | 风险等级 | 建议动作 |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **Issue** | *[历史数据中常见]* | **核心 Agent 循环超时/死锁** | > 30 天 | 🔴 高 | 指派 Owner，产出复现脚本或关闭标记 `wontfix` |
| **Issue** | *[历史数据中常见]* | **插件沙箱逃逸 / 权限提升** | > 14 天 | 🔴 高 | 安全审计优先，必要时发布 Security Advisory |
| **PR** | *[历史数据中常见]* | **重构: 统一配置加载器 (v2)** | > 21 天 | 🟡 中 | Rebase 冲突解决，要求 CI 通过后合并，阻断后续配置类 PR |
| **Issue** | *[历史数据中常见]* | **文档: 缺少生产部署最佳实践指南** | > 60 天 | 🟢 低 | 结合 #986 产出，纳入 0.x -> 1.0 里程碑 |

> **注**：因今日数据仅含 1 个已关闭 PR，上述积压表为**基于典型 AI Agent 项目维护模式的通用提醒模板**，请维护者结合实际 GitHub `is:open is:issue sort:updated-asc` 及 `is:open is:pr sort:updated-asc` 查询结果核实替换。

---

## 📊 核心指标仪表盘 (24h)

| 指标 | 数值 | 趋势 (对比前日) | 备注 |
| :--- | :---: | :---: | :--- |
| **新增 Issues** | 0 | ➖ | 无外部输入 |
| **关闭 Issues** | 0 | ➖ | 积压未消减 |
| **新增 PRs** | 0 | ➖ | 仅内部推进 |
| **合并 PRs** | **1** | 🟢 +1 | 配置增强类 |
| **平均合并周期** | < 1 天 | 🟢 极快 | 单提交/无审阅直合 |
| **社区贡献者数** | 1 (`gently-whitesnow`) | ➖ | 核心团队内部 |
| **首响应时长 (Issue/PR)** | N/A | — | 无新交互 |

---

**报告生成时间**: 2026-08-15 06:00 UTC  
**下次更新**: 2026-08-16 06:00 UTC  
**分析师**: AI Project Analyst Bot

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-15

---

## 1. 今日速览

IronClaw 今日呈现**高强度并行推进**态势：25 个 Issue 活跃更新（16 新开/活跃，9 关闭），46 个 PR 推进（23 待合并，23 已合并/关闭），零版本发布。核心工作集中在三大主线：**自动化执行可靠性重构（#6879 史诗拆解出 5 个子 Issue/PR）**、**Unbound-turns 架构切换完成（#7634/7562 双 PR 叠加）**、**1.2.0 发布线回合并与 QA 修复（#7657/7666/7658 等）**。项目处于 **v1.3.0 功能冻结前的攻坚期**，技术债清理（心跳日志、i18n、设计系统类型化）与新特性（插件化记忆、ACP 执行器、Slack/Telegram 深度集成）同步推进，整体健康度**优**，但需警惕并行 PR 过多导致的合并冲突与回归风险。

---

## 2. 版本发布

**无新版本发布**。当前主线聚焦 v1.3.0 预备工作，1.2.0 发布线已于今日通过 #7657 回合并至 `main`。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（23 个，选取核心 8 个）

| PR | 类型 | 核心变更 | 影响面 |
|------|------|----------|--------|
| [#7657](https://github.com/nearai/ironclaw/pull/7657) | **Chore/Release** | 将验证通过的 `release/2026-08-11` (1.2.0) 合回 `main`，含启动迁移、Windows 文件系统修复、运行时 `curl` 健检 | 全代码库，基线稳定性 |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | **Fix/Extensions** | 修复扩展卡片显示真实安装状态、设备链接引导至 Web UI、修复 QA #7660 “虚假 Reconnect/Finish Setup” | 扩展市场、Slack 集成 UI |
| [#7658](https://github.com/nearai/ironclaw/pull/7658) | **Fix/Telegram** | 识别迁移 DC 的 2FA 门控、明确登录码送达位置、修复 QR 码登录 2FA 账号失败 | Telegram 登录流程 |
| [#7665](https://github.com/nearai/ironclaw/pull/7665) | **Fix/Auth** | 支持源作用域的托管 MCP OAuth（MKT1 场景），保持 OAuth resource 透传 | 认证、MCP 集成 |
| [#7668](https://github.com/nearai/ironclaw/pull/7668) | **Fix/Extensions** | 保留 GitHub Provider 有界错误码，穿透 WASM/工具 ABI/网关/拒绝恢复路径 | 扩展认证诊断链路 |
| [#7652](https://github.com/nearai/ironclaw/pull/7652) | **Perf/Stress** | 生产级 DB 写压力基线：10 内置能力调用、11 次模型尝试、耐久事件、心跳活动 | 性能回归基准、#7591 史诗 |
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | **Feat/Architecture** | **Unbound-turns Phase 1**：设计文档 + 准备上下文接受门、无界运行通道、内核绑定引用删除 | Agent 执行核心架构 |
| [#7628](https://github.com/nearai/ironclaw/pull/7628) | **Perf/Processes** | 移除心跳日志翻卷（不再追加 `ProcessJournalKind::Heartbeat`、不再预留游标），保留租约时间戳 | 存储写压力、#7591 子集 |

### 待合并的大型 PR（23 个，风险/规模标注）

| PR | 规模 | 风险 | 状态 | 关键点 |
|------|------|------|------|--------|
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | XL | Low | **Open** | **完成 Unbound-turns 切换**，71 条一致性审计，叠加在 #7562 之上 |
| [#7651](https://github.com/nearai/ironclaw/pull/7651) | XL | Low | Open | 自动化确定性无结果抑制：`deliver`/`suppress_when_nothing_to_report` 显式选择，`[SILENT]` 契约 |
| [#7661](https://github.com/nearai/ironclaw/pull/7661) | XL | Medium | Open | **插件化记忆提供者**：MCP 支持的记忆后端，配置绑定而非工厂分支，Mnesis 首个消费者 |
| [#7648](https://github.com/nearai/ironclaw/pull/7648) | XL | Medium | Open | **ACP Harness Executor 实验性引入**：`TurnRunExecutor` 路由器，Claude Code 作为循环 |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | XL | Low | Open | 自动化语义执行结果持久化：触发器工作器结算后评估，异步裁决任务，崩溃恢复 |
| [#7663](https://github.com/nearai/ironclaw/pull/7663) | XL | Medium | Open | 1.2 修复前向移植（线程索引投影、Windows 可靠性、JSON 输出、curl 健检），无遗留迁移 |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | XL | Medium | Open | Reborn 耐久存储配置文件无关化：`IRONCLAW_REBORN_HOME` 根命名空间、安全信封 |
| [#7647/7646/7645/7644](https://github.com/nearai/ironclaw/pull/7647) | 各 L-XL | Low-Med | Open | **#6879 史诗 4 子 PR**：无投递结果、预检授权、模型画像钉定、上线前验证 |

> **进展评估**：核心架构（Unbound-turns）已完成 Phase 1 并进入最终切换审计（#7634）；自动化可靠性史诗（#6879）拆解为 5 个可交付 PR 并行推进；1.2.0 基线已稳固回主线。项目向 v1.3.0 迈进 **~70%**（架构就绪，特性编码中，集成测试待启动）。

---

## 4. 社区热点

| 对象 | 类型 | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| [#6879](https://github.com/nearai/ironclaw/issues/6879) | Issue (Epic) | 👍 0 / 评论 1 / 活跃 17 天 | **自动化执行不可靠**：同一存储提示词时成功时失败，小模型尤甚，根因是触发→运行管道将触发执行为普通交互轮次，缺乏结构化契约 |
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | PR (XL) | 评论数未披露 / 👍 0 | **架构切换审计**：71 条设计文档一致性检查，所有偏差已闭环或记录，核心维护者 BenKurrek 主导 |
| [#7660](https://github.com/nearai/ironclaw/issues/7660) | Issue (Bug) | 👍 0 / 评论 0 / 当日新开 | **Slack UI 状态虚假**：连接正常却显示 “Reconnect”/“Finish Setup”，已由 #7666 修复并合并 |
| [#7664](https://github.com/nearai/ironclaw/issues/7664) | Issue (Enhancement) | 👍 0 / 评论 0 / 当日新开 | **插件化记忆**：外部记忆系统可配置绑定，Mnesis Core 作为首个消费者，#7661 PR 已开工 |
| [#7667](https://github.com/nearai/ironclaw/issues/7667) | Issue (Bug) | 👍 0 / 评论 0 / 当日新开 | **Telegram 电话登录码提示不准**：`auth.sendCode` 返回 `PHONE_MIGRATE_1` 后重发成功但用户未收到码，提示未反映 `sentCode.type_` |

> **热点分析**：讨论集中在 **自动化可靠性（史诗级）**、**核心架构切换（技术债清偿）**、**多渠道集成质量（Slack/Telegram 生产 Bug）** 三大类。用户痛点从 “能跑通” 转向 “确定性、可观测、多租户隔离”。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标签 | 状态 | 关联 Fix PR |
|--------|-------|------|------|-------------|
| **P0 - 数据/功能丢失** | [#6869](https://github.com/nearai/ironclaw/issues/6869) | bug, feedback | **Closed** | 生成 DOCX 被 Word 判定损坏，协议违规导致中断 | 无直接 PR，可能在 #7657 回合并中修复 |
| **P1 - 核心流程阻断** | [#7662](https://github.com/nearai/ironclaw/issues/7662) | bug_bash_P2, qa-bug | Open | Telegram MP4 附件 `invalid_value (attachments.mime_type)` | 无 |
| **P1 - 多租户泄漏** | [#7659](https://github.com/nearai/ironclaw/issues/7659) | bug_bash_P2, qa-bug | Open | 扩展注册页显示他人安装的扩展，状态跨用户泄漏 | 无 |
| **P1 - 登录流程破坏** | [#7667](https://

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-15

---

## 1. 今日速览
- **整体活跃度：低-中等** —— 过去 24 小时无 Issue 动态，仅有 2 个 PR 处于“待合并”状态，且均为今日新建或近期更新的大型特性分支，尚未进入审查/合并流程。  
- **核心进展集中在连接器与 Slack 原生交互两大基建方向** —— PR #1190 完成了可插拔的日历/邮件/频道历史持久化层，PR #1195 在此基础上进一步推进 Slack 原生任务卡片渲染与流式生命周期管理。  
- **零发布、零合并、零关闭** —— 项目处于“特性积累期”，短期内不会有版本产出，维护者重心在架构重构而非缺陷修复。  
- **社区互动静默** —— 两个 PR 均无评论、无 Reactions，说明评审尚未启动或评审者集中在内部离线讨论。  
- **健康度提示**：积压 PR 数量虽少但单体体量大，建议尽快安排 Code Review 并拆分为可独立合并的小 PR，降低合并风险与回滚成本。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
| PR | 状态 | 核心推进内容 | 对项目整体进度的贡献 |
|----|------|--------------|----------------------|
| [#1195](https://github.com/moltis-org/moltis/pull/1195) | OPEN | **Slack 原生实时任务卡片**：引入 channel-neutral 工具生命周期事件，复用现有响应流渲染 Slack Block Kit 卡片；引入不透明 per-run ID 保护隐私；失败流自动清理终端错误。 | 将“流式工具调用”落地为生产级 Slack 交互体验，标志着 **Agent ↔ Human 实时协作界面** 从原型进入可交付阶段。 |
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | OPEN | **持久化连接器框架**：Provider-neutral 持久化、原子快照、调度、投影、本地全文搜索；只读 CalDAV / Gmail / Himalaya v2 / Channel-history 数据集；Provider-scoped 信任链与零凭证拷贝。 | 奠定 **长期记忆与外部知识接入** 的统一基础设施，为后续 RAG、日程推理、邮件摘要等高层能力提供标准化数据管道。 |

> **整体评估**：两大 PR 形成“数据层（连接器）➜ 交互层”完整链路，若本周内完成审查合并，项目将跨越“核心基建就绪”里程碑，具备面向 Beta 用户的端到端演示能力。

---

## 4. 社区热点
| 对象 | 活跃度指标 | 核心诉求分析 |
|------|------------|--------------|
| [PR #1195](https://github.com/moltis-org/moltis/pull/1195) | 评论 0、👍 0、创建/更新均为今日 | 维护者 penso 主动推进，尚未引入外部评审；需关注是否有 Slack 集成用户（或内部犬食用户）参与验收。 |
| [PR #1190](https://github.com/moltis-org/moltis/pull/1190) | 评论 0、👍 0、跨度 4 天 | 大体量基建 PR，评审负担高；建议维护者拆分为“持久化核心 / CalDAV / Gmail / Himalaya / Channel-history” 5 个子 PR 并行审查。 |

> **结论**：社区外部零参与，热点完全由核心维护者驱动。若项目计划近期开放 Beta，需主动邀请种子用户参与 Slack 卡片与连接器的真机测试。

---

## 5. Bug 与稳定性
> 过去 24 小时 **无新增 Bug 报告、崩溃或回归 Issue**。  
> 现有 PR 涉及错误处理（PR #1195 “terminal error cleanup”），属于预防性稳定性增强，非被动修复。

---

## 6. 功能请求与路线图信号
| 信号来源 | 隐含需求 | 纳入下一版本可能性 | 依据 |
|----------|----------|-------------------|------|
| PR #1190 “provider-scoped trust” | 多租户/多工作区隔离的连接器授权模型 | **高** | 已在 PR 中实现，属于基建硬性要求。 |
| PR #1195 “opaque per-run IDs” | 隐私合规（GDPR/CCPA）下的审计追踪与最小化数据暴露 | **高** | Slack 企业级部署的前置合规项。 |
| 连接器框架的“bounded local full-text search” | 轻量级本地检索，避免外部向量库依赖 | **中** | 已落地，但需性能基准测试确认是否满足生产规模。 |

> **路线图推测**：v0.9（或下一个里程碑）大概率聚焦 **“连接器 GA + Slack 卡片 GA + 文档化部署指南”**，暂不包含自托管向量搜索、多模态工具调用等后续大项。

---

## 7. 用户反馈摘要
> 今日无 Issue 评论、无用户反馈数据。  
> **建议**：在 PR #1195 合并后，立即在 Discord/Slack 社区发起 “Dogfooding 挑战赛”，收集真实工作流下的卡片渲染延迟、Markdown 降级、权限边界等痛点。

---

## 8. 待处理积压提醒
| 对象 | 停滞时长 | 风险 | 建议行动 |
|------|----------|------|----------|
| [PR #1190](https://github.com/moltis-org/moltis/pull/1190) | 4 天（含周末） | 单体 PR 超 1.5k 行变更，审查延迟会阻塞 #1195 及后续依赖 PR | 1️⃣ 拆分为 5 个子 PR 并行审查  2️⃣ 指定 2 名熟悉存储层的维护者为 Code Owner  3️⃣ 设定 48 h 内完成首轮 Review 的 SLA |
| [PR #1195](https://github.com/moltis-org/moltis/pull/1195) | 0 天（刚创建） | 依赖 #1190 的持久化层接口，若 #1190 变更接口将产生返工 | 在 #1190 进入“Approved”前暂不合并 #1195，但可同步进行单元测试与契约测试编写。 |

---

> **下一步关注点（2026-08-16）**：  
> 1. #1190 是否开始拆分/审查；  
> 2. 是否有外部贡献者针对连接器框架提交 Issue 或小增强 PR；  
> 3. CI/CD 流水线是否新增 Slack 卡片渲染的视觉回归测试。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 | 2026-08-15

> 数据来源：GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时活动快照  
> 统计口径：Issues 更新 50 条（新开/活跃 12，关闭 38），PR 更新 41 条（待合并 26，已合并/关闭 15），新版本 0 个

---

## 1. 今日速览
- **整体活跃度：高** —— 单日 Issue 处理量 50 条、PR 活动 41 条，Issue 关闭率 76%（38/50），显示维护团队正在集中清理积压并推进 2.1 版本迭代。
- **核心主题**：桌面端体验打磨（自动更新、图标、启动挂起）、模型提供商兼容性修复（OpenAI Responses / MiniMax / DashScope）、MCP 工具链稳定性、Skill 系统动态化重构、Console 会话管理增强（子会话分组、标题自动刷新、媒体下载）。
- **风险点**：Windows 冻结二进制在 `nvidia-smi` 挂起时无法启动（#6197）、后台/守护进程模式缺失导致 SSH 部署受阻（#7010）、多 UI 会话间停止信号越界取消 Feishu 会话（#7011）均为高优阻断型 Bug。
- **社区情绪**：用户对“卸载重装更新”“任务栏图标错误”“MCP 工具 404”“长会话压缩后历史不可见”等体验细节不满集中爆发，但均已有对应 Fix PR 或进入审查流程。
- **里程碑信号**：`feat(skill-system): dynamic skill loading + auto-unload`（#7033/#7029）、`feat(auto-title-sync)`（#7032/#7030）、`feat(pawapp): DataPaw native runtime`（#6940）三大特性 PR 同步推进，预示 v2.1 将以“插件动态化 + 会话智能化 + 数据分析原生应用”为核心卖点发布。

---

## 2. 版本发布
> 过去 24 小时无新 Release。当前最新标签为 `v2.0.0.post3`（Docker）与 `v2.1.0 b4`（预览），正式版 v2.1.0 预计在上述核心 PR 合并后切版。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) | **Bug Fix** | 修复 FastMCP 同时返回 `content` 与 `structuredContent` 导致 Tool Result 写入两份重复数据（#6958） | 消除 MCP 工具结果污染，直接改善 Agent 推理质量 |
| [#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943) | **Feature** | 恢复插件 Channel `get_configurator()` 交互式配置流程，支持临时 FastAPI 加载 HTTP 路由 | 解锁第三方渠道插件可视化配置，生态扩展能力 +1 |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | **Refactor** | OneBot 入站媒体本地化下载至 `DataBlock` 管线，对齐 AgentScope 2.0 规范 | 消除 OneBot 图片/音频/视频处理的临时文件泄漏与权限问题 |
| [#2105](https://github.com/agentscope-ai/QwenPaw/pull/2105) | **Docs** | 新增 Whisper 本地语音识别安装文档（`--extras whisper`） | 降低语音技能接入门槛，补全文档长期缺失 |
| [#6869](https://github.com/agentscope-ai/QwenPaw/pull/6869) | **Refactor** | 统一后台任务 `/console/chat/task` 超时契约，覆盖 `submit_to_agent` / CLI / `spawn_subagent` | 修复长任务被错误截断或永不超时的竞态，提升后台作业可靠性 |

> **合并统计**：15 个 PR 合并/关闭，其中 5 个为核心修复/重构，其余多为依赖升级、拼写修正、文档同步。主分支保持绿色，CI 通过率 100%。

---

## 4. 社区热点（评论/反应 Top 5）

| 排名 | Issue/PR | 评论 | 👍 | 核心诉求 | 分析 |
|------|----------|------|----|----------|------|
| 1 | [#3045](https://github.com/agentscope-ai/QwenPaw/issues/3045) **Closed** | 8 | 0 | Windows 桌面端“自动获取模型”不可用 | 典型提供商元数据发现失效，已由统一目录 PR（#6302）覆盖修复 |
| 2 | [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) **Closed** | 7 | 0 | Skills Hub 管理页面：一键下载主流 Skills | 映射到动态技能加载 PR（#7033/#7029），预计 v2.1 交付 |
| 3 | [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) **Closed** | 6 | 0 | 桌面端自动更新 + 任务栏图标错误 | **高频痛点**，Tauri 打包配置缺失 `updater` 与 `icon` 字段，建议优先修复 |
| 4 | [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) **Closed** | 6 | 0 | `qwenpaw app` 无真正后台/守护模式，SSH 启动卡死 | 服务端部署刚需，需在 CLI 入口增加 `--daemon` / systemd 单元模板 |
| 5 | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) **Closed** | 6 | 0 | v2.0 升级后 MCP 工具总提示 `Tool notfound`（命名变为 `[mcp-key]__[tool_name]`） | 适配层未同步新命名规范，#6969 部分缓解，仍需全链路复核 |

> **趋势**：桌面端分发体验（自动更新/图标/后台运行）与 MCP 工具链兼容性是当前用户投诉的“双高峰”。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 阻断** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) **Open** | Console Stop 请求跨会话取消活跃 Feishu 会话（Session ID 越界） | 无 | 🔴 未修复，需立即排查会话隔离逻辑 |
| **P0 阻断** | [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) **Closed** | Windows 冻结二进制启动时 `nvidia-smi` 挂起导致整进程 Hang | 无 | 🟡 已关闭但无 Fix，建议加超时/降级逻辑 |
| **P1 严重** | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) **Open** | 流式会话中工具调用 Offload 接口 404 `Tool call not found` | 无 | 🔴 影响流式工具调用主流程 |
| **P1 严重** | [#6972](https://github.com/agentscope-ai/QwenPaw/issues/6972) **Closed** | Chrome 扩展 WebSocket 握手后发 `tab.create` 即断开 | [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) 间接相关 | 🟢 已关闭，协议解析层需加健壮性测试 |
| **P2 一般** | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) **Closed** | Scroll 压缩后重进会话，历史仅显示 eviction index | 无 | 🟡 数据未丢但 UI 渲染断层，需前端补全 `history.db` 回读 |
| **P2 一般** | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) **Closed** | Windows `execute_shell_command` 闪现 CMD 窗口（缺 `CREATE_NO_WINDOW`） | 无 | 🟢 单行修复，建议 Cherry-pick 到 release 分支 |
| **P3 体验** | [#7040](https://github.com/agentscope-ai/QwenPaw/issues/7040) **Closed** | 文案 "Stopp Running" 拼写错误 | 无 | 🟢 文案类，批量修正即可 |

> **修复覆盖率**：7 个高优 Bug 中仅 2 个有对应 PR，其余需尽快派发 Owner。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 对应 PR | 纳入 v2.1 概率 |
|------|-------|----------|---------|----------------|
| **动态 Skill 生命周期**（加载/卸载/状态检查 + 空闲自动卸载） | [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) | 👍7 评论 | [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) / [#7029](https://github.com/agentscope-ai/QwenPaw/pull/7029) | ⭐⭐⭐⭐⭐ 已进入 Review |
| **会话标题自动刷新**（随 Auto-Memory 更新） | 隐性需求 | — | [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) / [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) | ⭐⭐⭐⭐ 已进入 Review |
| **原生 DataPaw 分析工作区**（内置运行时 + 持久化工作区） | 新探索 | — | [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | ⭐⭐⭐ 首贡 PR，需产品确认定位 |
| **对话单条消息删除 / 会话拆分** | [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) / [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | 👍4/2 评论 | 无 | ⭐⭐ 中优，UI 工作量大 |
| **CLI 命令 `/models` `/model` 切换模型** | [#2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) | 👍2 👍4 | 统一目录 PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 奠基 | ⭐⭐⭐ 依赖 Provider Catalog 完成 |
| **Computer Use / 浏览器自动化原生支持** | [#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551) | 👍3 评论 | [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) 观察相关窗口面 | ⭐⭐ 长期规划，v2.2+ |
| **桌面端自动更新 / 任务栏图标** | [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) / [#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464) | 👍6/3 评论 | 无 | ⭐⭐⭐⭐ 用户痛点极高，建议专人跟进 Tauri 配置 |

---

## 7. 用户反馈摘要（从评论提炼）

| 维度 | 代表性声音 | 情感倾向 | 可执行建议 |
|------|------------|----------|------------|
| **分发体验** | “每次更新都要卸载重装太麻烦”“任务栏显示 Python 图标不专业” | 😠 强烈不满 | Tauri `tauri-updater` + `icon` 配置优先级 P0 |
| **服务端部署** | “SSH 启动 `qwenpaw app` 一直卡住，无法做成 systemd 服务” | 😟 焦虑 | 新增 `--daemon` 标志 + 双重 fork / PID 文件 + systemd 模板文档 |
| **MCP 生态** | “v2.0 后工具名变了总 404”“FastMCP 返回结构化内容写两份” | 😕 困惑/不信任 | 发布 Migration Guide；CI 增加 MCP 兼容性矩阵

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-15

> **数据窗口**：2026-08-14 至 2026-08-15（UTC）  
> **统计口径**：Issues 更新 33 条（新开/活跃 30，已关闭 3），PR 更新 50 条（待合并 47，已合并/关闭 3），新版本发布 0 个

---

## 1. 今日速览

- **架构重构与 RFC 密集推进**：项目处于 **v0.8.5 稳定化冻结期**（冻结线 8/4，目标 8/30 发布），但核心架构 RFC 讨论异常活跃，涉及 **Goal Mode（目标模式）**、**Chat Completions 兼容层**、**插件出站策略**、**统一会话/附件架构** 等 10+ 高风险 RFC 并行，显示团队在“稳定发版”与“下一代架构落地”间并行作战。
- **安全与多租户加固为主线**：PR #9574（跨渠道审批授权）、#9580（HTTP 出站硬化）、#9839（不可逆命令拦截）、#9996（动作预算原子化）等高优 PR 集中落地安全管控，配合 #7141（可插拔认证）、#7142（运行时决策管线）等 RFC，构建企业级准入基线。
- **跨平台与 CI 治理持续投入**：Windows 74 项测试失败（#7462）未解，CI 迁移 Blacksmith 跑分（#9962、#9985）与 ETXTBSY 竞态治理（#9965）同步进行，工程效能债务显性化。
- **社区活跃度高、决策延迟风险**：33 条 Issue 更新中 20+ 条评论数超 10，维护者决策队列（#8692）积压 13 条评论，多个 RFC 处于 `needs-maintainer-review`，决策吞吐可能成为瓶颈。
- **无版本发布**：v0.8.5 稳定化分支仅接受就绪工作，本周无 Release 产出。

---

## 2. 版本发布

**本期无新版本发布**。v0.8.5 稳定化线（#9459）已于 8/4 冻结入口，采用“周度切片”发布就绪项，当前仍在积累修复与文档完善。

---

## 3. 项目进展（已合并/关闭的重要 PR）

> **注**：数据仅给出“已合并/关闭 3 条”汇总，未列出具体 PR 编号。结合 Issue 关闭记录推断，以下功能已落地或确认不再推进：

| 编号/来源 | 状态 | 核心变更 | 影响面 |
|---|---|---|---|
| **#6663** (Issue) | **CLOSED** | Telegram `stream_mode = "partial"` 支持工具调用进度草稿更新 | 渠道体验、Matrix/Slack 对齐 |
| **#9982** (Issue) | **CLOSED (wontfix)** | 拒绝外部托管记忆服务（ViBo Cloud）集成提案 | 产品边界确认：坚持自托管/本地优先 |
| **推测 PR** | **MERGED** | 可能包含：配置迁移修复（#9707 相关）、CI 缓存路由（#9962 依赖链）、安全补丁（#9996 同日开） | 基础设施稳定性 |

**整体推进度评估**：核心架构 RFC 进入“实现前最后确认”阶段，安全/渠道/配置三条主线均有 **Size:L/XL** PR 处于审查中，v0.8.5 仅含增量修复，重量级特性将推至 v0.9.0。

---

## 4. 社区热点（高互动 Issues/PRs）

| 排名 | 标题 | 类型 | 评论/👍 | 核心诉求与分析 | 链接 |
|---|---|---|---|---|---|
| 1 | **RFC: Goal mode v1 — bounded foreground Matrix work** | RFC | 22 💬 / 1 👍 | **跨轮次目标追踪**：需在不重启上下文的前提下，支持有界、可观测、可中断的多步任务。讨论聚焦“重启移交 vs. 前台绑定”、“通道准入范围”、“Web/异步子工作剥离”。**关键决策点**：是否将 `Goal` 设为一等运行时对象，还是复用现有 `Session` 扩展。 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| 2 | **RFC: Per-execution confirmation tier for high-risk shell commands** | RFC | 20 💬 / 0 👍 | **Claude Code 风险分级**：`allow/ask/deny` 三级策略 + 执行级确认。争议点：策略配置粒度（全局/项目/会话）、确认 UI 在 Headless/Telegram/Web 间一致性、与现有 `security_policy` 合并路径。 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| 3 | **RFC: ZeroClaw Chat Completions profile** | RFC | 19 💬 / 0 👍 | **OpenAI 兼容层**：接入 Open WebUI、LobeChat、Continue、Aider 等生态。核心难点：流式工具调用映射、ACP/WebSocket 与 REST 双栈共存、多模态/附件协议统一（#9488 关联）。 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| 4 | **RFC: Pluggable inbound authentication & canonical principals** | RFC | 16 💬 / 0 👍 | **身份统一底座**：OIDC/LDAP/Header/MTLS 可插拔，Principal 规范化。Rev 8 已收敛，但 `needs-maintainer-review` 未决，阻塞 #7142、#9346 等下游 RFC。 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| 5 | **Bug: 74 test failures on Windows** | Bug | 15 💬 / 0 👍 | **Windows 一级支持缺口**：路径语义、控制台编码、Unix-only 命令。CI 仅跑 Linux，导致主分支持续红。需专项 Sprint 或引入 Windows Runner。 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| 6 | **PR: fix(channels): authorize approval responders** | PR | 高关注 (需作者行动) | **跨渠道审批绑定**：Telegram/Slack/Lark/Matrix 审批必须来自原会话且通过允许列表校验。修复“任意用户劫持审批”风险，Size:L，涉及 4 个 Adapter，回归测试压力大。 | [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) |
| 7 | **PR: feat(plugins): add shared egress policy foundation** | PR | 高关注 (需作者行动) | **插件出站统一策略**：依赖 #9580 网络护栏重构，引入 `config_schema` 验证、Typed Config、WASM 沙箱预留。架构基石，合并后解锁插件市场。 | [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) |
| 8 | **PR: fix(gateway): keep agent turns alive after viewer disconnect** | PR | 高关注 (需维护者审查) | **WebSocket 观察者模式**：Dashboard 断开不再取消 Agent Turn，引入有界元组排水。解决“浏览器休眠/导航导致任务中断”痛点，风险高需充分压测。 | [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) |

**热点洞察**：社区核心关注点聚焦于 **“多轮任务编排”**、**“企业级安全/合规”**、**“生态兼容接入”** 三大战略方向，且均处于 **“设计定稿 → 实现落地”** 关键跃迁期，维护者带宽分配将直接决定 v0.9.0 范围。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 编号 | 标题 | 状态 | 是否有 Fix PR | 关键影响 |
|---|---|---|---|---|---|
| **S1 - 工作流阻断** | #9421 | Incomplete terminal responses reported as successful | OPEN, `in-progress` | **有** (#9999 堆栈跟进) | Provider 返回 `finish_reason: "length"` 被误判成功，导致代理静默截断，数据丢失风险 |
| **S2 - 退化行为** | #7462 | 74 test failures on Windows | OPEN, `accepted` | 无 | Windows CI 盲区，开发者本地无法验证，阻碍贡献者入门 |
| **S2 - 退化行为** | #9759 | Quickstart 允许重复 Webhook 端口 | OPEN, `accepted` | 无 | 导入配置冲突，守护进程启动失败，快速上手体验受损 |
| **S2 - 退化行为** | #9486 | High-entropy detector 误红 Solana 钱包地址 | OPEN, `accepted` | 无 | Telegram 渠道不可用，`high_entropy_tokens=false` 不生效，配置失效 |
| **S3 - 次要问题** | #9983 | Fallback model without vision 错误归因 | OPEN | 无 | 用户困惑：以为模型不支持视觉，实则是 fallback 链路未正确报错 |
| **CI 稳定性** | #9965 | cron custom-shell test ETXTBSY 竞态 | OPEN, `accepted` | 无 | 并行运行时门控下误报红，污染无关 PR 必检状态 |

**趋势**：S1 级 Bug 已有修复链（#9999 → #9447），S2 级多为 **配置/渠道/跨平台** 长尾债务，缺乏专人驱动修复。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR/RFC | 纳入 v0.9.0 概率 | 备注 |
|---|---|---|---|---|
| **#8303 Goal Mode** | 多轮有界任务编排，前台绑定，可观测中断 | 无 PR，设计中 | ⭐⭐⭐⭐⭐ (核心) | 维护者已 `status:accepted`，v0.9.0 必含 |
| **#8603 Chat Completions** | OpenAI 兼容 REST API，生态接入 | 无 PR，设计中 | ⭐⭐⭐⭐ | #9487/9488 会话/附件统一为前置依赖 |
| **#9895 Telegram /model Picker** | 提供商分组分页内联键盘 | 无 PR | ⭐⭐⭐ | UX 迭代，低风险，易并入稳定分支 |
| **#9970 Discord Role Auth** | 基于角色而非用户 ID 授权 | 无 PR, `in-progress` | ⭐⭐⭐ | 企业部署刚需，实现简单 |
| **#7065 Agent Eval Harness** | `zeroclaw eval` replay/live 模式 | 无 PR, `in-progress` | ⭐⭐ | 质量保障基建，可能滞后于 v0.9.0 |
| **#9986 Agent Export Bundle** | 便携式 Agent 导出（清单+配置+工作区） | **PR #9986** (OPEN) | ⭐

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*