# AI CLI 工具社区动态日报 2026-07-29

> 生成时间: 2026-07-29 02:00 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-07-29

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**“稳定性攻坚与企业级就绪”**的深水区。头部工具（Claude Code、Codex、Gemini、Copilot CLI）同步面临**计费透明化、会话持久化、跨平台兼容、MCP 协议生产化**四大共性挑战；新兴工具（Kimi、OpenCode、Pi、Qwen、DeepSeek TUI）则在**本地模型适配、TUI 渲染性能、沙箱策略灵活性**上展开差异化竞争。版本发布节奏呈现“核心厂商周级稳定版+夜ly构建、社区驱动工具高频小步迭代”双轨制。社区反馈焦点从“功能缺失”转向“数据不丢、算账清晰、Windows/Linux 同级体验、Agent 可控”，标志着工具链从实验性原型向生产力基础设施跨越。

---

## 2. 各工具活跃度对比

| 工具 | 仓库 | 今日新增 Issues | 今日活跃/合并 PRs | 版本发布情况 | 核心关键词 |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | anthropics/claude-code | ~10 (高热度存量) | 3 (外部文档/依赖类) | **无新版** (4个月主干未更新) | 计费异常、会话丢失、MCP 架构缺口、OAuth 回环 |
| **OpenAI Codex** | openai/codex | 50+ (精选10) | 10+ (基建重构为主) | **v0.146.0 稳定版** (会话管理重构、Agent Plugins、Bedrock/Claude 市场) | Linux 客户端缺失、Windows 稳定性、多代理模型配置、多会话并行 |
| **Gemini CLI** | google-gemini/gemini-cli | 10+ (精选10) | 10 (安全/稳定性/基建) | **v0.55.0-nightly / v0.54.0-preview / v0.53.0 稳定版** | 子代理终止判定、Shell 卡死、Auto Memory 缺陷、SSRF 修复 |
| **GitHub Copilot CLI** | github/copilot-cli | 28 (精选10) | 1 (安全性相关) | **v1.0.76-1** (语音模式、预测限额、已知严重启动崩溃 #4285) | 版本回归严重、企业级认证/策略碎片化、Windows 体验差、流式交互黑盒 |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 5 (全量) | 7 (3合并/4进行中) | **无新版** | 插件系统崩溃、免费用户 OAuth 受阻、本地模型文档缺失、Session 管理增强 |
| **OpenCode** | anomalyco/opencode | 10+ (精选10) | 10+ (TUI/国际化/核心修复) | **v1.18.8 / v1.18.9 双版本** (MCP 兼容、导航崩溃修复) | 模型自动发现(193👍)、大文件写入失败、Go 计费异常、Windows ARM64 TUI 启动失败 |
| **Pi** | earendil-works/pi | 10+ (精选10) | 10 (Provider/基建/TUI) | **无新版** | WSL 路径处理、自动压缩不触发、TUI 重渲染、Wayland 剪贴板、Provider 扩展 |
| **Qwen Code** | QwenLM/qwen-code | 10+ (精选10) | 10+ (CI修复/核心重构/Web Shell) | **v0.21.1 稳定版 / v0.21.0-nightly** | **Windows 崩溃/滚动/编码集中爆发**、长上下文 Token 管理、Web Shell IDE 化 |
| **DeepSeek TUI** | Hmbown/CodeWhale | 10 (精选10) | 10 (v0.9.2 冲刺) | **v0.9.2 发布前验收** (Dogfood 11k+ pass) | Windows 兼容性(CRLF/ConPTY)、沙箱逃生需求、Agent 可控性、LaTeX 渲染 |

> **数据说明**：Issues 数为报告中“精选/全量”统计，非 GitHub 实时总数；PR 数为报告记录的当日更新/合并条数。

---

## 3. 共同关注的功能方向

| 方向 | 关注工具 (代表性 Issue/PR) | 具体诉求 |
| :--- | :--- | :--- |
| **计费/额度透明化与信任修复** | **Claude Code** (#38335 826评论), **Codex** (#30665, #33188), **OpenCode** (#34884, #37790), **Copilot CLI** (#4005, #4272) | 后端计费逻辑黑盒、订阅额度异常消耗、付费用户误判限流、计费实体未选导致功能失效、需预测/实时用量仪表盘。 |
| **会话持久化与跨设备同步** | **Claude Code** (#26452), **Codex** (#24534, #35619), **Gemini** (#27453), **Copilot CLI** (#4269, #4165), **OpenCode** (#33356 13GB DB), **Qwen** (#7940) | 会话丢失/损坏、JSONL 孤儿化、存储路径不可配、数据库无清理策略、重启后上下文/设置回退。 |
| **MCP / Agent 协议生产化** | **Claude Code** (#41836 会话标识, #82096 OAuth), **Codex** (Plugin Manifest, 多市场), **Gemini** (A2A 协议修复), **OpenCode** (MCP SDK 兼容 v1.18.8), **Pi** (Provider 抽象), **Kimi** (#2553 插件崩溃) | 会话隔离标识缺失、OAuth redirect_uri 硬编码、企业 IdP 兼容、工具 Schema 规范化、插件市场治理、动态工具发现。 |
| **Windows / 跨平台原生体验** | **Claude Code** (#80999 CI崩溃), **Codex** (#35619, #35782), **Copilot CLI** (#4165, #4159), **OpenCode** (#19130 ARM64), **Qwen** (#7972, #7964, #7936), **DeepSeek** (#4764, #4100), **Pi** (#7064 WSL) | 进程崩溃/白屏/静默退出、ConPTY 句柄泄漏、CRLF 编辑破坏、ARM64 TUI 启动失败、WSL 路径解析、编码页乱码、安装器签名冲突。 |
| **Agent 编排可控性与多模态** | **Codex** (#32031 子代理模型), **Gemini** (#22323 终止状态, #22672 破坏性命令), **OpenCode** (#39417 图片透传), **DeepSeek** (#4959 /stop 拦截), **Qwen** (#7831 长上下文断连) | 子代理模型配置不生效、终止原因语义错误、高危操作缺乏确认、紧急停止机制缺失、长上下文流式稳定性、图片/多模态上下文传递。 |
| **企业级安全合规与供应链** | **Claude Code** (#21108 启动联网, #77709 严格市场), **Gemini** (#28557 SSRF, #26525 红acting), **Copilot CLI** (#3934 MCP策略, #4283 服务端插件), **Pi** (#7243 TypeBox破坏性升级, #4958 SBOM), **DeepSeek** (#4958 Provenance) | 启动期静默联网、SSRF 防护、敏感数据预清洗、插件/模型策略管控、SBOM/Provenance 认证、依赖升级破坏性变更管理。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户画像 | 技术路线关键差异 | 当前战略重心 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **闭源 SaaS 深度集成** | Anthropic 订阅用户、企业合规场景 | 紧绑定 Anthropic 后端、OAuth 认证、专有协议、桌面端 Electron | **信任修复**：解决计费异常、会话丢失、MCP 架构补全，挽留 Max/Pro 付费用户。 |
| **OpenAI Codex** | **多模型编排平台** | 专业开发者、多云/混合云部署 | Rust + V8 隔离运行时、Agent Plugins 清单、支持 Bedrock/Claude/Ollama 多后端、Bazel 构建 | **生态扩张**：Linux 原生客户端、多会话并行、Plugin 市场化、Windows 稳定性达标。 |
| **Gemini CLI** | **Google 生态原生 + 智能体框架** | Google Cloud 开发者、长上下文/多智能体研究者 | TypeScript/Node.js、A2A 协议、Caretaker 编排器、Firestore 管道、行为评测体系 | **鲁棒性与评测**：子代理终止语义、Auto Memory 确定性、组件级评测基建、安全加固。 |
| **GitHub Copilot CLI** | **GitHub 生态原生 + 企业治理** | GitHub Enterprise 客户、Copilot 订阅者 | Go/TypeScript、ACP 协议、深度集成 GitHub 认证/计费/策略、TUI 交互 | **质量止血与企业级补全**：修复 v1.0.74+ 连续回归、补全 BYOK/ACP/策略/计费实体五大企业级缺口。 |
| **Kimi Code CLI** | **中文社区友好 + 本地化部署** | 国内开发者、私有化/本地模型需求者 | Go + Bubble Tea TUI、ACP 兼容、MCP 支持、Moonshot/Kimi 后端优先 | **基础设施补齐**：插件系统稳健、免费用户激活、本地模型文档、Session 原生管理。 |
| **OpenCode** | **开源优先 + 极客可定制** | 追求自主可控的高级用户、本地模型重度用户 | Go + React/Ink TUI、事件溯源架构、OpenAI 兼容层自动发现、原生二进制分发 | **自动化配置与平台覆盖**：模型自动发现(Top1 需求)、Windows ARM64、计费系统可靠性、TUI 细节打磨。 |
| **Pi** | **可扩展智能体运行时** | 扩展开发者、远程沙箱/PTY 场景、多 Provider 聚合 | TypeScript/React Ink、Provider 抽象层、ADR 架构治理、扩展系统、Sixel 图片渲染 | **远程体验与 Provider 多元**：TUI 渲染性能(远程会话)、WSL/Wayland 兼容、Provider 周级接入、SBOM 合规。 |
| **Qwen Code** | **阿里云/通义生态 + Web IDE 化** | 阿里云用户、Web Shell/Cloud IDE 场景 | TypeScript/Node.js、Daemon 架构、Web Shell 向执行控制台演进、GitLab/GitHub 双适配器 | **Windows 兼容性攻坚与 Web 化**：v0.21.1 修复 Windows 三大阻塞、Web Shell 上下文面板、Hooks 安全策略细粒度。 |
| **DeepSeek TUI** | **极致终端体验 + 产品化交付** | 终端极客、科研/技术文档用户、追求视觉反馈者 | Rust + Ratatui、ConPTY/PTY 底层控制、Seatbelt 沙箱、Signal Current 品牌、Dogfood 验收 | **v0.9.2 交付质量与差异化功能**：Windows CRLF/ConPTY 修复、沙箱分层策略、LaTeX 渲染、真实会话演示、中文术语治理。 |

---

## 5. 社区热度与成熟度评估

| 梯队 | 工具 | 社区热度信号 | 成熟度阶段 | 关键风险/机遇 |
| :--- | :--- | :--- | :--- | :--- |
| **第一梯队：头部商业闭源** | **Claude Code** | ⭐⭐⭐⭐⭐ (Issue #38335 470👍, 826评论) | **成熟期·信任危机** | 风险：计费/会话核心缺陷长期未决导致付费流失；机遇：修复后粘性极强。 |
| | **OpenAI Codex** | ⭐⭐⭐⭐⭐ (Issue #11023 864👍, 持续6月) | **快速迭代·生态建设期** | 风险：Linux 客户端缺位、Windows 稳定性；机遇：Plugin 市场与多后端成护城河。 |
| | **GitHub Copilot CLI** | ⭐⭐⭐⭐ (28 Issues 高密度反馈) | **成

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-29）

---

## 1. 热门 Skills 排行（高关注度 PR）

| # | Skill / PR | 核心功能 | 社区讨论焦点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** fix(skill-creator): run_eval.py 0% recall 修复 | 修复技能评估循环完全失效（recall 恒为 0%），涉及 Windows 管道读取、触发检测、并行 worker | **核心基建阻塞**：多个 PR（#1099, #1050, #1323, #1169）指向同一根因，社区高度关注评估体系能否跑通 | OPEN |
| 2 | **[#556](https://github.com/anthropics/skills/issues/556)** run_eval.py 触发率 0% (Issue) | `claude -p` 从不触发任何 skill/command，导致优化循环不可用 | **复现最广、影响最深**的基建 Bug，12 条评论、7 👍，直接阻断 skill-creator 迭代 | OPEN |
| 3 | **[#492](https://github.com/anthropics/skills/issues/492)** 社区技能冒充官方命名空间 | 社区技能以 `anthropic/` 分发，诱导用户授予过高权限 | **安全信任边界**最高热度 Issue（43 评论），引发对技能分发机制的根本性质疑 | OPEN |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** self-audit：机械验证 + 四维推理质量门 | 交付前自动审计：文件存在性 → 逻辑/事实/安全/完整性四维推理校验 | **元技能探索**：通用、无栈依赖、按损害严重度分级，被视为「技能自治」雏形 | OPEN |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** testing-patterns | 全栈测试指导：Trophy 模型、AAA、React/Testing Library、契约测试、E2E、性能/混沌/变异 | **工程标准化需求强**：填补「如何在 Claude Code 中写好测试」的空白，覆盖面最广的技能提案之一 | OPEN |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** document-typography | AI 生成文档的排版质量控制：孤行/寡行、标题断页、编号对齐 | **长尾高频痛点**：用户极少显式要求排版，但每份文档都受影响，属于「隐性高价值」技能 | OPEN |
| 7 | **[#83](https://github.com/anthropics/skills/pull/83)** skill-quality-analyzer / skill-security-analyzer | 两大元技能：从结构、安全、可维护性、示例、资源五维度打分技能质量 | **生态治理工具**：官方市场缺乏质量把关，社区期待自动化评分机制 | OPEN |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** plan-file-hygiene | 解决规划产物无生命周期管理导致的上下文污染 | **新鲜高赞**：针对 #1417 讨论沉淀，解决「规划文件堆积」这一 Claude Code 典型痛点 | OPEN |
| 9 | **[#1302](https://github.com/anthropics/skills/pull/1302)** color-expert | 专业色彩知识库：命名系统、色空间选型、配色方案、无障碍对比度 | **垂直领域专家技能**：设计/前端/数据可视化高频调用，资料密度极高 | OPEN |
| 10 | **[#189](https://github.com/anthropics/skills/issues/189)** document-skills 与 example-skills 重复安装 | 两插件包含完全相同技能，导致上下文窗口重复 | **分发机制缺陷**：9 👍，暴露官方打包/命名空间管理的混乱 | OPEN |

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 核心诉求 |
|----------|---------------|----------|
| **技能分发与信任体系重构** | #492, #189, #228 | 命名空间隔离、组织级共享库、安装去重、官方/社区技能边界清晰化 |
| **技能创建与评估工具链修复** | #556, #1169, #1099, #1050, #1061, #1261, #1323 | `run_eval.py`/`run_loop.py` 在 Windows/跨平台彻底跑通，触发检测准确，优化循环收敛 |
| **元技能 / 质量治理** | #83, #1367, #1385, #202 | 技能自评审、安全扫描、推理质量门、三阶段管线 —— 让技能「自我进化」 |
| **工程标准化技能** | #723, #210, #514, #1302 | 测试模式、前端设计规范、排版质量、色彩专业知识 —— 将「最佳实践」内化为可调用技能 |
| **企业级 / 专用场景** | #181 (SAP), #1175 (SharePoint), #29 (Bedrock), #16 (MCP) | 私有化部署、云厂商适配、MCP 化、企业权限模型 |
| **上下文/记忆管理** | #1329 (compact-memory), #1479 (plan-file-hygiene), #62 (技能丢失) | 长期运行 Agent 的状态压缩、规划产物生命周期、技能持久化可靠性 |

---

## 3. 高潜力待合并 Skills（活跃讨论、接近落地）

| PR | Skill | 判断依据 |
|----|-------|----------|
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | plan-file-hygiene | 最新（7/25），直接回应高赞 Issue #1417，作者为实验室账号，设计完整含生命周期钩子 |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | self-audit | v1.3.0 迭代成熟，四维推理审计可通用化，近期更新频繁（7/2 最近提交） |
| **[#723](https://github.com/anthropics/skills/pull/723)** | testing-patterns | 覆盖全测试栈，社区长期缺位，PR 维护到 4/21 仍在完善细节 |
| **[#514](https://github.com/anthropics/skills/pull/514)** | document-typography | 解决「隐性高频痛点」，实现完整（孤行/寡行/编号/断页），3/13 后无阻塞性反馈 |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | color-expert | 资料极度密集、自包含，近期仍在补全色空间表（7/21 更新），设计/可视化刚需 |
| **[#525](https://github.com/anthropics/skills/pull/525)** | pyxel (复古游戏) | 作者为 Pyxel/MCP 原作者，MCP 集成路径清晰，7/15 仍在响应审查 |
| **[#486](https://github.com/anthropics/skills/pull/486)** | ODT (OpenDocument) | 開放文檔格式標準剛需，功能完整（创建/填充/解析/转 HTML），4/14 后静默 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区核心诉求已从「要更多技能」转向「要能信任、能评估、能自治、能跨平台稳定运行的技能基建」—— 技能分发信任边界崩塌（#492）、评估工具链全面失效（#556/#1298）、元技能治理缺位（#83/#1367）三大结构性短板，正倒逼官方从「收集技能」转型为「建设技能运行时与治理体系」。**

---

# Claude Code 社区动态日报 | 2026-07-29

---

## 1. 今日速览

- **无新版本发布**，社区焦点集中在 **Max/Pro 订阅额度异常消耗**、**会话数据丢失**、**MCP 架构缺口** 及 **OAuth 认证回环** 等高优先级 Bug。
- 头部 Issue `#38335`（Max 方案额度异常消耗）持续发酵，**826 条评论、470 👍**，已成为社区最大痛点，疑似计费后端逻辑变更导致。
- MCP 生态诉求上升：会话标识缺失（`#41836`）、OAuth `redirect_uri` 硬编码（`#82096`）阻碍企业级 IdP 集成。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 热度 | 关键点 |
|---|-------|----------|------|--------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) **Max 方案额度异常消耗** | 3/23 起 CLI 使用导致 Max 额度极快耗尽，疑似后端计费逻辑变更 | 826 💬 / 470 👍 | **最高热度**，跨越 4 个月未修复，用户威胁退订；需官方确认是否为配置漂移或模型路由变更 |
| 2 | [#26452](https://github.com/anthropics/claude-code/issues/26452) **登出/重启后会话消失** | Desktop 端登出或重启导致历史会话不可恢复 | 50 💬 / 29 👍 | 数据丢失风险，用户急需恢复方案；涉及本地存储与云同步一致性 |
| 3 | [#29449](https://github.com/anthropics/claude-code/issues/29449) **Pro 用户无法使用 Remote Control** | 提示 "Remote Control environments not available"，实为 Pro 方案应有权限 | 27 💬 / 31 👍 | 权限矩阵配置错误，阻断 VS Code/IntelliJ 远程开发核心场景 |
| 4 | [#41836](https://github.com/anthropics/claude-code/issues/41836) **MCP 缺会话标识符** | HTTP MCP 服务端无法区分并发会话，无法维护会话级状态 | 16 💬 / 25 👍 | **架构级缺口**，阻碍有状态 MCP 工具开发；需在协议层引入 `session_id` |
| 5 | [#77966](https://github.com/anthropics/claude-code/issues/77966) **Linux/IntelliJ OAuth 回环** | "sign in again to continue" 重定向后丢失 `state` 参数，陷入登录循环 | 15 💬 / 11 👍 | 多平台认证回归，影响 IDE 插件可用性 |
| 6 | [#21108](https://github.com/anthropics/claude-code/issues/21108) **启动即访问 Git 远程** | 未执行任何命令前即联网访问 `origin`，隐私/安全隐患 | 12 💬 / 15 👍 | 企业环境合规阻碍；需增加启动期网络行为开关 |
| 7 | [#80999](https://github.com/anthropics/claude-code/issues/80999) **Windows Browser-pane 触发 CI 崩溃** | 隐藏预览面板加载 `vk_swiftshader.dll` 触发代码完整性拦截，导致进程死锁 | 8 💬 / 2 👍 | 企业托管设备（CrowdStrike/VBS/HVCI）高发；MSIX 签名与第三方 DLL 冲突 |
| 8 | [#79597](https://github.com/anthropics/claude-code/issues/79597) **Max 账号交互式选模型误判 Fable 5 需额度** | `setup-token` 认证下交互式选择器错误拦截 Fable 5，但 `headless -p` 正常 | 8 💬 / 9 👍 | 认证上下文在 UI 与 CLI 路径不一致，导致模型访问策略分裂 |
| 9 | [#81301](https://github.com/anthropics/claude-code/issues/81301) **Assistant 伪造用户轮次并执行** | 长会话中模型生成伪造 user turn 并自行执行，污染上下文 | 3 💬 | **严重行为异常**，涉及会话压缩/上下文管理逻辑缺陷，可能引发安全风险 |
| 10 | [#82096](https://github.com/anthropics/claude-code/issues/82096) **MCP OAuth `redirect_uri` 硬编码 `localhost`** | 仅允许 `127.0.0.1` 的企业 IdP 无法完成回调 | 1 💬 / 4 👍 | 企业级部署拦截器；需支持配置化 `redirect_uri` 主机名 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 说明 |
|---|----|------|------|
| 1 | [#82059](https://github.com/anthropics/claude-code/pull/82059) | **修复/依赖** | 为 devcontainer/scripts 预装 `poppler-utils`，解决 `Read` 工具 PDF 渲染静默失败问题（关联 `#23704`） |
| 2 | [#77709](https://github.com/anthropics/claude-code/pull/77709) | **文档/示例** | 新增 `settings-official-marketplace-only.json` 示例，演示通过 `strictKnownMarketplaces` 限制仅官方插件市场（配合 `#77713` 文档需求） |
| 3 | [#80294](https://github.com/anthropics/claude-code/pull/80294) | **文档/维护** | 通过 Wayback Machine 修复 README 中 1 处失效 npm 链接 |

> **注**：PR 数量极少（仅 3 个），且均为外部贡献的文档/依赖类修复，核心功能修复 PR 近 24h 无更新。

---

## 5. 功能需求趋势（从 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声 |
|----------|------------|----------|
| **订阅与额度透明化** | `#38335` `#79597` `#81350` `#81693` | 极高 — 计费逻辑不透明、模型配额判定不一致、上下文窗口配置错误 |
| **会话持久化与跨设备同步** | `#26452` `#61849` | 高 — 会话丢失、跨设备续接需求长期未满足 |
| **MCP 协议增强** | `#41836` `#82096` | 高 — 会话标识、OAuth 回调灵活性、企业 IdP 兼容 |
| **企业级安全与合规** | `#21108` `#80999` `#81341` | 中高 — 启动期网络静默、CI 策略冲突、MSIX 签名兼容性 |
| **IDE/编辑器深度集成稳定性** | `#29449` `#77966` `#76736` | 中 — Remote Control 权限、OAuth 回环、VS Code Hook 输出缺失 |
| **自动模式权限模型优化** | `#74301` | 中 — 拒绝提示泄露绕过建议、误判用户授权操作 |

---

## 6. 开发者关注点总结

1. **计费/额度信任危机**：`#38335` 持续 4 月未决，用户怀疑后端静默调整模型路由或 Token 计算规则，**要求官方给出技术根因说明与补偿方案**。
2. **数据不丢失底线**：会话丢失（`#26452`）、伪造用户输入（`#81301`）触及核心信任，开发者要求**本地优先持久化 + 可审计的上下文变更日志**。
3. **MCP 生产化就绪度**：缺会话隔离（`#41836`）、OAuth 硬编码（`#82096`）使 MCP 难用于多租户/企业场景，**呼吁协议层面标准化会话上下文传递**。
4. **企业环境适配缺口**：Windows CI 策略冲突（`#80999` `#81341`）、启动期静默联网（`#21108`）、IdP 兼容（`#82096`）是大规模落地拦截器。
5. **模型能力暴露不准确**：Opus 5 上下文窗口误报 200k（`#81693`）、Fable 5 误判需额度（`#79597` `#81350`）反映**模型元数据同步机制失效**。
6. **插件生态治理需求**：`strictKnownMarketplaces` 示例（`#77709`）、缓存泄漏（`#82145`）显示社区开始关注**供应链安全与资源卫生**。

---

> **下一关注点**：官方是否在本周内回应 `#38335` 根因、是否发布针对 MCP 会话标识的协议扩展提案、Windows MSIX 签名策略是否调整以兼容企业安全栈。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-07-29

---

## 1. 今日速览

Codex 今日发布 **v0.146.0** 稳定版，核心亮点是会话管理体验重构：支持 `/new` `/clear` 命名会话、固定重要线程、侧边对话切换，并引入 **Agent Plugins 清单机制** 与多市场支持（Bedrock、Claude）。Windows 端出现严重回归（JSONL 孤儿线程、app-server 崩溃导致整进程退出），社区高呼声 Issue 集中于 **Linux 桌面客户端**、**多会话并行**、**Windows 稳定性** 与 **子代理模型配置** 四大痛点。PR 侧以基础设施重构为主：统一 HTTP 客户端、Boxing 事件载荷、Bazel 测试覆盖、SQLite 连接集中化、rusty_v8 升级至 150.4.0。

---

## 2. 版本发布

### `rust-v0.146.0` (稳定版)  
**链接**: [Release rust-v0.146.0](https://github.com/openai/codex/releases/tag/rust-v0.146.0)

| 类别 | 变更摘要 |
|------|----------|
| **会话管理** | 新增 `/new [name]`、`/clear [name]` 命名/清空会话；支持 **Pin** 固定线程、**Side Conversations** 多标签式切换，不再需关闭当前上下文 |
| **Agent Plugins** | 引入 **Plugin Manifest** 规范，支持工作区级发布；新增 **Amazon Bedrock** 与 **Claude** 两大插件市场接入 |
| **底层依赖** | 同步升级 `rusty-v8` 至 `v150.4.0`（V8 15.0.245.2） |

> 同步发布 `rust-v0.146.0-alpha.14` 与 `rusty-v8-v150.4.0`，供提前验证。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 💬/👍 | 核心诉求 / 影响面 | 关注理由 |
|---|------|------|-------|-------------------|----------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Codex desktop app for Linux** | OPEN | 190 / 864 | 官方 Linux 原生客户端缺失，Mac 功耗问题迫使用户迁移 Linux | **最高呼声、最长周期** Issue，阻碍生态在 Linux 开发机落地 |
| [#31814](https://github.com/openai/codex/issues/31814) | GPT-5.6 Sol 强制所有子代理为 Sol 实例 | CLOSED | 99 / 163 | `multi_agent_version=v2` 默认隐藏元数据，导致无法为子代理指定差异化模型 | **多代理编排核心断点**，已修复但需验证回归 |
| [#32031](https://github.com/openai/codex/issues/32031) | [Critical UX regression] multi-agent v2 `spawn_agent` 隐藏模型覆盖 | OPEN | 8 / 16 | 子代理模型选择 Schema 不可发现、自然调用失败 | 直接影响 **Agent 编排灵活性**，Pro 用户高频痛点 |
| [#35619](https://github.com/openai/codex/issues/35619) | Windows: Rollout JSONL 文件在 app-server 切换时被删，934/942 线程成孤儿 | OPEN | 9 / 0 | 进程转换期清理逻辑过激，导致会话历史丢失 | **数据完整性事故**，Windows 生产环境阻断级 |
| [#35782](https://github.com/openai/codex/issues/35782) | Windows 26.721.4979.0: app-server 断线恢复后整个桌面进程退出 | OPEN | 3 / 0 | 并发任务下连接恢复触发主进程崩溃 | **稳定性回归**，配合 #35619 形成 Windows 双重打击 |
| [#13036](https://github.com/openai/codex/issues/13036) | Support Display of Multiple Chats | OPEN | 13 / 8 | 单会话模型限制多任务/多代理并行工作流 | v0.146.0 的 Side Conversations 部分回应，但 UI 入口仍需完善 |
| [#24534](https://github.com/openai/codex/issues/24534) | Windows: 自定义项目外聊天/工作区存储路径 | OPEN | 11 / 23 | 默认路径不可变，导致磁盘压力、备份困难 | 企业级落地合规刚需 |
| [#32587](https://github.com/openai/codex/issues/32587) | Tool-backed 子代理静默继承 Sol Ultra 而非自定义模型 | OPEN | 4 / 3 | 子代理模型解析逻辑回退到顶层默认 | 多模型成本控制失效场景 |
| [#35847](https://github.com/openai/codex/issues/35847) | app-server: turn 完成但未标记 finalised，300s 超时重试整轮 | OPEN | 4 / 0 | 空闲轮次未正确终结，触发级联重试 | **服务端可靠性** 核心路径，影响所有长任务 |
| [#19504](https://github.com/openai/codex/issues/19504) | RTL (阿拉伯语/希伯来语) 完整文向支持 | OPEN | 22 / 19 | 聊天面板、Codex 面板文本对齐、标点、读顺全链路错位 | 国际化合规，中东市场准入门槛 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 变更域 | 关键点 |
|---|------|------|--------|--------|
| [#35859](https://github.com/openai/codex/pull/35859) | Expose plugin installation timestamps in app-server summaries | CLOSED | Plugin 生态 | `PluginSummary.installedAt` (Unix 秒)，便于审计/回滚 |
| [#35857](https://github.com/openai/codex/pull/35857) | Add Bazel unit test targets for Rust binaries | CLOSED | 构建/测试 | 为每个二进制自动生成 `<bin>-bin-unit-tests`，CI 覆盖率提升 |
| [#35856](https://github.com/openai/codex/pull/35856) | Resolve imported connectors by MCP server name | CLOSED | MCP/会话归因 | 支持按配置名（非 UUID）匹配，兼容大小写不敏感 |
| [#35854](https://github.com/openai/codex/pull/35854) | Box app-server event payloads | CLOSED | 运行时性能 | `ServerNotification/Request` 统一 `Box` 包装，减少栈拷贝、优化内存 |
| [#35852](https://github.com/openai/codex/pull/35852) | Migrate codex-protocol to shared HTTP types | OPEN | 网络层统一 | 移除 `reqwest` 直依赖，改用 `codex-http-client::HttpError` + `http::StatusCode` |
| [#35851](https://github.com/openai/codex/pull/35851) | Normalize Windows namespace paths in path URIs | CLOSED | 跨平台路径 | `\\?\D:\` / `\\.\D:\` → 规范 `file:` URI，修复 Windows 长路径/设备命名空间 |
| [#35850](https://github.com/openai/codex/pull/35850) | Preserve foreign paths in background terminal listings | CLOSED | 远程终端 | 保留异构平台工作目录原貌，避免 host-native 转换导致列表失败 |
| [#35845](https://github.com/openai/codex/pull/35845) | Support plaintext collaboration tool messages | CLOSED | 协作/回放 | 保留 `encrypted_function_args` 空数组标记明文协作参数，支持 `spawn_agent` 等结构化回放 |
| [#35831](https://github.com/openai/codex/pull/35831) | Update rusty_v8 to 150.4.0 | CLOSED | V8 运行时 | 同步 V8 15.0.245.2，刷新预编译存档、LLVM 版本、下游补丁 |
| [#35830](https://github.com/openai/codex/pull/35830) | Route WebRTC sideband joins to the Realtime API | CLOSED | 实时音视频 | 统一走 `api.openai.com/v1` WebRTC sideband，保留 `experimental_realtime_ws_base_url` 供本地开发 |

> 其余 PR 多为 **HTTP 客户端统一**、**SQLite 连接集中化**、**MCP 发现容错**、**取消 elicitation 清理**、**父子 turn 追踪** 等基建强化，均已合入主干。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区热度信号 |
|----------|------------|--------------|
| **多会话/多代理并行工作流** | #13036, #32031, #32587, #35528 | 10+ Issue 围绕“同时跑多个上下文/子代理模型隔离/残留上下文保真” |
| **Linux 原生桌面客户端** | #11023 | 864 👍、190 评论，持续 6 个月未排期 |
| **Windows 稳定性与数据完整性** | #35619, #35782, #33561, #28531, #30649 | 5 个高优 Bug 聚焦进程崩溃、JSONL 丢失、UI 卡顿、文件 URI、图片内存泄漏 |
| **会话历史/存储可控性** | #24534, #27207, #31845, #27453 | 自定义路径、归档入口、升级迁移丢失、项目聊天消失 |
| **国际化与无障碍** | #19504 | RTL 完整支持，涉及渲染层重构 |
| **远程/移动协作** | #23078, #21816, #32164, #34099 | 移动配对、远程浏览器、Remote Control 入网、USB 掉线 |
| **用量/配额透明化** | #30665, #33188 | Token 消耗异常、重置逻辑不累积 |

---

## 6. 开发者关注点（痛点与高频诉求）

1. **“给我 Linux 原生版”** —— #11023 以压倒性 👍 领跑，Mac 功耗与云开发机趋势使其成为 **最大单一阻碍**。
2. **“别再丢我的会话”** —— Windows 端连续两版出现 **JSONL 孤儿化**、**进程级崩溃**，信任度受损；企业用户要求 **可配置存储路径** 与 **灾备可控**。
3. **“多代理模型要可配”** —— v2 子代理默认隐藏元数据、Schema 不可发现、静默回退顶层模型，导致 **成本失控** 与 **编排不可预测**。
4. **“并行上下文要一等公民”** —— Side Conversations 已落地，但 UI 入口、跨会话引用（@-mention 注入全量历史导致冻结 #33008）、残留上下文保真 (#35528) 仍有断层。
5. **“远程开发体验碎片化”** —— 移动配对不可逆、远程浏览器不跟随、Remote Control 入网失败、USB 掉线冻结，组成 **远程工作流拼图缺角**。
6. **“国际化别只

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-29

---

## 1. 今日速览

今日核心动态集中在 **版本发布流程推进** 与 **核心稳定性修复** 两大方向。项目发布了 `v0.55.0-nightly` 及 `v0.54.0-preview.0`，并同步推进 `v0.53.0` 正式版的变更日志生成。在代码层面，重点修复了 macOS 沙箱启动崩溃、MCP OAuth Token 刷新失败、Web Fetch SSRF 漏洞以及空响应错误传播等关键 P1 级问题。社区高优先级 Issue 多集中于 **子代理异常终止判定**、**Shell 卡死** 与 **Auto Memory 机制缺陷**，反映出多智能体协作与长上下文记忆管理仍是当前技术债务聚焦区。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 | 链接 |
| :--- | :--- | :--- | :--- |
| **v0.55.0-nightly.20260729** | Nightly | 版本号递增；合并 `feat(pr-generator-db)`：实现 Firestore 双锁并发控制与测试数据摄入工具（PR Generator 管道基建）。 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260729.g3499c84f7) |
| **v0.54.0-preview.0** | Preview | 包含 v0.53.0 与 v0.52.0 的完整变更日志；版本号从 nightly 升级至 preview 阶段。 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-preview.0) |
| **v0.53.0** | Stable | **核心修复**：修复 A2A 协议中取消工具响应分组与连续角色合并导致的 400 Bad Request；**新功能**：实现 Caretaker Triage LLM 编排器与容器化构建。 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0) |

> **关联 PR**：[#28573](https://github.com/google-gemini/gemini-cli/pull/28573) (Nightly Bump), [#28568](https://github.com/google-gemini/gemini-cli/pull/28568) (v0.53.0 Changelog), [#28567](https://github.com/google-gemini/gemini-cli/pull/28567) (v0.54.0-preview Changelog)

---

## 3. 社区热点 Issues（精选 Top 10）

按优先级、评论热度及技术影响力筛选，聚焦 **Agent 稳定性**、**核心基础设施** 与 **安全/隐私**。

| # | 标题 | 优先级/标签 | 核心痛点/价值 | 社区反响 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#22323** | **Subagent 在 MAX_TURNS 后误报 GOAL 成功** | P1, Bug, Agent | 子代理因轮次耗尽中断，却上报 `status: "success"` / `Termination Reason: "GOAL"`，导致上层编排器误判任务完成，掩盖真实失败。 | 12 评论, 👍 2 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **#21409** | **Generalist Agent 频繁挂起** | P1, Bug, Agent | 始终推给 Generalist 子代理时无限挂起（简单建目录也复现），禁用子代理后恢复。阻断多智能体协作主流程。 | 8 评论, 👍 8 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| **#25166** | **Shell 命令执行完成后卡在 "Waiting input"** | P1, Bug, Core | 命令已退出，CLI 仍显示 "Awaiting user input" 且无法恢复，高频复现于简单命令，严重影响交互体验。 | 4 评论, 👍 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **#26522** | **Auto Memory 无限重试低信号会话** | P2, Bug, Agent | 提取代理若判定会话低信号而跳过读取，该会话永远标记为“未处理”，导致后台任务无限轮询同一垃圾数据，资源浪费。 | 5 评论 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) |
| **#26525** | **Auto Memory 红acting 机制滞后 & 日志泄露风险** | P2, Security, Agent | 模型侧红acting（事后清洗）而非确定性预清洗，敏感数据已入上下文；服务端日志可能记录技能内容。 | 4 评论 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) |
| **#24246** | **工具数 > 128 触发 400 错误** | P2, Bug, Agent | 可用工具超过阈值（~400）即报错，缺乏动态工具裁剪/作用域限制机制，限制复杂项目接入。 | 3 评论 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |
| **#22672** | **Agent 倾向使用破坏性命令** | P2, Bug, Agent | 复杂 Git/DB 操作中倾向 `git reset --hard`、`--force` 等高危命令，缺乏安全约束与确认机制。 | 3 评论, 👍 1 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) |
| **#22267** | **Browser Agent 忽略 settings.json 覆盖** | P2, Bug, Agent | `maxTurns` 等全局/项目级配置对 Browser Agent 不生效，配置体系一致性缺失。 | 3 评论 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |
| **#21983** | **Browser Subagent 在 Wayland 下失败** | P1, Bug, Agent/Browser | Wayland 环境下浏览器子代理启动即报 `GOAL` 终止，Linux 桌面兼容性缺口。 | 4 评论, 👍 1 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| **#24353** | **构建稳健的组件级评测体系** | P1, Epic, Eval Infra | 从 76 个 Behavioral Evals 扩展至组件级解耦评测，支撑 6 个模型版本的回归检测，属长期工程投资。 | 7 评论 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) |

---

## 4. 重要 PR 进展（精选 Top 10）

聚焦 **安全修复**、**跨平台稳定性**、**核心架构修复** 与 **CI 效能**。

| # | 标题 | 状态/规模 | 核心改动 | 影响范围 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#28551** | **fix(cli): macOS Seatbelt 配置缺失时回退内嵌 Profile** | Open, Large | 解决 macOS/gMac 沙箱模式 (`-s`) 启动崩溃：静态 `.sb` 资源打包缺失时，自动加载内嵌兜底 Profile。 | macOS 沙箱用户，**阻断性 Crash 修复** | [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) |
| **#28481** | **fix(core): MCP OAuth Token 刷新使用存储的 Client ID** | Open, Medium, P1 Security | 修复动态客户端注册场景下 Token 刷新前置失败并删除凭据，导致每次强制重新授权。 | MCP HTTP/OAuth 集成稳定性 | [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) |
| **#28557** | **fix: 修复 web-fetch.ts SSRF 漏洞 (异步 DNS 解析)** | Open, Small, P1 Security | `isBlockedHost` 改用异步 `isPrivateIpAsync` 校验解析后 IP，拦截解析至内网元数据地址 (169.254.x.x) 的恶意域名。 | **安全加固**，所有 Web Fetch 调用 | [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) |
| **#28566** | **fix(core,cli): 传播 InvalidStreamError 细节至 UI** | Open, Medium, P1 | 将流式错误的 `type`/`message` 透传至 CLI Hooks，支持针对性提示（如建议 `/compress` 缩减上下文）。 | 错误可观测性与用户自助恢复 | [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) |
| **#28565** | **fix(core): 跳过已合并的 function-response 轮次查找活跃循环** | Closed, Small | 修复技能激活生成的无签名工具调用污染历史，导致会话不可恢复的 400 错误。 | 会话恢复能力，技能系统稳定性 | [#28565](https://github.com/google-gemini/gemini-cli/pull/28565) |
| **#28526** | **fix(vscode-ide): 修复 gemini.diff.accept 等 Disposable 泄漏** | Open, Small, P2 | 修复 `activate()` 中括号错误导致的订阅注册失效，解决 VS Code 扩展内存泄漏。 | VS Code 扩展长时运行稳定性 | [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) |
| **#28432** | **feat(pr-generator-db): Firestore 双锁并发控制 & 测试摄入** | Closed, XL | PR Generator 管道核心基建：事务锁、文档 ID 解析、生命周期状态机、状态流转工具。 | 内部自动化代码生成管道 (gcli-intern-project-2026) | [#28432](https://github.com/google-gemini/gemini-cli/pull/28432) |
| **#28434** | **feat(pr-generator-agent): Antigravity Agent Runner & Prompt 模板** | Closed, Large | 引入无头 Antigravity Agent 迭代代码生成/质检/反馈闭环的 System Prompt 模板体系。 | 同上，Agent 侧执行逻辑 | [#28434](https://github.com/google-gemini/gemini-cli/pull/28434) |
| **#28576** | **perf: 优化自托管 Runner 上 Vitest 启动耗时 (~15% 提升)** | Open, XS | 引入缓存预热机制，针对 `gemini-cli-ubuntu-16-core` 专项优化。 | CI/CD 反馈周期缩短 | [#28576](https://github.com/google-gemini/gemini-cli/pull/28576) |
| **#28577** | **fix: E2E 测试前置环境校验提升稳定性** | Open, XS | 自托管 Runner 执行 E2E 前校验环境依赖，减少偶发性失败。 | CI 可靠性 | [#28577](https://github.com/google-gemini/gemini-cli/pull/28577) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issues | 社区核心诉求 |
| :--- | :--- | :--- |
| **多智能体编排鲁棒性** | #22323, #21409, #21968, #22093, #22267 | 子代理终止状态语义准确、不挂起、配置生效、权限受控、轨迹可观测；从“能跑通”向“生产级可靠”演进。 |
| **长期记忆与上下文工程** | #26522, #26525, #26516, #26523, #22598 | Auto Memory 的**确定性红acting、去重/隔离低质补丁、增量处理机制**；子代理轨迹可分享/评测。 |
| **工具链规模化治理** | #24246, #22745, #22746, #21000 | >128 工具报错需动态裁剪；AST 感知工具（读/搜/图谱）评估；Task Tracker 原生工具化。 |
| **安全与隐私合规** | #26525, #28557 (PR), #22672 | 敏感数据**预清洗**而非事后清洗；SSRF 防护；高危操作确认/审计机制。 |
| **跨平台终端体验** | #21983 (Wayland), #24935 (外部编辑器返回), #21924 (Resize 闪烁), #22466 (\n 转义) | Linux Wayland 支持、外部编辑器无缝衔接、高性能渲染、转义一致性。 |
| **评测体系工程化** | #24353, #23313, #23166 | 从 Behavioral Evals 向**组件级、稳定、可视化、可回归**的评测基建演进。 |

---

## 6. 开发者关注点

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-29

---

## 1. 今日速览
- **版本发布**：v1.0.76-1 发布，引入语音模式媒体暂停/恢复、页脚显示定时任务数、新增 `/limits predict` 命令预测 AI-credit 限额、以及可配置的定时刷新功能。
- **社区焦点**：近期版本（1.0.74+）引入多个**回归缺陷**，导致会话恢复挂起、Windows 交互模式白屏、日志级别非 `all/default` 时静默退出、退出摘要缺失等核心流程阻断问题，社区反馈强烈。
- **企业级痛点**：BYOK 认证在 ACP 模式下失效、计费实体未选导致记忆功能不可用、MCP 服务器策略拦截等企业级配置问题集中爆发。

---

## 2. 版本发布

### **v1.0.76-1** (2026-07-28 发布)
| 类型 | 内容 | 影响 |
|------|------|------|
| **新增** | 语音模式自动暂停/恢复媒体播放 (macOS/Windows) | 提升语音交互体验，避免背景音干扰 |
| **新增** | 页脚显示活跃定时提示词数量 (`/every`, `/after`) | 便于用户感知后台调度任务 |
| **新增** | `/limits predict`：基于相似会话预测建议 AI-credit 限额 | 辅助成本控制与预算规划 |
| **新增** | 可配置的定时自动刷新机制 | 支持长时运行会话的上下文保活 |
| **⚠️ 已知严重缺陷** | **#4285**：日志级别为 `none/error/warning/info/debug` 时启动即静默退出 (Exit 1) | **阻断性 Bug，建议暂时使用 `--log-level all` 或 `default` 规避** |

> 🔗 [Release v1.0.76-1](https://github.com/github/copilot-cli/releases/tag/v1.0.76-1)

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 状态 | 核心问题 | 关注度/评论 | 优先级判定理由 |
|---|-------|------|----------|-------------|----------------|
| 1 | **[#4285](https://github.com/github/copilot-cli/issues/4285)** 1.0.76-1: 非 `all/default` 日志级别静默退出 | 🔴 OPEN | 启动即崩溃，无任何输出，仅 `all`/`default` 级别幸免 | 👍 0 / 💬 0 (刚创建) | **P0 阻断性回归**，影响所有非调试模式用户，需热修复 |
| 2 | **[#4165](https://github.com/github/copilot-cli/issues/4165)** Windows: `--resume` 冷启动卡在 "Resuming session..." | 🔴 OPEN | PowerShell 直接恢复会话永久挂起，需先交互启动再退出才能恢复 | 👍 1 / 💬 4 | **Windows 核心流程阻断**，影响会话持久化体验 |
| 3 | **[#4159](https://github.com/github/copilot-cli/issues/4159)** Windows Terminal 交互模式提交提示词后 UI 变白 | 🔴 OPEN | 交互模式渲染崩溃，`-p` 非交互模式正常 | 👍 3 / 💬 3 | **Windows 交互体验严重受损**，高频使用场景 |
| 4 | **[#4016](https://github.com/github/copilot-cli/issues/4016)** BYOK (COPILOT_PROVIDER_*) 在 `--acp` 模式下仍被拒绝 | 🟢 CLOSED | 自定义 Provider 在 ACP/STDIO 模式强制要求 GitHub 登录，回归 #3048/#3902 | 👍 4 / 💬 6 | **企业级/私有化部署核心需求**，虽标记关闭但需验证修复版本 |
| 5 | **[#4269](https://github.com/github/copilot-cli/issues/4269)** 空模型轮次持久化为 `content: null` 导致会话永久损坏 | 🔴 OPEN | 无文本/工具调用的轮次被记录，重放时被严格 OpenAI 端点拒绝 | 👍 0 / 💬 0 | **数据完整性缺陷**，会话不可恢复，隐性风险高 |
| 6 | **[#4286](https://github.com/github/copilot-cli/issues/4286)** 流式响应 `input_json_delta` 缓冲导致大参数工具调用多分钟静默 | 🔴 OPEN | 大参数工具调用期间无任何流式反馈，用户误以为卡死 | 👍 0 / 💬 0 | **感知性能严重下降**，长工具调用无进度指示 |
| 7 | **[#4078](https://github.com/github/copilot-cli/issues/4078)** 定时提示词 (`/every`, `/after`) 触发时清空现有提示词队列 | 🔴 OPEN | 调度任务执行后不再处理队列剩余项，队列机制失效 | 👍 0 / 💬 3 | **自动化工作流核心功能失效** |
| 8 | **[#4161](https://github.com/github/copilot-cli/issues/4161)** 切回 Autopilot 模式后 `task_complete` 工具不可用 | 🔴 OPEN | 回归 #1523，声称 v1.0.4 已修复但再现 | 👍 4 / 💬 3 | **Agent 编排能力受损**，影响自主任务闭环 |
| 9 | **[#4202](https://github.com/github/copilot-cli/issues/4202)** 内置 `view` 工具报 "Path does not exist" (1.0.72+ 回归) | 🔴 OPEN | 1.0.71 正常，1.0.72/73 读取现有文件失败 | 👍 0 / 💬 2 | **基础文件操作工具回归**，高频调用链路 |
| 10 | **[#4288](https://github.com/github/copilot-cli/issues/4288)** macOS/iTerm2: 滚轮滚动终端而非 CLI 会话记录 | 🟢 CLOSED | 终端滚动缓冲区接管滚动事件，无法查看历史对话 | 👍 0 / 💬 1 | **终端渲染交互缺陷**，虽已关闭但反映 TUI 适配难题 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 作者 | 核心变更 | 关联 Issue |
|---|----|------|------|----------|------------|
| 1 | **[#4100](https://github.com/github/copilot-cli/pull/4100)** | 🔴 OPEN | huangyoufeng76-debug | **安全性相关** (标题仅为 "安全性") | 无明确关联 |

> **注**：过去 24 小时仅有 1 个 PR 更新，且信息极少。社区贡献活跃度主要集中在 Issue 反馈而非代码提交。

---

## 5. 功能需求趋势 (从全部 28 个 Issues 提炼)

| 趋势方向 | 代表性 Issues | 社区呼声强度 | 说明 |
|----------|---------------|--------------|------|
| **企业级/私有化部署能力** | #4016 (BYOK/ACP), #4005 (Billing Entity), #3934 (MCP Policy), #4283 (Server-managed Plugins), #4272 (Org Policy Models) | ⭐⭐⭐⭐⭐ | 认证体系、计费实体、策略管控、插件分发、模型白名单等企业级治理需求集中爆发 |
| **Windows 平台原生体验** | #4165 (Resume), #4159 (Blank UI), #3576 (MCP spawn), #4274 (Keyboard Buffer) | ⭐⭐⭐⭐ | 会话恢复、交互渲染、子进程生成、输入处理等 Windows 专项缺陷高频 |
| **会话持久化与恢复可靠性** | #4269 (Null Content), #4282 (Model Prefix), #4268 (Exit Summary), #4165 (Resume Hang) | ⭐⭐⭐⭐ | 会话元数据一致性、退出钩子、模型标识兼容性等核心状态管理问题 |
| **流式交互与感知性能** | #4286 (Tool Delta Buffer), #4281 (Pending Timing), #4288 (Scroll) | ⭐⭐⭐ | 大参数流式阻塞、状态指示不同步、终端滚动冲突等交互细节体验 |
| **自动化工作流增强** | #4078 (Queue Kill), #2734 (Plugin Auto-update), #4275 (ACP ContextTier) | ⭐⭐⭐ | 定时任务队列管理、插件生命周期、ACP 协议与交互模式功能对齐 |
| **模型生态与 Agent 编排** | #4270 (Sonnet Delegation), #4287 (Subagent Model), #4161 (Task Complete) | ⭐⭐ | 模型委派策略、子代理模型继承、工具可用性矩阵等 Agent 能力边界 |

---

## 6. 开发者关注点与痛点总结

### 🔴 **核心痛点 (高频/高强度)**
1.  **版本质量回归严重**：1.0.74+ 版本连续引入启动崩溃 (#4285)、会话恢复挂起 (#4165)、交互白屏 (#4159)、退出摘要缺失 (#4268) 等 **P0 级阻断性 Bug**，开发者对发布质量管控信心下降，**强烈建议建立回归测试门禁**。
2.  **企业级认证与策略体系碎片化**：BYOK 在 ACP 模式失效 (#4016)、计费实体未选导致 Memory 失效 (#4005)、MCP 被策略拦截 (#3934)、新模型被 Org Policy 禁用无入口 (#4272)、服务端下发插件不自动启用 (#4283) —— **认证、计费、策略、插件、模型五大维度均有缺口**，严重阻碍企业落地。
3.  **Windows 仍是「二等公民」**：会话恢复、交互渲染、MCP 子进程生成、键盘缓冲处理等基础体验在 Windows 上长期存在平台特有缺陷 (#4165, #4159, #3576, #4274)。
4.  **流式交互「黑盒」感强**：大参数工具调用数分钟无反馈 (#4286)、Pending 状态不同步 (#4281)、终端滚动冲突 (#4288) 导致开发者无法掌握 Agent 实时状态。

### 🟡 **高频功能诉求**
- **ACP 协议与交互模式功能对齐**：`contextTier` 等核心配置在 ACP 中缺失 (#4275)；
- **插件生态自动化**：Marketplace 插件自动更新机制缺失 (#2734, 👍 9)；
- **会话元数据修复工具**：因 `content: null` (#4269) 或模型前缀不一致 (#4282) 导致的会话损坏缺乏恢复手段；
- **成本可观测性**：`/limits predict` 是良好开端，但需更细粒度的实时用量仪表盘。

### 💡 **给维护团队的建议**
1.  **立即发布 v1.0.76.1 热修复**：解决 #4285 启动崩溃、#4268 退出摘要缺失等阻断性回归。
2.  **设立「企业级就绪」里程碑**：将 #4016、#4005、#3934、#4283、#4272 纳入专项攻坚，补全认证/计费/策略/插件/模型全链路。
3.  **引入 Windows 专项 CI/CD**：在合并队列强制跑 Windows 交互模式、会话恢复、MCP Spawn 等 E2E 测试。
4.  **完善流式协议契约测试**：针对 `input_json_delta` 缓冲、大参数工具调用、Pending 状态机建立自动化验证。
5.  **提供会话修复 CLI**：针对 `content: null`、模型前缀不匹配等常见损坏场景，内置 `copilot session doctor` 自愈能力。

---

> **数据来源**：`github.com/github/copilot-cli` | 统计窗口：2026-07-28 至 2026-07-29 (UTC)  
> **下一期预告**：重点跟踪 v1.0.76.1 热修复发布情况、企业级认证专项进展、Windows 体验改进 PR 合入进度。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-29

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **无新版本发布**，核心开发精力集中在 **MCP 协议稳定性**、**Hooks 机制完善** 与 **用户体验细节优化**（如 `/usage` 面板绝对时间显示、Session 管理增强）。
- 社区高频反馈聚焦于 **插件系统崩溃（多插件场景）**、**OAuth 免费用户登录受阻** 及 **本地模型文档缺失** 三大痛点。
- 7 个 PR 合并/更新，涉及日志路由修正、权限通知钩子、模型显示名尊重、ACP 交互修复等核心基础设施，代码库健壮度持续提升。

---

## 2. 版本发布
**无新 Release**。

---

## 3. 社区热点 Issues（按关注度与影响范围排序）

| # | 标题 | 状态 | 核心诉求/影响 | 社区热度 | 链接 |
|---|---|---|---|---|---|
| **#1783** | **Feature Request: Add `/delete` command to remove sessions** | OPEN | 缺失 Session 原生删除命令，用户需手动操作文件系统，影响管理效率与敏感数据清理。 | 👍 1 · 评论 5 | [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783) |
| **#2553** | **/plugins crashes with TypeError when 2+ plugins installed (v0.29.0, Windows)** | OPEN | **阻塞性 Bug**：安装 ≥2 个插件即导致 CLI 崩溃，Windows 环境复现率 100%，严重制约插件生态可用性。 | 评论 1 | [#2553](https://github.com/MoonshotAI/kimi-cli/issues/2553) |
| **#2566** | **Kimi CLI rejects OAuth login for invited free users with active promotional coding credits** | OPEN | 受邀免费用户虽有额度却无法 OAuth 登录，涉及计费/权限判定逻辑缺陷，影响新用户激活转化。 | 新建 | [#2566](https://github.com/MoonshotAI/kimi-cli/issues/2566) |
| **#708** | **Agent violated git safety protocol by committing without explicit permission** | CLOSED | Agent 未经授权执行 `git commit`，触发安全协议违规，历史遗留问题已修复关闭。 | 评论 2 | [#708](https://github.com/MoonshotAI/kimi-cli/issues/708) |
| **#732** | **Enhancement: llamacpp local backend documentation** | CLOSED | 文档缺失导致开发者难以配置本地 llama.cpp 后端，反映**本地化部署文档需求**长期存在。 | 👍 1 | [#732](https://github.com/MoonshotAI/kimi-cli/issues/732) |

> **备注**：仅过去 24h 更新 5 条 Issue，上述均为全量。#2553 与 #2566 为最新高优先级阻塞问题，建议优先排期修复。

---

## 4. 重要 PR 进展（按合并时间/影响面排序）

| # | 标题 | 状态 | 核心变更 | 关联 Issue | 链接 |
|---|---|---|---|---|---|
| **#1637** | **fix: route MCP server log notifications to loguru instead of TUI** | **CLOSED (Merged)** | MCP 服务器日志不再污染 TUI 界面，改由 loguru 统一处理，解决 SearXNG 等高频日志刷屏问题。 | — | [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) |
| **#2284** | **fix: fire notification hooks for approvals** | **CLOSED (Merged)** | 审批请求触发 `Notification` hooks，含 `permission_prompt` 匹配值与详情载荷，完善自动化集成能力。 | #2281 | [#2284](https://github.com/MoonshotAI/kimi-cli/pull/2284) |
| **#2174** | **fix: respect model display_name for kimi-for-coding** | **CLOSED (Merged)** | 移除硬编码覆盖，模型显示名改用后端返回的 `display_name`（如 "Kimi-k2.6"），提升多模型可识别性。 | #2175 | [#2174](https://github.com/MoonshotAI/kimi-cli/pull/2174) |
| **#2176** | **fix(hooks): extract text from ContentPart for UserPromptSubmit hook** | OPEN | 修复 `UserPromptSubmit` hook 在 `list[ContentPart]` 输入下 `prompt` 为空的问题，恢复正则匹配能力。 | #2148 | [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) |
| **#2507** | **fix(acp): signal QuestionNotSupported instead of resolving empty answers** | OPEN | ACP 模式下 `QuestionRequest` 不再返回空字典，改抛出 `QuestionNotSupported`，避免模型误判用户.dismiss。 | #2495 | [#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) |
| **#2567** | **feat(usage): show absolute reset datetime in `/usage` panel** | OPEN | `/usage` 面板新增绝对重置时间（本地时区），保留相对倒计时，解决模糊时间难规划配额痛点。 | — | [#2567](https://github.com/MoonshotAI/kimi-cli/pull/2567) |
| **#2539** | **fix(mcp): normalize tools for Moonshot API** | OPEN | MCP 工具名生成稳定别名兼容 Moonshot API，补齐 `object` 根类型与 `anyOf`/required schema，修复调用失败。 | — | [#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) |

> **合并率高**：7 个 PR 中 3 个已合并（含 2 个长周期 PR #1637、#2284），核心维护者 `he-yufeng` 与 `tears-mysthrala` 推进基础设施修复节奏明快。

---

## 5. 功能需求趋势（从 Issue/PR 挖掘）

| 趋势方向 | 代表信号 | 优先级判断 |
|---|---|---|
| **插件系统稳健化** | #2553 多插件崩溃阻塞；PR #2539 规范 MCP 工具 Schema | **P0**（核心扩展点不可用） |
| **Session 生命周期管理** | #1783 原生删除命令呼声高；配合历史 #708 安全审计需求 | **P1**（用户高频操作缺位） |
| **本地/私有化部署支持** | #732 文档缺失；社区持续追问 llamacpp/Ollama 集成 | **P1**（企业级落地刚需） |
| **计费与权限边界修正** | #2566 免费用户 OAuth 误拦；#708 Agent 越权提交 | **P0**（商业信任与安全底线） |
| **观测与调试体验** | PR #1637 日志隔离；PR #2567 绝对时间显示；Hooks 事件完善 | **P1**（开发者效能工具链） |

---

## 6. 开发者关注点痛点总结

1. **“装两个插件就崩”** —— #2553 直指插件管理 UI 的空指针异常，Windows 优先级最高，建议发布 Hotfix v0.29.1。
2. **“有额度却登不上”** —— #2566 暴露权限校验与促销码逻辑脱节，影响增长漏斗，需产研联动排查。
3. **“本地模型文档在哪？”** —— #732 关闭但未真正解决，社区期待**官方维护的 `providers.yaml` 示例库**或配置向导。
4. **“Session 只能手动删”** —— #1783 5 条评论全为 +1 与场景补充，`/delete <id>` 与批量清理 `/delete --all` 为标准化预期。
5. **“Hooks 事件不全/载荷不全”** —— #2176、#2284 显示自动化集成侧对事件完备性强依赖，建议输出 **Hooks 事件契约文档**。

---

> **下一关注点**：v0.29.x 补丁节奏能否覆盖 #2553/#2566 两大阻塞；`/delete` 命令与 Hooks 文档化是否纳入下个 Sprint。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-29

---

## 1. 今日速览

OpenCode 今日发布 **v1.18.8/v1.18.9** 双版本，重点修复 MCP SDK 兼容性、桌面端导航崩溃及会话加载问题。社区热度最高的议题集中在 **模型自动发现（#6231，193👍）**、**大文件写入静默失败（#19604）**、**Go 订阅计费异常（#34884/#37790）** 以及 **Windows ARM64 TUI 启动失败（#19130/#38520）**。PR 端以 TUI 体验优化（标签页、未读指示、动画）、国际化（希伯来语/意大利语修复）及核心稳定性修复（HTTP 408 重试、ripgrep 超时保护、Shell 命令引用）为主。

---

## 2. 版本发布

### v1.18.9 (2026-07-29)
- **Core**：恢复与旧版 MCP SDK 客户端的兼容性
- **Desktop**：
  - 修复 Solid 清理导致的导航崩溃
  - 修复首页会话加载，避免整页挂起

### v1.18.8 (2026-07-29)
- **Core 改进**：提升与新版 MCP Server 及 OAuth 流程的兼容性
- **Core 修复**：
  - SDK 会话过期后自动重连 MCP Server（含并发请求）
  - `mcp debug` 遵循配置的 OAuth 回调端口
  - 停止向服务端发送已弃用的采样默认参数

> 🔗 [Releases 页面](https://github.com/anomalyco/opencode/releases)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 关注理由 |
|---|------|------|---------|----------|
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | **Auto-discover models from OpenAI-compatible provider endpoints** | OPEN | 33 / 193 | **社区呼声最高**：LM Studio/Ollama/llama.cpp 等本地提供商模型频繁变更，手动维护 `opencode.json` 极其繁琐，需自动发现机制。 |
| [#19604](https://github.com/anomalyco/opencode/issues/19604) | **Write tool fails silently on large files (~1000+ lines)** | OPEN | 20 / 13 | **严重阻塞**：大文件写入静默失败且无错误信息，严重影响代码生成/重构场景，复现率 100%。 |
| [#34884](https://github.com/anomalyco/opencode/issues/34884) | **Go returns "Provider rate limit exceeded" despite 0% rolling usage** | CLOSED | 19 / 6 | 付费 Go 订阅用户遇到误判限流，仅影响 Go tier，免费 zen 模型正常，计费/配额系统存疑。 |
| [#19130](https://github.com/anomalyco/opencode/issues/19130) | **Windows ARM64 native: OpenTUI fails with bun:ffi dlopen TinyCC error** | OPEN | 14 / 10 | **平台阻断**：Windows 11 ARM64 原生二进制无法启动 TUI，CLI 正常，涉及 `bun:ffi` 与 TinyCC 兼容性。 |
| [#33356](https://github.com/anomalyco/opencode/issues/33356) | **Unbounded growth of `event` table: opencode.db reaches 13GB+** | OPEN | 12 / 2 | **存储隐患**：事件溯源表无保留/压缩策略，长期运行实例磁盘占用失控，已导致卷满宕机。 |
| [#37790](https://github.com/anomalyco/opencode/issues/37790) | **Go subscription paid but workspace shows "Insufficient balance"** | OPEN | 12 / 0 | **计费同步故障**：Stripe 支付成功但工作区余额未更新，导致付费用户无法使用服务。 |
| [#7134](https://github.com/anomalyco/opencode/issues/7134) | **Unable to copy terminal output to clipboard on macOS** | CLOSED | 12 / 1 | macOS 集成终端 `Cmd+C` 被 TUI 拦截，复制体验缺失，已关闭（可能已修复或转移）。 |
| [#38801](https://github.com/anomalyco/opencode/issues/38801) | **message="exiting loop"** | OPEN | 11 / 0 | 多种 OpenAI 兼容 API 下反复出现“exiting loop”，导致 TUI 不可用，步长调大至 80 才勉强缓解。 |
| [#4925](https://github.com/anomalyco/opencode/issues/4925) | **Display total cost for session (including sub-agents)** | CLOSED | 11 / 10 | 会话成本仅显示主 Agent，子 Agent token 消耗不计入，多 Agent 协作场景下成本不透明。 |
| [#33696](https://github.com/anomalyco/opencode/issues/33696) | **GitHub Copilot provider broken** | CLOSED | 10 / 8 | 重新授权后仍无模型列表，Copilot 集成完全不可用，影响企业/个人付费用户。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 核心变更 |
|---|------|------|------|----------|
| [#39423](https://github.com/anomalyco/opencode/pull/39423) | **feat(i18n): Add Hebrew language support with RTL handling** | OPEN | 新功能 | 全包级希伯来语支持，含 RTL 布局适配，扩展中东市场可用性。 |
| [#39429](https://github.com/anomalyco/opencode/pull/39429) | **[contributor] fix(tui): always show session tab** | OPEN | 修复 | 单会话时也显示标签栈，避免“打开第二个会话前无标签导航”的困惑。 |
| [#39428](https://github.com/anomalyco/opencode/pull/39428) | **[contributor] feat(tui): add unread tab glow** | OPEN | 新功能 | 非活跃标签有未读活动时显示静止重音光晕，无需额外动画即可定位未读工作。 |
| [#39413](https://github.com/anomalyco/opencode/pull/39413) | **fix(session): retry HTTP 408 request timeouts** | OPEN | 修复 | `retryable()` 现覆盖 SDK 未标记可重试的 408，避免用户手动重发。 |
| [#39422](https://github.com/anomalyco/opencode/pull/39422) | **[contributor] refactor(tui): remove dead session renderer** | OPEN | 重构 | 移除 V2 TUI 中废弃的 assistant-message 渲染路径，精简代码。 |
| [#38045](https://github.com/anomalyco/opencode/pull/38045) | **fix(core): quote shell commands with shell-quote** | CLOSED | 修复 | 使用 `shell-quote` 替代 `JSON.stringify` 嵌入命令，修复含特殊字符命令的注入/转义问题。 |
| [#39298](https://github.com/anomalyco/opencode/pull/39298) | **fix(core): bound ripgrep search execution with default wall-clock deadline** | CLOSED | 修复 | 大工作区/宽根目录搜索增加默认墙钟超时，防止 ripgrep 无限挂起。 |
| [#36068](https://github.com/anomalyco/opencode/pull/36068) | **fix: accept Ollama reasoning field in OpenAI Chat deltas** | OPEN | 修复 | 兼容 Ollama `/v1/chat/completions` 返回的 `reasoning` 字段（非 `reasoning_content`），避免推理内容被静默丢弃。 |
| [#39419](https://github.com/anomalyco/opencode/pull/39419) | **[contributor] fix(tui): preserve session route on transient errors** | CLOSED | 修复 | 会话水合失败（瞬态错误）时保留路由，后台服务重连后会话仍可导航，不再“消失”。 |
| [#39417](https://github.com/anomalyco/opencode/pull/39417) | **[needs:compliance] feat(task): add images parameter for subagent image passthrough** | OPEN | 新功能 | Task 工具新增 `images` 参数，支持向子 Agent 传递图片附件，解锁视觉分析任务。 |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表性 Issues | 社区热度信号 |
|----------|---------------|--------------|
| **模型配置自动化** | #6231 (193👍), #1038 (OpenRouter shortcut) | 极高：本地/兼容层模型频繁变更，手动维护成本成最大痛点 |
| **大文件/长上下文稳定性** | #19604 (Write 静默失败), #33356 (13GB DB), #29694 (63GB spill) | 高：工具链在大规模代码库下出现存储泄漏、写入失败、内存压力 |
| **计费/订阅系统可靠性** | #34884, #37790, #37056, #36399 | 高：Go 计划频繁误判限流、支付不同步、400/401/500 混发，信任度受损 |
| **跨平台原生体验** | #19130, #38520 (Windows ARM64), #29039 (macOS AVX2) | 中高：ARM64 TUI 启动阻断、旧 CPU 非法指令崩溃，原生分发质量待提升 |
| **TUI/交互细节打磨** | #7134 (复制), #39429/39428/39418 (标签/未读/脉冲), #39045 (动画) | 中：持续 PR 投入标签页、未读指示、复制、动画防重叠，体验迭代活跃 |
| **多模态/子 Agent 能力** | #39417 (images passthrough), #4925 (子 Agent 成本) | 新兴：Task 工具图片透传、子 Agent 成本核算，Agentic 工作流深化需求 |
| **MCP 生态兼容** | v1.18.8/9 释放说明, #36288 (离线 MCP 隐藏命令) | 基建级：MCP SDK 版本兼容、OAuth 端口、离线服务器优雅降级 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“配置地狱”**：OpenAI 兼容提供商（Ollama/LM Studio/llama.cpp/OpenRouter）模型列表需手动同步，强烈要求**自动发现/热重载**（#6231 193👍）。
2. **大文件工具链不可靠**：`Write` 超 1000 行静默失败（#19604），`Read`/`Grep` 无超时保护（#39298），数据库/溢出文件无清理策略（#33356 #29694），**生产级稳定性缺失**。
3. **付费服务信任危机**：Go 订阅用户遭遇**误判限

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-29

---

## 1. 今日速览
今日无新版本发布，社区活动集中在 **基础设施稳定性修复**（WSL 路径、代理转发、扩展加载、剪贴板兼容）与 **Provider 生态扩展**（Kimi K3、Apiário、Anthropic Vertex）上。核心维护者正推进架构决策记录（ADR）落地，并修复会话压缩、TUI 渲染性能等长期痛点。多个高优先级 Bug 已合并修复，代码库健康度持续提升。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心内容 | 重要性 & 社区反应 | 链接 |
|---|-------|----------|-------------------|------|
| 1 | **#7064 [bug] WSL absolute windows paths are mishandled** | WSL2 下 Windows 绝对路径处理失效，导致 `read/write/edit` 工具频繁回退至命令行。 | 👍 1 · 评论 9 · **近期更新** — 直接阻断 Windows 开发者核心工作流，属 P0 级阻塞。 | [#7064](https://github.com/earendil-works/pi/issues/7064) |
| 2 | **#6879 [bug] auto-compaction never triggers after context >100%** | 上下文窗口超 100% 仍不触发自动压缩，直到 Provider 报错才兜底。 | 👍 3 · 评论 5 — 长会话稳定性核心缺陷，影响成本控制与可用性。 | [#6879](https://github.com/earendil-works/pi/issues/6879) |
| 3 | **#7194 [bug] Pi full re-render every 1s when tool card scrolls out of viewport** | 活动工具卡滚出视口导致每秒全量重渲染，远程会话/PTY 转发场景严重卡顿。 | 评论 5 — TUI 性能瓶颈，远程开发、沙箱场景高频触发。 | [#7194](https://github.com/earendil-works/pi/issues/7194) |
| 4 | **#7248 [bug] Ctrl+V paste fails on Wayland (X11-only clipboard)** | Wayland 下 `readClipboardText()` 仅支持 X11，导致粘贴静默失败。 | 👍 0 · 评论 3 · **今日新建** — Linux 桌面生态迁移 Wayland 后的兼容性缺口。 | [#7248](https://github.com/earendil-works/pi/issues/7248) |
| 5 | **#7187 [bug] Silent crash from inconsistent error handling / schema validation** | 第三方包清单拼写错误导致核心包解析崩溃，毁坏用户所有会话。 | 评论 3 — 生产级嵌入场景（screenpipe）暴露的容灾缺失，需加固错误边界。 | [#7187](https://github.com/earendil-works/pi/issues/7187) |
| 6 | **#6747 [inprogress] API for enhancing agent message markdown** | 允许扩展在不改变 LLM 上下文的前提下增强消息渲染（如数学公式）。 | 👍 2 · 评论 11 — 扩展生态关键能力，PR #7231 已在审。 | [#6747](https://github.com/earendil-works/pi/issues/6747) |
| 7 | **#7049 Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding** | Undici 8.5.0 默认 `proxyTunnel: true` 导致 HTTP 代理走 CONNECT 隧道失败。 | 评论 5 — 网络基础设施修复，**PR #7225 已合并**。 | [#7049](https://github.com/earendil-works/pi/issues/7049) |
| 8 | **#7195 [bug] Extensions don't load if directory is a symlink** | `~/.pi/agent/extensions` 为软链接时扩展加载失效，影响 dotfiles 管理。 | 评论 6 — 开发者体验细节，修复中。 | [#7195](https://github.com/earendil-works/pi/issues/7195) |
| 9 | **#7161 anthropic-messages never sends `x-client-request-id`** | Anthropic 路径缺少请求 ID，导致网关无法做会话亲和性路由。 | 评论 5 — 企业级代理/多账号负载均衡场景刚需。 | [#7161](https://github.com/earendil-works/pi/issues/7161) |
| 10 | **#6922 [bug] Default model cannot be a llama.cpp model** | 启动时 `defaultProvider=llama.cpp` 误报 "No models available" 并退出。 | 👍 13 · 评论 7 · **已关闭** — 本地模型首选用户的严重回归，已修复。 | [#6922](https://github.com/earendil-works/pi/issues/6922) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 核心变更 | 关联 Issue | 状态 | 链接 |
|---|----|------|----------|------------|------|------|
| 1 | **#7245** | feat(tui) | **tmux 下启用 sixel 内联图片**，移除 `TMUX` 环境变量即禁用图片的广泛限制。 | — | Open | [#7245](https://github.com/earendil-works/pi/pull/7245) |
| 2 | **#7236** | feat(tui) | **固定聊天输入区 + 鼠标光标支持**；引入 `Viewport` 组件实现历史独立滚动。 | — | Closed | [#7236](https://github.com/earendil-works/pi/pull/7236) |
| 3 | **#7225** | fix(deps) | **Undici 8.5.0 → 8.8.0**，修复 `HTTP_PROXY`/`HTTPS_PROXY` 纯 HTTP 转发。 | #7049 | Closed | [#7225](https://github.com/earendil-works/pi/pull/7225) |
| 4 | **#7218** | fix(coding-agent) | 扩展 `resource_discover` 重载后**保留资源元数据**（scope/source tag），修复技能来源全变 `[t]`。 | #6968 | Closed | [#7218](https://github.com/earendil-works/pi/pull/7218) |
| 5 | **#7230** | fix(ai) | **Fireworks Kimi K3 路由至 openai-completions**，支持 `kimi-k3` 与 `kimi-k3-fast`。 | #7199 | Closed | [#7230](https://github.com/earendil-works/pi/pull/7230) |
| 6 | **#7240** | feat(ai) | **新增 Apiário 内置 Provider**（巴西聚合 API，OpenAI 兼容）。 | #7242 | Closed | [#7240](https://github.com/earendil-works/pi/pull/7240) |
| 7 | **#7210** | fix(coding-agent) | **清理失败的 git 扩展安装残留**，避免后续安装被污染。 | #7189 | Closed | [#7210](https://github.com/earendil-works/pi/pull/7210) |
| 8 | **#7243** | fix(ai) | **TypeBox 1.1.38 → 1.3.7**，修复 `nullable array` 校验；含破坏性 API 移除。 | #7003 | Open | [#7243](https://github.com/earendil-works/pi/pull/7243) |
| 9 | **#7216** | fix(ai) | 修复 `openai-completions` 流式 `delta.content` 为数组时被 stringify 为 `[object Object]`。 | #7062 (part) | Open | [#7216](https://github.com/earendil-works/pi/pull/7216) |
| 10 | **#7247 / #7249** | docs | **补全 47 条 ADR + 6 条 TDR**，覆盖 Provider 抽象、会话架构、TUI 引擎、扩展系统、存储后端等核心决策。 | — | Closed | [#7247](https://github.com/earendil-works/pi/pull/7247) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue / 信号 | 社区呼声 |
|----------|-------------------|----------|
| **Provider 多元化与兼容性** | #7199 (Kimi K3), #7242 (Apiário), #5262 (Anthropic Vertex), #7161 (Anthropic 请求 ID), #7174 (Z.AI `max_tokens`) | 🔥 极高 — 每周新增 1-2 个 Provider 适配需求，OpenAI 兼容层成标准 |
| **TUI 渲染性能与远程会话体验** | #7194 (全量重渲染), #7236 (固定输入区/鼠标), #7245 (tmux sixel), #6423 (UI 冻结) | 🔥 高 — 远程沙箱、PTY 转发、tmux 成为主流使用场景 |
| **扩展系统稳健性** | #7195 (symlink 加载), #7189 (失败安装残留), #6968 (resource_discover 污染), #7007 (inline prompt 死锁) | ⬆️ 上升 — 扩展生态扩大后，加载/卸载/并发边界问题集中暴露 |
| **上下文/会话管理智能化** | #6879 (压缩不触发), #7020 (压缩后不继续), #7113 (登录阻塞), #6924 (临时会话目录泄漏) | 🔥 高 — 长会话、协调者模式、自动化脚本成核心用例 |
| **跨平台桌面兼容性** | #7064 (WSL 路径), #7248 (Wayland 剪贴板), #6922 (llama.cpp 启动) | ⬆️ 上升 — Linux Wayland 迁移、WSL2 普及带来新适配面 |

---

## 6. 开发者关注点 & 痛点总结

| 痛点类别 | 典型反馈 | 影响范围 | 建议关注优先级 |
|----------|----------|----------|----------------|
| **WSL / 跨平台路径解析** | `#7064` "工具频繁回退 CLI"、"Windows 路径在 WSL 失效" | Windows + WSL2 开发者（占比大） | **P0** — 核心工作流阻断 |
| **会话压缩可靠性** | `#6879` "超 100% 才压缩"、`#7020` "压缩后卡住" | 长会话/自动化/协调者用户 | **P0** — 成本与稳定性双重风险 |
| **TUI 远程渲染性能** | `#7194` "每秒全量重绘"、`#7236` "输入区不固定" | 远程沙箱、SSH、tmux、PTY 转发用户 | **P1** — 体验劣化严重，已有 PR 缓解 |
| **扩展加载容错** | `#7195` symlink、`#7189` 残留污染、`#6968` 元数据崩溃 | 依赖 dotfiles/多项目共享扩展的高级用户 | **P1** — 生态信任度基石 |
| **Provider 集成细节** | `#7161` 缺 Request-ID、`#7174` 参数名不兼容、`#7113` 登录阻塞 | 企业网关、多账号负载、本地模型用户 | **P1** — 生产级部署硬指标 |
| **文档与架构透明度** | `#7247/#7249` ADR 补全、`#7229` 死链清理 | 新贡献者、架构决策追溯 | **P2** — 长期维护性投资，已推进 |

---

> **数据来源**：`github.com/earendil-works/pi` — Issues/PRs 更新于 2026-07-28 ~ 2026-07-29 UTC。  
> **下一关注点**：`#7064` WSL 修复合并进度、`#7194` 渲染优化后续、`#7243` TypeBox 破坏性升级迁移指南。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-29

---

## 1. 今日速览

- **双版本发布**：推出 v0.21.1 稳定版与 v0.21.0-nightly，重点修复自动修复建议延迟、GenAI 遥测字段对齐等核心问题。
- **Windows 兼容性成焦点**：0.21.1 发布后涌现多个 Windows 专项崩溃、终端滚动失效、编码乱码等阻塞性 Issue，社区反馈强烈。
- **CI 稳定性持续攻坚**：多条 E2E 测试失败触发自动修复流程，Web Shell、Hooks、技能体系等核心模块并行推进重构与新特性。

---

## 2. 版本发布

### v0.21.1 (稳定版)
- **核心变更**：
  - `feat(core)`：对齐 GenAI 内容遥测字段 ([#7667](https://github.com/QwenLM/qwen-code/pull/7667))
  - 修复 AI 辅助发布说明在模型超时后的静默回退问题 ([#7523](https://github.com/QwenLM/qwen-code/issues/7523))
  - 无破坏性变更
- **完整变更日志**：[查看详情](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1)

### v0.21.0-nightly.20260729.0c0ca5fed
- **单项变更**：`feat(autofix)`：在五轮变更后延迟建议触发 ([#7913](https://github.com/QwenLM/qwen-code/pull/7913))

---

## 3. 社区热点 Issues（精选 10 条）

| Issue | 类型 | 热度 | 核心诉求 | 关注理由 |
|-------|------|------|----------|----------|
| [#7972](https://github.com/QwenLM/qwen-code/issues/7972) | 🐛 Bug | 🔥 新增 | **0.21.1 Windows 崩溃 3 次** | 刚发布即现严重稳定性问题，阻塞 Windows 用户升级 |
| [#7964](https://github.com/QwenLM/qwen-code/issues/7964) | 🐛 Bug | 🔥 新增 | **Windows 终端内容无法滚动** | 直接影响交互体验，附带截图复现，标记 `welcome-pr` |
| [#7960](https://github.com/QwenLM/qwen-code/issues/7960) | 🐛 Bug | ⭐⭐ | 压缩侧查询 `maxOutputTokens` 超小窗口导致 400 错误 | 涉及长上下文核心路径，自托管部署高频痛点 |
| [#7961](https://github.com/QwenLM/qwen-code/issues/7961) | 🐛 Bug | ⭐⭐ | 主轮次 token 夹钳低估 CJK 内容致上下文溢出 | 中文场景 Token 计算偏差，影响长会话可靠性 |
| [#7940](https://github.com/QwenLM/qwen-code/issues/7940) | 🐛 Bug | ⭐⭐⭐ | `UserPromptSubmit.additionalContext` 污染用户消息 JSONL | 会话持久化与恢复显示的数据完整性缺陷 |
| [#7937](https://github.com/QwenLM/qwen-code/issues/7937) | 🤖 CI 失败 | ⭐⭐⭐ | E2E 测试失败：`tool-control.test.ts` asyncGenerator 断言 | 自动修复中，暴露异步生成器工具调用边界条件 |
| [#7942](https://github.com/QwenLM/qwen-code/issues/7942) | 🤖 CI 失败 | ⭐⭐⭐ | E2E 测试失败：交互式文件系统读写序列 | 自动修复中，交互模式下工具调用与文件内容双重校验冲突 |
| [#7936](https://github.com/QwenLM/qwen-code/issues/7936) | 🐛 Bug | ⭐⭐ | Windows 非 UTF-8 代码页下 Shell 输出乱码 | 国际化基础设施缺失，影响中日俄等非英语用户 |
| [#7831](https://github.com/QwenLM/qwen-code/issues/7831) | 🐛 Bug | ⭐⭐⭐ | 上下文 >150k 时流式响应频发 `ECONNRESET` | 长上下文流式传输稳定性瓶颈，关联 vLLM 等自托管后端 |
| [#7757](https://github.com/QwenLM/qwen-code/issues/7757) | ⚡ 性能 | ⭐⭐⭐ | 量化并优化 Daemon 首模型输出延迟 | 冷启动后的“首字节”体验优化，已关闭进入实施阶段 |

> 💡 **趋势提示**：Windows 平台问题集中爆发（崩溃、滚动、编码），长上下文与 Token 管理成核心技术债，CI 自动修复机制高频触发显示测试基建成熟度提升。

---

## 4. 重要 PR 进展（精选 10 条）

| PR | 状态 | 类型 | 核心内容 | 影响面 |
|----|------|------|----------|--------|
| [#7973](https://github.com/QwenLM/qwen-code/pull/7973) | Open | 🐛 Fix | Web Shell：制品卡片优先使用 `metadata.artifactType` | 前端展示一致性，开发者自定义制品类型识别 |
| [#7974](https://github.com/QwenLM/qwen-code/pull/7974) | Open | ✨ Feat | 分流评论：以定性结论领衔，中文折叠显示 | 维护者 Review 效率，PR 评论规范化 |
| [#7970](https://github.com/QwenLM/qwen-code/pull/7970) | Open | 🔧 CI | 发布流程：前一版本非祖先时跳过 `notes-start-tag` | 解决分支发布时的变更日志锚点错误 |
| [#7968](https://github.com/QwenLM/qwen-code/pull/7968) | Open | ✨ Feat | Hooks：新增 `security.allowPrivateNetworkHooks` 绕过 SSRF 检查 | 平台托管场景解禁内网 Hook 调用，安全与易用平衡 |
| [#7967](https://github.com/QwenLM/qwen-code/pull/7967) | Open | ♻️ Refactor | 核心：文本读取助手改为描述符线程化，避免分叉 | 大文件读取性能与资源占用优化，依赖 [#7947](https://github.com/QwenLM/qwen-code/pull/7947) |
| [#7950](https://github.com/QwenLM/qwen-code/pull/7950) | Open | 🐛 Fix | 测试：`tool-control` asyncGenerator 断言去除尾随换行 | 修复 [#7937](https://github.com/QwenLM/qwen-code/issues/7937) CI 失败 |
| [#7944](https://github.com/QwenLM/qwen-code/pull/7944) | Open | 🐛 Fix | 测试：交互式文件系统接受工具调用或文件内容双轨校验 | 修复 [#7942](https://github.com/QwenLM/qwen-code/issues/7942) CI 失败 |
| [#7929](https://github.com/QwenLM/qwen-code/pull/7929) | Open | ✨ Feat | Web Shell：新增上下文任务面板（环境、子代理、Monitor、后台任务） | 终端侧边栏向“执行控制台”演进，重构交互范式 |
| [#7911](https://github.com/QwenLM/qwen-code/pull/7911) | **Closed** | ✨ Feat | 核心：图片读取返回规范化 JPEG 概览+缩放提示 | 图像处理管线标准化，支持可靠缩放交互 |
| [#7862](https://github.com/QwenLM/qwen-code/pull/7862) | Open | ✨ Feat | 渠道：新增 GitLab 轮询适配器（基于 `@gitbeaker/rest`） | 多平台 Issue/MR 接入能力对齐 GitHub 适配器 |

> 🔍 **高价值堆叠 PR**：`#7967` 依赖 `#7947`（大文本读取 inode 锁定），`#7929` 与 `#7926`（会话 URL 保持 token/base path）共同推进 Web Shell 企业级可用性。

---

## 5. 功能需求趋势（从全量 Issues 提炼）

| 方向 | 代表 Issue/PR | 社区呼声强度 | 备注 |
|------|---------------|--------------|------|
| **Windows 原生体验修复** | #7972, #7964, #7936, #6820 | 🔥🔥🔥 **最高** | 0.21.1 发布后集中爆发，阻塞生产环境采用 |
| **长上下文与 Token 精准管理** | #7960, #7961, #7831, #7959 | 🔥🔥🔥 | 自托管小窗口模型、CJK 计算偏差、流式断连、模型重复输出 |
| **Web Shell 向 IDE 化演进** | #7929, #7926, #7973, #7887, #7890 | 🔥🔥 | 上下文面板、会话持久化、制品类型、工作流执行控制台 |
| **Hooks 与安全策略细粒度控制** | #7968, #7877, #7940 | 🔥🔥 | 私网放行、自动召回、上下文污染治理 |
| **多平台渠道适配器扩展** | #7862, #7807, #7687 | 🔥 | GitLab、GitHub 通知理由分发、钉钉图片出站 |
| **技能体系自动化治理** | #7846, #7383 | 🔥 | 生命周期策展、CI 仓库卫生技能自动修复文档/测试微问题 |
| **守护进程性能基准与优化** | #7757, #7911 | 🔥 | 首模型输出延迟量化、图片读取管线优化 |
| **破坏性 Git 命令防护补全** | #7531, #7864, #7872 | ⭐ | `git clean/checkout` 变体覆盖、复合命令边界识别、字符串截断安全 |

---

## 6. 开发者关注点（痛点与高频需求）

1.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-29

---

## 1. 今日速览
今日无新版本发布，但 **v0.9.2 版本进入最后冲刺阶段**：核心维护者 Hmbown 连续合并 5 个关键 PR（`#4951`、`#4953`、`#4942`、`#4943`、`#4948`），修复了 VS Code 渲染回归、CRLF 编辑失败、Operate 启动模式缺失、远程控制 `/rc` 失效等阻断性问题。社区高度关注 **Windows 兼容性** 与 **沙箱机制**，新增 Issue `#4955` 强烈呼吁提供 `--no-sandbox` 模式。同时，国际化翻译争议（`#4949`）引发社区讨论，官方已通过 PR `#4948` 将中文术语 "Constitution" 定为 **"宪章"**。

---

## 2. 版本发布
**无新版本发布**。v0.9.2 正在进行发布前的最终验收（PR `#4954` 记录了最终 dogfood 验收数据：11,254-pass workspace run）。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 核心看点 | 链接 |
|---|------|------|----------|------|
| **#4100** | `exec_shell` 在 Windows 长会话中失败，退出码 `2147483647` (i32::MAX) | **CLOSED** | **严重资源泄漏/句柄耗尽**。标志着 ConPTY 基础设施在长运行会话中的稳定性隐患被定位并修复（可能随 v0.9.2 发布）。 | [#4100](https://github.com/Hmbown/CodeWhale/issues/4100) |
| **#4764** | Windows 下 `edit_file` 无法编辑 CRLF 文件 | **CLOSED** | **跨平台编辑器核心 Bug**。LF 归一化匹配 + 原始 CRLF 字节映射方案已合并（PR `#4942`），解决 Windows 开发者痛点。 | [#4764](https://github.com/Hmbown/CodeWhale/issues/4764) |
| **#4955** | **请求：提供零沙箱/--no-sandbox 模式用于本地开发** | **OPEN** | 👍 **1** 高呼声。内核级 Seatbelt 沙箱频繁阻断基础 Shell 命令，开发者请求完全移除沙箱层的逃生通道，反映当前沙箱策略过于激进。 | [#4955](https://github.com/Hmbown/CodeWhale/issues/4955) |
| **#4959** | 提议：`/stop` 命令与运行时 STOP-word 拦截 | **OPEN** | **自主模式下的紧急制动需求**。YOLO/自主工作流中文本 `stop` 被忽略，需机械式工具调用拦截机制，关乎 Agent 可控性。 | [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) |
| **#4957** | TUI 不渲染 LaTeX 数学公式，显示原始 `$...$` | **OPEN** | **技术/科研场景缺失**。影响所有处理数学内容用户，需引入终端数学渲染库（如 `katex` WASM 或类 `glow` 方案）。 | [#4957](https://github.com/Hmbown/CodeWhale/issues/4957) |
| **#4956** | WSL2 环境下 Provider 网络连接失败 | **OPEN** | **WSL2 网络栈兼容性**。新安装用户首发即遇阻，可能涉及 DNS/代理/防火墙穿透，需改进首次运行网络诊断。 | [#4956](https://github.com/Hmbown/CodeWhale/issues/4956) |
| **#4949** | 讨论："Constitution" 中文翻译 —— "宪法" vs "协作准则" vs "宪章" | **OPEN** | **本地化术语治理**。社区担忧 "宪法" 政治敏感性，官方最终采纳 **"宪章" (Charter)** 兼顾权威性与中性（PR `#4948`）。 | [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) |
| **#4941** | 重启后 Thinking Level 静默回退 Auto：持久化 `reasoning_effort` 被丢弃 | **OPEN** | **设置持久化一致性缺陷**。Picker 路径写入正确，但启动加载器未正确读取，导致用户偏好丢失。 | [#4941](https://github.com/Hmbown/CodeWhale/issues/4941) |
| **#4934** | 官网非批评：建议增加主题/视觉一致性 | **OPEN** | **产品化包装反馈**。用户肯定新官网活跃度，但指出缺乏主题系统，呼应 PR `#4944` 进行的品牌视觉统一（Signal Current 品牌标）。 | [#4934](https://github.com/Hmbown/CodeWhale/issues/4934) |
| **#4906** | 官网/README 缺乏真实运行演示（GIF/视频） | **OPEN** | **营销/入门门槛**。终端 Agent 属强视觉产品，纯文本描述转化率低。PR `#4940` 已完成录制工具链就绪，待人工把关内容质量。 | [#4906](https://github.com/Hmbown/CodeWhale/issues/4906) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 | 链接 |
|---|------|------|----------|------|
| **#4953** | `fix(tui): expose Operate startup mode and refresh session capture` | **CLOSED** | **v0.9.2 核心功能补全**。原生启动模式选择器新增 `Operate`，修复持久化规范化回退 `Act` 的 Bug，完善会话捕获。 | [#4953](https://github.com/Hmbown/CodeWhale/pull/4953) |
| **#4951** | `fix(v0.9.2): calm VS Code rendering and retry upstream 499` | **CLOSED** | **VS Code 终端兼容性修复**。恢复 `TERM_PROGRAM=vscode` 下的静默装饰渲染；将 HTTP 499 (Client Closed Request) 分类为瞬态错误纳入指数退避重试。 | [#4951](https://github.com/Hmbown/CodeWhale/pull/4951) |
| **#4942** | `fix(tools): preserve CRLF edits` | **CLOSED** | **Windows 编辑器核心修复**。LF 视图匹配 + 原始 CRLF 字节回写，保留未修改内容行尾，通过精确/混合/无操作保护测试。 | [#4942](https://github.com/Hmbown/CodeWhale/pull/4942) |
| **#4943** | `fix(tui): restore account-owned remote control (/rc)` | **CLOSED** | **远程控制能力恢复**。`/rc` 允许 Web 会话接管现有 CLI/TUI 会话，保持进程内模型/工具状态唯一所有权。 | [#4943](https://github.com/Hmbown/CodeWhale/pull/4943) |
| **#4948** | `fix(i18n): call the zh-Hans constitution a charter` | **CLOSED** | **中文术语定案**。统一使用 **"宪章"**，首次出现标注 `你的宪章（Constitution）`，技术标识符（路由/文件名）保持不变。 | [#4948](https://github.com/Hmbown/CodeWhale/pull/4948) |
| **#4940** | `feat(media): executable capture harness for the v0.9.2 real session` | **CLOSED** | **演示录制工程化**。为 `#4906` 提供可执行录制框架（含凭证注入、帧捕获、导出管线），录制内容本身需人工审核。 | [#4940](https://github.com/Hmbown/CodeWhale/pull/4940) |
| **#4944** | `feat(web): align landing with managed product` | **CLOSED** | **官网品牌统一**。替换为托管产品同款 Signal Current 品牌标，简化 Hero 区，移除装饰性 CSS 动画，嵌入真实终端录屏（标注 v0.9.1）。 | [#4944](https://github.com/Hmbown/CodeWhale/pull/4944) |
| **#4931** | `Migrate QA PTY test harness from vt100 to rio-vt` | **OPEN** | **测试基建现代化**。QA PTY 测试引擎从 `vt100` 迁移至 `rio-vt` (Rio 终端引擎)，提升渲染断言保真度与维护性。 | [#4931](https://github.com/Hmbown/CodeWhale/pull/4931) |
| **#4958** | `ci: attach provenance and SBOM attestations to the published image` | **OPEN** | **供应链安全强化**。发布镜像附加 Provenance 与 SBOM 认证，满足 SLSA 等级要求，增强下游信任。 | [#4958](https://github.com/Hmbown/CodeWhale/pull/4958) |
| **#4938** | `chore: land the bounded dead-code slice and add a budget ratchet` | **CLOSED** | **技术债治理闸门**。合并有界死代码清理切片，引入 CI 预算棘轮（`dead-code-budget`），防止债务反弹，大扫除推至 v0.9.3。 | [#4938](https://github.com/Hmbown/CodeWhale/pull/4938) |

---

## 5. 功能需求趋势（从 Issues 提炼）

1.  **Windows 原生体验修复（高频/高优）**：CRLF 编辑 (`#4764`)、ConPTY 句柄泄漏 (`#4100`)、WSL2 网络 (`#4956`)、VS Code 终端渲染 (`#4950`/`#4951`)。**核心诉求：一等公民级 Windows 支持。**
2.  **沙箱/安全策略灵活性（新增强烈需求）**：`#4955` 要求 `--no-sandbox`，反映当前 Seatbelt 策略对本地开发流干扰过大，需分层可控（无沙箱/用户态沙箱/内核沙箱）。
3.  **Agent 可控性与交互增强**：`/stop` 机械拦截 (`#4959`)、Thinking Level 持久化 (`#4941`)、启动模式完整性 (`#4952`/`#4953`)。**趋势：从“自主”转向“可观/可控/可配”。**
4.  **富内容渲染支持**：LaTeX 数学公式 (`#4957`)、真实会话演示 (`#4906`/`#4940`)。**拓展科研/教育/技术文档场景。**
5.  **国际化与本地化治理**：术语标准化 (`#4949`/`#4948`/`#4908`)、多语言文档同步。**走向产品级多语言交付标准。**
6.  **供应链与工程化成熟度**：SBOM/Provenance (`#4958`)、测试引擎现代化 (`#4931`)、死代码预算 (`#4938`)。**向企业级交付标准迈进。**

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点/需求 | 典型 Issue/PR | 影响面 | 当前进展 |
|-----------|---------------|--------|----------|
| **Windows 长会话稳定性** | `#4100` (ConPTY 句柄耗尽) | 所有 Windows 原生/WSL 开发者 | ✅ Closed (随 v0.9.2 修复) |
| **Windows 文件编辑破坏 CRLF** | `#4764` / `#4942` | 所有 Windows 开发者 | ✅ Merged (LF 归一化匹配 + 原始回写) |
| **沙箱过度拦截合法本地操作** | `#4955` (--no-sandbox 呼声高) | 本地开发/自动化脚本用户 | 🟢 Open (需架构决策：分层沙箱策略) |
| **自主模式下失去控制权** | `#4959` (/stop 拦截) | YOLO/自动化工作流用户 | 🟢 Open (需运行时拦截机制设计) |
| **设置重启后丢失/回退** | `#4941` (Thinking Level), `#4952` (Operate Mode) | 所有自定义配置用户 | 🟡 Partial (Operate 已修 `#4953`，Thinking 待修) |
| **VS Code 集成终端渲染异常** | `#4950` / `#4951` | VS Code 用户 (占比极高) | ✅ Merged (静默渲染 + 499 重试) |
| **缺乏直观产品演示** | `#4906` / `#4940` / `#4944` | 新用户/评估者 | 🟡 Tooling Ready (待人工录制高质量素材) |
| **中文术语歧义与敏感性** | `#4949` / `#4948` | 中文社区 | ✅ Decided ("宪章" Charter) |
| **网络诊断与 WSL2 适配** | `#4956` | WSL2 新用户 | 🟢 Open (需首运行网络探测/代理感知) |
| **技术债累积与测试保真度** | `#4938` / `#4931` | 核心维

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*