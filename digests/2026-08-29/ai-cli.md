# AI CLI 工具社区动态日报 2026-08-29

> 生成时间: 2026-08-29 05:09 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-08-29

---

## 1. 生态全景

当前 AI CLI 工具生态已进入 **“生产级硬化与差异化深耕”** 并行期。头部工具（Claude Code、Gemini CLI、GitHub Copilot CLI、Qwen Code）同步推进 **安全加固（供应链/认证/沙箱）、企业级合规（数据驻留/审计/额度管控）、多会话/多代理编排稳定性** 三大核心工程，版本迭代从“功能堆砌”转向“架构兜底”。中腰部工具（Kimi Code、OpenCode、Pi、Qwen Code）在 **Web/IDE 深度融合、结构化记忆、审查管线自动化** 形成差异化护城河。全生态呈现 **“协议标准化（MCP/ACP）、安全左移、可观测性内生”** 的共性演进特征，Windows/桌面端体验补齐与长会话上下文一致性成为跨工具共性硬仗。

---

## 2. 各工具活跃度对比

| 工具 | 今日新增/更新 Issues | 今日活跃 PRs | 版本发布 | 核心动态关键词 |
|------|----------------------|--------------|----------|----------------|
| **Claude Code** | ~10 热点（含 3 个高危安全误拦） | 1 个安全修复 PR (#87079) | **v2.1.251** | Model Switch Hooks、Cyber Safeguard 误拦危机、Windows 孤儿进程 |
| **Gemini CLI** | 10 精选（含多个 P1 Agent 挂起/Shell 卡死） | **10+**（含 5 个安全修复） | **v0.59.0-nightly** | Fail-Closed 工作区信任、OAuth/NTFS/SSE 安全加固、Subagent 状态机 |
| **GitHub Copilot CLI** | **23 个** 24h 更新（含 6 个新建 triage） | 1 个 CI 修复 | **v1.0.82-1** | 企业认证/数据驻留 401、FileWatch 泄漏 13GB、并行子代理 UI 死锁、Windows 25H2 适配 |
| **Kimi Code CLI** | 3 个（含 1 个严重安全漏洞 #2625） | 1 个依赖升级 | 无 | MCP 绕过敏感文件防护、cache_read 计费异常放大 10x、asyncssh CVE 修复 |
| **OpenCode** | 10 精选（含模型延迟、TUI 内存泄漏、升级 403） | 2 个（基建/Windows UI） | **v1.18.25** | Azure CLI 认证修复、Bun 运行时兼容性、模型响应分钟级延迟 |
| **Pi** | 10 热点（含自动压缩失效、TUI 渲染崩溃、XDG 目录） | **10+** 高密度合并 | **v0.84.4** | 终端能力覆盖、扩展启动期合成器、制品验证修复门控、Bedrock Mantle 支持 |
| **Qwen Code** | 10 热点（含权限回归、413 导致压缩失效、WebShell 卡死） | **10+**（含架构级重构） | **v0.22.3 Stable** | Channels 命名会话、WebShell 全面切换、审查管线去重/熔断、cua-driver 全平台预构建 |
| **OpenAI Codex** | ⚠️ 摘要失败 | - | - | - |
| **DeepSeek TUI** | ⚠️ 摘要失败 | - | - | - |

> **数据说明**：Issues/PRs 以日报显式列出的精选条数为准，实际总量更高；Release 以当日发布版本为准。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求与社区信号 |
|------|----------|-------------------|
| **安全左移与供应链加固** | **Gemini CLI (5 PR)、Kimi Code (#2625)、Qwen Code (#10427)、Claude Code (#87079)** | 工作区信任 Fail-Closed、MCP/OAuth/NTFS/SSE 全链路漏洞修复、Hook 信任边界封闭、配置加载 ACL 校验 |
| **企业级合规与可编程额度** | **Claude Code (#80732、#84352)、Copilot CLI (#4527、#4650)、Gemini CLI** | 组织级白名单/审计日志、数据驻留租户端点路由、可编程用量/额度 API（触发自动熔断/降级） |
| **长会话上下文/缓存一致性** | **Claude Code (#90509)、Kimi Code (#2626)、Gemini CLI、Qwen Code (#10380)** | 静默 Token 丢失审计、cache_read 计费异常、413 导致自动压缩永久失效、worktree 路径解析污染 |
| **多会话/多代理编排稳定性** | **Claude Code (#82788、#61682)、Gemini CLI (#22323、#21409)、Copilot CLI (#4533)、OpenCode (#38366)** | 子会话分组继承、Subagent 终止原因误报、并行子代理 UI 死锁、多实例启动运行时崩溃 |
| **Windows/桌面端原生体验补齐** | **Claude Code (#53247、#89680)、Copilot CLI (#4165、#4652)、OpenCode (#46090)、Qwen Code (#8124)** | 静默更新孤儿进程、MSIX 容器清理、--resume 挂起、沙箱版本检测、AltGr 输入法、TUI 渲染裁剪 |
| **Web/IDE 深度融合与本地控制** | **Qwen Code (#9811、#10432)、Pi (#8811、#8790)、Gemini CLI** | WebShell 完全接管 VS Code 伴侣、Local Control 二维码配对、扩展启动期合成器/变更日志、模型运行时暴露给扩展 |
| **结构化记忆与审查管线工程化** | **Qwen Code (#10183、#10121、#10122)、Pi (#8795)、Gemini CLI (#22745)** | 双层 ref/title 记忆树+查询聚焦、审查去重/收敛熔断/制品验证修复门控、AST 感知工具评估 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 关键护城河 |
|------|----------|--------------|--------------|------------|
| **Claude Code** | **企业级主力 Agent**，强合规、强审计、强 Hook 可编程性 | Anthropic 自研模型深度绑定、Hook 事件总线架构、Remote Console 可观测性 | 合规敏感型企业、需深度定制工作流的高级开发者 | CVP 认证体系、Pre/PostModelSwitch 钩子、会话级成本控制原语 |
| **Gemini CLI** | **安全第一的开放平台**，Google 生态集成、夜ly 快速迭代 | TypeScript/Node 原生、MCP 为一等公民、安全修复 PR 密度极高 | 重视供应链安全、Google Cloud 用户、扩展开发者 | Fail-Closed 默认拒绝、RFC 9207 OAuth 防混淆、NTFS 短路径缓解 |
| **GitHub Copilot CLI** | **GitHub 生态原生入口**，企业数据驻留、CI/CD 无缝衔接 | Go/Rust 混合、GitHub API 深度绑定、TUI 基于 Bubble Tea | GitHub Enterprise 客户、重 CI/CD 集成的团队 | GHE 数据驻留路由、Copilot 订阅打通、PR/Review 原生工具链 |
| **Qwen Code** | **Web/IDE 融合先锋**，结构化记忆、审查管线自动化、本地控制 | TypeScript/React WebShell、cua-driver Rust 组件、双层记忆树架构 | 全栈/Web 开发者、需移动端协同、重代码审查自动化的团队 | Channels 命名会话、WebShell 完整替代 VS Code 伴侣、审查去重/熔断管线 |
| **Pi** | **可扩展性极致的编码 Agent**，扩展即一等公民、制品验证闭环 | Go 核心、扩展启动期合成器、制品验证修复门控、Bedrock Mantle 原生支持 | 插件/扩展生态建设者、需定制模型运行时、重 TUI 稳定性的用户 | StartupComposer、Artifact Verification Repair Gate、Changelog 标准化 |
| **Kimi Code CLI** | **轻量多模型兼容层**，聚焦 Provider 抽象与配额透明 | Python 核心、MCP 网关模式、OpenAI Legacy/Responses 双兼容 | 多模型混用、私有化部署、本地 llama.cpp 用户 | 多 Provider 统一配置模板、cache 计费可观测诉求强烈 |
| **OpenCode** | **Bun 生态原生**，极简架构、自建模型友好 | Bun 运行时、Solid.js TUI、自建模型连接优化 | Bun 信仰者、自建/本地模型开发者、追求极简依赖者 | Azure CLI 免 Bun 认证、自建模型连接韧性、极低启动依赖 |

---

## 5. 社区热度与成熟度评估

| 梯队 | 工具 | 判断依据 | 发展阶段 |
|------|------|----------|----------|
| **第一梯队：生产级主力** | **Claude Code、Gemini CLI、GitHub Copilot CLI** | 日均高危 Issue/PR 双高、企业级阻断性缺陷持续修复、版本语义化发布、安全响应 <24h | **成熟期/规模化交付期** |
| **第二梯队：快速迭代差异化** | **Qwen Code、Pi** | Stable+Nightly 双轨、架构级重构频繁（WebShell、记忆树、扩展合成器）、Release Notes 详尽 | **高速成长期/架构演进期** |
| **第三梯队：垂直深耕/早期** | **Kimi Code CLI、OpenCode** | 社区规模较小、核心维护者驱动明显、安全/计费等基础设施仍在补齐 | **早期采用者/垂直验证期** |
| **观察期** | **OpenAI Codex、DeepSeek TUI** | 今日数据获取失败，无法评估 | **数据缺失** |

**关键指标对比**：
- **安全响应速度**：Gemini CLI (5/10 PRs 为安全) > Qwen Code (Hook 边界封闭) > Claude Code (glob 修复) > Copilot CLI (仅 CI 修复)
- **企业就绪度**：Copilot CLI (GHE 原生) ≈ Claude Code (CVP/合规 Hook) > Gemini CLI (Fail-Closed) > Qwen Code (审查管线)
- **创新激进度**：Qwen Code (WebShell 全替代) > Pi (扩展合成器/制品验证) > Gemini CLI (夜ly 安全加固) > OpenCode (Bun 原生)

---

## 6. 值得关注的趋势信号

| 趋势信号 | 证据来源 | 对开发者/决策者的参考价值 |
|----------|----------|---------------------------|
| **“Hook/Event 总线”成为标配扩展点** | Claude Code (ModelSwitch)、Gemini CLI (迁移工具)、Qwen Code (审查熔断信号)、Pi (UI 提示事件) | **架构选型**：优先评估工具的 Hook 粒度与覆盖面，是否支持合规审计、成本控制、自动降级的可编程注入。 |
| **MCP 安全从“信任”转“零信任”** | Gemini CLI (Fail-Closed 过滤)、Kimi Code (绕过敏感文件防护)、Qwen Code (Hook 信任边界封闭) | **供应链策略**：禁用 `auto-approve`、强制 MCP 服务器签名/沙箱、接入制品验证门控，将 MCP 视为不可信第三方代码。 |
| **上下文/缓存计费进入“可观测白盒”阶段** | Kimi Code (cache_read 10x 放大)、Claude Code (157K 静默丢失)、Qwen Code (413 压缩失效) | **成本治理**：要求工具提供 `usage stats` CLI、实时仪表盘、缓存命中率指标；在长跑 Agent 中植入额度熔断 Hook。 |
| **Windows/桌面端不再是“二等公民”** | Claude Code (10+ Windows Issue)、Copilot CLI (25H2/沙箱/AltGr)、OpenCode (面板轮廓)、Qwen Code (启动横幅) | **平台战略**：若团队含 Windows 开发者，需将桌面端稳定性纳入选型硬指标，关注 MSIX/自动更新/会话持久化路线图。 |
| **WebShell 取代原生 TUI 成为集成新范式** | Qwen Code (完全迁移)、Pi (启动合成器)、Gemini CLI (浏览器 Agent) | **IDE 集成方向**：WebShell 支持循环端口/进程隔离/移动端二维码配对，更适合云开发环境与远程协作，原生 TUI 逐渐转为轻量入口。 |
| **审查管线工程化：去重→熔断→验证闭环** | Qwen Code

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-29）

---

## 1. 热门 Skills 排行（社区关注度 Top 8）

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|------|-----------|----------|-------------|------|
| 1 | **[skill-creator 评估体系修复](https://github.com/anthropics/skills/pull/1298)**<br>#1298 / #1099 / #1050 / #556 | 修复 `run_eval.py` 在 Windows 上触发率 0%、recall 始终 0% 的核心缺陷 | **最热技术债**：关联 Issue #556（12 评论、7 👍），多 PR 并行攻关（编码、管道读取、并行 worker），被视为 Skill 创作工具链能否落地的关键 | 🟢 OPEN |
| 2 | **[Hivemind：零成本多智能体编排](https://github.com/anthropics/skills/pull/1628)**<br>#1628 | 让 Claude Code 将机械任务委派给免费模型驱动的 headless opencode worker，自身仅作规划/审查/合并 | **架构创新**：解决“昂贵模型上下文是稀缺资源”痛点，引发多智能体协作范式讨论 | 🟢 OPEN |
| 3 | **[self-audit：机械验证+四维推理质量门](https://github.com/anthropics/skills/pull/1367)**<br>#1367 | 交付前自审：先做文件存在性机械校验，再按损害严重度做四维推理审计 | **质量保障标杆**：通用性强（无关技术栈），呼应 Issue #1385（4 评论、1 👍）提出的三闸管线 | 🟢 OPEN |
| 4 | **[document-typography](https://github.com/anthropics/skills/pull/514)**<br>#514 | 修正 AI 生成文档的孤行/寡行、标题断页、编号错位等排版缺陷 | **长尾高频需求**：“用户极少主动要求好排版，但每份文档都需要” | 🟢 OPEN |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)**<br>#723 | 覆盖测试金字塔/奖杯模型、AAA 模式、React Testing Library、契约测试、E2E 等全栈测试指导 | **工程基建刚需**：填补仓库在系统化测试指导上的空白 | 🟢 OPEN |
| 6 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**<br>#83 | 从结构、文档、安全、可维护性、可测性五维度给 Skill 打分的元技能 | **元治理工具**：配合 #492（43 评论）的安全命名空间担忧，成为社区自律基建 | 🟢 OPEN |
| 7 | **[ServiceNow 平台技能](https://github.com/anthropics/skills/pull/568)**<br>#568 | 覆盖 ITSM/ITOM/ITAM/SAM/FSM/HRSD/CSM/SPM/SecOps/IntegrationHub 的全平台助手 | **企业级落地标杆**：单一 PR 覆盖 10+ 模块，Issue 讨论持续至 2026-08 | 🟢 OPEN |
| 8 | **[claude-api 退役模型标记 & Token 注入优化](https://github.com/anthropics/skills/pull/1607)**<br>#1607 / #1487 | 标记 4 个退役模型 ID；修复单次调用注入 ~156k tokens 耗尽上下文窗口 | **生产可用性阻断**：Issue #1487 直指束缚技能的上下文爆炸问题 | 🟢 OPEN |

> **注**：所有 PR 当前均为 **OPEN** 状态，仓库近期合并活动较少，社区处于“积累高质量 PR、等待维护者审核”阶段。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 核心诉求 | 热度信号 |
|----------|-----------|----------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) (43 评论、2 👍) | 社区技能不应占用 `anthropic/` 命名空间，防止权限提升攻击 | 🔥 最高讨论量 |
| **组织级技能分发** | [#228](https://github.com/anthropics/skills/issues/228) (16 评论、8 👍) | Claude.ai 原生支持组织内共享技能库，避免手动下载/上传 | 🔥 高点赞 |
| **技能创作工具链可用性** | [#556](https://github.com/anthropics/skills/issues/556) (12 评论、7 👍) | `run_eval.py`/`run_loop.py` 在 Windows/跨平台上彻底失效，阻碍技能迭代 | 🔥 多 PR 并行修复 |
| **上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 评论) | 官方技能（如 `claude-api`）单次注入 156k tokens，挤占用户上下文 | ⚡ 生产阻断 |
| **多智能体/编排范式** | [#1628](https://github.com/anthropics/skills/pull/1628)、[#1385](https://github.com/anthropics/skills/issues/1385) (4 评论、1 👍) | 从单体技能转向“规划器+廉价执行器”“预校准→对抗评审→交付验证”管线 | 🌱 新兴架构 |
| **元技能：技能审计/质量门** | [#83](https://github.com/anthropics/skills/pull/83)、[#1367](https://github.com/anthropics/skills/pull/1367) | 给技能打分、自审、安全扫描，建立可信供应链 | 🌱 配合 #492 需求 |
| **企业级平台深度集成** | [#568](https://github.com/anthropics/skills/pull/568) (ServiceNow)、[#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint) | 覆盖 ITSM/ERP/协作平台的深度技能，含权限模型、合规审计 | 🏢 企业落地刚需 |
| **跨平台/云厂商兼容** | [#29](https://github.com/anthropics/skills/issues/29) (Bedrock)、[#16](https://github.com/anthropics/skills/issues/16) (MCP 暴露) | 技能在 Bedrock/Azure/Vertex 等托管环境可用；技能能力以 MCP 协议对外暴露 | ☁️ 基建互操作 |

---

## 3. 高潜力待合并 Skills（评论活跃、接近落地）

| PR | Skill | 合并信号 | 预计落地价值 |
|----|-------|----------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) + [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator 评估/Windows 全栈修复** | 3 个 PR 同步攻关同一根因，Issue #556 有 7 👍，维护者回应积极 | 解锁社区自主创作技能的核心工具链 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **评估序列化/指标/编码/脚本稳定性修复** | 修复 mcp-builder、skill-creator 等多个技能的评估管线，属“横向基建修复” | 提升全仓库 CI 可信度 |
| [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) / [#539](https://github.com/anthropics/skills/pull/539) | **pdf/docx/skill-creator 小而硬的兼容性修复** | 单文件/单行修复，无破坏性，作者 Lubrsy706 连续贡献 3 个同类 PR | 消除跨平台/大小写/编码的长尾 Bug |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api 退役模型标记** | 修复 #1603，仅改常量表，风险极低 | 避免用户误用已下线模型 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 功能完整、文档详实、无依赖冲突，属“即插即用”类 | 直接提升所有文档输出专业度 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 覆盖面广、示例丰富、符合仓库现有技能风格 | 成为仓库标准测试参考技能 |

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：将 Skills 从“零散脚本集合”进化为“可信、可评估、可编排、企业级可用的标准化能力单元”——核心阻力在于创作工具链（skill-creator）跨平台失效、官方命名空间信任边界模糊、以及上下文窗口被技能自身挤占。**

---

## 附：关键链接速查

- **仓库首页**：https://github.com/anthropics/skills
- **安全命名空间讨论**：#492
- **组织级分分需求**：#228
- **工具链核心缺陷**：#556 → #1298 / #1099 / #1050
- **上下文窗口爆炸**：#1487 → #1607
- **多智能体编排提案**：#1628 / #1385
- **元治理技能**：#83 / #1367

*报告生成时间：2026-08-29 | 数据源：anthropics/skills PR & Issue 导出快照*

---

# Claude Code 社区动态日报 | 2026-08-29

---

## 1. 今日速览

- **版本发布**：v2.1.251 引入 `PreModelSwitch`/`PostModelSwitch` 钩子事件，支持拦截/确认/标注模型切换；`SessionStart` 恢复钩子新增会话过期度与预估重缓存成本；远程控制台现可实时流式展示前台子代理的工具调用与结果。
- **社区焦点**：网络安全防护误拦（Cyber Safeguard false positives）集中爆发，单日新增 3 个高严重度 Issue（会话直接阻断），且 #84352 已积累 164 条评论，影响 CVP 认证组织；Windows 桌面端“隐形更新导致孤儿进程/启动失败”问题持续发酵，多个 Issue 关联同一根因。
- **生态信号**：开发者对**可编程的用量/额度查询**、**会话/子会话分组管理**、**终端交互增强（鼠标/宽度自适应）**需求强烈；安全规则的 glob 匹配语义修复已提交 PR。

---

## 2. 版本发布

### v2.1.251 ([Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.251))
| 变更 | 说明 |
|------|------|
| **新增 Hook：`PreModelSwitch` / `PostModelSwitch`** | 可在模型切换前拦截（block）、要求确认或附加元数据；适合合规审计、成本控制、自动降级策略。 |
| **`SessionStart` resume 钩子增强** | 新增 `sessionStaleness` 与 `estimatedRecacheCost` 字段，便于在恢复长会话时决定是否精简上下文。 |
| **Remote Console 子代理流式日志** | 前台子代理的工具调用/结果现实时推送至远程控制台，显著提升多代理协作的可观测性。 |

---

## 3. 社区热点 Issues（精选 10 个）

| # | Issue | 核心问题 | 热度/信号 | 为什么重要 |
|---|-------|----------|-----------|------------|
| 1 | [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP 认证组织仍被 Cyber Safeguard 拦截**，验证门户显示“Under review” | 164 💬 · 25 👍 | 企业级用户信任危机；阻断授权工作流，涉及计费与合规。 |
| 2 | [#90501](https://github.com/anthropics/claude-code/issues/90501) | **实时防护误判订单队列验证为“毒消息”**（Opus 4.8，session-halted） | 1 💬 · 新建 | 典型误报模式：正常业务代码触发安全模型拦截，需微调策略或提供白名单机制。 |
| 3 | [#90499](https://github.com/anthropics/claude-code/issues/90499) | **解决数据库进程冲突时被误拦**（同模型/同严重度） | 1 💬 · 新建 | 同类误报聚集出现，提示安全模型在“系统运维”领域召回率偏低。 |
| 4 | [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Windows：Claude Desktop 崩溃后残留 Silo/Job Object，仅注销/重启恢复** (HRESULT 0x80070020) | 30 💬 · 19 👍 | 核心可用性缺陷，影响所有 Windows 用户；根因指向 MSIX 容器清理逻辑。 |
| 5 | [#89680](https://github.com/anthropics/claude-code/issues/89680) | **隐形自动更新留下孤儿进程锁定旧 AppX 容器，新版无法启动直到重启** | 5 💬 · 新建 | 与 #53247 同根因，揭示“静默更新”机制缺乏进程组优雅终止。 |
| 6 | [#90172](https://github.com/anthropics/claude-code/issues/90172) | **隐形重启销毁运行中会话，出现“Can’t reach your computer”** | 1 💬 · 2 👍 | 列举 8 个相互关联缺陷，直指会话持久化与重连机制的架构短板。 |
| 7 | [#61682](https://github.com/anthropics/claude-code/issues/61682) | **GitHub Connector 显示 Connected 但 Cowork 无工具暴露** (Win11) | 27 💬 · 24 👍 | 协作核心功能失效，阻碍团队采用 Cowork 工作流。 |
| 8 | [#88405](https://github.com/anthropics/claude-code/issues/88405) | **`.claude/rules/` 下的符号链接未自动加载**（文档声称支持） | 7 💬 · 4 👍 | 文档与实现不一致，影响跨项目共享规则的最佳实践。 |
| 9 | [#90405](https://github.com/anthropics/claude-code/issues/90405) | **模型对 git worktree 外文件输出 cwd 相对链接，解析到错误提交** | 2 💬 · 新建 | 多工作树场景下上下文污染风险，需在链接中编码绝对路径或 worktree 标识。 |
| 10 | [#90509](https://github.com/anthropics/claude-code/issues/90509) | **上下文静默丢失 157K tokens 且无压缩记录，随后提示缓存抖动 17 分钟** | 0 💬 · 新建 | 潜在严重数据丢失/计费异常，需排查上下文管理与缓存一致性。 |

> **趋势提示**：今日新建的 3 个 `kind:cyber` Issue 均为 `session-halted` 级别，建议关注后续是否升级为事故复盘。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#87079](https://github.com/anthropics/claude-code/pull/87079) | Open | **修复安全规则 glob 匹配**：`**/*.ts` 现正确匹配顶层 `.ts` 文件（原委托 `fnmatch` 导致 `**` 必须跟 `/`） | 安全策略生效范围修正，防止顶层文件漏扫；属于**安全修复**，建议尽快合并回主分支。 |

> 过去 24h 仅此 1 个 PR 更新，说明主分支处于相对稳定期，重心在 Issue 分流与热修复验证。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声特征 |
|----------|------------|--------------|
| **可编程用量/额度 API** | [#80732](https://github.com/anthropics/claude-code/issues/80732) (Closed, 75 👍)、[#83092](https://github.com/anthropics/claude-code/issues/83092) (Closed) | 高赞闭合 Issue 显示强需求：长跑 Agent 需在代码中实时读取周配额消耗，触发自动熔断/降级。 |
| **会话/子会话分组与继承** | [#82788](https://github.com/anthropics/claude-code/issues/82788) | 父会话侧边栏分组不自动传递给 spawn/continuation/worktree 子会话，管理混乱。 |
| **终端交互现代化** | [#87769](https://github.com/anthropics/claude-code/issues/87769) (鼠标支持, Closed)、[#80123](https://github.com/anthropics/claude-code/issues/80123) (ConPTY 宽度自适应) | 开发者期望 TUI 接近 IDE 体验：点击导航、光标交互、resize 无残留。 |
| **跨平台桌面端稳定性** | #53247, #74170, #89680, #90172 等 10+ Windows Issue | MSIX 容器、后台更新、进程孤儿化、会话断连构成“Windows 信任度”最大短板。 |
| **安全策略可配置/可审计** | #84352, #90501, #90499, #88927 | 企业用户需要：白名单、策略干运行、审计日志、逐项目/组织覆盖。 |
| **规则/内存系统增强** | #88405 (symlink), #34835 (消息排队/追问, Closed) | 共享规则库、会话级上下文注入、交互式补全信息收集。 |

---

## 6. 开发者关注点·痛点总结

1. **“信任但无法验证”的安全防护**  
   - CVP 认证后仍被拦（#84352），验证状态不同步；误报直接**中断会话**（session-halted），无旁路/复核机制。  
   - 需求：组织级白名单、误报上报反馈闭环、策略干运行模式。

2. **Windows 桌面端“更新即故障”**  
   - 静默更新 → 孤儿进程锁旧容器 → 新版启动失败 → 需重启（#53247, #89680, #90172）。  
   - 核心诉求：更新前优雅终止进程组、会话状态持久化与自动重连、可关闭自动更新。

3. **上下文/缓存一致性黑盒**  
   - 157K tokens 静默丢失且无压缩记录（#90509）、worktree 相对链接指向错误提交（#90405）。  
   - 需要：上下文变更审计日志、缓存命中/未命中可观测、worktree 感知的路径解析。

4. **协作与多会话管理碎片化**  
   - GitHub Connector 连通但无工具（#61682）、子会话不继承分组（#82788）、iOS/Dispatch 不显示活跃 macOS 会话（#85285）。  
   - 期望：统一会话元数据模型、跨端同步、可编程的会话编排 API。

5. **可编程性缺口阻碍自动化运维**  
   - 用量/额度仅 CLI 可见（#80732）、规则 glob 语义与文档不符（#87079）、无 Hook 暴露模型切换细节（v2.1.251 已部分解决）。  
   - 趋势：**“一切皆可 Hook/API”** 成为高级用户共识。

---

> **下一步关注建议**  
> - 追踪 Cyber Safeguard 误报是否触发 **security review** 流程（关注 #84352 官方回复）。  
> - 验证 v2.1.251 新 Hook 在企业合规流水线中的实战效果。  
> - 关注 Windows 桌面端是否推出“更新通道/手动更新”缓解方案。  
> - 评估 #87079 合并后对现有 `security-patterns.json` 的破坏性变更范围。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-29

---

## 1. 今日速览
今日核心动态集中在 **安全加固与夜ly 版本发布**。v0.59.0-nightly 版本发布，核心修复了工作区信任的“默认拒绝”机制及受限模式下的 MCP 服务器过滤。社区并行推进了 4 个关键安全 PR（配置加载、OAuth 混淆攻击、NTFS 短路径遍历、SSE 流解析），显示项目正处于**生产级安全加固冲刺期**。Agent 稳定性（Subagent 恢复、Browser Agent 挂起、Shell 卡死）仍是高优先级长期痛点。

---

## 2. 版本发布
### **v0.59.0-nightly.20260829.g0bd1d4397** 
> [Release Notes](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260828.g3c311beac...v0.59.0-nightly.20260829.g0bd1d4397) | [PR #29099](https://github.com/google-gemini/gemini-cli/pull/29099)

**核心变更**：
- **安全修复**：强制执行 **Fail-Closed（默认拒绝）工作区信任解析**，在非受信/受限环境中自动过滤仓库定义的 `mcpServers`，防止服务启动时的非预期进程执行。
- 由 @luisfelipe-alt 提交，属于核心安全加固系列工作的一部分。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心问题 | 关注理由 & 社区反应 |
|---|-------|----------|---------------------|
| **#22323** | [Subagent 恢复后误报 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | `codebase_investigator` 触及 `MAX_TURNS` 限制却上报 `status: "success"` / `Termination Reason: "GOAL"`，掩盖了中断事实。 | **P1/阻塞级**。13 条评论，👍 2。直接影响 Agent 编排可靠性，导致上层任务误判子任务完成。 |
| **#21409** | [Generalist Agent 频繁挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | 切换到 Generalist Agent 后无限等待（甚至 1 小时），禁用 Subagent 可规避。 | **P1/高频痛点**。8 条评论，👍 8。核心交互路径阻断，用户体验极差。 |
| **#28004** | [Shell 工具调用结果重复发送](https://github.com/google-gemini/gemini-cli/issues/28004) | 确定性 Provider 触发工具结果重复提交，已有最小复现。 | **P2/确定性 Bug**。7 条评论。影响 Token 计费与上下文正确性，已有复现步骤利于修复。 |
| **#25166** | [Shell 命令执行完成却卡在 "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | 简单命令执行完毕但 CLI 仍显示 "Awaiting user input" 导致挂起。 | **P1/核心交互故障**。4 条评论，👍 3。高频用户感知 Bug，阻塞基础编码任务。 |
| **#26522** | [Auto Memory 无限重试低信噪会话](https://github.com/google-gemini/gemini-cli/issues/26522) | 提取 Agent 判定低信噪跳过读取会导致会话标记为未处理，陷入无限重试循环。 | **P2/资源泄漏风险**。5 条评论。后台任务失控风险，影响长期运行稳定性。 |
| **#21983** | [Browser Subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 环境下 Browser Agent 启动即失败。 | **P1/平台兼容性**。4 条评论，👍 1。Linux 桌面主流协议支持缺失，阻碍采用。 |
| **#22267** | [Browser Agent 忽略 settings.json 覆盖](https://github.com/google-gemini/gemini-cli/issues/22267) | `maxTurns` 等配置在 Browser Agent 不生效，注册表读取合并逻辑缺失。 | **P2/配置系统缺陷**。3 条评论。配置体系一致性破损，开发者无法精细控制行为。 |
| **#19873** | [利用模型 Bash 亲和性：零依赖沙箱与意图路由](https://github.com/google-gemini/gemini-cli/issues/19873) | 提议原生支持 POSIX 工具链，结合沙箱与执行后意图路由，释放模型原生能力。 | **P2/大型增强 Epic**。8 条评论，👍 1。架构级探讨，指向 Agent 原生工具调用范式演进。 |
| **#22745** | [评估 AST 感知文件读取/搜索/映射价值](https://github.com/google-gemini/gemini-cli/issues/22745) | 探讨 AST 工具减少 Token 噪音、精准定位方法边界的可行性。 | **P2/技术调研 Epic**。7 条评论，👍 1。关联 #22746，探索代码理解深度工具化方向。 |
| **#29122** | [Hooks 迁移复制 Claude `timeout` 导致单位错位](https://github.com/google-gemini/gemini-cli/issues/29122) | `gemini hooks migrate` 直接复制 Claude 的秒级 `timeout`，但 Gemini 使用毫秒，导致超时缩短 1000 倍。 | **新增/P2/迁移工具 Bug**。1 条评论。影响从 Claude 迁移用户的 Hook 可用性，单位转换低级错误。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 核心内容 | 影响面 |
|---|----|------|----------|--------|
| **#29099** | [fix(core): 强制 Fail-Closed 工作区信任 & 过滤受限模式 MCP](https://github.com/google-gemini/gemini-cli/pull/29099) | **Closed/Merged** | 夜ly 版本核心修复。非受信环境拒绝加载仓库级 `mcpServers`，堵住供应链攻击面。 | **安全/核心** ⭐⭐⭐⭐⭐ |
| **#29115** | [fix(config): 防止不安全的系统级配置加载](https://github.com/google-gemini/gemini-cli/pull/29115) | **Open** | 修复 Windows/POSIX 系统级配置加载导致的本地提权 & 跨用户任意命令执行。含 ACL 校验、路径规范化。 | **安全/全平台** ⭐⭐⭐⭐⭐ |
| **#29117** | [fix(core): 防止 MCP 认证中的 OAuth IdP 混淆攻击](https://github.com/google-gemini/gemini-cli/pull/29117) | **Open** | 实现 RFC 9207 `iss` 验证，防御授权服务器伪造导致的 Token 泄露。 | **安全/MCP/认证** ⭐⭐⭐⭐ |
| **#29116** | [fix(core): 缓解 NTFS 8.3 短文件名 (SFN) 路径遍历](https://github.com/google-gemini/gemini-cli/pull/29116) | **Open** | 规范化路径 & `AllowedPathChecker` 均处理 `git~1` 等短名，绕过黑名单风险。 | **安全/Windows/文件系统** ⭐⭐⭐⭐ |
| **#29120** | [fix(core): 改进 Web Fetch 目的地验证与连接路由](https://github.com/google-gemini/gemini-cli/pull/29120) | **Open** | 异步 DNS 校验 + Undici 直连解析地址 + 保留 TLS 验证，防 SSRF/劫持。 | **安全/网络/工具** ⭐⭐⭐⭐ |
| **#28971** | [fix(core): 保持截断后 MCP 工具名唯一性](https://github.com/google-gemini/gemini-cli/pull/28971) | **Open** | 修复 30+30 字符截断导致的工具名冲突（同前缀/后缀工具注册表覆盖）。 | **MCP/工具注册表** ⭐⭐⭐ |
| **#29106** | [fix(core): SSE 流 EOF 无尾随空行时刷新最终事件](https://github.com/google-gemini/gemini-cli/pull/29106) | **Open** | 修复流式响应截断丢失 `finishReason`/usage 元数据的静默失败。 | **核心/流式传输** ⭐⭐⭐ |
| **#29114** | [fix(core): 防止 Spawn 失败时重复执行 handleExit](https://github.com/google-gemini/gemini-cli/pull/29114) | **Open** | 子进程 `error`+`close` 双事件触发重入，加守卫标志位修复。 | **核心/Shell 执行** ⭐⭐⭐ |
| **#28955** | [Update deps, add MCP config, integrate ECC bundles](https://github.com/google-gemini/gemini-cli/pull/28955) | **Open** | 大型依赖升级 + MCP 配置体系重构 + ECC 集成，涉及面极广。 | **架构/依赖/MCP** ⭐⭐⭐ |
| **#29118** | [fix(extensions): 仅剥离尾部 .git 后缀](https://github.com/google-gemini/gemini-cli/pull/29118) | **Open** | 修复 `blog.github.io` 等含 `.git` 仓库名被错误截断。 | **扩展/解析** ⭐⭐ |

> **安全 PR 密集度极高**：今日 14 个活跃 PR 中 5 个为安全修复（含 1 个已合并入夜ly），覆盖配置、认证、文件系统、网络、供应链全链路。

---

## 5. 功能需求趋势（从 Issues 提炼）

1.  **Agent 编排与可靠性进化** ⭐⭐⭐⭐⭐
    - Subagent 状态机修正（终止原因、Turn 限制处理 #22323）
    - Generalist Agent 死锁根治 (#21409)
    - 技能/Subagent 自主调度能力增强 (#21968)
    - Browser Agent 生产级韧性（会话接管、锁恢复、Wayland、配置生效 #21983, #22232, #22267）

2.  **原生代码理解与工具化** ⭐⭐⭐⭐
    - AST 感知读取/搜索/映射工程化评估 (#19873, #22745, #22746)
    - 任务追踪器原生文件工具化 (#21000)
    - 减少临时脚本污染工作区 (#23571)

3.  **

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 ｜ 2026-08-29

---

## 1. 今日速览
- **发布修复版本 v1.0.82-1**，解决了认证失败时仅提示 `/login` 而不显示具体错误码（如 401）的体验问题。
- 社区高活跃度：**23 个 Issue 在 24h 内更新**，核心矛盾集中在 **Windows 兼容性、企业级认证/数据驻留、TUI 稳定性（文件监听泄漏/并行子代理卡死）以及 MCP 集成回归**。
- 新增 6 个 `triage` 标签 Issue，涉及最新 Windows 25H2 沙箱不支持、AltGr 键位吞噬、Shell 补全重复安装等环境适配细节。

---

## 2. 版本发布
### **v1.0.82-1** (2026-08-28 发布)
- **Fixed**: 认证失败时现在会显示具体的 HTTP 错误信息（如 `401 Bad credentials`），不再仅泛泛提示 `/login`，便于开发者快速定位凭证或网络问题。
- **关联链接**: [Release v1.0.82-1](https://github.com/github/copilot-cli/releases/tag/v1.0.82-1)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 重要性/社区反响 | 链接 |
|---|-------|----------|----------------|------|
| 1 | **#4612** Runaway FileWatch 事件循环冻结 TUI、日志暴涨 13GB | 长时间会话触发 Rust 运行时紧循环疯狂记录 `FileWatch` 事件，导致 UI 卡死、磁盘写满。 | 🔥 **P0 级稳定性缺陷**，7 条评论、1 👍，影响长会话开发者。 | [#4612](https://github.com/github/copilot-cli/issues/4612) |
| 2 | **#4480** Atlassian MCP OAuth 失败：`Incompatible authorization server` (1.0.79 回归) | 企业常用 Atlassian MCP 服务在 1.0.79 后因 RFC 8414 校验不通过无法连接，1.0.71 正常。 | 🔥 **企业级集成阻断**，6 👍，7 条评论，已关闭但需验证修复是否回港。 | [#4480](https://github.com/github/copilot-cli/issues/4480) |
| 3 | **#4165** Windows `copilot --resume` 冷启动卡死在 "Resuming session..." | Windows PowerShell 直接 resume 挂起，需先交互式启动再 resume 才能恢复。 | 🔥 **Windows 核心流程受阻**，5 条评论，1 👍，跨版本遗留。 | [#4165](https://github.com/github/copilot-cli/issues/4165) |
| 4 | **#4533** 并行子代理启动瞬间 TUI 停止消费事件（输入/滚动失效） | 运行时正常但 UI 线程阻塞，Prerelease 1.0.81-4/5 复现。 | 🔥 **并行能力与 UI 架构冲突**，4 条评论，阻碍复杂任务编排。 | [#4533](https://github.com/github/copilot-cli/issues/4533) |
| 5 | **#4527** GHE 数据驻留租户下 `copilot -p` 401：错误请求 `api.githubcopilot.com` 而非租户端点 | 非交互模式下模型目录获取走错域名，交互模式正常。 | 🔥 **企业数据合规场景失效**，4 👍，2 条评论。 | [#4527](https://github.com/github/copilot-cli/issues/4527) |
| 6 | **#4652** Windows 25H2 最新构建报 "Sandboxing not supported" | 实验性沙箱标识在新版 Windows 上误判不支持。 | ⚠️ **新平台适配滞后**，新增 Issue，0 评论。 | [#4652](https://github.com/github/copilot-cli/issues/4652) |
| 7 | **#4647** v1.0.81 破坏 `chroma-mcp` 兼容性 | MCP 服务器配置升级后无法加载 Chroma 向量检索插件。 | ⚠️ **MCP 生态回归**，1 条评论，影响 RAG 工作流。 | [#4647](https://github.com/github/copilot-cli/issues/4647) |
| 8 | **#4658** Shell 补全每次启动重装，含无 PATH 的 `--server` 头less 模式 | 启动性能损耗、污染服务端环境，Changelog 曾承诺修复但未生效。 | ⚠️ **工程化体验倒退**，新增 Issue。 | [#4658](https://github.com/github/copilot-cli/issues/4658) |
| 9 | **#4645** `session.resume` 静默忽略 `model` 参数，沿用旧模型 | 显式指定新模型无报错、无返回提示，实际推理仍用旧模型。 | ⚠️ **API 契约违背**，新增 Issue，隐患大。 | [#4645](https://github.com/github/copilot-cli/issues/4645) |
| 10 | **#1392** OmniSharp 大型 C# 方案 LSP 初始化超时，需可配置 `initializeTimeout` | 老牌 Issue（2 月创建）近期再获关注，大型项目语言服务不可用。 | 📈 **长尾需求高涨**，5 👍，3 条评论，企业级 .NET 刚需。 | [#1392](https://github.com/github/copilot-cli/issues/1392) |

---

## 4. 重要 PR 进展
| # | PR | 状态 | 核心变更 | 链接 |
|---|----|------|----------|------|
| 1 | **#4497** Handle fork PR associations in invalid-label writer | **CLOSED** | 修复 GitHub Actions 工作流中 Fork PR 缺少关联元数据时，`invalid-label` writer 误判的问题；补充通过可信 run metadata 搜索唯一开放 PR 的兜底逻辑。 | [#4497](https://github.com/github/copilot-cli/pull/4497) |

> **备注**：过去 24h 仅此 1 个 PR 更新，且为内部 CI 工具链修复，无用户可见功能变更。

---

## 5. 功能需求趋势（从 Issue 聚类分析）

1. **企业级认证与数据驻留合规** (#4527, #4650, #4654, #4480)  
   - 非交互模式 (`-p`) 与交互模式行为不一致；GHE/数据驻留租户端点解析错误；组织策略阻断第三方 MCP。
2. **Windows 原生体验补齐** (#4165, #4652, #4653, #4648)  
   - `--resume` 挂起、沙箱版本检测失效、AltGr 输入法吞键、TUI 渲染异常（输入框黑底）。
3. **TUI 架构稳健性** (#4612, #4533, #4648)  
   - 文件监听泄漏导致资源耗尽、并行子代理阻塞 UI 事件循环、渲染状态脏读。
4. **MCP 生态兼容性与可观测性** (#4480, #4647, #4189, #4649)  
   - OAuth 发现回归、工具 Schema 延迟加载成本统计不准、特定 MCP Server 版本锁定失败、Grok/Gemini 工具搜索策略分化。
5. **会话与上下文管理增强** (#4645, #3904, #2930, #4640)  
   - Resume 模型参数静默失效、云端查询失败阻断本地可用数据、企业禁用远程记忆下的本地自动记忆需求、Hook 在 steering 消息中缺失。
6. **大型项目语言服务支持** (#1392)  
   - LSP 初始化超时需可配置，阻碍大型单仓代码库分析。

---

## 6. 开发者关注点（痛点与高频诉求）

- **“交互模式能用，脚本模式挂”**：`-p`/`-agent` 等非交互入口在企业网络、代理、数据驻留场景下高频 401/端点错误，CI/CD 集成受阻。
- **“长会话不敢开”**：FileWatch 内存/日志泄漏 (#4612) 与并行子代理 UI 死锁 (#4533) 让开发者不敢在生产任务中持久运行。
- **“Windows 是二等公民”**：`--resume` 挂起、输入法不兼容、沙箱误报、渲染异常集中爆发，呼吁提升 Windows CI 权重。
- **“MCP 版本地狱”**：CLI 微版本升级即破坏第三方 MCP Server 兼容 (#4647)，缺乏兼容性矩阵或弃用预警。
- **“隐性契约失效”**：`session.resume` 忽略参数 (#4645)、Hook 跳过 steering (#4640)、Tool Search 统计虚高 (#4189) —— API 行为与文档/预期不符，调试成本高。
- **“工程化细节掉队”**：Shell 补全重复安装 (#4658)、大型项目 LSP 超时无配置项 (#1392) 等“纸切割”问题累积影响日效。

---

**下一步建议关注**：  
v1.0.82-1 后的首个稳定版是否回港 #4612/#4533 等 P0 稳定性修复；企业认证代理逻辑重构进度（关联 #4527/#4654）；Windows 25H2 适配时间表。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-08-29

---

## 1. 今日速览
- **安全事件修复**：发现并关闭严重安全漏洞 #2625，MCP 工具调用绕过内置敏感文件防护（如 `.env`、SSH 密钥），可导致任意文件读取，官方已确认并处理。
- **配额异常报告**：用户反馈 #2626 指出 `cache_read` 计费异常放大（>10倍），`cache_creation` 持续为 0，疑似计费逻辑或缓存机制故障，付费用户受影响严重。
- **依赖安全升级**：PR #2622 升级 `asyncssh` 至 2.23.1，修复两个高危漏洞（GHSA-2wxc-x7rj-hg8f, GHSA-qr67-gv47-xwwh），涉及 `pykaos` 工作区。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 关键点 | 为什么重要 | 链接 |
|---|------|------|--------|------------|------|
| **#2625** | **Security: MCP tool calls bypass built-in secret-file guards (arbitrary file read demonstrated)** | 🔴 **CLOSED** | **高危安全漏洞**。MCP 服务器可绕过 CLI 内置的敏感文件读取拦截（`.env`, SSH keys 等），且在 `auto-approve` 模式下无需用户确认。已提供 POC 证明可任意读取文件。 | 直接威胁用户本地凭证安全，涉及供应链攻击面（MCP Server），需立即升级/修复配置。 | [#2625](https://github.com/MoonshotAI/kimi-cli/issues/2625) |
| **#2626** | **Abnormal quota consumption: cache_read billed every turn with cache_creation always 0 (>10x amplification)** | 🟢 **OPEN** | **计费/配额异常**。付费用户报告 5 小时配额窗口内短时间消耗 40%，`cache_read` 持续计费但 `cache_creation` 恒为 0，导致配额放大 >10 倍。 | 核心商业模型（配额/计费）可靠性受损，付费用户信任度高风险，需紧急排查计费逻辑或上游 Token 统计。 | [#2626](https://github.com/MoonshotAI/kimi-cli/issues/2626) |
| **#2624** | **docs: openai_legacy hosted /v1 example (not openai_responses, not /login)** | 🟢 **OPEN** | **文档修正**。`openai_legacy` provider 配置易混淆：`type` 必须为 `openai_legacy`（非 `openai_responses`），Base URL 需指向 `/v1`，认证方式非 `/login` 流程。 | 降低第三方兼容模型（如本地部署、代理）的接入门槛，减少配置错误导致的支持压力。 | [#2624](https://github.com/MoonshotAI/kimi-cli/issues/2624) |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 变更摘要 | 影响范围 | 链接 |
|---|------|------|----------|----------|------|
| **#2622** | **deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f)** | 🟢 **OPEN** | 将 `packages/kaos/pyproject.toml` 中 `asyncssh` 从 2.21.1 升级至 2.23.1。修复两个 CVEs：GHSA-2wxc-x7rj-hg8f (潜在认证绕过/中间人) 及 GHSA-qr67-gv47-xwwh。 | `pykaos` 工作区（SSH/远程执行核心依赖），涉及远程开发、容器管理等依赖 SSH 的场景。 | [#2622](https://github.com/MoonshotAI/kimi-cli/pull/2622) |

---

## 5. 功能需求趋势
> 基于近期 Issue 模式（含历史积压）推断的社区关注焦点：

1.  **MCP 生态安全与沙箱化** (#2625)
    *   核心诉求：工具调用链路的**权限边界隔离**（文件系统、网络、密钥访问），以及 `auto-approve` 模式下的风险控制。
2.  **Token 计费透明化与缓存机制优化** (#2626)
    *   核心诉求：`cache_read`/`cache_write` 计费逻辑**可观测、可复核**；Prompt Caching 实际生效率暴露给用户。
3.  **多模型/厂商兼容性文档与开箱即用** (#2624)
    *   核心诉求：标准化 `openai_legacy`、`openai_responses` 等 Provider 配置模板，支持私有化部署、网关代理场景。
4.  **依赖链安全治理** (#2622)
    *   核心诉求：自动化依赖扫描（Dependabot/OSV）与关键路径（SSH、网络、FS）依赖的快速响应机制。

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点分类 | 典型反馈 | 优先级建议 |
|----------|----------|------------|
| **安全边界失效** | MCP 工具绕过内置 Guard，`auto-approve` 成高危开关；缺乏运行时沙箱/能力最小化机制。 | **P0 (阻断级)**：需引入 MCP 调用策略引擎（默认拒敏感路径、需显式授权）、审计日志。 |
| **配额/计费黑盒** | `cache_read` 无创建却持续扣费，配额耗尽无告警、无明细导出，用户无法自证/复核。 | **P0 (核心体验)**：增加 CLI 侧 `usage stats` 命令、Web 端实时仪表盘、缓存命中率指标。 |
| **Provider 配置碎片化** | 文档分散、示例过时、类型校验弱（`openai_legacy` vs `openai_responses` 易混淆）。 | **P1 (效率)**：提供 `kimi-cli provider init --interactive` 向导、JSON Schema 校验、配置诊断命令。 |
| **依赖安全响应滞后** | 依赖 `asyncssh` 高危漏洞存活期长，依赖外部贡献者提交 PR 修复。 | **P1 (工程效能)**：接入 OSV/Dependabot 自动化 PR、关键依赖锁版本策略、SBOM 导出。 |

---

> **备注**：本日报仅基于过去 24 小时 GitHub 公开数据（Issues/PRs）生成。安全漏洞 #2625 已关闭，建议用户立即检查本地 MCP 配置并拉取最新代码/二进制；配额异常 #2626 仍在调查中，付费用户建议暂避高频对话或联系客服冻结账单。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-08-29

---

## 1. 今日速览
今日 OpenCode 发布 **v1.18.25** 修复 Azure CLI 认证问题；社区核心关注点集中在 **模型响应延迟**、**TUI 内存泄漏**、**跨平台稳定性** 与 **自定义模型集成** 四大领域。贡献者 `kitlangton` 主导了 10+ 项核心重构，集中优化工具调用标识隔离、作业历史内存占用、代码模式解析等底层架构。

---

## 2. 版本发布
### **v1.18.25** ([Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.25))
- **Core Bugfix**: 修复 Azure 认证流程，Azure CLI 登录不再强制依赖 Bun 运行时。

---

## 3. 社区热点 Issues（精选 10 条）

| Issue | 状态 | 核心问题 | 社区热度 | 关键信息 |
|-------|------|----------|----------|----------|
| [#29079](https://github.com/anomalyco/opencode/issues/29079) GPT 模型响应极慢（秒级→分钟级） | ✅ Closed | GPT-5.4 等模型间歇性高延迟，简单指令也需数分钟 | 💬 119 👍 52 | 影响面广，涉及多模型变体，用户反馈“完全不可用” |
| [#42700](https://github.com/anomalyco/opencode/issues/42700) TUI 每次启动泄漏 ~21MB `.so` 至 `/tmp` | 🟢 Open | 临时文件累积填满 tmpfs，导致 TUI 启动失败 | 💬 7 | Linux/Arch 用户阻塞性 Bug，需尽快修复清理机制 |
| [#23461](https://github.com/anomalyco/opencode/issues/23461) `opencode upgrade` 因 403 失败，忽略 `GITHUB_TOKEN` | 🟢 Open | 代理/VPN 环境下匿名请求触发速率限制 | 💬 5 👍 2 | 企业级部署常见场景，需支持认证升级 |
| [#29397](https://github.com/anomalyco/opencode/issues/29397) 所有模型不明原因变慢，Esc 中断失效 | ✅ Closed | 全模型延迟 + 中断机制失灵 | 💬 6 👍 7 | 疑似底层流控或超时配置回归 |
| [#46088](https://github.com/anomalyco/opencode/issues/46088) 自建模型连接频繁 `ECONNRESET`（新建会话亦复现） | 🟢 Open | 上下文远未达限却频繁连接重置 | 💬 3 | **今日新增**，自建模型用户核心阻塞 |
| [#38366](https://github.com/anomalyco/opencode/issues/38366) 并发启动多实例导致 Bun 崩溃（macOS arm64） | 🟢 Open | 6-8 并发 TUI 实例启动触发 Segfault/SIGTRAP | 💬 2 | CI/并行开发场景高发，涉及 Bun 运行时兼容性 |
| [#34445](https://github.com/anomalyco/opencode/issues/34445) 更新重建数据目录导致历史会话丢失 | ✅ Closed | SQLite 迁移未携带旧数据，用户数据清零 | 💬 2 | 数据安全红线，已修复但需关注迁移测试 |
| [#34437](https://github.com/anomalyco/opencode/issues/34437) 大文件 Diff 导致渲染器冻结（同步解析阻塞 UI 线程） | ✅ Closed | C++ 大型项目 Diff 卡秒级 | 💬 2 | 性能瓶颈需异步化/分片处理 |
| [#34421](https://github.com/anomalyco/opencode/issues/34421) Solid.js 信号无限循环致渲染器挂死（v1.17.11） | ✅ Closed | 启动 3 分钟内必现，需强杀恢复 | 💬 2 | 响应式状态管理缺陷，已修复 |
| [#33976](https://github.com/anomalyco/opencode/issues/33976) 无法 @ 引用隐藏文件（非 `.gitignore` 所致） | ✅ Closed | 技能文件、配置文件无法快速引用 | 💬 3 | 开发体验细节，影响 Agent/Skill 工作流 |

---

## 4. 重要 PR 进展（精选 10 条）

| PR | 状态 | 类型 | 核心变更 | 影响范围 |
|----|------|------|----------|----------|
| [#46086](https://github.com/anomalyco/opencode/pull/46086) `feat(infra): deploy beta web app with SST` | ✅ Closed | 基建/新功能 | 引入 SST 部署 `beta.opencode.ai`，支持 v2 推广流程 | Web 端发布流程自动化 |
| [#46090](https://github.com/anomalyco/opencode/pull/46090) `fix(app): preserve Windows panel top outlines` | ✅ Closed | UI 修复 | 保留 1 CSS px 顶部绘制间距，防止 Windows 面板外轮廓被裁剪 | Windows 桌面端视觉修复 |
| [#6370](https://github.com/anomalyco/opencode/pull/6370) `fix: enable primary

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-29

---

## 1. 今日速览

- **v0.84.4 正式发布**，引入终端能力覆盖配置与扩展 UI 提示事件，修复了窄终端启动崩溃、扩展提供商注册时序、自动压缩触发时机等一批高优先级缺陷。
- 社区高呼声 Issue 集中在 **TUI 渲染稳定性**、**自动压缩机制**、**扩展生态完善** 三大方向，多个长期痛点（XDG 目录、Kitty 退格、技能自动补全）在今日集中闭环。
- 扩展系统迎来重要增强：启动期合成器、制品验证修复门控、变更日志支持、模型运行时暴露等 PR 密集合并，标志着扩展开发体验进入新阶段。

---

## 2. 版本发布

### v0.84.4 (2026-08-29)
[GitHub Release](https://github.com/earendil-works/pi/releases/tag/v0.84.4)

| 新增/改进 | 说明 |
|-----------|------|
| **终端能力覆盖** | 允许手动覆盖检测到的超链接、图片、True Color 支持，解决终端检测不准导致的渲染异常。[文档](https://github.com/earendil-works/pi/blob/v0.84.4/packages/coding-agent/docs/terminal-setup.md#capability-overrides) |
| **扩展 UI 提示事件** | 为扩展提供更细粒度的 UI 交互钩子，增强扩展对对话流的介入能力。 |

> 该版本同时包含今日合并的 10+ 修复型 PR，建议所有用户升级。

---

## 3. 社区热点 Issues（按关注度与影响力筛选）

| # | 标题 | 状态 | 👍/评论 | 核心痛点 | 关注理由 |
|---|------|------|---------|----------|----------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | auto-compaction never triggers after context grows past 100% until provider overflow | 🟢 CLOSED | 20/24 | 长会话上下文溢出前压缩不触发，导致 API 报错 | **高频生产事故**，已由 #8782 修复并回归测试覆盖 |
| [#8584](https://github.com/earendil-works/pi/issues/8584) | TUI row corruption during streaming: assistant text rendered one word per line | 🔴 OPEN | 9/22 | 长工具输出后流式文本逐词换行，严重影响可读性 | **核心交互体验阻断**，复现率高，尚无修复 PR |
| [#2870](https://github.com/earendil-works/pi/issues/2870) | Follow XDG Base Directory | 🟢 CLOSED | 52/20 | 配置目录污染 `$HOME`，不符合 Linux 规范 | **社区呼声最高老 Issue**（2 年+），今日终于落地 |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | PI_* guideline over-encourages unnecessary bash calls | 🔴 OPEN | 13/11 | 系统提示词导致模型频繁执行 `env` 检查，浪费 Token | **提示词工程副作用**，需在不破坏功能前提下优化 |
| [#8620](https://github.com/earendil-works/pi/issues/8620) | 0.84.3 bundled CLI: every global extension fails with "Cannot find module '@earendil-works/pi-coding-agent'" | 🔴 OPEN | 0/6 | 打包版 CLI 扩展模块解析失败，生态扩展全挂 | **阻断级回归**，影响所有扩展开发者与用户 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | Configurable thinking level/model for compaction | 🔴 OPEN | 0/9 | 压缩复用会话 thinking level，推理模型成本失控 | **成本控制刚需**，关联企业级采用决策 |
| [#8806](https://github.com/earendil-works/pi/issues/8806) | TUI crashes on narrow terminals (80-88 cols) - long skill lines exceed width | 🟢 CLOSED | 0/2 | 窄终端启动直接崩溃，技能行宽度超限 | **边缘场景崩溃**，已由 #8805 自适应截断修复 |
| [#8774](https://github.com/earendil-works/pi/issues/8774) | Compaction fails on OpenAI Responses models: tool_choice sent without tools (400) | 🟢 CLOSED | 0/2 | Responses API 压缩请求带 tool_choice 但无 tools 导致 400 | **特定 Provider 兼容性**，已修复 |
| [#8791](https://github.com/earendil-works/pi/issues/8791) | Expose the model runtime to extensions | 🟢 CLOSED | 3/1 | 扩展无法获取 ModelRuntime 创建隔离会话 | **扩展能力解锁**，已合并暴露只读属性 |
| [#8808](https://github.com/earendil-works/pi/issues/8808) | Prompt image attachments bypass resize pipeline; oversized pasted image + >20 images bricks session | 🟢 CLOSED | 0/1 | 粘贴大图绕过压缩管线，超 20 图导致 Anthropic 400 | **数据管线漏洞**，已补齐 resize 路径 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 类型 | 关键变更 | 关联 Issue |
|---|------|------|------|----------|------------|
| [#8812](https://github.com/earendil-works/pi/pull/8812) | fix: flush extension provider registrations before initial model resolution | 🟢 MERGED | 🐛 修复 | 扩展注册的 Provider 在会话初始模型解析前生效，解决间歇性落回默认 Provider | [#8810](https://github.com/earendil-works/pi/issues/8810) |
| [#8811](https://github.com/earendil-works/pi/pull/8811) | feat: add startup composer | 🟢 MERGED | ✨ 功能 | 引入 `StartupComposer`，启动期即可接受输入并保持状态进交互模式 | — |
| [#8805](https://github.com/earendil-works/pi/pull/8805) | fix(tui): adaptive truncate instead of crash on narrow terminals | 🟢 MERGED | 🐛 修复 | 渲染行超宽改为自适应截断而非抛异常，修复 80-88 列启动崩溃 | [#8806](https://github.com/earendil-works/pi/issues/8806) |
| [#8782](https://github.com/earendil-works/pi/pull/8782) | fix: compact before post-tool model requests | 🟢 MERGED | 🐛 修复 | 调整 `prepareNextTurn` 调用时机，阈值压缩在下一轮 Provider 请求前完成 | [#6879](https://github.com/earendil-works/pi/issues/6879) |
| [#8786](https://github.com/earendil-works/pi/pull/8786) | fix(tui): match skill commands by bare name in slash autocomplete | 🟢 MERGED | 🐛 修复 | 斜杠补全对技能命令仅匹配裸名，修复 `/idea` 误选 `skill:deep-research` | [#8813](https://github.com/earendil-works/pi/issues/8813) |
| [#8784](https://github.com/earendil-works/pi/pull/8784) | fix(ai): per-model max_tokens cap for MiniMax-M3 via OpenRouter/GMICloud | 🟢 MERGED | 🐛 修复 | 针对 MiniMax-M3 设置 524,288 上限，避免 400 报错 | — |
| [#8795](https://github.com/earendil-works/pi/pull/8795) | feat: add artifact verification repair gate | 🟢 MERGED | ✨ 功能 | 可选扩展：成功令牌延后至制品通过机器校验，失败自动进入有界修复轮次 | [#8796](https://github.com/earendil-works/pi/issues/8796) |
| [#8790](https://github.com/earendil-works/pi/pull/8790) | feat(coding-agent): extensions changelog | 🔴 OPEN | ✨ 功能 | `PiManifest` 新增 `changelogPath`，统一扩展变更日志发现与展示 | [#5958](https://github.com/earendil-works/pi/issues/5958) |
| [#8800](https://github.com/earendil-works/pi/pull/8800) | feat(tui): search improvements | 🔴 OPEN | ✨ 功能 | 搜索控制优化：`Ctrl+Shift+F` 切换、`Esc` 关闭、Alt 模式 UI 美化 | — |
| [#8572](https://github.com/earendil-works/pi/pull/8572) | feat(ai): amazon bedrock mantle | 🔴 OPEN | ✨ 功能 | 支持 Bedrock Mantle 新 API 面（GPT-5.x 等），解决 Converse 路由不兼容 | [#5363](https://github.com/earendil-works/pi/issues/5363) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 社

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-08-29

---

## 1. 今日速览

- **正式版 v0.22.3 发布**：引入 Channels 所有者级命名会话（每聊天最多 8 个持久任务）、守护进程扩展安装支持绝对本地路径、cua-driver-rs v0.20.2 预构建二进制全平台覆盖（macOS 经签名公证、Linux/Windows 提供 x86_64 与 arm64）。
- **Web Shell 与 VS Code 伴侣深度融合**：PR #9811 完成 WebShell UI 切换，多个跟进修复解决会话切换卡死、无限重渲染、语言检测失效、置顶会话分组丢失等核心体验问题。
- **审查与自动修复管线优化**：引入预验证去重（PR #10121）、收敛信号熔断（PR #10122）、超标文件检测修复（Issue #10322），显著提升大仓库审查效率与稳定性。

---

## 2. 版本发布

### v0.22.3 (Stable)
| 亮点 | 说明 |
|------|------|
| **Channels 命名会话** | 支持每聊天最多 8 个 owner-scoped 持久任务，便于并行多任务上下文管理 ([#10198](https://github.com/QwenLM/qwen-code/pull/10198)) |
| **守护进程扩展安装** | 仅接受绝对本地路径，拒绝相对路径，增强供应链安全 |
| **cua-driver-rs v0.20.2** | 全平台预构建：macOS 通用二进制经签名公证并打包为 `QwenCuaDriver.app`；Linux (glibc≥2.31) 与 Windows 提供 x86_64/arm64 无签名版；同步发布 `@qwen-code/cua-driver` npm 包 |

### v0.22.3-nightly.20260829.e5cb60ad48
- **Web Shell**：分支选择器旁新增 Git 状态提示 ([#10397](https://github.com/QwenLM/qwen-code/pull/10397))

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 为什么重要 | 社区反应 |
|---|-------|------------|----------|
| [#8124](https://github.com/QwenLM/qwen-code/issues/8124) | **启动横幅首帧缺顶行（Windows，间歇性）** | 影响首屏专业度，关联 provider 更新竞态 | 11 条评论，P2，标签 `welcome-pr`，亟需根因定位 |
| [#10075](https://github.com/QwenLM/qwen-code/issues/10075) | **`permissions.allow` 导致 edit/write_file 静默消失** | P1 阻塞性回归，配置允许列表后工具完全不可见 | 4 条评论，`status/ready-for-human`，需冒烟测试覆盖 |
| [#10380](https://github.com/QwenLM/qwen-code/issues/10380) | **OpenAI 兼容网关返回 413 导致自动压缩永久失效** | 长会话在反向代理体积限制下彻底不可用 | 3 条评论，P1，`scope/token-management`，影响生产可用性 |
| [#8432](https://github.com/QwenLM/qwen-code/issues/8432) | **Bailian Personal Token 模型列表不同步，图像/视频生成失败** | 官方模型列表滞后，直接阻断多模态能力 | 5 条评论，👍 1，`status/ready-for-human`，需同步模型清单 |
| [#10435](https://github.com/QwenLM/qwen-code/issues/10435) | **v0.22.3 在本地 llama-server 崩溃：grammar 解析失败** | 仅影响 llama.cpp 后端，其他 harness 正常 | 3 条评论，P2，`status/ready-for-human`，需兼容性矩阵测试 |
| [#10441](https://github.com/QwenLM/qwen-code/issues/10441) | **Review filter-screen 来源文件解析不展开 include 指令** | 安全边界：仓库级过滤规则可能被 include 隐藏 | 3 条评论，`category/security`，`status/ready-for-agent` |
| [#10373](https://github.com/QwenLM/qwen-code/issues/10373) | **Webview 硬编码 `lang="en"` 导致中文语言检测失效** | 国际化回归，影响中文用户体验 | 3 条评论，源自 PR #9811 审查机器人发现 |
| [#10406](https://github.com/QwenLM/qwen-code/issues/10406) | **守护进程不可达时 `connection.error` 触发无限重渲染循环** | 导致 Web Shell 彻底卡死，需重载恢复 | 3 条评论，源自 PR #9811 JHV 发现 |
| [#10391](https://github.com/QwenLM/qwen-code/issues/10391) | **置顶会话被排除在分组区外，显示 `· 0` 误导用户** | 侧边栏分组计数与实际成员不一致 | 3 条评论，PR #10416 已提出修复 |
| [#10448](https://github.com/QwenLM/qwen-code/issues/10448) | **无 `.git` 目录即禁止所有 Git 操作，Submodule 场景误伤** | 大型项目子模块常无 `.git` 但可执行 git 命令 | 2 条评论，新建今日，需放宽检查逻辑 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 |
|---|----|------|----------|------|
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | feat(memory) | **结构化按需回忆**：从扁平 prompt 升级为双层 ref/title 树 + 查询聚焦元数据子树 + 专用工具调用 | Open |
| [#10121](https://github.com/QwenLM/qwen-code/pull/10121) | perf(review) | **预验证去重**：新增 `qwen review dedup-candidates` 子命令，在 finder 合并后、verify 分片前按 ledger 去重 | Closed |
| [#10122](https://github.com/QwenLM/qwen-code/pull/10122) | feat(autofix) | **收敛信号熔断**：向外部发布机器可读的审查收敛代码，供 takeover 循环提前退出 | Open |
| [#9811](https://github.com/QwenLM/qwen-code/pull/9811) | refactor(vscode) | **WebShell UI 完整切换**：VS Code 伴侣彻底迁移至 Web Shell，工作区级 `qwen serve` + loopback 端口 + per-process token | Open (autofix/takeover) |
| [#10432](https://github.com/QwenLM/qwen-code/pull/10432) | feat(web-shell) | **Local Control 二维码入口**：聊天头部与分屏面板头部新增 QR 弹窗，一键配对移动端 | Closed |
| [#10416](https://github.com/QwenLM/qwen-code/pull/10416) | fix(web-shell) | **置顶会话分组可见性修复**：不再从分组列表中静默移除置顶会话，修复计数与成员显示 | Open |
| [#10007](https://github.com/QwenLM/qwen-code/pull/10007) | fix(core) | **跨平台 `O_NOFOLLOW` 保护**：新增 `openNoFollow` helper，在缺乏原生标志的平台上回退安全打开 | Open |
| [#10427](https://github.com/QwenLM/qwen-code/pull/10427) | fix(hooks) | **封闭四个 Hook 信任边界漏洞**：HTTP 跟随重定向、路径遍历、环境变量注入、网络外发未授权 | Open (autofix/takeover) |
| [#10455](https://github.com/QwenLM/qwen-code/pull/10455) | fix(cli) | **启动崩溃兜底**：输出语言规则文件不可写时不再抛出未捕获异常 | Open |
| [#10442](https://github.com/QwenLM/qwen-code/pull/10442) | ci(ecs) | **发布流水线等待 npm 传播**：ECS runner 更新前等待包发布生效，避免 v0.22.3 释出时 3/4 池失败 | Closed |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 核心诉求 |
|----------|---------------|----------|
| **Web Shell / VS Code 深度集成** | #9811, #10372, #10373, #10405, #10406, #10416, #10399 | 会话/工作区管理、Diff 交互、国际化、连接异常恢复、侧边栏概览 |
| **审查管线工程化** | #10121, #10122, #10105, #10106, #10322, #10441 | 去重、收敛熔断、大文件检测、安全过滤来源解析 |
| **多模态与模型生态同步** | #8432, #10435 | Bailian 模型列表同步、llama.cpp grammar 兼容性 |
| **会话/内存架构升级** | #10183, #8927, #9894, #10391 | 结构化记忆、会话轮转、显式作用域、置顶分组一

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*