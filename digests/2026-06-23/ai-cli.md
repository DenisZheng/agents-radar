# AI CLI 工具社区动态日报 2026-06-23

> 生成时间: 2026-06-23 00:39 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 — 2026-06-23

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从"能用"到"好用"的深水区**。MCP 协议已成为各工具标配能力，但实现质量和生态完善度参差不齐，多个工具出现 MCP 相关回归 Bug。**跨平台稳定性**成为集体短板——Windows 平台问题在 Claude Code、Codex、Copilot CLI 中集中爆发，Android/Termux 支持在多个工具中断裂。**子代理/多 agent 编排**进入攻坚期，Gemini CLI、OpenCode、DeepSeek TUI 均面临并发可靠性和行为可控性挑战。与此同时，**费率透明度和计费信任**正在成为付费用户的核心诉求，Codex 和 Copilot CLI 社区对此反应激烈。整体来看，各工具在核心执行稳定性、终端体验细节和企业级部署能力上仍有大量欠账。

---

## 2. 各工具活跃度对比

| 工具 | Issues（24h） | PRs（24h） | Release | 版本 |
|------|:---:|:---:|---|---|
| **Claude Code** | ~50+ | 4（更新） | ✅ 新版本 | v2.1.186 |
| **OpenAI Codex** | ~50 | 10+（含合并） | ✅ 新版本 | rust-v0.142.0 |
| **Gemini CLI** | 50 | 39 | ❌ 无 | — |
| **Copilot CLI** | 19 | 0 | ✅ 连续发布 | v1.0.64-2 → v1.0.64-3 |
| **Kimi Code CLI** | ~10（新增） | 3 | ✅ 新版本 | v1.48.0 |
| **OpenCode** | ~50+ | 10+ | ❌ 无 | — |
| **Pi** | 46 | 12（11合并） | ✅ 新版本 | v0.79.10 |
| **Qwen Code** | 50 | 50 | ✅ nightly | v0.18.5-nightly |
| **DeepSeek TUI** | ~30 | 10+ | ✅ 新版本 | v0.8.64 |

> **活跃度排序（综合）**：Gemini CLI ≈ Qwen Code > OpenCode ≈ Pi > Claude Code ≈ Codex > DeepSeek TUI > Copilot CLI > Kimi Code CLI

---

## 3. 共同关注的功能方向

### 🔌 MCP 生态完善（9/9 工具全部涉及）
- **Claude Code** v2.1.186 刚上线 MCP 登录/登出 CLI 化，但子代理等待 MCP 审批仍会卡住
- **OpenCode** 出现 MCP 图片附件丢失、object 参数序列化错误等多处回归
- **Kimi Code CLI** 的 ACP 模式不加载 MCP、web 模式路径错误
- **Copilot CLI** MCP 变量插值缺失、instructions 被忽略
- **Qwen Code** 正在推进 MCP 服务器热重载
- **Gemini CLI** 正在实现 MCP Elicitation（表单+URL）新协议能力
- **Pi** 和 **Codex** 也在持续完善 MCP 相关功能

### 🖥️ 跨平台稳定性（7/9 工具涉及）
- **Claude Code**：Windows 白屏+数据丢失、Android/Termux 无法运行、macOS Keychain 失败
- **Codex**：WSL 启动失败、Windows 沙箱崩溃、线程消失
- **Copilot CLI**：WSL 凭证管理问题
- **Gemini CLI**：Wayland 下浏览器子代理失败
- **Kimi Code CLI**：Linux 子进程挂起
- **OpenCode**：Worker 终止/崩溃
- **DeepSeek TUI**：Linux/Windows 沙箱隔离加固

### 🤖 子代理/多 Agent 编排（6/9 工具涉及）
- **Gemini CLI**：子代理挂起、误报成功（P1 级）
- **OpenCode**：Worker 终止、多 subagent 并行崩溃
- **DeepSeek TUI**：Fleet worker 并发时 TUI 冻结
- **Claude Code**：子代理等待 MCP 审批卡住
- **Kimi Code CLI**：子进程 detach 后 CLI 挂起
- **Codex**：code-mode 正在系统性加固类型系统和可靠性

### 💰 费率与计费透明度（3/9 工具涉及，但热度极高）
- **Codex**：gpt-5.5 费率暴涨 10-20 倍（239 👍，117 评论）
- **Copilot CLI**：积分扣除比例异常、重启消耗积分
- **Claude Code**：服务端临时限流影响工作流连续性

### 🔒 安全与权限管理（5/9 工具涉及）
- **Claude Code**：企业权限规则被空服务器设置覆盖（安全策略绕过）
- **Gemini CLI**：Auto Memory 密钥泄露风险、信任对话框显示反向 hook 信息
- **Qwen Code**：autofix 可被恶意 issue 文本绕过
- **Pi**：默认系统提示增加密钥泄露防护规则
- **DeepSeek TUI**：v0.8.64 安全加固版

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 | 差异化亮点 |
|------|---------|---------|---------|-----------|
| **Claude Code** | 企业级全功能 AI 编码助手 | 专业开发者、企业团队 | TypeScript → 原生二进制 | MCP 认证 CLI 化、Workflows 管理、最完善的权限体系 |
| **OpenAI Codex** | OpenAI 生态深度集成 | OpenAI Pro 用户、数据科学家 | Rust 核心 + Electron UI | code-mode（类 Jupyter）、插件生态、OpenTelemetry 集成 |
| **Gemini CLI** | Google 生态 Agent 平台 | Google Cloud 用户、研究者 | TypeScript/Node | MCP Elicitation 新协议、Auto Memory 系统、A2A server |
| **Copilot CLI** | GitHub 工作流无缝衔接 | GitHub 重度用户、企业 DevOps | TypeScript | Skills 体系、VS Code companion、GitHub 生态集成 |
| **Kimi Code CLI** | 轻量级多模式 CLI | 个人开发者、IDE 集成场景 | Rust (kosong) + Go | ACP 模式、web 模式、多入口统一 |
| **OpenCode** | 开源可自托管 AI 编码平台 | 开源社区、自托管需求用户 | Bun/TypeScript + Effect | 插件 Hook API、server mode、事件溯源架构 |
| **Pi** | 可扩展的 AI 编程 TUI 框架 | 扩展开发者、多 Provider 用户 | TypeScript | 扩展 API 最丰富、Provider 生态最广、可编程平台 |
| **Qwen Code** | 通义千问生态 CLI | 阿里云用户、国内开发者 | TypeScript | ACP/daemon 远程模式、国内 Provider 优先支持 |
| **DeepSeek TUI** | 多 Provider 通用编码平台（原 DeepSeek 专用） | 国内开发者、多模型用户 | TypeScript | 品牌中性化、国内 Provider 全覆盖（千帆/百炼/SiliconFlow）、Fleet 子代理 |

---

## 5. 社区热度与成熟度

### 🔥 高活跃度 + 快速迭代
| 工具 | 特征 |
|------|------|
| **Gemini CLI** | 50 Issues + 39 PRs（最高），P1 bug 密集，安全修复和核心稳定性 PR 快速推进 |
| **Qwen Code** | 50 Issues + 50 PRs（PR 数最高），AI 机器人批量 PR 引发质量管控讨论，参数验证系统性清理 |
| **OpenCode** | 50+ Issues + 10+ PRs，内存问题 99 评论集中排查，核心维护者高频合并 PR |

### ⚡ 中等活跃度 + 稳定迭代
| 工具 | 特征 |
|------|------|
| **Pi** | 46 Issues + 12 PRs（11 合并），PR 合并率最高（92%），扩展 API 持续完善 |
| **Claude Code** | 社区最高赞 Issue 集中（369 👍 多账户切换），但 PR 产出偏低（仅 4 更新），版本发布节奏稳定 |
| **Codex** | 费率异常引发社区情绪激烈，code-mode 快速迭代，协议兼容性加固 |

### 📉 低活跃度 / 早期阶段
| 工具 | 特征 |
|------|------|
| **Copilot CLI** | 仅 19 Issues 活跃，无 PR 更新，连续补丁发布但社区互动偏弱 |
| **Kimi Code CLI** | Issue 总量较小，MCP 相关 Bug 集中，v1.48.0 刚发布 |
| **DeepSeek TUI** | 处于品牌转型期（DeepSeek → CodeWhale），多 Provider 路由架构重构中 |

---

## 6. 值得关注的趋势信号

### 📌 趋势一：MCP 协议从"能用"走向"工程化"
各工具不再满足于基本 MCP 支持，开始推进认证流程 CLI 化（Claude Code）、Elicitation 交互协议（Gemini CLI）、热重载（Qwen Code）。**对开发者**：MCP 正在成为 AI CLI 的"USB 接口"标准，投资 MCP 工具链建设的回报期即将到来。

### 📌 趋势二：子代理可靠性是下一个竞争焦点
Gemini CLI、OpenCode、DeepSeek TUI 均在 P0/P1 级 bug 上卡壳。**对开发者**：多 agent 编排尚未到生产可用阶段，单 agent 工作流仍是当前最稳妥的选择。

### 📌 趋势三：Windows 平台正在成为"二等公民"
Claude Code、Codex、Copilot CLI 的 Windows 问题持续数月未根治。**对开发者**：如团队以 Windows 为主力平台，需重点评估各工具的 Windows 兼容性，或准备 WSL 作为兜底方案。

### 📌 趋势四：费率透明度正在影响用户留存
Codex 的 239 👍 费率异常 Issue 和 Copilot CLI 的计费争议表明，**AI 工具的定价模型正在从"按需付费"走向"可预测消费"**。对技术决策者：需要更精细的用量监控和预算管控机制。

### 📌 趋势五：国内 Provider 生态加速成熟
DeepSeek TUI 集中提交百度千帆、阿里云百炼、SiliconFlow 等国内 Provider 路由，Qwen Code 优先支持国内服务。**对国内开发者**：国产模型 + 国产 CLI 的工具链正在形成闭环，值得关注。

### 📌 趋势六：AI 自动化流程的安全防护成为新议题
Qwen Code 的 autofix 绕过、Gemini CLI 的 Auto Memory 密钥泄露、Pi 的密钥泄露防护规则表明，**AI Agent 操作的安全边界正在成为新的工程挑战**。对技术决策者：在引入自动化 triage/autofix 流程前，需建立对应的安全审计机制。

---

> **报告说明**：本报告基于 2026-06-23 各工具 GitHub 社区公开数据生成，数据统计窗口为过去 24 小时。Issue/PR 数量为近似值，实际数字可能因 GitHub 分页和时区差异略有出入。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据来源：** [anthropics/skills](https://github.com/anthropics/skills) | **截止：** 2026-06-23

---

## 一、热门 Skills 排行

以下按社区讨论热度（评论数、👍、Issue 活跃度）综合排序：

| # | Skill / PR | 功能 | 状态 | 热度 |
|---|-----------|------|------|------|
| 1 | **skill-creator 评估修复** ([#1298](https://github.com/anthropics/skills/pull/1298) / [#556](https://github.com/anthropics/skills/issues/556)) | 修复 `run_eval.py` 在 Windows 上始终报告 0% recall 的严重 bug，涉及流读取、触发检测、并行工作器 | 🟠 Open | 🔥🔥🔥 |
| 2 | **ODT Skill** ([#486](https://github.com/anthropics/skills/pull/486)) | 创建、填充、读取、转换 OpenDocument 格式文件（.odt/.ods），支持 LibreOffice 文档工作流 | 🟠 Open | 🔥🔥 |
| 3 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质量控制：防止孤行、断段、编号错位等常见排版问题 | 🟠 Open | 🔥🔥 |
| 4 | **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 两个"元 Skill"——分别对 Skills 进行质量五维分析（结构/安全/性能等）和安全审计 | 🟠 Open | 🔥🔥 |
| 5 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 全栈测试模式指南：测试哲学、单元测试 AAA 模式、React 组件测试、边界用例 | 🟠 Open | 🔥🔥 |
| 6 | **ServiceNow Platform** ([#568](https://github.com/anthropics/skills/pull/568)) | 覆盖 ITSM/ITOM/ITAM/FSM/SecOps/IntegrationHub 的 ServiceNow 全平台助手 | 🟠 Open | 🔥🔥 |
| 7 | **AURELION Skill Suite** ([#444](https://github.com/anthropics/skills/pull/444)) | 四件套认知+记忆框架：结构化思维模板、顾问代理、记忆管理 | 🟠 Open | 🔥🔥 |
| 8 | **shodh-memory** ([#154](https://github.com/anthropics/skills/pull/154)) | AI Agent 跨会话持久化记忆系统，维护上下文连续性 | 🟠 Open | 🔥🔥 |

> **注：** 前 3 名（skill-creator 评估修复、ODT、typography）同时也是 Issue 讨论最集中的方向，社区对"评估基础设施可靠性"和"文档质量"的关注度极高。

---

## 二、社区需求趋势

从 Issues 中提炼出以下五大期待方向：

### 1. 🏢 企业级协作与分发
- **组织级 Skill 共享** ([#228](https://github.com/anthropics/skills/issues/228), 14 条评论, 👍7)：用户强烈要求在 Claude.ai 内直接共享 Skill，而非手动下载 `.skill` 文件再通过 Slack/Teams 分发。这是当前讨论量最高的 Issue。
- **Skill 信任边界** ([#492](https://github.com/anthropics/skills/issues/492))：社区 Skill 被发布在 `anthropic/` 命名空间下，存在冒充官方 Skill 的信任风险，需要命名空间隔离机制。

### 2. 🔒 Agent 安全与治理
- **Agent Governance** ([#412](https://github.com/anthropics/skills/issues/412))：社区提出需要专门的 AI Agent 治理模式 Skill——策略执行、威胁检测、信任评分、审计追踪。
- **SharePoint 安全访问** ([#1175](https://github.com/anthropics/skills/issues/1175))：在 Skill 中嵌入访问控制逻辑的安全/上下文窗口权衡问题。

### 3. 🧠 记忆与状态管理
- **compact-memory** ([#1329](https://github.com/anthropics/skills/issues/1329))：用符号化紧凑记号替代冗长的散文式 Agent 笔记，减少上下文占用。
- **shodh-memory** ([#154](https://github.com/anthropics/skills/pull/154))：跨会话持久化记忆系统。

### 4. 🔌 平台互操作
- **Expose Skills as MCPs** ([#16](https://github.com/anthropics/skills/issues/16))：将 Skill 能力以 MCP 协议暴露，使 `algorithmic-art` 等 Skill 变成可调用的 API。
- **AWS Bedrock 支持** ([#29](https://github.com/anthropics/skills/issues/29))：社区希望 Skills 能在 Bedrock 环境运行。

### 5. 🛠️ 基础设施健壮性
- **Windows 兼容性** ([#1061](https://github.com/anthropics/skills/issues/1061), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050))：多个 PR/Issue 聚焦 Windows 上 `subprocess`、编码（cp1252）、管道选择的兼容问题。
- **YAML 解析健壮性** ([#361](https://github.com/anthropics/skills/pull/361), [#362](https://github.com/anthropics/skills/pull/362))：修复 description 字段中未引号 YAML 特殊字符导致的静默解析失败和 UTF-8 panic。

---

## 三、高潜力待合并 Skills

以下 PR 社区活跃度高、功能明确，有较大合并潜力：

| PR | 理由 | 链接 |
|----|------|------|
| **PR #509** `CONTRIBUTING.md` | 直接解决仓库社区健康评分仅 25% 的问题，属于低争议高价值基础设施补全 | [链接](https://github.com/anthropics/skills/pull/509) |
| **PR #361** YAML 预解析校验 | 修复 `quick_validate.py` 对特殊字符的静默解析失败，已有 10+ 独立复现报告 | [链接](https://github.com/anthropics/skills/pull/361) |
| **PR #362** UTF-8 panic 修复 | 防止多字节字符导致 Rust 层 panic，影响所有非 ASCII Skill 名称 | [链接](https://github.com/anthropics/skills/pull/362) |
| **PR #538/#539/#541** PDF & DOCX 修复三连 | 修复大小写敏感引用、YAML 解析、书签 ID 碰撞——均为明确的 bug 修复，合并阻力小 | [538](https://github.com/anthropics/skills/pull/538) / [539](https://github.com/anthropics/skills/pull/539) / [541](https://github.com/anthropics/skills/pull/541) |
| **PR #723** testing-patterns | 全栈测试指南，社区对"测试 Skill"方向有明确需求，内容完整度高 | [链接](https://github.com/anthropics/skills/pull/723) |
| **PR #210** frontend-design 改进 | 提升前端设计 Skill 的可操作性，解决指令模糊导致 Claude 执行偏差的问题 | [链接](https://github.com/anthropics/skills/pull/210) |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是"信任基础设施"——从 Skill 命名空间安全（#492）、评估系统可靠性（#556）、到 Agent 治理模式（#412），社区不再只关注 Skill 功能本身，而是迫切要求建立一套可信赖的 Skill 分发、验证与治理体系。**

---

# Claude Code 社区动态日报 — 2026-06-23

---

## 1. 今日速览

Claude Code 发布 **v2.1.186**，新增 `claude mcp login/logout` CLI 命令，支持非交互式 MCP 服务器认证，并改进了 `/workflows` 的状态过滤功能。社区讨论热度最高的话题集中在**终端复制粘贴格式问题**（#18170，265 赞）和**移动端多账户切换**（#36151，369 赞），同时 Windows 平台的数据丢失和会话持久化问题持续引发关注。

---

## 2. 版本发布

### v2.1.186

- **MCP 认证 CLI 化**：新增 `claude mcp login <name>` 和 `claude mcp logout <name>` 命令，无需打开交互式 `/mcp` 菜单即可完成 MCP 服务器认证；支持 `--no-browser` 标准输入重定向，方便在 SSH 环境下完成认证流程。
- **Workflows 状态过滤**：在 `/workflows` 界面新增按状态筛选功能（按 `f` 键），提升多工作流场景下的管理效率。

---

## 3. 社区热点 Issues

以下按讨论热度和影响力排序，精选 10 个最值得关注的 Issue：

### 🔴 #18170 — 终端复制粘贴包含多余缩进和尾部空格
- **链接**：https://github.com/anthropics/claude-code/issues/18170
- **数据**：124 评论 | 265 👍 | 自 2026-01-14 持续至今
- **为什么重要**：这是社区点赞量最高的 Issue 之一。从 Claude Code 终端输出复制文本（段落或代码块）时，每行开头会携带与提示符对齐的制表符/空格，行尾有多余空格，严重影响粘贴到编辑器或其他工具后的格式。属于高频日常痛点，几乎每个用户都会遇到。

### 🔴 #36151 — Claude 移动端 App 多账户切换（无需共享邮箱）
- **链接**：https://github.com/anthropics/claude-code/issues/36151
- **数据**：103 评论 | 369 👍 | 自 2026-03-19 持续至今
- **为什么重要**：社区**点赞量最高**的 Issue（369 👍）。用户需要在 Claude 移动 App 中切换多个账户（如工作和个人），但当前缺乏原生支持，被迫使用共享邮箱等变通方案。这反映了 Claude 在多账户/多租户场景下的产品缺口。

### 🟡 #50270 — v2.1.113+ 在 Termux/Android 上无法运行
- **链接**：https://github.com/anthropics/claude-code/issues/50270
- **数据**：55 评论 | 51 👍 | 自 2026-04-18 持续至今
- **为什么重要**：v2.1.113 起 Claude Code 从 JavaScript 入口切换为原生 glibc Linux 二进制，导致 Android/Termux 环境完全无法运行（Android 内核拒绝 glibc 二进制）。55 条评论说明受影响用户群体不小，且至今无官方修复。

### 🟡 #53915 — API 速率限制错误（服务端临时限流）
- **链接**：https://github.com/anthropics/claude-code/issues/53915
- **数据**：60 评论 | 20 👍 | 自 2026-04-27 持续至今
- **为什么重要**：用户频繁遇到 "Server is temporarily limiting requests" 错误，与个人用量限额无关，而是服务端临时限流。60 条评论表明这是普遍性问题，影响开发工作流的连续性。

### 🟡 #60226 — Claude 自我识别分析缺陷后仍继续输出
- **链接**：https://github.com/anthropics/claude-code/issues/60226
- **数据**：45 评论 | 自 2026-05-18 持续至今
- **为什么重要**：Claude 在分析过程中会指出当前分析的缺陷或数据缺口，但不会因此暂停或拒绝输出，而是继续完成可能不完整的分析。这涉及 AI 可靠性和"自我认知"问题，45 条评论中有大量关于模型行为一致性的讨论。

### 🟡 #29937 — tmux 中终端渲染错乱（文本重叠覆盖）
- **链接**：https://github.com/anthropics/claude-code/issues/29937
- **数据**：23 评论 | 50 👍 | 自 2026-03-02 持续至今
- **为什么重要**：在 tmux 中使用 Claude Code 时，文本输出会重叠和覆盖已有内容。tmux 是开发者常用工具，此问题影响大量 Linux/macOS 开发者。50 点赞但 23 条评论说明用户多选择点赞而非复现报告。

### 🟢 #17968 — 支持 JSONC 格式 settings 文件
- **链接**：https://github.com/anthropics/claude-code/issues/17968
- **数据**：16 评论 | 87 👍 | 自 2026-01-13 持续至今
- **为什么重要**：JSON 不支持注释，导致用户不得不在 `settings.json` 中使用 `_comment` 等非标准字段来记录配置决策。支持 JSONC（带注释的 JSON）是社区呼声很高的改进，87 点赞说明广泛需求。

### 🟢 #51143 — Windows Claude Desktop 持续白屏
- **链接**：https://github.com/anthropics/claude-code/issues/51143
- **数据**：15 评论 | 12 👍 | 自 2026-04-20 持续至今
- **为什么重要**：Windows 桌面版 Claude Code 出现持续性白屏，多次重装无效，Cowork 功能完全不可用。Windows 用户群体庞大，此类阻断性 Bug 影响严重。

### 🟢 #53717 — Windows 桌面版会话内容丢失（数据持久化失败）
- **链接**：https://github.com/anthropics/claude-code/issues/53717
- **数据**：10 评论 | 4 👍 | 自 2026-04-27 持续至今
- **为什么重要**：Windows 桌面版自动更新后，侧边栏显示会话列表但所有消息内容缺失，且内容未持久化到 `claude-code-sessions` JSONL 文件。这是**数据丢失**级别的问题，与 #51143 共同指向 Windows 桌面版的稳定性危机。

### 🟢 #70181 — 空服务器管理设置覆盖本地权限规则
- **链接**：https://github.com/anthropics/claude-code/issues/70181
- **数据**：1 评论 | 自 2026-06-23 新增
- **为什么重要**：当企业部署 `/etc/claude-code/managed-settings.json` 包含权限规则时，若服务器返回空设置（304 缓存），会静默覆盖本地 `managed-settings.json`，导致 deny/allow 规则全部失效。这是**安全策略绕过**问题，对企业用户影响重大。

---

## 4. 重要 PR 进展

过去 24 小时内仅有 4 个 PR 更新，以下全部列出：

### PR #70173 — 修复 `/clean_gone` 无法检测已删除分支
- **链接**：https://github.com/anthropics/claude-code/pull/70173
- **状态**：OPEN
- **内容**：`/clean_gone` 命令使用 `git branch -v` 配合 `grep '\[gone\]'` 检测已删除分支，但 `git branch -v` 不会输出 `[gone]` 标记（需要 `git branch -vv`），导致该命令永远无法清理任何分支。PR 将命令修正为 `git branch -vv`。

### PR #63686 — 将 stale/autoclose 超时从 14 天延长至 90 天
- **链接**：https://github.com/anthropics/claude-code/pull/63686
- **状态**：OPEN
- **内容**：修改 `scripts/issue-lifecycle.ts` 和 `scripts/sweep.ts`，将 Issue 标记为 stale 和自动关闭的超时时间从 14 天延长到 90 天。这反映了维护团队对 Issue 生命周期管理策略的调整，避免合理 Issue 因短期不活跃被过早关闭。

### PR #70074 — 修复 plugin-dev README 中过时的 marketplace 名称
- **链接**：https://github.com/anthropics/claude-code/pull/70074
- **状态**：OPEN
- **内容**：将 README 中 3 处 `claude-code-marketplace` 更新为 `claude-code-plugins`，与 `.claude-plugin/marketplace.json` 中的实际命名保持一致。

### PR #70066 — 更新 plugin-dev 安装文档
- **链接**：https://github.com/anthropics/claude-code/pull/70066
- **状态**：OPEN
- **内容**：更新插件开发 README 的安装说明，使用官方 Claude Code 插件市场名称，将本地开发示例从 `cc --plugin-dir` 修正为 `claude --plugin-dir`，并完善贡献指引。

---

## 5. 功能需求趋势

从所有 Issues 中提炼出社区最关注的五大功能方向：

### ① 跨平台稳定性与兼容性
- **Windows 桌面版**问题集中爆发：白屏（#51143）、会话内容丢失（#53717）、磁盘满时历史丢失（#69003），Windows 平台已成为稳定性重灾区。
- **Android/Termux** 支持断裂（#50270），原生二进制迁移导致非标准 Linux 环境被抛弃。
- **macOS 认证**在 macOS 26 上出现 Keychain 写入失败（#70077）。

### ② MCP 生态完善
- 本次 v2.1.186 的 MCP 登录/登出 CLI 化是社区长期呼吁的回应。
- 仍有多个 MCP 相关 Issue：子代理等待 MCP 审批卡住（#70156）、MCP 服务器懒加载需求（#70015）、项目级 `.mcp.json` 加载问题（#61438 已关闭、#58924 已关闭）。

### ③ 终端/TUI 体验优化
- 复制粘贴格式问题（#18170）是社区最高赞 Issue。
- tmux 渲染错乱（#29937）、会话被静默归档（#66053）、AskUserQuestion 失焦后无法选择（#70178）、滚动速度过快（#70174）等 TUI 细节问题持续涌现。

### ④ 配置与权限管理
- JSONC 支持（#17968，87 点赞）代表用户对配置可读性的强烈需求。
- 服务器管理设置覆盖本地权限（#70181）暴露了企业部署场景下的安全策略优先级问题。

### ⑤ 移动端与多端协同
- 移动端多账户切换（#36151，369 点赞）是**全社区最高赞 Issue**。
- iOS App 连接 Claude Code 崩溃（#70108）、iPadOS 主线程栈溢出崩溃（#70144）表明移动端稳定性同样堪忧。

---

## 6. 开发者关注点总结

| 痛点类别 | 核心问题 | 代表 Issue |
|---------|---------|-----------|
| **数据丢失** | Windows 桌面版会话内容缺失、磁盘满时历史丢失 | #53717, #69003 |
| **阻断性 Bug** | Windows 白屏、Android 无法运行、iOS 崩溃 | #51143, #50270, #70108 |
| **日常体验** | 复制粘贴格式、tmux 渲染、终端滚动 | #18170, #29937, #70174 |
| **认证与权限** | macOS Keychain 写入失败、企业权限规则被覆盖 | #70077, #70181 |
| **MCP 工作流** | 认证流程繁琐、子代理卡住、缺乏懒加载 | v2.1.186 新功能, #70156, #70015 |
| **多账户/多端** | 移动端无法切换账户、多日会话上下文丢失 | #36151, #70175 |

**总结**：当前社区最迫切的诉求集中在 **Windows 平台稳定性修复**（数据丢失和白屏问题已持续数月）、**终端复制粘贴格式修复**（最高赞 Issue 超过 5 个月未解决）、以及 **移动端多账户支持**（全社区最高赞）。v2.1.186 对 MCP 认证的改进是积极信号，但跨平台兼容性和数据持久化问题仍是社区不满的主要来源。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-23

---

## 1. 今日速览

今日 Codex 发布了稳定版 **rust-v0.142.0**，带来 `/usage` 额度重置积分兑换和 `/plugins` 远程插件分类管理两大新功能。社区讨论最激烈的是 **gpt-5.5 费率暴涨 10-20 倍**的 Issue（#28879，117 条评论、239 个 👍），大量 Plus 用户反馈预算在 2-3 次提示后即耗尽。PR 层面，今日合并了多个 code-mode 和插件共享相关的修复与改进。

---

## 2. 版本发布

### rust-v0.142.0（稳定版）

- **`/usage` 新增额度重置积分管理**：可查看和兑换已获得的 usage-limit 重置积分，支持确认、重试和刷新可用状态。([#28154](https://github.com/openai/codex/pull/28154), [#28793](https://github.com/openai/codex/pull/28793))
- **`/plugins` 远程插件分类重组**：插件列表现在按 **OpenAI Curated / Workspace / Shared with me** 三个分区组织，符合条件的轮次可推荐插件。

### 预发布版本

- `rust-v0.143.0-alpha.2`、`rust-v0.143.0-alpha.1`、`rust-v0.142.0-alpha.12`、`rust-v0.142.0-alpha.11` — 均为常规迭代，无详细变更说明。

---

## 3. 社区热点 Issues

| # | 标题 | 热度 | 为什么重要 |
|---|------|------|-----------|
| [#28879](https://github.com/openai/codex/issues/28879) | gpt-5.5 Plus 计划费率暴涨 10-20 倍，5h 预算 2-3 次即耗尽 | 💬117 👍239 | **今日最热**。自 6 月 16 日起大量用户报告 token 消耗速率异常飙升，直接影响所有 Plus 用户的核心使用体验，社区情绪激烈。 |
| [#28224](https://github.com/openai/codex/issues/28224) | SQLite 反馈日志每年可写 ~640 TB，快速消耗 SSD 寿命 | 💬37 👍251 | 高赞 bug，已于今日关闭。两个修复 PR（[#29432](https://github.com/openai/codex/pull/29432)、[#29457](https://github.com/openai/codex/pull/29457)）已合并，可减少约 85% 的日志写入量。 |
| [#3962](https://github.com/openai/codex/issues/3962) | 任务完成时播放提示音 | 💬52 👍177 | 长期高票功能请求。用户在后台运行长任务时需要音频提醒，社区呼声持续近一年未实现。 |
| [#11984](https://github.com/openai/codex/issues/11984) | 长会话下 App UI 极度卡顿 | 💬30 👍23 | Electron 应用在长会话中性能退化严重，影响 Pro 用户日常使用。 |
| [#18299](https://github.com/openai/codex/issues/18299) | 文件查看器不显示 dot files（.codex/.agents 等） | 💬12 👍29 | 开发者需要查看配置文件，但文件浏览器默认隐藏点文件，影响工作流。 |
| [#15347](https://github.com/openai/codex/issues/15347) | 移动/重映射工作区文件夹后丢失线程历史 | 💬15 👍26 | 工作区迁移场景下线程关联断裂，企业用户受影响较大。 |
| [#28504](https://github.com/openai/codex/issues/28504) | Pro 账户缺少 Codex 重置银行和邀请/推荐权益 | 💬6 👍6 | 付费 Pro 用户反馈权益未正确下发，涉及计费和信任问题。 |
| [#29043](https://github.com/openai/codex/issues/29043) | 已提供完整访问权限但仍反复请求审批 | 💬5 👍3 | Windows 11 上权限配置异常，严重影响自动化工作流效率。 |
| [#24948](https://github.com/openai/codex/issues/24948) | 会话日志膨胀至 700MB-2GB | 💬6 👍0 | 重复压缩历史和原始工具输出导致磁盘占用失控，与 #28224 日志问题形成呼应。 |
| [#14461](https://github.com/openai/codex/issues/14461) | Windows WSL 模式下 Codex 无法启动 | 💬10 👍6 | Windows 开发者使用 WSL 作为终端 shell 时应用崩溃，阻塞 Windows 用户核心场景。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| [#29508](https://github.com/openai/codex/pull/29508) | Propagate dynamic tool failures in code mode | ✅ 已合并 | code mode 下将失败的动态工具响应作为 JavaScript 异常传播，完善错误处理链路。 |
| [#29432](https://github.com/openai/codex/pull/29432) / [#29457](https://github.com/openai/codex/pull/29457) | SQLite 反馈日志优化 | ✅ 已合并 | 解决 #28224 中反馈的日志爆炸问题，减少约 85% 写入量。 |
| [#29400](https://github.com/openai/codex/pull/29400) | code-mode: type cells by execution capability | ✅ 已合并 | 为 code mode 引入按执行能力区分的 cell 类型，防止 `wait`/`resume` 等操作的非法组合。 |
| [#29397](https://github.com/openai/codex/pull/29397) | code-mode: make create and observe retry-safe | ✅ 已合并 | 为 CreateCell 和 Observe 请求添加幂等键，确保 IPC 边界丢失响应后可安全重试。 |
| [#29507](https://github.com/openai/codex/pull/29507) | core: fix world state response item metadata | ✅ 已合并 | 修复因字段重命名导致的 CI 编译中断。 |
| [#29504](https://github.com/openai/codex/pull/29504) | fix: world state response item test | ✅ 已合并 | 修复合并冲突导致的编译/Clippy 错误。 |
| [#29509](https://github.com/openai/codex/pull/29509) | add app-server protocol compatibility check | 🔄 开放中 | 新增 PR 检查，拒绝对稳定 app-server 协议的向后不兼容变更，保护客户端兼容性。 |
| [#29419](https://github.com/openai/codex/pull/29419) | reject remote images at app-server ingress | 🔄 开放中 | 在 turn/start 和 turn/steer 入口处拒绝 HTTP(S) 图片 URL，增强安全校验。 |
| [#29493](https://github.com/openai/codex/pull/29493) | mcp: accept foreign absolute cwd for remote stdio | 🔄 开放中 | 允许远程 stdio MCP 服务器使用与 Codex 主机不同的绝对路径（如 Windows cwd 在 POSIX 编排器上）。 |
| [#28582](https://github.com/openai/codex/pull/28582) | Route preview traffic to plugin service | 🔄 开放中 | 添加 `features.plugin_service_preview` 功能开关，将预览流量路由到插件服务。 |

---

## 5. 功能需求趋势

从今日 50 条 Issues 中提炼出社区最关注的五大方向：

1. **💰 费率与配额管理** — #28879 和 #28504 集中反映了用户对 gpt-5.5 费率异常和 Pro 权益缺失的强烈不满。费率透明度和配额可预测性是最高优先级诉求。

2. **🔌 插件生态完善** — v0.142.0 的 `/plugins` 分类重构和多个插件相关 PR（#28582、#26705）表明 OpenAI 正在大力完善插件体系，社区对远程插件的组织和发现体验有持续需求。

3. **⚡ 性能与资源效率** — 日志膨胀（#28224、#24948）、UI 卡顿（#11984）、进程残留（#13970）等性能问题频繁出现，开发者对资源消耗和响应速度的关注度持续走高。

4. **🪟 Windows 平台体验** — WSL 启动失败（#14461）、线程消失（#13846）、沙箱崩溃（#15179）、权限审批异常（#29043）等多个 Windows 特有 bug 表明该平台体验仍需大量打磨。

5. **🔔 通知与可观测性** — 任务完成提示音（#3962）、审批请求桌面通知（#17716）等需求反映了用户希望获得更好的异步任务状态感知能力。

---

## 6. 开发者关注点

- **费率异常是当下最大痛点**：#28879 的 239 个 👍 和 117 条评论说明这不是个别现象，而是影响广泛的核心体验退化。开发者需要 OpenAI 尽快给出解释和修复。

- **code-mode 正在快速迭代**：今日合并的 #29400、#29397 等 PR 显示 code-mode 的类型系统和可靠性正在被系统性加固，这是 CLI/TUI 开发者的核心工作流。

- **跨平台一致性仍是挑战**：Windows 用户面临的问题数量明显多于 macOS/Linux，尤其在沙箱、路径处理和终端集成方面。

- **长期会话稳定性**：UI 卡顿、线程消失、日志膨胀等问题都与长会话场景相关，说明 Codex 在长时间运行工作负载下的工程成熟度仍需提升。

- **协议兼容性与安全加固**：#29509 的协议兼容性检查和 #29419 的远程图片拦截表明 OpenAI 正在为 Codex 的 app-server 通信层建立更严格的工程护栏。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) | 统计时间：2026-06-23*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-23

---

## 1. 今日速览

过去 24 小时社区活跃度较高，共 50 条 Issue 和 39 条 PR 更新，但无新版本发布。核心焦点集中在 **Auto Memory 系统安全修复**、**Agent 行为可靠性**（子代理挂起/误报成功）以及 **MCP 协议新特性（Elicitation）** 的实现上。多个安全类和 P1 级 bug 修复 PR 正在推进合并。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

以下按优先级与社区互动热度选取 10 条最值得关注的 Issue：

| # | 标题 | 优先级 | 👍 | 评论 | 摘要 |
|---|------|--------|-----|------|------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | P1 | 8 | 7 | 委托给 generalist 子代理时无限挂起，用户等待超一小时。禁用子代理后问题消失，是影响日常使用的严重 bug。 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | P1 | 2 | 7 | 子代理达到最大轮数限制后仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际中断，导致用户误以为任务完成。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" | P1 | 3 | 4 | 简单 shell 命令执行完毕后 CLI 仍显示"Awaiting user input"并挂起，属于核心执行路径的阻塞性 bug。 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component level evaluations | P1 | 0 | 7 | EPIC：在已有 76 个行为评估测试的基础上，推进组件级评估体系建设，是 agent 质量保障的基础设施。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping | P2 | 1 | 7 | EPIC：评估 AST 感知的文件读取和代码库映射能否减少工具调用轮次和 token 噪声，是 agent 效率优化的重要方向。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | P2 | 0 | 5 | Auto Memory 在将内容发送给提取 agent 后才进行密钥脱敏，存在安全隐患；同时日志中可能泄露 skill 内容。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low-signal sessions indefinitely | P2 | 0 | 5 | Auto Memory 对低信号会话无限重试，浪费资源且可能反复触发不必要的模型调用。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | P2 | 0 | 6 | 用户反馈模型几乎不会主动调用自定义 skill 和子代理，即使任务高度相关，需显式指令才会使用。 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | P2 | 1 | 3 | 模型在 git 操作中可能使用 `git reset --force` 等危险命令，需要更安全的替代策略。 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | Gemini CLI encounters 400 error with > 128 tools | P2 | 0 | 3 | 可用工具数量超过阈值时触发 400 错误，期望 agent 能智能限定工具范围。 |

**关注要点：** P1 级 bug 集中在 **子代理可靠性**（挂起、误报成功）和 **shell 执行阻塞**，是影响用户体验最直接的痛点。Auto Memory 的安全和效率问题（#26525、#26522）也值得安全敏感用户重点关注。

---

## 4. 重要 PR 进展

以下按影响范围和技术重要性选取 10 条关键 PR：

| # | 标题 | 状态 | 规模 | 说明 |
|---|------|------|------|------|
| [#28089](https://github.com/google-gemini/gemini-cli/pull/28089) | feat(core): implement MCP elicitation (form + url) capability | OPEN | L | **重要新特性**：实现 MCP 协议的 Elicitation 能力（表单 + URL 模式），让 MCP server 可以主动向用户请求输入，是 MCP 生态的关键扩展。 |
| [#28000](https://github.com/google-gemini/gemini-cli/pull/28000) | fix(core-tools): resolve Jupyter Notebook and JSON corruption in write_file | CLOSED | M | 修复 `write_file` 工具静默损坏 `.ipynb` 和 JSON 文件的严重 bug，已合并。 |
| [#28053](https://github.com/google-gemini/gemini-cli/pull/28053) | fix(core-tools): resolve defensive path resolution for @-reference files | OPEN | XL | 修复文件工具在处理 `@` 前缀路径时"File not found"的生产 bug，同时修复 macOS 测试。 |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | fix(core): strip thoughts from scrubbed history turns | OPEN | M | 解决模型内部推理"思想"泄露到历史记录中的问题，防止后续轮次出现无限独白循环。 |
| [#28096](https://github.com/google-gemini/gemini-cli/pull/28096) | fix(core): drop late tool calls after SIGINT cancellation | OPEN | M | 修复 SIGINT 取消后延迟到达的工具调用仍被执行的问题，避免取消后产生副作用。 |
| [#28099](https://github.com/google-gemini/gemini-cli/pull/28099) | fix(cli): show descriptive sandbox label in footer | OPEN | S | 修复 macOS 沙箱模式下 footer 显示"current process"而非实际沙箱标签的问题（#26697）。 |
| [#28094](https://github.com/google-gemini/gemini-cli/pull/28094) | fix(a2a-server): deep-merge user and workspace settings | OPEN | M | 修复 A2A server 中用户和工作区设置浅合并导致嵌套配置节被覆盖的问题。 |
| [#28093](https://github.com/google-gemini/gemini-cli/pull/28093) | fix(core): buffer chat compression telemetry until SDK initialized | OPEN | S | 修复聊天压缩遥测绕过缓冲机制直接导出的问题，防止 SDK 初始化前遥测数据丢失。 |
| [#27915](https://github.com/google-gemini/gemini-cli/pull/27915) | fix(core): trust dialog discloses the hook shape that never runs | OPEN | M | **安全修复**：修复工作区信任对话框显示与实际执行相反的 hook 信息，防止用户误判安全风险。 |
| [#28065](https://github.com/google-gemini/gemini-cli/pull/28065) | feat(core): Bump node google-auth-library to 10.8.1 | OPEN | XS | 依赖升级，跟进 google-auth-library 的 bugfix。 |

**关注要点：** MCP Elicitation（#28089）是最重要的新特性 PR，标志着 Gemini CLI 对 MCP 协议支持的进一步完善。安全类修复（#27915、#28000）和核心稳定性修复（#27971、#28096）是本周合并/审查的重点。

---

## 5. 功能需求趋势

从所有 Issue 中提炼出社区最关注的五大方向：

### 🔒 ① Auto Memory 安全与隐私（高频）
以 #26525、#26522、#26523、#26516 为代表，社区对 Auto Memory 的 **密钥泄露风险**、**无限重试**、**无效 patch 处理** 提出多项改进需求。这是当前安全领域最集中的反馈。

### 🤖 ② Agent 行为可靠性（高频）
#21409（子代理挂起）、#22323（误报成功）、#21968（不主动使用 skill）、#22672（破坏性行为）等 Issue 反映出社区对 agent **自主决策质量** 和 **行为可预期性** 的高度关注。

### 🌳 ③ AST 感知与代码库理解（中频）
#22745、#22746 等 EPIC 推动引入 AST 感知的文件读取和代码库映射，目标是减少工具调用轮次、降低 token 消耗，是 agent 效率优化的重要方向。

### 🌐 ④ MCP 协议扩展（中频）
#28089 正在实现 MCP Elicitation 能力，社区对 MCP 生态的完善（form/url 交互模式）有明确需求。

### 🔧 ⑤ 核心执行稳定性（中频）
#25166（shell 阻塞）、#22465（交互式提示卡住）、#22093（子代理权限问题）等反映出 CLI 核心执行路径的稳定性仍是开发者日常痛点。

---

## 6. 开发者关注点

### 🔴 高频痛点
1. **子代理不可靠**：挂起、误报成功、不主动使用 skill — 这是当前用户反馈最集中的问题领域
2. **Auto Memory 安全隐患**：密钥在脱敏前已进入模型上下文，存在泄露风险
3. **Shell 执行阻塞**：命令完成后 CLI 仍等待输入，影响自动化工作流

### 🟡 中频需求
4. **Agent 行为安全**：防止模型执行破坏性 git 操作或修改关键资源
5. **工具数量限制**：超过 128 个工具时触发 400 错误，需要智能工具筛选
6. **子代理可观测性**：`/chat share` 无法查看子代理轨迹，调试困难

### 🟢 低频但重要
7. **终端体验**：Wayland 下浏览器子代理失败、终端 resize 闪烁、外部编辑器退出后显示损坏
8. **符号链接支持**：`~/.gemini/agents/` 下的 symlink 不被识别为子代理
9. **评估体系建设**：组件级行为评估基础设施的完善（#24353 EPIC）

---

> **日报来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | **生成时间**: 2026-06-23 | **数据窗口**: 过去 24 小时

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-23

---

## 1. 今日速览

今日 Copilot CLI 连续发布两个补丁版本（v1.0.64-2 → v1.0.64-3），重点新增 HTTP(S) 代理支持、内联图片渲染和 OpenTelemetry 追踪增强。社区 Issue 活跃度较高，共 19 条在过去 24 小时内更新，涵盖认证异常、MCP 配置、终端渲染和 AI 计费等多个方向，但无新 PR 合并。

---

## 2. 版本发布

### v1.0.64-3
- **新增**：支持通过用户设置配置 HTTP(S) 代理
- **修复**：会话名称含空格时仍可恢复；远程托管会话中隐藏不支持的斜杠命令
- 🔗 [github/github/copilot-cli](https://github.com/github/copilot-cli)

### v1.0.64-2
- **新增**：
  - 新增设置项可隐藏对话滚动条
  - CLI 中支持内联图片渲染
  - Skills 的 frontmatter 支持 `argument-hint`
  - OpenTelemetry：压缩成功后的 chat span 携带 `gen_ai.conversation.compacted=true`，摘要以 `CompactionPart` 形式输出
- 🔗 [github/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 👍 | 为什么重要 |
|---|------|------|-----|-----------|
| [#1632](https://github.com/github/copilot-cli/issues/1632) | 支持 skills 子文件夹组织 | OPEN | 20 | 社区呼声最高的功能请求之一。随着用户自定义 skills 数量增长，扁平目录结构已无法满足组织需求，20 个点赞和 8 条评论表明这是广泛痛点。 |
| [#3596](https://github.com/github/copilot-cli/issues/3596) | 恢复会话后 `/model` 报错 Not authenticated | OPEN | 11 | 影响核心工作流——恢复会话后无法切换模型，11 个点赞说明受影响用户较多，且涉及认证与会话状态的交互 bug。 |
| [#3887](https://github.com/github/copilot-cli/issues/3887) | `/mcp` 安装时未插值 `packageArguments` 变量 | OPEN | 0 | 新发现的 MCP 注册表集成 bug，变量占位符（如 `{ado_org}`）被原样写入配置文件而非替换为实际值，影响 MCP 服务器自动化部署。 |
| [#3886](https://github.com/github/copilot-cli/issues/3886) | `/restart` 和 `/resume` 消耗 AI 积分 | OPEN | 0 | 用户报告每次重启/恢复会话固定消耗约 174 AI 积分，这对高频使用者是显著的隐性成本，可能涉及会话上下文重建机制问题。 |
| [#3881](https://github.com/github/copilot-cli/issues/3881) | AI 积分扣除比例异常（5% 而非 2%） | OPEN | 0 | 计费准确性问题。用户精确追踪了配额消耗，发现 6x 倍率模型实际扣费为预期的 2.5 倍，直接影响付费用户信任。 |
| [#3885](https://github.com/github/copilot-cli/issues/3885) | 输入框长文本无法滚动 | OPEN | 0 | 终端 UX 问题。输入多行提示词时鼠标滚轮滚动的是外层视图而非输入区，严重影响长 prompt 编辑体验。 |
| [#3883](https://github.com/github/copilot-cli/issues/3883) | 国际化支持（i18n）请求 | OPEN | 1 | 社区首次提出完整的 i18n 需求，建议覆盖全球前 10 大语言，反映 Copilot CLI 用户群体的全球化趋势。 |
| [#3278](https://github.com/github/copilot-cli/issues/3278) | 显示每次响应的耗时 | OPEN | 1 | 终端渲染增强需求，尤其在 autopilot 模式下用户需要了解 agent 运行时长，与 #3111（添加计时器）和 #3055（shell 工具计时器）形成功能集群。 |
| [#1579](https://github.com/github/copilot-cli/issues/1579) | 忽略 MCP 服务器返回的 instructions | OPEN | 3 | MCP 协议合规性问题。服务器在初始化阶段返回的 instructions 未被注入 LLM 上下文，可能导致工具使用效果下降，3 个点赞虽少但技术影响深远。 |
| [#2399](https://github.com/github/copilot-cli/issues/2399) | 插件安装使用 sparse checkout | OPEN | 0 | 性能优化需求。当前完整 clone 插件仓库会下载测试、CI 等无关文件，浪费带宽和磁盘空间，对网络环境差的用户尤为突出。 |

---

## 4. 重要 PR 进展

过去 24 小时内无新 Pull Request 更新。

---

## 5. 功能需求趋势

从今日 19 条活跃 Issue 中可提炼出以下五大方向：

| 趋势方向 | 代表 Issue | 热度 |
|---------|-----------|------|
| **MCP 生态完善** | #3887（变量插值）、#1579（instructions 忽略）、#3638（VS Code 集成） | 🔥🔥🔥 |
| **终端 UX 增强** | #3885（输入滚动）、#3278（响应计时）、#3111（计时器）、#3055（shell 计时） | 🔥🔥🔥 |
| **认证与会话管理** | #3596（恢复会话认证失败）、#3886（重启消耗积分）、#2337（WSL 凭证管理） | 🔥🔥 |
| **AI 计费透明度** | #3881（积分扣除异常）、#3886（重启计费） | 🔥🔥 |
| **插件与 Skills 体系** | #1632（子文件夹）、#2399（sparse checkout）、#3854（@ 文件引用） | 🔥 |

---

## 6. 开发者关注点总结

1. **MCP 集成深度不足**：从变量插值缺失到 instructions 被忽略，再到与 VS Code 的 MCP 服务器隔离，开发者对 MCP 协议完整支持有明确期待。
2. **AI 计费不透明**：积分消耗异常和隐性计费正在侵蚀付费用户信任，社区需要更清晰的用量明细和计费逻辑说明。
3. **终端交互体验待提升**：输入框滚动、响应计时、会话恢复等基础 UX 问题集中爆发，说明 CLI 的终端渲染层需要系统性优化。
4. **Skills 规模化组织**：随着自定义 skills 数量增长，子文件夹支持已从"锦上添花"变为"刚需"。
5. **国际化需求浮现**：i18n 功能请求的出现标志着 Copilot CLI 正从开发者工具向更广泛的用户群体扩展。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) | 报告生成时间：2026-06-23*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-23

---

## 1. 今日速览

今日最大动作是 **v1.48.0 正式发布**，包含 kosong 空推理内容往返修复和 soul 层重复工具调用强制停止两项核心变更。社区同时涌现多个新 Bug 报告，集中在 **MCP 服务器加载异常**（`kimi acp` 模式不加载 MCP、`kimi web` 启动路径错误）以及 **CLI 子进程挂起** 问题，值得开发者重点关注。

---

## 2. 版本发布

### v1.48.0 — 2026-06-22

**kosong 同步升级至 v0.54.0。** 主要变更：

| 变更 | 说明 |
|---|---|
| **fix(kosong)** 空推理内容往返修复 | 修复 `reasoning_content` 为空时的序列化/反序列化问题，避免下游 API 报错。PR #2446，@RealKai42 |
| **feat(soul)** 重复工具调用升级提醒与强制停止 | 当同一工具被连续调用 3 次以上时，注入逐级升级提醒（r1/r2/r3），达到死循环阈值后强制终止本轮对话，防止无限循环消耗 token。PR #2466，@jackfish212 |

> 🔗 Release: [github.com/MoonshotAI/kimi-cli/releases/tag/1.48.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.48.0)

---

## 3. 社区热点 Issues

### 🔴 高优先级 Bug

**① Issue #2464 — `kimi acp` 不加载 MCP 服务器**
`--mcp-config-file` 参数在 ACP 模式下完全失效，MCP 工具全部缺失，而交互式模式下正常。这直接阻断了 ACP 工作流中使用外部工具链。
> 🔗 [github.com/MoonshotAI/kimi-cli/issues/2464](https://github.com/MoonshotAI/kimi-cli/issues/2464)

**② Issue #2469 — `kimi web` 从 CLI 安装目录启动 MCP 服务器，导致工作区相对路径工具失效**
MCP 子进程的 cwd 被错误地设为 CLI 全局安装路径而非当前工作区，workspace-relative 的 MCP 工具全部 400 报错。
> 🔗 [github.com/MoonshotAI/kimi-cli/issues/2469](https://github.com/MoonshotAI/kimi-cli/issues/2469)

**③ Issue #2457 — 用户已删除的 MCP 服务器被自动重新发现，导致无法修复的 400 错误**
MCP 配置被删除后仍被自动探测并重新加载，形成持久性错误循环。
> 🔗 [github.com/MoonshotAI/kimi-cli/issues/2457](https://github.com/MoonshotAI/kimi-cli/issues/2457)

**④ Issue #2468 — 子进程工具调用 detach 后 CLI 挂起**
在 Linux 环境下，后台子进程工具调用结束后主进程未正确回收，导致 Kimi CLI 假死。
> 🔗 [github.com/MoonshotAI/kimi-cli/issues/2468](https://github.com/MoonshotAI/kimi-cli/issues/2468)

**⑤ Issue #2465 — kosong OpenAILegacy 在 thinking=off 时发送 `reasoning_effort: null`**
该值不符合 OpenAI chat-completions schema（必须为枚举字符串或字段缺失），且未能真正关闭推理，对严格校验的 API 端点直接报错。
> 🔗 [github.com/MoonshotAI/kimi-cli/issues/2465](https://github.com/MoonshotAI/kimi-cli/issues/2465)

### 🟡 功能请求

**⑥ Issue #1283 — 跨会话持久化记忆系统（Memory System）**
请求实现 AI 自动记忆 + 用户手动指令的双轨记忆机制，使 Kimi Code CLI 能跨会话保留项目上下文、编码偏好和用户指令。已开放近 4 个月，6 条评论，社区关注度持续积累。
> 🔗 [github.com/MoonshotAI/kimi-cli/issues/1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

---

## 4. 重要 PR 进展

| PR | 状态 | 内容摘要 |
|---|---|---|
| **#2471** — feat(tools): Monitor 工具 | 🟢 OPEN | 新增 `Monitor` 工具，作为现有后台工具的流式版本，支持逐行 stdout 实时流输出，解决后台工具无法实时查看输出的痛点。功能提案，尚无关联 Issue。 |
| **#2466** — feat(soul): 重复工具调用强制停止 | 🔴 CLOSED（已合并） | 将 kimi-code 的重复工具调用处理逻辑移植到 kimi-cli，实现逐级提醒 + 死循环强制终止。随 v1.48.0 发布。 |
| **#2467** — chore(release): 版本号升级 | 🔴 CLOSED（已合并） | kimi-cli → 1.48.0，kosong → 0.54.0，同步更新根依赖 pin。 |

> 🔗 PR #2471: [github.com/MoonshotAI/kimi-cli/pull/2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)

---

## 5. 功能需求趋势

从当前 Issue 和 PR 分布来看，社区关注方向集中在以下三个维度：

1. **MCP 生态稳定性** — 今日 5 个 Bug 中有 3 个直接与 MCP 服务器加载、路径解析和自动发现相关，是当前最高频的痛点领域。
2. **ACP 模式完善** — `kimi acp` 作为 IDE 集成的核心入口，MCP 工具缺失问题直接影响其在 Cursor/Claude Code 等场景的可用性。
3. **跨会话上下文管理** — Memory System 请求（#1283）代表了社区对"有状态 CLI"的长期诉求，与当前无状态会话模型形成鲜明对比。

---

## 6. 开发者关注点总结

| 痛点 | 具体表现 |
|---|---|
| **MCP 加载一致性** | 交互式 / web / ACP 三种模式下 MCP 行为不一致，配置删除后仍被自动发现 |
| **子进程生命周期管理** | detach 子进程后主进程挂起，缺乏可靠的进程回收机制 |
| **API 兼容性** | kosong 对 OpenAI Legacy schema 的校验不够严格，`null` 值泄漏到 wire |
| **工具调用死循环** | 随 v1.48.0 已修复，但此前长期缺乏保护机制 |
| **流式输出能力** | 后台工具无法实时查看输出，Monitor 工具 PR 正在推进 |

---

*数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 统计窗口：2026-06-22 至 2026-06-23*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-23

---

## 1. 今日速览

今日社区无新版本发布，但活跃度极高。**内存问题**（Issue #20695，99 条评论、72 个 👍）持续占据讨论中心，成为社区头号痛点；**MCP 生态**相关的回归 Bug 和功能请求密集涌现，涉及图片附件丢失、参数序列化错误、HTTP 超时等多个方面。同时，核心维护者 **thdxr** 和 **kitlangton** 今日合并/推进了多个重要 PR，涵盖 TUI 自动补全作用域修复、插件 Hook API 命名空间化、Provider 故障队列保持等。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 作者 | 评论/👍 | 为什么重要 |
|---|------|------|---------|-----------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread | thdxr | 99💬 / 72👍 | 社区最热门的集中讨论帖，汇集了大量内存泄漏/膨胀报告。维护者明确要求用户提供 heap snapshot 而非 LLM 猜测，说明这是系统性问题，正在统一排查。 |
| [#32832](https://github.com/anomalyco/opencode/issues/32832) | MCP tool can no longer return image attachments | psemeniuk | 22💬 | **回归 Bug**：1.17.5+ 中 MCP 工具返回的图片附件不再正确渲染。影响所有依赖 MCP 图片输出的工作流，社区讨论活跃但尚未修复。 |
| [#28567](https://github.com/anomalyco/opencode/issues/28567) | Full MCP client capabilities | Arcadi4 | 17💬 / 24👍 | OpenCode 的 MCP 客户端能力落后于最新 MCP 标准。24 个 👍 表明社区对完整 MCP 支持的强烈需求。 |
| [#33213](https://github.com/anomalyco/opencode/issues/33213) | server mode: long-running opencode serve accumulates anonymous JS heap/swap; 26.8GiB cgroup peak | megamen32 | 4💬 | 生产环境中 `opencode serve` 长时间运行后内存飙至 26.8GiB，涉及 Bun/JSJIT 堆碎片化。对部署 server mode 的用户影响严重。 |
| [#32694](https://github.com/anomalyco/opencode/issues/32694) | bug: Worker has been terminated | y-matsuwitter | 6💬 / 4👍 | 发送一条消息后 Worker 即崩溃，会话不可用。用户已做最小化复现排查，属于高优先级稳定性问题。 |
| [#28015](https://github.com/anomalyco/opencode/issues/28015) | Worker has been terminated when running multiple subagents | qwowboyp | 11💬 | 多 subagent 并行或多实例运行时出现 Worker 终止，会话切换损坏。与 #32694 可能同源。 |
| [#32574](https://github.com/anomalyco/opencode/issues/32574) | Tool call start time incorrectly reported? | bartlettroscoe | 6💬 / 5👍 | 工具调用的起止时间报告异常接近，疑似计时逻辑缺陷。用户用 Codex + GPT-5.5 做了初步 triage。 |
| [#28472](https://github.com/anomalyco/opencode/issues/28472) | MCP tool parameters of type "object" are serialized as strings | e-picas | 6💬 | MCP 工具的 `object` 类型参数被错误序列化为 JSON 字符串而非原生对象，导致输入验证失败。影响 MCP 生态互操作性。 |
| [#33455](https://github.com/anomalyco/opencode/issues/33455) | Plugins from config `plugin` array silently not loaded since v1.17.0 | blackheaven | 2💬 | **回归 Bug**：v1.17.0 起配置中的插件被静默忽略，无任何错误/警告。影响所有插件用户，属于严重回归。 |
| [#33447](https://github.com/anomalyco/opencode/issues/33447) | Pre-migration sessions stranded after event-sourcing migration | Jerry4csr | 1💬 | 6 月事件溯源迁移前的旧会话在会话选择器中不可见且无法恢复，数据仍在数据库中但无法访问。 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 内容摘要 |
|---|------|------|------|---------|
| [#33458](https://github.com/anomalyco/opencode/pull/33458) | fix(tui): scope file autocomplete to session | thdxr | ✅ 已合并 | 将文件自动补全和 @提及路径限定在当前会话的工作目录下，避免跨项目路径污染。 |
| [#33416](https://github.com/anomalyco/opencode/pull/33416) | feat(plugin): add namespaced hook API | thdxr | ✅ 已合并 | 用命名空间化的 `hook` 和 `reload` 能力替换 v2 Effect 插件宿主表面，支持 Promise 式插件定义和领域隔离的运行时钩子。 |
| [#33452](https://github.com/anomalyco/opencode/pull/33452) | fix(core): reset steps for promoted prompts | kitlangton | ✅ 已合并 | 当新输入被提升（包括 steering prompts）时重置 agent 步数限制，修复队列行为描述。 |
| [#33460](https://github.com/anomalyco/opencode/pull/33460) | fix(core): preserve queue after provider failure | kitlangton | 🔓 开放中 | 区分 provider 轮次的继续、完成和持久失败状态，在 provider 故障时保留排队工作而非丢弃，为后续显式恢复做准备。 |
| [#33281](https://github.com/anomalyco/opencode/pull/33281) | feat(cli): add standalone v2 session flow | thdxr | 🔓 开放中 | 新增 `--standalone` 模式，运行认证的私有服务器子进程为 TUI 服务，通过 v2 API 创建会话，支持会话共享和回滚状态持久化。 |
| [#33463](https://github.com/anomalyco/opencode/pull/33463) | fix(prompt): guard against deleting backups/credentials on cleanup tasks | warmjademe | 🔓 开放中 | 修复清理任务可能误删备份文件和凭据的安全问题（关联 #33379）。 |
| [#33464](https://github.com/anomalyco/opencode/pull/33464) | fix(core): replace response.text with collectBoundedResponseBody for websearch SSE handling | enioclimacosalesjunior | 🔓 开放中 | 修复 websearch 工具因使用 `response.text` 读取 SSE 流导致 Tavily API 400 错误的问题。 |
| [#33465](https://github.com/anomalyco/opencode/pull/33465) | feat: add --no-open flag to opencode web command | asieduernest12 | 🔓 开放中 | 为 `opencode web` 添加 `--no-open` 标志，在 Docker 等无头环境中禁止自动打开浏览器。 |
| [#33448](https://github.com/anomalyco/opencode/pull/33448) | fix(tui): preserve worker rejection handling | rekram1-node | 🔓 开放中 | 恢复 TUI 后端 worker 的 `unhandledRejection` 监听器，通过 Effect 可观测性层记录拒绝而非让 Bun 终止 worker。 |
| [#33017](https://github.com/anomalyco/opencode/pull/33017) | feat(app): edit files directly in the app | felipegenef | 🔓 开放中 | 为 Desktop App 添加文件直接编辑模式（含保存），解决文件只能只读打开、小修改也必须通过 AI 的问题。 |

---

## 5. 功能需求趋势

从今日 Issues 和 PRs 中可提炼出以下 **5 大功能方向**：

### ① MCP 生态完善（最高频）
- 完整 MCP 客户端能力支持（[#28567](https://github.com/anomalyco/opencode/issues/28567)，24👍）
- MCP 图片附件渲染修复（[#32832](https://github.com/anomalyco/opencode/issues/32832)）
- MCP object 参数序列化修复（[#28472](https://github.com/anomalyco/opencode/issues/28472)）
- MCP HTTP 客户端超时问题（[#21741](https://github.com/anomalyco/opencode/issues/21741)）

### ② 内存与性能优化
- 内存问题集中排查（[#20695](https://github.com/anomalyco/opencode/issues/20695)，99💬）
- Server 模式长时间运行内存膨胀（[#33213](https://github.com/anomalyco/opencode/issues/33213)）
- 大 diff 计算导致渲染器冻结（[#32046](https://github.com/anomalyco/opencode/issues/32046)）

### ③ Desktop App / TUI 体验增强
- 原生 Git 面板（[#15886](https://github.com/anomalyco/opencode/issues/15886)、[#26558](https://github.com/anomalyco/opencode/issues/26558)）
- 跨项目会话列表（[#31932](https://github.com/anomalyco/opencode/issues/31932)）
- TUI 持久状态栏插件钩子（[#18969](https://github.com/anomalyco/opencode/issues/18969)）
- 文件直接编辑（[#33017](https://github.com/anomalyco/opencode/pull/33017)）

### ④ 新模型/Provider 支持
- Mistral AI 和 Together AI V2 会话运行器支持（[#33457](https://github.com/anomalyco/opencode/issues/33457) / [#33456](https://github.com/anomalyco/opencode/pull/33456)）
- 严格配额 Provider 的速率限制中间件（[#33459](https://github.com/anomalyco/opencode/issues/33459)）
- Copilot 长上下文模型选择暴露（[#33462](https://github.com/anomalyco/opencode/pull/33462)）

### ⑤ 稳定性与数据安全
- Worker 终止/崩溃（[#32694](https://github.com/anomalyco/opencode/issues/32694)、[#28015](https://github.com/anomalyco/opencode/issues/28015)）
- 清理任务误删备份/凭据（[#33463](https://github.com/anomalyco/opencode/pull/33463)）
- 事件溯源迁移后旧会话不可访问（[#33447](https://github.com/anomalyco/opencode/issues/33447)）

---

## 6. 开发者关注点

**今日社区反馈的三大核心痛点：**

1. **内存问题已成头号公敌** — 从客户端 TUI 到 server 模式，内存泄漏/膨胀报告持续涌现。维护者已建立集中排查帖（#20695），但尚未给出根本解决方案。部署 server mode 的用户需密切关注。

2. **MCP 生态多处回归** — 图片附件丢失、参数序列化错误、HTTP 超时、插件静默不加载……多个 MCP 相关回归集中在 v1.17.x 引入，社区对 MCP 稳定性的信心正在动摇。

3. **Worker 稳定性危机** — "Worker has been terminated" 成为高频崩溃场景，涉及单消息崩溃和多 subagent 并行两种模式。核心开发者正在通过 PR #33448 和 #33460 修复拒绝处理和队列保持逻辑，但尚未完全解决。

> **建议**：使用 MCP 工具链的用户暂缓升级到 1.17.5+，或做好回滚准备；server mode 部署者建议设置内存监控和自动重启策略。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) | 报告生成时间：2026-06-23*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-23

---

## 1. 今日速览

Pi 今日发布 **v0.79.10**，核心亮点是为扩展的压缩事件新增 `reason` 和 `willRetry` 字段，让扩展能区分手动 `/compact`、阈值自动压缩和溢出重试三种场景。社区 Issue 讨论热度集中在 **OpenAI Codex 连接可靠性**（#4945，64 条评论）和 **本地 LLM 提供者扩展**（#3357）两大长期痛点。今日共有 **12 个 PR 合并/关闭**，涵盖压缩事件完善、URL 自动链接、工具调用参数校验等多项修复与功能增强。

---

## 2. 版本发布

### v0.79.10

- **Extension compaction event context**：`session_before_compact` 和 `session_compact` 事件新增 `reason`（`"manual" | "threshold" | "overflow"`）和 `willRetry` 字段，扩展现在可以精确区分手动压缩、上下文阈值触发和溢出重试流程。

> 🔗 [Release v0.79.10](https://github.com/badlogic/pi-mono/releases)

---

## 3. 社区热点 Issues

| # | 标题 | 重要性说明 | 社区反应 |
|---|------|-----------|---------|
| [#4945](https://github.com/badlogic/pi-mono/issues/4945) | **openai-codex Connection Reliability Issues** | 使用 `openai-codex` / `gpt-5.5` 时 TUI 卡在 `Working...` 无响应，需手动 Escape 恢复，严重影响工作流 | 64 条评论、30 👍，是当前讨论最活跃的 Issue |
| [#3357](https://github.com/badlogic/pi-mono/issues/3357) | **Official local LLM provider extension** | 社区强烈要求官方支持从 `{baseUrl}/models` 动态获取模型列表，以便无缝接入 llama.cpp / Ollama / LM Studio 等本地推理后端 | 27 条评论、36 👍，点赞数最高，需求广泛 |
| [#5653](https://github.com/badlogic/pi-mono/issues/5653) | **Move off Shrinkwrap** | 同时安装 `pi-ai` 和 `pi-coding-agent` 时产生两份 `pi-ai` 副本，导致 API 提供者注册表出现两份独立的 module-level `Map`，引发状态不一致 | 15 条评论，正在讨论中 |
| [#5916](https://github.com/badlogic/pi-mono/issues/5916) | **Support provider extensions with model aliases and improve search** | 用户通过 `models.json` 配置 OpenRouter 提供者时，模型别名和搜索功能不够直观，缺乏 UI 配置入口 | 11 条评论 |
| [#5217](https://github.com/badlogic/pi-mono/issues/5217) | **Extension events lack compaction reason**（已关闭） | 扩展无法区分压缩触发原因 — 此 Issue 直接推动了 v0.79.10 的修复 | 4 条评论，已通过 PR #5962 关闭 |
| [#5871](https://github.com/badlogic/pi-mono/issues/5871) | **Anthropic OAuth-token detection hardcoded to sk-ant-oat** | Anthropic 提供者的 OAuth 检测硬编码了 `sk-ant-oat` 子串，无法通过配置显式声明 OAuth 凭证类型 | 4 条评论，PR #5977 已合并修复 |
| [#5263](https://github.com/badlogic/pi-mono/issues/5263) | **Make in-session model and thinking-level changes ephemeral by default** | 会话内的模型和思考级别修改应默认仅影响当前会话，避免意外修改全局默认值 | 4 条评论、4 👍 |
| [#5810](https://github.com/badlogic/pi-mono/issues/5810) | **RPC: expose session entries and tree** | 外部驱动 pi（如 Telegram 桥接）需要 `get_entries` 和 `get_tree` RPC 命令来读取会话条目和树结构 | 3 条评论 |
| [#5932](https://github.com/badlogic/pi-mono/issues/5932) | **Expose ctx.navigateTree() to agents** | `navigateTree()` 仅在 `ExtensionCommandContext` 上可用，普通事件/工具的 `ExtensionContext` 无法访问，限制了自定义 `/goal` 等命令的实现 | 3 条评论 |
| [#5976](https://github.com/badlogic/pi-mono/issues/5976) | **/model replaces defaultModel setting unexpectedly** | `/model` 命令会静默修改全局默认模型设置，而非仅影响当前会话，用户期望行为与会话内修改一致 | 2 条评论，已关闭待讨论 |

---

## 4. 重要 PR 进展

| # | 标题 | 内容摘要 | 状态 |
|---|------|---------|------|
| [#5962](https://github.com/badlogic/pi-mono/pull/5962) | **feat: add compaction reason and willRetry to extension compaction events** | 为 `session_before_compact` 和 `session_compact` 事件添加 `reason` 和 `willRetry` 字段，关闭 #5217 | ✅ 已合并 |
| [#5941](https://github.com/badlogic/pi-mono/pull/5941) | **fix: add required reason and willRetry to compaction extension API** | 在公共扩展 API 的 `SessionBeforeCompactEvent` 和 `SessionCompactEvent` 上添加必填的 `reason` 和 `willRetry`，与 RPC 协议对齐 | ✅ 已合并 |
| [#5977](https://github.com/badlogic/pi-mono/pull/5977) | **feat(ai): allow explicit authMode overrides for Anthropic provider** | 引入 `authMode` 兼容性标志，允许模型和自定义提供者显式声明 OAuth/Bearer 凭证类型，替代硬编码的 `sk-ant-oat` 子串检测，关闭 #5871 | ✅ 已合并 |
| [#5981](https://github.com/badlogic/pi-mono/pull/5981) | **Linkify plain URLs in Text output** | 当终端支持 OSC 8 超链接时，自动将 `Text` 输出中的纯 URL 转换为可点击链接，解决长 URL 换行后 Ctrl+click 只能选中部分的问题，关闭 #5978 | ✅ 已合并 |
| [#5963](https://github.com/badlogic/pi-mono/pull/5963) | **fix(ai): reject malformed final tool call arguments** | 在共享 AI 流路径中校验最终流式工具调用参数的 JSON 格式，防止在 `toolcall_end`/`done` 之前暴露格式错误的参数 | ✅ 已合并 |
| [#5859](https://github.com/badlogic/pi-mono/pull/5859) | **fix(ai): send responses prompts as instructions** | 修复 OpenAI Responses API 的系统提示传递方式：通过顶层 `instructions` 而非 `input` 消息回放，适用于 OpenAI、Azure OpenAI 和 Codex Responses | ✅ 已合并 |
| [#5985](https://github.com/badlogic/pi-mono/pull/5985) | **feat(ai): add Merge Gateway provider** | 新增内置 `merge-gateway` 提供者（通过 `MERGE_GATEWAY_API_KEY` 认证），Merge Gateway 是一个托管网关，可通过单一 API Key 路由到 40+ 模型供应商 | ✅ 已合并 |
| [#5970](https://github.com/badlogic/pi-mono/pull/5970) | **feat: add auto-router extension for DeepSeek V4 Pro/Flash** | 新增自动路由扩展，根据提示复杂度在 DeepSeek V4 Flash（简单任务）和 V4 Pro（复杂任务）之间自动切换，可节省 60-70% API 成本 | ✅ 已合并 |
| [#5955](https://github.com/badlogic/pi-mono/pull/5955) | **fix: add secret-disclosure scope discipline to default system prompt** | 在默认系统提示中增加密钥泄露范围控制规则，防止宽泛文件操作时密钥文件被意外复制到目标位置 | ✅ 已合并 |
| [#5987](https://github.com/badlogic/pi-mono/pull/5987) | **fix(coding-agent): resolve --session by agent name via identity daemon** | 修复 pi 核心未在 `--session` 传入 agent name 时查询 daemon 的问题，使 `pi-agent-identity` 扩展的 `lookup_agent` 消息真正生效 | ✅ 已合并 |

---

## 5. 功能需求趋势

从今日所有 Issues 中提炼出社区最关注的五大功能方向：

1. **本地 LLM 支持** 🔄
   - 动态获取本地模型列表（#3357）、Ollama/llama.cpp/LM Studio 集成是社区呼声最高的功能，36 👍 点赞数说明需求覆盖面极广。

2. **扩展 API 能力扩展** 🔌
   - 会话切换/新建（#5912、#5952）、`navigateTree()` 暴露（#5932）、会话条目 RPC 接口（#5810）——社区正在推动 pi 从纯 TUI 工具向可编程平台演进。

3. **提供者生态扩展** 🌐
   - Merge Gateway（PR #5985）、Neuralwatt（#5914）、Anthropic Vertex（PR #5262）、Z.AI 标签优化（#5965）——社区持续推动对新模型供应商的支持。

4. **会话模型管理** ⚙️
   - 会话内模型/思考级别修改应默认为临时变更（#5263、#5976），避免意外修改全局默认值。

5. **连接可靠性与错误处理** 🔧
   - OpenAI Codex WebSocket 断连（#4945、#5973）、`pi -p` 无凭证时挂起（#5571）、流中断导致 agent 循环卡死（#5778）——长连接稳定性和优雅降级是高频痛点。

---

## 6. 开发者关注点

今日开发者反馈中的核心痛点和高频需求：

- **🔴 连接稳定性是首要痛点**：OpenAI Codex 的 WebSocket 连接在 60 分钟限制后不会自动重建（#5973），`openai-codex` 提供者偶发卡死（#4945），开发者需要更健壮的重连和错误恢复机制。

- **🟡 扩展隔离与模块重复问题**：`pi-ai` 和 `pi-coding-agent` 同时安装时产生两份副本，导致 module-level 状态分裂（#5653）。`pi-tui` 的 `getKeybindings()` 单例在不同扩展中也是独立副本（#4748）。这是架构层面的技术债务。

- **🟡 扩展 API 能力不足**：非 TUI 路径（Telegram 桥接、RPC、webhook）无法程序化操作会话（#5912），`sendUserMessage()` 不返回 Promise 导致 print 模式下 fire-and-forget（#5751）。外部集成场景的 API 覆盖度亟需提升。

- **🟢 本地推理支持呼声持续高涨**：#3357 已开放超过两个月，27 条评论、36 👍，社区等待官方本地提供者扩展已久。

- **🟢 安全与密钥保护意识增强**：PR #5955 为默认系统提示增加了密钥泄露防护规则，说明社区对 AI Agent 操作中的安全意识正在提升。

---

> 📊 **数据概览**：今日 1 个新版本发布 | 46 条活跃 Issue（30 条展示）| 12 个 PR 更新（11 个已合并，1 个开放中）
> 
> 🔗 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-23

---

## 1. 今日速览

今日社区最突出的动态是 **AI 机器人 tt-a1i 单日提交 20+ PR**，引发社区对"低质量批量 PR 噪音"的讨论，维护者已提出强化 PR 审核门控的 PR #5723。同时，**v0.18.5-nightly** 发布，包含 CI 自动发布流程改进。此外，**ACP 集成测试并行竞态修复**（PR #5724）已合并，提升了测试稳定性。

---

## 2. 版本发布

### v0.18.5-nightly.20260622.6bc3f853e
- **发布链接**: [Release v0.18.5-nightly](https://github.com/QwenLM/qwen-code/releases)
- **主要变更**:
  - `chore(release)`: 版本号升级至 v0.18.5
  - `ci(release)`: 稳定版发布后自动发布 VSCode companion 扩展
- **点评**: 本次 nightly 版本主要聚焦于 CI/CD 流程优化，为后续稳定版的自动化发布铺平道路。

---

## 3. 社区热点 Issues

| # | 标题 | 优先级 | 类型 | 评论数 | 为什么重要 |
|---|------|--------|------|--------|-----------|
| [#5090](https://github.com/QwenLM/qwen-code/issues/5090) | Refactor: Decouple Provider Identity from SDK Protocol | P2 | Feature | 6 | 支持自定义 Provider ID 自由字符串，解耦 SDK 协议路由，是扩展多模型支持的基础架构改进 |
| [#3877](https://github.com/QwenLM/qwen-code/issues/3877) | .env 文件中 OPENCODE_GO_API_KEY 未被识别 | - | Bug | 5 | 环境变量配置失效问题持续一个多月未解决，影响自定义 Provider 用户的核心认证流程 |
| [#5708](https://github.com/QwenLM/qwen-code/issues/5708) | session list cursor 接受负值和非法值 | P3 | Bug | 5 | 会话分页游标验证不严格，可能导致不可预期的分页行为 |
| [#5656](https://github.com/QwenLM/qwen-code/issues/5656) | 将 tool-use 摘要从对话历史移至加载指示器 | P3 | Feature | 5 | 改善终端 UX，减少对话历史中的视觉噪音，提升可读性 |
| [#5634](https://github.com/QwenLM/qwen-code/issues/5634) | autofix tier-1 信任可被不可信 issue 文本影响的 LLM 标签 | P2 | Security | 4 | 安全隐患：恶意 issue 文本可能绕过人工审核直接触发 autofix agent |
| [#5641](https://github.com/QwenLM/qwen-code/issues/5641) | shell 工具结果被重复提交 | P2 | Bug | 4 | 确定性 OpenAI 兼容 Provider 下 shell 工具结果重复，影响核心工具调用可靠性 |
| [#5713](https://github.com/QwenLM/qwen-code/issues/5713) | Alacritty 中光标几乎不可见 | P3 | Bug | 4 | 终端兼容性问题，影响 Alacritty 用户的日常使用体验 |
| [#5611](https://github.com/QwenLM/qwen-code/issues/5611) | web_fetch 无法获取 JSON API（HTTP 415） | P2 | Bug | 3 | `web_fetch` 仅发送 `text/*` Accept 头，导致 JSON API 调用失败，限制了工具实用性 |
| [#5722](https://github.com/QwenLM/qwen-code/issues/5722) | Token 速度显示在思考/工具调用期间消失或停滞 | P2 | Bug | 2 | TUI 实时 tok/s 显示在三种场景下行为异常，影响用户对模型性能的感知 |
| [#5677](https://github.com/QwenLM/qwen-code/issues/5677) | 追踪 ACP 远程能力的缺口（cd/permissions/trust/lsp/setup-github） | P2 | Feature | 2 | 系统性追踪 daemon/ACP 模式下缺失的 CLI 能力，是远程开发体验的关键路线图 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#5724](https://github.com/QwenLM/qwen-code/pull/5724) | fix(test): 通过独立 QWEN_HOME 隔离 ACP 集成测试 agent | ✅ 已合并 | 解决并行测试中的全局配置竞态问题，提升 CI 稳定性 |
| [#5723](https://github.com/QwenLM/qwen-code/pull/5723) | fix(triage): 强化 PR 门控，增加批量检测和问题存在性检查 | 🔄 开放中 | **社区热点**：针对 AI 机器人单日 20+ 低质量 PR 的问题，引入批量提交检测、红旗模式识别等防护机制 |
| [#5589](https://github.com/QwenLM/qwen-code/pull/5589) | docs: 对齐文档与当前 CLI 行为 | 🔄 开放中 | 全面更新 MCP 管理、扩展设置、主题、SDK 权限等文档，解决文档与实际行为不一致问题 |
| [#5561](https://github.com/QwenLM/qwen-code/pull/5561) | feat(mcp): 设置变更时实时热重载 MCP 服务器 | 🔄 开放中 | 编辑 `settings.json` 中的 `mcpServers` 后自动连接/断开，无需重启（对应 Issue #3696） |
| [#5638](https://github.com/QwenLM/qwen-code/pull/5638) | fix(daemon): 刷新 workspace provider 默认值 | 🔄 开放中 | `GET /workspace/providers` 现在每次请求都从最新设置构建快照，解决缓存过期问题 |
| [#5678](https://github.com/QwenLM/qwen-code/pull/5678) | fix(core): 验证 IDE server 端口环境变量 | ✅ 已合并 | 限制 `QWEN_CODE_IDE_SERVER_PORT` 为 1-65535 范围内的有效 TCP 端口 |
| [#5693](https://github.com/QwenLM/qwen-code/pull/5693) | fix(core): read_file offset/limit 要求整数值 | ✅ 已合并 | 将 `read_file` 的范围参数从 `number` 改为 `integer` 类型 |
| [#5696](https://github.com/QwenLM/qwen-code/pull/5696) | fix(core): LSP 工具位置参数要求整数 | ✅ 已合并 | LSP 工具的 line/character/limit 等参数统一改为 `integer` schema |
| [#5699](https://github.com/QwenLM/qwen-code/pull/5699) | fix(core): 声明整数工具参数 | ✅ 已合并 | `run_shell_command.timeout`、`monitor.max_events` 等参数从 `number` 改为 `integer` |
| [#5711](https://github.com/QwenLM/qwen-code/pull/5711) | fix(vscode): clamp open file 位置值 | 🔄 开放中 | 修复 VS Code companion 中 `openFile` 行号/列号为 0 时产生负值的问题 |

---

## 5. 功能需求趋势

从今日 Issues 和 PR 中可提炼出以下 **5 大功能方向**：

### 🔌 1. 参数验证与类型安全（最高频）
今日超过 **15 个 Issue/PR** 聚焦于参数验证问题，包括：
- 整数字段接受小数值（`maxSessions`、`maxConnections`、`read_file` 范围等）
- 负值和零值未被拒绝（session cursor、MCP timeout、cron prompt 等）
- JSON Schema 类型声明与运行时验证不一致

**趋势**: 社区正在系统性清理参数验证边界，这是代码成熟度提升的标志。

### 🌐 2. ACP/Serve 远程能力完善
- Issue #5677 系统性追踪 ACP 模式下缺失的 CLI 能力
- PR #5561 实现 MCP 服务器热重载
- PR #5638 修复 daemon provider 默认值刷新

**趋势**: 远程开发（daemon/ACP 模式）是 Qwen Code 的重点方向，社区正在补齐与本地 CLI 的能力差距。

### 🎨 3. 终端 UX 改进
- Issue #5656 提议将 tool-use 摘要移至加载指示器
- Issue #5722 修复 tok/s 显示异常
- Issue #5713 修复 Alacritty 光标可见性

**趋势**: 随着用户量增长，终端交互细节的打磨需求日益增加。

### 🔧 4. 自定义 Provider 生态
- Issue #5090 提议解耦 Provider ID 与 SDK 协议
- Issue #3877 环境变量认证失效
- Issue #4814 改进自定义 Provider 添加模型的 UI

**趋势**: 社区强烈希望 Qwen Code 成为更通用的 AI 编码工具，而非绑定特定云服务商。

### 🔒 5. 安全与自动化审核
- Issue #5634 发现 autofix 流程可被恶意 issue 文本绕过
- PR #5723 提出 PR 门控强化方案

**趋势**: 随着 AI 自动化流程（triage/autofix）的引入，安全防护成为新焦点。

---

## 6. 开发者关注点

### ⚠️ 高频痛点

1. **环境变量配置不被识别**（Issue #3877）
   - 开发者设置了 `.env` 文件但 Qwen Code 仍要求选择认证方式
   - 持续一个多月，影响自定义 Provider 用户

2. **web_fetch 工具实用性受限**（Issue #5611）
   - 无法获取 JSON API，限制了工具在现代 REST API 场景下的应用

3. **shell 工具结果重复**（Issue #5641）
   - 使用确定性 OpenAI 兼容 Provider 时出现，影响核心工作流

4. **文档与实际行为不一致**（Issue #5563）
   - `mcp add --scope` 默认值文档写 `project` 但代码实际为 `user`

### 💡 社区建议

- **PR 质量管控**: 社区对 AI 机器人批量提交低质量 PR 表示担忧，PR #5723 提出的批量检测和红旗模式识别机制值得跟进
- **测试稳定性**: ACP 集成测试的并行竞态问题已通过 PR #5724 修复，建议后续推广到其他集成测试
- **参数验证统一化**: 建议建立统一的参数验证框架，避免逐个修复的碎片化方式

---

> 📊 **数据概览**: 今日 50 条 Issues（30 条高评论）、50 条 PRs（20 条高评论）、1 个新版本发布
> 
> 🔗 **仓库**: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 — 2026-06-23

---

## 1. 今日速览

今日社区核心动态集中在 **v0.8.65 大规模架构重构**的推进上：维护者 Hmbown 集中提交了一批 Provider 路由、Fleet 子代理执行和 TUI 可靠性的 PR，同时发布了 **v0.8.64 安全加固版本**。Issue 讨论热度最高的是多 Provider 路由架构、Fleet 子代理冻结回归以及 OpenRouter 兼容性问题。整体来看，项目正处于从 DeepSeek 专用工具向 **多 Provider 通用编码平台** 转型的关键阶段。

---

## 2. 版本发布

### v0.8.64（安全加固版）

- **项目正式完成品牌重命名**：`deepseek-tui` npm 包已废弃，统一为 **CodeWhale**。用户需参考 `docs/REBRAND.md` 迁移。
- 包含安全加固、代码扫描、自动审查溯源、CI 工作流修复等集成内容（PR #3373）。
- 链接：[Release v0.8.64](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.64)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|-----------|---------|
| [#2942](https://github.com/Hmbown/CodeWhale/issues/2942) | Codewhale 会自问自答（CLOSED） | 用户报告 AI 在无指令时自主执行操作导致项目崩溃，涉及 agent 行为边界控制 | 7 条评论，已关闭 |
| [#1978](https://github.com/Hmbown/CodeWhale/issues/1978) | OpenRouter 兼容 base_url 测试夹具 | 多 Provider 路由架构的核心需求，影响所有使用自定义网关的用户 | 6 条评论，持续活跃 |
| [#3222](https://github.com/Hmbown/CodeWhale/issues/3222) | 推理流样式覆盖（inline thinking blocks） | 解决 OpenAI 兼容网关 `<think>` 块显示问题，影响推理模型用户体验 | 6 条评论 |
| [#3289](https://github.com/Hmbown/CodeWhale/issues/3289) | Fleet worker fanout 与 TUI 冻结回归 | 多子代理并发时 TUI 无响应，是 v0.8.65 可靠性核心问题 | 5 条评论 |
| [#2629](https://github.com/Hmbown/CodeWhale/issues/2629) | SiliconFlow/Tencent TokenHub 认证路由 | 国内主流 Provider 接入问题，影响中国用户群体 | 4 条评论 |
| [#3154](https://github.com/Hmbown/CodeWhale/issues/3154) | Fleet 执行基板 EPIC | 定义 CodeWhale 子代理执行架构的核心 Issue，影响深远 | 4 条评论，Hmbown 主导 |
| [#2608](https://github.com/Hmbown/CodeWhale/issues/2608) | Provider/Model/Route 分离 EPIC | 架构重构核心，解决长期存在的 Provider 身份与模型身份混淆问题 | 4 条评论 |
| [#3167](https://github.com/Hmbown/CodeWhale/issues/3167) | Fleet 配置文件（角色/权限/委托） | 定义用户-facing 的 Fleet 配置模型，统一命名规范 | 4 条评论 |
| [#2574](https://github.com/Hmbown/CodeWhale/issues/2574) | 能力感知的 Provider 故障转移链 | 多 Provider 场景下的自动降级能力，提升可靠性 | 4 条评论 |
| [#3019](https://github.com/Hmbown/CodeWhale/issues/3019) | Codex/Responses 路由可靠性 | 提升 OpenAI Codex 路由的 retry/工具结果/usage 元数据可靠性 | 3 条评论，今日更新 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 功能/修复 | 状态 |
|---|------|----------|------|
| [#3425](https://github.com/Hmbown/CodeWhale/pull/3425) | 新增百度千帆 Provider 路由 | 添加 `qianfan`/`baidu-qianfan` 别名，支持 API key/base URL/model 配置 | OPEN |
| [#3424](https://github.com/Hmbown/CodeWhale/pull/3424) | 文档化阿里云百炼/DashScope 路由 | 明确百炼作为 OpenAI 兼容路由的配置方式，添加回归测试 | OPEN |
| [#3423](https://github.com/Hmbown/CodeWhale/pull/3423) | 文档化 OpenRouter 兼容 base URL | 完成 #1978 的文档切片，支持自定义网关配置 | OPEN |
| [#3422](https://github.com/Hmbown/CodeWhale/pull/3422) | Codex Responses 重试边界测试 | 增强 #3019 覆盖，验证 503 瞬态错误重试 | OPEN |
| [#3327](https://github.com/Hmbown/CodeWhale/pull/3327) | 子代理开关命令 | 添加 `/config subagents on\|off\|status` 控制 | OPEN |
| [#3370](https://github.com/Hmbown/CodeWhale/pull/3370) | 企业微信智能机器人桥接 | 新增 WeCom 集成，扩展企业场景 | OPEN |
| [#3373](https://github.com/Hmbown/CodeWhale/pull/3373) | v0.8.64 安全与发布集成 | 安全加固、CI 修复、社区贡献整合 | CLOSED |
| [#3168](https://github.com/Hmbown/CodeWhale/pull/3168) | Runtime API 品牌中性化重命名 | Phase 0+1：DeepSeek → CodeWhale 命名迁移 | CLOSED |
| [#2214](https://github.com/Hmbown/CodeWhale/pull/2214) | Linux 沙箱进程加固 | PR_SET_DUMPABLE、NO_NEW_PRIVS、RLIMIT_CORE | CLOSED |
| [#2220](https://github.com/Hmbown/CodeWhale/pull/2220) | Windows 沙箱 Job Object 实现 | 进程树隔离、内存限制、UI 限制 | CLOSED |

---

## 5. 功能需求趋势

从当前 Issue 和 PR 分布来看，社区最关注的功能方向：

1. **多 Provider 路由架构**（最高频）
   - 涉及 Issue：#2608、#2629、#2621、#3320、#3357、#1978
   - 社区希望支持百度千帆、阿里云百炼、SiliconFlow、腾讯 TokenHub、小米 MiMo 等国内 Provider，以及 OpenRouter 等第三方网关

2. **Fleet 子代理执行系统**
   - 涉及 Issue：#3154、#3167、#3205、#3166、#3289
   - 多 worker 并发、角色配置、权限委托、TUI 冻结恢复是核心诉求

3. **沙箱安全与跨平台**
   - 涉及 PR：#2214、#2220
   - Linux/Windows 沙箱隔离、进程加固、权限控制

4. **TUI 可靠性与用户体验**
   - 涉及 Issue：#2942、#3222、#3019
   - 推理流显示、工具调用渲染、agent 行为边界控制

5. **企业集成**
   - 涉及 PR：#3370
   - 企业微信等国内企业工具集成需求

---

## 6. 开发者关注点

**高频痛点：**
- **Provider 路由混乱**：开发者反馈当前 Provider 身份、模型身份、wire ID 混用，导致配置困难（#2608）
- **子代理并发稳定性**：多 Fleet worker 并发时 TUI 冻结，输入/渲染/取消全部无响应（#3289）
- **Agent 行为不可控**：AI 在无明确指令时自主执行操作，导致项目损坏（#2942）
- **国内 Provider 支持不足**：百度千帆、阿里云百炼、SiliconFlow 等主流国内服务缺乏一等公民支持

**高频需求：**
- 统一的 Provider 配置体验（API key、base URL、model 的环境变量标准化）
- 可视化的 Provider 就绪状态仪表盘（#3083）
- 自动化的 Provider 故障转移能力（#2574）
- 子代理的细粒度控制（开关、角色、权限）

---

*数据来源：[github.com/Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 报告生成时间：2026-06-23*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*