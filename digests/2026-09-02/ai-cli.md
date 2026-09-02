# AI CLI 工具社区动态日报 2026-09-02

> 生成时间: 2026-09-02 02:22 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-09-02

---

## 1. 生态全景

当前 AI CLI 赛道已从“模型接入竞赛”转入**“工程化落地与体验打磨”深水区**。头部工具（Claude Code、Codex、Gemini CLI、Copilot CLI）同步遭遇 **Windows/WSL 原生稳定性、长会话内存管理、MCP 协议兼容性、企业级权限治理** 四大硬骨头；新兴工具（Kimi Code、Qwen Code、OpenCode、Pi）则在 **TUI 渲染架构重构、本地模型适配、插件/扩展体系标准化** 上投入核心精力。版本发布节奏普遍加快（日更/周更），但**回归风险随之上升**，多个项目出现“修复一个 Bug 引入两个阻塞性问题”的负向循环。社区呼声核心从“能不能用”转向“好不好用、稳不稳定、敢不敢上生产”，**可观测性、沙箱隔离、跨平台一致性** 成为衡量成熟度的新标尺。

---

## 2. 各工具活跃度对比

| 工具 | 仓库 | 今日新增/活跃 Issues | 今日活跃/合并 PRs | 版本发布情况 | 核心研发节奏 |
|------|------|---------------------|-------------------|--------------|--------------|
| **Claude Code** | anthropics/claude-code | ~10 热点 (高互动量，如 #85891 128👍) | 2 (插件生态为主) | **2 个热修复版本** (v2.1.257/258) | **极高** - 热修复连发，内部迭代为主 |
| **OpenAI Codex** | openai/codex | 50+ (Top 10 高热度) | **10+ 已合并** (核心功能密集) | 1 稳定版补丁 + 3 Alpha | **极高** - Alpha 系列高频推进，PR 质量高 |
| **Gemini CLI** | google-gemini/gemini-cli | 10+ (P1/P2 结构性 Bug) | **10+ 已合并** (安全/稳定性为主) | 1 Nightly + 1 Preview | **高** - 侧重技术债偿还与安全加固 |
| **GitHub Copilot CLI** | github/copilot-cli | 36 活跃更新 (多个 P0 阻塞) | **0** (过去 24h 无新增) | **v1.0.83-1** (体验/治理增强) | **中** - 核心回归 Bug 堆积，急需热修复 |
| **Kimi Code** | MoonshotAI/kimi-cli | 2 (历史遗留关闭) | **4 合并** (含战略级迁移) | **v1.50.0** (品牌迁移里程碑) | **中高** - 完成架构切换，进入生态建设期 |
| **OpenCode** | anomalyco/opencode | 10+ (多高热度已关闭) | **12 合并 / 8 Open** (极高吞吐) | **v1.18.26** (稳定性专项) | **极高** - 社区驱动，PR 合并效率极高 |
| **Pi** | earendil-works/pi | 10 (含 54👍 XDG 合规) | **20 合并** (渲染/代理/网络) | 无新 Release (Nightly 隐含) | **高** - 激进重构，细节打磨到位 |
| **Qwen Code** | QwenLM/qwen-code | 30+ (多个 P1/P2 回归) | 20+ (含 OpenTUI 迁移核心 PR) | `cua-driver-rs v0.20.3` (基建) | **高** - 大规模重构期，回归风险显性 |
| **DeepSeek TUI** | Hmbown/DeepSeek-TUI | 数据获取失败 | - | - | - |

> **注**：Issues/PRs 数为摘要中显性列出的高关注度条目统计，非全量 GitHub API 数据。

---

## 3. 共同关注的功能方向

| 共性方向 | 涉及工具 (代表性 Issue/PR) | 具体诉求痛点 |
|----------|----------------------------|--------------|
| **Windows/WSL 原生稳定性** | **Claude Code** (#80444 GPU崩溃, #85891 置顶窗口), **Codex** (#40700 启动失败, #41463 WSL路径), **Copilot CLI** (#4679 Sandbox强制启动, #4683 ConstrainedLanguage), **OpenCode** (#22003/#26038 退出关窗, #39851 IPC路径), **Qwen Code** (#10749 滚动异常) | 原生打包、GPU/沙箱兼容、路径解析、终端交互一致性，**阻断 Windows 主力开发者**。 |
| **长会话/上下文内存管理** | **Claude Code** (#66020 20GB泄漏), **Codex** (#4664 恢复OOM, #4686 句柄泄漏), **Gemini CLI** (#25166 Shell挂起), **Qwen Code** (#10710 会话重载丢失), **Pi** (#8937 分叉前结算) | Token/句柄/堆内存泄漏、历史压缩丢失指令、会话恢复数据不一致，**生产级长任务核心拦路虎**。 |
| **MCP / 协议兼容与治理** | **Claude Code** (#86142 outputSchema拒绝, #89063 权限交互), **Codex** (#4525 协议版本冲突, #4203 OAuth刷新), **Gemini CLI** (#29067 A2A硬编码凭证), **OpenCode** (#35207 MCP死锁), **Pi** (#8737 NO_PROXY匹配) | 协议版本碎片化、OAuth Token生命周期、权限审批一致性、网关/代理穿透，**Agent 互联互通基建**。 |
| **企业级权限/合规/沙箱** | **Claude Code** (#91296 bypassPermissions失效), **Codex** (#42147 Full Access跳过审批), **Copilot CLI** (#4679 Sandbox开关失效, #4683 受限语言模式), **Gemini CLI** (#26525 Auto Memory脱敏), **Qwen Code** (#10583 Bubblewrap, #10218 权限语义变更), **Pi** (#8898 seccomp兼容) | 零信任执行环境、策略即代码、审计追溯、合规模式一键切换，**商业化落地门槛**。 |
| **TUI/终端原生体验现代化** | **Claude Code** (#32469 Vim光标形状), **Codex** (#39903 折叠不可禁, #25934 超链接), **Gemini CLI** (#21924 Resize闪烁), **OpenCode** (#46714 只读预览, #46717 时间线预设), **Pi** (#8900 双栏选择器, #8938 图片拉伸), **Qwen Code** (#8662 OpenTUI迁移, #10749 滚动Bug) | 渲染性能、键盘流完整性、鼠标/触控支持、布局引擎原生化，**高粘性用户日效核心**。 |
| **本地/异构模型适配** | **Qwen Code** (#10520/#10530 llama.cpp grammar), **Pi** (#6996 Gemini 3.x thought_signature, #8973 Grok 4.6 循环), **OpenCode** (#35105 Gemini SchemaError), **Gemini CLI** (#28893 Flash ID重写) | Grammar/工具调用协议差异、推理参数透传、模型 ID 保真、流式解析容错，**避免厂商锁定**。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 当前战略重心 |
|------|----------|--------------|--------------|--------------|
| **Claude Code** | **企业级/专业开发者首选** | TypeScript/Node.js + 自研 Agent 编排；强调模型能力上限 (Fable/Opus) 与工具调用可靠性 | 高阶工程师、AI 原生团队、需复杂重构/多仓协作的企业 | **稳定性兜底** (热修复连发) + **模型迭代同步** (Fable 5.1) + **治理插件生态** (web4-governance) |
| **OpenAI Codex** | **云原生/远程协作标杆** | Rust 核心 + TUI；独创 **Remote Control/移动端续写** 与 **Guardian 审批引擎**；AC协议先行 | 分布式团队、移动办公场景、重安全审计的组织 | **跨平台稳定性攻坚** (Windows/WSL) + **异步交互模型** (Async User Input) + **配额可观测性** |
| **Gemini CLI** | **大规模代码库/架构治理利器** | Go/TypeScript 混合；**AST 感知工具链** (Epic #22745)、**Subagent 编排**、大上下文窗口优势 | 单体仓维护者、重构架构师、需精准代码导航/大规模变更的团队 | **Agent 可靠性根治** (Hang/False Success) + **安全合规** (Auto Memory 脱敏) + **AST 基建** |
| **GitHub Copilot CLI** | **GitHub 生态深度集成入口** | Node.js (SEA 打包) + VS Code 共享内核；**PR/Review 工作流原生化**、企业策略下发 (`forceLoginOrgs`) | GitHub 重度用户、企业内部开发平台团队、合规要求高的组织 | **基础可用性止血** (OOM/BYOK/Sandbox 回归) + **企业治理功能补齐** + **MCP 生态兼容** |
| **Kimi Code** | **中文社区/轻量化体验标杆** | Python → **Node.js/npm 迁移完成** (v1.50.0)；**废弃感知自更新**、插件沙箱文档先行 | 国内开发者、偏好零配置迁移、关注中文语境优化的用户 | **发布渠道统一** (kimi-code) + **插件生态标准化** (安全/持久化契约) + **异步交互补齐** |
| **OpenCode** | **社区驱动/极客可定制典范** | Go 单二进制；**插件热更新、TUI 组件化、模型路由灵活**；响应速度极快 | 追求极致控制权、自托管模型、喜欢 Hack 配置的高阶用户 | **Windows 体验补齐** + **协议兼容性矩阵** + **Desktop 多会话管理** |
| **Pi** | **终端原生/极客美学极致** | Go + **自研 OpenTUI 类渲染**；**RPC/Headless 首创**、子代理模型覆盖、XDG 合规 | 终端重度用户、自动化脚本编写者、容器/受限环境部署者 | **多模型协议细节兼容** + **TUI 渲染/信号安全** + **RPC 会话管理可靠性** |
| **Qwen Code** | **多模态/本地模型/全平台覆盖** | TypeScript + **OpenTUI 迁移中** + **CUA Driver (GUI 自动化)**；Daemon/WebShell 架构 | 需要本地模型隐私、GUI 自动化、多平台集成 (钉钉/Telegram) 的团队 | **TUI 架构重构** (Ink→OpenTUI) + **本地模型兼容性** (llama.cpp) + **Daemon 企业级能力** |

---

## 5. 社区热度与成熟度评估

| 梯队 | 工具 | 社区热度信号 | 成熟度判断 | 关键风险/机会 |
|------|------|--------------|------------|---------------|
| **第一梯队：头部商业化** | **Claude Code**, **Codex** | Issue 高互动 (百条评论/百赞)、PR 质量高、版本节奏快、企业反馈直达 | **高** - 核心功能稳定，但 **跨平台/长会话/协议兼容** 仍有结构性短板 | **机会**：确立企业级标杆；**风险**：复杂度失控导致回归频发，信任透支。 |
| **第二梯队：大厂开源/生态绑定** | **Gemini CLI**, **Copilot CLI** | Issue 结构化标签完善、PR 侧重安全/基建、版本发布规范 | **中高** - 架构扎实，**Copilot 近期回归风险集中暴露**，Gemini 技术债偿还扎实 | **Copilot** 需立即切热修复分支；**Gemini** AST 基建若成将形成护城河。 |
| **第三梯队：快速迭代/社区驱动** | **OpenCode**, **Pi**, **Qwen Code** | PR 吞吐极高 (OpenCode 12合并/天, Pi 20合并/天)、Issue 闭环快、架构重构激进 | **中** - **功能前沿但边缘不稳**；OpenCode 桌面端体验最佳，Pi 终端细节最强，Qwen 重构期波动大 | **机会**：差异化功能 (OpenCode 插件热更、Pi RPC、Qwen

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-02）

---

## 1. 热门 Skills 排行（Top 8）

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|------|------------|----------|--------------|------|
| 1 | **[Hivemind: Zero-Cost Multi-Agent Orchestration](https://github.com/anthropics/skills/pull/1628)** (#1628) | 让 Claude Code 将机械任务委派给基于免费模型的 headless opencode workers，Claude 仅保留规划/审查/合并角色 | 多 Agent 编排架构、成本优化、上下文窗口管理 | `OPEN` |
| 2 | **[self-audit: 机械验证 + 四维推理质量门控](https://github.com/anthropics/skills/pull/1367)** (#1367) | 交付前审计：先做文件存在性机械校验，再按损害严重度优先级进行四维推理审计 | 输出质量保障、通用性（任意栈/模型）、CI/CD 集成潜力 | `OPEN` |
| 3 | **[testing-patterns: 全栈测试模式库](https://github.com/anthropics/skills/pull/723)** (#723) | 覆盖 Testing Trophy、单元/组件/集成/E2E、TDD/BDD、契约测试、性能/混沌/变异测试 | 测试最佳实践标准化、React/Testing Library 实战指导 | `OPEN` |
| 4 | **[document-typography: AI 生成文档排版质量控制](https://github.com/anthropics/skills/pull/514)** (#514) | 解决孤行/寡行、标题断页、编号错位等 AI 文档通病 | 文档专业化输出、排版自动化、用户无感修复 | `OPEN` |
| 5 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (#83) | 元技能：从结构/文档/安全/维护性/测试五维度评分 Skill 质量 | Skill 生态治理、安全基线、自动化评审 | `OPEN` |
| 6 | **[servicenow: ServiceNow 全平台助手](https://github.com/anthropics/skills/pull/568)** (#568) | 覆盖 ITSM/ITOM/ITAM/SAM/FSM/HRSD/CSM/SPM/SecOps/IntegrationHub 等全模块 | 企业级平台技能化、脚本/架构/运维一体化 | `OPEN` |
| 7 | **[claude-api: 模型版本生命周期维护](https://github.com/anthropics/skills/pull/1607)** (#1607) | 标记 4 个退役模型 ID，修正 legacy/deprecated 分类 | 版本治理、避免调用失效模型、上游同步 | `OPEN` |
| 8 | **[pyxel: 复古像素游戏开发](https://github.com/anthropics/skills/pull/525)** (#525) | 基于 pyxel-mcp 的 8-bit 游戏引擎技能：写→运行捕获→检查→迭代 | 游戏开发工作流、MCP 集成范式、可视化迭代 | `OPEN` |

> **注**：所有列出 PR 均为 `OPEN` 状态，反映社区讨论活跃但尚未合并；评论数字段在源数据中显示为 `undefined`，排序依赖原始「按评论数排序」顺序。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **安全与信任边界治理** | [#492](https://github.com/anthropics/skills/issues/492) (43💬) | 社区 Skill 以 `anthropic/` 命名空间分发导致信任边界滥用，需官方/社区技能强隔离 | 🔥🔥🔥🔥🔥 |
| **组织级 Skill 共享与分发** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍) | 原生支持组织内共享 Skill 库，避免手动下载/上传/配置的繁琐流程 | 🔥🔥🔥🔥 |
| **评估/触发机制可靠性** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍) | `run_eval.py` 触发率 0%，`claude -p` 无法正确激活 Skill/Command | 🔥🔥🔥 |
| **Skill 创作者工具链成熟度** | [#202](https://github.com/anthropics/skills/issues/202) (8💬) | `skill-creator` 文档化过重、指令化不足，Token 效率低，命名不规范 | 🔥🔥🔥 |
| **跨平台兼容性** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 下 subprocess/编码/管道读取全链路故障，阻断本地开发 | 🔥🔥 |
| **Agent 治理与推理质量** | [#412](https://github.com/anthropics/skills/issues/412), [#1385](https://github.com/anthropics/skills/issues/1385) | 缺乏 Agent 系统的策略执行/威胁检测/信任评分/审计追踪；需全生命周期质量门控 | 🔥🔥 |
| **MCP 生态互操作** | [#16](https://github.com/anthropics/skills/issues/16), [#1390](https://github.com/anthropics/skills/issues/1390) | Skill 与 MCP 双向暴露、评估脚本对真实 MCP Server 兼容性差 | 🔥🔥 |
| **企业级集成场景** | [#568](https://github.com/anthropics/skills/pull/568), [#1175](https://github.com/anthropics/skills/issues/1175) | ServiceNow/SharePoint 等企业系统的权限、安全、上下文窗口约束 | 🔥 |

---

## 3. 高潜力待合并 Skills（评论活跃、工程完整度高、近期可能落地）

| PR | Skill | 合并可能性理由 | 关键阻塞点 |
|----|-------|----------------|------------|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | 解决「昂贵模型上下文稀缺」核心痛点，架构创新性强，社区关注度极高 | 需验证 opencode 免费模型稳定性、安全边界 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 通用质量门控，可直接接入 CI/CD，解决「交付前幻觉/遗漏」通病 | 四维推理审计的提示词工程调优 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 覆盖面最广的测试指导 Skill，填补「测试最佳实践」空白 | 内容体量大，需拆分模块化维护 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 刚需高频（所有文档输出受益），实现相对独立，低风险 | 需适配多种输出格式 |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 生态治理基建，配合 #492 安全议题，官方激励动力足 | 评分标准需社区共识 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **评估/基准/编码/脚本稳定性修复包** | 修复 `mcp-builder` 序列化、指标计算、编码、脚本稳定性等多项阻塞性 Bug | 涉及面广，需充分回归测试 |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows 兼容性修复** | 直接解开 Windows 开发者贡献链路，影响面广 | 需 Windows CI 验证 |

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：建立「可信、可评估、可分发、跨平台」的 Skill 工程化基建——从命名空间安全隔离、组织级分发机制、自动化评估/质量门控，到 Windows 兼容性与 MCP 互操作，核心矛盾已从「缺什么 Skill」转向「如何让 Skill 生产与消费变得工业级可靠」。**

---

# Claude Code 社区动态日报 | 2026-09-02

---

## 1. 今日速览

- **两个热修复版本连发**：v2.1.258 修复 macOS 12 启动失败与远程会话内容为空回归；v2.1.257 引入 **Claude Fable 5.1** 为默认 Fable 模型（1M 上下文、新定价），并新增 12/24 小时制与 strftime 时间格式设置。
- **Windows 桌面端稳定性成最大痛点**：GPU 进程崩溃导致应用无法启动（#80444，99 条评论）、窗口强制置顶无法关闭（#85891，128 👍）、甚至触发内核 BSOD（#91366）集中爆发。
- **MCP 协议兼容性与权限体系** 成为开发者高频反馈领域：draft-07 `outputSchema` 被客户端拒绝（#86142）、`requiresUserInteraction` 未抑制“不再询问”（#89063）、`bypassPermissions` 多处失效（#75235、#91296）。

---

## 2. 版本发布

| 版本 | 核心变更 | 影响面 |
|------|----------|--------|
| **v2.1.258** | • 修复 macOS 12 (Monterey) 启动崩溃（v2.1.255 回归）<br>• 修复远程/定时会话因重发权限批准导致 “user messages must have non-empty content” 失败 | macOS 旧版本用户、使用远程/调度会话的团队 |
| **v2.1.257** | • **Claude Fable 5.1** (`claude-fable-5-1`) 成为默认 Fable 模型：1M 上下文、$10/$50 per Mtok、缓存读 $0.25/Mtok<br>• 新增 `timeFormat`（12h/24h/24h UTC/strftime）与 `timeZone` 设置 | 全量用户（模型切换）、需精确时间显示的工作流 |

> 🔗 [v2.1.258 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.258) · [v2.1.257 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.257)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 为什么重要 |
|---|-------|------|------|------------|
| 1 | **[#80444](https://github.com/anthropics/claude-code/issues/80444)** Windows Desktop: GPU 进程致命崩溃 (0x060C201E)，应用变砖需修复 | 🟢 Open | 99 💬 / 15 👍 | **阻塞级**：MSIX 包进入 `appxState=2` 无法启动，唯一恢复手段是 Repair；已复现于两个 NVIDIA 驱动版本，影响面广。 |
| 2 | **[#85891](https://github.com/anthropics/claude-code/issues/85891)** Windows 11 窗口强制 Always-on-top，无设置关闭 | 🟢 Open | 58 💬 / **128 👍** | **最高 👍**：日常多任务场景下严重干扰工作流，系对应 macOS 同类问题 #66516，跨平台一致性缺失。 |
| 3 | **[#79337](https://github.com/anthropics/claude-code/issues/79337)** Fable 5 上线首日 Max 计划仍提示 “usage credits required” 并静默降级 Opus 4.8 | 🔴 Closed | 76 💬 / 23 👍 | **计费/权益核心**：新模型发布日即出现权限误判，导致付费用户无法使用标配模型，信任度受损。 |
| 4 | **[#86142](https://github.com/anthropics/claude-code/issues/86142)** MCP `draft-07 outputSchema` 被客户端拒绝 “unsupported dialect” | 🔴 Closed | 41 💬 / 13 👍 | **协议兼容性**：最新 MCP 规范工具在 Claude Code 完全不可用，阻断生态工具链升级。 |
| 5 | **[#61682](https://github.com/anthropics/claude-code/issues/61682)** GitHub Connector 显示 Connected 但 Cowork 无工具暴露 | 🟢 Open | 32 💬 / 24 👍 | **集成失效**：长期未修复，企业协作核心功能受损，涉及 Windows + Desktop + MCP 多层。 |
| 6 | **[#66020](https://github.com/anthropics/claude-code/issues/66020)** macOS 26.5.1 内核 zone 泄漏 (kalloc.1024)，CLI ~20GB 崩溃，泄漏随 Agent 负载线性放大 | 🟢 Open | 26 💬 / 5 👍 | **稳定性/资源泄漏**：高负载下不可控 OOM，Agent 编排场景风险极大。 |
| 7 | **[#27474](https://github.com/anthropics/claude-code/issues/27474)** `claude --worktree` 覆盖 `$GIT_COMMON_DIR/config` 的 `core.hooksPath` | 🟢 Open | 14 💬 / 16 👍 | **Git 配置破坏**：工作流工具修改用户级 Git 钩子，潜在破坏现有 CI/预提交检查。 |
| 8 | **[#32469](https://github.com/anthropics/claude-code/issues/32469)** Vim 模式下光标形状不随模式切换（Insert=beam, Normal=block） | 🟢 Open | 5 💬 / **42 👍** | **高呼声增强**：纯 TUI 体验缺口，无配置项可绕过，影响肌肉记忆与可用性。 |
| 9 | **[#91345](https://github.com/anthropics/claude-code/issues/91345)** Fable 5.1 要求 unstable 版本才能使用 | 🟢 Open | 3 💬 / 0 👍 | **发布同步问题**：v2.1.257 已宣称默认 Fable 5.1，但稳定版无法选用，文档/分发不一致。 |
| 10 | **[#91296](https://github.com/anthropics/claude-code/issues/91296)** `.claude/settings.local.json` 中 `bypassPermissions` 被静默忽略，且 Shift+Tab 循环中消失 | 🟢 Open | 1 💬 / 2 👍 | **权限回归**：项目级绕过权限失效，且 UI 入口消失，疑似 v2.1.25x 回归。 |

> 💡 **关闭但高热度** 仍值得追踪：#79337（计费边界）、#86142（MCP 协议栈）、#75165（嵌套子 Agent 不可控）。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 摘要 | 价值判断 |
|---|----|------|------|----------|
| 1 | **[#20448](https://github.com/anthropics/claude-code/pull/20448)** | 🟢 Open | **web4-governance 插件**：引入 T3 信任张量、实体见证、R6 审计轨迹的 AI 治理框架 | 🌱 生态扩展：面向“可信代理互联网”的基础设施插件，属前瞻性探索，非核心功能。 |
| 2 | **[#78371](https://github.com/anthropics/claude-code/pull/78371)** | 🔴 Closed | **ralph-wiggum 插件加固**：有限迭代、推送/发布守卫、stop-hook 修复 | 🛡️ 安全工程：防止无人值守循环误推/误发布，插件安全基线建设的典范。 |

> ⚠️ 过去 24h 仅 2 个 PR 活动，核心仓库开发重心仍在内部迭代，社区贡献以插件生态为主。

---

## 5. 功能需求趋势（从全部

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-09-02

---

## 1. 今日速览

- **版本迭代加速**：发布了 1 个稳定版修复（v0.152.1）与 3 个 Alpha 预览版（v0.153.0-alpha.1/2/4），核心修复 Guardian 审批对 Node REPL 策略的兼容性。
- **Windows 与远程连接成痛点**：高热度 Issue 集中在 Windows 原生启动失败、WSL 路径解析异常、Android 远程控制重连循环，反映跨平台稳定性仍是社区最大诉求。
- **配额与限流焦虑上升**：多条 Issue 报告 Pro/Plus 用户遭遇“模型容量不足”频繁中断、周配额异常耗尽，团队已通过 PR #42142 引入早期预警机制缓解。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 |
|------|------|----------|
| **rust-v0.152.1** | 稳定版补丁 | **Bug Fix**：Guardian 审批现遵守通过模型元数据提供的 Node REPL 策略，修复此前策略被忽略导致的权限不一致。 |
| **rust-v0.153.0-alpha.4/2/1** | Alpha 预览 | 连续推送三个 Alpha，侧重内部重构与实验性功能验证，暂无公开变更日志。 |

> 🔗 [完整变更日志 v0.152.0→v0.152.1](https://github.com/openai/codex/compare/rust-v0.152.0...rust-v0.152.1)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 核心痛点 | 为什么关键 |
|---|-------|------|----------|------------|
| 1 | [#39903](https://github.com/openai/codex/issues/39903) | 💬56 👍77 | **TUI 折叠“Ran N commands”无法禁用** | 开发者需完整可见命令历史以便调试/审计，77 赞印证强需求。 |
| 2 | [#37403](https://github.com/openai/codex/issues/37403) | 💬47 👍34 | **macOS 桌面端无法恢复 Remote Control 线程** | 离线移动端→在线桌面端的核心工作流断裂，34 赞显示影响面广。 |
| 3 | [#40700](https://github.com/openai/codex/issues/40700) | 💬43 👍2 | **Windows 打包 `codex.exe` 重定位失败导致无法启动** | 原生 Windows 用户完全受阻，属 P0 级阻断性 Bug。 |
| 4 | [#39954](https://github.com/openai/codex/issues/39954) | 💬18 | **Windows + Android 远程控制陷入重连循环** | 移动端远程协作场景不可用，严重影响离线续写体验。 |
| 5 | [#41463](https://github.com/openai/codex/issues/41463) | 💬15 👍7 | **Windows + WSL 创建项目报 `AbsolutePathBuf` 反序列化错误** | WSL 路径映射缺陷，阻碍 Windows 主力开发者使用 Linux 工具链。 |
| 6 | [#41790](https://github.com/openai/codex/issues/41790) | 💬13 👍9 | **Pro 用户频繁遇到“模型容量不足”中断任务** | 付费用户核心体验受损，9 赞反映普遍性。 |
| 7 | [#41088](https://github.com/openai/codex/issues/41088) | 💬12 | **Windows 桌面端更新后本地执行无法启动** | 版本回归，影响本地 Agent 核心能力。 |
| 8 | [#41433](https://github.com/openai/codex/issues/41433) | 💬12 👍7 | **GitHub Connector `mark_pull_request_ready_for_review` 查询无效字段** | 官方集成工能失效，阻碍 PR 工作流自动化。 |
| 9 | [#25934](https://github.com/openai/codex/issues/25934) | 💬8 👍4 | **TUI Markdown 超链接在 OSC 8 终端不可点击** | 长期未修的终端交互细节，影响文档/链接跳转效率。 |
| 10 | [#34263](https://github.com/openai/codex/issues/34263) | 💬7 | **macOS 远程 SSH 任务缺失 Browser/node_repl 工具** | 远程环境工具链不完整，限制全栈开发场景。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心贡献 |
|---|----|------|----------|
| 1 | [#42178](https://github.com/openai/codex/pull/42178) | ✅ Closed | **结构化异步用户输入请求**：引入 `request_user_input_async`，支持多问题/建议答案，Agent 可在等待用户反馈时继续执行。 |
| 2 | [#42147](https://github.com/openai/codex/pull/42147) | ✅ Closed | **Full Access 模式跳过 Guardian 审批**：消除冗余确认，提升高权限模式下的交互流畅度。 |
| 3 | [#42142](https://github.com/openai/codex/pull/42142) | ✅ Closed | **Plus/Team 早期限流预警**：剩余配额 <50% 时提前告警，缓解“突然耗尽”焦虑。 |
| 4 | [#42137](https://github.com/openai/codex/pull/42137) | ✅ Closed | **Shell Snapshot V2 预热**：异步捕获登录 Shell 环境，降低命令启动延迟。 |
| 5 | [#42150](https://github.com/openai/codex/pull/42150) | ✅ Closed | **插件 CLI 支持远程市场**：`codex plugin list/add/remove` 现支持远程目录，生态扩展性增强。 |
| 6 | [#42146](https://github.com/openai/codex/pull/42146) | ✅ Closed | **Executor 上下文解析权限请求**：路径解析统一纳入执行器环境，修复跨平台/WSL 路径不一致。 |
| 7 | [#42144](https://github.com/openai/codex/pull/42144) | ✅ Closed | **Guardian V2 审计事件**：新增分类/快速决策遥测，便于事后复盘与策略调优。 |
| 8 | [#42133](https://github.com/openai/codex/pull/42133) | ✅ Closed | **MCP 审批按 App Account Link 隔离**：防止不同账号下同一工具的审批错漏。 |
| 9 | [#42140](https://github.com/openai/codex/pull/42140) | ✅ Closed | **Vim Composer 增加 Redo (Ctrl+R)**：补齐编辑器基础交互，提升键盘流效率。 |
| 10 | [#42128](https://github.com/openai/codex/pull/42128) | ✅ Closed | **MCP 连接为协调式 OAuth 刷新做准备**：为多连接并发刷新 Token 奠基，提升企业级稳定性。 |

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表性 Issue | 社区呼声强度 |
|----------|--------------|--------------|
| **跨平台稳定性（Windows/WSL/macOS）** | #40700, #41463, #41088, #37403, #28035 | ⭐⭐⭐⭐⭐ 多个 P0 阻断性 Bug，影响核心用户群 |
| **远程协作与移动端续写** | #37403, #39954, #34263, #22844, #32614 | ⭐⭐⭐⭐ 离线→在线无缝切换是差异化卖点 |
| **配额透明化与限流体验** | #41790, #41810, #41969, #41520, #41968 | ⭐⭐⭐⭐ 付费用户对“突然中断/配额不透明”容忍度极低 |
| **TUI/CLI 交互细节打磨** | #39903, #25934, #42140 | ⭐⭐⭐ 高频用户对历史记录可见性、链接点击、撤销/重做有强诉求 |
| **企业级治理与审计** | #41068, #40831, #41809, #42144, #42133 | ⭐⭐⭐ 权限模型、沙箱策略、MCP 审计日志逐渐完善 |

---

## 6. 开发者关注点总结

| 痛点/高频需求 | 典型反馈 | 建议关注优先级 |
|---------------|----------|----------------|
| **Windows 原生体验断层** | 启动失败、本地执行不可用、Open-in 菜单延迟、Pets 交互失效 | **P0** — 占比大、阻断性强，建议专项攻坚 |
| **WSL 路径/工具链集成** | `AbsolutePathBuf` 反序列化、Browser/node_repl 缺失、Git 根发现阻塞 | **P0** — 影响核心开发者日常流 |
| **远程控制可靠性** | macOS 恢复失败、Android 重连循环、线程搜索不可见 | **P1** — 差异化功能，体验断点需逐个击破 |
| **限流/配额可观测性** | 无预警耗尽、周/月配额切换异常、gpt-reserve 消失 | **P1** — 直接关联付费留存，PR #42142 已缓解部分需求 |
| **Guardian 审批策略一致性** | Full Access 仍触发审批、Node REPL 策略被忽略、MCP 审批键冲突 | **P1** — 权限模型复杂度上升，需统一策略引擎 |
| **TUI 终端原生能力** | 超链接不可点、命令折叠无开关、Vim 缺 Redo | **P2** — 高粘性用户精细化诉求，迭代成本低、满意度高 |

---

> **下一步建议**：重点跟进 Windows/WSL 稳定性专项、远程控制重连机制重构、配额预警前端落地；同步关注 v0.153.0 Alpha 系列是否引入破坏性变更。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-09-02

---

## 1. 今日速览
- **版本发布**：推出 **v0.59.0-preview.0** 与 **v0.59.0-nightly.20260902**，核心修复了 Web Fetch 工具的目标验证与连接路由问题，并引入新贡献者 @diegogodinezr。
- **安全与稳定性聚焦**：近期 PR 密集修复认证崩溃、权限提升、Stdin 状态恢复、A2A 服务器硬编码凭证等高优先级安全/稳定性缺陷。
- **长期技术债治理**：多个 P1/P2 级 Issue 持续跟踪，涉及 Subagent 状态误报、Generalist Agent 卡死、Shell 命令挂起、Auto Memory 机制缺陷等核心 Agent 架构问题。

---

## 2. 版本发布

### v0.59.0-nightly.20260902.g4963a4456 (Nightly)
- **核心修复**：`fix(core): improve destination validation and connection routing in web fetch utilities` (#29120) —— 增强 Web Fetch 工具的目标验证与连接路由逻辑，提升网络请求稳定性。
- **新贡献者**：@diegogodinezr 首次贡献合并。
- **链接**：[Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260902.g4963a4456)

### v0.59.0-preview.0 (Preview)
- **变更**：版本号递增至 0.59.0，包含 v0.58.0 以来的累积变更（Changelog 自动生成）。
- **链接**：[Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-preview.0)

### v0.58.0 (Stable - 近期发布)
- **关键修复**：`fix(core): ensure consistent symlink evaluation in ignore path handling` (#28915) —— 修复忽略路径处理中符号链接评估不一致问题。
- **重构**：核心模块重构持续进行。
- **链接**：[Release Page](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0)

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 关键词 | 重要性 & 社区反应 |
|---|-------|--------|------------------|
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | `priority/p1`, `area/agent`, `kind/bug` | **核心逻辑缺陷**：Subagent 触及轮次上限本应标记为中断，却被误报为 `GOAL success`，导致上层编排误判任务完成。13 条评论，👍 2，标记 `need-retesting`。 |
| **#21409** | [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | `priority/p1`, `area/agent`, `kind/bug` | **严重可用性阻塞**：Generalist Agent 介入导致 CLI 无限挂起（甚至简单建目录），需显式禁用子代理规避。8 条评论，👍 8，社区痛点极高。 |
| **#25166** | [Shell command execution stuck at "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166) | `priority/p1`, `area/core`, `kind/bug` | **高频交互故障**：命令已执行完毕但 UI 仍显示“等待输入”，导致会话卡死。4 条评论，👍 3，复现率高。 |
| **#22745** | [Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | `priority/p2`, `area/agent`, `kind/feature`, `workstream-rollup` | **架构演进 Epic**：评估引入 AST 感知能力（精准读取方法边界、减少 Token 噪音、代码导航），关联 #22746。7 条评论，技术债前瞻性治理。 |
| **#21968** | [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | `priority/p2`, `area/agent`, `kind/bug` | **Agent 行为偏差**：模型极少主动调用自定义 Skills/Subagents，需显式指令触发，降低自动化上限。6 条评论。 |
| **#26525** | [Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | `priority/p2`, `area/security`, `kind/bug` | **安全合规风险**：Auto Memory 将本地转录发送模型前未脱敏，密钥可能泄露至模型上下文/服务日志。5 条评论。 |
| **#27957** | [Checkout git branch not reflected in CLI UI](https://github.com/google-gemini/gemini-cli/issues/27957) | `priority/p2`, `area/core`, `kind/bug` | **UI 状态不同步**：Git 分支切换后 CLI 侧边栏 Branch 显示滞后，已关闭但反映状态同步机制缺陷。6 条评论。 |
| **#22232** | [Enhance browser_agent resilience: session takeover & lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232) | `priority/p3`, `area/agent`, `kind/feature` | **Browser Agent 健壮性**：持久化会话模式下遇浏览器配置文件锁定直接失败，建议实现自动接管/恢复。4 条评论。 |
| **#26523** | [Surface or quarantine invalid Auto Memory inbox patches](https://github.com/google-gemini/gemini-cli/issues/26523) | `priority/p2`, `area/agent`, `kind/bug` | **数据完整性**：内存收件箱静默跳过无效补丁，导致汇总统计失真，需显式隔离或报警。3 条评论。 |
| **#22465** | [Gemini CLI stuck at interactive prompt creating vite app](https://github.com/google-gemini/gemini-cli/issues/22465) | `priority/p2`, `area/agent`, `kind/bug` | **交互式 CLI 处理缺失**：创建 Vite 应用时卡在交互式提示符，缺乏非交互模式适配或自动应答策略。2 条评论。 |

---

## 4. 重要 PR 进展 (Top 10)

| # | PR | 状态 | 核心变更 |
|---|----|------|----------|
| **#29163** | [fix(cli): prevent crash during authentication in git repositories](https://github.com/google-gemini/gemini-cli/pull/29163) | **Open** (P1) | **启动崩溃修复**：macOS Seatbelt/受限权限环境下，Git 仓库内启动 CLI 触发 `useGitBranchName` Hook 导致崩溃，现已加容错。 |
| **#29067** | [fix(a2a-server): remove misleading security schemes and hardcoded credentials](https://github.com/google-gemini/gemini-cli/pull/29067) | **Open** (P1, Security) | **安全加固**：移除 A2A Agent Card 中误导性的 `securitySchemes` 与硬编码凭证，明确标注本地开发无认证设计。 |
| **#28889** | [fix(cli): restore paused stdin after capability detection](https://github.com/google-gemini/gemini-cli/pull/28889) | **Closed** (P1) | **Stdin 状态恢复**：终端能力检测后未恢复 `stdin` 暂停状态，导致后续读取异常，新增回归测试覆盖双流态。 |
| **#28888** | [fix(a2a): allow launcher workspace outside home](https://github.com/google-gemini/gemini-cli/pull/28888) | **Closed** (P2, Security) | **工作区隔离放宽**：支持 `CODER_AGENT_WORKSPACE_PATH` 指定启动器工作区，不再强制限制在 Home 目录下。 |
| **#28893** | [fix(core): preserve explicit flash model IDs](https://github.com/google-gemini/gemini-cli/pull/28893) | **Closed** (P1) | **模型 ID 保真**：修复 Gemini 3.5 Flash 推广重写逻辑误改显式模型 ID（如 `gemini-3.6-flash`），保留用户指定版本。 |
| **#29063** | [fix(core): stop Plan Mode waiting on user feedback in non-interactive sessions](https://github.com/google-gemini/gemini-cli/pull/29063) | **Open** (P1) | **非交互模式死锁修复**：Plan Mode 在 `-y` 非交互模式下仍等待用户反馈导致挂起，现自动跳过等待。 |
| **#28875** | [fix(cli): reject fetchJson on malformed JSON or response stream errors](https://github.com/google-gemini/gemini-cli/pull/28875) | **Closed** (P2) | **扩展获取健壮性**：`fetchJson` 增加 `try/catch` 与流错误监听，防止恶意/截断 JSON 导致进程崩溃。 |
| **#28898** | [feat(pr-generator-core): harden subprocess execution security](https://github.com/google-gemini/gemini-cli/pull/28898) | **Closed** | **PR 生成管道安全**：子进程执行、配置摄入、GitHub API 交互全链路加固，防凭证泄露至不可信工具环境。 |
| **#29089** | [fix(core): forward abortSignal to retryWithBackoff in BaseLlmClient](https://github.com/google-gemini/gemini-cli/pull/29089) | **Open** (P2) | **取消传播修复**：`BaseLlmClient` 重试逻辑未透传 `abortSignal`，导致取消信号在摘要/压缩/分类等后台任务中失效。 |
| **#28948~28953** | [PR Generation Evaluation & Deployment Pipeline](https://github.com/google-gemini/gemini-cli/pull/28948) | **Open** (XL) | **评估基建批量落地**：引入 Cloud Run Job、Workflow 编排、Diff 可视化、评估套件、E2E 基准运行器，完善自动化 PR 生成的可观测与部署能力。 |

---

## 5. 功能需求趋势

1. **Agent 编排与可靠性**  
   - Subagent 状态机修正（MAX_TURNS、终止原因）、Generalist Agent 死锁根治、技能/子代理主动调度增强（#22323, #21409, #21968）。
2. **AST 感知工具链**  
   - 以 #22745 为 Epic，推动精准代码读取、搜索、映射，降低 Token 消耗与误读率，配套 #22746 工具选型调研。
3. **Auto Memory 安全与质量闭环**  
   - 确定性脱敏、无效补丁隔离、低信号会话退役、重试风暴抑制（#26525, #26523, #26522, #26516）。
4. **非交互/自动化模式完善**  
   - Plan Mode、Shell 执行、交互式提示符在 CI/脚本场景下的自适应行为（#29063, #25166, #22465）。
5. **企业级部署与扩展生态**  
   - A2A 服务器安全加固、扩展安装并发控制、MCP 环境变量注入同意机制、PR 生成评估管道落地（#29067, #28863, #29087, #28948-28953）。
6. **终端渲染性能**  
   - Resize 闪烁/性能优化，迁移 Ink `RenderStatic`、批量更新历史项（#21924）。

---

## 6. 开发者关注点

| 痛点/需求 | 典型 Issue/PR | 影响面 |
|-----------|---------------|--------|
| **“Agent 靠不住”** | #21409 (Hang), #22323 (False Success), #21968 (Skill 闲置) | 核心自动化流程信任度，阻碍复杂任务委托。 |
| **“Shell 交互卡死”** | #25166 (Waiting input), #22465 (Vite prompt) | 日常开发高频操作中断，体验碎片化。 |
| **“安全合规顾虑”** | #26525 (Memory 泄密), #29067 (Hardcoded creds), #28863 (Ext env inject) | 企业落地合规门槛，阻断生产环境采用。 |
| **“状态不同步”** | #27957 (Git branch UI), #21924 (Resize flicker) | 专业开发者对 UI 一致性与性能的基线要求。 |
| **“可观测性不足”** | #22598 (Subagent trajectory share), #21763 (Bugreport 缺子代理上下文) | 调试/评审/复盘链路断裂，难以规模化推广。 |
| **“模型版本管理混乱”** | #28893 (Flash ID rewrite), #27989 (429 Capacity) | 版本锁定与配额管控需求，关乎成本与稳定性。 |

---

> **数据来源**：`github.com/google-gemini/gemini-cli` | 统计窗口：2026-09-01 至 2026-09-02 (UTC)  
> **下一版本关注点**：v0.59.0 稳定版发布节奏、P1 级 Agent 死锁/崩溃修复进展、AST 工具链 PoC 结果。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-09-02

> 数据来源：`github.com/github/copilot-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **版本发布**：发布 **v1.0.83-1**，重点增强会话侧边栏排序能力，新增企业级强制登录组织配置，并改进 MCP 配置体验。
- **社区动态**：无新增 PR，但 **36 个 Issue 活跃更新**，核心矛盾集中在 **长会话内存泄漏/OOM 崩溃**、**MCP 协议兼容性（OAuth、初始化流程）**、**BYOK 自定义模型回归** 及 **企业级受限环境兼容性** 四大痛点。
- **关键信号**：多个高优先级 Bug（OOM、模型 ID 错误、Sandbox 阻塞）集中出现，提示 v1.0.81/82 版本引入的回归风险较大，亟需补丁版本修复。

---

## 2. 版本发布
### `v1.0.83-1` ([Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.83-1))
| 类别 | 内容 | 影响 |
|------|------|------|
| **新增** | Sessions 侧边栏支持 Recent/Created/Name/None 多维排序，排序偏好持久化 | 🛠️ 体验优化：长期用户管理历史会话更高效 |
| **新增** | 企业管理员可通过 `forceLoginOrgs` 托管设置强制绑定登录组织 | 🏢 企业治理：合规/安全管控能力增强 |
| **改进** | `/mcp config` 及 MCP 添加/编辑交互优化 | ⚙️ 降低 MCP 接入门槛 |

---

## 3. 社区热点 Issues（精选 10 个）

| # | 标题 | 状态 | 👍/💬 | 核心价值/风险 | 链接 |
|---|------|------|------|--------------|------|
| **#4686** | **Node.js OOM 崩溃：~37 分钟泄漏 31,965 个 libuv 句柄，SEA 忽略 NODE_OPTIONS** | 🔴 Open | 0/1 | **P0 阻塞级**：长会话必现内存泄漏，嵌入式 Node (SEA) 限制了用户通过 `NODE_OPTIONS` 调优堆内存，生产环境不可用。 | [#4686](https://github.com/github/copilot-cli/issues/4686) |
| **#4664** | **恢复长会话时 JS 堆内存溢出崩溃** | 🔴 Open | 0/5 | **P0 数据风险**：无法恢复历史上下文，会话资产面临丢失风险，与 #4686 疑为同一根因。 | [#4664](https://github.com/github/copilot-cli/issues/4664) |
| **#4680** | **BYOK 模式下向自定义端点发送错误模型 ID (`gpt-5.4-nano` 而非配置值)，导致会话中断** | 🔴 Open | 0/2 | **P0 回归**：v1.0.81/82 破坏 BYOK 核心功能，企业私有化部署场景完全失效。 | [#4680](https://github.com/github/copilot-cli/issues/4680) |
| **#4672** | **1.0.82 回归：BYOK 环境变量配置模型时 `/model` 命令失效** | 🔴 Open | 1/2 | **P1 回归**：配套 #4680，配置下发链路断裂，影响 Azure AI Foundry 等多模型托管场景。 | [#4672](https://github.com/github/copilot-cli/issues/4672) |
| **#4525** | **MCP 初始化协议冲突：成功完成现代 `server/discover` 后仍发送遗留 `initialize`，触发 -32022 错误** | 🔴 Open | 0/4 | **P1 协议不兼容**：与 Python MCP SDK 2.0+ 双时代运行器冲突，阻断 stdio 传输模式下的 MCP 接入。 | [#4525](https://github.com/github/copilot-cli/issues/4525) |
| **#4203** | **远程 MCP OAuth：Access Token 过期强制交互式重登，忽略缓存的 Refresh Token** | 🔴 Open | 0/1 | **P1 体验/自动化破坏**：非交互式/CI 场景下会话中断，违反 RFC 6749 静默刷新标准。 | [#4203](https://github.com/github/copilot-cli/issues/4203) |
| **#4681** | **MCP OAuth 登录后 `initialize` 请求缺失 User-Agent 及自定义 Header** | 🔴 Open | 0/2 | **P2 可观测性/网关拦截风险**：企业网关常依赖 UA/Header 做路由或审计，缺失导致误拦截。 | [#4681](https://github.com/github/copilot-cli/issues/4681) |
| **#4683** | **PowerShell ConstrainedLanguage 模式下每条 Shell 命令均报错 `$host.SetShouldExit() not permitted`** | 🔴 Open | 0/1 | **P1 企业环境阻塞**：WDAC/AppLocker 托管环境下 CLI 无法静默执行命令，日志噪音极大。 | [#4683](https://github.com/github/copilot-cli/issues/4683) |
| **#4679** | **Sandbox Bug：`sandbox.enabled: false` 不生效，Shell 后端仍初始化 BaseContainer 导致 WRITE_DAC 错误** | 🔴 Open | 0/0 | **P0 Windows 阻塞**：显式关闭沙箱仍强制启动容器化后端，Windows 原生 Shell 完全不可用。 | [#4679](https://github.com/github/copilot-cli/issues/4679) |
| **#13** | **[长期需求] CLI 交互输入缺乏 Vi/Vim 模式** | 🟢 Closed | 75/9 | **社区高呼声 (75👍)**：虽标记 Closed，但高赞说明键盘驱动用户群体刚需强烈，建议纳入规划。 | [#13](https://github.com/github/copilot-cli/issues/13) |

---

## 4. 重要 PR 进展
> **过去 24 小时无新增/更新 PR**。建议关注后续针对上述 P0/P1 Issue 的修复 PR（如内存泄漏修复、BYOK 模型 ID 路由修正、MCP 初始化逻辑重构、Sandbox 开关逻辑修正）。

---

## 5. 功能需求趋势（高频标签聚类）

| 趋势方向 | 相关 Issue 样本 | 社区信号强度 |
|----------|----------------|--------------|
| **🧠 长会话稳定性与内存管理** | #4686, #4664, #4688 (子进程并发无感知), #4687 (`/compact` 丢失 Repo 指令) | ⭐⭐⭐⭐⭐ **核心阻碍** |
| **🔌 MCP 生态兼容性成熟度** | #4525 (协议版本冲突), #4203 (OAuth 刷新), #4681 (Header 缺失), #3421 (Azure DevOps 路径错误), #4678 (ACP 模式启动阻塞) | ⭐⭐⭐⭐ **集成痛点** |
| **🔐 企业级/私有化部署支持 (BYOK, Auth, Policy)** | #4680, #4672, #4414 (403 拦截), #4683 (ConstrainedLanguage), #4679 (Sandbox 强制启动), v1.0.83 `forceLoginOrgs` | ⭐⭐⭐⭐ **商业化关键** |
| **🤖 Agent/Skill 机制完善** | #4438 / #4637 (`disable-model-invocation` 语义混淆), #3688 (路径解析基准不一致), #4655 (Agent Plugin 1.0 发现失败), #4682 (持久化路径级写入审批) | ⭐⭐⭐ **扩展性需求** |
| **🖥️ TUI/交互体验打磨** | #3971 (Repo-backed 会话缺文件树), #4689 (Issues/PR 面板忽略 `gh repo set-default`), #13 (Vim 模式) | ⭐⭐⭐ **日常效率** |

---

## 6. 开发者关注点与痛点总结

1.  **“能不能跑通” > “好不好用”**：当前阻塞性 Bug 密集（OOM、模型 ID 错误、Sandbox 强制启动、Windows Shell 报错），**基础可用性受损严重**，开发者首要诉求是**稳定性回归测试与热修复版本**。
2.  **MCP 集成“最后一公里”坑多**：协议版本协商、OAuth Token 生命周期管理、HTTP Header 透传、ACP 模式启动超时，**缺乏统一的弹性/重试/降级策略**，导致企业自建/第三方 MCP Server 接入成本高。
3.  **BYOK/私有模型链路脆弱**：环境变量配置、CLI 命令、运行时请求体三处模型 ID 不一致（#4680, #4672），且认证拦截发生在本地而非_provider_侧（#4414），调试极其困难。
4.  **企业受限环境适配缺失**：PowerShell ConstrainedLanguage、WDAC/AppLocker、显式禁用 Sandbox 等**合规强制场景**下，CLI 表现为“强制报错”或“强制走容器化路径”，缺乏原生兼容模式。
5.  **长会话上下文管理机制不透明**：`/compact` 丢失指令文件（#4687）、Resume 忽略模型参数（#4645）、推理元数据跨格式回放污染（#4413），开发者对**上下文生命周期失控**感到焦虑。
6.  **Agent/Skill 发现与调用语义不一致**：路径基准差异（Git Root vs CWD #3688）、显式调用却报 Not Found（#4438, #4637）、Plugin 规范落地断层（#4655），**扩展生态信任度待建立**。

---

## 📌 给工程团队的建议
- **即时行动**：切一个 `v1.0.83-hotfix` 分支，优先合并 #4686/#4680/#4679/#4672 修复，恢复 BYOK 与 Windows/长会话基本可用性。
- **技术债专项**：建立 **MCP 协议兼容性测试矩阵**（SDK 版本 × 传输模式 × Auth 类型），引入契约测试防止协议回归。
- **可观测性补齐**：在关键路径（模型路由、MCP 初始化、Sandbox 启动、Token 刷新）埋点结构化日志，便于用户自助排查与支持团队定位。
- **企业合规模式**：新增 `--compliance-mode` 或配置项，一键关闭所有容器化/遥测/交互式回退行为，适配锁死环境。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-09-02

---

## 1. 今日速览
- **核心里程碑**：正式发布 **v1.50.0**，完成从 `kimi-cli` 到 **Kimi Code** 的品牌迁移与废弃感知更新流程，用户可通过一键迁移至新包 `kimi-code`。
- **工程质量**：修复 `kosong` 依赖中空 `anthropic-beta` 头导致的潜在请求异常，并同步更新依赖至 v0.56.0。
- **生态完善**：插件系统文档新增安全性与持久化数据声明，明确插件沙箱边界与数据存储规范。

---

## 2. 版本发布

### **v1.50.0** (2026-09-01)
> [Release Notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.50.0) | [PR #2632](https://github.com/MoonshotAI/kimi-cli/pull/2632)

| 类型 | 变更摘要 | 关联 PR / Commit |
|------|----------|------------------|
| **Fix** | 修复 `kosong`：当未声明 Beta 功能时省略空的 `anthropic-beta` Header，避免上游 API 校验失败 | [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) |
| **Chore** | 升级 `kosong` 依赖至 `0.56.0` | [#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581) |
| **Feat (Breaking/Deprecation)** | **Shell 迁移流程重构**：引入废弃感知更新机制。检测到 CDN 迁移公告 (`migration.json`) 时，标记 Python 包废弃，引导用户一键迁移至 `kimi-code` (npm/pipx) | [#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630) |
| **Chore** | 版本号推进至 1.50.0，同步 `packages/kimi-code` 包装器依赖锁定 | [#2632](https://github.com/MoonshotAI/kimi-cli/pull/2632) |

> ⚠️ **迁移提示**：`kimi-cli` (PyPI) 已进入维护模式，新功能将仅在 `kimi-code` (npm/pipx) 发布。现有用户执行 `kimi update` 即可自动完成迁移。

---

## 3. 社区热点 Issues
*过去 24 小时仅有 2 条 Issue 更新，均为历史遗留问题关闭，反映核心痛点已通过架构调整解决。*

| Issue | 状态 | 核心诉求 | 关闭原因 / 社区反响 | 重要性 |
|-------|------|----------|---------------------|--------|
| [#1287](https://github.com/MoonshotAI/kimi-cli/issues/1287) | **CLOSED** | **任务排队/流水线能力**：执行当前任务时无法预写下一条 Prompt，阻塞交互流 | 可能随 v1.50.0 Shell 重构或新架构 (非阻塞输入/任务队列) 隐性解决；无显式修复记录 | ⭐⭐⭐ 高频交互痛点 |
| [#1292](https://github.com/MoonshotAI/kimi-cli/issues/1292) | **CLOSED** | **Task 子任务卡死**：Darwin arm64 下并发子任务调用概率性 hang 住 | 版本 1.16.0 早期问题；近期 `kosong` 网络层优化 (#2580) 及并发控制改进可能已修复 | ⭐⭐⭐ 稳定性核心指标 |

---

## 4. 重要 PR 进展

| PR | 状态 | 标题 & 核心变更 | 技术影响 |
|----|------|-----------------|----------|
| [#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630) | **MERGED** | **feat(shell): 废弃感知更新流 + 一键迁移 Kimi Code** | **战略级变更**。引入 CDN 下发 `migration.json` 机制，运行时动态判断废弃状态，零配置引导用户切换至新发布渠道 (npm `kimi-code` / pipx)。 |
| [#2632](https://github.com/MoonshotAI/kimi-cli/pull/2632) | **MERGED** | **chore(release): bump kimi-cli to 1.50.0** | 发布自动化闭环：版本号同步、Changelog 归档、Wrapper 依赖锁定 (`kimi-cli==1.50.0`)，CI 校验通过。 |
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **OPEN** | **docs(plugins): 文档化安全与持久化数据契约** | **生态治理**。明确 `plugin.json` 权限模型、命令型工具沙箱、注入点 (`inject`) 安全边界、持久化数据存储路径 (`~/.kimi/plugins/`)，为三方插件审计奠定基础。 |
| [#742](https://github.com/MoonshotAI/kimi-cli/pull/742) | **CLOSED** | **Add `$ list skills like codex`** | 早期功能尝试 (2026-01)，因缺乏维护者确认被关闭。技能/插件发现机制可能并入新插件系统文档 (#2614) 统一设计。 |
| [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) | **MERGED** | **fix(kosong): 省略空 anthropic-beta header** | 网络层鲁棒性修复，消除上游 API 因空 Header 返回 400 的风险。 |
| [#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581) | **MERGED** | **chore(release): bump kosong to 0.56.0** | 依赖升级，引入上游最新协议兼容与性能优化。 |

---

## 5. 功能需求趋势
*基于近期高频 Issue/PR 语义聚类（含历史回溯）：*

| 趋势方向 | 典型诉求 | 当前响应进度 |
|----------|----------|--------------|
| **发布渠道统一与迁移体验** | 摆脱 PyPI 维护负担，统一 npm/pipx 分发，平滑存量迁移 | ✅ **v1.50.0 完成核心迁移闭环** (CDN 驱动 + 一键切换) |
| **插件生态标准化** | 权限模型、持久化路径、安全沙箱、技能发现 (`list skills`) | 🚧 **文档先行** (#2614)；运行时强制隔离待后续 PR 落地 |
| **并发任务与交互非阻塞** | Task 子任务并发稳定性、任务排队/预输入、流式交互 | 🚧 **部分缓解** (kosong 网络层优化)；架构级异步调度器仍在演进 |
| **Shell/原生集成深化** | 原生 Shell 补全、废弃感知、自更新、跨平台安装器 | ✅ **v1.50.0 重构 Shell 入口**，废弃感知、自更新、迁移一体化 |

---

## 6. 开发者关注点 & 痛点

1.  **迁移摩擦零感知**  
    开发者极度敏感「强制迁移」带来的工作流中断。v1.50.0 采用 **CDN 下发策略 + 运行时拦截 + 一键 `kimi update`** 的组合拳，实现「无感知降级、有引导迁移」，社区反馈预期正向。

2.  **插件安全边界模糊**  
    #2614 曝光社区对插件权限（文件系统、网络、命令执行）的担忧。当前仅有文档约束，**缺乏运行时沙箱强制隔离**（如 WASM/容器化），后续需在 `plugin.json` 引入 `permissions` 字段并由 CLI 校验。

3.  **长任务/并发任务的可观测性缺失**  
    #1292「Task 卡死」虽关闭，但根因定位困难（无分布式追踪、任务级日志关联）。开发者呼吁引入 **Task ID 级结构化日志** 与 **取消/超时控制面**。

4.  **交互模式的「异步化」滞后**  
    #1287 反映的「执行中不可预写下一指令」本质是 **REPL 单线程阻塞模型**。竞品 (Claude Code, Codex) 已支持任务队列/后台执行/流式切换，Kimi Code 需在 Shell 层引入 **Actor 模型或协程调度器**。

5.  **跨平台原生体验一致性**  
    #1292 仅复现于 `Darwin arm64`，暴露 **原生模块 (Node/NAPI) 或 Shell 兼容性测试矩阵不足**。建议 CI 增加 `macos-arm64` `windows-x64` 并发压测。

---

> **下一关注点**：v1.50.1 热修复窗口（迁移边缘案例）、插件运行时沙箱 POC、异步任务队列 RFC。  
> **数据来源**：`github.com/MoonshotAI/kimi-cli` | 统计窗口：2026-09-01 00:00 – 23:59 (UTC+8)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-09-02

---

## 1. 今日速览

- **v1.18.26 发布**，重点修复 Claude 5 会话对陈旧 thinking blocks 的容错、Bedrock GPT-5.6 推理参数兼容性、工具调用计时准确性等核心稳定性问题。
- **社区高热度 Issue 多已关闭**：Opus 4.6 prefill 报错（#13768，72 条评论）、PowerShell 下 `/exit` 误退出终端（#26038、#22003）、Windows 沙箱权限导致启动失败（#46696）等长期痛点均在今日得到修复或合并。
- **PR 活跃度极高**：20 条高关注 PR 中 12 条已合并，涵盖 TUI 文件预览、时间线详情预设、插件热更新、grep 选项增强、Windows PowerShell 路径修正等核心体验改进。

---

## 2. 版本发布

### v1.18.26 (2026-09-02)
| 类别 | 变更摘要 |
|------|----------|
| **Claude 5** | 会话不再因陈旧 thinking blocks 而失败，兼容 prompt/工具变更后的上下文 |
| **Bedrock** | GPT-5.6 模型支持 `none` reasoning effort；推理与重放处理更可靠（@pengzh1） |
| **工具计时** | 修复工具调用计时在特定场景下失准的问题 |

> 🔗 [Release v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 关注理由 |
|---|------|------|---------|----------|
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | Opus 4.6 不支持 assistant message prefill | ✅ Closed | 72 / 35 | **最高热度**。影响 Copilot + Opus 4.6 用户，会话频繁中断，已在 v1.18.26 中修复 |
| [#22003](https://github.com/anomalyco/opencode/issues/22003) | Windows TUI 退出导致终端窗口关闭 | ✅ Closed | 3 / 13 | **高赞痛点**。Cmd/PowerShell 下 `/exit`、`Ctrl+D` 直接关窗，严重影响 Windows 开发体验 |
| [#26038](https://github.com/anomalyco/opencode/issues/26038) | `/exit` 在 PowerShell 中直接退出 Shell | ✅ Closed | 10 / 2 | 同类问题，已随 #46712 修复合并 |
| [#39851](https://github.com/anomalyco/opencode/issues/39851) | Desktop “在 PowerShell 中打开” 报 CommandNotFoundException | 🟢 Open | 3 / 0 | **Windows 桌面端阻断性 Bug**。IPC 传参方式错误，PR #46712 已提交修复 |
| [#31259](https://github.com/anomalyco/opencode/issues/31259) | GitHub Copilot Claude 返回 400：whitespace-only assistant message | ✅ Closed | 5 / 0 | 协议层兼容性问题，影响 Copilot 用户 |
| [#31724](https://github.com/anomalyco/opencode/issues/31724) | 暴露 OpenAI 兼容端点（本地 opencode serve） | ✅ Closed | 5 / 2 | **生态集成需求**。允许外部工具复用已配置的模型/Provider，已实现 |
| [#34049](https://github.com/anomalyco/opencode/issues/34049) | 状态泄漏：新会话输入框残留上一会话文本 | ✅ Closed | 2 / 4 | Desktop 多会话切换体验缺陷，已修复 |
| [#35207](https://github.com/anomalyco/opencode/issues/35207) | MCP tool-call 后会话永久挂起（死锁） | ✅ Closed | 2 / 0 | 严重稳定性问题，常见于 Playwright 调用，无超时恢复机制 |
| [#35105](https://github.com/anomalyco/opencode/issues/35105) | `question` 工具在 Gemini 模型下 SchemaError | ✅ Closed | 2 / 1 | 参数扁平化导致 schema 校验失败，影响 Gemini 用户 |
| [#35116](https://github.com/anomalyco/opencode/issues/35116) | SQLite NOT NULL constraint failed: session_message.seq | ✅ Closed | 2 / 0 | 切换模型后发送失败，数据层并发写入竞态 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 |
|---|------|------|----------|
| [#46712](https://github.com/anomalyco/opencode/pull/46712) | fix(desktop): Windows 下在项目目录打开 PowerShell | 🟢 Open | 修复 #39851/#40045/#40277。`open-path` 改用 `-WorkingDirectory` 而非位置参数传路径 |
| [#46717](https://github.com/anomalyco/opencode/pull/46717) | feat(app): 时间线详情预设与布局控制 | 🟢 Open | 新增 5 级详情预设（Everything→Text only），分离 Placement 与 Details，工具/子代理分组展示 |
| [#46714](https://github.com/anomalyco/opencode/pull/46714) | feat(tui): 只读文件预览对话框 | 🟢 Open | `/preview` 打开只读预览，支持导航、搜索、行号，原型设计讨论中（Refs #43598） |
| [#46699](https://github.com/anomalyco/opencode/pull/46699) | feat(plugin): TUI 插件对话框支持原地更新 | ✅ Closed | 新增 `ctrl+u` 热键与 `update` 动作，插件列表可直接升级无需 CLI |
| [#46716](https://github.com/anomalyco/opencode/pull/46716) | feat(core): grep 新增 `literal` 与 `caseSensitive` 选项 | 🟢 Open | 映射 ripgrep `--fixed-strings` 与 `-i`，工具描述与输入提示同步更新 |
| [#46715](https://github.com/anomalyco/opencode/pull/46715) | fix(app): 后台提示最少显示 1 秒 | 🟢 Open | 解决短命工具导致 “Move to background” 提示一闪而过 |
| [#46710](https://github.com/anomalyco/opencode/pull/46710) | fix(core): 移除 models.dev 结构化克隆，提升 40ms 启动性能 | 🟢 Open | 6300 模型快照不再逐个 `structuredClone`，改用浅拷贝+惰性深拷贝 |
| [#46631](https://github.com/anomalyco/opencode/pull/46631) | fix(core): 读取时重建注册表状态 | 🟢 Open | 修复插件启动期 OAuth 方法注册竞态，避免凭证刷新被跳过导致模型缺失 |
| [#46682](https://github.com/anomalyco/opencode/pull/46682) | fix(cli): 缓存 ACP 目录前等待插件激活完成 | 🟢 Open | 避免早期请求仅看到内置模型并锁定不完整目录 |
| [#46705](https://github.com/anomalyco/opencode/pull/46705) | fix(desktop): 生产版打包 CLI | ✅ Closed | 复用 V2 CLI artifact，强制要求 `OPENCODE_CLI_DIST`，修复生产构建缺失 CLI 问题 |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 社区呼声 |
|----------|---------------|----------|
| **Windows 原生体验修复** | #22003, #26038, #39851, #46712, #46696 | ⭐⭐⭐⭐⭐ 多个高赞阻断性 Bug，沙箱权限、路径传参、退出行为均在本轮集中解决 |
| **模型/Provider 协议兼容性** | #13768, #31259, #34988, #35105, #35114, #34770 | ⭐⭐⭐⭐⭐ Anthropic/Gemini/Copilot/Ollama 等多厂商边缘案例频发，system prompt 解耦需求明确 |
| **Desktop 多会话/项目管理增强** | #30348, #33744, #34049, #35123, #3525

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-09-02

> 数据来源：`github.com/earendil-works/pi` (pi-mono)  
> 统计窗口：过去 24 小时（2026-09-01 ~ 2026-09-02）

---

## 1. 今日速览

*   **无新版本发布**，但合并了 **20 个 PR**，修复了大量 TUI 渲染、代理生命周期、扩展加载及多模型提供商兼容性问题。
*   社区高度关注 **Linux 规范合规（XDG 目录）**、**Gemini 3.x / Grok 4.6 等新模型工具调用故障**、**HTTP 代理下的连接稳定性** 及 **TUI 交互细节打磨**。
*   扩展生态侧重于 **子代理模型覆盖**、**RPC 模式下的会话管理** 与 **凭证存储并发性能** 优化。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 Top 10）

| # | Issue | 状态 | 核心看点 | 热度 (👍/💬) |
|---|-------|------|----------|-------------|
| 1 | **[#2870] Follow XDG Base Directory** | ✅ CLOSED | **高赞社区呼声**：Linux 下配置目录污染 `$HOME`，强制要求遵循 XDG 规范 (`$XDG_CONFIG_HOME`)。历时 5 个月、21 条评论、54 👍 最终合规。 | 54 / 21 |
| 2 | **[#6996] Gemini 3.x models fail during tool use (missing `thought_signature`)** | 🔴 OPEN | **阻塞性 Bug**：Gemini 3.5/3.6 系列调用工具后提交结果失败，导致模型不可用。涉及核心模型兼容层，急需修复。 | 0 / 7 |
| 3 | **[#8134] Agent stops after first tool call via forward proxy (plain HTTP)** | 🔴 OPEN | **企业级环境痛点**：`HTTP_PROXY` 指向前向代理时，首次工具调用后后续模型请求挂起。v0.84.0 回归，影响内网/受限环境用户。 | 0 / 6 |
| 4 | **[#8973] Grok 4.6 re-issues identical tool call indefinitely** | ✅ CLOSED | **严重回归**：xAI Responses 路由下 Grok 4.6 陷入工具调用死循环，工具结果未被纳入上下文。v0.84.3 引入，已紧急修复。 | 0 / 2 |
| 5 | **[#8938] Wide, short inline images stretched vertically** | 🔴 OPEN | **TUI 渲染缺陷**：宽高比极大的图片（如 615×86）在全屏模式下被错误拉伸，布局算法需修正单元格尺寸计算。 | 0 / 3 |
| 6 | **[#8920] RPC `abort` reports success but compaction continues** | 🔴 OPEN | **RPC 可靠性**：手动压缩期间调用 `abort` 返回成功，实则未取消，导致后续 `prompt` 被拒。状态机同步逻辑缺失。 | 0 / 2 |
| 7 | **[#8933] TUI crash: extension `renderResult` returning `undefined` on error tool result** | ✅ CLOSED | **稳定性修复**：扩展返回 `undefined` 导致 `Box.render` 崩溃退出。需加防御性编程，已修复。 | 0 / 2 |
| 8 | **[#8927] Credential store read takes exclusive lock (200ms budget)** | ✅ CLOSED | **并发性能瓶颈**：多会话并发读取凭证时因独占锁超时失败。快照读应用共享锁，已优化。 | 0 / 2 |
| 9 | **[#8977] llama.cpp catalog empty under `--cap-drop ALL` (misleading error)** | ✅ CLOSED | **容器安全兼容**：权限受限容器中 llama.cpp 供应商静默失败，错误提示“No API key”误导排查。需优雅降级并修正报错。 | 0 / 1 |
| 10 | **[#4758] Split `settings.json` into user-owned vs pi-owned (`state.json`)** | ✅ CLOSED | **架构重构落地**：将动态状态（如最近使用模型）剥离至 `state.json`，避免用户配置文件被频繁覆盖引发冲突。 | 0 / 4 |

---

## 4. 重要 PR 进展（精选 Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | **[#8969] feat: add model & thinking overrides to subagent tool** | ✅ MERGED | 子代理工具新增 `model` / `thinking` 参数，支持调度时指定轻量/重量模型，解决“侦察用快模型、规划用强模型”需求。 | #8970 |
| 2 | **[#8966] fix: `--provider` without `--model` selects default; auth failures name provider** | ✅ MERGED | CLI 体验修复：仅指定 `--provider` 时自动选用该提供商默认模型；认证失败错误信息明确指出提供商名称。 | - |
| 3 | **[#8898] fix(tui): wrap SIGWINCH self-signal for restricted seccomp** | ✅ MERGED | **容器安全兼容**：在 `--cap-drop ALL` / seccomp 严格策略下包装 `SIGWINCH` 自发信号，防止 TUI 启动崩溃。 | #8897 |
| 4 | **[#8941] fix(ai): add `supportsMaxOutputTokens` compat flag for openai-responses** | ✅ MERGED | **网关兼容**：Codex 等代理拒绝 `max_output_tokens`，新增兼容标志默认开启，可选择性关闭。 | - |
| 5 | **[#8936] fix(agent): stop prepared tools after preflight abort** | ✅ MERGED | **生命周期修正**：预检拦截后阻止已准备的并行工具启动，标记为 `Operation aborted`，避免脏状态。 | - |
| 6 | **[#8937] fix: settle active turn before in-memory fork** | ✅ MERGED | **会话分叉安全**：内存分叉前等待当前工具轮次结束，防止 `toolResult` 落入错误会话导致资源泄漏。 | - |
| 7 | **[#8946] fix(extensions): never serve stale pre-trust runtime** | ✅ MERGED | **扩展加载可靠性**：会话替换（fork/resume）期间预信任运行时失效问题，确保最终加载使用最新运行时实例。 | - |
| 8 | **[#8737] fix(ai): match subdomains & root domains in NO_PROXY** | ✅ MERGED | **网络代理完善**：`NO_PROXY` 支持通配符 (`*.example.com`)、裸域名、IPv6 格式，修复子域名匹配不生效。 | #8736 |
| 9 | **[#8900] feat(tui): two-column layout for selections (thinking/models/scoped)** | ✅ MERGED | **TUI 交互升级**：`/thinking`、`/model` 等选择器采用 `→ ✓ xhigh` 双栏布局，清晰指示当前激活项。 | - |
| 10 | **[#8627] fix: use `ctx.cwd` for cwd-sensitive tools** | ✅ MERGED | **扩展工具正确性**：`read/write/edit/glob/grep/ls/bash` 等工具统一使用 `ExtensionContext.cwd`，修复项目根目录变更时的路径解析错位。 | - |

> **进行中值得关注**：
> *   [#8799] `feat(tui): prettier Working... spinner` (UI 打磨)
> *   [#8635] `fix(ai): preserve aborted stop reason during lazy setup` (中断信号传递)
> *   [#8158] `feat: upgrade Mermaid terminal rendering` (图表渲染增强)

---

## 5. 功能需求趋势洞察

1.  **多模型/多提供商生产级适配**  
    *   Gemini 3.x (`thought_signature`)、Grok 4.6 (工具循环)、OpenAI Responses 兼容层 (`max_output_tokens`)、Fireworks GLM 5.3、Bedrock 工具 Schema 严格模式、Anthropic Workspace ID、Claude Code OAuth Token。  
    *   **趋势**：模型侧不再仅追求“接入”，转向**协议细节兼容、工具调用鲁棒性、企业级身份认证支持**。

2.  **TUI 体验精细化与稳定性**  
    *   图片布局算法、全屏模式 Footer/滚动/重绘、选择器双栏指示、Working Spinner 美化、Zed/Alacritty 终端能力检测、SIGWINCH 信号安全。  
    *   **趋势**：从“能用”向“好用、不崩、适配主流终端”演进。

3.  **RPC / Headless / 自动化场景增强**  
    *   `abort` 

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

` at end.
19. #10422 (3 comments, CLOSED): CI release pipeline slowing down (Quality Checks ~44 min).
20. #10693 (3 comments): Image reads wedge OpenAI-compatible routes (re-encoded JPEG data URL).
21. #10745 (2 comments): Edit confirmation offers "Modify with external editor" when editor unavailable.
22. #10742 (2 comments): `qwen extensions install` from .zip URL silently exits 0 on Windows.
23. #10741 (2 comments): Same as above but general.
24. #10108 (2 comments, CLOSED): Review: provision worktree dependencies from host cache.
25. #10734 (2 comments): CI: 1000ms CPU budget in test is wall-clock applied to CPU-time metric (flaky on GH runners).
26. #10733 (2 comments): perf(dws): avoid full cursor rewrites for pending-message journal updates.
27. #10728 (2 comments): Follow-up: OpenTUI migration deferred review items.
28. #10716 (2 comments): Web Shell workflow follow-ups from PR #10594 review.
29. #10718 (2 comments): Ctrl+C exit warning overflows shorter terminals.
30. #10717 (2 comments): feat: expose structured scheduled-task titles in session summaries.

**PRs (Top 20 by comments, updated in last 24h):**
Note: "评论: undefined" likely means 0 or not fetched. I'll rely on titles and descriptions.
1. #10617: feat(qwen-live): ACP backend adaptor and multi-backend routing (M4).
2. #10758: fix(ci): stabilize verify-capture fallback-grey test on fontless hosts.
3. #10457: feat(dingtalk): present tool permission requests with native interactive cards.
4. #10738: test(ci): make web-shell visuals publish stub module-safe.
5. #10458: fix(review): keep quoted code from blinding the footer strip.
6. #10123: fix(ci): salvage superseded review runs and hold loop's report-time base refresh.
7. #10672: fix(vscode): stop webview bundle test timing out under CI contention.
8. #10575: ci: give seconds-long jobs their own ECS lane.
9. #10639: feat(web-shell): expose ready session artifact snapshots.
10. #10739: feat(opentui): Activate OpenTUI backend behind QWEN_TUI_RENDERER (Batch 6 of migration).
11. #9402: feat: agent board — share work across independently started agents.
12. #10548: ci: skip product tests for ECS updater maintenance.
13. #10183: feat(memory): add structured on-demand recall.
14. #9590: feat: support provider-aware reasoning controls.
15. #10747: feat(web-shell): expose session artifact snapshots (similar to #10639?).
16. #10752: fix(core): validate git pull option combinations and detached HEAD.
17. #10713: feat(channels): add BTW side questions to Channel conversations.
18. #9466: refactor: anchor rewind mapping to stable prompt identity.
19. #10754: fix(web-shell): disable Push while branch is behind upstream.
20. #10732: fix(serve): keep prompt-turn failure logs from degrading to [object Object].

**Synthesis:**

**今日速览:**
- Release: `cua-driver-rs-v0.20.3` released with prebuilt binaries for all platforms.
- Major TUI Migration: OpenTUI migration (Issue #8662, PR #10739) is advancing (Batch 6 activated behind flag).
- Critical Bugs in 0.22.3: llama.cpp grammar parsing failures (#10520, #10530), permissions regression (#10218), Node 20 build failure (#10698).
- Web Shell & Daemon: Active development on session navigation (#10750), artifact snapshots (#10639, #10747), and stability (#10710, #10732).
- CI/CD Optimization: Multiple PRs addressing pipeline speed (#10575, #10422, #10123, #10738, #10672).

**社区热点 Issues (Top 10):**
1. #8662 (OpenTUI Migration) - Core architecture refactor, 17 comments.
2. #10520 / #10530 (llama.cpp 400 Grammar Error) - Blocking for local model users, P2 bugs.
3. #10218 (Permissions Breaking Change) - Silent failure mode change, P1, needs docs/fix.
4. #10698 (Node 20 Build Failure) - Tooling/Dependency issue.
5. #10749 (TUI Scrolling Bug) - UX regression in interactive mode.
6. #10583 (Bubblewrap Sandbox) - Highly requested Linux security feature (4 comments, security label).
7. #10710 (Session Reload Data Loss) - Daemon/WebShell reliability.
8. #10162 (ACP Queue Backpressure) - Daemon stability.
9. #2339 (Telegram Bot) - Long-standing feature request (3 likes).
10. #10750 (Web Shell Turn Navigation) - UX parity with Codex, in progress.

**重要 PR 进展 (Top 10):**
1. #10739 (OpenTUI Activation) - Key milestone for #8662.
2. #10617 (qwen-live ACP Multi-backend) - Major architecture for voice/live mode.
3. #10183 (Structured Memory Recall) - Core agent capability improvement.
4. #9590 (Provider-aware Reasoning Controls) - Model integration depth.
5. #9402 (Agent Board) - Multi-agent coordination foundation.
6. #10752 (Git Pull Validation) - Core tool robustness.
7. #10713 (/btw Side Questions for Channels) - Collaboration feature.
8. #10575 (CI ECS Lane Optimization) - Infrastructure speedup.
9. #10457 (DingTalk Interactive Cards) - Platform integration.
10. #10758 / #10738 / #10672 (CI Test Stabilization) - Developer productivity.

**功能需求趋势:**
1. **TUI 现代化与稳定性**: OpenTUI 迁移、滚动修复、渲染层重构。
2. **本地模型兼容性**: llama.cpp 语法解析、超时配置、推理参数控制。
3. **Web Shell / Daemon 企业级能力**: 会话导航、制品快照、ACP 队列背压、侧边问题。
4. **沙箱与安全**: Bubblewrap 支持、权限模型细化。
5. **多平台集成**: DingTalk 卡片、Telegram Bot、VSCode 扩展稳定性。
6. **CI/CD 效能**: 自托管跑道划分、测试稳定性、流水线加速。

**开发者关注点:**
1. **版本回归风险**: 0.22.3 引入多个阻塞性 Bug (权限、llama.cpp、构建、滚动)。
2. **文档滞后**: 权限语义变更未更新文档 (#10218)。
3. **本地开发体验**: Node 版本兼容、构建通过、测试不再 flaky。
4. **长上下文/会话管理**: 会话恢复、历史记录导航、记忆召回结构化。
5. **原生桌面/移动能力**: Telegram、DingTalk、CUA Driver (GUI 自动化)。

Now I will write the report in Chinese# Qwen Code 社区动态日报 | 2026-09-02

---

## 1. 今日速览
- **基础设施交付**：发布 `cua-driver-rs v0.20.3` 预构建二进制，覆盖 macOS（签名公证）、Linux、Windows（UIAccess），为 GUI 自动化能力（CUA）落地铺路。  
- **核心架构迁移提速**：TUI 渲染层从 Ink 迁移至 OpenTUI 进入 **Batch 6 阶段**（PR #10739），已可通过环境变量 `QWEN_TUI_RENDERER` 启用原生后端，终端体验重构进入可验证期。  
- **0.22.3 版本回归风险集中爆发**：llama.cpp grammar 解析失败（#10520、#10530）、权限模型静默破坏性变更（#10218）、Node 20 构建失败（#10698）、TUI 滚动异常（#10749）等高优 Bug 密集涌现，社区反馈强烈。

---

## 2. 版本发布
### `cua-driver-rs-v0.20.3` (Qwen CUA Driver Prebuilt Binaries)
- **定位**：`packages/cua-driver` 内置的跨平台 GUI 自动化驱动预构建产物。
- **平台矩阵**：
  - **macOS**：Universal Binary，已代码签名并公证，附带 `QwenCuaDriver.app`。
  - **Linux**：x86_64 / arm64，glibc ≥ 2.31，未签名。
  - **Windows**：x86_64 / arm64，无签名 UIAccess Worker + 原生 SDK 载荷。
- **意义**：为 Agent 操作图形界面（点击、输入、截图）提供底层原生支撑，解除对外部依赖的运行时下载与版本不一致问题。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心看点 | 热度/标签 | 为何关键 |
|---|-------|----------|-----------|----------|
| 1 | **[#8662](https://github.com/QwenLM/qwen-code/issues/8662)** Migrate TUI rendering layer from Ink to OpenTUI (tracking) | 架构级重构追踪 Issue，17 条评论 | `priority/P3`, `roadmap/terminal-ux` | **核心 UI 基建**。Ink 补丁超 1000 行且难维护，OpenTUI 提供原生渲染、无闪烁、更好滚动性能，迁移完成将彻底解决 TUI 稳定性痛点。 |
| 2 | **[#10520](https://github.com/QwenLM/qwen-code/issues/10520)** toolSearch threshold > 0 causes llama.cpp 400 "failed to parse grammar" | 已关闭，但揭示 0.22.3 回归 | `priority/P2`, `type/bug`, `scope/mcp` | **本地模型阻塞器**。`toolSearch.threshold > 0` 触发 grammar 生成失败，导致 MCP 工具不可用。大量自托管用户受影响，需回溯修复或提供 Workaround。 |
| 3 | **[#10530](https://github.com/QwenLM/qwen-code/issues/10530)** 400 Failed to initialize samplers in 0.22.3 | 5 条评论，同根同源 | `priority/P2`, `type/bug` | 同为 llama.cpp grammar 解析失败，Qwen 3.8/3.6 模型受影响，Gemma 正常。0.22.2 正常，确认为 0.22.3 回归。 |
| 4 | **[#10218](https://github.com/QwenLM/qwen-code/issues/10218)** permissions.allow 语义变化：未覆盖工具直接禁用（无询问），文档未说明 | **P1 级破坏性变更**，5 条评论 | `priority/P1`, `type/bug`, `scope/settings` | **信任与安全底线**。0.22.1 起 `allow` 从“自动批准白名单”变为“注册表白名单”，未列入工具直接报错拒绝，**且无交互确认、需重启生效**。文档滞后导致用户误判为 Bug，破坏升级信心。 |
| 5 | **[#10698](https://github.com/QwenLM/qwen-code/issues/10698)** Build fails on Node 20 with ESM errors | 4 条评论，工具链阻塞 | `priority/P3`, `scope/build-system` | **开发者上手门槛**。Node 20 为 LTS 主流，构建即报 `ERR_REQUIRE_ESM`，阻碍贡献者与二次开发者。 |
| 6 | **[#10749](https://github.com/QwenLM/qwen-code/issues/10749)** TUI scrolling loads previous prompts into input | 3 条评论，交互回归 | `priority/P2`, `type/bug`, `scope/interactive` | **核心交互体验断裂**。鼠标滚轮/触控板滚动历史会话时，错误地将历史提词填入输入框，而非滚动视图。Ink 迁移前遗留或并行引入的严重 UX 缺陷。 |
| 7 | **[#10583](https://github.com/QwenLM

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*