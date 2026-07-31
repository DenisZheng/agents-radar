# AI CLI 工具社区动态日报 2026-07-31

> 生成时间: 2026-07-31 02:09 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-07-31

---

## 1. 生态全景

当前 AI CLI 赛道已从“模型包装器”进化为**“智能体操作系统雏形”**。头部工具（Claude Code、Codex、Gemini CLI、Copilot CLI）同步攻克**子代理编排可靠性、企业级协作、跨平台原生体验、配置与计费透明化**四大硬骨头；新兴工具通过**架构重构、协议标准化、本地化适配**寻找差异化生存空间。**“信任危机”**（数据丢失、静默扣费、Hook 失效）已取代“模型智商”成为社区第一痛点，倒逼厂商从功能竞赛转向工程质量竞赛。

---

## 2. 各工具活跃度对比

| 工具 | 仓库 | Issues 更新数 | PR 活跃度 | Release 情况 | 核心研发节奏 |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | anthropics/claude-code | **50+** (10 高热) | 低 (1 Closed, 0 Merged) | 无 (v2.1.220 维持) | **维护/稳定期** — 核心团队专注修复 P0 Bug，无新功能合并 |
| **OpenAI Codex** | openai/codex | **50+** (10 高热) | **极高** (20+ Merged/Open) | 无 | **重构/基建期** — Connector 架构、沙箱事件、企业自动化大量 PR 合并 |
| **Gemini CLI** | google-gemini/gemini-cli | **50+** (10 高热) | **高** (10 Merged/Open) | 无 | **稳健迭代期** — P1 Bug 修复、安全加固、评测基建同步推进 |
| **GitHub Copilot CLI** | github/copilot-cli | **24** | 低 (0 PR) | **v1.0.77** (重大功能) | **发布/观察期** — 引入 Web OAuth、修复回归，随后进入 Issue 收敛 |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | **3** | 低 (1 Open) | 无 | **早期/服务依赖期** — 核心受限于上游 429 错误，客户端修复缓慢 |
| **OpenCode** | anomalyco/opencode | **50+** (10 高热) | **极高** (20+ Merged/Open) | **v1.18.10** | **高频发布期** — TUI 重构、插件钩子、协议扩展并行，周级迭代 |
| **Pi** | earendil-works/pi | **50** | **极高** (31 更新, 4 里程碑合并) | 无 | **架构重构期** — Remote Wire Protocol、Runtime-neutral Client 落地，协议化转型 |
| **Qwen Code** | QwenLM/qwen-code | **50+** (10 高热) | **高** (10 Merged/Open) | **Nightly v0.21.1** | **协议兼容/工程化期** — Anthropic 转换器连续修复、OpenAI Responses API 接入、CI 自动化 |
| **DeepSeek TUI (CodeWhale)** | Hmbown/CodeWhale | **50+** (10 高热) | **高** (10 Merged/Open) | **v0.9.2** (品牌迁移) | **大重构期** — v0.9.3 单二进制、Context Diet、工具注册表统一全面展开 |

> **数据说明**：Issues 数基于各日报“过去 24 小时更新数”汇总；PR 活跃度综合考量 Open/Merged 数量与核心变更权重。

---

## 3. 共同关注的功能方向

| 方向 | 关注工具 (≥3) | 具体诉求共性 |
| :--- | :--- | :--- |
| **子代理/后台任务可观测与可控** | **Claude Code** (#77730, #82104), **Codex** (#4306), **Gemini** (#22323), **Copilot CLI** (#4293, #4306), **OpenCode** (#39491), **Qwen** (#8172) | **核心痛点**：Token 实时看板、硬性上限、TaskStop 真正生效、子代理生命周期可视化、防止静默烧钱/冻结。 |
| **企业级协作与身份管理** | **Claude Code** (#36151, #59854), **Codex** (#36228, #13200), **Gemini** (MCP OAuth), **Copilot CLI** (#4300, #4298), **OpenCode** (Workspace), **Pi** (Remote Protocol) | 多账号隔离、OAuth/SSO/Bearer Token 原生支持、沙箱策略白名单、跨端会话同步、审计日志。 |
| **配置/环境变量/Schema 可靠性** | **Claude Code** (#82761), **Codex** (Protocol Schema), **Gemini** (Settings 加载顺序), **Copilot CLI** (#4297), **Pi** (Shared Schemas), **Qwen** (Worktree 隔离) | 环境变量静默失效零容忍、统一配置 Schema 热重载、工作区级隔离、版本化迁移。 |
| **跨平台原生体验** | **Claude Code** (#80584, #72377), **Codex** (#31035, #26478), **Gemini** (#2570, #21924), **Copilot CLI** (#4296), **Pi** (#6300, #7248), **Qwen** (#7972, #8146), **CodeWhale** (#2369, #4977) | Windows 蓝屏/兼容性、Wayland 剪贴板、终端渲染无闪烁、AltGr 键位、安装器签名。 |
| **安全与供应链加固** | **Gemini** (#28555 SSRF, #28603 Node EOL), **Codex** (#36207 沙箱事件), **Pi** (Protocol 沙箱), **Qwen** (#8136 凭据脱敏), **CodeWhale** (权限顺序) | 工具调用沙箱审计、基础镜像及时更新、SSRF/注入防护、凭据零泄露、CI 供应链 PoC 修复。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 核心护城河 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **企业级标准化智能体终端** | 闭源核心 + 开放 Hook/插件生态；重“稳定性”与“治理” | 企业研发团队、合规敏感型组织 | Anthropic 模型深度绑定、Hook 标准化、Cowork 协作闭环 |
| **OpenAI Codex** | **云原生自动化编程平台** | Rust 核心 + Connector 插件架构；重“沙箱隔离”与“协议化” | 高强度自动化用户、平台集成商、企业自动化部门 | OpenAI 模型独占、Exec-server 远程执行、企业自动化计费体系 |
| **Gemini CLI** | **工程化可靠的本地优先 Agent** | Go/TypeScript 混合；重“评测基建”、“安全审计”、“Agent 鲁棒性” | Google 生态开发者、追求工程质量的个人/团队 | Gemini 模型免费额度、组件级评测管线、安全漏洞响应速度 |
| **GitHub Copilot CLI** | **GitHub 生态原生 CLI 入口** | TypeScript/Node；重“IDE 特性对齐”与“Git 中心化工作流” | GitHub 重度用户、Git 中心化团队 | GitHub 身份体系、Copilot 订阅打通、Rewind/VCS 集成 |
| **OpenCode** | **高可定制的 TUI 优先智能体框架** | SolidJS + Rust；重“插件化”、“协议扩展”、“多前端” | 极客开发者、TUI 爱好者、需要深度定制 UI/工作流的团队 | 开放协议、热重载插件、Desktop/Web/TUI 三端统一、Modal 等新模型快速接入 |
| **Pi** | **协议化的远程智能体运行时** | Rust Monorepo；重“Wire Protocol”、“Runtime-neutral Client”、“多运行时” | 基础设施工程师、自建平台团队、研究型用户 | CBOR 协议标准、远程会话原生支持、运行时与传输解耦、扩展点极致开放 |
| **Qwen Code** | **多模型兼容的阿里云原生开发工具** | TypeScript；重“协议转换器”、“Workspace 隔离”、“Web Shell 桌面化” | 阿里云/通义模型用户、多模型混用场景、国内合规需求团队 | 通义模型深度优化、Anthropic/OpenAI 协议双向兼容、国产化部署友好 |
| **Kimi Code CLI** | **Moonshot 模型的官方 CLI 入口** | Electron/Node；重“模型能力直达” | Kimi 订阅用户、中文长文本场景用户 | Kimi K2/K3 模型独家能力、中文上下文工程优化 |
| **CodeWhale** | **单二进制、极致本地化的 TUI 智能体** | Rust 单体向模块化重构；重“Context Diet”、“命令边界”、“品牌生物学” | 追求极致性能/隐私/离线能力的 Rust 社区、TUI 重度用户 | 纯本地运行、单文件分发、上下文压缩契约化、独特的“海洋生物”交互隐喻 |

---

## 5. 社区热度与成熟度判断

| 梯队 | 工具 | 判断依据 | 当前阶段风险/机遇 |
| :--- | :--- | :--- | :--- |
| **第一梯队：生态主导者** | **Claude Code, OpenAI Codex, GitHub Copilot CLI** | 企业级资源投入、用户基数大、Issue 热度高但响应慢、发布节奏受企业流程约束 | **风险**：信任危机发酵（计费、数据丢失）；**机遇**：标准制定者，企业续约粘性强 |
| **第二梯队：高频迭代者** | **OpenCode, Pi, Gemini CLI, Qwen Code, CodeWhale** | PR 合并频次高（日级/周级）、架构重构激进、社区驱动感强、Nightly/预览版可用 | **风险**：破坏性变更频繁、文档滞后、**机遇**：技术债偿还快、创新落地快、开发者心智占有率上升 |
| **第三梯队：跟随/绑定者** | **Kimi Code CLI** | 受限于上游服务稳定性（429）、客户端投入相对较少、社区规模小 | **风险**：单点依赖模型服务、差异化功能缺失；**机遇**：若上游稳定，可借模型能力快速回血 |

**关键指标对比**：
- **PR 合并速度**：OpenCode / Pi / Codex > Gemini / Qwen / CodeWhale > Claude / Copilot / Kimi
- **P0 Bug 响应**：Gemini / Codex (安全/数据丢失) > OpenCode / Qwen > Claude (积压严重) > Copilot (发布后观察) > Kimi
- **企业就绪度**：Claude Code (Cowork) ≈ Copilot CLI (GitHub 集成) > Codex (Enterprise Automation) > Gemini / Qwen > OpenCode / Pi / CodeWhale

---

## 6. 值得关注的趋势信号

### 6.1 **“子代理治理” 成为准入门槛**
- **信号**：7/9 个工具同期爆出子代理失控、Token 烧毁、状态不可观测问题。
- **启示**：**无实时 Token 仪表盘、无硬性中止 API、无子代理列表的工具将无法进入生产环境**。开发者选型时必须验证 `TaskStop` 等效命令的实际杀伤力。

### 6.2 **“协议标准化” 取代 “SDK 封装”**
- **信号**：Pi 发布 Wire Protocol (CBOR)；OpenCode 推进插件 `session.request` 钩子；Codex 重构 Connector Runtime；Qwen 修复 Anthropic/OpenAI 双协议转换器。
- **启示**：**模型接入层正从“各自造轮子”转向“协议中立的运行时”**。未来竞争点在于：谁能先跑通 `MCP`、`A2A`、`自有协议` 的统一网关，且不牺牲流式性能。

### 6.3 **“配置即代码” 向 “Schema 驱动运行时” 演进**
- **信号**：Claude Code 环境变量静默失效 (#82761)；Pi 共享 TypeBox Schema；Codex 导出协议 Schema 预计算；Gemini/Copilot/Qwen 均在修复配置加载顺序/隔离。
- **启示**：**运行时必须对配置 Schema 拥有强类型感知、热重载能力、版本迁移策略**。`settings.json` 时代结束，`Schema Registry + Validation Pipeline` 成为基建标配。

### 6.4 **“Windows/Wayland 原生” 不再是可选项**
- **信号**：Codex SysmonDrv 蓝屏 (#31035)、Claude Code HCS 蓝屏 (#72377)、Pi 输入重绘 (#6300)、Copilot iTerm2 粘贴 (#4296)、Qwen 安装器崩溃 (#7118)、CodeWhale DevContainer Windows (#49

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills 摘要生成失败。

---

# Claude Code 社区动态日报 | 2026-07-31

---

## 1. 今日速览

- **无新版本发布**，社区焦点集中在现有版本（v2.1.220）的稳定性与易用性问题上。  
- **高热度老 Issue 复活**：#36151（移动端多账号切换）时隔 4 个月再获更新，社区呼声极高（530 👍，148 评论）。  
- **今日新增 10+ 个新 Issue**，涵盖 Hook 失效、后台代理失控、Windows 蓝屏、VS Code 插件渲染异常、自动压缩环境变量失效、LaTeX 渲染缺失等核心痛点。  
- **仅 1 个 PR 关闭**（外部贡献，内容不明），核心仓库无合并活动。

---

## 2. 版本发布

> 过去 24 小时无 Release。

---

## 3. 社区热点 Issues（精选 10 个）

| # | 标题 | 类型 | 关键信息 | 热度 | 链接 |
|---|------|------|----------|------|------|
| **#36151** | 移动端多账号切换（无需共享邮箱） | 🟢 Feature | 创建于 3 月，今日再获更新，**530 👍 / 148 评论**；用户强烈要求原生多账号隔离，避免共享邮箱导致的隐私/权限泄露。 | ⭐⭐⭐⭐⭐ | [#36151](https://github.com/anthropics/claude-code/issues/36151) |
| **#6305** | Pre/PostToolUse Hooks 在 macOS 上完全不执行 | 🔴 Bug | 有复现步骤，16 👍；Hook 系统是自动化工作流核心，失效将阻断 CI/代码审查/安全扫描等集成。 | ⭐⭐⭐⭐ | [#6305](https://github.com/anthropics/claude-code/issues/6305) |
| **#77730** | 后台代理任务 ID 跨 session 边界失效，导致 transcript 无法恢复 | 🔴 Bug | 导致 **750k+ tokens 烧毁**（见 #82104），用户无法观测/停止子代理，严重计费风险。 | ⭐⭐⭐⭐ | [#77730](https://github.com/anthropics/claude-code/issues/77730) |
| **#82104** | TaskStop 不杀子代理，750k tokens 事后才发现 | 🔴 Bug | 与 #77730 形成闭环：**无观测、无停止、无上限** 三重缺陷，生产环境极其危险。 | ⭐⭐⭐⭐ | [#82104](https://github.com/anthropics/claude-code/issues/82104) |
| **#78834** | ugrep 在 `.{N}` 正则下内存泄漏 4-17 GB（Linux/WSL2） | 🔴 Perf | 内置 Grep 工具在特定正则下分配 ~230 MB/s，直接 OOM，阻断大仓库搜索。 | ⭐⭐⭐ | [#78834](https://github.com/anthropics/claude-code/issues/78834) |
| **#43719** | 自动更新擦除 Cowork 会话磁盘，项目数据丢失 | 🔴 Data-loss | 2 👍，但属 **数据丢失 + 回归**，用户要求恢复项目，信任度打击大。 | ⭐⭐⭐ | [#43719](https://github.com/anthropics/claude-code/issues/43719) |
| **#59854** | Cowork GitHub 连接器不可用：OAuth DCR 不支持、UI 误导、断开按钮失效 | 🔴 Bug | 12 👍；企业级协作核心功能受阻，涉及认证、UI、状态同步多层缺陷。 | ⭐⭐⭐ | [#59854](https://github.com/anthropics/claude-code/issues/59854) |
| **#82761** | `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` 7/14 后静默失效（v2.1.220） | 🔴 Regression | 环境变量仍在二进制字符串表中，但完全不生效，无任何报错，配置管理可靠性存疑。 | ⭐⭐⭐ | [#82761](https://github.com/anthropics/claude-code/issues/82761) |
| **#82766** | VS Code 侧边栏显示 Haiku 而 `/model` 报 Sonnet 5，阻断 Auto 模式 | 🔴 Bug | 新增今日，模型状态不一致导致自动路由失效，IDE 集成信任度下降。 | ⭐⭐ | [#82766](https://github.com/anthropics/claude-code/issues/82766) |
| **#82758** | VS Code 插件不渲染 LaTeX/Markdown 数学公式 | 🟡 Bug | 新增今日，`$...$` 与 `$$...$$` 均以明文显示，影响科研/教学/文档场景。 | ⭐⭐ | [#82758](https://github.com/anthropics/claude-code/issues/82758) |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 | 链接 |
|---|------|------|------|------|
| **#82555** | Claude/youtube instagram mcp yn2u6s | 🔴 Closed | 外部贡献者提交，内容未提供描述，已关闭未合并；核心团队无合并活动。 | [#82555](https://github.com/anthropics/claude-code/pull/82555) |

> **本日无核心功能 PR 合并**，建议关注后续针对上述高热 Issue 的修复 PR。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|----------|------------|----------|
| **多账号/身份隔离** | #36151, #82762 | 移动端/企业网关多身份无缝切换，避免共享邮箱 |
| **Hook 与自动化可靠性** | #6305, #77549 | Hook 执行保证、异步会话恢复后的权限流修复 |
| **后台代理可观测/可控** | #77730, #82104, #82765 | 子代理生命周期管理、Token 实时可见、硬性上限 |
| **Cowork 企业级稳定性** | #59854, #43719, #71616, #81658 | GitHub OAuth、数据持久化、跨端同步、iOS 归档问题 |
| **性能与资源泄漏** | #78834, #63566, #74055 | ugrep 内存、技能上下文膨胀、定时任务幽灵触发 |
| **配置与环境变量可信度** | #82761, #79217 | 环境变量静默失效、MEMORY.md 大小可配置 |
| **IDE/编辑器集成质量** | #82766, #82758, #82759 | 模型徽章一致性、LaTeX 渲染、Markdown 列表缩进 |
| **跨平台原生兼容** | #80584, #72377, #82756, #82763 | Windows HCS/蓝屏、macOS 后台 bootstrap、非英语提示词 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“信任危机”显性化**  
   - 自动更新删数据（#43719）、环境变量静默失效（#82761）、模型状态不一致（#82766）、Hook 不执行（#6305）、**子代理失控烧钱（#82104）** —— 核心工具链可靠性成为头号关切。

2. **企业级协作（Cowork）仍不达产品级**  
   - OAuth 不支持、UI 误导、跨端消息丢失、iOS 自动归档、Windows 蓝屏，阻碍团队落地。

3. **后台/无头模式在 macOS/Linux/WSL 的系统级坑**  
   - Mach bootstrap namespace（#82756）、DNS/TLS 断裂、ugrep OOM（#78834）、storvsp 蓝屏（#72377）。

4. **可观测性缺口**  
   - 无实时 Token 仪表盘、无子代理列表、TaskStop 无效、自动更新失败状态不可清除（#82408）。

5. **配置管理碎片化**  
   - `settings.local.json`、环境变量、CLI 标志、MEMORY.md 限制、自动压缩阈值 分散且互不覆盖，期望统一 Schema 与热重载。

6. **移动端与 Web 端体验断层**  
   - 多账号、会话恢复、权限流、LaTeX 渲染、模型徽章同步，均落后于桌面端。

---

> **下一步建议**：优先修复 **#82104 / #77730（子代理失控）**、**#6305（Hook 失效）**、**#82761（配置静默失效）**，并推出 **子代理 Token 实时看板 + 硬上限** 与 **统一配置 Schema**，以重建企业用户信心。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-31

---

## 1. 今日速览

今日无新版本发布，社区核心关注点集中在 **Windows 平台稳定性危机**（SysmonDrv 导致 BSOD、OneDrive 同步冲突、沙箱权限拦截）、**速率限制公平性争议**（Plus 用户认为 GPT-SOL 5.6 消耗过大）以及 **会话/上下文管理缺陷**（推理等级重置、压缩写入全量 base64、fork 存储放大）。工程侧合并了 20+ 个 PR，重点推进 **Connector 架构重构**、**企业自动化计划支持**、**沙箱违规事件结构化** 与 **流式输出缓冲区性能优化**。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心问题 | 热度/评论 | 重要性判断 |
|---|-------|----------|-----------|------------|
| 1 | [#31035](https://github.com/openai/codex/issues/31035) | **Windows: SysmonDrv v13.22 重装触发 BSOD**，WinDbg 指向 `SysmonDrv.sys` 为崩溃源 | 22 条评论 | 🔴 **P0 阻塞级** — 内核驱动级崩溃，导致开发机器反复蓝屏，需紧急修复沙箱驱动加载逻辑 |
| 2 | [#26478](https://github.com/openai/codex/issues/26478) | Windows 拼写检查检测到拼写错误但菜单显示 "No Guesses Found" | 18 条评论、25 👍 | 🟠 **高频体验Bug** — 影响所有 Windows 桌面用户，长期未修复（创建于 6 月） |
| 3 | [#35420](https://github.com/openai/codex/issues/35420) | OneDrive 降级时 Work/Codex 流式连接反复断开 | 17 条评论 | 🟠 **企业场景阻塞** — OneDrive 企业广泛使用，网络抖动导致会话中断 |
| 4 | [#35552](https://github.com/openai/codex/issues/35552) | 用户因速率限制极度不满，标题含侮辱性语言 | 13 条评论 | 🟡 **社区情绪风向标** — 反映 Plus/Pro 用户对新模型配额的强烈不满 |
| 5 | [#32177](https://github.com/openai/codex/issues/32177) | 纯文本日志附件触发 "Request blocked" 并污染后续对话 | 12 条评论、11 👍 | 🟠 **上下文污染Bug** — 附件处理管线误判，导致会话不可用 |
| 6 | [#13200](https://github.com/openai/codex/issues/13200) | MCP 登录 Slack 官方服务器失败：`Dynamic client registration not supported` | 10 条评论、58 👍 | 🟡 **集成阻塞** — 企业级 MCP 连接器核心场景，高赞长期未决 |
| 7 | [#32707](https://github.com/openai/codex/issues/32707) | Pro 账号 5 小时用量桶从 App 与 API 中消失 | 8 条评论、3 👍 | 🟡 **计费/配额显示异常** — 影响用户用量感知与规划 |
| 8 | [#26930](https://github.com/openai/codex/issues/26930) | 委托/延续后推理等级从 xhigh/high 重置为 low | 8 条评论、1 👍 | 🟡 **推理一致性缺陷** — 多轮任务中模型能力意外降级 |
| 9 | [#23257](https://github.com/openai/codex/issues/23257) | 桌面端压缩反复将完整图片 base64 写入 checkpoint，存储放大 | 8 条评论、5 👍 | 🟠 **存储/性能风险** — 长会话导致磁盘指数级增长 |
| 10 | [#35097](https://github.com/openai/codex/issues/35097) | `gpt-5.6-luna` 被标记为 MultiAgent V1，导致 V2 `spawn_agent` 拒绝 | 6 条评论、13 👍 | 🟠 **多智能体回归** — 新模型元数据分类错误阻断 V2 工作流 |

> **其它值得关注**：[#35864](https://github.com/openai/codex/issues/35864) 包含 Windows 沙箱 `apply_patch` 失效的修复；[#29317](https://github.com/openai/codex/issues/29317) PowerShell AST 解析器泄漏 ~185GB 内存；[#36213](https://github.com/openai/codex/issues/36213) Plus 用户要求 2x 配额或小模型独立限流。

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 核心变更 | 影响范围 |
|---|----|------|----------|----------|
| 1 | [#31458](https://github.com/openai/codex/pull/31458) | Open | **exec-server：远程网络策略决策路由** — 将执行器本地代理策略未命中回传给核心策略决策器，保留环境/执行/工具调用归属 | 沙箱网络策略、企业合规 |
| 2 | [#31922](https://github.com/openai/codex/pull/31922) | Open | **core：新增 `tool_free` 线程模式** — 跳过 MCP 启动、技能/插件枚举，强制空工具路由 | 轻量级助手线程（如标题生成）启动加速 |
| 3 | [#31471](https://github.com/openai/codex/pull/31471) | Open | **[faster-connectors] 提取 Apps 缓存至 `ConnectorRuntimeManager`** — 引入不可变快照、上下文作用域、过期丢弃 | Connector 启动延迟、内存占用 |
| 4 | [#31591](https://github.com/openai/codex/pull/31591) | Open | **启用 Codex Apps 并行工具调用**（默认关闭，特性旗控制） | 多工具并发吞吐 |
| 5 | [#31472](https://github.com/openai/codex/pull/31472) | Open | **codex-mcp：序列化 Connector 运行时刷新** — 显式异步锁防止并发刷新竞态 | Connector 稳定性 |
| 6 | [#36228](https://github.com/openai/codex/pull/36228) | **Closed** | **支持 Enterprise 自动化账户计划** — 识别 `enterprise_cbp_automation`，贯穿认证/后端/协议 schema | 企业自动化计费与权限 |
| 7 | [#36218](https://github.com/openai/codex/pull/36218) | **Closed** | **外部代理检测暴露 Connector 候选项** — 返回归一化名称、会话数、检测源 | 多代理协作发现 |
| 8 | [#36217](https://github.com/openai/codex/pull/36217) | **Closed** | **代码模式完全通过独立宿主运行** — 移除嵌入式 V8 回退，解耦 `codex-code-mode-runtime` crate | 代码执行隔离、版本独立发布 |
| 9 | [#36207](https://github.com/openai/codex/pull/36207) | **Closed** | **记录结构化沙箱违规事件** — 统一文件系统拒绝与托管网络拦截的事件形状 | 审计、安全监控、Guardian 下游 |
| 10 | [#36194](https://github.com/openai/codex/pull/36194) | **Closed** | **流式输出缓冲区避免字节位移** — 统一缓冲 exec 输出，减少无效 UTF-8 / 多帧场景的 O(n²) 拷贝 | 高并发流式吞吐性能 |

> **批量合并趋势**：7 月 30 日当天由 `copyberry[bot]` 合并 10+ 个 PR，涵盖协议导出预计算、Windows 符号链接权限忽略、执行器路径保留、回滚元数据清理、环境时钟同步、远程元数据请求合并等**基础设施强化**类改动。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声 |
|----------|------------|----------|
| **速率限制透明化与分级** | [#24080](https://github.com/openai/codex/issues/24080) 暴露重置时间/余额/计划、[#36213](https://github.com/openai/codex

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-31

> 数据来源：`google-gemini/gemini-cli` | 统计窗口：过去 24 小时

---

## 1. 今日速览

*   **核心主题**：今日无新版本发布，社区活动集中在 **Agent 稳定性修复**、**安全加固** 与 **开发体验优化** 三大方向。
*   **关键动向**：多个 P1 级 Bug 修复 PR 合并/推进（如 Shell 挂起、MCP 超时、模型选择回归），且新增高危安全漏洞修复（SSRF 绕过、Docker 基础镜像升级、供应链 PoC）。
*   **社区痛点**：Subagent 状态上报错误、Generalist Agent 挂起、Auto Memory 重试风暴、终端渲染闪烁等“疑难杂症”持续获得高关注，反映 Agent 架构在长任务、多工具链场景下的鲁棒性仍待打磨。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 标签/优先级 | 核心问题 | 关注理由 & 社区反应 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 超时仍上报 SUCCESS | `priority/p1`, `kind/bug`, `area/agent` | `codebase_investigator` 触及 `MAX_TURNS` 限制后，错误报告 `Termination Reason: "GOAL"` 且状态为成功，掩盖了中断事实。 | **评测/监控失真风险极高**。12 条评论，👍 2。开发者依赖终止理由做下游决策，错误上报会导致编排层误判任务完成。 |
| **2** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 频繁挂起 | `priority/p1`, `kind/bug`, `area/agent` | 启用 Generalist Agent 后，甚至创建文件夹等简单操作也会无限挂起（长达 1 小时），禁用子代理即可恢复。 | **核心功能阻断**。8 条评论，👍 8（高赞）。用户被迫降级使用，严重影响生产力，亟需 Root Cause 分析。 |
| **3** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级评测体系建设 (EPIC) | `priority/p1`, `area/agent`, `aiq/eval_infra` | 跟进 #15300，已积累 76 个行为评测，覆盖 6 个模型版本，旨在建立持续评测管线。 | **工程化基建关键**。7 条评论。标志着从“手工测试”向“数据驱动回归”转型，对长期质量把控至关重要。 |
| **4** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行完毕却卡在 "Waiting input" | `priority/p1`, `area/core`, `kind/bug` | 简单 CLI 命令执行完成后，UI 仍显示活跃并等待输入，导致后续流程阻塞。 | **交互层核心 Bug**。4 条评论，👍 3。直接破坏“所见即所得”体验，高频复现场景。 |
| **5** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 模型主动调用 Skills/Sub-agents 意愿低 | `priority/p2`, `area/agent`, `kind/bug` | 即使任务高度相关（如 Gradle/Git 操作），模型也不主动调用自定义技能/子代理，需显式指令触发。 | **Agent 自主性缺失**。6 条评论。Prompt/系统指令层面的引导机制可能存在缺陷，影响“智能助手”定位。 |
| **6** | [#28555](https://github.com/google-gemini/gemini-cli/issues/28555) **安全**: `web-fetch` SSRF 绕过 (CVSS 8.6) | `priority/p2`, `area/core`, `kind/bug`, `security` | `isPrivateIp()` 同步检查未解析 DNS，攻击者可用解析到内网 IP 的域名绕过 SSRF 防护。 | **高危安全漏洞**。新建 3 天内更新，需紧急回港修复，涉及网络边界安全。 |
| **7** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | `priority/p2`, `area/agent`, `kind/bug` | 提取 Agent 判定会话低信号而跳过读取，导致会话标记为“未处理”，陷入周期性重试风暴。 | **后台任务资源泄漏**。5 条评论。长期运行实例的隐性性能杀手。 |
| **8** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser Agent 锁恢复与会话接管增强 | `priority/p3`, `area/agent`, `kind/feature` | 持久化模式下遇到 Profile 锁即报错退出，缺乏自动接管/恢复机制。 | **浏览器自动化鲁棒性**。4 条评论。CI/CD 或长任务场景下易因孤儿进程导致全链路失败。 |
| **9** | [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) 终端 Resize 高性能无闪烁渲染 | `priority/p2`, `area/core`, `kind/bug` | 需迁移至 `RenderStatic` 并批量更新历史项，解决全量重渲染导致的卡顿与闪烁。 | **基础体验打磨**。2 条评论。Ink 架构升级配合项，关乎大上下文会话的流畅度。 |
| **10** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 > 128 触发 400 报错 | `priority/p2`, `area/agent`, `kind/bug` | 可用工具超过阈值（实为 400+）时请求失败，建议 Agent 智能裁剪工具集。 | **扩展性瓶颈**。3 条评论。MCP 生态扩展下工具数爆发式增长，需动态上下文窗口管理。 |

---

## 4. 重要 PR 进展 (Top 10)

| # | PR | 状态 | 核心变更 | 影响范围 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) `fix(core,cli): propagate InvalidStreamError details` | **Open** (P1) | 将后端 `InvalidStreamError` 的 `type`/`message` 透传至 CLI UI，支持针对性提示（如建议 `/compress`）。 | **错误处理/用户引导**。显著提升“上下文溢出”等常见错误的可恢复性。 |
| **2** | [#28599](https://github.com/google-gemini/gemini-cli/pull/28599) `fix(core): classify capacity exhaustion as terminal` | **Closed** (Merged) | 将 `MODEL_CAPACITY_EXHAUSTED` (429) 标记为终止性错误，触发 Fallback 链路，防止客户端无限重试挂起。 | **可用性/稳定性**。解决预览模型配额耗尽导致的客户端假死。 |
| **3** | [#28410](https://github.com/google-gemini/gemini-cli/pull/28410) `fix(availability): shorten MCP tools/list timeout` | **Closed** (Merged) | 缩短 MCP `tools/list` 发现超时（原 10 分钟），防止启动期因恶意/故障 Server 卡死 CLI。 | **启动性能/安全**。P1 级修复，消除启动阻塞隐患。 |
| **4** | [#28406](https://github.com/google-gemini/gemini-cli/pull/28406) `fix(availability): apply modelIdResolutions to tool sub-agent` | **Closed** (Merged) | 修复 `web-search`/`web-fetch` 等工具硬编码 `gemini-3-flash-preview` 未走解析流程，导致无预览权限用户报 `INVALID_MODEL`。 | **模型路由/权限兼容**。解决 v0.51.0 回归导致的核心工具不可用问题。 |
| **5** | [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) `fix(cli): skip diff hunk markers during @ processing` | **Open** (P2) | `@file` 引用解析时忽略 diff hunk 头部（`@@ ... @@`），避免触发递归全局 Glob 搜索导致堆内存暴涨。 | **性能/内存**。大 Diff 粘贴场景下的 OOM 规避。 |
| **6** | [#28603](https://github.com/google-gemini/gemini-cli/pull/28603) `fix(docker): upgrade sandbox Dockerfile to Node 22` | **Open** (P1, Security) | 沙箱基础镜像 `node:20-slim` -> `node:24-slim` (修正：Node 20 EOL 2026-04)，修复供应链风险。 | **安全/合规**。沙箱执行模型命令，运行时 EOL 属高危。 |
| **7** | [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) `fix(cli): fallback to embedded macOS seatbelt profiles` | **Open** | 修复 macOS 沙箱模式 (`-s`) 启动崩溃：静态 `.sb` 配置文件打包缺失，新增运行时兜底加载逻辑。 | **跨平台稳定性**。macOS/gMac 用户核心功能解锁。 |
| **8** | [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) `fix(cli): add gemini-3.5-flash to model selector` | **Open** (P2) | 修复模型选择器未展示 `gemini-3.5-flash`/`3.6-flash`，旧路径硬编码 `DEFAULT_GEMINI_FLASH_MODEL`。 | **新模型接入**。用户可见性修复，配合后端动态配置生效。 |
| **9** | [#28596](https://github.com/google-gemini/gemini-cli/pull/28596) `feat(cli): add --list-all-sessions option` | **Open** | 新增 CLI 旗标列出**所有工作区**的会话，按路径分组，解决“忘记会话在哪创建”的痛点。 | **开发体验/会话管理**。高频需求显性化。 |
| **10** | [#28594](https://github.com/google-gemini/gemini-cli/pull/28594) `Security PoC: workflow_run supply chain vulnerability` | **Closed** (PoC) | 演示 `trigger_e2e.yml` 触发于 Fork PR，通过保存构建产物实现供应链投毒 PoC。已关闭仅作审计。 | **CI/CD 安全审计**。警示 Fork PR 触发生产工作流的风险。 |

---

## 5. 功能需求趋势洞察

从过去 24 小时的 50 个 Issues 更新中，提炼出社区最聚焦的 4 大演进方向：

1.  **Agent 编排与鲁棒性** —— **最高频**。
    *   Subagent 状态机修正 (#22323)、Generalist 挂机根因 (#21409)、主动技能调度 (#21968)、破坏性操作抑制 (#22672)、Browser Agent 容灾 (#22232)。
    *   *趋势*：从“能跑通”向“可观测、可控制、可恢复”转型，评测基建 (#24353) 同步推进。

2.  **上下文与记忆工程** —— **高投入**。
    *   Auto Memory 去噪/隔离 (#26522, #26523, #26525)、自动压缩溢出 (#28488 PR)、跨工作区会话检索 (#28596 PR)。
    *   *趋势*：长周期任务下的 Token 预算管理、隐私合规（脱敏时机）、噪声治理成为核心课题。

3.  **安全与供应链加固** —— **刚性兜底**。
    *   SSRF 绕过 (#28555)、沙箱运行时 EOL 升级 (#28603)、CI 供应链 PoC (#28594)、MCP OAuth 刷新修复 (#28481)。
    *   *趋势*：随着工具链（MCP、Browser、Shell）暴露面扩大，安全边界下沉至工具实现层（DNS 解析、文件系统隔离、镜像治理）。

4.  **原生开发体验** —— **长尾高频**。
    *   终端 Resize 无闪烁 (#21924)、外部编辑器回归修复 (#24935)、Symlink Agent 识别 (#20079)、Diff 引用解析优化 (#28581)、Settings 环境变量加载顺序 (#28597)。
    *   *趋势*：补齐“本地一等公民”体验短板，消除日常工作流中的纸切伤害。

---

## 6. 开发者关注点 & 痛点总结

| 痛点类别 | 典型反馈 | 关联 Issue/PR | 紧迫度 |
| :--- | :--- | :--- | :--- |
| **Agent “幻觉”

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-31

> 数据来源：`github.com/github/copilot-cli` | 统计窗口：过去 24 小时（~2026-07-30 至 2026-07-31）

---

## 1. 今日速览

- **版本发布**：v1.0.77 正式发布，核心亮点为**引入浏览器端 OAuth 登录流作为本地交互终端的默认方式**，并修复了 `Ctrl+G` 编辑自由文本回答时关闭提示符的交互缺陷；同时引入“无条件自动驾驶审批可禁用当前会话沙箱”机制。
- **社区热点**：Issue 总量激增（24 条更新），核心矛盾聚焦于 **AI 信用额度消耗异常**（多条重复报告）、**子代理/子任务冻结**、**大附件导致会话永久卡死**、**终端渲染与输入延迟** 等稳定性痛点。
- **开发生态**：无 PR 合并/更新，说明团队处于发布后观察期，重心在修复 v1.0.76/77 引入的回归问题。

---

## 2. 版本发布：v1.0.77 (2026-07-30)

| 类型 | 核心变更 | 影响评级 | 备注 |
|------|----------|:--------:|------|
| **新功能** | **浏览器端 OAuth 登录流** 成为 `copilot login` 本地交互终端默认方式；远程/无头终端保留设备码流程。新增 `--web-flow` / `--device-code` 强制参数及交互式 `/login` 选择。 | ⭐⭐⭐⭐⭐ | 大幅改善本地开发者首次登录体验，减少设备码复制粘贴摩擦。 |
| **交互增强** | `Ctrl+G` 现支持在 `ask_user` 自由文本回答模式下打开外部 `$EDITOR` 编辑，**不再关闭提示符**。 | ⭐⭐⭐⭐ | 修复 #4230，解决规划阶段长文本编辑痛点。 |
| **安全/沙箱** | 无条件自动驾驶审批（Autopilot approval）启用时，**自动禁用当前会话沙箱**（前提是允许绕过）。 | ⭐⭐⭐ | 降低全自动模式下的权限拦截干扰，需配合策略审慎使用。 |
| **其他** | 修复 v1.0.76 引入的 `Failed to convert JavaScript value 'Undefined' into rust type 'String'` 崩溃（#4305）。 | ⭐⭐⭐⭐ | 回归修复，建议全量升级。 |

> 📦 **下载/升级**：`npm i -g @github/copilot-cli@1.0.77` 或 `brew upgrade github/copilot/copilot-cli`  
> 🔗 **Release Notes**：[v1.0.77](https://github.com/github/copilot-cli/releases/tag/v1.0.77) | [v1.0.77-0 (预览版详细日志)](https://github.com/github/copilot-cli/releases/tag/v1.0.77-0)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 👍 | 关键词 | 为什么重要 / 社区反应 |
|---|------|------|----|--------|------------------------|
| [#4295](https://github.com/github/copilot-cli/issues/4295) | **AI Credits Near-Limit Warning** | 🟢 Open | 0 | `feature-parity`, `billing` | **高频刚需**：VS 2026 IDE 已有额度预警，CLI 缺失导致企业用户无感超额。社区期望统一护栏。 |
| [#4308](https://github.com/github/copilot-cli/issues/4308) / [#4309](https://github.com/github/copilot-cli/issues/4309) | **Session consuming AI credits after tasks completed** | 🟢 Open | 0 | `billing`, `regression` | **严重计费 Bug**：v1.0.75 多用户反馈静默扣费 ~97.8% 额度，疑似后台任务未正确终止。 |
| [#3767](https://github.com/github/copilot-cli/issues/3767) | **Oversized attachment permanently wedges session** (5 MB CAPI limit) | 🔴 Closed | 1 | `context-memory`, `recovery` | **数据丢失风险**：大附件超限导致会话彻底卡死，无恢复机制。已关闭但未见修复 PR，需追踪后续版本。 |
| [#4293](https://github.com/github/copilot-cli/issues/4293) | **Sub-agents with full tool access return empty/no error** | 🟢 Open | 0 | `agents`, `tools`, `silent-failure` | **核心编排缺陷**：完整工具集的子代理静默失败，受限工具却正常。阻断复杂多智能体工作流。 |
| [#4306](https://github.com/github/copilot-cli/issues/4306) | **Subtasks freeze and stop responding in autopilot** | 🟢 Open | 0 | `autopilot`, `loop`, `speckit` | **自动化阻断**：长循环任务（speckit 等）中途冻结，仅显示 `●` 无日志，严重影响无人值守场景。 |
| [#4299](https://github.com/github/copilot-cli/issues/4299) | **Increasing typing latency over long sessions** | 🟢 Open | 1 | `performance`, `memory-leak` | **体验杀手**：长会话输入延迟指数级上升，疑似事件队列/历史未清理。1.0.76-5 复现。 |
| [#4304](https://github.com/github/copilot-cli/issues/4304) | **New session sidebar cannot navigate with arrow keys** | 🟢 Open | 0 | `terminal-rendering`, `accessibility` | **交互回归**：侧边栏焦点时方向键失效，仅鼠标可用，影响键盘优先用户。 |
| [#4296](https://github.com/github/copilot-cli/issues/4296) | **Cmd+V paste broken in iTerm2 (macOS)** | 🟢 Open | 0 | `input-keyboard`, `macos`, `iterm2` | **平台兼容性**：Claude Code 同环境正常，仅 Copilot CLI 粘贴失效，疑似原始模式处理差异。 |
| [#4297](https://github.com/github/copilot-cli/issues/4297) | **Crash on launch if log-level ≠ "all"/"default"** | 🟢 Open | 0 | `configuration`, `crash` | **启动阻断**：`--log-level error` 等合法值直接崩溃，排查部署日志困难。 |
| [#1381](https://github.com/github/copilot-cli/issues/1381) | **Rewind requires git repo (jj/vcs unsupported)** | 🟢 Open | 10 | `sessions`, `vcs-agnostic`, `legacy` | **长期遗留**：非 Git VCS（如 jj）无法使用 Rewind，VS Code 同款功能无此限制。高赞未解。 |

> 💡 **关闭但值得关注**：#4258 (BYOK 交互模式 `-i` 忽略启动提示词)、#4266 (退出屏幕竞态条件)、#4305 (v1.0.76 Undefined 崩溃) 均在昨日关闭，验证 v1.0.77 是否真修复。

---

## 4. 重要 PR 进展

> **过去 24 小时无 PR 创建/更新/合并**。  
> 推测：团队采用“发布→观察 Issue→批量修复”节奏，下一波 PR 可能集中在下周早期。建议关注 `github/copilot-cli/pulls?q=is%3Aopen+label%3A%22regression%22`。

---

## 5. 功能需求趋势（从全部 24 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|:------------:|------|
| **计费/额度透明化与护栏** | #4295, #4308, #4309 | 🔥🔥🔥🔥🔥 | 企业级采用门槛：必须与 IDE 达到功能对等（预警、硬性限制、实时仪表盘）。 |
| **多智能体/子任务稳定性** | #4293, #4306, #4303 | 🔥🔥🔥🔥 | 从“能跑”向“生产可靠”跨越的关键：静默失败、冻结、工具集差异化表现。 |
| **长会话性能与内存管理** | #4299, #3767, #4266 | 🔥🔥🔥🔥 | 输入延迟、大附件卡死、退出竞态均指向**会话生命周期资源未及时释放**。 |
| **终端交互体验打磨** | #4304, #4296, #4230, #2841 | 🔥🔥🔥 | 键盘导航、粘贴、外部编辑器、鼠标滚动、alt-screen 兼容性——细节决定留存。 |
| **认证与企业合规** | #4300, #4298, #4297 | 🔥🔥🔥 | Bearer Token、沙箱工具白名单、日志级别崩溃——大厂落地必解项。 |
| **VCS 无关化** | #1381 | 🔥🔥 | Rewind 解耦 Git，支持 jj/svn 等，减少迁移阻力。 |

---

## 6. 开发者关注点总结（痛点 & 高频需求）

1. **“看不见的扣费”最让人焦虑**  
   多个独立用户在 v1.0.75 观测到任务结束后信用额度仍高速流失，且无任何可见后台活动。缺乏 `copilot usage` 实时查询命令或 Webhook 通知，导致信任度下降。

2. **子代理/编排能力“半成品感”强**  
   - 全工具集子代理静默返回空（#4293）  
   - 自动驾驶循环中途冻结无日志（#4306）  
   - 配置 MCP 服务器数量影响子代理可用性（#4303）  
   开发者期望：确定性错误、可观测性、工具权限最小化原则文档化。

3. **会话状态管理脆弱**  
   大附件永久楔入（#3767）、退出竞态（#4266）、长会话延迟（#4299）均指向**事件溯源/状态机未做边界保护**。建议引入会话快照、自动分片、优雅降级。

4. **终端适配碎片化严重**  
   iTerm2 粘贴、MobaXterm/PuTTY 滚动、alt-screen 模式、COLORTERM 注入（#4294）……建议建立 **终端兼容性矩阵 CI**，纳入发布门禁。

5. **企业级特性缺口**  
   - Bearer Token / OIDC 代理（#4300）  
   - 沙箱工具白名单（#4298）  
   - 非标准日志级别启动崩溃（#4297）  
   这些是 “能不能进生产环境” 的硬指标。

---

## 📌 给工程团队的可执行建议

| 优先级 | 行动项 | 预估工作量 | 价值 |
|--------|--------|------------|------|
| **P0** | 修复/复现 #4308 #4309 信用额度静默流失，发布 1.0.77.1 热修复 | 1-2 人·天 | 止血计费信任危机 |
| **P0** | 给子代理加入“超时/心跳/空响应”保护机制，返回结构化错误而非静默 | 3-5 人·天 | 解锁生产级编排 |
| **P1** | 实现 `copilot usage` 子命令 + 会话级额度实时显示（参考 VS Code 实现） | 1 周 | 对齐 IDE 特性，降低支持工单 |
| **P1** | 终端兼容性矩阵 CI：iTerm2、MobaXterm、Windows Terminal、SSH alt-screen | 2 周 | 消除长尾交互 Bug |
| **P2** | Rewind 抽象出 `VersionControlProvider` 接口，内置 Git/JJ 适配器 | 1-2 周 | 响应 #1381 高赞诉求，差异化竞争力 |

---

> 📅 **下一期预告**：关注 v1.0.77.1 热修复发布节奏、子代理稳定性专项 PR、以及是否引入 `copilot usage` 遥测端点。  
> 🔔 **订阅提醒**：`gh repo watch github/copilot-cli --notify` 可第一时间收到 Release 与关键 Issue 更新。

--- 

*报告生成时间：2026-07-31 06:00 UTC | 数据截止：2026-07-31 00:00 UTC*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-31

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **无新版本发布**，当前主线版本维持在 `1.49.0`（Issue #2571 反馈版本）。
- 社区核心关注点集中在 **服务可用性**（LLM 过载 429 报错）与 **客户端稳定性**（Windows 下界面冻结、Hook 异步任务泄漏）。
- 长期高呼声功能 **Memory System（持久化记忆/跨会话上下文）** 近期再获更新讨论（Issue #1283），显示用户对“长期上下文工程化”需求强烈。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（共 3 条更新，全量列出）

| # | 标题 | 类型 | 关键信息 | 重要性评估 | 链接 |
|---|------|------|----------|------------|------|
| **#2571** | **LLM Overloaded! Can't use Kimi at all** | 🐛 Bug | **版本 1.49.0 / Mac OS X Tahoe / Moderato 订阅 / Kimi K3**<br>高频触发 `429` 错误（`llm_provider_error`），导致 CLI 完全不可用。仅 1 条评论，但属 **P0 级阻断性故障**，疑似配额限制或上游服务端异常。 | ⭐⭐⭐⭐⭐ **阻断级** | [#2571](https://github.com/MoonshotAI/kimi-cli/issues/2571) |
| **#2570** | **CLI intermittently freezes with spinning moon; correlated with browser tab state** | 🐛 Bug | **版本 0.29.2 / Windows 11 / KIMI Login Subscription / KIMI K3 HIGH**<br>CLI 卡死伴随“旋转月亮”动画，疑与浏览器标签页激活/休眠状态强相关。Windows 平台特有，可能涉及 Electron/Node 事件循环或 WebSocket 心跳机制。 | ⭐⭐⭐⭐ **高频体验伤害** | [#2570](https://github.com/MoonshotAI/kimi-cli/issues/2570) |
| **#1283** | **Feature Request: Memory System - Persistent context across sessions** | 💡 Enhancement | **创建于 2026-02-27，近期更新讨论 (7 条评论)**<br>请求实现**自动记忆 (AI-managed) + 手动记忆**的双轨制持久化上下文系统。这是社区**最早、呼声最高**的长期记忆需求，关联“上下文工程”核心竞争力。 | ⭐⭐⭐⭐ **战略级功能需求** | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) |

---

## 4. 重要 PR 进展（共 1 条更新）

| # | 标题 | 作者 | 状态 | 核心变更 | 关联 Issue | 链接 |
|---|------|------|------|----------|------------|------|
| **#2565** | **fix(hooks): keep a strong reference to fire-and-forget hook triggers** | LHMQ878 | Open | **修复异步 Hook 任务被 WeakSet 回收导致的“静默失败/资源泄漏”**。<br>原代码 `asyncio.create_task` 后未强引用，任务易被 GC 提前回收；现显式持有引用并添加 `done_callback` 捕获异常。属**核心稳定性修复**，建议尽快合入回归测试。 | [#2564](https://github.com/MoonshotAI/kimi-cli/issues/2564) | [#2565](https://github.com/MoonshotAI/kimi-cli/pull/2565) |

---

## 5. 功能需求趋势（基于近期 Issues 聚类分析）

| 趋势方向 | 代表 Issue | 社区呼声特征 | 建议优先级 |
|----------|------------|--------------|------------|
| **持久化记忆 / 跨会话上下文** | #1283 | 长周期（5个月+）、高技术细节讨论、涉及 RAG/向量检索/用户偏好学习 | **P0 (战略差异化)** |
| **服务端配额与可用性 SLA** | #2571 | 突发性、阻断性、直接影响付费用户信任 | **P0 (运营保障)** |
| **跨平台客户端稳定性** | #2570, #2565 | Windows 高频、Electron 架构痛点、异步任务管理缺陷 | **P1 (体验基建)** |
| **Hook/工具链可靠性** | #2565 | 开发者自建工作流依赖，静默失败风险高 | **P1 (生态友好)** |

> **洞察**：当前需求呈现 **"基础设施加固（稳定性/可用性）" 与 "核心智能进化（记忆系统）" 双轨并行**。前者是留存前提，后者是护城河。

---

## 6. 开发者关注点（痛点与高频诉求）

1.  **“能不能用”大于“好不好用”**  
    - #2571 显示 **429 限流导致完全不可用**，付费用户（Moderato/KIMI Login）无降级通道、无本地缓存模式、无离线队列机制。  
    - **诉求**：提供 `fallback model`、请求重试策略配置、本地离线任务队列。

2.  **Windows 原生体验割裂**  
    - #2570 “浏览器标签页状态关联冻结”暴露 Electron/WebView 生命周期管理缺陷，且长期版本 `0.29.2` 仍存此问题。  
    - **诉求**：原生 Tauri/Rust 重写或至少引入 `keep-alive` 心跳、后台进程守护。

3.  **Hook/插件机制的“隐形坑”**  
    - #2565 揭示 `fire-and-forget` 模式下任务被 GC 回收，**无报错、无日志、无重试**，开发者极难排查。  
    - **诉求**：Hook 执行器内置强引用池、超时熔断、结构化日志、可观测性埋点。

4.  **记忆系统期待“开箱即用的 RAG”**  
    - #1283 讨论倾向于 **项目级 `.kimi/memory/` 目录 + 向量化检索 + 自动摘要**，而非单纯指令注入。  
    - **诉求**：内置嵌入模型、增量索引、权限隔离（项目/全局/团队）、导入导出标准格式。

---

## 📌 给工程团队的行动建议
| 动作 | 责任方 | 时效 |
|------|--------|------|
| **紧急排查 #2571 429 错误根因**（配额/路由/上游），发布 Hotfix 或配置开关 | Backend/Infra | **Today** |
| **Review & Merge #2565**，同步补充 Hook 单测覆盖“任务 GC”场景 | Core SDK Team | **Today** |
| **复现 #2570 Windows 冻结**，埋点 WebSocket/EventLoop 状态，评估 Tauri 迁移可行性 | Client Team | **This Week** |
| **启动 Memory System 技术预研**（向量存储选型、增量索引、隐私合规），产出 RFC | AI/Platform Team | **This Sprint** |

---

*报告生成时间：2026-07-31 08:00 UTC | 下次更新：2026-08-01*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-31

---

## 1. 今日速览

- **v1.18.10 正式发布**，核心新增 Modal 模型自动发现功能，桌面端体验全面优化（Toast 通知重构、标签页交互改进、附件去重等）。
- 社区高频反馈集中在 **模型服务稳定性**（GPT-5.6 Sol 过载、DeepSeek 放弃响应、ZEN Gemini 3.6 报错）、**桌面端崩溃**（Stale read、模式切换失效）及 **Web 端会话/项目列表渲染异常**。
- PR 活跃度极高：TUI 交互重构（热重载、作用域默认全局、会话继承目录）、插件系统新增 `session.request` 钩子、xAI 原生选项映射等 20+ PR 在 24h 内推进/合并。

---

## 2. 版本发布

### **v1.18.10** (2026-07-31)
| 类别 | 变更摘要 |
|------|----------|
| **Core** | 新增 **Modal 模型自动发现** (@devennavani) |
| **Desktop** | • 防止重复添加同一附件<br>• 始终显示“新建会话”按钮<br>• Toast 通知重构：堆叠/关闭/移动端布局全面优化<br>• 细化标签页悬停/激活态交互 |

> 🔗 [Release v1.18.10](https://github.com/anomalyco/opencode/releases/tag/v1.18.10)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 评论/👍 | 关键信息 | 重要性 |
|---|------|---------|----------|--------|
| [#39653](https://github.com/anomalyco/opencode/issues/39653) | **GPT-5.6 Sol 服务器过载错误** | 16 / 10 | 近期高频出现 `server overloaded`，仅 Sol 模型受影响；Pi/Codex 正常。用户附带截图显示批量报错。 | 🔴 **P0** 核心模型不可用，影响付费用户生产力 |
| [#39288](https://github.com/anomalyco/opencode/issues/39288) | **升级 1.18.8 后报错：AutoScroller 依赖 Scroller 插件** | 6 / 1 | 升级后主界面直接抛出插件依赖缺失错误，阻塞启动。 | 🔴 **P0** 版本回归，阻断升级路径 |
| [#38655](https://github.com/anomalyco/opencode/issues/38655) | **无法在 Plan 与 Build 模式间切换** | 5 / 0 | 更新后 Build 模式强制激活，Plan 模式入口消失。 | 🟠 **P1** 核心工作流中断 |
| [#39704](https://github.com/anomalyco/opencode/issues/39704) | **Desktop 切换/关闭会话崩溃：Stale read from \<Show>** | 2 / 1 | v1.18.10 引入，切换文件夹或关闭会话必现。 | 🔴 **P0** 新版本严重回归，已有 PR [#39767](https://github.com/anomalyco/opencode/pull/39767) 修复 |
| [#39655](https://github.com/anomalyco/opencode/issues/39655) | **Web UI 显示“No folders found”但后端已返回项目** | 4 / 0 | `opencode web` 首页与打开项目弹窗均空，后端 `/api/projects` 正常。 | 🟠 **P1** Web 入口完全不可用 |
| [#27837](https://github.com/anomalyco/opencode/issues/27837) | **Web 服务器模式下左侧会话列表为空** | 4 / 2 | 长期遗留问题：SSE 事件驱动加载会话，`server.connected` 时未正确同步现有会话。 | 🟡 **P2** 影响 Web 协作场景 |
| [#39491](https://github.com/anomalyco/opencode/issues/39491) | **Plan 模式通过 bash 写入/编辑文件（绕过工具限制）** | 4 / 0 | 模型在 Plan 模式下使用 `cat > file << EOF` 绕过 write-tool 限制。 | 🟠 **P1** 安全/模式隔离失效 |
| [#39771](https://github.com/anomalyco/opencode/issues/39771) | **[FEATURE] 网络错误快速失败 & 简洁错误输出** | 3 / 0 | 中国网络环境下 GitHub HTTPS 常被阻断，默认 60-120s 超时无回退。 | 🟡 **P2** 开发者体验痛点，高频需求 |
| [#39293](https://github.com/anomalyco/opencode/issues/39293) | **ZEN gemini-3.6-flash 返回 Upstream request failed** | 2 / 0 | 同请求下 3.5-flash 正常，仅 3.6-flash 失败。 | 🟠 **P1** 新模型集成缺陷 |
| [#37628](https://github.com/anomalyco/opencode/issues/37628) | **Windows `npm install -g opencode-ai` 报 16 位兼容性错误** | 5 / 0 | `opencode.exe` 与 Windows 版本不兼容，Node v26.5.0。 | 🟡 **P2** Windows 安装链路阻断 |

> **趋势提示**：v1.18.x 系列引入多个**桌面端回归**（崩溃、模式切换、插件依赖），建议加强发布前的 E2E 回归矩阵。

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 核心变更 | 关联 Issue |
|---|------|------|----------|------------|
| [#39787](https://github.com/anomalyco/opencode/pull/39787) | **fix(core): map xAI native options** | Open | 显式映射 `@ai-sdk/xai` 支持的原生选项（reasoning effort、storage、prompt cache key 等），剔除不支持字段，新增映射测试。 | — |
| [#39764](https://github.com/anomalyco/opencode/pull/39764) | **feat(plugin): add session request hook** | Open | 插件边界新增 `session.request`，允许插件在原生请求序列化+认证后**修改 URL/Headers/Body**，以回调形式注入进程级 `LLMClient`。 | — |
| [#39767](https://github.com/anomalyco/opencode/pull/39767) | **fix(app): prevent stale session tab reads** | Open | 修复 Solid 过渡期间标题栏读取已销毁会话导致的 **Stale read from \<Show>** 崩溃。 | #39766, #39704 |
| [#39781](https://github.com/anomalyco/opencode/pull/39781) | **feat(app): select base branch for new workspaces** | Open | 创建 workspace 时允许指定基础分支（修复 `git worktree add --no-checkout -b <branch> <dir>` 缺少 start point）。 | #39778, #39779 |
| [#39776](https://github.com/anomalyco/opencode/pull/39776) | **feat(tui): hot-reload local TUI plugins** | Open | 本地 TUI 插件编辑后**无需重启生效**，崩溃隔离到单插件，不再拖垮整个生成/应用。 | #39777 |
| [#39783](https://github.com/anomalyco/opencode/pull/39783) | **fix(tui): default tabs to global scope** | Open | 会话标签页**默认使用全局作用域**（原为每目录独立），可在设置切回目录级。 | — |
| [#39752](https://github.com/anomalyco/opencode/pull/39752) | **feat(tui): add open menu for sessions and projects** | Closed | TUI 新增 `Ctrl+O` 打开菜单：统一跳转最近会话/打开项目，替换旧 `DialogProject`，修复全项目开关状态持久化。 | — |
| [#39748](https://github.com/anomalyco/opencode/pull/39748) | **fix(session): retry failed title generation** | Closed | 自动标题生成失败后**重试一次**，且始终使用会话首条用户提示词。 | #39529 |
| [#39747](https://github.com/anomalyco/opencode/pull/39747) | **feat(session): make generated titles optional** | Closed | 会话标题**默认 NULL**，生成成功或用户显式重命名前不展示；全链路（App/TUI/CLI/导出/搜索/分享）兼容无标题态。 | — |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | **feat(opencode): local LAN provider discovery + auto-discover models** | Open (长期) | `/connect` 新增 **Local (LAN) 发现**：mDNS + 广播扫描 OpenAI 兼容服务器，**自动拉取模型列表**。 | #6231, #27553 |

> **观察**：TUI 交互重构（作用域、热重载、打开菜单、标题可选）在 24h 内集中合并 6 个 PR，显示团队正在**统一 Desktop/Web/TUI 的会话导航体验**；插件系统引入请求级钩子（#39764）为社区扩展（代理、日志、鉴权改写）打开关键扩展点。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声 |
|----------|------------|----------|
| **模型提供商稳定性与可观测性** | #39653, #39293, #38765, #38473, #37666 | 🔥 极高：付费模型频繁 429/500/401，缺乏重试策略、降级、错误归因 |
| **网络层韧性（中国/受限环境）** | #39771, #39316, #37666 | 🔥 高：需快速失败、SSH 回退、自定义代理、超时可配置 |
| **桌面端原生体验打磨** | #39704, #38655, #38585, #37746, #37566 | 🔥 高：崩溃、快捷键冲突、主题跟随、安装包损坏 |
| **Web/TUI 会话与项目管理** | #39655, #27837, #39752, #39783, #39753 | 🔥 高：列表为空、作用域混淆、打开菜单缺失、目录继承 |
| **Plan/Build 模式隔离与安全** | #39491, #38655 |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-31

> 数据来源：`github.com/earendil-works/pi` (monorepo: `badlogic/pi-mono`)  
> 统计窗口：过去 24 小时内更新的 Issues (50) 与 PRs (31)

---

## 1. 今日速览

- **架构重构进入落地期**：核心维护者 `christianklotz` 连续合并 **Remote Session Wire Protocol** (`#7344`)、**Runtime-neutral Client** (`#7348`)、**Shared Schemas** (`#7346`) 与 **Harness Shutdown Lifecycle** (`#7343`) 四大基建 PR，标志着 Pi 向“可远程部署、多运行时、协议化”架构的关键跨越。
- **Provider 生态加速扩展**：Amazon Bedrock Mantle (`#6216`)、OpenAI Background Mode (`#7339`)、Gemini 3.x Tool-call ID 修复 (`#7047`)、Anthropic OAuth/Request-ID 完善 (`#5871`, `#7161`) 同步推进，云厂商与前沿模型支持全面铺开。
- **TUI 与跨平台体验持续打磨**：Windows 输入重绘 (`#6300`)、Wayland 剪贴板 (`#7248`/`#7261`)、Grapheme 宽度对齐 (`#6987`)、高频重渲染性能 (`#7194`)、Markdown 加粗在浅色背景不可见 (`#7340`) 等长期痛点集中修复。

---

## 2. 版本发布

> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 核心看点 | 链接 |
|---|-------|------|------|----------|------|
| 1 | **Pi does a full re-render every 1s when an active tool card scrolls outside the viewport** | ✅ Closed | 12 | **性能杀手级 Bug**：工具卡片滚出视口触发全量重渲染，导致远程沙箱场景下严重卡顿。已修复并关闭。 | [#7194](https://github.com/earendil-works/pi/issues/7194) |
| 2 | **`/scoped-models` appears to do nothing for ~5 minutes while awaiting stalled catalog refresh** | 🟢 Open | 6 | **核心工作流阻塞**：模型目录刷新卡死导致命令行界面长时间无响应，无 Loading/报错，用户体验极差。 | [#7153](https://github.com/earendil-works/pi/issues/7153) |
| 3 | **anthropic-messages never sends x-client-request-id, unlike all OpenAI paths** | 🟢 Open | 6 | **可观测性缺失**：代理/网关无法通过 Request ID 关联会话，影响企业级部署与多账号轮询场景。 | [#7161](https://github.com/earendil-works/pi/issues/7161) |
| 4 | **Windows: Input line is redrawn on every keystroke (each character appears on a new line)** | 🟢 Open | 6 | **Windows 原生终端兼容性**：cmd/WT 下逐字符换行，严重影响 Windows 用户可用性。 | [#6300](https://github.com/earendil-works/pi/issues/6300) |
| 5 | **Gemini 3.x tool-call IDs stripped from function calls/responses** | 🟢 Open | 5 | **主流模型兼容性断裂**：Gemini 3.x 要求工具调用 ID 往返，当前实现丢失 ID 导致多轮工具调用失败。 | [#7047](https://github.com/earendil-works/pi/issues/7047) |
| 6 | **Silent crash caused by inconsistent error handling and schema validation** | ✅ Closed | 4 | **扩展生态稳定性**：第三方包清单拼写错误导致核心解析崩溃，波及所有会话，暴露容错机制缺失。 | [#7187](https://github.com/earendil-works/pi/issues/7187) |
| 7 | **Ctrl+V text paste silently fails on Wayland (readClipboardText is X11-only)** | 🟢 Open | 4 | **Linux Wayland 原生支持缺失**：仅依赖 X11 clipboard-addon，Wayland 下粘贴静默失败。PR `#7261` 已修复待合并。 | [#7248](https://github.com/earendil-works/pi/issues/7248) |
| 8 | **A stalled availability refresh is permanently unrecoverable** | 🟢 Open | 2 | **核心运行时活锁**：`ModelRuntime` 将可用性刷新合并到单一 Promise，一旦卡死永不可恢复，即使强制刷新也无效。 | [#7301](https://github.com/earendil-works/pi/issues/7301) |
| 9 | **API-key login can hang after saving credential when model catalog refresh stalls** | 🟢 Open | 3 | **首次登录体验断层**：凭据已写入但目录刷新卡死导致登录对话框永不关闭，Esc 也无法退出。 | [#7027](https://github.com/earendil-works/pi/issues/7027) |
| 10 | **An API for enhancing agent message markdown** | ✅ Closed | 12 | **扩展能力开放**：允许扩展在不改动 LLM 上下文前提下变更消息渲染（如公式渲染），配套 PR `#7231` 已合并。 | [#6747](https://github.com/earendil-works/pi/issues/6747) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue | 链接 |
|---|----|------|----------|------------|------|
| 1 | **feat(protocol): add remote session wire protocol** | ✅ Merged | **里程碑级基建**：新增 `@earendil-works/pi-protocol` 包，定义 CBOR 编码、长度前缀帧、命令/事件/快照/错误的完整线路协议，奠定远程会话远程化基础。 | 架构重构 | [#7344](https://github.com/earendil-works/pi/pull/7344) |
| 2 | **feat(client): add runtime-neutral session client** | 🟢 Open | **配套客户端 SDK**：新增 `@earendil-works/pi-client`，建模连接生命周期、请求关联、快照归约、多会话句柄，与 Protocol 包配合实现传输中立。 | #7344 | [#7348](https://github.com/earendil-works/pi/pull/7348) |
| 3 | **feat(ai): share runtime schemas with protocol** | ✅ Merged | **类型安全统一**：在 `pi-ai` 定义 TypeBox Schema 并导出叶类型，`pi-protocol` 复用并投影，对齐 Tool-call/Stop-reason 枚举，消除运行时/协议

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-31

---

## 1. 今日速览
- **夜ly 版本发布**：推出 `v0.21.1-nightly.20260731`，包含 CI 修复与 Web Shell 预览功能更新。
- **核心转换器重构高峰**：针对 Anthropic 协议转换器（`converter.ts`）连续提交 4 个修复 PR（#8159, #8160, #8161, #8163），解决工具调用 ID 清洗、孤儿调用剥离、内容块排序等关键兼容性问题。
- **CI 稳定性攻坚**：主分支 E2E 测试连续失败触发多个自动修复 Issue（#8173, #8153, #8133），重点集中在权限控制、模型切换、ACP Cron 等 SDK 测ètent场景。

---

## 2. 版本发布
### `v0.21.1-nightly.20260731.702932cc7`
- **CI 修复**：为 `qwen-triage` 容器任务添加默认 bash shell（#7838）。
- **Web Shell 预览**：相关前端组件更新（详情见 PR #8174, #8098）。
- 🔗 [Release 页面](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260731.702932cc7)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标签 | 标题 | 重要性 & 社区反应 | 链接 |
|---|---|---|---|---|
| **#8124** | `P2` `bug` `ui` `windows` | 启动横幅首帧渲染缺失顶部 ~3 行（间歇性，关联 Provider 更新） | **高**：影响首屏体验，Windows 用户反馈明显，9 条评论讨论渲染时序竞态。 | [#8124](https://github.com/QwenLM/qwen-code/issues/8124) |
| **#7966** | `question` `session` `file-ops` | 如何获取会话中创建的文件列表（含间接生成）？ | **高**：开发者迫切需要会话级文件审计能力，6 条评论探讨工作区隔离方案。 | [#7966](https://github.com/QwenLM/qwen-code/issues/7966) |
| **#8136** | `P2` `bug` `security` `cli` | Provider 警告脱敏器截断含端口信息，且泄露含 `@` 的密码 | **高**：安全漏洞，影响凭据泄露风险，已有修复 PR #8137。 | [#8136](https://github.com/QwenLM/qwen-code/issues/8136) |
| **#8162** | `P2` `bug` `core` `content-gen` | Anthropic 转换器：历史轮次中 sibling `tool_use` 被移除后，陈旧 thinking 签名未清理 | **高**：核心模型兼容性 Bug，影响长上下文推理正确性，4 条评论深度技术讨论。 | [#8162](https://github.com/QwenLM/qwen-code/issues/8162) |
| **#8138** | `P2` `bug` `config` `worktree` | Worktree 设置写入项目根目录 `.qwen` 而非 worktree 自身目录 | **中**：多工作树场景数据隔离失效，4 条评论确认复现路径。 | [#8138](https://github.com/QwenLM/qwen-code/issues/8138) |
| **#8146** | `P2` `bug` `integration` `windows` `desktop` | 桌面端无法连接 LM Studio（Windows） | **中**：阻断本地模型开发流，4 条评论含截图，怀疑 Tauri 网络策略问题。 | [#8146](https://github.com/QwenLM/qwen-code/issues/8146) |
| **#8172** | `P2` `bug` `core` `interactive` | Agent Team：队友消息队列阻塞整个长工具调用周期，而非仅下一响应 | **中**：多 Agent 协作性能瓶颈，3 条评论分析流控逻辑。 | [#8172](https://github.com/QwenLM/qwen-code/issues/8172) |
| **#8102** | `P3` `feature` `core` `security` | 提案：可信 Agent 运行时的工具执行确定性边界 | **高**：架构级讨论，4 条评论探讨信任边界与运行时授权模型。 | [#8102](https://github.com/QwenLM/qwen-code/issues/8102) |
| **#7972** | `P2` `bug` `cli` `windows` | v0.21.1 Windows 崩溃 3 次 | **高**：版本回归阻断，4 条评论附带堆栈，关联 PR #8088 异常捕获增强。 | [#7972](https://github.com/QwenLM/qwen-code/issues/7972) |
| **#8173** | `bug` `ci-cd` `e2e` | 主干 CI 失败：E2E Tests on 702932cc7c70 | **高**：阻断合并，自动创建 Issue，3 条评论追踪波动测试。 | [#8173](https://github.com/QwenLM/qwen-code/issues/8173) |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 类型 | 标题 | 核心变更 | 关联 Issue | 链接 |
|---|---|---|---|---|---|
| **#8163** | `fix` | Anthropic：不再剥离末尾 `tool_use`，去重重复 `tool_result` | 修复 `cleanOrphanedToolCalls` 误判“结果尚未到达”为孤儿调用；去重混合内容中的重复工具结果。 | #8159, #8161 | [#8163](https://github.com/QwenLM/qwen-code/pull/8163) |
| **#8169** | `feat` | Core：新增 OpenAI Responses API Content Generator | 引入 `OpenAIResponsesContentGenerator`，支持 Responses API 原生格式（`input`/`output`/`tools`），统一工具调用与流式处理。 | - | [#8169](https://github.com/QwenLM/qwen-code/pull/8169) |
| **#8171** | `feat` | Memory：配置后台 Agent 轮次上限 (`memory.agentMaxTurns`) | 统一梦境 Agent 与自动技能审查 Agent 的最大轮次配置，默认 8，0 表示无限制，修复 #8168。 | #8168 | [#8171](https://github.com/QwenLM/qwen-code/pull/8171) |
| **#8137** | `fix` | CLI：将警告凭据剥离范围限定在 URL Authority | 复用 URL 解析器定位 Authority 片段，移除启发式扫描，修复端口截断与 `@` 密码泄露。 | #8136 | [#8137](https://github.com/QwenLM/qwen-code/pull/8137) |
| **#8088** | `fix` | CLI：VP 模式添加 `uncaughtException` 处理器与错误可见性 | 防止静默崩溃，确保下一次崩溃可被观测，缓解 #7971/#7972 类问题。 | #7971, #7972 | [#8088](https://github.com/QwenLM/qwen-code/pull/8088) |
| **#8176** | `feat` | Core：规范化工具调用终端遥测 | 统一工具调用结果契约：软错误归类为 `unknown`，派生兼容 `success` 字段，利于监控与告警。 | - | [#8176](https://github.com/QwenLM/qwen-code/pull/8176) |
| **#8056** | `feat` | Serve：按选中 Workspace 隔离托管记忆 | 增加 Workspace 级 `remember/forget/dream` 异步操作，走独立任务通道；新增精确 Workspace 存储模式。 | - | [#8056](https://github.com/QwenLM/qwen-code/pull/8056) |
| **#8132** | `feat` | Desktop：将 Web Shell 打包为发布级桌面应用 | 基于 Tauri 封装 Web Shell，原生生命周期、工作区选择、启动恢复态，替代独立桌面 UI。 | #8146 | [#8132](https://github.com/QwenLM/qwen-code/pull/8132) |
| **#7957** | `feat` | CLI：支持粘贴 Windows 复制的文件 | 兼容文件资源管理器复制的文件列表：图片走附件流，其他文件插入路径引用。 | - | [#7957](https://github.com/QwenLM/qwen-code/pull/7957) |
| **#8156** | `fix` | Test：限定 auto-edit `canUseTool` 断言仅针对 write/edit 工具 | 稳定 SDK E2E 易变测试，记录实际回调工具并断言写入类工具未被拦截。 | #8153 | [#8156](https://github.com/QwenLM/qwen-code/pull/8156) |

---

## 5. 功能需求趋势（从 Issues 提炼）

1. **多模型协议深度兼容**  
   - Anthropic 转换器连续修复（#8159-#8163）、新增 OpenAI Responses API 生成器（#8169）、Provider 警告脱敏（#8136），显示**模型适配层**是当前核心投入点。

2. **会话与工作区隔离增强**  
   - 会话文件审计（#7966）、Worktree 级配置隔离（#8138）、托管记忆 Workspace 隔离（PR #8056），需求指向**多租户/多项目并行**的企业级场景。

3. **桌面端原生化与本地模型集成**  
   - Web Shell 打包桌面应用（PR #8132）、LM Studio 连接失败（#8146）、Windows 安装器校验失效（#7118），反映**本地推理与跨平台分发**是强刚需。

4. **Agent 协作与运行时治理**  
   - Agent Team 消息队列阻塞（#8172）、Subagent 状态监控（#8128）、可信运行时提案（#8102），趋向**多 Agent 编排的可观测性与安全边界**。

5. **CI/CD 稳定性与自动化闭环**  
   - 连续 E2E 失败自动建 Issue（#8173, #8153, #8133）、Auto Fix CI 工作流提案（#4362），体现**工程效能基建**持续投入。

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点 / 需求 | 高频表现 | 代表 Issue/PR |
|---|---|---|
| **Windows 稳定性** | 崩溃无堆栈（#7972）、安装器 `Get-FileHash` 失败（#7118）、LM Studio 不通（#8146）、启动渲染缺行（#8124） | #7972, #7118, #8146, #8124 |
| **会话上下文管理** | 无法追踪会话生成文件（#7966）、`additionalContext` 污染 JSONL（#7940）、Worktree 配置串扰（#8138） | #7966, #7940, #8138 |
| **模型协议边缘情况** | Thinking 签名残留（#8162）、工具 ID 字符集不合规（#8160）、`tool_result` 顺序不定（#8161）、孤儿调用误删（#8159） | #8162, #8160, #8161, #8159 |
| **CI 易变性阻碍迭代** | 主干 E2E 频繁红构建（#8173, #8153, #8133, #8108, #8072）、自动修复机制尚在完善 | #8173, #8153, #8133 |
| **可观测性与调试能力** | VP 模式静默崩溃（#8088）、Provider 警告脱敏漏洞（#8136）、工具遥测字段不统一（PR #8176） | #8088, #8136, #8176 |

---

> **数据来源**：`github.com/QwenLM/qwen-code` 过去 24 小时 Releases / Issues / PRs  
> **生成时间**：2026-07-31 08:00 UTC  
> **下一期预告**：关注 `v0.21.1` 稳定版发布节奏、OpenAI Responses API 落地进度、Windows 安装器修复验收。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-31

> 数据来源：`github.com/Hmbown/CodeWhale` | 统计窗口：2026-07-30 最近 24 小时更新

---

## 1. 今日速览

- **v0.9.2 正式发布**，完成从 `deepseek-tui` 到 `codewhale` 的品牌与包名迁移，废弃旧版 npm 包，修复权限系统、Fleet 持久化、推理检查、压缩错误、子代理监管、沙箱真值、凭证 UX 等交付阻断问题。
- **v0.9.3 重构全面展开**：以“单二进制、运行时所有权收敛、工具注册表统一、上下文瘦身、压缩契约化”为核心，已拆解为 10+ 个 EPIC 并行推进，编译耗时与单体 crate 成为开发者痛点。
- **跨平台与易用性补强**：DevContainer 支持 Windows、AltGr 键位兼容、LaTeX 数学渲染、前台 Shell 分离等 PR 密集合入，社区发起“宪法”中文翻译讨论与桌面端需求呼声。

---

## 2. 版本发布

### **v0.9.2** — CodeWhale 品牌落地与交付稳定性里程碑
- **发布 PR: [#4982](https://github.com/Hmbown/CodeWhale/pull/4982) (Closed)
- **核心变更**：
  - CLI 命令统一为 `codewhale`，npm 包 `deepseek-tui` 正式废弃；
  - 修复权限授权顺序、Fleet 设置/持久化、推理检查、压缩错误处理、子代理监管/转向、沙箱真值、Provider 凭证 UX、环境生物轮廓等 8 类交付阻断缺陷；
  - 移除已被取代的子代理工作树隔离实现。
- **影响**：用户需迁移配置至 `~/.codewhale`，旧版 `deepseek`/`d` 命令停止维护。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心价值 | 社区反应/进展 |
|---|-------|----------|---------------|
| 1 | [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) **EPIC: 命令边界分阶段重构** | v0.9.3 核心架构重构的总追踪，拆解为可合并的小层，解耦 CLI/TUI 命令分发 | 19 条评论，已产出参考 PR #2851，处于活跃推进期 |
| 2 | [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) **v0.9.3 重构：收敛运行时所有权，发布单一可执行文件** | 解决 18 个 Rust crate、77 万行代码中 87% 集中在 `codewhale-tui` 的单体问题 | 4 评论，作为 v0.9.3 伞形 Issue 统筹库拆分与库内派发 |
| 3 | [#4704](https://github.com/Hmbown/CodeWhale/issues/4704) **Context Diet：最小化所有面向模型的 Prompt/Schema/Payload** | 从 29 KB 稳定系统提示词入手，审计冗余层，目标跨模型家族的可移植行为 | 0 评论，但关联 #4707/4709/4710 三个子任务，架构组高优 |
| 4 | [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) **配置路径在 Windows/Cygwin 碎片化 + 静默迁移 Bug** | 跨平台配置与密钥路径不一致，导致凭证丢失，附带复现补丁 | 7 评论，阻断 Windows 用户体验，急需统一存储抽象 |
| 5 | [#4991](https://github.com/Hmbown/CodeWhale/issues/4991) **讨论：编译耗时与 TUI crate 单体——其他人也有感触？** | 开发者反馈自定义斜杠命令重构时编译等待过长，呼吁拆 crate/增量构建 | 1 评论，直击开发效率痛点，可能推动 #3306 加速 |
| 6 | [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) **v0.9.3：定义 CLI/TUI 对子代理与运行时控制面的一致性** | TUI 侧边栏成主交互入口，但云端/远程工作台需复用同一控制面 | 7 评论，关联子代理转向 #4989，架构一致性关键 |
| 7 | [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) **Anthropic 兼容 API 报 `'type' must be in ["enabled", "disabled", "auto"]`** | OpenModel 等兼容层触发 400 错误，重试偶现成功，疑似参数序列化缺陷 | 1 评论，影响第三方 Provider 可用性，需尽快定位 |
| 8 | [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) **讨论：“Constitution” 中文译法——“宪法”/“协作准则”或其他？** | 国际化文案落地的文化敏感性讨论，邀请中文母语者参与 | 4 评论，社区高参与度，体现本地化重视度 |
| 9 | [#4906](https://github.com/Hmbown/CodeWhale/issues/4906) **Show, don't tell：为官网与 README 录制真实 CodeWhale 会话** | 终端代理属强视觉产品，现有文档纯文本，新用户无法直观理解 | 3 评论，文档组计划产出 GIF/视频，提升转化率 |
| 10 | [#4807](https://github.com/Hmbown/CodeWhale/issues/4807) **Ambient Ocean：水母渲染像“带串的团块”，需真实轮廓** | 犬食实测发现 ASCII 艺术识别度低，需重绘触手与钟型轮廓 | 2 评论，属品牌调性细节，v0.9.2 后纳入 v0.9.3 打磨 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 核心内容 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#4982](https://github.com/Hmbown/CodeWhale/pull/4982) | **Closed** | **Release v0.9.2**：汇总 8 类交付阻断修复，完成品牌迁移交接 | — |
| 2 | [#4992](https://github.com/Hmbown/CodeWhale/pull/4992) | Open | **Layer 5.2**：用户命令分发优先级、遮蔽语义与错误语法的 Gherkin 验收测试 | #2870 |
| 3 | [#4990](https://github.com/Hmbown/CodeWhale/pull/4990) | Open | **DevContainer Windows 支持**：专用镜像含 Rust 工具链，改用命名卷规避 HOME 展开问题 | #2369 |
| 4 | [#4979](https://github.com/Hmbown/CodeWhale/pull/4979) | **Closed** | **修复**：前台 Shell 阻塞时 Enter 转向前先分离到 `/jobs`，保留原有排队行为 | #4930 |
| 5 | [#4981](https://github.com/Hmbown/CodeWhale/pull/4981) | Open | **Feat**：LaTeX 环境/行内命令/重音/下标上标/大小写不敏感环境匹配的完整数学渲染 | — |
| 6 | [#4980](https://github.com/Hmbown/CodeWhale/pull/4980) | **Closed** | **Docs**：发布并锁定授权顺序（工具准入→Hook→注册需求→类型化规则→自动评审→仓库法→审批→沙箱） | — |
| 7 | [#4984](https://github.com/Hmbown/CodeWhale/pull/4984) | **Closed** | **Fix**：运行时配置持久化回滚 + `GET /v1/tasks` 增加 `workspace` 过滤与路径返回 | — |
| 8 | [#4985](https://github.com/Hmbown/CodeWhale/pull/4985) | Open | **Feat(runtime-api)**：任务列表按工作区作用域，回归测试覆盖截断前过滤 | #4984 |
| 9 | [#4983](https://github.com/Hmbown/CodeWhale/pull/4983) | **Closed** | **Test**：移除 Skills 视口排序假设，改等待 owned-scan 回执，消除冗余测试脚手架 | — |
| 10 | [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) | Open | **Fix**：AltGr 输入 `/` (如巴西 ABNT2 `AltGr+Q`) 被误判为 `Ctrl+/` 打开帮助，现放行作曲器 | #4723 |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

1. **架构模块化与单二进制交付** — #3306、#4747、#3948、#4174 聚焦将 77 万行单体拆为库内派发、精简 `main.rs`、统一双 ToolRegistry。
2. **上下文工程与 Token 预算** — #4704/4707/4709/4710/4394 形成“Context Diet”专项：瘦身系统提示词、跨模型消融测试、去重项目/环境/路由/技能上下文、硬性预算与结构化压缩契约。
3. **子代理与运行时控制面一致性** — #4022、#4989、#3950、#3957 推动 CLI/TUI/云端对子代理状态、转向、取消、模态基础设施的统一语义。
4. **跨平台原生体验** — #2369、#4990、#4977 解决 Windows/Cygwin 配置路径、DevContainer、键位映射碎片化。
5. **可视化与文档化** — #4906、#4807、#4981 补齐“所见即所得”演示、品牌生物轮廓、数学渲染，降低新用户认知门槛。
6. **桌面级产品化** — #4986 呼吁一等桌面应用（类 Codex Desktop），托管终端/工作目录/后台进程/项目快捷方式。

---

## 6. 开发者关注点与痛点

| 痛点/需求 | 证据 | 影响面 |
|-----------|------|--------|
| **编译反馈循环过长** | #4991 讨论：TUI crate 单体导致增量编译慢，阻碍命令重构迭代 | 核心贡献者效率 |
| **配置与密钥跨平台不一致** | #2369、#4987、#4990：Windows/Cygwin/DevContainer 下 `CODEWHALE_HOME` 与默认存储分离导致凭证“丢失” | Windows 用户留存 |
| **第三方 Provider 兼容性脆弱** | #4978：OpenModel 触发 Anthropic 400 错误，参数 `type` 校验失败，重试不可靠 | 多模型生态扩展 |
| **前台 Shell 交互反直觉** | #4930、#4979：长命令阻塞时用户习惯直接输入新指令，现需先分离作业 | TUI 核心交互体验 |
| **缺乏直观演示素材** | #4906：官网与 README 无运行画面，新访客需脑补工作面/阶段轨/代理卡片 | 用户获取

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*