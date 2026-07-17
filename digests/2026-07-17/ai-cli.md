# AI CLI 工具社区动态日报 2026-07-17

> 生成时间: 2026-07-17 02:04 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告｜2026-07-17

---

## 1. 生态全景

当前 AI CLI 工具生态呈现 **"头部厂商主导 + 专业化分化 + 基建补课并行"** 的态势。Anthropic (Claude Code) 与 OpenAI (Codex) 双巨头在企业级特性、多会话编排、Token 成本管控上展开军备竞赛；Google (Gemini CLI) 与 Qwen (Qwen Code) 聚焦 Agent 架构稳定性、多工作区守护进程、Web Shell 体验等底层工程化；GitHub Copilot CLI 与 OpenCode 在 IDE 集成、ACP 协议落地、付费模型可靠性上攻坚；新兴玩家 Kimi Code、Pi 则以高频发布节奏补齐 Windows 兼容、推理交互、扩展热重载等长尾体验。**全行业共识已从"能跑通"转向"可观测、可治理、可扩展、跨平台一致"的生产级标准。**

---

## 2. 各工具活跃度对比

| 工具 | 仓库 | 今日 Release | 新增/活跃 Issues (摘要覆盖) | 重要 PR (摘要覆盖) | 核心关键词 |
|------|------|--------------|----------------------------|---------------------|------------|
| **Claude Code** | anthropics/claude-code | v2.1.212 (稳定) | **10 条高热**（👍 0-185，评论 1-60） | 5 条 (含 2 Closed) | `/fork`重构、TUI回归、MCP拦截、内存泄漏、企业网络 |
| **OpenAI Codex** | openai/codex | 1稳定 + 3 Alpha | **10 条高热**（评论 8-19，👍 0-48） | **14 条** (全部 Merged/Closed) | Windows沙箱性能、Bedrock集成、Git泄漏、Defender冲突 |
| **Gemini CLI** | google-gemini/gemini-cli | 1稳定 + 1 Preview | **10 条高热**（P1占60%，👍 0-8） | **10 条** (含 3 安全热修复) | Subagent挂起、Seatbelt逃逸、变量注入、Caretaker自动化 |
| **GitHub Copilot CLI** | github/copilot-cli | v1.0.72-0 | **10 条高热**（多为阻塞性，👍 0-5） | **0 条** (过去24h无更新) | 5MB会话硬限制、BYOK认证回归、语音ASR失效、Windows体验 |
| **Qwen Code** | QwenLM/qwen-code | v0.19.11 (稳定+Nightly) | **10 条高热**（设计类RFC多，评论 1-25） | **10 条** (并行推进UI/架构/安全) | 多工作区守护进程、VS Code ACP连接、路径显示统一、自动记忆 |
| **OpenCode** | anomalyco/opencode | v1.18.3 | **10 条高热**（👍 3-89，评论 3-110） | **10 条** (含性能优化、安全收敛) | 付费模型失效、内存泄漏总贴、插件市场、RTL、CLI粘贴 |
| **Kimi Code** | MoonshotAI/kimi-cli | v1.49.0 / kosong v0.55.0 | **4 条全量**（含P0安装崩溃、TPD异常） | **4 条** (含Telemetry对齐、Monitor工具) | PS5.1安装崩溃、TPD计算异常、Reasoning Level快捷切换 |
| **Pi** | badlogic/pi-mono (earendil-works/pi) | **v0.80.8/9/10 三连发** | **10 条高热**（多为安全/架构/扩展回归） | **10 条** (含SQLite存储、xAI OAuth、Markdown API) | 模型运行时统一、Kimi K3思维链、扩展热重载、序列化启动 |
| **DeepSeek TUI** | Hmbown/DeepSeek-TUI | ⚠️ 摘要生成失败 | - | - | - |

> **数据说明**：Issues/PR 数为日报摘要精选数量，非全量统计。Claude Code、Codex、Gemini CLI、Copilot CLI、Qwen Code、OpenCode 均维持在 10 条精选阈值，显示社区高频活跃；Kimi Code 社区规模较小但阻塞性 Issue 比例高；Pi 以 **日更 3 版本** 的极端节奏领跑迭代速度。

---

## 3. 共同关注的功能方向

| 方向 | 关注工具 (≥3家) | 具体诉求差异化 |
|------|----------------|----------------|
| **多会话/后台 Agent 编排与观测** | **Claude Code** (`/fork`重构、Dashboard #77531)、**Codex** (Step world state #33665、并行 write_stdin #33645)、**Qwen Code** (多工作区守护进程 RFC #6378)、**OpenCode** (Composer 提示词队列 #37381) | 从"单会话"向"会话集群"演进，核心痛点：状态同步、资源隔离、跨会话上下文共享、成本归因 |
| **企业级网络/策略/合规管控** | **Claude Code** (Cowork允许列表 #30112、MDM 32/64位 #78049)、**Codex** (Bedrock自定义传输 #33695、成本归因 #27613)、**Gemini CLI** (Seatbelt逃逸 #28423、CI供应链RCE #28232)、**Qwen Code** (配对/白名单隔离 #7065) | 网络出站白名单、设备管理分发、审计日志、沙箱逃逸防护、供应链完整性 — **采纳门槛的硬指标** |
| **Token 成本可视化与熔断** | **Claude Code** (浏览器自动化隐形消耗 #77360、code-review 1.1M tokens #77943)、**Codex** (自动压缩回退 #31529、周限额异常 #33685)、**Gemini CLI** (Auto Memory无限重试 #26522、递归轮次上限 #28164) | 从事后账单向**实时预警、策略熔断、分模型/分任务归因**转变 |
| **Windows / WSL 原生体验** | **Claude Code** (原生WSL Remote #49933、Desktop深链接/崩溃 #78335/336)、**Codex** (沙箱延迟 #23198/32314、WSL2启动失败 #25799、Defender冲突 #30527)、**Copilot CLI** (安装Access Denied #4151、Winget依赖 #4152)、**Kimi Code** (PS5.1安装崩溃 #2504) | **Windows 仍是最大短板**：沙箱性能、终端渲染、包管理、权限模型、杀毒软件共存 |
| **IDE 深度集成可配置化** | **Claude Code** (VS Code禁用自动附件 #24726、185👍)、**Codex** (统一桌面应用缺失Chat Projects #32593)、**Qwen Code** (VS Code ACP进程退出 #7051/7056)、**Copilot CLI** (继承VS Code MCP #4143) | 开发者要求**编辑器侧边栏手动控制上下文注入**，拒绝"黑盒自动附件" |
| **插件/扩展生态工程化** | **Claude Code** (Hook验证器包装格式 #27204、skipLFS #77977、Worktree历史碎片 #58646)、**OpenCode** (统一市场 #28696、23👍)、**Gemini CLI** (Extension Checkout引用消歧 #28422)、**Pi** (扩展加载失败 #6743、热重载 #6552) | 版本管理、依赖解析、签名验证、热重载、市场分发 — **生态护城河的基建** |
| **数据安全与确认机制** | **Claude Code** (静默覆盖文件 #78273、Worktree误删 #75490)、**Gemini CLI** (Bash变量注入绕过 #28403、临时脚本污染 #23571)、**OpenCode** (WebFetch always-allow限域 #37410)、**Qwen Code** (配对隔离安全修复 #7065) | **写入前 Diff 确认、沙箱最小权限、临时文件 0600、跨工作区隔离** — 信任红线 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 差异化护城河 |
|------|----------|--------------|--------------|--------------|
| **Claude Code** | **企业级生产力标杆** | TypeScript/Node.js 单体，重 TUI、重 Hook、重 `/command` 协议 | 专业开发团队、CTO/Tech Lead、企业采购决策者 | Anthropic 模型原生集成、最完善的多会话编排 (`/fork`/`/subtask`)、企业合规清单最全 |
| **OpenAI Codex** | **云原生沙箱代理** | Rust 核心 + TypeScript 前端，沙箱优先、ACP 协议原生、远程执行架构 | 依赖云沙箱的分布式团队、重度 Codex Cloud 用户、Bedrock 企业客户 | 沙箱隔离性最强、远程协作架构最成熟、模型无关性设计 (支持 Bedrock/自定义 base_url) |
| **Gemini CLI** | **Agent 架构实验场** | Go 核心 + TypeScript，重 Subagent 编排、Seatbelt 沙箱、Caretaker 自动化运维 | Google Cloud 客户、Agent 研发者、追求前沿架构的团队 | Subagent 理论最深、安全加固最激进 (Seatbelt deny-default)、评测基建最系统化 (76用例×6模型) |
| **GitHub Copilot CLI** | **GitHub 生态粘合剂** | TypeScript，深度绑定 GitHub 身份/仓库/Action、ACP 协议推动者 | GitHub 重度用户、Copilot 订阅者、Enterprise Cloud/GHE 客户 | GitHub 身份体系零配置、PR/Issue/Action 原生交互、企业合规继承平台能力 |
| **Qwen Code** | **多工作区 Web IDE 伴侣** | Rust/TypeScript 双端，守护进程架构、Web Shell 优先、ACP 服务端模式 | 阿里云/通义模型用户、多仓库单体开发者、Web IDE 集成方 | 单守护进程管多工作区架构创新、Web Shell 体验对齐桌面端、中文/亚洲语言渲染优化 |
| **OpenCode** | **可扩展性优先的开放平台** | TypeScript 插件化内核、技能/连接器/智能体三层生态、付费模型市场 | 插件开发者、多模型混合编排用户、追求自定义工作流的高级用户 | 插件/技能/连接器统一市场设计 (#28696)、多 Provider Profile 原生支持、Composer 编排引擎 |
| **Kimi Code** | **推理交互体验极致派** | Rust (kosong) 核心，Telemetry 标准化、Monitor 流式工具、Reasoning Level 可视化 | Kimi/Moonshot 模型忠实用户、长推理任务用户、Windows 开发者 | Thinking Effort 一键切换 UX (#2501)、空 reasoning_content 保留 (#2498)、Windows 安装链路修复优先 |
| **Pi** | **提供商无关的运行时中立层** | Rust，ModelRuntime 统一抽象、动态工具加载、扩展热重载、SQLite 会话存储 | 多模型切换高频用户、扩展开发者、追求极简依赖的极客 | 提供商自治登录、原生 Kimi K3 思维链兼容、日更级迭代节奏、Markdown Transformer 扩展 API |

---

## 5. 社区热度与成熟度判断

| 梯队 | 工具 | 判断依据 | 阶段特征 |
|------|------|----------|----------|
| **第一梯队：头部成熟期** | **Claude Code、OpenAI Codex** | Issue/PR 量大、企业级阻塞性 Issue 多、版本回归与新特性并存、商业化诉求明确 (Team/Max 计划) | **规模化生产阶段**：核心功能稳定，痛点聚焦于**跨平台一致性、发布质量管控、成本治理、合规审计** |
| **第二梯队：架构重构期** | **Gemini CLI、Qwen Code、GitHub Copilot CLI** | 引入重量级架构变更 (Subagent/守护进程/ACP)、安全事件高频 (Seatbelt/RCE/认证回归)、IDE 集成阻塞性 Bug 多 | **底座升级阶段**：在"能用"向"好用/稳用"跨越，核心风险是**重构期回归、协议落地不全、跨端

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-17）

---

## 1. 热门 Skills 排行（高关注度 PR）

| # | Skill / PR | 核心功能 | 社区讨论焦点 | 状态 |
|---|---|---|---|---|
| **#1298** | **skill-creator: 修复 run_eval.py 召回率恒为 0%** | 修复技能评估循环完全失效的核心缺陷（Windows 管道读取、触发检测、并行工作进程） | **最热 PR**；关联 Issue #556、#1169、#1323，多位贡献者独立复现，阻断技能描述自动优化流程 | 🟢 Open |
| **#556 (Issue)** | **run_eval.py 技能触发率 0% 根因追踪** | `claude -p` 从不调用 Skill/Read 工具，导致所有评估查询均判定为未触发 | 12 条评论、7 👍；直接指向评估基础设施不可用，是社区最痛点 | 🟢 Open |
| **#1367** | **self-audit：机械验证 + 四维推理质量门控** | 交付前自审技能：文件存在性机械校验 → 四维推理审计（严重度优先），通用于任意技术栈 | 新近高活跃 PR（6/28 创建），体现社区对“输出质量兜底”的强需求 | 🟢 Open |
| **#83** | **skill-quality-analyzer / skill-security-analyzer** | 两大元技能：从结构、文档、测试、安全、维护性五维度评分技能质量 | 早期高讨论度 PR，奠定“技能审计技能”元生态雏形 | 🟢 Open |
| **#723** | **testing-patterns：全栈测试模式指南** | 覆盖 Testing Trophy、AAA 模式、React Testing Library、契约测试、E2E、性能/负载/混沌工程 | 回复跨度长（3/22–4/21），反映社区对“标准化测试实践”技能的持续关注 | 🟢 Open |
| **#514** | **document-typography：AI 生成文档排版质量控制** | 修正孤行/寡行、标题分页、编号错位等排版通病，提升输出文档专业度 | 解决“AI 生成文档排版差”通用痛点，实用性强 | 🟢 Open |
| **#1302** | **color-expert：色彩专家知识库** | 色彩命名系统、色彩空间选型表、无障碍对比度、品牌色系提取、配色方案生成 | 专业垂直领域技能，讨论集中于实用性与触发条件设计 | 🟢 Open |
| **#525** | **pyxel：复古像素游戏开发 (Pyxel MCP)** | 集成 pyxel-mcp，支持写→运行捕获→检查→迭代的复古游戏开发工作流 | 作者 kitao 为 Pyxel 原作者，长周期维护（3/5–7/15），展示 MCP+Skill 深度结合范例 | 🟢 Open |
| **#1099 / #1061 / #1050 / #362 / #361** | **Windows 兼容性修复系列** | 修复 `claude.cmd` PATHEXT、cp1252 编码、管道 select、UTF-8 多字节截断、YAML 特殊字符预检 | **集中爆发** 5 个 PR + 2 个 Issue，Windows 开发者可用性为核心诉求 | 🟢 Open |

> **注**：所有列表 PR 均为 Open 状态，尚未合入主分支；社区讨论热度由 Issue 评论数、PR 更新频度、关联引用综合判断。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求象限 | 代表 Issue | 核心诉求 | 热度指标 |
|---|---|---|---|
| **🔴 基础设施稳定性（最高优先级）** | #556, #1169, #1323, #1298 | **技能评估循环完全失效**；Windows 下 `skill-creator` 不可用；UTF-8/YAML 解析崩溃 | 3 个 Issue 合计 18+ 评论，多 PR 并行修复 |
| **🔐 安全与信任边界** | #492 (34 评论), #1175 | 社区技能冒用 `anthropic/` 命名空间伪装官方技能；SharePoint 权限逻辑写入 SKILL.md 的风险 | #492 为全仓库评论最多 Issue，安全治理成焦点 |
| **📦 分发与协作体验** | #228 (14 评论, 7 👍), #16, #29 | 组织级技能库/一键分享；技能暴露为 MCP 协议；AWS Bedrock 兼容 | 企业级落地刚需，跨平台互操作呼声高 |
| **🧠 元技能与质量保障** | #1367, #1385, #83, #202 | 自审/互审技能管线（预校准→对抗审查→交付验证）；`skill-creator` 重写为可执行指令而非文档 | 从“写技能”转向“管技能”，质量门控体系化 |
| **🎨 专业垂直领域技能** | #514, #1302, #486, #181, #525 | 排版、色彩、ODT/PDF/DOCX 文档工程、SAP 表格基座、复古游戏开发 | 长尾垂直需求涌现，技能生态向“专业工具箱”延伸 |
| **🛠 开发者体验** | #509, #189, #62, #184 | CONTRIBUTING.md 补齐社区健康度；插件包去重；技能消失/重定向故障 | 基础设施完善与用户留存相关 |

---

## 3. 高潜力待合并 Skills（评论活跃、近期更新、落地概率大）

| PR | Skill 名称 | 合并信号 | 预估落地窗口 |
|---|---|---|---|
| **#1298** | skill-creator 评估循环修复 | 关联 3 个高热 Issue，多贡献者协作修复，核心阻断项 | **极高**（1-2 周内） |
| **#1367** | self-audit 质量门控 | 新近高活跃，作者持续迭代 v1.3.0，通用性强 | **高**（2-4 周） |
| **#1099 / #1050 / #362 / #361** | Windows 兼容性修复包 | 5 个 PR + 2 个 Issue 集中爆发，维护者响应积极 | **高**（1-2 周，可能打包合入） |
| **#723** | testing-patterns | 讨论周期长（1 个月），内容完整覆盖全测试栈 | **中高**（2-3 周） |
| **#514** | document-typography | 实用性强，无架构争议，仅需细节打磨 | **中高**（2-3 周） |
| **#1302** | color-expert | 专业度高，作者 meodai 持续响应，依赖少 | **中**（3-4 周） |
| **#538 / #541 / #539** | PDF/DOCX/验证小修复 | 单一职责、低风险、作者 Lubrsy706 连续贡献 | **中高**（1-2 周，可能批量合入） |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是：修复“技能评估与创建链路”的基础设施崩溃（Windows/编码/召回率全链路失效），并建立以 self-audit、skill-quality-analyzer 为代表的“技能质量自治体系”，同时推动技能分发向组织级共享、MCP 互操作、跨平台兼容演进——从“造技能”转向“管技能、信技能、通技能”。**

---

# Claude Code 社区动态日报｜2026-07-17

---

## 1. 今日速览

- **v2.1.212 发布**：重构了 `/fork` 与 `/subtask` 机制，新增 `claude auto-mode reset` 命令，改进多会话并行工作流。
- **社区高热度聚焦**：VS Code 扩展自动附件设置（#24726，185👍）、Cowork 网络放行列表失效（#30112，49👍）、Windows 原生 WSL 集成（#49933，80👍）仍是长期痛点。
- **新版本回归与严重缺陷并存**：v2.1.202+ 引入 TUI 渲染乱码、MCP 设置被误拦截、Remote Control 断连崩溃、Token 消耗异常飙升等多个生产环境阻断性问题，开发者反馈强烈。

---

## 2. 版本发布

### v2.1.212 (2026-07-17)
| 变更 | 说明 |
|------|------|
| `/fork` 行为调整 | 现将当前对话复制到**新的后台会话**（在 `claude agents` 列表中独立显示），原会话继续工作；原内联子代理功能改为 `/subtask`。 |
| `claude auto-mode reset` | 新增命令，可一键恢复默认 auto-mode 配置，带确认提示，防止误操作。 |

> 🔗 [Release v2.1.212](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 👍 | 评论 | 关键信息 | 链接 |
|---|------|------|----|------|----------|------|
| **#24726** | VS Code 扩展：需增加“禁用自动附件打开文件/选择”设置 | OPEN | 185 | 60 | **最热需求**，开发者希望在编辑器侧边栏手动控制上下文注入，避免干扰。 | [链接](https://github.com/anthropics/claude-code/issues/24726) |
| **#30112** | Cowork 网络出站放行列表失效：自定义域名被 403 拦截 | OPEN | 49 | 52 | **企业级阻断**，放行列表配置不生效，导致私有 registry / 内部 API 无法访问。 | [链接](https://github.com/anthropics/claude-code/issues/30112) |
| **#49933** | Windows 桌面端：原生 WSL Remote 集成 | OPEN | 80 | 23 | **高呼声功能**，期望在 Windows 上无缝连接 WSL 后端，避免双重环境维护。 | [链接](https://github.com/anthropics/claude-code/issues/49933) |
| **#47509** | Team 计划需提供 Max 20x 等效档位（面向高强度用户） | OPEN | 59 | 19 | **商业化诉求**，现有 Premium 仅 6.25x，CTO/Tech Lead 等重度用户不够用。 | [链接](https://github.com/anthropics/claude-code/issues/47509) |
| **#66020** | macOS 26.5.1 内核区泄漏（data.kalloc.1024），claude.exe 在 ~20GB 崩溃 | OPEN | 2 | 15 | **严重内存泄漏**，泄漏率随 Agent 负载从 21→1027/sec，已附复现步骤。 | [链接](https://github.com/anthropics/claude-code/issues/66020) |
| **#77615** | v2.1.202 TUI 渲染损坏：tmux 内文字重叠、缓冲区乱码 | OPEN | 0 | 4 | **回归缺陷**，仅在 tmux 中复现，裸终端正常，严重影响可用性。 | [链接](https://github.com/anthropics/claude-code/issues/77615) |
| **#77362** | v2.1.208：`/mcp` 菜单在活跃 `claude agents` 会话中被错误拦截 | OPEN | 5 | 3 | **误判逻辑**，守卫依据“启动路径”而非“当前是否附着”，导致正常会话无法配置 MCP。 | [链接](https://github.com/anthropics/claude-code/issues/77362) |
| **#77360** | 浏览器自动化在近 1M Token 会话中静默燃烧 ~43M cache-read tokens/5min | OPEN | 0 | 2 | **成本失控风险**，长上下文 + MCP `computer` tool 导致 Token 指数级增长，无任何预警。 | [链接](https://github.com/anthropics/claude-code/issues/77360) |
| **#78309** | Remote Control 启动间歇性 401（code-session endpoints），Token 有效却失败 | OPEN | 1 | 1 | **认证不稳定**，Canary 2.1.212 复现，影响远程协作可靠性。 | [链接](https://github.com/anthropics/claude-code/issues/78309) |
| **#78273** | Claude Code 未经确认覆盖用户现有文件，导致不可逆数据丢失 | OPEN | 0 | 1 | **数据安全红线**，Read 后直接 Write 覆盖，无 Diff 确认、无备份、无撤销。 | [链接](https://github.com/anthropics/claude-code/issues/78273) |

> **筛选依据**：👍 数、评论热度、是否为生产环境阻断、是否为近期版本回归、社区持续关注度。

---

## 4. 重要 PR 进展（全部 5 条）

| # | 标题 | 状态 | 类型 | 核心内容 | 链接 |
|---|------|------|------|----------|------|
| **#27204** | 修复 Hook 验证器：支持插件包装格式与可选 matchers | CLOSED | Fix | 自动识别 `{"hooks":{...}}` 包装格式 vs 直接 settings 格式，修复验证器无法找到根级事件的问题。 | [链接](https://github.com/anthropics/claude-code/pull/27204) |
| **#78057** | security-guidance：将 Python `exec()` 标记为代码注入污点 | OPEN | Security | 补充 `exec()` 检测规则，现有仅有 `eval()` 与 JS/TS `child_process_exec`。 | [链接](https://github.com/anthropics/claude-code/pull/78057) |
| **#78049** | mdm：`Set-ClaudeCodePolicy.ps1` 在 32 位 PowerShell 下写入 Program Files (x86) | OPEN | Fix/Windows | Intune 默认用 32 位宿主，导致 `$env:ProgramFiles` 指向错误路径；建议强制 64 位或显式纠正路径。 | [链接](https://github.com/anthropics/claude-code/pull/78049) |
| **#58646** | feat(plugin)：git-aware-history —— 修复跨 git worktree 的会话碎片化 | CLOSED | Feature | 以 Git 仓库根目录而非 CWD 命名历史目录，解决 worktree 切换/删除导致 `/resume` 找不到历史、无法聚合全仓库会话的问题。 | [链接](https://github.com/anthropics/claude-code/pull/58646) |
| **#77977** | docs(plugin-dev)：记录 `skipLfs` marketplace 源选项 | OPEN | Docs | 为 `github`/`git` 来源对象新增 `skipLfs` 字段文档与示例，避免插件分发时下载巨大 LFS 资产。 | [链接](https://github.com/anthropics/claude-code/pull/77977) |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表性 Issues | 社区信号强度 |
|----------|---------------|--------------|
| **IDE 深度集成可配置化** | #24726 (VS Code 禁用自动附件)、#78328 (VS Code 新 Bug) | ⭐⭐⭐⭐⭐ 极高 |
| **Windows / WSL 原生体验** | #49933 (WSL Remote)、#78335/336 (Desktop 深链接/断连崩溃) | ⭐⭐⭐⭐ 高 |
| **企业级网络与策略管控** | #30112 (Cowork 允许列表)、#78049 (MDM 32/64 位)、#47509 (Team 计划分级) | ⭐⭐⭐⭐ 高 |
| **多会话/后台 Agent 统一观测** | #77531 (跨会话 Dashboard)、v2.1.212 `/fork` 重构 | ⭐⭐⭐⭐ 高 |
| **Token 成本可视化与预警** | #77360 (浏览器自动化隐形消耗)、#77943 (code-review 1.1M tokens/5 文件) | ⭐⭐⭐⭐ 高 |
| **TUI/终端渲染稳定性** | #77615 (tmux 乱码)、#78312 (子代理强制全屏) | ⭐⭐⭐ 中高 |
| **MCP 生态易用性** | #77362 (设置菜单误拦截)、#78277 (Web 会话跨仓库 API) | ⭐⭐⭐ 中高 |
| **数据安全与确认机制** | #78273 (静默覆盖文件)、#75490 (Worktree 误删 gitignored 目录) | ⭐⭐⭐⭐ 高 |
| **模型行为一致性与安全策略** | #78300 (Agent 覆盖用户指令)、#78332/331 (过度拦截/网络安全话题误封) | ⭐⭐⭐ 中 |

---

## 6. 开发者关注点总结

| 痛点 / 高频诉求 | 典型反馈 | 影响面 |
|-----------------|----------|--------|
| **版本回归频发，发布质量焦虑** | v2.1.202+ 连续引入 TUI 乱码、MCP 菜单拦截、Remote Control 崩溃、内存泄漏 | 全平台、核心工作流 |
| **“静默失败/静默消耗”缺乏可观测性** | Token 爆增无预警、文件被静默覆盖、Cron 任务删了又复活、Remote 断连无明确错误 | 成本控制、数据安全、自动化可靠性 |
| **跨环境一致性差** | Windows/WSL/macOS/Linux 行为不一；tmux/裸终端渲染不同；Desktop/CLI/Web 三端能力割裂 | 团队协作、多设备切换 |
| **企业级特性缺口** | 网络放行列表失效、MDM 脚本架构缺陷、Team 计划档位不足、审计/策略 API 缺失 | 企业采纳阻碍 |
| **Agent 行为不可控** | 覆盖用户显式指令、安全策略过度拦截合法代码、中间思考块不可见、子代理强制全屏 | 信任度、可调试性 |
| **插件/扩展生态工程化不足** | Hook 验证器不支持主流包装格式、Marketplace 缺 `skipLfs`、Worktree 导致历史碎片化 | 二次开发效率、插件分发体积 |

---

> **下一步建议关注**：v2.1.212 后续热修复是否解决 #77615/#77362/#78309 等回归；Team 计划分级与 Windows WSL 集成的路线图；Token 成本仪表盘与文件写入确认机制的原生支持。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-17

---

## 1. 今日速览

- **版本迭代加速**：发布稳定版 `rust-v0.144.5`（修复危险命令检测）与 3 个 Alpha 版本（`0.145.0-alpha.16/18/19`），显示 0.145 版本正在快速迭代。
- **Windows 端性能与稳定性成核心痛点**：过去 24 小时高热 Issue 集中于 Windows 沙箱延迟、Git 进程泄漏、Defender 误触发高 CPU、WSL2 沙箱启动失败等，多个 Issue 评论数 10+、点赞 40+，社区呼声极高。
- **企业级模型集成需求上升**：Amazon Bedrock 自定义传输、成本归因、自定义 `base_url` 等需求持续发酵，相关 PR `#33695` 已合并，Issue `#27613` `#28902` 讨论活跃。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 | 链接 |
|------|------|----------|------|
| **rust-v0.144.5** | 稳定版修复 | 增强危险命令检测（覆盖更多 `rm -rf` 变体），拒绝时给出更清晰的理由提示 | [Changelog](https://github.com/openai/codex/compare/rust-v0.144.4...rust-v0.144.5) |
| **rust-v0.145.0-alpha.19** | Alpha | 持续迭代，具体变更见后续 Release Notes | [Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.19) |
| **rust-v0.145.0-alpha.18** | Alpha | 同上 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.18) |
| **rust-v0.145.0-alpha.16** | Alpha | 同上 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.16) |

> **提示**：0.145 Alpha 系列在 24 小时内连发 3 版，建议关注后续稳定版发布节奏。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 类型 | 评论/👍 | 核心诉求 | 为什么重要 |
|---|------|------|---------|----------|------------|
| [#10867](https://github.com/openai/codex/issues/10867) | **App 端支持自定义模型提供商** | Enhancement | 19 / 48 | CLI 已支持 `/model` 切换，App 端缺失同等能力 | **企业/高级用户刚需**，阻碍私有模型/代理模型接入，点赞最高 |
| [#23198](https://github.com/openai/codex/issues/23198) | **Windows Desktop 极度卡顿** | Bug/Performance | 18 / 44 | 日常使用严重掉帧，非机器性能问题 | **阻断 Windows 用户生产力**，多用户复现，急需性能剖析 |
| [#20678](https://github.com/openai/codex/issues/20678) | **macOS 上 Browser Use 无法连接 IAB (Node REPL)** | Bug/Connectivity | 18 / 0 | 浏览器技能在 macOS Node REPL 环境下 bootstrap 失败 | 影响 Computer Use / Browser 技能可用性，跨平台一致性缺失 |
| [#25799](https://github.com/openai/codex/issues/25799) | **Windows App 无法为 WSL2 项目启动沙箱命令** | Bug/Sandbox | 16 / 8 | WSL2 工作区下沙箱命令启动失败 | **WSL2 是 Windows 开发主流**，沙箱不兼容严重限制使用场景 |
| [#30527](https://github.com/openai/codex/issues/30527) | **Windows 10 触发 Defender 行为监控/高 CPU** | Bug/Performance | 14 / 12 | 近期更新后 Defender 报警、CPU 飙升 | 安全软件冲突导致误杀/卡顿，企业环境部署隐患 |
| [#23574](https://github.com/openai/codex/issues/23574) | **VS Code 扩展在 Linux 大型工作区占用 ~1M inotify watches** | Bug/Performance | 12 / 11 | 文件监听句柄耗尽导致系统/IDE 报错 | 大型单仓/Monorepo 场景常见，需优化监听策略或提供配置 |
| [#27613](https://github.com/openai/codex/issues/27613) | **支持 Amazon Bedrock 项目级成本归因** | Enhancement/CLI | 11 / 14 | Bedrock 仅支持 mantle 成本中心，无法按工作负载/团队分账 | **企业 FinOps 刚需**，PR #33695 已部分解决传输层定制 |
| [#32314](https://github.com/openai/codex/issues/32314) | **Windows 0.144.1 沙箱每命令 +20s；非提权则 apply_patch 失效** | Bug/Performance | 9 / 3 | 提权沙箱极慢，非提权又破坏补丁应用 | 沙箱性能与功能两难，直接影响 CLI/Desktop 交互延迟 |
| [#32593](https://github.com/openai/codex/issues/32593) | **新版统一桌面应用缺失 Chat Projects** | Enhancement/App | 8 / 0 | 统一界面后 Chat 面板不再显示 Projects | 交互体验倒退，用户找不到项目入口 |
| [#33202](https://github.com/openai/codex/issues/33202) | **多 Side Chat 运行时打开浏览器导致 Desktop 崩溃** | Bug/Browser | 8 / 0 | 并发会话 + 浏览器技能触发崩溃 | 多任务并行场景常见，稳定性优先级高 |

> **其它值得关注**：`#26812` Git 进程泄漏导致 Nonpaged Pool 增长、`#33685` 周限额消耗异常快、`#33438` Windows 输入延迟 2-3 秒、`#33049` 终端命令卡死、`#33390` Ultra 多智能体内存暴涨至 130 GB。

---

## 4. 重要 PR 进展（过去 24 小时合并/关闭）

| # | 标题 | 类型 | 核心变更 | 影响面 |
|---|------|------|----------|--------|
| [#33695](https://github.com/openai/codex/pull/33695) | **Support custom transports for Amazon Bedrock** | Feature | 允许 `amazon-bedrock` provider 覆盖 `base_url`、`auth`、`http_headers`，支持命令式 Bearer 认证 | 解决企业代理/私有化部署 Bedrock 的网络定制需求 |
| [#31571](https://github.com/openai/codex/pull/31571) | **Emit remote plugin IDs for skill invocations** | Analytics | 技能调用分析新增 `remote_plugin_id`，修复仅记录本地 ID 的问题 | 可观测性/计费归因完善 |
| [#33687](https://github.com/openai/codex/pull/33687) | **Avoid unnecessary writes during migration repair** | Perf/Fix | 迁移修复不再无条件 `UPDATE`，避免与其他连接争夺 SQLite 写锁 | 降低启动/并发时的数据库锁竞争 |
| [#33684](https://github.com/openai/codex/pull/33684) | **Extract TUI approval request payloads into structs** | Refactor | 命令/权限/补丁/MCP 审批载体结构化，TUI 路由渲染统一 | 代码可维护性，便于后续扩展审批类型 |
| [#33683](https://github.com/openai/codex/pull/33683) | **Preserve scope and provenance for imported agent memory** | Feature | 导入资源记录至 `extension_resource_files`，保留 frontmatter，避免合成 rollout 元数据 | Agent Memory 作用域隔离与来源可追溯 |
| [#33680](https://github.com/openai/codex/pull/33680) | **Reword the apply_patch tool description** | Docs | 优化工具描述文案 | 提升模型对工具语义的理解准确率 |
| [#33677](https://github.com/openai/codex/pull/33677) | **Forward thread originators from standalone extensions** | Feature | 独立 Web 搜索/图片请求保留线程级 `originator` 用于计费归因 | 多租户/企业计费分账准确性 |
| [#31529](https://github.com/openai/codex/pull/31529) | **Pre-rollover auto-compaction fallback** | Feature | 新增 `auto_compact_fallback` 结构化配置，压缩前执行一次受限采样 | 长上下文会话的 Token 成本控制与稳定性 |
| [#33665](https://github.com/openai/codex/pull/33665) | **Refresh step world state for all sessions** | Fix | 工作目录变更导致的 `AGENTS.md` 更新能即时到达模型，不依赖 deferred executor | 多会话/多窗口下指令同步一致性 |
| [#33645](https://github.com/openai/codex/pull/33645) | **Run `write_stdin` concurrently across terminal sessions** | Perf | 独立终端会话间 `write_stdin` 并行执行，会话内串行 | 多终端并行交互吞吐提升 |
| [#33639](https://github.com/openai/codex/pull/33639) | **Remove the unused realtime WebRTC crate** | Chore | 移除未使用的 `codex-realtime-webrtc` 及原生依赖 | 精简构建图，减少供应链攻击面 |
| [#33656](https://github.com/openai/codex/pull/33656) | **Validate reasoning effort after applying spawn roles** | Fix | Agent Role 覆盖模型/推理力度后再次校验组合合法性 | 防止动态角色导致非法参数组合报错 |
| [#33651](https://github.com/openai/codex/pull/33651) | **Add app-server API for reading app metadata** | Feature | 新增实验性 `app/read` 端点，支持批量获取 App 元数据与工具摘要 | 为外部集成/仪表盘提供标准化查询接口 |
| [#33658](https://github.com/openai/codex/pull/33658) | **Keep active-turn environments stable across settings updates** | Fix | 活跃轮次捕获环境快照，设置更新不回溯影响进行中任务 | 运行时配置变更不干扰进行中工具调用 |
| [#33657](https://github.com/openai/codex/pull/33657) | **Restore agent roles when reloading v2 sub-agents** | Fix | v

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-17

---

## 1. 今日速览

今日核心动态集中在**安全加固、Agent 架构稳定性提升、以及自动化运维工具链（Caretaker）的完善**。项目发布了 `v0.51.0` 稳定版与 `v0.52.0-preview.0` 预览版，重点修复了 macOS Seatbelt 沙箱逃逸漏洞（CVE-2023-32364 类）及 Bash 变量扩展绕过安全问题。社区高优先级 Issue 多聚焦于 Subagent 执行异常、Shell 挂起、Auto Memory 机制缺陷等核心稳定性痛点。

---

## 2. 版本发布

### 📦 v0.51.0 (Stable)
> **发布时间**: 2026-07-16 | [Release Notes](https://github.com/google-gemini/gemini-cli/pull/28420)
*   **核心修复**: 修复 `no_proxy` 环境变量处理逻辑 (#28131)。
*   **维护**: 例行版本号递增与变更日志生成。

### 📦 v0.52.0-preview.0 (Preview)
> **发布时间**: 2026-07-16 | [Release Notes](https://github.com/google-gemini/gemini-cli/pull/28419)
*   **重构**: 从工作区上下文中排除临时 CI 配置文件，减少上下文噪音 (#28216)。
*   **新功能基建**: 引入 Caretaker Triage Worker 核心基础模块，为自动化 Issue 分类奠基 (#28345 相关)。

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 优先级/标签 | 核心痛点/价值 | 社区热度 (👍/评论) | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Subagent 恢复机制缺陷** | `P1`, `Bug`, `Need Retesting` | Subagent 达到 `MAX_TURNS` 限制时错误上报 `GOAL success`，掩盖了中断事实，导致上层调度失效。 | 👍 2 / 💬 10 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **通用 Agent 频繁挂起** | `P1`, `Bug`, `Need Retesting` | 触发 Generalist Agent 即卡死（即使简单建目录），需显式禁用 Subagent 规避，严重阻塞主流程。 | 👍 8 / 💬 7 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 3 | **Shell 执行完成仍显示 "Waiting input"** | `P1`, `Core`, `Bug` | 简单命令执行完毕后 CLI 仍阻塞于交互态，怀疑 PTY/进程状态同步逻辑竞态。 | 👍 3 / 💬 4 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) |
| 4 | **Auto Memory 低信会话无限重试** | `P2`, `Bug` | 低信会话未标记为已处理，导致后台提取 Agent 反复尝试，浪费 Token 与算力。 | 👍 0 / 💬 5 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) |
| 5 | **Browser Agent Wayland 兼容性失败** | `P1`, `Agent/Browser`, `Need Retesting` | Linux Wayland 环境下 Browser Subagent 启动即失败，影响无头浏览器自动化场景。 | 👍 1 / 💬 4 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| 6 | **工具数量超限触发 400 错误** | `P2`, `Bug` | 可用工具 >128 (文中称>400) 时 API 报错，缺乏动态工具裁剪/作用域隔离机制。 | 👍 0 / 💬 3 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |
| 7 | **模型滥用临时脚本污染工作区** | `P2`, `Bug` | 受限于 Shell 执行权限，模型倾向于在随机目录生成临时脚本，导致提交前清理成本高。 | 👍 0 / 💬 3 | [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) |
| 8 | **Browser Agent 忽略 `settings.json` 覆盖** | `P2`, `Bug`, `Need Info` | `maxTurns` 等关键配置在 Browser Agent 中失效，配置下发链路断裂。 | 👍 0 / 💬 3 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |
| 9 | **组件级评测体系建设** | `P1`, `Eval Infra`, `Epic` | 从行为评测扩展至组件级评测，覆盖 6 模型 × 76 用例，保障迭代质量。 | 👍 0 / 💬 7 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) |
| 10 | **AST 意识工具链价值评估** | `P2`, `Epic`, `Customer Issue` | 探索 AST 级读取/搜索/映射是否能减少 Turn 数、降低 Token 噪音，提升大仓理解力。 | 👍 1 / 💬 7 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |

---

## 4. 重要 PR 进展 (Top 10)

| # | PR 标题 | 状态/规模 | 核心变更 | 关联 Issue/风险 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **修复 macOS Seatbelt 沙箱逃逸** | `Closed`, `P1`, `L` | 将 `permissive-*` 配置从 `allow default` 改为 `deny default` + 显式白名单，修复 `devfs` 挂载逃逸 (CVE-2023-32364 类)。 | **安全热修复** | [#28423](https://github.com/google-gemini/gemini-cli/pull/28423) |
| 2 | **重构 macOS Seatbelt 配置对齐** | `Open`, `P1`, `L` | 配合 #28423，统一 `permissive-open/proxied` 与 `restrictive/strict` 的安全模型一致性。 | 安全加固后续 | [#28424](https://github.com/google-gemini/gemini-cli/pull/28424) |
| 3 | **阻断 `$VAR`/`${VAR}` 变量扩展绕过** | `Open`, `P1`, `Security`, `M/L` | 修补 `detectBashSubstitution` 逻辑漏洞，纵深防御 GHSA-wpqr-6v78-jr5g 类命令注入。 | **安全热修复** | [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) |
| 4 | **CI 供应链 RCE 修复** | `Closed`, `L` | 拆分 `eval-pr.yml` 为 `pull_request` + `workflow_run`，移除 `pull_request_target` 导致的 Fork 代码执行风险。 | **供应链安全** | [#28232](https://github.com/google-gemini/gemini-cli/pull/28232) |
| 5 | **限制递归推理最大轮次 (15 轮)** | `Open`, `M/L/XL`, `Help Wanted` | 在核心推理引擎引入硬性轮次上限，防止无限循环耗尽本地 CPU/配额。 | 稳定性/成本控制 | [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) |
| 6 | **Caretaker Triage Worker LLM 编排实现** | `Open`, `L` | 引入 Antigravity SDK 实现 LLM 分类编排器、GCS 结构化调试日志、Cloud Run Job 容器化部署。 | 自动化运维核心 | [#28345](https://github.com/google-gemini/gemini-cli/pull/28345) |
| 7 | **修复滚动位置跳变** | `Open`, `P1/P2`, `XS` | 修正 `VirtualizedList` 中 `isStickingToBottom` 逻辑，解决用户上滑阅读时新内容到达导致的强制跳底。 | UX 核心体验 | [#28405](https://github.com/google-gemini/gemini-cli/pull/28405) |
| 8 | **Extension Checkout 引用消歧** | `Open`, `M` | Clone/Checkout 阶段解析引用为具体 Commit SHA 并校验完整性，防止供应链投毒或漂移。 | 供应链/稳定性 | [#28422](https://github.com/google-gemini/gemini-cli/pull/28422) |
| 9 | **A2A Server 环境隔离与路径信任前置** | `Open`, `M/L/XL` | 调整初始化顺序：路径信任检查前置于环境加载；引入 `AsyncLocalStorage` 隔离任务级环境变量。 | 多租户/安全架构 | [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) |
| 10 | **CJK 文本渲染与 Markdown 加粗修复** | `Open`, `M` | 解决 CJK 无空格硬换行误判列表、 `__bold__` 语法渲染异常，优化终端 Markdown 渲染器。 | 国际化/文档体验 | [#28309](https://github.com/google-gemini/gemini-cli/pull/28309) |

---

## 5. 功能需求趋势洞察

基于过去 24h 高频 Issue 标签与 Epic 方向聚类分析：

1.  **Agent 编排与可观测性成熟化** (`workstream-rollup`, `agent`)
    *   核心诉求：Subagent 状态透传、轨迹可视化 (`/chat share` #22598)、配置下发一致性 (#22267)、自觉能力增强 (#21432)。
    *   趋势：从“能跑通”向“可调试、可配置、可审计”演进。

2.  **原生 Shell 能力深度融合** (`area/agent`, `kind/enhancement`, `effort/large`)
    *   代表 Issue: #19873 (Zero-Dependency Sandbox + Post-Execution Routing)。
    *   方向：利用模型原生 Bash 亲和力，在安全沙箱内实现 POSIX 工具链原生编排，减少 Tool Calling 开销。

3.  **代码语义感知工具链** (`area/agent`, `area/platform`, `Epic`)
    *   代表 Issue: #22745, #22746 (AST-aware Read/Search/Map)。
    *   价值：大仓场景下精准定位符号边界，压缩上下文窗口，降低幻觉。

4.  **评测基建体系化** (`aiq/eval_infra`, `Epic`)
    *   代表 Issue: #24353 (Component Level Evaluations)。
    *   现状：76 行为评测用例 × 6 模型版本，向组件级细粒度回归扩展。

5.  **长期记忆与上下文工程** (`area/agent`, `priority/p2`, `kind/bug` 系列 #26516, #26522, #26523, #26525)
    *   痛点聚焦：去重、隔离、脱敏、补丁有效性校验、低信过滤。
    *   信号：Auto Memory 从“能写入”进入“治理与质量控制”阶段。

---

## 6. 开发者关注痛点总结

| 痛点分类 | 高频反馈场景 | 影响面 | 典型 Issue |
| :--- | :--- | :--- | :--- |
| **Subagent 失控与静默失败** | Generalist 挂起 (#21409)、状态上报造假 (#22323)、权限绕过 (#22093)、上下文丢失 (#21763) | **核心阻塞** | P1 占比高，多标记 `need-retesting` 表明回归频发 |
| **Shell/PTY 交互态同步失效** | 命令结束仍阻塞 (#25166)、交互式提示卡死 (#22465)、外部编辑器退出画面损坏 (#24935) | **日常开发体验** | 涉及 Ink/PTY/进程管理底层，复现难修复周期长 |
| **配置系统碎片化与失效** | Browser Agent 忽略 settings (#22267)、Symlink Agent 不识别 (#20079)、转义符处理不一致 (#22466) | **配置信任度** | 统一配置加载/合并/校验链路亟待重构 |
| **安全边界与供应链焦虑** | Seatbelt 逃逸 (#28423)、变量注入绕过 (#28403)、CI RCE (#28232)、Extension 完整性 (#28422) | **企业级采纳门槛** | 近期密集修复显示安全审计刚完成，信任建立中 |
| **资源成本不可控** | 递归无限循环 (#28164)、Auto Memory 无限重试 (#26522)、工具数爆炸 400 错误 (#24246) | **生产可用性** | 缺乏熔断、配额、裁剪等弹

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-17

> 数据来源：`github.com/github/copilot-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **版本发布**：发布 **v1.0.72-0**，核心亮点是**多轮子代理默认开放**（支持向运行中的 Agent 发送后续消息）及 **Claude Haiku 4.5+ 工具搜索支持**。
- **社区热点**：围绕 **会话持久化与上下文管理**（5MB 限制导致会话卡死、二进制文件残留、后台压缩挂起）、**BYOK/自定义模型认证回归**、**语音模式 ASR 静默失败** 三大核心痛点讨论度最高。
- **新增 Issue 显著上升**：单日新增 10+ 处于 `triage` 状态的 Issue，涵盖 Windows 权限安装失败、Gemini 模型 400 报错、TUI 文本选择失效等回归与兼容性问题。

---

## 2. 版本发布：v1.0.72-0
**发布时间**：2026-07-16 | [Release 详情](https://github.com/github/copilot-cli/releases/tag/v1.0.72-0)

| 类型 | 内容 | 影响评估 |
|------|------|----------|
| **Added** | **多轮子代理默认启用** | 🔥 **重大交互变更**：允许向正在运行的后台 Agent 发送跟进指令，解锁长任务人机协作新范式。 |
| **Added** | **Claude Haiku 4.5+ 工具搜索支持** | ✅ 模型生态扩展，增强 Haiku 版本工具调用能力。 |
| **Improved** | 代理忙碌时将计划提示作为引导消息投递 | 🛠️ 优化繁忙状态下的上下文注入体验。 |
| **Fixed** | Emoji 短代码（如 `:tada:`）渲染异常 | 🐛 修复 TUI 显示细节问题。 |

> **注意**：此版本未包含 PR 列表，疑为内部构建或自动化发布。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 核心痛点/价值 | 社区热度 (👍/评论) | 链接 |
|---|------|------|---------------|---------------------|------|
| **#4097** | `apply_patch` 删除大二进制文件后残留会话历史，永久触发 CAPI 5MB 限制 | 🟢 Open | **数据完整性/会话崩溃**：工具结果将整个二进制 diff 存入历史，导致后续请求/压缩彻底失败。 | 👍 2 / 💬 3 | [#4097](https://github.com/github/copilot-cli/issues/4097) |
| **#4016** | `--acp --stdio` 模式下 BYOK 认证被拒 (-32000)，1.0.61-1.0.68 回归 | 🟢 Open | **企业级集成阻断**：ACP 协议模式下自定义供应商强制要求 GitHub 登录，破坏离线/私有化部署场景。 | 👍 3 / 💬 3 | [#4016](https://github.com/github/copilot-cli/issues/4016) |
| **#4024** | 语音模式：所有内置 ASR 模型静默失败 (Nemotron/RNNT 路由 Bug) | 🟢 Open | **核心功能不可用**：语音输入完全失效，涉及 Foundry Local Core 底层路由逻辑缺陷。 | 👍 0 / 💬 11 | [#4024](https://github.com/github/copilot-cli/issues/4024) |
| **#3762** | `contextTier` 配置项不生效，需手动通过 Model Picker 切换才能触发长上下文 | 🟢 Open | **配置失效/用户预期不符**：启动参数与运行时行为不一致，增加认知负担。 | 👍 0 / 💬 4 | [#3762](https://github.com/github/copilot-cli/issues/3762) |
| **#3481** | 非交互模式启动时 `contextTier=long_context` 不生效，缺乏 CLI 标志位 | 🟢 Open | **自动化/脚本场景受阻**：CI/CD 或脚本化启动无法指定长上下文。 | 👍 5 / 💬 2 | [#3481](https://github.com/github/copilot-cli/issues/3481) |
| **#3767** | 过大附件永久卡死会话 (CAPI 5MB 原生限制，无恢复机制) | 🔴 Closed | **架构级限制暴露**：单次请求超限导致会话不可逆损坏，缺乏降级/分片方案。 | 👍 0 / 💬 2 | [#3767](https://github.com/github/copilot-cli/issues/3767) |
| **#3407** | 后台子代理完成触发 `Invalid signature in thinking block` 永久卡死会话 | 🔴 Closed | **流式协议兼容性**：Thinking 签名验证失败导致不可恢复错误，无重试/回滚机制。 | 👍 0 / 💬 2 | [#3407](https://github.com/github/copilot-cli/issues/3407) |
| **#4156** | `git branch -D` 强制删除分支**未触发权限请求**，被错误分类为安全操作 | 🟢 Open | **安全风险/权限模型缺陷**：破坏性操作绕过确认流程，`git push --delete` 却会触发，逻辑不一致。 | 👍 0 / 💬 0 | [#4156](https://github.com/github/copilot-cli/issues/4156) |
| **#4155** | Gemini 模型返回 400 Bad Request (多版本均复现) | 🟢 Open | **新模型集成阻塞**：主流模型厂商接口调用失败，疑请求格式/参数映射错误。 | 👍 0 / 💬 0 | [#4155](https://github.com/github/copilot-cli/issues/4155) |
| **#4138** | 会话恢复触发后台压缩静默失败并无限挂起进程 (复现 4 次) | 🟢 Open | **可靠性/死锁**：恢复会话这一高频操作引发后台任务死锁，用户无感知且无法中断。 | 👍 0 / 💬 0 | [#4138](https://github.com/github/copilot-cli/issues/4138) |

---

## 4. 重要 PR 进展
> **过去 24 小时无更新的 Pull Requests。**  
> 当前迭代以 Issue 驱动为主，核心修复可能集中在内部分支或待合并队列中。建议关注后续 Release Notes 中的 "Merged PRs" 章节。

---

## 5. 功能需求趋势（高频标签统计）

| 趋势方向 | 代表性 Issues | 核心诉求 |
|----------|---------------|----------|
| **🔧 会话与上下文工程化** | #4097, #3767, #3407, #4138, #3762, #3481 | 突破 5MB 硬性限制；配置项生效一致性；后台压缩/恢复的健壮性与可观测性；二进制/大文件处理策略。 |
| **🔌 模型生态与 BYOK 成熟度** | #4016, #3891, #4139, #4155, #4024 | ACP/BYOK 认证流程统一；子代理 Model Override 生效；自定义端点/云厂商模型接入；语音/多模态模型路由修复。 |
| **🖥️ 跨平台与终端体验 (TUI/Windows)** | #4151, #4149, #3580, #4154, #4152 | Windows 权限/安装修复；TUI 文本选择/键盘导航；链接打开行为统一；Winget 安装依赖解决。 |
| **🛡️ 权限与安全模型细粒度化** | #4156, #4150, #4142, #4157 | 命令级/路径前缀权限配置；破坏性操作分类修正；目录访问提示信息完整性。 |
| **🤝 IDE/生态互通** | #4143, #4148 | 继承 VS Code MCP 工具；GitHub Enterprise Server (GHE) Issue 面板支持。 |

---

## 6. 开发者关注点总结

1.  **“会话不可变/不可恢复” 是最大信任杀手**  
    多个高赞/高讨论 Issue 指向同一根因：**CAPI 5MB 硬限制 + 缺乏优雅降级（分片、摘要、外部存储）+ 后台子代理、压缩、恢复等异步流程一旦触发限制，会导致主会话永久卡死，且无 `/rewind` 或手动干预入口。

2.  **BYOK/自定义模型在非标准模式下“二等公民”地位未改**  
    `--acp`、`--stdio`、子代理 Model Override 等场景下，认证逻辑与模型选择逻辑仍硬编码依赖 GitHub 官方流程，阻碍企业私有化、混合云部署。

3.  **v1.0.72 引入的“多轮子代理”虽强，但基础设施跟不上**  
    新特性赋予 Agent 长周期运行能力，但会话历史膨胀、上下文压缩、权限模型、错误恢复等基建均暴露短板，社区担心“跑得快，摔得重”。

4.  **Windows 原生体验严重滞后**  
    插件安装 `Access Denied`、Winget 依赖缺失、路径处理 Bug、TUI 交互异常，集中反映 Windows 端测试覆盖不足。

5.  **可观测性与调试能力需求上升**  
    #1152 (Token 明细)、#4144 (子会话失败原因透传)、#4024 (语音模式静默失败无日志) 均指向：**“黑盒执行”让开发者无法定位问题，只能靠刷 Issue 碰运气。**

---

> **下一步建议关注**：v1.0.73 是否包含 #4097/#4138/#4016 等阻塞性 Bug 修复；`contextTier` 与 `long_context` 启动一致性修复进度；Windows 专项兼容性里程碑。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-17

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **版本发布**：发布 **v1.49.0 / kosong v0.55.0**，核心修复上下文预算计算、空 `reasoning_content` 处理及 Windows 安装脚本兼容性问题。
- **社区焦点**：Windows PowerShell 5.1 安装崩溃（#2504）与 TPD 速率限制计算异常（#2318）为当前最高优先级阻塞性 Issue。
- **功能呼声**：社区强烈呼吁在 TUI 主界面新增 **Reasoning Level/Thinking Effort 快捷切换** 入口（#2501），以优化长对话中途调整推理强度的体验。

---

## 2. 版本发布
### `v1.49.0` (kimi-cli) / `v0.55.0` (kosong) 
**发布时间**：2026-07-16 | [Release PR #2503](https://github.com/MoonshotAI/kimi-cli/pull/2503)

| 变更类型 | 核心内容 | 关联 PR / 作者 |
| :--- | :--- | :--- |
| **Bug Fix** | 修复 `kimi` 完成任务时使用剩余上下文作为预算计算依据，优化 Token 利用率 | [#2494](https://github.com/MoonshotAI/kimi-cli/pull/2494) @RealKai42 |
| **Bug Fix** | `kosong` 修复：保留空字符串 `reasoning_content` 为 `ThinkPart`，避免流式解析丢失推理块 | [#2498](https://github.com/MoonshotAI/kimi-cli/pull/2498) @bigeagle |
| **Chore** | 版本号同步、更新根依赖 `kosong[contrib]` 至 0.55.0、同步 `kimi-code` wrapper | [#2503](https://github.com/MoonshotAI/kimi-cli/pull/2503) @sailist |

> **升级建议**：建议所有用户升级，尤其是遇到上下文截断或推理内容显示异常的用户。

---

## 3. 社区热点 Issues（Top 4，全量覆盖）

| # | 标题 | 状态 | 关键信息 | 重要性判定 |
| :--- | :--- | :--- | :--- | :--- |
| **[#2504](https://github.com/MoonshotAI/kimi-cli/issues/2504)** | **Windows PowerShell 5.1 安装脚本崩溃：`IndexOutOfRangeException`** | 🟢 Open | **环境**：Win10/11, PS 5.1<br>**现象**：`irm ... install.ps1 \| iex` 下载二进制时抛出数组越界<br>**影响**：阻断所有未升级 PS 版本的 Windows 用户首次安装 | 🔴 **P0 阻塞**<br>安装链路断裂，影响面广（企业环境常锁定 PS 5.1） |
| **[#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)** | **请求触达组织 TPD 速率限制，计算值异常 (current: 1,505,241)** | 🟢 Open | **版本**：kimi 2.6 / Windows 10<br>**核心怀疑**：TPD (Tokens Per Day) 计算逻辑错误，导致误判触限<br>**影响**：正常配额用户被误封禁，无法使用 | 🔴 **P0 核心功能**<br>计费/配额核心逻辑缺陷，信任度风险高 |
| **[#1559](https://github.com/MoonshotAI/kimi-cli/issues/1559)** | **官网下载 `kimi-cli` 命令报错** | 🟢 Open | **创建早**（3月），近期更新<br>**现象**：官方文档指引的安装命令执行失败<br>**关联**：疑似与 #2504 根因一致（安装脚本/分发渠道问题） | 🟠 **P1 体验**<br>官方入口失效，新用户流失风险 |
| **[#2501](https://github.com/MoonshotAI/kimi-cli/issues/2501)** | **[Feature] TUI 主界面快捷切换 Reasoning Level / Thinking Effort** | 🟢 Open | **痛点**：现需进入 `/model` 二级菜单多级操作，打断心流<br>**期望**：斜杠命令 `/think`、状态栏下拉、快捷键 (Ctrl+Shift+R) 任一实现<br>**对标**：Codex VS Code 侧边栏直接下拉切换 | 🟢 **P2 高价值增强**<br>高频操作优化，显著提升 Power User 效率，👍 0 但讨论度潜在高 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 核心变更 | 技术价值 |
| :--- | :--- | :--- | :--- | :--- |
| **[#2503](https://github.com/MoonshotAI/kimi-cli/pull/2503)** | `chore(release): bump kimi-cli to 1.49.0 and kosong to 0.55.0` | 🟣 **Merged** | 版本发布自动化：同步版本号、更新 Changelog、锁定依赖、同步 wrapper | 发布工程化标杆，保证供应链一致性 |
| **[#2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)** | `feat(telemetry): align events with TS schema, add trace_id and missing events` | 🟣 **Merged** | **Telemetry 重构对齐**：捕获 `x-trace-id` 响应头（流式/非流式），补全缺失事件定义，对齐 `agent-core-v2` TS Schema | **可观测性基建**：为分布式追踪、错误诊断、产品分析奠定统一数据契约基础 |
| **[#2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)** | `fix(soul): make LLMNotSet error message actionable for fresh installs` | 🟢 Open | 修复 #2456：首次安装（如 Homebrew）运行命令前未 `kimi login` 时，报错从 `LLM not set` 优化为含引导操作的可执行提示 | **首次体验 (FTUE) 关键修复**：降低新用户流失，属于 "Paper Cut" 类高 ROI 改进 |
| **[#2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)** | `feat(tools): add Monitor tool for per-line stdout streaming` | 🟢 Open | 新增 **`Monitor` Tool**：现有后台任务工具的流式对标件，支持逐行 stdout 实时流式传输 | **工具链扩展**：解锁长耗时命令实时交互场景（如日志尾随、构建监控），Agent 能力边界外扩 |

---

## 5. 功能需求趋势洞察

从近期 Issue 与 PR 活动中提炼的三大核心需求方向：

1.  **原生 Windows 兼容性达标 (High Urgency)**
    *   **信号**：#2504 (PS 5.1 崩溃)、#1559 (官网安装失败)、CI/CD 发布流程中 Windows 资产分发。
    *   **趋势**：从 "能跑" 向 "开箱即用" 迈进，需覆盖 PS 5.1/7+、winget、Scoop 等主流包管理器，修复路径含空格、编码、签名验证等长尾问题。

2.  **推理控制交互的 "模型化/即时化" (High Value)**
    *   **信号**：#2501 (TUI 快捷切换 Reasoning Level)、v1.49.0 修复 `reasoning_content` 解析。
    *   **趋势**：随着模型推理能力成熟，**动态调整 Thinking Effort** 成为核心交互范式。社区期望：斜杠命令、状态栏 Widget、API 参数级控制三位一体，而非埋藏在深层菜单。

3.  **可观测性与配额透明化 (Foundation)**
    *   **信号**：#2500 (Telemetry Schema 对齐、Trace ID)、#2318 (TPD 计算异常)、#2488 (错误信息可操作化)。
    *   **趋势**：从 "有无日志" 转向 **结构化、关联化、标准化** 遥测体系。配额/限流逻辑需白盒化，错误信息需具备 "自助解决" 闭环能力。

---

## 6. 开发者关注点 & 痛点总结

| 痛点分类 | 典型反馈 | 影响对象 | 建议优先级 |
| :--- | :--- | :--- | :--- |
| **安装分发链路脆弱** | PS 5.1 崩溃、官网命令失效、Homebrew 首跑报错 | **All New Users (Win/macOS)** | 🔴 **最高** |
| **配额/限流黑盒** | TPD 计算值离谱 (150万+)，无配额仪表盘，无告警 | **High-volume Orgs / Paid Users** | 🔴 **最高** |
| **TUI 交互效率天花板** | 切换模型/推理强度需深层菜单，无快捷键/命令行直达 | **Daily Active Users (Power Users)** | 🟠 **高** |
| **错误信息无指引性** | `LLM not set`、`IndexOutOfRange` 等原始异常直抛用户面 | **Beginners / CI Environments** | 🟠 **高** |
| **流式/推理解析健壮性** | 空 `reasoning_content` 导致 ThinkPart 丢失，上下文预算计算不准 | **Long-context / Reasoning-heavy Users** | 🟢 **中** (v1.49.0 部分缓解) |

---

## 📌 给维护团队的可执行建议

1.  **[Hotfix] 24h 内修复 #2504**：发布 `install.ps1` 兼容 PS 5.1 补丁（或提供 `.msi`/`.exe` 兜底），同步更新官网文档指引。
2.  **[Investigation] 优先排查 #2318 TPD 算法**：引入审计日志对比客户端上报 vs 服务端计算，排除 Token 重复计算/单位换算 Bug。
3.  **[Planning] 纳入 #2501 至 v1.50.0 Milestone**：设计 `/think <level>` 斜杠命令 + 底部状态栏 `🧠 Level` 可点击切换，参考 Codex UX。
4.  **[DX] 推广 #2488 模式**：建立 "错误信息规范" (Error Code + Human Hint + Doc Link)，对全量异常抛出点进行治理。
5.  **[Telemetry] 落地 #2500 Trace ID 穿透**：确保 Client -> Gateway -> Model Provider 全链路 `trace_id` 打通，接入 Grafana Tempo / Jaeger 实现端到端追踪。

--- 

*报告生成时间：2026-07-17 06:00 UTC | 下一期预告：关注 v1.50.0 预发布分支与 Windows 安装器原生化进展*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-17

---

## 1. 今日速览

- **v1.18.3 发布**：修复桌面端首页滚动、WSL 启动就绪等关键体验问题，新增子代理选择器键盘快捷键。
- **付费模型服务异常成热点**：多个 Issue 指向 Zen/Go 付费模型频繁返回 `Upstream request failed`，影响核心付费用户。
- **社区高呼「市场化」与「布局回退」**：插件/技能/连接器市场、旧版布局保留、RTL 语言支持等长尾需求集中爆发。

---

## 2. 版本发布

### v1.18.3 (2026-07-17)
| 类别 | 变更 |
|------|------|
| **Core** | 新增 `↑` 关闭子代理选择器（首项选中时） |
| **Desktop** | 修复首页粘性头部与会话列表滚动异常；修复 WSL 服务器加载未纳入启动就绪判定导致的竞态 |

> 🔗 [Release v1.18.3](https://github.com/anomalyco/opencode/releases/tag/v1.18.3)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 评论/👍 | 关键信息 | 重要性 |
|---|------|---------|----------|--------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | 110 / 89 | 官方集中收集内存泄漏堆快照的总贴，明确拒绝 LLM 生成方案，需真实用户协助定位 | ⭐⭐⭐⭐⭐ 核心稳定性 |
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | **CLI 无法复制粘贴** | 53 / 26 | 右上角提示“已复制”但 Ctrl+V 无内容，跨平台复现，阻断终端工作流 | ⭐⭐⭐⭐ 基础交互 |
| [#36506](https://github.com/anomalyco/opencode/issues/36506) | **付费 Zen 模型全线 `Upstream request failed`** | 5 / 2 | 所有付费模型失效，免费模型正常，疑似上游计费/路由故障，直接影响付费用户 | ⭐⭐⭐⭐⭐ 商业关键 |
| [#37255](https://github.com/anomalyco/opencode/issues/37255) | **Desktop 1.18.2 发送消息后模型无响应** | 3 / 3 | 升级后完全无法收到回复，API Key 正常，疑似 v1.18.2 回归 | ⭐⭐⭐⭐ 发布质量 |
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **保留旧版布局选项** | 9 / 10 | 用户主张旧布局入口更平、工作区切换更快，呼吁提供配置开关 | ⭐⭐⭐ UX 连续性 |
| [#28696](https://github.com/anomalyco/opencode/issues/28696) | **插件/技能/连接器统一市场** | 6 / 23 | 需求发现、安装、更新、版本管理全链路，参考 Codex/Claude Code 生态 | ⭐⭐⭐⭐ 生态建设 |
| [#27474](https://github.com/anomalyco/opencode/issues/27474) | **`TypeError: Failed to fetch` 点击 Explore/智能体触发** | 8 / 0 | 渲染层 fetch 失败，堆栈指向重试逻辑，疑似网络层或 WSL 代理问题 | ⭐⭐⭐ 稳定性 |
| [#35319](https://github.com/anomalyco/opencode/issues/35319) | **RTL (阿拉伯语) 渲染全面损坏** | 6 / 0 | 词序、对齐、表格方向均错，附带完整修复方案，国际化缺口明显 | ⭐⭐⭐ 国际化 |
| [#37381](https://github.com/anomalyco/opencode/issues/37381) | **Composer 需要提示词队列与中断控制** | 3 / 0 | 流式响应期间无法排队后续指令，仅能强行打断，影响多轮协作效率 | ⭐⭐⭐ 交互增强 |
| [#29186](https://github.com/anomalyco/opencode/issues/29186) | **DEBUG 日志缺失 LLM 请求/响应体** | 3 / 3 | `--log-level DEBUG` 无法看到实际 API 负载，调试提供商错误极其困难 | ⭐⭐⭐ 可观测性 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 类型 | 核心变更 | 关联 Issue |
|---|------|------|----------|------------|
| [#37219](https://github.com/anomalyco/opencode/pull/37219) | **忽略 `node_modules` 配置/技能扫描** | Bugfix | Glob 扫描排除 `node_modules`，避免大型项目启动卡顿 | #30337 |
| [#37414](https://github.com/anomalyco/opencode/pull/37414) | **线性去重 Diff 摘要** | Perf | O(n²)→O(n) 逆序扫描 + Set，保留原有顺序与最后一项语义 | #33106 |
| [#37180](https://github.com/anomalyco/opencode/pull/37180) | **TUI 保留 Prompt Footer 动作** | UX | 目录标签与右侧动作组不再被压缩，窄宽度下保持可读 | — |
| [#37190](https://github.com/anomalyco/opencode/pull/37190) | **通知服务器不可用时的初始化兜底** | Bugfix | WSL 场景下渲染进程不再因通知服务未就绪崩溃 | #37171 |
| [#36286](https://github.com/anomalyco/opencode/pull/36286) | **移除废弃 Session Renderer** | Refactor | 清理旧 `AssistantMessage`/`ExplorationSummary` 渲染路径 | #36269 |
| [#37409](https://github.com/anomalyco/opencode/pull/37409) | **Node.js Desktop 构建注入 `OPENCODE_VERSION`** | Bugfix | 修复 Desktop 尝试安装 `@opencode-ai/plugin@local` 失败 | #30908 |
| [#37411](https://github.com/anomalyco/opencode/pull/37411) | **自定义工具导入失败发布 Session 事件** | Bugfix | TUI 现在能看到工具加载警告，不再静默跳过 | #37186 |
| [#37410](https://github.com/anomalyco/opencode/pull/37410) | **WebFetch `always-allow` 限域而非全局** | Security | 通配符 `*` → 当前域名，防止误授权所有站点 | #37183 |
| [#37406](https://github.com/anomalyco/opencode/pull/37406) | **守护已销毁恢复窗口** | Stability | 诊断逻辑兼容 `BrowserWindow`/`WebContents` 销毁态 | — |
| [#37375](https://github.com/anomalyco/opencode/pull/37375) | **System Prompt 增加代码质量豁免条款** | Prompt | 禁止“极小化 token”导致省略测试/守卫/日志/规划 | #37367 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势 | 代表 Issue | 社区呼声 | 备注 |
|------|------------|----------|------|
| **插件/技能/连接器统一市场** | #28696, #37376 | ⭐⭐⭐⭐⭐ (23👍) | 需发现、安装、更新、版本锁定全链路，参考 VS Code Marketplace |
| **付费模型可靠性 & 计费透明** | #36506, #37056, #37231 | ⭐⭐⭐⭐⭐ | 400/401/500 混发，大请求必现，阻断商业化信任 |
| **布局/交互可配置化** | #37012, #35319, #33201 | ⭐⭐⭐⭐ | 旧布局保留、RTL 支持、聊天框方向、主题 Hover 态 |
| **Composer 编排能力** | #37381, #37222 | ⭐⭐⭐ | 提示词队列、Plan/Build 模式自动切换、中断粒度控制 |
| **可观测性与调试** | #29186, #20695 | ⭐⭐⭐ | DEBUG 日志缺失请求体、内存泄漏需堆快照协助 |
| **跨平台文件/剪贴板** | #13984, #27689 | ⭐⭐⭐ | CLI 粘贴失效、Office 文件拖拽、WSL 文件系统映射 |
| **多 Provider Profile** | #36781 | ⭐⭐ | 同一 Provider 多 Key/Profile 支持（已 PR） |
| **外部 Agent 适配标准** | #37388 | ⭐⭐ | 能力声明 + 一致性测试，推动生态互操作 |

---

## 6. 开发者关注点（痛点与高频诉求）

1. **“付费服务不可用”信任危机**  
   多个付费用户在 #36506、#37056、#37231 反馈同一症状，且“同 Key 间歇性 401”，怀疑上游路由/配额逻辑有 bug，官方尚无公开说明。

2. **v1.18.x 回归密集**  
   1.18.2 导致模型无响应 (#37255)、桌面滚动/启动异常 (v1.18.3 修复)、通知服务竞态 (#37190) —— 发布前集成测试覆盖面不足。

3. **内存泄漏长期未根治**  
   #20695 开启 3 个半月仍在收集快照，社区期待官方主动接入 heap profiling CI 或提供自动上传工具。

4. **CLI 基础交互缺失**  
   复制粘贴 (#13984) 这种 “P0 体验” 从 2 月挂到 7 月，反映终端端优先级偏低。

5. **国际化与无障碍断层**  
   RTL 完全损坏 (#35319)、波斯语/乌尔都语缺翻译 (#34697)、中文聊天框不居右 (#33201) —— 非英语用户被边缘化。

6. **生态工具链碎片化**  
   技能自动补全缺失 (#25117)、无市场分发 (#28696)、连接器无管理入口 (#37376) —— 开发者被迫手动维护 `~/.claude/skills` 等约定目录。

7. **调试黑盒**  
   `--log-level DEBUG` 看不到真实 HTTP 负载 (#29186)，排查 Provider 错误只能抓包，极大增加二次开发成本。

---

> **下一步关注**：v1.18.4 是否回滚

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-17

---

## 1. 今日速览
Pi 团队在 24 小时内连发 **v0.80.8 ~ v0.80.10** 三个版本，完成了从**模型运行时统一**、**Kimi K3 原生支持与思维链兼容**到 **xAI OAuth 体验优化**的完整迭代闭环。社区高频聚焦于 **Bedrock/Anthropic 认证失效**、**扩展系统稳定性（加载失败、热重载）**、**TUI 渲染边界问题** 以及 **核心并发/存储架构重构**（SQLite、序列化启动）。安全合规（随机数、临时文件权限、Bash 防护）与文档同步滞后成为隐性高频痛点。

---

## 2. 版本发布

| 版本 | 核心亮点 | 关键变更链接 |
| :--- | :--- | :--- |
| **v0.80.10** | **Kimi Coding 思维链兼容**：Kimi K3 正确使用自适应思考，暴露 `max` 级别，支持回放空签名思考块。 | [Release Notes](https://github.com/earendil-works/pi/blob/v0.80.10/packages/coding-agent/docs/extensions.md#kimi-for-coding-setup) |
| **v0.80.9** | **Kimi K3 与延迟工具加载**：内置提供商支持 Kimi K3，通过原生协议实现渐进式扩展工具激活。 | [Dynamic Tool Loading](https://github.com/earendil-works/pi/blob/v0.80.9/packages/coding-agent/docs/extensions.md#dynamic-tool-loading) |
| **v0.80.8** | **统一模型运行时与认证**：`ModelRuntime` 集中管理配置、提供商自有 `/login`、动态提供商目录；Live 模块更新。 | [Providers Doc](https://github.com/earendil-works/pi/blob/v0.80.8/packages/coding-agent/docs/providers.md) |

> **趋势**：版本节奏极快（日更级），核心架构向“运行时统一、提供商自治、工具动态化”演进。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 关注理由 / 社区反应 |
| :--- | :--- | :--- | :--- |
| [#6657](https://github.com/earendil-works/pi/issues/6657) | **Bedrock AWS_PROFILE 认证失效** | CLOSED | 👍2 / 9评论。**阻塞性 Bug**，v0.80.7 号称修复但仍复现，涉及企业级 AWS 认证核心路径。 |
| [#5821](https://github.com/earendil-works/pi/issues/5821) | **支持 Anthropic OAuth 订阅用法** | CLOSED | 👍1 / 8评论。**长期诉求**，关乎商业模式兼容，Anthropic 官方确认 SDK 支持，社区期待原生集成。 |
| [#6686](https://github.com/earendil-works/pi/issues/6686) | **Pi 自动登出 GitHub** | CLOSED | 8评论。**回归问题**（关联 #2725），跨平台复现，严重破坏开发流连续性。 |
| [#6552](https://github.com/earendil-works/pi/issues/6552) | **允许扩展请求延迟规范化重载** | **OPEN** | 3评论。**架构级需求**，解决 `ctx.reload()` 仅限提示词上下文的限制，工具/事件处理器急需。 |
| [#6743](https://github.com/earendil-works/pi/issues/6743) | **pi-ollama-cloud 扩展加载失败** | **OPEN** | 2评论。**v0.80.8/0.80.9 回归**，`undefined reading 'create'` 导致扩展生态不可用，仅能降级。 |
| [#6716](https://github.com/earendil-works/pi/issues/6716) | **Bash 工具无破坏性命令护栏** | CLOSED | 3评论。**安全基线缺失**，默认未启用权限网关，任意命令执行风险高，社区呼吁默认开启。 |
| [#6744](https://github.com/earendil-works/pi/issues/6744) | **序列化并发提示词启动** | **OPEN** | 2评论。**核心并发修复**，双提示词竞态导致状态损坏，作者已有补丁含回归覆盖。 |
| [#6749](https://github.com/earendil-works/pi/issues/6749) | **API 错误响应体被忽略** | **OPEN** | 1评论。**调试黑盒**，OpenAI 兼容层错误体丢失显示 `(no body)`，阻碍对接排查。 |
| [#3432](https://github.com/earendil-works/pi/issues/3432) | **Read 工具行长/字节数可配置** | CLOSED | 👍1 / 5评论。**长期高频需求**，内置工具参数硬编码，限制大文件/特殊格式读取灵活性。 |
| [#6729](https://github.com/earendil-works/pi/issues/6729) | **/tmp 文件权限过宽** | CLOSED | 3评论。**合规安全**，默认 umask 0022 导致临时文件可读，要求强制 0600，涉及多处创建路径。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心价值 |
| :--- | :--- | :--- | :--- |
| [#6750](https://github.com/earendil-works/pi/pull/6750) | **Markdown Transformer API** | **OPEN** | 新增扩展 API，支持 Markdown 解析转换（如公式转 Unicode），导出 `marked` 供扩展复用。 |
| [#6739](https://github.com/earendil-works/pi/pull/6739) | **新增 Telnyx Inference 内置提供商** | **MERGED** | OpenAI 兼容协议接入，扩展提供商生态，托管开源模型于 Telnyx GPU。 |
| [#6734](https://github.com/earendil-works/pi/pull/6734) / [#6651](https://github.com/earendil-works/pi/pull/6651) | **xAI 设备码 OAuth & Grok 4.5 路由优化** | **MERGED** | 预填设备码、SuperGrok 标签、移除废弃模型，**仅 Grok 4.5 走 Responses API 支持 reasoning**。 |
| [#6594](https://github.com/earendil-works/pi/pull/6594) | **SQLite 会话存储** | **OPEN** | 核心重构：Compaction 引入 `retainedTail` 避免全树遍历，路径查找截断于最后压缩点，大幅优化长会话性能。 |
| [#6730](https://github.com/earendil-works/pi/pull/6730) | **保留 Compaction 队列行为** | **OPEN** | 修复并发压缩丢失 `steer`/`followUp` 意图，`prompt()` 正确判断空闲/活跃 Run 入队。 |
| [#6731](https://github.com/earendil-works/pi/pull/6731) | **修复 Read 错误高亮** | **OPEN** | 读取失败时跳过语法高亮（避免语言推导报错），成功时保持高亮，含 Elixir 回归用例。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-17

---

## 1. 今日速览

- **双版本发布**：v0.19.11 稳定版与 nightly 版同步推出，核心聚焦 **多工作区守护进程架构** 与 **Web Shell 体验完善**。  
- **多工作区 RFC 落地加速**：#6378、#7014、#7015 等设计讨论闭环，PR #7065 已修复跨工作区配对/白名单隔离安全隐患。  
- **VS Code 扩展连接故障高发**：#7051、#7056 反映 ACP 进程异常退出，阻塞 IDE 集成用户，需优先排查 Electron 参数传递与通道建立逻辑。  
- **UI/渲染层集中攻坚**：路径显示统一（#7004 系列）、计划全文查看（#7060）、代码块流式渲染修复（#7006）、VP 模式鼠标选中（#6937）等 10+ PR 并行推进。

---

## 2. 版本发布

### v0.19.11 (Stable) & v0.19.11-nightly.20260717.f8e6e8931
| 类型 | 变更 | 关联 PR/Issue |
|------|------|---------------|
| **feat** | Web Shell 新增工作区路径锁定，防止会话间路径污染 | #6853 |
| **feat** | 守护进程冷启动首会话追踪，便于性能分析 | #6907 |
| **fix** | 强化多工作区所有权校验，修复会话跨工作区越权风险 | #7014, #7015 设计落地 |
| **docs** | 完整变更日志见 [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.11) | — |

> **升级提示**：`/update` 命令在 v0.19.9+ 已修复版本检测逻辑（#6857），建议直接执行升级。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 类型/优先级 | 核心痛点/价值 | 社区热度 | 链接 |
|---|------|-------------|---------------|----------|------|
| **#6378** | RFC: 单 `qwen serve` 守护进程支持多工作区 | Feature/P2 | **架构级变更**：打破 “1 daemon = 1 workspace” 假设，需设计会话归属、cd/分叉路由、所有权语义 | 💬 25 评论，设计讨论最活跃 | [Link](https://github.com/QwenLM/qwen-code/issues/6378) |
| **#7051** | VS Code 侧边插件报错：ACP 进程意外退出 | Bug/P2 | **阻塞 IDE 用户**：Electron 参数 `acp`/`channel` 未识别，导致聊天无法发送 | 💬 4 评论，Windows/macOS 均现 | [Link](https://github.com/QwenLM/qwen-code/issues/7051) |
| **#7056** | VS Code Companion v0.19.11 连接失败 | Bug/P2 | 同 #7051，附带完整 stderr，疑似打包/参数传递回归 | 💬 3 评论 | [Link](https://github.com/QwenLM/qwen-code/issues/7056) |
| **#4877** | OpenWork 无法区分同模型不同提供商 | Bug/P2 | **配置冲突**：`modelProviders.openai[]` 同名模型（如 `glm-5`）来源混淆 | 💬 6 评论，长期遗留 | [Link](https://github.com/QwenLM/qwen-code/issues/4877) |
| **#6996** | 自定义 OpenAI 兼容提供商报 generic “Connection error” | Bug/P2 | **错误丢失**：真实原因（DNS/证书/超时）被吞噬，排查极难 | 💬 3 评论 | [Link](https://github.com/QwenLM/qwen-code/issues/6996) |
| **#7017** | 安全：配对/白名单状态未按工作区隔离 | Security/P1 | **跨工作区泄露**：`PairingStore` 全局键导致工作区 A 可访问工作区 B 通道 | 💬 2 评论，PR #7065 已修 | [Link](https://github.com/QwenLM/qwen-code/issues/7017) |
| **#7004** | 统一路径显示工具：消除 9 处不一致格式化 | Feature/P3 | **DX 提升**：相对路径、前缀合并、{a.ts,b.ts} 分组，贯穿 grep/glob/工具摘要 | 💬 3 评论，关联 #7007-#7009 | [Link](https://github.com/QwenLM/qwen-code/issues/7004) |
| **#7061** | 任务完成后 Sticky 面板残留 | Bug/P2 | **UI 误导**：空闲时仍显示 “◐ 进行中”，用户误以为仍在运行 | 💬 1 评论，PR #7062 已修 | [Link](https://github.com/QwenLM/qwen-code/issues/7061) |
| **#7040** | RFC: 可靠自动记忆路线图——回溯/可信写入/生命周期治理 | Feature/P2 | **长期能力建设**：从“后台直写”演进为“候选提取→校验→暂存→审核→入库”流水线 | 💬 1 评论，架构级设计 | [Link](https://github.com/QwenLM/qwen-code/issues/7040) |
| **#7002** | CentOS 7 GLIBC_2.27/GLIBCXX_3.4.21 不兼容 | Bug/P2 | **部署受限**：老旧 Linux 无法运行，需提供 glibc 兼容构建或静态链接方案 | 💬 3 评论 | [Link](https://github.com/QwenLM/qwen-code/issues/7002) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心价值 | 关联 Issue | 链接 |
|---|------|------|----------|------------|------|
| **#7065** | fix(channels): 配对/白名单按工作区隔离 | Open | **安全修复**：`PairingStore` 引入 `workspace cwd + sha256` 命名空间，彻底隔离多工作区通道权限 | #7017 | [Link](https://github.com/QwenLM/qwen-code/pull/7065) |
| **#7003** | feat(serve): 补全旧会话工作区遥测目录 | Open | **可观测性**：48 条 legacy 路由声明式遥测，handler-resolved 41/primary-bound 7 归属清晰 | #6378 设计依赖 | [Link](https://github.com/QwenLM/qwen-code/pull/7003) |
| **#6931** | fix(cli): 收紧 VP 模式控件占位、修复 Shell 指示器重叠 | Open | **渲染稳定性**：5 处 VP 模式布局修复，防止面板挤占对话区 | — | [Link](https://github.com/QwenLM/qwen-code/pull/6931) |
| **#7064** | feat(web-shell): 会话历史分页恢复 | Open | **大历史性能**：首屏近期记录 + 滚动懒加载，游标稳定、工具序列保序 | — | [Link](https://github.com/QwenLM/qwen-code/pull/7064) |
| **#7018** | feat(web-shell): 技能管理页面 | Open | **Web Shell 功能对齐**：搜索/筛选/启用禁用/详情/引用，技能成一级入口 | — | [Link](https://github.com/QwenLM/qwen-code/pull/7018) |
| **#6937** | feat(cli): VP 模式鼠标选中复制 | Open | **终端交互补齐**：拖拽/双击/三击选中，释放自动复制，体验对齐现代终端 | — | [Link](https://github.com/QwenLM/qwen-code/pull/6937) |
| **#7052** | fix(core): 单轮工具调用上限自适应 | Open | **防卡死**：根据上下文窗口动态调整 `maxToolCalls`，避免长链路截断或无限循环 | — | [Link](https://github.com/QwenLM/qwen-code/pull/7052) |
| **#7060** | feat(ui): `exit_plan_mode` 确认框支持全文阅读 | Open | **Plan 审查体验**：`o` 键在编辑器打开完整 markdown，对话框保持打开 | #7001 | [Link](https://github.com/QwenLM/qwen-code/pull/7060) |
| **#7054** | feat(web-shell): Git 状态芯片/可视 diff/侧栏状态 | Open | **Git 感知**：脏状态/领先落后/暂存区可视化，侧栏同步展示 | — | [Link](https://github.com/QwenLM/qwen-code/pull/7054) |
| **#7039** | fix(core): 空工具结果续写重试 | Open | **Agent 稳健性**：把 “仅含 thought/placeholder” 的续写视为无效流并重试，修复静默停顿 | #7034 | [Link](https://github.com/QwenLM/qwen-code/pull/7039) |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 社区呼声强度 | 备注 |
|----------|---------------|--------------|------|
| **多工作区守护进程原生支持** | #6378, #7014, #7015, #7003, #7065 | ⭐⭐⭐⭐⭐ | 核心架构重构，设计讨论最密集，PR 已开始落地 |
| **VS Code / IDE 深度集成稳定性** | #7051, #7056, #7044 | ⭐⭐⭐⭐ | ACP 协议、Electron 参数、跨平台打包问题集中爆发 |
| **模型提供商管理增强** | #4877, #6996, #7023 | ⭐⭐⭐ | 同名模型区分、连接错误透传、模型切换会话保活 |
| **Web Shell 功能对齐 CLI/桌面端** | #7018, #7054, #7064, #6561, #

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*