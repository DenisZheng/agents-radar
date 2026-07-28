# AI CLI 工具社区动态日报 2026-07-28

> 生成时间: 2026-07-28 01:57 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 | 2026-07-28

---

## 1. 生态全景

当前 AI CLI 工具生态呈现 **“头部稳健迭代、腰部激进重构、长尾垂直深耕”** 的三层格局。  
**头部（Claude Code、OpenAI Codex、Gemini CLI）** 聚焦企业级稳定性、跨平台一致性与计费透明度，修复周期以周为单位，社区呼声已从“功能缺失”转向“体验打磨与信任修复”。  
**腰部（OpenCode、GitHub Copilot CLI、Qwen Code）** 处于架构重构与协议标准化（ACP/MCP）的密集期，版本发布频次高（日级/双日级），但回归性 Bug 频发，处于“快速迭代换挡阵痛期”。  
**长尾/垂类** 则在特定场景构建护城河：Kimi Code 死磕 Hook 可靠性与 Windows 编码兼容，Pi 推进扩展系统与会话基建，DeepSeek TUI 以 v0.9.2 RC 冲刺商业化就绪。  
**核心共识**：所有工具均在补齐 **Windows 原生体验、会话/配置跨设备同步、计费与用量透明化、多智能体编排稳定性** 四大硬指标，且均引入自动化基准测试与 CI 熔断机制作为交付门禁。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 新增 Issues (估算) | 合并/关闭 PRs | 核心动态关键词 | 活跃度等级 |
|------|--------------|-------------------|---------------|----------------|------------|
| **Claude Code** | 无 | ~50 (全量) | 6 (Open) | Windows ARM64、GitHub Connector 失效、计费事故对账、配置同步 | 🟡 维护期 |
| **OpenAI Codex** | 2 Alpha (v0.146.0-a12/13) | ~30+ | **35** | Windows 安装/沙箱/GPU 全链路修复、/undo 高呼声、多智能体配置保真 | 🟢 高频迭代 |
| **Gemini CLI** | 1 Nightly (v0.54.0) | ~10+ | 10+ | Subagent 恢复逻辑、Generalist 卡死、安全修复 (Shell 注入、OAuth)、多模型接入 | 🟢 高频迭代 |
| **GitHub Copilot CLI** | 1 Stable (v1.0.76-0) | ~15+ | 5 (有效) | MCP 缓存加速、Autopilot 默认行为变更、Windows Terminal 渲染回归、ACP 协议补齐 | 🟡 稳健发布 |
| **Kimi Code CLI** | 无 | 4 (全量) | 4 | Hook GC 丢失、VS Code 审批渲染卡死、Windows GBK 编码崩溃、MCP Schema 规范化 | 🟡 缺陷驱动 |
| **OpenCode** | **2 Stable (v1.18.6/7)** | ~15+ | **13+** | 桌面端渲染崩溃、订阅计费不同步、AutoScroller 依赖缺失、App 层控制器化重构 (9 PR) | 🟢 架构重构期 |
| **Pi** | 无 | 50 (更新) | 25 | 多提供商兼容、扩展 API (Scoped Models)、SQLite FTS5 搜索、会话去重、Markdown 渲染崩溃 | 🟢 基建密集期 |
| **Qwen Code** | 2 Benchmark Prerelease | **12 (CI 自动创建)** | 10+ | CI E2E 抖动规模化、企业外部记忆 Profile、长上下文稳定性、子代理死锁 | 🟡 CI 治理期 |
| **DeepSeek TUI** | 无 (v0.9.2 RC 集成分支就绪) | 10+ | **10 (大型特性合入)** | v0.9.2 RC 冲刺、计费透明化、死代码预算、rio-vt 测试迁移、Windows CRLF | 🟢 发布冲刺期 |

> **数据说明**：Issues 数基于报告中“社区热点 Top 10 + 趋势提炼代表 Issue”估算；PR 数为报告“重要 PR 进展”条数。Claude Code、Qwen Code 无明确合并 PR 数，标注为 Open 状态。

---

## 3. 共同关注的功能方向（跨工具高频诉求）

| 功能方向 | 涉及工具 (具体诉求) | 成熟度现状 |
|----------|-------------------|------------|
| **Windows 原生体验补齐** | **Claude Code** (ARM64 VM、MSIX 崩溃、登录循环)、**OpenAI Codex** (安装器、沙箱、GPU、状态持久化)、**GitHub Copilot CLI** (Terminal 渲染白屏/内容消失)、**Kimi Code** (GBK 编码启动崩溃)、**DeepSeek TUI** (CRLF 编辑失败、Shell 交互阻塞) | 🔴 **全生态痛点**，头部工具阻塞企业采用，腰部工具高频回归 |
| **会话/配置跨设备同步** | **Claude Code** (账号级设置同步 #22648 高赞)、**OpenCode** (会话迁移 #29703、多实例隔离 #39181)、**Gemini CLI** (隐含需求)、**Pi** (会话级模型默认临时化 #5263) | 🟡 **架构级欠账**，Claude Code 仍混合可迁移/本地态，OpenCode 开始支持路径迁移 |
| **计费/用量透明化与信任修复** | **Claude Code** (7.17 计费事故 #81703、Usage 泄漏 #81540)、**OpenAI Codex** (用量统计异常 #35696、子智能体配额)、**GitHub Copilot CLI** (重启扣 174 积分 #3886、ACP 缺 usage_update)、**OpenCode** (订阅扣款成功显示余额不足 #37790、/usage 命令 #9281)、**DeepSeek TUI** (双计价体系、缓存未计价、CNY 汇率 #4939) | 🔴 **信任红线**，头部工具发生实锤事故，腰部工具协议层缺失计量字段 |
| **多智能体/子代理编排稳定性** | **OpenAI Codex** (配置保真 #35653/35656、子选择器后台刷新)、**Gemini CLI** (Subagent 恢复误报 #22323、Generalist 卡死 #21409、工具数超限 #24246)、**Qwen Code** (子代理问用户死锁 #7835、YOLO 长流重试 #7832)、**OpenCode** (模型无限循环调用 #28596) | 🟡 **核心差异化战场**，从“能跑通”向“生产级可靠”演进 |
| **协议标准化与 IDE 集成 (ACP/MCP)** | **GitHub Copilot CLI** (ACP 缺 usage_update/contextTier #4233/4174)、**OpenCode** (MCP env vs environment Schema #39135)、**Gemini CLI** (MCP OAuth 刷新修复 #28481)、**Qwen Code** (GitLab 轮询适配器 #7862、外部上下文 Profile #7585)、**Kimi Code** (MCP Schema 规范化 #2539) | 🟢 **生态互通基建**，ACP 成事实标准，MCP 向企业级扩展 |
| **长上下文/长会话稳定性** | **OpenAI Codex** (压缩静默失败 #25619、元数据覆盖)、**Gemini CLI** (Auto Memory 无限重试 #26522)、**Qwen Code** (>150k tokens ECONNRESET #7831、Skill 永久驻留 #6762)、**Pi** (上下文文件去重 #7171、SQLite FTS5 搜索 #7081) | 🟡 **技术深水区**，连接重置、压缩丢失、Token 膨胀三大难题并存 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 | 当前战略重心 |
|------|----------|----------|--------------|--------------|
| **Claude Code** | 企业级标杆、Anthropic 生态入口 | 专业开发团队、企业客户 | TypeScript/Node.js、Cowork VM 协作、强调“配置随人走” | **稳定性与信任修复**：Windows ARM64、Connector 可靠性、计费对账、配置同步标准化 |
| **OpenAI Codex** | 研发效能实验场、多智能体前哨 | 早期采纳者、AI 原生工作流探索者 | Rust 核心、沙箱隔离、线程历史投影、多智能体原生架构 | **Windows 生产级就绪**：安装/沙箱/GPU/持久化四件套、/undo 补齐、ACP 对齐 |
| **Gemini CLI** | Google 生态集成、Agent 编排平台 | Google Cloud 用户、多模型混合部署场景 | Go/TypeScript 混合、A2A 协议、Subagent 体系、扩展点丰富 | **Agent 可靠性与开放生态**：Subagent 状态机、开放模型接入、安全加固、评测体系 |
| **GitHub Copilot CLI** | GitHub 原生开发流伴侣 | GitHub 重度用户、Copilot 订阅者 | Node.js、ACP 服务端、深度绑定 GitHub API (Issue/PR/Action) | **协议补齐与模式稳定**：ACP usage_update、Plan/Autopilot 状态机、Windows Terminal 渲染 |
| **Kimi Code CLI** | 国产模型落地、Hook 驱动自动化 | 国内开发者、Moonshot 生态用户 | TypeScript、Hook 机制核心、VS Code 扩展优先 | **核心机制硬化**：Hook GC 修复、VS Code 审批渲染、Windows 编码、MCP 标准化 |
| **OpenCode** | 可扩展桌面端、插件化平台 | 追求极致定制化的个人/小团队 | Go + TypeScript (Tauri)、插件/Provider/Session 控制器化架构 | **v2 架构落地与商业化**：控制器化重构、订阅计费同步、桌面端渲染稳定性 |
| **Pi** | 可编程智能体运行时、扩展优先 | 高级用户、扩展开发者、多模型聚合场景 | Go、扩展系统核心、SQLite FTS5、多提供商统一抽象 | **基建完善与生态开放**：Scoped Models API、会话搜索/去重、Markdown 渲染安全、提供商兼容 |
| **Qwen Code** | 企业级知识工程、长上下文代码生成 | 企业 R&D、阿里云/通义生态用户 | TypeScript、MCP/外部记忆 Profile、DSW 基准测试体系 | **企业集成与 CI 治理**：外部记忆标准、GitLab 适配、长上下文稳定、E2E 测试熔断 |
| **DeepSeek TUI** | 极致终端体验、商业化就绪 | 终端重度用户、追求原生 TUI 体验者 | Rust、rio-vt PTY、视觉系统自研、计费路由引擎 | **v0.9.2 发布冲刺**：计费透明、死代码治理、Windows/SSH 兼容、Runner 入网 |

---

## 5. 社区热度与成熟度评估

| 维度 | 第一梯队 (高热度/高成熟) | 第二梯队 (高热度/重构期) | 第三梯队 (垂直深耕/发布前) |
|------|--------------------------|--------------------------|----------------------------|
| **Issue 讨论深度** | Claude Code (百条长贴)、OpenAI Codex (/undo 362👍) | OpenCode (订阅/渲染连环贴)、Gemini CLI (Subagent 核心缺陷) | DeepSeek TUI (计费/死代码技术贴)、Pi (扩展 API 设计讨论) |
| **PR 合并频次/规模** | OpenAI Codex (35/日)、OpenCode (13/日、含 9 重构 PR) | Gemini CLI (10+、安全/核心修复)、Pi (25、含 FTS5 等大特性) | Qwen Code (10+、多为 CI/企业特性)、Kimi Code (4、缺陷修复) |
| **版本发布节奏** | OpenAI Codex (日级 Alpha)、OpenCode (双版本/日)、GitHub Copilot (周级 Stable) | Gemini CLI (日级 Nightly)、Qwen Code (Benchmark Prerelease) | Claude Code (月级 Stable)、Kimi Code (无)、DeepSeek TUI (RC 冲刺) |
| **企业就绪信号** | GitHub Copilot (ACP/计费透明)、Claude Code (除计费外核心稳) | OpenCode (订阅同步阻塞)、Gemini CLI (Agent 不稳)、Qwen Code (CI 抖动) | DeepSeek TUI (计费/Windows 阻塞)、Pi (扩展生态起步)、Kimi Code (Hook/IDE 阻塞) |
| **社区贡献者多样性** | OpenCode (社区贡献项目选择器)、Pi (外部 PR 多)、OpenAI Codex (copyberry[bot] 自动化) | GitHub Copilot (文档类 PR 主导)、Gemini CLI (

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-28）

---

## 1. 热门 Skills 排行（高关注度 PR Top 8）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **[skill-creator 评估链路修复 #1298](https://github.com/anthropics/skills/pull/1298)** | 修复 `run_eval.py` 误报 0% recall、Windows 管道读取、触发检测、并行 worker 等核心缺陷 | **评论最密集**，关联 Issue #556/1169/1323 形成连锁追踪；被视为“技能创建工具链能否落地”的关键阻塞 | 🟢 OPEN |
| 2 | **[document-typography #514](https://github.com/anthropics/skills/pull/514)** | 解决 AI 生成文档的孤行/寡妇行、编号错位、标点挤压等排版质量问题 | “每个 Claude 生成的文档都需要”; 被视为文档类技能的**基础设施级补丁** | 🟢 OPEN |
| 3 | **[testing-patterns #723](https://github.com/anthropics/skills/pull/723)** | 全栈测试模式库：Testing Trophy、AAA、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 覆盖面最广的**测试标准化技能**；社区期待成“内置最佳实践” | 🟢 OPEN |
| 4 | **[self-audit #1367](https://github.com/anthropics/skills/pull/1367)** | 交付前机械校验 + 四维推理审计（严重性优先）；通用、无技术栈绑定 | **元认知类技能**新范式；引发“技能是否应具备自我验证能力”讨论 | 🟢 OPEN |
| 5 | **[pyxel #525](https://github.com/anthropics/skills/pull/525)** | 接入 Pyxel 复古游戏引擎 MCP，支持写→运行→捕获→审查→迭代闭环 | **游戏/教学/原型开发**新赛道；作者为 Pyxel 原作者，生态互认度高 | 🟢 OPEN |
| 6 | **[skill-quality-analyzer & skill-security-analyzer #83](https://github.com/anthropics/skills/pull/83)** | 从结构、文档、示例、资源、安全五维度打分的元技能 | 回应 Issue #492 **命名空间信任危机**；被视为“技能市场准入门槛” | 🟢 OPEN |
| 7 | **[plan-file-hygiene #1479](https://github.com/anthropics/skills/pull/1479)** | 解决规划产物无生命周期、无限堆积的“卫生问题” | 源自 Issue #1417 高赞讨论；**工程化治理**典型场景 | 🟢 OPEN |
| 8 | **[ODT 技能 #486](https://github.com/anthropics/skills/pull/486)** | OpenDocument 创建/填充/解析/转 HTML，覆盖 LibreOffice/ISO 标准流程 | 企业级文档互操作刚需；与 docx/pdf 技能形成**办公三件套** | 🟢 OPEN |

> ⚠️ **共性**：前 20 条 PR 中 **7 条集中于 skill-creator 工具链修复**（#1298, #1099, #1050, #1323, #362, #361, #539），说明“技能开发体验”才是当前最大痛点。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 | 热度指标 |
|----------|------------|----------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍) | 社区技能冒充 `anthropic/` 命名空间，导致权限滥用风险 | 🔥 **最高** |
| **组织级技能分发** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍) | 避免“下载→发文件→手动上传”原始流程；需共享库/一键分享链接 | 🔥 高 |
| **技能创建工具链可用性** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍)<br>[#1169](https://github.com/anthropics/skills/issues/1169) (3💬, 1👍)<br>[#1061](https://github.com/anthropics/skills/issues/1061) (3💬, 2👍) | `run_eval` 全平台 0% recall、Windows 不可用、编码/子进程假设全是 Unix-first | 🔥 高 |
| **Token/上下文治理** | [#1487](https://github.com/anthropics/skills/issues/1487) (4💬)<br>[#1329](https://github.com/anthropics/skills/issues/1329) (9💬) | 单技能注入 156k tokens 耗尽窗口；需符号化压缩记忆 | 📈 上升 |
| **治理/合规类技能** | [#412](https://github.com/anthropics/skills/issues/412) (6💬)<br>[#1175](https://github.com/anthropics/skills/issues/1175) (4💬) | Agent 治理策略、SharePoint 权限内嵌技能、审计追踪 | 📈 新兴 |
| **互操作与标准化** | [#16](https://github.com/anthropics/skills/issues/16) (4💬)<br>[#29](https://github.com/anthropics/skills/issues/29) (4💬) | 技能暴露为 MCP；Bedrock/Azure 等非 Anthropic 托管环境兼容 | 📈 长尾 |
| **重复/冲突治理** | [#189](https://github.com/anthropics/skills/issues/189) (6💬, 9👍) | `document-skills` 与 `example-skills` 安装重复内容污染上下文 | 🛠️ 维护性 |

---

## 3. 高潜力待合并 Skills（活跃讨论 + 明确落地路径）

| PR | Skill | 合并信号 | 预估落地窗口 |
|----|-------|----------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评估链路全链路修复** | 关联 3 个高热 Issue，官方工具链阻塞项，**必合** | 🔴 近期（阻塞发布） |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 通用刚需、无依赖、单文件可用、作者持续响应 | 🟡 1-2 周 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 覆盖面广、社区呼声高、结构完整、示例丰富 | 🟡 2-3 周 |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | 补齐办公三件套、企业级需求明确、MCP 生态就绪 | 🟡 2-3 周 |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / security-analyzer** | 直接回应 #492 安全危机、市场准入基建属性 | 🟡 1-2 周 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | 源自高赞 Issue、解决真实工程痛点、实现简洁 | 🟢 1 周内 |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 上游作者亲提、MCP 现成、教学/原型场景鲜明 | 🟢 1-2 周 |

> 💡 **观察**：除工具链修复外，**文档处理（typography/ODT/PDF/DOCX）**、**测试标准化**、**元技能（质量/安全/审计/卫生）**是近期合并概率最高的四大簇。

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是：把“技能开发工具链”修好（跨平台、可评估、可迭代），并建立“技能分发与信任机制”（命名空间隔离、组织级共享、质量准入），使 Skills 从“个人脚本集合”进化为“可治理、可复用、可商业化的工程化资产层”。**

---

# Claude Code 社区动态日报 | 2026-07-28

---

## 1. 今日速览

- **无新版本发布**，社区焦点集中在**长期未决的高热度 Issue**与**近期出现的回归性 Bug**。  
- **Windows ARM64 兼容性**（#40198，持续 4 月）、**GitHub Connector 全量失效**（#71542）、**账号级配置同步**（#22648）三大议题合计超 130 条评论，反映跨平台稳定性与多设备体验是当前核心痛点。  
- **7 月 17 日计费事故**（#81703）引发用户对订阅额度扣算逻辑的信任危机，官方尚未给出最终对账方案。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 标签/领域 | 评论/👍 | 核心问题 | 关注理由 |
|---|-------|-----------|---------|----------|----------|
| 1 | [#40198](https://github.com/anthropics/claude-code/issues/40198) | `bug` `platform:windows` `area:cowork` | 66 / 13 | **Cowork VM 在 Windows ARM64 (Snapdragon) 无法启动** | 持续 4 月未修复，阻断 ARM 设备协作功能，硬件普及度随骁龙 X 系列上升 |
| 2 | [#71542](https://github.com/anthropics/claude-code/issues/71542) | `invalid` (疑似误标) | 43 / 37 | **GitHub Connector 连接成功但全量仓库不可访问** | 近期回归，影响所有公私有仓库，账号级故障，团队协作受阻 |
| 3 | [#22648](https://github.com/anthropics/claude-code/issues/22648) | `enhancement` `area:auth` `area:core` | 24 / 43 | **账号级设置跨设备同步** | 高赞长期需求，关联 4 个重复 Issue，多机开发者刚需 |
| 4 | [#11455](https://github.com/anthropics/claude-code/issues/11455) | `enhancement` `has repro` `area:core` | 23 / 24 | **Session Handoff / 会话连续性支持** | 从 2025-11 持续跟进，涉及上下文传递、远程控制等核心工作流 |
| 5 | [#81703](https://github.com/anthropics/claude-code/issues/81703) | `bug` | 7 / 0 | **7.17 计费事故：套餐额度内仍扣除付费额度 $704.71** | 官方已承认事故，用户需对账退款，信任度风险高 |
| 6 | [#61172](https://github.com/anthropics/claude-code/issues/61172) | `bug` `has repro` `platform:macos` `area:cli` | 7 / 12 | **`/clear` 继承旧会话名导致 `/resume` 重名** | 破坏会话管理可靠性，复现步骤清晰 |
| 7 | [#79366](https://github.com/anthropics/claude-code/issues/79366) | `bug` `platform:macos` `area:agents` | 6 / 4 | **Worktree 会话复用旧目录而非新建** | 隔离机制失效，可能导致跨任务污染 |
| 8 | [#78946](https://github.com/anthropics/claude-code/issues/78946) | `bug` `has repro` `platform:windows` `area:auth` | 6 / 3 | **Windows 登录循环** | 阻断新用户/重装用户入口，首因体验严重受损 |
| 9 | [#81398](https://github.com/anthropics/claude-code/issues/81398) | `bug` `platform:windows` | 3 / 0 | **MSIX 版打开浏览器面板导致 GPU 进程崩溃 (exit 101457950)** | 触发重装循环，Windows 应用商店分发版本可用性存疑 |
| 10 | [#81813](https://github.com/anthropics/claude-code/issues/81813) | `bug` | 2 / 0 | **自动生成会话名与无关项目文件同名，且跨会话复用** | 今日新开，揭示命名逻辑耦合工作目录文件名，易混淆 |

> **备注**：#81463（模型人格异常翻转）、#57902（Opus 4.7/4.8 指令遵循退化）虽评论较少，但涉及**模型行为一致性**，建议模型团队关注。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#81673](https://github.com/anthropics/claude-code/pull/81673) | OPEN | `init-firewall.sh`：可选域名解析失败不再中止整个防火墙初始化 | DevContainer 启动稳健性，修复 #55623 |
| 2 | [#81672](https://github.com/anthropics/claude-code/pull/81672) | OPEN | `hookify` 包导入不再依赖安装目录名为 `hookify` | Marketplace 插件安装兼容性，修复 #69665 #81448 |
| 3 | [#81670](https://github.com/anthropics/claude-code/pull/81670) | OPEN | 1) `hooks.json` 中 `${CLAUDE_PLUGIN_ROOT}` 加引号支持含空格路径 2) 示例前缀规范化 | Windows 路径兼容、Hook 可用性，修复 #78490 #79143 |
| 4 | [#81576](https://github.com/anthropics/claude-code/pull/81576) | OPEN | 修正 `plugins/README.md` 中 `security-guidance` 条目：Hook 类型与模式数量 | 文档准确性，避免开发者误用 |
| 5 | [#81540](https://github.com/anthropics/claude-code/pull/81540) | OPEN | **自动化修复 Usage 泄漏** (Atlas 2 生成，悬赏 $200) | 计费/用量核算关键路径，关联 #80705 |
| 6 | [#20448](https://github.com/anthropics/claude-code/pull/20448) | OPEN | 新增 `web4-governance` 插件：T3 信任张量、实体见证、R6 审计追踪 | AI 治理/合规生态扩展，长周期 PR 今日更新 |

> **观察**：近 24 h PR 多为**工程修复与插件生态完善**，无重大功能合入；#81540 为自动化修复首例，值得跟踪合并质量。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **多设备/跨平台状态同步** | #22648, #81391, #81392, #81568 | ⭐⭐⭐⭐⭐ | 配置、会话读态、项目身份、自动记忆均需账号级漫游 |
| **会话全生命周期管理** | #11455, #61172, #79366, #81813 | ⭐⭐⭐⭐ | 连续性、命名、隔离、恢复——CLI 与 Desktop 一致性缺口大 |
| **Windows 原生体验补齐** | #40198, #78946, #70200, #81398 | ⭐⭐⭐⭐ | ARM64、登录、子进程闪窗、MSIX 崩溃——阻碍企业采用 |
| **Connector/集成可靠性** | #71542, #75233, #79319, #57882 | ⭐⭐⭐⭐ | GitHub、MCP、Routines、Android 附件——跨表面同步失效频发 |
| **计费/额度透明化** | #81703, #79773, #81540 | ⭐⭐⭐⭐ | 事故对账、升级生效延迟、Usage 泄漏——信任基石 |
| **本地化/无障碍** | #65963, #77394, #70368 | ⭐⭐⭐ | i18n、浅色主题白字、Markdown 标题层级视觉分级 |
| **插件/治理生态** | #20448, #81670, #81672, #81576 | ⭐⭐⭐ | Hook 机制成熟度、Marketplace 分发、文档同步 |

---

## 6. 开发者关注点·痛点总结

1. **“配置随人走”仍是最大单点故障**  
   - `~/.claude` 混合了可迁移配置与机器本地态（缓存、会话、日志），缺乏官方分离方案或 `.gitignore` 模板（#81392, #22648）。

2. **Windows 非 x64 仍是“二等公民”**  
   - ARM64 VM 启动失败 4 月、MSIX GPU 崩溃重装循环、子进程闪窗、登录循环——企业端 Surface/骁龙设备无法落地（#40198, #81398, #70200, #78946）。

3. **Connector 回归频发，缺乏健康度仪表盘**  
   - GitHub Connector 全量失效、Routines 连接器状态不一致、Android 图片不传——集成测试与发布门禁亟需加强（#71542, #79319, #57882）。

4. **计费事故暴露额度核算黑盒**  
   - 7.17 事故导致套餐内用量计入付费额度，Max 20x 升级未实时生效，Usage 泄漏需外部工具修复——建议提供**用量实时 API 与对账导出**（#81703, #79773, #81540）。

5. **会话模型易碎：命名、上下文、隔离三重隐患**  
   - `/clear` 污染名称、Worktree 复用旧目录、自动命名撞车文件名——CLI 与 Desktop 共享核心逻辑但表现不一（#61172, #79366, #81813）。

6. **模型行为长尾风险**  
   - Opus 4.7/4.8 指令遵循退化、人格翻转——虽非 CLI 代码层 Bug，但直接影响开发者对工具链的信任（#57902, #81463）。

---

> **下一步建议**：  
> - **P0**：Windows ARM64 VM 修复、GitHub Connector 回滚/热修复、7.17 计费对账公告。  
> - **P1**：推进 `~/.claude` 可迁移子集标准化，输出官方同步方案或 CLI 命令（`claude config sync`）。  
> - **

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-07-28

---

## 1. 今日速览

- **版本迭代**：连续发布两个 Rust 端 Alpha 版本（`0.146.0-alpha.12/13`），侧重于沙箱、多智能体、Windows 兼容性与日志基础设施的底层修复。  
- **社区焦点**：Windows 桌面端稳定性问题集中爆发（安装、沙箱、GPU 崩溃、状态持久化），`/undo` 命令回归呼声极高（362 👍），VS Code 扩展工作区隔离需求持续升温。  
- **工程动向**：35 个 PR 在 24h 内合并/关闭，`copyberry[bot]` 批量落地线程历史投影、多智能体配置保真、Windows 执行让步阈值、网络代理规范化等核心基建。

---

## 2. 版本发布

| 版本 | 说明 | 链接 |
|------|------|------|
| `rust-v0.146.0-alpha.13` | 第 13 次 Alpha，包含 `alpha.12` 以来的累积修复 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.13) |
| `rust-v0.146.0-alpha.12` | 第 12 次 Alpha，主攻沙箱配置加载、多智能体设置保真、日志客户端 SQLite 路径解析 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.12) |

> **关键变更点**（从 PR 反推）：  
> - `codex sandbox` 支持云端托管配置（#35685）  
> - Windows `exec_command` 最小让步时间提升至 10 s（#35670）  
> - 线程历史投影保留原始时间戳（#35689），解决恢复会话元数据丢失  
> - `crossterm` 依赖切换至 OpenAI OSS Fork（#35688），规避上游阻塞  

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 👍/评论 | 核心诉求 | 为什么重要 |
|---|------|------|---------|----------|------------|
| [#9203](https://github.com/openai/codex/issues/9203) | **恢复 `/undo` 命令** | OPEN | 362 / 65 | 误删未跟踪文件、未提交改动无法回滚 | **全平台最高呼声**，关乎数据安全与用户信任 |
| [#32149](https://github.com/openai/codex/issues/32149) | **Windows 安装在 UAC 前失败，双通道均不可用** | OPEN | 6 / 27 | 安装器在弹出 UAC 前即崩溃 | 阻断 Windows 新用户入口，属 P0 阻塞级 |
| [#34133](https://github.com/openai/codex/issues/34133) | **页面截图触发 GPU 进程崩溃（Code Integrity 拦截 `vk_swiftshader.dll`）** | OPEN | 0 / 24 | 内嵌浏览器截图导致整机卡死/退出 | Windows 桌面端核心体验破坏，涉及签名/沙箱策略 |
| [#25319](https://github.com/openai/codex/issues/25319) | **VS Code 扩展：聊天历史按工作区隔离** | OPEN | 48 / 18 | 多项目并行时上下文串扰 | 企业级/多仓开发刚需，影响团队采纳率 |
| [#30712](https://github.com/openai/codex/issues/30712) | **Windows `apply_patch` 因分裂可写根失效，回退 PowerShell 写文件** | OPEN | 13 / 15 | 沙箱路径映射破坏安全编辑路径 | 绕过沙箱 = 安全倒退，阻碍企业合规采用 |
| [#35352](https://github.com/openai/codex/issues/35352) | **嵌入浏览器 GPU 崩溃导致桌面端直接退出** | OPEN | 0 / 12 | 无符号 SwiftShader 回退被拦截 | 与 #34133 同根，需统一 GPU 进程存活策略 |
| [#26990](https://github.com/openai/codex/issues/26990) | **Windows 本地状态断电不安全：pins/projects 丢失、配置回滚、未来时间戳** | OPEN | 0 / 8 | 写入非原子、无 fsync、时间校验缺失 | 数据完整性底线，影响长期可靠性 |
| [#15807](https://github.com/openai/codex/issues/15807) | **VS Code 插件无法通过 `Codex: New Codex Agent` 打开多窗口** | OPEN | 5 / 6 | 多实例并行开发受阻 | 并行工作流刚需，macOS 高复现 |
| [#33088](https://github.com/openai/codex/issues/33088) | **打开设置页即崩溃** | OPEN | 1 / 6 | 设置页面渲染/数据加载异常 | 核心入口不可用，macOS 复现 |
| [#25619](https://github.com/openai/codex/issues/25619) | **压缩失败时 `run_turn` 静默返回 `null`，导致 `turn/completed` 丢失错误上下文** | OPEN | 0 / 5 | 早期返回路径未发射 `EventMsg::Error` | 可观测性缺口，调试压缩/上下文丢失极难 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心变更 | 影响面 |
|---|------|------|----------|--------|
| [#35695](https://github.com/openai/codex/pull/35695) | **日志客户端遵循配置的 SQLite home** | CLOSED | `logs_client` 迁移进 `codex-cli`，读取 `sqlite_home`/`CODEX_SQLITE_HOME` | 运维/调试工具链一致性 |
| [#35693](https://github.com/openai/codex/pull/35693) | **后台刷新子智能体选择器** | CLOSED | 避免阻塞终端输入、修复缓存漏掉后代线程 | TUI 响应速度、多智能体可用性 |
| [#35691](https://github.com/openai/codex/pull/35691) | **关系列表纳入空预览线程** | CLOSED | 直系/后代列表不再过滤空预览，全局列表保持过滤 | 线程树完整性、恢复会话准确性 |
| [#35689](https://github.com/openai/codex/pull/35689) | **线程历史投影保留项时间戳** | CLOSED | `ThreadHistoryItemChange` 增加可选开始/完成时间戳 | 会话恢复、审计、压缩一致性 |
| [#35688](https://github.com/openai/codex/pull/35688) | **`crossterm` 补丁指向 OpenAI OSS Fork** | CLOSED | 依赖锁定自有分支，刷新 Cargo/Bazel/deny 允许列表 | 供应链可控、规避上游破坏性变更 |
| [#35685](https://github.com/openai/codex/pull/35685) | **`codex sandbox` 加载云端托管配置** | CLOSED | `--include-managed-config` 引导云配置包，透传至沙箱配置 | 企业策略下发、沙箱标准化 |
| [#35678](https://github.com/openai/codex/pull/35678) | **跨恢复保留分页线程元数据** | CLOSED | 用 SQLite 持久化预览/标题/首条用户消息，防止有界后缀覆盖 | 长会话恢复保真 |
| [#35675](https://github.com/openai/codex/pull/35675) | **并行准备 MCP 与插件推荐** | CLOSED | 发现 MCP 与请求插件推荐并行，降低首轮延迟 | 启动/首轮性能 |
| [#35670](https://github.com/openai/codex/pull/35670) | **Windows `exec` 让步下限提至 10 s** | CLOSED | 钳制初始 yield ≥10 s，工具描述/测试同步更新 | Windows 长命令稳定性、CI 通过率 |
| [#35655](https://github.com/openai/codex/pull/35655) | **中断非 TTY Windows 进程** | CLOSED | 非 TTY 路由 Ctrl-C 至现有终止管道，不再报 “unsupported” | Windows 沙箱中断可靠性 |

---

## 5. 功能需求趋势（从全量 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区热度信号 | 判断依据 |
|----------|------------|--------------|----------|
| **Windows 桌面端生产级稳定性** | #32149, #34133, #35352, #30712, #33732, #26990 | 6 个高热 Issue、涵盖安装/沙箱/GPU/持久化/性能 | Windows 成为阻碍企业落地的首要短板 |
| **撤销/时光机能力** | #9203 (362 👍) | 单 Issue 点赞数碾压全库 | 数据安全红线，跨平台通用刚需 |
| **IDE 扩展工作区感知与多实例** | #25319 (48 👍), #15807 | 两大 VS Code 痛点长期未闭 | 团队协作/多仓并行场景刚性 |
| **模型容量错误自动重试与意图保持** | #22390, #32020, #31278, #33878 | 4 个增强类 Issue 持续更新 | 后端波动不应转嫁给用户决策 |
| **多智能体/子智能体生命周期与配置保真** | #25990, #34700, #35653, #35656 | 多 PR 同步落地配置层、继承测试 | 架构向多智能体演进，配置一致性成关键 |
| **可观测性与 Token 用量透明** | #35696, #35463, #30452 | 用量统计异常、UI 入口隐蔽 | 成本控制与合规审计需求上升 |
| **压缩/上下文管理鲁棒性** | #25619, #35669, #35678 | 压缩循环、状态丢失、元数据覆写 | 长任务稳定性核心依赖 |

---

## 6. 开发者关注点（痛点与高频诉求）

1. **Windows “死当前”体验**  
   - 安装器、沙箱、GPU、状态持久化、输入延迟、设置页崩溃**全链路失守**；开发者被迫回退 CLI 或 WSL，信心受损。

2. **“一次性操作不可逆”焦虑**  
   - `/undo` 缺位导致未提交代码/未跟踪文件误删零恢复手段，**362 👍 直指核心信任**。

3. **多工作区/多实例隔离缺失**  
   - VS Code 扩展聊天历史全局共享、无法开多窗口，违背“一个窗口一个上下文”心智模型。

4. **沙箱与安全编辑路径在 Windows 上失效**  
   - `apply_patch` 走不通 → 回退 PowerShell 直接写盘，**安全合规与自动化能力双输**。

5. **模型容量错误把用户当运维**  
   - “请换模型”死胡同、无自动重试、无意图保持，长任务中途中断无法自愈。

6. **压缩/恢复黑盒**  
   - 静默失败、上下文丢失、元数据被截断后缀覆盖，调试依赖读源码/日志，**可观测性断层**。

7. **用量统计与限额透明度**  
   - 昨日用量显示 0、子智能体配额计算异常、入口深藏，成本预估不可控。

---

> **下一关注窗口**：`0.146.0` 正式版能否一次性交付 Windows 安装/沙箱/GPU/持久化“四件套”修

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-28

---

## 1. 今日速览
- **夜ly 版本发布**：推出 `v0.54.0-nightly.20260728`，包含 A2A 服务器 CRLF 规范化修复与文件密钥链标签长度强制校验两项核心修复。
- **安全修复密集落地**：多个高优先级安全 PR 合并/推进，涵盖 Shell 变量扩展绕过阻断（GHSA-wpqr-6v78-jr5g）、MCP OAuth token 刷新修复、Authorization header 剥离等。
- **Agent 稳定性成长痛显现**：社区高优 Issue 集中于 Subagent 恢复逻辑误报、Generalist agent 卡死、工具数量超限导致 400 错误、浏览器子代理 Wayland 兼容性等核心流程阻塞问题。

---

## 2. 版本发布
### `v0.54.0-nightly.20260728.gbef611950` ([Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-nightly.20260728.gbef611950))
| 变更 | 说明 | 关联 PR |
|------|------|---------|
| **fix(a2a-server)** | 规范化 `getProposedContent` 中的 CRLF 换行为 LF，修复 Windows 下 Gemini Code Assist 并排 diff 视图无法高亮变更的问题 | [#28531](https://github.com/google-gemini/gemini-cli/pull/28531) |
| **fix(core)** | 在文件密钥链中强制显式标签长度与校验，统一跨 Node.js 运行时的 128-bit (16-byte) 认证标签行为，增强凭证存储安全性 | [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) |

> **注**：夜ly 版本为自动化每日构建，主要用于内部验证与早期反馈，生产环境建议等待稳定版发布。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 标签/优先级 | 核心痛点 | 社区热度 (👍/评论) | 重要性分析 |
|---|-------|-------------|----------|-------------------|------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 恢复后误报 GOAL success | `priority/p1`, `area/agent`, `kind/bug` | `codebase_investigator` 触及 `MAX_TURNS` 仍上报成功，掩盖中断真相，导致上层编排失误 | 👍 2 / 12 条 | **编排可靠性核心缺陷**，影响多 Agent 协作信任度 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 频繁永久挂起 | `priority/p1`, `area/agent`, `kind/bug` | 简单文件夹创建等任务委托给 Generalist 即卡死 1 小时+，禁用子 Agent 可规避 | 👍 8 / 8 条 | **主力子 Agent 不可用**，严重阻断复杂任务自动化 |
| 3 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级评测体系建设 (EPIC) | `priority/p1`, `area/agent`, `aiq/eval_infra` | 76 个行为评测用例跑 6 模型，需建立鲁棒的组件级评测管线 | 👍 0 / 7 条 | **质量保障基建**，关乎长期模型升级不回归 |
| 4 | [#28477](https://github.com/google-gemini/gemini-cli/issues/28477) 支持开源/OpenAI 兼容模型提供商 | `area/agent`, `kind/feature` | 社区强烈需求接入本地/第三方模型，打破 Gemini 单一生态锁定 | 👍 0 / 6 条 | **生态扩展关键需求**，影响采用广度 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 模型极少主动调用 Skills/Sub-agents | `priority/p2`, `area/agent`, `kind/bug` | 即使任务高度相关，模型也不自发使用自定义技能/子代理，需显式指令 | 👍 0 / 6 条 | **Agent 自主性缺失**，降低工具链 ROI |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行完成后卡在 "Waiting input" | `priority/p1`, `area/core`, `kind/bug` | 简单 CLI 命令已结束，前端仍显示等待用户输入，频繁复现 | 👍 3 / 4 条 | **核心交互回路阻塞**，用户感知极差 |
| 7 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128 触发 400 错误 | `priority/p2`, `area/agent`, `kind/bug` | 可用工具超 400 个时请求失败，缺乏动态工具裁剪策略 | 👍 0 / 3 条 | **规模化工具集扩展受限**，阻碍复杂工作流 |
| 8 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 需避免破坏性操作 (git reset --force 等) | `priority/p2`, `area/agent`, `kind/feature` | 复杂 Git/DB 操作中模型倾向高风险命令，缺乏安全护栏 | 👍 1 / 3 条 | **生产环境安全红线**，企业级采用前提 |
| 9 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖 (如 maxTurns) | `priority/p2`, `area/agent`, `kind/bug` | 配置合并逻辑缺失，导致 Browser Agent 无法通过配置调节行为 | 👍 0 / 3 条 | **配置系统一致性缺陷**，影响可定制性 |
| 10 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信噪会话 | `priority/p2`, `area/agent`, `kind/bug` | 提取 Agent 判定低信噪跳过读取，导致会话常驻 inbox 反复被调度 | 👍 0 / 5 条 | **后台资源泄漏**，长期运行性能隐患 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 类别 | 核心变更 | 关联 Issue |
|---|----|------|------|----------|------------|
| 1 | [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | OPEN | **Security** | 修补 `detectBashSubstitution`/`detectPowerShellSubstitution` 绕过，阻断 `$VAR`/`${VAR}` 变量扩展注入 (GHSA-wpqr-6v78-jr5g) | #28418 |
| 2 | [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | OPEN | **Security/Auth** | MCP OAuth token 刷新使用存储的 client_id，修复动态注册场景刷新失败导致凭证丢失、强制重新认证 | - |
| 3 | [#28546](https://github.com/google-gemini/gemini-cli/pull/28546) | OPEN | **Security** | `GEMINI_API_KEY` 认证模式下剥离残留 `Authorization` header，避免 Google API 端点拒绝请求 | #28538 |
| 4 | [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | OPEN | **Platform/macOS** | 沙箱模式 (`-s`) 启动崩溃修复：缺失 Seatbelt `.sb` 配置时回退内嵌 profile，解决 macOS/gMac 非 JS 资源打包缺失 | - |
| 5 | [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) | **CLOSED** | **Core/Security** | 文件密钥链强制 16-byte 认证标签长度与校验，跨 Node 版本统一加密语义 | 已入 nightly |
| 6 | [#28531](https://github.com/google-gemini/gemini-cli/pull/28531) | **CLOSED** | **A2A/Windows** | `a2a-server` 规范化 CRLF→LF，修复 Windows 下 Code Assist diff 高亮失效 | 已入 nightly |
| 7 | [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | OPEN | **Core/Model** | 模型选择器新增 `gemini-3.5-flash`/`gemini-3.6-flash`，修复 v0.51.0 遗留的默认模型硬编码问题 | #28483 |
| 8 | [#28364](https://github.com/google-gemini/gemini-cli/pull/28364) | **CLOSED** | **Core/Config** | 用户模型配置深度合并覆盖默认值，修复嵌套 `aliases/overrides/generateContentConfig` 浅合并丢失字段 | - |
| 9 | [#28363](https://github.com/google-gemini/gemini-cli/pull/28363) | **CLOSED** | **Core/Shell** | `ShellExecutionService` 修复 `AbortSignal` 监听器泄漏，长会话内存占用优化 | #28280 |
| 10 | [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) | OPEN | **Auth/Network** | OAuth token 交换改用原生 `fetch` 替代 `axios`，规避无头 VPS "Premature close" 连接中断 | #28440 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issues | 社区呼声强度 | 备注 |
|----------|---------------|--------------|------|
| **多模型/开放生态支持** | [#28477](https://github.com/google-gemini/gemini-cli/issues/28477) | ⭐⭐⭐⭐⭐ | 需统一 Provider 接口，支持 Ollama、OpenAI 兼容、本地模型 |
| **Agent 编排可靠性** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | ⭐⭐⭐⭐ | Subagent 状态机、挂起恢复、权限控制、配置继承均存缺陷 |
| **评测与可观测性体系** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | ⭐⭐⭐ | 组件级评测管线、轨迹可视化 (`/chat share`)、本地报告工具 |
| **安全与沙箱加固** | [#28403](https://github.com/google-gemini/gemini-cli/pull/28403), [#28546](https://github.com/google-gemini/gemini-cli/pull/28546), [#28551](https://github.com/google-gemini/gemini-cli/pull/28551), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | ⭐⭐⭐⭐ | 注入防护、凭证隔离、macOS 沙箱、破坏性操作护栏 |
| **工具集规模化管理** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | ⭐⭐⭐ | 动态工具裁剪、AST 感知工具调研 (tilth/glyph) |
| **终端交互体验** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) | ⭐⭐⭐ | Shell 卡顿、外部编辑器回显损坏、Resize 闪烁/性能 |
| **Memory 系统质量** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) | ⭐⭐⭐ | 去重、隔离、脱敏、低信噪隔离、日志降噪 |

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点类别 | 典型反馈 | 影响范围 | 优先级建议 |
|----------|

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-28

---

## 1. 今日速览

- **版本发布**：v1.0.76-0 发布，核心优化 MCP 工具加载速度（引入定义级快照缓存），并调整 Autopilot 模式默认行为——任务完成后保持在 Autopilot，可通过 `stayInAutopilot: false` 恢复交互模式。
- **社区焦点**：Plan 模式回归阻断 Shell 命令（#4188）、Windows Terminal 交互模式渲染异常（#4159、#4263）、ACP 协议缺失 `usage_update` 事件（#4233、#4174）成为高频反馈；`/app` 命令不默认选中当前目录（#4118）获 35 👍 成最高呼声需求。
- **维护动态**：多个长期 Issue 关闭（僵尸进程 #4163、CAPI 5MB 限制 #4183、模型自动切换 #2792），但新增 Windows/WSL 终端渲染类缺陷显著增加。

---

## 2. 版本发布

### v1.0.76-0 (2026-07-27)
| 类型 | 内容 |
|------|------|
| **Improved** | MCP 工具从定义级快照加载，支持进程级与单服务器级缓存禁用 |
| **Improved** | Autopilot 模式任务完成后默认保持选中；新增 `stayInAutopilot: false` 可在每轮任务后返回交互模式 |
| **Fixed** | 恢复早期警告提示（截断信息，详见 Release Notes） |

> 🔗 [Release v1.0.76-0](https://github.com/github/copilot-cli/releases/tag/v1.0.76-0)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 关注理由 |
|---|------|------|---------|----------|
| [#4118](https://github.com/github/copilot-cli/issues/4118) | `/app` 命令不默认选中当前工作目录 | OPEN | 0 / **35** | **最高呼声需求**：用户每次需手动切目录，严重影响工作流效率 |
| [#4188](https://github.com/github/copilot-cli/issues/4188) | Plan 模式回归：阻断 Shell 命令（如 `gh cli`） | OPEN | 6 / 3 | **核心功能回归**：Plan 阶段无法通过 CLI 操作 Issue/PR，破坏规划-执行闭环 |
| [#4159](https://github.com/github/copilot-cli/issues/4159) | Windows Terminal 交互模式提交后界面变白 | OPEN | 1 / 3 | **平台阻断性 Bug**：仅交互模式受影响，`-p` 正常，疑似渲染层竞态 |
| [#4263](https://github.com/github/copilot-cli/issues/4263) | Windows Terminal 垂直分屏时响应内容消失 | OPEN | 2 / 0 | 同类渲染问题，调整窗口大小可恢复，提示滚动/布局计算异常 |
| [#4233](https://github.com/github/copilot-cli/issues/4233) | ACP 模式缺失 `usage_update` 事件（上下文/积分用量） | OPEN | 2 / 2 | **协议对齐缺口**：Zed 等 ACP 客户端无法展示用量指标，交互模式已有数据 |
| [#4174](https://github.com/github/copilot-cli/issues/4174) | ACP 服务端完全不暴露 Token/上下文/成本信息 | OPEN | 0 / 2 | 补充 #4233，协议层面缺失所有计量字段 |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | 切回 Autopilot 后 `task_complete` 工具不可用 | OPEN | 2 / 3 | **模式切换状态机缺陷**：v1.0.4 曾修复同类问题，疑似回归 |
| [#1381](https://github.com/github/copilot-cli/issues/1381) | Rewind 要求 Git 仓库（不支持 jj 等 VCS） | OPEN | 3 / 9 | **长期架构限制**：VS Code 端已支持无 Git Rewind，CLI 落后 |
| [#4271](https://github.com/github/copilot-cli/issues/4271) | `glob` 工具多段模式必须加 `**/` 前缀才能匹配 | OPEN | 0 / 0 | **工具语义不符预期**：`2026/07/*.md` 等合法相对路径失败，仅 `**/2026/07/*.md` 生效 |
| [#3886](https://github.com/github/copilot-cli/issues/3886) | `/restart` `/resume` `/update` 消耗 ~174 AI 积分 | OPEN | 1 / 0 | **隐性成本**：重启类操作非预期扣费，文档未说明，用户感知强 |

---

## 4. 重要 PR 进展（精选 5 条有效贡献）

| # | 标题 | 状态 | 核心变更 |
|---|------|------|----------|
| [#1609](https://github.com/github/copilot-cli/pull/1609) | 更新 PAT 权限说明：`Copilot Requests` 在 Account 标签页 | OPEN | 文档修复：降低新用户配置 PAT 时的漏选风险 |
| [#1598](https://github.com/github/copilot-cli/pull/1598) | `install.sh` 增加 `trap` 清理临时目录 | OPEN | 健壮性：网络失败/404 时避免 `/tmp` 残留 |
| [#1116](https://github.com/github/copilot-cli/pull/1116) | 修正文档：0x 模型不消耗配额 | OPEN | 关键文档修正：README 误导用户认为 0x 仍扣 1x 配额 |
| [#988](https://github.com/github/copilot-cli/pull/988) | 修复 README 中 `brew install copilot-cli` 拼写错误 | OPEN | 公式名应为 `github-copilot-cli`，防止安装失败 |
| [#1333](https://github.com/github/copilot-cli/pull/1333) | 微调语法与 Markdown 格式 | OPEN | 非功能性清理 |

> ⚠️ 其余 7 个 PR 为垃圾/测试内容（含推广链接、无关代码），已隐性过滤。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **ACP 协议完善** | #4233, #4174, #4275 | 🔥🔥🔥 高：Zed 等编辑器集成需求推动，缺 `usage_update`、`contextTier` 运行时切换 |
| **Autopilot/Plan 模式状态机稳定性** | #4188, #4161, #3977, #1272 | 🔥🔥 高：模式切换、工具可用性、持久化均有回归 |
| **跨平台终端渲染（Windows/WSL/tmux/screen）** | #4159, #4263, #4191, #4274 | 🔥🔥 高：交互模式在复杂终端环境下频发白屏/内容丢失/光标异常 |
| **非 Git 版本控制支持** | #1381 | 🔥 中：jj 用户无法使用 Rewind，VS Code 已支持形成对比 |
| **工具语义与性能** | #4271 (glob), #4163 (僵尸进程), #4183 (CAPI 5MB) | 🔥 中：基础工具正确性、资源泄漏、大上下文处理 |
| **计费透明度** | #3886, #4224 (OTel 缺失计费属性) | 🔥 中：重启扣费、子代理调用无计费埋点 |

---

## 6. 开发者关注点总结

1. **Windows/WSL 终端体验是最大痛点**  
   连续三个版本（v1.0.74~76）均有交互模式渲染回归：白屏、内容消失、光标缓冲区溢出。开发者呼吁增加自动化终端兼容性测试矩阵。

2. **ACP 协议落后于交互模式**  
   `usage_update`、`contextTier`、计费字段全缺失，导致 Zed 等外部客户端无法展示上下文/积分状态，阻碍生态集成。

3. **Plan ↔ Autopilot 状态机脆弱**  
   Plan 模式阻断 Shell（#4188）、`task_complete` 消失（#4161）、模式持久化缺失（#3977）表明模式切换逻辑缺乏回归保护。

4. **隐性成本与计量不透明**  
   `/restart` 扣 174 积分（#3886）、子代理 OTel 无计费属性（#4224），开发者要求 CLI 侧暴露实时成本 API 并文档化所有扣费动作。

5. **基础工具正确性倒逼信任**  
   `glob` 多段匹配失效（#4271）、僵尸进程泄漏（#4163）、CAPI 5MB 硬限制未被自动压缩规避（#4183），核心工具链稳定性直接影响复杂任务成功率。

---

> **下一版本关注建议**  
> - 修复 Windows Terminal 交互渲染（优先级 P0）  
> - 补全 ACP `usage_update` 与 `contextTier` 运行时配置  
> - 为 Plan/Autopilot 模式增加端到端回归套件  
> - 文档化所有积分扣费触发点，并在 `/usage` 命令中细分展示

---

*数据来源：github.com/github/copilot-cli | 统计窗口：2026-07-27 00:00–23:59 UTC | 报告生成：2026-07-28*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-28

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **无新版本发布**，社区活动集中在 **缺陷修复** 与 **Windows 兼容性** 改进上。
- 核心关注点聚焦于 **Hook 机制的 GC 导致的任务丢失**、**VS Code 扩展的审批渲染卡死**、以及 **非 UTF-8 环境（Windows GBK）下的启动崩溃** 问题。
- 官方与社区贡献者同步推进了 4 个 PR，覆盖 MCP 工具规范化、Prompt Cache 控制、Unicode 编码修复，体现“稳定性优先”的迭代策略。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（共 4 条，全量收录）

| # | 标题 | 状态 | 核心痛点 | 关注理由 |
|---|------|------|----------|----------|
| [#2564](https://github.com/MoonshotAI/kimi-cli/issues/2564) | **fix(hooks): PostToolUse / PostToolUseFailure tasks collected by GC before completion** | 🟢 Open | Hook 子进程被 GC 过早回收，导致 `PostToolUse` 类钩子随机失败/不执行 | **严重架构缺陷**：影响自动化工作流、代码审计、测试触发等核心扩展场景，且表现为非确定性失败，排查难度大。 |
| [#2563](https://github.com/MoonshotAI/kimi-cli/issues/2563) | **[Bug] VS Code extension: approval prompts intermittently never render, causing indefinite stalls / 600s timeout** | 🟢 Open | `ExitPlanMode` / 工具权限弹窗随机不渲染，导致 Agent 无限等待或静默超时 | **IDE 集成阻断性 Bug**：直接破坏“人在回路”交互体验，VS Code 是主流使用场景，优先级极高。 |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | **[VSCode Extension] Plan mode file path not clickable in chat webview** | 🟢 Open | Plan 模式下聊天视图中的文件路径不可点击，无法跳转定位 | **开发体验细节**：高频操作路径缺失交互，影响代码审查与导航效率，社区积累 3 条评论持续关注。 |
| [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) | **Login failed: Cannot connect to host auth.kimi.com:443 ssl:default [Network is unreachable]** | 🔴 Closed | 登录时无法连接认证服务器（网络不可达） | **旧问题闭环**：创建于 2026-02，时隔 5 个月关闭，可能随网络基础设施或客户端重试策略改善而自愈，供运维参考。 |

---

## 4. 重要 PR 进展（共 4 条，全量收录）

| # | 标题 | 作者 | 核心变更 | 关联 Issue / 影响范围 |
|---|------|------|----------|------------------------|
| [#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) | **fix(mcp): normalize tools for Moonshot API** | lihailong00 | 为 MCP 工具名生成稳定的 Moonshot 兼容别名；补齐 Schema 中缺失的根 `object` 类型；修正 `anyOf`/`required` 结构分发 | MCP 生态适配，解决工具调用路由与 Schema 校验不一致问题。 |
| [#2562](https://github.com/MoonshotAI/kimi-cli/pull/2562) | **fix(llm): allow disabling prompt cache key** | lihailong00 | 新增 `prompt_cache_key` 布尔配置；为 `false` 时省略会话级缓存键；双语文档同步 | **成本/隐私控制**：允许企业用户禁用 Prompt Cache，避免敏感上下文缓存或规避计费策略。 |
| [#2561](https://github.com/MoonshotAI/kimi-cli/pull/2561) | **Fix UnicodeEncodeError on startup when stdio uses non-UTF-8 encoding** | LHMQ878 | 修复 Windows Git Bash (GBK) 下欢迎 Banner 字符 `▐` 导致的启动崩溃 | 解决 #1436，**Windows 原生体验关键修复**，降低新用户入门门槛。 |
| [#2560](https://github.com/MoonshotAI/kimi-cli/pull/2560) | **Fix UnicodeEncodeError in web banner when stdout is non-UTF-8 (Windows)** | LHMQ878 | 修复 `kimi web` 在重定向输出时因 `➜` 字符在 GBK 下崩溃 | 解决 #2532，配合 #2561 彻底覆盖 CLI 与 Web 两大入口的编码兼容性。 |

---

## 5. 功能需求趋势（基于近期 Issues 提炼）

| 趋势方向 | 典型信号 | 优先级判断 |
|----------|----------|------------|
| **IDE 深度集成稳健性** | #2563 审批渲染卡死、#2317 文件路径不可点击 | 🔴 **P0 阻断级** —— 直接影响核心用户群日常流程 |
| **Hooks / 扩展机制可靠性** | #2564 GC 导致 Hook 丢失 | 🟠 **P1 核心架构** —— 关乎自动化生态可信度 |
| **跨平台兼容性（Windows 优先）** | #2560、#2561、#1436 编码崩溃系列 | 🟡 **P1 基建** —— 长尾问题集中爆发，需系统性方案（如统一输出编码层） |
| **MCP 协议标准化适配** | #2539 Schema 规范化 | 🟢 **P2 生态** —— 为第三方工具链互通铺路 |
| **LLM 请求级精细控制** | #2562 Prompt Cache 开关 | 🟢 **P2 企业级** —— 满足合规、成本敏感场景 |

---

## 6. 开发者关注点 & 痛点总结

1. **“不可复现的随机性”最令人崩溃**  
   - #2564 Hook 丢失、#2563 审批不渲染均表现为**间歇性失败**，缺乏确定性复现步骤，导致开发者不敢在 CI/CD 或关键流程中依赖相关特性。

2. **Windows 仍是“第二公民”**  
   - 连续两个 PR 修复 GBK 编码崩溃（Banner、Web Server），且均为**启动即崩**的阻断性问题。建议在 CI 增加 `chcp 65001` / `PYTHONIOENCODING=utf-8` 的矩阵测试。

3. **VS Code 扩展架构需重审 Webview 通信链路**  
   - 审批弹窗（`ExitPlanMode`）与文件路径跳转均指向 Webview <-> Extension Host 消息传递的竞态或生命周期管理缺陷。

4. **配置项文档化滞后于功能交付**  
   - #2562 新增配置项同步更新了中英双语文档，值得肯定；但历史配置（如 Hooks 超时、GC 行为）文档仍缺失，建议建立“配置项变更清单”机制。

5. **认证/网络层缺乏优雅降级**  
   - #1070 这种“网络不可达直接报错退出”在企业代理、离线环境下体验极差，期望增加重试、离线缓存 Token、代理自动检测能力。

---

> **下一步建议**  
> - **本周 Sprint** 优先合并 #2560/2561/2562/2539 四个 PR，发布 `v1.9.1` 热修复版。  
> - **技术债专项**：建立 Hook 执行器的集成测试套件（模拟 GC 压力），引入 VS Code Extension 的 E2E 自动化（Playwright）覆盖审批渲染路径。  
> - **文档债**：在 `docs/configuration.md` 增加 `hooks.*`、`prompt_cache_key`、Windows 编码排查 FAQ。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-28

---

## 1. 今日速览

- **双版本连发修复桌面端关键问题**：v1.18.6 与 v1.18.7 先后发布，集中解决 macOS 全屏标题栏、命令面板残留、项目选择器滚动及分支缓存同步等核心体验 Bug。
- **AutoScroller 依赖缺失引发渲染崩溃潮**：v1.18.7 引入的 `AutoScroller plugin depends on Scroller plugin` 错误导致设置页、拖拽列表等场景频繁崩溃，已有多个 Issue 确认并紧急修复中。
- **订阅计费与模型可用性成用户痛点高发区**：OpenCode Go 订阅扣款成功却提示余额不足、DeepSeek V4 Flash 任务中断、Kimi K3 温度参数被拒等问题集中爆发，暴露上游供应商集成的脆弱性。

---

## 2. 版本发布

### v1.18.7 (2026-07-28)
**Desktop 专项修复**
- 移除 macOS 全屏模式下多余的标题栏内边距
- 修复命令面板条目在影子命令移除后错误重现
- 项目选择器下拉列表新增滚动支持（长列表场景）
- **社区贡献**：@david1gp 提交项目选择器滚动修复

[查看 Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.7)

### v1.18.6 (2026-07-28)
**Core**：修复分支专用仓库缓存，刷新某引用不再误移动其他分支检出  
**Desktop**：提升新版客户端 API 兼容性（目录/项目/会话/终端流程）；修复遗留 MCP 问题

[查看 Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.6)

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 关注度 | 核心诉求 | 为什么重要 |
|---|-------|--------|----------|------------|
| [#25270](https://github.com/anomalyco/opencode/issues/25270) | 模型连续输出两次完全相同的响应 | 💬23 👍4 | 根因排查与修复 | **长期顽疾（5 月报至今）**，严重破坏对话体验，涉及模型流式输出去重逻辑 |
| [#37790](https://github.com/anomalyco/opencode/issues/37790) | OpenCode Go 订阅支付成功但工作区显示“余额不足” | 💬11 | 计费同步修复 | **直接阻断付费用户核心功能**，Stripe 支付与后端授权状态不同步 |
| [#9281](https://github.com/anomalyco/opencode/issues/9281) | 统一用量追踪 `/usage` 命令 | 💬11 👍31 | 功能落地 | **高呼声功能（31👍）**，OAuth 登录用户无法查看配额使用，透明度缺失 |
| [#29703](https://github.com/anomalyco/opencode/issues/29703) | 修改项目文件夹路径不丢失会话历史 | 💬9 👍13 | 会话迁移支持 | 重构/重命名目录时会话数据绑定路径导致历史丢失，影响工作流连贯性 |
| [#38107](https://github.com/anomalyco/opencode/issues/38107) / [#38830](https://github.com/anomalyco/opencode/issues/38830) / [#39162](https://github.com/anomalyco/opencode/issues/39162) | **AutoScroller 依赖缺失导致渲染器崩溃**（3 个重复 Issue） | 💬4+4+3 | 依赖补全/版本回滚 | **v1.18.7 回归 Bug**，打开设置页/可拖拽列表即崩，阻断桌面端核心交互 |
| [#28596](https://github.com/anomalyco/opencode/issues/28596) | 模型陷入相同参数的工具调用无限循环 | 💬5 | 防循环机制 | 需人工干预才能中断，浪费 Token 与时间，缺乏自动熔断策略 |
| [#38598](https://github.com/anomalyco/opencode/issues/38598) / [#39219](https://github.com/anomalyco/opencode/issues/39219) | DeepSeek V4 Flash (Free) 更新后拒绝完成任务 | 💬2+2 | 模型参数/提示词适配 | 免费模型可用性波动大，需在集成层做容错与降级 |
| [#39215](https://github.com/anomalyco/opencode/issues/39215) | OpenCode Go 所有模型返回 401 “上游提供商拒绝请求” | 💬1 | 认证链路排查 | 订阅有效但全模型不可用，疑似上游 Token 刷新或路由配置故障 |
| [#39214](https://github.com/anomalyco/opencode/issues/39214) | Kimi K3 拒绝 temperature 参数导致 API 失败 | 💬1 | 参数白名单/过滤 | 上游模型参数不兼容未在网关层拦截，需维护模型能力矩阵 |
| [#39181](https://github.com/anomalyco/opencode/issues/39181) | 多 TUI 共享一 Server 时跨目录事件污染 | 💬2 | 会话隔离 | 侧边栏分支显示错误目录的分支，暴露多租户模式下的状态泄漏 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| [#39230](https://github.com/anomalyco/opencode/pull/39230) | `refactor(app): extract provider connection controller` | 重构 | 提取 Provider 连接控制器，解耦连接逻辑 | 为多 Provider 管理、热插拔奠基 |
| [#39229](https://github.com/anomalyco/opencode/pull/39229) | `refactor(app): split server management controllers` | 重构 | 拆分 Server 管理控制器 | 服务端生命周期更清晰可测 |
| [#39228](https://github.com/anomalyco/opencode/pull/39228) | `refactor(app): extract v2 settings controllers` | 重构 | 设置模块控制器化 | 设置面板扩展性与维护性提升 |
| [#39227](https://github.com/anomalyco/opencode/pull/39227) | `refactor(app): thin new session composition` | 重构 | 精简新会话组合逻辑 | 启动路径性能与复杂度优化 |
| [#39226](https://github.com/anomalyco/opencode/pull/39226) | `refactor(app): extract keybind settings controller` | 重构 | 键位绑定设置控制器化 | 支持动态键位热更 |
| [#39233](https://github.com/anomalyco/opencode/pull/39233) | `refactor(app): establish v2 session controller` | 重构 | 建立 v2 会话控制器 | **核心架构里程碑**，会话状态集中管理 |
| [#39232](https://github.com/anomalyco/opencode/pull/39232) | `refactor(app): extract session timeline controller` | 重构 | 会话时间线控制器 | 历史/撤销/分支可视化基础设施 |
| [#39231](https://github.com/anomalyco/opencode/pull/39231) | `refactor(app): extract session side panel controller` | 重构 | 会话侧边栏控制器 | UI 组件与业务逻辑解耦 |
| [#39224](https://github.com/anomalyco/opencode/pull/39224) | `feat(core): reload configured plugins from source edits` | 功能 | 本地配置插件热重载（`./tools/my-plugin.ts`） | **插件开发体验大幅提升**，对齐自动发现插件能力 |
| [#39225](https://github.com/anomalyco/opencode/pull/39225) | `fix(core): bound ripgrep search execution with default wall-clock deadline` | 修复 | glob/grep 工具新增默认壁钟超时（解决 21 分钟卡死） | **防止搜索工具无限挂起**，保障 Agent 执行健壮性 |
| [#39216](https://github.com/anomalyco/opencode/pull/39216) | `test(core): add native watcher command reload test` | 测试 | 原生监视器命令重载端到端测试 | 验证 #37429 配置热更完整链路 |
| [#39217](https://github.com/anomalyco/opencode/pull/39217) | `fix(app): use blue for server status attention` | UI 修复 | 服务器状态“需关注”统一用蓝色（与会话标签一致） | 状态语义一致性，减少认知负荷 |
| [#39220](https://github.com/anomalyco/opencode/pull/39220) | `fix(app): refresh global provider state` | 修复 | 连接 Provider 后刷新所有活跃目录，同步首页设置状态 | 解决多窗口/多项目下 Provider 状态不同步 |

> **趋势**：Brendonovich 主导的 **App 层控制器化重构** 密集合并（9 个 PR 同日开启），标志着 v2 架构从设计进入落地期；kitlangton 推进插件热更、测试确定性、类型规范等工程基建。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声 | 当前阻碍 |
|----------|------------|----------|----------|
| **计费/订阅透明化** | #9281 `/usage`、#37790 余额不同步、#33264 信用卡拒付 | 👍31 / 高频投诉 | 后端计费与前端状态同步机制缺失，上游提供商错误未规范化 |
| **会话/项目可移植性** | #29703 路径迁移、#39199 会话中途改根目录 | 👍13 / 新增需求 | 会话存储强绑定绝对路径，缺乏迁移/重绑定 API |
| **模型网关健壮性** | #38598/#39219 DeepSeek、#39215 401、#39214 Kimi 参数、#25270 重复响应 | 多模型并发故障 | 缺乏统一的参数白名单、熔断降级、响应去重中间件 |
| **桌面端稳定性** | AutoScroller 连环崩溃（#38107/#38830/#39162）、主题切换失效（#39205） | 版本回归集中爆发 | 依赖升级缺乏集成测试，UI 组件库版本锁定不严 |
| **多实例/多租户隔离** | #39181 共享 Server 跨目录污染 | 新兴场景 | Server 状态未按项目作用域分区 |
| **插件/扩展生态完善** | #39135 MCP `env` vs `environment` Schema 不匹配、#32181 全局 Skill 不可见 | 开发者体验细节 | Schema 校验与文档不同步，Skill 注册发现机制不统一 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“付费即服务”兑现断层**  
   - Stripe 扣款成功 ➜ 后端授权不同步 ➜ 前端仍报“余额不足”（#37790）  
   - 无统一用量查询入口，OAuth 用户完全盲盒（#9281）  
   - **诉求**：Webhook 幂等同步、实时余额推送、

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-28

---

## 1. 今日速览
过去 24 小时无新版本发布，但社区活跃度极高：共更新 50 个 Issue、25 个 PR。核心动态集中在**多模型提供商兼容性修复**（Z.AI、Anthropic、Bedrock、OpenCode）、**扩展系统能力增强**（Scoped Models 暴露、Markdown 渲染 API、Hook 需求）、**会话基础设施重构**（SQLite FTS5 搜索、上下文文件去重）以及** TUI 稳定性与性能优化**（Markdown 崩溃修复、重渲染降级、缓存策略）。多个关键修复已合并入主分支，体现维护团队对“生产可用性”的高优先级响应。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 社区热点 Issues（TOP 10）

| # | Issue | 核心诉求 | 热度/进展 | 重要性分析 |
|---|-------|----------|-----------|------------|
| 1 | [#5263](https://github.com/earendil-works/pi/issues/5263) **会话级模型/思维等级修改默认临时化** | 引入“Default model”设置入口，避免全局配置污染 | 👍10 / 评论10 | **高**：解决长期痛点——用户临时切模型后忘记改回，导致后续会话异常；统一配置入口降低认知负担。 |
| 2 | [#5023](https://github.com/earendil-works/pi/issues/5023) **终端无故跳转至会话开头** | 随机触发的滚动回溯，严重干扰长会话观察 | 评论10 / **已关闭** | **高**：核心 TUI 体验 Bug，虽已关闭但未见修复 PR，需跟进根因（可能与渲染/缓冲区同步有关）。 |
| 3 | [#6747](https://github.com/earendil-works/pi/issues/6747) **Agent 消息 Markdown 增强 API** | 允许扩展在不改变 LLM 上下文前提下变更渲染（如公式渲染） | 👍2 / 评论8 / **进行中** | **高**：扩展生态关键基建，解耦“展示”与“语义”，为数学/图表/富媒体渲染铺路。 |
| 4 | [#6970](https://github.com/earendil-works/pi/issues/6970) **GitHub Copilot 插件导致 OAuth Token 失效** | Pi 使用 Plugin 而非 OAuth，与 copilot-lsp 等工具冲突导致授权失效 | 👍1 / 评论4 / **已关闭** | **高**：多设备/多工具并行场景的认证可靠性问题，关乎企业级采用信心。 |
| 5 | [#7161](https://github.com/earendil-works/pi/issues/7161) **anthropic-messages 缺失 x-client-request-id** | 导致网关无法按会话分流，影响代理/负载均衡场景 | 评论4 / **已修复 (#7172)** | **中高**：标准化请求追踪能力，对代理网关、可观测性至关重要。 |
| 6 | [#7143](https://github.com/earendil-works/pi/issues/7143) **Z.AI 忽略 max_completion_tokens** | 导致长推理被截断（finish_reason: length） | 评论4 / **已修复 (#7174)** | **中高**：提供商兼容性典型案例，修复后恢复长上下文工具调用完整性。 |
| 7 | [#7132](https://github.com/earendil-works/pi/issues/7132) **设置 AI_AGENT=pi 环境变量** | 适配子进程识别 Agent 身份的生态标准（Claude Code 等已收敛） | 评论4 / **已关闭** | **中**：生态互操作性基建，便于下游工具链识别 Pi 启动的进程。 |
| 8 | [#7171](https://github.com/earendil-works/pi/issues/7171) **去重字节级相同的上下文文件** | 解决 worktree 场景下 AGENTS.md/CLAUDE.md 重复加载 | 评论3 / **已修复 (#7169)** | **中**：修正资源加载逻辑，避免重复上下文污染提示词、浪费 Token。 |
| 9 | [#7198](https://github.com/earendil-works/pi/issues/7198) **Markdown 渲染器因嵌套邮件引用栈溢出崩溃** | 原始邮件线程导致 `RangeError`，会话无法恢复 | 评论2 / **今日新建/已关闭** | **严重**：数据安全/会话可恢复性红线问题，需尽快回溯修复版本。 |
| 10 | [#7192](https://github.com/earendil-works/pi/issues/7192) **向扩展暴露 ctx.scopedModels** | 允许扩展读取会话级生效模型列表（配合 /scoped-models） | 评论2 / **已合并 (#7191)** | **中**：扩展开发者高频诉求，解锁模型选择器、伴侣应用等高级用例。 |

> **其它值得关注**：#7152（只读 auth preflight 命令）、#7137（pre_response Hook 需求）、#7197（终端配色方案 API）、#7196（visibleWidth LRU 缓存优化）、#7195（扩展目录符号链接不识别）、#7194（工具卡片滚动触发全量重渲染）、#7189（Git 安装失败污染目录）、#7187（包清单校验导致静默崩溃）、#7182（git 安装错误引入 peerDependencies）。

---

## 4. 重要 PR 进展（TOP 10）

| # | PR | 类型 | 核心变更 | 关联 Issue | 状态 |
|---|----|------|----------|------------|------|
| 1 | [#7173](https://github.com/earendil-works/pi/pull/7173) | **修复** | OpenCode Go 显示名修正：`OpenCode Zen Go` → `OpenCode Go` | #7157 | ✅ 已合并 |
| 2 | [#7172](https://github.com/earendil-works/pi/pull/7172) | **修复** | `anthropic-messages` 路径补全 `x-client-request-id`（复用 `sessionId`） | #7161 | ✅ 已合并 |
| 3 | [#7174](https://github.com/earendil-works/pi/pull/7174) | **修复** | Z.AI 系列提供商改用 `max_tokens` 而非 `max_completion_tokens` | #7143 | ✅ 已合并 |
| 4 | [#7169](https://github.com/earendil-works/pi/pull/7169) | **修复** | `loadProjectContextFiles` 基于文件内容哈希去重，解决 worktree 重复加载 | #7171 | ✅ 已合并 |
| 5 | [#7178](https://github.com/earendil-works/pi/pull/7178) | **功能** | 切换工具输出展开 (Ctrl+O) 时显示状态栏提示，对齐思维块切换体验 | #7180 | ✅ 已合并 |
| 6 | [#7184](https://github.com/earendil-works/pi/pull/7184) | **修复** | 从工具结果中剥离 `|image|`/`<|image|>` 等多模态标记，防止分词器崩溃 | — | ✅ 已合并 |
| 7 | [#7081](https://github.com/earendil-works/pi/pull/7081) | **功能** | Bedrock 支持 Claude Opus 5，启用自适应思考（必选项）并改进错误信息脱敏 | — | ✅ 已合并 |
| 8 | [#7168](https://github.com/earendil-works/pi/pull/7168) | **功能** | 新增 `auth print-api-key` / `print-bearer-token` 命令，支持指定 provider/model 直读凭证 | #7152 相关 | ✅ 已合并 |
| 9 | [#7191](https://github.com/earendil-works/pi/pull/7191) | **功能** | `ExtensionContext` 新增只读 `scopedModels: ScopedModel[]`，暴露会话级生效模型集 | #7192 | ✅ 已合并 |
| 10 | [#7163](https://github.com/earendil-works/pi/pull/7163) | **重构** | 引入 SQLite FTS5 虚表实现会话内容全文搜索（`SessionRepo.search()`），JSONL/内存回退保留 | — | 🟢 进行中 |

> **其它已合并高价值 PR**：#7181（同 #7184 多模态标记剥离）、#7117（扩展创建评测基建）、#7103（并发用户 Bash 取消）、#7110（启动会话切换去重）、#7183（autocompleteMaxVisible 回归测试）、#7188（Husky co-author hook）、#7176（Bedrock 

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-28

---

## 1. 今日速览

- **基准测试预发布**：发布两个 DSW 手动基准测试 POC（`dsw-manual-poc-20260727-1/2`），基于 `v0.20.0-nightly.20260722`，SWE-bench Verified 通过率 75.2%（376/500），状态标记为 **QUARANTINED**，表明结果仅供参考。
- **CI 稳定性成核心痛点**：过去 24 小时新增 12 个主分支 E2E 测试失败 Issue（均由 `qwen-code-dev-bot` 自动创建），覆盖沙箱、SDK、文件操作等多模块，显示集成测试链路高频抖动。
- **企业级扩展与长上下文并行推进**：外部上下文提供者 Profile（#7585、#7449）、GitLab 轮询适配器（#7862）、子代理问答死锁修复（#7882）、YOLO 模式长流重试（#7832）等高优先级 PR 同步推进，聚焦 **企业集成、长会话稳定性、多 IDE 互通**。

---

## 2. 版本发布

| 版本 | 类型 | 关键信息 |
|------|------|----------|
| `dsw-manual-poc-20260727-2` | Non-production benchmark prerelease | SWE-bench Verified：500 样本全跑，**376 resolved / 116 unresolved / 1 execut**；基准参考版本 `v0.20.0-nightly.20260722.b98306b7e` |
| `dsw-manual-poc-20260727-1` | Non-production benchmark prerelease | 同上基准参考版本，首轮 POC 结果 |

> ⚠️ 两版本均标记 **QUARANTINED**，非生产就绪，仅用于内部回归对比。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 标签/优先级 | 评论 | 关注理由 | 链接 |
|---|------|-------------|------|----------|------|
| **#7585** | Proposal: Add a direct external context provider profile | `priority/P3`, `feature-request`, `scope/mcp`, `need-discussion` | 9 | **企业级知识库接入核心提案**：允许 CLI 从管理员绑定的外部记忆服务拉取共享上下文，不改动 Core，讨论度最高 | [#7585](https://github.com/QwenLM/qwen-code/issues/7585) |
| **#7449** | Proposal: Define an enterprise external-memory integration profile | `priority/P3`, `feature-request`, `scope/memory`, `need-discussion` | 6 | 与 #7585 互补，定义**提供商中立**的企业外部记忆集成规范，文档优先、兼容性测试增量化 | [#7449](https://github.com/QwenLM/qwen-code/issues/7449) |
| **#7835** | Sub agent asks user questions but user has no way to answer | `priority/P2`, `bug`, `roadmap/subagents-tools` | 3 | **子代理死锁**：后台子代理调用 `ask_user_question` 无交付路径，导致无限等待，已有 PR #7882 修复中 | [#7835](https://github.com/QwenLM/qwen-code/issues/7835) |
| **#7832** | YOLO mode: mid-stream socket close not retried | `priority/P1`, `bug`, `scope/non-interactive` | 3 | **长代码生成阻断**：`--yolo` 模式下 500+ 行输出 3-5 分钟内必现 `UND_ERR_SOCKET`，无重试机制，影响自动化流水线 | [#7832](https://github.com/QwenLM/qwen-code/issues/7832) |
| **#7831** | Repeated ECONNRESET on streaming when context > ~150k tokens | `priority/P2`, `model/long-context`, `bug` | 3 | **长上下文连接不稳定**：超 150k tokens 后频发 `ECONNRESET`，关联 PR #7836（sessionId 透传） | [#7831](https://github.com/QwenLM/qwen-code/issues/7831) |
| **#7841** | Quota-exhausted 429s retry silently, surface no error | `priority/P2`, `bug`, `scope/core` | 3 | **静默重试掩盖硬性配额耗尽**：带有 reset time 的 429 被误判为瞬时限流，导致用户无感知等待，**PR #7842 已修复** | [#7841](https://github.com/QwenLM/qwen-code/issues/7841) |
| **#6414 / #7056** | VS Code Companion: Failed to connect to Qwen agent (ACP exited) | `type/bug`, `scope/vscode`, `scope/windows` | 6 / 6 | **IDE 连接高频故障**：Windows 下 ACP 进程异常退出（exit code 0），`acl` 参数报警，阻断 VS Code 用户核心体验 | [#6414](https://github.com/QwenLM/qwen-code/issues/6414) \| [#7056](https://github.com/QwenLM/qwen-code/issues/7056) |
| **#7828** | Git branch display in footer becomes stale after branch switch | `priority/P3`, `bug`, `scope/git` | 3 | **UI 状态不同步**：`fs.watch` 在 NFS/FUSE/overlayfs 丢事件，**PR #7830 引入轮询兜底** | [#7828](https://github.com/QwenLM/qwen-code/issues/7828) |
| **#7755 / #7878 / #7860 等** | Main CI failed: E2E Tests (12 个同类 Issue) | `type/bug`, `scope/testing`, `autofix/skip` | 3-4 各 | **CI 抖动规模化**：过去 24h 12 次主分支 E2E 失败，涉及沙箱、SDK、文件操作、集成测试，**需建立分级熔断与重跑机制** | [搜索列表](https://github.com/QwenLM/qwen-code/issues?q=label%3A%22autofix%2Fskip%22+label%3A%22scope%2Ftesting%22+created%3A%3E2026-07-27) |
| **#6762** | Feature Request: Skill Context Lifecycle Management | `priority/P2`, `feature-request`, `roadmap/context-performance` | 5 | **上下文膨胀治理**：SKILL.md 永久驻留会话历史，无卸载/压缩机制，长会话 Token 暴涨核心原因 | [#6762](https://github.com/QwenLM/qwen-code/issues/6762) |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心变更 | 关联 Issue | 链接 |
|---|------|------|----------|------------|------|
| **#7882** | fix(core): exclude `ask_user_question` from subagent tools | `OPEN` | 从 fork/general-purpose 子代理工具集移除 `ask_user_question`，防止死锁 | #7835 | [#7882](https://github.com/QwenLM/qwen-code/pull/7882) |
| **#7842** | fix(core): fast-fail permanent quota-exhaustion 429s | `CLOSED` | 识别带 reset time 的 429 为**永久配额耗尽**，首次尝试即友好报错，终结静默重试 | #7841 | [#7842](https://github.com/QwenLM/qwen-code/pull/7842) |
| **#7830** | fix(cli): add polling fallback for git branch name display | `OPEN` | `fs.watch` 失效时回退到 5s 轮询 `.git/HEAD`，解决 NFS/FUSE/容器环境分支名卡顿 | #7828 | [#7830](https://github.com/QwenLM/qwen-code/pull/7830) |
| **#7836** | feat(serve): support caller-supplied sessionId in POST /session | `OPEN` | REST→bridge→agent 链路透传 `sessionId`，修复长会话隐式丢失导致的 `ECONNRESET` | #7831 | [#7836](https://github.com/QwenLM/qwen-code/pull/7836) |
| **#7826** | feat(channels): dispatch GitHub notifications by reason | `OPEN` | 按 `notification.reason`（mention/review_request/assignment）分派，而非统一视为 comment | #7807 | [#7826](https://github.com/QwenLM/qwen-code/pull/7826) |
| **#7862** | feat(channels): add GitLab polling channel adapter | `OPEN` | 基于 `@gitbeaker/rest`，复用 `PollingChannelBase`，新增 GitLab Todo 轮询入口 | — | [#7862](https://github.com/QwenLM/qwen-code/pull/7862) |
| **#7877** | feat(external-context): Add submitted-prompt auto recall | `OPEN` | 管理员安装的 `UserPromptSubmit` Hook 实现**确定性自动召回**，与按需 MCP Profile 互斥 | #7585 / #7449 | [#7877](https://github.com/QwenLM/qwen-code/pull/7877) |
| **#7731** | feat(web-shell): add git branch picker, commit dialog, create PR flow | `OPEN` | Web Shell 新增 IntelliJ 风格分支选择器、提交对话框、创建 PR 全链路 | — | [#7731](https://github.com/QwenLM/qwen-code/pull/7731) |
| **#7884** | fix(triage): retry a transient npm ci before blaming the PR | `OPEN` | 沙箱双通道 `npm ci` 各重试 1 次，消除瞬时安装竞态导致的误判 PR 失败 | — | [#7884](https://github.com/QwenLM/qwen-code/pull/7884) |
| **#7484** | fix(core): bridge tool-result images for text-only models | `OPEN` | 统一路由工具返回图片（内置/MCP/扩展），文本模型亦可通过桥接理解图像结果 | — | [#7484](https://github.com/QwenLM/qwen-code/pull/7484) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 社区呼声强度 | 备注 |
|----------|---------------|--------------|------|
| **企业级外部记忆/上下文集成** | #7585, #7449, #7877 | ⭐⭐⭐⭐⭐ | 两份互补提案 + 实现 PR 同步推进，文档优先、Provider 中立、Hook 驱动自动召回 |
| **长会话/大上下文稳定性** | #7831, #7832, #7836, #6762 | ⭐⭐⭐⭐ | 150k+ Token 连接重置、YOLO 长流无重试、Skill 永久驻留三大痛点并存 |
| **多 IDE / 编辑器互通** | #6414, #7056, #7697, #

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-28

---

## 1. 今日速览
- **核心里程碑**：v0.9.2 发布候选版（RC）集成分支已就绪，多个核心特性分支（Onboarding、Fleet、Billing、Visual、Sessions、Provider）今日批量合入集成分支，标志着 v0.9.2 进入最终冲刺阶段。
- **技术债治理**：启动“死代码清理”工程（464 处 `#[allow(dead_code)]`），引入 `rio-vt` 替换 `vt100` 作为 PTY 测试引擎，显著提升测试可靠性。
- **用户体验打磨**：新增 `thinking_default_expanded` 设置解决 SSH/Tmux 下 Space 键冲突，修复 Windows CRLF 编辑失败、前台 Shell 交互阻塞等高频痛点。

---

## 2. 版本发布
**无新版本发布**。当前主线版本为 v0.9.1，v0.9.2 RC 正在集成分支 `codex/v092-integration-direct-main` 验证中（已领先 main 82 提交）。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 核心价值/社区反响 | 链接 |
|---|------|------|-------------------|------|
| **#4939** | `/cost`: 按路由与 Token 类别拆解花费，派生 CNY 而非累加 | 🟢 Open | **账单透明化核心需求**。继 #4797 后续，解决双计价体系、缓存写入未计价、CNY 汇率硬编码问题，直接影响商业化信任度。 | [Link](https://github.com/Hmbown/CodeWhale/issues/4939) |
| **#4936** | 实现 `/rc`：产品引导用户运行运行时不存在的命令 | 🟢 Open | **严重产品缺陷**。官网复制按钮指向 `/rc`，但运行时未实现该命令，阻断 Runner 入网流程，属 P0 级阻塞。 | [Link](https://github.com/Hmbown/CodeWhale/issues/4936) |
| **#4785** | 死代码扫描：464 个 `#[allow(dead_code)]` 掩盖代码腐化 | 🟢 Open | **技术债治理标杆**。编译器失效导致重构风险剧增，PR #4938 已引入“预算棘轮”机制，强制 CI 门禁，体现工程严谨性。 | [Link](https://github.com/Hmbown/CodeWhale/issues/4785) |
| **#4764** | `edit_file` 在 Windows 上无法编辑 CRLF 文件 | 🟢 Open | **跨平台兼容性痛点**。Windows 用户高频遭遇精确匹配失败，阻碍企业级采用，需修复行尾规范化逻辑。 | [Link](https://github.com/Hmbown/CodeWhale/issues/4764) |
| **#4930** | 前台 Shell 阻塞时按 Enter 应先分离再转向 | 🟢 Open | **交互逻辑修正**。用户直觉与现有行为冲突（输入被吞或报错），属“所见即所得”交互原则的缺失场景。 | [Link](https://github.com/Hmbown/CodeWhale/issues/4930) |
| **#2342** | 输出内容中的文件支持点击预览打开 | 🟢 Open | **高赞需求（👍 0 但长期存活）**。减少“输出→找目录→打开”往返，提升代码审阅效率，属 TUI 交互增强高频呼声。 | [Link](https://github.com/Hmbown/CodeWhale/issues/2342) |
| **#998** | 文案展示不全，建议悬停提示完整内容 | 🟢 Open | **UI 细节打磨**。截图直观展示截断问题，悬停 Tooltip 为低成本高收益改进，社区持续关注（10 条评论）。 | [Link](https://github.com/Hmbown/CodeWhale/issues/998) |
| **#4934** | 官网非批评：主题一致性建议 | 🟢 Open | **品牌/设计层面反馈**。核心贡献者 JayBeest 提出，反映社区对产品整体视觉语言的高标准要求。 | [Link](https://github.com/Hmbown/CodeWhale/issues/4934) |
| **#4906** | 官网与 README 缺乏真实运行演示 | 🟢 Open | **市场化关键短板**。终端类产品“动态演示即文档”，无 GIF/视频导致新用户认知门槛高，阻碍获客转化。 | [Link](https://github.com/Hmbown/CodeWhale/issues/4906) |
| **#3897** | 流式渲染每 chunk 重解析全量 Markdown (O(N²)) | 🔴 Closed | **性能优化已落地**。流式输出长消息时 CPU/延迟指数级上升，已通过增量解析修复，属 v0.9.2 关键性能基建。 | [Link](https://github.com/Hmbown/CodeWhale/issues/3897) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 | 链接 |
|---|------|------|----------|------|
| **#4911** | v0.9.2 RC 集成总伞 PR | 🔴 Closed | 汇聚 82 提交的集成分支，引入托管 CI 与代码审查，标志着 v0.9.2 功能冻结、进入稳定期。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4911) |
| **#4926** | Onboarding 重构：远程模式矩阵、离线探索、外观步骤、贡献者技能 | 🔴 Closed | 重写首次体验流程：支持 Remote/Mobile/Chat-Bridge 矩阵、离线探索模式、主题预览、技能包引导，显著降低新用户门槛。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4926) |
| **#4924** | Fleet 保存精确配置 + 推理路由器：两阶段准入、验证上限、无内容收据 | 🔴 Closed | Fleet 功能产品化：Schema 冻结、权限/Shell 上限、角色规范化、冲突检测，支持团队级标准化分发。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4924) |
| **#4927** | 计费修正：派发收据分类、Moonshot/MiniMax 产品真相、诚实上限、路由级环境变量 URL | 🔴 Closed | 解决双计价体系、缓存写入计费、提供商切换中途重算等核心账单准确性问题，商业化就绪关键。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4927) |
| **#4923** | 视觉程序切片：亮度审计、选择词汇、聚焦纹理、可选音效、水母动画 | 🔴 Closed | 系统性视觉升级：对比度达标(3:1)、选择状态统一语义、聚焦纹理化、环境音效可选、修复水母“误读为人脸”动画。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4923) |
| **#4922** | 会话持久化轨道、可选自动恢复、仪表盘预览（fail-closed 目标） | 🔴 Closed | 会话管理产品化：持久化归档标志、单写入者生命周期、侧边栏面板、Picker 归档键、自动恢复显式决策。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4922) |
| **#4921** | Provider：StepFun 计费路由分阶段 + Go/Zen 计费框架 | 🔴 Closed | 落地 #4526 保留范围：StepFun PAYG/Plan 双端点分阶段选择、镜像 Kimi 方案、自定义 BaseURL 跳过校验。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4921) |
| **#4938** | 引入有界死代码切片 + 预算棘轮 | 🟢 Open | 技术债治理“先立规矩后清理”：CI 强制 `#[allow(dead_code)]` 数量不增，为后续大规模清理建立安全网。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4938) |
| **#4931** | QA PTY 测试框架从 vt100 迁移到 rio-vt | 🟢 Open | 终端模拟测试引擎现代化：rio-vt 由 Rio 终端团队维护，解析保真度更高，消除 vt100 导致的假阴性/假阳性。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4931) |
| **#4928** | 新增 `thinking_default_expanded` 设置 | 🔴 Closed | 解决 SSH/Tmux 下 Space 键被捕获导致无法展开思维块，默认展开模式兼顾无障碍与偏好。 | [Link](https://github.com/Hmbown/CodeWhale/pull/4928) |

---

## 5. 功能需求趋势（从 Issues 提炼）

1.  **计费与成本透明化** ⭐⭐⭐⭐⭐  
    `#4797` `#4939` `#4927` 连续推进：双计价体系合一、缓存写入计价、路由级拆解、CNY 动态汇率——**商业化落地的硬性前提**。

2.  **跨平台兼容性（Windows 优先）** ⭐⭐⭐⭐  
    `#4764` CRLF 编辑失败、`#4930` Shell 交互阻塞、`#4928` SSH/Tmux 按键冲突——**企业级采用的拦路虎**。

3.  **TUI 交互体验现代化** ⭐⭐⭐⭐  
    `#2342` 文件点击预览、`#998` 悬停全文、`#3897` 流式渲染 O(N²) 优化、`#4923` 视觉系统重构——**“所见即所得”向 IDE 级交互靠拢**。

4.  **Provider 生态扩展与差异化路由** ⭐⭐⭐  
    `#4526` StepFun Plan/Go 端点、`#4467` OpenCode Zen、`#4921` 计费路由分阶段——**多模型、多套餐、多认证方式的统一抽象层**。

5.  **文档与演示缺失（市场化短板）** ⭐⭐⭐  
    `#4906` 无真实演示、`#4934` 官网主题不一、`#3984` Work 面缺乏实证文档——**获客转化的“最后一公里”**。

6.  **工程质量与可维护性** ⭐⭐⭐  
    `#4785` 死代码预算、`#4931` rio-vt 迁移、`#4932` 严格 Clippy、`#4907` CI 部署逻辑修正——**长期演进的基建投资**。

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点/需求 | 典型 Issue/PR | 影响面 | 紧迫度 |
|-----------|---------------|--------|--------|
| **Windows 原生体验断层** | `#4764` CRLF 编辑失败、`#4930` 前台 Shell 交互 | 所有 Windows 开发者 | 🔴 P0 |
| **SSH/Tmux 环境下按键冲突** | `#4928` Space 被捕获、`#4930` Enter 语义混淆 | 远程开发/服务器端用户 | 🔴 P0 |
| **账单不准/不透明导致信任危机** | `#4797` 双计价、`#4939` 缓存未计价、CNY 硬编码 | 付费用户/企业采购 | 🔴 P0 |
| **Runner 入网命令 `/rc` 缺失** | `#4936` 官网引导失效 | 全量新用户首次体验 | 🔴 P0 |
| **长消息流式渲染卡顿** | `#3897` O(N²) Markdown 重解析 | 重度对话/大文件生成用户 | 🟠 P1 |
| **输出文件无法直达预览** | `#2342` 点击打开文件 | 代码审阅/重构高频场景 | 🟠 P1 |
| **新用户无视频/GIF演示** | `#4906` 官网/README 纯文本 | 潜在用户评估决策 | 🟠 P1 |
| **技术债积压风险重构** | `#4785` 464 死代码豁免 | 核心维护者/长期演进 | 🟡 P2 |

---

> **分析师备注**：今日动态呈现典型的 **“发布前冲刺”特征**——v0.9.2 RC 集成分支锁定，核心特性批量合入，同时暴露出三类 **发布阻断级缺陷**（`/rc` 缺失、Windows CRLF、账单准确性）。建议关注未来 48h 内 `#4936` `#4764` `#4927` 后续 PR 的合入情况，将决定 v0.9.2 正式版发布窗口。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*