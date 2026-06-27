# AI CLI 工具社区动态日报 2026-06-27

> 生成时间: 2026-06-27 00:38 UTC | 覆盖工具: 9 个

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

**日期：2026-06-27 | 数据来源：各工具 GitHub 仓库**

---

## 1. 生态全景

2026 年 6 月，AI CLI 工具生态进入**高密度竞争与差异化深耕**阶段。整体呈现三个特征：

- **计费与模型可用性成为用户留存核心议题**——Claude Code 和 OpenAI Codex 同时爆发大规模 token 消耗异常投诉，说明 AI CLI 的"按量计费"模式在透明度上远未成熟，用户信任极其脆弱。
- **Agent 可靠性成为技术竞争焦点**——Subagent 状态不一致（Gemini CLI）、无限循环消耗资源（OpenCode）、请求卡死（OpenCode/Qwen Code）等问题的集中爆发，标志着行业从"能跑"向"跑得可靠"阶段过渡。
- **跨平台兼容性和企业集成能力拉开差距**——Windows 平台体验在几乎所有工具中均存在系统性短板，而 MCP 协议、ACP 协议、OAuth 等企业级能力正在成为头部工具的"护城河"。

---

## 2. 各工具活跃度对比

| 工具 | Issues 活跃度 | PR 活跃度 | 今日 Release | 核心议题 |
|------|:---:|:---:|:---:|------|
| **Claude Code** | ★★★★★ | ★★☆☆☆ | v2.1.195 | 计费信任危机、1M 上下文退化 |
| **OpenAI Codex** | ★★★★★ | ★★★★★ | 0.143.0-alpha.26 | gpt-5.5 计费异常、rollout 重构 |
| **Gemini CLI** | ★★★★☆ | ★★★★☆ | v0.51.0-nightly | Agent 可靠性、安全加固 |
| **GitHub Copilot CLI** | ★★★★☆ | ★☆☆☆☆ | v1.0.66-0 / v1.0.66-1 | Memory 隔离、跨平台 UX |
| **Kimi Code CLI** | ★★☆☆☆ | ★★☆☆☆ | 无 | Plan Mode 状态机缺陷 |
| **OpenCode** | ★★★★★ | ★★★★★ | 无 | 请求卡死、compaction 异常 |
| **Pi** | ★★★☆☆ | ★★★★☆ | 无 | TUI 渲染、嵌入式库场景 |
| **Qwen Code** | ★★★★★ | ★★★★★ | cua-driver-rs v0.6.8 | Mode B 生产化、进程泄漏 |
| **DeepSeek TUI** | ★★★★☆ | ★★★★★ | 无 | 权限系统、Provider 扩展 |

> **注**：Issues 和 PR 活跃度为基于各仓库 24 小时内活跃数量的相对评级（★ 代表约 10 条增量）。

---

## 3. 共同关注的功能方向

### 3.1 💰 计费透明度与用量控制（Claude Code、OpenAI Codex）

| 工具 | 具体表现 | 社区烈度 |
|------|---------|---------|
| Claude Code | Max 订阅用量瞬间耗尽（#16157，👍691）、session 限制异常耗尽（#38335，👍468） | 合计 1157+ 👍，2262+ 💬 |
| OpenAI Codex | gpt-5.5 单 token 成本暴涨 10-20×（#28879，👍326）、5 小时额度 1 小时耗尽（#30212） | 900+ 💬 |

**共同诉求**：实时用量面板、per-token 计费日志、消耗速率预警、spending cap 设置。

### 3.2 🤖 Agent 可靠性与状态可观测性（Gemini CLI、OpenCode、Qwen Code）

| 工具 | 核心问题 |
|------|---------|
| Gemini CLI | Subagent 达到 MAX_TURNS 后报告"成功"（#22323）、Generalist agent 无限挂起（#21409，👍8） |
| OpenCode | 请求处理卡死无响应（#32149）、无限 compaction 循环（#31152） |
| Qwen Code | Windows PowerShell 泄漏至 OOM（#5873）、Linux 僵尸子进程未回收（#5083） |

**共同诉求**：Agent 状态准确反馈、递归深度限制、进程生命周期管理、执行超时保护。

### 3.3 🔌 MCP 协议与企业集成（Claude Code、OpenAI Codex、GitHub Copilot CLI、OpenCode）

| 工具 | 进展 |
|------|------|
| Claude Code | Hook matcher 精确匹配修复、沙箱 SOCKS5 代理支持 |
| OpenAI Codex | MCP OAuth 并发安全加固（6 个连续 PR）、远程插件默认启用 |
| Copilot CLI | MCP OAuth 自动恢复、MCP Server 启用/禁用开关 |
| OpenCode | MCP refresh token scope 修复 |

**共同诉求**：OAuth 生命周期管理、多 MCP Server 隔离、企业代理兼容。

### 3.4 🖥 Windows 平台体验（全工具）

| 工具 | Windows 特有问题 |
|------|-----------------|
| Claude Code | OAuth 凭据未写入、CERT_HAS_EXPIRED |
| OpenAI Codex | 插件反复丢失、SIGTRAP 崩溃 |
| Copilot CLI | 剪贴板快捷键失灵 |
| Qwen Code | PowerShell 进程泄漏至 OOM |
| OpenCode | 升级后无法启动 |

**共同诉求**：Windows 不再是二等公民——这已经是所有工具的待补债务。

### 3.5 🔒 安全与权限控制（Gemini CLI、DeepSeek TUI、Qwen Code）

| 工具 | 安全议题 |
|------|---------|
| Gemini CLI | Auto Memory 确定性脱敏、路径黑名单绕过、OAuth CVE 补丁 |
| DeepSeek TUI | execpolicy 持久权限规则、permissions.toml deny/allow/ask |
| Qwen Code | 路径穿越漏洞、负值参数绕过 |

**共同诉求**：工具执行的安全边界需要从"软约束"走向"硬策略"。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 全功能 AI 编程助手，深度集成 Anthropic 生态 | 个人开发者、Max 订阅用户 | TypeScript/Node.js 栈，Hook 系统 + Skills 生态，强调交互体验 |
| **OpenAI Codex** | 开源优先的 Agent CLI，强调协议合规 | 企业用户、自托管开发者 | Rust 实现，rollout 持久化层，ACP/MCP 双协议支持 |
| **Gemini CLI** | Google AI 官方 CLI，安全加固为特色 | Google Cloud 生态用户 | TypeScript，Caretaker Agent 体系，behavioral eval 驱动开发 |
| **GitHub Copilot CLI** | GitHub 生态内嵌的 AI CLI，强调企业治理 | GitHub Enterprise 用户 | 深度集成 GitHub 平台，Subagent 并发/深度控制，Skills Review 流程 |
| **Kimi Code CLI** | 月之暗面的轻量 AI CLI，快速追赶 | 国内个人开发者 | 体量较小，聚焦 Plan Mode 等核心交互 |
| **OpenCode** | 多 Provider 兼容的 TUI-first CLI | 多模型用户、开发者 | Go + TUI，强调 Provider 可插拔，TanStack Virtual 渲染 |
| **Pi** | 可嵌入的 AI Agent 框架/CLI | 开发者（库消费场景） | TypeScript，支持嵌入式使用，orchestrator 实验包 |
| **Qwen Code** | 通义千问的全栈 AI CLI，Mode B 差异化 | 国内企业、阿里云生态 | Rust/TypeScript 混合，qwen serve daemon 模式，多通道集成 |
| **DeepSeek TUI** | 社区驱动的 DeepSeek 生态 TUI | 开源社区贡献者 | Rust，权限系统 + Provider 扩展为核心，Telegram Bridge 生产化 |

---

## 5. 社区热度与成熟度

### 🔥 高热度 + 高成熟度（已进入"用户信任维护"阶段）

- **Claude Code**：社区规模最大，但当前最大风险是计费信任危机。技术成熟度高，用户期望也高。
- **OpenAI Codex**：PR 活跃度最高，技术债务清理积极（rollout 重构、MCP OAuth 加固），但 gpt-5.5 计费问题可能抵消技术好感。

### 🔥 高热度 + 快速迭代（正处于"能力补全"阶段）

- **Gemini CLI**：安全加固和 Agent 可靠性双线并进，P1 Bug 修复节奏快。社区 👍 集中在 Agent 挂起问题。
- **Qwen Code**：Issue/PR 双高，Mode B 生产化和多通道集成是差异化亮点。Windows 体验是短板。
- **OpenCode**：自动化批量处理 50+ Issue/PR，说明积压严重。核心稳定性（卡死、compaction）仍需根治。

### 🟡 中等热度 + 稳步建设

- **GitHub Copilot CLI**：版本发布频繁（v1.0.66-0/1），功能扩展积极，但 PR 活跃度极低，可能依赖内部闭源开发。
- **Pi**：社区讨论量适中，但嵌入式库场景和 orchestrator 实验包暗示其在"库化"方向的差异化潜力。
- **DeepSeek TUI**：PR 活跃度高，权限系统和 Provider 扩展是社区驱动的典型代表。

### 🟢 低热度 + 早期阶段

- **Kimi Code CLI**：Issue/PR 体量最小，Plan Mode 状态机缺陷暴露了核心交互逻辑的成熟度不足。

---

## 6. 值得关注的趋势信号

### 📌 信号一：计费透明度正在成为用户留存的分水岭

Claude Code 和 OpenAI Codex 同时在爆发大规模计费投诉，且社区情绪已从"质疑"升级为"信任危机"。**对开发者而言**：在选择 AI CLI 工具时，不仅要看模型能力，更要评估用量计量系统的可靠性。**对工具厂商而言**：实时用量面板和 spending cap 不再是"nice-to-have"，而是生存必需品。

### 📌 信号二：Agent 可靠性是下一阶段的技术制高点

从 Gemini CLI 的 Subagent 误报成功，到 OpenCode 的请求卡死，到 Qwen Code 的进程泄漏——**Agent 从"能跑"到"跑得可靠"之间的鸿沟正在被社区清晰地量化出来**。递归深度限制、进程生命周期管理、执行超时保护这三个能力将成为 Agent CLI 的标配。

### 📌 信号三：Windows 体验是全行业的系统性短板

9 个工具中，5 个存在 Windows 特有问题（凭据写入失败、证书错误、剪贴板失灵、进程泄漏、启动崩溃）。**Windows 用户作为全球最大的桌面开发者群体，其体验被系统性忽视**。这既是痛点，也是差异化竞争的机会。

### 📌 信号四：MCP/ACP 协议正在成为企业集成的"HTTP 时刻"

几乎所有头部工具都在推进 MCP OAuth 生命周期管理、ACP 协议合规、远程插件稳定化。**AI CLI 正在从"单体工具"演进为"协议节点"**，谁先完成企业级协议栈的可靠性建设，谁就能锁定企业用户。

### 📌 信号五：安全执行从"软约束"走向"硬策略"

Gemini CLI 的确定性脱敏、DeepSeek TUI 的 execpolicy 持久规则、Qwen Code 的路径穿越修复——**社区正在推动 AI CLI 从"依赖模型自律"走向"系统级安全策略"**。这对企业合规场景尤为关键。

### 📌 信号六："可嵌入化"是新赛道的萌芽

Pi 的嵌入式库场景问题、orchestrator 实验包，以及 Qwen Code 的 qwen serve daemon 模式，都在指向一个趋势：**AI CLI 正在从"终端工具"变为"可被其他软件调用的 AI 引擎"**。这一方向的成熟将打开 IDE 插件、CI/CD 流水线、自动化框架等大量集成场景。

---

*本报告基于 2026-06-27 各工具 GitHub 仓库公开数据生成，数据窗口为 24 小时。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-06-27 | 数据来源：github.com/anthropics/skills**

---

## 一、热门 Skills 排行

以下按社区互动热度（评论数、 upvotes、更新活跃度）综合排序：

### 1. `skill-creator` 评估引擎修复系列
**涉及 PR：** #1298、#1099、#1050、#1323 | **状态：** OPEN

`run_eval.py` 是整个 Skills 生态的核心质量门控——它通过模拟查询来评估 Skill 描述文本能否被正确召回，驱动描述自优化循环。但该脚本长期存在多个致命 bug：**召回率始终报 0%**、Windows 下子进程管道崩溃、触发检测逻辑跳过真正的 Skill 调用。当前社区正集中火力修复这一基础设施问题，单个 Issue #556 已积累 12 条评论、7 👍，10+ 用户独立复现了 bug。这是一个"修复修复工具的工具"的递归困境。

- [PR #1298](https://github.com/anthropics/skills/pull/1298) — eval 结果装为真实 Skill；修复 Windows 流式读取
- [PR #1323](https://github.com/anthropics/skills/pull/1323) — 触发检测遗漏真实 Skill 名称并提前终止
- [Issue #556](https://github.com/anthropics/skills/issues/556) — 根因Issue

---

### 2. `shodh-memory` — AI Agent 持久化记忆
**PR：** #154 | **状态：** OPEN

为 AI Agent 提供跨会话的持久化上下文能力。核心指令包括何时调用 `proactive_context`、如何结构化存储记忆内容。这是社区"状态管理"方向的代表提案，回应了 Agent 在长任务中频繁丢失上下文的核心痛点。

- [PR #154](https://github.com/anthropics/skills/pull/154)

---

### 3. `compact-memory` — 符号化紧凑 Agent 状态
**Issue：** #1329 | **状态：** OPEN（提案阶段）

WGlynn 提出的轻量级替代方案：用符号化记号替代冗长的自然语言 Agent 笔记，压缩上下文占用。可视为 `shodh-memory` 的极简主义变体，反映了社区对 **context window 效率** 的高度敏感。

- [Issue #1329](https://github.com/anthropics/skills/issues/1329)

---

### 4. `agent-governance` — AI Agent 安全治理 Skill
**Issue：** #412 | **状态：** CLOSED（仍有活跃讨论）

提案面向多 Agent 系统设计，覆盖策略执行、威胁检测、信任评分和审计追踪四大模块。尽管已关闭，6 条评论的讨论深度表明这是一个真实但未满足的需求缺口。与 Issue #492（信任边界安全）形成主题呼应。

- [Issue #412](https://github.com/anthropics/skills/issues/412)

---

### 5. `frontend-design` 改进
**PR：** #210 | **状态：** OPEN

对现有 frontend-design Skill 进行全面重写，目标是让每一条指令都是 Claude 可在单次对话中执行的原子操作。核心诉求：**消除模糊描述，提高行为确定性**。代表了"老牌 Skill 现代化改造"的社区潮流。

- [PR #210](https://github.com/anthropics/skills/pull/210)

---

### 6. `appdeploy` — 一键部署全栈 Web 应用
**PR：** #360 | **状态：** OPEN

集成 AppDeploy 平台，使 Claude 能将全栈 Web 应用直接部署到公开 URL，覆盖状态检查、版本管理等生命周期操作。是 **"从编码到部署"端到端自动化** 方向的标志性 Skill。

- [PR #360](https://github.com/anthropics/skills/pull/360)

---

### 7. `testing-patterns` — 测试模式全栈指南
**PR：** #723 | **状态：** OPEN

覆盖测试哲学（Testing Trophy 模型）、单元测试 AAA 模式、React 组件测试（Testing Library）、边缘案例策略等。填补了 Skills 生态在 **系统化测试方法论** 方面的空白。

- [PR #723](https://github.com/anthropics/skills/pull/723)

---

### 8. `document-typography` — AI 文档排版质量控制
**PR：** #514 | **状态：** OPEN

解决 AI 生成文档中的孤儿词换行、孤段标题错位、编号对齐等常见排版问题。作者指出"每个 Claude 生成的文档都受此影响"。虽是小切口，但切中了 **AI 输出质量感知** 的普遍痛点。

- [PR #514](https://github.com/anthropics/skills/pull/514)

---

## 二、社区需求趋势

从 Top 15 Issues 提炼的四大方向：

| 趋势 | 代表 Issue | 热度 | 核心诉求 |
|---|---|---|---|
| **安全与信任边界** | #492（社区 Skill 冒充 anthropic/ 官方命名空间） | 21 评论 / 2 👍 | 防止恶意社区 Skill 利用命名空间欺骗获取高权限；需要官方签名/审核机制 |
| **企业协作与共享** | #228（组织级 Skill 共享） | 14 评论 / 7 👍 | 替代"下载 .skill 文件 → Slack 发送 → 手动上传"的原始流程；诉求直接 |
| **skill-creator 质量基础设施** | #556、#1169（eval 引擎失效）、#202（tone 应面向 Claude 非人类） | 12+8 评论 | 当前 skill-creator 自己就是最大的 bug 源；社区要求优先修复评估工具链 |
| **跨平台兼容** | #1061（Windows 三大兼容性问题）、#29（AWS Bedrock 集成） | 3+4 评论 | Windows 原生运行 + 非 Anthropic 推理后端支持 |
| **Context Window 效率优化** | #1329（compact-memory）、#1175（SPO 文档安全处理的 token 成本） | 6+4 评论 | 长上下文经济性已成为生产部署的关键瓶颈 |

**关键发现**：安全（#492）以 21 条评论和 2 👍成为互动量最高的单一议题，企业共享（#228）则以 7 👍体现了更强的社区共识（低争议、高认同）。

---

## 三、高潜力待合并 Skills

以下 PR 互动活跃、指向明确，具备近期合并条件：

| PR | Skill | 潜力信号 | 阻碍因素 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval 修复 | 基础设施级；阻塞整个质量飞轮 | 涉及 Windows + 触发检测多维度修复，范围宽 |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML 前置校验 | 单文件改动，低风险；已修复静默截断 bug | 合并优先级被 eval 主 bug 掩盖 |
| [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 多字节修复 | Rust panic 防护；边界明确 | 需确认 Rust CLI 侧是否已修复 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 填补测试方向空白；内容完整 | 暂无明显阻碍 |
| [#210](https://github.com/anthropics/skills/pull/210) | frontend-design 改进 | 老牌 Skill 现代化；需求明确 | 需 reviewer 投入时间审阅全文重写 |
| [#360](https://github.com/anthropics/skills/pull/360) | appdeploy | 端到端自动化场景吸引力强 | 依赖第三方平台 API 稳定性 |

**最可能近期合并的**：#539（YAML 校验，小范围高确定性）、#723（testing-patterns，无依赖新 Skill）。

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求：在安全可信的前提下，实现 Skill 工具链（尤其是 skill-creator 评估引擎）的可靠性修复与质量提升——因为如果质量门控本身失效，所有 Skill 的优化循环都在基于噪声运行。**

同时，两个次主线清晰可辨：
1. **Agent 状态持久化**（shodh-memory、compact-memory 双提案角力）——长上下文管理正成为 Skills 的核心战场；
2. **企业采用加速**（组织共享、Bedrock 集成、SPO 合规）——从个人生产力工具向团队协作基础设施演进。

---

*报告生成日期：2026-06-27 | 数据来源：anthropics/skills 仓库 Issues/PRs 按评论数排行 Top 50*

---

# Claude Code 社区动态日报 — 2026-06-27

---

## 📰 今日速览

本日最大热点是 **Release v2.1.195** 发布，引入了鼠标交互禁用开关并修复了 hook 匹配的精确匹配问题。社区同时涌现大量关于 **Max 订阅用量异常快速耗尽**（#16157, #38335）和 **Opus 4.8 1M 上下文窗口在 Desktop 端消失** 的集中反馈，反映出计费与模型可用性是当前最敏感的两大议题。

---

## 🚀 版本发布

### v2.1.195

> [v2.1.195 · GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

本次更新包含两项关键变更：

| 类型 | 变更内容 | 说明 |
|------|---------|------|
| 🆕 Feature | `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 环境变量 | 在全屏模式下禁用鼠标点击/拖拽/悬停，同时保留滚轮滚动功能。适用于不希望 CLI 响应鼠标事件的终端工作流 |
| 🐛 Fix | Hook matcher 精确匹配修复 | 此前带连字符的 identifier（如 `code-reviewer`、`mcp__brave-search`）会意外发生子串匹配；现已改为精确匹配，避免 hook 误触发 |

---

## 🔥 社区热点 Issues（Top 10）

### 1. Max 订阅用量瞬间耗尽 — Issue #16157

[Issue #16157](https://github.com/anthropics/claude-code/issues/16157) | 👍 691 / 💬 1476

用户反馈 Max 订阅用量在极短时间内被消耗殆尽。**这是本周最高赞、最高评论数的问题**，反映出大量付费用户对计费可靠性存在严重担忧。社区情绪高度集中在"用量不透明"和"消耗速度不符合预期"两大痛点。该 Issue 自 2026 年 1 月创建以来持续活跃。

---

### 2. Max 计划 session 限制自 3 月 23 日起异常快速耗尽 — Issue #38335

[Issue #38335](https://github.com/anthropics/claude-code/issues/38335) | 👍 468 / 💬 786

与 #16157 互补的另一个高关注度 Issue，用户明确标注时间节点为 3 月 23 日，疑似与某次后端变更相关。评论区充斥着 CLI 用户的大量复现报告。**这个问题和 #16157 合并构成社区当前最重要的按量计费信任危机。**

---

### 3. Opus 4.8 1M 上下文选项在模型选择器中消失 — Issue #68287

[Issue #68287](https://github.com/anthropics/claude-code/issues/68287) | 👍 1 / 💬 6

Max 计划用户报告 Opus 4.8 在模型选择器中仅显示 256K 上下文，1M 选项消失。多名 Windows 用户复现（相关 Issue #36351、#69109 同日更新），**暗示这可能是一次有意的功能降级或模型路由变更**，需要 Anthropic 官方给出解释。

---

### 4. Desktop 应用失去第三方推理提供商 1M 上下文变体选择能力 — Issue #69444

[Issue #69444](https://github.com/anthropics/claude-code/issues/69444) | 👍 1 / 💬 6

Desktop 端的第三方推理（如 Bedrock）1M 上下文模型选项丢失，标记为 **regression**（回归 bug）。这一问题与 #68287 共同指向上下文窗口可用性的多平台退化。

---

### 5. Cowork 在 Windows ARM64 上无法运行 — Issue #50674

[Issue #50674](https://github.com/anthropics/claude-code/issues/50674) | 👍 0 / 💬 30

Cowork 功能在 Snapdragon X（ARM64）设备上即使通过 readiness check 仍然无法使用。30 条讨论反映出 Windows on ARM 用户的持续被忽视感，对 Qualcomm 平台生态兼容性诉求强烈。

---

### 6. 沙箱 SOCKS5 代理需认证导致 SSH Git 操作失败 — Issue #70684

[Issue #70684](https://github.com/anthropics/claude-code/issues/70684) | 👍 12 / 💬 3

沙箱模式启用了 `sandbox.network.allowedDomains` 后，由于 BSD `nc` 不支持 SOCKS5 认证协商，SSH 通道建立失败，导致 `git clone/push` 等企业级工作流中断。**12 个赞说明该问题影响面虽小但程度严重**，涉及企业网络代理环境。

---

### 7. OAuth 登录成功但 Windows 端 `.credentials.json` 未写入 — Issue #71717

[Issue #71717](https://github.com/anthropics/claude-code/issues/71717) | 👍 0 / 💬 2

Windows 用户报告 OAuth 流程完成后凭据文件从未写入，导致无限 401 循环。同日还有 #71708 报告 Windows 端 `CERT_HAS_EXPIRED` 错误。**Windows 平台认证链连续出现两个高影响 bug，建议 Windows 用户关注。**

---

### 8. 支持标准 `.github/skills/` 目录 — Issue #16345

[Issue #16345](https://github.com/anthropics/claude-code/issues/16345) | 👍 32 / 💬 18

社区请求让 Claude Code 支持与 `agentskills.io` 对齐的 `.github/skills/` 标准目录。32 个赞表明 **agent 技能（skills）的路径标准化是社区长期诉求**，与 Anthropic 生态内其他 Playground 行为保持一致。

---

### 9. Session URL 自动附加到 commit/PR 消息应改为 opt-in — Issue #66504

[Issue #66504](https://github.com/anthropics/claude-code/issues/66504) | 👍 12 / 💬 2

用户认为将 Session URL 默认附加到提交信息和 PR 描述中存在隐私泄露风险，应改为按需开启。12 个赞反映出开源/混合办公场景下对敏感信息可控外泄的高度关注。

---

### 10. 粘贴泰文/多字节 UTF-8 文本时字节 0x80–0x9F 被静默截断 — Issue #71712

[Issue #71712](https://github.com/anthropics/claude-code/issues/71712) | 👍 0 / 💬 2

TUI 输入框在粘贴含 C1 控制字符范围（0x80–0x9F）的多字节 UTF-8 文本（如泰文）时静默丢弃相关字节，导致不可逆的 mojibake。虽然影响面局限于特定语言/输入法，但属于**数据正确性（data integrity）层面的严重缺陷**。

---

## 📥 重要 PR 进展

本日仅 2 个 PR 在过去 24 小时内更新：

### PR #71627 — docs(sandbox): 注明 prompt 批准的域名为 session 作用域

[PR #71627](https://github.com/anthropics/claude-code/pull/71627) | 状态：OPEN

在 `examples/settings/README.md` 的 Tips 区域新增一条说明：通过 prompt 交互批准的沙箱网络域名仅在当前 session 内有效，重启后需重新授权。**这是一个文档补全型 PR，解决了 `sandbox.network.allowedDomains` 配置与实际行为之间的信息差。**

---

### PR #71530 — Merge pull request #1 from anthropics/main

[PR #71530](https://github.com/anthropics/claude-code/pull/71530) | 状态：CLOSED

常规同步合并，无实质功能变更。

---

## 📊 功能需求趋势

综合今日 50 条活跃 Issue 的标签与内容，提炼出以下五大关注方向：

| 排名 | 方向 | 代表 Issue | 热度信号 |
|:---:|------|-----------|---------|
| 1 | **用量/计费透明度** | #16157, #38335, #56281 | 👍 1157+，💬 2262+，社区情绪最激烈 |
| 2 | **模型可用性（1M 上下文）** | #68287, #69444, #69109, #36351 | 多平台集中爆发，疑似回归 |
| 3 | **Windows 平台稳定性** | #50674, #71717, #71708, #45889 | 认证、内存泄漏、ARM64 兼容性问题叠加 |
| 4 | **Agent 技能/插件生态** | #16345, #62485 | 路径标准化、私有 marketplace 支持 |
| 5 | **沙箱/企业网络** | #70684, #62516 | 代理认证、后台任务状态暴露 |

---

## 🎯 开发者关注点总结

1. **计费信任危机是头号问题。** #16157 和 #38335 合计超过 2000+ 赞和 2200+ 评论，用户需要更透明的用量计量和消耗速率说明。

2. **1M 上下文窗口的可用性正在多平台退化。** Desktop 端和 CLI 端均有报告，且标记为 regression，建议密切关注官方回应。

3. **Windows 平台体验持续落后。** 从 OAuth 凭据写入失败、证书验证错误到 ARM64 兼容性，Windows 用户面临的是系统性的平台支持缺口。

4. **沙箱模式在企业代理环境下仍不成熟。** SOCKS5 认证不支持意味着大量企业用户无法在安全策略下正常使用沙箱功能。

5. **国际化/UTF-8 输入正确性需重视。** 泰文等多字节文本的静默截断属于数据正确性 bug，虽影响面小但修复优先级不应低。

---

*数据来源：GitHub anthropics/claude-code | 统计时间窗口：2026-06-26 ~ 2026-06-27*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-27

---

## 1. 今日速览

本日社区最突出的议题是 **`gpt-5.5` 模型的 token 消耗异常激增**，大量 Plus/Pro/Business 用户反馈 5 小时额度在 1-3 条提示后即耗尽，单 token 计费成本疑似上涨了 10-20 倍，引发 900+ 条评论的激烈讨论。版本方面，Rust CLI 发布了 `0.143.0-alpha.26` 的例行更新。PR 侧，团队正在推进 **rollout 持久化层重构**、**远程插件默认启用** 以及 **MCP OAuth 并发安全** 等多项核心架构改进。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| [`rust-v0.143.0-alpha.26`](https://github.com/openai/codex/releases/rust-v0.143.0-alpha.26) | Alpha 预发布 | 最新 alpha 通道更新 |
| [`rust-v0.142.3`](https://github.com/openai/codex/releases/rust-v0.142.3) | Patch（维护） | 仅内部维护改动，无面向用户的变更 |

> 两个版本均无重大功能更新，`0.142.3` 为纯维护补丁。

---

## 3. 社区热点 Issues

###  高热度 Bug — Token 消耗/计费异常

| # | 标题 | 👍 |  | 要点 |
|---|------|----:|----:|------|
| [#14593](https://github.com/openai/codex/issues/14593) | Burning tokens very fast | 274 | 624 | 始于 3 月但近期再次爆发，Business 用户称 token 消耗极快，长期未彻底解决 |
| [#28879](https://github.com/openai/codex/issues/28879) | gpt-5.5 rate-limit cost per token jumped ~10-20× since June 16 | 326 | 175 | **Plus 用户**反馈 6 月 16 日起单 token 消耗增 10-20 倍，5 小时额度 2-3 条即耗尽 |
| [#30212](https://github.com/openai/codex/issues/30212) | 5-hour allowance consumed in ~1 hour | 8 | 6 | Pro 20x 用户，1 小时耗尽 5 小时额度 |
| [#30310](https://github.com/openai/codex/issues/30310) | Usage limit decreased without running any task | 0 | 3 | 未执行任何任务时额度自行减少，日视图显示 0 tokens |
| [#18357](https://github.com/openai/codex/issues/18357) | Upgraded to PRO but "out of Codex messages" | 5 | 9 | 开通 5x PRO 后仍提示额度不足 |

> ** 分析**：token 计费异常是本周最大热点，涉及 Plus/Pro/Business 所有付费层级，社区怀疑是后端计费逻辑变更，官方尚未正式回应。

### 🟡 平台兼容性 / 崩溃问题

| # | 标题 | 👍 | 💬 | 要点 |
|---|------|----:|----:|------|
| [#29000](https://github.com/openai/codex/issues/29000) | CLI 0.141.0 SIGTRAP crash on Intel macOS | 11 | 16 | **已关闭**，Intel macOS 上的 trace trap 崩溃 |
| [#30300](https://github.com/openai/codex/issues/30300) | macOS x86_64: 0.142.2 SIGTRAP during gpt-5.5 runs | 0 | 2 | **延续了 #29000**，在 0.142.2 上 gpt-5.5 仍触发崩溃 |
| [#27536](https://github.com/openai/codex/issues/27536) | macOS: code_sign_clone grows unbounded (62 GB+) | 0 | 10 | **已关闭**，自动更新遗留临时目录导致磁盘爆满 |
| [#30105](https://github.com/openai/codex/issues/30105) | "failed to initialize sqlite state runtime" on macOS | 0 | 3 | 多实例并发时 SQLite 数据库锁定导致无法启动 |

###  Windows 特有 Issues

| # | 标题 | 👍 |  | 要点 |
|---|------|----:|----:|------|
| [#28703](https://github.com/openai/codex/issues/28703) | Browser/Chrome plugins removed on startup | 0 | 4 | 插件安装成功但启动后被清除 |
| [#30270](https://github.com/openai/codex/issues/30270) | Bundled plugins disappear after Windows app updates | 0 | 3 | 应用更新后因 marketplace 路径过期导致插件丢失 |

---

## 4. 重要 PR 进展

### 核心架构 / 协议

| # | PR | 说明 |
|---|-----|------|
| [#30282](https://github.com/openai/codex/pull/30282) | ✅ 合并 — feat(protocol): define missing rollout turn items | 定义 canonical `TurnItem` 结构，为 rollout 持久化奠基 |
| [#30283](https://github.com/openai/codex/pull/30283) | 🔄 feat(core): emit more turn items instead of legacy begin/end events | 以 `TurnItem` 生命周期替代旧事件模型，作为后续 SQLite 投影的基础 |
| [#30188](https://github.com/openai/codex/pull/30188) | 🔄 feat(rollout): persist canonical items for paginated threads | **CA-629 持久化层最终实现**：分页 rollout 使用 canonical TurnItem 快照持久化 |
| [#30311](https://github.com/openai/codex/pull/30311) | 🔄 assign IDs to normalized prompt outputs | 修复恢复调用时缺少 ID 的问题，确保输出项标识一致性 |
| [#30286](https://github.com/openai/codex/pull/30286) |  overlap diff root discovery with world state | 将 diff-root 发现与世界状态构建并行化，**减少 thread-cold 首 token 延迟** |

### 远程插件 / 执行器 / 传输

| # | PR | 说明 |
|---|-----|------|
| [#30297](https://github.com/openai/codex/pull/30297) | 🔄 Enable remote plugins by default | **远程插件从实验性功能升级为默认启用**，保留显式禁用选项 |
| [#30269](https://github.com/openai/codex/pull/30269) | 🔄 gate TCP_NODELAY on Rendezvous transport policy | 替换无条件 TCP_NODELAY，改为端到端 fail-closed 传输策略 |
| [#30273](https://github.com/openai/codex/pull/30273) | 🔄 consume pushed exec-server process events | 从有序事件流完成统一执行器进程，增加沙箱拒绝状态上报 |
| [#29263](https://github.com/openai/codex/pull/29263) | ✅ 合并 — expose sandbox ingress to host | 沙箱内服务可通过 TCP端口暴露给宿主机 |

### MCP / 工具调用

| # | PR | 说明 |
|---|-----|------|
| [#30302](https://github.com/openai/codex/pull/30302) |  Preserve namespaces on custom tool calls | 修复自定义工具调用中 namespace 丢失问题，重新生成 app-server 协议 schema |
| [#28902](https://github.com/openai/codex/issues/28902) |  Feature: configurable base_url for amazon-bedrock | 支持 Bedrock provider 自定义 base_url（关联 Issue） |

### MCP OAuth 并发安全（串行依赖链）

由 @stevenlee-oai 提交的 6 个连续 PR，解决 MCP OAuth 凭据在多线程/多会话下的竞争问题：

| # | PR | 说明 |
|---|-----|------|
| [#30292](https://github.com/openai/codex/pull/30292) | Serialize shared MCP OAuth credential stores | 序列化共享凭据存储 |
| [#30293](https://github.com/openai/codex/pull/30293) | Serialize MCP OAuth refresh transactions | 序列化 token 刷新事务 |
| [#30294](https://github.com/openai/codex/pull/30294) | Route MCP OAuth recovery through Codex | 统一走 Codex 内部恢复流程 |
| [#30295](https://github.com/openai/codex/pull/30295) | Serialize MCP OAuth login and logout | 序列化登录/登出操作 |
| [#30296](https://github.com/openai/codex/pull/30296) | Report MCP OAuth Auto store drift | 检测并报告凭据自动存储漂移 |

### 其他关注

| # | PR | 说明 |
|---|-----|------|
| [#30313](https://github.com/openai/codex/pull/30313) | 🔄 Add referral invites to `/usage` | 在用量页面添加临时推荐邀请流程 |
| [#30291](https://github.com/openai/codex/pull/30291) | 🔄 app-server expose environment info RPC | 新增实验性 `environment/info` RPC，返回 shell/cwd 等环境元数据 |
| [#30201](https://github.com/openai/codex/pull/30201) | ✅ 合并 — fix(remote-control): avoid server token refresh retry storms | 修复远程控制在 502 时的 token 刷新重试风暴 |
| [#29652](https://github.com/openai/codex/pull/29652) |  Add caller-provided Codex auth | 新增进程内调用方提供认证模式 |

---

## 5. 功能需求趋势

通过对今日 50 条 Issues 的分类统计，社区需求集中在以下方向：

### ① 💰 计费透明度与用量控制（最高关注度）
- Token 消耗异常激增（#14593, #28879, #30212, #30310）
- PRO 升级后额度不生效（#18357）
- **核心诉求**：用户希望看到详细的 per-token 计费日志和实时用量面板

### ②  Windows 平台稳定性
- 浏览器插件反复丢失（#28703, #30270）
- 沙箱 ACL 权限故障（#30251）
- 终端读取失败（#29070）
- UI 布局错位（#30308）
- **核心诉求**：Windows 体验对齐 macOS

### ③ 🔌 模型/Provider 可扩展性
- Bedrock 自定义 base_url（#28902）
- HTTPS-only 传输选项（#27381）
- 自定义模型报错（#30224）
- **核心诉求**：企业级网络代理和自定义后端支持

### ④ 🧠 Agent 行为安全
- 从查询越权到状态修改动作（#30290）
- **核心诉求**：更严格的权限边界和审批机制

###  其他
- macOS 磁盘空间泄漏（#27536，已修复）
- Intel Mac Computer Use 缺失（#29422）
- CLI Memory 管理命令需求（#30299）
- Remote Control 高可用性（#30301）

---

## 6. 开发者关注点

| 痛点 | 影响面 | 趋势 |
|------|--------|------|
| **gpt-5.5 计费异常** | 全部付费用户 | 🔴 急剧恶化，6/16 起集中爆发 |
| **Intel macOS 崩溃** | x86_64 macOS 用户 |  跨版本持续存在（0.139→0.141→0.142.2） |
| **Windows 兼容性** | Windows 全平台用户 |  持续高频反馈，覆盖插件/沙箱/终端/UI |
| **SQLite 并发锁** | 多实例 macOS 用户 |  新发现问题 |
| **Cloudflare 403 拦截** | 企业网络/WSL 用户 |  网络层问题持续 |

---

> **编辑点评**：本周社区的最大风险点是 **gpt-5.5 计费异常**——它跨越所有付费层级，影响面极广，且官方尚无明确说明。建议 gpt-5.5 用户暂切备用模型，等待官方修复。PR 侧团队正加速推进 rollout 重构、远程插件稳定化和 MCP OAuth 安全加固，技术债务清理在持续进行。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-06-27

---

## 1. 今日速览

今日社区核心焦点集中在**安全加固**与**Agent 稳定性**两大方向：多个安全相关 PR 推进（OAuth 修复、敏感路径保护、信任对话框漏洞），同时 Subagent 在达到 MAX_TURNS 后错误报告"成功"的 P1 Bug 引发最多讨论。此外，Caretaker Agent 的 Cloud Run 基础设施持续扩展，夜间版本 v0.51.0-nightly 正常发布。

---

## 2. 版本发布

### v0.51.0-nightly.20260626.gb14416447

- **CI 修复**：防止错误的 NPM 发布并修复 promote job 崩溃问题（[#28147](https://github.com/google-gemini/gemini-cli/pull/28147)）
- **测试修复**：修复 `no_proxy` 测试用例
- **Changelog**：v0.50.0-preview.1 变更日志补全

> 链接：[PR #28158](https://github.com/google-gemini/gemini-cli/pull/28158)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 👍 | 核心问题 |
|---|-------|--------|-----|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 后报告 GOAL success | P1 | 2 | **最活跃讨论**。Subagent 在达到轮次上限、未执行任何分析的情况下报告"成功"，掩盖了中断事实，影响调试和可靠性判断 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无限挂起 | P1 | 8 | 👍 最多。委派给 generalist agent 后永久挂起，简单操作（如创建文件夹）也无法完成，用户需等待超 1 小时后手动取消 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行后卡在"等待输入" | P1 | 3 | 命令已执行完毕但 UI 仍显示"Awaiting user input"，属于核心交互体验阻塞问题 |
| 4 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 需确定性脱敏并减少日志 | P2 | 0 | 安全敏感：Auto Memory 在内容已送入模型后才进行脱敏，存在 secret 泄露风险 |
| 5 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | P2 | 0 | 提取 agent 判定低信号后会话保持未处理状态，导致无限循环重试 |
| 6 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级鲁棒性评估 EPIC | P1 | 0 | 跟踪 76 个 behavioral eval 测试在 6 个 Gemini 模型上的组件级评估体系建设 |
| 7 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取/搜索/映射评估 | P2 | 1 | 探索 AST 感知工具能否减少工具调用轮次、降低 token 噪声，属于架构级优化方向 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 下失败 | P1 | 1 | Linux Wayland 环境下 browser agent 终止，影响 Linux 用户覆盖 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数超 128 个时遇到 400 错误 | P2 | 0 | 大量工具启用时 API 报错，需更智能的工具范围限制策略 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应阻止破坏性操作（git reset --force 等） | P2 | 1 | 安全行为问题：模型在复杂 git 操作中使用危险命令，需增加安全约束 |

---

## 4. 重要 PR 进展（Top 10）

### 🔴 已合并（Closed）

| PR | 类型 | 内容摘要 |
|----|------|----------|
| [#27850](https://github.com/google-gemini/gemini-cli/pull/27850) | **修复** | MCP 图片 MIME 类型嗅探——修复 WebP 数据被错误标记为 PNG 的问题（Fixes #27731） |
| [#27845](https://github.com/google-gemini/gemini-cli/pull/27845) | **修复** | 在认证前先提示文件夹信任——修复信任流程顺序错误（Fixes #27844） |
| [#27966](https://github.com/google-gemini/gemini-cli/pull/27966) | **安全** | 强制大小写敏感的敏感路径黑名单 + VS Code HITL 防护——防止路径绕过和 prompt injection |
| [#27461](https://github.com/google-gemini/gemini-cli/pull/27461) | **修复** | 抑制 PTY resize EBADF 崩溃——匹配上游 node-pty 修复 |
| [#27224](https://github.com/google-gemini/gemini-cli/pull/27224) | **文档** | SECURITY.md 新增多用户环境共享责任模型说明 |

### 🟡 进行中（Open）

| PR | 类型 | 内容摘要 |
|----|------|----------|
| [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | **核心** | 限制单次用户请求的递归推理轮次（默认 15 轮），防止无限循环消耗 CPU/API 配额 |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | **核心** | 从 scrubbed history turns 中剥离 thought 内容——解决 thought 泄漏导致模型进入无限独白循环的问题 |
| [#28053](https://github.com/google-gemini/gemini-cli/pull/28053) | **修复** | 文件系统工具防御性路径解析——修复 `@` 前缀路径导致 "File not found" 的生产 Bug |
| [#28103](https://github.com/google-gemini/gemini-cli/pull/28103) | **安全** | 避免 OAuth token exchange 期间 keep-alive socket 复用——修复 Node.js CVE-2026-48931 安全补丁导致的 "Premature close" 问题 |
| [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) | **新功能** | Caretaker Agent Cloud Run Webhook 摄入服务——GitHub webhook 签名验证 + Firestore 事务 + Pub/Sub 发布 |

---

## 5. 功能需求趋势

从当前活跃 Issues 和 PRs 来看，社区关注的功能方向集中在以下维度：

### 🔒 安全加固（最高优先级）
- **敏感数据保护**：Auto Memory 的确定性脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）、无效 memory patch 隔离（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）
- **路径安全**：大小写不敏感的黑名单绕过修复（[#27966](https://github.com/google-gemini/gemini-cli/pull/27966)）
- **OAuth 安全**：CVE-2026-48931 适配（[#28103](https://github.com/google-gemini/gemini-cli/pull/28103)）
- **信任对话框**：修复 hook 显示反转漏洞（[#27915](https://github.com/google-gemini/gemini-cli/pull/27915)）

### 🤖 Agent 可靠性
- **Subagent 状态准确性**：MAX_TURNS 后错误报告成功（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）
- **无限循环防护**：递归推理轮次限制（[#28164](https://github.com/google-gemini/gemini-cli/pull/28164)）、thought 泄漏修复（[#27971](https://github.com/google-gemini/gemini-cli/pull/27971)）
- **破坏性操作防护**：阻止 `git reset --force` 等危险命令（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）

### 🏗️ 基础设施与工具
- **Caretaker Agent 体系**：Webhook 摄入服务（[#28015](https://github.com/google-gemini/gemini-cli/pull/28015)）+ Triage Worker 核心基础（[#28163](https://github.com/google-gemini/gemini-cli/pull/28163)）
- **AST 感知能力**：评估 AST 工具对 codebase 映射的价值（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）
- **评估体系**：组件级 behavioral eval 建设（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)）

### 🖥️ 平台兼容性
- **Linux Wayland**：Browser agent 适配（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）
- **WSL/网络共享**：文件系统 watch 缺失时的分支名同步（[#28012](https://github.com/google-gemini/gemini-cli/pull/28012)）
- **终端体验**：resize 无闪烁渲染（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）

---

## 6. 开发者关注点（痛点与高频需求）

### 🔴 高频痛点

1. **Agent 挂起/无响应**（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)，8👍）
   - Generalist agent 和 shell 命令执行后卡住是最受关注的问题，直接影响日常使用

2. **Subagent 状态不透明**（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）
   - 用户无法判断 subagent 是否真正完成任务，bug 报告也不包含 subagent 上下文

3. **Auto Memory 行为不可控**（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)）
   - 多个 issue 集中反映 Auto Memory 的安全、日志和重试问题

4. **工具数量限制**（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）
   - 超过 128/400 个工具时 API 报错，需要更智能的工具筛选

### 🟡 体验改进需求

5. **Subagent 轨迹可观测性**（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）
   - 希望通过 `/chat share` 查看和分享 subagent 执行轨迹

6. **Agent 自感知能力**（[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）
   - Agent 应能准确回答自身 CLI 参数、快捷键等元信息

7. **Skills/Sub-agents 自主调用不足**（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）
   - 即使配置了相关 skills，Gemini 也不会主动使用，需显式指令

8. **模型列表命令**（[#27848](https://github.com/google-gemini/gemini-cli/pull/27848)，已合并）
   - 新增 `gemini models` 命令查看可用模型及上下文窗口

---

> 📊 **数据概览**：过去 24 小时新增/更新 Issues 50 条，PR 18 条；P1 级 Bug 集中在 Agent 可靠性和安全领域；社区 👍 最高的是 Generalist agent 挂起问题（8👍）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-06-27 ｜ 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

Copilot CLI 连续发布 **v1.0.66-0** 和 **v1.0.66-1** 两个版本，重点增强了 MCP 服务器管理（OAuth 自动恢复、启用/禁用开关）、Subagent 并发与深度控制、`/chronicle skills review` 流水线以及桌面通知能力。社区侧今日涌入大量新 Issue，**剪贴板/Copy 快捷键在 Windows 11 和 Linux 上双双失灵**、**Memory 跨仓库泄露**、**Subagent 转录无上限膨胀**成为焦点，同时出现了 **CVE 安全披露**和 explore 工具硬编码模型等敏感议题。

---

## 2. 版本发布

### v1.0.66-1（正式 channel）

- 🛠 **Settings 页新增 Subagent 并发与深度限制**（按量计费用户），可控制子代理的并发数和递归深度；
- 🔍 **新增 `/chronicle skills review` 命令**，支持对 Proposed Skill Changes 逐条 Accept / Reject / Defer 评审；
- 🔔 **新增桌面通知**，用于 Attention Prompts 和空闲会话提醒。

> https://github.com/github/copilot-cli/releases/tag/v1.0.66-1

### v1.0.66-0（预发 channel）

- 🔌 **MCP 列表视图中可单独启用/禁用某个 MCP Server**；
- 🧪 **实验性响应预算控制**加入 CLI Settings；
- 📡 托管配置现支持自定义 OpenTelemetry 导出；
- 🔑 OAuth 认证的远程 MCP Server Token 过期后，会话内可**自动恢复**，无需重启 CLI。

> https://github.com/github/copilot-cli/releases/tag/v1.0.66-0

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 👍 / 💬 | 为什么值得关注 |
|---|------|------|---------|---------------|
| 1 | **[#3949] Windows 11 / [#2082] Linux 复制快捷键双双失灵** | OPEN | 0 / 0 ; 10 / 22 | Windows 端 Ctrl+C 提示"已复制"但剪贴板为空；Linux 端 Ctrl+Shift+C 不再复制。两大桌面平台同时受累，属于高频交互阻塞，社区反应迅速。 |
| 2 | **[#3945] Memory 跨仓库泄露** | OPEN | 0 / 1 | 新建裸仓库执行 setup 时，Copilot 莫名其妙引用了"memory 中已有的事实"，属于上下文隔离缺陷，可能波及其他用户的安全认知。 |
| 3 | **[#3946] 自定义指令泄露到仓库分析上下文** | OPEN | 0 / 0 | 与分析 Memory 泄露同源——本地 `~/.copilot/instructions.md` 内容被代入了跨仓库分析，信息边界模糊。 |
| 4 | **[#3944] Subagent 转录无上限嵌入父会话导出** | OPEN | 0 / 2 | 父会话 transcript 把每个 Subagent 的完整 tool-call 输出**原样内联**，无摘要、无大小上限，已造成导出文件爆炸式增长；与 v1.0.66 新增的 subagent depth/concurrency limit 形成呼应。 |
| 5 | **[#3906] 请求分配 CVE（安全审计相关）** | OPEN | 0 / 2 | 报告人声称已通过 GHSA 流程提交安全报告并准备推补丁，需重点关注后续是否影响 CLI 工具链。 |
| 6 | **[#3954] explore 工具硬编码 `gpt-5.4-mini`，忽略自定义/DeepSeek 配置** | OPEN | 0 / 0 | 用户切换模型后端后 explore 仍走 OpenAI 端点，属于 provider-agnostic 能力的回归；对使用国产/自定义部署的用户影响大。 |
| 7 | **[#3948] 所有 `web_fetch` 调用返回 TypeError** | OPEN | 0 / 0 | 网络/代理已通（模型、登录都正常），仅 `web_fetch` 工具全链路报错，疑似沙箱或内部 fetch 实现 bug。 |
| 8 | **[#3940] 自定义 Agent 支持 `skills` 字段以限制预加载技能** | OPEN | 0 / 2 | 随 `/chronicle skills review` 推出后，社区立刻要求自定义 Agent 能声明式裁剪技能集，避免 context 噪音。 |
| 9 | **[#3942] `copilot --acp` 与 `--agent` 不兼容** | OPEN | 0 / 1 | Agent Communication Protocol（ACP）启用后自定义 agent 失效，影响 IDE/CI 集成场景。 |
| 10 | **[#3950] 私有 SSO 仓库的已装插件报 "failed to browse marketplace"** | OPEN | 0 / 0 | Settings → Plugins 页面弹 toast 错误，SSO org 用户无法正常浏览私有 marketplace，影响企业级用户。 |
| — | *附：已关闭* **[#3947] Theme 1.0.64 回归（alt-screen 背景）** | CLOSED | 1 / 2 | 说明团队在积极修复主题系统。 |

> 提及 Issue 完整列表：[#2082](https://github.com/github/copilot-cli/issues/2082) [#3949](https://github.com/github/copilot-cli/issues/3949) [#3945](https://github.com/github/copilot-cli/issues/3945) [#3946](https://github.com/github/copilot-cli/issues/3946) [#3944](https://github.com/github/copilot-cli/issues/3944) [#3906](https://github.com/github/copilot-cli/issues/3906) [#3954](https://github.com/github/copilot-cli/issues/3954) [#3948](https://github.com/github/copilot-cli/issues/3948) [#3940](https://github.com/github/copilot-cli/issues/3940) [#3942](https://github.com/github/copilot-cli/issues/3942) [#3950](https://github.com/github/copilot-cli/issues/3950)

---

## 4. 重要 PR 进展

过去 24h 内仅 **1 条 PR 有更新**，且已 CLOSED：

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| 1 | **[#570] Add macOS installation instructions to README.md** | CLOSED | 由 Copilot 自身编码代理发起的安装说明文档补全，生命周期长达 7 个月后关闭，**未改动核心功能**。 |

> 整体社区侧 Issue 活跃度远高于 PR，这反映出当前版本更迭较快、文档和体验类跟进任务积压较多。
> 仅有一条 PR：[#570](https://github.com/github/copilot-cli/pull/570)

---

## 5. 功能需求趋势

对 21 条 Issue 按标签聚合，提炼社区最关注的方向：

| 方向 | 代表 Issues | 趋势解读 |
|------|------------|---------|
| **🧠 Context / Memory 隔离** | #3945、#3946、#2082 | Memory 指令和跨仓库上下文隔离是本周爆发点。随着 Memory 功能铺开，**信息可见性边界**成为用户真实痛点。 |
| **🔌 MCP 与工具链稳定性** | v1.0.66 OAuth 恢复、MCP 开关、#3948 web_fetch、#3887 注册表变量插值（已关闭） | MCP 生态正从"能装"迈向"能用且稳定"，**OAuth 恢复、变量注入、web_fetch 基础设施**是重点。 |
| **🧩 Agent 可定制性** | #3940 skills 字段、#3942 ACP 集成、#3939 /fleet 多克隆 | 自定义 Agent 正在从"能定义"迈向"细粒度控制"（技能裁剪、协议兼容、多仓协作）。 |
| **🖥 终端 UX 与跨平台一致性** | #2082、#3949（复制快捷键）、#3951 PowerShell 兼容、#3952、#3943 滚动卡顿 | Windows/macOS/Linux 三端交互体验的本地原生性呼声强烈。 |
| **🔒 安全与合规** | #3906 CVE、#3941 代码签名不一致 | 企业级用户对 **CVE 响应、二进制签名可信** 流程开始提出明确要求。 |
| **⚙️ 模型/后端灵活性** | #3954 硬编码 gpt-5.4-mini、#3950 SSO 私有市场 | "模型可切"不再是实验特性，而是部署刚需；企业 SSO 场景的**私有 Registry/Marketplace**同样呼声渐高。 |

---

## 6. 开发者关注点 & 痛点速览

| 痛点 | 表现 | 建议关注 |
|------|------|---------|
| **剪贴板/复制交互不可靠** | Windows 提示复制但剪贴板为空；Linux 快捷键失效 | 竞品 CLI 对比测试，等后续补丁 |
| **Memory 行为不透明** | 用户无法确认 Memory 何时被读取、是否跨 repo 泄露 | 关注团队是否会推出 Memory 可见性界面 |
| **Subagent 泛滥** | 转录无上限、上下文膨胀 | v1.0.66 已加入 depth/concurrency 开关，可尝鲜 |
| **工具硬编码模型** | explore 工具无视自定义 provider | 若你使用 DeepSeek/国产模型，暂勿升级到最新 explore 依赖 |
| **web_fetch 全线崩** | 所有 URL 抓取失败，与代理无关 | 可能是上游依赖更新回退，留意 next release |

---

**一句话总结**：v1.0.66 大步拓宽了 MCP 与 Subagent 的治理面板，但社区同时用 Issue 投票指出——**跨平台复制、Memory 隔离、工具后端解耦**才是 AI CLI 迈向生产就绪的下一道坎。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-06-27 | 数据来源：MoonshotAI/kimi-cli**

---

## 1. 今日速览

过去 24 小时无新版本发布。社区反馈较为集中，共新增 3 条 Issue 更新和 2 条 PR 更新。核心反馈聚焦于 **Plan Mode 状态不一致**（#2478）和 **输入交互数据丢失**（#2477）两个 bug，其中 Plan Mode 问题可能导致无法正常退出规划流程，值得优先关注。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

今日更新 Issue 共 3 条，全部列出：

| # | 状态 | 标题 | 核心要点 |
|---|------|------|----------|
| [#2478](https://github.com/MoonshotAI/kimi-cli/issues/2478) | 🟡 OPEN | ExitPlanMode 报告 "Not in plan mode"，但系统提示 Plan Mode 处于激活状态 | **关键 bug**：Plan Mode 状态识别不一致，导致 AI 助手无法正常退出规划模式。目前 1 条评论，尚未正式修复。 |
| [#2477](https://github.com/MoonshotAI/kimi-cli/issues/2477) | 🟡 OPEN | 回车键重复触发 + `/sessions` 命令反馈丢失 | 涉及**用户体验层面**的交互 bug：Linux 环境下 Double Enter 问题以及会话切换后对话反馈丢失，影响日常使用流畅度。 |
| [#2425](https://github.com/MoonshotAI/kimi-cli/issues/2425) | 🟢 CLOSED | 403 错误：Kimi For Coding 仅限 Coding Agent 使用 | 已关闭的历史遗留问题（0.9.0 版本），反映早期版本在模型访问权限校验上的说明不清晰。关闭前积累 10 条评论、3 👍，说明不少用户曾遇到此困惑。 |

> **重点关注**：Issue #2478 的 Plan Mode 状态不一致问题若不及时修复，将直接影响 Agent 工作流的可靠性，建议优先排查状态机逻辑。

---

## 4. 重要 PR 进展

今日活跃 PR 共 2 条，全部列出：

| # | 状态 | 标题 | 修复/功能内容 |
|---|------|------|--------------|
| [#2476](https://github.com/MoonshotAI/kimi-cli/pull/2476) | 🟡 OPEN | fix(kosong): thinking 关闭时改为省略 `reasoning_effort` 而非传 `null` | **API 兼容性修复**：当 `with_thinking("off")` 时，Python SDK 会将 `None` 序列化为 `"reasoning_effort": null`，而 OpenAI 兼容 API 仅识别 `omit` 语义（即不传该字段）。此修复可避免部分推理 API 因 null 值报错或行为异常。 |
| [#2287](https://github.com/MoonshotAI/kimi-cli/pull/2287) | 🟡 OPEN | docs(readme): 为 Development 章节添加 Prerequisites 列表 | **开发者体验优化**：解决 Issue #2274 的贡献者环境问题——此前 README 直接从安装步骤跳到 `make prepare`，缺少依赖说明，导致贡献者本地构建失败。补充前置依赖清单可降低社区贡献门槛。 |

> **建议**：PR #2476 属于后端 API 调用的关键兼容性问题，建议尽快评审合并，可避免使用 `reasoning_effort` 参数的后端服务产生非预期行为。

---

## 5. 功能需求趋势

基于近期 Issue 动态，社区反馈的主要方向集中在：

- **Plan Mode 可靠性**：状态识别不一致（#2478）暴露了 Agent 规划流程中的状态机设计缺陷，是当前最需要优先解决的问题。
- **输入/会话稳定性**：回车键重复触发和会话数据丢失（#2477）反映终端交互层面仍有打磨空间。
- **API 兼容性精细化**：PR #2476 体现社区在 OpenAI 兼容性细节上的持续修正，推测后续会有更多参数适配类修复。
- **新用户入门体验**：PR #2287 及早期 #2425 共同说明贡献者和终端用户对"开箱即用"体验仍有较高期待。

---

## 6. 开发者关注点

| 痛点/需求 | 体现形式 | 紧迫度 |
|-----------|---------|--------|
| Plan Mode 状态机逻辑缺陷 | Issue #2478 — 无法正常退出规划模式 | 🔴 高 |
| Linux 终端输入交互问题 | Issue #2477 — Double Enter & 反馈丢失 | 🟡 中 |
| `reasoning_effort` 参数 null 传递 | PR #2476 — API 序列化兼容 | 🟡 中 |
| 贡献文档不完整 | PR #2287 — Prerequisites 缺失 | 🟢 低 |
| 新手权限引导不足 | Issue #2425（已关闭）— 403 错误无清晰提示 | 🟢 低（已处理） |

**总结**：当前社区最紧迫的反馈是 **Plan Mode 状态一致性**问题，建议开发团队优先排查 Agent 状态机的切换逻辑。同时，输入交互体验和 API 兼容性修复正在稳步推进中。

---

*本报告基于 2026-06-26 数据自动生成 | 项目地址：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-27

> 数据来源：github.com/anomalyco/opencode | 今日无新版本发布

---

## 1. 今日速览

今日社区以**大量自动化 PR 合并**为主要特征，涵盖 50+ 个 issue/PR 的集中处理。核心亮点包括：**DeepSeek V4 Pro 降价引发的 Go 套餐调整讨论**（84 条评论、82 赞）以及 **paste plain text、ACP 协议修复、provider 兼容**等多个功能性 PR 的密集合入。无新版本发布。

---

## 2. 版本发布

无（过去 24 小时无新 Release）

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 👍 | 💬 | 关注原因 |
|---|------|------|-----|-----|----------|
| [#28846](https://github.com/anomalyco/opencode/issues/28846) | 根据 DeepSeek V4 Pro 75% 降价调整 Go 使用限额 | ✅ Closed | 82 | 84 | 🔥 社区参与度最高议题，直接涉及用户成本利益 |
| [#450](https://github.com/anomalyco/opencode/issues/450) | UI 支持 reasoning_effort 参数 | ✅ Closed | 26 | 15 | 多模型（OpenAI/Gemini/DeepSeek）兼容性需求 |
| [#23153](https://github.com/anomalyco/opencode/issues/23153) | Go 套餐支持加密货币付费 | 🔵 Open | 23 | 12 | 支付灵活性需求，加密用户群体诉求 |
| [#12598](https://github.com/anomalyco/opencode/issues/12598) | 最新版 Windows 无法启动 | ✅ Closed | 0 | 16 | Windows 用户升级阻断问题 |
| [#6169](https://github.com/anomalyco/opencode/issues/6169) | 自定义 provider 模型在 /model TUI 中不显示 | ✅ Closed | 1 | 12 | TUI 模型选择器自定义 provider 支持缺陷 |
| [#28202](https://github.com/anomalyco/opencode/issues/28202) | Plugin async prompt 与 Web prompt 产生重复 session 子节点 | ✅ Closed | 4 | 7 | Web UI 架构数据一致性 bug |
| [#32149](https://github.com/anomalyco/opencode/issues/32149) | Opencode 请求处理卡死无响应 | 🔵 Open | 2 | 6 | 核心用户体验阻断性 bug（多日未解决） |
| [#31152](https://github.com/anomalyco/opencode/issues/31152) | 无限 compaction 循环（空 session 也触发） | 🔵 Open | 0 | 4 | 上下文压缩机制严重缺陷 |
| [#33618](https://github.com/anomalyco/opencode/issues/33618) | Qwen 3.7 Plus/Max via OpenRouter tool call 失败 | 🔵 Open | 1 | 3 | 新模型支持的 tool call 稳定性 |
| [#34048](https://github.com/anomalyco/opencode/issues/34048) | GitHub Copilot provider 所有推理请求失败 | 🔵 Open | 0 | 2 | 主要 provider 完全不可用 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 功能说明 |
|---|------|------|----------|
| [#34123](https://github.com/anomalyco/opencode/pull/34123) | fix(tui): add plain text paste | 🔵 Open | 新增 `Ctrl+Alt+V` 纯文本粘贴（修复 Desktop/TUI 粘贴行为不一致） |
| [#34125](https://github.com/anomalyco/opencode/pull/34125) | fix(mcp): request refresh token scope | 🔵 Open | 修复 MCP SEP-2207 scope 选择逻辑 |
| [#34119](https://github.com/anomalyco/opencode/pull/34119) | refactor(core): separate layer node functionality into v2 | 🔵 Open | 核心架构重构，layer node 功能迁移至 v2 |
| [#34116](https://github.com/anomalyco/opencode/pull/34116) | fix(app): question UX fixes and improvements | 🔵 Open | 修复交互模式下的全屏对话布局问题 |
| [#34006](https://github.com/anomalyco/opencode/issues/34006) | Desktop vs Terminal 粘贴文件路径行为不一致 | 🔵 Open | 侧边栏会话加载修复 |
| [#33918](https://github.com/anomalyco/opencode/pull/33918) | fix(skill): include v2 plugin skills in legacy list | 🔵 Open | v2 plugin 向后兼容 legacy 命令列表 |
| [#29392](https://github.com/anomalyco/opencode/pull/29392) | feat(provider): endpoint-based custom providers & model discovery | ✅ Closed | 新增基于 endpoint 的自定义 provider |
| [#29386](https://github.com/anomalyco/opencode/pull/29386) | fix(provider): preserve image input for custom OpenAI-compatible models | ✅ Closed | 修复自定义 OpenAI provider 图片输入丢失 |
| [#29373](https://github.com/anomalyco/opencode/pull/29373) | refactor(app): migrate session timeline to TanStack Virtual | ✅ Closed | 从 virtua 迁移至 TanStack Virtual，改善会话滚动性能 |
| [#31781](https://github.com/anomalyco/opencode/issues/31781) | fix(acp): edit/write permission requests don't include diff | ✅ Closed | ACP 协议中权限请求缺少 diff 内容 |

---

## 5. 功能需求趋势

基于今日 50+ 社区 Issue，提炼出以下关注方向：

### 🔴 支付与定价（高优先级）
- DeepSeek 大幅降价 → 用户要求同步调整 [#28846](https://github.com/anomalyco/opencode/issues/28846)
- 加密货币支付诉求 [#23153](https://github.com/anomalyco/opencode/issues/23153)

### 🟡 Provider 生态兼容性
- GitHub Copilot 完全不可用 [#34048](https://github.com/anomalyco/opencode/issues/34048)
- Qwen 3.7 Series tool call 失败 [#33618](https://github.com/anomalyco/opencode/issues/33618)
- GLM-5.2 不支持图片输入导致异常 [#34113](https://github.com/anomalyco/opencode/issues/34113)
- 自定义 Provider 模型 TUI 不显示 [#6169](https://github.com/anomalyco/opencode/issues/6169)

### 🟢 桌面端体验
- Windows 升级后无法启动 [#12598](https://github.com/anomalyco/opencode/issues/12598)
- 粘贴文件路径行为不一致 [#34006](https://github.com/anomalyco/opencode/issues/34006)
- 法语本地化菜单未翻译 [#34104](https://github.com/anomalyco/opencode/issues/34104)
- 终端输出文件路径不可点击 [#19005](https://github.com/anomalyco/opencode/issues/19005)

### 🔵 核心稳定性
- 无限 compaction 循环 [#31152](https://github.com/anomalyco/opencode/issues/31152)
- 请求处理卡死无响应 [#32149](https://github.com/anomalyco/opencode/issues/32149) & [#34087](https://github.com/anomalyco/opencode/issues/34087)
- 切换模型导致 SQLite 约束错误 [#31606](https://github.com/anomalyco/opencode/issues/31606)
- Compaction 忽略 `auto: false` 配置 [#32385](https://github.com/anomalyco/opencode/issues/32385)

### 🟣 协议与集成
- ACP 协议合规性（session/list、diff 内容、权限请求）[#33036](https://github.com/anomalyco/opencode/issues/33036) & [#31781](https://github.com/anomalyco/opencode/issues/31781)
- MCP refresh token scope 修复 [#34125](https://github.com/anomalyco/opencode/pull/34125)
- Shell 命令暴露 coding agent 环境标记 [#34065](https://github.com/anomalyco/opencode/issues/34065)

---

## 6. 开发者关注点总结

| 痛点 | 频次 | 典型 Issue |
|------|------|-----------|
| **请求无响应/卡死** | 高 | [#32149](https://github.com/anomalyco/opencode/issues/32149), [#34087](https://github.com/anomalyco/opencode/issues/34087) |
| **Compaction 机制异常** | 高 | [#31152](https://github.com/anomalyco/opencode/issues/31152), [#32385](https://github.com/anomalyco/opencode/issues/32385), [#33128](https://github.com/anomalyco/opencode/issues/33128) |
| **新模型支持不完善** | 中 | [#33618](https://github.com/anomalyco/opencode/issues/33618), [#34113](https://github.com/anomalyco/opencode/issues/34113), [#34048](https://github.com/anomalyco/opencode/issues/34048) |
| **Windows 兼容性** | 中 | [#12598](https://github.com/anomalyco/opencode/issues/12598), [#34104](https://github.com/anomalyco/opencode/issues/34104) |
| **定价与支付灵活性** | 中 | [#28846](https://github.com/anomalyco/opencode/issues/28846), [#23153](https://github.com/anomalyco/opencode/issues/23153) |
| **会话数据一致性** | 中 | [#28202](https://github.com/anomalyco/opencode/issues/28202), [#31606](https://github.com/anomalyco/opencode/issues/31606) |
| **UI/UX 细节** | 低-中 | [#19005](https://github.com/anomalyco/opencode/issues/19005), [#34006](https://github.com/anomalyco/opencode/issues/34006), [#17873](https://github.com/anomalyco/opencode/issues/17873) |

---

> 📊 今日共处理 50 条 Issue + 50 条 PR，自动化批量清理占比较高。核心稳定性（compaction、请求卡死）和 provider 兼容性是社区最紧迫的诉求。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-27

---

## 1. 今日速览

今日社区重点集中在 **TUI 渲染稳定性** 和 **嵌入式库场景** 的多个 bug 修复上，RPC 硬编码超时问题也被快速响应。**Amazon Bedrock Mantle** 和 **Friendli** 两个新 Provider 合并，GPT-5.6 模型 "max" thinking level 的跟进需求也浮上水面。整体没有版本发布，但 PR 活跃度表明核心团队在密集推动稳定性和架构改进。

---

## 2. 版本发布

过去 24 小时无新版 Release，暂时省略。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 关注度 | 重要性说明 |
|---|-------|--------|------------|
| 1 | **#5825 [OPEN] Streaming markdown forces scroll to bottom** | 33 💬 | 流式输出时强制滚到底部，严重影响阅读体验；与 `clear on shrink` 强相关，社区讨论最多，PR #6026 已在尝试修复。[链接](https://github.com/earendil-works/pi/issues/5825) |
| 2 | **#4877 [OPEN] Session folder collision** | 19 💬 👍2 | 不同路径的会话可能落到同一文件夹，数据隔离隐患虽不紧急但迟早要补。[链接](https://github.com/earendil-works/pi/issues/4877) |
| 3 | **#5363 [OPEN] Add amazon-bedrock-mantle provider** | 15 💬 👍4 | Bedrock Mantle 使用 OpenAI 兼容 API，与现有 Converse 不兼容，是企业用户重点关注的新 Provider 需求。[链接](https://github.com/earendil-works/pi/issues/5363) |
| 4 | **#5886 [OPEN] AgentSession settlement/continuation lifecycle bugs** | 3 💬 👍2 | mitsuhiko 发起的 meta issue，汇总了 post-run 逻辑中 session 延续、assistant-tail 等的系统性 bug，值得架构层关注。[链接](https://github.com/earendil-works/pi/issues/5886) |
| 5 | **#5871 [OPEN][inprogress] Anthropic OAuth-token detection hardcoded** | 6 💬 | `sk-ant-oat` 写死导致 scoped keys `sk-ant-oat-api03-...` 被错判，已被标记 in-progress。[链接](https://github.com/earendil-works/pi/issues/5871) |
| 6 | **#5944 [CLOSED] pi -p print 模式 turn 完成后 hang** | 3 💬 | #5778 的 streamTimeout 修复未覆盖 post-completion hang，经提交者验证后被关闭（no-action），值得关注。[链接](https://github.com/earendil-works/pi/issues/5944) |
| 7 | **#6096 [CLOSED] ctx.compact() from turn_end aborts tool-loop** | 1 💬 | 暴露 `trigger-compact` 示例自身有生命周期与源码不匹配的问题，修复方向即时可见。[链接](https://github.com/earendil-works/pi/issues/6096) |
| 8 | **#6102 / #6101 [CLOSED] Embedded library 场景 theme/extension-runtime 错误** | 各 1 💬 | 同作者同日提交，反映 pi 作为库使用时 theme 未初始化、extension ctx 被 dispose 后"stale"的痛点，信号意义大于讨论量。[链接](https://github.com/earendil-works/pi/issues/6102) / [#6101](https://github.com/earendil-works/pi/issues/6101) |
| 9 | **#6097 [OPEN] Add support for 'max' thinking level** | 0 💬 | GPT-5.6 Sol 即将引入第六档 thinking level，Pi 需跟进，属于前瞻性需求。[链接](https://github.com/earendil-works/pi/issues/6097) |
| 10 | **#6093 [CLOSED] scoped Anthropic API keys need necessary request params** | 3 💬 | Claude Code scoped keys 不走 `sk-ant-oat` 前缀，导致请求参数缺失，与 #5871 同源。[链接](https://github.com/earendil-works/pi/issues/6093) |

---

## 4. 重要 PR 进展（精选 6 条，全部过去 24h 更新）

| # | PR | 状态 | 内容摘要 |
|---|----|------|----------|
| 1 | **#6026 fix(tui): stabilize working status row** | OPEN | 修复 #5825 流式 markdown 强制滚底问题，xl0 提交，正在推进。[链接](https://github.com/earendil-works/pi/pull/6026) |
| 2 | **#6087 fix(coding-agent): remove hardcoded RPC wait timeout** | CLOSED | 移除 RpcClient 60s 硬编码超时，新增 `RpcClientOptions.waitTimeoutMs`，解决长工具会话失败。[链接](https://github.com/earendil-works/pi/pull/6087) |
| 3 | **#6090 feat(ai): add Friendli provider** | CLOSED | 新增 Friendli 内置 Provider（OpenAI 兼容），默认模型 `zai-org/GLM-5.2`。[链接](https://github.com/earendil-works/pi/pull/6090) |
| 4 | **#6099 Rename model key 'gpt-5.2-chat-latest' → 'gpt-5.2-chat'** | CLOSED | 修正模型 key 命名，避免不存在的 `latest` 后缀。[链接](https://github.com/earendil-works/pi/pull/6099) |
| 5 | **#6064 feat(experimental): pi orchestrator** | CLOSED | 新增实验性 `@earendil-works/pi-orchestrator` 包，通过本地 daemon + Unix socket 管理多 Pi 实例生命周期。[链接](https://github.com/earendil-works/pi/pull/6064) |
| 6 | **#6092 draft: hosted websearch** | CLOSED | 草案 PR，探索内置托管搜索工具，作者声明不打算合并，但为 #1589 提供参考实现。[链接](https://github.com/earendil-works/pi/pull/6092) |

---

## 5. 功能需求趋势

从今日 28 条 Issues 中提炼出以下方向：

1. **TUI 渲染与交互稳定性** — 滚动跳动、全屏重绘、tmux 兼容、viewport 跳变等反馈集中，是用户体验最敏感的领域。
2. **新 Provider / 模型支持** — Amazon Bedrock Mantle、Friendli、GPT-5.6 max thinking、scoped Anthropic keys，社区持续推动多后端兼容。
3. **嵌入式库（Library）场景** — 多个 issue 反映 pi 作为 `@earendil-works/pi-coding-agent` 被嵌入使用时 theme、extension runtime、session 生命周期的问题，说明"库化"使用正在增长。
4. **Session 与 Compaction 可靠性** — 会话文件夹碰撞、compaction 后 reload 异常、post-run 延续 bug，指向会话管理层需要更健壮的设计。
5. **RPC / 工具执行超时** — 硬编码 60s 超时已被修复，但长工具会话的稳定性仍是关注点。

---

## 6. 开发者关注点

- **痛点**：流式输出时 TUI 强制滚底（#5825）是讨论量最高的问题，直接影响日常使用。
- **痛点**：嵌入式库场景下 theme 未初始化、extension ctx stale（#6102/#6101），说明库化路径的文档和初始化流程需要补强。
- **高频需求**：新 Provider 接入（Bedrock Mantle、Friendli）和新模型能力（GPT-5.6 max thinking）是社区最活跃的功能请求方向。
- **信号**：`pi-orchestrator` 实验包的出现暗示官方可能在探索多实例编排能力，值得关注后续演进。

---

*数据来源：github.com/badlogic/pi-mono · 生成时间：2026-06-27*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-27（周六）

---

##  今日速览

社区进入高活跃期，围绕 **Mode B（qwen serve）生产化**、**Windows PowerShell 内存泄漏修复**、**多通道集成（Telegram/DingTalk/Chrome Extension）** 三条主线并行推进。值得关注的是，**PR #5892** 用 tree-kill 彻底解决了 Windows 下 PTY shell 进程树不回收的痛点，**PR #5888** 提出了 "qwen tag" 多玩家频道常驻 Agent 架构方案。安全层面，路径穿越（#5834）和负值参数绕过（#5905）两个漏洞均已合并修复。

---

## 🚀 版本 Release

**cua-driver-rs v0.6.8** — CUA Driver 预构建二进制更新（relative-coordinate fork）

- macOS：codesigned + notarized universal binary + `QwenCuaDriver.app`
- Linux：x86_64 + arm64（glibc 2.31  + arm64，未签名
- 详情：[c8](https://github.com/QwenLM/qwen-code/releases)

---

## 🔥 社区热点 Issues

### 1. #4175 — Mode B 生产化路线图规划（v0.16）
- **状态**：OPEN | 💬 42 条评论 | 👍 0
- **作者**：doudouOUC | 创建于 2026-05-15
- **重要性**：Stage 1 daemon 和单 workspace 重构已合并，Mode B 已可运行。此 Issue 追踪剩余工作直至 v0.16 production-ready，是理解 `qwen serve` 演进方向的核心讨论帖。
- **社区反应**：讨论热烈，涉及 auth 加固、session 管理、生产环境部署等多个子议题。

### 2. #5873 —  Windows 用一次工具开一个 PowerShell 直到 OOM
- **状态**：CLOSED | 💬 5 条评论 | 👍 0
- **作者**：ZCasual | 创建于 2026-06-25
- **重要性**：Windows 100% 复现的严重 Bug，每次工具调用泄漏一个 powershell 进程，最终 OOM。言辞激烈反映用户深受其苦。已由 PR #5892 修复。

### 3. #5882 — CI Agent 在共享 ECS Runner 上非隔离运行导致交叉污染
- **状态**：CLOSED（新） |  2 条评论 | 👍 0
- **作者**：yiliang114 | 创建于 2026-06-26
- **重要性**：CI 安全事件。#5874 的 triage workflow 误把评论贴到了 #5872，暴露共享 runner 的状态隔离缺陷。对 CI/CD 基础设施可靠性敲响警钟。

### 4. #5834 — Source 删除路径可逃逸 workspace sources 目录
- **状态**：CLOSED | 💬 2 条评论 | 👍 0
- **作者**：VectorPeak | 创建于 2026-06-24（注：Issue 原文创建 06-24，PR 合并 06-27）
- **重要性**：路径穿越漏洞。精心构造的 `sourceSlug` 包含 `../` 可逃逸到非预期目录。已由 PR #5829 修复。

### 5. #5819 — 升级后自动切换高单价模型浪费 token
- **状态**：OPEN | 💬 4 条评论 | 👍 0
- **作者**：aspnmy | 创建于 2026-06-24
- **重要性**：用户从 0.18.3 升级 0.19 后，setting.json 被自动修改为 DeepSeek-4 pro，扣费后才被发现。同时 0.19 中文变繁体问题加剧了 token 浪费。反映模型选择和升级策略缺乏用户确认机制。

### 6. #5677 — ACP 功能差距跟踪（cd/permissions/trust/lsp/setup-github）
- **状态**：OPEN | 💬 3 条评论 | 👍 0
- **作者**：doudouOUC | 创建于 2026-06-22
- **重要性**：ACP 协议的完整性直接影响 Qwen Code 作为后端被第三方 IDE 集成的能力。已跟踪 `/lsp`、`/permissions`、`/trust`、`/cd`、`/setup-github` 五个端点的实现进度。

### 7. #5800 — Ink Static 模式下回复超终端高度时末行被覆盖
- **状态**：OPEN | 💬 4 条评论 | 👍 0
- **作者**：MikeWang0316tw | 创建于 2026-06-24
- **重要性**：上游 Ink 渲染引擎 bug 波及 Qwen Code TUI，长回复场景下最后一行文字消失。影响所有使用默认 Static 模式的终端用户。

### 8. #5083 — Linux TUI 卡死，僵尸子进程未回收
- **状态**：OPEN | 💬 6 条评论 | 👍 0
- **作者**：kilowu | 创建于 2026-06-13
- **重要性**：与 #5873 类似的进程管理问题在 Linux 端的表现，涉及 MCP remote 连接场景下的进程生命周期管理。至今未解决。

### 9. #5905 — POST /workspace/settings 接受负值 cleanupPeriodDays
- **状态**：CLOSED | 💬 2 条评论 | 👍 0
- **作者**：russeell | 创建于 2026-06-26
- **重要性**：API schema 缺少 `minimum` 约束导致可通过 HTTP 请求写入非法配置值。已由 PR #5906 修复。

### 10. #5881 — 提议开放 Plan Approval Gate 给所有 plan 模式入口
- **状态**：OPEN（新） | 💬 3 条评论 | 👍 0
- **作者**：Alex-ai-future | 创建于 2026-06-26
- **重要性**：Plan Approval Gate 目前仅对 AUTO/YOLO 会话生效。作者提议扩展到用户手动触发的 plan 模式，让第二个模型审查计划质量。影响代码生成的安全护栏设计方向。

---

## 🔧 重要 PR 进展

### 1. PR #5892 — fix(core): tree-kill PTY shell tree on Windows to stop pwsh leak
- **状态**：CLOSED（已合并） | 作者：doudouOUC
- **内容**：修复 Windows 下 PTY 每次工具调用泄漏 powershell 进程的 P1 问题。在 `node-pty` 的 `kill()` 基础上补充 Windows `taskkill /T` 级联终止进程树。
- **关联**：解决 Issue #5873

### 2. PR #5890 — feat(loop): inject .qwen/loop.md task file at fire time via sentinels
- **状态**：OPEN | 作者：qqqys
- **内容**：为 `/loop` 命令新增持久化任务清单文件 `.qwen/loop.md`，由 sentinel 注入。长循环场景下无需每轮重述任务，提升 multi-shot agent 的持久化能力。

### 3. PR #5888 — feat(channels): qwen tag — RFC + Phase 0 (multiplayer channel-resident agent)
- **状态**：OPEN | 作者：qqqys
- **内容**：提出 "qwen tag" 架构 — 基于现有 channel adapter 和 `qwen serve` daemon 在聊天群（DingTalk 优先）中部署常驻多人 Agent。RFC + Phase 0 实现合并提交，是 channel 生态扩展的重要探索。

### 4. PR #5884 — feat(serve): add sessionless workspace remember
- **状态**：OPEN | 作者：callmeYe
- **内容**：新增 daemon workspace remember API，支持无需创建/加载 session 即可写入 managed memory 的隐藏 remember 任务。为外部 SDK 集成提供无状态记忆能力。

### 5. PR #5847 — feat(serve): runtime context injection for per-turn system-reminders
- **状态**：OPEN | 作者：callmeYe
- **内容**：新增 per-session 的 RuntimeContext KV 存储，外部调用者通过 daemon API 写入后在每次 UserQuery/Cron turn 中以 `<system-reminder>` 块注入。在静态 system prompt 和用户输入之间建立动态上下文层。

### 6. PR #5829 — fix(desktop): reject unsafe source slugs before deletion
- **状态**：CLOSED（已合并） | 作者：VectorPeak
- **内容**：在 source 删除路径前添加 slug 校验，拒绝含 `../` 或 `..\` 的路径穿越尝试。
- **关联**：修复 Issue #5834

### 7. PR #5906 — fix(serve): reject negative cleanupPeriodDays values
- **状态**：CLOSED（已合并） | 作者：russeell
- **内容**：为 `SettingDefinition` 增加 `minimum` 字段，为 `cleanupPeriodDays` 设置 `minimum: 0`，在 API schema 层面统一拦截负值。
- **关联**：修复 Issue #5905

### 8. PR #5807 — fix(core): ignore IDE configs from other workspaces
- **状态**：CLOSED（已合并） | 作者：seekskyworld
- **内容**：修复 IDE 连接选择时可能看到其他 workspace 过期配置的问题，跳过 `workspacePath` 不匹配的配置项，确保回退到正确 workspace。

### 9. PR #5898 — fix: mid-input skill command completion
- **状态**：OPEN | 作者：yiliang114
- **内容**：修复斜杠命令在非行首位置输入时无法触发自动补全的问题，支持 mid-input 模糊匹配、菜单导航和 token 替换。提升 slash command 的交互体验。

### 10. PR #5777 — feat(browser-ext): revive Chrome extension via daemon-direct architecture
- **状态**：OPEN | 作者：yiliang114
- **内容**：复苏已停更的 Chrome 扩展（#1432），从 Native Messaging 架构切换到本地 `qwen serve` daemon 直连方案。Side panel 通过 HTTP+SSE 与 daemon 通信，大幅降低浏览器端复杂度。

---

## 📊 功能需求趋势

基于近 24 小时 50 条 Issue + 50 条 PR 分析社区关注方向集中在：

| 趋势方向 | 热度 | 代表 Issue/PR |
|---------|------|--------------|
| **qwen serve / Mode B 生产化** | 🔥🔥🔥 | #4175, #5677, #5847, #5884 |
| **进程管理与资源泄漏** | 🔥🔥🔥 | #5873, #5083, #5892 |
| **多通道/外部集成** | 🔥🔥 | #5888 (DingTalk), #5907 (Telegram), #5777 (Chrome), #5901 (QQ Bot) |
| **安全与输入校验** | 🔥🔥 | #5834, #5905, #5055 (误报) |
| **IDE 插件稳定性** | 🔥🔥 | #4493 (Rider 登录), #2724 (IDEA+Ollama), #2678 (消息/停止按钮) |
| **CLI/TUI 渲染修复** | 🔥 | #5800, #5891, #5738 |
| **自动更新与分发** | 🔥 | #5780, #5831 (v0.19.2 发布失败) |

---

## ⚠️ 开发者高频痛点

### 1. 💰 模型费用不可控
Issue #5819 反映升级后自动切换高单价模型导致预存资金被扣光。**核心诉求**：模型变更需用户明确确认，提供费用预估或 spending cap。

### 2.  Windows 体验持续劣化
#5873（pwsh 泄漏）、#5800（渲染覆盖）、#2678（消息丢失+停止按钮失效）三管齐下，Windows 用户体感较差。PR #5892 修复了最严重的进程泄漏，但 UI 层问题仍待解。

### 3.  MCP Server 工具不可用
Issue #4218（UI 显示连接成功但模型无法调用工具）暴露 MCP 集成的状态同步问题，用户难以判断真实连接健康度。

### 4.  API 断流/超时常态化
#1002、#2938、#1111 等多个断流相关 Issue 长期流通（部分超半年），社区对 streaming 稳定性的耐心正在消耗。

### 5. 🔄 AI 辅助 PR 遗漏集成测试
Issue #5665 指出 AI 辅助生成的 PR 经常只更新单元测试而忽略 `integration-tests/`，导致 release 阶段集中暴露问题。需要 CI 策略层面的系统性解决。

### 6. ️ CI 基础设施隔离不足
Issue #5882 的交叉污染事件和 #5027 的 PR 耗时过长（~25min 关键路径）指向同一根因：共享 runner 资源竞争和缺乏硬隔离。merge queue 和分片测试正在推进。

---

> **日报说明**：本报告基于 QwenLM/qwen-code 仓库 2026-06-26 10:00 ~ 2026-06-27 10:00 UTC 期间活跃的 Issue 和 PR 生成。数据统计：Issue 50 条（选取 Top 30 by 评论数展示 10 条）、PR 50 条（选取 Top 20 by 评论数展示 10 条）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-06-27 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 1. 今日速览

今日社区无新版本发布，但 PR 活跃度极高（50 条更新），主要集中在**新 Provider 集成（OpenModel）**、**权限系统增强（execpolicy 持久规则 & permissions.toml deny/allow/ask）**、以及**依赖项批量升级（Dependabot 系列）**。Issues 方面，Plan/Agent 模式混淆、YOLO 模式行为回归、install.sh 端点返回 HTML 等问题引发较多讨论。维护者 Hmbown 继续推进 v0.8.59 发布跟踪及 legacy 代码清理工作。

---

## 2. 版本发布

过去 24 小时内无新版本发布。当前跟踪中的发布议题：

- **v0.8.59**（[#3063](https://github.com/Hmbown/CodeWhale/issues/3063)）— CLOSED，包含 TUI mouse-report 输入泄漏修复及 issue/PR 队列分流
- **v0.8.71**（[#3490](https://github.com/Hmbown/CodeWhale/issues/3490)）— OPEN，Legacy follow-up 与 dead-code 盘点
- **v0.8.70** 相关议题（[#861](https://github.com/Hmbown/CodeWhale/issues/861)、[#3016](https://github.com/Hmbown/CodeWhale/issues/3016)）— 已关闭，涉及推理内容完整性修复

---

## 3. 社区热点 Issues

以下按关注度与影响力排序：

### 🔴 #1186 — execpolicy 类型化持久权限规则（OPEN · 💬10）
社区高度关注的核心功能请求。提议为执行策略层增加类型化持久权限规则，支持按工具名、命令前缀、工作区路径模式进行 allow/deny/ask 控制。这是构建安全多 Agent 工作流的基础能力。
→ [Issue #1186](https://github.com/Hmbown/CodeWhale/issues/1186)

### 🔴 #3568 — Plan 和 Agent 模式再次混淆（OPEN · 💬5 · 👍1）
用户上传了具体复现案例（含 chat export），报告 AI 未能感知 plan/agent 切换，在 plan 模式下执行了文件修改操作。这是长期存在的 UX 痛点，社区期待根本性修复。
→ [Issue #3568](https://github.com/Hmbown/CodeWhale/issues/3568)

### 🟠 #3657 — Editor 冻结并崩溃（OPEN · 💬3）
Reporter 描述在 Composer 草稿模式下按 Ctrl-O 打开编辑器会导致整个 TUI 冻结、需强制 kill 进程。影响日常编辑工作流，需排查 Vi/editor 集成代码路径。
→ [Issue #3657](https://github.com/Hmbown/CodeWhale/issues/3657)

### 🟠 #3582 — install.sh 端点返回 HTML 而非 Shell 脚本（CLOSED · 💬4）
文档推荐的 `curl install.sh | sh` 命令失效，因为终结点返回的是 Next.js HTML 页面。虽已关闭，反映了 CI/CD 流程或 CDN 配置需要关注。
→ [Issue #3582](https://github.com/Hmbown/CodeWhale/issues/3582)

### 🟠 #861 — Thinking collapse 多根因问题（CLOSED · 💬8）
社区内最广泛报告的 bug 之一：思考块冻结、静默截断或丢失 reasoning_content。该 issue 的关闭意味着多根因已在 #3016 等跟进 PR 中修复。
→ [Issue #861](https://github.com/Hmbown/CodeWhale/issues/861)

### 🟡 #2870 — 命令边界重构 EPIC（OPEN · 💬7）
跟踪 #2791 的阶段性重构，旨在理清命令边界架构。对贡献者是较好的切入点，涉及 TUI 核心模块解耦。
→ [Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)

### 🟡 #3638 — 暴露 main prompt 支持更广泛用例（OPEN · 💬1）
用户希望将 DeepSeek TUI 应用于文学创作、背景围读等非软件工程场景，建议将硬编码的 AGENTS.md/personality/constitute 改为 config 目录引用，支持 fallback。
→ [Issue #3638](https://github.com/Hmbown/CodeWhale/issues/3638)

### 🟡 #1846 — 审批前无法看到变更内容（CLOSED · 💬1 · 👍1）
用户要求在选择 approve/deny 时能查看实际 diff，而非仅依赖弹窗描述。已关闭，反映了审批面板 UX 改进方向。
→ [Issue #1846](https://github.com/Hmbown/CodeWhale/issues/1846)

### 🟡 #1679 — Windows 11 下 SSE 多 Agent 并行 45s 超时（CLOSED · 💬4）
Windows 平台上多 Agent 同时探活成功但正式执行失败，最终降级为串行审查。涉及跨平台 SSE transport 稳定性。
→ [Issue #1679](https://github.com/Hmbown/CodeWhale/issues/1679)

### 🟡 #2967 — Telegram Bridge 弹性加固（OPEN · 💬1）
将生产级行为（流式更新、typing、MarkdownV2、chunking、offset 安全、退避）整合到单一 issue 中拆分 PR。对移动端集成者是重要方向。
→ [Issue #2967](https://github.com/Hmbown/CodeWhale/issues/2967)

---

## 4. 重要 PR 进展

### 🟢 #3677 — feat(provider): 添加 OpenModel 支持（CLOSED）
**核心变更：** 将 OpenModel 作为一等公民 Provider 集成到共享配置、CLI 模型注册表、TUI 配置/Provider 选择器中，通过 Anthropic Messages 线路协议路由，默认模型为 `deepseek-v4-flash`。采摘自社区贡献者 @noaft 的 #3585 并保留署名。
→ [PR #3677](https://github.com/Hmbown/CodeWhale/pull/3677)

### 🟢 #3664 — fix(tui): 将 Auto 模式从 YOLO bypass 中拆分（CLOSED）
**核心变更：** 将 Auto 设为第四个 TUI 模式，与 YOLO（真正的无提示 Bypass）分离。Auto 使用启用 shell 的 Agent 策略加确定性风险审查，更新了模式解析、hotbar/footer/header 渲染、exec policy 映射及全部 7 种语言的 locale 字符串。解决了 #3606 中 YOLO 模式下仍要求确认的问题。
→ [PR #3664](https://github.com/Hmbown/CodeWhale/pull/3664)

### 🟢 #3650 — permissions.toml: 添加 deny/allow/ask action（CLOSED）
**核心变更：** 为 `permissions.toml` 规则增加 `action = "deny" | "allow" | "ask"` 字段，让用户能在工具调用前精细化控制权限。与 #1186 的 execpolicy 请求形成互补。
→ [PR #3650](https://github.com/Hmbown/CodeWhale/pull/3650)

### 🟢 #3575 — feat(memory): 接入 Moraine MCP 作为 recall 工具源（OPEN）
**核心变更：** 将 Moraine MCP（`moraine mcp` stdio 服务器）接入 CodeWhale 默认 MCP 配置模板，使 Agent 获得 search_sessions / open / list_sessions / file_attention 等回忆工具。包含 `[memory] moraine_fallback` 配置开关。
→ [PR #3575](https://github.com/Hmbown/CodeWhale/pull/3575)

### 🟢 #3665 — fix(telegram): 防抖 turn sequence 写入（CLOSED）
**核心变更：** 改进 Telegram bridge 的 turn-stream `lastSeq` 写入——每个 SSE 事件不再立即写盘，改为防抖写入；流退出时强制 flush。属于 #2967 弹性加固的一部分。
→ [PR #3665](https://github.com/Hmbown/CodeWhale/pull/3665)

### 🟢 #3674 — refactor(runtime-api): 提取 auth helpers（CLOSED）
**核心变更：** 将 runtime API 的 auth/token/cookie 辅助函数抽取到 `runtime_api/auth.rs`，保持 `runtime_api.rs` 专注于路由设置。行为等价重构。
→ [PR #3674](https://github.com/Hmbown/CodeWhale/pull/3674)

### 🟢 #3675 / #3668 — build(deps): rusqlite 升级
**核心变更：** 将 `rusqlite` 从 0.32.1 升级至 0.39.0（刻意跳过 0.40.1，因 `libsqlite3-sys` 存在稳定版验证问题）。涉及多个 PR 协调合并。
→ [PR #3675](https://github.com/Hmbown/CodeWhale/pull/3675) · [PR #3668](https://github.com/Hmbown/CodeWhale/pull/3668)

### 🟢 #3673 — fix(hash): 支持 sha2 0.11 digest hex 格式（CLOSED）
**核心变更：** 配合 `sha2` 0.11 升级，将 SHA-256 摘要输出从直接 `LowerHex` 格式化改为显式 byte-to-hex 辅助函数，确保 CLI、TUI、skills、Fleet、RLM、tool receipts 等全链路哈希字符串稳定。
→ [PR #3673](https://github.com/Hmbown/CodeWhale/pull/3673)

### 🟢 #3676 / #3621 — fix(provider-links): 更新 Provider 文档链接 fallback（CLOSED）
**核心变更：** 将 `/links` 端点中已过期的 `codewhale.dev/docs/providers` URL 更新为当前文档页，并为 Qianfan 添加专属文档链接。
→ [PR #3676](https://github.com/Hmbown/CodeWhale/pull/3676)

### 🟡 #3607 — chore: 重建 stale issue 清理流程（OPEN）
**核心变更：** 创建缺失的 GitHub stale-policy 标签（`needs-info`、`stale`、`keep-open`、`pinned`），让 bug + needs-info 的 issue 能在没有 `release-blocker`/`security`/`keep-open`/`pinned` 标签时自动过期。
→ [PR #3607](https://github.com/Hmbown/CodeWhale/pull/3607)

---

## 5. 功能需求趋势

从近期 Issues 和 PR 中可归纳出以下五大方向：

### 🔐 1. 执行安全与权限控制（最高优先级）
- **execpolicy 持久规则**（#1186）— 按工具名/命令前缀/路径模式配置 allow/deny/ask
- **permissions.toml 增强**（#3650 PR 已合并）— deny/allow/ask action 字段
- **YOLO 模式行为修正**（#3606、#3664 PR 已合并）— Auto 与 YOLO 分离

社区对"安全地自主执行"有强烈且持续的需求，核心矛盾是灵活性与安全性的平衡。

### 🧠 2. 推理完整性与稳定性
- **Thinking collapse 修复**（#861、#3016 已关闭）
- **Reasoning-content 完整性**在 DeepSeek 系列模型中的 400 错误规避
- **Thinking block 流式渲染**的 UX 改进

### 🔌 3. Provider/模型生态扩展
- **OpenModel 一等公民支持**（#3677 PR 已合并）
- **多 Provider 统一管理**（shared registry、CLI 注册表、TUI 选择器）
- **自定义 prompt/persona 支持**（#3638）

### 📱 4. 多平台与集成
- **Telegram Bridge 生产化**（#2967）— 流式更新、typing、MarkdownV2、chunking、offset 安全
- **Windows 平台 SSE 稳定性**（#1679）
- **IME/CJK 输入法**在 Composer 中的占位符冲突（#2612）

### 🏗️ 5. 代码质量与架构治理
- **Dead-code 盘点与清理**（#3490）
- **命令边界重构 EPIC**（#2870）
- **Runtime API auth 模块抽离**（#3674）
- **依赖项持续升级**（今日大量 Dependabot + 手动合并 PR）

---

## 6. 开发者关注点与高频痛点

| 痛点 | 典型 Issue | 频率/影响 |
|------|-----------|-----------|
| **Plan/Agent 模式状态混淆** | [#3568](https://github.com/Hmbown/CodeWhale/issues/3568) | 反复出现，长期未根治 |
| **审批弹窗体验差** — 无法看到变更 diff | [#1846](https://github.com/Hmbown/CodeWhale/issues/1846)、[#3380](https://github.com/Hmbown/CodeWhale/issues/3380) | 多个 issue 反复提及 |
| **install 脚本失效** — curl 得到 HTML | [#3582](https://github.com/Hmbown/CodeWhale/issues/3582) | 影响新用户首次体验 |
| **Token 消耗高于竞品**（vs Codex CLI） | [#2953](https://github.com/Hmbown/CodeWhale/issues/2953)、[#2956](https://github.com/Hmbown/CodeWhale/issues/2956)、[#2957](https://github.com/Hmbown/CodeWhale/issues/2957) | 基准对比方向持续优化 |
| **编辑器/IME 冲突导致崩溃** | [#3657](https://github.com/Hmbown/CodeWhale/issues/3657)、[#2612](https://github.com/Hmbown/CodeWhale/issues/2612) | 终端编辑器集成是 TUI 特有痛点 |
| **多 Agent 并行在 Windows 下超时** | [#1679](https://github.com/Hmbown/CodeWhale/issues/1679) | 跨平台网络栈差异 |
| **l18n 维护困难** — 5000+ 行硬编码 | [#3537](https://github.com/Hmbown/CodeWhale/issues/3537) | 技术债，阻碍社区翻译贡献 |
| **app-server stdio 模式流式失效** | [#1490](https://github.com/Hmbown/CodeWhale/issues/1490) | 影响第三方 IDE 集成 |

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*