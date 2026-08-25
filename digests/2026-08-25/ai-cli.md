# AI CLI 工具社区动态日报 2026-08-25

> 生成时间: 2026-08-25 00:54 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-08-25

---

## 1. 生态全景

当前 AI CLI 工具生态呈现 **“头部厂商强推原生体验、社区项目攻坚垂直场景、基础设施层共性痛点显性化”** 的三大特征：
- **稳定性成最大分水岭**：Claude Code、Codex、Copilot CLI 同日爆发认证、沙箱、原生二进制启动等 **P0 级回归**，暴露跨平台分发与会话状态管理的系统性脆弱性。
- **“Agent 编排”从概念走向工程化**：Gemini、Qwen、OpenCode、Pi 均在推进 Subagent 生命周期、工具调度、上下文压缩、多会话隔离的 **工程化落地**，不再停留于 Demo 阶段。
- **记忆/上下文系统成核心竞争力**：全系工具面临“长上下文成本失控、记忆加载黑盒、跨会话隔离与共享矛盾”，催生 **AST 感知工具、按模型差异化压缩、可观测的记忆元数据** 等硬核需求。
- **企业级落地刚需倒逼基建完善**：MCP/OAuth 认证兼容、RBAC 权限模型、审计日志、FinOps 计费属性、Windows 原生体验，成为区分 “玩具” 与 “生产力工具” 的关键指标。
- **国内厂商差异化突围**：Kimi 聚焦计费透明与长思维链成本控制，Qwen 攻坚架构重构与 IDE 集成深度，OpenCode/Pi 深耕 TUI 体验与多 Provider 兼容层，形成差异化护城河。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 新增/高热 Issues (Top 10 热度) | 重要 PR 活跃度 (近 24h) | 核心研发焦点 |
|------|--------------|-------------------------------|------------------------|--------------|
| **Claude Code** | v2.1.243 ⚠️**严重回归** | 10 (5 个 Segfault 阻塞性回归，👍4-6) | 3 (2 文档合入、1 基建开放) | 紧急修复 Linux glibc 兼容性、记忆系统可观测性、后台守护进程稳定性 |
| **OpenAI Codex** | `rust-v0.150.0-alpha.8` (Alpha) | 10 (认证回归 51💬/31👍、多代理泄漏、Windows 内核崩溃) | **10** (全为基建加固：启动竞态、重试、OTel、模块解耦) | 认证/会话可靠性专项、子代理资源回收、Windows/WSL 原生栈硬化 |
| **Gemini CLI** | v0.57.0-preview.1 (Patch) + Nightly | 10 (Subagent 虚假成功/挂起、Shell 卡死、Wayland 兼容) | **10** (核心修复密集：历史回滚、前缀缓存、安全清理、技能去重、Evals 基建) | Agent 编排可靠性、AST 沙箱原型、Auto Memory 质量治理、评测体系 |
| **GitHub Copilot CLI** | v1.0.81-9 (微增量) | 10 (MCP/OAuth 回归集中、交互白名单缺失、Windows worktree 锁、云会话不稳) | **1** (仅文档误改) | 企业级认证链路稳定、交互模式权限模型重构、Windows 文件锁语义适配 |
| **Kimi Code CLI** | 无 | **1** (计费争议 #1994 高热 7👍/8💬) | **1** (关键数据安全修复 #2595) | 计费透明化/Token 可控、文件编码安全、长 CoT 成本外部化治理 |
| **OpenCode** | v1.18.22 (Bugfix) | 10 (TUI Diff 回归高呼声、Ox Free 模型不可用、国内模型缺失、长会话上下文爆炸) | **10** (TUI 恢复、LSP 裁剪、FS 路由、Schema 校验、部分 JSON、中断恢复) | TUI 可视化稳定、免费模型 SLA、国内模型原生支持、v2 插件体系成熟度 |
| **Pi** | **v0.84.3** (功能性发布：PowerShell、安全更新) | 10 (Windows 原生痛点 44💬、压缩触发逻辑、Gemini 签名、llama.cpp 预设可见性) | **10** (按模型压缩配置、Gemini 签名修复、流中止、JSONL 修复、PowerShell 工具、Bedrock Mantle) | Windows 原生工具体验、多模型自适应压缩、Provider 兼容层边缘案例、启动性能 |
| **Qwen Code** | v0.22.0-nightly + cua-driver-rs v0.20.0 | 10 (流式超时高赞、架构重构 12 项进行中、MCP/ACP 稳定性、记忆泄漏、IDE 集成倒退) | **10** (动态模型列表、审查增量锚定、权限白名单生效、ACP 缓存隔离、多 Agent 消息边界、执行级验证) | 核心架构解耦、流式安全、MCP/ACP 生产级稳定、记忆生命周期、IDE 深度集成 |
| **DeepSeek TUI** | 数据缺失 | - | - | - |

> **活跃度判读**：Gemini、OpenCode、Pi、Qwen Code、Codex 保持 **日均 10+ 高质量 PR** 的高强度迭代；Claude Code 受阻于回归，PR 以文档为主；Copilot CLI 近 24h 代码交付近乎停滞；Kimi 处于 “关键 Bug 修复 + 计费争议响应” 双线并行。

---

## 3. 共同关注的功能方向（跨工具高频诉求）

| 共性方向 | 涉及工具 (≥3 家) | 具体诉求与典型 Issue |
|----------|------------------|----------------------|
| **认证/会话/凭证链路可靠性** | **Claude Code** (AWS SSO 挂起 #84878)、**Codex** (#39162 macOS 认证失效、#40267 刷新令牌不持久化)、**Copilot CLI** (#4490 Atlassian MCP OAuth 断裂、#4582 Entra ID scope 缺失)、**Pi** (Bedrock Mantle SSO #8573) | 跨平台、跨 IdP (Entra/Atlassian/AWS/ChatGPT)、跨入口 (CLI/App/Extension) 的 **令牌持久化、刷新竞态、发现文档校验** 系统性缺陷 |
| **子代理/多 Agent 资源生命周期管理** | **Codex** (#39694 完成态未回收触发误报限额、#35209 状态机卡顿)、**Gemini** (#22323 MAX_TURNS 虚假成功、#21409 Generalist 挂起)、**Qwen** (#9638 队友消息投递边界、#9895 作用域记忆任务)、**OpenCode** (#44798 长会话无压缩/移交) | **泄漏、状态机不完备、上下文压缩缺失、消息总线阻塞** — 长任务并发的硬性拦截器 |
| **上下文压缩与记忆系统可观测/可控** | **Claude Code** (#82056 auto-memory 加载状态不可见、#79217 硬编码限制)、**Gemini** (#26522 低信号会话无限重试、#26525 红动作滞后)、**Pi** (#8133/8592 按模型差异化压缩配置、#6879 压缩不触发)、**Qwen** (#9378 召回无上限遗忘有上限泄漏) | **“想知道加载了什么、想改阈值、想跨项目共享、想按模型窗口自适应”** — 统一指向 **元数据 API 与策略外部化** |
| **Windows 原生体验与文件/进程语义适配** | **Codex** (#37104 终端失败、#40119 沙箱内核崩溃)、**Copilot CLI** (#4593 worktree 归档 os error 32)、**Pi** (#7547 44💬讨论、#8512 PowerShell Tool、#8582 交互模式版本不一致)、**OpenCode** (隐性需求) | **PTY/信号量/文件锁/路径转换/原生 Shell** 全链路非 POSIX 语义导致的崩溃、挂起、数据损坏 |
| **MCP / 工具生态集成稳定性** | **Claude Code** (#87137 工具描述写死 URL 致缓存失效)、**Copilot CLI** (#4421 initialize 硬编码 60s 无重试、#4588 非 Anthropic 模型禁用工具搜索)、**Qwen** (#9944 HTTP 重连假成功、#9862 Token 缓存路由隔离)、**Pi** (#8573 Bedrock Mantle 路由) | **缓存一致性、重试预算、协议版本兼容、模型无关的工具发现** — 成熟度直接决定插件生态可用性 |
| **TUI/CLI 可观测性与可

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

---

# Claude Code Skills 社区热点报告（数据截止 2026-08-25）

---

## 1. 热门 Skills 排行（高关注度 PR）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **#1298** `skill-creator` 评估修复 | 修复 `run_eval.py` 在所有查询中报告 0% recall 的核心缺陷，涉及 Windows 管道读取、触发检测、并行 worker | 关联 Issue #556（12 条评论，7 👍），被视为阻断技能创建闭环的 **P0 级 Bug**；多位贡献者独立复现 | 🟢 OPEN |
| 2 | **#1628** `hivemind` 多智能体编排 | 让 Claude Code 将机械任务委托给 headless opencode workers（免费模型），自身仅作规划/审查/合并 | “昂贵模型上下文是稀缺资源”设计理念引发共鸣；涉及零成本扩展并行能力的架构创新 | 🟢 OPEN |
| 3 | **#1367** `self-audit` 推理质量门控 | 机械文件验证 + 四维推理审计（严重度优先），通用于任意项目/技术栈/模型 | 对标“交付前自检”刚需；Issue #1385（4 条评论）同源提出三阶段质量管线提案 | 🟢 OPEN |
| 4 | **#514** `document-typography` 排版质量控制 | 自动防范 AI 生成文档中的孤行、寡妇段、编号错位等排版通病 | “用户极少主动要求好排版，但人人需要” — 解决长文档输出的隐性痛点 | 🟢 OPEN |
| 5 | **#723** `testing-patterns` 测试全栈指南 | 覆盖测试金字塔/奖杯模型、AAA 模式、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 社区对“规范化测试实践”需求强烈；技能密度高、可直接落地到 CI | 🟢 OPEN |
| 6 | **#568** `servicenow` 平台级技能 | 覆盖 ITSM/ITOM/ITAM/SecOps/FSM/SPM/IntegrationHub 等全模块，面向企业级 ServiceNow 开发 | 企业级平台技能稀缺，维护者持续更新至 2026-08-12，显示长期投入意愿 | 🟢 OPEN |
| 7 | **#1615** `scnet-hpc` HPC 集群操作 | 基于 Profile 的 SSH/Slurm 工作流：连接、分区、模块、加速器指导、作业生成、集群发现 | HPC/科学计算场景刚需；近期新建（8 月），更新频繁 | 🟢 OPEN |
| 8 | **#83** `skill-quality-analyzer` / `skill-security-analyzer` 元技能 | 从结构、文档、安全、维护性、测试五维度评分 Skills；安全分析器覆盖注入、权限、数据泄露 | 解决“谁来审查 Skill 本身”的元治理需求；Issue #492（43 条评论）曝光的命名空间信任风险使其更迫切 | 🟢 OPEN |

> **注**：所有列出 PR 均为 **OPEN** 状态；GitHub 返回的评论数为 `undefined`，上表综合“关联 Issue 热度”“架构影响面”“维护者活跃度”排序。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **安全与信任边界** | #492 (43💬, 2👍) | 社区技能被发布在 `anthropic/` 命名空间下，伪装成官方技能，导致权限滥用风险 | 🔥 最高 |
| **组织级技能共享** | #228 (16💬, 8👍) | 在 Claude.ai 内原生支持组织级技能库/分享链接，避免手动下载/上传/Slack 传文件 | 🔥 高 |
| **技能创建工具链稳定性** | #556 (12💬, 7👍)、#1099、#1050 | `run_eval.py`/`run_loop.py` 在 Windows 上完全失效，导致描述优化循环伪造指标 | 🔥 高 |
| **上下文窗口治理** | #1487 (4💬)、#1385 (4💬) | `claude-api` 技能单次注入 156k tokens 耗尽上下文；需“预校准→对抗评审→交付验证”三阶段管线 | ⬆️ 上升 |
| **元治理与质量保障** | #83 (PR)、#202 (8💬, 已关闭)、#1367 (PR) | 技能创建技能需遵循最佳实践；引入自动化质量/安全分析器；交付前自检机制 | ⬆️ 上升 |
| **企业级/垂直领域技能** | #568 (PR)、#181 (PR)、#1615 (PR) | ServiceNow、SAP 基座模型、HPC 集群等企业/科研场景的深度集成 | 📈 持续 |
| **技能分发与互操作** | #16 (4💬)、#29 (4💬)、#189 (6💬, 9👍) | Skills 暴露为 MCP；Bedrock 兼容性；插件包去重（document-skills 与 example-skills 内容重复） | 📌 基建 |

---

## 3. 高潜力待合并 Skills（活跃讨论 + 近期更新）

| PR | Skill | 关键信号 | 预判落地窗口 |
|----|-------|----------|--------------|
| **#1298** | `skill-creator` 评估修复 | 关联最高热度 Issue #556；多贡献者并行修复（含 #1099、#1050）；阻断技能创建闭环 | **极高**（P0 阻断修复） |
| **#1628** | `hivemind` | 架构创新（零成本多智能体）；作者近期高频更新（8/21→8/24）；解决上下文稀缺核心矛盾 | **高**（8 月底前） |
| **#1367** | `self-audit` | 通用质量门控；同作者提出配套 Issue #1385；v1.3.0 版本暗示已迭代多轮 | **高**（7 月初创建，持续打磨） |
| **#723** | `testing-patterns` | 内容极其完整（单元/集成/E2E/契约/性能/混沌/变异）；维护者 4 月底仍在更新 | **中高**（文档型技能审查相对快） |
| **#514** | `document-typography` | 解决“隐性普遍痛点”；3 月初创建，3 月中仍在更新；无阻断性依赖 | **中高** |
| **#568** | `servicenow` | 企业级大技能；维护者持续维护 5 个月（至 8/12）；覆盖面广、企业采纳意愿强 | **中**（体量大，审查周期长） |
| **#83** | `skill-quality-analyzer` / `skill-security-analyzer` | 直接回应 #492 信任危机；元治理基建属性强；官方仓库可能优先纳入 | **中高**（战略价值高） |

---

## 4. Skills 生态洞察（一句话总结）

> **社区正从“单点技能堆砌”转向“技能工程化基建”：** 核心诉求聚焦于 **技能创建工具链的可靠性（Windows/评估修复）**、**信任边界与安全治理（命名空间隔离/元分析器）**、**组织级分发与上下文治理**，以及 **企业级/垂直场景的深度集成** —— 技能生态正在经历从“可用”向“可信、可管、可规模化”的关键跃迁。

---

**数据来源**：`anthropics/skills` 仓库 PR（前 20 条按评论数排序）+ Issues（前 15 条按评论数排序），截止 2026-08-25。所有链接均指向 GitHub 对应 PR/Issue 页面。

---

---

# 📰 Claude Code 社区动态日报 | 2026-08-25

## 1. 今日速览

**v2.1.243 发布引发 Linux 平台严重回归**：新版本在 glibc 2.44+ 环境下普遍出现启动即 `SIGSEGV`（`newlocale`/`free` 路径），已有 5 个高热度 Issue 确认该问题，疑似 mimalloc 符号导出冲突所致。与此同时，社区持续关注 **auto-memory 可见性与可配置性**、**后台会话/代理视图的稳定性**、**MCP 工具缓存失效** 等核心体验痛点。文档与示例层面，AWS 网关部署资产已合入，插件 MCP 作用域文档得到澄清。

---

## 2. 版本发布

### 🚀 v2.1.243 (2026-08-25)
| 变更 | 说明 |
|------|------|
| **Loops 使用量拆解** | `/usage` 新增 per-loop 统计：运行次数、总 tokens、单次均值、最近一次运行，便于识别失控或过度对话的循环任务 |
| **modelPicker 设置** | 允许自定义 `/model` 选择器的有序、带标签模型列表（支持任意 ID 拼写） |

> ⚠️ **已知阻塞性回归**：Linux x64 原生安装包在 glibc 2.44（CachyOS、Arch 等）上 **每次启动均 segfault**，含 `claude --version`。v2.1.241 及更早版本不受影响。详见下文热点 Issues。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 热度 | 核心内容 | 为什么重要 |
|---|-------|------|------|----------|------------|
| 1 | [#89360](https://github.com/anthropics/claude-code/issues/89360) | 🐛 Regression | 👍4·💬16 | **v2.1.243 Linux 启动即 Segfault**（含复现步骤） | **阻塞性回归**，影响所有 Linux 用户升级，需紧急回滚或热修复 |
| 2 | [#89334](https://github.com/anthropics/claude-code/issues/89334) | 🐛 Regression | 👍5·💬6 | **v2.1.242 起每次调用 segfault**（`mimalloc` 导出 glibc 符号、`newlocale` 预 main 调用 `free(NULL)`） | 根因分析最完整，定位到 **bundled mimalloc 版本化符号导出** 破坏 glibc 初始化顺序 |
| 3 | [#89371](https://github.com/anthropics/claude-code/issues/89371) | 🐛 Regression | 👍2·💬1 | **原生安装器 2.1.243 在 glibc 2.44 (CachyOS) 上 `newlocale/free` 启动崩溃** | 确认发行版无关，系 glibc 版本门槛问题 |
| 4 | [#89370](https://github.com/anthropics/claude-code/issues/89370) | 🐛 Regression | 👍6·💬3 | **`claude` 与 `install.sh` 均 segfault** | 安装器亦受影响，新用户无法落地 |
| 5 | [#89366](https://github.com/anthropics/claude-code/issues/89366) | 🐛 Regression | 👍1·💬3 | **确定性 SIGSEGV 于启动期**（`free/__newlocale/pthread_once`） | 提供完整 backtrace，辅助定位 |
| 6 | [#82056](https://github.com/anthropics/claude-code/issues/82056) | 🐛/💡 | 👍1·💬25 | **会话无法知晓 auto-memory 索引加载状态**（完整/截断/未加载） | 长期高关注，关乎上下文可靠性，社区呼吁暴露加载元数据 |
| 7 | [#79217](https://github.com/anthropics/claude-code/issues/79217) | 💡 Enhancement | 👍2·💬4 | **MEMORY.md 200 行/25KB 硬编码限制需可配置** | 大型项目常被截断，第三方替代方案盛行即佐证 |
| 8 | [#88579](https://github.com/anthropics/claude-code/issues/88579) | 💡 Enhancement | 👍1·💬1 | **持久化记忆“隐形、按目录隔离、不可验证”**——催生 91k⭐ 第三方替代品 | 直击产品核心差距，揭示用户真实工作流被迫外迁 |
| 9 | [#87137](https://github.com/anthropics/claude-code/issues/87137) | 🐛 Performance | 👍0·💬3 | **Bash tool description 写死 session URL → 每次 `/resume` 失效整个 prompt cache** | 直接增加 token 成本与延迟，属架构级缓存设计缺陷 |
| 10 | [#87891](https://github.com/anthropics/claude-code/issues/87891) | 🐛 Resource Leak | 👍0·💬2 | **后台守护进程不回收僵尸 worker/spare，六周泄漏 64 进程/7.1 GB** | 长运行环境稳定性隐患，运维无感知 |

> **其它值得关注**：Cowork 制品工具突发消失 [#89120](https://github.com/anthropics/claude-code/issues/89120)、AWS SSO 代理环境下认证挂起 [#84878](https://github.com/anthropics/claude-code/issues/84878)、模型“按时间劝退”行为 [#88489](https://github.com/anthropics/claude-code/issues/88489)、跨会话渲染泄漏 [#86860](https://github.com/anthropics/claude-code/issues/86860)。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心内容 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#79898](https://github.com/anthropics/claude-code/pull/79898) | ✅ Merged | **AWS 网关参考部署资产**（Bedrock + Claude Apps Gateway） | 企业级落地、云原生部署文档完善 |
| 2 | [#75252](https://github.com/anthropics/claude-code/pull/75252) | ✅ Merged | **文档：澄清插件 `mcpServers` 仅用于插件自带 MCP 定义，与用户级允许/拒绝列表分离** | 插件开发者配置困惑消除 |
| 3 | [#83890](https://github.com/anthropics/claude-code/pull/83890) | 🟢 Open | **新增 `pylint.yml`** | 代码质量基线、CI 规范化（社区贡献） |

> 本周 PR 活跃度较低，重心集中在文档与基建；核心修复预计将通过内部渠道以热补丁形式针对 v2.1.243 回归推送。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声核心 |
|----------|------------|--------------|
| **记忆系统可观测与可控** | #82056, #79217, #88579 | “我想知道加载了什么”、“我想改大小”、“我想跨项目共享” |
| **后台/代理会话生产级稳定** | #87891, #88017, #86764, #86860, #86654, #86688, #89184, #89316, #89319 | 泄漏、挂起、渲染串扰、上下文丢失、技能缺失——**多会话并发是刚需** |
| **MCP/工具链缓存与沙箱修复** | #87137, #87163, #50358 | Prompt cache 失效、网络白名单不生效、二进制截断 |
| **跨平台原生体验** | #89334/360/371/370/366, #74643, #84749, #87253 | Linux 启动崩溃、VSCode 扩展兼容、ARM 容器工具分发、Windows Cowork 缺失 |
| **模型行为可干预** | #88489 | 移除“家长式”时间感知、遵循显式指令 |
| **协作制品完整性** | #89120 | `create/update/list_artifact` 突发不可用，破坏远程开发流 |

---

## 6. 开发者关注点·痛点总结

| 痛点类别 | 高频反馈 | 典型场景 |
|----------|----------|----------|
| **发布质量把关** | “每两周必有一版 Linux 不可用”、“install.sh 也崩” | CI/CD 镜像构建失败、新成员入职卡安装 |
| **记忆系统“黑盒”** | 无法校验加载结果、硬编码截断、目录隔离导致跨仓库上下文断裂 | 单体仓/多仓混合工作流、长周期特性分支 |
| **后台会话不可信** | 进程泄漏、PTY 损坏、技能丢失、跨会话渲染污染 | Fleet/代理视图长跑任务、多终端协作 |
| **Prompt Cache 易碎** | 会话级 URL 写死工具描述 → resume 即全量重读 | 频繁上下文切换、成本敏感团队 |
| **沙箱/权限形同虚设** | `strictAllowlist` 不生效、hook 误报拦截 | 合规要求严格的企业环境 |
| **文档滞后于实现** | 插件 MCP 作用域、Cowork 制品 API 变更无通知 | 二次开发、集成维护成本高 |

---

## 🔮 后续关注建议

1. **v2.1.243 热修复/回滚时间表** —— 关注 `#89334` `#89360` 官方回应与里程碑
2. **Auto-memory 元数据 API** —— 若 `#82056` 落地，将解锁大量上下文工程场景
3. **后台守护进程生命周期重构** —— `#87891` `#86764` 等 Issue 指向同一架构债
4. **模型行为策略外部化** —— `#88489` 暗示需在系统提示层提供开关

---

*数据来源：github.com/anthropics/claude-code | 报告生成：2026-08-25 08:00 UTC*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-08-25

---

## 1. 今日速览

- **核心版本推进**：发布 `rust-v0.150.0-alpha.8`，继续 Alpha 迭代；无稳定版发布。
- **认证与会话稳定性成最大痛点**：macOS 上打开既有会话导致 ChatGPT 认证失效（#39162，51 条评论、31 👍）、线程恢复即登出且刷新令牌未持久化（#40267）等高热度 Issue 集中爆发，暴露桌面端 auth 流程的系统性缺陷。
- **子代理/多代理资源泄漏与 Windows 沙箱崩溃** 持续发酵：完成的子代理未回收触发误报限额（#39694、#35209），Windows 沙箱助手 0xc0000142 甚至触发内核崩溃（#40119），跨平台稳定性压力陡增。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| `rust-v0.150.0-alpha.8` | Alpha | 常规 Alpha 迭代，未附带详细变更日志；建议关注后续 Release Notes 确认修复是否包含今日高频 Bug。 |

> 🔗 [Release 页面](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 核心问题 | 为何关键 |
|---|-------|------|----------|----------|
| 1 | [#39162](https://github.com/openai/codex/issues/39162) macOS 打开既有会话导致 ChatGPT 认证失效并跳转登录 | 51 💬 / 31 👍 | 26.814.41407 版本回归，上一版本 26.810.52044 正常 | **阻断级**：直接导致桌面端不可用，波及所有 ChatGPT 认证用户 |
| 2 | [#35097](https://github.com/openai/codex/issues/35097) `gpt-5.6-luna` 被标记为 MultiAgent V1，导致 V2 `spawn_agent` 拒绝 | 29 💬 / 51 👍 | 模型元数据分类错误，阻断多代理协作 | **核心功能受阻**：MultiAgent V2 是当前主推架构，模型目录元数据维护滞后 |
| 3 | [#39903](https://github.com/openai/codex/issues/39903) 请求增加选项禁用 “Ran N commands” 折叠，始终显示执行命令 | 21 💬 / 36 👍 | TUI/CLI 可观测性不足，调试时需手动展开 | **开发体验强诉求**：36 👍 显示社区对透明化执行流的高呼声 |
| 4 | [#37104](https://github.com/openai/codex/issues/37104) Windows/WSL 集成终端静默失败，底部/侧边面板无法打开 | 19 💬 / 9 👍 | PTY/WSL 启动链路断裂，Desktop 渲染层异常 | **Windows 优先级**：Store 版用户无法使用终端核心能力 |
| 5 | [#40267](https://github.com/openai/codex/issues/40267) macOS 线程恢复即登出：旋转刷新令牌未写入 `auth.json`，全新登录 76 秒失效 | 7 💬 / 0 👍 | 令牌持久化竞态 + 刷新流程 401 处理缺陷 | **认证链路系统性风险**：与 #39162 同根同源，需统一修复 |
| 6 | [#39694](https://github.com/openai/codex/issues/39694) 完成的子代理线程未回收，触发虚假 “agent thread limit reached”（1 Active / 12 Done） | 5 💬 / 0 👍 | 资源泄漏导致并发限额误判 | **多代理可用性**：长任务必现，阻断复杂工作流 |
| 7 | [#35209](https://github.com/openai/codex/issues/35209) Codex App：子代理 `task_complete` 后仍停留在 Active/Working 状态 | 5 💬 / 2 👍 | 状态机未正确转入终态 | 同根问题，配合 #39694 说明子代理生命周期管理缺失 |
| 8 | [#40394](https://github.com/openai/codex/issues/40394) Computer Use / Chrome 控制突然失效 | 4 💬 / 0 👍 | 26.816.41509 版本回归，无报错仅静默失败 | **新能力回归**：Computer Use 为差异化功能，稳定性直接影响竞品对比 |
| 9 | [#40119](https://github.com/openai/codex/issues/40119) Codex 命令运行器在 Windows Insider 26340.9233 触发内核崩溃 | 3 💬 / 0 👍 | 沙箱/命令执行层触发系统级 Bugcheck | **安全/稳定性红线**：内核崩溃属 P0 级，需与 Windows 团队联合排查 |
| 10 | [#33266](https://github.com/openai/codex/issues/33266) MCP `tools/list_changed` 通知未使工具缓存失效，导致工具列表陈旧 | 5 💬 / 4 👍 | 动态工具发现机制失效 | **生态集成**：MCP 为扩展核心，缓存一致性直接影响插件可用性 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#40504](https://github.com/openai/codex/pull/40504) Route cyber Trusted Access links by plan type | Closed | 按订阅分流 Trusted Access 落地页 | 企业/个人合规路由，安全策略收敛 |
| 2 | [#40502](https://github.com/openai/codex/pull/40502) Collapse home paths in AGENTS.md status summaries | Closed | `/status` 中主目录路径显示为 `~` | CLI 可读性提升，减少路径泄露 |
| 3 | [#40501](https://github.com/openai/codex/pull/40501) Deduplicate plugin skills in unified mentions | Closed | `@` 搜索去重插件技能，新增 `pluginId` 字段 | 插件生态检索体验优化 |
| 4 | [#40499](https://github.com/openai/codex/pull/40499) Harden startup rollout migration against concurrent updates | Closed | 启动时等待 rollout 归档/压缩完成，防止竞态 | 启动稳定性，解决并发损坏隐患 |
| 5 | [#30621](https://github.com/openai/codex/pull/30621) Trace startup WebSocket prewarm | Closed | 预热任务继承 trace context，新增 span | 可观测性基建，助力启动性能分析 |
| 6 | [#30690](https://github.com/openai/codex/pull/30690) Retry compressed requests uncompressed | Closed | HTTP 400 含 `x-openai-retry-uncompressed: true` 时自动重试 | 网络弹性，减少压缩兼容性导致的失败 |
| 7 | [#30765](https://github.com/openai/codex/pull/30765) Enable tool search for fallback models | Closed | 合成 fallback 模型元数据时启用 `tool_search` | 模型回退不再丢失工具调用能力 |
| 8 | [#40498](https://github.com/openai/codex/pull/40498) Increase app-server model refresh interval to 4m30s | Closed | 后台刷新 3min → 4min30s | 降低上游压力，减少不必要的模型目录轮询 |
| 9 | [#40488](https://github.com/openai/codex/pull/40488) Export turn cost as OTEL metric `codex.turn.cost_microusd` | Closed | 以微美元计数器导出，含 turn/conversation/speed 等属性 | 成本可观测，支持 FinOps 与配额管理 |
| 10 | [#40487](https://github.com/openai/codex/pull/40487) Extract agent role loading into `codex-agent-roles` crate | Closed | 角色配置解析/发现/校验独立 crate | 架构解耦，便于多入口复用与单测 |

> **趋势提示**：近 24 h 合并 PR 多为 **基础设施加固**（启动竞态、网络重试、可观测性、模块解耦），直接回应近期高频稳定性投诉；功能类 PR 以去重、路由、可读性等 **体验打磨** 为主。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 方向 | 代表 Issue | 社区呼声特征 |
|------|------------|--------------|
| **认证/会话可靠性** | #39162, #40267, #17354 | 🔥 **最高优先级**：多平台、多入口（App/CLI/Extension）同现，用户信任度受损 |
| **子代理/多代理资源管理** | #39694, #35209, #32353, #21777 | 🔥 **高频**：泄漏、状态机错误、上下文压缩暴露控制需求，长任务刚需 |
| **Windows/WSL 原生体验** | #37104, #39841, #39933, #34928, #40119 | 🔥 **集中爆发**：终端、沙箱、内核崩溃、IDE 扩展全链路受阻 |
| **TUI/CLI 可观测与可控性** | #39903, #35746, #34289, #40495, #40492 | 📈 **持续增长**：命令折叠、历史分页、Hook 失败信号缺失、线程命名自动化 |
| **MCP / 插件生态完善** | #33266, #39858, #40501 | 📈 **稳步上升**：缓存一致性、Hook 错误处理、技能去重 |
| **Computer Use / 浏览器自动化** | #40394, #39280, #29128 | 🌱 **早期反馈**：策略校验失败、Chrome 标签页控制脆弱，差异化功能需硬化 |
| **IDE 扩展多视图/多会话** | #36873, #38351 | 🌱 **专业用户诉求**：VS Code 多实例、GitHub @codex 工作流推送权限 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“能不能先把登录和会话修稳？”**  
   - macOS/Windows 双平台认证回归，刷新令牌持久化、轮询器 401 处理、跨入口会话同步（App vs CLI vs Web）均有缺陷。**认证是信任基石，建议设为 P0 专项攻坚。**

2. **子代理并发限额“误报”阻断长任务**  
   - 完成态未回收、队列消息占槽（#32353）、`task_complete` 状态机卡顿，导致“1 Active / 12 Done”仍报限额。**需补全生命周期回收 + 显式 `release` API。**

3. **Windows 沙箱与终端堆栈脆弱**  
   - 0xc0000142、内核崩溃、WSL PTY 启动失败、Store 版权限模型冲突。**建议引入 Windows 专项 CI（含 Insider 预览版）并建立沙箱健康度指标。**

4. **TUI/CLI “所见即所得”调试视图**

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-25

---

## 1. 今日速览

*   **版本迭代**：发布 **v0.57.0-preview.1** 修复补丁版本，同时推出每日夜ly构建 **v0.56.0-nightly**；核心修复集中在历史记录回滚、重试提示优化及中断响应占位符持久化问题。
*   **核心攻坚**：社区高优先级 Issue 聚焦于 **Subagent 稳定性**（MAX_TURNS 误报成功、Generalist Agent 挂起、Browser Agent Wayland 兼容）、**Shell 执行卡死** 及 **Auto Memory 系统质量** 提升。
*   **工程化建设**：PR 活跃度高，重点在于 **前缀缓存优化**（重试提示移入 contents）、**安全加固**（环境变量清理、Git 配置一致性）、**CLI 文档完善** 及 **技能/扩展系统** 的去重与权限控制。

---

## 2. 版本发布

### **v0.57.0-preview.1** (Preview Patch)
*   **性质**：针对 `v0.57.0-preview.0` 的热修复版本。
*   **核心变更**：Cherry-pick 提交 `812f7a2`（来自 PR #28934），修复**历史记录回滚**与**重试提示优化**，旨在防止上下文窗口膨胀、减少 API 请求量、最大化重试时的前缀缓存效率。
*   **链接**：[Release v0.57.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/29024)

### **v0.56.0-nightly.20260824.g5411f113c** (Nightly)
*   **性质**：每日自动化构建，包含最新主分支代码。
*   **链接**：[Nightly Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c)

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 核心痛点/价值 | 关注度 | 链接 |
|---|-------|---------------|--------|------|
| 1 | **#22323** Subagent 恢复机制缺陷 | **P1/Bug**：`codebase_investigator` 在触及 `MAX_TURNS` 限制时仍上报 `GOAL success`，导致中断被隐藏，严重影响调试可信度。 | 👍 2 / 💬 13 | [查看](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **#21409** Generalist Agent 挂起 | **P1/Bug**：委托给 Generalist Agent 时无限挂起（即使简单建文件夹），禁用 Subagent 可规避，阻塞核心工作流。 | 👍 8 / 💬 8 | [查看](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 3 | **#25166** Shell 命令执行卡死 "Waiting input" | **P1/Bug**：简单命令执行完毕后 CLI 仍显示 "Awaiting user input" 挂起，高频发生，严重破坏交互体验。 | 👍 3 / 💬 4 | [查看](https://github.com/google-gemini/gemini-cli/issues/25166) |
| 4 | **#21983** Browser Subagent 在 Wayland 下失败 | **P1/Bug**：Browser Agent 在 Wayland 环境下直接报错 `GOAL` 失败，Linux 桌面端兼容性缺失。 | 👍 1 / 💬 4 | [查看](https://github.com/google-gemini/gemini-cli/issues/21983) |
| 5 | **#26522** Auto Memory 低信号会话无限重试 | **P2/Bug**：提取 Agent 跳过低信号会话导致其永远标记为“未处理”，反复被拉起，资源浪费。 | 👍 0 / 💬 5 | [查看](https://github.com/google-gemini/gemini-cli/issues/26522) |
| 6 | **#19873** 利用模型 Bash 亲和性 (AST Sandbox) | **P2/Feature (Large)**：提议引入零依赖 OS 沙箱及 AST 感知工具，释放 Gemini 3 原生 Bash 链式操作能力，架构级增强。 | 👍 1 / 💬 8 | [查看](https://github.com/google-gemini/gemini-cli/issues/19873) |
| 7 | **#22745** 评估 AST 感知文件读/搜索/映射价值 | **P2/Epic**：跟踪 AST 工具（如 tilth/glyph）对 Token 效率、精准读取的量化评估，关联代码库调查 Agent 改进。 | 👍 1 / 💬 7 | [查看](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 8 | **#21968** 模型主动使用 Skills/Subagents 不足 | **P2/Bug**：模型极少自发调用自定义 Skill/Subagent，需显式指令触发，工具发现与规划机制待优化。 | 👍 0 / 💬 6 | [查看](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 9 | **#22672** Agent 需避免破坏性操作 | **P2/Feature**：模型在复杂 Git/DB 操作中倾向使用 `--force`/`reset` 等高危命令，需注入安全护栏或偏好安全替代方案。 | 👍 1 / 💬 3 | [查看](https://github.com/google-gemini/gemini-cli/issues/22672) |
| 10 | **#29032** `confirm_action` 斜杠命令重复触发遥测/历史 | **Bug (New)**：确认流程递归调用导致历史重复记入、遥测双发，轻量级核心逻辑修复。 | 👍 0 / 💬 1 | [查看](https://github.com/google-gemini/gemini-cli/issues/29032) |

---

## 4. 重要 PR 进展 (Top 10)

| # | PR | 类型 | 核心内容 | 状态 | 链接 |
|---|----|------|----------|------|------|
| 1 | **#28934** | **Optimization (Large)** | **历史记录回滚 & 重试提示优化**：工具取消时回滚而非追加合成响应；重试提示移入 `contents` 保留前缀缓存。已合入 v0.57.0-preview.1。 | **CLOSED** | [查看](https://github.com/google-gemini/gemini-cli/pull/28934) |
| 2 | **#28914** | **Fix (Core)** | **前缀缓存保护**：将重试提示从 `systemInstruction` 移至 `contents` 数组末尾，确保静态前缀缓存命中，模型即时感知恢复提示。 | **OPEN** | [查看](https://github.com/google-gemini/gemini-cli/pull/28914) |
| 3 | **#28939** | **Fix (P1)** | **清理中断占位符**：修复中断工具响应后持久化 `[The previous response was interrupted...]` 导致后续轮次污染上下文的问题。 | **OPEN** | [查看](https://github.com/google-gemini/gemini-cli/pull/28939) |
| 4 | **#28938** | **Fix (P1/Security)** | **Git 配置环境变量一致性**：防止 `GIT_CONFIG_*` 编号键值对被红动作后变为不可解析状态；阻止 Shell 服务恢复敏感 Git 配置。 | **OPEN** | [查看](https://github.com/google-gemini/gemini-cli/pull/28938) |
| 5 | **#28863** | **Fix/Security (Extensions)** | **扩展环境变量同意与清理**：MCP 服务器环境变量变更需用户同意；清理运行时篡改型环境变量，堵塞供应链攻击面。 | **OPEN** | [查看](https://github.com/google-gemini/gemini-cli/pull/28863) |
| 6 | **#29018** | **Fix (Security)** | **A2A Server 安全清理**：移除误导性 `securitySchemes` 与硬编码凭证，元数据准确反映本地开发无认证设计。 | **OPEN** | [查看](https://github.com/google-gemini/gemini-cli/pull/29018) |
| 7 | **#28961** | **Fix (Core/Policy)** | **写入策略安全检查器声明修正**：修正 TOML 中 `AllowedPathChecker` 定义层级，确保策略加载时正确注册。 | **CLOSED** | [查看](https://github.com/google-gemini/gemini-cli/pull/28961) |
| 8 | **#29017** | **Fix (Extensions)** | **技能目录去重**：修复 Windows Junction / POSIX Symlink 导致 `.gemini` 与 `.agents` 重复发现技能的问题。 | **OPEN** | [查看](https://github.com/google-gemini/gemini-cli/pull/29017) |
| 9 | **#29019** | **Feature (Evals)** | **从会话日志生成可评测草案**：新增 `eval:from-log` 命令，将真实交互转为行为评测起点，解决“日志只记录结果不记录预期”痛点。 | **OPEN** | [查看](https://github.com/google-gemini/gemini-cli/pull/29019) |
| 10 | **#29022** | **Feature (Core/Tool)** | **保留 `ask_user` 问题至文本历史**：新增 `ui.keepAskUserQuestionsInHistory` 设置，回答后保留问题上下文，利于会话恢复与复盘。 | **OPEN** | [查看](https://github.com/google-gemini/gemini-cli/pull/29022) |

---

## 5. 功能需求趋势洞察

从近 50 条 Issue 更新中提炼出的社区核心诉求：

1.  **Agent 编排与可靠性 (Top Priority)**
    *   **Subagent 生命周期管理**：终止原因上报准确性 (#22323)、挂起恢复 (#21409)、配置覆盖生效 (#22267)、轨迹可视化 (#22598)。
    *   **工具调度智能化**：模型主动发现/使用 Skills (#21968)、工具数量爆炸导致 400 错误 (#24246)、破坏性操作抑制 (#22672)。

2.  **原生代码交互能力增强 (Architectural Shift)**
    *   **AST 感知工具链**：多 Issue (#19873, #22745, #22746, #19561) 趋同于引入 AST 级读写/搜索/映射，旨在替代粗粒度 `cat`/`grep`，大幅降低 Token 消耗并提升精度。
    *   **零依赖沙箱**：探索在安全前提下赋予模型原生 Bash 执行权 (#19873)。

3.  **长期记忆与上下文工程**
    *   **Auto Memory 质量治理**：去噪 (#26522)、安全红动作 (#26525)、无效补丁隔离 (#26523)、整体 Bug 修复 (#26516)。
    *   **历史/上下文完整性**：保留交互细节 (#29022)、修正转义符行为 (#22466)、调整大小性能 (#21924)。

4.  **平台兼容与基础设施**
    *   **Wayland 支持** (#21983)、**Symlink/Junction 兼容** (#20079, #29017)、**ACP 协议文档修正** (#29011, #29013)。

5.  **评测体系建设**
    *   从日志生成评测草案 (#29019)、修正冗余评测 (#23313)，体现向数据驱动质量保障转型。

---

## 6. 开发者关注点与痛点总结

| 维度 | 高频反馈 / 痛点 | 代表性 Issue/PR |
|------|-----------------|-----------------|
| **稳定性** | **Shell 卡死**、**Agent 无限挂起**、**中断状态污染上下文** 是最直接阻塞日常使用的 Bug。 | #25166, #21409, #28939 |
| **可信度** | Subagent **虚假成功上报** 导致开发者无法信任自动化流程结果；Browser Agent **配置不生效** 破坏可配置性预期。 | #22323, #22267 |
| **易用性** | 模型**不会主动用好工具**，需人工干预；交互式 CLI (如 Vite 初始化) **无法自动应答**；Symlink 配置**不生效**。 | #21968, #22465, #20079 |
| **安全性** | Auto Memory **红动作时机滞后** (已入上下文)；扩展/MCP **环境变量注入风险**；A2A **硬编码凭证**。 | #26525, #28863, #29018 |
| **性能/成本** | 上下文膨胀 (历史记录策略)、工具过多触发 400、缺乏 AST 精准读取导致 Token 浪费。 | #28934, #28914, #24246, #19873 |
| **可观测性** | `/bug` 报告**缺失 Subagent 上下文**；Subagent 轨迹**无法分享/复盘**；缺乏从真实日志生成评测的工具。 | #21763, #22598, #29019 |

---

> **分析师注**：当前版本迭

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-08-25

---

## 1. 今日速览

今日核心动态集中在 **MCP OAuth 认证体系的持续修复** 与 **交互模式体验的完善**。v1.0.81-9 发布，新增模型数据保留警告提示；社区高呼声 Issue 聚焦于 MCP 与 Entra ID/OAuth 兼容性回归、交互模式工具白名单缺失、Windows 工作树锁死以及云会话连接不稳定。整体呈现“企业级认证链路不稳、本地交互体验待打磨”双主线特征。

---

## 2. 版本发布

### v1.0.81-9 (2026-08-24)
- **改进**：在 `/model` 选择器中展示模型数据保留警告及关联链接，增强合规透明度。  
- **链接**：[Release v1.0.81-9](https://github.com/github/copilot-cli/releases/tag/v1.0.81-9)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心痛点 | 社区热度 | 关键信号 |
|---|-------|----------|----------|----------|
| 1 | [#1274](https://github.com/github/copilot-cli/issues/1274) **CLI 频繁 400 Invalid Request Body** | 代码审查场景下 95% 请求失败，疑似请求体构造或服务端校验 regression | 👍11 · 评论27 | **阻塞性 Bug**，涉及核心用例，需优先排查请求序列化与服务端 schema 变更 |
| 2 | [#1973](https://github.com/github/copilot-cli/issues/1973) **交互模式工具白名单** | 只能全量放行或逐个确认，读操作（grep/cat/git log）仍需手动批准 | 👍27 · 评论12 | **高呼声功能需求**，直接影响自动化工作流效率，社区期待细粒度权限模型 |
| 3 | [#4490](https://github.com/github/copilot-cli/issues/4490) **Atlassian MCP OAuth 在 1.0.80 断裂 (RFC 8414 §3.3)** | Issuer 校验不通过，1.0.78 正常，1.0.80 回归 | 👍0 · 评论5 | **企业级集成阻断**，OAuth 发现文档校验逻辑收紧导致兼用性断裂 |
| 4 | [#4582](https://github.com/github/copilot-cli/issues/4582) **Entra ID 静态 oauthClientId 缺少 scope 参数 (AADSTS900144)** | 授权请求漏传 scope，导致 Entra ID 拒绝 | 👍0 · 评论2 | 同根同源的 **OAuth 参数构造缺陷**，影响 Microsoft 生态用户 |
| 5 | [#4421](https://github.com/github/copilot-cli/issues/4421) **MCP initialize 硬编码 60s 超时且无重试** | npx 启动 stdio 服务器 ~29% 会话失败且不可恢复 | 👍0 · 评论2 | **架构级稳定性短板**，建议引入可配置预算 + 指数退避重试 |
| 6 | [#4566](https://github.com/github/copilot-cli/issues/4566) **Agent 反复确认却不执行工具** | gpt-5.3-codex 下出现“空转”现象 | 👍1 · 评论2 | 可能涉及模型输出解析或工具调度循环异常，需结合模型版本定向复现 |
| 7 | [#4593](https://github.com/github/copilot-cli/issues/4593) **Windows 归档 worktree 失败 (os error 32)** | 进程树未停即删除 worktree，导致文件占用 | 👍0 · 评论1 | **平台特有资源清理顺序问题**，Windows 文件锁语义更严格 |
| 8 | [#4568](https://github.com/github/copilot-cli/issues/4568) **`--cloud` owner picker 卡死 / 429 / 重连崩溃** | 多症状连环：加载挂起、任务超时、轮询限流 | 👍0 · 评论1 | 云端会话编排链路脆弱，涉及控制面与数据面协同 |
| 9 | [#4224](https://github.com/github/copilot-cli/issues/4224) **子 Agent OTel spans 缺失计费属性** | 导致外部成本核算低估实际消耗 | 👍1 · 评论3 | **可观测性缺口**，影响企业 FinOps 落地 |
| 10 | [#4588](https://github.com/github/copilot-cli/issues/4588) **非 Anthropic 模型禁用工具搜索 (MCP tool deferral)** | 空提示词 21.6k vs 47k tokens，成本翻倍 | 👍0 · 评论0 | **Token 经济性倒挂**，疑似特性旗位未对齐，亟需统一策略 |

---

## 4. 重要 PR 进展

> 过去 24h 仅 1 个 PR，且为文档重命名疑似误操作，无实质代码变更。

| # | PR | 状态 | 说明 |
|---|----|------|------|
| 1 | [#4573](https://github.com/github/copilot-cli/pull/4573) **Rename README.md to README.mdmain** | OPEN | 疑似提交失误，README 重命名为无效文件名，CI 将失败。建议关闭并由作者重新提交正确变更。 |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issues | 社区呼声强度 | 备注 |
|----------|-------------|--------------|------|
| **MCP/OAuth 企业级认证稳定性** | #4490, #4582, #4584, #4408 | ⭐⭐⭐⭐⭐ | 多厂商、多协议栈兼容性是当前最大拦截项 |
| **交互模式精细化权限控制** | #1973, #4577, #4538, #4578, #4580 | ⭐⭐⭐⭐ | 白名单、多轮 /ask、fork 并行终端均指向“更像 IDE 的 CLI 体验” |
| **跨平台文件/进程生命周期管理** | #4593, #3255, #4570 | ⭐⭐⭐ | Windows 文件锁、残留 lock 文件、VS Code 共存冲突 |
| **可观测性与成本透明化** | #4224, #4589, #4588 | ⭐⭐⭐ | Token 计数、计费属性、工具 schema 体积优化 |
| **多模态资产支持** | #4583 (PDF), #4581 (图像生成) | ⭐⭐ | 从“只读代码”向“全栈资产生产”延伸 |
| **云会话可靠性** | #4568, #4590 | ⭐⭐ | 控制面重连、扩展宿主热更导致的钩子丢失 |

---

## 6. 开发者关注点总结

1. **认证链路最脆弱**：OAuth 发现文档校验（RFC 8414）、Entra ID 参数构造、跨域资源标识符冲突，三类问题在 1.0.80+ 集中爆发，建议建立**认证兼容性回归矩阵**并在 CI 中跑通主流 IdP。
2. **交互模式仍是“半成品”**：缺白名单、缺多轮对话、缺并行终端、缺 fork 启动参数，开发者被迫在 `/allow-all` 与逐键确认二选一，**权限模型重构应提上日程**。
3. **Windows 原生体验缺失**：worktree 归档、插件安装、残留锁文件均指向“以 POSIX 为主开发、Windows 适配滞后”，需引入 Windows 专项测试流水线。
4. **Token 成本失控隐患**：工具 schema 全量下发（非 Anthropic 模型）、子 Agent 计费属性丢失、状态栏无原始 token 计数，三者叠加导致企业无法精准核算，**建议在 v1.1 引入 `copilot cost` 子命令统一出口**。
5. **云/本地会话边界模糊**：`--cloud` 卡死、扩展重连丢钩子、origin 校验硬阻塞，反映**会话状态机与远程控制面协议未充分契约化**，需明确“会话所有权转移”与“断点续传”语义。

---

> **下一步关注建议**  
> - 追踪 #4490 / #4582 / #4584 修复合并进度，验证 1.0.82 是否解决 OAuth 回归  
> - 关注 #1973 设计讨论，若引入 `copilot config set interactive.toolWhitelist` 将显著提升自动化采纳率  
> - 期待官方针对 Windows 文件锁与残留锁文件发布专项修复里程碑

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-08-25

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：2026-08-24 至 2026-08-25

---

## 1. 今日速览
- **无新版本发布**，社区核心关注点集中在 **用量计费机制争议** 与 **文件编码兼容性修复** 两大议题。
- 热门 Issue **#1994** 揭示 K2.6 模型长思维链导致 Token 消耗远超预期，用户反馈“2小时额度仅支持2次对话”，引发对官方“按 API 请求数计费”宣传与实际“按 Token 计费”执行不一致的强烈质疑（7👍, 8条评论）。
- PR **#2595** 修复 `StrReplaceFile` 工具对非 UTF-8 文件的破坏性写入问题，解决二进制/混合编码文件被误替换为 U+FFFD 字符的数据安全隐患。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues
> 过去 24 小时仅 1 条 Issue 更新，但讨论热度高、影响面广，建议重点跟进。

| # | 标题 | 状态 | 核心诉求 | 社区反响 | 关键链接 |
|---|---|---|---|---|---|
| **#1994** | **kimiCode用量计算有问题 / There is a problem with kimiCode usage calculation** | 🟢 OPEN | **计费模式不透明与额度严重缩水**：用户反映 K2.6 模型思维链过长，导致单次对话消耗海量 Token。官方宣传“每5小时支持300-1200次API请求”，但实际按 Token 扣费，会员2小时额度仅够2轮对话，体感与宣传严重背离。 | **高关注度** (7👍, 8评论)。用户要求：1) 明确计费公式；2) 针对长思维链优化 Token 计费或提供开关；3) 修正官方文档宣传口径。 | [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) |

---

## 4. 重要 PR 进展
> 过去 24 小时仅 1 条 PR 更新，属于关键数据安全修复。

| # | 标题 | 状态 | 修复/功能点 | 关联 Issue | 关键链接 |
|---|---|---|---|---|---|
| **#2595** | **fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** | 🟢 OPEN | **数据安全修复**：`StrReplaceFile` 现有逻辑以 `errors="replace"` 读取整文件，导致**任何位置的非法 UTF-8 字节**（甚至与编辑位置无关）在写回时均被替换为 U+FFFD ()，破坏二进制文件、含 BOM 文件或混合编码文件。<br>**修复策略**：编辑前校验文件是否为合法 UTF-8，非法则直接拒绝编辑并报错，防止静默数据损坏。 | [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) | [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) |

---

## 5. 功能需求趋势
基于当前高热度 Issue (#1994) 及近期社区隐性诉求推断：

1.  **计费透明化与可控性** ⭐⭐⭐⭐⭐
    *   核心诉求：建立 **Token 消耗预估/实时显示** 机制；提供 **思维链长度控制参数**（如 `max_thinking_tokens`）以平衡推理深度与成本。
    *   背景：K2.6 长 CoT 成为“隐形消费黑洞”，用户无法预判单次对话成本。

2.  **工具链鲁棒性与编码兼容** ⭐⭐⭐⭐
    *   核心诉求：文件操作工具需支持 **二进制安全**、**多编码自动检测**（GBK/Shift-JIS 等）、**只读预览模式**。
    *   背景：PR #2595 暴露现有工具假设“全世界皆 UTF-8”，在遗留项目/跨平台协作中极易造成数据损坏。

3.  **模型能力与成本的动态平衡** ⭐⭐⭐
    *   潜在需求：支持 **按任务复杂度自动路由模型**（简单改动用轻量模型，复杂重构用 K2.6），或提供 **“快速模式”跳过深度思考**。

---

## 6. 开发者关注点与痛点总结

| 维度 | 核心痛点 | 典型反馈/建议 | 优先级建议 |
|---|---|---|---|
| **计费与额度** | **“宣传与实现严重脱节”**；Token 消耗不可预测、不可控；长思维链成本外部化给用户。 | - 要求公开 Token 计费公式（含思维链权重）<br>- 新增 `--max-cost` 或 `--max-thinking-tokens` 参数<br>- 仪表盘显示实时 Token 燃烧率 | **P0 (阻断付费用户留存)** |
| **文件操作安全** | **“静默破坏非 UTF-8 文件”**；无预览/确认机制直接落盘。 | - PR #2595 方向正确，建议再增 `--force` 覆盖选项供高级用户<br>- 增加 `file_encoding` 自动探测与转换流程 | **P1 (数据安全红线)** |
| **模型体验** | K2.6 思维链过长导致**延迟高、成本高、上下文窗口挤占**。 | - 提供 `reasoning_effort: low/medium/high` 开关<br>- 支持流式输出思维链摘要而非全量 | **P1 (核心竞争力相关)** |
| **文档信任度** | 官网“按请求数计费” vs 实则“按 Token 计费”构成**误导性营销**风险。 | - 立即同步更新官网/文档计费说明<br>- FAQ 增加“思维链如何计费”条目 | **P0 (合规与信任)** |

---

## 💡 分析师建议
1.  **紧急响应 #1994**：官方需在 24h 内给出计费白皮书级回复，并发布热修复版本增加 `max_thinking_tokens` 参数，否则将严重动摇付费用户信心。
2.  **加速合并 #2595**：这是典型的“数据丢失类” Bug，建议跳过常规 Review 流程直接 Cherry-pick 到下一个 Patch 版本。
3.  **建立“成本观测性”基建**：在 CLI 内置 `usage stats` 命令，按会话/任务/日维度展示 Token 拆解（Prompt / Thinking / Completion / Cache），让成本可视化是留住专业开发者的前提。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报｜2026-08-25

---

## 1. 今日速览
- **核心版本 v1.18.22 发布**，修复设备登录链接兼容性、移除过时定价信息、解决 `textVerbosity` 误发问题。
- **TUI 侧边栏“Modified Files”缺失** 与 **Ox Alpha Free 模型网络错误** 成为社区两大高频痛点，已有多个修复 PR 进入审核。
- **v2.0 插件体系** 持续推进：注册表热重载、工具输入校验、部分 JSON 解析、后台任务优雅关闭等基建 PR 密集合并。

---

## 2. 版本发布

### v1.18.22 (2026-08-24)
| 类型 | 内容 |
|------|------|
| **Bugfix** | 移除过时的 OpenCode Go 首月折扣宣传与定价信息 |
| **Bugfix** | 修复设备登录链接：支持服务端返回相对验证 URL 或带 base path 的场景 |
| **Bugfix** | 修复 `textVerbosity` 被错误发送给不支持该参数的 OpenAI 兼容提供商 |

> 🔗 [Release v1.18.22](https://github.com/anomalyco/opencode/releases/tag/v1.18.22)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 关注理由 |
|---|------|------|---------|----------|
| [#30877](https://github.com/anomalyco/opencode/issues/30877) | TUI 侧边栏“Modified Files”整段消失（v1.16.0 回归） | OPEN | 11 / 14 | 多用户确认回归，影响代码变更可视化；已有 PR #44796 修复中 |
| [#17797](https://github.com/anomalyco/opencode/issues/17797) | TUI 不再显示 modified files | OPEN | 6 / 1 | 早期报告同一症状，持续未解决，社区期待统一修复 |
| [#32852](https://github.com/anomalyco/opencode/issues/32852) | 侧边栏不显示 session diffs | OPEN | 5 / 3 | 补充细节：文件已修改但侧边栏为空，确认为同一根因 |
| [#44300](https://github.com/anomalyco/opencode/issues/44300) | Zen API：带 tools 请求 Ox Alpha Free 均报 “Endpoint unavailable” | OPEN | 7 / 1 | 免费模型全面不可用，阻断大量用户工作流 |
| [#44379](https://github.com/anomalyco/opencode/issues/44379) | Ox Alpha Free (unlimited) 频繁 `network_error` | OPEN | 6 / 4 | 仅新建会话可暂时规避，严重影响连续对话体验 |
| [#43619](https://github.com/anomalyco/opencode/issues/43619) | [2.0] subagent 首次生成子会话需 sessionID 但文档说可省略 | CLOSED | 10 / 0 | v2 核心工作流阻断，已修复合并 |
| [#6310](https://github.com/anomalyco/opencode/issues/6310) | 大量 LSP 诊断导致会话极慢（Lua 项目） | CLOSED | 9 / 0 | 根因：edit/write 持久化全量工作区诊断；PR #44811 已修剪 |
| [#37823](https://github.com/anomalyco/opencode/issues/37823) | GitHub Actions 在 2026-07-15 后创建的仓库失败（OIDC sub 格式变更） | CLOSED | 6 / 11 | 影响 CI 集成，已修复 |
| [#44577](https://github.com/anomalyco/opencode/issues/44577) | DeepSeek 模型报 API key invalid；缺失 GPT-5.6、GLM-5.3、Qwen3.8 Max 等新模型 | OPEN | 4 / 0 | 模型列表滞后，用户需求集中在国内主流模型支持 |
| [#44798](https://github.com/anomalyco/opencode/issues/44798) | [2.0] 长会话触及上下文窗口无自动压缩/移交机制 | CLOSED | 2 / 0 | 揭示 v2 长任务缺乏续航策略，架构层面需求 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 | 关联 Issue |
|---|------|------|----------|------------|
| [#44796](https://github.com/anomalyco/opencode/pull/44796) | fix(tui): restore TUI sidebar modified-files diff | OPEN | 恢复 `Session.diff` 非空返回，修复 #30127 导致的回归 | #30877 |
| [#44811](https://github.com/anomalyco/opencode/pull/44811) | tool: trim persisted LSP diagnostics in edit/write metadata | OPEN | 仅保留当前文件诊断，避免全量工作区数据写入 session | #6310 |
| [#44825](https://github.com/anomalyco/opencode/pull/44825) | fix(core): route filesystem through location environment | OPEN | 文件系统规范化/读取/列目录走 Location 环境，修复多工作区路径问题 | #44568 |
| [#44757](https://github.com/anomalyco/opencode/pull/44757) | feat(opencode): enable lsp tool by default | OPEN | 移除 `flags.experimentalLspTool` 守卫，LSP 工具默认开启 | #44759 |
| [#44818](https://github.com/anomalyco/opencode/pull/44818) | refactor(core): normalize tool input errors | OPEN | 统一 Effect/Standard Schema/JSON Schema 校验错误格式，含字段路径、重试提示 | — |
| [#44813](https://github.com/anomalyco/opencode/pull/44813) | fix(core): make registry reads observe pending reloads | OPEN | 读取立即感知待重载状态，消除 500ms 防抖窗口的不一致 | — |
| [#44820](https://github.com/anomalyco/opencode/pull/44820) | fix(cli): honor notification-only automatic updates | CLOSED | 自动更新策略“仅通知”不再尝试安装，补充测试覆盖 | — |
| [#44792](https://github.com/anomalyco/opencode/pull/44792) | feat(ai): add partial JSON parser | CLOSED | 内部可配置部分 JSON 解析器，支持不完整流式响应修复 | — |
| [#44789](https://github.com/anomalyco/opencode/pull/44789) | fix(core): validate JSON schema tool input | CLOSED | 引入 Draft 2020-12/07 schema，执行前解码参数并映射为工具错误 | — |
| [#44810](https://github.com/anomalyco/opencode/pull/44810) | fix(opencode): resume queued prompts after interrupt | OPEN | 中断后自动恢复排队提示词，改进多轮交互体验 | #40955 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue/PR | 社区呼声 |
|----------|----------------|----------|
| **TUI 可视化完善** | #30877, #17797, #32852, #34620, PR #44796 | ⭐⭐⭐⭐⭐ 多用户反馈侧边栏 diff 缺失，影响代码审查流程 |
| **免费/平价模型稳定性** | #44300, #44379, #44332, #44689, #44750, #44385 | ⭐⭐⭐⭐ Ox Alpha Free 系列频繁网络错误/端点不可用，阻断免费用户 |
| **国内模型原生支持** | #44577 | ⭐⭐⭐ DeepSeek API key 校验失败、缺失 GPT-5.6/GLM-5.3/Qwen3.8 Max 等新模型 |
| **长会话上下文管理** | #44798, #6310, PR #44811 | ⭐⭐⭐ LSP 诊断膨胀、无自动压缩/移交机制，导致会话不可用 |
| **v2 插件/工具链成熟度** | #43619, #44788, #44812, PR #44813/18/89/92 | ⭐⭐ Schema 校验、事件总线、CLI 配置 schema 等基建补齐中 |
| **GitHub Actions/OIDC 兼容** | #37823, #33060, #39441 | ⭐⭐ 新仓库 OIDC sub 格式变更导致 CI 失败，已修复但需回溯验证 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“侧边栏看不见改了什么”** —— TUI 侧边栏 Modified Files 多版本回归，开发者强烈依赖可视化 diff 进行变更确认。
2. **“免费模型能不能稳一点”** —— Ox Alpha Free 系列在带 tools 请求、长生成、并发场景下高频 `network_error` / `endpoint unavailable`，迫使用户频繁新建会话或切换付费模型。
3. **“模型列表跟不上节奏”** —— DeepSeek、GLM、Qwen 等国内主流模型新版本上线后长时间未纳入，API key 校验报错进一步劝退用户。
4. **“长任务跑着跑着就卡死”** —— LSP 全量诊断写入 session 元数据导致内存/上下文爆炸，缺乏自动摘要、压缩、分片续航机制。
5. **“v2 插件系统文档与运行时脱节”** —— `cli.json` 无 schema、事件订阅不触发、context hook 不生效，开发者调试成本高。
6. **“CI 集成脆弱”** —— GitHub Actions 对新建仓库 OIDC 格式不兼容，错误提示 `undefined is not an object (evaluating 'p.rest')` 极不友好。

---

> **下一版本关注点**：v1.18.23 预计合并 TUI diff 恢复（#44796）、LSP 诊断裁剪（#44811）、文件系统路由重构（#44825）；v2.0 beta 侧重插件事件总线、工具输入规范化、部分 JSON 解析器落地。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-25

---

## 1. 今日速览

- **v0.84.3 正式发布**，引入原生 **PowerShell 工具**（Windows）与**更安全的托管更新机制**（分阶段、验证、原子激活），显著改善 Windows 开发体验与部署可靠性。
- 社区高强度修复 **Gemini 3.x `thought_signature` 丢失**、**OpenAI Codex 线程亲和性**、**中止流处理**、**llama.cpp 预设模型不可见** 等核心 Bug，稳定性大幅提升。
- **按模型差异化压缩配置**（Per-model compaction profiles）已合并，解决大/小上下文窗口模型共用阈值导致的过早/过晚压缩问题。

---

## 2. 版本发布

### v0.84.3 (2026-08-25)
| 类型 | 内容 | 影响 |
|------|------|------|
| **新功能** | **PowerShell Tool** —— Windows 可选原生 PowerShell 执行，替代 Git Bash 路径兼容性痛点 | 🪟 Windows 开发者首选终端体验提升 |
| **新功能** | **Safer Managed Updates** —— 分阶段下载、校验、原子切换 | 🛡️ 杜绝更新中断导致的损坏实例 |
| 文档 | 新增 `packages/coding-agent/docs/windows.md#powershell-tool` 使用指南 | 📖 快速上手参考 |

🔗 [Release v0.84.3](https://github.com/earendil-works/pi/releases/tag/v0.84.3)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 👍/评论 | 核心看点 |
|---|------|------|---------|----------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] 如何在 Windows 使用 Pi？痛点何在？** | OPEN | 2 / 44 | 44 条讨论聚焦：WSL vs Git Bash vs 原生 PowerShell、路径转换、文件监听、原生工具链优先级 —— **Windows 生态优化的风向标** |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **自动压缩不触发，直到 Provider 抛出上下文溢出** | OPEN | 19 / 22 | 会话跑 2 小时、Footer 超 100% 仍不压缩，仅在 API 拒绝时才兜底 —— **压缩触发逻辑缺陷，已由 #8592 部分缓解** |
| [#6996](https://github.com/earendil-works/pi/issues/6996) | **Gemini 3.x 缺 `thought_signature` 导致工具调用失败** | OPEN | 0 / 6 | 通过 OpenAI 兼容层调用 Gemini 3.x 时，流式 function-call chunk 丢签名，下一轮 400 报错 —— **已由 #8590 修复并合并** |
| [#6922](https://github.com/earendil-works/pi/issues/6922) | **默认模型设为 llama.cpp 启动报 "No models available"** | CLOSED | 14 / 11 | 预设模型未自动加载导致模型列表为空，阻断首次体验 —— **#8479 / #8558 已修复** |
| [#8167](https://github.com/earendil-works/pi/issues/8167) | **内置 llama.cpp 支持下无法在模型列表选择模型** | CLOSED | 0 / 11 | router 模式下 preset 模型被过滤，需手动 `/llama` 加载 —— **同上修复** |
| [#8133](https://github.com/earendil-works/pi/issues/8133) | **按模型差异化压缩配置** | OPEN | 3 / 4 | 大模型 1M / 小模型 200K 共用 `reserveTokens` 导致小模型过早压缩 —— **#8592 已合并，支持 `compaction.profiles`** |
| [#7444](https://github.com/earendil-works/pi/issues/7444) | **WebSocket 重试仅处理两种错误码，其它瞬态错误硬停** | CLOSED | 0 / 9 | `openai-codex-responses.js` 仅重试 `previous_response_not_found` 等，漏掉大量 `response.failed` —— **需扩展重试分类** |
| [#8582](https://github.com/earendil-works/pi/issues/8582) | **内置 powershell 交互模式仍用 5.1，`-p` 模式却用 pwsh** | CLOSED | 0 / 2 | 行为不一致，交互模式未检测 PATH 中的 `pwsh.exe` —— **v0.84.3 同步修复** |
| [#8546](https://github.com/earendil-works/pi/issues/8546) | **DeepSeek 新视觉模型 `deepseek-v4-flash-vision-exp` 缺失内置目录** | CLOSED | 0 / 3 | 8/21 发布模型未同步，TUI/Web UI 不可选 —— **目录更新滞后，需自动化同步机制** |
| [#8583](https://github.com/earendil-works/pi/issues/8583) | **启动上下文被重型扩展工具 Schema 撑爆** | CLOSED | 0 / 2 | 扩展工具参数枚举巨大，建议懒加载 Schema 或项目级工具档案 —— **性能优化方向** |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心变更 | 关联 Issue |
|---|------|------|----------|------------|
| [#8592](https://github.com/earendil-works/pi/pull/8592) | **feat: per-model compaction profiles** | CLOSED | `settings.json` 新增 `compaction.profiles[modelId]`，回退全局值 | #8133 |
| [#8590](https://github.com/earendil-works/pi/pull/8590) | **fix: round-trip Gemini `thought_signature` via openai-completions** | CLOSED | 透传 `extra_content.google.thought_signature` 至历史，修复 400 | #6996 |
| [#8585](https://github.com/earendil-works/pi/pull/8585) | **fix: abort OpenAI streams immediately on signal** | CLOSED | 流循环每次 `read()` 检查 `signal.aborted`，对齐 Anthropic 行为 | — |
| [#8575](https://github.com/earendil-works/pi/pull/8575) | **fix: surface & bound torn-append replay loss in JSONL** | CLOSED | 单行残缺+完整条目拼接导致静默丢 2 条 replay，现记录警告并仅丢 1 条 | — |
| [#8570](https://github.com/earendil-works/pi/pull/8570) | **fix: preserve Codex thread affinity headers** | CLOSED | 补全 `thread-id` 头，保持会话亲和性 | #7444 相关 |
| [#8512](https://github.com/earendil-works/pi/pull/8512) | **feat: optional PowerShell tool (Windows)** | CLOSED | 原生 `powershell` 工具，解决 Git Bash 路径/信号量痛点 | #7547 |
| [#8479](https://github.com/earendil-works/pi/pull/8479) | **fix: expose unloaded llama.cpp presets** | CLOSED | `/model` 列出 `source: "preset"` 条目，router 首次请求自动加载 | #8167 |
| [#8558](https://github.com/earendil-works/pi/pull/8558) | **feat: show llama presets if autoload enabled** | CLOSED | 同 #8479，配合 preset 可见性 | #8167 |
| [#8580](https://github.com/earendil-works/pi/pull/8580) | **feat: drop extra vertical padding on tool rows** | CLOSED | 移除工具行前导 spacer/box padding/空行，日志紧凑 2-3 倍 | — |
| [#8573](https://github.com/earendil-works/pi/pull/8573) | **feat: Bedrock Mantle Anthropic Messages routing** | OPEN | 新增 Mantle 路由，复用 Anthropic 适配器，支持 GPT-5.x 等新模型 | #5363 |

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势 | 代表 Issue/PR | 社区呼声 |
|------|---------------|----------|
| **Windows 原生工具体验** | #7547, #8512, #8582 | 🔥 极高 —— 44 条讨论 + 原生 PowerShell 落地 |
| **多模型/多上下文窗口自适应压缩** | #8133→#8592, #6879, #7048 | 🔥 高 —— 已合并 profiles，仍需解决触发时机 |
| **Provider 目录自动化同步** | #8546, #8491, #8450, #4742, #5986, #6403 | 📈 持续 —— 新模型/新网关频繁上线，手动维护跟不上 |
| **扩展/工具 Schema 懒加载与项目级档案** | #8583, #8588 | 📈 新兴 —— 启动性能与便携配置双重诉求 |
| **会话/上下文可移植性** | #8554, #8588, #8575 | 📈 新兴 —— git worktree 切换、preset 导入导出、JSONL 修复 |
| **Bedrock / 企业级网关深度集成** | #8572, #8573, #8302, #5363 | 🏢 企业侧 —— Mantle API、Converse 兼容、SSO 认证 |

---

## 6. 开发者关注点与痛点

1. **Windows 原生支持仍是最大拦截器**  
   - 路径转换、信号量、文件监听、终端光标、编辑器调用全链路不兼容；社区期待 “开箱即用” 而非 “WSL 强制”。

2. **上下文压缩可靠性**  
   - 触发阈值计算、生成摘要截断、中止原因区分、Provider 溢出兜底 —— 连续 3 个 Issue (#6879, #7048, #8409) 指向同一模块。

3. **多 Provider 兼容层的边缘案例**  
   - Gemini `thought_signature`、Codex `thread-id`、Bedrock Mantle vs Converse、OpenRouter 价格同步 —— 兼容层薄但表面积大，回归成本高。

4. **启动性能与上下文膨胀**  
   - 扩展工具 Schema 动辄数万 token，阻塞冷启动；需 **懒加载** + **项目级启用清单**。

5. **可观测性与可调试性**  
   - JSONL 静默损坏 (#8575)、中止理由误报 (#8409)、共享会话按钮无反馈 (#8569) —— “看不见的故障最可怕”。

---

> **下一步关注**：v0.84.4 预计将聚焦 Windows 原生工具链收尾、压缩触发器重构、Provider 目录自动化同步脚本；Bedrock Mantle 与便携 Preset 有望在 0.85 里程碑落地。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-08-25

---

## 1. 今日速览

- **夜ly 版本发布**：v0.22.0-nightly.20260824 修复 Web Shell 工作目录传递问题，并同步发布 `cua-driver-rs v0.20.0` 预构建二进制（macOS 签名公证、Linux/Windows/Node.js 全平台覆盖）。
- **核心架构重构持续推进**：Config 派生上下文所有权显性化（#8083）、核心/CLI 12 项结构性问题清单（#4063）均处于 `in-progress` 状态，显示团队正在系统性解决技术债。
- **MCP 与多 Agent 协作成热点痛点**：MCP HTTP 传输重连后工具不可用（#9944）、队友消息通道被关机请求阻塞（#9510 已修复）、ACP 多会话日志越界（#9534 已修复）等问题集中爆发，反映生产环境下集成稳定性诉求强烈。

---

## 2. 版本发布

### v0.22.0-nightly.20260824.3a1f86d805
**发布时间**：2026-08-24  
**主要变更**：
- **fix(web-shell)**：从概览面板打开时正确传递会话工作区 `cwd`（@wenshao, #9730）
- **cua-driver-rs v0.20.0** 预构建产物发布：
  - macOS：代码签名 + 公证通用二进制 + `QwenCuaDriver.app`
  - Linux：未签名（x86_64/arm64，glibc 2.31+）
  - Windows：未签名（x86_64/arm64）
  - Node.js：同一工作流发布单一包

> 🔗 [Release 页面](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260824.3a1f86d805)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 标签/优先级 | 评论 | 关注理由 |
|---|------|-------------|------|----------|
| [#5975](https://github.com/QwenLM/qwen-code/issues/5975) | API Error: No stream activity for 120000ms after 19 chunks | `priority/P2`, `type/bug`, `category/core`, `scope/latency` | 12 👍1 | **高频流式中断**，v0.19.3 后频发，影响核心交互体验，社区复现率高 |
| [#4063](https://github.com/QwenLM/qwen-code/issues/4063) | refactor: core + cli 架构 Review — 12 项结构性问题清单 | `status/in-progress`, `type/enhancement` | 9 👍1 | **架构级技术债清单**，涉及 136 文件对 `@google/genai` 耦合、依赖注入缺失等根因问题 |
| [#8083](https://github.com/QwenLM/qwen-code/issues/8083) | design(core): make derived Config context ownership explicit | `status/in-progress`, `priority/P1`, `type/enhancement` | 6 | **Config 原型链派生导致的状态所有权模糊**，阻碍子代理/内存代理/审批模式等场景的正确隔离 |
| [#9944](https://github.com/QwenLM/qwen-code/issues/9944) | Bug: qwen mcp reconnect reports success but MCP tools remain unavailable (HTTP transport) | `priority/P2`, `type/bug`, `category/tools`, `scope/mcp` | 4 | **MCP HTTP 会话 ID 变更后重连假成功**，生产环境阻断性问题 |
| [#9005](https://github.com/QwenLM/qwen-code/issues/9005) | The Anthropic wire is missing stream-safety protections the OpenAI wire already has | `priority/P1`, `type/bug`, `category/core`, `scope/content-generation` | 4 | **Anthropic 适配器缺流式安全防护**，SDK 版本落后（^0.36.1），安全隐患 |
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | Migrate TUI rendering layer from ink to OpenTUI (flicker-free, first-class mouse) | `priority/P3`, `type/enhancement`, `roadmap/terminal-ux` | 4 | **终端 UI 闪烁/鼠标支持差**为长期痛点，计划迁移 OpenTUI 解决 Ink 架构局限 |
| [#9927](https://github.com/QwenLM/qwen-code/issues/9927) | Artifact updatedAt stays stale; write_file intermediates linger as missing | `priority/P2`, `type/bug`, `category/core`, `scope/session-management` | 4 | **制品元数据不同步**导致 Web Shell 状态不一致，影响会话持久化可靠性 |
| [#9942](https://github.com/QwenLM/qwen-code/issues/9942) | Hide skill commands from top-level slash completion | `priority/P3`, `type/feature-request`, `category/ui`, `scope/web-shell` | 4 | **技能命令污染顶层补全**，技能生态扩展后交互噪音显著，需分层展示 |
| [#9378](https://github.com/QwenLM/qwen-code/issues/9378) | Recall/forget scan-cap asymmetry: documents beyond the 200-doc cap can be recalled but never forgotten | `priority/P2`, `type/bug`, `category/core`, `scope/memory` | 3 | **长期记忆泄漏风险**：召回无上限但遗忘有上限，导致不可回收文档累积 |
| [#9911](https://github.com/QwenLM/qwen-code/issues/9911) | Restore VS Code message edit and rewind after the WebShell cutover | `priority/P2`, `type/feature-request`, `scope/vscode`, `roadmap/ide-integration` | 2 | **WebShell 切换后丢失 VS Code 原生编辑/倒带**，IDE 集成体验倒退，开发者呼声高 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态/标签 | 核心价值 |
|---|------|-----------|----------|
| [#9389](https://github.com/QwenLM/qwen-code/pull/9389) | feat(providers): recommend the live model list in the setup wizard | `autofix/takeover` | **配置向导动态拉取模型列表**，不再依赖发布时冻结的推荐表，提升多提供商适配灵活性 |
| [#9659](https://github.com/QwenLM/qwen-code/pull/9659) | feat(review): content-anchored incremental rounds for the local review-fix loop | `autofix/takeover` | **代码审查增量轮次锚定内容而非行号**，解决 Rebase 后建议失效问题，已完成 20 轮评审、166 条内联评论 |
| [#9829](https://github.com/QwenLM/qwen-code/pull/9829) | fix(core): make permissions.allow restrict the tool schemas sent to the model | `review/self-reported` | **权限允许列表真正生效为注册表级白名单**，未覆盖的内置工具不再注册/暴露，强化最小权限原则 |
| [#9862](https://github.com/QwenLM/qwen-code/pull/9862) | fix(acp): route-scope the session token-limit cache in Session.ts | `review/self-reported` | **ACP 会话 Token 缓存按模型路由隔离**，修复切换模型后旧计数误触发限流 |
| [#9638](https://github.com/QwenLM/qwen-code/pull/9638) | fix(cli): deliver teammate messages at tool-round boundaries, not whole-task end | `open` | **多 Agent 队友消息在工具轮次边界投递**，解决长任务中消息堆积导致的通道阻塞（#9510 根因修复） |
| [#9740](https://github.com/QwenLM/qwen-code/pull/9740) | feat(review): make Step 4 verification execution-grade | `open` | **审查步骤 4 引入执行级验证**，新增 `qwen review ab-drive` 对双树运行同一脚本并对比产物 |
| [#9954](https://github.com/QwenLM/qwen-code/pull/9954) | refactor(web-shell): extract shared contexts | `open` | **Web Shell 上下文模块化**，分离 compact-mode 与 todo-detail 依赖，便于组件复用与测试 |
| [#9895](https://github.com/QwenLM/qwen-code/pull/9895) | feat(daemon): support scoped workspace memory tasks | `autofix/takeover`, `review/self-reported` | **守护进程支持项目/用户级作用域记忆任务**，新增能力标签协商，完善多租户记忆隔

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*