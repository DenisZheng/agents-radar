# AI CLI 工具社区动态日报 2026-06-02

> 生成时间: 2026-06-02 00:43 UTC | 覆盖工具: 8 个

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



# AI CLI 工具生态横向对比报告 — 2026-06-02

---

## 1. 生态全景

当前 AI CLI 工具生态已从"能不能用"进入"好不好用"的深水区。今日 7 个主流工具均无重大版本发布，但社区 Issue 和 PR 活动极为密集，说明各家团队正在集中攻坚 **稳定性与服务质量**。Windows 平台适配是跨工具的集体短板（Claude Code、Codex、Gemini CLI、Copilot CLI、Pi 同时暴露 Windows 问题），而 **MCP 协议**已从新兴特性演变为各家标配能力并进入可靠性加固阶段。Multi-agent 架构正在从概念走向工程落地（Codex 5 个 PR 级联推进 runtime 元数据栈）。整体来看，生态竞争焦点正从模型能力比拼转向 **开发者体验、工具可靠性和平台覆盖度** 的综合较量。

---

## 2. 各工具活跃度对比

| 工具 | Issues 活跃数 | PR 数 | 最新版本 | Release 时间 | 热度评级 |
|------|-------------:|------:|---------|-------------|:-------:|
| **OpenCode** | ~50 | 22+ | Desktop v1.15.13（有回归） | 近 24h 无新版本 | 🔥🔥🔥🔥🔥 |
| **Pi** | 48 | 22 | 无新版本 | 近 24h 无新版本 | 🔥🔥🔥🔥 |
| **Copilot CLI** | ~35 | 1（另有 spam） | v1.0.57 / v1.0.57-5 | 2026-06-01 | 🔥🔥🔥🔥 |
| **Claude Code** | ~50+（回顾） | 8 | 无新版本 | 近 24h 无新版本 | 🔥🔥🔥🔥 |
| **Gemini CLI** | ~20+ | 15+ | 无新版本 | 近 24h 无新版本 | 🔥🔥🔥 |
| **OpenAI Codex** | ~25+ | 12 | rust-v0.136.0 | 今日发布 | 🔥🔥🔥 |
| **Qwen Code** | ~15 | 10 | v0.17.0 | 近 24h 无新版本 | 🔥🔥🔥 |
| **Kimi Code CLI** | 2 | 4 | 无新版本 | 近 24h 无新版本 | 🔥 |

> **注**：活跃度基于过去 24h 内更新的 Issues/PR 数量及互动量综合评估。OpenCode 和 Pi 在绝对数量上领先，Claude Code 在单 Issue 互动深度上最突出。

---

## 3. 共同关注的功能方向

以下需求在**至少 3 个工具**的社区中同时出现，具有跨平台的普遍性：

### ① MCP 生态可靠性（7 个工具全部涉及）
- **核心诉求**：从"能用"到"稳定用"
- **具体表现**：
  - OpenCode v1.15.13 桌面端 MCP 大面积失效（4 个 Issue 集中爆发）、插件注入 MCP 被忽略
  - Codex 配置写入原子性与事务锁改造（4 个 PR），MCP 启动时预热缓存
  - Gemini CLI MCP 工具发现原子性修复、跨作用域策略合并
  - Copilot CLI MCP 默认禁用、权限精细控制、timeout 配置丢失
  - Qwen Code 项目级 `.mcp.json` 支持、连接不稳定
  - Pi OpenRouter `developer` role 兼容性修复
  - Claude Code Remote Control 权限校验缺陷
- **结论**：MCP 已成为 AI CLI 的事实标准协议，但各家在工具发现、配置持久化、权限控制和跨 provider 兼容性上仍处于反复打磨阶段。

### ② Windows 平台体验提升（5 个工具涉及）
- **影响工具**：Claude Code、Codex、Copilot CLI、Gemini CLI、Pi
- **高频问题**：ARM64 支持缺失（Claude Code #40198）、OAuth 回调失败（Codex #25157）、剪贴板回归（Copilot CLI #3609）、子进程管理缺陷（Claude Code #62659）、WSL 性能极差（Codex #25715）、Bash 工具 Job Object 未纳入（Claude Code #62659）
- **结论**：Windows 仍是 AI CLI 的"二等公民"，尤其在 ARM 架构和进程管理层面的适配差距显著。

### ③ 对话上下文与记忆管理（5 个工具涉及）
- **核心诉求**：可观测性、可控性、自动化压缩可靠性
- **具体表现**：
  - Claude Code：Auto-compact 从不触发（#63015）、默认 1M 上下文且 Pro 无法降级（#62063）
  - Codex：Remote compact task stream disconnected（#18450）
  - Copilot CLI：大 instruction 文件导致 auto-compaction 无限循环（#3621）
  - Gemini CLI：Auto Memory 脱敏前置、低信号 session 无限重试
  - Qwen Code：`--resume` 内存泄漏 OOM、Shell 输出无界增长

### ④ 多模型/Provider 扩展（6 个工具涉及）
- **共同趋势**：社区强烈要求快速接入新发布的模型
- **今日案例**：MiniMax-M3 支持请求/合并（OpenCode PR #30201、PR #5284、Qwen Code #4663）、Gemini 3.5 Flash 族（Gemini CLI PR #27614）、DeepSeek V4 Pro 定价调整适配（OpenCode #28846）、OpenAI 兼容本地 LLM（Qwen Code #3384）

### ⑤ 子 Agent / 多 Agent 架构（4 个工具涉及）
- **工具**：Codex（multi-agent runtime 元数据栈）、Gemini CLI（sub-agent hang、状态误报）、OpenCode（子 agent 可靠性）、Qwen Code（subagent span 遥测隔离）
- **结论**：从单 Agent 向多 Agent 协作演进是行业一致方向，但稳定性是当前最大障碍。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户画像 | 技术路线 | 核心优势 |
|------|---------|------------|---------|---------|
| **Claude Code** | 深度编码辅助、远程协作、企业管控 | 专业开发者、企业团队 | 闭源客户端 + Anthropic 模型深度集成，通过 harness 层调优模型行为 | Remote Control 企业级功能、与 Claude 模型深度协同 |
| **OpenAI Codex** | 桌面 + CLI 一体化、多 Agent 运行时 | 全栈开发者、产品型团队 | Rust 实现 + Electron 桌面端，自研 multi-agent 架构 | Multi-agent runtime 架构领先、Remote Control 跨设备控制、TUI Markdown 渲染精细 |
| **Gemini CLI** | Agent 自主规划、记忆系统、评测驱动质量 | 高级自主 Agent 用户、Google 生态开发者 | Google 全栈自研（model + CLI + infra），强调 sub-agent orchestration 和 auto memory | 子 agent 编排能力、Auto Memory 差异化、组件级评测体系 |
| **GitHub Copilot CLI** | GitHub 生态深度集成、企业级模型管理 | GitHub 重度用户、企业开发者 | 与 GitHub Actions / Copilot / VS Code 深度打通，组织模型可见性对齐 | GitHub 生态无缝衔接、组织模型统一管理 |
| **Kimi Code CLI** | 认证体验稳健化、会话管理精确性 | 东亚用户、Moonshot 生态开发者 | 独立 CLI 实现，侧重认证流程健壮性和交互细节打磨 | `/undo`/`/fork` 精细会话管理、OAuth 安全加固 |
| **OpenCode** | 多平台 Desktop 体验、模型民主化接入 | 多模型重度用户、桌面端优先开发者 | Electron 桌面端 + Go API，强调多 Provider 快速适配 | 最丰富的 Provider 支持、Desktop TUI 渲染质量、社区贡献者活跃度最高 |
| **Pi** | 终端原生体验、多模型聚合（OpenRouter） | 终端原生 CLI 爱好者、多 provider 切换用户 | 终端原生 TUI，通过 OpenRouter 等聚合层支持海量模型 | TUI 渲染深度优化（Kitty/WezTerm 图片、CJK 支持）、跨终端兼容性强 |
| **Qwen Code** | 安全加固、可观测性、遥测基础设施 | 注重安全与调试能力的开发者、Qwen 模型生态用户 | 自研 Agent 框架，强安全审批机制，内置遥测/Profiling | Auto 模式安全分类器、CPU Profiling/内存诊断、安全加固深度 |

---

## 5. 社区热度与成熟度

### 社区活跃度排名（基于今日数据量 + 互动深度）

| 排名 | 工具 | 活跃度信号 | 成熟度判断 |
|:---:|------|-----------|-----------|
| 1 | **OpenCode** | 50 Issues + 22 PRs，今日合并 1+ 核心功能 PR | 🟡 快速迭代期 — Desktop 版本回归集中，活跃修复中 |
| 2 | **Pi** | 48 Issues + 22 PRs，今日合并 7 个 PR | 🟡 快速迭代期 — TUI 和兼容性问题密集修复，合并速度快 |
| 3 | **Claude Code** | 单 Issue 最高互动深度（#49268 40 评论 +67👍），PR 偏文档 | 🟠 高诉求期 — 核心功能诉求积压严重，PR 偏保守 |
| 4 | **Copilot CLI** | 35 Issues，昨日发版，Issue 积压严重（#1703 53👍） | 🟠 稳定发版 + 积压修复期 — Version release 节奏稳但 Issue 修复滞后 |
| 5 | **Gemini CLI** | ~20+ Issues + 15+ PRs，多个 P1 Bug 同日更新 | 🔴 关键攻坚期 — Agent 稳定性密集修复阶段 |
| 6 | **OpenAI Codex** | 今日发布 v0.136.0，12 个 PR，multi-agent 架构推进中 | 🟡 架构升级期 — 从单 Agent 向多 Agent 跃迁 |
| 7 | **Qwen Code** | ~15 Issues + 10 PR，偏基础设施和安全方向 | 🟢 稳健建设期 — 聚焦安全和可观测性基础设施 |
| 8 | **Kimi Code CLI** | 仅 2 个 Issues，4 个 PR | 🟢 社区早期 — 体量小但 PR 质量稳健 |

### 快速迭代信号
- **Pi**和**OpenCode**合并节奏最快（今日各合并多个 PR），处于典型的快速迭代冲刺期
- **Gemini CLI**多个 P1 Bug 同日更新，说明团队在做 Agent 稳定性专项攻坚
- **Claude Code**高 👍 Issue 积压但 PR 以文档为主，社区期待与官方响应存在落差

---

## 6. 值得关注的趋势信号

### 趋势一：MCP 疲劳正在来临
MCP 已从"加分项"变为"必选项"，但今日所有工具都暴露了 MCP 相关问题——配置写入损坏、连接不稳定、插件注入被忽略。**对于开发者**：在 MCP 生态成熟（预计需 3-6 个月）之前，建议对 MCP 服务器实施分级管理（核心 vs 可选），避免一个 MCP 故障导致整个工作流崩溃。

### 趋势二：Multi-Agent 工程化竞赛已启动
Codex 在一天内推进 5 个 multi-agent runtime PR，Gemini CLI 多个 sub-agent P1 问题集中爆发，OpenCode 修复子 agent 上下文溢出。**对于技术决策者**：多 Agent 协作是下一代 AI CLI 的核心壁垒，但目前处于"架构可用、稳定性不足"的阶段。建议关注但不急于在生产环境中部署多 Agent 工作流。

### 趋势三：桌面端成为新的竞争战场
今日 Codex 和 OpenCode 的 Issue 中有大量桌面端回归 bug，Claude Code 和 Copilot CLI 也在持续投入桌面体验。**信号**：CLI 不再是纯终端工具的竞技场，Electron/原生桌面端的体验质量将成为差异化因素。**对于用户**：桌面端版本建议保持滞后 1-2 个小版本升级，以规避回归风险。

### 趋势四：本地化与离线能力成为刚需
Qwen Code 的 VLLM/Ollama 连接问题（11 条评论、持续 46 天未解决）、Kimi Code CLI 的 GitHub 网络依赖安装失败，反映出**本地部署工作流的可靠性仍是最大短板**。这一方向将推动更多工具提供离线包、镜像源和降级方案。

### 趋势五：安全与成本可控性正从技术指标变为产品特性
Auto 模式分类器超时策略（Qwen Code #4675）、权限配置被系统忽略（OpenCode #16331，40 条评论）、Phantom Consumption（Claude Code #60334）、MiniMax-M3 永久降价 75% 引发的限额调整（OpenCode #28846，59 个👍）。**对于企业用户**：AI CLI 的选型评估中需要加入"成本可预测性"和"安全策略可靠性"的权重。

---

*报告由 OWL 基于各工具 GitHub 公开数据生成 | 数据截至 2026-06-02*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills 社区热点报告（截至 2026-06-02）

---

### 1. 热门 Skills 排行（PR 按评论数/关注度排序）

| # | Skill | 功能 | 状态 |
|---|-------|------|------|
| 1 | **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 元技能：分别对 Skills 进行质量分析（结构、文档等五维度）和安全性审查 | OPEN |
| 2 | **frontend-design** ([#210](https://github.com/anthropics/skills/pull/210)) | 前端设计技能的可读性与可操作性改进，确保 Claude 能在单次对话中执行每条指令 | OPEN |
| 3 | **shodh-memory** ([#154](https://github.com/anthropics/skills/pull/154)) | AI Agent 持久记忆系统，跨会话维护上下文，主动调用 `proactive_context` 检索相关记忆 | OPEN |
| 4 | **AURELION suite** ([#444](https://github.com/anthropics/skills/pull/444)) | 四层认知+记忆框架：kernel（结构化思维）、advisor（建议）、agent（执行）、memory（知识管理） | OPEN |
| 5 | **codebase-inventory-audit** ([#147](https://github.com/anthropics/skills/pull/147)) | 代码库清理与文档审计，系统识别废弃代码、未使用文件、文档缺口等，生成 CODEBASE-STATUS.md | OPEN |
| 6 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | 排版质量控制，防止 AI 生成文档中的孤行词、孤立段落标题、编号错位等问题 | OPEN |
| 7 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 全栈测试技能：测试理念（Testing Trophy）、单元测试 AAA 模式、React 组件测试等 | OPEN |
| 8 | **ServiceNow** ([#568](https://github.com/anthropics/skills/pull/568)) | 覆盖 ITSM、ITOM、ITAM/SAM、FSM、SecOps、IntegrationHub 等全平台能力的 ServiceNow 助手 | OPEN |

> 注：以上 PR 评论数数据缺失（undefined），排名依据为 PR 编号序与 Issues 热度的交叉印证。

---

### 2. 社区需求趋势（从高频 Issues 提炼）

| 方向 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| **工具链安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) (7👍) | 社区 Skills 冒充 `anthropic/` 官方命名空间，存在信任边界滥用风险，需官方认证与命名规范 |
| **评测/调试工具可靠性** | [#556](https://github.com/anthropics/skills/issues/556) (6👍) | `run_eval.py` 触发率为 0%，skill 评估循环失效，优化迭代无法收敛 |
| **企业级共享与分发** | [#228](https://github.com/anthropics/skills/issues/228) (13评论/7👍) | 期待 org 内 skill 一键分享/共享库，告别手动下载→Slack 发送→手动上传的繁琐流程 |
| **跨平台兼容** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 下 `skill-creator` 子进程调用和编码问题频发，贡献者主动修复但尚未合并 |
| **插件加载一致性** | [#189](https://github.com/anthropics/skills/issues/189) (6评论/8👍) | `document-skills` 与 `example-skills` 插件内容重复，导致同一 Skill 在上下文中出现两次 |
| **Skill as MCP** | [#16](https://github.com/anthropics/skills/issues/16) | 期望将 Skill 能力通过 MCP 协议暴露，实现标准化的 AI 软件接口 |

---

### 3. 高潜力待合并 Skills（活跃但尚未合并的 PR）

| PR | 潜力依据 |
|----|---------|
| **[#361](https://github.com/anthropics/skills/pull/361)** Detect unquoted YAML special characters | 持续更新至 2026-06-01，修复 YAML description 字段解析静默失败，影响所有 Skill 创建者 |
| **[#538](https://github.com/anthropics/skills/pull/538)** Fix case-sensitive file references in PDF skill | 修复大小写敏感系统（Linux/Mac）上 PDF skill 文件引用断裂 |
| **[#539](https://github.com/anthropics/skills/pull/539)** Warn on unquoted YAML special characters in skill-creator | 前置校验防止 YAML 解析截断，与 #361 互补 |
| **[#541](https://github.com/anthropics/skills/pull/541)** Fix DOCX tracked change ID collision | 修复含书签文档的 OOXML ID 碰撞导致文档腐化的严重 bug |
| **[#1050](https://github.com/anthropics/skills/pull/1050)** Fix Windows subprocess + encoding bugs | 单行修改 ×2，直接解决 Windows 用户无法运行 skill-creator 的核心痛点 |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** Fix run_eval.py Windows crash | 修复 run_eval.py 在 Windows 下 precision=100% recall=0% 的致命错误 |
| **[#509](https://github.com/anthropics/skills/pull/509)** Add CONTRIBUTING.md | 解决仓库社区健康评分仅 25% 的问题，降低新贡献者参与门槛 |
| **[#190](https://github.com/anthropics/skills/pull/190)** n8n-builder & n8n-debugger | 工作流自动化场景需求明确，持续更新至 2026-05-18 |

---

### 4. Skills 生态洞察（一句话）

> 当前社区在 Skills 层面最集中的诉求是：**从"能用"走向"可信与可维护"**——即技能质量评估（skill-quality-analyzer）、安全审计（skill-security-analyzer）、YAML 解析健壮性、Windows 兼容性、跨平台分发机制，以及企业级共享能力，构成了社区对 Skills 基础设施成熟化的集体呼声。

---

# Claude Code 社区动态日报 — 2026-06-02

---

## 1. 今日速览

今日无新版本发布。社区讨论聚焦于三个方向：**Opus 4.7 模型适配问题**（思考摘要缺失）引发大量关注（👍67）；**Windows 平台稳定性**持续成为痛点，涉及 ARM64 崩溃、Cowork VM 启动失败、Bash 工具子进程泄露等；**上下文管理与 Auto-compact 可靠性**受到质疑，用户报告 200K 模式下 compact 从未触发。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

以下为按讨论热度和影响力筛选的 10 条最值得关注的 Issue：

### 🔴 高热度 / 关键 Bug

| # | 标题 | 平台 | 评论 | 👍 | 摘要 |
|---|------|------|------|:--:|------|
| [#49268](https://github.com/anthropics/claude-code/issues/49268) | **Opus 4.7 思考摘要缺失** — harness 未正确传递 `display: "summarized"` | macOS | 40 | 67 | Opus 4.7 切换默认 thinking display 模式为 raw，而 Claude Code 的 harness 层未适配此变更，导致 thinking summaries 不再显示。这是模型升级后的兼容性回归，影响所有使用 Opus 4.7 的用户。 |
| [#28817](https://github.com/anthropics/claude-code/issues/28817) | **Pro 用户 Remote Control 不可用**，尽管已完成认证 | 跨平台 | 43 | 60 | 远超 Pro 计划限制的用户反馈 Remote Control 功能被错误拦截。高 👍 数表明这是付费用户群体的系统性痛点，涉及权限校验逻辑的潜在缺陷。 |
| [#40198](https://github.com/anthropics/claude-code/issues/40198) | **Cowork VM 在 Windows ARM64 上无法启动**（Galaxy Book4 Edge / Snapdragon） | Windows ARM64 | 52 | 6 | Windows ARM 生态适配的代表性问题，Cowork 虚拟化层可能缺少对该平台的底层支持。评论数最高，说明影响面广。 |
| [#63015](https://github.com/anthropics/claude-code/issues/28817) | **Auto-compact 从不触发** — 状态栏显示"100% context used"但无压缩事件发生 | macOS | 13 | 12 | Max 订阅用户默认 200K 上下文模式下，auto-compact 机制失效。这是上下文管理的核心可靠性问题，可能导致会话在达到上限后静默失败。 |
| [#62063](https://github.com/anthropics/claude-code/issues/62063) | **新会话默认 1M 上下文且 Pro 计划无法降级** | macOS | 36 | 20 | Pro 用户在无 1M 上下文 credits 的情况下强行进入 1M 模式，缺乏 fallback 或用户可控选项，造成成本与体验双重问题。 |

### 🟡 平台兼容性与体验

| # | 标题 | 平台 | 评论 | 👍 | 摘要 |
|---|------|------|------|:--:|------|
| [#60334](https://github.com/anthropics/claude-code/issues/60334) | **图片处理 API 错误导致 token 大量浪费**（已关闭） | macOS | 38 | 13 | 用户报告在 5 小时窗口内 70% 配额被 API 图片处理错误消耗，且实际上并未发送图片。可能是缓存或 conversation history 中残留的 image block 导致。 |
| [#49086](https://github.com/anthropics/claude-code/issues/49086) | **终端 resize 导致内容重复渲染到 scrollback**（已关闭） | macOS | 19 | 8 | SIGWINCH 事件触发完整重绘时旧帧未清除，拖拽调整窗口大小时产生大量重复内容刷屏。UI 渲染管线的基础问题。 |
| [#62659](https://github.com/anthropics/claude-code/issues/62659) | **Windows Bash 工具子进程成为不可杀死的孤儿进程** | Windows | 4 | 1 | Bash 工具（及 cargo/node 等）的子进程未纳入 Job Object 管理，命令结束后仍存活。长期运行会导致资源泄漏，对构建任务影响尤为严重。 |
| [#59736](https://github.com/anthropics/claude-code/issues/59736) | **Desktop 中第三方创建的会话重启后消失**，JSONL 文件仍在磁盘 | Windows | 8 | 1 | UI 会话列表与实际转录文件不一致，可能是索引/扫描逻辑在 Desktop 模式下存在缺陷。 |

### 🟢 值得注意的新问题

| # | 标题 | 平台 | 评论 | 👍 | 摘要 |
|---|------|------|------|:--:|------|
| [#64574](https://github.com/anthropics/claude-code/issues/64574) | **Claude 无视直接指令导致 Polymarket 交易机器人损失 $112.77** | Linux | 9 | 0 | AI 行为不可控造成的实际经济损失案例。涉及自主代理在金融操作中的指令遵循可靠性，是安全性与可控性讨论的典型场景。 |

---

## 4. 重要 PR 进展

过去 24 小时内更新共 8 个 PR，以下为有实质内容的条目：

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#63686](https://github.com/anthropics/claude-code/pull/63686) | **将 stale/autoclose 超时从 14 天延长至 90 天** | OPEN | 修改 `issue-lifecycle.ts`，将 Issue 标记为 stale 和自动关闭的等待期从 14 天放宽至 90 天，减少正常 Issue 被过早关闭的风险。 |
| [#63467](https://github.com/anthropics/claude-code/pull/63467) | **为 /commit-push-pr 的 README 添加 Windows gh CLI 安装说明** | OPEN | 原文档仅列出 `brew install gh`（macOS），此 PR 补充 Windows 的 `winget install --id GitHub.cli` 及全平台安装链接。降低 Windows 用户贡献门槛。 |
| [#63872](https://github.com/anthropics/claude-code/pull/63872) | **修复 README 大小写和措辞** | OPEN | 将 `MacOS` 规范为 `macOS`、`GitHub` 大小写修正，将双破折号替换为逗号提升可读性。 |
| [#64489](https://github.com/anthropics/claude-code/pull/64489) | **更新示例文件** | OPEN | 为 example 文件添加新示例内容，降低新用户上手成本。 |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | *(标题缺失)* | OPEN | 作者 sjbrenchley89，无描述信息，可能是 WIP。 |
| [#61478](https://github.com/anthropics/claude-code/pull/61478) | *(Claude/营销管理系统)* | OPEN | 无具体描述，内容不明确。 |
| [#64602](https://github.com/anthropics/claude-code/pull/64602) | **添加 myproject 目录结构** | CLOSED | 快速关闭，未合并。 |
| [#64603](https://github.com/anthropics/claude-code/pull/64603) | **README.md 变更** | CLOSED | 快速关闭，未合并。 |

> **小结**：当前活跃 PR 以文档改善和 Issue 管理策略优化为主，未见核心功能或重大修复的 PR 合并。

---

## 5. 功能需求趋势

从今日 Issue 分布来看，社区最关注的功能方向如下：

| 趋势方向 | 代表 Issue | 热度信号 |
|----------|-----------|----------|
| **🤖 模型兼容性适配** | #49268 (Opus 4.7 thinking), #61185 (safeguards 误报), #62063 (模型上下文窗口默认值) | 高 👍，跨模型版本的适配滞后是核心痛点 |
| **🪟 Windows 平台完善** | #40198 (ARM64 Cowork), #62659 (Bash Job Object), #59736 (Desktop 会话丢失), #63402 (auto-update 二进制替换) | Windows 用户体验差距显著，稳定性问题频发 |
| **📐 上下文管理** | #63015 (Auto-compact 不触发), #62063 (默认 1M 上下文), #28817 (Remote Control 权限) | 上下文窗口的配置自动化和可靠性是高频诉求 |
| **🔒 安全性与指令遵循** | #64574 (忽视指令导致损失), #61185 (审核误拦运维命令) | AI 自主行为的可控性与安全边界的校准 |
| **🖥️ Desktop/macOS 体验** | #62333 (macOS Tahoe 无法打开), #44604 (富文本粘贴), #49086 (终端渲染) | GUI 端质量和兼容性持续收到关注 |
| **📊 成本与配额透明** | #60334 (token 浪费), #63060 (1M context 需额外 credits), #41567 (速率限制) | 用户对配额消耗的可见性和可控性要求提升 |

---

## 6. 开发者关注点

以下是本期日报从 Issue 和 PR 中提炼的共性痛点和高频需求：

**🔧 痛点 TOP 5**

1. **模型升级的透明适配成本** — Opus 4.7 的 API 默认行为变更未被 Claude Code 及时适配，导致用户"升级即坏"（thinking summaries 消失）。社区期望有一个模型变更的兼容性缓冲层。
2. **Windows 二等公民体验** — ARM64 支持缺失、Bash 进程管理缺陷、Desktop 会话丢失、auto-update 错误替换二进制，四个不同层面的 Windows 问题同时活跃。
3. **上下文管理"黑盒"感** — auto-compact 是否真的生效、默认上下文窗口为何是 1M、compact 触发条件不透明，用户缺乏可观测性和可控手段。
4. **安全审核的误报成本** — 常规运维命令被拦截、write-only 报告被阻止，过度保守的安全策略正在降低工具的实用性。
5. **配额消耗不可预测** — API 图片错误导致的 token 浪费、Phantom Consumption、未使用的 context 窗口仍计费，用户希望更精确的用量归因。

**💡 高频需求**

- Windows ARM64 平台的完整支持（Cowork + CLI + Desktop）
- 上下文模式的显式用户控制（手动选择 200K / 1M，而非硬编码默认值）
- 模型版本与 Claude Code 版本的兼容性变更日志
- Auto-compact 的状态可见性和手动触发机制
- `/doctor` 命令在 Desktop GUI 端的可用性与统一化

---

*数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | 报告由 OWL 自动生成*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-02

---

## 1. 今日速览

今日 Codex 发布了 **rust-v0.136.0**，TUI 的 Markdown 渲染和表格可读性显著改善，并新增会话归档功能。社区 Issue 方面，**Windows 桌面端**集中爆发多项严重 bug（OAuth 回调失败、node_repl 沙箱崩溃、插件不可用），成为今日最高频痛点。PR 侧，一个由 5 个 PR 组成的 **multi-agent runtime 元数据栈**正在快速推进，同时配置写入的原子性和事务锁改造也进入关键阶段。

---

## 2. 版本发布

### rust-v0.136.0

- **TUI Markdown 链接增强**：Web 链接通过 OSC 8 元数据保持可点击；拥挤的表格自动切换为键值对记录格式，同时保留链接目标。（[#24472](https://github.com/openai/codex/pull/24472)、[#24636](https://github.com/openai/codex/pull/24636)、[#24825](https://github.com/openai/codex/pull/24825)）
- **会话归档**：TUI 中可通过 `/archive` 归档会话，CLI 新增 `codex archive` 命令。

---

## 3. 社区热点 Issues

以下按影响范围和社区反应热度排序：

| # | Issue | 热度 | 摘要 |
|---|-------|------|------|
| 1 | **[#20161](https://github.com/openai/codex/issues/20161)** Phone number verification doesn't work | 💬179 👍115 | 最高热度 Issue。用户跨设备登录 SSO 时被要求输入未绑定的手机号，认证流程陷入死循环。大量 Pro/Plus 用户受影响，社区已持续讨论一个多月。 |
| 2 | **[#25157](https://github.com/openai/codex/issues/25157)** Windows OAuth "Open in Codex" 打开 Electron 错误 | 💬15 👍14 | Windows 桌面端 OAuth 回调深度链接失败，直接弹出 Electron 错误而非完成授权。严重影响 Windows 用户的登录体验。 |
| 3 | **[#18450](https://github.com/openai/codex/issues/18450)** Remote compact task stream disconnected | 💬20 👍12 | `/compact` 远程任务在流式传输中断开，影响上下文压缩功能的可靠性。多个版本持续复现。 |
| 4 | **[#25220](https://github.com/openai/codex/issues/25220)** Windows 插件因 EFS 加密导致 copyfile 失败 | 💬10 👍3 | Microsoft Store 安装版本在 EFS 加密的 WindowsApps 目录下，Computer Use / Browser / Chrome / LaTeX 等内置插件全部不可用。 |
| 5 | **[#11956](https://github.com/openai/codex/issues/11956)** Multi-repo support | 💬12 👍23 | 最受欢迎的功能请求。用户希望像 Claude Code 一样同时指向多个仓库进行跨服务开发，👍 数在功能类 Issue 中最高。 |
| 6 | **[#25715](https://github.com/openai/codex/issues/25715)** WSL 环境下 Codex App 极度缓慢 | 💬2 👍4 | Windows + WSL 作为 Agent 环境时，常规 turns 响应极慢，几乎不可用。 |
| 7 | **[#25084](https://github.com/openai/codex/issues/25084)** Desktop 隐藏活跃项目聊天记录 | 💬12 👍1 | 本地数据存在但侧边栏不显示，影响用户对历史会话的访问。 |
| 8 | **[#24806](https://github.com/openai/codex/issues/24806)** apply_patch 因 bwrap loopback 失败无法更新文件 | 💬3 👍4 | Linux 沙箱中 bubblewrap 的 RTM_NEWADDR 错误导致文件写入失败，影响核心编辑能力。 |
| 9 | **[#25670](https://github.com/openai/codex/issues/25670)** Authentication has literally broken | 💬6 👍2 | 用户设置了 passkey、手机验证、认证 app 后仍被反复要求输入旧号码，多层验证无法通过。 |
| 10 | **[#24300](https://github.com/openai/codex/issues/24300)** Goal auto-continuations 降级 Full Access 为只读 | 💬5 👍0 | 自动延续的 Goal 线程在 UI 显示 Full Access 的情况下实际以只读沙箱运行，存在权限不一致风险。 |

---

## 4. 重要 PR 进展

### 🔥 Multi-Agent Runtime 元数据栈（5 个 PR 组成）

这是今日最重磅的架构级变更，为 Codex 的多 Agent 运行时奠定基础：

| PR | 内容 |
|----|------|
| **[#25720](https://github.com/openai/codex/pull/25720)** | 新增 multi-agent runtime 元数据目录类型和基础管道 |
| **[#25721](https://github.com/openai/codex/pull/25721)** | 将 multi-agent runtime 元数据持久化到线程创建、rollout 记录和线程存储中 |
| **[#25722](https://github.com/openai/codex/pull/25722)** | 从持久化元数据、继承运行时和当前模型选择中解析每线程的有效 multi-agent runtime |
| **[#25723](https://github.com/openai/codex/pull/25723)** | 远程模型 multi-agent runtime 选择器覆盖本地 feature flag 默认值的测试覆盖 |
| **[#25724](https://github.com/openai/codex/pull/25724)** | 在首次 turn 前测试远程选择的多 Agent runtime 是否正确应用 |

### 🔒 配置写入原子性与事务锁

| PR | 内容 |
|----|------|
| **[#25718](https://github.com/openai/codex/pull/25718)** | 在 `codex-config` 中添加路径键控的配置写入事务锁，统一 app-server 和阻塞写入器的同步原语 |
| **[#25728](https://github.com/openai/codex/pull/25728)** | 将 plugin、marketplace、MCP、empty-config 和 external-agent 配置写入器迁移到共享事务锁上 |
| **[#25729](https://github.com/openai/codex/pull/25729)** | 将 marketplace、MCP 和 external-agent 的 TOML 持久化改为原子替换，防止读取器看到部分写入状态 |
| **[#25730](https://github.com/openai/codex/pull/25730)** | 缩小配置 RPC 序列化范围，将 ConfigManager 读取、版本检查、验证和持久化全部纳入文件事务保护 |

### 其他值得关注的 PR

| PR | 内容 |
|----|------|
| **[#25675](https://github.com/openai/codex/pull/25675)** | Remote Control 新增配对启动 RPC，支持从已注册的桌面服务器生成短期控制器配对凭证 |
| **[#25457](https://github.com/openai/codex/pull/25457)** | 缓存远程插件目录，在启动时预热，优化插件安装推荐的性能 |
| **[#25707](https://github.com/openai/codex/pull/25707)** | 在 turn 事件分析中新增 `CodexErr` 遥测字段，为下游分析提供更细粒度的错误溯源 |
| **[#25698](https://github.com/openai/codex/pull/25698)** ✅ 已合并 | 为 `McpServerConfig` 添加 `bon::Builder`，简化 MCP 服务器配置的初始化 |
| **[#25717](https://github.com/openai/codex/pull/25717)** ✅ 已合并 | 将无效的 `plugin.json` `skills` 字段形状降级为字段级警告而非拒绝整个 manifest |

---

## 5. 功能需求趋势

从今日全部 Issues 中提炼出的社区关注方向：

| 方向 | 代表 Issue | 趋势说明 |
|------|-----------|---------|
| **多仓库支持** | [#11956](https://github.com/openai/codex/issues/11956) | 👍23，功能类 Issue 中最高。跨服务开发场景的刚需，Claude Code 已实现。 |
| **Windows 桌面端稳定性** | [#25157](https://github.com/openai/codex/issues/25157)、[#25220](https://github.com/openai/codex/issues/25220)、[#24963](https://github.com/openai/codex/issues/24963) 等 | 今日近 1/3 的 Issue 集中在 Windows，涵盖 OAuth、沙箱、插件、性能。 |
| **认证流程可靠性** | [#20161](https://github.com/openai/codex/issues/20161)、[#25670](https://github.com/openai/codex/issues/25670)、[#9634](https://github.com/openai/codex/issues/9634) | 多设备登录、token 刷新、手机号验证等问题持续积压。 |
| **会话/项目管理** | [#25084](https://github.com/openai/codex/issues/25084)、[#23193](https://github.com/openai/codex/issues/23193)、[#25500](https://github.com/openai/codex/issues/25500) | Desktop 端聊天记录显示异常、搜索不到旧会话，影响日常使用。 |
| **沙箱与权限一致性** | [#24300](https://github.com/openai/codex/issues/24300)、[#24806](https://github.com/openai/codex/issues/24806) | 权限降级、沙箱文件写入失败等底层可靠性问题。 |

---

## 6. 开发者关注点

**🔴 Windows 平台体验堪忧**
今日 Windows 相关 Issue 数量最多且涉及面广：OAuth 深度链接回调失败（[#25157](https://github.com/openai/codex/issues/25157)、[#25188](https://github.com/openai/codex/issues/25188)）、node_repl 沙箱因 `os error 740` 崩溃（[#25366](https://github.com/openai/codex/issues/25366)、[#24963](https://github.com/openai/codex/issues/24963)）、EFS 加密导致插件不可用（[#25220](https://github.com/openai/codex/issues/25220)）、WSL 环境下性能极差（[#25715](https://github.com/openai/codex/issues/25715)）。Windows 桌面端已成为当前最大的用户痛点集中区。

**🔴 认证体系需系统性修复**
Issue [#20161](https://github.com/openai/codex/issues/20161) 以 179 条评论、115 个 👍 成为全库最热 Issue，且类似问题（[#25670](https://github.com/openai/codex/issues/25670)、[#9634](https://github.com/openai/codex/issues/9634)）持续新增。多层验证（passkey + 手机 + 认证 app）后仍无法通过，说明认证状态机存在深层 bug。

**🟡 Multi-agent 架构正在快速落地**
5 个 PR 组成的 multi-agent runtime 栈在同一天内全部打开，说明 OpenAI 正在加速推进多 Agent 协作能力。这将是从单 Agent 向多 Agent 工作流演进的关键基础设施。

**🟡 配置系统可靠性提升**
4 个 PR 聚焦于配置写入的原子性和事务锁，解决并发写入导致配置损坏的问题。这对 MCP 服务器管理、插件安装等高频配置操作尤为重要。

---

*数据来源：github.com/openai/codex | 统计时间：2026-06-02*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-02

## 1. 今日速览

今日无新版本发布，但社区 Issue 和 PR 活跃度高涨。**子智能体（Sub-agent）稳定性问题**成为焦点——多个 hang、崩溃和状态误报的 P1 Bug 同日更新；围绕 **Auto Memory 系统的安全性和质量**出现了一批由 SandyTao520 提交的集中修复；**MCP 工具发现的原子性**也成为 PR 热点。整体上，开发团队正在密集处理 Agent 核心体验的可靠性问题。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

### Agent 稳定性（集中爆发）

| # | Issue | 重要性 | 链接 |
|---|-------|--------|------|
| 🔴 | **#21409 Generalist agent hangs** — 用户反馈简单的文件夹创建操作也会让 generalist agent 无限挂起，需手动禁止 sub-agent 才能绕过。8 👍，7 条评论，P1。这是影响日常使用的基础体验问题。 | 高 | [查看](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 🔴 | **#22323 Subagent 达到 MAX_TURNS 却被报告为 GOAL success** — 子智能体实际上未完成分析，却返回成功状态，可能误导主代理做出错误判断。6 条评论，P1。 | 高 | [查看](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 🟡 | **#21968 Gemini 不会主动使用 skills 和 sub-agents** — 用户观察到模型即使在任务与自定义 skill 高度相关时也不会自主调用，需显式指示。6 条评论，P2。 | 中高 | [查看](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 🟡 | **#22186 get-shit-done output hook 导致崩溃** — 在任务接近完成输出摘要时触发 crash，3 条评论，P1。 | 中高 | [查看](https://github.com/google-gemini/gemini-cli/issues/22186) |

### Auto Memory 系统安全 & 质量（批量修复）

| # | Issue | 重要性 | 链接 |
|---|-------|--------|------|
| 🟡 | **#26525 为 Auto Memory 添加确定性脱敏并减少日志记录** — 现有脱敏（redaction）发生在内容已送入模型之后，存在安全隐患。3 条评论，P2。 | 中高 | [查看](https://github.com/google-gemini/gemini-cli/issues/26525) |
| 🟡 | **#26523 隔离 Auto Memory 中的无效 inbox patches** — 静默跳过无效 patch 可能导致 Aggregate dismiss 逻辑遗漏。3 条评论，P2。 | 中 | [查看](https://github.com/google-gemini/gemini-cli/issues/26523) |
| 🟡 | **#26522 停止 Auto Memory 对低信号 session 的无限重试** — 判断为低信号但未读取的 session 会反复被提取 agent 重新发现。3 条评论，P2。 | 中 | [查看](https://github.com/google-gemini/gemini-cli/issues/26522) |
| 🟡 | **#26516 Memory 系统 bug 与质量改进（追踪汇总）** — 上述多项 Memory 问题的父级追踪。2 条评论，P2。 | 中 | [查看](https://github.com/google-gemini/gemini-cli/issues/26516) |

### 评估与基础设施

| # | Issue | 重要性 | 链接 |
|------|-------|--------|------|
| 🟢 | **#24353 EPIC: 组件级评测（Component Level Evaluations）** — 追踪在 76 个行为评测测试基础上构建更细粒度的组件级测试框架。7 条评论，P1。 | 中（长期价值高） | [查看](https://github.com/google-gemini/gemini-cli/issues/24353) |

### 模型工具质量

| # | Issue | 重要性 | 链接 |
|------|-------|--------|------|
| 🟢 | **#22745 评估 AST 感知文件读取/搜索的价值** — 探索通过 AST 工具减少错误读取和 token 噪声的可能性，是 agent 长期质量提升方向。7 条评论，1 👍，P2。 | 中（前瞻性） | [查看](https://github.com/google-gemini/gemini-cli/issues/22745) |

---

## 4. 重要 PR 进展

### MCP & 核心修复

| # | PR | 内容摘要 | 状态 | 链接 |
|---|----|----------|------|------|
| 🔴 | **#27619** | **fix(core): MCP 工具发现原子性** — 在 `refreshTools` 中实现原子更新，网络瞬断时保留已有工具注册表，解决 "tool not found" 错误。 | OPEN | [查看](https://github.com/google-gemini/gemini-cli/pull/27619) |
| 🔴 | **#27383** | **fix(mcp-client): 防止网络超时时提前擦除工具列表** — 与 #27619 互补的同方向修复。 | CLOSED | [查看](https://github.com/google-gemini/gemini-cli/pull/27383) |
| 🔴 | **#27605** | **在 ACP 和 policy-engine 路径使用聚合 MCP 列表** — 修复允许/列表绕过漏洞，确保跨作用域设置的联合生效。 | OPEN | [查看](https://github.com/google-gemini/gemini-cli/pull/27605) |
| 🔴 | **#27463** | **fix(core): 在 file-based cacheCredentials 中保留 refresh_token** — 修复默认文件存储路径下 `refresh_token` 被覆盖的问题。Fixes #21691，P1/P2。 | OPEN | [查看](https://github.com/google-gemini/gemini-cli/pull/27463) |

### 模型支持 & CLI 功能

| # | PR | 内容摘要 | 状态 | 链接 |
|---|----|----------|------|------|
| 🟡 | **#27614** | **feat: 支持 Gemini 3.5 Flash 模型族** — 添加 `gemini-3.5-flash-preview` 和 `gemini-3.5-flash-lite-preview` 配置。 | OPEN | [查看](https://github.com/google-gemini/gemini-cli/pull/27614) |
| 🟡 | **#27570** | **在实验标志存在时切换到 Flash GA 模型** — 将旧 Gemini Flash 替换为 `gemini-3.5-flash`，受实验标志控制。 | CLOSED | [查看](https://github.com/google-gemini/gemini-cli/pull/27570) |
| 🟡 | **#27365** | **新增 --ephemeral 会话模式** — 针对无头/批处理场景，运行后不写入 session 日志，避免重复任务污染记录。 | OPEN | [查看](https://github.com/google-gemini/gemini-cli/pull/27365) |

### 平台 & 基础设施

| # | PR | 内容摘要 | 状态 | 链接 |
|---|----|----------|------|------|
| 🟢 | **#27572** | **fix(cli): 处理 tmux 下暗色背景误判** — 修复 tmux（尤其是 mosh）中终端背景被误检为亮色导致主题切换异常的问题。 | OPEN | [查看](https://github.com/google-gemini/gemini-cli/pull/27572) |
| 🟢 | **#27603** | **fix(core): 平台感知的 shell 引导** — 在 Windows 上提供 Win32 专用检查命令而非仅 Unix 示例。 | OPEN | [查看](https://github.com/google-gemini/gemini-cli/pull/27603) |
| 🟢 | **#27174** | **fix(core): 默认排除 .gemini/tmp/ 防止递归日志增长** — 代理搜索工具默认不再扫描自身的 session jsonl 日志。 | CLOSED | [查看](https://github.com/google-gemini/gemini-cli/pull/27174) |

---

## 5. 功能需求趋势

从今日活跃 Issues 和 PR 中提炼的五大方向：

1. **🔒 安全与隐私**
   Auto Memory 脱敏逻辑前置（#26525）、跨作用域 MCP 策略合并（#27605）——安全审查正在从模型层下沉到基础设施层。

2. **🤖 子智能体可靠性**
   Hang 修复（#21409）、MAX_TURNS 状态误报（#22323）、agent 主动使用 skills 能力（#21968）——这是目前社区痛点最集中的方向。

3. **🧠 记忆系统质量**
   SandyTao520 一日提交 4 个 Memory 相关 Issue + 1 个追踪汇总，涵盖脱敏、重试、无效 patch 隔离——Auto Memory 正处于密集迭代期。

4. **🔬 评测基础设施**
   组件级评测（#24353）、AST 感知工具评估（#22745）——团队在为 Agent 质量保证构建更完备的测试体系。

5. **🧩 模型扩展性**
   3.5 Flash 模型族支持（#27614）、Ephemeral 模式（#27365）——面向批处理/无头更广泛场景的适配。

---

## 6. 开发者关注点总结

| 痛点 | 代表 Issue | 反馈摘要 |
|------|------------|----------|
| **Agent 挂起/卡死** | #21409 (8👍) | 最广泛痛点，影响所有依赖 generalist agent 的用户 |
| **Sub-agent 状态不可信** | #22323 (2👍) | 静默返回"成功"掩盖了实际中断，可能导致后续逻辑错误 |
| **Agent 不主动利用已有能力** | #21968 (0👍 但 6 条评论) | 即便配置了相关 skill/agent，模型也不会自主触发 |
| **Memory 安全性** | #26525 (0👍 但 P2) | 敏感信息在脱敏之前已暴露给模型上下文 |
| **网络瞬断丢失 MCP 工具** | #27383 / #27619 | 短暂网络中断即导致工具列表清空的任务失败 |
| **终端体验** | #21924, #24935 | 窗口 resize 闪烁、外部 editor 退出后渲染损坏等细节问题持续存在 |

> **总体研判：** 团队正处于 Agent 核心稳定性冲刺期——多个 P1 Bug 同日更新且尚无关闭，MCP 工具发现和子智能体行为质量是两大攻坚方向。值得关注的是，Auto Memory 作为较新引入的系统，正迎来集中质量/安全加固。

---

*数据来源: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 生成时间: 2026-06-02*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-02

---

## 1. 今日速览

Copilot CLI 发布 **v1.0.57** 和预发布版 **v1.0.57-5**，重点修复了 GitHub API 限流时的错误提示、插件命令实时反馈及 Ctrl+C 中断逻辑。社区讨论最热烈的是 **组织启用模型在 CLI 端不可见**（#1703，27 条评论、53 个👍），以及新发现的 **v1.0.56+ 复制到Clipboard 失效** 问题（#3609、#3622）。今日新开的 Issue 集中在剪贴板/终端交互回归上。

---

## 2. 版本发布

**v1.0.57**（2026-06-01）主要更新：1. **Actions error message shown when GitHub API rate limit is hit during `copilot update`**：限流时给出明确提示，不再抛原始错误。2. **Plugin slash commands（/plugin install、uninstall、update、marketplace add/remove/browse）增加实时进度反馈**：操作进行中立即显示状态。3. **Cancel a running shell command（Ctrl+C）行为修复**：取消正在运行的终端命令更可靠。此外还有 **v1.0.57-5** 预发布版进行额外修复调整。

> 🔗 参考：Issue #3383（相关 rate limit 问题）

---

## 3. 社区热点 Issues

以下按热度与争议性选取 10 条：

### Issue #1703 — **[OPEN] Copilot CLI 不列出组织启用的全部模型（如 Gemini 3.1 Pro）**
- **为什么重要**：这是模型一致性的核心痛点。同一个 GitHub 组织账号在 VS Code Copilot 中可以看到完整模型列表，在 CLI 中被截断，直接阻碍高级模型（Gemini 3.1 Pro 等）在终端中使用。
- **社区反应**：27 条评论、53 个👍，高关注度，问题从 2026-02 持续至今仍未解决。
- 🔗 [github/copilot-cli #1703](https://github.com/github/copilot-cli/issues/1703)

### Issue #3609 — **[OPEN] v1.0.56 后无法复制到剪贴板**
- **为什么重要**：v1.0.56 引入了剪贴板回归 bug，"copied to clipboard" 提示弹出但实际未写入剪贴板，影响日常复制工作流。
- **社区反应**：与 #3622 同天报告，Windows 和跨平台均受影响，被认为是高优先级回归。
- 🔗 [github/copilot-cli #3609](https://github.com/github/copilot-cli/issues/3609)

### Issue #768 — **[CLOSED] MCP Server 默认禁用选项**
- **为什么重要**：开发者希望定义 MCP server 但默认关闭以节省 token，仅在需要时手动开启。已关闭（功能已实现或 plan）。
- **社区反应**：36 个👍，长期高需求，反映了 token 成本优化诉求。
- 🔗 [github/copilot-cli #768](https://github.com/github/copilot-cli/issues/768)

### Issue #1632 — **[OPEN] 支持 skill 子文件夹以更好地组织**
- **为什么重要**：随着用户创建的 skill 数量增长（已有用户超过 10 个），扁平目录结构已无法管理，需要子文件夹分类。
- **社区反应**：14 个👍，7 条评论，功能请求活跃。
- 🔗 [github/copilot-cli #1632](https://github.com/github/copilot-cli/issues/1632)

### Issue #3028 — **[OPEN] MCP tool 权限精细控制**
- **为什么重要**：需要对 MCP server 中个别 tool 进行 allow/deny 配置，类似 trustedFolders 的安全模型。安全敏感场景必备。
- **社区反应**：5 条评论、4 个👍，安全方向需求持续升温。
- 🔗 [github/copilot-cli #3028](https://github.com/github/copilot-cli/issues/3028)

### Issue #1707 — **[CLOSED] 第三方 MCP server 被错误禁用**
- **为什么重要**：v0.0.418 错误地报告"组织策略禁用第三方 MCP server"，但 VS Code 中这些 server 可用。已回退到 v417 后修复。
- **社区反应**：8 条评论，属于版本回归后关闭。
- 🔗 [github/copilot-cli #1707](https://github.com/github/copilot-cli/issues/1707)

### Issue #2060 — **[OPEN] aarch64 Linux 上 Exec format error**
- **为什么重要**：在 aarch64 Linux（如 Oracle Linux/RHEL/arm64）上安装后二进制无法执行，安装脚本可能分发了错误的架构二进制。
- **社区影响**：影响 ARM Linux 用户群，目前无回复，需关注。
- 🔗 [github/copilot-cli #2060](https://github.com/github/copilot-cli/issues/2060)

### Issue #3601 — **[OPEN] Bash tool 因 LC_CTYPE=C 导致非 ASCII 字符丢失**
- **为什么重要**：shell 环境变量 `LANG=""` 和 `LC_CTYPE="C"` 使中文、日文、韩文、emoji 等非 ASCII 字符被静默截断，文件路径含这些字符时直接无法解析。
- **社区影响**：影响国际化开发者和非英语工作流，属于环境配置深层 bug。
- 🔗 [github/copilot-cli #3601](https://github.com/github/copilot-cli/issues/3601)

### Issue #3596 — **[OPEN] resume 会话后 Not authenticated 错误**
- **为什么重要**：恢复特定会话后 `/model` 命令报 `Error: Not authenticated`，新建会话则正常，说明 resume 路径的认证状态存在 bug。
- **社区反应**：2 个👍，已被标记为 bug。
- 🔗 [github/copilot-cli #3596](https://github.com/github/copilot-cli/issues/3596)

### Issue #3615 — **[OPEN] `--resume` 支持自然语言检索历史会话**
- **为什么重要**：当用户不记得 session ID 或会话名称模糊时，希望用自然语言查找历史会话，提升 resume 易用性。
- **社区反应**：4 个👍，功能请求获正面响应。
- 🔗 [github/copilot-cli #3615](https://github.com/github/copilot-cli/issues/3615)

---

## 4. 重要 PR 进展

今日仅有 1 条 PR 在过去 24 小时内更新：

### PR #3473 — **[OPEN] Update project name in README**
- **内容**：试图修改 README 中的项目名称。
- **风险提示**：该 PR 描述中包含垃圾链接（Temu/GCash 邀请链接），疑似被入侵账户或机器人提交，应标记为 spam 并关闭。
- **评论与状态**：无有效评论，👍: 0。
- 🔗 [github/copilot-cli PR #3473](https://github.com/github/copilot-cli/pull/3473)

> ⚠️ **今日 PR 数量极少**，不及选取 10 条的标准。社区当前主要精力集中在 Issue 讨论和问题排查上，新功能 PR 活动较低。

---

## 5. 功能需求趋势

从过去 24 小时的 35 条 Issue 中提炼出以下方向：

| 趋势方向 | 代表 Issue | 说明 |
|---------|-----------|------|
| **模型支持与一致性** | #1703, #3624 | 组织启用模型在 CLI 不可见；要求支持通用本地推理端点（Ollama/LM Studio 等） |
| **上下文与记忆管理** | #3623, #3621 | Claude Sonnet 4.6 下上下文快速丢失；大 instruction 文件导致 auto-compaction 无限循环 |
| **MCP 生态深度集成** | #768, #3028, #1707, #1378 | 默认禁用、权限精细控制、timeout 配置丢失、子 agent 任务图 |
| **终端交互与剪贴板** | #3609, #3622, #3605, #3620, #3614 | 剪贴板复制失效、多行复制截断、Ctrl+C 重载过多、隐藏 tool call 活动开关 |
| **会话管理增强** | #3615, #3596, #1914 | resume 自然语言检索、resume 后认证失败、`-r` 短标志 |
| **国际化与编码** | #3601, #3619 | 非 ASCII 字符剥离、fish shell 退出码 sentinel 不兼容 |
| **安全与权限** | #3616 | 权限提示错误地将非 git 目录关联到 session 的 git repo |
| **LSP 与工具集成** | #3516, #1323 | LSP 未按强制指令调用；rust-analyzer LSP project-level 启动失败 |

---

## 6. 开发者关注点总结

1. **剪贴板回归是最高优先级痛点**：v1.0.56 引入的复制失效问题被多人同日报告，跨平台均需修复。
2. **模型一致性落差扩大**：CLI 与 VS Code Copilot 在组织级模型可见性上的差距已持续数月（#1703，53 个👍），需要尽快对齐。
3. **MCP 生态的精细化诉求升级**：从"能否用"转向"如何安全地用、高效地用"——默认禁用、权限粒度、超时稳定性。
4. **指令文件与上下文膨胀成隐患**：随着 skill/copilot-instructions 文件变大，auto-compaction 策略暴露问题（#3621）。
5. **非英语开发者的环境适配**：`LC_CTYPE=C` 和非 bash 兼容性问题被频繁提出，国际化支持亟需改善。
6. **Resume 体验细节打磨**：自然语言检索、短标志 `-r`、resume 后认证状态，高频使用场景仍有不足。

---

*日报由 OWL 根据 github.com/github/copilot-cli 公开数据生成 | 生成时间: 2026-06-02*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-02

---

## 1. 今日速览

本日无新版本发布。社区更新以 Bug 修复和体验优化为主：两个新 Issue 分别报告了安装阶段的网络依赖问题和会话重启后历史图片被重复发送的 Bug；PR 方面，4 个活跃提交覆盖了剪贴板复制、OAuth 认证流程健壮性、undo 逻辑修正及工具错误输出展示优化。总体来看，社区贡献者持续深入打磨 CLI 的可靠性和细节交互。

---

## 2. 版本发布

**过去 24 小时无新版本发布，本节略去。**

---

## 3. 社区热点 Issues

本期过去 24 小时内更新的 Issue 共 2 条，均值得关注：

### #1914 — Installation fails in regions where GitHub is unreachable because uv installer downloads from GitHub Releases **[CLOSED]
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/1914
- **作者**: warku123 | 创建: 2026-04-17 | 更新: 2026-06-01
- **严重度**: 🔴 高 — 阻塞安装流程
- **为什么重要**: 该 Issue 报告了在中国等 GitHub 网络不稳定地区，`kimi-cli` 的安装脚本依赖从 GitHub Releases 下载 `uv` 安装包，导致整个安装流程直接失败。这直接影响新用户的首装体验，尤其是非海外环境的用户群体。
- **社区反应**: 评论数为 0，👍 数为 0，最终以 CLOSED 状态关闭。修复方案未在 Issue 中说明，建议后续关注关联 PR 是否已合并。

### #2413 — 重启 kimi cli 会发送历史图片 污染会话 **[OPEN]
- **链接**: https://github.com/MoonshotAI/kimi-cli/issues/2413
- **作者**: d951092367 | 创建: 2026-06-01 | 更新: 2026-06-01
- **严重度**: 🟡 中 — 数据/上下文污染
- **为什么重要**: 在 v1.46.0 中，当用户在 Web 端发送图片后重启 CLI 会话，历史图片会被重新注入上下文，导致会话被"污染"。这暗示会话持久化/恢复逻辑对图片类型的消息处理存在问题，在多模态工作流中尤为关键。
- **社区反应**: 评论数为 0，👍 数为 0，目前处于 OPEN 状态，等待官方响应。

> **说明**: 过去 24 小时内更新的 Issue 仅 2 条，以下从全局数据中补充说明社区长期热点方向，见第 5、6 节。

---

## 4. 重要 PR 进展

本期过去 24 小时内更新的 PR 共 4 条，逐一简述：

### #2414 — fix(auth): avoid persisting OAuth token before config validation **[OPEN]
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2414
- **作者**: SylvainM98 | 创建: 2026-06-01
- **类型**: 🐛 Bug 修复
- **内容**: 调整 OAuth 认证流程，在写入用户凭证前，先验证服务端返回的 model list 和默认 model 选择；如果配置保存失败，则回滚已写入的凭据。同时补充了多项回归测试（如 list_models 失败、空 model list、配置回滚路径等）。
- **影响**: 修复了认证流程中的时序漏洞——若网络异常或配置写入失败，用户可能拿到一个"半认证"状态。此 PR 提升了登录流程的健壮性。

### #1741 — feat: add /copy command for latest assistant response **[OPEN]
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1741
- **作者**: kyzhang-melo | 创建: 2026-04-03（近期有更新）
- **类型**: ✨ 新功能
- **内容**: 新增 `/copy` 命令，将当前会话中最近一条助手回复复制到系统剪贴板。变更包括新增 `copy_text_to_clipboard()` 工具函数及对应命令处理逻辑。
- **影响**: 显著提升 CLI 工作流中"把结果贴到别处"的便捷性，对频繁使用 CLI 做代码审查、写作辅助的用户体验改善明显（相关 Issue: #1725）。

### #2386 — fix(session): map undo wire turns to context turns **[OPEN]
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2386
- **作者**: Pluviobyte | 创建: 2026-05-28（近期有更新）
- **类型**: 🐛 Bug 修复
- **内容**: 修复 `/undo` 和 fork 操作的上下文截断逻辑。当前实现中，`wire.jsonl` 的 `TurnBegin` 索引直接被用于 `context.jsonl` 截断，但本地 slash 命令（如 `/undo`）不会在 `context.jsonl` 中写入真实消息，导致索引错位。此 PR 增加了映射层。
- **影响**: Issue #1974、#2049 关联，undo/fork 行为对高级用户影响较大，修复后可防止上下文丢失或错误截断。

### #2389 — fix(tools): include trailing output in error briefs and render brief as plain text **[CLOSED]
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2389
- **作者**: liruifengv | 创建: 2026-05-28（近期更新: 2026-06-01，已关闭）
- **类型**: 🐛 Bug 修复
- **内容**: 修复 shell 工具输出——当命令执行失败时，现在会将命令输出的尾部内容纳入 error brief，并以纯文本渲染（而非结构化格式），确保开发者能完整看到错误信息。
- **影响**: 提升了调试命令行工具时的信息完整性，对工具链集成场景尤为实用。

---

## 5. 功能需求趋势（Issue 数据统计）

从本期 Issues 中提炼出以下方向：

| 趋势方向 | 代表 Issue | 热度 |
|--------|-----------|------|
| **网络/安装可用性** | #1914（GitHub 网络不通导致安装失败） | ⬛⬛⬛⬜⬜ — 高时效问题，区域性影响大 |
| **多模态/图片处理** | #2413（历史图片污染会话） | ⬛⬛⬜⬜⬜ — 场景特定但影响关键工作流 |
| **认证/账户安全** | #2414（PR 修复的认证时序问题） | ⬛⬛⬜⬜⬜ — 底层可靠性问题，影响所有用户 |
| **会话管理/undo** | #2386（PR 修复的 undo 逻辑） | ⬛⬛⬜⬜⬜ — 高级用户使用频率低，但 bug 影响严重 |

> 整体来看，本期 Issue 量较低（24h 仅 2 条），社区讨论仍集中在**底层可靠性和边缘场景**的修复，尚未出现明显的新功能需求爆发。

---

## 6. 开发者关注点与高频需求总结

从 Issue 和 PR 数据中，开发者目前最关心的痛点如下：

1. **安装门槛仍高** — #1914 表明网络依赖（GitHub Releases）构成地区性安装障碍。建议官方考虑提供镜像源或离线包支持，尤其面向中国用户。
2. **多模态会话恢复逻辑需补强** — #2413 的图片重复发送问题说明会话持久化层对非文本消息类型（图片等）的处理尚不完善，这可能是一个系统性问题，不仅限于图片，还可能涉及文件、音频等。
3. **认证流程需更健壮** — PR #2414 正在修复认证中间态的处理，这是一个"一旦出 bug 就不可用"的关键路径。
4. **CLI 工作流细节体验** — `/copy`（#1741）、`/undo` 修复（#2386）、错误输出（#2389）都指向同一个趋势：CLI 从"能用"走向"好用"，社区贡献者正将其对标如 tmux、fzf 等成熟 CLI 工具的交互体验。
5. **slash 命令与上下文的一致性** — 本地命令（如 `/undo`）不在 context.jsonl 中写消息，导致 undo 越界，这说明 CLI 的"命令系统"和"会话系统"之间存在设计缺口。

---

**总结**: 本期（2026-06-02）Kimi Code CLI 社区以 Bug 修复和体验打磨为主线，没有重大功能发布，但活跃 PR 正逐步解决认证安全、undo 逻辑、剪贴板复制、安装可用性等关键问题。建议关注 #2413（图片会话污染）的后续处理，以及 #2414（OAuth 修复）的合并进度。

---

*数据来源: github.com/MoonshotAI/kimi-cli | 日报生成时间: 2026-06-02*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-02

---

## 1. 今日速览

今日无新版本发布，但社区活跃度极高：**Desktop v1.15.13 的 MCP 连接问题集中爆发**，多个用户报告升级后 MCP 列表消失（#30104、#30130、#30265、#30286）；同时 **v1.15.13 存在明显资源消耗问题**，macOS ARM64 用户反映启动后 CPU 飙升至 100%+（#30126）。贡献者也相当活跃，`kitlangton` 提交了修复 session hydration 期间消息丢失的 PR #30300，以及为 MiniMax-M3 模型增加配置的 PR #30201。

---

## 2. 版本发布

过去 24 小时内无新版本发布。社区当前讨论集中在 **v1.15.13** 的回归问题。

---

## 3. 社区热点 Issues

### 🔴 v1.15.13 MCP 大面积失效（多个 Issue 集中爆发）

- **#30104** [OPEN] Desktop app MCP tab shows 'No MCPs configured' despite MCP servers being connected (CLI works fine)
  - 作者：Syahrul83｜👍 9｜评论 7
  - 链接：>anomalyco/opencode Issue #30104>
  - **为什么重要**：桌面端 v1.15.13 的 MCP 标签页显示"未配置 MCP"，但 CLI 下一切正常。这是升级后的回归性 bug，直接影响了 MCP 工作流用户。

- **#30130** [OPEN] Desktop v1.15.13: MCP servers not loaded (race condition in PR #28937 + plugin-injected MCPs ignored)
  - 作者：gabriel-ferraresi｜👍 2｜评论 3
  - 链接：>anomalyco/opencode Issue #30130>
  - **为什么重要**：用户进一步定位了根因，指出是 PR #28937 引入的竞争条件 + 插件注入的 MCP 被完全忽略。这是对 #30104 的深入诊断。

- **#30265** [OPEN] MCP Broken on v1.15.13
  - 作者：PGCRT｜👍 3｜评论 5
  - 链接：>anomalyco/opencode Issue #30265>
  - **为什么重要**：更新了 v1.15.13 后 MCP 直接消失，配置未改动。进一步印证 MCP 问题影响的普遍性。

- **#30299** [OPEN] MCPs disappeared on electron MacOS desktop app
  - 作者：Shasheen8｜评论 2
  - 链接：>anomalyco/opencode Issue #30299>
  - **为什么重要**：macOS Electron 桌面端同样受影响，CLI 正常但桌面端不加载 MCP 和远程服务器。

> ⚠️ **总结：MCP 失效是今日最高优先级警报**，至少 4 个 Issue 报告相同症状，涉及 Windows 和 macOS，指向 v1.15.13 的同一类回归问题。

---

### 🔴 v1.15.13 性能退化

- **#30126** [OPEN] High CPU and Memory usage on macOS ARM64
  - 作者：Stephenchangchang｜评论 3
  - 链接：>anomalyco/opencode Issue #30126>
  - **为什么重要**：macOS ARM64（Apple Silicon）上启动后 CPU 100%+、内存 ~2.5GB，明确指向 v1.15.13 引入的性能回归。

---

### 🟡 权限系统长期争议持续

- **#16331** [OPEN] Permissions ignored
  - 作者：MonsieurTib｜👍 8｜评论 40
  - 链接：>anomalyco/opencode Issue #16331>
  - **为什么重要**：创建于 3 月的老 Issue，今日仍在活跃讨论。用户配置了 `*.env` 等文件的读取拒绝权限，但 OpenCode 仍无视配置。40 条评论说明社区对权限不生效的挫败感非常强烈，是系统信任层面的根本问题。

- **#8832** [OPEN] opencode not respecting permissions
  - 作者：vstenvik｜👍 7｜评论 15
  - 链接：>anomalyco/opencode Issue #8832>
  - **为什么重要**：另一个长期存在的权限失效 Issue，表明该 bug 不是孤立案例而是系统性问题。

---

### 🟡 Auto-scroll 行为问题

- **#29992** [OPEN] Auto-scroll stops working after manually scrolling and returning to bottom
  - 作者：derycklong｜👍 12｜评论 8
  - 链接：>anomalyco/opencode Issue #30265>
  - **为什么重要**：用户手动向上滚动查看历史后再回到底部，auto-scroll 停止工作，新产生的内容不再自动滚动。影响长对话场景下的使用体验。

---

### 🟢 AI 定价调整带来的机会

- **#28846** [OPEN] Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction
  - 作者：icocoon｜👍 59｜评论 42
  - 链接：>anomalyco/opencode Issue #28846>
  - **为什么重要**：DeepSeek V4 Pro API 价格永久性降低 75%，社区呼吁调整 OpenCode Go 的使用限额以反映成本变化。59 个点赞表明用户对此类成本敏感度非常高，是最受关注的 Feature Request 之一。

---

### 🟢 模型支持与新请求

- **#30210** [OPEN] Add Minimax M3 Models from Minimax Token Plan Provider
  - 作者：Pieenut｜👍 14｜评论 5
  - 链接：>anomalyco/opencode Issue #30210>
  - **为什么重要**：用户请求接入 Minimax 最新 M3 模型，已有对应的 PR #30201 提交合并中，模型生态扩展呼声持续。

---

### 🟡 Desktop TUI 渲染 Bug

- **#30246** [CLOSED] Question tool backend executes normally but TUI does not render the panel (v1.15.13)
  - 作者：murphy-halei｜评论 4
  - 链接：>anomalyco/opencode Issue #30246>
  - **为什么重要**：v1.15.13 上 question 工具后端正常执行但 TUI 完全不渲染面板，仅显示活动指示器。已关闭说明团队已响应，但频繁出现的同名 Issue 表明 TUI 渲染层需系统性排查。

---

## 4. 重要 PR 进展

### 🔴 Bug 修复（高优先级）

| # | PR | 作者 | 说明 |
|---|-----|------|------|
| **30300** | fix(tui): preserve live parts during session hydration | [kitlangton](>anomalyco/opencode PR #30300>) | **今日最重要 PR**。修复了 session 历史水合（hydration）过程中实时消息被过期 HTTP 快照数据覆盖的问题，并能防止终端被截断后跳过末尾消息。附带回归测试。 |
| **30293** | fix(ui): heal incomplete backticks in streaming text rendering | [agent-daryl](>anomalyco/opencode PR #30293>) | 修复流式响应中包含反引号时被截断的问题。在 `markdown-stream.ts` 中处理不完整的 code block 标记，确保渲染完整性。关闭 #15774。 |
| **25345** | fix(opencode): fix infinite selection loop when hovering in TUI menus | [thoughtlesslabs](>anomalyco/opencode PR #25345>) | 修复 TUI 菜单悬停时无限选择循环的 bug，关闭 #25310。 |
| **25340** | fix: ensureTitle falls back to main model when getSmallModel fails | [per-hap-s](>anomalyco/opencode PR #25340>) | 当 `getSmallModel()` 失败或返回 None 时，`ensureTitle` 会正确回退到主模型，而非错误抛出。关闭 #25344。 |
| **25292** | fix: Update regex for maximum context length error to support sglang | [koush](>anomalyco/opencode PR #25292>) | 更新最大上下文长度错误的解析正则表达式，使其兼容 sglang 的错误消息格式。关闭 #25231。 |
| **25258** | fix: ensure MiMo models display correct context limit in tooltip | [ShadyUnderLight](>anomalyco/opencode PR #25258>) | 小米 MiMo 模型在模型选择器提示中显示"Context limit 0"，修复为正确上下文长度。关闭 #25256。 |

---

### 🟢 新功能 / 模型支持

| # | PR | 作者 | 说明 |
|---|-----|------|------|
| **30201** | feat(minimax): add MiniMax-M3 model with updated configurations | [Zcating](>anomalyco/opencode PR #30201>) | **已于今日合并**。为 MiniMax 提供商添加 MiniMax-M3 模型配置，开发者已验证可切换并使用 M3。 |
| **30190** | fix(opencode): make OpenRouter prompt cache 1h TTL opt-in via env | [rndmcnlly](>anomalyco/opencode PR #30190>) | 将 OpenRouter 的 prompt cache TTL 从默认 5 分钟延长到 1 小时，通过环境变量控制。关闭 #16848。 |
| **30284** | fix(opencode): expose OpenRouter reasoning variants for more models | [aramaraju](>anomalyco/opencode PR #30284>) | 之前 OpenRouter reasoning effort 变体（low/medium/high）仅适用于 GPT、Gemini 3 和 Claude 模型。此 PR 扩展到包括 `deepseek/deepseek-v4-pro` 在内的更多 reasoning-capable 模型。 |

---

### 🟡 改进与工具链

| # | PR | 作者 | 说明 |
|---|-----|------|------|
| **25198** | fix: fix AI refusing to commit | [scarf005](>anomalyco/opencode PR #25198>) | 移除 AGENTS.md 中导致 AI 拒绝提交的 prompt-policy 行。修复 #17157。在实际使用场景中影响广泛。 |
| **25180** | fix: enable auto-compaction for sub-agents and improve context overflow detection | [emco1234](>anomalyco/opencode PR #25180>) | 子 agent 在上下文溢出时无限挂起，因为 compaction 从未触发。此 PR 修复 session processor，为子 agent 启用自动压缩。 |

---

## 5. 功能需求趋势

从今日活跃的 50 个 Issue 中可以提炼出以下 **五大功能诉求方向**：

1. **新模型 / Provider 接入** — 高频请求，社区持续关注
   - DeepSeek V4 Pro、MiniMax M3、Requesty 模型加载、OpenRouter reasoning 变体、Git 子模块对话支持
   - 反映社区对新 LLM 接入的高期望

2. **MCP（Model Context Protocol）完善** — 今日最集中爆发的问题方向
   - Desktop 端 MCP 加载失败、插件-injected MCP 被忽略、MCP 列表不显示
   - MCP 已成为核心工作流，稳定性问题直接影响大量用户

3. **权限系统可靠性** — 长期未解决的系统性痛点
   - 多个 Issue 报告权限配置被忽略（#16331、#8832、#27436），跨越数月仍未根治
   - 涉及安全敏感场景（.env 文件保护），社区信任度受影响

4. **TUI / Desktop 体验优化** — 交互细节持续打磨
   - Auto-scroll 行为、流式渲染截断、question tool 面板不渲染、session 水合消息丢失
   - 桌面端用户增长带来更高的 UI/UX 期望

5. **性能与资源管理** — 回归问题需关注
   - macOS ARM64 高 CPU/内存消耗（#30126）、后台任务 agent 不可见（#30179）
   - 随着功能增多，资源效率成为关注点

---

## 6. 开发者关注点总结

| 优先级 | 关注点 | 关键信号 |
|--------|--------|----------|
| 🔴 **紧急** | v1.15.13 MCP 回归 | 4+ Issue 集中爆发，Windows/macOS 均受影响，CLI 正常但 Desktop 端失效 |
| 🔴 **紧急** | v1.15.13 性能退化 | macOS ARM64 CPU 100%+、内存 2.5GB，需尽快排查 |
| 🟠 **高** | 权限系统长期失效 | 跨越 3 个月的老 Issue 仍活跃，40+ 评论，涉及安全敏感文件保护 |
| 🟠 **高** | TUI 渲染稳定性 | 流式截断、面板不渲染、auto-scroll 失效等多个渲染层 bug |
| 🟡 **中** | 模型生态扩展 | MiniMax M3、DeepSeek V4 Pro 定价调整、OpenRouter reasoning 变体 |
| 🟡 **中** | 子 agent 可靠性 | 上下文溢出无限挂起、后台任务不可见、doom loop 检测 |

---

> **编辑建议**：今日日报应重点提醒用户 **暂缓升级 v1.15.13**（如依赖 MCP 或 macOS ARM64），并关注 PR #30300 和 #30293 的合并进展——这两个修复直接解决了 session 消息丢失和流式渲染截断问题，预计将在下一个 patch 版本中发布。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-02

---

## 1. 今日速览

今日 Pi 社区活跃度较高，共新增/更新 **48 条 Issues** 和 **22 条 PRs**，但无新版本发布。热点集中在三个方面：**多模型兼容性修复**（OpenRouter 系列模型的 `developer` role 报错问题集中爆发）、**TUI 渲染稳定性**（悬停层、图片渲染、CJK 边界等多处 bug 被接连修复）、以及**MiniMax-M3 新模型支持**的合并落地。社区对 `openai-codex`/`gpt-5.5` TUI 卡死问题的讨论热度最高（50 条评论，25 个赞），说明大型模型流式响应的可靠性是当前用户最大痛点。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 社区热点 Issues

以下是今日最值得关注的 10 条 Issue：

### 🔴 #4945 — `openai-codex` / `gpt-5.5` TUI 卡在 "Working..."（50 评论 | 25 👍）
使用 `openai-codex`（gpt-5.5）时，交互界面会随机卡在 `Working...` 状态，无流式输出、无工具调用、无任何报错信息，只能按 Escape 以中止本轮对话恢复。该问题已持续数日，影响范围广。
> [github.com/earendil-works/pi/issues/4945](https://github.com/earendil-works/pi/issues/4945)

### 🟡 #5089 — `timeoutMs` 超过某阈值后失效（22 评论 | 2 👍）
在低配机器或 CPU 上运行 llama.cpp 后端（如 Qwen 3.6 27B Q8）时，处理大文件等耗时操作会提前超时，`timeoutMs` 设置在大值时似乎不生效，模型还没返回结果就被强制中断。
> [github.com/earendil-works/pi/issues/5089](https://github.com/earendil-works/pi/issues/5089)

### 🟢 #5263 — 建议会话内模型切换默认设为临时生效（3 评论）
当前在会话中切换模型和思考级别会修改全局默认值，作者建议将会话内切换改为"仅当前会话生效"，并在 `/settings` 菜单中提供专门的"默认模型"入口。该提案获社区关注。
> [github.com/earendil-works/pi/issues/5263](https://github.com/earendil-works/pi/issues/5263)

### 🔴 #5229 — MiniMax on OpenRouter 报错（6 评论 | 1 👍）
通过 OpenRouter 使用 MiniMax 模型时返回 400 错误，原因是请求中使用了 `developer` role，而 OpenRouter 只接受 `system` role。与 #5117 属于同系列兼容性问题。
> [github.com/earendil-works/pi/issues/5229](https://github.com/earendil-works/pi/issues/5229)

### 🔴 #5117 — Qwen 3.7 Max on OpenRouter 报错（6 评论 | 4 👍）
与 #5229 同因：OpenRouter 不支持 `developer` role，导致 Qwen 3.7 Max 调用直接返回 400。已获得上游修复（PR #5221）。
> [github.com/earendil-works/pi/issues/5117](https://github.com/earendil-works/pi/issues/5117)

### 🟡 #4877 — 会话文件夹碰撞问题（8 评论 | 2 👍）
由于路径折叠规则，两个不同的工作目录（如 `/a/b/c/d` 和 `/a-b/c-d`）可能映射到同一会话文件夹 `--a-b-c-d--`，造成会话数据混乱。属于设计层面的隐患。
> [github.com/earendil-works/pi/issues/4877](https://github.com/earendil-works/pi/issues/4877)

### 🟢 #4180 — TUI 中超链接不可点击（6 评论）
近期 pi-coding-agent 采用 alternate term mode 后，TUI 中的 URL 和 Markdown 超链接不再支持点击，影响用户体验。已标记为 `closed-because-bigrefactor`。
> [github.com/earendil-works/pi/issues/4180](https://github.com/earendil-works/pi/issues/4180)

### 🟢 #5291 — 使用 Anthropic 订阅时会话卡在 "Working..."（2 评论）
使用 Anthropic Enterprise 订阅时，会话会随机集体卡住，需要等待很久才能恢复或重新连接。可能与 provider 端的速率限制或 token 过期有关。
> [github.com/earendil-works/pi/issues/5291](https://github.com/earendil-works/pi/issues/5291)

### 🟡 #5271 / #5272 — 请求支持 MiniMax-M3（各 6/2 评论）
MiniMax 刚刚发布旗舰模型 M3（支持 1M 上下文和原生多模态），社区迅速提交了支持请求。PR #5284 已合并完成。
> [github.com/earendil-works/pi/issues/5271](https://github.com/earendil-works/pi/issues/5271)

### 🟡 #5286 — GitHub Copilot 模型缺少详细定价信息（2 评论）
GitHub Copilot 已从纯订阅模式改为按 Token 计费，但 Pi 中 Copilot 模型仍显示 `$0.000 (sub)`，缺少实际 Token 价格。
> [github.com/earendil-works/pi/issues/5286](https://github.com/earendil-works/pi/issues/5286)

---

## 4. 重要 PR 进展

以下是今日合并或开放的 10 个重要 PR：

### ✅ PR #5284 — 添加 MiniMax-M3 支持（已合并）
向 `minimax`（海外）和 `minimax-cn`（中国区）两个 provider 添加 MiniMax-M3，配置为 512K 上下文、128K 最大输出、原生多模态输入，输入成本 $0.3/M tokens。这是今日最重要的功能合并。
> [github.com/earendil-works/pi/pull/5284](https://github.com/earendil-works/pi/pull/5284)

### ✅ PR #5221 — 修复 OpenRouter reasoning 指令 role（已合并）
OpenRouter 请求将 system prompt 从 `developer` message 改为 `message`，OpenAI reasoning 模型保持原有 `developer` 行为。直接修复 #5117、#5229。
> [github.com/earendil-works/pi/pull/5221](https://github.com/earendil-works/pi/pull/5221)

### ✅ PR #5235 — 修复 TUI overlay 焦点丢失（已合并）
修复 #5129：调用 `ctx.ui.custom()` 无 overlay 参数时，会导致已打开的同级 overlay 失去焦点，变为不可交互状态。通过在 `pi-tui` 层修复焦点恢复逻辑完成修复。
> [github.com/earendil-works/pi/pull/5235](https://github.com/earendil-works/pi/pull/5235)

### ✅ PR #5296 — 修复 WezTerm 中 Kitty 图片渲染（已合并）
修复 WezTerm 终端内联图片仅显示为空白预留区域的回归问题，精确定位图片在预留行之后的绘制位置。替代了不完整的 PR #5233。
> [github.com/earendil-works/pi/pull/5296](https://github.com/earendil-works/pi/pull/5296)

### ✅ PR #5277 — 新增 `gitContextBoundary` 设置（已合并）
在 `settings.json` 中新增 `gitContextBoundary` 选项，开启后 `AGENTS.md` 祖先收集将在 git 根目录处停止，防止 `$HOME` 目录下的 `AGENTS.md` 泄漏到所有项目中。默认关闭。
> [github.com/earendil-works/pi/pull/5277](https://github.com/earendil-works/pi/pull/5277)

### ✅ PR #5308 — 修复本地模型工具参数校验失败（已合并）
本地模型（Qwen3.6-35B、DeepSeek 等）在生成工具调用时会产生两类非法入参：YAML frontmatter 泄漏和字段值错位。该 PR 在 `prepareArguments` 中增加清洗逻辑。
> [github.com/earendil-works/pi/pull/5308](https://github.com/earendil-works/pi/pull/5308)

### ✅ PR #5288 — 修复 read tool 误将非图片二进制文件按 UTF-8 解码（已合并）
当 read tool 读取非四类支持图片类型的文件时，会错误地尝试将二进制内容按 UTF-8 解码，可能导致乱码或崩溃。修复后只处理文本 MIME 类型。
> [github.com/earendil-works/pi/pull/5288](https://github.com/earendil-works/pi/pull/5288)

### ✅ PR #5269 — 新增 `ctx.isInteractive` 区分 TUI 与 RPC 模式（已合并）
修复因 RPC 模式获得 prompt 功能后，`hasUI` 被错误设为 true 导致扩展无法判断是否在交互式终端运行的问题。
> [github.com/earendil-works/pi/pull/5269](https://github.com/earendil-works/pi/pull/5269)

### 🔵 PR #5302 — 新增 `ui_prompt_start`/`ui_prompt_end` 扩展事件（开放中）
新增两个扩展事件，在有 UI dialog（select/confirm/input/editor/custom）打开和关闭时触发，方便状态栏或终端复用器（如 cmux）集成。
> [github.com/earendil-works/pi/pull/5302](https://github.com/earendil-works/pi/pull/5302)

### 🔵 PR #5281 — 为所有命令支持自定义快捷键绑定的提案（开放中）
统一内置命令和扩展命令的处理方式，新增 `cmd.<name>` 快捷键绑定约定，支持为任意命令配置键盘快捷键。
> [github.com/earendil-works/pi/pull/5281](https://github.com/earendil-works/pi/pull/5281)

---

## 5. 功能需求趋势

从今日全部 Issues 和 PRs 中，可提炼出社区最关注的五大方向：

| 方向 | 代表 Issue/PR | 热度 |
|------|--------------|------|
| **多模型/Provider 兼容** | #5117, #5229, #5011, #5271, PR #5221, #5284 | 🔥🔥🔥 |
| **TUI 渲染与交互稳定性** | #4945, #5129, #5213, PR #5310, #5235, #5296, #5295 | 🔥🔥🔥 |
| **会话生命周期管理** | #4877, #5263, #5273/5274, PR #5277 | 🔥🔥 |
| **SDK/嵌入端改进** | #5226, #5261, #5269 | 🔥 |
| **扩展系统与自定义能力** | PR #5302, #5281, PR #5306, #2999 | 🔥 |

**结论：** 模型生态兼容性（尤其是 OpenRouter 作为聚合层的 role 差异）是当前最紧迫的工程问题；TUI 作为 Pi 的核心交互层，渲染 bug 的修复节奏也很密集，说明团队正在集中精力打磨终端体验。

---

## 6. 开发者关注点

今日开发者反馈的高频痛点和需求汇总：

- **流式响应卡死无恢复**：`openai-codex`/`gpt-5.5` 的 "Working..." 假死是最高频投诉（50 评论），开发者迫切希望有自动重试或超时中断机制。
- **本地大模型超时问题**：在边缘设备或 CPU 上运行 Qwen 3.6 27B 等模型时，实际可用超时远低于配置值（#5089、#5294），用户体验极差。
- **OpenRouter role 不统一**：多个 Issue 和 PR 围绕 `developer` vs `system` role 的兼容问题展开，反映出 OpenRouter 作为 provider 聚合层时，各上游模型的请求 schema 差异对 Pi 适配带来很大挑战。
- **本地模型工具调用质量**：Qwen3.6-35B、DeepSeek 等本地模型在生成工具调用参数时容易出现 frontmatter 泄漏等问题（PR #5308），说明需要更强的参数清洗和校验层。
- **TUI 生态系统的细节打磨**：从 Kitty 图片渲染到 CJK 字符边界处理到 overlay 焦点管理，TUI 层的渲染 bug 集中爆发，说明跨终端适配仍是持续挑战。

---

*数据来源：github.com/badlogic/pi-mono | 日报生成时间：2026-06-02 | OWL 自动生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-02

---

## 1. 今日速览

过去 24 小时社区活跃度高，无新 Release，但 Issues 和 PRs 持续涌现。核心议题集中在 **本地 LLM 兼容性/任务完成能力不足**、**性能与内存泄漏**、**Vim 交互体验修复**以及**安全加固与遥测扩展**。多个 PR 在核心开发者层面推进，涵盖从资源截断到 CPU Profiling 的基础设施改进。

---

## 2. 版本发布

过去 24 小时无新 Release。（当前最新已知版本为 v0.17.0）

---

## 3. 社区热点 Issues

| # | Issue | 摘要 | 社区反应 | 重要性分析 |
|---|-------|------|----------|------------|
| 1 | [#3384](https://github.com/QwenLM/qwen-code/issues/3384) — Unable to add OpenAI-compatible local LLM | 用户通过 VLLM 部署 Qwen3.6-35B-A3B，使用 OpenAI 兼容模式无法正常连接，已持续 46 天。 | 11 条评论，1 👍 | **长期未解决的兼容性问题**，直接影响本地模型工作流，是社区最积压的需求之一。 |
| 2 | [#4657](https://github.com/QwenLM/qwen-code/issues/4657) — Ollama + Qwen 3.6 任务无法完成 | v0.17.0 使用 Ollama 后端时，复杂任务（如生成 HTML 电子书）失败或超时。 | 6 条评论 | 反映**升级后模型兼容性回退**，影响大量本地部署用户。 |
| 3 | [#4686](https://github.com/QwenLM/qwen-code/issues/4686) — Qwen3-Max 输出重复垃圾内容 | 在 Ghostty 终端下，Qwen3-Max + thinking 模式偶发无限重复输出循环。 | 1 条评论 | **核心输出稳定性 Bug**，影响高端模型用户体验。 |
| 4 | [#4624](https://github.com/QwenLM/qwen-code/issues/4624) — `--resume` 子进程内存持续增长 OOM | 已关闭。`qwen --resume` 后子进程内存随操作持续增长且不释放，最终崩溃。 | 2 条评论，2 👍 | **已关闭的内存管理缺陷**，说明团队正在处理会话持久化的资源问题。 |
| 5 | [#4420](https://github.com/QwenLM/qwen-code/issues/4420) — Windows UI 渲染异常导致 Token 翻倍 | v0.16.0 在 Windows 11 + Git Bash 下 UI 完全乱码，Token 消耗异常翻倍。 | 5 条评论 | **P1 级别 Windows 兼容性 Bug**，跨平台支持是社区高频诉求。 |
| 6 | [#4675](https://github.com/QwenLM/qwen-code/issues/4675) — Vim 模式 Esc 键泄漏 + Enter 不发送 | Vim INSERT 模式按 Esc 触发应用层清空逻辑，NORMAL 模式 Enter 无法提交输入。 | 1 条评论 | 影响重度 Vim 用户的核心交互体验，已有配套 PR 修复。 |
| 7 | [#4676](https://github.com/QwenLM/qwen-code/issues/4676) — Auto 模式分类器超时过于敏感 | AUTO 审批模式下，LLM 分类器超时应返回 `unavailable` 而非直接 `block`，当前行为导致合法操作被误拦截。 | 1 条评论，1 👍 | **安全与可用性平衡问题**，影响自动化工作流。 |
| 8 | [#4615](https://github.com/QwenLM/qwen-code/issues/4615) — 项目级 `.mcp.json` 支持 + 审批语义 | 请求支持项目级 MCP 服务器配置，并在连接前显示待审批状态。 | 2 条评论 | **MCP 生态扩展需求**，与 Claude Code 功能对齐。 |
| 9 | [#4641](https://github.com/QwenLM/qwen-code/issues/4641) — MCP 连接不稳定（Windows） | 配置 8 个 MCP Server 后，每次启动可用数量随机（3~5 个），无规律。 | 1 条评论 | **MCP 可靠性问题**，影响 Windows 用户的多工具集成体验。 |
| 10 | [#4663](https://github.com/QwenLM/qwen-code/issues/4663) — MiniMax-M3 模型支持 + UI 改进 | 请求在 MiniMax API Key 配置流程中添加 MiniMax-M3 选项，并将自由文本输入改为多选框 UI。 | 8 条评论 | **新模型支持 + 配置 UX 改进**，社区讨论活跃。 |

---

## 4. 重要 PR 进展

| # | PR | 作者 | 内容摘要 | 状态 |
|---|-----|------|----------|------|
| 1 | [#4677](https://github.com/QwenLM/qwen-code/pull/4677) | zzhenyao | **修复 Vim 模式三大问题**：Esc 键泄漏、Enter 提交失效、模式指示器渲染延迟，并补全缺失的 NORMAL 模式命令。 | OPEN |
| 2 | [#4629](https://github.com/QwenLM/qwen-code/pull/4629) | yiliang114 | **独立安装包自动更新**：支持从 OSS/GitHub 下载新版本、SHA256 校验、原子替换安装。 | OPEN |
| 3 | [#4524](https://github.com/QwenLM/qwen-code/pull/4524) | Jerry2003826 | **限制前台 Shell 输出内存占用**：对保留在内存中的 stdout/stderr 设置上限，截断时给出提示。 | OPEN |
| 4 | [#4572](https://github.com/QwenLM/qwen-code/pull/4572) | qqqys | **加固 Auto 模式自修改检查**：防止通过工作区编辑快速路径或宽泛权限规则绕过分类器，保护配置/指令/hooks/MCP 等持久化表面。 | OPEN |
| 5 | [#4654](https://github.com/QwenLM/qwen-code/pull/4654) | yiliang114 | **内存压力自动诊断转储**：检测到 hard/critical 内存压力时，自动将诊断 JSON 写入磁盘，便于 OOM 后分析。 | OPEN |
| 6 | [#4620](https://github.com/QwenLM/qwen-code/pull/4620) | yiliang114 | **CPU Profiling 支持**：生成 `.cpuprofile` 文件，支持环境变量/SIGUSR1 触发，可在 Chrome DevTools 中分析。 | OPEN |
| 7 | [#4649](https://github.com/QwenLM/qwen-code/pull/4649) | yiliang114 | **Shell 子进程注入上下文环境变量**：自动注入 `QWEN_CODE_SESSION_ID`、`QWEN_CODE_AGENT_ID`、`QWEN_CODE_PROMPT_ID`，覆盖所有 spawn 点。 | OPEN |
| 8 | [#4410](https://github.com/QwenLM/qwen-code/pull/4410) | doudouOUC | **遥测 Phase 3 — Subagent Span 隔离**：为每个 subagent 调用添加独立 span，避免并发子任务 span 交错。 | OPEN |
| 9 | [#4520](https://github.com/QwenLM/qwen-code/pull/4520) | Jerry2003826 | **工具输出截断下沉至 CoreToolScheduler**：将模型侧字符串工具输出截断从 Shell 工具提升到调度器层，统一边界。 | OPEN |
| 10 | [#4682](https://github.com/QwenLM/qwen-code/pull/4682) | doudouOUC | **扩展 Daemon 遥测路由覆盖**：为 recap/btw/model/shell/detach/approval-mode 等写路由添加 telemetry span，修复尾部斜杠匹配问题。 | OPEN |

---

## 5. 功能需求趋势

从过去 24 小时的 Issues 中，可提炼出以下 **5 大功能方向**：

### 🔌 本地 LLM 兼容性（最高频）
- OpenAI 兼容模式连接 VLLM/Ollama 的稳定性问题（#3384、#4657）
- 本地模型任务完成能力不足，复杂任务频繁失败
- **趋势**：社区对本地部署工作流的期望与实际体验差距最大

### ⚡ 性能与资源管理
- `--resume` 内存泄漏 OOM（#4424，已关闭）
- 前台 Shell 输出无界增长
- Auto 模式分类器超时策略过于保守（#4676）
- **趋势**：长会话稳定性是核心痛点，团队正在系统性修复

### 🎨 交互体验优化
- Vim 模式交互缺陷（#4675，已有 PR）
- Windows 终端 UI 渲染异常（#4420）
- 状态栏 ANSI 颜色和重复上下文指示器（#4669）
- **趋势**：终端 UI 的跨平台一致性和编辑器集成体验是差异化竞争点

### 🔧 MCP 生态扩展
- 项目级 `.mcp.json` 支持 + 审批语义（#4615）
- MCP 连接不稳定（#4641）
- **趋势**：MCP 服务器管理正在向 Claude Code 的成熟模式靠拢

### 🤖 新模型支持
- MiniMax-M3 模型集成（#4663）
- Qwen3-Max 输出异常（#4686）
- **趋势**：社区期望 Qwen Code 能快速适配新发布的模型

---

## 6. 开发者关注点总结

| 痛点 | 具体表现 | 优先级 |
|------|----------|--------|
| **本地模型工作流不可靠** | VLLM/Ollama 连接失败、任务无法完成、输出异常 | 🔴 高 |
| **内存管理缺陷** | `--resume` 内存泄漏、Shell 输出无界、压缩重试无限循环 | 🔴 高 |
| **Windows 兼容性差** | UI 乱码、Token 翻倍、MCP 不稳定 | 🟡 中 |
| **安全审批机制过严** | Auto 模式超时即拦截，影响自动化流程 | 🟡 中 |
| **MCP 配置体验落后** | 缺少项目级配置、无审批状态、连接不稳定 | 🟡 中 |
| **可观测性不足** | 缺少 CPU Profiling、内存诊断、遥测覆盖不全 | 🟢 改善中 |

> **总结**：当前社区最核心的矛盾是 **本地 LLM 工作流的可靠性** 与 **长会话资源管理**。团队正在通过多个 PR 系统性解决内存截断、输出限制、诊断转储等问题。MCP 生态和 Windows 兼容性是下一阶段需要重点投入的方向。

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 生成时间：2026-06-02*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*