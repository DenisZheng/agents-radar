# OpenClaw 生态日报 2026-08-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-29 05:09 UTC

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

# OpenClaw 项目日报 | 2026-08-29

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时累计 1000 条 Issue/PR 更新（Issue 500、PR 500），其中新开/活跃 Issue 415 条、合并/关闭 PR 228 条，呈现“高吞吐、高并发”的维护节奏。  
- **发布里程碑**：推出 **v2026.9.1-beta.1**，核心解决 Gateway 重启后的会话状态恢复与配置写入可靠性，标志着“重启安全运行”能力进入 Beta 验证阶段。  
- **社区痛点聚焦**：Top 50 Issue 评论集中在 **内存泄漏（RSS 350 MB → 15.5 GB）**、**会话车道饥饿**、**多模态消息丢失/延迟**、**工具调用死循环**、**子进程僵尸累积** 等 P0/P1 稳定性缺陷，用户普遍反映“生产环境不可用”。  
- **PR 质量分层**：合并的 228 条 PR 中，约 60% 为修复类（含安全边界、会话状态、消息投递），30% 为工程化/文档/自动化改进，10% 为新功能；多个大体量 PR（XL size）处于“待作者反馈/维护者审核”状态，合并风险标记多为 🚨 compatibility / 🚨 session-state / 🚨 message-delivery。  
- **整体健康度**：**代码库演进极快，但技术债与稳定性债同步积累**；Beta 版本发布说明项目进入“功能冻结→强化稳定”窗口，后续 1-2 周能否压制 P0 缺陷将决定正式版时间表。

---

## 2. 版本发布

### v2026.9.1-beta.1  ([Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1-beta.1))

| 维度 | 详情 |
|------|------|
| **核心亮点** | 1. **Gateway 重启恢复**：在重复重启时保留已准入的 turn，使 restart-safe run 能通过每个检查点并最终交付响应 ([#130491](https://github.com/openclaw/openclaw/pull/130491))。<br>2. **Gateway 配置写入可靠性**：保持已提交配置可写（截断日志，推测修复并发写入竞态）。 |
| **破坏性变更** | 无明确 Breaking Change 标注；但重启恢复机制隐式改变了会话状态机的持久化时机，建议集成测试覆盖“重启中断→恢复→继续”的完整链路。 |
| **迁移注意事项** | - 现有部署升级后首次重启会触发新的检查点写入，磁盘 I/O 短时上升。<br>- 依赖 `launchd-handoff` 或外部进程管理器的用户需确认重启策略与新恢复逻辑兼容（避免双重恢复导致状态分叉）。 |
| **关联 Issue/PR** | #130491（由 @jalehman 提交），属于 “platinum hermit” 级优先级。 |

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 影响面 | 状态 | 关键进展 |
|----|------|--------|------|----------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **Security/Install Policy** | 🚨 compatibility / 🚨 security-boundary | **CLOSED** | 引入 `security.installPolicy` 返回 `warn` 机制，交互式 CLI 安装需显式确认目标名称，强化供应链安全。 |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | **Web UI/Session Actions** | 🚨 compatibility | **CLOSED** | 顶部聊天头部新增完整会话操作，统一 Sidebar 与 Header 入口，提升运维体验。 |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | **Web UI/Performance** | 🚨 availability | **CLOSED** | 修复会话目录刷新风暴，消除焦点/存在变更触发的冗余全量刷新，降低前端 CPU 占用。 |
| [#132200](https://github.com/openclaw/openclaw/pull/132200) | **Test Refactor** | 🚨 compatibility | **CLOSED** | 复用 `withTempDir` 辅助函数，消除 13 个测试用例的重复目录管理代码。 |
| [#132353](https://github.com/openclaw/openclaw/pull/132353) | **Web UI/Agent Model Settings** | 🚨 compatibility | **CLOSED** | 修复模型设置表单被错误拒绝，恢复 Per-Agent Code Mode 控制。 |
| [#132380](https://github.com/openclaw/openclaw/pull/132380) | **i18n/Control UI** | — | **OPEN** (bot 自动生成) | 同步生成的 Control UI 语言包，保持多语言资源最新。 |
| [#132186](https://github.com/openclaw/openclaw/pull/132186) | **Gateway/Startup Recovery** | 🚨 compatibility / 🚨 availability | **OPEN** (⏳ waiting on author) | 针对 10 万审计记录、800 MB 工作区、NULL 污染元数据的极端启动场景优化恢复路径，**直接支撑 Beta 版“重启恢复”承诺**。 |
| [#132358](https://github.com/openclaw/openclaw/pull/132358) | **Cloud Sessions/Multimodal** | 🚨 compatibility | **OPEN** (👀 ready for maintainer look) | 修复云会话无法可靠接收图片/PDF，Worker 转发与 Codex 远程执行均补充多模态载荷拷贝。 |
| [#131603](https://github.com/openclaw/openclaw/pull/131603) | **Cron/Delivery** | 🚨 message-delivery | **OPEN** (📣 needs proof) | 超时 3 小时以上的一次性 cron 作业不再丢弃输出，改为附加“晚到标注”投递，解决 #131491。 |

> **进展小结**：今日合并 PR 以 **安全加固、UI 体验、测试工程化** 为主；**核心稳定性 PR（#132186、#132358、#131603）仍在审核/等待作者**，预计将随后续 Beta 补丁合入。

---

## 4. 社区热点（评论/反应最多的 Issue/PR）

| # | 标题 | 评论 | 👍 | 标签/严重度 | 核心诉求 |
|---|------|------|----|-------------|----------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Critical: Gateway Memory Leak — RSS 350 MB → 15.5 GB / OOM 循环** | 23 | 1 | P0, platinum hermit, impact:crash-loop | **生产环境阻断级**：内存随时间线性增长，触发 launchd 重启风暴，需根因定位（疑似会话状态/缓存未释放）。 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 中心化文件名编码工具（多编码 Content-Disposition） | 20 | 1 | P3, off-meta tidepool | 架构级重构：统一处理 Shift-JIS/EUC-KR/GB18030 等编码，避免飞书中文文件名乱码复发。 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 可配置流式看门狗超时阈值 | 15 | 8 | P2, off-meta tidepool, impact:ux-friction | Kimi/DeepSeek 长思考模型触发 30s 看门狗误报，需暴露配置项或自适应算法。 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 图片楔入主车道 ~3 分钟 | 14 | 1 | P1, platinum hermit, impact:session-state/message-loss | 多模态图片注入导致车道阻塞，`active_reply_work`/`queued_work_without_active_run` 并存，复现稳定。 |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex app-server 长回复静默截断 ~1000-1100 字符 | 13 | 2 | P1, silver shellfish, impact:session-state/message-loss | `stop=null, aborted=false` 却中断，疑似流式缓冲区或分片组装缺陷。 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | **硬编码工作路径 /Users/wangtao 误入发布** | 12 | 0 | P2, diamond lobster | 极低级工程失误：硬编码个人路径进入生产构建，暴露发布流程缺乏路径清理检查。 |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 拒绝 write tool 静默禁用 memory persistence，Agent 仍报成功 | 6 | 0 | P1, diamond lobster, impact:data-loss | **数据完整性风险**：工具拒绝策略与持久化层耦合未做防御性编程，用户无感知丢失记忆。 |
| [#132273](https://github.com/openclaw/openclaw/pull/132273) | **fix(a2a): bound outbound JSON response bodies** | — | 0 | P2, platinum hermit, channel:a2a | **安全边界**：防止 A2A 对端返回超大 JSON 导致网关缓冲区耗尽，已标记 ready for maintainer look。 |

> **热点分析**：社区最关注 **“生产可用性”** —— 内存泄漏、消息丢失、车道阻塞、数据静默丢失构成四大核心痛点；同时暴露 **发布质量把关**（硬编码路径）与 **防御性编程**（工具拒绝副作用）的系统性短板。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 / Blocker** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 增长至 15.5 GB → OOM Kill → launchd 重启循环 | ❌ 无 | 需内存剖析（heap snapshot / jemalloc prof），疑似会话上下文/工具结果缓存未回收。 |
| **P1 / Critical** | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 图片导致主车道楔入 3 分钟 | ❌ 无 | 复现稳定，涉及多模态注入管线与车道调度交互。 |
| **P1 / Critical** | [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 长回复静默截断 | ❌ 无 | `aborted=false` 却 mid-sentence 结束，需检查流式分片组装逻辑。 |
| **P1 / Critical** | [#126906](https://github.com/openclaw/openclaw/issues/126906) | `tools.deny` 导致 memory persistence 失效且无告警 | ❌ 无 | 数据完整性缺陷，建议在工具拒绝时注入显式错误到 Agent 上下文。 |
| **P1 / Critical** | [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见入站消息零载荷分发、无重试/死信/用户可见失败 | ❌ 无 | 通道通用丢失路径，需补齐死信队列与用户侧回退通知。 |
| **P1 / Critical** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/Tool 子进程泄漏 → 僵尸累积 → 运行时退化 | ❌ 无 | 需在 spawn 点统一 `waitpid` 或引入 reaper 协程。 |
| **P2 / High** | [#69242](https://github.com/openclaw/openclaw/issues/69242) | Linux `exec` 宽泛 find/grep 被 SIGKILL，非 OOM | ❌ 无 | 疑似 cgroup 内存限制或 `ulimit` 交互，需复现脚本。 |
| **P2 / High** | [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows `exec/read` 间歇性返回空输出 (v2026.6.x 回归) | ❌ 无 | 会话特异性，子 Agent 正常，主会话失效，疑似 PTY/管道处理差异。 |
| **P2 / High** | [#89257](https://github.com/openclaw/openclaw/issues/89257) | `backup create --verify` 退出码 13 留

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-08-29

---

## 1. 生态全景

当前生态呈现 **“头部强稳定、腰部重架构、长尾求生存”** 的分层态势。OpenClaw、ZeroClaw、IronClaw、NanoBot、CoPaw 五大头部项目单日 PR/Issue 合计超 200 条，集中攻坚 **会话持久化可靠性、多模态上下文管理、工具调用安全边界、多租户 Hub 架构** 四大核心难题，标志着生态从“功能竞赛”转入 **“生产级交付质量”** 深水区。中腰部项目（NanoClaw、Hermes Agent、LobsterAI）同步推进 Setup Driver 协议化、Desktop 沙箱隔离、计费模型目录等工程化基建。尾部项目（Moltis、PicoClaw、TinyClaw、ZeptoClaw、NullClaw）多处于低频维护或观望期。整体看，**技术债显性化偿还** 与 **协议标准化（MCP/A2A/Wire Protocol）** 成为跨项目共识。

---

## 2. 各项目活跃度对比

| 项目 | Repo | Issues (24h) | PRs (24h) | Release (24h) | 健康度评估 | 核心状态关键词 |
|------|------|--------------|-----------|---------------|------------|----------------|
| **OpenClaw** | openclaw/openclaw | 500 (新/活跃 415) | 500 (合并/关闭 228) | **v2026.9.1-beta.1** | 🟡 **高吞吐、高债务** | 重启恢复 Beta、内存泄漏 P0、会话车道饥饿 |
| **ZeroClaw** | zeroclaw-labs/zeroclaw | 36 | 50 | 无 | 🟢 **架构重构冲刺** | RFC 决策推进、TaskRecord 统一、Wire Protocol 一等公民 |
| **IronClaw** | nearai/ironclaw | 3+ 新增高优 | 15 合并/关闭 | **v1.4.0 稳定版** | 🟢 **发布后稳定性冲刺** | 通知链路闭环、工具载荷投影、压缩循环硬化 |
| **NanoBot** | HKUDS/nanobot | 8 (新/活跃 7) | 20 (合并 8) | 无 (v0.12.x) | 🟢 **架构治理期** | 持久化异步化、Provider 回退显式化、上下文生命周期三件套 |
| **CoPaw** | agentscope-ai/CoPaw | 33 关闭 | 16 合并 | **v2.2.0-beta.3 / beta.2** | 🟢 **多租户 Hub 冲刺** | MCP 双栈兼容、启动性能重构、长上下文截断治理 |
| **Hermes Agent** | NousResearch/hermes-agent | 50 (新/活跃 43) | 50 (合并/关闭 4) | 无 (v0.20.7 预发布) | 🟡 **稳定性攻坚+架构升级双轨** | OAuth/MCP 死锁清理、Desktop 启动失败、Delegation 生命周期分离 |
| **NanoClaw** | nanocoai/nanoclaw | 3 | 50 | 无 | 🟡 **密集重构、入口受阻** | Setup Driver 协议栈、Credential Proxy 刷新、安装脚本卡死 P0 |
| **LobsterAI** | netease-youdao/LobsterAI | 3 热点 | 9 合并 | **v2026.8.28** | 🟢 **工程质量提升期** | 登录引导/计费目录/脱敏修复、Vitest 覆盖核心模块、页内搜索 |
| **Moltis** | moltis-org/moltis | 1 (P0 阻塞) | 0 | 无 | 🔴 **维护观察期** | 沙箱运行阻塞、零响应 |
| **PicoClaw** | sipeed/picoclaw | 数据获取失败 | - | - | ⚪ **数据缺失** | - |
| **TinyClaw** | TinyAGI/tinyagi | 0 | 0 | 无 | ⚪ **休眠** | - |
| **ZeptoClaw** | qhkm/zeptoclaw | 0 | 0 | 无 | ⚪ **休眠** | - |
| **NullClaw** | nullclaw/nullclaw | 0 | 0 | 无 | ⚪ **休眠** | - |

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 |
|------|----------|
| **规模优势** | 单日 **1000 条 Issue/PR 更新** 为生态绝对首位，社区并发维护能力最强，Beta 版发布节奏（v2026.9.1-beta.1）确立了“重启安全运行”基线。 |
| **技术路线差异** | **Gateway 中心化架构**：显式区分 Gateway（会话编排/状态机/持久化）与 Worker（工具执行/模型推理），强调 **检查点式重启恢复** 与 **会话车道调度**，区别于 NanoBot/ZeroClaw 的“单进程异步化”或 IronClaw 的“通知驱动 Run”模型。 |
| **社区痛点聚焦** | 直面 **生产环境阻断级缺陷**（内存泄漏 350MB→15.5GB、多模态车道楔入、工具拒绝静默丢数据），而非仅追求功能新增；`platinum hermit` 优先级体系显示企业级运维诉求主导。 |
| **风险暴露** | **技术债与稳定性债同步积累**：XL 大体量 PR 积压、硬编码路径泄露发布流程缺陷、P0 缺陷无 Fix PR，若 1-2 周内无法压制内存泄漏/车道饥饿，正式版时间表将滑延。 |
| **生态标杆作用** | 其 **重启恢复机制、安全安装策略、Cron 晚到投递** 等设计正被 IronClaw（NO_WORK 预检）、NanoClaw（Setup Driver）、CoPaw（MCP 双栈）等项目以不同形式借鉴或对标。 |

---

## 4. 共同关注的技术方向（跨项目涌现）

| 技术方向 | 涉及项目 | 具体诉求/进展 |
|----------|----------|---------------|
| **会话/状态持久化可靠性与异步化** | **OpenClaw** (检查点恢复 #130491)、**NanoBot** (完全异步化 #5579)、**ZeroClaw** (TaskRecord 统一生命周期 #9726)、**IronClaw** (持久化通知 Inbox #7899) | 从“写盘即可用”进阶到“重启不丢、主线程不阻、并发不冲”，NanoBot 已合并，OpenClaw/ZeroClaw 在途。 |
| **多模态上下文管控与截断治理** | **OpenClaw** (图片楔入车道 #96834、Codex 截断 #84516)、**CoPaw** (单行超长结果截断落盘 #7331)、**IronClaw** (Gmail/GitHub 原始载荷膨胀 #7891/#7981)、**NanoBot** (Reasoning 回放深度限制 #5584) | 统一痛点：**原始载荷未投影/未压缩直接入 Prompt** 导致 Token 爆炸与推理超时；协同演进“投影→裁剪→制品化→恢复元数据”管线。 |
| **工具调用安全边界与沙箱策略** | **OpenClaw** (security.installPolicy #116489、A2A 响应体限制 #132273)、**ZeroClaw** (Git Shell 参数硬化 #9678、颗粒化沙箱 RFC #6996)、**IronClaw** (扩展输出边界强制登记 #7979)、**CoPaw** (MCP Teardown abort #7329) | 从“允许/拒绝”二元策略转向 **参数规范化、路径物理校验、输出体积限额、幂等性保护** 多层防御。 |
| **多租户/团队协作 Hub 架构** | **CoPaw** (v2.2.0-beta Hub 规划 #7318)、**ZeroClaw** (Desktop Daemon 认证升级 #10236)、**IronClaw** (Agent Lifecycle Hooks Epic #7770)、**LobsterAI** (Plan Model Catalog #2530) | 从单用户 CLI/桌面端向 **RBAC、技能市场、计费配额、审计日志、服务端驱动横幅** 演进。 |
| **Provider/模型协议标准化与回退机制** | **NanoBot** (ProviderAttempt 显式回退 #5574)、**CoPaw** (MCP 双栈自动探测 #7330、OpenAI-compatible 发现修复 #7320)、**Hermes Agent** (自定义 Provider reasoning_effort 透传 #90031)、**ZeroClaw** (Wire Protocol 一等公民 RFC #8396) | 解决 **OpenAI-compatible 长尾适配碎片化**、**MCP 版本共存**、**长思考模型超时误杀** 等互操作顽疾。 |
| **可观测性与运维基建** | **OpenClaw** (Cron 晚到标注 #131603)、**ZeroClaw** (Token 核算可观测 #9713、Windows 测试测量 #10350)、**IronClaw** (租户级遥测 PR #7908)、**LobsterAI** (横幅调度版本门控 #2568) | 统一需求：**用户可见的失败/重试/预算耗尽语义**、**跨平台 CI 度量**、**运营侧动态下发能力**。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|------|----------|----------|--------------|
| **OpenClaw** | **企业级网关/编排中枢**：会话车道、检查点恢复、多租户隔离、供应链安全 | 企业内部部署、SaaS 厂商、需要“重启安全”的生产环境 | **Gateway + Worker 解耦**、持久化状态机、Launchd/Systemd 原生托管、Platinum Hermit 优先级体系 |
| **ZeroClaw** | **运行时内核重构与协议标准化**：Memory Trait 解耦、Wire Protocol、TaskRecord 统一、沙箱颗粒化 | 极客开发者、追求架构洁癖/可组合性的团队、硬件/语音外设集成场景 | **RFC 驱动演进**、Trait-based 存储后端、Desktop Daemon + VoiceHost、Git/Arduino 等异构工具原生支持 |
| **IronClaw** | **通知驱动的 Run 编排与扩展生态**：持久化 Inbox、Projection Seam、Hook 生命周期、租户遥测 | 插件/扩展开发者、需要细粒度工具载荷控制的复杂工作流 | **Run/Notification/Gate 三元模型**、Extension Projection Seam、Canonical Executor 沙箱 Spike、Schema 白名单重建 |
| **NanoBot** | **单进程高性能 Agent 核心**：异步持久化、Provider 统一回退、上下文 Compaction 统管、Ephemeral Block | 个人开发者、本地优先（Local-first）用户、追求低延迟/低资源占用的 CLI/TUI 场景 | **单进程多线程**、Worker Thread 卸载 IO、Runner 统管 Compaction、ProviderAttempt 不可变重试模型 |
| **CoPaw (QwenPaw)** | **多端统一入口与多租户 Hub**：Tauri+Python 混合栈、MCP 双栈兼容、Fallback 模型、系统托盘/后台常驻 | 通用桌面用户、团队协作、需要“开箱即用”多模态体验的非技术用户 | **Tauri 前端 + Python 后端**、ASGI 共享运行时、HttpAutoClient 协议探测、Hub 多租户架构 |
| **Hermes Agent** | **桌面原生体验与插件生态**：Electron + 本地后端、Computer Use、Delegation 多模型路由、技能索引 | 桌面重度用户、需要屏幕交互/语音/本地文件深度集成的场景 | **Electron 主进程 + 子进程后端**、Pre/Post LLM 插件钩子、Skills Index Watchdog、OAuth MCP 集成 |
| **NanoClaw** | **零人工介入部署协议**：Setup Driver 机器模式、Credential Proxy OAuth 刷新、Codex 契约对齐 | CI/CD 自动化、原生 macOS App 封装、容器化批量部署 | **NDJSON 协议驱动 Setup**、Machine Mode 硬性拒绝交互、Channel Loop 驱动化 |
| **LobsterAI** | **商业化产品化交付**：计费模型目录、登录引导、PII 脱敏、运营横幅调度、Vitest 全链路测试 | 企业内部二次开发、ToC 产品化落地、合规敏感场景 | **Electron + React**、Server-driven UI（横幅/模型列表）、Plan Model Catalog 计费集成、Release 分支规范化 |

---

## 6. 社区热度与成熟度分层

| 分层 | 项目 | 特征判据 | 当前阶段 | 关

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-29

> **数据来源**：GitHub API 原始数据（过去 24 小时 Issues/PRs 更新）  
> **统计口径**：2026-08-28 00:00 – 2026-08-29 23:59 (UTC)

---

## 1. 今日速览
- **活跃度评级：🟢 高** — 单日 **20 个 PR 更新**（8 合并/关闭，12 待审）与 **8 个 Issue 更新**（7 新开/活跃，1 关闭），核心维护者集中攻坚“会话持久化异步化”、“Cron 元数据清洗”、“MCP Apps WebUI 支持”等结构性重构。
- **核心交付**：合并了 **会话持久化移出事件循环**（#5579）、**Herdr 面板完整 UI 还原**（#5577）、**Provider 回退路径显式化**（#5574）三大架构级 PR，显著降低主线程阻塞风险并统一了多入口体验。
- **新增风险**：#5582（Cron 引用/提及上下文导致崩溃）已有对应 Fix PR #5587；#5592（`edit_file` 文档歧义）尚无 PR，需关注工具契约一致性。
- **社区信号**：Issue 讨论集中于 **上下文生命周期控制**（ephemeral block、reasoning 回放边界、重试事件透传），反映用户对长会话精细化管理的强诉求。
- **整体趋势**：项目从“功能堆叠”转向“架构治理”，PR 标签普遍带有 `refactor`/`test`/`priority`，工程成熟度跃升。

---

## 2. 版本发布
> 过去 24 小时无新 Release。当前最新版本仍为 **v0.12.x**（具体版本号以 GitHub Releases 页为准）。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 | 链接 |
|----|------|----------|--------|------|
| **#5579** | `bug, webui, performance, p1` | **会话持久化完全异步化**：`SessionManager` 新增 cancellation-safe async API，所有写入（load/save/checkpoint）迁移至 worker thread，主循环零阻塞。 | WebUI、CLI、SDK 所有会话场景 | [#5579](https://github.com/HKUDS/nanobot/pull/5579) |
| **#5577 / #5576** | `bug, documentation, p2` | **Herdr 面板全功能对齐**：复用 standalone TUI 布局/控件，仅保留标题同步，移除冗余元数据上报。 | Herdr 集成、多面板工作流 | [#5577](https://github.com/HKUDS/nanobot/pull/5577) |
| **#5574** | `provider, refactor, p2` | **Provider 回退显式化**：引入不可变 `ProviderAttempt`，统一解析 provider/model/transport/retry policy，消除隐式重试路径。 | 所有模型调用链路 | [#5574](https://github.com/HKUDS/nanobot/pull/5574) |
| **#5569** | `refactor, p2` | **工具执行边界抽离**：`AgentRunner` 剥离 tool-call prepare/execute/batch/error 逻辑至 `nanobot.agent.tools.execution`，单一职责。 | Agent 核心循环、测试解耦 | [#5569](https://github.com/HKUDS/nanobot/pull/5569) |
| **#5575** | `documentation, refactor, p2` | **记忆归档策略简化**：移除 `consolidationRatio`，改为“保留最近 8 条 + 向前扩展至 user turn”确定性归档。 | 长期记忆、Session 体积控制 | [#5575](https://github.com/HKUDS/nanobot/pull/5575) |
| **#5560** | `feat, cli` | **`nanobot` 裸命令直进 Agent**：根命令默认启动终端 Agent，支持 `-m/--workspace/--session` 直透，体验对齐主流 CLI。 | 开发者入口、脚本集成 | [#5560](https://github.com/HKUDS/nanobot/pull/5560) |
| **#5578** | `test, tui` | **Windows 剪贴板测试去抖动**：等待 composer placeholder 代替易变 status-line，消除 CI 假阳性。 | CI 稳定性 | [#5578](https://github.com/HKUDS/nanobot/pull/5578) |

> **进展小结**：今日合并 8 个 PR，其中 3 个 P1/P2 级架构重构已落地，技术债偿还与性能基建同步推进，**主分支可发布质量显著提升**。

---

## 4. 社区热点（高互动 / 高关注）

| 对象 | 互动指标 | 核心诉求 | 分析 |
|------|----------|----------|------|
| **#5251** MCP Apps WebUI 支持 | 👍 0 · 💬 2（跨 24 天） | 在 WebUI 渲染 MCP Server 返回的交互式 UI（`io.modelcontextprotocol/ui`），而非纯文本。 | **长期需求**，涉及前端渲染管线扩展，当前处于设计讨论期，尚无 PR。 |
| **#4429** 自定义 Provider Thinking 风格 | 👍 0 · 💬 2（跨 69 天） | 允许 `custom` provider 注入非标准 thinking 参数（如 VolcEngine `{"thinking":{"type":"enabled"}}`）。 | **厂商适配长尾**，已关闭（可能由 #5574 统一回退路径间接解决）。 |
| **#5586** Ephemeral Runtime-Context Block | 👍 0 · 💬 0（新开） | 引入 `ephemeral` 标记，让运行时上下文块**不持久化、不回放**，仅服务当轮。 | **精细化上下文控制**，配合 #5584（reasoning 回放边界）形成“上下文生命周期三件套”。 |
| **#5585** RetryWaitEvent 透传 Channel | 👍 0 · 💬 0（新开） | 当前 `RetryWaitEvent` 仅 CLI 可见，要求 WebUI/TUI/SDK 同步展示重试倒计时。 | **可观测性补齐**，#5504 正在并行实现（WebSocket 透传 + TUI/WebUI 渲染）。 |
| **#5584** Reasoning/Thinking 回放深度限制 | 👍 0 · 💬 0（新开） | 当前无限回放历史推理块，导致 token 爆炸；需可配置 `max_replay_turns` 或 `token_budget`。 | **成本/性能控制**，与 #5568（Runner 统管 context compaction）协同。 |

> **热点洞察**：社区核心关注点已从“功能是否存在”转向**“生命周期可控、成本可预测、多端体验一致”**，维护者回应迅速（多 Issue 同日已有对应 Fix PR）。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **🔴 Critical** | **#5582** Cron Job 引用/提及上下文导致崩溃 | WebUI quote/@mention 产生的 `RuntimeContextBlock` 被序列化进 Cron，`add` 或 `fire` 时反序列化失败杀死提醒。 | **#5587** (Open) — 快照脱离 JSON、清洗历史 payload | **有 Fix，待合并** |
| **🟠 High** | **#5590** 超大工具结果持久化预览丢关键字段 | 截取前 1200 字符导致 `ok/status/error/artifact` 等根字段不可见。 | **#5590** (Open) — 持久化 JSON 时改为摘要关键字段 | **有 Fix，待合并** |
| **🟡 Medium** | **#5592** `edit_file` 文档未声明选择器互斥 | 文档将 `occurrence/line_hint/replace_all/expected_replacements` 平铺展示，实则互斥。 | 无 | **文档缺陷，无 PR** |
| **🟡 Medium** | **#5581** Windows TUI 退出光标位置错乱 | 退出后光标回到终端历史而非原位，影响嵌入式终端。 | **#5581** (Open) — 禁用 OpenTUI 宽度探测 | **有 Fix，待合并** |
| **🟢 Low** | **#5583** Tool Exception 缺“换策略”提示 | `AgentRunner._run_tool` 仅对 error-result 追加 hint，raised exception 缺失。 | **#5588** (Open) — 统一追加、去重 | **有 Fix，待合并** |

> **稳定性结论**：**Critical 级仅 1 个且已有完整 Fix PR（#5587）**，其余均为 Medium/Low 且均有对应 PR 在审，**风险可控**。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/进度 | 纳入下一版本概率 |
|----------|----------|--------------|------------------|
| **#5251** (Issue) | WebUI 渲染 MCP Apps 交互式 UI | 无 PR，仅讨论 | ⭐⭐☆☆☆（需前端重构，可能 v0.13+） |
| **#5586** (Issue) | `ephemeral` Runtime-Context Block | 无 PR，设计阶段 | ⭐⭐⭐☆☆（配合 #5568 compaction 重构，优先级高） |
| **#5584** (Issue) | Reasoning 回放深度/Token 预算 | 无 PR，设计阶段 | ⭐⭐⭐☆☆（同 #5568，Runner 已统管 fitting） |
| **#5585** (Issue) | RetryWaitEvent 多端透传 | **#5504** (Open, conflict) 正在实现 | ⭐⭐⭐⭐☆（P1，WebSocket 管道已铺设） |
| **#5571 / #5570** (PR) | 记忆显式召回 + 可插拔 Backend | **Open, conflict**，核心重构 | ⭐⭐⭐⭐☆（架构就绪，解冲突即可合并） |
| **#5388** (PR) | MCP Schema Byte Budget 可选开启 | **Open, conflict**，长期演进 | ⭐⭐⭐☆☆（性能优化项，非阻断） |
| **#5568** (PR) | Runner 统管 Context Compaction | **Open**，重构核心循环 | ⭐⭐⭐⭐⭐（已获维护者认可，下一版必入） |

> **路线图判读**：**v0.13 将以“上下文工程”为主题**——Compaction 统管、Reasoning 预算、Ephemeral Block、显式 Memory Recall 形成闭环；MCP Apps UI 与 Schema Budget 为 v0.14 预留。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点/期望 | 代表性言论（意译） | 满意度趋势 |
|------|-----------|---------------------|------------|
| **长会话开发** | 历史推理块无限回放导致上下文窗口耗尽、成本失控 | “每轮都把上万 token 的 thinking 扔回去，根本跑不起长任务” | ⬇️ 不满 ↑ |
| **WebUI 协作** | Cron 提醒若包含 quote/@mention 直接炸掉，不可用 | “设个提醒引用了之前的代码片段，定时器直接死掉” | ⬇️ 不满 ↑ |
| **多 Provider 落地** | 非 OpenAI 标准 thinking 参数无法接入，需 fork 代码 | “VolcEngine/Doubao 用 `thinking.enabled`，custom provider 完全跑不通” | ⬇️ 不满 →（已关闭 #4429，期待 #5574 统一路径） |
| **CLI 入口** | 期望 `nanobot` 直进 Agent，而非额外敲 `agent` | “肌肉记忆：`claude`/`gemini`/`aider` 都不加子命令” | ⬆️ 满意（#5560 已合并） |
| **Windows TUI** | 退出后光标乱跳、剪贴图测试常红 | “每次关窗口都要手动 reset 光标，CI 还要看脸” | ⬆️ 改善中（#5581/#5578 在途） |

---

## 8. 待处理积压（> 30 天未实质推进）

| 对象 | 类型 | 停滞天数 | 关键阻碍 | 维护者行动建议 |
|------|------|----------|----------|----------------|
| **#5251** | Issue (enhancement) | 24 天（创建 8-05） | 前端渲染管线缺 MCP Apps 组件，需设计安全沙箱 | 立项技术调研，拆解为 “Renderer Plugin” 子任务，标记 `help wanted` |
| **#4429** | Issue (feat) | 69 天（创建 6-20） | 已关闭，但根因（Provider 抽象不足）仍在 | 确认 #5574 回退路径重构是否覆盖，若否补文档/示例 |
| **#5388** | PR (feat, conflict) | 16 天（创建 8-13） | 与 #5568/#5571 等上下文重构冲突剧烈 | Rebase 至 main 后按模块拆分小 PR，逐个合入 |
| **#5571 / #5570** | PR (feat, conflict) | 2 天（创建 8-27） | 记忆架构变更面广，测试

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-29

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时产生 **50 个 Issue 更新**（43 新开/活跃、7 关闭）与 **50 个 PR 更新**（46 待合并、4 合并/关闭），零版本发布。  
- **核心痛点聚焦**：OAuth/MCP 会话死锁、Desktop 本地后端启动失败、技能索引过期、多模态插件上下文丢失、推理模型超时保护误触发等稳定性问题集中爆发。  
- **架构重构并行**：Delegation 生命周期分离、SessionDB 读写锁剥离、CLI 更新命令模块化、Claude Agent SDK 集成等大型 PR 同时推进，显示项目处于 **“稳定性攻坚 + 架构升级”双轨并行** 阶段。  
- **社区响应及时**：高热度 Issue（如 #66616 技能索引过期 115 条评论）均在 24h 内有维护者跟进，但部分长期遗留 Bug（OAuth 死锁系列）仍待根治。  
- **整体健康度**：**中等偏上**——新增 Bug 与修复 PR 数量基本持平，但 P1/P2 级崩溃类 Issue 占比较高，需警惕技术债累积。

---

## 2. 版本发布

> 今日无新版本发布。最近一次发布为 `v0.20.6`（2026-08-27），当前主分支处于 `v0.20.7` 预发布积累期。

---

## 3. 项目进展（今日合并/关闭的重要 PR 与 Issue）

| 编号 | 标题 | 类型 | 影响范围 | 状态 | 关键进展 |
|------|------|------|----------|------|----------|
| [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | OAuth-backed MCP server permanently deadlocks after keepalive reconnect | Bug (P2) | MCP/OAuth/会话状态 | **CLOSED** | 确认为 MCP SDK 1.26.0 锁跨任务释放导致，已通过上游 SDK 修复规避 |
| [#81051](https://github.com/NousResearch/hermes-agent/issues/81051) | OAuth MCP connections get permanently stuck after teardown lock race | Bug (P2) | MCP/OAuth/会话状态 | **CLOSED** | 标记为 #38193 重复，同根因 |
| [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) | OAuth MCP servers drop from active toolset mid-session | Bug (P2) | MCP/OAuth/会话状态 | **CLOSED** | 同根因，已纳入上游 SDK 修复 |
| [#93562](https://github.com/NousResearch/hermes-agent/issues/93562) | MCP OAuth servers: 'hermes mcp test'/'login' fail with empty error | Bug (P2) | MCP/OAuth/CLI | **CLOSED** | 确认补丁 `patches/50-mcp-oauth-lock-fix.sh` 未应用，已补齐 |
| [#84132](https://github.com/NousResearch/hermes-agent/issues/84132) | OAuth HTTP MCP server parks forever after auth-flow lock corruption | Bug (P2) | MCP/OAuth/网关 | **CLOSED** | 缓存 Provider 复用导致永不恢复，已修复复用逻辑 |
| [#68824](https://github.com/NousResearch/hermes-agent/pull/68824) | feat(cron): NO_WORK wake-gate parity with OpenClaw precheck | Feature (P3) | Cron/兼容性 | **CLOSED** | 实现跨项目统一的 `NO_WORK` 标记，便于统一预检脚本 |
| [#95909](https://github.com/NousResearch/hermes-agent/pull/95909) | [WIP] feat(google-chat): add KIRA approval-card foundation | Feature (P3) | Google Chat/审批 | **CLOSED** | 仅打地基，**标记不可合并**，完整 Kira 审批闸仍在开发中 |

> **小结**：今日关闭的 7 个 Issue 中 **5 个为 OAuth/MCP 死锁同根因**，说明上游 SDK 修复已落地生效；1 个 Cron 兼容性 PR 合并，1 个 WIP PR 关闭。核心稳定性阻塞点已基本清除，但需验证修复是否覆盖所有变体。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）

| 排名 | 编号 | 标题 | 评论/👍 | 核心诉求 | 分析 |
|------|------|------|---------|----------|------|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **[skills-index-watchdog] Skills index is stale or degraded** | 115 💬 / 0 👍 | 技能索引自动重建 cron (6/18 UTC) 超时 29.8h > 26h 阈值，文档站 `/docs/skills` 依赖该索引 | **运维级阻塞**：索引构建流水线脆弱，需增强监控、补全重试与告警，或放宽阈值；长期应迁移到增量构建 |
| 2 | [#96266](https://github.com/NousResearch/hermes-agent/issues/96266) | **[Desktop][Linux] Profile backend killed ~10s after HERMES_BACKEND_READY** | 6 💬 / 1 👍 | Electron 启动本地后端 10 秒后被杀，报错 “Hermes couldn't start”，重试/修复均失效 | **Desktop 首启体验破坏**：Linux 下进程管理/健康检查逻辑疑有竞态，需复现并补充日志 |
| 3 | [#71998](https://github.com/NousResearch/hermes-agent/issues/71998) | **pre_llm_call plugin context is dropped for multimodal image turns** | 6 💬 / 0 👍 | 多模态（图片）轮次中 `pre_llm_call` 返回的 `context` 被静默丢弃，插件无法注入上下文 | **插件生态缺陷**：多模态代码路径漏传上下文，影响 RAG/记忆类插件，优先级 P3 但影响面广 |
| 4 | [#89241](https://github.com/NousResearch/hermes-agent/issues/89241) | **GLM-5 reasoning models killed by 90s non-stream stale detector** | 4 💬 / 0 👍 | GLM-5.3 思考阶段超 90s 触发非流式超时保护被杀，Coding 端点将 5.2 路由到 5.3 加剧问题 | **模型适配滞后**：需为长思考模型提供可配置 `stale_timeout` 或自动检测流式/非流式 |
| 5 | [#90031](https://github.com/NousResearch/hermes-agent/issues/90031) | **reasoning_effort dropped for custom (OpenAI-compatible) providers** | 4 💬 / 1 👍 | 自定义 OpenAI 兼容端点（如 llama.cpp）丢弃 `reasoning_effort`，回退模型默认值 | **配置一致性**：Provider 抽象层未透传自定义厂商扩展参数，建议统一 `extra_body` 透传机制 |
| 6 | [#68499](https://github.com/NousResearch/hermes-agent/pull/68499) | **fix(delegation): separate lifecycle from task outcome** | — / 0 👍 | 将委托子任务的生命周期状态与逻辑结果解耦，修复网关/TUI/Desktop 误报成功 | **核心架构修复**：Delegation 可靠性基石，关联 #76820 多模型路由需求，审查中 |
| 7 | [#97680](https://github.com/NousResearch/hermes-agent/pull/97680) | **fix(desktop): isolate local backend from public dashboard auth** | — / 0 👍 | 防止 Desktop 管理的回环后端继承公网 Dashboard URL 导致 Cookie/OAuth 认证冲突 | **Desktop 认证隔离**：直接解决 #96266 类启动失败的潜在根因之一，优先级高 |
| 8 | [#97675](https://github.com/NousResearch/hermes-agent/pull/97675) | **fix(mcp): make reconnect retries safe for write tools** | — / 0 👍 | 仅对只读工具在 `session expired` 时自动重试，写工具不重试，避免幂等性风险 | **MCP 安全性**：精准修复重连风暴导致的副作用重复执行，配合 OAuth 死锁修复完善 MCP 稳定性 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | 编号 | 标题 | 状态 | 是否有 Fix PR | 备注 |
|--------|------|------|------|---------------|------|
| **P1 崩溃/不可用** | [#96266](https://github.com/NousResearch/hermes-agent/issues/96266) | Desktop Linux 后端 10s 后被杀 | OPEN | 无 | **阻断 Linux Desktop 首启**，需尽快复现定位 Electron 进程管理/健康检查 |
| **P1 崩溃/不可用** | [#97288](https://github.com/NousResearch/hermes-agent/issues/97288) | Desktop WS 断连：`UnicodeEncodeError` on surrogate `\ud83d` | OPEN | 无 | 全新安装即复现，Emoji 代理对处理缺陷，Windows/ConPTY 环境 |
| **P2 会话永久损坏** | [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | OAuth MCP keepalive 重连后永久死锁 | **CLOSED** | 上游 SDK 修复 | 已关闭，但需回归测试确认所有 OAuth MCP 场景恢复 |
| **P2 会话永久损坏** | [#81051](https://github.com/NousResearch/hermes-agent/issues/81051) | OAuth MCP teardown 锁竞争导致永久 parked | **CLOSED** | 上游 SDK 修复 | 同上 |
| **P2 会话永久损坏** | [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) | OAuth MCP 中途掉出工具集 + 120s 挂起 | **CLOSED** | 上游 SDK 修复 | 同上 |
| **P2 功能失效** | [#93911](https://github.com/NousResearch/hermes-agent/issues/93911) | Desktop relay 放弃 `bot_relay.deliver` 超过 30s | OPEN | 无 | 影响 Computer Use 等长耗时 Bot 调用，需放宽或可配置超时 |
| **P2 数据损坏** | [#97321](https://github.com/NousResearch/hermes-agent/issues/97321) | 压缩摘要单周期插入两次（竞态） | OPEN | 无 | 导致上下文标记重复，影响长会话可读性与 Token 计数 |
| **P2 配置失效** | [#65038](https://github.com/NousResearch/hermes-agent/issues/65038) | `delegation.fallback_providers` 被忽略 | OPEN | 无 | 配置键被接受但不生成效，文档与实现不一致 |
| **P2 模型适配** | [#89241](https://github.com/NousResearch/hermes-agent/issues/89241) | GLM-5.3 90s 非流式超时被杀 | OPEN | 无 | 需针对长思考模型调整 stale detector 或强制流式 |
| **P2 配置失效** | [#90031](https://github.com/NousResearch/hermes-agent/issues/90031) | 自定义 Provider 丢弃 `reasoning_effort` | OPEN | 无 | 影响本地 llama.cpp 等自托管模型推理控制 |
| **P3 体验/兼容** | [#77423](https://github.com/NousResearch/hermes-agent/issues/77423) | `search_files` 非 glob 模式静默返回 0 结果 | OPEN | 无 | 无警告/回退，易误

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-29

> **数据来源**：GitHub API（nanocoai/nanoclaw），统计窗口：过去 24 小时  
> **报告生成时间**：2026-08-29 08:00 UTC

---

## 1. 今日速览

- **活跃度评级：🔥 高** —— 过去 24 小时 **50 条 PR 更新**、**3 条 Issue 活动**，零版本发布，呈现典型的“密集开发、稳定交付”节奏。
- **核心动向**：`core-team` 主导的 **Setup Driver 重构堆栈（PR #3633–#3640）** 集中推进，8 个关联 PR 同日更新，标志着“机器驱动安装/卸载”协议即将落地；同期 **Credential Proxy OAuth 自动刷新**（PR #2363、#1102）与 **Codex Provider 契约收紧**（PR #2361）完成合并，消除了长期运行时的 401 断连与上下文溢出隐患。
- **风险点**：Issue #3645 反映 `nanoclaw.sh` 启动卡死、无日志，属 **P0 级阻断性缺陷**，目前仅有用户互相确认复现，尚无修复 PR；Issue #3643 指出硬编码 30 分钟绝对上限误杀长轮次本地模型任务，配置缝隙缺失，需尽快提供可配置化方案。
- **社区健康度**：新增 Issue 多为结构化缺陷/增强，模板规范（PR #3644、#2326）已推进至审查阶段，未来分类统计将更准确；长期积压 PR（#216 安全绕过、#2003 语音技能 V2）仍未合并，建议本周安排专项 Review。

---

## 2. 版本发布

**无新版本发布**。当前主分支累积变更以内部重构、协议完善为主，预计下一版本（v0.14.x 或 v0.15.0）将打包 Setup Driver、Credential Proxy 刷新、Codex 契约更新三大里程碑。

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 对项目的推进意义 |
|----|------|----------|------------------|
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) | ✅ **Closed/Merged** | 替换陈旧 Codex SDK 实现，对齐 `codex app-server` JSON-RPC 契约；`CODEX_MODEL` 可选化，移除 40K 手工压缩指引 | 消除 Codex 集成的协议漂移与上下文管理误导，**Provider 层面稳定性跃升** |
| [#2363](https://github.com/nanocoai/nanoclaw/pull/2363) | ✅ **Closed/Merged** | 原生凭据代理主动刷新 Anthropic OAuth Token（v2 移植 #1102），OneCLI 路径不受影响 | **根治长运行容器 1 小时后 401 静默失效**，提升生产可用性 |
| [#1102](https://github.com/nanocoai/nanoclaw/pull/1102) | ✅ **Closed** | 同主题初版实现，提供设计参考 | 为 #2363 奠定方案基础 |
| [#3633–#3640](https://github.com/nanocoai/nanoclaw/pull/3633) | 🔄 **Open (Stack)** | Setup Driver 协议全栈：Claude 认证下沉、机器模式硬性拒绝非结构化 Provider、NDJSON 渲染一致性测试、服务健康回执门控、argv/env 密钥拒收、机器卸载路径、首轮聊天字节上限与沙箱、Channel Loop 驱动化 | **将交互式 Setup 彻底协议化**，为原生 macOS App、CI/CD、自动化运维解锁“零人工介入”部署 |
| [#3644](https://github.com/nanocoai/nanoclaw/pull/3644) | 🔄 **Open** | 新增 GitHub Issue Forms（Bug/Enhancement/Skill） | 规范上报结构，配合 #2326 模板，提升分流效率 |
| [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | 🔄 **Open** | Agent Runner：明确 `send_card` 丢弃回调动作 | 修复卡片交互状态不同步，属修正类改进 |

> **合并/关闭统计**：5 条（其中 2 条核心修复已合并，3 条早期 PR 清理关闭）。  
> **待合并积压**：45 条，**其中 8 条属 Setup Driver 栈**，建议按依赖顺序批量合并。

---

## 4. 社区热点

| 排名 | 对象 | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | **Issue [#3645](https://github.com/nanocoai/nanoclaw/issues/3645)** `bash nanoclaw.sh` 卡死无日志 | 💬 2 条评论，👍 0 | **安装入口完全不可用**，用户在 Arch/Ubuntu 均复现，怀疑 `setup/auto.ts` 机器模式分支或 TTY 检测死循环 |
| 2 | **Issue [#3643](https://github.com/nanocoai/nanoclaw/issues/3643)** 硬编码 30min `ABSOLUTE_CEILING_MS` 误杀长任务 | 💬 0，👍 0 | 本地模型长轮次（>30min）被宿主扫描强杀，**缺乏配置缝隙**，阻断“自托管长上下文”场景 |
| 3 | **PR [#3644](https://github.com/nanocoai/nanoclaw/pull/3644)** Issue Forms | 💬 0 | 维护者主动治理：标准化入口，减少低质量 Issue 噪音 |
| 4 | **PR [#216](https://github.com/nanocoai/nanoclaw/pull/216)** Secret Sanitization Bypass via `/proc` | 长期关注 | 安全团队关注度高，**CVE 潜在风险**，虽标记 Blocked 但未见后续推进 |

> **洞察**：用户痛点集中在 **“装不上”**（#3645）与 **“跑不长”**（#3643），均为核心路径阻断；维护者侧重 **工程化基建**（Setup Driver、Issue Forms），短期内社区可见价值与内部重构存在错位。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0 阻断** | [#3645](https://github.com/nanocoai/nanoclaw/issues/3645) | `bash nanoclaw.sh` 无任何输出挂起，需 `SIGKILL` 退出 | **全量新用户/重装用户** | ❌ 无 |
| **P1 严重** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | 长轮次本地模型任务在 1,800,000 ms 硬上限被 `Killing container past absolute ceiling` | 自托管/长上下文用户 | ❌ 无（需引入可配置 `ceilingMs` 或按 provider 动态计算） |
| **P2 重要** | [#216](https://github.com/nanocoai/nanoclaw/pull/216) | `/proc/self/environ`、`Read` 工具绕过 `unset` 导致密钥泄露 | 多租户/共享宿主环境 | 🔄 PR 存在但 **Blocked**，需安全审查通过 |
| **P3 一般** | [#3599](https://github.com/nanocoai/nanoclaw/issues/3599) | 任务失败原因不区分 `rate_limit/quota`，导致自动重试不可行 | 定时任务/高并发用户 | ❌ 无（需持久化分类字段） |

> **建议**：优先组织 #3645 复现与定位（建议在 `setup/auto.ts` 入口加 `--verbose` 与超时守护）；#3643 可引入 `NCL_ABSOLUTE_CEILING_MS` 环境变量热修复。

---

## 6. 功能请求与路线图信号

| 需求来源 | 信号强度 | 可能纳入版本 | 备注 |
|----------|----------|--------------|------|
| **Issue [#3599](https://github.com/nanocoai/nanoclaw/issues/3599)** 持久化 `rate_limit/quota` 分类以支持自动重试 | 🔥 高（运维刚需） | v0.15.x | 需配合 Scheduler 与 Task Runner 存储层变更 |
| **PR [#2003](https://github.com/nanocoai/nanoclaw/pull/2003)** Voice Transcription V2（容器侧、主权优先） | 🟡 中（技能生态） | v0.16+ | 依赖容器侧音频管道成熟，维护者要求“Host 极简” |
| **PR [#3633–#3640] Setup Driver 协议栈** | 🔥 高（核心基建） | **v0.14.x / v0.15.0** | 已进入收敛期，文档 PR #3485 同步推进 |
| **PR [#3644](https://github.com/nanocoai/nanoclaw/pull/3644)** Issue Forms | 🟢 低（治理） | v0.14.x | 纯文档/配置，阻力极小 |

> **路线图推断**：**Setup Driver 与 Credential Proxy 稳定性**将锁定下一版本主题；**长任务上限可配置化**（#3643）极大概率作为热修复回港至 v0.14.x。

---

## 7. 用户反馈摘要

| 来源 | 代表性原声 | 痛点/期望 |
|------|------------|-----------|
| **Issue #3645 评论** | “`bash nanoclaw.sh` 就卡在那里，没有任何日志、没有报错、没有进度条，等了 10 分钟也没反应。” | **首体验完全受阻**，期望最小可用日志或 `--dry-run` 自检 |
| **Issue #3643 描述** | “本地模型跑 30 分钟以上的 turn 直接被 host sweep kill，日志只有一行 `WARN Killing container past absolute ceiling`，完全没有配置项调整。” | **硬编码上限破坏本地长上下文工作流**，需运行时可配置 |
| **Issue #3599** | “`ncl tasks list` 里失败任务看不出是 quota 用尽还是代码报错，导致自动重试策略无法落地。” | **可观测性缺失**，期望失败原因结构化入库 |
| **PR #216 讨论** | “`/proc/self/environ` 读取到启动时的明文密钥，`unset` 根本拦不住。” | **安全合规焦虑**，企业用户阻塞采用 |

> **满意度侧写**：核心贡献者对架构演进（Setup Driver、Provider 契约）高度认可；**末端用户对安装成功率、长任务稳定性、失败可诊断性**不满显著。

---

## 8. 待处理积压（需维护者关注）

| 对象 | 停滞时长 | 重要性 | 建议行动 |
|------|----------|--------|----------|
| **PR [#216](https://github.com/nanocoai/nanoclaw/pull/216)** Security: Secret Sanitization Bypass | ~190 天 | 🔴 **Critical** | 安排安全专项 Review，解除 Blocked；若方案争议大，启动威胁建模会议 |
| **PR [#2003](https://github.com/nanocoai/nanoclaw/pull/2003)** Voice Transcription V2 | ~126 天 | 🟡 High | 确认容器侧音频依赖是否已就绪，给出明确 Merge/Close 决策 |
| **Issue [#3645](https://github.com/nanocoai/nanoclaw/issues/3645)** Install Hang | 0 天（新） | 🔴 **Critical** | **今日内**指派 Owner 复现并输出 RCA，必要时回滚 `setup/auto.ts` 近期变更 |
| **Issue [#3643](https://github.com/nanocoai/nanoclaw/issues/3643)** Hardcoded Ceiling | 1 天 | 🟠 High | 在 `agent-runner` 或 `host-sweep` 引入可配置上限，发布 Hotfix |
| **PR [#3392](https://github.com/nanocoai/nanoclaw/pull/3392)** Slack DM 隔离 | 9 天 | 🟢 Medium | 核心团队已标记，建议本周合并进主分支 |

---

### 📌 给维护者的三条行动建议

1. **火线修复 #3645**：在 `nanoclaw.sh` 入口注入 `set -x` 与 30s 超时守护，先恢复可用性，再根因定位。  
2. **热修复 #3643**：引入 `NCL_ABSOLUTE_CEILING_MS` 环境变量覆盖，配套文档一行接入，避免长任务用户流失。  
3. **推进 Setup Driver 栈合并**：将 #3633–#3640 视为单一原子变更集，安排一次集成测试全流程跑通后批量合并，减少主分支震荡。

---

*报告自动生成，数据截止 2026-08-29 08:00 UTC。如有遗漏或异议，请以 GitHub 实时数据为准。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-29

---

## 1. 今日速览
**活跃度评级：🔥 高（核心团队全员投入，发布后稳定性冲刺期）**

过去 24 小时，IronClaw 交付了 **v1.4.0 稳定版**（81 commits since v1.3.0），核心团队随即进入“发布后修复与架构演进”双轨并行模式：**15 个 PR 合并/关闭**，覆盖通知持久化、工具搜索去噪、压缩循环硬化、Result-read 预算修复、内存错误语义修正等生产级稳定性议题；**13 个 PR 仍在评审**，聚焦于压缩阈值自适应、主循环终止条件、租户级遥测、沙箱执行器原型等架构级演进。Issue 端新增 3 个高优性能回归（GitHub/Gmail 工具载荷膨胀、Schema 白名单静默丢字段）与 3 个 WebUI 模型能力感知需求，显示社区对 **Token 成本、模型多模态路由、长任务可观测性** 的强烈诉求。

---

## 2. 版本发布
### 📦 **ironclaw-v1.4.0** (2026-08-27 发布，今日持续推送)
- **性质**：稳定版推广（从 `1.4.0-rc.1`），含 81 commits，基于 v1.3.0。
- **核心新增**：
  - **持久化通知收件箱**：Run 权威结果与可执行 Gate 写入用户级 Inbox，WebUI 可直接渲染。
  - **自动化预运行失败、认证失效、资源/策略阻塞** 三类通知落地（见 #7873/#7875/#7874 及对应 PR）。
- **破坏性变更**：无显式 Breaking Changes 标记，但通知 Schema 新增字段，建议前端同步升级。
- **迁移建议**：
  - 运行 `ironclaw migrate` 更新 Inbox 表结构。
  - 检查自定义 `RunFailed`/`AuthenticationRequired`/`RunBlocked` 处理逻辑是否兼容新 Gate 字段。
- **链接**：[Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0)

---

## 3. 项目进展（已合并/关闭的关键 PR）
| PR | 类型 | 核心推进 | 关联 Issue |
|----|------|----------|------------|
| [#7899](https://github.com/nearai/ironclaw/pull/7899) | **Feat/Notif** | 自动化预运行失败发布耐久 `RunFailed` 通知，稳定身份派生自 Fire Ref | #7873 |
| [#7901](https://github.com/nearai/ironclaw/pull/7901) | **Fix/Notif** | 认证 Gate 持久化前置于 Enrichment，防止 Provider 故障丢失恢复入口 | #7875 |
| [#7900](https://github.com/nearai/ironclaw/pull/7900) | **Feat/Notif** | 资源/策略阻塞映射为 `RunBlocked`，Gate Ref 去重避免通知风暴 | #7874 |
| [#7965](https://github.com/nearai/ironclaw/pull/7965) | **Perf/ToolSearch** | BM25 阈值从 >0 提升，消除“单词匹配即命中”噪音，减少模型误读 | — |
| [#7982](https://github.com/nearai/ironclaw/pull/7982) | **Fix/Tools** | `builtin.result_read` 区分两类预算失败并给出正确恢复提示，修复 5 次重试死循环 | #7981 |
| [#7985](https://github.com/nearai/ironclaw/pull/7985) | **Fix/Memory** | 文档缺失归类为 `DomainFailure` 而非 `InputEncode`，修复用户可见错误语义 | — |
| [#7975](https://github.com/nearai/ironclaw/pull/7975) / [#7976](https://github.com/nearai/ironclaw/pull/7976) / [#7978](https://github.com/nearai/ironclaw/pull/7978) | **Fix/Compaction** | 三连击硬化压缩：显式边界切分、阈值源自模型窗口、累积输入上界 | — |
| [#7977](https://github.com/nearai/ironclaw/pull/7977) | **Fix/Loop** | 恢复主循环“主导重复输出终止”与“交互墙钟上限”，修复 70 分钟/593 calls 超时 | — |
| [#7980](https://github.com/nearai/ironclaw/pull/7980) | **CI** | 集成测试组拓扑预检，防止分组目录错配落入通用分区 | — |
| [#7979](https://github.com/nearai/ironclaw/pull/7979) | **Test/Ext** | 扩展编码/加密/二进制/JSON-RPC 输出边界强制登记所有者，Fail-closed | — |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) / [#5084](https://github.com/nearai/ironclaw/pull/5084) | **Chore/UI** | 关闭长期搁置的设计系统与自动化页面重设计 PR，清理积压 | — |

> **整体前进度**：v1.4.0 发布后 48 小时内完成 **通知链路闭环、工具链去噪、压缩/主循环兜底、错误语义修正** 四大稳定性里程碑，技术债偿还比例高。

---

## 4. 社区热点（高讨论/高关注 Issues & PRs）
| 项 | 标题 | 互动 | 核心诉求分析 |
|----|------|------|--------------|
| **Issue [#7891](https://github.com/nearai/ironclaw/issues/7891)** | `perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s inference` | 10 💬 | **生产级性能痛点**：Gmail 两封邮件 49 KB 原始 MIME 头未投影直接入 Prompt，导致 19.7 s/turn、14.3 s 纯推理。要求能力载荷**投影/裁剪**优先级 P0。 |
| **Issue [#7981](https://github.com/nearai/ironclaw/issues/7981)** | `perf(github, tools): raw list_repos payload + unhinted result_read cost 64 calls / 3m01s` | 3 💬 | **工具链放大器**：GitHub 98 个 Repo 返回 519 KB 原始字段，模型被迫 61 次 `result_read` 仍失败。需 **Server-side Projection + Schema Hint** 双管齐下。 |
| **Issue [#7986](https://github.com/nearai/ironclaw/issues/7986)** | `perf(github): list_repos ships 81 raw fields/repo — 519 KB, projection seam unused` | 0 💬 | 同上根因，明确指出扩展包自带 Projection Seam 未被调用，属**集成缺陷**。 |
| **Issue [#7987](https://github.com/nearai/ironclaw/issues/7987)** | `tool schemas: flatten_top_level rebuilds from whitelist, silently discarding constraints` | 0 💬 | **Schema 静默丢字段**：白名单重建导致非禁用顶层约束全部丢失，无警告/测试/诊断，影响 Provider 侧校验。 |
| **Issue [#7770](https://github.com/nearai/ironclaw/issues/7770)** | `Epic: hook the agent lifecycle — after-turn, before-turn, compaction, tool-result seams` | 4 💬 | **架构可扩展性**：将“生命周期挂钩”从核心剥离为 Hook 注册，支持声明式扩展，分阶段交付。 |
| **PR [#7908](https://github.com/nearai/ironclaw/pull/7908)** | `feat(loop): spike canonical executor in persistent user sandbox` | — | **沙箱架构 Spike**：将 Canonical Loop 搬入用户级 Docker 沙箱，保留调度/授权/模型网关在 Host，探索 CLI 免 plumbing。 |

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 已有 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 (生产阻塞)** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | Gmail 工具未投影载荷导致 19.7 s/turn，纯推理 14.3 s | 无 | 🔴 Open |
| **P0 (生产阻塞)** | [#7981](https://github.com/nearai/ironclaw/issues/7981) | GitHub `list_repos` 519 KB 触发 64 calls / 3 min | [#7982](https://github.com/nearai/ironclaw/pull/7982) (修复 result_read 提示) | 🟡 部分缓解 |
| **P1 (功能缺陷)** | [#7986](https://github.com/nearai/ironclaw/issues/7986) | GitHub 扩展自带 Projection 未启用，81 字段全量下发 | 无 | 🔴 Open |
| **P1 (功能缺陷)** | [#7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` 白名单重建静默丢弃约束 | 无 | 🔴 Open |
| **P2 (体验回归)** | [#7930](https://github.com/nearai/ironclaw/issues/7930) | 工具参数无法引用前序 Result，强制重发载荷消耗 Output Tokens | 无 | 🔴 Open |
| **P2 (已修复)** | [#7981](https://github.com/nearai/ironclaw/issues/7981) 关联 | `result_read` 两类预算失败合并提示误导模型 | [#7982](https://github.com/nearai/ironclaw/pull/7982) | ✅ Merged |
| **P2 (已修复)** | — | 文档缺失报错为 “input could not be encoded” | [#7985](https://github.com/nearai/ironclaw/pull/7985) | ✅ Merged |
| **P2 (已修复)** | — | 主循环无进度终止缺失，70 min 超时 | [#7977](https://github.com/nearai/ironclaw/pull/7977) | 🟡 Open (审查中) |
| **P2 (已修复)** | — | 压缩累积输入无上界，单轮超阈值切分不干净 | [#7975](https://github.com/nearai/ironclaw/pull/7975) [#7976](https://github.com/nearai/ironclaw/pull/7976) [#7978](https://github.com/nearai/ironclaw/pull/7978) | 🟡 Open (审查中) |

---

## 6. 功能请求与路线图信号
| 需求 | 来源 | 成熟度 | 纳入下版本概率 | 备注 |
|------|------|--------|----------------|------|
| **Agent Lifecycle Hooks (Epic)** | [#7770](https://github.com/nearai/ironclaw/issues/7770) | 设计完备，分 4 阶段 | **高** | 核心成员 serrrfirat 推动，符合 “Hook 而非 Core Edit” 架构方向。 |
| **Persistent Per-User Sandboxed Executor** | [#7903](https://github.com/nearai/ironclaw/issues/7903) / [#7908](https://github.com/nearai/ironclaw/pull/7908) | Spike PR 已开，风险标高 | **中** | 需解决 Host↔Sandbox 权限边界与 CLI plumbing，v1.5 可能仅实验性合入。 |
| **Tool Argument Result Reference** | [#7930](https://github.com/nearai/

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-29

> **数据周期**：2026-08-28 00:00 – 2026-08-28 23:59 (UTC)  
> **数据来源**：GitHub Issues / PRs / Releases 实时导出

---

## 1. 今日速览

*   **发布新版本**：v2026.8.28 正式发布，核心聚焦于**登录引导优化**、**计费模型目录配置**及**账号/手机号脱敏修复**。
*   **工程质量显著提升**：合并 9 个 PR，其中包含 3 个核心模块（命令安全、记忆判断、记忆提取）的 **Vitest 单测补全**，以及 **Gemini API URL 拼接 Bug 修复**，技术债偿还力度大。
*   **用户交互体验增强**：新增会话详情页 **页内搜索** 与 **模型列表折叠/侧边栏横幅调度** 功能，响应高频交互诉求。
*   **社区运营痛点显现**：微信群满员、用户催促 v4pro 更新，官方社群承载力不足。
*   **整体健康度**：⭐⭐⭐⭐☆（发布节奏稳、测试覆盖率提升快，但长期 Stale Issue 积压、社群运营滞后）。

---

## 2. 版本发布

### **LobsterAI 2026.8.28** ([Release Notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.28))

| 变更类型 | 核心内容 | 关联 PR | 影响范围 |
| :--- | :--- | :--- | :--- |
| **Feat (Auth)** | **登录引导优化**，改进首次登录/注册流程体验 | [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) | Renderer / Main |
| **Feat (Settings)** | **新增 Plan Model Catalog** 配置，支持更灵活的模型订阅/计费模型管理 | [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) | Settings / Billing |
| **Fix (Account)** | **修复手机号脱敏合并冲突**，统一 `136****7834` 掩码格式，替换真实手机测试数据 | [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570), [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571), [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569) | Renderer (Account Menu) |
| **Feat (UI/UX)** | **模型列表折叠** + **侧边栏横幅服务端调度**（版本门控、本地过期、缓存刷新） | [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | Renderer (Sidebar, Model Selector) |
| **Chore** | 发布分支合并与冲突解决 | [#2572](https://github.com/netease-youdao/LobsterAI/pull/2572), [#2567](https://github.com/netease-youdao/LobsterAI/pull/2567) | Build / Release Pipeline |

> **⚠️ 迁移提示**：本版本涉及账号菜单渲染逻辑重构及 Model Catalog 数据结构变更，建议自建/二次开发用户拉取最新 `release/2026.8.24` 分支全量构建，注意检查 `account` 相关本地存储兼容性。

---

## 3. 项目进展

今日共 **合并/关闭 9 个 PR**，核心推进如下：

| PR | 类型 | 核心价值 | 代码变动热度 |
| :--- | :--- | :--- | :--- |
| [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) | **Test (Critical)** | **为 `commandSafety` 及 `coworkMemoryJudge` 补全单测**。覆盖危险命令检测（`rm -rf` 等）与记忆质量评分逻辑，**直接消除核心安全/质量模块零测试风险**。 | +2 files, ~300 LOC tests |
| [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | **Fix (Bug)** | **修复 Gemini `/v1` BaseURL 拼接 Off-by-one 错误**。解决 `https://.../v1` 变为 `.../v1v1beta/...` 的致命请求失败。 | 1 line fix, high impact |
| [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | **Feat (UX)** | **会话详情页页内搜索**。支持 `Ctrl/Cmd+F`、TreeWalker 精准定位、CSS Custom Highlight 高亮、键盘逐个跳转，**大幅提升长上下文检索效率**。 | +New component + hooks |
| [#1149](https://github.com/netease-youdao/LobsterAI/pull/1149) *(关联 Issue #1149)* | **Test (Stale->Active)** | **`coworkMemoryExtractor` 35 单测用例**（问句过滤、正则提取、多层过滤），虽标记 Stale 但今日同步推进，**记忆提取链路测试覆盖率归零破冰**。 | +1 test file |
| [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | **Feat (UI/Arch)** | **可折叠 More Models 区 + 服务端驱动横幅调度**。引入版本门控、本地 TTL、缓存降级、刷新重试机制，**为运营侧动态下发奠定基础**。 | Renderer + Main sync logic |
| [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) | **Fix (Stale)** | **新建同名 Agent 任务记录未加载**。修复状态切换竞态，虽标记 Stale 但修复了真实用户流程阻断。 | State management fix |

> **进度总结**：本周期完成 **安全兜底（测试）**、**模型兼容（Gemini）**、**核心交互（搜索/折叠）**、**运营基建（横幅）** 四大维度交付，迭代效率高。

---

## 4. 社区热点

| 热度排名 | Issue/PR | 互动数据 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **🔥 TOP 1** | [#2536 微信群已满人](https://github.com/netease-youdao/LobsterAI/issues/2536) | 💬 2 评论 / 👍 0 / 创建 3 天内关闭 | **社群运营承载力不足**。用户渴望官方即时交流渠道，建议：1) 开设第 2/3 群并置顶公告 2) 引入 Discord/Telegram/飞书群分流 3) 设置自动欢迎机器人引导至 GitHub Discussions。 |
| **🔥 TOP 2** | [#2489 快更新 v4pro！](https://github.com/netease-youdao/LobsterAI/issues/2489) | 💬 3 评论 / 👍 0 / 跨周期 14 天 | **版本节奏焦虑**。用户对 "v4pro" 命名版本有强预期，建议在 README/Changelog 明确里程碑定义与预计发布窗口，或提供 Nightly/Insider 渠道缓解等待焦虑。 |
| **📌 关注** | [#1151 Gemini URL Bug](https://github.com/netease-youdao/LobsterAI/issues/1151) | 💬 1 评论 / 👍 0 | **厂商兼容性细节**。虽已修复合并 (#1153)，但反映出多模型厂商 BaseURL 规范不一，建议增加 `baseURL` 规范化工具函数与集成测试矩阵。 |

---

## 5. Bug 与稳定性

| 严重度 | 问题描述 | 状态 | 修复 PR | 影响模块 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (阻断)** | **Gemini `/v1` BaseURL 拼接缺失 `/` 导致 404** | ✅ **已修复并合并** | [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | `coworkFormatTransform` / Model Provider |
| **P1 (功能缺失)** | **新建同名 Agent 任务记录未自动加载** | ✅ **已修复 (Stale PR)** | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) | Agent Management / State Sync |
| **P2 (隐患)** | **核心安全/质量模块零测试覆盖** (`commandSafety`, `coworkMemoryJudge`, `coworkMemoryExtractor`) | ✅ **已补全单测** | [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156), [#1149](https://github.com/netease-youdao/LobsterAI/pull/1149) | Core Libs (Safety, Memory) |
| **P3 (UI/UX)** | **手机号脱敏合并冲突/测试数据泄露真实号码** | ✅ **已修复** | [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) 等 | Account UI / Test Fixtures |

> **稳定性结论**：今日无崩溃/数据丢失上报，核心风险项（安全检测、模型兼容、记忆提取）均已通过单测或修复覆盖，**版本发布质量可信度高**。

---

## 6. 功能请求与路线图信号

| 用户需求 / 信号 | 来源 | 当前进展 | 纳入下版本概率 | 分析 |
| :--- | :--- | :--- | :--- | :--- |
| **会话页内搜索** | 内部 PR [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | ✅ **已合并入 v2026.8.28** | 100% | 高频刚需，实现质量高（Range+Highlight API），已交付。 |
| **模型列表折叠 / 运营横幅下发** | PR [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | ✅ **已合并入 v2026.8.28** | 100% | 兼顾 UI 简洁与商业化运营，架构设计完善（版本门控/TTL），已交付。 |
| **Plan Model Catalog (计费模型目录)** | PR [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) | ✅ **已合并入 v2026.8.28** | 100% | 商业化基建核心，配合后端计费系统上线。 |
| **v4pro 大版本** | Issue [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | 🟡 **讨论中/规划中** | 中 (需官方确认) | 社区呼声高，但无公开 Roadmap Issue，建议建立 `meta/v4pro-tracking` Issue 收敛预期。 |
| **多社群渠道 (Discord/Telegram)** | Issue [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | 🔴 **未响应** | 高 (运营层面) | 低成本高收益，建议下周内由 Community Manager 推进。 |

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户画像与痛点：

1.  **重度 Agent 用户** (`nimamasl114514` @ #2489)：**极度期待 v4pro**，暗示现有版本在复杂任务编排、长上下文或多模态上有短板，且愿意为“Pro”级能力付费/等待。
2.  **社群依赖型用户** (`MurrayHubert` @ #2536)：**英文提问、微信群满员即反馈**，典型“即时沟通偏好”群体，对 GitHub Issue 响应时效不满，需低门槛实时支持渠道。
3.  **开发者/贡献者** (`MaoQianTu` @ #1149, #1151, #1154)：**关注代码健壮性**，主动提交高质量测试与修复 PR，但部分 PR 长期 Stale (3 月->8 月)，反映 **Review 吞吐瓶颈** 或 **优先级调度不透明**。
4.  **隐私敏感用户** (隐含 @ #2570)：**真实手机号出现在测试数据/账号菜单** 引发修复，说明用户对 PII 脱敏极其敏感，任何测试/演示数据必须合成。

---

## 8. 待处理积压

> **以下长期未响应/推进缓慢的重要项，建议维护者在下周站会/规划会点名处理：**

| 项目 | 类型 | 滞留时长 | 核心阻碍 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) | **PR (Stale)** | **~5 个月** (2026-03-31 创建) | 标记 Stale 但今日仍在更新，修复真实 Bug | **立即 Review 合并** 或 明确关闭原因；若已由其他 PR 修复需关联说明。 |
| [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) / [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) | **Issue (Stale)** | **~5 个月** | 测试补全类任务优先级长期被挤占 | **设立 "Tech Debt Sprint"** 或引入 **"Test Cover

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-29

---

## 1. 今日速览
- **整体活跃度：低** —— 过去 24 小时仅新增 1 个 Issue，无 PR 活动、无版本发布，代码库处于维护观察期。
- **核心动态**：用户 `maop` 报告了一个 **沙箱运行阻塞 Bug（#1246）**，描述在添加节点后无法在沙箱中运行，且附带了完整的前置检查清单，表明问题可复现且未被历史 Issue 覆盖。
- **社区互动**：该 Issue 目前 0 评论、0 点赞，维护团队尚未响应，需关注后续分流与修复进度。
- **交付风险**：无在制 PR 意味着该阻塞性 Bug 短期内缺乏修复通道，若沙箱为核心交付路径，可能影响下游用户体验。
- **建议**：优先安排维护者确认 #1246 复现步骤，并评估是否需发布热修复版本。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
> 过去 24 小时无 PR 合并或关闭，项目代码库无实质性前向推进。

---

## 4. 社区热点
| Issue/PR | 标题 | 互动数据 | 核心诉求 | 链接 |
|----------|------|----------|----------|------|
| **#1246** | **[Bug]: can't run on sandbox after a node is added** | 💬 0 评论 · 👍 0 | 用户在完成节点添加后，沙箱环境启动失败，阻断开发/测试流程；需维护者确认是否为回归或配置缺陷 | [#1246](https://github.com/moltis-org/moltis/issues/1246) |

*当前仅此一条活跃 Issue，暂无高讨论度话题。*

---

## 5. Bug 与稳定性
| 严重程度 | Issue | 现象描述 | 复现状态 | Fix PR | 链接 |
|----------|-------|----------|----------|--------|------|
| **P0 - 阻塞** | **#1246** | 添加节点后沙箱无法运行，直接影响核心工作流 | 用户声称已按清单排查，最新版本可复现 | 无 | [#1246](https://github.com/moltis-org/moltis/issues/1246) |

> ⚠️ **关注点**：该 Bug 标记为 `bug` 且通过预检清单，建议立即纳入 Triage 流程；若沙箱为 CI/CD 或用户侧核心环节，建议评估发布 Hotfix。

---

## 6. 功能请求与路线图信号
> 过去 24 小时无新增 Feature Request 或增强类 Issue，路线图无新信号。

---

## 7. 用户反馈摘要
- **痛点聚焦**：沙箱环境在节点变更后失效，提示“节点添加 → 沙箱启动”链路存在断裂。
- **使用场景**：开发/测试阶段依赖沙箱验证节点逻辑，属于高频核心路径。
- **情绪倾向**：Issue 描述规范、情绪克制，但 0 回复可能导致用户焦虑；建议维护者在 24h 内给出首轮响应（确认/分流/复现计划）。

---

## 8. 待处理积压提醒
> 数据范围仅覆盖过去 24 小时，无法识别长期积压。建议维护者定期执行以下查询：
- `is:issue is:open sort:updated-asc` —— 发现超 30 天无更新的高优先级 Issue
- `is:pr is:open sort:updated-asc` —— 清理长期搁置的 Draft/待 Review PR

---

**报告生成时间**：2026-08-29 00:00 UTC  
**数据来源**：GitHub REST API / GitHub GraphQL（moltis-org/moltis）  
**下一份报告**：2026-08-30 同步发布

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-08-29

> **数据来源**：GitHub `agentscope-ai/CoPaw` (QwenPaw) 仓库近 24 小时原始数据聚合  
> **统计窗口**：2026-08-28 00:00 – 2026-08-29 00:00 (UTC)

---

## 1. 今日速览
- **发布节奏加速**：连续两天推出 `v2.2.0-beta.2` 与 `v2.2.0-beta.3`，标志着 2.2.0 多租户 Hub 版本进入冲刺阶段。
- **高频交付**：24h 内 **33 个 Issue 关闭**、**16 个 PR 合并**，关闭/合并比均超 70%，呈现强收敛态势。
- **核心攻坚集中在**：MCP 协议双栈兼容、OpenAI-compatible 供应商模型发现修复、启动性能重构、长上下文/大文件工具结果截断治理。
- **社区信号明确**：#7318（Hub 多租户规划）获 13 条讨论、13 个 👍，成为当前最高热度议题；桌面端 OpenSSL/TLS 栈升级（#7298）与系统托盘（#3751/#5622）呼声持续。
- **技术债偿还可见**：PR #7380 砍掉零价值测试、整体耗时 -41%；PR #7391 清理不存在的环境变量文档；多个 “first-time-contributor” PR 顺利进入 Review。

**健康度评级**：🟢 **优** — 发布节奏稳、关闭率高、核心路径修复与架构重构并行，新贡献者友好。

---

## 2. 版本发布
| 版本 | 发布时间 | 核心变更 | 破坏性变更 / 迁移提示 |
|------|----------|----------|------------------------|
| **v2.2.0-beta.3** | 2026-08-28 | 1. **MCP**：新增 Streamable-HTTP 双协议客户端（`HttpAutoClient`），自动探测 2026-07-28 / 2025-03-26 / 2025-06-18 / 2025-11-25 四个规范版本并回退；<br>2. **MCP 生命周期**：Teardown 时主动 abort 悬挂 RPC，自动恢复 stale `list_tools`。 | 无破坏性变更；现有 `streamable_http` 配置自动兼容。 |
| **v2.2.0-beta.2** | 2026-08-27 | 1. **Workspace 启动**：取消安全清理逻辑，避免启动失败留存脏状态；<br>2. **E2E 测试**：新增 23 条 Console 专用用例，覆盖率显著提升。 | 无。 |

> **链接**：[v2.2.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.3) · [v2.2.0-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.2)

---

## 3. 项目进展（今日合并/关闭的关键 PR）
| PR | 类型 | 核心推进 | 关联 Issue |
|----|------|----------|------------|
| [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | **feat(mcp)** | 落地双协议 MCP 客户端，解决新旧服务器共存兼容性痛点 | #7298 (部分), #6524 |
| [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) | **fix(mcp)** | Teardown 时强制 abort 挂起 RPC，修复 Server 重启后客户端卡死 | #6524 |
| [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) | **fix(providers)** | 修复自定义 OpenAI-compatible 供应商模型自动发现失效，持久化 + 前端刷新全链路打通 | #7305 |
| [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | **fix(context)** | 单行超长工具结果入上下文前截断，完整结果落盘制品并附恢复元数据 | #7288, #6512 |
| [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384) | **perf(app)** | 共享 A-tier 延迟启动架构：Tauri 与 Python 共用 ASGI 运行时，Ready 判定细化至 “默认 Agent 可聊天” | #6124 (相关) |
| [#7387](https://github.com/agentscope-ai/QwenPaw/pull/7387) | **perf(startup)** | 轻量 Shell 先行就绪，后台异步加载插件/自定义 Agent/维护任务 | #6124 |
| [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) | **test** | 测试套件整体耗时 -41%，剔除零价值用例，修复若干真实缺陷 | — |
| [#7388](https://github.com/agentscope-ai/QwenPaw/pull/7388) | **fix(acp)** | 显式运行时输出限额改用 `max_completion_tokens`，兼容模型元数据缺失场景 | #2777 (相关) |
| [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) | **fix(dingtalk)** | 检测钉钉 Stream 陈旧连接并做有界 SDK 请求，缓解休眠/切网后无响应 | #5757 (相关) |
| [#7386](https://github.com/agentscope-ai/QwenPaw/pull/7386) | **fix(providers)** | 迁移 `discovered_models` 遗留 `max_tokens`，保持加密凭证可加载 | #7337 (后续) |

> **合并统计**：16 个 PR 合并，其中 9 个为修复类、3 个性能类、2 个测试类、2 个功能类。

---

## 4. 社区热点（评论/反应 Top 5）
| # | 标题 | 评论 | 👍 | 核心诉求 | 状态 |
|---|------|------|----|----------|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **QwenPaw Hub 多租户版 2.2.0 即将推出：下一步建什么？** | 13 | 1 | 社区期待团队级协作、RBAC、技能市场、计费/配额、审计日志；官方征集优先级 | 🟢 OPEN |
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | **飞书渠道：首条消息回复后后续无响应** | 15 | 0 | Docker/平台实例均复现，疑似 Stream 连接复用/心跳问题 | 🔴 CLOSED (PR #7381 缓解) |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | **桌面端/Docker 搭载 OpenSSL 3.0.x (Python 3.11) 导致运营商 DPI 重置握手** | 9 | 0 | 要求升级 Python 3.12+ / OpenSSL 3.2+ 或提供打包时自定义 TLS 栈能力 | 🟢 OPEN |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | **RemoteProtocolError：Peer 未发送完整 body 即关闭连接** | 9 | 0 | 抓包显示 QwenPaw 主动发 FIN，疑似流式响应处理超时/缓冲区问题 | 🔴 CLOSED |
| [#2814](https://github.com/agentscope-ai/QwenPaw/issues/2814) | **多 Agent 聊天：被调用 Agent 会话页历史为空** | 7 | 0 | 运行中会话的只读视角同步缺失 | 🔴 CLOSED |

> **洞察**：Hub 多租户规划（#7318）已成社区第一关注点；网络层兼容性（#7298、#5757）与多 Agent 观测（#2814）是长尾痛点。

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 影响面 | 已有 Fix PR | 状态 |
|--------|-------|------|--------|-------------|------|
| **P0 崩溃/数据丢失** | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | WebView2 渲染进程 7s 后 `msedge.dll+0x36c7f6d` 断言崩溃 (v2.0.0+post.4 回归) | Windows 桌面全量用户 | 暂无 | 🟢 OPEN |
| **P0 网络中断** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | 运营商 DPI 识别旧 TLS ClientHello 重置握手，桌面端无规避手段 | 中国大陆桌面/Docker 用户 | 暂无 | 🟢 OPEN |
| **P1 功能失效** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP Server 重启后复用旧 session-id 导致 `list_tools` 永久失败 | 远程 MCP 用户 | [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) ✅ 已合并 | 🔴 CLOSED |
| **P1 功能失效** | [#7305](https://github.com/agentscope-ai/QwenPaw/issues/7305) | 自定义 OpenAI-compatible 供应商模型发现成功但不自动填充下拉框 | 企业私有化部署 | [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) ✅ 已合并 | 🔴 CLOSED |
| **P1 上下文溢出** | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) | 大 MCP 结果绕过滚动压缩直接撑爆模型上下文窗口 | 数据分析/运维场景 | [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) ✅ 已合并 | 🔴 CLOSED |
| **P2 体验退化** | [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | 文件名含十几个中文字符的 PDF 处理报错 `No connection adapters` | Windows 本地文件处理 | 暂无 | 🟢 OPEN |
| **P2 内存泄漏** | [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) | editable install 启动 36 个 ReMe 后台循环吃光 48 GB 内存 | 开发者/源码安装 | [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384), [#7387](https://github.com/agentscope-ai/QwenPaw/pull/7387) 缓解 | 🔴 CLOSED |
| **P2 兼容性** | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮第 2 轮 400 “reasoning item expired” | 无状态上游 (OpenCode Zen/Go Muse Spark) | 暂无 | 🔴 CLOSED |

---

## 6. 功能请求与路线图信号
| 需求 | Issue/PR | 社区热度 | 已有实现/进展 | 纳入 2.2.0/2.3.0 概率 |
|------|----------|----------|----------------|------------------------|
| **Fallback 模型自动切换** | [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011), [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) | 高 (多 Issue 重复) | [#7392](https://github.com/agentscope-ai/QwenPaw/pull/7392) 新增专用 Fallback 设置页 (OPEN) | ⭐⭐⭐⭐⭐ (2.2.0) |
| **系统托盘/后台常驻** | [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751), [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622) | 中 | 暂无 PR | ⭐⭐⭐ (2.3.0) |
| **会话归档分组** | [#3187](https://github.com/agentscope-ai/QwenPaw/issues/3187) | 中 | 暂无 PR | ⭐⭐⭐ (2.3.0) |
| **Shell 实时交互流式输出** | [#4986](https://github.com/agentscope-ai/QwenPaw/issues/4986), [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | 中 | 后端分页 API 已就绪 [#7049](https://github.com/agentscope-ai/QwenPaw/pull/7049)，前端虚拟化 PR [#7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) OPEN | ⭐⭐⭐⭐ (2.2.0) |
| **Prompt Cache 命中率可观测** | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-29

---

## 1. 今日速览

ZeroClaw 今日呈现 **高强度架构重构与安全加固并行** 的活跃态势。过去 24 小时累计 36 条 Issue 更新、50 条 PR 活动，**零版本发布** 表明项目处于大规模内部重构冲刺期。核心动能集中在：  
- **RFC 决策推进**：内存生命周期解耦（[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)）、沙箱策略颗粒化（[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)）、Wire Protocol 一等公民化（[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)）等 6 个高风险 RFC 处于活跃讨论/审核态；  
- **运行时核心修复**：TaskRecord 统一后台生命周期所有权（[#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726)）、同会话消息串行化（[#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411)）、Token 核算可观测性（[#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)）等关键 PR 推进；  
- **安全/合规加固**：Git Shell 参数硬化（[#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678)）、多模态像素级校验（[#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)）、TTS API Key 敏感标记（[#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432)/[#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175)）同步落地；  
- **CI/工程效能**：Windows 测试测量接入（[#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350)）、Web TypeScript 门禁（[#10306](https://github.com/zeroclaw-labs/zeroclaw/issues/10306)）、依赖告警自动化（[#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427)）。  

**健康度评估**：🟢 **活跃健康** —— RFC 流程高效流转、核心 Bug 快速闭环、跨模块重构有序推进，唯一风险点为 48 个待合并 PR 积压可能延长集成周期。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（2 个）
| PR | 类型 | 核心变更 | 影响面 |
|---|---|---|---|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | Bug Fix (P1) | 修复 `skill-review fork` 数组越界导致 Daemon SIGSEGV 崩溃 | Runtime/Skills 稳定性 |
| [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) | Bug Fix (P1) | 修复 `forbidden_paths` 在 `allowed_roots` 下失效的安全策略穿透 | Security Policy/Config |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Bug Fix (P1) | Web Dashboard 新增运行中 SOP 任务取消路径 | Web/Gateway/SOP |
| [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) | Bug Fix (P2) | 修复 Resilient Wrapper 截断导致 OpenAI-compatible 上下文溢出恢复失效 | Provider/Reliability |
| [#9711](https://github.com/zeroclaw-labs/zeroclaw/issues/9711) | Bug Fix (P3) | Arduino 闪存临时目录退出时清理 | Hardware/Peripherals |
| [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) | Bug Fix (P3) | ZeroCode 粘贴不再突变隐藏 Composer | ZeroCode/TUI |
| [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) | Bug Fix (P2) | Google TTS `x-goog-api-key` 标记为敏感 Header | Channel/Security |

> **注**：数据显示「已合并/关闭: 2」但 Issues 列表含 7 个 CLOSED，推测其余 5 个为 Issue 直接关闭未经 PR。

### 进行中里程碑级 PR（高优先级）
| PR | 状态 | 核心目标 | 关联 RFC/Tracker |
|---|---|---|---|
| [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) | Open, Needs Review | **TaskRecord 统一后台生命周期所有权** — 解决输出持久化与终端状态不一致 | 架构重构核心 |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | Open, Needs Author Action | **Context Compaction 锚定模型窗口比例** — 替代固定 32k 预算 | Runtime/Context Mgmt |
| [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) | Open, Needs Author Action | **同会话消息串行化** — 修复并发 Turn 导致的重复工作/回复 | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) |
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | Open, Needs Review | **Git Shell 参数规范化硬化** — 统一引号/转义感知表示 | Security Policy |
| [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | Open, Needs Author Action | **VoiceHost WebSocket Bridge** — 外部 ASR 主机交互 | Voice/Channel |
| [#10236](https://github.com/zeroclaw-labs/zeroclaw/pull/10236) | Open, Needs Review | **Desktop Daemon 有界捕获日志** — 认证升级重启安全 | Desktop/Security |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | Open, Needs Author Action | **Git 操作遵循 allowed_roots** — worktree 物理路径校验 | Tools/Security |

---

## 4. 社区热点

### 高讨论度 RFC（决策队列前沿）
| Issue | 评论 | 状态 | 核心诉求 |
|---|---|---|---|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 21 | Open | **Memory 生命周期策略与存储后端解耦** — 确立 `Memory` trait 仅负责存储，Consolidation/Governance 上移至网关/通道层，避免每个后端重复实现 |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 16 | Accepted | **内部发起 Agent Turn 的 Provenance/Conversation Binding/Reply Contract** — 明确身份稳定性、绑定并发、回复生命周期边界 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 15 | In Progress | **颗粒化沙箱策略** — 统一应用层路径准入与 OS 级沙箱，Agent Risk Profile 表达工作区/路径限制 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 15 | Needs Review | **Wire Protocol 一等公民化** — Provider 构建/入职时显式协商协议能力 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 14 | Open | **Maintainer Decision Queue** — RFC/设计问题决策跟踪器，现有 14 条评论反映决策积压 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 12 | Needs Review | **Desktop Computer-Use 支持** — 屏幕交互/输入控制的安全边界、审批单元、会话武装 |

### 热门功能/缺陷 PR
- **[#10096](https://github.com/zeroclaw-labs/zeroclaw/pull/10096)** ZeroCode 日志行/详情可选中复制 — 开发者体验微创新
- **[#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350)** Windows 测试测量接入 CI（Advisory 模式） — 跨平台质量基建
- **[#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064)** Telegram 审批卡片点击后自毁 — 交互细节打磨
- **[#10431](https://github.com/zeroclaw-labs/zeroclaw/pull/10431)** 转发转录语言提示到 Deepgram/OpenAI — 直接修复 [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429)

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 核心现象 | 关联 Fix PR |
|---|---|---|---|---|
| **P1 (S1/S2)** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | In Progress | 同会话第二条消息触发并行 Run → 重复工作/重复回复 | [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) |
| **P1** | [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*