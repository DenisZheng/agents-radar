# AI CLI 工具社区动态日报 2026-09-06

> 生成时间: 2026-09-06 02:22 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-09-06

---

## 1. 生态全景

当前 AI CLI 赛道已从**“模型包装器”**进化为**“智能体操作系统雏形”**。头部工具（Codex、Gemini CLI、OpenCode、Pi、Codewhale）均在并行攻坚三大基建：**会话状态的原子级持久化与回滚**、**跨平台（尤其是 Windows）的原生体验闭环**、以及**多模态实时交互（语音/视频/浏览器）的工程化落地**。社区诉求显著从“生成代码”转向“可信赖的结对编程伙伴”，核心矛盾集中在**上下文工程的工程化可控性**与**企业级集成的合规/稳定性**之间。版本发布节奏呈现“夜间构建/小步快跑”常态化，但**升级即破坏**的数据迁移风险成为制约深度采用的首要隐性门槛。

---

## 2. 各工具活跃度对比

| 工具 | Issues (24h 更新/新建) | PRs (24h 合并/开放) | 版本发布 | 核心研发模式 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | **50 条** 高热度阻断性 Issue | **33 个** 全量自动化合并 (`copyberry[bot]`) | 无 | **内部主导、批次落盘**：集中交付语音基建、Windows 工具链、TUI 会话命令三大里程碑。 |
| **Gemini CLI** | **~10 条** 高优先级 P1/P2 Bug | **6 个** 关键修复型 PR (Open) | **v0.60.0-nightly** (每日构建) | **快速迭代、夜间发布**：聚焦启动稳定性、配置保真度、Hook 迁移兼容性。 |
| **OpenCode** | **50 条** 高频回归/迁移问题 | **50 个** 并行推进 (Feat/Fix/Refactor) | 无 (建议发布 1.17.16 稳定版) | **基建重构并行**：ACP v2、Timeline 会话架构、Bedrock/Astra 云原生适配、TUI 渲染管线。 |
| **Pi (Codewhale)** | **~10 条** 含 1 个 52 评论高热讨论 | **10 个** 高质量合并 (含 v0.85.1 热修复) | **v0.85.1** (紧急修复版) | **Monorepo 精细治理**：Provider 长尾适配、Windows 策略讨论、发布流程门禁补齐。 |
| **DeepSeek TUI (Codewhale)** | **10 条** 含 Founder 亲测 Dogfooding 反馈 | **10 个** 同日修复上线 | **v0.9.12** (品牌迁移大版本) | **用户视角驱动**：Windows 兼容性突击、Fleet 编排可靠性、主题/进度等纸片级体验打磨。 |
| *Claude Code / Copilot CLI / Kimi / Qwen* | *摘要生成失败* | *摘要生成失败* | *未知* | *数据缺失* |

> **注**：Codex 与 OpenCode 的 Issue/PR 绝对量显著高于其他工具，反映其社区规模与代码库复杂度领先。Gemini CLI 采用每日 Nightly 机制保持高频交付节奏。

---

## 3. 共同关注的功能方向

| 共性趋势方向 | 关注工具 | 具体社区诉求 | 成熟度现状 |
| :--- | :--- | :--- | :--- |
| **会话时光机 / 原子级回滚** | **Codex** (#11626 212👍), **OpenCode** (#35690 会话丢失), **Gemini CLI** (#29195 Checkpoint 崩溃), **Pi** (#5023 滚动跳变) | **核心痛点**：对话上下文 + 代码编辑 + 终端状态的**原子级检查点**；跨平台历史分页一致性；升级迁移不丢会话。 | 🟡 **架构重构期**：Codex 呼声最高但未交付；OpenCode 引入 Timeline 架构重构；Gemini/Pi 修复单点崩溃。 |
| **Windows 一等公民体验** | **Codex** (首启 15min、宠物交互、WSL 路径), **OpenCode** (TUI 卡死、Go 模型慢、PowerShell 兼容), **Pi** (#7547 52 评论策略讨论、#6300 重绘), **Codewhale** (#5908/5910 Computer-use 修复) | 首启性能、TUI 渲染/输入法/IME、WSL/原生路径互通、Computer-use/Computer Control 后端可靠性。 | 🔴 **严重滞后**：macOS/Linux 体验差距巨大；Codex/Codewhale 同日集中修复；Pi 仍在讨论策略未决。 |
| **实时语音/多模态交互** | **Codex** (33 PR 批次落地 WebRTC/Opus/设备/运行时), **Pi** (GPT-6 Astra 接入、SSE OOM 修复), **Gemini CLI** (Browser Agent Wayland 失败) | 实时语音对话骨架、本地音频设备管控、浏览器自动化跨平台、多模态模型原生工具调用。 | 🟢 **Codex 基建就绪**；Pi 适配新模型；Gemini/Claude 受限于浏览器沙箱。 |
| **配额/限流透明化与灵活化** | **Codex** (#42660 周配额归零、#43135 取消 5h 滚动窗), **OpenCode** (#33102 订阅不可见、#35792 计费异常) | 可视化配额仪表盘、周总量池模式替代滚动窗口、Pro/Enterprise 权益兑现、成本审计导出。 | 🔴 **黑盒痛点**：厂商侧计费逻辑不透明，CLI 端无实时反馈能力，严重阻碍企业采购决策。 |
| **云原生模型/Provider 适配深度** | **OpenCode** (Bedrock IMDS、Copilot 企业模型、Astra), **Pi** (OpenAI Responses/Gateway/Anthropic 网关缓存计费、工具截断), **Gemini CLI** (Vertex AI 权限、模型重写 Bug) | 非标准 OpenAI 兼容层支持、动态凭证发现、推理参数透传、流式解析 OOM 防护、服务端压缩兼容。 | 🟡 **长尾治理期**：OpenCode/Pi 投入 Provider 插件层抽象；Gemini 受限于自家模型生态。 |
| **Agent 编排可靠性 (Subagent/Fleet)** | **Gemini CLI** (#22323 误报成功、#21409 挂起), **OpenCode** (#35741 幻觉用户输入), **Codewhale** (#5906 Claim 泄漏、#5888 菜单简化) | 子代理终止理由准确性、主代理编排不死锁、并发写入声称生命周期管理、Fleet UI 认知负荷降低。 | 🟡 **早期工程化**：从“能跑通”向“生产级可靠”演进，引入 Claim TTL、取消钩子、分层菜单等机制。 |

---

## 4. 差异化定位分析

| 维度 | **OpenAI Codex** | **Gemini CLI** | **OpenCode** | **Pi (earendil)** | **Codewhale (DeepSeek TUI)** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **桌面级 AI 原生 IDE 替代品** | **Google 生态原生开发代理** | **可扩展、协议标准化的 Agent 平台** | **极客/研究者导向的可组合编码智能体** | **轻量、跨平台、Dogfooding 驱动的 TUI 先锋** |
| **目标用户** | 专业开发者、企业团队、追求“零配置”体验者 | Google Cloud/Vertex AI 用户、Gemini 模型深度使用者 | 插件开发者、企业定制化需求强、追求协议互操作者 | 早期采纳者、Provider 多模型混用者、键盘流极客 | 终端原住民、Windows/Linux 双平台用户、追求极致 TUI 体验者 |
| **技术路线** | **重客户端、强运行时**：Rust/TAUI、原生 WebRTC、Bazel/MSVC 工具链、自研沙箱 | **TypeScript/Node.js 原生**：依赖 Google AI SDK、Hook 机制兼容 Claude、夜间构建快速验证 | **Go 核心 + TypeScript TUI**：ACP 协议推动者、Provider 插件架构、Timeline 会话模型 | **TypeScript Monorepo**：Provider 抽象层极致化、技能/模板内联调用、离线优先设计 | **Rust TUI (ratatui/crossterm)**：Computer-use 原生后端、Fleet 多 Agent 编排、零依赖二进制分发 |
| **差异化护城河** | 语音基建先发优势、OpenAI 模型独家首发、桌面宠物/Overlay 交互创新 | Gemini 模型深度绑定、Vertex AI 企业合规、Shell 原生工具链愿景 | **ACP v2 协议标准制定者**、云厂商凭证发现标准化、会话历史可共享/可 Fork | Provider 中立性最强、技能系统可组合性最强、发布工程严谨 | Rust 原生性能、Windows Computer-use 真机验证、Founder 实测驱动迭代速度极快 |
| **主要短板** | Windows 质量债、配额黑盒、闭源核心、社区 PR 几乎全为内部 Bot | Subagent 编排不可靠、工具数限制(128/400)、Wayland 兼容性、安全架构(事后脱敏) | v1.17.x 回归频发、Windows 体验差、大上下文渲染阻塞、插件 SDK 未稳定 | Windows 策略未定、中文输入法长期未解、Monorepo 打包验证曾缺失 | 生态规模最小、ACP 协议缺失、中文输入法阻塞、品牌迁移期生态割裂 |

---

## 5. 社区热度与成熟度评估

| 梯队 | 工具 | 社区热度指标 | 成熟度阶段 | 关键判断依据 |
| :--- | :--- | :--- | :--- | :--- |
| **第一梯队：头部平台化** | **OpenAI Codex** | ⭐⭐⭐⭐⭐ (Issue 量大、高赞 200+、PR 批次工业级) | **快速规模化期** | 内部投入极大，语音/Windows/会话三大基建并行；但**社区外部贡献度极低**（PR 全为 Bot），生态开放度待验证。 |
| | **OpenCode** | ⭐⭐⭐⭐ (Issue/PR 双 50、高频回归反馈) | **架构重构阵痛期** | 并行推进 4 条核心基建线（ACP/Timeline/Cloud/TUI），**技术债偿还压力大**，急需“稳定修复版”建立信任。 |
| **第二梯队：快速迭代/垂直深耕** | **Gemini CLI** | ⭐⭐⭐⭐ (Nightly 机制、P1 Bug 响应快、Vertex 集成深) | **生产就绪冲刺期** | 修复效率高，但**核心编排 Bug (Subagent/Shell 卡死) 长期未根治**，制约“放任式”开发体验。 |
| | **Pi (earendil)** | ⭐⭐⭐ (高质量讨论、Provider 适配深、发布门禁补齐) | **精细治理成熟期** | **工程规范最高**（Monorepo、依赖管理、回归测试），Provider 中立性强，但 **Windows 战略犹豫**影响破圈。 |
| **第三梯队：特色差异化** | **Codewhale** | ⭐⭐⭐ (Founder 亲测、同日 10+ PR 修复、Rust 原生性能) | **品牌迁移/跨平台攻坚期** | **Dogfooding 文化最强**，Windows 兼容性修复速度最快，但**社区规模最小、中文输入法等基建短板长期存在**。 |

> **核心洞察**：Codex 与 OpenCode 处于“平台化”竞争轨道（协议、生态、企业级）；Gemini CLI 走“模型原生”轨道；Pi 走“Provider 聚合/极客工具”轨道；Codewhale 走“Rust TUI/终端原生”轨道。**成熟度不等于版本号**，OpenCode v1.17.x 反而因重构引入大量回归，不如 Pi v0.85.x / Codewhale v0.9.x 稳定。

---

## 6. 值得关注的趋势信号与开发者参考

### 🚀 趋势信号 1：**“会话即数据库”成为核心架构共识**
- **信号**：Codex `/rewind`、OpenCode `Timeline`、Gemini `Checkpoint`、Pi `Compact/Navigate` 均在重构会话存储为**可查

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-06）

---

## 1. 热门 Skills 排行（Top 8 高关注度 PR）

| # | Skill | 功能定位 | 社区讨论热点 | 状态 |
|---|-------|----------|--------------|------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评估链路修复** | 修复 `run_eval.py` 在 Windows 上流读取失败、触发检测失效、并行 worker 异常，导致召回率恒为 0% 的核心缺陷 | **基建阻断级**：直接影响技能描述优化循环可用性，10+ 独立复现，关联 Issue #556、#1099 | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | AI 生成文档的排版质量控制：孤行/寡行防治、标题分页保护、编号对齐修正 | **长尾高频需求**：“用户极少主动要求排版好，但每份文档都需要” | OPEN |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind 多智能体编排** | 让 Claude Code 将机械任务委托给免费模型驱动的 headless opencode worker，自身仅作规划/审查/合并 | **成本优化新范式**：“昂贵模型的上下文是稀缺资源，而非智力” | OPEN |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 全栈测试模式库：Testing Trophy、AAA 模式、React Testing Library、契约测试、E2E、性能/混沌/可访问性 | **工程化标准化**覆盖单元→集成→E2E 全链路，填补官方技能在测试领域的空白 | OPEN |
| [#568](https://github.com/anthropics/skills/pull/568) | **servicenow 平台技能** | 覆盖 ITSM/ITOM/ITAM/SecOps/FSM/HRSD/SPM/IntegrationHub 等全模块的 ServiceNow 平台级助手 | **企业级平台深度集成**需求，维护周期长（3 月至 8 月持续更新） | OPEN |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit 质量闸** | 机械性文件存在性验证 + 四维推理审计（损害严重度优先），通用于任意技术栈/模型 | **交付前质量门禁**化，从“事后复盘”转向“交付前拦截” | OPEN |
| [#1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api Agent Skill** | 面向任意 AI Agent（Claude/Cursor/Codex/OpenClaw/Hermes/n8n）的 Buffer GraphQL 调度技能 | **跨 Agent 互操作**探索，技能不再绑定单一客户端 | OPEN |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT/OpenDocument 技能** | .odt/.ods 创建、模板填充、解析转 HTML，支持 ISO 标准开放文档格式 | **厂商中立文档格式**刚需，配合 #514、#538、#541 形成文档处理全家桶 | OPEN |

> **注**：PR 评论数在数据中显示为 `undefined`，以上排序依据仓库原始“按评论数排序”顺序及 Issue 关联热度综合判断。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 社区技能以 `anthropic/` 命名空间分发，冒充官方技能，诱导用户授予高权限 | **43 评论 / 2 👍** 全仓最高讨论量 |
| **组织级技能分发与去重** | [#228](https://github.com/anthropics/skills/issues/228)、[#189](https://github.com/anthropics/skills/issues/189) | 支持组织内共享技能库、直链安装；解决 `document-skills` 与 `example-skills` 内容重复导致上下文污染 | **16/6 评论，8/9 👍** 强刚需 |
| **评估与测试基建完善** | [#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390) | `run_eval.py`/`run_loop.py` 在 Windows/真实 MCP Server 上完全失效，技能优化循环跑不通 | **12/4 评论，7 👍** 阻塞技能迭代 |
| **上下文窗口压缩与多智能体协作** | [#1487](https://github.com/anthropics/skills/issues/1487)、[#1329](https://github.com/anthropics/skills/issues/1329)、[#16](https://github.com/anthropics/skills/issues/16) | 单技能注入 156k tokens 耗尽上下文；需符号化压缩记忆；将技能暴露为 MCP 实现标准化互调 | **新兴架构级需求** |
| **技能创建体验（DX）提升** | [#202](https://github.com/anthropics/skills/issues/202)（已关闭）、[#1050](https://github.com/anthropics/skills/pull/1050) | `skill-creator` 文档化过重、指令不具执行力；Windows 兼容性缺失 | **工具链成熟度诉求** |
| **跨平台/云厂商支持** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 环境下技能可用性 | **企业落地拦截项** |

---

## 3. 高潜力待合并 Skills（评论活跃、接近落地）

| PR | Skill | 合并信号 | 预估落地窗口 |
|----|-------|----------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评估链路全链路修复 | 关联 3 个 Issue、10+ 复现、修复 Windows/并行/触发检测全栈问题 | **极高** — 基建阻断，优先级最高 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | 评估序列化/基准指标/编码/脚本稳定性批量修复 | 覆盖 mcp-builder、skill-creator、benchmark 多组件，配套 Issue #1390 | **高** — 配合 #1298 完善评估体系 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 需求普遍、实现完整、无架构争议，配合 #538/#541 形成文档链 | **高** — 通用高频能力 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 覆盖面广、社区呼声高、填补官方空白 | **高** — 标准化工程实践输出 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多智能体编排 | 架构创新、成本优化叙事强、近期新增（8 月）讨论活跃 | **中高** — 可能需架构评审 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 质量闸 | 通用性强、v1.3.0 版本迭代充分、解决“交付幻觉”痛点 | **中高** — 质量工程刚需 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT 技能 | 与 #514/#538/#541 形成文档处理闭环，实现相对独立 | **中** — 等待文档技能族整体审核 |

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区在 Skills 层面最集中的诉求是：将 Skills 从“零散脚本集合”进化为“可信、可评估、可组合、可分发的标准化智能体能力单元” —— 核心矛盾集中在评估基建失效阻断迭代、命名空间信任缺失阻碍分发、上下文爆炸限制组合、跨平台/组织分发链路缺失四大基建短板上。**

---

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-09-06

---

## 1. 今日速览

- **无新版本发布**，但代码库涌入 **33 个 PR**（均为 `copyberry[bot]` 自动化合并），集中于 **原生语音/音频基础设施**、**Windows MSVC 工具链** 与 **TUI 会话命令** 三大方向，预示桌面端即将推出实时语音交互能力。  
- **社区热点聚焦于三类阻断性问题**：Windows 桌面端首启 15 分钟卡顿、5 小时滚动配额异常扣减、会话历史分页/回溯在多平台失效。  
- **Issue 总量 50 条**，高赞增强需求 `#11626 /rewind 检查点回溯` 持续领跑（212 👍），开发者对“会话状态 + 代码编辑”原子级回滚呼声极高。

---

## 2. 版本发布

> 过去 24 小时无 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 核心痛点 | 社区热度 | 关键链接 |
|---|-------|------|----------|----------|----------|
| 1 | **#11626** `/rewind` 检查点回溯 | 🟢 Enhancement / TUI | 期望一键同时恢复**对话上下文 + Codex 已应用代码编辑**；现状仅回滚对话 | 212 👍 · 41 评论 | [#11626](https://github.com/openai/codex/issues/11626) |
| 2 | **#35746** 分页历史丢弃有效扁平化 rollout 记录 | 🔴 Bug / CLI / Session | 分页解码 `RolloutLine` 不一致，导致历史回显缺失 | 3 👍 · 39 评论 | [#35746](https://github.com/openai/codex/issues/35746) |
| 3 | **#41079** [Windows Desktop] 线程历史在重复 ordinal 处卡顿 | 🔴 Bug / Windows / App | 本地投影卡在旧快照，但 JSONL 完整；非数据丢失 | 2 👍 · 28 评论 | [#41079](https://github.com/openai/codex/issues/41079) |
| 4 | **#34227** Windows 宠物叠加层命中区域随时间脱离可见吉祥物 | 🔴 Bug / Windows / Pets | 交互区域与渲染位置渐行渐远，影响桌面宠物交互 | 3 👍 · 27 评论 | [#34227](https://github.com/openai/codex/issues/34227) |
| 5 | **#32297** 内置图像生成在 7/9 更新后持续网络报错 | 🔴 Bug / App / Connectivity | 桌面端图像生成彻底不可用，阻断多模态工作流 | 9 👍 · 26 评论 | [#32297](https://github.com/openai/codex/issues/32297) |
| 6 | **#29639** Windows Desktop + WSL：Browser Use / Node REPL 因 `sandboxCwd` 未映射失败 | 🔴 Bug / Windows / MCP | Windows 侧 `node_repl.exe` 与 WSL 路径不通，MCP 工具调用断链 | 7 👍 · 20 评论 | [#29639](https://github.com/openai/codex/issues/29639) |
| 7 | **#41790** ChatGPT Pro 反复 “Selected model is at capacity” 打断任务 | 🔴 Bug / Rate-limits / App | 8/31 起高频触发，即使非高峰期；疑似配额计算/路由异常 | 9 👍 · 15 评论 | [#41790](https://github.com/openai/codex/issues/41790) |
| 8 | **#34309** [Windows] 宠物无法拖拽（含默认宠物） | 🔴 Bug / Windows / Pets | 26.715.4045 回归，重启/切换宠物均无效 | 10 👍 · 13 评论 | [#34309](https://github.com/openai/codex/issues/34309) |
| 9 | **#41170** [Windows] 首次启动 ~15 分钟无窗口（解压 `cua_node` 运行时） | 🔴 Bug / Windows / Performance | 冷启动极慢，用户误以为启动失败 | 1 👍 · 10 评论 | [#41170](https://github.com/openai/codex/issues/41170) |
| 10 | **#42660** 周度配额重置/对账失效——无本地活动却显示耗尽 | 🔴 Bug / Rate-limits / CLI | Plus 用户周配额莫名归零，阻碍升级 Pro 决策 | 0 👍 · 6 评论 | [#42660](https://github.com/openai/codex/issues/42660) |

> **值得关注的新增 Issue（今日创建）**  
> - `#43135` 允许连续消耗周配额、取消 5 小时滚动上限（3 👍）  
> - `#43131` Astra Light 在授权漏洞分类任务中连续 5 次触发 `cyber_policy` 拦截  
> - `#43129` macOS 最新优先线程查找返回两天前进行中轮次，而更新消息已持久化  

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响范围 |
|---|----|------|----------|----------|
| 1 | **#43144** Add Windows MSVC Bazel targets for native voice libraries | ✅ Merged | 新增 x64/ARM64 原生语音库的 MSVC Bazel 目标，含编译器/SDK/链接器声明 | Windows 原生语音构建解锁 |
| 2 | **#43126** Expose native Windows build tools through Bazel targets | ✅ Merged | 修补 `windows_support` 保留 MSVC 工具链二进制，供 Bazel 直接调用 | 解决工具链消失导致的构建失败 |
| 3 | **#43120** Add managed worktree creation to TUI session commands | ✅ Merged | 新增 `/worktree` 启动新会话或 fork 当前会话至托管 worktree；`/new` `/fork` 支持选择 | TUI 多任务并行能力增强 |
| 4 | **#43114** Add Bazel preparation for native voice runtimes | ✅ Merged | 新增 `//third_party/voice:native_runtime` 手动目标，完成 macOS/Linux 运行时校验与导出 | 语音运行时分发标准化 |
| 5 | **#43113** Save subagent and memory opt-ins through the app server | ✅ Merged | 将 TUI 的子代理/记忆启用提示写入服务端配置，新线程生效 | 云端配置持久化，跨设备同步 |
| 6 | **#43110** Record reasoning effort changes in conversation history behind a flag | ✅ Merged | 新增 `reasoning_effort_override` 功能标记，记录推理力度变更到历史 | 便于审计与复现模型行为 |
| 7 | **#43100** Add bounded incoming Opus RTP handling to the voice host | ✅ Merged | 限制入站 Opus RTP：64 包/2 MiB 总量、64 KiB 单包，保留到达时间戳 | 实时音频流背压与内存保护 |
| 8 | **#43097** Add a helper-backed realtime WebRTC session API | ✅ Merged | 新增 `RealtimeWebrtcSession`：启动、应答协商、音频控制、电平计、错误上报 | 桌面端实时语音对话核心骨架 |
| 9 | **#43090** Send processed microphone audio over RTP in voice-host | ✅ Merged | 捕获音频经重采样后经 RTP 发送，保留静音边界、限制陈旧音频 | 端到端语音输入链路打通 |
| 10 | **#43079** Add opt-in local audio devices to the voice helper | ✅ Merged | 新增 `openDevices`/`setAudioControls`，默认麦克风/扬声器启动时静音 | 用户可控的本地音频设备接入 |

> **模式识别**：33 个 PR 全部来自 `copyberry[bot]` 且当日关闭，属于**内部自动化落盘批次**，集中交付 **语音基建（WebRTC/Opus/运行时/设备）** 与 **Windows 原生工具链** 两大里程碑，非社区外部贡献。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **会话时光机 / 原子级回滚** | #11626 (212 👍), #35746, #41079, #43124, #43129 | ⭐⭐⭐⭐⭐ | 跨平台历史分页、检查点、投影一致性均失效，开发者迫切需要“可信的时光旅行” |
| **配额/限流透明化与灵活化** | #41790, #41520, #42660, #42912, #43135 | ⭐⭐⭐⭐ | 5 小时滚动窗口、周配额重置、Pro 仍受限、空转扣费——计费/配额模型不透明成最大阻力 |
| **Windows 桌面端原生体验补齐** | #41170, #34227, #34309, #29079, #29639 | ⭐⭐⭐⭐ | 首启解压慢、宠物交互坏、MCP/WSL 路径不通、僵尸进程泄漏——Windows 质量落后 macOS/Linux 明显 |
| **实时语音/多模态交互** | PR 批次：#43144, #43114, #43097, #43090, #43079 | ⭐⭐⭐ | 官方正在高强度落地 WebRTC + Opus + 本地音频设备，Issue 端尚未大量反馈（功能未公开） |
| **远程/移动端协同稳定性** | #28340, #31110, #40167, #43017 | ⭐⭐⭐ | iOS/Android 远程控制、线程列表不全、Cloudflare 挑战、Android 线程重复 ID |
| **MCP/OAuth/沙箱权限成熟度** | #20503, #16759, #29639 | ⭐⭐ | 动态客户端注册缺 scopes、Full Access 仍弹窗、WSL 路径映射缺失 |

---

## 6. 开发者关注点总结

1. **“给我一个真正能用的 Undo 键”** —— `#11626` 高赞说明：开发者把 Codex 当作**结对编程伙伴**，而非一次性生成器；需要**对话 + 代码编辑**双维度原子回滚，且可在 TUI 交互式选择检查点。  
2. **配额焦虑阻碍深度采用** —— Plus/Pro 用户均遭遇“莫名耗尽”、“静默扣费”、“5 小时硬上限”三重痛点；强烈要求**配额池模式**（周总量可连续消耗）与**实时可视化仪表盘**。  
3. **Windows 一等公民待遇缺失** —— 首启 15 分钟、宠物/叠加层交互失效、WSL 路径不通、僵尸进程占内存，导致 Windows 开发者**信任度显著低于 macOS/Linux**。  
4. **历史/会话投影一致性是基建底线** —— 分页丢记录、ordinal 重复卡顿、最新优先查找返回旧轮次、桌面 UI 与 JSONL 不一致，属于**数据完整性 Bug**，优先级应高于新功能。  
5. **语音基建已就绪，期待上层 UX** —— PR 批次显示 WebRTC/Opus/设备/运行时全链路已落盘；社区下一波需求将转向：**唤醒词、推流延迟、多语言 ASR、隐私模式**。  
6. **MCP 生态互操作仍有断点** —— OAuth 动态注册缺 scopes、WSL `sandboxCwd` 未映射、Node REPL 跨平台调用失败，阻碍**企业级 MCP 服务器接入**。  

---

## 📎 快速跳转

- **最高赞增强需求**：[#11626 /rewind 检查点回溯](https://github.com/openai/codex/issues/11626)  
- **最棘手配额 Bug**：[#42660 周配

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-09-06

---

## 1. 今日速览
今日发布 **v0.60.0-nightly** 版本，核心修复集中在**启动稳定性**（Git 仓库认证崩溃）、**配置保真度**（模型固定被静默重写）、**会话恢复**（Checkpoint 解析崩溃）及 **Hook 迁移兼容性**。社区高频讨论聚焦于 **Subagent 可靠性**（误报成功、挂起、技能调用不足）、**Shell 执行卡死** 及 **Browser Agent 跨平台兼容**，反映出开发者对 Agent 编排稳定性与工具链原生体验的强烈诉求。

---

## 2. 版本发布
### `v0.60.0-nightly.20260906.g85aca163f` ([Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260905.g85aca163f...v0.60.0-nightly.20260906.g85aca163f))
*   **自动化夜ly 构建**，包含过去 24 小时合并的修复：
    *   修复 Git 仓库中启动认证崩溃 (#29163)
    *   修复 `--model gemini-2.5-flash` 被错误重写为 3.5 版本 (#29217, #29222)
    *   修复 Checkpoint 非数组 history 导致 `/resume` 崩溃 (#29195)
    *   修复 Hook 迁移中超时单位（秒/毫秒）不匹配及 `SubagentStop` 事件键名错误 (#29125, #29124)
    *   终端滚动缓冲区保留修复 (#28967)、技能目录去重 (#28968)、A2A Server JSON 解析修复 (#29126)

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 优先级/标签 | 核心痛点 | 社区热度 | 关注理由 |
|---|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达 MAX_TURNS 却上报 GOAL 成功 | **P1, Bug** | 子代理因轮次耗尽中断，却向主代理汇报“目标完成”，导致编排逻辑失效 | 💬13 👍2 | **编排可靠性基石**：错误的终止理由会误导主 Agent 判断任务已完成，引发级联失败。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 频繁挂起（含简单建目录） | **P1, Bug** | 只要委托给 Generalist Agent 即卡死，禁用子代理可规避 | 💬8 👍8 | **核心可用性阻塞**：高赞反馈，直接影响“放任式”开发体验，疑似工具调用死循环。 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行完仍显示 "Waiting input" 卡死 | **P1, Bug** | 简单命令执行完成后，CLI 仍阻塞等待输入，需手动取消 | 💬4 👍3 | **交互层核心缺陷**：高频触发，严重破坏开发流，疑似 PTY/进程状态同步问题。 |
| 4 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 利用模型 Bash 亲和性：零依赖 OS 沙箱与意图路由 | **P2, Enhancement** | 提议引入原生 POSIX 工具链沙箱，释放 Gemini 3 原生 Bash 能力 | 💬9 👍1 | **架构演进方向**：从“工具调用”转向“原生 Shell 用户”，关乎长期竞争力与 Token 效率。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 主动调用 Skills/Subagents 极少 | **P2, Bug** | 即使任务高度相关，模型也不自动触发技能/子代理，需显式指令 | 💬6 | **能力发现机制失效**：提示词/注册机制可能未有效暴露能力边界，导致高级特性沉睡。 |
| 6 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser Subagent 在 Wayland 下失败 | **P1, Bug** | Wayland 环境下浏览器代理启动即报错 `GOAL` 终止 | 💬4 👍1 | **Linux 桌面兼容性**：Wayland 成主流，阻断 Linux 用户使用浏览器自动化能力。 |
| 7 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 红机制：机密已入上下文后才脱敏 | **P2, Security** | 提取器将对话发给模型*后*再由模型脱敏，机密已落入模型上下文/日志 | 💬5 | **安全合规隐患**：架构层面的“事后脱敏”违反最小权限原则，需在入口处确定性脱敏。 |
| 8 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128/400 时遇 400 报错 | **P2, Bug** | 工具注册过多导致请求体超限，期望 Agent 自动裁剪工具集 | 💬3 | **规模化瓶颈**：随着 Skills/Extensions 增长，静态全量注册模式不可持续。 |
| 9 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 `settings.json` 覆盖（如 maxTurns） | **P2, Bug** | 全局/项目配置对 Browser Agent 不生效，`AgentRegistry` 合并逻辑缺失 | 💬3 | **配置一致性**：子代理配置隔离破坏了“配置即代码”的预期，运维成本激增。 |
| 10 | [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) 创建 Vite 应用卡在交互式提示符 | **P2, Bug** | 模型未自动处理 `npm create vite@latest` 的交互式选项，导致流程卡死 | 💬2 | **真实场景断点**：脚手架交互是高频起手式，需行为评测与 Prompt 对齐修复。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|---|---|---|---|
| 1 | [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) `fix(cli): prevent crash during authentication in git repositories` | **Open (P1)** | 启动时 `useGitBranchName` Hook 在 macOS Seatbelt/受限权限下读 `.git` 导致崩溃，改为优雅降级 | **启动稳定性**、**macOS/企业环境** |
| 2 | [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) / [#29222](https://github.com/google-gemini/gemini-cli/pull/29222) `fix(config): don't rewrite explicit gemini-2.5-flash model selection` | **Open (P1/P2)** | `isFlashModel()` 宽匹配 `endsWith('flash')` 导致显式指定 2.5-flash 被静默升级为 3.5-flash，引发无权限报错 | **模型选择保真度**、**Vertex AI 兼容** |
| 3 | [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) `fix(checkpoint): degrade non-array history instead of crashing resume` | **Open (P2)** | `loadCheckpoint` 对非数组 `history` 做形状校验，降级为空检查点而非抛 `TypeError` | **会话恢复鲁棒性** |
| 4 | [#29125](https://github.com/google-gemini/gemini-cli/pull/29125) `fix(cli): convert hook timeout from seconds to milliseconds in hooks migration` | **Open (P2)** | Claude Code Hook 超时单位为**秒**，迁移脚本未转换导致 Gemini 侧超时提前 1000 倍触发 | **Claude 迁移兼容性**、**Hook 可靠性** |
| 5 | [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) `fix(cli): correct SubagentStop event key in hooks migration` | **Open (P2)** | 事件键 `SubagentStop` (小写 a) 与映射表 `SubAgentStop` 不匹配，导致迁移静默丢失该 Hook | **Hook 迁移完整性** |
| 6 | [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) `fix(cli): prevent clearing terminal scrollback

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-09-06

---

## 1. 今日速览

今日社区以 **问题修复与基础设施完善** 为主：50 个 Issue 与 50 个 PR 均在过去 24 小时内有更新，但无新版本发布。核心关注点集中在 **会话迁移/持久化、TUI 性能、Bedrock/Astra 等云厂商凭证发现、ACP v2 协议适配** 以及 **Windows 兼容性**。多个高热度 Issue 反映 v1.17.x 升级后的会话丢失、资源占用高、大文件渲染卡顿等回归问题，已被标记关闭（可能随补丁修复）。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 热度/反响 | 重要性 |
|---|-------|----------|-----------|--------|
| 1 | [#35009](https://github.com/anomalyco/opencode/issues/35009) | **v1.17.11→1.17.13 资源占用飙升**：RSS ~1GB、虚拟内存 75GB、CPU 22% | 10 条评论、👍 2 | 🔴 **严重回归**，影响生产环境稳定性 |
| 2 | [#34030](https://github.com/anomalyco/opencode/issues/34030) | **Copilot Enterprise 第三方模型不可用**：无法读取企业添加的非官方模型 | 9 条评论、👍 2 | 🟠 企业级集成阻断 |
| 3 | [#15315](https://github.com/anomalyco/opencode/issues/15315) | **Copilot Gemini 模型结构化工具调用失败**：输出文本而非 `tool_calls` | 8 条评论、👍 1 | 🟠 核心模型兼容性缺陷 |
| 4 | [#25430](https://github.com/anomalyco/opencode/issues/25430) | **`format.json_schema.retryCount` 未生效**：结构化输出失败不重试 | 7 条评论 | 🟡 API 契约未兑现 |
| 5 | [#28695](https://github.com/anomalyco/opencode/issues/28695) | **会话生命周期钩子**：插件持久化状态需 `SessionStart/End` 等上下文 | 6 条评论、👍 2 | 🟢 插件生态关键基建 |
| 6 | [#35690](https://github.com/anomalyco/opencode/issues/35690) | **升级至 1.17.14 后会话历史消失** | 6 条评论 | 🔴 数据迁移缺陷，用户感知极强 |
| 7 | [#33102](https://github.com/anomalyco/opencode/issues/33102) | **OpenCode Go 订阅在仪表板不可见/不可管理** | 6 条评论、👍 1 | 🟠 计费与账号体系脱节 |
| 8 | [#31916](https://github.com/anomalyco/opencode/issues/31916) | **TUI 大文件写入卡死 "Preparing to write..."** (150+ 行) | 5 条评论、👍 1 | 🔴 Windows TUI 可用性阻断 |
| 9 | [#35741](https://github.com/anomalyco/opencode/issues/35741) | **WebChat LLM 幻觉用户回复**：自问自答并继续执行 | 5 条评论、👍 1 | 🟠 Agent 交互逻辑缺陷 |
| 10 | [#35611](https://github.com/anomalyco/opencode/issues/35611) | **Windows 上 Go 模型推理极慢/卡死**（仅存量会话，新会话正常） | 4 条评论 | 🔴 平台专项性能回归 |

> **共性**：v1.17.x 系列引入的 **会话存储 schema 变更**、**大文件 diff 渲染**、**Windows 路径/编码处理** 为三大高频痛点来源。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#44524](https://github.com/anomalyco/opencode/pull/44524) | ✨ **Feat** | **ACP v2 草案支持**：实现 Agent Client Protocol v2 迁移指南功能 | #44877 |
| 2 | [#47293](https://github.com/anomalyco/opencode/pull/47293) | ✨ **Feat** | **Console Web Search 集成**：从 Console v2 配置加载托管搜索描述符，凭证代理与重定向校验 | — |
| 3 | [#47555](https://github.com/anomalyco/opencode/pull/47555) | 🐛 **Fix** | **`--continue` 占位 session ID 导致 400**：`OPENCODE_FAST_BOOT=1` 下路由挂载竞态 | #47556 |
| 4 | [#47554](https://github.com/anomalyco/opencode/pull/47554) | 🐛 **Fix** | **技能资源读取权限**：修复外部目录（如 `~/.opencode/skill` symlink）触发无关审批 | — |
| 5 | [#47552](https://github.com/anomalyco/opencode/pull/47552) | ♻️ **Refactor** | **Timeline 会话历史共享**：Fork 冻结前缀、Undo 选新时间线、读取用不变快照 | — |
| 6 | [#47536](https://github.com/anomalyco/opencode/pull/47536) | ✨ **Feat** | **Astra 异步工具与实时导向**：v2 session runner 支持 Responses async calls + 纯文本 steering | #47550 |
| 7 | [#47549](https://github.com/anomalyco/opencode/pull/47549) | ✨ **Feat** | **TUI 动画帧回调 + FPS 配置**：替换独立 16ms 间隔，暴露 `targetFps`/`maxFps` | — |
| 8 | [#47548](https://github.com/anomalyco/opencode/pull/47548) | ✨ **Feat** | **Bedrock 凭证链发现（Provider 插件层）**：接续 #47436，修复 AI SDK 替换导致钩子失效 | #47436 |
| 9 | [#47527](https://github.com/anomalyco/opencode/pull/47527) | ⚡ **Perf** | **使用统计加速**：避免读取大量消息 JSON，异步聚合，20s→亚秒级 | — |
| 10 | [#46912](https://github.com/anomalyco/opencode/pull/46912) | 🐛 **Fix** | **Stdout 刷新再退出**：修复 `export`/`session list --format json` 管道截断 | #29330 |

> **趋势**：核心团队在 **协议标准化 (ACP v2)**、**云原生凭证发现 (Bedrock/Astra)**、**会话历史架构重构** 与 **TUI 渲染管线现代化** 四条线并行推进。

---

## 5. 功能需求趋势（从 Issue 提炼）

| 方向 | 代表 Issue | 社区呼声 | 备注 |
|------|------------|----------|------|
| **会话/数据迁移与持久化** | #35690, #35750, #29071, #35703 | 🔥 极高 | 升级丢会话、Desktop/CLI 目录不统一、路径列未回填 |
| **大文件/大上下文渲染性能** | #31916, #32046, #30340 | 🔥 高 | TUI/Renderer 冻结、diff 计算阻塞主线程、summary 阶段工具调用受限 |
| **云厂商模型原生支持** | #34030, #35798, #34676, #15315 | 🔥 高 | Copilot 企业模型、Bedrock IMDS、DeepSeek DSML、Gemini tool calling |
| **插件/扩展生态完善** | #28695, #35742, #35728 | 🟡 中高 | 生命周期钩子、插件更新缓存、background 消息注入 |
| **Windows 原生体验** | #31916, #35717, #35718, #35611 | 🟡 中高 | PowerShell 5.1 兼容、磁盘狂读、Go 模型卡顿、编码/执行策略 |
| **Agent 交互可靠性** | #35741, #35784, #35667 | 🟡 中 | 幻觉用户输入、读文件循环、cc-switch 模型解析失败 |
| **成本/计费透明化** | #33102, #35792 | 🟢 中 | 订阅不可见、Minimax 计费异常 |
| **UI/UX 增强** | #35751, #45590, #47549 | 🟢 中 | 侧边栏浏览器预览、消息时间戳显示日期、TUI 动画帧率可配 |

---

## 6. 开发者关注点总结

| 痛点/需求 | 高频表现 | 建议关注优先级 |
|-----------|----------|----------------|
| **升级即破坏** | 会话丢失、路径列未迁移、资源占用暴涨、Go 模型卡死 | 🔴 **P0**：发布前需强制回归测试迁移脚本与资源基线 |
| **Windows 二等公民** | TUI 卡死、PowerShell 兼容、磁盘 IO 异常、Go 模型仅存量会话慢 | 🔴 **P0**：CI 增加 Windows 真机矩阵；TUI 渲染管线异步化 |
| **企业级集成缺口** | Copilot 第三方模型、Bedrock IMDS、自定义 OpenAI 兼容层 reasoning/tool calling | 🟠 **P1**：Provider 抽象层统一凭证发现与能力协商 |
| **大上下文工程化** | 260k context 触发 summary 阻塞、diff 计算冻结、工具调用被拒 | 🟠 **P1**：流式 diff、增量 summary、工具调用与 summary 并行 |
| **插件/技能生态基建** | 生命周期钩子缺失、外部目录权限误判、缓存不更新、消息注入无 API | 🟡 **P2**：推进 #28695 与 #35728，定稿 Plugin SDK v2 |
| **可观测性与调试** | 统计接口 20s、费用异常无审计、幻觉无追踪 | 🟡 **P2**：结构化日志 + OpenTelemetry 埋点 + 会话审计导出 |

---

## 📌 一句话建议

> **稳定压倒新特性**：v1.17.x 连续引入迁移/性能/Windows 回归，建议发布 **1.17.16 “稳定修复版”** 专项解决 Top 5 痛点，随后再推进 ACP v2 / Timeline / Astra 等架构重构。

---

*数据来源：`anomalyco/opencode` GitHub Issues & PRs（2026-09-06 最近 24h 更新）*  
*报告生成：OpenCode 技术分析师 · 2026-09-06*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-09-06

---

## 1. 今日速览
- **v0.85.1 紧急发布**：修复 v0.85.0 遗漏 `@earendil-works/pi-server` 依赖导致的安装失败问题，并正式支持 **GPT-6 Astra**（通过 OpenAI API Key 与 Codex 订阅可用）。
- **Windows 生态成核心痛点**：社区高票 Issue #7547（52 条评论）深度讨论 Windows 运行策略，TUI 输入重绘、全屏渲染、IME 兼容等历史遗留问题集中爆发。
- **Provider 适配进入“长尾治理期”**：OpenAI Responses / Vercel Gateway / Anthropic 网关的缓存计费、工具截断、流式解析 OOM、服务端压缩等生产级细节问题密集涌现并快速闭环。

---

## 2. 版本发布
### **v0.85.1** 
- **核心修复**：补齐 `dist/cli.js` 对 `@earendil-works/pi-server` 与 `@earendil-works/pi-client` 的运行时依赖声明，解决 `npm install -g` 后子进程无法启动的阻塞性问题（#9132, #9170, #9218）。
- **新模型支持**：**GPT-6 Astra** 正式上线，支持通过 OpenAI API Key 与 OpenAI Codex 订阅调用，文档见 [Providers](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys)。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 热度 | 关键点 | 链接 |
|---|------|------|------|--------|------|
| **#7547** | **[Windows] 如何在 Windows 使用 Pi？策略讨论** | OPEN | 💬52 👍2 | **社区最高热度**。讨论原生 / WSL / Git Bash / PowerShell 多形态支持优先级，核心团队需在“开箱即用”与“维护成本”间做取舍。 | [#7547](https://github.com/earendil-works/pi/issues/7547) |
| **#5023** | **Terminal 随机跳转至会话开头** | CLOSED | 💬19 👍3 | 长期困扰用户的 TUI 滚动跳变 Bug，已修复并回归测试。 | [#5023](https://github.com/earendil-works/pi/issues/5023) |
| **#8896** | **`/export HTML` 静默丢弃 `display:false` 自定义消息** | OPEN | 💬8 | 导出格式与 TUI 显示标记耦合，破坏会话完整性，需区分“导出可见性”与“渲染可见性”。 | [#8896](https://github.com/earendil-works/pi/issues/8896) |
| **#6300** | **Windows TUI：每次按键输入行重绘（字符逐行显示）** | OPEN | 💬8 | 典型 Windows 终端兼容性问题，影响 cmd / Windows Terminal，阻碍 Windows 原生体验。 | [#6300](https://github.com/earendil-works/pi/issues/6300) |
| **#8684** | **`PI_OFFLINE` 未文档化地禁用所有 Provider 模型发现** | OPEN | 💬5 | 文档称仅禁用启动期网络检查，实则全会话屏蔽模型目录拉取，违反最小惊讶原则。 | [#8684](https://github.com/earendil-works/pi/issues/8684) |
| **#9132** | **v0.85.0 发布包缺失 `pi-server` 依赖导致 CLI 崩溃** | CLOSED | 💬5 👍5 | **发布流程缺陷**，触发连锁修复 PR（#9170, #9172, #9218），暴露 monorepo 打包验证缺口。 | [#9132](https://github.com/earendil-works/pi/issues/9132) |
| **#9209** | **GitHub Copilot GPT-6 Astra 被路由到不支持的 Chat Completions 端点** | CLOSED | 💬3 | 新模型适配首日即发现路由逻辑硬编码问题，修复需同步更新 Provider 目录与路由表。 | [#9209](https://github.com/earendil-works/pi/issues/9209) |
| **#9212** | **Sonnet-5 via Gateway：13% edit 工具调用被截断为 `edits:[{}]`** | CLOSED | 💬3 | 网关层流式解析边界条件失效，导致工具参数不完整，需加强 Schema 验证与重试机制。 | [#9212](https://github.com/earendil-works/pi/issues/9212) |
| **#9036** | **openai-codex SSE 解析器全量缓冲响应导致堆 OOM** | CLOSED | 💬2 | 流式解析未分块处理，大上下文直接撑爆 V8 堆，已改为增量解析。 | [#9036](https://github.com/earendil-works/pi/issues/9036) |
| **#8457** | **技能/模板支持中句调用（如 `/skill args` 不在行首）** | CLOSED | 💬3 👍4 | **高频 UX 需求**，PR #9214 已合并，统一 Prompt Template 与 Skill 的内联展开语义。 | [#8457](https://github.com/earendil-works/pi/issues/8457) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 核心变更 | 链接 |
|---|------|------|------|----------|------|
| **#9214** | **技能与 Prompt Template 支持中句调用** | MERGED | Feat | 解决 #8457，统一内联展开逻辑，`disable-model-invocation: true` 技能亦可内联。 | [#9214](https://github.com/earendil-works/pi/pull/9214) |
| **#9170** | **声明 `pi-server` 运行时依赖（修复 v0.85.0 发布包损坏）** | MERGED | Fix | 将 `@earendil-works/pi-server` 从 `devDependencies` 迁至 `dependencies`，配合 #9172 防回归。 | [#9170](https://github.com/earendil-works/pi/pull/9170) |
| **#9163** | **简化 TUI 剪贴板处理（移除 Rust 依赖）** | MERGED | Refactor | 替换重型 `copypasta` 为纯 JS 实现，消除 NixOS 等平台原生构建阻碍。 | [#9163](https://github.com/earendil-works/pi/pull/9163) |
| **#7970** | **全屏模式转录区滚动指示器（`↓` 箭头）** | MERGED | Feat | 实现 #7908，状态栏显示“未跟随底部”提示，回底自动清除。 | [#7970](https://github.com/earendil-works/pi/pull/7970) |
| **#9215** | **允许零行自定义 Footer（修复全屏模式空行占位）** | MERGED | Fix | `minSize: 1 → 0`，自定义 Footer 返回 `[]` 时不再占用终端行。 | [#9215](https://github.com/earendil-works/pi/pull/9215) |
| **#9166** | **Alt + 滚轮加速滚动（5x）** | MERGED | Feat | 闭环 #9052，微交互体验优化，零配置生效。 | [#9166](https://github.com/earendil-works/pi/pull/9166) |
| **#9182** | **跳过已失效 Extension Runner 的会话事件** | MERGED | Fix | 修复 `/new` 与 Ctrl+C 竞态导致的扩展运行时二次销毁 Promise 泄漏。 | [#9182](https://github.com/earendil-works/pi/pull/9182) |
| **#9179** | **压缩期间拒绝树导航（防竞态）** | OPEN | Fix | 保证 `compact()` 与 `navigate()` 互斥，保留分支上下文一致性，含回归测试。 | [#9179](https://github.com/earendil-works/pi/pull/9179) |
| **#9096** | **新增 Meta Provider（Muse 订阅 OAuth）** | OPEN | Feat | 支持每日刷新 Identity Token → Access Token 的非标准 OAuth 流程。 | [#9096](https://github.com/earendil-works/pi/pull/9096

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报 | 2026-09-06

> **数据源**：`github.com/Hmbown/Codewhale`（原 `DeepSeek-TUI`，已更名为 Codewhale，隶属 Shannon Labs）  
> **统计窗口**：过去 24 小时（2026-09-05 ~ 2026-09-06）

---

## 1. 今日速览

- **v0.9.12 正式发布**，标志着项目完成从 `deepseek-tui` 到 `codewhale` 的品牌与包名迁移，旧 npm 包已弃用。  
- 社区高强度围绕 **v0.9.12 后的稳定性收口** 展开：Windows 端输入/文件行尾、MCP 启动进度、Fleet 菜单冗余、主题选择器、Cargo 发布版本标识等 10+ 关键缺陷同日修复并提交 PR。  
- 核心维护者（Founder）亲自驱动多个“Dogfooding”发现的体验问题（Issue #5888, #5887, #5906, #5904），体现“用户视角优先”的迭代节奏。

---

## 2. 版本发布

### **v0.9.12** (Latest Release)
- **核心变更**：项目正式更名为 **Codewhale**；`codewhale` 命令、npm 包、发布资产统一采用小写标识符；旧包 `deepseek-tui` 停止维护。
- **迁移提示**：v0.8.x 用户需重新安装 `codewhale`（原 `deepseek`/`d` 命令已废弃）。
- **发布注记**：[GitHub Release v0.9.12](https://github.com/Hmbown/Codewhale/releases/tag/v0.9.12)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 关键点 | 热度/反应 | 链接 |
|---|-------|------|--------|-----------|------|
| 1 | **#5573** v0.9.12: milestone tracker | 追踪/管理 | 版本交付总追踪，含 Operator 交接文档、切片表、Gate 标准、自测步骤 | 24 评论，核心协作枢纽 | [#5573](https://github.com/Hmbown/Codewhale/issues/5573) |
| 2 | **#5316** EPIC-005: TUI Crate Decomposition | 重构/Epic | 将单体 TUI crate 拆解为多 crate，架构治理长期任务 | 22 评论，架构演进基石 | [#5316](https://github.com/Hmbown/Codewhale/issues/5316) |
| 3 | **#5906** Fleet claims: parked/cancelled agents hold write claims indefinitely | **严重 Bug** | 子代理取消后写入声称未释放，导致同目录后续任务被拦截 | Founder 报告，阻塞 Fleet 并发 | [#5906](https://github.com/Hmbown/Codewhale/issues/5906) |
| 4 | **#5904** web fetch: JS-shell 200s fail extraction, no retry/escalation | **Bug** | 探索类 Agent 抓取 JS 页面间歇性失败，且无重试/浏览器降级，依赖缓存状态 | Founder 报告，影响联网能力可靠性 | [#5904](https://github.com/Hmbown/Codewhale/issues/5904) |
| 5 | **#5909** write_file silently converts CRLF → LF on overwrite | **Bug/数据完整性** | `write_file` 不保留原有换行符，`edit_file` 正常，跨平台协作隐患 | 已有修复 PR #5911 | [#5909](https://github.com/Hmbown/Codewhale/issues/5909) |
| 6 | **#5908** win32 computer-use: reports success on PowerShell failure; mouse-down missing | **Bug/跨平台** | Windows 后端虚报输入成功，且鼠标按下动作缺失 | 已有修复 PR #5910 | [#5908](https://github.com/Hmbown/Codewhale/issues/5908) |
| 7 | **#5888** Simplify the Fleet menu: too many options at once | **UX/增强** | Founder 实测反馈菜单项过多（14→5），需分层展示 | 已有修复 PR #5905 | [#5888](https://github.com/Hmbown/Codewhale/issues/5888) |
| 8 | **#5887** MCP startup stuck at “20 connecting” long time | **UX/可观测性** | 启动进度不刷新，用户无法判断进度/卡顿 | 已有修复 PR #5897 | [#5887](https://github.com/Hmbown/Codewhale/issues/5887) |
| 9 | **#5901** feat: list custom themes in `/theme` picker | **增强** | 用户自定义主题（`~/.codewhale/themes/`）未出现在选择器中 | 社区需求明确，PR #5907 已就绪 | [#5901](https://github.com/Hmbown/Codewhale/issues/5901) |
| 10 | **#2323** 未适配中文输入法 | **Bug/国际化** | 拼音输入时提示不隐藏、弹窗中误触发拼音污染输入区 | 长期遗留（创建于 5 月），👍 1，中文用户痛点 | [#2323](https://github.com/Hmbown/Codewhale/issues/2323) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心内容 | 关联 Issue | 链接 |
|---|----|------|----------|------------|------|
| 1 | **#5911** fix(tools): write_file preserves CRLF | Open | 复用 `edit_file` 的行尾检测/恢复逻辑，修复跨平台换行符破坏 | #5909 | [#5911](https://github.com/Hmbown/Codewhale/pull/5911) |
| 2 | **#5910** fix(computer-use): win32 input truthful failure & mouse-down | Open | 修复 User32 类型加载时机、PowerShell 失败捕获、鼠标按下动作补全 | #5908, #5896 | [#5910](https://github.com/Hmbown/Codewhale/pull/5910) |
| 3 | **#5905** feat(tui): prioritize Fleet menu surface | Open | `/fleet` 动词 14→5，其余归入 `/fleet help` 分组，降低认知负荷 | #5888 | [#5905](https://github.com/Hmbown/Codewhale/pull/5905) |
| 4 | **#5907** feat(tui): list custom themes in picker | Open | 扫描 `$CODEWHALE_HOME/themes/`，追加至选择器，保留 `custom:<name>` selector | #5901 | [#5907](https://github.com/Hmbown/Codewhale/pull/5907) |
| 5 | **#5899** fix(version): remove `(dev)` marker from published crates | Open | Cargo 发布包不再显示 `(dev)`，仅开发态保留，消除用户困惑 | #5891 | [#5899](https://github.com/Hmbown/Codewhale/pull/5899) |
| 6 | **#5897** fix(mcp): show startup progress per server | Open | 流式消费连接任务，逐个更新引擎工具池，消除“卡在 20 connecting” | #5887 | [#5897](https://github.com/Hmbown/Codewhale/pull/5897) |
| 7 | **#5903** fix(computer-use): win32 backend reports PowerShell failures | Open | 修复类型定义作用域、错误返回、鼠标按下缺失（与 #5910 互补） | #5896 | [#5903](https://github.com/Hmbown/Codewhale/pull/5903) |
| 8 | **#5900** fix: align shell guidance with execution | Open | 根据 ShellDispatcher 实际解释器动态生成工具提示，避免模型在 PowerShell 上写 Bash 语法 | — | [#5900](https://github.com/Hmbown/Codewhale/pull/5900) |
| 9 | **#5893** fix(release): verify all crate tarballs before first upload | Closed | 发布前全工作区 `cargo publish --dry-run`，防止嵌入资源缺失导致发布中断 | #5892 | [#5893](https://github.com/Hmbown/Codewhale/pull/5893) |
| 10 | **#5890** fix(release): package built-in computer-use files inside TUI crate | Closed | 将 16 个 computer-use 运行时文件移入 crate 根目录，解决 v0.9.12 发布受阻 | #5892 | [#5890](https://github.com/Hmbown/Codewhale/pull/5890) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue/PR | 社区信号强度 |
|----------|-----------------|--------------|
| **跨平台稳定性（Windows 优先）** | #5908, #5903, #5910, #5896, #5898 | 🔥🔥🔥 高 — 多个阻塞性 Bug 同日爆发并修复 |
| **Agent/Fleet 编排可靠性** | #5906 (claim 泄漏), #5888 (菜单简化), #5573 (交付追踪) | 🔥🔥 高 — 核心差异化能力，Founder 亲自推动 |
| **模型/提供商适配深度** | #5820 (Ollama 预算计算), #5853 (muse-spark-1.3 reasoning), #5868 (OpenCode header) | 🔥🔥 中高 — 长尾模型兼容性持续投入 |
| **开发体验细节打磨** | #5901 (主题选择器), #5909 (行尾保留), #5887 (MCP 进度), #5900 (Shell 提示对齐) | 🔥🔥 中高 — “Dogfooding”驱动的纸片级修复 |
| **发布工程与供应链** | #5890, #5893, #5899 (版本标识), #5892 (验证流程) | 🔥 中 — 多 crate 发布复杂度上升，工具链补齐 |
| **中文/国际化支持** | #2323 (输入法), #5482 (文档中文化) | 🔥 中 — 长期存量需求，尚未系统性解决 |
| **ACP/协议生态对接** | #5863, #5864 (session/list/load 缺失) | 🔥 中 — 编辑器集成标准化推进中 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **Windows 原生体验断层**  
   - Computer-use 后端虚报成功、PowerShell 交互不可靠、行尾符破坏、Worker idle 测试不稳定——Windows 被视为“二等公民”，但修复响应极快（同日 3+ PR）。

2. **Agent 并发与资源隔离**  
   - Fleet 写入声称未随生命周期释放（#5906），导致同工作树后续任务被拒；需引入 **claim TTL / 取消钩子 / 作用域级锁** 机制。

3. **可观测性与进度反馈**  
   - MCP 启动、Web fetch、长耗时工具缺乏**增量进度流**，用户只能盯着静态 “connecting” 计数。

4. **配置与扩展点的可发现性**  
   - 自定义主题不在 Picker 中（#5901）、ACP session 管理缺失（#5864）、reasoning-only 重试参数硬编码（#5867）→ 需统一 **配置 Schema + UI 入口** 规范。

5. **发布交付的“最后一公里”**  
   - v0.9.12 暴露：Cargo 包含嵌入资源缺失、版本号误标 `(dev)`、干运行未拦截问题 → **发布门禁自动化** 正在补齐（PR #5893）。

6. **中文输入法适配拖延**  
   - Issue #2323 存活 100+ 天，涉及 IME 组合事件处理、弹窗焦点管理，属于 **架构级输入栈重构**，短期难闭环，建议纳入里程碑。

---

## 📌 给维护者的建议

- **设立 “Windows 兼容性” 专项 Sprint**，将 #5908/#5910/#5898 等纳入 CI 必过矩阵。  
- **引入 Fleet Claim 生命周期测试**（集成测试覆盖 park/cancel/reclaim 路径），防止回归。  
- **建立 “Dogfooding 周报” 机制**，将 Founder 实测反馈（如 #5888/#5887）直接转化为下一版本 Scope。  
- **补充中文输入法技术调研 Issue**，评估是否引入 `iced`/`cosmic-text` 等成熟输入栈替代现有方案。  

---

> **下一期预告**：关注 v0.9.13 里程碑规划（Issue #5573 更新）、Crate 分解进展（EPIC-005）、以及 ACP 协议完整实现进度。  
> **订阅方式**：Watch `Hmb

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*