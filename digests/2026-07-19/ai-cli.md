# AI CLI 工具社区动态日报 2026-07-19

> 生成时间: 2026-07-19 02:04 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-07-19

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**“基建固化与多模态深化”并行期**。头部工具（Codex、Gemini、Copilot）完成从“可用”向“生产级稳定”的跨越，密集修复 Windows/macOS 资源泄漏、TUI 流式渲染、SQLite 连接池等核心基建问题；新兴工具（Kimi、Qwen、DeepSeek TUI、Pi、OpenCode）呈现**“小步快跑、Issue 驱动 PR、垂直场景突围”**特征，在推理参数运行时可控性、ACP 协议适配、工作流图编排等细分领域快速迭代。整体呈现：**模型能力平权（1M Context、Reasoning）成基准线、会话全生命周期管理成硬指标、企业级安全合规（沙箱、权限、审计）成准入门槛**的三大趋同演进。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新量(Top10) | PR 合入/推进量(Top10) | 版本发布情况 | 核心研发节奏 |
|------|----------------------|------------------------|--------------|--------------|
| **OpenAI Codex** | 10 个高热度 Issue（含 64👍 需求） | 10 个核心 PR 批量合入（渲染、音频、SQLite、模型元数据） | **双版本并行**：v0.144.6 热修复 + v0.145.0-alpha.24 | **极高**：主干+稳定分支双轨，基建 PR 批量落地 |
| **Gemini CLI** | 10 个 P1/P2 级 Issue（Subagent、Shell、工具数上限） | 7 个 PR 推进（安全修复、A2A 加固、夜ly 发布） | **Nightly 自动构建**：v0.52.0-nightly.20260719 | **高**：安全左移+Agent 架构治理双线并行 |
| **GitHub Copilot CLI** | 10 个高赞 Issue（1M Context 62👍、远程会话 53👍） | **0**（过去 24h 无 PR） | **无新版本**（v1.0.71 存僵尸进程回归） | **中低**：Issue 积压重、PR 交付慢，稳定性债务显性化 |
| **Kimi Code CLI** | 2 个核心 Issue（Reasoning 切换、权限逻辑缺陷） | 2 个高质量 PR（`/effort` 命令、ACP 空答案修复） | **无新 Release**（最新 v0.27.0） | **极高响应**：Issue→PR ~2 天，核心维护者直接驱动 |
| **OpenCode** | 10 个 Issue（内存 Megathread 113 评论、桌面端体验） | 10 个 PR 合入/推进（V2 回归修复、深度链接、分页） | **无新 Release** | **高**：V2 架构攻坚期，桌面端体验补齐并行 |
| **Pi** | 10 个精选 Issue（流式终止、Compaction 重试、定价修正） | 10 个 PR 高效合入（流控、共享认证、Scoped Model、上下文显示） | **无新 Release** | **高**：Bug 修复交付效率极高，RPC 协议开放同步推进 |
| **Qwen Code** | 10 个 Issue（Subagent 模型切换 P1、Daemon 冷启动、并发写入分叉） | 10+ PR 合入（单写者租约、Gemma 4 适配、工具名规范化、resize 泄漏） | **三版同发**：v0.19.12 稳定/预览/nightly | **极高**：多渠道同步发布，P1 Bug 当日修复进主干 |
| **DeepSeek TUI (CodeWhale)** | 10 个 Issue（Agent 遵循指令 39 评论、ACP Registry、xAI 登录阻断） | **15+ PR 单日合并/关闭**（Work Graph、Kimi/xAI 修复、TUI 性能、v0.9.1 清理） | **准备 v0.9.1 RC**（无新 Release） | **爆发式**：大规模重构收尾，发布阻断项集中清零 |

> **注**：Claude Code 今日摘要生成失败，暂无数据纳入对比。

---

## 3. 共同关注的功能方向

| 方向 | 关注工具（代表性 Issue/PR） | 核心诉求共识 |
|------|----------------------------|--------------|
| **会话全生命周期可靠性** | **Codex** (#33884 AppHang、#34097 DWM 泄漏、**#32986 Git 轮询**)、**Copilot** (#3767 大附件卡死、**#4163 僵尸进程**、#4171 ASLR 崩溃)、**OpenCode** (#30443 压缩循环、**#35427 目录丢失 500**)、**Qwen** (#7164 并发分叉、**#7156 Subagent 溢出**)、**Pi** (#6647 Compaction 无重试、**#6768 Enterprise 失败**) | 跨平台长时运行稳定性、崩溃恢复、并发写入一致性、资源配额与清理策略 |
| **模型能力平权与运行时可控** | **Copilot** (#2785 1M Context 62👍、**#2958 模式专属模型**)、**Codex** (#33961 272k Context、**#34035 取消限制 64👍**)、**Kimi** (#2501 `/effort` 实时切换、**PR #2509**)、**Qwen** (#7177 Gemma 4 原生 Schema、**#7172 Plan 模式路由**)、**DeepSeek** (#4555 Kimi K3 路由、**#4556 Context 窗口溯源**) | 1M+ Context 标配、Reasoning/Effort 运行时动态调整、多模型无缝切换不丢上下文、厂商特定协议原生适配 |
| **多智能体/工作流编排生产化** | **Codex** (#33314 配置持久化、**#34061 子代理磁盘爆炸**)、**Gemini** (#22323 Subagent 误报成功、**#21409 挂起**)、**OpenCode** (#37698 畸形工具输入恢复、**#4553 Work Graph 核心模型**)、**Qwen** (#7166 单写者租约、**#7178 SDK 导入**)、**DeepSeek** (#4553 Work Graph、**#2974 模型侧 workflow 工具**) | 状态机修正、持久化与恢复、磁盘/内存配额、可观测轨迹、DAG 编排运行时 |
| **企业级安全与合规左移** | **Gemini** (#28403 Shell 变量注入 GHSA、**#28353 A2A 路径遍历**)、**Pi** (#6725 Copilot 定价修正、**#6804 Scoped Model 清理**)、**DeepSeek** (#1186 类型化权限、**#4544 doctor 只读化**)、**OpenCode** (#37689 相对路径授权回退) | 提示词注入防御、沙箱/权限最小化、审计日志、合规部署模式、供应链安全 |
| **跨平台原生体验与 TUI 现代化** | **Codex** (#34045 增量 Markdown、**#33307 粘贴防富文本**)、**Gemini** (#21983 Wayland、**#22465 交互式提示卡死**)、**Copilot** (#4160 Plan 模式误拦截、**#4172 GPT-5.6 退出卡顿**)、**OpenCode** (#37428 对比度、**#35223 深度链接**)、**DeepSeek** (#4550 模型选择器 3.1s→极快、**#3480 UX 大改版**) | 流式渲染零卡顿、终端协议兼容、键鼠交互一致性、高信息密度可决策 UI |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 当前战略重心 |
|------|----------|--------------|--------------|--------------|
| **OpenAI Codex** | **全模态 Agent OS 内核** | Rust 核心 + TUI/桌面双端、Realtime V3 音频链路、SQLite 中心化状态、动态工具/多模态原语 | 追求极致性能与前沿模态的**高阶个人开发者/早期采纳者** | 基建成熟度（渲染/存储/音频）、Windows 稳定性攻坚、速率限制商业博弈 |
| **Gemini CLI** | **企业级 Agent 基础设施** | Go/TypeScript 混合、ACP 原生、组件级评测体系（76 用例×6 模型）、零依赖沙箱探索 | **平台工程团队、企业内部开发平台构建者** | Agent 编排可观测性、长上下文工程化、安全合规左移、原生 Bash 融合 |
| **GitHub Copilot CLI** | **GitHub 生态原生集成入口** | Node.js/TypeScript、VS Code 深度绑定、ACP/语言服务器复用、Premium 计费模型 | **GitHub 重度用户、企业 Copilot 订阅者** | 与 Claude Code 功能平权（1M Context/远程会话）、Plan Mode 信任重建、稳定性债务偿还 |
| **Kimi Code CLI** | **推理参数极致可控的轻量 CLI** | Go 单二进制、ACP Server 模式、配置持久化优先、核心贡献者驱动高响应 | **偏好键盘流、追求推理灵活性的个人开发者/小团队** | 交互流不打断（Slash Command）、协议兼容性、安全规则引擎修正 |
| **OpenCode** | **桌面端原生的全平台 Agent 客户端** | V2 架构重构、Tauri 桌面端、Work Graph 可视化编程、多提供商路由 | **重视 GUI 体验、多模型切换的全栈开发者** | V2 稳定性/内存治理、桌面端功能对齐终端端、国际化本地化 |
| **Pi** | **可编程 Agent Runtime 与协议枢纽** | TypeScript、RPC 协议开放会话树、多 Provider 统一抽象、扩展机制、流式鲁棒性 | **IDE 插件开发者、二次开发集成方、多云模型用户** | 流式/Compaction 重试框架、企业级认证隔离、RPC 能力补全、大文件性能 |
| **Qwen Code** | **多模型兼容性标杆与 Daemon 高性能服务** | TypeScript、Daemon 架构冷启动优化、MCP/工具名规范化、Gemma/原生 Schema 适配 | **多模型并行评测、追求兼容性与性能平衡的团队** | Daemon 冷启动追踪、并发会话一致性、MCP 生态兼容、三渠道同步发布 |
| **DeepSeek TUI (CodeWhale)** | **工作流图编排的终端原生 IDE** | Rust、Work Graph DAG 运行时、Provider 抽象层、模块化重构（拆解 God Object） | **终端重度用户、追求可视化编排、低成本模型接入者** | v0.9.1 发布就绪、Work Graph 落地、多提供商路由修复、中文/跨平台体验 |

---

## 5. 社区热度与成熟度评级

| 梯队 | 工具 | 判定依据 | 成熟度标签 |
|------|------|----------|------------|
| **第一梯队：高活跃·高成熟·工程化深** | **OpenAI Codex**、**Qwen Code** | 日均 10+ 核心 PR 合入、多版本线并行、P1 Bug 当日修复、基建完备（渲染/存储/音频/Daemon） | **生产级** |
| **第二梯队：高活跃·架构重构期·企业级导向** | **Gemini CLI**、**OpenCode**、**Pi** | 安全左移/评测体系/协议开放等长期工程投入、Issue 质量高（Epic/P1 标签规范）、PR 审查严格 | **准生产级 / 平台级** |
| **第三梯队：高响应·小而美·垂直突围** | **Kimi Code CLI**、**DeepSeek TUI** | 核心维护者直接驱动、Issue→PR 极快（天级）、功能聚焦（Reasoning 切换/Work Graph）、技术债显性化但清理果断 | **快速迭代期 / 细分领先** |
| **第四梯队：Issue 积压·交付滞后·信任修复期** | **GitHub Copilot CLI** | 高赞需求长期未响应、24h 0 PR、回归 Bug 叠加（僵尸进程/ASLR/计费）、与竞品差距显性化 | **需

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-19）

---

## 1. 热门 Skills 排行（按社区讨论度）

| # | Skill / PR | 核心功能 | 讨论焦点 | 状态 |
|---|-----------|---------|---------|------|
| 1 | **#1298** `skill-creator` 评估系统修复 | 修复 `run_eval.py` 全场景 `recall=0%` 误报，导致描述优化循环失效 | 评估管道完全失效，阻断技能自动化改进；涉及 Windows 流读取、触发检测、并行工作器多重修复 | 🔴 OPEN |
| 2 | **#514** `document-typography` | AI 生成文档的排版质量控制：孤行/寡妇段落、编号对齐、排版规范 | 通用刚需——所有文档输出均受益；讨论聚焦触发条件粒度与规则完备性 | 🔴 OPEN |
| 3 | **#1367** `self-audit` | 机械文件验证 + 四维推理质量门（严重度优先），通用型输出审计技能 | 元技能定位：任意项目/技术栈/模型通用；社区关注“审计即技能”的可落地性 | 🔴 OPEN |
| 4 | **#723** `testing-patterns` | 全栈测试模式库：Testing Trophy、AAA、React Testing Library、契约测试、E2E 等 | 覆盖面最广的测试技能提案；讨论集中于“模式库 vs 可执行指令”的平衡 | 🔴 OPEN |
| 5 | **#1302** `color-expert` | 专业色彩知识库：命名系统、色彩空间选型表、无障碍对比度、品牌色管理 | 设计/前端/可视化场景高频依赖；被视为“缺失已久的基础设施型技能” | 🔴 OPEN |
| 6 | **#486** `odt` | OpenDocument (.odt/.ods) 创建、填充、解析、转 HTML，支持 LibreOffice 生态 | 企业级文档流转刚需；讨论模板填充 API 设计与 MCP 集成可能性 | 🔴 OPEN |
| 7 | **#83** `skill-quality-analyzer` / `skill-security-analyzer` | 双元技能：从结构、文档、安全、维护性、测试五维度评审技能质量 | “技能审技能”的元治理工具；社区期待纳入官方 CI 门禁 | 🔴 OPEN |
| 8 | **#525** `pyxel` | 基于 `pyxel-mcp` 的复古像素游戏开发工作流（写→运行捕获→审查→迭代） | 小众但完整的“代码+运行时捕获”闭环示范；MCP 优先架构受关注 | 🔴 OPEN |

> **注**：全部 20 条热门 PR 均为 **OPEN** 状态，反映社区贡献审核周期较长，核心维护者带宽受限。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 核心诉求 | 热度指标 |
|---------|-----------|---------|---------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 社区技能以 `anthropic/` 命名空间分发，伪造官方身份，诱导用户过度授权 | 🔥 34 评论 / 2 👍 |
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) | Claude.ai 缺乏组织内技能库/直链分享，现状靠手动下载+上传 | 🔥 14 评论 / 7 👍 |
| **评估/触发系统根治** | [#556](https://github.com/anthropics/skills/issues/556)<br>[#1169](https://github.com/anthropics/skills/issues/1169) | `run_eval.py` 触发率长期 0%，优化循环失效；连 slash-command 字面调用也检测不到 | 🔥 15 评论 / 8 👍 |
| **Windows 原生兼容** | [#1061](https://github.com/anthropics/skills/issues/1061)<br>[#1099](https://github.com/anthropics/skills/pull/1099)<br>[#1050](https://github.com/anthropics/skills/pull/1050) | PATHEXT、cp1252、select() 三大阻断项 | 3 评论 / 2 👍 |
| **技能分发去重与规范** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` 与 `example-skills` 内容重复，污染上下文窗口 | 6 评论 / 9 👍 |
| **技能即 MCP / 协议化** | [#16](https://github.com/anthropics/skills/issues/16) | 将技能内部能力暴露为标准化 MCP 接口，实现跨平台复用 | 4 评论 |
| **Bedrock / 企业私有部署** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 环境下技能加载与运行路径不明 | 4 评论 |
| **推理质量治理** | [#1385](https://github.com/anthropics/skills/issues/1385)<br>[#412](https://github.com/anthropics/skills/issues/412) | 预校准→对抗审查→交付验证三闸管线；Agent 治理/安全模式技能 | 9 评论 |

**趋势判读**：
- **基建优于功能**：社区呼声最高的不是“新技能”，而是**评估系统修复、Windows 兼容、命名空间治理、分发去重**等基础设施问题。
- **企业化就绪**：组织级共享、Bedrock 兼容、安全审计、MCP 协议化，指向团队/企业落地场景。
- **元技能崛起**：技能审技能（质量/安全）、自审计、推理质量闸，显示社区开始构建“技能工程化”体系。

---

## 3. 高潜力待合并 Skills（讨论活跃、接近落地）

| PR | Skill | 合并信号 | 关键阻碍 |
|---|-------|---------|---------|
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | 通用刚需、实现完整、讨论聚焦细节而非方向 | 需要维护者最终审阅触发条件边界 |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | 覆盖面广、结构成熟、无架构争议 | 体量大，需拆分或分批合并 |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | 独立性强、依赖少、设计/前端高频 | 文档与示例完善度 |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` | 企业级文档流转刚需、MCP 就绪 | 案例测试覆盖 |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` 大小写修复 | 单文件 8 处修复、零风险、已久拖未决 | 仅缺维护者点击合并 |
| **[#539](https://github.com/anthropics/skills/pull/539)**<br>**[#361](https://github.com/anthropics/skills/pull/361)** | YAML 特殊字符预检 | 修复静默解析失败、已有两份独立实现 | 需合并为单一规范实现 |
| **[#1099](https://github.com/anthropics/skills/pull/1099)**<br>**[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows 子进程/编码修复 | 1-2 行改动、已复现、阻断 Windows 用户 | 等待 CI 增加 Windows 跑通 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区核心诉求已从“贡献更多技能”转向“修好技能工程基建”**：评估系统失效、Windows 不可用、命名空间滥用、分发去重缺失、组织级共享缺位——这些基础设施缺口正阻碍技能生态从“个人实验”走向“团队生产力标准件”。

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-19

---

## 1. 今日速览

- **版本发布**：推出 `rust-v0.144.6` 热修复版本，修正 GPT-5.6 Sol/Terra/Luna 三模型的上下文窗口为 272,000 tokens 并更新捆绑指令；同步发布 `0.145.0-alpha.24` 预览版。
- **社区焦点**：Windows 端性能问题集中爆发（AppHang 循环、WMI 高 CPU、DWM 句柄泄漏），macOS 端出现 Git 轮询导致的空闲高 CPU 与内存暴涨；5 小时使用限制临时移除引发社区强烈呼吁永久化（64 👍）。
- **工程进展**：TUI 流式渲染、Markdown 增量渲染、SQLite 连接池集中化、音频模态支持等核心基建 PR 批量合入，0.145 版本基础设施趋于成熟。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 |
|------|------|----------|
| **rust-v0.144.6** | 热修复 | • 刷新 GPT-5.6 Sol/Terra/Luna 捆绑指令<br>• 修正三模型上下文窗口为 **272,000 tokens**<br>• 回溯 PR #33972、#34009 |
| **rust-v0.145.0-alpha.24** | Alpha 预览 | 0.145 线最新预览版，包含近期所有基建改进（见下文 PR） |

> 🔗 [v0.144.6 完整变更日志](https://github.com/openai/codex/compare/rust-v0.144.5...rust-v0.144.6)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论/👍 | 关注理由 |
|---|------|------|---------|----------|
| [#32925](https://github.com/openai/codex/issues/32925) | Browser/Chrome 插件 `Cannot redefine property: process` | ✅ Closed | 56 / 33 | **影响面最广**：Desktop 26.707.71524 版本导致浏览器集成完全失效，macOS 用户大量中招，已修复回溯。 |
| [#34035](https://github.com/openai/codex/issues/34035) | 永久取消 5 小时使用限制 | 🟢 Open | 9 / **64** | **社区呼声最高**：Plus/Pro/Business 用户要求将临时放开的 5h 限制永久化，保留周配额。 |
| [#33884](https://github.com/openai/codex/issues/33884) | Windows 周期性 ~15s AppHang / ~10s 响应循环 | 🟢 Open | 9 / 0 | **严重可用性阻塞**：26.715 版本在 Win11 上出现确定性冻结，疑似 GC/UI 线程争用。 |
| [#34097](https://github.com/openai/codex/issues/34097) | 崩溃循环留下 33K DWM 句柄导致系统级拖拽卡顿 | ✅ Closed | 2 / 0 | **系统级副作用**：Codex 崩溃泄漏 DWM 资源，需重启会话恢复，已在 26.715.4045.0 缓解。 |
| [#32530](https://github.com/openai/codex/issues/32530) | VS Code 面板 Linux 下间歇性卡在加载（net::ERR_FAILED） | 🟢 Open | 8 / 12 | **IDE 集成痛点**：本地 webview 资源加载失败，Ubuntu 26.04 + VS Code 1.128 高频复现。 |
| [#29499](https://github.com/openai/codex/issues/29499) | Windows 启动后触发 WMI Provider Host 高 CPU | 🟢 Open | 6 / 6 | **资源占用异常**：启动后持续占用 WMI，疑与沙箱/权限枚举有关。 |
| [#33314](https://github.com/openai/codex/issues/33314) | Multi-Agent V2 需可验证的完整配置应用与生命周期连续性 | 🟢 Open | 5 / 8 | **多智能体架构跟进**：#32782 后续，关注自定义 Agent 配置持久化与会话恢复。 |
| [#34061](https://github.com/openai/codex/issues/34061) | 子代理导致疯狂磁盘占用 | 🟢 Open | 5 / 0 | **存储压力新增**：CLI 0.144.6 + gpt-5.6 下 Subagent 产生大量临时文件。 |
| [#32986](https://github.com/openai/codex/issues/32986) | macOS 空闲时以 ~3.6 git/s 轮询历史工作区（6-8% CPU） | 🟢 Open | 2 / 1 | **后台资源滥用**：非活跃目录也被轮询，导致持续 CPU 占用。 |
| [#33307](https://github.com/openai/codex/issues/33307) | 粘贴代码被转为富文本（`__init__` → **init**) | 🟢 Open | 2 / 7 | **编辑体验倒退**：TUI/桌面端粘贴自动 Markdown 化，破坏代码结构。 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心价值 |
|---|------|------|----------|
| [#34045](https://github.com/openai/codex/pull/34045) | 渲染流式 Markdown 增量化 | ✅ Closed | **TUI 性能里程碑**：仅重渲染变更块，消除流式输出时的全量重绘卡顿。 |
| [#34049](https://github.com/openai/codex/pull/34049) | 避免流式时冗余 TUI 重绘 | ✅ Closed | 配合 #34045，缓存推理头部、仅在可见尾行变化时重绘。 |
| [#34080](https://github.com/openai/codex/pull/34080) | 为动态工具与 Code Mode 添加音频输出支持 | ✅ Closed | **多模态基建**：新增 `inputAudio` 内容项、`audio()` 助手，支持 data URL / MCP 音频。 |
| [#34067](https://github.com/openai/codex/pull/34067) | 为 Realtime V3 会话植入初始文本项 | ✅ Closed | 实现 `initialItems` 引导，支持 `user/developer/assistant` 文本预填充。 |
| [#33938](https://github.com/openai/codex/pull/33938) | 集中化 SQLite 连接配置 | ✅ Closed | 统一 WAL、同步、自动真空、busy-timeout、连接池大小，消除配置漂移。 |
| [#33961](https://github.com/openai/codex/pull/33961) | 刷新捆绑模型元数据 | ✅ Closed | GPT-5.6 系列上下文窗口 → 272k，同步推理摘要/技能/权限/自动审阅目录。 |
| [#34009](https://github.com/openai/codex/pull/34009) | 将 0.144 热修复范围收窄至 GPT-5.6 提示词与上下文 | ✅ Closed | 回滚 #33972 引入的无关目录变更，最小化稳定分支风险。 |
| [#33950](https://github.com/openai/codex/pull/33950) | 让用户记住恢复会话的工作目录 | ✅ Closed | 新增 `tui.resume_cwd`（`current`/`session`），支持一键持久化偏好。 |
| [#33944](https://github.com/openai/codex/pull/33944) | 在世界状态中追踪权限指令 | ✅ Closed | 以哈希键存储权限上下文，变更时重发，避免重复/丢失。 |
| [#31781](https://github.com/openai/codex/pull/31781) | 限制执行器可控的 HTTP 响应缓冲 | 🟢 Open | **安全加固**：按字节而非帧数限流，防恶意远程 exec-server 耗尽内存。 |

---

## 5. 功能需求趋势

| 趋势 | 代表 Issue/PR | 社区热度 | 备注 |
|------|---------------|----------|------|
| **取消/放宽速率限制** | #34035 (64 👍) | ⭐⭐⭐⭐⭐ | 核心付费用户最强诉求，官方尚无正式回应。 |
| **Windows 原生性能与稳定性** | #33884, #34097, #29499, #33875 | ⭐⭐⭐⭐ | 4 个高优 Win 问题同期爆发，疑与 26.715 版本回归相关。 |
| **多智能体/子代理生产化** | #33314, #34061, #32101 | ⭐⭐⭐ | 从“可跑通”转向“可观测、可持久、可控磁盘”。 |
| **IDE 深度集成修复** | #32530 (Linux webview), #33924 (USB 切换器冻结) | ⭐⭐⭐ | VS Code 扩展与桌面端联动场景下的边缘案例增多。 |
| **音频/多模态原语** | #34080, #34067, #33982 | ⭐⭐ | Realtime V3 + 动态工具音频链路打通，面向语音编程场景。 |
| **TUI 流式体验现代化** | #34045, #34049, #34047, #34004 | ⭐⭐ | 增量 Markdown、推理快捷键不重发模型、粘贴防富文本化。 |

---

## 6. 开发者关注点 & 痛点

1. **Windows 体验严重倒退**  
   - 26.715 引入周期性冻结、DWM 句柄泄漏、WMI 高 CPU、USB 切换器触发卡顿，**建议优先发布 26.715.x 专项修复版**。

2. **资源占用失控（跨平台）**  
   - macOS：空闲 Git 轮询 + 内存暴涨至 55 GB (#33582)  
   - CLI：会话日志 700 MB–2 GB (#24948)、Subagent 磁盘爆炸 (#34061)  
   - **需要统一的资源配额与清理策略**。

3. **粘贴/编辑体验倒退**  
   - 代码粘贴自动 Markdown 化 (#33307, #34004)、diff 粘贴破坏格

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-19

---

## 1. 今日速览
- **夜ly 版本发布**：v0.52.0-nightly.20260719.gacae7124b 自动发布，版本号常规递增。
- **安全修复优先**：核心仓库聚焦于修复 Shell 变量扩展绕过漏洞（GHSA-wpqr-6v78-jr5g）及 A2A 服务路径遍历风险，体现安全加固为当前主旋律。
- **Agent 架构深度治理**：高优先级 Issue 集中于 Subagent 状态误报、通用 Agent 卡死、工具数量限制导致的 400 错误及 Auto Memory 机制缺陷，揭示多 Agent 协作与长上下文管理的工程化挑战。

---

## 2. 版本发布
### v0.52.0-nightly.20260719.gacae7124b
- **类型**：Nightly 自动构建
- **变更日志**：[对比 v0.52.0-nightly.20260718](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260718.gacae7124b...v0.52.0-nightly.20260719.gacae7124b)
- **备注**：无人工编写 Release Notes，属常规 CI/CD 产物。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 优先级/标签 | 关注理由 |
|---|-------|----------|-------------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 达 MAX_TURNS 仍上报 GOAL 成功** | P1, Bug, Need Retest | **严重逻辑缺陷**：子任务未实际执行却标记成功，导致上层编排失感知，阻断复杂工作流可靠性。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist Agent 频繁挂起** | P1, Bug, 👍8 | **高复现率阻断性 Bug**：用户反馈极高，致使必须禁用 Subagent 才能工作，严重影响核心体验。 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令执行完毕后卡在 "Waiting input"** | P1, Core, 👍3 | **交互层死锁**：简单命令也触发，怀疑 PTY/流控制处理存在竞态，基础设施稳定性隐患。 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **组件级评测体系建设** | P1, Eval Infra, Epic | **工程化里程碑**：76 个行为评测用例跨 6 模型运行，标志着从“凑合跑”向“可度量质量”转型。 |
| 5 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **工具数 >128 触发 400 错误** | P2, Bug | **扩展性瓶颈**：MCP/技能生态爆发期，工具注册表需动态裁剪或分页机制，否则生态无法规模化。 |
| 6 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 无限重试低信号会话** | P2, Bug | **资源泄漏风险**：后台提取器空转消耗配额，需引入熔断/隔离机制。 |
| 7 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **零依赖 OS 沙箱 + 执行后意图路由** | P2, Enhancement, Large | **架构级探索**：顺应模型原生 Bash 亲和性，若落地将重塑工具调用范式，安全与性能并重。 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser Subagent 在 Wayland 下失效** | P1, Bug, Wayland | **平台兼容性缺口**：Linux 主流显示协议不支持，限制 Web 自动化场景落地。 |
| 9 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST 感知工具价值评估** | P2, Epic, Customer | **研发投入决策依据**：精准读写 vs Token 开销的量化分析，指引下一代代码工具形态。 |
| 10 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent 忽略 settings.json 覆盖** | P2, Bug | **配置系统一致性**：子 Agent 配置合并链路断裂，暴露配置注入机制的系统性缺陷。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心内容 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **Open** | **安全修复**：修补 `$VAR`/`${VAR}` 变量扩展绕过（GHSA-wpqr-6v78-jr5g），加固 `detectBashSubstitution` 与 `detectPowerShellSubstitution` | **Core Security** - 所有 Shell 执行路径 |
| 2 | [#28441](https://github.com/google-gemini/gemini-cli/pull/28441) | **Open** | **Chore**：夜ly 版本号自动递增至 0.52.0-nightly.20260719 | 发布流程 |
| 3 | [#28438](https://github.com/google-gemini/gemini-cli/pull/28438) | **Open** | **Bugfix**：工具名注册表查找前 Trim 空白，修复因空格导致的工具调用失败 | Agent/Tooling - 高频交互路径 |
| 4 | [#28353](https://github.com/google-gemini/gemini-cli/pull/28353) | **Open** | **Security (Defense-in-depth)**：A2A Server `restore` 命令路径遍历防护，规范化路径并校验目录约束 | A2A Server - 企业级部署风控 |
| 5 | [#28348](https://github.com/google-gemini/gemini-cli/pull/28348) | **Open** | **Critical Fix**：解决 `MaxListenersExceededWarning` 与 Windows OAuth 无限认证循环 | Core/Auth - 稳定性 & 跨平台 |
| 6 | [#28248](https://github.com/google-gemini/gemini-cli/pull/28248) | **Closed** | **Docs**：详细记录 MCP 服务器环境变量展开语法（`$VAR`、`${VAR:-fallback}`、`%VAR%` 等） | MCP/Config - 开发者体验 |
| 7 | [#28247](https://github.com/google-gemini/gemini-cli/pull/28247) | **Closed** | **Bugfix**：`ls` 忽略模式改为相对路径匹配，支持 `**` 通配符，修复 #28207 | Core/FS - 文件系统工具准确性 |

> 其余 PR 多为文档微调或小范围重构，暂不列入核心视野。

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

1. **Agent 编排与可观测性成熟化**  
   - Subagent 状态机修正（#22323）、轨迹可视化/分享（#22598）、配置继承修复（#22267）、自毁行为抑制（#22672）。  
   - **信号**：从“能跑通”转向“可调试、可配置、可信任”。

2. **原生 Bash/OS 能力深度融合**  
   - 零依赖沙箱（#19873）、AST 感知工具链评估（#22745/#22746）、临时脚本治理（#23571）。  
   - **信号**：承认模型原生偏好 POSIX 工具链，基建层需提供安全、高效的原生执行环境。

3. **长上下文与记忆系统工程化**  
   - Auto Memory 去重/隔离（#26522/#26523/#26525）、组件级评测体系（#24353）、工具数量动态裁剪（#24246）。  
   - **信号**：Token 经济与上下文窗口成为硬约束，需系统级方案而非提示词堆砌。

4. **跨平台终端与 GUI 交互稳健性**  
   - Wayland 浏览器支持（#21983）、外部编辑器缓冲区刷新（#24935）、终端 Resize 无闪烁（#21924）、交互式提示卡死（#22465）。  
   - **信号**：TUI 与系统 Shell/显示协议深度耦合，边缘案例多，需专项测试矩阵。

5. **安全与合规左移**  
   - 变量注入绕过（#28403）、路径遍历（#28353）、Secret 红测机制（#26525）。  
   - **信号**：企业级采用门槛提升，安全审计成为发布门禁。

---

## 6. 开发者关注点（痛点与高频诉求）

| 痛点类别 | 典型反馈 | 代表 Issue |
|----------|----------|------------|
| **Subagent 不可靠** | “挂起 1 小时”、“误报成功”、“配置不生效”、“Wayland 跑不起来” | #21409, #22323, #22267, #21983 |
| **Shell 交互卡顿/死锁** | “命令跑完还在等输入”、“Vite 交互式提示卡死”、“外部编辑器退出画面花屏” | #25166, #22465, #24935 |
| **配置与扩展生态碎片化** | “>128 工具报 400”、“Symlink Agent 不识别”、“MCP 环境变量语法未文档化” | #24246, #20079, #28248 |
| **记忆系统噪音与失控** | “低信号会话无限重试”、“补丁校验不严、静默丢弃”、“Secret 先入模型后脱敏” | #26522, #26523, #26525 |
| **缺乏可观测手段** | “Subagent 轨迹无法分享”、“Bug 报告不含子上下文”、“Agent 自我认知不准” | #22598, #21763, #21432 |

> **核心诉求**：**“少写 Prompt 工程，多给基建保障”**——开发者期望框架层解决并发、安全、状态一致性、跨平台等通用难题，而非把复杂度推给提示词调优。

---

*数据来源：github.com/google-gemini/gemini-cli | 报告生成时间：2026-07-19*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-19

---

## 1. 今日速览
过去 24 小时无新版本发布，社区活跃度集中在 **Issue 反馈（共 27 条更新）**。核心矛盾聚焦于 **模型能力对标**（1M 上下文、推理输出）、**会话稳定性**（大附件卡死、Windows 恢复挂起、僵尸进程）以及 **Plan Mode 成熟度**（误拦截、退出异常、工具缺失）。高赞需求显示用户强烈期望与 Claude Code 达成功能平权，并急需可观测性（Token 用量）与会话远程接入能力。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心内容 | 关注理由 & 社区反响 |
|---|-------|----------|---------------------|
| 1 | [#2785](https://github.com/github/copilot-cli/issues/2785) **Support 1M context window for Claude Opus 4.7** | 要求提供与 Claude Code 持平的 Opus 4.7 1M 上下文模型。 | **👍 62** 最高热度。关乎核心竞争力对标，用户视为“必选模型”缺失。 |
| 2 | [#1979](https://github.com/github/copilot-cli/issues/1979) **Remote session support — attach from mobile/browser** | 希望像 Claude Code 一样支持移动端/浏览器接入运行中的 CLI 会话。 | **👍 53**。解锁“随时随地监控/介入长任务”场景，属高价值体验缺口。 |
| 3 | [#2052](https://github.com/github/copilot-cli/issues/2052) **Persistent Token/Context Usage Indicator** | 在 TUI 常驻显示上下文占用（如 `45%` 或 `52k/128k`）。 | **👍 19**。可观测性刚需，现状需通过命令查看，干扰流程。 |
| 4 | [#1477](https://github.com/github/copilot-cli/issues/1477) **"Continuing autonomously (3 premium requests)" after model completion** | Autopilot 模式下模型已完成却仍自动消耗 3 次 Premium 请求。 | **👍 18**。计费惊吓 + 行为异常，严重影响信任度，疑似回归。 |
| 5 | [#2958](https://github.com/github/copilot-cli/issues/2958) **Per-mode default model configuration (plan vs. autopilot)** | 允许按交互模式（Plan/Autopilot）单独设定默认模型。 | **👍 16**。高阶用户刚需，避免频繁手动切换模型。 |
| 6 | [#3767](https://github.com/github/copilot-cli/issues/3767) **Oversized attachment permanently wedges session** | 大附件触发 5MB 限制后会话彻底卡死，无恢复机制。 | **Critical Bug**。数据丢失风险，会话不可恢复，阻断长任务流程。 |
| 7 | [#4163](https://github.com/github/copilot-cli/issues/4163) **CLI 1.0.71 zombie processes accumulation (Linux)** | v1.0.71 子进程未回收，僵尸进程以 ~2/min 速度堆积。 | **Regression/Stability**。长时间运行导致 PID 耗尽，生产环境隐患。 |
| 8 | [#4171](https://github.com/github/copilot-cli/issues/4171) **Segfault on startup with ASLR disabled (Linux)** | 企业加固内核（`randomize_va_space=0`）下二进制启动即 SIGSEGV。 | **Compatibility Blocker**。影响合规环境用户，需底层构建修复。 |
| 9 | [#4160](https://github.com/github/copilot-cli/issues/4160) **Plan mode over-blocks read-only shell commands** | 启发式关键词匹配导致 `ls`、`grep` 等只读命令被误判为写操作而拦截。 | **Usability Blocker**。Plan Mode 核心流程受阻，误报率高。 |
| 10 | [#4172](https://github.com/github/copilot-cli/issues/4172) **Exiting plan mode unreliable with new GPT-5.6 models** | 新模型生成计划后卡在 “Plan saved…” 不再提示用户确认进入实施。 | **Regression**。模型升级暴露状态机缺陷，阻断 Plan→Autopilot 闭环。 |

---

## 4. 重要 PR 进展
> 过去 24 小时无 Pull Request 更新。

---

## 5. 功能需求趋势（从全量 Issues 提炼）

| 趋势方向 | 代表 Issues | 社区信号强度 |
|----------|-------------|--------------|
| **模型能力平权** | #2785, #1610, #1487, #3891 | ⭐⭐⭐⭐⭐ 用户以 Claude Code 为基准，要求 1M Context、Reasoning 输出、BYOK 模式下子代理模型覆盖。 |
| **会话全生命周期管理** | #1979, #3767, #3569, #4165, #4175 | ⭐⭐⭐⭐ 远程接入、崩溃恢复、语义清晰的 `/clear` vs `/new`、Windows `--resume` 可靠性、云会话预置校验。 |
| **Plan Mode / Autopilot 成熟化** | #1477, #2958, #4160, #4172, #4173, #4161 | ⭐⭐⭐⭐ 计费异常、模式专属模型配置、只读命令误拦、新模型退出卡顿、写入门控残留、工具缺失回归。 |
| **可观测性与成本控制** | #2052, #4174, #4169, #4167, #4168 | ⭐⭐⭐ Token 实时显示、ACP/非交互模式遥测补全、AI Credits 阈值灵活配置、低余额警告抑制。 |
| **平台稳定性与分发** | #4163, #4171, #4149, #4164, #4034, #1069 | ⭐⭐⭐ 僵尸进程、ASLR 兼容、Winget 安装失败、大图警告刷屏、Hook stdin EOF、Readline 快捷键缺失。 |

---

## 6. 开发者关注点总结

1.  **“落后于 Claude Code”焦虑**：1M Context、远程会话、推理流式输出被视为基准线，缺失即竞劣势。
2.  **Plan Mode 信任危机**：高频误拦截（只读命令）、状态机卡顿（GPT-5.6 退出）、工具回归（`task_complete` 消失）、计费惊吓（自动消费 Premium）叠加，导致核心高级模式“敢用不敢信”。
3.  **会话脆弱性**：大文件、Windows 恢复、云端预置失败均可导致会话不可用且无优雅降级，长任务场景风险极高。
4.  **黑盒运行成本**：缺乏 Token 实时条、ACP/Headless 遥测、Credits 灵活策略，导致企业/个人难以预算与审计。
5.  **原生体验细节债**：Readline 快捷键、Hook EOF、安装器、大文件提示噪音、多账号默认值——虽非阻断，但累积形成“粗糙感”，影响日常流畅度。

---

> **数据来源**：`github.com/github/copilot-cli` | 统计窗口：2026-07-18 00:00–23:59 UTC  
> **下一版本关注点**：v1.0.72+ 能否修复僵尸进程/ASLR 崩溃等稳定性回归，以及 Plan Mode 状态机重构进度。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-19

---

## 1. 今日速览
- **核心动态**：社区核心聚焦于 **Reasoning Level（推理强度）的交互体验优化** 与 **ACP 协议兼容性修复**。贡献者 `n-WN` 已针对高频需求 #2501 提交 PR #2509，实现 `/effort` 命令与配置化切换，响应速度极快。
- **阻断性问题**：发现权限系统中 `deny` 规则优先级逻辑与文档不符（Issue #2508），可能影响安全策略执行预期；ACP 模式下空答案处理导致模型误判用户行为（PR #2507 已修复）。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。当前最新版本为 **v0.27.0**（Issue #2508 中用户环境版本）。

---

## 3. 社区热点 Issues

| Issue | 标题 | 核心诉求/缺陷 | 重要性评估 | 社区反应 |
| :--- | :--- | :--- | :--- | :--- |
| **[#2501](https://github.com/MoonshotAI/kimi-cli/issues/2501)** | **[Feature] TUI 主界面快捷切换 Reasoning Level** | 现需进入 `/model` 二级菜单切换思考强度，打断心流；期望支持斜杠命令 `/think` 或状态栏快捷键切换。 | ⭐⭐⭐⭐⭐ **极高**<br>直接关系核心交互体验，符合 Codex/Cursor 等竞品标准交互模式。 | 👍 0 / 评论 1<br>**已有 PR #2509 响应**，官方/核心贡献者 `n-WN` 在 Issue 中确认实现方案。 |
| **[#2508](https://github.com/MoonshotAI/kimi-cli/issues/2508)** | **[Bug] Permission Rules: `deny` 覆盖 `allow` 且无视顺序，违背文档 "首匹配生效" 承诺** | v0.27.0 中权限规则引擎表现为 `deny` 绝对优先，而非文档声明的 "First matching rule takes effect"。涉及 `KIMI_MODEL_*` 环境变量认证场景。 | ⭐⭐⭐⭐ **高**<br>安全策略核心逻辑缺陷，可能导致预期放行的操作被拦截，或反之，影响企业级部署信任度。 | 👍 0 / 评论 0<br>新提交，待官方确认复现与修复排期。 |

---

## 4. 重要 PR 进展

| PR | 标题 | 类型 | 关联 Issue | 核心变更 | 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[#2509](https://github.com/MoonshotAI/kimi-cli/pull/2509)** | **feat(kimi): configurable thinking effort and `/effort` command** | ✨ Feature | #2501, #318, #2499 | 1. 新增 `/effort <level>` 斜杠命令，支持主界面直接切换；<br>2. 增加配置项持久化 `reasoning_effort`；<br>3. 复用 #2499 遗留的 `reasoning_effort` 透传逻辑。 | 🟢 **Open**<br>刚创建，代码完整度高，等待 Review/Merge。 |
| **[#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507)** | **fix(acp): signal QuestionNotSupported instead of resolving empty answers** | 🐛 Bug Fix | #2495 | 修复 ACP Server 模式下 `QuestionRequest` 被错误 resolve 为空字典 `{}` 的问题。改为发送 `QuestionNotSupported` 信号，避免模型误判为 "User dismissed"。 | 🟢 **Open**<br>修复明确，测试用例清晰，建议优先合入。 |

---

## 5. 功能需求趋势
从本期仅有的 2 个 Issue 及关联 PR 可提炼出两大明确趋势：

1.  **推理参数的 "运行时可控性" 成为刚需**
    *   用户不再满足于启动时静态指定模型参数，强烈要求在 **对话中途、不离开输入上下文** 动态调整 `Reasoning Level` / `Thinking Effort`。
    *   交互范式收敛至 **Slash Command (`/effort`, `/think`)** + **配置持久化**，对齐 VS Code / Codex 主流 IDE 插件体验。

2.  **协议层兼容性与企业级特性的补齐**
    *   ACP (Agent Client Protocol) 模式下的边缘案例修复（#2507）显示社区正在深度适配标准化 Agent 协议栈。
    *   权限系统逻辑缺陷（#2508）暴露出 **安全策略引擎** 在复杂规则组合下的验证不足，未来或将引入更完善的 Policy Engine 测试矩阵。

---

## 6. 开发者关注点与痛点

| 痛点/需求 | 来源 | 影响面 | 建议关注动作 |
| :--- | :--- | :--- | :--- |
| **交互流打断** | #2501 | 全量 TUI 用户 | **已响应**：PR #2509 实现 `/effort` 命令，建议后续补充默认快捷键绑定 (如 `Ctrl+E`)。 |
| **文档与实现不一致 (安全规则)** | #2508 | 依赖 Permission Rules 做安全合规的团队/企业 | **高风险**：需尽快发布 Hotfix 或明确文档修正版本；建议补充规则引擎单元测试覆盖 `allow/deny` 组合优先级矩阵。 |
| **ACP 协议语义准确性** | #2507 / #2495 | IDE 插件开发者、Agent 框架集成方 | **已修复**：PR #2507 修正空答案语义，建议同步更新 ACP 集成测试套件。 |
| **配置持久化一致性** | #2509 (impl) | 跨会话用户 | PR 引入配置项持久化，需确认配置文件 Schema 版本管理与迁移策略。 |

---

> **💡 分析师备注**：今日社区呈现 **"Issue 驱动 PR，PR 即时响应"** 的高效协作模式。#2501 从提出到 PR 落地仅耗时 ~2 天，体现核心维护者对核心交互体验的高优先级响应。唯一隐患在于 #2508 暴露的权限引擎逻辑偏差，属于 **静默数据损坏/安全旁路** 类风险，建议官方在下一个 Patch 版本 (v0.27.1) 中优先修复并回溯测试。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-19

---

## 1. 今日速览

OpenCode 社区今日无新版本发布，核心精力集中在 **V2 架构的稳定性攻坚** 与 **桌面端体验打磨**。最受关注的“内存问题大讨论”(#20695)持续升温（113 条评论），团队正集中收集堆快照定位泄漏源；同时，多个 V2 核心回归修复已合入（恶意工具输入恢复、相对路径授权、插件缓存刷新），桌面端深色模式对比度、本地化菜单、深度链接等体验问题亦获快速响应。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心内容 | 关注度 | 重要性判断 |
|---|-------|----------|--------|------------|
| 1 | [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | 官方发起的内存问题统一收集贴，要求社区提供堆快照协助定位泄漏 | 👍 90 · 💬 113 | **最高** — 关乎长时运行稳定性，影响所有平台用户 |
| 2 | [#6680 View archived sessions on desktop](https://github.com/anomalyco/opencode/issues/6680) | 桌面端侧边栏新增“查看已归档会话”入口 | 👍 24 · 💬 39 | **高** — 久拖不决的高频需求，已验证无重复 |
| 3 | [#30443 Infinite "Session compacted" loop](https://github.com/anomalyco/opencode/issues/30443) | Windows 桌面端 v1.15.13 陷入无限压缩循环，全新会话也复现 | 👍 0 · 💬 4 | **高** — 阻塞性 Bug，导致应用完全不可用 |
| 4 | [#37654 Revert 撤回错误回滚他会话代码](https://github.com/anomalyco/opencode/issues/37654) | 撤回聊天时误回滚不属于本次会话的代码修改，且复现率高 | 👍 1 · 💬 4 | **高** — 数据安全风险，已关闭但需验证修复 |
| 5 | [#34207 Model selection silently reverts](https://github.com/anomalyco/opencode/issues/34207) | Agent 工作时切换模型，回答问题后被静默覆盖回原模型 | 👍 2 · 💬 8 | **中高** — 多模型工作流核心体验缺陷 |
| 6 | [#37680 Zen 付费订阅仍被限流](https://github.com/anomalyco/opencode/issues/37680) | 订阅用户且有余额仍遭遇限流，持续数周且无支持渠道 | 👍 0 · 💬 2 | **中高** — 商业化信任危机，涉及计费/配额系统 |
| 7 | [#37671 V2 CLI headless 命令加载 OpenTUI 并泄漏临时文件](https://github.com/anomalyco/opencode/issues/37671) | `--version`/`--help` 等无头命令仍加载 13 MB 原生库并残留临时文件 | 👍 0 · 💬 2 | **中** — 资源泄漏，影响 CI/自动化场景 |
| 8 | [#37428 Desktop 亮度对比度过暗](https://github.com/anomalyco/opencode/issues/37428) | 新桌面客户端标题栏文字极暗，对比度远低于终端客户端 | 👍 1 · 💬 3 | **中** — 视觉可用性问题，影响新用户首印象 |
| 9 | [#35427 Session.directory 指向已移动/删除路径导致 500](https://github.com/anomalyco/opencode/issues/35427) | 会话目录被移动/删除后，POST command 返回 500 | 👍 0 · 💬 2 | **中** — 异常处理缺失，易引发数据丢失感知 |
| 10 | [#26772 Integrated browser for desktop](https://github.com/anomalyco/opencode/issues/26772) | 请求桌面端内置浏览器工作区，支持网页审查与交互 | 👍 4 · 💬 15 | **中** — 长期功能规划方向，社区持续关注 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 |
|---|----|------|----------|------|
| 1 | [#37698 fix(core): safely recover malformed tool input](https://github.com/anomalyco/opencode/pull/37698) | Bug Fix | 模型输出畸形 JSON 时，将其标记为 `tool-input-error` 并仅失败该调用，保留 Step 真实状态，支持后续修复 Step | ✅ Merged |
| 2 | [#37689 fix(core): authorize relative external paths](https://github.com/anomalyco/opencode/pull/37689) | Bug Fix | 恢复 V1 兼容行为：解析到 Location 外的相对路径改走 `external_directory` 授权而非直接拒绝 | ✅ Merged |
| 3 | [#37691 fix(simulation): render screenshot symbol glyphs](https://github.com/anomalyco/opencode/pull/37691) | Bug Fix | 修复 V2 模拟截图中 OpenCode 符号/盲文 spinner 显示为缺字框的问题 | ✅ Merged |
| 4 | [#37688 fix(core): refresh stale plugin cache](https://github.com/anomalyco/opencode/pull/37688) | Bug Fix | 修复 `@latest` 插件规格首次安装后不再更新的缓存短路问题 | 🟢 Open |
| 5 | [#35777 fix(core): refresh stale @latest npm package cache on load](https://github.com/anomalyco/opencode/pull/35777) | Bug Fix | 同类修复：`Npm.add` 跳过已存在目录导致 `@latest` 插件不再拉取新版本 | 🟢 Open |
| 6 | [#35433 fix(opencode): stop sending tools when `tool_call` is false](https://github.com/anomalyco/opencode/pull/35433) | Bug Fix | 模型配置 `tool_call: false` 现生效，不再向不支持工具调用的模型发送工具定义 | 🟢 Open |
| 7 | [#37696 feat(opencode): adaptive thinking effort for kimi family](https://github.com/anomalyco/opencode/pull/37696) | Feature | 支持 Kimi/Moonshot 的 Anthropic 兼容自适应思考协议（`thinking.type="adaptive"`） | 🟢 Open |
| 8 | [#23111 feat(opencode): display cached token count inline in TUI](https://github.com/anomalyco/opencode/pull/23111) | Feature | 侧边栏/提示栏/子 Agent footer 内联显示 `(N cached)` Token 计数 | 🟢 Open |
| 9 | [#35223 fix(app): handle desktop deep links in new layout](https://github.com/anomalyco/opencode/pull/35223) | Bug Fix | 修复重设计布局下 `opencode://` 深度链接（打开项目/新会话）失效 | 🟢 Open |
| 10 | [#8535 feat(session): bi-directional cursor-based pagination](https://github.com/anomalyco/opencode/pull/8535) | Feature | 服务端/桌面端/TUI 统一实现会话消息双向游标分页，解决长会话加载性能 | 🟢 Open |

---

## 5. 功能需求趋势洞察

| 趋势方向 | 代表 Issue/PR | 社区呼声特征 |
|----------|---------------|--------------|
| **桌面端原生体验补齐** | #6680(归档会话)、#37428(对比度)、#37642(菜单本地化)、#35223(深度链接)、#26772(内置浏览器) | 高频、具体、多为“终端客户端已有功能桌面端缺失” |
| **多模型/多提供商无缝切换** | #34207(模型回跳)、#37696(Kimi adaptive thinking)、#34794(`--model free`)、#2784(agentrouter)、#2047(LM Studio 刷新) | 涉及模型选择持久化、提供商能力探测、免费模型发现 |
| **长会话/大上下文工程化** | #20695(内存)、#8535(双向分页)、#23111(cached token 显示)、#32894(完整导出)、#30443(压缩循环) | 性能与可观测性并重，工程化需求强烈 |
| **V2 架构稳定性与兼容性** | #37671(无头命令泄漏)、#37225(default_agent 忽略)、#36482(Toggle MCPs 失效)、#37669/37698(畸形工具输入) | 回归 Bug 密集，核心路径优先修复 |
| **国际化与本地化** | #37658(占位符硬编码)、#37642(原生菜单)、#37664(导出字符损坏) | 中文社区反馈集中，i18n 基建仍有缺口 |

---

## 6. 开发者关注点与痛点总结

| 痛

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-19

> 数据来源：`github.com/earendil-works/pi` (pi-mono 仓库)  
> 统计窗口：过去 24 小时（2026-07-18 ~ 2026-07-19）

---

## 1. 今日速览

- **无新版本发布**，社区活动集中在 **Bug 修复、稳定性提升与开发者体验打磨** 上。
- 核心关注点：**流式传输终止处理**、**Compaction 重试机制**、**模型定价修正**、**大文件编辑性能**、**外部编辑器临时文件策略** 等。
- 多个高优先级 PR 已合并，涉及 OpenAI Responses 流控、共享认证文件、Scoped Model 移除、扩展上下文窗口显示修正等，**修复交付效率高**。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 关键点 | 社区热度 / 评论 | 链接 |
|---|------|------|--------|----------------|------|
| **#6725** | Copilot pricing for GPT-5.6 models is incorrect | 🟢 **OPEN** `inprogress` | OpenAI 模型在 Copilot 下未计入 `cacheWrite` 成本，导致实际账单与 Pi 显示偏差大（~$1.67 vs 实际更高） | 6 条评论，👍 0 | [#6725](https://github.com/earendil-works/pi/issues/6725) |
| **#6167** | `transformMessages` + `isSameModel === false` thinking block normalization 交互异常 | 🟢 **OPEN** | 切换模型时 thinking 内容内联导致与 `requiresReasoningContentOnAssistantMessages` 兼容标志冲突，影响推理模型切换体验 | 4 条评论 | [#6167](https://github.com/earendil-works/pi/issues/6167) |
| **#6675** | `pi update --self` 单次瞬态失败即放弃 | 🟢 **OPEN** | 自更新仅请求一次 `latest-version` API，网络抖动即报错，建议加入重试/退避 | 3 条评论 | [#6675](https://github.com/earendil-works/pi/issues/6675) |
| **#6647** | Compaction 单次瞬态流中断即失败（无重试） | 🟢 **OPEN** `inprogress` | 正常对话轮次已有重试逻辑，但 Compaction 缺失，导致长上下文压缩极不稳定 | 2 条评论 | [#6647](https://github.com/earendil-works/pi/issues/6647) |
| **#6792** | 写入/编辑 500+ 行大文件时 CPU 100% | 🔴 **CLOSED** `bug` | 提供了 CPU profile，疑似编辑器增量渲染或语法高亮回退导致，严重影响大文件编辑体验 | 3 条评论 | [#6792](https://github.com/earendil-works/pi/issues/6792) |
| **#6774** | Ctrl+G 外部编辑器启动慢（`os.tmpdir()` 拥挤） | 🔴 **CLOSED** | 建议改用 `mkdtemp` 私有子目录，避免系统临时目录文件过多导致 `readdir` 变慢 | 4 条评论 | [#6774](https://github.com/earendil-works/pi/issues/6774) |
| **#6768** | Copilot Enterprise 无法 Compaction | 🔴 **CLOSED** `bug` | 企业版 License 下 Compaction 报 `421 Misdirected Request`，阻断企业用户核心流程 | 3 条评论，👍 2 | [#6768](https://github.com/earendil-works/pi/issues/6768) |
| **#6808** | openai-responses 在 `response.completed` 后仍等待 HTTP EOF | 🔴 **CLOSED** | 观测到 4.2s 延迟，且无 `[DONE]` 帧，导致流式响应挂起，已修复合并 | 2 条评论 | [#6808](https://github.com/earendil-works/pi/issues/6808) |
| **#6814** | 新增原生 OpenRouter OAuth 支持 | 🟢 **OPEN** | 期望内置浏览器授权流，避免手动复制 API Key，降低接入门槛 | 1 条评论 | [#6814](https://github.com/earendil-works/pi/issues/6814) |
| **#6810** | 请求手动 `/retry` 命令 | 🔴 **CLOSED** | 自动重试 3 次耗尽快，弱网/移动网络下需人工触发重试，类似 Claude Code 行为 | 1 条评论 | [#6810](https://github.com/earendil-works/pi/issues/6810) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 | 关联 Issue | 链接 |
|---|------|------|----------|------------|------|
| **#6807** | `fix(ai): stop Responses streams at terminal event` | 🟣 **MERGED** | 在 `response.completed` 事件后主动关闭流，不再等待 HTTP EOF/`[DONE]`，解决 4s+ 挂起 | #6808 | [#6807](https://github.com/earendil-works/pi/pull/6807) |
| **#6813** | `feat(coding-agent): support shared auth file` | 🟢 **MERGED** | 新增 `PI_CODING_AGENT_AUTH_FILE` 环境变量，支持独立于 `~/.pi` 的凭证文件，便于 CI/多项目隔离 | — | [#6813](https://github.com/earendil-works/pi/pull/6813) |
| **#6812** | Remove `./` from pi-ai bin path so lockfiles stop flip-flopping | 🟢 **MERGED** | `package.json` 中 `bin` 字段去掉 `./` 前缀，修复 npm registry 元数据差异导致的 lockfile 反复跳变 | #6811 | [#6812](https://github.com/earendil-works/pi/pull/6812) |
| **#6775** | `retry on compaction/branch summarization retryable failures` | 🟢 **OPEN** | 为 Compaction/Branch Summarization 引入重试策略（复用 `isRetryableAssistantError`），解决瞬态中断导致全失败 | #6647 | [#6775](https://github.com/earendil-works/pi/pull/6775) |
| **#6804** | `fix(coding-agent): allow removing scoped models whose provider/model no longer resolves` | 🟢 **MERGED** | 修复 `/logout` 后残留的 Scoped Model 无法在 Selector 中移除的问题，增强配置健壮性 | #6806 | [#6804](https://github.com/earendil-works/pi/pull/6804) |
| **#6802** | `fix(coding-agent): show actual extended context size in footer indicator` | 🟢 **MERGED** | 页脚扩展上下文指示器从硬编码 `[1M]` 改为读取模型真实 `extendedContextWindow`，适配 GPT-5.4/5.5/5.6 (1.05M) | — | [#6802](https://github.com/earendil-works/pi/pull/6802) |
| **#6795** | `Add exit cmd` | 🟢 **MERGED** | 新增 `/exit` 命令，补全交互式 CLI 基础命令集 | — | [#6795](https://github.com/earendil-works/pi/pull/6795) |
| **#5262** | `feat(ai): add Anthropic Vertex provider` | 🟢 **OPEN** | 内置 `anthropic-vertex` Provider，支持 Google Cloud Vertex AI 上的 Claude，复用 Anthropic 流式/工具/思维链路径 | — | [#5262](https://github.com/earendil-works/pi/pull/5262) |
| **#1762** | `Expose session and tree browsing/editing to RPC protocol` | 🟢 **MERGED** | RPC 协议补全会话发现与树形导航能力，赋能外部工具/IDE 深度集成 | — | [#1762](https://github.com/earendil-works/pi/pull/1762) |
| **#6800** | (隐含在 #6800 Issue) `pi update --extensions` 对 git 扩展误报“Updated” | 🔴 **CLOSED** | 修复 git 扩展无更新时仍打印“Updating…/Updated packages”的噪音输出 | #6800 | [#6800](https://github.com/earendil-works/pi/issues/6800) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue/PR | 核心诉求 |
|----------|-----------------|----------|
| **流式传输鲁棒性** | #6808, #6807, #6647, #6775 | 终止事件处理、超时/重试、EOF 等待优化，保障长流式任务稳定 |
| **Compaction/上下文压缩可靠性** | #6647, #6768, #6775 | 重试机制、企业版兼容、分支摘要容错，解决“大上下文不可压缩”痛点 |
| **模型生态扩展与计费透明** | #6725, #5262, #6814 | GPT-5.6 定价修正、Vertex AI 原生支持、OpenRouter OAuth，覆盖更多供应商并修正成本显示 |
| **大文件/高负载性能** | #6792, #6794, #6793 | 启动加速（模型目录刷新）、SessionManager 双读优化、编辑器大文件 CPU 占用 |
| **开发者体验细节打磨** | #6774, #6812, #6800, #6795, #6810 | 临时文件策略、lockfile 稳定、扩展更新噪音、基础 CLI 命令、手动重试 |
| **RPC/协议开放能力** | #1762 | 会话树浏览/编辑暴露至 RPC，为 IDE 插件、外部工具铺路 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“一次网络抖动就全盘皆错”**  
   - 自更新、Compaction、流式响应均缺乏统一重试/退避策略，开发者强烈要求**统一的瞬态错误分类与重试框架**（`isRetryableAssistantError` 已存在但未全面复用）。

2. **“模型切换/兼容层频繁踩坑”**  
   - Thinking block 归一化、Reasoning content 标志、工具调用 ID 重复（DeepSeek 切换）等跨模型兼容问题高发，呼吁**更完善的模型适配测试矩阵与迁移文档**。

3. **“企业级功能缺失阻碍落地”**  
   - Copilot Enterprise Compaction 失败、共享认证文件需求（CI/多环境）、OpenRouter OAuth 等，**企业级 SSO/审计/代理支持** 成为隐性门槛。

4. **“大文件/长会话下编辑器卡顿”**  
   - 500+ 行 Markdown 触发 100% CPU、启动时模型目录全量刷新阻塞主线程，**增量渲染、后台预加载、虚拟滚动** 优化呼声高。

5. **“配置与状态管理的易用性”**  
   - Scoped Model 残留无法移除、Provider 禁用/隐藏缺失、lockfile 反复跳变、扩展更新误报，**配置一致性与可观测性** 需系统性治理。

6. **“可脚本化/可嵌入能力”**  
   - RPC 补全会话树操作、手动 `/retry`、`/exit`、外部编辑器集成，**将 Pi 视为可编程 Agent Runtime 而非仅 CLI** 的架构演进趋势明显。

---

> **下一关注点**：`#6775` Compaction 重试 PR 审查进度、`#6725` Copilot 定价修复验证、`#5262` Vertex Provider 合并窗口、大文件性能优化后续 PR。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-19

---

## 1. 今日速览

- **三个版本同步发布**：v0.19.12 正式版、v0.19.12-preview.0 预览版、v0.19.12-nightly 夜ly 构建同步推出，核心聚焦 **Daemon 冷启动追踪**、**多工作区所有权守卫加固** 与 **VS Code 扩展三方声明同步**。
- **P1 级阻塞性 Bug 修复进行中**：Subagent 导致主会话模型静默切换引发上下文溢出（#7156）、并发会话写入导致转录历史分叉（#7164）均已开 PR 修复（#7166、#7172）。
- **MCP 生态兼容性与工具链稳健性并进**：工具名规范化（#6976）、Gemma 4 原生工具调用适配（#7177）、终端 resize 监听器泄漏修复（#7186）等 20+ PR 合入，显著提升跨提供商与长时运行稳定性。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 | 链接 |
|------|------|----------|------|
| **v0.19.12** | 稳定版 | • `feat(daemon)`: 首会话冷启动追踪（#6907）<br>• `fix(serve)`: 多工作区所有权守卫加固<br>• 无破坏性变更 | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12) |
| **v0.19.12-preview.0** | 预览版 | 同 v0.19.12 核心特性，供提前验证 | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12-preview.0) |
| **v0.19.12-nightly.20260719** | 夜ly 版 | • `chore(vscode-ide-companion)`: 同步三方声明防漂移（#7161）<br>• 包含 CLI 其它增量修复 | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12-nightly.20260719.86ad532de) |

> **建议**：生产环境升级 v0.19.12；插件开发者关注 nightly 中的 VS Code 扩展声明同步变更。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态/优先级 | 关注理由 | 社区反应 |
|---|------|-------------|----------|----------|
| [#7156](https://github.com/QwenLM/qwen-code/issues/7156) | **Subagent 导致主会话模型静默切换 → 上下文溢出复发** | OPEN / P1 | #7119 修复后同类问题通过**不同代码路径**复发，直接阻塞多智能体工作流 | 9 条评论，核心维护者 doudouOUC 已提修复 PR #7166 |
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) | **Daemon 冷启动与 qwen serve 快速路径延迟优化** | OPEN / P1 | 长期性能痛点：早期 Daemon 首会话 2.5s vs CLI 0.7s，监听/健康路径已优化，现攻坚首会话 | 9 条评论，v0.19.12 已引入追踪能力（#6907） |
| [#7164](https://github.com/QwenLM/qwen-code/issues/7164) | **并发会话写入导致转录历史分叉、响应丢失** | OPEN / P1 | 两进程恢复同一会话并追加 JSONL，产生分叉父链，重启时仅恢复单链 → 数据不一致 | 1 条评论，doudouOUC 提交单写者租约 PR #7166 |
| [#7181](https://github.com/QwenLM/qwen-code/issues/7181) | **/goal 循环阻塞用户输入：无法清除/替换/中断活跃目标** | OPEN / P1 | 交互层严重体验缺陷：目标运行时所有输入排队，仅能 Ctrl+C 强退 | 1 条评论，标记 `status/ready-for-agent` 等待自动修复 |
| [#7159](https://github.com/QwenLM/qwen-code/issues/7159) | **EventEmitter 内存泄漏：11 个 resize 监听器超限** | OPEN / P2 | Node.js 运行一段时间后崩溃，`MaxListenersExceededWarning` 直接指向终端尺寸监听未清理 | 3 条评论，PR #7186 已合入修复（共享单监听器） |
| [#7147](https://github.com/QwenLM/qwen-code/issues/7147) | **MCP 服务器永远无法获取工具/资源列表（超时）** | OPEN / P2 | Fastmail 等标准 MCP 在其它客户端正常，Qwen Code 认证通过但列表超时，疑为握手/协议不兼容 | 3 条评论，需复现排查传输层 |
| [#6970](https://github.com/QwenLM/qwen-code/issues/6970) | **MCP 工具名含点号被 OpenAI/Anthropic 兼容层拒绝** | CLOSED | Gemini 宽松，严格提供商拒绝 `mcp__zybio__literature.search_pubmed` 等名，阻断多模型切换 | 2 条评论，PR #6976 规范化工具名已合入 |
| [#7148](https://github.com/QwenLM/qwen-code/issues/7148) | **Gemma 4 模型因系统提示通用 tool_call 示例停止执行** | CLOSED | 通用 `[tool_call:...]` few-shot 覆盖了 Gemma 4 原生 `<|tool_call>` 训练，导致小模型幻觉 XML 标签 | 1 条评论，PR #7177 切换原生 schema 已合入 |
| [#6824](https://github.com/QwenLM/qwen-code/issues/6824) | **会话历史关键词搜索（CLI + VS Code）** | OPEN / P2 | 长期高频需求：大量历史会话无检索入口，严重影响复用效率 | 3 条评论，社区呼声高，暂无实现 PR |
| [#7178](https://github.com/QwenLM/qwen-code/issues/7178) | **Daemon SDK 增加工作区级会话 JSONL 导入** | OPEN / P3 | SDK 现可列表/恢复/归档/导出，唯独缺**导入**，阻断会话迁移与备份恢复自动化 | 2 条评论，属于 SDK 完善路线图 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心内容 | 影响面 |
|---|------|------|----------|--------|
| [#7166](https://github.com/QwenLM/qwen-code/pull/7166) | **fix(core): 强制单写者会话持久化** | OPEN | 进程级租约锁定 `(runtimeBase, sessionId)`，重载转录仅在获取租约后，追加带所有者 token 与字节长度双重栅栏 | 解决 #7164 数据分叉，核心可靠性 |
| [#7172](https://github.com/QwenLM/qwen-code/pull/7172) | **feat(core): Plan 模式 Shell 命令按安全性路由** | OPEN | 将只读/可信扩展命令放行，其余走确认；修复 ACP 计划模式误拦截只读命令及绕过退出确认 | 交互安全与体验平衡（#6949） |
| [#7177](https://github.com/QwenLM/qwen-code/pull/7177) | **fix(core): Gemma 4 应用原生工具调用 schema** | CLOSED | 移除通用 `[tool_call]` few-shot，改用模型原生 `<|tool_call>`，修复 E4B/12B 等小模型执行停滞 | 多模型兼容性关键修复（#7148） |
| [#6976](https://github.com/QwenLM/qwen-code/pull/6976) | **fix(mcp): 规

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-19

---

## 1. 今日速览
今日无新版本发布，但核心维护者 **Hmbown** 推进了大规模代码重构与 v0.9.1 版本准备工作，单日合并/关闭 **15+ 个 PR**，涵盖 **工作流图核心模型**、**Kimi K3 路由修复**、**xAI 认证与工具 Schema 修复**、**TUI 性能优化** 及 **文档公开版本对齐**。社区高热度 Issue 聚焦于 **Agent 遵循指令问题**、**多模型提供商支持** 与 **跨平台文件系统兼容性**。

---

## 2. 版本发布
> 过去 24 小时无新 Release。当前主线聚焦 v0.9.1 预发布稳定化，预计近期切版。

---

## 3. 社区热点 Issues（精选 Top 10）

| # | Issue | 核心诉求 | 热度/进展 | 关键点 |
|---|-------|----------|-----------|--------|
| [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | **Codewhale 不遵循 Constitution，持续编写临时脚本** | 🐛 Bug / v0.9.3 | **39 评论** ⬆️ 高 | 核心 Agent 行为偏离用户提供的脚本规范，反映**系统提示词/指令遵循**可靠性问题，社区高度关注。 |
| [#3192](https://github.com/Hmbown/CodeWhale/issues/3192) | **接入 agentclientprotocol/registry 以支持 Zed 等编辑器** | ✨ Enhancement | **13 评论** | 推动标准化协议接入，**IDE 生态互通**关键路径。 |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | **执行策略：增加类型化持久权限规则** | ✨ Enhancement / Security | **12 评论** | 安全与自动化平衡的核心需求，支持按工具/命令/路径精细授权。 |
| [#1481](https://github.com/Hmbown/CodeWhale/issues/1481) | **支持 OpenCode Go/Zen（提供 DeepSeek-V4）** | ✨ Enhancement | **10 评论, 1 👍** | 社区呼声高的**低成本新模型接入**需求。 |
| [#4410](https://github.com/Hmbown/CodeWhale/issues/4410) | **恢复 xAI 设备码 OAuth 登录并暴露端点错误** | 🐛 Release Blocker | **6 评论** | **v0.9.1 发布阻断项**，硬编码路径导致 xAI 登录失效，已有 PR 修复中。 |
| [#4085](https://github.com/Hmbown/CodeWhale/issues/4085) | **macOS File Provider (Dropbox/iCloud) 下无法读写文件** | 🐛 Reliability | **3 评论** | 非沙箱问题，涉及 **原生文件系统 API 兼容性**，影响云盘用户。 |
| [#1675](https://github.com/Hmbown/CodeWhale/issues/1675) | **Agent 实时输出中文乱码** | ❓ Question / Bug | **4 评论** | 终端编码/渲染层问题，影响中文用户核心体验。 |
| [#998](https://github.com/Hmbown/CodeWhale/issues/998) | **文案展示不全，建议鼠标悬停提示** | ✨ UX | **8 评论, 1 👍** | TUI 信息密度与可读性平衡的典型诉求。 |
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | **定义 CLI/TUI 在 Subagent 与运行时控制面的对等性** | 📄 Docs / Enhancement | **4 评论** | 架构层面：避免控制面被锁死在 TUI，为云/远程扩展预留接口。 |
| [#3480](https://github.com/Hmbown/CodeWhale/issues/3480) | **EPIC: TUI 信息架构与视觉 UX 大改版** | ✨ UX / EPIC | **3 评论** | 多 Agent 并发下原始状态堆砌，需**决策导向型 UI**重构。 |

---

## 4. 重要 PR 进展（精选 Top 10）

| # | PR | 类型 | 状态 | 核心变更 |
|---|----|------|------|----------|
| [#4553](https://github.com/Hmbown/CodeWhale/pull/4553) | `feat(work-graph): core model, reducer, validation` | 🏗️ Core Arch | **Closed (Merged)** | **工作流图核心模型落地**：单会话权威工作台账，纯 Reducer + 不变量校验，为后续持久化/集成铺路。 |
| [#4555](https://github.com/Hmbown/CodeWhale/pull/4555) | `feat(kimi-code): exact K3 route truth and reasoning-effort canonicalization` | 🔧 Provider | **Closed** | **Kimi K3 路由修正**：严格 reasoning-effort 别名表，修复模型路由不准问题。 |
| [#4556](https://github.com/Hmbown/CodeWhale/pull/4556) | `feat(kimi-code): context-window provenance surfaces` | 🔧 Provider | **Closed** | 上下文窗口来源溯源（配置/提供商/模型默认），暴露于 `/context` 与 doctor。 |
| [#4557](https://github.com/Hmbown/CodeWhale/pull/4557) | `feat(kimi-code): membership-plan onboarding and key recovery` | ✨ UX / Provider | **Closed** | Kimi 会员计划引导与密钥恢复 UX，统一 ProviderPickerView。 |
| [#4546](https://github.com/Hmbown/CodeWhale/pull/4546) | `fix(xai): flatten root oneOf tool schemas rejected with 400` | 🐛 Release Blocker | **Closed** | **xAI 工具 Schema 扁平化**：修复 `oneOf` 根节点导致的 400 错误，解除实战阻断。 |
| [#4554](https://github.com/Hmbown/CodeWhale/pull/4554) | `fix(config): stop root DeepSeek default leaking onto vendor-locked routes` | 🐛 Critical | **Closed** | **配置泄漏修复**：xAI 会话错误默认 `deepseek-v4-pro`，根因 `Config::default_model()` 回退逻辑缺陷。 |
| [#4550](https://github.com/Hmbown/CodeWhale/pull/4550) | `perf(tui): memoize merged provider catalog snapshot for model picker` | ⚡ Perf | **Closed** | **模型选择器 3.1s → 极快**：目录合并快照化，`Arc<CatalogSnapshot>` 缓存。 |
| [#4558](https://github.com/Hmbown/CodeWhale/pull/4558) | `feat(persistence): per-session crash checkpoints with flush reporting` | 🛡️ Reliability | **Closed** | **崩溃检查点会话级持久化**：单槽位→会话级文件，写入结果上报不再丢弃。 |
| [#4544](https://github.com/Hmbown/CodeWhale/pull/4544) | `fix(doctor): keep diagnostic commands read-only end to end` | 🔒 Security | **Closed** | `doctor`/`setup --status` 全链路只读，引入 `ReadOnlyFileKeyringStore`。 |
| [#4540](https://github.com/Hmbown/CodeWhale/pull/4540) / [#4545](https://github.com/Hmbown/CodeWhale/pull/4545) | `0.9.1 public surface PR1/2: honesty + cleanup / Strunk voice + version truth` | 📄 Docs / Release | **Closed** | **v0.9.1 公开面清理**：移除未发布托管入口，文案规范化，版本号对齐 npm/站点。 |

> **趋势**：今日 PR 极度集中于 **v0.9.1 发布阻断项清理**（xAI/Kimi/配置/性能/持久化）与 **核心架构重构落地**（Work Graph / 模块拆分）。

---

## 5. 功能需求趋势（从 Issue 全量提炼）

1.  **多模型/多提供商原生支持**  
    - OpenCode/Zen (#1481)、OpenRouter、Ollama/SGLang/vLLM 离线路径 (#3927)、Kimi K3 修复 (PRs)、xAI 设备码 (#4410)。
    - **核心诉求**：统一运行时下“任意模型、零锁定”，Provider 抽象层需持续完善。

2.  **Agent 编排与 Workflow 运行时**  
    - Work Graph 核心模型落地 (#4553)、模型侧 `workflow` 工具接线 (#2974)、Subagent 取消/状态面板 (#3480, #2889)。
    - **趋势**：从“单轮对话”向**有向无环图（DAG）任务编排**演进，需可视化与可控性并重。

3.  **安全与权限粒度化**  
    - 类型化持久规则 (#1186)、`doctor` 只读化 (#4544)、执行策略 `allow/deny/ask`。
    - **方向**：企业级落地必备，**最小权限原则**下的自动化平衡。

4.  **跨平台原生体验**  
    - Windows Terminal 默认启动 (#1854)、macOS File Provider 兼容 (#4085)、Shell 自适应 (PowerShell/cmd #1754)。
    - **痛点**：终端渲染、文件系统、Shell 差异导致的“开箱即用”断层。

5.  **TUI 信息架构与 UX 现代化**  
    - 侧边栏结构化 (#2889)、历史渲染模块化 (#3308)、God Object 拆分 (#3314, #3313, #3310)、视觉大改版 (#3480)。
    - **目标**：高并发 Agent 场景下的**可决策性 UI**，而非原始日志堆砌。

6.  **国际化与文档对齐**  
    - 站点多语言补齐 (JP/VI/KR/ES/PT #3091, #3093)、README 与站点版本一致性 (#4540/4545)。
    - **信号**：项目走向全球化分发，文档工程化同步推进。

---

## 6. 开发者关注点与痛点总结

| 维度 | 高频反馈 | 代表 Issue/PR |
|------|----------|---------------|
| **Agent 可靠性** | 不遵循 Constitution/系统提示词，擅自写临时脚本，子 Agent 超时卡死 | [#4032](https://github.com/Hmbown/CodeWhale/issues/4032), [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) |
| **模型接入成本与选择** | 急需低成本 DeepSeek-V4 通道，Kimi/xAI 官方路由频繁变更导致失效 | [#1481](https://github.com/Hmbown/CodeWhale/issues/1481), [#4410](https://github.com/Hmbown/CodeWhale/issues/4410), [#4554](https://github.com/Hmbown/CodeWhale/pull/4554) |
| **终端渲染与编码** | 中文乱码、白底遮挡文本、Windows 默认 cmd 体验差 | [#1675](https://github.com/Hmbown/CodeWhale/issues/1675), [#1564](https://github.com/Hmbown/CodeWhale/issues/1564), [#1854](https://github.com/Hmbown/CodeWhale/issues/1854) |
| **文件系统边缘场景** | macOS File Provider (Dropbox/iCloud) 不可用、云盘路径识别失败 | [#4085](https://github.com/Hmbown/CodeWhale/issues/4085) |
| **可观测性与调试** | `/model` 打开慢 3s+、执行结果预览难用、缺乏内置帮助工具 | [#4550](https://github.com/Hmbown/CodeWhale/pull/4550), [#1682](https://github.com/Hmbown/CodeWhale/issues/1682), [#1708](https://github.com/Hmbown/CodeWhale/issues/1708) |
| **架构技术债** | `App` 252 字段/4450 行、`RuntimeThreadManager` 7133 行、`mcp.rs` 3189 行 —— 模块化拆分迫在眉睫 | [#3314](https://github.com/Hmbown/CodeWhale/issues/3314), [#3313](https://github.com/Hmbown/CodeWhale/issues/3313), [#3310](https://github.com/Hmbown/CodeWhale/issues/3310) |
| **生态互通** | 期望接入 ACP Registry 被 Zed 等编辑器原生发现、VSIX 市场混淆维权 | [#3192](https://github.com/Hmbown/CodeWhale/issues/3192), [#2327](https://github.com/Hmbown/CodeWhale/issues/2327) |

---

## 📌 明日关注建议
1.  **v0.9.1 Release Candidate** 是否切版：xAI/Kimi 阻断项已修，Work Graph 核心入主线，持久化会话级检查点就绪。
2.  **Work Graph 集成 PR** 后续：纯模型→引擎/应用层调用链打通。
3.  **中文乱码/终端渲染** 根因定位：编码检测、Ratatui 版本、字体回退链路。
4.  **ACP Registry 接入** 进展：Zed 生态入口的战略价值高。

---

*数据来源：GitHub `Hmbown/CodeWhale` (原 `Hmbown/DeepSeek-TUI`) | 统计窗口：2026-07-18 至 2026

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*