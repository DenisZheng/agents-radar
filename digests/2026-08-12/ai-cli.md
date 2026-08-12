# AI CLI 工具社区动态日报 2026-08-12

> 生成时间: 2026-08-12 01:19 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告｜2026-08-12

---

## 1. 生态全景

当前 AI CLI 赛道呈现 **“头部稳健迭代、腰部攻坚架构、长尾探索差异化”** 的三层格局。  
核心厂商（Anthropic、OpenAI、Google、GitHub）聚焦 **企业级稳定性、跨平台原生体验、Agent 编排鲁棒性** 与 **计费/合规治理**，版本节奏由“功能竞速”转为“修复回归、补齐短板”；  
新兴/开源阵营（Kimi、OpenCode、Pi、Qwen、CodeWhale）在 **架构模块化（Crate 拆解/ACP 协议）、多模型网关聚合、远程终端渲染、推理力度显式控制** 上形成差异化突围。  
**共识趋势**：Windows/WSL2 原生体验达标、MCP/ACP 协议生态闭环、大上下文/多会话状态管理、供应链安全与成本可观测已成行业基线门槛。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues 更新量* | 热点 Issues (Top 10) | 重要 PR 进展 | Release 情况 | 核心研发焦点 |
|------|-------------------|---------------------|-------------|-------------|-------------|
| **Claude Code** | ~50 (高呼声积压) | 10 (最高 191 👍) | 7 (文档/安全/插件规范) | **v2.1.228** 热修复 | Windows 体验、Message Queue、计费信任、MCP 多账号 |
| **OpenAI Codex** | ~50 (Windows 重灾区) | 10 (最高 950 👍 历史) | 10 (全自动化合并) | **Alpha 连发 2 版** (Rust 栈重构) | Windows 沙箱/内存/IO、MCP 热更新、多智能体可观测 |
| **Gemini CLI** | ~50 (Agent 稳定性集中) | 10 (P1 级 4 个) | 10 (含 2 个 CVE 修复) | **4 版本同推** (Nightly/Preview/Patch) | Subagent 恢复真实性、AST 感知工具、评测基建、云原生适配 |
| **GitHub Copilot CLI** | 41 (回归问题爆发) | 10 (配置丢失/模型失效) | 2 (工程基建) | **无新版** (v1.0.79 信任度受挫) | 配置原子性、Enterprise 模型同步、Windows 文件锁、MCP 兼容 |
| **Kimi Code CLI** | 5 (记忆系统长期高热) | 5 (34 评论长贴) | 8 (7 个陈旧稳健性修复) | **无新版** | Memory System 设计、Effort Control、生产代码鲁棒性 |
| **OpenCode** | ~50 (V2 核心缺陷密集) | 10 (Plan Mode 失效/ALSA 刷屏) | 10 (中断恢复/UTF-8/标签栏) | **无新版** (滚动夜间构建) | V2 稳定性、TUI 标签化、Windows 编码、共享 Server 隔离 |
| **Pi (earendil)** | ~10 (高优阻塞性) | 10 (macOS CPU/Win CMD/登录) | 10 (usage 恢复/Edit 鲁棒/Qwen CN) | **无新版** | 跨平台终端渲染、流式协议完整性、多模型网关、Intercom 会话通信 |
| **Qwen Code** | ~50 (远程终端渲染集体痛点) | 10 (tmux/iTerm 闪屏 3 个) | 10 (Web Shell/Autofix/Daemon/Review) | **3 版同发** (正式/Preview/Nightly) | 远程渲染管线、Headless 语义、多工作区隔离、审计深度 |
| **DeepSeek TUI (CodeWhale)** | 2 (架构重构/回归) | 2 (EPIC-005/宽屏回归) | 6 (ACP 工具链合并/快照分离/Win PiP) | **无新版** | TUI Crate 拆解、ACP Server 全工具链、多模型网关、跨平台窗口管理 |

\* *Issues 更新量为报告中“社区热点 Issues”表格行数或文中提及的总量估算，反映社区当日活跃度量级。*

---

## 3. 共同关注的功能方向

| 方向 | 关注工具 (≥3) | 具体诉求高频关键词 |
|------|--------------|-------------------|
| **Windows / WSL2 原生体验达标** | Claude Code, Codex, Copilot CLI, OpenCode, Pi, Qwen Code | 控制台闪烁、Git Bash 路径、MSIX/安装权限、子进程代码页、CMD 渲染崩溃、文件锁定冲突 |
| **Agent / 子代理编排鲁棒性与可观测** | Claude Code, Codex, Gemini CLI, OpenCode, Qwen Code | 并行 Agent 失控/Token 爆增、Subagent 状态上报虚假成功、Generalist 死锁、Plan Mode 失效、思考深度显式控制 |
| **跨会话/多会话状态管理与协调** | Claude Code, Gemini CLI, Kimi Code, OpenCode, Pi, CodeWhale | Message Queue 非阻塞交互、持久化记忆系统、会话快照隔离/恢复、共享 Server 工作区泄露、Intercom 进程间通信 |
| **MCP / ACP 协议生态闭环** | Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode, CodeWhale, Pi | 多账号/多租户隔离、工具列表热更新 (`tools/list_changed`)、OAuth 标准兼容、BigInt 序列化、ACP 全工具链暴露 |
| **远程终端 / TUI 渲染稳定性** | Codex, OpenCode, Pi, Qwen Code, CodeWhale | ALSA 错误刷屏、tmux/iTerm/SSH 闪屏卡顿、宽屏布局回归、OSC 52 剪贴板、Wayland 兼容 |
| **成本治理与计费透明** | Claude Code, Codex, Gemini CLI, Pi, Qwen Code | 计费事故争议、Token 预算上限、`usage` 字段流式完整性、模型成本分层映射、推理力度与成本解耦 |
| **供应链安全与工程化基建** | Gemini CLI, Copilot CLI, Qwen Code, CodeWhale, Pi | CVE 依赖升级 (shell-quote, simple-git, adm-zip)、SBOM/审计门禁、Autofix 闭环、E2E 绿建守护 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户画像 | 技术路线特征 | 差异化护城河 |
|------|----------|-------------|-------------|-------------|
| **Claude Code** | 企业级标准化交付 | 企业研发团队、合规敏感型组织 | TypeScript/Node.js 原生、TUI + Desktop 双端、Hook/插件机制 | **Message Queue 交互模型设计权**、**计费/合规体系成熟度**、**Anthropic 模型深度绑定优势** |
| **OpenAI Codex** | 云原生多智能体运行时 | 全栈工程师、AI Native 应用开发者 | **Rust 核心重构**、gRPC/HTTP 统一代理、沙箱隔离、ACP 先行 | **Rust 架构性能上限**、**多智能体编排原语**、**OpenAI 模型生态首发接入** |
| **Gemini CLI** | 大规模代码库语义工程 | Google Cloud/Vertex AI 用户、单体/巨型仓库维护者 | Go 核心、AST 感知工具链、Eval-as-Code 基建、云工作站原生 | **AST 感知/语义级编辑**、**组件级评测门禁体系**、**Cloud Workstations/IDE 深度融合** |
| **GitHub Copilot CLI** | GitHub 生态原生集成 | GitHub Enterprise 重度用户、Copilot 订阅者 | Node.js/TypeScript、VS Code 深度共生、Skills/插件市场 | **GitHub 平台数据飞轮 (PR/Issue/Action)**、**Enterprise 权限同步**、**技能市场分发渠道** |
| **Kimi Code CLI** | 长上下文记忆与推理控制 | 复杂项目长周期开发者、中文社区核心用户 | Python/ACP 架构、`~/.openclaw` 工作区、可配置 Thinking Effort | **持久化记忆系统 (SOUL/MEMORY.md)**、**推理力度显式 CLI 控制**、**中文长文本理解优化** |
| **OpenCode** | 可扩展的本地优先 Agent 平台 | 极客开发者、自建模型/隐私敏感用户、TUI 重度用户 | Go 核心 + React Desktop、共享 Server 架构、V2 重构中 | **本地优先/自托管模型支持**、**Chrome 风格多标签 TUI**、**第三方客户端友好 API 呼声高** |
| **Pi** | 多模型网关与协议聚合器 | 多云/多模型策略用户、终端美学追求者 | TypeScript/Node.js、ACP Server + 多 Provider 路由、Intercom 会话总线 | **统一模型路由层 (OpenRouter/OrcaRouter/Qwen CN)**、**会话间实时通信 (Intercom)**、**极致终端渲染细节** |
| **Qwen Code** | Web IDE 化与自动化审计 | 阿里云/通义模型用户、Web Shell/远程开发场景、Java/Maven 团队 | Go 核心、Daemon 多租户、Web Shell 原生、Review/Audit 深度集成 | **Web Shell 生产化体验**、**逆向审计/沙箱守卫深度**、**Maven 多模块验证、ACP 推理力度配置** |
| **DeepSeek TUI (CodeWhale)** | 极简可插拔 TUI 内核 | 终端原住民、插件开发者、Zed/外部编辑器集成者 | **Rust 模块化拆解中 (EPIC-005)**、ACP Server 完整工具链、OrcaRouter 聚合 | **架构模块化重构领跑者**、**ACP 协议完整实现**、**Windows PiP 原生窗口创新** |

---

## 5. 社区热度与成熟度判断

| 梯队 | 工具 | 判断依据 | 发展阶段 |
|------|------|----------|----------|
| **第一梯队：头部成熟·规模化运营** | **Claude Code**, **Gemini CLI** | Issue/PR 量级大、版本节奏稳 (Patch/Preview/Nightly 三轨)、企业级痛点 (计费、合规、Windows、MCP) 有专人跟进、安全响应快 (CVE 当日修) | **生产就绪 / 规模化交付期** |
| **第二梯队：核心重构·攻坚期** | **OpenAI Codex**, **OpenCode**, **Qwen Code** | 激进架构迁移 (Rust/Go/V2/Daemon)、Alpha/Nightly 高频、回归 Bug 密集但修复 PR 自动化/批量合并、明确的里程碑 (Rust 栈、V2 稳定、Web Shell) | **架构突破 / 快速迭代验证期** |
| **第三梯队：生态深耕·信任修复期** | **GitHub Copilot CLI** | 存量用户大但 v1.0.79 回归引发信任危机、PR 稀少 (仅基建)、Enterprise 权限同步长期未解、Windows 文件锁积压年余 | **存量维护 / 急需稳定版恢复信心** |
| **第四梯队：差异化创新·社区驱动期** | **Kimi Code**, **Pi**, **CodeWhale** | 核心功能单点突破 (Memory/Effort/Intercom/ACP Server/Crate 拆解)、Issue 讨论深度高 (34 条长贴)、工程稳健性专项还债 (assert/TOCTOU)、发布节奏由社区/贡献者驱动 | **核心功能打磨 / 架构重构奠基期** |

**关键信号**：
- **Claude Code #50246 (191 👍)** 与 **Codex #11023 (950 👍 历史)** 显示头部工具“用户留存深、诉求强”但官方响应周期长。
- **Gemini CLI 单日 4 版本**、**Qwen Code 单日 3 版本**体现“快速闭环验证”工程文化。
- **CodeWhale EPIC-005**、**Kimi 批量合并 7 个陈旧 PR**显示开源项目主动偿还技术债、为插件化/模块化铺路。

---

## 6. 值得关注的趋势信号（对决策者的参考价值）

| 趋势信号 | 证据来源 | 对开发者/技术决策者的启示 |
|----------|----------|---------------------------|
| **“非阻塞交互”成核心竞争力** | Claude Code Message Queue (191 👍)、Codex queued message admission PR、Kimi `/effort` 动态切换 | **选型标准升级**：评估工具是否支持“长任务中插队指令、动态调整推理预算、中断后恢复”，直接决定大模型落地复杂工程任务的可用性。 |
| **Windows/WSL2 从“能跑”向“原生”跃迁** | 6/9 工具列为 P0/P1、Codex 5 

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-12）

---

## 1. 热门 Skills 排行（高关注度 PR）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** fix(skill-creator): run_eval.py 0% recall 修复 | 修复技能评估循环完全失效（recall 恒为 0%），涉及 Windows 管道读取、触发检测、并行 worker | **最核心基建修复**：关联 Issue #556（12 评论）、#1169、#1323，直接阻断技能描述自动优化 | 🔴 Open |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** document-typography | AI 生成文档的排版质量控制：孤行/寡行、标题分页、编号对齐 | 通用刚需，解决“AI 写文档排版烂”的痛点，无需用户显式要求即可触发 | 🔴 Open |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** self-audit (v1.3.0) | 交付前自审：机械性文件存在性验证 → 四维推理质量门限（严重度优先） | **元技能趋势代表**，“给 AI 加质检”，通用性强，跨技术栈/项目 | 🔴 Open |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** testing-patterns | 全栈测试模式库：Testing Trophy、AAA、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 覆盖面最广的测试技能，填补“会写代码不会写测试”的空白 | 🔴 Open |
| 5 | **[#83](https://github.com/anthropics/skills/pull/83)** skill-quality-analyzer / skill-security-analyzer | 两个元技能：质量五维评分（结构/文档/测试/安全/可维护）+ 安全审计（注入/路径遍历/权限/密钥） | 社区期待的“技能审技能”，配套 #492 安全议题 | 🔴 Open |
| 6 | **[#1479](https://github.com/anthropics/skills/pull/1479)** plan-file-hygiene | 规划产物生命周期管理：自动清理过期/重复/无效计划文件 | 解决 Issue #1417“规划文件无限堆积”，实用工具类技能 | 🔴 Open |
| 7 | **[#1302](https://github.com/anthropics/skills/pull/1302)** color-expert | 色彩专家：命名体系（ISCC-NBS/Munsell/XKCD/RAL）、色空间选型表（OKLCH/OKLAB/CAM16）、无障碍对比度 | 设计/前端/数据可视化场景的专业色彩决策支持 | 🔴 Open |
| 8 | **[#486](https://github.com/anthropics/skills/pull/486)** odt (OpenDocument) | ODT/ODS 创建、模板填充、解析转 HTML，覆盖 LibreOffice/ISO 标准流程 | 企业级文档互操作刚需，补全 docx/pdf 之外的开放格式支持 | 🔴 Open |

> **备注**：所有列出 PR 均为 Open 状态；PR 评论数在导出数据中显示为 `undefined`，但关联 Issue 讨论热度极高（见下文）。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **技能分发信任与安全** | [#492](https://github.com/anthropics/skills/issues/492) | 社区技能冒用 `anthropic/` 命名空间，诱导用户授予过高权限，**需官方命名空间隔离/签名验证** | 🔥 43 评论、2 👍 |
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) | 一键共享到组织内部，避免“下载→发送→手动上传”三步走 | 16 评论、8 👍 |
| **skill-creator 工具链修复** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) / [#1323](https://github.com/anthropics/skills/issues/1323) | `run_eval.py` 触发率 0%、Windows 不兼容、触发检测失效，**阻断技能描述自动优化闭环** | 12/3/∞ 评论、7/1/0 👍 |
| **技能去重与包管理** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` 与 `example-skills` 内容重复，污染上下文窗口 | 6 评论、9 👍 |
| **上下文窗口压力** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` 单次注入 ~156k tokens，耗尽上下文 | 4 评论 |
| **MCP 化与跨平台** | [#16](https://github.com/anthropics/skills/issues/16) / [#29](https://github.com/anthropics/skills/issues/29) | 技能暴露为 MCP 接口、支持 AWS Bedrock 部署 | 各 4 评论 |
| **Agent 治理/质量门** | [#412](https://github.com/anthropics/skills/issues/412) / [#1385](https://github.com/anthropics/skills/issues/1385) | Agent 安全治理技能、三阶段推理质量门（预校准→对抗审查→交付验证） | 6/4 评论 |
| **文档处理细节** | [#12](https://github.com/anthropics/skills/issues/12) | docx/OOXML 技能引入额外空白导致文档损坏 | 4 评论、1 👍 |

---

## 3. 高潜力待合并 Skills（讨论活跃、落地概率大）

| PR | Skill | 切入点 | 合并信号 |
|----|-------|--------|----------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | skill-creator 评估修复 | **基建级 Bug**，直接影响所有技能的自动化优化，关联 3 个高热 Issue | 必修，预计优先合并 |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows 兼容修复 | 两个 1-line fix，解决 `claude.cmd` 识别、编码、管道读取 | 低风险，易合并 |
| **[#538](https://github.com/anthropics/skills/pull/538)** | pdf 大小写引用修复 | 8 处大小写不匹配，仅改引用，无逻辑变更 | 典型“修完即合” |
| **[#541](https://github.com/anthropics/skills/pull/541)** | docx w:id 冲突修复 | 修复 Tracked Changes 与 Bookmark 共享 ID 空间导致的文档损坏 | 实用修复，影响面明确 |
| **[#539](https://github.com/anthropics/skills/pull/539)** | YAML 特殊字符预校验 | 前置拦截 `description` 未加引号含 `:` 导致的静默解析失败 | 工程化改进，收益高 |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | plan-file-hygiene | 直接回应 Issue #1417，作者明确邀请共建者 | 需求明确、实现完整 |
| **[#509](https://github.com/anthropics/skills/pull/509)** | CONTRIBUTING.md | 解决社区健康度 25% → 提升单一最大杠杆 | 文档类，无争议 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是：把“技能开发工具链”（skill-creator 评估/触发/跨平台）修好、把“技能分发信任链”（命名空间/签名/组织共享）建起来、把“元技能”（自审/质检/测试/治理）落地——**从“写技能”转向“工业化生产与治理技能”。**

---

# Claude Code 社区动态日报｜2026-08-12

---

## 1. 今日速览

- **发布 v2.1.228**，修复交互会话渲染卡死、Windows Git Bash 路径检测失败及 `/tui` 回退等关键回归问题。
- 社区高呼声需求 **Message Queue 模式（#50246，191 👍）** 持续发酵，开发者期望在不中断任务的前提下排队后续指令。
- Windows 平台 **控制台闪烁（#14828，60 条评论、36 👍）** 与 **MSIX 安装误报（#84841）** 两大原生体验阻滞问题仍在热议。

---

## 2. 版本发布

### v2.1.228
| 变更类型 | 内容 |
|---|---|
| **Bug Fix** | 修复极少数内部布局错误导致交互会话完全停止重绘，但进程仍在运行 |
| **Bug Fix** | 修复从 Git 安装目录的父文件夹启动时，Windows 下找不到 `git` / Git Bash |
| **Bug Fix** | 修复 `/tui` 命令回退相关问题 |

> 🔗 [Release v2.1.228](https://github.com/anthropics/claude-code/releases/tag/v2.1.228)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 标签 | 热度 | 核心诉求 / 影响 | 为什么重要 |
|---|---|---|---|---|---|
| 1 | [#50246](https://github.com/anthropics/claude-code/issues/50246) Message Queue 模式 | enhancement, tui | 53 评论 · **191 👍** | 在任务执行中排队后续消息，避免中断或遗忘 | **最高呼声增强需求**，直接关乎长任务交互体验 |
| 2 | [#14828](https://github.com/anthropics/claude-code/issues/14828) Windows 控制台闪烁 | bug, windows, tools | 60 评论 · 36 👍 | 执行工具时控制台窗口反复闪烁，干扰视觉与录屏 | **Windows 原生体验阻滞**，影响大量企业开发者 |
| 3 | [#36024](https://github.com/anthropics/claude-code/issues/36024) MCP 支持多 Gmail 账号 | enhancement, mcp | 25 评论 · 77 👍 | 同时连接个人/工作多个 Google 账号 | 企业级 MCP 集成刚需，解锁多账号工作流 |
| 4 | [#54394](https://github.com/anthropics/claude-code/issues/54394) WSL2 ugrep 导致 V8 OOM | bug, wsl, memory | 27 评论 · 4 👍 | 嵌入式 ugrep 放大正则回溯，触发 8 GB 堆上限冻结主机 | **严重性能/稳定性回归**，阻断 WSL2 重度用户 |
| 5 | [#76727](https://github.com/anthropics/claude-code/issues/76727) 多会话跨进程协调 | enhancement, hooks, agents | 14 评论 | 独立启动的多会话共享工作树缺乏官方协调原语 | 规模化并行开发的基础设施缺口 |
| 6 | [#81703](https://github.com/anthropics/claude-code/issues/81703) 7.17 计费事故争议 | bug, billing | 12 评论 | 订阅额度内用量被误扣付费额度，$604 自动扣费 | **信任与计费准确性**核心事件，需官方对账回应 |
| 7 | [#71539](https://github.com/anthropics/claude-code/issues/71539) 鼠标点击误触发权限弹窗 | bug, linux, tui, permissions | 10 评论 · 22 👍 | 点击终端聚焦被误判为工具确认，触发权限提示 | TUI 交互细节缺陷，高频误操作来源 |
| 8 | [#78775](https://github.com/anthropics/claude-code/issues/78775) Desktop App 时间范围筛选回归 | regression, desktop, ui | 8 评论 · 28 👍 | 仅当“按状态分组”时才显示会话时间筛选器 | 桌面端核心筛选功能回归，影响历史追溯 |
| 9 | [#84841](https://github.com/anthropics/claude-code/issues/84841) MSIX 写重定向被误判为攻击 | bug, windows | 6 评论 · 2 👍 | Cowork VM SDK 每次更新均触发 `PlantDetectedError` 失败 | **Windows 分发管道阻滞**，影响企业自动更新 |
| 10 | [#67636](https://github.com/anthropics/claude-code/issues/67636) 并行 Agent 导致 Token 爆增 | bug, linux, cost, agents | 6 评论 | 生成 10–15 个 Agent 仅完成 1–2 个任务量的工作，消耗百万 Token | 成本失控风险，揭示 Agent 调度策略缺陷 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心变更 | 影响范围 |
|---|---|---|---|---|
| 1 | [#85925](https://github.com/anthropics/claude-code/pull/85925) docs: 指向 code.claude.com 的剩余陈旧链接 | Open | 全量替换 `docs.claude.com` 为 `code.claude.com` 规范域名 | 文档一致性，消除重定向跳转 |
| 2 | [#85822](https://github.com/anthropics/claude-code/pull/85822) docs: 修复 plugins 与 examples 中的陈旧链接 | Open | 同步修正 hooks、plugins、README 中的失效链接 | 开发者上手文档可用性 |
| 3 | [#85716](https://github.com/anthropics/claude-code/pull/85716) fix(hookify): 从祖先 `.claude` 目录加载规则防静默绕过 | Open | 修复 hookify 插件仅读取当前目录导致安全规则被绕过 | **安全加固**，插件沙箱逃逸风险修复 |
| 4 | [#85806](https://github.com/anthropics/claude-code/pull/85806) fix(security-guidance): 文档中抑制 XSS 误报 | Open | 复用 `_DOC_EXTS` 过滤器，排除文档/注释中的 XSS 规则触发 | 静态分析信噪比提升 |
| 5 | [#85243](https://github.com/anthropics/claude-code/pull/85243) fix(skills): 规范插件技能命名为 kebab-case | Open | 8 个内置技能 `name` 字段从 Title Case 改为 spec 要求的 kebab-case | 插件生态规范一致性 |
| 6 | [#70173](https://github.com/anthropics/claude-code/pull/70173) fix(commit-commands): `git branch -vv` 检测 `[gone]` 分支 | Closed | 修复 `/clean_gone` 因 `git branch -v` 缺少上游信息导致无法清理 | Git 工作流工具链完善 |
| 7 | [#85834](https://github.com/anthropics/claude-code/pull/85834) fix: HackerOne Bug Bounty devcontainer 插件安装 | Open | 调整 `devcontainer.json` 确保 hookify 插件正确安装 | 内部安全测试环境就绪 |

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|---|---|---|
| **异步消息队列 / 非阻塞交互** | #50246 (191 👍), #76727 | ⭐⭐⭐⭐⭐ 核心工作流痛点 |
| **多账号 / 多租户 MCP 集成** | #36024 (77 👍) | ⭐⭐⭐⭐ 企业级采用门槛 |
| **跨会话 / 多 Agent 协调原语** | #76727, #67636, #85949 | ⭐⭐⭐⭐ 规模化并行开发刚需 |
| **Windows 原生体验达标** | #14828, #84841, #78775 | ⭐⭐⭐⭐ 平台公平性 |
| **成本可观测与 Agent 预算控制** | #67636, #81703, #83062 | ⭐⭐⭐ 企业合规与成本治理 |
| **TUI / Desktop 细节打磨** | #71539, #78775, #61675 | ⭐⭐⭐ 日常交互摩擦消除 |
| **WSL2 / Linux 性能与稳定性** | #54394, #67636 | ⭐⭐⭐ 基础设施可靠性 |

---

## 6. 开发者关注点·痛点总结

1. **“打断即丢失”交互模型** —— 无法在长任务中插队指令，被迫选择“中断风险”或“记在脑子里”，强烈呼声要求 **Message Queue**（#50246）。
2. **Windows 二等公民体验** —— 控制台闪烁（~1 年历史）、MSIX 安装误报、Git 路径检测失败，阻碍企业标准化推广（#14828, #84841）。
3. **Agent 失控与成本黑盒** —— 并行 Agent 自发膨胀、Token 消耗无预算上限、计费异常无申诉通道（#67636, #81703, #83062）。
4. **MCP 生态成熟度不足** —— 单账号限制、缺乏多租户隔离、技能命名不规范，影响插件市场信任（#36024, #85243）。
5. **跨会话状态同步缺失** —— 多窗口/多终端/多进程共享仓库时，缺乏官方协调层，只能自建 Hook 方案且有“静默漏洞”（#76727, #85716）。
6. **TUI 细节摩擦高频** —— 鼠标聚焦误触发权限、长提示无折叠、筛选器回归，累积影响日效（#71539, #61675, #78775）。

---

> **下一关注点**：v2.1.228 热修复后的 Windows/WLS2 稳定性回馈、Message Queue 设计讨论是否进入实施阶段、7.17 计费事件的官方复盘公告。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-08-12

---

## 1. 今日速览

- **版本迭代加速**：连续发布 `rust-v0.148.0-alpha.7/8` 两个 Alpha 版本，Rust 核心层重构持续推进。
- **Windows 平台成重灾区**：新增内存泄漏（8.8 GB 空闲占用）、`apply_patch` 停顿 49-86 秒、MCP 服务器不暴露等 5 个高优先级 Windows 专属 Bug，且均在近 24 小时内被报告或更新。
- **多智能体与 MCP 生态仍不稳定**：子代理卡死、MCP 工具列表热更新失效、自定义模型下 MCP 调用被拒等架构层面问题集中暴露，相关 PR 正在密集合并修复。

---

## 2. 版本发布

| 版本 | 类型 | 备注 |
|------|------|------|
| `rust-v0.148.0-alpha.8` | Alpha | 紧随 alpha.7 发布，可能包含紧急修复或微调 |
| `rust-v0.148.0-alpha.7` | Alpha | 0.148 系列首个 Alpha，标志着 Rust 栈新迭代启动 |

> 🔗 [Releases 页面](https://github.com/openai/codex/releases)

---

## 3. 社区热点 Issues（精选 10 个）

| # | 标题 | 状态 | 👍/评论 | 关注理由 |
|---|------|------|---------|----------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** | ✅ CLOSED | 950 / 207 | 社区呼声最高的功能需求（近 1k 👍），虽已关闭但揭示 Linux 原生支持的迫切性 |
| [#20880](https://github.com/openai/codex/issues/20880) | App 静默创建 `~/Documents/Codex` 空文件夹 | 🟢 OPEN | 42 / 22 | 侵入式副作用，违反最小惊讶原则，macOS/Linux 用户高频遭遇 |
| [#38059](https://github.com/openai/codex/issues/38059) | **[Windows] 内存空闲狂涨至 8.8 GB 并冻结 UI** | 🟢 OPEN | 0 / 3 | **今日新增**，严重性最高（OOM 风险），可复现于 Microsoft Store 版 |
| [#29235](https://github.com/openai/codex/issues/29235) | 尽管全权限仍反复弹权限框 | 🟢 OPEN | 16 / 3 | 破坏自动化流程，核心沙箱权限模型可能存在逻辑倒置 |
| [#37403](https://github.com/openai/codex/issues/37403) | **[macOS 回归] Remote Control 无法恢复 CLI 线程** | 🟢 OPEN | 9 / 9 | 跨设备协作核心链路断裂，8/7 更新后引入，影响移动端→桌面无缝衔接 |
| [#35470](https://github.com/openai/codex/issues/35470) | **[Windows] 图片被复制 15 万次占用 400 GiB** | 🟢 OPEN | 0 / 4 | 极端磁盘写入放大，疑似子代理循环或缓存键设计缺陷 |
| [#34549](https://github.com/openai/codex/issues/34549) | **[Windows] `apply_patch` 停顿 49-86 秒** | 🟢 OPEN | 0 / 2 | 旧问题 #13965 回归，WindowsApps 启动器 `Access is denied` 导致沙箱 IO 阻塞 |
| [#37421](https://github.com/openai/codex/issues/37421) | CLI 0.147.0: Esc-Esc 回溯找不到持久化线程中的提示词 | ✅ CLOSED | 26 / 4 | TUI 核心交互回归，26 👍 说明高频使用场景受阻 |
| [#37417](https://github.com/openai/codex/issues/37417) | MCP 工具列表变更会话期间从不被感知 | 🟢 OPEN | 0 / 2 | 架构级缺陷：缺乏 `tools/list_changed` 通知处理，阻断动态插件场景 |
| [#31354](https://github.com/openai/codex/issues/31354) | 自定义 Responses API 提供商下 MCP 工具报 `unsupported call` | 🟢 OPEN | 0 / 2 | 多模型提供商兼容性断层，影响 MiniMax、llama.cpp 等第三方接入 |

---

## 4. 重要 PR 进展（精选 10 个）

| # | 标题 | 状态 | 核心变更 |
|---|------|------|----------|
| [#38094](https://github.com/openai/codex/pull/38094) | Test Guardian context for code mode commands | ✅ MERGED | 为嵌套 `exec_command` 升级场景补充 Guardian 上下文集成测试 |
| [#38092](https://github.com/openai/codex/pull/38092) | Simplify queued user message admission | ✅ MERGED | 移除持久化等待依赖，Core 接受即入队，降低首包延迟 |
| [#38089](https://github.com/openai/codex/pull/38089) | Add CIMD support to MCP OAuth registration | ✅ MERGED | 支持 Client ID Metadata Document，优先使用原生回环回调，提升 MCP 认证成功率 |
| [#38087](https://github.com/openai/codex/pull/38087) | Route gRPC code-mode sessions through shared HTTP client | ✅ MERGED | 统一出站代理/自定义 CA 配置，解决企业环境连通性问题 |
| [#38086](https://github.com/openai/codex/pull/38086) | Support execution-host context when resolving cloud config | ✅ MERGED | `~` 路径可显式指定 home 目录解析，修复远程执行环境下的配置加载 |
| [#38084](https://github.com/openai/codex/pull/38084) | Allow empty input to start a turn | ✅ MERGED | 允许空输入触发新回合（仅环境上下文），修复自动化脚本卡死 |
| [#38081](https://github.com/openai/codex/pull/38081) | Use `ReviewDecision` for MCP tool approvals | ✅ MERGED | 统一审批模型，跨会话持久化 MCP 授权，减少重复弹窗 |
| [#38080](https://github.com/openai/codex/pull/38080) | Allow nested Git repositories in the Windows sandbox | ✅ MERGED | 将 worktree root 及 `/*` 加入 `GIT_SAFE_DIRECTORIES`，解决子模块权限 |
| [#38078](https://github.com/openai/codex/pull/38078) | Reduce cloning in world-state patch handling | ✅ MERGED | 原地反序列化/合并 JSON 补丁，降低大型仓库内存峰值 |
| [#38064](https://github.com/openai/codex/pull/38064) | Grant Windows sandbox access to the Codex app root | ✅ MERGED | 递归 ACL 授权应用根目录，修复沙箱无法读取自带运行时/工具 |

> 本日 20 个高热度 PR 均为 **copyberry[bot] 自动化合并**，显示核心团队正通过高频小步提交快速修复回归与架构债。

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **Linux 原生桌面应用** | #11023 (950 👍) | ⭐⭐⭐⭐⭐ 最高呼声，虽关闭但未给出时间表 |
| **Windows 生产级稳定性** | #38059, #34549, #35470, #37471, #32525 | ⭐⭐⭐⭐ 新增 5 个高严重 Bug，内存/IO/沙箱全线告急 |
| **多智能体/子代理可观测性** | #23930, #35030, #37858 | ⭐⭐⭐ 卡死、列表挂起、API-key 下不工作，编排层薄弱 |
| **MCP 生态成熟度** | #37417, #31354, #37567, #37471 | ⭐⭐⭐ 热更新缺失、认证回退、自定义提供商不兼容 |
| **跨设备/远程协作** | #37403, #11907 | ⭐⭐ Remote Control 回归、会话列表不同步 |
| **自定义模型提供商一致性** | #24648, #37379, #37858, #31354 | ⭐⭐ 模型解析、线程过滤、MCP 调用均有差异 |
| **TUI/CLI 交互细节** | #37421, #19143, #31376 | ⭐⭐ 回溯、粘贴图片、exec 挂起等高频操作受阻 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **Windows 沙箱 IO 性能与权限模型失效**  


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-12

---

## 1. 今日速览

- **版本迭代加速**：发布了 `v0.56.0-nightly`、`v0.56.0-preview.1`、`v0.55.1` 及 `v0.55.0-preview.3` 四个版本，核心修复了**模型容量耗尽误报**与**配额查找映射**等关键阻塞性问题，并新增本地评测报告命令。
- **安全响应迅速**：合并了 2 个关键 CVE 修复 PR（`shell-quote`、`simple-git`），体现供应链安全高优先级。
- **Agent 稳定性成核心焦点**：高优先级 Issue 集中在 Subagent 恢复逻辑、Generalist Agent 卡死、Shell 执行挂起、浏览器 Agent Wayland 兼容性等核心体验阻塞点。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 | 链接 |
| :--- | :--- | :--- | :--- |
| **v0.56.0-nightly.20260812** | Nightly | **修复**：解决虚假模型容量耗尽错误、修复 Core 配额查找模型映射；**新增**：本地评测报告命令 (`eval:report`) 与开发者文档。 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260812.g5024443c7) |
| **v0.56.0-preview.1** | Preview | 版本号跃升至 0.56.0，包含 v0.55.0 以来的累积变更。 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-preview.1) |
| **v0.55.1** | Patch | **修复**：发布验证 `npm ci --ignore-scripts`、防止工作区二进制遮蔽；**功能**：工具注册表相关更新。 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.1) |
| **v0.55.0-preview.3** | Preview Patch | 樱桃挑选修复 (commit `188e255`) 至预览分支，修补 v0.55.0-preview.2 问题。 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.3) |

> **关键提示**：v0.56.0-nightly 中的 **#28730** 修复了导致 CLI 误判模型熔断并阻塞重试的严重 Bug，建议遇到“Capacity Exhausted”误报的用户优先尝试 Nightly 或等待下一个 Preview。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 优先级/标签 | 核心痛点/价值 | 社区热度 (👍/评论) | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#21409** | **Generalist agent hangs** | `P1`, `Bug` | Generalist 子代理接管后无限挂起（甚至创建文件夹等简单任务），禁用子代理可规避。**严重阻塞主流程可用性**。 | 👍 8 / 8 评论 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| **#22323** | **Subagent recovery after MAX_TURNS reported as GOAL success** | `P1`, `Bug` | `codebase_investigator` 达上限后仍上报 `status: success` / `Termination Reason: GOAL`，导致上层编排误判任务完成，**隐藏真实中断**。 | 👍 2 / 12 评论 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **#25166** | **Shell command execution stuck at "Waiting input" after completion** | `P1`, `Bug` | 简单 Shell 命令执行完毕后 CLI 仍显示“等待用户输入”并挂起，**高频复现，严重影响交互流**。 | 👍 3 / 4 评论 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **#21983** | **Browser subagent fails in Wayland** | `P1`, `Bug`, `Agent/Browser` | Browser Agent 在 Wayland 环境下失败（Termination Reason: GOAL 但实则报错），**Linux 桌面主流环境不兼容**。 | 👍 1 / 4 评论 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| **#24353** | **Robust component level evaluations (EPIC)** | `P1`, `Eval Infra` | 建立组件级评测体系，跟进 76 个行为评测用例，**关乎模型能力回归防护与发布质量门禁**。 | 👍 0 / 7 评论 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) |
| **#22745** | **Assess impact of AST-aware file reads, search, mapping (EPIC)** | `P2`, `Feature` | 探索 AST 感知工具减少 Token 噪音、精准读取方法边界，**提升大型代码库探索效率的关键架构方向**。 | 👍 1 / 7 评论 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| **#21968** | **Gemini does not use skills and sub-agents enough** | `P2`, `Bug` | 模型极少主动调用自定义 Skills/Subagents，需显式指令触发，**Agentic 编排能力未充分释放**。 | 👍 0 / 6 评论 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| **#26522** | **Stop Auto Memory from retrying low-signal sessions indefinitely** | `P2`, `Bug` | Auto Memory 低信噪会话无限重试导致资源浪费，**长期运行内存泄漏隐患**。 | 👍 0 / 5 评论 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) |
| **#24246** | **Gemini CLI encounters 400 error with > 128 tools** | `P2`, `Bug` | 工具数超 128 个触发 400 报错，**工具注册表扩展性受限**，阻碍复杂技能集成。 | 👍 0 / 3 评论 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |
| **#22232** | **Enhance browser_agent resilience: session takeover & lock recovery** | `P3`, `Feature` | Browser Manager 遇锁即失败，缺乏会话接管/锁恢复机制，**持久化会话场景脆弱**。 | 👍 0 / 4 评论 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心内容 | 影响范围 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#28730** | **fix(core,cli): resolve false model capacity exhaustion & fix quota lookup** | **Closed (Merged)** | 修复 CLI 虚假容量耗尽错误、修正 Core 配额模型映射、保留 UI “Keep trying” 选项。**直接解决 #25166 类挂起根因**。 | `core`, `cli` | [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) |
| **#28780** | **fix: upgrade shell-quote to 1.8.4 (CVE-2026-9277)** | **Open** | 升级 `shell-quote` 修复 **CRITICAL CVE-2026-9277**（命令注入风险）。**供应链安全必升**。 | `security`, `deps` | [#28780](https://github.com/google-gemini/gemini-cli/pull/28780) |
| **#28778** | **fix: upgrade simple-git to 3.32.3 (CVE-2026-28292)** | **Open** | 升级 `simple-git` 修复 **CRITICAL CVE-2026-28292**。**Git 操作安全加固**。 | `security`, `deps` | [#28778](https://github.com/google-gemini/gemini-cli/pull/28778) |
| **#28729** | **fix(core): resolve swallowed directory mismatch in IDE connections** | **Closed (Merged)** | 修复 Cider/VS Code Fork/Remote Workspace 下虚拟路径导致的 IDE 连接失败，**改善 IDE 伴生体验**。 | `core`, `ide` | [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) |
| **#28688** | **fix(core): dynamically resolve Cloud Workstations proxy redirect URI for OAuth** | **Closed (Merged)** | 修复 Cloud Workstations VM 内 OAuth 重定向硬编码 localhost 导致认证失败，**解锁云端开发环境认证**。 | `core`, `auth`, `cloud` | [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) |
| **#28599** | **fix(core): classify capacity exhaustion as terminal to prevent retry hangs** | **Closed (Merged)** | 将 `MODEL_CAPACITY_EXHAUSTED` (429) 分类为终止性错误（无重试延迟时），触发即时 Fallback，**防止客户端挂起**。 | `core`, `reliability` | [#28599](https://github.com/google-gemini/gemini-cli/pull/28599) |
| **#28716** | **Reclassifying Capacity Exhaustion as Terminal Error** | **Closed (Merged)** | 统一将容量耗尽/余额不足归类为终止错误，优化重试策略与 Fallback 链，**配合 #28599 完善容错**。 | `core`, `reliability` | [#28716](https://github.com/google-gemini/gemini-cli/pull/28716) |
| **#28369** | **feat(evals): add local report command and developer documentation** | **Closed (Merged)** | 新增 `npm run eval:report` 聚合通过率、映射清单策略、支持重复测试用例，**落地 #24353 评测基建**。 | `evals`, `dx` | [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) |
| **#28305** | **feat(evals): add tool call formatter and integrate failure summaries** | **Open** | 评测失败时自动打印工具调用时间线（参数、状态、错误），**大幅缩短调试反馈回路**。 | `evals`, `dx` | [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) |
| **#28581** | **fix(cli): skip diff hunk markers during @ processing** | **Open** | 忽略 diff hunk 标记防止被误解析为 `@file` 引用，消除大 diff 下递归 glob 导致的堆内存增长，**大文件上下文性能优化**。 | `cli`, `performance` | [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) |

---

## 5. 功能需求趋势（从 Issues 提炼）

1.  **Agent 编排鲁棒性（最高频）**：
    *   Subagent 状态上报真实性（#22323）、Generalist 死锁（#21409）、技能/子代理主动调用率低（#21968）、浏览器 Agent 锁恢复（#22232）、Wayland 兼容（#21983）。
    *   **趋势**：从“能跑通”向“生产级稳定、可观测、可控”演进。

2.  **评测与可观测体系建设**：
    *   组件级评测 EPIC（#24353）、本地报告命令（#28369）、失败轨迹可视化（#28305）、Subagent 轨迹分享（#22598）。
    *   **趋势**：建立“评测即代码、发布即门禁、调试即可视”的工程化闭环。

3.  **大规模代码库工程化能力**：
    *   AST 感知工具链探索（#22745, #22746）、工具注册表 128+ 限制突破（#24246）、临时脚本治理（#23571）、大 diff 内存优化（#28581）。
    *   **趋势**：从“文本操作”向“语义级代码理解与结构化编辑”迈进。

4.  **企业级/云原生适配**：
    *   Cloud Workstations OAuth（#28688）、IDE Fork/虚拟路径支持（#28729）、Vertex AI 认证报错友好化（#28679）。
    *   **趋势**：强化非标准开发环境（远程、容器、云 IDE）的首屏体验。

5.  **安全与合规底线**：
    *   连续 CVE 修复（#28780, #28778）、Auto Memory 秘密泄露风险（#26525）、确定性脱敏（#26525）、破坏性命令抑制（#22672）。
    *   **趋势**：供应链安全、数据防泄露、操作审计纳入核心发布流程。

---

## 6. 开发者关注点（痛点与高频诉求）

| 痛点类别 | 典型 Issue/PR | 开发者核心诉

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-08-12

---

## 1. 今日速览
过去 24 小时无新版本发布，但社区活跃度极高：**共 41 个 Issue 被更新**，其中 10 个为今日新增，集中反映 v1.0.79 版本的**配置丢失、模型选择故障、Windows 权限冲突、MCP/OAuth 兼容性**等回归问题。核心维护团队已介入多个高优先级 Bug 的分流与复现。

---

## 2. 版本发布
> 过去 24 小时无新 Release。当前最新稳定版为 **v1.0.79**（近期发布），社区反馈该版本引入多项回归，建议生产环境用户谨慎升级或等待修复补丁。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 重要性 & 社区反应 | 链接 |
|---|-------|----------|-------------------|------|
| 1 | **#4431** `/config model` 清空用户全量配置 | **严重回归**：执行 `/config model` 后 `settings.json` 被覆盖为仅含 model 字段，所有自定义设置丢失。 | 👍 0 / 评论 3（含确认复现），**P0 阻塞级**，影响所有修改过模型的用户。 | [#4431](https://github.com/github/copilot-cli/issues/4431) |
| 2 | **#4422** Enterprise 账号全系 Claude 模型不可用 | 个人 Enterprise 账号在 CLI 中无法选择任何 Claude 模型（Sonnet 5/4.8 等），尽管 Web 端正常。 | 👍 3 / 评论 2，**付费企业用户核心痛点**，疑似权限同步或策略下发故障。 | [#4422](https://github.com/github/copilot-cli/issues/4422) |
| 3 | **#4095** Windows 插件更新被 VS Code 进程锁定 | VS Code 运行时持有插件目录句柄，导致 `copilot plugin update` 报 `Access is denied (os error 5)`。 | 👍 14 / 评论 2，**高赞长期痛点**，涉及 Windows 文件锁定机制与编辑器共存冲突。 | [#4095](https://github.com/github/copilot-cli/issues/4095) |
| 4 | **#4251** v1.0.74 大会话恢复 OOM / CPU 100% 70 分钟 | 版本回归：恢复大型长会话内存峰值飙升 3-4 倍，单核跑满 70 分钟，v1.0.73 正常。 | 👍 1 / 评论 3，**性能回归确认**，附带 A/B 对比数据，影响重度用户工作流。 | [#4251](https://github.com/github/copilot-cli/issues/4251) |
| 5 | **#4211** MCP 响应含 BigInt 导致序列化崩溃 | MCP 服务端返回大整数时 CLI 抛 `TypeError: Do not know how to serialize a BigInt`，中断所有任务。 | 👍 0 / 评论 3，**MCP 集成阻断**，附错误堆栈截图，亟需兼容 JSON BigInt 方案。 | [#4211](https://github.com/github/copilot-cli/issues/4211) |
| 6 | **#4439** v1.0.79 拒绝 GitLab MCP OAuth 元数据 | RFC 8414 issuer mismatch 导致 GitLab Self-Managed MCP 认证失败，疑似验证逻辑收紧。 | 👍 0 / 评论 1，**企业自建 MCP 场景受阻**，涉及安全合规边界。 | [#4439](https://github.com/github/copilot-cli/issues/4439) |
| 7 | **#4151** Windows 插件安装全源失败 | 无论 Marketplace / GitHub / 本地源，`copilot plugin install` 均报 `Access is denied (os error 5)`。 | 👍 1 / 评论 3，**Windows 原生安装链路全挂**，可能与 #4095 同根因。 | [#4151](https://github.com/github/copilot-cli/issues/4151) |
| 8 | **#4434** 用户级默认模型新会话不生效 | `/config model` 设置的默认模型需重启 CLI 才生效，`/clear` 或 Sessions UI 新建会话仍用旧模型。 | 👍 0 / 评论 1，**配置热加载缺失**，体验割裂。 | [#4434](https://github.com/github/copilot-cli/issues/4434) |
| 9 | **#4451** 显式调用斜杠技能被模型注册表二次加载失败 | 用户手动 `@skill` 调用后，模型端 `skill()` 工具再次尝试加载同一技能并报 `Skill not found`。 | 👍 2 / 评论 0，**技能系统重复调度逻辑缺陷**，新增标签 `triage`。 | [#4451](https://github.com/github/copilot-cli/issues/4451) |
| 10 | **#3976** 原生 `tgrep` 索引器大仓库 OOM Kill 宿主机 | 启用 `copilot_cli_tgrep` 实验时，守护进程无内存上限，大型单仓启动时被系统杀掉。 | 👍 0 / 评论 2，**基础设施稳定性风险**，需加资源配额控制。 | [#3976](https://github.com/github/copilot-cli/issues/3976) |

---

## 4. 重要 PR 进展

| # | PR | 标题 & 摘要 | 状态 | 链接 |
|---|----|-------------|------|------|
| 1 | **#4449** | **迁移 PR 自动化远离 `pull_request_target`**<br>安全加固：将不可信 PR 输入限制在低权限 `pull_request` 工作流，写仓库操作迁移至独立高权限流程。 | OPEN (Draft) | [#4449](https://github.com/github/copilot-cli/pull/4449) |
| 2 | **#4428** | **新增初始 Dev Container 配置**<br>提供开箱即用的容器化开发环境，降低贡献者上手门槛。 | OPEN | [#4428](https://github.com/github/copilot-cli/pull/4428) |

> 仅 2 个 PR 更新，均为工程基建类，功能类修复 PR 可能在内部仓库或等待 Issue 确认后提交。

---

## 5. 功能需求趋势（从全部 41 个 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声核心诉求 |
|----------|------------|------------------|
| **配置系统健壮性** | #4431, #4434, #3877 | 配置原子性写入、热加载、启动时自动 `/allow-all` 持久化 |
| **模型策略与多模型编排** | #4422, #4445, #4380, #4377, #4432 | Enterprise 模型权限同步、Auto 模式避开不可用模型、Rubber Duck 反家庭选择策略生效、子代理模型隔离 |
| **Windows 平台原生体验** | #4095, #4151 | 解决文件锁定冲突、安装/更新链路权限提升、与 VS Code 共存 |
| **MCP / OAuth 企业级集成** | #4439, #4211, #4437 | 标准协议兼容、BigInt 序列化、自建 GitLab/Claude Code Agent 互操作 |
| **大规模仓库/会话性能** | #4251, #3976, #4448 | 会话恢复内存/CPU 优化、搜索工具资源配额、索引器守护进程上限 |
| **技能/插件生态去重与解析** | #4430, #4451, #4438, #4440 | 仓库/插件技能去重、显式调用与模型调用解耦、支持 `.claude/rules` 导入 |
| **安全供应链** | #4442 | 依赖 `adm-zip` 含高危 CVE，需升级或替换 |

---

## 6. 开发者关注点 & 痛点总结

1. **v1.0.79 信任度受挫**  
   单日涌入 10+ 回归报告（配置丢失、模型失效、技能调度、会话模型不同步），开发者建议**加入“已知问题”标签或发布 Hotfix 分支**，避免生产环境踩坑。

2. **Enterprise 权限与模型同步不透明**  
   #4422 显示 Web 端可用模型 CLI 不可用，缺乏诊断工具（如 `copilot doctor --models`），开发者呼吁**统一策略下发 API 并暴露给 CLI 查询**。

3. **Windows 原生支持仍是短板**  
   文件锁定（#4095）、安装权限（#4151）长期未根治，**建议引入重命名替换/延迟删除机制**，或提供 `--force` 越过锁定。

4. **MCP 生态兼容性需纳入 CI 矩阵**  
   BigInt 序列化（#4211）、OAuth issuer 校验（#4439）均为标准协议边界案例，**建议在发布流程中接入 MCP 兼容性测试套件**。

5. **大上下文/大仓库资源治理缺失**  
   会话恢复 OOM（#4251）、tgrep 无内存上限（#3976）、搜索卡死（#4448）指向同一根因：**缺乏全局资源配额与背压机制**，期望在配置中暴露 `max_memory_mb`、`max_cpu_percent`。

6. **技能系统架构债务显现**  
   重复加载（#4430）、显式/隐式调用冲突（#4451）、`disable-model-invocation` 语义反直觉（#4438），**亟需重构技能注册表为单一权威来源**，并明确调用链路优先级。

7. **安全依赖更新滞后**  
   `adm-zip@0.5.17` 含 CVE-2026-39244（#4442），**建议引入 Dependabot 自动升级或锁定允许列表**，避免供应链风险阻断容器构建。

---

> **下一步关注**：留意团队是否针对 #4431、#4422、#4251 发布 v1.0.80 Hotfix；Windows 文件锁定能否在下个迭代给出缓解方案；MCP 兼容性测试能否纳入 Release Gate。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-08-12

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **无新版本发布**，但核心功能 PR `#2509`（可配置思考深度 `/effort` 命令）正在活跃开发中，标志着推理能力控制进入工程化阶段。
- **社区核心诉求聚焦“记忆系统”**：两个高热度 Issue（`#1283`、`#1478`）持续更新，开发者强烈呼吁跨会话的持久化上下文管理，且指出现有文档缺失。
- **维护团队集中合并 7 个陈旧修复 PR**（`#2057`、`#2056` 等），清理生产环境 `assert` 隐患、TOCTOU 竞态条件及 PyInstaller 打包问题，显著提升工程稳健性。

---

## 2. 版本发布
**过去 24 小时无新 Release 发布。**

---

## 3. 社区热点 Issues（全量 5 条，按重要性排序）

| # | 标题 | 状态/交互 | 核心诉求 | 关注理由 |
|---|---|---|---|---|
| **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)** | **Feature Request: Memory System - Persistent context across sessions** | `OPEN` • 💬 34 • 创建于 2026-02-27 | 实现全面的**记忆系统**，支持自动记忆（AI 管理）与手动记忆（用户指令 `CLAUDE.md` 风格），实现跨会话项目模式、偏好保留。 | **社区呼声最高、讨论最深**的长期需求。34 条评论表明设计方案仍在博弈，是解决“大项目痛苦”的关键基建。 |
| **[#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478)** | **能否优化记忆层？文档中缺失相关说明，搞大项目很痛苦** | `OPEN` • 💬 1 • 创建于 2026-03-17 | 指出记忆层机制不透明，参考文档仅见 `agent.md`，期望官方文档化 `~/.openclaw/workspace/` 目录结构（`SOUL.md`、`MEMORY.md`、`memory/` 日志）。 | **直击落地痛点**：用户已逆向工程出内部目录结构，官方文档滞后导致高阶用法无法推广，阻碍大项目采用。 |
| **[#2601](https://github.com/MoonshotAI/kimi-cli/issues/2601)** | **Quote & Reply: comment on any selected part of an AI response in Kimi Web** | `OPEN` • 💬 0 • 创建于 2026-08-11 | Web 端支持**选中 AI 回复任意片段（代码块、步骤、Diff 行）引用回复**，实现细粒度上下文追问。 | **交互创新需求**：将“选择-引用-追问”引入 CLI 配套 Web 界面，符合 Agent 协作精细化趋势，提升上下文注入精度。 |
| **[#2600](https://github.com/MoonshotAI/kimi-cli/issues/2600)** | **Windows PowerShell 7 默认 D 盘启动导致路径找不到** | `OPEN` • 💬 0 • 创建于 2026-08-11 | v0.33 版本在 PowerShell 7 非默认启动目录（如 D 盘）下初始化失败，路径解析异常。 | **Windows 兼容性阻断性 Bug**：影响非标准环境开发者首次体验，需修复路径解析逻辑（如 `cwd` 处理）。 |
| **[#2599](https://github.com/MoonshotAI/kimi-cli/issues/2599)** | **CLI 规划任务 Todo 出现“验尸”，吓人** | `OPEN` • 💬 0 • 创建于 2026-08-11 | 规划模式下 Todo 列表出现中文“验尸”词汇（疑似 `Autopsy` 误译或幻觉），破坏专业感。 | **本地化/模型输出质量缺陷**：暴露规划 Prompt 或模型输出后处理在医学/专业术语上的过滤缺失。 |

---

## 4. 重要 PR 进展（全量 8 条，按类型分组）

### 🚀 新功能开发中
| # | 标题 | 状态 | 关键变更 | 关联 Issue |
|---|---|---|---|---|
| **[#2509](https://github.com/MoonshotAI/kimi-cli/pull/2509)** | **feat(kimi): configurable thinking effort and `/effort` command** | `OPEN` | 新增可配置 `thinking_effort`（low/medium/high），提供 `/effort` 斜杠命令动态切换；兼容遗留 `reasoning_effort` 参数。 | `#2501`, `#318` |

### 🛡️ 工程稳健性专项修复（今日集中合并 7 个陈旧 PR）
> 维护团队清理了积压 3-6 个月的“技术债” PR，统一替换生产代码中的 `assert`、修复竞态条件、补全打包依赖。

| # | 标题 | 状态 | 核心修复点 | 风险等级 |
|---|---|---|---|---|
| **[#2057](https://github.com/MoonshotAI/kimi-cli/pull/2057)** | fix(acp): replace `assert` with `RuntimeError` | `CLOSED` | `acp/session.py` 中 5 处 `assert` → `RuntimeError`，防止 `-O` 优化模式下安全检查失效。 | 🔴 **高**（生产环境不变量保护） |
| **[#2056](https://github.com/MoonshotAI/kimi-cli/pull/2056)** | fix(wire): eliminate TOCTOU race in `WireFile.append_record` | `CLOSED` | 修复 `exists()` 与 `stat()` 间的时间窗口竞态，改用 `try/except` 原子操作。 | 🔴 **高**（并发文件损坏风险） |
| **[#2055](https://github.com/MoonshotAI/kimi-cli/pull/2055)** | fix(agentspec): replace `assert` with `AgentSpecError` | `CLOSED` | `agentspec.py` 断言替换为显式异常，保证 `-O` 下扩展校验不失效。 | 🟠 **中** |
| **[#1393](https://github.com/MoonshotAI/kimi-cli/pull/1393)** | fix(acp): route shell commands through terminal args | `CLOSED` | ACP Shell 执行规范化：`command` 传可执行文件，`args` 传参数；适配新 SDK `terminal_id`，增回归测试。 | 🟠 **中**（跨平台 Shell 兼容性） |
| **[#1328](https://github.com/MoonshotAI/kimi-cli/pull/1328)** | Fix minor bugs in file tools and UI feedback | `CLOSED` | 修复 `StrReplaceFile` 多重编辑计数错误、`ReadFile` 空文件报错、Spinner 闪烁等 3 个体验问题。 | 🟢 **低** |
| **[#1082](https://github.com/MoonshotAI/kimi-cli/pull/1082)** | fix(pyinstaller): filter non-existent `dateparser` cache files | `CLOSED` | 打包时排除懒加载生成的 `dateparser_tz_cache.pkl`，修复全新环境/CI 构建失败。 | 🟢 **低**（构建阻断） |
| **[#1077](https://github.com/MoonshotAI/kimi-cli/pull/1077)** | fix: remove redundant mode validation in WriteFile tool | `CLOSED` | 移除 `WriteFile` 中冗余的 `mode` 运行时校验（Schema 已保证），精简代码。 | 🟢 **低** |

---

## 5. 功能需求趋势分析
从 Issue 全量语义聚类，**Top 3 社区关注方向**：

1. **持久化记忆与上下文工程** 🥇
   - `#1283`、`#1478` 双核驱动：需求从“有没有”进化到“怎么好用”、“文档在哪”。
   - 期望形态：分层记忆（人格/用户/长期/每日）、显式指令文件（类 `CLAUDE.md`）、自动摘要与检索。
   - **信号**：用户已自发研究 `~/.openclaw/workspace/` 目录结构，呼吁官方标准化并文档化。

2. **精细化人机协作交互** 🥈
   - `#2601` Quote & Reply：将 Code Review 级别的“选中-评论-追问”引入 Web 端，倒逼上下文注入粒度从“整轮对话”细化到“代码块/步骤/单行 Diff”。

3. **推理能力可控性** 🥉
   - `#2509` `/effort` 命令开发中：开发者要求在 **Token 成本、延迟、推理深度** 三维显式权衡，而非黑盒模型默认行为。

---

## 6. 开发者关注点与痛点总结

| 痛点类别 | 典型反馈 | 影响范围 | 建议优先级 |
|---|---|---|---|
| **大项目上下文崩溃** | “搞大项目的时候很痛苦”、“记忆层优化迫切” (`#1478`) | 核心采纳障碍，阻碍企业级/复杂代码库落地 | **P0** — 需尽快给出 Memory System 设计草案与里程碑 |
| **文档与内部机制不透明** | “参考文档里看到和记忆有关的东西”（仅 `agent.md`） | 高阶用户无法利用现有能力（如 `MEMORY.md`、`SOUL.md`） | **P0** — 同步补齐架构文档与最佳实践指南 |
| **Windows/Shell 兼容性** | PowerShell 7 非标准启动目录路径解析失败 (`#2600`) | Windows 开发者首发体验受损 | **P1** — 修复 `cwd` 解析，增加 CI 矩阵测试 |
| **生产代码鲁棒性** | 大量 `assert` 在 `-O` 下失效、TOCTOU 竞态 (`#2057`、`#2056`) | 潜在数据损坏、静默失败风险 | **P1** — 本次批量修复已覆盖，建议引入 `ruff`/`mypy` 规则禁止生产 `assert` |
| **模型输出异常/本地化** | Todo 出现“验尸”惊悚词汇 (`#2599`) | 信任度损伤，暴露 Prompt 后处理缺失 | **P2** — 增加敏感词过滤/输出规范化 Pipeline |

---

> **分析师备注**：今日动态呈现 **“社区推需求（Memory）、团队还债（稳健性）、新功能孵化（Effort Control）”** 三线

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 ｜ 2026-08-12

---

## 1. 今日速览

OpenCode V2 版本持续快速迭代，今日核心动态集中在 **TUI 体验打磨、Windows 兼容性修复、V2 核心架构稳定性** 三大方向。社区高频反馈 V2 的 Plan Mode 行为异常、ALSA 音频库干扰终端显示、多会话共享服务器时的状态污染等问题；贡献者 kitlangton 主导了 8 个 PR，覆盖 TUI 交互、核心工具注册、测试加速等关键路径。Desktop 端推进本地开发身份隔离与设置页重构，生态侧有第三方客户端呼吁补全 V2 API。

---

## 2. 版本发布

> 过去 24 小时无新 Release 发布。当前主干为 `v2` / `next` 频道持续滚动更新，建议关注 `#41888`（中断后继续执行）等核心合并后的下一夜构建。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 关键点 | 社区热度 | 链接 |
|---|-------|------|--------|----------|------|
| 1 | **#41777** V2: `webfetch` 在 Code Mode 返回 `null` | 🐛 回归 | 核心工具失效，影响联网开发场景；回归窗口已定位至两个 nightly 之间 | 👍0 · 💬3 | [查看](https://github.com/anomalyco/opencode/issues/41777) |
| 2 | **#41763** V2 TUI: ALSA 错误刷屏破坏终端显示 | 🐛 严重 | 无声卡 Linux 环境下频繁触发，直接覆盖 TUI 渲染，严重影响可用性 | 👍1 · 💬3 | [查看](https://github.com/anomalyco/opencode/issues/41763) |
| 3 | **#41869** V1→V2 迁移：SQLite 语法错误（含单引号的旧消息） | 🐛 阻塞 | 迁移脚本未转义 JSON 中的单引号，导致所有含撇号的历史会话无法升级 | 👍0 · 💬2 | [查看](https://github.com/anomalyco/opencode/issues/41869) |
| 4 | **#41828** V2 API 缺口阻碍第三方客户端 | 💡 需求 | Rust TUI 维护者列出 5 项缺失能力（会话分支、工具目录流式、中断恢复等），呼吁官方补全 | 👍0 · 💬2 | [查看](https://github.com/anomalyco/opencode/issues/41828) |
| 5 | **#41890** V2 终端频繁报 `ALSA lib: cannot find card '0'` | 🐛 重复 | 与 #41763 同根因，mosh/远程会话下高频触发，用户困扰大 | 👍0 · 💬1 | [查看](https://github.com/anomalyco/opencode/issues/41890) |
| 6 | **#39831** Zen provider: `gpt-5.6-luna/terra` 返回 403 | 🐛 提供商 | 新模型上线即不可用，怀疑上游鉴权或配额问题，阻断付费用户 | 👍1 · 💬5 | [查看](https://github.com/anomalyco/opencode/issues/39831) |
| 7 | **#41751** v1.18.16 Server 模式：Git 仓库下静默丢失 2 个 Project Skills | 🐛 诡异 | 仅在 `.git` 存在时复现，CLI/TUI 正常，定位难度高，疑为文件监听/索引竞态 | 👍0 · 💬2 | [查看](https://github.com/anomalyco/opencode/issues/41751) |
| 8 | **#37602** 支持 `edit/write` 工具指定文件编码（GBK 等） | 💡 需求 | Windows 遗留代码库刚需，当前强制 UTF-8 导致中文乱码，社区等待久 | 👍2 · 💬2 | [查看](https://github.com/anomalyco/opencode/issues/37602) |
| 9 | **#39181** 多 TUI 共享 Server 时状态污染（分支显示错乱） | 🐛 架构 | 共享服务器架构下工作区隔离不彻底，状态栏跨项目泄露分支信息 | 👍0 · 💬4 | [查看](https://github.com/anomalyco/opencode/issues/39181) |
| 10 | **#40778** V2 Plan Mode 被忽略，Agent 仍修改文件/启动进程 | 🐛 核心 | Plan Mode 失效破坏“只读规划”契约，用户信任度受损，需尽快修复 | 👍1 · 💬3 | [查看](https://github.com/anomalyco/opencode/issues/40778) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 | 链接 |
|---|----|------|----------|------|------|
| 1 | **#41888** `feat(api): continue pending work after interrupt` | ✨ 功能 | 新增 `POST /session/{id}/interrupt?continue=true`，支持中断后恢复未完成工作流，同步生成 Promise/Effect 客户端 | ✅ Closed | [查看](https://github.com/anomalyco/opencode/pull/41888) |
| 2 | **#41887** `feat(tui): add plus button to session tab bar` | ✨ UX | 标签栏新增 “+” 新建会话按钮，补全鼠标交互短板，与浏览器一致 | 🟢 Open | [查看](https://github.com/anomalyco/opencode/pull/41887) |
| 3 | **#31658** `fix: set default UTF-8 encoding for spawned subprocess on Windows` | 🐛 修复 | 修复中文 Windows 下子进程默认代码页导致的乱码，关联 5 个历史 Issue | 🟢 Open | [查看](https://github.com/anomalyco/opencode/pull/31658) |
| 4 | **#41884** `fix(core): gate tool snapshot on initial MCP registration` | 🐛 修复 | 解决启动恢复会话时 MCP 工具注册竞态，避免模型收到过时工具目录 | 🟢 Open | [查看](https://github.com/anomalyco/opencode/pull/41884) |
| 5 | **#41883** `fix(tui): show completed write output` | 🐛 修复 | V2 `write` 工具完成后展示语法高亮内容，从 `v2-migration` 分支回港 | 🟢 Open | [查看](https://github.com/anomalyco/opencode/pull/41883) |
| 6 | **#41880** `fix(tui): align running shell output` | 🐛 修复 | Shell 卡片运行/完成态布局对齐，消除输出跳动，移植自 #41101 | 🟢 Open | [查看](https://github.com/anomalyco/opencode/pull/41880) |
| 7 | **#41870** `feat(tui): autocomplete cd directories` | ✨ 功能 | `/cd` 切换为目录补全，支持 `~` `..` 相对路径、最近目录记忆 | ✅ Closed | [查看](https://github.com/anomalyco/opencode/pull/41870) |
| 8 | **#41838** `core: embed models.dev snapshot instead of compile-time define` | ♻️ 重构 | 模型目录改为静态导入文本文件，构建时刷新，消除编译期依赖 | ✅ Closed | [查看](https://github.com/anomalyco/opencode/pull/41838) |
| 9 | **#40845** `[beta] feat(app): redesign non-modal settings` | ✨ 重构 | 设置页非模态化、分页重组、Projects/Extensions 实数据绑定、多服务器选择优化 | 🟢 Open | [查看](https://github.com/anomalyco/opencode/pull/40845) |
| 10 | **#41894** `fix(app): use Sublime CLI for open with` | 🐛 修复 | Desktop “Open With” 统一调用 `subl` CLI（Win/Linux），修复路径解析 | 🟢 Open | [查看](https://github.com/anomalyco/opencode/pull/41894) |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **V2 核心稳定性** | #41777, #41869, #40778, #40474 | 🔥🔥🔥 | 阻塞级 Bug 密集，Plan Mode、工具链、迁移、模式切换系统性缺失 |
| **TUI 多会话/标签化** | #12548, #17838, #28191, #41887 | 🔥🔥 | Chrome 风格标签、权限面板配置、隐藏实验区、`+` 新建按钮已落地 |
| **Windows 原生体验** | #31658, #37090, #37602, #9995 | 🔥🔥 | 编码/换行符/子进程代码页/系统级安装，长期积压 |
| **模型/提供商生态** | #39831, #41886, #16017, #10272 | 🔥 | 新模型上线即坏、Go/Zen 计划缺模型、隐形调用 Haiku 计费争议 |
| **共享服务器架构隔离** | #39181, #41839 | 🔥 | 多 TUI 挂载单 Server 时工作区状态泄露，架构层面需重构 |
| **第三方客户端友好** | #41828 | 🔥 | Rust/社区客户端维护者明确列出 5 项 API Gap，建议纳入路线图 |
| **Desktop 原生行为** | #18134, #41889, #41894, #40845 | 🔥 | 关闭最小化托盘、本地开发版本隔离、设置页重构、外部编辑器集成 |
| **后台/静默压缩** | #13033 | 🔥 | 自动压缩不应污染聊天流，需可配置静默模式 |
| **MCP 生态文档** | #41822 | 🌱 | 社区贡献 MCP Server 示例文档，生态建设早期信号 |
| **通知体系统一** | #39936, #7242, #4454 | 🌱 | VS Code/系统/桌面/CLI 通知碎片化，呼吁统一抽象 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **V2 可用性门槛高**：Plan Mode 失效、工具返回 `null`、迁移报错、模式切换不可见等核心流程断裂，导致老用户不敢升级、新用户上手受挫。
2. **终端渲染被系统噪音污染**：ALSA 错误直接写入 stdout/stderr，覆盖 TUI，Linux 无声卡/远程会话（mosh/SSH）场景重灾区，建议在 `opencode` 进程层过滤或抑制 `libasound` 诊断输出。
3. **Windows 编码/换行符双重坑**：子进程代码页、工具写入换行符、文件读取编码三处不一致，导致中文遗留项目频繁乱码/污染 diff。
4. **共享服务器模式下的工作区隔离失效**：多 TUI 挂载同一 `opencode serve` 时，Git 分支、技能加载、会话状态跨项目泄露，本质是 Server 端缺乏“工作区上下文”隔离层。
5. **第三方集成缺乏稳定 API 契约**：Rust TUI、VS Code 扩展等外围客户端需自行反向工程，官方若提供 OpenAPI/生成客户端可大幅降低生态维护成本。
6. **模型提供商上游变更响应滞后**：Zen/OpenRouter/Grok 新模型上线即 403/401，缺乏自动探测与降级机制，付费用户感知极差。
7. **Desktop 端原生行为缺失**：关闭窗口非最小化托盘、无系统级安装/静默安装、设置页模态阻塞，阻碍企业分发与日常驻留使用。
8. **后台任务可见性不可控**：自动压缩、MCP 注册、技能索引等后台活动直接刷屏或静默失败，缺乏统一的“后台任务面板”与进度/错误订阅机制。

---

> **下一步建议关注**：`#41888`（中断恢复）合并后的夜间构建能否缓解 Plan Mode 失效；`#31

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-12

> 数据来源：`github.com/earendil-works/pi` (pi-mono 仓库)  
> 统计窗口：过去 24 小时（截至 2026-08-12）

---

## 1. 今日速览

- **无新版本发布**，社区活动集中在 **Bug 修复、稳定性提升与生态扩展**。
- **高优先级阻塞性问题** 占据热点：macOS 高 CPU 占用、Windows CMD 严重渲染异常、GitHub Copilot 登录限流（429）及 WSL 登录挂起。
- **核心工程投入** 体现在：修复 0.84.x 版本引入的回归（usage 丢失、编辑工具参数校验、子会话配置继承）、补全 TUI 交互细节（鼠标复制、翻页键、滚动指示器）以及新增 Qwen 中国区 Token Plan 支持。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 核心影响 | 为什么重要 |
|---|------|------|---------|----------|------------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **High CPU usage on Mac OS with long session** | OPEN | 10 / 8 | 🔴 **性能/稳定性** | 长会话下 macOS CPU 持续 50-110%，内存 600-800MB，疑与上下文长度/会话时长相关，严重影响 Mac 用户体验。 |
| [#7846](https://github.com/earendil-works/pi/issues/7846) | **Unable to start 0.84.0/0.84.1 with bun runtime** | CLOSED | 10 / 1 | 🔴 **运行时兼容** | `zlib.createZstdDecompress is not a function` 导致 bun 环境完全不可用，已修复并回合。 |
| [#7850](https://github.com/earendil-works/pi/issues/7850) | **GitHub Copilot login fails with 429 for orgs with many models** | CLOSED | 7 / 7 | 🔴 **认证/登录** | 模型数 >20 的组织登录必现 429 限流，阻断企业级用户入口。 |
| [#6187](https://github.com/earendil-works/pi/issues/6187) | **Pi login hangs in WSL after browser-based GitHub Copilot device authorization** | CLOSED | 25 / 0 | 🟠 **WSL/登录** | WSL 下设备授权完成但客户端未感知，长期悬而未决的跨平台登录痛点。 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | **Configurable thinking level/model for compaction** | OPEN | 8 / 0 | 🟠 **核心功能** | 压缩/摘要复用会话 thinking level，导致推理模型自动压缩成本不可控，需解耦配置。 |
| [#7836](https://github.com/earendil-works/pi/issues/7836) | **Edit fuzzy match misses lines with differences in whitespace length** | OPEN | 6 / 1 | 🟠 **编辑工具** | 空白符长度差异导致 fuzzy match 失败，小模型编辑成功率显著下降。 |
| [#7911](https://github.com/earendil-works/pi/issues/7911) | **0.84.0's delta-only `message_update` removed `usage`** | OPEN | 2 / 0 | 🟡 **协议/可观测性** | 流式协议中 `usage` 字段丢失，仅在 `message_end` 出现，破坏实时成本监控。 |
| [#7947](https://github.com/earendil-works/pi/issues/7947) | **【P0】Windows CMD: 重复输出、内存泄漏、无法中断** | CLOSED | 2 / 0 | 🔴 **Windows 兼容** | CMD 下输出疯狂重复“0”、内存泄漏、Ctrl+C 失效，原生终端体验极差。 |
| [#7960](https://github.com/earendil-works/pi/issues/7960) | **/resume progress total counts files, completed list counts parsed sessions** | CLOSED | 3 / 0 | 🟡 **UI 一致性** | 进度分母（文件数）与结果数（解析会话数）统计口径不一，误导用户。 |
| [#7987](https://github.com/earendil-works/pi/issues/7987) | **Package remains absent from gallery after republish** | CLOSED | 2 / 0 | 🟡 **扩展生态** | 合规包发布后未出现在 Gallery，影响扩展分发发现。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 | 关联 Issue |
|---|------|------|----------|------------|
| [#7982](https://github.com/earendil-works/pi/pull/7982) | **fix(coding-agent): preserve usage in streaming events** | OPEN | 恢复 JSON/RPC `message_update` 中的累计 `usage` 字段，保持流大小线性，新增回归测试。 | #7911 |
| [#7978](https://github.com/earendil-works/pi/pull/7978) | **fix(edit): normalize single-object edits & collapse whitespace in fuzzy match** | CLOSED | 兼容单对象 `edits` 参数；`normalizeForFuzzyMatch` 折叠连续空白/去除首尾空白。 | #7836, #7904 |
| [#7989](https://github.com/earendil-works/pi/pull/7989) | **feat(ai): add Qwen Token Plan Individual CN provider** | OPEN | 新增 `qwen-token-plan-individual-cn` 内置 Provider，复用 `QWEN_TOKEN_PLAN_CN_API_KEY`。 | #7847 |
| [#7984](https://github.com/earendil-works/pi/pull/7984) | **fix(coding-agent): update grok-mermaid to 0.2.3** | OPEN | 修复 Mermaid 类图渲染异常，HTML 导出同步受益。 | #7832 |
| [#7981](https://github.com/earendil-works/pi/pull/7981) | **fix(ai): map models.dev cost tiers for every provider** | OPEN | 统一所有 Provider 的成本分层映射逻辑，修复除 Copilot 外厂商成本计算缺失。 | #7912 |
| [#7972](https://github.com/earendil-works/pi/pull/7972) | **fix(tui): route selection copy through host clipboard** | CLOSED | OSC 52 复制改为走宿主剪贴板 API，修复 macOS Terminal.app、GNOME Terminal、tmux 下“Copied!”虚假提示。 | — |
| [#7866](https://github.com/earendil-works/pi/pull/7866) | **feat(tui): add copyOnSelect option to TuiAltScreen** | CLOSED | 新增 `copyOnSelect` 选项（默认开），允许禁用全屏模式下鼠标选中自动复制。 | — |
| [#7865](https://github.com/earendil-works/pi/pull/7865) | **fix(tui): handle pageUp/pageDown in SelectList & model-selector** | CLOSED | 统一补全列表组件的翻页键绑定，提升键盘导航一致性。 | — |
| [#7970](https://github.com/earendil-works/pi/pull/7970) | **feat(coding-agent): Show when fullscreen transcript is scrolled up** | OPEN | 状态栏新增 `↓` 指示器，提示用户当前未跟随最新输出，回底自动清除。 | — |
| [#7968](https://github.com/earendil-works/pi/pull/7968) | **feat: intercom (live session-to-session messaging) + ask_predecessor** | CLOSED | 引入进程间通信扩展：文件邮箱通道 + `ask_predecessor` 幽灵响应器，支持会话移交/协作。 | — |

---

## 5. 功能需求趋势（从 Issues 提炼）

1.  **模型提供商多元化与成本透明化**  
    - 新增 Qwen 中国区 Token Plan（#7847/#7989）、OpenRouter Anthropic 兼容（#7938）、Cloudflare AI Gateway Binding（#7901）。  
    - 统一 `models.dev` 成本分层映射（#7912/#7981），需求指向**多云/多厂商统一计费视图**。

2.  **推理模型精细化控制**  
    - 压缩/摘要独立 `thinking level`（#7553）、CLI `--thinking` 参数生效修复（#7966）、`cache_control` 策略适配 OpenRouter（#7938）。  
    - 核心诉求：**Token 预算与推理深度解耦，按任务类型差异化配置**。

3.  **跨平台终端体验达标**  
    - Windows CMD 渲染崩溃（#7947）、WSL 登录挂起（#6187）、macOS 高 CPU（#7730）、tmux/Kitty 图片协议（#7936）、OSC 8 超链接点击失效（#7930）、中文输入法候选框消失（#7923）。  
    - **原生终端适配已成发布门槛级指标**。

4.  **扩展/技能生态工程化**  
    - 技能目录误识别 README 为技能（#7805）、子 Agent 工具数组格式兼容（#7964）、Gallery 发布同步延迟（#7987）、Intercom 会话间通信（#7968）。  
    - 趋势：**从“可用”向“可发现、可组合、可分发”演进**。

5.  **会话/上下文管理增强**  
    - `/resume` 进度统计口径统一（#7960/#7931）、会话 JSONL 版本兼容（#7937）、子会话配置继承（#7897）。  
    - 核心：**长会话、多会话协作下的状态一致性与可恢复性**。

---

## 6. 开发者关注点（痛点与高频诉求）

| 维度 | 典型反馈 | 代表 Issue/PR |
|------|----------|---------------|
| **启动性能** | 设定 jcode 对标基准，要求启动延迟与内存显著收敛 | #7739 |
| **流式协议完整性** | `message_update` 丢失 `usage` 导致实时成本监控失效，需向后兼容 | #7911, #7982 |
| **编辑工具鲁棒性** | 模型输出单对象 `edits`、空白符敏感、JSON 字符串参数均导致工具调用失败 | #7836, #7904, #7944, #7978 |
| **认证链路稳定性** | Copilot 组织模型数触发 429、WSL 设备码轮询超时、bun 运行时缺 Zstd | #7850, #7428, #6187, #7846 |
| **键位绑定体系一致性** | 硬编码 `shift+backspace`/`ctrl+c` 绕过 `keybindings.json`，违背 AGENTS.md 规范 | #7939 |
| **Windows 原生终端支持** | CMD 下输出重复/内存泄漏/无法中断，Git Bash 路径转义陷阱 | #7947, #7829 |
| **文档与示例同步** | SECURING.md 拼写错误、subagent 示例代码跑不通、全屏鼠标行为未文档化 | #7935, #7964, #7965 |

---

> **下一步关注建议**  
> 1. **追踪 #7730 (macOS CPU) 与 #7947 (Windows CMD) 的根因修复进度** —— 两大主流平台阻塞性体验问题。  
> 2. **验证 #7982 (usage 恢复) 与 #7978 (edit 鲁棒性) 合入后的回归测试覆盖**。  
> 3. **关注 #7989 (Qwen CN Provider) 发布节奏**，将直接解锁国内开发者无代理使用门槛。  
> 4. **Intercom 扩展 (#7968) 落地后的多会话协作场景探索**，或成差异化竞争点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-08-12

---

## 1. 今日速览

- **三个版本同步发布**：v0.21.11-preview.0、v0.21.10-nightly、v0.21.10 正式版集中推送，核心修复 Web Shell 会话导航安全性、新增 ACP 推理力度配置、图片预览功能。
- **tmux/iTerm 闪屏成集体痛点**：3 个高优先级 Issue（`#8562` `#8901` `#8962`）同反馈远程终端渲染异常，严重影响远程开发体验。
- **自动化评审与 CI 体系深度演进**：多个 PR 聚焦 autofix 容错机制（`#8960` `#8961`）、增量评审（`#8903` `#8946`）、Maven 多模块验证（`#8777`），工程化基建持续强化。

---

## 2. 版本发布

### v0.21.10 (正式版) | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.10)
| 亮点 | 说明 |
|------|------|
| **ACP 推理力度配置** | 支持通过会话配置在 Default–Max 5 档位切换（#8526） |
| **Web Shell 图片预览** | 上传/粘贴图片可在 Artifact 面板直接预览 |
| **Live Host v0.1.1** | 修复沙箱运行时探测逻辑（#7734）、autofix 序列化问题 |

### v0.21.11-preview.0 / v0.21.10-nightly | [Preview](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-preview.0) | [Nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.10-nightly.20260812.a64d1291d2)
- `fix(web-shell)`: 强制提示词安全的会话导航（#8931）
- `chore(serve)`: 记录会话续传准入日志

> **建议**：生产环境优先用 v0.21.10；需最新 Web Shell 修复可跟踪 preview/nightly。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 关注度 | 为什么重要 |
|---|-------|----------|--------|------------|
| 1 | [#8562](https://github.com/QwenLM/qwen-code/issues/8562) | **tmux+iTerm+SSH 闪屏** | 6 评论 👍0 | 远程开发主流场景受阻，多版本回归，需根因定位 |
| 2 | [#8901](https://github.com/QwenLM/qwen-code/issues/8901) | **mac iTerm 确认命令时闪屏** | 4 评论 👍0 | 复现步骤明确（每次确认必现），阻断交互流 |
| 3 | [#8962](https://github.com/QwenLM/qwen-code/issues/8962) | **tmux 下严重卡顿闪屏** | 2 评论 👍0 | 用户称“完全无法用”，小窗口缓解暗示渲染性能瓶颈 |
| 4 | [#8678](https://github.com/QwenLM/qwen-code/issues/8678) | **大会话恢复超时导致丢失当前会话** | 7 评论 👍0 | P1 故障，PR #8691 已合入部分修复，仍需完善可观测性 |
| 5 | [#8920](https://github.com/QwenLM/qwen-code/issues/8920) | **headless 模式 OpenAI 错误却返回 exit 0** | 4 评论 👍0 | CI/CD 集成场景下静默失败，数据完整性风险 |
| 6 | [#8959](https://github.com/QwenLM/qwen-code/issues/8959) | **主分支 E2E 测试失败** | 4 评论 👍0 | 阻塞合并流水线，需快速修复恢复绿建 |
| 7 | [#8944](https://github.com/QwenLM/qwen-code/issues/8944) | **v0.21.0+ 引入 2 个高危漏洞** | 3 评论 👍0 | 供应链安全，`npm audit` 直接报警，升级阻力大 |
| 8 | [#8909](https://github.com/QwenLM/qwen-code/issues/8909) | **多工作区模式下冷加载用错运行时存储** | 3 评论 👍0 | Daemon 架构核心缺陷，会话隔离失效 |
| 9 | [#8957](https://github.com/QwenLM/qwen-code/issues/8957) | **0.21.2+ 读取图片即崩溃** | 3 评论 👍0 | 回归 Bug，阻断多模态工作流 |
| 10 | [#8948](https://github.com/QwenLM/qwen-code/issues/8948) | **Provider 更新提示承诺切模型但实际不切** | 3 评论 👍0 | 用户预期不一致，配置管理信任度受损 |

> **趋势**：终端渲染（tmux/iTerm）、会话恢复、Headless 语义正确性、供应链安全 — 四大高频痛点。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#8874](https://github.com/QwenLM/qwen-code/pull/8874) | **Feat** | Web Shell 支持工作区文件上传（拖拽、进度、冲突重命名、内联预览） | Web IDE 体验大幅提升 |
| 2 | [#8961](https://github.com/QwenLM/qwen-code/pull/8961) | **Fix/CI** | Autofix 验证门对 runner git config 做密封，修复误判失败 | CI 稳定性、自动化修复可信度 |
| 3 | [#8960](https://github.com/QwenLM/qwen-code/pull/8960) | **Feat/Autofix** | 停止的接管 PR 打标 `autofix/needs-human`，超时自动老化 | 减少人工干预噪音，提升 Fleet 吞吐 |
| 4 | [#8925](https://github.com/QwenLM/qwen-code/pull/8925) | **Fix/CLI** | 结构化输出模式下 API 错误视为终态失败，不再伪装 success | Headless 集成语义修正（对应 #8920） |
| 5 | [#8687](https://github.com/QwenLM/qwen-code/pull/8687) | **Feat/Daemon** | 内置防跨 worktree Git 变更守卫（识别 `-C/--work-tree/--git-dir`） | 多仓库安全隔离 |
| 6 | [#8905](https://github.com/QwenLM/qwen-code/pull/8905) | **Perf/Serve** | 直播日志上限自适应增长（翻倍策略），避免中段截断 | 长任务会话完整性 |
| 7 | [#8956](https://github.com/QwenLM/qwen-code/pull/8956) | **Feat/Review** | 逆向审计新增“外部系统执行模型”缺陷层（沙箱、权限解释器等） | 审计深度与准确性跃升 |
| 8 | [#8777](https://github.com/QwenLM/qwen-code/pull/8777) | **Feat/Review** | 注册 Maven 适配器，`review build-test` 支持多模块构建测试 | Java 生态集成完善 |
| 9 | [#8585](https://github.com/QwenLM/qwen-code/pull/8585) | **Fix/Core** | 兼容点号次版本 Claude 别名（如 `claude-opus-4.8`），补充 Opus 5 token 限制 | 代理/Vertex/Bedrock 部署兼容 |
| 10 | [#8260](https://github.com/QwenLM/qwen-code/pull/8260) | **Fix/Core** | 历史合并时保留**每个**推理片段的 `thoughtSignature`，修复多并行工具调用丢签名 | 推理可追溯性、合规审计 |

> **观察**：PR 密集聚焦 **Web Shell 生产化**、**Autofix 闭环**、**Daemon 多租户安全**、**Review 深度**、**模型兼容性** — 五大战略方向。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 社区呼声强度 | 备注 |
|----------|---------------|--------------|------|
| **远程终端渲染稳定性** | #8562 #8901 #8962 #8634 | ⭐⭐⭐⭐⭐ | tmux/iTerm/SSH 组合成“必现”场景，VP 模式下 Ctrl+S 失效（#8634）同根 |
| **会话/上下文工程化** | #8678 #8909 #8837 #8908 #8182 | ⭐⭐⭐⭐ | 超时保护、多工作区隔离、定时任务持久化、无工作区会话、内存配额公平分摊 |
| **Headless/CI 语义严格性** | #8920 #8925 #8959 #8945 | ⭐⭐⭐⭐ | 结构化输出错误码、增量评审、评审风暴去重、E2E 绿建守护 |
| **模型/Provider 配置体验** | #8514 #8948 #8504 #8897 | ⭐⭐⭐ | ACP 推理力度暴露、更新提示诚实、帮助文档完整、自定义模型保留不重复弹窗 |
| **多模态与文件交互** | #8957 #8874 #8644 #8608 | ⭐⭐⭐ | 图片崩溃回归、Web Shell 上传、Windows 链接编码、内联图片缓存优化 |
| **MCP/工具生态** | #8433 #8922 #8940 #8260 | ⭐⭐ | SDK 内嵌 MCP 会话恢复、Shell 截断阈值生效、并行读文件归属、推理签名保留 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“远程开发第一体验坏了”**  
   - tmux/iTerm/SSH 闪屏、卡顿、Ctrl+S 失效 —— **阻断核心用户群（服务端开发、云原生工程师）日常使用**，急需渲染管线专项优化或兼容模式开关。

2. **“自动化流水线不能信”**  
   - Headless 返回码语义不准（#8920）、E2E 偶发红（#8959）、Autofix 误判（#8961）、评审风暴（#8945） —— **CI/CD 集成方要求“零假阳性、可增量、可审计”**。

3. **“多工作区/多会话隔离漏洞”**  
   - Daemon 冷加载错运行时（#8909）、内存配额不分摊（#8182）、定时任务丢失（#8837） —— **企业级多租户场景硬伤**，架构层面需补课。

4. **“供应链安全与版本信心”**  
   - v0.21.0+ 引入高危漏洞（#8944）、Provider 更新提示失信（#8948）、帮助文档缺参数（#8897） —— **升级决策成本上升**，需 SBOM、语义化变更日志、文档同步机制。

5. **“推理过程可观测、可复现、可审计”**  
   - 签名丢失（#8260）、多轮推理合并（#8534）、劲度配置 ACP 化（#8514） —— **合规/安全/科研场景刚需**，逐渐从“可有可无”变为“必须达标”。

---

## 📌 一句话给维护团队

> **短期**：集中

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-08-12

> 数据来源: `github.com/Hmbown/CodeWhale` (原 DeepSeek-TUI)  
> 统计周期: 2026-08-11 00:00 ~ 2026-08-11 23:59 (UTC)

---

## 1. 今日速览
社区核心精力集中在 **架构重构** 与 **稳定性修复** 两大方向：启动了 TUI 核心 crate 拆解的史诗级任务（EPIC-005），旨在解耦渲染与业务逻辑；同时紧急修复了 v0.9 版本引入的宽终端输出区域回归问题。此外，ACP 协议工具链支持正式合并，标志着与 Zed 等外部编辑器集成能力显著增强。

---

## 2. 版本发布
**无新版本发布** (过去 24 小时)。

---

## 3. 社区热点 Issues
*仅过去 24 小时有更新的 2 条 Issue，均为高优先级。*

| # | 标题 | 状态 | 核心看点 | 社区反应 |
|---|---|---|---|---|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | 🟢 Open | **架构重构里程碑**。追踪将单体 `tui` crate 拆分为 `tui-core`、`tui-widgets`、`tui-layout` 等独立 crate，解耦 Ratatui 依赖，为插件化、多前端复用铺路。 | 作者 `aboimpinto` 正维护子任务清单，2 条评论讨论拆分粒度与发布节奏。 |
| [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) | **[bug] Regression: output area doesn't fill wide terminals (worked in v0.8.65)** | 🟢 Open | **v0.9 关键回归**。宽屏下输出区被错误限制最大宽度，导致大量留白，严重影响大屏/超宽屏开发体验。复现步骤明确，已定位为布局约束逻辑变更。 | 1 条评论确认复现，用户 `M-Maciej` 提供对比截图，优先级隐性为 **P0 (阻塞发布)**。 |

---

## 4. 重要 PR 进展
*筛选过去 24 小时更新的 6 条 PR，按影响力排序。*

| # | 标题 | 状态 | 核心变更 | 技术亮点/风险 |
|---|---|---|---|---|
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | **feat(acp): expose file/search/git/patch/shell tools over session/prompt** | 🟣 **Closed (Merged)** | ACP Server 端补全工具调用闭环：`session/prompt` 现可执行文件读写、搜索、Git、补丁、Shell 等工具，不再仅流式输出文本。 | **里程碑级合并**。解锁 Zed、社区 `acp-deepseek-adapter` 等客户端的完整代码编辑能力。历时 8 天审查，测试覆盖工具调用全链路。 |
| [#5320](https://github.com/Hmbown/CodeWhale/pull/5320) | **fix(session): separate snapshot reads from crash recovery** | 🟢 Open | 引入 `load_session_snapshot` (纯读) 与 `recover_session_for_resume` (含修复统计) 分离关注点；崩溃恢复仅在进程/引擎重启后由宿主在 transcript 锁下执行。 | **核心稳健性修复**。消除工具调用进行中读取快照的竞态条件，为多会话嵌入场景（如 IDE 插件）提供安全恢复原语。 |
| [#5318](https://github.com/Hmbown/CodeWhale/pull/5318) | **feat(tui): pin host terminal window as an always-on-top mini window (Windows)** | 🟢 Open | Windows 原生支持：右键菜单或 `/pin` 命令将宿主终端缩放为 640x400 置顶窗口 (PiP 模式)，再次触发恢复原尺寸/最大化状态。 | **差异化 UX 创新**。利用 `SetWindowPos` `HWND_TOPMOST` 实现，仅限 Windows，跨平台抽象层待补充。 |
| [#5321](https://github.com/Hmbown/CodeWhale/pull/5321) | **feat: register OrcaRouter as a named provider** | 🟢 Open | 按 OpenRouter 模式接入 OrcaRouter：统一模型选择器、配置引用、文档；单 `ORCAROUTER_API_KEY` (sk-orca-) 解锁 150+ 模型。 | **生态扩展**。零破坏性新增 Provider，配置兼容 OpenAI 协议，降低用户多模型切换成本。 |
| [#5319](https://github.com/Hmbown/CodeWhale/pull/5319) | **fix(tui): copy messages without visual rails** | 🟢 Open | 修复复制消息时包含 Ratatui 渲染边框/轨道字符：User/Assistant 单元改复制规范源内容；Tool/Thinking/System 等复杂单元保留全量转录路径。 | **体验细节修复**。新增回归测试，避免富文本渲染污染纯文本剪贴板。 |
| [#5277](https://github.com/Hmbown/CodeWhale/pull/5277) | **build(deps): bump docker/login-action from 4.5.2 to 4.6.0** | 🟢 Open | Dependabot 自动升级 CI 登录动作，含安全加固。 | 例行维护，无业务影响。 |

---

## 5. 功能需求趋势
*从当前 Issue/PR 活动推导社区关注焦点：*

1.  **架构模块化与插件化就绪** (最高优先级)  
    EPIC-005 crate 拆解旨在将 TUI 渲染层、Widget 组件、布局引擎剥离为独立 crate，支撑未来 **Web 前端移植**、**无头模式测试**、第三方 Widget 市场。
2.  **ACP (Agent Client Protocol) 生态建设**  
    #5225 合并标志着 CodeWhale 成为 **首个全工具链支持的 ACP Server**，社区隐性需求转向：Zed 原生集成稳定性、多客户端并发会话隔离、ACP 规范演进跟进。
3.  **多模型网关聚合**  
    OpenRouter、OrcaRouter 相继接入，趋势指向 **统一模型路由层**：用户期望在 TUI 内零配置切换 100+ 模型，厂商锁定风险降至最低。
4.  **跨平台原生体验补齐**  
    Windows PiP 置顶窗口 (#5318) 暗示社区对 **OS 原生窗口管理能力** 需求上升，macOS/Linux 同等特性（如 iTerm2 集成、Wayland Layer Shell）呼声可期。
5.  **大屏/超宽屏适配**  
    #5322 回归暴露布局引擎在极端宽高比下的脆弱性，4K/5K/超宽显示器开发者群体增长，自适应布局成刚需。

---

## 6. 开发者关注点与痛点
*高频反馈聚合：*

| 痛点/需求 | 证据来源 | 影响面 | 建议关注动作 |
|---|---|---|---|
| **v0.9 布局回归阻塞大屏工作流** | #5322 (用户提供对比图) | 全平台宽屏用户 | 回滚或热修复 `layout::constraints` 逻辑，纳入 0.9.6 补丁版。 |
| **会话快照读写竞态导致数据不一致** | #5320 (设计文档级 PR 描述) | 嵌入式场景/IDE 插件/ACP Server | #5320 合并后需补充压力测试，验证并发工具调用下快照一致性。 |
| **ACP 工具调用超时与取消语义未标准化** | #5225 审查讨论隐含 | Zed/第三方客户端开发者 | 文档化 `session/prompt` 取消传播机制，提供客户端 SDK 参考实现。 |
| **Windows 专有功能缺乏跨平台抽象** | #5318 仅实现 Win32 API | 跨平台一致性 | 提出 RFC：引入 `window-management` trait，macOS 用 `NSWindow`、Linux 用 `libwayland`/`X11` 实现。 |
| **依赖更新滞后于安全公告** | #5277 (Dependabot 触发) | 供应链安全 | 启用 `cargo-audit` / `dependabot` 自动合并策略，缩短 CVE 窗口期。 |

---

> **下一关注点**: EPIC-005 子任务拆解进度、#5322 修复 PR 提交时间、ACP 客户端兼容性测试报告 (Zed 最新夜间版)。  
> 如需订阅自动化日报或接入内部工单系统，请联系维护团队配置 Webhook。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*