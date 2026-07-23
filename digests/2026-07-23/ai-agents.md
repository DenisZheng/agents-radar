# OpenClaw 生态日报 2026-07-23

> Issues: 445 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-23 02:08 UTC

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

# OpenClaw 项目日报 | 2026-07-23

> **数据基准**：过去 24 小时 GitHub 活动（Issues: 445 更新，PRs: 500 更新，Releases: 0）  
> **报告生成时间**：2026-07-23 早间

---

## 1. 今日速览
- **活跃度极高**：单日 945 条 Issue/PR 更新（新开/活跃 592 条，合并/关闭 353 条），显示社区与核心团队处于高强度并行开发与维护状态。
- **无版本发布**：今日无新 Release，但存在多个 `ready for maintainer look` 与 `waiting on author` 状态的大型 PR，预示下一版本（可能为 2026.7.x 或 2026.8.x）积累了大量变更。
- **核心矛盾聚焦**：**性能回归**（`doctor --fix` 慢 4-5 倍）、**网关稳定性**（启动失败、重启循环、内存泄漏）、**多平台客户端缺失**（Linux/Windows）以及 **安全/策略执行硬化**（Pre-response enforcement hooks、Masked Secrets）构成当前前四大痛点。
- **自动化治理推进**：`clawsweeper` 机器人标签体系（`needs-maintainer-review`, `needs-product-decision`, `no-new-fix-pr` 等）覆盖绝大多数活跃 Issue，流程规范化程度高，但“需维护者审阅”积压严重。
- **PR 质量分层明显**：多数 PR 为 `size: S/XS` 的修复与工具链加固（超时保护、空值规范化），大型特性 PR（`size: XL`）如 Matrix 启动优化、Codex 沙箱稳定性、标准化托管配置文件、提示词重构仍在评审中。

---

## 2. 版本发布
> **今日无新版本发布**。  
> 最近一次发布为 `2026.7.2`（据 Issue #110504 推断），当前主分支正积累修复与特性，建议关注 `#112740`（CI 恢复完整验证）与 `#112841`（冻结 extended-stable 候选版本验证）的合并进度作为下一版本发布的前置信号。

---

## 3. 项目进展：今日合并/关闭的重要 PR 与推进

| PR | 类型 | 核心变更 | 影响面 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **[#112836](https://github.com/openclaw/openclaw/pull/112836)** | `fix(ui)` | 修复 Web UI 用户消息页脚控件阅读顺序与键盘焦点不一致问题（Reply 按钮分离至远侧） | UX/无障碍 | **已合并** |
| **[#112740](https://github.com/openclaw/openclaw/pull/112740)** | `ci(release)` | 恢复配置迁移后的完整发布验证流程：修复严格配置拒绝、CDP 误报、退休 Docker 场景、功能测试超时等回归 | 发布工程/质量保障 | **审阅中** |
| **[#112841](https://github.com/openclaw/openclaw/pull/112841)** | `fix(release)` | 校验冻结的 `2026.6.34` extended-stable 候选版本，适配最新 CI 脚本与 QA 契约 | 稳定分支维护 | **审阅中** |
| **[#109460](https://github.com/openclaw/openclaw/pull/109460)** | `fix(qqbot)` | 忽略空白 `app_id` 回落，规范化账号发现逻辑 | QQBot 渠道稳定性 | **待维护者看** |
| **[#109515](https://github.com/openclaw/openclaw/pull/109515)** | `fix(google-vertex)` | 忽略空白 `GOOGLE_CLOUD_PROJECT` 等环境变量，避免误判为已配置 ADC | Vertex AI 认证 | **待维护者看** |
| **[#112583](https://github.com/openclaw/openclaw/pull/112583)** | `fix(cli)` | 修复 CLI/TUI 命令在大型状态数据库上启动卡顿：跳过重复的 SQLite 完整性扫描 | CLI 启动性能 | **审阅中** |
| **[#89040](https://github.com/openclaw/openclaw/pull/89040)** | `perf(agents)` | 避免 `embedded_run` 引导上下文阶段的同步 I/O 与 `fs.glob` 阻塞事件循环 14-22s，导致消息丢失 | 核心运行时性能/稳定性 | **待维护者看** |
| **[#112331](https://github.com/openclaw/openclaw/pull/112331)** | `fix(gateway/agents)` | 修复配置热重载期间模型目录不一致：跨运行时代缓存导致的替换错误重试 | 网关热重载可靠性 | **审阅中** |

**整体推进评估**：核心基础设施（CI/CD、CLI 启动、网关热重载、事件循环阻塞）修复 PR 已就绪或合并，显著降低运维摩擦；大型特性（多账号 Teams、标准化托管配置、提示词重构、TUI 本地化）仍在评审管道中，短期内不会入主分支。

---

## 4. 社区热点：讨论最活跃的 Issues/PRs（Top 10 by 评论/Reactions）

| 排名 | Issue/PR | 标题摘要 | 评论 | 👍 | 核心诉求分析 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **#75** | **Linux/Windows Clawdbot Apps 缺失**（仅有 macOS/iOS/Android） | 115 | 80 | **最高呼声功能缺口**：企业级部署与桌面自动化场景强依赖原生客户端；涉及安全审查、产品决策、维护者带宽。 | [查看](https://github.com/openclaw/openclaw/issues/75) |
| 2 | **#85333** | `openclaw doctor --fix` **性能回归 4-5x**（55s → 229s+），会话快照路径遍历瓶颈 | 17 | 1 | **生产环境阻断级回归**：VPS 运维窗口被拉长，需立即定位 `e510042` 引入的 I/O 模式变更。 | [查看](https://github.com/openclaw/openclaw/issues/85333) |
| 3 | **#13583** | **Pre-response enforcement hooks（硬闸）**：强制工具调用/策略规则，防止软提示被绕过 | 16 | 2 | **高风控场景刚需**：量化/金融/安全运营要求机械级防护，而非提示词约束。涉及安全审查与产品决策。 | [查看](https://github.com/openclaw/openclaw/issues/13583) |
| 4 | **#91009** | Codex `PreToolUse` 原生钩子触发 CPU 满载 `openclaw-hooks` 进程，阻塞网关 RPC | 15 | 2 | **集成稳定性**：Codex 插件架构下进程模型失控，需重构为进程池或异步 IPC。 | [查看](https://github.com/openclaw/openclaw/issues/91009) |
| 5 | **#10659** | **Masked Secrets**：Agent 可用不可见 API Key，防泄露与注入攻击 | 15 | 4 | **供应链安全基线**：企业合规要求，配合 `#13583` 构建硬化执行链。 | [查看](https://github.com/openclaw/openclaw/issues/10659) |
| 6 | **#96857** | 普通工具文本输出退化为 `(see attached image)` 占位符，导致 Agent 盲读 | 13 | 4 | **上下文完整性缺陷**：文本通道被错误标记为图片，破坏工具链可观测性。 | [查看](https://github.com/openclaw/openclaw/issues/96857) |
| 7 | **#92043** | **180s 压缩超时为整块管道单一墙钟**，无部分进度复用，合法长压缩每轮必败 | 12 | 3 | **长上下文可用性**：本地/慢速模型压缩超时硬编码，需分阶段检查点或可配置增量预算。 | [查看](https://github.com/openclaw/openclaw/issues/92043) |
| 8 | **#85103** | 模型降级链在提供方配额耗尽 (429) 时未触发 + `EmbeddedAttemptSessionTakeoverError` | 11 | 1 | **弹性容错缺失**：配额错误未纳入熔断策略，导致会话劫持错误级联。 | [查看](https://github.com/openclaw/openclaw/issues/85103) |
| 9 | **#108435** | **更新至 2026.7.1 后网关启动失败**（systemd/ollama/手动均报错 `gateway did not start`） | 9 | 2 | **发布阻断回归**：P0 级，影响全平台部署，需回滚或热修复。 | [查看](https://github.com/openclaw/openclaw/issues/108435) |
| 10 | **#112487** | **[Maintainer/Dummy] ClawSweeper 评审布局模拟图**（PR #110216 历史示例） | 5 | 0 | **工程效能可视化**：维护团队正在迭代自动化评审呈现，提升分流效率。 | [查看](https://github.com/openclaw/openclaw/issues/112487) |

**热点聚类分析**：
1. **平台完整性**（#75）长期居首，反映社区对“全平台原生体验”的强预期，但标签显示 `needs-product-decision`、`needs-security-review`、 `needs-maintainer-review` 三重阻塞。
2. **性能与稳定性回归**（#85333, #108435, #92043, #91009）集中在 2026.5~2026.7 版本窗口，提示发布验证流程存在盲区（已由 #112740 补强）。
3. **安全硬化诉求**（#13583, #10659）从“合规可选”转为“生产必选”，需架构级支持而非插件打补丁。

---

## 5. Bug 与稳定性：今日报告/更新的关键缺陷（按严重度）

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0 / Release Blocker** | **[#108435](https://github.com/openclaw/openclaw/issues/108435)** | `2026.7.1` 网关无法启动（`gateway did not start on 127.0.0.1:18789`） | 全平台部署 | ❌ 无 | 需立即回滚或发布热修复版本 |
| **P1 / Crash Loop** | **[#92043](https://github.com/openclaw/openclaw/issues/92043)** | 180s 压缩超时无部分进度复用，长历史会话每轮失败 | 长上下文/本地模型用户 | ❌ 无 | 架构级修复，需引入检查点机制 |
| **P1 / Crash Loop** | **[#91009](https://github.com/openclaw/openclaw/issues/91009)** | Codex 钩子进程 CPU 100%+ 风暴，阻塞网关 RPC | Codex 集成用户 | ❌ 无 | 需重构进程管理模型 |
| **P1 / Perf Regression** | **[#85333](https://github.com/openclaw/openclaw/issues/85333)** | `doctor --fix` 因快照路径遍历慢 4-5x | 运维/生产环境 | ❌ 无 | 定位 `e510042` 变更集，优化 I/O 策略 |
| **P1 / Data Loss Risk** | **[#99054](https://github.com/openclaw/openclaw/issues/99054)** | Teams 移除/重加机器人保留旧 DM 会话历史 | Teams 企业用户 | ❌ 会话隔离逻辑缺陷 |
| **P1 / Auth Failure** | **[#98702](https://github.com/openclaw/openclaw/issues/98702)** | 继承主账号 OAuth 的内置 runtime 在 `openai-chatgpt-responses` 传输上被拒 | OAuth 多租户场景 | ❌ 凭证传播链路断裂 |
| **P2 / UX Regression** | **[#91941](https://github.com/openclaw/openclaw/issues/91941)** | Feishu 流式卡片全量更新导致长回复延迟尖峰 | Feishu 渠道用户 | ❌ 需恢复增量 payload 策略 |
| **P2 / Memory Leak** | **[#87314](https://github.com/openclaw/openclaw/issues/87314)** | 网关因重复文件读取错误内存增长 ~60MB/天 | 长运行实例 | ❌ 错误处理路径泄漏对象引用 |
| **P2 / Func Break** | **[#87980](https://github.com/openclaw/openclaw/issues/87980)** | `exec` 工具静默损坏 `2>&1` / `2>/dev/null` 重定向参数 | 所有 Shell 任务 | ❌ 参数解析/转义层缺

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告
**数据基准**：2026-07-23 各项目 GitHub 社区动态日报汇总  
**覆盖项目**：11 个活跃项目（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、CoPaw/QwenPaw、Moltis、ZeroClaw）+ 2 个静默项目  

---

## 1. 生态全景
当前生态呈现 **“头部冲刺、腰部重构、长尾分化”** 的三极态势。  
头部项目（OpenClaw、IronClaw、CoPaw、Hermes、ZeroClaw）均进入 **v1.0/重大版本发布前的高强度稳定性冲刺期**，日均百条级更新，核心矛盾聚焦于网关稳定性、多平台一致性、安全合规与评测体系建设；  
腰部项目（NanoBot、PicoClaw、LobsterAI）在 **架构升级（多 Agent、SQLite 索引、插件标准化）与技术债清理** 上并行推进，工程化成熟度显著提升；  
长尾项目（NanoClaw、Moltis、NullClaw）维护带宽不足，陷入 **Review 积压与单点故障修复** 的低活跃循环。  
**核心共识**：生产级部署门槛显著抬高，“能跑通”向“可观测、可恢复、可合规、可扩展”转型已成全行业隐性标准。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | 合并/关闭 PR | Release | 活跃度评级 | 健康度评估 |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 445 | 500 | 353 | 0 | 🔥🔥🔥🔥🔥 **极高** | **标杆级**：治理自动化成熟，P0 回归集中爆发但修复管道通畅，社区规模最大。 |
| **IronClaw** | 50 | 50 | ~20 | 0 | 🔥🔥🔥🔥🔥 **极高** | **冲刺期**：v1 Launch Checklist 驱动，架构收口、测试基建、部署阻塞三线并进。 |
| **CoPaw (QwenPaw)** | 31 | 50 | 15 | **1 (v2.0.0.post4)** | 🔥🔥🔥🔥 **极高** | **快速迭代**：v2.0 架构引入回归密集，外部贡献者涌入，发布节奏最快。 |
| **Hermes Agent** | 50 | 50 | 11 | 0 | 🔥🔥🔥🔥 **极高** | **多端收敛**：会话一致性、跨平台同步、大文件传输为核心阻塞项。 |
| **ZeroClaw** | 50 | 50 | **0** | 0 | 🔥🔥🔥🔥 **高** | **债务显性化**：CI 基建崩塌、RFC 并行、零合并，急需释放 Review 带宽。 |
| **NanoBot** | 4 (新开) | 63 | **40** | 0 | 🔥🔥🔥 **高** | **平台化转型**：合并率极高（63%），基建重构与多 Agent 架构提案同步推进。 |
| **PicoClaw** | 4 | 5 | 2 | 0 | 🔥🔥 **中** | **垂直深耕**：嵌入式/IoT 场景稳定性修复为主，Matrix 重连等 P0 遗留风险高。 |
| **LobsterAI** | 1 | 5 | **5** | 0 | 🔥🔥 **中** | **稳定性冲刺**：客户端与网关三大高危问题一次性清零，历史债清理彻底。 |
| **NanoClaw** | 1 | 3 (Open) | 0 | 0 | 🔥 **低** | **停滞预警**：PR 滞留 25 天，安全文档与实现不符，维护者带宽不足。 |
| **NullClaw** | 1 | 1 | 1 | 0 | 🔥 **低** | **定点维护**：单核心维护者高效闭环 Discord 栈溢出 P0 Bug，生态孤立。 |
| **Moltis** | 0 | 1 (Open) | 0 | 0 | ❄️ **极低** | **维护模式**：仅 UI 微调，无社区互动。 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | 0 | ❄️ **静默** | **无活动**。 |

> **关键指标说明**：OpenClaw 单日 945 条更新量级碾压群体；NanoBot、LobsterAI 合并率高显示执行力强；ZeroClaw、NanoClaw “高更新零合并”揭示审查瓶颈。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 对比参考 |
| :--- | :--- | :--- |
| **技术地位** | **事实标准的“内核/中枢”**。LobsterAI 直接依赖其网关；IronClaw、ZeroClaw 的 ProductSurface/Plugin 架构设计目标与其 OpenClaw Gateway/Channel 模型高

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-23

---

## 1. 今日速览

**整体状态：高活跃度，重构与稳定性并进。** 过去 24 小时内，项目无新版本发布，但代码库呈现高频迭代态势：**PR 活动极其频繁（共 63 条更新，其中 40 条已合并/关闭）**，显示核心维护团队正在高强度清理积压与推进新特性。**Issue 端新增 4 个 Open 项**，集中暴露了多 Agent 架构演进、MCP Schema 兼容性、Dream 记忆推进机制及媒体文件权限边界等核心技术债与新需求。项目正处于从“单 Agent 工具链”向“多 Agent 协作平台”及“多渠道企业级接入”双轨演进的关键窗口期。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日合并/关闭 **40 个 PR**，呈现“修复兜底 + 基建增强 + 多渠道扩展”三大主线，显著推进了工程化成熟度：

| 类别 | 代表性 PR | 核心推进内容 | 影响面 |
| :--- | :--- | :--- | :--- |
| **稳定性兜底 (P1/P0)** | [#5044](https://github.com/HKUDS/nanobot/pull/5044)、[#5043](https://github.com/HKUDS/nanobot/pull/5043)、[#5042](https://github.com/HKUDS/nanobot/pull/5042) | 修复配置加载时 `null` 值导致的崩溃：Pairing 白名单、Cron 任务历史、Cron 调度配置的健壮性加载，防止单条脏数据拖垮整个存储。 | 核心运行时稳定性，生产环境可靠性 |
| **渠道适配修复** | [#5046](https://github.com/HKUDS/nanobot/pull/5046)、[#5045](https://github.com/HKUDS/nanobot/pull/5045) | 修复 Feishu/Slack 适配器对**代码块内 Markdown 表格**的误解析，保护 Fenced Code Block 完整性。 | 企业级 IM 集成体验 |
| **后台任务语义修正** | [#4988](https://github.com/HKUDS/nanobot/pull/4988) | 修复后台/定时任务在模型无输出时仍发送占位符提示语的问题，实现真正的“静默完成”。 | Cron、Local Trigger 等自动化场景 |
| **WebUI 性能重构** | [#5003](https://github.com/HKUDS/nanobot/pull/5003) | **重大基建**：对话历史索引从 JSONL 迁移至 SQLite WAL 模式，引入单写线程批量写入、稳定序数分页，解决长上下文加载卡顿。 | WebUI 核心交互性能 |
| **多模态/多渠道扩展** | [#5009](https://github.com/HKUDS/nanobot/pull/5009)、[#5033](https://github.com/HKUDS/nanobot/pull/5033) | Feishu 新增 `groupPolicy: listen` 模式（仅入库不回复，@时触发）；Telegram 支持**多 Bot 实例**并发运行（向后兼容单 Bot 配置）。 | 企业级协作场景覆盖度 |
| **Provider 生态扩展** | [#5035](https://github.com/HKUDS/nanobot/pull/5035) | 新增 **xAI Grok OAuth + Responses Provider**，支持能力门控的 X Search 工具调用。 | 模型供应商多元化 |
| **技术债偿还** | [#4866](https://github.com/HKUDS/nanobot/pull/4866) *(Closed)* | Model Presets 会话级作用域化，LLMRuntime 单例化贯穿 Turn 生命周期，奠定多 Agent 隔离基础。 | 架构演进基石 |

> **进展评估**：今日合并 PR 中 **P1/P0 级修复占比超 30%**，且多为数据一致性与边界条件兜底，体现项目进入“生产级硬化”阶段；WebUI SQLite 重构与 Model Presets 会话隔离为后续多 Agent 并发、长上下文管理扫清了性能与架构障碍。

---

## 4. 社区热点

| 排名 | Issue/PR | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **Issue [#5000](https://github.com/HKUDS/nanobot/issues/5000)**<br>《Proposal: evolve the current subagent system toward multi-agent collaboration》 | **评论 4 条**，创建 3 天持续活跃，作者为核心贡献者 `bingqilinweimaotai` | **架构级提案**：现有 Subagent 仅为“后台任务委派”，缺乏持久身份、共享状态、协商规划能力。诉求演进为：持久 Agent Registry、共享上下文/工具命名空间、显式协作协议（Handoff/Delegation/Broadcast）、人工介入检查点。这是 NanoBot 从“工具调用框架”向“多 Agent 平台”跃迁的核心设计讨论。 |
| **2** | **Issue [#4934](https://github.com/HKUDS/nanobot/issues/4934)** *(Closed)*<br>《Qwen models expose thinking/reasoning content》 | 评论 2 条，历时 8 天闭环 | **Provider 适配规范化**：DashScope 返回的 `reasoning_content` 需在 Provider 层剥离，而非泄露给用户。反映多模型推理内容标准化处理的迫切性。 |
| **3** | **PR [#2584](https://github.com/HKUDS/nanobot/pull/2584)**<br>《Feature/xiaozhi support》 | **长期开放（创建于 3 月）**，近期更新，**冲突标记** | **硬件生态接入**：小智语音网关 + ESP32 设备管理 MCP Tools。虽标记冲突，但持续更新显示社区对“AI + IoT 语音交互”强需求，可能纳入后续专项分支。 |
| **4** | **Issue [#5040](https://github.com/HKUDS/nanobot/issues/5040)**<br>《MCP tool schema with non-'#/$defs/' $ref disables model on strict providers》 | 新开即关注，涉及 Kimi/Moonshot 严格 Schema 校验 | **MCP 互操作性短板**：MCP Spec 允许任意 JSON Pointer `$ref`，但 NanoBot 透传导致严格 Provider（Kimi）拒绝。需引入 Schema 规范化/重写层（展开 `defs`、重写内部引用）。 |

---

## 5. Bug 与稳定性

按严重程度排序（均已有对应 Fix PR）：

| 严重级 | Issue | 现象 | 修复 PR | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 - 崩溃/数据丢失** | **[#5044](https://github.com/HKUDS/nanobot/issues/5044)** (隐性) | `pairing.json` 中 `"telegram": null` 导致 `is_approved` 抛 TypeError，启动失败 | [#5044](https://github.com/HKUDS/nanobot/pull/5044) | **Open** (待合并) |
| **P0 - 崩溃/数据丢失** | **[#5043](https://github.com/HKUDS/nanobot/issues/5043)** (隐性) | `jobs.json` 中 `runHistory` 包含 `null` 元素导致 Cron Store 全量隔离，丢失所有定时任务 | [#5043](https://github.com/HKUDS/nanobot/pull/5043) | **Open** |
| **P0 - 崩溃/数据丢失** | **[#5042](https://github.com/HKUDS/nanobot/issues/5042)** (隐性) | 单个 Job `schedule: null` 导致整个 Cron Store 加载失败，连带健康 Job 丢失 | [#5042](https://github.com/HKUDS/nanobot/pull/5042) | **Open** |
| **P1 - 功能失效** | **[#5041](https://github.com/HKUDS/nanobot/issues/5041)** | **Dream 记忆饥饿**：无 diff 批次不推进 `.dream_cursor`，导致同一批次反复处理，后续历史永远不被覆盖 | *无对应 PR* | **Open** (急需修复) |
| **P1 - 逻辑错误** | **[#5040](https://github.com/HKUDS/nanobot/issues/5040)** | MCP Tool Schema 含非标准 `$ref` 导致 Kimi/Moonshot 等严格 Provider 全模型不可用 | *无对应 PR* | **Open** |
| **P2 - 体验缺陷** | **[#5028](https://github.com/HKUDS/nanobot/issues/5028)** | 飞书上传文件落在 `media/` 目录（与 `workspace` 同级），Workspace 限制导致无法读取 | *无对应 PR* | **Open** |
| **P2 - 渲染异常** | **[#5046](https://github.com/HKUDS/nanobot/issues/5046)** / **[#5045](https://github.com/HKUDS/nanobot/issues/5045)** | Feishu/Slack 代码块内 Markdown 表格被错误解析为卡片/键值对，破坏代码块 | [#5046](https://github.com/HKUDS/nanobot/pull/5046)<br>[#5045](https://github.com/HKUDS/nanobot/pull/5045) | **Open** |
| **P2 - 交互干扰** | **[#4988](https://github.com/HKUDS/nanobot/issues/4988)** (隐性) | 后台任务无输出时仍推送占位提示语，干扰自动化流程 | [#4988](https://github.com/HKUDS/nanobot/pull/4988) | **Open** |
| **P1 - 可见性丢失** | **[#4948](https://github.com/HKUDS/nanobot/issues/4948)** *(Closed)* | WebUI 子任务完成触发 System Turn 时丢失 Delivery Lifecycle，导致前端不可见 | *已修复合并* | **Closed** |

> **稳定性观察**：今日新增 3 个 **P0 级配置加载崩溃** 均由 `santhreal` 同步提交 Fix，显示项目已建立“发现即修复”的高响应机制。**#5041 Dream 饥饿** 为唯一无 Fix 的 P1 核心逻辑 Bug，建议优先排期。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR/进展 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue [#5000](https://github.com/HKUDS/nanobot/issues/5000)** | **多 Agent 协作架构重构**：持久身份、共享状态、协商协议、人工检查点 | 无直接 PR，但 [#4866](https://github.com/HKUDS/nanobot/pull/4866) (Model Presets 会话隔离) 为前置基建 | **低 (短期)** / **极高 (中长期)** | 属于重大架构演进，需设计文档、RFC 流程，预计需数个里程碑交付。 |
| **Issue [#5040](https://github.com/HKUDS/nanobot/issues/5040)** | MCP Schema 规范化层（展开 `$defs`、重写内部引用）以兼容严格 Provider | 无 PR | **高** | 影响 Kimi/Moonshot 等主流国内模型可用性，工程量可控，优先级应高于新 Provider 接入。 |
| **PR [#5035](https://github.com/HKUDS/nanobot/pull/5035)** | **xAI Grok OAuth + X Search** 能力门控集成 | **Open, P1** | **高** | 代码完备，含 OAuth PKCE、Token 隔离、强制刷新、能力广播，符合 Provider 接入规范。 |
| **PR [#5009](https://github.com/HKUDS/nanobot/pull/5009)** | **Feishu `groupPolicy: listen`** 仅入库不回复，@时触发 | **Open, P1** | **高** | 解决群聊噪音与上下文积累矛盾，企业级场景强需求。 |
| **PR [#5033](https://github.com/HKUDS/nanobot/pull/5033)** | **Telegram 多 Bot 实例** 支持 | **Open, P1** | **高** | 向后兼容，解决多租户/多业务线部署痛点。 |
| **PR [#5018](https://github.com/HKUDS/nanobot/pull/5018)** | **Skills 显式上下文加载** (`skill_names` 生效) | **Open, Conflict** | **中** | 解决技能按需注入能力，但标记冲突需解决。 |
| **PR [#5003](https://github.com/HKUDS/nanobot/pull/5003)** | **WebUI SQLite 索引重构** | **Open, P1** | **极高** | 性能关键路径，已投入大量工程化设计 (WAL, 单写线程, 稳定序数)。 |
| **Issue [#5036](https://github.com/HKUDS/nanobot/issues/5036)** / **PR [#5036](https://github.com/HKUDS/nanobot/pull/5036)** | **Idle Compaction 扫描间隔可配置** (解决树莓派空闲占用 30-40% CPU) | **Open, P2** | **高** | 单行配置变更，边缘设备部署关键优化。 |

---

## 7. 用户反馈摘要

从 Issue 评论

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-23

---

## 1. 今日速览
- **整体活跃度：高** — 过去 24 小时累计 50 条 Issue 更新（46 个新开/活跃、4 个关闭）与 50 条 PR 更新（39 个待合并、11 个已合并/关闭），无新版本发布。
- **核心焦点集中在会话状态一致性、跨平台上下文共享、Telegram 大文件上传、Windows 兼容性、桌面端 UI/UX 细节以及计费/技能同步基础设施**。
- **合并节奏加快**：当日合并 11 个 PR，覆盖会话自愈、Copilot 凭证轮换、计费 UX 统一、桌面端消息排序、cron 环境变量泄漏修复等关键路径，显示维护团队正在集中清理 P1/P2 级阻塞性缺陷。
- **社区讨论热度上升**：跨平台会话共享（#4335，9 条评论）、桌面端会话切换失效（#66875，7 条）、Telegram 超时配置失效（#62936，6 条）三大议题吸引最多参与，折射出多端协作与大文件传输的刚性需求。
- **技术债显性化**：Windows 文件锁冲突（#57775）、NixOS 模块路径错误（#21341）、.env 占位符未清理（#12651）等长期存量 Issue 仍在活跃更新，提示安装/部署链路的兼容性治理仍需系统性投入。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 链接 |
|----|------|----------|--------|------|
| #69739 | **Bugfix (Desktop)** | 修复用户干预时 steer 消息与重定向回复的竞态，保证会话记录时序正确 | 桌面端会话渲染一致性 | [#69739](https://github.com/NousResearch/hermes-agent/pull/69739) |
| #69655 | **Feature (Billing)** | 统一 CLI/TUI/Desktop 三端“余额不足/支付失败”的交互：结构化错误、计费链接、Toast 提示 | 计费体验、用户留存 | [#69655](https://github.com/NousResearch/hermes-agent/pull/69655) |
| #69691 | **Polish (Desktop)** | 计费页自动轮询、移除手动刷新、提取共享 Progress 组件、补充 Settings 骨架屏 | 桌面端工程质量、维护性 | [#69691](https://github.com/NousResearch/hermes-agent/pull/69691) |
| #69740 | **Bugfix (Cron)** | `HERMES_CRON_SESSION` 环境变量在任务结束后清理，防止泄漏到同进程的用户交互会话 | 会话隔离、安全边界 | [#69740](https://github.com/NousResearch/hermes-agent/pull/69740) |
| #69730 | **Bugfix (Cron/Auth)** | 修复 Chronos fire webhook 使用默认 profile 校验 token，改为按 job_id 解析对应 profile 的 JWKS/issuer/audience | 多租户定时任务鉴权 | [#69730](https://github.com/NousResearch/hermes-agent/pull/69730) |
| #62477 | **Bugfix (Gateway/Session)** | 自愈路径中跳过已标记 ended 的会话恢复，修复“会话重置被静默丢失” | 会话生命周期可靠性 | [#62477](https://github.com/NousResearch/hermes-agent/pull/62477) |
| #62689 | **Bugfix (Copilot/Auth)** | 凭证轮换时通过实时 token exchange 刷新 base_url，避免复用过期公共端点 | 企业级 Copilot 兼容性 | [#62689](https://github.com/NousResearch/hermes-agent/pull/62689) |
| #69683 | **Chore (fmt)** | 自动化 `npm run fix` 格式化提交 | 代码风格一致性 | [#69683](https://github.com/NousResearch/hermes-agent/pull/69683) |
| #69739, #69655, #69691, #69740 等 11 个 PR 当日合并，整体推进了 **会话状态机修复、多端计费 UX 统一、定时任务安全边界、桌面端渲染时序** 四大方向。 |

---

## 4. 社区热点（高讨论度 Issues/PRs）

| Issue/PR | 评论数 | 核心诉求 | 代表性声音 | 链接 |
|----------|--------|----------|------------|------|
| **#4335** Cross-platform session context sharing (CLI ↔ Telegram) | 9 👍2 | **多端会话上下文互通**：用户期望在 CLI 与 Telegram 间无缝切换，保持同一 Agent 的长期记忆与工具状态。 | “每次换端都要重新解释上下文，严重破坏工作流” | [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) |
| **#66875** Desktop: latest session doesn’t switch after visiting Plugins/Artifacts tab | 7 | **侧边栏会话切换失效**：点击最新会话无响应，次新正常；疑似路由/状态同步竞态。 | “每次都要点两次或换别的再回来，极其反直觉” | [#66875](https://github.com/NousResearch/hermes-agent/issues/66875) |
| **#62936** Telegram uploads >15 MB always timeout; `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` ignored | 6 | **大文件上传配置不生效**：PTB `media_write_timeout` 未绑定环境变量，导致视频/大图必现超时。 | “配置了 300s 还是 15s 就断，根本没生效” | [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) |
| **#69747** fix(relay): restore streaming delivery, Slack command parity, status clearing | — | **Relay 组件流式交付回归修复**：补回 #69716 被 #69721 覆盖的流式发送、Slack 命令对齐、状态清理。 | 关键基础设施回滚修正，社区关注度高 | [#69747](https://github.com/NousResearch/hermes-agent/pull/69747) |
| **#66730** feat(sync): HSP/1 personal skill sync client (M1 client) | — | **技能同步客户端落地**：推动 Collective Wisdom 里程碑，跨三仓库联动。 | 架构演进信号，长期战略相关 | [#66730](https://github.com/NousResearch/hermes-agent/pull/66730) |

**分析**：前三大 Issue 均指向 **“多端一致性”** 与 **“大负载下的可靠性”** —— 这是 Hermes 从单端工具向多平台 Agent 平台演进的核心痛点。PR 端的高关注集中在基础设施回归修复与跨仓库特性落地，显示维护者优先级与社区呼声高度对齐。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P1 (阻塞/数据丢失)** | [#62708](https://github.com/NousResearch/hermes-agent/issues/62708) Silent context-overflow: compression blocked without warning/indicator | 压缩被冷却/防抖阻塞时无任何提示，上下文无限膨胀至硬限制导致模型静默失败 | ❌ 无 | 会话级灾难性故障，需尽快加入降级提示与指示器 |
| **P1** | [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) vision_analyze/browser_vision inlines oversized image → 400 non-retryable → session bricked | 视觉工具未校验像素尺寸直接内联 base64，Anthropic 拒绝后整个会话不可恢复 | ❌ 无 | 工具链缺乏输入守卫，影响所有视觉模型调用 |
| **P2 (核心功能受损)** | [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) Telegram >15 MB upload timeout; env var ignored | 大媒体上传必失败，配置无效 | ❌ 无 | 需在 PTB `HTTPXRequest` 注入 `media_write_timeout` |
| **P2** | [#66875](https://github.com/NousResearch/hermes-agent/issues/66875) Desktop latest session switch broken after tab navigation | 侧边栏最新会话点击无响应 | ❌ 无 | 前端路由/状态同步竞态，复现率高 |
| **P2** | [#69551](https://github.com/NousResearch/hermes-agent/issues/69551) Desktop SSH remote broken with non-default profile (token path mismatch) | 非默认 profile 下 SSH token 路径解析错误，硬编码 `~/.hermes/desktop-ssh` | ❌ 无 | 多 profile 架构下的路径解析不一致 |
| **P2** | [#57775](https://github.com/NousResearch/hermes-agent/issues/57775) Windows `atomic_replace` drops writes on `ERROR_SHARING_VIOLATION` | 并发读导致 `os.replace` 失败且未回退，静默丢写 | ❌ 无 | Windows 文件锁语义差异，需扩展回退错误码集合 |
| **P2** | [#63222](https://github.com/NousResearch/hermes-agent/issues/63222) ACP model switch preserves stale `base_url` | 切换模型后仍路由到旧端点 | ❌ 无 | 提供商属性回退逻辑缺陷 |
| **P2** | [#65942](https://github.com/NousResearch/hermes-agent/issues/65942) Snapshot restore leaves newer data when `state.db` open (WAL) | 热数据库替换后活连接仍持有新状态 | ❌ 无 | 需协调 SQLite WAL 连接或加锁替换 |
| **P2** | [#69638](https://github.com/NousResearch/hermes-agent/issues/69638) Desktop queued large image → WS message limit → reconnect loop + localStorage bloat | 大图 base64 超过 WS 限制触发重连风暴，本地存储膨胀 | ❌ 无 | 需分片上传或拒绝入队超限媒体 |
| **P3 (体验/边缘)** | [#46369](https://github.com/NousResearch/hermes-agent/issues/46369) Desktop shortcuts ignore Dvorak/non-QWERTY (uses `event.code`) | 非标准键盘布局快捷键失效 | ❌ 无 | 改用 `event.key` 修复 |
| **P3** | [#47930](https://github.com/NousResearch/hermes-agent/issues/47930) Windows Desktop active session arc-border animation static | Windows 上活动会话边框动画不播放 | ❌ 无 | 可能为 CSS/渲染器差异 |
| **P3** | [#66183](https://github.com/NousResearch/hermes-agent/issues/66183) Docker `memory_tool.py` creates dirs with 000 permissions | 容器内内存目录不可读写 | ❌ 无 | `mkdir` 缺 `mode` 参数 |
| **P3** | [#47812](https://github.com/NousResearch/hermes-agent/issues/47812) Azure OpenAI `DeploymentNotFound` 404 | 部署就绪延迟导致启动报错 | ❌ 无 | 需重试/轮询部署就绪 |
| **P3** | [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) `.env` sanitizer doesn’t remove `KEY=***` placeholders | 占位符被当作真实凭证加载 | ❌ 无 | 清理逻辑缺失，安全隐患 |

> **已有 Fix PR 的关键 Bug**：#62477（会话自愈）、#62689（Copilot base_url）、#69740（cron env

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-23

> 数据来源：GitHub API / 网页抓取 | 统计周期：2026-07-22 至 2026-07-23 (UTC) | 项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览
- **整体活跃度：中等偏高**。过去 24 小时无新版本发布，但代码库维护活动频繁：**5 个 PR 更新**（2 个已合并/关闭，3 个待审核）与 **4 个 Issue 活跃**（均为 Open 状态）。
- **核心动向**：维护团队集中处理**依赖安全更新**（Go 版本升级、漏洞修复）与**文档清理**（移除废弃引用），同时社区反馈聚焦于**连接稳定性**（Matrix 重连缺失）、**协议适配**（DingTalk 图片、IRC 长消息）及**架构扩展性**（无状态网关模式、Hook 反序列化缺陷）。
- **风险点**：Issue #3203（Matrix 静默死亡）已持续 21 天且获 2 👍，属高严重度稳定性缺陷，尚无对应 Fix PR；Issue #3258（Hook 反序列化失效）阻断用户自定义逻辑，标记 `stale` 但未见进展。
- **技术债清理**：PR #3222（DeltaChat 重构 -200 LOC）与 PR #3163（Bedrock Prompt Caching）虽标记 `stale`，但体现项目向精简架构、云厂商深度集成演进的长期方向。

---

## 2. 版本发布
> 过去 24 小时 **无新版本发布**（最新 Release 仍为 v0.3.x 系列）。当前合并的 PR #3286（Go/x/text 升级）与 PR #3285（文档回滚）为维护性提交，预计将汇入下一个 Patch 版本（如 v0.3.2）。

---

## 3. 项目进展：已合并/关闭 PR（2 个）

| PR | 标题 | 类型 | 核心变更 | 对项目推进度 |
|----|------|------|----------|--------------|
| [#3286](https://github.com/sipeed/picoclaw/pull/3286) | **fix: update Go and x/text for govulncheck** | 🐞 安全/维护 | 升级 Go 版本至 1.23.x（推测），更新 `golang.org/x/text` 修复 `govulncheck` 报告的漏洞。 | **高** - 消除供应链安全隐患，保障 CI/CD 合规通过，为后续版本发布扫清阻碍。 |
| [#3285](https://github.com/sipeed/picoclaw/pull/3285) | **docs: remove picopaw** | 📖 文档/回滚 | 撤销 PR #3096 引入的 `picopaw` 相关文档/引用。 | **低** - 清理无效/废弃文档，减少用户认知负担，属常规卫生维护。 |

> **整体评估**：今日合并以**安全合规**与**文档卫生**为主，功能性推进为 0。3 个 Open PR（见下文）处于审核/讨论期，短期内合并概率中等。

---

## 4. 社区热点：高互动 Issues/PRs（Top 3）

| 排名 | 对象 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | **Issue [#3203](https://github.com/sipeed/picoclaw/issues/3203)** | 👍 **2** · 评论 **5** · 活跃 21 天 | **生产级稳定性痛点**：Matrix `/sync` 长轮询断网后**永久静默**，主进程存活导致 systemd 不重启。用户需**自动重连+指数退避**机制，属基础设施级 Bug，阻碍生产部署。 |
| 2 | **Issue [#3258](https://github.com/sipeed/picoclaw/issues/3258)** | 👍 0 · 评论 1 · 标记 `stale` | **扩展机制失效**：Process Hook `before_tool` 中 `decision` 字段被丢弃、`args` 反序列化错误。直接导致“工具调用拦截/改写”功能不可用，打击插件生态信心。 |
| 3 | **PR [#3222](https://github.com/sipeed/picoclaw/pull/3222)** | 评论未计数 · 标记 `stale` · **-200 LOC** | **DeltaChat 渠道深度重构**：移除遗留特性/硬编码/密码配置，引入官方中继列表、JSONRPC 密钥管理。虽标 `stale`，但体现维护者向**精简、安全、标准化**演进的强信号。 |

---

## 5. Bug 与稳定性：今日报告/活跃缺陷（按严重度排序）

| 严重度 | Issue | 标题 | 关键症状 | 是否有 Fix PR | 备注 |
|--------|-------|------|----------|---------------|------|
| **P0 (阻塞/数据丢失风险)** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop 无重连逻辑 — 网络/服务端故障后静默死亡 | 长轮询彻底停止，进程存活但无流量处理，systemd `Restart=on-failure` 失效，**需人工重启** | ❌ 无 | **最急需修复**，建议立即指派/里程碑化 |
| **P1 (功能失效)** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Process Hook `before_tool` modify 失效：decision 丢弃、args 反序列化缺陷 | Hook 返回 `decision: "block"` 等被忽略，参数解析报错，自定义拦截逻辑完全失效 | ❌ 无 | 标记 `stale` 可能因复现难/优先级低，建议补充最小复现用例 |
| **P2 (协议不兼容)** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息（>512B）被拆分为多条，导致语义破碎 | IRCv3 长消息自动分片，PicoClaw 视为独立消息，上下文断裂 | ❌ 无 | 新增 Feature Request 性质，需协议层缓冲重组 |
| **P2 (功能缺失)** | [#3283](https://github.com/sipeed/picoclaw/pull/3283) | DingTalk 渠道不支持图片入站消息 | 用户发图片给 Bot 无响应/报错 | ✅ **PR #3283 (Open)** | 已有实现 PR，含 Token 缓存、下载、优雅降级，**审核通过即可缓解** |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/实现进度 | 纳入下版本预测 |
|----------|----------|------------------|---------|
| **Issue [#3257](https://github.com/sipeed/picoclaw/issues/3257)** | **Gateway 无状态/无历史模式**：CLI 可通过 `--session` 隔离会话，Gateway 仅能靠 channel/channel_user 键绑定，无法创建临时会话。 | 无 PR | v0.4.x（架构调整大） |
| **Issue [#3287](https://github.com/sipeed/picoclaw/issues/3287)** | **IRC 长消息重组**：按 IRCv3 规范缓冲分片，还原单条逻辑消息。 | 无 PR | v0.3.x（协议层补丁） |
| **PR [#3163](https://github.com/sipeed/picoclaw/pull/3163)** | **Bedrock Prompt Caching (Converse API)**：利用 `cachePoint` 降低 90% 读成本、写成本 1/8。 | **Open, stale 30 天** | v0.3.x（高价值，云厂商集成优先） |
| **PR [#3222](https://github.com/sipeed/picoclaw/pull/3222)** | **DeltaChat 现代化重构**：-200 LOC，移除密码配置、硬编码中继，改 JSONRPC 密钥、官方中继列表。 | **Open, stale 20 天** | v0.4.x（破坏性配置变更需大版本） |
| **PR [#3283](https://github.com/sipeed/picoclaw/pull/3283)** | **DingTalk 图片入站支持**：完整实现 Token 缓存、下载、字段解析、降级。 | **Open, 新建** | **v0.3.2 (高概率，修复型功能)** |

> **路线图研判**：v0.3.x 将聚焦**安全修复（PR #3286）**、**DingTalk 图片（PR #3283）**、**IRC 长消息**等增量改进；v0.4.x 将承载 **Gateway 无状态模式**、**DeltaChat 重构**、**Bedrock Caching** 等架构级演进。

---

## 7. 用户反馈摘要：真实痛点与场景

| 来源 | 痛点/场景原话 | 情感倾向 | 隐性需求 |
|------|---------------|----------|----------|
| **Issue #3203 评论区** | *"Matrix 断网后进程假死，systemd 也不重启，凌晨 3 点被叫醒手动重启"* | 😡 **强烈不满** | 生产级守护进程能力：健康检查端点、自动重连、指标暴露 |
| **Issue #3258 作者** | *"Hook 文档写着能改 decision 和 args，实际全丢……怀疑是反序列化层吃掉了字段"* | 😕 **困惑/失望** | Hook 契约测试、文档与实现同步、最小复现模板 |
| **Issue #3257 作者** | *"Gateway 模式下想跑一次性任务（如 CI Bot），每次都要手动删数据库 session 记录，太笨重"* | 😐 **务实抱怨** | 会话隔离粒度控制、临时会话 TTL、无状态执行标志 |
| **Issue #3287 作者** | *"IRC 用户粘贴日志/代码片段常超 512B，PicoClaw 回复支离破碎，体验极差"* | 😟 **体验受损** | 协议层透明重组、分片缓冲超时配置 |

> **共性洞察**：用户已将 PicoClaw 用于**生产自动化（CI Bot、网关代理、多协议桥接）**，对**稳定性（重连、假死）**、**扩展性（Hook、无状态）**、**协议保真度（IRC、DingTalk）**要求显著高于早期“玩具级”预期。

---

## 8. 待处理积压：长期未响应的高价值项（维护者关注清单）

| 对象 | 停滞时长 | 重要性 | 建议动作 |
|------|----------|--------|----------|
| **Issue [#3203](https://github.com/sipeed/picoclaw/issues/3203)** | **21 天** (创建 07-02) | 🔴 **最高** | 1. 立即指派/建立 `bug:reliability` 标签<br>2. 产出最小复现 Docker Compose<br>3. 设计：`sync` 循环外层包装 `reconnect(with backoff, max_retries=0)` + 健康检查 goroutine |
| **PR [#3163](https://github.com/sipeed/picoclaw/pull/3163)** (Bedrock Caching) | **30 天** (创建 06-23) | 🟠 **高** | 1. 请维护者 `@loafoe` / 核心团队 Review<br>2. 补充：缓存命中率指标、成本对比测试用例<br>3. 若 API 稳定，标记 `ready-to-merge` 进 v0.3.x |
| **PR [#3222](https://github.com/sipeed/picoclaw/pull/3222)** (DeltaChat 重构) | **20 天** (创建 07-03) | 🟠 **高** | 1. 需 **Breaking Change 评估**：配置迁移指南、JSONRPC 密钥部署文档<br>2. 可考虑拆分：先合并“移除硬编码中继/密码配置”（非破坏），再推“字段重命名/全量重构” |
| **Issue [#3258](https://github.com/sipeed/picoclaw/issues/3258)** (Hook 反序列化) | **8 天** (创建 07-15) | 🟡 **中** | 1. 取消 `stale` 标签，改 `bug:extension`<br>2. 要求作者补充：Hook 脚本完整代码、输入/输出 JSON 样例、Go 版本<br>3. 定位：`encoding/json` vs `jsoniter`、字段标签大小写、指针 vs 值传递 |

---

### 📌 给维护者的行动建议 (Action Items)
1. **今日/明日**：Review & Merge **PR #3283** (DingTalk 图片)、**PR #3286** 已合并；将 **Issue #3203** 纳入本周 Sprint，指派 Owner。
2. **本周内**：对 **PR #3163** (Bedrock) 与 **PR #3222** (DeltaChat) 做 **Go/No-Go 决策**——是合并入 v0.3.x 还是规划入 v0.4.0-milestone。
3. **流程改进**：为 Hook 机制（Issue #3258）补充 **Contract Test Suite**（Golden Files），防止反序列化回归；在 README/CONTRIBUTING 增加 “最小复现模板” 强制字段。

---
*报告生成时间：2026-07-23 08:15 UTC | 下次更新：2026-

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-23

> **数据范围**：2026-07-22 00:00 – 2026-07-23 00:00 (UTC)  
> **数据来源**：github.com/qwibitai/nanoclaw (Issues, PRs, Releases)

---

## 1. 今日速览

- **整体活跃度：低-中等** ⚡。过去 24 小时无版本发布，无 PR 合入主干，代码库处于“积累待审”状态。
- **核心动向**：社区关注点集中在 **安全文档准确性**（Issue #3118）、**WhatsApp 双通道身份统一**（PR #3070）、**Telegram 原生富文本渲染**（PR #2877）以及 **本地开发者工具生态扩展**（PR #3117）。
- **风险提示**：Issue #3118 指出自托管 OneCLI 网关下 OAuth 凭据隔离的文档宣称与实现不符，属**安全合规类隐患**，建议优先响应。
- **积压信号**：3 个 PR 均处于“Open > 1 天”且无 Review 进展，其中 PR #2877 已滞留 25 天，维护者带宽可能不足。

---

## 2. 版本发布

> 过去 24 小时 **无新版本发布**。

---

## 3. 项目进展

| PR | 标题 | 状态 | 关键进展 | 对主线的推进度 |
|----|------|------|----------|----------------|
| [#3070](https://github.com/nanocoai/nanoclaw/pull/3070) | Fix WhatsApp sender identity divergence between Baileys and Cloud paths | **Open** (7 天) | 修复 Baileys 与 Cloud API 两条路径对同一手机号生成不同 `user_id` 的不一致问题，消除上下文混淆风险。 | 🔧 **高** — 修复核心通道逻辑缺陷，解除 #3069 阻塞。 |
| [#3117](https://github.com/nanocoai/nanoclaw/pull/3117) | feat(skill): add-omarchy-statusbar — Waybar status indicator | **Open** (1 天) | 新增 Utility Skill，为 Waybar (Omarchy/Hyprland) 提供 NanoClaw 状态指示器，纯配置层，无核心代码变更。 | 🆕 **低** — 生态扩展，不影响核心稳定性。 |
| [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) | feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage | **Open** (25 天) | 引入 Telegram Bot API 10.1 `sendRichMessage` 实现原生富文本渲染，替代现有 Markdown/HTML 回退方案。 | ✨ **中** — 提升 Telegram 体验，但长期无 Review 暗示优先级被降级。 |

> **合并/关闭统计**：过去 24h **0 个 PR 合入**，主分支代码未前进。

---

## 4. 社区热点

| 排名 | 对象 | 交互指标 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118) | 👍 0 · 💬 0 (新建) | **安全/合规**：`SECURITY.md` 宣称“每 Group 独立 OneCLI Agent Identity”，实则自托管网关下 OAuth 连接为**账号级共享**。用户要求：要么修复实现实现真隔离，要么修正文档停止过度承诺。 |
| 2 | [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070) | 👍 0 · 💬 未披露 | **数据一致性**：WhatsApp 双通道并存导致同一用户拥有两套身份，阻断会话上下文共享，属生产环境 Bug。 |
| 3 | [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877) | 👍 0 · 💬 未披露 | **平台能力跟进**：Telegram 官方推出 Rich Message 新 API，社区期望第一时间享受原生渲染，避免 Markdown 解析差异。 |

> **观察**：Issue #3118 虽互动为 0，但属 **SECURITY.md** 核心文档缺陷，潜在影响面大（所有自托管部署），建议置顶处理。

---

## 5. Bug 与稳定性

| 严重度 | 标识 | 现象 | 影响范围 | 是否有 Fix PR |
|--------|------|------|----------|---------------|
| **High** 🔴 | [#3118](https://github.com/nanocoai/nanoclaw/issues/3118) | 文档声称的凭据隔离在自托管 OneCLI 下失效，可能导致跨 Group 凭据泄露 | 所有自托管部署、多租户场景 | ❌ 无 |
| **Medium** 🟠 | [#3069 → #3070](https://github.com/nanocoai/nanoclaw/pull/3070) | WhatsApp Baileys/Cloud 双路径 `user_id` 不一致，导致会话上下文断裂 | 同时启用双通道的 WhatsApp 实例 | ✅ **#3070** (待 Review) |
| **Low** 🟡 | — | 无新崩溃/回归报告 | — | — |

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 关联 PR | 纳入下一版本概率 | 备注 |
|----------|----------|---------|------------------|------|
| PR #2877 | Telegram 原生 Rich Message (Bot API 10.1) | #2877 | **60%** | 技术就绪，仅待 Review 带宽；若 v0.x 发布节奏加快则大概率入选。 |
| PR #3117 | Waybar/Omarchy 状态栏集成 | #3117 | **90%** | 纯 Utility Skill，零破坏性，审核成本极低，极易合入。 |
| Issue #3118 (隐性) | 真正的 Per-Group OAuth 隔离实现 | 无 | **20%** | 属架构级重构，短期内大概率仅更新文档降级承诺，而非实现隔离。 |

---

## 7. 用户反馈摘要

> 过去 24h 仅 Issue #3118 含用户直接反馈，评论区为空。从 Issue 描述提炼痛点：

- **信任受损**：“文档写着隔离，实际部署发现共享，这在合规审计时会被判不合规。”
- **场景**：多部门（销售/客服）共用一套自托管 OneCLI，期望凭据物理隔离，现状只能接受逻辑隔离或拆分网关实例。
- **期望**：要么给出“共享模式”明确文档，要么提供 `--per-group-oauth` 运行时开关。

---

## 8. 待处理积压 ⚠️

| 对象 | 滞留天数 | 优先级 | 维护者行动建议 |
|------|----------|--------|----------------|
| [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877) | **25 天** | P1 | 指派 Reviewer（建议 @robbyczgw-cla 自荐或 @core-team 轮值）；若 CI 通过，直接批准合入。 |
| [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070) | **7 天** | P0 | 关联 Bug #3069，建议本周内完成 Review 并合入 `main`，回归测试后切入下一 Patch。 |
| [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118) | **1 天** | **P0 (安全/合规)** | 立即确认：<br>1. 文档修正 PR（30 分钟）<br>2. 若承诺实现隔离，开设 Epic 并标记 `security` `breaking-change`。 |
| [PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117) | **1 天** | P2 | 仅需检查 SKILL.md 规范与 CI，建议 48h 内合入鼓励社区贡献。 |

---

## 📌 给维护者的单日行动清单

1. **今日必做**：回复/分诊 Issue #3118，给出“文档修正”时间承诺（≤ 3 天）。
2. **本周目标**：合入 PR #3070（修复 WhatsApp 身份分裂）、PR #3117（低风险增值）、PR #2877（清理 25 天积压）。
3. **流程改进**：考虑引入 **“72h 首次 Review SLA”** 标签自动化，避免 PR 长期挂起。

---

*报告生成时间：2026-07-23 06:00 UTC*  
*下一份日报将于 2026-07-24 同步发布。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-07-23

---

## 1. 今日速览
- **整体状态**：项目今日处于**低频高质量**维护节奏，核心维护者 Tetraslam 在 24 小时内完成了一个严重 Discord 网关稳定性 Bug 的定位、修复与验证闭环。
- **活跃度评估**：⭐⭐☆☆☆（低频）。过去 24 小时仅 1 个 Issue 与 1 个 PR，均已关闭，无新版本发布、无社区广泛讨论，呈现典型的“核心维护者定点攻坚”模式。
- **核心进展**：修复了导致 Discord 机器人处理完首条 `MESSAGE_CREATE` 后永久“失聪”的阻塞性缺陷（Issue #977），根因定位为打字指示器线程栈溢出（PR #978），修复已合并入主干。
- **风险提示**：该 Bug 为 100% 可复现的生产环境崩溃级缺陷，建议依赖 Discord 网关的用户尽快拉取最新主干或等待后续热修复版本发布。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展

| PR / Commit | 标题 | 状态 | 核心变更 | 对项目推进度 |
| :--- | :--- | :--- | :--- | :--- |
| **[#978](https://github.com/nullclaw/nullclaw/pull/978)** | `discord: run typing thread on the heavy runtime stack` | **已合并/关闭** | 将 Discord 打字指示器后台线程的运行时栈从 `AUXILIARY_LOOP_STACK_SIZE` (512KB) 迁移至重型运行时栈。解决了 `std.http.Client` -> `std.crypto.tls` 在 TLS 握手阶段大块内联 `memcpy` 导致 512KB 栈溢出、进而引发进程中止的问题。 | ⭐⭐⭐⭐⭐ **关键阻塞修复**。直接解决了 Issue #977 中“处理一条消息后永久失聪”的根因，恢复了 Discord 网关的长连接稳定性。 |

---

## 4. 社区热点

| 项目 | 标题 | 互动数据 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **[Issue #977](https://github.com/nullclaw/nullclaw/issues/977)** | Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE | 💬 1 条评论 / 👍 0 | **生产环境阻塞性 Bug 报告**。用户 Tetraslam (核心维护者) 提供了极其详细的复现步骤、日志与栈追踪，明确指出“心跳正常但事件分发停止”，诉求为**立即修复网关事件循环阻塞**，而非单纯的功能增强。评论区直接关联了修复 PR #978，形成高效“报告-定位-修复”闭环。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 标题 | 状态 | 关联 Fix PR | 影响范围 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0 (崩溃/数据丢失)** | **[#977](https://github.com/nullclaw/nullclaw/issues/977)** | Discord gateway 永久失聪 (栈溢出) | **已关闭** | **[#978](https://github.com/nullclaw/nullclaw/pull/978)** | 所有使用 Discord 网关、且触发打字指示器功能的实例。表现为：启动 -> 处理 1 条消息 -> 发送打字指示 -> TLS 握手栈溢出 -> 线程崩溃 -> 事件循环卡死 -> 心跳存活但无事件分发。 |

> **稳定性结论**：今日修复的为**单点故障导致的全链路不可用**缺陷，修复后该路径稳定性预期大幅提升。建议回归测试覆盖“高频消息触发打字指示”场景。

---

## 6. 功能请求与路线图信号
> 今日无新功能请求 Issue 或 RFC 类 PR。
> **信号解读**：当前迭代周期处于**“稳定性巩固期”**而非“功能扩展期”。核心维护者精力集中于修复现有网关协议实现的边缘案例（栈大小、TLS 开销），下一版本大概率为修复版而非功能版。

---

## 7. 用户反馈摘要
- **真实痛点**：用户（即维护者自测）遭遇“**沉默性故障**”——进程未退出、心跳正常、日志无报错，但业务逻辑完全失效。这类故障在生产环境极难被传统存活探针发现。
- **使用场景**：长连接 Discord 网关，依赖 `MESSAGE_CREATE` 触发业务流程，且开启了打字指示器回复机制。
- **满意度侧面印证**：Issue 创建至关闭仅耗时数小时，且维护者自行提供完整复现与修复，反映项目**内部质量把控流程高效**，但也暗示**外部贡献者参与度较低**（无外部 👍/评论）。

---

## 8. 待处理积压
> 基于今日数据无法直接识别长期积压项（GitHub API 仅返回 24h 增量）。
> **维护者建议关注**：
> 1.  **栈大小配置化**：当前修复为硬编码切换至“重型栈”，未来是否需引入 `stack_size` 配置项供嵌入式/受限环境调优？
> 2.  **网关健康检查增强**：引入“事件分发吞吐率”指标，而非仅依赖心跳，以便自动化探测类 #977 的“僵尸连接”状态。
> 3.  **依赖链栈消耗审计**：`std.http` -> `std.crypto.tls` 调用链在 512KB 栈下溢出，提示其他辅助线程（如 Webhook 发送、文件上传）可能存在同类隐患，建议全量扫描辅助线程栈配置。

---

**📌 数据来源**: `github.com/nullclaw/nullclaw` | 统计窗口: 2026-07-22 00:00 - 23:59 (UTC)  
**🤖 报告生成**: NullClaw 项目日报自动化分析脚本 v0.1

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-23

> **数据窗口**：2026-07-22 至 2026-07-23 (UTC)  
> **数据源**：GitHub Issues (50 条更新) / Pull Requests (50 条更新) / Releases (0 个)

---

## 1. 今日速览

*   **高强度冲刺期**：过去 24 小时累计 **100 条** Issue/PR 更新（Issue 50，PR 50），合并/关闭比约 1:1，显示团队正处于 **v1 发布前的全速收敛期**，重心从特性开发转向架构收口、测试补齐与部署阻塞清除。
*   **架构重构“ProductSurface”落地加速**：核心维护者 `ilblackdragon` 主导的 4 个 XL 级 PR（#6538, #6480, #6529, #6442）同步推进，将 OpenAI 兼容层、Operator/Admin API、出站偏好、运行时组合统一路由至 `ProductSurface`，标志着 **Reborn 架构边界正式固化**。
*   **v1 Launch Checklist 阻塞项显性化**：新增 3 个 `[v1-launch-checklist]` Issue（#6523, #6534, #6522），直指 **Test Build 部署失败、Hosted 环境 Google OAuth 不生效、Telegram 本地接入文档缺失**——均为发布门槛级问题，已有对应 Fix PR（#6533 部分修复 #6534）进入审查。
*   **测试基建补课集中爆发**：`serrrfirat` 连开 4 个 Epic 级 Issue（#6524, #6284, #6105, #4775）并配套 5 个测试类 PR（#6535, #6528, #6525, #6526, #6537），试图在发布前建立 **“能力级覆盖清单 + Hermetic E2E 平台 + Release 分支全量门禁”** 的质量护栏。
*   **历史债务显性关闭**：`BenKurrek` 单日关闭 10 个 “Completed foundation” 回顾性 Issue（#6493–#6519），完成 **Manifest V2、Telegram 生产化、Extension Runtime 统一、Operator 配置写面、测试策略强制** 等里程碑的正式归档，代码库“已知已完成”可视化程度显著提升。

**活跃度评级**：🔥🔥🔥🔥🔥 (满分 5 火) — 核心团队全员在线，PR 吞吐量极高，且呈现强烈的“发布导向”聚焦特征。

---

## 2. 版本发布

> **无新版本发布**。  
> 当前最新发布为 `ironclaw_common 0.5.0` / `ironclaw_skills 0.4.0` (见 PR #5598，仍处 Open 状态，含 Breaking Changes)，预计随 v1.0.0-rc.1 同步切版。  
> **关注点**：PR #6537 正推动 `release-fix-*` 分支强制跑满 Reborn Tests/E2E，通过后将触发 RC 切版流程。

---

## 3. 项目进展（已合并/关闭的关键 PR 与里程碑）

| PR / Issue | 标题/主题 | 影响面 | 进展说明 |
| :--- | :--- | :--- | :--- |
| **#6535** ✅ **Closed** | `test(reborn): add Slice 0 reference model oracles` | **测试基建/核心** | 引入纯内存 `TurnStateRowStore` 参考模型，覆盖提交/认领/心跳/阻塞/恢复/取消/完成/失败/租约过期/竞争认领/重开恢复全生命周期，**为 Hermetic E2E 提供黄金基线**。 |
| **#6519** ✅ **Closed** | `Completed foundation: Testing playbook and required PR test strategy` | **工程规范** | 正式落地：PR 必填 Test Strategy + TDD Playbook，提升变更质量门槛。 |
| **#6515** ✅ **Closed** | `Completed foundation: Operator configuration write plane` | **运维/配置** | `ironclaw config set` 成为唯一写入入口，明文/加密/校验/显式 apply 分离，Hosted 部署配置管理能力成熟。 |
| **#6514** ✅ **Closed** | `Completed foundation: Generic installation ownership and extension runtime` | **扩展生态** | 统一 Extension 安装所有权、用户可见性、运行时基座，为租户治理铺路。 |
| **#6513** ✅ **Closed** | `Completed foundation: Per-user extension lifecycle and OAuth hardening` | **安全/扩展** | OAuth 与用户级生命周期硬化：Actor-scoped 清理、成员感知移除、凭证撤销、持久续期。 |
| **#6499/6498** ✅ **Closed** | `Telegram production-image support` / `Reborn Telegram channel` | **Channel/生产化** | Telegram 正式编译进生产镜像，支持 Admin Bot 配置、用户配对码、DM 入口、Replies、触发式投递、规范 Thread/Turn/Run 执行。 |
| **#6495/6494/6493** ✅ **Closed** | `Unified generic extension runtime` / `Manifest-driven ingress` / `Manifest V2 Registry` | **架构/扩展** | 完成 Extension Manifest V2 注册表、声明式 Ingress、统一泛型运行时三部曲，**Extension 平台化基建彻底收口**。 |

> **整体推进度**：核心运行时、扩展平台、Channel 层、配置面、测试规范 **五大支柱全部“已知完成”并归档**，剩余风险集中在 **Hosted 部署适配、v1 Checklist 阻塞、端到端测试覆盖率** 三大攻坚战。

---

## 4. 社区热点（评论/互动最多的 Issues & PRs）

| 排名 | 链接 | 类型 | 评论/互动 | 核心诉求/争议点 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **[#6284](https://github.com/nearai/ironclaw/issues/6284)** | Issue (Epic) | 💬 4 | **“Error Recoverability Endgame”** —— 要求 **100% 中途错误可恢复**：运行存活、模型可见、携带原因与修复建议、模型获得行动回合。讨论聚焦“终态失败仅保留给真正不可恢复错误”的边界定义与实现路径。 |
| 2 | **[#6105](https://github.com/nearai/ironclaw/issues/6105)** | Issue (Enhancement) | 💬 3 | **Slack/Extension 生命周期状态机测试 + Canary Lane** —— 承认过去两周 **Slack 连接/断开/重连/卸载** 为 #1 用户可见 Bug 族，且跨 4 波 QA 均回归。要求把完整状态机跑进 Cron Canary，彻底杜绝回归。 |
| 3 | **[#6538](https://github.com/nearai/ironclaw/pull/6538)** | PR (XL) | 👀 高关注 | **Route OpenAI compat through ProductSurface** —— 核心架构 PR，将 OpenAI Chat/Responses 从 `ProductWorkflow` 迁移到 `ProductSurface`，复用 WebUI Facade，保留 10MiB 内联图片限制。标志着 **对外 API 统一入口落定**。 |
| 4 | **[#6480](https://github.com/nearai/ironclaw/pull/6480)** | PR (XL) | 👀 高关注 | **Continue ProductSurface conversion for operator/project/admin/automation/view APIs** —— 同步推进 Operator/Admin/Automation/View 全系 API 迁移，保留 API-only 能力并复用 Operator Tool Catalog 做读写校验。 |
| 5 | **[#6534](https://github.com/nearai/ironclaw/issues/6534)** | Issue (v1-blocker) | 💬 1 | **Hosted Staging Google OAuth 配置不生效** —— Operator 能保存但 Runtime 读不到；`ironclaw config set` 路径与 WebUI 路径不一致。PR #6533 已部分修复（容器重启/报错 UX），但 WebUI 消费路径仍开放。 |

> **洞察**：讨论热度高度聚焦于 **“架构边界最终确认”** 与 **“发布阻塞项的可复现性/可修复性”**，非功能性需求（可靠性、可测试性、可运维性）占据绝对主导。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 影响范围 | Fix PR 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 P0 (发布阻塞)** | **[#6523](https://github.com/nearai/ironclaw/issues/6523)** | Onboarding 勾选 “Test Build” 导致 Agent 创建部署失败 | 所有新用户首发体验 / CI 验证流 | ❌ 无 PR，需紧急排查部署流水线标志位逻辑 |
| **🔴 P0 (发布阻塞)** | **[#6534](https://github.com/nearai/ironclaw/issues/6534)** | Hosted Staging 保存 Google OAuth 后 Runtime 不生效；`ironclaw config set` 可绕过 | 所有 Hosted 部署的 Google Suite/Gmail 接入 | ⚠️ **#6533 部分修复** (容器模式重启/apply & 错误提示)，WebUI 配置消费路径未闭环 |
| **🟠 P1 (核心功能缺失)** | **[#6475](https://github.com/nearai/ironclaw/issues/6475)** | Telegram `/pair` 指令不被识别，用户陷入配对死循环 | Telegram 首次接入用户 100% 复现 | ❌ 无 PR，需在 Extension Ingress 层修复命令路由 |
| **🟠 P1 (核心功能缺失)** | **[#6478](https://github.com/nearai/ironclaw/issues/6478)** | Agent 已连 Telegram 却跳转 Slack 授权 | 多 Channel 共存场景，路由决策逻辑错乱 | ❌ 无 PR，涉及 `ChannelInboundProductSurface` 路由优先级 |
| **🟠 P1 (配置缺失)** | **[#6474](https://github.com/nearai/ironclaw/issues/6474)** | Delivery Defaults 页面仅显示 “Web app only”，无法配置 Telegram/Slack 投递 | 所有需外部投递的用户 | ❌ 无 PR，WebUI 侧 Delivery Target Catalog 未接入 |
| **🟡 P2 (运维工具缺失)** | **[#6521](https://github.com/nearai/ironclaw/issues/6521)** ✅ Closed | `ironclaw` CLI 未随 Agent Staging 镜像分发 | 运维人员 SSH 运维受阻 | ✅ 已关闭，推测随镜像构建修复或文档更新规避 |
| **🟡 P2 (文档/体验)** | **[#6522](https://github.com/nearai/ironclaw/issues/6522)** | 无 Telegram 本地/云端接入指引（参考 Google 体验） | 新用户自助接入成功率 | ❌ 无 PR，需补齐 WebUI 开发者文档/用户向导 |

> **稳定性趋势**：**新增 P0/P1 多为“发布前才暴露的集成/部署问题”**，单元测试覆盖不到，依赖 Hermetic E2E 与 Canary 暴露。当前 **Fix PR 覆盖率 < 30%**，需在未来 48h 内集中攻坚。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/动作 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **[#6532](https://github.com/nearai/ironclaw/issues/6532)** (New) | **Attested Signing + Ledger Clear Signing** — Agent 代签链上交易但无法单方面动用资金 | 设计阶段 (Phase A Plan) | 🟢 **高 (Post-v1)** | `zmanian` 提出，属于 “AI + Wallet” 核心差异化赛道，v1 后首个大 Epic 预定项。 |
| **[#5459](https://github.com/nearai/ironclaw/issues/5459)** (Active) | **Configurable Skills/Tools** — Admin/User 维度安装 WASM Tool/Skill，权限隔离 | 长期 Open，无近期 PR | 🟡 **中 (v1.1+)** | 涉及 Capability Catalog 权限模型细化，依赖 #6514 基建完成后再迭代。 |
| **[#2246](https://github.com/nearai/ironclaw/issues/2246)** (Old) | **Unify Extension Model: MCP as Single-tool Ext + Provider Dedup** | 无近期动作 | 🔴 **低 (v2)** | 架构层面大手术，当前 ProductSurface/Manifest V2 已固化，短期不再动刀。 |
| **[#6539](https://github.com/nearai/ironclaw/pull/6539)** (PR) | **BENCHMARKING_MODE System Prompt Addendum** — 关闭 “问用户” 逃逸阀，利于无人值守评测 | Open, size M | 🟢 **高 (v1)** | 纯 Prompt 级变更，低风险，直接服务于 #6524 Hermetic Eval 平台。 |
| **[#6232](https://github.com/nearai/ironclaw/pull/6232)** (PR) | **Auto-activate web-access & Brave web_search** — 让 Agent 首次即可发现真实搜索 | Open, size XL | 🟢 **高 (v1)** | 体验关键项，解决 “Agent 不知有搜索工具” 的冷启动问题，依赖 Extension Catalog 机制已就绪。 |

> **路线图信号**：**v1 范围已锁定**（ProductSurface 收口、Telegram/Slack 生产化、Operator Config、基础 E2E），**v1.1+ 将聚焦 “技能/工具市场化” 

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-07-23

---

## 1. 今日速览
- **整体状态**：项目今日处于**维护与技术债清理期**，无新功能发布，无新版本推送。核心动作集中在合并/关闭历史遗留 PR 与 Issue，及修复若干渲染层、安装器与内存溢出相关的稳定性问题。
- **活跃度评估**：**低-中**。过去 24 小时仅 1 条 Issue 更新（标记为 stale 关闭），5 条 PR 全部关闭/合并，其中 3 条为 2026-04 创建的长期积压 PR 统一清理，2 条为近期新建并快速合并的修复型 PR。社区讨论度极低（无评论、无 Reaction），属典型“内部推进”节奏。
- **核心看点**：Windows 安装器安全加固、OpenClaw 超大上下文 OOM 防护、Cowork 导出弹窗层级修复、定时任务 Cron 表达式增强（历史 PR 补合）等落地，显著提升客户端稳定性与体验一致性。

---

## 2. 版本发布
> **无新版本发布**（Releases 列表为空）。

---

## 3. 项目进展
今日共 **5 个 PR 关闭/合并**，覆盖安装器、渲染层、协作、定时任务、OpenClaw 网关五大模块，推进了 **稳定性、安全性、交互一致性** 三大方向：

| PR | 类型 | 核心变更 | 影响面 | 合并状态 |
|---|---|---|---|---|
| [#2377](https://github.com/netease-youdao/LobsterAI/pull/2377) | **Feat/Security** | Windows 更新安装器加固（installer hardening） | Windows 端分发安全、防篡改 | ✅ Merged |
| [#2375](https://github.com/netease-youdao/LobsterAI/pull/2375) | **Fix/Stability** | OpenClaw 网关：拦截超大 transcript 防止 JS 堆 OOM；分类 heap-OOM 崩溃；重启后忽略陈旧 client generation 防僵尸重连 | 长会话/大上下文场景稳定性、网关健壮性 | ✅ Merged |
| [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | **Fix/UI** | Cowork 导出选项模态框挂载至 body portal，解决 sidebar stacking context 遮挡问题 | 协作导出交互体验 | ✅ Merged |
| [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347) | **Feat/Enhancement** | 定时任务模块大增强：新增 Cron 自定义调度（可视化构建器+原始表达式双模式）、Agent/Model 绑定、表单 UX 统一、4 个常用预设；完成与 main 分支合并 | 定时任务调度灵活性、易用性 | ✅ Merged (stale 标记后补合) |
| [#1346](https://github.com/netease-youdao/LobsterAI/pull/1346) | **Refactor** | Skills 管理模块按官方规范优化（关联 #846） | 技能体系可维护性 | ✅ Merged (stale 标记后补合) |

**进展评估**：  
- **新增能力**：定时任务 Cron 表达式可视化编辑、Agent 绑定，填补调度灵活性短板。  
- **消除隐患**：Windows 安装器加固、OpenClaw OOM 兜底、模态框层级修复，三大高风险崩溃/体验问题一次性清零。  
- **技术债清理**：两个 3 个月前的大型 PR（#1346、#1347）集中合入，分支卫生显著改善。

---

## 4. 社区热点
> **今日无高热度讨论**。唯一更新的 Issue [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) 为 2026-04 创建的“定时任务名称重复校验缺失”，已于今日标记 `[stale]` 关闭，评论 2 条、Reaction 0。  
> **信号**：社区外部反馈极少，当前迭代完全由内部团队驱动；建议后续引入 “Good First Issue” 或用户调研激活外部贡献。

---

## 5. Bug 与稳定性
| 严重程度 | 问题 | 来源 | 是否已修复 | 修复 PR |
|---|---|---|---|---|
| **Critical** | OpenClaw 网关加载超大 transcript 导致 JS heap OOM 崩溃，重启后出现僵尸重连 | PR [#2375](https://github.com/netease-youdao/LobsterAI/pull/2375) | ✅ 已修复并合并 | #2375 |
| **High** | Windows 更新安装器缺乏完整性校验与签名验证，存在供应链风险 | PR [#2377](https://github.com/netease-youdao/LobsterAI/pull/2377) | ✅ 已加固并合并 | #2377 |
| **Medium** | Cowork 导出模态框被 sidebar 遮挡，交互受阻 | PR [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | ✅ 已修复并合并 | #2376 |
| **Low** | 定时任务名称重复无校验（Issue [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348)） | Issue #1348 | ⚠️ 仅标记 stale 关闭，**未见修复代码合入** | — |

**关注点**：Issue #1348 所报“名称重复校验”虽被标记 stale 关闭，但 PR #1347 已重构定时任务表单，建议确认新表单是否已内置去重校验，若无需补齐。

---

## 6. 功能请求与路线图信号
| 需求来源 | 核心诉求 | 已有 PR 支持情况 | 纳入下一版本可能性 |
|---|---|---|---|
| PR [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347) | 定时任务支持 Cron 表达式、可视化构建、Agent/Model 绑定 | ✅ 已合并 | **极高**（已入主干） |
| Issue [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | 定时任务名称唯一性校验 | ❌ 仅关闭 Issue，代码未见 | **中**（需在 #1347 基础上补齐） |
| 内部规范 (PR [#1346](https://github.com/netease-youdao/LobsterAI/pull/1346)) | Skills 管理代码规范化、解耦 | ✅ 已合并 | **高**（为后续技能市场/插件化铺路） |

**路线图推测**：  
- **vNext 重点**：定时任务生产级就绪（Cron + Agent 绑定 + 校验完善）、Windows 企业级分发就绪、长会话稳定性达标。  
- **潜在后续**：Skills 插件化对外开放、OpenClaw 网关多租户/流控增强。

---

## 7. 用户反馈摘要
> **今日无有效用户评论**。仅 Issue #1348 附带截图展示重复名称可创建成功，反映 **“表单校验缺失导致脏数据”** 痛点。  
> **隐性痛点**：长会话 OOM、安装器安全、模态框层级均属“用户无感但一旦触发体验极差”的底层稳定性问题，今日修复恰好覆盖这三类。

---

## 8. 待处理积压提醒
| 编号 | 类型 | 滞留时长 | 关键点 | 建议动作 |
|---|---|---|---|---|
| [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | Issue | 112 天 | 定时任务名称重复校验缺失 | 确认 PR #1347 新表单是否已含校验；若无，开补丁 PR 并关联关闭 |
| 历史 Stale PRs | PR | 90+ 天 | 除 #1346、#1347 外仍有多个 4 月前 PR 未处理 | 执行批量 stale 扫描，决策“合并/拒绝/重新设计”三选一，保持分支整洁 |
| OpenClaw 网关监控 | 技术债 | 持续 | 仅修复 OOM 症状，缺乏上下文大小预警、熔断、指标暴露 | 规划网关可观测性增强 Issue，纳入下一里程碑 |

---

**总结**：LobsterAI 今日完成了一次高质量的“稳定性冲刺 + 历史债清理”，核心客户端与网关的三大高危问题全部落地修复，定时任务与 Skills 两大业务模块完成架构级补强。下一步建议聚焦 **Issue #1348 补齐校验**、**Stale PR 批量清理**、**网关可观测性建设**，并主动引入外部贡献机制提升社区活力。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-23

---

## 1. 今日速览
- **整体活跃度**：**低**。过去 24 小时内无 Issue 更新，仅有 1 个 PR 提交且处于待合并状态，无版本发布。
- **核心动向**：项目当前聚焦于 Web 端会话列表的日期展示优化（PR #1162），属于 UI/UX 细节打磨范畴，非核心架构或功能变更。
- **社区互动**：无新 Issue、无讨论热点，社区处于静默观察期。
- **健康度评估**：维护者响应机制正常（PR 已创建待 Review），但缺乏外部贡献者参与与用户反馈循环，建议关注 Issue 回流机制。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展
### 待合并 PR（1 条）
| PR | 标题 | 作者 | 状态 | 影响范围 | 进度评估 |
|----|------|------|------|----------|----------|
| [#1162](https://github.com/moltis-org/moltis/pull/1162) | **fix(web): show dates for older sessions** | shixi-li | `OPEN` | Web 前端 · 会话列表日期展示逻辑 | **功能完备，待 Code Review 合入** |

**详细说明**：
- **改进内容**：优化会话列表时间标签的本地化展示策略：
  - 今日会话保留 `HH:MM` 格式；
  - 昨日显示 “Yesterday” 本地化文案；
  - 近期几天显示星期名称；
  - 更早会话显示完整日历日期（含年份）。
- **测试覆盖**：新增四类日期分桶的浏览器端测试用例，保证全链路本地化渲染正确性。
- **阻塞项**：暂无 CI 失败信息，主要等待 Maintainer Review 与合入。

---

## 4. 社区热点
**今日无活跃 Issue/PR 讨论。**
- 仅有的 PR #1162 评论数为 0，Reactions 为 0，暂未引发社区关注。

---

## 5. Bug 与稳定性
**今日无新增 Bug 报告、崩溃或回归问题。**
- 现有 PR #1162 属于体验优化而非缺陷修复。

---

## 6. 功能请求与路线图信号
**今日无显性功能请求。**
- **隐性信号**：PR #1162 暗示产品正在完善“历史会话可发现性”，后续可能延伸出：
  - 会话搜索/筛选按日期维度增强；
  - 归档/清理旧会话的交互入口。

---

## 7. 用户反馈摘要
**无用户反馈数据（0 Issues，0 评论）。**

---

## 8. 待处理积压提醒
> **数据源仅含过去 24 小时增量，无法直接识别长期积压。建议维护者定期执行以下检查：**
1. **Stale Issues/PRs**：使用 GitHub Actions（如 `stale` bot）标记 30 天无活动的 Issue/PR。
2. **高优先级未响应**：筛选 `label:"bug" OR label:"security"` 且 `assignee:none` 且 `updated:< 2026-06-23` 的 Item。
3. **依赖更新**：检查 Dependabot/renovate PR 是否长期滞留（安全/兼容性风险）。

---

### 附：原始数据引用
- PR #1162: https://github.com/moltis-org/moltis/pull/1162  
- 项目主页: https://github.com/moltis-org/moltis  

---  
*报告生成时间：2026-07-23 06:00 UTC | 数据窗口：2026-07-22 00:00 – 2026-07-23 00:00 UTC*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-07-23

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库过去 24 小时增量数据（Issues: 31, PRs: 50, Release: 1）  
> **统计窗口**：2026-07-22 00:00 – 2026-07-23 00:00 (UTC)

---

## 1. 今日速览
- **发布 v2.0.0.post4**：针对 Agent 推理循环冗余与工具重复调用进行优化，属于热修复性质的小版本迭代。  
- **工程活跃度极高**：单日 50 条 PR 更新（35 待合并、15 已合并/关闭），31 条 Issue 活动，呈现“快速迭代、密集修复”态势。  
- **核心矛盾聚焦**：v2.0 架构引入的 **~2s 固定开销**、**子 Agent 上下文压缩冻结**、**工具调用参数污染**、**队列/审计/Token 统计并发竞态** 等稳定性问题集中爆发。  
- **社区参与度上升**：多位首次贡献者 提交 8+ 修复型 PR，覆盖 Mission 解析、内存编辑引导、Console 测试跨平台兼容、审批 UI 安全性等细节，生态协作初显规模。  
- **整体健康度**：**🟡 警示**——新功能推进快（Creator 插件、排序、Cron 模型覆盖），但 P0 级崩溃与回归未完全收敛，建议下一周期以“稳定性冲刺”为主。

---

## 2. 版本发布
### v2.0.0.post4 (2026-07-22)
| 项目 | 详情 |
|------|------|
| **类型** | Post-release 热修复 |
| **核心变更** | 优化 Agent 推理逻辑，缓解冗余思维循环与重复工具调用 |
| **破坏性变更** | 无 |
| **迁移提示** | 直接 `pip install -U qwenpaw` 或拉取新镜像即可；配置文件兼容 |
| **完整日志** | [v2.0.0.post3...v2.0.0.post4](https://github.com/agentscope-ai/QwenPaw/compare/v2.0.0.post3...v2.0.0.post4) |
| **关联 Issue** | 隐性关联 #6376（主进程因 loop 功能挂死）、#6307（2s 开销） |

---

## 3. 项目进展（已合并/关闭的关键 PR）
| PR | 类型 | 影响范围 | 进展说明 |
|----|------|----------|----------|
| [#6359](https://github.com/agentscope-ai/QwenPaw/pull/6359) / [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) | **Bug Fix** | Core/Providers | 将上下文注入角色从 `system` 改为 `user`，修复 GLM/OpenAI API 中段 system 导致的 `ValueError`（**已关闭**，含重复 PR）** |
| [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) | **Bug Fix** | Token Usage | Token 统计持久化失败后不重试的竞态修复（**已关闭**，标记 Close-and-review-later） |
| [#6320](https://github.com/agentscope-ai/QwenPaw/issues/6320) | **Bug Fix** | Console/UI | LaTeX 根号渲染异常（**Issue 已关闭**，推测前端已热修） |
| [#6176](https://github.com/agentscope-ai/QwenPaw/issues/6176) | **Bug Fix** | CLI/Cron | `cron update` 重置未触字段（**Issue 已关闭**） |
| [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) | **Ops** | Platform | 域名跳转广告（**Issue 已关闭**，可能为 DNS/运营侧问题） |
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | **Bug Fix** | Core/Sub-agent | 子 Agent 触发上下文压缩导致进程冻结（**Issue 已关闭**，需确认是否随 v2.0.0.post4 修复） |

> **小结**：今日合并/关闭 15 条 PR/Issue，主要集中在 **Provider 兼容性、持久化竞态、CLI 语义修正**，未见大型特性合并，符合“稳定性优先”预期。

---

## 4. 社区热点（高互动 Issue/PR）
| 排名 | 对象 | 互动 | 核心诉求 | 分析 |
|------|------|------|----------|------|
| 1 | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) 🔒 | 💬18 | 子 Agent 上下文压缩冻结主进程，**P0 阻塞性 Bug**，用户只能重启恢复 | 已关闭但未见对应 PR 链接，需确认修复是否随 v2.0.0.post4 交付，建议补充回归测试 |
| 2 | [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) 🔒 | 💬8 | 移动网络下平台域名跳广告，联通正常 | 非代码层面问题，可能为运营商劫持或 CDN 配置，已关闭 |
| 3 | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | 💬8 | `RemoteProtocolError: peer closed connection`，抓包显示 QwenPaw 主动发 FIN 断开 | 网络层超时/心跳策略疑似回归，**需尽快复现并定位至 Provider/传输层** |
| 4 | [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | 💬6 | **按 Conversation 级别指定模型**（Agent 级默认 + 会话级覆盖） | 高频功能需求，PR [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) 已实现 Cron 级模型覆盖，架构已就绪，下一步极大概率扩展至 Conversation |
| 5 | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 💬4 | v2.0 引入 **~2s 固定开销**，独立于模型延迟 | 架构级性能回归，**影响用户体验底线**，建议设立性能基准门禁 |
| 6 | [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | 💬2 | Docker 部署缺热更新，**容器重建丢失动态安装工具链** | 运维痛点，参考 AstrBot 方案（容器常驻 + `qwenpaw update` 热更），建议纳入 v2.1 路线图 |

---

## 5. Bug 与稳定性（按严重程度）
| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 - 进程冻结/崩溃** | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) 子 Agent 压缩冻结 | 🔒 Closed | 未显式关联 | 需确认 v2.0.0.post4 是否包含修复 |
| **P0 - 进程挂死** | [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) loop 功能导致主进程挂死 | 🟢 Open | 无 | 用户强烈要求发布前压测，**建议回滚或加特性开关** |
| **P0 - 连接中断** | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) 主动发 FIN 断开 | 🟢 Open | 无 | 需排查心跳/超时配置 |
| **P1 - 功能失效** | [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) tool_call 参数含 markdown/XML 导致 JSON 解析失败 | 🟢 Open | [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) | **已有 PR 待合并**，影响 GLM/DeepSeek 等模型可用性 |
| **P1 - 多模态失效** | [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) / [#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135) MiniMax-M3 图片识别全幻觉 | 🟢 Open | 无 | 供应商协议适配问题，长期未解 |
| **P1 - 并发竞态** | [#6372](https://github.com/agentscope-ai/QwenPaw/issues/6372) idle cleanup 移除新建队列 | 🟢 Open | [#6373](https://github.com/agentscope-ai/QwenPaw/pull/6373) | **已有 PR** |
| **P1 - 并发竞态** | [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) Token 统计写失败不重试 | 🟢 Open | [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) | **已关闭 PR**，需复核修复完整性 |
| **P1 - 并发竞态** | [#6368](https://github.com/agentscope-ai/QwenPaw/issues/6368) audit_level=none 仍写 SQLite | 🟢 Open | [#6369](https://github.com/agentscope-ai/QwenPaw/pull/6369) | **已有 PR** |
| **P2 - 体验缺陷** | [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) MiniMax-M3 响应截断 | 🟢 Open | 无 | 可能与上游模型或流式解析有关 |
| **P2 - 体验缺陷** | [#6370](https://github.com/agentscope-ai/QwenPaw/issues/6370) 下载器超时不降级 | 🟢 Open | [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | **已有 PR** |
| **P2 - 体验缺陷** | [#6355](https://github.com/agentscope-ai/QwenPaw/issues/6355) Mission 解析破坏带引号 `--verify` | 🟢 Open | [#6356](https://github.com/agentscope-ai/QwenPaw/pull/6356) | **已有 PR** |
| **P2 - 体验缺陷** | [#6320](https://github.com/agentscope-ai/QwenPaw/issues/6320) LaTeX 根号渲染 | 🔒 Closed | 前端修复 | 已解决 |
| **P3 - 易用性** | [#6354](https://github.com/agentscope-ai/QwenPaw/issues/6354) 审批 UI “总是允许” 过于醒目 | 🟢 Open | [#6357](https://github.com/agentscope-ai/QwenPaw/pull/6357) | **已有 PR**，安全易用性平衡 |
| **P3 - 易用性** | [#6341](https://github.com/agentscope-ai/QwenPaw/issues/6341) Channel 删除后新 Agent 默认仍指向旧 Channel | 🟢 Open | 无 | 状态残留 Bug |
| **P3 - 易用性** | [#6361](https://github.com/agentscope-ai/QwenPaw/issues/6361) Console 测试脚本 Windows 不跑 | 🟢 Open | [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) | **已有 PR** |
| **P3 - 易用性** | [#6366](https://github.com/agentscope-ai/QwenPaw/issues/6366) 覆盖率测试 Gate 超时 | 🟢 Open | [#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367) | **已有 PR** |

---

## 6. 功能请求与路线图信号
| 需求 | Issue | 社区热度 | 相关 PR / 实现就绪度 | 入版本预测 |
|------|-------|----------|----------------------|------------|
| **Conversation 级模型覆盖** | [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | 💬6 | 架构已支持 `model_slot_override`（见 [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) Cron 级实现） | **v2.1 极大概率** |
| **Cron Job 指定模型** | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | 💬3 | [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) **已提 PR** | **v2.0.0.post5 / v2.1** |
| **拖拽上传图片/PDF/Office** | [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) | 💬4 | 无 | 中期（需前端 + 后端解析管线） |
| **Docker 热更新 / 一键更新** | [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | 💬2 | 无 | **v2.1 运维专项** |
| **插件市场排序** | — | — | [#6349](https://github.com/agentscope-ai/QwenPaw/pull/6349) **已提 PR** | **v2.1** |
| **QwenPaw Creator 视频创作插件** | — | — | [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) **Under Review** | **v2.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-23

> **数据基准**：过去 24 小时 GitHub 活动（Issues: 50 更新，PRs: 50 更新，Releases: 0）  
> **统计口径**：`2026-07-22 00:00 – 2026-07-23 23:59 UTC`  
> **报告生成时间**：2026-07-23 晚间

---

## 1. 今日速览

*   **整体活跃度：高**。过去 24 小时共有 **100 条** Issue/PR 更新事件，但 **零合并 PR、零版本发布**，呈现典型的“积压消化与新工作并行”态势。
*   **核心矛盾**：CI 基础设施债务集中爆发（Windows 测试全线失效 #7462、npm 审计阻断 #9235），导致主干保护机制实质失效；同时架构级 RFC（OIDC #7141、Plugin 统一 #6489、Memory 解耦 #6850）与大型特性（Agent Eval #7065、Inkbox Channel #8384、Goal Controller #8687）并行推进，Review 压力极大。
*   **风险热点**：
    1.  **Windows 兼容性债务**（#7462，74 个测试失败，CI 未覆盖 Windows，风险等级 P1/High）。
    2.  **供应链安全债务**（#9235，npm 高危漏洞 3 个，已有修复 PR #9270 待合并）。
    3.  **守护进程稳定性**：空凭证导致 Channel crashloop (#6724)、心跳机制缺失 (#6391) 仍未根治。
*   **社区信号**：用户痛点集中在 **“开箱即用的配置校验”**（#6416）、**“跨平台路径/编码兼容”**（#7462）、**“生产级可观测性”**（#6641, #7232）与 **“多模型/多 Agent 编排”**（#7100, #7218）。

---

## 2. 版本发布

> **无新版本发布**。当前主干处于 v0.9.0 预发布开发期，积累大量破坏性变更与架构重构，建议在 Windows CI 绿化、npm 审计清零、核心 RFC 落地后再切 RC。

---

## 3. 项目进展（已合并/关闭的重要 PR 与 Issue）

> **注意**：过去 24 小时 **无 PR 合并**，**10 个 Issue 被关闭**（均为 RFC/Feature 确认或重复项）。项目实质推进体现在 **“新开 PR 进入 Review 队列”** 与 **“Issue 状态流转”**。

| 编号 | 标题 | 类型 | 状态变更 | 核心推进内容 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#9270** | `fix(web/deps): resolve npm audit advisories` | **Fix/Security** | **新开 PR** | 针对 #9235 紧急修复：锁定 `@redocly/openapi-core@1.34.7`、升级 `js-yaml@4.3.0`、`brace-expansion@2.1.2`，消除 3 个高危漏洞。 | [#9270](https://github.com/zeroclaw-labs/zeroclaw/pull/9270) |
| **#9269** | `ci(dependabot): monitor web npm updates` | **CI/Chore** | **新开 PR** | 引入 Dependabot 週度扫描 `/web` 目录，分组 minor/patch 更新，限制并发 PR 数，建立前端依赖自动化护栏。 | [#9269](https://github.com/zeroclaw-labs/zeroclaw/pull/9269) |
| **#8837** | `[Bug]: history trimming occurs silently with history pruning disabled` | **Bug/Runtime** | **Issue 关闭** | 用户反馈会话上下文静默丢失，严重度 S2。虽关闭但未见修复 PR，需确认是否由 #8680 (skill-review history slice) 间接缓解。 | [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) |
| **#6641** | `[Feature]: Turn-level OTel trace correlation` | **Feature/Observability** | **Issue 关闭** | Turn 级追踪关联已落地（关联 #6009, #6190），标志着 OTel 基建进入可用态。 | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) |
| **#7184** | `RFC: Move translated .ftl and .po files into a git submodule` | **RFC/Architecture** | **Issue 关闭** | 决定将 i18n 产物迁出主仓库至子模块，减少主仓噪音与 CI 耗时。 | [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) |
| **#7218** | `RFC: A2A agent discovery (.well-known/agent-card.json)` | **RFC/Architecture** | **Issue 关闭** | 多 Agent 部署下的发现协议标准化，为互操作铺路。 | [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) |
| **#6557** | `[Feature]: Reconcile runtime model switching with provider structure` | **Feature/Config** | **Issue 关闭** | v0.8.0 前统一模型切换语义（`/models`、Provider 结构、Config），避免运行时分叉。 | [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) |
| **#6489** | `[Feature]: "Everything is a plugin" — phased path` | **Feature/Architecture** | **Issue 关闭** | 确立长期方向：将 Integrations 与 WASM Plugins 统一为插件目录，首批落地 `image-gen-fal`、`video-gen-fal`。 | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) |
| **#8925** | `[Docs]: Explain Bedrock credential profiles and systemd service setup` | **Docs** | **Issue 关闭** | 补全 Bedrock 认证配置文档，降低云厂商接入门槛。 | [#8925](https://github.com/zeroclaw-labs/zeroclaw/issues/8925) |

---

## 4. 社区热点（高互动 Issue/PR 分析）

| 编号 | 标题 | 评论/👍 | 核心诉求 | 进展/阻塞点 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#7462** | **74 test failures on Windows** | **11 / 0** | **P1 阻塞**：Windows CI 缺位导致 74 测试失败（路径语义、编码 CP936、Unix-only 命令）。 | **无人认领修复**，CI 仅跑 Linux。需引入 Windows Runner 或分离线或分流 Windows 专项 Job。 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **#7141** | **RFC: OIDC authentication provider support** | **7 / 0** | 企业级 SSO 接入标准化，目标 v0.9.0。 | **In Progress**，拆解为多个子 PR，涉及 Security/Architecture，风险 High。 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| **#6641** | **Turn-level OTel trace correlation** | **8 / 0** | 可观测性深度：将 LLM/Tool/Memory span 嵌套在 Turn trace 下。 | **已关闭/落地**，依赖 `tracing-opentelemetry` bridge 与入口点 instrumentation。 | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) |
| **#7065** | **Agent evaluation harness (`zeroclaw eval`)** | **4 / 0** | 缺乏自动化评测体系，需 Replay + Live 模式、Pluggable Graders、LLM-as-judge。 | **In Progress**，规模 XL，涉及 Agent/Config/Provider/Runtime/Tests。 | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) |
| **#8384** | **feat(inkbox): native Inkbox channel (email/SMS/voice/iMessage)** | **PR 评论多** | 引入商业化通信聚合通道，含 Quickstart 引导。 | **需 Author Action**，规模 XL，涉及 Channel/Config/Gateway/Runtime/Skills/Quickstart。 | [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) |
| **#7821** | **feat(config): add schema struct & risk field (SandboxPolicyConfig)** | **PR 评论多** | 引入 OS 级沙箱策略模型，为 `delegate`/`file`/`shell` 等高危工具做强隔离基建。 | **需 Author Action**，规模 XL，风险 High，无行为变更仅加模型。 | [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) |
| **#9235** | **ci: npm audit failed — 2026-07-21** | **2 / 0** | 自动化审计阻断，3 个高危漏洞（`@redocly/openapi-core`, `js-yaml`, `brace-expansion`）。 | **已有修复 PR #9270**，待合并。 | [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) |

**热点洞察**：
1.  **基建债务显性化**：Windows CI 缺失 (#7462) 与 npm 审计失败 (#9235) 同属“主干保护失效”，优先级应高于新特性。
2.  **企业化就绪并行**：OIDC (#7141)、Sandbox Policy (#7821)、Agent Eval (#7065)、Observability (#7232) 四大支柱同步推进，审查带宽极度紧张。
3.  **Channel 生态爆发期**：Inkbox (#8384)、Mastodon (#6423)、Twilio SMS (#6427)、Rocket.Chat (#6435)、Zulip (#6437) 并行，**统一插件架构 (#6489)** 的落地速度将决定能否避免碎片化。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | 编号 | 标题 | 核心症状 | 是否有 Fix PR | 状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **P1 / High** | **#7462** | **74 test failures on Windows** | 路径分隔符、控制台编码 (CP936)、Unix-only 命令导致全套测试崩溃 | **无** | Open | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **P1 / High** | **#6724** | **Empty creds crashloop supervisor** | Signal/Voice Call 启用但凭证为空 → Orchestrator 反复重启 (2s/次) | **无** | Open | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |
| **P1 / High** | **#6619** | **Authorize registered power-tool attempts at full risk level** | Full-autonomy Agent 下 shell/file_write/file_edit 未注入授权提示词，模型拒工 | **PR #6619** (Open) | Open | [#6619](https://github.com/zeroclaw-labs/zeroclaw/pull/6619) |
| **P1 / High** | **#8680** | **Bound skill-review history slice against in-fork compaction** | `maybe_run_skill_review` 切片逻辑在 fork 紧缩时越界/丢失上下文 | **PR #8680** (Open) | Open | [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) |
| **P2 / Medium** | **#8837** | **History trimming silently with pruning disabled** | 会话中上下文静默丢失，用户无感知 | **无** (Issue Closed 但无 Fix) | Closed | [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) |
| **P2 / Medium** | **#6548** | **Channel runtime replies bypass Fluent localization** | 非英语 Locale 下 Channel 运行时回复仍为硬编码英文 | **无** | Open | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) |
| **P2 / Medium** | **#8576** | **Add env-var fallback for OpenAI STT credentials** | `TRANSCRIPTION_API_KEY`/`OPENAI_API_KEY` 直读环境变量，未走统一配置层 | **PR #8576** (Open) | Open | [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) |
| **P2 / Medium** | **#8943** | **Exclude Nova 2 from Bedrock prompt caching** | `nova-2-lite` 不支持 `cachePoint` 导致 400 报错 | **PR #8943** (Open) | Open | [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) |
| **P3 / Low** | **#8546** | **Localize `zeroclaw status` fragments** | CLI 状态输出风险等级/别名未走 i18n | **PR #8546** (Open) | Open | [#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) |
| **P3 / Low** | **#9258** | **Restore WIT logging action parity (MemoryAudit)** | 插件 WIT 缺失 `MemoryAudit` 动作映射 | **PR #9258** (Open) | Open | [#9258](https://github.com/zeroclaw-labs/zeroclaw/pull/9258) |

**稳定性趋势**：
*   **守护进程/通道层** 是高频崩溃源（空

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*