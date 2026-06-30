# AI CLI 工具社区动态日报 2026-06-30

> 生成时间: 2026-06-30 00:38 UTC | 覆盖工具: 9 个

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

**2026-06-30 | 基于 GitHub 社区动态**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从功能竞赛转向稳定性攻坚**的关键阶段。各工具在基础代码生成能力趋于同质化后，竞争焦点已迁移至**长任务可靠性**（context compaction、子 Agent 稳定性）、**安全防护精准度**（沙箱逃逸、误报阻断）、以及**企业级管控**（多账号、权限策略、用量透明度）。同时，**跨平台覆盖**（Windows 体验补全、Linux 原生客户端、移动端 Web 接入）和**常驻服务化**（Daemon/Serve 模式、多渠道 Bot 集成）成为头部工具新的架构演进方向。社区对"开箱即用但不可靠"的容忍度显著下降，成熟用户更愿意为可观测性和可控性付费。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 最新版本 | 版本类型 | 活跃度评级 |
|------|:-----------:|:-------:|----------|----------|:----------:|
| **Qwen Code** | 30 | 50 | v0.19.3-nightly (构建失败) | Nightly | 🔥🔥🔥 |
| **Gemini CLI** | 50 | 24 | v0.51.0-nightly | Nightly | 🔥🔥🔥 |
| **OpenCode** | ~50 | ~10+ | 无新 Release | — | 🔥🔥🔥 |
| **Claude Code** | ~30 | 3 | v2.1.196 | 正式版 | 🔥🔥 |
| **OpenAI Codex** | ~50 | 10+ | rust-v0.143.0-alpha.31 | Alpha | 🔥🔥 |
| **Copilot CLI** | 28 | 0 | v1.0.66-2 | 预发布 | 🔥🔥 |
| **Pi** | 35 | 7 | 无新 Release | — | 🔥🔥 |
| **DeepSeek TUI** | ~20 | 10+ | v0.8.69 (活跃) | Bugfix | 🔥 |
| **Kimi Code CLI** | 1 | 0 | — | — | 💤 |

> **数据说明**：Issues/PR 数为过去 24 小时更新量，非累计未关闭数。活跃度综合考量更新频率与核心代码变更比例。

---

## 3. 共同关注的功能方向

### 3.1 🔒 安全防护与沙箱隔离（7/9 工具涉及）

| 工具 | 具体诉求 |
|------|----------|
| Claude Code | 安全过滤器误报（drone/telemetry 关键词误杀），需可配置白名单 |
| OpenAI Codex | Git 命令沙箱隔离、PowerShell 审批边界、WebSocket 认证加固 |
| Gemini CLI | 沙箱逃逸防护（写入 .gitconfig）、信任对话框信息准确性 |
| Copilot CLI | Windows MCP 启动安全、OAuth 端口冲突 |
| Qwen Code | CLI 安全模式（一键禁用自定义配置排查问题） |
| DeepSeek TUI | 持久化权限规则（tool/prefix/path → allow/deny/ask） |
| Pi | 提供商认证方式硬编码，新提供商适配需改核心代码 |

**核心矛盾**：安全机制从"有无"转向"精准度"——开发者需要的不是更严格的过滤，而是**可理解、可配置、可覆盖**的安全策略。

### 3.2 📊 用量透明度与成本控制（6/9 工具涉及）

| 工具 | 具体诉求 |
|------|----------|
| Claude Code | 71% 用量即限流、Opus 专属配额未在 UI 展示 |
| OpenAI Codex | Token 消耗异常快、限额不准（5h 限额 41 分钟耗尽） |
| Qwen Code | Anthropic prompt-cache miss 导致成本膨胀、可配置压缩模型 |
| DeepSeek TUI | 缓存命中率低（对比同类仅 ~60% vs 95%），半天消耗 4 亿 Token |
| OpenCode | 子代理成本统计不完整 |
| Pi | z.ai GLM 缓存失效导致 token 浪费 |

**核心矛盾**：AI CLI 的"黑盒计费"模式正在侵蚀用户信任，社区要求**实时、准确、可预测**的用量可见性。

### 3.3 🤖 子 Agent / 多 Agent 协作（5/9 工具涉及）

| 工具 | 具体诉求 |
|------|----------|
| Claude Code | Agent Teams tmux 启动崩溃、子 Agent 缺乏可观测性 |
| Gemini CLI | 子 Agent 达到 MAX_TURNS 后伪装成功、无限挂起 |
| OpenAI Codex | 多 Agent 模式 hint 文本可配置、tool-search 中毒 |
| Qwen Code | Subagent 结果泄漏内部标签污染上下文 |
| DeepSeek TUI | 10 子 Agent 并发锁竞争/通道阻塞 |

**核心矛盾**：多 Agent 协作仍处于"Demo 可用、生产不可靠"阶段，**状态可观测性**和**失败优雅降级**是最大短板。

### 3.4 🖥️ 跨平台体验与移动端接入（5/9 工具涉及）

| 工具 | 具体诉求 |
|------|----------|
| OpenAI Codex | Linux 原生客户端需求（658 👍）、Windows git.exe 僵尸进程 |
| Copilot CLI | Windows MCP .bat 启动回归、安装自毁、Git 符号链接 |
| Qwen Code | 移动端 Web Shell 抽屉交互、HTTPS/TLS 支持（语音输入需要） |
| Kimi Code CLI | 移动端 Enter 键无法换行 |
| DeepSeek TUI | 远程工作台与多平台桥接（Feishu/Telegram） |

**核心矛盾**：Windows 仍是各工具的"二等公民"，移动端接入从"锦上添花"变为"刚需"（尤其国内用户）。

### 3.5 🏗️ 常驻服务化与多渠道集成（4/9 工具涉及）

| 工具 | 具体诉求 |
|------|----------|
| Qwen Code | Daemon/Serve 模式、多渠道 Bot（钉钉/飞书/微信/Telegram） |
| Gemini CLI | Caretaker Agent 云端自动化运维（Cloud Run Webhook） |
| OpenAI Codex | 可定制状态栏、远程监控工具、后台事件触发 |
| DeepSeek TUI | 远程工作台桥接 |

**核心矛盾**：AI CLI 正从"交互式命令行工具"向"常驻 AI 服务网关"演进，架构复杂度显著上升。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 | 差异化优势 |
|------|----------|----------|----------|------------|
| **Claude Code** | 企业级 AI 编程助手 | 团队/企业用户 | 强沙箱 + 组织级管控 + Agent Teams | 组织默认模型、会话可读名称、Cowork 虚拟化 |
| **OpenAI Codex** | 安全优先的自动化 Agent | 企业/安全敏感场景 | Rust 实现 + 细粒度审批 + 安全工单驱动 | Git 命令隔离、PowerShell 审批边界、安全加固密度最高 |
| **Gemini CLI** | Google 生态集成开发 | Google Cloud 用户 | 云端运维自动化 + Auto Memory | Caretaker Agent、Cloud Run 原生集成、AST 感知代码理解 |
| **Copilot CLI** | GitHub 生态一站式 | GitHub 用户/企业 | 插件 MCP + LSP 集成 + 会话管理 | 插件同名 MCP 共存、LSP 日志查看、GitHub 附件变体 |
| **Qwen Code** | 全平台常驻 AI 服务 | 国内/国际化开发者 | Daemon/Serve + 多渠道 + 移动端 | 移动端 Web Shell、多渠道 Bot、HTTPS 支持、热重载 |
| **OpenCode** | 开源多模型聚合 | 模型爱好者/成本敏感 | V2 架构迁移 + MCP 生态深化 | 多模型 Provider、MCP Prompts/日志、插件 SDK 可观测性 |
| **Pi** | 多提供商轻量 CLI | 个人开发者/多提供商用户 | 提供商适配 + TUI 交互 | Bedrock/Anthropic/Ollama 多提供商、流式稳定性修复 |
| **DeepSeek TUI** | 高性能多 Agent TUI | 大工程/多 Agent 场景 | 子 Agent 并发 + 缓存优化 + 基准对标 | 子 Agent 并行派发、Codex 级 Prompt 瘦身、Hotbar UX |
| **Kimi Code CLI** | 移动端 AI 交互 | 移动端用户 | 移动端优先 | 移动端 Enter/换行优化（当前社区活动极低） |

---

## 5. 社区热度与成熟度

### 社区活跃度排名

| 排名 | 工具 | 活跃度 | 成熟度 | 阶段判断 |
|:----:|------|:------:|:------:|----------|
| 1 | **Gemini CLI** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 快速迭代期——P1 Bug 密集但修复响应快，Caretaker Agent 基础设施快速落地 |
| 2 | **Qwen Code** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 快速迭代期——PR 贡献者最多（pomelo-nwu 等），Daemon/Serve 架构快速推进 |
| 3 | **OpenCode** | ⭐⭐⭐⭐ | ⭐⭐⭐ | 架构迁移期——V2 客户端迁移、MCP 生态深化，rekram1-node 单人贡献突出 |
| 4 | **OpenAI Codex** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 安全加固期——安全 PR 密度最高，但核心功能迭代放缓 |
| 5 | **Claude Code** | ⭐⭐⭐ | ⭐⭐⭐⭐ | 企业适配期——PR 活跃度极低（仅 3 个文档 PR），但 Issue 热度高（多账号 616 👍） |
| 6 | **Copilot CLI** | ⭐⭐⭐ | ⭐⭐⭐⭐ | 体验打磨期——Windows 稳定性、TUI 渲染、会话管理精细化 |
| 7 | **Pi** | ⭐⭐⭐ | ⭐⭐ | 提供商扩展期——新提供商适配（Scaleway/Xiaomi）、流式稳定性修复 |
| 8 | **DeepSeek TUI** | ⭐⭐ | ⭐⭐⭐ | 性能优化期——缓存命中率、子 Agent 并发、Codex 基准对标 |
| 9 | **Kimi Code CLI** | 💤 | ⭐ | 社区冷清——仅 1 个 Issue，无 PR，移动端交互问题无回应 |

### 关键发现

- **Gemini CLI 和 Qwen Code** 是当前迭代最快的工具，PR 贡献者活跃，但 P1 Bug 密度也最高，说明**快速迭代牺牲了稳定性**。
- **Claude Code** 社区呼声高但 PR 活跃度极低，说明 Anthropic 对核心代码的**外部贡献接纳度较低**，社区需求（如多账号切换 616 👍）响应缓慢。
- **OpenAI Codex** 安全加固 PR 占比异常高（7/10+），说明团队正在**集中解决安全债务**，可能影响新功能交付速度。
- **Kimi Code CLI** 社区几乎无活动，可能处于**内部开发阶段**或社区运营不足。

---

## 6. 值得关注的趋势信号

### 趋势 1：安全从"有无"转向"精准可控"

**信号**：Claude Code 安全过滤器误报集中爆发、Codex 安全加固 PR 密度最高、Gemini CLI 沙箱逃逸修复。

**对开发者的启示**：选择 AI CLI 工具时，安全机制的**可配置性**比"默认严格"更重要。优先选择支持项目级/会话级安全策略覆盖的工具，避免"合法开发被阻断"的生产力损失。

### 趋势 2：长任务可靠性成为核心竞争壁垒

**信号**：Codex context compaction 丢失任务状态（#5957，32 评论）、Gemini CLI 子 Agent 无限挂起（#21409，8 👍）、Claude Code Agent Teams 崩溃。

**对开发者的启示**：对于超过 10 轮交互的长任务，当前所有工具的可靠性都存在风险。建议选择支持**手动检查点保存**和**子 Agent 状态可观测**的工具，并关注各工具在 context compaction 策略上的差异化（如是否保留最近 N 步原文）。

### 趋势 3：Windows 体验正在成为"木桶短板"

**信号**：Codex Windows git.exe 僵尸进程、Copilot CLI 5 条 Windows 相关 bug、Qwen Code Windows TUI 滚动异常。

**对开发者的启示**：如果你是 Windows 开发者，**优先选择 Codex（Rust 实现，跨平台一致性较好）或 Qwen Code（Windows 修复响应较快）**，避免在 Claude Code/Copilot CLI 上遭遇 Windows 特有的边缘问题。

### 趋势 4：AI CLI 从"工具"走向"平台"

**信号**：Qwen Code Daemon/Serve + 多渠道 Bot、Gemini CLI Caretaker Agent 云端运维、OpenCode 插件 SDK 可观测性钩子、Copilot CLI 企业集中管控。

**对开发者的启示**：如果你需要将 AI 能力集成到现有工作流（CI/CD、IM 渠道、企业管控），**优先选择具备"平台化"架构的工具**（Qwen Code、Gemini CLI），而非纯交互式 CLI。

### 趋势 5：成本透明度正在影响工具选择

**信号**：DeepSeek TUI 缓存命中率低（24 👍）、Codex token 消耗异常（276 👍）、Claude Code 71% 用量即限流、Qwen Code prompt-cache miss 成本膨胀。

**对开发者的启示**：在选型时，**要求工具提供实时、准确的用量 API 或仪表盘**，避免"黑盒计费"导致的预算失控。对于高频使用场景，缓存命中率的差异可能带来 2-5 倍的成本差距。

---

## 附录：各工具今日关键 Issue 速查

| 工具 | 最高热度 Issue | 👍 | 核心问题 |
|------|---------------|:--:|----------|
| Claude Code | #18435 多账号切换 | 616 | 团队/个人场景切换不便 |
| OpenAI Codex | #11023 Linux 客户端 | 658 | Linux 原生客户端缺失 |
| Gemini CLI | #21409 Agent 无限挂起 | 8 | 子 Agent 稳定性 |
| Copilot CLI | #3958 Windows MCP 启动 | — | Windows 平台回归 |
| Qwen Code | #5975 流式中断 | 1 | v0.19.3 体验退化 |
| OpenCode | #30680 自动压缩循环卡死 | 0 | 新空文件夹启动即卡死 |
| Pi | #5825 流式滚动强制 | 0 | 用户无法向上阅读 |
| DeepSeek TUI | #1177 缓存命中率低 | 24 | 对比同类仅 ~60% vs 95% |
| Kimi Code CLI | #2479 移动端 Enter 换行 | 0 | 移动端无法输入多行 |

---

*报告生成时间：2026-06-30 | 数据来源：各工具 GitHub 仓库 Issues/PRs/Release 页面*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-06-30）

---

## 一、热门 Skills 排行（PR）

| # | Skill/修复 | 作者 | 状态 | 核心功能与讨论热点 |
|---|-----------|------|------|-------------------|
| 1 | **[skill-creator 修复系列](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | OPEN | 修复 `run_eval.py` 在 Windows 上的流读取、触发检测和并行处理问题（10+ 复现）。该 bug 导致 skill 优化循环对噪声信号进行优化，直接影响所有 skill 的 description 调优。关联 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 条评论）。 |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | OPEN | AI 生成文档的排版质量控制：修复孤行词（orphan words）、孤段标题（widow paragraphs）和编号错位。影响 Cluade 每日生成的所有文档。 |
| 3 | **[PowerShell / Windows 兼容性](https://github.com/anthropics/skills/pull/1050)** | gstreet-ops | OPEN | 修复 `skill-creator` 脚本在 Windows 上的 subprocess `PATHEXT` 和编码问题。1 行改动，但解决了 Windows 用户完全无法运行优化循环的痛点。 |
| 4 | **[self-audit 自审技能](https://github.com/anthropics/skills/pull/1367)** | YuhaoLin2005 | OPEN | 交付前的四维度推理质量门禁：完整性、一致性、接地性、风险性。适用任意项目/技术栈/模型。最近提交（06-28），方向前沿。 |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 4444J99 | OPEN | 全面测试技能栈——测试金字塔模型、单元测试 AAA 模式、React 组件测试（Testing Library）等。 |
| 6 | **[self-audit 自审技能](https://github.com/anthropics/skills/pull/1367)** | YuhaoLin2005 | OPEN | 交付前的四维度质量关卡（完整/一致/接地/风险），适用任意项目和模型。最新提交（06-28），方向前沿。 |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | p19dixon | OPEN | 孤儿代码检测、未用文件清理、文档缺口识别、基础设施膨胀审计的 10 步工作流。 |
| 8 | **[shodh-memory 持久记忆](https://github.com/anthropics/skills/pull/154)** | varun29ankuS | OPEN | Agent 跨会话上下文持久化——指导 Claude 何时调用 `proactive_context`，如何结构化记忆内容。 |

> 注：前 20 个 PR 中约 **40%** 集中在 `skill-creator` 工具链修复（Windows 兼容、编码、YAML 解析、eval 逻辑），反映开发者体验是当下最大瓶颈。

---

## 二、社区需求趋势（基于 Issues）

| 方向 | 代表 Issue | 信号 |
|------|-----------|------|
| **🔒 信任与安全** | [#492](https://github.com/anthropics/skills/issues/492) — 32 条评论：社区 skills 冒充 `anthropic/` 命名空间，存在信任边界滥用风险 | 社区对官方/社区 skill 的分发机制提出严肃质疑 |
| **🏢 企业协作** | [#228](https://github.com/anthropics/skills/issues/228) — 14 条评论、7 个 👍：组织内 skill 共享应原生支持，而非手动传文件 | Team/Enterprise 场景的刚需 |
| ** Windows 兼容** | [#1061](https://github.com/anthropics/skills/issues/1061)、[#556](https://github.com/anthropics/skills/issues/556) — 优化循环在 Windows 完全不可用 | 非 Windows-first 社区的快速增长 |
| ** Agent 可靠性** | [#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance） | Agent 自管理、记忆压缩、治理模式是高频诉求 |
| ** 生态互操作** | [#16](https://github.com/anthropics/skills/issues/16) — "将 Skills 暴露为 MCP"、[#29](https://github.com/anthropics/skills/issues/29) — Bedrock 兼容 | Skills 被期望成为通用 AI 能力协议层 |
| ** 插件拆分** | [#189](https://github.com/anthropics/skills/issues/189) — document-skills 与 example-skills 内容重复 | 安装体验需要精简 |

---

## 三、高潜力待合并 Skills（评论活跃 / 近期未合并）

| PR | 为什么值得优先合并 |
|----|-----------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298) — skill-creator Windows/eval 修复** | 阻塞性 bug。影响整个 skill 调优链路，关联 10+ 复现报告，涉及 Windows 用户、触发检测和并行 worker 三重修复。 |
| **[#1050](https://github.com/anthropics/skills/pull/1050) — Windows subprocess 兼容** | 1 行改动，收益极大。直接解锁 Windows 开发者使用 `run_loop.py`。 |
| **[#1367](https://github.com/anthropics/skills/pull/1367) — self-audit 四维质量门** | 通用性高、技术栈无关、模型无关。最新提交（06-28），方向与 Agent 可靠性社区热点高度契合。 |
| **[#514](https://github.com/anthropics/skills/pull/514) — document-typography** | 高频刚需。每个生成文档的排版问题都有影响，实现方案已在 PR 中给出。 |
| **[#723](https://github.com/anthropics/skills/pull/723) — testing-patterns** | 测试是 AI 辅助开发的关键场景，Testing Trophy 理念和 React Testing Library 覆盖全面。 |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：修复 skill 创建与调优工具链的可靠性瓶颈（尤其是 Windows 兼容性），并借助可共享、可审计的 meta-skills（安全、记忆、质量门）让 Agent 从"能执行"走向"可信赖"——开发者体验与 Agent 可靠性构成当下 Skills 生态的双主线。**

---

# Claude Code 社区动态日报 | 2026-06-30

---

## 1. 今日速览

Claude Code 发布 **v2.1.196**，新增组织级默认模型管理和会话可读名称功能。社区方面，**多账号切换**需求持续发酵（#18435，616 赞），**安全过滤器误报**问题集中爆发——多位开发者报告无人机遥测、视频处理等合法开发场景被 cyber 安全过滤器阻断。此外，**沙箱模式内存溢出**和 **Agent Teams 启动崩溃**两个严重 bug 引发广泛关注。

---

## 2. 版本发布

### v2.1.196

- **组织默认模型**：管理员可在组织控制台设置默认模型，未手动选择时 `/model` 中显示"Org default"或"Role default"
- **会话可读名称**：启动时为会话生成更可读的名称，便于识别和消息路由

> 完整更新日志被截断，以上为已披露内容。

---

## 3. 社区热点 Issues

| # | Issue | 👍 | 关注理由 |
|---|-------|-----|----------|
| 1 | **[#18435] 多账号切换** | 616 | 呼声最高的功能请求。Claude Desktop 无法管理多个账号，团队/个人场景切换极不便。122 条评论，社区持续施压。 |
| 2 | **[#3433] GitHub 远程 MCP OAuth 认证失败** | 138 | Linux 平台长期 bug，影响 GitHub MCP 服务器集成。57 条评论，至今未修复。 |
| 3 | **[#38993] Cowork virtiofs FUSE 挂载文件截断/过期** | 25 | Windows 上 host 文件变更不反映到 VM，Cowork 功能基本不可用。 |
| 4 | **[#23030] 会话用量 71% 即触发限流** | 13 | Max 计划用户遭遇"未超限却被限流"问题，涉及计费透明度。 |
| 5 | **[#72367] 沙箱模式递归遍历 node_modules → OOM** | 0 | 严重性能 bug。沙箱首次对话时无限递归遍历依赖目录，导致内核 OOM-kill。关联旧 issue #27863 曾被自动关闭为 stale。 |
| 6 | **[#72343] Agent Teams tmux 启动崩溃** | 0 | v2.1.195 回归 bug。`teammateMode: "tmux"` 下子 agent 因非 TTY stdin 直接崩溃，Pane is dead。 |
| 7 | **[#72256] 安全审查子 agent 误报** | 0 | 自定义安全审查子 agent 被 API safeguards 误判为恶意，合法代码审查被阻断。 |
| 8 | **[#72373 / #72357 / #72358] 无人机遥测/视频开发被 cyber 过滤器阻断** | 0 | 同一开发者连续提交 3 个 false positive 报告，涉及无人机 UI、视频宽高比调整等合法开发场景。安全过滤器对"drone"关键词过于敏感。 |
| 9 | **[#64061] VS Code 扩展忽略沙箱 settings.json** | 3 | IDE 集成中沙箱配置不生效，approval-fatigue 修复方案在 IDE 中不可达。 |
| 10 | **[#72372] Opus 专属限流未反映在用量仪表盘中** | 0 | Pro 计划 Opus 用户遭遇"仪表盘显示充足但实际被限流"的误导性 UX。 |

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **3 个 PR** 更新，均为文档/示例类：

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| 1 | **[#72361] Claude Gateway on GCP 部署资产** | ✅ 已合并 | 为 GCP 上的 Claude Gateway 提供 Terraform 参考部署文件，配合官方 walkthrough 文档。 |
| 2 | **[#72363] Gateway GCP 示例：Agent Platform 品牌更新** | ✅ 已合并 | 将 Vertex AI 引用统一更名为 Agent Platform，保留"(formerly Vertex AI)"以兼容搜索。 |
| 3 | **[#72264] docs(hooks): 补充 Bash tool_input 字段说明** | 🔄 开放中 | 在 `bash_command_validator_example.py` 中添加注释，说明 `PreToolUse` Bash payload 还包含 `run_in_background`/`description`/`timeout` 字段。 |

> ⚠️ 当前 PR 活跃度极低，过去 24 小时无核心功能或 bugfix PR 更新。

---

## 5. 功能需求趋势

从今日 Issues 中提炼出社区最关注的 **5 大方向**：

| 方向 | 代表 Issue | 趋势说明 |
|------|-----------|----------|
| **🔐 多账号/多租户管理** | #18435 (616👍) | 绝对热点。团队开发、个人/工作切换场景刚需，长期未解决。 |
| **🛡️ 安全过滤器精准度** | #72373, #72357, #72358, #72256 | cyber 过滤器 false positive 集中爆发，drone/telemetry/ffmpeg 等合法开发场景被误杀，开发者呼吁可配置白名单。 |
| **🏗️ 沙箱稳定性与性能** | #72367, #68587, #64061 | 沙箱模式存在 OOM、启动慢、IDE 不生效等多重问题，是高级用户的核心痛点。 |
| **🤖 Agent Teams 可靠性** | #72343, #71644, #72287 | 子 agent 启动崩溃、空闲无响应、缺乏可观测性——多 agent 协作功能尚不成熟。 |
| **📊 用量/限流透明度** | #23030, #72372 | 限流规则不透明，Opus 专属配额未在 UI 展示，用户无法预判何时被限。 |

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **安全过滤器误报阻断正常工作流**
   多位开发者报告无人机遥测、视频处理、安全代码审查等合法场景被 cyber 过滤器标记为 `session-halted`。开发者呼吁提供**项目级或会话级安全策略覆盖**机制。

2. **沙箱模式在大项目中不可用**
   `sandbox.enabled: true` 导致启动时同步递归遍历整个工作区（包括 `node_modules`），大项目直接 OOM。关联 issue #27863 曾被自动关闭，问题持续存在。

3. **Agent Teams 功能不稳定**
   v2.1.195 中 `teammateMode: "tmux"` 因子 agent 收到非 TTY stdin 而崩溃。同时缺乏子 agent 的实时可观测性（模型、effort 不可见）。

4. **IDE 集成体验差距**
   VS Code 扩展中沙箱设置被忽略（#64061），Windows Desktop 应用中 `defaultShell: "bash"` 不生效（#72389）——IDE 与 CLI 行为不一致。

5. **限流/用量信息不透明**
   Opus 专属限流、71% 用量即被限流等问题表明，当前用量仪表盘无法反映真实的配额消耗情况。

### 💡 建议关注

- **#18435 多账号切换**：616 赞的社区呼声，一旦实现将显著降低团队采用门槛
- **#72367 沙箱 OOM**：如使用沙箱模式，建议暂时关闭或关注后续修复
- **#72343 Agent Teams 崩溃**：使用 `teammateMode: "tmux"` 的用户建议暂缓升级到 2.1.195

---

*数据来源：github.com/anthropics/claude-code | 生成时间：2026-06-30*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**2026-06-30 · 数据截至 2026-06-30 UTC**

---

## 1. 今日速览

本周 Codex 社区的核心主题是**安全加固**与**Windows 稳定性**。团队在 Git 命令沙箱隔离、PowerShell 审批边界、WebSocket 认证等方面集中提交了 7+ 个安全相关 PR；同时社区侧关于 Windows 桌面端 git.exe 僵尸进程、线程切换卡顿、空 .git 文件夹等问题的讨论持续升温。此外，**token 消耗异常**和**context compaction 丢失任务状态**两大老问题依然高居 Issue 热度榜首。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| `rust-v0.142.4` | 补丁 | 无用户可见变更，内部 Chores |
| `rust-v0.143.0-alpha.31` | 预发 | 最新 alpha 迭代 |

> 两个 release 均无重大功能更新，以内部维护为主。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #14593 — Token 消耗速度异常快
- **👍 276 · 💬 626 评论**
- 用户报告 Business 计划下 token 消耗远超预期，疑似计量或速率计算 bug。
- 社区讨论已持续近 4 个月，是目前评论量最高的 Issue。
- 🔗 [openai/codex#14593](https://github.com/openai/codex/issues/14593)

### 🔥 #11023 — Linux 桌面端需求
- **👍 658 · 💬 132 评论**
- 社区呼声最高的功能请求之一。用户因 macOS 端电源/性能问题希望获得 Linux 原生客户端。
- 👍 数全场第二，反映 Linux 开发者群体的强烈需求。
- 🔗 [openai/codex#11023](https://github.com/openai/codex/issues/11023)

### 🔥 #28224 — SQLite 反馈日志每年可写 640 TB
- **👍 407 · 💬 107 评论**
- 用户发现 Codex CLI 的 feedback log 写入量极端庞大，严重影响 SSD 寿命。
- **已修复**：3 个 PR 在 0.142.0 中合并，可减少 85% 日志量。
- 🔗 [openai/codex#28224](https://github.com/openai/codex/issues/28224)

### 📌 #25749 — 旧手机号验证阻塞登录
- **👍 43 · 💬 65 评论**
- 用户通过 Google OAuth + MFA 登录 ChatGPT 正常，但 Codex 要求验证已失效的旧手机号，且无更换路径。
- 反映账户恢复流程的 UX 缺陷。
- 🔗 [openai/codex#25749](https://github.com/openai/codex/issues/25749)

### 📌 #30224 — 自定义模型 + Lite 端点报错
- **👍 20 · 💬 57 评论**
- 使用 `X-OpenAI-Internal-Codex-Responses-Lite` 时返回 "This model is not supported"。
- 影响自定义模型 + Lite 端点配置的 Plus 用户。
- 🔗 [openai/codex#30224](https://github.com/openai/codex/issues/30224)

### 📌 #5957 — Auto compaction 导致 GPT-5-Codex 丢失任务上下文
- **👍 9 · 💬 32 评论**
- 自动压缩后模型"忘记"正在进行的任务、已编辑的文件，停止工作。
- 长任务可靠性的核心痛点，影响 Enterprise 用户。
- 🔗 [openai/codex#5957](https://github.com/openai/codex/issues/5957)

### 📌 #30002 — Pro 计划 5h 限额 41 分钟耗尽
- **👍 6 · 💬 29 评论**
- 限额重置后约 1.35M token 即触发 `usage_limit_reached`，而此前 156M token 才触发。
- 疑似服务端配额计量逻辑 bug。
- 🔗 [openai/codex#30002](https://github.com/openai/codex/issues/30002)

### 📌 #17827 — 可定制状态栏
- **👍 78 · 💬 20 评论**
- 请求对标 Claude Code 的 customizable status line，显示 token 用量、模型、速率限制、Git 分支等。
- 高 👍 数表明 CLI 用户对终端 UI 信息密度的需求。
- 🔗 [openai/codex#17827](https://github.com/openai/codex/issues/17827)

### 📌 #29356 — Context compaction 丢失最近操作步骤
- **👍 0 · 💬 14 评论**
- 长任务中自动压缩后任务进度从 97% 回退到 42%。
- 与 #5957 属于同一根因，建议保留最近 5 步操作原文。
- 🔗 [openai/codex#29356](https://github.com/openai/codex/issues/29356)

### 📌 #25744 — macOS 子进程泄漏导致 HID 卡顿
- **👍 3 · 💬 10 评论**
- 长时间运行的 Codex 会话积累大量 Computer Use / MCP 僵尸子进程，影响 WindowServer 响应。
- macOS 平台稳定性和资源管理的关键问题。
- 🔗 [openai/codex#25744](https://github.com/openai/codex/issues/25744)

---

## 4. 重要 PR 进展（Top 10）

### 🔒 安全加固系列

| PR | 作者 | 内容 |
|----|------|------|
| [#27914](https://github.com/openai/codex/pull/27914) | evawong-oai | Git worktree helpers 执行失败时 fail-closed，防止仓库过滤器/合并驱动被意外执行 (PSEC-4394) |
| [#28714](https://github.com/openai/codex/pull/28714) | evawong-oai | 要求所有通用 Git 命令需审批，修复 argv-only "read-only" 分类不够安全的问题 (PSECOP-111) |
| [#29470](https://github.com/openai/codex/pull/29470) | bookholt-oai | 拒绝本地 Git 操作的隐式网络传输，防止 partial clone 场景下意外跨网络获取对象 |
| [#28761](https://github.com/openai/codex/pull/28761) | bookholt-oai | 默认分支发现仅使用本地 refs，避免 `git remote show` 触发仓库选择的 SSH 传输 (PSEC-4398) |
| [#28760](https://github.com/openai/codex/pull/28760) | bookholt-oai | 隔离 marketplace Git 传输配置，防止 `git ls-remote` 继承不受信仓库的 `url.*.insteadOf` (PSEC-4398) |
| [#30631](https://github.com/openai/codex/pull/30631) | bookholt-oai | 加固 fake shell 审批边界，防止嵌套 shell 继承内部命令的信任级别 |
| [#30628](https://github.com/openai/codex/pull/30628) | bookholt-oai | Windows 上仅信任系统级 PowerShell 解析器，防止仓库控制的 `pwsh.exe` 绕过审批和沙箱 |

### ⚡ 性能与架构

| PR | 作者 | 内容 |
|----|------|------|
| [#30632](https://github.com/openai/codex/pull/30632) | apanasenko-oai | 远程首 Token 延迟追踪与优化，传播 W3C trace context，消除多处不必要的等待 |
| [#30618](https://github.com/openai/codex/pull/30618) | apanasenko-oai | 防止 tool-search rollout 中毒——修复畸形 `tool_search_call.arguments` 导致会话永久不可用的问题 |
| [#30627](https://github.com/openai/codex/pull/30627) | cconger | 将 Elicitation 移至共享的 ElicitationService，修复 code-mode 工具结果在 MCP elicitation 等待期间返回给模型的竞态 |
| [#30621](https://github.com/openai/codex/pull/30621) | rphilizaire-openai | 追踪启动阶段 WebSocket prewarm，保留跨 Tokio task 的 trace context |
| [#30315](https://github.com/openai/codex/pull/30315) | mikhail-oai | 为 app-server WebSocket 添加 256-bit token 认证，增强远程连接安全性 |

### 🔧 其他

| PR | 作者 | 内容 |
|----|------|------|
| [#30604](https://github.com/openai/codex/pull/30604) | ssetty-oai | 目标续传前应用当前权限上下文，修复审批策略/沙箱策略在 thread goal 恢复时可能不一致的问题 |
| [#30493](https://github.com/openai/codex/pull/30493) | shijie-oai | 为 multi-agent 模式添加可配置的 hint 文本，支持覆盖基于 reasoning effort 的默认委托策略 |
| [#30467](https://github.com/openai/codex/pull/30467) | shijie-oai | 将 `max` 视为一等推理 effort，修复 Bedrock GPT-5.6 目录中显示为小写而非产品化标签的问题 |

---

## 5. 功能需求趋势

基于本周 50 个活跃 Issue 的分类统计：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **Context Compaction 可靠性** | #5957, #29356, #25792 | 🔴 高 — 长任务频繁丢失进度，多个高评论 Issue |
| **Windows 桌面端稳定性** | #29492, #29187, #29408, #20570, #21863 | 🔴 高 — 空 .git 文件夹、git.exe 僵尸进程、线程切换慢、沙箱 runner 错误 |
| **Token 计量与速率限制** | #14593, #30002, #30575, #30577 | 🔴 高 — 消耗异常快、限额不准、模型容量误报 |
| **Linux 原生客户端** | #11023 | 🟡 中 — 658 👍，社区持续呼吁 |
| **CLI/TUI 增强** | #17827, #27565, #29922 | 🟡 中 — 可定制状态栏、远程控制、后台事件监控工具 |
| **自定义模型 / 多端点支持** | #30224, #28742, #30132 | 🟡 中 — Lite 端点、Bedrock 区域、Azure OpenAI 兼容性 |
| **账户与认证恢复** | #25749 | 🟡 中 — 旧手机号验证死胡同 |
| **macOS 资源管理** | #25744 | 🟡 中 — 子进程泄漏、WindowServer 卡顿 |

---

## 6. 开发者关注点总结

1. **长任务可靠性是最大痛点**：Context compaction 导致任务进度回退、模型"失忆"的问题反复出现，严重影响自动化工作流的可信度。社区期待更保守的压缩策略或原文保留机制。

2. **Windows 平台体验亟待改善**：从 git.exe 僵尸进程、空 .git 文件夹创建、线程切换卡顿到沙箱权限错误，Windows 桌面端在稳定性和资源管理上落后于 macOS/Linux。

3. **Token 计量透明度存疑**：多个 Issue 反映实际消耗与显示限额不匹配，开发者需要更精确的用量监控和预警。

4. **安全加固正在快速推进**：团队本周在 Git 命令隔离、PowerShell 审批、WebSocket 认证等方向密集提交 PR，方向正确且响应迅速（多个 PR 引用了 PSEC 安全工单）。

5. **跨平台覆盖存在缺口**：Linux 客户端需求持续高涨（658 👍），但目前无官方路线图回应。

6. **开发者工具对标需求**：可定制状态栏（对标 Claude Code）、远程监控工具、后台事件触发等请求表明用户希望 Codex CLI 具备更强的"常驻"能力。

---

> 📊 本期关键词：**安全加固** · **Windows 稳定性** · **Context Compaction** · **Token 计量**
> 下次日报：2026-07-01

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-06-29

---

## 1. 今日速览

今日社区活跃度较高，共更新 50 条 Issues 和 24 条 PRs。**核心焦点集中在 Agent 稳定性与安全防护**：多个 P1 级 Bug 涉及子代理无限循环、会话挂起和沙箱逃逸问题；同时，安全团队密集合并了多项文件写入权限收紧和信任对话框修复。此外，**Caretaker Agent（云端自动化运维）** 基础设施持续落地，Cloud Run Webhook 和 Triage Worker 两大核心模块正在并行推进。

---

## 2. 版本发布

### v0.51.0-nightly.20260629.gae0a3aa7b

- **发布时间**：2026-06-29
- **类型**：Nightly 自动构建版本
- **变更日志**：[对比 v0.51.0-nightly.20260628 → v0.51.0-nightly.20260629](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b)
- **说明**：该版本为自动化 nightly 构建，包含当日合并的所有 PR 变更。

---

## 3. 社区热点 Issues

以下按优先级和讨论热度选取 10 个最值得关注的 Issue：

| # | Issue | 优先级 | 👍 | 核心问题 |
|---|-------|--------|-----|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 后仍报告 GOAL 成功 | P1 | 2 | 子代理在达到最大轮次限制后未正确标记为中断，而是伪装成"目标达成"，导致用户误以为任务完成。**8 条评论**，社区讨论活跃。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 无限挂起 | P1 | 8 | 调用 generalist 子代理时永久卡住，简单操作（如创建文件夹）也无法完成。**获得 8 个点赞**，是用户反馈最强烈的稳定性问题之一。 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行后卡在"等待输入"状态 | P1 | 3 | 命令已执行完毕但 CLI 仍显示"等待用户输入"，属于核心执行引擎的严重 Bug。 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级鲁棒性评估（EPIC） | P1 | 0 | 跟踪 76 个行为评估测试的覆盖范围和质量改进，是 Agent 可靠性的长期工程方向。 |
| 5 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏与日志缩减 | P2 | 0 | Auto Memory 在将内容发送给提取 Agent 之前未脱敏，存在敏感信息泄露风险。 |
| 6 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | P2 | 0 | 提取 Agent 判定为低信号的会话会反复被重新处理，浪费 API 配额。 |
| 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动使用 Skills 和子代理 | P2 | 0 | 用户反馈 Agent 不会自动调用已定义的自定义技能（如 gradle、git），需要显式指令。 |
| 8 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取与代码库映射评估（EPIC） | P2 | 1 | 探索使用 AST 工具精确读取方法边界，减少 token 消耗和读取错位。 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数量超过 128 个时触发 400 错误 | P2 | 0 | 当可用工具过多时 API 报错，需要更智能的工具范围限制策略。 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应阻止破坏性操作（如 git reset --force） | P2 | 1 | Agent 在复杂 git 操作中可能使用危险命令，需要安全约束机制。 |

---

## 4. 重要 PR 进展

以下按影响范围和重要性选取 10 个关键 PR：

### 🔴 已合并（今日关闭）

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 1 | [#28215](https://github.com/google-gemini/gemini-cli/pull/28215) | **安全修复** | 收紧文件写入权限，阻止沙箱/自动接受模式下向 `.gemini` 和 `.gitconfig` 写入，防止 prompt injection 导致沙箱逃逸 |
| 2 | [#27915](https://github.com/google-gemini/gemini-cli/pull/27915) | **安全修复** | 修复信任对话框显示反向 hook 形状的问题——实际执行的 hook 与对话框展示不一致，可能导致用户误授权 |
| 3 | [#28202](https://github.com/google-gemini/gemini-cli/pull/28202) | Bug 修复 | 修复 relaunch 时 SIGINT/SIGTERM 信号未转发到子进程的问题，避免 Ctrl+C 后子进程成为孤儿进程 |
| 4 | [#28200](https://github.com/google-gemini/gemini-cli/pull/28200) | Bug 修复 | 清理认证错误消息中 URL 尾部多余句号，修复终端超链接检测失败 |
| 5 | [#28201](https://github.com/google-gemini/gemini-cli/pull/28201) | Bug 修复 | 移除 VS Code 扩展中 disposables 的双重包装，修复订阅泄漏 |
| 6 | [#27910](https://github.com/google-gemini/gemini-cli/pull/27910) | **P1 修复** | 为 Web 搜索工具增加 120 秒本地超时，防止 Agent 无限等待搜索响应 |
| 7 | [#27916](https://github.com/google-gemini/gemini-cli/pull/27916) | Bug 修复 | 验证 GCP 项目 ID 格式，防止 Auto Memory 存储无效显示名称导致后续 403 错误 |

### 🟡 待审核（Open）

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 8 | [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) | **核心修复** | 限制单次用户请求的递归推理轮次上限（默认 15 轮），防止无限循环消耗 CPU 和 API 配额 |
| 9 | [#28053](https://github.com/google-gemini/gemini-cli/pull/28053) | **核心修复** | 修复文件系统工具在处理 `@` 前缀路径时的防御性路径解析，解决生产环境"文件未找到"错误 |
| 10 | [#28015](https://github.com/google-gemini/gemini-cli/pull/28015) | **新功能** | 实现 Caretaker Agent 的 Cloud Run Webhook 接收服务——验证 GitHub webhook 签名、Firestore 事务存储、Pub/Sub 消息发布 |

---

## 5. 功能需求趋势

从当前 Issues 分布来看，社区关注的功能方向可归纳为以下五大趋势：

### ① Agent 可靠性与可观测性（最高频）
- 子代理状态报告准确性（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）
- 子代理轨迹可视化与共享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）
- Bug 报告应包含子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）
- 组件级行为评估体系建设（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)）

### ② 安全防护与权限控制
- 沙箱逃逸防护（[#28215](https://github.com/google-gemini/gemini-cli/pull/28215)）
- 信任对话框信息准确性（[#27915](https://github.com/google-gemini/gemini-cli/pull/27915)）
- 破坏性操作拦截（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）
- Auto Memory 敏感信息脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）

### ③ 智能记忆系统优化
- Auto Memory 重试策略优化（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）
- 无效记忆补丁隔离（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）
- GCP 项目 ID 验证（[#27916](https://github.com/google-gemini/gemini-cli/pull/27916)）

### ④ 代码理解能力增强
- AST 感知的文件读取与搜索（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）
- 工具数量智能裁剪（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）

### ⑤ 自动化运维基础设施（Caretaker Agent）
- Cloud Run Webhook 接收服务（[#28015](https://github.com/google-gemini/gemini-cli/pull/28015)）
- Triage Worker 核心模块（[#28163](https://github.com/google-gemini/gemini-cli/pull/28163)）

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **Agent 挂起/无限循环** — 多个 P1 Issue 反映 Agent 在执行简单操作时卡住（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)），是当前用户反馈最强烈的可用性问题。

2. **子代理行为不透明** — 用户无法查看子代理的执行轨迹和上下文，调试困难（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）。

3. **安全边界模糊** — 沙箱模式下 Agent 可写入配置文件（[#28215](https://github.com/google-gemini/gemini-cli/pull/28215)）、信任对话框信息不准确（[#27915](https://github.com/google-gemini/gemini-cli/pull/27915)），安全团队正在密集修复。

### 🟡 体验改进需求

4. **Skills/子代理自动调用** — Agent 不会主动使用已定义的自定义技能，需要显式指令（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）。

5. **终端交互问题** — Shell 命令执行后状态卡住、外部编辑器退出后屏幕损坏（[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)）、终端 resize 闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）。

6. **会话管理** — 磁盘满时恢复的会话无法加载（[#27904](https://github.com/google-gemini/gemini-cli/pull/27904)、[#27905](https://github.com/google-gemini/gemini-cli/pull/27905)）、未保存的会话仍提示恢复（[#27914](https://github.com/google-gemini/gemini-cli/pull/27914)）。

---

> **日报说明**：以上数据基于 2026-06-29 24 小时内 GitHub Issues 和 PRs 的更新记录。标注 🔒 的 Issue 为 maintainer-only 可见，摘要信息来自公开元数据。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-06-29（周日）** | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

本日发布 **Copilot CLI v1.0.66-2**，重点解决插件 MCP 同名冲突、Windows 平台多项回归等关键问题。过去 24 小时社区活跃度较高，共 28 条 Issue 更新，用户反馈集中在 Windows 兼容性（3 条 MCP/安装相关 bug）、终端渲染异常（ghost 字符、历史滚动）、以及会话管理功能增强（过期时间显示、自定义标签）。当前无新增 PR。

---

## 2. 版本发布

### v1.0.66-2（预发布版）

**新增功能：**

- **插件 MCP 同名共存**：允许不同插件下注册的 MCP server 同名共存（此前后者会覆盖前者），直接回应了 Issue #3893 的反馈。[Issue #3893](https://github.com/github/copilot-cli/issues/3893)
- **集成读写 CLI 用户设置**：第三方集成可读取并修改本地 Copilot CLI 配置。
- **LSP Server 日志查看**：新增 `/lsp logs` 与 `read_agent` 命令，便于诊断语言服务器问题。
- **缺失 gh CLI 的自动提示**：在 GitHub 仓库中检测到 `gh` CLI 未安装时主动提示安装。
- **GitHub 附件变体支持**：扩展 prompt 渲染管线，支持 GitHub 附件的不同变体格式。

> [Release v1.0.66-2 · github/copilot-cli](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues

以下按影响力、讨论热度与问题的代表性选出 **10 条最值得关注的 Issue**：

| # | Issue | 优先级 | 说明 |
|---|-------|--------|------|
| 1 | **[#3958](https://github.com/github/copilot-cli/issues/3958)** — Windows v1.0.66 无法启动带参数的 .bat/.cmd stdio MCP Server | 🔴 **Regression** | 从 1.0.66 引入的回归 bug，子进程直接报 `syntax incorrect` 并崩溃。这是本次发版的重点修复方向，影响所有 Windows 平台使用 MCP 的用户。 |
| 2 | **[#3957](https://github.com/github/copilot-cli/issues/3957)** — macOS 触控板无法滚动历史（选中被解释为选择历史 prompt） | 🟡 关注度 👍4 | 交互体验问题，开发者无法滚动查看已有对话，需回退版本。已关闭（有 workaround）。 |
| 3 | **[#3959](https://github.com/github/copilot-cli/issues/3959)** — 删除文本后终端残留 ghost 字符（重绘缺陷） | 🟡 交互体验 | TUI 渲染层在 backspace/删除后未正确清除单元格，影响多终端模拟器下的使用体验。 |
| 4 | **[#3972](https://github.com/github/copilot-cli/issues/3972)** — 首次加载时 UI 持续输出鼠标移动字符流 | 🔴 严重 | 终端初始化时鼠标事件被当作文本输入渲染，直接影响使用。 |
| 5 | **[#3973](https://github.com/github/copilot-cli/issues/3973)** — Windows MCP OAuth 在排除端口范围时反复认证失败 | 🟡 Windows | 缓存了 TCP 动态端口后命中系统保留端口范围导致监听失败，需手动清除 OAuth 缓存。 |
| 6 | **[#3948](https://github.com/github/copilot-cli/issues/3948)** — `web_fetch` 工具持续 TypeError（非代理原因） | 🟡 工具层 | `fetch` 调用全部失败，但模型授权与登录均正常，可能在 TLS/网络栈层面存在兼容性问题。 |
| 7 | **[#1799](https://github.com/github/copilot-cli/issues/1799)** — 请求关闭 alt-screen 视图 | 🟡 关注度 👍7 | alt-screen 全屏模式引发多项副作用（如 Issue #3957 可能与其相关），社区希望保留切换回经典滚动模式的能力。 |
| 8 | **[#3909](https://github.com/github/copilot-cli/issues/3909)** — 企业/组织希望集中推送环境变量至本地 CLI | 🟡 企业需求 | 目前 Agents/Codespaces 的 Secret 仅在云端生效，本地 CLI 缺乏统一管控入口，影响企业合规与标准化。 |
| 9 | **[#3963](https://github.com/github/copilot-cli/issues/3963) / [#3969](https://github.com/github/copilot-cli/issues/3969) / [#3970](https://github.com/github/copilot-cli/issues/3970) / [#3971](https://github.com/github/copilot-cli/issues/3971)** — 会话管理系列功能请求 | 🟡 高频需求 | 集中反映了社区对会话生命周期管理（过期时间、阶段徽章、自定义标签、文件树浏览）的强烈需求。 |
| 10 | **[#3600](https://github.com/github/copilot-cli/issues/3600) / [#2364](https://github.com/github/copilot-cli/issues/2364)** — 僵尸会话无法清理、运行数月 | 🔴 已收敛 | 两项关键的会话挂起/超时 bug 均已关闭，显示团队已修复此类稳定性问题。 |

---

## 4. 重要 PR 进展

⚠️ **过去 24 小时内无新增 Pull Request。**

当前可见的代码变更集中在本次 v1.0.66-2 版本中，主要包括：
- Windows 平台 `.bat/.cmd` MCP Server 启动链路修复
- alt-screen 渲染修复
- 插件同名 MCP Server 冲突解决（指向 Issue #3893）

社区可关注后续 master 分支合并进展，预计上述修复点也将进入正式版 1.0.66。

---

## 5. 功能需求趋势

基于本批 28 条 Issue 的标签与内容聚类，提炼出以下 **6 大社区关注方向**：

| 趋势方向 | 代表 Issue | 出现频次 |
|----------|-----------|---------|
| **🖥 Windows 平台稳定性** | #3958 (MCP .bat 启动回归), #3973 (OAuth 端口冲突), #3967 (安装自毁), #2286 (Git 符号链接), #3962 (1.0.65 无法运行) | **5 条** — 本次最密集反馈 |
| **🗂 会话生命周期管理** | #3963 (过期时间显示), #3969 (Plan 阶段徽章), #3970 (自定义标签), #3971 (Repo 会话文件树), #2654 (本地同步 silent empty), #3904 (CloudQuery 导致 /chronicle 失败) | **6 条** — 功能丰富度需求 |
| **🎨 终端渲染与交互** | #3959 (Ghost 字符), #3957 (触控板滚动), #3972 (鼠标事件污染), #3936 (Ctrl+G paste 展开), #2376 (时间戳 1970 偏移-已关闭), #1799 (alt-screen 争议) | **6 条** — TUI 精致度持续打磨 |
| **🔌 MCP / 插件生态** | #3893 (同名冲突-已修复), #2849 (HTTP Headers 保存-已关闭), #3967 (安装问题) | 生态扩展期 |
| **🏢 企业级管控** | #3909 (org 推送 env/配置), #2364 / #3600 (会话治理) | 大型企业用户需求上升 |
| **🌐 网络 / 工具链** | #3948 (web_fetch 全局失败) | 工具可靠性 |

> **核心结论：** 2026 年 Q2 末，Copilot CLI 社区的关注重心已从「新功能接入」明显转向 **「Windows 平台稳定性」** 与 **「会话管理体验精细化」** 两大方向。

---

## 6. 开发者关注点（痛点与高频需求）

### 🔴 痛点（Pain Points）

1. **Windows 平台体验持续落后** — 本次 24h 内 5 条 Windows 相关 bug，涵盖 MCP 启动、OAuth、安装、Git 符号链接，显示 Windows 仍是 Copilot CLI 的「二等公民」。
2. **终端渲染层不够健壮** — Ghost 字符、鼠标事件污染、alt-screen 争议、触控板滚动冲突，说明 TUI 框架在多种终端模拟器（Ghostty、Guake、macOS Terminal）下的兼容性仍需加强。
3. **会话管理缺乏可见性** — 用户无法看到会话过期时间、无法快速判断 Plan 阶段、无法自定义标签，导致多工作流场景下效率下降。

### 🟢 高频需求（Top Requests）

- **关闭 alt-screen 模式**（#1799，👍7）— 社区呼声最高的交互调整。
- **企业集中管控本地 CLI 配置**（#3909）— 大型企业合规刚需。
- **会话过期/保留策略可视化**（#3963）— 防止工作意外丢失。
- **会话自定义标签与过滤**（#3970）— 多项目并行场景下的组织需求。
- **Repo 会话支持文件树浏览**（#3971）— 对齐 Folder 会话体验。

---

*日报生成时间：2026-06-29 | 数据窗口：过去 24 小时 | 共扫描 28 条 Issue，0 条 PR*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-06-29 | **数据来源**: github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

今日社区活动较为平静，无新版本发布和 PR 更新。唯一值得关注的是，有用户提交 Issue 反馈 **Enter/Return 键在移动端和桌面端的换行行为不合理**，导致移动端使用体验严重受限。该问题建议将移动端 Enter 键改为换行，保持桌面端 Shift+Enter 换行，以降低输入成本。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

> ⚠️ 今日仅有 1 条 Issue 更新，以下为完整呈现。

| # | Issue | 标签 | 评论 | 👍 | 要点 |
|---|-------|------|------|----|------|
| 1 | [Bad usage of return and enter for desktop and mobile](https://github.com/MoonshotAI/kimi-cli/issues/2479) | enhancement | 0 | 0 | 移动端 Enter 直接发送，无法换行，体验极差 |

**为什么重要**：直接影响移动端用户的可用性——在手机端编写多行提示词几乎不可行。截至目前尚无社区反馈，说明该痛点可能被低估，值得团队优先关注。

---

## 4. 重要 PR 进展

今日无 PR 更新。

---

## 5. 功能需求趋势

基于本周 Issues 动态，社区反馈主要集中在以下方向：

1.  **移动端交互优化** — 利用率最高的问题，涉及输入体验和响应式交互。
2. ⌨️ **键盘快捷键/换行逻辑** — 是否正确区分「发送」与「换行」操作。

---

## 6. 开发者关注点

- **移动端可用性**是本周最突出的痛点，用户认为当前的行为几乎让移动端无法使用，是值得优先解决的交互问题。
- **桌面端快捷键体验**也是高频关注点，用户对是否需要持续按住 Shift 来换行存在不同期望。
- **社区参与度偏低**：当前 Issue 评论数为零，回应速度有待提升，建议团队及时回复到关键 Issue，以活跃社区氛围。

---

>  *本期为简版日报——受数据获取窗口限制，Issues/PR 数量较少。建议将日报周期延长至 7 天以获得更全面的社区趋势分析。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**2026-06-30 · 数据来源：github.com/anomalyco/opencode**

---

## 一、今日速览

过去 24 小时无新版本发布，但 Issues 和 PR 活动密集，社区焦点集中在三个方向：**多个 GLM 模型通过 opencode-go 出现 prompt cache 异常下降**、**V2 架构核心模块（客户端迁移、MCP OAuth 并发、shell 工具）持续推进**、以及 **TUI 用户体验优化**（提示词恢复行为、中断队列、焦点导航等）。多个长期 Issue 在昨日重新活跃，显示社区对子代理计费可见性和 LaTeX 渲染等话题关注度持续走高。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 👍 | 评论 | 重要性 |
|---|-------|------|----|------|--------|
| 1 | [#30680](https://github.com/anomalyco/opencode/issues/30680) 自动压缩循环卡死 | CLOSED | 0 | 10 | 🔴 严重 Bug：新空文件夹启动即陷入 auto-compaction 循环并彻底停止响应，影响所有新用户体验 |
| 2 | [#33998](https://github.com/anomalyco/opencode/issues/33998) GLM-5.2 prompt cache 随机跌至 ~500 tokens | OPEN | 0 | 6 | 🔴 多模型 cache 异常：同属 GLM 家族，疑 opencode-go gateway 层逻辑缺陷 |
| 3 | [#31348](https://github.com/anomalyco/opencode/issues/31348) GLM-5.1 prompt cache 随机跌至 0 | OPEN | 3 | 5 | 🔴 与 #33998 形成呼应：GLM 全系列在 opencode-go 上 cache 不稳定，DeepSeek V4 Flash 无此问题 |
| 4 | [#33490](https://github.com/anomalyco/opencode/issues/33490) GLM-5.2 拒绝 `instructions` 字段 | OPEN | 3 | 5 | 🔴 "Extra inputs are not permitted" 错误——OpenCode Go → Z.AI 路径字段兼容性问题 |
| 5 | [#22132](https://github.com/anomalyco/opencode/issues/22132) 本地 Ollama provider 挂起 | OPEN | 5 | 10 | ⚠️ 已持续 80+ 天，Ollama 用户口头仍多但无官方回应；`/v1/chat/completions` 正常说明系 provider 适配层问题 |
| 6 | [#4925](https://github.com/anomalyco/opencode/issues/4925) 显示子代理总成本 | CLOSED | 8 | 9 | 💰 高票需求：子代理场景下成本统计不完整，影响预算管控 |
| 7 | [#33696](https://github.com/anomalyco/opencode/issues/33696) GitHub Copilot provider 失效 | OPEN | 4 | 5 | 🔴 重新授权后仍无模型列出，OAuth 流程或 token 缓存异常 |
| 8 | [#34359](https://github.com/anomalyco/opencode/issues/34359) TUI 迁移至 @opencode-ai/client 跟踪 | OPEN | 0 | 4 | 🏗️ V2 技术债清理：旧 SDK → 新 Promise client 的全面迁移 |
| 9 | [#34380](https://github.com/anomalyco/opencode/issues/34380) 会话级 keyed context 贡献机制 | OPEN | 0 | 2 | 🏗️ 新架构设计讨论：为 Embedding 应用提供会话粒度的上下文注入能力 |
| 10 | [#34523](https://github.com/anomalyco/opencode/issues/34523) V2 MCP OAuth token 刷新跨进程竞争 | OPEN | 0 | 1 | ⚠️ 并发安全：多个 location/process 同时刷新 MCP OAuth token 可能导致凭证失效 |

**观察**：GLM 模型相关 Issue 在 24 小时内密集出现（#33998、#31348、#33490），高度怀疑 `opencode-go` gateway 对 Zhipu 系列模型的处理存在系统性问题，建议官方优先排查。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 状态 | 类别 | 内容概要 |
|---|-----|------|------|----------|
| 1 | [#34534](https://github.com/anomalyco/opencode/pull/34534) | OPEN | 🏗️ 客户端迁移 | 暴露 shell API 组为 `api.shells`（复数），TUI shell 列表/删除切至新 Promise client |
| 2 | [#34531](https://github.com/anomalyco/opencode/pull/34531) | OPEN | ✨ 新功能 | 在 core MCP wrapper 上暴露 `prompts()` 和 `prompt()` 方法，支持跨连接服务器的 MCP prompt 检索与稳定排序 |
| 3 | [#34530](https://github.com/anomalyco/opencode/pull/34530) | OPEN | 🐛 Bug fix | 修复全屏 TUI 在中断期间可接受新提示词的问题——改为排队等待（Closes #9291） |
| 4 | [#34527](https://github.com/anomalyco/opencode/pull/34527) | OPEN | 🐛 Bug fix | 修复 v2 单元测试两个独立根因：`shell` 期望值过时 + 另一处 location 工具注册问题 |
| 5 | [#34521](https://github.com/anomalyco/opencode/pull/34521) | CLOSED | ✨ 新功能 | 将 models.dev 实验模式投影为独立 model ID，保留模式级覆盖与分层定价（Closes #34486） |
| 6 | [#34512](https://github.com/anomalyco/opencode/pull/34512) | CLOSED | 🐛 Bug fix | 用 MCP 风格替换规则清理已注册工具名，防止特殊字符导致模型调用失败 |
| 7 | [#34529](https://github.com/anomalyco/opencode/pull/34529) | CLOSED | ✨ 新功能 | 暴露 MCP 日志通知，按 server/logger/level 结构化路由至 Effect 日志级别 |
| 8 | [#34525](https://github.com/anomalyco/opencode/pull/34525) | CLOSED | 🐛 Bug fix | 关闭 stdio MCP transport 前先终止子进程，防止孤儿进程泄漏 |
| 9 | [#34060](https://github.com/anomalyco/opencode/pull/34060) | OPEN | ✨ 新功能 | 添加 `--model free` 支持，从 OpenCode Zen 零成本模型中随机选择（Closes #21863） |
| 10 | [#33523](https://github.com/anomalyco/opencode/pull/33523) | OPEN | ✨ 新功能 | 为插件 SDK 添加 LLM/会话可观测性钩子：可观察真实 LLM 流、工具执行、agent 运行状态 |

**观察**：rekram1-node 一人贡献了 6 个 PR（全部与 MCP/core 相关），是今日最活跃的核心开发者。

---

## 五、功能需求趋势

从全部 50 条 Issue 中提炼社区关注度排名：

| 排名 | 方向 | 相关 Issue 数 | 代表 Issue |
|------|------|--------------|------------|
| 1 | **模型 Provider 兼容性与 Cache 稳定性** | 5+ | #33998、#31348、#33490、#33696、#22132 |
| 2 | **V2 架构演进（客户端迁移、API 端点、会话管理）** | 8+ | #34359、#34430、#34450、#34488、#34366、#34380 |
| 3 | **TUI 体验优化** | 4+ | #34446、#34530、#34395、#34496 |
| 4 | **成本可见性与计费** | 2 | #4925、#34060 |
| 5 | **MCP 生态深化（OAuth、Prompts、日志、并发安全）** | 5+ | #34523、#34520、#34531、#34529、#34525 |
| 6 | **IDE 集成（VS Code 扩展文档）** | 1 | #31500 |
| 7 | **Skill/Plugin 能力扩展** | 3 | #11972、#34498、#15680 |
| 8 | **LaTeX 渲染** | 1 | #11655（👍27，长期高票需求） |

---

## 六、开发者关注点与痛点总结

### 🔴 高优先级痛点

1. **GLM 模型在 opencode-go 上全面异常**：cache 断崖式下降（#33998、#31348）+ 字段被拒（#33490），三个独立 Issue 指向同一根源，影响所有通过 OpenCode Go 订阅使用 GLM 的用户。

2. **本地模型支持缺口**：Ollama provider 挂起问题（#22132）持续 80+ 天未解决，影响偏好本地部署的开发者。

3. **GitHub Copilot 认证流程**：重新授权后仍无模型列出（#33696），可能涉及 OAuth token 缓存或 provider 发现逻辑。

### 🟡 中等优先级

4. **子代理成本不透明**：#4925（👍8）显示用户需要精确的多 agent 成本核算来管控预算。

5. **TUI 提示词自动恢复**：#34446 用户期望 `/new` 后获得空白输入框而非自动填入上一条提示词——体验偏好分歧。

6. **MCP OAuth 并发安全**：#34523、#34520 揭示了多进程架构下 token 刷新的竞态风险，虽被标记为 deferred 但需尽快规划。

### 🟢 长期诉求

7. **LaTeX 渲染**（#11655，👍27）：学术/技术写作用户的经典需求，社区呼声高但实现复杂度大。

8. **Worktree 生命周期事件暴露给插件**（#15680）：高级用户希望插件能感知 worktree 操作。

9. **VS Code 扩展文档缺失**（#31500）：影响新用户上手体验。

---

> **编辑注**：GLM 相关 Issue 集中爆发是本日最显著信号，建议维护者优先排查 `opencode-go` → Zhipu 的 provider 适配层。V2 架构推进稳健，MCP 生态相关 PR 质量较高且合并节奏健康。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-30

---

## 1. 今日速览

过去 24 小时 Pi 社区活跃度较高，共 35 条 Issue 更新和 7 条 PR 更新。**无新版本发布**。核心动态集中在：流式输出体验修复（滚动强制、图像回放抑制）、Bedrock/Anthropic 提供商认证与错误处理改进、以及多个新模型提供商（Scaleway、Xiaomi MiMo）的适配问题。社区对**提供商兼容性**和**TUI 交互体验**的关注度最高。

---

## 2. 版本发布

无（过去 24 小时无新 Release）。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 👍 | 评论 | 要点 |
|---|-------|------|-----|------|------|
| 1 | [#5825](https://github.com/earendil-works/pi/issues/5825) — Streaming markdown forces scroll to bottom | CLOSED | 0 | 42 | 启用 `clear on shrink` 时，流式输出会强制将视图滚到底部，用户无法向上阅读。**评论量最高**，社区讨论热烈，已修复。 |
| 2 | [#4877](https://github.com/earendil-works/pi/issues/4877) — Session folder collision | CLOSED | 2 | 20 | 不同路径的会话可能因文件夹命名规则产生碰撞（如 `/a/b/c/d` 和 `/a-b/c-d` 映射到同一文件夹）。 |
| 3 | [#6083](https://github.com/earendil-works/pi/issues/6083) — LLM cache not working with z.ai GLM coding plan | CLOSED | 9 | 8 | 使用 z.ai GLM 时缓存失效，多步工具调用会快速消耗 session 限额（单次任务消耗 10-20%）。**👍 最高**，说明该提供商用户群体不小。 |
| 4 | [#5871](https://github.com/earendil-works/pi/issues/5871) — Anthropic OAuth token detection hardcoded | OPEN | 0 | 6 | OAuth token 检测硬编码为 `sk-ant-oat` 前缀，用户希望改为由 provider/model 显式声明，提升灵活性。 |
| 5 | [#6019](https://github.com/earendil-works/pi/issues/6019) — OpenAI Responses mid-stream retryable error not retried | CLOSED | 0 | 5 | OpenAI 返回可重试错误时，Pi 直接标记为 `stopReason: "error"` 而未重试，影响可靠性。 |
| 6 | [#5763](https://github.com/earendil-works/pi/issues/5763) — Providers swallow HTTP error body | CLOSED | 0 | 5 | 代理/网关返回非 2xx 时，各提供商错误信息丢失（Bedrock → Unknown、OpenAI → 无 body），排查困难。 |
| 7 | [#6093](https://github.com/earendil-works/pi/issues/6093) — Scoped Anthropic API keys need necessary request params | CLOSED | 0 | 5 | Claude Code 的 scoped key 格式为 `sk-ant-api03-`，与 OAuth key 前缀不同，当前逻辑无法正确处理。 |
| 8 | [#6138](https://github.com/earendil-works/pi/issues/6138) — Incorrect pricing for Xiaomi MiMo models | OPEN | 0 | 3 | 小米 MiMo 模型硬编码定价与官方价格不匹配，影响成本统计准确性。 |
| 9 | [#6124](https://github.com/earendil-works/pi/issues/6124) — Devanagari breaking the Pi harness | OPEN | 0 | 3 | 天城文（如 `नेटवर्क`）输入导致 TUI 渲染崩溃，国际化支持存在短板。 |
| 10 | [#6133](https://github.com/earendil-works/pi/issues/6133) — Pi crashes with ECONNRESET during streaming | OPEN | 0 | 1 | 上游提供商在 SSE 流中重置 TCP 连接时，`TypeError: terminated` 未被捕获，导致进程崩溃而非重试。**稳定性关键问题**。 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容说明 |
|---|-----|------|----------|
| 1 | [#6170](https://github.com/earendil-works/pi/pull/6170) — Avoid replaying historical inline images | CLOSED | 重建历史会话上下文时，停止回放内联终端图像转义序列，历史记录降级为 `[Image: ...]` 标签，减少渲染开销。 |
| 2 | [#6169](https://github.com/earendil-works/pi/pull/6169) — Disable padding for assistant messages | OPEN | 为助手消息添加 padding 开关，关联 [#6168](https://github.com/earendil-works/pi/issues/6168)，优化 TUI 空间利用。 |
| 3 | [#6051](https://github.com/earendil-works/pi/pull/6051) — Recover from hung streams and retry unmodeled Bedrock errors | CLOSED | 为 Bedrock 添加空闲超时（默认 240s）和连接超时配置，支持未建模错误的重试，提升连接稳定性。 |
| 4 | [#5832](https://github.com/earendil-works/pi/pull/5832) — Surface provider HTTP error body | CLOSED | 修复 [#5763](https://github.com/earendil-works/pi/issues/5763)：代理/网关错误时保留原始 HTTP body，不再丢失关键调试信息。 |
| 5 | [#6026](https://github.com/earendil-works/pi/pull/6026) — Stabilize working status row | CLOSED | 关联 [#5825](https://github.com/earendil-works/pi/issues/5825)，修复 TUI 工作状态行在流式输出时的抖动问题。 |
| 6 | [#6161](https://github.com/earendil-works/pi/pull/6161) — Map Bedrock apiKey auth to bearer token env | CLOSED | 将 Bedrock 的 `apiKey` 认证映射到 `AWS_BEARER_TOKEN_BEDROCK` 环境变量，同时避免重复转发。**已被自动关闭**（contributor gate），引发社区对 PR 流程的讨论。 |
| 7 | [#6156](https://github.com/earendil-works/pi/pull/6156) — Return empty string for empty tool results | CLOSED | 修复 [#6103](https://github.com/earendil-works/pi/issues/6103)：工具调用返回空文本时不再错误地输出 `(see attached image)`，避免模型混淆。 |

---

## 5. 功能需求趋势

从本期所有 Issues 中提炼出以下 **5 大关注方向**：

### 🔌 提供商兼容性与认证（最高频）
- Bedrock bearer token 映射（[#6163](https://github.com/earendil-works/pi/issues/6163)、[#6161](https://github.com/earendil-works/pi/pull/6161)）
- Anthropic OAuth/scoped key 检测（[#5871](https://github.com/earendil-works/pi/issues/5871)、[#6093](https://github.com/earendil-works/pi/issues/6093)）
- Cloudflare Workers AI 路由 404（[#6021](https://github.com/earendil-works/pi/issues/6021)）
- 新提供商接入请求：Scaleway（[#6165](https://github.com/earendil-works/pi/issues/6165)）、Xiaomi MiMo 定价修正（[#6138](https://github.com/earendil-works/pi/issues/6138)）
- Kimi Coding base64 图片损坏（[#6164](https://github.com/earendil-works/pi/issues/6164)）

### 🖥️ TUI 交互体验
- 流式输出滚动强制问题（[#5825](https://github.com/earendil-works/pi/issues/5825)，42 条评论）
- 天城文输入崩溃（[#6124](https://github.com/earendil-works/pi/issues/6124)）
- 助手消息 padding 控制（[#6169](https://github.com/earendil-works/pi/pull/6169)）

### 🔄 流式稳定性与错误恢复
- 流中 ECONNRESET 导致进程崩溃（[#6133](https://github.com/earendil-works/pi/issues/6133)）
- OpenAI 可重试错误未重试（[#6019](https://github.com/earendil-works/pi/issues/6019)）
- Bedrock 流挂起无超时（[#6051](https://github.com/earendil-works/pi/pull/6051)）
- 代理错误 body 丢失（[#5763](https://github.com/earendil-works/pi/issues/5763)）

### 💰 成本与缓存优化
- z.ai GLM 缓存失效导致 token 浪费（[#6083](https://github.com/earendil-works/pi/issues/6083)，👍9）
- 小米 MiMo 定价数据过期（[#6138](https://github.com/earendil-works/pi/issues/6138)）

### 🏗️ 扩展性与企业管理
- 多 Profile 隔离支持（[#3966](https://github.com/earendil-works/pi/issues/3966)）
- 企业管理员配置（[#6159](https://github.com/earendil-works/pi/issues/6159)）
- 扩展上下文 API 暴露（[#5932](https://github.com/earendil-works/pi/issues/5932)）

---

## 6. 开发者关注点总结

**痛点 Top 3：**

1. **提供商错误处理不透明** — 代理/网关场景下 HTTP 错误 body 被丢弃，导致调试困难。社区强烈期望统一的错误透传机制。（[#5763](https://github.com/earendil-works/pi/issues/5763)、[#6019](https://github.com/earendil-works/pi/issues/6019)）

2. **流式输出体验不稳定** — 滚动强制、流挂起无超时、TCP 断连崩溃三叠加影响，严重影响长对话可用性。（[#5825](https://github.com/earendil-works/pi/issues/5825)、[#6133](https://github.com/earendil-works/pi/issues/6133)）

3. **新提供商接入门槛高** — 认证方式硬编码（如 Anthropic OAuth 前缀检查）、模型定价手动维护，导致新提供商适配需要直接修改核心代码。（[#5871](https://github.com/earendil-works/pi/issues/5871)、[#6138](https://github.com/earendil-works/pi/issues/6138)）

**安全警报：** 社区集中报告了多个可疑 npm 包（[#6152](https://github.com/earendil-works/pi/issues/6152)、[#6153](https://github.com/earendil-works/pi/issues/6153)、[#6154](https://github.com/earendil-works/pi/issues/6154)、[#6155](https://github.com/earendil-works/pi/issues/6155)），均为 `@artale/pi-envman`、`pi-env`、`pi-wiki` 等包名，仓库链接已失效，建议用户注意甄别。

---

*数据来源：github.com/badlogic/pi-mono | 日报生成时间：2026-06-30*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-30

---

## 1. 今日速览

过去 24 小时社区活跃度极高，共产生 **30 条 Issue 更新**和 **50 条 PR 更新**。核心焦点集中在三个方面：**流式 API 稳定性**（多个超时/无响应 bug 集中爆发）、**Daemon/Serve 模式的功能扩展**（移动端适配、多渠道集成、HTTPS 支持）、以及 **TUI 渲染体验修复**（emoji 替换、滚动异常、虚拟历史）。此外，v0.19.3-nightly 发布流水线出现 Docker 集成测试失败，需持续关注。

---

## 2. 版本发布

过去 24 小时内无正式 Release。

⚠️ **注意**：nightly 版本 `v0.19.3-nightly.20260629.ee375c6a4` 发布失败（Docker 集成测试 job 失败），详见 [Issue #5969](https://github.com/QwenLM/qwen-code/issues/5969)。

---

## 3. 社区热点 Issues

| # | Issue | 标题 | 为什么重要 | 社区反应 |
|---|-------|------|-----------|---------|
| 1 | [#5975](https://github.com/QwenLM/qwen-code/issues/5975) | [API Error: No stream activity for 120000ms after 19 chunks] | v0.19.3 升级后频繁出现流式中断，用户被迫按 Ctrl+Y 重试，严重影响使用体验 | 👍1，5 条评论，已有复现 |
| 2 | [#401](https://github.com/QwenLM/qwen-code/issues/401) | [API Error: Streaming setup timeout after 6s] | 安装后即报流式超时，P1 级别 bug，影响新用户首次体验 | 12 条评论，长期未解决 |
| 3 | [#6004](https://github.com/QwenLM/qwen-code/issues/6004) | 安装 MCP 过程中任务异常直接闪退 | 内存溢出导致进程崩溃（GC 日志显示堆达 ~4GB），涉及 MCP 生态稳定性 | 7 条评论 |
| 4 | [#5942](https://github.com/QwenLM/qwen-code/issues/5942) | Anthropic provider 的 prompt-cache miss 导致成本膨胀 | 与 Claude Code 对比，相同后端下缓存命中率差距显著，直接影响 API 费用 | 4 条评论，技术分析深入 |
| 5 | [#5941](https://github.com/QwenLM/qwen-code/issues/5941) | 大模型输出时滚轮上滑直接跳到最上方 | Windows 平台 TUI 渲染 bug，打断阅读流式输出的连续性 | 4 条评论 |
| 6 | [#5971](https://github.com/QwenLM/qwen-code/issues/5971) | TUI 窗口滚动刷屏问题（Linux） | 多轮对话后 TUI 从会话开头重新滚动，Linux 用户无法正常使用 | 3 条评论 |
| 7 | [#5979](https://github.com/QwenLM/qwen-code/issues/5979) | /auth 修改配置后新会话仍报 401 | 环境变量优先级 bug，配置持久化失败，影响多供应商切换场景 | 2 条评论，已有 PR 修复 |
| 8 | [#6007](https://github.com/QwenLM/qwen-code/issues/6007) | GLM-5.2 泄露 thinking text 为正常输出 | 思考链文本泄漏到最终回复，影响输出质量且暴露内部推理过程 | 2 条评论 |
| 9 | [#5956](https://github.com/QwenLM/qwen-code/issues/5956) | 支持可配置的 compaction model | 允许用便宜模型做上下文压缩，降低长对话成本，架构层面优化 | 3 条评论 |
| 10 | [#6023](https://github.com/QwenLM/qwen-code/issues/6023) | Subagent 结果泄漏 `<analysis>/<summary>` 标签并破坏 Markdown 渲染 | 长会话中内部标签污染上下文，daemon UI 渲染异常 | 1 条评论，已有 PR 修复 |

---

## 4. 重要 PR 进展

| # | PR | 标题 | 功能/修复说明 | 状态 |
|---|-----|------|-------------|------|
| 1 | [#5999](https://github.com/QwenLM/qwen-code/pull/5999) | 替换所有 TUI emoji 为 Unicode 文本符号 | 延续 #5787/#5788，彻底清理所有渲染路径中的 width-2 emoji，解决终端对齐问题 | OPEN |
| 2 | [#6003](https://github.com/QwenLM/qwen-code/pull/6003) | Web Shell 移动端侧边栏抽屉 | 将 `display: none` 改为 overlay drawer 模式，移动端可滑动展开会话列表 | OPEN |
| 3 | [#5980](https://github.com/QwenLM/qwen-code/pull/5980) | 修复 /auth 修改配置后新会话 401 | 调整环境变量优先级，确保 auth 修改后的值覆盖系统环境变量 | OPEN |
| 4 | [#6021](https://github.com/QwenLM/qwen-code/pull/6021) | 修复 ACP read_file 本地根路径 | 使 ACP 后端 read_file 保留对 skill 指令、临时输出等 managed local roots 的读取能力 | OPEN |
| 5 | [#6027](https://github.com/QwenLM/qwen-code/pull/6027) | 清理 subagent 结果标签 | 在将 subagent 结果回传父 agent 前移除 `<analysis>` 等内部标签，修复上下文污染 | OPEN |
| 6 | [#5957](https://github.com/QwenLM/qwen-code/pull/5957) | 修正压缩阈值的上下文窗口计算 | 当 max_tokens 升至 64K 时，从上下文窗口中减去预留输出 token，避免 400 错误 | OPEN |
| 7 | [#5738](https://github.com/QwenLM/qwen-code/pull/5738) | 默认开启虚拟终端历史 | 新用户默认获得应用内可滚动历史视口，老用户可通过 `ui.useTerminalBuffer` 回退 | OPEN |
| 8 | [#5991](https://github.com/QwenLM/qwen-code/pull/5991) | /loop 自主模式 | 裸 `/loop` 命令现在启动自驱动循环，无需手动提供 prompt 或间隔 | OPEN |
| 9 | [#5780](https://github.com/QwenLM/qwen-code/pull/5780) | 新增 `qwen update` 和 `/update` 命令 | 支持自动检查新版本并安装（standalone）或引导手动更新（npm/yarn/pnpm） | OPEN |
| 10 | [#6001](https://github.com/QwenLM/qwen-code/pull/6001) | 支持 HTTPS/TLS（--tls-cert / --tls-key） | 解决移动端通过 LAN 访问 serve 时无法使用语音输入（getUserMedia 需要安全上下文）的问题 | OPEN |

---

## 5. 功能需求趋势

从今日 30 条 Issue 中提炼出社区最关注的五大方向：

### 🔴 流式 API 稳定性（最高优先级）
- 流式超时（#401、#5975）、无活动检测、thinking text 泄漏（#6007）
- 多个用户报告 v0.19.3 版本后体验退化，是当前最紧急的问题集群

### 🟠 Daemon/Serve 模式功能扩展
- 移动端适配（#6000）、多渠道集成（#6010、#5976）、HTTPS 支持（#6001）、ACP 会话恢复（#5852）
- 社区正在将 Qwen Code 从纯 CLI 工具推向**常驻服务 + 多端接入**的架构

### 🟡 TUI 渲染与交互体验
- Emoji 替换（#5999）、滚动异常（#5941、#5971）、虚拟历史（#5738）、代码块复制行号（#6024）
- Windows 和 Linux 平台用户反馈集中

### 🟢 成本优化与 Token 管理
- 可配置 compaction model（#5956）、Anthropic prompt-cache 优化（#5942）、压缩阈值修正（#5957）
- 长对话场景下的成本控制成为高级用户核心诉求

### 🔵 自动化与自主运行
- /loop 自主模式（#5990、#5991）、daemon 管理的 channel workers（#5976）、热重载系统（#3696）
- 社区希望 Qwen Code 能在无人值守场景下持续工作

---

## 6. 开发者关注点

### 痛点总结

| 痛点 | 涉及 Issue | 严重程度 |
|------|-----------|---------|
| **流式输出频繁中断** | #401, #5975, #6007 | 🔴 致命 |
| **MCP 安装导致内存溢出崩溃** | #6004 | 🔴 致命 |
| **/auth 配置不持久化** | #5979 | 🟠 高 |
| **TUI 滚动体验差（Win/Linux）** | #5941, #5971 | 🟠 高 |
| **Subagent 标签污染上下文** | #6023 | 🟡 中 |
| **Prompt cache miss 导致成本过高** | #5942 | 🟡 中 |
| **Daemon 模式下 memory 不工作** | #5968 | 🟡 中 |

### 高频需求

1. **热重载能力**（#3696）：skills、extensions、MCP、配置变更无需重启会话，呼声持续数月
2. **移动端 Web Shell**（#6000、#6003）：手机浏览器访问 `qwen serve` 的体验亟需改善
3. **多渠道 Bot 集成**（#6010、#5976、#5902）：钉钉、飞书、微信、QQ Bot、Telegram 等 IM 渠道的原生支持
4. **可配置压缩模型**（#5956）：用低成本模型处理上下文摘要，避免昂贵模型浪费在压缩任务上
5. **CLI 安全模式**（#4883，已关闭）：一键禁用所有用户自定义配置以排查问题

---

> 📊 **数据概览**：今日 30 条 Issue（12 条 OPEN，18 条 CLOSED），50 条 PR 更新。社区贡献者活跃度最高的是 **pomelo-nwu**（5 条 PR）、**qqqys**（3 条 PR/Issue）、**doudouOUC**（3 条 PR/Issue）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 | 2026-06-30

---

## 1. 今日速览

今日社区进入高密度冲刺期，维护者 Hmbown 集中合并了超过 10 个修复 PR，重点解决 **v0.8.66 子 Agent 高并发场景下的锁竞争/通道阻塞** 问题。缓存命中率偏低是用户抱怨最强烈的方向，相关 Bug 仍未关闭。Hotbar 经历"显式隐藏 → 可定制激活"的 UX 打磨，已确定 v0.8.66 默认隐藏。

---

## 2. 版本发布

过去 24 小时无正式 Release。当前活跃版本为 v0.8.69，主要工作围绕 v0.8.66–v0.8.69 之间的 Bug 修复、基准测试对齐 Codex 以及 Hotbar 默认行为调整。

---

## 3. 社区热点 Issues

| # | Issue | 关注原因 |
|---|---|---|
| 1 | **[#1177] 输入缓存命中率太低** — `trytsomile` 报告对比同类工具仅能达到远低于 95% 的命中率，这是高 Token 成本的系统性根源。| 24 👍 讨论，直接关联运行成本，被多次交叉引用。[链接](https://github.com/Hmbown/CodeWhale/issues/1177) |
| 2 | **[#1120] 缓存命中仍存问题** — `pmsleepcheck` 追踪 v0.8.17 未彻底修复版本，社区热度 21 👍。| 说明缓存优化是一个持续拉锯的痛点。[链接](https://github.com/Hmbown/CodeWhale/issues/1120) |
| 3 | **[#743] Token 消耗异常增大** — `YaYII` 报告半天消耗 4 亿 Token，疑为交互信息未压缩。| 与缓存问题合并为"成本失控"大类。[链接](https://github.com/Hmbown/CodeWhale/issues/743) |
| 4 | **[#1186] feat: typed persistent permission rules** — 要求为 `execpolicy` 增加作用域化的持久权限规则（tool/prefix/path → allow/deny/ask）。| 安全/权限体系化的关键推手。[链接](https://github.com/Hmbown/CodeWhale/issues/1186) |
| 5 | **[#3807] Hotbar 默认隐藏** — 维护者确认 v0.8.66 不对新用户展示 Hotbar，降低首次使用噪音。| UX 产品决策，与多子 Epic 对齐。[链接](https://github.com/Hmbown/CodeWhale/issues/3807) |
| 6 | **[#2953][#2956] Codex 级 Prompt 瘦身** — 两 Epic 将默认提示与往返 Token 向 Codex 对齐，直指缓存命中率。| 维护者主动对标，与 #1177/#1120 形成"攻守呼应"。[链接](https://github.com/Hmbown/CodeWhale/issues/2953) [链接](https://github.com/Hmbown/CodeWhale/issues/2956) |
| 7 | **[#1641] Agent 工具调用失败兜底** — Agent 在反爬或超时场景下仍死循环重试，缺少优雅降级与备选策略。| 实用性极强的韧性改进。[链接](https://github.com/Hmbown/CodeWhale/issues/1641) |
| 8 | **[#1425] 大工程处理会话卡死** — 10 子 Agent 并发分析 300 万字小说频发 `agent_wait` 超时。| 与今天合并的子 Agent 并发修复直接呼应。[链接](https://github.com/Hmbown/CodeWhale/issues/1425) |
| 9 | **[#2954][#2957] 基准测试 shell-only / 输出纪律** — Hmbown 提出让终端基准测试更贴近 Codex 的 shell 行为、收紧产出 Token。| 基准公平性与成本并重。[链接](https://github.com/Hmbown/CodeWhale/issues/2954) [链接](https://github.com/Hmbown/CodeWhale/issues/2957) |
| 10 | **[#2886] Gherkin E2E 工具生命周期测试** — 希望在命令策略层引入端到端验收覆盖，契合目前拆分式重构。| 测试基建升级，利于并行 PR 质量保证。[链接](https://github.com/Hmbown/CodeWhale/issues/2886) |

---

## 4. 重要 PR 进展

今日合并/开启的 PR 高度集中于：**子 Agent 并发 & UI 刷新稳定性**、**Hotbar 默认隐藏**、**发布基础设施工具**、**文档/安装脚本一致性**。

| # | PR | 内容 |
|---|---|---|
| 1 | **[#3812] PR** `fix(tui): allow agent starts to join parallel dispatch batches` | 让 `agent` 工具支持并行派发，修复高扇出下线性扩展问题。[链接](https://github.com/Hmbown/CodeWhale/pull/3812) |
| 2 | **[#3813] PR** `fix(tui): use nonblocking send for ListSubAgents refresh events` | 将子 Agent 列表刷新改为非阻塞发送，避免引擎/UI 事件循环卡死。[链接](https://github.com/Hmbown/CodeWhale/pull/3813) |
| 3 | **[#3809] PR** `fix(tui): render sub-agent sidebar from a read-only snapshot` | 侧边栏渲染改用只读快照，消除写锁竞争与 JSON 持久化阻塞。[链接](https://github.com/Hmbown/CodeWhale/pull/3809) |
| 4 | **[#3808] PR** `fix(tui): try_lock shell manager in async UI refresh paths` | 异步 UI 刷新路径改用 `try_lock`，避免渲染/输入被互斥锁拖慢。[链接](https://github.com/Hmbown/CodeWhale/pull/3808) |
| 5 | **[#3796] PR** `feat(tui): hotbar Alt+1-8 discoverability + decision-card key disambiguation` | Hotbar 快捷键可发现性 + 决策卡键位消歧，已合入。[链接](https://github.com/Hmbown/CodeWhale/pull/3796) |
| 6 | **[#3797] PR** `fix(tui): make the mode authoritative for YOLO — drop publish prompt carve-out` | 修复 YOLO 模式仍弹出审批提示的根因（`safety_floor` 覆盖）。[链接](https://github.com/Hmbown/CodeWhale/pull/3797) |
| 7 | **[#3756] PR** `fix(tui): default interactive Agent shell to approval-gated on` | Agent 模式默认开启 shell 工具（带审批门控），提升开箱即用性。[链接](https://github.com/Hmbown/CodeWhale/pull/3756) |
| 8 | **[#3779] PR** `fix(release): guard public install/version snippets` | 发布脚本同时校验 README 与 INSTALL 中的版本号，避免漂移。[链接](https://github.com/Hmbown/CodeWhale/pull/3779) |
| 9 | **[#3778] PR** `fix(release): stop sync-changelog dropping a release for Unreleased` | 修复 changelog 同步脚本误删正式版本条目。[链接](https://github.com/Hmbown/CodeWhale/pull/3778) |
| 10 | **[#3773] PR** `fix(tui): label session-scoped approval honestly, not "always"` | 审批选项文案从"永久"改为"会话级"，避免误导。[链接](https://github.com/Hmbown/CodeWhale/pull/3773) |

---

## 5. 功能需求趋势

从全部 Issues 提炼出的社区关注方向：

1. **缓存命中率与 Token 成本** — #1177、#1120、#743、#1732、#1818、#2953、#2956、#2957 形成密集反馈簇，是当前最高优先级痛点。
2. **子 Agent 并发与稳定性** — #1425、#2024、#3800 系列，以及今日多个 PR 集中修复锁竞争与通道阻塞。
3. **Hotbar 与首次使用体验** — #2061、#3389、#3397、#3731、#3807、#3402，产品方向从"默认展示"转向"默认隐藏 + 可选激活 + 设置向导"。
4. **权限与安全策略** — #1186（持久权限规则）、#3789（状态栏显示安全策略）、#3756（shell 默认审批门控）。
5. **远程工作台与多平台桥接** — #1984、#1990、#2964、#2967，覆盖 CNB/Lighthouse/Feishu 与 DigitalOcean/Telegram 双栈。
6. **多模型与 Provider 文档** — #2300、#2026、#2117，用户希望更清晰的模型路由与技能分组。
7. **基准测试公平性** — #2954、#2957，对标 Codex CLI 的 shell-only 与输出纪律。

---

## 6. 开发者关注点

- **成本失控是首要槽点**：缓存命中率低 + Token 消耗异常是用户流失风险点，维护者已启动 Codex 对标（#2953/#2956/#2957），但尚未闭环。
- **子 Agent 高扇出场景脆弱**：今日 PR 集中修复锁竞争与事件通道阻塞，说明架构在并发边界仍有债务。
- **Hotbar 默认行为反复调整**：从"默认展示"到"默认隐藏"再到"可定制激活"，反映产品方向仍在探索，建议关注 #3807 与 #3402 的最终决策。
- **文档/安装脚本与二进制版本漂移**：#3779、#3775、#3774 暴露发布流程中的校验盲区，CI 正在补齐。
- **Agent 工具调用韧性不足**：#1641 提出的失败降级与备选策略尚未落地，是 Agent 模式走向生产级的关键缺口。

---

*数据来源：github.com/Hmbown/CodeWhale | 生成时间：2026-06-30*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*