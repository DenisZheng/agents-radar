# AI CLI 工具社区动态日报 2026-06-19

> 生成时间: 2026-06-19 00:48 UTC | 覆盖工具: 9 个

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



# AI CLI 工具生态横向对比分析报告

**日期：2026-06-19**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从"能用"到"好用且可靠"的转型期**。一方面，各工具在远程执行加密（Codex Noise 中继）、Agent 目标管理（OpenCode /goal）、AST 感知代码库（Gemini CLI）等前沿方向快速探索；另一方面，**回归 bug 频发**成为全行业通病——Claude Code、OpenCode、Copilot CLI 均出现版本升级后核心功能回退，社区信任正在被消耗。MCP 生态的可靠性（认证、工具加载、子代理继承）已成为所有工具的共性短板。与此同时，Windows 平台的体验差距、计费透明度不足、以及 Agent 行为可控性正在从"加分项"变为"必选项"。

---

## 2. 各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | 新版本发布 | 活跃度评级 |
|------|-----------|---------|-----------|-----------|
| **Claude Code** | 50 | 7 | 无 | ⭐⭐⭐⭐⭐ |
| **OpenAI Codex** | ~50 | ~10+ | ✅ rust-v0.141.0 | ⭐⭐⭐⭐⭐ |
| **Gemini CLI** | ~30 | ~10 | ✅ v0.47.0 | ⭐⭐⭐⭐ |
| **GitHub Copilot CLI** | ~10 | 1 | 无 | ⭐⭐ |
| **Kimi Code CLI** | ~5 | 1 | 无 | ⭐⭐ |
| **OpenCode** | ~30 | ~15+ | 无 | ⭐⭐⭐⭐⭐ |
| **Pi** | 30 | 21 | ✅ v0.79.7 | ⭐⭐⭐⭐⭐ |
| **Qwen Code** | ~15 | ~15 | ✅ v0.18.3-nightly | ⭐⭐⭐⭐ |
| **CodeWhale** | 38 | 28 | ✅ v0.8.62（更名） | ⭐⭐⭐⭐⭐ |

> **观察：** Claude Code、Codex、OpenCode、Pi、CodeWhale 五款工具贡献了今日绝大部分社区活动。Copilot CLI 和 Kimi Code CLI 活跃度相对较低，但前者受 MCP 生态问题拖累，后者则处于快速追赶阶段。

---

## 3. 共同关注的功能方向

### 🔌 MCP 生态可靠性（全工具共性问题）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | 内置 MCP 自动注入失败、401 报错（#69324） |
| Copilot CLI | OAuth 认证后凭证丢失（#3838）、子代理无法继承 MCP 工具（#3812）、SDK 模式 MCP 服务器不启动（#3850） |
| Kimi Code CLI | MCP 配置上手门槛过高（#2460） |
| OpenCode | MCP 工具参数序列化错误、进度指示缺失 |
| Qwen Code | MCP OAuth `expires_in=0` 处理缺陷 |

**结论：** MCP 已成为 AI CLI 工具的事实标准扩展协议，但认证流程、工具加载、子代理继承、参数序列化四个层面的可靠性问题在所有工具中普遍存在，是生态级短板。

### 🤖 Agent 行为可控性与安全

| 工具 | 具体表现 |
|------|---------|
| Gemini CLI | 子 Agent 挂起（#21409）、误报成功（#22323）、破坏性操作风险（#22672） |
| CodeWhale | Agent 自问自答循环、越权修改（#3275） |
| OpenCode | Deepseek Token 过度消耗（#32911） |
| Claude Code | 静默清理 transcript 无警告（#59248） |

### 🖥️ Windows 平台体验

| 工具 | 具体表现 |
|------|---------|
| Codex | WSL 路径序列化失败、Computer Use 崩溃、任务栏图标缺失（6+ 条 Issue） |
| Copilot CLI | WSL2 CPU 215% 空转、TUI 冻结（#3700） |
| Kimi Code CLI | Windows + Git Bash 扩展解压失败（#2462） |
| Qwen Code | Windows 路径展开、会话列表异常 |
| CodeWhale | Windows TUI 冻结（crossterm 轮询层） |

### 💰 计费透明度与成本控制

| 工具 | 具体表现 |
|------|---------|
| Codex | GPT-5.5 速率限制消耗暴涨 10-20 倍（#28879） |
| OpenCode | Deepseek API 过度计费（#32911） |
| Qwen Code | 单次 3000 万 Token 消耗，用量统计需求强烈（#4479） |

### 🔄 版本升级回归问题

| 工具 | 具体表现 |
|------|---------|
| Claude Code | v2.1.181 API 无响应、v2.1.178 团队管理工具消失 |
| OpenCode | v1.14.50 musl 兼容性断裂、v1.17.8 TUI 输入延迟 |
| Copilot CLI | WSL2 1.0.60 CPU 空转回归 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线差异 | 独特优势 |
|------|---------|---------|-------------|---------|
| **Claude Code** | 企业级多 Agent 协作平台 | 企业开发团队、复杂项目管理 | 原生 TeamCreate/TeamDelete 工具、Skill 生态、桌面端 + CLI 双模 | 最完善的 Skill 系统、最强的多 Agent 协作能力 |
| **OpenAI Codex** | 安全远程执行基础设施 | 需要跨设备/云端执行任务的开发者 | Rust 实现、Noise 端到端加密中继、App-Server/Exec-Server 分离架构 | 最领先的远程执行安全架构、跨平台原生环境保留 |
| **Gemini CLI** | 深度代码库智能分析 | 大型代码库维护者、代码审查场景 | AST 感知文件读取、Auto Memory 自动记忆、子 Agent 编排 | 最深入的代码库理解能力（AST 方向）、Google 模型生态集成 |
| **GitHub Copilot CLI** | GitHub 生态原生 CLI 体验 | GitHub 重度用户、已有 Copilot 订阅者 | 与 GitHub 平台深度集成、沙箱隔离、Plan Review 工作流 | 最无缝的 GitHub 生态集成、BYOK 企业模型支持 |
| **Kimi Code CLI** | 中国市场友好的 AI CLI | 中国大陆及亚太开发者 | 代理环境一等公民、CJK 优化、国内模型生态 | 最佳的中国大陆网络环境适配、本地化体验 |
| **OpenCode** | 开源可定制的 Agent 平台 | 开源贡献者、需要深度定制的技术团队 | 插件生态、provider.models() hook、/goal 目标管理、多认证配置 | 最灵活的插件/Provider 系统、开源社区驱动 |
| **Pi** | 终端原生 TUI 体验 | 终端重度用户、多模型切换者 | 自动主题、多会话 TUI 切换、Warp/JetBrains 终端适配 | 最佳的终端 UI 体验、最广泛的终端兼容性 |
| **Qwen Code** | 通义模型生态 CLI | 阿里云/通义用户、国内企业 | 多渠道适配器（Telegram/微信/钉钉/飞书）、cron 定时任务、QQ Bot | 最丰富的国内 IM 渠道集成、企业级定时任务 |
| **CodeWhale** | Agent 编排平台（转型中） | 需要工作空间管理的团队用户 | Rust 核心、Workrooms 持久化容器、WhaleFlow 异步执行器 | 从 TUI 工具向 Agent 编排平台转型的最激进路线 |

---

## 5. 社区热度与成熟度

### 热度排行（综合 Issue + PR + 互动量）

| 排名 | 工具 | 热度信号 | 成熟度评估 |
|------|------|---------|-----------|
| 1 | **Claude Code** | 50 Issue + 7 PR，多个高赞回归 bug | 高成熟度，但回归问题正在消耗信任 |
| 2 | **CodeWhale** | 38 Issue + 28 PR，品牌更名期 | 快速迭代期，稳定性是最大短板 |
| 3 | **OpenCode** | ~30 Issue + 15+ PR，高票功能请求积压 | 中等成熟度，新功能与稳定性双线并进 |
| 4 | **OpenAI Codex** | ~50 Issue + 10+ PR，正式版发布 | 中高成熟度，远程执行架构领先 |
| 5 | **Pi** | 30 Issue + 21 PR，版本发布 | 高成熟度，TUI 体验标杆 |
| 6 | **Gemini CLI** | ~30 Issue + 10 PR，版本发布 | 中等成熟度，Auto Memory 安全问题是隐患 |
| 7 | **Qwen Code** | ~15 Issue + 15 PR，nightly 发布 | 快速成长期，贡献者活跃 |
| 8 | **GitHub Copilot CLI** | ~10 Issue + 1 PR | 中等成熟度，MCP 生态和 Windows 体验拖后腿 |
| 9 | **Kimi Code CLI** | ~5 Issue + 1 PR | 早期阶段，社区规模较小但方向明确 |

### 迭代速度信号

- **最快迭代：** CodeWhale（28 PR）、Pi（21 PR）、Qwen Code（15 PR 且单人贡献者 tt-a1i 提交 10+ bug fix）
- **最稳定发布：** Codex（正式版 + alpha 预发布节奏清晰）、Gemini CLI（v0.47.0 常规发布）
- **回归最多：** Claude Code、OpenCode（版本升级频繁引入新 bug）

---

## 6. 值得关注的趋势信号

### 趋势一：Agent 可控性正从"加分项"变为"必选项"

CodeWhale 的 scope_discipline 规则（#3290）、Gemini CLI 的破坏性操作防护（#22672）、Claude Code 的 transcript 数据丢失（#59248）——**社区对 AI Agent 的信任正在从"默认信任"转向"验证后信任"**。对开发者而言，选择工具时应优先评估其权限模型、操作审批机制和行为约束能力。

### 趋势二：MCP 生态已进入"可靠性攻坚期"

所有主流工具都在 MCP 层面遭遇认证、加载、继承、序列化等问题。**MCP 的协议标准可能很快需要针对这些共性问题进行修订**，工具厂商也将被迫在 MCP 连接健壮性上投入更多工程资源。开发者应预期短期内 MCP 体验仍会有波动。

### 趋势三：远程执行正在成为差异化竞争焦点

Codex 的 Noise 加密中继、CodeWhale 的 Workrooms、OpenCode 的 /goal 目标管理——**AI CLI 正在从"本地编码助手"向"分布式 Agent 执行平台"演进**。远程执行的安全性、会话持久化和跨平台一致性将是未来 6-12 个月的核心竞争维度。

### 趋势四：Windows 平台体验差距是全行业短板

Codex（6+ 条 Windows Issue）、Copilot CLI、Kimi Code CLI、CodeWhale——**Windows 用户的体验普遍落后于 macOS/Linux 用户 1-2 个身位**。随着 Windows 开发者群体在 AI CLI 用户中的占比持续提升，这一差距将成为工具厂商的优先修复方向。

### 趋势五：计费透明度将影响用户留存

Codex 的 10-20 倍 Token 消耗暴涨、OpenCode 的 Deepseek 过度计费、Qwen Code 的 3000 万 Token 单次消耗——**当 AI CLI 从"尝鲜"走向"日常使用"，成本可控性将直接影响用户留存**。提供实时用量追踪、预算预警和模型智能路由（如 OpenCode #8456 的自动切换模型需求）的工具将获得竞争优势。

---

> **总结建议：** 当前 AI CLI 生态呈现"功能快速演进、可靠性普遍不足"的特征。技术决策者选型时应根据团队核心需求（远程执行选 Codex、多 Agent 协作选 Claude Code、终端体验选 Pi、开源定制选 OpenCode、国内生态选 Qwen Code/Kimi），同时关注各工具的回归修复节奏和 MCP 生态成熟度。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-06-19 | 仓库：anthropics/skills**

---

## 1. 热门 Skills 排行（Pull Requests）

| # | PR | 核心功能 | 状态 | 关注点 |
|---|-----|---------|------|--------|
| 1 | **#514** — document-typography | AI生成文档的排版质量控制（孤行、寡行、编号错位） | 🟢 OPEN | 解决Claude生成文档的**普遍性排版痛点**，每个用户都会遇到 |
| 2 | **#486** — ODT skill | OpenDocument格式（.ods/.odt）的创建、填充、解析与HTML转换 | 🟢 OPEN | 覆盖LibreOffice/ISO标准文档工作流，填补PDF/DOCX之外的开源格式空白 |
| 3 | **#1298** — run_eval.py recall=0% 修复 | 修复eval脚本永远报告0%召回率的致命Bug | 🟢 OPEN | 影响**整个skill-creator优化循环**的信号可靠性，10+用户复现 |
| 4 | **#181** — SAP-RPT-1-OSS predictor | SAP开源表格预测模型，用于业务数据分析 | 🟢 OPEN | 企业级ERP数据与AI预测的结合，场景垂直 |
| 5 | **#568** — ServiceNow platform skill | 覆盖ITSM/ITOM/ITAM/FSM/SecOps等全平台能力 | 🟢 OPEN | 企业IT服务管理大盘，试图成为ServiceNow的"全能助手" |
| 6 | **#723** — testing-patterns | 全套测试模式：单元测试、React组件测试、Testing Trophy模型 | 🟢 OPEN | 开发者刚需，从理念到实践的测试指南 |
| 7 | **#444** — AURELION suite | 四件套认知+记忆框架（kernel/advisor/agent/memory） | 🟢 OPEN | 结构化思维与记忆管理的完整生态 |
| 8 | **#335** — masonry-generate-image-videos | 图像与视频生成（Imagen 3.0 / Veo 3.1） | 🟢 OPEN | 多模态生成能力集成 |

---

### 社区讨论热点 PR 详解

**📌 PR #514 — document-typography**
> **anthropics/skills PR #514** — 作者: PGTBoos
> **争议焦点**：功能必要性存疑，"零散词换行"等排版问题是否值得一个独立Skill？支持者认为这是**每份文档都会遭遇的基础体验问题**，应该系统解决。目前0👍，节奏缓慢。

**📌 PR #1298 — run_eval.py fix**
> **anthropics/skills PR #1298** — 作者: MartinCajiao
> **社区影响极大**：此Bug导致skill-creator的描述优化循环完全失效（10+独立复现）。依赖`run_eval.py`和`run_loop.py`的用户全部受影响，属于**基础设施级修复**，合并优先级高。

**📌 PR #723 — testing-patterns**
> **anthropics/skills PR #723** — 作者: 4444J99
> **定位清晰**：不是教"怎么装Jest"，而是教Claude采用正确的测试哲学（Testing Trophy）和测试模式。开发者社区最实用的Skill之一。

---

## 2. 社区需求趋势（来自 Issues）

按 community engagement 排序后，需求方向可提炼为以下五类：

### 🏢 企业协作与治理
| Issue | 需求 | 热度 |
|-------|------|------|
| **#228** 🗨️14 👍7 | **组织级Skill共享** — Claude.ai内团队间直接分享Skill，告别手动下载→Slack传递→手动上传的蛮荒方式 | ⭐⭐⭐ |
| **#492** 🗨️7 👍2 | **安全信任边界** — `anthropic/`命名空间被社区Skill滥用，需官方认证机制 | ⭐⭐ |

### 🛠️ Skill-creator 工具链修复（最高集中度）
| Issue | 需求 | 热度 |
|-------|------|------|
| **#556** 🗨️12 👍7 | `run_eval.py`的Skill触发率为0%，评估系统完全失效 | ⭐⭐⭐ |
| **#1169** 🗨️3 👍1 | 描述优化循环recall=0%，含斜杠命令的字面查询也无法触发 | ⭐⭐ |
| **#1061** 🗨️3 | Windows三大兼容性问题（PATHEXT/cp1252编码/select on pipes） | ⭐⭐ |
| **#202** 🗨️8 | skill-creator自身需"按照最佳实践"重构 — 文档风格vs执行风格之争 | ⭐⭐ |

### 🤖 Agent 能力增强
| Issue | 需求 | 热度 |
|-------|------|------|
| **#1329** 🗨️3 | **compact-memory** — 用符号化压缩表示Agent持久状态，节省上下文窗口 | ⭐⭐ |
| **#412** 🗨️6 | **agent-governance** — AI Agent系统的安全模式（策略执行、审计追踪、信任评分） | ⭐⭐ |
| **#16** 🗨️4 | **Skills as MCPs** — 将Skill能力暴露为MCP协议，统一AI软件接口 | ⭐ |

### 📦 平台兼容性与分发
| Issue | 需求 | 热度 |
|-------|------|------|
| **#29** 🗨️4 | **AWS Bedrock** 支持 — 官方Skills无法在Bedrock上使用 | ⭐ |
| **#189** 🗨️6 👍9 | document-skills与example-skills内容重复 → 上下文窗口浪费 | ⭐⭐ |
| **#61** 🗨️3 | Team计划遭遇Skills列表API 404 | ⭐ |

### 🔒 安全与合规
| Issue | 需求 | 热度 |
|-------|------|------|
| **#1175** 🗨️4 | **SharePoint Online** 文档场景下，SKILL.md内嵌权限逻辑的安全与上下文窗口顾虑 | ⭐ |

---

## 3. 高潜力待合并 Skills

以下PR具备**明确需求 + 技术成熟 + 社区关注**，近期落地概率较高：

| 优先级 | PR | 理由 |
|--------|-----|------|
| 🔴 **P0** | **#1298** — run_eval.py recall=0% 修复 | 基础设施Bug，阻塞所有使用skill-creator优化循环的用户，10+复现 |
| 🔴 **P0** | **#1050** — Windows subprocess+encoding修复 | 1行改动×2，解决Windows用户完全无法运行的问题 |
| 🔴 **P0** | **#539** — YAML特殊字符预检 | 防止静默解析失败，影响所有新Skill创建 |
| 🟡 **P1** | **#538** — PDF大小写引用修复 | 8处简单修正，case-sensitive系统上的必修复复 |
| 🟡 **P1** | **#541** — DOCX w:id碰撞修复 | 已有书签的文档添加修订时损坏，影响实际使用 |
| 🟡 **P1** | **#362** — UTF-8多字节字符panic修复 | 非ASCII字符用户（中文/日文/emoji）的稳定性 |
| 🟢 **P2** | **#723** — testing-patterns | 开发者刚需，内容完整，争议小 |
| 🟢 **P2** | **#509** — CONTRIBUTING.md | 解决社区健康评分25%的短板，低风险高价值 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：修复 skill-creator 工具链的可靠性（尤其是 eval 系统的 0% recall 问题），同时推动企业级 Skill 共享与安全治理机制落地。**

具体而言，社区声音呈现三层结构：
1. **🔧 工具链层**（最高频）：`run_eval.py` 的评估失效、Windows兼容性、YAML解析Bug — 这些是"让Skills能正常工作的基础"
2. **🏢 企业层**（最高赞）：组织内Skill共享、命名空间安全认证、SharePoint等企业系统集成
3. **🧠 能力层**（最活跃）：记忆管理、Agent治理、测试模式、多模态生成等扩展能力

---

*报告生成时间：2026-06-19 | 数据来源：anthropics/skills 仓库 PR #1-1298 及 Issue #1-1329*

---

# Claude Code 社区动态日报 — 2026-06-19

---

## 1. 今日速览

过去 24 小时社区活跃度较高，共 50 条 Issue 更新、7 条 PR 更新，但**无新版本发布**。最受关注的是 v2.1.181 引入的 **API 无响应回归 bug**（#69358，👍11）以及 **原生团队管理工具在 2.1.178 中消失的回归问题**（#68721）。此外，一个修复 stale issue 自动锁定工作流连续 53 天失败的 PR 今日被合并（#69470）。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

以下按热度与影响力排序，精选 10 条：

### 🔴 高优先级 Bug

| # | 标题 | 作者 | 评论 | 👍 | 摘要 |
|---|------|------|------|-----|------|
| [#69358](https://github.com/anthropics/claude-code/issues/69358) | No Response From API 2.1.181 (constantly) | vctrstrm | 2 | **11** | v2.1.181 用户持续收到 API 无响应错误，标记为 regression，是今日👍最高的 bug。 |
| [#68721](https://github.com/anthropics/claude-code/issues/68721) | 2.1.178: native TeamCreate / TeamDelete tools no longer surfaced | cjmsync | 14 | 5 | 从 2.1.177 升级到 2.1.178 后，原生团队管理工具不再暴露，影响多 agent 工作流。 |
| [#59248](https://github.com/anthropics/claude-code/issues/59248) | Silent retention cleanup deletes session transcripts with no warning | FTSBrand | 16 | 6 | 静默清理机制在无任何警告/确认/恢复选项的情况下删除会话 transcript，已标记 data-loss。 |
| [#69324](https://github.com/anthropics/claude-code/issues/69324) | Built-in design MCP auto-injected and 401s even when plugin disabled | paulforster1000 | 2 | 0 | 即使禁用 frontend-design 插件，`claude_design` MCP 仍自动注入并返回 401，每次启动弹窗报错。 |
| [#69466](https://github.com/anthropics/claude-code/issues/69466) | /config dialog non-functional — no setting changes persist | TAGC | 2 | 0 | `/config` 对话框无法保存设置，Enter 键行为异常，疑似 v2.1.181 回归。 |

### 🟡 重要功能请求

| # | 标题 | 作者 | 评论 | 👍 | 摘要 |
|---|------|------|------|-----|------|
| [#47166](https://github.com/anthropics/claude-code/issues/47166) | JetBrains need some love — a real Claude AI Assist interface plugin | dmxt | **25** | 1 | 要求为 JetBrains IDE 提供一等公民的 Claude Code 插件（而非仅 VS Code），评论数最多。 |
| [#35319](https://github.com/anthropics/claude-code/issues/35319) | Skill invocation tracking and usage analytics | jainmilind | 5 | **29** | 企业用户需要 Skill 调用追踪和使用分析，👍数最高的功能请求。 |
| [#58429](https://github.com/anthropics/claude-code/issues/58429) | Built-in option to speak Claude's responses aloud (A11y) | DCA11Y | 13 | 3 | 无障碍功能请求：让 Claude Code 桌面端支持语音朗读回复。 |

### 🟠 值得关注

| # | 标题 | 作者 | 评论 | 👍 | 摘要 |
|---|------|------|------|-----|------|
| [#59736](https://github.com/anthropics/claude-code/issues/59736) | Desktop 3p Code sessions disappear from UI after restart | jianminYa | 10 | 1 | 桌面端重启后第三方 Code 会话从 UI 消失，但 JSONL transcript 仍在磁盘上。 |
| [#68514](https://github.com/anthropics/claude-code/issues/68514) | Checksum mismatch error for rootfs.img.zst on macOS Sequoia ARM64 | danielfreeman-ui | 10 | 1 | macOS Sequoia 15.7.7 ARM64 上 rootfs 镜像校验和错误，已标记 invalid。 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 说明 |
|---|------|------|------|------|
| [#69470](https://github.com/anthropics/claude-code/pull/69470) | Fix lock-closed-issues workflow: use search API instead of offset pagination | ashwin-ant | ✅ **已合并** | 修复 stale issue 自动锁定工作流连续 53 天（自 4/27 起）失败的问题，改用 GitHub Search API 替代偏移分页。 |
| [#69226](https://github.com/anthropics/claude-code/pull/69226) | Update frontend-design skill | williamqian12 | ✅ **已合并** | 改进 frontend-design skill，插件版本升至 1.1.0。 |
| [#68673](https://github.com/anthropics/claude-code/pull/68673) | fix(scripts): break pagination when page is not full, not only when empty | AZERDSQ131 | 🟢 Open | 修复脚本分页逻辑：页面不满时也应终止翻页，而非仅在空页时终止。 |
| [#23972](https://github.com/anthropics/claude-code/pull/23972) | fix: hookify Python 3.8 compat and cwd-independent rule loading | clowerweb | 🟢 Open | 修复 hookify 插件的 Python 3.8 兼容性及规则加载路径独立性问题。 |
| [#45553](https://github.com/anthropics/claude-code/pull/45553) | resolve duplicate IPs | johnkohler00 | 🟢 Open | 解决重复 IP 问题。 |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | add the missing source to claude code | tornikeo | 🟢 Open | 补充缺失的 source 文件。 |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: open source claude code ✨ | gameroman | 🟢 Open | 开源相关 PR，关闭了多个相关 issue。 |

---

## 5. 功能需求趋势

从全部 50 条 Issue 中提炼出社区最关注的五大方向：

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **IDE 集成扩展** | #47166 (JetBrains 插件) | 25 条评论，社区呼声最高 |
| **可观测性与分析** | #35319 (Skill 调用追踪) | 👍29，企业用户刚需 |
| **无障碍 (A11y)** | #58429 (语音朗读) | 13 条评论，持续讨论 |
| **TUI/桌面端体验** | #44423, #52160, #43216, #60786 | 多个 issue 涉及颜色主题、窗口状态可视化和会话区分 |
| **会话管理与恢复** | #59248, #59736, #60594 | 数据丢失、会话消失、compact 后无法恢复等痛点集中 |

---

## 6. 开发者关注点

**当前最突出的痛点：**

1. **回归问题频发** — v2.1.178 丢失团队管理工具、v2.1.181 出现 API 无响应和 `/config` 对话框损坏，版本升级引入的回归正在消耗社区信任。
2. **数据丢失风险** — 静默清理 transcript（#59248）和桌面端会话消失（#59736）让开发者对工作数据安全感到担忧，要求增加确认机制和恢复选项。
3. **IDE 生态不均衡** — VS Code 和 Cursor 获得大量关注，但 JetBrains 用户感到被忽视，社区要求官方提供对等支持。
4. **企业可观测性缺口** — 随着团队级功能（agent teams、skills）的推广，企业用户迫切需要调用追踪、使用分析和审计能力。
5. **MCP 生态稳定性** — 内置 MCP 自动注入失败（#69324）、stdio MCP 工具因超时被静默丢弃（#60224），MCP 连接的健壮性仍需加强。

---

> 📌 **编辑建议**：今日最值得立即关注的是 #69358（API 无响应）和 #68721（团队管理工具回归），两者均为高影响回归 bug，建议优先排查。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-06-19

---

## 1. 今日速览

今日 Codex 迎来 **`rust-v0.141.0`** 正式版发布，核心亮点是远程执行器升级为认证端到端加密的 Noise 中继通道，并实现跨平台远程执行的工作目录与 Shell 原生保留。社区 Issue 方面，**手机验证码 Bug**（#20161）以 201 条评论、125 赞成为最热话题；Windows 端用户集中反馈 Computer Use 插件崩溃、任务栏图标缺失等问题。PR 方向上，团队正密集推进远程执行优化、Token 预算耗尽自动中止、Skill 描述截断修复等工程改进。

---

## 2. 版本发布

### 🚀 rust-v0.141.0（正式版）

- **Noise 加密中继通道**：远程执行器（Remote Executors）现在使用经过认证的端到端加密 Noise 中继信道通信，大幅提升跨网络执行任务的安全性。（[#26242](https://github.com/openai/codex/pull/26242)、[#26245](https://github.com/openai/codex/pull/26245)）
- **跨平台远程执行保留原生环境**：跨平台执行时现在保留执行器原生的工作目录（working directory）和 Shell 环境，包括 App-Server 与 Exec-Server 边界上的文件系统权限路径映射。

此前已有 v0.142.0 的 alpha 1/2/3 三个预发布版本迭代中，预计正式版即将推出更丰富的远程执行能力。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 说明 | 社区反应 |
|---|-------|------|----------|
| 1 | **#20161** [[CLOSED]](https://github.com/openai/codex/issues/20161) 手机验证码无法使用 | 用户在新设备通过 SSO 登录时被强制要求输入手机号验证，即便账户未绑定电话。这是近两个月持续发酵的认证问题。 | 🔥 **201 评论 / 125 赞**，社区关注度最高 |
| 2 | **#2558** [[CLOSED]](https://github.com/openai/codex/issues/2558) Zellij 下输出截断 | 在 Zellij 终端复用器中运行 Codex 客户端时，输出历史显示不正确、滚动异常。 | 66 评论 / 114 赞，终端体验类热门问题 |
| 3 | **#28879** [[OPEN]](https://github.com/openai/codex/issues/28879) GPT-5.5 速率限制消耗暴涨 10-20 倍 | Plus 用户反馈自 6 月 16 日起单次 Token 消耗比例暴增，5 小时预算仅支撑 2-3 次对话（此前 20+ 次）。 | 5 评论 / 2 赞，**影响用户范围广，需官方回应** |
| 4 | **#28422** [[OPEN]](https://github.com/openai/codex/issues/28422) image_gen 0.140.0 回归：有效图像未保存 | 0.140.0 版本中当图像状态仍为 `generating` 时合法生成的图像未被正确保存。 | 11 评论 / 8 赞，**0.141.0 是否修复待确认** |
| 5 | **#28988** [[OPEN]](https://github.com/openai/codex/issues/28988) macOS 26.614.11602 全权限模式反复要求授权 | 更新到最新版后"Full Access"模式持续弹出权限请求。 | 6 评论 / 4 赞，macOS 权限类问题 |
| 6 | **#16815** [[OPEN]](https://github.com/openai/codex/issues/16815) Windows WSL Agent 模式路径序列化失败 | Windows 端切换 Agent Environment 到 WSL 时因 `AbsolutePathBuf` 反序列化缺少 base path 报错。 | 9 评论 / 7 赞，**Windows 用户高频痛点** |
| 7 | **#28592** [[OPEN]](https://github.com/openai/codex/issues/28592) Remote Compact 任务致命错误 | WSL 环境下运行远程压缩任务时遇到 `expected exactly one compaction output item, got 0` 致命错误。 | 5 评论 / 1 赞，**远程功能稳定性值得关注** |
| 8 | **#28241** [[OPEN]](https://github.com/openai/codex/issues/28241) Turn-diff 树引用破坏 libgit2 Git 客户端 | Codex 会话后生成的 Git 引用损坏了基于 libgit2 的 Git 客户端（如 Cargo、jgit 等）。 | 7 评论 / 1 赞，**与本次 Noise 中继安全改进相关** |
| 9 | **#22857** [[OPEN]](https://github.com/openai/codex/issues/22857) 远程 SSH 连接的密钥认证增强 | 用户希望 iOS/Desktop App 通过 SSH 远程控制 CLI 主机时使用密钥认证而非密码，提升安全性。 | 9 评论 / 10 赞，**远程执行生态核心需求** |
| 10 | **#28997** [[OPEN]](https://github.com/openai/codex/issues/28997) logs_2.sqlite-wal 无限膨胀至数十 GB | CLI 的 SQLite WAL 文件未正常回收，持续增长至数十 GB 磁盘占用。 | 2 评论 / 0 赞，**存储泄漏严重但关注者尚少** |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 功能/修复说明 |
|---|-----|------|---------------|
| 1 | **#28458** [[CLOSED]](https://github.com/openai/codex/pull/28458) Use turn environments as shell authority | ✅ 已合并 | 以 `TurnEnvironment` 作为 Shell 选择的唯一权威来源，消除 SessionServices.user_shell 的二次回退问题。 |
| 2 | **#28470** [[CLOSED]](https://github.com/openai/codex/pull/28470) Validate unified exec shells for remote environments | ✅ 已合并 | 防止在主机端解析 remote 执行 shell 参数导致的环境不一致，确保 remote 环境路径正确。 |
| 3 | **#28814** [[CLOSED]](https://github.com/openai/codex/pull/28814) Assign response item IDs when recording history | ✅ 已合并 | 客户端创建的响应项在写入历史时自动分配 ID，确保 rollout 持久化和 resume 后的身份一致性。 |
| 4 | **#28987** [[CLOSED]](https://github.com/openai/codex/pull/28987) extension-api: expose thread manager to contributors | ✅ 已合并 | 将线程管理器以弱引用方式附加到线程作用域的扩展数据中，方便扩展贡献者访问。 |
| 5 | **#28707** [[OPEN]](https://github.com/openai/codex/pull/28707) abort turns when rollout budgets expire | 🔄 审核中 | 当共享 rollout 的 Token 预算耗尽时，通过 `CodexErr::TurnAborted` 自动中止当前轮次，**直接回应 #28879 的速率限制消耗问题**。 |
| 6 | **#28489** [[OPEN]](https://github.com/openai/codex/pull/28489) Add indexed web search mode | 🔄 审核中 | 新增 `web_search = "indexed"` 模式（在 disabled/cached/live 之外），为托管和独立搜索统一索引门控的 Web 访问能力。 |
| 7 | **#29006** [[OPEN]](https://github.com/openai/codex/pull/29006) Preserve skill descriptions outside model context | 🔄 审核中 | 允许 Skill 完整描述保留在元数据中（不被 1024 字符截断），仅对发送给模型的上下文片段做长度限制。 |
| 8 | **#28806** [[OPEN]](https://github.com/openai/codex/pull/28806) optimize resume and fork history | 🔄 审核中 | 基于检查点的 resume 和写时复制 fork 优化，减少冷启动时的历史重建开销。 |
| 9 | **#28996** [[OPEN]](https://github.com/openai/codex/pull/28996) Avoid duplicate ImageGen Markdown output | 🔄 审核中 | 修复 ImageGen 结果被重复渲染为 Markdown 内联内容的问题（一次生成出现 3 个结果）。**与 #28422 相关**。 |
| 10 | **#29001** [[OPEN]](https://github.com/openai/codex/pull/29001) Add workspace messages app-server API | 🔄 审核中 | 新增 `account/workspaceMessages/read` 方法，支持企业工作区消息的读取和特性开关映射。 |

---

## 5. 功能需求趋势

从今日 50 条 Issue 中提炼出社区最集中的功能方向：

| 趋势方向 | 代表 Issue | 热度 |
|----------|------------|------|
| **🔐 认证与账户安全** | #20161（手机验证）、#22857（SSH 密钥认证） | ⭐⭐⭐⭐⭐ |
| **🖥️ Windows 平台稳定性** | #16815、#28112、#28245、#28676、#28982、#28994 等 6+ 条 | ⭐⭐⭐⭐⭐ |
| **🌐 远程执行能力增强** | #22857、#26846、#28592 | ⭐⭐⭐⭐ |
| **🎨 图像生成（ImageGen）** | #28422、#28996 | ⭐⭐⭐ |
| **💰 速率限制与配额透明** | #28879、#28811 | ⭐⭐⭐ |
| **🔌 浏览器插件/Computer Use** | #21719、#24040、#25247、#28112、#28676 | ⭐⭐⭐ |
| **📝 终端/TUI 体验** | #2558（Zellij）、#20193（文件树截断） | ⭐⭐ |
| **⚡ 性能与存储** | #28997（WAL 膨胀）、#28583（签名验证高 CPU） | ⭐⭐ |

---

## 6. 开发者关注点总结

1. **Windows 平台是最大痛点集中地**：今日 50 条 Issue 中超过 1/3 来自 Windows 用户，涵盖 WSL 集成、Computer Use 插件崩溃、任务栏图标缺失、沙箱初始化失败、注册表键缺失等多个维度。Windows 端的整体体验与 macOS/Linux 差距明显。

2. **远程执行生态正在快速成熟**：v0.141.0 的 Noise 加密中继 + 原生 Shell 保留、PR 中的预算中止和 Shell 验证，表明团队正系统性构建安全可靠的远程执行基础设施。但社区对 SSH 密钥认证（#22857）和多设备远程连接（#26846）的需求仍未满足。

3. **速率限制透明度亟需改善**：#28879 反映的 Token 消耗比例突变（10-20 倍）严重影响 Plus 用户的使用预期，社区需要更清晰的配额消耗说明和实时可见的预算追踪。

4. **ImageGen 功能质量需回归测试**：#28422 和 #28996 分别指向图像未保存和重复渲染两个回归问题，说明图像生成模块在版本迭代中引入了新 Bug。

5. **存储与性能隐患被低估**：#28997 的 SQLite WAL 无限增长问题虽然目前评论少，但数十 GB 的磁盘占用对长期运行 CLI 的用户影响严重，建议团队优先排查。

---

> 📌 **编辑建议**：今日最值得跟进的三件事——① #28879 速率限制异常是否与 #28707 PR 的预算机制有关；② Windows 端 Computer Use 的多条崩溃报告是否有统一根因；③ v0.141.0 的 Noise 中继加密是否解决了 #28241 的 Git 引用损坏问题。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-19

---

## 1. 今日速览

今日 Gemini CLI 发布了 **v0.47.0** 正式版，主要涵盖后端定义尊重、依赖升级等日常维护。社区讨论集中在 **Auto Memory 安全性与质量**、**子 Agent 行为异常**（挂起、误报成功）以及 **AST 感知代码库映射** 等深度工程议题上。PR 方面，多个依赖安全升级和关键 bug 修复正在推进。

---

## 2. 版本发布

### v0.47.0 — Release

- 尊重后端定义（Respect backend def）
- 依赖包升级（OpenTelemetry 等）
- 夜间版本号推进至 v0.49.0-nightly

> 🔗 [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 👍 | 评论 | 要点 |
|---|-------|----|------|------|
| 1 | **[#21409] Generalist agent hangs** | 8 | 7 | 通用子 Agent 在简单操作（如创建文件夹）时无限挂起，用户等待超 1 小时。社区影响面大，已标记 P1。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/21409

| 2 | **[#24353] Robust component level evaluations** | 0 | 7 | 行为评估测试基础设施的 EPIC，已积累 76 个行为评估测试，覆盖 6 个 Gemini 模型版本。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/24353

| 3 | **[#22745] AST-aware file reads, search, and mapping** | 1 | 7 | 探索利用 AST 感知工具精确读取方法边界、减少 token 噪声，可能显著提升代码库导航效率。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/22745

| 4 | **[#22323] Subagent recovery after MAX_TURNS reported as GOAL success** | 2 | 6 | `codebase_investigator` 子 Agent 达到最大轮次上限后仍报告 `status: success`，掩盖了实际中断。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/22323

| 5 | **[#21968] Gemini does not use skills and sub-agents enough** | 0 | 6 | 用户反馈 Gemini 几乎不会主动调用自定义 skills 和子 Agent，即使任务高度相关。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/21968

| 6 | **[#26525] Deterministic redaction and reduce Auto Memory logging** | 0 | 5 | Auto Memory 在脱敏前已将本地对话内容送入模型上下文，存在安全隐患。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/26525

| 7 | **[#26522] Auto Memory retrying low-signal sessions indefinitely** | 0 | 5 | 低信号会话因未被标记为已处理而反复被提取 Agent 重试，浪费资源。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/26522

| 8 | **[#25166] Shell command execution gets stuck with "Waiting input"** | 3 | 4 | 简单 CLI 命令完成后，Gemini 仍显示"等待用户输入"并卡住，复现频率高。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/25166

| 9 | **[#21983] Browser subagent fails in Wayland** | 1 | 4 | Linux Wayland 环境下浏览器子 Agent 失败，影响 Linux 桌面用户。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/21983

| 10 | **[#22672] Agent should stop/discourage destructive behavior** | 1 | 3 | 模型在 git 操作中可能使用 `git reset --force` 等危险命令，社区呼吁增加安全约束。 |
> 🔗 https://github.com/google-gemini/gemini-cli/issues/22672

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 要点 |
|---|----|------|------|
| 1 | **[#28000] Fix Jupyter Notebook and JSON corruption in write_file** | OPEN | 修复 `write_file` 工具静默损坏 `.ipynb` 和 JSON 文件的关键 bug，影响 Colab/JupyterLab 用户。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/28000

| 2 | **[#27996] Decode response body using charset from Content-Type header** | OPEN | `web-fetch` 此前硬编码 UTF-8 解码，导致中文、日文等使用 GBK/ISO-8859-1 编码的页面乱码。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/27996

| 3 | **[#28013] Use function replacer in applySubstitutions to prevent $-pattern corruption** | OPEN | 修复 prompt 替换中 `$` 模式被 JavaScript 的 `String.prototype.replace` 误解析的问题。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/28013

| 4 | **[#28015] Implement Cloud Run webhook ingestion service** | OPEN | 为 Caretaker Agent 实现 Cloud Run Webhook 入口服务，支持 GitHub webhook 签名验证、Firestore 事务存储和 Pub/Sub 消息发布。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/28015

| 5 | **[#27948] Pin dependencies and enforce 14-day update cooldown** | CLOSED | 将所有直接依赖固定为精确版本，并强制 14 天自动更新冷却期，提升供应链安全。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/27948

| 6 | **[#28012] Sync footer branch name on filesystems without fs.watch events** | OPEN | 修复 WSL 挂载 Windows 驱动器（`/mnt/c/...`）和网络共享等文件系统上分支名不更新的问题。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/28012

| 7 | **[#27848] Add 'models' command to list available Gemini models** | OPEN | 新增 `gemini models` 命令，列出可用模型、上下文窗口限制和层级（Pro/Flash 等），支持 JSON 输出。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/27848

| 8 | **[#28009] Add eval:inventory CLI command and reporting logic** | OPEN | 新增 `npm run eval:inventory` 命令，扫描 `*.eval.ts` 文件并生成评估报告，提升内部评估可见性。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/28009

| 9 | **[#28016] Fix nightly release workflow for scheduled runs** | CLOSED | 修复定时夜间发布因 `internal` 环境缺少包名变量而失败的问题。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/28016

| 10 | **[#27990] Resolve macOS symlink path mismatches in tests** | OPEN | 修复 macOS 上 `/var` → `/private/var` 符号链接导致的 EditTool/WriteFileTool 测试路径不匹配。 |
> 🔗 https://github.com/google-gemini/gemini-cli/pull/27990

---

## 5. 功能需求趋势

从近期 Issues 和 PR 中提炼出以下五大方向：

### 🔒 Auto Memory 安全性与质量（最热议题）
多个高评论 Issue（#26525、#26522、#26523、#26516）集中指向 Auto Memory 功能的安全漏洞（脱敏前泄露到模型上下文）、无限重试低质量会话、以及无效 patch 处理不当。这已成为社区最紧迫的改进方向。

### 🤖 子 Agent 可靠性与行为控制
子 Agent 挂起（#21409）、误报成功（#22323）、不主动使用 skills（#21968）、浏览器 Agent 忽略配置（#22267）、无权限运行（#22093）——子 Agent 系统的稳定性和可控性是核心痛点。

### 🧠 AST 感知与代码库智能
#22745 和 #22746 探索利用 AST 工具替代传统文件读取，实现精确的方法边界定位和代码库映射，有望大幅减少 token 消耗和提升代码理解精度。

### 🌐 国际化与编码支持
#27996 修复非 UTF-8 编码页面乱码、#22466 修复 `\n` 转义行为——社区对多语言和特殊字符场景的关注度上升。

### 🛡️ 安全行为约束
#26525（Auto Memory 日志脱敏）和 #22672（防止破坏性操作）反映了社区对 AI Agent 安全边界的强烈诉求。

---

## 6. 开发者关注点总结

| 痛点 | 具体表现 | 影响范围 |
|------|----------|----------|
| **子 Agent 不稳定** | 挂起、误报成功、不服从配置 | 所有使用 Agent 模式的用户 |
| **Auto Memory 安全隐患** | 敏感内容在脱敏前已进入模型上下文 | 所有启用 Auto Memory 的用户 |
| **Shell 命令执行异常** | 命令完成后仍显示"等待输入" | 频繁使用 CLI 交互的用户 |
| **文件写入损坏** | `.ipynb` 和 JSON 文件被静默损坏 | Jupyter/数据科学用户 |
| **中文/多语言编码问题** | web-fetch 硬编码 UTF-8 导致乱码 | 中文、日文等用户 |
| **破坏性操作风险** | 模型可能使用 `git reset --force` 等危险命令 | 所有在真实项目中使用 CLI 的用户 |
| **WSL/跨平台兼容性** | 分支名不更新、路径符号链接不匹配 | WSL 和 macOS 用户 |

---

> 📊 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 报告生成时间：2026-06-19

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区日报 — 2026-06-19

---

## 1. 今日速览

过去 24 小时社区围绕 **MCP 认证/工具加载缺陷** 和 **沙箱隔离文档与实际不符** 展开密集讨论；一个针对 Plan Review 菜单兼容性回退的 PR 已提交，但整体无新版本发布。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|-----------|----------|
| [#3838](https://github.com/github/copilot-cli/issues/3838) | Drive MCP OAuth 认证后仍报 missing credential | 认证流程成功但请求未携带凭证，影响所有 Drive MCP 用户 | 7 条评论，活跃排查中 |
| [#3839](https://github.com/github/copilot-cli/issues/3839) | Ollama Cloud 不支持 custom_tool_call 导致 400 | BYOK 用户无法在 Fleet Mode 下使用 Ollama Cloud | 👍 7，关注度最高 |
| [#3861](https://github.com/github/copilot-cli/issues/3861) | 沙箱文档描述与实际行为不符 | 文档声称的 per-host 过滤、跨平台隔离均未实现 | 新 Issue，待官方回应 |
| [#3700](https://github.com/github/copilot-cli/issues/3700) | WSL2 1.0.60 回归：CPU 215% 空转、TUI 冻结 | 高严重性，每次新会话必现 | 👍 2，2 条评论 |
| [#3812](https://github.com/github/copilot-cli/issues/3812) | 子代理无法访问 MCP 工具 | 顶层代理可用但子代理不可用，影响多代理工作流 | 已关闭，2 条评论 |
| [#3850](https://github.com/github/copilot-cli/issues/3850) | SDK/server 模式下 session.create 丢弃 mcpServers | 编程模式下 MCP 服务器永不启动 | 已关闭，1 条评论 |
| [#3859](https://github.com/github/copilot-cli/issues/3859) | Copilot Subconscious 在 memory 关闭后仍持续生成 | 后台代理无视 /memory off 设置 | 1 条评论 |
| [#3860](https://github.com/github/copilot-cli/issues/3860) | 内容排除过度拦截整个工作树 | 高严重性，连 /dev/null 和 date 二进制都被拒绝 | 已关闭，1 条评论 |
| [#3854](https://github.com/github/copilot-cli/issues/3854) | @ 文件引用自动补全失效 | 影响日常文件引用工作流 | 已关闭，1 条评论 |
| [#3518](https://github.com/github/copilot-cli/issues/3518) | 无法恢复已归档的项目会话 | 误归档后无法恢复长会话上下文 | 👍 5，需求强烈 |

---

## 4. 重要 PR 进展

| # | 标题 | 内容 |
|---|------|------|
| [#3847](https://github.com/github/copilot-cli/pull/3847) | Plan Review 兼容性回退设计 + 测试向量 | 为严格 OpenAI 兼容后端添加 JSON-first 解析、YAML 和列表启发式回退策略 |

---

## 5. 功能需求趋势

从今日 Issues 提炼出社区最关注的方向：

1. **MCP 生态完善** — 认证流程、子代理工具继承、SDK 模式服务器启动、disabled 标志失效
2. **沙箱与权限** — 文档对齐、会话级目录授权、内容排除策略优化
3. **多模型/后端兼容** — Ollama Cloud、企业自定义模型、Plan Review 兼容性回退
4. **会话管理** — 归档恢复、会话毒化修复、慢速 /resume 选择器问题
5. **平台体验** — WSL2 性能回归、Windows 快捷键、滚动与 TUI 渲染

---

## 6. 开发者关注点

- **MCP 工具链可靠性** 是最高频痛点，涉及认证、加载、子代理继承、SDK 模式等多个层面
- **文档与实际行为不一致** 引发信任危机，沙箱功能尤为突出
- **BYOK/第三方后端兼容性** 需求增长，Ollama Cloud 和严格 OpenAI 兼容后端用户遇到阻断性问题
- **WSL2 性能回归** 仍未解决，影响 Windows 开发者日常使用
- **会话生命周期管理**（归档/恢复、毒化）需要更健壮的机制

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-19

---

## 1. 今日速览

过去24小时内社区最亮眼的事件是 **PR #2461 已提交，直接修复 #2455 中 FetchURL 不走系统代理导致墙内无法访问外网** 的痛点；同期一个 **Windows + Git Bash 下 VS Code 扩展解压失败** 的新 Bug 也被报告；此外一条关于 MCP/插件/子技能配置体验过难的反馈 Issue 当日即被关闭，说明团队对体验问题已有跟进。

---

## 2. 版本发布

过去24小时内无新版本发布，本节省略。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 为什么重要 | 社区反应 |
|---|------|------|------------|----------|
| [#2455](https://github.com/MoonshotAI/kimi-cli/issues/2455) | FetchURL 未读取系统代理，墙内无法访问外网 | OPEN | 直接影响中国大陆及企业代理环境下 WebSearch/FetchURL 的可用性，与 curl 行为不一致，属于网络层核心缺陷 | 已有 2 条评论，👍 0；已有 PR #2461 跟进修复 |
| [#2462](https://github.com/MoonshotAI/kimi-cli/issues/2462) | Windows + Git Bash：VS Code 扩展无法解压 bundled CLI（tar 不认 zip） | OPEN | 影响 Windows 开发者开箱即用体验，属于安装/引导流程阻断性问题 | 暂无评论，👍 0；刚提交，待社区复现 |
| [#2460](https://github.com/MoonshotAI/kimi-cli/issues/2460) | 反馈：MCP 服务器、插件、子技能的配置上手门槛过高 | CLOSED | 反映多组件编排（cua-driver + MCP + 插件 + sub-skills）的配置 UX 是高频痛点 | 当日关闭，团队可能已有改进计划或转入内部 backlog |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 修复/功能内容 |
|---|------|------|---------------|
| [#2461](https://github.com/MoonshotAI/kimi-cli/pull/2461) | fix(net): honour system proxy env vars in aiohttp sessions | OPEN | 让所有出站 HTTP 请求（FetchURL、WebSearch）读取 `HTTP_PROXY` / `HTTPS_PROXY` 环境变量，修复 #2455 中代理环境下网络不通的问题 |

---

## 5. 功能需求趋势

从近期 Issues 可提炼出以下社区关注方向：

1. **网络代理与墙内可用性** — FetchURL / WebSearch 在代理环境下的兼容性是刚需，尤其中国大陆用户。
2. **IDE 集成体验** — VS Code 扩展在 Windows + Git Bash 等非标准 shell 下的安装/解压流程需要更健壮的跨平台处理。
3. **配置与上手体验** — MCP 服务器、插件、子技能的多层配置被多次提及门槛过高，社区期待更简化的 onboarding 流程（向导、模板、一键配置等）。

---

## 6. 开发者关注点

- **代理环境一等公民**：开发者期望 CLI 与系统 curl 行为一致，自动读取系统代理设置，而非手动配置。
- **Windows 生态兼容性**：Git Bash / MSYS2 等环境在 Windows 开发者中广泛使用，扩展安装流程需覆盖这些场景。
- **配置复杂度**：随着 MCP、插件、子技能生态丰富，"配好才能用" 的摩擦正在成为留存障碍，社区希望看到更友好的配置引导或声明式配置方案。

---

> 数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 日报生成时间：2026-06-19

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-19

---

## 1. 今日速览

今日社区活跃度较高，**无新版本发布**。焦点集中在三个方面：**v1.17.8 TUI 输入延迟**和**文件索引不刷新**等影响日常使用的回归 bug 集中爆发；多个自动化清理 PR 批量合入，涵盖 Windows 路径兼容、MCP 工具参数序列化、文件监控容错等修复；社区对 **多认证配置**、**按任务自动切换模型**、**原生目标管理**等高级功能的需求持续高涨。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

以下按热度与影响力排序，共精选 10 条：

### 🔴 高优先级 Bug

| # | 标题 | 核心问题 | 社区反应 |
|---|------|----------|----------|
| [#27589](https://github.com/anomalyco/opencode/issues/27589) | **TUI fails on Alpine Linux (musl) in 1.14.50** | `getcontext` 符号缺失导致 OpenTUI 渲染库初始化失败，1.14.48 正常、1.14.50 起回归，影响所有 Alpine/musl 用户 | 35 评论 / 12 👍，讨论最热烈，涉及底层 CGO/动态链接问题 |
| [#32859](https://github.com/anomalyco/opencode/issues/32859) | **v1.17.8 TUI 输入严重延迟** | macOS Apple Silicon 上即使清空所有插件和 MCP，输入仍需 5-10 秒才响应，跨 iTerm2/Ghostty/WezTerm 复现 | 3 评论，新发即引发关注，疑似 v1.17.x 回归 |
| [#32911](https://github.com/anomalyco/opencode/issues/32911) | **Deepseek API 过度消耗 Token** | v1.17 版本中存在 bug 导致 Deepseek API 被过度计费，Reddit 上也有用户确认 | 2 评论，涉及用户资金损失，紧急程度高 |
| [#30877](https://github.com/anomalyco/opencode/issues/30877) | **v1.16.0 TUI sidebar "Modified Files" 完全消失** | 路径截断修复的副作用导致右侧边栏修改文件列表整个不渲染 | 5 评论 / 8 👍，影响代码审查工作流 |
| [#32747](https://github.com/anomalyco/opencode/issues/32747) | **`@` 文件提及不包含启动后新建的文件** | 文件索引在启动时快照后不更新，新文件必须重启才能被 `@` 搜索到 | 2 评论 / 1 👍，影响日常编码效率 |

### 🟡 回归与兼容性问题

| # | 标题 | 核心问题 | 社区反应 |
|---|------|----------|----------|
| [#25630](https://github.com/anomalyco/opencode/issues/25630) | **Plugin provider.models() hook 无法填充自定义 Provider 模型** | PR #25167（v1.14.x）后，自定义 provider 的模型不再通过插件 hook 注册 | 12 评论 / 3 👍，影响插件生态 |
| [#16610](https://github.com/anomalyco/opencode/issues/16610) | **inotify 实例耗尽时 OpenCode 启动挂起** | Linux 上 `.git` 目录触发大量 inotify watch，`max_user_instances` 不足时整个 TUI 卡死 | 11 评论 / 7 👍，已有 PR 修复中 |

### 🟢 高需求功能

| # | 标题 | 核心需求 | 社区反应 |
|---|------|----------|----------|
| [#5391](https://github.com/anomalyco/opencode/issues/5391) | **多认证配置 per Provider** | 同一 provider 下支持多个 API Key/账户切换（如个人/工作） | 11 评论 / **31 👍**，长期高票需求 |
| [#8456](https://github.com/anomalyco/opencode/issues/8456) | **按任务类型自动切换模型** | 类似 Cursor 的模型路由：代码生成用强模型、简单编辑用轻量模型 | 9 评论 / **37 👍**，今日最高赞功能请求 |
| [#450](https://github.com/anomalyco/opencode/issues/450) | **UI 支持 reasoning_effort 参数** | OpenAI/Gemini/DeepSeek 等多模型已支持推理强度调节，OpenCode UI 尚未暴露 | 14 评论 / **26 👍**，长期未解决 |

---

## 4. 重要 PR 进展

以下精选 10 个 PR，按重要性排序：

### 新功能

| # | 标题 | 内容摘要 |
|---|------|----------|
| [#32924](https://github.com/anomalyco/opencode/pull/32924) | **feat: add native /goal foundation** | 新增原生 `/goal` 命令基础架构，包含工作区级目标状态机、持久化和事件系统，为自主目标追踪铺路 |
| [#32743](https://github.com/anomalyco/opencode/pull/32743) | **feat(session): native per-session goals with /goal** | 另一独立实现的会话级目标管理，支持 active/paused/completed 状态，与 #32924 形成竞争方案 |
| [#32914](https://github.com/anomalyco/opencode/pull/32914) | **docs: add GMI Cloud provider** | 新增 GMI Cloud 到 Provider 目录文档，扩展支持的模型供应商 |

### 关键 Bug 修复

| # | 标题 | 内容摘要 |
|---|------|----------|
| [#32854](https://github.com/anomalyco/opencode/pull/32854) | **fix(core): tolerate file watcher startup failures** | 文件监控初始化失败不再导致 TUI 崩溃/挂起，降级为 warning 日志，修复 [#16610](https://github.com/anomalyco/opencode/issues/16610) |
| [#32922](https://github.com/anomalyco/opencode/pull/32922) | **fix: /unshare 不移除 TUI 中的分享链接** | 修复取消分享后 UI 状态不同步的问题，确保本地 sync store 立即反映分享状态变化 |
| [#32919](https://github.com/anomalyco/opencode/pull/32922) | **fix: type safety and code hygiene improvements** | 修复 Copilot chat chunk 类型安全，提取具名 schema，移除 `MUST FIX` TODO |
| [#28246](https://github.com/anomalyco/opencode/pull/28246) | **fix: pass onprogress to callTool** | MCP 工具调用传递 `onprogress` 回调以设置 `progressToken`，防止长时间运行的 MCP 工具超时 |
| [#28251](https://github.com/anomalyco/opencode/pull/28251) | **fix: normalize forward slashes to backslashes for Windows** | Windows 路径匹配修复，前端统一将正斜杠转为反斜杠 |
| [#28250](https://github.com/anomalyco/opencode/pull/28250) | **fix(config): guard env-var JSON parsing** | 环境变量 JSON 解析增加安全防护，`OPENCODE_PERMISSION` 解析失败时严格报错而非静默放行 |
| [#28161](https://github.com/anomalyco/opencode/pull/28161) | **fix(tool): prevent crash when plugin tool has invalid args** | 插件注册工具时若 `parameters` 字段缺失或格式错误，不再崩溃 |

---

## 5. 功能需求趋势

从今日所有 Issues 中提炼出社区最关注的五大方向：

### 📊 功能需求热度排行

| 排名 | 方向 | 代表 Issues | 热度指标 |
|------|------|-------------|----------|
| 1 | **模型管理与智能路由** | [#8456](https://github.com/anomalyco/opencode/issues/8456) 自动切换模型、[#5391](https://github.com/anomalyco/opencode/issues/5391) 多认证配置、[#450](https://github.com/anomalyco/opencode/issues/450) reasoning_effort、[#11787](https://github.com/anomalyco/opencode/issues/11787) 新模型支持 | 37👍 / 31👍 / 26👍 / 多议题 |
| 2 | **TUI 稳定性与性能** | [#32859](https://github.com/anomalyco/opencode/issues/32859) 输入延迟、[#30877](https://github.com/anomalyco/opencode/issues/30877) sidebar 消失、[#27589](https://github.com/anomalyco/opencode/issues/27589) musl 兼容性 | 高频回归报告 |
| 3 | **文件系统与索引** | [#32747](https://github.com/anomalyco/opencode/issues/32747) @提及不刷新、[#32915](https://github.com/anomalyco/opencode/issues/32915) Desktop 文件索引不刷新、[#16610](https://github.com/anomalyco/opencode/issues/16610) inotify 耗尽 | 跨平台一致性问题 |
| 4 | **插件与 MCP 生态** | [#25630](https://github.com/anomalyco/opencode/issues/25630) provider.models() 回归、[#28472](https://github.com/anomalyco/opencode/issues/28472) MCP object 参数序列化、[#26328](https://github.com/anomalyco/opencode/issues/26328) MCP 进度指示 | 扩展性痛点 |
| 5 | **Agent 能力增强** | [#32924](https://github.com/anomalyco/opencode/pull/32924) /goal 目标管理、[#21495](https://github.com/anomalyco/opencode/issues/21495) 递归 skill 发现、[#17076](https://github.com/anomalyco/opencode/issues/17076) 多文件 diff 审批 | 自主化方向 |

---

## 6. 开发者关注点

### 🔑 核心痛点总结

**1. 版本升级频繁引入回归**
- v1.14.50 → musl 兼容性断裂
- v1.16.0 → sidebar 消失
- v1.17.8 → TUI 输入延迟 + Deepseek Token 过度消耗

开发者对升级持谨慎态度，多个 issue 明确标注 "Regression"。

**2. 跨平台体验不一致**
- Windows：路径分隔符、文件索引刷新、自更新后 exe 损坏
- Alpine/musl：动态链接符号缺失
- macOS：Apple Silicon 上输入延迟

**3. 插件生态信任度下降**
- `provider.models()` hook 在 v1.14.x 后静默失效，插件开发者需要重新适配
- MCP 工具参数序列化错误（object → string）导致工具调用失败

**4. 计费透明度与 API 成本**
- Deepseek Token 过度消耗直接涉及用户资金
- Go 订阅套餐的定价 markup 不透明（[#32116](https://github.com/anomalyco/opencode/issues/32116)）
- 付费用户仍触发速率限制（[#32846](https://github.com/anomalyco/opencode/issues/32846)）

**5. 高级功能呼声强烈但进展缓慢**
- 多认证配置（31👍）和自动模型切换（37👍）长期高票但尚未进入核心开发路线图
- 目标管理（/goal）今日出现两个竞争 PR，显示社区对自主 Agent 能力的期待

---

> 📌 **编辑点评**：今日社区呈现"修复积压 + 新功能萌芽"的双重特征。自动化 PR 清理正在消化历史债务，但 v1.17.x 的回归问题需要优先关注。建议 Alpine 用户暂缓升级，macOS 用户关注 v1.17.9 是否包含延迟修复。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-19

---

## 1. 今日速览

Pi 发布 **v0.79.7**，核心亮点是新增**自动主题模式**，支持分别配置浅色/深色主题并跟随终端 color-scheme 变化。社区活跃度极高，过去 24 小时内 30 条 Issue 更新、21 条 PR 更新，涵盖并行编辑冲突修复、多会话 TUI 切换、Moonshot 400 错误修复、Warp 终端检测等多项重要进展。

---

## 2. 版本发布

### v0.79.7

- **自动主题模式**：`/settings` 可分别选择浅色和深色主题，并自动跟随终端 color-scheme 变化。需要终端支持相关事件。详见 [主题选择文档](https://github.com/earendil-works/pi/blob/v0.79.7/packages/coding-agent/docs/themes.md#selecting-a-theme)。
- **Self-only updates**（摘要截断，完整内容见 Release 页面）。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 👍 | 评论 | 为什么重要 |
|---|------|------|-----|------|-----------|
| [#1278](https://github.com/earendil-works/pi/issues/1278) | tui: make @ file autocomplete async/streaming | ✅ 已关闭 | 16 | 14 | 大型仓库中 `@` 文件自动补全会阻塞 UI，改为异步流式 `fd` 结果可显著提升输入响应速度，是 TUI 体验的核心痛点 |
| [#2327](https://github.com/earendil-works/pi/issues/2327) | [bug] Parallel edit tool calls on the same file overwrite each other | ✅ 已关闭 | 0 | 7 | 同一文件的并行 edit 工具调用会互相覆盖，导致数据丢失，是 agent 可靠性的严重 bug |
| [#5700](https://github.com/earendil-works/pi/issues/5700) | Support multiple live agent sessions with TUI switching | 🔓 开放中 | 0 | 6 | 用户希望在 TUI 中同时运行多个 agent 会话并自由切换，当前 `switchSession` 会销毁当前会话，这是多任务工作流的核心需求 |
| [#2469](https://github.com/earendil-works/pi/issues/2469) | [bug] Clipboard image paste to WSL silently fail | ✅ 已关闭 | 4 | 6 | WSL 终端中粘贴截图静默失败，影响 Windows 用户的日常使用体验 |
| [#2022](https://github.com/earendil-works/pi/issues/2022) | [bug] Cannot disable thinking for Qwen3.5-plus via Anthropic API | ✅ 已关闭 | 0 | 5 | 通过 Anthropic 兼容接口接入 Qwen3.5-plus 时无法关闭 thinking 功能，影响模型兼容性 |
| [#2252](https://github.com/earendil-works/pi/issues/2252) | [bug] coding-agent missing ajv dependency | ✅ 已关闭 | 0 | 5 | `coding-agent` 直接 import `ajv` 但未在 package.json 声明依赖，仅靠传递依赖，属于打包隐患 |
| [#2391](https://github.com/earendil-works/pi/issues/2391) | [bug] Custom keybind doesn't override default one | ✅ 已关闭 | 0 | 5 | 自定义键绑定无法覆盖默认绑定，影响用户个性化配置体验 |
| [#5463](https://github.com/earendil-works/pi/issues/5463) | fix(coding-agent): auto-compaction after final turn throws error | 🔓 开放中 | 5 | 2 | 正常 assistant 轮次后自动压缩触发未处理错误，影响会话压缩功能的稳定性 |
| [#2490](https://github.com/earendil-works/pi/issues/2490) | Google provider: thinking not disabled when thinking: { enabled: false } | ✅ 已关闭 | 0 | 3 | Google provider 在 `thinking.enabled=false` 时未正确传递 `thinkingConfig`，导致 Gemini 2.5 Flash 仍启用推理 |
| [#2567](https://github.com/earendil-works/pi/issues/2567) | [bug] Compaction not working with gpt-5-mini on GitHub Copilot | ✅ 已关闭 | 0 | 2 | gpt-5-mini 不支持 `reasoning_effort: 'none'`，导致压缩失败，影响 GitHub Copilot 用户 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| [#5874](https://github.com/earendil-works/pi/pull/5874) | feat(coding-agent): add automatic theme mode | ✅ 已合并 | 实现自动主题模式，支持分别配置浅色/深色主题并跟随终端 color-scheme 变化 |
| [#5884](https://github.com/earendil-works/pi/pull/5884) | fix(ai): handle orphaned tool result messages to prevent Moonshot 400 errors | ✅ 已合并 | 增加防护逻辑，防止孤立的 `tool` role 消息导致 Moonshot AI 返回 HTTP 400 |
| [#5866](https://github.com/earendil-works/pi/pull/5866) | feat(ai): add OpenRouter Fusion alias | ✅ 已合并 | 新增 `openrouter/fusion` 合成路由别名，与现有 `openrouter/auto` 模式一致 |
| [#5846](https://github.com/earendil-works/pi/pull/5846) | fix(tui): stabilize streaming code fence rendering | 🔓 开放中 | 修复流式输出中代码块围栏渲染不稳定的问题（#5825） |
| [#5841](https://github.com/earendil-works/pi/pull/5841) | feat(tui): detect Warp terminal and enable Kitty image protocol | ✅ 已合并 | 检测 Warp 终端并启用 Kitty 图形协议和 OSC 8 超链接（#5827） |
| [#5812](https://github.com/earendil-works/pi/pull/5812) | fix(tui): protect pipe characters inside inline code in markdown tables | ✅ 已合并 | 修复 Markdown 表格中反引号内的 `|` 被误解析为列分隔符的问题 |
| [#5796](https://github.com/earendil-works/pi/pull/5796) | chore: bump TS target and lib to ES2024, use Promise.withResolvers() | ✅ 已合并 | 将 TypeScript 目标升级至 ES2024，用原生 `Promise.withResolvers()` 替换手写实现 |
| [#5756](https://github.com/earendil-works/pi/pull/5756) | feat(coding-agent): Expose edit-diff for extensions | ✅ 已合并 | 向扩展暴露 edit-diff 信息，增强扩展对编辑操作的感知能力（#5755） |
| [#5348](https://github.com/earendil-works/pi/pull/5348) | Add selective pi-ai base entrypoints | ✅ 已合并 | 新增无副作用的 `@earendil-works/pi-ai/base` 入口点，支持选择性传输打包 |
| [#5869](https://github.com/earendil-works/pi/pull/5869) | Export config dirname | ✅ 已合并 | 导出配置目录路径，方便扩展和外部工具定位配置（#5867） |

---

## 5. 功能需求趋势

从当前 Issue 和 PR 数据来看，社区最关注的功能方向包括：

1. **多会话管理**：用户强烈需求在 TUI 中同时运行多个 agent 会话并自由切换（#5700），当前会话切换会销毁现有会话，限制了多任务工作流。

2. **TUI 体验优化**：包括 `@` 文件自动补全异步化（#1278）、流式代码块渲染稳定（#5846）、Markdown 表格中管道符保护（#5812）、主题自动切换（#5874）等，社区对终端 UI 的流畅度和美观度要求持续提升。

3. **新模型/Provider 支持**：OpenRouter Fusion 别名（#5866）、Fireworks GLM 5p.2（#5873）、Mistral prompt caching（#5854）、Google thinking 配置修复（#2490）等，社区积极跟进各模型厂商的最新能力。

4. **扩展能力增强**：向扩展暴露 edit-diff（#5756）、导出 config dirname（#5869）、导出 `ToolCallEventResult` 类型（#2458）等，开发者希望扩展能更深入地介入 agent 执行流程。

5. **终端兼容性**：Warp 终端检测（#5841）、JetBrains 终端能力支持（#5037）、Termux 全屏重绘问题（#2467）、WSL 剪贴板粘贴（#2469）等，社区使用场景高度多样化。

---

## 6. 开发者关注点

- **并行编辑冲突**：同一文件的并行 edit 调用互相覆盖（#2327）是 agent 可靠性的核心隐患，需要文件级锁或操作序列化机制。
- **工具调用事件顺序**：`tool_execution_start` 在 `beforeToolCall` 之前触发（#2543），导致 UI 显示误导性状态，事件时序需要调整。
- **压缩兼容性**：不同模型对 `reasoning_effort` 的支持值不同（#2567），压缩逻辑需要按模型适配。
- **依赖管理**：`coding-agent` 缺少 `ajv` 直接依赖（#2252），传递依赖策略存在打包风险。
- **JSON 模式输出纯净性**：`--mode json` 下非协议信息混入 stdout（#2482），影响子进程集成。
- **孤立 tool 消息**：缺少前置 `assistant` 消息的 `tool` role 消息导致严格 provider 返回 400（#5884），需要消息序列校验。

---

*数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) | 报告生成时间：2026-06-19*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-19

---

## 1. 今日速览

今日社区活跃度极高，**tt-a1i** 成为最活跃贡献者，一口气提交了 10+ 个 bug fix PR，覆盖 OAuth 令牌管理、会话搜索、文件缓存、MCP 解析等多个核心模块。同时发布了 **v0.18.3-nightly** 版本，包含 sed 编辑历史追踪修复。社区对 **Windows 端体验**（会话列表异常、路径展开）和 **OOM 崩溃** 问题的关注度持续走高。

---

## 2. 版本发布

### v0.18.3-nightly.20260618.bc3e0b405

- **chore(release)**: v0.18.3 版本发布
- **fix(core)**: 追踪 sed 编辑在文件历史中的支持状态（@doud）

> 链接：[Release v0.18.3-nightly](https://github.com/QwenLM/qwen-code/releases)

---

## 3. 社区热点 Issues

| # | 标题 | 热度 | 为什么重要 |
|---|------|------|-----------|
| [#4479](https://github.com/QwenLM/qwen-code/issues/4479) | 统计每日 Token 消耗 | 💬16 | 用户单次使用高达 3000 万 token，社区对用量可视化需求强烈，是计费和成本控制的基础 |
| [#4987](https://github.com/QwenLM/qwen-code/issues/4987) | PR #4779 静默回退了已合并的 #4652 | 💬5 | 暴露了代码合并流程中的冲突处理问题，已修复（见 PR #4993） |
| [#5261](https://github.com/QwenLM/qwen-code/issues/5261) | 无可折叠 thinking block 或展开快捷键 | 💬4 | v0.18.2 引入可折叠思考块后，用户反馈无法展开查看内容，影响调试体验 |
| [#5147](https://github.com/QwenLM/qwen-code/issues/5147) | /quit 后 managed auto-memory 导致 OOM | 💬3 | 大文本历史会话退出时 V8 堆溢出，已提交修复 PR #5181 |
| [#5201](https://github.com/QwenLM/qwen-code/issues/5201) | 新增 QQ Bot Channel Adapter | 💬3 | 社区希望官方支持 QQ 机器人渠道，与现有 Telegram/微信/钉钉/飞书并列 |
| [#5348](https://github.com/QwenLM/qwen-code/issues/5348) | cron 解析器接受带尾随垃圾的畸形字段 | 💬3 | `parseInt()` 未做全词验证，`5x * * * *` 被错误接受，影响定时任务可靠性 |
| [#5365](https://github.com/QwenLM/qwen-code/issues/5365) | FileTokenStorage 首次保存时无法创建令牌文件 | 💬3 | OAuth 令牌持久化流程缺陷，已提交修复 PR #5367 |
| [#5339](https://github.com/QwenLM/qwen-code/issues/5339) | GIF 图像始终回退到默认 tokenizer 尺寸 | 💬3 | `image/gif` 未列入支持的 MIME 类型，导致 GIF 被当作 512×512 处理 |
| [#5244](https://github.com/QwenLM/qwen-code/issues/5244) | Windows 桌面端会话列表出现额外 `(session)` 条目 | 💬2 | skill/tool 任务执行后会话列表污染，已提交修复 PR #5245 |
| [#5281](https://github.com/QwenLM/qwen-code/issues/5281) | Linux SSH 会话中 systemd-inhibit 认证导致 TUI 无响应 | 💬2 | `login1.inhibit-block-sleep` 认证提示占用输入流，已提交修复 PR #5318 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| [#5181](https://github.com/QwenLM/qwen-code/pull/5181) | 修复 /quit 时 auto-memory 提取导致 OOM | ✅ 已合并 | 优化 `buildTranscriptMessages()` 的内存使用，避免大历史会话退出时堆溢出 |
| [#5318](https://github.com/QwenLM/qwen-code/pull/5318) | 传递 `--no-ask-password` 给 systemd-inhibit 防止 TUI 损坏 | 🔄 待审核 | 解决 Linux SSH 环境下认证提示占用输入流的问题 |
| [#5369](https://github.com/QwenLM/qwen-code/pull/5369) | 修复扩展中工作区信任状态传递 | 🔄 待审核 | `isWorkspaceTrusted()` 返回 `TrustResult` 对象而非布尔值，导致未信任工作区被错误信任 |
| [#5367](https://github.com/QwenLM/qwen-code/pull/5367) | 修复 FileTokenStorage 首次保存创建文件 | 🔄 待审核 | 允许令牌文件在不存在时自动创建 |
| [#5364](https://github.com/QwenLM/qwen-code/pull/5364) | 避免 glob 模式复用前缀缓存 | 🔄 待审核 | `*.js` 搜索不应复用 `*.` 的缓存结果 |
| [#5362](https://github.com/QwenLM/qwen-code/pull/5362) | 运行时遵守 ripgrep builtin 设置 | 🔄 待审核 | `tools.useBuiltinRipgrep` 配置未传递到实际执行路径 |
| [#5358](https://github.com/QwenLM/qwen-code/pull/5358) | 恢复前验证 checkpoint | 🔄 待审核 | `/restore` 前校验 `toolCall` 完整性，防止畸形 checkpoint 破坏文件 |
| [#5353](https://github.com/QwenLM/qwen-code/pull/5353) | 支持会话元数据字段中的空白字符 | ✅ 已合并 | 修复 JSON 字段提取器对 `"key" : "value"` 格式的支持 |
| [#5319](https://github.com/QwenLM/qwen-code/pull/5319) | 重命名 TodoWrite 显示名为 TodoList | ✅ 已合并 | 统一 UI 显示名称，保持 wire 协议 `todo_write` 不变 |
| [#5221](https://github.com/QwenLM/qwen-code/pull/5221) | keychain 不可用时回退到加密文件存储 | ✅ 已合并 | 敏感扩展设置不再因 OS keychain 不可用而失败 |

---

## 5. 功能需求趋势

从今日 Issues 中提炼出社区最关注的 **5 大功能方向**：

### 🔐 认证与令牌管理（最高频）
- OAuth 令牌生命周期管理（过期、刷新、持久化）
- MCP OAuth `expires_in=0` 处理
- 令牌文件自动创建
- 工作区信任状态正确传递

### 🖥️ 桌面端体验（Windows 为重点）
- Windows 路径展开（`~\` 前缀）
- 会话列表异常条目清理
- 系统休眠抑制与 TUI 兼容性

### 🧠 模型交互体验
- Thinking block 可折叠/可展开
- 预估响应时间显示
- 输出语言规范化

### 🔧 核心工具链健壮性
- cron 表达式解析严格化
- grep 输出解析（含冒号路径）
- ripgrep builtin 设置生效
- 沙箱镜像名称解析（registry 端口）

### 📊 可观测性
- Token 用量统计（日维度）
- 会话搜索体验（emoji 支持、CJK 截断）

---

## 6. 开发者关注点

### ⚠️ 高频痛点
1. **内存管理**：大历史会话的 auto-memory 提取仍是 OOM 重灾区
2. **跨平台一致性**：Windows 路径处理、Linux systemd 交互存在平台特异性 bug
3. **输入验证宽松**：多处使用 `parseInt()` 未做全词验证，导致畸形输入被静默接受
4. **JSON 解析容错**：会话元数据、MCP 配置等 JSON 解析对空白字符和格式变体支持不足

### 💡 社区期待
- **QQ Bot 官方渠道适配器**：国内用户群体庞大
- **Token 用量仪表盘**：与计费体系对接的基础
- **扩展管理器交互化**：从只读列表升级为多标签管理（PR #4850 进行中）

---

> 📊 数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 统计时间：2026-06-19

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-06-19 | 项目：Hmbown/CodeWhale**

---

## 1. 今日速览

今日 CodeWhale 发布了 **v0.8.62** 版本，同时正式宣布项目从 `deepseek-tui` 更名为 **CodeWhale**，旧 npm 包 `deepseek-tui` 已废弃。社区活跃度极高，过去 24 小时内新增/更新 38 个 Issue 和 28 个 PR，核心聚焦于 **v0.8.63 稳定性修复**（卡顿、冻结、权限控制）以及 **v0.9.0 架构重构**（Rust 大文件拆分、Workrooms、WhaleFlow）。

---

## 2. 版本发布

### v0.8.62

- **品牌更名**：项目正式更名为 **CodeWhale**，npm 包名、命令名、发布资产名统一为 `codewhale`。旧包 `deepseek-tui` 已废弃，不再接收更新。
- **迁移指引**：v0.8.x 旧版用户请参考 `docs/REBRAND.md` 完成迁移。

> 🔗 Release: https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.62

---

## 3. 社区热点 Issues

| # | 标题 | 评论 | 要点 |
|---|------|------|------|
| **#2487** | Turn stalled - no completion signal received（yolo 模式卡死） | 16 | 🔴 **最高热度**。yolo 模式下长任务频繁卡死，`continue` 命令无法恢复，用户被迫退出丢失上下文。社区反映强烈，是 v0.8.x 最严重的可靠性问题之一。 |
| **#1812** | TUI freeze on Windows (crossterm poll) | 7 | Windows 11 上 TUI 间歇性完全冻结，进程存活但无响应。已有日志和线程分析，定位到 crossterm 轮询层。 |
| **#3275** | CodeWhale 过度自主修改，偏离用户意图 | 5 | 🔴 **安全/可靠性红线**。Agent 进入自问自答循环，未经确认就大幅扩展工作范围。已引发 PR #3290（添加 scope_discipline 规则）和 #3315（强制用户输入溯源）两项修复。 |
| **#1620** | 思考过程极慢，逐字输出 | 5 | 用户反馈模型推理/输出极慢，已关闭但根因未明，可能与 provider 配置或网络有关。 |
| **#3289** | 自动生成多个 sub-agent 后 UI 冻结 | 4 | Plan 模式下自动 spawn 多个子代理后 TUI 无响应，涉及 sub-agent 并发控制。 |
| **#1917** | 通用 PreToolUse/PostToolUse hook 层提案 | 4 | 架构级提案：为所有工具调用引入 Cancel/Pause/Resume 生命周期钩子，社区讨论热烈。 |
| **#2739** | 任务执行中卡死（v0.8.51 遗留问题） | 4 | 🔴 从 v0.8.51 就存在的卡死问题，0.8.52 修复不彻底。PR #3285 已部分修复（恢复后会话丢失问题）。 |
| **#3240** | 旧版 .deepseek 配置目录残留 | 3 | 更名后运行时仍创建 `.deepseek` 目录，Windows 上同时存在 `.codewhale` 和 `.deepseek` 两个文件夹。 |
| **#3238** | Ubuntu 22.04 glibc 版本不兼容 | 3 | `npm install -g codewhale` 在 Ubuntu 22.04 上因 glibc 版本不匹配无法运行。 |
| **#3279** | Plan/Agent 模式切换不一致 & 工具权限混乱 | 3 | 从 Plan 切到 Agent 后 write_file/exec_shell 持续被拒，修复后又自动越权执行。PR #3283 已修复。 |

---

## 4. 重要 PR 进展

### 已合并（Merged）

| # | 标题 | 说明 |
|---|------|------|
| **#3285** | 卡死/取消后会话持久化修复 | 修复 #2739 的部分问题——stall watchdog 和 cancel 路径现在会在恢复前持久化会话，`--continue` 不再丢失上下文。 |
| **#3283** | Plan/Agent 模式切换修复 | 修复 `approval_mode` 在 Plan→Agent 切换后未恢复的根因，增加自动执行守卫。 |
| **#3290** | 添加 scope_discipline 规则防止自问自答 | 在 `constitution.md` 中新增 47 行范围约束规则，防止 Agent 进入自我循环。 |
| **#3295** | 运行时执行 ask 权限规则 | 将 `permissions.toml` 中的 ask-only 规则接入 TUI 运行时审批路径。 |
| **#3286** | 修复 Kimi 参数 schema 缺失 type:object | 扩展 `sanitize_for_kimi_parameters` 覆盖 `$ref`/`allOf`/`anyOf`/`oneOf` 根 schema。 |
| **#3293** | 修复 per-tool snapshots 忽略 enabled 配置 | `write_file`/`edit_file`/`apply_patch` 现在正确检查 `snapshots.enabled` 开关。 |
| **#3277** | Workrooms Phase 1 实现 | v0.9.0 Workroom 抽象的基础层——数据模型、API 端点、文档和工具。 |
| **#3274** | Linux x64 musl 静态二进制发布 | 将 Linux release 从动态 glibc 切换为静态 musl 构建，解决 glibc 兼容性问题。 |
| **#3297** | 修复 Poppler pdftotext 检测 | `probe_executable` 改用 `-v` 而非 `--version` 检测 poppler，修复 PDF 提取静默失效。 |
| **#3280** | 修复 auto routing 在无 flash router 时失败 | 允许纯启发式 auto routing 在 flash router 不可用时正常工作。 |

### 进行中（Open）

| # | 标题 | 说明 |
|---|------|------|
| **#3317** | 修复 dispatcher 退出时子进程清理 | 修复 #3259——`codewhale serve/app-server` 委托的子进程在 dispatcher 终止后未被清理。 |
| **#3300** | 从 session 恢复时保留 thinking/tool 块 | 替换纯文本 seed 实现，支持 ContentBlock 类型感知的会话重建。 |
| **#3301** | 保存 ask 权限规则 | 新增 ask-only 审批 UI 动作，将当前 shell 审批持久化为 `permissions.toml` 规则。 |
| **#3302** | 保持 onboarding 标记在 codewhale home 路径 | 修复新用户引导标记在旧版 `.deepseek` 和新版 `.codewhale` 之间的迁移问题。 |
| **#3316** | 添加 source wiki 和 Agents/Workflows 术语文档 | 新增 wiki 和编排术语文档，统一公开命名为 Agents 和 Workflows。 |

---

## 5. 功能需求趋势

从近期 Issues 和 PR 中提炼出以下 **五大趋势**：

### 🔴 1. 稳定性与可靠性（最高优先级）
- TUI 冻结/卡顿是用户流失的主因（#2487、#1812、#2739）
- 涉及 Windows 兼容性、长任务超时、会话恢复数据丢失
- 社区情绪：**从 v0.8.51 积累至今，用户已多次表示"无法忍受"**

### 🔴 2. 权限与安全控制
- Agent 越权执行（#3275、#3279）、用户输入溯源（#3315）
- 社区要求更细粒度的工具权限、审批机制和操作范围约束
- 趋势：从"全自动"向"可控自动化"演进

### 🟡 3. 架构重构（v0.9.0 准备）
- 大量 Rust 大文件拆分工作（#3306、#3308、#3309、#3310、#3311、#3312、#3313、#3314）
- 核心文件如 `config.rs`（9402 行）、`app.rs`（150 字段 god object）亟需拆分
- 这是 Hmbown 亲自推动的系统性工程

### 🟡 4. Workrooms & WhaleFlow 新功能
- Workrooms Phase 1 已落地（#3277），提供持久化、可寻址的 Agent 对话容器
- WhaleFlow 异步执行器（#2973）和 swarm 综合归约（#3230）仍在规划中
- 代表项目从"TUI 工具"向"Agent 编排平台"转型

### 🟢 5. 多平台/多模型支持
- glibc/musl 兼容性（#3238、#3274）
- OpenCode Go/Zen provider 支持需求（#1481）
- Atlas Cloud 已作为 OpenAI 兼容后端加入文档（#3239）
- Windows 平台稳定性持续改善

---

## 6. 开发者关注点总结

| 痛点 | 具体表现 | 社区反馈 |
|------|----------|----------|
| **任务卡死无法恢复** | yolo 模式长任务冻结，`continue` 无效，`--continue` 丢失上下文 | 🔴 最高频投诉，多个 Issue 交叉报告 |
| **Agent 行为失控** | 自问自答循环、越权修改、偏离用户意图 | 🔴 安全红线，已引发多个修复 PR |
| **Windows 体验差** | crossterm 冻结、glibc 不兼容、旧配置残留 | 🟡 影响 Windows 用户群体 |
| **代码库膨胀** | 单个 Rust 文件数千行，新增 provider 需修改 15-30 处 match | 🟡 影响贡献者体验，Hmbown 已启动系统性拆分 |
| **配置/迁移混乱** | 旧 `.deepseek` 目录残留、provider 配置分散 | 🟡 更名后需更好的迁移工具 |
| **输出速度慢** | 模型推理/流式输出极慢 | 🟡 可能与 provider 选择有关，非项目自身问题 |

---

**总结：** CodeWhale 正处于关键转型期——品牌更名、架构重构（v0.9.0）、从 TUI 工具向 Agent 编排平台演进。当前社区最迫切的需求是 **解决长期存在的稳定性问题**（卡死、冻结、数据丢失），这也是 v0.8.63 的核心修复方向。Hmbown 同时启动了大规模的 Rust 代码库拆分工程，为 v0.9.0 的 Workrooms 和 WhaleFlow 新功能铺路。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*