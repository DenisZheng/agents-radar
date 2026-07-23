# AI CLI 工具社区动态日报 2026-07-23

> 生成时间: 2026-07-23 02:08 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-07-23

---

## 1. 生态全景

当前 AI CLI 赛道呈现 **"头部厂商强运营、长尾项目快迭代、生产级需求倒逼架构重构"** 的三态并存格局。Anthropic、OpenAI、Google、GitHub 四大头部工具均进入 **高频小版本发布+P0级Bug火线修复** 常态化阶段，核心矛盾从"功能可用性"转向"跨平台一致性、长会话稳定性、企业级治理"。Moonshot、Qwen、Z.ai 等模型厂商自研 CLI 正从"模型适配层"向"Agent 编排平台"跃迁，技能系统、多模型路由、供应链安全成竞争新高地。社区开源项目（OpenCode、Pi、CodeWhale）凭借极速响应与极客友好体验，在本地模型接入、TUI 交互创新上形成差异化互补。全生态共识：**Agentic Workflow（子代理编排、技能插件化、上下文工程）是下半场核心战场**。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issue 更新量(约) | 今日 PR 更新量(约) | 发布情况 | 核心关键词 |
|------|----------------------|-------------------|----------|------------|
| **Claude Code** | ~50 (高热度 10+) | ~10+ | v2.1.218 (修复/无障碍) | 跨平台割裂、权限信任危机、文档滞后 |
| **OpenAI Codex** | ~50 (高热度 10+) | ~20+ (密集合并) | 连发 4 Alpha (v0.146.0-a.1~4) | Windows/WSL 崩溃、MCP 泄漏、Plan 模式失控 |
| **Gemini CLI** | ~30+ (高优 10+) | ~10+ | 三版本齐发 (v0.52.0 / v0.53.0-pre / nightly) | Agent 编排鲁棒性、评测体系、安全加固 |
| **GitHub Copilot CLI** | ~32 (高热度 10+) | 1 (低相关性) | 连发 3 补丁 (v1.0.74-1~-3) | Windows 原生崩溃、Tmux 兼容、ACP 回归 |
| **Kimi Code CLI** | ~5 (关键阻塞 2) | ~3 | 无新版 (主分支热修复中) | 第三方兼容性断裂、Windows 编码、多模型路由需求 |
| **OpenCode** | ~50 (高热度 10+) | ~10+ | 无正式版 (PR 验证视频) | 订阅服务全挂、桌面端断连、本地模型自动发现 |
| **Pi (earendil-works)** | ~50 (高热度 10+) | ~29 (高合并率) | 无新版 (v0.80.6 后热修复密集) | 企业级兼容、Provider 原生化、TUI 基建、供应链安全 |
| **Qwen Code** | ~30+ (核心阻塞 5+) | ~10+ | Pre-release 基准版 / Nightly 失败 | CI 红/主分支断裂、更新链路失效、企业级扩展 |
| **DeepSeek TUI (CodeWhale)** | ~10 (P0阻塞 3) | ~10+ (高合并率) | **v0.9.1 RC 冲刺中** (10+ 关键 PR 已合并) | 启动崩溃/安装器破坏 PATH、技能系统产品化、多 Provider 路由 |

> **数据说明**：Issue/PR 数基于报告中“精选/热点”条目外推估算，反映社区响应强度而非绝对总量。

---

## 3. 共同关注的功能方向

| 方向 | 关注工具 (代表性 Issue/PR) | 具体诉求核心 |
|------|---------------------------|--------------|
| **跨平台/跨环境一致性** | **Claude Code** (#80002 macOS FS失效, #13843 跨平台上下文), **Codex** (#16815 WSL路径, #34025 冷启动冻结), **Copilot CLI** (#4217 Win崩溃, #4223 Tmux检测), **Kimi** (#2532 Win编码), **Qwen** (#6577 Win粘贴), **CodeWhale** (#4716 macOS启动退出, #4685 Win PATH) | **P0 级生存线**：Windows 原生/WSL/Tmux/Remote-SSH/macOS Desktop 与 CLI 行为对齐，安装器与运行时不破坏宿主环境。 |
| **Agent 编排与子代理稳定性** | **Claude Code** (#80213 Task工具缺失, #80196 Auto-compact), **Codex** (#34845 多Agent世界状态, #34852 线程唤醒), **Gemini** (#22323 Subagent误报成功, #21409 挂起), **Qwen** (#7306 工具输出预算/制品生命周期), **CodeWhale** (#4679 统一Skills管理器) | 从"单轮对话"转向"多Agent协作"：状态机规范、超限熔断、配置继承、上下文压缩触发可靠性、技能/子代理版本化管理。 |
| **企业级治理：权限、计费、审计、合规** | **Claude Code** (#39523 Bypass失效9月, #77966 OAuth循环), **Codex** (#34850 Free Plan禁图像, #34831 Analytics flush), **Copilot CLI** (#4224 子代理计费属性缺失, #4016 ACP BYOK回归), **Pi** (#6768 Copilot Ent Compaction失败, #6979 OAuth计费归属), **CodeWhale** (#4684 danger-full-access边界检查) | 权限模型可观测、多租户/多账号隔离、Token/成本精准归因、SSO/OAuth 稳定性、数据不出域、审计日志完备。 |
| **本地/兼容模型零配置接入** | **OpenCode** (#6231 185👍 自动发现), **Pi** (#6960 StepFun, #6927 OpenRouter OAuth, #6216 Bedrock), **Kimi** (#2531 MCP Schema被拒, #2534 prompt_cache_key破坏兼容), **CodeWhale** (#4720 Provider自动切换混乱, #4686 MiniMax路由) | OpenAI 兼容层自动发现模型列表、Schema 降级清洗、认证流原生化、思维链格式适配、路由策略显式化。 |
| **TUI/交互体验工程化** | **Codex** (#28969 151👍 自动确认不可关), **Gemini** (#25166 Shell卡待输入), **Pi** (#6987 字形宽度对齐, #6903 外部编辑器启动优化), **CodeWhale** (#4718 信息密度, #4676 色彩语法), **Qwen** (#7551 Shadow DOM隔离) | 交互可控性(超时/确认开关)、渲染正确性(CJK/Emoji/宽字符)、启动冷启动优化、样式隔离、外部编辑器集成流畅度。 |
| **供应链安全与依赖治理** | **CodeWhale** (#4714 17 Dependabot告警批量修复), **Pi** (隐含于Provider原生化), **Gemini** (#28403 变量扩展绕过 GHSA), **Claude Code** (插件沙箱隔离) | SBOM 生成、高危 CVE 零容忍、插件/技能签名验证、沙箱逃逸防护、发布门禁自动化。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 当前战略重心 |
|------|----------|--------------|--------------|--------------|
| **Claude Code** | **企业级闭源标杆** | TypeScript + Electron (Desktop) + Go (CLI核心)；重"技能/子代理/后台审查"原语设计 | 专业开发团队、需深度代码审查与跨平台协作的企业 | **统一运行时行为** (消除 CLI/Desktop 割裂)、**权限链路重构**、文档工程化 |
| **OpenAI Codex** | **多Agent 自主编程平台** | Rust 核心 + TS 前端；重"Guardian Review/多Agent/World State"架构，Plugin 生态内建 | 追求自主编程、复杂任务分解的高阶开发者、早期采纳者 | **Windows/WSL 生产级稳定**、**MCP 基建止血**、**Plan 模式交互可控性** |
| **Gemini CLI** | **Google 生态原生、评测驱动** | Go/TS 混合；重"Caretaker 分类器、Eval Coverage、AST 感知工具"工程化体系 | Google Cloud/Gemini 用户、重可观测性与安全合规的团队 | **Agent Runtime 鲁棒性**、**评测体系落地 (eval:coverage)**、上下文/Token 效能 |
| **GitHub Copilot CLI** | **GitHub 生态深度集成终端** | Node.js/Ink TUI；重"ACP 协议、VS Code 集成、GitHub 身份/计费体系" | GitHub 重度用户、依赖 Copilot 订阅的个人/企业开发者 | **Windows/Tmux 基础可用性**、**ACP/企业代理模式稳定**、**子代理可观测性** |
| **Kimi Code CLI** | **模型厂商自研、兼容层优先** | Python/TS；重"OpenAI 兼容协议适配、Prompt Cache、多 Provider 路由" | 国内开发者、需低成本调用 Moonshot/第三方兼容端点的用户 | **兼容性护栏 (参数作用域/Schema清洗)**、**Windows 体验补齐**、**多模型路由架构** |
| **OpenCode** | **本地优先、订阅制商业化** | Go + TS；重"opencode-go 订阅网关、本地模型零配、动态模型加载" | 偏好本地模型、愿为稳定服务付费的开发者、企业私有化部署 | **订阅链路 SLA 恢复**、**桌面端连接稳定**、**OpenAI 兼容端点自动发现** |
| **Pi** | **极客可定制、Provider 中立** | Rust + TS (Tauri)；重"原生 Provider SDK 集成、TUI 渲染基建、AgentHarness 解耦" | 追求极致终端体验、多云/多模型混合、自托管部署的高阶用户 | **企业级 Provider 原生化 (Bedrock/OpenRouter/StepFun)**、**TUI 字形/性能基建**、**配置/状态鲁棒性** |
| **Qwen Code** | **阿里云生态、自愈式工程** | TS/Go；重"ACP 子进程架构、Fleet 自动化修复、ARMS 遥测对齐、企业级渠道" | 阿里云/通义用户、需企业级 IM 集成(钉钉/飞书)、私有化部署的组织 | **主分支 CI 自愈**、**更新/安装链路健壮**、**企业级外部记忆/渠道标准化** |
| **CodeWhale (DeepSeek TUI)** | **国产模型原生、技能即产品** | Rust (核心) + TS (TUI)；重"统一 Skills 管理器、默认技能包、Work 面板重构、主题系统" | 国内开发者、DeepSeek/Z.ai/GLM 用户、偏好键盘驱动 TUI 的极客 | **v0.9.1 发布门禁 (P0 修复)**、**技能系统产品化交付**、**多 Provider 显式路由与健康检查** |

---

## 5. 社区热度与成熟度评估

| 梯队 | 工具 | 判定依据 | 成熟度阶段 |
|------|------|----------|------------|
| **第一梯队：头部商业化、高并发运维** | **Claude Code**, **OpenAI Codex**, **Gemini CLI**, **GitHub Copilot CLI** | Issue/PR 量级大 (50+/天)、高赞 Issue 累计百+、版本发布周以计、有专职团队兜底 P0、企业级需求显性化 | **规模化生产期** —— 功能完备度高，核心痛点集中于**跨平台一致性、长会话稳定性、权限/计费信任基建** |
| **第二梯队：模型厂商自研、快速追赶** | **Kimi Code CLI**, **Qwen Code**, **CodeWhale** | 发布频次高 (周/日级)、核心阻塞 Issue 响应极快 (小时级 PR)、架构从"适配层"向"编排平台"演进、社区以国内开发者为主 | **快速迭代期** —— 兼容性债务偿还与架构升级并行，**技能系统、多模型路由、供应链安全** 是差异化护城河 |
| **第三梯队：社区驱动、极客深度定制** | **OpenCode**, **Pi** | 核心维护者响应极快 (PR 合并率高

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-23）

---

## 1. 热门 Skills 排行（高关注度 PR）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| **#1298** | **skill-creator: run_eval.py 修复** | 修复评估脚本 Windows 下流读取、触发检测、并行工作器问题；解决 recall=0% 误报 | 评估工具链核心阻塞，影响所有技能描述优化循环 | 🟢 OPEN |
| **#556** (Issue) | **run_eval.py 0% 触发率缺陷** | `claude -p` 从不触发技能，导致优化循环完全失效 | 12 条评论、7 👍，被 #1298、#1323、#1169 多 PR 引用 | 🟢 OPEN |
| **#1367** | **self-audit 技能** | 机械文件验证 + 四维推理质量门（损害严重度优先），通用型审计技能 | 新颖的“交付前自审”范式，v1.3.0 迭代中 | 🟢 OPEN |
| **#723** | **testing-patterns** | 全栈测试模式：Testing Trophy、AAA、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 覆盖面最广的测试指导技能，社区期待标准化测试工作流 | 🟢 OPEN |
| **#514** | **document-typography** | AI 生成文档的排版质量控制：孤行/寡行、标题断页、编号对齐 | 解决“AI 生成文档排版差”通病，需求通用性强 | 🟢 OPEN |
| **#1302** | **color-expert** | 色彩专业知识：命名系统、色彩空间选型表、OKLCH/OKLAB/CAM16、无障碍对比度 | 设计/前端/数据可视化场景高频需求，自包含无外部依赖 | 🟢 OPEN |
| **#486** | **ODT 技能** | OpenDocument 创建/填充/解析/转 HTML，支持 LibreOffice/ISO 标准流程 | 企业级文档互操作刚需，填补 .odt/.ods 生态空白 | 🟢 OPEN |
| **#525** | **pyxel** | 复古像素游戏开发：Pyxel MCP 服务器集成，write→run→capture→inspect 迭代循环 | 小众但完整的游戏开发工作流，MCP 集成示范 | 🟢 OPEN |
| **#83** | **skill-quality-analyzer / skill-security-analyzer** | 元技能：从结构、文档、安全、维护性、可用性五维度评分技能 | 质量把关自动化，配套 marketplace 分发 | 🟢 OPEN |
| **#210** | **frontend-design 改进** | 提升清晰度/可执行性/内部一致性，确保每条指令单轮可落地 | 现有热门技能的“可用性重构”，减少歧义 | 🟢 OPEN |

> **共性**：前 10 中 **6 个是工具链修复/基建**（skill-creator 评估、Windows 兼容、UTF-8/YAML 校验），仅 4 个是面向用户的新技能——社区当前精力显著倾向于**“把造技能的工具修好”**。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 核心诉求 | 热度指标 |
|----------|------------|----------|----------|
| **安全/信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 社区技能冒用 `anthropic/` 命名空间，诱导用户过度授权 | **43 评论、2 👍**（全仓最高） |
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) | Claude.ai 内原生支持组织技能库、一键分享、版本管理 | 14 评论、**7 👍** |
| **评估工具链可用性** | [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169) | `run_eval.py` 触发率 0%、召回率全 0、优化循环失效 | 12+3 评论、**7+1 👍** |
| **Windows 原生兼容** | [#1061](https://github.com/anthropics/skills/issues/1061)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) | PATHEXT、cp1252 编码、管道 select 三大阻塞 | 多 PR/Issue 并行跟进 |
| **技能分发去重/规范** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` 与 `example-skills` 内容重复污染上下文 | 6 评论、**9 👍** |
| **技能即 MCP / 标准化接口** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skill 能力暴露为 MCP 标准接口，便于组合/复用 | 4 评论 |
| **推理质量门/治理** | [#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412) | 任务全生命周期三道质量门；Agent 治理、策略执行、审计追踪 | 新兴方向 |
| **Bedrock/企业云集成** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 环境下技能加载与运行 | 4 评论 |

---

## 3. 高潜力待合并 Skills（活跃讨论、近期可能落地）

| PR | Skill | 关键进展/信号 | 预判落地窗口 |
|----|-------|--------------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评估链路全修复** | 关联 #556、#1323、#1169 多 Issue/PR，MartinCajiao 持续跟进至 6/23 | **极高** —— 核心基建阻塞解锁所有技能优化 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | **run_eval 触发检测修复** | 精准定位“漏读技能名、首个非 Skill tool 即退出”，6/25 仍在更新 | **极高** —— #1298 同根同源 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 覆盖全测试栈，4/21 仍活跃，无架构争议 | **高** —— 通用刚需，文档完善度高 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 3/13 后静默，但解决“所有 AI 文档通病”，无依赖风险 | **中高** —— 需维护者审阅排版规范 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 7/21 仍在更新，色彩空间选型表等专业内容完备 | **中高** —— 设计/可视化高频场景 |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | 4/14 更新，企业级互操作刚需，MCP 生态互补 | **中** —— 需验证 LibreOffice 无头模式稳定性 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 7/2 发布 v1.3.0，四维推理审计创新范式 | **中** —— 概念新，需社区实战验证 |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / security-analyzer** | 1/7 更新，元技能闭环“技能评技能” | **中** —— 配套 marketplace 分发机制待完善 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区最集中的诉求是：把“造技能的工具链”（skill-creator 评估、跨平台兼容、命名空间治理、分发去重）修好、管严、通用化——新技能创作被基建债务全面拖累，安全信任与组织级协作成为下一阶段增长的硬门槛。**

---

*报告生成时间：2026-07-23 | 数据源：anthropics/skills PR/Issue 前 20/15 条（按评论数排序）*

---

# Claude Code 社区动态日报 | 2026-07-23

---

## 1. 今日速览

- **v2.1.218 发布**：`/code-review` 改为后台子代理运行，不再占用主会话上下文；新增屏幕阅读器对删除文本的无障碍播报支持。
- **社区高热度问题聚焦于三大痛点**：macOS Desktop 文件系统扩展调用失败（56 条评论、25 👍）、权限绕过模式长期失效（9 个月、12+ 重复 Issue）、CLI 与 Desktop 间会话上下文互通缺失（99 👍）。
- **新增 4 个文档类 Issue** 集中反映 Skills/Subagent/Fast-mode 文档缺失，折射出开发者对高级功能文档完善的强烈需求。

---

## 2. 版本发布

### v2.1.218
| 变更 | 说明 |
|------|------|
| `/code-review` 后台化 | 代码审查现在作为 background subagent 运行，审查过程不再填充主会话，保持斜杠命令堆叠的审查目标不变 |
| 无障碍增强 | 新增 `Option+Delete`、`Ctrl+W`、`Cmd+Backspace` 等词/行删除操作的屏幕阅读器播报 |

> 🔗 [Release v2.1.218](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 类型 | 热度 | 核心诉求 | 为什么重要 |
|---|------|------|------|----------|------------|
| [#80002](https://github.com/anthropics/claude-code/issues/80002) | macOS Desktop: Filesystem extension `tools/call` 从未被分发 | 🐛 Bug | 56 评 / 25 👍 | `tools/list` 成功但 `tools/call` 完全无日志，导致文件系统操作失效 | **阻断级**：Desktop App 核心文件操作不可用，影响所有 macOS 用户 |
| [#39523](https://github.com/anthropics/claude-code/issues/39523) | Bypass permissions 模式根本性失效——9 个月、12+ 重复、零修复 | 🐛 Bug / Meta | 33 评 / 18 👍 | `bypassPermissions` 不生效，自 2025-07 以来持续回归 | **信任危机**：长期未修复的核心功能缺陷，开发者失去耐心 |
| [#13843](https://github.com/anthropics/claude-code/issues/13843) | 支持从 Claude.ai 共享会话上下文到 Claude Code | 💡 Enhancement | 25 评 / **99 👍** | 规划/编码跨平台无缝衔接，避免重复上下文构建 | **最高赞需求**：跨产品工作流打通，团队协作刚需 |
| [#50842](https://github.com/anthropics/claude-code/issues/50842) | Windows Chrome 扩展：非预批域名被静默拒绝，无任何用户确认路径 | 🐛 Bug | 13 评 / 6 👍 | `mcp__Claude_in_Chrome__navigate` 直接失败，无授权 UI | **安全/体验**：浏览器自动化核心链路中断，Windows 用户受阻 |
| [#71726](https://github.com/anthropics/claude-code/issues/71726) | Desktop App 缺少「任务中注入消息」能力（CLI 已支持 steering） | 🔁 Duplicate / Feature | 9 评 / 16 👍 | 运行中任务可插入指令，无需等待轮次结束 | **平台对齐**：CLI 与 Desktop 体验不一致，影响专业用户 |
| [#78933](https://github.com/anthropics/claude-code/issues/78933) | Remote Control 连接失败：`session_url` undefined | 🐛 Bug | 8 评 | 连接/断连均报错，Desktop App 远程控制完全不可用 | **功能缺失**：团队协作/远程开发核心功能瘫痪 |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | OAuth 登录循环：重新登录后 `state` 参数丢失 | 🐛 Bug | 7 评 / 6 👍 | Linux/IntelliJ 环境下反复跳转无法完成认证 | **准入阻断**：新环境无法完成首次登录 |
| [#80213](https://github.com/anthropics/claude-code/issues/80213) | CLI 顶层会话中 Task 工具不可用（Desktop 同版本正常） | 🐛 Bug | 2 评 / 1 👍 | `CLAUDE_CODE_ENABLE_TASKS=true` 下 CLI 仍缺失 TaskCreate 等工具 | **平台差异**：同账号、同版本、同配置下行为不一致 |
| [#80404](https://github.com/anthropics/claude-code/issues/80404) | Windows 休眠恢复后事件循环饥饿 → 200% CPU 占用、输入延迟 | 🐛 Bug | 0 评 | `uv_backend_timeout() == 0` 导致 libuv 空转，数十分钟后自愈 | **稳定性**：笔记本合盖/休眠场景高频触发，资源浪费严重 |
| [#80398](https://github.com/anthropics/claude-code/issues/80398) | Skills/Plugin 文档缺失 frontmatter 布尔字段的合法字符串值 | 📄 Docs | 0 评 | 布尔字段只写 `true/false`，未说明 `"true"/"false"/"yes"/"no"` 等是否支持 | **文档完善**：4 个连续文档 Issue 反映高级功能文档滞后 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 | 影响范围 |
|---|------|------|----------|----------|
| [#18217](https://github.com/anthropics/claude-code/pull/18217) | `feat(plugins): add /planwith command for inline plan mode prompts` | ✅ Closed | 新增 `/planwith <prompt>` 一步进入计划模式并传入提示词，消除两步操作摩擦 | CLI/插件体验 |
| [#80353](https://github.com/anthropics/claude-code/pull/80353) | `docs(gcp): stop on checksum mismatch` | 🟢 Open | GCP 网关部署脚本在二进制校验失败时中止并清理，避免损坏制品部署 | CI/CD 安全性 |
| [#80326](https://github.com/anthropics/claude-code/pull/80326) | `Add account profiles plugin` | 🟢 Open | 实验性插件：隔离 `CLAUDE_CONFIG_DIR`，支持个人/工作/客户多账号共存一机器 | 多账号管理 |
| [#80294](https://github.com/anthropics/claude-code/pull/80294) | `docs: fix 1 broken link via archive.org` | 🟢 Open | README 中失效 npm 链接修复为 Wayback 快照 | 文档可用性 |
| [#80241](https://github.com/anthropics/claude-code/pull/80241) | `fix: Console scrolling top of history when claude add text` | 🟢 Open | 修复控制台输出新文本时错误滚动到历史记录顶部 | TUI 体验 |
| [#80229](https://github.com/anthropics/claude-code/pull/80229) | `docs: fix 1 broken link via archive.org` | 🟢 Open | 另一处 README 失效链接归档修复 | 文档可用性 |
| [#80196](https://github.com/anthropics/claude-code/pull/80196) | `fix: Auto-compact never triggers despite 100% context used` | 🟢 Open | 修复 Max 订阅 200K 模式下自动压缩不触发的问题 | 上下文管理 |
| [#80195](https://github.com/anthropics/claude-code/pull/80195) | `fix: Instantly hitting usage limits with Max subscription` | 🟢 Open | 修复 Max 订阅用户立即触达到用量限制的误判 | 计费/配额 |
| [#80112](https://github.com/anthropics/claude-code/pull/80112) | `Make devcontainer firewall init resilient to DNS failures` | 🟢 Open | 域名解析失败不再导致整个防火墙初始化中止，改为重试/跳过单域名 | DevContainer 稳健性 |
| [#80008](https://github.com/anthropics/claude-code/pull/80008) | `Add twilight plugin: spec-first design/implement skills with focus stack` | 🟢 Open | 演示性插件：规范优先的设计/实现技能栈，配合持久化焦点栈 | 技能系统探索 |

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势方向 | 代表性 Issue | 社区呼声强度 | 备注 |
|----------|--------------|--------------|------|
| **跨平台上下文互通** | [#13843](https://github.com/anthropics/claude-code/issues/13843) (99 👍) | ⭐⭐⭐⭐⭐ | Claude.ai ↔ Claude Code 会话无缝切换，团队协作核心诉求 |
| **Desktop App 功能对齐 CLI** | [#71726](https://github.com/anthropics/claude-code/issues/71726), [#78933](https://github.com/anthropics/claude-code/issues/78933), [#80002](https://github.com/anthropics/claude-code/issues/80002) | ⭐⭐⭐⭐ | Steering、Remote Control、Filesystem Extension 等 CLI 特性缺失 |
| **权限/安全模型可靠性** | [#39523](https://github.com/anthropics/claude-code/issues/39523), [#50842](https://github.com/anthropics/claude-code/issues/50842), [#77966](https://github.com/anthropics/claude-code/issues/77966) | ⭐⭐⭐⭐ | Bypass 失效、静默拒绝、OAuth 循环——信任基础设施薄弱 |
| **高级技能/子代理/任务系统文档化** | [#80395](https://github.com/anthropics/claude-code/issues/80395)–[#80398](https://github.com/anthropics/claude-code/issues/80398), [#66202](https://github.com/anthropics/claude-code/issues/66202) | ⭐⭐⭐ | 4 连发文档 Issue + Agent 会话管理需求，显示高级功能采用门槛高 |
| **模型选择灵活性** | [#80359](https://github.com/anthropics/claude-code/issues/80359), [#80382](https://github.com/anthropics/claude-code/issues/80382) | ⭐⭐ | 请求 Fable Plan 模式、Max 计划用户收到矛盾可用性提示 |
| **稳定性/资源占用** | [#80404](https://github.com/anthropics/claude-code/issues/80404), [#80403](https://github.com/anthropics/claude-code/issues/80403), [#50894](https://github.com/anthropics/claude-code/issues/50894) | ⭐⭐ | 休眠恢复 CPU 空转、WebView 白屏、Focus 模式吞噬实质内容 |

---

## 6. 开发者关注点总结

| 痛点/高频需求 | 具体表现 | 优先级建议 |
|--------------|----------|------------|
| **「它在 CLI 能用，Desktop 却不行」** | Filesystem Extension、Steering、Remote Control、Task Tools、模型可用性提示均在 Desktop 失效或行为不一致 | **P0** —— 统一运行时行为，消除平台割裂 |
| **「权限系统不可信」** | Bypass 失效 9 月、Chrome 扩展静默拒绝、OAuth 循环、Max 订阅误判限额 | **P0** —— 重构权限链路，增加可观测性与用户确认回路 |
| **「文档跟不上功能迭代」** | Skills/Subagent/Fast-mode/Plugin 前置元数据、布尔值合法值、后台运行默认行为、模型切换副作用均无文档 | **P1** —— 建立文档同步机制，配合功能发布同步更新 |
| **「长会话/大上下文稳定性」** | Auto-compact 失效、Focus 模式丢内容、会话 JSONL 丢失长文本、休眠恢复 CPU 空转 | **P1** —— 加强上下文管理与事件循环健壮性测试 |
| **「多账号/多环境隔离」** | Account Profiles 插件（PR #80326）、OAuth state 丢失、配置目录隔离需求 | **P1** —— 原生支持多配置文件，避免手动切换 `CLAUDE_CONFIG_DIR` |
| **「无障碍与国际化」** | v2.1.218 新增删除文本播报，但整体 a11y 覆盖度仍待完善 | **P2** —— 持续补齐 WCAG 合规项 |

---

> **数据来源**：github.com/anthropics/claude-code  
> **统计窗口**：2026-07-22 00:00 – 2026-07-23 23:

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-23

---

## 1. 今日速览

OpenAI Codex 今日发布了 **4 个连续的 Alpha 版本**（0.146.0-alpha.1 至 alpha.4），显示核心 Rust CLI 正在进行高频迭代。社区关注焦点集中在 **Windows/WSL 环境下的沙箱与路径解析故障**、**MCP 子进程泄漏导致的内存/文件句柄耗尽**、**IDE 扩展在 Remote-SSH 场景下的加载失败**，以及 **Plan 模式下自动确认倒计时的用户体验争议**。多个高热度 Issue 直指生产环境可用性痛点，官方通过 20+ 个 PR 快速推进修复与架构优化。

---

## 2. 版本发布

| 版本 | 发布时间 | 性质 | 备注 |
|------|----------|------|------|
| `rust-v0.146.0-alpha.4` | 2026-07-23 | Alpha | 第 4 次 Alpha 迭代，通常包含前序版本的快速修复 |
| `rust-v0.146.0-alpha.3` | 2026-07-23 | Alpha |  |
| `rust-v0.146.0-alpha.2` | 2026-07-23 | Alpha |  |
| `rust-v0.146.0-alpha.1` | 2026-07-23 | Alpha | 0.146 系列起始版本 |

> **说明**：同一天连发 4 个 Alpha 版本，暗示 0.145 稳定版后有较大变更（可能涉及多 Agent、Guardian review、plugin 架构等），正在进行密集验证。正式 Release Note 尚未发布，建议关注后续 `rust-v0.146.0` 稳定版。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 核心问题 | 为什么重要 |
|---|-------|------|----------|------------|
| 1 | [#28969](https://github.com/openai/codex/issues/28969) **Plan 模式：60 秒自动确认无法关闭** | 👍151 · 💬53 | 用户强烈要求增加设置禁用「60 秒无操作自动 resolve」行为 | **最高赞 Issue**，直接影响交互体验；许多开发者在审查代码时被迫中断，社区共识极高 |
| 2 | [#12491](https://github.com/openai/codex/issues/12491) **GUI：MCP 子进程不回收 → 1300+ 僵尸进程 + 37GB 内存泄漏** | 👍5 · 💬27 | Codex.app 完成任务后不 reap MCP child processes | **严重资源泄漏**，长时间运行会耗尽系统资源，阻碍生产环境采用 |
| 3 | [#21639](https://github.com/openai/codex/issues/21639) **Desktop 更新后 Hooks 停止运行** | 👍6 · 💬23 | 回归：更新后自定义 hooks 失效 | 破坏现有自动化工作流，升级风险高 |
| 4 | [#16815](https://github.com/openai/codex/issues/16815) **Windows WSL Agent：AbsolutePathBuf 反序列化失败** | 👍13 · 💬22 | WSL 路径解析在新版本中彻底损坏 | **Windows/WSL 核心阻断器**，大量企业用户受影响 |
| 5 | [#27597](https://github.com/openai/codex/issues/27597) **IDE 扩展在 VS Code Remote-SSH 下无法加载** | 👍4 · 💬16 | Remote 开发场景下扩展启动失败，CLI 正常 | 远程开发是主流工作流，扩展不可用严重降低采用率 |
| 6 | [#10599](https://github.com/openai/codex/issues/10599) **可配置 worktree 存储位置** | 👍66 · 💬16 | 无法自定义 Git worktree 创建路径 | 长期高赞需求，磁盘管理灵活性痛点 |
| 7 | [#26984](https://github.com/openai/codex/issues/26984) **MCP stdio 服务器泄漏 pipe fd + 孤儿进程 → EMFILE** | 👍3 · 💬14 | 累积打开文件句柄耗尽，导致「Too many open files」 | 与 #12491 同根同源，MCP 生态稳定性核心问题 |
| 8 | [#23200](https://github.com/openai/codex/issues/23200) **移动端支持无需桌面端在线的无头 Linux 远程主机** | 👍42 · 💬13 | 移动端控制层依赖桌面端在线，服务器端工作流受阻 | 解锁「手机管理服务器端 Codex」场景，需求明确 |
| 9 | [#27458](https://github.com/openai/codex/issues/27458) **等待用户输入时看似超时** | 👍43 · 💬12 | Plan/交互模式下等待输入被误判为超时 | 交互可靠性问题，用户信任度受损 |
| 10 | [#34025](https://github.com/openai/codex/issues/34025) **Windows 冷启动产生 300+ taskkill/conhost 进程冻结整机** | 👍0 · 💬7 | 启动即生成大量进程，系统级卡顿 | **严重性能/稳定性事故**，Windows 用户首启即崩体验 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#34852](https://github.com/openai/codex/pull/34852) **唤醒休眠线程处理队列中的 agent mail** | ✅ Closed | 空闲线程在有 durable sleep 时，收到 agent 消息立即恢复 | 多 Agent 调度可靠性 |
| 2 | [#34851](https://github.com/openai/codex/pull/34851) **使用批量元数据 API 获取 plugin app 摘要** | ✅ Closed | 分批（100 个）请求 plugin metadata，失败保留缓存 | Plugin 列表加载性能与鲁棒性 |
| 3 | [#34850](https://github.com/openai/codex/pull/34850) **Free 计划账号禁用图像生成** | ✅ Closed | 识别 Free plan 时跳过注册 `image_generation` tool | 计费/权限边界强化 |
| 4 | [#34849](https://github.com/openai/codex/pull/34849) **按作用域缓存远程 plugin 目录** | ✅ Closed | 全局/用户/工作区三级缓存，3h TTL，启动预热 | Plugin 发现延迟大幅降低 |
| 5 | [#34847](https://github.com/openai/codex/pull/34847) **Guardian review 使用 Guardian 模型限制** | ✅ Closed | 清除父 context-window 覆盖，避免模型不匹配 | Review 质量与 token 预算准确性 |
| 6 | [#34846](https://github.com/openai/codex/pull/34846) **自定义 provider 可选择启用独立 web search** | ✅ Closed | 新增 `supports_standalone_web_search` 配置 | 扩展第三方 provider 能力 |
| 7 | [#34845](https://github.com/openai/codex/pull/34845) **在 world state 中追踪多 Agent 模式** | ✅ Closed | 新增 `multi_agent_mode` world-state section，持久化 | 多 Agent 上下文连续性 |
| 8 | [#34840](https://github.com/openai/codex/pull/34840) **App Server 增加持久化线程置顶** | ✅ Closed | `isPinned` 字段 + 列表过滤 + 分页 | 线程管理 UX 改进 |
| 9 | [#34839](https://github.com/openai/codex/pull/34839) **MCP 启动中断时保留用户输入** | ✅ Closed | 步骤快照中构建并保留 MCP tool list/router | 防止对话历史丢失 |
| 10 | [#34831](https://github.com/openai/codex/pull/34831) **进程内 App Server 关闭前刷新 analytics** | ✅ Closed | 有界队列 flush，等待完成后再退出 | 避免埋点丢失，提升可观测性 |

> **趋势**：近期 PR 极度集中在 **多 Agent 架构**、**Plugin 生态**、**MCP 稳定性**、**Windows/WSL 兼容性**、**Analytics 完善** 五大方向，且多为「小步快跑、即合即发」模式。

---

## 5. 功能需求趋势（从 50 条 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **Windows / WSL 原生兼容性** | #16815, #22428, #23209, #34025, #34782, #34841 | 🔥🔥🔥🔥🔥 | 6 个高热度 Issue，涉及路径解析、沙箱、启动性能、状态文件损坏，阻碍企业级采用 |
| **MCP 生态稳定性（进程/句柄泄漏）** | #12491, #26984 | 🔥🔥🔥🔥 | 核心基础设施缺陷，长运行会话必现，优先级最高 |
| **Plan/交互模式可控性** | #28969, #27458, #32594 | 🔥🔥🔥🔥 | 自动确认、超时判定、违规改文件 —— 核心交互信任危机 |
| **远程/移动端解耦桌面端** | #23200, #34632 | 🔥🔥🔥 | 服务器端常驻 + 移动端控制是刚需，架构尚未完全支持 |
| **IDE 扩展 Remote-SSH / 多平台** | #27597, #29122, #23209 | 🔥🔥🔥 | 远程开发主流场景下扩展失效，且稳定版捆绑 Alpha CLI 引发回归 |
| **工作区/Worktree 管理灵活性** | #10599, #26227 | 🔥🔥🔥 | 磁盘布局、Side chat 持久化，长期高赞未解决 |
| **多 Agent / Guardian Review 架构** | #34301, #34845, #34847, #34852 | 🔥🔥 | 官方正在大力重构，社区关注子 Agent 生成、审查模型隔离 |
| **Plugin/扩展生态性能** | #34849, #34851, #34850 | 🔥🔥 | 缓存、批量 API、权限分级，官方正在系统性优化 |
| **观测性与调试** | #34831, #34835, #31320 | 🔥 | Analytics flush、compaction 计时、MCP UI 指标 |

---

## 6. 开发者关注点总结

| 痛点 / 需求 | 高频表现 | 典型原声（摘要） |
|-------------|----------|------------------|
| **Windows/WSL 生产可用性** | 启动冻结、路径解析崩、沙箱不可用、Store 更新后历史丢失 | "Cold launch freezes whole PC", "WSL path resolution broken after update", "Sidebar history missing" |
| **长运行会话资源泄漏** | MCP 僵尸进程、fd 泄漏、内存 37GB、EMFILE | "1300+ zombies", "cumulative EMFILE", "memory leak after task completion" |
| **交互模式失控** | 60s 自动确认无法关、等待输入被判超时、Plan 模式违规改文件 | "Add setting to disable auto-resolve", "timeout while waiting for user input", "agent violated plan mode restrictions" |
| **远程开发场景断层** | Remote-SSH 扩展加载失败、移动端依赖桌面在线、iOS 远程转不渲染 | "IDE extension fails to load in VS Code Remote-SSH", "Support headless remote Linux hosts" |
| **升级即破坏** | Desktop 更新后 hooks 失效、线程迁移丢失、稳定版捆绑 Alpha CLI | "Hooks no longer run after update", "thread assignments on legacy project IDs", "stable extension ships prerelease CLI" |
| **可配置性不足** | Worktree 路径固定、Side chat 不持久、无法关闭自动确认 | "Way to configure location of worktrees", "Persist side chats as child threads" |
| **多 Agent/审查机制不透明** | 子 Agent 版本不匹配、Guardian review 用错模型限制、世界状态不持久化 | "GPT Sol cannot spawn Luna subagents", "Guardian review cwd reuse keys" |

---

## 📌 一句话建议

> **若你是 Windows/WSL 重度用户或运行长会话 MCP 工作流，建议暂缓升级至最新 Desktop/CLI，等待 0.146 稳定版及配套修复；关注 #28969（自动确认开关）与 #12491/#26984（MCP 泄漏）的进展，这两类问题最直接影响日常生产力。**

---

*数据来源：github.com/openai/codex | 报告生成时间：2026-07-23 08:00 UTC*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-23

---

## 1. 今日速览
- **三版本齐发**：正式版 `v0.52.0`、预览版 `v0.53.0-preview.0` 与夜ly `v0.52.0-nightly` 同步推送，核心修复了凭证回退、A2A 协议 400 报错及 CI 配置污染上下文等问题。  
- **安全加固进行中**：PR #28403 修复 Bash/PowerShell 变量扩展绕过漏洞（GHSA-wpqr-6v78-jr5g），属深度防御加固。  
- **Agent 稳定性成社区最大痛点**：高优 Issue 集中于 Subagent 挂起、误报成功、Browser Agent Wayland 失效、工具数超限 400 等核心流程阻塞问题。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 | 链接 |
|------|------|----------|------|
| **v0.52.0** | 稳定版 | • 排除临时 CI 配置文件污染工作区上下文 (#28216)<br>• Caretaker 分类器基础模块落地 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0) |
| **v0.53.0-preview.0** | 预览版 | • 修复 A2A 协议中连续角色合并导致的 400 Bad Request (#28407)<br>• 引入 LLM Triage Orchestrator 与容器化构建 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0) |
| **v0.52.0-nightly.20260723** | 夜ly | • 顺序验证缓存凭证并恢复 `GOOGLE_APPLICATION_CREDENTIALS` 回退 (#28472)<br>• 新增 `eval:coverage` 命令评估内置工具覆盖率 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260723.g9681621c6) |

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 优先级/标签 | 关注理由 | 社区热度 |
|---|------|-------------|----------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 达 MAX_TURNS 仍上报 GOAL 成功 | P1, Bug, Need Retest | **静默失败**：子任务超限却标记成功，导致上层编排误判，阻断复杂工作流信任度。 | 👍 2 · 12 评论 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist Agent 频繁永久挂起 | P1, Bug, Need Retest | **可用性阻断**：简单建目录也触发挂起，需显式禁用子代理才能工作，严重影响默认体验。 | 👍 8 · 8 评论 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令执行完成仍卡在 "Waiting input" | P1, Bug, Effort/Medium | **交互死锁**：高频复现，非交互命令亦触发，疑似 PTY/信号处理竞态。 | 👍 3 · 4 评论 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 工具数 >128 触发 400 错误 | P2, Bug | **扩展性瓶颈**：MCP/技能增多后易超限，需动态裁剪或分批注册机制。 | 👍 0 · 3 评论 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser Subagent 在 Wayland 下失效 | P1, Bug, Agent/Browser | **平台兼容**：Linux 主流显示协议不支持，影响桌面自动化场景。 | 👍 1 · 4 评论 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信噪会话 | P2, Bug | **资源浪费**：后台抽取器反复读取无价值会话，需熔断/隔离策略。 | 👍 0 · 5 评论 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取/搜索/映射价值评估 | P2, Feature, Epic | **效能提升方向**：若证明有效可大幅降低 Token 消耗与轮次，属高杠杆研发投入。 | 👍 1 · 7 评论 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 红模型前未确定性脱敏 | P2, Security | **数据泄露风险**：密钥进入模型上下文前未脱敏，合规隐患。 | 👍 0 · 3 评论 |
| [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) | 创建 Vite 应用卡在交互式提示符 | P2, Bug, Need Info | **行为评测缺失**：典型脚手架交互未被行为测试覆盖，暴露 Eval 盲区。 | 👍 0 · 2 评论 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/` 下软链接不被识别 | P2, Bug, Need Info | **开发体验细节**：共享/同步 Agent 配置常用软链，当前实现依赖实体文件扫描。 | 👍 0 · 4 评论 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 影响范围 | 链接 |
|---|------|------|----------|------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **Security**: 修复 `$VAR`/`${VAR}` 变量扩展绕过 (GHSA-wpqr-6v78-jr5g) | Open | 核心安全，命令注入防护深度加固 | 高优 |
| [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) | **Auth**: OAuth Token 交换改用原生 `fetch` 规避 "Premature close" | Open | Headless/CI 环境登录成功率 | 高优 |
| [#28469](https://github.com/google-gemini/gemini-cli/pull/28469) | **Core**: 模型回退时轮换 Session ID 防止有状态 API 报错 | Open | 闪退恢复路径稳健性 | 中优 |
| [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | **CLI**: 将 `gemini-3.5-flash` 加入所有用户模型选择器 | Open | 新模型即时可用，修复选择器遗漏 | 中优 |
| [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) | **Evals**: 新增 `eval:coverage` 命令统计内置工具覆盖率 | Closed → 已合入夜ly | 评测体系可观测性里程碑 | 高价值 |
| [#28509](https://github.com/google-gemini/gemini-cli/pull/28509) | **Core**: 禁用上下文管理时过滤 `thought` 片段防泄露 | Open | 推理链污染历史上下文 | 中优 |
| [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) | **Docs**: Windows PowerShell 安装故障排查指引 | Open | Windows 开箱即用体验 | 文档补全 |
| [#28431](https://github.com/google-gemini/gemini-cli/pull/28431) | **Infra**: PR 生成器 Cloud Run Job / Workflows / Dockerfile 基建 | Open | 自动化代码生成管道云原生化 | 架构演进 |
| [#28506](https://github.com/google-gemini/gemini-cli/pull/28506) | **CLI**: `/compress` 传递 `AbortSignal` 支持取消 | Closed | 长上下文压缩可中断，避免悬挂请求 | 体验优化 |
| [#28508](https://github.com/google-gemini/gemini-cli/pull/28508) | **Changelog**: v0.52.0 自动生成变更日志 | Open | 发布流程标准化 | 维护工程 |

---

## 5. 功能需求趋势（从 Issues 提炼）

1. **Agent 编排鲁棒性** ⬆️ **最高呼声**  
   - Subagent 状态机、超限处理、权限边界、配置继承（`settings.json` 被忽略 #22267）  
   - 期望：可观测轨迹（`/chat share` 含子代理 #22598）、自熔断、显式生命周期控制。

2. **评测与可观测体系建设** 📊  
   - 行为评测覆盖率（`eval:coverage` 已落地 #28169）、组件级评测 Epic (#24353)、Browser Agent 评测缺失 (#22465)。

3. **上下文与 Token 效能优化** ⚡  
   - AST 感知工具调研 (#22745)、工具注册动态裁剪 (#24246)、`thought` 泄露治理 (#28509)。

4. **跨平台与环境适配** 🐧🪟  
   - Wayland 支持 (#21983)、PowerShell 文档补全 (#28447)、Headless OAuth 稳定性 (#28446)。

5. **记忆系统安全与质量** 🧠🔒  
   - 确定性脱敏 (#26525)、低信噪隔离 (#26522)、补丁合法性守门 (#26523)。

---

## 6. 开发者关注点与痛点

| 痛点 | 典型反馈 | 建议关注方向 |
|------|----------|--------------|
| **“子代理不可控”** | “Generalist 一用就挂”、“超限却报成功”、“配置不生效” | 统一 Agent Runtime：状态机、超时/熔断、配置合并契约测试。 |
| **“Shell 交互不可预期”** | “命令跑完还在等输入”、“Vite 交互卡死” | 引入 PTY 期望匹配库（如 `expect` 模式）、行为评测覆盖常见脚手架。 |
| **“扩展性撞上硬限制”** | “>128 工具即 400”、“模型选择器漏模型” | 动态工具集加载、模型注册表自动发现、配置热更。 |
| **“记忆系统信任度低”** | “密钥进上下文”、“无限重试垃圾会话”、“软链不识别” | 脱敏前置、评分熔断、文件系统监听兼容软链/硬链。 |
| **“文档与诊断滞后”** | “Windows PowerShell 无指引”、“Bug 报告不含子代理上下文” | 平台化故障树文档、`/bug` 聚合子会话、CLI 自诊断命令。 |

---

> **下一版本看点**：v0.53.0 正式版预计合并 A2A 修复与 Triage 编排器；安全补丁 #28403 将回港至 0.52.x 维护分支；`eval:coverage` 将驱动工具覆盖率 KPI 纳入 CI 守门。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-23

---

## 1. 今日速览
**核心动态**：过去 24 小时内，Copilot CLI 连续发布 **v1.0.74-1 / -2 / -3** 三个补丁版本，重点引入 **Gemini 3.6 Flash 模型支持**、**首次运行沙箱选择引导**，并修复了会话复用时的选择器泄漏与交互式 Shell 快捷键问题。社区 Issue 活跃度极高（32 条更新），集中暴露 **Windows 原生崩溃**、**Tmux 环境下渲染/检测失效**、**子进程僵尸进程泄漏**、**ACP 认证回归** 及 **子代理计费遥测缺失** 等深层工程债务。唯一活跃 PR 为外部贡献的显示器配置，暂无核心功能合并。

---

## 2. 版本发布
### v1.0.74 系列 (v1.0.74-1 → -3) | [Release 页面](https://github.com/github/copilot-cli/releases)
| 版本 | 核心变更 | 影响面 |
|------|----------|--------|
| **v1.0.74-1** | **新增**：首次运行引导选择默认沙箱模式；**新增**：支持 `gemini-3.6-flash` 模型；**修复**：多会话复用时 Picker 泄漏、`$` 交互式 Shell 快捷键行为优化 | 全平台用户体验、模型生态扩展 |
| **v1.0.74-2 / -3** | 连续热修复（未单独列出 changelog，推测为针对 -1 引入的回归或平台特定崩溃的快速封堵） | 稳定性兜底 |

> **建议**：生产环境建议观察 24h 后再升级，关注 Windows 原生崩溃（#4217, #4219）与 Tmux 兼容性（#4223, #4212）是否已在 -2/-3 中修复。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 社区热度 | 优先级判定 |
|---|-------|--------|----------|------------|
| **#4217** | [Windows 退出崩溃：`uv_async_send` on closing handle](https://github.com/github/copilot-cli/issues/4217) | 进程退出必现 `FAST_FAIL_FATAL_APP_EXIT`，WinDbg 定位到 libuv 句柄管理缺陷 | 👍 1 | **P0 阻断级** — 影响所有 Windows 原生用户体验 |
| **#4219** | [Windows 开启通知即崩溃](https://github.com/github/copilot-cli/issues/4219) | 原生 Toast 路径触发 Access Violation，关闭通知即规避 | 👍 0 | **P0** — 可用性严重受损 |
| **#4222** | [#2802 回归：主面板冻结/无限渲染循环](https://github.com/github/copilot-cli/issues/4222) | VS Code 集成终端 + Windows 原生环境复现，`Maximum update depth exceeded` | 👍 0 | **P0** — 核心 UI 失效，曾修复现回归 |
| **#4223** | [Tmux 下 Shell 命令完成检测失效](https://github.com/github/copilot-cli/issues/4223) | 输出正常但 CLI 持续显示 "still running"，需手动中断 | 👍 0 | **P1** — 服务端/容器开发高频场景受阻 |
| **#4163** | [Linux 子进程僵尸进程泄漏 (~2/min)](https://github.com/github/copilot-cli/issues/4163) | 长会话导致 PID 表耗尽，需重启 CLI 释放 | 👍 2 | **P1** — 服务端长运行稳定性隐患 |
| **#4016** | [ACP 模式下 BYOK 认证被拒 (-32000)](https://github.com/github/copilot-cli/issues/4016) | `copilot --acp --stdio` 强制 GitHub 登录，`COPILOT_PROVIDER_*` 失效，**#3048 回归** | 👍 4 | **P1** — 企业自托管/代理模式核心链路断裂 |
| **#4224** | [子代理 OTel Span 缺失计费属性](https://github.com/github/copilot-cli/issues/4224) | 子代理调用丢失 `github.copilot.nano_aiu` 等属性，导致成本核算少算 | 👍 0 | **P1** — 企业级 FinOps 合规风险 |
| **#4218** | [Auto 模型池可配置化](https://github.com/github/copilot-cli/issues/4218) | 用户期望限制 Auto 模式可选模型范围，控制成本与行为 | 👍 6 | **P2** — 高赞功能需求，治理刚需 |
| **#443** | [内置 PDF 读取支持](https://github.com/github/copilot-cli/issues/443) | 学术/文档场景高频需求，现需手动 `pdftotext` | 👍 33 | **P2** — 长期高呼声，生态补全项 |
| **#4207** | [/usage 增加子代理信用消耗明细](https://github.com/github/copilot-cli/issues/4207) | 仅显示累计用量，无法归因到具体子代理调用 | 👍 6 | **P2** — 可观测性增强 |

---

## 4. 重要 PR 进展
| # | PR | 状态 | 摘要 | 评价 |
|---|----|------|------|------|
| **#3163** | [ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163) | Open | 外部贡献：针对显示器配置的 GitHub Actions Runner 初始化脚本 | **低相关性** — 疑似误提交或测试 PR，非核心代码库变更 |

> **说明**：过去 24h 仅此 1 条 PR 更新，核心团队主要精力在 Release 打包与 Issue 响应，无功能型 PR 进入审查流程。

---

## 5. 功能需求趋势（从 Issue 全量语义聚类）

| 趋势方向 | 代表 Issues | 社区呼声强度 | 备注 |
|----------|-------------|--------------|------|
| **企业级治理与成本可视化** | #4218 (模型池配置), #4207 (子代理用量明细), #4224 (计费遥测补全), #4016 (BYOK/ACP 认证) | ⭐⭐⭐⭐⭐ | 向企业级交付迈进的硬性缺口 |
| **跨平台稳定性修复** | #4217, #4219, #4222 (Windows), #4223, #4212 (Tmux), #4163 (Linux 僵尸进程) | ⭐⭐⭐⭐ | 当前版本最大技术债集中区 |
| **模型生态扩展** | #443 (PDF), #4218 (模型池), v1.0.74 新增 Gemini 3.6 Flash | ⭐⭐⭐ | 多模态/多模型策略落地 |
| **Agent/子代理工程化** | #4208 (显式调用), #4209 (skill 工具别名), #4161 (task_complete 回归), #4225 (协调器卡顿) | ⭐⭐⭐ | 从“可用”向“可控/可编排”演进 |
| **终端集成体验** | #3428 (OSC 133), #4212 (Tmux 渲染), #4223 (完成检测) | ⭐⭐ | 开发者日效工具链融合需求 |

---

## 6. 开发者关注点与痛点总结

1. **Windows 原生体验崩塌**：退出崩溃（`uv_async_send`）、通知崩溃、渲染循环回归 三大问题并发，表明 **Node/ink 在 Windows 控制台宿主下的生命周期管理** 存在系统性缺陷。
2. **Tmux/容器环境“二等公民”**：命令完成检测失效（#4223）、渲染暗文（#4212）、Picker 泄漏（#4225 相关），阻碍服务端/远程开发主流场景。
3. **ACP 协议与企业代理模式不稳**：BYOK 认证回归（#4016）、Xcode ACP 对接失败（#4227），说明 **ACP 适配层测试覆盖不足**。
4. **子代理可观测性缺失**：计费属性丢失（#4224）、用量不透明（#4207）、协调器调度黑盒（#4225），制约生产环境成本控制与调试。
5. **长会话资源泄漏**：僵尸进程（#4163）、上下文压缩阈值不可配（#1688）、MCP 工具 footprint 虚报（#4189），指向 **会话级资源生命周期管理** 需重构。

---

## 📌 明日关注建议
- **验证 v1.0.74-3** 是否修复 #4217/#4219/#4222 三大 Windows P0 问题；
- 关注 **#4016 (ACP BYOK)** 与 **#4163 (僵尸进程)** 是否有核心成员介入或里程碑规划；
- 观察 **#4218 (Auto 模型池配置)** 高赞需求是否纳入下个 Sprint。

> 数据截止：2026-07-23 08:00 UTC | 数据源：github.com/github/copilot-cli

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-23

---

## 1. 今日速览
- **核心修复响应迅速**：针对昨日新增的 `prompt_cache_key` 参数导致第三方兼容 API 报错 400 的阻塞性问题（#2534），官方已在数小时内提交修复 PR #2535，将该参数作用域限定为 Moonshot 官方 API。
- **Windows 兼容性持续受关注**：新增 `kimi web` 启动因 GBK 编码无法处理 Unicode Banner 字符崩溃的问题（#2532），暴露出 CLI 在中文 Windows 环境下重定向输出时的编码脆弱性。
- **架构演进需求浮现**：社区正式提出子 Agent 独立模型选择能力（#2533），标志着用户从“单模型对话”向“多模型编排、成本分层”工作流迈进。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 类型 | 重要性分析 | 社区热度 |
|---|---|---|---|---|
| [#2534](https://github.com/MoonshotAI/kimi-cli/issues/2534) | **Model API error 400 Validation: Unsupported parameter `prompt_cache_key`** | 🔴 **Critical Bug** | **阻塞性问题**。最新版引入的 `prompt_cache_key` 兼容性未做环境判断，导致所有第三方兼容端点（Nvidia NIM、本地部署等）全面不可用。已有修复 PR #2535。 | 👍 0 / 评论 0 (新建即关联修复) |
| [#2531](https://github.com/MoonshotAI/kimi-cli/issues/2531) | **MCP tool names & schemas rejected by Moonshot API (HTTP 400)** | 🔴 **Critical Bug** | **协议不兼容**。客户端发送的 MCP Tool Schema（含 `anyOf` 等标准 JSON Schema 特性）被 Moonshot API 拒绝，需客户端侧做 Schema 降级/清洗，影响工具调用核心功能。 | 👍 0 / 评论 1 |
| [#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318) | **Request reached organization TPD rate limit** | 🟡 **Performance/Infra** | **长期痛点复发**。TPD（Tokens Per Day）计算逻辑疑似异常或配额不足，影响高频用户。两个月未根治，建议官方公开限流策略或提供配额查询 API。 | 👍 2 / 评论 1 |
| [#2533](https://github.com/MoonshotAI/kimi-cli/issues/2533) | **Feature Request: Per-agent model selection for sub-agents** | 🟢 **Feature Request** | **架构级需求**。支持子 Agent 指定独立模型，解锁“廉价模型跑简单任务、强模型跑复杂任务”的成本分层编排，是 Agentic Workflow 成熟的关键一步。 | 👍 0 / 评论 0 |
| [#2532](https://github.com/MoonshotAI/kimi-cli/issues/2532) | **kimi web crashes at startup on Windows: UnicodeEncodeError (gbk)** | 🟠 **Compatibility Bug** | **Windows 体验破坏者**。中文 Windows 下 stdout 重定向触发 GBK 编码错误，导致 `kimi web` 无法在管道/后台运行。修复建议：启动时检测编码能力或移除非 ASCII Banner 字符。 | 👍 0 / 评论 0 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 核心变更 | 关联 Issue |
|---|---|---|---|---|
| [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) | **fix(llm): scope prompt cache keys to Moonshot APIs** | 🟢 Open | **紧急修复**。仅在官方 Moonshot/Kimi API 路径下发送 `prompt_cache_key`，第三方兼容层自动剥离，恢复生态兼容性。 | #2534 |
| [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) | **fix(tools): count StrReplaceFile replacements against running content** | 🟢 Open | **工具正确性修复**。`StrReplaceFile` 连续编辑时，替换计数基准从“原始内容”改为“运行时内容”，修复链式编辑计数错误及潜在的应用失败问题。 | #2526 |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | **fix(shell): stop blocking until timeout when detached child holds pipes** | 🟢 Open | **Shell 死锁修复**。前台 Shell 执行路径不再等待 stdout/stderr EOF 才检查退出码，解决后台进程（`cmd &`）持有管道导致主进程挂起至超时的问题。 | #2468 |

---

## 5. 功能需求趋势

1.  **多模型编排与成本控制** (#2533)
    *   核心诉求：`sub-agent` 解耦默认模型，支持按任务复杂度路由模型（如 Haiku/Sonnet/Opus 分层或 本地/云端 混合）。
    *   信号：用户已进入“Agent 编排”深度使用阶段，单一模型配置成为瓶颈。

2.  **生态兼容性优先级提升** (#2534, #2531)
    *   核心诉求：Kimi CLI 作为“兼容 OpenAI 协议的客户端”，需稳健支持第三方端点（NIM, Ollama, vLLM 等）及标准 MCP 协议。
    *   信号：厂商锁定策略与开放生态诉求冲突，客户端需做协议适配层（Schema Sanitization, Parameter Scoping）。

3.  **Windows 原生体验补齐** (#2532)
    *   核心诉求：解决中文代码页（CP936/GBK）下的 Unicode 输出、路径处理、信号量兼容性问题。

---

## 6. 开发者关注点与痛点总结

| 痛点分类 | 典型反馈 | 影响范围 | 建议优先级 |
|---|---|---|---|
| **破坏性更新缺乏守卫** | #2534 新参数未做 Feature Flag/环境检测直接上线，导致第三方用户版本锁定或回滚。 | 所有非官方 API 用户 | **P0** - 发布流程需加入兼容性矩阵测试 |
| **协议适配层缺失** | #2531 标准 JSON Schema (`anyOf`, `oneOf`) 直接透传给不支持的后端，客户端应负责降级。 | MCP/Tool Calling 用户 | **P1** - 引入 `SchemaSanitizer` 针对目标 Provider 清洗 |
| **配额透明度为零** | #2318 TPD 限流逻辑不透明，用户无法预判、无法查询剩余配额，仅能被动报错。 | 高频/企业用户 | **P1** - 提供 `kimi quota` 命令或 HTTP Header 返回配额信息 |
| **Windows 编码地雷** | #2532 启动 Banner 含 `➜` 导致重定向崩溃，典型的“开发环境全是 Linux/Mac”盲区。 | Windows 开发者 | **P0** - CI 必须包含 Windows 中文 Locale + 管道重定向测试 |
| **Shell 交互模型不完善** | #2530 后台任务持有管道导致阻塞，暴露出异步 I/O 处理模型对 POSIX/Win 信号量差异抽象不足。 | 依赖 Shell 执行复杂命令的用户 | **P1** - 重构 Shell Executor，引入 PTY 或显式管道管理 |

---

> **分析师备注**：今日社区动态呈现 **"修复债务偿还" 与 "架构升级诉求" 并行** 态势。官方对 #2534 的极速响应（Issue->PR < 小时级）值得肯定，但暴露出**发布前兼容性回归测试缺失**的流程漏洞。建议后续版本建立 "Provider Compatibility Matrix" 自动化测试，并尽快规划 #2533 多模型路由架构，这是 CLI 从“编码助手”进化为“AI 工作流引擎”的关键跃迁。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-23

---

## 1. 今日速览

**核心动态**：社区今日焦点集中在 **opencode-go 订阅服务大面积故障**（多用户反馈 "Request blocked by upstream provider"）、**桌面端 v1.18.4 连接不稳定** 以及 **Plan/Build 模式切换缺失** 三大阻塞性问题。同时，核心团队推进了 AI SDK 兼容性修复（prompt cache keys、finish reasons、OpenAI message phases）、TUI 主题 V2 迁移、以及动态模型加载等底层重构。高呼声功能需求集中于 **OpenAI 兼容端点模型自动发现**（#6231，185👍）、**LM Studio 模型完整枚举** 与 **资源占用优化**。

---

## 2. 版本发布

> 过去 24 小时无正式版本发布。仅有 `pr-38252-videos` 验证视频发布，属 PR 回归测试资料。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心诉求/现象 | 热度 | 关键信号 |
|---|-------|--------------|------|----------|
| 1 | [#6231](https://github.com/anomalyco/opencode/issues/6231) | **自动发现 OpenAI 兼容端点模型**（LM Studio/Ollama/llama.cpp） | 185👍 · 28评 | 最高呼声功能需求，解决本地模型频繁变更的手动维护痛点 |
| 2 | [#38218](https://github.com/anomalyco/opencode/issues/38218) | **opencode-go 订阅全模型报错 "Request blocked by upstream provider"** | 5👍 · 22评 | **P0 级故障**，付费用户完全不可用，涉及计费/认证链路 |
| 3 | [#38293](https://github.com/anomalyco/opencode/issues/38293) | 同订阅故障（俄语用户） | 15评 | 确认跨区域、多用户普发 |
| 4 | [#19466](https://github.com/anomalyco/opencode/issues/19466) | **空闲等待速率限制时 CPU 占用 ~50% 单核** | 11👍 · 15评 | 长期性能痛点，i9-14900 仍显著占用 |
| 5 | [#27018](https://github.com/anomalyco/opencode/issues/27018) | **v1.14.48+ localserver 频繁断连**（绿→红） | 2👍 · 12评 | 桌面端稳定性回归，影响核心交互 |
| 6 | [#37970](https://github.com/anomalyco/opencode/issues/37970) | **Plan/Build 模式切换选项消失**（v1.18.0+） | 1👍 · 10评 | 核心工作流断裂，多用户确认 |
| 7 | [#38421](https://github.com/anomalyco/opencode/issues/38421) | **v1.18.4 仍无 Build/Plan 切换** | 1评 | 今日新增，确认未修复 |
| 8 | [#38419](https://github.com/anomalyco/opencode/issues/38419) | **桌面端 1.18.4 本地服务器意外断连** | 1评 | 今日新增，疑似 v1.18.4 回归 |
| 9 | [#18011](https://github.com/anomalyco/opencode/issues/18011) | **LM Studio 仅显示 3/9 模型**（/v1/models 完整） | 4👍 · 6评 | 自动发现逻辑缺陷，阻断本地模型使用 |
| 10 | [#26220](https://github.com/anomalyco/opencode/issues/26220) | **工具调用后陷入无限循环**（Zen/big-pickle） | 3👍 · 6评 | 严重可用性缺陷，进程存活但无响应 |

> **关闭但值得关注**：#13817（FPS 限制远程办公）、#22144（工具执行耗时显示）、#38374（OpenAI incomplete_details 缺 reason 字段处理）已合并修复。

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#38424](https://github.com/anomalyco/opencode/pull/38424) | **Fix** | Provider 侧按 AI SDK 包选择 prompt cache key（OpenAI/Azure/xAI→`promptCacheKey`，DeepInfra/Cerebras→`prompt_cache_key`），兼容网关缓存 | 缓存命中率提升 |
| 2 | [#38423](https://github.com/anomalyco/opencode/pull/38423) | **Feat** | 保留原始 finish reason：新增 `LLMResponse.rawFinishReason`，覆盖 OpenAI Responses/Chat-compatible/Anthropic/Gemini/Bedrock | 调试与遥测增强 |
| 3 | [#38417](https://github.com/anomalyco/opencode/pull/38417) | **Fix (bot)** | 解码 OpenAI Responses `response.output_item.added` 保留 `commentary`/`final_answer` 阶段，follow-up 请求按阶段分割 | OpenAI 官方契约对齐 |
| 4 | [#38418](https://github.com/anomalyco/opencode/pull/38418) | **Fix** | **Web 模式修复客户端时间早于服务端导致模型不回复**，统一用 `created` 字段判断消息顺序 | #38268 |
| 5 | [#38401](https://github.com/anomalyco/opencode/pull/38401) | **Fix** | `/api/generate` 支持动态加载 AI SDK/原生 provider 包（如 `opencode/gemini-3.5-flash`） | 生成 API 兼容性 |
| 6 | [#38397](https://github.com/anomalyco/opencode/pull/38397) | **Refactor** | TUI 语法高亮直接从 V2 Theme 生成 `SyntaxStyle`，移除 V1 并行解析，保留 101 个 scope 映射 | 主题系统统一 |
| 7 | [#38414](https://github.com/anomalyco/opencode/pull/38414) | **Fix** | 迁移命名 agent 颜色：V1 schema 保留，legacy 命名色映射 `#aaaaaa`，六位十六进制不变 | 配置迁移兼容 |
| 8 | [#38067](https://github.com/anomalyco/opencode/pull/38067) | **Fix** | SessionReminders 边缘触发 build-switch 提醒（替代全量扫描历史），修复误提醒 | #38066 |
| 9 | [#37732](https://github.com/anomalyco/opencode/pull/37732) | **Fix** | 暴露空模型响应（stop + usage 但无 text/tool_call），避免静默丢弃 | #37735 |
| 10 | [#35050](https://github.com/anomalyco/opencode/pull/35050) | **Fix (contributor)** | 高行偏移读取优化：按换行符计数跳过，提升 `ReadTool.read` 大文件性能 | #35044 |

> **文档类**：#38395（Exa/Parallel 双后端补充）、#38033（印尼语 README）、#38022（opencode-hypa 插件收录）、#38413（oos 社区工具）。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 | 备注 |
|----------|------------|--------------|------|
| **本地/兼容模型零配置接入** | #6231 (185👍), #18011, #38401 | ⭐⭐⭐⭐⭐ | 核心增长点：Ollama/LM Studio/llama.cpp/vLLM 等 OpenAI 兼容层自动发现与动态加载 |
| **订阅/计费链路稳定性** | #38218, #38293, #38368 | ⭐⭐⭐⭐ | 付费用户核心体验，当前 **全挂**，需优先修复上游拦截与权限校验 |
| **桌面端连接与 UI 稳定性** | #27018, #38419, #37970, #38421, #38412 | ⭐⭐⭐⭐ | v1.18.x 回归明显：localserver 断连、Plan/Build 切换消失、对话后卡顿 |
| **资源占用与性能优化** | #19466 (CPU 空转), #36677 (V2 分配循环), #13817 (FPS 限制) | ⭐⭐⭐ | 长尾痛点，远程/长时运行场景放大 |
| **交互细节打磨** | #22144 (工具耗时), #34407 (LaTeX 渲染), #38350 (误关标签), #32165 (快速跳转) | ⭐⭐ | 质量分水岭，影响日效 |
| **便携/离线分发** | #38391 (USB 便携版) | ⭐ | 企业/教育/气隙场景刚需 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“付费即不可用”信任危机**  
   opencode-go 订

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-23

> 数据来源：`github.com/earendil-works/pi` | 统计窗口：过去 24 小时（Issue 更新 50 条，PR 更新 29 条）

---

## 1. 今日速览

*   **核心修复密集发布**：社区集中修复了 v0.80.x 版本引入的多个回归问题，包括 **HTTP 空闲超时配置失效（#6476）**、**GitHub 登录态异常丢失（#6686）**、**自定义键位绑定首次启动不生效（#6459）** 等高优先级 Bug。
*   **Provider 生态扩展与稳健性增强**：新增 **StepFun 原生 Provider（#6960）**、**OpenRouter OAuth 原生支持（#6927）**、**Amazon Bedrock Mantle Provider（#6216）**；同时修复了 Bedrock 配置文件忽略（#6957）、OpenAI WebSocket 连接恢复（#6955）及 SDK 重试机制不可中断（#6911）等核心稳定性问题。
*   **TUI 体验与架构打磨**：修复外部编辑器启动缓慢（#6774）、崩溃日志路径硬编码（#6652）、字形宽度计算对齐终端单元格（#6987），并引入 `AgentHarnessTool` 抽象（#6916）为 Agent 执行环境解耦奠基。

---

## 2. 版本发布

**无新版本发布**。当前活动集中在 `v0.80.6` 后的热修复与 `v0.81.x` 预备特性的合并上。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 核心矛盾/价值 | 社区热度 (👍/评论) | 状态 |
|---|-------|------|---------------|-------------------|------|
| **[#6476](https://github.com/earendil-works/pi/issues/6476)** | `httpIdleTimeoutMs` 对自托管 OpenAI 兼容 Provider 失效 | **P0 回归** | v0.80.6 升级后自托管模型（vLLM）请求超时，配置完全被忽略，阻塞生产环境使用。 | 12 评论 | **Closed** (已修复) |
| **[#6686](https://github.com/earendil-works/pi/issues/6686)** | Pi 自动登出 GitHub | **P0 回归** | 旧问题（#2725）复发，跨设备、跨版本（v0.80.7）频繁掉线，严重影响开发流连续性。 | 10 评论 | **Closed** |
| **[#6768](https://github.com/earendil-works/pi/issues/6768)** | Copilot Enterprise 许可下 Compaction 失败 | **P1 兼容性** | 企业级用户核心功能受阻，OpenAPI 返回 `421 Misdirected Request`，Anthropic 模型亦报错。 | 8 评论, **8 👍** | **Open** |
| **[#6210](https://github.com/earendil-works/pi/issues/6210)** | `/scoped-models` 无法选择含括号的模型 ID | **Bug** | 模型 ID 解析逻辑将 `[` `]` 视为正则特殊字符，导致自定义模型（如 `model[1m]`）无法选中。 | 8 评论 | **Open** (In Progress) |
| **[#6459](https://github.com/earendil-works/pi/issues/6459)** | 自定义键位绑定首次启动不生效，需 `/reload` | **Bug** | 扩展自定义 Editor 组件时，键位绑定加载时机早于扩展初始化，体验割裂。 | 7 评论 | **Closed** |
| **[#6774](https://github.com/earendil-works/pi/issues/6774)** | `Ctrl+G` 外部编辑器启动慢（`os.tmpdir()` 拥挤） | **性能优化** | 临时文件直接写入系统临时目录，文件数过多导致 `stat` 系统调用变慢。 | 7 评论 | **Closed** (已修复 #6903) |
| **[#6621](https://github.com/earendil-works/pi/issues/6621)** | 动态 System Prompt 导致缓存意外失效 | **性能/成本** | 本地模型 Prefill 慢，动态 Prompt 导致缓存无法命中，请求延迟飙升。 | 6 评论, 1 👍 | **Closed** |
| **[#6911](https://github.com/earendil-works/pi/issues/6911)** | OpenAI SDK 重试睡眠全量 `Retry-After` 且 `Escape` 无法中止 | **P0 体验/阻塞** | 遇到 429 时 SDK 睡眠数天不可打断，用户只能强杀进程。 | 5 评论 | **Closed** (已修复 #6980) |
| **[#6652](https://github.com/earendil-works/pi/issues/6652)** | TUI 崩溃日志硬编码 `~/.pi` 忽略 `PI_CODING_AGENT_DIR` | **Bug** | 自定义数据目录用户崩溃时日志写错位置，甚至在家目录创建垃圾目录。 | 4 评论 | **Closed** (已修复 #6958) |
| **[#6940](https://github.com/earendil-works/pi/issues/6940)** | OpenRouter 上 Anthropic 模型缓存断点停滞 | **Bug** | 连续 Tool 调用时缓存读取量不增，导致 Token 成本异常增长。 | 4 评论 | **Closed** |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 标题/核心变更 | 关联 Issue | 状态 |
|---|----|---------------|------------|------|
| **[#6980](https://github.com/earendil-works/pi/pull/6980)** | `fix(ai): make provider retries abortable` | **核心修复**：替换 OpenAI/Anthropic SDK 内部重试，统一实现：保留重试次数、强制最大延迟、支持 `AbortSignal` 中断（解决 #6911 “睡眠数天不可杀”问题）。 | #6911 | **Open** |
| **[#6987](https://github.com/earendil-works/pi/pull/6987)** | `fix(tui): align grapheme widths with terminal cells` | **TUI 基建**：修正字形簇宽度计算，解决 CJK/Emoji/组合字符在终端对齐、截断、光标定位错乱的长期顽疾。 | - | **Open** |
| **[#6960](https://github.com/earendil-works/pi/pull/6960)** | `feat(ai): add StepFun providers` | **新 Provider**：新增 4 个 StepFun 原生 Provider（中国/全球/预付费路由/全球预付费），基于 `models.dev` 规范接入。 | - | **Closed** |
| **[#6927](https://github.com/earendil-works/pi/pull/6927)** | `Add native OpenRouter OAuth support` | **认证增强**：原生支持 OpenRouter OAuth（PKCE S256 + 临时回调），返回的用户可控 API Key 同时支持文本/图像模型。 | - | **Closed** |
| **[#6916](https://github.com/earendil-works/pi/pull/6916)** | `feat(agent): add AgentHarness execution tools` | **架构重构**：引入 `AgentHarnessTool` 抽象，将执行上下文（环境、Session ID、Provider/模型/推理级别）注入工具执行层，解耦 Agent 核心与具体运行时。 | - | **Closed** |
| **[#6967](https://github.com/earendil-works/pi/pull/6967)** | `feat(coding-agent): expose session metadata to bash tools` | **开放能力**：Bash Tool 执行环境注入 `PI_SESSION_ID`、`PI_SESSION_FILE`、`PI_PROVIDER`、`PI_MODEL` 等元数据，便于子进程/脚本感知上下文。 | - | **Closed** |
| **[#6903](https://github.com/earendil-works/pi/pull/6903)** | `fix(coding-agent): speed up external editor launch` | **性能修复**：外部编辑器临时文件改为 `mkdtemp` 创建私有子目录，避免系统临时目录拥挤导致的 `stat` 慢（修复 #6774）。 | #6774 | **Closed** |
| **[#6984](https://github.com/earendil-works/pi/pull/6984)** | `feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream` | **Bedrock 兼容**：允许通过配置强制启用 Adaptive Thinking 格式，解决未在白名单内但需该格式的 Claude 模型请求报 `ValidationException`。 | #6986 | **Closed** |
| **[#6955](https://github.com/earendil-works/pi/pull/6955)** | `handle openai websocket previous_response_not_found error` | **韧性修复**：WebSocket 收到 `previous_response_not_found` 时自动清理缓存并重建连接，而非直接报错中断。 | #6931 | **Closed** |
| **[#6958](https://github.com/earendil-works/pi/pull/6958)** | `write tui debug/crash logs into the configured pi agent dir` | **规范修复**：崩溃日志写入 `PI_CODING_AGENT_DIR` 指定目录，修复硬编码 `~/.pi` 问题（修复 #6652）。 | #6652 | **Closed** |

---

## 5. 功能需求趋势（从 Issue/PR 提炼）

1.  **Provider 多元化与原生集成加速**
    *   新增 **StepFun**、**OpenRouter OAuth**、**Bedrock Mantle**；修复 **Bedrock Profile 优先级**、**OpenRouter 缓存断点**。
    *   趋势：从“配置兼容”向“原生 SDK 级集成”演进，重点解决认证流、思维链格式、计费归属等厂商差异。

2.  **企业级/团队协作功能补齐**
    *   **Copilot Enterprise Compaction 故障（#6768, 8👍）**、**OAuth 计费归属修正（#6979）**、**Session 元数据透传给子进程（#6967）**。
    *   趋势：企业用户对合规计费、SSO 认证、上下文压缩、审计追踪的刚性需求上升。

3.  **TUI 渲染与交互基建夯实**
    *   **字形宽度对齐单元格（#6987）**、**Markdown 代码块原始反引号渲染（#5566）**、**外部编辑器启动优化（#6903）**、**崩溃日志规范化（#6958）**。
    *   趋势：解决 CJK/Emoji 渲染、大文件/高频交互下的性能抖动，提升“终端原生 IDE”专业度。

4.  **Agent 执行环境解耦与可观测性**
    *   **AgentHarnessTool 抽象（#6916）**、**Bash 执行事件流（#6971）**、**结构化审批 API 提案（#5954）**。
    *   趋势：为多运行时（Node/Bun/Deno）、多前端、测试桩、安全沙箱预留扩展点。

5.  **配置与状态管理的鲁棒性**
    *   **键位绑定加载时机（#6459）**、**Scoped Model 解析转义（#6210）**、**动态 Prompt 缓存失效（#6621）**、**版本检查环境变量行为（#6977）**。
    *   趋势：消除“首次启动 vs 热加载”、“环境变量 vs 配置文件”不一致带来的困惑。

---

## 6. 开发者关注点（痛点与高频诉求）

| 痛点/诉求 | 典型 Issue/PR | 核心反馈 |
|-----------|---------------|----------|
| **升级即破坏** | #6476, #6686, #6678 | v0.80.x 连续小版本引入核心回归（超时、登录、类型错误），**缺乏回归测试覆盖**或**语义化版本约束**不足，生产环境不敢升级。 |
| **自托管/私有化部署支持不足** | #6476, #6957, #6986 | 自托管模型（vLLM/Ollama）、私有 Bedrock、非标准 Claude 模型常因“硬编码白名单”、“环境变量优先级错误”、“思维链格式强制”而失败。 |
| **长上下文/高频 Tool 的成本与性能** | #6621, #6940 | 本地模型 Prefill 慢、缓存命中率低、OpenRouter 缓存断点异常 → **Token 成本失控、延迟不可控**。 |
| **TUI 在复杂终端环境下的兼容性** | #6987, #5566, #6774 | CJK 对齐、Emoji 宽度、代码块渲染、临时目录竞争，**终端能力探测与降级策略缺失**。 |
| **扩展生态的分发与发现** | #6991, #6985, #6972 | `pi.dev/packages` 未收录合规扩展；恶意扩展跨 Session 污染（#6972）；**缺乏签名验证、沙箱隔离、自动审核流水线**。 |
| **可中断/可观测的长任务执行** | #6911, #6978, #6971 | SDK 重试不可杀、并发弹窗 Promise 泄漏、Bash 执行无进度事件 → **用户失控感强，调试困难**。 |

---

## 附录：关键链接速查

*   **Issue 看板**：<https://github.com/earendil-works/pi/issues>
*   **PR 看板**：<https://github.com/earendil-works/pi/pulls>
*   **v0.80.6 里

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-23

---

## 1. 今日速览
- **核心阻塞修复进行中**：主分支 CI 连续失败（E2E 测试红、Core 测试套件红），触发自动修复流程与多个热修复 PR 并行推进。
- **`web_fetch` / `enable_thinking` 致命 Bug 已修复并验证**：侧查询强制关闭 thinking 导致 400 错误的问题（#7284, #7440）已通过重试机制（#7534）与侧查询参数修正解决。
- **Web Shell 与 CLI 体验持续打磨**：新增 Shadow DOM 隔离、工作区级生成、Git 模式选择器、启动冷启动懒加载优化等前端/工程化改进。

---

## 2. 版本发布
### `v0.0.0-benchmark-poc.20260722.1` (Pre-release)
- **性质**：基准测试流水线验证版本，**非产品发布**。
- **目的**：验证 `GitHub Actions → ECS Benchmark Worker → GitHub 结果发布` 完整链路。
- **链接**：[Release Page](https://github.com/QwenLM/qwen-code/releases/tag/v0.0.0-benchmark-poc.20260722.1)

> ⚠️ **夜ly 发布失败**：`v0.20.1-nightly.20260723.d064bd7dc` 在 `quality` 阶段失败，详见 [#7549](https://github.com/QwenLM/qwen-code/issues/7549)。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 / 价值 | 状态 / 社区反应 | 链接 |
|---|-------|----------------|----------------|------|
| 1 | **#7284** `runSideQuery` 强制 `enable_thinking=false` 导致 TokenPlan 端点 400 | **P1 级阻塞**：`web_fetch`、分类器等核心工具完全不可用，影响所有依赖联网/侧查询的场景。 | ✅ **Closed** (已修复并合并 #7534) | [#7284](https://github.com/QwenLM/qwen-code/issues/7284) |
| 2 | **#7537** Core 测试套件在 main 分支红：Fork dispatch 测试卡在 `registry.complete` | **主分支断裂**：导致所有 PR CI 失败，阻塞合并流程。 | 🔴 **Open** (P1, 评论 2) | [#7537](https://github.com/QwenLM/qwen-code/issues/7537) |
| 3 | **#7516** Main CI 失败：E2E Tests 在 `d064bd7d` 失败 | **CI 红**：E2E 回归，自动化修复流程已介入 (`status/ready-for-agent`)。 | 🔴 **Open** (自动修复中, 评论 3) | [#7516](https://github.com/QwenLM/qwen-code/issues/7516) |
| 4 | **#7549** 夜ly 发布 `v0.20.1-nightly...` 失败于 `quality` job | **发布管道阻塞**：影响每日构建分发。 | 🔴 **Open** (Bot 创建, 评论 1) | [#7549](https://github.com/QwenLM/qwen-code/issues/7549) |
| 5 | **#7515 / #7520 / #7543** 更新检查彻底失效：`registry error` / npm 12 兼容 / `mise` wrapper 误判 | **用户感知强**：`/update` 与启动检查全挂，涉及 npm CLI 路径解析、npm 12 返回格式变更、mise shim 干扰。 | 🔴 **Open** (多 PR 并行修复 #7528, #7544) | [#7515](https://github.com/QwenLM/qwen-code/issues/7515) |
| 6 | **#7306** 强化工具输出预算、可观测性与制品生命周期 | **架构级增强**：Phase 1 完成，聚焦契约硬化、Shell 无制品回归覆盖、三态文档。 | 🟡 **Open** (P2, 评论 4, 关联 #7323, #7470) | [#7306](https://github.com/QwenLM/qwen-code/issues/7306) |
| 7 | **#7449** 提议：企业级外部记忆集成画像 (Provider-neutral) | **企业级扩展需求**：文档优先、兼容性测试增量、无 Core API 破坏。 | 🟡 **Open** (P3, 需讨论, 评论 4) | [#7449](https://github.com/QwenLM/qwen-code/issues/7449) |
| 8 | **#7264** 冷启动跟进：ACP 急切闭包审计后的剩余懒加载候选 | **性能关键**：ACP 子进程冷启动 17.24 MiB / 2420 模块急切加载，亟需拆分。 | 🟡 **Open** (P2, 评论 3) | [#7264](https://github.com/QwenLM/qwen-code/issues/7264) |
| 9 | **#7489** VS Code Companion：文件选择器插入 `@filename` 但图片未附带给模型 | **IDE 集成缺陷**：图片上传静默失败，严重影响多模态交互。 | 🔴 **Open** (需信息, 评论 3) | [#7489](https://github.com/QwenLM/qwen-code/issues/7489) |
| 10 | **#6577** Windows PowerShell / Terminal 中 `Alt+V` 无法粘贴剪贴板截图 | **长期平台 Bug**：v0.19.8 起持续存在，阻碍 Windows 用户图片输入。 | 🔴 **Open** (P2, welcome-pr, 评论 3) | [#6577](https://github.com/QwenLM/qwen-code/issues/6577) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 | 链接 |
|---|----|------|----------|------|------|
| 1 | **#7534** | **Bug Fix (Core)** | 侧查询 `enable_thinking=false` 遇 400 且提示需开启时，**自动重试并开启 thinking**；修复 #7284/#7440 根因。 | 🟢 Open | [#7534](https://github.com/QwenLM/qwen-code/pull/7534) |
| 2 | **#7512** | **Perf (Startup)** | **懒加载 `@google/genai` SDK**：移出 ACP Bootstrap 静态闭包，核心编排改用本地轻量实现，大幅减少冷启动体积。 | 🟢 Open | [#7512](https://github.com/QwenLM/qwen-code/pull/7512) |
| 3 | **#7551** | **Feat (Web Shell)** | **可选 Shadow DOM 隔离**：插件管理体与 Portal 树可独立隔离，样式同步注入，解决样式污染。 | 🟢 Open | [#7551](https://github.com/QwenLM/qwen-code/pull/7551) |
| 4 | **#7552** | **Feat (Serve)** | **工作区级无状态生成**：无需活跃 Session，通过 SSE 端点转发至 ACP 子进程，支持取消与生命周期锚定。 | 🟢 Open | [#7552](https://github.com/QwenLM/qwen-code/pull/7552) |
| 5 | **#7544** | **Bug Fix (CLI)** | 修复 `getNpmCliPath` 误把 `mise` 等非 JS wrapper 当 `npm-cli.js`，改用标准路径解析，修复 #7543。 | 🟢 Open | [#7544](https://github.com/QwenLM/qwen-code/pull/7544) |
| 6 | **#7528** | **Bug Fix (CLI)** | 更新检查改用 `npm view` 替代 `update-notifier`，规避 npm 12 全局模式报错数组导致的注册表错误 (#7515, #7520)。 | 🟢 Open | [#7528](https://github.com/QwenLM/qwen-code/pull/7528) |
| 7 | **#7501** | **Bug Fix (CLI)** | `serve` 端口回退时，**等待监听成功再返回/打开 URL**，修复 `--open` 打开旧端口 (#7500)。 | 🟢 Open | [#7501](https://github.com/QwenLM/qwen-code/pull/7501) |
| 8 | **#7541** | **Bug Fix (Core)** | 侧查询禁用 thinking 时，**保留显式配置的 `reasoning_effort: "none"`**，避免推理配置丢失。 | 🟢 Open | [#7541](https://github.com/QwenLM/qwen-code/pull/7541) |
| 9 | **#7471** | **Feat (Web Shell)** | **新会话创建新增 Git 模式选择器**：当前分支 / 新工作树 / 现有工作树，嵌入 composer git chip。 | 🟢 Open | [#7471](https://github.com/QwenLM/qwen-code/pull/7471) |
| 10 | **#7536** | **Feat (Core/Obs)** | **GenAI 遥测对齐 ARMS**：首批 LLM/Tool/Agent Span 属性与 OpenTelemetry GenAI 语义约定 & 阿里云 ARMS LLM Trace 字段对齐。 | 🟢 Open | [#7536](https://github.com/QwenLM/qwen-code/pull/7536) |

---

## 5. 功能需求趋势（从 Issues 提炼）

1. **企业级扩展与集成**  
   - 外部记忆标准化画像 (#7449)、DingTalk/WeCom/Feishu 渠道持久化与显式投递 (#7388, #7514)、数据隐私合规 (#7472)。
2. **冷启动与运行时性能**  
   - ACP 急切导入审计后续 (#7264)、Google GenAI SDK 懒加载 (#7512)、Web Shell 移动端 CodeMirror 修复 (#5958)。
3. **多模态与 IDE 深度融合**  
   - VS Code 图片上传修复 (#7489)、Web Shell Git 工作流选择器 (#7471)、Windows 截图粘贴 (#6577)。
4. **可观测性与遥测标准化**  
   - GenAI Span 对齐 OpenTelemetry/ARMS (#7536)、Insight 报告 UTC/Local 一致性 (#6835)。
5. **会话与计划可视化**  
   - 普通会话 Plan DAG 可视化与 Todo-子执行关联 (#7525)、恢复会话大空白区修复 (#7485)。
6. **工具链健壮性**  
   - `web_fetch` 自动降级 curl+本地解析 (#7298)、破坏性 Git 守卫补全 (#7531)、Cron 解析器 Vixie 语义对齐 (#7452)。

---

## 6. 开发者关注点（痛点与高频诉求）

| 痛点 / 需求 | 典型 Issue/PR | 影响面 | 当前进展 |
|-------------|--------------|--------|----------|
| **更新/安装链路频繁失效** | #7515, #7520, #7543, #7528, #7544 | 全量用户（启动、手动 `/update`） | 多 PR 修复中，npm 12/mise 兼容已推进 |
| **主分支 CI 不稳定阻塞合并** | #7516, #7537, #7480 | 所有贡献者 | 自动修复流程运行中，标签并发调度已优化 (#7480) |
| **Web Shell 移动端/样式隔离不可用** | #5958, #7551 | 移动端开发者、嵌入式场景 | Shadow DOM 可选隔离已提 PR |
| **Windows 原生体验缺失** | #6577 (Alt+V 截图), #7404 (启动超时) | Windows 开发者 | 长期 open，welcome-pr，缺人力投入 |
| **多模态输入在 IDE/WEB 静默失败** | #7489 (VS Code 图片), #7284/#7440 (web_fetch) | 多模态重度用户 | 核心 Bug 已修，VS Code 端待复现修复 |
| **企业级部署：渠道、审计、记忆、合规** | #7449, #7388, #7514, #7472 | 企业客户/私有化部署 | 文档优先推进，渠道持久化已合并部分 |

---

> **💡 观察员视角**：今日核心主线是 **“止血主分支 + 修复更新链路 + 推进企业级/可观测性基建”**。自动化修复 Bot (`qwen-code-dev-bot`, `fleet-shepherd`) 深度介入 CI/Release 流水线，体现项目向 **“自愈式工程”** 演进。建议关注 #7537 Core 测试修复合并后的连锁解锁效应。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-23

> **数据来源**: `github.com/Hmbown/CodeWhale`  
> **统计窗口**: 过去 24 小时（2026-07-22 ~ 2026-07-23）  
> **核心里程碑**: **v0.9.1 发布候选版本全栈交付**，多项 Release Blocker 已合并，安全扫描与体验打磨同步推进。

---

## 1. 今日速览

- **v0.9.1 正式冲刺**：核心运行时（PR #4675）、技能包（PR #4695）、统一 `/skills` 管理器（PR #4679）、Work 界面重构（PR #4711/4693/4697）、主题与截图更新（PR #4696/4508）等 **10+ 关键 PR 已合并**，版本发布门槛基本清空。
- **严重阻塞类 Issue 爆发**：macOS 启动即退出（#4716, *stop-ship*）、Windows 安装器破坏 PATH（#4715）、Composer 大文本粘贴字节损坏（#4719）、Provider 自动切换逻辑混乱（#4720）等 **P0 级回归** 于今日新增，需火线修复。
- **技术债与安全收尾**：Dependabot 17 个告警（7 High）已通过 PR #4714 批量修复；设置菜单遗留 DeepSeek 硬编码（#4717）、遗留命令别名清理（#4680）同步进行。

---

## 2. 版本发布

**暂无新版本发布**（Latest Release 仍为 v0.9.0）。  
当前 `main` 分支已集成 v0.9.1 完整功能集，处于 **“候选版验证 → 安全扫描 → 打包发布”** 最后阶段，预计未来 24-48 小时切 Tag。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心矛盾 | 优先级/标签 | 社区热度 | 关键进展 |
|---|-------|----------|-------------|----------|----------|
| **#4716** | **[stop-ship] TUI 启动即退出** | macOS 全新终端执行 `codew` 直接返回 `[Process completed]`，TUI 无法驻留 | 🔴 **Critical** / `bug` / `stop-ship` | 新建 0 评论 | 作者 Hmbown 确认 v0.9.1 candidate `0.9.1 (0dfe917)` 复现，阻断发布 |
| **#4685** | **Windows 安装器覆盖用户 PATH** | `CodeWhaleSetup.exe` 直接覆盖而非追加 PATH，导致原有工具链失效 | 🔴 **Critical** / `bug` / `windows` | 1 评论 | 用户 MuRongMoQing 报告，影响面广，需修复安装脚本 |
| **#4719** | **Composer 大段粘贴字节损坏** | 多行长提示词粘贴后路径截断、字符丢失，导致下游 Agent 读取错误路径 | 🔴 **Critical** / `bug` / `composer` | 新建 0 评论 | Hmbown 复现，定位为输入层编码/缓冲问题 |
| **#4720** | **Provider/模型自动切换逻辑不透明** | 运行时自动 `deepseek → zai` 切换，无用户感知，端点/模型 ID 配对混乱 | 🟠 **High** / `bug` / `ux` / `provider` | 新建 0 评论 | 需梳理切换触发条件、UI 提示与配置持久化 |
| **#4717** | **设置菜单残留 DeepSeek 硬编码** | 非 DeepSeek Provider（如 `zai/GLM-5.2`）下仍显示 “DeepSeek fallback model” | 🟠 **High** / `bug` / `ui` / `cleanup` | 新建 0 评论 | 典型 v0.8 遗留，需统一配置 Schema 渲染 |
| **#4718** | **Transcript 信息密度过高** | 每个 Tool Card 重复 “Option+V” 提示，Reasoning 状态堆叠冗余 | 🟡 **Medium** / `ux` / `tui` | 新建 0 评论 | 视觉节奏优化，配合 #4676 色彩体系 |
| **#4684** | **`danger-full-access` 未关闭 Tools 层边界检查** | 沙箱已关但 `read_file`/`grep` 仍拦截跨工作区访问，Global Skill 失效 | 🟡 **Medium** / `bug` / `tools` / `security` | 2 评论 | 需统一权限检查入口 |
| **#4683** | **DeepSeek Completions URL 报错** | 间歇性 `https://api.deepseek.com/v1/chat/completions` 请求失败 | 🟡 **Medium** / `bug` / `network` | 1 评论 | 疑似 DNS/中间件抖动，需加重试与降级 |
| **#4682** | **自定义 Provider 导致启动崩溃** | 设置自定义 Provider 名称后 `codewhale` 直接退出 | 🟡 **Medium** / `bug` / `config` | 1 评论 | 配置校验缺失 |
| **#4085** | **macOS File Provider (Dropbox/iCloud) 读写失败** | `~/Library/CloudStorage/` 路径下所有文件操作失效，非沙箱问题 | 🟢 **Low** / `bug` / `macos` / `filesystem` | 4 评论 | 长期遗留，v0.9.3 里程碑 |

> **筛选依据**：`stop-ship`/`release-blocker` 标签 > 评论数/更新时间 > 影响面（跨平台/核心链路）> 社区讨论热度。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue | 影响范围 |
|---|----|------|----------|------------|----------|
| **#4675** | Integrate CodeWhale v0.9.1 runtime and release surface | ✅ **Merged** | 运行时简化、空 Work 修复、公共发布面、TUI 色彩语法（Cool/Warm 模式） | #4670, #4671, #4676, #4677 | **全栈** |
| **#4679** | feat(skills): unified `/skills` manager with audit & owned mutations | ✅ **Merged** | 统一技能管理入口：inventory/audit/install/update/remove/trust，跨 project/global/compatible roots | #4651, #4650 | **技能系统** |
| **#4695** | feat(skills): default CodeWhale skill pack (bundled v5) | ✅ **Merged** | 内置 14 个端到端技能，含 interview/plan/implement/debug/test/review/security-review 等 | #4691 | **产品交付** |
| **#4711** | fix(tui): focus v0.9.1 chrome on todos and agents | ✅ **Merged** | 顶栏仅渲染活跃 To-dos + Sub-agents；可拖拽分割器；Theme-native composer rails | #4700, #4699 | **TUI/UX** |
| **#4693** | fix(tui): Work summary lifecycle, actionable title, top-area hierarchy | ✅ **Merged** | 非持久失败 4s 过期；耐久行保留；标题可操作化 | #4688, #4702, #4701 | **Work 面板** |
| **#4696** | feat(tui): ship staged `/uwu` theme | ✅ **Merged** | 新增 `uwu`/`owo`/`kawaii` 主题，空状态软经典鲸标 | #4677 | **主题系统** |
| **#4694** | fix(kimi): fail closed on K3 model-ID cross-pairings | ✅ **Merged** | 修复 `api.kimi.com`/`api.moonshot.ai` 两条路由的模型 ID 互用导致的静默失败 | #4687 | **Provider/Kimi** |
| **#4714** | chore(deps): patch npm lockfiles for Dependabot alerts | 🟢 **Open** | `npm audit fix --package-lock-only` 修复 17 个告警（7 High），涉及 axios/protobufjs/brace-expansion 等 | #4713 | **供应链安全** |
| **#4680** | fix(tui): register debt compatibility aliases | ✅ **Merged** | 注册 `/slop` `/canzha` 为 `/debt` 别名，统一入口 | #3914 | **命令系统** |
| **#4686** | feat(minimax): add China / Token Plan provider routes for minimaxi.com | 🟢 **Open** | 新增 `minimax-cn`、`minimax-anthropic-cn` 等 4 条中国区路由 | — | **Provider 扩展** |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 社区呼声强度 | 备注 |
|----------|---------------|--------------|------|
| **Provider 生态多元化与自动路由** | #4720, #4686, #4683, #4682, #4694 | ⭐⭐⭐⭐⭐ | 从单一 DeepSeek 向多 Provider（Kimi/Z.ai/Minimax/Custom）演进，**自动切换策略、健康检查、显式用户确认** 成核心诉求 |
| **技能系统产品化** | #4695, #4679, #4651, #4227 | ⭐⭐⭐⭐ | `/skills` 统一入口、审计、信任链、默认技能包落地，**“技能即一等公民”** 架构成型 |
| **TUI 体验精细化（密度/节奏/主题）** | #4718, #4676, #4677, #4696, #4699, #4711 | ⭐⭐⭐⭐ | 视觉节奏、色彩语法、空状态、交互密度、主题原生化全链路打磨 |
| **跨平台原生兼容性** | #4685, #4716, #4085, #4684 | ⭐⭐⭐⭐ | Windows PATH、macOS 启动/文件系统、权限模型统一，**阻断发布的 P0 级问题集中在平台适配层** |
| **供应链安全与依赖治理** | #4713, #4714, #4715, #4493, #4661, #4668 | ⭐⭐⭐ | 17 个 Dependabot 告警集中修复，Rust/JS 双生态同步升级，发布门禁硬性指标 |

---

## 6. 开发者关注点与痛点

1. **“它能跑起来吗？”—— 启动与安装的基础可用性**  
   - macOS `#4716` 直接阻断评估；Windows `#4685` 破坏开发环境。**安装器签名、入口点健壮性、跨 Shell 兼容性** 成为信任基石。

2. **“我的上下文去哪了？”—— 输入/会话完整性**  
   - `#4719` 粘贴损坏、 `#4681` `<turn_meta>` 泄露、 `#4718` 信息过载。**Composer 输入管线、Transcript 序列化、渲染管线** 三大链路需端到端测试覆盖。

3. **“谁在用哪个模型？”—— Provider 可观测性**  
   - `#4720` 隐式切换、 `#4683` 间歇性失败、 `#4682` 自定义崩溃。**运行时路由决策日志、UI 实时徽标、配置 Schema 版本化** 缺一不可。

4. **“技能怎么分发/审计？”—— 供应链信任链**  
   - `#4679`/`#4695` 落地了 `trust`/`audit`/`owned mutations`，但 **第三方技能签名验证、版本锁定、离线安装** 仍是社区高频追问。

5. **“发布节奏太快怎么跟上？”—— 开发者体验工程化**  
   - `#4227` 明确提出 “10+ PRs/day” 环境同步痛点，**自动化环境引导、变更日志分级、破坏性变更迁移脚本** 需求强烈。

---

## 📌 明日关注点建议

- **火线修复**：`#4716` `#4685` `#4719` 三大 P0 阻断发布，建议设立 **“v0.9.1-hotfix”** 分支并行修复，主分支保持绿色。
- **安全收尾**：PR `#4714` 审核合并后，执行 `cargo audit` + `npm audit` 双引擎扫描，出具 SBOM 附件。
- **文档同步**：`#4672`/`#4721` 设置菜单审计与公共发布核对，确保 README/Website/Changelog/In-app Help **四端一致**。
- **回归测试补充**：针对 macOS File Provider (`#4085`)、Windows PATH、Composer 大文本、Provider 切换四大场景补充 **E2E 自动化用例**，纳入 CI Gate。

---

*报告生成时间：2026-07-23 08:00 UTC | 下次更新：2026-07-24 同一时间*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*