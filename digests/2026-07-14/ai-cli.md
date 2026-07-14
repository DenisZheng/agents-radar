# AI CLI 工具社区动态日报 2026-07-14

> 生成时间: 2026-07-14 08:37 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-07-14

---

## 1. 生态全景

当前 AI CLI 工具生态已进入 **“标准化协议竞争与工程化深水区”** 并行阶段。头部工具（Claude Code、Codex、Gemini CLI）在 **跨工具上下文共享（AGENTS.md/ACP）**、**企业级权限与审计**、**长会话稳定性** 三大核心课题上同步发力，试图确立生态锚点。国产工具（Kimi Code、Qwen Code、DeepSeek TUI）呈现 **“ACP 协议原生化 + 国产模型深度适配 + IDE 集成优先”** 的差异化突围路径。全生态普遍面临 **Windows 原生体验短板、模型行为黑盒焦虑、扩展机制碎片化** 三大共性挑战，社区呼声已从“功能堆砌”转向“可靠性、可观测性、互操作性”的工程化诉求。

---

## 2. 各工具活跃度对比

| 工具 | 仓库 | 今日 Issues 活跃度 | 今日 PR 活跃度 | 版本发布情况 | 核心研发节奏 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | anthropics/claude-code | **极高** (热点 Issue #6235 4.3k👍，10个精选高热度 Issue，Windows 问题集中爆发) | 低 (3个，均为插件/钩子生态修复) | **高频** (同日双 Release: v2.1.208/v2.1.209) | 稳定版快速迭代修复，重大功能靠社区提案推动 |
| **OpenAI Codex** | openai/codex | **极高** (50+ Issue，桌面端 Browser 插件全平台击穿 5 个重复 Issue，模型行为异常持续发酵) | **极高** (10+ 合并 PR，架构重构类居多：审批系统、SQLite历史、环境状态) | 高频 Alpha (rust-v0.145.0-alpha.7~10 连发 4 个) | 激进内部重构 + 高频 Alpha，稳定版滞后于主干 |
| **Gemini CLI** | google-gemini/gemini-cli | 高 (10 个精选 P1/P2 Issue，核心聚焦 Agent 稳定性、Auto Memory、Shell 异步化) | **高** (10 个关键 PR，含无限循环防护、同步 I/O 移除、ACP 安全重构) | Nightly (v0.52.0-nightly) | 夜ly版本驱动，核心架构加固与 ACP 生态补齐并行 |
| **GitHub Copilot CLI** | github/copilot-cli | 高 (37 个 Issue 更新，权限系统、语音模型、检查点恢复 3 大高危领域集中爆发) | **零** (过去 24h 无 PR 更新) | 静止 (稳定版 v1.0.69) | 发布节奏放缓，技术债（权限、快照、跨平台）集中爆发期 |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 低 (仅 2 个 Issue 更新，ACP 交互阻断、Windows 恢复损坏) | **极高** (10+ PR 合并/进行中，模型适配、ACP MCP 加载、CLADUE.md 兼容、报错引导) | 静止 (最新 v1.36.0) | **PR 驱动型高强度迭代**，精准打击模型适配与迁移摩擦 |
| **OpenCode** | anomalyco/opencode | 中高 (10 个精选 Issue，Web UI 回归、子代理编排、升级降级、IPv6 黑洞) | 高 (10 个精选 PR，TUI 体验、任务超时、CLI 懒加载、转录持久化) | **高频** (同日双 Patch: v1.17.19/v1.17.20) | 稳定版双周/周级修复，多模型供应商适配极快 |
| **Pi** | earendil-works/pi | 中 (Top 10 Issue，核心聚焦 Codex/GPT-5.6 兼容性、Agent Harness 架构演进、企业级 Provider) | 高 (隐含在 Issue 进展中，SQLite存储、Memory系统、Hook机制等重构 PR 合入) | 无 | 架构重构驱动，向“可替换组件平台”演进 |
| **Qwen Code** | QwenLM/qwen-code | 中高 (10 个精选 Issue，Daemon 多工作区 RFC、热重载、子代理通信、内存泄漏) | **极高** (11 个精选 PR，PDF Vision、Channel Memory、CI自动化、VP模式默认开启) | **里程碑式** (v0.19.10 稳定版落地多工作区) | 版本驱动 + 工程化基建同步，Daemon 架构演进明确 |
| **DeepSeek TUI (CodeWhale)** | Hmbown/CodeWhale | 中 (9 个热点 Issue，@补全卡死、Agent 停止语义、版本化收据、BSD 兼容) | 高 (10 个 PR，RC 准备、性能修复、MiniMax Provider、官网重构、依赖升级) | RC 阶段 (v0.8.68-rc) | RC 版本整合式发布，重 TUI 体验极致打磨与 Agent 基建 |

> **数据说明**：Issues/PR 数基于各日报“精选 Top 10”或“全量提炼”语境，非绝对全量统计；“活跃度”综合考量数量、热度(👍/评论)及阻断性。

---

## 3. 共同关注的功能方向

| 共性方向 | 关注工具 (代表性 Issue/PR) | 核心诉求细节 |
| :--- | :--- | :--- |
| **跨工具上下文标准化** | **Claude Code** (#6235 AGENTS.md 4.3k👍), **Kimi Code** (#2487 兼容 CLAUDE.md), **Gemini CLI** (隐含 ACP 协议), **Qwen Code** (ACP 集成测试 #2414), **OpenCode** (ACP 相关) | 打破单工具孤岛，实现指令/上下文/技能在 Codex、Cursor、Claude、Gemini、Kimi、Qwen 间零成本迁移与共享。AGENTS.md 成事实标准提案，ACP 成技术落地协议。 |
| **Agent 编排与子代理可靠性** | **Gemini CLI** (#22323 子代理虚报成功, #21409 挂起), **OpenCode** (#16491 MCP工具不可用, #28052 权限继承覆盖, #36755 超时配置), **Qwen Code** (#5239 双向通信), **Pi** (#6599 Agent Memory, #6633 Hook), **DeepSeek TUI** (#4359 父停止语义) | 解决子代理“挂起、虚报、权限错乱、工具不可用、通信不畅、生命周期失控”全链路问题，从“能跑”向“可编排、可审计、可恢复”进阶。 |
| **长会话/大上下文稳定性** | **Claude Code** (#52924 渲染重复, #76185 内存泄漏, #77402 幻觉丢失), **Codex** (#30364 Token聚簇, #32806 上下文截断), **Gemini CLI** (#2128 内存无界增长), **Qwen Code** (#2128 内存泄漏), **OpenCode** (#36670 输出丢失) | 300k+ Token 会话成常态，内存泄漏、渲染崩溃、上下文截断、模型推理异常成核心稳定性杀手，需引入 LRU/压缩/虚拟化/流式投影等工程化方案。 |
| **Windows 原生体验补齐** | **Claude Code** (#74649 HCS缺失, #77380 MSIX虚拟化写入失败, #33949 SSE挂起), **Codex** (#32935 Windows Browser插件失败, #32040 PiP挂起), **Copilot CLI** (#2082 Ctrl+Shift+C失效, #3098 PS变量陷阱), **Kimi Code** (#2496 恢复损坏), **OpenCode** (#36808 IPv6黑洞) | 头部工具 Windows 体验普遍落后 Linux/macOS 1-2 代：打包分发(MSIX)、终端键位、子进程管理、网络栈、文件系统虚拟化均为高危区。 |
| **扩展/钩子/协议生态成熟度** | **Claude Code** (#77292 Marketplace命名, #77289 hookify编码), **Gemini CLI** (#28316 A2A取消修复, #2490 MCP配置), **OpenCode** (#36807 MCP刷新), **Qwen Code** (#6815 Web扩展管理, #3696 热重载), **Pi** (#6594 SQLite存储), **Kimi Code** (#2490 ACP加载MCP) | 插件安装失败、Hook 静默失效、MCP 配置不同步、ACP/A2A 协议实现不全、热重载缺失，开发者生态工具链碎片化严重，亟需统一规范与 SDK。 |
| **模型行为透明度与配额兑现** | **Codex** (#30364 Reasoning Token聚簇, #32806 上下文虚标), **Claude Code** (#74562 别名不生效, #77402 系统性幻觉), **OpenCode** (v1.17.19/20 密集适配新模型), **Kimi Code** (#2499/2498/2494 推理参数修复) | 模型侧“推理 Token 黑盒、上下文窗口虚标、参数别名失效、版本漂移”导致 CLI 层无法精准控制成本与效果，需建立 Provider 契约测试与运行时遥测。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线特征 | 目标用户画像 | 独特护城河 / 战略重心 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **企业级标杠端编码 Agent 标杆** | TypeScript/Node 原生，紧绑 Anthropic 模型，重安全沙箱与权限模型 | 专业开发者、企业研发团队、重合规安全场景 | **最强模型推理能力 + 最成熟权限/钩子体系**；AGENTS.md 提案主导权，生态标准制定者。 |
| **OpenAI Codex** | **云原生多模态编码平台** | Rust 核心 + TS 前端，桌面端/CLI 双形态，深度绑定 OpenAI 模型与 Responses API | 全栈工程师、Web 自动化重度用户、早期尝鲜者 | **浏览器/多模态技能原生集成**；Responses API 与审批系统架构统一，云端状态同步。 |
| **Gemini CLI** | **Google 生态原生 Agent 引擎** | Go 核心 + TS TUI，重 A2A/ACP 协议标准化，强调 Shell 工具链异步化与资源管控 | GCP 用户、大规模代码库维护者、重工程化稳定性团队 | **超大上下文窗口原生优势 + A2A 协议推动者**；Auto Memory 与评测体系建设领跑。 |
| **GitHub Copilot CLI** | **GitHub 工作流深度集成终端** | TypeScript/Node，依托 VS Code/GitHub 平台生态，权限/策略与企业账号体系打通 | GitHub 重度用户、企业内源团队、Copilt 订阅者 | **Git 原生语义感知 + 企业级策略下发 (mTLS/动态Header)**；语音交互差异化入口。 |
| **Kimi Code CLI** | **国产模型深度适配 + 迁移友好** | Rust/TS 混合，激进 PR 驱动迭代，兼容 `CLAUDE.md`/ACP/MCP 降低切换成本 | 国内开发者、Kimi/Moonshot 模型用户、从 Claude/Cursor 迁移者 | **模型侧参数极速适配 (thinking/reasoning) + 零成本配置迁移**；ACP 服务端能力补齐冲刺 IDE 集成。 |
| **OpenCode** | **模型中立的多供应商聚合层** | Go 单二进制，极致跨平台，内置 20+ Provider 适配器，TUI/Web 双前端 | 多模型并行用户、自托管/私有化部署、追求极简部署的团队 | **零配置多模型切换 +

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-14）

---

## 1. 热门 Skills 排行（按社区讨论热度与关联 Issue 活跃度综合判断）

| 排名 | PR / Skill | 核心功能 | 社区讨论热点 | 当前状态 |
|------|------------|----------|--------------|----------|
| 1 | **#1298** `skill-creator: fix run_eval.py 0% recall` | 修复技能评估循环完全失效（recall 恒为 0%），涉及 Windows 管道读取、触发检测、并行 worker 等多处根因 | 关联 Issue **#556 (12💬)**, **#1169 (3💬)**, **#1323 (新)**, **#1099**, **#1050**, **#1061** — 社区一致认为「技能创建工具链彻底不可用」 | 🔴 OPEN |
| 2 | **#723** `feat: add testing-patterns skill` | 全栈测试模式指南：Testing Trophy、AAA 模式、React/Vue/后端/契约/性能/混沌测试、CI 集成 | 无直接高热 Issue，但测试生成是社区高频需求（见 #412 agent-governance 讨论延伸） | 🔴 OPEN |
| 3 | **#1367** `feat: add self-audit` | 机械文件验证 + 四维推理质量门（预校准→对抗审查→交付验证），通用于任意技术栈 | 呼应 Issue **#1385 (3💬)**「推理质量门管道」提案，作者同为 YuhaoLin2005，形成「元技能闭环」 | 🔴 OPEN |
| 4 | **#83** `Add skill-quality-analyzer & skill-security-analyzer` | 两大元技能：质量五维评分（结构/文档/测试/安全/维护）+ 安全静态分析（注入/路径穿越/权限/密钥） | 直接回应社区对「技能市场准入标准」的隐性需求，Issue **#492 (34💬)** 安全信任边界讨论间接佐证 | 🔴 OPEN |
| 5 | **#514** `Add document-typography skill` | 解决 AI 生成文档的孤行/寡行、编号错位、标点挤压等排版通病 | 文档类技能需求持续（见 #486 ODT、#541 DOCX 修复、#538 PDF 大小写），社区期待「开箱即用的专业排版」 | 🔴 OPEN |
| 6 | **#1302** `Add color-expert skill` | 色彩专家知识库：命名系统、色空间选型、无障碍对比度、品牌色系生成、色盲模拟 | 设计/前端领域细分需求显性化，无竞品技能，填补「视觉规范落地」空白 | 🔴 OPEN |
| 7 | **#486** `Add ODT skill` | OpenDocument (.odt/.ods) 创建、填充、解析、转 HTML，支持 LibreOffice/ISO 标准工作流 | 企业级文档互操作刚需，配合 #538 PDF 大小写修复、#541 DOCX 书签冲突修复，形成「文档格式全家桶」 | 🔴 OPEN |
| 8 | **#210** `Improve frontend-design skill` | 重写前端设计技能：可执行性、单轮对话可落地、去除模糊指令 | 现有技能「文档化倾向重、可执行性轻」的典型修正案例，Issue **#202 (8💬)** 直接批评 skill-creator 同类问题 | 🔴 OPEN |

> **注**：所有列出 PR 均为 **OPEN** 状态；仓库近期无 MERGED 高热 PR，说明审核/合并节奏偏慢。

---

## 2. 社区需求趋势（从 Top 15 Issues 提炼）

| 需求方向 | 代表 Issue | 核心诉求 | 热度信号 |
|----------|------------|----------|----------|
| **技能信任与安全边界** | [#492](https://github.com/anthropics/skills/issues/492) (34💬, 2👍) | 社区技能冒用 `anthropic/` 命名空间，用户误授高权限；需官方命名空间治理、签名验证、权限分级 | 🔥 **最高讨论量**，安全红线 |
| **组织级技能分发与协作** | [#228](https://github.com/anthropics/skills/issues/228) (14💬, 7👍) | 团队内技能共享目前靠「下载→传文件→手动上传」，急需共享库/分享链接/权限组 | 🔥 **点赞最高**，企业落地刚需 |
| **技能创建/评估工具链修复** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍) + [#1169](https://github.com/anthropics/skills/issues/1169) (3💬) | `run_eval.py`/`run_loop.py` 触发率 0%，Windows 下彻底不可用，阻塞技能迭代 | 🔥 **阻塞性 Bug**，多 PR 并行修复 |
| **技能生命周期管理** | [#62](https://github.com/anthropics/skills/issues/62) (10💬) + [#189](https://github.com/anthropics/skills/issues/189) (6💬, 9👍) | 技能消失/重命名导致丢失、插件包重复安装污染上下文窗口 | ⚠️ 体验痛点，涉及存储与注册表 |
| **元技能：质量门禁与治理** | [#412](https://github.com/anthropics/skills/issues/412) (6💬) + [#1385](https://github.com/anthropics/skills/issues/1385) (3💬) | Agent 治理（策略/威胁/信任分/审计）、推理质量三道门（校准/对抗/验证） | 📈 新兴方向，配合 #83、#1367 落地 |
| **专用格式/领域技能** | [#486](https://github.com/anthropics/skills/pull/486) ODT、[#514](https://github.com/anthropics/skills/pull/514) Typography、[#1302](https://github.com/anthropics/skills/pull/1302) Color、[#181](https://github.com/anthropics/skills/pull/181) SAP | 企业文档标准、专业排版、设计系统、ERP 预测模型 | 📦 长尾需求显性化 |
| **跨平台/云原生兼容** | [#29](https://github.com/anthropics/skills/issues/29) (4💬) Bedrock、[#16](https://github.com/anthropics/skills/issues/16) (4💬) MCP、[#1061](https://github.com/anthropics/skills/issues/1061) (3💬) Windows | AWS Bedrock 部署、MCP 协议暴露、Windows 原生支持 | ☁️ 基建层诉求 |

---

## 3. 高潜力待合并 Skills（讨论活跃、功能完备、近期有更新）

| PR | Skill | 合并理由 | 关键阻碍/待办 |
|----|-------|----------|---------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` 核心修复 | **P0 阻塞修复** — 修复后才能恢复技能评估/优化闭环，关联 6+ Issue，作者持续更新至 7/8 | 需 Windows/Linux 双平台验证、并行 worker 压测 |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | 与 #1385 Issue 形成「提案+实现」闭环，通用性强，无外部依赖，质量门禁标准化雏形 | 需补充基准测试用例、文档示例 |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | 覆盖全测试栈，填补「测试生成/评审」空白，社区长期隐性高需求 | 体量大，需拆分审核；CI 集成部分需适配主流平台 |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | 直接支撑 #492 信任边界治理，市场准入自动化必备 | 需与官方发布流

---

# Claude Code 社区动态日报 | 2026-07-14

---

## 1. 今日速览

- **发布两个修复版本**：v2.1.209 修复后台会话中 `/model` 等对话框被阻塞的问题；v2.1.208 新增屏幕阅读器模式与 Vim 插入模式按键映射，显著提升无障碍与编辑体验。
- **社区最热议题持续发酵**：#6235 《支持 AGENTS.md》已获 4369 👍、342 条评论，成为跨工具协作标准化的核心诉求。
- **Windows 平台问题集中爆发**：Cowork 功能缺失 HCS 服务、MSIX 虚拟化导致写入静默失败、SSE 流挂起等多个高优先级 Bug 同步更新，反映 Windows 原生体验仍有短板。

---

## 2. 版本发布

### v2.1.209 (2026-07-14)
- **修复**：`claude agents` 后台会话中 `/model` 等对话框被过度宽泛的守卫逻辑错误阻塞的问题（回滚该守卫）。
- **链接**：[Release v2.1.209](https://github.com/anthropics/claude-code/releases/tag/v2.1.209)

### v2.1.208 (2026-07-14)
- **新增屏幕阅读器模式**：支持 `--ax-screen-reader`、环境变量 `CLAUDE_AX_SCREEN_READER=1` 或设置 `"axScreenReader": true`，输出纯文本以兼容辅助技术。
- **新增 `vimInsertModeRemaps` 设置**：允许将双键序列（如 `jj`）映射为 Escape，改善 Vim 用户编辑体验。
- **链接**：[Release v2.1.208](https://github.com/anthropics/claude-code/releases/tag/v2.1.208)

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心内容 | 热度 | 关注理由 |
|---|-------|----------|------|----------|
| 1 | [#6235](https://github.com/anthropics/claude-code/issues/6235) **支持 AGENTS.md** | 请求采用通用的 `AGENTS.md` 替代/补充 `CLAUDE.md`，实现跨 Codex、Cursor、Amp 等工具的代码库上下文共享 | 4369 👍 / 342 评论 | **社区呼声最高**，关乎生态互操作性，已成事实标准化提案 |
| 2 | [#74649](https://github.com/anthropics/claude-code/issues/74649) **Windows Cowork 缺失 HCS 服务** | Windows 11 Pro 上 Cowork 无法启动，报错 `vfpext` 服务缺失 | 2 👍 / 70 评论 | 阻断 Windows 用户核心协作功能，评论区持续排查中 |
| 3 | [#33949](https://github.com/anthropics/claude-code/issues/33949) **SSE 流无限挂起 + ESC 无法完全取消** | 长期顽疾：流式响应无超时机制，队列自动重启导致需频繁手动干预 | 24 👍 / 38 评论 | 影响所有平台稳定性，社区自行给出根因分析与修复建议 |
| 4 | [#47327](https://github.com/anthropics/claude-code/issues/47327) **Windows Cowork 标签页禁用** | `yukonSilver` 被标记为不支持，功能自 2026-03 起持续不可用 | 3 👍 / 20 评论 | 同类 Windows Cowork 问题，反映原生集成滞后 |
| 5 | [#58192](https://github.com/anthropics/claude-code/issues/58192) **/goal Stop hook 提示“Prompt 过长”** | 目标文本较大时 Stop hook 因长度限制失败 | 14 👍 / 16 评论 | 影响自动化工作流可靠性，需扩大或分片处理 |
| 6 | [#52924](https://github.com/anthropics/claude-code/issues/52924) **TUI 长会话渲染重复文本** | 300k+ token 会话后滚动回缓冲区出现重复渲染 | 15 👍 / 13 评论 | 长会话可用性痛点，跨 Windows/Linux 复现 |
| 7 | [#77380](https://github.com/anthropics/claude-code/issues/77380) **Windows MSIX/Cowork 写入虚拟化静默失败** | MSIX 打包应用内运行 Claude Code 时，文件写入被重定向至虚拟路径且不持久化；原地更新因文件句柄死锁 | 0 👍 / 4 评论 | **今日新增关键 Bug**，揭示打包分发层的深层架构风险 |
| 8 | [#74562](https://github.com/anthropics/claude-code/issues/74562) **sonnet[1m]/fable[1m] 别名未生效 1M 上下文** | 仅 `opus[1m]` 正确应用 1M 窗口，文档与实现不符 | 2 👍 / 4 评论 | 模型配置文档失真，影响长上下文用户 |
| 9 | [#63190](https://github.com/anthropics/claude-code/issues/63190) **延迟消息：排队输入至轮次结束** | 需在不打断当前任务的前提下追加指令，避免中断改变轨迹 | 5 👍 / 4 评论 | 交互范式创新需求，适合复杂多步任务 |
| 10 | [#77402](https://github.com/anthropics/claude-code/issues/77402) **Opus 4.8 系统性幻觉/上下文丢失/工具输出丢失** | 同一会话中持续出现模型侧异常行为 | 0 👍 / 1 评论 | **今日新增模型级严重问题**，需观察是否为孤立案例 |

---

## 4. 重要 PR 进展（全部 3 条）

| # | PR | 类型 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#77292](https://github.com/anthropics/claude-code/pull/77292) | 文档修复 | 修正插件 README 中的 marketplace 名称：统一为 `claude-code-plugins`，修复安装命令不生效 | #70064 |
| 2 | [#77289](https://github.com/anthropics/claude-code/pull/77289) | Bug 修复 | 修复 Windows 下 `hookify` 插件 `UserPromptSubmit` 规则不触发：解决 UTF-8 编码与 payload 字段映射问题 | #77270 |
| 3 | [#77260](https://github.com/anthropics/claude-code/pull/77260) | Bug 修复 | `hookify`：使文件规则检查 `Write` 传入的新内容；修正 prompt 规则字段映射；新增 Write/Edit/prompt 规则回归测试 | — |

> **趋势**：本日 PR 均为**插件/钩子生态的修复**，反映社区正在完善扩展机制的跨平台兼容性与开发者体验。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

1. **跨工具标准化协作** ⭐⭐⭐⭐⭐  
   - 核心诉求：采纳 `AGENTS.md`（#6235），打破 `CLAUDE.md` 单工具孤岛，支持多 AI 编码助手共享代码库上下文。

2. **Windows 原生体验补齐** ⭐⭐⭐⭐  
   - Cowork/HCS 服务缺失（#74649、#47327）、MSIX 虚拟化导致写入失败（#77380）、SSE 挂起（#33949）、TUI 渲染异常（#52924）集中爆发。

3. **长会话/大上下文稳定性** ⭐⭐⭐⭐  
   - 内存泄漏（#76185、#76588）、上下文丢失（#77402）、模型别名配置失效（#74562）、渲染重复（#52924）。

4. **交互范式增强** ⭐⭐⭐  
   - 延迟消息/排队输入（#63190）、Stop hook 长度限制（#58192）、Vim 按键映射（已在 v2.1.208 交付）。

5. **无障碍与国际化** ⭐⭐⭐  
   - 屏幕阅读器模式（v2.1.208 交付）、日文渲染中文字形（#76436，已关闭）。

6. **插件/钩子生态成熟度** ⭐⭐  
   - Marketplace 命名规范（#77292）、hookify 规则引擎修复（#77289、#77260）、代码审查插件逻辑缺陷（#76255）。

---

## 6. 开发者关注点与痛点总结

| 维度 | 高频反馈 | 代表性 Issue |
|------|----------|--------------|
| **互操作性** | “被迫维护多份指令文件”“无法与同事用 Cursor 的同事共享上下文” | #6235 (4.3k+ 👍) |
| **Windows 可用性** | “Cowork 完全不可用”“MSIX 打包破坏文件持久化”“SSE 频繁挂起需手动 ESC” | #74649, #77380, #33949 |
| **长任务可靠性** | “后台任务内存泄漏至 15GB 触发 OOM”“模型突然幻觉/丢上下文/丢工具输出” | #76185, #77402 |
| **模型配置透明度** | “文档写支持 1M 别名实际不生效”“不知何时被降级为 Opus” | #74562, #77398 |
| **扩展机制易用性** | “插件安装命令文档错误”“hook 规则在 Windows 静默失效无报错” | #77292, #77289 |
| **交互灵活性** | “想在不打断当前任务时追加指令”“Stop hook 因长度限制失效” | #63190, #58192 |

---

## 📌 明日关注建议

1. **AGENTS.md 提案（#6235）**：若官方回应或给出路线图，将直接影响生态定位。
2. **Windows MSIX 虚拟化问题（#77380）**：涉及分发层架构，可能需重构打包策略。
3. **Opus 4.8 异常（#77402）**：若更多用户复现，可能触发模型侧热修复或回滚。
4. **v2.1.210 预期**：关注是否包含 SSE 超时修复、Cowork Windows 修复、hookify 修复合并。

---

*数据来源：github.com/anthropics/claude-code | 报告生成时间：2026-07-14 23:59 UTC*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-14

---

## 1. 今日速览

- **核心版本**：发布 `rust-v0.144.4` 补丁版（无用户可见变更）及 `0.145.0-alpha.7~10` 四个 Alpha 版本，预示下一大版本迭代加速。
- **桌面端热点故障**：v26.707.71524 导致 **Browser/Chrome 插件全平台失效**（"Cannot redefine property: process"），已有 5 个重复 Issue 并在 macOS/Windows 同步爆发，阻塞 Web 技能与浏览器集成。
- **模型行为异常持续发酵**：GPT-5.5 reasoning token 聚簇在 516/1034/1552（Issue #30364）引发 184 条讨论、287 👍，怀疑导致复杂任务性能下降；GPT-5.6-sol 上下文被截断至 258K（Issue #32806）虽已关闭但引发对标称 1.05M 上下文的信任危机。

---

## 2. 版本发布

| 版本 | 类型 | 关键变更 | 链接 |
|------|------|----------|------|
| `rust-v0.144.4` | Patch | 仅维护性提交，无用户可见变更 | [Changelog](https://github.com/openai/codex/compare/rust-v0.144.3...rust-v0.144.4) |
| `rust-v0.145.0-alpha.7~10` | Alpha | 连续 4 个 Alpha 发布，具体变更未在 Release Note 列出，预计包含审批系统重构、SQLite 历史投影、环境状态暴露等内部重构 | [#32989](#) [#32923](#) [#32920](#) |

> ⚠️ **建议**：生产环境继续锁定 `0.144.x`；Alpha 版仅用于内部验证或早期尝鲜。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论/👍 | 核心痛点 | 为什么关注 |
|---|------|------|---------|----------|------------|
| [#30364](https://github.com/openai/codex/issues/30364) | GPT-5.5 reasoning-token clustering at 516/1034/1552 | 🟢 Open | 184 / 287 | 模型推理 token 卡在固定阈值，疑似硬编码截断导致复杂任务推理不全 | **最高热度**，涉及核心模型行为，影响所有高难度编码任务 |
| [#32925](https://github.com/openai/codex/issues/32925) | Desktop 26.707.71524: Browser/Chrome plugins fail `Cannot redefine property: process` | 🟢 Open | 41 / 28 | **今日新发布版本全平台击穿**浏览器插件初始化 | 阻断 Web 技能、自动化测试、文档检索等核心工作流 |
| [#32938](https://github.com/openai/codex/issues/32938) | 同 #32925 (Pro 用户确认) | 🟢 Open | 6 / 5 | 验证该问题跨订阅层级 | 证明非账号配置问题，属运行时缺陷 |
| [#32954](https://github.com/openai/codex/issues/32954) | [macOS] Chrome/Browser plugins fail during bootstrap | 🟢 Open | 6 / 0 | macOS 26.5.2 + Chrome 150 复现堆栈 | 提供完整环境信息，便于定位 `browser-client.mjs:33` |
| [#32935](https://github.com/openai/codex/issues/32935) | Windows: Built-in Browser plugin fails same error | 🟢 Open | 5 / 2 | Windows 同样受影响 | 跨平台一致性确认，排除平台特有原因 |
| [#31606](https://github.com/openai/codex/issues/31606) | Reset failed, did not apply and 1 reset is wasted | 🟢 Open | 38 / 50 | 重置额度扣减但未生效，Pro 用户实测 | 计费/配额系统可靠性，直接影响付费用户信任 |
| [#17827](https://github.com/openai/codex/issues/17827) | Customizable status line (TUI) | 🟢 Open | 26 / 98 | 缺乏类似 Claude Code 的可配置状态栏（token、模型、git branch 等） | **高呼声增强需求**，98 👍 显示社区强烈期待 |
| [#1980](https://github.com/openai/codex/issues/1980) | Adhere to XDG Base Directory Spec on Linux | 🟢 Open | 21 / 110 | 数据仍写 `~/.codex` 而非 `$XDG_DATA_HOME` | **Linux 规范合规**，110 👍 为全仓第 2 高，长期积压 |
| [#32806](https://github.com/openai/codex/issues/32806) | GPT-5.6 Sol context cut: 353K → 258K despite 1.05M advertised | 🔴 Closed | 21 / 18 | 宣称 1.05M 上下文实际仅 258K | 已关闭但未给修复说明，引发对模型规格透明度的质疑 |
| [#32040](https://github.com/openai/codex/issues/32040) | Windows Desktop: Browser hang/close after PiP failure | 🟢 Open | 21 / 6 | PiP (Picture-in-Picture) 失败导致整个应用挂起/退出 | 浏览器集成稳定性连锁问题，Windows 专属 |

---

## 4. 重要 PR 进展（过去 24h 合并/关闭）

> 所有 PR 均为 **CLOSED**（已合并或废弃），显示内部正在进行大规模架构重构。

| # | 标题 | 类型 | 核心变更 | 影响面 |
|---|------|------|----------|--------|
| [#32989](https://github.com/openai/codex/pull/32989) | Always confirm before enabling full access | 安全/体验 | 全量访问模式需二次确认，防误操作数据泄露 | 桌面端/CLI 权限模型 |
| [#32985](https://github.com/openai/codex/pull/32985) | Expose exact per-response usage in raw app-server events | 可观测性 | 新增 `rawResponse/completed` 事件，暴露单次上游 Responses API 精确 usage | 成本核算、配额管理、第三方集成 |
| [#31445~#31449](https://github.com/openai/codex/pull/31445) | **审批系统全面重构**（5 个堆叠 PR） | 架构重构 | 引入 `ApprovalCoordinator` 统一路由 network/MCP/execve/permission/delegated 审批 | 核心安全控制面，统一审计、预热、Guardian 行为 |
| [#32952](https://github.com/openai/codex/pull/32952) | Scope runtime workspace roots to execution environments | 多环境支持 | 每个 app-server 环境可独立声明 `runtimeWorkspaceRoots` | 多沙箱/远程会话隔离 |
| [#32923](https://github.com/openai/codex/pull/32923) / [#32928](https://github.com/openai/codex/pull/32928) | Materialize + Resume thread history in SQLite | 数据层 | JSONL 为真实源，SQLite 为可重建视图；支持断点续投影 | 历史加载性能、一致性保障 |
| [#32920](https://github.com/openai/codex/pull/32920) / [#32899](https://github.com/openai/codex/pull/32899) | Expose environment status via app-server / exec-server | 运维 API | 新增 `environment/status` RPC，返回 ready/pending/disconnected | 编排层健康检查、自动恢复 |
| [#32945](https://github.com/openai/codex/pull/32945) | Restrict Guardian reviewer tools | 安全收敛 | Guardian 仅保留 `exec_command`/`write_stdin`/`view_image` | 减少审批侧通道攻击面 |
| [#32905](https://github.com/openai/codex/pull/32905) | Timestamp app-server notifications at emission | 遥测质量 | 通知信封加 `emittedAtMs`，时序分析更准 | 调试、SLA 监控 |
| [#32898](https://github.com/openai/codex/pull/32898) | Expose structured standalone web search results | 功能增强 | 结构化 DTO 与模型文本解耦，便于客户端渲染 | Web 搜索技能下游消费 |

---

## 5. 功能需求趋势（从全部 50 个 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声 | 备注 |
|----------|------------|----------|------|
| **浏览器/技能生态稳定性** | #32925 #32938 #32954 #32935 #32040 | 🔥 极高 | 今日集中爆发，阻塞 Web 自动化核心场景 |
| **模型推理透明度与上下文兑现** | #30364 #32806 #31969 | 🔥 高 | Token 聚簇、上下文截断、参数不支持（reasoning.summary） |
| **Linux/跨平台规范合规** | #1980 #24268 #29958 | 🔥 高 | XDG、WSL 路径解析、系统代理兼容 |
| **TUI/CLI 可定制化与可观测性** | #17827 #31664 #32753 | 🔥 中高 | 状态栏、推理摘要占位符、多智能体指令可见性 |
| **配额/重置/计费可靠性** | #31606 #30726 #30641 | 🔥 中高 | 重置失效、银行额度未到账、Plus 无重置按钮 |
| **Windows 原生体验修复** | #32149 #21863 #18984 #20874 #18723 | 🔥 中 | 安装 UAC、VS Code 面板空白、pwsh 闪烁、WS 断连不可恢复 |
| **MCP/工具调用健壮性** | #29002 #32997 #32897 | 中 | CustomResult 解码、子进程泄漏、网络阻塞路由 |
| **远程/协作会话持久化** | #22438 #32903 #32900 | 中 | SSH 会话恢复、session_id 传递、协作模式上下文派生 |

---

## 6. 开发者关注点总结

1. **“发布即事故”信任受损**：v26.707.71524 同一天收到 5 个重复 Browser 插件崩溃 Issue，开发者质疑发布前的回归测试覆盖率。
2. **模型行为“黑盒”焦虑**：GPT-

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-14

---

## 1. 今日速览
今日发布 **v0.52.0-nightly** 版本，重点修复了 A2A 服务器任务取消不生效的严重问题，并优化了共享项目配额耗尽时的错误提示。社区核心关注点集中在 **Agent 稳定性**（死循环、挂起、子任务状态上报错误）、**Auto Memory 系统健壮性** 以及 **Shell 工具链的异步化与资源泄漏修复**。多个高优先级 PR 正在着手解决核心引擎的无限循环防护、同步 I/O 阻塞 UI 及临时文件泄漏等架构级问题。

---

## 2. 版本发布
### **v0.52.0-nightly.20260714.gfa975395b**
> [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260714.gfa975395b)

| 类型 | 变更内容 | 关联 PR |
| :--- | :--- | :--- |
| **Fix (Core)** | **优化配额错误提示**：当用户触及共享 Google Cloud 项目限额 (HTTP 429) 且未配置专属 GCP 项目时，终端与重试错误中将包含可操作的配置指引。 | [#28391](https://github.com/google-gemini/gemini-cli/pull/28391) |
| **Fix (A2A Server)** | **修复任务取消失效**：解决取消任务时底层执行流未终止导致的“幽灵执行”问题，同时修复了代码审查中发现的竞态条件、内存泄漏及未处理异常。 | [#2831](https://github.com/google-gemini/gemini-cli/pull/2831) / [#28316](https://github.com/google-gemini/gemini-cli/pull/28316) |

---

## 3. 社区热点 Issues (Top 10)
*按评论数、优先级及社区互动筛选，反映当前最痛点与讨论焦点。*

| # | Issue 标题 | 优先级/标签 | 核心痛点/价值 | 社区热度 (👍/评论) |
| :--- | :--- | :--- | :--- | :--- |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | Subagent 在 MAX_TURNS 中断却上报 GOAL Success | **P1, Bug** | **严重可靠性缺陷**：子代理因超轮次中断却被标记为成功完成，导致上层编排逻辑误判，掩盖了任务失败事实。 | 👍 2 / 💬 10 |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** | Generalist Agent 频繁挂起/卡死 | **P1, Bug** | **核心易用性阻断**：通用代理一介入即卡死（甚至简单建目录），需显式禁用子代理才能规避，严重影响默认体验。 | 👍 8 / 💬 7 |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | Shell 命令执行完毕却卡在 "Waiting input" | **P1, Bug** | **交互死锁**：简单 CLI 命令执行后前端仍显示等待输入，需手动干预恢复，高频发生。 | 👍 3 / 💬 4 |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** | 模型极少主动调用 Skills / Sub-agents | **P2, Bug** | **能力利用率低**：除非显式指令，模型几乎不自主调用自定义技能/子代理，导致扩展机制形同虚设。 | 👍 0 / 💬 6 |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** | Auto Memory 无限重试低信噪会话 | **P2, Bug** | **资源浪费/噪音**：提取代理跳过低质量会话不标记为“已处理”，导致后台任务反复拉取同一无效会话。 | 👍 0 / 💬 5 |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** | 组件级评测体系建设 | **P1, Eval Infra** | **工程化迫切需求**：已积累 76 个行为评测用例，亟需建立稳健的组件级评测流水线保障模型升级质量。 | 👍 0 / 💬 7 |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | 评估 AST 感知文件读取/搜索/映射的价值 | **P2, Epic** | **架构探索**：探索基于 AST 的精准代码导航是否能减少 Token 消耗、降低误读轮次、提升大仓库理解力。 | 👍 1 / 💬 7 |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** | Browser Subagent 在 Wayland 下失败 | **P1, Bug, Agent/Browser** | **平台兼容性**：Wayland 环境下浏览器代理启动即报错，阻碍 Linux 桌面用户使用网页交互能力。 | 👍 1 / 💬 4 |
| **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)** | v0.33.0 后 Subagents 未经许可自动运行 | **P2, Bug** | **权限回归**：配置明确禁用 Agent 模式，但子代理仍自动触发，违背用户安全预期。 | 👍 0 / 💬 2 |
| **[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)** | 退出外部编辑器导致终端缓冲区腐败 | **P2, Bug** | **终端渲染稳定性**：`terminalBuffer` 模式下退出 vim/nano 等编辑器后画面错乱，需强制全量刷新修复。 | 👍 0 / 💬 1 |

---

## 4. 重要 PR 进展 (Top 10)
*聚焦已合入夜ly版本、解决核心架构问题或引入关键防护机制的 PR。*

| # | PR 标题 | 状态 | 核心价值/修复内容 | 关联 Issue |
| :--- | :--- | :--- | :--- | :--- |
| **[#28389](https://github.com/google-gemini/gemini-cli/pull/28389)** | **fix(core): 引入实时截止期防无限循环状态转移** | **Open (P1)** | **核心稳定性防线**：在事件驱动 Agent 状态机中引入硬性时间预算，彻底防止因模型卡顿或逻辑缺陷导致的无限状态跳转。 | - |
| **[#28397](https://github.com/google-gemini/gemini-cli/pull/28397)** | **fix(core): 移除 Shell 工具关键路径上的同步 I/O** | **Open (P2)** | **性能/体验重大提升**：将 `shell.ts` 中阻塞的 `fs.mkdtempSync` 等替换为异步版本，解决 React Ink 终端 UI 卡顿、掉帧问题。 | - |
| **[#28394](https://github.com/google-gemini/gemini-cli/pull/28394)** | **fix(core): 后台进程退出时清理临时文件** | **Open** | **资源泄漏修复**：修复 `is_background: true` 的 Shell 命令导致临时目录永久残留在宿主机 `/tmp` 的问题。 | - |
| **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319)** | **refactor(a2a-server): 环境加载前强制路径信任检查 & 隔离任务环境** | **Open** | **安全架构重构**：调整初始化生命周期，确保工作区信任校验先于环境变量加载；引入 `AsyncLocalStorage` 实现任务级环境隔离。 | - |
| **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164)** | **fix(core): 限制单用户请求递归推理轮次 (默认 15 轮)** | **Open (Help Wanted)** | **成本/资源控制**：在核心推理引擎层面硬性限制递归深度，防止无限循环耗尽本地 CPU 与 API 配额，可通过 `maxSessionTurns` 自定义。 | - |
| **[#28316](https://github.com/google-gemini/gemini-cli/pull/28316)** | **fix(a2a-server): 确保任务取消中止执行循环** | **Closed (已合入)** | **关键 Bug 修复**：解决取消信号未传播至执行流导致的“幽灵执行”，同步修复竞态、内存泄漏、未处理拒绝等安全隐患。 | #2831 (Release) |
| **[#28391](https://github.com/google-gemini/gemini-cli/pull/28391)** | **fix(core): 丰富共享项目配额错误的配置指引** | **Closed (已合入)** | **DX 改进**：针对无专属 GCP 项目用户触发 429 错误时，直接在终端给出 `gcloud auth application-default login` 等可操作修复建议。 | #2831 (Release) |
| **[#28398](https://github.com/google-gemini/gemini-cli/pull/28398)** | **fix(core): 简化 Plan Mode 写入策略支持相对路径** | **Closed** | **稳健性修复**：放宽 `plan.toml` 路径匹配规则，修复夜ly构建中 LLM 生成相对路径/特殊字符导致的测试失败。 | - |
| **[#28385](https://github.com/google-gemini/gemini-cli/pull/28385)** | **feat

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-14

---

## 1. 今日速览
- **无新版本发布**，当前稳定版仍为 `v1.0.69`（据 Issue #4059 推断）。
- 社区在过去 24 小时内活跃更新 **37 个 Issue**，核心矛盾集中在 **权限系统失效**、**语音模型全系静默失败**、**检查点恢复导致数据丢失** 以及 **Linux/Windows 跨平台键盘/Shell 兼容性** 四大高危领域。
- 权限模块（`permissions-config.json`、Hooks、Autopilot）单日新增/更新 9 个 Issue，显示当前架构在并发会话、子代理、企业级策略下存在系统性缺陷。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 关注度/严重性 | 为什么重要 |
|---|-------|----------|---------------|------------|
| 1 | [#2082](https://github.com/github/copilot-cli/issues/2082) **Linux 下 `Ctrl+Shift+C` 复制失效** | v1.0.4+ 版本破坏了终端标准复制快捷键，强制用户改用 `Ctrl+C`/右键菜单 | 👍 11 · 评论 23 | **高频交互回归**，影响所有 Linux 用户肌肉记忆，已持续 4 月未修复 |
| 2 | [#4024](https://github.com/github/copilot-cli/issues/4024) **语音模式全系 ASR 模型静默失败** | `/voice` 录音正常但三款 Nemotron 模型转录全为空，疑为 `MultiModalProcessor` 路由 Bug | 评论 8 · 新增近期 | **核心新功能完全不可用**，涉及 Foundry Local Core 底层集成，阻断语音交互入口 |
| 3 | [#1675](https://github.com/github/copilot-cli/issues/1675) **检查点恢复执行 `git clean -fd` 永久删除未跟踪文件** | `SnapshotManager.rollbackToSnapshot()` 误用强制清理命令，导致未提交资产丢失 | 评论 3 · 更新今日 | **数据破坏性 Bug**，触发条件为 Esc 中断+选择恢复，风险极高且无预警 |
| 4 | [#2881](https://github.com/github/copilot-cli/issues/2881) **Autopilot 陷入无限循环耗尽 Premium 额度** | 自主模式持续打印 `Continuing autonomously` 且无进展，每轮消耗 1 次 Premium 请求 | 评论 3 | **计费安全隐患**，用户无法自主停止，需手动 Kill 进程，可能造成巨额意外账单 |
| 5 | [#3874](https://github.com/github/copilot-cli/issues/3874) **`preToolUse` Hook 拒绝策略不生效** | 配置 `permissionDecision: "deny"` 但 Agent 仍执行工具调用 | 评论 3 · 更新今日 | **企业级安全基线失效**，Hooks 作为策略执行点被绕过，合规风险高 |
| 6 | [#3590](https://github.com/github/copilot-cli/issues/3590) **Hook 返回 `ask` 被 TUI 毫秒级自动通过** | v1.0.53+ 权限弹窗闪现即消失，用户无交互机会 | 👍 1 · 评论 1 · 更新今日 | **人机回环断裂**，Hook 设计意图被新版 TUI 逻辑破坏 |
| 7 | [#3084](https://github.com/github/copilot-cli/issues/3084) **`postToolUse` Hook 死锁占满 CPU 10 天** | 写权限请求后进程进入 99% CPU 忙等，忽略 SIGTERM | 评论 1 | **进程模型缺陷**，Hook 回调与权限服务存在竞态/死锁，导致僵尸进程 |
| 8 | [#3282](https://github.com/github/copilot-cli/issues/3282) **支持多 BYOK 模型热切换** | 当前仅支持单环境变量模型，TUI 内无法切换，需重启会话 | 👍 14 · 评论 5 | **高频功能诉求**，多模型工作流（编码/推理/长上下文）切换痛点突出 |
| 9 | [#4096](https://github.com/github/copilot-cli/issues/4096) **第三方 MCP OAuth Token 未桥接至 CLI 会话** | App 显示 "Connected" 但工具列表为空，Token 未传递给子进程 | 👍 2 · 评论 2 | **插件生态断层**，MCP 认证态未在 App↔CLI 间传播，企业集成受阻 |
| 10 | [#2776](https://github.com/github/copilot-cli/issues/2776) **`Shift+Enter` 误触发提交而非换行** | 编辑多行 Prompt 时易误提交，违背通用编辑器约定 | 👍 2 · 评论 6 | **交互一致性缺陷**，影响长文本输入体验，存续 3 月未改 |

---

## 4. 重要 PR 进展
> 过去 24 小时 **无 Pull Request 更新**。建议关注后续针对上述高危 Issue（如 #1675、#4024、#3874）的修复 PR。

---

## 5. 功能需求趋势（从全量 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声特征 |
|----------|------------|--------------|
| **权限系统企业化/细粒度化** | #3995 (持久拒绝规则)、#3477 (mTLS/动态 Header)、#3699 (Skills 非交互模式)、#3563 (并发会话权限隔离) | 从“能用”转向“可控、可审计、多租户安全”，需补齐 Claude Code 级别的策略能力 |
| **多模型/多供应商原生支持** | #3282 (多 BYOK)、#1941 (模型不支持报错)、#4059 (定价可见性) | 用户希望在单会话内无缝切换 OpenAI/Anthropic/本地模型，并看清成本 |
| **语音与多模态交互** | #4024 (ASR 全挂)、#4108 (macOS LSP 图标污染) | 语音入口成战略功能，但基础设施（Foundry Local、LSP 进程管理）尚不稳定 |
| **检查点/快照可靠性** | #1675 (数据丢失)、#1896 (陈旧 plan.md 污染上下文) | 长任务依赖快照回滚，但实现粗糙且有副作用，信任度低 |
| **跨平台终端体验打磨** | #2082 (Linux Copy)、#2776 (Shift+Enter)、#3098 (PS `$home` 变量)、#4116 (复制边框污染) | 细节体验差距大，影响日常开发流畅度 |

---

## 6. 开发者关注点·痛点总结

1. **“信任危机”向核心功能蔓延**  
   - 权限系统（Hooks、Autopilot、子代理）高频失效 → **不敢在生产/敏感仓库开启自主模式**  
   - 检查点恢复删文件 → **不敢使用快照/回滚功能**  
   - MCP 认证断层 → **不敢依赖第三方工具链**

2. **Linux/Windows 体验割裂严重**  
   - Linux 复制键位被占、Windows PowerShell 变量陷阱、macOS Dock 污染 → **跨平台团队协作摩擦大**

3. **可观测性与成本透明度缺失**  
   - `#4107` JSON 输出缺 Token/成本、`#4059` 定价页无法导航 → **FinOps 无法落地，预算不可控**

4. **Hooks/技能 生态工具链不成熟**  
   - Hook 死锁、自动通过、拒绝不生效、Skills 非交互模式失效 → **扩展点不可靠，二开成本高**

5. **文档与错误信息滞后**  
   - `#1941` “model not supported” 无可行建议、`#3267` 卡在 Cancelling 无日志 → **排查依赖社区互助，官方诊断能力弱**

---

> **下一步建议关注**：  
> - `v1.0.70` 是否包含 #1675/#4024/#3874 等 **P0 级修复**  
> - 权限系统重构（Persistent Deny、Hook 执行器隔离、并发会话隔离）的设计文档或 RFC  
> - 多 BYOK 架构方案（环境变量命名空间？配置文件？TUI Model Picker 集成？）

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-14

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览

*   **核心模型适配与推理优化**：团队连续合并 3 个关键 PR（#2499, #2498, #2494），重点解决 Kimi 模型（kosong provider）的 `reasoning_effort` 参数处理、空 `reasoning_content` 导致的 400 报错，以及上下文窗口动态预算分配问题，显著提升模型调用稳定性。
*   **ACP 协议生态补齐**：新增 Issue #2495 揭示 ACP 模式下结构化交互（`AskUserQuestion`）完全失效；PR #2490 修复 ACP 服务端未加载全局 MCP 配置的长期缺陷，推动与 Zed、JetBrains 等 IDE 集成的功能对齐。
*   **用户体验细节打磨**：多个 PR 聚焦首次安装报错引导（#2488）、`/init` 命令副作用修复（#2489）、字符串截断逻辑修正（#2492）及后台任务耗时统计（#2493），整体工程质量稳步提升。

---

## 2. 版本发布

**过去 24 小时无新版本发布**。当前最新版本为 `v1.36.0`（Issue #2496 环境信息）。

---

## 3. 社区热点 Issues

| Issue | 状态 | 核心内容 | 关注理由 |
| :--- | :--- | :--- | :--- |
| **[#2495 ACP: AskUserQuestion/QuestionRequest resolves empty](https://github.com/MoonshotAI/kimi-cli/issues/2495)** | 🟢 **Open** | ACP Server 模式下，`AskUserQuestion` 请求无论用户是否响应，均返回空答案字典，导致结构化交互完全不可用。 | **阻断性缺陷**：直接影响通过 ACP 协议接入 Kimi CLI 的 IDE（Zed, JetBrains）及编排器的核心交互能力，属 P0 级 Bug。 |
| **[#2496 [bug] resuming forked session results in corrupted output](https://github.com/MoonshotAI/kimi-cli/issues/2496)** | 🔴 **Closed** | Windows 10 上使用 `kimi -r` 恢复分叉会话导致输出损坏。 | **平台兼容性**：虽已关闭，但反映会话状态序列化/反序列化在跨平台（Windows）场景下的潜在脆弱性，值得回归测试关注。 |

> *注：过去 24 小时仅 2 条 Issue 更新，整体社区提问量较低，核心开发精力集中在 PR 审查与合并。*

---

## 4. 重要 PR 进展

### 🟢 已合并（核心修复与优化）

| PR | 类型 | 核心变更 | 技术影响 |
| :--- | :--- | :--- | :--- |
| **[#2499 fix(kosong): stop sending Kimi reasoning effort implicitly](https://github.com/MoonshotAI/kimi-cli/pull/2499)** | 🐛 **Bug Fix / Refactor** | 移除对 legacy `reasoning_effort` 参数的隐式序列化与 clamp 逻辑，改为完全由调用方通过 `thinking.type` 显式控制。 | **架构解耦**：消除旧参数对新思维链 API 的干扰，修复潜在的参数映射冲突，提升 Provider 扩展性。 |
| **[#2498 fix(kosong): preserve empty-string reasoning_content as ThinkPart](https://github.com/MoonshotAI/kimi-cli/pull/2498)** | 🐛 **Bug Fix** | 修复模型返回空字符串 `reasoning_content` 时未包装为 `ThinkPart` 导致的 `400 Bad Request`（`preserved thinking requires reasoning_content`）。 | **生产稳定性**：解决特定模型版本（`coding-model-okapi-0711-vibe`）在 `thinking.keep=all` 模式下的请求失败问题。 |
| **[#2494 fix(kimi): use remaining context for completion budget](https://github.com/MoonshotAI/kimi-cli/pull/2494)** | ⚡ **Optimization** | 将 Kimi 请求的 completion budget 从固定 32k 改为动态计算“剩余上下文窗口”，仅作用于 Kimi 及 ChaosChatProvider 包装的 Kimi 请求。 | **Token 效率最大化**：允许长上下文场景下生成更长回复，避免人为截断，显著提升长任务完成率。 |

### 🟡 进行中（高价值功能与修复）

| PR | 类型 | 核心变更 | 进展/风险 |
| :--- | :--- | :--- | :--- |
| **[#2490 fix(acp): load global MCP config in kimi acp server](https://github.com/MoonshotAI/kimi-cli/pull/2490)** | 🐛 **Bug Fix / Feature Parity** | `kimi acp` 现加载用户全局 MCP 配置，修复 ACP 客户端仅能看到内置工具的功能缺口（Fixes #2464）。 | **生态关键**：解除 ACP 模式与交互模式的工具能力差异，利于 IDE 插件生态建设。 |
| **[#2487 feat(agent): support loading CLAUDE.md alongside AGENTS.md](https://github.com/MoonshotAI/kimi-cli/pull/2487)** | ✨ **Feature** | `load_agents_md()` 新增识别 `CLAUDE.md` 及 `.claude/CLAUDE.md`，兼容 Claude Code 项目配置迁移。 | **降低迁移成本**：精准击中“Claude Code 用户迁移”核心场景，社区呼声高（关联 #2401）。 |
| **[#2488 fix(soul): make LLMNotSet error message actionable](https://github.com/MoonshotAI/kimi-cli/pull/2488)** | 🐛 **DX Improvement** | 首次安装未登录时，报错从 `LLM not set` 优化为包含 `kimi login` 引导的可执行提示（Closes #2456）。 | **首次体验优化**：直接降低新用户流失率，属高性价比改进。 |
| **[#2489 fix(soul): restore plan-mode tool bindings after /init](https://github.com/MoonshotAI/kimi-cli/pull/2489)** | 🐛 **Bug Fix** | 修复 `/init` 创建临时 Soul 共享 Agent 实例导致 `ExitPlanMode` 等工具绑定被错误覆盖的竞态问题（Fixes #2478）。 | **核心流程稳定性**：Plan Mode 为高频交互模式，此类共享实例副作用极难排查，修复价值高。 |
| **[#2493 Fix: record started_at for background agent tasks](https://github.com/MoonshotAI/kimi-cli/pull/2493)** | 🐛 **Bug Fix** | 为后台 Agent 任务补齐 `runtime.started_at` 记录，使其耗时统计与 Bash 任务对齐。 | **可观测性补全**：修复后台任务监控数据缺失，辅助性能分析。 |
| **[#2492 fix: shorten_middle output exceeds target width](https://github.com/MoonshotAI/kimi-cli/pull/2492)** | 🐛 **Bug Fix** | 修正字符串中间截断函数未计入省略号长度导致输出超宽的边界条件错误。 | **工具函数健壮性**：基础设施修复，防止 UI 排版异常。 |
| **[#2259 fix: redirect stdio MCP stderr to logs](https://github.com/MoonshotAI/kimi-cli/pull/2259)** | 🔧 **Refactor / DX** | 将 stdio MCP 子进程 stderr 重定向至 `~/.kimi/logs/mcp/`，避免污染交互式终端（长期维护中，近期更新）。 | **工程规范**：解决长期存在的日志泄漏问题，提升调试体验。 |
| **[#2200 fix(shell): adapt timeouts for long commands](https://github.com/MoonshotAI/kimi-cli/pull/2200)** | ⚡ **Optimization** | 针对 `git clone`、包安装、构建等慢命令动态延长 Shell 超时，保留显式超时优先级。 | **鲁棒性增强**：减少长任务误判超时失败，提升自动化成功率。 |

---

## 5. 功能需求趋势

从近期 Issue 与 PR 活动推断，社区核心诉求聚焦三大方向：

1.  **IDE/编辑器深度集成（ACP 协议优先级最高）**
    *   **证据**：Issue #2495（交互阻断）、PR #2490（MCP 缺失）、PR #2487（配置兼容）。
    *   **趋势**：Kimi CLI 正从“独立终端工具”向“IDE 后端引擎”转型，**ACP 协议完备性** 是当前最大短板，也是竞争壁垒所在。

2.  **模型推理能力的原生化与稳定性**
    *   **证据**：PR #2499、#2498、#2494 连续攻克 `thinking` 参数、空内容、预算分配。
    *   **趋势**：随着模型侧推理模式（Thinking/Reasoning）标准化，CLI 层需快速适配 **动态思维链控制** 与 **超长上下文管理**，避免参数映射层成为瓶颈。

3.  **迁移友好与开箱即用体验**
    *   **证据**：PR #2487（兼容 CLAUDE.md）、PR #2488（报错引导）、PR #2489（Plan Mode 稳定性）。
    *   **趋势**：降低 **Claude Code / Cursor 用户迁移摩擦**（配置复用、术语对齐）与 **新用户首秀成功率**（报错可执行性、登录引导）是增长关键。

---

## 6. 开发者关注点与痛点

| 痛点/需求 | 典型表现 | 社区/团队响应 |
| :--- | :--- | :--- |
| **ACP 交互能力不完整** | `AskUserQuestion` 返回空、全局 MCP 不生效、工具集与交互模式不一致。 | **高优先级修复中**：PR #2490 已就绪，Issue #2495 需尽快投入修复资源。 |
| **Windows 平台兼容性** | 会话恢复损坏（#2496）、历史遗留路径/编码问题。 | **被动修复为主**：缺乏 CI/CD 中的 Windows 专项测试覆盖，建议补充。 |
| **会话/状态管理复杂度高** | Fork/Resume 逻辑脆弱、临时 Soul 污染共享 Agent（#2489）、后台任务状态字段缺失（#2493）。 | **架构重构机会**：Agent/Tool 绑定生命周期、Soul 状态隔离机制需系统性梳理，而非单点修补。 |
| **模型参数映射层技术债** | Legacy `reasoning_effort` 与新 `thinking` API 共存导致隐式转换错误（#2499）、空内容处理遗漏（#2498）。 | **正在偿还**：PR #2499 确立“显式优于隐式”原则，建议建立 Provider 契约测试防止回归。 |
| **文档与错误引导滞后** | 新用户不知如何登录（#2488）、配置迁移无指引（#2487）。 | **持续改进中**：错误信息可执行化、兼容性配置自动发现是正确方向。 |

---

## 💡 给维护团队的建议

1.  **设立 “ACP 协议专项 Sprint”**：集中解决 #2495 等阻断性 Issue，配合 E2E 测试覆盖 Zed/JetBrains 真实接入场景，确立 “ACP First” 交付标准。
2.  **引入 Provider 契约测试**：针对 `kosong` 等核心 Provider，建立参数序列化、边界输入（空 thinking、超长 context）的自动化回归套件，避免 #2498/2499 类问题再现。
3.  **完善 Windows CI 矩阵**：至少在 `windows-latest` 跑通 Session Resume、Shell 执行、MCP stdio 等核心流程，将平台兼容性纳入合并门禁。
4.  **梳理 Soul/Agent 生命周期**：针对 #2489 暴露的共享实例副作用，考虑引入 `Soul.clone()` 或工厂模式彻底隔离临时上下文，从根治 Plan Mode 等高频功能的状态泄漏。

---

*报告生成时间：2026-07-14 | 下一更新：2026-07-15*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-14

---

## 1. 今日速览

OpenCode 今日发布两个补丁版本 **v1.17.19 / v1.17.20**，重点修复 OpenAI、xAI、Azure 等多模型供应商的兼容性问题，并新增 GPT-5.6 支持。社区高关注 Issue 集中在 **Web UI 终端按钮消失（#30158）**、**子代理 MCP 工具执行失败（#16491）**、**升级命令降级失效（#34287）** 等回归与核心功能缺陷。PR 端推进 TUI 体验优化（双 Ctrl+C 退出、侧边问答面板 `/ask`）、MCP 数据刷新修复、任务工具超时配置等工程化改进。

---

## 2. 版本发布

### v1.17.20 (2026-07-14)
| 类型 | 内容 |
|------|------|
| **Bugfix** | 移除可能干扰 OpenAI Luna Responses Lite 请求的过时代码 Codex 变通方案 |
| **Improvement** | 更新 Azure AI 对 GPT-5.6 的支持 |

### v1.17.19 (2026-07-14)
| 类型 | 内容 |
|------|------|
| **Bugfix** | 支持 OpenAI Pro 推理模式 |
| **Bugfix** | 默认禁用 xAI Responses 的响应存储 (@geraint0923) |
| **Bugfix** | 新增 Luna Responses Lite 的 OAuth 支持 |
| **Bugfix** | 控制台登出后自动切换至另一可用组织 |
| **Bugfix** | GPT-5.6 通过 OAuth 使用 Codex 上下文限制 |

> 🔗 [Releases 页面](https://github.com/anomalyco/opencode/releases)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 关注理由 |
|---|------|------|---------|----------|
| [#30158](https://github.com/anomalyco/opencode/issues/30158) | **Web UI 终端按钮自 v1.15.12 起神秘消失** | OPEN | 10 / 11 | 回归阻断 Web 端终端入口，影响面广，降级可恢复，急需定位 CSS/构建变更 |
| [#16491](https://github.com/anomalyco/opencode/issues/16491) | **Task 子代理虽显示 MCP 工具但无法执行（权限缺失）** | OPEN | 9 / 4 | 核心编排能力受损，子代理注册表可见却不可用，涉及会话权限传递链路 |
| [#34287](https://github.com/anomalyco/opencode/issues/34287) | **`upgrade` 命令不再支持降级** | OPEN | 5 / 0 | 破坏运维回滚流程，仅升级不降级为破坏性变更，需补回语义版本控制 |
| [#30381](https://github.com/anomalyco/opencode/issues/30381) | **Cloudflare Workers AI 报 `AiError: Bad input` 消息格式不匹配** | OPEN | 6 / 1 | 供应商集成阻塞，schema 校验失败提示 `content` 字段类型不一致 |
| [#18016](https://github.com/anomalyco/opencode/issues/18016) | **无法删除 Zen 账号，持续扣费且客服无响应** | OPEN | 6 / 6 | 合规/信任风险，账号生命周期管理缺失，涉及计费与隐私合规 |
| [#36804](https://github.com/anomalyco/opencode/issues/36804) | **Serve 模式：多工具调用回合静默丢弃一个 bash 分发，会话永久卡死** | OPEN | 3 / 0 | 确定性复现 (10/10)，核心执行引擎并发调度死锁，阻塞生产可用性 |
| [#28052](https://github.com/anomalyco/opencode/issues/28052) | **子代理继承主代理 deny 权限导致自身 allow 被覆盖（v1.14.46 回归）** | OPEN | 3 / 2 | 权限模型评估顺序错误，last-match-wins 机制破坏最小权限原则 |
| [#36808](https://github.com/anomalyco/opencode/issues/36808) | **opencode.ai 解析出 4 个 IPv6 地址，在 IPv6 黑洞网络导致 Bun fetch 卡死** | OPEN | 2 / 0 | 中国用户集中反馈，需客户端侧 Happy Eyeballs / IPv4 回退策略 |
| [#36485](https://github.com/anomalyco/opencode/issues/36485) | **全局配置仅在 `$HOME` 下生效，子目录忽略 MCP/指令等设置** | CLOSED | 5 / 0 | 配置加载路径解析缺陷，已修复并回归测试 |
| [#36670](https://github.com/anomalyco/opencode/issues/36670) | **子代理最终输出丢失：SessionProcessor.cleanup 与“移除共享”竞态** | OPEN | 2 / 0 | 关闭阶段竞态导致转录截断，影响审计与上下文连续性 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 类型 | 核心变更 |
|---|------|------|------|----------|
| [#21002](https://github.com/anomalyco/opencode/pull/21002) | **feat(tui): 新增 `/ask` 侧边问答面板** | OPEN | Feature | 非队列即时问答，复用完整对话上下文，关闭 #16992 |
| [#36613](https://github.com/anomalyco/opencode/pull/36613) | **feat(tui): 退出需双击 Ctrl+C** | OPEN | Feature | 防误退出，响应长期呼声 #26371/#10975/#7957 |
| [#26861](https://github.com/anomalyco/opencode/pull/26861) | **fix(tui): 长会话旧消息消失** | OPEN | Bugfix | 懒加载滚动：向上触顶加载 50 条旧消息，虚拟化列表优化，修复 #7380 |
| [#36807](https://github.com/anomalyco/opencode/pull/36807) | **fix(tui): 刷新默认位置的 MCP 数据** | OPEN | Bugfix | 对齐 TUI MCP 对话框使用的位置键，修复 #36580 |
| [#36755](https://github.com/anomalyco/opencode/pull/36755) | **fix(opencode): Task 工具新增可配置超时** | OPEN | Feature | 解决子代理无限挂起无法恢复，关联 #15080/#11865 |
| [#36817](https://github.com/anomalyco/opencode/pull/36817) | **fix(core): 恢复腾讯 Hy3 推理等级选择** | OPEN | Bugfix | 修复 Low/Medium/High 推理努力度下拉缺失，关闭 #36812 |
| [#36811](https://github.com/anomalyco/opencode/pull/36811) | **refactor(core): 提取转录持久化投影** | OPEN | Refactor | 将数据库转录适配器从 V2 投影器剥离至 `session/projector`，关联 #36809/#36473 |
| [#36798](https://github.com/anomalyco/opencode/pull/36798) | **refactor(opencode): CLI 命令懒加载** | OPEN | Refactor | 启动路径按需导入命令模块，显著降低冷启动耗时 |
| [#36796](https://github.com/anomalyco/opencode/pull/36796) | **fix(opencode): 等待 Shell 输出捕获完成** | OPEN | Bugfix | 进程结束后保留并 join 输出捕获 fiber，防作用域清理丢失 stdout/stderr，关闭 #36795 |
| [#36783](https://github.com/anomalyco/opencode/pull/36783) | **fix(codemode): 校验 JSON 响应体** | OPEN | Bugfix | OpenAPI 工具拒绝非 UTF-8 / 空 JSON 响应，关闭 #36800 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **子代理/多代理编排增强** | #16491, #28052, #36670, #36755 | ⭐⭐⭐⭐⭐ | 权限继承、工具执行、超时控制、输出完整性全链路诉求 |
| **Web / Desktop UI 稳定性** | #30158, #36210, #36777 | ⭐⭐⭐⭐ | 终端按钮消失、光标跳变、远程会话自动接受等桌面级体验缺陷 |
| **模型供应商原生支持扩展** | #30381, #36817, v1.17.19/20 发布 | ⭐⭐⭐⭐ | Cloudflare、腾讯 Hy3、OpenAI Pro、Azure GPT-5.6、xAI、Luna 等新模型/厂商适配 |
| **配置与升级体系完善** | #34287, #36485, #36573 | ⭐⭐⭐ | 降级支持、全局配置加载路径、mise 托管升级、环境变量注入 |
| **可观测性与持久化** | #36809, #36670, #36742 | ⭐⭐⭐ | 转录投影抽取、上下文自动保存、会话审计连续性 |
| **内置浏览器 / 网页交互能力** | #27541 | ⭐⭐ | 文档抓取、表单填写、UI 测试等端到端自动化需求 |
| **TUI 交互细节打磨** | #21002, #36613, #26861, #36803 | ⭐⭐⭐ | 侧边问答、防误退出、虚拟滚动、长列表滚动条等终端原生体验 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **回归阻断类**  
   - Web UI 终端入口消失 (#30158)、**升级不可降级 (#34287)**、**子代理输出丢失 (#36670)**、**会话卡死 (#36804)** 等在最新版本引入，严重影响生产信任度。

2. **权限模型不透明**  
   - 子代理继承 `deny` 覆盖 `allow` (#28052)、MCP 工具注册可见但不可用 (#16491)，缺乏可视化调试与文档说明。

3. **网络与部署环境适配**  
   - IPv6 黑洞导致 fetch 卡死 (#36808)、Windows `GetThreadDescription` 缺失 (#9875, #16133)、`FileSystem.makeDirectory` 抛 `EEXIST` (#36792) 等平台差异问题持续存在。

4. **账号与计费自助服务缺失**  
   - 无法删除 Zen 账号、扣费无客服响应 (#18016)、Go 订阅激活失败 (#36810)，合规与用户留存风险并存。

5. **长会话性能与上下文管理

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-14

---

## 1. 今日速览
- **核心修复聚焦 OpenAI Codex/GPT-5.6 系列兼容性**：针对 `gpt-5.6-luna` 在 Compaction 阶段因缺少 Session ID 与硬编码 `originator` 导致的 404 错误，社区已推出多个修复 PR（#6533, #6584, #6601），并修复了自托管场景下 `httpIdleTimeoutMs` 回归问题（#6476）。
- **Agent Harness 底层架构重大演进**：SQLite 会话存储（#6594）、Agent 驱动的 Memory 系统（#6599）及可替换最终消息的 Hook 机制（#6633）相继合入或提交，标志着编码代理基础设施向持久化、可扩展方向迈进。
- **企业级/自托管提供商支持持续完善**：新增 Bedrock Mantle Provider（#6216），修复 Azure Reasoning 回放、NVIDIA NIM 重试、vLLM 超时配置等生产环境痛点。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度/关注点 | 核心内容 |
|---|---|---|---|---|
| **#4945** | [openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945) | 🟢 OPEN / inprogress | **🔥 74 评论 / 30 👍** | **最高热度长期问题**。`gpt-5.5`/Codex 频繁在 TUI 卡死于 `Working...`，无流式输出、无工具调用、无报错，仅能 Esc 退出严重阻塞主力模型使用。 |
| **#6477** | [Compaction summary requests omit the session ID](https://github.com/earendil-works/pi/issues/6477) | 🔴 CLOSED | **8 评论 / 11 👍** | **新模型上线即坏**。`gpt-5.6-luna` Compaction 因请求缺少 `session_id` 导致 404 `Model not found`，暴露摘要请求未透传上下文参数。 |
| **#6476** | [Regression: httpIdleTimeoutMs no longer respected](https://github.com/earendil-works/pi/issues/6476) | 🟢 OPEN / inprogress | **7 评论** | **v0.80.6 回归**。自托管 vLLM/OpenAI 兼容接口超时配置失效，几分钟即报 `The operation timed out`，严重影响长上下文推理。 |
| **#6601** | [openai-codex: hardcoded originator blocks gpt-5.6-luna](https://github.com/earendil-works/pi/issues/6601) | 🟢 OPEN | **1 评论** | **模型准入被硬编码拦截**。Codex 后端按 `originator` 分发模型，Pi 硬编码 `"pi"` 导致 `gpt-5.6-luna` 404，需支持覆盖 `User-Agent`/`originator`。 |
| **#6509** | [Extension-reported usage in the footer cost display](https://github.com/earendil-works/pi/issues/6509) | 🟢 OPEN | **4 评论** | **扩展生态变现需求**。提议 `ctx.ui.setUsage(key, usage)` 让子进程/Subagent 的 Token 消耗汇总到 Footer 成本显示（`$2.00 (+$1.50 ext)`）。 |
| **#3200** | [Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200) | 🟢 OPEN | **4 评论 / 3 👍** | **多模态标准化诉求**。将 `prompt` RPC 扩展支持 `video`/`audio` 字段，适配 Gemma 4、GPT-4o 等原生多模态模型。 |
| **#6108

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-14

---

## 1. 今日速览
- **核心里程碑**：v0.19.10 稳定版发布，正式落地**多工作区支持**，覆盖 ACP 传输、守护进程工作器、分视图会话与工作区感知动作，标志着 `qwen serve` 从单工作区架构向多租户化演进迈出关键一步。
- **工程基建加速**：CI/CD 流水线重构（异步发布、PR 巡检、自动分类）、ACP 集成测试全面增强、Web Shell 交互体验持续打磨，项目工程化成熟度显著提升。
- **社区聚焦点**：守护进程多工作区 RFC（#6378）与热重载体系（#3696）讨论深入；子代理通信机制（#5239）、内存泄漏（#2128）、思考循环卡死（#4055）等长期痛点持续获得关注。

---

## 2. 版本发布

### 📦 v0.19.10 (Stable)
> [Release v0.19.10](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10)

**核心亮点**：
- **多工作区全链路支持**：ACP 传输层、守护进程 Worker、分视图会话、工作区感知动作（如 `/workspace` 切换）全部就绪。
- **YOLO 模式保持修复**：`enter_plan_mode` 调用不再重置 YOLO 状态（#6630）。
- **CLI `ask_user` 转发**：非交互模式下支持向用户提问。

### 🌙 v0.19.9-nightly.20260714.9dd8389eb
> [Nightly Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.9-nightly.20260714.9dd8389eb)

**变更**：
- 修复 core：`enter_plan_mode` 保持 YOLO 模式（#6630）
- CLI：转发 `ask_user` 请求

### 📦 SDK TypeScript v0.1.8
> [NPM Package](https://www.npmjs.com/package/@qwen-code/qwen-code) | 捆绑 CLI v0.19.10

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 关注度 | 核心诉求 / 价值 | 社区反应 |
|---|-------|--------|----------------|----------|
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | **Daemon 模式设计提案** | 💬25 👍1 | 系统性重构 `qwen serve` 架构的 6 章设计文档，覆盖会话隔离、资源共享、扩展热加载等 | 高讨论热度，实施追踪 Issue，设计文档为社区共识基石 |
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC：单 Daemon 多工作区** | 💬22 | 正式提案：`1 daemon = N workspaces × M sessions`，保持向后兼容 | 核心维护者参与深度讨论，v0.19.10 已落地首批能力 |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | **Daemon 能力缺口追踪** | 💬15 | 梳理 HTTP/SSE 接口与 ACP 标准的差距，制定优先级待办 | 作为里程碑追踪 Issue，指导后续迭代方向 |
| [#3696](https://github.com/QwenLM/qwen-code/issues/3696) | **全量热重载系统** | 💬6 | Skills/Extensions/MCP/LSP/配置运行时生效，无需重启 | 部分已实现，剩余工作拆解为子任务，工程化诉求强 |
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) | **Daemon 冷启动与快速路径优化** | 💬5 | 目标：首会话建立 < 0.7s（追平 CLI 直连） | 基准测试已建立，健康检查路径已优化，聚焦会话创建开销 |
| [#5239](https://github.com/QwenLM/qwen-code/issues/5239) | **子代理与主会话双向通信** | 💬4 | 子任务完成/挂起需通知主会话；Monitor 无法穿透子代理内部 | 痛点明确，PR #5795 正尝试用崩溃通知携带部分结果缓解 |
| [#4055](https://github.com/QwenLM/qwen-code/issues/4055) | **模型陷入 10 分钟思考循环** | 💬4 | 简单指令触发无限推理，无输出、无报错、不可中断 | 多用户复现，疑似提示词/推理参数配置问题，急需根因分析 |
| [#6321](https://github.com/QwenLM/qwen-code/issues/6321) | **PreToolUse hook `ask` 静默拒绝** | 💬4 | 文档承诺的用户确认弹窗从未出现，工具调用直接被拒 | Hook 机制可靠性缺陷，影响自动化审批流程信任度 |
| [#2128](https://github.com/QwenLM/qwen-code/issues/2128) | **长会话内存无界增长** | 💬3 | UI History 数组无上限累积，导致进程内存持续膨胀 | 根因定位清晰（`useHistoryManager.history`），需引入 LRU/压缩策略 |
| [#5887](https://github.com/QwenLM/qwen-code/issues/5887) | **持久化多人频道驻留 Agent** | 💬2 👍3 | 群聊共享单会话、@ 即用、定时自主任务，对标 Claude Tag | 产品化愿景清晰，依赖 Daemon 多工作区与 Channel 热重载（#6010） |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| [#6846](https://github.com/QwenLM/qwen-code/pull/6846) | PDF Vision Bridge 回退 | 🟢 Open | 文本提取失败/超长页面自动走视觉模型转录 | 多模态能力增强，文档理解鲁棒性↑ |
| [#6860](https://github.com/QwenLM/qwen-code/pull/6860) | 结构化 Channel Memory 管理 | 🟢 Open | 版本化存储、稳定 ID、分页/增删改查、自然语言兼容 | 群聊长期记忆化，支撑 #5887 场景 |
| [#6815](https://github.com/QwenLM/qwen-code/pull/6815) | Web Shell 扩展管理页 | ✅ Merged | 响应式卡片、搜索、能力视图、启停/卸载、更新检查 | Web IDE 运维体验完善 |
| [#6766](https://github.com/QwenLM/qwen-code/pull/6766) | CI 自动 PR 失败巡检 | 🟢 Open | 每 10 分钟扫描失败 PR，过滤噪音，按新旧排序 | 研发效能工具化，降低合入阻塞风险 |
| [#6872](https://github.com/QwenLM/qwen-code/pull/6872) | Web Shell Composer 自适应高度 | 🟢 Open | 长文本/图片自动展开，上限 `min(350px, 40vh)` | 交互体验细节打磨 |
| [#6871](https://github.com/QwenLM/qwen-code/pull/6871) | **VP 模式默认开启** | 🟢 Open | `ui.useTerminalBuffer: true` 成默认，移除 `bypassVpGate` | 解决 #6149 滚动失效、#5971 Linux 滚动风暴，**全量用户受益** |
| [#6869](https://github.com/QwenLM/qwen-code/pull/6869) | Shell 非零退出码标记失败 | ✅ Merged | 保留 stdout/stderr/exit 码，历史回放、Web 摘要均体现 | 工具调用语义修正，模型感知更准确 |
| [#6868](https://github.com/QwenLM/qwen-code/pull/6868) | 稳定版发布异步化 | 🟢 Open | 包发布+GitHub Release 后即完成；AI 释注、Changelog 重生成、版本 bump 走独立 workflow | 发布阻塞时间大幅缩短，吞吐提升 |
| [#2414](https://github.com/QwenLM/qwen-code/pull/2414) | ACP 集成测试全面增强 | 🟢 Open | 认证/会话/核心工具/斜杠命令/遥测全覆盖，SDK 升级 0.16.1 | **修补 #5219 暴露的 CI 盲区**，守护协议兼容性 |
| [#6561](https://github.com/QwenLM/qwen-code/pull/6561) | Web Shell Goals 页 + 修复 Daemon 丢失 `/goal` | 🟢 Open | 可视化目标管理，修复会话恢复时目标丢失 | 规划类交互落地，Daemon 状态持久化补全 |
| [#6854](https://github.com/QwenLM/qwen-code/pull/6854) | 修正孤立闭合思考标签 | 🟢 Open | 遇到单`/`</thinking>` 且已有完整工具调用时，抑制而非整轮重试 | 推理容错增强，减少无效重试开销（#6849 配套） |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表性 Issues | 核心诉求 | 成熟度 |
|----------|---------------|----------|--------|
| **Daemon 多租户化与企业级就绪** | #3803, #6378, #4514, #4748, #6312, #6010 | 多工作区隔离、热重载 Channel、冷启动优化、

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-14

> 数据源：`github.com/Hmbown/CodeWhale` | 统计窗口：过去 24 小时

---

## 1. 今日速览

*   **版本里程碑**：v0.8.68 发布候选版（RC）准备就绪（#4361），核心聚焦于 **Underwater TUI 交互体验完善**、后台 Agent 生命周期语义定义、PTY 测试覆盖率提升及执行流元数据版本化。
*   **性能修复响应极快**：针对 `@` 文件补全在大型目录下导致终端卡死的严重问题（#4365），社区贡献者已在数小时内提交修复 PR（#4367），引入时间预算机制限制索引构建耗时。
*   **生态扩展持续推进**：新增 **MiniMax Messages** 提供商支持（#4354、#4352），修复 BSD 系统浏览器打开兼容性（#4360），官网完成“文档优先”重设计（#4362）。

---

## 2. 版本发布

**暂无正式版本发布**。当前处于 **v0.8.68 Release Candidate** 阶段（PR #4361），预计近期发布。

---

## 3. 社区热点 Issues（Top 9）

| # | Issue | 核心内容 | 关注理由 & 社区反应 |
|---|-------|----------|---------------------|
| 1 | **[#4365]** `@` 文件监听扫描全量目录树导致终端卡死 | 在非工作区大目录使用 `@` 引用时，即时拉取完整子目录导致 TUI 无响应（pwsh7）。 | **🔥 严重性能阻塞**；影响大型项目/单体仓库用户体验；已有修复 PR (#4367) 进入审查。 |
| 2 | **[#4368]** Kimi baseUrl 覆盖配置 & exseed 上下文限制预警 | 自定义 `base_url` 后模型选择异常，且缺乏上下文窗口超限预警。 | **🌐 多模型厂商兼容性** 需求；涉及配置校验与运行时提示机制缺失。 |
| 3 | **[#4359]** v0.8.68: 定义分离式后台 Agent 的父停止语义 | 前台子 Agent 继承取消，后台分离 Agent 故意存活，Esc/Stop 合同模糊。 | **🤖 Agent 架构核心契约**；关乎多 Agent 协作的可预测性与用户心智模型一致性。 |
| 4 | **[#4356]** v0.8.68: 完成版本化执行流收据与工具生命周期元数据 | Exec-stream JSON 需添加类型化终端结果，支持回放、成本归因。 | **📊 可观测性与合规基建**；为成本核算、审计、复现奠定数据契约基础。 |
| 5 | **[#4355]** v0.8.68: 安全持久化有状态终端身份与重启限制 | 重启后不应误判复用 PID 或陈旧记录为存活 Shell。 | **💾 状态持久化可靠性**；解决重启后“幽灵终端”导致的状态损坏风险。 |
| 6 | **[#4357]** v0.8.68: 完成水下 TUI 收据沉降与相位感知环境动效 | 静态契约下的三大收尾行为：收据沉降、相位感知深度、工作时鱼响应。 | **✨ TUI 精细化打磨**；在保持低动效/无障碍前提下提升“质感”。 |
| 7 | **[#4358]** v0.8.68: 为工作台与审批鼠标交互补充 PTY 覆盖 | 补充点击工作台、停止确认等鼠标交互的 PTY 测试断言。 | **🧪 测试完备性**；保障核心交互回归防护，支撑重构信心。 |
| 8 | **[#4333]** 配置选择器将空 provider headers 视为已配置 | `provider_config_is_explicit` 判断逻辑缺陷，空 TOML 表导致误判。 | **🐛 配置系统健壮性**；已关闭修复，属于 v0.8.68 阻塞级修复。 |
| 9 | **[#4345]** Key 配置不友好，建议支持终端内配置 | 用户反馈 API Key 管理流程繁琐，期望在 TUI 内部完成配置。 | **💡 UX 改进需求**；高频用户痛点，涉及安全存储与交互流程重设计。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | **[#4361]** Prepare v0.8.68 RC | **Release** | 汇总 Underwater TUI、Agent 语义、PTY 覆盖、执行流元数据等全套 v0.8.68 变更。 | **全量用户**；下一稳定版基线。 |
| 2 | **[#4367]** fix(tui): `@` 补全索引引入壁钟时间预算 | **Perf Fix** | 修复 #4365：`Workspace::build_file_index` 增加时间预算，超时降级/中断，避免主线程阻塞。 | **大型仓库用户**；消除 TUI 卡死风险。 |
| 3 | **[#4354]** feat: 新增 MiniMax Messages 提供商支持 | **Feature** | 新增 MiniMax-M3/M2.7 模型，含中/全球双 Base URL、认证、路由、定价、文档全链路。 | **国产模型用户**；显著扩展模型选择矩阵。 |
| 4 | **[#4362]** Make public site documentation-led | **Docs/UX** | 官网重构为文档门户：首页聚焦安装/运行时/提供商/版本指引，引入 Underwater 视觉系统。 | **新用户上手/品牌统一**；降低学习曲线。 |
| 5 | **[#4364]** feat(web): 文档中心与 FAQ 新增关键词搜索 | **Feature** | 客户端实时过滤搜索（支持 EN/ZH、标签/描述/源文件/分类），`/` 快捷键唤起。 | **文档检索效率**；重内容页面核心体验升级。 |
| 6 | **[#4360]** Fix: BSD 系统浏览器打开支持 | **Compat Fix** | 补充 NetBSD/FreeBSD/OpenBSD/DragonFly 的 `browser_open_command` 实现。 | **BSD 平台用户**；修复链接点击无响应的平台级 Bug。 |
| 7 | **[#4351]** fix(scorecard): 成本绑定至提供商路由 | **Billing/Infra** | 离线评分卡价格绑定精确到 provider/model 路由；未知/无定价路由拒绝计费，保留计费判别字段。 | **成本核算准确性**；为企业级计费、多模型路由奠基。 |
| 8 | **[#4358/4357/4356/4355]** v0.8.68 子任务 PR 群 | **Infra/Quality** | 分别落地 PTY 鼠标覆盖、TUI 动效收尾、执行流版本化收据、终端身份持久化安全化。 | **核心稳定性/可观测性**；构成 RC 核心交付物。 |
| 9 | **[#4339/4342/4340/4341/4343]** 依赖批量升级 | **Chore** | `jsonschema` `rmcp` `ignore` `lru` `colored` 等核心依赖升级至最新稳定版。 | **供应链安全/性能**；`rmcp 2.2.0` 引入 MCP 协议新特性支持。 |
| 10 | **[#4366]** fix(web): 对齐品牌字符串 & 清理重设计残留 | **Polish** | 统一全站用户可见品牌为 "Codewhale"，清理冗余样式/组件。 | **品牌一致性/代码整洁度**；配合 #4362 落地。 |

---

## 5. 功能需求趋势洞察

1.  **Agent 编排与生命周期标准化**（高频）
    *   #4359（父停止语义）、#4355（终端身份持久化）、#4356（执行流版本化元数据）集中解决**多 Agent 协作的状态一致性、可审计性、可恢复性**——向“生产级 Agent 平台”演进的关键基建。
2.  **TUI 交互极致打磨与无障碍**（高频）
    *   #4357（动效收尾）、#4358（鼠标 PTY 覆盖）、#4367（大目录性能兜底）、#4345（Key 内嵌配置）体现对**首屏加载、大文件操作、动效偏好、配置闭环**的全链路体验追求。
3.  **模型提供商生态中性化与国产化并行**（中频）
    *   #4354（MiniMax）、#4368（Kimi 自定义 BaseUrl）、#4351（成本按路由绑定）显示社区对**多云/私有化部署、国产模型厂商、精细化成本控制**的强诉求。
4.  **跨平台兼容性补齐**（低频但关键）
    *   #4360（BSD 浏览器）、依赖升级链（#4339-4343）显示向 **Tier-1 跨平台 CLI 工具** 标准靠齐。

---

## 6. 开发者关注点与痛点

| 痛点/需求 | 典型证据 | 建议关注方向 |
|-----------|----------|--------------|
| **大型项目下 `@` 补全不可用** | #4365 “终端冻结 pwsh7”、#4367 紧急修复 | ✅ 已有修复入主线；建议补充**增量索引/后台构建/工作区感知**长期方案。 |
| **Agent 停止/取消语义模糊** | #4359 “Esc/Stop 合同模糊：继续/取消全/询问” | 需在文档与 UI 明确**前台/后台/分离**三态停止契约，提供可视化状态指示。 |
| **API Key 管理流程割裂** | #4345 “Key 不友好，不能放终端配置吗” | 规划 **TUI 内置密钥管理器**（集成系统 Keyring/Secret Service），支持多 Provider 切换。 |
| **自定义 BaseUrl/模型元数据校验缺失** | #4368 Kimi baseUrl 覆盖异常、上下文限制无预警 | 建立 **Provider Capability Schema 校验层**，启动时/切换时自动探测并提示不匹配。 |
| **成本核算不透明/不可归因** | #4351 “未知路由拒绝计费”、#4356 “版本化收据用于成本归因” | 落地 **Turn-level 计费事件流**（Provider/Model/Token/Cost/Route），对接导出/可视化工具。 |
| **文档发现效率低** | #4362/4364 官网重构为文档门户+全文搜索 | 持续投入 **Docs-as-Code + 客户端搜索**，考虑引入 AI 问答机器人辅助检索。 |

---

> **下一期看点**：v0.8.68 正式发布落地情况；`@` 补全性能修复后的大仓实测反馈；MiniMax 等新 Provider 的实战兼容性报告；Underwater TUI 动效在低配终端/远程 SSH 下的表现。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*