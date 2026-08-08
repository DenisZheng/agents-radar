# OpenClaw 生态日报 2026-08-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-08 01:07 UTC

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

# OpenClaw 项目日报 | 2026-08-08

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时内 **500 条 Issue 更新**（470 新开/活跃，30 关闭）与 **500 条 PR 更新**（411 待合并，89 已合并/关闭），显示社区与核心团队并行高强度迭代。
- **零版本发布**：无新 Release，但大量 PR 处于“待合并/需验证”状态，预示下一个补丁版本（或 beta）即将切入发布流程。
- **核心痛点聚焦**：**Gateway 内存泄漏（P0）**、**Session 状态损坏/数据库迁移失败（P0）**、**模型提供商静默失败**、**MCP 工具链集成缺口**、**Bootstrap 上下文膨胀** 五大类问题占据讨论热度前列。
- **修复管道畅通**：Clawsweeper 自动化机器人已产出多个 `autofix` PR（如 #119778），且多位维护者（steipete、sjf-oa 等）在同一天推进多个 XL 级修复，说明治理流程运转正常。
- **跨平台兼容性压力**：Windows（EBUSY、node.exe 残留）、Slack Enterprise Grid、QQ Bot、Ollama UTF-8 等平台专项修复同步推进，反映部署矩阵持续扩大。

---

## 2. 版本发布

> **无新版本发布**。当前主分支积累了大量待合并 PR，预计近期会切 `2026.7.3` 或 `2026.7.2-stable` 版本。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#119778](https://github.com/openclaw/openclaw/pull/119778) | **Bug Fix (Clawsweeper 自动修复)** | Gateway：转录重建期间 `chat.send` 返回可重试错误，避免误判为 `INVALID_REQUEST` | 消息投递、会话恢复 | 👀 **Ready for maintainer look** |
| [#120400](https://github.com/openclaw/openclaw/pull/120400) | **Bug Fix** | WebUI：Discord 进度草稿修复工具参数丢失（携带完整 `content_block_start` 输入） | UI 渲染一致性 | ✅ **CLOSED** |
| [#120399](https://github.com/openclaw/openclaw/pull/120399) | **CI/Lint** | 恢复 embedded-runner 注册表测试的 max-lines 合规，拆分测试套件 | CI 绿灯 | ✅ **OPEN (待合并)** |
| [#120401](https://github.com/openclaw/openclaw/pull/120401) | **CI/Lint** | 主干 `check-lint` 合规恢复，移动超长测试文件至概念级套件 | CI 绿灯 | ✅ **OPEN (待合并)** |
| [#120392](https://github.com/openclaw/openclaw/pull/120392) | **Release 工程** | Full Release Validation 等待子工作流元数据稳定后再判定 | 发布流水线稳健性 | ✅ **OPEN (待合并)** |
| [#120271](https://github.com/openclaw/openclaw/pull/120271) | **Bug Fix** | Cron：给 `command.payload.outputMaxBytes` 加上限，防止无界输出缓冲 | 资源保护、可用性 | ⏳ **Waiting on author** |
| [#120279](https://github.com/openclaw/openclaw/pull/120279) | **Bug Fix** | QQ Bot：心跳间隔校验后再调度 `setInterval`，避免非法值崩溃网关 | 网关稳定性 | ⏳ **Waiting on author** |
| [#120283](https://github.com/openclaw/openclaw/pull/120283) | **Bug Fix** | Browser Extension Relay：帧字段校验前置，防止 TypeError 炸进程 | 网关可用性 | ⏳ **Waiting on author** |

> **整体推进度**：核心阻塞类（P0/P1）修复 PR 已进入审查或合并队列；中型重构（Slack Grid、Codex 会话保持、事件循环阻塞）仍在“需验证/等待作者”阶段，预计 1-2 天内批量落地。

---

## 4. 社区热点（评论/反应 Top 10）

| Issue | 标题 | 评论 | 👍 | 核心诉求 | 关联 PR |
|-------|------|------|----|----------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | **DeepSeek v4 Flash 静默回复失败** | 129 | 0 | 模型返回空回复，fallback 文案 “No reply was generated” 无诊断信息，需可观测性与重试策略 | ✅ **CLOSED** (可能已由 provider fallback 链修复) |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **Realtime 语音会话无界状态保留** | 59 | 0 | Provider/客户端慢/阻塞时，咨询工作、音频帧、预备播放队列无硬性所有权边界，导致内存/句柄泄漏 | — |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Gateway 内存泄漏：RSS 350MB → 15.5GB (P0)** | 22 | 1 | 2-3 天 OOM 重启循环，`launchd-handoff` 反复拉起，**阻塞生产部署** | — |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | **CLI 预检破坏运行中 Gateway 的 SQLite (P0)** | 14 | 1 | `openclaw.sqlite` 多次损坏（`database disk image is malformed`），vanilla SQLite 不复现，疑并发写入竞争 | — |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | **Agent DB v14→v15 迁移失败：`no such column: entry_valid` (P0)** | 6 | 0 | `openclaw doctor --fix` 回滚，网关拒绝启动，**升级即不可用** | — |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **Memory Trust Tagging by Source (安全增强)** | 29 | 0 | 按来源（用户指令/网页抓取/第三方 Skill）打信任标签，防记忆投毒 | — |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | **MCP 工具调用通道化审批 (Consent Envelope)** | 16 | 1 | 让 MCP Server 复用 `/approve <id>` 管道，解决状态外写（发邮件/写 Vault）无确认风险 | — |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | **Session Context Bloat：Bootstrap 每轮重注入** | 11 | 2 | 每轮对话重复注入 MEMORY.md 等文件，消耗 20-30% Token，需增量/分层加载 | [#22438](https://github.com/openclaw/openclaw/issues/22438) (Tiered Bootstrap) |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | **`chat.send` 误报 “thread switched branches”** | 9 | 2 | 模型完成后 `expectedLeafEntryId` 未刷新，后续发送被拒，**已有修复 PR #116382** | [#116382](https://github.com/openclaw/openclaw/pull/116382) |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | **Subagent 会话缺失 MCP Tools (P1)** | 10 | 6 | `sessions_spawn` 完全忽略 `bundle-mcp` 与允许列表，子代理仅拿 Built-in Tools | — |

> **信号分析**：  
> - **P0 稳定性三件套**（内存泄漏、DB 损坏、迁移失败）集中在 Gateway/Storage 层，呼吁**专项稳定性 Sprint**。  
> - **MCP/Tooling 生态** 需求上升：审批管道、子代理注入、Trust Tagging 均指向“多租户/多工具链安全隔离”。  
> - **Token 经济性**（Bootstrap 重注入、Context Provenance #54373）成为大上下文用户的核心痛点。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 - 数据丢失/不可用** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 增长至 15.5GB → OOM Kill → 重启循环 | ❌ 无 | 需内存剖析（`heap snapshot`、`--trace-gc`） |
| **P0 - 数据损坏** | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI `status`/`version` 并发导致 SQLite 损坏 | ❌ 无 | 疑 WAL 模式下并发检查点冲突，建议加文件锁或分离只读连接 |
| **P0 - 升级阻塞** | [#119263](https://github.com/openclaw/openclaw/issues/119263) | v14→v15 迁移缺列 `entry_valid`，事务回滚 | ❌ 无 | 需补齐迁移脚本的 `ALTER TABLE … ADD COLUMN` 顺序 |
| **P1 - 静默失败** | [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 空回复，仅给通用 fallback | ✅ **CLOSED** | 可能已由 provider fallback 链健壮性改进缓解 |
| **P1 - 会话状态** | [#115700](https://github.com/openclaw/openclaw/issues/115700) | `expectedLeafEntryId` 陈旧导致分支切换误判 | ✅ [#116382](https://github.com/openclaw/openclaw/pull/116382) | 后台追加刷新 Leaf ID |
| **P1 - 消息丢失** | [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 回复 Token 过期 + 无 Push 兜底 → 静默丢信 | ❌ 无 | 需实现 `replyToken` 刷新/推送降级 |
| **P1 - 资源泄漏** | [#74378](https://github.com/openclaw/openclaw/issues/74378) | Windows `node.exe` 命令结束后残留 | ❌ 无 | 进程树清理缺失，建议 `child_process.spawn` 加 `detached: false` + `stdio: 'ignore'` |
| **P2 - 回归** | [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动 2.5× 慢 (1 vCPU 容器) | ❌ 无 | 疑 bootstrap-context 同步 I/O，[#89040](https://github.com/openclaw/openclaw/pull/89040) 正在解决 |
| **P2 - 功能缺失** | [#85030](https://github.com/openclaw/openclaw/issues/85030) | Subagent 完全无 MCP Tools | ❌ 无 | 架构层面：`sessions_spawn` 未合并 MCP 注册表 |
| **P2 - 平台兼容** | [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows Vitest `EBUSY` 无法释放 `openclaw-agent.sqlite` | ❌ 无 | 测试ardown 需显式 `close()` + `await fs.promises.unlink` 重试 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue |

---

## 横向生态对比

# 个人 AI 智能体/助手开源生态横向对比分析报告 | 2026-08-08

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现 **“头部项目高强度并行迭代、中腰部项目分化明显、长尾项目沉寂”** 的态势。  
OpenClaw、NanoBot、Hermes Agent、IronClaw、ZeroClaw、CoPaw（QwenPaw）六大核心项目单日 PR+Issue 动态均超 50 条，集中攻坚 **基础设施稳定性（内存/DB/进程管理）**、**多模态/多渠道接入**、**安全隔离与权限模型**、**上下文工程与 Token 经济性**、**插件/工具生态标准化** 五大硬骨头。  
NanoClaw、LobsterAI 等处于 **“功能扩张并行基建固化”** 的健康节奏，已进入小版本高频发布期。  
PicoClaw、TinyClaw、Moltis、ZeptoClaw、NullClaw 过去 24h 无增量，疑似处于维护模式或架构重写期。  
整体看，生态已从“功能堆砌”转入 **“生产级可用性、安全合规、工程化交付”** 的深水区竞争。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release (24h) | 核心动作 | 健康度评估 |
|------|--------------|-----------|---------------|----------|------------|
| **OpenClaw** | 500 (470新/活跃, 30关闭) | 500 (411待合并, 89合并/关闭) | 无 | P0 级稳定性攻坚、自动化修复机制运转、跨平台兼容性矩阵扩展 | 🟢 **极高** — 社区规模最大，治理流程成熟，阻塞类问题有明确 Owner 与修复管道 |
| **NanoBot** | 10 新开/更新 | 11 合并/关闭 | 无 | 安全隔离重构（会话历史外置、沙箱）、Token 审计需求爆发、Dream 记忆管线补齐 | 🟢 **高** — 核心安全修复已落地，高呼声功能（Token 审计、会话级模型切换）明确排期 |
| **Hermes Agent** | 50 (44新/活跃) | 50 (47待合并, 3合并/关闭) | 无 | God-file 拆解架构决策期、上下文压缩 P1 崩溃、插件入口点发现落地 | 🟡 **中高** — 高优 Bug 与重构并行，Review 带宽成瓶颈，P1 级问题缺 Fix PR 需警惕 |
| **IronClaw** | 50 | 50 (47待合并, 3合并/关闭) | 无 | Doc-Truth 文档管线 5 PR 推进、渐进式工具披露压测闭环、长期记忆根因修复、QA 环境集成层稳定性暴雷 | 🟢 **高** — 多条主线并行有序，RFC 驱动治理成熟，集成层 Bug 集中涌现但已打标分级 |
| **ZeroClaw** | 50 (45新/活跃, 5关闭) | 50 (47待合并, 3合并/关闭) | 无 | 安全加固（5 个安全 PR 同步）、SOP 无头运行时攻坚、Provider 架构重构长期积压 | 🟡 **中高** — 安全响应极快，但大型 PR（Provider 统一、SOP 无头）审吞吐率低，发布被阻塞 |
| **CoPaw (QwenPaw)** | 31 (20新/活跃, 11关闭) | 49 (27待合并, 22合并/关闭) | **v2.1.0-beta.2** | Beta 发布后回归缺陷高频爆发（Windows 为重）、ReMe 记忆系统大重构、ACP 协议/多渠道推进 | 🟢 **高** — 发布-修复闭环极快，Windows 兼容性为最大短板，新功能 PR 质量高 |
| **NanoClaw** | 0 | 10 (8待合并, 2合并) | 无 | Channel 生态扩展、Setup Wizard 完善、技术债偿还并行 | 🟢 **中高** — 核心团队与外部贡献分工明确，基建与生态双轮驱动 |
| **LobsterAI** | 4 新开 | 7 全部合并/关闭 | **v2026.8.7** | 2 天一版本高频发布、Windows 安装器稳定性、OpenClaw 配置持久化兼容性、历史债务清理 | 🟢 **高** — 小步快跑节奏稳健，关键回归 <24h 修复，但深层架构隐患以 stale 关闭规避 |
| **PicoClaw / TinyClaw / Moltis / ZeptoClaw / NullClaw** | 0 | 0 | 无 | 无活动 | ⚪ **未知/维护模式** — 长尾项目，需关注是否为重写期或已弃维 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比结论 |
|------|---------------|--------------|
| **社区规模与吞吐** | 单日 1000+ Issue/PR 动态，自动化机器人、多维护者并行 | **绝对头部**，吞吐量是第 2 梯队（NanoBot/IronClaw/ZeroClaw）的 10 倍以上 |
| **治理成熟度** | Clawsweeper 自动修复、P0/P1 分级响应、Release Validation 流水线、跨平台矩阵 CI | **标杆级**，唯一具备“工业级发布工程能力”的项目 |
| **技术路线差异** | **Gateway + Session + Plugin/Channel** 微内核架构，强调多租户、多渠道、长期运行的 Stateful 服务端 | 与 NanoBot（单二进制桌面优先）、Hermes（编排器/插件化）、IronClaw（运行时/可观测性优先）形成互补：OpenClaw 偏 **“服务端平台化”**，其他偏 **“客户端/运行时库化”** |
| **核心优势** | 1. 生产级稳定性积累（内存/DB/迁移实战）<br>2. 最完整的 Channel/Plugin 生态（Slack/Discord/Telegram/QQ/Line/Ollama/MCP）<br>3. 上下文工程深度实践（Bootstrap 分层、Trust Tagging、Context Provenance） | **护城河在于“长周期 Stateful 服务的工程化解决方案库”**，而非单一模型能力 |
| **劣势/风险** | 1. 代码库庞大（God-file 问题）、技术债利息高<br>2. 审阅带宽成为瓶颈（400+ 待合并 PR）<br>3. Windows/桌面分发体验弱于 NanoBot/CoPaw/LobsterAI | 需警惕 “大而不倒” 掩盖架构腐化，God-file 拆解（参考 Hermes #78647）刻不容缓 |

---

## 4. 共同关注的技术方向（多项目共振信号）

| 技术方向 | 涉及项目 | 具体诉求/动作 | 成熟度 |
|----------|----------|---------------|--------|
| **安全隔离与零信任** | **NanoBot** (会话历史外置 #5278、沙箱 #5283)、**ZeroClaw** (forbidden_paths 绕过 #9815、Shell 逃逸 #9827、Symlink 逃逸 #9384、Whisper 硬编码 #9836)、**IronClaw** (沙箱显式 Docker/Railway #7214)、**OpenClaw** (Memory Trust Tagging #7707、MCP Consent Envelope #78308) | 会话/工具/文件系统/网络全方位最小权限，防提示词注入、数据泄露、供应链攻击 | 🟢 **落地期** — 多项目已有 PR 或 RFC，成生产硬指标 |
| **上下文工程与 Token 经济性** | **OpenClaw** (Bootstrap 重注入 #67419、Context Provenance #54373)、**NanoBot** (Token 审计日志 #5266)、**Hermes** (可配置 Temperature #17565、混合工具 RAG #13332)、**ZeroClaw** (SOP 无头运行时上下文管理 #9494) | 增量/分层加载、来源溯源、用量可观测、推理参数外部化 | 🟡 **需求明确，实现分散** — OpenClaw 最系统，NanoBot 呼声最高，建议形成通用协议/库 |
| **长期记忆与知识管线** | **NanoBot** (Dream 归档 #5231/#5280、Subagent 持久化 #5291)、**IronClaw** (记忆保存指引/常驻提示 #7365、跨会话召回 #7185)、**OpenClaw** (Memory Trust Tagging #7707)、**CoPaw** (ReMe 系统重构 #6772) | 归档/压缩/召回/信任标签/子代理审计全链路 | 🟡 **各自为战** — 缺乏跨项目记忆交换格式标准 |
| **多渠道/多平台适配矩阵** | **OpenClaw** (Slack Grid/QQ/Ollama/Windows EBUSY)、**NanoBot** (Matrix/Telegram/WhatsApp/WeChat)、**IronClaw** (Slack/Telegram/GitHub 状态同步)、**CoPaw** (Windows 安装/杀毒/Docker 市场)、**LobsterAI** (Windows 安装器/全屏交互)、**ZeroClaw** (Channel 抽象) | 统一 Channel Adapter 接口、跨平台进程管理、WebUI/桌面端一致性 | 🟢 **标准化进行中** — NanoClaw v2 ChannelAdapter、ZeroClaw Channel 抽象为典范 |
| **插件/工具生态标准化** | **OpenClaw** (MCP 工具审批 #78308、Subagent MCP 注入 #85030)、**Hermes** (Plugin Entry Points #81419、Interface Expansion #64182)、**IronClaw** (技能选择权下放模型 #6938)、**NanoClaw** (Skill 沙箱 #3190/#3198)、**CoPaw** (Agent Plugins v1 #5288) | 发现、安装、权限、版本、沙箱、审批全生命周期 | 🟡 **协议分化** — MCP vs 自研 Plugin vs ACP，亟需互操作层 |
| **可观测性与结构化追踪** | **OpenClaw** (DeepSeek 静默失败 #116277)、**IronClaw** (Doc-Truth/OTel 语义约定 #8933/#7232)、**ZeroClaw** (OTel 跨轮次关联 #8933、结构化增强 #7232)、**Hermes** (Inspector 活动时间轴 #7224) | 结构化日志、分布式追踪、模型调用审计、文档与代码同步 | 🟢 **工程化共识** — OTel GenAI 语义约定成事实标准 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户/场景 | 技术架构关键词 | 功能侧重差异 |
|------|----------|---------------|----------------|--------------|
| **OpenClaw** | **企业级/自托管 AI 网关平台** | 团队/企业自建、多租户 SaaS、长周期 Stateful 服务 | Gateway/Session/Plugin/Channel 微内核、SQLite/WAL、TypeScript/Go 混合 | 最完整的**多渠道接入、会话持久化、权限审计、上下文工程**；弱在桌面端分发 |
| **NanoBot** | **极客/开发者桌面优先智能体** | 个人开发者、高级用户、本地优先隐私场景 | 单二进制、Rust/Tauri、JSONL 存储、内置沙箱 | **安全隔离激进（进程/文件系统级）、Dream 记忆管线、Token 审计、插件热加载**；弱在多用户/多租户 |
| **Hermes Agent** | **模型编排与插件生态运行时** | 需自定义编排逻辑的应用开发者、研究型团队 | Python、Plugin/Entrypoint、Kanban/Profile 原语、OTel 原生 | **编排器可编程性最强、插件接口标准化最快、多模型策略路由**；弱在开箱即用的 Channel/UI |
| **IronClaw** | **可观测性优先的 Agent 运行时** | 追求生产级 SLA、合规审计的团队 | Rust、结构化事件/OTel、Doc-Truth 管线、渐进式工具披露 | **文档即代码/代码即文档、指标驱动灰度、工具披露 Token 优化**；生态较窄 |
| **ZeroClaw** | **零信任安全的自主执行引擎** | 高安全要求场景、SOP/无头自动化、本地模型部署 | Rust、能力安全、SOP 解释器、Provider 统一抽象 | **安全边界最硬（forbidden_paths/子进程逃逸防护）、SOP 无头运行时、本地 Whisper/模型

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-08-08

> 数据窗口：2026-08-07 至 2026-08-08（UTC） | 数据源：GitHub Issues/PRs API

---

## 1. 今日速览

*   **整体活跃度：高**。过去 24 小时合并/关闭 **11 个 PR**，新开/更新 **10 个 Issue**，代码库处于高频迭代期。
*   **核心主题**：**安全隔离与会话管理重构**占据主导。多个 PR（`#5279`, `#5283`, `#5272`）集中解决会话历史存储位置导致的安全风险、沙箱隔离缺失及主动消息丢失问题。
*   **技术债偿还**：启动 **原子 JSONL 写入逻辑去重**（`#5290`/`#5291`）、**WebUI 路由遗留代码清理**（`#5284`, `#5285`）等重构任务。
*   **渠道稳定性**：修复 Matrix 线程隔离（`#5286`）、Telegram 轮询静默失效（`#5156`）、WeChat 协议适配（`#5263`）等长尾 Bug。
*   **新功能探索**：Agent Plugins 与 CLI Apps 集成（`#5288`）、WebUI 临时聊天模式（`#5252`）、Subagent 会话持久化（`#5291`）正在推进中。

---

## 2. 版本发布

> **无新版本发布**。当前主分支积累了大量修复与重构，预计近期将切出新的 Patch/Minor 版本。

---

## 3. 项目进展：今日合并/关闭的关键 PR（11 个）

| PR | 标题 | 类型 | 核心变更 | 影响面 |
| :--- | :--- | :--- | :--- | :--- |
| **[#5272](https://github.com/HKUDS/nanobot/pull/5272)** | `fix(session): preserve proactive channel delivery during session retention trimming` | **Bug Fix (P2)** | 修复会话保留裁剪逻辑误删 `_channel_delivery` 主动消息（Cron/Job 通知），导致上下文丢失。 | **高** - 修复 #5273，影响所有后台任务/定时推送场景。 |
| **[#5268](https://github.com/HKUDS/nanobot/pull/5268)** | `fix(webui): stage out-of-media-root attachments on history reads` | **Bug Fix (P2)** | 历史消息 API 现支持签名/暂存 `projects/` 等非 media_root 下的附件，与 WebSocket 实时路径对齐。 | **高** - 修复 #5264，解决 WebUI 刷新后附件丢失。 |
| **[#5263](https://github.com/HKUDS/nanobot/pull/5263)** | `fix(weixin): harden protocol delivery, streaming, and login` | **Bug Fix (P2)** | 对齐 `openclaw-weixin` 2.4.6 协议，修复 QR 验证、绑定处理、流式传输稳定性。 | **高** - 微信渠道核心稳定性保障。 |
| **[#5287](https://github.com/HKUDS/nanobot/pull/5287)** | `fix(channels): preserve global progress defaults` | **Bug Fix / Refactor** | 保留全局 `sendProgress`/`sendToolHints` 默认值，修复 Mattermost 回归，新增回归测试。 | **中** - 统一渠道行为基线。 |
| **[#5285](https://github.com/HKUDS/nanobot/pull/5285)** | `fix(webui): preserve newly created topic route` | **Bug Fix (P2)** | 修复新建会话后路由与乐观列表同步的竞态条件，新增 E2E 回归测试。 | **中** - WebUI 导航体验。 |
| **[#5284](https://github.com/HKUDS/nanobot/pull/5284)** | `refactor(webui): remove legacy session messages route` | **Refactor** | 移除废弃 `/api/sessions/{key}/messages` 路由及关联媒体注水/Subagent 逻辑，减少攻击面。 | **中** - 代码库瘦身，安全加固。 |
| **[#5282](https://github.com/HKUDS/nanobot/pull/5282)** | `fix: modernize dependency recovery guidance` | **Docs / DX** | 统一插件安装指引为 `nanobot plugins enable ...`，移除过期直装包建议。 | **低** - 开发者体验。 |
| **[#5281](https://github.com/HKUDS/nanobot/pull/5281)** | `fix(webui): keep activity text crisp while fading edges` | **UI Polish** | 活动面板滚动渐变优化，避免文字模糊，新增视觉回归断言。 | **低** - UI 细节。 |
| **[#5277](https://github.com/HKUDS/nanobot/pull/5277)** | `feat(webui): expand model preset editor inline` | **Feature (UI)** | 模型预设编辑器内联展开，支持宽/窄布局锚定交互。 | **低** - 配置易用性提升。 |
| **[#5280](https://github.com/HKUDS/nanobot/pull/5280)** | `fix(memory): archive short idle sessions for Dream` | **Bug Fix (P2)** | 修复短空闲会话未被 Dream 归档处理的问题，补全 `history.jsonl` 产出。 | **中** - 长期记忆/Dream 功能完整性。 |
| **[#5231](https://github.com/HKUDS/nanobot/pull/5231)** | `feat(memory): archive idle sessions for Dream` | **Feature** | 引入空闲会话归档机制，确保 Dream 有输入源。（配合 #5280 完善） | **中** - 核心记忆管线。 |

**进展总结**：今日合并 PR 质量极高，**3 个 P2 级别安全/数据完整性修复（#5272, #5268, #5263）全部落地**，WebUI 技术债清理（#5284, #5285）推进彻底，Dream 记忆管线补齐（#5231, #5280）。主分支稳定性显著增强。

---

## 4. 社区热点：高互动 Issues/PRs

| 项目 | 标题 | 互动 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **[Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)** | `[enhancement] Logs about token consumption` | **10 评论** 🔥 | **用户痛点极强**：用户反馈 "2 小时烧掉百万 Token 且无感知"，迫切需**可观测性**——每次调用的 Token 明细、模型、耗时日志。建议纳入下版本 `priority: p1`。 |
| **[Issue #5149](https://github.com/HKUDS/nanobot/issues/5149)** | `[bug] no audio ?` | **5 评论** | WhatsApp 发送音频失败（`ffmpeg` 警告），接收正常。涉及媒体处理管线，需排查 `neonize` 依赖或转码逻辑。 |
| **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)** | `[Bug] Not possible to change models in a specific session` | **3 评论** | **交互缺陷**：UI 点击模型标签无反应，`/model` 命令仅作用于 fallback。用户期望 SaaS 级会话级模型切换体验。 |
| **[Issue #5278](https://github.com/HKUDS/nanobot/issues/5278)** | `[Security] Session history should not live inside the agent workspace` | **1 评论** (但关联 **PR #5279**, **#5283**) | **架构级安全隐患**：会话历史落在 workspace 内，受 `restrict_to_workspace` 保护，Agent 可读/写自身历史 → 提示词注入/数据泄露风险。已有修复 PR 待审。 |
| **[PR #5288](https://github.com/HKUDS/nanobot/pull/5288)** | `feat(plugins): integrate Agent Plugins with CLI Apps` | **新开** | **生态建设**：统一 Agent Plugins v1 与 CLI-Anything 目录安装边界，消除 ad-hoc skill 差异。标志插件生态走向标准化。 |

---

## 5. Bug 与稳定性：今日新报告/更新（按严重度）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (安全/数据丢失)** | **[#5278](https://github.com/HKUDS/nanobot/issues/5278)** | 会话历史存储在 Agent 工具可读写的 workspace 内，存在提示词注入/历史篡改风险。 | **[#5279](https://github.com/HKUDS/nanobot/pull/5279)** (移至 workspace 外), **[#5283](https://github.com/HKUDS/nanobot/pull/5283)** (非 WebUI 会话级沙箱) | **Open / Review Needed** ⚠️ **维护者优先审查** |
| **🟠 High (功能失效)** | **[#5266](https://github.com/HKUDS/nanobot/issues/5266)** | Token 消耗异常巨大（百万/2h），无审计日志定位来源。 | 无 | **Open** 需引入详细 Token 计量日志 |
| **🟠 High (功能失效)** | **[#5256](https://github.com/HKUDS/nanobot/issues/5256)** | `/goal` 触发几十条重复回复，陷入循环直到用户干预。 | 无 | **Open** 疑似 Agent 循环检测/目标状态机缺陷 |
| **🟡 Medium (渠道/交互)** | **[#5149](https://github.com/HKUDS/nanobot/issues/5149)** | WhatsApp 无法发送音频（ffmpeg 警告）。 | 无 | **Open** 需排查媒体发送管线 |
| **🟡 Medium (渠道/交互)** | **[#5198](https://github.com/HKUDS/nanobot/issues/5198)** | 会话级模型切换失效（UI 无响应，命令仅作 fallback）。 | 无 | **Open** 涉及会话状态与模型解析逻辑 |
| **🟡 Medium (数据一致性)** | **[#5276](https://github.com/HKUDS/nanobot/issues/5276)** | 多会话共享 `~/.nanobot/workspace` 导致临时文件隔离缺失。 | **[#5283](https://github.com/HKUDS/nanobot/pull/5283)** (per_session_sandbox) | **Open / PR Ready** |
| **🟢 Low (代码质量)** | **[#5290](https://github.com/HKUDS/nanobot/issues/5290)** | 原子 JSONL 写入逻辑在 3 处重复（MemoryStore, JsonlSessionStore, SubagentTranscriptStore）。 | **[#5291](https://github.com/HKUDS/nanobot/pull/5291)** (Subagent 持久化并复用) | **Open / Refactoring** |

> **特别关注**：**#5278 安全问题**已有完整修复方案（PR #5279, #5283），但均处于 Open 状态，**强烈建议维护者今日内 Review 并合并**，消除 0-day 风险窗口。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR/进展 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue #5266** (高呼声) | **Token 消耗审计日志**（每次调用：模型、输入/输出 tokens、cost、耗时） | 无 PR | ⭐⭐⭐⭐⭐ **极高** | 成本控制刚需，实现成本低（Wrapper/Callback），建议 `p1` 排期。 |
| **Issue #5198** | **会话级模型自由切换**（UI + 命令双通道） | 无 PR | ⭐⭐⭐ **中高** | 涉及 Session State 与 Model Resolver 重构，需设计确认。 |
| **PR #5288** | **Agent Plugins v1 标准化集成**（统一 CLI Apps 与手动插件安装） | **Open** | ⭐⭐⭐⭐ **高** | 架构演进方向，Re-bin 主导，生态建设关键。 |
| **PR #5252** | **WebUI 临时聊天模式**（非持久、多轮、首次消息后创建） | **Open** | ⭐⭐⭐⭐ **高** | UX 创新，符合 "隐私优先/一次性任务" 场景。 |
| **PR #5291** | **Subagent 完整会话持久化**（工具调用、推理、结果全保留） | **Open** | ⭐⭐⭐⭐ **高** | 解决 "黑盒子审计" 痛点，配合 #5290 重构。 |
| **Issue #5289** | **Telegram 贴纸发送/接收 + Agent 主动 Reaction** | 无 PR (Bot 自动创建) | ⭐⭐⭐ **中** | 渠道功能补齐，社区贡献可能性大。 |
| **Issue #5276 / PR #5283** | **会话级文件系统隔离** (`per_session_sandbox`) | **PR #5283 Open** | ⭐⭐⭐⭐ **高** | 安全隔离硬需求，已有实现待合并。 |

---

## 7. 用户反馈摘要：真实痛点与场景

1.  **成本焦虑与黑盒感 (#5266)**：
    *   *场景*：用

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-08

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时内共有 **100 条** Issue/PR 更新（50 Issues + 50 PRs），其中新开/活跃 Issue 44 条，待合并 PR 47 条，显示社区与核心团队并行推进架构重构、插件生态、多平台稳定性等多条主线。
- **核心主题聚焦**：① **God-file 拆解**（Epic #78647，评论 60 条）进入实施决策期；② **上下文压缩/会话状态** 连续爆出 P1 级崩溃与数据丢失（#79278, #79624）；③ **多平台桌面/网关**（Windows TUI 崩溃 #80968、macOS 网关冲突 #22418、Telegram 富文本回退 #79331）修复并行；④ **插件/提供商可发现性** 与 **安装器打包** 进入收尾（PR #81419, #79599）。
- **合并/关闭效率**：仅 3 条 PR 合并/关闭（含 1 个重复关闭），多数 PR 仍处“待 Review”状态，说明审阅带宽可能成为瓶颈。
- **版本发布**：今日无新 Release，v0.20.x 维护分支仍在积累补丁。
- **健康度评估**：**🟡 黄色/关注**——高优 Bug 与架构重构并行，若 Review 带宽不扩充，主干稳定性风险上升。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#81412](https://github.com/NousResearch/hermes-agent/pull/81412) | **Feature** | 新增策略兜底路由：主编排器遭遇模型侧策略拦截时，自动委派本地 Qwen 子代理完成；含幂等落库、租约、验证哈希 | 多模型容灾、企业级合规 |
| [#80808](https://github.com/NousResearch/hermes-agent/pull/80808) | **Bugfix (P2)** | Agent 在实现边界（权限/安全/仓库/外部系统）受阻时，必须返回**可执行的交接信息**（剩余范围、确切阻断点、副作用、恢复计划），禁止仅输出部分进度摘要 | 会话可恢复性、用户信任 |
| [#11349](https://github.com/NousResearch/hermes-agent/issues/11349) | **Docs/Close** | 关闭：Discord 文档 6 处偏移 + `/voice join` 缺失修复已合入主干 | 文档一致性 |

> **整体推进度**：架构重构（God-file 拆解）尚在设计决策期；P1/P2 稳定性修复已有 PR 排队（#81415, #81411, #81346 等），预计 1-2 天内可合入缓解主干风险。

---

## 4. 社区热点（高互动 Issue/PR）

| # | 标题 | 评论 | 👍 | 核心诉求 | 分析 |
|---|------|------|----|----------|------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | **Epic: Shard all 20 god files** | 60 | 0 | 全仓库 20 个巨型文件强制拆解，拒绝回滚 | **架构治理核心议题**；维护者需在“一次性大拆解”与“增量分模块切片”间决策，影响后续 3-6 月所有模块边界 |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | **Plugin Interface Expansion — Tracking** | 30 | 0 | 社区提案汇总：稳定插件接口、入口点发现、版本协商 | **生态扩展关键**；PR #81419 已实现 `pip entry points` 发现，后续需定 Schema 版本策略 |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | **Configurable Temperature Parameter** | 11 | 13 | 暴露用户级 `temperature` 配置，解决硬编码导致幻觉 | **高呼声功能**（👍 13），涉及模型推理管线统一入口，建议纳入下一小版本 |
| [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) | **Context compression drops in-flight tool chain** | 10 | 0 | 预压缩切断工具链，副作用已执行但结果未达 Agent，导致重放非幂等操作 | **P1 数据一致性 Bug**；关联 #79624（网关重启崩溃），需原子化“压缩-工具链”边界 |
| [#79331](https://github.com/NousResearch/hermes-agent/issues/79331) | **Telegram Rich Messages omit code-block copy** | 3 | 0 | Bot API 10.1 富文本丢失复制按钮，回退 MarkdownV2 可保留 | **用户体验细节**；PR #81346 已实现“含代码块强制走 legacy 路径” |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P1 - 数据丢失/崩溃** | [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) | 预压缩中断工具链，副作用已生效但结果丢失，Agent 重放非幂等调用 | 暂无直接 PR，需设计“压缩屏障” | 🔴 Open |
| **P1 - 进程崩溃** | [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) | 网关重启时预压缩超阈值直接 `exit(1)` 杀进程，会话不可用 | 暂无 PR | 🔴 Open |
| **P1 - 安全/计费** | [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) | OAuth (Claude Pro/Max) 暴露 `memory`/`session_search` schema 触发 400 “用量耗尽” | 无 PR，需 schema 条件注入或用量感知 | 🔴 Open |
| **P2 - Windows TUI 崩溃** | [#80968](https://github.com/NousResearch/hermes-agent/issues/80968) | `hermes --tui` 输入即崩，ConPTY 兼容性 | 无 PR | 🔴 Open |
| **P2 - 进程组泄漏** | [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) | Kanban 超时替换后旧进程组存活，并发写同一 worktree | [#81411](https://github.com/NousResearch/hermes-agent/pull/81411) `kill(-pgid)` 全组信号 | 🟡 PR Ready |
| **P2 - 会话状态** | [#80507](https://github.com/NousResearch/hermes-agent/issues/80507) | 子任务退出守卫消耗父任务 turn budget | 无 PR | 🟡 Open |
| **P2 - 认证兼容** | [#80581](https://github.com/NousResearch/hermes-agent/pull/80581) | 旧 Codex 凭据存储结构导致 `auth remove` 崩溃 | **#80581 已修复，待合并** | 🟢 Fix Ready |
| **P3 - Telegram 富文本** | [#79331](https://github.com/NousResearch/hermes-agent/issues/79331) | 代码块无复制按钮 | **#81346 已修复，待合并** | 🟢 Fix Ready |
| **P3 - MCP 工具名截断** | [#81331](https://github.com/NousResearch/hermes-agent/issues/81331) | 生成工具名超 64 字符 | **#81417 已修复，待合并** | 🟢 Fix Ready |
| **P3 - Windows 安装残留** | [#80569](https://github.com/NousResearch/hermes-agent/issues/80569) | 重复启动项、更新后自动复活 | 无 PR | 🟡 Open |

> **关注点**：P1 级 3 个均无 Fix PR，**建议维护者今日内指派 Owner**；P2/P3 多已有 PR 待 Review，审阅带宽应向这些倾斜。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 相关 PR/实现进度 | 入版本可能性 |
|------|-------|----------|------------------|--------------|
| **可配置 Temperature** | [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | 👍 13，评论 11 | 无 PR，涉及 `model_inference` 统一入口 | **高** — 单参数暴露，回归风险低 |
| **插件入口点发现** | [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | 评论 30 | **#81419** 已实现 `entry_points` 扫描 | **极高** — 已有 PR，配合 Epic 拆解同步合入 |
| **混合工具预选 (RAG)** | [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | 👍 4，评论 9 | 无 PR，需向量索引 + 关键词双通道 | **中** — 需设计 Schema 注入协议，配合 God-file 拆解 |
| **认知记忆操作 (CrewAI 式)** | [#509](https://github.com/NousResearch/hermes-agent/issues/509) | 👍 4，评论 7 | 无 PR，涉及编码/巩固/自适应召回管线 | **低** — 架构级，依赖 Memory 模块拆解完成 |
| **首发 Teams 多画像协作** | [#81405](https://github.com/NousResearch/hermes-agent/issues/81405) | 评论 1（新建） | 无 PR，基于 Profile/Kanban/Channel 原语 | **中长期** — 需先稳定 Profile 隔离与 Kanban 可靠性 |
| **后台 Review 开关** | — | — | **#81424** 新增 `agent.background_review.enabled` | **高** — 已有 PR，配合检查点机制 (#81425) |

---

## 7. 用户反馈摘要（从评论提炼）

| 痛点/场景 | 典型引述/现象 | 频次/广度 | 建议响应 |
|-----------|---------------|-----------|----------|
| **上下文压缩导致工具链中断/重放非幂等** | “预压缩切断 in-flight tool chain，side effect 已发生，Agent 重放导致重复计费/写入” | 2 个 P1 Issue 高讨论 | 引入“压缩屏障”：工具链完成前暂停压缩，或补偿事务日志 |
| **Windows 原生体验差** | TUI 即崩 (#80968)、安装残留重复启动 (#80569)、路径 `file://C:\` 无法打开 (#80969) | 3 个 Issue 集中 8 月首周 | 设立 Windows 兼容性 Sprint，CI 增加 ConPTY 测试 |
| **Telegram 富文本回退丢失复制按钮** | “Bot API 10.1 rich_message 无复制 UI，MarkdownV2 有” | 2 个 Issue + 1 PR | **#81346 已修复**，建议快速合入并回溯 v0.20.x |
| **OAuth 模型用量被内置工具 schema 误触发** | “加入 memory/schema 即 400 out of usage” | 1 Issue 但涉及计费 | 方案：动态 schema 注入（仅在用户显式启用时），或用量预检 |
| **桌面侧边栏项目类型混淆** | “显式项目、自动发现 repo、Home 混在一起无视觉区分” | 2 个 Issue (#73888, #80383) | **#81359 已修复**，图标/分组区分 |
| **会话删除无确认** | “Desktop 点击即永久删除，误操作无法撤销” | 1 Issue (#81356) | 低成本修复：加确认对话框，建议纳入下周迭代 |

---

## 8. 待处理积压（长期未响应/高价值）

| Issue/PR | 创建时间 | 停滞天数 | 价值/风险 | 建议动作 |
|----------|----------|----------|-----------|----------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) God-file 拆解 Epic | 2026-08-04 | 4 | **架构基石**，阻塞后续模块边界清理 | **召集架构评审会**，输出分阶段拆解计划与 Owner 分配 |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) Plugin Interface Expansion | 2026-07-14 | 25 | 生态开放度核心，社区提案积压 | 结合 #81419 定稿 Schema 版本策略，发布 RFC |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) Temperature 配置 | 2026-04-29 | 101 | 高呼声、低复杂度 | 指

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-08

> **数据来源**：GitHub `nanocoai/nanoclaw` 仓库过去 24 小时增量（2026-08-07 至 2026-08-08）  
> **统计口径**：Issues 0 条更新、PR 10 条更新（Open 8 / Closed 2）、Release 0 个

---

## 1. 今日速览
- **活跃度评级：🟢 高** — 单日 10 条 PR 活动，零 Issue 噪音，核心团队与外部贡献者并行推进 **Channel 生态扩展、Setup Wizard 完善、技术债偿还** 三条主线。  
- **合并/关闭 2 条 PR**：修复进度卡片失败原因展示（用户可见体验提升）与关停旧版 Mattermost 实现（架构清理）。  
- **新增 3 条核心功能 PR**：Mattermost v2 适配器、AnyDoc 文档转换 Skill、Dial 渠道接入，均已进入 Review 流程。  
- **基建类 PR 持续推进**：DB 迁移回填、Formatter 容错、Mount readonly 修复，显示项目处于 **“功能扩张期并行稳固基建”** 的健康节奏。  
- **无 Release、无热点 Issue**，社区处于“默默造轮子”阶段，维护者可集中精力 Code Review 与 CI 绿灯。

---

## 2. 版本发布
**今日无新版本发布**。  
当前主分支累计变更已包含多项用户可见修复（进度卡片错误信息、Slash 命令容错），建议在 #3197、#2346 合并后切 **vNext Patch** 发布。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心推进 | 对项目里程碑的意义 |
|---|---|---|---|
| **[#3197](https://github.com/nanocoai/nanoclaw/pull/3197)** `fix(progress): 失败状态展示具体原因` | **Bug Fix / UX** | 把 `agent-runner` 上报的 `resultSummary` 真实错误提取到飞书卡片标题，单行 ≤38 字，复用脱敏逻辑；新增 reducer 单测 + 跨层 JSON 测试，**全量 1427 测试通过**。 | **用户痛点直接闭环**：此前仅显示“执行系统检查失败”，现可一眼定位根因（如权限不足、网络超时），显著降低 MTTR。 |
| **[#546](https://github.com/nanocoai/nanoclaw/pull/546)** `[PR: Skill, Status: Blocked] Add Mattermost channel skill` | **Architecture Cleanup** | 关停基于旧 `Channel`/`registry.ts` 的实现，标记 **Superseded by #3199**。 | **技术债清理**：确认旧架构彻底退役，避免审阅者在两套注册机制间切换上下文。 |

> **整体进度判断**：两条关闭 PR 分别解决“用户可感知的报错体验”与“架构历史包袱”，主分支 **健康度 +1**。

---

## 4. 社区热点（Open PR 互动 Top 3）

| PR | 评论/👍 | 核心诉求 | 维护者关注建议 |
|---|---|---|---|
| **[#3199](https://github.com/nanocoai/nanoclaw/pull/3199)** `Add Mattermost channel integration (v2 ChannelAdapter)` | 0 / 0 | **外部贡献者 wakqasahmed** 重写适配新 `ChannelAdapter`/`channel-registry.ts` 契约，替代 #546。 | **高优先级 Review**：核心 Channel 生态扩展，涉及 `registerChannelAdapter`、Webhook 验签、OAuth 流程，建议核心团队 48h 内完成首轮审阅。 |
| **[#2909](https://github.com/nanocoai/nanoclaw/pull/2909)** `feat(setup): template setup flow in the wizard and first-agent stamping` | 0 / 0 | **Core-team PR** 接续 #2890，落地“首个 Agent 创建向导”与模板盖章。 | **里程碑级功能**：关乎新用户 Onboarding 体验，已开发 37 天，建议本周内合并进主分支。 |
| **[#3190](https://github.com/nanocoai/nanoclaw/pull/3190)** `feat: add Tavily MCP tool skill` | 0 / 0 | **Utility Skill** 新增 Tavily 搜索工技能，仅 `.claude/skills/` 目录变更，无源码侵入。 | **低风险快速合并**：符合 Skill 沙箱隔离设计，可作为 Skill 贡献范例加速通过。 |

> **趋势**：核心团队 PR（`core-team` 标签）与外部贡献并行，社区呈现 **“核心做基建、外围做生态”** 良性分工。

---

## 5. Bug 与稳定性

| 严重度 | PR / Issue | 现象 | 修复状态 |
|---|---|---|---|
| **P1 - 用户可见报错模糊** | [#3197](https://github.com/nanocoai/nanoclaw/pull/3197) ✅ **已合并** | 进度卡片仅显示泛化动作名，隐藏真实错误。 | **已修复并测试通过**，随下版本发布。 |
| **P2 - Formatter 误判 Slash 命令** | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) 🔄 **Review 中** | 未知 slash 归类为 `passthrough` 导致 SDK 丢消息。 | 已改为 `category: 'none'`，等待 CI 绿灯合并。 |
| **P2 - DB 迁移遗漏 destination 回填** | [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) 🔄 **Review 中** | 既有 messaging-group wirings 缺少 channel destinations。 | Migration 021 已编写，保留现有数据，需确认生产回滚策略。 |
| **P3 - Mount readonly 缺失** | [#3196](https://github.com/nanocoai/nanoclaw/pull/3196) 🆕 **新开** | 容器挂载缺少 readonly 选项，潜在安全/数据完整性风险。 | 刚提交，待分类与复现。 |

> **稳定性结论**：无 Crash/Regression 阻塞主干，**P1 已闭环**，其余在有序推进。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 落地 PR | 纳入下版本概率 |
|---|---|---|---|
| **Channel 生态扩展** | Mattermost、Dial 双渠道接入 | [#3199](https://github.com/nanocoai/nanoclaw/pull/3199)、[#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 🟢 **极高** — 均为 `Feature skill`，符合 v2 ChannelAdapter 契约 |
| **文档处理能力** | AnyDoc 统一格式转换 Skill | [#3198](https://github.com/nanocoai/nanoclaw/pull/3198) | 🟢 **高** — `Utility skill` 无源码侵入，审阅成本低 |
| **搜索增强** | Tavily MCP 工具技能 | [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | 🟢 **高** — 纯技能包，边界清晰 |
| **新用户引导** | Setup Wizard 首个 Agent 模板盖章 | [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | 🟡 **中** — 核心团队自驱，但依赖 #2890 模板加载器稳定性 |

> **路线图推测**：**vNext Minor** 将聚焦 **“Channel 生态 + Onboarding 体验 + Skill 市场雏形”** 三大支柱。

---

## 7. 用户反馈摘要
**过去 24h 无 Issue 评论**，无法直接提炼用户语音。  
**间接信号**：
- #3197 修复动机来自 **内部复盘/用户投诉** “只能看到泛化失败文案”，说明**可观测性**仍是高频痛点。
- #2346 由 **Formatter 误判导致消息静默丢失** 触发，提示 **Slash 命令兼容性** 在真实场景已暴露边界。

> 建议维护者在下版本 Release Note 显性标注“错误信息可读性提升”，收集真实用户反馈闭环。

---

## 8. 待处理积压（>30 天未显著推进）

| PR / Issue | 停滞天数 | 关键阻碍 | 建议行动 |
|---|---|---|---|
| **[#2909](https://github.com/nanocoai/nanoclaw/pull/2909)** Setup Wizard 模板盖章 | **37 天** | 依赖 #2890 稳定、UI 细节反复打磨 | **指定 Owner 本周强制合并或拆分为可独立发布的最小增量** |
| **[#2346](https://github.com/nanocoai/nanoclaw/pull/2346)** Formatter 未知 Slash 容错 | **92 天** | 早期被标记 `passthrough` 语义争议 | **已有修复方案，仅待 CI 通过，建议本周合并并回溯至维护分支** |
| **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** Dial 渠道接入 | **25 天** | 涉及 `runChannelSkill` 模型新增、Wizard 技能注册 | 核心团队 PR，优先级高，**安排专项 Review Slot** |
| **[#3145](https://github.com/nanocoai/nanoclaw/pull/3145)** DB 迁移回填 destination | **11 天** | 生产回滚风险评估未完成 | **要求补齐回滚脚本与灰度发布方案后合并** |

---

## 📌 维护者行动清单（Today）
1. **Review #3199** — Mattermost v2 适配器，生态扩展关键路径。  
2. **批准 #3190 / #3198** — 两个纯 Skill PR，低风险可快速合并提升社区贡献者信心。  
3. **推进 #2909** — 设定本周合并截止线，拆分非阻塞 UI 细节至后续 PR。  
4. **关闭 #2346** — CI 绿即合并，消除 92 天老 PR。  
5. **评估 #3196** — Mount readonly 安全修复，确认严重度并纳入下 Patch。  

---

> **报告生成时间**：2026-08-08 06:00 UTC  
> **下次更新**：2026-08-09 同一时间（自动增量）

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-08

---

## 1. 今日速览

IronClaw 今日呈现**高强度并行推进**态势：50 条 Issue 与 50 条 PR 同步更新，零版本发布。核心动能集中在三大主线——**文档真实性管线（Doc-Truth）全链路落地**（5 个关联 PR 同步推进）、**渐进式工具披露的生产化指标与压测闭环**（#7374、#7385、#7382）、**长期记忆召回缺陷的根因修复**（#7365 关联 #7185）。同时，QA 环境暴露出 Slack/Telegram/GitHub 等渠道的身份识别、连接状态同步、工具心跳等**集成层稳定性问题**集中涌现（7 个 bug_bash_P1 Issue）。整体代码库健康度良好，但文档与实现同步、跨平台兼容、持久化状态兼容性仍是需持续投入的风险区。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 规模/风险 | 核心推进内容 | 关联 Issue |
|----|------|-----------|--------------|------------|
| [#7374](https://github.com/nearai/ironclaw/pull/7374) | Open | XL / Low | **批量 `tool_describe`**：将逐个 schema 拉取合并为单次往返，显著降低大工具集场景下的模型轮次与 token 消耗 | #6810, #7166 |
| [#7385](https://github.com/nearai/ironclaw/pull/7385) | Open | XL / Low | **工具披露推广持久化指标**：在事件流中落地可查询的 rollout metrics，支撑灰度决策 | #6810 |
| [#7365](https://github.com/nearai/ironclaw/pull/7365) | Open | XL / Low | **记忆保存指引 + 常驻 MEMORY.md 提示通道**：修复跨会话记忆召回失效（三大根因：缺乏保存提示、检索时机缺失、上下文污染） | **#7185** |
| [#7382](https://github.com/nearai/ironclaw/pull/7382) | Open | XL / Low | **脚本化工具调用压测 + 持久化写入回读验证**：扩展夜间压测覆盖 builtin/memory 写路径 | **#7360** |
| [#7375](https://github.com/nearai/ironclaw/pull/7375) ~ [#7381](https://github.com/nearai/ironclaw/pull/7381) | Open | L~XL / Low | **Doc-Truth 管线 5/5 连环 PR**：manifest v3 文档重写、引用门禁扩展、契约测试、发布分支 `docs-live`、设计记录 —— 彻底解决文档滞后发布 | **#7317**, #7367 |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | **Closed** | XL / Low | **显式渠道投递工具（双通道模型）**：移除启发式投递，引入 `channel_deliver` 统一入口，修复 Telegram/Slack 投递错乱 | #6643, #6644, #6475 |
| [#7214](https://github.com/nearai/ironclaw/pull/7214) | **Closed** | XL / Medium | **沙箱显式 Docker / Railway 配置**：租户+用户级隔离、非 root worker、环境变量清理 | — |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | Open | XL / Low | **技能选择权下放给模型**：移除宿主关键词评分，统一由模型通过 `builtin.skill_activate` 决策 | #6941 |
| [#7384](https://github.com/nearai/ironclaw/pull/7384) | Open | L / Low | **加载操作员 `.env` + 修正会话故障误报为坏 API Key** | #7359 |

**合并/关闭里程碑**：`#7157`（渠道投递重构）、`#7214`（沙箱隔离）、`#7372`（披露 token 基线测试固化）、`#7324`（依赖批量升级）已落库，标志着 v1.2 方向核心基建基本就位。

---

## 4. 社区热点

| 热度 | Issue/PR | 核心诉求 | 分析 |
|------|----------|----------|------|
| 🔥 **6 评论** | [#7340](https://github.com/nearai/ironclaw/issues/7340) | **模型设置无法一键恢复出厂值** | 用户在 Settings→Inference 修改 provider/model 后无法回滚，缺乏 “Reset to defaults” 入口，属于 **UX 缺口**，优先级 P1。 |
| 🔥 **4 评论** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | **Token 估算读取引用字符串长度而非实体内容** | `ModelWorkRequest::for_assistant` 用 `content_ref.as_str().len()` 估算 input tokens，导致计费/配额偏差，属 **P1 计量 Bug**。 |
| 🔥 **3 评论** | [#7317](https://github.com/nearai/ironclaw/issues/7317) | **Doc-Truth 验证管线提案** | 列举 3 个实例（`origin_gate_matrix`、Responses API、CLI 标志）证明文档滞后发布，推动 **CI 门禁 + 契约测试 + 发布分支** 三位一体方案，已由 5 个 PR 推进。 |
| 🔥 **2 评论** | [#7185](https://github.com/nearai/ironclaw/issues/7185) | **跨会话记忆不可靠召回** | 多名测试员独立复现，PR #7365 已给出系统性修复，待评审合入。 |
| 🔥 **2 评论** | [#6590](https://github.com/nearai/ironclaw/issues/6590) | **Windows `serve` 报 workspace 与 skill root 重叠** | 阻断 Windows 本地开发，长期未解（创建于 7/23），需核心组排期。 |
| 🔥 **2 评论** | [#7292](https://github.com/nearai/ironclaw/issues/7292) | **已安装工具不可用 + runner heartbeat 报错** | Railway QA 环境高频复现，涉及工具激活状态同步与心跳机制，属 **集成稳定性 P1**。 |

> **趋势**：QA 环境涌现的 **Slack/Telegram/GitHub 渠道身份识别、连接状态不同步、工具心跳超时** 类 Issue（`#7344`, `#7295`, `#7247`, `#7294`, `#7246`, `#7074`, `#5456`）共 7 条，均打 `bug_bash_P1` 标签，提示 **多租户运行时状态一致性** 是当前最大痛点。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 阻断** | [#6590](https://github.com/nearai/ironclaw/issues/6590) | Windows `serve` 直接报错退出 | ❌ | 影响开发者体验，需尽快排期 |
| **P1 计量** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | Token 估算偏差（读引用串长度） | ❌ | 影响配额/计费准确性 |
| **P1 集成** | [#7292](https://github.com/nearai/ironclaw/issues/7292) | 工具安装后不可用 + heartbeat 错误 | ❌ | Railway QA 高频复现 |
| **P1 集成** | [#7344](https://github.com/nearai/ironclaw/issues/7344) | Slack 显示 ACTIVE 但助手不识别 | ❌ | 状态同步断层 |
| **P1 集成** | [#7295](https://github.com/nearai/ironclaw/issues/7295) | Slack DM 发错用户 | ❌ | 身份映射错误 |
| **P1 集成** | [#7247](https://github.com/nearai/ironclaw/issues/7247) | 误报 GitHub 已连接 | ❌ | 状态缓存未失效 |
| **P1 集成** | [#5456](https://github.com/nearai/ironclaw/issues/5456) | Routine 跑超 90s lease 过期 | ❌ | 长任务心跳阈值过激进 |
| **P1 记忆** | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆召回失效 | ✅ [#7365](https://github.com/nearai/ironclaw/pull/7365) | 已有系统性修复 PR |
| **P1 延迟** | [#7368](https://github.com/nearai/ironclaw/issues/7368) | DeepSeek 类模型渠道轮次耗时数分钟 | ❌ | 根因为 #6643 潜在延迟 |
| **P2 文档** | [#7367](https://github.com/nearai/ironclaw/issues/7367) | 文档仍称 chat 不能连渠道 | ✅ **Closed** | 已由 Doc-Truth 管线覆盖 |

> **已关闭/修复**：`#6476`（Slack 编码错误导致幻觉）、`#6644`/`#6643`/`#6475`（Telegram 回错/不处理/配对卡死）、`#4874`（HTTP 非 localhost 非法调用）、`#6810`（渐进披露默认开启）、`#7177`（deferred 检索排序）、`#7224`（Inspector 活动时间轴）均在近期关闭或合并。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 纳入下一版本可能性 | 依据 |
|----------|----------|-------------------|------|
| [#7340](https://github.com/nearai/ironclaw/issues/7340) | Settings → Inference **一键恢复出厂默认** | ⭐⭐⭐⭐⭐ **极高** | 纯 UI+配置重置，无架构变更，用户痛点明确 |
| [#7317](https://github.com/nearai/ironclaw/issues/7317) / 5 PRs | **Doc-Truth 管线**（CI 门禁、契约测

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-08

> **数据统计周期**：2026-08-07 00:00 - 2026-08-07 23:59 (UTC)  
> **数据来源**：GitHub API (netease-youdao/LobsterAI)

---

## 1. 今日速览

- **发布节奏加快**：昨日发布 **v2026.8.7** 版本，距离上一版本（v2026.8.5）仅间隔 2 天，体现了团队采用“小步快跑”的迭代策略，重点修复 Windows 安装器稳定性、Cowork 搜索回归及 Markdown 数学公式渲染问题。
- **修复导向明显**：7 个 PR 全部为修复/发布类，**零新增功能 PR**，技术债偿还与稳定性打磨为主线。其中 PR #2452 直接针对昨日新增 Issue #2443（模型 ID 含斜杠导致 Provider 丢失）给出修复，响应速度极快（<24h）。
- **社区存量 Issue 清理**：3 个长期搁置（标记 `stale`）的 Issue（#1195, #1263, #1265, #1273）集中关闭，涉及技能安装路径错误、定时任务重复、多 Agent IM/模型隔离、sql.js 内存溢出等核心痛点，说明维护者正在系统性处理历史积压。
- **新增 Bug 与需求并存**：新开 4 个 Issue，除 1 个功能请求（输入框编辑模式 #2444）外，其余均为阻塞性 Bug（模型 ID 斜杠不兼容 #2443、执行无反馈 #2447），用户反馈集中在 **OpenClaw 配置持久化** 与 **交互细节体验** 两大维度。
- **项目健康度**：**良性**。发布频率高、关键 Bug 修复闭环快、历史债务主动清理，但需警惕 “执行无结果无报错” (#2447) 等缺乏可复现信息的阻塞性问题拖累用户信心。

---

## 2. 版本发布

### 📦 **LobsterAI 2026.8.7** (Released: 2026-08-07)
**完整变更日志**: [Release 2026.8.7](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.7) | **合并 PR**: [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451)

| 类型 | 核心变更 | 关联 PR | 影响范围 |
|------|----------|---------|----------|
| **Feat** | Cowork 会话新增标题栏搜索入口，支持历史对话快速检索 | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) (早期合并) | 协作模式重度用户 |
| **Feat** | Markdown LaTeX 数学公式分隔符支持优化（兼容 `$$...$$` 等标准写法） | [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | 学术/技术文档场景 |
| **Fix** | **Windows 安装器看门狗异常退出码处理**，修复更新/安装静默失败 | [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | **全量 Windows 用户（高优先级）** |
| **Fix** | Cowork 全屏代码工具栏在 Windows 标题栏拖拽区域点击失效 | [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) | Windows 协作用户 |
| **Chore** | 清理 `config.set` 中由插件索引管理的键，避免配置污染 | [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) | 插件开发者/高级用户 |

> ⚠️ **破坏性变更 / 迁移提示**：**无**。本版本为纯补丁版本，配置结构无变更，建议所有 Windows 用户优先升级以规避安装器风险。

---

## 3. 项目进展

今日共 **合并/关闭 6 个 PR**，全部进入 `main` 分支，推进了 **稳定性基线** 与 **配置一致性** 两大里程碑：

| PR | 标题 | 核心贡献 | 状态 |
|----|------|----------|------|
| [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) | **Release/2026.8.5** | 批量合并 5 个子 PR，完成 v2026.8.7 发布准备 | ✅ Merged |
| [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | **Fix markdown latex math delimiters** | 统一前后端公式解析规则，修复渲染错位/不生效 | ✅ Merged |
| [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | **Fix(win-installer): rescue null watchdog exit code** | 兜底安装器进程异常退出，提升 Windows 分发成功率 | ✅ Merged |
| [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) | **Fix(cowork): restore fullscreen code toolbar clicks on Win** | 修正 Electron 无边框窗口拖拽区域遮挡交互元素 | ✅ Merged |
| [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) | **Fix(openclaw): strip plugin-index-managed keys from config.set** | 防止插件索引字段污染用户配置，修复潜在启动异常 | ✅ Merged |
| [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) | **Liuzhq/fix chat search** | Cowork 搜索组件修复（配合 #2435 发布） | ✅ Merged |

**整体推进度评估**：完成 **v2026.8.7 里程碑 100% 交付**，并同步修复了发布后发现的关键回归（模型 ID 斜杠问题，见下文 #2452）。

---

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 互动指标 | 核心诉求分析 |
|------|----------|------|----------|--------------|
| 🔥 **1** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | **Bug：模型 ID 含斜杠的自定义 Provider 无法在界面中使用（SiliconFlow）** | 💬 1 评论 / 👍 0 / ⏱ <24h | **阻塞性兼容性缺陷**。OpenAI 兼容层解析 `provider/model` 格式时，将斜杠误判为分隔符，导致 `custom_0` 前缀丢失，模型无法在下拉框选择。已有修复 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 待合并。 |
| 🔥 **2** | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | **执行没有出结果，也没有错误信息** | 💬 1 评论 / 👍 0 / ⏱ 新开 | **静默失败**。用户提供截图但无日志/复现步骤，可能涉及 Agent 执行链路、技能调用或流式响应中断。需维护者引导补充 `debug.log` 与最小复现流程。 |
| 💡 **3** | [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | **[功能请求] 输入框编辑模式** | 💬 0 评论 / 👍 0 / ⏱ 新开 | **长文本交互痛点**。Shift+Enter 换行易误触发送，建议引入 “编辑模式” 切换（Enter 换行，Ctrl+Enter 发送）+ 高度自适应 + 可选 WYSIWYG。符合 “专业模式/极简模式” 双模交互趋势。 |
| 🧹 **4** | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | **[Bug] sql.js (WASM) 高频操作导致 `memory access out of bounds` 崩溃** | 💬 2 评论 / 👍 0 / 🏷 `stale` **Closed** | **核心存储稳定性隐患**。高频写入导致 WASM 内存碎片化 OOM，且 `fs.writeFileSync` 非原子写入有损坏风险。虽标记 stale 关闭，但 **根因未解**，建议纳入技术债专项重构（如迁移至 `better-sqlite3` / OPFS）。 |

> **热点洞察**：社区讨论聚焦于 **“配置持久化正确性”** 与 **“极简交互体验”** 矛盾。维护者对 #2443 的极速响应（同日出 PR）展示了对兼容性破坏的零容忍态度。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 影响面 | 修复进展 |
|--------|-------|------|--------|----------|
| 🔴 **Critical** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 自定义 Provider 模型 ID 含 `/` 导致 Provider 前缀丢失，UI 无法选择模型 | 所有使用 SiliconFlow、DeepSeek 等斜杠模型 ID 的用户 | ✅ **已有 Fix PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) (Open)**，保留 `provider` 字段持久化 |
| 🟠 **High** | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | Agent/Skill 执行无输出、无报错、无 Loading 状态 | 核心执行链路，不可用 | ❌ **无 PR**，缺乏复现信息，需用户补充日志 |
| 🟡 **Medium** | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 自建 Skill 安装至 OpenClaw 目录，重启后面板不显示 | 技能开发/分发流程 | 🏷 `stale` **Closed** 但未根治，路径映射逻辑存疑 |
| 🟡 **Medium** | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | sql.js WASM 内存越界崩溃 + 非原子写入损坏 DB | 长会话/高频写入场景 | 🏷 `stale` **Closed**，架构级风险未消除 |
| 🟢 **Low** | [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) | Cowork 全屏代码块工具栏在 Win 标题栏区域点击无响应 | Windows 协作用户 | ✅ **已合并修复** |

> **稳定性趋势**：**关键回归快速修复（#2443→#2452），但深层架构隐患（sql.js、技能安装路径）以 “stale 关闭” 方式规避，积累长期风险。**

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 现有实现/线索 | 纳入下版本概率 |
|------|-------|----------|---------------|----------------|
| **输入框编辑模式** (Enter 换行 / Ctrl+Enter 发送 + 展开 + 可选 WYSIWYG) | [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | 低 (0💬/0👍) | 无相关 PR，但符合 “专业用户长文本输入” 场景 | ⭐⭐☆☆☆ (需设计评审，可能纳入 2026.8.x 小版本) |
| **多 Agent 绑定不同 IM 机器人 / 模型** | [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) | 低 (2💬/0👍) | 🏷 `stale` **Closed**，但需求明确：调度 Agent 用轻量模型，编程 Agent 用强推理模型 | ⭐⭐⭐☆☆ (架构调整大，可能规划至 2026.Q3 里程碑) |
| **技能安装路径规范化** (避免装到 OpenClaw 目录丢失) | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 低 (2💬/0👍) | 🏷 `stale` **Closed**，PR #2445 清理配置键或相关 | ⭐⭐⭐☆☆ (配合插件索引重构一并解决) |

> **路线图推测**：**v2026.8.x 系列将聚焦 “稳定性收敛 + 交互微打磨”**；多 Agent 异构配置、sql.js 替换、技能市场等大项或留待 **v2026.9+** 里程碑。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的 **真实用户画像与痛点**：

| 用户场景 | 典型反馈 | 情绪倾向 | 关键洞察 |
|----------|----------|----------|----------|
| **多模型聚合用户** (SiliconFlow/DeepSeek) | “模型 ID 带斜杠根本选不了，只能手动改配置文件” | 😤 **强挫败** | OpenAI 兼容层 **未对非标准模型 ID 做转义/命名空间隔离**，是兼容性

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

# CoPaw (QwenPaw) 项目日报 | 2026-08-08

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时动态（Issues、PRs、Releases）
> **统计口径**：2026-08-07 00:00 – 2026-08-08 00:00 (UTC)

---

## 1. 今日速览
- **整体活跃度：高** —— 过去 24 小时共产生 **31 条 Issue 动态**（新开/活跃 20，关闭 11）与 **49 条 PR 动态**（待合并 27，合并/关闭 22），发布 **1 个 Beta 版本**。
- **核心主线**：v2.1.0-beta.2 发布后，社区迅速涌现大量**回归缺陷反馈**（桌面端文本选中失效、Windows 安装失败、ACL 重置、Shell 临时文件泄漏等），维护团队与外部贡献者同步推出 **10+ 修复型 PR**，呈现“发布-发现-修复”高频迭代特征。
- **平台痛点聚焦**：Windows 端问题最为集中（安装锁文件、杀毒误报、插件功能全挂、26 GB 临时文件泄漏），Docker 部署次之（应用市场维护中、MCP 周期性失效）。
- **架构演进信号**：`ReMe` 记忆系统迎来大规模重构（配置、Embedding 热更、Daily Paper、Cron 调度），`ACP` 协议、多渠道接入能力持续完善，新功能 PR（Mailbox、OneBot 语音/图像）并行推进。

---

## 2. 版本发布
### 🚀 v2.1.0-beta.2
> **发布时间**：2026-08-07 | [Release 链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.2)

| 变更类型 | 详情 | 影响范围 |
|----------|------|----------|
| **CI 修复** | `fix(ci): fence-aware section extraction in real-behavior-proof` (#6653) | CI 流水线稳定性，修复 #6626 |
| **检查点恢复** | `fix(checkpoints): restore auto snapshots in web workspace bootstrap` (#6) | Web 工作区冷启动时自动快照恢复，防止状态丢失 |

> ⚠️ **迁移提示**：Beta 版本不建议生产环境直接覆盖升级；Windows 用户请先关闭所有占用安装目录的进程（浏览器扩展 NM host、Python 运行时等），否则安装器将报“无法写入文件”错误（详见 Issue #6810）。

---

## 3. 项目进展
> **今日合并/关闭的关键 PR**（按业务价值排序）

| PR | 标题 | 状态 | 核心推进内容 |
|----|------|------|--------------|
| [#4694](https://github.com/agentscope-ai/QwenPaw/pull/4694) | feat(website): downloads UI Refactoring and opt | ✅ **已合并** | 官网下载页重构，历时 2 个多月，提升分发入口体验 |
| [#6717](https://github.com/agentscope-ai/QwenPaw/pull/6717) | test patrol bot | ✅ **已关闭** | 巡逻机器人测试 Issue，清理测试噪音 |
| [#6619](https://github.com/agentscope-ai/QwenPaw/pull/6619) | Bug: ToolCallBlock missing extra_content | ✅ **已关闭** | 修复 agentscope 2.x 兼容性崩溃，已由上游或变通方案解决 |
| [#6565](https://github.com/agentscope-ai/QwenPaw/pull/6565) | execute_shell_command: multiline & nohup bugs | ✅ **已关闭** | 多行命令换行折叠、后台进程挂起问题，标记 wontfix/duplicate |

> **待合并高价值 PR（已进入审查/自测阶段）**：
> - [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) **ReMe 记忆系统全链路增强**（配置验证、Embedding 热更、Daily Paper、Cron 调度、Console 重构）——**单体最大功能 PR**，预计将进入 v2.1.0 正式版。
> - [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) **Provider 请求清洗**（修复 StepFun 等严格校验厂商 400 报错）——解决 #6803。
> - [#6799](https://github.com/agentscope-ai/QwenPaw/pull/6799) **Shell 临时文件泄漏终结者**（Windows 26 GB 孤儿文件、输出上限、自动清理）。
> - [#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788) **ACL 共享根工作区修复**（解决 multica 多任务下 Telegram 白名单丢失 #6786/#6787）。
> - [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) / [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802) **桌面端文本选中/复制恢复**（修复 #6797 回归）。

---

## 4. 社区热点
> **按评论数 & 关注度排序的 Top 5 讨论**

| 排名 | Issue | 评论/👍 | 核心诉求 | 进展 |
|------|-------|---------|----------|------|
| 1 | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) Docker 2.0.1 插件/应用市场“维护中” | 8 / 0 | **生产环境阻断**：离线/私有部署无法拉取插件，严重影响扩展性 | 🔴 无 PR，需运维侧排查上游镜像/注册表 |
| 2 | [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) Doom Loop：单轮重复调用同一工具 6+ 次 | 8 / 0 | **Token 浪费 & 体验破坏**：系统仅在事后告警，未主动熔断 | 🟡 已关闭标记 `wontfix`，但社区仍期望内置熔断策略 |
| 3 | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-08

---

## 1. 今日速览

- **极高活跃度**：过去 24 小时 **50 条 Issue 更新**（45 新开/活跃，5 关闭）与 **50 条 PR 更新**（47 待合并，3 合并/关闭），日均变更量处于项目历史高位，显示核心团队与社区贡献者并行推进多条主线任务。
- **安全加固成主旋律**：Gemini API Key 泄露（#9386）已修复关闭；`forbidden_paths` 绕过（#9815）、Shell 子进程逃逸（#9827）、Symlink 逃逸（#9384）、本地 Whisper 认证硬编码（#9836）等 5 个安全相关 PR 同步推进，体现“零信任”策略落地。
- **SOP/无头运行时攻坚**：`#9494`（驱动 Cron 触发的无头运行）与 `#9841`（修复其 5 个缺陷）双 PR 推进，配合 `#9805`（auto-mode 永久 running）、`#9783`（失败原因丢失）、`#9784`（中途标记 failed 无审计）三个新报告，标志着 SOP 引擎在“无人值守”场景下的工程化补齐进入收尾期。
- **Provider 架构重构持续**：`#5937`（统一 Provider 与 reqwest）已接受 4 个月仍未合并；`#9775`（OpenRouter 丢 `provider_extra`）、`#9757`（Anthropic 图片块缺失）、`#9816`（Anthropic 成本上报 $0）暴露出多 Provider 适配层的技术债。
- **无新版本发布**：主分支处于“大量侵入性 PR 并行审查”状态，预计短期内不会切 `0.9.0`，需等待 `#9494`/`#9841`/`#8965` 等大型 PR 落地后再统一发布。

---

## 2. 版本发布

> 过去 24 小时 **无新版本发布**。

---

## 3. 项目进展（已合并/关闭的重要 PR 与 Issue）

| 编号 | 标题 | 状态 | 影响面 | 关键进展 |
|------|------|------|--------|----------|
| [#9836](https://github.com/zeroclaw-labs/zeroclaw/pull/9836) | fix(transcription): make local_whisper bearer_token optional | **CLOSED** | 语音转写、本地部署 | 移除 `local_whisper` 对 `bearer_token` 的强制要求，解决 whisper.cpp 本地无认证部署场景的启动阻塞。 |
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | [Bug]: Gemini API key in request URL survives sanitize_api_error | **CLOSED** | 安全、Provider | **P1 安全漏洞已修复**：Gemini `?key=` 查询参数在传输层错误时泄露至用户聊天，现已在 `sanitize_api_error` 中补全清洗。 |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC: Add cross-turn conversation correlation to OTel export | **CLOSED (accepted)** | 可观测性、OTel | 跨轮次会话 ID 纳入 OTel `gen_ai.conversation.id` 语义约定，RFC 已通过接受投票，实现工作可跟踪至后续 PR。 |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC: Preserve Todo tracker configuration during ZeroCode ownership migration | **CLOSED (accepted)** | ZeroCode、配置迁移 | 所有权迁移时保留 Todo tracker 配置，RFC 接受，后续由 `#9013` 作者推进实现。 |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | RFC: Structured Observability Enhancement | **CLOSED (accepted)** | 可观测性、架构 | 结构化事件、OTel Trace 关联、Bridge 重构三大子项拆分落地，主 RFC 归档。 |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Slack: hydrate thread context from conversations.replies | **CLOSED** | Channel、Slack | 首次 @mention 时回填线程历史，解决 `strict_mention_in_thread` 下必须重复 @ 的体验问题。 |

> **合并/关闭 PR 统计**：仅 3 条 PR 在 24h 内合并/关闭（含 `#9836`），其余 47 条均为待审或草稿态，**审吞吐率偏低**，建议维护者设立“每日必审名单”加速大型 PR 落地。

---

## 4. 社区热点（评论/反应最多的 Issue 与 PR）

### Issue 热点 Top 5
| 编号 | 标题 | 评论 | 核心诉求 |
|------|------|------|----------|
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC: Cross-turn conversation correlation to OTel | 13 | **可观测性标准化**：需在分布式追踪中关联多轮对话，符合 OTel GenAI 语义约定 v1.41。 |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC: Preserve Todo tracker config during ZeroCode migration | 12 | **配置迁移连续性**：ZeroCode 所有权变更时不丢失用户自定义 Todo 追踪规则。 |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | Refactor: Unify providers architecture & reqwest client | 12 | **Provider 技术债清理**：统一 `reqwest` 构建、消除重复代码、规范模型参数传递。 |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC: Workspace-relative forbidden paths & .zeroclawignore | 10 | **工作区内敏感文件保护**：现有 `forbidden_paths` 仅拦截工作区外路径，需支持 `.env`、`.cargo/config.toml` 等内部文件。 |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | RFC: Retire standalone aardvark-sys crate | 9 | **硬件抽象层收敛**：将 `aardvark-sys` 折叠进 `zeroclaw-hardware`，减少 crate 数与 unsafe 面。 |

### PR 热点（规模/关注度）
| 编号 | 标题 | 规模 | 状态 | 关键点 |
|------|------|------|------|--------|
| [#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) | fix(sop): drive cron-started headless runs | XL | OPEN | **核心阻塞修复**：Cron 触发的 SOP 真正跑通无头执行循环，关联 `#98

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*