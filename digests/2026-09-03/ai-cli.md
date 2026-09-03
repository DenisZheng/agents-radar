# AI CLI 工具社区动态日报 2026-09-03

> 生成时间: 2026-09-03 02:29 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-09-03

---

## 1. 生态全景

当前 AI CLI 工具生态已从“模型封装层”进化为**“智能体运行时平台”**竞争阶段。头部厂商（Anthropic、OpenAI、Google、GitHub）聚焦**企业级治理、Windows 原生体验修复、无人值守自动化**三大硬指标；开源/社区驱动项目（OpenCode、Pi、CodeWhale、Qwen Code）则在**架构模块化、多模型中立性、长会话可恢复运行时**上发力。全行业呈现“闭源商业化补齐企业级短板、开源项目攻坚底层基建”的双轨并行态势，**MCP（Model Context Protocol）已成事实标准接口**，权限模型、会话持久化、跨平台稳定性成为通用成熟度分水岭。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新量(24h) | PR 合并/活跃数 | Release 情况 | 核心研发节奏 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 高 (Top 10 均为高热老牌 Issue，👍总计>1000) | 4 个关键 PR (安全修复、诊断脚本、跨平台脚本) | **v2.1.259** (企业级 MCP 托管、无人值守模式) | **稳定迭代**，侧重企业级特性与 Windows 架构债偿还 |
| **OpenAI Codex** | 高 (50 条 Issue，Win 端占比 60%) | **20+ PR 高密度合并** (Win 原生守护进程、MCP OAuth、上下文管理) | **v0.153.0 稳定版** (Vim 模式、插件 CLI) | **极速迭代**，基建重构与 Windows 原生化并行 |
| **GitHub Copilot CLI** | 中高 (37 条 Issue，OOM/MCP 为核心) | **0** (团队专注热修复发布) | **v1.0.83-2 / -3** 连发 (多模型回退、Fable 5.1、沙箱加固) | **维护模式转型**，修复阻塞性 Bug 为主，架构债显现 |
| **OpenCode** | 中高 (长期高赞 Issue 持续推进) | 10 个高质量 PR (Harness 运行时、插件 API、Provider 错误类型化) | **v1.18.27** (超时默认值、Thinking 控制) | **稳健推进**，核心运行时标准化与插件生态建设并重 |
| **Pi (CodeWhale 核心)** | 中 (10 条关键 Issue，多为架构级) | **10 个核心 PR** (AgentHarness、ToolPolicy、SSE OOM 修复、Provider 中立) | 无新版 (架构重构期) | **架构重构期**，确立可恢复运行时与安全内核 |
| **Qwen Code** | 高 (OpenTUI 迁移、安全守卫、CI 稳定性) | 10 个高强度 PR (OpenTUI 收尾、记忆结构化、输出样式、CI 拆分) | **live-host-v0.2.0** (配套核心迁移) | **大规模重写收尾期**，Ink→OpenTUI 迁移驱动全链路升级 |
| **DeepSeek TUI (CodeWhale)** | 高 (里程碑追踪、巨型文件拆解、Provider 中立) | **10 个大型 PR** (v0.9.12 UX 集成、控制 Socket、插件市场、Memory) | 无新版 (v0.9.12 集成验证中) | **版本冲刺与架构治理并行**，技术债偿还力度最大 |
| **Kimi Code CLI** | 低 (3 个旧 Issue 集中关闭) | 0 | 无 (稳定版 v1.16.0) | **低频维护/酝酿大版本**，近期偿还 XDG/YOLO 透明度等技术债 |
| **Gemini CLI** | - | - | - | **数据缺失**，无法评估 |

> **注**：Issue/PR 数量反映社区反馈密度与核心团队响应速度，非绝对优劣判断标准。

---

## 3. 共同关注的功能方向

| 方向 | 关注工具 (代表性诉求) | 核心痛点/诉求 |
| :--- | :--- | :--- |
| **Windows 原生体验/稳定性** | **Claude Code** (GPU 崩溃、置顶窗口、更新失败)、**Codex** (重连循环、多显示器溢出、高 DPI 渲染)、**OpenCode** (路径分隔符、NSIS 安装器冲突、文件监视器) | Electron/Tauri/原生 Rust 跨平台差异导致的**生产力阻塞性 Bug** 集中爆发，原生化或重写成共识。 |
| **企业级治理与合规** | **Claude Code** (托管 MCP、多账号隔离、凭据加密)、**Copilot CLI** (企业默认模型识别、代理穿透、Constrained Language)、**Pi** (ToolPolicy 审计钩子)、**CodeWhale** (MCP Secret 隔离、Provider 中立) | **统一下发、审计日志、零信任存储、多租户隔离**成采购门槛。 |
| **会话持久化与长任务韧性** | **Claude Code** (SSH 断线重连、后台会话 ID 失效)、**Codex** (移动端无头远程主机、Fork 状态泄露)、**Copilot CLI** (OOM 崩溃、恢复丢失 Agent)、**OpenCode** (非交互模式退出码、压缩边界保持)、**Pi** (AgentHarness 可恢复运行时) | **“会话即资产”**，需支持断点续跑、跨设备迁移、后台长跑不崩溃。 |
| **MCP/插件生态生产级化** | **Claude Code** (托管下发、GitHub 连接器诊断)、**Codex** (OAuth 协同刷新、显式插件等待)、**Copilot CLI** (协议版本冲突、OAuth 缓存、子进程清理)、**OpenCode** (插件 SDK 事件流/表单/会话管理)、**CodeWhale** (插件市场 API、Computer-Use 插件包) | 从“能连上”向**版本协商、认证刷新、沙箱隔离、生命周期管理**演进。 |
| **多模型路由与中立性** | **Codex** (模型感知 Guardian 评分)、**OpenCode** (OpenAI 兼容端点自动发现模型 #6231 225👍)、**Pi** (xAI/Ollama/Bedrock/llama.cpp 适配)、**CodeWhale** (清理 18 处 DeepSeek 硬编码)、**Qwen Code** (OpenTUI 解耦渲染层) | **避免 Vendor Lock-in**，支持 BYOK、本地模型、自定义网关零配置接入。 |
| **无人值守/自动化友好** | **Claude Code** (`--permission-prompts none`)、**Codex** (Misaligned Pause 可决策)、**Copilot CLI** (非交互模式退出码语义)、**OpenCode** (CI/CD 可检测失败信号) | 权限系统**可编程化**，从“弹窗确认”转向“策略即代码”。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线差异 | 独特护城河 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **企业级标准化交付平台** | 企业工程团队、合规要求高的组织 | Electron + MSIX (Win)；重服务端托管能力 | Anthropic 模型深度绑定、**Managed MCP Servers** 组织级治理、权限模型成熟度最高 |
| **OpenAI Codex** | **全模态桌面智能体中枢** | 个人开发者、重度 Vim/键盘流用户、移动端协作场景 | Rust (Tauri) + 原生 Win 守护进程；强调 Computer Use、远程控制 | **移动端无头远程开发**愿景最清晰、Guardian 安全模型感知、Vim 模式原生支持最好 |
| **GitHub Copilot CLI** | **GitHub 生态深度集成的 CLI 伴侣** | GitHub 重度用户、企业内部标准化流水线 | Node.js (SEA 单文件) + 内置沙箱；依赖 GitHub 认证体系 | **ACP 协议对齐 VS Code**、企业策略同步、Git 操作原生感知、技能市场 |
| **OpenCode** | **可编程、可扩展的智能体运行时内核** | 框架开发者、需深度定制工作流的高级用户、本地模型爱好者 | Go/Rust 混合；**插件优先架构** (Session/Form/Event API) | **AgentHarness 标准化运行时**、**Provider 中立自动发现**、零配置本地模型接入 |
| **Pi / CodeWhale** | **下一代可恢复、多 Agent 协作的终端操作系统** | 极客、研究者、追求极致可控与自进化的用户 | Rust 单体仓；**Lane/Queue/Watch 并发模型**、Unix Domain Socket 控制面 | **AgentHarness 可恢复边界**、**Memory/Skill 自进化闭环**、**Computer-Use 插件化**、Provider 绝对中立 |
| **Qwen Code** | **高性能、现代化终端体验的开源标杆** | 开源社区贡献者、追求原生 TUI 体验的开发者 | TypeScript + **OpenTUI (自研渲染引擎)**；Ink → OpenTUI 全栈重写 | **OpenTUI 渲染引擎自主可控**、**结构化记忆协议**、Live Host Web Shell 基座 |
| **Kimi Code CLI** | **轻量、合规的国内合规开发辅助** | 国内合规敏感团队、Kimi 模型用户 | Node.js；遵循 XDG 规范、YOLO 模式审计 | 国内合规优势、Moonshot 模型深度优化、配置规范化 |

---

## 5. 社区热度与成熟度评估

| 梯队 | 工具 | 判断依据 | 成熟度标签 |
| :--- | :--- | :--- | :--- |
| **第一梯队：商业化成熟期** | **Claude Code** | Issue 量大但结构化，高赞 Issue 多为企业级功能（多账号、凭据库），Release 节奏稳定，PR 质量高（安全修复、诊断工具）。Windows 端架构债是唯一软肋。 | 🟢 **生产就绪** (Win 端除外) |
| | **OpenAI Codex** | PR 合并密度极高(20+/天)，自动化合并比例大，基建完善度高（Win 原生、MCP OAuth、Context Management 实验版）。Issue 多为平台适配类，核心功能稳定。 | 🟢 **生产就绪** (跨平台体验优) |
| **第二梯队：快速迭代/攻坚期** | **GitHub Copilot CLI** | 版本号 v1.0.83 显示高频补丁，但 **0 PR / 24h** 且核心 Issue (OOM、句柄泄漏、MCP 协议冲突) 指向 SEA 运行时架构瓶颈，技术债集中爆发。 | 🟡 **架构债高企** 需重构 |
| | **Qwen Code** | OpenTUI 迁移驱动全员高强度 PR，CI/CD 拆分、结构化记忆、输出样式等配套设施同步上线。Issue 多为迁移阻塞与安全加固，属**主动重写期**阵痛。 | 🟢 **核心重写收尾** 潜力大 |
| | **Pi / CodeWhale** | 同源双核，PR 极高质量（运行时内核、安全策略、插件市场），Issue 多为架构设计级（EPIC、Provider 中立）。v0.9.12 集成 10+ UX 切片，属**基建奠基期**。 | 🟢 **架构领先** 生态待建 |
| | **OpenCode** | 高赞 Issue 长期跟踪（自动发现模型 225👍），PR 设计精良（Harness、Plugin SDK、错误类型化），版本语义化清晰。社区规模小但粘性极高。 | 🟢 **内核成熟** 插件生态起步 |
| **第三梯队：低频维护/观望期** | **Kimi Code CLI** | 半年旧 Issue 集中关闭，无 PR、无 Release，疑似资源收缩或酝酿大版本。 | 🔴 **活跃度低** |
| | **Gemini CLI** | 数据缺失，无法评估。 | ⚪ **未知** |

---

## 6. 值得关注的趋势信号

### 6.1 技术趋势
1.  **“运行时标准化”取代“Prompt 工程”成为核心竞争力**  
    OpenCode `AgentHarness`、Pi `AgentHarness`、Claude Code `--permission-prompts none`、Codex `Context Management Experimental` 均指向：**标准化的生命周期（Prompt/Compact/Abort/Resume/Lanes/Watch）、可序列化的状态、类型化的错误边界**。未来竞争点在于 **Runtime SDK** 而非 Prompt 模板。

2.  **MCP 从“协议”进化为“平台能力”**  
    托管下发、OAuth 协

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-03）

---

## 1. 热门 Skills 排行（高关注度 PR Top 8）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **skill-creator 评估系统修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 召回率恒为 0% 的核心缺陷，涉及 Windows 流读取、触发检测、并行 Worker | 10+ 独立复现，阻断描述优化闭环；同类 Windows 兼容性修复 [#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) 并行推进 | OPEN |
| 2 | **Hivemind：零成本多智能体编排** [#1628](https://github.com/anthropics/skills/pull/1628) | 让 Claude Code 将机械任务委派给 headless opencode Worker（免费模型），自身仅作规划/审查/合并 | “昂贵模型上下文是稀缺资源”设计理念引发关注，属元技能范式创新 | OPEN |
| 3 | **self-audit：机械验证 + 四维推理质量门** [#1367](https://github.com/anthropics/skills/pull/1367) | 交付前审计：Step 0 逐文件存在性校验 → 四维推理审计（严重度优先），通用于任意技术栈 | 对应 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 三阶段质量管线提案，社区对“推理质量量化”需求强烈 | OPEN |
| 4 | **testing-patterns：全栈测试模式库** [#723](https://github.com/anthropics/skills/pull/723) | 覆盖 Testing Trophy、AAA 模式、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 回应社区对“标准化测试生成”长期诉求，文档完整度高 | OPEN |
| 5 | **document-typography：AI 生成文档排版质控** [#514](https://github.com/anthropics/skills/pull/514) | 防止孤行/寡行、标题断页、编号错位等排版通病，“用户极少主动要求好排版” | 解决 Claude 生成文档的“最后一公里”质量问题，通用性极强 | OPEN |
| 6 | **skill-quality-analyzer / skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 两大元技能：结构文档/示例/资源/安全/维护性五维打分 + 安全扫描（注入/越权/数据泄露） | 直接支撑 Issue [#492](https://github.com/anthropics/skills/issues/492) 信任边界治理，生态自治基础设施 | OPEN |
| 7 | **claude-api 技能维护：标记 4 个退役模型** [#1607](https://github.com/anthropics/skills/pull/1607) | 清理 `models.md` 中遗留的 `claude-opus-4-1` 等已退役模型 ID | 关联 Issue [#1487](https://github.com/anthropics/skills/issues/1487) 156k Token 注入爆炸问题，维护紧迫性高 | OPEN |
| 8 | **ServiceNow 平台级技能** [#568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/ITOM/ITAM/SAM/FSM/HRSD/CSM/SPM/Vuln Response/SecOps/IntegrationHub 全谱系 | 企业级平台技能首个全域覆盖案例，Issue [#1175](https://github.com/anthropics/skills/issues/1175) 同期讨论 SPO 安全合规 | OPEN |

> **备注**：所有列出 PR 均为 **OPEN** 状态，反映社区核心关注点集中在“工具链稳定性”、“元技能/治理”、“企业级场景”三大维度。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **信任边界与安全治理** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) | 社区技能以 `anthropic/` 命名空间分发，冒充官方技能，导致权限过度授予 | 🔴 **最高** |
| **组织级技能共享与分发** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) | 避免手工下载→传文件→上传的原始流程，需共享库/直链分发/权限管理 | 🟠 **高** |
| **评估/基准体系可用性** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍)、[#1390](https://github.com/anthropics/skills/issues/1390) | `run_eval.py`/`evaluation.py` 在真实环境全链路失效，阻断技能迭代闭环 | 🟠 **高** |
| **上下文窗口与 Token 效率** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬)、[#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) | 单技能注入 156k Token 耗尽窗口；需符号化压缩长期记忆 | 🟡 **中高** |
| **元技能：技能审计/治理/质量门** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍)、[#412](https://github.com/anthropics/skills/issues/412) | 预校准→对抗审查→交付验证三阶段管线；Agent 治理模式（策略/威胁/信任/审计） | 🟡 **中高** |
| **企业级集成与合规** | [#1175](https://github.com/anthropics/skills/issues/1175) (4 💬)、[#29](https://github.com/anthropics/skills/issues/29) (4 💬) | SharePoint/ACL 细粒度权限、Bedrock 部署兼容、MCP 暴露标准化 | 🟡 **中** |
| **文档/Office 互操作健壮性** | [#12](https://github.com/anthropics/skills/issues/12) (4 💬, 1 👍)、[#538](https://github.com/anthropics/skills/pull/538)、[#541](https://github.com/anthropics/skills/pull/541) | docx/OOXML 空白重排破坏文档、大小写敏感路径、书签 ID 冲突 | 🟢 **中** |

---

## 3. 高潜力待合并 Skills（评论活跃、工程完备、近期可能落地）

| PR | Skill 名称 | 判断理由 | 预计落地窗口 |
|----|------------|----------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评估链路全修复** | 阻断性 Bug，10+ 复现，配套 Windows 修复 [#1099](https://github.com/anthropics/skills/pull/1099)/[#1050](https://github.com/anthropics/skills/pull/1050) 已并行，官方优先级最高 | **近期（1-2 周）** |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api 模型清单维护** | 直接修复 [#1487](https://github.com/anthropics/skills/issues/1487) 生产事故级 Token 爆炸，维护性改动无架构风险 | **近期（1 周）** |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **评估序列化/指标/编码/脚本稳定性修复包** | 修复 mcp-builder 等多技能评估链路的跨平台、指标计算、序列化硬伤，配套 [#1390](https://github.com/anthropics/skills/issues/1390) | **近期（2-3 周）** |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 文档完备、覆盖面广、无外部依赖、社区长期呼声高，仅需维护者 Review | **短期（1 个月内）** |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 通用性强、实现自包含、解决“AI 文档最后一公里”痛点，Issue 无异议 | **短期（1 个月内）** |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 生态自治基建，直接支撑 [#492](https://github.com/anthropics/skills/issues/492) 治理，官方激励收录例行技能 | **短期（1-2 个月）** |
| [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | 企业级全域覆盖首例，作者持续维护至 8 月，Issue [#1175](https://github.com/anthropics/skills/issues/1175) 同期讨论合规 | **中短期（2 个月内）** |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **hivemind** | 范式创新（昂贵模型做规划+廉价模型做执行），若通过安全审查将成标杆元技能 | **中短期（视安全审查而定）** |

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区在 Skills 层面最集中的诉求是：建立“可信、可评估、可复用”的技能工程化基础设施——从命名空间治理、评估链路闭环、元技能自治，到组织级分发与上下文效率，核心矛盾已从“缺技能”转向“技能生产力与治理体系的缺失”。**

---

# Claude Code 社区动态日报 | 2026-09-03

---

## 1. 今日速览

- **v2.1.259 发布**：新增企业级 `managedMcpServers` 托管配置，支持组织统一下发 HTTP/SSE 类型 MCP 服务器；新增 `--permission-prompts none` 无人值守模式，适配 CI/CD 与无头部署场景。
- **Windows 桌面端稳定性成核心痛点**：GPU 进程崩溃（#80444）、窗口置顶无法关闭（#85891、#87895）、静默更新留孤儿进程导致无法启动（#89680、#91663）等高热 Issue 持续发酵，社区呼声极高。
- **Cowork/云端协作权限收紧**：Git 代理开始拦截未在“授权仓库集合”内的推送，甚至阻断用户自带 PAT（#76248），引发团队协作流程中断担忧。

---

## 2. 版本发布

### v2.1.259 (2026-09-03)
| 变更 | 说明 |
|------|------|
| **`managedMcpServers` 托管设置** | 组织可通过配置统一下发 HTTP/SSE 类型 MCP 服务器（结构与 `.mcp.json` 一致）；命令行启动类条目会被自动跳过，适合企业统一治理。 |
| **`--permission-prompts none`** | 彻底禁用权限弹窗，任何原本会触发提示的操作直接按默认策略执行，面向无人值守主机、CI/CD 流水线、自动化脚本场景。 |

> 🔗 [Release v2.1.259](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 核心诉求/影响 | 为什么重要 |
|---|-------|------|------|---------------|------------|
| 1 | [#36151](https://github.com/anthropics/claude-code/issues/36151) 多账号切换 | OPEN | 💬169 👍675 | 移动端需支持不共享邮箱的多账号无缝切换 | **最高呼声功能**，涉及个人/企业账号隔离、合规与隐私，675 👍 显示刚需强烈 |
| 2 | [#80444](https://github.com/anthropics/claude-code/issues/80444) Windows GPU 致命崩溃 | OPEN | 💬104 👍16 | 内嵌浏览器标签触发 GPU 进程崩溃，MSIX 包损坏需修复才能启动 | **阻塞性 Bug**，影响 Win11 主流环境，已复现于两版驱动，Electron/Chromium 底层问题 |
| 3 | [#85891](https://github.com/anthropics/claude-code/issues/85891) Win 窗口强制置顶 | OPEN | 💬65 👍145 | 窗口始终置顶且无设置关闭，干扰多任务 | **体验破坏性 Bug**，macOS 同类 #66516 已关闭但 Win 端未修，145 👍 反映广泛不满 |
| 4 | [#76248](https://github.com/anthropics/claude-code/issues/76248) Cowork Git 推送被拦截 | OPEN | 💬32 👍12 | Git 代理拦截非授权仓库推送，自带 PAT 失效 | **团队协作断流风险**，权限模型收紧未通知，影响远程开发/自动化部署流程 |
| 5 | [#49790](https://github.com/anthropics/claude-code/issues/49790) SSH 远程会话断线不保活 | OPEN | 💬17 👍41 | 客户端断开导致远端进程终止，无法重连恢复 | **长任务/服务器端开发刚需**，41 👍 显示运维场景强诉求 |
| 6 | [#89680](https://github.com/anthropics/claude-code/issues/89680) 静默更新留孤儿进程 | OPEN | 💬8 👍0 | 自动更新后旧 AppX 容器被占用，新版启动报 0x80070020 需重启 | **可用性严重缺陷**，“静默更新”反成重启诱因，Win 端部署体验差 |
| 7 | [#91296](https://github.com/anthropics/claude-code/issues/91296) `bypassPermissions` 被忽略 | OPEN | 💬4 👍3 | 项目级 `settings.local.json` 配置不生效，且缺失于 Shift+Tab 循环 | **权限系统回归**，影响自动化脚本与无头模式下的权限绕过 |
| 8 | [#73770](https://github.com/anthropics/claude-code/issues/73770) 状态栏暴露周速率限额 | OPEN | 💬2 👍7 | 将 Opus/Sonnet/Fable 周配额注入 statusline JSON | **可观测性增强**，便于自定义状态栏实时显示配额，避免意外耗尽 |
| 9 | [#91650](https://github.com/anthropics/claude-code/issues/91650) Bash `cd` 触发误报权限提示 | OPEN | 💬1 👍4 | 绝对路径 `cd` 遇 Read 规则仍弹提示，Git Bash 环境下高频误触 | **Windows 开发体验细节**，权限守卫过度敏感，干扰正常目录切换 |
| 10 | [#73582](https://github.com/anthropics/claude-code/issues/73582) 凭据写入系统密钥库 | OPEN | 💬3 👍4 | API Key/OAuth Token 明文落盘，建议改用 OS Secret Store | **安全合规基线**，涉及企业审计与零信任架构，长期未解决 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心变更 | 影响范围 |
|---|----|------|----------|----------|
| 1 | [#87079](https://github.com/anthropics/claude-code/pull/87079) `fix(security-guidance): make ** glob patterns match zero-depth paths` | OPEN | 修复 `**/*.ts` 等 glob 无法匹配顶层文件（`fnmatch` 语义导致 `/` 必须显式出现），安全规则静默失效 | **安全规则生效率**，修复后 `**` 真正实现“任意深度”匹配，消除静默漏报 |
| 2 | [#61691](https://github.com/anthropics/claude-code/pull/61691) `[scripts] Add diagnostic script for GitHub connector showing 'Connected' but no tools` | OPEN | 新增 PowerShell 诊断/修复脚本，针对 Cowork GitHub MCP 连接器“已连接但零工具”顽疾 | **运维自愈能力**，关联 #28695/#41658/#57582 多个历史 Issue，提供一键排查入口 |
| 3 | [#41938](https://github.com/anthropics/claude-code/pull/41938) `Add Linux/macOS Bash script for DevContainer startup` | CLOSED | 补齐非 Windows 平台 DevContainer 启动脚本，原仅有 PowerShell 版 | **跨平台一致性**，消除 Linux/macOS 开发者容器化接入门槛 |
| 4 | [#86537](https://github.com/anthropics/claude-code/pull/86537) `Fix duplicated word in CHANGELOG.md` | OPEN | 修复 1.0.124 版本条目中 "to to" 重复单词 | 文档质量微修，无功能影响 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **企业级治理与合规** | #36151 多账号隔离、#73582 凭据加密存储、#76248 授权仓库集合 | ⭐⭐⭐⭐⭐ 高呼声+高赞，推动向企业级产品演进 |
| **Windows 桌面端原生体验** | #80444 GPU 崩溃、#85891/#87895 窗口置顶、#89680/#91663 更新机制 | ⭐⭐⭐⭐⭐ 连续高热，Electron/MSIX 架构债务集中爆发 |
| **远程/云端开发会话韧性** | #49790 SSH 断线重连、#76248 Cowork 权限、#89946 后台会话 ID 失效 | ⭐⭐⭐⭐ 服务器端开发成主流，会话持久化成刚需 |
| **无人值守/自动化友好** | v2.1.259 `--permission-prompts none`、#91296 `bypassPermissions` 失效 | ⭐⭐⭐⭐ CI/CD 集成场景扩大，权限系统需更可编程 |
| **可观测性与成本透明** | #73770 状态栏暴露速率限额、#81703 计费异常 | ⭐⭐⭐ 用户需实时掌握配额与账单，避免惊喜账单 |
| **安全规则与插件生态** | #87079 glob 修复、#89728 文档滞后 | ⭐⭐⭐ 插件/安全规则成扩展点，文档与实现同步滞后 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **Windows 端“三大件”阻碍生产力**  
   GPU 崩溃、窗口置顶、更新后无法启动 —— 三个高热 Issue 直指 Electron/MSIX 架构债务，开发者期待原生或 Tauri 重写，或至少提供可用的变通方案。

2. **权限模型“收紧不透明”**  
   Cowork Git 代理突然拦截 PAT 推送（#76248）、项目级 `bypassPermissions` 失效（#91296）、安全规则 glob 静默失效（#87079） —— 权限边界变更缺乏变更日志与迁移指引，导致自动化流水线频繁断裂。

3. **会话状态易丢失**  
   SSH 断线即终止（#49790）、Desktop 崩溃/更新后会话栏重置（#91528）、后台会话自改名导致 ID 失效（#89946） —— **“会话即资

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-03

---

## 1. 今日速览

Codex 今日发布 **v0.153.0 稳定版**，核心亮点为 Vim 模式新增 `u` 撤销与 `Ctrl+R` 重做支持，并完善插件 CLI 的列表/安装/移除能力。社区热点集中在 **Windows 平台稳定性**（远程控制重连循环、多显示器溢出、宠物组件点击穿透）、**配额异常消耗**跨报告追踪，以及 **移动端无头远程 Linux 主机**支持需求。PR 端呈现高密度合并：Windows 原生 app-server 守护进程、MCP OAuth 协同刷新、Guardian 评分模型感知、上下文管理实验模式等 20+ 项基建改进同步落地。

---

## 2. 版本发布

### `rust-v0.153.0` (稳定版)
| 类型 | 内容 |
|------|------|
| **新功能** | Vim 模式支持 `u` 撤销、`Ctrl+R` 重做，完整保留粘贴内容与附件草稿 ([#41941](https://github.com/openai/codex/pull/41941), [#42140](https://github.com/openai/codex/pull/42140)) |
| **新功能** | 插件 CLI 新增 `list`、`install`、`remove` 子命令，支持插件全生命周期管理 |
| **关联预发布** | `0.153.0-alpha.6` / `alpha.5.1` / `alpha.5` 已于过去 24h 连续推送，验证稳定性 |

> 💡 **升级建议**：Vim 重度用户建议立即升级；插件开发者可开始适配新 CLI 接口。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 热度 | 核心诉求 | 为什么重要 |
|---|-------|------|------|----------|------------|
| 1 | [#23200](https://github.com/openai/codex/issues/23200) | Enhancement | 💬22 👍56 | **移动端支持无头远程 Linux 主机**，无需桌面端常驻在线 | 解决“桌面端必须在线”痛点，释放服务器端常驻开发流程，⭐ 最高 |
| 2 | [#39954](https://github.com/openai/codex/issues/39954) | Bug | 💬20 | Windows + Android 远程控制初始化后进入**重连循环** | 阻断 Windows 用户移动端协作，影响面广 |
| 3 | [#41513](https://github.com/openai/codex/issues/41513) | Bug | 💬19 👍6 | Windows 内置/自定义**悬浮宠物点击穿透、无法拖拽** | 桌面端趣味/陪伴功能在高 DPI 下失效，用户感知强 |
| 4 | [#41220](https://github.com/openai/codex/issues/41220) | Bug (Meta) | 💬16 👍8 | **配额/积分异常加速消耗**，多报告交叉追踪 | 直接关联计费信任，Pro/Team 用户高度关注 |
| 5 | [#39989](https://github.com/openai/codex/issues/39989) | Bug | 💬14 | Windows 重启后 **Recents 仍保留已删除会话** | 数据一致性缺陷，影响历史检索体验 |
| 6 | [#40782](https://github.com/openai/codex/issues/40782) | Bug | 💬13 👍4 | macOS 26.820.60940 更新后 **全局 UI 文字变细发虚** | 视觉回归，影响中文简体/浅色主题可读性 |
| 7 | [#30385](https://github.com/openai/codex/issues/30385) | Bug | 💬12 | Windows 侧边栏/搜索**缺失最近本地项目线程**（磁盘实在存在） | 索引与 UI 同步断层，阻碍项目快速切换 |
| 8 | [#25826](https://github.com/openai/codex/issues/25826) | Bug | 💬12 👍15 | 多显示器下**最大化窗口溢出到相邻屏** | 多屏开发者高频痛点，👍 15 显示共识度高 |
| 9 | [#38144](https://github.com/openai/codex/issues/38144) | Bug | 💬8 👍7 | `/fork` 留下**父线程活跃写入器**，阻塞另一终端恢复 | CLI 并发工作流阻断，影响终端多路复用 |
| 10 | [#24224](https://github.com/openai/codex/issues/24224) | Bug | 💬8 👍4 | 并发会话**跨项目泄露工作区根路径** | 上下文隔离失效，可能导致敏感路径误读 |

> 🔍 **观察**：Windows 平台问题占比 6/10，且多涉及 **多显示器、高 DPI、Store 更新、远程控制**——与近期 Windows 原生守护进程 PR（#42405, #42392）形成呼应。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响范围 |
|---|----|------|----------|----------|
| 1 | [#42405](https://github.com/openai/codex/pull/42405) | ✅ Merged | **Windows 原生支持 app-server 守护进程**（AF_UNIX socket、生命周期命令、TUI 自动附着） | 统一 Unix/Windows 后台服务体验，解决 #39954 类重连根因 |
| 2 | [#42392](https://github.com/openai/codex/pull/42392) | ✅ Merged | Windows 托管守护进程**自动更新/重启/就绪握手**（PowerShell 非交互安装） | 消除手动重启摩擦，配合 #42405 完善 Windows 服务化 |
| 3 | [#42413](https://github.com/openai/codex/pull/42413) | ✅ Merged | **MCP OAuth 协同刷新**：RMCP 刷新并持久化凭证到 pinned store | 解决长跑会话中 MCP 认证过期，提升企业级集成可靠性 |
| 4 | [#42422](https://github.com/openai/codex/pull/42422) | 🟢 Open | **Guardian 评分遵循模型 REPL 自动审查要求**（含会话中模型切换） | Computer Use 安全评分与模型能力对齐，防止过度放行 |
| 5 | [#42385](https://github.com/openai/codex/pull/42385) | ✅ Merged | **实验性上下文管理**：token 预算、历史笔记、激活配置（Plus/Pro/Pro Lite） | 为长上下文工程化铺路，可通过 `features.context_management.experimental_mode` 试用 |
| 6 | [#42419](https://github.com/openai/codex/pull/42419) | ✅ Merged | **Agent Command Center 新增 `Ctrl+O` 会话恢复选择器** | 统一入口恢复历史线程，保留命令中心状态 |
| 7 | [#42410](https://github.com/openai/codex/pull/42410) | ✅ Merged | **误对齐暂停聊天可审查/继续**：展示 finding 与 continuation request | 将安全拦截从“硬停”转为“可决策”，提升可控性 |
| 8 | [#42408](https://github.com/openai/codex/pull/42408) | ✅ Merged | **嵌入式编辑器输入强化**：保留 `!/?/` 字面量、Vim 模式切换保留缓冲、粘贴爆发 Enter 处理 | 修复 TUI 编辑器在极端输入下的状态丢失 |
| 9 | [#42406](https://github.com/openai/codex/pull/42406) | ✅ Merged | **MCP 启动期显式插件提及不再跳过**：显式 `@plugin` 会等待工具就绪 | 解决用户显式调用插件却因宽限期结束而不可用 |
| 10 | [#42391](https://github.com/openai/codex/pull/42391) | ✅ Merged | **`apply_patch` 在 executor 路径上下文授权**：按 PathUri 评估目标 | 修复补丁路径约定差异导致的权限误判 |

> ⚡ **趋势**：本日 PR 极度集中于 **Windows 原生化、MCP/插件生产级化、安全评分模型感知、上下文工程化** 四大基建方向，且多为 `copyberry[bot]` 自动化合并，显示核心团队发布节奏加快。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声特征 |
|----------|------------|--------------|
| **远程/无头开发** | #23200 (👍56), #31110, #39954 | 服务器端常驻 + 移动端控制，摆脱桌面端依赖 |
| **Windows 原生体验** | #25826, #34351, #37769, #39954, #41242, #41486, #41513, #41523, #41752, #42289 | 多显示器、高 DPI、Store 更新、TUI 渲染、路径转义、宠物组件——**系统性缺口** |
| **配额/用量透明化** | #41220, #42127, #42280 | 异常消耗、重置日期推进不恢复、VS Code 扩展侧高频小任务也跑满配额 |
| **会话/上下文工程化** | #30385, #30515, #38144, #38370, #38611 | 索引丢失、自动化线程污染、fork 状态泄露、压缩 404、长会话 CPU 跑满 |
| **Computer Use 落地** | #36459, #42214 | macOS Safari 坐标点击失败、Windows `cua.getApp is not a function`——**跨平台 API 不完备** |
| **MCP/插件生态** | #42406, #42413, #42384 | 启动期显式等待、OAuth 协同刷新、凭证存储适配器——**企业级集成诉求** |

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点分类 | 典型反馈 | 建议关注优先级 |
|----------|----------|----------------|
| **Windows 一等公民缺失** | 守护进程

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-09-03

---

## 1. 今日速览

- **版本迭代加速**：过去 24 小时连发两个补丁版本（v1.0.83-2 / v1.0.83-3），重点引入 **自定义 Agent 多模型回退机制** 与 **Claude Fable 5.1 支持**，并修复 Linux 沙箱网络代理限制问题。
- **社区聚焦稳定性与企业级能力**：高热度 Issue 集中在 **会话内存溢出 (OOM)**、**MCP 协议兼容性**、**企业默认模型识别**、**Agent 恢复回归** 等生产环境阻塞性问题。
- **零 PR 合并**：过去 24 小时无 PR 更新，显示核心团队正专注于热修复发布而非新特性合并。

---

## 2. 版本发布

### v1.0.83-3 (最新)
> **修复与变更** | [Release 详情](https://github.com/github/copilot-cli/releases/tag/v1.0.83-3)
- 针对 v1.0.83-2 的快速跟进修复，具体变更细节未在摘要中展开，推测为紧急回归修复。

### v1.0.83-2
> **功能增强与改进** | [Release 详情](https://github.com/github/copilot-cli/releases/tag/v1.0.83-2)
- **🆕 自定义 Agent 多模型回退**：`model` 字段现支持数组，按顺序尝试直到可用；`model-policy: required` 强制锁定列表内模型。
- **🆕 新模型支持**：新增 `claude-fable-5.1`。
- **🔒 Linux 沙箱加固**：网络出站现强制限制在配置的代理范围内，提升企业合规性。

---

## 3. 社区热点 Issues（精选 Top 10）

| # | Issue | 核心痛点 | 热度 (👍/评论) | 关注理由 |
|---|-------|----------|----------------|----------|
| 1 | [#3709](https://github.com/github/copilot-cli/issues/3709) **会话内动态切模型（含 BYOK/本地）** | `/model` 仅列官方模型，BYOK 模式锁死单模型 | 👍29 / 7 | **需求最强**：开发者迫切需要在同一会话中无缝切换云/本地模型，解锁成本与隐私权衡。 |
| 2 | [#4664](https://github.com/github/copilot-cli/issues/4664) **长会话恢复 OOM 崩溃** | 恢复大会话时 V8 堆溢出 (4GiB 上限) | 👍0 / 5 | **严重阻塞**：长上下文工作流完全不可用，关联 #4686、#4699，疑似内存泄漏系统性问题。 |
| 3 | [#4686](https://github.com/github/copilot-cli/issues/4686) **37 分钟必现 OOM / 3.2 万 libuv 句柄泄漏** | SEA 版 Node 忽略 `NODE_OPTIONS`，异步句柄不释放 | 👍0 / 2 | **核心架构缺陷**：嵌入式运行时配置受限，导致生产环境不可用，需运行时层面修复。 |
| 4 | [#4525](https://github.com/github/copilot-cli/issues/4525) **MCP 初始化双协议冲突 (-32022)** | 现代 `server/discover` 后仍发遗留 `initialize` | 👍2 / 5 | **协议栈回归**：与 Python MCP SDK 2.0 不兼容，阻断 stdio 类 MCP 服务器接入。 |
| 5 | [#4674](https://github.com/github/copilot-cli/issues/4674) **会话恢复不恢复自定义 Agent (回归 #917)** | MCP/工具白名单丢失，静默降级为基础 Agent | 👍0 / 3 | **体验断层**：长周期开发依赖 Agent 上下文，恢复机制失效严重打断流程。 |
| 6 | [#4695](https://github.com/github/copilot-cli/issues/4695) **MCP OAuth Token 缓存键冲突导致重复认证** | HTTP MCP 服务器 Token 缓存命中率低，频繁重新授权 | 👍0 / 3 | **企业级痛点**：OAuth PKCE 场景下体验极差，安全与易用性矛盾。 |
| 7 | [#4692](https://github.com/github/copilot-cli/issues/4692) **企业托管默认模型 CLI 不识别** | VS Code/桌面端正常，CLI 报模型不可用回退默认 | 👍0 / 3 | **多端一致性**：企业策略在 CLI 失效，阻碍组织级标准化推广。 |
| 8 | [#4438](https://github.com/github/copilot-cli/issues/4438) **`disable-model-invocation: true` 导致 Skill 彻底不可达** | 显式调用也报 "Skill not found"，非预期设计 | 👍6 / 4 | **语义违背**：本意“仅禁用模型自动调用”，实为“彻底禁用”，破坏显式工作流。 |
| 9 | [#4699](https://github.com/github/copilot-cli/issues/4699) **长会话 OOM + 崩溃转储污染工作目录** | 14 小时 3 次崩溃，Core dump 写入 CWD | 👍1 / 0 | **运维噩梦**：不仅崩溃，还污染代码仓库，需修复转储路径与内存根因。 |
| 10 | [#4697](https://github.com/github/copilot-cli/issues/4697) **`/clear` 不清理 stdio MCP 子进程** | 旧进程残留导致端口/句柄泄漏，`/mcp reload` 正常 | 👍0 / 0 | **资源管理缺陷**：会话重置不彻底，长期运行必现资源耗尽。 |

---

## 4. 重要 PR 进展

> **过去 24 小时无 PR 更新**  
> 核心团队精力集中在 v1.0.83 系列热修复发布，建议关注后续针对上述 OOM、MCP、Agent 恢复等 Issue 的修复 PR。

---

## 5. 功能需求趋势（从全量 37 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声核心 |
|----------|------------|--------------|
| **会话持久化与内存管理** | #4664, #4686, #4699, #2861, #4698 | 解决长会话 OOM、Compaction 失败、崩溃转储路径、内存泄漏，是**生产可用性第一门槛**。 |
| **MCP 生态兼容与稳定性** | #4525, #4598, #4695, #4697, #2630 | 协议版本冲突、启动连接率低、OAuth 缓存失效、子进程清理、Sub-agent MCP 断连——**MCP 已成核心基建，稳定性跟不上**。 |
| **Agent/技能 体系完善** | #4674, #4438, #4655, #4665, #4703 | Agent 恢复回归、Skill 调用语义修正、插件发现机制、上下文重复注入、单会话多 Provider 隔离。 |
| **企业级治理与多端一致** | #4692, #4275, #4671, #4683 | 默认模型策略同步、ACP 配置对齐、TLS 检查代理兼容、ConstrainedLanguage 模式报错。 |
| **模型选择灵活性** | #3709, #3074, #4703 | 会话内切模型（含本地）、`/effort` 快捷命令、Agent 级 Provider 解耦。 |

---

## 6. 开发者关注点总结

1. **“能跑通、跑得久” 是底线诉求**  
   OOM、句柄泄漏、崩溃转储、会话恢复失败组成“四大金刚”，直接劝退长任务开发者。

2. **MCP 从“能连上”向“生产级稳定”跨越期**  
   协议版本谈判、OAuth 复用、子进程生命周期、Sub-agent 传递——每个环节都有阻塞性 Bug。

3. **Agent/技能 期望成为“一等公民”**  
   恢复即恢复上下文、显式调用不被误禁、插件自动发现、跨 Provider 编排——现状与愿景差距大。

4. **企业环境适配细节决定采纳率**  
   代理穿透、模型策略下发、受限 Shell 模式、ACP 对齐——缺一不可的合规清单。

5. **模型路由控制权下放到会话/Agent 粒度**  
   单一 `COPILOT_PROVIDER_BASE_URL` 成为瓶颈，社区呼吁运行时动态路由能力。

---

> **数据来源**：`github.com/github/copilot-cli` Releases / Issues（过去 24h）  
> **生成时间**：2026-09-03 08:00 UTC  
> **下一期预告**：重点跟踪 v1.0.83-3 后续修复 PR 与 OOM 根因分析进展。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-09-03

---

## 1. 今日速览
- **无新版本发布**，当前稳定版本仍为 v1.16.0。
- 社区在过去 24 小时内**关闭 3 个 Issue**，涵盖 YOLO 模式透明度增强、Subagent 取消报错修复、XDG 规范目录迁移三大方向。
- 无新增 Pull Request，开发重心疑似集中在内部整合或下版本规划中。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues
> 过去 24 小时仅有 3 条 Issue 更新，均已关闭，全部列出如下：

| # | 标题 | 类型 | 核心诉求 | 状态 | 社区热度 | 链接 |
|---|------|------|----------|------|----------|------|
| **#1298** | YOLO 模式下增加 Shell 执行与文件写入内容的完整可见性 | 💡 Enhancement | 解决长命令截断（`...`）导致无法审计风险操作，需支持全量命令/写入内容展示以便及时介入 | ✅ Closed | 👍 0 / 评论 0 | [#1298](https://github.com/MoonshotAI/kimi-cli/issues/1298) |
| **#1297** | 按 ESC 取消 Subagent 时抛出未处理异常 | 🐛 Bug | Windows 平台取消子任务触发 `Unhandled exception`，影响交互稳定性 | ✅ Closed | 👍 1 / 评论 0 | [#1297](https://github.com/MoonshotAI/kimi-cli/issues/1297) |
| **#1294** | 遵循 XDG Base Directory 规范，配置目录迁移至 `~/.config/kimi` | 💡 Enhancement | 避免污染 `$HOME`，符合 Linux/跨平台最佳实践 | ✅ Closed | 👍 1 / 评论 0 | [#1294](https://github.com/MoonshotAI/kimi-cli/issues/1294) |

---

## 4. 重要 PR 进展
> 过去 24 小时无更新的 Pull Request。

---

## 5. 功能需求趋势
从今日关闭的 Issue 可提炼出三大核心诉求：

1. **高风险自动化模式的可观测性**（#1298）  
   YOLO 模式下“盲执行”引发安全焦虑，开发者强诉**全量命令回显、文件写入 Diff 实时流式展示**，并期望支持**熔断/确认机制**。

2. **异常处理与交互健壮性**（#1297）  
   取消操作、Subagent 生命周期管理中的边缘异常仍是稳定性短板，需完善**信号处理、资源清理、错误边界**。

3. **工程化规范落地**（#1294）  
   配置/缓存/数据目录分离、遵循 XDG/FHS 标准，体现社区对**发行级打包、多用户隔离、CI/CD 友好**的期待。

---

## 6. 开发者关注点
| 痛点/高频需求 | 典型 Issue | 影响面 | 建议优先级 |
|---------------|------------|--------|------------|
| **YOLO 模式“黑盒”风险** | #1298 | 安全/合规/生产可用性 | ⭐⭐⭐⭐⭐ |
| **跨平台信号/异常处理不一致** | #1297 | Windows 稳定性 | ⭐⭐⭐⭐ |
| **配置目录不规范** | #1294 | 发行打包/系统集成 | ⭐⭐⭐ |
| 长命令/大文件输出截断通用问题 | #1298 隐含 | 所有自动化场景 | ⭐⭐⭐⭐ |
| 缺乏操作审计/回放能力 | #1298 隐含 | 团队协作/事后复盘 | ⭐⭐⭐ |

> **分析师备注**：三个 Issue 均在创建半年后（2026-03-02 → 2026-09-02）集中关闭，推测团队近期进行了**技术债清理冲刺**或**v1.17.0 预发布验收**。建议关注后续 Release Notes 确认修复是否已合入主干。

---

*数据来源：GitHub API (MoonshotAI/kimi-cli) | 报告生成时间：2026-09-03 06:00 UTC*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-09-03

---

## 1. 今日速览

- **核心版本发布 v1.18.27**：修复 Provider 头部超时与流式分块超时默认值（均设为 5 分钟），新增 Anthropic `thinking.blockBinding` 可通过配置禁用，显著降低慢速模型启动失败率。
- **社区高热度需求推进**：原生会话目标 `/goal` 功能（#27167，140 👍）已有示例插件 PR #46328 进入审查；OpenAI 兼容端点自动发现模型（#6231，225 👍）持续获社区强烈呼声。
- **Windows 与跨平台稳定性集中修复**：近期关闭的 10+ 个 Issue 涉及 Windows 路径分隔符、终端标题恢复、NSIS 安装器冲突、文件监视器反斜杠路径等，显示团队正系统性补齐 Windows 体验短板。

---

## 2. 版本发布

### **v1.18.27** (2026-09-03)
| 类型 | 变更 | 影响 |
|------|------|------|
| **Bugfix** | Provider 头部请求超时默认 5 分钟（原无默认） | 解决慢速模型（如本地大模型冷启动）导致的频繁超时失败 |
| **Bugfix** | 流式分块超时默认 5 分钟，支持设为 `false` 禁用 | 兼容极慢流式输出场景，避免中途切断 |
| **Enhancement** | Anthropic `thinking.blockBinding` 可通过配置 opt-out | 给开发者完全控制权，适配不支持该特性的代理/网关 |

> 🔗 [Release v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 热度 | 核心诉求 | 为什么重要 |
|---|------|------|------|----------|------------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | **原生会话目标 `/goal`** | 🟢 OPEN | 78 评论 · 140 👍 | 持久化会话级目标/生命周期，替代临时 slash command | **最高赞功能需求**，关联 PR #46328 已提交示例插件实现 |
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | **OpenAI 兼容端点自动发现模型** | 🟢 OPEN | 48 评论 · 225 👍 | 免去手动维护 `opencode.json` 模型列表，支持 LM Studio/Ollama 等本地服务 | **社区呼声最高**（👍 数第 1），本地模型开发核心痛点 |
| [#46729](https://github.com/anomalyco/opencode/issues/46729) | **Bedrock Claude Opus 5 思维块前缀不匹配** | 🟢 OPEN | 6 评论 · 13 👍 | 1.18.25→1.18.26 升级后 Bedrock 请求失败 | **回归阻断**，影响企业级 Bedrock 用户生产环境 |
| [#36413](https://github.com/anomalyco/opencode/issues/36413) | **非交互模式工具被拒后静默退出码 0** | 🟢 OPEN | 7 评论 | `opencode run` 自动拒绝工具调用且模型无最终输出时，进程退出码 0 且无 stdout | **CI/CD 自动化隐患**，无机器可检测的失败信号 |
| [#37650](https://github.com/anomalyco/opencode/issues/37650) | **可选搜索元数据导致权限列表编码失败** | 🟢 OPEN | 6 评论 | `glob`/`grep` 可选字段为 `undefined` 导致 schema 编码报错 | **权限系统稳定性**，关联 PR #46964 已修复 |
| [#46931](https://github.com/anomalyco/opencode/issues/46931) | **Go 仪表盘 glm-5.3-flash 成本显示翻倍** | 🟢 OPEN | 2 评论 | 促销价模型在客户端显示正确，但 Go dashboard 显示原价 | **计费透明度**，影响成本监控准确性 |
| [#46941](https://github.com/anomalyco/opencode/issues/46941) | **自定义 OpenAI 兼容提供商自动发现 `/models`** | 🟢 OPEN | 2 评论 | `npm:@ai-sdk/openai-compatible` 提供商不自动拉取模型列表 | 补充 #6231，覆盖插件式提供商场景 |
| [#35329](https://github.com/anomalyco/opencode/issues/35329) | **Windows 文件监视器产生反斜杠路径** | 🔴 CLOSED | 3 评论 | 路径分隔符不一致导致比对失败 | **Windows 兼容性基础建设**，已修复 |
| [#35331](https://github.com/anomalyco/opencode/issues/35331) | **NSIS 安装器更新时杀死运行中 CLI 进程** | 🔴 CLOSED | 3 评论 | 桌面应用自动更新导致 CLI 会话数据丢失 | **数据安全**，Windows 发布流程关键修复 |
| [#28590](https://github.com/anomalyco/opencode/issues/28590) | **GNU screen 下 OSC52 剪贴板写入损坏** | 🔴 CLOSED | 11 评论 | 错误复用 tmux DCS 格式，缺分块传输 | **终端兼容性**，修复 screen 用户剪贴板功能 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 关键变更 | 关联 Issue |
|---|------|------|------|----------|------------|
| [#46328](https://github.com/anomalyco/opencode/pull/46328) | **feat(plugin): goal-loop 示例插件** | 🟢 OPEN | 新功能 | 展示如何用插件 SDK 实现 `/goal` `/loop`，无核心改动、无 SQLite、无自动继续 | #27167 |
| [#46964](https://github.com/anomalyco/opencode/pull/46964) | **fix(core): 权限请求剔除 undefined 元数据** | 🟢 OPEN | Bugfix | `glob`/`grep` 可选字段不再序列化为 `undefined`，修复 schema 编码失败 | #37650 |
| [#46965](https://github.com/anomalyco/opencode/pull/46965) | **refactor(ai): 移除 responses 重放墓碑集合** | 🟢 OPEN | 重构 | 删除 `completedMessages`/`completedTools` 墓碑，简化 ParserState，修复 resume 逻辑 | — |
| [#46690](https://github.com/anomalyco/opencode/pull/46690) | **feat(plugin): 暴露会话表单/列表/全局事件流** | 🟢 OPEN | 新功能 | 为插件（如 Telegram Bot）提供会话管理、表单交互、实时事件订阅能力 | — |
| [#46962](https://github.com/anomalyco/opencode/pull/46962) | **feat(core): 持久化压缩模型与提供商状态** | 🟢 OPEN | 新功能 | 压缩消息/完成事件新增 `model: Model.Ref` 与 `providerState`，支持跨会话恢复上下文 | — |
| [#46960](https://github.com/anomalyco/opencode/pull/46960) | **feat(ai): 新增 UnsupportedOperation 错误** | 🟢 OPEN | 增强 | 路由不支持操作（如 Anthropic `compact`）抛出类型化错误，替代通用 `InvalidRequest` | — |
| [#46959](https://github.com/anomalyco/opencode/pull/46959) | **fix(core): 拒绝无 Chat 权益的 GitHub Copilot 登录** | 🟢 OPEN | Bugfix | OAuth 成功但无 Copilot 订阅/席位时拒绝持久化凭证，避免虚假“已连接”状态 | #46891 |
| [#46957](https://github.com/anomalyco/opencode/pull/46957) | **fix(core): 重试失败的 Location 初始化** | 🟢 OPEN | Bugfix | 缓存不再给失败构建无限 TTL，文件系统修复后可自动恢复 | — |
| [#46963](https://github.com/anomalyco/opencode/pull/46963) | **refactor(cli): 更新检查迁移至 TUI 客户端** | 🟢 OPEN | 重构 | 后台服务移除自动更新监控，改由 TUI 宿主 CLI 每 10 分钟检查并同进程回调通知 | — |
| [#46961](https://github.com/anomalyco/opencode/pull/46961) | **fix(tui): 区分位置加载失败与数据同步失败** | 🟢 OPEN | Bugfix | `/api/location` 成功但 `/api/agent` 500 时，不再误导用户切换目录，保留草稿访问 | — |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表性 Issue/PR | 社区信号强度 | 说明 |
|----------|------------------|--------------|------|
| **原生会话目标/任务循环** | #27167, #46328 | ⭐⭐⭐⭐⭐ | 140 👍 + 示例插件 PR，核心工作流缺口 |
| **本地/兼容模型零配置接入** | #6231, #46941 | ⭐⭐⭐⭐⭐ | 225 👍，LM Studio/Ollama/自定义网关通用需求 |
| **插件生态能力扩展** | #46690, #46328, #46956/52/50 | ⭐⭐⭐⭐ | 会话/表单/事件流/编辑器查找 API 持续开放 |
| **Windows 一等公民体验** | #35328-332, #29834 | ⭐⭐⭐⭐ | 10+ 个 Windows 专项 Issue 密集修复/关闭 |
| **压缩/上下文管理增强** | #46962, #45368 | ⭐⭐⭐ | 持久化模型状态、修复本地模型无 `limit.output` 导致的过度压缩 |
| **提供商/路由错误类型化** | #46960, #46729 | ⭐⭐⭐ | 从字符串匹配转向类型安全错误处理 |
| **非交互模式自动化可靠性** | #36413 | ⭐⭐⭐ | CI/CD 场景下退出码、信号、输出的机器可检测性 |
| **桌面应用分发稳定性** | #35313, #35331, #35340 | ⭐⭐ | NSIS 更新冲突、Web UI 回归未回港稳定分支 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“配置即代码”仍不够自动化**  
   - 最高赞 #6231 直指痛点：本地模型频繁增删，手写 `opencode.json` 既繁琐又易错。社区期望 **标准化 `/models` 端点自动发现** 成为内置能力，而

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-09-03

> 数据来源：`github.com/earendil-works/pi` (monorepo: `badlogic/pi-mono`)  
> 统计窗口：过去 24 小时（2026-09-02 ~ 2026-09-03）

---

## 1. 今日速览

- **核心架构重构落地**：`AgentHarness` 可恢复运行时与 `ToolPolicy` 能力策略通过 PR #9044 合并，标志着 Agent 运行时生命周期（prompt/compact/abort/resume/lanes/watch）与安全审计能力正式纳入核心，为多进程、长会话、插件化治理奠定基础。
- **流式传输稳定性专项修复**：针对 Codex SSE 解析 OOM (#9036)、Esc 取消失效 (#8823)、代理流 EOF 静默挂起 (#8997)、Compaction 中 abort 状态不一致 (#8920) 等高频痛点集中推出修复，显著提升长对话与弱网下的鲁棒性。
- **多提供商适配持续深化**：Gemini 3.x `thought_signature` 缺失 (#6996)、xAI `tool_choice` 400 错误 (#8820)、Bedrock 图片提升 (#8643)、llama.cpp `reasoning_effort` (#9015)、vLLM `priority` (#9004)、OpenCode Go 配额展示 (#9031) 等适配同步推进，生态兼容性持续增强。

---

## 2. 版本发布

> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 核心影响 | 关注理由 |
|---|------|------|---------|----------|----------|
| [#6996](https://github.com/earendil-works/pi/issues/6996) | **Gemini 3.x 模型工具调用失败：缺失 `thought_signature`** | OPEN | 8 / 0 | **高** | 影响所有 Gemini 3.5/3.6 用户工具调用链路，历时 40+ 天未修，社区呼声高。 |
| [#8845](https://github.com/earendil-works/pi/issues/8845) | **分支摘要硬编码 `maxTokens: 2048` 导致大分支确定性失败** | OPEN | 7 / 0 | **中** | 核心导航功能 `/tree` 在大上下文失效，阻碍大型代码库探索。 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | **并行启动时误报 "No API key" (~48s)，因其他提供商过期 OAuth 凭证** | OPEN | 3 / 0 | **高** | 多进程/生产环境高频误报，干扰运维监控，已有确定性复现与定时数据。 |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | **流式输出时按 Esc 无法可靠取消请求，需等提供商自然结束** | OPEN | 2 / 0 | **高** | 核心交互体验缺陷，用户无法及时打断跑偏的长回复。 |
| [#9036](https://github.com/earendil-works/pi/issues/9036) | **Codex SSE 解析器全量缓冲导致堆 OOM 崩溃** | CLOSED | 1 / 0 | **严重** | 已修复 (PR #9037)，长响应场景下的致命稳定性问题。 |
| [#9035](https://github.com/earendil-works/pi/issues/9035) | **扩展工具返回非 `AgentToolResult` 导致 TUI 崩溃** | CLOSED | 1 / 0 | **中** | 扩展 API 容错性不足，已修复归一化逻辑。 |
| [#9033](https://github.com/earendil-works/pi/issues/9033) | **Linux 下载 `fd`/`ripgrep` 需使用静态链接 musl 构建 (NixOS/Alpine 兼容)** | CLOSED | 1 / 0 | **中** | 解决非 glibc 发行版安装即用失败，提升开箱即用体验。 |
| [#9029](https://github.com/earendil-works/pi/issues/9029) | **`pi update --extensions` 在 pnpm `minimum-release-age` 阻挡下静默无操作** | CLOSED | 1 / 0 | **中** | 包管理器语义差异导致版本更新感知失效，已修复提示逻辑。 |
| [#9043](https://github.com/earendil-works/pi/issues/9043) | **提案：为 `pi-agent-core` 增加可选能力策略钩子 (工具/路径/命令审计)** | CLOSED | 2 / 0 | **高** | 已并入 PR #9044，奠定企业级安全治理基础设施。 |
| [#9042](https://github.com/earendil-works/pi/issues/9042) | **提案：确立 `AgentHarness` 为规范可恢复运行时边界** | CLOSED | 2 / 0 | **高** | 已并入 PR #9044，统一生命周期契约，解决碎片化运行时问题。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 | 关联 Issue |
|---|------|------|----------|------------|
| [#9044](https://github.com/earendil-works/pi/pull/9044) | **feat(agent): 初始可恢复 Harness 运行时与能力策略** | **CLOSED** | 引入 `AgentHarness` (prompt/compact/abort/resume/lanes/watch/usage) 与可选 `ToolPolicy` (tool/path/command/audit)，默认行为不变，为 RPC/编码代理提供统一可恢复边界。 | #9043, #9042 |
| [#9037](https://github.com/earendil-works/pi/pull/9037) | **fix(ai): 有界且 CRLF 感知的 Codex SSE 解析** | **CLOSED** | 修复无上限字符串累积导致 OOM，遵循 WHATWG 事件流规范处理 CRLF，解决长流崩溃。 | #9036 |
| [#8818](https://github.com/earendil-works/pi/pull/8818) | **fix(ai): 无工具时省略 Responses `tool_choice`，xAI 发送 `tools: []`** | **CLOSED** | 修复 xAI/Grok 因 `tool_choice` 无工具数组导致 400 错误，Compact 流程恢复正常。 | #8820 |
| [#8998](https://github.com/earendil-works/pi/pull/8998) | **System Prompt 重构 (Draft)** | **OPEN** | 支持系统提示词部分更新，允许扩展在会话中动态注入/变更工具与系统提示，无需擦除历史，架构级变更。 | - |
| [#9039](https://github.com/earendil-works/pi/pull/9039) | **feat(coding-agent): `PI_DISABLE_MOUSE` 禁用全屏鼠标追踪** | **CLOSED** | 补全 `TuiAltScreenOptions.mouse` 传递，解决部分终端/SSH 场景下鼠标序列干扰。 | - |
| [#9031](https://github.com/earendil-works/pi/pull/9031) | **feat: OpenCode Go 配额页脚扩展** | **CLOSED** | 纯扩展实现，解析 `x-ratelimit-*`/`x-opencode-quota-*` 头，页脚展示 `Go 73% (1460/2000)`，零核心侵入。 | #9030 |
| [#8997](https://github.com/earendil-works/pi/pull/8997) | **fix(agent): 代理流 EOF 无终止事件时抛出错误而非挂起** | **CLOSED** | 处理残留行缓冲，避免 SSE 连接静默关闭导致消费者永久等待。 | #8996 |
| [#8994](https://github.com/earendil-works/pi/pull/8994) | **fix(coding-agent): 信号杀死进程映射为非零退出码** | **CLOSED** | 修复 OOM Killer 等信号终止被误判为成功 (exit code 0)，Bash 工具正确识别失败。 | #8992 |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | **Use `ctx.cwd` for cwd-sensitive tools** | **CLOSED** | 扩展工具回调统一使用运行时 `ctx.cwd` 解析路径，修复 read/write/edit/glob/grep 等工具在会话切目录后失效。 | - |
| [#8990](https://github.com/earendil-works/pi/pull/8990) | **fix(coding-agent): Fork 会话时保留 Compaction 边界** | **OPEN** | 重映射被移除标签的 `firstKeptEntryId`，保留提供商上下文，含回归测试。 | - |

---

## 5. 功能需求趋势（从 Issues/PRs 提炼）

1. **Agent 运行时标准化与可恢复性**  
   - `AgentHarness` 统一生命周期、Lane/Watch/Queue 机制、会话 Fork 与 Compaction 边界保持 (#9042, #9044, #8990)  
   - 目标：支持长会话、断点续跑、多进程协作、RPC 统一契约。

2. **安全与治理能力内核化**  
   - `ToolPolicy` 钩子：工具身份、路径归

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-09-03

---

## 1. 今日速览

- **核心架构迁移加速**：OpenTUI 渲染层迁移（Issue #8662）进入关键收尾阶段，PR #10831 修补提交路径并恢复 E2E 测试，标志着从 Ink 到 OpenTUI 的全面切换接近可用。
- **安全与稳定性双线并行**：`qwen serve` 守护进程的 Shell 守卫机制曝出多个权限绕过与审计盲区（#10860、#10859），同时主分支 CI 频繁因 E2E 测试与依赖 CVE 失败，团队通过 PR #10842、#10756 等强化发布门禁与流水线拆分。
- **内容生成管线加固**：针对工具调用 XML 泄露、思维链标签残留、MCP 图片越界等核心内容生成缺陷，连续合入多个修复 PR（#10835、#10791、#10797），显著提升输出纯净度。

---

## 2. 版本发布

### 🚀 live-host-v0.2.0 - Qwen Live Host v0.2.0
- **发布时间**：2026-09-03
- **主要变更**：
  - `fix(ci)`: 使共享 ECS Vitest 并发可调（@yiliang114, #10667）
  - `feat(cli)`: OpenTUI 迁移批次 4 —— 含渲染器提交路径对齐、E2E 恢复等关键补丁
- **意义**：Live Host 组件随核心 CLI 同步推进 OpenTUI 迁移，为 Web Shell 与后台代理提供统一终端能力基座。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 关键标签 | 评论 | 重要性 | 社区反应 |
|---|------|----------|------|--------|----------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | **Migrate TUI rendering layer from ink to OpenTUI (tracking)** | priority/P3, roadmap/terminal-ux | 23 | ⭐⭐⭐⭐⭐ | 核心架构重写追踪贴，23 条评论集中讨论 Virtual Viewport 兼容性、React 19 并发模式适配、性能基准对比，社区高度关注迁移完成度。 |
| [#10860](https://github.com/QwenLM/qwen-code/issues/10860) | **`qwen serve`: built-in shell guard ignores session approval mode, denies read-only Git/non-Git commands outside session dir** | priority/P3, category/security, daemon | 3 | ⭐⭐⭐⭐ | 安全审计盲区：守护进程忽略会话审批模式、拒绝会话目录外只读 Git/非 Git 命令、不可配置/审计/对操作员透出。引发对守护进程权限模型重构的讨论。 |
| [#10859](https://github.com/QwenLM/qwen-code/issues/10859) | **Serve shell guard blocks every git command outside session directory, cannot be configured/audited/surfaced** | priority/P3, category/security, daemon | 3 | ⭐⭐⭐⭐ | 与 #10860 互补，具体指出 `daemon-git-worktree-guard.ts` 硬编码拦截所有会话外 Git 命令，缺乏策略配置与审计日志。 |
| [#10850](https://github.com/QwenLM/qwen-code/issues/10850) | **ci: Dependency CVE audit fails repo-wide on new fast-uri/qs/uuid advisories (main lockfile)** | priority/P1, category/security, status/ready-for-human | 2 | ⭐⭐⭐⭐ | 主锁文件出现 4 个新增 CVE（1 high, 2 moderate, 1 low），阻断稳定版发布，需紧急升级 `fast-uri`、`qs`、`uuid` 等传递依赖。 |
| [#10818](https://github.com/QwenLM/qwen-code/issues/10818) | **Monitor pulse storm can DoS an interactive session: ESC cancel ineffective, user input starved** | priority/P1, type/bug, roadmap/background-automation | 3 | ⭐⭐⭐⭐ | **已关闭**。监控脉冲风暴导致交互会话饥饿，ESC 取消失效，25 MB 会话转储证实严重性，已通过 PR 修复事件循环背压。 |
| [#10692](https://github.com/QwenLM/qwen-code/issues/10692) | **[Bug] tool_call-dialect XML tool calls leak as plain text: fallback only recovers the invoke dialect** | priority/P2, category/core, scope/content-generation | 2 | ⭐⭐⭐ | 模型以原始 XML 输出工具调用时，`function` 方言可恢复但 **`function` 方言（系统提示教导的格式）漏网**，导致用户可见垃圾文本。 |
| [#10791](https://github.com/QwenLM/qwen-code/issues/10791) | **[core] Balanced content-only `<thinking>` blocks still leak to user-visible output** | priority/P2, welcome-pr | 2 | ⭐⭐⭐ | 仅内容回合中完整闭合的 `<thinking>...</thinking>` 未被清洗，现有防御仅覆盖未闭合形态。 |
| [#10834](https://github.com/QwenLM/qwen-code/issues/10834) | **Images returned by MCP tools bypass the read_file image budget and enter context at full resolution** | priority/P2, category/tools, scope/mcp | 2 | ⭐⭐⭐ | MCP 返回图片绕过视觉预算（最长边 1568px），直接按原始分辨率入上下文，显存/带宽风险。 |
| [#10782](https://github.com/QwenLM/qwen-code/issues/10782) | **bug(channels): removed workspaces leave stale selections that block new starts** | priority/P2, daemon | 3 | ⭐⭐⭐ | **已关闭**。动态工作区移除后在 `ChannelWorkerManager.committedSelection` 残留名称，阻塞后续通道启动。 |
| [#9942](https://github.com/QwenLM/qwen-code/issues/9942) | **Hide skill commands from top-level slash completion** | priority/P3, need-discussion, scope/web-shell | 5 | ⭐⭐⭐ | 技能命令污染顶层 `/` 补全菜单，社区倾向于“默认隐技能、显式前缀/命名空间访问”方案，需讨论交互细节。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 作者 | 状态 | 核心变更 |
|---|------|------|------|----------|
| [#10831](https://github.com/QwenLM/qwen-code/pull/10831) | **fix(cli): close OpenTUI submit-path gaps, restore its E2E leg** | chiga0 | Open | 对齐 OpenTUI 与 Ink 的四处提交路径：原始文本随内容下发、`@` 提及解析为文件内容、取消传播、提交前钩子执行顺序；恢复 OpenTUI E2E 测试通道。 |
| [#10842](https://github.com/QwenLM/qwen-code/pull/10842) | **fix(release): stop one flaky test from failing a stable release** | yiliang114 | Open | 稳定版发布引入夜ly/preview 已有的工作区测试重试机制，并强化 6 个曾阻断发布的测试，消除误报。 |
| [#10835](https://github.com/QwenLM/qwen-code/pull/10835) | **fix(core): bound oversized images returned by MCP tools** | yiliang114 | Open | MCP 图片纳入统一视觉预算管线（最长边 ≤ 1568px），已达标图片原样透传，避免上下文膨胀。 |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | **feat(memory): add structured on-demand recall** | ZijianZhang989 | Open | 托管记忆从扁平提示词升级为 **两级 ref/title 树 + 查询聚焦元数据子树 + 专用检索工具** 的结构化推拉协议。 |
| [#10761](https://github.com/QwenLM/qwen-code/pull/10761) | **feat: load custom output styles from ~/.qwen/output-styles and .qwen/output-styles** | qqqys | Open | 用户/项目级输出样式以 Markdown + YAML frontmatter 定义，自动发现加载，扩展个性化渲染能力。 |
| [#10793](https://github.com/QwenLM/qwen-code/pull/10793) | **fix(channels): route daemon permission votes by session** | qqqys | Open | 守护进程管理的 Channel 改走会话作用域投票路径，兼容旧版 request-id 路径，新增回归测试。 |
| [#10800](https://github.com/QwenLM/qwen-code/pull/10800) | **feat(ipc): keep the peer inbox reachable, and say so when it is not** | qqqys | Open | 跨会话消息收件箱绑定改为按候选路径顺序重试（`$XDG_RUNTIME_DIR/qwen-socks/` → 备选），冲突时明确报错而非静默失败。 |
| [#10802](https://github.com/QwenLM/qwen-code/pull/10802) | **fix(goal): pause the Goal on every user-cancel path, and say why** | qqqys | Open | 补齐两条用户取消路径下的 Goal 暂停逻辑：模型流 `UserCancelled` 与工具批次全取消，并给出暂停原因。 |
| [#10841](https://github.com/QwenLM/qwen-code/pull/10841) | **feat(skills): extension skills are named by their extension** | nerdalytics | Open | 扩展技能注册名改为 `<extensionName>:<authoredName>`（如 `rust:pdf`），贯穿斜杠补全、工具查找、限制匹配、设置面板。 |
| [#10756](https://github.com/QwenLM/qwen-code/pull/10756) | **ci: split lint and static checks out of the Test job** | wenshao | Open | 20 个确定性 lint/静态检查步骤剥离为独立 `lint_and_static` job，复用 `classify_pr` 路由与发布同步约定，加速主流水线反馈。 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issues/PRs | 社区呼声强度 | 说明 |
|----------|-------------------|--------------|------|
| **终端渲染架构现代化** | #8662, #10831, #10773 | 🔥🔥🔥🔥🔥 | OpenTUI 迁移是当前最大单项工程，涉及 Virtual Viewport、React 19 并发、输入法、真彩色、测试基建全链路。 |
| **守护进程/后台代理安全模型** | #108

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-09-03

> 数据来源：`github.com/Hmbown/Codewhale` | 统计周期：过去 24 小时（2026-09-02 至 2026-09-03）

---

## 1. 今日速览

- **v0.9.12 发布冲刺全面展开**：核心维护者 Hmbown 发起超大型集成 PR **#5862**，整合 10 个 UX 切片（Workbar 重构、Underwater 主题默认化、品牌 Logo 统一、悬停交互契约等），标志着 0.9.12 版本进入最终集成测试阶段。
- **架构治理与债务偿还并行**：同步推进“巨型文件拆解”（`lib.rs` 18k+ 行等）、**Provider 中立性审计**（移除 18 处 DeepSeek 硬编码）、**遗留标识符清理**（`DEEPSEEK_YOLO` 环境变量退役）等高优先级技术债任务。
- **运行时稳定性修复上线**：修复 Lane TTL 清理误删风险（**#5854**）、HTTP 服务重启后工具调用历史丢失导致 400 错误（**#5840**）、Ollama 本地模型输入预算错误崩溃（**#5820**）等关键 Bug。

---

## 2. 版本发布

> 过去 24 小时无新 Release 发布。当前最新稳定版为 **v0.9.11**，v0.9.12 正处于 `fix/0912-ux-20260902` 分支的集成验证期，预计近日发布。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心看点 | 热度/状态 | 链接 |
|---|-------|----------|-----------|------|
| 1 | **#5573 v0.9.12: milestone tracker** | 版本总追踪 Issue，记录 Operator 交接文档、工作分支策略、切片合并顺序，**是 0.9.12 发布的“单一事实来源”**。 | 🔥 23 评论 · OPEN | [#5573](https://github.com/Hmbown/Codewhale/issues/5573) |
| 2 | **#5316 EPIC-005: TUI Crate Decomposition** | 核心架构重构史诗：将 `crates/tui` 拆解为独立 crate，解决 18k+ 行 `lib.rs` 维护噩梦，**关乎长期可维护性**。 | 🔥 21 评论 · OPEN | [#5316](https://github.com/Hmbown/Codewhale/issues/5316) |
| 3 | **#5588 Provider neutrality: 18 DeepSeek-exclusive gates** | 全代码库审计 2281 行 `deepseek` 引用，修复 18 处本应 Provider 中立却硬编码 DeepSeek 的逻辑，**多模型生态关键里程碑**。 | ✅ 7 评论 · CLOSED | [#5588](https://github.com/Hmbown/Codewhale/issues/5588) |
| 4 | **#5586 Decompose mega files** | 直指四大“万行巨石”：`lib.rs`(18.7k)、`config.rs`(12.3k)、`client.rs`(11.1k)、`runtime_threads.rs`(9.3k) 的拆解计划。 | 6 评论 · OPEN | [#5586](https://github.com/Hmbown/Codewhale/issues/5586) |
| 5 | **#5533 Control surface for supervised operation** | 引入 per-session Unix Domain Socket (`control.sock`)，支持外部监督器发送 `message/interrupt/relaunch/status`，**CI/CD 与自动化编排刚需**。 | ✅ 5 评论 · CLOSED | [#5533](https://github.com/Hmbown/Codewhale/issues/5533) |
| 6 | **#5820 Ollama input budget collapses to 1024 tokens** | 本地 32K 上下文模型因默认 64K 输出预留导致输入预算仅剩 1K，**本地模型用户核心阻断 Bug**。 | 2 评论 · OPEN | [#5820](https://github.com/Hmbown/Codewhale/issues/5820) |
| 7 | **#5479 Fleet/agents: first-class sub-agent management in TUI** | 要求 TUI 底部引入“Agents Rail”：实时列表、状态/耗时/Token、聚焦/消息/停止/历史，**将 Fleet 能力从后台推向前台**。 | 1 评论 · OPEN | [#5479](https://github.com/Hmbown/Codewhale/issues/5479) |
| 8 | **#5637 Scope MCP secret providers to owning runtime** | 解决 MCP 凭据注入进程环境变量的安全隐患，提议运行时隔离的 Secret Provider 接口，**企业级部署安全硬指标**。 | 2 评论 · OPEN | [#5637](https://github.com/Hmbown/Codewhale/issues/5637) |
| 9 | **#5860 Continuous Self-Learning from Dialog** | 提出从对话自动提取 Skill、版本化演进、上下文感知检索的 **Agent 自进化闭环** 长期愿景。 | 1 评论 · OPEN | [#5860](https://github.com/Hmbown/Codewhale/issues/5860) |
| 10 | **#5769 Network errors sometimes cause engine stop** | 网络抖动导致引擎意外停止，附带堆栈，**稳定性 SLA 相关**，需根因分析。 | 2 评论 · OPEN | [#5769](https://github.com/Hmbown/Codewhale/issues/5769) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 | 链接 |
|---|----|------|----------|------|------|
| 1 | **#5862** | **Feature (Mega)** | **0.9.12 Fleet-only UX 集成波**：Workbar 重命名/底部默认化、Underwater 主题默认、品牌 Logo 统一、悬停交互契约、角色姿态重构、Retro 主题等 10 切片合并。 | 🟢 OPEN | [#5862](https://github.com/Hmbown/Codewhale/pull/5862) |
| 2 | **#5858** | **Refactor** | **主题系统简化**：折叠 `ocean_treatment` 入 `ThemeId::Underwater`，统一选择器、迁移只读配置、命令/引擎路由同步。 | 🟢 OPEN | [#5858](https://github.com/Hmbown/Codewhale/pull/5858) |
| 3 | **#5832** | **Fix/Chore** | **Provider 中立性落地**：补全剩余额度查询统一接口、解除 Ghost-text 协议门控、分发 NVIDIA NIM 环境变量泄露修复。 | ✅ CLOSED | [#5832](https://github.com/Hmbown/Codewhale/pull/5832) |
| 4 | **#5831** | **Feature** | **Per-session Control Socket**：落地 #5533，Unix JSON-RPC `control.sock` (0600)，支持 `message/interrupt/relaunch/status`。 | ✅ CLOSED | [#5831](https://github.com/Hmbown/Codewhale/pull/5831) |
| 5 | **#5840** | **Fix** | **HTTP 服务重启工具调用历史恢复**：持久化 tool-call identity，修复重启后 400 `missing field name`。 | ✅ CLOSED | [#5840](https://github.com/Hmbown/Codewhale/pull/5840) |
| 6 | **#5854** | **Fix (Security)** | **Lane TTL 清理安全加固**：强制验证 `worktree_path` 为受管 Git worktree 才允许 `remove_dir_all`，防误删。 | ✅ CLOSED | [#5854](https://github.com/Hmbown/Codewhale/pull/5854) |
| 7 | **#5833** | **Feature** | **FEAT-019 Memory Capability**：新增 `MEMORY` capability bit、`CommandMemoryContext` facet、TUI 适配器（search/remember/get/export/reindex/delete）。 | 🟢 OPEN | [#5833](https://github.com/Hmbown/Codewhale/pull/5833) |
| 8 | **#5855** | **Feature** | **Computer-Use Plugin Bundle**：首个独立插件包，含 screenshot/click/type over MCP，9/9 协议测试通过，macOS 实测 1920px JPEG 截图。 | 🟢 OPEN | [#5855](https://github.com/Hmbown/Codewhale/pull/5855) |
| 9 | **#5842** | **Feature** | **Plugin Marketplace API (Engine Side)**：`/v1/apps` 管理本地插件安装/更新/卸载/列表，App 侧跟进中。 | 🟢 OPEN | [#5842](https://github.com/Hmbown/Codewhale/pull/5842) |
| 10 | **#5859** | **Chore (Copy)** | **全量文案升级**：错误提示、选择器、启动页等 15 个 locale pack 值级优化，键不变、117/117 金标测试通过。 | 🟢 OPEN | [#5859](https://github.com/Hmbown/Codewhale/pull/5859) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issues | 社区呼声强度 | 备注 |
|----------|---------------|--------------|------|
| **Fleet/多 Agent 可视化与编排** | #5479, #5271, #5268, #5575 | ⭐⭐⭐⭐⭐ | 从“后台运行”转向“前台可观、可控、可干预”，Agents Rail 成核心诉求 |
| **Provider 中立与多模型生态** | #5588, #5443, #5637, #5820 | ⭐⭐⭐⭐⭐ | 清理 DeepSeek 硬编码、Ollama/本地模型适配、MCP 凭据隔离，**去厂商锁定**是主线 |
| **架构模块化与技术债偿还** | #5316, #5586, #3957, #3954, #4167 | ⭐⭐⭐⭐ | 万行文件拆解、JobManager/TaskManager 合并、Setup Wizard 拆分，**为插件化/多前端铺路** |
| **人机协作交互增强** | #5268, #5625, #4402, #5533 | ⭐⭐⭐⭐ | Mid-turn steer/queue、控制面、注意力 UX（焦点感知通知/标题栏/回顾） |
| **长期记忆与自进化** | #5860, #5833, #5269, #5829 | ⭐⭐⭐ | Memory Capability 已落地，Skill 自动提取/版本化/检索成下一阶段目标 |
| **工具链深度集成** | #3980, #3981, #3975, #3358, #3977 | ⭐⭐⭐ | AST 搜索/编辑、LSP Rename/Code Action、调试器协议、Playwright 浏览器自动化、Notebook/Archive 读取 |
| **插件生态与市场化** | #5855, #5842, #5829 | ⭐⭐⭐ | Computer-Use 插件首发，Marketplace API 就绪，**插件分发与沙箱**成新增长点 |

---

## 6. 开发者关注点与痛点

| 痛点/需求 | 具体表现 | 相关 Issue/PR | 优先级 |
|-----------|----------|---------------|--------|
| **巨型文件维护地狱** | `lib.rs` 18k+、 `config.rs` 12k+ 行，PR 冲突频发、代码导航困难 | #5586, #5316 | 🔴 Critical |
| **本地模型配置陷阱** | Ollama 32K 模型默认参数导致输入预算仅 1K，需手动调整 `output_reservation` | #5820 | 🔴 Critical |
| **多 Session/-Agent 管理割裂** | 仅能 Resume picker，无法 Peek/Approve/Message/Stop 而不丢失当前上下文 | #5271, #5479 | 🟠 High |
| **Mid-turn 交互契约不清** | Enter/Ctrl+Enter 行为模糊，缺乏“队列/立即发送/取消保留草稿”的可视化反馈 | #5268, #5625 | 🟠 High |
| **遗留标识符迁移阻力** | `DEEPSEEK_*` 环境变量/存储键混用，需分层迁移策略避免破坏现有脚本 | #5443, #5841 | 🟠 High |
| **运行时稳定性边缘案例** | 网络错误致引擎停、Lane TTL 误删、HTTP 重启历史丢失 | #5769, #5824, #5823 | 🟠 High |
| **品牌/UI 一致性缺失** | 登录页 Logo 与产品其余处不一致，主题选择器冗余 | #5861, #5858, #5862 | 🟡 Medium |
| **文档与发现性滞后** | 新功能（Memory、Skills、Control Socket、Plugins）缺乏统一入口文档 | #5833, #5829, #5842 | 🟡 Medium |

---

> **💡 分析师备注**：v0.9

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*