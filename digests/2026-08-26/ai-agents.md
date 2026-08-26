# OpenClaw 生态日报 2026-08-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-26 00:55 UTC

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

# OpenClaw 项目日报 | 2026-08-26

---

## 1. 今日速览

OpenClaw 今日呈现**高强度维护与修复并行**的态势：过去 24 小时内 Issues 与 PRs 各更新 500 条，其中 **437 个活跃 Issue**、**258 个待合并 PR**，显示社区与核心团队正集中攻坚 2026.8.1 Beta 阶段暴露的稳定性问题。核心矛盾聚焦于 **SQLite 持久化层可靠性（P0 级损坏复现）**、**会话/消息交付丢失**、**子进程泄漏导致的运行时退化**，以及 **多模型/多渠道适配的兼容性暗坑**。无新版本发布，但多个关键 Fix PR 已进入“Ready for maintainer look”状态，预示下一 Beta 或 Patch 版本将以稳定性修复为主。项目健康度：**高活跃、高风险、高修复吞吐**，需警惕 P0 级数据损坏问题是否已根因定位。

---

## 2. 版本发布

> 今日无新版本发布。当前最新 Beta 为 `v2026.8.1-beta.3`（Issue #125626 跟踪反馈），正式版发布节奏取决于 P0/P1 级阻断问题的闭环进度。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 标题 | 类型 | 影响面 | 状态 | 说明 |
|----|------|------|--------|------|------|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings | **P1、安全边界、消息投递** | 网关核心、多 Agent 隔离 | **CLOSED / Merged** | 修复多 Agent 场景下对话工具跨越绑定投递的越权风险，属于安全边界修复，已合并入主干。 |
| [#127298](https://github.com/openclaw/openclaw/pull/127298) | fix(qa): pin Slack draft progress transport | **P3、QA 基建** | QA Lab、Slack 集成 | **CLOSED / Merged** | 修正 QA 场景传输层抖动，提升自动化测试稳定性。 |
| [#120456](https://github.com/openclaw/openclaw/pull/120456) | refactor(android): reuse node JSON param parser | **P3、代码复用** | Android 客户端 | **CLOSED / Merged** | 消除重复解析器，降低维护负担。 |
| [#119975](https://github.com/openclaw/openclaw/pull/119975) | fix(gateway): report active unmanaged restart startup accurately | **P1、可用性** | 网关重启上报 | **OPEN (Waiting on author)** | 修正非托管重启路径的健康检查误报，虽未合并但已自动生成并通过 CI。 |
| [#129695](https://github.com/openclaw/openclaw/pull/129695) | fix(sqlite): cover the exact stable database upgrade path | **P2、SQLite 迁移** | 数据层升级路径 | **OPEN (Ready for maintainer look)** | 补全稳定版 SQLite 迁移测试覆盖，针对 #126821 损坏复现的后续加固。 |

> **整体推进评估**：核心合并集中在**安全边界修复（#126424）**与**基建清理**，功能性新特性合并较少。242 个已合并/关闭 PR 中多数为小规模修复、文档更新或自动化生成（clawsweeper[bot]），大型特性 PR（如 #129092 审计记录、#127823 Control UI 队列重构）仍处“Waiting on author/Review”状态，说明**主干推进以“止血修复”为主，特性开发处于评审瓶颈**。

---

## 4. 社区热点（高讨论度 Issues/PRs 深度分析）

| 排名 | Issue/PR | 评论/👍 | 核心诉求 | 代表性信号 |
|------|----------|---------|----------|------------|
| 1 | [#125626](https://github.com/openclaw/openclaw/issues/125626) **2026.8.1 Beta 反馈汇总** | 19 评论 | Beta 实测反馈集中地，覆盖会话丢失、工具调用异常、UI 卡顿等 | **官方验证通道**，维护团队需每日跟进分型 |
| 2 | [#80319](https://github.com/openclaw/openclaw/issues/80319) **QA 工具默认套件混淆 Codex 原生工具与动态工具平价** | 17 评论、1 👍 | 测试基建层面的架构澄清，避免误判运行时 Bug | 暴露**测试与运行时边界不清**的系统性风险 |
| 3 | [#67777](https://github.com/openclaw/openclaw/issues/67777) **Subagent 完成交付在直宣布/超时/排水/孤儿修剪时丢失** | 14 评论 | **P1 会话状态/消息丢失**，子 Agent 生命周期边缘条件 | 核心运行时可靠性痛点，关联 #127710、#128067 |
| 4 | [#79902](https://github.com/openclaw/openclaw/issues/79902) **伴侣友好型 SQLite 会话/转录接缝** | 14 评论、2 👍 | 高级消费者需在数据库优先运行时之上构建标准接口 | **生态扩展需求**，倒逼内部状态对外开放 |
| 5 | [#97616](https://github.com/openclaw/openclaw/issues/97616) **Hook/Tool 子进程泄漏导致僵尸累积** | 9 评论、1 👍 | **P1 崩溃循环/退化**，运行时资源管理缺陷 | 长期运行必现，运维痛点 |
| 6 | [#126821](https://github.com/openclaw/openclaw/issues/126821) **SQLite 损坏在全新重建 DB 上 15–24h 复现（WSL2）** | 8 评论 | **P0 级数据损坏、Beta 阻断候选**，含“瘫痪网关”模式 | **当前最高优先级**，5 天 5 次复现，需根因分析 |
| 7 | [#128067](https://github.com/openclaw/openclaw/issues/128067) **Beta.7 现场报告：6 类可靠性缺陷 + 3 个次要** | 5 评论 | 生产级部署 3 周证据汇总：持久化、投递、重启恢复 | **实战压测镜像**，应纳入回归基线 |
| 8 | [#129314](https://github.com/openclaw/openclaw/issues/129314) **隐藏“下一轮运行时上下文”偶尔作为独立可见轮次投递** | 5 评论 | UX 摩擦：内部脚手架泄露给用户 | 新增回归，影响用户信任度 |
| 9 | [#127948](https://github.com/openclaw/openclaw/issues/127948) **WhatsApp 群组回复在引用缓存过期时渲染为空气泡** | 5 评论 | **P1 消息丢失**，引用缓存 TTL 与投递解耦失败 | 多渠道适配的典型边缘 Bug |
| 10 | [#129092](https://github.com/openclaw/openclaw/pull/129092) **feat(audit): record admitted model routing decisions** | PR、安全边界 | 审计缺失重启稳定的模型路由决策记录 | **合规/可观测性需求**，XL 体量待评审 |

> **热点聚类分析**：  
> - **数据层可靠性**（SQLite 损坏、无界增长、Compaction 死循环）占据 Top 10 的 3 席，且均为 **P0/P1**，说明持久化层是当前最大技术债。  
> - **消息交付链路**（Subagent、Telegram、WhatsApp、Prepared-model-runtime）出现 4 个高热 Issue，暴露“至少一次”语义在重启/超时/缓存失效下的系统性失效。  
> - **Beta 验证反馈循环**（#125626、#128067）已形成常态化机制，但修复吞吐跟不上暴露速度。

---

## 5. Bug 与稳定性（按严重程度分级）

| 严重度 | Issue | 标题 | 关键症状 | 是否有 Fix PR | 备注 |
|--------|-------|------|----------|---------------|------|
| **P0 (数据损坏/服务拒绝)** | [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 损坏在全新重建 DB 上 15–24h 复现 (WSL2) | Freelist miscount → 崩溃或“瘫痪网关”拒绝服务不退出 | ❌ 无直接 PR，但 [#129695](https://github.com/openclaw/openclaw/pull/129695) 补全迁移测试路径 | **最高优先级**，需根因：WAL 模式、VACUUM INTO、并发写入、WSL2 文件系统交互 |
| **P1 (消息丢失/会话状态破坏)** | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent 完成交付丢失 (直宣布/超时/排水/孤儿修剪) | 完成信号在多种边缘条件下静默丢弃 | ❌ 无 | 核心运行时缺陷，关联 #127710 |
| | [#127710](https://github.com/openclaw/openclaw/issues/127710) | prepared-model-runtime 因指纹漂移永久楔死网关；owner-commit 竞态静默丢消息 | 两种消息丢失模式，生产多 Agent 网关复现 | ❌ 无 | 架构级 fail-closed 设计缺陷 |
| | [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 耐久出站投递卡在 `send_attempt_started`，重启后丢失 | 状态机未持久化/恢复出站尝试 | ❌ 无 | 需引入出站幂等键与持久化队列 |
| | [#127948](https://github.com/openclaw/openclaw/issues/127948) | WhatsApp 群组回复引用缓存过期渲染空气泡 | 引用键有效但 body 为空，WhatsApp 显示空白 | ❌ 无 | 渠道适配层缺乏降级渲染 |
| | [#97616](https://github.com/openclaw/open

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-08-26

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**“头部项目高强度攻坚、腰部项目差异化深耕、尾部项目处于孵化或维护期”**的分层态势。核心矛盾已从“功能竞赛”转向**“生产级稳定性交付”**——OpenClaw、ZeroClaw、IronClaw、NanoClaw 等头部项目同步集中资源解决 P0 级数据损坏、消息丢失、安全沙箱逃逸、跨平台权限持久化等架构级缺陷。同时，**边缘计算/家庭算力网格**（OpenClaw #3345、NullClaw #994、ZeroClaw #10360）、**多模态渠道原生适配**（NanoBot Telegram/Slack、Hermes xAI、Moltis WhatsApp）、**可编程安装与运维接口**（NanoClaw Driver Protocol、IronClaw nextest CI）成为多项目共识的下一阶段技术高地。生态整体处于 **v0.x → v1.0 规范化过渡期**，技术债偿还速度成为衡量项目成熟度的核心指标。

---

## 2. 各项目活跃度对比

| 项目 | 核心指标 (24h) | Issues 状态 | PRs 状态 | Release | 健康度评估 | 阶段标签 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~1000 更新量 | 437 活跃 / 500 更新 | 258 待合并 / 242 合并关闭 | 无 (Beta v2026.8.1) | ⚠️ **高活跃、高风险、高吞吐** | **质量巩固期 (P0 攻坚)** |
| **ZeroClaw** | 100 更新量 | 38 新开/活跃 / 8 关闭 | 49 待合并 / 8 合并关闭 | 无 (v0.8.4) | 🔥 **极高活跃、架构治理中** | **架构收敛期 (v0.9.0 预备)** |
| **IronClaw** | 60 更新量 | 37 更新 / 多高互动 | 23 更新 / 10 大型合并 | 无 | 🔥 **高强度工程推进** | **基建现代化冲刺期** |
| **NanoClaw** | 50 更新量 | 5 新开/活跃 | 34 待合并 / 16 合并关闭 | 无 | 🔥 **高活跃、栈式并行开发** | **核心基建重构期** |
| **CoPaw (QwenPaw)** | 84 更新量 | 34 更新 (+20/-14) | 50 更新 (+21/-29) | **v2.1.1-beta.3** | 🟢 **高活跃、Beta 稳定化** | **Beta 收口 / RC 预备** |
| **NanoBot** | 19 更新量 | 5 新开/活跃 | 14 合并关闭 | 无 | 🟢 **高活跃、多维并进** | **快速迭代期** |
| **Hermes Agent** | 100 更新量 | 41 新开/活跃 / 9 关闭 | 39 待合并 / 11 合并关闭 | 无 (v0.20.5) | 🟢 **高活跃、维护冲刺** | **回归修复与国际化期** |
| **Moltis** | ~5 更新量 | 低 (旧 Issue 持续) | 4 待合并 / 1 合并 | 无 | 🟡 **中等偏高、核心修复中** | **稳定性打磨与沙箱扩展期** |
| **LobsterAI** | 9 PR 合并 | 1 新开 (社群运营) | 9 合并关闭 | **2 个 (8.21, 8.25)** | ⭐⭐⭐⭐☆ **小步快跑、发布频繁** | **商业化功能闭环期** |
| **PicoClaw** | 低 | 4 活跃 (含长期积压) | 1 搁置 PR | 无 (v0.3.1) | 🟡 **维护期、关键 Bug 停滞** | **技术债偿还滞后** |
| **NullClaw** | 极低 | 1 新开 (架构愿景) | 0 | 无 | ⚪ **静默/酝酿期** | **架构愿景探索期** |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ **无活动** | **休眠/归档疑似** |

> **注**：活跃度按“核心代码变更吞吐量 × 问题闭环速度 × 版本交付节奏”综合判断。

---

## 3. OpenClaw 在生态中的定位

### 核心优势
*   **社区规模与吞吐量第一**：单日 Issue/PR 更新量 (~1000) 远超其他项目 (ZeroClaw 100, IronClaw 60)，拥有最庞大的贡献者基数与 `clawsweeper[bot]` 等成熟自动化治理工具链。
*   **企业级生产压测反馈循环最完善**：#125626 (Beta 反馈汇总)、#128067 (生产级 3 周证据) 形成“实战暴露 → 分型 → 修复 → 回归”闭环，Issue 质量极高，含完整复现步骤、日志、环境指纹。
*   **多渠道/多模型适配最全面**：原生覆盖 Slack、Telegram、WhatsApp、Discord、Matrix 等主流 IM 与 WebUI，适配层架构相对成熟（虽暴露兼容性暗坑，但覆盖面最大）。

### 技术路线差异
| 维度 | OpenClaw | ZeroClaw | IronClaw | NanoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **核心语言** | Go (Gateway) + TS/React (WebUI) | **Rust 全栈** (安全/性能优先) | Rust (Core) + TS/React (WebUI) | Go/TS 混合 |
| **持久化策略** | **SQLite + WAL + 自定义迁移** (当前 P0 风险源) | **权威存储 + 可选增强连接器** (RFC #9103 分离中) | PostgreSQL/SQLite 双模 + 结构化迁移 | 文件系统 + 嵌入式 DB |
| **安全边界** | 运行时绑定校验 (PR #126424) | **编译时约束系统 + 网关下发实时配置** (PR #10075) | 沙箱 + 能力投影 + 审计层 | 容器级隔离 + Workspace 隔离 |
| **扩展模型** | Tool/Channel/Provider 三层插件 | **Protocol-first Provider + Constraint 系统** | Extension + MCP + 统一工具契约 | Skill + Channel Adapter + Driver Protocol |

### 社区规模对比
*   **OpenClaw** 处于**“大教堂式”核心团队主导 + “集市式”外部贡献并行**模式，核心维护者响应速度快 (P0 Issue 当日跟进)，但外部大型特性 PR (如 #129092 审计记录) 评审瓶颈明显。
*   **ZeroClaw/IronClaw** 更偏向**核心团队主导的 RFC 驱动开发**，决策链路短，架构变更激进 (如 ZeroClaw 引入 Constraint 系统、IronClaw 重写 CI/通知系统)。
*   **NanoClaw/CoPaw** 体现**企业主导型开源**，路线图明确服务于商业化落地 (NanoClaw 企业分发、CoPaw Agent IDE 化)。

---

## 4. 共同关注的技术方向 (跨项目共识)

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **1. 持久化层可靠性与数据完整性** | **OpenClaw** (P0 SQLite 损坏 #126821)、**ZeroClaw** (S0 Cron workspace_dir 解析为根目录 #9206)、**NanoBot** (autocompact 崩溃 #5532)、**Moltis** (Cron 上下文保留 #1243) | 核心痛点：**SQLite WAL 模式并发损坏、迁移路径覆盖不全、定时任务状态机持久化缺失**。OpenClaw/ZeroClaw 正投入核心资源根因分析。 |
| **2. 消息交付链路“至少一次”语义兜底** | **OpenClaw** (Subagent/Telegram/WhatsApp 丢失 #67777/#126246/#127948)、**ZeroClaw** (工具错误体丢失 #10357)、**Moltis** (定时任务上下文丢失 #1243)、**Hermes** (WS 重连丢消息 #90428) | 共识需引入：**出站幂等键、持久化发件箱、重启恢复重放机制**。NanoBot 已合并 MCP 就绪重试 (#5535)。 |
| **3. 沙箱与执行环境安全加固** | **NanoBot** (ExecTool fail-closed #5536 修复 symlink 逃逸)、**ZeroClaw** (SSRF 加固链 #10075、ZeroRelay mTLS #10142)、**Moltis** (K8s 原生沙箱 RFC #1118、Coder 远程沙箱 #1199)、**IronClaw** (持久化用户级沙箱 Epic #7732) | 趋势：**从“进程隔离”向“硬件级/虚拟化级隔离 (Kata/gVisor/K8s runtimeClass)”演进**，并强调供应链安全 (SBOM、签名收据)。 |
| **4. 边缘计算/家庭算力网格化** | **OpenClaw** (#3345 轻量 Worker 模式)、**NullClaw** (#994 家庭边缘网格)、**ZeroClaw** (#10360 RFC 家庭边缘网格)、**PicoClaw** (定位边缘部署) | 共同愿景：**异构设备 (PC/手机/NAS/SBC) 纳入统一调度面**，核心技术点：P2P 穿透、签名收据信任链、资源抽象统一接口。 |
| **5. 可编程安装、配置即代码、可观测性基建** | **NanoClaw** (Driver Protocol #3485、Health API #3482)、**IronClaw** (nextest CI #7817、Preflight 规范化 #7809)、**ZeroClaw** (有界遥测 #10340)、**CoPaw** (CI 分片 #7293、覆盖率 +5pp) | 目标：**消除“屏幕刷屏抓文本”式运维**，实现无人值守部署、结构化健康检查、CI/CD 确定性门禁。 |
| **6. 多模态渠道原生体验对齐** | **NanoBot** (Telegram 流式富文本 #5516/#5531)、**Hermes** (xAI tool_search 冲突 #95003、Slack 并发流 #93617)、**Moltis** (WhatsApp/Brave Search 参数校验 #1245) | 核心诉求：**流式与富文本并存、Provider 原生工具命名冲突适配、跨渠道引用/回复渲染一致性**。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户/场景 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型网关/协调

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-08-26

> 数据统计窗口：2026-08-24 至 2026-08-25 (UTC)  
> 数据来源：GitHub HKUDS/nanobot 仓库 Issues/PRs/Releases

---

## 1. 今日速览

- **活跃度评级：高** —— 过去 24 小时内合并/关闭 **14 个 PR**，新开/活跃 **5 个 Issue**，代码库呈现高频迭代态势。
- **核心交付聚焦**：Telegram 渠道富文本流式渲染修复、WebUI 统一会话标题同步、ExecTool 沙箱安全加固、TUI 技能自动补全、MCP 就绪重试机制、文件检索性能优化等 **6 项关键修复/增强已落地主干**。
- **社区外部贡献**：AnySearch 团队主动提交 Issue #5505 请求接入 `web_search` 工具，显示生态扩展意愿增强。
- **技术债偿还**：Loguru 日志占位符统一 (#5539)、TUI 交互文案精简 (#5538)、子代理完成态标记 (#5152) 等长期遗留问题集中清理。
- **零新版本发布**：当前处于主干快速迭代期，积累变更较多，预计近期将切 vNext 预发布。

---

## 2. 版本发布

> 过去 24 小时 **无新版本发布**。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 链接 |
|----|------|----------|--------|------|
| **#5541** | Bug Fix (Telegram) | 群组消息自动附加发送者显示名（first_name → username → user_id 回退），私聊不变；新增回归测试 | 修复 #1091 长期痛点，提升多用户群聊可读性 | [#5541](https://github.com/HKUDS/nanobot/pull/5541) |
| **#5540** | Bug Fix (Provider) | Codex prompt_cache_key 仅基于稳定 session identity 生成，移除 message 哈希回退，修复缓存命中率抖动 | 降低 Codex 成本、提升响应稳定性 | [#5540](https://github.com/HKUDS/nanobot/pull/5540) |
| **#5538** | Refactor (TUI) | 澄清 Composer 双动作提示：`Enter send now · Tab send next`，缩短占位符文案 | TUI 交互一致性、降低学习成本 | [#5538](https://github.com/HKUDS/nanobot/pull/5538) |
| **#5534** | Feature (TUI) | 技能引用 `$skill-name` 自动补全：支持筛选、方向键、Enter/Tab 插入、Esc 取消、光标感知 | 技能发现效率大幅提升 | [#5534](https://github.com/HKUDS/nanobot/pull/5534) |
| **#5533** | Perf (Tools) | `find_files` 全量扫描迁移至 worker 线程，改用 `os.scandir` + 分页 lookahead + 取消传播 | 大型工作区文件检索延迟从秒级降至亚秒级 | [#5533](https://github.com/HKUDS/nanobot/pull/5533) |
| **#5536** | Security (Exec) | **Fail-closed**：受限 Shell 缺沙箱时直接拒绝执行，修复 #4072 符号链接/命令替换绕过风险 | **P1 安全修复**，强制要求沙箱兜底 | [#5536](https://github.com/HKUDS/nanobot/pull/5536) |
| **#5535** | Bug Fix (Gateway) | Agent 每轮前自动重试 `MCPProvider.connect()`，确保工具快照包含恢复后的 MCP 工具 | 解决 MCP 掉线后工具缺失的竞态 | [#5535](https://github.com/HKUDS/nanobot/pull/5535) |
| **#5529** | Bug Fix (Agent) | 仅在 turn 退出时等待后台子代理，普通工具执行后立即继续，共享 300s 截止期 | 降低主循环阻塞、提升并发吞吐 | [#5529](https://github.com/HKUDS/nanobot/pull/5529) |
| **#5525** | Feature (Tools) | `grep` 转为按需检索：返回带 5 行上下文的匹配片段，增量解析 PDF/DOCX/XLSX/PPTX，突破 200K 预览上限 | 大文档检索能力质变 | [#5525](https://github.com/HKUDS/nanobot/pull/5525) |
| **#5526** | Perf (Agent/WebUI) | `exec_session` 新增 `until_exit` + `timeout_ms`，消除轮询等待；兼容迁移旧 `write_stdin` | 长耗时 Shell 任务 WebUI 无卡顿 | [#5526](https://github.com/HKUDS/nanobot/pull/5526) |
| **#5530** | UX (TUI) | 短会话顶部对齐，Transcript 粘性滚动，垂直缩放回归测试 | 终端高度利用率优化 | [#5530](https://github.com/HKUDS/nanobot/pull/5530) |

**整体推进度**：核心渠道、工具链、安全、性能、UX 五大维度同步推进，**主分支可用性显著增强**。

---

## 4. 社区热点（讨论最活跃 / 关注度最高）

| Item | 类型 | 评论/👍 | 核心诉求 | 分析 |
|------|------|---------|----------|------|
| **#5505** | Enhancement (Issue) | 3 💬 / 0 👍 | AnySearch 团队主动请求作为 `web_search` 新 Provider 接入，强调无 Key 匿名额度、API/MCP/Skill 三模式 | **外部厂商主动适配**，若评审通过将丰富搜索生态，降低用户配置门槛 |
| **#5516** | Bug (Issue) | 1 💬 / 0 👍 | Telegram `rich_messages: true` 与 `streaming: true` 互斥，期望利用 Bot API 10.1-10.3 草案实现流式富文本就地升级 | **已有对应修复 PR #5531 开启**，社区高度关注渠道体验一致性 |
| **#5527** | Bug (Issue) | 0 💬 / 0 👍 | `unifiedSession: true` 下 WebUI 侧边栏标题永远 "Untitled" | **PR #5528 已关联修复**，标题投影至 per-chat session，验证中 |
| **#5532** | Bug (Issue) | 1 💬 / 0 👍 | `autocompact.py` 缺少 `mask_session_key` 导入，触发运行时崩溃 | 典型回归，修复成本极低，待 PR |
| **#5524** | Feature (Issue) | 0 💬 / 0 👍 | WebUI 增加 Agent turn 结束通知铃声，默认关闭，Settings 可开启 | 长任务等待场景刚需，实现简单，易成低风险增强 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 已有 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P1 (Security)** | #4072 (ref by #5536) | 受限 Shell 通过 symlink/命令替换逃逸工作区 | **#5536 (Open)** | 待审核合并 |
| **P1 (Crash)** | #5532 | `autocompact.py` 缺失导入导致循环崩溃 | 无 | 需紧急修复 |
| **P2 (Functional)** | #5516 | Telegram 流式模式下富文本永不渲染 | **#5531 (Open)** | 待合并 |
| **P2 (Functional)** | #5527 | 统一会话模式下 WebUI 标题不同步 | **#5528 (Open)** | 待合并 |
| **P2 (Performance)** | — | `find_files` 大目录扫描阻塞事件循环 | **#5533 (Merged)** | ✅ 已修复 |
| **P2 (Reliability)** | — | MCP 掉线后工具未自动恢复 | **#5535 (Open)** | 待合并 |
| **P2 (Regression)** | #5152 (ref) | 子代理部分完成结果未标记，模型误判 | **#5152 (Open, conflict)** | 需解决冲突后合并 |

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 关联 PR / 可能性 | 备注 |
|------|------|------------------|------|
| **#5505 (External)** | 接入 AnySearch 作为 Web Search Provider | 无 PR，但官方团队主动推动，**可能性高** | 符合多 Provider 战略，需评估匿名额度稳定性 |
| **#5234 (PR, 2026-08-03)** | 集成 `mst-python` (Meta-Search Tool) 作为元搜索 Provider | **#5234 (Open, conflict)** | 冲突需解决，RRF 聚合多引擎，差异化强 |
| **#5524 (Issue)** | WebUI 任务完成通知铃声 | 无 PR，实现简单，**下版本极大概率纳入** | 仅需音频资源 + Settings 开关 |
| **#5537 (PR)** | `my` 工具持久化 `focus` 跨轮次/重启 | **#5537 (Open)** | 解决 #3292，Agent 连续性增强，优先级 P2 |
| **#5389 (PR, 2026-08-14)** | WebUI 侧边栏拖拽分组/排序 | **#5389 (Open, conflict)** | 复杂 UI 交互，冲突解决后将显著提升多会话管理 |

**路线图信号**：**多搜索 Provider 生态化**、**WebUI 交互专业化 (拖拽/通知/标题同步)**、**Agent 状态持久化连续性** 为近期三大演进方向。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点 / 场景 | 代表声音 | 情感倾向 |
|-------------|----------|----------|
| **Telegram 群聊无法识别发言人** | "群里完全不知道谁说的，私聊倒是正常" (#1091, 已由 #5541 修复) | 😡 → 😊 |
| **流式输出时富文本丢失，Markdown 渲染断裂** | "开 streaming 就没 rich message 了，关掉又慢" (#5516) | 😟 |
| **统一会话模式下侧边栏全是 Untitled，找不到历史** | "每次都要点进去看内容才知道是哪个任务" (#5527) | 😟 |
| **长任务跑完没提示，必须盯着屏幕或刷新** | "跑个 10 分钟脚本回来发现早结束了" (#5524) | 😟 |
| **大目录 `find_files` 卡死终端** | "扫 node_modules 直接把 TUI freeze 住了" (隐性反馈，#5533 已修复) | 😡 → 😊 |
| **技能引用靠记忆，输错名字报错** | "技能多了根本记不住全称" (隐性反馈，#5534 已修复) | 😟 → 😊 |

**整体满意度趋势**：核心痛点（身份标识、流式富文本、标题同步、长任务感知、大目录性能）均有 **明确修复在途或已合并**，用户体验修补周期极短。

---

## 8. 待处理积压（长期未响应 / 高价值阻塞）

| Item | 类型 | 停滞时长 | 关键阻碍 | 建议行动 |
|------|------|----------|----------|----------|
| **#5234** | PR (Feature) | 23 天 | 合并冲突 + 测试补全 | 指定 Reviewer 协助解冲突，纳入下版本 |
| **#5152** | PR (Bug Fix) | 29 天 | 合并冲突 | 同上，子代理完成态关键修复 |
| **#5389** | PR (Feature) | 12 天 | 合并冲突 | WebUI 交互大项，优先解冲突 |
| **#5532** | Issue (Crash) | 新 | 无人认领 | **建议立即指派/自行提 PR**，单行导入修复 |
| **#5536** | PR (Security) | 新 | 安全审计 | **优先合并**，涉及沙箱逃逸风险 |

---

## 📌 维护者行动建议 (TL;DR)

1. **即时合并**：`#5536` (Security)、`#5532` 对应修复、`#5533`/`#5534`/`#5538`/`#5530`/`#5529`/`#5526`/`#5525`/`#5540`/`#5541` 已就绪 → **批量合并推进主干**。
2. **解冲突推进**：`#5234`、`#5152`、`#5389` 三大长期 PR 安排专人解冲突，解锁搜索生态、子代理稳定性、WebUI 交互三大里程碑。
3. **评审入队**：`#5531` (Telegram Rich Streaming)、`#5528` (Unified Session Title)、`#5535` (MCP Readiness)、`#5537`

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-26

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时内共有 **50 条 Issue 更新**（41 新开/活跃，9 关闭）与 **50 条 PR 更新**（39 待合并，11 已合并/关闭），零新版本发布，呈现典型的“维护冲刺期”特征。  
- **核心痛点聚焦**：macOS 权限每次更新重置（#52010、#91115）、Windows 更新挂起（#87703）、技能索引过期（#66616）、xAI 原生工具命名冲突（#95003）、会话/流式传输稳定性（#87697、#90428、#93617）等平台兼容与会话状态问题占据讨论热度前列。  
- **架构重构信号明确**：#95028 提出的“Authority Execution Layer”已落地首批 PR（#95101），标志着权限/准入模型从分散修补转向统一编译时强制。  
- **国际化交付推进**：葡萄牙语（pt-BR）完整本地化 PR（#92590）已就绪，配套 Issue（#40239、#92643）显示社区贡献度高，极大概率纳入下一版本。  
- **整体健康度**：关闭率 18%（Issue）与 22%（PR）处于健康区间，但长期高评 Issue（#66616 29 小时未愈、#52010 两月未决）提示自动化巡检与跨平台签名流水线仍有技术债。

---

## 2. 版本发布

**今日无新版本发布**。最近一次发布为 v0.20.5（2026-08-19），当前主分支累计修复与功能 PR 已达 39 条，预计近期将切 v0.20.6 或 v0.21.0-rc。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#66148](https://github.com/NousResearch/hermes-agent/pull/66148) | **Bug Fix** | `/v1/responses` 历史图片剪枝 + 停止压缩后重复写入 | 会话存储体积、推理成本、长会话稳定性 |
| [#42814](https://github.com/NousResearch/hermes-agent/pull/42814) | **Feature** | 新增 `POST /api/sessions/{id}/compress` 显式压缩端点 | API 集成方可按需压缩，减轻客户端实现负担 |
| [#87703](https://github.com/NousResearch/hermes-agent/pull/87703) | **Bug Fix** | Windows `hermes update` 不再在隐藏 PowerShell 中调用交互式 `install.ps1` | 消除 ~11 分钟挂起，修复 cua-driver 更新阻塞 |
| [#94516](https://github.com/NousResearch/hermes-agent/pull/94516) | **Bug Fix** | Bot 模式下 Cronjobs 面板“roster 未就绪”误判修复 | 恢复桌面端定时任务创建入口 |
| [#94471](https://github.com/NousResearch/hermes-agent/pull/94471) | **Bug Fix** | Routines 面板渲染崩溃 `(e.name || "").trim is not a function` | 消除 Bot 标签页白屏 |
| [#93617](https://github.com/NousResearch/hermes-agent/pull/93617) | **Bug Fix** | Slack 适配器 `_active_streams` 按 `chat_id+turn` 隔离 | 修复并发会话导致的重复消息/流丢失 |
| [#94483](https://github.com/NousResearch/hermes-agent/pull/94483) | **Bug Fix** | CRONJOBS 面板在非 Bot 会话中不再 fail-closed | 提升桌面端易用性 |

> **进展小结**：7 个关闭 PR 全为 **P2/P3 回归修复**，覆盖会话存储、跨平台更新、桌面 UI、Slack 适配器、Bot 定时任务——表明团队正在集中清理 v0.20.5 引入的回归。

---

## 4. 社区热点（高互动 Issue/PR 深度解析）

| 排名 | Issue/PR | 评论/👍 | 核心诉求 | 阻塞点/进展 |
|------|----------|---------|----------|-------------|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills 索引降级 | 97 💬 | 自动化探针检测到索引 29.8 h 过期（阈值 26 h），文档站技能搜索失效 | Cron 与部署工作流均未触发重建，**需人工触发或修复调度** |
| 2 | [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) macOS FDA 权限每次更新丢失 | 21 💬 | 代码签名 cdhash 变更导致 `Files & Folders` 权限重置，用户需手动重授 | #95131 已提供 `hermes doctor --fix` 固定解释器路径方案，**待合并验证** |
| 3 | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) xAI 拒绝 `tool_search` 函数名 | 9 💬 / 7 👍 | xAI 原生保留 `tool_search`，导致 Hermes 同名工具全线不可用 | **需重命名内部工具或增加提供商适配层**，暂无 PR |
| 4 | [#95028](https://github.com/NousResearch/hermes-agent/issues/95028) Authority Execution Layer 架构提案 | 9 💬 | 将 12 个分散缺陷归因于“边界缺乏权威上下文”，提出统一清单+编译器 | **#95101 已落地 Phase 0.1-0.3**，后续需补全运行时强制与审计 |
| 5 | [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) Ollama 流式 1.5 s 被取消触发 `<unused49>` 循环 | 11 💬 | 客户端超时策略与本地模型推理预填阶段冲突 | 需调整 `stream_timeout` 或在预填阶段发送心跳，**无 PR** |
| 6 | [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) macOS Keychain 每次更新弹窗 | 9 💬 | 同 #52010 根因，但针对 `safeStorage` 加密存储 | 依赖 Electron 重签名流水线固化，**无快速修复** |
| 7 | [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) / [#92590](https://github.com/NousResearch/hermes-agent/pull/92590) pt-BR 本地化 | 11 💬 / 3 👍 | 3400+ 行完整翻译已就绪，**社区高质量贡献** | PR 已开，**极大概率下版本合入** |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P1-生产阻断** | [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) Windows stdio MCP 子进程即时退出 | 🟢 Open | 无 | 原生 MCP 不可用，阻断 Windows 工具链 |
| **P1-生产阻断** | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) xAI `tool_search` 命名冲突 | 🟢 Open | 无 | 所有 Grok 模型不可用 |
| **P2-核心回归** | [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) Ollama 流式提前取消 | 🟢 Open | 无 | 影响本地模型首选用户群 |
| **P2-核心回归** | [#90428](https://github.com/NousResearch/hermes-agent/issues/90428) WS 重连后消息静默丢弃 | 🔴 Closed | 无（需复现） | 会话可靠性缺口，用户感知极差 |
| **P2-平台兼容** | [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) / [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) macOS 权限/Keychain 重置 | 🟢 Open | [#95131](https://github.com/NousResearch/hermes-agent/pull/95131) (部分) | 长期顽疾，需签名流水线重构 |
| **P2-平台兼容** | [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) Windows 更新挂起 11 min | 🔴 Closed | 已合并 | 已修复，回归测试通过 |
| **P3-功能降级** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills 索引过期 | 🟢 Open | 无 | 文档站搜索降级，非核心链路 |
| **P3-功能降级** | [#94516](https://github.com/NousResearch/hermes-agent/issues/94516) / [#94483](https://github.com/NousResearch/hermes-agent/issues/94483) Bot Cron 面板不可用 | 🔴 Closed | 已合并 | v0.20.5 引入回归，已修复 |
| **P3-功能降级** | [#93617](https://github.com/NousResearch/hermes-agent/issues/93617) Slack 并发流冲突 | 🔴 Closed | 已合并 | 高并发场景数据竞争 |
| **P3-UI崩溃** | [#94471](https://github.com/NousResearch/hermes-agent/issues/94471) Routines 面板渲染崩溃 | 🔴 Closed | 已合并 | 空指针调用，单测覆盖缺失 |

> **趋势**：P1 级 **Windows MCP 与 xAI 适配** 无任何在途 PR，建议立即指派；macOS 权限问题虽有部分缓解（#95131），但根治需 Electron 重签名流水线投入。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入下版本概率 | 备注 |
|------|------|--------|----------------|------|
| **pt-BR 完整本地化** | [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) / [#92590](https://github.com/NousResearch/hermes-agent/pull/92590) | PR 就绪，3400+ 行翻译 | ⭐⭐⭐⭐⭐ | 社区贡献质量高，仅需 CI 校验 |
| **Authority Execution Layer（权威执行层）** | [#95028](https://github.com/NousResearch/hermes-agent/issues/95028) / [#95101](https://github.com/NousResearch/hermes-agent/pull/95101) | Phase 0

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-26

> **数据来源**: GitHub `sipeed/picoclaw` 仓库近 24 小时公开活动（Issues、PRs、Releases）  
> **报告生成时间**: 2026-08-26

---

## 1. 今日速览
- **整体活跃度：中等偏低**。过去 24 小时无新版本发布，无 PR 合入主干，代码库处于**维护期而非功能迭代期**。
- **社区关注点集中在“稳定性”与“边缘部署”**：4 个活跃 Issue 中 3 个为 Bug（Web UI 卡顿、MCP 连接挂起、Slack 媒体上传失败），1 个为针对低算力设备的架构级 Feature Proposal。
- **唯一开放 PR (#3340)** 直接修复了 Slack 媒体上传阻塞 Bug，但标记为 `[stale]` 且暂无 Reviewer 介入，合并周期存在不确定性。
- **技术债务信号明显**：多个 Issue 持续数周未根治（如 #3281、#3269 均创建于 7 月中旬），提示核心循环与前端渲染管线存在长期性能瓶颈。
- **边缘计算需求浮现**：#3345 提出的“轻量 Worker 模式”暗示用户群体正从桌面端向异构边缘设备迁移，或将影响下一季度路线图。

---

## 2. 版本发布
> **今日无新版本发布**  
> 当前最新稳定版仍为 `v0.3.1`，Nightly 分支近期亦无标签推送。

---

## 3. 项目进展
| PR | 状态 | 核心变更 | 对主干推进度 | 备注 |
|----|------|----------|--------------|------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) `fix(slack): set FileSize on media upload params` | **Open / [stale]** | 在 `SendMedia` 构建 `slack.UploadFileParameters` 时显式填充 `FileSize`，修复 `file.upload.v2: file size cannot be 0` 错误 | **0%**（未合并） | 修复完整、测试用例缺失；需 Reviewer 确认 slack-go SDK 版本兼容性后合入 |

> **结论**：主干代码今日**零增量**，全部进展停留在“待审核”队列。

---

## 4. 社区热点
| 排名 | Issue/PR | 互动热度 (👍/评论) | 核心诉求 | 维护者响应 |
|------|----------|-------------------|----------|------------|
| 1 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 聊天输入框在历史较长时严重卡顿 | 👍 1 / 7 条 | **前端渲染性能**：虚拟列表/增量渲染缺失，导致 DOM 节点随历史线性增长 | 讨论集中于 `react-window` 或分页加载方案，暂无核心成员承诺排期 |
| 2 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP 连接失败导致 Agent Loop 死锁，界面停止响应 | 👍 1 / 7 条 | **容错与熔断机制缺失**：网络异常未被优雅处理，阻塞主事件循环 | 用户自行给出 Workaround（重启进程），Issue 未打入 Milestone |
| 3 | [#3340](https://github.com/sipeed/picoclaw/pull/3340) Slack 媒体上传修复 PR | 👍 0 / 评论数未披露 | **阻塞性 Bug 修复**：生产环境无法通过 Slack 发送图片/文件 | 标记 `[stale]` 10 天无 Review，社区隐性呼吁加速合并 |
| 4 | [#3345](https://github.com/sipeed/picoclaw/issues/3345) 提议：面向家庭边缘计算的轻量 Worker 模式 | 👍 0 / 0 条 | **架构级扩展**：将 PicoClaw 拆分为 Coordinator + Worker，适配 10–20 MB 内存设备 | 新提交，尚未引发讨论，但契合 RISC-V/ARM 边缘部署趋势 |

---

## 5. Bug 与稳定性
| 严重度 | Issue | 现象 | 影响面 | 是否有 Fix PR | 当前阻断点 |
|--------|-------|------|--------|---------------|------------|
| **P0 - 阻塞/数据丢失风险** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败 → Agent Loop 挂起 → 整个会话冻结 | 所有依赖 MCP 的生产部署 | ❌ 无 | 核心循环缺乏超时/重试/熔断设计，需重构 `agent.Run` 错误处理路径 |
| **P1 - 核心体验受损** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 聊天历史 > ~50 条时输入延迟 > 500 ms | Web UI 日常重度用户 | ❌ 无 | 虚拟化重构涉及前端架构，需评估对现有插件系统的兼容性 |
| **P1 - 功能不可用** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 发送图片/文件 100% 失败 (`file size cannot be 0`) | Slack 集成用户 | ✅ **[#3340](https://github.com/sipeed/picoclaw/pull/3340)** 已修复待合并 | PR 处于 `[stale]` 状态，需人工催审 |
| **P2 - 边缘场景** | — | — | — | — | — |

---

## 6. 功能请求与路线图信号
| 需求来源 | 核心诉求 | 可行性评估 | 可能纳入版本 | 关联动作 |
|----------|----------|------------|--------------|----------|
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) **轻量 Worker 模式** | 拆分 Coordinator/Worker，支持 10–20 MB 内存设备，实现异构集群 | **高**：Go 交叉编译优势明显，现有 gRPC/HTTP 传输层可复用；需新增资源调度、心跳、二进制裁剪逻辑 | **v0.4 / v1.0 候选** | 建议维护者发起 RFC，纳入下季度规划；可参考 `ollama`/`llama.cpp` 的 server/client 分离模式 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) 评论区衍生需求 | 虚拟滚动、消息分页、懒加载 Markdown 渲染 | **中**：纯前端重构，不涉及后端 API 破坏性变更 | **v0.3.x 维护分支** | 可作为 Good First Issue 招募贡献者 |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) 衍生需求 | MCP 连接池、健康检查、自动重连、降级为本地模型 | **中高**：符合 Agent 框架演进方向 | **v0.4** | 需配合核心循环重构同步实施 |

---

## 7. 用户反馈摘要
| 维度 | 代表性引用/现象 | 情感倾向 | 潜在影响 |
|------|----------------|----------|----------|
| **性能痛点** | “History 稍长输入就卡死，根本没法用 Web UI 做长对话” (#3281) | 😡 强烈负面 | 直接导致重度用户流失或转向 CLI/自建前端 |
| **稳定性焦虑** | “MCP 挂了整个 Bot 就假死，生产环境不敢开” (#3269) | 😰 担忧 | 阻碍企业级/自动化场景落地 |
| **集成缺陷** | “Slack 发图完全不能用，报错 `file size cannot be 0`” (#3338) | 😤 不满 | 降低协作场景可用性，修复后可快速挽回 |
| **边缘期待** | “想把旧手机/树莓派组成集群跑 PicoClaw，内存只有 20 MB” (#3345) | 🤩 期待 | 若支持，将大幅拓宽硬件生态与用户基数 |
| **文档/诊断** | 多个 Issue 中用户自行贴出堆栈、日志、Workaround | 🛠️ 自助倾向 | 社区具备一定调试能力，维护者可引导贡献测试用例 |

---

## 8. 待处理积压 ⚠️
| 项目 | 创建时间 | 停滞天数 | 优先级 | 建议行动 |
|------|----------|----------|--------|----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 卡顿 | 2026-07-21 | **36 天** | P1 | 纳入 `v0.3.2` 热修复里程碑；招募前端贡献者实现虚拟列表 |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP 死锁 | 2026-07-20 | **37 天** | P0 | 指派核心维护者设计熔断器接口；至少提供临时 Workaround 文档 |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) Slack 修复 PR | 2026-08-17 | **9 天** | P1 | **立即指派 Reviewer**；补齐单测后合并回 `main` 并回港 `release/v0.3` |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack 媒体上传失败 | 2026-08-17 | **9 天** | P1 | 关联 #3340，合并后同步关闭 |

---

## 📌 维护者行动清单（建议今日内完成）
1. **Review & Merge #3340** → 立即解除 Slack 集成阻塞。  
2. **为 #3269、#3281 打上 `v0.3.2` Milestone**，并指派 Owner。  
3. **在 #3345 下发起 RFC 讨论**，明确 Worker 模式技术边界与里程碑。  
4. **清理 `[stale]` 标签**：对超过 14 天无进展的 Issue/PR 自动标记并触发提醒。  

> **健康度指标**：🟡 **需关注** — 关键 Bug 修复 PR 停滞、P0 问题超月未解、社区高价值提案待响应。建议本周内完成上述 4 项行动以扭转趋势。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-26

> **数据基准**：GitHub `nanocoai/nanoclaw` 仓库过去 24 小时增量（Issues: 5 新开/活跃, PRs: 34 待合并 + 16 已合并/关闭, Releases: 0）

---

## 1. 今日速览
- **活跃度评级：🔥 高** — 单日 50 条 PR 更新（含 16 条合并/关闭），核心团队集中推进 Slack 适配器重构、Setup 驱动程序化、Agent 运行时隔离及容器状态一致性等核心基建。
- **零版本发布**，但合并的 PR 多为 **架构级修复/重构**（如 Codex/Opencode 运行时修正、Slack Room Handoff、Uninstall 硬化），技术债偿还力度大。
- **新增 5 个 Issue 全为 Bug/设计缺陷**，聚焦于 Shell 注入风险、技能作用域泄漏、本地适配器更新冲突、Vercel 技能同步阻塞及边缘计算提案，暴露出**技能系统边界**与**多租户隔离**的深层痛点。
- **社区协作模式**：核心成员（`amit-shafnir`, `gavrielc`, `Koshkoshinsk`, `witek` 等）主导“栈式 PR”并行开发，`core-team` 标签覆盖率高，决策链路短。
- **项目健康度**：向**“可编程安装/运维接口”**（`nanoclaw.driver.v1`、结构化健康检查、预置目录）演进明显，为企业级分发与边缘部署（Issue #3538）铺路。

---

## 2. 版本发布
> 过去 24 小时无新 Release。当前主分支积累大量破坏性重构（Setup 协议、Agent Workspace 隔离、Compose 文档内联），预计下一版本将为 **v0.14.0 或 v0.15.0**，需关注 `CHANGELOG` 迁移指南。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 | 链接 |
|----|------|----------|--------|------|
| **#3540** | **Fix (Opencode)** | `opencode serve` 在 Agent Workspace (`/workspace/group/<agent>`) 而非 Runner CWD (`/workspace/group`) 启动，修复项目文档扫描失败。 | Opencode Agent 可用性 | [#3540](https://github.com/nanocoai/nanoclaw/pull/3540) |
| **#3539 / #3537** | **Refactor (Codex)** | 移除 Codex 独立 Composer，统一使用 Trunk 共享 Composer；修复 `cli_scope: disabled` 组误收 `ncl tasks` 手册。 | Codex Agent 指令一致性 | [#3539](https://github.com/nanocoai/nanoclaw/pull/3539) |
| **#3536** | **Fix (Compose)** | 将 `CLAUDE.md` 所有 `@import` 内联为单一 Project Document，规避 Claude Code 新版安全策略阻断外部导入。 | 所有 Claude Code Agent | [#3536](https://github.com/nanocoai/nanoclaw/pull/3536) |
| **#3545** | **Feat (Slack)** | 显式 Room Handoff 工具、Host 端解析 `@bot` 提及、禁止自动 `@all`、保留投递链路。 | Slack 多 Agent 协作体验 | [#3545](https://github.com/nanocoai/nanoclaw/pull/3545) |
| **#2656** | **Fix (Mnemon)** | `mnemon setup` 移至 `index.ts main()`，修复 Entrypoint 被覆盖导致 Hook 未注册。 | Mnemon 技能稳定性 | [#2656](https://github.com/nanocoai/nanoclaw/pull/2656) |
| **#3544** | **Closed (Duplicate)** | 同 #3545，已关闭。 | — | [#3544](https://github.com/nanocoai/nanoclaw/pull/3544) |

> **进展小结**：今日合并 **6 个核心 PR**，集中解决 **Agent 运行时环境隔离**、**指令文档组装安全**、**Slack 协作原语** 三大基建短板，标志着“Agent 即容器”运行模型向生产就绪再迈进一步。

---

## 4. 社区热点（高互动/战略意义 Issues & PRs）

| 对象 | 标题 | 热度信号 | 核心诉求分析 | 链接 |
|------|------|----------|--------------|------|
| **Issue #3538** | **Proposal: 隔离容器作为可选家庭边缘 Worker** | 👍 0 / 评论 0（新开）但**战略价值极高** | 用户希望利用闲置家庭设备（PC/NAS）组成边缘集群，而非单一 Docker Host 或云 GPU。直指 **多 Host 编排、网络穿透、异构资源池化** 架构缺口。 | [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) |
| **PR #3485** | **Feat: 结构化 Setup 驱动协议 (`nanoclaw.driver.v1`)** | 核心团队主导，配套 #3486/3487/3484 | 将 Wizard 变为可编程状态机，支持 CI/CD 预置、无人值守安装、外部编排器接管。**企业化分发前置条件**。 | [#3485](https://github.com/nanocoai/nanoclaw/pull/3485) |
| **PR #3482** | **Feat: 结构化 Host 健康暴露** | 核心团队主导 | 单次只读调用判断安装存活/组件版本/技能集，替代“开数据库+扫进程+看目录”脆弱流程。**可观测性基石**。 | [#3482](https://github.com/nanocoai/nanoclaw/pull/3482) |
| **PR #3298** | **Feat: 本地 Web Chat Channel** | 早期 PR (08-17) 持续更新 | 零依赖内置 Web UI，解决“首次体验需外部账号”门槛。**增长/演示关键特性**。 | [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) |
| **Issue #3543** | **Shell 注入：`owner_email` 未加引号进入 `bash -c`** | 安全属性，CVSS 待评 | 邮箱含 `'` 或 Shell 元字符可破坏登录/命令注入。`add-dial` 与 `add-dial-tool` 两处同源缺陷。**需立即热修复**。 | [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 影响范围 | 已有 Fix PR | 链接 |
|--------|-------|------|----------|-------------|------|
| **🔴 Critical (安全/注入)** | **#3543** | `owner_email` 直接拼入 `bash -c` 无引号，单引号邮箱破坏登录，元字符命令注入。 | `add-dial` / `add-dial-tool` 所有使用者 | ❌ 无 | [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) |
| **🟠 High (功能失效)** | **#3535** | `add-vercel` rsync 实体技能副本到会话目录，阻断 Spawn 时 Symlink 同步，导致组固化到旧技能。 | Vercel 部署场景，技能更新失效 | ❌ 无 | [#3535](https://github.com/nanocoai/nanoclaw/issues/3535) |
| **🟠 High (权限绕过)** | **#3532** | `/add-dial-tool` Agent 作用域仅覆盖创建时现有组，新建组默认拥有工具权限。 | 多组权限模型，最小权限原则失效 | ❌ 无 | [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) |
| **🟡 Medium (升级阻塞)** | **#3529** | `update-nanoclaw` 把本地适配器误判为技能导入，导致验证失败或被覆盖，无 Opt-out。 | 自研 Channel Adapter 用户 | ❌ 无 | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) |
| **🟢 Low (体验)** | **#3525** (PR) | 向导“哪些 Agent 可用 Dial”步骤无法回显输入。 | 交互确认体验 | ✅ **#3525** 已开 PR 修复 | [#3525](https://github.com/nanocoai/nanoclaw/pull/3525) |

> **关注点**：#3543 为**唯一安全注入类**缺陷，建议维护者今日内发布 Hotfix 或回滚相关 Skill；#3535/3532 暴露**技能作用域与生命周期管理**的系统性设计不足，需架构级治理。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 关联 PR/进展 | 入版本概率 | 备注 |
|------|------|--------------|------------|------|
| **Issue #3538** | **边缘 Worker 池：多 Host、异构、家庭设备** | 无直接 PR，但 #3482 (Health API)、#3485 (Driver Protocol) 为前置基建 | 🟡 **中长期 (v0.16+)** | 需解决：容器迁移、Secret 分发、网络拓扑、资源调度。当前单 Host 架构需重大重构。 |
| **PR #3298** | **内置 Local Web Chat Channel** | 持续更新，核心团队推进 | 🟢 **高 (v0.14/0.15)** | 消除“首次体验需 Slack/Discord 账号”门槛，利于演示与开发调试。 |
| **PR #3485/3486/3487** | **可编程安装：Driver Protocol、Preseed Catalog、Timezone Preseed** | 3 个 PR 并行审查中 | 🟢 **高 (v0.14)** | 奠定“无人值守部署/企业分发/配置即代码”基础。 |
| **PR #3484** | **Secret 不入 argv（防泄露）** | 审查中 | 🟢 **高 (v0.14)** | 安全加固，配合 Driver Protocol 落地。 |
| **Issue #3529** | **Update 尊重本地适配器（Opt-out/白名单）** | 无 PR | 🟡 **中 (v0.15)** | 需在 Skill Registry 与 Channel Index 增加来源标记机制。 |

---

## 7. 用户反馈摘要（从 Issue 语义提炼）

| 痛点主题 | 代表性 Issue | 用户真实语境 | 满意度倾向 |
|----------|--------------|--------------|------------|
| **技能系统“副作用外溢”** | #3535 (Vercel rsync 阻断 Symlink)、#3532 (作用域不随组生命周期联动) | “我按文档操作，结果新建组/新会话却跑旧代码/越权” | 😡 **强不满** — 破坏“技能即声明式部署”心智模型 |
| **本地开发与升级冲突** | #3529 (本地 Adapter 被 Update 误伤) | “我维护私有 Channel，每次升级都得手动恢复/绕过” | 😟 **焦虑** — 缺乏“本地覆盖层”保护机制 |
| **Shell 安全基线缺失** | #3543 (邮箱注入) | “连邮箱里的单引号都处理不了，敢把 Token 传给它吗？” | 😱 **信任受损** — 基础输入消毒缺位 |
| **边缘计算原生诉求** | #3538 (家庭设备组集群) | “手头有闲置 Mac Mini/NAS，为什么非要买云 GPU？” | 🤩 **高期待** — 视 NanoClaw 为边缘编排最佳候选 |
| **安装/运维自动化缺口** | #3485/3482 (Driver/Health API) | “Ansible/CI 想管 Nanoclaw，只能刷屏幕抓文本” | 😤 **刚需未满足** — 核心团队已同步推进修复 |

---

## 8. 待处理积压（长期未响应/高价值滞留）

| 对象 | 标题 | 停滞时长 | 为何重要 | 建议动作 | 链接 |
|------|------|----------|----------|----------|------|
| **PR #2431** | **Slack 条件线程策略 (DM=顶级, Channel=线程)** | **105 天** (05-12 开) | 解决 Slack 适配器最核心 UX 痛点：DM 不要线程、Channel 要线程。现有 `supportsThreads` 过于粗粒。 | **指派 Reviewer / 合并冲突解决** — 已有 `core-team` 标签，代码成熟度高。 | [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) |
| **PR #3311** | **Scheduled Task 错误路由至 Operator** | 8 天 (08-18 开) | 修复 #3223：定时任

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-26

---

## 1. 今日速览
- **整体活跃度：低** —— 过去 24 小时仅新增 1 条 Issue，无 PR 活动、无版本发布、无合并/关闭记录，代码库处于**静默维护/酝酿新特性**阶段。
- **核心动向**：社区贡献者 `kvnloo` 提出基于现有 `RuntimeAdapter` 与 `Peripheral` vtable 的**家庭边缘网格** 架构设想，试图将闲置 PC/笔记本/安卓设备纳入统一调度面，属于**中长期架构级功能请求**，短期无代码交付。
- **健康度指标**：Issues/PRs 零积压变化，CI/CD 无新跑数，提示核心维护者可能在离线开发或集中精力于未公开分支；建议关注后续是否有配套 PR 或 Design Doc 产出。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
> 今日无 PR 合并或关闭，代码库主干无实质性前进。

---

## 4. 社区热点
| 排名 | 标题 | 类型 | 作者 | 反应/评论 | 核心诉求 |
|------|------|------|------|-----------|----------|
| 1 | **[#994 Household edge mesh using RuntimeAdapter workers and signed receipts](https://github.com/nullclaw/nullclaw/issues/994)** | Feature Request / Architecture | `kvnloo` | 👍 0 / 💬 0 | 利用现有 Zig 运行时、Docker/WASM 适配器、硬件发现、隧道/通道等原语，构建**家庭级边缘计算网格**；期望通过签名收据实现跨设备信任与审计，将闲置异构设备（PC、笔记本、Android、SBC）纳入统一调度平面。 |

- **分析**：该 Issue 属于**宏大叙事型需求**，未附带原型代码，但清晰列举了 NullClaw 现有可复用模块，显示提交者对代码库有深度理解。后续若无核心成员回应或拆解为子任务，可能长期停留在“愿景”阶段。

---

## 5. Bug 与稳定性
> 今日无新 Bug 报告、崩溃或回归 Issue。

---

## 6. 功能请求与路线图信号
| Issue | 关键词 | 可能落地路径 | 优先级预估 |
|-------|--------|--------------|------------|
| [#994](https://github.com/nullclaw/nullclaw/issues/994) | Edge Mesh, RuntimeAdapter, Signed Receipts, Heterogeneous Devices | 1️⃣ 拆解为：`RuntimeAdapter` 多实例编排、设备注册/心跳、收据签名/验证链、网络拓扑自愈；<br>2️⃣ 依赖现有 `tunnels`/`channels` 扩展为**去中心化消息总线**；<br>3️⃣ 需新增 **Policy Engine** 与 **Audit Log** 组件。 | **P2（中长期）** —— 无配套 PR/Design Doc 前不列入下一里程碑。 |

---

## 7. 用户反馈摘要
> 今日 Issue 无评论区讨论，无法提炼真实用户痛点。建议维护者在回复 #994 时主动询问：
> - 目标部署规模（设备数、网络拓扑）
> - 对“签名收据”的威胁模型预期
> - 是否愿意贡献 PoC 分支

---

## 8. 待处理积压提醒
| 编号 | 标题 | 停滞天数 | 风险 | 建议动作 |
|------|------|----------|------|----------|
| 无 | — | — | — | 当前无长期未响应的高优 Issue/PR；建议每周例行扫描 `stale` 标签，防止隐性积压。 |

---

### 📌 维护者行动建议
1. **响应 #994**：给出初步架构评审意见，或将其转为 **Discussion** 广泛征集设计方案。  
2. **路线图公开**：在 README / PROJECT_BOARD 标注“Edge Mesh”所属里程碑（如 v0.9 / v1.0），对齐社区预期。  
3. **CI 健康检查**：确认主分支最近一次绿色构建时间，防止“静默期”掩盖环境漂移。

---

*报告生成时间：2026-08-26 00:00 UTC | 数据来源：GitHub REST API / GraphQL 实时抓取*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-26

---

## 1. 今日速览

IronClaw 今日呈现**高强度工程推进态势**：24 小时内 37 条 Issue 更新、23 条 PR 活动，**10 个大型 PR 合并/关闭**，零版本发布。核心动力集中在 **CI/CD 管线重构（nextest、preflight、checkout 优化）**、**通知系统架构重写（耐久收件箱替代旧审批回退）**、**Design System 分阶段落地（Phase 1 闭环、Phase 3a 基建就绪）**、**WebUI 体验补齐（i18n、Loading Shell、共享组件迁移）**，以及**扩展设备链路与 Agent 循环性能的关键修复**。项目处于 **v1.4.0 路线图冲刺期**，技术债偿还与新特性并行，整体健康度良好，交付节奏可控。

---

## 2. 版本发布

**无新版本发布**。当前主分支积累了大量可发布变更，建议关注后续 Release Candidate。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR

| PR | 标题 | 规模/风险 | 核心推进内容 | 关联 Issue |
|----|------|-----------|--------------|------------|
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | **ci: nextest 测试管线、全失败信号、PR 解除节流 (T2)** | XL / Medium | 用 `cargo-nextest` 替代串行 `cargo test`，实现单次运行汇总所有失败用例，提升 PR 并行度，新增网络隔离负向控制与 REPRO 产物 | #7799 |
| [#7809](https://github.com/nearai/ironclaw/pull/7809) | **ci: 规范化 preflight —— 单一门禁列表、worktree 安全钩子、自打印 REPRO (T4)** | XL / Low | `scripts/preflight-gates.sh` 成为唯一确定性门禁入口，供手工/pre-push/CI 复用，消除漂移 | #7801 |
| [#7819](https://github.com/nearai/ironclaw/pull/7819) | **ci: PR/队列检查收敛 —— 规划漂移防护、PR 时默认特性 clippy (T3)** | XL / Medium | 消除三类“仅队列失败”模式，新增两项 PR 阶段检查，实现队列与 PR 检查一致性 | #7800 |
| [#7846](https://github.com/nearai/ironclaw/pull/7846) | **refactor(notifications): 退役旧审批回退逻辑** | XL / Low | 移除 `threads?needs_approval=true`、兼容展示器、localStorage 状态、过渡去重逻辑；耐久收件箱成为唯一数据源 | #7706, #7687 |
| [#7861](https://github.com/nearai/ironclaw/pull/7861) | **fix(extensions): 恢复安装/激活路径上的设备链路引导** | XL / Low | 修复 Telegram 设备链路在安装/激活扩展时丢失引导文案的回归，补全 Agent 自我纠错提示 | #7853, #7862 |
| [#7816](https://github.com/nearai/ironclaw/pull/7816) | **feat(webui): OOBE 建议抽屉新增“刷新/连接”入口** | L / Low | 前端补齐 #7815 两个无需后端变更的缺口，隐藏于 `oobe_suggestions` 功能旗后 | #7815 |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) | **feat(subagent): 后台模式 —— 收据生成、逐子投递、激活、自愈扫描** | XL / Low | 子代理后台模式生产侧落地（Slice 2b+2c），配合 #7788 惰性表面，部署需显式开启 | #7788 |
| [#7894](https://github.com/nearai/ironclaw/pull/7894) | **ci: 缩减必选作用域 checkout 传输量** | S / Medium | 必选检查作业保留三点合并基础，历史 blob 走 partial-clone 过滤；`Tests (Reborn)` 改 depth-1 checkout | — |
| [#7820](https://github.com/nearai/ironclaw/pull/7820) | **test: 作用域隔离套件整合探针 (T2 后续)** | XL / Medium | 基于 #7817 之上，度量驱动的测试套件合并试探，草稿态等待上游合并 | #7799 |
| [#7799](https://github.com/nearai/ironclaw/issues/7799) | **Issue: CI 加速 T2 完结** | — | 以上 4 个 CI 相关 PR 均关联此 Epic，标志 **CI 管线现代化阶段性交付完成** | — |

> **进展小结**：CI 管线（T2/T3/T4）与通知系统两大技术债主线**同周闭环**；Design System Phase 1 (#7038) 正式关闭，Phase 3a 基建 (#7831) 进入审查；子代理后台模式、OOBE 建议、扩展设备链路等用户可见特性同步推进。

---

## 4. 社区热点 —— 高互动 Issue/PR 分析

| 对象 | 类型 | 评论/互动 | 核心诉求与信号 |
|------|------|-----------|----------------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic (Open) | 9 💬 | **持久化用户级沙箱**：当前 Docker 逐命令建容器、workspace 按租户持久化，目标是“持久用户电脑”代理；涉及 iron-proxy、循环执行器延迟决策，属 v1.4.0 核心基建。 |
| [#7862](https://github.com/nearai/ironclaw/issues/7862) | Bug (Open) | 3 💬 | **Telegram 设备链路通用报错**：未配置 `telegram_api_id/hash` 时给出“Something went wrong”，缺乏可操作指引；#7861 已修复安装/激活路径，但问题根因在扩展查找路径即兴生成说明 (#7887)。 |
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | Perf Bug (Open) | 2 💬 | **扩展能力载荷未投影 + 盲目 24 KiB 头切片**：两封邮件导致 19.7 s 推理，其中 19.2 s 为模型推理；49 KB 原始 MIME 头未经裁剪直接入 Prompt，性能隐患大。 |
| [#7892](https://github.com/nearai/ironclaw/issues/7892) | Bug (Open) | 0 💬 | **Agent 循环延迟工具 15 次发现 0 次调用**：123 s 运行中 31 次能力调用仅 4 组去重参数，`google-calendar.list_events` 被搜索 15 次，缺乏终止守卫。 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | PR (Open, XL) | — | **编码工具统一契约 (omp)**：六大裸工具名（`read/write/edit/glob/grep/bash`）取代旧工具面，移除而非隐藏；影响面极广，处于长周期审查中。 |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) | PR (Open, XL) | — | **Design System Phase 3a 基建**：引入非阻塞 Chromatic 通道、补齐设计令牌轴；为 Phase 3 重皮肤铺路，刻意不纳入 `code-style` 必选门禁。 |
| [#7884](https://github.com/nearai/ironclaw/pull/7884) | PR (Open, L) | — | **卡死线程壁钟占用上限 + 诚实排队文案**：10 分钟壁钟上限防单活跃锁死，重试循环内强制执行，失败闭环为 `WallClockLimit`。 |

> **热点洞察**：  
> - **基建与体验双线并行**：Epic 级基建（#7732）与用户直感痛点（#7862, #7891, #7892）同频共振。  
> - **性能回归显性化**：#7891 以具体数字（19.2 s 推理、49 KB 载荷）量化问题，推动“能力载荷投影”纳入近期迭代。  
> - **Agent 循环鲁棒性**：#7892 暴露“重复搜索工具、无终止守卫”的系统性缺陷，需从调度层引入去重与预算熔断。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **High** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | 扩展能力载荷未投影导致 19.2 s 纯推理开销，单轮对话近 20 s | 无 | 🔴 Open |
| **High** | [#7892](https://github.com/nearai/ironclaw/issues/7892) | Agent 循环重复搜索同一工具 15 次，123 s 无终止，4 组参数 31 次调用 | 无 | 🔴 Open |
| **High** | [#7888](https://github.com/nearai/ironclaw/issues/7888) | 多实例获取日志无限挂起，两独立实例复现 | 无 | 🔴 Open |
| **Medium** | [#7862](https://github.com/nearai/ironclaw/issues/7862) | Telegram 设备链路缺配置时给出通用报错，用户无法自助 | [#7861](https://github.com/nearai/ironclaw/pull/7861) (已合并) | 🟡 部分配套修复 (#7887 仍在) |
| **Medium** | [#7887](https://github.com/nearai/ironclaw/issues/7887) | 扩展查找路径即兴生成设备链路说明，导致 Agent 自我矛盾 | 无 | 🟡 Open |
| **Low** | [#7890](https://github.com/nearai/ironclaw/issues/7890) | `app.css` 残留 ~100 行 Tailwind 色彩别名兼容层，阻碍 WS3b 重皮肤 | 无 | 🟢 Open (清理任务) |
| **Low** | [#7870](https://github.com/nearai/ironclaw/issues/7870) | 13 条 `chat.oobe.*` 及 `common.back/continue` 非英语占位未本地化 | [#7877](https://github.com/nearai/ironclaw/pull/7877) (Open) | 🟢 修复中 |

> **稳定性趋势**：高严重度 Bug 集中在 **Agent 循环调度** 与 **扩展能力载荷处理** 两大核心路径，均无 Fix PR，建议优先级拉高；日志挂起 (#7888) 为新发布，需

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-26

> **数据统计周期**：2026-08-25 00:00 – 2026-08-25 23:59 (UTC)  
> **数据来源**：GitHub API / 仓库事件流（netease-youdao/LobsterAI）

---

## 1. 今日速览
- **发布节奏加快**：昨日连续发布 **2 个版本**（2026.8.21 与 2026.8.25），体现“小步快跑”迭代策略。  
- **代码吞吐量高**：过去 24 h 合并/关闭 **9 个 PR**，涉及资料库、设置、侧边栏、Analytics、本地产物生命周期等核心模块。  
- **依赖治理推进**：Dependabot 发起的 3 个陈旧 PR（Electron 升级、Actions 组件升级）集中关闭，技术债清理取得阶段性进展。  
- **社区互动低频**：仅 1 个新 Issue（微信群满员），无 Bug 报告，用户反馈渠道主要集中在微信群而非 GitHub。  
- **整体健康度**：⭐⭐⭐⭐☆（核心功能稳步推进，但长期积压 PR 需关注，外部贡献者参与度偏低）。

---

## 2. 版本发布

### 2.1 LobsterAI 2026.8.25 ([Release Note](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.25))
| 类别 | 核心变更 | 关联 PR |
|------|----------|---------|
| **资料库** | 跨平台缩略图生成、本地产物生命周期管理增强、预览与操作体验优化 | [#2513](https://github.com/netease-youdao/LobsterAI/pull/2513) [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524) |
| **设置** | 新增「方案模型目录」标签页，支持文本/图像/视频模型分类展示与价格目录加载 | [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) [#2535](https://github.com/netease-youdao/LobsterAI/pull/2535) |
| **Artifacts** | 区分网页与本地服务预览类型（图标/文案/打开行为分离），补充 HTM 图标映射与测试 | [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) |
| **Analytics** | 资料库全链路埋点（曝光/筛选/搜索/预览/收藏/刷新）、发布 CTA→付费订阅 7 天末次触点归因、失败重试与清理机制 | [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) |
| **稳定性** | 修复本地产物后台刷新闪烁、分页状态保持、登录提示自动淡出 | [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) |

> **破坏性变更**：无。  
> **迁移提示**：Electron 仍停留在 40.2.1（见积压 #1277），若后续升级需注意原生模块重新编译。

### 2.2 LobsterAI 2026.8.21 ([Release Note](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.21))
- DSH 埋点开关与工作台打开统计、DSH 升级至 0.1.1-rc.1、埋点模块重构。  
- 已包含在 2026.8.25 累积发布中，此处不再赘述。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 标题 | 影响模块 | 进展评价 |
|----|------|----------|----------|
| [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) | fix(library): 修复本地产物后台刷新闪烁 | Renderer / Main | **高**：引入增量刷新协调器、按 ID 批量查询、原位合并策略，彻底解决列表跳动与滚动位置丢失。 |
| [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) | feat(analytics): 完善资料库埋点与发布转化归因 | Renderer / Artifacts | **高**：建立“资料库→分享→发布→付费”全漏斗归因体系，为商业化决策提供数据支撑。 |
| [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) / [#2535](https://github.com/netease-youdao/LobsterAI/pull/2535) | feat(settings): add plan model catalog | Renderer / Docs / Main | **中**：模型选择入口前移，降低用户认知负担；含轻量诊断埋点，便于后续 A/B 测试。 |
| [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) | fix(artifacts): 区分网页与本地服务预览展示 | Renderer / Docs / Artifacts | **中**：交互语义更清晰，减少用户误操作。 |
| [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | fix(sidebar): fade out login promo tip | Renderer | **低**：体验细节打磨，清理定时器避免内存泄漏。 |
| [#2534](https://github.com/netease-youdao/LobsterAI/pull/2534) | Release/2026.8.20 | 全仓库 | **发布工程**：版本整合 PR，包含上述所有变更。 |

**整体推进度**：核心“资料库-产物-变现”闭环在数据与体验两条线并行推进，版本交付节奏可控。

---

## 4. 社区热点

| 对象 | 标题 | 互动 | 分析 |
|------|------|------|------|
| [Issue #2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | 微信群已满人 | 👍 0 / 评论 1 | **唯一新 Issue**，反映**社群运营瓶颈**——微信群 500 人上限阻碍用户接入。建议：建立「用户群矩阵」（如 LobsterAI-1/2/3）或引导至 Discord/GitHub Discussions。 |
| [PR #1159](https://github.com/netease-youdao/LobsterAI/pull/1159) | feat(cowork): add session fork | 陈旧 OPEN | 外部贡献者 vdorchan 提出的协作分支功能，已搁置 5 月。**信号**：社区对「会话版本控制/分支实验」有真实需求，建议纳入路线图评估。 |

> **结论**：GitHub 非主要用户反馈阵地，微信群才是核心社区。官方需建立「Issue↔微信」双向同步机制。

---

## 5. Bug 与稳定性
| 严重度 | 描述 | 来源 | Fix 状态 |
|--------|------|------|----------|
| **P0 (已修复)** | 本地产物后台刷新导致列表闪烁、滚动位置重置、分页状态丢失 | 内部测试 / PR #2531 | ✅ 已合并至 2026.8.25 |
| **P1 (潜在风险)** | Electron 40.2.1 → 43.4.1 升级被搁置，存在已知安全补丁缺失 | Dependabot #1277 | ⏳ **积压 5 个月**，需安排兼容性测试专项 |
| **P2 (已修复)** | 登录推广提示未随认证状态清理定时器，可能内存泄漏 | PR #2532 | ✅ 已合并 |

**无新增 Crash / Regression 报告**。

---

## 6. 功能请求与路线图信号
| 需求来源 | 核心诉求 | 关联 PR / 可能性 |
|----------|----------|------------------|
| [PR #1159](https://github.com/netease-youdao/LobsterAI/pull/1159) | **会话 Fork/分支**：在协作会话中创建分支以保留原始状态实验 | 🟡 **中等** – 代码已实现但审阅停滞，建议在 2026.9 版本纳入 Code Review。 |
| [Issue #2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | **社群扩容**：微信群满员阻碍新用户加入 | 🟢 **高** – 运营层面可立即执行（建群/分流），无需代码变更。 |
| 资料库 Analytics 埋点 (#2529) | **发布转化归因** → 付费订阅 | 🟢 **已落地** – 为后续「Pro 方案模型目录」定价实验铺路。 |

---

## 7. 用户反馈摘要（来自 Issue #2536 评论）
> “WeChat group is Full. Anticipating for another wechat group! Thanks.” — @MurrayHubert

- **痛点**：唯一官方即时沟通渠道触达上限，新用户无法获取实时支持、内测资格、最佳实践分享。  
- **场景**：开发者/重度用户希望第一时间反馈 Bug、讨论 Prompt 工程、申请模型白名单。  
- **满意度侧写**：用户仍保持礼貌期待（👍 0 但无负面情绪），说明产品核心价值被认可，**渠道建设滞后于产品增长**。

---

## 8. 待处理积压（长期未响应，建议本周内处理）

| 对象 | 类型 | 停留时长 | 优先级建议 | 处理建议 |
|------|------|----------|------------|----------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot: Electron 40→43 + electron-builder 升级 | **147 天** | 🔴 **P0** | 分配 1 名主进程工程师做兼容性冒烟测试（原生模块、代码签名、自动更新），通过后合并。 |
| [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) | feat(cowork): add session fork | **148 天** | 🟠 **P1** | 指派 Reviewer（建议 @liuzhq1986 或 @liugang519），若设计无异议走快速合并流程。 |
| [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) / [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) | Actions 组件升级 | 147 天 | 🟢 **P2** | 已关闭，但建议在下次 CI 维护窗口统一升级至最新稳定版。 |

---

## 📌 维护者行动清单（建议）
1. **本周内**完成 Electron 升级验收（#1277），消除安全隐患。  
2. **本周内**安排 #1159 Code Review，释放外部贡献者积极性。  
3. **即日**在微信群公告/官网/Readme 增加「二群/三群入口」或 Discord 邀请链接。  
4. 下一版本（2026.9.x）规划会纳入「会话 Fork」与「Pro 方案模型目录 A/B 测试」两大特性。  

---  
*报告自动生成于 2026-08-26 06:00 UTC | 下一期预计 2026-08-27 同步发布*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-26

---

## 1. 今日速览
- **整体活跃度：中等偏高**。过去 24 小时内无新版本发布，但有 5 个 PR 处于活跃状态（4 个待合并，1 个已合并），且涉及核心工具链、沙箱后端、OAuth 认证等关键模块，显示项目处于功能迭代与稳定性打磨并行阶段。
- **核心进展**：合并了修复定时任务上下文丢失的 PR（[#1243](https://github.com/moltis-org/moltis/pull/1243)），解决了跨渠道（WhatsApp 等）会话历史断裂的关键问题；新增 Brave 搜索参数校验（[#1245](https://github.com/moltis-org/moltis/pull/1245)）与 OpenAI 工具 Schema 兼容性修复（[#1232](https://github.com/moltis-org/moltis/pull/1232)），提升工具调用鲁棒性。
- **社区信号**：新增 Kubernetes 原生沙箱后端特性需求（[#1118](https://github.com/moltis-org/moltis/issues/1118)）讨论持续，Coder 远程工作区沙箱支持（[#1199](https://github.com/moltis-org/moltis/pull/1199)）已进入审查，显示企业级隔离执行需求强烈。
- **风险点**：共享 Slack 频道工具失效 Bug（[#1224](https://github.com/moltis-org/moltis/issues/1224)）已关闭但未见修复 PR，需确认是否为配置或上游问题；多个 PR 仍处“评论 undefined”状态，审查吞吐可能存在瓶颈。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 对项目推进的意义 |
| :--- | :--- | :--- | :--- |
| **[#1243](https://github.com/moltis-org/moltis/pull/1243)** `fix(cron): preserve delivered channel context` | **已合并** | 修复定时任务执行后，将最终交付文本作为助手消息追加至目标会话（WhatsApp 等），保留上下文连续性。 | **高**：解决了跨渠道定时/主动消息场景下的“记忆断层”问题，显著提升多轮对话体验的完整性。 |
| **[#1245](https://github.com/moltis-org/moltis/pull/1245)** `fix(tools): validate Brave search parameters` | 待合并 | 仅在 Brave 为激活提供商时暴露本地化参数；规范化 country/language/freshness，非支持市场回退 `ALL`。 | **中**：增强工具参数的类型安全与提供商解耦，减少因参数不合法导致的调用失败。 |
| **[#1232](https://github.com/moltis-org/moltis/pull/1232)** `fix(tools): make object schemas OpenAI-safe` | 待合并 | 为 Webhook patch、MCP 环境变量等显式声明字段，设置 `additionalProperties: false` 以兼容 OpenAI Strict Schema。 | **高**：消除 OpenAI 函数调用因 Schema 不严格导致的 `null`/空值回退，保障核心 LLM 交互链路稳定。 |
| **[#1244](https://github.com/moltis-org/moltis/pull/1244)** `Fix Fastmail MCP OAuth scope registration` | 待合并 | MCP OAuth 发现阶段优先使用受保护资源作用域；动态客户端注册包含选定作用域；新增 Fastmail 回归测试。 | **中**：修复特定 MCP 服务（Fastmail）的授权作用域不匹配问题，完善 OAuth 合规性测试覆盖。 |
| **[#1199](https://github.com/moltis-org/moltis/pull/1199)** `Add Coder remote workspace sandbox support` | 待合并 | 新增 Coder 沙箱后端：通过 REST API 创建临时工作区，PTY WebSocket 执行命令；支持模板/预设/TTL/环境别名/自动后端选择。 | **高**：扩展沙箱生态至远程云开发环境（Coder），为企业级“自带环境/强隔离”执行提供新选型，响应 Issue [#1118](https://github.com/moltis-org/moltis/issues/1118) 类需求。 |

> **整体评估**：今日合并 1 个关键修复，4 个高质量 PR 推进中，覆盖“上下文连续性”、“工具 Schema 鲁棒性”、“OAuth 合规”、“沙箱多样性”四大方向，项目向**生产级稳定性**与**企业级扩展性**双轨并进。

---

## 4. 社区热点

| 排名 | Item | 互动指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **Issue [#1118](https://github.com/moltis-org/moltis/issues/1118)** `[Feature] Add Kubernetes-native sandbox backend with runtimeClassName support` | 👍 1 \| 评论 2 \| 创建 2026-06-12，近期更新 | **企业级强隔离执行刚需**。用户要求原生 K8s Pod 沙箱，支持 `runtimeClassName` 接入 Kata/gVisor 实现 VM 级隔离，以运行非可信 LLM 生成代码。PR [#1199](https://github.com/moltis-org/moltis/pull/1199) (Coder) 可视为替代方案探索，但原生 K8s 后端更符合云原生编排标准，呼声高。 |
| **2** | **PR [#1199](https://github.com/moltis-org/moltis/pull/1199)** `Add Coder remote workspace sandbox support` | 评论 undefined \| 更新 2026-08-25 | **沙箱后端多元化探索**。引入 Coder 作为远程工作区方案，支持丰富参数化模板。审查重点可能集中在 PTY WebSocket 重连稳健性、资源清理（TTL）、权限模型映射。 |
| **3** | **Issue [#1224](https://github.com/moltis-org/moltis/issues/1224)** `[Bug] Tools stop working in shared Slack channels` | 👍 0 \| 评论 0 \| 已关闭 | **跨工作区/共享频道权限边界问题**。虽已关闭但无修复记录，可能为配置错误（如 `channel_not_found`/`access_denied`）或 Slack API 变更，建议维护者复盘关闭理由，避免回归。 |

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 现象 | 影响范围 | 修复状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (已修复)** | **PR [#1243](https://github.com/moltis-org/moltis/pull/1243)** | 定时任务触发的跨渠道消息送达后，后续追问丢失原会话上下文。 | WhatsApp 等所有支持定时/主动推送的渠道，**多轮对话完全中断**。 | ✅ **已合并至主分支** |
| **P1 (进行中)** | **PR [#1232](https://github.com/moltis-org/moltis/pull/1232)** | OpenAI Strict 模式下，未声明 `additionalProperties: false` 的工具 Schema 导致模型返回 `null`/空对象，而非预期数据。 | 所有使用 OpenAI 模型且启用 Strict Tool Calling 的场景，**工具调用静默失败**。 | 🔄 **PR 待合并，含回归测试** |
| **P1 (进行中)** | **PR [#1245](https://github.com/moltis-org/moltis/pull/1245)** | Brave 搜索工具在非 Brave 提供商激活时仍暴露本地化参数；参数值未规范化导致请求失败。 | 搜索工具多提供商切换场景，**参数泄漏与校验缺失**。 | 🔄 **PR 待合并** |
| **P2 (已关闭/待确认)** | **Issue [#1224](https://github.com/moltis-org/moltis/issues/1224)** | 共享 Slack 频道中工具停止工作。 | Slack 共享频道集成场景，**工具调用不可用**。 | ❓ **Issue Closed 但无关联 Fix PR，需排查是否为误报或配置问题** |
| **P2 (进行中)** | **PR [#1244](https://github.com/moltis-org/moltis/pull/1244)** | Fastmail MCP OAuth 发现阶段使用授权服务器完整作用域目录而非受保护资源作用域，导致注册作用域过宽/不匹配。 | Fastmail MCP 集成，**授权失败或权限过大**。 | 🔄 **PR 待合并，含回归测试** |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR/进展 | 纳入下一版本可能性 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue [#1118](https://github.com/moltis-org/moltis/issues/1118)** | **Kubernetes 原生沙箱后端** (`runtimeClassName` 支持 Kata/gVisor) | PR [#1199](https://github.com/moltis-org/moltis/pull/1199) 实现了 Coder 后端，架构上铺垫了“可插拔沙箱”模式。 | **中高** | 需求明确、技术栈标准（K8s CRI），但实现复杂度高（Pod 生命周期、网络、存储、RBAC）。Coder PR 合并后，原生 K8s 后端极可能成为下一个里程碑。 |
| **PR [#1199](https://github.com/moltis-org/moltis/pull/1199)** | **Coder 远程工作区沙箱** | 已提交完整实现：REST API + PTY WebSocket、模板/预设/TTL/别名、自动后端选择。 | **高** | 代码完备、文档齐全、解决“远程/云原生执行”痛点，审查通过概率大，极大概率入下一版本。 |
| **PR [#1232](https://github.com/moltis-org/moltis/pull/1232)** | **OpenAI Strict Schema 兼容** | 修正 Webhook patch、MCP Env 等核心工具 Schema。 | **极高** | 关键兼容性修复，阻塞 OpenAI 最新模型特性，必入。 |
| **PR [#1245](https://github.com/moltis-org/moltis/pull/1245)** | **Brave 搜索参数强类型化** | 供应商感知参数暴露、枚举规范化、回退策略。 | **高** | 工具链质量提升，低风险，易合并。 |

> **路线图推断**：**vNext 版本**大概率聚焦 **“沙箱生态扩展 (Coder 入主) + 工具链 Schema 鲁棒化 (OpenAI/Brave) + 上下文完整性 (Cron 修复)”**。K8s 原生沙箱可能规划为后续大版本。

---

## 7. 用户反馈摘要

*数据源：Issue 评论、PR 描述、关闭理由（本期数据评论极少，主要从标题/描述推导）*

| 场景 | 痛点/诉求 | 满意度信号 |
| :--- | :--- | :--- |
| **企业级代码执行隔离** (Issue [#1118](https://github.com/moltis-org/moltis/issues/1118)) | 需在 K8s 中以 Pod 形式运行非可信代码，**要求 VM 级隔离 (Kata/gVisor)**，现有沙箱（Docker/本地/飞书/Coder）均无法满足合规审计要求。 | 🔴 **强烈不满/缺口**：现有方案无法覆盖“零信任执行环境”合规场景。 |
| **跨渠道定时/主动消息** (PR [#1243](https://github.com/moltis-org/moltis/pull/1243)) | 定时任务送达 WhatsApp 后，用户回复时 Agent “失忆”，无法关联上下文。 | 🟢 **修复后满意**：PR 明确将送达文本写入会话历史，解决核心断点。 |
| **OpenAI 函数调用失败** (PR [#1232](https://github.com/moltis-org/moltis/pull/1232)) | 启用 Strict 模式后，工具调用返回 `null`，导致 Agent 循环报错或幻觉。 | 🟡 **阻塞性 Bug**：开发者被迫关闭 Strict 模式或手工 Patch Schema。 |
| **Slack 共享频道工具失效** (Issue [#1224](https://github.com/moltis-org/moltis/issues/1224)) | 共享频道中工具调用静默失败，无报错日志。 | ⚪ **未解决/不透明**：Issue 关闭无解释，用户可能通过降级（改用普通频道）规避。 |
| **MCP OAuth 互操作性** (PR [#1244](https://github.com/moltis-org/moltis/pull/1244)) | Fastmail MCP 服务授权作用域不匹配，导致动态客户端注册失败。 | 🟡 **特定集成受阻**：仅影响 Fastmail 用户，但暴露 MCP 发现流程通用缺陷。 |

---

## 8. 待处理积压提醒

| Item | 停滞时长 | 优先级 | 建议行动 |
| :--- | :--- | :--- | :--- |
| **Issue [#1118](https://github.com/moltis-org/moltis/issues/1118)** `Kubernetes-native sandbox backend` | **创建 75 天** (2026-06-12) | **P0 (战略)** | **需指定 Owner 启动设计评审**。虽有 Coder PR 作替代，但原

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-26

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库 | 统计窗口：过去 24 小时  
> **核心指标**：Issues 34 条（+20/-14） | PRs 50 条（+21/-29）| 新版本 1 个 | 活跃度评级：**🟢 高**（日均 PR 合并 >25，Issue 周转快，Beta 迭代密集）

---

## 1. 今日速览
- **版本推进**：发布 **v2.1.1-beta.3**，聚焦控制台依赖锁定、插件 API 大小写修正、集成测试扩展，Beta 阶段进入“稳定化收口”期。
- **工程质量**：合并 29 个 PR，涵盖安全加固（master key 权限）、CI 分片并行化（+5pp 覆盖率）、Provider 目录刷新、Creator 插件 1.1.1 里程碑等核心基建。
- **社区声量**：34 条 Issue 更新中，**桌面端安装/更新锁文件冲突（#6810）**、**长会话渲染掉帧（#7129）**、**MCP 会话自动恢复失败（#6524）** 三大痛点持续发酵，用户期待“开箱即用”稳定性。
- **架构演进**：Session 级思考模式（#7163）、Workspace Skill 预加载（#7182）、统一工具面板/终端预览（#7013）等增强型 PR 正在审查，标志着从“单轮聊天”向“Agent IDE”形态跃迁。
- **风险提示**：Windows 内存泄漏/卡死（#5720, #7259, #7285）与 SSE 死循环 100% CPU（#7261）虽已关闭但根因未完全公开复盘，需警惕回归。

---

## 2. 版本发布
### 📦 v2.1.1-beta.3 (2026-08-25)
| 维度 | 详情 |
|------|------|
| **核心变更** | 1. `chore(console)`: 锁定 `@agentscope-ai/chat@1.1.72` 修复前端依赖漂移<br>2. `docs(loop-engineering)`: 修正 `PluginAPI` → `PluginApi` 大小写不一致导致的 TS 报错<br>3. `test(integration)`: 扩展集成测试覆盖范围（具体用例见 PR #7257, #7269） |
| **破坏性变更** | 无（仅修正大小写与依赖版本） |
| **迁移建议** | Beta 2 用户可直接热更新；插件开发者需同步修正 `PluginApi` 引用大小写 |
| **发布链接** | [Release v2.1.1-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3) |

---

## 3. 项目进展（已合并/关闭的关键 PR）
| PR | 类型 | 核心价值 | 关联 Issue |
|----|------|----------|------------|
| [#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276) | 🔧 依赖升级 | **AgentScope 2.0.7** 引入：修复底层 Agent 运行时多个并发/内存问题，为上层稳定性奠基 | 隐性关联 #5720, #7261 |
| [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) | 🔒 安全加固 | Master Key 文件创建时强制 `0o600` 权限，修复权限过大的安全隐患 | — |
| [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293) | ⚡ CI 优化 | 集成测试拆分为 **P0/P1/P2 三个并行分片**，CI 耗时预计降低 40%+，合并门槛提速 | — |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | 🧪 测试补强 | 新增 19 个单测文件（+1148 cases），覆盖率 **58.04% → 63.06% (+5.02pp)**；修复 `/root` 误判为系统目录的安全检查 Bug | — |
| [#7274](https://github.com/agentscope-ai/QwenPaw/pull/7274) | 🚀 功能里程碑 | **Creator 1.1.1**：实时网页/桌面操作录制、百炼 Wan3 视频生成、APE-benchmark 评测算子、语义化版本底线 | #7013 (工具面板前置依赖) |
| [#7277](https://github.com/agentscope-ai/QwenPaw/pull/7277) | 🤖 Provider 同步 | 刷新 Kimi / 阿里云 Token Plan / Coding Plan 模型目录，剔除已下线模型，新增最新旗舰模型 | — |
| [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | ✨ 新功能 (审查中) | **Session 级思考模式** 四档可选，持久化至 Chat Metadata，优先级 > Agent/Extra-body 设置 | #7196 (用户折叠诉求) |

> **整体推进度**：Beta 3 封板后，主干已具备 **AgentScope 2.0.7 + Creator 1.1.1 + Session Thinking + 安全基线** 的 RC 候选能力集，预计 1 周内进入 RC 阶段。

---

## 4. 社区热点（高互动 Issues/PRs）
| 排名 | Issue/PR | 互动 | 核心诉求 | 维护者响应状态 |
|------|----------|------|----------|----------------|
| 1 | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) **Webhook 回调机制** | 💬9 👍1 | **外部系统集成**：发消息→获取 Key→轮询/回调拿结果，构建“CoPaw as a Service” | 🟡 Open，标 `good first issue`，待架构评审 |
| 2 | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) **微信频道“隐藏思考”失效** | 💬6 | **隐私/体验**：设置关闭仍渲染思维链，泄露内部推理 | 🟡 Open，需前端渲染层排查 |
| 3 | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) **MCP 重启后 Session 不自动恢复** | 💬6 | **生产可用性**：`streamable_http` 模式下 Server 重启导致 `mcp-session-id` 失效，需手动 `list mcp` | 🟡 Open，核心阻断，建议 P0 处理 |
| 4 | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) **Windows 安装需先杀占用进程** | 💬5 | **分发体验**：NM Host/浏览器扩展锁文件导致 NSIS 覆盖失败，用户需强杀进程 | 🟡 Open，安装器层面需引入 `Taskkill` 预清理 |
| 5 | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) **SSE 死循环 100% CPU** | 💬4 | **严重回归**：Agent-to-Agent 后进入失控序列化，内存/CPU 暴涨 | 🔴 **Closed** (已在 Beta 3 修复？需验证) |
| 6 | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) **长对话网页端严重卡顿** | 💬3 | **前端性能**：流式渲染导致主线程阻塞，鼠标 2s/帧，需虚拟列表/增量渲染 | 🔴 **Closed** (可能并入 #7129 优化) |
| 7 | [#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129) **长会话+流式渲染掉帧 (WPR 证据)** | 💬2 | **性能基线**：内核级追踪定位到 Chrome 渲染主线程阻塞，非主观感受 | 🟡 Open，需虚拟化/分块渲染方案 |
| 8 | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) **思考过程默认折叠设置** | 💬3 👍1 | **UX 个性化**：参考 Hermes，提供“默认折叠/展开”全局开关 | 🟡 Open，#7163 Session Thinking 可部分缓解 |

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|--------|-------|------|----------|-------------|
| **P0 阻断** | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | Agent-to-Agent 后 SSE 死循环 → 100% CPU / OOM / 服务假死 | Beta 2 全量用户 | ✅ **Closed** (疑似随 Beta 3 修复，需回测) |
| **P0 阻断** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP Server 重启后客户端不自动重连，复用过期 Session ID | 远程 MCP 生产场景 | 🟡 Open，无关联 PR |
| **P1 严重** | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | v1.1.12 内存泄漏 5.5 MB/min → 进程被杀 → 配置损坏 | Windows 长运行用户 | 🔴 **Closed** (根因：异步任务泄漏+HTTP会话不回收，AgentScope 2.0.7 声称修复) |
| **P1 严重** | [#7259](https://github.com/agentscope-ai/QwenPaw/issues/7259) | Windows SiliconFlow 模型下“Thinking”卡死 + 后端内存暴涨 | Windows + 特定 Provider | 🟡 Open，征集复现日志中 |
| **P2 体验** | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) | 长对话 1-2 分钟浏览器卡死，鼠标 2s/帧 | Web Console 重度用户 | 🔴 **Closed** (重复 #7129) |
| **P2 体验** | [#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129) | WPR 证实：长会话流式输出阻塞渲染主线程 | Web Console | 🟡 Open，无 PR |
| **P3 细节** | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | 微信频道“显示思考过程”开关无效 | Channel: WeChat | 🟡 Open |
| **P3 细节** | [#7282](https://github.com/agentscope-ai/QwenPaw/issues/7282) | Markdown 列表垂直间距过大 | Console 渲染 | 🟡 Open |
| **P3 细节** | [#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266) | SubAgent 指定目录 A 却去目录 B 读文件 | 多工作区协作 | 🟡 Open |

---

## 6. 功能请求与路线图信号
| 需求 | Issue/PR | 社区热度 | 纳入可能性 | 备注 |
|------|----------|----------|------------|------|
| **统一工具面板 / Web 预览 / 交互式终端** | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 💬3 | 🟢 **高** | #7274 Creator 1.1.1 已奠基，核心依赖就绪，预计 v2.2 合并 |
| **Session 级思考模式 (Off/Low/Med/High)** | [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | PR 审查中 | 🟢 **高** | 直接响应 #7196，已实现持久化与跨设备同步 |
| **Workspace Skill 预加载策略** | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | 💬4 | 🟡 **中** | 设计清晰，但需配合插件市场权限模型，可能 v2.3 |
| **Webhook 回调 / 异步任务轮询** | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 💬9 👍1 | 🟡 **中** | `good first issue`，架构影响面大，需评估安全边界 |
| **后台任务自动清理/归档** | [#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280) | 💬1 | 🟢 **高** | 低成本 UX 改进，配合 #7263 完成提醒，易落地 |
| **模型选项弹窗替代输入** | [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) | 💬1 | 🟢 **高** | 参考 Hermes 交互，前端组件级改动，阻力小 |
| **皮肤/主题网关方案** | [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) | 💬1 | 🔴 **

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-26

---

## 1. 今日速览

*   **整体活跃度：极高**。过去 24 小时内共有 **100 条动态**（50 Issues + 50 PRs），其中新开/活跃 Issue 38 条，待合并 PR 49 条，显示社区处于密集的并行开发与治理阶段。
*   **核心主题聚焦于“架构治理与安全加固”**。高评分 Issue 多为 RFC（如 #6808 工作流治理、#9103 存储分离、#8396 协议首位化）和安全级 Bug 修复追踪，表明项目正从功能堆砌转向 v0.9.0 里程碑所需的架构收敛与安全基线建设。
*   **PR 队列呈“堆叠式”依赖特征**。多个大型 PR（#10075、#10142、#9935、#9447）形成依赖链，涉及网关配置下发、安全传输、约束系统重构、Provider 错误分类等核心路径，审阅压力集中在少数核心维护者。
*   **跨平台与 CI 稳定性推进显著**。#7461（Windows/macOS CI）、#10350（Windows 受影响测试度量）、#9527（工具链升级 1.98.0）同步推进，基础设施债务偿还明显。
*   **零版本发布**，当前处于 `0.8.4` 维护期向 `0.9.0` 破坏性变更窗口过渡的关键期。

---

## 2. 版本发布

> **今日无新版本发布**。当前最新版本为 `0.8.4`，主分支正积累 v0.9.0 的破坏性变更（认证、网关、安全边界、Provider 协议等）。

---

## 3. 项目进展（今日合并/关闭的关键 PR 与 Issue）

| 编号 | 标题 | 类型 | 影响范围 | 进展意义 |
| :--- | :--- | :--- | :--- | :--- |
| **#10271** | `chore(util): consolidate crate-local floor_char_boundary copies onto std` | **Refactor** | `channels`, `runtime`, `util` | ✅ **已合并**。清理了 3 处 UTF-8 截断审计遗留的重复实现，统一至标准库，消除维护负债。 |
| **#10257** | `[Bug]: cron update --command writes unused column on agent jobs` | **Bug Fix (P1)** | `runtime/daemon`, `cron` | ✅ **已关闭/修复**。修复 Agent 类型 Cron Job 更新命令时错误写入无关字段的数据完整性问题。 |
| **#9663** | `fix(channels): bind Voice Wake to the agent transcription provider` | **Bug Fix (P1)** | `channels`, `runtime` | ✅ **已关闭/修复**。修复语音唤醒硬编码 Channel 别名而非使用 Agent 配置 Provider 的回归问题。 |
| **#9206** | `[Bug]: agent cron runs intermittently resolve workspace_dir to /` | **Bug Fix (S0)** | `runtime/daemon`, `security` | ✅ **已关闭/修复**。**严重安全修复**：修复 Agent Cron 间歇性将工作区解析为根目录 `/` 导致的数据丢失/越权风险。 |
| **#10042** | `bug(ci): MSRV system dependency installation can consume job timeout` | **CI Fix (P2)** | `tooling/ci` | ✅ **已关闭/修复**。缓解 MSRV CI 作业因系统依赖安装超时导致的误报红构建。 |
| **#9769** | `[Task]: make the withheld-capability notice visible when log persistence is disabled` | **Task** | `config`, `observability` | ✅ **已关闭**。解决 `log_persistence=none` 时安全能力隐藏通知丢失的可见性缺口。 |
| **#10058** | `[Bug]: ZeroCode file explorer search mode ignores row and page navigation` | **Bug Fix (P2)** | `zerocode/tui` | ✅ **已关闭/修复**。修复 TUI 文件浏览器搜索模式下键盘导航失效的交互回归。 |
| **#8999** | `[Bug]: ZeroCode streamed user turns look like log/API payloads to small local models` | **Bug Fix (P2)** | `zerocode/tui`, `provider:ollama` | ✅ **已关闭/修复**。优化本地小模型下流式对话渲染格式，提升本地推理体验。 |

> **整体推进评估**：今日 **8 个高优先级 Issue 关闭**，集中修复了 **S0/P1 级安全与数据完整性 Bug**（#9206, #10257, #9663）及 **CI 稳定性**、**TUI 交互回归**。架构重构类 PR（如 #10075, #10142, #9935）仍在深度审阅中，未合入主干。

---

## 4. 社区热点（高讨论度 Issues/PRs 深度分析）

### 🔥 Top 5 高热度 Issues（决策与阻塞点）

| Issue | 评论 | 核心诉求 | 关键阻塞/决策点 |
| :--- | :--- | :--- | :--- |
| **[#6808] RFC: Work Lanes, Board Automation, and Label Cleanup** | 24 | **项目治理标准化**：建立工作分流泳道、看板自动化、标签体系清理。 | **已批准/推进中 (Rev. 26)**。核心维护者 Audacity88 主导，旨在解决维护者手动路由工作负担过重问题，是项目规模化的前置治理动作。 |
| **[#8692] [Tracker]: Maintainer decision queue for RFCs and design issues** | 14 | **决策队列可视化**：建立维护者对 RFC/设计问题的决策追踪单。 | 配合 #6808，解决“谁在什么时间决定什么”的透明度问题，防止决策真空。 |
| **[#9103] RFC: separate authoritative memory storage from optional enrichment connectors** | 14 | **架构边界重构**：将 `memory.backend` 拆分为权威存储 + 可选增强连接器。 | **高风险/需维护者审核**。2026-08-22 维护者接管修订，替代原 Lucid 优先方案。涉及存储层核心契约变更，影响插件生态兼容性。 |
| **[#8396] RFC: Make wire protocol first-class in provider construction and onboarding** | 12 | **Provider 架构统一**：将线协议作为 Provider 构建/入职的一等公民。 | **高风险/需维护者审核**。旨在统一 Anthropic/Ollama/OpenAI 等异构 Provider 的接入复杂度，是 v0.9.0 破坏性变更核心项。 |
| **[#9965] [Task]: harden runtime-written executable test fixtures under the parallel runtime gate** | 9 | **测试基建硬化**：修复并行运行时下写入可执行 Shim 后再生成的测试夹具竞态。 | **进行中/已接受**。针对 `cron::scheduler::tests` 并行化后的不稳定测试，属于 CI 可靠性债务偿还。 |

### 🔥 关键 PR 审阅焦点（堆叠依赖链）

*   **#10075 (XL, Security)**：`fix(runtime): thread live config through gateway chat to the tool registry`。 **SSRF 加固第 3 片**，依赖 #10072 (NAT64 前缀) -> #10070 (基础网关)。解决网关聊天路由下发实时配置至工具注册表，是**安全边界生效的关键链路**。
*   **#10142 (XL, Security/Arch)**：`feat(zerorelay): secure transport with blind relay and native mTLS enrollment`。 **ZeroRelay 安全传输重写**，强制 mTLS、盲中继、CSR 签发。**替代 #9080**，仅聚焦传输层，架构影响面极广。
*   **#9935 (XL, Security)**：`feat(vi): preserve unknown constraint types and read the strictness mode`。 **约束系统前向兼容**，将 `Constraint` 改为开放枚举，防止未知约束类型导致整体反序列化失败。需维护者审核。
*   **#10370 (L, Security)**：`fix(providers): harden Copilot credential cache`。 **高风险凭证持久化修复**，移除可预测的用户名派生临时文件名。**需独立维护者审核 + 全平台 CI 通过**。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 标题 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **S0 (数据丢失/安全)** | **[#9206]** | Agent Cron 间歇性解析 `workspace_dir` 为 `/` | ✅ **Closed** | 隐含修复 |
| **S0 (安全)** | **[#9947]** | Cron 工具未按 Agent 作用域隔离，任意 Agent 可增删改查他人 Job | 🟡 **Open / In Progress** | 无直接 PR (需实现作用域检查) |
| **S1 (工作流阻塞)** | **[#10357]** | 工具执行错误路径丢弃详细错误体，Agent 仅收到 "HTTP 400" | 🟡 **Open / Accepted** | **#10364** (Open, 修复 `execute_one_tool` 错误回退逻辑) |
| **S1 (CI 阻塞)** | **[#10042]** | MSRV CI 系统依赖安装耗尽 20min 超时 | ✅ **Closed** | 隐含修复 (优化安装脚本/缓存) |
| **S2 (行为降级)** | **[#9872]** | Bounded Delegate 目标解析文件系统至委托者而非自身 Workspace | 🟡 **Open / Accepted** | 无直接 PR (沙箱路径解析逻辑缺陷) |
| **S2 (行为降级)** | **[#10257]** | `cron update --command` 在 Agent Job 上写入未使用列 | ✅ **Closed** | 隐含修复 |
| **S2 (行为降级)** | **[#10058]** | ZeroCode 文件浏览器搜索模式忽略行/页导航 | ✅ **Closed** | 隐含修复 |
| **S2 (行为降级)** | **[#8999]** | ZeroCode 流式用户轮次对本地小模型显示为日志/载荷 | ✅ **Closed** | 隐含修复 |
| **S3 (次要)** | **[#10103]** | ZeroCode Health 面板法语/西班牙语标签宽度超限导致值错位 | 🟡 **Open / In Progress** | 无直接 PR (i18n 布局硬编码) |

> **稳定性趋势**：**S0 级安全 Bug (#9206) 已修复关闭**，但 **#9947 (Cron 跨 Agent 越权) 仍在进行中**，属于多租户/多 Agent 场景下的严重逻辑漏洞，建议优先级拉满。工具错误信息丢失 (#10357) 已有针对性 Fix PR (#10364)，验证后可快速闭环。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 成熟度 | 纳入下版本 (v0.9.0) 概率 | 依据 |
| :--- | :--- | :--- | :--- | :--- |
| **[#10360] RFC: opt-in household edge mesh** | 家庭边缘网格：拉取式 Worker + 签名收据，跨设备算力池化。 | 🌱 **RFC 初稿** | **极低** | 架构变更巨大，涉及 P2P、签名、调度，属于 v0.10+ 战略探索。 |
| **[#10346] RFC: Gateway/Channels shared MCP registry caching** | 网关/通道共享心跳 Worker 的 MCP 注册表缓存模式。 | 🌱 **RFC 初稿** | **中** | 解决单进程 3 次重复连接 MCP 服务器的资源浪费，属于运行时效能优化，PR 实现相对隔离。 |
| **[#10340] Tracker: Implement bounded telemetry pilot** | 有界遥测试点实施追踪 (源自 #9621)。 | 🟢 **Tracker 建立** | **高** | 已有政策授权 (#9621)，属于 v0.9.0 可观测性基线建设，执行层面推进。 |
| **[#10297] Feature: Refresh agent tool registries after structural config changes** | 结构化配置变更后热刷新 Agent 工具注册表，避免重启 Daemon。 | 🟡 **Open** | **高** | 用户体验痛点明确，配合 #10075 (live config threading) 可形成闭环，技术路径清晰。 |
| **[#10356] Feature: Add AnySearch web search provider** | 新增 AnySearch 作为显式可选 Web 搜索 Provider。 | 🟢 **PR Open** | **高** | PR 已开 (#10356)，功能边界清晰（可选 Provider），低耦合，易合入。 |
| **[#10351] Feature: Enforce execution-tree iteration budgets** | 强制执行树迭代预算所有权 (关联 #9323)。 | 🟢 **PR Open** | **高** | **核心安全/资源控制特性**，PR 已开且 CI 绿，解决无限递归/资源耗尽风险，v0.9.0 必备。 |
| **[#10369] Feat: Bound skill HTTP egress** | 技能 HTTP 出站绑定：参数编码、目标验证、地址钉死、禁代理/重定向、响应限 1Mi

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*