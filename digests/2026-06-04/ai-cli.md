# AI CLI 工具社区动态日报 2026-06-04

> 生成时间: 2026-06-04 00:48 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 — 2026-06-04

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从"能用"到"好用"的深水区攻坚阶段**。各工具在 Agent 可靠性、多平台一致性和安全隔离三大维度上集中爆发问题，标志着早期功能竞赛已让位于稳定性与体验的精耕细作。**安全基础设施**成为今日最大亮点——OpenAI Codex 的 Noise 加密通信栈、Protected Data Mode、Pi 的工作区审批系统、OpenCode 的嵌入式 V2 会话运行时，均指向同一趋势：AI Agent 正在从"信任执行"走向"验证执行"。与此同时，**计费透明度**（Claude Code）、**认证体系割裂**（Codex）、**CJK 输入法全面崩溃**（Copilot CLI）等体验级痛点持续消耗社区信任，成为各工具留存用户的关键瓶颈。整体来看，生态已进入"架构重构期"——底层通信、会话管理、插件系统均在经历代际升级，预计未来 1-2 个版本周期将出现显著分化。

---

## 2. 各工具活跃度对比

| 工具 | Issues 数 | PR 数 | Release | 活跃度评级 |
|------|-----------|-------|---------|-----------|
| **Claude Code** | ~10（精选 Top） | 2（更新） | ✅ v2.1.162 | 🟡 中 |
| **OpenAI Codex** | ~50 | 10+（更新） | ✅ v0.137.0-alpha.4/5 | 🔴 高 |
| **Gemini CLI** | ~10（精选 Top） | 10（更新） | ✅ v0.45.0 + v0.46.0-preview.1 | 🟡 中 |
| **GitHub Copilot CLI** | 42 | 1 | — | 🟡 中 |
| **Kimi Code CLI** | 7 | 1 | — | 🟢 低 |
| **OpenCode** | ~10（精选 Top） | 10（更新） | — | 🔴 高 |
| **Pi** | ~10（精选 Top） | 10（更新） | — | 🟡 中 |
| **Qwen Code** | 36 | 50（更新） | ✅ v0.17.1 | 🔴 高 |

> **数据说明**：Issues 数为过去 24 小时新增/更新总量（部分工具为精选 Top 10），PR 数为有更新的 PR 数量。

**关键发现**：Qwen Code 以 50 条 PR 更新居首，显示其社区贡献最为活跃；OpenAI Codex 和 OpenCode 在 PR 质量上领先，涉及底层架构重构；Kimi Code CLI 活跃度最低，社区规模仍较小。

---

## 3. 共同关注的功能方向

### ① Agent 可靠性与稳定性（7/8 工具涉及）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | 后台任务状态回弹、Worktree 会话崩溃、Bash 调用静默失败 |
| Gemini CLI | Generalist agent 无限挂起、子代理状态误报成功、Shell 命令卡死 |
| OpenCode | 嵌套子代理权限丢失、瞬态网络错误杀 session、CPU 占用飙升 |
| Pi | Opus 4.8 多轮对话崩溃、大型会话空闲 CPU 过高 |
| Qwen Code | 模型中断后丢失上下文、并行 subAgent 串台 |

> **本质诉求**：Agent 从"单次调用可靠"进化到"长程工作流可靠"，涉及状态持久化、错误传播、资源隔离等系统工程问题。

### ② 安全与沙箱隔离（6/8 工具涉及）

| 工具 | 具体表现 |
|------|---------|
| OpenAI Codex | Noise 加密通信栈、Protected Data Mode 已合并 |
| GitHub Copilot CLI | 沙箱模式 49 👍 全仓库最高 |
| OpenCode | 嵌入式 V2 会话运行时、Shell 取消竞态修复 |
| Pi | 工作区审批系统 PR、扩展工具名冲突崩溃 |
| Qwen Code | Workflow node:vm 沙箱、skill allowedTools 自动审批 |
| Gemini CLI | Auto Memory 安全脱敏、路径遍历漏洞修复 |

> **本质诉求**：AI Agent 的权限边界正在从"约定"走向"机制"——加密通信、沙箱执行、审批流程成为标配。

### ③ Windows 平台体验（5/8 工具涉及）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | Bash 环境锁死、LSP 符号搜索异常、OneDrive 冲突 |
| OpenAI Codex | WSL 性能差到不可用、VS Code 扩展卡死 |
| GitHub Copilot CLI | 插件 hooks 路径解析失败、CJK 气泡重叠 |
| Pi | bash 检测路径硬编码、终端滚动跳变 |
| Qwen Code | Windows SMB 路径处理 |

> **本质诉求**：Windows 开发者不再是"二等公民"，跨平台一致性已成为用户留存底线。

### ④ MCP/插件系统规模化（5/8 工具涉及）

| 工具 | 具体表现 |
|------|---------|
| OpenAI Codex | Prompt Hooks 运行时、MCP 工具暴露问题 |
| GitHub Copilot CLI | MCP 吃掉 73% 上下文窗口、hook 执行失败 |
| OpenCode | MCP/TUI 通知桥接、插件缓存与权限回复丢失 |
| Pi | 扩展工具名冲突、临时扩展缓存隔离 |
| Qwen Code | skill allowedTools 自动审批、自动 skill 干扰 |

> **本质诉求**：MCP 生态从"能跑"到"能规模化"，上下文预算管理、插件隔离、权限粒度是三大瓶颈。

### ⑤ 多智能体编排（3/8 工具涉及，但热度极高）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | 后台 Agent 会话崩溃、Worktree Agent 可靠性 |
| OpenCode | 嵌套子代理权限路由、多代理工作流 |
| Qwen Code | Dynamic Workflows 移植（node:vm 沙箱） |

> **本质诉求**：从"单 Agent 执行"到"多 Agent 协作"，权限路由、状态同步、任务编排是核心挑战。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 | 当前阶段 |
|------|---------|---------|-------------|---------|
| **Claude Code** | 企业级 Agent 工作流平台 | 专业开发者、团队 | 强 Agent 能力（Worktree、后台任务、子代理）、深度 IDE 集成、1M 上下文长程任务 | 功能领先但计费/稳定性承压 |
| **OpenAI Codex** | 安全优先的 Agent 基础设施 | 企业用户、安全敏感场景 | Rust 重写、Noise 加密通信、Protected Data Mode、Prompt Hooks 插件体系 | 架构重构期，安全特性领先 |
| **Gemini CLI** | Google 生态 Agent 入口 | Google Cloud 用户、Gemini 用户 | 模型版本迁移（3.5 Flash GA）、Auto Memory 记忆系统、AST 感知代码理解 | 模型迭代驱动，Agent 稳定性待提升 |
| **GitHub Copilot CLI** | GitHub 生态 CLI 延伸 | GitHub 用户、VS Code 用户 | 与 GitHub 深度集成、插件 hooks 系统、沙箱安全 | CJK 渲染危机中，国际化是短板 |
| **Kimi Code CLI** | 轻量级 Web-first CLI | 个人开发者、Web 用户 | Web UI 优先、ACP 协议（Zed 集成）、多模态 placeholder | 早期阶段，Web 体验待完善 |
| **OpenCode** | 开源 Agent 运行时平台 | 开源社区、自建 LLM 用户 | 嵌入式 V2 运行时、Effect 架构、多 Provider 支持、桌面端 Electron | 架构重构期，社区贡献最活跃 |
| **Pi** | 多 Provider 聚合客户端 | 模型切换用户、多平台开发者 | 统一多 Provider 接口、扩展审批系统、Bedrock/Vertex 企业适配 | Provider 生态扩展期 |
| **Qwen Code** | 生产级 Daemon 化 CLI | 后端开发者、生产部署场景 | Daemon 架构、ACP 协议、OpenTelemetry 可观测性、Dynamic Workflows | 快速迭代期，生产化特征最明显 |

**关键差异维度**：
- **架构路线**：Codex（Rust 重写）和 OpenCode（Effect 运行时）在底层架构上投入最大；Qwen Code 的 Daemon 化路线独辟蹊径；其余工具仍以 Node.js/TypeScript 为主。
- **安全投入**：Codex > OpenCode > Pi > 其余，Codex 的 Noise 加密栈和 Protected Data Mode 领先一个身位。
- **Agent 深度**：Claude Code > OpenCode > Qwen Code > 其余，Claude Code 的 Worktree/后台任务/子代理体系最为成熟。
- **开源社区活力**：OpenCode（50 PR 更新）> Qwen Code（50 PR 更新）> Pi > 其余。

---

## 5. 社区热度与成熟度

```
社区活跃度（Issues + PR 总量）

Qwen Code      ████████████████████████████████████████  86
OpenCode       ██████████████████████████████████████    ~60
OpenAI Codex   ████████████████████████████████████      ~60
GitHub Copilot ██████████████████████████████            43
Gemini CLI     ██████████████████████████████            ~20
Claude Code    ████████████████████████████              ~12
Pi             ████████████████████████████              ~20
Kimi Code      ████████                                  ~8
```

| 维度 | 领先者 | 说明 |
|------|--------|------|
| **社区贡献活跃度** | OpenCode、Qwen Code | PR 更新量远超其他工具，社区开发者参与度高 |
| **Issue 讨论深度** | Claude Code、OpenAI Codex | 单 Issue 评论数高（如 Codex #23794 达 163 条），社区讨论深入 |
| **功能成熟度** | Claude Code | Agent 功能最完整（Worktree、后台任务、子代理、1M 上下文），但成熟度与复杂度带来的 bug 也最多 |
| **架构先进度** | OpenAI Codex、OpenCode | Noise 加密栈、嵌入式 V2 运行时代表下一代架构方向 |
| **用户基数（信号）** | GitHub Copilot CLI、Claude Code | Issue 数量多、场景覆盖广，反映用户基数大 |
| **早期阶段** | Kimi Code CLI | Issue 量少、PR 少、社区规模小，仍处于早期 |

**快速迭代信号**：
- 🔴 **Qwen Code**：v0.17.1 发布 + 50 条 PR 更新，迭代速度最快
- 🔴 **OpenAI Codex**：24 小时内连续发布两个 alpha 版本 + 底层架构大规模重构
- 🟡 **OpenCode**：无新版本但 PR 密集，预计近期有重大版本
- 🟡 **Gemini CLI**：正式版 + 预览版双轨发布，模型迁移节奏快

---

## 6. 值得关注的趋势信号

### 趋势一：AI Agent 安全基础设施正在标准化

**信号**：Codex 的 Noise 加密通信栈（9 个 PR 系统性合并）、Protected Data Mode、Pi 的工作区审批系统、OpenCode 的 V2 运行时沙箱——四款工具在同一时间段集中投入安全基础设施。

**对开发者的价值**：在选择 AI CLI 工具时，**安全隔离能力**应成为与"模型能力"并列的评估维度。预计 2026 年下半年，"是否支持沙箱执行"将成为企业采购的硬性指标。

### 趋势二：MCP 生态面临"规模化墙"

**信号**：Copilot CLI 的 MCP 吃掉 73% 上下文窗口、OpenCode 的 MCP 插件缓存问题、Qwen Code 的 skill 干扰问题——MCP 从"能跑"到"能跑 10 个 server"之间存在显著的工程鸿沟。

**对开发者的价值**：当前 MCP 生态仍处于"玩具阶段"，生产级部署需要关注工具的上下文预算管理能力。建议优先选择已投入 MCP 优化的工具（如 Codex 的 Prompt Hooks 运行时）。

### 趋势三：多智能体编排成为下一个功能制高点

**信号**：Qwen Code 的 Dynamic Workflows 移植（PR #4732）、OpenCode 的嵌套子代理权限路由（PR #30639）、Claude Code 的后台 Agent 体系——三款工具同时向"多 Agent 协作"方向发力。

**对开发者的价值**：如果你的工作流涉及复杂的多步骤任务分解，建议优先关注 Claude Code（最成熟）和 Qwen Code（最快迭代）。OpenCode 的 V2 运行时可能在未来提供最强的灵活性。

### 趋势四：Windows 和 CJK 用户正在成为"体验债务"的重灾区

**信号**：5/8 工具有 Windows 特有问题，Copilot CLI 的 CJK 渲染 bug 一次性爆发 6 条 Issue——这不是个别工具的疏忽，而是整个生态对非 macOS、非 ASCII 用户群体的系统性欠账。

**对开发者的价值**：如果你是 Windows 或 CJK 用户，当前**macOS 仍是 AI CLI 的最佳体验平台**。如果必须在 Windows 上主力使用，建议优先选择 Qwen Code（Windows SMB 路径已修复）或 OpenCode（跨平台兼容性投入较多）。

### 趋势五：Daemon 化与可观测性是生产部署的入场券

**信号**：Qwen Code 的 Daemon 架构 + OpenTelemetry 覆盖（PR #4749）、OpenCode 的嵌入式 V2 运行时、Codex 的 exec-server 加密通信——三款工具不约而同地投入"常驻进程 + 可观测性"方向。

**对开发者的价值**：如果你需要将 AI CLI 集成到 CI/CD 或自动化流水线中，**Daemon 模式和可观测性支持**是关键选型标准。Qwen Code 目前在这条路上走得最远。

---

> **总结建议**：当前 AI CLI 生态已进入"架构分化期"——Claude Code 在 Agent 功能深度上领先但面临计费信任危机；OpenAI Codex 和 OpenCode 在安全架构上投入最大；Qwen Code 迭代最快且生产化特征明显；GitHub Copilot CLI 用户基数大但 CJK 危机亟待解决。技术决策者应根据**安全需求、平台兼容性、Agent 复杂度**三个维度进行选型，而非单纯比较模型能力。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：`github.com/anthropics/skills`  |  分析截止：2026-06-04

---

## 1. 热门 Skills 排行

以下按社区关注度（评论与点赞综合）排序，筛选当前最具影响力的 PR：

| # | Skill | 作者 | 状态 | 功能摘要 |
|---|-------|------|------|---------|
| 1 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** — 持久化上下文记忆 | varun29ankuS (Dec 2025) | 🟢 OPEN | 为 AI Agent 提供跨会话的持续上下文管理能力，教 Claude 构建结构化记忆、主动调用 `proactive_context` 检索历史信息。解决「长程任务失忆」问题。 |
| 2 | **[aurelion-kernel](https://github.com/anthropics/skills/pull/444)** — 认知框架套件（kernel / advisor / agent / memory） | Chase-Key (Feb 2026) | 🟢 OPEN | 含 4 个子 Skill 的结构化认知框架：5 层思维模板（kernel）、专业咨询（advisor）、任务 Agent（agent）、知识记忆（memory）。定位为企业级知识管理协作框架。 |
| 3 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** — AI 图像与视频生成 | junaid1460 (Feb 2026) | 🟢 OPEN | 基于 Masonry CLI 调用 Imagen 3.0（图像）和 Veo 3.1（视频）生成内容，覆盖文本→视觉全链路，管理生成任务的状态与下载。 |
| 4 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** — 全栈测试模式 | 4444J99 (Mar 2026) | 🟢 OPEN | 覆盖 Testing Trophy 模型、AAA 单元测试范式、React 组件测试（Testing Library）、边界用例处理等完整测试栈指导。 |
| 5 | **[servicenow](https://github.com/anthropics/skills/pull/568)** — ServiceNow 平台全能助理 | Vanka07 (Mar 2026) | 🟢 OPEN | 覆盖 ITSM / ITOM / ITAM / FSM / HRSD / CSM / SPM / SecOps / CSDM / IntegrationHub 等模块的 ServiceNow 平台 Skill。 |
| 6 | **[n8n-builder + n8n-debugger](https://github.com/anthropics/skills/pull/190)** — n8n 工作流构建与调试 | Wolfe-Jam (Dec 2025) | 🟢 OPEN | 2 个社区生产级 Skill：从零构建 n8n 工作流 + 诊断调试。另含 `faf-expert`（FAF 格式持久化上下文 CLAUDE.md 双向同步）。 |
| 7 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — 元 Skill（Skill 质量 & 安全审计） | eovidiu (Nov 2025) | 🟢 OPEN | 在 Skill 仓库层面做结构文档评分（5 维度）和安全审计，属于「Skill 的 Skill」，关注生态底层治理。 |
| 8 | **[agent-creator](https://github.com/anthropics/skills/pull/1140)** — 任务专用 Agent 创建器 | SyedaQurratAI (May 2026) | 🟢 OPEN | 为特定任务创建专用 Agent 集合的元 Skill，用 `evaluation.py` 驱动闭环评估（修复多工具并行调用 bug + Windows 支持）。 |

---

## 2. 社区需求趋势

从 Issue 讨论中提炼出 6 个高频需求方向：

| 趋势方向 | 关键 Issue | 核心诉求 |
|----------|-----------|---------|
| **🔗 组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments 👍7) | 希望在 Claude.ai 内实现团队内 Skill 库的集中共享、一键下发，替代「下载→Slack 传递→手动上传」的繁琐流程。 |
| **🔒 Skill 治理与安全** | [#492](https://github.com/anthropics/skills/issues/492) [#412](https://github.com/anthropics/skills/issues/412) [#1156](https://github.com/anthropics/skills/issues/1156) | 社区 Skill 滥用 `anthropic/` 命名空间冒充官方 → 信任边界被攻击；Agent 治理（策略执行、审计追溯）的空缺；Skill 可移植性标签的可信管理。 |
| **🛠 Skill 工具链成熟度** | [#556](https://github.com/anthropics/skills/issues/556) [#1099](https://github.com/anthropics/skills/issues/1099) [#1050](https://github.com/anthropics/skills/pull/1050) | `run_eval.py` 在 Linux/Windows 上 Skill 触发率 = 0%（`claude -p` 命令无法触发 Skill）；Windows 兼容性问题频发（subprocess PATHEXT、编码等）。 |
| **📦 内容实际分发去重** | [#189](https://github.com/anthropics/skills/issues/189) (👍8) | `document-skills` 与 `example-skills` 两个插件分发同一批 Skill，导致上下文窗口中出现重复条目，浪费 token。 |
| **🔌 Skill ↔ MCP 协议互操作** | [#16](https://github.com/anthropics/skills/issues/16) | 建议将 Skill 以 MCP 协议暴露（如 `generateAlgorithmArt({prompt, p5JsOptions})`），统一 AI 能力发现与打包标准。 |
| **📂 多文件预加载** | [#1220](https://github.com/anthropics/skills/issues/1220) | 当前 Skill 仅预加载 `SKILL.md`，多 referencia 文件（`refs/*.md`）无法在 Skill 调用时自动注入 → 频繁出现断链。 |

---

## 3. 高潜力待合并 Skills

以下 PR 社区互动活跃（评论多、跟踪者众），且与社区痛点高度吻合，有较大概率近期合入：

| PR | 理由 |
|----|------|
| **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 当前社区健康度仅 25%，CONTRIBUTING.md 是最大的单点提升项；维护者已在审查中 |
| **[#363 feature-dev 工作流修复](https://github.com/anthropics/skills/pull/363)** | 修复 TodoWrite 覆盖导致 Phase 6/7 被跳过的 BUG，影响所有 `/feature-dev` 流程用户，近期活跃度仍有评论 |
| **[#538 #539 #541 PDF/DOCX 系列修复](https://github.com/anthropics/skills/pull/538)** | Lubrsy706 连续提交的文档 Skill 修复（大小写敏感、YAML 前置校验、OOXML ID 碰撞），属于存量 Skill 的 Bugfix，合并阻力小 |
| **[#1220 多文件预加载](https://github.com/anthropics/skills/issues/1220)** | 虽为 Issue，但直接催生 Skill 运行时机制改进，已被 PR #1140 等引用，技术价值高 |

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求：在「能力民主化」（丰富 Skill 种类）与「治理基础设施」（信任边界、组织共享、工具链稳定）之间找到平衡 —— 大量 PR/Issue 已指向「谁有权发布 Skill」「Skill 如何分发」「Skill Quality Gates」等元问题，说明 Skills 生态正从「野蛮生长」向「平台化治理」阶段演进。**

---

*报告由 OWL 生成，如需持续关注特定 PR 或 Issue 的进展，可设置 GitHub Watch 或定期重跑本分析。*

---

# Claude Code 社区动态日报 — 2026-06-04

---

## 1. 今日速览

Claude Code 发布新版本 **v2.1.162**，主要增强了 `claude agents --json` 的等待状态可见性，并修复了原生构建下 Grep/Glob 工具在 `--tools` 中显式列出时不生效的问题。社区 Issue 讨论热度持续走高，**1M context 计费/权限问题**成为今日最突出的痛点，多个相关 Issue 集中爆发；Windows 平台 Bash 环境锁死、LSP 符号搜索异常等老问题仍在持续跟进。

---

## 2. 版本发布

### v2.1.162

- **`claude agents --json` 新增 `waitingFor` 字段**：当会话处于等待状态（如等待权限确认）时，JSON 输出中会明确标注阻塞原因，方便外部工具和脚本判断会话状态。
- **`--tools` 显式列出 Grep/Glob 的修复**：在启用嵌入式搜索（embedded search）的原生构建版本中，用户通过 `--tools` 显式指定 `Grep` 或 `Glob` 时，现在会正确提供对应的专用搜索工具，而非像之前一样静默忽略。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 摘要 |
|---|-------|------|------|
| 1 | **[#63060] API Error: Usage credits required for 1M context** | 💬35 👍9 | 用户在使用非 1M 上下文模型时仍被要求开通 1M 用量额度，涉及 macOS 和 API 计费逻辑，社区讨论最为活跃，多人复现。 |
| 2 | **[#17149] LSP workspaceSymbol 发送空查询参数** | 💬30 👍20 | Windows 平台上 LSP 的 `workspaceSymbol` 操作发送空 `query` 参数，导致符号搜索功能失效。创建已超 5 个月，👍 数最高，说明影响面广且长期未修复。 |
| 3 | **[#63870] Bash 工具调用以原始 `<invoke>` 文本输出而非执行** | 💬7 👍10 | 单次会话中出现 23 次 Bash 调用被以原始标记文本输出而未实际执行，附带 JSONL 证据。👍 数高，说明开发者对此类静默失败零容忍。 |
| 4 | **[#52472] 周用量限额提前重置（5天而非7天）** | 💬19 👍3 | 周限额重置时间异常，用户确认应在周四到期却提前到周一，涉及计费公平性。 |
| 5 | **[#59456] 后台任务停止后在会话切换后重新显示为 Running** | 💬10 👍1 | 后台任务面板中停止的任务在会话刷新后状态回弹为"运行中"，状态持久化存在 bug。今日已关闭。 |
| 6 | **[#48769] Remote Agent GitHub 连接器授权错误无解决路径** | 💬7 👍5 | 错误提示要求"在设置中重新授权 GitHub"，但设置 UI 中并无对应入口，用户陷入死循环。 |
| 7 | **[#59628] Worktree 会话可无防护地编辑父 checkout 文件** | 💬6 👍0 | 在 git worktree 中启动的会话虽在 system prompt 声明了 worktree 路径，但未实际阻止 Edit/Write 等工具操作父仓库文件，存在安全隐患。 |
| 8 | **[#63634] /compact 报 1M context 错误即使模型已设为 Sonnet 4.6** | 💬5 👍2 | `/compact` 命令内部强制请求 1M 上下文模型，忽略用户设置的 session model，导致 Pro 用户无法使用压缩功能。 |
| 9 | **[#64349] VS Code 扩展在 Pro 计划下强制使用 1M 上下文（Windows）** | 💬7 👍3 | 与 #63060 类似但聚焦 VS Code 扩展 + Windows 平台，多个重复 Issue 表明该问题跨平台普遍存在。 |
| 10 | **[#65216] Worktree 中的后台 Agent 会话在 agents 视图中重新打开时崩溃** | 💬2 👍0 | 从 agents 视图打开特定后台会话时反复报 "No conversation found with session ID" 并崩溃循环，今日新报告。 |

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **2 个 PR** 有更新，数量较少：

| PR | 状态 | 内容 |
|----|------|------|
| **[#65223] Spelling: Fix typo in security guidance plugin** | 🟢 OPEN | 修复安全指引插件中 "reqwest" → "request" 的拼写错误，小型文档修复。 |
| **[#22919] feat(plugins): add collab plugin for Socratic mentoring mode** | 🔴 CLOSED | 新增 **collab 插件**——苏格拉底式引导模式，Claude 以提问引导开发者自行实现，而非直接编写代码。该 PR 已关闭（未合并）。 |

> 📌 今日 PR 活动较为平淡，社区贡献主要集中在 Issue 反馈和问题排查上。

---

## 5. 功能需求趋势

从今日所有 Issues 中提炼出社区最关注的 **5 大方向**：

### ① 1M 上下文计费与权限模型（最高频）
多个 Issue（#63060、#63908、#64349、#64919、#63634）集中反映：**Pro 用户在未主动请求 1M 上下文时仍被强制要求开通 1M 用量额度**，涉及 `/compact`、VS Code 扩展、macOS/Windows 多平台。这是当前社区最大的痛点。

### ② Windows 平台稳定性
Bash 环境锁死（#49984、#50886）、LSP 符号搜索异常（#17149）、OneDrive 同步冲突（#50886）等 Windows 特有问题持续存在，且修复周期长，Windows 开发者不满情绪明显。

### ③ 后台 Agent 与 Worktree 可靠性
后台任务状态持久化（#59456）、Worktree 中 Agent 会话崩溃（#65216）、Worktree 文件安全防护缺失（#59628）——随着 Agent 工作流复杂度提升，这些场景的健壮性成为新焦点。

### ④ 桌面端（Desktop）体验
Remote Control 初始化失败（#57286）、空 API Key 注入导致 Remote Control 误判（#64710）、会话历史静默丢失（#64403）——桌面端特有 bug 频发，数据丢失类问题尤其引发关注。

### ⑤ IDE 集成增强
VS Code 扩展的 Cursor 式行内编辑（Ctrl+K）功能请求（#62180）代表社区对更深度 IDE 集成的期待，与 Cursor、GitHub Copilot 等竞品的体验差距是驱动因素。

---

## 6. 开发者关注点总结

| 痛点 | 典型表现 | 影响范围 |
|------|----------|----------|
| **计费模型不透明** | 1M context 强制要求、周限额提前重置、用量显示与实际不符 | 全部付费用户，尤其是 Pro 计划 |
| **Windows 平台二等公民** | Bash 环境锁死、LSP 异常、OneDrive 冲突长期未修复 | Windows 开发者 |
| **静默失败无诊断** | Bash 调用以原始文本输出而不报错、MCP 配置错误 /doctor 检测不到 | 所有平台 |
| **Agent 工作流脆弱** | 后台任务状态丢失、Worktree 会话崩溃、子 Agent 遇限流永久退出 | 重度 Agent 用户 |
| **数据安全与持久化** | 会话历史静默清除、Worktree 越权编辑父仓库 | 所有用户 |

> **一句话总结**：社区当前最大的呼声是 **"让计费更可预测、让 Windows 更稳定、让 Agent 更可靠"**。1M context 计费问题已从边缘反馈升级为社区级危机，亟需官方明确回应。

---

*数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | 报告生成时间：2026-06-04*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-04

---

## 1. 今日速览

今日 Codex 社区活跃度极高，**连续发布两个 Rust alpha 版本**（v0.137.0-alpha.4 和 alpha.5），显示底层迭代节奏加快。社区讨论最集中的议题是 **桌面端体验退化**（上下文/Token 用量指示器消失、频繁重连）和 **认证体系的多账户与手机号验证瓶颈**。同时，PR 层面出现了一批围绕 **exec-server Noise 加密通信链**、**Protected Data Mode** 和 **Prompt Hooks 运行时** 的重要基础设施合并，预示着 Codex 在安全隔离和插件扩展性上将迎来显著升级。

---

## 2. 版本发布

| 版本 | 说明 |
|------|------|
| **rust-v0.137.0-alpha.5** | 最新 alpha 版本，具体变更内容待官方 Changelog 补充 |
| **rust-v0.137.0-alpha.4** | 前序 alpha 版本，与 alpha.5 间隔极短，推测为快速修复迭代 |

> 两个 alpha 版本在 24 小时内连续发布，建议关注 `codex-rs` 相关 PR 了解具体变更。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 高热度 / 高影响

| # | 标题 | 关键数据 | 为什么重要 |
|---|------|----------|------------|
| [#23794](https://github.com/openai/codex/issues/23794) | **Codex Desktop 不再显示上下文/Token 用量指示器** | 💬 163 / 👍 160 / ✅ 已关闭 | 这是今日讨论量最高的 Issue。大量用户反馈更新后丢失了可视化的 Token 用量指示，严重影响对上下文窗口的掌控。高赞数说明这是广泛影响的回归 bug，已关闭表明团队已着手修复。 |
| [#11023](https://github://github.com/openai/codex/issues/11023) | **Linux 桌面版 Codex 应用** | 💬 82 / 👍 454 | 点赞数最高的开放 Issue，反映了 Linux 开发者群体的强烈需求。许多用户因 macOS 上的功耗问题希望迁移到 Linux 桌面，但官方尚未提供原生支持。 |
| [#25749](https://github.com/openai/codex/issues/25749) | **无法验证遗留手机号且无替代恢复路径** | 💬 34 / 👍 17 | 用户通过 Google OAuth + MFA 可正常使用 ChatGPT，但 Codex 要求验证一个已停用的旧手机号，且无法更换。这暴露了 Codex 认证流程与 OpenAI 主账户体系的不一致。 |
| [#25828](https://github.com/openai/codex/issues/25828) | **手机号验证无法发送验证码（印尼等地区）** | 💬 10 / 👍 0 | 与 [#25749](https://github.com/openai/codex/issues/25749) 形成呼应，多个地区用户报告短信验证失败，说明手机号验证存在区域性服务问题。 |
| [#25765](https://github.com/openai/codex/issues/25765) | **强制登出后无法重新登录 Codex（手机验证失败）** | 💬 9 / 👍 1 | 用户可正常登录 ChatGPT 但无法登录 Codex，进一步证实 Codex 的认证路径存在独立于 ChatGPT 的缺陷。 |

### 🟡 性能与体验痛点

| # | 标题 | 关键数据 | 为什么重要 |
|---|------|----------|------------|
| [#21527](https://github.com/openai/codex/issues/21527) | **Codex 响应速度过慢** | 💬 25 / 👍 14 | 涵盖 VS Code 插件和桌面端的普遍性能抱怨，Pro 用户也受影响。 |
| [#24428](https://github.com/openai/codex/issues/24428) | **Codex CLI 响应太慢（SSE 回退场景）** | 💬 13 / 👍 25 | 用户明确指出从 WebSocket 回退到 SSE 后延迟显著增加，指向连接协议层面的优化空间。 |
| [#25715](https://github.com/openai/codex/issues/25715) | **WSL 作为 Agent 环境时 Codex 慢到不可用** | 💬 11 / 👍 15 | Windows + WSL2 用户报告常规交互延迟严重，影响 Windows 开发者体验。 |
| [#14297](https://github.com/openai/codex/issues/14297) | **新版 Codex App 回复前执行 5 次 Reconnecting...** | 💬 44 / 👍 0 / ✅ 已关闭 | macOS 用户反馈新版出现反复重连后才开始回答，旧版无此问题。已关闭说明已修复。 |

### 🟢 功能请求

| # | 标题 | 关键数据 | 为什么重要 |
|---|------|----------|------------|
| [#4432](https://github.com/openai/codex/issues/4432) | **通过 `--auth-profile` 实现一等多账户认证** | 💬 15 / 👍 102 | 点赞数第二高的功能请求。开发者需要在同一机器上切换多个 ChatGPT/API 账户（个人/客户/企业），当前单账户设计是实际使用中的重大阻碍。 |

---

## 4. 重要 PR 进展（Top 10）

### 🔒 安全与数据保护

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| [#26229](https://github.com/openai/codex/pull/26229) | **Add protected data mode to core and app server** | ✅ 已合并 | 新增核心层级的"受保护数据模式"。MCP 工具结果可通过 `openai/protected_data_mode` 标记激活该模式，状态在 resume、fork、thread-store 和 rollout 路径中持久化。激活时连接器调用需显式授权，为敏感数据处理提供安全隔离。 |

### 🔐 加密通信基础设施（Noise 协议栈）

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| [#26239](https://github.com/openai/codex/pull/26239) | **exec-server: Noise channel foundation** | 🔄 开放中 | Noise 加密通道的基础层，为后续 PR 提供底层支撑。 |
| [#26241](https://github.com/openai/codex/pull/26241) | **exec-server: Noise relay wire** | 🔄 开放中 | Noise 中继的 wire protocol 实现。 |
| [#26242](https://github.com/openai/codex/pull/26242) | **exec-server: Noise relay transport** | 🔄 开放中 | Noise 中继传输层。 |
| [#26243](https://github.com/openai/codex/pull/26243) | **exec-server: Noise relay codec tests** | 🔄 开放中 | Noise 中继编解码测试。 |
| [#26244](https://github.com/openai/codex/pull/26244) | **exec-server: Noise relay E2E** | 🔄 开放端到端测试。 |
| [#26245](https://github.com/openai/codex/pull/26245) | **exec-server: Noise CLI opt-in** | 🔄 开放中 | CLI 端启用 Noise 加密的可选开关。 |
| [#26246](https://github.com/openai/codex/pull/26246) | **exec-server: Noise runtime tests** | 🔄 开放中 | Noise 运行时测试。 |
| [#26247](https://github.com/openai/codex/pull/26247) | **exec-server: Noise executor transport** | 🔄 开放中 | Noise executor 传输层。 |
| [#26273](https://github.com/openai/codex/pull/26273) | **exec-server: Noise remote opt-in** | 🔄 开放中 | 远程端启用 Noise 加密的可选开关。 |

> **📌 解读：** 这批 PR 构成了一个完整的 **Noise 协议加密通信栈**（从基础层 → wire → transport → codec → E2E 测试 → CLI/Remote 端启用），全部按顺序堆叠合并。这标志着 Codex exec-server 正在引入生产级的加密通信能力，对远程执行和沙箱隔离场景意义重大。

### 🧩 插件与 Hooks 系统

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| [#26267](https://github.com/openai/codex/pull/26267) | **Add prompt hook runtime** | 🔄 开放中 | 为 Prompt Hooks 添加运行时，支持模型驱动的 handler 执行，且不耦合核心推理细节。建立了 provider-agnostic 的执行和事件语义。 |
| [#26268](https://github.com/openai/codex/pull/26268) | **Expose prompt hooks to clients** | 🔄 开放中 | 向客户端暴露 Prompt Hook 的元数据（定义、模型、`continueOnBlock` 行为），让用户在启用前可审查 hook 行为。 |
| [#26272](https://github.com/openai/codex/pull/26272) | **Load plugin hooks without other plugin capabilities** | 🔄 开放中 | 优化 `hooks/list` 加载路径——不再加载每个插件的 skills、MCP 配置等无关能力，减少 TUI 渲染关键路径上的延迟。 |
| [#24634](https://github.com/openai/codex/pull/24634) | **Add prompt hooks** | 🔄 开放中 | Prompt Hook 配置字段和推理侧请求的基础实现，确保不替换主对话的 WebSocket 缓存状态。 |

### 🖥️ 进程管理与终端

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| [#26206](https://github.com/openai/codex/pull/26206) | **Add managed process spawning crate** | 🔄 开放中 | 新增 `codex-process` crate，提供显式的子进程生命周期管理 API，使进程所有权错误可诊断。 |
| [#26041](https://github.com/openai/codex/pull/26041) | **Add app-server background terminal process APIs** | 🔄 开放中 | 新增实验性 v2 API，由 app-server 作为后台终端进程的真实来源（而非本地进程树猜测），支持列出和终止已加载线程的后台终端。 |
| [#26013](https://github.com/openai/codex/pull/26013) | **Add terminal visualization instructions** | 🔄 开放中 | 为 CLI 和 Exec 会话源添加终端特定的开发者指令，支持紧凑 ASCII 图表、树、时间线或表格的可视化选择规则。 |

---

## 5. 功能需求趋势

从今日 50 条 Issues 中，社区需求集中在以下方向：

| 排名 | 方向 | 代表 Issues | 趋势判断 |
|------|------|-------------|----------|
| 1️⃣ | **多账户认证与管理** | [#4432](https://github.com/openai/codex/issues/4432) 👍102、[#9648](https://github.com/openai/codex/issues/9648)、[#20500](https://github.com/openai/codex/issues/20500) 👍45、[#12029](https://github.com/openai/codex/issues/12029) 👍38 | 🔥 最强烈的功能需求。开发者需要在同一设备上管理个人/企业/客户账户，当前单账户设计严重阻碍实际使用。 |
| 2️⃣ | **认证流程修复（手机号验证）** | [#25749](https://github.com/openai/codex/issues/25749)、[#25828](https://github.com/openai/codex/issues/25828)、[#25765](https://github.com/openai/codex/issues/25765)、[#25820](https://github.com/openai/codex/issues/25820) | 🔥 高频痛点。手机号验证失败、无法更换、与 ChatGPT 认证不一致等问题集中爆发。 |
| 3️⃣ | **性能优化** | [#21527](https://github.com/openai/codex/issues/21527)、[#24428](https://github.com/openai/codex/issues/24428)、[#25715](https://github.com/openai/codex/issues/25715) | 📈 持续关注。CLI 和桌面端均有速度抱怨，SSE 回退和 WSL 环境尤为突出。 |
| 4️⃣ | **Linux 桌面支持** | [#11023](https://github.com/openai/codex/issues/11023) 👍454 | 📈 长期高需求。454 点赞说明 Linux 开发者群体庞大且未被满足。 |
| 5️⃣ | **使用量/速率限制透明化** | [#26253](https://github.com/openai/codex/issues/26253)、[#24337](https://github.com/openai/codex/issues/24337)、[#24080](https://github.com/openai/codex/issues/24080)、[#20310](https://github.com/openai/codex/issues/20310) | 📈 用户希望更清晰地了解限额消耗和重置时间。 |
| 6️⃣ | **MCP 工具集成改进** | [#19425](https://github.com/openai/codex/issues/19425)、[#26234](https://github.com/openai/codex/issues/26234) 👍16 | 📈 自定义 MCP server 的工具暴露问题和非 OpenAI 端点的命名空间扁平化需求。 |
| 7️⃣ | **Windows 体验** | [#15975](https://github.com/openai/codex/issues/15975)、[#25715](https://github.com/openai/codex/issues/25715)、[#25810](https://github.com/openai/codex/issues/25810)、[#26037](https://github.com/openai/codex/issues/26037) | 📈 Windows 平台特有的 VS Code 扩展卡死、WSL 性能、沙箱策略继承、插件发现等问题持续存在。 |

---

## 6. 开发者关注点总结

### 🚨 紧急痛点
1. **认证体系割裂** — Codex 的认证流程（尤其是手机号验证）与 OpenAI/ChatGPT 主账户体系不一致，导致已验证用户被锁定在 Codex 之外。多账户支持是企业用户的刚需。
2. **桌面端体验退化** — Token 用量指示器消失、频繁重连等回归问题影响日常使用，团队已关闭部分 Issue 表明正在修复中。

### 📊 高频反馈
3. **性能是跨平台共性问题** — 无论 CLI 还是桌面端，无论 macOS/Windows/Linux，响应速度慢是普遍抱怨。SSE 回退路径和 WSL 环境尤为严重。
4. **Windows 生态支持不足** — 从 VS Code 扩展卡死到 WSL 性能、沙箱策略继承异常、本地插件未被发现，Windows 开发者的体验明显落后。

### 🏗️ 基础设施进展
5. **安全与扩展性大幅升级** — Noise 加密通信栈、Protected Data Mode、Prompt Hooks 运行时等一批核心基础设施 PR 正在合并中，预示着 Codex 在安全隔离、远程执行和插件系统方面将有质的飞跃。

---

*数据来源：github.com/openai/codex | 统计时间：2026-06-04 | 生成工具：OWL*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-04

---

## 1. 今日速览

今日 Gemini CLI 迎来 **v0.45.0 正式版** 和 **v0.46.0-preview.1** 两个版本发布，前者包含 Termux 环境修复等多项改进，后者为补丁版本。社区 Issues 持续聚焦 **Agent 稳定性**（挂起、子代理恢复异常）和 **Auto Memory 系统安全**，多个安全类 PR 正在推进。整体来看，团队正集中精力解决 Agent 可靠性问题和模型版本迁移（Gemini 3.5 Flash GA）。

---

## 2. 版本发布

### v0.45.0（正式版）
- **Termux 修复**：防止 Termux 环境下 relaunch 和 resize remount 循环（PR #27110）
- 包含此前 nightly 版本的累积更新
- 🔗 [Release v0.45.0](https://github.com/google-gemini/gemini-cli/pull/27362)

### v0.46.0-preview.1（预览版）
- 基于 v0.46.0-preview.0 的补丁版本，cherry-pick 修复（PR #27645）
- 主要变更：更新模型解析逻辑，在 `useGemini3_5Flash` 标志启用时优先使用 Gemini 3.5 Flash GA
- 🔗 [Release v0.46.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/27655)

---

## 3. 社区热点 Issues

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|-----------|---------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** | 通用代理在执行简单操作（如创建文件夹）时无限挂起，严重影响核心工作流 | 👍8，7条评论，P1 级别 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 达到 MAX_TURNS 后错误报告为成功** | 子代理在达到最大轮次限制后仍报告 `status: "success"`，隐藏了中断事实，可能导致用户误以为任务完成 | 👍2，6条评论 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令执行后卡在 "Waiting input"** | 命令已完成后 CLI 仍显示等待输入，属于核心执行流程阻塞问题 | 👍3，4条评论 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **组件级评估体系建设** | EPIC 级别，跟踪 76+ 行为评估测试的扩展，关系到 Agent 质量保障基础设施 | 7条评论 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST 感知文件读取/搜索/代码库映射评估** | 探索通过 AST 工具减少 token 消耗、提升代码理解精度，可能显著改善 Agent 效率 | 👍1，7条评论 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory 安全：确定性脱敏与日志削减** | Auto Memory 在脱敏前已将内容送入模型上下文，存在安全隐患 | 3条评论，安全类 P2 |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | **Auto Memory 无效 patch 隔离** | 内存收件箱静默跳过无效 patch，可能导致恶意或损坏的补丁被忽略而不告警 | 3条评论 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 低信号会话无限重试** | 提取代理跳过低信号会话后，该会话会被反复重新处理，浪费资源 | 3条评论 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 不主动使用 skills 和子代理** | 用户反馈 Agent 几乎不会自主调用已配置的自定义 skills 和子代理，需显式指示 | 6条评论 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **工具数量超过 128 时出现 400 错误** | 工具过多时 API 报错，Agent 缺乏智能限流机制 | 3条评论 |

---

## 4. 重要 PR 进展

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#27659](https://github.com/google-gemini/gemini-cli/pull/27659) | **修复 skill 安装/链接/卸载中的路径遍历漏洞** | 🔒 安全 | 修复 `installSkill`、`linkSkill`、`uninstallSkill` 中的三个路径遍历漏洞，防止 frontmatter 解析时的目录穿越攻击 |
| [#27572](https://github.com/google-gemini/gemini-cli/pull/27572) | **修复 tmux 误判终端背景色** | 修复 | 解决在 tmux（尤其是 mosh）中错误检测浅色终端背景导致主题切换异常的问题 |
| [#27619](https://github.com/google-gemini/gemini-cli/pull/27619) | **MCP 工具发现原子更新** | 修复 | 在网络瞬断时通过原子更新模式保留 MCP 工具注册，避免 "tool not found" 错误 |
| [#27645](https://github.com/google-gemini/gemini-cli/pull/27645) | **优先使用 Gemini 3.5 Flash GA** | 功能 | 当 `useGemini3_5Flash` 标志启用时，auto 模式和 flash 分类层优先使用 GA 版本（已合入） |
| [#27614](https://github.com/google-gemini/gemini-cli/pull/27614) | **新增 Gemini 3.5 Flash 模型族支持** | 功能 | 添加 `gemini-3.5-flash-preview` 和 `gemini-3.5-flash-lite-preview` 常量及配置（已合入） |
| [#27639](https://github.com/google-gemini/gemini-cli/pull/27639) | **企业发布路径禁用自动更新** | 修复 | 检测 Google 内部发布路径（`/google/bin/`）时禁用自动更新提示（已合入） |
| [#27505](https://github.com/google-gemini/gemini-cli/pull/27505) | **修复 CJK 宽字符渲染多余空格** | 修复 | 解决 shell 输出中 CJK 字符间被错误插入额外空格的问题，改善国际化用户体验 |
| [#25786](https://github.com/google-gemini/gemini-cli/pull/25786) | **增强 /copy 命令支持索引和工具结果** | 功能 | `/copy N` 支持复制第 N 条 AI 回复，并提取 MCP tool functionResponse 中的文本内容 |
| [#27570](https://github.com/google-gemini/gemini-cli/pull/27570) | **Flash GA 模型迁移（实验标志门控）** | 功能 | 通过实验标志将旧版 Gemini Flash 迁移至 `gemini-3.5-flash` GA，保持向后兼容（已合入） |
| [#21541](https://github.com/google-gemini/gemini-cli/pull/21541) | **策略文件 EBUSY 回退和 TOML 解析恢复** | 修复 | 扩展 rename 错误捕获以处理 EBUSY，增加 TOML 解析失败恢复机制（已合入） |

---

## 5. 功能需求趋势

从当前活跃 Issues 中可提炼出以下 **5 大功能方向**：

### ① Agent 可靠性与稳定性（最高频）
- 子代理挂起/无限等待（#21409）、子代理状态误报（#22323）、Shell 命令卡死（#25166）
- 子代理权限控制异常（#22093）、Agent 不主动使用 skills（#21968）

### ② Auto Memory 系统安全与质量
- 安全脱敏（#26525）、无效 patch 隔离（#26523）、低信号会话重试（#26522）、综合质量改进（#26516）
- 这是一个新兴的集中关注领域，多个 P2 安全/质量 Issue 在同一时间段创建

### ③ 模型版本迁移
- Gemini 3.5 Flash GA 迁移（PR #27645、#27614、#27570）
- 工具数量超限处理（#24246）

### ④ 代码理解能力增强
- AST 感知工具评估（#22745、#22746、#22747）
- 组件级评估体系建设（#24353）

### ⑤ 终端体验优化
- CJK 字符渲染（PR #27505）、tmux 兼容性（PR #27572）、终端 resize 性能（#21924）、外部编辑器退出后刷新（#24935）

---

## 6. 开发者关注点

### 🔴 高频痛点
1. **Agent 执行不可靠**：挂起、状态误报、子代理不服从配置是开发者抱怨最多的问题，直接影响日常使用信心
2. **Auto Memory 安全隐患**：多个安全类 Issue 集中出现，开发者对记忆系统的数据脱敏和 patch 验证机制表示担忧
3. **Agent 自主性不足**：已配置的 skills 和子代理不被主动调用，需要用户显式指示，降低了自动化体验

### 🟡 持续关注
4. **模型版本碎片化**：从 3.0 到 3.5、从 preview 到 GA 的迁移过程中，开发者需要清晰的版本兼容指引
5. **国际化支持**：CJK 字符渲染、多语言终端兼容性仍有改进空间
6. **评估基础设施**：内部评估测试的稳定性和可信度（#23166、#23313）是团队质量保障的基础

### 💡 建议关注
- 安全 PR #27659（路径遍历修复）尚未合入，建议关注进展
- AST 感知工具方向（#22745 系列）可能带来 Agent 效率的显著提升，值得持续跟踪

---

*数据来源：github.com/google-gemini/gemini-cli | 统计时间：2026-06-04*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-04

---

## 1. 今日速览

过去 24 小时 Copilot CLI 社区活跃度较高，共新增/更新 **42 条 Issues** 和 **1 条 PR**，无新版本发布。今日最值得关注的两大趋势：**CJK（中日韩）输入法渲染问题集中爆发**（至少 5 条相关 Issue），以及 **MCP/插件系统消耗过多上下文窗口**导致新会话即触发自动压缩的严重性能问题。此外，**沙箱模式**（Issue #892）以 49 个 👍 持续领跑社区呼声最高的功能请求。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

以下按热度与影响力挑选 10 条最值得关注的 Issue：

### 🔴 高优先级 / 严重 Bug

**① [Issue #3539](https://github.com/github/copilot-cli/issues/3539) — MCP/插件系统消耗 73% 上下文窗口，首条消息即触发自动压缩**
- **状态：** OPEN | 👍 2 | 💬 5
- **摘要：** 配置约 10 个 MCP 服务器后，System/Tools 部分占用 146k tokens（200k 窗口的 73%），导致新会话在用户发送首条消息前就触发 auto-compaction，严重影响可用性。
- **为什么重要：** 这是 MCP 重度用户的致命痛点，直接导致 Copilot CLI 在复杂插件配置下几乎不可用。社区需要官方尽快优化工具描述的 token 占用或提供精简模式。

**② [Issue #3542](https://github.com/github/copilot-cli/issues/3542) — 企业 MCP 白名单超出硬编码 token 限制，导致无限压缩循环**
- **状态：** OPEN | 👍 1 | 💬 1
- **摘要：** 企业环境下 MCP 白名单的工具 schema 超出硬编码 token 上限，触发持续 compaction 循环。
- **为什么重要：** 与 #3539 互为补充，说明问题不仅存在于个人用户，企业场景同样严重，且表现为无限循环这一更极端的形式。

**③ [Issue #3659](https://github.com/github/copilot-cli/issues/3659) — Windows 上插件 hooks 无法执行，导致所有 prompt 失败**
- **状态：** OPEN | 👍 0 | 💬 2
- **摘要：** v1.0.57 起，Windows 上 preToolUse hook 因路径解析问题（`.github/hooks/` 下的 `.ps1` 脚本参数未正确传递）持续抛异常，导致无法发送任何 prompt。
- **为什么重要：** 这是 Windows 平台上的阻断性 bug，插件系统完全不可用。

### 🟡 平台兼容性与输入法问题（今日高频主题）

**④ [Issue #3654](https://github.com/github/copilot-cli/issues/3654) — CJK 字符在 Space 后输入不可见**
- **状态：** CLOSED | 💬 1
- **摘要：** v1.0.55 启用 cell-based terminal renderer 后，中文字符在按 Space 后立即输入时光标位置正确但字形不可见，直到选中或提交才显示。
- **为什么重要：** 这是今日集中爆发的 CJK 渲染 bug 系列之一，影响所有中日韩用户的基本输入体验。

**⑤ [Issue #3648](https://github.com/github/copilot-cli/issues/3648) — 日文与 ASCII 混合输入导致布局错乱**
- **状态：** CLOSED | 💬 1
- **摘要：** 在交互 prompt 中混合输入日文和 ASCII 字符时，输入框布局损坏，渲染文本与实际输入不符。
- **为什么重要：** 与 #3654 同属 cell-based renderer 引入的回归问题，影响日文用户。

**⑥ [Issue #3650](https://github.com/github/copilot-cli/issues/3650) — 中文输入在 @ 选择文件后首字符不显示**
- **状态：** CLOSED | 💬 1
- **摘要：** v1.0.59 中，使用 `@` 选择文件或粘贴内容后输入中文，第一个中文字符输入框不显示。
- **为什么重要：** 中文用户高频操作路径上的渲染 bug。

**⑦ [Issue #3536](https://github.com/github/copilot-cli/issues/3536) — Windows 上 CJK 字符在提交后气泡中视觉重叠/丢失**
- **状态：** OPEN | 👍 2 | 💬 1
- **摘要：** Windows Terminal 中，混合中英文的 prompt 提交后，已提交气泡中的 CJK 字符显示重叠或丢失，但 buffer 内容正确，属纯显示 bug。
- **为什么重要：** Windows 平台 CJK 问题的另一表现，buffer 正确但显示错误，排查难度更高。

**⑧ [Issue #1999](https://github.com/github/copilot-cli/issues/1999) — 德语键盘无法输入 @（Alt-Gr + Q）**
- **状态：** OPEN | 👍 1 | 💬 8
- **摘要：** 德语布局键盘上 Alt-Gr + Q（即 @ 键）无响应，从 v1.0.2 开始出现。@ 是 CLI 中引用文件的关键字符。
- **为什么重要：** 使德语区用户几乎无法正常使用 Copilot CLI，且持续多个版本未修复。

### 🟢 高呼声功能请求

**⑨ [Issue #892](https://github.com/github/copilot-cli/issues/892) — 沙箱模式：限制 Copilot CLI 文件访问范围**
- **状态：** OPEN | 👍 **49** | 💬 10
- **摘要：** 请求增加沙箱能力，将 agent 的文件系统权限约束在指定工作目录内，防止访问或修改工作区外的路径。
- **为什么重要：** 这是社区 👍 数最高的 Issue，反映了开发者对 AI agent 安全边界的核心诉求。49 票在 Copilot CLI 仓库中属于顶级热度。

**⑩ [Issue #1481](https://github.com/github/copilot-cli/issues/1481) — SHIFT + ENTER 应换行而非执行 prompt**
- **状态：** CLOSED | 👍 14 | 💬 24
- **摘要：** SHIFT + ENTER 在大多数聊天应用中为标准换行快捷键，但 Copilot CLI 中却执行了 prompt，换行需使用 CTRL + ENTER。
- **为什么重要：** 24 条评论、14 个 👍，说明这是大量用户的肌肉记忆冲突。虽已标记 CLOSED，但讨论量说明社区对此交互设计分歧较大。

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **1 条 PR** 更新：

| PR | 作者 | 状态 | 摘要 |
|---|---|---|---|
| [#3651](https://github.com/github/copilot-cli/pull/3651) — Create xcopilotcli | XavierMP14 | OPEN | 新建 PR，描述信息为空，目的尚不明确，需进一步观察。 |

> ⚠️ 今日 PR 数量极少，社区贡献活动较为平淡。

---

## 5. 功能需求趋势

从全部 42 条 Issues 中提炼出以下五大社区关注方向：

| 排名 | 方向 | 代表 Issue | 热度信号 |
|---|---|---|---|
| 1 | **CJK/多语言输入法支持** | #3654, #3648, #3650, #3536, #3045, #1999 | 今日最密集话题，6+ 条 Issue，覆盖中日韩德等多语言 |
| 2 | **MCP/插件系统稳定性** | #3539, #3542, #3659, #3664 | 上下文爆炸、hook 执行失败、路径解析 bug，插件生态面临系统性挑战 |
| 3 | **安全与沙箱** | #892 | 49 👍 为全仓库最高，安全隔离是社区长期核心诉求 |
| 4 | **键盘交互与终端体验** | #1481, #1733, #3587, #3607, #3172 | 快捷键回归、粘贴失效、Esc 无法中断等交互痛点持续存在 |
| 5 | **Windows 平台兼容性** | #3622, #3659, #3662, #3536, #3593 | 复制粘贴失败、安装卸载异常、崩溃恢复等 Windows 特有问题集中 |

---

## 6. 开发者关注点总结

**🔧 最紧迫的痛点：**
- **CJK 输入法全面崩溃** — cell-based terminal renderer（约 v1.0.55 引入）带来了大规模的中文、日文输入渲染回归，表现为字符不可见、布局错乱、气泡重叠。这已不是边缘问题，而是影响了全球大量开发者的日常使用。
- **MCP 上下文爆炸** — 随着 MCP 服务器数量增长，System/Tools 描述迅速吃满 200k 上下文窗口，导致新会话即压缩。这是 MCP 生态规模化的架构瓶颈。

**📌 长期诉求：**
- **沙箱安全模式**（#892）长期占据社区最高 👍，开发者迫切需要 AI agent 的文件访问边界控制。
- **跨平台一致性** — Windows 平台在 hooks 执行、剪贴板操作、安装卸载等方面持续出现特有问题，平台兼容性仍需加强。
- **键盘交互标准化** — SHIFT+ENTER 换行、Esc 中断等标准交互习惯未被遵循，降低了 CLI 的专业用户体验。

**💡 建议关注：** 如果官方近期有 terminal renderer 或 MCP 上下文管理的修复计划，建议优先处理，这两类问题覆盖了今日社区反馈的 60% 以上。

---

*数据来源：github.com/github/copilot-cli | 统计时间范围：2026-06-03 至 2026-06-04*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-04

---

## 1. 今日速览

过去 24 小时内社区共新增/更新 **7 个 Issues** 和 **1 个 PR**，无新版本发布。核心焦点集中在 **Web 模式的交互体验缺陷**（复制粘贴、replay 行为）和 **会话恢复机制导致的系统提示覆盖问题**。整体来看，社区对 Web UI 的可用性和会话管理逻辑的合理性提出了较多集中反馈。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 为什么重要 | 社区反应 |
|---|------|------|-----------|---------|
| [#2420](https://github.com/MoonshotAI/kimi-cli/issues/2420) | Session resume overrides newly generated system prompt | 🟡 OPEN | 恢复旧会话时，`context.jsonl` 中缓存的旧系统提示会无条件覆盖新生成的提示，导致新增 skill、配置变更在恢复会话后完全失效。这是一个**影响核心工作流的逻辑 bug**，对依赖 skills 体系的开发者影响较大。 | 暂无评论，但问题描述清晰、影响面广，预计会较快获得维护者关注。 |
| [#2419](https://github.com/MoonshotAI/kimi-cli/issues/2419) | kimi web 使用无法复制框内的内容 | 🟡 OPEN | Web 模式下用户无法复制输出框内的内容，粘贴功能也失效。这直接**破坏了 Web 端最基本的可操作性**，严重影响日常使用体验。 | 暂无评论，但属于高优先级 UX 问题。 |
| [#2418](https://github.com/MoonshotAI/kimi-cli/issues/2418) | replay 模式不喜欢 | 🟡 OPEN | 用户希望 Web 模式下切换 session 时不要每次都自动 replay 历史记录，因为每次切换都要重新拉取一遍，体验不佳。反映了对**会话切换性能与默认行为的诉求**。 | 暂无评论。 |
| [#2421](https://github.com/MoonshotAI/kimi-cli/issues/2421) | need project model | 🟡 OPEN | 用户希望 Web 端左侧 session 能按 project 分组，多个 session 组合为 project 并建立 memory 和索引以减少 token 消耗。这是一个**架构级功能需求**，涉及会话管理和上下文优化。 | 暂无评论，但方向与社区长期关注的 token 效率话题高度相关。 |
| [#1847](https://github.com/MoonshotAI/kimi-cli/issues/1847) | 把粘贴的图片和文本的 placeholder 当做一个整体块处理 | 🔴 CLOSED | 粘贴图片和文本时，placeholder 应作为整体块处理（光标移动、删除时整块操作），而非逐字符处理。已关闭，对应 PR #1848 已合并。 | 无评论，已通过 PR 解决。 |
| [#751](https://github.com/MoonshotAI/kimi-cli/issues/751) | Slash commands execute immediately upon selection | 🔴 CLOSED | 斜杠命令选中后需再按一次 Enter 才能执行，用户希望选中即执行。已关闭。 | 5 条评论，有一定讨论但最终关闭。 |
| [#2306](https://github.com/MoonshotAI/kimi-cli/issues/2306) | APC 协议回放 / 会话历史不显示 | 🔴 CLOSED | ACP 模式（Zed 集成）和 Web 模式下会话历史内容不显示的问题。已关闭。 | 无评论。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 功能/修复内容 |
|---|------|------|-------------|
| [#1848](https://github.com/MoonshotAI/kimi-cli/pull/1848) | feat(prompt): edit image and pasted-text placeholders as blocks | 🔴 CLOSED（已合并） | 实现了 Issue #1847 的需求：将粘贴的图片和文本 placeholder 作为整体编辑块处理，光标移动和删除操作均以块为单位，提升多模态输入的编辑体验。 |

> ⚠️ 过去 24 小时内仅有 1 个 PR 更新，且为已合并的旧 PR。当前无活跃的新 PR 在审。

---

## 5. 功能需求趋势

从本期 Issues 中可提炼出以下 **4 个核心功能方向**：

1. **Web 端交互体验优化**（最高频）
   - 复制/粘贴功能修复（#2419）
   - Session 切换时 replay 行为的控制（#2418）
   - 多模态 placeholder 的块级编辑（#1847 → 已解决）

2. **会话管理与恢复机制改进**
   - Session resume 时系统提示被旧缓存覆盖的 bug（#2420）
   - Session 按 project 分组、memory 索引以减少 token（#2421）

3. **Slash 命令交互效率**
   - 选中即执行，减少操作步骤（#751 → 已关闭）

4. **ACP 协议与 IDE 集成稳定性**
   - 会话历史在 ACP 模式下的显示问题（#2306 → 已关闭）

---

## 6. 开发者关注点总结

| 痛点 | 涉及 Issues | 严重程度 |
|------|------------|---------|
| **Web 端基础功能缺失**（无法复制内容） | #2419 | 🔴 高 |
| **Session 恢复逻辑缺陷**（旧 system prompt 覆盖新配置） | #2420 | 🔴 高 |
| **Web 端 replay 行为不可控** | #2418 | 🟡 中 |
| **缺乏 Project 级会话组织能力** | #2421 | 🟡 中（长期需求） |

**总结：** 当前社区反馈高度集中在 **Web 端的可用性问题** 和 **会话恢复机制的逻辑正确性** 上。建议维护者优先处理 #2419（复制功能）和 #2420（system prompt 覆盖），这两个问题直接影响用户的核心工作流。Project 级会话管理（#2421）虽然暂无讨论热度，但代表了社区对 Kimi CLI 向更复杂项目管理场景演进的长期期待。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-04

---

## 1. 今日速览

今日社区活跃度极高，**无新版本发布**，但 Issues 和 PR 更新密集。核心焦点集中在三个方面：**桌面端稳定性**（崩溃、CPU 占用、JS 错误）、**会话与子代理架构重构**（嵌套子代理权限路由、会话移动、嵌入式 V2 运行时），以及**语音输入功能**的持续高热需求。多个由 `literally-dan` 和 `Hona` 主导的 PR 正在系统性修复长期存在的会话层 bug。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

| # | Issue | 为什么重要 | 社区反应 |
|---|-------|-----------|---------|
| 1 | **[#1505](https://github.com/anomalyco/opencode/issues/1505)** `shift+enter` 快捷键失效 | 历史最悠久的高热度 bug 之一（126 评论 / 101 👍），影响所有 TUI 用户的基本输入体验，`ctrl+j` 替代方案不够直觉 | 社区持续施压，已关闭但问题可能复现 |
| 2 | **[#4695](https://github.com/anomalyco/opencode/issues/4695)** 语音输入功能请求 | 161 👍 为所有功能请求中最高，社区对"懒人友好"的语音交互有强烈需求，且已有开发者在做相关插件 | 催生了多个重复/关联 issue（#30601、#30634），形成功能簇 |
| 3 | **[#28996](https://github.com/anomalyco/opencode/issues/28996)** 启动即崩溃 | Debian Testing + WezTerm 环境下终端直接崩溃，用户无法提供调试信息，影响 Linux 用户基础体验 | 13 条评论，排查方向指向终端兼容性问题 |
| 4 | **[#29992](https://github.com/anomalyco/opencode/issues/29992)** 自动滚动失效 | 用户手动上滚后返回底部，自动滚动停止工作——这是流式输出场景的核心 UX 问题 | 14 👍，11 条评论，复现路径清晰 |
| 5 | **[#29548](https://github.com/anomalyco/opencode/issues/29548)** OpenAI provider headers 超时 | 1.15.11 升级后回归问题，10000ms 的 headerTimeout 对慢网络环境不够，属于版本升级引入的兼容性退化 | 10 条评论，已有 workaround（手动增大 timeout） |
| 6 | **[#30086](https://github.com/anomalyco/opencode/issues/30086)** CPU 占用飙升 | 新版本 CPU 占用剧增，从可同时跑 10 个 session 降到 3 个就卡顿，严重影响重度用户 | 8 条评论，性能回归需优先排查 |
| 7 | **[#16610](https://github.com/anomalyco/opencode/issues/16610)** inotify 耗尽导致启动挂起 | 低内存/容器环境下 `fs.inotify.max_user_instances` 不足时 OpenCode 静默挂起，无错误提示 | 5 👍，属于资源受限场景的健壮性问题 |
| 8 | **[#30611](https://github.com/anomalyco/opencode/issues/30611)** 瞬态网络错误不重试 | 仅 `ECONNRESET` 被标记为可重试，其他传输层错误直接杀死 session，在网络不稳定环境下体验差 | 已有配套 PR #30638 跟进修复 |
| 9 | **[#30635](https://github.com/anomalyco/opencode/issues/30635)** 嵌套子代理权限提示不显示 | 子代理的子代理（二层嵌套）的权限请求被静默丢弃，工具调用无限挂起——这是多代理工作流的核心缺陷 | 已有配套 PR #30639 修复中 |
| 10 | **[#30627](https://github.com/anomalyco/opencode/issues/30627)** 桌面端 JS 主进程崩溃 | Electron 桌面端频繁弹出 "A JavaScript error occurred in the main process"，`Object has been destroyed` 错误指向生命周期管理缺陷 | 桌面端稳定性的新信号，需关注是否与近期 titlebar 更新相关 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 内容摘要 |
|---|-----|------|---------|
| 1 | **[#30632](https://github.com/anomalyco/opencode/pull/30632)** | 🏗️ 架构 | **嵌入式 V2 会话运行时**：基于 Effect 的本地优先运行时，解耦 prompt 接收与执行，支持 session 事件回放，为 OpenCord 等本地消费者铺路 |
| 2 | **[#30640](https://github.com/anomalyco/opencode/pull/30640)** | 🆕 功能 | **会话移动**：新增核心 control-plane 服务和 HTTP 端点，支持将 session 在不同项目目录间迁移，TUI 增加 `/move` 流程 |
| 3 | **[#30639](https://github.com/anomalyco/opencode/pull/30639)** | 🐛 修复 | **嵌套子代理权限路由**：将二层嵌套子代理的权限/问题提示路由到祖先 UI，修复 #13715 和 #7654 |
| 4 | **[#30638](https://github.com/anomalyco/opencode/pull/30638)** | 🐛 修复 | **传输错误重试扩展**：将 `ECONNRESET` 扩展到所有瞬态传输和超时错误，修复 #30611 |
| 5 | **[#30636](https://github.com/anomalyco/opencode/pull/30636)** | 🐛 修复 | **数据库索引优化**：为 `session(time_updated)` 和 `event(aggregate_id, seq)` 添加索引，匹配实际查询模式，修复 #30609 |
| 6 | **[#30644](https://github.com/anomalyco/opencode/pull/30644)** | 🐛 修复 | **桌面端 Tab 改进**：修复关闭按钮遮挡标题、子代理路由绑定、重命名 session 后 Tab 元数据实时更新 |
| 7 | **[#30624](https://github.com/anomalyco/opencode/pull/30624)** | 🆕 功能 | **命令注册表**：新增位置作用域的 CommandV2 注册表，支持有序 transforms，规范化 legacy 命令配置，支持 `{command,commands}/**/*.md` 加载 |
| 8 | **[#30019](https://github.com/anomalyco/opencode/pull/30019)** | 🆕 功能 | **MCP/TUI 通知桥接**：让配置的 MCP server 能主动向 TUI session 推送通知，扩展 MCP 生态交互能力 |
| 9 | **[#30641](https://github.com/anomalyco/opencode/pull/30641)** | 🐛 修复 | **Shell 取消竞态修复**：将取消操作委托给已有的 session runner 状态机，避免竞态条件 |
| 10 | **[#27984](https://github.com/anomalyco/opencode/pull/27984)** | 🐛 修复 | **LLM XML 标签清理**：Qwen3 via vLLM/llama.cpp 使用 hermes 工具调用解析器时，清理文本中残留的 XML 闭合标签 |

---

## 5. 功能需求趋势

从当前活跃 Issues 中可提炼出以下五大功能方向：

| 方向 | 代表 Issues | 热度 |
|------|------------|------|
| **🎙️ 语音/听写输入** | #4695 (161👍), #30634, #30601, #17425 | ⭐⭐⭐⭐⭐ 最高，已形成功能簇，且涉及插件扩展性缺口 |
| **🔌 插件生态扩展** | #17425, #25293, #28037 | ⭐⭐⭐⭐ 插件缓存、权限回复丢失、可扩展性差距是三大痛点 |
| **🤖 多代理/子代理工作流** | #30635, #30639, #29626 | ⭐⭐⭐⭐ 嵌套子代理权限、agent presets 配置是深度用户刚需 |
| **☁️ 新 Provider 支持** | #26338 (CommandCode), #30477 (vLLM reasoning) | ⭐⭐⭐ 社区持续要求接入更多 LLM 提供商 |
| **📁 命令/技能发现** | #14240, #27972 | ⭐⭐⭐ 可配置搜索路径、`.agents/commands` 目录支持，对标 skills 体验 |

---

## 6. 开发者关注点

**高频痛点总结：**

1. **稳定性危机**：CPU 占用飙升 (#30086)、启动崩溃 (#28996)、桌面端 JS 崩溃 (#30627)、shell 取消竞态 (#30641)——多个信号表明近期版本在性能和稳定性上存在回归，是社区最急迫的关切。

2. **会话层架构债务**：嵌套子代理权限丢失 (#30635)、会话重命名不同步、瞬态网络错误不重试 (#30611)——这些长期存在的 bug 正在被 `literally-dan` 等贡献者系统性修复，V2 运行时 (#30632) 是架构层面的根本性重构。

3. **跨平台兼容性**：macOS 剪贴板回退缺失 (#12800)、Linux inotify 耗尽挂起 (#16610)、Windows bash 工具路径错误 (#24844)、Ctrl+Z 行为异常 (#24817)——非 macOS 平台的体验仍需补齐。

4. **语音输入的"最后一公里"**：需求极高（161 👍），但 #17425 指出插件 API 尚不足以支持听写/语音输入插件，核心团队需要先补齐插件扩展性。

5. **配置与超时的灵活性**：OpenAI header timeout 硬编码 (#29548)、MCP 全局配置与 UI 不同步 (#30125)——开发者期望更多可配置项而非硬编码默认值。

---

> 📊 数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) | 统计时间：2026-06-04

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-04

---

## 1. 今日速览

过去 24 小时内虽然没有新 Release，但 Issue 和 PR 活动非常密集。Anthropic Opus 4.8 自适应思维在多轮对话中触发 400 错误（#5223）成为社区讨论焦点；MiniMax-M3 模型支持需求集中爆发；多个性能与稳定性修复 PR 快速合入，包括图片溢出恢复、`/reload` 配置同步、工具结果 UI 隔离等。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 👍 | 评论 | 关注理由 |
|---|------|------|-----|------|----------|
| [#5223](https://github.com/earendil-works/pi/issues/5223) | Anthropic provider 修改 thinking blocks 导致 Opus 4.8 400 错误 | OPEN | 5 | 14 | **今日最热 Issue**。Claude Opus 4.8 自适应推理模式下多轮对话中途崩溃，影响面大，社区讨论最活跃。 |
| [#5271](https://github.com/earendil-works/pi/issues/5271) | Minimax m3 支持 | CLOSED | 0 | 9 | 周末新模型发布后社区迅速跟进，需求集中。 |
| [#5315](https://github.com/earendil-works/pi/issues/5315) | 将 MiniMax-M3 加入内置模型目录 | CLOSED | 0 | 8 | 与 #5271 呼应，指出 `minimaxDirectSupportedIds` 白名单未包含 M3，已关闭。 |
| [#4666](https://github.com/earendil-works/pi/issues/4666) | 429 Retry-After 忽略 maxRetryDelayMs 上限 | CLOSED | 1 | 7 | 速率限制重试逻辑存在设计缺陷，`/new` 和 Esc 无法干净恢复。 |
| [#3834](https://github.com/earendil-works/pi/issues/3834) | Fireworks provider 无法工作 | CLOSED | 1 | 7 | 长期未解决的 provider 兼容性问题，影响 Fireworks 用户。 |
| [#5103](https://github.com/earendil-works/pi/issues/5103) | Windows bash 检测在非默认路径下失败 | OPEN | 0 | 5 | Git Bash 安装在非 `C:\Program Files` 路径时 Pi 无法识别，影响 Windows 用户体验。 |
| [#5340](https://github.com/earendil-works/pi/issues/5340) | 添加 /config 和 /exit 作为 /settings 和 /quit 的别名 | CLOSED | 0 | 4 | 降低从 Claude Code 迁移用户的认知成本，社区认同度高。 |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | 改进 Vertex + GCP 元数据服务器支持 | OPEN | 0 | 4 | 当前 Vertex 认证检查仅同步读取本地凭证文件，不支持 GCP 元数据服务器动态认证。 |
| [#5294](https://github.com/earendil-works/pi/issues/5294) | 请求超时错误 | CLOSED | 0 | 4 | 即使用户设置 `http timeout = false`，使用 llama.cpp 后端仍会超时，配置未生效。 |
| [#5373](https://github.com/earendil-works/pi/issues/5373) | 大型会话空闲时 CPU 和系统调用率过高 | CLOSED | 0 | 1 | 150k+ token 会话空闲时占用 ~24% CPU，45640 次系统调用/66s，性能隐患值得关注。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#5370](https://github.com/earendil-works/pi/pull/5370) | 修复：通过丢弃最旧图片从请求大小溢出中恢复 | **CLOSED** | 解决图片密集型会话触发 Anthropic 32MB 限制（HTTP 413）后无法自动压缩恢复的问题。 |
| [#5376](https://github.com/earendil-works/pi/pull/5376) | 修复：`/reload` 时重新加载 steeringMode 和 followUpMode | **CLOSED** | 队列模式设置此前仅在会话创建时读取，修改 `settings.json` 后需重启才能生效，现已修复。 |
| [#5360](https://github.com/earendil-works/pi/pull/5360) | 修复：隔离工具结果状态背景 | **CLOSED** | 工具调用预览和最终结果/状态现在渲染为独立视觉区域，避免状态覆盖预览内容。 |
| [#5332](https://github.com/earendil-works/pi/pull/5332) | 功能：工作区审批系统 | **OPEN** | 新增 `.pi.user` 目录作为用户扩展加载路径，首次加载 `.pi` 和 `.pi.user` 需审批，提升安全性。 |
| [#5262](https://github.com/earendil-works/pi/pull/5262) | 功能：添加 Anthropic Vertex provider | **OPEN** | 为 Google Cloud Vertex AI 上的 Claude 模型提供内置 `anthropic-vertex` provider 适配器。 |
| [#5348](https://github.com/earendil-works/pi/pull/5348) | 功能：添加选择性 pi-ai 基础入口 | **OPEN** | 提供无副作用的 `@earendil-works/pi-ai/base` 入口，支持选择性传输打包，优化 bundle 体积。 |
| [#5178](https://github.com/earendil-works/pi/pull/5178) | 功能：Bedrock provider 支持自定义 headers | **CLOSED** | 补齐 AWS Bedrock provider 的 `StreamOptions.headers` 支持，满足企业代理网关需求。 |
| [#5333](https://github.com/earendil-works/pi/pull/5333) | 功能：添加 ZAI Coding Plan China provider | **CLOSED** | 新增 `zai-coding-cn` 内置 provider，接入智谱 Coding Plan 中国区域 API。 |
| [#5345](https://github.com/earendil-works/pi/pull/5345) | 修复：移动临时扩展缓存目录 | **CLOSED** | 将临时扩展统一移至 `~/.pi/agent`，Linux 下使用 per-user 目录，避免权限问题。 |
| [#5356](https://github.com/earendil-works/pi/pull/5356) | 文档：添加容器化指南和 Gondolin 示例 | **CLOSED** | 补充 Docker/容器化部署文档，降低新用户上手门槛。 |

---

## 5. 功能需求趋势

从过去 24 小时的 Issue 和 PR 来看，社区需求集中在以下方向：

1. **新模型/Provider 支持** — MiniMax-M3、Anthropic Vertex、Amazon Bedrock Mantle、ZAI Coding China 等多个 provider 需求同时涌现，社区对新模型接入速度有较高期待。
2. **性能与稳定性** — 大型会话空闲 CPU 过高（#5373）、图片溢出导致 413 循环（#5369/#5370）、bash 工具输出截断（#5303）等性能问题频繁被提及。
3. **配置与 UX 改进** — `/reload` 不生效（#5377）、Shift+Enter 换行失效（#5188）、命令别名（#5340）等交互体验优化需求持续。
4. **扩展系统安全** — 工作区审批机制（#5332）、扩展工具名冲突导致启动崩溃（#5316）、临时扩展缓存隔离（#5345）反映社区对扩展安全边界的关注。
5. **远程/容器化开发** — SSH 远程容器支持（#5341）、容器化部署文档（#5356）表明远程开发场景需求增长。

---

## 6. 开发者关注点

- **Opus 4.8 兼容性是当务之急**：#5223 的 14 条评论和 5 个点赞说明大量用户已升级至 Opus 4.8 并遭遇多轮对话崩溃，需要尽快定位 thinking blocks 处理逻辑。
- **配置热加载不完整**：多个 Issue（#5377、#5294）反映 `settings.json` 修改后不生效，开发者期望 `/reload` 能覆盖更多配置项。
- **Windows 体验仍需改善**：bash 检测路径硬编码（#5103）、终端滚动位置跳变（#3406）等问题长期存在，Windows 用户体感较差。
- **扩展生态安全边界模糊**：工具名冲突直接导致进程退出（#5316），缺乏优雅降级机制；社区期待审批系统（#5332）尽快落地。
- **图片密集型工作流脆弱**：工具返回的图片绕过 resize 和压缩预算（#5369），导致会话不可控膨胀，影响截图/浏览器类高频使用场景。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-04

---

## 1. 今日速览

Qwen Code 今日正式发布了 **v0.17.1** 稳定版，主要修复了 mid-turn 消息场景下的误报 "compressed turn" 错误。社区活跃度极高，过去 24 小时内涌现了 36 条 Issue 更新和 50 条 PR 更新，核心议题集中在 **daemon 性能优化、认证/配置 bug 修复、以及 Dynamic Workflows 多智能体编排** 等前沿方向。

---

## 2. 版本发布

### ✅ v0.17.1（稳定版）
- **核心修复**：`fix(rewind)` — 修复当 mid-turn 消息存在时，错误触发 "compressed turn" 提示的问题（贡献者：@doudouOUC）
- 同步发布了 v0.17.0-preview.0 和 nightly 版本

### ✅ v0.17.0-preview.0 / nightly.20260603
- 包含与 v0.17.1 相同的修复内容，为预发布渠道用户提供早期体验

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 为什么重要 |
|---|-------|------|-----------|
| 1 | **[#3384](https://github.com/QwenLM/qwen-code/issues/3384)** Unable to add OpenAI-compatible local LLM | 💬12 👍1 | 用户使用 VLLM 部署本地模型时配置无法生效，影响所有希望通过 OpenAI 兼容接口接入本地模型的用户，是长期存在的配置痛点 |
| 2 | **[#4493](https://github.com/QwenLM/qwen-code/issues/4493)** Rider 无法登录 Qwen Code | 💬10 | JetBrains Rider IDE 集成场景下 OAuth 登录陷入重定向循环，直接阻断了 IDE 用户的核心工作流 |
| 3 | **[#4722](https://github.com/QwenLM/qwen-code/issues/4722)** Statusline 显示 model id 而非可读名称 | 💬5 | 状态栏直接暴露内部 model id（如 `qwen3-coder-plus`），影响多 key 配置场景下的可用性，已有 PR #4741 跟进修复 |
| 4 | **[#4554](https://github.com/QwenLM/qwen-code/issues/4554)** feat: daemon 端到端 OpenTelemetry 覆盖 | 💬4 | `qwen serve` 守护进程缺乏可观测性，是生产部署的关键缺口，作者 @doudouOUC 已提交配套 PR #4749 |
| 5 | **[#4747](https://github.com/QwenLM/qwen-code/issues/4747)** 支持全局用户级 auto-memory | 💬3 | 当前 memory 按项目隔离，用户偏好需每个项目重新学习，对标 Claude Code 的全局用户记忆功能 |
| 6 | **[#4729](https://github.com/QwenLM/qwen-code/issues/4729)** runtime snapshot prefix 泄漏到 settings.model.name | 💬3 | 使用 OpenAI 兼容 provider 时，`$runtime\|openai\|` 前缀不断叠加导致 404 错误，每次重启恶化，已有 PR #4734 修复 |
| 7 | **[#4748](https://github.com/QwenLM/qwen-code/issues/4748)** 优化 daemon 冷启动延迟（2.5s → ~1.5s） | 💬1 | 守护进程冷启动比 CLI 全量初始化还慢，影响非交互场景体验，@doudouOUC 已提交 PR #4751 |
| 8 | **[#4721](https://github.com/QwenLM/qwen-code/issues/4721)** 移植 Claude Code Dynamic Workflows | 💬1 | 社区呼吁将 Claude Code 2.1.160 的动态工作流功能移植到 Qwen Code，作为多智能体执行的第三层，已有 PR #4732 开始实现 |
| 9 | **[#4714](https://github.com/QwenLM/qwen-code/issues/4714)** 禁用自动创建的 skills | 💬3 | AI 自动生成的 skill 存在错误且优先级高于用户自定义 skill，导致不可预测行为，引发社区争议 |
| 10 | **[#4740](https://github.com/QwenLM/qwen-code/issues/4740)** TUI 模式下模型中断后丢失上下文记忆 | 💬1 | DeepSeek4 和 LongCat 等模型运行中突然中断后丢失上下文，待办任务 UI 也不更新，严重影响长任务可靠性 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容摘要 |
|---|-----|------|---------|
| 1 | **[#4741](https://github.com/QwenLM/qwen-code/pull/4741)** fix(ui): statusline 显示 model 名称而非 id | 🟢 OPEN | 新增 `getModelDisplayName()` 方法，从 model registry 解析人类可读名称，修复 #4722 |
| 2 | **[#4751](https://github.com/QwenLM/qwen-code/pull/4751)** feat(daemon): 优化 ACP 子进程生命周期 | 🟢 OPEN | 跳过不必要的 relaunch、预启动 ACP 子进程、空闲保活，直接回应 #4748 的冷启动优化需求 |
| 3 | **[#4734](https://github.com/QwenLM/qwen-code/pull/4734)** fix: 持久化前剥离 runtime snapshot 前缀 | 🟢 OPEN | 修复 #4729，在写入 settings.json 前清理 `$runtime\|authType\|` 前缀，防止 model.name 污染 |
| 4 | **[#4704](https://github.com/QwenLM/qwen-code/pull/4704)** feat(core): 遵守 skill allowedTools 自动审批 | 🟢 OPEN | skill frontmatter 中的 `allowedTools` 字段此前被读取后忽略，此 PR 使其真正生效，skill 声明的工具自动获得审批 |
| 5 | **[#4732](https://github.com/QwenLM/qwen-code/pull/4732)** feat(core): Workflow 工具 P1 — node:vm 沙箱 | 🟢 OPEN | 实现 Dynamic Workflows 移植的第一阶段，在 `node:vm` 沙箱中运行模型编写的 JavaScript，支持顺序 `agent()` 调用 |
| 6 | **[#4749](https://github.com/QwenLM/qwen-code/pull/4749)** feat(telemetry): daemon OTel 指标和结构化日志 | 🟢 OPEN | 为 daemon serve 路径添加 11 个 OTel 指标，覆盖 HTTP 请求率/延迟、会话生命周期、prompt 队列等待等，回应 #4554 |
| 7 | **[#4563](https://github.com/QwenLM/qwen-code/pull/4563)** refactor(serve): 提取 DaemonWorkspaceService | 🟢 OPEN | 将 workspace 级操作从 AcpSessionBridge 中提取为独立 facade，提升 daemon 架构清晰度 |
| 8 | **[#4677](https://github.com/QwenLM/qwen-code/pull/4677)** fix(cli): 修复 vim 模式 Esc 泄漏和 Enter 提交问题 | 🟢 OPEN | 修复 vim INSERT 模式下 Esc 键泄漏到 AppContainer 的问题，同时实现缺失的 NORMAL 模式命令 |
| 9 | **[#4629](https://github.com/QwenLM/qwen-code/pull/4629)** feat(cli): 独立安装包自动更新支持 | 🟢 OPEN ✅ready-for-merge | 为 standalone 安装方式添加自更新能力，下载后校验 SHA256 并原子替换，即将合入 |
| 10 | **[#4738](https://github.com/QwenLM/qwen-code/pull/4738)** fix(cli): /copy 跳过 thought 部分 | 🟢 OPEN | 修复 `/copy` 命令将推理模型的内部 thinking 内容一并复制到剪贴板的问题 |

---

## 5. 功能需求趋势

从今日所有 Issues 和 PRs 中，可提炼出以下 **5 大功能方向**：

### 🔥 1. 多智能体编排与 Dynamic Workflows
社区强烈呼吁移植 Claude Code 的 Dynamic Workflows（#4721），已有开发者开始实现基于 `node:vm` 沙箱的 Workflow 工具（PR #4732）。这是当前最前沿的功能赛道。

### 🔥 2. Daemon 性能与可观测性
守护进程的冷启动延迟（#4748）、ACP 子进程生命周期优化（PR #4751）、以及端到端 OpenTelemetry 覆盖（#4554, PR #4749）三条线并行推进，反映社区对生产级部署的迫切需求。

### 🔥 3. 认证与配置稳定性
多个高评论 Issue 集中在认证和配置层面：Rider IDE 登录循环（#4493）、runtime prefix 泄漏导致 404（#4729）、OpenAI 兼容本地模型配置失败（#3384）。这些是影响日常使用的关键痛点。

### 🔥 4. 记忆与上下文管理
全局用户级 auto-memory（#4747）、TUI 模式中断后失忆（#4740）、自动 skill 干扰用户自定义 skill（#4714）——社区对"跨会话一致性"和"上下文可靠性"的需求日益强烈。

### 🔥 5. IDE 集成与桌面端扩展
Rider 登录问题（#4493）、桌面客户端 ACP 集成（PR #4728）、Windows SMB 路径处理（#4720）——IDE 和桌面端的集成广度正在快速扩展。

---

## 6. 开发者关注点总结

| 痛点类别 | 具体表现 | 优先级 |
|---------|---------|--------|
| **认证流程脆弱** | OAuth 重定向循环、runtime prefix 污染 settings.json、OpenAI 兼容 provider 配置不生效 | 🔴 高 |
| **Daemon 生产化不足** | 冷启动慢、缺乏可观测性、并行 subAgent 串台（已修复 #4687） | 🔴 高 |
| **上下文可靠性** | 模型中断后丢失记忆、/auto-memory 按项目隔离、/copy 泄露 thinking 内容 | 🟡 中 |
| **IDE 集成覆盖** | Rider 登录、桌面客户端 ACP 协议、Windows 路径兼容性 | 🟡 中 |
| **自动 skill 行为不可控** | AI 自动生成 skill 优先级过高且存在错误，缺乏关闭开关 | 🟡 中 |
| **Vim 模式体验** | Esc 泄漏、Enter 提交异常、NORMAL 模式命令缺失（PR #4677 修复中） | 🟢 低 |

> **总结**：v0.17.1 的发布标志着 Qwen Code 在稳定性上持续迭代，而社区的最大期待集中在 **daemon 生产化** 和 **Dynamic Workflows 多智能体编排** 两大方向。认证和配置类 bug 仍是影响用户体验的首要障碍，建议优先关注 #4493、#4729 和 #3384 的修复进展。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*