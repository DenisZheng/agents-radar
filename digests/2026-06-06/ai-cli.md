# AI CLI 工具社区动态日报 2026-06-06

> 生成时间: 2026-06-06 00:38 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告
**2026-06-06 | 数据来源：GitHub 公开社区动态**

---

## 1. 生态全景

AI CLI 工具生态正处于 **从"能用"到"好用且可信"的关键跃迁期**。所有工具的共同矛盾集中在 **成本控制**（1M 上下文导致的账单焦虑）、**Agent 可靠性**（挂起、静默切换、状态误报）和 **安全边界缺失**（沙箱隔离、权限管理）三个维度。Windows 平台体验已成为各工具的共同短板——WSL2、ARM64、Alpine 等边缘场景的回归问题此起彼伏，显示跨平台建设的投入仍不充分。同时，MCP 生态的快速扩张与基础设施能力不足的矛盾开始暴露：工具生命周期管理、按需加载机制、多协议兼容性等"暗债"急需偿还。总体来看，头部工具已从功能Demo阶段进入 **工程化深耕期**，但距离企业级可靠性仍有明显差距。

---

## 2. 各工具活跃度对比

| 工具 | 版本（今日） | Stability | Issue 活跃度 | PR 活跃度 | 热度信号 |
|------|-------------|-----------|-------------|-----------|---------|
| **Claude Code** | v2.1.165 | 维护更新 | 高（Top10 #1 👍200, 💬74） | 极低（仅4条，2条无实质内容） | 🐌 Cowork性能 + 💸 1M账单 |
| **Codex** | v0.138.0-alpha.5 | Alpha预发 | 高（#14860 💬92, 👍72） | 极高（堆叠PR + 多栈并行） | 🪟 Windows + 插件生态 |
| **Gemini CLI** | v0.445.2 / v0.46.0-preview.2 | Stable+Preview | 中（Agent挂起、Auto Memory安全） | 高（PR #27705 size: xl） | 🤖 Agent稳定性 + 🧠 Memory安全 |
| **Copilot CLI** | v1.0.60 | Stable正式 | 极高（26条Issue + 2PR / 24h） | 极低（2条，1条疑似垃圾） | 🔐 权限管理 + 🖥️ 终端UX |
| **Kimi Code CLI** | v1.47.0 | Stable正式 | 低（仅1条Issue） | 中（6条PR） | 🔄 生态迁移过渡期 |
| **OpenCode** | v1.16.2 | Stable正式 | 极高（50+ Issue + 50+ PR / 24h） | 极高（Core V2 + 多方向并进） | 🔒 沙箱安全 + ☁️ Bedrock兼容 |
| **Pi** | 无新Release | — | 高（#4945 💬53, 👍28） | 高（13条PR，多条快速合入） | 🤕 gpt-5.5卡死 + 🔧 消息序列bug |
| **Qwen Code** | v0.17.1-nightly | Nightly | 中（25条更新，19条关闭） | 高（50条PR，daemon方向密集） | 🖥️ Daemon/Web-shell + 💾 稳定性 |

> **数据说明**：活跃度按过去24h GitHub公开动态统计，PR合入量更能反映工程推进速度。

---

## 3. 共同关注的功能方向

以下需求在 **3个及以上工具** 的社区中同时出现：

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **成本控制与上下文管理** | Claude Code、Codex、Qwen Code | 限制默认上下文窗口（--max-context），避免1M上下文导致的token暴增；账单明细可溯源 |
| **Agent稳定性** | Claude Code、Gemini CLI、Pi、OpenCode、Qwen Code | 解决Agent挂起/卡死、子代理状态误报、MAX_TURNS掩盖问题、compact后崩溃 |
| **安全沙箱隔离** | OpenCode、Gemini CLI、Pi、Claude Code（Cowork VM限制） | 限制Agent命令访问范围（类似macOS Seatbelt），企业级安全边界 |
| **Windows平台改善** | Codex、Copilot CLI、Kimi Code、Qwen Code | WSL2性能/CPU占用、ARM64崩溃、Alpine包分发错误、独立安装包需求、剪贴板兼容性 |
| **权限管理** | Copilot CLI、OpenCode、Pi、Codex（托管权限PR） | 权限默认配置持久化、子代理权限隔离、非交互模式合规、防供应链hook注入 |
| **MCP生态可靠性** | Claude Code、Copilot CLI、Pi、Qwen Code | MCP工具生命周期管理（stdio泄漏、无限重启）、连接稳定性、多Connector混合使用冲突 |
| **模型选择与控制权** | Claude Code（静默切换）、Codex、Qwen Code（多模型兼容） | 模型切换需UI确认，禁止静默升级；Provider级profile切换能力 |
| **多Agent编排** | Codex（并行子Agent）、Pi（workflow PR）、OpenCode（Plan→Build自动切换） | 父子Agent调度、收敛检测、并行执行、工作流DAG编排 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特点 |
|------|---------|---------|-------------|
| **Claude Code** | 以Opus为代表的高端模型能力，Cowork协作为差异点 | 重度AI开发用户、Max/Pro订阅用户 | 订阅优先模式，深度绑定Anthropic模型生态，MCP集成起步早但维护滞后 |
| **Codex** | 多平台Desktop+CLI并重，企业级安全（托管权限、PATv2） | OpenAI生态用户、企业团队 | Rust核心架构，Responses Lite分流设计，Skills/插件体系向项目级共享演进 |
| **Gemini CLI** | Auto Memory自动化记忆、AST-aware代码智能 | Google Cloud/Workspace用户、学术研究者 | 深度集成Google模型家族，评估基础设施完善，Agent运行时稳定性是当前短板 |
| **Copilot CLI** | 终端原生体验（TUI/alt-screen争议）、GitHub生态集成 | GitHub重度用户、企业开发者 | 强调与VS Code/Desktop/GitHub生态联动，权限系统复杂度正在成为双刃剑 |
| **Kimi Code CLI** | Python单二进制→独立二进制迁移，最小化用户摩擦 | 轻量级工具用户、Kimi模型爱好者 | 过渡期定位明确，/upgrade引导迁移，社区体量小但核心贡献者集中 |
| **OpenCode** | Core V2多模型兼容（Bedrock/OpenAI全谱系）、Skill体系 | 多Provider用户、自托管开发者 | 兼容网关策略激进，上下文/图像处理基建在快速迭代中，安全沙箱是差异化卖点 |
| **Pi** | 扩展性优先（plugin API export、workflow orchestration）、多模型最大化兼容 | 高级开发者、扩展开发者、多模型实验者 | 社区自驱力强，多Agent编排是社区自发方向，gpt-5.5兼容卡死是短期瓶颈 |
| **Qwen Code** | Daemon/Web-shell远程部署、ACP协议企业级集成 | Qwen模型用户、远程/服务器端AI开发 | doudouOUC密集产出推进daemon架构，稳定性修复是并行主线，ACP对齐是差异化方向 |

---

## 5. 社区热度与成熟度

**高活跃度社区（Issues + PR 双高）：**

- **OpenCode**：50+ Issues + 50+ PR / 24h，是今日最活跃的项目。Core V2重构、多模型兼容、安全沙箱多条线并进，处于 **快速迭代中期**，工程推进速度最快。
- **Codex**：Issue #14860 长期悬而未决但PR产出量极大（多栈PR并行），工程团队执行力极强，处于 **Alpha→Beta冲刺阶段**，需要关注alpha到stable的节奏。

**中等活跃度社区：**

- **Gemini CLI**：PR高效合入（#27701已close），但Agent稳定性issue需实质性修复。处于 **Preview→GA质量打磨期**。
- **Qwen Code**：daemon方向PR密集（doudouOUC单人主导6个），Issue大量关闭说明历史欠账在清。daemon架构处于 **功能补齐→性能优化过渡期**。
- **Pi**：Issue热度高（#4945），PR修复速度快（同日bug同日合入），社区自驱力强但核心维护者规模有限。处于 **社区自驱扩展期**。

**活跃度分化社区：**

- **Claude Code**：Issue热度极高（#22543 👍200），但PR产出极少（仅4条且质量低），说明 **社区反馈与开发响应之间存在明显断层**。处于 **维护模式的信心危机期**。
- **Copilot CLI**：Issue量极高（26条/24h），但PR极度贫乏（2条，1条疑似垃圾），v1.0.60的发布-回归循环说明 **测试覆盖和QA流程存在系统性短板**。
- **Kimi Code CLI**：活动量最低，处于 **迁移过渡期**，社区注意力在向Kimi Code转移。

---

## 6. 值得关注的趋势信号

### 信号一：「上下文即成本」——默认策略正在成为用户信任的最大敌人
- **证据**：Claude Code #63060（1M上下文=5X配额消耗）、#65734（Cowork自动吃满1M）、#60093（$1,050超额账单，均被要求添加 `--max-context` 标志）
- **对开发者的价值**：提供上下文窗口可配置化推荐时，应将"默认安全值"而非"最大值"作为基线。产品设计上每次模型/上下文升级都需要明确的opt-in机制。

### 信号二：「Agent停止的确定性」比「Agent能力的扩展性」更紧迫
- **证据**：7个工具中超过半数报告Agent挂起/卡死问题（Claude Cowork、Gemini Generalist #21409、Pi gpt-5.5 #4945），且普遍缺乏有效的超时兜底和状态恢复机制
- **对开发者的价值**：在设计Agent执行路径时，应将"graceful degradation"（优雅降级）作为与"功能完整性"同等优先的工程目标。用户能接受"做不了"，但不能接受"卡住了还不知道为什么"。

### 信号三：「安全沙箱」正在从企业诉求变为普适需求
- **证据**：OpenCode #2242（👍51，多用户协作场景）、Copilot CLI #3699（CI/自动化场景绕过工具限制）、Pi #5332（workspace approval机制设计）
- **对开发者的价值**：即使面向个人开发者，也应预埋沙箱/权限的扩展接口。安全边界的设计成本在产品早期远低于后期重构。

### 信号四：「Windows正在成为增长天花板」
- **证据**：Codex #13993（👍135，独立安装包需求）、Copilot #3700（WSL2 CPU 215%）、Pi #4647（WSL2+Wayland剪贴板）、Qwen #4647（同类问题）
- **对开发者的价值**：Windows不是边缘场景，是主流场景（尤其在企业环境）。CI矩阵中Windows/WSL2/Alpine的覆盖应视为P0而非nice-to-have。

### 信号五：「MCP生态从接口标准走向工程债务」
- **证据**：Claude #65516（MCP工具不展示）、Copilot #3698/#3701（stdio泄漏、无限重启）、Pi #2434（MCP断连刷屏）、Qwen #4777（工具缓存失效）
- **对开发者的价值**：MCP的快速普及暴露了生命周期管理（连接/断连/重连/超时/cleanup）的系统性缺陷。建议在MCP集成中借鉴微服务的健康检查+熔断器模式。

### 信号六：「多Agent自编排」正从研究走向社区实践
- **证据**：Pi同一天出现workflow orchestration（#5426）、subagents（#5440/#5441）、self-evolver（#5442）三个PR；Codex PR #22099（并行子Agent调度）；OpenCode #7801（Plan→Build自动切换，👍18）
- **对开发者的价值**：Agent编排不需要等官方方案——社区已经在自构建。提供一个轻量级的任务分解+依赖声明接口，可能比提供完整编排引擎更快获得社区采纳。

---

*本报告基于2026-06-06 GitHub公开社区数据生成，覆盖 anthropics/claude-code、openai/codex、google-gemini/gemini-cli、github/copilot-cli、MoonshotAI/kimi-cli、anomalyco/opencode、badlogic/pi-mono、QwenLM/qwen-code 八个主流 AI CLI 工具。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源**: anthropics/skills (PRs + Issues) | **截止**: 2026-06-06

---

## 1. 热门 Skills 排行

> **注：** 当前数据集中所有 PR 评论数均标注为 `undefined`，以下按创建时间近、交互频次（更新跨度）、👍数和摘要质量综合选取最受关注的项目。

| # | Skill | 状态 | 功能概述 | 关注原因 |
|---|-------|------|---------|---------|
| 1 | **agent-creator** ([#1140](https://github.com/anthropics/skills/pull/1140)) | OPEN | 创建定制化任务 Agent 集合的 meta-skill | 最新（2026-05-），响应 Issue #1120，含 Windows 并行工具调用修复 |
| 2 | **AURELION suite** ([#444](https://github.com/anthropics/skills/pull/444)) | OPEN | 四件套：内核思考模板 + 顾问 + Agent + 记忆，面向专业知识的认知框架 | 生态闭环设计，覆盖知识管理全链路，2026-05-06 仍在更新 |
| 3 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | OPEN | 测试 Trophy 模型、AAA 模式、React Testing Library、纯函数边界 | 全栈测试覆盖，开发者刚需，2026-0-4 仍有讨论 |
| 4 | **skill-quality-analyzer + skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | OPEN | 评估 Skill 质量（5维度）和安全性的元 Skill | "Meta" 工具——帮助社区自身提升 Skill 质量 |
| 5 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | OPEN | 防止 AI 生成文档中的孤儿行、寡妇段落、编号错位 | 解决 Claude 生成文档的通病，PR 描述直击痛点 |
| 6 | **shodh-memory** ([#154](https://github.com/anthropics/skills/pull/154)) | OPEN | AI Agent 跨对话持久化记忆系统 | 长期记忆是 Agent 核心难题 |
| 7 | **n8n-builder + n8n-debugger** ([#190](https://github.com/anthropics/skills/pull/190)) | OPEN | n8n 工作流构建与调试专家技能 | 钉钉/Flow 类自动化需求旺盛 |
| 8 | **ServiceNow platform** ([#568](https://github.com/anthropics/skills/pull/568)) | OPEN | 覆盖 ITSM/ITOM/HRSD/FSM/SecOps 等全平台知识 | 企业数字化转型热门领域 |

---

## 2. 社区需求趋势（提炼自 Issues）

### 🔵 平台能力层
| 需求 | 代表 Issue | 热度 |
|------|-----------|------|
| **组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) (💬13, 👍7) | 🔥🔥🔥 |
| **Skill 作为 MCP 暴露** | [#16](https://github.com/anthropics/skills/issues/16) | 🔥 |
| **多文件预加载/内联打包** | [#1220](https://github.com/anthropics/skills/issues/1220) | 🔥 |
| **Skill 可移植性标签** | [#1156](https://github.com/anthropics/skills/issues/1156) | 🔥 |

### 🟡 安全与治理层
| 需求 | 代表 Issue | 热度 |
|------|-----------|------|
| **社区 Skill 冒充官方命名空间风险** | [#492](https://github.com/anthropics/skills/issues/492) (💬7, 👍2) | 🔥🔥 |
| **Skill 安全与上下文窗口问题** | [#1175](https://github.com/anthropics/skills/issues/1175) | 🔥 |
| **Agent 治理模式** | [#412](https://github.com/anthropics/skills/issues/412) | 🔥 |

### 🟢 工具链修复层
| 需求 | 代表 Issue | 热度 |
|------|-----------|------|
| **run_eval.py 在 Windows 上触发率 0%** | [#556](https://github.com/anthropics/skills/issues/556) (💬11, 👍6) | 🔥🔥 |
| **Skills/Command 消失问题** | [#62](https://github.com/anthropics/skills/issues/62) (💬10) | 🔥🔥 |
| **插件重复安装导致技能重复** | [#189](https://github.com/anthropics/skills/issues/189) (💬6, 👍8) | 🔥🔥 |
| **MCP 返回数据未压缩** | [#1102](https://github.com/anthropics/skills/issues/1102) | 🔥 |

**Top 3 需求方向**:
1. **企业级 Skill 管理与分发** — 组织共享、命名空间信任、权限控制
2. **Skill 与 MCP 的深度集成** — 将 Skill 能力暴露为 MCP Tools
3. **跨平台兼容性** — Windows 支持是当前最大痛点

---

## 3. 高潜力待合并 Skills

以下 PR 创建较新、描述完整、响应真实 Issue：

| 优先级 | PR | 理由 |
|--------|-----|------|
| ⭐⭐⭐ | **skill-creator 系列修复** ([#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541), [#538](https://github.com/anticips/skills/pull/538), [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099)) | 同一作者连续提交 Windows/DOCX 修复，问题普遍且严重 |
| ⭐⭐⭐ | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | 解决方案标准化，不涉及第三方依赖，易合并 |
| ⭐⭐ | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 文档最完整，测试是开发者核心需求 |
| ⭐⭐ | **skill-quality-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 官方级质量工具，但体积大，可能需要评审 |

⚠️ **瓶颈信号**: 大量 PR 评论数显示 `undefined`，说明社区讨论可能转移至 Discord/论坛，GitHub PR 上的活跃度被低估。

---

## 4. SKills 生态洞察

> **一句话总结**: 当前社区最集中的诉求是 **"从个人 Skill 走向企业级 Skill 基础设施"** — 包括组织级共享、安全隔离、跨平台兼容、以及 Skill 与 MCP 生态的深度打通。社区正处于从"用 Skill 解决单点问题"到"构建 Skill 治理体系"的拐点。

---

*报告生成时间: 2026-06-06 | 数据基于 anthropics/skills 公开 Issues & PRs*

---

# Claude Code 社区动态日报 — 2026-06-06

---

## 1. 今日速览

Claude Code 今日推送维护版本 **v2.1.165**，主要包含 bug 修复和可靠性改进。社区讨论热度最高的话题集中在三个方面：**1M 上下文窗口带来的成本激增**、**Cowork 功能导致的性能劣化**以及对 **Opus 模型未经透明切换** 的不满——这三大痛点交叉叠加，构成了今日社区反馈的主基调。此外，多个平台上仍存在 MCP 工具集成、OSS/Web 端认证和 UI 问题待解决。

---

## 2. 版本发布

### v2.1.165
- **标签：** 维护性更新（Bug fixes and reliability improvements）
- **发布时间：** 2026-06-06
- 详细的变更日志尚未公布，但结合近期 issues 的关闭记录，预计修复了包括 OAuth 刷新令牌失效、PATH 在 Git Bash 登录模式下的丢失、.stale 标签的部分回归等问题。

---

## 3. 社区热点 Issues（Top 10）

以下按重要性和社区参与度选取：

1. **[#22543] Cowork 功能创建 10GB VM 包，严重拖慢性能**
   这是当前社区点赞量 **最高（👍200）**、评论最多（74条）的 issue。用户反馈 Cowork 在 `~/Library/Application Support/` 下生成约 10GB 的虚拟机包，导致 Claude Desktop 启动缓慢、UI 响应滞后，且性能随会话时间持续劣化。标志为 `high-priority` + `oncall`，说明官方已在跟进。
   🔗 [Issue #22543](https://github.com/anthropics/claude-code/issues/22543)

2. **[#8327] ANTHROPIC_API_KEY 覆盖 Max/Pro 订阅时出现 "Organization has been disabled" 错误**
   评论数 **118 条**，是所有 issues 中最多的。核心问题在于：拥有有效 Pro/Max 订阅的用户，当设置了 `ANTHROPIC_API_KEY` 环境变量时，会被错误地禁用组织权限。这涉及订阅体系与 API Key 认证路径的冲突，影响范围广且长期未彻底解决。
   🔗 [Issue #8327](https://github.com/anthropics/claude-code/issues/8327)

3. **[#63060] API 错误：1M 上下文需要 Usage Credits**
   随着 Opus 4.6 升级到 1M 上下文窗口，API 配额消耗速度 **暴增约 5 倍**。用户反映系统默认使用 1M 上下文，却在没有明确消耗额度（usage credits）的情况下触发计费错误。👍21 的点赞量体现了社区对成本控制的强烈诉求。
   🔗 [Issue #63060](https://github.com/anthropics/claude-code/issues/63060)

4. **[#60093] 模型在未告知用户的情况下被切换至 Opus，三日超收 $1,050**
   用户详细列出了 5 月 5-7 日被多收 $1,050 的账单明细，认为后端模型在未经同意/UI 提示的情况下从 Sonnet 被切换到了 Opus。虽然当前讨论热度不高（8条评论），但对 **账单透明度** 的潜在影响值得关注。
   🔗 [Issue #60093](https://github.com/anthropics/claude-code/issues/60093)

5. **[#34650] 请求添加 `--max-context` 标志以限制上下文窗口大小**
   社区已明确提出 **控制上下文窗口** 的需求。用户希望自行设定上限（如 200K），而非默认吃到 1M。👍24 的支持量说明这是付费 API 用户的高频诉求。
   🔗 [Issue #34650](https://github.com/anthropics/claude-code/issues/34650)

6. **[#49541] 会话中静默切换至 Opus 4.7 [1M] 导致配额消耗约 4 倍**
   与 #60093 类似，但聚焦于 **会话中途** 的静默切换。用户在正常工作中模型被悄悄升级到 Opus + 1M 上下文，导致账单飙升，且没有任何 UI 提示或事后通知。
   🔗 [Issue #49541](https://github.com/anthropics/claude-code/issues/49541)

7. **[#65734] Claude Max 5x：Cowork 会话自动触发 1M 上下文，未经请求扣除 usage 额度**
   今日新报的 issue，直接指控 Cowork 在未获得用户明确指令的情况下自动使用 1M 上下文窗口并消耗 usage credits。这一问题在 Cowork 相关 issue 中反复出现，说明 1M 上下文的默认策略是主要矛盾点。
   🔗 [Issue #65734](https://github.com/anthropics/claude-code/issues/65734)

8. **[#65699] Opus 4.8 对生物医学研究触发误判的 Usage Policy 封锁**
   学术用户报告在合法的生物医学研究场景下被 Opus 4.8 误判为违反使用政策（AUP），而 Opus 4.7 无此问题。涉及 **版本敏感的模型过滤策略** 回归问题，对科研用户影响较大。
   🔗 [Issue #65699](https://github.com/anthropics/claude-code/issues/65699)

9. **[#65516] 通过 `claude mcp add` 注册的 MCP 服务器在有 claude.ai web connectors 时不展示工具**
   当用户同时使用 Claude Code 本地 MCP 工具和 claude.ai 网页端的 connectors 时，MCP 工具不会出现在对话界面中。这影响了 MCP 生态的工作流程切换体验。
   🔗 [Issue #65516](https://github.com/anthropics/claude-code/issues/65516)

10. **[#60493] Claude Code Web 端仓库选择器看不到已安装 App 的 GitHub 仓库**
    虽然是 **duplicate** 标签，但近期活跃。Claude Code 的 Web 端在安装了 GitHub App 后仍无法列出仓库，影响 Web 工作流的可用性。
    🔗 [Issue #60493](https://github.com/anthropics/claude-code/issues/60493)

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **4 个 PR** 有活动，数量较少，选取全部：

1. **[#65666] Fix dev container issues**
   修复 Dev Container 因防火墙 DNS 解析失败导致的构建中断问题，并补充了从本地环境变量将 API Key 注入容器的机制。对使用 Dev Container 做隔离开发的用户较为关键。
   🔗 [PR #65666](https://github.com/anthropics/claude-code/pull/65666)

2. **[#65619] fix(plugins): align frontend-design author with marketplace entry**
   修复 `frontend-design` 插件的 `plugin.json` 中 author.name 字段打包了两个作者名、author.email 包含两个逗号分隔地址的问题，确保在插件市场中正确渲染。关联 Issue #61785。
   🔗 [PR #65619](https://github.com/anthropics/claude-code/pull/65619)

3. **[#58673] s**
   标题描述均为 "s"，信息量极低，无法判断具体内容，可能为占位或误提交。最新动态为 6月5日。
   🔗 [PR #58673](https://github.com/anthropics/claude-code/pull/58673)

4. **[#65723] Claude/subscription debate chat rx ewi**
   标题不完整，可能与订阅相关的讨论/功能方向有关，但缺少有效描述，暂时无法评估。
   🔗 [PR #65723](https://github.com/anthropics/claude-code/pull/65723)

---

## 5. 功能需求趋势

从今日 issues 中可提炼出以下社区最关注的功能方向：

| 趋势方向 | 代表 Issues | 社区诉求 |
|---------|------------|---------|
| **上下文窗口可配置化** | (#34650) | 用户需要 `--max-context` 参数自行限制上下文上限，避免默认 1M 带来不必要的 token 消耗 |
| **成本透明与账单控制** | (#60093, #49541, #63060, #65734) | 模型切换需有 UI 提示；账单明细需可溯源；1M 上下文不应默认触发 |
| **Cowork 性能优化** | (#22543, #65734, #65756) | VM 包体积过大、性能劣化是最大痛点，需要优化 VM 大小或提供清理机制 |
| **Cowork 模型切换灵活性** | (#49649, 👍 20) | 希望在 Cowork 项目任务内能动态切换模型 |
| **MCP 工具集成可靠性** | (#65516, #42453) | MCP tools 在混合使用连接器时不稳定，Linux/macOS 上存在兼容性问题 |
| **终端增强体验** | (#44479, 👍11) | LaTeX 渲染、分支面板折叠设置等 TUI 增强需求持续存在 |
| **Web 端完善** | (#60493, #55500) | 仓库选择器缺失、iOS 分支选择器缺失等 Web 端功能待补齐 |
| **模型策略透明度** | (#65699) | AUP 过滤策略在不同模型版本间表现不一致，需要更明确的策略文档 |

---

## 6. 开发者关注点总结

综合今日所有反馈，当前 Claude Code 开发者群体最核心的痛点可归纳为以下四点：

### 1. 💸 1M 上下文 = 默认的「隐形成本炸弹」
Opus 4.6+ 升级到 1M 上下文后，用户在没有感知的情况下消耗 5 倍的 API 配额。会话中途静默切换模型、Cowork 自动吃满 1M——这些都让开发者对 **账单失控** 产生了强烈不安。**「我需要能手动封顶上下文」** 声音日益高涨。

### 2. 🐌 Cowork 是「性能黑洞」
10GB 的 VM 包拖慢整个桌面端的体验，已 👍200 的社区热度说明这不是个别案例。功能虽好，但资源消耗令人无法接受，开发者迫切需要官方给出优化方案或轻量化选项。

### 3. 🔄 模型切换缺乏透明度
无论是 Opus 4.7→4.8 的升级策略，还是 Sonnet→Opus 的静默切换，开发者都要求 **明确的知情权和控制权**。账单纠纷的本质是信任危机，需要 UI 层面的模型切换确认机制和详细的用量日志。

### 4. 🔐 认证体系复杂度高
OAuth 刷新令牌失效、API Key 与订阅冲突、Web 端 GitHub 授权失败——多条认证路径并存时，各种 edge case 频出。开发者希望认证流程更加统一和自愈。

---

*日报生成时间：2026-06-06 | 数据来源：GitHub anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-06

---

## 1. 今日速览

今日 Codex 社区呈现**高强度工程推进**态势：主线 PR 集中在 **TUI 插件共享体系**（6 个堆叠 PR）、**跨平台系统代理解析**（4 个堆叠 PR）和 **Responses Lite 独立工具通路**。Issue 侧，**Windows 体验仍是最大痛点**（性能、沙箱、安装），而 #14860 远程压缩任务错误以 92 条评论、72 赞成为长期悬而未决的社区焦点。无正式版发布，仅有 alpha 预发。

---

## 2. 版本发布

| 版本 | 类型 | 备注 |
|---|---|---|
| `rust-v0.138.0-alpha.5` | CLI Alpha | Rust 核心组件预发版本，具体变更未在数据中详述 |
| `rusty-v8-v149.2.0` | 依赖更新 | V8 绑定库版本升级 |

> 无正式版（stable）发布。当前主线仍处于 0.138.x alpha 阶段。

---

## 3. 社区热点 Issues（Top 10）

### 🏆 #14860 — 远程压缩任务报错
- **链接**: [openai/codex#14860](https://github.com/openai/codex/issues/14860)
- **热度**: 💬 92 评论 | 👍 72
- **标签**: bug, context
- **为什么重要**: 这是社区中讨论最密集的 bug。用户在使用 gpt-5.4 执行 remote compact 任务时持续报错，横跨多个 CLI 版本（最早报告于 0.114.0）。高赞数+高评论数表明大量用户受影响且长期未获官方修复。这是**上下文压缩/远程任务的稳定性问题**，直接关系到长对话场景的核心体验。

### #13993 — 请求独立 Windows 安装包
- **链接**: [openai/codex#13993](https://github.com/openai/codex/issues/13993)
- **热度**: 💬 62 评论 | 👍 135
- **标签**: enhancement, windows-os, app, User Request, Feature
- **为什么重要**: 👍 135 是所有 Issue 中最高的，远超其他项。大量 Windows 用户因企业策略、离线环境或个人偏好无法使用 Microsoft Store，迫切需要 `codex-setup.exe` 传统安装包。这是**Windows 生态拓展的关键阻塞项**。

### #25715 — WSL 作为 Agent 环境时严重卡顿
- **链接**: [openai/codex#25715](https://github.com/openai/codex/issues/25715)
- **热度**: 💬 31 评论 | 👍 29
- **标签**: bug, windows-os, app, performance
- **为什么重要**: Windows + WSL 是开发者最常见的环境之一，但 WSL 中常规操作缓慢到"不可用"级别。这与 #20951 形成呼应，**Windows 性能问题正在将开发者推向 CLI 替代品**。

### #24391 — Windows 沙箱 spawn setup refresh 失败
- **链接**: [openai/codex#24391](https://github.com/openai/codex/issues/24391)
- **热度**: 💬 27 评论 | 👍 22
- **标签**: bug, windows-os, sandbox, CLI
- **为什么重要**: 从 0.133.0 开始引入的回归 bug，shell 命令执行失败后静默降级。沙箱是安全执行的核心机制，此 bug 动摇了用户对 CLI 可靠性的信任。

### #25719 — macOS Desktop 触发 syspolicyd/trustd 资源暴走
- **链接**: [openai/codex#25719](https://github.com/openai/codex/issues/25719)
- **热度**: 💬 18 评论 | 👍 16
- **标签**: bug, app, computer-use, performance
- **为什么重要**: macOS 上的 Codex Desktop 持续触发系统安全进程（syspolicyd/trustd），导致 CPU 和内存飙升。这是一个**严重影响 Mac 用户体验的持续性问题**，涉及代码签名和权限验证循环。

### #12299 — 剩余 10% 限额却被提示超限
- **链接**: [openai/codex#12299](https://github.com/openai/codex/issues/12299)
- **热度**: 💬 18 评论 | 👍 1
- **标签**: bug, extension, rate-limits
- **为什么重要**: VS Code 扩展在用量仅 10% 时错误触发 "Usage limit" 提示。虽然 👍 不多，但评论数高，说明**用量统计和计费显示存在不一致**，影响用户信任。

### #26104 — 更新后旧会话无法打开
- **链接**: [openai/codex#26104](https://github.com/openai/codex/issues/26104)
- **热度**: 💬 18 评论
- **标签**: bug, windows-os, app, session
- **为什么重要**: 最新版本 (26.601.20914) 引入的回归——旧 chat 会话在 Desktop UI 中消失。**数据可访问性和向后兼容性是用户留存的关键**，此类 bug 对桌面用户尤其致命。

### #22099 — 并行优先子 Agent 与非阻塞后台任务管理
- **链接**: [openai/codex#22099](https://github.com/openai/codex/issues/22099)
- **热度**: 💬 10 评论
- **标签**: enhancement, subagent
- **为什么重要**: 社区已有 fork（Open Codex CLI）实现了并行优先的子 Agent 调度，说明这是**多 Agent 工作流的核心需求**。父 Agent 过早回退到子任务是一个架构级效率问题。

### #4849 — 通过 CLI 选择 config.toml profile
- **链接**: [openai/codex#4849](https://github.com/openai/codex/issues/4849)
- **热度**: 👍 23 | 💬 6 评论
- **标签**: enhancement, config
- **为什么重要**: 用户希望在 CLI 中直接切换预定义 profile（模型、provider 等），而非手动编辑 TOML。23 赞说明这是**高频使用场景**，尤其对使用本地模型（如 LM Studio）的开发者。

### #18115 — 仓库级插件市场与插件配置
- **链接**: [openai/codex#18115](https://github.com/openai/codex/issues/18115)
- **热度**: 👍 37 | 💬 4 评论
- **标签**: enhancement, skills
- **为什么重要**: 虽然评论数少，但 37 赞使其成为**功能需求中声量最高的项目**。团队希望项目 `.codex/config.toml` 能携带插件市场配置，实现"项目级技能共享"。这是 **AI 开发工具向团队协作演进的关键方向**。

---

## 4. 重要 PR 进展（Top 10）

### 🔧 TUI 插件共享体系（堆叠 PR #26701—#26705）
- **作者**: canvrno-oai | **状态**: OPEN
- **链接**: 
  - [#26701 远程插件身份](https://github.com/openai/codex/pull/26701) →
  - [#26702 远程插件 section 管道](https://github.com/openai/codex/pull/26702) →
  - [#26703 远程插件目录渲染](https://github.com/openai/codex/pull/26703) →
  - [#26704 远程插件目录测试覆盖](https://github.com/openai/codex/pull/26704) →
  - [#26705 UI 打磨](https://github.com/openai/codex/pull/26705)
- **内容**: 5 个堆叠 PR 完整构建了 TUI 的远程插件目录系统。从身份识别、数据获取、UI 渲染到测试覆盖和最终打磨，将插件发现从本地 marketplace 扩展到远程 catalog。**这是 Codex TUI 生态扩展的基础设施级工作**。

### 🌐 跨平台系统代理解析（堆叠 PR #26706—#26709）
- **作者**: canvrno-oai | **状态**: OPEN
- **链接**:
  - [#26706 系统代理功能配置面](https://github.com/openai/codex/pull/26706) →
  - [#26707 共享认证系统代理契约](https://github.com/openai/codex/pull/26707) →
  - [#26708 Windows 代理解析器](https://github.com/openai/codex/pull/26708) →
  - [#26709 macOS 代理解析器](https://github.com/openai/codex/pull/26709)
- **内容**: 为 Codex 添加系统级代理支持，覆盖 Windows 和 macOS 双平台。底层抽象统一了登录、客户端、CLI 的代理调用路径。**企业网络环境下这是必备能力**，长期被用户请求。

### ⚡ Responses Lite 独立工具通路（#26490 + #26542）
- **作者**: rka-oai | **状态**: #26490 CLOSED, #26542 OPEN
- **链接**: 
  - [#26490 使用独立工具](https://github.com/openai/codex/pull/26490) ✅
  - [#26542 发送 Responses Lite 传输头](https://github.com/openai/codex/pull/26542)
- **内容**: Responses Lite 模型不再执行托管的 Responses 工具（如 Web 搜索、图片生成），而是路由到 Codex 自有执行器和独立 API 端点。#26542 进一步添加了 `X-OpenAI-Internal-Codex-Responses-Lite` 传输头。**这是模型执行架构的关键分流**，为轻量模型提供更高效的工具调用路径。

### 🔑 V2 个人访问令牌支持 (#25731)
- **作者**: cooper-oai | **状态**: CLOSED ✅
- **链接**: [openai/codex#25731](https://github.com/openai/codex/pull/25731)
- **内容**: 为 `codex login --with-access-token` 和 `CODEX_ACCESS_TOKEN` 添加 v2 PAT 支持。区分不透明的 `at-` 令牌和旧版 Agent Identity JWT，通过 AuthAPI `/v1/user-auth-credential/whoami` 注入 ChatGPT 账户元数据。**认证体系的现代化升级**，为非交互/CI 场景提供更好的令牌管理。

### 🧹 压缩事件分析增强 (#26680)
- **作者**: rhan-oai | **状态**: OPEN
- **链接**: [openai/codex#26680](https://github.com/openai/codex/pull/26680)
- **内容**: 在 `codex_compaction_event` 中添加 `retained_image_count` 和 `compaction_summary_tokens` 字段，用于 v1.5 问题调查。**直接回应 #14860 等压缩相关问题的可观测性需求**。

### 🔄 云需求在 TUI 线程重置中的保留 (#25177)
- **作者**: canvrno-oai | **状态**: OPEN
- **链接**: [openai/codex#25177](https://github.com/openai/codex/pull/25177)
- **内容**: 修复 `/new` 和 `/clear` 导致云 requirements 加载器丢失的回退问题。**企业级配置管理的关键修复**，确保托管策略在会话切换时不被覆盖。

### 📊 分析事件优化（#26607 + #26597）
- **作者**: bromano-oai | **状态**: 均已 CLOSED ✅
- **链接**: 
  - [#26607 报告 turn 事件分发时间](https://github.com/openai/codex/pull/26607)
  - [#26597 报告 hook 运行时间](https://github.com/openai/codex/pull/26597)
- **内容**: 将 turn 事件分发计数/时长和 hook 运行时间纳入分析产品事件（此前仅在 OTel 中可用）。**可观测性基础设施的完善**，有助于排查 #14860 等性能问题的根因。

### 🛡️ 托管权限配置文件允许列表执行 (#24852)
- **作者**: viyatb-oai | **状态**: OPEN
- **链接**: [openai/codex#24852](https://github.com/openai/codex/pull/24852)
- **内容**: 用 map 表示法实现权限 profile allowlist 的层级组合，每个 requirements 层可独立增删 profile 而不替换整个数组。**企业级安全边界的核心强化**。

---

## 5. 功能需求趋势

从今日 Issue 数据和讨论热度分析，社区关注的功能方向按优先级排列：

| 排名 | 方向 | 代表 Issue | 信号强度 |
|---|---|---|---|
| 1 | **Windows 体验全面改善** | #13993, #25715, #26104, #24391 | ⭐⭐⭐⭐⭐ |
| 2 | **插件/技能生态扩展** | #18115, #25442, #22099 | ⭐⭐⭐⭐ |
| 3 | **多 Agent 编排与子 Agent 管理** | #16900, #22099 | ⭐⭐⭐⭐ |
| 4 | **认证与部署现代化** | #25731 (已实现), #4849 | ⭐⭐⭐ |
| 5 | **TUI 体验增强** | #20951, #25560 | ⭐⭐⭐ |
| 6 | **Computer Use / 桌面 Agent** | #25719, #26661, #25571 | ⭐⭐⭐ |

**关键洞察**：Windows 相关 Issue 占据了最热 10 条中的 4 条，且在 #13993（独立安装包）中获得了单日最高赞（135）。这明确表明 **Windows 生态是 Codex 增长的最大瓶颈**。同时，#18115（仓库级插件市场）的 37 赞显示社区已不满足于个人效率工具，开始向**团队协作和项目级配置共享**演进。

---

## 6. 开发者关注点

**高频痛点总结**：

1. **🔴 Windows 稳定性——最紧要的阻塞项**
   - 沙箱失败 (#24391, #25362)、WSL 性能 (#25715, #20967)、旧会话丢失 (#26104)、UI 渲染异常 (#25347) 形成连环负面体验链
   - 缺少独立安装包 (#13993) 将部分用户拒之门外
   - **建议优先级**：Windows 沙箱/I/O 性能应作为 P0 专项

2. **🟡 上下文/压缩可靠性——长期未解的痛点**
   - #14860 (92 评论) 悬而未决，#26680 PR 正在增加分析可观测性，但用户期待的修复尚未到来
   - 核心工作流（长对话、大项目）直接受影响

3. **🟡 Desktop App 资源消耗**
   - macOS 上 syspolicyd/trustd 暴走 (#25719) + Windows 微冻结 (#26401) 表明桌面端存在**系统级资源管理缺陷**
   - 粘贴冻结 (#26697) 和反馈提交异常 (#26654) 表明桌面 App 仍需大量打磨

4. **🟢 插件/技能生态——社区自驱方向**
   - #18115 仓库级插件市场获得高关注，说明社区已在探索类似 MCP/Agent 生态的项目级扩展
   - 与今日 PR 中 TUI 插件共享体系的推进方向一致

5. **🟢 计费/用量透明度**
   - #12299 限额显示错误 + #23188 用量重置跳变，虽单个热度不高，但**计费准确性是付费用户的基本信任线**

---

> 📌 **本期日报由 OWL 生成 | 数据来源：github.com/openai/codex | 覆盖时间：2026-06-05 至 2026-06-06**

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-06

---

## 1. 今日速览

今日 Gemini CLI 发布了 **v0.46.0-preview.2** 和 **v0.45.2** 两个补丁版本，核心均为修复 Antigravity  transition banner 展示次数限制的 cherry-pick。社区讨论热度集中在 **Agent 稳定性**（挂起、子代理状态误报）和 **Auto Memory 系统**的安全性与质量问题。PR 侧值得关注的是 **Gemini 3.1 Flash Lite 正式 GA** 的模型升级推进。

---

## 2. 版本发布

| 版本 | 类型 | 摘要 |
|------|------|------|
| **v0.46.0-preview.2** | Preview 补丁 | Cherry-pick f40498d：修复 transition banner 展示次数限制问题，补丁自 preview.1 合并而来 |
| **v0.45.2** | Stable 补丁 | 同上，将 banner 修复 cherry-pick 至稳定分支 v0.45.1 |
| **v0.47.0-nightly.20260605** | Nightly | 每日自动构建版本 |

---

## 3. 社区热点 Issues（Top 10）

按评论数与综合关注度排序：

### 🔴 #19873 — 通过零依赖 OS 沙箱 & 意图路由释放模型的 bash 亲和力
- **链接**: [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)
- **为什么重要**: 提出了一种架构级方案——让 Gemini 模型在原生 bash 环境下利用 POSIX 工具链（grep/cat/sed/awk），同时通过 OS 沙箱保障安全。评论达 8 条，说明社区对"模型原生能力 vs 安全性"的架构讨论很活跃。

### 🔴 #21409 — Generalist Agent 挂起问题
- **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **为什么重要**: 用户报告使用 generalist agent 时任务（如简单文件夹创建）永久挂起，需在 👍（8）说明影响面广。这是 Agent 核心体验的严重 bug。

### 🟠 #22323 — 子代理达到 MAX_TURNS 后仍报告成功状态
- **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **为什么重要**: `codebase_investigator` 子代理在达到最大 turn 上限时仍未完成分析，却报告 `status: "success"` + `"GOAL"` 终止，直接掩盖了任务中断。

### 🟠 #24353 — 组件级评估体系建设
- **链接**: [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)
- **为什么重要**: EPIC 级别 Issue，在已有 76 个行为评估测试的基础上，推进对 6 个 Gemini 模型的组件级评估，评论 7 条，是 QA 基础设施的核心议题。

### 🟠 #22745 — AST-aware 文件读取/搜索/代码库映射影响评估
- **链接**: [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- **为什么重要**: 探索 AST 感知工具是否能减少错误读取、降低 token 噪声、更精确地导航代码库，评论 7 条。直接关系到 Agent 代码编辑质量。

### 🟠 #25166 — Shell 命令执行完成后卡在"等待输入"状态
- **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **为什么重要**: 用户反复反馈简单 shell 命令执行完毕后 CLI 仍显示"Awaiting user input"并挂起。👍（3）表明多个用户受影响。

### 🟠 #21968 — Gemini 不太主动使用 skills 和子代理
- **链接**: [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **为什么重要**: 用户发现即便配置了相关 skills（如 gradle、git），模型也不会主动调用，需要显式指示。涉及 Agent 的自主任务规划与工具选择策略。

### 🟡 #26525 — Auto Memory 需要确定性脱敏并减少日志泄露风险
- **链接**: [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
- **为什么重要**: Auto Memory 在提取 agent 读取的 transcript 中，敏感信息在模型上下文已暴露后才进行脱敏，存在安全漏洞。评论 4 条。

### 🟡 #26522 — Auto Memory 对低信号会话的无限重试问题
- **链接**: [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)
- **为什么重要**: 若 extraction agent 判定会话信号不足决定跳过，该会话不会被标记为"已处理"，导致被反复表面化，浪费资源。

### 🟡 #24246 — 工具数量 >400 时触发 400 错误
- **链接**: [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- **为什么重要**: 工具数量过多时超出 API 限制，社区期待 Agent 能智能限制 scope 内工具数量而非简单的 fail。

---

## 4. 重要 PR 进展（Top 10）

### 🔵 [PR #27705](https://github.com/google-gemini/gemini-cli/pull/27705) — Gemini 3.1 Flash Lite GA + Gemini 3.5 Flash 支持
- **状态**: OPEN / size: xl
- **功能**: 将预览版模型替换为正式 GA 的 `gemini-3.1-flash-lite`，新增 Gemini 3.5 Flash 支持。是当前最大的模型升级 PR。

### 🔵 [PR #27698](https://github.com/google-gemini/gemini-cli/pull/27698) — 零配额限制快速失败，防止 retry loop 挂起
- **状态**: OPEN / priority: p1
- **功能**: 修复当用户达到 0 硬配额时 CLI 陷入 10 次重试死循环的 critical bug，对免费/未计费用户体验影响重大。

### 🔵 [PR #27701](https://github.com/google-gemini/gemini-cli/pull/27701) — includeDirectories 缺失目录导致启动崩溃
- **状态**: CLOSED / priority: p1
- **功能**: 将 `_initialize` 中的 strict `addDirectory` 改为 lenient `addDirectories`，防止可选目录（如 `.kilocode/rules`）不存在时 crash。

### 🔵 [PR #27572](https://github.com/google-gemini/gemini-cli/pull/27572) — 修复 tmux 环境下终端背景色误检
- **状态**: OPEN / priority: p2
- **功能**: 修复在 tmux/mosh 中运行时误检为浅色主题导致界面切换异常的问题。跨终端兼容性修复。

### 🔵 [PR #27694](https://github.com/google-gemini/gemini-cli/pull/27694) — 去重 home 与 project agent 目录
- **状态**: OPEN / priority: p2
- **功能**: 修复当 CLI 从 home 目录启动时，project/user agent 路径重复导致的重复 agent 警告。回归测试已添加。

### 🔵 [PR #27695](https://github.com/google-gemini/gemini-cli/pull/27695) — 防止 home 目录下的重复 agent 加载
- **状态**: CLOSED / priority: p2
- **功能**: 同一问题的另一个修复方案，已通过路径比较解决。

### 🔵 [PR #27678](https://github.com/google-gemini/gemini-cli/pull/27678) — 隐藏被 .gitignore 忽略的文件夹于 session context
- **状态**: OPEN / priority: p2
- **功能**: 在初始会话上下文目录树中隐藏被忽略的-folder 名，减少噪音信号输入 Agent 上下文。

### 🔵 [PR #27684](https://github.com/google-gemini/gemini-cli/pull/27684) — 消除 no-unsafe-return lint 抑制
- **状态**: OPEN / priority: p2 / help wanted
- **功能**: 代码质量改进，消除 `@typescript-eslint/no-unsafe-return` 抑制，替换为精确类型。

### 🔵 [PR #27591](https://github.com/google-gemini/gem-cli/pull/27591) — 超大 bug report URL 的 fallback 方案
- **状态**: OPEN / priority: p2
- **功能**: 修复 Android/Termux 上 `/bug` 命令因 URL 超长导致反馈提交失败的体验问题。

### 🔵 [PR #27505](https://github.com/google-gemini/gemini-cli/pull/27505) — 修复 CJK 全角字符续行的多余空格
- **状态**: OPEN / priority: p2
- **功能**: 修复中日韩宽字符显示时插入额外空格导致复制粘贴错误的国际化 bug。

---

## 5. 功能需求趋势

从当前活跃 Issues 中提炼出的核心关注方向：

### 🤖 Agent 稳定性与执行可靠性（最高频）
- 子代理挂起（#21409）、状态误报（#22323）、MAX_TURNS 掩盖（#22323）、generalist agent 死锁
- Agent 工具选择不够智能（#21968、#24246）

### 🧠 Memory 系统安全与质量
- Auto Memory 脱敏时机不当（#26525）、低信号会话重试（#26522）、无效 patch 隔离（#26523）、整体质量提升（#26516）
- 连续 4 条同作者同一主题的 bugs，说明这是近期密集 QA 发现集中地

### 🌳 AST-aware / Code Intelligence
- AST-aware 文件读取和搜索评估（#22745、#22746、#22747）
- 社区希望通过更精确的代码导航减少 token 消耗和误读

### 🧪 评估基础设施（Eval Infra）
- 组件级评估建设（#24353）、评估稳定性增强（#23166）、steering eval 测试修复（#23313）
- 76 个行为评估测试已在运行，需要工业化体系建设

### 🔒 安全与沙箱
- 零依赖 OS 沙箱提案（#19873）、破坏性行为预防（#22672）、Auto Memory 日志敏感信息泄露（#26525）

### 📱 终端/平台兼容性
- tmux 背景检测（#27572）、Wayland 下 browser subagent 失败（#21983）、CJK 字符渲染（PR #27505）、Android/Termux URL 限制（PR #27591）、终端窗口 resize 性能（#21924）

---

## 6. 开发者关注点

### 🔴 痛点

| 痛点 | 来源 Issue | 描述 |
|------|------------|------|
| Agent 频繁挂起 | #21409, #25166 | 核心体验问题，用户需手动 kill 进程，已影响正常工作流 |
| 子代理状态不可信 | #22323 | 任务未完成却报成功，用户难以区分真实完成状态 |
| Auto Memory 安全问题 | #26525 | 敏感信息在模型上下文中暴露后才脱敏，架构性安全缺陷 |
| Shell 命令卡死 | #25166 | 简单命令执行后可以无限期挂起，复现率较高 |

### 🟡 高频需求

1. **更智能的 Agent 工具管理**：MCP 工具数量增长后，Agent 需要自动 scope 筛选而非简单 match 失败
2. **子代理透明度增强**：开发者希望看到子代理的真实执行状态，而非被包装的"success"
3. **Skills 自动匹配改善**：即便配置了相关 skills，当前 Agent 不会主动发现并使用它们
4. **Free-tier 体验修复**（PR #27698）：零配额导致无限重试而非清晰提示，严重影响免费用户上手
5. **国际化终端支持**：CJK 宽字符、多终端环境的兼容性需求持续存在

### 💡 技术建议

基于当前 Issue/PR 分布，建议关注以下三个方向：
- **Agent Runtime 稳定性**：重点审查 generalist agent 的调度逻辑和超时机制
- **Auto Memory Pipeline 重设计**：安全问题较集中，建议在 pipeline 中前置脱敏
- **MCP Tool Governance**（#24246）：随着 MCP 生态扩张，需要引入按需加载/作用域过滤机制

---

*数据来源: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 报告生成时间: 2026-06-06*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-06

---

## 1. 今日速览

过去24小时社区呈现 **高活跃度**，共新增/更新 **26 条 Issues + 2 条 PRs**。昨日（2026-06-05）刚发布的 **v1.0.60** 已成为焦点，随即在 WSL2 和 Windows ARM64 上暴露新的回归问题；多复制的 alt-screen 争论持续升温，**权限管理** 成为今日最集中的议题，累计 5 条相关 Issue 在同一天涌现。

---

## 2. 版本发布

### v1.0.60（2026-06-05）

- **Tab 补全在斜杠命令路径参数中支持 `..` 父目录遍历**，不再错误切换标签页。
- **为 Anthropic 模型添加最大 reasoning effort 级别，并在所有套餐计划中开放全部 effort 档位。**
- **修复从终端 multiplexer 休眠唤醒后屏幕保持空白的问题。**

> 但版本发布后几小时内，WSL2 高 CPU 占用（#3700）、Alpine/musl 自动更新下载错误平台包（#3696）、Windows ARM64 进程崩溃（#3687）等回归问题相继被报告。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 高严重性 / 回归

| # | 标题 | 作者 | 👍 | 评论 | 为什么重要 |
|---|------|------|-----|------|-----------|
| [#3700](https://github.com/github/copilot-cli/issues/3700) | **WSL2 回归：空闲时 CPU 飙至 ~215%，TUI 输出冻结** | neerajdixit-msft2 | 1 | 0 | **高严重性**，v1.0.60 的 WSL2 回归（复现 #2208），每次新鲜会话启动即冻结，影响所有 WSL2 用户。 |
| [#3687](https://github.com/github/copilot-cli/issues/3687) | **Windows ARM64 下 copilot.exe fatal-abort（BEX64/0xc0000409）** | JW-Sthlm | 0 | 3 | 跨 v1.0.57 和 v1.0.60 可复现，多会话并发启动或内存压力时触发硬崩溃。 |
| [#3696](https://github.com/github/copilot-cli/issues/3696) | **Alpine/musl 自动更新下载错误的 linux-x64 包** | david-pf123 | 0 | 0 | 容器用户遭遇，auto-update 拉取错误架构包导致运行时 `runtime` native addon 加载失败。 |

### 🟡 用户痛点 + 高互动

| # | 标题 | 作者 | 👍 | 评论 | 为什么重要 |
|---|------|------|-----|------|-----------|
| [#2334](https://github.com/github/copilot-cli/issues/2334) | **请恢复 no-alt-screen 选项** | mbest | **28** | 6 | 获赞最高的老牌痛点。alt-screen 导致无法滚动查看历史、无法使用终端查找、选择复制后无法按 Enter 粘贴。社区呼声强烈。 |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | **瞬态 API 错误后触发速率限制** | AmauMaill | **17** | **27** | 评论数最多（27 条），瞬态错误→重试→触发速率限制的雪崩效应，影响所有模型套餐。 |
| [#2344](https://github.com/github/copilot-cli/issues/2344) | **Copy in terminal 原生复制不再工作** *(已关闭)* | raulc0399 | 10 | 4 | 两周前新功能覆盖了终端原生选中复制+右键粘贴的标准行为，已关闭但讨论仍在。 |

### 🟠 权限与管理

| # | 标题 | 作者 | 👍 | 评论 | 为什么重要 |
|---|------|------|-----|------|-----------|
| [#2398](https://github.com/github/copilot-cli/issues/2398) | **支持权限默认配置文件** | audunsolemdal | 10 | 4 | 每次会话手动配置权限太繁琐，社区希望有组织级或用户级默认权限模板。 |
| [#3563](https://github.com/github/copilot-cli/issues/3563) | **并行会话中工具审批有时被静默覆盖** | brycecutt-msft | 0 | 1 | 多会话同时写入 `~/.copilot/permissions-config.json` 导致竞态条件，存在安全隐患。 |
| [#3684](https://github.com/github/copilot-cli/issues/3684) | **子代理权限审批缺少上下文，令人困惑** | tdihp | 0 | 0 | Linux 子代理权限模式仅匹配 "/" 目录，却不显示具体命令，安全风险显著。 |
| [#3697](https://github.com/github/copilot-cli/issues/3697) | **增加禁用仓库 hooks 的配置选项，降低供应链注入风险** | TsuyoshiUshio | 2 | 0 | 参考近期 Miasma 蠕虫事件的供应链攻击，社区意识到仓库级 hook 配置可能成为执行面。 |
| [#3699](https://github.com/github/copilot-cli/issues/3699) | **非交互模式下 Agent Skills 的 `allowed-tools` frontmatter 未被遵守** | joellis13 | 0 | 0 | 自动化/CI 场景的关键 bug——技能声明了限制工具，非交互模式下却被绕过。 |

---

## 4. 重要 PR 进展（2 条）

| # | 标题 | 作者 | 状态 | 备注 |
|---|------|------|------|------|
| [#3651](https://github.com/github/copilot-cli/pull/3651) | **Create xcopilotcli** | XavierMP14 | OPEN | 目的/功能待确认，尚无评论。 |
| [#3473](https://github.com/github/copilot-cli/pull/3473) | **Update project name in README** | CPU-UMS9230E-T7250 | OPEN | 疑似垃圾信息（描述中包含推广链接），无实质内容。 |

> **注：** 今日可用 PR 信息有限，未发现核心功能相关的重要合并记录。

---

## 5. 功能需求趋势

从今日 26 条 Issues 中提炼出社区最关注的 **5 大功能方向**：

| 趋势 | 关联 Issues（代表性） | 描述 |
|------|----------------------|------|
| **① 权限与安全** | #2398、#3563、#3684、#3697、#3699 | 话题覆盖最广。需求包括：默认配置持久化、非交互模式合规、子代理权限隔离、防供应链 hook 注入。开发者对 **"既想自动又想安全"** 的呼声极高。 |
| **② 终端渲染与 UX** | #2334、#2344、#2998、#3700、#3692、#3415 | alt-screen 争议持续；选区复制/粘贴退化；会话常驻标题显示；Escape 键取消后恢复排队提示。终端体验是用户日常摩擦最多的地方。 |
| **③ 跨平台稳定性** | #3700、#3687、#3696、#3690 | WSL2/ARM64/Alpine 的回归、崩溃、包分发错误集中爆发。Linux 用户增多后，平台兼容性压力陡增。 |
| **④ MCP 服务集成** | #3698、#3701 | MCP stdio 服务器连接泄漏、IDE 锁文件循环重启导致服务器无限自增。MCP 生态快速扩展，但生命周期管理尚未成熟。 |
| **⑤ 会话与代理管理** | #3547、#3688、#3694、#3689、#3695 | 后台子代理挂起、仓库路径大小写敏感、`/fork` 和 `/resume` 失败。随着多代理并行和会话持久化使用增加，可靠性问题凸显。 |

---

## 6. 开发者关注点总结

1. **v1.0.60 的发布-回归循环令人担忧。** 新版本解一方面解锁了 Anthropic 模型的完整 reasoning effort，另一方面在 WSL2/ARM64/Alpine 三个平台引入了即时可复现的严重问题，开发者在升级与使用之间进退两难。

2. **Alt-screen 争论已成为社区情绪焦点。** #2334 累计 28 👍、持续数月未解决。开发者普遍认为 alt-screen 损害了终端的核心优势（滚动历史、搜索、鼠标操作），希望提供 opt-out 选项。

3. **权限系统的复杂度正在反噬效率。** 从手动逐次审批（#2398）到并行覆盖（#3563）、子代理缺上下文（#3684）、非交互模式绕过声明（#3699），权限问题的维度不断扩展，开发者需要统一的权限策略框架。

4. **MCP 生态的快速扩张正在暴露基础设施债务。** stdio 服务器泄漏和无限进程自增并非 MCP 特有，但 Copilot CLI 作为 MCP 的活跃采用者，需要尽快完善进程生命周期管理和重连策略。

5. **供应链安全意识觉醒。** #3697 直接引用了 Miasma 蠕虫案例，表明开发者开始从攻击者视角审视仓库级 hook 的潜在威胁，这可能会推动 Copilot CLI 引入更多沙箱和审批机制。

---

*🗓️ 本日报基于 2026-06-06 GitHub GitHub/copilot-cli 公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

```
📰 Kimi Code CLI 社区动态日报 — 2026-06-06
数据来源：github.com/MoonshotAI/kimi-cli
────────────────────────────────────────

1. 今日速览

今天的核心事件是 Kimi Code CLI 发布 1.47.0，同步推进项目更名过渡（从 Kimi CLI 指向下一代 Kimi Code）。社区端共有 1 个 Issue 和
6 个 PR 在 24 小时内有活动，整体处于版本收尾和下一阶段迁移筹备期。

────────────────────────────────────────

2. 版本发布 — 1.47.0

来源：Release · commit/changelog
链接：https://github.com/MoonshotAI/kimi-cli/releases/tag/1.47.0  (见 #2433 #2432 #2431)

主要变更：

● fix(tools)：工具错误摘要现在会包含尾部输出，并以纯文本渲染，方便定位失败原因。
  PR #2389  by @liruifengv
● feat(shell)：新增 /upgrade 命令，引导现有用户迁移到下一代的独立二进制 Kimi Code（含配置 & sessions
  自动迁移），不会强制弹窗，也不会用“停服倒计时”恐吓用户。PR #2432  by @RealKai42
● feat(shell)：欢迎界面增加温和提示，说明本仓库为原始 Python 版 Kimi CLI，并给出 Kimi Code CLI 的链接。PR
  #2432 / #2431
● docs/README：将自引用名称统一改为“Kimi CLI”，避免与 MoonshotAI/kimi-code 重名。PR #2431  by @RealKai42
● chore(release)：版本号从 1.46.0 升至 1.47.0，同步更新 kimi-code wrapper。PR #2433  by @RealKai42

────────────────────────────────────────

3. 社区热点 Issues（过去 24h 更新）

#2430 [CLOSED] [bug] auto logged out in the middle of a task
作者：TheKevinWin   创建：2026-04-04  更新：2026-06-05  评论 0  赞 0
https://github.com/MoonshotAI/kimi-cli/issues/2430

摘要：用户在 Windows 10 运行 1.36.0、模型 kimi-k2.6 时，任务做到一半会自动登出。
原因/反应：Issue 无评论。该问题在版本迭代后关闭，可能是老旧版本特有问题，已被登录/会话机制优化隐式修复。建议升级至
1.47.0 以上再验证。

补充说明：当前 Issues 列表较短，因此只有 1 条热点。

────────────────────────────────────────

4. 重要 PR 进展（过去 24h 更新，共 6 条）

✅ 已合并(Closed)

① #2432  feat(shell): guide users to upgrade to the new Kimi Code
   作者：RealKai42
   https://github.com/MoonshotAI/kimi-cli/pull/2432
   已进入 1.47.0。核心意义：生态迁移入口——/upgrade 命令 + 自动迁移配置，意味着 Kimi Code CLI 将从 Python CLI 平滑过渡到单二进制方案。

② #2433  chore(release): bump kimi-cli to 1.47.0
   作者：RealKai42
   https://github.com/MoonshotAI/kimi-cli/pull/2433
   常规发布 chore，随 #2432 一起合并。

③ #2431  docs: rename project to Kimi CLI and link to Kimi Code CLI successor
   作者：RealKai42
   https://github.com/MoonshotAI/kimi-cli/pull/2431
   统一名称，避免 MoonshotAI/kimi-code 与本仓库混淆；README 现在明确区分“初代 Kimi CLI”与下一代“Kimi Code CLI”。

④ #1960  feat(soul): RalphFlow architecture with ephemeral context and convergence detection
   作者：ORDL-AMF  (创建于 2026-04-20，24h 内仍有活动)
   https://github.com/MoonshotAI/kimi-cli/pull/1960
   引入 RalphFlow：自动迭代 + 短生命周期上下文 + 收敛检测，旨在防止 agent 无限循环。架构较有野心，但从讨论看仍在评审阶段。

🔧 开放中(Open)

⑤ #2434  fix: suppress MCP connection errors and handle LLM double-serialization
   作者：wintrover
   https://github.com/MoonshotAI/kimi-cli/pull/2434
   解决三大问题：MCP 断连不再刷屏；event-loop crash handler 不再二次关闭失效连接；LLM 返回的 JSON 被重复序列化。对于重度 MCP 用户稳定性很重要。

⑥ #2429  fix: prevent idle cursor blink from forcing scroll to bottom in Linux terminals
   作者：GH-ytym  (Resolve #2422)
   https://github.com/MoonshotAI/kimi-cli/pull/2429
   修复完成对话后，光标闪烁导致终端每秒自动滚回底部的问题。Linux 用户体验修复，尤其是长输出阅读场景。

────────────────────────────────────────

5. 功能需求趋势（从近 24h Issues/PR 提炼）

总体归纳：当前 Kimi Code CLI 社区围绕两条主线：迁移与稳定。

① 生态迁移 (Kimi Code CLI 接替 Kimi CLI)  (#2432 #2431)
   - /upgrade、自动迁移、重命名说明、文档链接
② 运行时稳定性
   - MCP 断连降噪 (#2434)
   - LLM double-serialization (#2434)
   - 登录过期中断 (#2430)
③ 终端/UI 体验
   - 空闲光标跳动导致滚动异常 (#2429)
   - 错误摘要优化 (1.47.0 fix)
④ Agent 架构演进
   - RalphFlow 架构 #1960（防循环/收敛检测/短生命周期上下文）
⑤ 新手引导/文档
   - README 名称统一
   - 升级路径指引

────────────────────────────────────────

6. 开发者关注点 & 高频痛点

① 迁移焦虑
   从 Kimi CLI 过渡到 Kimi Code CLI，开发者关心：配置会丢失吗？功能差异？路径是否 #2432 通过 /upgrade +
   auto-migration 正面回应。
② 长时间任务被意外打断
   例如 Issue #2430 的“自动登出”，令人在长时间批处理任务中不安。
③ 工具链稳定性 (MCP, LLM)
   接口掉线、重复序列化等问题被多次提及 (#2434)。
④ 平台兼容性缺陷
   Windows (Issue 2430), Linux 终端 (PR #2429) —— 差异化 bug 需要更多 CI/真机测试覆盖。
⑤ Agent 高级编排能力
   RalphFlow 的收敛检测与上下文隔离，以及后续可能引入的 DAG/quenn编排，会成为社区讨论热点。

────────────────────────────────────────

编辑：OWL (AI DevTools 技术分析师 — ZOO)
```


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-06-06

---

## 1. 今日速览

OpenCode 昨日发布 **v1.16.2**，重点修复 GPT-5 兼容性问题、编辑操作安全校验及 Bedrock 会话挂起等核心 Bug。社区方面，**Agent 沙箱隔离**（#2242，51 条评论/51 个点赞）与 **dynamical workflows** 集成等需求持续高热，GitHub 在过去 24 小时内活跃度极高，共涌现 50+ Issues 和 50+ PRs，涵盖 UI/UX 修复、Bedrock 网关兼容性回归、二进制文件处理等多个关键方向。

---

## 2. 版本发布

### v1.16.2（2026-06-05）

**核心修复：**
- **GPT-5 兼容性**：Reasoning summaries 现在仅在支持该特性的 Provider 上运行，避免了在兼容后端上触发 GPT-5 请求失败。
- **编辑安全加固**：Edit 操作现在拒绝模糊匹配，防止误覆盖错误文件或误替换已有文件。
- **Bedrock 会话修复**：修复了 Bedrock 会话挂起问题（描述截断）。

> 🔗 [v1.16.2 Release](https://github.com/anomalyco/opencode/releases/tag/v1.16.2)

### v1.16.0（近期主要版本，含本周期大部分底层变更）

**核心改进：**
- 托管工作区克隆（保留脏文件和未跟踪文件）。
- 支持在不同工作区和目录间移动 Session。
- 通过 AWS Bedrock 添加完整的 OpenAI 模型支持。
- Skill 发现和基于文件的 Agent 加载。
- 更新 GitHub Copilot 使用方式。

> 🔗 [v1.16.0 Release](https://github.com/anomalyco/opencode/releases/tag/v1.16.0)

---

## 3. 社区热点 Issues

### 🔴 高讨论度

| # | 标题 | 热度 | 摘要 |
|---|------|------|------|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | **Agent 沙箱隔离** | 💬51 👍51 | 用户希望限制 Agent 终端命令只能访问当前目录，类似 Gemini CLI/Codex 的 macOS Seatbelt 机制。这是安全与生产部署的核心诉求。 |
| [#29992](https://github.com/anomalyco/opencode/issues/29992) | **自动滚动失效** | 💬13 👍15 | 用户手动上滚后回到底部，自动滚动停止工作——影响长对话阅读体验。已关闭，说明已在 v1.16.x 中修复。 |
| [#29059](https://github.com/anomalyco/opencode/issues/29059) | **Dynamic Workflows 功能请求** | 💬7 👍12 | 社区希望引入类 Claude Code 的项目级动态工作流，支持可复用的多步骤自动化，与竞品保持功能对齐。 |
| [#20067](https://github.com/anomalyco/opencode/issues/20067) | **Web 端多用户认证与 per-user Provider 凭证** | 💬5 👍12 | 企业部署诉求：多人共享 OpenCode Web 时需支持独立认证和个性化 Provider 凭证。 |
| [#7801](https://github.com/anomalyco/opencode/issues/7801) | **Plan Mode + Question tool 自动切 Build** | 💬5 👍18 | 用户希望在确认 Plan 后自动从 Plan 模式切换到 Build 模式，减少手动操作（高点赞量说明这是普遍痛点）。 |

### 🟡 功能请求与兼容性问题

| # | 标题 | 热度 | 摘要 |
|---|------|------|------|
| [#31000](https://github.com/anomalyco/opencode/issues/31000) | **Copilot provider 模型列表拉取失败** | 💬6 | `enterpriseUrl` 为 `github.com` 时，d7() 构造了不存在的域名 `copilot-api.github.com`，应为 `api.githubcopilot.com`。影响所有 GitHub Copilot 企业用户。 |
| [#30948](https://github.com/anomalyco/opencode/issues/30948) | **Bedrock 兼容网关返回空输出（v1.16.0 回归）** | 💬7 | 1.16.0 引入的变更导致 `amazon-bedrock` provider 对兼容网关返回空响应。已关闭，快速修复。 |
| [#30993](https://github.com/anomalyco/opencode/issues/30993) | **Bedrock 无法使用 GPT 5.4 & 5.5** | 💬2 | 配置中 region 和 apiKey 未被正确读取。已关闭。 |
| [#29808](https://github.com/anomalyco/opencode/issues/29808) | **桌面版 UI 显示异常** | 💬11 👍6 | 进入新布局并调整高级显示设置后，文件树和文件审查的切换按钮消失，即使用户恢复默认设置也无法找回。 |
| [#2047](https://github.com/anomalyco/opencode/issues/2047) | **LM Studio 模型列表不刷新** | 💬15 👍3 | 本地 LM Studio 添加/删除模型后，OpenCode 无法刷新列表，即使重新登录也不行。这是一个长期未解决的本地 Provider 体验问题。 |

---

## 4. 重要 PR 进展

### 🟢 已合并（Closed）

| # | 标题 | 说明 |
|---|------|------|
| [#31038](https://github.com/anomalyco/opencode/pull/31038) | **V2 reads 支持媒体感知和二进制安全** | 修复 Core V2 中图像文件的读取问题，在路由前分类图像媒体并正确拒绝不支持的二进制文件，保留 PNG/JPEG/GIF/WebP 支持。 |
| [#31030](https://github.com/anomalyco/opencode/pull/31030) | **恢复 V1 风格的图像读取附件** | 在 Core V2 中恢复 PNG、JPEG、GIF、WebP 读取附件能力，通过文件签名嗅探而非信任扩展名。 |
| [#31029](https://github.com/anencode/opencode/pull/31029) | **读取前拒绝二进制文件** | 在 Core V2 中加入二进制文件检测，避免将 base64 二进制数据序列化为模型可见的工具输出。 |
| [#31031](https://github.com/anomalyco/opencode/pull/31031) | **改善二进制读取错误信息** | 保留超大文件和二进制文件的具体错误信息，在错误消息中包含资源名称和字节限制。 |
| [#31003](https://github.com/anomalyco/opencode/pull/31003) | **恢复 V2 上下文溢出处理** | 识别 Provider 上下文溢出失败并执行一次强制压缩，解决预检通过但 Provider 端实际拒绝的情况。 |
| [#31036](https://github.com/anomalyco/opencode/pull/31036) | **V2 提示词缓存按 Session 作用域隔离** | 将 promptCacheKey 设为准 Session ID，防止不相关 Session 共享同一缓存前缀。 |
| [#31035](https://github.com/anomalyco/opencode/pull/31035) | **提高项目 Session 上限至 64** | 每个项目在 App Session Store 中最多保留 64 个 base sessions。 |
| [#30941](https://github.com/anomalyco/opencode/pull/30941) | **Session 列表 UI 改进** | 添加 project avatar 替换 TabStateIndicator，新增 open TUI 会话指示器，使用 `bg-layer-04` 颜色令牌。 |
| [#30743](https://github.com/anomalyco/opencode/pull/30743) | **Nix hash 计算失败重试** | 在 `nix-hashes` 工作流中对 `compute-hash` 添加 3 次重试和指数退避。 |

### 🟡 待审理（Open）

| # | 标题 | 说明 |
|---|------|------|
| [#31043](https://github.com/anomalyco/opencode/pull/31043) | **修复 owned process 输出排空边界** | 分离 direct-child 退出与 stdout/stderr 排空完成状态，绑定 Bash/AppProcess 结算，修复子进程继承管道时的挂起。 |
| [#31018](https://github.com/anomalyco/opencode/pull/31018) | **HTTP Recorder 公测发布** | 引入公共 HTTP API，支持自动本地录制/回放和声明式重删脱敏。 |
| [#31045](https://github.com/anomalyco/opencode/pull/31045) | **跳过 assistant 消息重放中的空文本部分** | 修复模型仅返回工具调用时 processor.ts 存储空文本部分的问题。 |
| [#31034](https://github.com/anomalyco/opencode/pull/31034) | **Desktop V2 Tab 架构实验** | 将 Web UI 从挂载式应用迁移到 Tab 导航，服务器、目录、草稿等作用域明确归属单个稳定 Session 主机。 |

---

## 5. 功能需求趋势

基于当前数据，社区最集中的功能方向为：

| 方向 | 代表 Issues | 强度 |
|------|-------------|------|
| **安全/沙箱隔离** | #2242（Agent 命令限制） | ⭐⭐⭐⭐⭐ |
| **企业/多用户部署** | #20067（Web 多用户认证）、#2242 | ⭐⭐⭐⭐ |
| **工作流自动化** | #29059（Dynamic Workflows）、#7801（Plan→Build 自动切换） | ⭐⭐⭐⭐ |
| **UI/UX 稳定性** | #29808、#29875（Windows 文件管理器按钮缺失）、#29992 | ⭐⭐⭐ |
| **多 Provider/模型兼容** | #2047（LM Studio）、#30948（Bedrock 网关）、#30993（GPT 5.4/5.5） | ⭐⭐⭐ |
| **性能/稳定性** | #26416（空闲 CPU 过高）、#13001（僵尸进程）、#26411 | ⭐⭐ |

---

## 6. 开发者关注点

**🔧 高频痛点：**

1. **Agent 安全边界缺失**：开发者普遍希望 Agent 操作能限定在沙箱内，尤其是多团队协作和 CI/CD 场景中，文件越权访问风险是最大担忧。
2. **Bedrock 兼容性问题**：从 v1.16.0 开始，AWS Bedrock（尤其是兼容网关和 GPT 5.x 系列模型）成为高频报错源，回归修复速度较快但覆盖面仍不全。
3. **上下文/内存管理**：V2 上下文溢出恢复（#31003）、Session 上限扩大（#31035）、提示词缓存隔离（#31036）集中在同一天合并，说明核心团队正在大力改善 Context Window 的可靠性。
4. **图像/二进制文件处理**：连续多个 PR（#31029、#31030、#31031）修复 Core V2 的文件读取逻辑，V2 在处理非文本文件时的体验显然尚未稳定。
5. **UI 稳定性**：Windows 端文件管理器按钮消失、Settings 面板 MCP 开关无响应、Desktop UI 布局切换后控件丢失——桌面端是最需要 QA 覆盖的方向。

---

*数据来源: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) · 日报覆盖时间: 2026-06-05 ~ 2026-06-06*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-06

---

## 1. 今日速览

过去 24 小时 pi-mono 仓库**无新 Release**，但 Issues 和 PRs 都非常活跃：社区反馈集中在 **gpt-5.5 / openai-codex 挂起问题**（53 条评论持续发酵）；多个**崩溃与兼容性 bug**（DeepSeek 签名失效、auto-compaction 崩溃、retry 逻辑崩溃）被集中修复；同时有一批**扩展能力增强 PR**（路径 helper 导出、OAuth 提示、消息校验）快速合入。整体节奏是**高密度修 bug + 生态扩展能力补全**。

---

## 2. 版本发布

过去 24 小时内**无新 Release**。

---

## 3. 社区热点 Issues

| # | 标题 | 重要性 & 社区热度 |
|---|------|-------------------|
| **[#4945](https://github.com/earendil-works/pi/issues/4945)** | gpt-5.5 / openai-codex 交互 TUI 卡在 "Working..." 无输出 | 🔥 **今日最热**，53 评论、28 👍。用户报告使用 gpt-5.5 时 Agent 界面卡死，只有 Escape 才能恢复并记录为 aborted turn，严重影响 Codex 工作流可靠性。 |
| **[#5420](https://github.com/earendil-works/pi/issues/5420)** | Auto-compaction 后崩溃：`Cannot continue from message role: assistant` | 3 👍，长会话（203k+ tokens）compact 后最后一条是 assistant 消息，`agent.continue()` 直接抛异常。影响所有长会话用户。 |
| **[#5422](https://github.com/earendil-works/pi/issues/5422)** | 渲染行超出 terminal width 触发 uncaughtException 崩进程 | 复现路径明确，终端 resize 或宽行输出时直接崩溃，用户体验极差。 |
| **[#5416](https://github.com/earendil-works/pi/issues/5416)** | `sanitizeSurrogates()` 处理 thinking block 导致 Anthropic 签名失效 | 影响所有使用 Anthropic + extended thinking 的用户，签名验证失败会直接断连。 |
| **[#5445](https://github.com/earendil-works/pi/issues/5445)** | `_prepareRetry` 在 end_turn 后崩溃：`Cannot continue from message role: assistant` | 与 #5420 同根因，在 retry 场景（529 限流后）触发相同消息序列 bug。 |
| **[#5384](https://github.com/earendil-works/pi/issues/5384)** | DeepSeek 经 OpenRouter 代理仍发 `role: developer` — detectCompat 未匹配 | #1048 已修复直连场景，但代理路由下的 model id 未被 detectCompat 覆盖，大量 OpenRouter 用户受影响。 |
| **[#3715](https://github.com/earendil-works/pi/issues/3715)** | local-llm 流式 5 分钟因 undici bodyTimeout 断开 | 9 条评论，使用 vLLM 运行本地 Qwen3 长推理时必现，`retry.provider.timeoutMs` 无法突破该硬限制。 |
| **[#5188](https://github.com/earendil-works/pi/issues/5188)** | Shift+Enter 未换行而是直接提交 | 2 👍，keybinding 配置正确但 TUI 未正确处理 shift+enter，影响多行输入习惯用户。 |
| **[#5431](https://github.com/earendil-works/pi/issues/5431)** | DeepSeek API key 保存后仍报 "No API key found" | auth.json 写入后重读失败，可能是 key 序列化/反序列化路径 bug。 |
| **[#5438](https://github.com/earendil-works/pi/issues/5438)** | 剪贴板图片粘贴只输入临时路径但不实际附加到请求 | 模型无关的前端 bug，Ctrl+V 图片无法用于 vision 模型多模态输入。 |

---

## 4. 重要 PR 进展

| # | 标题 | 内容摘要 | 状态 |
|---|------|---------|------|
| **[#5439](https://github.com/earendil-works/pi/pull/5439)** | Export package path helpers from root API | 将 `getPackageDir()`、`getReadmePath()`、`getDocsPath()`、`getExamplesPath()` 从 `config.ts` 导出到公共 API，方便扩展开发者引用资源 | ✅ Closed |
| **[#5437](https://github.com/earendil-works/pi/pull/5437)** | 自 neutraLIZE SUMMARIZATION_SYSTEM_PROMPT for 非 coding agents | 把 compaction 提示语中的 "AI coding assistant" 改为 "AI assistant"，避免非编码场景下 compaction 偏置 | ✅ Closed |
| **[#5435](https://github.com/earendil-works/pi/pull/5435)** | Validate LLM messages after extension transforms | 在扩展通过 `context` hook 修改消息后增加校验，防止产生无效消息序列导致 LLM 提供商报模糊错误（如 MiniMax 2013） | ✅ Closed |
| **[#5434](https://github.com/earendil-works/pi/pull/5434)** | Drop `additionalProperties: false` on edit tool inner schema | 允许 edit 工具 edits[] 中出现未知字段，提升对嘈杂/弱模型输出的健壮性 | ✅ Closed |
| **[#5429](https://github.com/earendil-works/pi/pull/5429)** | Fix models.json migration error path | `~/.pi/agent/models.json` JSON 解析失败时不再直接崩出 raw stack trace，改为带文件路径信息的友好报错 | ✅ Closed |
| **[#5417](https://github.com/earendil-works/pi/pull/5417)** | Add codex core harness of path and shell command | 为 codex 补充路径和 shell 命令处理能力，增强编码 Agent 基础能力 | ✅ Closed |
| **[#5426](https://github.com/earendil-works/pi/pull/5426)** | Add workflow extension for multi-agent orchestration | 包含 workflow-core 发现 Agent、多进程.spawn、并行/串行执行，`/workflow` 命令接入 context firewall | ✅ Closed |
| **[#5262](https://github.com/earendil-works/pi/pull/5262)** | Add Anthropic Vertex provider | 接入 Google Cloud Vertex AI 上的 Claude，复用已有的 Anthropic Messages 流式路径 | 🟡 Open |
| **[#5332](https://github.com/earendil-works/pi/pull/5332)** | Approval system for workspaces | 新增 `.pi.user` 目录用于加载永不被扩展的用户扩展，首次加载 `.pi` / `.pi.user` 需交互确认（或 `-f` 跳过），提升安全沙箱 | 🟡 Open (in progress) |
| **[#5385](https://github.com/earendil-works/pi/pull/5385)** | Detect first-run terminal theme | 首次运行时通过 OSC 查询终端亮/暗主题并持久化到 settings，解决默认主题与终端不匹配问题 | 🟡 Open (in progress) |

---

## 5. 功能需求趋势

从过去 24 小时内更新的 38 条 Issues 和 13 条 PRs 来看，社区需求集中在以下几个方向：

| 方向 | 代表 Issue/PR | 趋势说明 |
|------|--------------|---------|
| **模型兼容性 & 调试** | #4945 (gpt-5.5 挂起), #5384 (OpenRouter DeepSeek), #3715 (本地超时) | 随着支持模型数量暴增，各模型行为差异（超时行为、role 兼容、流式协议）导致的 bug 反馈激增 |
| **稳定性 & 崩溃修复** | #5420 (compact crash), #5422 (渲染 crash), #5445 (retry crash) | 长会话、terminal resize、retry 路径等场景下的 crash 集中暴露，是排障高峰 |
| **扩展 API 完善** | #5439 (路径 helper), #5443 (waitForIdle/reload on ExtensionContext), #5442 (self-evolver) | 社区开发者要求更多内部 API 暴露，降低扩展开发门槛 |
| **多模态 & 剪贴板** | #5279 (attach image), #5438 (clipboard paste) | 图片输入和剪贴板集成需求增加，尤其是 SSH 远程场景和 vision 模型工作流 |
| **多 Agent 编排** | #5426 (workflow), #5442 (self-evolver), #5440/#5441 (native subagents) | 社区正在构建多 Agent 调度与自进化能力，是当前最热门的实验方向 |
| **安全 & 权限** | #4459 (command-level permission), #5447 (exclude built-in tools from sandbox), #5332 (workspace approval) | 企业用户对沙箱细粒度控制和命令审批的需求强烈 |

---

## 6. 开发者关注点

1. **"Working..." 卡死是最高优先级问题** — #4945 已积累 53 条评论，gpt-5.5 / Codex 用户的日常工作受到直接影响，社区期待一个靠谱的修复方案或 workaround。
2. **消息序列一致性是隐性的系统性风险** — 同一天内出现 #5420、#5445、#5435 三个与消息序列/角色顺序相关的 bug，说明 compact、retry、extension transform 三条路径都可能破坏消息序列假设，需要整体审视。
3. **生态开发者呼吁 API 稳定化** — #5439、#5443、#5415 均要求导出更多内部 helper，说明当前扩展 API 覆盖面不足，社区扩展开发成本高。
4. **多模型的差异化适配工作量大** — DeepSeek、Anthropic、OpenAI、本地 LLM 各自有独特的协议行为（timeout、role、transport），维护者面临持续增长的 N×M 兼容性矩阵。
5. **多 Agent 自进化已成为社区自发性实验热点** — 今天至少 3 个 PR（#5442 self-evolver、#5440/#5441 subagents、#5426 workflow）在探索同一个方向，社区正在将 pi-mono 推向自进化平台的方向。

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**2026-06-06**

---

## 1. 今日速览

社区焦点高度集中在 **daemon/web-shell 功能补齐** 与 **内存稳定性修复** 两大方向。`doudouOUC` 持续密集产出，单日主导了至少 6 个 PR（覆盖 session 分支、命令透传、daemon 冷启动优化等）。多个 High Memory Usage / OOM 相关 Issue 迎来清理式关闭，但新复发的 P1 级 `--resume` OOM 问题（#4815）值得警惕。

---

## 2. 版本发布

- **v0.17.1-nightly.20260605.715266537**
  - `chore(release)`: v0.17.1 版本发布 [PR #4742](https://github.com/QwenLM/qwen-code/pull/4742)
  - `fix(cli)`: 修复复制输出时跳过多轮思考（thought parts）内容 [#PR by he-yufeng](https://github.com/QwenLM/qwen-code)
  > 当前 nightly 频次较高，v0.17.1 正式版预计近期到来。

---

## 3. 社区热点 Issues（10 条精选）

| # | 重要性 | 说明 |
|---|--------|------|
| **#4815** ⭐ P1 | 🔴 紧急 | `qwen --resume` 导致严重 OOM，Escape 键完全失效，100% 可复刻。新发问题，尚无修复，是当前稳定性最大雷点。 |
| **#4514** | 🟠 高 | 跟踪 `qwen serve` daemon HTTP/SSE 能力差距，是当前 daemon 功能落地的中枢 Issue，贴主已梳理出完整 backlog。 |
| **#4801** | 🟠 高 | 请求独立的 `web_search` 工具（而非仅靠 `web_fetch` 拉 URL），对远程部署场景需求迫切。 |
| **#4802** | 🟡 中 | `qwen3.7-plus` 是多模态模型但框架当纯文本处理，`modalityDefaults.ts` 缺对应正则匹配，已有人提交修复 PR 跟进。 |
| **#4777** | 🟡 中 | Deferred-tools 列表（MCP 工具）写入缓存 System Prompt，每次 MCP 工具发现/暴露时缓存全部失效，影响长会话效率。 |
| **#4748** | 🟡 中 | 贴出 benchmark 数据：daemon 冷启动 ~2.5s vs CLI 0.7s，目标是压到 ~1.5s，warm 会话已做到 ~21ms。 |
| **#4805** | 🟡 中 | CI 主分支允许过期 green check 合入，存在语义冲突漏检风险，推进 merge queue 被标记为 P2。 |
| **#4167** ✓ closed | ✅ 已修复 | GC 崩溃（Mark-Compact 2017MB），近期关闭，与 OOM 修复批次相关。 |
| **#4089** ✓ closed | ✅ 已修复 | 用户设置 262K context window 但 `/context detail` 显示 100万 tokens，配置不生效的 bug，已关闭。 |
| **#3326** ✓ closed | ✅ 已修复 | 7GB+ 高频内存告警/崩溃系列的清理，近期大批量关闭此类历史问题。 |

> 📊 **Issue 状态概览**（24h 更新 25 条）：Open 6 / Closed 19；OOM 相关主题仍在高频出现，但历史大量旧案已结清。

---

## 4. 重要 PR 进展（10 条精选）

| # | 作者 | 方向 | 说明 |
|---|------|------|------|
| **#4490** | doudouOOC | 🔴 主干合并 | daemon-mode feature batch 合入 main：46 commits / 386 files / +115k LOC，是 v0.16-alpha 核心功能集。当前 Open，最重磅 PR。 |
| **#4736** | chiga0 | 🟠 server | ACP/REST 一致性 Wave 1：新增 24 个 `_qwen/*` 扩展方法，达成近完整 `/acp` 传输层对齐。依赖 #4563。 |
| **#4563** | doudouOUC | 🟠 refactor | 从 `AcpSessionBridge` 提取 `DaemonWorkspaceService`（workspace status/init/tool-toggle/MCP-restart），解耦架构。 |
| **#4811** | doudouOUC | 🟡 ACP | 在 ACP（web-shell）模式启用 `/remember`、`/forget`、`/dream` 三个斜杠命令。 |
| **#4812** | doudouOUC | 🟡 server | 新增 `POST /session/:id/branch` HTTP route，支持 fork 会话（基于 JSONL 快照 + resume 语义）。 |
| **#4803** | pomelo-nwu | 🟡 model | 修复 `qwen3.7-plus` 多模态识别：补全 regex 模式使其透出 image/video 输入能力。 |
| **#4810** | yiliang114 | 🟡 稳定性 | 用 per-request `createChildAbortController` 隔离 OpenAI SDK abort listener 泄露。 |
| **#4798** | Alex-ai-future | 🟡 体验 | 每次 UserQuery 注入当前时间戳，解决长对话 stale date 问题。 |
| **#4647** | CNCSMonster | 🟡 Linux | 用原生 `wl-paste/xclip` 替代 Rust 剪贴板模块，修复 WSL2+Wayland 图片粘贴。已关 #3517、#2885。 |
| **#4808** | xxlaura | 🟢 趣味 | 新增 `desktop-pet` 技能，为任何角色生成 chibi 像素风桌面宠物。社区创意。 |

---

## 5. 功能需求趋势

从 25 条 Issue + 50 条 PR 中可识别以下方向：

1. **Daemon / Web-shell 完善**（最高热度，约 30%+ 活动量）
   - 斜杠命令 ACP 透传（#4809、#4811）
   - 会话分支 fork（#4812）
   - REST/ACP 双轨对齐（#4736）
   - 开发者文档补齐（#4412）

2. **内存与稳定性**（持续提升）
   - 持续清理历史 OOM crash 工单
   - `--resume` 场景新 OOM #4815 属 P1
   - abort listener 泄露隔离（#4810）
   - date injection 防止上下文漂移（#4798）

3. **模型兼容性**
   - Qwen 3.7-plus 多模态识别（#4802+#4803）
   - 自托管 LLM（vLLM/sglang/LMStudio）tool params 强制 string 化（#4793）
   - 本地模型接入 OpenAI 兼容配置引导（#4384）

4. **工具/搜索能力**
   - 独立 `web_search` 工具需求（#4801）
   - MCP 工具缓存失效优化（#4777）

5. **CI/CD 工程质量**
   - merge queue 防 stale green check 合入（#4805）
   - triage 自动化 prompt 修复（#4787）

6. **趣味 / 品牌技能**
   - Desktop-pet 角色宠物（#4808、#4807等）

---

## 6. 开发者痛点总结

| 痛点 | 来源 | 当前进展 |
|------|------|----------|
| 长会话 / resume 场景频繁 OOM 崩溃 | #4815、#4167、#3326 等 | 历史旧案批量关闭，但新场景 #4815 仍 P1 未修 |
| daemon 启动偏慢（2.5s）| #4748 | 已有 benchmark，待优化 |
| Debug 困难：仅靠 `/bug` 命令 | 贯穿多 Issue | startup 注入日期、IM 同步等辅助手段在补强 |
| 自托管 LLM 参数 schema 兼容难 | #4793、#4791 | 已有人主动提 PR 修复，但同类兼容问题预计会不断出现 |
| CI 过期 green check 合入风险 | #4805 | 尚未部署 merge queue |
| Custom Provider 多模型共享 baseUrl 重复配置 | #4813 | 仅 1 赞，P3 优先级 |
| 本地模型 web search 不可用 | #4801 | 功能请求阶段，无实现 |

> **一句话总结**：社区推进节奏快，daemon 架构日臻成熟；内存稳定性和自托管模型兼容性是开发者痛感最强的两个飞轮，期待持续投入。

---
*数据来源：github.com/QwenLM/qwen-code | 生成时间：2026-06-06*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*