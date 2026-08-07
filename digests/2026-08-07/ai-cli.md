# AI CLI 工具社区动态日报 2026-08-07

> 生成时间: 2026-08-07 02:21 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告｜2026-08-07

---

## 1. 生态全景

当前 AI CLI 工具生态呈现 **"大厂主导、多极竞争、工程化深水区"** 的格局。九大主流工具中，**Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI** 四大头部厂商工具形成第一梯队，日均 Issue 30-50+、PR 10-20+，发布节奏周级；**Qwen Code、Kimi Code、OpenCode、Pi** 组成第二梯队，发布节奏加快至日级/周级，聚焦垂直场景深耕；**DeepSeek TUI** 以社区驱动为主，重构力度大但商业化路径尚不明确。全行业核心矛盾已从 **"模型能力接入"** 转移至 **"工程化落地最后一公里"**：权限模型、跨平台稳定性、长会话管理、MCP 生态工程化、Windows 原生体验成为五大共性硬仗。

---

## 2. 各工具活跃度对比（2026-08-07 单日数据）

| 工具 | Issues 更新数 | PR 更新数 | Release 情况 | 核心动态关键词 |
|------|---------------|-----------|--------------|----------------|
| **Claude Code** | 50 | 3 | 无新版 | 权限系统失效、Windows MSIX 崩溃、Cowork Git 代理阻断、文档债务集中清理 |
| **OpenAI Codex** | ~50 | 20+ | **v0.147.0** | Windows 进程泄漏、MCP 内存泄漏、Agent 插件系统、会话分区 |
| **Gemini CLI** | 高活跃 | 10+ | **v0.56.0-nightly / v0.55.0-p2 / v0.54.2** | AI 误删文件信任危机、认证死循环修复、Shell 融合、高内存泄漏 |
| **GitHub Copilot CLI** | 32 | 0 | **v1.0.79-6** | 会话恢复 OOM 回归、MCP 孤儿进程/BigInt 崩溃、NixOS 不兼容、历史滚动缺失 |
| **Qwen Code** | 高活跃 | 10+ | **v0.21.7 / nightly / live-host-v0.1.0** | OAuth 额度缩减、Hook 回归、Windows Desktop 崩溃、内联图片渲染、Goals 无限轮次 |
| **Kimi Code CLI** | 8 | 3 | 无新版 | StrReplaceFile 非 UTF-8 字节损坏、跨会话记忆系统、VSCode 插件交互补齐 |
| **OpenCode** | 9 高热 Issue (140+ 评论) | 20+ | 无新版 | **Go/Zen 订阅付费模型全面 401 不可用 (P0)**、会话上下文可视化、隐私条款回退 |
| **Pi** | ~50 | 10+ | **v0.84.0** | Fullscreen TUI 发布、Windows 支持碎片化、自动压缩失效、X11 连接泄漏 |
| **DeepSeek TUI** | 10 高质量 Issue | 10+ | **v0.9.4 发布列车合并** | 命令边界重构 EPIC、Runtime API 扩展、Subagent 检查点恢复、构建性能优化 |

> **数据说明**：Issues/PR 数为过去 24h 活跃/更新数；"高活跃"指 Issue 评论数高、讨论深；Release 情况以正式版/预览版/夜ly 为准。

---

## 3. 共同关注的功能方向（跨工具共性需求）

| 共性方向 | 涉及工具（典型诉求） | 核心痛点 |
|----------|---------------------|----------|
| **权限/安全模型精细化** | **Claude Code** (#6527 allow/ask 失效、#76718 复合命令提示风暴)、**Qwen Code** (#8582 只读 Shell 绕过、#8643 serve 信任评估绕过)、**Gemini CLI** (#22672 破坏性操作阻止)、**Kimi** (#2591 文件编辑字节级保真) | 权限模型逻辑缺陷、绕过风险、提示风暴、破坏性操作确认机制缺失 |
| **Windows 原生体验补齐** | **Claude Code** (#57371 Cowork 后台不可禁、#81664 MSIX GPU 崩溃)、**OpenAI Codex** (#33776 进程风暴、#37104 WSL 失败)、**GitHub Copilot** (#3392 NixOS Bash 失效、#4384 代码页)、**Qwen Code** (#8615 Desktop 崩溃)、**Gemini CLI** (#20773 PS 5.1 && 算子) | 进程/资源泄漏、沙箱/WSL/PTY 兼容、原生 Shell 集成、GUI 崩溃、编码/代码页问题 |
| **长会话/上下文管理** | **Claude Code** (#54750 配额显示异常、#33026 主动压缩)、**OpenAI Codex** (#35463 子代耗尽配额、#37347 上下文窗口按 Agent 隔离)、**Gemini CLI** (#22323 子任务成功误报、#26522 Auto Memory 无限重试)、**Qwen Code** (移除 Goals 50 轮限制、#8320 Workflow 暂停恢复)、**OpenCode** (#6152 上下文用量可视化 129👍)、**Pi** (#6879 自动压缩失效) | 配额/用量统计失真、压缩机制失效/不可控、跨会话/子会话上下文隔离与恢复、Token 预算可视化 |
| **MCP 生态工程化** | **Claude Code** (#76248 Cowork Git 代理拦截)、**OpenAI Codex** (#20883 MCP 进程池复用、#33531 10.9GB 泄漏)、**Gemini CLI** (#27731 MIME 不匹配、#27725 参数类型错误、#24246 工具数>128 报错)、**Qwen Code** (Web Shell 扩展归档安装 #8621)、**OpenCode** (#4346 CI 认证 403、#4392 孤儿进程泄漏) | 进程生命周期管理、内存泄漏、Schema/MIME 校验、工具发现扩容、CI/CD 认证适配、Registry 发现机制 |
| **跨平台终端/TUI 体验** | **Claude Code** (#72173 VS Code 鼠标选择失效)、**OpenAI Codex** (#21653 多行状态栏 58👍)、**GitHub Copilot** (#4311 渲染空白行、#4313 历史滚动)、**Pi** (v0.84.0 Fullscreen TUI、#7720 选中即复制、#7736 宽行崩溃)、**DeepSeek TUI** (#5223 滚动路由错误、#5255 Palette/Completion 重构) | 渲染稳定性、交互细节(滚动/选择/复制/状态栏)、键位/鼠标交互一致性、全屏/分屏模式 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|----------|----------|----------|--------------|
| **Claude Code** | **企业级生产力标杆** | 权限模型、Cowork 云端协作、插件市场、安全合规 | 企业团队、合规敏感型组织、重度 Claude 用户 | Rust 核心、自建权限沙箱、Marketplace 生态、强调安全与审计 |
| **OpenAI Codex** | **多智能体编排平台** | Agent 插件系统、会话分区、MCP 进程池、模型路由、Rollout 灰度 | 需要复杂多 Agent 编排、自定义模型路由的高级用户/团队 | Rust、App Server 架构、Bubblewrap 沙箱、重基础设施工程化 |
| **Gemini CLI** | **Google 生态集成入口** | MCP 深度适配(Workspace/Figma)、长期记忆、VSCode 深度融合、自动化 Nightly | Google Cloud/Workspace 用户、多模态工具链重度用户 | TypeScript/Node、MCP 优先、Nightly 高频发布、重 IDE 集成 |
| **GitHub Copilot CLI** | **GitHub 原生开发流集成** | PR/Review 工作流、Rubber Duck 评审、MCP Registry、GitHub Actions 集成 | GitHub 重度用户、PR 驱动开发流团队 | Go/TypeScript、深度绑定 GitHub 平台能力、v1.0 后稳定性挑战大 |
| **Qwen Code** | **多模态/国产化先锋** | 内联终端图片、语音前端(qwen-audio-agent)、OAuth 免费额度、Goals 无限轮次、ACP 生态 | 国内开发者、多模态探索者、ACP 协议早期采纳者 | TypeScript/Node、多模态原生、ACP 协议推动、国产模型深度适配 |
| **Kimi Code CLI** | **长上下文/记忆专家** | 跨会话持久化记忆、StrReplaceFile 字节级保真、VSCode 插件原生化 | 长任务/知识密集型开发者、Kimi 模型用户 | Rust/TypeScript、重文件编辑安全性、记忆系统架构设计中 |
| **OpenCode** | **订阅制多模型聚合器** | Go/Zen 订阅模型、TUI 交互细节、隐私合规、跨项目会话 | 付费订阅用户、多模型切换需求者、隐私敏感用户 | Go、TUI 原生、上游供应商聚合模式(当前面临 401 危机) |
| **Pi** | **极客可定制 TUI 实验场** | Fullscreen TUI、Provider 爆炸扩展、Prompt 渐进式披露、SQLite 优化 | 终端极客、自建 Provider/模型、追求极致 TUI 体验 | Rust、模块化 Provider 架构、激进 TUI 创新、社区驱动 |
| **DeepSeek TUI** | **命令系统重构者** | 命令边界重构 EPIC、Runtime API、Subagent 检查点、构建性能 | TUI 交互体验极客、Subagent 重度用户、Rust 爱好者 | Rust、命令系统层层重构、ACP 集成、构建工程化(分离 Profile/LTO) |

---

## 5. 社区热度与成熟度评估

| 梯队 | 工具 | 社区热度 | 成熟度 | 关键信号 |
|------|------|----------|--------|----------|
| **第一梯队（头部）** | **Claude Code** | ⭐⭐⭐⭐⭐ (Issue 50+/日、高赞深度讨论) | 🟢 **生产就绪** | 权限/Windows/Cowork 三大阻断性 Bug 并存，文档债务系统性清理，插件工具链 PR 密集 |
| | **OpenAI Codex** | ⭐⭐⭐⭐⭐ (Issue 50+/日、PR 20+/日) | 🟡 **快速迭代中** | v0.147.0 落地 Agent 插件/会话分区，Windows/MCP 基建债务高，P0 级进程泄漏未解 |
| | **Gemini CLI** | ⭐⭐⭐⭐ (高热 Issue 47 评论、多版本并行) | 🟡 **高频发布期** | v0.54/0.55/0.56 三线并行，信任危机(#26856)暴露安全短板，认证/Shell 核心修复密集 |
| | **GitHub Copilot CLI** | ⭐⭐⭐⭐ (Issue 32/日、35👍 高呼声) | 🟡 **稳定期挑战期** | v1.0.79-6 修复严重回归，但 OOM/NixOS/MCP 系列问题显示回归测试矩阵不足 |
| **第二梯队（上升期）** | **Qwen Code** | ⭐⭐⭐⭐ (Issue 高讨论度、多 Release) | 🟢 **功能激进期** | v0.21.7 多模态/长任务双突破，OAuth 政策变动引发社区震动，安全修复并行 |
| | **Kimi Code CLI** | ⭐⭐⭐ (Issue 深度讨论、PR 快速响应) | 🟡 **核心功能攻坚** | StrReplaceFile 双 PR 并行修复显示重视度，记忆系统/VSCode 插件为下一增长极 |
| | **OpenCode** | ⭐⭐⭐⭐ (9 高热 Issue 140+ 评论) | 🔴 **信任危机期** | **Go/Zen 订阅付费模型全面 401 16 天未解**，PR 活跃但核心可用性归零 |
| | **Pi** | ⭐⭐⭐ (Issue 50、PR 10+、v0.84.0 大版本) | 🟡 **TUI 创新期** | Fullscreen TUI 发布后 24h 6+ 回归 Issue，Windows 支持碎片化成最大痛点 |
| **第三梯队（社区驱动）** | **DeepSeek TUI** | ⭐⭐⭐ (高质量 Issue/PR、EPIC 重构) | 🟡 **架构重构期** | v0.9.

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

---

# Claude Code Skills 社区热点报告（数据截至 2026-08-07）

---

## 1. 热门 Skills 排行（Top 8）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **[skill-creator 评估体系修复](https://github.com/anthropics/skills/pull/1298)** | 修复 `run_eval.py` 评测循环 **recall 恒为 0%** 的核心缺陷：Windows 管道读取失败、触发检测逻辑失效、并行 worker 污染实时注册表 | 关联 Issue #556、#1169、#1323 等多条高热 Issue，**阻断了所有技能描述的自动优化能力** | 🟢 OPEN |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | AI 生成文档的排版质量把控：孤行/寡行消除、标题不落页底、编号对齐 | 解决“Claude 生成文档排版差”这一通用痛点，适用性极广 | 🟢 OPEN |
| 3 | **[self-audit](https://github.com/anthropics/skills/pull/1367)** | **交付前自审技能**：机械性文件存在性校验 → 四维推理质量门（正确性/完整性/一致性/安全性），按损害等级优先 | 引入“交付门控”范式，配合 Issue #1385 三阶段管线提案，推动“可信交付”标准化 | 🟢 OPEN |
| 4 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | 全栈测试模式库：Testing Trophy、AAA、React Testing Library、契约测试、E2E、Mutation、Property-based、性能/负载/混沌 | 社区对**标准化测试指导**需求强烈，填补技能库在“质量工程”维度的空白 | 🟢 OPEN |
| 5 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | 元技能：从结构/文档/示例/资源/安全五维度打分技能质量；安全分析器做提示词注入/权限越界/数据外泄静态扫描 | 回应 Issue #492 命名空间滥用担忧，**建立技能准入与审计基线** | 🟢 OPEN |
| 6 | **[plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)** | 规划产出物生命周期管理：创建→执行→归档/清理，解决“规划文件无限堆积” | 直接回应 Issue #1417，**治理长周期 Agent 会话的上下文膨胀** | 🟢 OPEN |
| 7 | **[color-expert](https://github.com/anthropics/skills/pull/1302)** | 专业色彩知识库：命名体系、色空间选型表、配色方案、无障碍对比度、色盲模拟、品牌色合规 | 设计/前端/数据可视化场景高频需求，**将领域专业知识技能化** | 🟢 OPEN |
| 8 | **[ODT 技能](https://github.com/anthropics/skills/pull/486)** | OpenDocument (.odt/.ods) 创建、模板填充、解析转 HTML，配套 pyxel-mcp 复古游戏引擎技能 (#525) | 开放文档格式与小众领域（复古游戏）的**生态补全** | 🟢 OPEN |

> 💡 另有 4 个 **skill-creator Windows 兼容性修复 PR**（#1099、#1050、#1261、#1323）与 #1298 形成合力，集中攻克评测链路在 Windows 上的不可用问题。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **技能分发与信任体系** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍) | 社区技能冒用 `anthropic/` 命名空间，需**官方签名/命名空间隔离/权限分级** | ⭐⭐⭐⭐⭐ |
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍) | 团队内一键分发/版本管理/权限控制，避免手工 .skill 文件传递 | ⭐⭐⭐⭐ |
| **评测与自优化链路可用性** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍)<br>[#1169](https://github.com/anthropics/skills/issues/1169) (3💬, 1👍) | `run_eval.py`/`run_loop.py` 在全平台（尤其是 Windows）上**触发率 0%**，自优化循环失效 | ⭐⭐⭐⭐ |
| **上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) (4💬)<br>[#1479](https://github.com/anthropics/skills/pull/1479) | 单技能注入 156k tokens 耗尽上下文；规划产出物无生命周期导致膨胀 | ⭐⭐⭐ |
| **Agent 治理与安全** | [#412](https://github.com/anthropics/skills/issues/412) (6💬)<br>[#1175](https://github.com/anthropics/skills/issues/1175) (4💬) | 策略执行/威胁检测/信任评分/审计追踪；SharePoint 等企业数据权限在技能层建模 | ⭐⭐⭐ |
| **技能即 MCP / Bedrock 兼容** | [#16](https://github.com/anthropics/skills/issues/16) (4💬)<br>[#29](https://github.com/anthropics/skills/issues/29) (4💬) | 技能暴露为标准 MCP 接口；支持 AWS Bedrock 部署环境 | ⭐⭐ |
| **文档生成保真度** | [#12](https://github.com/anthropics/skills/issues/12) (4💬, 1👍)<br>[#541](https://github.com/anthropics/skills/pull/541) | docx/OOXML 操作不破坏原有格式/书签/修订，**生产级文档可用性** | ⭐⭐⭐ |

---

## 3. 高潜力待合并 Skills（评论活跃、接近落地）

| PR | Skill | 合并阻力分析 | 预判落地窗口 |
|----|-------|--------------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测链路全修复 | 关联 4+ 高热 Issue，维护者优先级最高，**阻断所有技能自优化** | 🔥 **极高**（1-2 周内） |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 通用刚需，无架构争议，仅需示例补全 | 🔥 **高**（2-3 周） |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 内容完备，覆盖全测试栈，社区强需求 | 🔥 **高**（2-3 周） |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 创新范式，配合 #1385 提案，**可能成标配** | 🔶 **中高**（需设计评审，3-4 周） |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer / security-analyzer | 配合 #492 信任体系建设，**基建性质** | 🔶 **中高**（随治理流程推进） |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 解决长会话上下文膨胀，**刚性刚需** | 🔶 **中高**（1-2 周） |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 领域知识密集型，无依赖，易验收 | 🔶 **中**（2-3 周） |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT / [#525](https://github.com/anthropics/skills/pull/525) pyxel | 生态补全类，维护者通常较快合并 | 🔶 **中**（2-3 周） |

---

## 4. Skills 生态洞察（一句话总结）

> **社区核心诉求已从“要更多技能”转向“技能可信、可测、可治、可共享” —— 正在构建企业级可用的技能基建：评测链路修复、命名空间治理、组织级分发、上下文窗口治理、交付质量门控。**

---

*报告生成时间：2026-08-07

---

# Claude Code 社区动态日报｜2026-08-07

---

## 1. 今日速览

- **无新版本发布**，社区活跃度集中在 Issue 追踪与讨论（过去 24 小时 50 条 Issue 更新、3 条 PR 更新）。
- **权限系统、Windows 稳定性、Cowork 云端会话** 是当前最集中的痛点领域，多个高热度 Issue 指向生产环境阻断性 Bug。
- 文档维护迎来集中清理：6 份过时/缺失文档 Issue 同日关闭，标志着文档同步滞后问题正在被系统性解决。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 类型 | 热度 | 核心问题 | 为什么重要 |
|---|-------|------|------|----------|------------|
| 1 | [#6527](https://github.com/anthropics/claude-code/issues/6527) | **Bug / Security** | 23 评论 · 19 👍 | `allow list` 中包含 `Bash` 时，`ask list` 权限完全失效（Linux） | 权限模型核心逻辑缺陷，直接影响生产环境安全策略执行 |
| 2 | [#57371](https://github.com/anthropics/claude-code/issues/57371) | **Enhancement / Windows** | 18 评论 · **42 👍** | Windows 版 Claude Desktop 无法禁用捆绑的 Cowork 后台服务 | 最高呼声增强需求，资源占用与隐私担忧并存，影响全量 Windows 用户 |
| 3 | [#54750](https://github.com/anthropics/claude-code/issues/54750) | **Bug / Cost** | 16 评论 · 9 👍 | 会话限额显示 100% 耗尽，但本地可见用量极低（macOS） | 计费/配额显示异常，导致用户被误封禁，信任度受损 |
| 4 | [#76248](https://github.com/anthropics/claude-code/issues/76248) | **Bug / Cowork** | 14 评论 · 5 👍 | 云端会话 Git 推送全面受阻：自带 PAT 也被拦截，疑似 `CCR_TEST_GITPROXY` 灰度上线导致 | 协作核心流程中断，多会话编排场景不可用 |
| 5 | [#78775](https://github.com/anthropics/claude-code/issues/78775) | **Regression / UI** | 7 评论 · **23 👍** | Desktop 会话时间范围筛选器仅在 "Group by=State" 时出现 | 回归 Bug，影响历史会话检索效率，跨平台复现 |
| 6 | [#26581](https://github.com/anthropics/claude-code/issues/26581) | **Feature Request** | 8 评论 · **32 👍** | 系统级通知：Claude 需要关注/任务完成时推送（类似 Copilot） | 长期高呼声需求，解决多任务并行时的上下文切换成本 |
| 7 | [#76718](https://github.com/anthropics/claude-code/issues/76718) | **Bug / Permissions** | 7 评论 | 复合命令（如 `cmd1 && cmd2`）逐段均在 allow list 仍触发提示，2 天 700+ 次确认 | 多会话扇出编排场景下的权限提示风暴，严重降低自动化效率 |
| 8 | [#81664](https://github.com/anthropics/claude-code/issues/81664) | **Bug / Crash** | 7 评论 · 2 👍 | Windows MSIX：Browser-pane 截图验证导致 GPU 进程崩溃，包标记 `NeedsRemediation` 需重装 | 可复现崩溃链，导致应用“自毁式”不可用，阻塞 Browser 工具链 |
| 9 | [#72173](https://github.com/anthropics/claude-code/issues/72173) | **Regression / TUI** | 5 评论 · **12 👍** | `CLAUDE_CODE_DISABLE_MOUSE_CLICKS=1` 在 VS Code 终端不再保留文本选择 | 开发者日常交互回归，影响代码复制/审查流程 |
| 10 | [#33026](https://github.com/anthropics/claude-code/issues/33026) | **Enhancement / Core** | 8 评论 · 15 👍 | 允许 Claude 主动发起上下文压缩（而非被动触发） | 解决长任务中“被动压缩打断思路”的架构级痛点，已关闭但讨论持续 |

> **关闭但值得关注**：`#45929` `#47621` `#47623` `#47630` `#47631` `#47632` `#47634` `#48084` —— 6 份文档类 Issue 集中标记 `stale` 关闭，涉及沙箱隔离、环境变量、工作树清理、插件市场、MCP 警告、队列消息、会话恢复等核心功能文档缺失/过时，**反映文档滞后于功能迭代的系统性问题正在被清理**。

---

## 4. 重要 PR 进展（全部 3 条）

| # | PR | 状态 | 核心变更 | 影响范围 |
|---|----|------|----------|----------|
| 1 | [#84600](https://github.com/anthropics/claude-code/pull/84600) | Open | 在项目级 `.claude/settings.json` 注册官方 Marketplace 并启用 `frontend-design` 技能 | 插件生态：零配置引入前端设计技能，降低团队采纳门槛 |
| 2 | [#84427](https://github.com/anthropics/claude-code/pull/84427) | Open | `validate-agent.sh`：修复 `set -e` 下计数器自增导致的非零退出，避免首个警告即终止 | 插件开发工具链稳健性，CI/CD 校验流程不再误报失败 |
| 3 | [#84381](https://github.com/anthropics/claude-code/pull/84381) | Open | `validate-hook-schema.sh`：支持顶层 `hooks` 包装器与可选 `matcher` 字段校验 | Hook 配置校验完整性，适配更复杂的插件架构 |

> 三条 PR 均为 **2026-08-06** 提交，聚焦 **插件/工具链工程化**，显示官方正在夯实插件生态基础设施。

---

## 5. 功能需求趋势（从全量 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **权限系统精细化与自动化** | #6527, #76718, #72327 | ⭐⭐⭐⭐⭐ 核心痛点，高频阻断 |
| **Windows 原生体验补齐** | #57371, #81664, #81123, #76718 | ⭐⭐⭐⭐ 崩溃、后台服务、权限提示三重奏 |
| **Cowork/云端会话可靠性** | #76248, #59707, #76248 | ⭐⭐⭐⭐ Git 代理、权限通道、会话恢复连环 Bug |
| **系统级通知与后台感知** | #26581, #71369 | ⭐⭐⭐⭐ 终端标签标题、OS 通知双线诉求 |
| **上下文/会话管理增强** | #33026, #54750, #48084 | ⭐⭐⭐ 主动压缩、配额透明化、恢复命令文档化 |
| **TUI/终端集成打磨** | #72173, #79584, #74636 | ⭐⭐⭐ 鼠标选择、渲染乱序、伪造 system-reminder |
| **文档与可观测性补课** | 6 份 stale 文档 Issue 集中关闭 | ⭐⭐⭐ 官方已启动系统性文档债务清偿 |

---

## 6. 开发者关注点总结

| 痛点类别 | 高频反馈 | 典型场景 |
|----------|----------|----------|
| **权限提示噪音** | 复合命令逐段放行仍提示、ask list 失效、700+ 次/天确认 | 多会话并行编排、CI/CD 自动化、最小权限策略落地 |
| **Windows 稳定性** | MSIX 自毁、CoworkVMService 无法卸载、GPU 崩溃、鼠标选择失效 | 企业标准化 Windows 环境、Browser 工具链、VS Code 深度集成 |
| **云端会话信任度** | Git 推送被代理拦截、PAT 失效、AskUserQuestion 通道静默关闭 | 远程协作、跨机器同步、团队共享会话 |
| **会话状态不透明** | 配额显示虚高、重命名会话损坏转录、恢复命令无文档 | 长周期任务、计费预期管理、灾难恢复 |
| **通知缺位** | 无系统通知、终端标签无状态、需显式轮询 | 多任务并行、后台长任务、上下文切换成本高 |
| **文档滞后** | 沙箱/环境变量/Hook/插件/工作树/MCP/队列/恢复等核心功能文档缺失或过时 | 新功能上手、团队培训、合规审计 |

---

## 📌 一句话展望

**权限模型修复（Linux/Windows 双平台）、Windows MSIX 稳定性攻坚、Cowork Git 代理策略回滚/可配置化** 是下一周期最可能出现在 Release Notes 中的三大项；插件工具链 PR 合并后，Marketplace 生态门槛将进一步降低。

---

*数据来源：github.com/anthropics/claude-code | 统计窗口：2026-08-06 00:00 – 2026-08-07 00:00 (UTC)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报｜2026-08-07

---

## 1. 今日速览

- **v0.147.0 发布**：引入可移植 Agent 插件系统（支持本地/个人/工作区/远程目录检索），并新增会话分区与增量浏览长对话能力。  
- **Windows 平台稳定性成核心痛点**：Top Issue #33776（`ChatGPT.exe` 疯狂衍生 `taskkill.exe/conhost.exe` 导致 WMI/DWM 失效）获 32 条评论、27 👍，另有沙箱内存泄漏、WSL/PTY 启动失败、防火墙频繁 UAC 等多个高热度 Windows 专项缺陷。  
- **工程侧密集落地内部重构**：过去 24 h 合并 20+ PR，聚焦 app-server 测试稳定性、MCP 启动状态收敛、Bubblewrap `/dev` 隔离、Rollout 迁移工具链、模型路由提示头、上下文窗口按 Agent 追踪等基础设施完善。

---

## 2. 版本发布

### `rust-v0.147.0` (2026-08-07)
| 类别 | 内容 |
|------|------|
| **Agent 插件系统** | 支持安装便携式 Agent Plugins，并可跨本地、个人、工作区、远程四大目录检索（#36544, #36409, #36919, #36796） |
| **会话组织增强** | 对话可划分为持久化、手动排序的分区；长脚本支持增量浏览（#35722, #36007, #36380, #36948） |

> 🔗 [Release 页面](https://github.com/openai/codex/releases/tag/rust-v0.147.0)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 标签 | 评论/👍 | 关键信息 | 为什么重要 |
|---|------|------|---------|----------|------------|
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: ChatGPT.exe 衍生海量 taskkill/conhost 导致 WMI 风暴 & DWM 退化** | bug, windows-os, performance | 32 / 27 | 单次会话残留 287 个孤儿进程，引发 WMI 查询超时、DWM 卡顿 | **最热 Windows 崩溃级缺陷**，直接影响生产力，亟需内核级进程清理策略 |
| [#28080](https://github.com/openai/codex/issues/28080) | **Desktop 线程工具间歇性丢失 handler (`No handler registered`)** | bug, windows-os, app-server | 21 / 2 | 活跃会话中工具调用随机失败，需重启恢复 | 核心工具链不稳定，阻断长任务自动化 |
| [#20883](https://github.com/openai/codex/issues/20883) | **Codex Desktop 应改用项目级 MCP 进程池，而非会话级启动** | enhancement, mcp, app-server | 17 / 4 | 同项目多会话重复拉起 MCP，内存/启动延迟双重浪费 | 架构层面的资源复用诉求，关联 #33531 (10.9 GB 私有内存泄漏) |
| [#21653](https://github.com/openai/codex/issues/21653) | **TUI 支持多行状态栏** | enhancement, TUI | 12 / 58 | 状态栏配置项多时被截断，无换行能力 | **社区呼声最高 UI 改进**（58 👍），关乎可观测性 |
| [#16579](https://github.com/openai/codex/issues/16579) | **Windows: 允许配置默认会话 Shell** | enhancement, windows-os | 4 / 32 | 现硬编码 PowerShell，Git Bash/WSL 用户需手动切换 | 开发者体验细节，32 👍 显示刚需 |
| [#26820](https://github.com/openai/codex/issues/26820) | **CLI 无法获取 Chrome 扩展后端，但 Desktop UI 正常** | bug, CLI, browser | 12 / 9 | 同环境下 CLI 独占失败，非 Profile/Manifest 问题 | 跨进程通信机制差异，影响无头/自动化场景 |
| [#33531](https://github.com/openai/codex/issues/33531) | **Windows: MCP 子代完成后残留，私有内存达 10.9 GB** | bug, windows-os, mcp, performance | 5 / 1 | subagent 结束仍持有 stdio MCP 进程 | 与 #20883 共指 MCP 生命周期管理缺失 |
| [#37192](https://github.com/openai/codex/issues/37192) | **OAuth 网络切换后静默回退硬编码 dummy key 致 401** | bug, auth, CLI, connectivity | 4 / 0 | WiFi→热点/VPN 切换触发，无重新认证提示 | 认证链路脆弱性，安全与可用性双重风险 |
| [#35463](https://github.com/openai/codex/issues/35463) | **子代一夜耗尽周配额，用量统计失效** | bug, rate-limits, CLI, subagent | 4 / 0 | Pro 20x 方案被单次任务耗空 | 计费/配额核心逻辑 Bug，商业影响大 |
| [#37104](https://github.com/openai/codex/issues/37104) | **Windows WSL 集成终端静默失败，底部/侧边面板无法打开** | bug, windows-os, sandbox | 4 / 0 | PTY/WSL 启动前即失败，无错误信息 | 阻断 Windows 原生开发体验 |

> 💡 **共性**：Windows 平台占 6/10，聚焦进程管理、沙箱隔离、MCP 生命周期、Shell 集成；认证、配额、TUI 易用性为跨平台痛点。

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 作者 | 状态 | 核心变更 | 影响面 |
|---|------|------|------|----------|--------|
| [#37354](https://github.com/openai/codex/pull/37354) | Retry busy app-server test executable spawns | copyberry[bot] | ✅ Closed | 测试启动遇 `ExecutableFileBusy` 时重试 2 次/10 ms | CI 稳定性 |
| [#37352](https://github.com/openai/codex/pull/37352) | Configure default code-mode exec yield timeout | copyberry[bot] | ✅ Closed | 新增 `features.code_mode.default_exec_yield_time_ms=30s`，工具描述同步更新 | 代码执行超时可配置 |
| [#37350](https://github.com/openai/codex/pull/37350) | Allow `ThreadManager` to customize thread ID generation | copyberry[bot] | ✅ Closed | 注入 UUIDv7 生成器，支持自定义 ID 策略，恢复时保留原 ID | 线程追踪/调试 |
| [#37349](https://github.com/openai/codex/pull/37349) | Mount minimal `/dev` in full-fs Bubblewrap sandboxes | copyberry[bot] | ✅ Closed | 全盘绑定沙箱叠加最小 `/dev`，避免继承宿主设备树 | 沙箱安全隔离 |
| [#37348](https://github.com/openai/codex/pull/37348) | Add rollout migration tooling & background migration | copyberry[bot] | ✅ Closed | `codex migrate-rollouts`（dry-run/apply/过滤/限速/报告）+ 后台分页迁移 | 大规模配置灰度发布 |
| [#37347](https://github.com/openai/codex/pull/37347) | Track context windows per agent | copyberry[bot] | ✅ Closed | 上下文窗口按 Agent 名标识，移除 `features.token_budget` 旧字段 | 子代上下文隔离 |
| [#37345](https://github.com/openai/codex/pull/37345) | Send model routing hints to Codex backend | copyberry[bot] | ✅ Closed | 新增 `x-codex-routing-hint` 头（模型+服务层级），覆盖 HTTP/WS/预热 | 后端路由优化 |
| [#37344](https://github.com/openai/codex/pull/37344) | Fix subagent MCP startup status settling | copyberry[bot] | ✅ Closed | 清理活跃子代的 MCP 启动期望，避免 TUI 永久显示“启动中” | MCP 状态机收敛 |
| [#37341](https://github.com/openai/codex/pull/37341) | Support content references for inline visualizations | copyberry[bot] | ✅ Closed | 识别结构化 `visualize` 引用，绝对路径仅在激活工作区内解析 | TUI 可视化渲染 |
| [#37273](https://github.com/openai/codex/pull/37273) | Reuse MCP handlers across sampling steps | copyberry[bot] | ✅ Closed | 会话级缓存 MCP handler 与 Code Mode 定义，避免重复 Schema 构造 | 采样性能提升 |

> 📌 **趋势**：近期 PR 高度集中于**基础设施硬化**（测试、沙箱、迁移、可观测性）、**MCP 生命周期修复**、**多 Agent 上下文隔离**——为后续大规模多智能体编排铺路。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 方向 | 代表 Issue | 核心诉求 | 热度指标 |
|------|------------|----------|----------|
| **Windows 原生体验** | #33776, #37104, #31556, #16579 | 进程/沙箱/防火墙/Shell 深度适配 | 10+ Issues, 60+ 👍 |
| **MCP 架构升级** | #20883, #33531, #37351 | 进程池复用、内存泄漏修复、工具顺序确定性 | 3 高热 Issue |
| **认证与配额健壮性** | #37192, #35463, #37250 | 网络切换自动重认证、子代用量准确计数、限流误判修复 | 3 关键生产级 Bug |
| **TUI/CLI 可用性** | #21653, #13979, #35300 | 多行状态栏、通知不抢焦、GPT-5.6 prompt_cache_breakpoint 支持 | 58 👍 领跑 |
| **跨平台沙箱稳定** | #24873 (WSL bwrap), #36381 (strict delegation), #37349 (/dev mount) | Landlock 回退、最小权限委托、设备隔离 | 安全/合规刚需 |
| **模型生态适配** | #19694 (已关闭), #35300, #31817 (models.json 自动更新) | 模型目录同步、缓存断点、自定义模型选择器 | 持续交付配套 |

---

## 6. 开发者关注点总结

| 痛点/高频需求 | 典型声音 | 建议关注优先级 |
|----------------|----------|----------------|
| **Windows 进程/资源泄漏** | “会话几小时后机器卡死，任务管理器全是 `conhost.exe`” (#33776) | 🔴 **P0** — 直接导致不可用 |
| **MCP 重复启动与内存失控** | “同项目开 3 个聊天 = 3 套 MCP，内存 10 GB+” (#20883, #33531) | 🔴 **P0** — 架构级资源浪费 |
| **认证链路脆弱** | “切热点就 401，日志里全是 dummy key，完全无感知” (#37192) | 🟠 **P1** — 影响移动/混合办公 |
| **配额统计失真** | “子代跑一晚烧光周额度，账单无法解释” (#35463) | 🟠 **P1** — 商业信任风险 |
| **TUI 信息密度不足** | “状态栏塞不下，关键指标被截断” (#21653, 58 👍) | 🟡 **P2** — 核心交互体验 |
| **Shell 选择自由** | “每次进项目先 `shell bash`，累” (#16579, 32 👍) | 🟡 **P2** — 低成本高收益配置项 |
| **沙箱/WSL 集成不透明** | “WSL 终端静默挂，零报错零日志” (#37104, #24873) | 🟡 **P2** — 阻断 Linux 工作流 |

---

> **下一期预告**：

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-07

---

## 1. 今日速览
- **发布节奏持续加快**：发布了 Nightly 版本 `v0.56.0-nightly` 与 Preview 版本 `v0.55.0-preview.2`，同时修复版本 `v0.54.2` 已合并，版本迭代进入高频发布期。
- **核心稳定性修复集中落地**：认证死循环、Shell 命令融合、流式调用中断统计丢失、Ghost Text 无限循环等多个 P1/P2 级 Bug 通过 PR 修复并合入。
- **社区高热度 Issue 聚焦数据安全与跨平台兼容**：用户报告的“AI 误删文件导致重大损失”引发 47 条评论讨论；Windows PowerShell 兼容性、高内存占用、MCP 集成报错等痛点持续发酵。

---

## 2. 版本发布
### 🚀 v0.56.0-nightly.20260807.gd5c9a97dc
- **类型**：自动化 Nightly 构建
- **主要变更**：
  - 包含 v0.55.0-preview.1 变更日志
  - 版本号常规递增
- **链接**：[Release #28706](https://github.com/google-gemini/gemini-cli/pull/28706) | [PR #28720](https://github.com/google-gemini/gemini-cli/pull/28720)

### 🔖 v0.55.0-preview.2 (热修复)
- **触发原因**：Cherry-pick 修复提交 `2139b12` 至 `release/v0.55.0-preview.1` 分支
- **链接**：[PR #28719](https://github.com/google-gemini/gemini-cli/pull/28719)

### 🐞 v0.54.2 (稳定版修复)
- **内容**：全仓库包版本统一升级至 0.54.2
- **链接**：[PR #28712](https://github.com/google-gemini/gemini-cli/pull/28712) | [PR #28711](https://github.com/google-gemini/gemini-cli/pull/28711)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 标签/优先级 | 核心诉求 | 社区热度 | 关注理由 |
|---|-------|-------------|----------|----------|----------|
| 1 | [#26856](https://github.com/google-gemini/gemini-cli/issues/26856) **AI 误删 Obsidian 知识库，用户索赔 $300** | `priority/p1`, `kind/bug`, `status/manual-triage` | 用户声称 AI 违背指令删除 10000+ 文件，要求赔偿 | 💬 47 评论 · 👍 16 | **最高热度**，涉及 AI 安全对齐、破坏性操作确认机制、数据恢复能力，触动信任底线 |
| 2 | [#28698](https://github.com/google-gemini/gemini-cli/issues/28698) **高内存占用：空闲循环导致内存持续增长** | `priority/p2`, `kind/bug`, `effort/large` | 后台空闲时内存泄漏，版本 0.53.1 复现 | 💬 5 评论 · 👍 0 | 新近高优性能问题，关联长会话稳定性 |
| 3 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **子任务因 MAX_TURNS 中断却上报 GOAL 成功** | `priority/p1`, `kind/bug`, `status/need-retesting` | 子代理超限仍返回 success，掩盖任务未完成 | 💬 12 评论 · 👍 2 | 核心 Agent 编排逻辑缺陷，影响复杂任务可靠性 |
| 4 | [#27731](https://github.com/google-gemini/gemini-cli/issues/27731) **Figma MCP 返回 WebP 却声称 image/png，触发 HTTP 400** | `priority/p1`, `kind/bug`, `effort/medium` | MCP 工具结果 MIME 类型不匹配导致调用失败 | 💬 2 评论 · 👍 0 | MCP 生态集成阻断点，多模态工具链兼容性 |
| 5 | [#27725](https://github.com/google-gemini/gemini-cli/issues/27725) **Google Calendar MCP 参数类型错误：期望 record 收到 array** | `priority/p1`, `kind/bug`, `effort/small` | `listEvents` 结构化内容解析失败 | 💬 2 评论 · 👍 0 | 官方 Workspace MCP 适配缺陷，影响企业级用例 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 命令执行完成后卡在 "Waiting input"** | `priority/p1`, `kind/bug`, `effort/medium` | 简单命令执行完毕但 CLI 仍显示等待输入 | 💬 4 评论 · 👍 3 | 交互层状态机异常，严重破坏 CLI 交互体验 |
| 7 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) **工具数 > 128 时触发 400 错误** | `priority/p2`, `kind/bug`, `status/need-information` | 工具注册过多导致请求体超限 | 💬 3 评论 · 👍 0 | 架构扩展性瓶颈，关联 MCP/Extension 规模化 |
| 8 | [#20773](https://github.com/google-gemini/gemini-cli/issues/20773) **Windows PowerShell 5.1 `&&` 算子解析报错** | `priority/p1`, `kind/bug`, `effort/large` | 默认 Shell 命令拼接在旧版 PS 不兼容 | 💬 17 评论 · 👍 1 | **已关闭**，跨平台兼容性长期痛点，修复验证中 |
| 9 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) **Agent 需阻止/劝阻破坏性操作** | `priority/p2`, `kind/feature`, `kind/customer-issue` | 要求模型内置对 `git reset --force` 等高危命令的规避 | 💬 3 评论 · 👍 1 | 安全护栏需求，呼应 #26856 核心担忧 |
| 10 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Auto Memory 无限重试低信噪会话** | `priority/p2`, `kind/bug`, `workstream-rollup` | 后台记忆提取反复处理无价值会话浪费资源 | 💬 5 评论 · 👍 0 | 长期记忆机制资源泄漏隐患 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | ✅ **Closed** | **修复认证死循环**：await `oauth_creds.json` 写入并强制 consent，解决 #28430 | 认证核心流程，所有用户 |
| 2 | [#28718](https://github.com/google-gemini/gemini-cli/pull/28718) | 🟢 **Open** | **流中断时记录已收到 usage**：`generateContentStream` catch 分支补齐 `lastUsageMetadata` 上报 | 计费/配额统计准确性 |
| 3 | [#28716](https://github.com/google-gemini/gemini-cli/pull/28716) | ✅ **Closed** | **容量耗尽/余额不足归类为 Terminal Error**：触发即时模型回退而非重试 | 错误处理策略，服务可用性 |
| 4 | [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | 🟢 **Open** | **设置加载顺序修正**：先加载 `.env` 再展开 settings placeholder，解决竞态 | 配置系统健壮性 |
| 5 | [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | 🟢 **Open** | **Ghost Text 窄宽度无限循环修复**：强制推进 `splitIndex`，新增回归测试 | TUI 输入体验，CJK/Emoji 场景 |
| 6 | [#28596](https://github.com/google-gemini/gemini-cli/pull/28596) | 🟢 **Open** | **新增 `--list-all-sessions`**：跨工作区列出/管理所有会话 | 会话管理，开发者效率 |
| 7 | [#28602](https://github.com/google-gemini/gemini-cli/pull/28602) | 🟢 **Open** | **Docker 基础镜像升级 Node 24-slim**：构建/运行时同步更新 | 供应链安全，Node 生命周期 |
| 8 | [#28603](https://github.com/google-gemini/gemini-cli/pull/28603) | 🟢 **Open** | **沙箱 Dockerfile 升级 Node 22**：Node 20 已 EOL (2026-04-30)，规避安全风险 | 沙箱执行环境安全 |
| 9 | [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | 🟢 **Open** | **修复 VS Code 扩展 Disposable 泄漏**：修正 `context.subscriptions.push` 括号错误 | IDE 扩展稳定性，内存泄漏 |
| 10 | [#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | ✅ **Closed** | **防止用户新消息融合进未完成工具响应**：中断后新指令不再被模型当作续写 | 交互语义正确性，核心会话逻辑 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声特征 |
|----------|------------|--------------|
| **🛡️ AI 安全护栏与确认机制** | #26856, #22672, #22323 | 强烈要求：破坏性操作显式确认、子任务失败透传、拒绝执行高危命令 |
| **🔌 MCP 生态深度适配** | #10704 (Client Sampling), #27731, #27725, #24246 | 从“能用”向“生产级”演进：采样支持、MIME/Schema 校验、工具数扩容 |
| **🪟 Windows 原生体验补齐** | #20773, #25867, #25884, #26318 | PowerShell 兼容、Backspace 行为、命令注入风险、编码问题集中爆发 |
| **🧠 长期记忆与上下文工程** | #26522, #26523, #26525, #23571 | Auto Memory 去噪/隔离/安全、临时文件治理、上下文窗口管理 |
| **⚡ 性能与资源管控** | #28698, #27132, #25166 | 内存泄漏、UI 主线程阻塞、Shell 僵尸进程——长会话稳定性成焦点 |
| **🖥️ IDE/VS Code 深度融合** | #27132, #28526, #22232 | 扩展端内存/线程模型优化、浏览器会话接管、Diff 交互可靠性 |

---

## 6. 开发者关注点总结

1. **信任危机显性化**：#26856 暴露用户对“自主编码代理”安全性的根本质疑，**可审计性、可逆操作、确认阀值** 成为刚需。
2. **跨平台坑未填平**：Windows 占比高但 PowerShell 5.1/7、CMD、WT、WSL 矩阵兼容性问题频出，**Shell 抽象层** 需系统性重构。
3. **MCP 从协议落地到工程化**：官方 Workspace MCP、Figma MCP 报错集中，暴露 **Schema 校验、二进制载荷、工具发现** 等工程化短板。
4. **长会话稳定性成生产力瓶颈**：内存泄漏、Ghost

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-08-07

---

## 1. 今日速览
- **版本发布**：发布 **v1.0.79-6**，修复了罕见的内部延迟诊断警告干扰 UI，以及会话历史加载失败导致时间轴永久空白的严重问题。
- **社区焦点**：暂无 PR 更新，但 Issue 活跃度极高（32 条更新），核心矛盾集中在 **会话恢复性能回归 (OOM/CPU)**、**MCP 生态脆弱性 (孤儿进程、BigInt 崩溃、CI 认证受阻)** 以及 **终端渲染兼容性 (NixOS、tmux、Windows 代码页)**。
- **高呼声需求**：`/app` 命令默认选中当前目录（#4118，35 👍）及会话历史滚动浏览（#4313）等基础体验优化呼声最高。

---

## 2. 版本发布

### **v1.0.79-6** 
- **修复**：罕见的内部延迟不再在交互式 UI 顶部打印诊断警告。
- **修复**：会话历史加载失败不再导致时间轴永久为空（此前失败被静默丢弃，导致整个会话期间 transcript 空白且无日志）。
- 🔗 [Release v1.0.79-6](https://github.com/github/copilot-cli/releases/tag/v1.0.79-6)

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心问题/需求 | 关注度/影响 | 状态 |
|---|-------|--------------|-------------|------|
| **1** | [#4118](https://github.com/github/copilot-cli/issues/4118) **`/app` 命令不默认选中当前工作目录** | 每次打开 Copilot App 需手动选择目录，严重影响高频操作流。 | 👍 **35** (全榜最高) | CLOSED |
| **2** | [#3392](https://github.com/github/copilot-cli/issues/3392) **NixOS 上 Bash 工具完全失效 (>=v1.0.49)** | `Failed to start bash process`，阻断 NixOS 用户使用，疑似沙箱/路径问题。 | 👍 7 / 评论 3 | OPEN |
| **3** | [#4251](https://github.com/github/copilot-cli/issues/4251) **大型会话恢复 OOM/单核跑满 70 分钟 (v1.0.74 回归)** | v1.0.74 引入严重性能回归，内存峰值 3-4 倍，大会话用户无法升级。 | 评论 2 / 👍 1 (严重 P0) | OPEN |
| **4** | [#4346](https://github.com/github/copilot-cli/issues/4346) **CI 中 `GITHUB_TOKEN` 无法拉取 MCP Registry (403)** | 官方推荐的无 PAT 认证方案在 CI 中失效，阻断非默认 MCP Server 在 Actions 中使用。 | 👍 1 / 评论 1 (CI 阻断) | OPEN |
| **5** | [#4313](https://github.com/github/copilot-cli/issues/4313) **支持鼠标滚轮/PageUp 浏览当前会话历史** | 核心交互缺失，长对话无法回溯上下文，基础体验短板。 | 评论 4 | OPEN |
| **6** | [#4311](https://github.com/github/copilot-cli/issues/4311) **Transcript 渲染空白行，需触发宽度变化才重绘** | 底部内容消失但滚动可见，`/resume` 无法恢复，疑似测量缓存失效未触发重绘。 | 评论 2 | OPEN |
| **7** | [#4211](https://github.com/github/copilot-cli/issues/4211) **MCP 返回 BigInt 导致 CLI 崩溃 (`TypeError: Do not know how to serialize a BigInt`)** | 结构化响应包含大整数直接中断任务，MCP 集成健壮性不足。 | 评论 2 | OPEN |
| **8** | [#4392](https://github.com/github/copilot-cli/issues/4392) **启动时认证后重建 MCP Client 导致 stdio 孤儿进程泄漏** | 每次启动遗留一批未清理的子进程，长期运行耗尽资源。 | 评论 1 (资源泄漏) | OPEN |
| **9** | [#4374](https://github.com/github/copilot-cli/issues/4374) **Azure DevOps 远程仓库下 `/mcp search` 报 400** | 企业级场景 (Azure Repos) 完全无法使用 MCP 搜索功能。 | 👍 4 | OPEN |
| **10** | [#4380](https://github.com/github/copilot-cli/issues/4380) **Rubber Duck 评审模型未独立选型，沿用主会话模型** | 对抗性评审失效，同模型族无法提供有效异见，降低评审价值。 | 评论 2 | OPEN |

---

## 4. 重要 PR 进展
> **过去 24 小时无 Pull Request 更新。** 当前迭代重心可能集中在 Issue 分流、根因分析或内部合并，建议关注后续 `v1.0.80` 预发布分支动态。

---

## 5. 功能需求趋势（从全量 Issue 提炼）

1.  **会话与上下文管理强化** (High)
    - 恢复性能/稳定性 (#4251, #4282)、历史滚动浏览 (#4313)、Worktree 保留策略 (#3914, #4383)、转向消息排序 (#4372)、队列卡死 (#4373)。
2.  **MCP 生态工程化** (High)
    - 认证策略适配 CI (#4346)、进程生命周期管理 (#4392)、数据类型兼容 (BigInt #4211)、注册表兼容性 (#4374, #168)、配置发现标准化 (#4204)。
3.  **跨平台终端渲染兼容性** (Medium-High)
    - NixOS 原生支持 (#3392)、tmux 配色适配 (#4212)、Windows 代码页/标题/复制异常 (#4391, #4384)、Shell 模式 Tab 补全冲突 (#4387)。
4.  **模型能力与配置灵活性** (Medium)
    - BYOM 模型动态切换/发现 (#4376)、推理力度选择持久化 (#3053)、组织启用模型目录同步 (#4390)、Rubber Duck 独立模型选择 (#4380)。
5.  **权限与安全模型细化** (Medium)
    - 审批提示上下文透明化 (#4386)、Auto/Interactive 模式切换状态同步 (#4388, #4389)、Web Search 幻觉治理 (#4093)。

---

## 6. 开发者关注点与痛点总结

| 痛点类别 | 典型反馈 | 影响范围 |
|----------|----------|----------|
| **稳定性回归风险** | v1.0.74 引入大会话恢复 OOM (#4251)，v1.0.49+ 破坏 NixOS (#3392)，版本升级信任度下降，亟需回归测试矩阵覆盖长会话/异构环境。 | 核心用户、企业用户 |
| **MCP 集成“半成品”感** | 进程泄漏、BigInt 崩溃、CI 认证断裂、Azure DevOps 不兼容、UI 字段不可见，生态工具链在非标准环境下极其脆弱。 | 插件开发者、CI/CD 工程师 |
| **终端原生体验缺失** | 无法滚动历史、渲染闪烁/空白、tmux 不可读、Windows 代码页崩坏、Shell 模式 Tab 被劫持，**“像个 Web App 套在终端里”**。 | 日常重度 CLI 用户 |
| **状态管理不一致** | 权限模式切换不生效、模型前缀不一致导致恢复失败、转向消息乱序、队列消息卡死，状态机边界条件处理薄弱。 | 复杂工作流用户 |
| **基础交互打磨滞后** | `/app` 不记目录 (#4118, 35👍)、历史记录不可视 (#4313)、权限提示不透明 (#4386) 等“纸片级”体验问题积压久未解决。 | 全量用户 |

---

**💡 分析师建议**：
当前版本迭代陷入“**修复回归引发新回归**”循环 (v1.0.74 OOM, v1.0.49 NixOS)。建议近期版本策略转为 **“稳定期”**：冻结新功能，专项攻坚 **会话恢复性能**、**MCP 进程/认证健壮性**、**终端渲染核心通路** 三大基石问题；同时建立 **NixOS / Azure DevOps / tmux / Windows Terminal** 四大异构环境的 CI 搅拌测试基线，恢复社区升级信心。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-08-07

---

## 1. 今日速览
- **核心修复并行推进**：针对 `StrReplaceFile` 破坏非 UTF-8 字节的严重数据损坏问题（Issue #2591），社区同一天提交了两个不同思路的修复 PR（#2595 拒绝编辑、#2594 字节级保留），显示团队对数据安全问题的高度重视。
- **长期高呼声功能获进展**：跨会话持久化记忆系统（Issue #1283）讨论深入，MCP 工具懒加载（Issue #2147）等架构优化需求持续升温。
- **VSCode 插件体验打磨**：计划模式下文件路径不可点击（#2317）、缺乏模式快捷切换入口（#2593）等交互细节问题集中反馈，插件生态完善成为当前社区关注焦点。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 类型 | 核心看点 | 社区热度 |
|---|------|------|----------|----------|
| [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) | **StrReplaceFile corrupts undecodable bytes outside the edited region** | 🐛 Bug | **严重数据损坏风险**：全量解码+回写导致编辑区域外的非 UTF-8 字节被永久替换为 U+FFFD。二进制文件、混合编码文件均受影响。 | ⭐⭐⭐⭐⭐ (3 评论，触发 2 个修复 PR) |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature Request: Memory System - Persistent context across sessions** | ✨ Enhancement | **核心架构级需求**：支持自动/手动双轨制记忆，跨会话保留项目模式、用户偏好。讨论 20 条评论，涉及存储格式、隐私、Token 成本等深度设计。 | ⭐⭐⭐⭐ (20 评论，长期跟踪) |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | **[VSCode Extension] Plan mode file path not clickable in chat webview** | 🐛 Bug | **插件核心交互缺失**：计划模式下文件路径无法跳转，严重影响代码审查与导航效率。已确认 v0.5.10 复现。 | ⭐⭐⭐ (4 评论，1 👍) |
| [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) | **界面抖动/全量重渲染对话历史** | 🐛 Bug | **前端性能痛点**：Linux 下对话列表频繁抖动、从头重渲染，疑似虚拟列表或 Key 复用问题。影响长对话体验。 | ⭐⭐⭐ (2 评论，2 👍) |
| [#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147) | **Lazy-load MCP tool schemas into context** | ✨ Feature | **Token 成本优化**：多 MCP Server 接入时，全量注入 Schema 消耗数千 Token。按需注入可显著降低上下文压力。 | ⭐⭐⭐ (1 评论，1 👍) |
| [#2593](https://github.com/MoonshotAI/kimi-cli/issues/2593) | **VSCode 面板增加 Auto/YOLO/Manual 模式快捷切换** | ✨ Enhancement | **高频交互诉求**：状态栏缺乏模式切换入口与配额剩余显示，开发者需频繁通过命令面板操作。 | ⭐⭐ (新建，0 评论) |
| [#621](https://github.com/MoonshotAI/kimi-cli/issues/621) | **首次 WriteFile 报 Invalid path，后退回绝对路径** | 🐛 Bug (Closed) | **旧版路径解析缺陷**：v0.76 相对路径处理异常，现已关闭，疑似在后续版本修复。 | ⭐ (历史问题追踪) |
| [#821](https://github.com/MoonshotAI/kimi-cli/issues/821) | **Security: Missing authorization checks + dependency CVEs** | 🔒 Security (Closed) | **安全审计遗留**：IDOR 漏洞 + 5 个高危依赖 CVE，CVSS 7.0-8.0。已关闭，需确认修复版本是否已发布。 | ⭐ (安全基线关注) |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 核心变更 | 关联 Issue |
|---|------|------|----------|------------|
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) | **fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits** | 🟢 Open | **字节级手术式修复**：在 Raw Buffer 上按 UTF-8 子串定位 `old/new`，完全保留编辑区外的任意字节序列。**推荐合并方案**，兼容二进制/混合编码文件。 | #2591 |
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | **fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** | 🟢 Open | **防御性拒绝策略**：检测到非 UTF-8 直接报错拒绝编辑，避免静默损坏。安全但降低可用性，适合作为兜底或配合 #2594 使用。 | #2591 |
| [#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255) | **feat(shell): support Shift+Enter for inserting newlines** | 🟣 Closed | **交互标准化补全**：新增 `Shift+Enter` 换行，对齐 VSCode/主流 IDE 肌肉记忆，解决 #2254 等多个重复诉求。已合并入主干。 | #2254 |

---

## 5. 功能需求趋势

| 趋势方向 | 代表性 Issue/PR | 社区信号强度 | 分析 |
|----------|----------------|--------------|------|
| **持久化记忆 / 长期上下文** | #1283 | 🔥🔥🔥🔥🔥 | 从“单次对话”向“项目级助手”演进的核心基建，涉及向量存储、隐私隔离、Token 预算分配，设计复杂度高但价值最大。 |
| **MCP 生态深度集成与治理** | #2147 | 🔥🔥🔥 | 工具懒加载、权限沙箱、Schema 版本管理成为刚需，反映 MCP Server 规模化接入带来的工程化挑战。 |
| **VSCode 插件原生化体验** | #2317, #2593, #2255 | 🔥🔥🔥🔥 | 交互细节（可点击路径、模式切换、键位对齐）集中爆发，显示插件已成为主力入口，亟需补齐“IDE 级”交互短板。 |
| **工具链鲁棒性与数据安全** | #2591, #2594, #2595 | 🔥🔥🔥🔥 | 文件编辑器作为最高风险工具，字节级保真、编码兼容、原子性写入成为底线要求，容不得妥协。 |
| **前端渲染性能优化** | #2474 | 🔥🔥 | 长对话下的虚拟滚动、增量渲染、状态稳定性是留存关键，Linux 优先暴露问题。 |

---

## 6. 开发者关注点

| 痛点 / 高频需求 | 具体表现 | 优先级建议 |
|----------------|----------|------------|
| **文件编辑“零损坏”承诺** | #2591 非 UTF-8 字节静默损坏；历史遗留 #621 路径解析异常 | **P0** 必须在下个 Patch 版本修复并回归测试覆盖二进制/混合编码场景 |
| **跨会话状态连续性** | #1283 20 条深度讨论；无记忆导致重复交代项目上下文 | **P1** 启动 Memory System 设计评审，先行最小可行性方案（如 `.kimi/memory.json` + 手动 `@memory` 指令） |
| **插件交互达齐 IDE 标准** | #2317 路径不可点击；#2593 无模式切换入口；#2255 键位缺失 | **P1** 建立“插件交互清单”专项 Sprint，补齐跳转、状态栏、键位、配额可视化 |
| **MCP 上下文爆炸控制** | #2147 全量注入消耗千 Token；缺乏工具调用审计 | **P1** 实现 Schema 懒加载 + 工具调用 Token 统计面板 |
| **长对话 UI 稳定性** | #2474 抖动/重渲染；Linux 优先复现 | **P2** 引入虚拟列表 + 稳定 Key，增加长对话（>100 轮）自动化压测 |
| **安全合规基线** | #821 IDOR + 5 CVE 已关闭但需验证修复版本 | **P2** 发布 Security Advisory 明确修复版本，纳入依赖自动扫描流程 |

---

> **数据来源**：`github.com/MoonshotAI/kimi-cli` | 统计窗口：2026-08-06 至 2026-08-07 (UTC)  
> **下一关注点**：`StrReplaceFile` 修复合并进度、Memory System 设计文档对外征求意见、VSCode 插件 v0.5.11 预发布内容。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-07

---

## 1. 今日速览

**核心危机持续发酵**：OpenCode Go/Zen 订阅用户自 7 月 22 日起集中遭遇 `401 Request blocked by upstream provider` 错误，**付费模型全面不可用**，免费模型正常，已引发 9 个高热度 Issue（累计 140+ 评论、60+ 👍），疑为上游供应商侧认证/配额故障，官方尚未给出根因公告。  
**研发侧稳步推进**：合并/推进 20 余个 PR，重点落地 TUI 交互增强（排队提示、模型会话级隔离）、子会话续跑、工具输出截断、技能热重载、会话/项目文档补全等核心体验优化。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 热度指标 | 关键点 |
|---|-------|----------|----------|--------|
| 1 | [#38257](https://github.com/anomalyco/opencode/issues/38257) | **Go 订阅全模型 401：chat/completions 被上游拦截，/v1/models 正常** | 44 评论 · 11 👍 | 疑似服务端侧认证/路由故障，影响所有 Go 订阅者 |
| 2 | [#38218](https://github.com/anomalyco/opencode/issues/38218) | **Go 订阅所有模型统一报错 "Request blocked by upstream provider"** | 31 评论 · 13 👍 | 多机器、多客户端复现，免费模型不受影响 |
| 3 | [#38195](https://github.com/anomalyco/opencode/issues/38195) | **Go 订阅激活但所有付费模型 401，免费模型正常** | 24 评论 · 17 👍 | Desktop 与 Hermes 均复现，跨平台 |
| 4 | [#6152](https://github.com/anomalyco/opencode/issues/6152) | **功能需求：会话上下文用量可视化（类 Claude `/context`）** | 22 评论 · **129 👍** | 社区呼声最高的增强需求，涉及 TUI 对话框实现 |
| 5 | [#1168](https://github.com/anomalyco/opencode/issues/1168) | **功能需求：链接可点击（Ctrl+左键打开浏览器）** | 11 评论 · **119 👍** | 长期高赞基础体验项，适配编辑器/终端通用交互 |
| 6 | [#39827](https://github.com/anomalyco/opencode/issues/39827) | **Zen 全模型（含免费）AuthError，直连供应商 Key 正常** | 9 评论 · 4 👍 | 疑似 Zen 网关层统一故障，非客户端问题 |
| 7 | [#32157](https://github.com/anomalyco/opencode/issues/32157) | **功能需求：可配置的运行中提示词投递策略（queue/steer/break）** | 5 评论 · **67 👍** | 涉及压缩感知的 steer 语义，核心交互流程重构方向 |
| 8 | [#39875](https://github.com/anomalyco/opencode/issues/39875) | **隐私/合规：恢复 Go 隐私条款与供应商归因，补充遥测与保留策略** | 6 评论 · **44 👍** | 订阅用户关注数据治理透明度，关联多个历史 Issue |
| 9 | [#31932](https://github.com/anomalyco/opencode/issues/31932) | **功能需求：跨项目会话列表/选择器（TUI）** | 15 评论 · 6 👍 | 多仓库工作流痛点，现有 `/sessions` 仅限当前项目 |
| 10 | [#40958](https://github.com/anomalyco/opencode/issues/40958) | **Bug：DeepSeek V4 Flash Free 元数据显示 200K 上下文，原生支持 1M** | 3 评论 · 1 👍 | `models.dev` 元数据配置错误，削弱长上下文编码能力 |

> **特别关注**：`#40957`（Windows 10 + Node 26.7 启动失败）、`#40502`（Web 界面会话不自动刷新）、`#40945`（`permission.edit` 仅匹配 worktree 相对路径导致 deny 规则失效）为新增高优先级缺陷。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#40971](https://github.com/anomalyco/opencode/pull/40971) | Feat | **TUI 暴露稳定的提示词动作命令**（`form.option.previous/next/select/close` 等），供插件调用 | #40953 |
| 2 | [#40800](https://github.com/anomalyco/opencode/pull/40800) | Fix | **序列化孤立压缩历史**为可读标记文本，保留完整上下文类型并截断大体积工具输出 | — |
| 3 | [#40931](https://github.com/anomalyco/opencode/pull/40931) | Feat | **支持续跑前台子会话**（可选 `sessionID`），校验父会话所有权与 Agent 身份 | — |
| 4 | [#40929](https://github.com/anomalyco/opencode/pull/40929) | Feat | **工具输出截断上限**（按行/字节），完整内容落盘托管文件，7 天清理，支持 `metadata.truncated` 标记 | — |
| 5 | [#40962](https://github.com/anomalyco/opencode/pull/40962) | Refactor | **文件工具回归词法路径解析**（V1 行为），不再规范化符号链接，恶意 UTF-8 宽容解码 | — |
| 6 | [#40922](https://github.com/anomalyco/opencode/pull/40922) | Feat | **TUI 提示词排队**：Enter=steer，Option/Alt+Enter=queue，底部停靠栏汇总显示 | — |
| 7 | [#40969](https://github.com/anomalyco/opencode/pull/40969) | Fix | **兼容空字符串 `tool_call.id` 的流式增量**（Alibaba DashScope 等供应商） | — |
| 8 | [#40880](https://github.com/anomalyco/opencode/pull/40880) | Fix | **自定义 Agent 默认 `mode: primary`**，文档同步更新 | — |
| 9 | [#40967](https://github.com/anomalyco/opencode/pull/40967) | Feat | **工作区环境基础设施**（纯增量），`Files` 派生自 `ChildProcessSpawner`，预留驱动快速通道 | — |
| 10 | [#40960](https://github.com/anomalyco/opencode/pull/40960) | Fix | **TUI 自动关闭过期权限提示**（服务端返回 `PermissionNotFoundError` 即移除本地状态） | — |

> **其他值得关注**：`#40954`（技能源热重载）、`#40956`（中断后重启队列循环）、`#40913`（模型选择会话级作用域）、`#40940`（入门文档补全 Projects/Session 概念）。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **会话/上下文管理增强** | #6152 (129👍), #31932, #38973, #37760 | ⭐⭐⭐⭐⭐ 核心工作流痛点，跨项目、可视化、统计均高频 |
| **TUI 交互细节打磨** | #1168 (119👍), #40922 (PR), #40913 (PR), #40950 (PR) | ⭐⭐⭐⭐ 链接点击、提示词排队、模型会话隔离、破坏性动作样式 |
| **可配置的运行时控制** | #32157 (67👍), #40922 (PR) | ⭐⭐⭐⭐ queue/steer/break 语义化，压缩感知 steer |
| **隐私/合规透明化** | #39875 (44👍) | ⭐⭐⭐ 付费用户关注数据留存、遥测、供应商归因条款回归 |
| **模型元数据准确性** | #40958, #38257 系列 | ⭐⭐⭐ 上下文窗口、供应商路由、认证状态的准确暴露 |
| **多平台稳定性** | #40957 (Win10), #35494 (Debian TUI freeze), #11748 (PowerShell 乱码) | ⭐⭐⭐ 长尾环境兼容性持续暴雷 |

---

## 6. 开发者关注点（痛点与高频诉求）

1. **付费订阅可用性危机（P0）**  
   - Go/Zen 订阅者**连续 16 天**无法使用付费模型，`/v1/models` 正常但 `chat/completions` 全部 401。  
   - 社区普遍判定为**上游网关/计费侧故障**，期待官方状态页通报、时间线说明及补偿方案。

2. **会话上下文可观测性缺失**  
   - 无法直观查看当前会话占用 token、剩余预算、压缩历史（对标 Claude `/context`），导致长任务规划困难。

3. **TUI 交互与编辑器一致性**  
   - 链接不可点击（`#1168` 119👍）、提示词无排队机制、模型选择跨会话泄露、破坏性操作缺乏视觉区分。

4. **权限系统语义陷阱**  
   - `permission.edit` 仅匹配 worktree 相对路径，绝对路径/`~` 模式静默失效，**deny 规则 fail-open** 安全隐患（`#40945`）。

5. **跨平台原生体验断层**  
   - Windows 新版 Node 启动失败、Debian TUI 白屏冻结、PowerShell 退出后乱码、Web 界面消息不自动刷新。

6. **模型能力元数据与实际不符**  
   - DeepSeek V4 Flash 标注 200K 实为 1M，影响长上下文编码任务调度决策。

7. **隐私条款回退引发信任危机**  
   - 近期两次提交悄默移除 Go 隐私承诺与供应商归因，订阅用户要求回滚并补充遥测/保留策略说明。

---

> **备注**：所有链接指向 `github.com/anomalyco/opencode` 对应 Issue/PR。数据采集截止 20

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-07

---

## 1. 今日速览

- **v0.84.0 正式发布**，核心亮点是 **Fullscreen TUI 模式**：支持运行时在普通/全屏模式切换，提供固定编辑器与底栏、独立可滚动的会话记录、可拖拽滚动条，标志着终端交互体验的重大升级。  
- 社区围绕 **Windows 原生支持** 展开高热度讨论（#7547，22 条评论），直指“运行方式过多导致维护聚焦困境”，或将推动官方给出明确最佳实践。  
- **自动压缩机制失效**（#6879，15 👍）与 **系统提示词副作用**（#7128）两大核心 Bug 引发广泛关注，分别关乎长上下文会话稳定性与 Agent 行为偏差。

---

## 2. 版本发布

### v0.84.0
| 维度 | 详情 |
|------|------|
| **核心功能** | **Fullscreen TUI 模式** —— 运行时可在普通/全屏模式切换；全屏下提供 sticky editor + footer、独立滚动的 transcript、可拖拽滚动条。 |
| **文档入口** | [UI & Display 设置文档](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/setting) |
| **影响范围** | `@earendil-works/pi-coding-agent`、`@earendil-works/pi-tui` 均升级至 0.84.0。 |
| **后续跟进** | 多个 TUI 相关 Issue/PR 在 24h 内密集涌现（见下文），显示社区正在快速验证与修补边缘情况。 |

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 为什么重要 | 社区反应 |
|---|-------|------------|----------|
| 1 | **[Windows] How do you use Pi on windows? #7547** | Windows 开发者基数最大，但运行方式碎片化（WSL、Git Bash、原生、Docker 等），导致 Bug 修复、文档、开箱即用难以聚焦。 | 22 条评论，1 👍，作者 petrroll 明确呼吁“决定核心支持哪条路径，其余委托给扩展/社区”。 |
| 2 | **auto-compaction never triggers after context >100% #6879** | 长会话中上下文突破阈值却不压缩，直到 API 以 373k tokens 拒绝请求才触发，严重影响长任务可靠性。 | 12 条评论，**15 👍**，多位用户复现，建议“每轮对话后检查并主动触发压缩”。 |
| 3 | **PI_* guideline biases agent to unnecessary bash calls #7128** | 默认系统提示新增“Inspect PI_* env vars”，导致 Agent 频繁执行 `env` 等无意义命令，增加延迟与成本。 | 10 条评论，5 👍，倾向于移除或改为按需注入。 |
| 4 | **Fullscreen TUI: allow disabling select-to-copy #7720** | 新全屏模式默认“选中即复制”，干扰习惯高亮阅读的用户。 | 3 条评论，呼吁增加配置项 `tui.selectOnCopy: false`。 |
| 5 | **TUI crashes on over-wide lines instead of truncating #7736 / #7737** | 渲染行宽超出终端宽度直接抛异常退出，而非截断，属 v0.84.0 回归。 | 两个 Issue 合计 5 条评论，已有 PR #7721、#7718 修复中。 |
| 6 | **Compaction fails on GitHub Copilot GHE “unknown stamp” #7413** | 企业版 Copilot 仅 `/compact` 失败，正常聊天无碍，阻断企业长会话工作流。 | 7 条评论，1 👍，已关闭（修复合入）。 |
| 7 | **Agent.reset() during active run leaves assistant-only transcript #7703** | 运行中调用 `reset()` 导致会话记录仅剩 assistant 消息，破坏上下文完整性。 | 4 条评论，PR #7717 已合入修复（拒绝运行中 reset）。 |
| 8 | **DeepSeek via opencode zen gateway: reasoning_content must be passed back #7702** | 多轮工具调用触发 400，根因 `detectCompat()` 未正确识别兼容模式。 | 4 条评论，标记 `inprogress`。 |
| 9 | **pi-coding-agent leaks X11 connections (182 in 8 days) #7600** | 长期运行耗尽 X server 客户端表（默认 256），导致新 GUI 程序无法启动。 | 3 条评论，Linux/X11 用户高优关注。 |
| 10 | **Multi-line paste broken on Termux (no bracketed paste) #7321** | Android Termux 等不支持 bracketed paste 的终端粘贴多行时首个 `\r` 触发提交。 | 3 条评论，1 👍，移动端开发场景刚需。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心内容 | 状态 |
|---|----|------|----------|------|
| 1 | **#7745** fix(ai): preserve Gemini thought signatures in OpenAI completions | Bug 修复 | 捕获并回放 Gemini `extra_content.google.thought_signature` / `vertex.thought_signature`，保留 OpenRouter `reasoning_details` 兼容。 | **Closed (Merged)** |
| 2 | **#7742** feat(ai): Ollama Cloud support | 新功能 | 新增 Ollama Cloud Provider，使用 `OLLAMA_API_KEY`，复用现有 Provider 模式，已手测通过。 | **Open** |
| 3 | **#7733** fix(tui): correct multi-click text selection | Bug 修复 | 修复双击选词包含后续空格、双击空白组不再错误扩展等回归问题。 | **Closed (Merged)** |
| 4 | **#7721** fix(tui): avoid unwanted newlines when copying in fullscreen | Bug 修复 | 全屏模式复制长行换行时不再引入额外换行，追踪视觉行归属。 | **Closed (Merged)** |
| 5 | **#7717** fix(agent): reject reset during active runs | Bug 修复 | 运行中调用 `Agent.reset()` 直接报错，保护 transcript 完整性，含回归测试。 | **Closed (Merged)** |
| 6 | **#7715** feat(agent): allow blocked tool calls to terminate | 功能增强 | `BeforeToolCallResult` 新增可选 `terminate` 提示，扩展 `tool_call` 事件同步支持，文档化批处理规则。 | **Closed (Merged)** |
| 7 | **#7686** feat(coding-agent): add configurable Harness factory | 架构重构 | 内部工厂构建实验性 Harness，保留调用方工具/激活/提示策略，支持从当前活跃工具重建提示。 | **Closed (Merged)** |
| 8 | **#7659** feat(ai): add Qwen Token Plan Individual provider | 新功能 | 新增 `qwen-token-plan-individual` Provider，基于国际 Token Plan 端点与 `QWEN_TOKEN_PLAN_API_KEY`，覆盖 8 个模型。 | **Closed (Merged)** |
| 9 | **#7727** fix: sqlite queries optimizations | 性能优化 | 分支查询下推 `type/customType/cursor/limit`，覆盖索引优化 `getLastEntry` 等热点查询。 | **Open** |
| 10 | **#7681** Support AGENTS.override.md as per-directory context override | 新功能 | 目录同时存在 `AGENTS.override.md` 与 `AGENTS.md/CLAUDE.md` 时仅加载 override，层级语义更清晰。 | **Closed (Merged)** |

---

## 5. 功能需求趋势（从全部 50 个 Issue 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|----------|------------|----------|
| **Windows 一等公民支持** | #7547 | 明确官方推荐运行方式、CI 覆盖、开箱即用安装包。 |
| **长上下文稳定性** | #6879, #7413 | 自动压缩可靠触发、企业版 Provider 兼容、压缩失败降级策略。 |
| **TUI 交互打磨** | #7720, #7725, #7735, #7736, #7737, #7746 | 选择/复制/滚动/双击/宽行截断等细节体验，半页翻页键位。 |
| **Provider/模型生态扩展** | #5323, #6733, #7674, #7676, #7689, #7702, #7704, #7742 | Vertex/GCP、Gemini thought、Qwen/GLM/DeepSeek 多网关、Ollama Cloud、Codex `end_turn`、内置工具。 |
| **Agent 运行时健壮性** | #7703, #7717, #7715, #7740 | reset 保护、工具调用阻断终止、热重载工具渲染注册顺序。 |
| **资源泄漏治理** | #7600 | X11 连接泄漏、SQLite 连接/查询优化（#7727）。 |
| **可配置性与脚本化** | #7152, #7699, #7722 | 只读 auth preflight、SessionManager.reload()、主题覆盖 CLI。 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“别让我猜怎么在 Windows 上跑 Pi”** —— #7547 集中了最多讨论，开发者期望官方给出**单一推荐路径**（如 WSL2 + 官方安装脚本）并作为 CI 基线，其余方案社区维护。  
2. **“长会话别偷偷炸了”** —— 自动压缩失效（#6879）与企业 Copilot 压缩报错（#7413）暴露**上下文管理链路缺乏兜底**，需增加“超阈值强制压缩/降级/报警”机制。  
3. **“系统提示别教 Agent 干蠢事”** —— #7128 反映**默认系统提示词副作用**被低估，建议引入“提示词副作用评测”或可观测性指标。  
4. **“TUI 新功能别把旧体验搞崩”** —— v0.84.0 全屏模式发布后 24h 内涌现 6+ 个回归 Issue，提示**发布前需补充 TUI 交互回归矩阵**（选中、复制、滚动、宽行、双击、键位）。  
5. **“Provider 适配要跟上模型迭代”** —— Qwen/GLM/DeepSeek/Codex/Gemini 等新模型/网关频繁出现 400 兼容性问题，呼吁建立 **Provider 兼容性自动化测试矩阵**（夜ly 跑通主流网关）。  
6. **“别漏资源、别卡主线程”** —— X11 连接泄漏（#7600）、工具调用流式解析 O(n²)（#7698）、SQLite 热点查询未下推（#7727）显示**长期运行资源管控与性能基线缺失**。  
7. **“给我更可脚本化的控制面”** —— 只读 auth check（#7152）、SessionManager.reload（#7699）、主题 CLI 覆盖（#7722）反映**自动化/集成场景对非交互式 API 需求上升**。

---

> **数据来源**：`github.com/earendil-works/pi`（Releases、Issues、PRs 过去 24h 增量）  
> **生成时间**：2026-08-07 08:00 UTC  
> **下一期预告**：关注 v0.84.1 热修复节奏、Windows 支持 RFC 进展、Harness v2 落地节点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报｜2026-08-07

---

## 1. 今日速览

- **v0.21.7 正式发布**，核心亮点：移除 Goals 50 轮对话限制，支持在交互式 CLI 中原生渲染内联终端图片（兼容 Kitty/iTerm2/WezTerm/Ghostty/Warp），显著提升长任务连续性与多模态体验。  
- **安全与稳定性成本集中修复**：针对只读 Shell 分类器绕过（#8582）、零 inode 文件缓存冲突（#8290）、Windows Desktop 启动崩溃（#8615）、Hook 系统回归（#8622）等高优先级问题均已有 PR 进入审查或合并。  
- **生态扩展加速**：DingTalk 群聊配对（#8440）、Web Shell 扩展归档安装（#8621）、Mem0 记忆写入（#8507）、qwen-audio-agent 语音前端纳入 README（#8629），ACP 生态与多模态接入同步推进。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 | 链接 |
|------|------|----------|------|
| **v0.21.7** | 稳定版 | • 移除 Goals 50 轮限制，任务可无限恢复继续<br>• 新增交互式 CLI 内联终端图片渲染（Kitty/iTerm2/WezTerm/Ghostty/Warp）<br>• 其余为常规修复与依赖更新 | [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7) |
| **v0.21.7-nightly.20260807.fca8f3c1f** | 夜ly | • `fix(ci): surface blocked autofix takeover admission`（#8410） | [Nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7-nightly.20260807.fca8f3c1f) |
| **live-host-v0.1.0** | 新组件 | Qwen Live Host 首个正式版，提供稳定安装源（`live-host-latest`） | [Release](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.1.0) |

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 关注理由 | 链接 |
|---|------|------|------|----------|------|
| **#3203** | Qwen OAuth 免费额度政策调整：每日 1000→100 次，拟 2026-09 彻底关闭 | 🔴 Closed | 150 | **社区讨论度最高**，直接影响免费用户可用性，引发大量迁移/自建代理讨论 | [#3203](https://github.com/QwenLM/qwen-code/issues/3203) |
| **#8622** | 0.21.6 回归：PreToolUse/PostToolUse/PreCompact/SessionStart Hook 全部不触发 | 🟢 Open | 5 | **P1 级回归**，破坏自动化工作流（如代码审查、安全拦截），多用户确认阻塞升级 | [#8622](https://github.com/QwenLM/qwen-code/issues/8622) |
| **#8615** | Desktop 0.1.0 Windows 启动崩溃：`EISDIR lstat 'C:'` | 🟢 Open | 5 | **新发布 Desktop 版阻断性 Bug**，影响 Windows 主力用户群，已有复现步骤 | [#8615](https://github.com/QwenLM/qwen-code/issues/8615) |
| **#8582** | 安全：只读 Shell 分类器被行续行/ `${var@P}` 绕过，任意命令可被自动批准 | 🟢 Open | 5 | **安全漏洞**，直接关联沙箱逃逸风险，已有修复 PR #8590 进入审查 | [#8582](https://github.com/QwenLM/qwen-code/issues/8582) |
| **#8316** | 取消提示时未恢复输入框内容，用户需重输 | 🟢 Open | 8 | 高频交互痛点，影响 CLI 日常使用效率，多用户 +1 | [#8316](https://github.com/QwenLM/qwen-code/issues/8316) |
| **#8557** | macOS Warp + tmux 缩窗导致转录块重复渲染（重叠输出） | 🟢 Open | 6 | 终端渲染栈问题，涉及 VP 模式与滚动回缓冲区同步，复现率高 | [#8557](https://github.com/QwenLM/qwen-code/issues/8557) |
| **#8643** | 安全：`serve` 快速路径因信任评估一次性通过，导致 DO_NOT_TRUST 祖先目录下 `.env` 被加载 | 🟢 Open | 3 | 凭证泄露风险，影响 `qwen serve` 多工作区隔离，已有 PR 修复中 | [#8643](https://github.com/QwenLM/qwen-code/issues/8643) |
| **#8627** | 显式 DO_NOT_TRUST 被祖先 TRUST_FOLDER 覆盖，导致 bearer token 泄露 | 🟢 Open | 3 | 信任规则短路逻辑缺陷，配合 #8643 形成信任体系双重隐患 | [#8627](https://github.com/QwenLM/qwen-code/issues/8627) |
| **#8592** | Desktop 设置切换 UI 语言无效果，界面保持英文 | 🔴 Closed | 5 | 已修复（#8641 恢复原生菜单语言持久化），验证 i18n 流程完善度 | [#8592](https://github.com/QwenLM/qwen-code/issues/8592) |
| **#8629** | 提议：在 README Ecosystem 收录 qwen-audio-agent（ACP 语音前端） | 🟢 Open | 5 | 社区主动推动多模态生态可见度，标志 ACP 语音交互进入主流视野 | [#8629](https://github.com/QwenLM/qwen-code/issues/8629) |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 类型 | 核心内容 | 状态 | 链接 |
|---|------|------|----------|------|------|
| **#8590** | `fix(core): close read-only classifier bypasses via line continuation and ${var@P}` | 🔒 安全修复 | 封堵 #8582 两个绕过：行续行隐藏命令替换、参数展开 `${var@P}` 绕过 AST 与运行时检测 | 🟢 Open (autofix/takeover) | [#8590](https://github.com/QwenLM/qwen-code/pull/8590) |
| **#8290** | `fix(core): fail closed on zero inode file cache` | 🛡️ 稳健性 | `dev:ino=0` 时拒绝缓存命中，防止不相关文件被误判为同一文件（跨文件系统/网络盘场景） | 🟢 Open | [#8290](https://github.com/QwenLM/qwen-code/pull/8290) |
| **#8320** | `feat(workflows): add cooperative pause and resume` | ⚙️ 核心增强 | Dynamic Workflows 新增整体暂停/恢复：停止调度新 Agent、等待在飞任务收敛、结果挂起至恢复 | 🟢 Open (autofix/takeover) | [#8320](https://github.com/QwenLM/qwen-code/pull/8320) |
| **#8656** | `docs: document inline terminal image previews` | 📖 文档 | 记录 v0.21.7 新增的内联图片渲染行为：有序文本/图片、渲染器选择、PNG 校验、占位符确定性 | 🟢 Open | [#8656](https://github.com/QwenLM/qwen-code/pull/8656) |
| **#8594** | `fix(desktop): fall back to system browser when built-in browser fails` | 🐛 Desktop 修复 | 修复助手回复中链接点击无反应：内置浏览器失败时自动回退系统浏览器（修复 #8593） | 🟢 Open (autofix/takeover) | [#8594](https://github.com/QwenLM/qwen-code/pull/8594) |
| **#8507** | `feat(external-context): Add optional Mem0 memory writes` | 🧠 记忆增强 | Direct External Context 新增可选 Mem0 写入（`"write":{"enabled":true}`），注册 `context_remember` 工具 | 🟢 Open | [#8507](https://github.com/QwenLM/qwen-code/pull/8507) |
| **#8621** | `feat(web-shell): install Extensions from archives` | 🌐 Web Shell | 扩展管理器新增“档案安装”：上传 `.zip/.tar.gz` → 守护进程入队安装、交互、刷新、操作全流程复用 | 🟢 Open | [#8621](https://github.com/QwenLM/qwen-code/pull/8621) |
| **#8418** | `feat(core): share compression caches with OpenAI providers` | ⚡ 性能 | 前缀保留压缩缓存从仅 DashScope 扩展至所有 OpenAI 兼容端点，减少重复上下文编码开销 | 🟢 Open (autofix/takeover) | [#8418](https://github.com/QwenLM/qwen-code/pull/8418) |
| **#8614** | `feat(web-shell): add fullscreen view for right artifact panel` | 🖥️ UX | 右侧制品面板（Artifacts/Subagents/Review/Monitors/Tasks）新增全屏切换，提升复杂任务可视空间 | 🟢 Open (autofix/takeover) | [#8614](https://github.com/QwenLM/qwen-code/pull/8614) |
| **#6606** | `fix(core): Sanitize internal daemon secrets from shell subprocess environments` | 🔒 安全加固 | 防止守护进程内部密钥（bearer token 等）泄露至 Shell 子进程环境变量，已通过自报审查 | 🟢 Open (review/self-reported) | [#6606](https://github.com/QwenLM/qwen-code/pull/6606) |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issues/PRs | 社区呼声强度 |
|----------|-------------------|--------------|
| **多模态原生支持** | v0.21.7 内联图片渲染（#8090 Closed）、qwen-audio-agent 入驻 README（#8629）、Omni 多模态实验总纲（#8197） | ⭐⭐⭐⭐⭐ 核心路线图，已落地 CLI 与语音前端 |
| **长任务/会话持久化** | 移除 Goals 50 轮限制（v0.21.7）、Workflow 暂停恢复（#8320）、S3 投递缓存与恢复（#8185）、转录分页优化（#8553） | ⭐⭐⭐⭐⭐ 企业级/复杂工程场景刚需 |
| **ACP 生态与扩展机制** | Web Shell 扩展归档安装（#8621）、DingTalk 群聊配对（#8

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-08-07

---

## 1. 今日速览
**核心版本 v0.9.4 发布列车（`#5135`）已完成整合，进入最后验收阶段，包含 77 个提交的大规模重构与功能落地。** 社区核心精力集中在 **命令边界重构（EPIC #2870 第 5.3 层）**、**Runtime API 全面扩展（5 个并行 PR）**、**Subagent/Workflow 可靠性修复** 以及 **构建性能优化（LTO 与 Git SHA 解耦）**。TUI 交互体验（鼠标滚动、状态栏）与多平台兼容性也获得专项修复。

---

## 2. 版本发布
**暂无新版本发布。** `v0.9.4` 发布列车（`#5135`）已合并至主干，预计近期切 Tag 发布。主要看点：Workflow 状态栏上移、Subagent 检查点恢复、MCP Registry 发现、提示词渐进式披露、构建流水线分离等。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 核心看点 | 关注理由 |
|---|---|---|---|---|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: 分阶段命令边界重构** | 🟢 Closed | 追踪 `#2791` 大型重构的可合并分层；Layer 5.3 (`#5255`) 今日推进 Palette/Completion 集成验证。 | **核心架构演进**，决定命令系统可扩展性与发现机制，关联 20+ 评论讨论。 |
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | **支持保存多个 API Key（跨 Provider 切换）** | 🔴 Open | 用户需在 DeepSeek/GLM 间切换，现行配置仅单 Key 覆盖。 | **高频用户痛点**，涉及配置模型重设计，2 条评论讨论方案可行性。 |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | **未知 Model ID 静默降级为 128K 上下文** | 🔴 Open | `context_window_for_model` 兜底逻辑无显式告警，导致 1M 窗口模型在 128K 处被截断。 | **数据隐患/静默失败**，`v0.9.4` 已部分缓解但根因未除，需显式 Warning 或报错。 |
| [#5253](https://github.com/Hmbown/CodeWhale/issues/5253) | **嵌套 Subagent 可突破根会话深度预算** | 🔴 Open | 子代理显式指定 `max_depth` 可绕过全局 `MAX_SPAWN_DEPTH_CEILING(8)` 与根会话限制。 | **逻辑漏洞**，影响多 Agent 编排可靠性，关联 `#3931` 遗留问题。 |
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | **OpenModel 兼容 Anthropic API 频繁报 400 `type` 字段错误** | 🟢 Closed | `providers.openmodel` 发送 `type` 字段值不在 `["enabled","disabled","auto"]` 范围内。 | **Provider 兼容性阻断**，6 条评论定位为上游协议差异，已修复合并。 |
| [#5223](https://github.com/Hmbown/CodeWhale/issues/5223) | **TUI 长内容溢出时鼠标滚轮路由至输入历史而非内容区** | 🟢 Closed | macOS+iTerm2 下滚动事件被错误捕获，需 `Cmd+Up` 绕过。 | **核心交互体验缺陷**，`#5234` 已修复（关闭 alternate scroll 模式）。 |
| [#5246](https://github.com/Hmbown/CodeWhale/issues/5246) | **构建：分离发布 Profile 与本地 Release Gate，避免全量 Fat-LTO** | 🟢 Closed | `cargo build --release` 预推门槛过高，贡献者每次预推送均承受极慢链接。 | **开发者体验/贡献门槛**，拆分 `dist` 与 `local-release` 两套 Profile。 |
| [#5245](https://github.com/Hmbown/CodeWhale/issues/5245) | **构建：Git Commit 强制全量重建 TUI/CLI（解耦 HEAD SHA 戳）** | 🟢 Closed | Build script 监听 Git Ref 导致嵌入 SHA 变更触发 68 万行代码重编译。 | **构建性能核心痛点**，改为编译期注入或仅 Release 时打戳。 |
| [#5046](https://github.com/Hmbown/CodeWhale/issues/5046) | **Fleet：命名 Agent 严格绑定配置角色，仅 `general` 暴露模型选项** | 🟢 Closed | 调度器过度授权模型决策，导致 `model_strength: same` 克隆操作员模型 5 次而非复用。 | **编排逻辑修正**，明确配置与运行时权责边界。 |
| [#4828](https://github.com/Hmbown/CodeWhale/issues/4828) | **macOS：Underwater Shell 导致 `open/osascript/launchctl` 失败 (exit -54)** | 🟢 Closed | v0.9.0 默认引入 Underwater 交互系统破坏 macOS 原生命令执行权限。 | **平台回归阻断**，降级至 v0.8.67 可规避，已修复合并。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 核心变更 |
|---|---|---|---|---|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | **Release: CodeWhale v0.9.4 Release Train** | 🟢 Closed | 🚀 Release | **里程碑合并**：77 commits，含 18 个 Train Commits。整合 Workflow 状态栏、Subagent 恢复、MCP Registry、Prompt 优化、构建分离等全部 v0.9.4 目标。 |
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | **Layer 5.3: Palette, Completion, Discovery Filtering** | 🔴 Open | ♻️ Refactor | 命令边界重构第 5.3 层：验证命令面板、斜杠补全、发现过滤的用户命令集成，完成 EPIC `#2870` 关键验收层。 |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | **Feat: MCP Registry Discovery & Registry-First Tool Selection** | 🟢 Closed | ✨ Feature | 新增 `registry_sync` 抓取零环境 stdio Server；模型优先查询公共 Registry 再回退 Shell/自定义工具，重塑工具调用优先级。 |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | **Feat: Resume Interrupted Children from Checkpoint via Followup** | 🟢 Closed | ✨ Feature | `agents/followup` 现支持恢复 `interrupted_continuable` 子任务；长任务（文档审阅、多步搜索）中断后可续跑，无需重新派发。 |
| [#5077](https://github.com/Hmbown/CodeWhale/pull/5077) | **Perf(prompt): Progressively Disclose Fresh Context** | 🟢 Closed | ⚡ Perf | `AGENTS.md/CLAUDE.md` 保持急切加载；环境技能块上限 2.4k 字，技能体延迟加载；会话摘要移至懒加载，显著降低首轮 Token 消耗。 |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | **Feat(ACP): Expose File/Search/G

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*