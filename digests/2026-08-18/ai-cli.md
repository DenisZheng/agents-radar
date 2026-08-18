# AI CLI 工具社区动态日报 2026-08-18

> 生成时间: 2026-08-18 00:51 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-08-18

---

## 1. 生态全景

当前 AI CLI 赛道已从“模型能力比拼”转入**“工程化落地与生产级稳定性”**的深水区。头部工具（Claude Code、OpenAI Codex、Gemini CLI、Qwen Code）同步推进**企业级合规（OTEL/代理/沙箱）、跨端会话状态一致性、长上下文/多模态原生支持**三大基建；中腰部工具（OpenCode、Pi、DeepSeek TUI）聚焦**协议兼容性修复、Agent 编排可靠性、配置迁移标准化**等生存性痛点。Windows 原生体验、MCP 生态成熟度、会话/上下文管理鲁棒性成为**全行业共性短板**。版本发布节奏呈现“小步快跑、夜间构建验证、专项修复 Sprint”特征，核心竞争力已从单轮对话质量转向**长任务自主执行的成功率与可观测性**。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 热点 Issues (精选/Top) | 重要 PR (精选/Top) | 社区更新特征 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **1** (v2.1.234) | 10 | 10 | 修复型发布为主，Windows GPU 崩溃、跨会话消息丢失为 P0 阻塞性回归 |
| **OpenAI Codex** | **1** (rust-v0.148.0-alpha.21) | 10 | 10 (含 6 连 OTEL PR) | 基建狂魔：OTEL 合规链路、Linux 沙箱加固、GPT-5.6 872k 上下文同步上线 |
| **Gemini CLI** | **1** (Nightly v0.56.0) | 10 | 7 (截取) | “SSR Agent”专项攻坚：15+ PR 合并，集中修复子代理恢复、ACP 合规、沙箱网络 |
| **GitHub Copilot CLI** | **0** | 10 (29 更新/6 新建) | **1** | 社区高热低合：1.0.79 引入 OAuth 回归、Watchdog OOM、Alt-screen 移除引发强烈不满 |
| **Kimi Code CLI** | **0** | 0 | 0 | **静默期**，过去 24h 无任何公开活动 |
| **OpenCode** | **0** | 10 | 10 | 服务端点 410 退役引发生产事故，MCP 工具暴露失败、Windows 兼容性为核心矛盾 |
| **Pi** | **0** | 10 | 10 (合并 15+) | 无版本但合并量大：自动压缩失效(P0)、多模态、推理预算标准化、Provider 扩展并行 |
| **Qwen Code** | **1** (v0.21.13) | 10 | 10 | 发布与基建同步：Web Shell 增强、Autofix 容器化验证、增量 Review、Windows 回归修复 |
| **DeepSeek TUI** | **1** (v0.9.9) | 10 | 10 | “真相与韧性”版本：修复 Shell 楔死、模型目录更新、CI 双平台全绿、配置/Schema 债务显性化 |

> **数据说明**：Issues/PR 数为日报中“精选/Top 10”条目数，不代表全量总数。Claude Code、Codex、Gemini、Qwen Code 保持“日更 Release/夜间构建”高频节奏；Copilot CLI 处于“版本停摆、债务爆发”期。

---

## 3. 共同关注的功能方向（跨工具高频诉求）

| 方向 | 关注工具 (代表性 Issue/PR) | 核心诉求一致性 |
| :--- | :--- | :--- |
| **MCP 生态稳健性与协议合规** | **Codex** (#17265 OAuth 刷新、#39101 rmcp 升级)、**Gemini** (#28870 ACP 合规、#28869 gVisor 网络)、**Copilot** (#4439/4480 OAuth 回归、#4211 BigInt 崩溃)、**OpenCode** (#33027 工具不暴露、#43074 Token 并发刷新)、**DeepSeek TUI** (Schema 过度复杂 #5324) | **极高**。从“能连上”转向“认证自动化、Schema 标准化、生命周期可观测、沙箱网络互通”，已成插件生态生死线。 |
| **跨端/跨会话状态一致性** | **Claude** (#86298/86237 消息丢失回归)、**Codex** (#37403 远程恢复失败、#23418 Worktree 不同步)、**Gemini** (#22093 禁用模式下子代理仍跑)、**Qwen** (#9320 压缩+回滚丢失、#9354 Transcript 契约)、**OpenCode** (#24153 归档不可恢复、#43133 并发劫持) | **极高**。多端同步、会话迁移、压缩/回滚状态保真、并发安全是长任务可用性的基石。 |
| **Windows 原生体验与稳定性** | **Claude** (#80444/81341 GPU 崩溃 MSIX 签名冲突)、**Codex** (#25317 WSL 污染、#33282 权限继承丢失、#38754 MCP 进程泄漏)、**Qwen** (#9061 Ctrl+V 失效、#9324 消息重复)、**OpenCode** (#36681 路径权限、#41370 postinstall 存根)、**DeepSeek TUI** (#2369 配置路径碎片化) | **高**。头部工具均面临 GUI/MSIX/WSL/终端渲染三重夹击，专项治理迫在眉睫。 |
| **Agent/子代理编排可靠性** | **Claude** (#81343 9.5GiB OOM、#28300 A2A 协议)、**Codex** (#15723 唤醒机制、#13491 上下文隔离)、**Gemini** (#21409 挂起、#21968 不主动用 Skill)、**Qwen** (Daemon 资源无上界 #8051)、**OpenCode** (#1425 子任务超时无补偿)、**Pi** (#8166 扩展消息破坏 tool_calls) | **高**。从“能跑通”向“资源可控、状态可追踪、失败可补偿、协议可互操作”演进。 |
| **企业级合规与可观测** | **Codex** (OTEL Proxy 6 连 PR、#39103 Linux 沙箱 Cap-drop ALL)、**Claude** (#30692 容器隔离示例、#72451 防火墙清理)、**Gemini** (#24353 组件级评测体系)、**OpenCode** (#40125 MCP 服务器级信任配置) | **中高**。大厂出品工具内推合规基建，外溢为开发者提供零信任部署参考架构。 |
| **长上下文/多模态/推理预算原生化** | **Codex** (GPT-5.6 872k)、**Gemini** (AST 感知工具评估 #22745)、**Pi** (#3200 视频/音频、#8275 思考预算通用化)、**Qwen** (SWE-bench/Terminal-Bench 验证流水线)、**DeepSeek TUI** (上下文压缩阈值可配 #5239) | **中**。模型能力前置，工具层需提供 Token 管理、多模态输入管线、思考预算显式控制。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 当前战略重心 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **企业级/专业开发者首选** | Electron + TUI，强调安全沙箱、Hook 机制、技能系统 | 追求极致代码质量、安全合规、复杂重构场景的高阶工程师/团队 | **稳定性兜底**：修复 Windows GPU/消息丢失回归；**非打断式交互**设计探索 |
| **OpenAI Codex** | **云原生/企业合规标杆** | Rust 重写，OTEL 全链路、bubblewrap 沙箱、Remote Control 多端架构 | 依赖 OpenAI 生态、需审计合规、长上下文大仓库、多设备协作的团队 | **基建极致化**：OTEL 代理合规、Linux 最小权限、872k 上下文、Agent Dashboard 产品化 |
| **Gemini CLI** | **Google 生态/大规模自动化** | TypeScript/Monorepo，SSR Agent 架构、ACP 协议原生、强评测体系 | Google Cloud 用户、追求 Agent 自主完成率、需组件级可观测的自动化团队 | **SSR 专项攻坚**：子代理恢复保真、ACP 合规、沙箱网络、自动补全体验闭环 |
| **GitHub Copilot CLI** | **GitHub 生态/零配置入口** | Node/TypeScript，深度绑定 GitHub 平台

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-18）

---

## 1. 热门 Skills 排行（Top 8）

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|------|------------|----------|--------------|------|
| 1 | **skill-creator 评估体系修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 召回率恒为 0% 的核心缺陷，涉及 Windows 流读取、触发检测、并行 worker | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556) 12 条评论，揭示技能创建器“优化对象是噪声”的根本问题 | 🟢 OPEN |
| 2 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质量控制：孤行/寡行、标题孤立、编号错位 | 解决“用户极少主动要求好排版，但差排版极大降低可读性”的长尾痛点 | 🟢 OPEN |
| 3 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 全栈测试模式库：Testing Trophy、AAA 模式、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 回应社区对“标准化测试指导”的强烈需求，覆盖单元到混沌测试全谱系 | 🟢 OPEN |
| 4 | **self-audit (v1.3.0)** [#1367](https://github.com/anthropics/skills/pull/1367) | 交付前自审：机械文件验证 → 四维推理审计（严重性优先），通用于任意技术栈 | 配合 Issue [#1385](https://github.com/anthropics/skills/issues/1385) “推理质量三闸管线”提案，探索“交付前质量门禁”新范式 | 🟢 OPEN |
| 5 | **ServiceNow 平台技能** [#568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/ITOM/ITAM/SAM/FSM/HRSD/CSM/SPM/SecOps/IntegrationHub 的企业级平台助手 | 近期仍在更新（2026-08-12），反映大型企业平台技能化需求旺盛 | 🟢 OPEN |
| 6 | **skill-quality-analyzer / skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 元技能：从结构、文档、安全、维护性、可用性五维度评审 Skill 质量 | 奠定“Skill 评审标准化”基石，配合 Issue #202（已关闭）推动 skill-creator 最佳实践落地 | 🟢 OPEN |
| 7 | **ODT 技能** [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument 格式创建/填充/解析/转 HTML，支持 ISO 标准文档流程 | 填补开源办公套件（LibreOffice）生态空白，触发词覆盖 ODT/ODS/ODF/OpenDocument | 🟢 OPEN |
| 8 | **pyxel 复古游戏开发** [#525](https://github.com/anthropics/skills/pull/525) | 基于 pyxel-mcp 的 8-bit/像素风游戏开发全流程：写→运行捕获→检查→迭代 | 展示“MCP + Skill”组合玩法，拓展技能边界至创意编码与游戏原型 | 🟢 OPEN |

> **注**：所有展示 PR 均为 OPEN 状态，仓库近期合并活动较少，社区讨论集中在“工具链修复”与“新技能提案”两大类。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 核心诉求 | 热度指标 |
|----------|------------|----------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) (43 评论) | 社区技能冒用 `anthropic/` 命名空间，诱导用户授予过高权限；需官方命名空间治理与签名验证 | ⭐⭐⭐⭐⭐ 最高讨论量 |
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) (16 评论, 8 👍) | 支持 Claude.ai 内部直接共享/安装技能，替代“下载→传文件→手动上传”原始流程 | ⭐⭐⭐⭐ 企业级强需求 |
| **技能触发/评估机制修复** | [#556](https://github.com/anthropics/skills/issues/556) (12 评论, 7 👍) | `claude -p` 无法触发技能，导致 skill-creator 评估体系完全失效 | ⭐⭐⭐⭐ 阻塞技能开发闭环 |
| **技能包管理去重** | [#189](https://github.com/anthropics/skills/issues/189) (6 评论, 9 👍) | `document-skills` 与 `example-skills` 安装重复内容，污染上下文窗口 | ⭐⭐⭐ 规范化迫切 |
| **上下文窗口压缩/治理** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 评论) | `claude-api` 技能单次注入 156k tokens 耗尽上下文；需懒加载/摘要机制 | ⭐⭐⭐ 新兴痛点 |
| **推理质量门禁/自治** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 评论) | 三闸管线：任务前校准 → 对抗性审查 → 交付验证，配合 #1367 self-audit 落地 | ⭐⭐⭐ 前沿探索 |
| **跨平台/云原生支持** | [#29](https://github.com/anthropics/skills/issues/29) (4 评论) | Bedrock 等云厂商环境下的技能可用性 | ⭐⭐ 长尾需求 |
| **Skill 即 MCP 暴露** | [#16](https://github.com/anthropics/skills/issues/16) (4 评论) | 将 Skill 标准化为 MCP 接口，实现“技能即服务” | ⭐⭐ 架构演进方向 |

---

## 3. 高潜力待合并 Skills（评论活跃、接近落地）

| PR | Skill | 关键进展 | 落地概率 |
|----|-------|----------|----------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评估链路全修复** | 关联核心 Issue #556，修复 Windows 流读取、触发检测、并行 worker，解决“优化对象是噪声”根因 | ⭐⭐⭐⭐⭐ **极高**（阻塞性修复） |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows 兼容性补丁包** | 两个 PR 同期推进，修复 `claude.cmd` 识别、编码、管道读取三大顽疾 | ⭐⭐⭐⭐ **高**（多贡献者并行） |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 内容完备覆盖全测试栈，无架构争议，仅待审核合规性 | ⭐⭐⭐⭐ **高** |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 解决通用文档痛点，实现细节充分，依赖极少 | ⭐⭐⭐⭐ **高** |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 奠定技能治理基础设施，配合 CONTRIBUTING.md (#509) 同期推进 | ⭐⭐⭐ **中高** |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit v1.3.0** | 与 Issue #1385 形成“提案+实现”闭环，四维审计模型已成型 | ⭐⭐⭐ **中高** |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | 近期仍在迭代（8/12 更新），企业级技能典范，文档与覆盖度均达标 | ⭐⭐⭐ **中高** |

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：修复“技能创建-评估-分发”工具链的基础信任与可用性缺陷（命名空间冒用、评估体系失效、Windows 不兼容、重复安装），并建立技能质量治理与组织级共享的标准化基础设施——新技能提案虽多，但“能不能用、敢不敢信、怎么共享”才是落地前提。**

---

## 附：关键链接速查
- 仓库：https://github.com/anthropics/skills
- 核心缺陷 Issue：[#556](https://github.com/anthropics/skills/issues/556) | [#492](https://github.com/anthropics/skills/issues/492) | [#228](https://github.com/anthropics/skills/issues/228)
- 核心修复 PR：[#1298](https://github.com/anthropics/skills/pull/1298) | [#1099](https://github.com/anthropics/skills/pull/1099) | [#1050](https://github.com/anthropics/skills/pull/1050)
- 治理基建 PR：[#83](https://github.com/anthropics/skills/pull/83) | [#509](https://github.com/anthropics/skills/pull/509) | [#1538](https://github.com/anthropics/skills/pull/1538)

---

# Claude Code 社区动态日报 | 2026-08-18

---

## 1. 今日速览

- **发布 v2.1.234**：新增 `CLAUDE_CODE_PROJECT_DIR_NAME` 环境变量（便于多会话配置目录管理）与 `selection:clear` 键位绑定，属小版本工程化改进。
- **Windows 桌面端 GPU 崩溃持续发酵**：多个 Issue（`#80444`、`#81341`、`#85540`）指向同一根因——MSIX 签名策略与 SwiftShader 冲突导致 GPU 进程频繁崩溃，甚至触发应用修复循环，严重影响 Windows 用户体验。
- **跨会话消息丢失成系统性回归**：`#86298`、`#86237` 显示 2.1.222→2.1.227 版本间引入回归，消息在 UI 渲染但未进入运行时队列，或被静默丢弃，阻断多会话协作流程。

---

## 2. 版本发布

### v2.1.234 (2026-08-17)
| 变更 | 说明 |
|------|------|
| `CLAUDE_CODE_PROJECT_DIR_NAME` 环境变量 | 可选配置，允许为每项目的 transcript 目录指定短名称，解决多会话共享配置目录时的命名冲突 |
| `selection:clear` 键位动作 | 新增可绑定的清空选择操作，提升 TUI 交互可定制性 |

🔗 [Release 详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 热度 | 核心痛点/价值 | 为什么重要 |
|---|------|------|------|---------------|------------|
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | **Feature Request: Message queue mode** | ✅ Closed | 💬60 👍198 | 需在任务进行中排队后续指令，而非强制中断 | 高赞社区呼声，反映“非打断式交互”刚需；虽已关闭但设计方向值得跟进 |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop: fatal GPU-process crash (0x060C201E)** | 🟢 Open | 💬39 👍5 | 浏览器标签触发 GPU 崩溃，导致 MSIX 包不可启动，需修复 | **阻塞性 Bug**，影响所有 Windows Store 版用户，涉及 Electron/Chrome/驱动多层交互 |
| [#19649](https://github.com/anthropics/claude-code/issues/19649) | **Model overuses Bash tools (sed/grep) vs builtin Read/Grep** | 🟢 Open | 💬27 👍97 | 模型偏好调用低效 Bash 命令而非原生工具 | **Token 效率/成本痛点**，97 赞表明普遍性；关联模型训练与工具调度策略 |
| [#28300](https://github.com/anthropics/claude-code/issues/28300) | **Multi-agent collaboration across machines (A2A protocol)** | 🟢 Open | 💬38 | 跨机器多智能体协作协议缺失 | **架构级需求**，指向分布式 Agent 编排，长期演进方向 |
| [#81341](https://github.com/anthropics/claude-code/issues/81341) | **MSIX: CIG + vk_swiftshader.dll kills GPU on browser preview** | 🟢 Open | 💬21 👍3 | 微软签名策略与 SwiftShader 冲突，每次预览必崩 | 与 `#80444` 同根因，提供更具体技术定位（CIG/ vendor-signed DLL） |
| [#86298](https://github.com/anthropics/claude-code/issues/86298) | **Windows Desktop: cross-session messages silently dropped** | 🟢 Open | 💬13 👍1 | 消息被挂起等待从未出现的批准，~5 分钟过期 | **回归 Bug**，破坏多会话工作流，版本区间 2.1.222→2.1.227 可复现 |
| [#86237](https://github.com/anthropics/claude-code/issues/86237) | **Desktop: cross-session messages render but never reach runtime queue** | 🟢 Open | 💬8 👍1 | UI 显示消息但运行时未收到，同属跨会话回归 | 与 `#86298` 互补，确认消息管道在 UI→Runtime 段断裂 |
| [#81343](https://github.com/anthropics/claude-code/issues/81343) | **Background subagent balloons to 9.5 GiB → kernel OOM** | 🟢 Open | 💬5 | 单后台子代理 100s 内匿名 RSS 激增触发全局 OOM | **内存泄漏/资源失控**，Linux 无 swap 环境下致命，关联 `run_in_background` 实现 |
| [#64568](https://github.com/anthropics/claude-code/issues/64568) | **macOS: Esc in /btw mode rejects pending tool-use prompt** | 🟢 Open | 💬10 👍9 | 按 Esc 本意退出模式，却误触发拒绝工具调用 | **交互一致性缺陷**，肌肉记忆导致误操作，9 赞显示高频遇见 |
| [#86865](https://github.com/anthropics/claude-code/issues/86865) | **VS Code Ext 2.1.233: Fable 5 thinking blocks empty** | 🟢 Open | 💬3 👍4 | 思维块返回空字符串，Opus 5 正常，2.1.228 正常 | **IDE 集成回归**，精准定版到 2.1.233，阻断思维链可视化 |

> **备注**：`#63566`、`#87191`、`#87214` 等已关闭 Issue 涉及技能包加载过量、会话时间感知异常，虽已修复但反映技能系统与上下文管理的深层隐患。

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 核心变更 | 影响面 |
|---|------|------|------|----------|--------|
| [#87395](https://github.com/anthropics/claude-code/pull/87395) | ralph-wiggum: use disable-model-invocation | ✅ Closed | 安全/插件 | 修复 `/ralph-loop` 可被模型自触发导致无限循环 | 插件沙箱安全机制验证 |
| [#72451](https://github.com/anthropics/claude-code/pull/72451) | fix: remove statsig.anthropic.com from init-firewall.sh | ✅ Closed | 基建/防火墙 | 移除已失效的统计域名，修复 devcontainer 启动解析失败 | 开发环境稳定性 |
| [#79131](https://github.com/anthropics/claude-code/pull/79131) | fix: validate-settings.sh not abort on no lowercase frontmatter match | 🟢 Open | 脚本健壮性 | 避免 grep 返回 1 导致 `set -e` 中止，改为优雅处理 | 配置校验流程鲁棒性 |
| [#30692](https://github.com/anthropics/claude-code/pull/30692) | feat: add container isolation example with guard hook | ✅ Closed | 示例/安全 | 新增 Podman/Docker 容器隔离示例 + `guard-destructive-git` Hook | 企业级部署参考架构 |
| [#29284](https://github.com/anthropics/claude-code/pull/29284) | docs: clarify excludedCommands requires :* suffix | ✅ Closed | 文档 | 明确 `excludedCommands` 需 `"docker:*"` 形式匹配带参命令 | 配置陷阱规避 |
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | fix(plugin-dev): limit frontmatter parsing | ✅ Closed | 插件工具 | 仅解析首个 YAML 前言块，拒绝无闭合标记文件 | 插件加载器正确性 |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | fix(scripts): propagate top-level failures | ✅ Closed | 脚本工程化 | 修复 `.catch(console.error)` 吞掉退出码，改为正确传播失败 | CI/CD 脚本可靠性 |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | fix(scripts): validate gh flag values | ✅ Closed | 脚本工程化 | 校验 `--limit` 等带值参数，防止参数漂移绕过 wrapper | GitHub CLI 封装安全性 |
| [#83992](https://github.com/anthropics/claude-code/pull/83992) | fix(plugin-dev): assert expected hook decision | ✅ Closed | 测试/插件 | `test-hook.sh` 新增 `--expect allow|deny|ask`，可断言 Hook 判定 | Hook 测试从“跑通”进化到“判定正确” |
| [#83990](https://github.com/anthropics/claude-code/pull/83990) | fix(plugin-dev): report missing jq dependency | ✅ Closed | 测试/插件 | 显式检查 `jq` 存在性，避免误报 JSON 格式错误 | 开发者体验/错误诊断 |

> **趋势**：近期 PR 多集中于 **脚本工程化修复**、**插件/开发工具链完善**、**容器化部署示例** —— 侧重生产可用性而非核心功能新增。

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 | 备注 |
|----------|------------|--------------|------|
| **非打断式交互 / 消息队列** | `#50246` (198👍) | ⭐⭐⭐⭐⭐ | 核心工作流痛点，虽关闭但需求未消失 |
| **跨会话/跨机器协作** | `#28300`, `#86298`, `#86237` | ⭐⭐⭐⭐ | 从“多标签”向“分布式会话”演进 |
| **Windows 桌面端稳定性** | `#80444`, `#81341`, `#85540`, `#86125` | ⭐⭐⭐⭐ | GPU/签名/架构兼容三重奏，急需专项攻坚 |
| **模型工具调度优化** | `#19649` (97👍), `#87191` | ⭐⭐⭐⭐ | 内置工具 vs Bash 的成本/效率博弈 |
| **技能系统精细化** | `#87191`, `#871

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 2026-08-18

---

## 1. 今日速览

OpenAI Codex 今日发布 **rust-v0.148.0-alpha.21** 预览版；社区热度集中在 **自动确认倒计时配置化（#28969，195 👍）**、**MCP OAuth 令牌自动刷新失效（#17265，57 👍）**、**macOS Desktop 远程控制会话恢复回归（#37403）** 三大痛点。PR 侧重点在 **OTEL 代理链路完善（6 连 PR）**、**Agents 仪表盘与 TUI 交互增强**、**Linux 沙箱能力收敛**、**GPT-5.6 上下文窗口扩容至 872k** 等基础设施与体验提升。

---

## 2. 版本发布

| 版本 | 类型 | 关键变更 |
|------|------|----------|
| **rust-v0.148.0-alpha.21** | 预览版 | 无详细 changelog，属于 0.148 系列持续迭代；建议关注后续稳定版发布说明。 |

> 🔗 [Release 页面](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 标签 | 👍 | 评论 | 核心痛点 / 价值 | 链接 |
|---|------|------|-----|------|----------------|------|
| **#28969** | 新增设置：禁用 60 秒自动确认倒计时 | bug, CLI, config, plan | **195** | 79 | **最高热度**。用户强烈要求可配置化“问题自动解决”倒计时，避免误触发破坏上下文。 | [#28969](https://github.com/openai/codex/issues/28969) |
| **#17265** | MCP OAuth 令牌不自动刷新（虽存 refresh_token） | bug, auth, mcp | **57** | 31 | 远程 MCP 服务器访问凭证过期后完全失效，需手动重登，阻断长任务。 | [#17265](https://github.com/openai/codex/issues/17265) |
| **#37403** | macOS Desktop 无法恢复 Remote Control / CLI 线程 | bug, app, app-server, remote, regression | **17** | 21 | 8.7 更新后回归：移动端发起的远程会话在桌面端打开报 `already has an active writer`。 | [#37403](https://github.com/openai/codex/issues/37403) |
| **#15723** | 后台子进程/子代理完成后不唤醒调用方 | bug, subagent | **8** | 18 | 子代理静默结束导致主流程卡死，影响多代理协作可靠性。 | [#15723](https://github.com/openai/codex/issues/15723) |
| **#17793** | Backspace 删除多字符，输入体验差 | bug, TUI | **5** | 16 | TUI 编辑器退格键行为异常，严重影响提示词编写效率。 | [#17793](https://github.com/openai/codex/issues/17793) |
| **#23418** | 移动端创建的 worktree 线程不出现在 Desktop 侧边栏 | bug, app, session, remote | **4** | 12 | 跨端线程关联断裂，项目视图不完整。 | [#23418](https://github.com/openai/codex/issues/23418) |
| **#13491** | Forked Worker 继承父意图并误判为直接指令 | bug, subagent | **11** | 10 | 递归委派导致子代理行为偏离预期，需隔离上下文。 | [#13491](https://github.com/openai/codex/issues/13491) |
| **#33282** | Desktop create_thread 不继承 worktree 自动批准模式 | bug, windows-os, sandbox, app, app-server | **5** | 9 | Windows 下新线程丢失权限继承，需重复确认。 | [#33282](https://github.com/openai/codex/issues/33282) |
| **#25317** | Windows + WSL 重启后 shell 污染残留，arg0 helper 路径泄漏 | bug, windows-os, tool-calls, app, app-server, regression | **3** | 8 | 旧问题恶化：`unified_exec=false` 仍残留 Linux 路径导致进程启动失败。 | [#25317](https://github.com/openai/codex/issues/25317) |
| **#38754** | Windows App 单任务内反复重复生成 stdio MCP 进程 | bug, windows-os, mcp, app, performance | **2** | 7 | 资源泄漏与性能抖动，CLI 同配置正常。 | [#38754](https://github.com/openai/codex/issues/38754) |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心变更 | 影响面 | 链接 |
|---|------|------|----------|--------|------|
| **#39115** | 移除实验性线程配置端点 | ✅ Closed | 清理 `experimental_thread_config_endpoint`，统一远程线程配置加载路径 | 简化配置模型，减少兼容性负担 | [#39115](https://github.com/openai/codex/pull/39115) |
| **#39114** | 新增 `codex agents` 仪表盘命令 | ✅ Closed | 独立命令查看所有代理概览，自动启动/连接后台 app-server | **核心交互增强**：多会话统一管理入口 | [#39114](https://github.com/openai/codex/pull/39114) |
| **#39113** | 实时会话中浮现交互式请求 | ✅ Closed | 将执行/权限/补丁审批、用户输入请求镜像到实时对话提示审查 | 提升人机协作可见性 | [#39113](https://github.com/openai/codex/pull/39113) |
| **#39112** | Agents 概览变为交互式任务仪表盘 | ✅ Closed | 支持启动/重命名/停止任务，宽终端显示详情，仅展示根会话 | 配合 #39114 形成完整 Dashboard 闭环 | [#39112](https://github.com/openai/codex/pull/39112) |
| **#39091~#39105** | **OTEL Proxy 6 连 PR**（1/6~6/6） | ✅ 全 Closed | 统一代理感知 HTTP 传输、自定义 CA、阻塞/异步双模、Windows 高权限遥测代理策略传播 | **企业级合规关键**：全链路代理合规、证书透传、遥测不漏报 | [#39105](https://github.com/openai/codex/pull/39105) |
| **#39103** | Linux 沙箱进程剥离所有 Capability | ✅ Closed | `bubblewrap --cap-drop ALL` + 运行时校验 effective/permitted 为空 | **安全加固**：最小权限原则，防提权 | [#39103](https://github.com/openai/codex/pull/39103) |
| **#39102** | GPT-5.6 最大上下文窗口提升至 872k tokens | ✅ Closed | `gpt-5.6-sol/terra/luna` 覆盖上限 872k，同步生成 Bedrock 条目 | **长上下文解锁**：大型代码库一次性送入 | [#39102](https://github.com/openai/codex/pull/39102) |
| **#39101** | 升级 rmcp 至 3.1.2 | ✅ Closed | 原生 JSON-RPC 解码、保留 `input_required` 元数据、OAuth 受保护资源元数据 | MCP 协议栈现代化，兼容性提升 | [#39101](https://github.com/openai/codex/pull/39101) |
| **#39100** | 避免历史插入时重复查询终端尺寸 | ✅ Closed | 复用已有屏幕尺寸缓存，减少 TUI 绘制抖动 | 性能微优化，提升大历史加载流畅度 | [#39100](https://github.com/openai/codex/pull/39100) |
| **#39098** | Exec-server 请求全链路追踪（入队→完成） | ✅ Closed | 入队即起 span，覆盖派发、响应、网络策略回调、错误结果 | 可观测性增强，便于排查超时/熔断 | [#39098](https://github.com/openai/codex/pull/39098) |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issues | 社区呼声强度 | 备注 |
|----------|-------------|--------------|------|
| **可配置化与个性化** | #28969（自动确认倒计时）、#32817（折叠代码片段）、#35626（终端标题含线程名） | ⭐⭐⭐⭐⭐ | 用户希望将更多“强制行为”改为可选配置 |
| **跨端会话无缝衔接** | #37403、#23418、#32519（ChatGPT↔Codex 双向切换）、#35351 | ⭐⭐⭐⭐ | 移动/桌面/CLI 三端状态同步仍有断层 |
| **MCP 生态稳健性** | #17265（OAuth 刷新）、#33599（Desktop 丢失 node_repl）、#38754（进程泄漏） | ⭐⭐⭐⭐ | MCP 成核心扩展点，认证与生命周期管理需产品级可靠性 |
| **子代理/多代理编排** | #15723（唤醒机制）、#13491（上下文隔离）、#38762/38761（迁移导致历史丢失） | ⭐⭐⭐ | 从“单代理”向“代理团队”演进，编排基建薄弱 |
| **Windows / WSL 原生体验** | #25317、#33282、#38518（IO 狂读）、#38908、#32878 | ⭐⭐⭐ | Windows 占比高但问题密集，亟需专项治理 |
| **TUI/CLI 交互细节打磨** | #17793（Backspace）、#36010（/resume 筛选重置）、#39021（Spreadsheet skill） | ⭐⭐ | 日常高频操作的“纸切”体验累积不满 |
| **企业级合规与可观测** | #22230（OTel 记录响应）、#39091~#39105（OTEL Proxy 全家桶）、#39098 | ⭐⭐⭐ | 内部推进中，外部开发者亦受益于代理/证书透传 |

---

## 6. 开发者关注点总结

| 痛点 / 高频需求 | 典型反馈 | 优先级建议 |
|-----------------|----------|------------|
| **“被动式”自动确认破坏可控性** | “60 秒倒计时根本不够看，误触直接跑偏” (#28969) | **P0** — 新增 `auto_resolve_timeout` 配置项（含 0=禁用） |
| **MCP 认证“设置即遗忘”失效** | “refresh_token 明明存了却不刷新，半夜任务全挂” (#17265) | **P0** — 实现定期/被动刷新机制，并暴露健康检查端点 |
| **跨端会话身份不统一** | “手机上开的线程，电脑上找不到；Remote Control 一恢复就报错” (#37403, #23418) | **P1** — 统一线程 ID 命名空间，Desktop 侧边栏按项目聚合远程线程 |
| **子代理编排不可观测、不可控** | “子任务结束没通知、上下文污染、迁移后历史没了” (#15723, #13491, #38762) | **P1** — 引入子代理生命周期事件总线，迁移工具补全 projected history |
| **Windows / WSL 基础设施不稳** | “重启后 shell 坏了、IO 狂读卡死、MCP 进程泄漏” (#25317, #38518, #38754) | **P1** — 专项 Sprint：路径规范化、IO 后台任务节流、进程回收器 |
| **TUI 编辑器基础交互有 Bug** | “Backspace 删多字、/resume 筛选不记忆” (#17793, #36010) | **P2** — 引入集成测试矩阵覆盖常用终端 |
| **企业级网络合规缺口** | “代理/自签 CA

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-18

---

## 1. 今日速览
今日核心动态集中在 **“SSR Agent” 批量修复专项** 上，官方团队（主要由 `joneba-google` 推进）合并/提交了 15+ 个 PR，集中修复了子代理恢复逻辑、ACP 协议合规性、自动补全体验、沙箱网络连通性、权限控制回归等高优先级缺陷。同时，社区高呼声 Issue 聚焦于 **Agent 稳定性（挂起、误报成功）、Memory 系统质量、Shell 执行卡顿** 等核心可靠性痛点。新发布的 Nightly 版本仅包含 TS 配置微调。

---

## 2. 版本发布
### `v0.56.0-nightly.20260817.g9a15c45fb` (Nightly)
*   **变更**: 在 `packages/cli` 的 `tsconfig.json` 中添加 `composite` 标志。
*   **关联 PR**: [#28813](https://github.com/google-gemini/gemini-cli/pull/28813) (by @joneba-google)
*   **影响**: 构建系统优化，支持 TypeScript Project References，加速增量编译。无用户可见功能变更。

---

## 3. 社区热点 Issues (Top 10)
*按评论数、优先级(P1/P2)及社区关注度筛选*

| # | Issue | 核心问题 | 优先级/标签 | 关注理由 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent 恢复后误报 GOAL 成功 | 子代理触及 `MAX_TURNS` 限制后，恢复执行 `complete_task` 导致终止原因被覆盖为 `GOAL`，掩盖了中断事实。 | **P1**, `area/agent`, `status/need-retesting` | **已修复** (PR [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) 已合并)。关键可靠性修复，影响 Agent 执行结果的可信度。 |
| **2** | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist Agent 频繁挂起 | 触发通用代理后无限等待（甚至 1 小时），禁用子代理可规避。严重阻断主流程。 | **P1**, `area/agent`, 👍 **8** | 核心功能阻塞性 Bug，社区痛点极高，亟需 Root Cause 分析。 |
| **3** | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** 组件级评测体系建设 | Epic 级任务：针对 76 个行为评测用例，在 6 种模型上建立稳健的组件级评估管线。 | **P1**, `aiq/eval_infra`, `workstream-rollup` | 工程化质量保障核心基建，关乎长期模型行为一致性。 |
| **4** | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST 感知工具价值评估 | 探索 AST 级读取/搜索/映射是否能减少 Token 消耗、Turn 数及噪声。 | **P2**, `kind/customer-issue`, 👍 **1** | 潜在架构升级方向，关联 `codebase_investigator` 能力上限。 |
| **5** | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** 模型极少主动使用 Skills/Sub-agents | 即使任务高度相关，模型也不自动调用自定义技能或子代理，需显式指令。 | **P2**, `area/agent`, `workstream-rollup` | 核心 Agentic 行为缺失，影响扩展生态价值发挥。 |
| **6** | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell 命令执行完成后卡在 "Waiting input" | 简单命令执行完毕但 TUI 仍显示活跃并等待输入，频繁发生。 | **P1**, `area/core`, 👍 **3** | 交互层严重 Bug，直接破坏 CLI 核心交互体验。 |
| **7** | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory 无限重试低信噪会话 | 提取器跳过低质量会话导致其永留在 Inbox，反复被调度，资源浪费。 | **P2**, `area/agent` | Memory 系统工程化缺陷，需引入隔离/熔断机制。 |
| **8** | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser Subagent 在 Wayland 下失败 | Linux Wayland 环境下浏览器代理无法启动/运行。 | **P1**, `agent/browser`, 👍 **1** | 平台兼容性阻塞，影响 Linux 开发者群体。 |
| **9** | **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser Agent 会话接管与锁恢复增强 | 持久化模式下遇到 Profile 锁即报错退出，缺乏自动接管/恢复能力。 | **P3**, `kind/customer-issue`, `kind/feature` | 生产力工具鲁棒性需求，用户期望“它就能工作”。 |
| **10**| **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)** v0.33.0 回归：禁用 Agent 模式下子代理仍运行 | 配置 `agents: disabled` 但 Generalist 等子代理仍被初始化执行。 | **P2**, `status/need-retesting` | **已修复** (PR [#28867](https://github.com/google-gemini/gemini-cli/pull/28867) 已合并)。配置权威性回归修复。 |

---

## 4. 重要 PR 进展 (Top 10)
*聚焦已合并修复、高优先级功能及架构重构*

| # | PR | 标题/功能 | 状态 | 关键点 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **[#28870](https://github.com/google-gemini/gemini-cli/pull/28870)** | **ACP 合规修复**: 请求权限前发送 `pending` 状态工具调用更新 | **Open (P1)** | 修复 ACP 协议违规，确保 IDE/客户端能正确感知工具调用生命周期。 |
| **2** | **[#28869](https://github.com/google-gemini/gemini-cli/pull/28869)** | **gVisor 沙箱网络修复**: 解决 `runsc` 下 VSCode 扩展连接失败 | **Open (P2)** | 解决严格沙箱模式下 Host 网络隔离导致的 IDE 伴生扩展连通性问题。 |
| **3** | **[#28815](https://github.com/google-gemini/gemini-cli/pull/28815)** | **子代理终止原因保真**: 恢复阶段保留原始中断原因 | **Merged (P1)** | 修复 #22323，防止 `MAX_TURNS`/`TIMEOUT` 被误报为 `GOAL`，提升可观测性。 |
| **4** | **[#28867](https://github.com/google-gemini/gemini-cli/pull/28867)** | **权限控制回归修复**: Agent 模式禁用时阻止子代理加载 | **Merged (P2)** | 修复 #22093 (v0.33.0 回归)，`loadBuiltInAgents` 时机调整至配置检查之后。 |
| **5** | **[#28812](https://github.com/google-gemini/gemini-cli/pull/28812)** | **TUI 启动挂起修复**: 增加 `getProcessInfo` 执行超时 | **Merged (P1)** | 修复 #21477，Linux 裸终端下 `ps` 命令卡死导致 "Initializing..." 永久等待。 |
| **6** | **[#28868](https://github.com/google-gemini/gemini-cli/pull/28868)** | **自动补全体验优化**: 可执行命令建议追加尾随空格 | **Merged (P2)** | 修复 #23954，Tab 补全后可直接回车执行，消除手动加空格摩擦。 |
| **7** | **[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)** |

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-08-18

---

## 1. 今日速览

过去 24 小时无新版本发布，但社区活跃度极高：**29 个 Issue 被更新**，其中 6 个为今日新建。核心矛盾集中在 **MCP/OAuth 认证回归（1.0.79 引入）**、**会话/上下文管理内存泄漏与强制压缩**、**跨平台终端渲染与交互体验退化** 三大领域。开发者对 `SHIFT+ENTER` 等基础交互长期未修复、`--no-alt-screen` 被静默移除表达强烈不满。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 核心看点 | 热度 (👍/评论) | 链接 |
|---|------|------|----------|----------------|------|
| **#1481** | `SHIFT+ENTER` 应换行却误触发执行 | **CLOSED** | **基础交互违反直觉**，违背通用聊天应用惯例（Ctrl+Enter 换行），困扰用户 6 个月+，高赞未修复。 | 17 / 28 | [查看](https://github.com/github/copilot-cli/issues/1481) |
| **#4390** | 组织启用的模型（Claude Sonnet 5/Opus 5, Kimi K3）在目录中缺失 | **OPEN** | **企业级模型治理失效**：Business 组织显式启用的模型 CLI 不可见，报错 "disabled by org"，阻断团队统一模型策略。 | 7 / 8 | [查看](https://github.com/github/copilot-cli/issues/4390) |
| **#4439** | **1.0.79 回归**：GitLab MCP OAuth 因 RFC 8414 issuer mismatch 拒绝连接 | **CLOSED** | **认证栈破坏性变更**：1.0.79 引入严格 issuer 校验，导致 Self-Managed GitLab MCP 认证全面失效。 | 3 / 5 | [查看](https://github.com/github/copilot-cli/issues/4439) |
| **#4480** | **1.0.79 回归**：Atlassian MCP OAuth "Incompatible authorization server" | **OPEN** | 同根同源的 OAuth 回归，影响主流 SaaS MCP 接入，1.0.71 正常，标注 `area:authentication, area:mcp`。 | 6 / 5 | [查看](https://github.com/github/copilot-cli/issues/4480) |
| **#4506** | 内存压力看门狗在 23% 上下文占用时疯狂强制压缩，回收 0.003% 导致 OOM 循环 | **OPEN** | **严重性能缺陷**：Watchdog 逻辑错误（未校验上下文压力直接压缩），导致长会话不可用，需紧急修复。 | 0 / 0 | [查看](https://github.com/github/copilot-cli/issues/4506) |
| **#4509** | `--no-alt-screen` 被静默移除，alt-screen 强制开启且破坏终端工作流 | **OPEN** | **交互倒退**：移除逃生通道且无替代，破坏 tmux/screen/滚动历史等核心场景，关联 #1799、#2334 长期未解。 | 1 / 0 | [查看](https://github.com/github/copilot-cli/issues/4509) |
| **#4211** | MCP 结构化响应含 `BigInt` 导致序列化崩溃 | **OPEN** | **类型系统缺口**：工具返回大整数直接抛 `TypeError: Do not know how to serialize a BigInt`，中断所有任务。 | 2 / 4 | [查看](https://github.com/github/copilot-cli/issues/4211) |
| **#4515** | MCP 同时返回 `content` 与 `structuredContent` 时双重注入上下文 | **OPEN** | **协议合规性**：违反 MCP 规范（应优先使用 structuredContent），污染上下文窗口。 | 0 / 1 | [查看](https://github.com/github/copilot-cli/issues/4515) |
| **#4512** | MCP 注册表策略拉取失败时，错误地阻断用户自定义本地 stdio MCP | **OPEN** | **策略引擎 Fail-closed 过度**：无托管策略时应放行本地 MCP，现阻断用户自建服务。 | 0 / 0 | [查看](https://github.com/github/copilot-cli/issues/4512) |
| **#4508** | 长会话无法热加载 `.github/instructions` 更新（跨 200+ compaction 边界） | **OPEN** | **指令同步缺失**：指令仅会话初加载，长周期会话无法感知仓库规范变更，影响团队协作一致性。 | 0 / 0 | [查看](https://github.com/github/copilot-cli/issues/4508) |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 | 链接 |
|---|------|------|------|------|
| **#4510** | 从 README 移除 GitHub Copilot CLI 文档 | **OPEN** | 疑似文档迁移或重构前置动作，删除了安装/使用指南，需关注后续文档落地位置。 | [查看](https://github.com/github/copilot-cli/pull/4510) |

> 过去 24 小时仅 1 个 PR 更新，社区主要精力集中在 Issue 排查与讨论。

---

## 5. 功能需求趋势（从全量 Issue 提炼）

| 趋势方向 | 代表性 Issue | 核心诉求 |
|----------|--------------|----------|
| **MCP 生态稳定性与合规** | #4439, #4480, #4211, #4515, #4461, #4512 | OAuth 发现/校验回归修复、BigInt 序列化、structuredContent 语义遵循、Docker 容器生命周期管理、策略引擎宽容度 |
| **会话/上下文工程增强** | #4506, #4505, #4508, #4313, #4514 | 修复 Watchdog 误触发、恢复会话连接 ID 失效、指令热加载、历史滚动浏览、远程会话本地恢复 |
| **模型与 Agent 策略一致性** | #4390, #2950, #4275, #4459 | 组织模型目录同步、Agent 自定义模型生效、ACP 暴露 contextTier、Auto 模式推理级别失败 |
| **终端交互与无障碍体验** | #1481, #4509, #4485, #4455, #4313 | 键位映射遵循通用约定、Alt-screen 可选、主题跟随系统、会话选择器对比度、历史导航 |
| **插件/市场化基建** | #4487, #4507, #4513 | 插件依赖解析、非交互模式识别仓库级插件、市场缓存按 ref 隔离 |

---

## 6. 开发者关注点（Pain Points & High-Frequency Asks）

1. **“别再搞破坏性更新却不通知”**  
   - `--no-alt-screen` 静默移除（#4509）、OAuth 校验收紧导致 1.0.71→1.0.79 无缝升级变全量故障（#4439, #4580）、无 Deprecation Notice 直接断流。

2. **“长会话基本不可用”**  
   - 内存看门狗误判触发强制压缩（#4506）、恢复会话连接 ID 失效（#4505）、指令不热更（#4508）、AIC 统计严重偏差（#4511）、无法本地恢复远程会话（#4514）。

3. **“企业级治理在 CLI 失效”**  
   - 组织启用模型不可见（#4390）、仓库级插件配置非交互模式不生效（#4507）、MCP 注册表策略误伤本地开发（#4512）。

4. **“基础交互细节打磨缺位”**  
   - `SHIFT+ENTER` 行为反直觉 6 个月未修（#1481）、主题随合盖翻转（#4485）、会话列表选中态低对比度（#4455）、缺乏历史滚动（#4313）。

5. **“MCP 协议落地不严谨”**  
   - BigInt 崩溃（#4211）、双字段注入（#4515）、Docker 容器泄漏（#4461）、跨模型家族工具校验误报（#4457）。

---

> **分析师备注**：当前版本（1.0.79/1.0.80）处于 **“功能扩展期与稳定性偿债期”剧烈碰撞** 阶段。建议关注下一个 Patch Release 是否包含 OAuth 回归回滚、Watchdog 逻辑修复、Alt-screen 旗标恢复——这三项直接决定生产环境可用性。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 2026-08-18

---

## 1. 今日速览

今日无新版本发布。社区核心关注点集中在 **端点服务异常**（Legacy 推理端点退役导致 410 错误）、**MCP 协议兼容性问题**（工具未暴露、Schema 警告、Token 刷新并发）、**Windows 平台适配缺陷**（路径权限、postinstall 失败、Grep 工具故障）以及 **计费/用量统计不准** 等生产级阻塞问题。多个高优 PR 正在修复会话并发冲突、数据库迁移兼容、网络文件系统 WAL 禁用等核心基础设施缺陷。

---

## 2. 版本发布

**过去 24 小时无新 Release。**

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注理由 | 社区反应 |
|---|-------|----------|----------|
| 1 | [#43105](https://github.com/anomalyco/opencode/issues/43105) **Legacy 推理端点退役 (410 Gone)** | 核心服务不可用，影响所有使用 `https://opencode.ai/inference/v1` 的用户，Beta 版亦受波及 | 15 条评论，用户焦虑高，急需官方迁移指引或替代端点 |
| 2 | [#7801](https://github.com/anomalyco/opencode/issues/7801) **Plan Mode 自动切换 Build Mode** | 高呼声交互增强，32 👍，涉及核心工作流体验 | 11 条讨论，社区期待原生支持而非手动切换 |
| 3 | [#33027](https://github.com/anomalyco/opencode/issues/33027) **MCP 工具连接成功但未暴露给 Agent** | 协议层断层，`tools/list` 正常但 Agent 不可见，阻断插件生态 | 8 条评论，3 👍，开发者急需调试方向 |
| 4 | [#40243](https://github.com/anomalyco/opencode/issues/40243) **EU 数据驻留工作区 OAuth 拒绝 GPT-5.6** | 合规场景硬性阻塞，官方 Codex CLI 正常，仅 OpenCode 受影响 | 9 条评论，4 👍，涉及企业级合规部署 |
| 5 | [#24153](https://github.com/anomalyco/opencode/issues/24153) **归档会话无法恢复/解档** | 数据单向流转风险，11 👍，用户担心历史丢失 | 8 条讨论，强烈诉求双向操作 |
| 6 | [#43009](https://github.com/anomalyco/opencode/issues/43009) **计费异常：DeepSeek-V4-Pro 单次 $0.38** | 计费透明度与准确性信任危机，涉及真实资金 | 6 条评论，用户要求解释并重置额度 |
| 7 | [#36681](https://github.com/anomalyco/opencode/issues/36681) **Windows 路径引用与外部目录权限失效** | Windows 兼容性缺口，配置文档缺失，阻碍企业采用 | 7 条评论，急需文档与修复 |
| 8 | [#43146](https://github.com/anomalyco/opencode/issues/43146) **DeepSeek Flash V4 陷入无限回复循环** | 模型适配层 Bug，Alpine Linux + tmux 环境复现 | 4 条评论，核心模型不可用 |
| 9 | [#42880](https://github.com/anomalyco/opencode/issues/42880) **高频生成 .so 文件写满 /tmp 磨损 SSD** | 资源泄漏级 Bug，用户已自建 RamDisk 规避 | 2 条评论，含变通方案，需根治 |
| 10 | [#43133](https://github.com/anomalyco/opencode/issues/43133) **`opencode run --continue` 注入活跃会话** | 并发安全缺陷，会话劫持风险，已有修复 PR #43140 | 1 条评论，但影响面广（多实例场景） |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#43140](https://github.com/anomalyco/opencode/pull/43140) | OPEN | **修复 `--continue` 会话劫持**：引入存活检查，跳过正在使用的会话 | #43133 |
| 2 | [#43141](https://github.com/anomalyco/opencode/pull/43141) | OPEN | **网络文件系统禁用 WAL**：自动检测 NFS/SMB/9P/FUSE，回退到 rollback journal，支持环境变量覆盖 | 基础设施稳健性 |
| 3 | [#43142](https://github.com/anomalyco/opencode/pull/43142) | CLOSED | **兼容旧版数据库迁移**：容忍缺失 `project`/`session` 列的 `opencode-next.db` | #43139, #41341 |
| 4 | [#43125](https://github.com/anomalyco/opencode/pull/43125) | OPEN | **暴露 MCP Server Transform API**：解耦配置，提供 `list/get/set/update/remove`，支持 URL 策略变更 | #33027 相关 |
| 5 | [#43074](https://github.com/anomalyco/opencode/pull/43074) | CLOSED | **序列化 MCP Token 刷新**：解决并发 OAuth 刷新导致 `invalid_grant` | MCP 稳定性 |
| 6 | [#43136](https://github.com/anomalyco/opencode/pull/43136) | OPEN | **结算待决 Anthropic Tool Call**：处理缺少 `content_block_stop` 的 `message_stop`，防止工具调用悬空 | AI 协议正确性 |
| 7 | [#40125](https://github.com/anomalyco/opencode/pull/40125) | OPEN | **MCP 服务器级信任配置**：指纹固定/CA 文件替代全局 `insecure: true` | #40111, #23506 |
| 8 | [#43124](https://github.com/anomalyco/opencode/pull/43124) | OPEN | **保留推理会话 Header**：Zen 路由转发时保留 OpenCode Session Header，直连 Provider 仍剥离 | 推理网关兼容 |
| 9 | [#43135](https://github.com/anomalyco/opencode/pull/43135) | OPEN | **选择 Azure DeepSeek 专用适配器**：修复 Azure 部署 DeepSeek 走通用适配器导致的故障 | #43106 |
| 10 | [#43017](https://github.com/anomalyco/opencode/pull/43017) | CLOSED | **重构 App 使用共享 Server 数据层**：消除重复同步/Reducer/缓存，集中会话权威 | 架构治理 |

---

## 5. 功能需求趋势

从 50 条 Issue 中提炼的高频方向：

| 趋势 | 代表 Issue | 核心诉求 |
|------|------------|----------|
| **MCP 生态完善** | #33027, #43125, #40125, #43074 | 工具暴露、Schema 兼容、认证安全、Transform 可编程 |
| **多平台/Windows 一等公民** | #36681, #36696, #40623, #41370 | 路径权限、Cmdlet、Grep/ripgrep、postinstall 二进制分发 |
| **会话生命周期管理** | #24153, #43133, #43140, #37542 | 归档恢复、并发安全、Diff 摘要、持久化可靠性 |
| **模型/提供商适配扩展** | #43146, #43135, #43129, #40243 | DeepSeek 循环修复、Azure 专用适配、Vertex 标签、EU 合规 OAuth |
| **计费/用量透明化** | #43009, #43148 | 实时用量与账单一致性、百分比换算逻辑公开 |
| **移动端/小屏适配** | #42834, #38974 | 变体选择遮挡发送键、横向 Tab 栈溢出不可用 |
| **核心协议正确性 (V2)** | #41932, #43136 | Anthropic/Vertex/Azure 协议边界审计、流式状态机修复 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **服务可用性与迁移通知滞后**  
   Legacy 端点 410 退役未提前通知，导致生产环境突发中断（#43105, #43101）。开发者要求：弃用时间表、兼容期、自动重定向或镜像端点。

2. **MCP 集成“连而不通”**  
   服务端 `tools/list` 正常但 Agent 不可见（#33027），Schema 非标格式污染日志（#31002），Token 并发刷新失败（#43074）。核心诉求：**可观测的注册链路、标准化 Schema 容错、幂等认证流**。

3. **Windows 原生体验缺失**  
   路径配置无文档（#36681），Cmdlet 权限不生效（#36696），ripgrep 提取在 MSIX PowerShell 7 下必失败且缓存不可清除（#40623），postinstall 留存 479 字节存根（#41370）。需：**MSI/原生安装包、文档化路径语义、TTY 外静默输出**。

4. **计费黑盒与异常扣费**  
   单次调用 $0.38 远超预期（#43009），Dashboard 百分比与实际金额不符（#43

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-18

> 数据来源：`github.com/earendil-works/pi-mono` | 统计窗口：过去 24 小时（截至 2026-08-17）

---

## 1. 今日速览

- **零版本发布**，但合并了 **15+ 个 PR**，集中修复上下文压缩、模型目录同步、TUI 渲染性能、扩展钩子时机等核心痛点。  
- **高热 Issue #6879（自动压缩失效）** 持续发酵，18 条评论、17 👍，直指长会话稳定性底线；**#534（XDG 配置目录）** 虽已关闭但 39 👍 显示社区对 Linux 规范合规的强烈诉求。  
- **多模态、推理预算、Provider 兼容** 成为当前功能扩展三大主线：视频/音频输入、思考 Token 预算通用化、Bedrock/OpenRouter/Neon 等新 Provider 接入均有实质进展。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 热度 | 关键进展/社区声量 |
|---|-------|----------|------|-------------------|
| 1 | [#6879](https://github.com/earendil-works/pi/issues/6879) **自动压缩永不触发，直到 Provider 拒绝请求** | 上下文超 100% 仍不压缩，需等 API 返回 373k token 错误才触发 | 18 💬 / 17 👍 | **P0 坏境**，多用户复现；建议在每个 agent turn 后强制检查阈值 |
| 2 | [#534](https://github.com/earendil-works/pi/issues/534) **Linux 配置目录不符合 XDG 规范** | 配置直接写入 `$HOME` 而非 `$XDG_CONFIG_HOME` | 15 💬 / 39 👍 | 已关闭但高赞，反映 Linux 用户对规范合规的强预期 |
| 3 | [#8029](https://github.com/earendil-works/pi/issues/8029) **Prompt 编辑器大文本下光标移动极慢** | 7k 行输入框，单次方向键 1.6s，线性随缓冲区增长 | 9 💬 | 性能瓶颈在 TUI 渲染层，亟需虚拟化或增量渲染 |
| 4 | [#3200](https://github.com/earendil-works/pi/issues/3200) **Prompt 命令缺失视频/音频多模态支持** | 仅支持 `images`，需扩展 `video`/`audio` 以适配 Gemma 4、GPT-4o 等 | 8 💬 / 5 👍 | 多模态 Agent 工作流刚需，设计讨论中 |
| 5 | [#2144](https://github.com/earendil-works/pi/issues/2144) **无法在 TUI 中粘贴图片** | Warp Terminal 下 Ctrl+V 图片无响应，Claude Code 已支持 | 7 💬 | 剪贴板图片处理缺失，影响文档/截图类任务 |
| 6 | [#7995](https://github.com/earendil-works/pi/issues/7995) **OpenAI Responses 缺 Anthropic 风格缓存，导致 Claude 成本 2.5 倍** | `cache_control` 字段缺失，OpenRouter 基准测试实锤 | 4 💬 | 成本敏感型用户强痛点，PR #8275 部分解决预算字段通用化 |
| 7 | [#8036](https://github.com/earendil-works/pi/issues/8036) **Edit 工具渲染 14.5 MB 大 diff 导致 TUI 崩溃** | 超长物理行 HTML diff 触发渲染溢出 | 4 💬 | 大文件编辑场景阻断，需流式/分页渲染 |
| 8 | [#8166](https://github.com/earendil-works/pi/issues/8166) **扩展注入自定义消息破坏 tool_calls 邻接性，导致 DeepSeek 400** | `triggerTurn: false` 插消息后下一轮工具调用失效 | 3 💬 | 扩展机制与核心会话状态同步的深层 Bug |
| 9 | [#8028](https://github.com/earendil-works/pi/issues/8028) **TUI `fullRender` 超过 V8 字符串长度限制崩溃** | 视频分析 Agent 读大量图片后 `RangeError: Invalid string length` | 2 💬 | 极端长上下文下的内存安全边界 |
| 10 | [#8229](https://github.com/earendil-works/pi/issues/8229) **本地 Provider 在工具轮次间仍可能溢出** | 工具结果追加后直接发起下一轮请求，未等事后压缩 | 2 💬 | 本地模型（llama.cpp 等）抗压能力弱，需前置裁剪 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#8258](https://github.com/earendil-works/pi/pull/8258) | **Fix** | Anthropic 拒绝错误兜底：注入 `allowed_fallback_models` 元数据，压缩失败时自动降级 | #8017 |
| 2 | [#8255](https://github.com/earendil-works/pi/pull/8255) | **Fix** | 递归加载嵌套 Markdown 技能（`~/.agents/skills/third-party/child-skill.md`） | #6479 |
| 3 | [#8120](https://github.com/earendil-works/pi/pull/8120) | **Feat** | 实验性**追加式压缩**（`PI_EXPERIMENTAL=1`）：复用系统提示/工具/路由会话，利用 Provider Prompt Cache | #6879 相关 |
| 4 | [#8275](https://github.com/earendil-works/pi/pull/8275) | **Feat** | 通用化 `openai-completions` 思考 Token 预算字段：支持 Qwen(`thinking_budget`)、SGLang、llama.cpp(`thinking_budget_tokens`) | #7638, #7994 |
| 5 | [#8246](https://github.com/earendil-works/pi/pull/8246) | **Fix** | 修复 `openai-completions` 推理细节往返：保留 `reasoning.text`/`summary` 至 assistant message，支持 signed-text 重放 | #7994 |
| 6 | [#8253](https://github.com/earendil-works/pi/pull/8253) | **Perf** | 修复长会话差异渲染全屏闪烁：仅清除可见视口以上变更区域，避免 10k+ 行重绘 | #8029 相关 |
| 7 | [#8242](https://github.com/earendil-works/pi/pull/8242) | **Fix** | 扩展示例统一改用 `agent_settled` 替代 `agent_end`，消除重试/压缩期间的误“就绪”通知 | #7350 |
| 8 | [#8241](https://github.com/earendil-works/pi/pull/8241) | **Feat** | 新增扩展可见事件 `session_compact_failed`，透传失败载荷 | #8175 |
| 9 | [#8240](https://github.com/earendil-works/pi/pull/8240) | **Chore** | 对齐 Qwen Token Plan 双 Provider 目录：统一 8 模型白名单（含 DeepSeek v4 系列） | #8194 |
| 10 | [#8262](https://github.com/earendil-works/pi/pull/8262) | **Feat** | 每个 turn-start 路径均派发 `input`/`before_agent_start` 钩子，修复 `sendCustomMessage` 绕过钩子问题 | #8166 相关 |

> **关闭但值得注意**：#8256（PiQuest 品牌/文档重构）、#8257（受信项目跳过子 Agent 确认）、#8243（Bedrock Smithy 头部透传）、#7173（OpenCode Go 重命名）、#6216（Bedrock Mantle OpenAI Responses Provider，长期开发中）。

---

## 5. 功能需求趋势（从 Issue 聚类）

| 趋势方向 | 代表 Issue/PR | 社区信号强度 |
|----------|---------------|--------------|
| **上下文压缩可靠性** | #6879, #8120, #8229, #8241 | ⭐⭐⭐⭐⭐ 核心稳定性，多长会话用户阻断 |
| **多模态输入原生化** | #3200, #2144, #8220 | ⭐⭐⭐⭐ 视频/音频/视觉模型落地刚需 |
| **推理/思考预算标准化** | #7995, #8275, #8246, #8190, #8135 | ⭐⭐⭐⭐ 成本控制与模型能力释放的关键 |
| **Provider 生态扩展** | #7895(Neon), #6216(Bedrock Mantle), #8279, #8243 | ⭐⭐⭐ 厂商集成加速，兼容层趋成熟 |
| **

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-08-18

---

## 1. 今日速览

- **发布 v0.21.13**：Web Shell 支持拖拽/粘贴文本文件作为命名附件，新增从任意 Assistant 响应分叉对话功能；同步完成 SWE-bench Verified 与 Terminal-Bench 2.0 端到端验证流水线。
- **自动化修复体系深度重构**：多个 PR 聚焦于 Autofix 验证门禁容器化、增量 Review 锚点模型绑定、CI 自愈简化、易变性门禁等核心基建，显著提升工程效能与可靠性。
- **Windows/跨平台体验成高频痛点**：Ctrl+V 粘贴失效、消息重复投递、VP 模式底部对齐等 Issue 活跃度高，社区呼吁优先修复。

---

## 2. 版本发布

### **v0.21.13** ([Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.13))

| 维度 | 内容 |
|------|------|
| **Web Shell 增强** | Composer 支持拖拽、粘贴文本文件作为命名附件（同图片），提升多模态上下文注入便利性 ([#9180](https://github.com/QwenLM/qwen-code/pull/9180)) |
| **对话分叉** | 可从任意 Assistant 响应 fork 会话，便于探索式编码与并行实验 |
| **基准验证** | SWE-bench Verified (500) + Terminal-Bench 2.0 (89) 完整流水线跑通，Release → DSW Harbor → 验证 → 发布闭环打通 |
| **Benchmark 版本** | 固定引用 `v0.21.13`，确保可复现性 |

> **注**：过去 24h 内仅此一个正式 Release，但伴随 4 次 DSW EAS 全量/冒烟验证运行（r1-r4），显示发布流程处于高频校验态。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 评论 | 关注理由 | 社区反应 |
|---|-------|------|----------|----------|
| [#9194](https://github.com/QwenLM/qwen-code/issues/9194) | **测试钉死缺口收敛**（mutation-verified test-pin gaps） | 10 | 核心工程质量：自动化 Review 连续 2 轮暴露同类测试薄弱模式，非阻断但需系统性修复 | 技术债显性化，标记 `priority/P3`、`scope/testing` |
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) | **Ctrl+C 取消后 Prompt 未恢复至输入框** | 9 | 交互体验基础缺陷：用户需重输长提示词，破坏心流 | 标记 `type/bug`，多用户复现，期待修复 |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | **多工作区 Daemon 资源用量无上界** | 9 | 生产级就绪关键：仅计数限制不覆盖请求体、WS 组装、会话状态字节占用 | `priority/P2`、`daemon`、`need-discussion`，架构级议题 |
| [#9324](https://github.com/QwenLM/qwen-code/issues/9324) | **Windows 下消息多次投递打断 Agent 思考** | 7 | 严重可用性问题：桌面端 Qwen 3.8 Max 频繁收到重复消息，导致上下文混乱 | `scope/windows`、`status/need-information`，需复现定位 |
| [#9061](https://github.com/QwenLM/qwen-code/issues/9061) | **Windows CLI Ctrl+V 粘贴完全失效（0.21.x 回归）** | 6 | **阻断级回归**：0.21.0 正常，0.21.11+ 失效，同终端 PowerShell 正常 | `priority/P1`，标记 `scope/windows`、`scope/keybindings` |
| [#6806](https://github.com/QwenLM/qwen-code/issues/6806) | **/compress 后状态行 Context% 不刷新** | 6 | 状态反馈滞后：需下一次模型请求完成才更新，误导用户 | `welcome-pr`，适合新手贡献 |
| [#9300](https://github.com/QwenLM/qwen-code/issues/9300) | **VP 模式内容未底部对齐——最后一条消息与 Composer 有空白** | 6 | 渲染布局缺陷：`useTerminalBuffer: true` 默认模式下视觉断层 | `priority/P2`、`need-discussion` |
| [#9320](https://github.com/QwenLM/qwen-code/issues/9320) | **/compress-fast 后 /rewind 导致上下文丢失** | 5 | 会话管理核心流程：压缩+恢复组合场景下状态不一致 | `priority/P2`，涉及 `scope/token-management` |
| [#9296](https://github.com/QwenLM/qwen-code/issues/9296) | **Autofix 审查事件风暴与重复派发浪费 Runner** | 4 | CI/CD 效能：59% 运行被取消，4 大结构性问题（含闭合 PR 仍触发） | `priority/P1`，作者 wenshao 自述，优化空间大 |
| [#9354](https://github.com/QwenLM/qwen-code/issues/9354) | **建立跨宿主聊天记录契约预验证** | 5 | 多端互操作基建：Web Shell / Tauri / VS Code / HTML 导出需统一只读 Transcript 契约 | `roadmap/export-data`、`need-discussion`，架构前瞻 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| [#9345](https://github.com/QwenLM/qwen-code/pull/9345) | **重构 CLI：共享助手前置下沉** | Refactor | 将 `/audit` 技能所需共享逻辑从 `commands/review/` 剥离至公共层，消除跨命令组耦合 | 代码复用边界清晰化，利于后续技能扩展 |
| [#9370](https://github.com/QwenLM/qwen-code/pull/9370) | **修复 CI：恢复 macOS/Windows 跑道触发** | CI Fix | 增加平台敏感性分类器触发 + nightly 兜底，保留合并队列触发 | 解决跨平台测试盲区，防止回归漏测 |
| [#9214](https://github.com/QwenLM/qwen-code/pull/9214) | **Autofix 验证门禁迁移至临时容器** | Feat (Autofix) | Phase 1+2：验证步骤在容器内执行，结构化测试锚定信任边界 | **安全与隔离性质变**，宿主环境不再受污染 |
| [#9190](https://github.com/QwenLM/qwen-code/pull/9190) | **本地 Review-Fix 循环增量化（内容锚点）** | Feat (Review) | 避免每轮全量重审脏树，仅增量处理变更，大幅省 Token | Review 成本降级，本地迭代加速 |
| [#9332](https://github.com/QwenLM/qwen-code/pull/9332) | **将单跳导入扩展折叠进 `fetch-pr --since`** | Refactor | 删除 612 行 `rescope` 子命令，核心逻辑内化至现有机制 | 删繁就简，减少维护面 |
| [#9184](https://github.com/QwenLM/qwen-code/pull/9184) | **增量 Review 锚点绑定认证模型** | Fix (Review) | 同一 SHA 不同模型强制全量二次审查，防止跨模型复用失效 | 修正“同模型契约”语义漏洞 |
| [#9367](https://github.com/QwenLM/qwen-code/pull/9367) | **导出 HTML 查看器新增全局展开/折叠** | Feat (WebUI) | `ChatViewer` 增加工具栏，一键控制所有可折叠区块（思维链、工具结果） | 导出产物可读性显著提升 |
| [#9369](https://github.com/QwenLM/qwen-code/pull/9369) | **将自愈链的擦除保护移植至 Triage/A/B Wipe** | CI Fix | 统一 3 个工作流的“清空工作区保目录”逻辑，补全路径规范化、允许列表等防护 | 消除手工复制导致的不一致风险 |
| [#9130](https://github.com/QwenLM/qwen-code/pull/9130) | **沙箱验证引入确定性易变性门禁** | Feat (Triage) | 重跑新增/修改单测 N 次（默认 5，可配 2-10），捕捉不稳定用例 | **预防合入易变测试**，提升 CI 信度 |
| [#9303](https://github.com/QwenLM/qwen-code/pull/9303) | **Web Shell 限制 Daemon 记录保留防渲染器 OOM** | Fix (Web-Shell) | 原始回放快照注入后即释放，重建受块上限约束，回放增量同步受限 | 解决长会话浏览器内存爆涨，**生产可用性关键** |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表性 Issues | 社区呼声强度 | 备注 |
|----------|---------------|--------------|------|
| **跨平台体验修复（Windows 优先）** | #9061、#9324、#3806、#9300 | ⭐⭐⭐⭐⭐ | 回归与渲染类缺陷集中，阻碍桌面端采纳 |
| **会话/上下文管理鲁棒性** | #9320、#9309、#6806、#8316 | ⭐⭐⭐⭐ | 压缩、回滚、取消恢复等核心流程仍有状态不一致 |
| **Daemon 生产级资源治理** | #8051、#8091、#9250 | ⭐⭐⭐⭐ | 从“计数限制”向“字节/带宽/文件句柄”硬隔离演进 |
| **多端 Transcript 互操作标准** | #9354、#5883、#8208 | ⭐⭐⭐ | Web Shell / VS Code / Desktop / HTML 导出统一契约 |
| **Autofix/CI 效能与可靠性** | #9296、#9214、#9130、#9369 | ⭐⭐⭐⭐ | 容器化验证、易变性门禁、自愈简化——工程效能内循环 |
| **Review 平台多提供商扩展** | #9226 (Aone Code)、#9096 | ⭐⭐⭐ | 第二提供商接入，验证抽象层通用性 |
| **导出/归档能力增强** | #8208、#9367、#9354 | ⭐⭐⭐ | 思维链可视化、全局折叠、契约预验证 |
| **模型提供商动态化** | #9368、#7433 | ⭐⭐ | ModelStudio Token/Coding Plan 模型列表动态获取、本地模型识别修正 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“能不能先把 Windows 基础体验修好？”**  
   - Ctrl+V 失效（0.21.x 回归）、消息重复投递、界面闪烁、VP 模式布局错位 —— **桌面端日常可用性受损**，多名用户表示“退回旧版”或“转用 VS Code 扩展”。

2. **“压缩/回滚后上下文到底怎么了？”**  
   - `/compress-fast` + `/rewind` 导致丢失、Context% 不刷新、两次压缩 token

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-08-18

---

## 1. 今日速览

**v0.9.9 正式发布**，这是一个以“真相与韧性”为主题的版本，修复了会话卡死的关键 Shell 工具 Bug，并完成了模型目录更新、网站文案重写、DSH 海洋场景等特性。主分支 CI 目前**双平台全红**（macOS/Windows），阻塞发布的 `plugin_e2e_acceptance` 与 NSIS 打包问题已解除。社区高频关注点集中在：**配置迁移碎片化**、**Agent 工具 Schema 过度复杂**、**子 Agent 调度可靠性**、**沙箱网络限制**以及**中文文档缺失**。

---

## 2. 版本发布

### ✅ v0.9.9 “Truth & Resilience” 已发布
- **发布 PR**：[#5476](https://github.com/Hmbown/CodeWhale/pull/5476) | **变更日志补丁**：[#5477](https://github.com/Hmbown/CodeWhale/pull/5477)、[#5487](https://github.com/Hmbown/CodeWhale/pull/5487)
- **核心修复**：
  - Shell 工具在磁盘/描述符耗尽时不再楔死会话（修复 #5465，曾导致维护者自身 0.9.9 会话丢失）
  - 未验证的上下文窗口/输出上限/遥测默认值现在会诚实标注，不再静默回落
- **新增特性**：
  - DSH 环境海洋场景（鲸鱼剪影 + 代码鱼群动画）[#5484](https://github.com/Hmbown/CodeWhale/pull/5484)
  - 一级模型目录与定价同步至 2026-08-17 官方数据 [#5485](https://github.com/Hmbown/CodeWhale/pull/5485)
  - 官网文案全面“去内部化”，建立 `WEB_VOICE.md` 风格规范 [#5483](https://github.com/Hmbown/CodeWhale/pull/5483)
- **贡献者致谢**：@h3c-hexin（技能稳定性/模型大小写解析/Web 结果压缩）、@asto18089（下游诊断）

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心矛盾 | 热度指标 | 为什么重要 |
|---|-------|----------|----------|------------|
| 1 | **[#2369](https://github.com/Hmbown/CodeWhale/issues/2369)** Config 路径在 Windows/Cygwin/跨平台碎片化，且遗留迁移静默失败 | 配置不一致导致凭证丢失、重复登录 | 8 💬 | 影响所有跨平台用户的首次体验，迁移逻辑需显式化 |
| 2 | **[#5056](https://github.com/Hmbown/CodeWhale/issues/5056)** Verifier 后台测试易失、`/workspace` 敏感夹具、12 个未分类 `#[ignore]` 测试 | CI 可靠性低，阻碍发布节奏 | 8 💬 | 直接导致 v0.9.7/v0.9.8 多次回滚，需专项治理 |
| 3 | **[#5324](https://github.com/Hmbown/CodeWhale/issues/5324)** `agent` 工具 32 字段 Schema、0 必填、8 个动作共用一套解析器 | 模型频繁报错、调试极难 | 8 💬 | 核心编排入口，Schema 简化是 v0.9.8 核心任务 |
| 4 | **[#5424](https://github.com/Hmbown/CodeWhale/issues/5424)** v0.9.7 TUI 约 1 分钟后自动崩溃 | 生产可用性严重受损 | 7 💬 | 刚发布版本的阻断级回归，需火速定位 |
| 5 | **[#1425](https://github.com/Hmbown/CodeWhale/issues/1425)** 大文本处理（300 万字小说）启动 10 子 Agent 后 `agent_wait` 超时卡死 | 长上下文+并行子任务的编排极限 | 7 💬 | 暴露超时策略、进度心跳、部分失败补偿缺失 |
| 6 | **[#5123](https://github.com/Hmbown/CodeWhale/issues/5123)** Agent 生成面过多旋钮，`builder` 标签只读却自报 `BLOCKED` | UX 与运行时契约不一致 | 7 💬 | 犬食用户亲历，揭示工具能力声明与实际授权脱节 |
| 7 | **[#1651](https://github.com/Hmbown/CodeWhale/issues/1651)** VS Code 集成终端下 YOLO Agent 跑测试导致 IDE 崩溃 | 沙箱/进程隔离边界模糊 | 6 💬 | 影响主流 IDE 工作流，需区分 TUI 与宿主进程资源限制 |
| 8 | **[#1829](https://github.com/Hmbown/CodeWhale/issues/1829)** 内置 Shell 沙箱疑似阻断 TCP 22 出站，SSH exit code 255 | 网络策略过度收敛 | 6 💬 | 远程开发核心场景受阻，需可配置网络白名单 |
| 9 | **[#5374](https://github.com/Hmbown/CodeWhale/issues/5374)** Agent 写入时文本乱码（macOS） | 渲染管线编码/转义异常 | 5 💬 | 可视化反馈失效，严重影响可读性 |
| 10 | **[#5403](https://github.com/Hmbown/CodeWhale/issues/5403)** `main` 分支四次完整跑通均双平台红：macOS `plugin_e2e_acceptance`、Windows NSIS | 发布管道不稳定 | 3 💬 | 已在 v0.9.9 发布前修复（#5395 解除相互取消），但需持续监控 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | **[#5492](https://github.com/Hmbown/CodeWhale/pull/5492)** `perf(skills)` | 🟢 Open | 配置技能目录下的原生技能在模型目录中仅保留 name/desc，物理路径替换为 `<configured-skills>`，稳定提示词 | #5473 |
| 2 | **[#5473](https://github.com/Hmbown/CodeWhale/pull/5473)** `perf(skills)` | ✅ Merged | 同 #5492，由社区贡献者 @h3c-hexin 完成 | — |
| 3 | **[#5490](https://github.com/Hmbown/CodeWhale/pull/5490)** `feat(web)` | ✅ Merged | 3 个共享组件改用 `pickText()` 统一多语言取值，消除硬编码 `locale==='zh'` | #5337 |
| 4 | **[#5488](https://github.com/Hmbown/CodeWhale/pull/5488)** `feat(web)` | ✅ Merged | 文档 Shell 迁移至字典脊柱，8 个部分语言环境获得翻译入口 | #5337 |
| 5 | **[#5481](https://github.com/Hmbown/CodeWhale/pull/5481)** `docs` | ✅ Merged | 清理 A/B/C 三级过时引用与锚点漂移，配合 v0.9.9 文档同步 | #5482 |
| 6 | **[#5486](https://github.com/Hmbown/CodeWhale/pull/5486)** `fix(tui)` | ✅ Merged | <60 列时隐藏会话指标条，避免底栏溢出 | — |
| 7 | **[#5491](https://github.com/Hmbown/CodeWhale/pull/5491)** `fix(tui)` | 🟢 Open | 审批结果执行前持久化，失败则拒绝执行，恢复时重建状态 | #5360 |
| 8 | **[#5489](https://github.com/Hmbown/CodeWhale/pull/5489)** `fix(tui)` | 🟢 Open | 包裹 rustdoc 裸 URL，修复 `-D warnings` 下文档构建失败 | — |
| 9 | **[#5485](https://github.com/Hmbown/CodeWhale/pull/5485)** `fix(models)` | ✅ Merged | 一级模型行与定价全量校验至 2026-08-17 官方页，含 xAI LongContext 2× 定价 | — |
| 10 | **[#5402](https://github.com/Hmbown/CodeWhale/pull/5402)** `fix(tui)` | ✅ Merged | Live pricing 503/不可达时不再永久 `unverified_live_pricing`，改用诚实降级路径 | #5241 |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **Agent 编排简化与可靠性** | #5324, #5123, #1425, #5360, #5362 | ⭐⭐⭐⭐⭐ | 核心痛点：Schema 过大、旋钮过多、子任务超时无补偿、审批不可持久化 |
| **跨平台配置/凭证统一迁移** | #2369, #5098, #5443 | ⭐⭐⭐⭐ | Windows/Cygwin/Unix 路径分歧、层级过多导致影子覆盖、标识符退役需分级迁移 |
| **沙箱与网络策略可配置化** | #1829, #1651, #5410 | ⭐⭐⭐⭐ | SSH/TCP 22 阻断、bwrap 红绿灯过严、VS Code 宿主进程被误伤 |
| **中文/多语言文档与站点本地化** | #5482, #5337, #5290, #5483 | ⭐⭐⭐⭐ | 文档仅英、机翻误导大、非英路由交互失效、站点文案“内部化”严重 |
| **测试与 CI 稳定性专项** | #5056, #5403, #5355 | ⭐⭐⭐ | 易失测试、夹具污染、并行加载竞态、双平台红构建阻塞发布 |
| **模型目录与定价实时性** | #4683, #5241, #5485, #5350 | ⭐⭐⭐ | URL 失效、503 导致全链路未定价、第三方模板缺失、缓存异常 |
| **TUI 交互细节打磨** | #5437, #5486, #5374, #3957 | ⭐⭐⭐ | 状态栏色彩语法化、窄屏溢出、写入乱码、Modal 基建拆分 |
| **插件生态产品化** | #5311, #5403 | ⭐⭐ | 安装/更新/市场联邦化、E2E 验收纳入 CI |
| **上下文压缩策略可调** | #5239 | ⭐⭐ | 1M 上下文模型却在 128K 触发压缩，用户期望可配置阈值 |
| **可观测性与成本透明** | #5241, #5402, #5437 | ⭐⭐ | 定价不可用时的诚实降级、会话成本实时展示 |

---

## 6. 开发者关注点总结

| 痛点/高频需求 | 典型反馈 | 建议行动优先级 |
|----------------|----------|----------------|
| **“配置在哪里生效？”** | Windows `%USERPROFILE%` vs Cygwin `/home`、全局/工作区/插件三层覆盖、迁移静默失败 | **P0** 统一路径解析器 + 显式迁移 CLI + 启动自检报告 |
| **“Agent 工具太难用/易报错”** | 32 字段 0 必填、8 动作共 Schema、别名解析不一致 | **P0** 拆分为动作级 Schema、强制 required、提供 JSON Schema 生成器 |
| **“长任务/多子任务会卡死”** | `agent_wait` 无心跳、无部分结果收集、超时即整体失败 | **P0** 增加进度流式回调、可配置超时策略、失败隔离与重试 |
| **“沙箱把我的 SSH/编译/链接全挡了”** | TCP 22 阻断、`/dev/null` 重定向失败、系统库链接失败 | **P1** 网络/设备/路径白名单配置、开发模式宽松 Profile |
| **“文档看不懂/找不到中文”

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*