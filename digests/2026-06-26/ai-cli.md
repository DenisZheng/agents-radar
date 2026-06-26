# AI CLI 工具社区动态日报 2026-06-26

> 生成时间: 2026-06-26 00:40 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向分析报告 | 2026-06-26

---

## 1. 生态全景

当前 AI CLI 工具市场处于**高速增长与格局分化并存**的阶段。Claude Code 和 OpenAI Codex 凭借底层模型优势占据第一梯队，Gemini CLI 和 OpenCode 在开源社区快速追赶，而 Qwen Code、DeepSeek TUI（现 CodeWhale）等新兴工具正通过差异化定位争夺细分市场。五大共性趋势浮现：**Agent 可靠性治理**成为核心议题、**配额与成本失控**引发用户强烈反弹、**Windows 平台体验**普遍成为短板、**MCP 插件生态**加速标准化、**会话连续性与可观测性**成为竞争焦点。整体来看，2026 年 Q2 末正处于从"功能竞赛"向"体验深耕"的转型拐点。

---

## 2. 各工具活跃度对比

| 工具 | Issues 量 | PR 量 | Release | 核心动态 |
|------|-----------|-------|---------|----------|
| **Claude Code** | 10（Top社区） | 1（已合并） | v2.1.193 | auto-mode 分类器全覆盖，权限透明度增强 |
| **OpenAI Codex** | 11（Top社区） | 10（Top社区） | 无（0.143 alpha 迭代） | 配额异常消耗集中爆发，MCP 生态高频迭代 |
| **Gemini CLI** | 10（Top社区） | 10（Top社区） | v0.49.0 / v0.50.0-preview.1 | 安全补丁（路径穿越）、Tool Registry DI |
| **GitHub Copilot CLI** | 10（Top社区） | 1 | 无 | 会话恢复 Bug、企业配置诉求集中 |
| **Kimi Code CLI** | 2 | 0 | 无 | MCP 兼容性、TUI 抖动问题 |
| **OpenCode** | 10（Top社区） | 10（Top社区） | v1.17.11 | Windows segfault、内存问题megathread、session snapshot |
| **Pi** | 10（Top社区） | 11（Top社区） | 无 | 流式连接不稳定、TUI 渲染、coding-agent 基础设施 |
| **Qwen Code** | 10（Top社区） | 10（Top社区） | v0.19.2-nightly | Windows Shell 泄漏 Panic、语音功能扩展 |
| **DeepSeek TUI (CodeWhale)** | 10（Top社区） | 10（Top社区） | v0.8.65 | Hotbar MVP 全面落地、品牌更名 |

> 注：各工具均取 Top 10 Issues/PRs 作为比较基准，不代表总量。

**PR 密度排名**：OpenAI Codex、Gemini CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（各 10 条 Top PR）活跃度最高，均处于密集迭代期。Claude Code 和 Copilot CLI 今日代码变更量较低，但 Issues 讨论热度不低。

---

## 3. 共同关注的功能方向

### ① Agent 可靠性与可观测性

- **Claude Code**：子代理 API 401 错误信息不透明、auto-mode 分类器误报
- **Gemini CLI**：子代理达到 MAX_TURNS 竟报告成功、Agent 无限挂起
- **OpenCode**：CPU 99% 卡死、长会话内存失控
- **DeepSeek TUI**：Plan/Agent 模式混淆、审批语义不统一
- **共同诉求**：子代理状态反馈准确、执行过程可视化、资源耗尽时优雅降级

### ② 配额管理与成本控制

- **OpenAI Codex**：6 条高热 Issue 聚焦 GPT-5.5 10-20 倍配额异常消耗
- **Claude Code**：Fleet 模式过度消耗 token、VS Code 会话恢复快速耗尽 Max 用量
- **OpenCode**：免费额度异常报耗尽、prompt cache 丢失导致费用飙升
- **Copilot CLI**：社区呼吁 AIC 配额可视化
- **共同诉求**：用量可预测、异常消耗保护机制、硬性上限设置

### ③ 安全与权限模型

- **Claude Code**：macOS Bypass Permissions 模式异常、auto-mode 分类器覆盖范围扩大
- **Gemini CLI**：Skill 安装路径穿越漏洞（CVE 级别）、Auto Memory 敏感信息泄露
- **Qwen Code**：WebFetch 拒绝 userinfo URL、桌面端安全加固
- **DeepSeek TUI**：YOLO 模式仍请求确认、Plan 模式执行文件修改
- **共同诉求**：权限粒度更细、安全语义一致性、沙箱边界明确

### ④ Windows 平台体验

- **Claude Code**：桌面端崩溃残留进程、ARM64 内核无法启动
- **OpenAI Codex**：syspolicyd CPU 飙升、沙箱假人对话
- **OpenCode**：Bun segfault 导致 v1.17.10 无法启动
- **Qwen Code**：工具每次调用开启新 PowerShell 进程直至 OOM
- **Copilot CLI**：WSL2 ARM64 剪贴板失效、文本错位
- **共同诉求**：Windows 平台投入更多 QA 资源、进程管理更健壮

### ⑤ 会话管理与持久化

- **Copilot CLI**：残留会话认证态残留、会话列表查询困难
- **Qwen Code**：`/loop` 中断未清理待处理任务、折叠会话恢复丢失上下文
- **OpenAI Codex**：296 👍 请求恢复 `/undo`、compaction 后丢失编辑记忆
- **Pi**：非 session 文件被静默截断、历史记录持久化需求
- **共同诉求**：会话原子性、持久化无损、可追溯可回滚

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线差异化 |
|------|----------|----------|----------------|
| **Claude Code** | 全栈 AI 编码助手，auto-mode 为核心差异化 | 个人开发者、小团队 | Shell 命令分类器 + 权限智能审批，macOS 体验最佳 |
| **OpenAI Codex** | GPT 模型原生编码工具，MCP 生态领先 | 高级用户、企业团队 | Rust CLI + Desktop 双轨，Apps/Connectors 差异化 |
| **Gemini CLI** | 开源多模态 AI CLI，安全加固为卖点 | 安全敏感型开发者 | Skill 沙箱 + Auto Memory + AST 感知，安全审计活跃 |
| **GitHub Copilot CLI** | GitHub 生态延伸，IDE 集成企业管控 | GitHub 生态企业用户 | GitHub 平台深度绑定，企业 SSO/AIC 配额为核心价值 |
| **Kimi Code CLI** | 大上下文窗口 + MCP 工具扩展能力 | 中国开发者、Moonshot 生态 | 深度 MCP 集成（200+ 工具），中文生态优化 |
| **OpenCode** | 多模型多 Provider CLI，成本控制敏感型 | 多模型用户、成本敏感者 | Bun 运行时、多 OAuth 账号管理、免费模型路由 |
| **Pi** | 开源 headless AI 编程引擎，SDK 友好 | 开发者构建自动化工作流 | RPC 接口 + orchestrator + HITL 中断，平台化方向明显 |
| **Qwen Code** | 多模态 + 语音输入，桌面端功能丰富 | 国内个人用户 + 企业 | 语音听写、桌面应用、扩展生态，功能覆盖面广 |
| **DeepSeek TUI (CodeWhale)** | 终端原生交互体验，Hotbar 快速命令 | 终端重度用户、Vim 工作流 | Hotbar 8 槽位 + session 诊断工具，重 TUI 交互设计 |

---

## 5. 社区热度与成熟度

### 🔥 高活跃度（日均 Issues 10+、PRs 10+）

- **OpenAI Codex**：今日最活跃，6 条配额异常 Issue 集中爆发，PR 密度最高，显示团队响应能力与用户期待同步高涨。社区讨论深度高，涉及架构层面（model_needs_follow_up 循环、compaction 策略）。
- **Pi**：coding-agent 基础设施密集迭代（RPC 命令、orchestrator、timeout 治理），SDK/headless 用户生态正在形成。TUI 渲染 Issue 数量多但关闭率高，显示问题修复快速。
- **Gemini CLI**：连续两个版本发布（v0.49.0 + v0.50.0-preview.1），Thought Leakage 和 MCP 资源隔离两大高质量 PR 推进，技术深度受认可。
- **Qwen Code**：22 条 Issues + 50 条 PR 的绝对数量最高，Windows Shell 泄漏以 P1 级别紧急处理，显示团队响应速度快。
- **DeepSeek TUI (CodeWhale)**：Hotbar 功能 8 个 PR 密集合入，品牌更名（DeepSeek TUI → CodeWhale）显示项目进入新阶段，但重命名也带来短期摩擦。

### 🔄 快速迭代中

- **OpenCode**：v1.17.10 → v1.17.11 连续发布，Windows segfault 事件推动 CI 切换 Bun canary，内存问题 #20695 成为长期 megathread，显示项目处于**快速迭代但稳定性承压**阶段。
- **Copilot CLI**：新模式（--list-models、AIC 配额、企业配置）需求 100% 为新 Issue，说明**社区期望值快速增长**，当前产品力尚未完全匹配。

### 📉 低活跃度

- **Kimi Code CLI**：今日仅 2 条 Issue、0 PR，社区对话量偏低。MCP 工具兼容性（212 个工具）值得关注，但社区整体声量较小，可能处于早期积累期或用户群体垂直度高。

### 综合评估

| 维度 | 领先者 |
|------|--------|
| PR 密度与迭代速度 | Pi > Qwen Code > Codex > Gemini = OpenCode = CodeWhale |
| 用户讨论深度 | Codex（配额事件）> Claude Code（权限模型）> Gemini（安全架构） |
| 企业场景覆盖 | Copilot CLI > Codex > Claude Code |
| 开发者工具链 | Pi（SDK化）> Gemini（评估体系）> CodeWhale（TUI 体验） |
| 跨平台一致性 | Gemini > Codex > Claude Code（Windows 问题较多） |

---

## 6. 值得关注的趋势信号

### 🚨 信号 1：Agent 可信度危机

子代理误报成功、无限挂起、资源耗尽失控——**五个工具同时出现 Agent 可靠性问题**。这不是个别 Bug，而是 LLM 作为执行引擎的架构级挑战。建议：
- 引入独立 Agent 状态监控，与 LLM 输出解耦
- 实施 Agent 执行超时、轮次硬限、资源配额的三重保护
- 重点关注 Gemini #27971（Thought Leakage 修复）——该 PR 解决 LLM 内部状态泄露问题，属行业共性难题

### 🚨 信号 2：配额不可预测性正在伤害用户信任

OpenAI Codex 6 条配额 Issue（总 👍 300+，💬 200+）是今日最强烈的信号。用户无法信任一个"2-3 个提示耗尽 5 小时预算"的工具。建议所有 AI CLI 工具：
- 增加 real-time 用量仪表盘
- 对 auto-compact、session restore、子代理调用等非交互token消耗设定保护阈值
- 公开 model_needs_follow_up 等后台循环的成本影响

### 🚨 信号 3：Windows 成为 AI CLI 的"信任缺口"

Claude Code、Codex、OpenCode、Qwen Code、Copilot CLI——**几乎所有主流工具在 Windows 上都有严重体验缺陷**。Windows 不再是"二等公民"可接受的定位。建议：
- 将 Windows 稳定性纳入 release gate 检查项
- 针对 Windows ARM64 提供一等兼容（Claude Code、Copilot CLI 均匮乏）
- Qwen Code #5873（Shell 泄漏 OOM）应作为行业警示，Windows 进程管理需专项测试

### 🚨 信号 4：MCP 插件生态进入战国时代

今日汇总数据：Codex 6 个 MCP 相关 PR、Copilot CLI 5 个 MCP Issue、Claude Code #2643（preToolUse hook 权限）、Gemini #28143（MCP 资源隔离）、Kimi #2475（212 工具 MCP 兼容性）。MCP 已是 AI CLI 扩展能力的**事实标准**，但协议实现质量参差不齐。建议：
- 推动 MCP server 并发和 OAuth 自动刷新的标准化
- 处理好 WebSocket 流式连接的可靠性（Pi #4945 的 `Working...` 假死是典型案例）

### 🚨 信号 5：从"功能覆盖"到"体验深耕"

对比 2025 Q4 动态（功能竞赛）与今日（体验投诉为主），AI CLI 市场正在经历成熟度拐点。用户不再问"你能做什么"，而是"你是否稳定、透明、可控"。对开发者的启示：
- **优先级重排**：cost governance、error transparency、platform parity 比新功能更重要
- **差异化**：从模型性能转向开发者体验可靠性（OpenCode 的 session snapshot、DeepSeek 的 Hotbar、Pi 的 headless 引擎都是有效的差异化路径）
- **长期价值**：Pi 的 headless 引擎生态、Gemini 的评估体系、Codex 的 MCP 生态布局，显示头部工具正在构建难以短期复制的技术壁垒

### 🚨 信号 6：子代理/多代理架构普及但成熟度不足

Claude Code（Fleet/Codex）、Gemini（Subagent）、DeepSeek TUI（Fleet workers）、Pi（orchestrator + RPC）、Qwen Code（`/loop`）均实现了某种形式的多代理协作。但状态同步、资源管理、错误隔离均处于早期阶段。**多代理架构将是 2026 H2 的稳定性攻坚重点。**

---

> *报告由 OWL 生成 · 2026-06-26 · 数据基于 GitHub 公开 Issues/PRs*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据来源**: [anthropics/skills](https://github.com/anthropics/skills) | **截止**: 2026-06-26

---

## 一、热门 Skills 排行

| # | PR | Skill / 主题 | 👍 | 状态 | 核心功能 |
|---|---|---|---|---|---|
| 1 | [#492](https://github.com/anthropics/skills/issues/492) | **Trust Boundary 安全** | 2 | OPEN | 社区 skills 以 `anthropic/` 命名空间分发，造成官方/社区信任边界模糊 |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) | **组织级 Skill 共享** | 7 | OPEN | 企业内 Skill 分发依赖手动上传，呼吁原生共享机制 |
| 3 | [#556](https://github.com/anthropics/skills/issues/556) | **run_eval.py 触发检测** | 7 | OPEN | `claude -p` 模式下 Skill 触发率 0%，影响 description 优化循环可信度 |
| 4 | [#189](https://github.com/anthropics/skills/issues/189) | **Skill 去重** | 9 | OPEN | `document-skills` 与 `example-skills` 插件内容重复，浪费上下文窗口 |
| 5 | [#62](https://github.com/anthropics/skills/issues/62) | **Skill 丢失** | 2 | OPEN | 用户上传的自定义 Skill 莫名消失，文件重命名可能触发同步异常 |
| 6 | [#202](https://github.com/anthropics/skills/issues/202) | **skill-creator 优化** | 1 | CLOSED | skill-creator 文档冗长、不符合 Skill 编写最佳实践 |
| 7 | [#412](https://github.com/anthropics/skills/issues/412) | **Agent 治理 Skill** | 0 | CLOSED | 提出 agent-governance 概念——策略执行、威胁检测、信任评分与审计追踪 |
| 8 | [#16](https://github.com/anthropics/skills/issues/16) | **Skill → MCP 暴露** | 0 | OPEN | 建议将 Skill 能力以 MCP 协议暴露，统一 AI 软件接口 |

---

## 二、社区需求趋势

从 Issues 关键词聚类，社区最期待的 Skill 方向：

| 趋势方向 | 代表 Issue | 信号解读 |
|---|---|---|
| **Skill 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 社区高度关注第三方 Skill 冒充官方的风险，期待命名空间隔离或签名机制 |
| **企业级协作与分发** | [#228](https://github.com/anthropics/skills/issues/228)、[#61](https://github.com/anthropics/skills/issues/61) | 组织内 Skill 共享、权限管控、API 稳定性是企业用户核心诉求 |
| **Agent 治理与安全** | [#412](https://github.com/anthropics/skills/issues/412)、[#1175](https://github.com/anthropics/skills/issues/1175) | 权限控制、审计追踪、上下文安全是 Agent 落地关键 |
| **Skill 互操作性** | [#16](https://github.com/anthropics/skills/issues/16)、[#29](https://github.com/anthropics/skills/issues/29) | 社区希望 Skill 能跨 Claude Code / Bedrock / MCP 协议通用 |
| **上下文窗口优化** | [#189](https://github.com/anthropics/skills/issues/189)、[#1329](https://github.com/anthropics/skills/issues/1329) | 重复 Skill 浪费 token，compact-memory 提案旨在压缩 Agent 状态 |
| **Skill 工程质量** | [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169) | 评估脚本的触发检测、跨平台兼容性是持续痛点 |

---

## 三、高潜力待合并 Skills（PR）

以下 PR 讨论活跃、修复明确，合并概率较高：

| PR | 主题 | 潜力说明 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py recall=0%** | 直接修复 Issue #556/1169 的核心 bug，阻塞 description-optimization 功能 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | **fix(skill-creator): trigger detection 漏检** | 延续 #1298，修复 Skill 名称匹配逻辑，6 月仍在活跃更新 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator: Windows 兼容** | 一行修复 `claude.cmd` 调用，降低 Windows 用户贡献门槛 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | **fix Windows subprocess pipe 读取** | 解决 WinError 10038，与 #1050 形成 Windows 修复组合 |
| [#361](https://github.com/anthropics/skills/pull/361) | **未检测 YAML 特殊字符** | 防止 `description` 字段因 `:#[]{}` 静默解析失败，提升 Skill 创建体验 |
| [#362](https://github.com/anthropics/skills/pull/362) | **UTF-8 多字节字符 panic** | 修复 Rust CLI 处理非 ASCII 字符时的崩溃，影响国际化社区 |
| [#538](https://github.com/anthropics/skills/pull/538) | **fix(pdf): 大小写敏感引用** | 修复 Linux 下 PDF Skill 文件引用失效，简单明确 |
| [#541](https://github.com/anthropics/skills/pull/541) | **fix(docx): w:id 碰撞** | 修复含书签文档的 tracked change 损坏，影响文档 Skill 可靠性 |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求：Skill 评估基础设施（skill-creator / run_eval）的可靠性与跨平台兼容性——description 优化循环的 `recall=0%` 问题已产生 10+ 独立复现，是阻塞社区贡献的最大技术瓶颈；与此同时，企业用户对信任边界隔离与组织级分发的需求正在快速升温。**

---

# Claude Code 社区动态日报 | 2026-06-26

## 1. 今日速览

Claude Code 发布 v2.1.193，重点增强 auto-mode 分类器覆盖范围（所有 Shell 命令均走分类器）并完善权限拒绝原因的可追溯性。社区讨论集中在 macOS 桌面端权限模式异常、VS Code 扩展会话恢复导致 Max 用量快速耗尽，以及 Windows 平台多项稳定性问题。

## 2. 版本发布

### v2.1.193
- **auto-mode 全覆盖**：新增 `autoMode.classifyAllShell` 设置，将所有 Bash/PowerShell 命令路由至 auto-mode 分类器，而非仅匹配任意代码执行模式。
- **拒绝原因透传**：auto-mode 拒绝原因已写入 transcript、拒绝 toast 及 `/permissions` 最近拒绝列表。
- 其他变更因数据截断未完整展示。

## 3. 社区热点 Issues

| # | Issue | 热度 | 要点 |
|---|-------|------|------|
| 1 | [#61415](https://github.com/anthropics/claude-code/issues/61415) macOS 桌面端 Bypass Permissions 模式无法启用，回退到 Accept Edits | 💬63 👍24 | 影响 macOS 用户工作流，社区呼声高，已标记 duplicate 但尚未修复。 |
| 2 | [#61869](https://github.com/anthropics/claude-code/issues/61869) opus-plan 模型 1M 上下文窗口报 "Usage credits required" | 💬61 👍16 | Linux 用户选 opus-plan 时触发计费错误，已关闭但讨论持续。 |
| 3 | [#39636](https://github.com/anthropics/claude-code/issues/39636) Cowork VM 在 Snapdragon X Plus (ARM64) 上内核无法启动 | 💬29 👍9 | Windows ARM64 平台兼容性问题，长期未解决。 |
| 4 | [#71478](https://github.com/anthropics/claude-code/issues/71478) VS Code 扩展恢复大型会话无警告，快速耗尽 Max 用量 | 💬4 | 新报告，涉及成本风险，需关注。 |
| 5 | [#53247](https://github.com/anthropics/claude-code/issues/53247) Windows 桌面端崩溃后残留 Silo / Job Object，需注销或重启恢复 | 💬6 👍5 | 影响 Windows 用户体验，涉及进程清理机制。 |
| 6 | [#54179](https://github.com/anthropics/claude-code/issues/54179) macOS 桌面端 GUI SSH 多会话互相使对方 auth token 失效 | 💬3 👍2 | 远程开发场景下的认证冲突。 |
| 7 | [#60323](https://github.com/anthropics/claude-code/issues/60323) CLAUDE.md 明确禁用 TaskCreate 但 system-reminder 仍反复触发 | 💬3 👍5 | 用户自定义指令与系统提醒冲突，影响指令遵循体验。 |
| 8 | [#70958](https://github.com/anthropics/claude-code/issues/70958) 子代理 API 401 被误报为 "Request interrupted by user" | 💬2 👍1 | 认证过期错误信息不透明，增加调试难度。 |
| 9 | [#71465](https://github.com/anthropics/claude-code/issues/71465) v2.1.193 TUI 鼠标点击在 Terminal.app 上失效（regression） | 💬2 | 新版本回归，影响 macOS Terminal.app 用户交互。 |
| 10 | [#71461](https://github.com/anthropics/claude-code/issues/71461) Fleet 模式在简单类型检查任务上过度消耗 token | 💬1 | 多代理模式成本效率问题，引发对 fleet 模式实用性的讨论。 |

## 4. 重要 PR 进展

| PR | 状态 | 内容 |
|----|------|------|
| [#63686](https://github.com/anthropics/claude-code/pull/63686) | 已合并 | 将 issue 生命周期中的 stale 和 autoclose 超时从 14 天延长至 90 天，减少活跃 issue 被误关闭的概率。 |

> 注：过去 24 小时内仅 1 条 PR 更新，其余 PR 活动未在本次数据窗口内。

## 5. 功能需求趋势

从当前 Issues 分布来看，社区关注方向集中在：

1. **权限与安全模型**：auto-mode 分类器误报（[#71463](https://github.com/anthropics/claude-code/issues/71463)）、权限拒绝原因可追溯（v2.1.193 已部分响应）、macOS Bypass Permissions 异常（[#61415](https://github.com/anthropics/claude-code/issues/61415)）。
2. **IDE / 编辑器集成**：VS Code 扩展会话恢复策略（[#71478](https://github.com/anthropics/claude-code/issues/71478)）、IntelliJ 插件 EDT 回归（[#71455](https://github.com/anthropics/claude-code/issues/71455)）。
3. **成本与用量治理**：token 浪费治理（[#61835](https://github.com/anthropics/claude-code/issues/61835)）、Team 订阅计费路由错误（[#71476](https://github.com/anthropics/claude-code/issues/71476)）、Fleet 模式成本效率（[#71461](https://github.com/anthropics/claude-code/issues/71461)）。
4. **Windows 平台稳定性**：桌面端崩溃残留（[#53247](https://github.com/anthropics/claude-code/issues/53247)）、RDP 剪贴板重定向（[#67576](https://github.com/anthropics/claude-code/issues/67576)）、Cowork ARM64 支持（[#39636](https://github.com/anthropics/claude-code/issues/39636)）。
5. **可访问性**：桌面端键盘快捷键跳转（[#71470](https://github.com/anthropics/claude-code/issues/71470)）、权限对话框本地化（[#71479](https://github.com/anthropics/claude-code/issues/71479)）。

## 6. 开发者关注点

- **成本不可预测性**：多位用户报告在不知情的情况下耗尽 token 或 API 额度，涉及 VS Code 会话恢复、Fleet 模式、auto-compact 循环等场景。建议增加用量预警和硬性上限机制。
- **Windows 体验差距**：相比 macOS/Linux，Windows 平台在桌面端稳定性、ARM64 支持、剪贴板集成等方面问题更集中，社区期待更多资源倾斜。
- **指令遵循一致性**：system-reminder 与 CLAUDE.md 用户指令冲突（如 TaskCreate 提醒）降低了用户对 AI 行为的可控感，需优化优先级逻辑。
- **错误信息透明度**：认证失败（401）被包装为"用户中断"、PushNotification 返回值与实际状态不符等问题，增加了排障成本。
- **会话持久化**：transcript 写入时机不一致（运行中不写、退出才写）影响 hooks 和外部工具集成。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-26

---

## 1. 今日速览

今日社区焦点集中在 **配额消耗异常（rate-limit）集中爆发**，多条高等级 Issue 反映 GPT-5.5 模型在 Pro/Plus 计划下出现 10–20 倍的配额异常消耗；同时 **macOS 桌面端性能问题**（`syspolicyd`/`trustd` CPU 飙升）和 **Windows 沙箱假人对话** 也在快速发酵。版本侧无重大正式版发布，主线仍以 0.143.0 alpha 系列迭代为主。

---

## 2. 版本发布

### 稳定版
- **rust-v0.142.2** — 最新版稳定版
  - MCP 工具在支持的情况下默认启用 tool search，改善工具发现能力，同时兼容旧模型（[openai/codex#29486](https://github.com/openai/codex/pull/29486)）
  - macOS 认证客户端新增对系统代理、PAC、WPAD 设置的支持（`respect_system_proxy`）([openai/codex#26709](https://github.com/openai/codex/pull/26709))

### 预览版
- `rust-v0.143.0-alpha.25` / `.22` / `.21` / `.16` — 0.143 系列持续(alpha迭代
- `codex-zsh-v0.1.0` — Zsh 集成插件首版发布

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #28879 — GPT-5.5 Plus 计划配额跳升 10–20 倍，2–3 个 prompt 耗尽 5h 预算
- **👍 302 · 💬 152 评论** — 今日最高热度 Issue
- 6 月 16 日起大量 Plus 用户报告相同症状：token 消耗速率暴涨，会话日志中 `limit-% consumed per token` 增加约 10–20×
- **社区反应**：大量用户跟贴确认受影响，引发广泛关注，被认为是潜在的计费或模型服务端 bug
- 🔗 [openai/codex/issues/28879](https://github.com/openai/codex/issues/28879)

### 🔥 #29955 — Pro 账户 100  credits 在 1 条消息后归零
- **👍 4 · 💬 23 评论**（新发即高热）
- Pro*5 用户反馈 Codex 5h 配额和 credits 在一次对话后被清空至 0%
- 🔗 [openai/codex/issues/29955](https://github.com/openai/codex/issues/29955)

### 🔥 #30002 — Pro 5h 配额在 41 分钟内被 135万 token 耗尽（此前为 1.56亿 token 才触发）
- **👍 4 ·  19 评论**
- 配额重置后仅约 41 分钟再次触发 `usage_limit_reached`，消耗量从正常的 ~156M token 骤降至 ~1.35M token
- 🔗 [openai/codex/issues/30002](https://github.com/openai/codex/issues/30002)

### 🔥 #30034 — Pro 5h 配额在简单提示后下降 2%
- 即发即热的续篇，CLI v0.142.2 用户报告相似精度异常
- 🔗 [openai/codex/issues/30034](https://github.com/openai/codex/issues/30034)

### 🔥 #30086 — Codex Pro 配额异常消耗与 `model_needs_follow_up` token 循环有关
- 本地日志显示配额快速消耗伴随 `model_needs_follow_up` 循环，疑似空转消耗配额
-  [openai/codex/issues/30086](https://github.com/openai/codex/issues/30086)

### ⭐ #9203 — 请求恢复 `/undo` 功能
- **👍 296 · 💬 50 评论**
- 用户丢失未跟踪文件或未提交修改时缺乏回滚机制，痛点强烈
- 🔗 [openai/codex/issues/9203](https://github.com/openai/codex/issues/9203)

### 🔥 #25749 — 要求验证无法访问的旧手机号，无号码替换/恢复路径
- **👍 38 ·  64 评论**
- Google OAuth + MFA 已正常登录 ChatGPT，但 Codex 要求过时的 SMS 验证
- 🔗 [openai/codex/issues/25749](https://github.com/openai/codex/issues/25749)

### 🔥 #25719 — macOS Codex Desktop 反复触发 `syspolicyd`/`trustd` CPU 和内存失控
- **👍 54 · 💬 34 评论**
- macOS 桌面版持续导致系统守护进程高负载，影响续航与稳定性
- 🔗 [openai/codex/issues/25719](https://github.com/openai/codex/issues/25719)

### 🔥 #28978 — Desktop 26.616 新建对话报错 `missing field \inputSchema`
- **👍 30 · 💬 25 评论**
- 今日更新后桌面端任何新对话均失败，CLI 同配置正常，指向桌面 MCP 兼容性问题
-  [openai/codex/issues/28978](https://github.com/openai/codex/issues/28978)

### ⭐ #5957 — Auto compaction 导致 GPT-5-Codex 忘记上下文和已编辑文件
- **👍 9 · 💬 31 评论**
- 压缩后丢失任务进度与文件编辑记忆，影响复杂任务连续性
-  [openai/codex/issues/5957](https://github.com/openai/codex/issues/5957)

---

## 4. 重要 PR 进展（Top 10）

### #30147 — TUI 使用托管默认模型设置
- 使 `codex` 命令行启动时自动使用管理员配置的托管模型默认值，而非自行硬编码
- 🔗 [openai/codex/pull/30147](https://github.com/openai/codex/pull/30147)

### #30146 — 添加单一稳定 CI 门控（`pr-ci` workflow）
- 将原来多个分散的 GitHub Actions 状态检查合并为一个版本控制的 `CI required` 门控，简化 PR 审查流程
- 🔗 [openai/codex/pull/30146](https://github.com/openai/codex/pull/30146)

### #30109 — 跨可用性恢复能力测试
- 新增端到端测试，覆盖 World State、executor skills、MCP 进程、connectors 和恢复流程的集成场景
- 🔗 [openai/codex/pull/30109](https://github.com/openai/codex/pull/30109)

### #29934 — MCP app context 中发送应用名称和模板 ID
- 为 MCP 工具调用在 app context 中新增可选的 `appName` 和 `templateId` 字段，增强下游消费方可追溯性
- 🔗 [openai/codex/pull/29934](https://github.com/openai/codex/pull/29934)

### #30127 — 将 MCP 运行时重新路由到可用环境
- 解决了在 MCP 等待用户交互时 executor 变为可用时的运行时替换问题
- 🔗 [openai/codex/pull/30127](https://github.com/openai/codex/pull/30127)

### #29683 — 管理员托管的新线程模型设置
- 允许企业管理员为用户新建线程设定默认模型、推理力度和服务层级
-  [openai/codex/pull/29683](https://github.com/openai/codex/pull/29683)

### #30000 — Codex Apps 原型作为虚拟 HTTP MCP Server
- 新增 `codex-apps` crate，每个 connector 提供经过认证的 loopback streamable-HTTP MCP endpoint
-  [openai/codex/pull/30000](https://github.com/openai/codex/pull/30000)

### #29927 — 引入 `history_mode` 字段（legacy | paginated）
- 在 Thread 中新增历史模式字段，支持分页模式以优化长会话加载性能
-  [openai/codex/pull/29927](https://github.com/openai/codex/pull/29927)

### #30144 — 修复终端 rollout 持久性漏洞
- 修复有序远程写入器在会话存活期间可能提前向客户端暴露 terminal `TurnComplete`/`TurnAborted` 事件的时间窗口
- 🔗 [openai/codex/pull/30144](https://github.com/openai/codex/pull/30144)

### #29375 — 支持 npm marketplace plugin 来源
- 此前 `{"source":"npm"}` 被错误跳过，此 PR 修复以使 npm-backed 插件能在 `plugin list --available` 中显示
-  [openai/codex/pull/29375](https://github.com/openai/codex/pull/29375)

---

## 5. 功能需求趋势

从今日更新频率和用户反应来看，社区需求集中在以下方向：

### ⚠️ 配额与计费可靠性（紧急）
今日热榜中超过一半 Issue 涉及**配额异常消耗**，用户核心诉求是：
- 透明、可预测的 token 计费模型
- 对 `model_needs_follow_up` 等非用户主动操作进行配额保护
- bug fix 或补偿回应（近期未见官方公告）

###  上下文管理与连续性
- `/undo` 恢复（296 👍）
- compaction 后保持任务连续性（#5957）
- 历史模式分页加载（#29927）
- 会话恢复时 function_call/output 匹配（#29773）

### ️ IDE 与远程开发
- VS Code Remote-SSH 兼容性（#26951）
- 无桌面端时 mobile 连接远程 Linux（#23200，21 👍）
- code-mode process host PR (#30111, #30112)

### 🔐 认证与账户恢复
- 旧手机号无法替换、OTP 不发送
- 企业 SSO + 托管模型默认值

###  MCP 与插件生态
- MCP elicitation 运行时重新路由（#30127）
- MCP OAuth token 自动刷新（#17265，39 👍）
- npm marketplace plugin（#29375）
- Codex Apps 作为 HTTP MCP Server（#30000）

### ♿ 无障碍访问
- Screen-reader-friendly TUI 模式（#20489）

### ️ 性能与稳定性
- macOS `syspolicyd` CPU/内存失控
- Windows 沙箱假人对话频发
- Windows 严重内存压力
- 慢 MCP tools/list 阻塞首个模型请求

---

## 6. 开发者关注点总结

| 痛点 / 需求 | 频次 | 典型 Issue |
|---|---|---|
| **配额异常消耗，要求透明度与补偿** | 🔥 极高（6 条高热 Issue） | #28879, #30002, #29955, #30086 |
| **macOS 桌面端稳定性差** | 高 | #25719, #28071 |
| **Windows 沙箱体验破碎** | 高 | #29200, #30009, #30050 |
| **会话连续性保障** | 中高 | #9203, #5957, #29773 |
| **企业级管理（模型默认、合规）** | 中 | #29683, #30147, #30146 |
| **远程 / 无头开发支持** | 中 | #23200, #26951 |
| **MCP OAuth 自动化** | 中 | #17265 |
| **更新可控制性** | 中 | #18546 |
| **功能降级感知（模型质量）** | 上升中 | #30137, #29947 |

**整体判断**：今日社区热点被**配额异常消耗**一扫而空，在用户信任层面产生较大冲击；同时 macOS/Windows 桌面端稳定性问题持续发酵，跨平台体验一致性仍是核心挑战。企业级管理（托管默认值、CI 治理）和 MCP 插件生态（npm marketplace、OAuth 自动刷新）是 PR 侧的积极开发方向，显示团队正为规模化部署打基础。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-26

---

## 1. 今日速览

本次日报覆盖两个关键版本发布：**v0.50.0-preview.1** 和 **v0.49.0**，涉及工具注册表、CI 流水线修复、安全漏洞修补（路径穿越）等实质性更新。社区 Issue 方面，子代理挂起/误报问题持续发酵，Auto Memory 系统的安全性和可靠性引发集中讨论，高并发场景下的文件句柄泄漏也被正式上报。PR 层面，Thought Leakage 修复、MCP 资源隔离、编辑器启动延迟优化等高质量合并请求正在推进。

---

## 2. 版本发布

### v0.50.0-preview.1
- 修复 release 验证流程中 `npm ci --ignore-scripts` 相关问题
- 防止 workspace 二进制文件在 release 验证时被遮蔽
- 新增 **Tool Registry DI**（依赖注入）功能
- [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1)

### v0.49.0
- 启用 Dependabot npm 包冷却期，减少依赖更新频率
- 修复 skill 安装过程中的**路径穿越漏洞**（CVE 级别）
- 修复 pending tools 与 trust overrides 的交互问题
- [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.49.0)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 核心问题 |
|---|-------|------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 却报告 GOAL 成功 | 8👍/8评论 | 子代理在达到轮次上限后仍返回 `status: "success"`，导致用户误以为任务完成，实际未执行任何分析 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无限挂起 | 8👍/7评论 | 委托给 generalist agent 后 CLI 永久卡住，连简单操作（如创建文件夹）也受影响 |
| 3 | [#26384](https://github.com/google-gemini/gemini-cli/issues/26384) 高并发 shell 命令导致 "Too many open files" | 5评论 | 大量 shell 命令执行时触发 `forkpty(3)` 失败和 Exit Code 126，影响大工作区使用 |
| 4 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 日志中敏感信息泄露风险 | 5评论 | Auto Memory 在提取 agent 完成脱敏前已将 transcript 内容送入模型上下文，存在安全隐患 |
| 5 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | 5评论 | 提取 agent 跳过低信号会话后，该会话永远停留在待处理队列，导致资源浪费 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后仍显示"等待输入" | 3👍/4评论 | 简单命令执行完毕后 CLI 挂起，状态显示"Awaiting user input"，实际命令已结束 |
| 7 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级评估体系建设 | 7评论 | 继行为评估（behavioral evals）后，社区呼吁建立组件级评估基础设施，已积累 76 个测试用例 |
| 8 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取/搜索能力评估 | 1👍/7评论 | 探索 AST 感知工具能否减少工具调用轮次、降低 token 消耗，涉及代码库映射优化 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数量超 128 时出现 400 错误 | 3评论 | 可用工具过多时缺乏智能裁剪机制，直接触发 API 400 错误 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应阻止破坏性操作 | 1👍/3评论 | 模型在复杂 git 操作中倾向于使用 `git reset --force` 等危险命令，缺乏安全约束 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心内容 |
|---|-----|------|----------|
| 1 | [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | 🐛 Bug fix | **修复 Thought Leakage**：模型内部推理过程泄露到纯文本历史轮次，导致后续对话出现无限循环独白 |
| 2 | [#28143](https://github.com/google-gemini/gemini-cli/pull/28143) | 🐛 Bug fix | **MCP 资源跨服务器混淆修复**：当两个 MCP 服务器暴露相同 URI 资源时，`read_mcp_resource` 返回错误服务器的内容 |
| 3 | [#28144](https://github.com/google-gemini/gemini-cli/pull/28144) | ⚡ 性能优化 | **编辑器检测延迟初始化**：启动时不再同步探测所有编辑器，避免 Windows 上进程创建开销导致的启动缓慢 |
| 4 | [#28142](https://github.com/google-gemini/gemini-cli/pull/28142) | 🐛 Bug fix | **Vertex AI 区域路由修复**：使用 API Key 认证时 `GOOGLE_CLOUD_LOCATION` 被静默忽略，请求错误路由到 global 端点 |
| 5 | [#28149](https://github.com/google-gemini/gemini-cli/pull/28149) | 🐛 Bug fix | **Skill 资源列表尊重 .gitignore/.geminiignore**：激活技能时文件夹结构未过滤被忽略的文件 |
| 6 | [#28153](https://github.com/google-gemini/gemini-cli/pull/28153) | 🐛 Bug fix | **修复 session reset 后 `update_topic` 残留写入**：`/clear` 后孤立的 topic 更新调用可能导致状态污染 |
| 7 | [#27915](https://github.com/google-gemini/gemini-cli/pull/27915) | 🔒 安全修复 | **Trust Dialog 显示反转问题**：工作区信任对话框显示的是实际运行 hooks 的反集，存在安全隐患 |
| 8 | [#28147](https://github.com/google-gemini/gemini-cli/pull/28147) | 🔧 CI/CD | **防止坏 NPM 发布**：修复 preview 发布测试失败后 promote job 崩溃导致"悬空"NPM 版本的问题 |
| 9 | [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) | ✨ 新功能 | **Caretaker Agent Cloud Run Webhook 接入服务**：实现 GitHub webhook 入口，验证签名、Firestore 事务存储、Pub/Sub 消息发布 |
| 10 | [#28148](https://github.com/google-gemini/gemini-cli/pull/28148) | 🐛 Bug fix | **Docker 多阶段构建产物复制修复**：runtime 阶段从错误路径复制 `.tgz` 文件，导致容器构建失败 |

---

## 5. 功能需求趋势

从当前活跃 Issues 中提炼出以下五大方向：

### 🔧 Agent 可靠性与可观测性（最高频）
- 子代理状态报告准确性（MAX_TURNS 误报为成功）
- Agent 挂起/卡死检测与自动恢复
- 子代理执行轨迹可视化（`/chat share` 支持）
- Bug 报告自动包含子代理上下文

### 🔒 安全与隐私
- Auto Memory 敏感信息泄露风险（transcript 脱敏前已入模型上下文）
- 信任对话框显示逻辑反转
- Skill 安装路径穿越漏洞
- 破坏性操作（`git reset --force`）的安全约束

### ⚡ 性能与稳定性
- 高并发 shell 命令的文件句柄泄漏
- 终端窗口大小变化时的渲染性能
- 编辑器检测导致的启动延迟
- 外部编辑器退出后的终端缓冲区损坏

### 🧠 记忆系统与上下文管理
- Auto Memory 低信号会话无限重试
- 无效 memory patch 的隔离/告警
- 记忆系统整体质量改进（#26516 跟踪 issue）

### 🏗️ 开发者体验与评估体系
- 组件级评估基础设施（76 个行为测试用例）
- AST 感知工具减少 token 消耗
- Agent 自我认知能力（准确描述自身 CLI 参数和快捷键）
- 内部项目评估稳定性提升

---

## 6. 开发者关注点总结

**高频痛点：**
1. **Agent 不可预测行为** — 挂起、误报成功、无限循环是当前最集中的抱怨，直接影响日常使用信心
2. **安全边界模糊** — 模型倾向于使用破坏性命令、Auto Memory 存在敏感信息泄露路径，开发者希望有更明确的安全沙箱
3. **大规模工作区性能** — 文件句柄泄漏、启动缓慢、终端渲染卡顿在大型项目中尤为突出
4. **子代理黑盒化** — 用户无法观察子代理执行过程，bug 报告也缺少子代理上下文，调试困难

**高频需求：**
1. **可观测性工具** — 子代理轨迹可视化、执行过程实时反馈
2. **智能工具管理** — 工具数量超限时自动裁剪而非报错
3. **AST 感知能力** — 社区对代码库映射和 AST 搜索寄予厚望，认为可显著降低 token 成本
4. **评估体系建设** — 社区积极参与 behavioral evals 和组件级评估，体现出对质量保障的重视

---

> 📊 本期日报总结：Gemini CLI 社区正处于**从功能扩展向可靠性治理转型**的关键期。v0.49.0 的安全补丁和 v0.50.0 的工具注册表 DI 显示架构仍在演进，但用户最迫切的诉求集中在 Agent 行为可预测性和安全边界上。Thought Leakage 修复（#27971）和 MCP 资源隔离（#28143）是本周最值得关注的技术 PR。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI 社区动态日报 — 2026-06-26

### 1. 今日速览

过去 24 小时无新版本发布，社区讨论聚焦于**会话恢复后模型选择器认证失败**（#3596、#3680）、**preToolUse hook 静默命令重写**（#2643）以及**模型列表可发现性**（#700）等核心体验问题。此外，多个新 Issue 反映了企业用户对**组织级配置下发**和**AIC 配额可视化**的迫切需求。

---

### 2. 版本发布

无（过去 24 小时无新 Release）。

---

### 3. 社区热点 Issues

| # | Issue | 👍 | 💬 | 要点 |
|---|-------|----|----|------|
| 1 | **#700 — 提供 `--list-models` 列出所有支持模型** | 4 | 14 | 用户希望 CLI 能列出当前支持的所有模型及其 multiplier 信息，社区讨论最活跃，呼声最高。[链接](https://github.com/github/copilot-cli/issues/700) |
| 2 | **#3596 — 恢复会话后 `/model` 报 "Not authenticated"** | 11 | 7 | 高 👍 量 bug：`--resume` 后无法加载模型列表，但新建会话正常，疑似恢复流程未正确传递认证态。[链接](https://github.com/github/copilot-cli/issues/3596) |
| 3 | **#2643 — preToolUse hook 静默重写命令仍弹确认框** | 2 | 12 | 插件 hook 即使设置了 `permissionDecision: allow` 并通过 `updatedInput` 重写命令，CLI 仍强制弹出交互确认，阻塞自动化工作流。[链接](https://github.com/github/copilot-cli/issues/2643) |
| 4 | **#3501 — 滚动条导致 Windows 下文本错位** | 9 | 5 | 自引入垂直滚动条后，Windows Console Host / Terminal 中文本渲染错位，影响日常使用。[链接](https://github.com/github/copilot-cli/issues/3501) |
| 5 | **#3636 — 企业 VPN 下 Voice 模式无法启用** | 5 | 3 | 语音模式依赖 STT model catalog 获取，企业网络环境下无法连通，导致功能完全不可用。[链接](https://github.com/github/copilot-cli/issues/3636) |
| 6 | **#3534 — WSL2 ARM64 下 `/copy` 剪贴板失败** | 4 | 4 | `cmd.exe` 包装层转义问题导致 `clip.exe` 在 WSL2 aarch64 下退出码为 1，剪贴板写入全部失败。[链接](https://github.com/github/copilot-cli/issues/3534) |
| 7 | **#3909 — 企业/组织级本地配置下发（含 env）** | 0 | 2 | 新 Issue：Org admin 无法向开发者本地 CLI 统一推送配置和环境变量，目前仅有 Codespaces secrets 可覆盖云端场景。[链接](https://github.com/github/copilot-cli/issues/3909) |
| 8 | **#3932 — 展示月度 AIC 配额与用量** | 0 | 0 | 请求像 IDE 插件一样在 CLI 中显示月度 AIC 配额（如 "6219/12000 used, 52%"），当前仅有 per-session `/usage`。[链接](https://github.com/github/copilot-cli/issues/3932) |
| 9 | **#3931 — 恢复昨日会话失败** | 0 | 0 | 用户反馈 `/resume` / `--resume` 无法列出前一天刚用过的会话，体验严重退化。[链接](https://github.com/github/copilot-cli/issues/3931) |
| 10 | **#3935 — VSCode 终端忽略用户主题，强制浅色** | 0 | 0 | 自 1.0.64 起，VSCode 终端中 Copilot CLI 不再跟随用户主题设置，始终以浅色主题渲染。[链接](https://github.com/github/copilot-cli/issues/3935) |

---

### 4. 重要 PR 进展

过去 24 小时仅有 **1 个 PR** 更新：

| PR | 作者 | 状态 | 说明 |
|----|------|------|------|
| **#3928 — Add .gitignore and settings configuration** | tpsaint | OPEN | 新增 `.gitignore` 及 settings 配置文件，具体改动内容待进一步查看 diff。[链接](https://github.com/github/copilot-cli/pull/3928) |

---

### 5. 功能需求趋势

从本期全部 31 条 Issues 中提炼出以下五大关注方向：

1. **模型管理与可发现性** — 涵盖模型列表查询（#700）、恢复会话认证态丢失（#3596、#3680）、Voice 模式 catalog 获取（#3636）、AIC 配额展示（#3932）。社区对"模型"相关体验的诉求最为集中。

2. **插件与 MCP 生态** — preToolUse hook 静默重写（#2643）、MCP 菜单增强（#2956、#3564）、MCP 策略拦截不透明（#3934）、MCP 初始化 instructions 被忽略（#1579）、只读命令异步化（#3829）。插件体系是扩展能力的核心，但当前 UX 一致性不足。

3. **企业/组织级管理** — 组织级本地配置下发（#3909）、MCP 策略拦截（#3934）、Azure DevOps work items 集成（#3794）。企业用户希望 CLI 能获得与 IDE 插件同等的组织管控能力。

4. **跨平台终端兼容性** — Windows 滚动条错位（#3501）、WSL2 ARM64 剪贴板（#3534）、Linux AppImage `LD_LIBRARY_PATH` 泄漏（#3925）、VSCode 终端主题忽略（#3935）、鼠标追踪未正确退出（#3876）。跨平台渲染和 I/O 问题反馈密集。

5. **会话管理与恢复** — 恢复会话模型认证失败（#3596、#3680）、会话列表不完整（#3931）、消息时间戳缺失（#3930）、Escape 键取消行为不达预期（#3692）。会话连续性和可追溯性是 CLI 独有的高频痛点。

---

### 6. 开发者关注点总结

- **认证态在会话恢复流程中的丢失**是本期最严重的 bug 信号（#3596 获 11 👍），直接影响 `--resume` 核心功能的可用性。
- **Hook / 插件的权限模型不够细粒度**：`permissionDecision: allow` 仍无法跳过确认框，限制了 CI/CD 和自动化场景的落地。
- **企业用户的基础设施诉求**（组织配置下发、AIC 配额、Azure DevOps 集成）表明 CLI 在企业市场的渗透正在加深，但管理能力尚未跟上。
- **终端渲染质量**（滚动条、主题、鼠标追踪、剪贴板）在多平台持续收到反馈，建议作为稳定性专项集中处理。
- **CLI 与 IDE 插件的功能差距**（AIC 配额展示、时间戳、模型列表）被多次提及，功能对等是社区对 CLI 的核心期待之一。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-06-26**

---

## 1. 今日速览

过去24小时，Kimi Code CLI 社区保持活跃，共更新了 **2 条 Issue**，无新版本发布或 PR 更新。社区反馈主要集中在 **MCP 工具兼容性** 和 **终端界面渲染稳定性** 两个方面，后者涉及对话界面异常抖动和重复渲染问题，影响用户体验。

---

## 2. 版本发布

过去24小时内无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 作者 | 👍 | 重要性说明 |
|---|-------|------|------|-----|------------|
| 1 | [#2475](https://github.com/MoonshotAI/kimi-cli/issues/2475) - MCP tools | 🟠 OPEN | ptyll | 0 | 用户报告在 Windows 平台使用 v0.19.2 时，配置了 212 个工具的 MCP Server 出现兼容性问题。**MCP 协议的工具扩展能力是 CLI 的核心竞争力之一，大规模工具集的稳定性直接影响企业级用户的使用信心。** |
| 2 | [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) - 界面抖动/重复渲染 | 🟠 OPEN | yudichimiantiao | 0 | Linux 用户反馈终端界面出现异常抖动，对话会无故从头重新渲染。**终端 TUI 的渲染流畅度是 CLI 工具的基础体验，此类问题若持续存在将严重影响用户留存。** |

---

## 4. 重要 PR 进展

过去24小时内无 PR 更新。

---

## 5. 功能需求趋势

基于当前可见的 Issue 数据，社区关注的功能方向可归纳为：

| 方向 | 说明 | 相关 Issue |
|------|------|------------|
| **MCP 工具生态** | 用户对 MCP Server 的集成深度和工具数量兼容性有较高期待，大规模工具集场景下的稳定性是关键诉求 | #2475 |
| **终端 UI/UX 稳定性** | TUI 界面的渲染性能、抖动、异常刷新等问题是影响日常使用的基础痛点 | #2474 |
| **跨平台兼容性** | Windows 和 Linux 平台均有问题反馈，跨平台一致性仍需加强 | #2475, #2474 |

---

## 6. 开发者关注点

- **MCP 大规模工具场景**：当 MCP Server 暴露 200+ 工具时，CLI 能否稳定处理而不出现超时、截断或调用失败，是企业开发者最关心的问题。
- **终端渲染引擎健壮性**：对话界面的异常抖动和完整重绘不仅影响观感，更暗示底层渲染逻辑可能存在状态管理或增量更新方面的缺陷，建议优先排查。
- **平台覆盖**：Windows 和 Linux 均出现反馈，macOS 平台的社区声音相对较少，但不代表没有问题，建议关注跨平台测试覆盖。

---

> 📌 **编辑注**：今日数据量较小（仅 2 条 Issue），建议持续关注后续是否有更多社区反馈跟进上述问题。日报数据基于 2026-06-26 的 GitHub 公开数据。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-26

---

## 1. 今日速览

OpenCode 发布 **v1.17.11** 补丁，新增 session snapshot/回滚功能并修复 MCP OAuth 流程；同时 Windows 平台用户集中反馈 v1.17.10 升级后触发 Bun segfault，回退到 1.17.9 可缓解。社区讨论重心偏向**内存问题收集**与**IDE 集成体验退化**两大类。

---

## 2. 版本发布

### v1.17.11（2026-06-25）

**链接：** https://github.com/anomalyco/opencode/releases/tag/v1.17.11

**核心更新：**

| 类型 | 内容 |
|------|------|
| 🆕 功能 | 新增 **session snapshots & revert 控制**——可将整个会话（含文件变更）回滚到任意历史消息之前的状态 |
| 🐛 修复 | MCP OAuth URL 始终打印，保障浏览器流程失败时仍能手动完成登录 |
| 💻 桌面 | Chrome 风格标题栏改进（详情截断） |

---

## 3. 社区热点 Issues（Top 10）

| # | 类型 | Issue | 热度 | 说明 |
|---|------|-------|------|------|
| 1 | 🔴 性能 | **#20695 [OPEN] Memory Megathread** | 👍74 / 💬103 | 集中收集内存 issue 的官方帖，明确"不要跑 LLM 自己诊断"，需社区提供 heap snapshot；老帖持续活跃，说明内存问题是长期顽疾。 |
| 2 | 🔴 回归 | **#33742 [OPEN] v1.17.10 Bun segfault on Windows** | 👍40 / 💬45 | 昨日发布后最高热度问题，升 1.17.10 即崩、退回 1.17.9 稳定，疑似 Bun runtime 回归。 |
| 3 | 🟡 历史遗留 | **#15585 [CLOSED] free usage exceed** | 👍13 / 💬52 | 免费模型持续报额度耗尽；已关闭但仍在被最近回复顶起，说明免费路由策略用户仍感困惑。 |
| 4 | 🔴 启动 | **#16610 [OPEN] 启动卡死 when inotify 实例耗尽** | 👍7 / 💬14 | Linux 下低 `max_user_instances` 时卡在启动，用户期望优雅降级。 |
| 5 | 🟡 安全 | **#4318 [CLOSED] 系统凭据库存储 secrets** | 👍6 / 💬10 | 目前 token 明文存 `auth.json`；与 v1.17.11 OAuth 修复方向一致，未来可期。 |
| 6 | 🔴 可用性 | **#17935 [OPEN] Light mode 代码不可见** | 👍11 / 💬7 | 浅色主题下代码示例不可见+全选变黑，影响可访问性。 |
| 7 | 🟡 多账户 | **#8145 [OPEN] 多 Codex OAuth 账号 + round-robin** | 👍19 / 💬19 | 多人团队共享额度场景呼声较高（👍:19 在 feature 类靠前）。 |
| 8 | 🔴 CPU | **#33399 [OPEN] CPU 99–100% 卡死** | 👍0 / 💬6 | 进程偶发占满核心，键盘无响应，开发者排查困难。 |
| 9 | 🔴 IDE | **#27006 [OPEN] IDE 终端内快捷键不回传** | 👍2 / 💬5 | Cursor/Windsurf 集成后 `Cmd+Opt+K` 等仍能工作；报告为**回归**，显示桌面端投入后 TUI/IDE 体验有撕裂。 |
| 10 | 🐛 meta | **#33938 [OPEN] Desktop 升级后 ConfigInvalidError** | 👍0 / 💬3 | 直接与 v1.17.11 发布关联，Windows 非 git 目录多项目被吞，可能与配置迁移有关。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 作者 | 状态 | 关键点 |
|---|----|------|------|--------|
| 1 | **#33822** | Hona | 🟢 OPEN | CI 切到 **Bun canary** 用于 beta 通道；明确回应 Windows segfault（"Bun 1.3.14 segfaults; Rust rewrite looks more stable"），与 #33742 直接相关。 |
| 2 | **#33979** | opencode-agent[bot] | 🟢 OPEN | 修复 v2 标题栏 flex 高度/导航后错位——响应 v1.17.11 桌面标题栏改动（#33979）。 |
| 3 | **#33978** | Hona | 🟢 OPEN | 用 dropdown primitives 重写 project selector，原 #32015 的替代实现，同步修 #140。 |
| 4 | **#33974** | opencode-agent[bot] | 🟢 OPEN | Restore 自动接受(auto-accept)在会话设置中生效；修 v2 路由参数对 legacy settings 的依赖。 |
| 5 | **#33977** | opencode-agent[bot] | 🟢 OPEN | **将 MCP timeout 拆为 startup/request 两阶段**，允许 MCP-wide 默认和 per-server 覆盖，并迁移旧 `experimental.mcp_timeout`。 |
| 6 | **#33967** | kiltro-dev | 🟢 OPEN | Plan-mode 修复：bash 权限继承绕过 plan 限制，关闭 #22641、#26700。 |
| 7 | **#33918** | tangtaizong666 | 🟢 OPEN | 修复 v2 plugin-registered skills 在 `/skills` legacy 列表消失，关乎插件生态一致性。 |
| 8 | **#33969** | patminn107 | 🔴 已合并 | TUI 数字格式化 999,950 → 误显 "1000.0K" 应显示 "1.0M"；小数点溢出修复。 |
| 9 | **#33960** | HSTiann | 🔴 已合并 | 修复 agent 共享 model 但 variant 不同时，TAB 循环显示错误 variant。 |
| 10 | **#33966** | ryepup | 🟢 OPEN | Feature request：让 `OAUTH_CALLBACK_HOST` 可配置（回应 #30022 OAuth 绑定 127.0.0.1 的副作用）。 |

---

## 5. 功能需求趋势

从所有 Issues 提炼的**社区关注方向排名**：

| 排名 | 方向 | 代表 Issue | 信号 |
|------|------|------------|------|
| 🧠 1 | **内存 / 性能 / 稳定性** | #20695、#33399、#16610、#33742 | 涉及长会话、Bun segfault、inotify 耗尽、CPU 满载——全方位反映运行时可靠性 |
| 🖥️ 2 | **桌面/IDE 集成体验** | #33938、#27006、#17935 | 升级后配置丢失、快捷键不回传、light mode 缺陷 |
| 🔐 3 | **认证与多账户** | #4318、#8145、#33966 | 凭据加密、OAuth 回调、多账号 round-robin |
| 📡 4 | **插件与 MCP 生态** | #31051、#33341、#23327 | 事件钩子、MCP provider 路径正确性、LM Studio 自动发现 |
| 💰 5 | **成本控制** | #15585、#31348 | 免费额度异常、prompt cache 丢失导致费用飙升 |

---

## 6. 开发者关注点（高频痛点）

1. **"升级即崩"**：v1.17.10 → Windows segfault（#33742）、桌面 ConfigInvalidError（#33938）几乎同时爆发，版本节奏与质量保障的矛盾凸显。

2. **长会话内存失控**（#20695）：官方 heap snapshot 征集帖评论破百；叠加 CPU 满载（#33399）和 `/compact` 反涨上下文（#17557），说明核心循环在复杂项目中**资源规划不足**。

3. **IDE 集成体验回退**（#27006）：与桌面端快速迭代不匹配，TUI → 桌面迁移时快捷键/文件路径回传被忽视，引发**"我们迁移了但丢了熟悉工作流"**的情绪。

4. **OAuth / 凭据现代化呼声**：v1.17.11 修了 OAuth URL 打印（#4318 关键子集），但 LH callback 绑定受限（#33966）和明文凭据库仍是痛点，说明**身份层仍在半过渡态**。

5. **模型兼容细节**：MCP provider 路径下 optional string 被序列化为空串（#33341，👍4）、GLM-5.1 cache 随机清零（#31348），表明**多模型多 provider 的测试矩阵仍在追赶**。

---

> **编辑语：** 今日事件密集且围绕 v1.17.11 发布前后，建议 Windows 开发者暂缓升 1.17.10、直接上 1.17.11；长会话用户关注 #20695 内存快照征集并主动参与。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-26

## 1. 今日速览

过去 24 小时 Pi 社区活跃度较高，共新增/更新 42 个 Issue 和 11 个 PR。本日无新版本发布。核心热点集中在：**TUI 渲染稳定性**（full redraw 滚动异常、终端宽度溢出崩溃）、**openai-codex 流式连接可靠性**问题持续发酵、以及多个编码代理（coding-agent）相关的基础设施 PR 进入评审。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 👍 | 评论 | 重要性说明 |
|---|-------|------|-----|------|-----------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability Issues** | 🔴 Open / In Progress | 30 | 71 | 🔥 本周热度最高。`openai-codex` / `gpt-5.5` 交互模式下频繁卡在 `Working...`，无流式输出无错误提示，只能 Escape 中止。影响日常核心工作流，社区讨论非常活跃。 |
| [#5825](https://github.com/earendil-works/pi/issues/5825) | **Streaming markdown forces scroll to bottom** | 🔴 Open | 0 | 31 | 开启 `clear on shrink` 后，阅读流式 markdown 输出时被强制拉到底部，严重干扰阅读体验。社区争议较大。 |
| [#5103](https://github.com/earendil-works/pi/issues/5103) | **Windows 构建无法正确检测 PATH 中的 git-bash** |  Closed | 1 | 23 | Windows 用户核心工具链问题：Release 包 `pi.exe` 找不到 Git Bash，影响 Bash 工具可用性。 |
| [#6050](https://github.com/earendil-works/pi/issues/6050) | **TUI full redraw clears terminal scrollback** | 🟢 Closed | 0 | 10 | 交互模式下终端滚动历史被意外清空，根因指向核心 TUI 渲染器。影响所有自定义 UI 组件频繁刷新的场景。 |
| [#4290](https://github.com/earendil-works/pi/issues/4290) | **Messages aborted for length treated as regular stops** |  Closed | 1 | 6 | 模型因长度限制停止时，`Working...` 消失但无明确提示，用户误以为思考仍在进行。影响长思考链的体验判断。 |
| [#5671](https://github.com/earendil-works/pi/issues/5671) | **~/.pi 与 cwd/.pi 路径重叠** |  Closed | 5 | 6 | 由核心维护者 mitsuhiko 提出，全局与项目级 `.pi` 目录的职责边界引发社区对配置隔离的讨论。 |
| [#6061](https://github.com/earendil-works/pi/issues/6061) | **MiniMax-M2.7-highspeed context budget 偏小** |  Closed | 0 | 4 | 内置 `minimax-cn` provider 在 ~131k tokens 时报 context 超限，接近 131072 窗口上限即触发错误。 |
| [#6060](https://github.com/earendil-works/pi/issues/6060) | **TUI footer 渲染 token stats 时 TypeError 崩溃** |  Closed | 0 | 4 | 当会话存在纯 tool-call 类型 assistant 消息时，`content is not iterable` 导致 TUI 崩溃。需要类型守卫修复。 |
| [#6002](https://github.com/earendil-works/pi/issues/6002) | **SessionManager.open() 静默截断非 session 文件** | 🟢 Closed | 0 | 4 | 打开非 pi session 文件（如 3.2MB NDJSON 日志）时被静默截断为 133 字节，无警告无备份。潜在数据丢失风险。 |
| [#5670](https://github.com/earendil-works/pi/issues/5670) | **Tab completion grabs first item after typing to narrow** | 🟢 Closed | 1 | 6 | 文件路径 Tab 补全中，输入字符缩小列表后再按 Tab 会错误选中第一项而非保持菜单开放，影响多义路径的精确选择。 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 作者 | 说明 |
|---|-----|------|------|------|
| [#6087](https://github.com/earendil-works/pi/pull/6087) | **fix(coding-agent): remove hardcoded RPC wait timeout** | 🟢 Closed | mizuikki | 为 `RpcClient` 移除硬编码 60s 等待上限，新增 `RpcClientOptions.waitTimeoutMs`。修复长运行工具会话（如 pi-mcp-extension）意外超时问题。 |
| [#6078](https://github.com/earendil-works/pi/pull/6078) | **feat(coding-agent): add get_entries and get_tree RPC commands** | 🔵 Open | geraschenko | 新增两只只读 RPC 命令 `get_entries`（支持 since 游标分页）和 `get_tree`，允许从外部驱动 pi 的 session 浏览。呼应 Issue #5810 的需求。 |
| [#6074](https://github.com/earendil-works/pi/pull/6074) | **fix(coding-agent): avoid pre-prompt compaction continue** | 🔵 Open | yzg1983 | 修复 pre-prompt compaction 后继续逻辑问题，确保压缩后状态正确传递。 |
| [#6064](https://github.com/earendil-works/pi/pull/6064) | **feat(experimental): pi orchestrator** |  Open | cristinaponcela |  全新实验性 `@earendil-works/pi-orchestrator` 包，本地守护进程通过 `.pi/orchestrator/orchestrator.sock` 提供 pi 实例生命周期管理（启动、列出）。面向需要编排多 pi 实例的高级用户场景。 |
| [#6084](https://github.com/earendil-works/pi/pull/6084) | **fix(tui): preserve custom widget render order on background tick refreshes** | 🟢 Closed | duppypro | 高频刷新（时钟、计时器）时扩展的 widget `Map` 删除-重插入导致渲染顺序错乱。修复后保持稳定插入序。 |
| [#6081](https://github.com/earendil-works/pi/pull/6081) | **feat: add #RRGGBBAA alpha support for theme colors** | 🟢 Closed | mendeltmh | 主题颜色新增 8 位 hex（`#RRGGBBAA`）透明度支持。终端不支持真透明，alpha 在加载时与背景色混合。 |
| [#5832](https://github.com/earendil-works/pi/pull/5832) | **fix(ai): surface provider HTTP error body instead of opaque SDK message** |  Open | stephanmck | 解决代理/网关后非 2xx 响应体被丢弃的问题，确保 403 等错误能展示真实服务端的错误详情。 |
| [#5515](https://github.com/earendil-works/pi/pull/5515) | **feat(coding-agent): add alwaysTrust setting to skip project trust gating** |  Closed | markg85 | 新增 `alwaysTrust` 开关（默认关闭），允许完全绕过项目级 trust gate 检查。信任模式下的便捷选项。 |
| [#6067](https://github.com/earendil-works/pi/pull/6067) | **fix(prompt): add an overeager scope-discipline rule to the system prompt** | 🟢 Closed | warmjademe | Prompt-only 变更：添加一行 overeager 范围纪律规则，约束 agent 不修改无关代码，对标 aider 的同名机制。 |
| [#5270](https://github.com/earendil-works/pi/pull/5270) | **Ephemeral session model and thinking level selection** |  Closed | vanvlack | `setModel()` / `setThinkingLevel()` 等方法默认变为 session 级生效，需显式 `{ persist: true }` 才写入全局默认。防止 Ctrl+P / Ctrl+T 意外覆盖全局配置。 |

---

## 5. 功能需求趋势

从当前 Issue 与 PR 数据中，社区关注度最高的功能方向：

| 方向 | 代表 Issue/PR | 社区信号 |
|------|--------------|---------|
| **TUI 稳定性与渲染质量** | #6050, #5825, #6058, #6073, #6060, #6084 | ️ 热度极高。full redraw 清屏、流式 markdown 跳滚、终端宽度溢出崩溃、tmux 视口跳转等——终端 UI 体验是最大痛点集群。 |
| **Coding Agent 基础设施** | #5810, #6078, #6087, #6074, #6064 | ️ 快速增长。RPC 接口（get_entries/get_tree）、超时治理、多实例编排器（orchestrator）、trust gate —— 开发者正将 Pi 作为 headless 引擎嵌入自动化工作流。 |
| **Provider / 模型兼容性** | #4945, #5595, #6061, #6009, #5721, #6034, #6057 | 中等热度。openai-codex 可靠性、reasoning token 透传、MiniMax context budget、Gemma-4 reasoning level、自定义 fetch 适配——新 provider 接入和老 provider 稳定性修复并行。 |
| **Session 管理与持久化** | #6002, #6066, #6046, #6070 | 中等热度。静默截断非 session 文件、/input history 恢复、session-id 确定性指定——企业级会话持久化需求在增长。 |
| **单文件分发 / 部署简化** | #6065, #6085 | 趋势萌芽。社区希望有自带 Node runtime 的可执行二进制；编译后的扩展解析器对 npm 子目录支持仍有缺陷。 |

---

## 6. 开发者关注点

** 高频痛点：**
1. **连接可靠性压倒一切**：openai-codex 的 `Working...` 假死（Issue #4945, 71 条评论 / 30 👍）是当前最紧迫的问题，直接影响 gpt-5.5 用户日常使用。
2. **TUI 渲染不够健壮**：多个 Issue 指向终端宽度溢出崩溃、滚动位置跳变、full redraw 冲掉历史记录——在 tmux 等终端复用器下问题被放大。
3. **静默数据丢失**：`SessionManager.open()` 无警告截断文件（#6002）引发对数据安全的担忧，需要 fail-fast 或备份机制。

**🟡 持续关注：**
4. **Reasoning Token 可见性**：provider 返回的 reasoning/thinking token 数被丢弃（#6009, #6057），影响成本审计和输出预算控制。
5. **Windows 兼容**：git-bash 检测失败（#5103）是长期存在的问题，Release 包的用户体验需要更多 CI 测试覆盖。

**🟢 积极信号：**
6. **Headless / SDK 用户生态成形**：RPC 接口、orchestrator daemon、HITL 中断机制（#5901）等需求表明正有批开发者将 Pi 作为编程引擎嵌入更大系统，这是项目迈向平台化的积极信号。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-26

---

## 1. 今日速览

社区今日发布了 **v0.19.2-nightly** 版本，主要修复 `web_fetch` JSON 回退逻辑。Issue 和 PR 活动高度活跃，焦点集中在：**Windows 下 PowerShell 无限泄漏的严重 Bug**、**上下文压缩性能优化**、**语音功能扩展到桌面端**，以及多项 **UI/UX 体验改进**。社区对 Shell 工具资源管理和 Token 速度显示准确性的讨论持续升温。

---

## 2. 版本发布

### v0.19.2-nightly.20260625.b2f11b735

- **fix(core):** 允许 `web_fetch` 在无法解析时回退到 JSON 格式（[PR #5660](https://github.com/QwenLM/qwen-code/pull/5660)）
- **chore(release):** v0.19.2 版本发布

> 🔗 [Release 页面](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-nightly.20260625.b2f11b735)

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 👍 | 关注理由 |
|---|------|------|---|---------|
| [#5873](https://github.com/QwenLM/qwen-code/issues/5873) | **Windows 用一次工具开一个 PowerShell 且不关闭直到 OOM** | OPEN · P1 | 0 | 🔴 **严重 Bug**，Windows 100% 复现，可能导致系统崩溃，社区情绪强烈，需立即关注 |
| [#401](https://github.com/QwenLM/qwen-code/issues/401) | Streaming setup timeout after 6s | OPEN · P1 | 0 | 长期未解决的老问题（已 10 个月），影响 API 流式调用体验，10 条评论持续讨论 |
| [#5861](https://github.com/QwenLM/qwen-code/issues/5861) | 上下文压缩请求应使用 stream=true 避免网关超时 | CLOSED · P1 | 2 | 接近上下文窗口容量时，非流式压缩请求导致网关超时，影响高负载场景 |
| [#5838](https://github.com/QwenLM/qwen-code/issues/5838) | 允许用户调整 Agent 发起命令的超时时间 | OPEN · P2 | 5 | 用户希望对 Agent 生成的 Shell 命令有更多控制权，5 条评论讨论 |
| [#5867](https://github.com/QwenLM/qwen-code/issues/5867) | 为 auto-memory 添加 git 共享的 "team" 层级 | OPEN · P2 | 3 | 团队级记忆共享需求，对协作场景有价值 |
| [#5759](https://github.com/QwenLM/qwen-code/issues/5759) | collapseOnResume 时显示最近 N 条消息 | OPEN | 3 | 恢复折叠会话时无法看到之前上下文，影响工作流连续性 |
| [#5722](https://github.com/QwenLM/qwen-code/issues/5722) | Token 速度显示在 thinking/工具调用时不准确 | CLOSED · P2 | 2 | 三类显示异常影响用户对性能的感知 |
| [#5806](https://github.com/QwenLM/qwen-code/issues/5806) | /loop 用户中断后未取消待处理的 wakeup | CLOSED · P2 | 2 | 后台任务资源泄漏问题，影响长时间运行场景 |
| [#5782](https://github.com/QwenLM/qwen-code/issues/5782) | WebFetch 应拒绝包含 userinfo 的 URL | CLOSED · P3 | 2 | 安全加固，防止敏感凭证泄露 |
| [#5875](https://github.com/QwenLM/qwen-code/issues/5875) | 技能命令自动补全应支持模糊匹配 | OPEN · P2 | 1 | 提升 `/skill_name` 输入体验，降低记忆负担 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#5874](https://github.com/QwenLM/qwen-code/pull/5874) | **perf(cli): 跳过 `qwen serve` 的 spawnSync 包装** | CLOSED | 消除守护进程启动时多余的 Node.js 子进程，加速启动 |
| [#5868](https://github.com/QwenLM/qwen-code/pull/5868) | **feat(core): 可配置的自动压缩阈值 + Stop hook 上下文** | OPEN | 允许用户自定义上下文压缩触发时机，增强灵活性 |
| [#5856](https://github.com/QwenLM/qwen-code/pull/5856) | **feat(desktop): 桌面端语音听写** | OPEN | 将 `/voice` 功能从 CLI/Web Shell 扩展到桌面应用 |
| [#5849](https://github.com/QwenLM/qwen-code/pull/5849) | **feat(cli): 输入自动补全支持 @extension 提及** | OPEN | Codex 风格的 `@` 提及，在补全下拉中展示已安装扩展 |
| [#5848](https://github.com/QwenLM/qwen-code/pull/5848) | **feat(ui): collapsePreviewCount 设置** | OPEN | 恢复折叠会话时保留最近 N 条可见，解决 Issue #5759 |
| [#5835](https://github.com/QwenLM/qwen-code/pull/5835) | **fix(core): 重新应用 provider 安装计划时保留已选模型** | OPEN | 修复重新认证/刷新 token 后模型被意外重置的问题 |
| [#5828](https://github.com/QwenLM/qwen-code/pull/5828) | **feat(core): 内置扩展创建技能** | OPEN | 引导 Agent 完成 Qwen Code 扩展的脚手架搭建和本地测试 |
| [#5809](https://github.com/QwenLM/qwen-code/pull/5809) | **refactor(cli): 拆分 serve 服务器路由** | OPEN | 将 daemon 路由处理拆分为独立模块，提升可维护性 |
| [#5778](https://github.com/QwenLM/qwen-code/pull/5778) | **feat(cli): /model --vision 配置回退视觉模型** | OPEN | 当主模型不支持视觉时自动切换到指定视觉模型 |
| [#5738](https://github.com/QwenLM/qwen-code/pull/5738) | **fix(cli): 默认启用虚拟化终端历史** | OPEN | 新用户默认获得应用内可滚动历史视图 |

---

## 5. 功能需求趋势

从今日 22 条 Issues 和 50 条 PR 中提炼出以下方向：

### 🔧 Shell 工具与进程管理（最高优先级）
- Windows 下 PowerShell 无限泄漏（#5873）是当前最紧急的问题
- Agent 命令超时配置（#5838）、Shell 工具结果重复提交（#5641）
- 社区对 Agent 执行环境的**稳定性和资源管理**有强烈诉求

### ⚡ 性能与上下文管理
- 上下文压缩优化（#5861）、Token 速度显示修复（#5722）、UI 闪烁减少（#5396）
- 自动压缩阈值可配置化（#5868 PR）
- 长会话恢复体验改进（#5759、#5848）

### 🎤 语音与多模态输入
- 桌面端语音听写（#5856）、ASR 关键词可配置（#5816）
- 视觉模型回退配置（#5778）
- 语音包分发改进（#5742）

### 🖥️ 桌面与 IDE 体验
- VSCode 扩展连接错误（#5840）、桌面端安全加固（#5829）
- 状态栏默认启用（#5789）、TUI 显示优化（#4422）
- 虚拟化终端历史默认开启（#5738）

### 🤖 Agent 与自动化
- `/loop` 中断清理（#5806）、自循环唤醒机制优化（#5841）
- 扩展创建技能（#5828）、技能命令模糊匹配（#5875）
- 会话状态查询 API 丰富化（#5855、#5863）

### 🔒 安全与隐私
- WebFetch 拒绝 userinfo URL（#5782）
- 桌面端 source 删除安全校验（#5829）

---

## 6. 开发者关注点与痛点

| 痛点 | 相关 Issue | 社区反馈 |
|------|-----------|---------|
| **Windows Shell 资源泄漏** | #5873 | 用户情绪激烈，要求紧急修复；影响日常使用 |
| **API 流式超时** | #401 | 持续 10 个月未解决，影响特定 provider 用户体验 |
| **上下文压缩导致网关超时** | #5861 | 高负载/慢速部署场景下影响明显 |
| **Token 速度显示不准** | #5722 | 三类场景（thinking、工具调用、正常输出）均有问题 |
| **会话恢复后丢失上下文** | #5759 | 折叠恢复后无法追溯之前工作，影响长任务连续性 |
| **语音功能仅限 CLI** | #5816, #5742 | 桌面端和镜像安装用户无法使用，分发不完整 |
| **技能管理体验** | #5263, #5875 | 自动生成的技能缺乏确认流程；命令补全不够智能 |
| **Provider 重置模型** | #5835 PR | 重新认证后模型被意外切换，影响工作流 |

---

> 📊 **数据概览**：今日新增/更新 Issues 22 条，PR 50 条，Release 1 个。社区活跃度极高，Shell 工具稳定性和 Windows 兼容性是当前最紧迫的议题。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-06-26

> 数据来源：github.com/Hmbown/DeepSeek-TUI（项目已更名为 CodeWhale）

---

## 1. 今日速览

今日社区围绕 **v0.8.65 版本发布** 展开密集迭代，核心主题是 Hotbar MVP 功能全面落地（8 个 PR 合入）、Z.ai/GLM 并发节流修复、以及 session 故障诊断工具上线。此外，**plan/agent 模式混淆** 和 **YOLO 模式下仍请求确认** 两个老 bug 持续引发社区讨论。

---

## 2. 版本发布

### v0.8.65

- 正式确立 **CodeWhale** 为统一品牌名（项目、命令、npm 包、release 资产），旧 npm 包 `deepseek-tui` 已废弃。
- 用户需参考 `docs/REBRAND.md` 完成从 v0.8.x 旧名迁移。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 要点 |
|---|-------|------|------|
| 1 | [#3606](https://github.com/Hmbown/CodeWhale/issues/3606) **YOLO 模式下仍请求确认** | 🥴 Open | 用户设置 `/mode YOLO` + `approval_mode AUTO` 后仍需手动确认，期望完全自动执行。影响工作流自动化体验。 |
| 2 | [#3568](https://github.com/Hmbown/CodeWhale/issues/3568) **Plan 和 Agent 模式再次混淆** | 🥴 Open (👍1) | 用户上传了完整聊天记录，证明 AI 在 plan 模式下执行了文件修改操作，thinking 过程可见 agent 行为。 |
| 3 | [#3541](https://github.com/Hmbown/CodeWhale/issues/3541) **Rust 原生运行时需求** | Open | 建议用 Rust 重写核心 runtime，降低冷启动延迟、内存占用和单线程事件循环卡顿。引发对性能方向的讨论。 |
| 4 | [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) **Fleet 模型类与自动负载选择** | Open (10 评论) | 构建共享的 model/loadout 选择器，覆盖 TUI/CLI/exec/subagents/Fleet workers，实现 "Fleet loadout auto"。 |
| 5 | [#2300](https://github.com/Hmbown/CodeWhale/issues/2300) **多模型兼容与自动 Fleet 负载选择** | Open (7 评论) | 保留多模型支持需求作为 v0.8.65 路由能力提升的验收基线，尤其关注 `provider=vllm` vs `provider=openai` 文档差异。 |
| 6 | [#3582](https://github.com/Hmbown/CodeWhale/issues/3582) **install.sh 返回 HTML 而非脚本** | Closed | `curl | sh` 安装命令实际拿到 Next.js 页面，文档推荐流程失效。需紧急修复。 |
| 7 | [#3572](https://github.com/Hmbown/CodeWhale/issues/3572) **Windows 环境变量未继承** | Closed | Windows 用户在 CodeWhale 内执行 `exec_shell` 时无法读取系统属性中设置的用户环境变量。 |
| 8 | [#3466](https://github.com/Hmbown/CodeWhale/issues/3466) **审批弹窗与审查语义** | Closed | 升级到 0.8.64 后每次操作都需要破坏性审批确认，用户希望恢复无确认逻辑。 |
| 9 | [#3546](https://github.com/Hmbown/CodeWhale/issues/3546) **ACP 暴露 provider/model 选择** | Close | CodeWhale 已支持 ACP stdio 集成 Paseo，但无法通过 ACP 传递 provider/model 配置。 |
| 10 | [#3606](https://github.com/Hmbown/CodeWhale/issues/3606) **YOLO 模式确认问题** | Open | 见 #1，开发者反馈痛点明确。社区期待 hotbar 和安全逻辑统一审批路径。 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 要点 |
|---|-----|------|------|
| 1 | [#3613](https://github.com/Hmbown/CodeWhale/pull/3613) **修复：dispatch 中正确识别自动审批模式** | Open | 确保 `AUTO` 审批模式走自动批准路径（不仅是 YOLO 标签），同时覆盖 bang-shell 命令，堵住了 YOLO 仍请求确认的 bug。 |
| 2 | [#3610](https://github.com/Hmbown/CodeWhale/pull/3610) **Session 隐私优先故障诊断工具** | Merged | 新增 JSONL 格式的 failure classifier，区分 tool/runtime 故障与模型质量故障；提供 `codewhale session-diagnostics` 命令。 |
| 3 | [#3612](https://github.com/Hmbown/CodeWhale/pull/3612) **Hotbar 安全分发路径门控** | Open | 为 Hotbar 引入四种安全模式（直触发、composer 预填、禁用、审批门控），阻止 MCP/skill/plugin 源在未注册安全路径时绑定动作。 |
| 4 | [#3608](https://github.com/Hmbown/CodeWhale/pull/3608) **Hotbar 动作源适配器路由** | Merged | 引入 `HotbarActionSource`，将内置 app 动作和 slash commands 统一路由到源适配器，实现 paritet 覆盖。 |
| 5 | [#3605](https://github.com/Hmbown/CodeWhale/pull/3605) **终端视觉回归矩阵** | Merged | 添加对比度、选择器、会话、配置等视觉回归文档，增强 palette contrast guardrails。 |
| 6 | [#3602](https://github.com/Hmbown/CodeWhale/pull/3602) **Hotbar 设置向导** | Merged | 新增 `/hotbar` 命令和设置模态状态机，支持源导航、1-8 槽位分配、保存/取消流程。 |
| 7 | [#3601](https://github.com/Hmbown/CodeWhale/pull/3601) **Provider 并发状态展示** | Merged | `/provider` 命令现在展示 Z.ai/GLM 的有效请求上限和活跃请求数，使用配置推导 cap 和活跃计数。 |
| 8 | [#3595](https://github.com/Hmbown/CodeWhale/pull/3595) **Z.ai Provider 请求节流** | Merged | 新增 `max_concurrency` 配置（别名 `max-concurrency`、`concurrency`），默认 Z.ai/GLM 限制 3 个并发请求，修复 SSE 流 45s 超时。 |
| 9 | [#3598](https://github.com/Hmbown/CodeWhale/pull/3598) **渲染 8 槽位 Hotbar 侧栏面板** | Merged | 在侧栏底部固定渲染 2×4 网格，解析默认/空/部分/未知配置状态，标记活跃 slot。 |
| 10 | [#3611](https://github.com/Hmbown/CodeWhale/pull/3611) **记录 prompt 模式 token 对比** | Open | 在 `docs/PROMPT_MODE_MATRIX.md` 记录 v0.8.56 前后对比，audit 显示因 Constitution 共享导致实际 token 节省为 0，需进一步优化。 |

---

## 5. 功能需求趋势

从今日全部 26 条 Issue 和 50 条 PR 中提炼：

| 趋势方向 | 热度 | 说明 |
|----------|------|------|
| **Hotbar / 快速命令表面** | 🔥🔥🔥 | 本周最大主题，涵盖渲染、向导、routing、安全、并发、配置 schema、视觉回归等，目标 v0.8.66 全面交付。 |
| **工作流自动化与安全审批** | 🔥🔥 | YOLO 模式、AUTO 审批的语义混乱是反复出现的痛点；Hotbar 安全路径、damag mode 确认逻辑均在密集讨论。 |
| **多模型与 Provider 兼容** | 🔥🔥 | Fleet 自动负载、provider 文档清晰度、Zhipu/GLM 并发限制，以及 ACP 暴露模型选择，均体现社区对多 provider 支持的刚需。 |
| **性能与 Rust 重写** | 🔥 | Cold start、内存占用、单线程事件循环卡顿催生了 Rust native runtime 提案；shell-only exec 表面也是性能优化方向。 |
| **Session 诊断与可观测性** | 🔺 | 新增 session failure classifier 和 `session-diagnostics` 命令，体现对 triage 自动化的需求增长。 |
| **跨平台体验（Windows）** | 🔺 | Windows 环境变量继承问题被热炒，虽已关闭但反映 Windows 用户群体在增长。 |

---

## 6. 开发者关注点

1. **审批语义不统一** — YOLO、AUTO、damage 模式之间的边界混乱，Esc 与 Deny 的行为差异需要更好的文档和一致性。
2. **Plan/Agent 模式隔离** — 多次出现模式混淆报告（#3568 再次出现），需要更强的运行时隔离保证。
3. **Windows 兼容性** — 环境变量、shell 执行是高频卡点，社区期待更完善的 Windows QA。
4. **安装流程可靠性** — `install.sh` 返回 HTML 而非脚本（#3582）导致新用户首次安装即失败，体验严重受损。
5. **Z.ai/GLM Provider 稳定性** — 并发请求导致 SSE 超时，默认限制为 3 的 workaround 已上线，但根本解决方案仍在讨论。
6. **上下文长度配置能力** — 用户希望对 providers 自定义 context size（当前硬编码 128k），以支持 Qwen3.6/3.7 等 1M 上下文模型。
7. **Prompt 效率** — token audit 显示 Constitution 共享抵消了 prompt 精简收益，需要更细粒度的 prompt 分段策略。

---

*日报由 OWL 生成 · 2026-06-26 · github.com/Hmbown/DeepSeek-TUI*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*