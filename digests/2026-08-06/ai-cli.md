# AI CLI 工具社区动态日报 2026-08-06

> 生成时间: 2026-08-06 01:58 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-08-06

---

## 1. 生态全景

当前 AI CLI 赛道已从“模型包装器”进化为**“智能体运行时”**竞争：核心战场从单轮对话转向**多 Agent 编排、会话持久化迁移、MCP 工具链治理、企业级安全合规**四大维度。头部工具（Claude Code、Codex、Gemini CLI）同步推进原生客户端稳定性攻坚与模型行为可控性配置，显示**生产级可用性**已超越模型能力成为第一优先级。中腰部工具（OpenCode、Qwen Code、CodeWhale）通过 Runtime API、ACP 协议、Web Shell 复用等架构创新，确立“可被编程/托管的 Agent Runtime”差异化定位。全生态呈现**版本发布高频化（日级/周级）、安全漏洞响应小时级、跨平台原生化（Tauri/MSIX）同步推进**的工程化成熟期特征。

---

## 2. 各工具活跃度对比

| 工具 | 新增/更新 Issues | 活跃 PRs | 版本发布 | 核心研发焦点 |
|------|------------------|----------|----------|--------------|
| **Claude Code** | 11 新增（含 10 精选热点） | 3（生态插件、细节修复） | v2.1.223（企业级市场通配符、运行时警告） | 计费/配额信任危机、模型毒性/降级、Desktop 崩溃、会话迁移 |
| **OpenAI Codex** | 50+ 总量（10 精选热点） | 19 同日合入（基建重构） | rust-v0.146.1（安全回溯）+ 5 Alpha | Windows 进程/驱动级崩溃、MCP 生态完善、会话可逆性、多 Agent 状态追踪 |
| **Gemini CLI** | 50+ 总量（10 精选热点） | 10+ P1/P2 修复合并 | v0.54.0 稳定版 + v0.55.0-preview/nightly | Subagent 编排成熟度、原生代码操作（AST）、长时记忆自动化 |
| **GitHub Copilot CLI** | 24 更新（10 精选热点） | 0（内部 monorepo 为主） | v1.0.79-5 预发布（多会话、Worktree、Prompt pinning） | MCP 企业级落地、Windows 原生稳定性、多模型参数路由 |
| **Kimi Code CLI** | 3 热点 | 3（双 PR 并行修复核心 Bug） | 无 | 模型能力声明降级、文件编码安全、跨会话记忆系统 |
| **OpenCode** | 10+ 精选（含 3 个 v1.18.14 回归） | 10（V2 架构、迁移、Workspace） | v1.18.14（xAI 登录、错误重试） | VS Code 扩展呼声最高、Go Plan API、V2 托管工作区、会话上下文丢失回归 |
| **Pi (pi-mono)** | 10 精选（含战略级 Windows/XDG 讨论） | 20+ 合并（内存泄漏、Provider、渲染、二进制） | 无 | 扩展事件总线泄漏、Copilot 模型加载、OSC 8 超链接、Windows 原生策略 |
| **Qwen Code** | 10 精选（含安全、CI 挂起、Win 崩溃） | 10（安全修复、渲染、遥测、CI 调度） | v0.21.6 稳定版 + desktop-v0.1.0 (Tauri) + nightly | 桌面端架构收敛、安全清洗器、CI 超时、Web Shell 复用 |
| **DeepSeek TUI (CodeWhale)** | 3 热点（多 Key、沙箱白名单、推理 UI） | 10（Runtime API 全家桶、ACP 工具、检查点恢复、ratatui 修复） | v0.9.4 Release Train（77 commits 领先） | Runtime API 平台化、ACP 适配 Zed、子代理断点续跑、多模型 Key 管理 |

> **数据说明**：Issues/PRs 以报告中“精选/热点”条数为准，反映社区可见活跃度；版本发布以过去 24h 显式 Release 为准。

---

## 3. 共同关注的功能方向

| 方向 | 关注工具（典型诉求） | 成熟度阶段 |
|------|----------------------|------------|
| **会话/上下文可迁移与持久化** | **Claude Code** (跨项目迁移 #81946)、**Codex** (会话迁移 #37191、历史丢失 #23979)、**Gemini CLI** (压缩/重载 #28672)、**OpenCode** (全局规则遗忘 #40348、跨项目 Picker #31932)、**Qwen Code** (OTel 会话生命周期 #8616) | **工程化攻坚期**：从“文件落盘”转向“语义级迁移、版本化检查点、跨端同步” |
| **MCP/工具链生产级治理** | **Claude Code** (参数丢失 #72228/#84362)、**Codex** (进程回收 #12491、工具暴露 #19425、OAuth #34684)、**Copilot CLI** (策略获取 #4378、非 GH 远程 #4374、OAuth 3LO #4371)、**Pi** (Provider 稳健性 #7444)、**CodeWhale** (ACP 工具桥接 #5225) | **协议落地期**：解决进程管理、认证授权、命名空间隔离、跨平台发现等“基础设施级”缺陷 |
| **原生客户端稳定性与跨平台** | **Claude Code** (5h 崩溃 #83403、GPU 崩溃 #83744、MSIX #79867)、**Codex** (僵尸进程 #12491、BSOD #31035、MSIX #35352)、**Copilot CLI** (原生崩溃 #4026)、**Qwen Code** (Win 启动崩 #8615)、**OpenCode** (macOS 内存 #40779) | **SLA 达标期**：Electron/Tauri/原生 Rust 栈的进程隔离、内存控制、驱动兼容成为发布门槛 |
| **模型行为可控与多模型路由** | **Claude Code** (Opus 毒性/降级 #77136、策略配置需求)、**Codex** (Guardian 熔断 #37190)、**Copilot CLI** (Reasoning effort 校验 #4345、BYOK 显示不一致 #3135)、**Qwen Code** (Anthropic ID 解析 #8584)、**Kimi** (Capabilities 降级 #2592) | **配置化/策略化**：从“模型即服务”转向“模型行为策略即代码”（温度、安全阈值、回退规则、Token 预算） |
| **企业级治理与合规** | **Claude Code** (Org 通配符 v2.1.223)、**Copilot CLI** (GHEC 数据驻留 #4378)、**Codex** (macOS 公证零信任 #37154)、**OpenCode** (Go Plan API #16017)、**Gemini CLI** (Cloud Workstations OAuth #28688) | **合规先行**：数据驻留、审计日志、策略分发、计费透明化成采购硬指标 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线关键差异 |
|------|----------|----------|------------------|
| **Claude Code** | **企业级闭环智能体平台** | 付费专业开发者、企业工程团队 | 官方主导单体仓、强运维属性（Marketplace 通配符、严格市场）、Desktop 优先、计费绑定深度 |
| **OpenAI Codex** | **安全优先的多 Agent 运行时** | 安全敏感型团队、研究型开发者 | Rust 核心、Guardian 安全熔断机制、Alpha/稳定双轨、大规模自动化基建 PR（迁移、分页、多 Agent 状态） |
| **Gemini CLI** | **原生代码操作与长时记忆 Agent** | 全栈/平台工程师、Google Cloud 用户 | AST 感知工具链、Subagent 编排深度、Auto Memory 自动化、Tauri Desktop + Web Shell 双轨 |
| **GitHub Copilot CLI** | **GitHub 生态原生开发者生产力工具** | GitHub 重度用户、企业内部开发平台团队 | 与 GH 平台深度绑定（Copilot API、Codespaces、GHEC）、Worktree 原生支持、预发布高频验证 UI/UX |
| **Kimi Code CLI** | **轻量级、配置驱动的模型中立 Agent** | 多模型切换用户、隐私敏感开发者 | 单二进制、TOML 配置、ACP 协议原生、快速响应核心 Bug（双 PR 并行）、记忆系统规划中 |
| **OpenCode** | **可托管、可编程的 Agent Runtime (V2)** | 构建 AI 原生 IDE/平台的厂商、高级用户 | 架构重构期（Harness、Workspace、Runner Graph）、Runtime API 优先、社区高呼声 VS Code 扩展缺失 |
| **Pi** | **可扩展的终端原生 Agent 框架** | 终端重度用户、扩展开发者、跨平台原生派 | 事件总线架构、扩展热重载、Provider 中立、Windows 原生策略讨论中、OSC 8 等终端细节极致打磨 |
| **Qwen Code** | **Web Shell 复用的跨端统一体验** | 阿里云/通义模型用户、移动端/远程开发场景 | Tauri Desktop 复用 Web Shell、实时语音交互实验、移动端二维码接管、自动修复需 E2E 证明 |
| **DeepSeek TUI (CodeWhale)** | **Headless 优先的 Agent Runtime / ACP 后端** | Zed 等编辑器集成方、CI/CD 自动化、多模型并行开发者 | Runtime API 全景图（Memory/MCP/Goal/Verifier/Skill）、ACP 工具调用桥接、子代理检查点恢复、ratatui TUI 前端 |

---

## 5. 社区热度与成熟度评估

| 梯队 | 工具 | 判断依据 |
|------|------|----------|
| **第一梯队：头部成熟/高活跃** | **Claude Code、OpenAI Codex、Gemini CLI** | 日均 Issue 50+、PR 10+、版本周/日级、企业级特性完备、安全响应快、全平台覆盖 |
| **第二梯队：生态绑定/快速迭代** | **GitHub Copilot CLI、Qwen Code** | 依托平台分发（GH/阿里云）、预发布极高频（Copilot 4 天 5 版）、Desktop 正式版里程碑、但社区 PR 可见度低（内部主导） |
| **第三梯队：差异化突围/架构重构期** | **OpenCode、Pi、CodeWhale** | 核心架构大重构（V2/Harness/Runtime API）、社区高呼声功能明确（VS Code Ext、ACP、Windows）、版本发布节奏受重构影响 |
| **第四梯队：轻量/小众/早期** | **Kimi Code CLI** | 单仓小团队、响应极快（双 PR 并行修复）、功能聚焦模型中立与记忆、生态扩展性待验证 |

**关键信号**：
- **Claude/Codex/Gemini** 已进入“存量优化与信任修复期”（计费、稳定性、模型行为）。
- **OpenCode/Pi/CodeWhale** 处于“架构兑现期”，V2/Runtime API 交付质量将决定其能否从“工具”升级为“平台”。
- **Copilot/Qwen** 依托云厂商分发优势，Desktop 端发布（Tauri）标志着“Web Shell + 原生壳”架构成主流共识。

---

## 6. 值得关注的趋势信号

| 趋势信号 | 证据支撑 | 对开发者/决策者的参考价值 |
|----------|----------|----------------------------|
| **“会话即资产”成为核心资产类** | 9/9 工具均涉及会话迁移、检查点、跨端同步、OTel 标准化 | **选型标准**：必须评估导出/导入格式、语义兼容性、版本演进策略；避免 Vendor Lock-in 到不透明的 SQLite/二进制格式。 |
| **MCP 从“协议可用”进入“运维级治理”** | 进程泄漏、OAuth 多标准、策略分发、命名空间冲突在 6+ 工具同现 | **基建投资**：需建设 MCP 网关/注册表/审计链路，而非仅接入 Client；关注 OpenCode/Pi/CodeWhale 的 Runtime API 是否提供 MCP 生命周期管理。 |
| **原生客户端分发成为质量分水岭** | Windows BSOD、MSIX 签名、macOS 公证、GPU 进程

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-06）

---

## 1. 热门 Skills 排行（按社区关注度与讨论热度）

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|------|------------|----------|--------------|------|
| 1 | **skill-creator 评估链路修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 在所有查询上报 `recall=0%` 的核心缺陷，涉及 Windows 管道读取、触发检测、并行 worker 隔离 | **关联 Issue #556（12 评论/7👍）**、**#1169**、**#1099**、**#1050**、**#1323** 形成集群，揭示技能创建工具链“优化闭环完全失效” | 🟢 OPEN |
| 2 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档的排版质量：孤行/寡行、标题断页、编号错位 | 解决“用户极少显式要求排版但极其在意输出质量”的隐性需求 | 🟢 OPEN |
| 3 | **self-audit / 推理质量关卡** [#1367](https://github.com/anthropics/skills/pull/1367) | 机械性文件存在性校验 + 四维推理审计（严重度优先），通用于任意技术栈 | 响应 Issue #1385（4 评论）提出的“三阶段质量关卡”提案，体现社区对**交付前自查**的强烈诉求 | 🟢 OPEN |
| 4 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 全栈测试模式库：Testing Trophy、AAA、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 填补“技能集覆盖创意/企业/技术流程，唯独缺系统化测试指导”的空白 | 🟢 OPEN |
| 5 | **skill-quality-analyzer / skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 两个元技能：五维度质量评分（结构/文档/测试/安全/维护）+ 安全威胁建模（注入/路径遍历/权限提升） | 直接回应 **Issue #492（43 评论/2👍）** 暴露的“社区技能冒充官方命名空间”的信任边界危机 | 🟢 OPEN |
| 6 | **plan-file-hygiene** [#1479](https://github.com/anthropics/skills/pull/1479) | 规划产物生命周期管理：自动归档、去重、过期清理、上下文压缩 | 解决 Issue #1417 指出的“规划文物无限堆积、无生命周期”的上下文污染问题 | 🟢 OPEN |
| 7 | **color-expert** [#1302](https://github.com/anthropics/skills/pull/1302) | 色彩专业知识库：命名系统、色空间选型表、无障碍对比度、品牌色提取、色盲模拟 | 设计/前端/数据可视化场景的高频长尾需求，单一技能覆盖“色彩决策全链路” | 🟢 OPEN |
| 8 | **ODT 技能** [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument 创建/填充/解析/转 HTML，支持 LibreOffice/ISO 标准流程 | 企业级文档互操作刚需，填补 docx/pdf 之外的开放格式空白 | 🟢 OPEN |

> **注**：所有列入 PR 均为 **OPEN** 状态，说明核心高价值技能尚未大规模合入，社区处于“提案与打磨并行”阶段。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **供应链安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 社区技能冒充 `anthropic/` 命名空间，导致用户误授高权限；需官方签名/命名空间隔离/审计机制 | 🔥 **43 评论 / 2👍** 全仓最高 |
| **组织级技能分发与治理** | [#228](https://github.com/anthropics/skills/issues/228) | 团队内技能共享现靠“下载→发 Slack→手动上传”，需原生共享库、版本控制、权限模型 | **16 评论 / 8👍** |
| **技能创建工具链可用性** | [#556](https://github.com/anthropics/skills/issues/556) [#1169](https://github.com/anthropics/skills/issues/1169) | `run_eval.py`/`run_loop.py` 在 Windows/跨平台全链路失效，导致描述优化闭环不可用 | **12+3 评论 / 7+1👍** |
| **上下文窗口与 Token 预算管理** | [#1487](https://github.com/anthropics/skills/issues/1487) [#1329](https://github.com/anthropics/skills/issues/1329) | `claude-api` 单次注入 156k tokens 耗尽上下文；长周期 Agent 需符号化压缩记忆 | **4/9 评论** |
| **技能包分发去重与规范** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` 与 `example-skills` 内容完全重复，污染上下文窗口 | **6 评论 / 9👍** |
| **推理质量与交付保障体系化** | [#1385](https://github.com/anthropics/skills/issues/1385) [#412](https://github.com/anthropics/skills/issues/412) | 从“任务前校准→对抗性审查→交付验证”三闸管道，到 Agent 治理（策略/威胁/信任/审计） | **4/6 评论** |
| **跨平台/云原生兼容** | [#29](https://github.com/anthropics/skills/issues/29) [#1050](https://github.com/anthropics/skills/pull/1050) | Bedrock/Azure 部署指引缺失；Windows `claude.cmd`、`PATHEXT`、编码、管道读取全链路坑 | **4 评论 / 多 PR 修复** |

---

## 3. 高潜力待合并 Skills（讨论活跃、解决明确痛点、近期可落地）

| PR | Skill | 切入痛点 | 合并阻力评估 | 预计落地窗口 |
|----|-------|----------|--------------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评估链路全修复** | 核心工具链“零召回率”导致优化失效，阻塞所有新技能质量把关 | 低（多 Issue 佐证、多 PR 并行修复、涉及 Windows/并行/隔离三重修复） | **极高**（1-2 周内） |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 直接解决 #492 信任危机，提供自动化质量/安全门禁 | 中（需定义评分阈值与 CI 集成规范） | **高**（2-3 周） |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 通用交付前质量关卡，零依赖、即插即用，响应 #1385 提案 | 低（设计完整、测试用例丰富） | **高**（2 周） |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 补全技能体系“测试”拼图，覆盖单元/组件/契约/E2E/混沌/变异全谱 | 低（内容成熟、社区共识度高） | **高**（2-3 周） |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | 解决长任务上下文膨胀的结构性方案，已有 Issue #1417 共识 | 低（实现简洁、副作用可控） | **高**（1-2 周） |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 文档输出“隐性质量”刚需，通用性极强 | 低（纯指导类技能、无外部依赖） | **中高**（2-3 周） |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 设计/可视化/前端高频长尾知识封装，复用率高 | 低（自包含、无破坏性变更） | **中**（3-4 周） |

---

## 4. Skills 生态洞察（一句话总结）

> **社区核心诉求已从“扩充技能广度”转向“夯实工程化基建”：** 以 **skill-creator 评估链路修复**、**供应链安全/命名空间治理**、**组织级分发机制**、**上下文预算与质量关卡体系** 为四大支柱，推动 Skills 从“个人提示词集合”进化为**可审计、可分发、可度量、可自治的企业级能力单元**。

---

# Claude Code 社区动态日报 | 2026-08-06

---

## 1. 今日速览

- **版本更新**：发布 v2.1.223，新增 GitHub 组织级通配符配置（`owner/*`）至 `strictKnownMarketplaces` 与 `blockedMarketplaces`，并为工作流代理、分支技能、斜杠命令及后台会话恢复新增警告提示。
- **社区热点聚焦**：**用量计费与配额异常**成为核心痛点（Max 套餐无故消耗、Pro 配额持续扣减、Opus 5 误判为 Fable 5），叠加 **Opus 4.8/5.0 模型表现争议**（语言毒性、安全策略误触发降级）与 **Desktop 客户端稳定性**（5 小时限制崩溃、GPU 进程崩溃、Windows MSIX 完整性异常）三大主题。
- **新增 Issue 爆发**：今日新开 11 个 Issue，覆盖 Chrome 扩展权限循环、MCP 参数解析静默丢失、Windows 路径长度限制、会话记录跨项目迁移等深度工程问题。

---

## 2. 版本发布

### v2.1.223
**发布时间**：过去 24 小时内  
**核心变更**：
- **企业级市场管理增强**：`strictKnownMarketplaces` 与 `blockedMarketplaces` 托管设置新增支持 `owner/*` 通配符，允许一键放行/封锁 GitHub 组织下所有 Marketplace 仓库。
- **运行时安全提示**：当检测到工作流代理、分支技能、斜杠命令或后台会话恢复时，自动输出警告，降低隐式行为风险。

> [查看 Release 详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.223)

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 类型 | 热度 | 核心诉求 | 为什么重要 |
|---|-------|------|------|----------|------------|
| 1 | [#82506](https://github.com/anthropics/claude-code/issues/82506) | Bug | 👍7 · 17 评论 | **Max 套餐会话上限在未使用时被消耗** | 直接关乎计费公信力，多用户反馈“静默扣费”，若属实将引发信任危机。 |
| 2 | [#66504](https://github.com/anthropics/claude-code/issues/66504) | Enhancement | 👍46 · 12 评论 | **Commit/PR 自动附加 Session URL 应改为 Opt-in** | 46 赞显示强烈共识：当前行为污染 Git 历史，泄露会话上下文，需用户显式同意。 |
| 3 | [#77136](https://github.com/anthropics/claude-code/issues/77136) | Bug | 👍8 · 8 评论 | **Opus 4.8 语言毒性 / Opus 5.0 不连贯** | 核心模型体验倒退，开发者称“毒性难忍”“5.0 逻辑崩坏”，影响生产力信心。 |
| 4 | [#83403](https://github.com/anthropics/claude-code/issues/83403) | Bug | 7 评论 | **Desktop 近 5 小时限制崩溃且需重装** | 严重可用性缺陷，阻断长会话工作流，Windows/macOS 均有报告。 |
| 5 | [#82536](https://github.com/anthropics/claude-code/issues/82536) | Bug | 7 评论 | **`--continue` 无法找到 `-p` 创建的交互会话** | 破坏“会话恢复”核心承诺，CLI 与交互模式互通失效。 |
| 6 | [#72228](https://github.com/anthropics/claude-code/issues/72228) | Bug | 👍1 · 5 评论 | **MCP 长参数后参数静默丢失 (v2.1.195+)** | 数据完整性风险：工具调用参数被截断且无报错，导致下游任务失败难排查。 |
| 7 | [#83744](https://github.com/anthropics/claude-code/issues/83744) | Bug | 4 评论 | **Windows Desktop GPU 进程崩溃 (exitCode 101457950)** | 原生应用稳定性底线问题，整进程退出且无恢复机制。 |
| 8 | [#74715](https://github.com/anthropics/claude-code/issues/74715) | Bug | 4 评论 | **Chrome 扩展 "Always allow" 仍按 once 持久化** | 权限体系失效，导致每次浏览器动作弹窗，严重破坏自动化体验。 |
| 9 | [#84362](https://github.com/anthropics/claude-code/issues/84362) | Bug | 新增 | **Tag-grammar 解析器吸收参数块导致 6.2% 字段静默丢失** | 复现了已关闭旧 Issue (#44826)，MCP 重度用户的数据可靠性隐患。 |
| 10 | [#84355](https://github.com/anthropics/claude-code/issues/84355) | Bug | 新增 | **Claude-in-Chrome 每动作必弹权限 (90 分钟 813 次)** | 权限缓存全面失效，配合 #74715 显示 Chrome 集成处于不可用状态。 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心内容 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#41661](https://github.com/anthropics/claude-code/pull/41661) | Open | **新增 14 个生产级插件**（安全、性能、架构、全栈自动化），Marketplace 总量达 27 个 | 生态扩展：为企业级自动化提供开箱即用组件，降低二次开发门槛。 |
| 2 | [#16929](https://github.com/anthropics/claude-code/pull/16929) | Open | **修复 `/code-review`：尊重 `--comment` 标志**，默认终端输出而非强制 GitHub 内联评论 | 修正 CLI 行为与文档一致性，避免噪音污染 PR 讨论区。 |
| 3 | [#84138](https://github.com/anthropics/claude-code/pull/84138) | Open | **Cowork Hook 规避 Bun 自签证书错误** (macOS 无代理环境) | 解决本地开发环境 SSL 阻断，提升协作功能可用性。 |

> 仅 3 个 PR 活跃，社区贡献集中于插件生态与细节修复，核心仓库迭代仍以官方为主。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 说明 |
|----------|------------|--------------|------|
| **计费/配额透明化与纠错** | #82506, #84360, #84358, #84359 | ⭐⭐⭐⭐⭐ | 多条“静默扣费/错配模型”报告集中爆发，用户要求实时用量审计 API 与争议申诉通道。 |
| **模型行为可控性** | #77136, #84353, #84361, #84340 | ⭐⭐⭐⭐ | Opus 4.8/5.0 毒性、误判、降级交织；需提供**模型行为策略配置**（温度、安全阈值、回退规则）。 |
| **Desktop 原生稳定性** | #83403, #83744, #84333, #79867 | ⭐⭐⭐⭐ | 崩溃、重装、MSIX 完整性、权限弹窗版本号裸露——原生应用质量亟待工程化治理。 |
| **会话/上下文可迁移性** | #81946, #82536, #84354, #64036 | ⭐⭐⭐ | 会话记录、临时文件、FleetView 状态与项目路径强绑定，跨机器/跨目录协作受阻。 |
| **MCP/工具链鲁棒性** | #72228, #84362, #53134, #72875 | ⭐⭐⭐ | 参数丢失、双重启动、登录循环、证书错误——基础设施层需加强契约测试与降级。 |
| **Chrome/浏览器扩展体验** | #74715, #77605, #84355, #56204 | ⭐⭐⭐ | 权限持久化失效、跨机器驾驶风险、移动端斜杠命令缺失——扩展生态尚未生产级。 |
| **企业级治理能力** | v2.1.223 (通配符), #81946, #66504 | ⭐⭐ | 组织级市场管控、审计友好的提交信息、项目级数据隔离逐成刚需。 |

---

## 6. 开发者关注点总结

| 痛点/高频需求 | 典型反馈 | 建议优先级 |
|--------------|----------|------------|
| **“用了多少 Token 我不清楚，钱却少了”** | Max/Pro 配额异常扣减、模型归因错误、无实时仪表盘 | **P0** — 计费信任是付费用户留存基石 |
| **“模型像换了个人，时毒时疯”** | Opus 4.8 毒性发作、Opus 5.0 逻辑断层、安全策略误伤正当安全研究 | **P0** — 核心产品力，需提供版本锁定/回滚/策略微调 |
| **“长会话必崩，还得重装”** | 5 小时硬限制触发崩溃、GPU 进程死、MSIX 完整性损坏 | **P1** — 原生客户端 SLA 未达标，影响企业采购决策 |
| **“会话绑在绝对路径上，换机器/换目录全丢”** | 历史记录、临时文件、Fleet 状态均非项目相对 | **P1** — 团队协作与多环境开发的硬性阻碍 |
| **“MCP 调用参数莫名其妙丢了”** | 长参数后字段静默截断、Tag-grammar 解析器吸收字段、双重启动 | **P1** — 工具链数据完整性底线，需加入契约校验与遥测 |
| **“Chrome 扩展每次点击都要授权”** | allow 规则失效、跨机器驾驶无设备绑定、移动端无斜杠补全 | **P2** — 扩展生

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-08-06

---

## 1. 今日速览

- **版本密集迭代**：过去 24 小时发布 6 个版本（1 个稳定版回溯修复 + 5 个 Alpha），重点加固网络安全模型的自动审查默认策略，并修复终端权限变更提示。
- **Windows 平台问题集中爆发**：多个高热度 Issue 指向 Windows 桌面端的进程泄漏（僵尸进程 1300+、内存泄漏 37GB）、GPU 进程崩溃导致整应用退出、Sysmon 驱动触发 BSOD 等严重稳定性缺陷。
- **核心基建 PR 批量落地**：19 个 PR 同日合入，覆盖会话迁移、多 Agent 状态追踪、技能系统重构、MCP 握手超时治理、macOS 签名流程安全化等核心基建，显示团队正在大规模重构底层架构。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 | 链接 |
|------|------|----------|------|
| **rust-v0.146.1** | 稳定版回溯修复 | • 为具备网络安全能力的模型应用更安全的自动审查默认值<br>• 在终端界面解释权限变更原因 | [Release Notes](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1) |
| **rust-v0.147.0-alpha.13 / .12 / .11 / .10 / .6.5** | Alpha 预览 | 快速迭代验证 0.147 系列新特性，未公开详细 changelog | [Releases 页面](https://github.com/openai/codex/releases) |

> **关键信号**：0.146.1 专门回溯了“网络安全模型自动审查加固”（PR #37057），说明该安全策略变更优先级极高，已纳入稳定分支。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 类型 | 热度 (👍/评论) | 关键点 | 链接 |
|---|------|------|----------------|--------|------|
| **#9203** | 请恢复 `/undo` 命令 | 增强 / TUI | 373 / 70 | 社区呼声最高功能：Git 未跟踪文件被误删/误改时无法回滚，严重影响信任度 | [#9203](https://github.com/openai/codex/issues/9203) |
| **#12491** | MCP 子进程未回收 → 1300+ 僵尸进程、37GB 内存泄漏 | Bug / MCP / App | 5 / 32 | 桌面端长时任务后资源耗尽，需重启才能恢复，阻断生产力 | [#12491](https://github.com/openai/codex/issues/12491) |
| **#33776** | Windows: `ChatGPT.exe` 疯狂生成 `taskkill.exe`/`conhost.exe` 导致 WMI 风暴 & DWM 降级 | Bug / Windows | 27 / 30 | 系统级副作用：不仅应用崩，还拖垮整个 Windows 图形子系统 | [#33776](https://github.com/openai/codex/issues/33776) |
| **#19425** | 自定义 stdio MCP 服务器工具在 Desktop 线程中不可见 | Bug / MCP / App | 5 / 29 | MCP 工具发现与暴露层解耦失效，回归问题 | [#19425](https://github.com/openai/codex/issues/19425) |
| **#23979** | 更新后本地项目会话历史消失（数据仍在 `state_5.sqlite`） | Bug / App / Session | 5 / 26 | 数据迁移/索引重建失效，用户感知为“数据丢失” | [#23979](https://github.com/openai/codex/issues/23979) |
| **#31035** | Windows: 重复安装/启动 SysmonDrv v13.22 导致 BSOD | Bug / Windows / Sandbox | 0 / 23 | 内核级驱动冲突，机器反复蓝屏，安全工具链副作用 | [#31035](https://github.com/openai/codex/issues/31035) |
| **#37002** | 点击 App 内“更新”后无法安装 (macOS 12) | Bug / App | 1 / 20 | 更新通道断裂，用户卡在旧版本 | [#37002](https://github.com/openai/codex/issues/37002) |
| **#35481** | VS Code 中 Codex Diff 报 “Oops, an error has occurred” | Bug / Windows / Extension | 49 / 18 | **已关闭** - IDE 扩展核心查看功能受损，影响代码审查流 | [#35481](https://github.com/openai/codex/issues/35481) |
| **#32177** | 附带纯文本日志触发 “Request blocked” 并污染后续轮次 | Bug / App / Context | 16 / 14 | 上下文压缩/安全过滤误伤正常日志分析场景 | [#32177](https://github.com/openai/codex/issues/32177) |
| **#34684** | `codex mcp login` 在 macOS 上报 “No authorization support detected” (Linux 正常) | Bug / MCP / CLI | 5 / 10 | 跨平台 OAuth 实现不一致，阻断 macOS 开发者接入自建 MCP | [#34684](https://github.com/openai/codex/issues/34684) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 类型 | 核心价值 | 链接 |
|---|------|------|----------|------|
| **#37190** | 网络安全模型遭遇一次 Guardian 拒绝即中断轮次 | 安全 / 核心 | 落地 0.146.1 回溯修复的核心逻辑：收紧高风险模型的自动审查熔断策略 | [#37190](https://github.com/openai/codex/pull/37190) |
| **#37191** | 会话迁移保留遗留语义（回滚、压缩检查点、子 Agent 副本） | 基建 / 会话 | 解决 #23979 类问题的根因：历史 rollout 迁移不再改变可见对话或模型上下文 | [#37191](https://github.com/openai/codex/pull/37191) |
| **#37189** | 在世界状态中追踪多 Agent 使用提示 | 架构 / 多 Agent | 会话恢复时自动同步最新多 Agent 配置，避免指令漂移 | [#37189](https://github.com/openai/codex/pull/37189) |
| **#37188** | 为搜索工具保留 `tool_search` 命名空间 | 工具 / MCP | 防止命名冲突导致 BM25 检索工具被遮蔽，修复 #32101 相关发现 | [#37188](https://github.com/openai/codex/pull/37188) |
| **#37175** | 分页历史新增遗留 rollout 迁移工具（支持干跑/限流/逐条结果） | 基建 / 数据迁移 | 为大规模历史数据上分页存储提供可观测、可控的迁移路径 | [#37175](https://github.com/openai/codex/pull/37175) |
| **#37168** | 给远程 MCP 握手 HTTP 请求加超时边界 | MCP / 可靠性 | 避免流式 HTTP 握手超时而底层执行器仍占用串行槽位，导致后续请求饥饿 | [#37168](https://github.com/openai/codex/pull/37168) |
| **#37167** | 向 MCP 贡献者暴露会话来源 | MCP / 扩展性 | 让 MCP 服务器能感知线程级上下文（如项目根路径、权限集），支持更精准的工具注入 | [#37167](https://github.com/openai/codex/pull/37167) |
| **#37154** | macOS 公证改用 Azure Key Vault 托管私钥 | 供应链 / 安全 | 消除 CI runner 上的长期私钥泄露风险，符合零信任发布流 | [#37154](https://github.com/openai/codex/pull/37154) |
| **#37151** | 合并并发 Git 状态扫描 | 性能 / Git | 同一仓库根并发请求复用一次 `git status --porcelain`，大幅降低大仓库 TUI 启动延迟 | [#37151](https://github.com/openai/codex/pull/37151) |
| **#37149** | 将 Orchestrator 技能目录投影到世界状态 | 架构 / 技能系统 | 技能目录随世界状态增量持久化，跨轮次不变则不重算，提升多 Agent 编排性能 | [#37149](https://github.com/openai/codex/pull/37149) |

> **趋势**：当日合入 PR 全为 `copyberry[bot]` 自动化/半自动化提交，说明核心基建重构已进入“自动化落地期”，人工 Review 主要集中在架构决策而非单个补丁。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 方向 | 代表 Issue | 社区信号强度 | 备注 |
|------|------------|--------------|------|
| **会话可逆性/撤销** | #9203 (373👍) | ⭐⭐⭐⭐⭐ | 单一功能获赞最高，开发者对“无法后悔”极度焦虑 |
| **Windows 原生稳定性** | #33776, #31035, #35352, #35411, #35566, #35635, #35737, #37187 | ⭐⭐⭐⭐ | 8 个高热度 Issue 直指进程管理、GPU 崩溃、驱动冲突、MSIX 签名损坏 |
| **MCP 生态完善** | #12491, #19425, #34684, #32101, #36673 | ⭐⭐⭐ | 从“能跑”向“生产级可靠”演进：进程回收、工具暴露、跨平台 OAuth、命名空间隔离 |
| **上下文/压缩智能化** | #33493, #32533, #32309, #32177 | ⭐⭐⭐ | 长会话自动压缩触发循环、Reasoning effort 切换卡死、大上下文轮询放大 |
| **IDE 扩展体验** | #35481 (49👍), #24527 (TUI 输入延迟) | ⭐⭐

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-06

---

## 1. 今日速览
- **发布节奏加速**：连续推送 `v0.54.0` 稳定版、`v0.55.0-preview.1` 与 `v0.55.0-nightly`，标志着 v0.55 版本线进入预览验证阶段，核心修复了 macOS 沙箱配置缺失回退、PR 生成器基础设施等问题。
- **核心稳定性攻坚集中爆发**：过去 24 小时合并/关闭了 10+ 个 P1/P2 级修复 PR，重点解决 v0.53 引入的 `thoughtSignature` 回归导致的 400 错误、SDK 流式传输中断、GCA 模型容量降级死循环、IDE 连接超时卡死等阻塞性问题。
- **Agent 架构痛点持续暴露**：Issue 热度集中在 Subagent 异常恢复、Generalist Agent 挂起、浏览器 Agent Wayland 兼容、Auto Memory 低信号会话处理等架构层面缺陷，反映多 Agent 协作机制仍处于快速迭代磨合期。

---

## 2. 版本发布

### v0.55.0-preview.1 (预览版)
- **发布时间**：2026-08-06
- **核心变更**：
  - 包含 v0.54.0 与 v0.53 完整 Changelog
  - 版本号从 nightly 切换至 preview 发布通道
- **链接**：[Release v0.55.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.1)

### v0.55.0-nightly.20260806.g761f604c1 (每夜构建)
- **关键修复**：
  - `fix(cli)`: macOS Seatbelt 配置文件缺失时回退至内嵌配置，解决沙箱启动失败 ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551))
  - `feat(pr-generator-core)`: 新增环境配置解析器、命令执行器、GitHub REST 客户端，奠定 PR 自动化生成管道基础
- **链接**：[Nightly Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260806.g761f604c1)

### v0.54.0 (稳定版)
- **发布时间**：2026-08-06
- **主要包含**：v0.53.0-preview 与 v0.52.0 的累积变更日志
- **链接**：[Release v0.54.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0)

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 核心痛点 | 热度指标 | 关注理由 |
|---|-------|----------|----------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 恢复后误报 GOAL 成功 | `codebase_investigator` 达 MAX_TURNS 仍上报成功，掩盖中断 | 💬12 👍2 | **P1 阻塞性 Bug**：导致任务状态虚假成功，破坏编排可信度，需回测验证 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 挂起 | 委托给 generalist agent 后无限等待，简单建文件夹也卡死 | 💬8 👍8 | **高赞 P1**：用户被迫禁用子 Agent，严重影响易用性，急需根因定位 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行完成仍卡在 "Waiting input" | 简单命令执行完毕但 CLI 仍显示等待输入，频繁复现 | 💬4 👍3 | **核心交互阻断**：直接影响终端操作流，疑似 PTY/流控制竞态 |
| 4 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | 提取器跳过低信号会话导致其永留 inbox，反复被处理 | 💬5 | **资源泄漏隐患**：后台任务无限循环消耗配额，需引入隔离/熔断机制 |
| 5 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128/400 触发 400 错误 | 可用工具过多导致 API 请求体超限 | 💬3 | **架构扩展性瓶颈**：需实现工具作用域动态裁剪或分页注册 |
| 6 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser Subagent 在 Wayland 下失败 | Wayland 环境下浏览器代理启动即报 GOAL 终止 | 💬4 👍1 | **平台兼容性缺口**：Linux 桌面主流显示协议不支持，阻碍采用 |
| 7 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖 | `maxTurns` 等配置在 Browser Agent 完全失效 | 💬3 | **配置系统一致性缺陷**：AgentRegistry 合并逻辑未下传至子 Agent |
| 8 | [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) v0.33.0 后 Subagent 未经授权自动运行 | 明确禁用 Agents 模式仍自动调用 generalist 等子 Agent | 💬3 | **安全/可控性回归**：用户失去对 Agent 调用的显式控制权 |
| 9 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 利用模型原生 Bash 亲和性 (AST 感知/零依赖沙箱) | 提议引入 AST 感知工具链、执行后意图路由 | 💬8 👍1 | **长期架构演进方向**：Epic 级探索，关联 #22745、#22746，代表社区对“原生代码操作能力”强烈诉求 |
| 10 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级鲁棒评测体系建设 | 76 个行为评测用例，6 模型矩阵，需工程化评测基建 | 💬7 | **质量保障基建**：从人工测试向自动化评测转型的关键里程碑 |

---

## 4. 重要 PR 进展 (Top 10)

| # | PR | 类型 | 核心内容 | 影响范围 |
|---|----|------|----------|----------|
| 1 | [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | **Bugfix (P0)** | 修复 `stripThoughts()` 误删 `functionCall.thoughtSignature` 导致的 v0.53 回归 (API 400) | **全量用户**；已合并进 v0.54.0/v0.55 预览版 |
| 2 | [#28695](https://github.com/google-gemini/gemini-cli/pull/28695) / [#28660](https://github.com/google-gemini/gemini-cli/pull/28660) | **Bugfix (P2)** | SDK `sendStream` 增加防御性 JSON 解析，防止模型输出畸形 tool args 炸裂流式生成器 | **非交互模式/SDK 使用者**；提升流式传输鲁棒性 |
| 3 | [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | **Bugfix (P1)** | 修复 GCA Agent 模式下 `MODEL_CAPACITY_EXHAUSTED` (429) 触发同模型无限重试，未降级至 Flash | **企业版/GCA 用户**；解决配额耗尽时的可用性崩塌 |
| 4 | [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | **Bugfix (P1)** | 双修复：1) `/compress` 会话重载失败 2) 配额限制导致工具响应丢失腐毁历史 | **长会话/高并发用户**；核心会话持久化链路修复 |
| 5 | [#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | **Bugfix (P1)** | 阻止新用户消息融合进未回答的工具响应轮次 (ESC/流中断后的“模型接话”Bug) | **交互体验**；修复对话上下文污染导致的指令跟随失效 |
| 6 | [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | **Feature/Security** | Cloud Workstations OAuth 重定向 URI 动态解析，修复浏览器在本地但后端在远程 VM 的回调失败 | **云原生开发者**；解除 Cloud Workstations 认证阻塞 |
| 7 | [#28677](https://github.com/google-gemini/gemini-cli/pull/28677) | **Bugfix (P1)** | `IdeClient.getInstance()` 引入 3s 超时兜底，防止进程树遍历卡死导致 TUI 永停 "Initializing..." | **全平台 IDE 集成**；消除启动卡顿顽疾 |
| 8 | [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | **Bugfix** | `relaunchAppInChildProcess` 转发终止信号 (SIGTERM/INT 等) 至子进程，避免孤儿进程 | **进程管理/监控场景**；提升部署运维规范性 |
| 9 | [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | **Bugfix** | 解析嵌套 gaxios 流式错误的 `cause.message`，精准识别配额/限流错误并分类处理 | **错误诊断/自动重试**；增强后端异常可观测性 |
| 10 | [#28694](https://github.com/google-gemini/gemini-cli/pull/28694) | **CI/Release** | 夜ly 发布兼容禁止 `dist-tag` 删除的私有源 (Wombat Dressing Room)，优雅降级而非失败 | **发布工程**；保障多注册镜像发布管道稳定 |

---

## 5. 功能需求趋势 (从 Issue 全量提炼)

1.  **Agent 编排与可观测性成熟度提升** (高频)：
    - Subagent 状态同步、轨迹可视化 (`/chat share` #22598)、配置继承 (#22267)、权限边界 (#22093)、破坏性操作抑制 (#22672)
    - **趋势**：从“能跑通”向“可调试、可配置、可审计”演进，社区强烈要求子 Agent 成为一等公民而非黑盒。

2.  **原生代码操作能力深化** (战略级)：
    - AST 感知读写/搜索/映射 (#22745, #22746, #19873)、零依赖 OS 沙箱、执行后意图路由
    - **趋势**：利用 Gemini 原生 Bash/工具链亲和性，减少 Tool Call 开销，走向“模型即 Shell 用户”范式。

3.  **长时记忆与知识管理自动化** (新兴)：
    - Auto Memory 低信号隔离 (#26522)、确定性脱敏 (#26525)、补丁合法性检疫 (#26523)、全量 Bug 追踪 (#26516)
    - **趋势**：记忆系统从实验特性转向生产级，聚焦数据质量、隐私合规、存储效

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-08-06

---

## 1. 今日速览

- **版本密集迭代**：过去 24 小时发布 4 个预发布版本（v1.0.79-2 至 v1.0.79-5），核心聚焦于**多会话管理**、**提示词固定**体验优化及**沙箱构建缓存**修复。
- **社区高活跃度**：24 小时内 24 个 Issue 更新，涵盖 MCP 集成故障、模型推理参数异常、Windows 原生崩溃、企业级策略阻断等关键阻断性问题。
- **企业级与 MCP 生态痛点凸显**：多个 Issue 指向 GHEC 数据驻留下的 MCP 策略拉取失败、OAuth 3LO 认证不支持、非 GitHub 远程仓库导致的注册表搜索 400 错误，反映企业落地场景兼容性挑战。

---

## 2. 版本发布

### v1.0.79-5 (最新预发布)
[GitHub Release](https://github.com/github/copilot-cli/releases/tag/v1.0.79-5)
- **新增**：Sessions 标签页与侧边栏支持**管理多个并发会话**，显著提升多任务并行能力。
- **改进**：**Prompt pinting（提示词固定）默认关闭**，需显式设置 `pinnedPrompts: true` 启用，减少终端空间占用。
- **修复**：沙箱包装器构建（make 等）现能根据构建清单正确获取开发工具缓存，解决增量构建缓存失效问题。

### v1.0.79-3
[GitHub Release](https://github.com/github/copilot-cli/releases/tag/v1.0.79-3)
- **改进**：引入 `/worktree new` 命令，支持在新 worktree 中启动会话，强化 Git worktree 工作流支持。

### v1.0.79-2
[GitHub Release](https://github.com/github/copilot-cli/releases/tag/v1.0.79-2)
- **改进**：Pinned prompt 位置上移一行（复用 Tab 栏预留行），保持提示词形状不变，且在 30 行以下终端默认关闭以避免遮挡输出。

> **趋势**：v1.0.79 系列正通过高频预发布快速验证“多会话、Worktree、Prompt 交互”三大核心体验重构。

---

## 3. 社区热点 Issues（精选 10 个）

| # | Issue | 核心问题 | 关注度/评论 | 重要性判断 |
|---|-------|----------|-------------|------------|
| **#4378** | [Cloud agent: MCP registry policy fetch fails with 401/403 on GHEC data residency](https://github.com/github/copilot-cli/issues/4378) | GHEC 数据驻留实例下，云代理静默丢弃所有用户配置 MCP，仅保留平台默认值。 | 👍 0 / 新建 | **🔴 阻断级**：企业级数据合规场景下 MCP 生态完全失效，无报错仅静默失败，排查极难。 |
| **#4374** | [/mcp search fails with 400 Bad Request in every repo with a non-GitHub (Azure DevOps) git remote](https://github.com/github/copilot-cli/issues/4374) | 非 GitHub 远程仓库（如 Azure DevOps）导致 MCP 注册表搜索 400 失败。 | 👍 4 / 新建 | **🔴 阻断级**：混合源代码托管环境常见，直接导致 MCP 发现功能不可用。 |
| **#4026** | [Copilot CLI crashes repeatedly (native runtime), reproducible across versions, unresolved since May 2026](https://github.com/github/copilot-cli/issues/4026) | Windows 原生运行时频繁崩溃，跨版本（v1.0.15+）持续 3 个月未解。 | 👍 0 / 评论 2 | **🔴 稳定性**：Windows 用户核心可用性受损，长期未修复引发信任危机。 |
| **#4345** | [Reasoning effort 'medium' not supported for model 'claude-haiku-4.5'](https://github.com/github/copilot-cli/issues/4345) | 特性旗位开启时，子代理执行报错：Claude Haiku 4.5 不支持 medium reasoning effort。 | 👍 4 / 评论 2 | **🟠 兼容性**：模型能力矩阵与 CLI 参数校验不匹配，影响多模型路由策略。 |
| **#3135** | [BYOK statusline shows medium effort despite --effort high](https://github.com/github/copilot-cli/issues/3135) | BYOK 模式下 `--effort high` 实际发送高推理，但状态栏显示 medium，自 v1.0.41 回归。 | 👍 1 / 评论 3 | **🟠 可观测性**：显示与实际不一致，误导开发者调试推理成本。 |
| **#4371** | [MCP OAuth 3LO (Authorization Code) fails with MCP error -32042](https://github.com/github/copilot-cli/issues/4371) | MCP Gateway 配置 OAuth 3LO 时，工具调用失败，客户端不支持 URL elicitation 认证流。 | 👍 0 / 新建 | **🟠 认证生态**：企业级 MCP 服务常用 3LO，CLI 缺乏标准 OAuth 交互能力。 |
| **#1799** | [How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799) | 新版 alt-screen 导致多问题，用户需关闭回退原模式，缺乏配置入口。 | 👍 8 / 评论 12 | **🟡 体验**：高赞老 Issue，反映 UI 重构缺乏降级开关，影响终端渲染兼容性。 |
| **#4202** | [Built-in view tool reports "Path does not exist" for existing files in 1.0.73](https://github.com/github/copilot-cli/issues/4202) | `view` 工具在 1.0.73 回归，读取存在文件报错，1.0.71 正常。 | 👍 1 / 评论 5 | **🟡 核心工具回归**：内置工具链稳定性回归，影响代码阅读基础流程。 |
| **#4379** | [Browser canvas: isolated storage partition breaks GitHub login persistence](https://github.com/github/copilot-cli/issues/4379) | 浏览器画布每个实例独立存储分区，GitHub 登录态无法持久化/共享。 | 👍 0 / 新建 | **🟡 Web 集成**：Canvas 交互场景下认证体验断裂。 |
| **#4382** | [Kernel execve returns ENOEXEC but ld.so runs fine — Oracle Linux 10](https://github.com/github/copilot-cli/issues/4382) | Oracle Linux 10 上 npm 安装二进制无法直接执行，需强制 ld 运行。 | 👍 0 / 新建 | **🟢 分发兼容**：特定发行版动态链接器兼容性问题，影响新环境落地。 |

---

## 4. 重要 PR 进展

> **过去 24 小时无 PR 更新**（共 0 条）。
> *提示：核心维护可能集中在内部 monorepo 或 release 分支，社区 PR 合并节奏较慢。*

---

## 5. 功能需求趋势（从 Issues 提炼）

1. **MCP 企业级生产就绪** ⬆️ **最热**
   - 策略获取认证（GHEC 数据驻留 #4378）、非 GitHub 远程注册表支持（#4374）、OAuth 3LO 标准流（#4371）、FastMCP 兼容（#4370）。
   - *信号：企业用户将 MCP 视为核心扩展点，但认证、策略、发现三大基础设施层面仍有重大缺口。*

2. **多模型/推理参数精准控制** ⬆️
   - Reasoning effort 与模型能力矩阵校验（#4345）、BYOK 状态栏显示一致性（#3135）、BYOM 模型动态发现与会话内切换（#4376）、GPT-5.6 误委托 Opus（#4377）。
   - *信号：模型多样化带来参数校验、路由、可观测性的组合复杂度爆炸。*

3. **会话与上下文管理增强** ⬆️
   - 多并发会话管理（已在 v1.0.79-5 交付）、Steering 消息顺序/队列问题（#4372, #4373）、Worktree 隔离会话（#4373 对应 v1.0.79-3）。
   - *信号：从单线程对话向多任务、多上下文并行演进。*

4. **跨平台稳定性与分发** ➡️
   - Windows 原生崩溃长期未解（#4026）、macOS malloc 日志刷屏（#4375）、Oracle Linux 执行格式错误（#4382）、设备登录 DNS 解析失败（#1037）。
   - *信号：原生二进制分发在长尾环境兼容性挑战持续。*

5. **终端渲染与交互细节打磨** ➡️
   - Alt-screen 可关闭配置（#1799）、剪贴板所有权提示破坏布局（#3172）、Pinned prompt 空间自适应（v1.0.79-2/5）、通知徽标残留（#4381）。

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点类别 | 典型反馈 | 影响面 | 建议关注优先级 |
|----------|----------|--------|----------------|
| **MCP 企业落地“最后一公里”** | 策略 401/403 静默失败、非 GH 远程 400、OAuth 3LO 不支持、自定义注册表被拦截 | 企业用户、安全合规场景、混合代码托管 | **P0** - 直接阻断生产力工具链集成 |
| **Windows 原生稳定性危机** | 跨 4+ 版本持续 3 个月随机崩溃，无明确复现步骤，原生运行时不可信 | Windows 全量开发者 | **P0** - 核心平台可用性底线 |
| **模型参数与路由不透明** | Effort 参数显示与实际不符、不支持的 effort 导致子代理报错、模型委托不可见 | 多模型用户、成本控制、调试排查 | **P1** - 信任度与成本可控性 |
| **核心工具链回归** | `view` 读文件报错、Web search 幻觉、Rubber duck 同模型评审 | 日常编码基础流程 | **P1** - 基础体验质量 |
| **配置降级与兼容开关缺失** | Alt-screen 强制开启无开关、Pinned prompt 强制占用行数、Prompt pinning 默认开关反复调整 | 终端多样化、偏好迁移 | **P1** - 尊重用户现有工作流 |
| **认证与会话持久化碎片化** | Device login DNS 失败、Browser canvas 存储隔离、通知徽标不同步 | 登录入口、Web 集成、桌面端体验 | **P2** - 端到端体验闭环 |

---

## 📌 明日关注建议

1. **v1.0.79 正式版发布节奏**：预发布已至 -5，观察是否进入 RC 或直接 GA，重点验证多会话、Worktree、Prompt pinning 三大特性稳定性。
2. **MCP 企业级 Issue 响应**：#4378、#4374、#4371 是否有核心团队介入或 Workaround 发布，决定企业用户升级信心。
3. **Windows 崩溃 Root Cause**：#4026 长期悬而未决，期待是否有原生运行时调试符号发布或 Electron/TAURI 底层升级计划。
4. **模型能力矩阵文档化**：社区呼声高，建议官方发布 `model -> supported efforts / tool caps` 矩阵表，减少试错成本。

---

*数据来源：github.com/github/copilot-cli | 生成时间：2026-08-06 08:00 UTC*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-08-06

---

## 1. 今日速览
- **核心修复并行推进**：针对模型能力声明缺失导致的任务中断（Issue #2588），社区同步提交了两个 PR（#2590、#2592），分别改进报错提示与降级策略，实现“报错指路”与“任务不中断”的双重保障。
- **文件操作稳定性隐患浮现**：新增 Issue #2591 揭示 `StrReplaceFile` 在处理非 UTF-8 字节时会全量替换为替换字符，导致二进制文件或混合编码文件损坏，属于高优先级数据安全风险。
- **长期高呼声功能持续发酵**：跨会话记忆系统（Issue #1283）更新讨论，社区对持久化上下文、项目模式记忆的需求依然强烈，架构设计讨论已达 19 条评论。

---

## 2. 版本发布
*过去 24 小时无新版本发布。*

---

## 3. 社区热点 Issues

| # | 标题 | 重要性 | 社区反应/进展 | 链接 |
|---|---|---|---|---|
| **#2591** | **StrReplaceFile 损坏编辑区外不可解码字节** | 🔴 **Critical**<br>数据完整性风险：全量 UTF-8 解码+回写机制会破坏二进制文件、混合编码文件或含无效字节的文本文件。 | 新建 0 评论，但属于静默数据损坏类 Bug，需立即修复并回归测试。 | [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) |
| **#2588** | **模型未声明 capabilities 时，MCP 返回图像导致任务中断且无修复提示** | 🟠 **High**<br>体验断层：工具副作用已执行后才报错，且报错未指引用户配置 `capabilities`。 | 已有 2 个 PR 并行修复（#2590 补全报错提示，#2592 降级处理），响应极快。 | [#2588](https://github.com/MoonshotAI/kimi-cli/issues/2588) |
| **#1283** | **[增强] 记忆系统：跨会话持久化上下文** | 🟢 **High (Long-term)**<br>核心产品力：用户期望 AI 记住项目模式、偏好设置、自动/手动记忆融合。 | 创建于 2 月，持续更新至今，19 条评论，架构设计讨论深入，属社区最高呼声功能。 | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) |

---

## 4. 重要 PR 进展

| # | 标题 | 类型 | 核心变更 | 关联 Issue | 状态 | 链接 |
|---|---|---|---|---|---|---|
| **#2592** | `fix(soul): 降级处理不支持的工具媒体类型而非中断任务` | **Bug Fix / Core Logic** | `_grow_context` 不再抛出 `LLMNotSupported` 终止运行，改为降级处理（如丢弃图像/转文本），保证工具副作用后任务可继续。 | #2588 (核心修复) | Open | [#2592](https://github.com/MoonshotAI/kimi-cli/pull/2592) |
| **#2590** | `fix(soul): 在不支持能力的报错中指明配置修复方法` | **DX Improvement** | 报错信息新增 `capabilities` 配置示例，直接指引用户在 `config.toml` 中添加缺失能力（如 `vision`）。 | #2588 (辅助修复) | Open | [#2590](https://github.com/MoonshotAI/kimi-cli/pull/2590) |
| **#2589** | `docs: 提及 qwen-audio-agent 作为语音 ACP 客户端` | **Documentation** | ACP 章节新增开源全双工语音运行时 `qwen-audio-agent` 引用，展示 `kimi acp` 语音交互生态。 | - | Open | [#2589](https://github.com/MoonshotAI/kimi-cli/pull/2589) |

---

## 5. 功能需求趋势
基于近期 Issue 与长期高热度 Issue 分析，社区关注点聚焦于三大方向：

1.  **持久化智能体能力** 🧠
    *   **核心诉求**：跨会话记忆系统（#1283），支持自动提取项目模式、用户偏好落盘，下次会话自动加载。
    *   **衍生需求**：记忆的版本控制、隔离策略（项目级/全局级）、手动注入指令（类 `CLAUDE.md`）。

2.  **多模态与工具生态稳健性** 🛠️
    *   **核心诉求**：模型能力声明标准化、MCP 工具返回非文本内容（图像/音频）的兼容降级机制（#2588, #2592）。
    *   **衍生需求**：ACP 协议生态扩展（语音客户端 #2589）、更多模型适配器开箱即用。

3.  **基础设施可靠性与数据安全** 🛡️
    *   **核心诉求**：文件操作原子性、编码安全（`StrReplaceFile` 不可破坏原文件 #2591）、长上下文窗口管理、Token 成本可视化。

---

## 6. 开发者关注点与痛点

| 痛点/需求 | 典型反馈 | 影响范围 | 建议关注度 |
|---|---|---|---|
| **“静默数据损坏”风险** | `StrReplaceFile` 全量 `errors="replace"` 回写，导致二进制/混合编码文件不可逆损坏（#2591）。 | 所有使用文件编辑工具的开发者，尤其处理 legacy codebase、配置文件、二进制资源时。 | ⭐⭐⭐⭐⭐ **立即修复** |
| **“副作用已发生却任务中断”** | 模型缺 `capabilities` 声明时，MCP 工具已执行（含副作用）才报错 `LLMNotSupported`，且无配置指引（#2588）。 | 接入 MCP / 多模态模型的开发者，调试体验极差。 | ⭐⭐⭐⭐ **PR 已修复中** |
| **“每次会话从零开始”** | 缺乏跨会话记忆，需重复告知项目架构、代码规范、常用命令（#1283，19 条讨论）。 | 所有日常驱动开发的重度用户，迁移成本高。 | ⭐⭐⭐⭐ **规划中** |
| **配置发现性差** | 报错不告诉用户*怎么改配置* （#2588 部分），文档滞后于功能迭代。 | 新用户、切换模型/工具的开发者。 | ⭐⭐⭐ **PR #2590 改进中** |
| **语音/多模态交互生态** | 期望原生支持语音输入、图像输出，ACP 协议客户端生态建设（#2589）。 | 探索无手编程、无障碍交互的前沿用户。 | ⭐⭐ **生态建设期** |

---

> **分析师备注**：今日社区呈现 **"快速响应核心 Bug"（#2588 双 PR 并行）+ "暴露深层隐患"（#2591 编码破坏）+ "持续推进核心大特性"（#1283 记忆系统）** 的健康节奏。建议核心组优先合并 #2591 修复（建议采用二进制安全的行级/块级编辑或强制 UTF-8 校验），同步推进 #2592/#2590 合并以封锁 #2588 回归。记忆系统建议输出 RFC 文档收敛 19 条讨论中的技术方案。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-08-06

---

## 1. 今日速览

- **v1.18.14 发布**：简化 xAI 登录流程（单一 device-code flow），修复结构化流式错误保留与瞬态网络错误重试机制。
- **社区高呼声需求持续升温**：官方 VS Code 扩展（#11176，134 👍）、Go Plan 用量 API（#16017，126 👍）、加密货币支付（#23153）位列前三。
- **v1.18.14 引入回归**：`/sessions` 切换会话导致上下文丢失（#40759），桌面端首页会话列表缺少删除/归档入口（#40786），macOS 内存占用异常（#40779）等新问题集中涌现。

---

## 2. 版本发布

### v1.18.14 (2026-08-06)
| 类型 | 内容 |
|------|------|
| **改进** | xAI 登录简化为单一 device-code flow，更适配 headless/远程环境 |
| **修复** | 保留结构化中流 provider 错误，兼容 provider 重试失败响应；扩展瞬态 provider/网络错误重试范围 |

> 🔗 [Release v1.18.14](https://github.com/anomalyco/opencode/releases/tag/v1.18.14)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 👍 | 评论 | 关注理由 |
|---|------|------|----|------|----------|
| [#11176](https://github.com/anomalyco/opencode/issues/11176) | **Official VS Code Extension** | OPEN | 134 | 27 | **最高呼声功能**，开发者强烈期望原生 IDE 集成，替代现有工作流 |
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | **Go Plan Usage/Balance API** | OPEN | 126 | 32 | 企业/团队需通过 API 监控配额，Dashboard 数据需对外暴露 |
| [#23153](https://github.com/anomalyco/opencode/issues/23153) | **Pay Go with Crypto** | OPEN | 36 | 16 | Web3 开发者群体需求，扩大支付渠道降低门槛 |
| [#34498](https://github.com/anomalyco/opencode/issues/34498) | **Respect `disable-model-invocation` in SKILL.md** | OPEN | 49 | 13 | 与 Claude Code/Cline 互操作，技能调用控制力不足 |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | **DeepSeek V4 Flash 突然要求“启用中国托管模型”** | OPEN | 22 | 17 | **生产环境阻断性 Bug**，订阅用户中途被强制切换地域，信任度受损 |
| [#31932](https://github.com/anomalyco/opencode/issues/31932) | **Cross-Project Session Picker for TUI** | OPEN | 6 | 14 | 多仓库工作流痛点，当前 `/sessions` 仅限单项目 |
| [#40759](https://github.com/anomalyco/opencode/issues/40759) | **`/sessions` 切换会话导致上下文清空 (v1.18.14 回归)** | OPEN | 0 | 2 | **严重回归**，最新版本核心功能失效，需热修复 |
| [#40786](https://github.com/anomalyco/opencode/issues/40786) | **桌面端首页会话列表无删除/归档入口** | OPEN | 0 | 1 | UX 缺失，用户无法管理历史会话，桌面端体验断层 |
| [#40779](https://github.com/anomalyco/opencode/issues/40779) | **macOS 26.5.1 高内存占用 (M2, 16GB)** | OPEN | 0 | 1 | 进程级内存泄漏，影响长时运行稳定性 |
| [#40348](https://github.com/anomalyco/opencode/issues/40348) | **全局 `AGENTS.md` 规则跨会话遗忘 (如 no auto-commit)** | OPEN | 0 | 2 | 核心记忆机制失效，用户需反复提醒，信任度下降 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 核心变更 |
|---|------|------|------|----------|
| [#40723](https://github.com/anomalyco/opencode/pull/40723) | **feat(core): migrate v1 data to v2** | CLOSED | 重构 | REST 触发的 V1→V2 会话迁移，支持可恢复进度、遗留凭证导入、TUI 迁移流程重构 |
| [#38790](https://github.com/anomalyco/opencode/pull/38790) | **[beta] feat(app): add workspace flows to new layout** | OPEN | 功能 | 新布局工作区流程：本地/新建/现有工作区选择、长列表搜索、分支上下文、最近使用默认值 |
| [#40784](https://github.com/anomalyco/opencode/pull/40784) | **feat(core): hosted workspace execution with modal driver** | OPEN | 架构 | **V2 核心里程碑**：托管工作区执行环境，沙箱作为 Workspace 一种，Session 通过 Runner Graph 复用工具链 |
| [#40781](https://github.com/anomalyco/opencode/pull/40781) | **feat(app): export session as json from ui** | CLOSED | 功能 | UI 新增导出会话为 JSON：三点菜单、Context 标签页、命令面板 `/export` 三入口 |
| [#40717](https://github.com/anomalyco/opencode/pull/40717) | **feat: add Swedish community translation** | OPEN | 文档/国际化 | 瑞典语 README、词汇表、语言列表注册、翻译检查器接入 |
| [#40590](https://github.com/anonymco/opencode/pull/40590) | **feat: support GITHUB_TOKEN auth in install script** | OPEN | 工程化 | 安装脚本支持 `GITHUB_TOKEN` 认证，规避匿名 API 限流（版本检测/Release 存在性/资源下载） |
| [#39758](https://github.com/anomalyco/opencode/pull/39758) | **fix(app): show directories in web project picker on open** | OPEN | 修复 | Web 端“打开项目”目录选择器首次显示目录，解决全新浏览器无法添加首个项目 |
| [#40765](https://github.com/anomalyco/opencode/pull/40765) | **refactor(core): deduplicate Copilot endpoint routing** | OPEN | 重构 | 统一使用 `@opencode-ai/ai` 共享的 Copilot 端点路由启发式，移除 Core 侧重复实现 |
| [#40768](https://github.com/anomalyco/opencode/pull/40768) | **fix(mcp): survive cross-process OAuth refresh race** | OPEN | 修复 | 多进程共享 MCP 凭证时，刷新令牌竞态导致二次刷新失败，现复用已注册动态客户端 |
| [#40763](https://github.com/anomalyco/opencode/pull/40763) | **fix(tui): load sidebar project names sooner** | CLOSED | 性能 | TUI 连接即加载持久化垂直标签的项目标签，去除 300ms 后台预取延迟 |

---

## 5. 功能需求趋势（从所有 Issues 提炼）

| 趋势方向 | 代表 Issues | 社区热度信号 |
|----------|-------------|--------------|
| **IDE 原生集成** | #11176 (VS Code)、#34004 (Desktop Anthropic 兼容) | 👍 134，持续 6 个月+，官方回应“规划中” |
| **订阅/计费透明化** | #16017 (用量 API)、#23153 (Crypto)、#39845 (地域限制) | 企业级采用阻碍，需 API、多币种、合规说明 |
| **多项目/跨会话工作流** | #31932、#35581、#40348 (全局规则遗忘)、#40786 (会话管理) | TUI/Web/Desktop 三端体验割裂，统一会话模型成刚需 |
| **技能/提示词工程增强** | #34498 (disable-model-invocation)、#40689 (技能中行自动补全)、#40720/40719 (技能/斜杠命令补全位置) | 向“技能即一等公民”演进，补全、调用控制、前置元数据 |
| **MCP 生态深化** | #8058 (HTTP Streamable)、#11948 (Sampling)、#40768/40769 (OAuth 竞态)、#40722 (TaskMarket) | 协议层落地加速，远程传输、采样、多进程凭证管理成实战痛点 |
| **自动化/代理编排** | #37564 (Auto-mode 权限分类)、#40564 (多 Agent 并行可视化)、#40782 (Computer Use) | 从“单轮对话”向“自主编排”跨越，需可视化、权限分级、环境控制 |
| **国际化与无障碍** | #40716/40785 (瑞典语)、#40780 (鼠标失焦) | 社区贡献翻译流程成熟，桌面端原生交互细节待打磨 |

---

## 6. 开发者关注点（痛点与高频诉求）

1. **v1.18.14 回归风暴**  
   - `/sessions` 切换会话丢失上下文（#40759）  
   - 桌面端首页会话无管理入口（#40

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-06

> 数据来源：`github.com/earendil-works/pi` (pi-mono 仓库)  
> 统计窗口：过去 24 小时内更新的 Issues 与 PRs

---

## 1. 今日速览

今日社区活跃度极高，**无新版本发布**，但合并了 20+ 个 PR，重点解决了 **扩展事件总线内存泄漏**、**Copilot 模型加载失败**、**终端 OSC 8 超链接截断**、**Bun 编译二进制启动崩溃** 等核心稳定性问题。同时，社区正在就 **Windows 原生支持策略**、**Linux XDG 配置规范**、**模型/思考预算粒度控制** 等架构级议题展开深度讨论。新 Provider 接入（Bedrock Mantle、Qwen Token Plan）与 Harness v2 架构重构同步推进。

---

## 2. 版本发布

> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心诉求 | 热度/状态 | 关注理由 |
|---|-------|----------|-----------|----------|
| 1 | **[#7547] Windows 支持策略大讨论** | 梳理 Pi 在 Windows 上的运行方式（WSL、原生、Git Bash 等），决定核心投入重心与文档导向 | 💬 17 · 🟢 Open | **战略级议题**；Windows 开发者基数大，当前碎片化导致维护成本高、用户体验差，亟需统一方案。 |
| 2 | **[#534] Linux 配置目录不符合 XDG 规范** | 要求配置目录从 `~/pi` 迁移至 `$XDG_CONFIG_HOME/pi` | 💬 14 · 👍 23 · 🔴 Closed | **高赞诉求**；虽已关闭但反响强烈，反映 Linux 用户对原生桌面集成规范的强刚需。 |
| 3 | **[#5263] 会话级模型/思考级别修改应默认临时生效** | 主张 `/model` 与思考等级切换仅影响当前会话，全局默认值统一在 `/settings` 管理 | 💬 11 · 👍 12 · 🟢 Open | **UX 核心痛点**；现行为易导致全局配置污染，社区共识倾向“会话级临时、全局显式持久化”。 |
| 4 | **[#7399] `truncateToWidth()` 截断导致 OSC 8 超链接悬空** | 终端渲染截断时未处理 ANSI 转义序列平衡，残留半截超链接污染后续输出 | 💬 12 · 🔴 Closed | **已修复（#7665）**；终端渲染保真度的典型 Bug，影响所有超链接场景（文件引用、诊断跳转等）。 |
| 5 | **[#5291] Anthropic 订阅导致会话卡在 "Working..."** | Enterprise 订阅下并发会话频繁假死，中断/恢复不可靠 | 💬 8 · 👍 3 · 🔴 Closed | **商业用户阻塞性 Bug**；涉及 SSE/WS 长连接与后端限流的竞态，已修复但需持续回归。 |
| 6 | **[#7634] Copilot 登录后模型列表为空** | `availableModelIds` 为空，`model_picker_enabled` 字段语义变更导致过滤逻辑失效 | 💬 2 · 🔴 Closed | **已修复（#7672）**；核心 Provider 可用性事故，影响面极广，修复当日合并。 |
| 7 | **[#7553] Compaction（压缩）需独立思考预算配置** | 自动/手动压缩复用会话当前思考等级，导致推理模型预算被摘要任务挤占 | 💬 7 · 🟢 Open | **推理模型时代的新刚需**；长上下文与思考预算解耦是 Agent 成本控制关键。 |
| 8 | **[#7642] 支持 `AGENTS.override.md` 目录级上下文覆盖** | 同目录下优先加载 `AGENTS.override.md`，替代 `AGENTS.md`/`CLAUDE.md` | 💬 4 · 🔴 Closed | **已实现（#7681）**；单仓多任务/多团队协作的上下文隔离刚需，落地极快。 |
| 9 | **[#7444] WebSocket 重试仅处理两种错误码** | Codex Responses API 其它 `response.failed` 直接抛出，导致瞬时网络抖动硬性中断轮次 | 💬 4 · 🟢 Open | **Provider 稳健性短板**；重试策略过于保守，需补全瞬时错误码白名单。 |
| 10 | **[#7601] Node 20 下因 `undici` 依赖 `CacheStorage` 崩溃** | Node 20.11.1 不满足 `undici` 要求的 ≥22.19.0，导致启动即报错 | 💬 3 · 🔴 Closed | **LTS 兼容性回归**；依赖链最低版本抬升未同步引擎要求，已通过降级/打包规避。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 核心变更 | 状态 |
|---|----|------|----------|------|
| 1 | **[#7656] Fix event bus leak** | 🐛 Fix | 将 `pi.events.on()` 订阅绑定到扩展运行时生命周期，reload/dispose 时自动清理陈旧监听器；新增回归测试。 | ✅ Merged |
| 2 | **[#7672] Restore Copilot models from account policy** | 🐛 Fix | 兼容 Copilot API 新字段：`model_picker_enabled` 为主信号，回退至策略显式启用模型；修复 Individual 与 Enterprise 双轨逻辑。 | ✅ Merged |
| 3 | **[#7681] / [#7664] Support AGENTS.override.md** | ✨ Feat | 上下文发现链新增最高优先级 `AGENTS.override.md`；保留祖先层级叠加与 worktree 去重；标记为 context resource 便于审计。 | ✅ Merged |
| 4 | **[#7679] Support line ranges in @file references** | ✨ Feat | `@file#L122-L145` 语法支持；1-based 包含区间；拒绝图片范围引用；行元数据注入 prompt tag，覆盖 CLI 与 TUI 双端。 | ✅ Merged |
| 5 | **[#7692] / [#7690] Naturally sort model selectors** | 🎨 UX | `/model` 与 `/scoped-models` 共享自然排序比较器：数字感知、大小写不敏感；规范 ID 保持原序，变体聚类展示。 | ✅ Merged |
| 6 | **[#7665] Skip OSC 8 scan for plain prefixes** | ⚡ Perf + Fix | `truncateToWidth` 仅在前缀含 ANSI 时扫描 OSC 8，纯文本快速跳过；修复 #7399 悬空超链接，性能提升显著。 | ✅ Merged |
| 7 | **[#7685] Disable bunfig autoload in compiled binaries** | 🐛 Fix | 编译发布二进制时加 `--no-compile-autoload-bunfig`；防止项目根目录损坏的 `bunfig.toml` 导致 `pi --version` 直接崩溃。 | ✅ Merged |
| 8 | **[#7638] Support thinking_token_budget on openai-completions** | ✨ Feat | OpenAI 兼容端点新增 `thinking_token_budget`；避免推理消耗全部 `max_tokens` 导致无文本/工具调用而被 agent-loop 误判结束。 | ✅ Merged |
| 9 | **[#6216] Add Amazon Bedrock Mantle OpenAI Responses provider** | ✨ Feat | 新增 `bedrock-mantle` Provider，基于 OpenAI Node SDK 的 Bedrock 适配器；替代旧实现，支持 Responses API 流式与工具调用。 | 🟢 Open |
| 10 | **[#7686] Configurable Harness factory** | 🏗️ Arch | 内部暴露 Harness 构建工厂：保留调用方 tools/activation/policy/options；内置工具挂载 prompt metadata 并重建提示词；bash 会话环境隔离。 | 🟢 Open |

---

## 5. 功能需求趋势（从 Issues 提炼）

1. **多模态输入原生化**  
   - #3200 要求 `prompt` RPC 透传 `video`/`audio`，配合 Gemma 4、GPT-4o 等模型；当前仅支持 `images`，阻碍音视频编码/审查场景。

2. **Windows 一等公民化**  
   - #7547 集中讨论原生 MSI、Winget、WSL2 集成、路径转换、终端兼容（ConPTY/WezTerm）等；社区期望“开箱即用”而非“自行拼凑”。

3. **配置与上下文的规范化、层级化**  
   - XDG 合规（#534）、`AGENTS.override.md` 覆盖机制（#7642）、`@file#L` 行级引用（#7673）均指向：**配置可发现、上下文可组合、优先级可预测**。

4. **推理模型的精细化

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-08-06

---

## 1. 今日速览

- **三大版本同步发布**：夜ly v0.21.6-nightly、稳定版 v0.21.6 与 Desktop v0.1.0 同日落地，标志着桌面端进入正式可用阶段，并引入 macOS 原生实时语音交互实验特性。
- **安全与稳定性成核心主线**：多个 P1/P2 安全 Issue（凭证泄露、只读 Shell 绕过）与 CI 挂起问题（`/review` 超时、磁盘满误报）集中爆出，修复 PR 已进入审核管道。
- **Web Shell 成战略支点**：Issue #8092 提议弃用 Electron 改用 Tauri 复用 Web Shell，配合 #8560、#8559 等 PR，桌面端架构正加速向“Web Shell + 原生壳”收敛。

---

## 2. 版本发布

| 版本 | 类型 | 关键变更 | 链接 |
|------|------|----------|------|
| **v0.21.6** | 稳定版 | • macOS WebShell 实验性原生 Live Voice 支持（全局快捷键实时音频）<br>• Web Shell 活跃后台会话保持展开<br>• 多项核心修复与体验打磨 | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6) |
| **desktop-v0.1.0** | 首个桌面正式版 | • 基于 Tauri 的跨平台桌面应用<br>• 复用 Web Shell UI，降低维护成本<br>• Windows/macOS/Linux 安装包同步发布 | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.1.0) |
| **v0.21.6-nightly.20260806.cb3dc107f** | 夜ly | • 修复 `glob external-path` 测试易失败问题（改用专用空目录而非 `/tmp`） | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-nightly.20260806.cb3dc107f) |

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 优先级/标签 | 核心痛点 | 社区热度 | 链接 |
|---|------|-------------|----------|----------|------|
| **#8136** | Provider 警告清洗器截断含端口消息、泄露含 `@` 密码 | P2, **security**, cli | URL 清洗逻辑缺陷导致凭证泄露与误截断，影响 `/status` 接口安全性 | 8 评论 | [#8136](https://github.com/QwenLM/qwen-code/issues/8136) |
| **#8582** | 只读 Shell 分类器自动通过命令替换绕过（行续行/`${var@P}`） | P1, **security**, vulnerability | AST 与运行时检测均可被绕过，攻击者可执行任意代码 | 4 评论 | [#8582](https://github.com/QwenLM/qwen-code/issues/8582) |
| **#8597** | CI `/review` 反向审计扇出静默挂起直到外层超时杀掉 | P1, development, github-actions | 12 次超时/天，4/5 根因为扇出启动卡住，严重消耗 CI 配额 | 2 评论 | [#8597](https://github.com/QwenLM/qwen-code/issues/8597) |
| **#8557** | 缩小终端窗口导致 transcript 重复打印（macOS Warp + tmux） | P3, ui, rendering, macOS | 交互体验严重倒退，滚动回溯出现重复内容 | 4 评论 | [#8557](https://github.com/QwenLM/qwen-code/issues/8557) |
| **#8580** | tmux < 3.5 下 TUI 持续闪屏（每帧全屏清除重绘） | P2, ui, rendering, linux | 根因是 Ink 渲染器溢出处理与未查询 DEC 2026 导致，严重影响远程开发 | 2 评论 | [#8580](https://github.com/QwenLM/qwen-code/issues/8580) |
| **#8615** | Desktop 0.1.0 Windows 启动崩溃：`EISDIR lstat 'C:'` | P1, platform, windows | 首发版在 Windows 打开工作区直接崩溃，阻断 Windows 用户采用 | 2 评论 | [#8615](https://github.com/QwenLM/qwen-code/issues/8615) |
| **#8092** | 基于 Web Shell 构建低维护桌面应用（替代 Electron） | feature, roadmap | 战略性架构提议：复用 Web Shell，弃用独立 Electron 实现 | 5 评论 | [#8092](https://github.com/QwenLM/qwen-code/issues/8092) |
| **#8595** | 一等公民“本地控制”模式：二维码配对手机接管本地会话 | P2, feature, daemon, web-shell | 移动端零配置接管需求强烈，配合 Desktop v0.1.0 落地 | 2 评论 | [#8595](https://github.com/QwenLM/qwen-code/issues/8595) |
| **#8584** | Anthropic 模型 ID 解析拒绝点号次版本（如 `claude-opus-4.8`）且缺 Opus 5 token 限制 | P2, core, token-management | 代理部署常见模型别名不兼容，Token 限制缺失导致超限报错 | 2 评论 | [#8584](https://github.com/QwenLM/qwen-code/issues/8584) |
| **#7306** | 强化工具输出预算、可观测性与制品生命周期（Phase 2） | P2, core, need-discussion | 长期架构治理：输出体积上限、持久化策略、ACP/Headless 统一约束 | 5 评论 | [#7306](https://github.com/QwenLM/qwen-code/issues/7306) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心价值 | 关联 Issue | 链接 |
|---|------|------|----------|------------|------|
| **#8408** | `fix(serve): 使用 authority-scoped 凭证剥离修复 Provider 警告清洗器` | **Open** | 修复 #8136 两大安全缺陷：端口截断与密码泄露 | #8136 | [#8408](https://github.com/QwenLM/qwen-code/pull/8408) |
| **#8602** | `fix(core): 限流流式响应总生存期，精简 review 扇出启动` | **Open** | 直接解决 #8597 CI 挂起：引入请求级总超时 + 精简启动路径 | #8597 | [#8602](https://github.com/QwenLM/qwen-code/pull/8602) |
| **#8616** | `fix(telemetry): 对齐 OpenTelemetry 会话生命周期规范` | **Open** | 标准化 `session.start/end` 事件，补齐 `session.previous_id`，增强可观测性 | #8589 | [#8616](https://github.com/QwenLM/qwen-code/pull/8616) |
| **#8570** | `fix(cli): 上报零高度 VP 项，折叠思维块即时释放空间` | **Open** | 修复虚拟视口折叠后占位不释放，提升长对话渲染性能 | — | [#8570](https://github.com/QwenLM/qwen-code/pull/8570) |
| **#8559** | `feat(web-shell): 改进并行子代理活动反馈` | **Open** | 并行子代理状态常驻会话尾、自动展开/折叠动画，体验显著提升 | — | [#8559](https://github.com/QwenLM/qwen-code/pull/8559) |
| **#7897** | `fix(cli): WSL/ConPTY 下跳过终端重绘优化器` | **Open** | 修复 #7634 WSL + Windows Terminal 流式输出重复渲染 | #7634 | [#7897](https://github.com/QwenLM/qwen-code/pull/7897) |
| **#7734** | `fix(cli): 选用前探测沙箱运行时可用性` | **Open** | 避免假设 PATH 存在即可用，改为 `version` 探活，提升沙箱选择可靠性 | — | [#7734](https://github.com/QwenLM/qwen-code/pull/7734) |
| **#8290** | `fix(core): 零 inode 文件缓存 fail-closed` | **Open** | 防止 `ino=0` 导致跨设备缓存冲突，保证缓存一致性 | — | [#8290](https://github.com/QwenLM/qwen-code/pull/8290) |
| **#8318** | `feat(autofix): 要求隔离的定向 E2E 证明` | **Open** | 自动修复引入不可变失败元数据 + 维护者审批绑定，防止恶意/误触发 | — | [#8318](https://github.com/QwenLM/qwen-code/pull/8318) |
| **#8603** | `ci(autofix): 重型 autofix 作业调度至 ECS 自托管池` | **Open** | 将三大重型作业迁移自托管 ECS，配合仓库级路由表达式，缓解 GitHub-hosted 压力 | — | [#8603](https://github.com/QwenLM/qwen-code/pull/8603) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 | 成熟度 |
|----------|------------|----------|--------|
| **桌面端架构收敛** | #8092, #8596 | 弃用 Electron，Tauri `desktop-shell` 重命名为 `desktop`，复用 Web Shell 单一代码库 | **进行中**（v0.1.0 已发布 Tauri 版） |
| **移动端/远程接管** | #8595, #8560 | 二维码配对、深链接刷新 401 修复、Bearer Token 会话持久化 | **设计阶段** |
| **批量/异步低成本模式** | #8605 | `/slow` 或 `/batch` 命令，走提供商异步/批量 API，降低成本 | **需讨论** |
| **文件操作边界放宽** | #8581, #8606 | `edit/write_file` 支持工作区外路径，VSCode 伴侣链接修复嵌套文件 | **需讨论/修复中** |
| **模型提供商兼容性** | #8584, #8589 | Anthropic 点号版本解析、Opus 5 限制、OTel 会话语义对齐 | **修复中** |
| **后台 Agent 生命周期** | #8586, #7306 | `activeWork` 事实追踪、后台 Agent 恢复、输出预算硬限制 | **Phase 2 进行中** |

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点类别 | 高频反馈 | 典型 Issue/PR |
|----------|----------|---------------|
| **终端渲染稳定性** | tmux 闪屏、窗口缩放重复输出、WSL ConPTY 乱序

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-08-06

---

### 1. 今日速览
**核心动态集中在 v0.9.4 发布候选版的冲刺与平台化能力的大规模扩展。** 社区正推进包含 77 个提交的发布列车（`#5135`），并同步落地了 **Runtime API 全套能力**（Memory、MCP、Goal-loop、Verifier、Skill 生命周期），标志着 CodeWhale 向“可被编程/托管的 AI Agent Runtime”迈出关键一步。同时，修复了阻塞启动的 `ratatui` 版本冲突（`#5192`）与鼠标滚动失效（`#5234`）两个高优先级 TUI 体验缺陷，并推进 ACP 协议工具调用支持（`#5225`）以适配 Zed 等编辑器生态。

---

### 2. 版本发布
**暂无新版本发布。**  
正在进行 **v0.9.4 Release Train（`#5135`）**，当前领先 `main` 分支 77 个提交，包含运行时 API、ACP 工具链、子代理检查点恢复等核心特性，预计近期合并发布。

---

### 3. 社区热点 Issues（Top 3/3）

| Issue | 标题 | 状态 | 关注理由 | 社区反应 |
| :--- | :--- | :--- | :--- | :--- |
| **#5250** | [增强] 仅支持单 API Key，跨供应商（DeepSeek/GLM）切换需重复录入 | **OPEN** | **高频刚需痛点**：多模型开发者频繁切换供应商时体验极差，涉及配置持久化与 UI 交互重构。 | 1 条评论，创建即更新，开发者强烈期待多 Key 管理方案。 |
| **#5005** | [增强] Sandbox 支持文件系统路径白名单（解决 Xcode DerivedData 访问） | **CLOSED** | **原生开发场景解锁**：允许沙箱访问工作区外路径，对 iOS/macOS 原生构建调试至关重要。 | 2 条评论，已合并修复，验证了“工作区写入+白名单”模式可行性。 |
| **#4029** | 计划开发类似 Reasonix 的推理界面？ | **OPEN** | **产品方向探讨**：社区对“思维链可视化/结构化推理 UI”有明确需求，关乎下一代 TUI 交互设计。 | 4 条评论，讨论聚焦于流式推理渲染与交互范式。 |

> **链接前缀**：`https://github.com/Hmbown/CodeWhale/issues/`

---

### 4. 重要 PR 进展（精选 10 个）

| PR | 标题 | 状态 | 核心价值/修复内容 |
| :--- | :--- | :--- | :--- |
| **#5135** | **release: CodeWhale v0.9.4 release train** | OPEN | **版本里程碑**。聚合 77 次提交，含 Runtime API 全家桶、ACP 工具、子代理恢复、Windows 文档等，发布就绪度评估中。 |
| **#5225** | **feat(acp): expose file/search/git/patch/shell tools over session/prompt** | OPEN | **生态关键**。实现 ACP 协议下的工具调用执行，使 CodeWhale 能作为 Zed 等编辑器的真实编码 Agent，而非仅聊天接口。 |
| **#5129~#5133** | **Runtime API 系列：Skill/MCP/Memory/Goal/Verifier 生命周期端点** | OPEN | **平台化基建**（5 个 PR 打包）。新增 20+ REST 端点，覆盖技能安装、MCP 服务器管理、内存审计、目标循环控制、验证器证据追溯，支撑外部 Dashboard/CLI 托管。 |
| **#5242** | **feat(tui/subagent): resume interrupted children from checkpoint via followup** | OPEN | **长任务鲁棒性**。支持从检查点恢复被中断的子代理（如多步搜索、文档审查），避免长任务重头开始，显著降低 Token 损耗。 |
| **#5240** | **feat(tui/shell): surface real wait elapsed time in tool content** | OPEN | **模型决策优化**。将 `wait` 工具的真实耗时暴露给模型上下文，防止模型误判卡顿导致的忙轮询，提升长命令执行效率。 |
| **#5192** | **fix(tui): pin ratatui to 0.30.0** | **CLOSED** | **阻塞级修复**。钉住 `ratatui` 版本规避 0.1.1+ 引入的启动期 CPR 查询死锁，解决 TUI 启动冻结问题。 |
| **#5234** | **fix(tui): keep alternate scroll off while mouse capture is active** | OPEN | **交互体验修复**。修复鼠标捕获模式下滚动触发输入历史切换的 Bug，恢复长对话的鼠标/触控板滚动浏览。 |
| **#5095** | **fix(ohos): re-quote Windows linker arguments containing spaces** | **CLOSED** | **工具链兼容**。修复 OpenHarmony SDK 安装路径含空格导致的链接器参数解析失败，改善 Windows 原生开发体验。 |
| **#5229** | **docs: add Windows beginner guide (zh-CN)** | OPEN | **降低入门门槛**。新增覆盖安装、配置、模型切换、权限模式的中文图文教程，经实机验证，填补 Windows 用户文档空白。 |
| **#5236** | **docs(evidence): attach live Model Studio #5203 proof** | OPEN | **兼容性验证**。提供阿里云 Model Studio (qwen3-max) 推理切换与 Token Plan 的实测视频证据，推进多模型厂商官方适配。 |

> **链接前缀**：`https://github.com/Hmbown/CodeWhale/pull/`

---

### 5. 功能需求趋势（从 Issues/PRs 提炼）

1.  **Runtime API / Headless 模式优先**  
    连续 5 个 PR 补全 Memory、MCP、Goal、Verifier、Skill 全生命周期 API，显示核心策略从“单机 TUI”转向**“可被外部编排的 Agent Runtime”**，服务于桌面客户端、Web UI、CI/CD 集成场景。

2.  **ACP 协议深度适配（编辑器生态入口）**  
    `#5225` 将工具执行桥接至 ACP `session/prompt`，直接回应 Zed、社区适配器需求，**“作为后端 Agent 服务于主流 IDE”** 成战略重点。

3.  **沙箱与文件系统权限精细化**  
    `#5005`（白名单）、`#5240`（工具耗时透传）、`#5095`（链接器路径转义）显示：**原生构建/调试（Xcode, OpenHarmony, Cargo）对工作区外路径访问、长耗时命令监控、Windows 路径兼容**有强诉求。

4.  **多模型/多供应商配置管理**  
    `#5250`（多 Key）、`#5236`（Model Studio 实测）反映开发者**日常在 DeepSeek、GLM、Qwen、本地模型间高频切换**，需解决 Key 隔离、模型能力差异（推理/非推理）、计费可观测性。

5.  **长任务韧性与检查点机制**  
    `#5242` 子代理断点续跑、Goal-loop 状态持久化，针对“文档审查、多步搜索、大型重构”易中断场景，降低上下文与 Token 浪费。

---

### 6. 开发者关注点与痛点总结

| 痛点/需求 | 典型反馈来源 | 影响面 | 当前进展 |
| :--- | :--- | :--- | :--- |
| **启动崩溃/冻结** | `#5192` (ratatui 0.1.1 CPR 死锁) | 全量 Windows/Linux/macOS 用户 | ✅ 已修复并钉版本，待合并 |
| **鼠标滚动失效/输入历史误触** | `#5234` (alternate scroll 冲突) | 长对话/高频滚动用户 | 🔄 PR 提交，审查中 |
| **API Key 管理原始** | `#5250` (单 Key 覆盖) | 多模型并行开发者 | 🟢 Issue 新建，待排期 |
| **沙箱阻断原生构建产物** | `#5005` (Xcode DerivedData) | iOS/macOS 开发者 | ✅ 已合并白名单机制 |
| **ACP 仅支持聊天无工具** | `#5225` | Zed/社区适配器用户 | 🔄 核心工具桥接 PR 开发中 |
| **长任务中断无法恢复** | `#5242` | 复杂 Repo 重构/审查场景 | 🔄 检查点恢复机制 PR 开发中 |
| **Windows 文档缺失** | `#5229` | Windows 新用户 | ✅ 中文指南 PR 待合并 |

---

**📌 分析师备注**  
v0.9.4 将是 **“平台化能力完备”** 的分水岭版本：Runtime API 全景图闭环 + ACP 工具调用 + 子代理检查点恢复 + 关键体验修复。建议重点跟踪 `#5135` 合并节奏及后续 v0.9.4 正式发布，这将直接决定 CodeWhale 能否作为标准化 Agent Runtime 被上层产品（桌面端、Web IDE、CI Bot）大规模集成。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*