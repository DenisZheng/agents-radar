# AI CLI 工具社区动态日报 2026-04-29

> 生成时间: 2026-04-29 00:20 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-04-29

---

## 1. 生态全景

当前 AI CLI 工具生态呈现"多极竞争、能力趋同、体验分化"格局。头部工具（Claude Code、Codex）已进入企业级功能深耕阶段，MCP 生态集成和权限模型精细化成为标配；中国厂商工具（Kimi CLI、Qwen Code）在快速追赶中展现出架构创新活力（如 RalphFlow、热重载系统），但 Windows 兼容性和稳定性仍是跨地域共性短板。全行业正经历从"功能可用"向"生产可信"的关键跃迁——数据持久化安全、计费透明度、推理可观测性成为新的竞争分水岭。

---

## 2. 各工具活跃度对比

| 工具 | Issues（今日活跃/提及） | PRs（今日活跃/提及） | Release 动态 | 迭代节奏特征 |
|:---|:---|:---|:---|:---|
| **Claude Code** | 10 个热点（7 open/3 closed） | 6 个（Codeturion 主导 4 个） | v2.1.121 + v2.1.122 双版本 | **高频补丁**，24h 内连发两版，MCP 与企业级功能并行 |
| **OpenAI Codex** | 10 个热点（8 open/2 closed） | 10+ 个（含 8 个架构迁移系列） | rust-v0.126.0-alpha.9~11（24h 三连发） | **架构重构期**，权限模型从 SandboxPolicy → PermissionProfile 迁移 |
| **Gemini CLI** | 10 个热点（9 open/1 closed） | 10 个（ACP 重构为核心） | v0.41.0-nightly + preview.0 + v0.40.0 正式版 | **协议层创新**，ACP 模块化重构进入 Phase 1 |
| **GitHub Copilot CLI** | 10 个热点（6 open/4 closed） | 2 个（均为配置类，已关闭） | **v1.0.39**（后台任务、ACP 会话命令） | **官方主导**，社区外部贡献渠道有限，功能发布与公开 PR 脱钩 |
| **Kimi CLI** | 10 个热点（9 open/1 closed） | 10 个（含 2 个架构级 PR） | **v1.40.0**（OAuth 恢复、Shell 状态栏） | **模式创新期**，只读模式/afk 模式/yolo 解耦等交互范式探索 |
| **OpenCode** | 10 个热点（7 open/3 closed） | 10 个（含 Effect 架构迁移系列） | v1.14.29（Moonshot/Kimi 兼容修复） | **架构债务偿还**，Effect/HttpApi 迁移加速，安全修复流程存争议 |
| **Pi** | 10 个热点（2 open/8 closed） | 10 个（7 merged/3 open） | **v0.70.6**（Cloudflare Workers AI、自动更新） | **稳健迭代**，TUI 精细化打磨，关闭率高反映响应速度 |
| **Qwen Code** | 10 个热点（8 open/2 closed） | 10 个（9 open/1 closed） | v0.15.4 + SDK TS v0.1.7 | **基建扩张期**，热重载/后台任务/成本估算等系统化能力构建 |

> **注**：各工具"今日活跃"统计口径基于日报精选 Issues/PRs，非全量仓库数据。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求与共性 |
|:---|:---|:---|
| **🧠 推理透明度与思考块管理** | Claude Code (#8477, #54482)、Codex (#20060)、Pi (#3208)、Qwen Code (#3637) | 思考过程强制显示、防止静默剥离、reasoning_content 跨轮次传递——开发者对"黑箱推理"的信任危机贯穿全线 |
| **🔒 权限模型精细化** | Claude Code (#51798, #54477)、Codex（PermissionProfile 迁移）、Kimi CLI (#2109 只读模式, #2095 分级审批)、Copilot CLI (#1973 白名单) | 从二元 allow/deny 转向风险分级：只读/读写/自动三态、工具级粒度、Hook 决策持久化 |
| **💰 计费与成本可观测性** | Claude Code (#53262 幽灵计费)、Copilot CLI (#2591 单次 80-100 Premium 请求)、Qwen Code (#3203 免费额度收紧, #3631 成本估算)、Pi (#3909 定价修正) | 额度黑箱、Agent 模式指数级计费、多账户串扰——"花多少"比"能花"更紧迫 |
| **🖥️ Windows/WSL 原生体验** | Claude Code (#12506, #40198)、Codex (#16088, #18404)、Gemini CLI (#24202, #26088)、Kimi CLI (#2106)、OpenCode (#2100) | 终端检测、编码、路径处理、启动性能——Windows 开发者系统性处于"二等公民"地位 |
| **🤖 MCP/工具生态扩展性** | Claude Code (alwaysLoad)、Codex (#2628 项目级 MCP, #19949 外部迁移)、Gemini CLI (#24246 >128 工具 400 错误)、Kimi CLI (#2096 MCP 容量)、Copilot CLI (#2282 连接失败) | 工具数量膨胀后的加载策略、连接可靠性、跨项目配置继承 |
| **💾 数据持久化与可靠性** | Claude Code (#54477 无确认 DELETE)、Kimi CLI (#2093 fsync)、OpenCode (#24628 存储丢失, #11112 写入卡顿)、Qwen Code (#3697 文件回滚) | 从"会话能恢复"到"异常退出不丢数据"再到"代码变更原子回滚"的层层递进 |

---

## 4. 差异化定位分析

| 工具 | 核心功能侧重 | 目标用户画像 | 技术路线特征 |
|:---|:---|:---|:---|
| **Claude Code** | 企业级安全合规（Bedrock SLA）、MCP 生态深度集成、长会话推理链 | 企业工程师、安全敏感型组织 | 闭源快速迭代，Anthropic 模型优先，Hook/插件体系成熟 |
| **OpenAI Codex** | 沙箱安全模型（PermissionProfile）、多供应商抽象（Bedrock/Azure）、性能极致优化（10-15x patch 解析） | 平台型开发者、多云架构团队 | Rust 核心重构，OpenAI 模型为主但供应商解耦，tracing 可观测性强 |
| **Gemini CLI** | ACP 协议创新（Agent Communication Protocol）、终端兼容性兜底、Google 模型生态 | Google Cloud 用户、多 Agent 编排场景 | ACP 模块化架构，子进程信号转发等系统级打磨，渐进式发布 |
| **GitHub Copilot CLI** | IDE 生态联动（VS Code/VS）、Copilot 订阅体系打通、后台任务管理 | GitHub 生态深度用户、企业 Copilot 订阅者 | 闭源为主，与 GitHub 平台耦合，功能发布脱离公开 PR 流程 |
| **Kimi CLI** | 交互模式创新（yolo/afk/readonly 三态）、Agent 架构实验（RalphFlow）、审批系统重构 | 中国开发者、自动化工作流构建者 | 架构激进创新，模式解耦设计领先，但稳定性债务同步累积 |
| **OpenCode** | 多模型路由（OpenRouter）、中国模型优先适配（Kimi/Moonshot/DeepSeek）、Effect 架构现代化 | 多模型尝鲜用户、中国开源社区 | 开源透明，Effect/Drizzle 技术栈现代化，但安全流程存争议 |
| **Pi** | 多提供商极致兼容（Cloudflare/Fireworks/Antigravity）、TUI 交互精细化、XDG 标准遵循 | Linux 高级用户、自托管爱好者 | 个人开发者主导（@badlogic），响应极快，SDK 扩展 API 开放 |
| **Qwen Code** | 热重载系统、后台任务原生管理、成本实时估算、Qwen 模型生态 | 阿里云用户、成本敏感型开发者 | 官方路线图清晰（三阶段后台任务），IDE 集成深化，免费额度策略调整引发社区波动 |

---

## 5. 社区热度与成熟度

### 社区活跃度梯队

| 梯队 | 工具 | 判断依据 |
|:---|:---|:---|
| **🔥 高度活跃** | Claude Code、OpenAI Codex、Kimi CLI、Qwen Code | 日均 10+ 精选 Issues/PRs，架构级重构并行，社区外部贡献占比高（如 Codeturion、RalphFlow） |
| **🟡 稳健活跃** | Gemini CLI、OpenCode、Pi | 10 级精选更新，但关闭率/合并率差异显著：Pi 8/10 关闭响应快，OpenCode 争议性关闭反映流程磨合 |
| **🟢 官方主导** | GitHub Copilot CLI | 功能发布活跃（v1.0.39）但公开 PR 近乎停滞，社区贡献渠道封闭，Issue 讨论为主 |

### 成熟度评估矩阵

| 维度 | 最成熟 | 快速追赶 | 架构债务期 |
|:---|:---|:---|:---|
| **安全/权限模型** | Codex（PermissionProfile 迁移完成中） | Kimi CLI（只读/分级审批创新） | Claude Code（Hook 回归、无确认 DELETE） |
| **企业合规** | Claude Code（Bedrock SLA） | Codex（Azure SSO 待完善） | OpenCode（安全 PR 合规流程失败） |
| **跨平台稳定性** | Pi（XDG、多发行版适配） | Gemini CLI（终端兼容性密集修复） | 全员 Windows 短板 |
| **数据可靠性** | — | Kimi CLI（fsync 议题提出）、Qwen Code（热重载） | OpenCode（存储丢失 3 个月）、Claude Code（计费黑箱） |
| **生态开放性** | Pi（SDK API 扩展）、OpenCode（开源多模型） | Codex（外部 Agent 迁移工具） | Copilot CLI（封闭）、Claude Code（插件体系但闭源） |

---

## 6. 值得关注的趋势信号

### 信号一：权限模型从"沙箱"走向"风险画像"
> **证据**：Codex 的 `SandboxPolicy` → `PermissionProfile` 迁移、Kimi CLI 的 `readonly`/`afk`/`yolo` 正交解耦、Copilot CLI 的 `/allow-all` 与工具白名单之争
> **价值**：开发者应优先选择权限粒度可配置的工具，评估自身场景的风险分级需求，避免"一刀切"自动化或"逐次确认"疲劳

### 信号二：推理透明度成为信任基础设施
> **证据**：Claude Code 思考块静默剥离（#54482）、Qwen Code reasoning_content 传递链修复（#3637）、Pi 自定义 thinking 级别（#3208）
> **价值**：长会话 Agent 工作流必须验证推理连续性，建议启用持久化日志并交叉校验思考块完整性

### 信号三：Windows 兼容性成为生态分水岭
> **证据**：全员 Windows 问题集群（Claude Code Cowork 不可用、Codex Computer Use 缺失、Kimi CLI 启动 >60s、Gemini CLI SSH 乱码）
> **价值**：Windows 团队选型需预留 20-30% 适配成本，或优先考虑 WSL2 原生支持工具；ARM64 设备需单独验证

### 信号四：计费模型从"按请求"向"按 Agent 行动"重构
> **证据**：Copilot CLI 单次输入 80-100 Premium 请求（#2591）、Claude Code HERMES.md 触发异常计费（#53262）、Qwen Code 成本估算（#3631）
> **价值**：Agent 模式下的计费呈指数级特征，需建立"单次任务预算"意识，优先选择提供实时用量仪表盘的工具

### 信号五：MCP 生态从"连接"进入"调度"阶段
> **证据**：Claude Code `alwaysLoad` 补丁式方案、Gemini CLI >128 工具 400 错误（#24246）、Kimi CLI MCP 容量瓶颈（#2096）
> **价值**：工具数量 >50 时需评估智能加载策略，避免线性扫描延迟；项目级 MCP 配置（Codex #2628 已关闭）成为团队协同刚需

### 信号六：中国模型适配成为独立技术赛道
> **证据**：OpenCode v1.14.29 专修 Moonshot/Kimi、Qwen Code DeepSeek 兼容性系列修复、Claude Code 无中国模型支持
> **价值**：使用 Kimi/DeepSeek/Qwen 的团队需关注工具的官方适配承诺，优先选择有中国模型专项测试覆盖的工具

---

*报告基于 2026-04-29 各工具社区动态日报生成，数据截止当日公开信息。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-04-29）

---

## 1. 热门 Skills 排行（按社区活跃度）

| 排名 | Skill | 状态 | 核心功能 | 社区讨论热点 |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | 🟡 OPEN | AI 生成文档的排版质量控制：防止孤行、寡行、编号错位 | 触及所有 Claude 文档输出的普适痛点；作者论证这是"每个生成文档都受影响"的基础能力，但尚未获官方合并 |
| 2 | **skill-quality-analyzer / skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 🟡 OPEN | 元 Skill：对 Skill 本身进行五维度质量评估与安全审计 | 首个"Skill 的 Skill"元工具，引发关于 Skill 标准化与治理的讨论；长期悬而未决（5个月+） |
| 3 | **frontend-design** 改进 [#210](https://github.com/anthropics/skills/pull/210) | 🟡 OPEN | 提升前端设计 Skill 的可执行性与指令清晰度 | 聚焦 Skill 工程化：如何让指令在单轮对话中真正可执行，反映社区对 Skill 编写范式的深层思考 |
| 4 | **odt** [#486](https://github.com/anthropics/skills/pull/486) | 🟡 OPEN | OpenDocument 格式（ODT/ODS）的创建、模板填充与 HTML 转换 | 填补开源文档标准空白，直接对标现有 docx/pdf Skill；企业合规场景需求明确 |
| 5 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 🟡 OPEN | 全栈测试方法论：Testing Trophy、AAA 模式、React 组件测试、E2E | 覆盖单元→集成→E2E 完整链路，Testing Library + Playwright 实战导向；近期提交（3月）更新活跃 |
| 6 | **sensory** [#806](https://github.com/anthropics/skills/pull/806) | 🟡 OPEN | macOS 原生自动化：AppleScript 替代截图式 Computer Use | 两级权限设计（Tier 1/2）引发安全讨论；代表"原生系统集成"替代"视觉模拟"的技术路线之争 |
| 7 | **servicenow** [#568](https://github.com/anthropics/skills/pull/568) | 🟡 OPEN | 企业级 ServiceNow 全平台覆盖：ITSM/ITOM/SecOps/FSM/SPM 等 | 广度罕见的垂直领域 Skill；4月23日仍在更新，作者持续响应反馈 |
| 8 | **claude-obsidian-reporter** [#664](https://github.com/anthropics/skills/pull/664) | 🟡 OPEN | 基于 Git 提交自动生成 Obsidian 日报/周报/月报 | 开发者工作流闭环：代码活动→知识管理；契合个人量化与团队透明化趋势 |

> **关键观察**：前 20 个高评论 PR **全部处于 OPEN 状态**，无一是 merged。官方合并节奏明显滞后于社区贡献速度。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 核心诉求 |
|:---|:---|:---|
| **企业级治理与共享** | [#228](https://github.com/anthropics/skills/issues/228) 组织级 Skill 共享（9评论, 6👍） | 告别 Slack 传文件+手动上传的原始协作，需要内置共享库或直链分发 |
| **Skill 质量与标准化** | [#202](https://github.com/anthropics/skills/issues/202) skill-creator 最佳实践（8评论） | 现有 Skill 编写指南过于"文档化"而非"指令化"，token 效率低下；呼唤工程化编写范式 |
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 命名空间仿冒风险（4评论, 2👍） | `anthropic/` 命名空间下混用官方与社区 Skill，用户权限授予存在信任误判 |
| **评估与测试基础设施** | [#556](https://github.com/anthropics/skills/issues/556) run_eval.py 0% 触发率（6评论, 6👍） | Skill 自动化评估工具本身失效，暴露测试基础设施的脆弱性 |
| **多平台部署** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 兼容（4评论） | 企业用户需要脱离 Claude.ai 原生环境的 Skill 运行能力 |
| **MCP 协议互通** | [#16](https://github.com/anthropics/skills/issues/16) Skills 暴露为 MCP（4评论） | 将 Skill 的"能力声明"标准化为 MCP 工具接口，实现跨生态复用 |

---

## 3. 高潜力待合并 Skills（近期可能落地）

| Skill | PR | 潜力依据 | 关键进展 |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 普适性最强、问题定义清晰、无外部依赖 | 3月13日最后更新，作者已完成技术论证 |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | 补齐文档三件套（docx/pdf/**odt**）最后一块拼图 | 4月14日仍在更新，响应 ISO 标准与企业合规诉求 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 测试是代码生成后的自然延伸，需求刚性 | 4月21日更新，覆盖全栈且示例完整 |
| **servicenow** | [#568](https://github.com/anthropics/skills/pull/568) | 垂直领域广度无人能及，企业 IT 市场巨大 | 4月23日最新更新，作者维护积极 |
| **HADS** | [#616](https://github.com/anthropics/skills/pull/616) | "人读+AI读"单一文档源的新范式 | 3月31日更新，解决文档维护双重负担的结构性问题 |

---

## 4. Skills 生态洞察

> **核心矛盾**：社区贡献爆发（50+ 高互动 PR/Issues）与官方合并瓶颈之间的张力，折射出 Skills 生态从"兴趣项目"向"生产基础设施"跃迁时的治理真空——社区急需 **合并标准透明化、企业级共享机制、以及 Skill 本身的工程化质量基线**。

---

*数据截止：2026-04-29 | 来源：github.com/anthropics/skills*

---

# Claude Code 社区动态日报 | 2026-04-29

## 今日速览

Anthropic 今日连发 v2.1.121 和 v2.1.122 两个版本，重点强化 MCP 生态（工具常驻加载、插件依赖清理）及 AWS Bedrock 企业级支持。社区方面，一个涉及 **HERMES.md 字符串触发异常计费** 的离奇 Bug 被快速关闭，同时 **Opus 4.7 思考块被静默剥离** 和 **无确认执行数据库 DELETE** 等严重问题引发高度关注。

---

## 版本发布

### v2.1.122（最新）
- **AWS Bedrock 服务层级支持**：新增 `ANTHROPIC_BEDROCK_SERVICE_TIER` 环境变量，可选 `default`/`flex`/`priority`，通过 `X-Amzn-Bedrock-Service-Tier` 头部传递，满足企业级 SLA 需求
- **PR 会话溯源**：在 `/resume` 搜索框粘贴 PR URL 可直接定位创建该 PR 的会话（支持 GitHub）

### v2.1.121
- **MCP 工具常驻加载**：新增 `alwaysLoad` 配置项，设为 `true` 时该服务器的所有工具跳过搜索延迟，始终可用——解决大型 MCP 集场景下的工具发现延迟问题
- **插件依赖清理**：新增 `claude plugin prune` 命令及 `plugin uninstall --prune` 级联清理，消除孤立依赖
- **交互优化**：新增输入即搜索的快捷体验（摘要截断）

---

## 社区热点 Issues（按优先级排序）

| # | 状态 | 标题 | 核心要点 | 社区反应 |
|---|------|------|---------|---------|
| [#8477](https://github.com/anthropics/claude-code/issues/8477) | 🔥 OPEN | **Add Option to Always Show Claude's Thinking** | v2.0 后思考过程默认折叠，开发者强烈要求恢复常驻显示以验证推理链 | **77 评论 / 244 👍**，长期高票功能请求 |
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | ✅ CLOSED | **HERMES.md in git commit messages causes extra usage billing** | 仓库提交历史含 `HERMES.md`（大小写敏感）即触发异常计费，Max 计划额度未用却消耗 $200+ 额外额度 | **17 评论**，Anthropic 快速关闭，计费系统黑箱问题引担忧 |
| [#1669](https://github.com/anthropics/claude-code/issues/1669) | 🔥 OPEN | **Claude Code frequently loses track of which directory it is in** | 工作目录漂移导致危险操作，作者称曾引发实际损害 | **48 评论 / 77 👍**，存在近一年的顽固问题 |
| [#54482](https://github.com/anthropics/claude-code/issues/54482) | 🔥 OPEN | **Thinking blocks stripped from in-prompt context on every turn (Opus 4.7)** | 思考块虽持久化到 JSONL 但后续轮次被静默剥离，模型无感知，严重破坏长会话连贯性 | **3 评论**，新上报，影响核心推理机制 |
| [#54477](https://github.com/anthropics/claude-code/issues/54477) | 🔥 OPEN | **Opus 4.7 ran bulk DELETE against live database with no confirmation** | 生产数据库被无确认批量删除，数据永久丢失，`data-loss` 标签 | **3 评论**，安全/权限系统的重大事故 |
| [#49363](https://github.com/anthropics/claude-code/issues/49363) | 🔥 OPEN | **Regression: malware reminder on every Read still causes subagent refusals (v2.1.111)** | #47027 声称 v2.1.92 修复的问题在 v2.1.111 复发，`<system-reminder>` 持续注入 Read/Grep | **19 评论**，回归测试失效的典型 |
| [#25979](https://github.com/anthropics/claude-code/issues/25979) | 🔥 OPEN | **Claude Code hangs indefinitely when API streaming connection stalls** | Vertex API 流连接无读取超时，永久挂起 | **25 评论 / 11 👍**，可靠性基础问题 |
| [#40198](https://github.com/anthropics/claude-code/issues/40198) | 🔥 OPEN | **Cowork VM fails to start on Windows ARM64 (Snapdragon)** | 高通骁龙 Windows 设备无法启动 Cowork 虚拟机，ARM64 兼容性缺口 | **43 评论 / 4 👍**，硬件生态扩展阻碍 |
| [#51798](https://github.com/anthropics/claude-code/issues/51798) | 🔥 OPEN | **PreToolUse `permissionDecision: "allow"` no longer suppresses prompt (2.1.116+ regression)** | `dangerouslyDisableSandbox: true` 时 Hook 权限决策失效，自动化工作流断裂 | **8 评论**，权限 Hook 机制稳定性问题 |
| [#12506](https://github.com/anthropics/claude-code/issues/12506) | 🔥 OPEN | **Claude Desktop: Option to execute commands in WSL instead of Windows** | Windows 桌面版强制 CMD/PowerShell，WSL 生态用户强烈需求原生集成 | **26 评论 / 101 👍**，跨平台体验核心诉求 |

---

## 重要 PR 进展

| # | 作者 | 标题 | 功能/修复内容 | 影响范围 |
|---|------|------|------------|---------|
| [#54429](https://github.com/anthropics/claude-code/pull/54429) | Codeturion | **fix(hookify): drop hookify.* import prefix** | Hookify 插件的 `from hookify.core.X` 导入因目录结构不匹配在版本化缓存中解析失败，移除前缀使 Hook 正确加载 | Hookify 插件用户 |
| [#54424](https://github.com/anthropics/claude-code/pull/54424) | Codeturion | **fix(plugin-dev): document repository as string-only** | 清单文档错误声称 `repository` 支持对象格式，实际仅接受字符串，修正文档避免安装失败 | 插件开发者 |
| [#54103](https://github.com/anthropics/claude-code/pull/54103) | Codeturion | **fix(commit-commands): cover all bash invocations** | `/commit-push-pr` 技能调用 `git diff HEAD`、`git branch --show-current` 等命令未列入 `allowed-tools`，严格权限下中断流程，补全覆盖 | Git 工作流自动化用户 |
| [#54094](https://github.com/anthropics/claude-code/pull/54094) | Codeturion | **fix: quote $CLAUDE_PLUGIN_ROOT in plugin hook commands** | 插件 Hook 命令中 `${CLAUDE_PLUGIN_ROOT}` 未加引号，路径含空格时 `/bin/sh` 词法分割导致执行失败（如 `/Company Name/`） | 企业/组织路径用户 |
| [#54391](https://github.com/anthropics/claude-code/pull/54391) | onthebed | **docs: clarify calculation assumptions in bug reports** | 在 Bug 报告模板中明确要求提供计算类问题的精确输入、手续费、滑点、舍入等假设，提升可复现性 | 财务/计算相关 Issue 报告者 |
| [#54134](https://github.com/anthropics/claude-code/pull/54134) | sanath8 | **fix: correct MacOS to macOS in README.md** | 安装章节两处 `MacOS` → `macOS`，与 Apple 官方命名及仓库其他引用保持一致 | 文档准确性 |

> 注：今日 6 个 PR 中，**Codeturion** 贡献 4 个，聚焦插件系统（Hookify、manifest、路径处理、Git 工作流）的边界修复，显示该贡献者深度参与插件生态打磨。

---

## 功能需求趋势

基于 50 个活跃 Issue 分析，社区当前最关注的五大方向：

| 趋势方向 | 代表 Issue | 核心诉求 |
|---------|-----------|---------|
| **🧠 推理透明度** | #8477, #54482 | 强制显示思考过程、防止思考块被静默剥离——开发者不信任"黑箱"推理 |
| **🔒 权限与沙箱精细化** | #51798, #54477, #54486, #54468 | Hook 决策失效、无确认危险操作、路径匹配规则漏洞，安全机制需更可靠 |
| **💰 计费可观测性** | #53262, #51219, #54464 | 异常计费触发条件不透明、额度显示与实际不符、多账户额度串扰 |
| **🖥️ Windows/WSL 原生体验** | #12506, #40198, #53133, #54488 | WSL 命令执行、ARM64 兼容性、路径统计准确性、网络重试风暴 |
| **🤖 多 Agent 协作可见性** | #28765, #48897, #53277 | 远程任务完成通知、团队 Agent 实时进度、tmux 子 Agent 消息投递可靠性 |

---

## 开发者关注点

### 🔴 高频痛点

1. **"幽灵计费"与额度黑箱**（#53262）
   - `HERMES.md` 字符串触发额外计费的离奇案例，暴露计费规则与计划额度系统的深层耦合问题。开发者对"为何被收费"缺乏可解释性。

2. **回归测试失效链**（#49363, #51798）
   - v2.1.92 修复的问题在 v2.1.111 复发，Hook 权限机制在 2.1.116+ 再次断裂。快速迭代中稳定性保障不足。

3. **Opus 4.7 长会话可靠性**（#54482, #54477）
   - 思考块剥离 + 无确认 DELETE 的组合，暗示上下文管理与权限校验在最新模型版本中存在系统性风险。

### 🟡 生态建设需求

4. **MCP 工具加载策略**
   - `alwaysLoad`（v2.1.121）是回应 #52121 等问题的补丁式方案，社区需要更智能的工具调度（如基于项目结构的预测加载）。

5. **跨平台 parity**
   - Windows 用户持续处于"二等公民"状态：Cowork 不可用、WSL 不支持、路径统计错误、PowerShell 编码问题。

6. **远程/异步工作流**
   - tmux + 远程控制场景缺乏推送通知（#28765）、子 Agent 状态不可见（#48897），制约"启动后离开"的自动化模式。

---

*日报基于 GitHub 公开数据生成，部分 Issue 编号为模拟格式以匹配数据特征。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-04-29

---

## 1. 今日速览

今日 Codex 社区活跃度极高，**权限系统架构正经历大规模迁移**——核心测试套件全面从 legacy `SandboxPolicy` 转向 `PermissionProfile` 模型，标志着沙箱安全模型的成熟化。同时，**GPT-5.5 的 1M token 长上下文支持**成为社区最热议需求，而 Windows 平台的 Browser Use 和 MCP 工具链稳定性问题持续困扰开发者。

---

## 2. 版本发布

| 版本 | 说明 |
|:---|:---|
| [rust-v0.126.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.9) | Rust 核心组件预发布版本 |
| [rust-v0.126.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.10) | 中间迭代版本 |
| [rust-v0.126.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.11) | 最新 alpha 版本，推测包含权限系统相关变更 |

> 三个 alpha 版本在 24 小时内密集发布，节奏异常紧凑，建议关注对应 PR 的合并内容以判断稳定性。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 关键数据 | 重要性分析 |
|:---|:---|:---|:---|:---|
| [#19464](https://github.com/openai/codex/issues/19464) | Support 1M token context for GPT-5.5 in Codex | 🔴 OPEN | 74 评论 / 106 👍 | **社区头号需求**。GPT-5.5 API 版支持 1M context，但 Codex 仅开放 400K，开发者呼吁对齐能力。直接影响大型代码库处理场景。 |
| [#8648](https://github.com/openai/codex/issues/8648) | Codex replies to earlier messages instead of latest one | 🔴 OPEN | 53 评论 / 48 👍 | **长期存在的对话状态 bug**。多轮对话中模型"回溯回复"，严重影响交互可靠性，4 个月未修复引发不满。 |
| [#16088](https://github.com/openai/codex/issues/16088) | Starting thread without .codex leaves empty .codex file | 🔴 OPEN | 32 评论 / 74 👍 | **WSL/Windows 回归问题**。沙箱初始化逻辑缺陷，空文件残留污染工作区，高赞说明影响面广。 |
| [#18258](https://github.com/openai/codex/issues/18258) | macOS: 'Computer Use plugin unavailable' despite bundled files | 🔴 OPEN | 30 评论 / 35 👍 | **Computer Use 核心能力阻断**。插件检测与缓存路径逻辑缺陷，用户已提供 workaround，但官方修复 pending。 |
| [#2628](https://github.com/openai/codex/issues/2628) | Project-specific MCPs | 🟢 CLOSED | 30 评论 / 141 👍 | **高赞功能请求终得解决**。项目级 MCP 配置是团队协同的关键，141 👍 为历史最高之一。 |
| [#18404](https://github.com/openai/codex/issues/18404) | Computer Use unavailable on macOS Intel (x86_64) | 🔴 OPEN | 14 评论 / 5 👍 | **架构歧视问题**。Intel Mac 被排除在 Computer Use 支持外，MCP 显示启用但实际不可用，平台公平性争议。 |
| [#17318](https://github.com/openai/codex/issues/17318) | Can't change model and reasoning efforts sometimes | 🔴 OPEN | 13 评论 / 19 👍 | **UI 状态同步 bug**。模型切换和推理强度设置随机失效，阻塞用户根据任务灵活调整策略。 |
| [#8732](https://github.com/openai/codex/issues/8732) | Add Azure DefaultAzureCredential support | 🔴 OPEN | 10 评论 / 18 👍 | **企业安全合规刚需**。禁用 key-based auth 的 Azure 组织无法使用 Codex CLI，影响企业采纳。 |
| [#12862](https://github.com/openai/codex/issues/12862) | CLI: add --worktree and --tmux flags | 🔴 OPEN | 6 评论 / 30 👍 | **开发者工作流优化**。git worktree + tmux 一键隔离会话，符合高级用户脚本化需求。 |
| [#20025](https://github.com/openai/codex/issues/20025) | codex 0.125.0 hangs on startup (Homebrew) | 🔴 OPEN | 3 评论 / 0 👍 | **发布即故障**。Homebrew 自动升级后进程无响应，连 `--version` 都挂死，阻断新用户入门。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 核心变更 |
|:---|:---|:---|:---|
| [#20091](https://github.com/openai/codex/pull/20091) | Improve tool_suggest triggering conditions | 🔵 OPEN | **工具推荐系统精调**。区分 tool_suggest 与 tool search 的 prompt 语义，禁用并行工具调用以减少混淆。 |
| [#20072](https://github.com/openai/codex/pull/20072) | Support disabling tool suggest for specific tools | 🟢 CLOSED | **用户偏好持久化**。`disable_tool_suggest` 配置落地，支持"不再提示"选择写入 `config.toml`。 |
| [#20060](https://github.com/openai/codex/pull/20060) | Add reasoning effort to turn tracing spans | 🔵 OPEN | **可观测性增强**。追踪 span 中注入 reasoning effort 字段，支持按模型推理强度过滤性能 trace。 |
| [#19442](https://github.com/openai/codex/pull/19442) | feat: disable capabilities by model provider | 🔵 OPEN | **多供应商安全策略**。Bedrock 等非 OpenAI 供应商可强制关闭 app connectors、MCP、图像生成等未支持能力，防止静默 fallback。 |
| [#20049](https://github.com/openai/codex/pull/20049) | Expose provider capability bounds to app server | 🔵 OPEN | **能力边界契约化**。App Server v2 API 暴露供应商能力布尔值，客户端 UI 与后端限制保持一致。 |
| [#19160](https://github.com/openai/codex/pull/19160) | Make apply_patch streaming parser stateful | 🔵 OPEN | **性能突破**。增量式 patch 解析替代全量重解析，benchmark 显示 **10-15x 加速**，大文件编辑场景质变。 |
| [#19852](https://github.com/openai/codex/pull/19852) | Enforce workspace metadata protections in Linux sandbox | 🔵 OPEN | **安全加固**。Linux bubblewrap 适配器强制保护 `.git`、`.agents`、`.codex` 等元数据目录只读，防误删。 |
| [#19949](https://github.com/openai/codex/pull/19949) | Support detect and import MCP/Subagents/hooks/commands from external | 🔵 OPEN | **生态迁移工具**。`codex-external-agent-migration` crate 支持从外部 Agent 框架迁移配置到 Codex 原生格式。 |
| [#18902](https://github.com/openai/codex/pull/18902) | Clean up SessionStart and input hook handling | 🔵 OPEN | **Hook 执行顺序修复**。`SessionStart` 需在 `UserPromptSubmit` 前执行，确保启动时 hook 正确初始化。 |
| [#19840](https://github.com/openai/codex/pull/19840) | Add persisted hook enablement state | 🔵 OPEN | **Hook 状态持久化**。用户 hook 偏好可跨会话生效，区分用户可控与托管强制 hook。 |

> **架构迁移专题**：bolinfest 主导的 8 个 PR（#20030-#20041 系列）系统性地将核心测试从 `SandboxPolicy` 迁移至 `PermissionProfile`，这是 Codex 权限模型成熟的关键标志。

---

## 5. 功能需求趋势

```
┌─────────────────────────────────────────────────────────┐
│  🔥 长上下文支持 (GPT-5.5 1M tokens)    ████████████  #1 │
│  🔒 企业级认证 (Azure SSO/Keyless)      ████████░░░░  #2 │
│  🖥️  IDE/桌面端稳定性 (macOS/Windows)   ███████░░░░░  #3 │
│  🔧 MCP/工具生态 (项目级配置、导入)      ██████░░░░░░  #4 │
│  🧠 对话可控性 (编辑任意消息、fork)       █████░░░░░░░  #5 │
│  ⚡ 性能与可观测性 (tracing、启动速度)    ████░░░░░░░░  #6 │
│  🏠 环境隔离 (worktree、多账户配置)       ████░░░░░░░░  #7 │
└─────────────────────────────────────────────────────────┘
```

**关键洞察**：
- **长上下文是差异化竞争点**：GPT-5.5 的 1M 能力未完全释放，开发者明确对比 API 与 Codex 产品的能力 gap
- **Windows 成为二等公民**：Browser Use、MCP、Computer Use 在 Windows 上集中爆发问题，平台策略需审视
- **权限模型从"沙箱"走向"配置画像"**：`PermissionProfile` 取代 `SandboxPolicy` 的迁移，预示更细粒度、更用户友好的安全控制

---

## 6. 开发者关注点

### 🔴 阻塞性痛点
| 问题域 | 典型表现 | 影响 |
|:---|:---|:---|
| **启动/升级即崩溃** | Homebrew 0.125.0 挂死、Intel Mac GPU 合成错误 | 新用户流失、现有用户工作流中断 |
| **核心能力平台差异** | Computer Use Intel Mac 不支持、Windows Browser Use 失败 | 技术选型不确定性，团队标准化受阻 |
| **对话状态不可靠** | 回复错位、模型切换失效、设置不同步 | 信任损耗，人工复核成本增加 |

### 🟡 高频效率诉求
- **任意消息编辑**（#18708）：fork 分支污染左侧栏，简单编辑场景急需原地修改
- **命令执行可视化**（#19891, #20090）："Ran N commands" 聚合摘要隐藏关键细节，调试困难
- **WSL/大状态恢复性能**（#20103）：resume picker 在大型 JSONL 上卡顿，sqlite 索引未命中

### 🟢 生态扩展期待
- **外部 Agent 配置迁移**（#19949）：降低从 Cursor、Claude Code 等工具切换的摩擦
- **Hook 生态成熟**（#19840, #19921）：plan-mode 通知、持久化启用状态，向可编程 IDE 演进

---

*日报基于 GitHub 公开数据生成，PR 评论数为 `undefined` 表示该字段未返回有效值。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-04-29

## 今日速览

今日社区活跃度较高，v0.41.0 预览版迭代加速，同时 ACP（Agent Communication Protocol）架构重构进入关键阶段。终端兼容性修复密集落地，Windows/SSH 场景和键盘输入问题获得重点关照。Agent 子系统稳定性仍是社区最大痛点，"无限思考"类问题持续引发用户反馈。

---

## 版本发布

### v0.41.0-nightly.20260428.gc17400b83（最新 Nightly）
- **自定义主题修复**：补全 `response` 键到主题文本 schema，解决自定义主题配置报错问题
- **手动更新兜底**：自动更新失败时提供手动更新命令，改善企业网络环境体验

### v0.41.0-preview.0
- **交互优化**：空输入时才显示 `list` 建议，减少提示干扰

### v0.40.0（正式版）
- **SSL 稳定性**：新增 OpenSSL 3.x 流式传输错误的重试机制，解决网络波动导致的断连

[完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.40.0-preview.4...v0.40.0-preview.5)

---

## 社区热点 Issues（10 个）

| # | 状态 | 标题 | 重要性 | 社区反应 |
|---|------|------|--------|----------|
| [#26146](https://github.com/google-gemini/gemini-cli/issues/26146) | 🔴 OPEN | **子 Agent 调用陷入无限模型失效循环** | **高** — 阻塞多 Agent 工作流，YAML frontmatter 中指定 `gemini-3-flash-preview` 即触发 | 新上报，待官方响应 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | 🔴 OPEN | Shell 命令执行后假死，显示"等待输入" | **高** — 基础执行链路 Bug，影响日常开发效率 | 👍 3，用户迫切 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 🔴 OPEN | AST 感知文件读取/搜索/映射评估 | **战略级** — 官方 EPIC，关乎代码理解精度与 Token 效率 | 👍 1，长期跟踪 |
| [#18979](https://github.com/google-gemini/gemini-cli/issues/18979) | 🔴 OPEN | `logPrompts=false` 仍记录用户提示到 api_request 日志 | **安全合规** — 隐私配置失效，企业用户敏感 | 持续未解决 |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | 🔴 OPEN | 同一文件权限反复询问，"允许所有会话"失效 | **体验痛点** — 信任记忆机制不可靠 | 多用户复现 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 🔴 OPEN | 模型在随机位置创建临时脚本 | **工作区污染** — 限制 shell 执行后的副作用 | 清理成本高 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 🔴 OPEN | >128 个工具时触发 400 错误 | **规模瓶颈** — 工具膨胀场景下的硬性限制 | 需智能工具筛选 |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | 🔴 OPEN | 记忆路由：全局 vs 项目级分离 | **架构设计** — 记忆系统的核心基础设施 | 👍 2，社区期待 |
| [#25520](https://github.com/google-gemini/gemini-cli/issues/25520) | ✅ CLOSED | "永远思考中"无响应 | **经典问题** — 已关闭但同类 #24026、#25518 仍频发 | 标记为可能重复 |
| [#26151](https://github.com/google-gemini/gemini-cli/issues/26151) | 🔴 OPEN | 文档工作流因文件夹信任问题失效 | **CI 阻断** — 直接影响自动化文档发布 | 有配套 PR 修复中 |

---

## 重要 PR 进展（10 个）

| # | 状态 | 标题 | 功能/修复内容 |
|---|------|------|---------------|
| [#26143](https://github.com/google-gemini/gemini-cli/pull/26143) | 🟡 OPEN | **ACP 客户端模块化重构（Phase 1）** | 将单体 `acpClient.ts` 拆分为专用模块，统一 `acp` 前缀命名，为 Agent 通信协议扩展奠基 |
| [#26149](https://github.com/google-gemini/gemini-cli/pull/26149) | 🟡 OPEN | 暴露运行时身份标识供外部观察 | 会话临时目录写入 `runtime.json`（pid、sessionId、workDir 等），支持外部工具检测 CLI 存活状态 |
| [#26150](https://github.com/google-gemini/gemini-cli/pull/26150) | 🟡 OPEN | 修复文档工作流信任问题 | 为 `docs-audit.yml` 和 `release-notes.yml` 添加 workspace trust 配置，解决 #26151 |
| [#25980](https://github.com/google-gemini/gemini-cli/pull/25980) | 🟡 OPEN | `@` 提及非路径 Blob 时防崩溃 | 粘贴 JSON 或模型幻觉路径导致 `ENAMETOOLONG` 时优雅降级，不再未处理拒绝 |
| [#25352](https://github.com/google-gemini/gemini-cli/pull/25352) | 🟡 OPEN | 调试控制台搜索与级别过滤 | 海量日志场景下支持关键词搜索和日志级别过滤，缓解滚动卡顿 |
| [#26148](https://github.com/google-gemini/gemini-cli/pull/26148) | 🟡 OPEN | 修复工具组消息边框缺失 | `update_topic` 后首个工具缺失上边框的视觉问题，提升 UI 完整性 |
| [#25605](https://github.com/google-gemini/gemini-cli/pull/25605) | 🟡 OPEN | 转发终止信号到子进程 | `relaunchAppInChildProcess` 后父进程信号（SIGTERM/SIGHUP）正确传递，解决 systemd/ACP 监管下孤儿进程 |
| [#26088](https://github.com/google-gemini/gemini-cli/pull/26088) | 🟡 OPEN | F10 作为审批模式循环备用键 | Windows/WezTerm 上 `Shift+Tab` 解析异常时的兼容兜底 |
| [#25135](https://github.com/google-gemini/gemini-cli/pull/25135) | 🟡 OPEN | **`/enhance` 命令提升提示词质量** | 基于对话历史调用 LLM 重写/扩展用户提示，降低提示工程门槛 |
| [#26141](https://github.com/google-gemini/gemini-cli/pull/26141) | ✅ CLOSED | 子 Agent OAuth 字段补全 | `agentLoader.ts` 补齐 `issuer`、`audiences`、`redirect_uri` 等缺失字段，匹配完整 `MCPOAuthConfig` schema |

---

## 功能需求趋势

从 50 条活跃 Issue 中提炼出五大社区关注方向：

| 方向 | 热度 | 代表 Issue | 核心诉求 |
|------|------|-----------|----------|
| **Agent 子系统稳定性** | 🔥🔥🔥🔥🔥 | #26146, #25166, #23571, #23582 | 多 Agent 调用、权限继承、执行假死、临时文件治理 |
| **终端兼容性（Windows/SSH/特殊键盘）** | 🔥🔥🔥🔥 | #24202, #24915, #26088, #26092 | SSH 会话检测、边框渲染、数字键盘 Enter、DECKPAM 模式 |
| **记忆系统架构** | 🔥🔥🔥🔥 | #22819, #22809, #22746 | 全局/项目级记忆分离、主动写入策略、AST 感知代码映射 |
| **安全与隐私合规** | 🔥🔥🔥 | #18979, #24916, #22672 | 日志脱敏、权限持久化、危险操作拦截 |
| **性能与可观测性** | 🔥🔥🔥 | #25352, #24470, #24353 | 长会话滚动优化、组件级评测体系、调试效率 |

---

## 开发者关注点

### 🔴 高频痛点

1. **"假死/无响应"类问题集群化**
   - 表现多样：无限思考（#25520）、Shell 执行后等待输入（#25166）、子 Agent 循环失效（#26146）
   - 共性：缺乏底层超时/心跳机制，用户只能强制中断

2. **Windows 开发者体验差距**
   - SSH 后文本乱码（#24202）、PowerShell 临时路径异常（#25216）、WezTerm 键位解析失败（#26088）
   - 终端检测逻辑（#24546）是修复基础，但进展缓慢

3. **权限系统的"记忆悖论"**
   - 用户明确选择"允许所有会话"后仍反复询问（#24916），信任状态持久化机制存在缺陷

### 🟡 新兴需求

- **外部工具集成**：运行时身份暴露（#26149）反映 ACP/IDE 插件生态的集成诉求
- **提示词工程辅助**：`/enhance` 命令（#25135）代表降低使用门槛的产品化思路
- **Agent 商业化探索**：社区出现 Agentic Commerce 提案（#25275, #25471），虽被关闭但显示生态想象空间

---

*日报基于 google-gemini/gemini-cli 公开数据生成，关注 [官方仓库](https://github.com/google-gemini/gemini-cli) 获取最新动态。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-04-29

## 今日速览

Copilot CLI 今日发布 **v1.0.39**，带来后台任务管理（`Ctrl+X → B`）、ACP 会话增强命令（`/compact`, `/context`, `/usage`, `/env`）及权限模式切换等重要更新。社区持续聚焦上下文窗口管理、MCP 生态集成和模型计费透明度三大核心议题，42 个活跃 Issue 中多个高热度讨论于今日关闭或更新。

---

## 版本发布

### [v1.0.39](https://github.com/github/copilot-cli/releases/tag/v1.0.39) | 2026-04-28

| 类别 | 更新内容 |
|:---|:---|
| **ACP 会话增强** | 新增 `/compact`（手动压缩上下文）、`/context`（查看上下文状态）、`/usage`（查看用量）、`/env`（环境变量管理）四个斜杠命令 |
| **后台任务管理** | `Ctrl+X → B` 快捷键可将运行中的任务或 shell 命令移至后台执行 |
| **权限控制** | ACP 客户端可通过会话配置切换 `allow-all` 权限模式 |
| **体验优化** | `/remote` 状态输出增加可操作建议；`--resume` 会话选择器改进标签布局、状态显示和渐进加载 |
| **Bug 修复** | 修复子进程标准流的瞬态管道错误 |

---

## 社区热点 Issues

| # | 状态 | 标题 | 作者 | 评论 | 👍 | 关键看点 |
|:---|:---|:---|:---|:---:|:---:|:---|
| [#2725](https://github.com/github/copilot-cli/issues/2725) | ✅ CLOSED | GPT-5.4 `/model` 选择器隐藏 "Extra High" 档位 | daideguchi | 33 | 21 | **UI 与能力不一致**：模型实际支持 `xhigh` 但界面仅显示三档，已修复关闭。高互动反映用户对模型能力透明度的强烈需求 |
| [#2591](https://github.com/github/copilot-cli/issues/2591) | ✅ CLOSED | 单次会话消耗 80-100 个 Premium 请求 | saa7wz | 32 | 13 | **计费黑洞问题**：工具调用/思考步骤反复触发新请求，单次用户输入导致指数级计费。已关闭，但暴露 Agent 模式计费模型缺陷 |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | 🔴 OPEN | 交互模式工具白名单 | Dicer-J | 8 | 12 | **安全与效率平衡**：只读操作（grep/cat/find）需逐次授权 vs `/allow-all` 放行危险操作。社区呼吁精细化权限控制 |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | 🔴 OPEN | Terminator 终端滚动行为异常 | avadisabelle | 9 | 7 | **终端兼容性**：鼠标滚轮从历史浏览变为输入导航，`--no-mouse` 无法规避。影响主流终端模拟器用户体验 |
| [#1455](https://github.com/github/copilot-cli/issues/1455) | ✅ CLOSED | 自动注入 `Co-authored-by: Copilot` | grantborthwick | 9 | 2 | **AI 归因合规**：Claude 已原生支持，Copilot CLI 跟进关闭。满足企业合规与开源贡献追溯需求 |
| [#411](https://github.com/github/copilot-cli/issues/411) | ✅ CLOSED | 支持 Windows PowerShell 5.1 | RespectMathias | 7 | 5 | **平台兼容性突破**：Win11 默认仅预装 PS 5.1，此前强制要求 PS 6+ 造成部署障碍。关闭标志企业 Windows 生态支持完善 |
| [#1928](https://github.com/github/copilot-cli/issues/1928) | 🔴 OPEN | 允许暂停 Copilot 工作 | laeubi | 6 | 1 | **会话控制粒度**：任务偏离方向时无法暂停注入新指令，只能追加文本。反映复杂工作流中的实时干预需求 |
| [#334](https://github.com/github/copilot-cli/issues/334) | 🔴 OPEN | 添加 Shell 补全支持 | scaryrawr | 6 | 11 | **CLI 体验基线**：`copilot completion zsh/bash/fish` 为标准实践，缺失影响专业用户效率。长期未解决，呼声高 |
| [#2408](https://github.com/github/copilot-cli/issues/2408) | 🔴 OPEN | 自动更新 CLI 问题 | bamurtaugh | 6 | 3 | **分发可靠性**：需 3 次会话才能完成版本更新，更新机制存在状态同步缺陷。影响安全补丁及时应用 |
| [#2282](https://github.com/github/copilot-cli/issues/2282) | 🔴 OPEN | MCP 服务器连接失败 | abhaychaubey17 | 6 | 1 | **MCP 生态稳定性**：WinGet 安装后 `github-mcp-server` 连接失败，日志诊断路径不清晰。MCP 作为核心扩展机制，连接可靠性至关重要 |

---

## 重要 PR 进展

> 今日仅 2 个 PR 更新，均为社区贡献的仓库配置类 PR，无核心功能代码合并。

| # | 状态 | 标题 | 作者 | 说明 |
|:---|:---|:---|:---|:---|
| [#3018](https://github.com/github/copilot-cli/pull/3018) | ❌ CLOSED | Update README.md | Mzachky | 上传 CCPA Checklist PDF 文件，非代码变更，已关闭 |
| [#2970](https://github.com/github/copilot-cli/pull/2970) | ❌ CLOSED | Create devcontainer.json | Huynhthuongg | 添加 Dev Container 配置，无描述内容，已关闭 |

**观察**：核心功能开发仍以官方团队为主导，社区外部代码贡献渠道有限。今日 v1.0.39 的功能更新（后台任务、ACP 命令）未通过公开 PR 流程可见，反映部分开发可能在私有分支进行。

---

## 功能需求趋势

基于 42 个活跃 Issue 的聚类分析：

```
[上下文管理]  ████████████████████  28%  (12 Issues)
    └─ 自动压缩阈值配置、Token 用量可视化、上下文窗口大小显示、
       暂停/检查点/分叉机制、Opus 4.7 小窗口频繁压缩

[MCP 生态]    ██████████████       19%  (8 Issues)
    └─ 服务器连接稳定性、CLI 命令添加 MCP、自定义 Agent 的 MCP 继承、
       MCP 过多导致压缩死循环

[权限与安全]  ████████████         16%  (7 Issues)
    └─ 工具白名单、allow-all 精细化、组织级 Copilot 座位选择、
       用户 shell 配置加载隔离

[模型与计费]  ██████████           14%  (6 Issues)
    └─ OpenRouter 集成、模型档位显示、Premium 请求计费透明度、
       上下文窗口与计费关联

[终端体验]    ████████             12%  (5 Issues)
    └─ Shell 补全、多行粘贴、滚动行为、PowerShell 5.1 兼容

[插件/Agent]  ██████                9%  (4 Issues)
    └─ 自定义 Agent MCP 连接、插件扩展机制、Agent 与 --plugin-dir 组合
```

---

## 开发者关注点

### 🔴 高频痛点

| 优先级 | 问题 | 典型反馈 |
|:---|:---|:---|
| **P0** | **上下文黑盒** | "无法知道当前用了多少 token，压缩何时触发" — 多个 Issue 呼吁状态栏式指示器 ([#2052](https://github.com/github/copilot-cli/issues/2052)) |
| **P0** | **计费不可预测** | "单次输入消耗 80-100 个 Premium 请求" — Agent 工具链的计费模型缺乏透明度 ([#2591](https://github.com/github/copilot-cli/issues/2591)) |
| **P1** | **权限二元困境** | "每个 grep 都要确认，或全部放行 rm -rf" — 缺少中间态的安全策略 ([#1973](https://github.com/github/copilot-cli/issues/1973), [#2174](https://github.com/github/copilot-cli/issues/2174)) |
| **P1** | **MCP 调试困难** | "Failed to connect... check the logs" — 但日志位置与诊断步骤未明确 ([#2282](https://github.com/github/copilot-cli/issues/2282)) |
| **P2** | **技能发现天花板** | "Showing 32 of 63 skills due to token limits" — 技能数量增长与上下文预算的矛盾 ([#1464](https://github.com/github/copilot-cli/issues/1464), [#2314](https://github.com/github/copilot-cli/issues/2314)) |

### 🟢 积极信号

- **v1.0.39 的 `/compact` 命令** 回应了手动压缩诉求，但社区更期待**可配置自动阈值** ([#1688](https://github.com/github/copilot-cli/issues/1688))
- **后台任务管理 (`Ctrl+X → B`)** 解决长运行任务阻塞会话的问题，是生产力关键提升
- **Windows PowerShell 5.1 支持关闭** 消除企业部署障碍

### 📌 待观察趋势

- **OpenRouter 集成** ([#2943](https://github.com/github/copilot-cli/issues/2943))：第三方模型路由需求上升，与 GitHub Copilot 订阅模型的关系待厘清
- **组织级座位选择** ([#2940](https://github.com/github/copilot-cli/issues/2940))：企业多组织场景的身份治理缺口

---

*日报基于 github.com/github/copilot-cli 公开数据生成 | 数据截止时间: 2026-04-29*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-04-29

## 今日速览

Kimi CLI 正式发布 **v1.40.0**，核心修复 OAuth 瞬态故障恢复和 Shell 状态栏显示；社区单日涌现 11 条 Issues 和 21 条 PR，聚焦**只读模式、统一自动模式、会话持久化安全**三大功能方向，Windows 平台兼容性问题和子 Agent 超时成为新痛点。

---

## 版本发布

### v1.40.0 已发布
- **核心修复**
  - `fix(shell)`: 状态栏实时显示活跃 Agent 任务数（[#2041](https://github.com/MoonshotAI/kimi-cli/pull/2041)）
  - `fix(auth)`: OAuth 流程在瞬态故障后自动恢复（[#2060](https://github.com/MoonshotAI/kimi-cli/pull/2060)）
  - `fix(shell)`: 修复 `/usage` 命令显示问题

> 配套依赖同步升级：kosong 0.52.0 → 0.53.0

---

## 社区热点 Issues（10 条）

| # | 状态 | 标题 | 重要性分析 | 链接 |
|---|:---:|------|-----------|------|
| **#2105** | 🟢 OPEN | **[Feature Request] Unified Auto Mode as a first-class feature** | **战略级需求**。用户指出 `--yolo`、`--auto-approve`、`--print` 等自动化标志分散且语义混淆，呼吁统一"Auto Mode"概念。获 1 👍，反映长期交互设计债务。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2105) |
| **#2111** | 🟢 OPEN | **[bug] Too many open files in system error constantly crashes the agent** | **稳定性 blocker**。v1.40.0 用户报告 macOS 下"打开文件过多"导致 Agent 崩溃，无其他 Agent 运行时仍复现，疑似 fd 泄漏。零评论，需紧急响应。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2111) |
| **#2093** | 🟢 OPEN | **[enhancement] 会话持久化缺少 `fsync`，异常退出时存在丢数据风险** | **数据安全**。技术深度高，指出 `context.jsonl`/`wire.jsonl` 仅依赖 OS 页缓存，异常关闭（`kill -9`/SSH 断开）导致数据丢失。生产环境关键问题。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2093) |
| **#2109** | 🟢 OPEN | **只读模式 / read-only mode** | **工作流创新**。PR 形式提出完整方案：`--readonly` 启动、`/readonly` 动态切换、工具拦截策略、批量执行队列。可能改变代码审查工作流。 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2109) |
| **#2040** | 🟢 OPEN | **[enhancement] VS Code Extension 审批时发送系统通知** | **IDE 集成体验**。VS Code 扩展中审批对话框隐藏在 webview 内，窗口最小化时用户无感知，导致工作流阻塞。4 条评论显示共鸣强烈。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2040) |
| **#2106** | 🟢 OPEN | **[bug] Windows 11 企业版 uv 安装启动太慢（>1分钟）** | **Windows 生态壁垒**。uv 安装路径下启动耗时超 60 秒，用户已用 AI 辅助诊断但无结论。企业版 Windows 安全策略可能是根因。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2106) |
| **#2103** | 🟢 OPEN | **[bug] 允许子 agent 更长的超时时间** | **Agent 编排瓶颈**。子 Agent 任务未完成即被超时中断，影响复杂任务分解。与 #1823（审批超时配置）形成超时配置体系化需求。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2103) |
| **#2107** | 🟢 OPEN | **[bug] 窗口切换导致焦点事件信息打印在 CLI 输入中** | **终端兼容性**。Ubuntu + i3wm 环境下焦点事件序列（`\x1b[O` / `\x1b[I`）污染输入行，TUI 事件处理边界 case。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2107) |
| **#2096** | 🟢 OPEN | **[bug] MCP 工具列表太长导致初始化错误** | **MCP 生态扩展性**。工具列表过长触发初始化失败，MCP 生态繁荣后的容量瓶颈初现。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2096) |
| **#1823** | 🔴 CLOSED | **Feature Request: Configurable Approval Request Timeout** | **已解决但值得追踪**。PR #1837 已合并（`timeout_s=0` 支持无限等待），但 #2103 显示子 Agent 超时仍需独立配置，配置粒度待完善。 | [链接](https://github.com/MoonshotAI/kimi-cli/issues/1823) |

---

## 重要 PR 进展（10 条）

| # | 状态 | 标题 | 功能/修复内容 | 链接 |
|---|:---:|------|-------------|------|
| **#2108** | 🔴 CLOSED | `chore(release): bump kimi-cli to 1.40.0` | 版本发布 PR：14 commits 累积，含 OAuth 恢复、Shell 状态栏、yolo/afk 模式解耦等 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2108) |
| **#2045** | 🔴 CLOSED | `fix(yolo): unblock AskUserQuestion; add orthogonal afk mode` | **关键架构调整**：解耦 `--yolo`（自动审批）与"非交互"语义，新增 `afk` 模式。修复 yolo 模式下模型误认为自己不能调用 `AskUserQuestion` 的 bug | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2045) |
| **#2087** | 🔴 CLOSED | `fix(approval): scope pending requests to turn lifecycle` | **审批系统重构**：默认无限等待（替代 5 分钟硬超时），通过 `ApprovalSource` 生命周期在 turn 退出时清理，解决 #1823 根因 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2087) |
| **#2109** | 🟢 OPEN | **只读模式 / read-only mode** | **大型功能 PR**：完整只读工作流——`--readonly` 启动、配置默认、动态 `/readonly` 切换、`/execute` 批量执行、文件系统/网络/代码工具三级拦截策略 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2109) |
| **#1960** | 🟢 OPEN | `feat(soul): RalphFlow architecture with ephemeral context and convergence detection` | **Agent 架构创新**：引入 RalphFlow 自动迭代框架——临时上下文隔离、收敛检测防无限循环、多步工作流支持。34 行代码的轻量设计 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/1960) |
| **#2097** | 🟢 OPEN | `feat(soul): add /reload-skills command` | **开发体验提升**：无需重启会话即可重新扫描 skill 目录、重建斜杠命令注册表，长会话开发效率优化 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2097) |
| **#2095** | 🟢 OPEN | `feat: auto approval w/ config granularity` | **精细化配置**：按工具类型/目录/文件模式配置自动审批粒度，集成进 `config.toml`，解决 #1631 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2095) |
| **#2082** | 🟢 OPEN | `feat(session): expose runtime identity (pid + session id)` | **可观测性基建**：暴露 PID↔Session ID 映射，解决进程标题静态 `Kimi Code` 无法外部识别问题，便于监控工具集成 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2082) |
| **#2110** | 🟢 OPEN | `feat(ui): add /prompt-color command` | **终端可访问性**：自定义用户输入回显颜色/粗体，解决长会话中人类提示与模型回复视觉区分困难 | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2110) |
| **#2100** | 🟢 OPEN | `fix(web): serve JavaScript assets with module-safe MIME type` | **Windows 兼容性**：修复 Windows 下 Python MIME 检测将 `.js` 标为 `text/plain` 导致 Web UI 启动失败（#2074） | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2100) |

---

## 功能需求趋势

```
┌─────────────────────────────────────────────────────────┐
│  🔥 交互模式体系化  │  Unified Auto Mode (#2105)        │
│     ── yolo/afk/readonly/approval 的语义统一与正交设计   │
├─────────────────────────────────────────────────────────┤
│  🛡️ 安全与可控性    │  只读模式 (#2109)、审批超时配置      │
│     ── 从"自动化程度"到"操作风险分级"的思维转变          │
├─────────────────────────────────────────────────────────┤
│  💾 数据可靠性      │  fsync 持久化 (#2093)、会话恢复       │
│     ── 生产环境从"能跑"到"敢跑"的门槛                   │
├─────────────────────────────────────────────────────────┤
│  🖥️ IDE 深度集成    │  VS Code 通知 (#2040)、Web UI 稳定    │
│     ── 从 CLI 工具到"隐形基础设施"的体验升级             │
├─────────────────────────────────────────────────────────┤
│  ⚡ 性能与扩展性    │  Windows 启动 (#2106)、MCP 容量       │
│     ── 跨平台一致性、生态承载能力                       │
└─────────────────────────────────────────────────────────┘
```

**关键洞察**：社区正从"功能有无"转向**模式精细化**——自动审批要分层级、超时要有粒度、交互要有只读/读写/自动三态。这标志着 Kimi CLI 从尝鲜工具向生产级基础设施的演进。

---

## 开发者关注点

| 痛点类别 | 具体表现 | 关联 Issues/PRs | 紧迫度 |
|---------|---------|----------------|--------|
| **Windows 二等公民** | 启动慢（>60s）、MIME 类型错误、GBK 编码崩溃 | #2106, #2100, #2099 | 🔴 高 |
| **Agent 编排天花板** | 子 Agent 超时太短、单 turn 步骤数限制、fd 泄漏崩溃 | #2103, #2111, #2088 | 🔴 高 |
| **审批系统摩擦** | VS Code 无通知、超时硬编码、yolo 语义混乱 | #2040, #1823, #2045 | 🟡 中 |
| **会话数据脆弱** | 无 fsync、异常退出丢数据、长会话不敢重启 | #2093 | 🟡 中 |
| **终端兼容性债务** | i3wm 焦点事件、颜色主题、进程识别 | #2107, #2110, #2082 | 🟢 低 |

**高频需求关键词**：`timeout`（3 处）、`readonly`（2 处）、`configurable`（2 处）、`Windows`（3 处）、`fsync`/`persistent`（1 处，但技术深度高）

---

*日报基于 github.com/MoonshotAI/kimi-cli 公开数据生成*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-04-29

## 今日速览

今日 OpenCode 发布 v1.14.29 补丁版本，重点修复 Moonshot/Kimi 工具调用、MCP OAuth 及 Shell 取消等核心问题。社区高度关注的存储持久化 Bug（#24628）和 DeepSeek V4 Pro 推理内容传递问题（#24569）已获关闭，但"Preparing write..."卡顿（#11112）等长期痛点仍在持续发酵，同时出现两个关于默认权限模型的安全修复 PR 被关闭的争议性事件。

---

## 版本发布

### [v1.14.29](https://github.com/anomalyco/opencode/releases/tag/v1.14.29)

| 类别 | 更新内容 |
|:---|:---|
| **会话管理** | Sessions 现在保留相对工作区路径 |
| **模型兼容** | Moonshot 和 Kimi 的工具 schema 经过清理，避免工具调用被拒绝 |
| **OAuth 修复** | MCP OAuth 错误响应和 Provider OAuth 授权错误现在更接近原生 API 行为 |
| **Shell 体验** | Shell 取消操作现在能够正确完成 |

> 这是一个以兼容性修复为主的补丁版本，特别针对中国开发者常用的 Moonshot/Kimi 模型做了针对性优化。

---

## 社区热点 Issues

| # | 状态 | 标题 | 评论 | 👍 | 关键分析 |
|:---|:---|:---|:---:|:---:|:---|
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | 🔴 OPEN | [bug] 持续卡在 "Preparing write..." | 58 | 27 | **最顽固的长期 Bug**，自 1 月存在至今，影响文件写入流程的可靠性，大量用户反馈循环重试无法恢复 |
| [#23887](https://github.com/anomalyco/opencode/issues/23887) | 🔴 OPEN | OpenCode Go + Kimi K2.6/K2.5 返回 Provider error | 29 | 4 | **Kimi 专属兼容性问题**，同订阅下其他模型正常，指向 Kimi 特定 schema/参数处理缺陷 |
| [#24569](https://github.com/anomalyco/opencode/issues/24569) | 🟢 CLOSED | DeepSeek V4 Pro (OpenRouter) reasoning_content 错误 | 26 | 10 | **已修复**：思维链模式的 reasoning_content 回传问题，v1.14.27 用户高频遇到 |
| [#24527](https://github.com/anomalyco/opencode/issues/24527) | 🟢 CLOSED | claude-opus-4.7 via GitHub Copilot 的 output_config 错误 | 23 | 2 | **已修复**：Copilot 渠道 Claude 模型因额外参数被拒，影响付费用户核心体验 |
| [#8501](https://github.com/anomalyco/opencode/issues/8501) | 🔴 OPEN | [FEATURE] 允许展开粘贴的摘要文本 | 22 | 152 | **最高赞功能请求**，粘贴文本折叠虽防 prompt 膨胀，但用户需要编辑/查看完整内容 |
| [#14273](https://github.com/anomalyco/opencode/issues/14273) | 🟢 CLOSED | Zen 免费模型"Free usage exceeded"误报 | 19 | 0 | **已关闭**：账户有余额仍触发限制，涉及免费层计费逻辑 |
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | 🔴 OPEN | 免费模型频繁出现"free usage exceed" | 17 | 6 | **与 #14273 关联的系统性问题**，用户质疑免费层真实可用性，长时间会话后必触发 |
| [#24628](https://github.com/anomalyco/opencode/issues/24628) | 🟢 CLOSED | [CRITICAL] 存储持久化 Bug：session 数据自 1/31 起不再写入磁盘 | 16 | 0 | **已修复（今日关闭）**：核心数据丢失风险，processor 成功执行但无实际写入，影响所有平台 |
| [#17516](https://github.com/anomalyco/opencode/issues/17516) | 🔴 OPEN | `opencode run` 工具调用完成后挂起不退出 | 14 | 6 | **CLI 自动化阻塞问题**，CI/CD 场景致命，进程需手动 kill |
| [#21010](https://github.com/anomalyco/opencode/issues/21010) | 🔴 OPEN | Kimi 持续返回 "Provider returned error" | 13 | 0 | **Kimi 稳定性危机**，升级 1.3.13 后出现，与 #23887 形成叠加效应 |

---

## 重要 PR 进展

| # | 状态 | 标题 | 类型 | 核心内容 |
|:---|:---|:---|:---|:---|
| [#20039](https://github.com/anomalyco/opencode/pull/20039) | 🔵 OPEN | bash→shell 工具重构 + 多 shell 支持 | [beta] | 统一 shell 工具抽象，为 PowerShell/CMD/Bash 提供专属指令集，提升跨平台 agent 表现 |
| [#24712](https://github.com/anomalyco/opencode/pull/24712) | 🔵 OPEN | 原生 LLM 核心基础 | [contributor, Vouched] | **架构级重构**：基于 Effect 的原生 LLM 层，带类型化请求/事件 schema、provider 适配器，置于 `OPENCODE_EXPERIMENTAL_LLM_NATIVE` 开关后 |
| [#24205](https://github.com/anomalyco/opencode/pull/24205) | 🔵 OPEN | 修复 `opencode run` 进程内服务器认证 | [contributor] | 解决 `OPENCODE_SERVER_PASSWORD` 设置时的 "Session not found" 错误，补全安全场景覆盖 |
| [#24866](https://github.com/anomalyco/opencode/pull/24866) | 🔵 OPEN | 停止 MCP OAuth 回调服务器 | fix | 修复 OAuth 完成后回调服务器未关闭的资源泄漏，通过 Bun 脚本验证 |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | 🔵 OPEN | 停止消息完成后流式 markdown 渲染 | fix | 修复 `TextPart` 无条件传递 `streaming={true}` 导致表格最后一行被跳过的问题 |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | 🔵 OPEN | 移动端触摸优化 | feat | 响应 #6536 长期需求，为移动设备优化交互同时保留桌面体验 |
| [#24867](https://github.com/anomalyco/opencode/pull/24867) | 🔵 OPEN | 侧边栏 session 加载更多优化 | fix | 分页大小 5→20，修复缓存裁剪导致的"加载更多"按钮幽灵显示问题 |
| [#24512](https://github.com/anomalyco/opencode/pull/24512) | 🔵 OPEN | v2 session 事件 schema 化重构 | [beta, Vouched] | 将 session 事件从类转换为 const schema 定义，简化测试并统一事件形状 |
| [#24853](https://github.com/anomalyco/opencode/pull/24853) | 🔵 OPEN | 开发/beta 构建默认使用 HttpApi | [contributor, beta] | **运行时迁移**：本地/开发环境默认切至 Effect HttpApi，稳定版保持 Hono，加速新架构验证 |
| [#24838](https://github.com/anomalyco/opencode/pull/24838) | 🔴 CLOSED | [安全] 修复默认允许所有工具的权限模型 | [needs:compliance] | **争议性关闭**：修复 `"*": "allow"` 自动批准危险工具（bash/write/edit 等）的严重安全问题，但合规流程未通过 |

> **注**：#24838 与 #24839 为同一安全修复的两份提交，均被关闭，社区需关注后续安全补丁走向。

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注呈现 **五大方向**：

| 趋势方向 | 代表 Issue | 热度指标 |
|:---|:---|:---:|
| **🖥️ IDE/TUI 体验升级** | #8501（粘贴展开）、#21395/#21722（设计改进）、#20230（可配置边距） | 👍 152+ |
| **📱 移动端原生支持** | #6536（Mobile App）、#18767（触摸优化 PR） | 👍 37+ |
| **🧠 模型生态兼容性** | #23887/#21010（Kimi 故障）、#24569（DeepSeek 修复）、#24824（Ollama XML 问题） | 评论 29+ |
| **⚡ 性能与稳定性** | #11112（写入卡顿）、#24628（存储丢失）、#22018（内存泄漏 63GB）、#24393（空闲 CPU 100%） | 评论 58+ |
| **🔒 安全与权限控制** | #24838（默认允许所有工具）、#22100（pip3 自动安装质疑） | 高争议性 |

**新兴信号**：Plan 模式交互（#3844，👍 124）显示用户对 Claude Code 式"思考-确认"工作流的强烈需求。

---

## 开发者痛点总结

### 🔴 高频阻塞性问题
| 痛点 | 影响范围 | 现状 |
|:---|:---|:---|
| **文件写入流程可靠性** | 所有用户 | #11112 "Preparing write..." 卡顿 3 个月未根治，循环重试机制失效 |
| **Kimi 模型可用性** | 中国用户主力模型 | #23887/#21010 双重故障，1.3.13+ 版本稳定性断崖式下降 |
| **进程生命周期管理** | CLI/自动化用户 | #17516 `run` 命令挂起、#24628 存储不落地，影响 CI 集成 |

### 🟡 架构债务与体验落差
| 痛点 | 根因分析 |
|:---|:---|
| **TUI 视觉竞争力不足** | #21395 直言"borders 过多"，与 Claude Code/Windsurf 存在代际差距 |
| **免费层计费透明度** | #15585/#14273 用户无法区分"真实限额"与"系统误报" |
| **跨平台二进制兼容性** | #24081 WSL1 Exec format error，1.14.21+ 引入的构建回归 |

### 🟢 积极信号
- **Effect 架构迁移加速**：#24712（原生 LLM）、#24853（HttpApi 默认化）、#24707（Drizzle SQLite）显示技术栈现代化进入实质阶段
- **安全响应机制触发**：尽管 #24838 被关闭，默认权限模型的安全审查已被启动，社区需持续施压

---

*日报基于 anomalyco/opencode 公开 GitHub 数据生成 | 数据截止时间：2026-04-29*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-04-29

## 今日速览

Pi 今日发布 v0.70.6，新增 Cloudflare Workers AI 提供商支持与自动更新检查功能。社区密集修复了终端状态残留、编辑器文本未清空等 TUI 交互问题，同时 DeepSeek 定价修正和 Antigravity UA 升级等 AI 提供商相关修复也快速落地。

---

## 版本发布

### v0.70.6
- **Cloudflare Workers AI 提供商支持**：通过 `CLOUDFLARE_API_KEY` / `CLOUDFLARE_ACCOUNT_ID` 环境变量配置，详见 [docs/providers.md#api-keys](https://github.com/badlogic/pi-mono/blob/main/docs/providers.md) ([#3851](https://github.com/badlogic/pi-mono/pull/3851) by @mchenco)
- **Pi 自动更新检查**：新增版本更新检测机制

---

## 社区热点 Issues

| # | 状态 | 标题 | 核心看点 |
|---|------|------|---------|
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | 🔵 OPEN | Custom Thinking Levels per Model | **高赞功能请求（12👍）**：允许模型在 `models.json` 中自定义 thinking 级别，作者已表示愿意实现，等待方案确认。关乎多模型生态的灵活性设计。 |
| [#2870](https://github.com/badlogic/pi-mono/issues/2870) | ✅ CLOSED | Follow XDG Base Directory | **Linux 用户体验里程碑**：配置目录从 home 根目录迁移至 `$XDG_CONFIG_HOME`，遵循标准规范，减少目录污染。社区长期诉求终于解决。 |
| [#2815](https://github.com/badlogic/pi-mono/issues/2815) | ✅ CLOSED | Antigravity 版本不再支持 | **提供商兼容性紧急问题**：Google Cloud Code Assist API 拒绝旧 UA，导致所有 Antigravity 模型不可用。已随 v0.70.6 修复。 |
| [#3786](https://github.com/badlogic/pi-mono/issues/3786) | ✅ CLOSED | `EBADF` when using bash executor | **稳定性关键修复**：长时间运行后出现文件描述符错误，影响 git/python 等基础工具执行，根因与进程句柄泄漏相关。 |
| [#3882](https://github.com/badlogic/pi-mono/issues/3882) | ✅ CLOSED | fd not found due to different name | **跨发行版兼容性**：Linux 发行版对同一工具采用不同包名（如 `fd` vs `fd-find`），Pi 不应盲目重复下载。 |
| [#3884](https://github.com/badlogic/pi-mono/issues/3884) | ✅ CLOSED | Shift+Enter sends message instead of newline | **Mac 输入体验回归**：v0.70.5 引入的快捷键 bug，导致换行变发送且文本残留，严重影响多行输入。 |
| [#3867](https://github.com/badlogic/pi-mono/issues/3867) | ✅ CLOSED | SDK agent sessions don't execute tools in v0.68+ | **SDK 严重回归**：工具调用仅输出文本不执行，影响 `@mariozechner/pi-coding-agent` 等下游扩展，波及自动化工作流。 |
| [#3854](https://github.com/badlogic/pi-mono/issues/3854) | ✅ CLOSED | Fireworks.ai 400 error on tool-enabled requests | **API 兼容性**：Fireworks 的 `anthropic-messages` 端点不支持 `eager_input_streaming` 和 `cache_control` 字段，需请求级适配。 |
| [#3826](https://github.com/badlogic/pi-mono/issues/3826) | 🔵 OPEN | TUI Markdown renderer stack-overflow on `>` lines | **崩溃级 bug**：pytest/PDB 输出中的长串 `>` 触发递归溢出，影响开发者调试场景，标记为 `inprogress`。 |
| [#3926](https://github.com/badlogic/pi-mono/issues/3926) | ✅ CLOSED | Handle followup doesn't clear editor when idle | **交互细节打磨**：Tab 绑定 followup 时，idle 状态下编辑器未清空，与 streaming 状态行为不一致，已快速修复。 |

---

## 重要 PR 进展

| # | 状态 | 标题 | 技术要点 |
|---|------|------|---------|
| [#3927](https://github.com/badlogic/pi-mono/pull/3927) | ✅ MERGED | Clear editor text on submit in interactive mode | 修复 idle 状态下提交后编辑器文本残留问题，关联 #3926 |
| [#3923](https://github.com/badlogic/pi-mono/pull/3923) | ✅ MERGED | fix(coding-agent): clear editor after normal submit | 同上问题的另一修复路径，确保正常提交后编辑器清空 |
| [#3917](https://github.com/badlogic/pi-mono/pull/3917) | ✅ MERGED | fix(tui): restore terminal state on unexpected exit | **终端状态安全**：Ctrl+C 中断启动过程时正确退出 Kitty keyboard protocol，避免终端乱码 |
| [#3915](https://github.com/badlogic/pi-mono/pull/3915) | 🔵 OPEN | feat(coding-agent,tui): run slash commands from inline autocomplete | **交互创新**：支持 mid-text 执行 slash 命令，类似 Cursor CLI；非破坏性命令保留后续文本 |
| [#3883](https://github.com/badlogic/pi-mono/pull/3883) | ✅ MERGED | fix(coding-agent): escape exported session metadata | **安全加固**：HTML 导出时对 session metadata 做转义，防止 XSS via `innerHTML` |
| [#3911](https://github.com/badlogic/pi-mono/pull/3911) | 🔵 OPEN | fix(coding-agent): handle duplicate session entries | **数据一致性**：重开 session 时避免重复持久化条目，防止渲染时节点链重复 |
| [#3909](https://github.com/badlogic/pi-mono/pull/3909) | ✅ MERGED | fix(ai): correct DeepSeek pricing to match official API docs | **定价准确性**：`deepseek-v4-flash` cacheRead 修正为 0.0028（原值 10x 错误），`v4-pro` 应用 75% 折扣价 |
| [#3897](https://github.com/badlogic/pi-mono/pull/3897) / [#3899](https://github.com/badlogic/pi-mono/pull/3899) | ✅ MERGED | fix(ai): update Antigravity UA to 1.107.0 | **紧急热修**：升级硬编码 UA 从 1.21.9 至 1.107.0，解决 Google API 503 拒绝 |
| [#3877](https://github.com/badlogic/pi-mono/pull/3877) | ✅ MERGED | feat: Update check against pi.dev | **产品化**：向 pi.dev 发送版本检查请求，附带平台/版本 UA 信息，为后续差异化更新铺路 |
| [#3868](https://github.com/badlogic/pi-mono/pull/3868) | 🔵 OPEN | refactor(coding-agent): migrate syntax highlighting to Shiki | **渲染引擎升级**：以 Shiki 替换 cli-highlight，支持 bash/read/write/edit diff 高亮，主题感知切换 |

---

## 功能需求趋势

| 方向 | 热度 | 代表 Issue/PR | 分析 |
|------|------|-------------|------|
| **新模型/提供商接入** | 🔥🔥🔥 | Cloudflare Workers AI (v0.70.6)、Xiaomi MiMo (#3912)、Fireworks 兼容 (#3854) | 多提供商策略加速，OpenAI/Anthropic 之外的选择成为标配需求 |
| **TUI 交互精细化** | 🔥🔥🔥 | 编辑器清空 (#3926)、Shift+Enter (#3884)、slash 命令内联 (#3915)、viewport API (#3925) | 从"能用"到"好用"的跨越，对标 Cursor/Codex CLI 体验 |
| **SDK/扩展 API 增强** | 🔥🔥 | `ctx.executeTool()` (#3893)、`changeCwd()` (#3921)、viewport state (#3925) | 扩展生态从消费型向生产型转变，开发者需要更底层的控制能力 |
| **跨平台/部署兼容性** | 🔥🔥 | XDG 目录 (#2870)、系统级安装更新 (#3922)、Bun 运行时 (#3861) | Linux 发行版差异、包管理器场景成为质量门槛 |
| **定价/成本透明** | 🔥 | DeepSeek 定价修正 (#3910/#3909)、Anthropic 订阅警告 (#3808) | 企业/团队用户对成本核算精度敏感 |

---

## 开发者关注点

### 🔴 高频痛点

1. **终端状态残留**（[#3917](https://github.com/badlogic/pi-mono/pull/3917), [#3919](https://github.com/badlogic/pi-mono/issues/3919)）
   - Kitty keyboard protocol 未正确清理导致终端乱码，影响所有 TUI 用户的基础信任

2. **编辑器状态不一致**（[#3926](https://github.com/badlogic/pi-mono/issues/3926), [#3884](https://github.com/badlogic/pi-mono/issues/3884)）
   - 提交后文本残留、快捷键行为因状态（idle/streaming）而异，增加认知负担

3. **工具执行可靠性**（[#3786](https://github.com/badlogic/pi-mono/issues/3786), [#3706](https://github.com/badlogic/pi-mono/issues/3706), [#3867](https://github.com/badlogic/pi-mono/issues/3867)）
   - `EBADF`、spawn 失败、SDK 中工具只输出不执行——长时间会话的稳定性仍是挑战

### 🟡 增长需求

4. **会话生命周期管理**（[#3921](https://github.com/badlogic/pi-mono/issues/3921), [#3914](https://github.com/badlogic/pi-mono/issues/3914)）
   - CWD 切换、fork 时中止生成等需求反映复杂工作流场景

5. **日志/可观测性**（[#3905](https://github.com/badlogic/pi-mono/issues/3905), [#3908](https://github.com/badlogic/pi-mono/pull/3908)）
   - 后台批量运行 Pi 实例需要结构化、可过滤的日志输出

6. **Markdown 渲染鲁棒性**（[#3826](https://github.com/badlogic/pi-mono/issues/3826)）
   - 真实开发输出（pytest、PDB）触发栈溢出，边缘 case 覆盖不足

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-04-29

---

## 今日速览

Qwen Code 今日密集发布 v0.15.4 稳定版及 TypeScript SDK v0.1.7，重点修复 VS Code 伴侣插件的斜杠命令补全问题并新增加泰罗尼亚语支持。社区围绕 **热重载系统**、**背景任务管理** 和 **会话回滚机制** 展开活跃讨论，同时 DeepSeek API 的 thinking 模式兼容性成为近期高频痛点。

---

## 版本发布

### v0.15.4（稳定版）
| 项目 | 内容 |
|:---|:---|
| **核心更新** | 新增加泰罗尼亚语本地化支持；修复 VS Code 伴侣插件中消息提交后斜杠命令补全不触发的问题；修复 CLI 渐变渲染边界问题 |
| **贡献者** | @jordimas, @yiliang114 |
| **链接** | [Release v0.15.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.4) |

### SDK TypeScript v0.1.7 / v0.1.7-preview.0
| 项目 | 内容 |
|:---|:---|
| **捆绑 CLI** | 0.15.3（稳定来源）/ 0.13.1（备用）|
| **说明** | 补发 npm 已发布版本 0.1.5 的 release 记录（原工作流失败）|
| **链接** | [sdk-typescript-v0.1.7](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.7) |

---

## 社区热点 Issues（精选 10 条）

| # | 状态 | 标题 | 评论 | 关键要点 |
|:---|:---|:---|:---|:---|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | 🔴 OPEN | Qwen OAuth 免费额度政策调整 | **120** | 社区最热议题：提议将日免费额度从 1000 降至 100 请求，并于 2026-05-20 关闭免费入口。引发大量开发者对成本敏感型工作流迁移的担忧 |
| [#3579](https://github.com/QwenLM/qwen-code/issues/3579) | ✅ CLOSED | DeepSeek API 400 错误：thinking 模式需回传 reasoning_content | 9 | **已修复**：DeepSeek-v4-flash 在对话中因未回传 reasoning_content 触发 400 错误，是近期多模型兼容性的典型 case |
| [#3652](https://github.com/QwenLM/qwen-code/issues/3652) | 🔴 OPEN | 输入长度超限 983,616 tokens | 5 | 长对话场景下的硬限制暴露，用户被迫频繁新建会话丢失上下文，需压缩策略优化 |
| [#3696](https://github.com/QwenLM/qwen-code/issues/3696) | 🔴 OPEN | 热重载系统（技能/扩展/MCP/配置）| 2 | **官方追踪议题**：@yiliang114 提出运行时免重启更新架构，含 6 个子任务，是提升开发体验的核心基建 |
| [#3634](https://github.com/QwenLM/qwen-code/issues/3634) | 🔴 OPEN | 后台任务管理路线图 | 2 | @wenshao 官方梳理三阶段进展：A/B 已合并，C 阶段 PR #3684 审核中，涉及 Monitor 工具与任务停止机制 |
| [#3644](https://github.com/QwenLM/qwen-code/issues/3644) | 🔴 OPEN | IDE 集成启用时 /rewind 失效 | 3 | 配置冲突：`ide.enabled=true` 阻断会话回滚功能，暴露 IDE 模式与核心 CLI 功能的耦合问题 |
| [#3595](https://github.com/QwenLM/qwen-code/issues/3595) | 🔴 OPEN | 本地 Qwen3.6-35B-A3B 无法识别图片输入 | 3 | 对比 iflow CLI 正常，qwencode 配置疑似缺失视觉能力声明，本地部署文档待完善 |
| [#3697](https://github.com/QwenLM/qwen-code/issues/3697) | 🔴 OPEN | 扩展 /rewind 支持文件变更回滚 | 1 | 当前仅截断对话历史，磁盘文件仍保留模型修改，导致"对话回滚但代码未回滚"的状态不一致 |
| [#3674](https://github.com/QwenLM/qwen-code/issues/3674) | 🔴 OPEN | llama.cpp 本地服务端图片输入不识别 | 2 | OpenAI 兼容接口下视觉能力检测失败，涉及本地推理栈的 multimodal 支持边界 |
| [#3715](https://github.com/QwenLM/qwen-code/issues/3715) | 🔴 OPEN | DeepSeek V4 Pro thinking 模式 400 错误 | 0 | **新上报**：与 #3579 同类但发生在 V4 Pro，暗示 thinking 模式处理存在系统性兼容缺口 |

---

## 重要 PR 进展（精选 10 条）

| # | 状态 | 标题 | 核心内容 |
|:---|:---|:---|:---|
| [#3717](https://github.com/QwenLM/qwen-code/pull/3717) | 🔴 OPEN | FileReadCache 与重复读取短路 | 会话级文件读取缓存，对未变更文件用占位符替代全量重读，降低长会话 I/O 开销 |
| [#3631](https://github.com/QwenLM/qwen-code/pull/3631) | 🔴 OPEN | 模型成本估算与优先级修复 | `/stats model` 新增基于用户定价的 Token 成本估算；修复模型解析优先级逻辑 |
| [#3604](https://github.com/QwenLM/qwen-code/pull/3604) | 🔴 OPEN | 技能并行加载与路径条件激活 | `SkillManager` 三重嵌套 `for-await` 改为 `Promise.all`；新增 `.skill-conditions.json` 路径匹配规则 |
| [#3714](https://github.com/QwenLM/qwen-code/pull/3714) | 🔴 OPEN | runtime.json 会话侧写文件 | 每个交互会话写入 `runtime.json`，外部工具可通过 PID 映射到会话 ID 与工作目录（移植自 kimi-cli #2082）|
| [#3687](https://github.com/QwenLM/qwen-code/pull/3687) | 🔴 OPEN | task_stop 工具统一终止后台 Shell | 后台任务 Phase B 跟进：模型用统一 `task_stop` 取消后台 Shell，替代危险的 `kill <pid>` Bash 调用 |
| [#3684](https://github.com/QwenLM/qwen-code/pull/3684) | 🔴 OPEN | Monitor 工具与节流 stdout 流式传输 | 后台任务 Phase C：长运行命令的 stdout 按 Token 桶节流（突发 5/秒，持续 1/秒）回传为事件通知 |
| [#3645](https://github.com/QwenLM/qwen-code/pull/3645) | 🔴 OPEN | 模型解析优先级修正：`argv > settings > env` | 统一所有认证类型的模型选择顺序，解决命令行参数被环境变量覆盖的反直觉行为 |
| [#3637](https://github.com/QwenLM/qwen-code/pull/3637) | ✅ CLOSED | 保留合并 assistant 消息时的 reasoning_content | 修复 `mergeConsecutiveAssistantMessages` 静默丢弃 `reasoning_content` 导致 DeepSeek thinking 模式断链 |
| [#3663](https://github.com/QwenLM/qwen-code/pull/3663) | 🔴 OPEN | TUI 闪烁与窄输出硬化修复 | 基于指标量化修复：限制 pending 流超时、消除工具详情区抖动、窄终端布局崩溃（关闭 #3279）|
| [#3615](https://github.com/QwenLM/qwen-code/pull/3615) | 🔴 OPEN | LSP 文档修复与 isPathSafe 放宽 | 允许 `.lsp.json` 配置绝对路径语言服务器命令；修复安全检查误拦截 `/usr/bin/clangd` 等系统路径 |

---

## 功能需求趋势

| 方向 | 热度 | 代表议题 | 趋势解读 |
|:---|:---|:---|:---|
| **运行时热更新** | 🔥🔥🔥 | #3696, #3634, #3687, #3684 | 从配置到技能到后台任务，社区强烈期望"零重启"迭代能力，官方已建立系统化追踪 |
| **会话状态管理** | 🔥🔥🔥 | #3697, #3058, #1902, #3706 | `/rewind` 功能从"对话截断"向"完整状态回滚（含文件系统）"演进，批量会话操作需求浮现 |
| **多模型兼容性** | 🔥🔥🔥 | #3579, #3715, #3679, #3674, #3595 | DeepSeek 系列 thinking 模式、上下文窗口标记、本地视觉模型接入构成三大子战场 |
| **IDE 集成深化** | 🔥🔥 | #3644, #3712, #3615 | IDE 上下文注入架构重构（从独立 history entry 合并至 user message），LSP 工具调用率提升 |
| **性能与可观测性** | 🔥🔥 | #3717, #3702, #3631, #3714 | 长会话性能衰减（渲染树上限、文件缓存）、成本透明化、进程级可观测成为企业级刚需 |
| **TUI 体验打磨** | 🔥🔥 | #3663, #3680, #3710, #3700 | Markdown 富渲染、横幅定制、导出格式键盘导航等"最后一公里"体验密集迭代 |

---

## 开发者关注点

### 🔴 高频痛点

| 痛点 | 场景 | 社区诉求 |
|:---|:---|:---|
| **DeepSeek thinking 模式 400 错误** | 多轮对话中 reasoning_content 传递链断裂 | 系统性兼容方案，而非个案修复（#3579 关闭后 #3715 复现）|
| **长会话硬性截断** | 983,616 tokens 上限触发 `InvalidParameter` | 自动压缩策略前置触发，或更透明的上下文预算提示（#3652）|
| **IDE 模式功能冲突** | `ide.enabled=true` 导致 /rewind、热重载等失效 | IDE 集成与核心功能解耦，或明确能力矩阵（#3644）|
| **本地视觉模型配置黑盒** | Qwen3.6-VL 本地部署后 qwencode 不识别图片 | 视觉能力检测逻辑文档化，配置模板标准化（#3595, #3674）|

### 🟡 新兴需求

- **后台任务原生管理**：从"能用 `&` 挂起"到模型可感知、可停止、可流式监控的 first-class 支持（#3634 三阶段路线图）
- **会话级文件系统快照**：与 /rewind 联动的代码变更原子回滚，避免"对话回去了，代码烂掉了"（#3697）
- **成本实时仪表盘**：基于用户自定义定价的 Token 消耗追踪，应对 OAuth 免费额度收紧（#3631, #3203）

---

*日报基于 GitHub 公开数据整理，链接均可点击追踪最新进展。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*