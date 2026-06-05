# AI CLI 工具社区动态日报 2026-06-05

> 生成时间: 2026-06-05 00:40 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告

**日期：2026-06-05 | 分析来源：7 大主流 AI CLI 工具社区动态**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于从"功能竞赛"向"可靠性深耕"的关键转型期。**安全加固**成为全行业共同主题——Claude Code 推出 credential-guard 插件，Gemini CLI 集中合并 3 个安全 PR，OpenCode 社区集中揭露 read-before-edit 缺失和 prompt injection 漏洞，表明安全已从附加项变为基础设施级诉求。**多 Agent 协作**进入密集试错阶段，Claude Code 的 Agent Teams、OpenCode 的 subagent 编排、Gemini CLI 的子代理行为可信度问题同时爆发，说明多 Agent 编排已从概念验证进入工程化攻坚。**Windows 平台欠账**在各工具中普遍存在（Claude Code 文件截断、Codex WSL 性能崩溃、Copilot CLI hooks 全线告急、Kimi 自动登出），跨平台一致性仍是行业共性短板。与此同时，**模型生态碎片化**推动各工具加速 Provider 适配（Pi 新增 Ant Ling/NIM/OpenRouter，OpenCode 支持 Bedrock Mantle，Codex 推进 Responses API 稳定化），多模型兼容层抽象能力正成为核心竞争力。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | 活跃 Issue 数（精选） | 活跃 PR 数（精选） | 社区热度信号 |
|------|---------|---------------------|-------------------|-------------|
| **Claude Code** | ✅ v2.1.163（正式版） | 50+ 条（10 条精选） | 8 条（含安全插件） | AGENTS.md 需求 👍4060，全生态最高赞 Issue |
| **OpenAI Codex** | ✅ v0.137.0 + 4 个 alpha | 30+ 条（10 条精选） | 10 条（含沙箱/计费/遥测） | Linux 桌面版需求 👍474，5 版本密集迭代 |
| **Gemini CLI** | ✅ v0.45.1 + nightly | 30+ 条（10 条精选） | 10 条（4 个安全 PR） | 3 个 Auto Memory 安全 Issue 同日提出 |
| **Copilot CLI** | ✅ v1.0.60-0 | 35 条（10 条精选） | 1 条（疑似垃圾 PR） | 剪贴板问题 19 条评论，Windows hooks 阻断 |
| **Kimi Code CLI** | ❌ 无新版本 | 7 条热点 Issue | 6 条（5 条同社区开发者） | 403 鉴权阻断 + 性能回退，用户基本不可用 |
| **OpenCode** | ❌ 无新版本 | 10 条热点 Issue | 10 条（含安全修复） | LifetimeVip 连续提交 6 个安全/质量 Issue |
| **Pi** | ✅ v0.78.1 | 10 条热点 Issue | 10 条（8 条已合入） | OpenAI Codex 挂起 51 条评论，PR 合入速度最快 |

> **数据观察**：Claude Code 和 Codex 在版本迭代频率和社区体量上领先；Pi 的 PR 合入效率最高（10 条中 8 条已合入）；Copilot PR 贡献活动处于低谷；Kimi 面临可用性危机但社区开发者（Pluviobyte）自发补位。

---

## 3. 共同关注的功能方向

### 🔒 安全加固（7/7 工具共同关注）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | credential-guard 插件拦截硬编码密钥 |
| Gemini CLI | OAuth 原子写入、IPI 防御、私网 IP 绕过修复 |
| OpenCode | read-before-edit 缺失、prompt injection via system-reminder |
| Codex | RMCP OAuth token 刷新、Windows 沙箱安全隔离 |
| Copilot CLI | BYOK Azure OpenAI 限流重试缺陷 |
| Kimi Code | 403 鉴权阻断、自动登出 |
| Pi | Shell 命令误杀自身进程的安全隔离修复 |

### 🤖 多 Agent 编排（5/7 工具集中爆发）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | Agent Teams 重复 worker、token 空转、工作树冲突 |
| Codex | 子代理状态查询、父子等待、自定义 agents 回归 |
| Gemini CLI | generalist 子代理挂起、MAX_TURNS 谎报成功 |
| OpenCode | subagent 无限重试烧钱（$15+/次）、compaction 丢上下文 |
| Qwen Code | daemon 多 client 状态同步 |

### 🪟 Windows 平台体验（5/7 工具存在明显短板）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | 文件静默截断、TUI 崩溃 |
| Codex | Computer Use 引导失败、WSL 极慢、历史会话打不开 |
| Copilot CLI | hooks 执行失败、控制台句柄缺失 |
| Kimi Code | 自动登出 |
| Pi | 远程 Linux 路径解析错误 |

### 📊 用量/计费透明度（4/7 工具持续反馈）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | 周限额重置异常、1M context 额度错误触发 |
| Codex | 企业月度积分限额展示（v0.137 新增）、gpt-5.3-codex 定价页可见但不可用 |
| Copilot CLI | BYOK 429 限流无退避 |
| OpenCode | DeepSeek V4 Pro 降价 75% 后用量限制未同步调整 |

### 🔌 MCP/插件生态（4/7 工具高频讨论）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | MCP server 注册后工具不显示、plugin.json 缺失 |
| Codex | RMCP OAuth 连接健壮性、streamable HTTP 重试 |
| Gemini CLI | MCP OAuth token 原子写入 |
| Copilot CLI | postToolUse hook 缺失、子 agent 挂起 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 | 当前阶段 |
|------|---------|---------|-------------|---------|
| **Claude Code** | 企业级 AI 编码助手，强调多 Agent 协作和安全合规 | 企业开发团队、多 IDE 混用用户 | Agent Teams 架构、版本范围管控、credential-guard 安全插件 | 从功能上线转向企业级可靠性 |
| **OpenAI Codex** | 全平台 AI 编码桌面+CLI 一体化工具 | 教育/企业用户、桌面端重度用户 | Rust 实现、Desktop App + CLI 双轨、Responses API 深度集成 | 快速迭代期，Windows 体验补课 |
| **Gemini CLI** | Google 生态深度集成的终端 AI 开发者 | Google Cloud 用户、安全敏感场景 | 安全加固 sprint、Auto Memory、AST 感知工具链 | 安全+稳定性深化阶段 |
| **Copilot CLI** | GitHub 生态原生 AI 编码 CLI | GitHub 企业用户、VS Code 用户 | Mission Control 会话共享、LSP 集成、Vim 体验 | 功能完善期，Windows 回归修复 |
| **Kimi Code CLI** | Moonshot AI 模型原生 CLI 工具 | 国内用户、Kimi 模型用户 | 会话恢复、Shell 工具回显、图片格式兼容 | 可用性危机期，需紧急修复 |
| **OpenCode** | 开源多模型 AI 编码平台（Go + TUI） | 开源社区、多模型用户、自建部署 | Go 实现、多 Provider 抽象、事件源会话管理 | 质量可靠性攻坚期 |
| **Pi** | 轻量级可扩展 AI 编码终端 | 个人开发者、远程开发场景 | TypeScript、Extension API、多 Provider 适配 | 生态扩展期，Provider 适配密集 |

**关键差异维度：**

- **开源 vs 闭源**：OpenCode（全开源）和 Pi（开源）社区贡献活跃；Claude Code/Codex/Copilot 以官方驱动为主
- **模型绑定深度**：Kimi Code 深度绑定 Moonshot 模型；OpenCode/Pi 强调多模型无关；Claude Code/Codex/Copilot 绑定各自模型但支持部分第三方
- **桌面端投入**：Codex 投入最大（Desktop App + CLI）；Pi/OpenCode 以 TUI 为主；Claude Code/Copilot 以 IDE 扩展为主
- **企业管控能力**：Claude Code 领先（版本范围管控、安全插件）；Codex 跟进（云配置包下发、EDU 工作区）

---

## 5. 社区热度与成熟度

### 社区活跃度排名

| 排名 | 工具 | 活跃度评级 | 判断依据 |
|------|------|-----------|---------|
| 1 | **Claude Code** | 🔥🔥🔥🔥🔥 | 50+ 活跃 Issue，👍4060 超级热点，8 个 PR，正式版发布 |
| 2 | **OpenAI Codex** | 🔥🔥🔥🔥🔥 | 5 版本密集迭代，30+ Issue，10 个 PR，474👍 功能请求 |
| 3 | **Gemini CLI** | 🔥🔥🔥🔥 | 安全 sprint 集中，10 个 PR（4 个安全），3 个 Auto Memory Issue 同日提出 |
| 4 | **OpenCode** | 🔥🔥🔥🔥 | LifetimeVip 系统性安全报告，10 个 PR，68 条评论定价讨论 |
| 5 | **Pi** | 🔥🔥🔥 | PR 合入速度最快（8/10），10 个 PR，51 条评论热点 Issue |
| 6 | **Copilot CLI** | 🔥🔥 | 35 条 Issue 但仅 1 个 PR（疑似垃圾），社区贡献低迷 |
| 7 | **Kimi Code CLI** | 🔥 | 403 阻断性 Bug，社区开发者自发补位（Pluviobyte 5/6 PR） |

### 成熟度评估

| 成熟度阶段 | 工具 | 特征 |
|-----------|------|------|
| **快速扩张期** | Codex、Claude Code | 高频版本迭代，新功能密集上线，社区体量快速增长 |
| **质量深耕期** | Gemini CLI、OpenCode | 安全加固集中，核心路径稳定性重构，从"能用"到"好用" |
| **生态构建期** | Pi | Provider 适配密集，Extension API 快速成长，社区贡献活跃 |
| **稳定维护期** | Copilot CLI | 功能趋于完善，版本节奏放缓，Windows 回归需关注 |
| **危机应对期** | Kimi Code CLI | 鉴权阻断 + 性能回退，需紧急修复恢复用户信任 |

---

## 6. 值得关注的趋势信号

### 趋势一：安全从"事后脱敏"转向"架构级前置"

**信号**：Claude Code 的 credential-guard 插件在写入前拦截、Gemini CLI 的 IPI 锁出防御、OpenCode 社区对 read-before-edit 缺失的系统性揭露——安全不再是在输出层做 PII 过滤，而是在工具调用链路上建立强制校验层。

**对开发者的价值**：如果你正在构建 AI Agent 工具，安全架构需要从设计阶段嵌入，而非事后补丁。PreToolUse 钩子 + 内容扫描 + 沙箱隔离将成为标配。

### 趋势二：多 Agent 编排进入"信任危机"时刻

**信号**：5 个工具同时爆发子代理挂起、无限重试、谎报成功、token 空转等问题。Claude Code 的 Agent Teams 重复生成 10-151 个 worker、OpenCode 的 subagent 单次烧掉 $15+——多 Agent 编排的可靠性已成为用户信任的核心威胁。

**对开发者的价值**：多 Agent 系统的核心挑战已从"能不能跑"转向"能不能信"。需要建立子代理执行的可观测性（实际轮次、截断状态、真实退出码）和熔断机制（最大重试、费用上限）。

### 趋势三：Windows 平台正在成为用户增长瓶颈

**信号**：Claude Code 文件截断、Codex WSL 崩溃、Copilot CLI hooks 全线失效、Kimi 自动登出——Windows 用户的体验差距在各工具中普遍存在，而 Windows 是企业开发的主力平台。

**对开发者的价值**：跨平台测试覆盖（尤其是 Windows + WSL 组合场景）需要提升到与 macOS/Linux 同等的优先级。Windows 沙箱、路径处理、控制台句柄、PowerShell 行为差异是高频雷区。

### 趋势四：模型无关性（Model Agnostic）成为核心竞争力

**信号**：Pi 新增 Ant Ling/NIM/OpenRouter/Bedrock Mantle 等 5+ Provider，OpenCode 支持 Bedrock OpenAI 兼容端点，Codex 推进 Responses API 标准化——用户不再愿意被单一模型锁定，多模型灵活切换成为刚需。

**对开发者的价值**：构建统一的 Provider 抽象层（参数映射、认证适配、能力检测）比深度优化单一模型更有长期价值。`maxTokens` vs `max_completion_tokens`、`role: "developer"` 支持、usage 字段缺失等兼容性问题需要系统化处理。

### 趋势五：社区安全研究者正在成为质量治理的重要力量

**信号**：OpenCode 的 LifetimeVip 连续提交 6 个安全/质量 Issue（read-before-edit、prompt injection、compaction 丢失、retry loop、session 删除竞态），Kimi Code 的 Pluviobyte 贡献了 5/6 的活跃 PR——社区开发者正在系统性地弥补官方团队的覆盖盲区。

**对开发者的价值**：建立结构化的漏洞报告奖励机制和快速响应通道，将社区安全研究者转化为质量治理的外部力量，是提升产品可靠性的高效路径。

---

> **总结**：2026 年 6 月的 AI CLI 工具生态正处于关键分水岭——功能竞赛的窗口期正在关闭，安全可靠性、多 Agent 编排可信度、跨平台一致性将成为下一阶段的竞争主战场。对于技术决策者，建议优先评估工具的安全架构成熟度和多 Agent 稳定性；对于开发者，关注 Provider 抽象层设计和子代理可观测性将是最具长期价值的技术投入方向。

---

*报告生成：OWL（ZOO 出品）｜数据来源：各工具 GitHub 公开社区数据｜分析窗口：2026-06-04 ~ 2026-06-05*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-06-05 | 来源：anthropics/skills**

---

## 1. 热门 Skills 排行（PR 关注度 Top 8）

| # | Skill | 作者 | 状态 | 核心功能 |
|---|-------|------|------|----------|
| 1 | **skill-quality-analyzer & skill-security-analyzer** | eovidiu | 🟢 OPEN | 元技能（meta-skills）：对 Skills 进行质量五维分析 + 安全审查，解决社区"如何评估 Skill 好坏"的根本问题 |
| 2 | **agent-creator** | SyedaQurratAI | 🟢 OPEN | 创建任务专属 Agent 集合，同时修复多工具并行调用评估和 Windows 支持 |
| 3 | **aurelion-kernel suite** (kernel/advisor/agent/memory) | Chase-Key | 🟢 OPEN | 四层认知框架：结构化思维模板 + 顾问 + Agent + 记忆，面向专业知识的 AI 协作管理 |
| 4 | **testing-patterns** | 4444J99 | 🟢 OPEN | 全栈测试技能：Testing Trophy 模型、AAA 模式、React 组件测试、边界用例 |
| 5 | **servicenow** | Vanka07 | 🟢 OPEN | ServiceNow 平台全覆盖：ITSM/ITOM/ITAM/FSM/HRSD/SecOps/IntegrationHub |
| 6 | **shodh-memory** | varun29ankuS | 🟢 OPEN | AI Agent 持久记忆系统，跨会话维护上下文，主动调用 `proactive_context` 关联记忆 |
| 7 | **document-typography** | PGTBoos | 🟢 OPEN | 排版质量控制：防止 AI 生成文档中的孤行、寡行、编号错位等排版问题 |
| 8 | **n8n-builder & n8n-debugger** | Wolfe-Jam | 🟢 OPEN | n8n 工作流构建与调试专家技能，含 .faf 格式持久化项目上下文管理 |

> 🔗 链接：[PR #83](https://github.com/anthropics/skills/pull/83) | [PR #1140](https://github.com/anthropics/skills/pull/1140) | [PR #444](https://github.com/anthropics/skills/pull/444) | [PR #723](https://github.com/anthropics/skills/pull/723) | [PR #568](https://github.com/anthropics/skills/pull/568) | [PR #154](https://github.com/anthropics/skills/pull/154) | [PR #514](https://github.com/anthropics/skills/pull/514) | [PR #190](https://github.com/anthropics/skills/pull/190)

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 热度 | 核心诉求 |
|----------|-----------|------|----------|
| **🏢 企业级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) | 💬13 👍7 | 组织内 Skill 库共享、直接分享链接，告别手动下载→Slack→上传的繁琐流程 |
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 💬7 👍2 | 社区 Skill 冒充 `anthropic/` 官方命名空间，存在信任边界滥用风险 |
| **🛠️ Skill 创建工具链修复** | [#556](https://github.com/anthropics/skills/issues/#556) | 💬9 👍6 | `run_eval.py` 在 `claude -p` 模式下 Skill 触发率 0%，评估工具链不可用 |
| **🖥️ Windows 兼容性** | [#1099](https://github.com/anthropics/skills/issues/1099) / [#1050](https://github.com/anthropics/skills/issues/1050) | 💬多 | `skill-creator` 脚本在 Windows 上 subprocess/encoding 全面崩溃 |
| **🔗 MCP 与 Skills 融合** | [#16](https://github.com/anthropics/skills/issues/16) | 💬4 | 将 Skill 能力暴露为 MCP 接口，统一 AI 软件 API 协议 |
| **📦 多文件预加载** | [#1220](https://github.com/anthropics/skills/issues/1220) | 💬2 | 支持 Skill 引用文件的多文件预加载/内联打包，突破仅 SKILL.md 注入的限制 |
| **🔄 去重与插件管理** | [#189](https://github.com/anthropics/skills/issues/189) | 💬6 👍8 | `document-skills` 与 `example-skills` 内容重复，导致 Context Window 浪费 |

**趋势总结：** 社区需求正从"做什么 Skill"转向"如何管理、共享、评估 Skill"——**Skill 治理（Skill Governance）**成为新焦点。

---

## 3. 高潜力待合并 Skills

以下 PR 活跃度高、解决实际问题，近期落地可能性较大：

| PR | Skill | 潜力依据 |
|----|-------|----------|
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | 解决社区健康度仅 25% 的痛点，低风险高价值的基础设施 PR |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF 大小写修复** | 8 处文件名大小写不匹配，Linux 环境下直接崩溃，修复简单明确 |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML 校验** | 防止 description 含 `:` 导致静默截断，提升工具链健壮性 |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX w:id 碰撞修复** | 修复带书签文档的 tracked changes 损坏问题，根因清晰 |
| [#363](https://github.com/anthropics/skills/pull/363) | **feature-dev 工作流修复** | TodoWrite 覆盖导致 Phase 6/7 被跳过，影响核心开发流程 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator Windows 修复** | 单行修复 ×2，解决 Windows 11 上完全不可用的问题 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：从"Skill 创作自由"走向"Skill 治理体系"——用户不再满足于单个 Skill 的功能，而是需要企业级共享、安全审计、质量评估、跨平台兼容的完整 Skill 生命周期管理。**

---

*报告生成时间：2026-06-05 | 数据来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

# Claude Code 社区动态日报 — 2026-06-05

---

## 🧭 今日速览

Claude Code 发布新版本 **v2.1.163**，引入版本范围管控（`requiredMinimumVersion`/`requiredMaximumVersion`）和 `/plugin list` 命令，企业级管理能力显著增强。社区讨论最热的两条 Issue 分别是 AGENTS.md 标准化支持（👍4060）和 Windows 平台文件写入静默截断 bug（22条评论）。PR 层面新增了凭据安全防护插件和多个内部工具修复，整体质量工程投入持续加码。

---

## 🚀 版本发布

### **v2.1.163**

- **版本范围管控**：新增 `requiredMinimumVersion` 和 `requiredMaximumVersion` 两个受管设置项，Claude Code 启动时会检查自身版本是否在允许范围内，若不符合则拒绝运行并引导用户升级到合规版本 —— 面向企业统一运维管理场景。
- **新增 `/plugin list` 命令**：可列出已安装的插件，支持 `--enabled`/`--disabled` 过滤标志，插件管理体验大幅改善。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 评论 | 👍 | 为什么重要 |
|---|------|------:|---:|-----------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | [enhancement] Feature Request: Support AGENTS.md | 308 | **4060** | 全社区最高赞 Issue。Cursor、Codex、Amp 等已开始统一支持 AGENTS.md 标准，而 CLAUDE.md 过于 Claude Code 专属，不利于跨工具协作。如果 Claude Code 不跟进，在多工具混用工作流中将处于劣势。社区呼声极高，是未来兼容性的战略方向。 |
| [#53940](https://github.com/anthropics/claude-code/issues/53940) | [bug] Cowork Edit/Write 工具在 Windows 上静默截断文件 | 22 | 11 | Windows 平台确定性复现的严重 bug：文件编辑/写入工具受字节缓冲区上限影响静默截断文件，所有文件大小上均可触发。这会直接导致代码丢失，属于数据完整性问题，优先级极高。 |
| [#55586](https://github.com/anthropics/claude-code/issues/55586) | [bug] Agent Teams 单次生成 10-151 个重复 worker 实例 | 12 | 1 | Agent Teams 生成单个队友时会创建大量重复 worker，每个都消耗完整体上下文并主动编辑文件，导致资源爆炸和文件冲突。严重阻碍多 Agent 协作功能的使用。 |
| [#52472](https://github.com/anthropics/claude-code/issues/52472) | [bug] 每周用量限制重置时间异常，周期变为 5 天而非 7 天 | 20 | 3 | 周限额重置逻辑出现偏差，用户实际可用的用量周期缩短，直接影响付费套餐的价值感知。跨平台（macOS + VSCode），用户体验层面较大。 |
| [#54393](https://github.com/anthropics/claude-code/issues/54393) | [enhancement] Post-mortem: 单次通宵自主运行中发现 12 个多 Agent 协调 bug | 11 | 0 | 通用多 Agent 协调的项目事后分析报告，不限于单一功能请求。列出了 12 个协调 bug 的系统性清单，对 Anthropic Agent Teams 路线规划参考价值很高。 |
| [#59750](https://github.com/anthropics/claude-code/issues/59750) | [bug] Windows Terminal 上 claude agents TUI 完全无响应（v2.1.143） | 5 | 5 | Windows 终端上 TUI 渲染崩溃+输入死循环，对 Windows 重度用户是阻断性 bug。5 个 👍 虽不多，但复现步骤清晰，修复需求明确。 |
| [#47930](https://github.com/anthropics/claude-code/issues/47930) | [bug] Agent Teams 主会话在空闲通知上循环，消耗 13-22% 输入 token | 4 | 6 | Token 燃烧效率问题：lead session 因重复响应空闲通知和重复 task_assignment 回显，浪费 13-22% 的输入 token。对用户成本和使用体验都有实质影响。 |
| [#64445](https://github.com/anthropics/claude-code/issues/64445) | [bug] 未选择 1M 上下文模式却消耗 1M 上下文额度 | 4 | 1 | 1M context 额度被错误触发，用户并未主动选择 1M 模式。与费用直接挂钩，属于计费准确性问题。 |
| [#52051](https://github.com/anthropics/claude-code/issues/522051) | [enhancement] 同仓库并行 session 工作树冲突 | 2 | 1 | 并行多 session 在同一 repo 运行时，未提交编辑互相覆盖、分支切换互相干扰，是高频使用场景下的实际痛点。需求方向是工作树沙箱化。 |
| [#65516](https://github.com/anthropics/claude-code/issues/65516) | [bug] MCP server 通过 `claude mcp add` 注册后工具不出现（claude.ai 共存时） | 2 | 0 | claude.ai web connector 与本地 MCP server 同时存在时，本地 MCP server 工具不可见。MCP 生态扩展性和本地/云端协调问题。 |

---

## 🔧 重要 PR 进展（精选 8 条）

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| [#65344](https://github.com/anthropics/claude-code/pull/65344) | fix(scripts): 修复 markStale 过早返回并添加 --debug 标志 | OPEN | 修复 `scripts/sweep.ts` 中 `markStale()` 函数在分页迭代时提前退出的逻辑 bug，同时为 `auto-close-duplicates.ts` 添加 `--debug` 标志，提升内部维护脚本的可靠性。 |
| [#44742](https://github.com/anthropics/claude-code/pull/44742) | fix: VS Code 扩展 session 持久化数据丢失的诊断工具 | **CLOSED** | 解决 VS Code 扩展主会话对话记录无法可靠写入磁盘的严重 bug（IDE 重启/更新后历史消失，关联 12+ 重复 Issue）。新增诊断脚本 `scripts/diagnose-session-persistence.ts`，帮助用户和工程师排查根因。 |
| [#65286](https://github.com/anthropics/claude-code/pull/65286) | fix(plugins): 为 plugin-dev 添加缺失的 plugin.json 清单 | OPEN | 新增 `plugin-dev` 插件的 `.claude-plugin/plugin.json` 清单文件，修复其无法通过标准插件机制发现和安装的问题。 |
| [#65314](https://github.com/anthropics/claude-code/pull/65314) | scripts: 添加 detect-theme-color-issues 聚类检测亮色终端颜色 bug | OPEN | 新增一个分类扫描脚本，自动将"亮色主题下文本不可见"的相关 Issue 聚类，并关联到已知的 `color7`/`color0` 碰撞 bug 家族，提升 Issue 管理效率。 |
| [#61691](https://github.com/anthropics/claude-code/pull/61691) | [scripts] GitHub connector 显示 Connected 但无工具的诊断脚本 | OPEN | 针对 Windows 用户 GitHub MCP 连接器"Connected 但零工具暴露"的反复出现的 bug，新增 PowerShell 诊断/修复脚本（关联 #61682、#28695、#41658、#57585 等相关 Issue）。 |
| [#62099](https://github.com/anthropics/claude-code/pull/62099) | 新增 credential-guard 插件防止硬编码密钥 | OPEN | 新增 **credential-guard** 插件（通过 PreToolUse 钩子扫描 Write/Edit/MultiEdit/Bash 中 20+ 种凭据模式），在内容写入文件前拦截硬编码密钥。这对有安全合规需求的企业用户价值极高。 |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | s | OPEN | 仅有单字符描述，内容不明，需进一步跟进。 |
| [#65223](https://github.com/anthropics/claude-code/pull/65223) | Spelling: 修正安全引导插件中的拼写错误 | **CLOSED** | 将安全引导插件中的 "reqwest" 更正为 "request"，细节修复。 |

---

## 📊 功能需求趋势

从今日 50 条活跃 Issue 中，提炼出社区最关注的 **5 大方向**：

1. **🔌 多 Agent 协作（Agent Teams）** — 热度最高的功能方向。涉及 teammate 重复 spawn、空转 token 消耗、工作树冲突、多 agent 协调 bug 等，均指向 Agent Teams 功能正在快速成熟但稳定性仍待夯实。（#55586、#54393、#47930、#52051）

2. **🔗 MCP 插件生态** — MCP server 注册后工具不显示、连接器诊断、插件安装依赖冲突、plugin.json 缺失等 Issue 密集出现，说明 MCP 扩展生态已进入高频使用阶段，体验和可靠性是下一阶段主要矛盾。（#65516、#65286、#50145、#61691）

3. **🪟 Windows 平台体验** — 文件截断、TUI 崩溃、权限文档缺失、PowerShell 行为等多个 Windows 专属 Bug 同时活跃，Windows 用户的体验差距仍然显著。（#53940、#59750、#43364、#42318、#41801）

4. **💰 用量与计费透明度** — 周限额重置时间异常、1M context 额度错误触发、Agent Teams token 空转等 Issue 持续出现，用户对于用量可见性和计费准确性的诉求强烈。（#52472、#64445、#65514、#47930）

5. **📝 文档补全** — 来自 `coygeek` 的系统性文档贡献仍在持续（10+ 条文档修复 Issue），覆盖 headless 模式、hooks、MCP、Bedrock、resume 行为等，反映官方文档滞后于功能迭代。（#42309、#43363、#41794、#41797、#41265 等）

---

## 🎯 开发者关注点总结

| 痛点 | 具体表现 | 影响范围 |
|------|---------|---------|
| **Agent Teams 稳定性** | 重复 worker、token 空转、工作树冲突 | 多 Agent 用户 |
| **Windows 平台一等公民化不足** | TUI 崩溃、文件截断、PowerShell 行为差异 | Windows 开发者 |
| **跨工具工作流互操作** | CLAUDE.md vs AGENTS.md，MCP 共存冲突 | 多 IDE / 多 Agent 用户 |
| **用量/计费透明度** | 莫名其妙的 1M 模式扣费、周限额重置异常 | 付费订阅用户 |
| **插件生态成熟度** | Plugin.json 缺失、connector 可靠性、凭据安全 | 插件用户/企业用户 |

> **一句话总结**：Agent Teams 和 MCP 生态正在成为 Claude Code 的双引擎，但稳定性和跨平台一致性是当前的短板；企业版本管控（v2.1.163）和安全插件（credential-guard）的出现，表明 Anthropic 正在将重心从"功能上线"转向"企业级可靠性"。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-06-05 | 来源：github.com/openai/codex**

---

## 一、今日速览

Codex Rust 连续密集发布 5 个版本（v0.137.0 正式版 + v0.138.0-alpha.1~4 系列），TUI 快捷键、企业计费展示等新功能入水；社区积压了大量 Windows（Computer Use、WSL 性能/会话兼容）和 macOS（重复自启动 crash、fd 耗尽）稳定性 Bug，评论区反应强烈。多个 PR 集中在 Windows 沙箱、响应式计费/遥测、Token 刷新以及 MCP/RMCP 连接健壮性上。

---

## 二、版本发布

| 版本 | 类型 | 关键变更 |
|---|---|---|
| **rust-v0.137.0** | 正式 | 新特性（见下）、质量固化 |
| **rust-v0.138.0-alpha.4** | 预发 | 迭代收尾 |
| **rust-v0.138.0-alpha.3** | 预发 | 迭代修复 |
| **rust-v0.138.0-alpha.2** | 预发 | 迭代修复 |
| **rust-v0.138.0-alpha.1** | 预发 | 新特性引入 |

### 主要新功能（来自 v0.137.0 Release Notes）

- **TUI 增强：F13–F24 绑定、可搜索菜单粘贴、紧凑推理状态栏**
- **企业管理：月度积分限额展示、云端配置包下发、EDU 工作区支持**

参考链接：
- Release v0.137.0: [openai/codex/releases/tag/rust-v0.137.0](https://github.com/openai/codex/releases/tag/rust-v0.137.0)
- Release v0.138.0-alpha.4: [openai/codex/releases/tag/rust-v0.138.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.138.0-alpha.4)

---

## 三、社区热点 Issues（取评论数最高 & 1 赞数最高 各 5 条）

### 😂 高讨论量 Issue

> 筛选逻辑：先按评论数降序取 Top 5；若评论数相同则按👍数排序。

1. **#11023 Codex desktop app for Linux** — 89 评论 / 474👍
   - 核心内容：macOS App 在笔记本上因功耗问题几乎不可用，用户希望有 Linux 桌面客户端。
   - 意义：**Linux 桌面端需求强烈**，桌面版生态扩展呼声明确。
   - 链接: [openai/codex/issues/11023](https://github.com/openai/codex/issues/11023)

2. **#24675 Codex Desktop keeps stale app connector link after reauth-required 401 until codex_apps cache is cleared** — 20 评论 / 13👍
   - macOS App 在 Linear 连接器 401 后仍复用旧链接，只有清理本地缓存才可恢复。
   - 链接: [openai/codex/issues/24675](https://github.com/openai/codex/issues/24675)

3. **#25391 Windows Computer Use plugin fails to bootstrap: native pipe path is unavailable** — 20 评论 / 1👍
   - Windows Computer Use 插件引导失败，因 "原生管道路径不可用"。
   - 链接: [openai/codex/issues/25391](https://github.com/openai/codex/issues/25391)

4. **#25715 Codex App is Unusable Slow with WSL as Agent environment** — 19 评论 / 22👍
   - Windows + WSL 作为 Agent 环境时极慢，CLI 直连 WSL 却表现正常。
   - 链接: [openai/codex/issues/25715](https://github.com/openai/codex/issues/25715)

5. **#26104 Desktop Codex cannot open older chat sessions after recent update** — 14 评论 / 0👍
   - 更新后 Windows Desktop 无法打开历史会话，属数据兼容回退。
   - 链接: [openai/codex/issues/26104](https://github.com/openai/codex/issues/26104)

### 🔥 高赞同 Issue

**按👍数降序取 Top 5（已出现在高讨论量中的不重复计入）。**

1. **#11023 Codex desktop app for Linux** — 474👍（同上）

2. **#25715 Codex App is Unusable Slow with WSL as Agent environment** — 22👍（同上）

3. **#9252 Remove 2 leading spaces from cmd suggestion** — 49 评论 / 13👍
   - TUI 命令建议前有两个多余空格，影响复制与可读性。虽属小问题但讨论热烈。
   - 链接: [openai/codex/issues/9252](https://github.com/openai/codex/issues/9252)

4. **#21862 Chrome plugin missing from Codex Plugin Directory** — 12 评论 / 17👍
   - 插件目录缺少 Chrome 扩展，Windows 用户受影响最大。
   - 链接: [openai/codex/issues/21862](https://github.com/openai/codex/issues/21862)

5. **#24675 Codex Desktop keeps stale app connector link after reauth-required 401** — 13👍（已在高讨论列表中上榜）

---

## 四、重要 PR 进展（10 条）

### 合并 / 即将合入的高价值 PR

| # | 标题 | 作者 | 类型 | 价值 |
|---|---|---|---|---|
| #26471 | Improve Windows sandbox setup refresh diagnostics | iceweasel-oai | **CLOSED** | 改善 Windows 沙箱刷新错误的可观测性 |
| #26307 | Respect Windows sandbox backend in exec policy | iceweasel-oai | OPEN | 让 exec-policy 识别 Windows 后台沙箱，避免误拦合法命令 |
| #26461 | Extract shared Cargo CI setup action | anp-oai | OPEN | CI 前置因子，避免 clippy/nextest 配置漂移 |
| #25976 | Use stable item IDs for Responses API calls | owenlin0 | OPEN | 为 Responses API 往返项生成稳定 ID，利于审计与计费 |
| #26450 | Add remote control pairing status RPC | hefuc-oai | OPEN | Remote control 配对状态查询接口（实验性 app-server v2 RPC） |

### 新特性 / 体验 PR

| # | 标题 | 作者 | 价值 |
|---|---|---|---|
| #26487 | Add Responses Lite request body support | rka-oai | 支持 `reasoning.context="all_turns"` 等 Responses Lite 参数 |
| #26486 | Route image edits through referenced file paths | won-openai | 图片编辑走显式引用路径而非从历史推断，降低幻觉 |
| #26484 | Add turn profiling analytics | aibrahim-oai | 在 `codex_turn_event` 中暴露采样时间/开销，便于分析瓶颈 |

### 稳定性 / 兼容性 PR

| # | 标题 | 作者 | 价值 |
|---|---|---|---|
| #26482 | Refresh expired OAuth tokens before startup (RMCP) | anp-oai | 修复 RMCP 1.7 升级后 OAuth token 过期未刷新的问题 |
| #25147 | Retry streamable HTTP initialize failures | ssetty-oai | 对 RMCP 启动与 tools/list 的瞬态错误做重试 |
| #25158 | Support more Vim normal commands | jinghanx88 | 增加 `gg/G/dG/yG/cw` 等 Vim 命令，补全大 Composer 体验 |

参考链接：
- #26471: [openai/codex/pull/26471](https://github.com/openai/codex/pull/26471)
- #26307: [openai/codex/pull/26307](https://github.com/openai/codex/pull/26307)
- #26461: [openai/codex/pull/26461](https://github.com/openai/codex/pull/26461)
- #25976: [openai/codex/pull/25976](https://github.com/openai/codex/pull/25976)
- #26450: [openai/codex/pull/26450](https://github.com/openai/codex/pull/26450)
- #26487: [openai/codex/pull/26487](https://github.com/openai/codex/pull/26487)
- #26486: [openai/codex/pull/26486](https://github.com/openai/codex/pull/26486)
- #26484: [openai/codex/pull/26484](https://github.com/openai/codex/pull/26484)
- #26482: [openai/codex/pull/26486](https://github.com/openai/codex/pull/26486)
- #25147: [openai/codex/pull/25147](https://github.com/openai/codex/pull/25147)
- #25158: [openai/codex/pull/25158](https://github.com/openai/codex/pull/25158)

---

## 五、功能需求趋势（从 Top 30 Issues 提取）

### 1. 桌面客户端生态扩展
- **Linux 桌面版**（#11023，474👍）是最强呼声
- macOS 已有版本，Windows 是企业/教育用户集中场景
- 相关：#11023

### 2. Windows 平台稳定性（本次集中爆发）
- Computer Use 在 Win10/Win11 引导、截图失败（#25391、#25799、#25178、#26458）
- WSL 环境性能与路径扫描问题（#25715、#26149）
- 历史会话打不开（#26104）
- 总计 **6 条** Windows 相关问题进入 Top 30

### 3. 性能：启动与执行耗时被多次提及
- macOS App 重复自启动耗尽 fd、卡死系统（#25882，9 评论）
- Desktop 创建新线程无限期挂起（#13709、#13869）
- WSL 插件目录扫描导致命令延迟（#26149）

### 4. 多代理与子代理编排
- Agent 状态查询 & 父子等待（#16900）
- 自定义 `.codex/agents` 在 v0.137 后回归（#26363，5👍，regression）
- 远程线程未接收自动化事件（#24280）

### 5. 模型与计费
- ChatGPT Plus 用户发现定价页列出但实际无法使用 `gpt-5.3-codex`（#26116、#26400）
- Cloud 代码审查静默失败 & 配额不一致（#15477）
- v0.137 已新增**企业月度积分限额展示**（与 #24812 相关）

### 6. IDE 与扩展
- VS Code 插件中心面板空白（#21863）
- 多用户共享 IPC 目录（#24680）
- Chrome 插件缺失（#21862）

### 7. 体验增强
- 长对话跳回顶部（#17193）
- 希望新增"朗读/重播"按钮（#21645，4👍）
- 聊天中缺少 "New Worktree" 分叉（#20221，9👍）

### 趋势小结
| 方向 | 热度 | 代表 |
|---|---|---|
| Windows 稳定性 | 🔴 极高 | #25391、#25715、#26149 |
| Linux 桌面版 | 🔴 极高 | #11023 |
| 多 Agent 编排 | 🟠 高 | #16900、#26363 |
| 模型/计费可用性 | 🟠 高 | #26116、#26400 |
| 性能/崩溃 | 🟡 中 | #25882、#13709 |
| IDE/插件 | 🟡 中 | #21862、#21863、#21645 |

---

## 六、开发者关注点（痛点 & 高频需求）

1. **Windows 用户增长迅速，但体验"欠账"明显**
   - Computer Use、WSL、exec-policy、截图、会话兼容，**每个环节都有 blocker**。建议优先修复 Windows sandbox + RMCP pipe 路径两条主线。

2. **认证与维修循环**
   - #24675（过期 connector 卡住）和 #26482（RMCP OAuth 未刷新）说明：**token 生命周期管理在桌面端与 CLI 端不对称**。应统一为"失败即刷新"策略。

3. **CLI 与 Desktop 行为不一致**
   - WSL 场景下 CLI 正常但 Desktop 慢（#25715）；macOS CLI 正常但 Desktop 挂起（#13709、#13869）。两端的执行路径需要收敛。

4. **可观测性与诊断**
   - 多方反映"看不出为什么卡"：sandbox 刷新黑盒（#24391）、重复自启动（#25882）、Desktop 会话打不开（#26104）。**调试日志与诊断面板**是共同需求。多个 PR（#26471、#25955、#26484）已在针对性补强。

5. **多代理与回归风险**
   - v0.137.0 发布后立刻出现 `.codex/agents` 不可选（#26363）。说明回归覆盖不够；需要为 SubAgent / Custom Agents 增加自动化回归锅。

6. **企业与教育场景**
   - 云配置包下发、EDU 工作区、月度积分限额——这些 feature 与 #24675、#26116 暴露的 billing/auth 问题**矛盾**，需要同步推进。

---

**报告生成：OWL（ZOO 出品）｜数据来源：github.com/openai/codex 公开 commits/issues/PRs ｜窗口：2026-06-04 ~ 2026-06-05**

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-05

---

## 1. 今日速览

今日社区活跃度高，**新发布 v0.45.1 稳定补丁**并向 v0.47.0-nightly 持续迭代。**安全问题密集涌现**（4 个 P1/P2 安全 PR 同日开启），涵盖 OAuth 原子写入、Prompt Injection 防御和私网 IP 绕过。多个长期运行的核心 Bug（Agent 挂起、Shell 卡死、终端崩溃修复）进入方案重构阶段。

---

## 2. 版本发布

### ✅ 已发布

| 版本 | 类型 | 说明 |
|------|------|------|
| **v0.45.1** | 稳定补丁 | Cherry-pick 了 PR #27570 的提交，修复 3.5 Flash GA 过渡逻辑中未覆盖的场景 |
| **v0.47.0-nightly.20260604.g4196596f7** | Nightly | CI 优化（PR size labeler、`pull_request_target` fork PR 写权限修复）及相关 nightly 版本号自动 bump |

_release/v0.45.0 → v0.45.1_ 的修复主要围绕模型路由过渡中遗留的访问权限问题，建议 0.45.x 用户跟进升级。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 关注度 | 为什么重要 |
|---|-------|------|--------|-----------|
| 1 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent hangs** | 🐛 P1 Bug | 👍 8 / 💬 7 | 最高票 Issue。委派到 generalist 子代理时直接卡死（等待 1h+），是高频路径阻塞问题，临时方案是手动禁止子代理，影响大量日常用户。 |
| 2 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) **Robust component level evaluations** | 📋 EPIC | 💬 7 | 跟踪从行为测试（已有 76 个）向组件级评估扩展的基础工程方向，是质量体系建设核心。 |
| 3 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST-aware file reads/search/mapping** | 🔬 调研 | 👍 1 / 💬 7 | 探索用 AST 感知工具减少读文件 misaligned、降低 token 噪声并提升子代理效率的路径，调研结论将影响下一代 agent 工具链设计。 |
| 4 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent 达 MAX_TURNS 仍报告 GOAL 成功** | 🐛 P1 Bug | 👍 2 / 💬 6 | `codebase_investigator` 子代理在已达 max turns 未分析的情况下仍返回 success + GOAL，意味着 agent 在无声地丢失工作。需要修正子代理终止语义。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 不会主动使用 skills 和 sub-agents** | 🐛 P2 Bug | 💬 6 | 影响 agent 智能度体验的核心。即使开发者配置了 git/gradle skills，模型也不主动调用。 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell command 执行后卡在 "Waiting input"** | 🐛 P1 Bug | 👍 3 / 💬 4 | 简单命令完成后仍卡壳，显示等待输入。影响所有使用 shell 执行的用户体验。 |
| 7 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) **Browser Agent 忽略 settings.json 中的 maxTurns 覆盖** | 🐛 P2 | 💬 3 | 配置系统行为不一致 users 无法通过标准配置控制 browser agent 生命周期。 |
| 8 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Auto Memory 应确定性化脱敏 & 减少日志** | 🔒 安全 P2 | 💬 3 | Auto Memory 在加载 transcript 后再做脱敏，秘密已经过模型上下文——这是安全前置不足的设计问题。 |
| 9 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Auto Memory 无限重试低信号会话** | 🐛 P2 | 💬 3 | 无进度地反复尝试处理相同 session，影响后台性能和日志可观测性。 |
| 10 | [#22741](https://github.com/google-gemini/gemini-cli/issues/22741) **本地子代理应支持后台化（Ctrl+B）** | ✨ Feature P3 | 👍 2 / 💬 1 | 用户期望将探索类子代理放后台运行，减少主线程阻塞，有较高的用户体验提升潜力。 |

**质量预警**：三个 Auto Memory 质量/安全 Issue（#26525、#26523、#26522）均由同一维护者同日提出，显示该模块正在经历集中的安全审查。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 优先级 | 修复内容 |
|---|----|------|--------|---------|
| 1 | [#27664](https://github.com/google-gemini/gemini-cli/pull/27664) **write MCP OAuth tokens atomically** | OPEN | 🔒 P1 Security | 通过 temp file + rename 实现 MCP OAuth token 原子写入，防止 token 损坏，解决 #27663。 |
| 2 | [#27472](https://github.com/google-gemini/gemini-cli/pull/27664) **truncation lockout 防 IPI** | OPEN | 🔒 P1 Security | 在工具确认 UI 实现截断锁出，防止 Indirect Prompt Injection（IPI）攻击，修复关键 HITL 绕过漏洞 #23433。 |
| 3 | [#27502](https://github.com/google-gemini/gemini-cli/pull/27502) **修复 terminal resize 时 ioctl EBADF 崩溃** | OPEN | P1 Core | 修复 shell exit 事件与 React useEffect resize 竞态导致的崩溃，是 PR #27429 的升级方案。 |
| 4 | [#27473](https://github.com/google-gemini/gemini-cli/pull/27473) **resolve hostnames 后再做 private-IP 检查** | OPEN | P2 Security | 修复 `isBlockedHost()` 只检查 IP 字面量、hostnames 可绕过私网 IP 限制的问题。 |
| 5 | [#27463](https://github.com/google-gemini/gemini-cli/pull/27463) **preserve refresh_token in file-based cacheCredentials** | OPEN | P1-P2 Core | 修复 #21691，默认文件存储模式下 `refresh_token` 被覆盖的问题（PR #26924 只解决了加密存储路径）。 |
| 6 | [#27568](https://github.com/google-gemini/gemini-cli/pull/27568) **ripgrep 失败时回退到 legacy GrepTool** | OPEN | P1 Agent | 当 rg 不可用或环境失败时回退到 GrepTool，减少因搜索工具缺失导致的 agent 沉默失败。 |
| 7 | [#27572](https://github.com/google-gemini/gemini-cli/pull/27572) **修复 tmux 下 false positive 背景检测** | OPEN | — | tmux（尤其是 mosh）下误判终端背景色为白色，导致错误的 theme 切换和兼容性警告。 |
| 8 | [#27474](https://github.com/google-gemini/gemini-cli/pull/27474) **isFunctionCall/isFunctionResponse 空 parts 保护** | OPEN | P2 Agent | 修复 `Array.prototype.every([])` 空数组返回 `true` 的逻辑漏洞，用户空消息被误判为 function response。 |
| 9 | [#27341](https://github.com/google-gemini/gemini-cli/pull/27341) **strip functionCall.id / functionResponse.id before API call** | OPEN | P2 Agent | 修复工具调用后的次轮请求返回 400 "Unknown name 'id'" 错误，解决 #22774。 |
| 10 | [#27676](https://github.com/google-gemini/gemini-cli/pull/27676) **提高 Antigravity transition banner 展示上限** | OPEN | — | 允许迁移提示横幅持续显示（解除 5 次限制），确保 deprecation/reroute 通知不被隐藏。 |

**今日 PR 亮点**：安全相关 PR 集中登陆（#27664 OAuth 原子写、#27472 IPI 防御、#27473 私网绕过），表明维护者正在进行**集中的安全加固 sprint**。

---

## 5. 功能需求趋势

从今日全部 Issues/PRs 综合提炼：

| 方向 | 热度 | 代表 Issue / PR |
|------|------|----------------|
| **🔒 安全与 Prompt Injection 防御** | 🔥🔥🔥 极高 | #27664（OAuth 原子写）、#27472（IPI 锁出）、#27473（私网绕过）、#26525（Auto Memory 脱敏） |
| **🤖 Agent 稳定性 & 子代理行为** | 🔥🔥🔥 极高 | #21409（generalist 挂起）、#22323（MAX_TURNS 谎报成功）、#21968（不主动用 skills）、#23571（tmp 脚本乱写） |
| **🖥️ 终端 UI 稳定性** | 🔥🔥 高 | #27502（EBADF resize 崩溃）、#25166（shell 卡死）、#22267（browser agent 配置不生效）、#22186（get-shit-done 输出崩溃） |
| **🧠 Auto Memory 质量** | 🔥 中高 | #26525、#26523、#26522（同日三重发）、#26516（跟踪汇总），安全+体验双重改进 |
| **🔍 代码库感知能力（AST tools）** | 🔥 中 | #22745、#22747、#22746 系列，探索基于 AST 的精准文件读取和映射 |
| **⚙️ 子代理 UX 增强** | 🌱 中 | #22741（后台化 Ctrl+B）、#22093（无权限时自动触发） |
| **🌐 新模型 GA 过渡** | 🌱 过渡中 | #27570（Flash GA 过渡）、#27667（cherry-pick patch）|

**核心趋势判断**：当前社区正处于从"丰富功能"向"**安全加固 + 核心路径稳定性**"深化的阶段。多个长期积累的 shell crash、agent hang variant 找到了根因并正在以全新设计修复，而不是打补丁。

---

## 6. 开发者关注点：痛点与高频需求

### 🔴 高频痛点

| 痛点 | 具体表现 | 用户声音 |
|------|---------|---------|
| **Agent 挂起无出口** | generalist 子代理、shell 执行后无限卡住，无超时反馈 | "waited an hour before cancelling" |
| **子代理行为不可信** | 达到 max turns 仍返回成功状态码；不主动使用准备好的 skills | 隐性失败，破坏用户对 agent 工作流程的信任 |
| **终端竞态崩溃** | 窗口 resize、外部编辑器退出后 crash | 干扰日常高频使用路径 |
| **配置失效** | Browser Agent settings.json 覆盖被静默忽略 | 用户配置意图未得到尊重 |

### 📌 高频需求

1. **子可观测性与透明化**：用户需要真实的子代理执行状态（实际轮次、是否被截断），而非隐藏式静默成功
2. **shell 执行稳定性**：明确的输入输出生命周期信号，避免命令已结束但 UI 未解除
3. **安全加固**：从"PII 事后脱敏"转向"输入阶段确定性化"是明确呼声
4. **AST 增强工具**：代表对 "agent 更聪明地读代码"这一长期诉求的技术路径探讨

### 💡 建议关注的新人切入点

- **ripgrep fallback** (#27568)：逻辑清晰、影响面广，good first issue
- **isFunctionCall vacuous truth bug** (#27474)：根因明确，测试驱动修复

---

> *OWL · 数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 生成时间 2026-06-05*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-05

---

## 1. 今日速览

Copilot CLI 发布 **v1.0.60-0**，新增 billing 帮助主题、vim 风格导航键、Mission Control 会话共享状态展示等改进。社区 Issue 活跃度较高，过去 24 小时内共 35 条更新，**剪贴板/复制问题**（Linux/Windows/SSH 多场景）和 **Windows 平台 hooks 执行失败** 成为最受关注的两大痛点。PR 方面仅 1 条更新，且为疑似垃圾 PR，社区贡献整体偏低。

---

## 2. 版本发布

### v1.0.60-0

**新增功能：**

- **Billing 帮助主题**：新增 `/billing` 帮助入口，提供 AI 信用额度使用情况的概览
- **Vim 风格导航键**：`/diff` 视图支持 `g`、`G`、`Ctrl+D`、`Ctrl+U` 等 vim 风格快捷键
- **Mission Control 共享状态**：`/session info` 视图中展示已同步会话的 Mission Control 共享状态
- **`--resume` 简写**：新增 `-r` 作为 `--resume` 的简写别名
- **LSP 服务器配置**：新增 LSP server 配置支持（描述截断，完整内容待查）

---

## 3. 社区热点 Issues（Top 10）

### 🔴 高热度 / 高影响

| # | Issue | 核心问题 | 社区反应 |
|---|-------|---------|---------|
| 1 | [#2082](https://github.com/github/copilot-cli/issues/2082) | **Linux 上 Ctrl+Shift+C 无法复制到剪贴板** | 💬 19 评论 / 👍 8 — 历史最久、讨论最充分的 bug，影响所有 Linux 终端用户的基本操作 |
| 2 | [#3659](https://github.com/github/copilot-cli/issues/3659) | **Windows 上插件 hooks 无法执行**（preToolUse hook 异常导致所有 prompt 失败） | 💬 3 评论 — 严重阻断 Windows 插件工作流，影响 v1.0.57+ |
| 3 | [#3666](https://github.com/github/copilot-cli/issues/3666) | **复制换行输出时空格丢失**（如 `var c` 变成 `varc`） | 💬 3 评论 — 已关闭，但影响代码输出的准确性 |
| 4 | [#3683](https://github.com/github/copilot-cli/issues/3683) | **Windows v1.0.57+ Shell 命令无控制台句柄**，导致 Clear-Host 和 MSAL 交互式认证失败 | 💬 0 评论（新报）— 影响 Windows 认证流程，可能波及大量企业用户 |
| 5 | [#3260](https://github.com/github/copilot-cli/issues/3260) | **SSH + tmux 环境下 Copy/Paste 失效**（macOS/Linux → Windows Server 2025） | 💬 6 评论 — 远程开发场景的关键阻断 |

### 🟡 功能需求 / 重要 Bug

| # | Issue | 核心问题 | 社区反应 |
|---|-------|---------|---------|
| 6 | [#2398](https://github.com/github/copilot-cli/issues/2398) | **支持权限默认配置文件**，避免每次会话重复设置权限 | 💬 3 评论 / 👍 10 — 👍 数最高的功能请求，反映权限配置繁琐是普遍痛点 |
| 7 | [#3596](https://github.com/github/copilot-cli/issues/3596) | **恢复会话后 `/model` 报错 Not authenticated** | 💬 2 评论 / 👍 8 — 会话恢复流程的认证缺陷 |
| 8 | [#3677](https://github.com/github/copilot-cli/issues/3677) | **claude-opus-4.7-1m-internal 上下文容量检测错误**，在 18% 时就触发 compaction | 💬 1 评论 — 长上下文模型的核心 bug，影响高级用户 |
| 9 | [#3636](https://github.com/github/copilot-cli/issues/3636) | **Voice 模式无法启用**（企业 VPN 下无法获取模型目录） | 💬 2 评论 / 👍 3 — 网络受限环境下的功能阻断 |
| 10 | [#3679](https://github.com/github/copilot-cli/issues/3679) | **BYOK Azure OpenAI 429 限流重试无效**（5 次重试在 0.15s 内耗尽，无退避） | 💬 0 评论（新报）— 企业自建部署的关键可靠性问题 |

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **1 条 PR 更新**：

| PR | 状态 | 说明 |
|----|------|------|
| [#3473](https://github.com/github/copilot-cli/pull/3473) | OPEN | 更新 README 中的项目名称。**注意：PR 描述包含疑似垃圾信息（GCash/Temu 推广链接），建议维护者审查后关闭。** |

> ⚠️ 今日无实质性功能或修复 PR 合并，社区代码贡献活动处于低谷。

---

## 5. 功能需求趋势

从全部 35 条 Issue 中提炼出社区最关注的 **6 大方向**：

### 📊 关注度分布

| 排名 | 方向 | 代表 Issue | 热度 |
|------|------|-----------|------|
| 1 | **剪贴板/输入交互** | #2082, #3260, #3666 | 🔥🔥🔥 跨平台、多场景复制问题集中爆发 |
| 2 | **Windows 平台兼容性** | #3659, #3683, #3664 | 🔥🔥🔥 Hooks、控制台、路径解析全线告急 |
| 3 | **认证与会话管理** | #3596, #3680, #3682 | 🔥🔥 恢复会话认证、BYOK 凭证刷新 |
| 4 | **权限与配置简化** | #2398, #1409 | 🔥🔥 权限配置繁琐是长期痛点 |
| 5 | **模型与上下文管理** | #3677, #3678, #3636 | 🔥 长上下文容量、effort 配置、网络受限环境 |
| 6 | **插件与 Hooks 系统** | #3659, #3665, #3547 | 🔥 postToolUse hook 缺失、子 agent 挂起 |

---

## 6. 开发者关注点总结

### 🚨 高频痛点

1. **剪贴板交互全面失控**：Linux (Ctrl+Shift+C)、Windows SSH+tmux、换行输出空格丢失——三个不同场景的复制问题同时活跃，说明终端 I/O 层存在系统性问题。

2. **Windows 平台体验急剧恶化**：v1.0.57~v1.0.60 期间，hooks 执行失败、控制台句柄缺失、路径波浪号不扩展等问题集中出现，Windows 用户面临工作流全面阻断。

3. **会话恢复流程不完善**：恢复后的会话在认证状态（#3596、#3680）和模型列表加载上存在缺陷，影响核心工作流。

4. **权限配置成本过高**：每次会话重复设置权限是长期痛点（#2398 获 10 个 👍），社区强烈呼吁默认配置文件支持。

5. **企业/网络受限环境支持不足**：VPN 下 Voice 模式不可用（#3636）、BYOK Azure OpenAI 限流处理不当（#3679），影响企业用户采用。

### 💡 建议关注

- 剪贴板问题可能需要在终端抽象层统一修复，而非逐个场景打补丁
- Windows 平台的回归测试覆盖可能需要加强
- 权限配置文件的落地将显著提升日常使用体验

---

*数据来源：github.com/github/copilot-cli | 报告生成时间：2026-06-05*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报 | 2026-06-05

---

## 1. 今日速览

过去24小时内，Kimi Code CLI 未发布新版本，但 Bug 集中爆发——**登录鉴权 403** 和**引擎过载**等问题导致大量用户无法正常使用，社区反馈密集。与此同时，一批由社区开发者 Pluviobyte 提交的修复 PR 出现显著活跃，覆盖了会话恢复、Shell 工具回显、图片格式兼容性等多条关键路径。

---

## 2. 版本发布

**无新 Release。** 当前最新稳定版本为 `v1.46.0`，多数上报 Bug 的用户亦集中于此版本。

---

## 3. 社区热点 Issues

| # | 标题 | 重要性说明 | 社区反应 |
|---|------|-----------|---------|
| #2425 | **[bug] 403 - Kimi For Coding is only available for Coding Agents** | 🔴 **最高优先级**。用户登录 Kimi Code 后所有请求返回 403，直接阻断核心使用场景。多位用户确认受波及，问题可能涉及平台鉴权接口变更或订阅校验逻辑。 | 👍 3，10 条评论，社区讨论活跃，是唯一获得较多点赞的 Issue。 ([链接](https://github.com/MoonshotAI/kimi-cli/issues/2425)) |
| #2427 | **[bug] 同样遭遇 403 错误（K2.6 模型）** | 与 #2425 高度相关，但用户使用 K2.6 模型且通过 `/login` 授权，扩大了受影响用户的覆盖面。 | 👍 0，2 条评论，进一步印证 403 不是孤立事件。 ([链接](https://github.com/MoonshotAI/kimi-cli/issues/2427)) |
| #2423 | **[bug] 最新版本响应速度显著下降** | 用户反馈 v1.46.0 比之前版本"far slower"，属于性能回退问题，影响所有模型的用户体验。 | 👍 0，暂无评论，但性能问题容易引发广泛共鸣。 ([链接](https://github.com/MoonshotAI/kimi-cli/issues/2423)) |
| #2424 | **[bug] K2.5 模型频繁 "engine overload"** | 引擎过载错误集中出现在 K2.5 模型上已持续数天，提示该模型后端可能出现容量瓶颈。 | 👍 0，暂无人回复。 ([链接](https://github.com/MoonshotAI/kimi-cli/issues/2424)) |
| #2430 | **[bug] 任务进行中自动登出** | Windows 用户在长时间任务中遭遇自动登出，Token/会话管理可能存在超时或刷新机制的 Bug。 | 👍 0，新提出尚无评论。 ([链接](https://github.com/MoonshotAI/kimi-cli/issues/2430)) |
| #2422 | **[bug] 对话完成后终端输出自动滚回底部** | 用户想要上翻查看历史输出时，光标闪烁导致的滚动机制不断将视图拉回底部，在 Linux 终端上较为严重。 | 👍 0，1 条评论。此 Issue 已有对应 PR #2429 修复中。 ([链接](https://github.com/MoonshotAI/kimi-cli/issues/2422)) |
| #2428 | **[bug] VS Code 扩展中 `/title` 命令不可用** | 影响 VS Code 集成体验，`/title` 作为常用管理命令缺失会降低插件可用性。 | 👍 0，待跟进。 ([链接](https://github.com/MoonshotAI/kimi-cli/issues/2428)) |

---

## 4. 重要 PR 进展

| # | 标题 | 修复内容 | 状态 | 链接 |
|---|------|---------|------|------|
| #2429 | **fix: prevent idle cursor blink from forcing scroll to bottom in Linux terminals** | 修复对话结束后查看历史时终端每秒自动滚到底部的用户体验问题，对应 Issue #2422。 | OPEN，待合并 | [PR #2429](https://github.com/MoonshotAI/kimi-cli/pull/2429) |
| #2383 | **fix(soul): repair orphan tool_calls when replaying history** | 修复会话被强制终止（OOM / kill-9 / 终端关闭）后恢复历史时，`tool_call` 与 `tool_result` 配对断裂的严重问题。 | OPEN，待合并 | [PR #2383](https://github.com/MoonshotAI/kimi-cli/pull/2383) |
| #2382 | **fix(file): convert unsupported image formats to PNG in ReadMediaFile** | 当 Agent 读取 `.ico` 等非标准图片格式时自动转 PNG，解决兼容性问题（对应 Issue #2017）。 | OPEN，待合并 | [PR #2382](https://github.com/MoonshotAI/kimi-cli/pull/2382) |
| #2388 | **fix(shell): persist pasted text placeholders** | 修复长文本粘贴后的占位符 `[Pasted text #1]` 在提示词/会话历史召回后丢失原始内容的问题（对应 Issue #1946）。 | OPEN，待合并 | [PR #2388](https://github.com/MoonshotAI/kimi-cli/pull/2388) |
| #2387 | **fix(tools): preserve shell command headline details** | 修复 Shell 工具调用时命令摘要被过度截断，导致用户看不到实际执行的命令内容（对应 Issue #2142）。 | OPEN，待合并 | [PR #2387](https://github.com/MoonshotAI/kimi-cli/pull/2387) |
| #2386 | **fix(session): map undo wire turns to context turns** | 修复 `/undo` 和 fork 操作的索引映射问题，确保在本地 slash-command 等场景下 undo 不会破坏上下文（对应 Issue #1974 / #2049）。 | OPEN，待合并 | [PR #2386](https://github.com/MoonshotAI/kimi-cli/pull/2386) |

> **观察：** 6 个活跃 PR 中有 5 个来自社区开发者 **Pluviobyte**，覆盖了会话管理、工具回显、Shell 持久化等核心基础设施层，质量较高且均引用了对应 Issue。如果快速合并，可显著改善 CLI 稳定性与用户体验。

---

## 5. 功能需求趋势

从今日活跃的 Issue 和 PR 来看，社区关注点集中在以下几个方向：

1. **鉴权与可用性 🔴** — 403 错误和引擎过载是目前最紧迫的问题，用户基本无法使用工具。这与平台侧的订阅校验策略和模型后端容量直接相关。
2. **性能体验 🟡** — v1.46.0 出现明显性能回退（#2423），叠加 K2.5 引擎过载（#2424），用户对响应速度的不满正在累积。
3. **IDE/插件集成 🟡** — VS Code 扩展中的 `/title` 命令缺失（#2428）反映出集成场景下的功能对齐仍需完善。
4. **终端 UI 与交互体验 🟢** — 滚动异常（#2422）、粘贴内容丢失（#2388 PR）、Shell 命令回显截断（#2387 PR）等问题影响日常操作流畅度，社区正在积极修复。
5. **会话健壮性 🟢** — 会话被强制终止后的恢复（#2383 PR）、undo 操作的正确性（#2386 PR）属于深厚的基础设施改进。

---

## 6. 开发者关注点总结

| 痛点 | 优先级 | 说明 |
|------|--------|------|
| **403 鉴权阻断** | 🔴 P0 | 多位用户无法使用核心功能，可能需官方紧急排查订阅/鉴权接口变更。 |
| **v1.46.0 性能下降** | 🔴 P0 | 版本升级后出现响应变慢，属于回归问题，用户期望下一版本修复。 |
| **K2.5 引擎过载** | 🟠 P1 | 特定模型（K2.5）持续过载，用户无 fallback 提示，影响工作流。 |
| **自动登出** | 🟠 P1 | 长时间任务中断对 Agent 用户尤为致命，Token 刷新机制待排查。 |
| **终端 UI 滚动的交互问题** | 🟡 P2 | 虽然已有 PR 修复，但尚未合并发布，影响 Linux 用户日常查阅输出。 |
| **Shell/粘贴/会话恢复** | 🟡 P2 | 多条 PR 已就绪但悬而未决，合并后可大幅提升用户体验。 |

---

*数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 统计区间：过去 24 小时 | 生成时间：2026-06-05*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-05

---

## 1. 今日速览

今日社区活跃度较高，**无新版本发布**。讨论焦点集中在两大方向：一是 **LifetimeVip** 连续提交了一系列关于"read-before-edit 执行缺失"和"compaction 上下文丢失"的深度安全/质量漏洞报告，引发对 AI 代码编辑可靠性的广泛关注；二是 **DeepSeek V4 Pro 永久降价 75%** 后，社区对 OpenCode Go 订阅用量调整的呼声持续升温（68 条评论、74 个 👍）。此外，多个自动化清理 PR 集中合并，涵盖 ChatGPT OAuth token 修复、shell 命令安全隔离等关键问题。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 作者 | 评论/👍 | 为什么重要 |
|---|------|------|---------|-----------|
| 1 | [Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | thdxr | 89💬 / 63👍 | 社区集中排查内存问题的总帖，要求用户提供 heap snapshot 而非 LLM 猜测，是近期最活跃的技术排查线程 |
| 2 | [Adjust Go usage limits after DeepSeek V4 Pro 75% price reduction](https://github.com/anomalyco/opencode/issues/28846) | icocoon | 68💬 / 74👍 | DeepSeek V4 Pro 永久降价后，用户强烈要求同步调整订阅用量上限，商业模型与定价策略的博弈焦点 |
| 3 | [Speech-to-Text Voice Input](https://github.com/anomalyco/opencode/issues/4695) | Fuzu | 33💬 / 162👍 | 获 162 个 👍 的高人气功能请求，语音输入可显著提升交互效率，社区期待已久 |
| 4 | [Code quality degrades as conversations get longer](https://github.com/anomalyco/opencode/issues/30811) | LifetimeVip | 6💬 | 系统性指出 compaction 丢失上下文、缺乏自动验证等 5 个导致长对话代码质量下降的核心问题 |
| 5 | [TUI fails on Alpine Linux (musl) in 1.14.50](https://github.com/anomalyco/opencode/issues/27530) | ncopa | 27💬 / 12👍 | 1.14.50 回归性 bug，musl 环境下 `getcontext` 符号缺失导致 TUI 完全不可用，影响 Alpine/Docker 用户 |
| 6 | [Subagent infinite retry loop on tool failure](https://github.com/anomalyco/opencode/issues/17169) | cauboy | 4💬 | subagent 在 edit 工具失败后进入无限重试，单次调用可烧掉 $15+ API 费用，成本安全隐患严重 |
| 7 | [Prompt injection via `<system-reminder>` tags in file content](https://github.com/anomalyco/opencode/issues/30799) | LifetimeVip | 3💬 | read 返回的文件内容未对 system-reminder 标签做脱敏，攻击者可在文件中注入伪系统指令，属安全漏洞 |
| 8 | [No code-level read-before-edit enforcement](https://github.com/anomalyco/opencode/issues/30791) | LifetimeVip | 2💬 | write、bash、MCP/plugin 等多条路径均可绕过"先读后写"约束，缺乏统一 enforcement 层 |
| 9 | [Make Links Clickable (Ctrl+Left Click)](https://github.com/anomalyco/opencode/issues/1168) | jay-tau | 6💬 / 91👍 | 91 个 👍 的经典 UX 诉求，终端中链接可点击是编辑器标配体验 |
| 10 | [Delete session race condition leaves data in DB](https://github.com/anomalyco/opencode/issues/30814) | LifetimeVip | 2💬 | 删除会话时 Deleted 事件在 projector 处理前被清除，导致数据残留，属数据一致性 bug |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 内容摘要 |
|---|------|------|------|---------|
| 1 | [feat(app): color themes](https://github.com/anomalyco/opencode/pull/30824) | arvsrn | 🟢 OPEN | 新增 `resolveThemeVariantV2`，从主题调色板运行时生成 v2 token，并建立 v2 语义 token 的静态映射，为多主题支持奠定基础 |
| 2 | [feat(stats): refresh stats routes and homepage](https://github.com/anomalyco/opencode/pull/30419) | adamdotdevin | 🔴 CLOSED | 重构 stats 应用外壳、首页和模型详情路由，调整核心 home-domain 行为以匹配新 UI 结构 |
| 3 | [feat: add "reasoning" as interleaved field option for vLLM](https://github.com/anomalyco/opencode/pull/30477) | delta9000 | 🟢 OPEN | 在 vLLM provider 的 `interleaved.field` 中新增 `reasoning` 选项（原有 `reasoning_content` 和 `reasoning`），关闭 #19988 |
| 4 | [refactor(core): make v2 session inputs event sourced](https://github.com/anomalyco/opencode/pull/30785) | kitlangton | 🔴 CLOSED | 将 v2 session prompt 录入改为事件源模式，使已接受 prompt 可从同步历史中重建，解决本地重启后 pending work 不可恢复的问题 |
| 5 | [feat(tui): allow backgrounding synchronous subagents](https://github.com/anomalyco/opencode/pull/30488) | kitlangton | 🟢 OPEN | 新增 `POST /experimental/session/:sessionID/background` 接口，允许同步 subagent 后台运行，TUI 中显示 `ctrl+b background` 提示 |
| 6 | [feat(desktop): surface local server startup failures](https://github.com/anomalyco/opencode/pull/30822) | Hona | 🔴 CLOSED | Desktop 本地服务器启动失败时不再无限 loading，改为展示可操作的错误页面，提升故障诊断体验 |
| 7 | [fix: preserve ChatGPT OAuth refresh token](https://github.com/anomalyco/opencode/pull/25765) | kill74 | 🔴 CLOSED | 修复刷新 access token 时覆盖已有 refresh token 的 bug，避免 ChatGPT OAuth 会话意外失效 |
| 8 | [fix: prevent shell commands from killing all Node.js processes](https://github.com/anomalyco/opencode/pull/25762) | Xelson431 | 🔴 CLOSED | 防止 AI 执行 `taskkill /F /IM node.exe` 等命令时误杀 OpenCode 自身进程，属安全隔离修复 |
| 9 | [feat(provider): support Bedrock OpenAI model URLs](https://github.com/anomalyco/opencode/pull/30820) | PershingSquare | 🟢 OPEN | 为 Amazon Bedrock provider 添加 URL 变量替换，支持 Bedrock Mantle OpenAI 模型条目使用文档化端点 |
| 10 | [feat: support multiple config overrides with OPENCODE_CONFIG_DIRS](https://github.com/anomalyco/opencode/pull/30821) | Northern-Lights | 🟢 OPEN | 新增 `OPENCODE_CONFIG_DIRS` 环境变量（冒号分隔，类似 PATH），支持多目录配置覆盖，关闭 #26051 |

---

## 5. 功能需求趋势

从今日 Issues 和 PRs 中可提炼出以下 **5 大功能方向**：

| 方向 | 代表 Issue/PR | 热度 |
|------|--------------|------|
| **AI 代码编辑质量与可靠性** | #30811 (compaction 丢上下文)、#30791 (read-before-edit 无强制)、#30799 (prompt injection) | 🔥🔥🔥 今日最集中议题 |
| **新模型/Provider 支持** | #30819 / #30820 (Bedrock GPT-5.5/5.4)、#30477 (vLLM reasoning field)、#25706 (FastRouter) | 🔥🔥 社区紧跟模型生态变化 |
| **TUI/桌面端体验增强** | #30824 (color themes)、#30488 (subagent 后台化)、#30822 (启动失败提示)、#1168 (链接可点击) | 🔥🔥 交互体验持续打磨 |
| **会话管理与持久化** | #30785 (event sourced inputs)、#30814 (删除竞态)、#16562 (web 侧边栏会话消失)、#18569 (--resume) | 🔥 长会话场景下的数据一致性 |
| **语音/多模态输入** | #4695 (Speech-to-Text) | 🔥 162 👍 高人气，但推进缓慢 |

---

## 6. 开发者关注点

**今日开发者反馈的 5 大痛点：**

1. **"read-before-edit" 形同虚设** — LifetimeVip 连续提交 6 个相关 Issue（#30791、#30793、#30794、#30795、#30798、#30811），系统性地指出 write/edit/bash/MCP 等工具均无运行时"先读后写"校验，AI 可凭空编辑文件，代码质量无法保证。这是今日最值得开发团队优先响应的方向。

2. **长对话质量劣化** — Compaction 仅保留最近消息摘要，上下文大量丢失；缺乏编辑后自动验证机制。开发者反映"对话越长，AI 犯的错越多"。

3. **subagent 成本失控风险** — 工具失败后无限重试（#17169），单次 subagent 调用可能产生 $15+ 的 API 费用，缺乏熔断机制。

4. **定价与用量不匹配** — DeepSeek V4 Pro 降价 75% 后，现有 Go 订阅的用量限制显得过于保守，社区期待官方尽快调整（#28846）。

5. **平台兼容性回归** — Alpine/musl 环境下 TUI 因 `getcontext` 符号缺失崩溃（#27589），Windows 上本地 stdio MCP 完全不可用（#27771），跨平台覆盖仍需加强。

---

> 📌 **编辑点评**：今日社区最大的信号是 **LifetimeVip 对 AI 编辑可靠性的集中揭露**——从 read-before-edit 缺失到 prompt injection、从 compaction 溢出的 retry loop 到 session 删除竞态，这些问题触及 OpenCode 作为 AI 编码助手的核心信任链。建议核心团队优先评估并回应这一系列报告。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-05

---

## 1. 今日速览

Pi 发布 v0.78.1，新增 Ant Ling、NVIDIA NIM 等内置 Provider 支持，并扩展了 Extension API 的上下文能力。社区围绕 **OpenAI Codex 挂起问题**（#4945，51 条评论）持续热议，同时多个 Provider 兼容性修复 PR 密集合入，反映出多模型生态适配仍是当前开发重心。

---

## 2. 版本发布

### v0.78.1

- **更多内置 Provider 覆盖**：新增 Ant Ling 和 NVIDIA NIM Provider 配置，以及 MiniMax-M3 对直接 MiniMax Provider 的支持。详见 [Providers 文档](docs/providers.md)。
- **更丰富的 Extension 上下文**：Extensions 现在可以访问 `ctx.mode` 和 `ctx.getSystemPromptOptions()`，为扩展开发者提供更精细的控制能力。

---

## 3. 社区热点 Issues

| # | 标题 | 作者 | 评论 | 👍 | 关注理由 |
|---|------|------|------|-----|----------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | openai-codex 在 Working... 时挂起，零用量中断 | liushuaiiu | 51 | 27 | **本日最热 Issue**。gpt-5.5 在交互 TUI 中频繁卡死，需手动 Escape 恢复，严重影响核心工作流，社区高度关注。 |
| [#5386](https://github.com/earendil-works/pi/issues/5386) | Ollama 模型缺少 usage 字段导致 getSessionStats() 崩溃 | mitch-mooney | 4 | 0 | 本地模型用户的关键 Bug，Ollama 等不返回 token 用量的后端会直接崩溃，影响本地部署体验。 |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | 改进 Vertex + GCP 元数据服务器支持 | yairwein | 5 | 0 | GCP 认证检测逻辑存在缺陷（同步 `existsSync` 检查），影响云端部署场景。 |
| [#5363](https://github.com/earendil-works/pi/issues/5363) | 新增 amazon-bedrock-mantle Provider | tasadurian | 3 | 1 | Bedrock Mantle 模型使用 OpenAI 兼容 API，与现有 Converse API Provider 不兼容，社区有明确需求。 |
| [#5350](https://github.com/earendil-works/pi/issues/5350) | Windows 主机上远程 Linux 文件工具路径解析错误 | 3927o | 2 | 0 | 跨平台远程开发场景的关键 Bug，Windows 主机运行 Pi 时路径被宿主机解析而非远程机。 |
| [#5331](https://github.com/earendil-works/pi/issues/5331) | opencode-go Provider 的 maxTokens 映射到错误 API 参数 | janbam | 3 | 0 | `maxTokens` 被静默忽略，影响输出长度控制，已有 PR #5400 修复。 |
| [#5373](https://github.com/earendil-works/pi/issues/5373) | 大会话（150k+ tokens）空闲时 CPU 占用 ~24% | loss-and-quick | 3 | 0 | 性能问题，大规模上下文会话的资源消耗过高，影响长时间使用体验。 |
| [#5341](https://github.com/earendil-works/pi/issues/5341) | 通过 SSH 在远程容器中运行 Pi 会话 | libkakashi | 4 | 0 | 远程开发支持需求，希望 Pi 本地运行但所有 OS 交互路由到远程容器。 |
| [#5359](https://github.com/earendil-works/pi/issues/5359) | 工具展开提示中右括号样式不一致 | dangooddd | 3 | 0 | UI 细节问题，闭合括号未应用 muted 样式，影响视觉一致性。 |
| [#5384](https://github.com/earendil-works/pi/issues/5384) | DeepSeek 经 OpenRouter 代理仍发送 `role: "developer"` | heggria | 2 | 0 | 兼容性问题，`detectCompat()` 仅匹配直接 API 的 model id，代理路由场景未覆盖。 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 说明 |
|---|------|------|------|------|
| [#5400](https://github.com/earendil-works/pi/pull/5400) | fix(ai): 为 opencode Provider 将 maxTokens 映射到 max_tokens | djgpp6 | ✅ 已合入 | 修复 #5331，opencode/opencode-go 使用 `max_tokens` 而非 `max_completion_tokens`。 |
| [#5399](https://github.com/earendil-works/pi/pull/5399) | fix(extensions): 延迟加载扩展的命令在自动补全中可见 | valkyriweb | ✅ 已合入 | 解决延迟加载扩展（~250ms 后加载）的命令不出现在自动补全中的问题。 |
| [#5410](https://github.com/earendil-works/pi/pull/5410) | fix: 恢复会话时持久化模型为默认模型 | bchamberlin23 | ✅ 已合入 | `pi -c` 继续会话时，将恢复的模型写入 `settings.json` 作为默认值，避免新会话回退到旧默认。 |
| [#5379](https://github.com/earendil-works/pi/pull/5379) | 用户级本地包安装使用绝对路径存储 | xl0 | ✅ 已合入 | 修复 #5378，用户级安装（`pi install <path>`）使用绝对路径，项目级保持相对路径。 |
| [#5397](https://github.com/earendil-works/pi/pull/5397) | fix: Mac OS 上 Alt+Delete 按词删除 | andheiberg | ✅ 已合入 | 修复 Mac 上 Alt+Delete 仅删除一个字符的问题，使其符合 macOS 标准行为。 |
| [#5371](https://github.com/earendil-works/pi/pull/5371) | fix: 技能消息与用户消息间添加空格 | Perlence | ✅ 已合入 | 修复 `/skill:<name> text` 显示时技能消息和用户消息之间缺少空格的问题。 |
| [#5412](https://github.com/earendil-works/pi/pull/5412) | fix: 规范化 firepass 模型引用别名 | anduimagui | ✅ 已合入 | 将 `firepass/...` 模型引用规范化为 `fireworks/...` Provider，修复模型查找。 |
| [#5385](https://github.com/earendil-works/pi/pull/5385) | feat: 首次运行时检测终端主题（亮/暗） | vegarsti | 🔧 进行中 | 通过 OSC 查询终端主题，使 Pi 首次启动时自动匹配亮/暗主题。 |
| [#5332](https://github.com/earendil-works/pi/pull/5332) | feat: 工作区审批系统 | mitsuhiko | 🔧 进行中 | 新增 `.pi.user` 目录作为用户扩展加载路径，`.pi` 和 `.pi.user` 在首次交互加载时需审批。 |
| [#5281](https://github.com/earendil-works/pi/pull/5281) | feat: 为所有命令支持快捷键绑定 | DanielThomas | ✅ 已合入 | 统一内置和扩展注册命令的快捷键处理，新增 `cmd.<name>` 绑定约定。 |

---

## 5. 功能需求趋势

从今日 Issues 和 PRs 中可提炼出以下 **五大功能方向**：

1. **多模型/Provider 生态扩展**：新增 Provider 需求持续涌现（Amazon Bedrock Mantle、Ant Ling、NVIDIA NIM、MiniMax-M3），同时现有 Provider 的兼容性问题修复密集（OpenRouter 路由、opencode-go 参数映射、DeepSeek developer role、Fireworks 别名）。**多模型适配是当前最高频的开发主题。**

2. **远程与跨平台开发**：SSH 远程容器执行（#5341）、Windows 主机远程 Linux 路径解析（#5350）、GCP 元数据服务器支持（#5323）——社区对远程开发和跨平台场景的需求明显。

3. **Extension API 能力增强**：扩展上下文扩展（v0.78.1）、延迟加载扩展的自动补全可见性（#5399）、自定义工作加载器 UI（#5411）、扩展执行斜杠命令（#5367）——扩展系统正在快速成熟。

4. **TUI/UX 体验优化**：Mac Alt+Delete 修复（#5397）、Shift+Enter 换行问题（#5188）、工具展开提示样式（#5359）、altbuf 渲染模式提案（#5357）、终端主题自动检测（#5385）——终端交互细节持续打磨。

5. **性能与稳定性**：大会话空闲 CPU 占用（#5373）、Ollama 缺少 usage 字段崩溃（#5386）、OpenAI Codex 挂起（#4945）——核心稳定性和资源效率仍是社区痛点。

---

## 6. 开发者关注点

- **🔴 最高优先级 — OpenAI Codex 挂起**：#4945 以 51 条评论、27 赞成为社区最活跃讨论，gpt-5.5 在交互中频繁卡死且无错误提示，是影响日常使用的严重问题，亟需根本性修复。

- **🟡 Provider 兼容性碎片化**：多个 Issue 反映不同 Provider 的参数映射、角色字段、认证检测存在差异（opencode-go、OpenRouter、DeepSeek、Fireworks、GCP），社区期待更统一的兼容层抽象。

- **🟡 本地模型支持待完善**：Ollama 等本地后端的 usage 字段缺失导致崩溃（#5386），本地部署体验与云端 Provider 存在明显差距。

- **🟢 扩展生态快速成长**：Extension API 在上下文访问、UI 自定义、命令注册、延迟加载等方面持续增强，开发者对扩展能力的期望也在同步提升。

- **🟢 远程开发场景兴起**：SSH 远程执行、跨平台路径处理、云端认证等需求表明 Pi 正从本地工具向远程开发基础设施演进。

---

*数据来源：github.com/badlogic/pi-mono | 报告生成时间：2026-06-05*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-06-05

---

## 1. 今日速览

- **Nightly v0.17.1** 发布，版本号 `v0.17.1-nightly.20260604.16dd99fa3`，其余变更较少，为常规版本推进。
- **Issue 活跃度较高**，增长最多议题集中在 **认证/登录故障、模型切换持久化、Memory/Rules 规则系统、统计与 Session 管理** 等用户体验层面主题。
- **PR 以功能合流为主**，涵盖 daemon 模式扩充、统计面板、memory 增强与多处 Bug 修复，整体向 0.17.x 稳定方向推进。

---

## 2. 版本发布

| 版本 | 说明 |
|------|------|
| **v0.17.1-nightly.20260604.16dd99fa3** | 常规 nightly 构建，CHANGELOG 仅包含 `chore(release): v0.17.1` 版本 bump，无重大用户可见更新公告。链接：https://github.com/QwenLM/qwen-code/releases |

---

## 3. 社区热点 Issues

| # | 标题（要点） | 热度 | 为什么重要 | 链接 |
|------|--------------|------|-----------|------|
| 1 | **Rider 无法登录 Qwen Code（持续重定向）** | 10 评论 | IDE 登录闭环被重定向劫持，直接阻断 JetBrains 用户接入阿里云 token plan，影响核心用户获取模型的路径。 | https://github.com/QwenLM/qwen-code/issues/4493 |
| 2 | **Statusline 显示 model id 而非名称，且用 id 作唯一 key** | 5 评论 | UI 可读性差，且可能导致多 key 配置冲突，是影响日常使用体验的显示/配置一致性 bug。 | https://github.com/QwenLM/qwen-code/issues/4722 |
| 3 | **`/model` 默认不应持久化写入 settings** | 5 评论 | 用户临时切换模型会被意外写入配置，影响后续启动行为，被认为是 CLI 行为设计缺陷。 | https://github.com/QwenLM/qwen-code/issues/4754 |
| 4 | **Qwen Code 是否支持 Rules / Instructions 规则系统？** | 5 评论 | 对标 Claude Code 的规则/指令系统，用于统一代码风格、跨 session 管理等，是开发者呼声很强的基础能力。 | https://github.com/QwenLM/qwen-code/issues/4723 |
| 5 | **增强 /stats：跨 session 全局用量统计** | 4 评论 / 👍1 | 当前 /stats 仅存于 session 内存，退出即丢失，用户希望获得历史趋势、跨 session 分析能力。 | https://github.com/QwenLM/qwen-code/issues/4597 |
| 6 | **支持 global user-level auto-memory（跨项目记忆）** | 4 评论 | 当前 memory 按项目隔离，用户偏好等信息需反复学习，对标 Claude 的 private/team memory。 | https://github.com/QwenLM/qwen-code/issues/4747 |
| 7 | **Local-first 诊断框架：ring buffer + /bug collect bundle** | 3 评论 | 为用户和开发者提供本地诊断能力，帮助复现 API/SSE 流异常，同时保护敏感数据不主动上报。 | https://github.com/QwenLM/qwen-code/issues/4421 |
| 8 | **`/compress-fast`：非 AI 的纯文本裁剪压缩** | 3 评论 | 当前 context 压缩依赖 AI，耗时耗 token，用户希望加入快速裁剪选项以提升效率。 | https://github.com/QwenLM/qwen-code/issues/4264 |
| 9 | **Dual Output /file pipe 模式 TUI 无响应** | 3 评论 | 在 json-file/pipe 交互模式下 TUI 无反馈，是 non-interactive / 自动化场景的关键 bug。 | https://github.com/QwenLM/qwen-code/issues/4727 |
| 10 | **ACP Streamable HTTP transport 实现与对齐现状** | 1 评论 | 跟踪 daemon 对 ACP Streamable HTTP 的支持程度，影响 Zed、Goose、JetBrains 等 IDE 原生接入。 | https://github.com/QwenLM/qwen-code/issues/4782 |

---

## 4. 重要 PR 进展

| # | 标题（要点） | 类型 | 说明 | 链接 |
|------|--------------|------|------|------|
| 1 | **feat(stats): 交互式 /stats 仪表盘 + 跨 session 追踪** | Feature | 实现 Issue #4597 的需求，新增 Session / Activity / Efficiency 三 tab 统计面板，支持用量持久化。 | https://github.com/QwenLM/qwen-code/pull/4779 |
| 2 | **feat(memory): 支持 user-level auto-memory（~/.qwen/memories/）** | Feature | 实现 Issue #4747，新增跨项目用户记忆目录，复用现有 4-type taxonomy，对标 Claude 的 private scope。 | https://github.com/QwenLM/qwen-code/pull/4764 |
| 3 | **feat(daemon): 合并 daemon-mode feature batch 到 main** | Feature | 将 daemon_mode_b_main 分支的 46 个 commit、386 文件合流，包含 v0.16-alpha 核心 daemon 能力。 | https://github.com/QwenLM/qwen-code/pull/4490 |
| 4 | **feat(daemon): 添加 POST /session/:id/language 运行时语言切换** | Feature | 支持在运行时切换 UI 和 LLM 输出语言，不污染 session transcript。 | https://github.com/QwenLM/qwen-code/pull/4705 |
| 5 | **feat(daemon): 保持 model & approval-mode 状态在共享 session 的多个 client 间一致** | Bug Fix | 修复 daemon 多 client（chat view / terminal / IDE companion）共享 session 时 model 和 approval mode 不同步的问题。 | https://github.com/QwenLM/qwen-code/pull/4613 |
| 6 | **fix(cli): 修复 vim 模式 Esc 泄漏、Enter 提交、渲染延迟及缺失命令** | Bug Fix | 解决 vim INSERT 模式 Esc 触发 AppContainer 处理、输入缓冲区被清空、模型响应中断等问题。 | https://github.com/QwenLM/qwen-code/pull/4677 |
| 7 | **fix(core): 限制 hard-rescue 压缩重试次数** | Bug Fix | 防止 oversized request 在 rescue 压缩中无限循环，增加明确的退出路径。 | https://github.com/QwenLM/qwen-code/pull/4526 |
| 8 | **fix(core): 允许带注释的 intentional-sleep 逃逸拦截** | Bug Fix | 为 shell 命令中的 foreground sleep 提供显式逃逸机制（`# intentional-sleep: <reason>`），上限 10 分钟。 | https://github.com/QwenLM/qwen-code/pull/4708 |
| 9 | **fix(cli): 避免 headless 环境下 /bug、/docs、/xdg-open 崩溃** | Bug Fix | 将直接 `open` 调用替换为 `openBrowserSecurely()`，修复 headless Linux / 容器中命令崩溃问题。 | https://github.com/QwenLM/qwen-code/pull/4716 |
| 10 | **fix(computer-use): 在 YOLO/AUTO_EDIT/AUTO 模式下自动批准安装** | Bug Fix | 修复 Computer Use 在自动批准模式下首次调用仍被拒绝的问题。 | https://github.com/QwenLM/qwen-code/pull/4756 |

---

## 5. 功能需求趋势

从当前 Issues 中可提炼出以下 **社区最关注的功能方向**：

| 方向 | 代表需求 | 说明 |
|------|----------|------|
| **记忆与规则系统** | #4723 Rules/Instructions、#4747 global memory | 用户强烈希望 Qwen Code 提供类似 Claude Code 的规则系统和跨项目记忆，减少重复配置。 |
| **统计与可观测性** | #4597 跨 session stats、#4421 本地诊断框架 | 用量追踪、历史趋势、本地诊断 bundle 是高频需求，对标 Claude Code 体验。 |
| **IDE 集成与认证** | #4493 Rider 登录、#4782 ACP Streamable HTTP | JetBrains 等 IDE 的认证闭环和 ACP 协议支持是扩展用户群的关键。 |
| **模型切换与配置** | #4754 /model 持久化、#4722 statusline 显示 | 模型切换行为、配置一致性、UI 可读性是日常使用的高频痛点。 |
| **Context 与性能** | #4264 /compress-fast、#4777 prompt cache 失效 | 非 AI 压缩、prompt cache 优化等性能相关需求持续出现。 |
| **Daemon 与多端同步** | #4613 状态同步、#4705 语言切换 | daemon 模式下的多 client 状态一致性是架构演进重点。 |

---

## 6. 开发者关注点

| 痛点 / 高频需求 | 说明 |
|------------------|------|
| **认证流程不稳定** | Rider 等 IDE 登录重定向循环（#4493），OAuth/token plan 接入体验需优化。 |
| **配置行为不可预期** | `/model` 默认持久化（#4754）、statusline 显示 id（#4722）等让用户感到"配置被意外修改"。 |
| **Memory 按项目隔离** | 用户偏好、工作风格等信息无法跨项目复用，每次新 project 需重新学习（#4747）。 |
| **统计与诊断能力弱** | 当前 /stats 无持久化、无历史趋势；遇到 API/SSE 异常时缺乏本地诊断工具（#4597、#4421）。 |
| **Headless / 自动化场景支持不足** | pipe 模式 TUI 无响应（#4727）、xdg-open 崩溃（#4716）等影响 CI/自动化使用。 |
| **Computer Use 首次调用被拒** | 在自动批准模式下仍弹出确认或直接拒绝，影响自动化流程（#4756）。 |

---

> 📌 **总结**：当前社区焦点已从基础功能建设转向 **体验打磨与生态扩展**——记忆/规则系统、跨 session 统计、IDE 认证闭环、daemon 多端一致性是下一阶段的核心议题。建议关注 stats dashboard（#4779）和 global memory（#4764）两个 PR 的进展，它们直接回应了社区最高频的需求。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*