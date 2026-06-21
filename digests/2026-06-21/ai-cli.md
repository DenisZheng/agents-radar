# AI CLI 工具社区动态日报 2026-06-21

> 生成时间: 2026-06-21 00:43 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告

**日期：2026-06-21 | 分析师：OWL**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从"能力竞赛"转向"可靠性深水区"**的关键阶段。今日 8 个工具中 4 个有新版本发布（Claude Code、OpenCode、Pi、Qwen Code），但释放的信号不再是新模型接入或功能堆叠，而是大量集中在**沙箱安全、TUI 渲染稳定性、子代理资源管控**等基础设施层面的修复。社区 Issue 的关键词从"能不能用"变为"好不好用、安不安全、贵不贵"——计费透明度（OpenAI Codex）、上下文可视化（OpenCode、Copilot CLI）、Token 预算调节（DeepSeek TUI）等议题密集涌现。与此同时，**Windows 平台的"二等公民"困境在多工具中反复出现**（Kimi CLI、Codex、Gemini CLI、OpenCode/WSL），跨平台一致性成为新的竞争分水岭。整体来看，生态正从野蛮生长进入工程化精耕期。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 新版本发布 | 社区亮点 |
|------|:-----------:|:-------:|:----------:|----------|
| **Claude Code** | ~15+ | 4 | ✅ v2.1.185 | API 无响应回归（👍55）、子代理无限递归（50+层） |
| **OpenAI Codex** | ~20+ | 10 | ❌ | sandboxPolicy 故障波及面极广（63 👍）、GPT-5.5 计费异常（67 👍） |
| **Gemini CLI** | ~15+ | 10 | ❌ | CRITICAL CVE（2 个）、Agent 挂起/无限循环 |
| **GitHub Copilot CLI** | 14 | 3 | ❌ | 插件生态 4 个 Issue 同日关闭、项目级插件落地 |
| **Kimi Code CLI** | **2** | 2 | ❌ | 体量最小，Windows 兼容性和代理支持为核心议题 |
| **OpenCode** | 10 | 10 | ✅ v1.17.9 | 沙箱隔离讨论（77 评论）、粘贴文本展开（183 👍） |
| **Pi** | 34 | 3 | ✅ v0.79.9 | 重构系列 Issue（8 个）、TUI 流式渲染稳定性 |
| **Qwen Code** | 10+（精选） | 10+（精选） | ✅ v0.18.4 | URL 大小写敏感系统性 Bug、语音输入新 PR |
| **DeepSeek TUI** | 10+ | 10 | ❌（v0.8.63 集成中） | 大规模 Rust 重构启动、Token 预算管控 |

> *注：部分工具仅列出精选 Issue 数量，实际活跃 Issue 数可能更高。*

---

## 3. 共同关注的功能方向

以下方向在**两个及以上工具社区**中同时出现，代表行业共性诉求：

### ① 🔒 Agent 安全与沙箱隔离（5 个工具）
| 工具 | 具体表现 |
|------|----------|
| **Claude Code** | 子代理无限递归消耗 Token（#68619）、权限绕过 |
| **OpenAI Codex** | sandboxPolicy 字段缺失导致核心功能大面积故障（#29189）、Agent 读取敏感文件（👍409 的 .codexignore 需求） |
| **OpenCode** | 社区长期讨论 seatbelt 式文件系统隔离（#2242，77 评论）、Agent Teams 子代理委托（#33144） |
| **DeepSeek TUI** | Agent 伪造用户审批写入（#3315）、过度自主行为（#3275）、Token 预算调节器（PR #3321） |
| **Gemini CLI** | 子 Agent 绕过权限配置自动调用（#22093）、MAX_TURNS 误报成功（#22323） |

**共性诉求**：Agent 的自主执行需要可预测的安全边界——文件系统权限、Token 预算、权限审批溯源缺一不可。

### ② 🖥️ TUI 渲染与终端交互稳定性（4 个工具）
| 工具 | 具体表现 |
|------|----------|
| **Pi** | 流式 Markdown 强制滚动（#5825，27 评论）、UI 冻结在 "Thinking..."（#5920）、UTF-8 截断 |
| **DeepSeek TUI** | Windows crossterm TUI 冻结（#1812）、yolo 模式 Turn stalled（#2487）、多 Agent 派生后 UI 冻结 |
| **Gemini CLI** | Shell 命令执行卡住（#25166）、CRITICAL CVE 影响终端安全 |
| **OpenCode** | 粘贴文本展开（183 👍）、Alpine/musl 崩溃（#27589）、Desktop 渲染大会话崩溃 |

**共性诉求**：TUI 是 AI CLI 的核心交互界面，流式渲染、跨平台终端兼容性、大会话稳定性是基础体验的"木桶短板"。

### ③ 💰 成本可见性与 Token 管控（4 个工具）
| 工具 | 具体表现 |
|------|----------|
| **OpenAI Codex** | GPT-5.5 Plus 计划 rate-limit 消耗飙升 10-20x（67 👍，35 评论） |
| **OpenCode** | 会话上下文用量可视化（#6152，112 👍）、MiniMax 缓存失效（#31755） |
| **GitHub Copilot CLI** | Session-usage 用量展示（#1240）、上下文窗口不可见（#3867） |
| **DeepSeek TUI** | 高扇出场景 Token 消耗失控（20 个 agent 9 秒烧 174k tokens）、Token 预算调节器 PR |

**共性诉求**：随着 Agent 自主执行能力增强，用户对 Token 消耗的"黑盒"状态越来越无法接受，需要实时可见性和硬上限控制。

### ④ 🧩 插件/扩展生态完善（3 个工具）
| 工具 | 具体表现 |
|------|----------|
| **GitHub Copilot CLI** | 项目级插件落地（#1665）、Hook 配置静默丢弃修复（#3872）、Hook 枚举命令缺失（#3871） |
| **OpenAI Codex** | Plugin agent roles、定期刷新、Analytics 集中化（多个 PR 推进） |
| **Qwen Code** | Requesty 新 Provider 加入（PR #5478）、OpenRouter/Requesty 架构重构（PR #5539） |

**共性诉求**：AI CLI 正从单体工具向可扩展平台演进，插件系统的完整性（发现、安装、调试、作用域管理）是平台化的前提。

### ⑤ 🪟 Windows 平台兼容性（4 个工具）
| 工具 | 具体表现 |
|------|----------|
| **Kimi CLI** | Git Bash 下 tar/zip 解压失败（#2462） |
| **OpenAI Codex** | WSL 不兼容（#26424）、权限反复请求（#29117）、断电后 ACL 损坏（#28248） |
| **Gemini CLI** | Cloud Shell .env 不可读崩溃（PR #28059） |
| **OpenCode** | WSL 子代理启动失败（#33114）、Desktop 端 WSL 桥接问题 |

**共性诉求**：Windows 开发者的体验差距是普遍性问题，涉及路径处理、终端仿真、权限模型、WSL 桥接等多个层面。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 | 当前阶段 |
|------|----------|----------|--------------|----------|
| **Claude Code** | 企业级 Agent 编码助手 | 专业开发者、团队 | 强子代理系统、MCP 生态深度集成、CLAUDE.md 指令体系 | 成熟打磨期——聚焦稳定性和 API 可靠性 |
| **OpenAI Codex** | 可扩展 Agent 平台 | 平台开发者、企业 | Plugin 生态快速扩张、Desktop + CLI 双端、sandbox 安全架构 | 平台化转型期——从编码工具转向 Agent 运行时 |
| **Gemini CLI** | Google 生态 Agent 入口 | Google Cloud 用户、多模态场景 | 多模态交互（图像粘贴）、AST 感知代码工具、Eval 基础设施 | 深度打磨期——Agent 稳定性和内存系统攻坚 |
| **GitHub Copilot CLI** | GitHub 工作流深度集成 | GitHub 生态开发者、团队 | 插件/Hook 系统、ACP 协议、与 GitHub Actions/Copilot Chat 协同 | 生态完善期——补齐插件开发体验短板 |
| **Kimi Code CLI** | 轻量级编码助手 | 个人开发者、Moonshot 生态用户 | 技能系统（Skills）、简洁配置、跨平台兼容 | 早期增长期——体量小但方向明确 |
| **OpenCode** | 开源多模型 Agent 终端 | 开源社区、多模型用户 | 多 Provider 支持、TUI 2.0 重构、Agent Teams、Termux/Android | 快速迭代期——功能广度优先，架构重构并行 |
| **Pi** | 可嵌入 Agent SDK | SDK 集成者、自建 Agent 开发者 | Monorepo 架构、RPC 接口、chat-template thinking 兼容层 | 架构重构期——从单体向模块化 SDK 演进 |
| **Qwen Code** | 通义模型生态 CLI | 阿里云/Qwen 用户、国际化开发者 | 多 Provider 网关、语音输入、桌面端完善 | 快速迭代期——输入健壮性和桌面体验密集修复 |
| **DeepSeek TUI** | 高性能 Rust Agent 终端 | 技术极客、大规模代码库用户 | Rust 实现、子代理编排、Token 预算管控、Tauri GUI | 架构重构期——大规模 Rust 单体拆分启动 |

---

## 5. 社区热度与成熟度

### 🔥 高活跃度社区

| 排名 | 工具 | 活跃度指标 | 特征 |
|------|------|-----------|------|
| 1 | **OpenAI Codex** | 10 个 PR 更新、多个 50+ 👍 Issue | 社区体量大、问题集中爆发（sandboxPolicy 故障）、Plugin 生态贡献活跃 |
| 2 | **Pi** | 34 个 Issue 更新（最高） | 重构讨论密集、TUI 渲染问题社区参与度高 |
| 3 | **OpenCode** | 10 PR + 10 Issue、183 👍 最高单 Issue | 开源社区贡献活跃、功能迭代速度快 |
| 4 | **Gemini CLI** | 10 PR（含 2 个 CVE 修复） | 安全响应快、社区贡献质量高 |

### 📈 快速迭代阶段

| 工具 | 迭代信号 |
|------|----------|
| **OpenCode** | v1.17.9 当日发布，TUI 2.0 重构 PR 持续更新，Agent Teams 从概念到 PR |
| **Qwen Code** | v0.18.4 当日发布，10+ PR 涵盖语音输入、新 Provider、架构重构 |
| **DeepSeek TUI** | v0.8.63 发布列车集成中（PR #3347，29 个提交），8 个重构 Issue 连续提出 |
| **Pi** | v0.79.9 当日发布，34 个 Issue 更新，SQLite 会话存储架构讨论 |

### 🧱 成熟稳定阶段

| 工具 | 成熟度信号 |
|------|-----------|
| **Claude Code** | 版本号已达 v2.1.185，Issue 以回归 Bug 和体验优化为主，社区反馈结构化程度高 |
| **GitHub Copilot CLI** | 多个长期 Issue 同日关闭（项目级插件、远程会话删除），功能落地节奏稳定 |
| **OpenAI Codex** | 虽问题多但 PR 产出能力强，Plugin 生态系统化推进，回滚机制成熟（PR #29268） |

### 🌱 早期阶段

| 工具 | 特征 |
|------|------|
| **Kimi Code CLI** | 今日仅 2 Issue + 2 PR，体量最小，但方向明确（技能系统、跨平台） |

---

## 6. 值得关注的趋势信号

### 趋势一：Agent 安全从"可选"变为"刚需"

**信号**：今日 5 个工具同时出现 Agent 安全相关议题——子代理无限递归（Claude Code）、sandboxPolicy 故障（Codex）、Agent 伪造审批（DeepSeek TUI）、权限绕过（Gemini CLI）、文件系统隔离需求（OpenCode）。

**对开发者的价值**：在选择 AI CLI 工具时，应将**沙箱隔离能力、Token 预算硬上限、权限审批溯源**作为核心评估维度，而非仅关注模型能力和功能丰富度。对于企业级部署，这些安全特性将是合规审查的必选项。

### 趋势二：AI CLI 正在从"工具"演进为"平台"

**信号**：OpenAI Codex 的 Plugin agent roles + 定期刷新 + Analytics 集中化、GitHub Copilot CLI 的项目级插件 + Hook 体系、Qwen Code 的多 Provider 网关重构、Pi 的 RPC 接口暴露——多个工具都在构建可扩展的插件/集成生态。

**对开发者的价值**：选择工具时应评估其**插件生态的完整性**（安装、发现、调试、作用域管理）和**API/SDK 的可集成性**。平台化程度高的工具在长期工作流集成中更具优势。

### 趋势三：TUI 体验成为新的竞争焦点

**信号**：Pi 的流式 Markdown 渲染问题（27 评论）、DeepSeek TUI 的 Windows 冻结、OpenCode 的粘贴文本展开（183 👍）、Gemini CLI 的 Shell 命令卡住——当模型能力趋于同质化后，**终端交互的流畅度和可靠性**成为差异化关键。

**对开发者的价值**：在实际选型时，应在自己的主力平台上进行**TUI 压力测试**（大会话、长输出、多 Agent 并发），而非仅看功能列表。TUI 渲染引擎的选择（如 crossterm vs 其他）直接影响跨平台稳定性。

### 趋势四：计费透明度将影响用户留存

**信号**：OpenAI Codex 的 GPT-5.5 rate-limit 异常（67 👍）是今日单 Issue 最高关注度的议题之一；OpenCode 的上下文可视化（112 👍）、Copilot CLI 的 session-usage（8 👍）、DeepSeek TUI 的 Token 预算管控——用户对"钱花在哪"的焦虑正在上升。

**对开发者的价值**：工具的**成本可观测性**（实时 Token 用量、上下文占用明细、预算预警）将成为用户选择的重要参考。对于团队采购，缺乏计费透明度的工具将面临更大的预算管控挑战。

### 趋势五：Windows 体验差距是系统性问题

**信号**：今日 4 个工具出现 Windows 兼容性问题，涉及终端仿真（crossterm）、路径处理（Git Bash/tar）、权限模型（ACL）、WSL 桥接等多个层面，且多为长期未解决的痛点。

**对开发者的价值**：Windows 开发者在选型时应**特别关注工具的 CI 测试矩阵是否覆盖 Windows**，以及 Issue 列表中 Windows 标签的处理速度。目前来看，macOS/Linux 仍是多数 AI CLI 工具的一等公民平台。

---

*本报告基于 2026-06-21 各工具 GitHub 社区公开数据生成，仅供参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据来源：** [anthropics/skills](https://github.com/anthropics/skills) | **截止：** 2026-06-21

---

## 一、热门 Skills 排行

以下 PR 代表了社区讨论最活跃、关注度最高的 Skill 方向（按 Issue 评论热度 + PR 综合关注度排序）：

| # | Skill | 功能概要 | 状态 | 链接 |
|---|-------|---------|------|------|
| 1 | **skill-creator 评估修复** (run_eval.py) | 修复 `run_eval.py` 在所有查询上 recall=0% 的致命 bug，涉及 Windows 子进程管道、编码、触发检测等多处问题 | 🔴 Open | [PR #1298](https://github.com/anthropics/skills/pull/1298) / [Issue #556](https://github.com/anthropics/skills/issues/556) |
| 2 | **组织级 Skill 共享** | 允许在 Claude.ai 内按组织直接分享 Skill，替代当前手动下载 .skill 文件再逐人上传的繁琐流程 | 🔴 Open | [Issue #228](https://github.com/anthropics/skills/issues/228) |
| 3 | **ODT/OpenDocument Skill** | 支持创建、填充、解析 ODT/ODS 文件并转换为 HTML，覆盖开源文档格式需求 | 🔴 Open | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 4 | **ServiceNow 平台 Skill** | 覆盖 ITSM、ITOM、ITAM/SAM、FSM、SecOps、IntegrationHub 等 ServiceNow 全平台能力 | 🔴 Open | [PR #568](https://github.com/anthropics/skills/pull/568) |
| 5 | **testing-patterns Skill** | 全栈测试指南：测试哲学、单元测试 AAA 模式、React 组件测试、Testing Library 实践 | 🔴 Open | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **AURELION 认知框架 Skill 套件** | 结构化思维模板 + 记忆系统，包含 kernel/advisor/agent/memory 四个 Skill | 🔴 Open | [PR #444](https://github.com/anthropics/skills/pull/444) |
| 7 | **document-typography Skill** | 防止 AI 生成文档中的孤儿词换行、孤段标题、编号错位等排版质量问题 | 🔴 Open | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 8 | **Masonry AI 图像/视频生成 Skill** | 通过 Masonry CLI 调用 Imagen 3.0、Veo 3.1 等模型生成图片和视频 | 🔴 Open | [PR #335](https://github.com/anthropics/skills/pull/335) |

---

## 二、社区需求趋势

从 Issues 中提炼出以下 **五大期待方向**：

### 1. 🔧 Skill 基础设施与工具链修复（最高热度）
- **核心问题：** `run_eval.py` 评估循环在 Windows 上完全不可用（recall=0%），导致 description 优化形同虚设
- 相关 Issue：[#556](https://github.com/anthropics/skills/issues/556)（12条评论）、[#1169](https://github.com/anthropics/skills/issues/1169)、[#1061](https://github.com/anthropics/skills/issues/1061)
- 多个独立复现（10+），社区已提交多个修复 PR（#1298、#1099、#1050、#362、#361）

### 2. 🏢 企业级协作与分发
- **组织级 Skill 共享**（Issue #228，14条评论，7👍）——当前只能手动分发 .skill 文件
- **信任边界安全**（Issue #492）——社区 Skill 冒充 `anthropic/` 命名空间，存在权限提升风险
- **ServiceNow 等企业平台集成**（PR #568）

### 3. 📄 文档处理能力扩展
- ODT/OpenDocument 格式支持（PR #486）
- 文档排版质量控制（PR #514）
- PDF/DOCX 已有 Skill 的持续修复（PR #538、#541）

### 4. 🧪 测试与质量保障
- testing-patterns Skill（PR #723）——全栈测试方法论
- skill-quality-analyzer / skill-security-analyzer（PR #83）——Skill 本身的元分析工具
- Agent 治理模式提案（Issue #412）——策略执行、威胁检测、信任评分

### 5. 🧠 Agent 记忆与状态管理
- shodh-memory（PR #154）——跨会话持久化上下文
- compact-memory（Issue #1329）——符号化紧凑状态表示，减少长上下文 token 消耗
- AURELION 套件（PR #444）——结构化认知框架

---

## 三、高潜力待合并 Skills

以下 PR 社区活跃度高、功能明确，有较大合并潜力：

| PR | Skill | 潜力分析 | 链接 |
|----|-------|---------|------|
| **#1298** | run_eval.py 全面修复 | 修复的是官方工具链的核心 bug，影响面极广，多个 PR 竞争合并 | [PR #1298](https://github.com/anthropics/skills/pull/1298) |
| **#509** | CONTRIBUTING.md | 解决仓库社区健康评分仅 25% 的问题，属于低风险高价值文档补充 | [PR #509](https://github.com/anthropics/skills/pull/509) |
| **#723** | testing-patterns | 测试是开发者高频需求，Skill 内容全面且实用 | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **#568** | ServiceNow Skill | 企业 IT 运维场景刚需，覆盖面广，有明确用户群体 | [PR #568](https://github.com/anthropics/skills/pull/568) |
| **#486** | ODT Skill | 开源文档格式支持是文档处理生态的明显缺口 | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **#539** | YAML 特殊字符校验 | 防止 description 字段静默解析失败，属于工具链健壮性改进 | [PR #539](https://github.com/anthropics/skills/pull/539) |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是双轨并行的：一方面要求修复 Skill 工具链的基础可靠性（尤其是 Windows 兼容性和评估循环 bug），另一方面强烈期待企业级协作能力（组织共享、信任安全、企业平台集成）——基础设施"先能用"，生态"再做大"。**

---

# Claude Code 社区动态日报 — 2026-06-21

---

## 1. 今日速览

Claude Code 发布 **v2.1.185**，主要优化了 API 流停滞时的提示文案和触发阈值（从 10 秒延长至 20 秒）。社区 Issue 活跃度较高，**API 无响应问题**（#69358，👍55）和 **VS Code 扩展 MCP 服务器完全失效**（#19054，👍26）持续引发大量讨论。今日有 4 个 PR 更新，均聚焦于修复和文档改进。

---

## 2. 版本发布

### v2.1.185

- **流停滞提示优化**：将 "No response from API · Retrying in …" 改为更友好的 "Waiting for API response · will retry in …"，触发时间从 10 秒延长至 20 秒，减少用户在正常延迟下的焦虑感。

---

## 3. 社区热点 Issues

以下按关注度和影响力排序，精选 10 个最值得关注的 Issue：

| # | Issue | 👍 | 评论 | 摘要 |
|---|-------|-----|------|------|
| 1 | [#69358](https://github.com/anthropics/claude-code/issues/69358) — No Response From API 2.1.181/2.1.183 (constantly) | 55 | 19 | **最高关注度**。Linux 用户报告升级到 2.1.181 和 2.1.183 后持续出现 API 无响应，疑似回归性 Bug。社区反应强烈，多人确认复现。 |
| 2 | [#19054](https://github.com/anthropics/claude-code/issues/19054) — VS Code 扩展不使用 MCP 服务器 | 26 | 21 | **长期未解决**。macOS 上 VS Code 扩展完全无法使用 MCP 服务器，评论数最多，影响面广。 |
| 3 | [#68619](https://github.com/anthropics/claude-code/issues/68619) — 子代理无限递归导致 Token 爆炸 | 5 | 18 | **严重性最高**。子代理递归生成 50+ 层，无视 `CLAUDE_CODE_FORK_SUBAGENT=0`，权限拒绝反而触发更多代理生成，造成灾难性 Token 消耗。 |
| 4 | [#69802](https://github.com/anthropics/claude-code/issues/69802) — ExitWorktree 报告成功但实际遗留孤儿工作树 | 0 | 2 | **今日新报**。macOS 上 `ExitWorktree` 操作虚假成功，残留目录、管理条目和分支，偶发损坏父仓库 `core.bare`。 |
| 5 | [#68789](https://github.com/anthropics/claude-code/issues/68789) — 后台守护进程会话在临时网络错误后永久失败 | 0 | 4 | 后台代理遇到临时 socket 断开后直接标记为永久失败，无重试/重连机制。 |
| 6 | [#69764](https://github.com/anthropics/claude-code/issues/69764) — 手机 App 远程会话静默丢失（数据丢失） | 0 | 2 | Windows 上通过手机 App 远程控制的会话执行后，转录文件从未持久化到主机，对话完全消失。 |
| 7 | [#61675](https://github.com/anthropics/claude-code/issues/61675) — /goal 长提示无折叠控件，遮挡任务状态 | 0 | 2 | UI 体验问题：`/goal` 长文本无 "Show less" 按钮，遮挡任务状态和消息区域。 |
| 8 | [#65669](https://github.com/anthropics/claude-code/issues/65669) — 应用更新后会话文件夹/分组重置 | 1 | 2 | Windows 桌面端更新后会话分组信息丢失。 |
| 9 | [#66126](https://github.com/anthropics/claude-code/issues/66126) — 请求：session management MCP 增加 create_session 工具 | 0 | 2 | 功能请求：当前 MCP 缺少程序化创建持久会话的能力。 |
| 10 | [#60339](https://github.com/anthropics/claude-code/issues/60339) — 模型在单次会话中不一致地应用 CLAUDE.md 指令 | 2 | 8 | 模型间歇性违反 `~/.claude/CLAUDE.md` 中的明确指令，即使文件已在会话开始时加载。 |

---

## 4. 重要 PR 进展

今日共 4 个 PR 更新，精选如下：

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| 1 | [#69727](https://github.com/anthropics/claude-code/pull/69727) — fix(hookify): 匹配 Write 工具内容的文件规则 | OPEN | 修复 `hookify` 中 `event: file` 规则（如检测 `console.log(`）在通过 `Write` 工具创建新文件时不触发的问题。根因是 `config_loader` 推断字段名 `new_text` 有误。 |
| 2 | [#69716](https://github.com/anthropics/claude-code/pull/69716) — fix(workflows): Statsig 事件时间改为毫秒 | OPEN | 修复 `claude-dedupe-issues.yml` 中 Statsig `time` 字段使用秒级时间戳（字符串）的问题，改为毫秒级数字，与 API 要求一致。 |
| 3 | [#69710](https://github.com/anthropics/claude-code/pull/69710) — docs: 更新插件 README 安装方式 | CLOSED | 将 `plugins/README.md` 中的安装方式从已废弃的 `npm install -g` 改为推荐的 `curl` 安装。 |
| 4 | [#69698](https://github.com/anthropics/claude-code/pull/69698) — fix(hookify): 使用根路径导入修复 marketplace 安装 | OPEN | 修复 hookify 在 marketplace 安装模式下的导入路径问题。 |

---

## 5. 功能需求趋势

从今日所有 Issues 中提炼出社区最关注的功能方向：

1. **IDE 集成稳定性** — VS Code 扩展的 MCP 服务器支持（#19054）是长期痛点，社区期待官方优先修复。
2. **API 可靠性与重试机制** — 多个 Issue 涉及 API 无响应（#69358）、后台会话断线不重连（#68789），开发者需要更健壮的网络容错。
3. **子代理系统健壮性** — 无限递归（#68619）、LSP 工具未传播到子代理（#61210）等问题表明子代理的权限控制和资源隔离亟需改进。
4. **数据持久化与防丢失** — 手机远程会话丢失（#69764）、会话文件无限增长导致 OOM（#20367）反映数据可靠性是核心诉求。
5. **会话管理 MCP 完善** — 社区希望 MCP 增加 `create_session` 等工具（#66126），实现更完整的程序化会话管理。
6. **桌面端体验** — macOS 崩溃（#61114）、Windows 会话重置（#65669）、聊天区域空白（#59991）等桌面端问题持续存在。

---

## 6. 开发者关注点总结

- **🔴 最高优先级**：API 无响应回归（#69358）影响大量 Linux 用户，且版本跨度大（2.1.181–2.1.183），需紧急排查。
- **🔴 严重**：子代理无限递归（#68619）可导致 Token 费用飙升，属于资源安全漏洞。
- **🟡 持续痛点**：VS Code 扩展 MCP 支持（#19054）已存在近半年，社区耐心消耗中。
- **🟡 数据丢失风险**：手机远程会话不持久化（#69764）和 ExitWorktree 虚假成功（#69802）涉及数据安全，需关注。
- **🟢 积极信号**：今日 PR 质量较高，hookify 和 CI 工作流修复显示社区贡献活跃。

---

*数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | 报告生成时间：2026-06-21*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-06-21 | 数据来源：github.com/openai/codex**

---

## 1. 今日速览

今日社区最突出的主题是 **Codex Desktop 26.616 版本中 `sandboxPolicy` 字段缺失导致的广泛故障**，涉及 Windows/macOS 的 Browser Use、Computer Use、Chrome 插件及 node_repl 等多个核心功能，引发大量集中反馈。同时，**GPT-5.5 在 Plus 计划下 rate-limit 消耗异常飙升 10-20 倍** 成为计费相关最热议题。PR 侧，团队正推进 **plugin 生态扩展**（agent roles、定期刷新、analytics 集中化）和 **环境上下文迁移至 world state** 等架构级重构。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

### 🔴 高影响 Bug

| # | Issue | 👍 | 评论 | 要点 |
|---|-------|----|------|------|
| 1 | **[#28879](https://github.com/openai/codex/issues/28879)** GPT-5.5 Plus 计划 rate-limit 消耗飙升 10-20x | 67 | 35 | 自 6 月 16 日起，每 token 的 limit 消耗暴增，5h 预算 2-3 个 prompt 即耗尽，社区对计费透明度极度关注 |
| 2 | **[#29189](https://github.com/openai/codex/issues/29189)** macOS Codex Desktop node_repl 因缺少 sandboxPolicy 崩溃 | 63 | 55 | 26.616.41845 版本下 Chrome 插件/node_repl 完全不可用，是本次故障集中爆发点 |
| 3 | **[#18960](https://github.com/openai/codex/issues/18960)** Codex App 频繁 WebSocket 重连循环 | 35 | 49 | Pro 用户在 macOS 上遭遇 streaming 中断，websocket 在 response.completed 前被服务端关闭 |
| 4 | **[#29117](https://github.com/openai/codex/issues/29117)** Windows 上已授予 Full Access 仍反复请求权限 | 10 | 9 | gpt-5.5 + Pro 20x 环境下权限系统异常，影响信任体验 |
| 5 | **[#29000](https://github.com/openai/codex/issues/29000)** Codex CLI 0.141.0 在 Intel macOS 上 SIGTRAP 崩溃 | 7 | 7 | 使用 gpt-5.5 时触发 trace trap，Intel 平台兼容性需关注 |

### 🟡 平台兼容性问题

| # | Issue | 👍 | 评论 | 要点 |
|---|-------|----|------|------|
| 6 | **[#26424](https://github.com/openai/codex/issues/26424)** Windows 上无法使用 WSL 项目 | 10 | 3 | Plus 用户在 Windows 环境下 WSL 路径无法正常工作 |
| 7 | **[#21863](https://github.com/openai/codex/issues/21863)** Windows VS Code 扩展中央面板空白 | 1 | 9 | 自定义 URI 路由使用 fsPath 导致 Windows 下路由失败 |
| 8 | **[#28248](https://github.com/openai/codex/issues/28248)** 断电后 Windows sandbox 所有读操作被 deny-read ACL 拒绝 | 1 | 4 | 异常断电导致 sandbox ACL 状态损坏，需手动恢复 |

### 🟢 功能请求

| # | Issue | 👍 | 评论 | 要点 |
|---|-------|----|------|------|
| 9 | **[#2847](https://github.com/openai/codex/issues/2847)** 排除敏感文件的机制（.codexignore） | 409 | 78 | 👍 数最高，社区强烈需要 `.codexignore` 及全局忽略配置，防止 agent 读取/发送敏感文件 |
| 10 | **[#5181](https://github.com/openai/codex/issues/5181)** 语义化代码库索引与搜索 | 45 | 20 | 中大型代码库中定位困难，社区希望内置语义搜索能力 |

---

## 4. 重要 PR 进展

### 架构重构

| # | PR | 要点 |
|---|----|------|
| 1 | **[#29249](https://github.com/openai/codex/pull/29249)** 将环境上下文迁移至 model world state | 将环境上下文从临时 turn 值重构为类型化、可回放的状态，为后续 compaction/resume 的稳定性奠定基础 |
| 2 | **[#29252](https://github.com/openai/codex/pull/29252)** 环境上下文迁移为 world state（已合并） | 基于 #29249，使类型化 world state 成为模型可见环境上下文的正式来源，移除旧并行实现 |
| 3 | **[#29256](https://github.com/openai/codex/pull/29256)** 添加 context window lineage IDs（已合并） | 为 token budget 暴露首个窗口及前序窗口 ID，确保跨 compaction/resume/rollback 的稳定性 |

### Plugin 生态

| # | PR | 要点 |
|---|----|------|
| 4 | **[#28845](https://github.com/openai/codex/pull/28845)** 支持 plugin agent roles | 允许 TOML 定义的 agent role（如 `sample:researcher`），扩展 spawn_agent 的命名空间能力 |
| 5 | **[#29173](https://github.com/openai/codex/pull/29173)** app-server 每 5 分钟刷新已安装 plugins（已合并） | 后台 worker 定期从远程拉取 plugin 元数据并同步本地 bundle |
| 6 | **[#29244](https://github.com/openai/codex/pull/29244)** app-server 定期刷新已安装 plugins | 提取公共 periodic refresh worker，支持立即执行 + 间隔调度 + 生命周期管理 |
| 7 | **[#29245](https://github.com/openai/codex/pull/29245)** app-server 定期刷新 Codex Apps 工具缓存 | 每 5 分钟刷新 MCP tools 缓存，复用 threadless connector 刷新路径 |
| 8 | **[#27102](https://github.com/openai/codex/pull/27102)** 集中 Plugin Analytics 元数据构造 | 将 telemetry 元数据构造逻辑收归 PluginsManager，为后续远程身份丰富做准备 |

### 其他

| # | PR | 要点 |
|---|----|------|
| 9 | **[#29268](https://github.com/openai/codex/pull/29268)** 回滚 "Scope MCP sandbox metadata to server environment (#28914)" | 直接回滚了导致本次 sandboxPolicy 大规模故障的源头提交，属于紧急修复 |
| 10 | **[#29263](https://github.com/openai/codex/pull/29263)** 从 Linux sandbox 暴露 Sites preview | 新增 `sites_preview` exec flag，在 sandbox 网络命名空间内预留 4173 端口用于本地预览 |

---

## 5. 功能需求趋势

从当前活跃 Issues 中提炼出以下五大方向：

| 方向 | 代表 Issue | 社区声量 |
|------|-----------|---------|
| **🔒 安全与敏感文件控制** | #2847 (.codexignore) | 👍 409，评论 78 — 压倒性关注 |
| **🔍 代码库语义搜索/索引** | #5181 | 👍 45 — 中大型项目刚需 |
| **📱 多端连接与状态同步** | #22898, #23805, #18960 | 多平台连接稳定性持续受关注 |
| **🧩 IDE 集成体验** | #25319 (VS Code 会话隔离), #21863 (Windows 面板空白) | 工作区级别的隔离与管理 |
| **💰 计费透明度与 rate-limit** | #28879 | 用户对计费突变的零容忍 |

---

## 6. 开发者关注点总结

1. **sandboxPolicy 故障波及面极广**：PR #28914 的回滚（#29268）表明该变更在沙箱元数据作用域处理上存在设计缺陷，影响 Windows/macOS 的 Browser Use、Computer Use、Chrome 插件等核心路径。社区期待根本原因修复而非仅回滚。

2. **GPT-5.5 计费体验倒退**：#28879 反映 Plus 计划用户在模型升级后可用量骤降，社区对 rate-limit 算法的公平性和透明度提出质疑。

3. **Windows 平台持续二等公民**：权限反复请求（#29117）、WSL 不兼容（#26424）、VS Code 面板空白（#21863）、断电后 ACL 损坏（#28248）——Windows 用户的体验差距显著。

4. **敏感文件保护呼声最高**：#2847 的 👍 数（409）远超其他 Issue，反映出开发者对 agent 读取/外发敏感配置（.env、密钥文件等）的深切担忧。

5. **Plugin 生态快速扩张**：多个 PR 集中推进 plugin 的 agent roles、定期刷新、analytics 集中化，显示 OpenAI 正将 Codex 定位为可扩展的 agent 平台。

---

*日报由 OWL 自动生成 | 数据截至 2026-06-21*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-21

---

## 1. 今日速览

过去 24 小时内，Gemini CLI 社区无新版本发布，但 Issue 和 PR 活动密集。**Agent 稳定性与内存系统**成为核心焦点——新 Issue 报告 `google_web_search` 无限循环，多个 Auto Memory 相关 Bug 持续发酵；同时社区贡献活跃，涵盖安全漏洞修复（CVE）、终端图像粘贴、MCP 图像 MIME 检测等多项重要 PR。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

以下按热度与重要性排序，精选 10 个值得关注的 Issue：

### 🔴 高优先级 / 核心功能

| # | 标题 | 关键信息 |
|---|------|----------|
| **#21409** | [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | 👍8 · 评论 7。Generalist 子 Agent 在执行简单操作（如创建文件夹）时无限挂起，用户等待超一小时。禁用子 Agent 可临时规避。这是影响日常使用的严重稳定性问题。 |
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | 👍2 · 评论 6。子 Agent 达到最大轮数限制后仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际中断，导致用户误以为任务完成。 |
| **#25166** | [Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | 👍3 · 评论 4。Shell 命令已执行完毕，但 CLI 仍显示"Awaiting user input"并卡住，影响所有依赖 shell 执行的工作流。 |

### 🟡 新发 Bug / 回归问题

| # | 标题 | 关键信息 |
|---|------|----------|
| **#28037** | [google_web_search loops indefinitely when no relevant results found](https://github.com/google-gemini/gemini-cli/issues/28037) | 评论 6。当搜索查询无相关结果时，`google_web_search` 工具陷入无限重试循环，无法自行停止。今日刚创建即获关注。 |
| **#22093** | [(Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093) | 评论 2。v0.33.0 起，即使配置中禁用 Agent 模式，子 Agent 仍被自动调用，属于权限/配置回归 Bug。 |

### 🟠 内存系统（Auto Memory）系列

| # | 标题 | 关键信息 |
|---|------|----------|
| **#26525** | [Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | 评论 5。Auto Memory 在将内容发送给提取 Agent 之前未做确定性脱敏，存在敏感信息泄露风险。 |
| **#26522** | [Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522) | 评论 5。低价值会话因未被标记为已处理而反复被提取 Agent 重试，浪费资源。 |
| **#26523** | [Surface or quarantine invalid Auto Memory inbox patches](https://github.com/google-gemini/gemini-cli/issues/26523) | 评论 3。无效的 memory patch 被静默跳过，缺乏可见性和隔离机制，可能导致数据不一致。 |

### 🔵 功能探索 / 架构改进

| # | 标题 | 关键信息 |
|---|------|----------|
| **#24353** | [Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) | 评论 7。EPIC 级别 Issue，跟踪组件级行为评估体系建设。目前已生成 76 个行为评估测试，覆盖 6 个 Gemini 模型，是质量保障基础设施的核心。 |
| **#22745** | [Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | 👍1 · 评论 7。探索引入 AST 感知的文件读取和代码库映射工具，可减少工具调用轮次、降低 token 噪声，是 Agent 架构优化的重要方向。 |

---

## 4. 重要 PR 进展

以下精选 10 个重要 PR，按优先级与影响力排序：

### 🔴 安全修复

| # | 标题 | 内容 |
|---|------|------|
| **#27856** | [Upgrade shell-quote to 1.8.4 (CVE-2026-9277)](https://github.com/google-gemini/gemini-cli/pull/27856) | 修复 CRITICAL 级别 CVE，升级 shell-quote 依赖。 |
| **#27857** | [Upgrade vitest to 4.1.0 (CVE-2026-47429)](https://github.com/google-gemini/gemini-cli/pull/27857) | 修复 CRITICAL 级别 CVE，升级 vitest 测试框架。 |

### 🟡 核心 Bug 修复

| # | 标题 | 内容 |
|---|------|------|
| **#27870** | [Cap pending tool responses](https://github.com/google-gemini/gemini-cli/pull/27870) | P1 修复。限制单个工具响应的最大体积，防止超大 tool result 阻塞 Agent 循环（#27738）。 |
| **#27878** | [Sniff MCP image MIME types](https://github.com/google-gemini/gemini-cli/pull/27878) | P1 修复。通过本地二进制签名检测正确识别 WebP 等图像格式，解决 Figma MCP 集成中图像被错误标记为 PNG 导致 API 400 错误的问题（#27731）。 |
| **#28055** | [Preserve dollar sequences in prompt template substitutions](https://github.com/google-gemini/gemini-cli/pull/28055) | 修复 `applySubstitutions()` 中 `$` 序列（如 `$$`、`$'`）被错误转义的问题，影响 skill/子 Agent/工具描述中的内容完整性。 |
| **#28054** | [Strip trailing periods from error URLs](https://github.com/google-gemini/gemini-cli/pull/28054) | P2。移除错误消息中 URL 末尾的句点，确保渲染后的链接可正常点击。 |

### 🟠 功能增强

| # | 标题 | 内容 |
|---|------|------|
| **#27859** | [Add native drag-and-drop and Cmd+V clipboard image pasting](https://github.com/google-gemini/gemini-cli/pull/27859) | P3 功能。为终端添加原生拖拽和剪贴板图像粘贴支持，补齐多模态交互能力。 |
| **#28058** | [Add JSON output for eval inventory](https://github.com/google-gemini/gemini-cli/pull/28058) | 为 eval inventory 命令添加 `--json` 输出选项，便于 CI 和自动化脚本集成。 |

### 🟢 基础设施 / 文档

| # | 标题 | 内容 |
|---|------|------|
| **#28065** | [Bump node google-auth-library to 10.7.0](https://github.com/google-gemini/gemini-cli/pull/28065) | 依赖升级，跟进 #27956 的修复。 |
| **#28059** | [Don't crash in Cloud Shell when .env is unreadable (EACCES)](https://github.com/google-gemini/gemini-cli/pull/28059) | P2。修复 Cloud Shell 环境下 `.env` 文件不可读时启动崩溃的问题。 |

---

## 5. 功能需求趋势

从当前活跃 Issues 中可提炼出以下 **5 大功能方向**：

### ① Agent 稳定性与可靠性 🔥🔥🔥
最突出的主题。涵盖 Agent 挂起（#21409）、子 Agent 误报成功（#22323）、工具无限循环（#28037）、权限绕过（#22093）等。社区对 Agent 核心循环的健壮性有强烈诉求。

### ② Auto Memory 系统完善 🔥🔥🔥
由 @SandyTao520 集中提交的一组 Bug（#26525、#26522、#26523、#26516），涉及脱敏、重试策略、无效 patch 处理，说明内存系统已进入深度打磨阶段。

### ③ 评估基础设施（Eval Infra）🔥🔥
#24353（组件级评估）和 #23166（内部评估稳定性）表明团队正在系统化建设质量保障体系，76 个行为评估测试已覆盖 6 个模型。

### ④ AST 感知与代码库智能 🔥
#22745 和 #22746 探索引入 AST 感知工具，旨在减少工具调用轮次、提升代码理解精度，是 Agent 架构演进的重要方向。

### ⑤ 多模态与终端交互 🔥
#27859（图像粘贴）和 #27878（MCP 图像 MIME 检测）显示社区对终端多模态交互能力的持续投入。

---

## 6. 开发者关注点

| 痛点 | 典型表现 |
|------|----------|
| **Agent 不可预测性** | 挂起、无限循环、误报成功——开发者难以信任 Agent 的自主执行结果 |
| **子 Agent 权限控制** | v0.33.0 后配置失效，子 Agent 在禁用状态下仍被调用 |
| **内存系统透明度** | 无效 patch 静默跳过、低价值会话无限重试、敏感信息脱敏不足 |
| **安全合规** | 本周出现 2 个 CRITICAL CVE（shell-quote、vitest），安全依赖管理压力增大 |
| **终端体验** | Shell 命令卡住、外部编辑器退出后屏幕损坏、Cloud Shell 启动崩溃等终端交互问题持续存在 |
| **多模态缺口** | 图像粘贴、MCP 图像格式识别等能力仍在补齐中 |

---

> **编辑点评：** 本周社区进入"深度打磨期"——没有大版本发布，但 Agent 稳定性和内存系统的 Bug 修复密集推进。安全方面需关注两个 CRITICAL CVE PR 的合并进度。多模态交互（图像粘贴）和 AST 感知代码工具是值得长期跟踪的架构方向。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-06-21**

---

## 1. 今日速览

今日社区以 **Bug 修复与体验优化** 为主基调，共 14 条 Issue 更新、3 条 PR 更新，无新版本发布。值得关注的是：**鼠标追踪退出残留问题**（#3876）和**插件 Hook 配置静默丢弃问题**（#3872）均在今日被关闭，说明团队在持续打磨终端交互与插件系统的可靠性。同时，**插件项目级作用域**（#1665）和**远程 Agent 会话删除**（#3072）两个高赞功能请求也于今日正式关闭，标志着相关功能已落地。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

### 🔴 已关闭 — 功能落地

| # | 标题 | 要点 |
|---|------|------|
| **#1665** | [CLOSED] 支持项目/仓库级别的 Copilot CLI 插件 | 👍17，8 条评论。此前插件仅支持 per-user 全局安装，现已支持按项目/仓库作用域加载插件，对团队协作场景意义重大。[链接](https://github.com/github/copilot-cli/issues/1665) |
| **#3072** | [CLOSED] 支持删除远程 Agent 会话 | 👍6。`/resume` 菜单此前只能删除本地会话，现已支持远程会话删除，解决了长期困扰用户的残留会话清理问题。[链接](https://github.com/github/copilot-cli/issues/3072) |
| **#3876** | [CLOSED] 退出时鼠标追踪未正确关闭 | 由 jakebailey 提交，CLI 退出后终端鼠标滚动失效。涉及 alt screen / mouse tracking 的 ESC 序列恢复逻辑，今日已修复关闭。[链接](https://github.com/github/copilot-cli/issues/3876) |
| **#3872** | [CLOSED] Hook 配置中事件键大小写错误被静默丢弃 | 当 `hooks.json` 中事件键（如 `PreToolUse`）不符合 camelCase 规范时，CLI 仅 debug 级别日志提示，无可见警告。现已修复，提升了插件开发体验。[链接](https://github.com/github/copilot-cli/issues/3872) |

### 🟡 活跃中 — 高价值功能请求

| # | 标题 | 要点 |
|---|------|------|
| **#1240** | 在 `copilot --acp` 中支持 session-usage | 👍8，6 条评论。提议实现 Agent Client Protocol 的 session-usage RFD，让用户能看到会话级别的 token 用量和成本信息。[链接](https://github.com/github/copilot-cli/issues/1240) |
| **#3871** | 无法列出已安装的 hooks — MCP 有 `list`，hooks 没有 | 插件生态中 MCP 服务器可通过 `copilot mcp list` 枚举，但 hooks 完全没有等价命令，对插件开发者调试极不友好。[链接](https://github.com/github/copilot-cli/issues/3871) |
| **#3878** | 计划实现后自动切回 Plan 模式 | 当前 Plan → Autopilot → Complete 流程完成后，会话仍停留在 Autopilot 模式。用户希望实现后自动回到 Plan 模式以便迭代。[链接](https://github.com/github/copilot-cli/issues/3878) |
| **#3877** | 会话启动时自动允许所有权限 | 提议增加 `permissions.auto_allow_all` 配置项，新会话启动时自动执行 `/allow-all`，减少重复授权打断。[链接](https://github.com/github/copilot-cli/issues/3877) |
| **#3875** | 主 Agent 为 gpt-5.4/gpt-5.5 且 `deferTools: never` 时无法启动子 Agent | 涉及模型配对与 MCP 服务器配置交互的深层 Bug，影响使用高端模型 + 特定 MCP 配置的用户。[链接](https://github.com/github/copilot-cli/issues/3875) |
| **#3874** | VS Code Agent 的 `preToolUse` Hook 拒绝不生效 | VS Code 1.125.1 + Copilot Chat v0.53.1 环境下，通过 `.github/hooks/hooks.json` 配置的 Hook 无法正确阻断命令执行，权限控制形同虚设。[链接](https://github.com/github/copilot-cli/issues/3874) |
| **#3867** | 聊天会话中无上下文窗口可见性或压缩通知 | 用户无法看到当前会话的 token 使用量，上下文压缩也静默发生，缺乏类似模型名称显示那样的 UI 指示器。[链接](https://github.com/github/copilot-cli/issues/3867) |
| **#3869** | `/ask` 功能因答案显示区域过窄而无法使用 | 回答文本框仅显示几行，对于包含代码片段的长回答体验极差。[链接](https://github.com/github/copilot-cli/issues/3869) |
| **#3868** | 多会话打开时右键点击导致应用挂起 | 版本 1.0.64-0 中，多个聊天/会话同时打开时右键任意会话会导致 UI 冻结，属于影响日常使用的稳定性问题。[链接](https://github.com/github/copilot-cli/issues/3868) |
| **#3870** | 使用 GitHub Agentic Workflows 自动分类 Issue | 越南语 Issue，提议用 `gh-aw` 自动为 Issue 添加 `area:` 和 `triage` 标签，已关联 PR #2587。[链接](https://github.com/github/copilot-cli/issues/3870) |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|------|------|------|
| **#2587** | 使用 GitHub Agentic Workflows 自动分类 Issue | ✅ CLOSED | 引入 `gh-aw` 驱动的 AI 工作流，在 Issue 创建/重开时自动打 `area:` 和 `triage` 标签，提升 Issue 管理效率。[链接](https://github.com/github/copilot-cli/pull/2587) |
| **#1014** | 记录 Esc 键行为修复（交互式提示取消） | ✅ CLOSED | 修复在 "No, and tell Copilot what to do differently" 文本输入时按 Esc 自动选中 "No" 的问题，改为返回选项选择器。[链接](https://github.com/github/copilot-cli/pull/1014) |
| **#3873** | 添加初始控制台日志问候语 | 🔓 OPEN | 由外部贡献者 EverydayEvertime 提交，为 CLI 启动添加初始 console log 输出，目前内容较简略，可能仍在开发中。[链接](https://github.com/github/copilot-cli/pull/3873) |

---

## 5. 功能需求趋势

从本期所有 Issue 中提炼出以下 **五大功能方向**：

1. **插件系统完善**（#1665, #3871, #3872, #3874）
   - 项目级插件作用域、Hook 枚举命令、配置错误可见性、VS Code 端 Hook 执行可靠性 — 插件生态是社区当前最集中的诉求领域。

2. **权限与授权自动化**（#3877, #3874）
   - 自动允许权限、Hook 拒绝机制修复，反映开发者对「减少打断、安全可控」的强烈需求。

3. **会话与上下文可观测性**（#1240, #3867, #3072）
   - Session-usage 用量展示、上下文窗口指示器、远程会话管理 — 用户希望更透明地了解和管理自己的会话资源。

4. **Agent 工作流控制**（#3878, #3875）
   - Plan/Autopilot 模式切换、子 Agent 模型配对 — 随着 Agent 能力增强，用户对工作流精细控制的需求日益增长。

5. **终端/UI 体验优化**（#3876, #3869, #3868）
   - 鼠标追踪残留、文本框显示区域不足、多会话右键挂起 — 基础交互体验仍是高频反馈来源。

---

## 6. 开发者关注点

### 🔑 核心痛点

- **插件开发体验割裂**：MCP 有完整的 `list`/`get` 命令体系，而 hooks 作为插件生态的一等公民却缺乏同等的基础工具支持（#3871），配置错误时甚至静默失败（#3872）。
- **上下文黑盒**：token 用量不可见、压缩无通知（#3867），开发者无法判断何时会话会因上下文溢出而降级。
- **权限反复打断**：每次新会话都需要手动授权（#3877），在信任路径明确的场景下严重影响效率。
- **多会话管理薄弱**：右键即冻结（#3868）、远程会话无法删除（#3072，已修复），基础稳定性有待加强。
- **高端模型兼容性**：gpt-5.4/gpt-5.5 与特定 MCP 配置组合下子 Agent 启动失败（#3875），对新模型的支持速度跟不上用户升级节奏。

### 📊 高频关键词

`plugins` > `hooks` > `permissions` > `sessions` > `terminal-rendering` > `agents`

---

*数据来源：github.com/github/copilot-cli | 生成时间：2026-06-21*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-21

---

## 1. 今日速览

过去 24 小时内，Kimi Code CLI 社区无新版本发布，但有两项 Issue 和两项 PR 获得更新。核心动态集中在 **Windows 平台兼容性修复**（Git Bash 环境下 tar/zip 解压问题）和 **系统代理支持**（`FetchURL` 未读取 `HTTP_PROXY` 环境变量），反映出社区对跨平台稳定性和网络配置灵活性的持续关注。

---

## 2. 版本发布

过去 24 小时内无新版本发布，本节省略。

---

## 3. 社区热点 Issues

> 注：过去 24 小时内仅有 2 条 Issue 获得更新，以下逐一列出。

### Issue #2462 — Windows + Git Bash 下 VS Code 扩展无法解压 bundled CLI
- **状态：** CLOSED
- **作者：** yplgame | 创建：2026-06-18 | 更新：2026-06-20 | 评论：1
- **链接：** [MoonshotAI/kimi-cli#2462](https://github.com/MoonshotAI/kimi-cli/issues/2462)
- **摘要：** 在 Windows + Git Bash (MSYS2) 环境下，VS Code 扩展尝试使用 `tar` 解压 bundled CLI 时失败，因为 `tar` 无法处理 `.zip` 格式。
- **为什么重要：** 这是典型的跨平台兼容性问题。Windows 开发者使用 Git Bash 作为终端时，工具链对压缩格式的假设不一致，导致核心功能（CLI 安装/更新）直接失效。此类问题直接影响 Windows 用户的首体验，若不修复将流失大量潜在用户。
- **社区反应：** 评论仅 1 条，Issue 已关闭，推测已通过修复或 workaround 解决。

### Issue #2440 — Kimi Code 聊天面板中可点击的符号/行号引用
- **状态：** CLOSED
- **作者：** ElPrg | 创建：2026-06-07 | 更新：2026-06-20 | 评论：0
- **链接：** [MoonshotAI/kimi-cli#2440](https://github.com/MoonshotAI/kimi-cli/issues/2440)
- **摘要：** 当前聊天面板中，内联代码的文件路径（如 `tools/example_module.py`）可点击跳转，但**不支持点击函数/方法名跳转到定义行**，降低了代码导航效率。
- **为什么重要：** 这是 IDE 集成体验的核心增强需求。AI 生成的代码片段中频繁引用函数和符号，若无法直接跳转，开发者需手动查找，打断工作流。此功能对标 GitHub Copilot Chat 等竞品的交互体验。
- **社区反应：** 无评论，Issue 已关闭，可能已纳入规划或通过其他方式解决。

---

## 4. 重要 PR 进展

> 注：过去 24 小时内仅有 2 条 PR 获得更新，以下逐一列出。

### PR #2063 — feat(config): 添加 `default_skills` 配置，会话启动时自动激活技能
- **状态：** CLOSED
- **作者：** maxBRT | 创建：2026-04-24 | 更新：2026-06-20
- **链接：** [MoonshotAI/kimi-cli#2063](https://github.com/MoonshotAI/kimi-cli/pull/2063)
- **摘要：** 实现 Issue #2062 请求的功能：新增 `default_skills` 配置项，在每次新会话启动时自动激活指定技能。涉及配置 schema 新增字段（默认空数组）和会话启动流程中系统提示写入后的技能迭代激活逻辑。
- **意义：** 这是**技能系统（Skills）的重要增强**，允许用户预设常用技能（如代码审查、测试生成等），避免每次手动激活，显著提升工作流自动化程度。

### PR #2463 — fix: 在 `FetchURL` 中尊重系统代理设置
- **状态：** OPEN
- **作者：** itxaiohanglover | 创建：2026-06-19 | 更新：2026-06-20
- **链接：** [MoonshotAI/kimi-cli#2463](https://github.com/MoonshotAI/kimi-cli/pull/2463)
- **摘要：** `FetchURL` 未读取 `HTTP_PROXY`/`HTTPS_PROXY`（及小写变体）环境变量，因为 `aiohttp.ClientSession` 默认不自动读取系统代理。在需要代理的网络环境中，请求会因 `Connection reset by peer` 失败。
- **意义：** 这是**网络基础设施层面的关键修复**。企业内网、学术网络等环境普遍依赖系统代理，此修复直接影响这些环境下 Kimi Code CLI 的可用性。PR 仍处于 OPEN 状态，等待合并。

---

## 5. 功能需求趋势

从当前 Issues 和 PR 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue/PR | 说明 |
|------|--------------|------|
| **IDE 集成体验** | #2440 | 聊天面板中符号/行号跳转，对标竞品交互体验 |
| **跨平台兼容性** | #2462 | Windows + Git Bash 环境下工具链兼容性问题 |
| **网络配置灵活性** | #2463 | 系统代理支持，企业/内网环境刚需 |
| **技能系统增强** | #2063 | 自动激活预设技能，工作流自动化 |
| **配置可扩展性** | #2063 | 新增 `default_skills` 配置项，降低重复操作 |

---

## 6. 开发者关注点

综合当前反馈，开发者的核心痛点和高频需求如下：

1. **Windows 平台体验仍是短板** — Git Bash 作为 Windows 开发者的主流终端之一，工具链对压缩格式、路径处理等假设不一致，导致核心功能失效。需要加强 Windows CI 测试覆盖。

2. **网络环境适配不足** — `aiohttp` 默认不读取系统代理是 Python 生态的常见问题，但在企业/学术网络环境下是刚需。PR #2463 的修复应尽快合并。

3. **IDE 交互深度有待提升** — 从文件路径可点击到符号/行号可点击，是 AI 编码工具交互体验的关键差异点。社区已开始提出此类需求。

4. **技能系统的自动化程度** — 用户期望减少重复配置，`default_skills` 是正确方向，后续可能衍生出技能推荐、条件激活等更复杂需求。

---

*数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 日报生成时间：2026-06-21*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-21

---

## 1. 今日速览

OpenCode 发布 **v1.17.9**，重点修复 agent step limit 未生效、Devstral 模型检测大小写不一致及 Copilot 自定义请求头传递等问题。社区讨论最活跃的话题集中在 **agent 沙箱隔离**（#2242，77 条评论）、**粘贴文本展开**（#8501，183 个 👍）和 **会话上下文可视化**（#6152，112 个 👍）。PR 方面，TUI 2.0 重构、Android/Termux 支持、Agent Teams 子代理委托等重磅功能持续推进。

---

## 2. 版本发布

### v1.17.9 — 2026-06-21

**Bugfixes**
- **Agent step limit 强制执行**：当达到配置的 agent step 上限时，不再中途报错，而是强制输出最终文本响应，确保会话优雅结束。
- **Devstral 模型检测修复**：修复 provider ID 大小写不一致时 Devstral 模型无法被正确识别的问题。（贡献者：@Robin1987China）
- **Copilot 自定义请求头**：将用户配置的自定义 headers 正确传递给 Copilot 模型请求。

**Improvements**
- 新增 `high`（内容截断，完整 changelog 待补充）

---

## 3. 社区热点 Issues

| # | 标题 | 热度 | 摘要 |
|---|------|------|------|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | Agent 沙箱隔离方案 | 💬 77 / 👍 55 | 用户希望限制 agent 终端命令只能访问当前目录，类似 macOS 上的 seatbelt。这是社区长期关注的安全议题，讨论涉及 Linux namespace、chroot 等多种方案。 |
| [#8501](https://github.com/anomalyco/opencode/issues/8501) | 展开粘贴文本（`[Pasted ~1 lines]`） | 💬 26 / 👍 183 | 粘贴内容被自动摘要后用户无法查看和编辑原文。👍 数极高，说明这是影响日常使用的高频痛点。 |
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | 会话上下文用量可视化（类似 Claude 的 `/context`） | 💬 19 / 👍 112 | 用户希望在 TUI 中看到当前会话 context window 的占用明细。高 👍 数反映开发者对 token 消耗透明度的强烈需求。 |
| [#27589](https://github.com/anomalyco/opencode/issues/27589) | TUI 在 Alpine Linux (musl) 上崩溃：`getcontext` 符号缺失 | 💬 36 / 👍 12 | v1.14.50 引入的回归，v1.14.48 正常。涉及 OpenTUI 渲染库与 musl libc 的兼容性问题，影响 Docker/WSL Alpine 用户。 |
| [#32444](https://github.com/anomalyco/opencode/issues/32444) | GLM-5.2 thinking-effort 变体（High/Max）未暴露 | 💬 9 / 👍 15 | `ProviderTransform.variants()` 对含 `glm` 的模型 ID 返回空对象，导致用户无法切换推理强度。已关闭，相关修复已合并。 |
| [#29462](https://github.com/anomalyco/opencode/issues/29462) | Skills 工具将所有发现的 skill 注入 system prompt 且无上限 | 💬 11 | 当 skill 库规模极大（如 10 万条）时，每次 turn 都会注入全部 skill 描述，可能导致 prompt 膨胀和性能下降。 |
| [#31755](https://github.com/anomalyco/opencode/issues/31755) | MiniMax 直接 API 缓存可能已失效 | 💬 10 | 用户报告 MiniMax M3 在直接 API 模式下缓存行为异常，5 小时用量限制下降速度变快，而 OpenRouter BYOK 模式缓存正常。 |
| [#33106](https://github.com/anomaly.com/opencode/issues/33106) | Desktop 渲染大型会话 diff 时卡死崩溃 | 💬 2 | macOS arm64 上 Electron 主进程在打开包含大量文件变更的会话时失去响应后崩溃。 |
| [#33114](https://github.com/anomalyco/opencode/issues/33114) | WSL 环境下 task() 子代理启动失败：`messages.map is not a function` | 💬 2 | Windows 桌面客户端连接 WSL 工作区时子代理 spawn 报错，但 VS Code 扩展和原生 CLI 正常，说明是桌面端 WSL 桥接问题。 |
| [#33135](https://github.com/anomalyco/opencode/issues/33135) | 推理文本无限重复循环 | 💬 1 | 部分 provider（如 Kimi 2.6）的 reasoning 输出陷入无限循环，同一 token 反复追加，造成不必要的 token 消耗。 |

---

## 4. 重要 PR 进展

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#33167](https://github.com/anomalyco/opencode/pull/33167) | fix(session): 省略空 assistant turns | 🐛 Bugfix | 过滤掉被中断且不包含有效文本、推理状态或 tool call 的 assistant turn，同时在 AI SDK 和 native 两层进行过滤。 |
| [#33166](https://github.com/anomalyco/opencode/pull/33166) | fix: 跳过 Nix 版本的 bun 版本检查 | 🐛 Bugfix | bun 1.3.14 在 nixpkgs 中存在已知 bug，此 PR 对 Nix 版本跳过版本检查，与 nixpkgs 已有 hack 保持一致。 |
| [#31796](https://github.com/anomalyco/opencode/pull/31796) | tui 2.0 | 🏗️ 重构 | TUI 全面重构，正在持续更新中，是下一代终端 UI 架构的核心工作。 |
| [#33010](https://github.com/anomalyco/opencode/pull/33010) | feat: 添加 Android/Termux 支持 | ✨ Feature | 在 postinstall、wrapper 和 publish 流程中识别 `android` 平台，关闭 #961、#10504、#21043、#30248。 |
| [#33164](https://github.com/anomalyco/opencode/pull/33164) | feat: 允许非 git 项目编辑项目设置 | ✨ Feature | 解除 Desktop 端项目设置编辑必须为 git repo 的限制，关闭 #33165。 |
| [#33162](https://github.com/anomalyco/opencode/pull/33162) | feat(cli): 添加 `--yolo` 权限别名 | ✨ Feature | 为 `--dangerously-skip-permissions` 添加 `--yolo` 短别名，支持 TUI 和 `run` 命令，同时支持 `OPENCODE_DANGEROUSLY_SKIP_PERMISSIONS` 环境变量。 |
| [#33148](https://github.com/anomalyco/opencode/pull/33148) | feat: 通过配置跳过会话标题生成 | ✨ Feature | 新增 `skip-title` 模型配置项，避免在使用慢速本地模型时额外调用 LLM 生成标题，关闭 #33140。 |
| [#33160](https://github.com/anomalyco/opencode/pull/33160) | fix(mcp): 防止 MCP tool 调用中 null 参数 | 🐛 Bugfix | 修复 MCP 工具参数仅有 `description` 无显式 `type` 时，MiniMax 等 OpenAI 兼容模型收到 `null` 值的问题，关闭 #21080。 |
| [#33159](https://github.com/anomalyco/opencode/pull/33159) | fix(core): 重试 SQLite 锁超时 | 🐛 Bugfix | 对持久化事件提交时的瞬时 SQLite 锁超时进行自动重试，堆叠于 #33134 之上。 |
| [#33144](https://github.com/anomalyco/opencode/pull/33144) | feat: Agent Teams 与嵌套子代理委托 | ✨ Feature | 实现 agent teams 核心原语和子代理到子代理的委托机制，关闭 #12711，部分解决 #32166。 |

---

## 5. 功能需求趋势

从过去 24 小时的 Issues 和 PRs 来看，社区需求集中在以下方向：

| 方向 | 代表 Issue/PR | 趋势说明 |
|------|---------------|----------|
| **🔒 Agent 安全与沙箱** | #2242 | 长期高热度，用户期望类似 seatbelt 的文件系统隔离能力 |
| **📋 粘贴与上下文管理** | #8501, #6152 | 粘贴文本展开和 context 可视化合计近 300 👍，是最高频的日常体验诉求 |
| **📱 跨平台支持** | #33010 (Termux), #27589 (Alpine), #33114 (WSL) | Android、musl Linux、WSL 等非主流平台兼容性需求持续增长 |
| **🧠 模型变体与推理控制** | #32444, #18598, #33140 | 用户对 thinking-effort 切换、推理模式细粒度控制的需求明确 |
| **🤖 子代理与 Agent Teams** | #33144, #15080, #33114 | 子代理超时配置、嵌套委托、WSL 兼容性是工程化使用的关键 |
| **💰 成本与缓存** | #31755, #33135, #33140 | 缓存失效、推理循环、标题生成开销——用户对 token 成本敏感度提升 |
| **🖥️ Desktop 稳定性** | #33106, #33132 | 大会话渲染崩溃、共享终端面板等桌面端体验问题 |

---

## 6. 开发者关注点总结

1. **Agent 安全边界亟待明确**：沙箱隔离讨论已持续近一年（#2242），社区期待官方给出明确路线图或插件化方案。

2. **粘贴体验是最大日常摩擦点**：#8501 以 183 个 👍 成为当日最受关注的 issue，`[Pasted ~N lines]` 摘要机制虽然节省 token，但牺牲了可编辑性，需要更灵活的交互设计。

3. **非主流平台用户被边缘化**：Alpine/musl、Android/Termux、WSL 等平台的兼容性问题频繁出现，说明 OpenCode 的跨平台测试覆盖仍需加强。

4. **模型生态碎片化带来维护压力**：GLM、MiniMax、Kimi 等模型的推理变体、缓存行为、消息格式各不相同，provider transform 层的复杂度持续上升。

5. **Agent Teams 正在从概念走向落地**：#33144 的 PR 标志着多代理协作架构进入实质性开发阶段，这将显著改变 OpenCode 的使用范式。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) | 报告生成时间：2026-06-21*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-21

---

## 1. 今日速览

Pi 发布 **v0.79.9**，核心亮点是新增 Chat-template thinking 兼容层，使 vLLM/Hugging Face 系模型（如 DeepSeek）可通过 `chat_template_kwargs` 使用原生 thinking 控制。社区今日活跃度极高，共处理 **34 条 Issue 更新 + 3 条 PR**，焦点集中在 **TUI 流式渲染稳定性、会话管理性能、多模型 Provider 扩展** 三大方向。

---

## 2. 版本发布

### v0.79.9 — Chat-template Thinking 兼容

- **核心功能**：OpenAI-compatible 自定义 Provider 现在可将 Pi 的 thinking 级别映射到 `chat_template_kwargs`，使 vLLM / Hugging Face chat-template 模型（如 DeepSeek）能够使用 Provider 原生的 thinking 控制机制。
- **参考文档**：[Custom Provider API Types](https://)
- **链接**：[github.com/badlogic/pi-mono/releases](https://github.com/badlogic/pi-mono/releases)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 摘要 |
|---|-------|------|------|
| 1 | **[#5825] Streaming markdown forces scroll to bottom** | 💬27 | 启用 `clear on shrink` 时，流式 Markdown 输出会强制滚动到底部，打断用户阅读。社区讨论最活跃，已有 PR 尝试修复。[链接](https://github.com/earendil-works/pi/issues/5825) |
| 2 | **[#5653] Move off Shrinkwrap** | 💬14 | 同时安装 `pi-ai` 和 `pi-coding-agent` 会导致两份 `pi-ai` 副本，Provider registry 因模块级 `Map` 而分裂。影响 monorepo 和 SDK 用户。[链接](https://github.com/earendil-works/pi/issues/5653) |
| 3 | **[#534] config folder is out of place on Linux** | 💬13 👍20 | Linux 下配置目录直接放在 `$HOME` 根目录，违反 XDG Base Directory 规范。获 20 个赞，社区期待已久。[链接](https://github.com/earendil-works/pi/issues/534) |
| 4 | **[#5916] Support provider extensions with model aliases and improve search** | 💬5 | 无 UI 配置 OpenRouter providers，用户手动编辑 `models.json` 时缺乏别名和搜索支持。[链接](https://github.com/earendil-works/pi/issues/5916) |
| 5 | **[#5858] align and use "instructions" field for openai-responses system prompt** | 💬5 | OpenAI Responses API 应将系统提示序列化到 `instructions` 字段而非 `system`/`developer`，已有配套 PR #5859。[链接](https://github.com/earendil-works/pi/issues/5858) |
| 6 | **[#5595] openai-completions maxTokens not passing through** | 💬5 👍1 | 使用 Together.ai 等 OpenAI completions Provider 时，reasoning 模型（如 DeepSeek v4pro）因 maxTokens 未透传而在完成前耗尽输出 token。[链接](https://github.com/earendil-works/pi/issues/5595) |
| 7 | **[#5804] Fast Sessions** | 💬2 👍1 | 社区讨论迁移到 SQLite 会话存储以提升加载/搜索速度，JSONL 仍为默认格式。涉及会话架构重大变更。[链接](https://github.com/earendil-works/pi/issues/5804) |
| 8 | **[#5810] RPC: expose session entries and tree** | 💬3 | 希望新增 `get_entries` 和 `get_tree` 两个只读 RPC 命令，支持外部工具（如 IDE 插件）驱动 Pi。[链接](https://github.com/earendil-works/pi/issues/5810) |
| 9 | **[#5921] Pi creates toolResult for empty/malformed tool calls, causing 400 error spiral** | 💬3 | 模型生成空 `name`/`id` 的 tool call 时，Pi 仍创建 `toolResult`，污染对话并导致后续 API 调用持续 400。[链接](https://github.com/earendil-works/pi/issues/5921) |
| 10 | **[#5920] UI freezes on Thinking…/Working… — response completes but never renders** | 💬2 | TUI 在响应完成后冻结在 "Thinking..." 状态，直到用户按键才显示内容。影响用户体验。[链接](https://github.com/earendil-works/pi/issues/5920) |

---

## 4. 重要 PR 进展（Top 10）

今日仅有 **3 条 PR** 在过去 24 小时内更新，全部列出：

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | **[#5859] fix(ai): send responses prompts as instructions** | 🟢 OPEN | 将 `context.systemPrompt` 通过共享 Responses `instructions` 处理，保持 `input` 仅用于对话和 tool replay。对应 Issue #5858。[链接](https://github.com/earendil-works/pi/pull/5859) |
| 2 | **[#5913] Stable markdown working** | 🔴 CLOSED | 作者 xl0 提交的流式 Markdown 渲染稳定性修复，参考 #5825。[链接](https://github.com/earendil-works/pi/pull/5913) |
| 3 | **[#5846] fix(tui): stabilize streaming code fence rendering** | 🔴 CLOSED | 修复流式 code fence 渲染问题，关闭 #5825。[链接](https://github.com/earendil-works/pi/pull/5846) |

> **说明**：今日 PR 数量较少，但 Issue 讨论活跃。多个 Issue 已有社区成员表示准备提交 PR（如 #3870、#5770）。

---

## 5. 功能需求趋势

从今日 34 条 Issue 更新中，提炼出以下 **5 大功能方向**：

### 🔹 1. TUI 渲染与交互稳定性（最高频）
- 流式 Markdown 强制滚动 [#5825]
- UI 冻结在 "Thinking..." 状态 [#5920]
- 二进制文件控制码导致 TUI 崩溃 [#5910]
- UTF-8 多字节字符被截断 [#5919]

### 🔹 2. 会话管理与性能
- 迁移到 SQLite 存储以提升加载速度 [#5804]
- 同目录会话切换时避免重复加载扩展 [#5905]
- 快速切换 thinking level 导致 session 文件膨胀 [#5909]
- RPC 暴露会话条目和树结构 [#5810]

### 🔹 3. 多模型 Provider 扩展
- 支持 Neuralwatt Provider [#5914]
- Fireworks GLM-5.2 模型元数据 [#5923]
- OpenRouter provider 别名和搜索 [#5916]
- GLM-5.2 effort level 配置 [#5770]

### 🔹 4. Thinking / Reasoning 控制
- Chat-template thinking 兼容（v0.79.9 已发布）
- llama.cpp llama-server 未设置 thinking 级别 [#5917]
- OpenAI Responses API 使用 `instructions` 字段 [#5858]

### 🔹 5. 工具与 SDK 增强
- bash 工具 `cwd` 参数被静默丢弃 [#5904]
- `setActiveTools` 无法隐藏内置 `read` 工具 [#5907]
- 持久化 HITL（Human-in-the-Loop）工具调用中断 [#5901]
- 扩展上下文暴露会话切换能力 [#5912]

---

## 6. 开发者关注点

### ⚠️ 高频痛点

| 痛点 | 影响范围 | 典型 Issue |
|------|----------|------------|
| **TUI 流式渲染不稳定** | 所有 TUI 用户 | #5825, #5920, #5910, #5919 |
| **Provider 模块重复加载** | SDK / monorepo 用户 | #5653 |
| **会话文件膨胀与加载慢** | 重度用户 | #5804, #5909 |
| **Linux 配置目录不规范** | Linux 用户 | #534 (👍20) |
| **工具调用边界情况处理** | 所有用户 | #5921, #5904, #5907 |

### 💡 社区期待

1. **SQLite 会话存储**：社区对迁移到 SQLite 有明确共识，期待架构落地。
2. **Provider 配置 UI**：当前依赖手动编辑 `models.json`，社区希望有可视化配置界面。
3. **扩展 API 增强**：RPC 命令和扩展上下文能力是外部集成（IDE、Telegram 等）的关键需求。
4. **多模型 Thinking 统一**：随着 DeepSeek、GLM-5.2、Qwen 等模型推出，统一的 thinking 控制层成为刚需。

---

> **日报生成时间**：2026-06-21  
> **数据来源**：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)  
> **下期预告**：关注 #5859 PR 合并进展及 #5825 流式渲染修复效果

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-21

---

## 1. 今日速览

今日 Qwen Code 发布了 **v0.18.4** 正式版及预览版，核心修复了 `sed` 编辑追踪等问题。社区贡献非常活跃：PR 方面涌现了语音输入、Requesty 新 Provider、git 分支读取性能优化等重要贡献；Issue 方面则集中暴露了大量**大小写敏感导致 URL 解析异常**的边界 bug，以及多处 `parseInt` 导致的参数校验不严问题，反映出项目在快速迭代中对输入健壮性的关注正在加强。

---

## 2. 版本发布

### v0.18.4（正式版 + preview.0）

- **fix(core)**: Track supported sed edits in file history — 修复 `sed` 编辑操作在文件历史中的追踪问题（[@doudouOUC](https://github.com/QwenLM/qwen-code/pull/5255)）

> 两个 release 内容一致，preview.0 先行测试后正式发布。

---

## 3. 社区热点 Issues

以下 10 个 Issue 代表了今日社区讨论的核心议题：

### 🔴 安全相关

| # | 标题 | 评论 | 要点 |
|---|------|------|------|
| #5444 | [@file temp directory exception matches sibling path prefixes](https://github.com/QwenLM/qwen-code/issues/5444) | 5 | `@file` 的 temp 目录前缀匹配可被兄弟路径绕过，存在越权读取风险 |
| #5455 | [Custom theme home check matches sibling path prefixes](https://github.com/QwenLM/qwen-code/issues/5455) | 4 | 自定义主题加载时 home 目录检查同样存在前缀匹配绕过问题 |
| #5506 | [Desktop session plan path helper accepts sibling plan directories](https://github.com/QwenLM/qwen-code/issues/5506) | 3 | 桌面端 session plan 路径校验不严，兄弟目录可被接受 |

### 🟡 大小写敏感 URL 解析（高频共性问题）

| # | 标题 | 评论 | 要点 |
|---|------|------|------|
| #5442 | [Qwen OAuth endpoint normalization prefixes uppercase URL schemes](https://github.com/QwenLM/qwen-code/issues/5442) | 6 | OAuth endpoint 检查 `startsWith('http')` 大小写敏感，`HTTPS://` 被错误添加协议前缀 |
| #5462 | [Uppercase absolute favicon URLs are treated as relative](https://github.com/QwenLM/qwen-code/issues/5462) | 5 | HTML favicon 解析中 `HTTPS://` 被当作相对路径处理 |
| #5469 | [Uppercase desktop icon URL schemes are ignored](https://github.com/QwenLM/qwen-code/issues/5469) | 4 | 桌面端图标 URL 方案检查同样大小写敏感 |
| #5436 | [Npm extension registry fetch misroutes uppercase HTTPS URLs](https://github.com/QwenLM/qwen-code/issues/5436) | 4 | npm 扩展注册表中 `HTTPS://` 被路由到 HTTP 客户端 |
| #5451 | [HTTP marketplace sources use the HTTPS client](https://github.com/QwenLM/qwen-code/issues/5451) | 5 | marketplace 配置中 HTTP URL 被强制走 HTTPS 请求导致失败 |

### 🟢 功能请求 & 回归

| # | 标题 | 评论 | 要点 |
|---|------|------|------|
| #5472 | [Restore real-time full-pane thinking streaming](https://github.com/QwenLM/qwen-code/issues/5472) | 5 👍1 | 用户请求恢复 v0.18.2 中 thinking 内容的实时流式展示，是当前唯一获得社区点赞的 feature request |

---

## 4. 重要 PR 进展

### 🆕 新功能

| # | 标题 | 作者 | 要点 |
|---|------|------|------|
| [#5502](https://github.com/QwenLM/qwen-code/pull/5502) | feat(voice): voice dictation with native capture, streaming, and biasing | @qqqys | 新增语音听写功能，支持 hold/tap 模式切换、流式转录、自定义转录模型选择，是社区贡献的重要交互增强 |
| [#5478](https://github.com/QwenLM/qwen-code/pull/5478) | feat(core): add Requesty provider | @Thibaultjaigu | 新增 Requesty 作为一等模型提供商，扩展了模型网关生态 |
| [#5539](https://github.com/QwenLM/qwen-code/pull/5539) | refactor(core): replace OpenRouter/Requesty provider classes with customHeaders in preset | @pomelo-nwu | 重构 OpenRouter/Requesty Provider 类，改为通过 `customHeaders` 字段在 preset 中声明归属头，简化架构 |

### ⚡ 性能优化

| # | 标题 | 作者 | 要点 |
|---|------|------|------|
| [#5432](https://github.com/QwenLM/qwen-code/pull/5432) | perf(core): read current git branch directly from .git instead of spawning git | @wenshao | 将 CLI 状态行获取 git 分支的方式从 `git rev-parse` 子进程改为直接读取 `.git/HEAD`，显著减少进程创建开销 |

### 🔧 重要 Bug 修复

| # | 标题 | 作者 | 要点 |
|---|------|------|------|
| [#5473](https://github.com/QwenLM/qwen-code/pull/5473) | fix(cli): handle truncated remote input files | @tt-a1i | 修复远程输入文件被截断重写后命令被忽略的问题 |
| [#5494](https://github.com/QwenLM/qwen-code/pull/5494) | fix(core): don't treat an empty-parts message as a function call/response | @he-yufeng | 修复 `[].every(...)` 对空数组返回 true 导致空消息被误判为函数调用的隐蔽 bug |
| [#5461](https://github.com/QwenLM/qwen-code/pull/5461) | fix(extension): accept uppercase URL schemes in Claude plugin sources | @he-yufeng | 修复 Claude 插件转换中 URL 方案检查大小写敏感问题 |
| [#5511](https://github.com/QwenLM/qwen-code/pull/5511) | fix(desktop): validate generic OAuth token responses | @tt-a1i | 修复 OAuth token 响应缺少 `access_token` 时未报错的问题 |
| [#5509](https://github.com/QwenLM/qwen-code/pull/5509) | fix(desktop): parse server ports strictly | @tt-a1i | 引入严格端口校验辅助函数，防止非法端口值传入服务器启动流程 |

---

## 5. 功能需求趋势

从今日 50 个 Issue 中提炼出以下关注方向：

1. **输入健壮性（最高频）** — 大量 Issue 集中在 URL 大小写敏感、`parseInt` 部分解析、路径前缀匹配缺少边界检查等，说明项目在快速扩展功能的同时，输入校验层面存在系统性短板，社区贡献者（尤其 @tt-a1i）正集中排查修复。

2. **桌面端体验完善** — Windows 路径扩展、滚动条可见性、locale 一致性、OAuth 校验等桌面端特有问题的修复 PR 持续涌现，桌面端正处于密集打磨阶段。

3. **新 Provider / 模型生态** — Requesty 作为新 Provider 加入，OpenRouter/Requesty 的架构重构正在进行，社区对模型网关生态的扩展有持续需求。

4. **语音交互** — PR #5502 引入语音听写功能，代表了社区对多模态交互方向的探索。

5. **Thinking 流式展示** — Issue #5472 是今日唯一获得 👍 的 feature request，用户对推理过程实时可见性有明确期待。

---

## 6. 开发者关注点

- **"静默接受错误值"是最大痛点**：`parseInt` 导致 `2abc` 被接受为 `2`、`Number()` 导致 `1.5` 端口被接受等模式反复出现（#5485, #5490, #5495, #5492, #5474, #5479），开发者期望对 malformed 输入严格拒绝而非静默降级。

- **路径/URL 校验缺乏统一工具函数**：多处独立实现 `startsWith` 前缀检查，导致同样的边界漏洞在 OAuth、主题加载、文件操作、session 管理等多处重复出现。社区隐含期待是抽取统一的安全校验工具。

- **跨平台兼容性持续受关注**：Windows 路径处理（#5245）、大小写敏感问题在 Unix/Windows 混合环境下表现不同，桌面端贡献者对此类问题高度敏感。

- **测试覆盖恢复**：多个 PR（#5273, #5275, #5277）重新启用之前跳过的测试用例，说明项目在重构过程中测试债务有所积累，正在逐步偿还。

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 日报生成时间：2026-06-21*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-06-21

---

## 1. 今日速览

过去 24 小时内，DeepSeek TUI（CodeWhale）社区活跃度较高，**无新版本发布**。Issues 和 PR 的核心焦点集中在三个方面：**大规模代码库重构**（Hmbown 连续提出 8 个 Rust 单体拆分 issue）、**v0.8.63 发布列车集成**（PR #3347 正在合并多个工作流），以及**子代理（sub-agent）可靠性与 Token 预算管控**。此外，TUI 冻结/无响应的 bug 仍是社区最高频的痛点。

---

## 2. 版本发布

过去 24 小时内无新 Release。当前主线围绕 **v0.8.63** 的集成与修复推进中（参见 PR #3347）。

---

## 3. 社区热点 Issues

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|-----------|---------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | **Turn stalled - no completion signal received** | yolo 模式下频繁卡死，`continue` 无法恢复，是影响日常使用的严重可靠性问题 | 17 条评论，1 👍，持续近 3 周未解决 |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | **TUI freeze on Windows (crossterm poll)** | Windows 11 下 TUI 间歇性完全无响应，进程存活但 UI 冻结，有日志和线程分析 | 8 条评论，跨平台兼容性核心痛点 |
| [#3275](https://github.com/Hmbown/CodeWhale/issues/3275) | **CodeWhale 过度自主修改，偏离用户意图** | Agent 进入自问自答循环，超出用户请求范围执行写入操作，是安全/可靠性回归 | 7 条评论，已催生 #3315 安全修复 |
| [#3289](https://github.com/Hmbown/CodeWhale/issues/3289) | **v0.8.61 UI freeze after auto spawn several agents** | 计划模式下自动派生多个 agent 后 UI 冻结，子代理并发触发 TUI 稳定性问题 | 5 条评论 |
| [#3315](https://github.com/Hmbown/CodeWhale/issues/3315) ✅已关闭 | **Enforce real user-input provenance for write/continue approvals** | 针对 #3275 的安全修复：防止 agent 伪造用户审批文本作为写入授权 | 3 条评论，已关闭 |
| [#2608](https://github.com/Hmbown/CodeWhale/issues/2608) | **Refactor: extract provider registry from ballooning config files** | config 文件膨胀至 4700+ 行和 9400+ 行，每新增 provider 需修改 15-30 处 match 分支 | 4 条评论，架构债务核心 issue |
| [#3222](https://github.com/Hmbown/CodeWhale/issues/3222) | **Add reasoning_style override for inline-tag thinking blocks** | MiniMax M3、Qwen、GLM 等模型的推理内容解析损坏，影响多模型支持 | 4 条评论 |
| [#3303](https://github.com/Hmbown/CodeWhale/issues/3303) | **Make documented config keys editable from the TUI** | 用户无法在 TUI 中发现、编辑和持久化配置项，重要运行时行为感觉是硬编码的 | 3 条评论 |
| [#3314](https://github.com/Hmbown/CodeWhale/issues/3314) | **Extract App god object state into owned submodules** | `app.rs` 约 150 个字段 + 数千行方法，典型的上帝对象，阻碍可维护性 | 2 条评论，重构系列 |
| [#3259](https://github.com/Hmbown/CodeWhale/issues/3259) | **app-server: clean up delegated serve child when dispatcher exits** | dispatcher 退出后遗留子进程，资源泄漏 | 2 条评论，已对应 PR #3317 |

---

## 4. 重要 PR 进展

| # | 标题 | 功能/修复内容 | 状态 |
|---|------|-------------|------|
| [#3347](https://github.com/Hmbown/CodeWhale/pull/3347) | **v0.8.63 release train: subagent budgets, command extraction, reliability, deps** | 集成列车：合并 v0.8.63 所有工作流（子代理预算、命令提取、可靠性修复、依赖更新），共 29 个提交 | 🟢 OPEN |
| [#3321](https://github.com/Hmbown/CodeWhale/pull/3321) | **fix(workflow): add token budget regulator for high fan-out agent runs** | 为高扇出工作流/子代理编排添加 Token 预算调节器，填补协议层与运行时执行间的强制缺口 | 🟢 OPEN |
| [#3330](https://github.com/Hmbown/CodeWhale/pull/3330) | **Layer 4: replay FEAT-005 command extraction onto main** | 将 FEAT-005 命令提取层回放到当前命令架构，目标分支 main | 🟢 OPEN |
| [#3317](https://github.com/Hmbown/CodeWhale/pull/3317) | **fix(cli): tear down delegated serve/app-server child on dispatcher exit** | 修复 dispatcher 终止时未清理委托子进程的问题（对应 #3259） | 🟢 OPEN |
| [#3350](https://github.com/Hmbown/CodeWhale/pull/3350) | **feat: add /model pro\|flash shortcuts and CLI model set command** | 新增 `pro`/`flash` 模型别名和 `codewhale model set` CLI 子命令，支持 deepseek-v4-pro/flash | 🟢 OPEN |
| [#3300](https://github.com/Hmbown/CodeWhale/pull/3300) | **feat(tui): preserve thinking/tool blocks when seeding thread from session** | 从会话加载线程时保留 Thinking/ToolUse/ToolResult 块类型，而非仅文本 | 🟢 OPEN |
| [#3302](https://github.com/Hmbown/CodeWhale/pull/3302) | **fix(tui): keep onboarding marker in codewhale home** | 修复新安装的 onboarding 标记路径（`~/.codewhale/.onboarded`），兼容旧版 `~/.deepseek` | 🟢 OPEN |
| [#3348](https://github.com/Hmbown/CodeWhale/pull/3348) | **fix(release): harden branch hygiene checks** | 加固发布分支检查，支持 fork checkout 检查 upstream 发布引用 | 🟢 OPEN |
| [#3346](https://github.com/Hmbown/CodeWhale/pull/3346) | **style(clippy): fix clippy warnings** | 修复 clippy 警告，使用 `const _: () = assert!` 模式 | 🟢 OPEN |
| [#3349](https://github.com/Hmbown/CodeWhale/pull/3349) ✅已关闭 | **feat(gui): add DeepSeek GUI with layout fixes and CI packaging** | 新增 Tauri 桌面 GUI 应用（161 文件），修复 Composer 点击和三栏布局，添加 Windows NSIS + macOS DMG CI 打包 | 🔴 CLOSED |

---

## 5. 功能需求趋势

从过去 24 小时更新的 30 个 Issues 和 14 个 PR 中，可提炼出以下社区最关注的方向：

### 🔴 可靠性与稳定性（最高频）
- **TUI 冻结/卡死**：Windows crossterm 轮询冻结（#1812）、yolo 模式 Turn stalled（#2487）、多 agent 派生后 UI 冻结（#3289）——这是社区反馈最多的痛点
- **子代理可靠性**：Token 预算管控（#3319）、高扇出队列调度（#3318）、递归/并发控制暴露（#3304）、子代理开关（#3305）

### 🟡 代码架构重构
- Hmbown 连续提出 **8 个重构 issue**（#3306-#3314），系统性地拆分 Rust 单体文件：config 模块、runtime_api、mcp.rs、ui.rs 事件循环、history 渲染器、RuntimeThreadManager、App 上帝对象
- Provider 注册表提取（#2608），解决 config 文件膨胀问题

### 🟢 安全与权限控制
- 用户输入溯源验证（#3315），防止 agent 伪造审批
- app-server 非回环绑定安全加固（#3258）
- Agent 过度自主行为控制（#3275）

### 🔵 多模型支持
- reasoning_style 覆盖（#3222）：MiniMax M3、Qwen、GLM 推理块解析
- 模型别名快捷方式（PR #3350）：pro/flash 快捷切换

### 🟣 开发者体验
- TUI 内配置编辑（#3303）
- 会话加载时保留 thinking/tool 块（PR #3300）
- GUI 桌面客户端（PR #3349）

---

## 6. 开发者关注点总结

| 痛点/需求 | 典型表现 | 优先级 |
|-----------|---------|--------|
| **TUI 冻结无响应** | Windows 下 crossterm 冻结、yolo 模式卡死、多 agent 后 UI 锁死，`continue` 无法恢复 | 🔴 P0 |
| **Agent 行为不可控** | 过度自主修改、自问自答循环、伪造用户审批、偏离用户意图 | 🔴 P0 |
| **子代理资源管控缺失** | 高扇出场景 Token 消耗失控（20 个 agent 9 秒烧 174k tokens）、无预算调节器 | 🟠 P1 |
| **代码库可维护性差** | config.rs 9400 行、app.rs 150 字段上帝对象、新增 provider 需改 30 处 | 🟠 P1 |
| **配置可发现性差** | 用户无法在 TUI 中编辑和持久化配置项 | 🟡 P2 |
| **多模型兼容性** | 部分模型推理块解析损坏、DSML 调用被当普通文本输出 | 🟡 P2 |
| **跨平台一致性** | Windows 代理配置不生效（#3273）、glibc 版本不匹配（#3238） | 🟡 P2 |

> **总结**：当前社区处于 **v0.8.63 发布收尾 + 大规模架构重构启动** 的关键节点。可靠性（TUI 冻结、Agent 行为）是用户最痛的点，而 Hmbown 团队正系统性地推进 Rust 代码库拆分。子代理的 Token 预算管控和队列调度是下一个可靠性攻坚方向。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*