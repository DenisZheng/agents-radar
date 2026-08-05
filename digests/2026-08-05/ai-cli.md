# AI CLI 工具社区动态日报 2026-08-05

> 生成时间: 2026-08-05 01:54 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-08-05

---

## 1. 生态全景

当前 AI CLI 工具生态呈现 **“头部厂商强化基建、二梯队攻坚差异化、全员向 Agent 编排与企业级落地收敛”** 的态势。  
核心厂商（Anthropic、OpenAI、Google、GitHub）将迭代重心从“功能堆砌”转向 **安全隔离、Hook/插件工程化、跨平台稳定性、计费合规** 等生产级硬指标；新兴玩家（Moonshot、Qwen、DeepSeek、OpenCode、Pi）则在 **长上下文鲁棒性、ACP/MCP 协议标准化、本地化/私有化部署、构建工程化** 上寻找破局点。  
**“Agent 可靠性”** 取代“模型智力”成为社区第一痛点，**“协议互操作”** 成为生态护城河新战场。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新量(24h) | PR 更新量(24h) | Release 情况 | 核心研发焦点 |
|------|-------------------|----------------|--------------|--------------|
| **Claude Code** | ~30+ (Top 10 热度极高) | 10+ (合并/提交) | **v2.1.222** (安全隔离修复) | Worktree 安全、Hook 工程化、Windows/MSIX 稳定性 |
| **OpenAI Codex** | 50 (Top 30) | 20+ | 4 个 Alpha 版 (Rust 端) | **Windows 危机干预**、Linux 桌面呼声、基建硬化(缓存/认证/并发) |
| **Gemini CLI** | 10+ (P1 级集中) | 10+ | 无新版 | **安全漏洞修复**、Agent 编排可靠性、评测基建、ACP 扩展 |
| **GitHub Copilot CLI** | 43 | 2 | **v1.0.79-1** (Breaking Change) | MCP 兼容性、企业策略校验、配置迁移、安全基线修复 |
| **Kimi Code CLI** | 6 | 3 | 无新版 (v0.31.1) | **长上下文崩溃**、Windows 稳定性、ACP 协议完善 |
| **OpenCode** | 10+ (DeepSeek 相关集中) | 10+ | **v1.18.13** (TUI/Desktop 体验) | DeepSeek v4 Flash 故障排查、AI Provider 语义修正、OAuth 重构、性能优化 |
| **Pi** | 10+ (企业级/Windows/TUI) | 10+ | 无新版 | Copilot Enterprise 兼容、Windows 收敛、TUI 渲染重构、Server Session Backend |
| **Qwen Code** | 10+ | 10+ | **v0.21.5 稳定版** + Preview/Nightly | Electron→Tauri 迁移、工具执行追踪、MCP 重连语义、会话截断恢复 |
| **DeepSeek TUI (CodeWhale)** | 10+ (含 6 个 Epic) | 10+ | v0.9.4 Release Train (#5135) | **构建系统重构(单体拆解/依赖瘦身)**、Runtime API 全面开放、MCP Registry、ACP 工具调用 |

> **活跃度梯队**：  
> **第一梯队 (高频迭代/高社区声量)**：Claude Code, OpenAI Codex, Gemini CLI, OpenCode, DeepSeek TUI  
> **第二梯队 (稳健推进/垂直深耕)**：GitHub Copilot CLI, Qwen Code, Pi  
> **第三梯队 (关键阻塞待突破)**：Kimi Code CLI

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求与信号 |
|------|----------|----------------|
| **Agent 编排可靠性与可观测性** | **Claude Code** (#21378 内存泄漏, #64706 effort 继承), **OpenAI Codex** (#30408 MCP 泄漏, #28719 子代理配置), **Gemini CLI** (#22323 Subagent 误报, #21409 挂死), **OpenCode** (#38723 run 挂起), **DeepSeek TUI** (#5242 Checkpoint Resume), **Qwen Code** (#8102 确定性边界) | 子代理状态汇报准确、长任务 Checkpoint/Resume、Token/成本归因、运行时熔断与审计 |
| **MCP / ACP 协议生态标准化** | **GitHub Copilot CLI** (#4370 server/discover, #4361 斜杠命令), **Gemini CLI** (#28664 MCP 同意提示, #28681 SGLang), **OpenCode** (#34498 SKILL.md 兼容), **Pi** (#7571 Cortecs Provider, #7610 LLM Gateway), **DeepSeek TUI** (#5238 Registry 发现, #5225 ACP 工具调用), **Qwen Code** (#8482 重连语义, #8550 SSE 挂起) | 协议兼容性兜底、Registry 发现机制、工具调用标准化、认证传递、多传输支持 |
| **跨平台原生体验 (Windows 首位)** | **Claude Code** (#83243 Bash 失效, #81275 GPU 崩溃), **OpenAI Codex** (#33776 进程风暴, #30009 apply_patch), **GitHub Copilot CLI** (#4328 键盘映射, #4026 崩溃), **Kimi Code CLI** (#2587 异常退出, #2584 IME), **Pi** (#7547 运行方式收敛, #6817 find 路径), **Qwen Code** (#8519 tmux 闪屏) | 原生 Shell 集成、GPU/渲染栈兼容、IME/键盘编码、进程管理、路径分隔符、安装分发 |
| **企业级治理：配额/计费/策略/合规** | **OpenCode** (#16017 用量 API 126👍), **GitHub Copilot CLI** (#4349 策略枚举拒绝, #4005 计费实体), **Claude Code** (#82529 未授权升级), **Pi** (#7508 OAuth 锁冻结), **DeepSeek TUI** (#5241 Pricing 503), **Qwen Code** (#8051 守护进程配额) | 可编程配额 API、策略下发兼容、计费透明度、审计日志、数据脱敏 |
| **长上下文/会话工程化** | **Claude Code** (#74260 思考块丢失, #82131 Autocompact), **Gemini CLI** (#24353 评测体系, #26522 Memory 重试), **Kimi Code CLI** (#2586 500K 崩溃, #1283 Memory), **Qwen Code** (#8356 中断丢失, #8414 截断恢复), **DeepSeek TUI** (#5244 窗口静默回退) | 上下文压缩/摘要策略、会话持久化与恢复、记忆系统工程化、Behavioral Evals 回归保障 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 差异化护城河 |
|------|----------|--------------|--------------|--------------|
| **Claude Code** | **头部闭源标杆，主打“开箱即用的 Agentic 编码”** | TypeScript/Node 架构，紧绑定自家模型，重 Hook/插件扩展性 | 追求极致体验、愿付费的专业开发者/团队 | 模型-工具深度共进化、Worktree 隔离安全模型、成熟的 Hook 生态 |
| **OpenAI Codex** | **云原生沙箱 + 多模型路由，强调“异步并行任务”** | Rust 核心 + WASM/容器沙箱，支持 BYOK/多云，重 CLI/TUI 双端 | 需要大规模并发、多模型对比、企业合规的团队 | 云沙箱隔离、原生 GitHub 集成、多模型统一路由、ACP 先行者 |
| **Gemini CLI** | **Google 生态集成 + 企业级可观测/安全基建** | Go/TypeScript 混合，重评测基建、安全审计、ACP Server 化 | Google Cloud 用户、强合规/可审计需求的企业 | Behavioral Evals 体系、Cortecs/安全扫描集成、大规模上下文管理 |
| **GitHub Copilot CLI** | **GitHub 原生工作流深度绑定，企业级策略下发** | Node/TypeScript，依托 GitHub Platform (Copilot/GHE/ACP) | 已投入 GitHub 生态的企业/组织 | 组织级策略/计费/审计一体化、Codespaces/Actions 无缝衔接 |
| **Kimi Code CLI** | **超长上下文 (Moonshot 模型优势) + 中文场景深度适配** | Node/TypeScript，重长上下文鲁棒性、ACP 协议、远程接管 | 中文开发者、长文档/大代码库场景、移动办公需求 | 2M+ 上下文窗口原生支持、远程控制愿景、本地化体验 |
| **OpenCode** | **多模型聚合网关 + 订阅制托管服务** | Go 核心，自建模型路由/计费/认证体系，重 Desktop/TUI | 想用最佳模型但不想管 Key/账单的个人/团队 | 统一订阅聚合主流模型、模型自动路由、桌面端原生体验 |
| **Pi** | **极客/高级用户的“可编程 AI 终端”，主打可定制性** | Rust (TUI) + TypeScript (Core)，重键盘驱动、脚本化、本地优先 | 追求极致控制力、终端原住民、自建模型/隐私敏感者 | 纯本地运行、高度可配置 TUI/Keybind、Server Session Backend 多端同步 |
| **Qwen Code** | **阿里云/通义生态入口，双端架构 + 国际化** | Rust (Core/Tauri) + TypeScript (CLI/Web)，重多模态、MCP、Headless | 阿里云用户、多模态场景、需要 Web/桌面/CLI 三端统一 | Electron→Tauri 迁移领跑、内联图片/多模态终端、韩语/国际化文档 |
| **DeepSeek TUI (CodeWhale)** | **开源社区驱动的“本地优先 IDE 级 TUI”，激进重构中** | **纯 Rust 单体 (682k 行) 正在拆解**，Runtime API 优先、ACP/MCP 全支持 | Rust 爱好者、自建模型/私有化部署、贡献者驱动型用户 | 完全开源/本地化、Runtime API 赋能第三方客户端、MCP Registry 零配置发现 |

---

## 5. 社区热度与成熟度评估

| 维度 | 高热度/高成熟 | 快速迭代/高潜力 | 关键阻塞/待突破 |
|------|---------------|-----------------|-----------------|
| **Issue 热度 (👍/评论)** | Claude Code (#13378 72👍), OpenAI Codex (#11023 917👍), OpenCode (#16017 126👍), GitHub Copilot CLI (#1709 29👍) | DeepSeek TUI (Epic 级讨论), Gemini CLI (P1 安全/Agent), Pi (企业兼容) | Kimi Code CLI (#2586 长上下文崩溃 0👍但 Critical) |
| **PR 质量与架构投入** | **DeepSeek TUI** (6 个 Epic 重构构建系统), **OpenCode** (Provider 语义修正/OAuth 重构/性能 -75% 内存), **Gemini CLI** (安全漏洞/评测框架/ACP) | **Claude Code** (Hook 工具链工程化), **Qwen Code** (Tauri 迁移/MCP 语义), **Pi** (Server Session Backend/SQLite 测试) | **GitHub Copilot CLI** (仅 2 PR, 疑似内部分支主力), **Kimi Code CLI** (仅 3 PR, 修复偏战术) |
| **Release 节奏** | OpenAI Codex (4 Alpha/天), Claude Code (修复版), OpenCode (v1.18.13), Qwen Code (Stable + Preview + Nightly 三线) | DeepSeek TUI (v0.9.4 Train 77 commits), Gemini CLI (无版本但 PR 密集) | GitHub Copilot CLI (Breaking Change 无迁移工具), Kimi Code CLI (无新版), Pi (无新版) |
| **成熟度信号** | **企业级落地特性完备**：Claude Code, GitHub Copilot CLI, OpenCode, Gemini CLI | **核心架构重构期**：DeepSeek TUI, Pi, Qwen Code (Tauri) | **关键路径阻塞**：Kimi Code CLI (长上下文/Windows), OpenAI Codex (Windows 可用性) |

---

## 6. 值得关注的趋势信号

### 6.1 **“协议即平台”战略显性化**
- **ACP (Agent Client Protocol)** 成为连接 CLI 核心与 IDE/桌面/移动端的**标准接口**。GitHub Copilot CLI、OpenAI Codex、Gemini CLI、DeepSeek TUI、Pi、Qwen Code 均在同步实现 ACP Server 能力。
- **MCP (Model Context Protocol)** 从“工具调用”进化为“服务发现+生命周期管理”：Registry 发现、认证传递、SSE/stdio 多传输、热重载元数据。
- **启

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-05）

---

## 1. 热门 Skills 排行（高关注度 PR）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator` 评估修复 | 修复 `run_eval.py` 误报 0% recall，导致描述优化循环失效；含 Windows 流读取、触发检测、并行 worker 修复 | 核心工具链阻塞性 Bug，10+ 独立复现，直接影响 Skill 质量迭代 | 🟢 OPEN |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | AI 生成文档的排版质量控制：防孤行、寡妇段、编号错位 | 通用刚需，解决“Claude 生成文档排版差”的长期痛点 | 🟢 OPEN |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | 机械性文件验证 + 四维推理质量门限（损害优先级），通用于任意项目/技术栈 | 元技能创新，主打“交付前自审”，社区对质量门限机制高度关注 | 🟢 OPEN |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | 全栈测试模式：Testing Trophy、AAA、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 覆盖面最广的测试技能，填补“测试最佳实践”空白 | 🟢 OPEN |
| 5 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | 色彩专家知识库：命名系统、色空间选型表、无障碍对比度、配色方案生成 | 设计/前端高频需求，将专业色彩知识结构化为可调用技能 | 🟢 OPEN |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) 创建、填充、解析、转 HTML，配套 `pyxel-mcp` | 开放文档格式标准化需求，配合 MCP 生态扩展 | 🟢 OPEN |
| 7 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` / `skill-security-analyzer` | 两大元技能：质量五维评分（结构/文档/测试/安全/可维护）+ 安全审计（注入/越权/泄露） | 社区呼声最高的“技能审技能”，推动生态自治 | 🟢 OPEN |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | 规划文件生命周期管理：创建→执行→归档/清理，解决制品堆积无清理机制 | 来源于 Issue #1417 实战痛点，工程化治理刚需 | 🟢 OPEN |

> **注**：上述均为 OPEN 状态，多数为 2026 年 Q2–Q3 新建，反映社区近期活跃方向。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 | 热度指标 |
|----------|------------|----------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) (43 评论) | 社区技能以 `anthropic/` 命名空间分发，冒充官方技能，导致权限滥用风险 | 🔥🔥🔥🔥🔥 |
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) (16 评论, 8 👍) | Claude.ai 原生支持组织内技能库/分享链接，避免手动下载-上传流程 | 🔥🔥🔥🔥 |
| **核心工具链稳定性** | [#556](https://github.com/anthropics/skills/issues/556) (12 评论, 7 👍)<br>[#1169](https://github.com/anthropics/skills/issues/1169)<br>[#1061](https://github.com/anthropics/skills/issues/1061) | `run_eval.py`/`run_loop.py` 在 Windows/跨平台完全失效，阻断技能优化闭环 | 🔥🔥🔥🔥 |
| **技能管理与去重** | [#189](https://github.com/anthropics/skills/issues/189) (6 评论, 9 👍)<br>[#62](https://github.com/anthropics/skills/issues/62) (10 评论) | 插件包重复安装导致上下文污染、技能消失/同步异常 | 🔥🔥🔥 |
| **上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487)<br>[#1329](https://github.com/anthropics/skills/issues/1329) | 单技能注入 156k tokens 耗尽上下文；需符号化压缩记忆技能 | 🔥🔥🔥 |
| **MCP 生态互通** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skills 暴露为标准 MCP 接口，统一调用协议 | 🔥🔥 |
| **企业级集成** | [#29](https://github.com/anthropics/skills/issues/29)<br>[#1175](https://github.com/anthropics/skills/issues/1175) | Bedrock 兼容、SharePoint 权限内嵌技能 | 🔥🔥 |
| **元技能/治理类** | [#412](https://github.com/anthropics/skills/issues/412) (已关闭)<br>[#1385](https://github.com/anthropics/skills/issues/1385) | Agent 治理、推理质量三闸管线（预校准→对抗审查→交付验证） | 🔥🔥 |

---

## 3. 高潜力待合并 Skills（评论活跃、接近落地）

| PR | Skill | 合并信号 | 预估落地窗口 |
|----|-------|----------|--------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` 评估全链路修复 | 阻塞性 Bug、多 PR 并行修复（#1099、#1050、#1323、#1261）、官方工具链核心 | **极高**（1–2 周内） |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | 通用刚需、无架构争议、实现完整 | **高**（2–3 周） |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | 覆盖面广、社区长期缺位、作者持续维护至 4 月底 | **高**（3–4 周） |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | 元技能定位独特、配合 #492 安全治理诉求 | **中高**（需配合命名空间治理） |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | 创新质量门限模式、与 #1385 提案呼应、通用性强 | **中高**（需设计评审） |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | 专业知识结构化完整、设计/前端高频、无依赖 | **中**（4–6 周） |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | 来源实战 Issue、工程化治理刚需、近期新建活跃 | **中**（4–6 周） |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是：修复核心工具链（skill-creator 评估/跨平台）的阻塞性缺陷，建立技能分发的安全信任边界与组织级共享机制，并向“元技能治理（质量/安全/审计）”与“上下文窗口工程化”两大纵深方向演进。**

---

**数据说明**：基于 `anthropics/skills` 仓库前 50 条 PR（按评论数）与前 50 条 Issue（按评论数），截止 2026-08-05。PR 评论数字段为 `undefined`，以列表顺序与 Issue 热度交叉推断关注度。

---

# Claude Code 社区动态日报 | 2026-08-05

---

## 1. 今日速览

- **v2.1.222 发布**：修复 worktree 隔离会话的安全漏洞（防止破坏性 git 命令作用于主检出）与 PreToolUse auto-allow hooks 在后台任务中绕过工具限制的问题。
- **社区高热 Issue 聚焦**：图像处理 API 报错消耗配额（#62466，30 评论）、自适应思考模式下助手文本块静默丢失（#74260，24 评论）、PDF 读取依赖未文档化（#23704，15 评论）、2 空格缩进/80 列硬换行破坏复制粘贴（#13378，72 👍）。
- **PR 活跃度高**：过去 24 小时合并/提交 10 个 PR，集中于插件开发工具链修复（frontmatter 解析、hook 测试、脚本健壮性）与符号链路径展开修复。

---

## 2. 版本发布

### v2.1.222 (2026-08-05)
| 变更类型 | 详情 |
|----------|------|
| **安全/隔离修复** | Worktree 隔离会话及其子代理不再能对主检出执行破坏性 git 命令；隔离现已覆盖文件编辑与 Bash（所有会话类型） |
| **Hook 安全修复** | 修复 PreToolUse auto-allow hooks 在后台代理任务中绕过工具限制的问题 |

> 🔗 [Release v2.1.222](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 热度 | 核心问题 | 为什么重要 |
|---|-------|------|------|----------|------------|
| 1 | [#62466](https://github.com/anthropics/claude-code/issues/62466) | Bug | 30 评论 · 20 👍 | “Image couldn't be processed” API 错误反复出现并消耗使用配额 | 直接影响计费与可用性，用户无法规避，阻塞多模态工作流 |
| 2 | [#74260](https://github.com/anthropics/claude-code/issues/74260) | Bug | 24 评论 · 15 👍 | 自适应思考模式下，助手中间输出的 text block 被后续 thinking 覆盖，既不渲染也不写入 transcript JSONL | 导致对话历史不完整，调试/审计困难，且仅在 `claude-fable-5` 复现 |
| 3 | [#13378](https://github.com/anthropics/claude-code/issues/13378) | Bug/UX | 15 评论 · **72 👍** | 默认 2 空格缩进 + 80 列硬换行破坏代码复制粘贴，无配置关闭 | 高赞长期痛点，影响所有终端用户的日常编码体验 |
| 4 | [#23704](https://github.com/anthropics/claude-code/issues/23704) | Bug/Docs | 15 评论 · 19 👍 | Read 工具宣称支持 PDF，实则依赖 `poppler-utils` 且未文档化、未自动检测 | 容器/精简环境下静默失败，开发者排查成本高 |
| 5 | [#21108](https://github.com/anthropics/claude-code/issues/21108) | Bug/Security | 13 评论 · 15 👍 | 启动即访问 git origin（未执行任何命令） | 隐私/安全顾虑，尤其在离线/气隙环境 |
| 6 | [#21378](https://github.com/anthropics/claude-code/issues/21378) | Bug/Perf | 8 评论 · 12 👍 | **严重内存泄漏**：20 分钟占用 15 GB RAM 导致冻结 (WSL2) | 导致长会话不可用，阻塞大型重构任务 |
| 7 | [#74260](https://github.com/anthropics/claude-code/issues/74260) | Bug | 24 评论 · 15 👍 | 同 #2，重复列出以示权重 | — |
| 8 | [#81275](https://github.com/anthropics/claude-code/issues/81275) | Bug/Platform | 11 评论 | Windows MSIX 浏览器面板打开即崩溃 (GPU 进程退出码 0x60C201E) | 桌面端核心功能不可用，涉及 Intel/NVIDIA/WARP 多渲染器 |
| 9 | [#64706](https://github.com/anthropics/claude-code/issues/64706) | Bug/Agents | 5 评论 · 5 👍 | Agent 工具忽略子代理 frontmatter 中的 `effort:`，统一继承全局 `effortLevel` | 子代理成本控制失效，影响多代理编排精度 |
| 10 | [#83243](https://github.com/anthropics/claude-code/issues/83243) | Bug/Platform | 2 评论 | Windows v2.1.220 Bash 工具执行最简单命令即报 “unexpected EOF...line 86” | Windows 原生体验阻断，新版本回归 |

> ⚠️ **已关闭但值得关注**：#55875 (VS Code 通知 hook 不触发)、#53134 (Windows MCP 双重生成)、#83997 (浏览器面板合帧失败)、#83991 (symlink 路径匹配失败)

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响范围 |
|---|----|------|----------|----------|
| 1 | [#84004](https://github.com/anthropics/claude-code/pull/84004) | Open | 修复插件 frontmatter 解析：仅解析首个 YAML 块，拒绝缺少首尾标记的文件 | 插件开发工具链稳健性 |
| 2 | [#84003](https://github.com/anthropics/claude-code/pull/84003) | Open | 脚本顶层失败正确传播退出码（原 `.catch(console.error)` 吞掉错误） | CI/维护脚本可靠性 |
| 3 | [#83999](https://github.com/anthropics/claude-code/pull/83999) | Open | `gh` wrapper 校验需值的 flag（如 `--limit`）是否缺参 | 释放自动化脚本健壮性 |
| 4 | [#83995](https://github.com/anthropics/claude-code/pull/83995) | Open | `--add-label`/`--remove-label` 必须接 label 名，防止吞噬后续参数 | Issue 自动化脚本正确性 |
| 5 | [#83993](https://github.com/anthropics/claude-code/pull/83993) | Open | 禁止 `comment-on-duplicates.sh` 自引用（同一 issue 标记为自身重复） | 避免自动化死循环 |
| 6 | [#83992](https://github.com/anthropics/claude-code/pull/83992) | Open | `test-hook.sh` 新增 `--expect allow|deny|ask`，校验 hook 决策而非仅执行 | Hook 开发测试覆盖度提升 |
| 7 | [#83990](https://github.com/anthropics/claude-code/pull/83990) | Open | `test-hook.sh` 显式检测 `jq` 依赖，缺失时给出明确报错 | 开发者体验/排障 |
| 8 | [#83890](https://github.com/anthropics/claude-code/pull/83890) | Open | 新增 `pylint.yml` | Python 代码规范统一 |
| 9 | [#83374](https://github.com/anthropics/claude-code/pull/83374) | Open | 文档：在 Hook 开发技能中补充 `MessageDisplay` 流式语义 | 插件开发者文档完善 |
| 10 | [#83738](https://github.com/anthropics/claude-code/pull/83738) | Open | 修复 `claude install` 创建的 symlink 使用字面 `%h` 而非展开 `$HOME` | Linux 安装体验 |

> 💡 **趋势**：近期 PR 高度集中于 **插件/Hook 开发工具链**（前 7 个均为 `plugin-dev` 或 `scripts`），显示内部正在强化扩展生态的工程化基础设施。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 方向 | 代表 Issue | 社区呼声特征 |
|------|------------|--------------|
| **核心稳定性/性能** | #21378 (内存泄漏)、#82131 (Autocompact 抖动)、#82144 (技能注入膨胀) | 高 👍、长周期、阻塞长会话/大项目 |
| **多模态/图像处理** | #62466 (API 报错吃配额) | 计费敏感、无规避手段 |
| **Windows/桌面端原生体验** | #81275 (浏览器崩溃)、#83130 (WebGPU 崩溃)、#83243 (Bash 失效)、#74902 (Chrome profile 识别) | MSIX 打包相关、GPU 栈兼容性、原生 shell 集成 |
| **Hook/代理编排增强** | #79953 (Workflow 内部 agent 逃逸 hook)、#64706 (effort 前置元数据被忽略)、#80834 (后台 Bash 通知失真) | 需要更细粒度的运行时预算与拦截能力 |
| **PDF/文档读取完善** | #23704 (poppler 依赖未文档)、#66563 (误报加密) | 企业/容器环境常见、文档与实现脱节 |
| **终端/UX 细节** | #13378 (缩进/换行)、#64474 (全屏 TUI Bash 展开为空) | 高赞长期、影响日常编码舒适度 |
| **账号/计费/项目管理** | #82529 (未授权升级)、#81628 (项目标签源)、#83973 (账号切换残留项目) | 计费信任、多仓/多账号

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-08-05

---

## 1. 今日速览

- **版本迭代加速**：过去 24 小时发布 4 个 Rust 端 alpha 版本（v0.147.0-alpha.6.1 → alpha.7），显示核心引擎正在高频小步迭代。
- **Windows 平台痛点集中爆发**：Top 30 Issues 中近 40% 涉及 Windows 性能/稳定性（WMI 轮询、PowerShell 进程风暴、apply_patch 失败、鼠标卡顿），已成社区最大共识痛点。
- **Linux 桌面端呼声最高**：#11023（Linux 桌面应用）以 917 👍、198 条评论稳居榜首，跨平台需求远超其他功能性增强。

---

## 2. 版本发布

| 版本 | 类型 | 关键信息 |
|------|------|----------|
| `rust-v0.147.0-alpha.7` | Alpha | 最新内核构建，含前三版修复的累积更新 |
| `rust-v0.147.0-alpha.6.4` | Alpha | 修复版本 |
| `rust-v0.147.0-alpha.6.3` | Alpha | 修复版本 |
| `rust-v0.147.0-alpha.6.1` | Alpha | 修复版本 |

> 💡 **说明**：均为 Rust 侧（CLI/后端/沙箱）预发布，无正式稳定版推送。建议关注后续 `0.147.0` 正式版发布说明。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心诉求 | 热度 | 关键信号 |
|---|-------|----------|------|----------|
| 1 | [#11023](https://github.com/openai/codex/issues/11023) **Linux 桌面应用** | 原生 Linux Desktop App | 👍 917 \| 💬 198 | **全仓最高热度**；Mac 功耗问题驱动用户迁移 Linux，跨平台成刚需 |
| 2 | [#25719](https://github.com/openai/codex/issues/25719) **macOS syspolicyd/trustd 失控** | 修复后台进程 CPU/内存暴涨 | 👍 387 \| 💬 80 | 导致 Mac 续航崩塌，阻碍主力机使用 |
| 3 | [#9203](https://github.com/openai/codex/issues/9203) **恢复 `/undo` 命令** | TUI 撤销未提交变更 | 👍 372 \| 💬 68 | 核心工作流缺失，多次被误删文件“咬”到 |
| 4 | [#33776](https://github.com/openai/codex/issues/33776) **Windows taskkill/conhost 风暴** | 进程泄漏导致 WMI/DWM 退化 | 👍 26 \| 💬 29 | 单会话残留 287 进程，系统级影响 |
| 5 | [#25453](https://github.com/openai/codex/issues/25453) **Windows 每秒轮询 powershell** | 高 CPU 占用 | 👍 6 \| 💬 23 | 根因同 #33776，轮询机制需重构 |
| 6 | [#30408](https://github.com/openai/codex/issues/30408) **MCP 进程泄漏 9+ GB RSS** | 线程关闭不清理子进程 | 👍 6 \| 💬 22 | 长跑会话内存失控，影响稳定性 |
| 7 | [#30009](https://github.com/openai/codex/issues/30009) **Windows apply_patch 失败** | 沙箱权限/路径问题 | 👍 10 \| 💬 30 | 直接阻断代码编辑能力 |
| 8 | [#16857](https://github.com/openai/codex/issues/16857) **思考时 GPU 占用高** | 无用动画导致 | 👍 46 \| 💬 38 | 易优化、体感强的性能问题 |
| 9 | [#28719](https://github.com/openai/codex/issues/28719) **子代理忽略模型/推理设置** | 继承父线程配置而非自有配置 | 👍 6 \| 💬 5 | 多代理编排核心缺陷 |
| 10 | [#21079](https://github.com/openai/codex/issues/21079) **CLI 会话接入桌面历史** | 统一历史记录视图 | 👍 13 \| 💬 15 | 工作流连贯性需求，已支持 Claude 导入 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#37000](https://github.com/openai/codex/pull/37000) | 🔧 缓存优化 | 插件加载间共享技能缓存，按文件系统+插件快照键隔离 | 启动速度、插件生态 |
| 2 | [#36998](https://github.com/openai/codex/pull/36998) | ✨ 功能增强 | 工具搜索支持延迟加载的自定义工具（freeform tools） | MCP/工具生态扩展性 |
| 3 | [#36993](https://github.com/openai/codex/pull/36993) | 🔧 分页兼容 | `thread/read` 支持 `includeTurns` 读取分页历史 | 长会话性能、历史完整性 |
| 4 | [#36992](https://github.com/openai/codex/pull/36992) | 🏗 架构 | 模型目录缓存可注入，支持自定义缓存实现 | 多提供商、离线/企业场景 |
| 5 | [#36990](https://github.com/openai/codex/pull/36990) | 🧹 清理 | 移除遗留协作模式 `PairProgramming`/`Execute` | 代码瘦身、模式简化 |
| 6 | [#36987](https://github.com/openai/codex/pull/36987) | ⚡ 并发 | exec-server 新增 `--concurrent-requests` 可选并发派发 | 高负载吞吐、健康检查不阻塞 |
| 7 | [#36986](https://github.com/openai/codex/pull/36986) | 🔐 认证 | 进程级 PSP 路由，ChatGPT 请求附带 `oai-chat-psp` cookie | 认证链路稳定性 |
| 8 | [#36983](https://github.com/openai/codex/pull/36983) | 🔐 MCP 认证 | 受信 staging MCP 服务器保留 ChatGPT 认证 | MCP 生产化部署 |
| 9 | [#36981](https://github.com/openai/codex/pull/36981) | ☁️ 多云 | Bedrock 启用远程压缩（v1 协议） | 企业级模型成本控制 |
| 10 | [#36967](https://github.com/openai/codex/pull/36967) | 🛡 健壮性 | 插件安装跳过 symlink，避免拒装 | 插件分发可靠性 |

> 📌 **趋势**：近期 PR 多为 **基础设施硬化**（缓存、并发、认证、分页、多云），而非用户可见新功能，暗示团队在为大规模/企业化铺路。

---

## 5. 功能需求趋势（从 50 个 Issues 提炼）

| 趋势方向 | 代表 Issues | 社区信号强度 |
|----------|-------------|--------------|
| **跨平台原生体验** | #11023 (Linux)、#25719 (macOS)、#33776/25453/30009 (Windows) | ⭐⭐⭐⭐⭐ **最高** —— 三大桌面端均有阻断级问题 |
| **会话/历史管理增强** | #9203 (undo)、#21079 (CLI历史合并)、#33589 (删除对话) | ⭐⭐⭐⭐ 核心工作流缺口 |
| **多代理/子代理编排** | #28719 (配置继承)、#34700 (模型拒绝)、#34591 (面板回归) | ⭐⭐⭐ 新范式落地不完善 |
| **MCP 生态成熟度** | #19425 (工具未暴露)、#30408 (进程泄漏)、#36983 (认证传递) | ⭐⭐⭐ 基建层仍在补齐 |
| **性能/资源占用治理** | #16857 (GPU)、#30408 (内存)、#25453/36025/34158 (CPU/输入延迟) | ⭐⭐⭐⭐ Windows 尤甚 |
| **沙箱/文件系统权限** | #30009 (apply_patch)、#34889 (ACL 修复超时) | ⭐⭐⭐ Windows 沙箱机制待打磨 |

---

## 6. 开发者关注点总结

| 痛点类别 | 高频反馈 | 典型引述 |
|----------|----------|----------|
| **Windows 可用性危机** | WMI/轮询导致系统级卡顿、进程泄漏、apply_patch 失败、登录认证断裂 | “关闭 Codex 进程树后鼠标才恢复正常” (#34158) |
| **Mac 能耗/后台失控** | `syspolicyd`/`trustd` 持续占满 CPU，续航从 10h 降至 2h | “几乎无法在 Mac 笔记本上使用” (#11023 引用 #10432) |
| **撤销/回滚机制缺失** | 无 `/undo`、无删除对话、子代理改动不可逆 | “多次被咬，每次都想念 /undo” (#9203) |
| **子代理配置不隔离** | 模型、reasoning、工具集被强制继承父线程 | “忽略设置已久，能否最终修复？” (#28719) |
| **MCP 进程生命周期失控** | 线程归档不杀进程，RSS 增长无上限 | “9+ GB RSS，需手动 pkill” (#30408) |
| **Linux 一等公民缺位** | 仅有 Web/CLI，无原生桌面集成 | “愿在 Linux 台式机上获得完整体验” (#11023) |

---

## 📎 附：数据来源
- Releases: `github.com/openai/codex/releases` (最近 24h 4 条)  
- Issues: `github.com/openai/codex/issues` (最近 24h 更新 50 条，展示 Top 30)  
- PRs: `github.com/openai/codex/pulls` (最近 24h 更新 50 条，展示 Top 20)  

> 报告生成时间：2026-08-05 08:00 UTC | 下一期预计：2026-08-06 同步发布

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-05

---

## 1. 今日速览
**核心动态**：今日无新版本发布，社区活动聚焦于 **安全修复**、**Agent 稳定性治理** 与 **评测基建完善**。重点包括：修复 Shell 变量扩展绕过漏洞（GHSA-wpqr-6v78-jr5g）、推进 Subagent 与 Browser Agent 的挂起/误报问题修复、以及引入 Caretaker Agent 问题分流评测框架。多个 P1 级 Bug 正在积极修复并提交 PR 验证。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues（精选 Top 10）

| # | Issue | 关键标签 | 热度/评论 | 核心问题与影响 |
|---|-------|----------|-----------|----------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 超时仍上报 GOAL 成功 | `priority/p1`, `area/agent`, `kind/bug` | 👍 2 · 评论 12 | **严重逻辑缺陷**：`codebase_investigator` 达 `MAX_TURNS` 终止却汇报成功，导致上层调度误判任务完成，隐藏中断风险。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 频繁挂起 | `priority/p1`, `area/agent`, `kind/bug` | 👍 8 · 评论 8 | **可用性阻塞**：委托给 Generalist Agent 后无限等待（长达 1 小时），禁用 Subagent 可规避，严重影响复杂任务体验。 |
| 3 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级评测体系建设 | `priority/p1`, `aiq/eval_infra`, `kind/customer-issue` | 👍 0 · 评论 7 | **工程化里程碑**：基于 76 条 Behavioral Evals，推动 6 模型版本的自动化回归与能力量化，解决“主观好用”不可度量痛点。 |
| 4 | [#28418](https://github.com/google-gemini/gemini-cli/issues/28418) Shell 变量扩展绕过安全检测 | `priority/p1`, `area/security`, `kind/bug` | 👍 0 · 评论 3 | **安全漏洞 (GHSA)**：`$VAR`/`${VAR}` 绕过 `detectBashSubstitution`/`detectPowerShellSubstitution`，PR [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) 已提交修复。 |
| 5 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行后卡在 "Waiting input" | `priority/p1`, `area/core`, `kind/bug` | 👍 3 · 评论 4 | **交互死锁**：简单命令执行完毕但 CLI 仍显示等待输入，需强制退出，破坏流式工作体验。 |
| 6 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser Subagent 在 Wayland 下失败 | `priority/p1`, `area/agent`, `agent/browser` | 👍 1 · 评论 4 | **平台兼容性**：Linux Wayland 环境下浏览器自动化失效，限制桌面端采用。 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信噪会话 | `priority/p2`, `area/agent`, `kind/bug` | 👍 0 · 评论 5 | **资源浪费**：后台提取 Agent 跳过低价值会话不标记已处理，导致反复调度，消耗配额与延迟。 |
| 8 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 模型主动使用 Skills/Subagents 意愿低 | `priority/p2`, `area/agent`, `kind/bug` | 👍 0 · 评论 6 | **能力发挥受限**：除非显式指令，模型极少自发调用自定义 Skill/Subagent，降低专业化分工收益。 |
| 9 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知工具价值评估 | `priority/p2`, `area/agent`, `kind/feature` | 👍 1 · 评论 7 | **架构探索**：调研 AST 级读取/搜索/映射是否能减少 Token 噪音、精准定位代码，作为 `codebase_investigator` 增强方向。 |
| 10 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser Agent 锁恢复与会话接管增强 | `priority/p3`, `area/agent`, `kind/feature` | 👍 0 · 评论 4 | **工程健壮性**：持久化模式下遇到 Profile 锁直接失败，需支持自动接管孤儿进程、恢复会话。 |

---

## 4. 重要 PR 进展（精选 Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) `fix(core): block $VAR/${VAR} variable expansion bypass` | **OPEN** | 修补 `detectBashSubstitution`/`detectPowerShellSubstitution` 绕过，强化 GHSA-wpqr-6v78-jr5g 防线 | [#28418](https://github.com/google-gemini/gemini-cli/issues/28418) |
| 2 | [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) `fix(core): unwrap nested gaxios streaming errors` | **OPEN** | 解析 `error.cause.message` 中嵌套的 gaxios 流式错误，准确识别限流/容量耗尽等结构化错误 | — |
| 3 | [#28530](https://github.com/google-gemini/gemini-cli/pull/28530) `feat(caretaker-evals): add triage evaluation framework` | **OPEN** | 引入 Caretaker Agent 分流评测框架：LLM-as-Judge 评分卡、并行 Git Worktree 基准跑分 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) |
| 4 | [#28639](https://github.com/google-gemini/gemini-cli/pull/28639) `fix(core): guard formatTruncatedToolOutput against non-positive maxChars` | **OPEN** | 修复 `maxChars <= 0` 导致输出膨胀 ~2x 的切片负索引 Bug，补充回归测试 | [#28620](https://github.com/google-gemini/gemini-cli/issues/28620) |
| 5 | [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) `fix(core,cli): resolve context corruption and quota error fallback` | **OPEN** | 防御性历史硬化：工具调用被中断/配额降级时防止上下文损坏与模型自动补全前缀污染 | — |
| 6 | [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) `fix(core,cli): repair /compress session reload and quota-fallback tool response loss` | **OPEN** | 双修复：`/compress` 失败后卡死、配额限制导致工具响应丢失 | — |
| 7 | [#28681](https://github.com/google-gemini/gemini-cli/pull/28681) `feat(core,cli): add support for SGLang and local OpenAI-compatible endpoints` | **OPEN** | 新增 SGLang 与本地 OpenAI 兼容端点支持，拓展模型接入生态 | — |
| 8 | [#28664](https://github.com/google-gemini/gemini-cli/pull/28664) `fix(mcp): reflect full server config in consent and harden stdio env` | **OPEN** | MCP 同意提示补全 `env`/`cwd`/`headers` 字段，更新时全量对比防止静默变更 | — |
| 9 | [#28677](https://github.com/google-gemini/gemini-cli/pull/28677) `fix(core): add timeout to IdeClient.getInstance() process traversal` | **OPEN** | IDE 客户端初始化引入 3s 超时兜底，避免裸终端卡在 "Initializing..." | — |
| 10 | [#28678](https://github.com/google-gemini/gemini-cli/pull/28678) `fix(core): prevent OAuth callback timeout leak and release resources` | **OPEN** | 集中管理 OAuth 回调服务器生命周期，修复超时回调泄漏与内存泄漏 | [#28652](https://github.com/google-gemini/gemini-cli/issues/28652) |

---

## 5. 功能需求趋势（从 Issue 全量语义聚类）

| 趋势方向 | 代表 Issue | 社区呼声核心 |
|----------|------------|--------------|
| **Agent 编排可靠性** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | Subagent 状态汇报准确性、Generalist 挂死、主动规划能力、权限控制失效 |
| **评测与可观测性体系** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) | 组件级 Behavioral Evals、Subagent 轨迹可视化/分享、Bug Report 含子上下文 |
| **安全与沙箱加固** | [#28418](https://github.com/google-gemini/gemini-cli/issues/28418), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#28651](https://github.com/google-gemini/gemini-cli/issues/28651) | Shell 注入绕过、Auto Memory 红敏前置脱敏、补丁越权、A2A OpenID Connect 校验 |
| **本地化/私有化模型支持** | [#28681](https://github.com/google-gemini/gemini-cli/pull/28681), [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | SGLang、OpenAI 兼容端点、Cloud Workstations OAuth 回调动态解析 |
| **终端交互体验打磨** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) | 命令执行假死、交互式提示阻塞、外部编辑器返回画面损坏、Resize 闪烁/性能 |
| **代码智能深度化 (AST)** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) | AST 级读取/搜索/映射，减少 Turn 与 Token 噪音 |
| **记忆系统工程化** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | 低信噪会话隔离、补丁合法性校验、整体质量治理 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“信得过”的 Agent 编排**  
   - Subagent 误报成功、Generalist 挂死、权限配置失效（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)），导致开发者**不敢在生产流程开启自动化委托**，被迫降级为单 Agent 模式。

2. **可量化的回归保障**  
   - 缺乏组件级 Evals 使得版本升级风险不可控，社区强烈期待 **Behavioral Evals 纳入 CI/CD**（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)），并要求 Subagent 轨迹可审计（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。

3. **安全边界“零信任”**  
   - 连续曝出 Shell 注入绕过（GHSA）、Auto Memory 脱敏时序问题、MCP 配置变更未全量确认，开发者要求**默认拦截、显式放行、全链路审计**。

4. **终端原生体验达标**  
   - 命令执行假死、Resize 闪烁、外部编辑器回显损坏等“纸切刀”体验问题高频出现，呼吁 **Ink/RenderStatic 迁移**、**Static → RenderStatic** 等底层渲染架构

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-08-05

> 数据源：`github.com/github/copilot-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **版本发布**：发布 **v1.0.79-1**，包含一项**破坏性变更**：沙箱配置项 `allowDevToolCaches` 重命名为 `allowDevToolAccess`，旧键值将被静默忽略，需手动迁移配置。
- **社区活跃度高**：过去 24 小时共更新 43 个 Issue，涵盖 MCP 协议兼容性、企业级策略校验、键盘映射兼容性、会话管理等核心领域。
- **安全修复进行中**：官方自动化机器人提交安全基线修复 PR (#4366)，需人工审核合并以完成生产环境漏洞修复。

---

## 2. 版本发布

### **v1.0.79-1** 
> [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.79-1)

**💥 Breaking Change**  
- **沙箱配置重命名**：`allowDevToolCaches` → `allowDevToolAccess`。  
  - **影响**：旧配置键不再读取，且静默忽略。若原配置显式设为 `false` 以禁用，升级后将回退至默认值（开启），可能导致意外的开发工具访问权限泄露。  
  - **行动**：请检查 `settings.json` 并重命名该键。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 核心看点 | 社区热度 (👍/评论) |
|---|---|---|---|---|
| [#1504](https://github.com/github/copilot-cli/issues/1504) | **自定义主题支持** | OPEN | 高呼声功能：用户期望通过 `/theme` 创建、分享 JSON 主题文件，解决现有主题定制能力不足。 | 👍 23 / 8 条 |
| [#1697](https://github.com/github/copilot-cli/issues/1697) | **会话分叉：共享上下文的并行会话** | OPEN | 核心工作流需求：在多任务节点将对话分叉为并行会话，保留共享历史上下文，避免上下文丢失或重复输入。 | 👍 25 / 3 条 |
| [#1709](https://github.com/github/copilot-cli/issues/1709) | **插件自动更新机制** | CLOSED | 生态建设关键：插件手动更新成本高，呼吁实现版本比对与自动更新触发器。虽标记关闭，但 👍 29 显示强烈共识。 | 👍 29 / 1 条 |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | **v1.0.79-1 MCP 初始化失败：`server/discover` 返回 -32602** | OPEN | **最新版阻断性 Bug**：FastMCP 等未实现 `server/discover` 的服务器导致 CLI 启动失败，需兼容性兜底或文档明确要求。 | 👍 0 / 1 条 (新建) |
| [#4361](https://github.com/github/copilot-cli/issues/4361) | **回归：插件技能斜杠命令 (`/skill-name`) 失效** | OPEN | **v1.0.79 回归**：原由客户端重写为自然语言调用，现直接发起注定失败的 `session.commands.invoke` RPC。 | 👍 0 / 1 条 (新建) |
| [#4349](https://github.com/github/copilot-cli/issues/4349) | **企业托管策略校验失败：`disableBypassPermissionsMode` 枚举值 "enable" 被拒** | OPEN | 企业级阻断：GHE 下发合法值 `"enable"` 导致 Schema 校验失败（仅接受 `"disable"`），致使所有本地/自定义 MCP 服务器被封禁。 | 👍 0 / 1 条 |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | **WSL2 下 `Ctrl+H` 被误判为 `Ctrl+Backspace` (WT_SESSION 泄漏)** | OPEN | 跨平台兼容性痛点：Windows Terminal 环境变量干扰键盘编码识别，导致删除字符变删除单词。 | 👍 0 / 5 条 |
| [#4026](https://github.com/github/copilot-cli/issues/4026) | **Windows 原生运行时频繁崩溃 (自 2026-05 持续未解)** | OPEN | 稳定性顽疾：跨多版本复现，无固定复现步骤，严重影响 Windows 用户信心。 | 👍 0 / 1 条 |
| [#1947](https://github.com/github/copilot-cli/issues/1947) | **云端同步会话：跨设备连续性** | CLOSED | 高频需求：本地 `~/.copilot/` 会话无法跨机器同步，阻碍多设备开发流。虽关闭但 👍 6 显示持续关注。 | 👍 6 / 4 条 |
| [#4139](https://github.com/github/copilot-cli/issues/4139) | **支持自带模型 / 自定义模型端点** | CLOSED | 战略性诉求：接入 Azure OpenAI、Google Cloud AI、本地模型等 BYOK 能力，对标竞品灵活性。 | 👍 6 / 1 条 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 关键信息 |
|---|---|---|---|
| [#4366](https://github.com/github/copilot-cli/pull/4366) | **ACTION REQUIRED: 基础安全漏洞修复 (Vault `copilot-cli`)** | OPEN | **🔴 高优**：自动化安全扫描触发，涉及 CI/生产环境机密管理。需人工替换所有 `<UPDATE_ME>` 占位符后合并，完成合规整改。 |
| [#4355](https://github.com/github/copilot-cli/pull/4355) | **Merge** | OPEN | 作者 XavierMP14，标题极简，疑似内部合并分支或依赖更新，暂无详细描述，建议关注 CI 状态与变更文件。 |

> 过去 24 小时仅 2 个 PR 更新，主力开发可能集中在内部分支或针对 v1.0.79-1 回归问题的热修复中。

---

## 5. 功能需求趋势（高频主题聚类）

1.  **会话与上下文工程化**  
    - 会话分叉 (#1697)、云端同步 (#1947)、持久化上下文栏 (#2532)、心跳/状态上报 (#1343)。  
    - **趋势**：从“单机单会话”向“分布式、可分叉、可审计的上下文管理”演进。

2.  **企业级治理与合规**  
    - 组织级 Agent 不可见 (#1285)、计费实体选择失败 (#4005)、托管策略 Schema 不兼容 (#4349)、ACP 协议缺 Token 用量上报 (#4174)。  
    - **趋势**：大规模落地暴露出策略下发、计费绑定、审计日志的刚性缺口。

3.  **MCP / 插件生态完善**  
    - MCP 初始化兼容性 (#4370, #2692)、插件技能斜杠命令回归 (#4361)、插件自动更新 (#1709)、Repo 级插件技能不可见 (#4048)。  
    - **趋势**：MCP 成为扩展核心，但协议细节（`server/discover`）、客户端侧重写逻辑、插件全生命周期管理仍不成熟。

4.  **跨平台终端体验**  
    - WSL2 键盘映射冲突 (#4328)、Zellij 启动乱码 (#4267)、OSC 9;4 进度条无法关闭 (#4352)、OSC 11 背景色导致黑字蓝底 (#3898)。  
    - **趋势**：终端能力探测与逃逸序列处理是“长尾兼容性战场”。

5.  **模型选择权回归用户**  
    - BYOK / 自定义端点 (#4139)、推理内容 `reasoning_content` 导致 BYOK 失败 (#4196)。  
    - **趋势**：企业与高阶用户要求解绑默认模型，接入私有/合规/低成本模型。

---

## 6. 开发者关注点与痛点总结

| 痛点类别 | 典型反馈 | 影响面 |
|---|---|---|
| **升级破坏性变更无感知** | v1.0.79-1 重命名配置键且旧值静默失效，导致安全策略意外回滚。 | 全量升级用户 |
| **MCP 生态“寸步难行”** | `server/discover` 非标准方法导致 FastMCP 等主流实现直接不可用；插件斜杠命令回归。 | 插件开发者、MCP 接入方 |
| **企业策略“误伤”生产力** | 合法枚举值被拒致使所有自定义 MCP 被禁；计费实体未选中导致 Memory 失效。 | 企业管理员、内网用户 |
| **Windows/WSL 稳定性信任危机** | 原生崩溃半年未根治 (#4026)；键盘映射、终端逃逸序列频发 Bug。 | Windows 主力开发者 |
| **可观测性缺失** | ACP 无 Token 用量；无持久 Token 栏；会话无心跳上报。 | 成本控制、长任务监控场景 |
| **自定义能力锁死** | 无自定义主题、无 BYOK、无插件自更、会话无法跨设备同步。 | 高阶用户、团队标准化需求 |

---

## 📌 明日关注建议
1. **v1.0.79-1 热修复**：重点关注 #4370 (MCP 初始化)、#4361 (插件斜杠命令) 是否发布 Patch 版本。  
2. **安全 PR #4366 合并进度**：关乎生产环境合规截止日期。  
3. **企业策略 Schema 修复 (#4349)**：阻塞企业用户自定义 MCP，优先级极高。  
4. **Windows 崩溃根因 (#4026)**：是否有新进展或 Workaround 发布。

--- 
*报告基于公开 GitHub 数据自动生成，仅供技术决策参考。部分链接需 GitHub 登录访问。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-08-05

---

## 1. 今日速览

- **无新版本发布**，当前最新稳定版为 `v0.31.1`。
- 社区核心关注点集中在 **长上下文会话下的智能体可靠性崩溃（#2586）**、**Windows 平台异常退出与 IME 输入法兼容性（#2587, #2584）** 等阻塞性 Bug。
- ACP 协议生态建设持续推进，新增 **模型动态切换（#2583）** 与 **权限模式切换（#2364）** 能力，完善外部客户端集成体验。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 类型 | 核心内容 | 关注理由 / 社区反应 | 链接 |
|---|------|------|----------|---------------------|------|
| **#2586** | Agent reliability degrades at high context fill (~500K tokens) | **Bug / Critical** | 长会话（>500K tokens）下 Agent 陷入重复动作循环、指令漂移、无升级机制，严重阻塞复杂任务编排。 | **高优先级阻塞性问题**，涉及核心推理稳定性，需尽快定位上下文管理与 Token 预算机制缺陷。 | [#2586](https://github.com/MoonshotAI/kimi-cli/issues/2586) |
| **#2587** | kimi cli 会话推进时异常退出 (Windows v0.29.2) | **Bug / Critical** | Windows 环境下正常交互流程中 CLI 突然退出，附带崩溃截图。 | **生产环境可用性打击**，需排查原生二进制/Node 进程边界的异常捕获缺失。 | [#2587](https://github.com/MoonshotAI/kimi-cli/issues/2587) |
| **#2584** | Windows 下泰语/IME 输入字符重复 | **Bug / Platform** | Windows 11 使用 IME（泰语等）输入提示词时字符重复。 | **国际化兼容性缺陷**，影响非拉丁语系用户基础体验，需修复输入法事件处理。 | [#2584](https://github.com/MoonshotAI/kimi-cli/issues/2584) |
| **#1283** | Feature: Memory System - Persistent context across sessions | **Enhancement / High Demand** | 跨会话持久化记忆系统（自动/手动），支持项目模式、用户偏好沉淀。 | **长期高呼声需求**（17 条讨论），是构建“个性化 AI 助手”核心基建，规划中。 | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) |
| **#1282** | Feature: Remote Control - Continue sessions from any device | **Enhancement / High Demand** | 通过手机/浏览器远程接管本地 CLI 会话，保持环境上下文。 | **社区热度极高（👍24）**，解决移动办公场景痛点，架构挑战大（安全/同步/终端渲染）。 | [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) |
| **#2583** | feat(acp): advertise available models & mid-session model switching | **Enhancement / ACP** | ACP 协议层面支持模型列表发现与会话中途切换模型。 | **生态完善关键**，解除外部客户端（Zed, Happy Coder）模型选择硬编码限制。 | [#2583](https://github.com/MoonshotAI/kimi-cli/issues/2583) |

> *注：仅展示过去 24h 更新的 6 条 Issue，均已纳入上表。*

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 核心变更 | 影响范围 | 链接 |
|---|------|------|----------|----------|------|
| **#2200** | fix(shell): adapt timeouts for long commands | **Open** | 针对 `git clone/fetch`、包安装、构建等慢命令动态延长超时（默认 60s），保留显式传参优先级。 | **稳定性/体验**，减少长任务误杀，需关注超时策略的通用性与可配置性。 | [#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) |
| **#2585** | feat(cli): set AI_AGENT=kimi for subprocesses | **Open** | 统一在 pip/uv 与 standalone 入口注入 `AI_AGENT=kimi` 环境变量至子进程，保留外部显式值。 | **可观测性/生态**，方便下游工具链识别调用源，符合 AI Agent 标准化趋势。 | [#2585](https://github.com/MoonshotAI/kimi-cli/pull/2585) |
| **#2364** | feat(acp): support permission mode switching | **Open** | ACP 协议新增权限模式切换（`default`/`acceptEdits`/`bypassPermissions`/`plan`），依赖 #2363。 | **安全/交互**，赋予外部客户端细粒度权限控制，解决 #1414，推进 ACP 协议成熟度。 | [#2364](https://github.com/MoonshotAI/kimi-cli/pull/2364) |

---

## 5. 功能需求趋势

从近期 Issue 与 PR 聚焦点提炼，社区核心诉求集中于三大方向：

1. **长上下文与智能体鲁棒性（P0 级）**
   - #2586 暴露 500K+ Token 语境下推理退化，呼吁引入 **上下文压缩/摘要、Token 预算感知规划、异常熔断与自动恢复** 机制。
   - 关联需求：Memory System (#1283) 需解决“长期记忆检索污染当前上下文”问题。

2. **跨平台与跨设备无缝体验（高频刚需）**
   - **Windows 原生稳定性** (#2587, #2584) 与 **远程接管** (#1282) 形成“本地可靠 + 云端同步”双重诉求。
   - 暗示需投入终端渲染抽象层、进程管理、WebRTC/WebSocket 传输协议建设。

3. **ACP 协议生态标准化（战略建设）**
   - #2583（模型发现/切换）、#2364（权限模式）、#2363（基础协议）串联完整 **ACP Server 能力矩阵**。
   - 目标：使 Kimi CLI 成为标准兼容的 **Agent Server**，支撑 Zed、移动端、IDE 插件统一接入。

---

## 6. 开发者关注点（痛点与高频诉求）

| 痛点分类 | 典型反馈 | 潜在解决方向 |
|----------|----------|--------------|
| **长任务不可控** | “500K tokens 后 Agent 疯狂循环/幻觉/拒绝工具调用” (#2586) | 上下文窗口滑动策略可视化；引入“任务检查点/回滚”；提供 `max_context_fill` 守护配置。 |
| **Windows 二类公民体验** | 频繁崩溃 (#2587)、IME 输入乱码 (#2584)、路径/信号处理差异 | 增加 Windows CI 矩阵（ARM64/NT 版本）；引入 `crossterm`/`wt` 终端适配层；专项测试 IME 组合键。 |
| **会话状态易失** | 重启即失忆，无法沉淀项目规约/代码风格 (#1283) | 设计 `.kimi/memory/` 本地向量存储；支持 `kimi memory add/list/forget` CLI；实现 RAG 检索注入系统提示词。 |
| **外部集成受限** | ACP 客户端无法动态选模型/调权限 (#2583, #2364) | 完善 ACP `capabilities` 广播；提供 `ModelProvider` 抽象接口；权限模式持久化至会话元数据。 |
| **子进程透传标识缺失** | 下游脚本无法感知“由 Kimi 发起” (#2585) | 推广 `AI_AGENT` 环境变量标准；文档化最佳实践；集成 `opentelemetry` 语义约定。 |

---

> **数据来源**: `github.com/MoonshotAI/kimi-cli` | 统计窗口：2026-08-04 至 2026-08-05 (UTC+8)  
> **下一步建议**：优先修复 #2586/#2587 阻塞性 Bug；并行推进 ACP 协议里程碑（#2363→#2364→#2583）；启动 Memory System 与 Remote Control 技术预研。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-08-05

---

## 1. 今日速览

- **v1.18.13 发布**，修复 TUI 中 PR 评论上下文缺失、Desktop 端 RTL 布局多项问题，体验侧改进明显。  
- **DeepSeek v4 Flash 相关故障集中爆发**：多个 Issue 报告模型返回空白、403、版本不匹配（仍为 V3.2）、需开启“中国托管”开关，疑似上游供给侧变更导致。  
- 核心工程侧密集合并 **AI/Provider 语义修正、性能优化、OAuth 重构、E2E 稳定性** 等 PR，技术债偿还与架构收敛并行。

---

## 2. 版本发布

### v1.18.13 (2026-08-05)
| 领域 | 关键变更 |
|------|----------|
| **TUI** | GitHub PR 评论现包含 PR 编号与链接，上下文完整性提升 |
| **Desktop** | 修复标签页、抽屉、缩放、标题栏等多处 RTL 布局错位；统一方向性图标行为 |

> 🔗 [Release 详情](https://github.com/anomalyco/opencode/releases/tag/v1.18.13)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 热度 | 核心诉求 / 影响 | 关注理由 |
|---|------|------|----------------|----------|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | **Go Plan 用量/余额 API** | 👍126 · 29 评 | 暴露订阅用量（滚动/周/月窗口），Dashboard 已有数据但无公开 API | **高需求、长周期**，开发者急需脚本化监控配额，CI/CD 集成刚需 |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | **DeepSeek V4 Flash 突需“中国托管”开关** | 👍22 · 15 评 | 中途强制要求显式 opt-in，导致现有会话中断 | **突发阻断性 Bug**，涉及合规策略变更，影响所有 Go 订阅用户 |
| [#40485](https://github.com/anomalyco/opencode/issues/40485) | **deepseek-v4-flash 走 opencode-go 返回 403/挂起** | 👍6 · 6 评 | 同 Key 下 v4-pro/minimax-m3 正常，仅 flash 失败 | **模型级路由/鉴权异常**，疑似上游部署不一致 |
| [#40409](https://github.com/anomalyco/opencode/issues/40409) | **Go 端 deepseek-v4-flash 实为 V3.2（知识截止 2025-05）** | 5 评 | 计费/质量双重错配，严重影响信任 | **版本标签与实际模型不符**，涉及计费合规 |
| [#40483](https://github.com/anomalyco/opencode/issues/40483) | **Desktop Windows 11 下 DeepSeek v4 Flash Free 返回空白** | 7 评 | 思考动画播放完无任何文本，UI 假死 | **平台特定渲染/流式解析故障**，Windows 用户感知强 |
| [#22235](https://github.com/anomalyco/opencode/issues/22235) | **VSCode 扩展：Context Awareness 不生效** | 👍7 · 12 评 | 选中代码/活动标签页未自动注入上下文 | **IDE 集成核心体验缺失**，对标 Claude Code 的差距项 |
| [#34498](https://github.com/anomalyco/opencode/issues/34498) | **SKILL.md 支持 `disable-model-invocation: true`** | 👍48 · 9 评 | 兼容 Claude Code/Cline 技能元数据，禁止模型自动调用 | **生态互操作需求**，技能市场标准化关键字段 |
| [#8456](https://github.com/anomalyco/opencode/issues/8456) | **按任务类型自动选模型** | 👍44 · 10 期 | 可配置的模型路由（编码/重构/文档等） | **高星长期需求**，体现 Agentic 编码工具核心竞争力 |
| [#40540](https://github.com/anomalyco/opencode/issues/40540) | **VSCode 扩展无法感知选择/标签页** | 2 评 | 手动安装扩展后 LLM 仍不可见上下文 | 新安装路径下的集成回归，补充 #22235 场景 |
| [#38723](https://github.com/anomalyco/opencode/issues/38723) | **`opencode run` 间歇性挂起（~56% 失败率）** | 👍1 · 4 评 | 卡在 `message=init`，零输出、零报错，仅能外部超时杀掉 | **CLI 稳定性痛点**，CI/自动化场景不可用 |

> ⚠️ **合规类 Issue**（#40533、#40532、#40530）已关闭，疑为自动化合规扫描产物，非功能性讨论。

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心价值 |
|---|------|------|----------|
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | **[beta] 实验性性能改进** | Open | 首屏渲染内存 **-75.5%**（7.45→1.82 MB），基于不可变快照与固定语料基准，**架构级优化** |
| [#40552](https://github.com/anomalyco/opencode/pull/40552) | **fix(core): 避免急切目录快照** | Open | ripgrep 索引期仅在目录/混合搜索时物化快照，大仓库显著降低 I/O 与 CPU |
| [#40538](https://github.com/anomalyco/opencode/pull/40538) / [#40537](https://github.com/anomalyco/opencode/pull/40537) | **xAI OAuth 改为 RFC 8628 Device Flow** | Open | 移除回环服务器/PKCE/CORS，统一本地/远程订阅流程，**简化部署、提升安全** |
| [#40553](https://github.com/anomalyco/opencode/pull/40553) | **fix(ai): 恢复 Responses 工具输入语义** | Closed | 将畸形函数调用归类为可恢复的工具级失败，而非解析器错误，**修正完成边界分类** |
| [#40549](https://github.com/anomalyco/opencode/pull/40549) | **fix(ai): 分类畸形 Responses 工具调用** | Closed | 仅含畸形输入的响应标记为 `error` 而非 `tool-calls`，保留优先级语义 |
| [#40546](https://github.com/anomalyco/opencode/pull/40546) | **fix(ai): 保留 Gemini 工具完成语义** | Closed | 缺失 `finishReason` 时仍按 `tool-calls` 处理，避免误判为终止 |
| [#40547](https://github.com/anomalyco/opencode/pull/40547) | **fix(ai): 推导 Anthropic 工具完成原因** | Open | 本地工作存在时将 `end_turn`/`stop_sequence`/缺省归一化为 `tool-calls`，保留原始 `raw` |
| [#40545](https://github.com/anomalyco/opencode/pull/40545) | **fix(opencode): `run --format json` 步事件带模型归因** | Open | 闭合 #40544，无头消费者可按模型核算 Token/成本，**可观测性补齐** |
| [#40535](https://github.com/anomalyco/opencode/pull/40535) | **fix: 重试空不完整流** | Closed | 仅在 Core 输出守卫确认无模型输出时重试，保留部分流，**流式容错增强** |
| [#40487](https://github.com/anomalyco/opencode/pull/40487) | **fix(core): 退役遗留 Provider 别名** | Open | 移除 Azure Cognitive Services / Google Vertex Anthropic 独立注册，迁移 V1→V2 配置，**清理技术债** |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **模型路由与自动选择** | #8456 (44👍), #34498 (48👍) | ⭐⭐⭐⭐⭐ 长期高星，核心差异化能力 |
| **DeepSeek v4 Flash 稳定性/合规** | #39845, #40485, #40409, #40483, #40460 | ⭐⭐⭐⭐⭐ 过去 48h 集中爆发，阻断性 |
| **IDE 深度集成** | #22235, #40540 | ⭐⭐⭐⭐ VSCode 上下文感知、选择同步为基础诉求 |
| **计费/配额可编程** | #16017 (126👍) | ⭐⭐⭐⭐⭐ 企业级采纳前置条件 |
| **技能/提示词标准化** | #34498 | ⭐⭐⭐ 兼容 Claude Code/Cline 生态 |
| **CLI/自动化可靠性** | #38723, #36646 | ⭐⭐⭐ `opencode run` 挂起、TUI 剪贴板为 CI 痛点 |
| **RTL/国际化** | v1.18.13, #39670, #40543 | ⭐⭐⭐ Flatpak 与 RTL 双轨推进 |

---

## 6. 开发者关注点总结

| 痛点 / 高频需求 | 典型反馈 | 建议优先级 |
|------------------|----------|------------|
| **DeepSeek v4 Flash 可用性崩塌** | “中途强制开关”、“403/空白/版本错配”、“Free/付费双双失效” | **P0** 需与上游确认部署一致性，回滚或提供降级开关 |
| **Go Plan 缺乏可编程配额 API** | “Dashboard 有数据但无 API，无法接入监控/告警” | **P1** #16017 126👍 为最高赞未决需求 |
| **VSCode 上下文感知失效** | “选中代码/标签页完全不注入，手动 @file 才可用” | **P1** 直接影响日常编码流，竞品已成标配 |
| **`opencode run` 不可靠** | “56% 挂在 init，零日志、零报错，CI 全挂” | **P1** 自动化场景硬伤 |
| **模型自动路由缺位** | “想按任务类型走不同模型，现只能手动切” | **P2** 核心护城河

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-05

---

## 1. 今日速览
过去 24 小时社区核心动态集中在 **企业级 Copilot 兼容性修复**、**Windows 原生体验改进** 与 **TUI 渲染稳定性** 三大方向。多个高热度 Issue 指向 Copilot Enterprise/GHE 环境下 `/compact` 失败（421/unknown stamp），已有 PR 着手修复 baseUrl 丢失与可配置摘要模型；Windows 专项讨论贴聚焦运行方式收敛；TUI 层修复了全屏滚动、键位冲突、长行崩溃等阻塞性体验问题。安全方面，`npm-shrinkwrap.json` 锁定脆弱依赖（undici, brace-expansion）引发关注。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心矛盾 | 热度/评论 | 关键进展 |
|---|-------|----------|-----------|----------|
| 1 | [#6768](https://github.com/earendil-works/pi/issues/6768) **Copilot Enterprise `/compact` 彻底失效** | OpenAI 路径报 `421 Misdirected Request`，Anthropic 路径报 prefix summarization 失败 | 👍18 · 19 条 | **已关闭**，问题根因定位为 compaction 请求未复用 `ModelRuntime.prepareRequest()` 重写的 baseUrl，PR #7579 / #7602 正在修复 |
| 2 | [#7547](https://github.com/earendil-works/pi/issues/7547) **Windows 运行方式碎片化，急需收敛策略** | WSL / PowerShell / Git Bash / Bun 等多种方式并存，文档与测试难以覆盖 | 12 条 | 核心维护者发起讨论，拟确定 “推荐路径” 与 “社区维护路径” 分层策略 |
| 3 | [#5023](https://github.com/earendil-works/pi/issues/5023) **终端随机跳转至缓冲区开头** | 长期存在的 TUI 渲染竞态，模型输出时触发全量重绘导致视口重置 | 👍1 · 11 条 | **已关闭**，最新 TUI 差分渲染重构（PR #7616 相关）预期缓解 |
| 4 | [#7161](https://github.com/earendil-works/pi/issues/7161) **Anthropic 路径缺失 `x-client-request-id`** | 导致网关无法按会话做亲和性路由，多账号轮询场景失效 | 10 条 | **已关闭**，需在 anthropic-messages 路径补齐 header |
| 5 | [#7465](https://github.com/earendil-works/pi/issues/7465) **iTerm2 内联图片缺少 `size` 参数** | `@xterm/addon-image@0.9.0` 强制要求 size，导致 xterm.js 端图片静默失败 | 7 条 | **PR #7612 已修复**，补齐 OSC 1337 `size=<bytes>` |
| 6 | [#7413](https://github.com/earendil-works/pi/issues/7413) **GHE.com 企业账号 `/compact` 报 `unknown stamp`** | 同 #6768 同根，token 解析逻辑对企业签发者校验过严 | 6 条 | **已关闭**，随统一 baseUrl 修复合并处理 |
| 7 | [#7553](https://github.com/earendil-works/pi/issues/7553) **Compaction 思考预算不可配置** | 推理模型自动压缩复用会话 thinking level，导致摘要成本失控 | 6 条 | **PR #7602 实现**，新增 `compaction.model` / `compaction.thinkingLevel` 配置 |
| 8 | [#7128](https://github.com/earendil-works/pi/issues/7128) **系统提示过度鼓励 `bash env` 检查** | 默认指令导致模型频繁无谓执行 `printenv PI_*`，消耗 token 与延迟 | 👍1 · 6 条 | **已关闭**，需精简 system prompt 中的环境变量检查条款 |
| 9 | [#6817](https://github.com/earendil-works/pi/issues/6817) **Windows `find` 工具不支持路径分隔符模式** | `src/**/*.ts` 直接报无匹配，仅支持纯文件名模式 | 5 条 | 根因在 `find.ts` 未规范化 Windows 路径分隔符 |
| 10 | [#7508](https://github.com/earendil-works/pi/issues/7508) **OAuth 刷新无超时，卡死凭据锁 5 分钟** | 网络抖动时刷新挂起，跨进程锁导致整个会话冻结 | 5 条 | **已关闭**，PR #7632 引入管理类请求重试与超时机制 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#7602](https://github.com/earendil-works/pi/pull/7602) | **Feat** | 新增可配置 compaction/branch-summary 模型与 thinking level，支持 provider 级 context-window 错误处理 | #7553 |
| 2 | [#7624](https://github.com/earendil-works/pi/pull/7624) | **Feat** | 引入 `grok-mermaid` 在 Markdown 中渲染 Mermaid 图表 | #7623 |
| 3 | [#7612](https://github.com/earendil-works/pi/pull/7612) | **Fix** | `encodeITerm2()` 补齐 `size=<decoded_bytes>`，兼容 xterm.js image addon 0.9.0+ | #7465 |
| 4 | [#7597](https://github.com/earendil-works/pi/pull/7597) | **Fix** | 全屏模式扩展选择器引入 `ScrollView` + `VStack`，超长 diff 可滚动审查 | — |
| 5 | [#7632](https://github.com/earendil-works/pi/pull/7632) | **Fix** | 幂等管理请求（pi.dev / GH releases / tools）统一加入重试，缓解网络抖动导致的冻结 | #6675, #7508 |
| 6 | [#7571](https://github.com/earendil-works/pi/pull/7571) | **Feat** | 内置 **Cortecs** (欧盟 AI 路由) Provider，基于 models.dev 维护模型列表 | — |
| 7 | [#7610](https://github.com/earendil-works/pi/pull/7610) | **Feat** | 新增 **LLM Gateway** / **LLM Gateway DevPass** 两个 OpenAI-compatible Provider | — |
| 8 | [#7396](https://github.com/earendil-works/pi/pull/7396) | **Arch** | **Server Session Backend** 落地：JSONL 持久化 + 跨进程独占锁 + 崩溃恢复 + 协议快照投影 | — |
| 9 | [#7626](https://github.com/earendil-works/pi/pull/7626) | **Refactor** | SQLite 后端测试下沉至 `packages/storage/sqlite-node`，新增迁移/租约/FTS/损坏恢复专项用例 | — |
| 10 | [#7605](https://github.com/earendil-works/pi/pull/7605) | **Security** | OAuth 错误信息不再携带响应体（含 access/refresh token），防止凭据泄露进日志/遥测 | — |

> 💡 **安全补充**：[#7628](https://github.com/earendil-works/pi/issues/7628) 披露 0.83.0 `npm-shrinkwrap.json` 锁定 `undici@8.5.0` (CVE 修复版为 8.9.0) 与 `brace-expansion@5.0.7` (修复版 5.0.8/5.0.9)，建议下一版本同步升级。

---

## 5. 功能需求趋势（从 Issue 聚类分析）

| 趋势方向 | 代表 Issue/PR | 社区呼声强度 |
|----------|---------------|--------------|
| **企业级 SSO/Copilot 兼容性** | #6768, #7413, #7579, #7560, #7606 | ⭐⭐⭐⭐⭐ 多账号、GHE、Grok 4.5 可见性、account-id header 补全 |
| **Windows 一等公民体验** | #7547, #6817, #7427, #7508 | ⭐⭐⭐⭐ 运行方式收敛、路径分隔符、ignore 库兼容、OAuth 锁冻结 |
| **TUI/渲染稳定性与交互细节** | #5023, #7574, #7616, #7465, #7623, #7633 | ⭐⭐⭐⭐ 滚动跳变、键位吞噬、长行崩溃、图片协议、Mermaid、JSON 原文保序 |
| **Compaction/Summary 可控性** | #7553, #7602,

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-08-05

---

## 1. 今日速览

Qwen Code 今日发布 **v0.21.5 稳定版**，核心亮点是为 macOS 用户提供 Electron → Tauri 桌面应用的无缝迁移桥接，并新增工具调用的细粒度执行结果追踪。社区高度关注 **Agent 运行时的安全边界**（#8102）、**tmux 闪屏问题**（#8519）及 **守护进程资源配额**（#8051）。PR 端集中在 MCP 重连语义修正、会话截断恢复、终端内联图片渲染等核心体验优化。

---

## 2. 版本发布

### 🎉 v0.21.5 (Stable) - 2026-08-05
| 变更类型 | 核心内容 | 关联 PR |
|----------|----------|---------|
| **桌面迁移** | macOS Electron 用户可一键迁移至 Tauri Shell，保留配置与会话 | [#8392](https://github.com/QwenLM/qwen-code/pull/8392) |
| **可观测性** | 工具调用新增执行级结果追踪（成功/失败/中止/超时） | 内部实现 |
| **Web Shell** | 修复表格对话框渲染异常 | [#8392](https://github.com/QwenLM/qwen-code/pull/8392) |

### 🧪 v0.21.6-preview.0 / v0.21.5-nightly
- **浏览器扩展**：Alpha 就绪度诊断工具 ([#6739](https://github.com/QwenLM/qwen-code/pull/6739))
- **文档**：Headless Goal 工作流文档化 ([DragonnZhang](https://github.com/QwenLM/qwen-code/commits?author=DragonnZhang))

> 💡 **升级建议**：macOS 桌面用户建议尽快升级至 v0.21.5 体验 Tauri 新架构；CI/自动化场景锁定 nightly 需关注 v0.21.6-preview 的破坏性变更。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 评论 | 优先级 | 核心诉求 | 社区反应 |
|---|-------|------|--------|----------|----------|
| 1 | [#8102](https://github.com/QwenLM/qwen-code/issues/8102) Deterministic tool-execution boundaries for trustworthy agent runtime | 17 | P3 | **核心架构**：将 LLM 置于信任边界外，运行时强制约束/授权/审计所有 Action | 🔥 高讨论热度，涉及 Agent 安全基石，多位核心维护者参与设计讨论 |
| 2 | [#8519](https://github.com/QwenLM/qwen-code/issues/8519) tmux 中严重闪屏 | 11 | P2 | **终端渲染**：tmux 下每秒闪烁 1-2 次，严重影响可用性 | ✅ 已关闭，疑似重复或环境特有，建议排查 `TERM` 与渲染路径 |
| 3 | [#8051](https://github.com/QwenLM/qwen-code/issues/8051) Bound multi-workspace daemon resource usage | 9 | P2 | **资源治理**：`qwen serve` 守护进程需按字节级限制请求体、WS 组装、会话内存 | 🛠️ 生产就绪关键项，当前仅计数限制不足以防 OOM |
| 4 | [#8136](https://github.com/QwenLM/qwen-code/issues/8136) Provider warning sanitizer 截断含端口信息 & 泄露带 `@` 密码 | 6 | P2 | **安全合规**：URL 脱敏逻辑错误导致凭证泄露风险 | 🔒 安全类高优，需回溯所有日志输出路径 |
| 5 | [#8532](https://github.com/QwenLM/qwen-code/issues/8532) CI 伪装磁盘满错误污染日志 | 5 | P3 | **CI 卫生**：单测故意抛出 `disk full` 被当作真实 runner 错误上报 | 🧹 工程效能项，已有 PR [#8549](https://github.com/QwenLM/qwen-code/pull/8549) 修复中 |
| 6 | [#8356](https://github.com/QwenLM/qwen-code/issues/8356) `APIUserAbortError` 后后续轮次不写入本地会话 | 5 | P2 | **会话完整性**：中断后恢复丢失上下文，影响 `--resume` 可靠性 | 🐛 数据一致性缺陷，阻塞长会话场景 |
| 7 | [#8493](https://github.com/QwenLM/qwen-code/issues/8493) 取消后的文件工具仍可能变更文件系统 | 5 | P2 | **工具安全**：`write_file`/`edit` 异步准备阶段收到中断仍继续写入 | ⚠️ 原子性缺陷，需引入事务或两阶段提交 |
| 8 | [#8550](https://github.com/QwenLM/qwen-code/issues/8550) `qwen mcp list` 对无 `endpoint` 的 SSE Server 无限挂起 | 4 | P2 | **MCP 稳健性**：SSE 传输缺乏超时/熔断机制 | 🔧 已标记 `ready-for-agent`，待修复 |
| 9 | [#8533](https://github.com/QwenLM/qwen-code/issues/8533) `Content[]/Part[]` 无法安全编码各 Provider 推理回放契约 | 4 | P3 | **互操作性**：多模型推理重放的基础数据结构设计缺陷 | 🏗️ 架构级讨论，影响多模型统一接口演进 |
| 10 | [#8491](https://github.com/QwenLM/qwen-code/issues/8491) 信号终止的 Shell 命令被误报成功 | 3 | P2 | **工具语义正确性**：仅非零退出码/中止/超时视为错误，信号退出漏判 | 🐛 影响 CI/CD 与自动化脚本的错误判定 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#8482](https://github.com/QwenLM/qwen-code/pull/8482) | OPEN | **MCP 重连语义修正**：从未送达的调用视为“首次投递”而非“重放”，修复自 `#8387` 以来的确定性失败 | MCP 可靠性、自动修复管线 |
| 2 | [#8414](https://github.com/QwenLM/qwen-code/pull/8414) | OPEN | **会话截断恢复**：Live Journal 截断标记携带权威 Prompt 所有权，SDK 消费端可精准恢复完整轮次 | Web UI 会话持久化、长上下文 |
| 3 | [#8459](https://github.com/QwenLM/qwen-code/pull/8459) | OPEN | **证据图片内容级准入**：Magic-byte 嗅探（PNG/JPEG/GIF/WEBP），拒绝仅凭扩展名 | 审计安全、资产发布管线 |
| 4 | [#8305](https://github.com/QwenLM/qwen-code/pull/8305) | OPEN | **终端内联图片渲染**：扩展 `#8217` 基建，支持模型/工具 `inlineData` 在 CLI 直接显示 | 开发体验、多模态交互 |
| 5 | [#8455](https://github.com/QwenLM/qwen-code/pull/8455) | OPEN | **退出时回显恢复命令**：VP 模式下备用缓冲区销毁导致提示不可见，改为主屏回显 | CLI 易用性、会话恢复发现性 |
| 6 | [#8471](https://github.com/QwenLM/qwen-code/pull/8471) | OPEN | **磁盘成本账本**：从现有记录重建 Review 成本（模型调用/Token/耗时），解决 0.21.4 性能回归溯源难 | 可观测性、成本治理 |
| 7 | [#8498](https://github.com/QwenLM/qwen-code/pull/8498) | OPEN | **逆向审计性能优化**：移除干运行块与流水线验证，大 PR 评审耗时显著下降 | Review 技能吞吐、CI 成本 |
| 8 | [#8552](https://github.com/QwenLM/qwen-code/pull/8552) | OPEN | **README 新增韩语入口**：指向 `/ko/` 文档站（待站点发布） | 国际化、社区扩展 |
| 9 | [#8496](https://github.com/QwenLM/qwen-code/pull/8496) | OPEN | **Web Shell 只读命令即时执行**：`/stats` `/about` `/context` 流式输出中立即运行，无需等待轮次结束 | Web 交互延迟、实时监控 |
| 10 | [#8461](https://github.com/QwenLM/qwen-code/pull/8461) | OPEN | **GitHub Channel 支持本地 `gh auth`**：复用守护进程宿主凭证，PAT 优先级更高 | 企业部署、认证简化 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issues | 社区呼声强度 | 备注 |
|----------|-------------|--------------|------|
| **Agent 运行时安全与可控** | [#8102](https://github.com/QwenLM/qwen-code/issues/8102)、[#8493](https://github.com/QwenLM/qwen-code/issues/8493)、[#8136](https://github.com/QwenLM/qwen-code/issues/8136) | ⭐⭐⭐⭐⭐ | 核心架构层面，关乎企业级采信 |
| **IDE / ACP 深度集成** | [#8544](https://github.com/QwenLM/qwen-code/issues/8544)、[#8513](https://github.com/QwenLM/qwen-code/issues/8513)、[#8514](https://github.com/QwenLM/qwen-code/issues/8514) | ⭐⭐⭐⭐ | JetBrains Task List、Usage Update、Reasoning Effort 暴露 |
| **守护进程/多工作区资源治理** | [#8051](https://github.com/QwenLM/qwen-code/issues/8051)、[#8182](https://github.com/QwenLM/qwen-code/issues/8182) | ⭐⭐⭐⭐ | 生产化部署硬指标，内存/字节级配额 |
| **会话/上下文工程可靠性** | [#8356](https://github.com/QwenLM/qwen-code/issues/8356)、[#8535](https://github.com/QwenLM/qwen-code/issues/8535)、[#8414](https://github.com/QwenLM/qwen-code/pull/8414) | ⭐⭐⭐⭐ | `--resume`/`--continue` 数据一致性、截断恢复 |
| **MCP 生态稳健性** | [#8550](https://github.com/QwenLM/qwen-code/issues/8550)、[#8492](https://github.com/QwenLM/qwen-code/issues/8492)、[#8482](https://github.com/QwenLM/qwen-code/pull/8482) | ⭐⭐⭐ | SSE 超时、热重载元数据、重连语义 |
| **终端渲染与交互体验** | [#8519](https://github.com/QwenLM/qwen-code/issues/8519)、[#8305](https://github.com/QwenLM/qwen-code/pull/8305)、[#8439](https://github.com/QwenLM/qwen-code/pull/8439) | ⭐⭐⭐ | tmux 兼容、内联图片、超链接/右键菜单 |
| **多模型/多 Provider 统一抽象** | [#8533](https://github.com/QwenLM/qwen-code/issues/8533)、[#83

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-08-05

---

## 1. 今日速览
**核心动态**：项目正处于 **v0.9.4 发布候选期**（PR #5135），但核心精力显著向 **构建系统重构** 倾斜：维护者连续提交 6 个 Epic 级 Issue（#5245-#5249），旨在拆解 68 万行的 `codewhale-tui` 单体 crate、削减 708 依赖图、解耦 Git SHA 触发的全量重编译，并优化 LTO 与集成测试链路。与此同时，**Runtime API 能力全面扩充**（Goals、Verifier、Memory、MCP、Skills）、**MCP Registry 发现机制**落地、**ACP 协议工具调用**补齐，标志着“被管理端/IDE 集成”能力进入成熟期。社区高频痛点集中于 **沙箱脆性**、**上下文窗口静默回退**、**工具参数静默失败** 及 **Anthropic 兼容层报错**。

---

## 2. 版本发布
> 过去 24 小时无新 Release。v0.9.4 发布列车（PR #5135）正在整合中，包含 77 个提交，预计近期合并。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心内容 | 关注理由 / 社区反应 |
|---|-------|----------|---------------------|
| 1 | **[Epic] v0.9.5 build-time lane — stop the monolith tax** [#5249](https://github.com/Hmbown/CodeWhale/issues/5249) | 单体 `codewhale-tui` (682k 行) 占 workspace 86%，每次编辑/提交/测试/发布均触发全量重编译。 | **维护者自建 Epic**，直击开发体验核心痛点；关联 5 个子 Issue，标志着重构正式启动。 |
| 2 | **[Epic] deps: shrink the 708-package build graph** [#5248](https://github.com/Hmbown/CodeWhale/issues/5248) | 依赖图 708 包，95 个 build.rs、52 个 proc-macro，≥10 依赖多版本共存，冗余 feature 拖慢干净构建。 | 配合 #5249，解决依赖爆炸问题，提升 CI/本地构建速度。 |
| 3 | **[Epic] build: local git commit forces full rebuild** [#5245](https://github.com/Hmbown/CodeWhale/issues/5245) | `build.rs` 监听 git ref 导致每次提交触发 tui+cli 重编译，SHA 应改为 `--version` 注入。 | **高频开发者痛点**：无修改提交也要等待分钟级构建。 |
| 4 | **[Epic] build: 25 integration-test binaries consolidate** [#5247](https://github.com/Hmbown/CodeWhale/issues/5247) | 25 个独立集成测试二进制各自链接全量依赖，`cargo test` 链接时间过长。 | 测试反馈环优化关键，建议合并 harness。 |
| 5 | **[Epic] build: split shipping profile (dist) from local release gate** [#5246](https://github.com/Hmbown/CodeWhale/issues/5246) | `profile.release` 开启 fat-LTO 等发布级优化，但预推送门禁 `cargo build --release` 强制全员付出成本。 | 建议引入 `profile.ci` 或 `profile.dev-release` 分离构建策略。 |
| 6 | **[bug] File edit silently accepts wrong param names & reports fake success** [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) | `action=edit` 误用 `new_str` 而非 `replace` 时不报错、返回虚假成功，导致需 3-5 次重试。 | **严重可用性缺陷**：静默失败破坏 Agent 信任度，社区 👍 0 但评论 3 条均表强烈不满。 |
| 7 | **[bug] Anthropic API error: 'type' must be in ["enabled","disabled","auto"]** [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | 兼容 Anthropic Messages API 的 OpenModel 频繁报 400，重试偶尔通过，无固定规律。 | 兼容层参数序列化缺陷，影响第三方模型接入稳定性，评论 6 条持续跟进。 |
| 8 | **[enhancement] Unknown model ids silently degrade to 128K legacy context** [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | `context_window_for_model` 未知模型时静默回退 128K，1M 窗口模型提前压缩，无任何提示。 | **数据静默丢失风险**，关联 #5239 用户反馈，维护者标记为残留类 bug。 |
| 9 | **[bug] Pricing endpoint returns 503 — all sessions show unverified_live_pricing** [#5241](https://github.com/Hmbown/CodeWhale/issues/5241) | 升级 0.9.3 后成本显示全失效，所有 provider 均标记 `unverified_live_pricing`。 | 计费透明度中断，影响生产环境成本监控。 |
| 10 | **[enhancement] Request: zero-sandbox / --no-sandbox mode for local dev** [#4955](https://github.com/Hmbown/CodeWhale/issues/4955) | 内核级 Seatbelt 沙箱频繁破坏基础 shell 命令，需完全禁用沙箱模式。 | 👍 1，评论 4 条，反映 macOS 沙箱与开发环境兼容性矛盾尖锐。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 |
|---|----|------|----------|------|
| 1 | **release: Codewhale v0.9.4 release train** [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | Release | 整合 77 commits，含 18 个 train commits，超集 #5044，发布阻塞项清理中。 | 🟢 Open |
| 2 | **feat(tui/subagent): resume interrupted children from checkpoint** [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | Feature | `agents/followup` 支持从 `interrupted_continuable` 检查点恢复长任务，避免重新分发。 | 🟢 Open |
| 3 | **feat(acp): expose file/search/git/patch/shell tools over session/prompt** [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | Feature | ACP `session/prompt` 现支持工具调用执行，解锁 Zed 等编辑器完整代理能力。 | 🟢 Open |
| 4 | **feat(runtime-api): persistent goal-loop state & completion controls** [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | API | 新增 `/v1/threads/{id}/goal` GET/PATCH/POST，托管客户端可读写目标生命周期。 | 🟢 Open |
| 5 | **Runtime API: expose verifier receipts & evidence** [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | API | 新增 `/v1/fleet/runs/{run_id}/receipts\|evidence\|summary`，可定位具体任务失败原因。 | 🟢 Open |
| 6 | **feat: Runtime API memory endpoints** [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | API | 新增 `/v1/memory` 有界检查与生命周期控制，避免二次存储。 | 🟢 Open |
| 7 | **feat(runtime-api): bounded MCP server config & lifecycle** [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | API | MCP 服务器增删改查全 HTTP 化，移除手动编辑 TOML 需求。 | 🟢 Open |
| 8 | **feat(mcp): MCP Registry discovery with Registry-first tool selection** [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | Feature | 模型优先查询公共 MCP Registry 寻找零环境 stdio server，再落回 `exec_shell`。 | 🟢 Open |
| 9 | **feat(tui/shell): surface real wait elapsed time in tool content** [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | UX | `wait` 结果把 `duration_ms` 从 metadata 移入 content，模型可见真实耗时，抑制忙轮询。 | 🟢 Open |
| 10 | **docs: add Windows beginner guide (zh-CN)** [#5229](https://github.com/Hmbown/CodeWhale/pull/5229) | Docs | 新增 `docs/WINDOWS_BEGINNER.zh-CN.md` 及 4 张实测截图，覆盖安装/配置/模式/FAQ。 | 🟢 Open |

> **已合并/关闭值得注意**：#5228 (rail unification 重构已 rebase 到 train)、#5233/5235/5236 (Model Studio reasoning 证据链完善)、#5221 (prompt 文案与运行时行为对齐)、#5095 (OHOS Windows 路径空格链接修复)。

---

## 5. 功能需求趋势（从 Issues/PRs 提炼）

1.  **构建工程化与开发体验（DX）革命** —— 6 个 Epic 级 Issue 连发，核心诉求：**拆分单体 crate、去依赖膨胀、解耦 Git SHA 触发重编译、分离发布/本地构建 Profile、合并集成测试二进制**。这是当前社区（核心维护者）资源投入最密集的方向。
2.  **Runtime API 向“托管平台/IDE 集成”全面开放** —— 5 个 PR 同时落地 Goals、Verifier、Memory、MCP、Skills 全生命周期 HTTP API，配合 ACP 协议工具调用补齐 (#5225)，明确瞄准 **Zed、VS Code 扩展、第三方桌面/Web 客户端** 接入场景。
3.  **Agent 能力纵深：可中断/可恢复、MCP 生态优先** —— Subagent checkpoint resume (#5242)、MCP Registry 发现 (#5238) 体现向 **长任务鲁棒性** 与 **零配置工具生态** 演进。
4.  **多模型/多供应商兼容性加固** —— Anthropic 兼容层报错 (#4978)、上下文窗口静默回退 (#5244/#5239)、Model Studio reasoning 流标准化 (#5233)、Pricing 端点高可用 (#5241)。
5.  **Windows 一等公民支持** —— 新手指南落地 (#5229)、OHOS 工具链空格路径修复 (#5095)、沙箱兼容性诉求 (#4955)。

---

## 6. 开发者关注点与痛点总结

| 痛点类别 | 典型表现 | 影响面 | 社区呼声 |
|----------|----------|--------|----------|
| **构建性能** | 单体 crate 682k 行、提交即全量重编译、fat-LTO 预推送强制、25 测试二进制链接慢 | 核心贡献者、CI、所有本地开发者 | ⭐⭐⭐⭐⭐ **最高**，维护者已启动系统性重构 |
| **沙箱脆性** | macOS Seatbelt 破坏基础 shell、无完全禁用开关 | macOS 本地开发者 | ⭐⭐⭐⭐

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*