# AI CLI 工具社区动态日报 2026-07-26

> 生成时间: 2026-07-26 02:08 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-07-26

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**“稳定性攻坚与架构重构并行”**的深水区。头部工具（Claude Code、Codex、Gemini CLI）不再单纯追求功能堆砌，转而聚焦**跨工具互操作标准（AGENTS.md）**、**多 Agent 编排可靠性**、**长会话上下文持久化**及**新模型（Opus 5/GPT-5.6）适配**等核心基建难题。同时，**Windows 原生体验崩塌**与 **Desktop 客户端 GPU 崩溃**成为多家厂商共同面临的“成长烦恼”，倒逼 Electron/Tauri 底层治理。新兴工具（Kimi、Qwen、DeepSeek TUI、OpenCode、Pi）则在**多工作区守护进程**、**远程控制协议**、**Workflow 产品化**等差异化赛道发力，生态呈现“头部夯实基建、腰部抢占细分场景、长尾重构架构债”的分层竞争态势。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新量(24h) | PR 活跃度(24h) | 发布情况 | 核心研发节奏 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | **高** (全量活跃，头部 Issue 690👍) | **高** (14个 PR 合并/更新，MCP 基建密集) | **2 个 Rust 预发布版** (alpha.10/.10.1) | **极快**：双版本连发 + 基建 PR 批量合并，典型发布冲刺期 |
| **Gemini CLI** | **高** (50 条深度分析，P1 级阻塞多个) | **高** (10+ 个 PR，含 SSR Pipeline 基建大单) | **1 个 Nightly 版本** | **极快**：夜ly 机制成熟，核心修复与基建并行 |
| **Qwen Code** | **中高** (50 条更新，RFC 讨论 30 条评论) | **高** (10 个功能性 PR，Web Shell/Review 能力密集落地) | **1 个 Nightly 版本** | **快**：功能迭代激进，Web 化与多工作区架构同步推进 |
| **DeepSeek TUI** | **中** (50 条更新) | **高** (41 条 PR 更新，重构/修复并行) | 无 (v0.9.2 里程碑积累中) | **快**：架构重构期，神对象拆解/多提供商支持同步进行 |
| **Claude Code** | **中** (50 条提炼，头部 Issue 4451👍) | **低** (仅 5 个 PR，多为内部工程修正) | **无新版本** | **慢**：进入稳定性攻坚期，社区呼声与官方响应存在时滞 |
| **GitHub Copilot CLI** | **中** (18 个 Issue 更新，含多个 P0 回归) | **极低** (2 个 PR 均关闭，无功能合入) | **无新版本** | **停滞/危机**：v1.0.74 引入严重回归，修复管道疑似阻塞 |
| **OpenCode** | **中** (Top 10 高热回归报告) | **中** (10 个 PR，TUI/Workflow 功能修复为主) | **无新版本** (v1.18.5 存严重回归) | **动荡**：桌面端回归严重，V2 架构与 TUI 稳定性双线作战 |
| **Pi** | **中** (精选 10 条，企业级阻断 Issue 存在) | **中** (2 个关键合并，扩展机制架构级增强) | **1 个正式版 v0.82.1** | **稳健**：正式版交付 Opus 5 支持，扩展生态基建落地 |
| **Kimi Code CLI** | **低** (仅 2 核心 Issue，但含 P0 死循环) | **中** (3 个核心修复合并，1 个 Win 兼容 PR) | **无新版本** | **谨慎**：核心维护者主导修复会话一致性，待 v1.44.1 热修复 |

> **数据说明**：Issues/PR 数据基于各日报“Top 10”或“全量提炼”表述估算；Release 以日报明确声明为准。

---

## 3. 共同关注的功能方向

| 共性需求方向 | 关注工具 (代表性 Issue/PR) | 具体诉求细节 |
| :--- | :--- | :--- |
| **跨工具互操作标准化** | **Claude Code** (#6235 AGENTS.md 4451👍), **OpenCode** (对标 Claude Code Workflow), **DeepSeek TUI** (#2743 适配 Claude 技能) | 统一 Agent 定义/指令/技能格式，打破 CLAUDE.md/AGENTS.md 孤岛，实现团队协作与多工具链无缝切换。 |
| **多 Agent / 子 Agent 编排可靠性** | **Claude Code** (#77554 孤儿任务, #18027 上下文感知), **Gemini CLI** (#22323 虚假成功, #21409 Generalist 挂起), **Qwen Code** (#7685 Subagent 模型分级), **OpenCode** (#29789 Dynamic Workflows) | 解决后台任务生命周期管理、跨会话/子 Agent 上下文共享、任务状态持久化与恢复、动态模型分配等核心编排难题。 |
| **长会话/大上下文持久化与压缩** | **Claude Code** (#81290 自动压缩回滚, #76844 Resume 丢 TaskList), **GitHub Copilot** (#4183 5MB 硬限制软死锁), **Pi** (#6768 Compaction 企业级阻断, #7048 截断半词), **Gemini CLI** (#28401 Shell 输出上限) | 攻克 Token 窗口与 API Body 限制双重夹击，实现可靠的增量压缩、会话恢复状态一致性、企业级 Compaction SLA。 |
| **Windows / Desktop 原生稳定性** | **Codex** (#33776 进程泄漏, #33483 崩溃, #34133 GPU 崩溃), **Claude Code** (#81275 GPU 崩溃, #77768 每日 4-5 次死亡), **Gemini CLI** (#2558 Win 测试 CRLF), **Copilot CLI** (#2205 滚动回归), **OpenCode** (#34442 离线安装缺 ripgrep) | Electron/Tauri 底座迁移后的进程管理失控、GPU 进程崩溃、文件系统/路径跨平台兼容、离线/气隙环境交付能力。 |
| **MCP / 工具生态治理** | **Codex** (#35414 递归限制, #35359 网络策略, #35280 过滤逻辑), **Gemini CLI** (#28481 OAuth 刷新, #28353 路径遍历), **Pi** (#7111 耐久化外部工具结果) | 从“能跑通”转向“生产可用”：进程/内存/递归资源配额、沙箱网络隔离、供应链安全、工具结果持久化与异步回调机制。 |
| **远程开发 / 跨设备会话流转** | **Codex** (#10450 690👍 Remote Dev), **Kimi** (#1282 16👍 Remote Control), **DeepSeek TUI** (#4844 `/rc` 协议), **Gemini CLI** (SSR Pipeline 基建) | 浏览器/移动端接管本地终端会话、SSH 原生支持、会话状态实时同步（PTY/WebRTC）、Headless 认证回调支持。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位与技术路线 | 目标用户画像 | 差异化功能侧重 (Moat) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **企业级标准制定者**。TypeScript/Node.js 架构，深度绑定 Anthropic 模型能力，主推 `CLAUDE.md` + 子 Agent 编排。 | 追求最佳模型推理体验、需复杂多 Agent 协作的专业开发团队/企业。 | **Opus 思维链原生支持**、**最强代

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-26）

---

## 1. 热门 Skills 排行（Top 8）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **skill-creator 评测体系修复** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | 修复 `run_eval.py` 在 Windows 上的 subprocess 读取、触发检测、并行 worker 等导致的 **recall=0%** 系统性误报 | 评测循环完全失效，阻断描述优化；Windows 兼容性（`claude.cmd`、编码、pipe select）为集中痛点 | OPEN |
| 2 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质量控制：孤词/寡行、标题分页、编号对齐 | “每份 Claude 生成文档都受影响”，用户极少主动要求但极需自动修正 | OPEN |
| 3 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 全栈测试模式库：Testing Trophy、AAA、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 覆盖“测什么 / 不测什么”的决策指导，填补技能库在测试工程化上的空白 | OPEN |
| 4 | **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367)) | 交付前机械验证 + 四维推理质量门禁（严重度优先），通用于任意项目/栈/模型 | “先验证文件存在，再审计推理”，被视为通用质量护栏的雏形 | OPEN |
| 5 | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | 色彩专家技能：命名体系、色彩空间选型表、OKLCH/OKLAB/CAM16 等现代色彩工程指导 | 设计/前端/数据可视化场景高频需求，缺乏系统性色彩知识技能 | OPEN |
| 6 | **ODT 技能** ([#486](https://github.com/anthropics/skills/pull/486)) | OpenDocument (.odt/.ods) 创建、填充、解析、转 HTML，含模板工作流 | 企业级开放标准文档场景刚需，配套 MCP `pyxel-mcp` 同步推进 | OPEN |
| 7 | **skill-quality-analyzer / skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 元技能：从结构、文档、示例、资源、安全五维度评分技能质量 | 社区呼吁建立“技能审核标准”，配合 #492 安全议题形成闭环 | OPEN |
| 8 | **frontend-design 改写** ([#210](https://github.com/anthropics/skills/pull/210)) | 提升可执行性与内部一致性，确保每条指令单轮可落地 | 原版偏概念宣导，改写聚焦“可操作指令”，被视为技能撰写最佳实践范本 | OPEN |

> **共性**：前 8 名中 **6 个为 OPEN 状态**，核心工具链（skill-creator 评测/Windows 兼容）与**通用质量/文档/测试/设计**四大领域的新技能并行推进。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 核心诉求 | 热度指标 |
|----------|------------|----------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) | 社区技能冒用 `anthropic/` 命名空间，诱导用户授予过高权限；需官方命名空间治理与签名验证 | 🔥 最高 |
| **组织级技能分发** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) | Claude.ai 原生支持组织内共享技能库，避免手动下载/上传/Slack 传文件 | ⭐ 高需求 |
| **技能评测体系可用性** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍)、[#1169](https://github.com/anthropics/skills/issues/1169) | `run_eval.py` 触发率长期 0%，导致描述优化循环伪装成工作实则优化噪声 | 🛑 阻断性 |
| **技能去重与市场治理** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) | `document-skills` 与 `example-skills` 安装重复内容，污染上下文窗口 | 🧹 治理需求 |
| **技能创建最佳实践** | [#202](https://github.com/anthropics/skills/issues/202) (8 💬) | `skill-creator` 自身不符合技能规范（文档风而非指令风），需重写为可执行技能 | 📝 规范化 |
| **Agent 治理/安全模式** | [#412](https://github.com/anthropics/skills/issues/412) (6 💬) | 缺失“智能体治理”技能：策略执行、威胁检测、信任评分、审计追踪 | 🛡️ 新赛道 |
| **MCP 化与跨平台** | [#16](https://github.com/anthropics/skills/issues/16) (4 💬)、[#29](https://github.com/anthropics/skills/issues/29) (4 💬) | 技能暴露为 MCP 接口；支持 AWS Bedrock 等非 Anthropic 托管环境 | 🔌 生态互通 |
| **压缩记忆/符号化状态** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) | 长周期 Agent 用符号标记替代自然语言笔记，压缩上下文 | 💡 创新方向 |

---

## 3. 高潜力待合并 Skills（评论活跃、接近落地）

| PR | Skill | 关键进展 / 剩余阻碍 | 预判合并窗口 |
|----|-------|---------------------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) / [#1323](https://github.com/anthropics/skills/pull/1323) | **skill-creator 评测核心修复** | 已定位触发检测逻辑缺陷（漏读 skill 名、遇非 Skill 工具即退出），Windows 并行 worker 同步修复 | **近期（1-2 周）**，阻断全库描述优化 |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows 兼容性补丁** | `claude.cmd`、cp1252 编码、pipe select 三大坑均已给出 1-line fix，测试通过 | **近期**，配合上项同批合并 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 功能完整、无外部依赖、解决通用痛点，仅待维护者审核 | **短期** |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 覆盖全测试栈，文档详实，社区呼声高（Issue #412 关联） | **短期** |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 自包含、引用权威色彩标准，设计/可视化场景即插即用 | **短期** |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 配合 #492 安全治理，提供自动化评分基线，元技能定位清晰 | **中期**（需配套发布流程） |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT 技能** | 含 MCP 服务端（pyxel-mcp），企业级开放文档场景完整链路 | **中期** |

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：把“技能开发工具链（skill-creator 评测/跨平台/规范）”修好、把“技能分发信任体系（命名空间/组织共享/去重/安全审核）”建起来——在基建就绪前，所有新技能的落地与传播都受制于此。**

---

# Claude Code 社区动态日报 | 2026-07-26

---

## 1. 今日速览

- **无新版本发布**，社区焦点集中在 Issue 追踪与核心架构缺陷修复。
- **AGENTS.md 标准化支持 (#6235)** 持续领跑社区呼声（4451 👍，344 条评论），跨工具互操作需求最迫切。
- 新增多个 **Claude Desktop 崩溃类严重 Bug**（GPU 进程崩溃、Browser 面板触发崩溃、自动压缩导致会话历史回滚），且 **Opus 5 / Fable 5 模型集成问题集中爆发**（AUP 误判、CLI/VSCode 不可用、算术拒答）。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 类型 | 核心诉求/缺陷 | 热度 | 关键点 |
|---|-------|------|---------------|------|--------|
| 1 | [#6235](https://github.com/anthropics/claude-code/issues/6235) | 🔥 增强 | **支持 AGENTS.md 统一标准** | 4451 👍 / 344 评 | Codex/Cursor/Amp 已采纳；CLAUDE.md 孤立，阻碍团队协作与多 Agent 互操作 |
| 2 | [#68429](https://github.com/anthropics/claude-code/issues/68429) | 🐛 严重 | **Pro→Max 误升级导致账号永久删除、退款卡死** | 12 评 | 计费/账号系统严重缺陷，无人工申诉通道，用户数据零恢复 |
| 3 | [#18027](https://github.com/anthropics/claude-code/issues/18027) | ✨ 增强 | **原生上下文可见性：自调节多上下文工作流** | 8 👍 / 11 评 | 缺乏跨会话/子 Agent 的上下文感知能力，阻碍复杂编排 |
| 4 | [#67085](https://github.com/anthropics/claude-code/issues/67085) | 🐛 Bug | **Desktop 活动看板：streak/heatmap 仅记录会话启动日** | 4 👍 / 9 评 | 多日会话导致连续天数统计错误，激励体系失效 |
| 5 | [#79798](https://github.com/anthropics/claude-code/issues/79798) | 🐛 Bug | **Opus 4.8：`alwaysThinkingEnabled` 未映射为 `thinking:adaptive`** | 1 👍 / 7 评 | 导致 extended thinking 静默失效；`xhigh` + WebSearch 直接 400 |
| 6 | [#77554](https://github.com/anthropics/claude-code/issues/77554) | 🐛 Bug | **非根子 Agent 发起的后台任务在其 turn 结束后永久孤儿化** | 3 评 | `run_in_background`/`Task` 分发均受影响，长任务编排不可靠 |
| 7 | [#76844](https://github.com/anthropics/claude-code/issues/76844) | 🐛 Bug | **`--resume/--continue` 不恢复 TaskList（ID 重新分配）** | 1 👍 / 2 评 | 任务跟踪在会话恢复时断裂，影响长流程自动化 |
| 8 | [#80988](https://github.com/anthropics/claude-code/issues/80988) | 🐛 Bug | **v2.1.219 `heron_brook` 提示词强制注入，覆盖用户委托策略** | 3 评 | 仅 Opus 5 生效，无退出机制，破坏可配置性 |
| 9 | [#81275](https://github.com/anthropics/claude-code/issues/81275) | 🐛 严重 | **Desktop MSIX 1.24012.9：打开 Browser 面板必现 GPU 进程崩溃 (0x60C201E)** | 1 评 | Intel/NVIDIA/WARP 全复现，应用整体死亡，无崩溃转储 |
| 10 | [#81291](https://github.com/anthropics/claude-code/issues/81291) | 🐛 Bug | **`${CLAUDE_PROJECT_DIR}` 在 exec-form hook 中解析为过时 cwd** | 0 评 | 中途 `cd` 后 hook 仍指向旧目录，破坏项目感知自动化 |

> **新增高频关键词**：`Fable 5`（#81283/81285/81284）、**自动压缩双写导致历史回滚** (#81290)、**AUP 误判安全研究** (#74293/#81288)。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#81262](https://github.com/anthropics/claude-code/pull/81262) | Open | Statsig 事件区分 `github_issue_created` / `github_issue_closed` | 遥测准确性，Issue 生命周期分析 |
| 2 | [#81261](https://github.com/anthropics/claude-code/pull/81261) | Open | `/clean_gone` 支持含空格 worktree 路径（`git worktree list --porcelain -z`） | Windows/跨平台 worktree 清理鲁棒性 |
| 3 | [#39043](https://github.com/anthropics/claude-code/pull/39043) | Open | 移除 Frontend Design Skill 中 "retro-futuristic" 推荐 | 技能库内容治理 |
| 4 | [#15727](https://github.com/anthropics/claude-code/pull/15727) | **Closed** | `hookify` 插件修正 Python 导入路径 (`hookify.core` → `core`) | 插件加载修复 |
| 5 | [#49596](https://github.com/anthropics/claude-code/pull/49596) | **Closed** | 抽取共享 GitHub API 客户端 `github-api.ts` + 测试 | 代码复用、可测试性提升 |

> PR 总数较少（5 个），以内部工程修正为主，无用户可见功能合并。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **跨工具互操作标准化** | #6235 (AGENTS.md) | ⭐⭐⭐⭐⭐ 极高 |
| **多 Agent / 子 Agent 架构完善** | #18027, #77554, #78313, #76863 | ⭐⭐⭐⭐ 高 |
| **会话持久化与恢复可靠性** | #76844, #80871, #80249, #81290 | ⭐⭐⭐⭐ 高 |
| **新模型集成适配 (Opus 5 / Fable 5)** | #79798, #80988, #81283, #81285, #81288 | ⭐⭐⭐⭐ 高 |
| **Desktop 客户端稳定性 (GPU/崩溃/渲染)** | #67085, #77768, #81275, #81290 | ⭐⭐⭐⭐ 高 |
| **Hook 系统与环境变量一致性** | #81291, #15727 (PR) | ⭐⭐⭐ 中高 |
| **计费/账号系统可靠性** | #68429 | ⭐⭐⭐ 中高 |
| **安全策略可配置性/豁免机制** | #74293, #80988, #81288 | ⭐⭐⭐ 中 |
| **时区本地化与 UI 细节** | #64988, #81287, #81289 | ⭐⭐ 中 |

---

## 6. 开发者关注点总结

| 痛点类别 | 高频反馈 | 典型引述/现象 |
|----------|----------|----------------|
| **互操作孤岛** | CLAUDE.md 无法被其他 AI 编码工具识别，团队协作需维护双份文档 | "Codex/Amp/Cursor 已标准化 AGENTS.md，Claude Code 成为孤岛" (#6235) |
| **长任务/后台编排不可靠** | 子 Agent 结束即孤儿化后台任务；Resume 丢失 TaskList；Workflow 跨边界死亡 | "Background task 永久丢失" (#77554) / "Task ID 重置导致状态更新失败" (#80871) |
| **新模型功能断层** | Opus 4.8 thinking 未生效；Opus 5 提示词注入不可关；Fable 5 CLI/VSCode 不可用、拒答基础算术 | "alwaysThinkingEnabled 静默失效" (#79798) / "Fable 5 拒答 2+2" (#81285) |
| **Desktop 原生稳定性危机** | GPU 进程高频崩溃、Browser 面板必崩、自动压缩导致历史回滚、无崩溃转储 | "每日 4-5 次整体死亡" (#77768) / "Browser pane 打开即

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-07-26

---

## 1. 今日速览

- **两个 Rust 预发布版本连续推出**（`0.146.0-alpha.10` 与 `0.146.0-alpha.10.1`），标志着下一版本迭代进入收尾阶段。
- **Windows 平台稳定性问题集中爆发**：进程泄漏、GPU 崩溃、PowerShell 轮询占 CPU、拼写检查失效等 6 个高热 Issue 同步更新，反映桌面端在新版 ChatGPT 底座迁移后的适配痛点。
- **MCP 生态治理加速**：14 个 PR 中 5 个聚焦 MCP 服务器递归限制、技能监听、网络策略、过滤逻辑等核心基础设施修复，显示团队正系统性解决多智能体架构的资源失控问题。

---

## 2. 版本发布

| 版本 | 类型 | 关键信息 |
|------|------|----------|
| `rust-v0.146.0-alpha.10.1` | 热修复预发布 | 紧跟 `alpha.10` 发布，通常包含关键回归修复；详细 changelog 待正式版附带。 |
| `rust-v0.146.0-alpha.10` | 功能预发布 | 引入新功能集，配合同期 PR（如 MCP 递归限制、技能监听、祖先发现流水线优化）一同验证。 |

> 🔗 [Releases 页面](https://github.com/openai/codex/releases)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 核心问题 | 为何关注 |
|---|-------|------|------|----------|----------|
| 1 | [#10450 Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450) | ✅ Closed | 👍 690 / 💬 178 | 社区呼声最高的**远程开发/SSH 支持**需求 | 690 👍 证明刚需；虽标记 Closed，但可能转入内部里程碑，后续进展值得追踪 |
| 2 | [#33776 Windows: ChatGPT.exe 衍生海量 taskkill/conhost 导致 WMI 风暴](https://github.com/openai/codex/issues/33776) | 🟢 Open | 👍 21 / 💬 24 | 桌面端进程管理失控，引发 DWM 降级、系统卡顿 | 典型“进程泄漏”模式，影响所有 Windows 用户，且可复现性强 |
| 3 | [#30408 MCP 服务器进程泄漏：每线程进程从不清理（9+ GB RSS）](https://github.com/openai/codex/issues/30408) | 🟢 Open | 👍 4 / 💬 17 | 多线程会话下 MCP 进程无上限累积，内存泄漏严重 | 直接关联多智能体架构稳定性，PR #35414 已着手修复递归限制 |
| 4 | [#33483 Windows 迁移新 ChatGPT 应用后冻结/频繁崩溃](https://github.com/openai/codex/issues/33483) | 🟢 Open | 👍 5 / 💬 16 | 底层 Electron/OWL 迁移带来的兼容性断层 | 迁移后回归集中爆发，阻碍大版本推广 |
| 5 | [#25453 Windows 每秒轮询 powershell.exe 导致高 CPU](https://github.com/openai/codex/issues/25453) | 🟢 Open | 👍 4 / 💬 16 | 进程枚举策略低效，长期运行显著发热 | 典型性能退化，修复收益高（降频/事件驱动替代轮询） |
| 6 | [#35058 VS Code macOS 上 Codex Diff 崩溃 “Oops, an error has occurred”](https://github.com/openai/codex/issues/35058) | 🟢 Open | 👍 11 / 💬 12 | 扩展核心功能不可用，阻断代码审查流 | 影响 macOS 主力开发者，复现率 100% |
| 7 | [#26478 / #30749 Windows 拼写检查仅显示 “No Guesses Found”](https://github.com/openai/codex/issues/26478) | 🟢 Open | 👍 23 / 💬 12 | 原生拼写服务集成缺陷，长期未修 | 体验细节但高频触达，👍 数说明痛点广泛 |
| 8 | [#34133 Windows 浏览器截图触发 GPU 进程崩溃（vk_swiftshader.dll 被 CI 拦截）](https://github.com/openai/codex/issues/34133) | 🟢 Open | 💬 14 | 代码完整性策略与 SwiftShader 回退冲突 | 涉及 Windows 安全策略与 Chromium 嵌入层交互，修复需跨团队协作 |
| 9 | [#11324 多任务并行时 MCP 内存暴涨](https://github.com/openai/codex/issues/11324) | 🟢 Open | 👍 5 / 💬 12 | 长周期会话下 MCP 缓存/上下文未释放 | 与 #30408 同源，验证“会话级资源隔离”缺失 |
| 10 | [#31864 GPT-5.6 Sol 全部失败：MultiAgentV2 使用保留工具 collaboration.spawn_agent](https://github.com/openai/codex/issues/31864) | 🟢 Open | 👍 14 / 💬 6 | 新模型工具链不兼容，导致整条模型线不可用 | 直接阻断最新模型体验，涉及模型侧与 CLI 协议同步 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#35414 Raise the MCP server recursion limit](https://github.com/openai/codex/pull/35414) | ✅ Merged | Rust 递归限制 256；测试补全 `started_at_ms` | 直接缓解 #30408 进程泄漏的触发条件 |
| 2 | [#31810 perf(core): pipeline ancestor discovery](https://github.com/openai/codex/pull/31810) | ✅ Merged | 远程项目启动时祖先发现并行化（8-request lookahead → 批量） | 显著降低大型仓库冷启动延迟 |
| 3 | [#35359 Handle exec-server network policy requests in the client](https://github.com/openai/codex/pull/35359) | ✅ Merged | 客户端侧处理网络策略请求（验证/路由/允许/拒绝/询问），并发上限+失败关闭 | 增强沙箱网络隔离安全性，配合 MCP 生态 |
| 4 | [#31582 Expose thread-selected skills from skills/list](https://github.com/openai/codex/pull/31582) | ✅ Merged | `skills/list` 返回线程选中的执行器技能 + 环境不可用警告 | 解决多环境切换时技能可见性不一致 |
| 5 | [#30228 Notify clients when thread-selected skills change](https://github.com/openai/codex/pull/30228) | ✅ Merged | 技能变更失效通知机制（就绪/恢复/失败/目录差异） | 修复客户端缓存陈旧导致的工具调用报错 |
| 6 | [#29845 Plumb explicit application paths through Windows launchers](https://github.com/openai/codex/pull/29845) | ✅ Merged | Windows 统一执行路径显式传递（`WindowsProcessLaunch`） | 为修复 #29365 `apply_patch.bat` 解析错误铺路 |
| 7 | [#31782 Bound stdio JSON-RPC frame size](https://github.com/openai/codex/pull/31782) | ✅ Merged | 64 MiB 帧上限，防止恶意/异常服务器 OOM | 增强 stdio 传输层鲁棒性 |
| 8 | [#35363 Include item start times in completion events](https://github.com/openai/codex/pull/35363) | ✅ Merged | `ItemCompletedEvent` 新增可选 `started_at_ms`，兼容旧事件 | 便于精细化性能分析与计费审计 |
| 9 | [#35364 Bound Code Mode metadata compatibility headers](https://github.com/openai/codex/pull/35364) | ✅ Merged | 移除直连头中的无界工具名映射，仅保留规范头 | 防止 HTTP/WS 头膨胀触发中间件拦截 |
| 10 | [#35280 Skip plugin MCP filtering when no allowlists configured](https://github.com/openai/codex/pull/35280) | ✅ Merged | 无 `mcp_servers` 允许列表时跳过过滤；显式空列表仍视为 deny-all | 降低插件开发者配置误判率 |

> 其余 4 个 PR（`#35408` `#35375` `#35365` `#31817`）均为 UI/工程化小幅修复或自动化更新，暂不展开。

---

## 5. 功能需求趋势（从全量 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 | 备注 |
|----------|------------|--------------|------|
| **远程/SSH 开发原生支持** | #10450 (690 👍) | ⭐⭐⭐⭐⭐ | 头部需求，虽 Closed 但极大概率纳入路线图 |
| **Windows 平台原生体验修复** | #33776, #33483, #25453, #26478, #30749, #34133, #35352 | ⭐⭐⭐⭐ | 7 个高热 Issue 同期聚集，迁移回归期典型特征 |
| **MCP 资源治理（进程/内存/递归/网络）** | #30408, #11324, #35414, #35359, #35280 | ⭐⭐⭐⭐ | PR 密集合并，架构层面系统性治理已启动 |
| **VS Code 扩展稳定性** | #35058, #35162, #35240 | ⭐⭐⭐ | macOS/Win 双平台崩溃/认证失败，阻断 IDE 工作流 |
| **模型/工具链兼容性跟进** | #31864, #30132 | ⭐⭐⭐ | 新模型发布即暴露协议不匹配，需建立回归矩阵 |
| **上下文/压缩机制优化** | #23257, #35226, #33235 | ⭐⭐ | 长会话 Token 爆炸、重复读取、图片上下文继承 |
| **无障碍/国际化/细节体验** | #34211, #32195, #33440 | ⭐⭐ | 屏幕阅读器、用量透出、TUI 对比度等长尾需求 |

---

## 6. 开发者关

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-26

---

## 1. 今日速览
- **夜ly 版本发布**：v0.54.0-nightly.20260726 发布，包含 v0.53.0 预览版与 v0.52.0 正式版的变更日志生成。
- **核心稳定性修复**：多个高优先级 PR 修复了 Shell 命令输出无上限导致的 Token 浪费、MCP OAuth 刷新失败、Ripgrep 路径解析兼容性及 CI 发布流程卡顿问题。
- **Agent 子系统持续迭代**：社区高度关注 Subagent 状态上报错误、Generalist Agent 卡死、Browser Agent Wayland 兼容性及 Auto Memory 机制优化等核心体验问题。

---

## 2. 版本发布
### v0.54.0-nightly.20260726.g3818efbbf
- **发布时间**：2026-07-26
- **主要变更**：
  - 自动生成 v0.53.0-preview.0 与 v0.52.0 变更日志（由 `gemini-cli-robot` 提交）。
  - 版本号从 `0.54.0-nightly.20260722` 递增。
- **链接**：[Release #28536](https://github.com/google-gemini/gemini-cli/pull/28536)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 重要性 & 社区反应 |
|---|-------|----------|-------------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 恢复机制缺陷**：`codebase_investigator` 在触及 `MAX_TURNS` 限制时仍上报 `status: "success"` / `GOAL`，掩盖了中断事实。 | **P1/🔒 Maintainer Only**，12 条评论，2 👍。阻碍可靠的多 Agent 编排与调试。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist Agent 永久挂起**：延迟至 Generalist Agent 时无限等待（甚至 1 小时），禁用 Subagent 可规避。 | **P1**，8 条评论，8 👍。严重影响默认工作流可用性。 |
| 3 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **组件级评测体系建设**：跟进 #15300，已产出 76 个行为评测用例，覆盖 6 支持模型，需工程化落地。 | **P1/Epic**，7 条评论。关乎模型能力量化与回归防护。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST 感知工具价值评估**：探索 AST 级读取/搜索/映射是否能减少轮次、降低 Token 噪声。 | **P2/Epic**，7 条评论，1 👍。关联长上下文与工具效率优化方向。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **技能/Subagent 利用率低**：模型极少主动调用自定义 Skill 或 Subagent，需显式指令。 | **P2**，6 条评论。影响扩展生态激活率。 |
| 6 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 低信噪会话无限重试**：提取 Agent 跳过低价值会话不标记“已处理”，导致反复入队。 | **P2**，5 条评论。后台内存系统资源浪费隐患。 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 执行完成仍卡在 "Waiting input"**：简单命令结束后 CLI 仍显示等待用户输入，实际已完成。 | **P1/Core**，4 条评论，3 👍。交互层状态机异常，高频用户痛点。 |
| 8 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser Agent 锁恢复增强**：持久化模式下遇到 Profile 锁即报错退出，建议自动接管/恢复。 | **P3/Feature**，4 条评论。浏览器自动化鲁棒性需求。 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser Agent 在 Wayland 下失败**：终止原因为 `GOAL` 但实则异常退出。 | **P1/Agent/Browser**，4 条评论，1 👍。Linux 桌面兼容性阻断。 |
| 10 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory 脱敏时机与日志风险**：脱敏发生在模型上下文注入后，服务端可能泄露原始技能/会话日志。 | **P2/Security**，4 条评论。安全合规硬性要求。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 |
|---|----|------|----------|------|
| 1 | [#28536](https://github.com/google-gemini/gemini-cli/pull/28536) | **Release** | 夜ly 版本号递增至 `0.54.0-nightly.20260726` | Open |
| 2 | [#28535](https://github.com/google-gemini/gemini-cli/pull/28535) | **Fix/Perf** | 性能测试全局配置改用 `resolveRipgrepPath()` 替代已移除的 `canUseRipgrep()`，修复测试失败 | Open (P1) |
| 3 | [#28534](https://github.com/google-gemini/gemini-cli/pull/28534) | **Fix/CI** | 夜ly 发布流程增加 `staging-tmp` dist-tag 移除重试逻辑，解决 npm 传播延迟导致的发布失败 | Open (P1) |
| 4 | [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Fix/Security** | MCP OAuth 刷新使用存储的 `client_id`，修复动态注册场景下刷新失败并删除凭证导致的强制重新认证 | Open (P1) |
| 5 | [#28401](https://github.com/google-gemini/gemini-cli/pull/28401) | **Fix/Core** | Shell 工具输出增加上限，防止超大命令输出（如 `find /`）注入模型上下文造成 Token 滥用与响应劣化 | Open (P1) |
| 6 | [#28442](https://github.com/google-gemini/gemini-cli/pull/28442) | **Refactor/Main** | 大型重构/主分支同步，细节待补充 | Open (P1, XL) |
| 7 | [#28435](https://github.com/google-gemini/gemini-cli/pull/28435) | **Feat/Infra** | `pr-generator-core`：新增环境配置解析、命令执行器、GitHub REST 客户端、ANSI 预检过滤，奠定 SSR Pipeline 基建 | Open (L) |
| 8 | [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) | **Feat/Infra** | `pr-generator-orchestrator`：实现迭代式修复状态机、容器 Worker 入口、Firestore 并发锁、ESLint 集成、Diff 限制校验 | Open (XL) |
| 9 | [#28434](https://github.com/google-gemini/gemini-cli/pull/28434) | **Feat/Infra** | `pr-generator-agent`：引入 Antigravity Agent Runner 与提示词模板，驱动代码生成→质量保证→反馈优化闭环 | Open (L) |
| 10 | [#28432](https://github.com/google-gemini/gemini-cli/pull/28432) | **Feat/Infra** | `pr-generator-db`：Firestore 双锁并发控制、文档 ID 解析、生命周期状态机、测试数据导入工具 | Open (L) |

> **关闭的重要修复**：[#28353](https://github.com/google-gemini/gemini-cli/pull/28353) (A2A Server 路径遍历防御)、[#28348](https://github.com/google-gemini/gemini-cli/pull/28348) (MaxListenersExceededWarning 与 Windows 无限认证循环) 已于昨日合并。

---

## 5. 功能需求趋势（从 50 个 Issues 提炼）

1. **Agent 编排与可靠性** (高频)  
   - Subagent 状态上报真实性、Generalist/Browser Agent 卡死/兼容性、技能自主发现与调用、任务追踪器原生化。
2. **上下文与 Token 效率** (高频)  
   - AST 感知工具、Shell 输出截断、Auto Memory 去噪/隔离、长会话压缩策略。
3. **评测与可观测性体系** (上升)  
   - 行为评测用例规模化 (#24353)、Subagent 轨迹可视化/分享 (#22598)、Bug Report 含子会话上下文 (#21763)。
4. **安全与合规加固** (持续)  
   - Auto Memory 脱敏前置 (#26525)、A2A 路径遍历防御 (#28353)、MCP OAuth 强化 (#28481)。
5. **基础设施自动化 (SSR Pipeline)** (新兴)  
   - Issue→PR 自动化生成管道：核心库、编排器、Agent、DB、Cloud Run/Workflows 全链路落地 (#28431-#28435)。
6. **终端交互体验** (长尾)  
   - Resize 无闪烁渲染 (#21924)、外部编辑器返回刷新 (#24935)、转义字符处理 (#22466)。

---

## 6. 开发者关注点（痛点与高频诉求）

| 痛点 | 代表 Issue/PR | 影响面 | 期望方向 |
|------|---------------|--------|----------|
| **Subagent “虚假成功”掩盖中断** | #22323 | 多 Agent 工作流信任度 | 终止原因枚举细化 + 强制上报真实状态 |
| **Generalist Agent 无响应挂起** | #21409 | 默认用户首秀体验 | 超时熔断 + 降级策略 + 可观测日志 |
| **Shell 大输出撑爆上下文** | #25166, #28401 | Token 成本 & 模型推理质量 | 流式截断 + 智能摘要 + 用户可配额 |
| **Auto Memory 噪音与安全** | #26522, #26523, #26525 | 后台资源消耗 & 数据泄露风险 | 显式丢弃/隔离机制 + 脱敏前置 + 审计日志 |
| **Browser Agent 平台碎片化** | #21983, #22232, #22267 | Linux/Wayland 用户可用性 | Profile 锁自动恢复 + 配置下发修复 + 无头模式兜底 |
| **技能/Subagent 发现机制失效** | #21968, #20079 | 扩展生态激活率 | 语义化注册表 + 主动推荐 + 符号链接支持 |
| **发布工程化稳定性** | #28534, #28348 | 夜ly/稳定版交付效率 | CI 幂等重试 + 事件驱动发布 + 跨平台验证 |

---

> **下一步关注**：SSR Pipeline (Issue-to-PR 自动化) 相关 PR (#28431-#28435) 是否进入审核主干，将标志着 Gemini CLI 向“自我进化代码库”迈出关键一步。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-26

---

## 1. 今日速览
今日无新版本发布。社区活跃度高，**18 个 Issue 在过去 24 小时内更新**，核心矛盾集中在 **大型 Session 恢复内存暴涨（OOM）**、**配置回写导致静默覆盖**、**插件市场持久化失效** 等严重回归问题。此外，终端渲染滚动、技能加载上限、SSH 别名识别等易用性缺陷持续发酵。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 重要性 & 社区反响 | 链接 |
|---|-------|----------|-------------------|------|
| 1 | **#4251** `[area:sessions]` **大型 Session 恢复 OOM / 单核跑满 70 分钟（1.0.74 回归）** | 1.0.74 版本导致长期大 Session 恢复峰值内存较 1.0.73 暴涨 3–4×，直接 OOM 或长时间卡死。 | 🔴 **P0 级回归** —— 影响核心可用性阻断，👍 0 但描述极其详尽，含 A/B 对比数据，亟需回滚或热修复。 | [#4251](https://github.com/github/copilot-cli/issues/4251) |
| 2 | **#4252** `[area:sessions, area:models, area:configuration]` **退出时回写启动时 `model` 覆盖最新配置（自增式污染）** | 交互式 Session 退出时将启动时的 `model` 写回 `settings.json`，覆盖其他 Session 或手工修改的新值。 | 🔴 **数据一致性缺陷** —— 静默覆盖导致配置漂移，难以排查，影响所有多 Session 用户。 | [#4252](https://github.com/github/copilot-cli/issues/4252) |
| 3 | **#4246** `[area:sessions]` **`archive_session` 超时 60s 留下孤立 worktree 占用磁盘** | 大仓库归档超时导致 worktree 残留，无法安全恢复，消耗大量磁盘空间。 | 🟠 **高风险运维问题** —— 无恢复路径，磁盘泄漏，阻塞分支复用。 | [#4246](https://github.com/github/copilot-cli/issues/4246) |
| 4 | **#4183** `[area:context-memory, area:models]` **自动压缩无法防 CAPI 5 MB 请求体限制导致永久不可调用** | 长会话工具历史累积触发 5 MB 硬限制，自动压缩机制未覆盖此场景，导致会话“软死锁”。 | 🟠 **架构级限制** —— 👍 10，社区关注度高，需协议层或分片方案。 | [#4183](https://github.com/github/copilot-cli/issues/4183) |
| 5 | **#2205** `[area:terminal-rendering]` **鼠标滚动失效：滚动历史变为遍历输入历史（Terminator 等终端）** | 近期版本破坏鼠标滚动行为，`--no-mouse` 也无法屏蔽此行为。 | 🟡 **易用性回归** —— 👍 14、评论 13，终端重度用户痛点。 | [#2205](https://github.com/github/copilot-cli/issues/2205) |
| 6 | **#1464** `[area:installation]` **技能加载受 Token 限制仅显示前 32 个，字母序靠后技能永不被选中** | 63 个技能时系统提示仅注入前 32 个，导致后排技能模型不可见。 | 🟡 **功能失效** —— 👍 5，技能生态扩展受阻，需分页/检索机制。 | [#1464](https://github.com/github/copilot-cli/issues/1464) |
| 7 | **#1996** `[area:plugins, area:installation]` **官方 Anthropic 插件市场安装失败：`marketplace.json` Schema 校验错误** | `plugins.56.source` 字段不符合 Schema，导致官方市场不可用。 | 🟡 **生态阻塞** —— 官方插件装不上，影响跨模型工作流。 | [#1996](https://github.com/github/copilot-cli/issues/1996) |
| 8 | **#4247** `[area:plugins]` **`plugin marketplace add` 报成功实则未持久化，`list` 即不见** | 注册信息仅驻留内存，重启或同链后续命令即丢失。 | 🟡 **数据丢失** —— 核心 CLI 契约失效，信任度受损。 | [#4247](https://github.com/github/copilot-cli/issues/4247) |
| 9 | **#4248** `/pr` **不识别 SSH Host Alias（`~/.ssh/config` 别名）导致误判非 GitHub 仓库** | 远程 URL 为 `git@github-alias:org/repo` 时判定失败。 | 🟢 **兼容性缺口** —— 企业/多账号开发者常用模式被拦截。 | [#4248](https://github.com/github/copilot-cli/issues/4248) |
| 10 | **#4241** `[area:tools]` **密码脱敏功能反导致 Agent 反复读取原始字节、陷入循环消耗 Token** | 脱敏后 Agent 误判为问题，用 Python 读原文件绕过脱敏，形成死循环。 | 🟢 **Agent 行为异常** —— 安全功能副作用，Token 浪费严重。 | [#4241](https://github.com/github/copilot-cli/issues/4241) |

> **其它关闭/无效 Issue**：#17（IDE diff 集成已关闭）、#4254/4240/4245（无效/垃圾信息）、#4255（非技术内容）、#4253（`/ask` 无输出，新建待复现）。

---

## 4. 重要 PR 进展
本周期仅 2 个 PR 更新，**均已关闭**，无合入主干的功能性变更。

| # | PR | 状态 | 说明 | 链接 |
|---|----|------|------|------|
| 1 | **#4228** `Withdrawn: incorrect scope for #3534` | **CLOSED (Withdrawn)** | 作者误改文档而非私有剪贴板运行时实现，源分支已删。 | [#4228](https://github.com/github/copilot-cli/pull/4228) |
| 2 | **#23** `Create monad.yml` | **CLOSED** | 早期实验性配置，无实质代码变更。 | [#23](https://github.com/github/copilot-cli/pull/23) |

> **提示**：当前无打开中的功能性 PR，建议关注后续针对 #4251、#4252、#4246 的热修复 PR。

---

## 5. 功能需求趋势（从 Issue 聚类分析）

| 趋势方向 | 代表 Issue | 社区呼声 |
|----------|------------|----------|
| **大 Session 生命周期稳健性** | #4251 (OOM)、#4252 (配置污染)、#4246 (归档超时)、#4183 (5MB 硬限制) | ⭐⭐⭐⭐⭐ 核心痛点，阻断长任务 |
| **插件/市场生态完善** | #1996 (Schema 校验)、#4247 (持久化失效)、#1464 (技能截断) | ⭐⭐⭐⭐ 扩展性基建薄弱 |
| **终端/IDE 集成体验** | #2205 (滚动回归)、#4244 (VS Code `/rename` 缺失)、#4248 (SSH 别名) | ⭐⭐⭐ 日常交互摩擦 |
| **Agent 行为可控性** | #4241 (脱敏副作用)、#4253 (`/ask` 静默失败) | ⭐⭐ 信任度与可预测性 |
| **配置/状态管理一致性** | #4252 (回写覆盖)、#4249 (Plan 指示器泄漏) | ⭐⭐ 多实例协作隐患 |

---

## 6. 开发者关注点总结

1. **1.0.74 版本信任度危机**：#4251 与 #4252 同天曝光，分别指向**内存管理**与**配置持久化**两大核心模块的严重回归，开发者担心自动升级导致生产环境瘫痪，呼吁提供**降级通道**或**LTS 标签**。
2. **长会话“软硬限制”双重夹击**：Token 上下文窗口未满即触发 CAPI 5 MB 体积上限（#4183），且自动压缩不生效，导致会话不可挽回地“卡死”，需官方给出**分片/流式请求**或**增量压缩**路线图。
3. **插件市场“半成品”感强**：官方市场装不上（#1996）、手动添加不持久化（#4247）、技能截断不可见（#1464），三大问题叠加，严重打击扩展生态建设信心。
4. **多实例/多会话状态隔离失效**：配置回写覆盖（#4252）、Plan 指示器泄漏（#4249）、归档孤儿 worktree（#4246）均指向**进程间状态同步机制缺失**，亟需中心化状态存储或锁机制。
5. **终端原生体验细节打磨滞后**：鼠标滚动回归（#2205）持续 4 月未修，SSH 别名识别（#4248）属基础兼容性缺口，反映**终端交互测试覆盖不足**。

---

**📌 明日关注建议**：  
- 监控是否针对 #4251 / #4252 发布 **1.0.75 热修复** 或 **回滚指引**  
- 关注 `archive_session` 超时机制 (#4246) 与 CAPI 5MB 限制 (#4183) 的架构级 RFC  
- 插件市场 Schema 校验 (#1996) 与持久化 (#4247) 修复进度  

---  
*数据来源：github.com/github/copilot-cli | 报告生成时间：2026-07-26 08:00 UTC*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-26

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：过去 24 小时

---

## 1. 今日速览
- **无新版本发布**，核心维护者 `Nas01010101` 集中合并了 3 个关键修复 PR（#2520, #2519, #2518），解决了 **会话 Fork/Undo 上下文截断错位**、**恢复会话系统提示词失效**、**Web 端文件重复上传** 三个高影响力稳定性问题。
- 社区提出 **“远程控制/跨设备续接会话”** 需求（#1282）持续升温（👍16），体现用户对工作流连续性的强烈诉求。
- 新增 **死循环严重 Bug 报告**（#2557，v1.44.0），需紧急排查阻塞性问题。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues

| # | 标题 | 类型 | 热度/反应 | 核心诉求与影响 |
|---|---|---|---|---|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **Feature Request: Remote Control - Continue local sessions from any device** | Enhancement | 👍 16 · 评论 8 · 持续跟进中 | **跨设备会话无缝迁移**。用户期望在手机/浏览器上接管本地 CLI 会话，保留完整环境上下文。这是“本地优先”向“云原生协作”延伸的关键特性，社区呼声高，架构挑战大（状态同步、终端渲染、鉴权）。 |
| [#2557](https://github.com/MoonshotAI/kimi-cli/issues/2557) | **Dead Loop** | Bug | 👍 0 · 评论 0 · 新建即关注 | **v1.44.0 严重阻塞性缺陷**。用户反馈在 Kimi Code 订阅下触发死循环，导致 CLI 无响应。虽无复现细节，但版本明确，优先级应定为 **P0/Critical**，建议立即复现并回滚或热修复。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 作者 | 核心修复/功能 | 关联 Issue |
|---|---|---|---|---|---|
| [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520) | **fix(session): align fork/undo context truncation to wire turns** | **CLOSED** (已合并) | Nas01010101 | **核心会话逻辑修复**。统一 Fork/Undo 时的上下文截断逻辑至 `wire turns`，修复 slash command 导致的 undo 切分偏移，并补充回归测试。解决历史不一致根因。 | #2517, #1974, #2049 |
| [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519) | **fix(app): refresh stale frozen system prompt on session resume** | **CLOSED** (已合并) | Nas01010101 | **会话恢复机制增强**。恢复会话时不再沿用 `context.jsonl` 冻结的旧 `_system_prompt`，改为动态加载最新技能（`~/.kimi/skills/`）与 `AGENTS.md`，保证配置即时生效。 | #2420 |
| [#2518](https://github.com/MoonshotAI/kimi-cli/pull/2518) | **fix(web): persist uploads .sent marker so restarts do not re-send files** | **CLOSED** (已合并) | Nas01010101 | **Web 端文件上传幂等性修复**。引入 `.sent` 标记持久化，防止服务重启导致历史文件/图片重复发送污染上下文。 | #2413 |
| [#2558](https://github.com/MoonshotAI/kimi-cli/pull/2558) | **fix(tests): improve Windows cross-platform test compatibility** | **OPEN** | panandicoding | **Windows 兼容性建设**。修复 `test_background_tools.py` 中 `Path.write_text()` 缺 `newline=""` 导致的 CRLF 差异，以及路径分隔符断言问题，提升 CI 稳定性。 | N/A |

> **合并趋势**：今日合并的 3 个 PR 均由核心成员 `Nas01010101` 主导，聚焦 **会话状态一致性** 与 **持久化可靠性**，体现项目当前“强化基础设施稳定性”的迭代节奏。

---

## 5. 功能需求趋势

从现有 Issue 与 PR 反映的社区关注点提炼：

1.  **会话跨端流转与远程协作**（高优）
    *   #1282 “Remote Control” 获得 16 👍，用户希望 **手机/浏览器接管本地终端会话**，保留环境变量、文件句柄、历史记录。这指向 **WebSocket 实时同步 + 终端渲染流式传输 + 端到端加密** 的架构演进。
2.  **会话状态的持久化一致性**（高优，内驱）
    *   #2520、#2519、#2518 连续修复 Fork/Undo、System Prompt 刷新、文件上传幂等，暴露出 **`context.jsonl` 单文件状态模型在并发、重启、跨版本升级下的脆弱性**。社区隐性需求：更健壮的会话存储引擎（如 SQLite/WAL、事件溯源）。
3.  **跨平台工程化质量**（中优，内驱）
    *   #2558 修复 Windows 测试 CRLF 与路径问题，反映 **CI/CD 矩阵覆盖不足**，开发者期望 “Windows 一等公民” 体验。

---

## 6. 开发者关注点与痛点

| 痛点/需求 | 证据来源 | 影响面 | 建议行动 |
|---|---|---|---|
| **v1.44.0 疑似引入死循环回归** | #2557 (新建) | 所有 Kimi Code 订阅用户 | **立即建立复现脚本**，若确认为核心循环逻辑缺陷，考虑发布 `v1.44.1` 热修复版。 |
| **会话恢复后技能/AGENTS.md 不生效** | #2519 (已修复) | 长期会话重度用户 | 已合并，建议在 Changelog 显性标注 “Resume session now hot-reloads skills & AGENTS.md”。 |
| **Web 端重启导致文件/图片重复上传污染上下文** | #2518 (已修复) | `kimi web` 用户 | 已修复，建议补充 E2E 测试覆盖 “Server Restart -> Re-prompt” 场景。 |
| **Fork/Undo 后历史上下文错位、Slash 命令干扰撤销栈** | #2520 (已修复) | 复杂交互流用户 | 已修复并加回归测试，建议审视 `wire turns` 与 `context turns` 映射模型的通用性。 |
| **跨设备无缝编码工作流缺失** | #1282 (高赞) | 移动办公/多设备开发者 | **纳入路线图**：可先实现 “只读观察模式” -> “只读+指令下发” -> “全交互 PTY 转发” 三阶段交付。 |
| **Windows 原生体验缺陷** | #2558 (进行中) | Windows 开发者 | 持续补齐测试矩阵，引入 `windows-latest` CI 必检，治理路径分隔符、换行符、信号处理差异。 |

---

## 📌 给维护团队的行动建议
1.  **P0 响应 #2557**：指派人员在 4 小时内完成分流与复现，必要时回滚 v1.44.0 关键变更或发布回退版本。
2.  **里程碑规划 #1282**：将 “Remote Control” 列入 Q3/Q4 规划，启动技术预研（PTY over WebRTC/WebSocket、会话状态 CRDT/OT 同步）。
3.  **技术债偿还**：围绕 `context.jsonl` 状态模型发起重构 RFC，引入版本化、校验和、增量快照机制，从根源消除 #2517/1974/2049/2420/2413 类问题。
4.  **CI 门禁强化**：合并 #2558 后，强制要求 `windows-latest` 通过才能合入主干，新增 `test_session_persistence` 与 `test_cross_platform_paths` 套件。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-26

---

## 1. 今日速览

- **核心痛点集中爆发**：v1.18.5 桌面版发布后引发大量回归报告，涉及 CPU 飙升、项目加载失败、TUI 输入失效、关闭项目冻结等阻塞性问题，社区情绪明显不满。
- **V2 架构与 TUI 稳定性成双重焦点**：长生命周期 V2 服务器内存泄漏、TUI 重渲染黑块遮挡、消息 ID 排序假导致死循环等深层架构缺陷浮现。
- **服务端可用性波动**：7 月 25 日 15:53 UTC 起托管模型大面积报 500/超时/503，多用户反馈“Internal Server Error”，疑似服务端事故。

---

## 2. 版本发布

> 过去 24 小时无新 Release。当前最新稳定版为 **Desktop v1.18.5**，但该版本引入多个严重回归，建议用户暂缓升级或关注热修复。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 热度 | 重要性 |
|---|-------|--------|------|--------|
| 1 | [#30086 High CPU usage in newer versions](https://github.com/anomalyco/opencode/issues/30086) | 近 7 天版本导致 CPU 激增，10 并发降至 3 即卡死，鼠标延迟严重 | 36 评论 · 19 👍 | 🔴 **P0 阻塞性性能回归** |
| 2 | [#37012 Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012) | 新版布局导航层级加深、工作区易用性下降，31 👍 强烈呼吁保留旧版选项 | 33 评论 · 31 👍 | 🟠 **UX 重大倒退，社区共识强** |
| 3 | [#38789 Desktop v1.18.5: UnsupportedContentType on project reload](https://github.com/anomalyco/opencode/issues/38789) | 升级后启动即报错 `UnsupportedContentType`，源自生成式 SDK 兼容性缺失 | 7 评论 | 🔴 **新版本安装即坏，首启动阻塞** |
| 4 | [#31217 TUI prompt input fail on Enter](https://github.com/anomalyco/opencode/issues/31217) | 输入框回车吞字不提交，中英输入法均复现，斜杠命令正常 | 6 评论 · 1 👍 | 🔴 **核心交互失效，TUI 不可用** |
| 5 | [#38801 "exiting loop" message](https://github.com/anomalyco/opencode/issues/38801) | 反复出现 `exiting loop` 导致会话中断，多种 OpenAI 兼容 API 均受影响 | 6 评论 | 🟠 **循环逻辑缺陷，稳定性受损** |
| 6 | [#38791 Run loop never exits with non-time-sortable message IDs](https://github.com/anomalyco/opencode/issues/38791) | `SessionPrompt.runLoop` 用字符串比较 message ID 判断轮次结束，导入会话 ID 非时间序即死循环至 400 | 3 评论 | 🔴 **架构假设过强，数据迁移/导入场景全坏** |
| 7 | [#36677 V2 server persistent allocation loop](https://github.com/anomalyco/opencode/issues/36677) | 长驻 V2 服务器空闲时持续占 1 核 CPU + 1.1–1.3 GB RSS，疑似 JS 分配热循环 | 3 评论 | 🟠 **V2 生产可用性隐患，内存泄漏** |
| 8 | [#38844 Close button freezes UI](https://github.com/anomalyco/opencode/issues/38844) | 首页点击项目关闭按钮即冻结，无法点击任何控件 | 3 评论 | 🔴 **桌面端基础交互损坏** |
| 9 | [#34442 Windows installer broken offline: ripgrep not bundled](https://github.com/anomalyco/opencode/issues/34442) | 离线环境核心工具 (`grep`/`glob`/`skill`) 全挂，内置技能 `customize-opencode` 也失效 | 2 评论 · 3 👍 | 🟠 **企业/气隙环境交付受阻** |
| 10 | [#38874 Multiple managed models failing (Jul 25)](https://github.com/anomalyco/opencode/issues/38874) | 免费/Go 套餐全系模型 500/超时/503，持续至报告时，疑似服务端事故 | 2 评论 | 🔴 **SLA 级服务中断，影响全量云用户** |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 |
|---|----|------|----------|------|
| 1 | [#38906 feat: TUI 启动进度条](https://github.com/anomalyco/opencode/pull/38906) | 新功能 | 增加终端/设置/工作区/主题/插件分阶段启动进度，解决“启动假死”感知 | Open |
| 2 | [#38433 feat: `roll-call` 命令](https://github.com/anomalyco/opencode/pull/38433) | 新功能 | 新增 `opencode roll-call` 探测文本模型连通性与延迟，便于诊断模型可用性 | Open |
| 3 | [#36550 fix: TUI question 模式键盘死锁](https://github.com/anomalyco/opencode/pull/36550) | Bug 修复 | 修复 `QuestionPrompt` 双 `useBindings` 互斥条件导致的焦点/输入死锁，关联 #36382 #30517 | Open |
| 4 | [#29789 feat: Dynamic workflows (Claude Code parity)](https://github.com/anomalyco/opencode/pull/29789) | 新功能 | 引入项目级工作流，支持 `/workflow <name> arg=value` 运行与 `/workflows` 审查，对标 Claude Code | Open |
| 5 | [#38903 feat: ChatGPT OAuth 推理端点可配置](https://github.com/anomalyco/opencode/pull/38903) | 新功能 | 将硬编码 `chatgpt.com/backend-api/codex/responses` 改为 `codexApiEndpoint` 选项，支持自托管/代理 | Open |
| 6 | [#33927 fix: VCS 千级 untracked 文件崩溃](https://github.com/anomalyco/opencode/pull/33927) | Bug 修复 | 解决大量未跟踪文件导致的 VCS 层崩溃，提升大型单仓稳定性 | Closed |
| 7 | [#33925 feat: 加载原生 provider 包](https://github.com/anomalyco/opencode/pull/33925) | 重构 | 统一 provider 配置/目录/模型/变体为扁平 schema，兼容 legacy AI SDK 格式 | Closed |
| 8 | [#38200 feat: Solidity 语法高亮](https://github.com/anomalyco/opencode/pull/38200) | 新功能 | 新增 `.sol` 文件类型识别与高亮，面向智能合约开发者 | Open |
| 9 | [#33943 fix: 恢复时间轴滚动位置](https://github.com/anomalyco/opencode/pull/33943) | Bug 修复 | 会话标签切换/重载时保留虚拟行与视口偏移，支持向上加载历史 | Closed |
| 10 | [#33904 fix: 忽略裸 `/` 斜杠自动补全提交](https://github.com/anomalyco/opencode/pull/33904) | Bug 修复 | 防止单独输入 `/` 后回车误触发 `/agents`，优化 TUI 斜杠命令交互 | Closed |

---

## 5. 功能需求趋势（社区高频呼声）

| 趋势方向 | 代表 Issue/PR | 核心诉求 |
|----------|--------------|----------|
| **性能与资源占用优化** | #30086, #36677 | CPU/内存泄漏、并发会话数锐减、长驻进程异常分配 |
| **TUI 稳定性与交互体验** | #31217, #38773, #36550, #38906 | 输入吞字、渲染黑块、键盘死锁、启动无反馈 |
| **桌面端基础可用性** | #38789, #38844, #38885, #37534 | 项目加载报错、关闭冻结、切项目不刷新、UI 直观度下降 |
| **离线/气隙环境支持** | #34442 | 内置 ripgrep、核心工具离线可用、企业交付就绪 |
| **模型兼容与自托管** | #32613, #38854, #38903 | 非标准 API (MiMo/Ollama) 适配、ChatGPT OAuth 

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-26

---

## 1. 今日速览
**核心动态**：Pi 发布 **v0.82.1**，重点新增 **Claude Opus 5** 支持（含 Bedrock 自适应思考、推理配置、提示缓存），并修复了多个 TUI 渲染崩溃与高 CPU 占用的关键性能问题。社区高呼声 Issue 集中在 **Compaction（上下文压缩）可靠性**、**模型切换时的上下文校验**、**WSL/跨平台路径处理** 以及 **Headless 环境下的认证流程** 改进。扩展生态迎来重大增强：新增耐久化外部工具结果机制与上下文清理回调，为复杂 Agent 编排奠定基础。

---

## 2. 版本发布
### **v0.82.1** 
- **新模型支持**：**Claude Opus 5** 现已在 Anthropic API 与 Amazon Bedrock 可用，支持自适应思考（含 `xhigh`）、推理配置、提示缓存。详见 [Providers 文档](https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/docs/providers.md#api-keys)。
- **隐含修复**：同步修复了 v0.82.0 引入的 `bash` 工具验证错误回归（#7069）、依赖 `brace-expansion@5.0.7` 的 CVE-2026-14257 安全漏洞（#7090）及 llama.cpp 启动时模型选择的竞态条件（#6948）。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 核心内容 | 关注理由 |
|---|-------|------|----------|----------|
| 1 | [#6768](https://github.com/earendil-works/pi/issues/6768) Compaction using Copilot Enterprise not possible | 🟢 **OPEN** | Copilot Enterprise 执行 Compaction 报 `421 Misdirected Request` (OpenAPI) 或 Anthropic 模型报错，**阻断企业级长会话使用**。 | 👍 **11** | 评论 13 | **企业级阻断级 Bug**，涉及核心压缩流程与企业身份认证兼容性。 |
| 2 | [#6665](https://github.com/earendil-works/pi/issues/6665) TUI pins a full core while streaming | 🟢 **OPEN** | 流式输出时 TUI 占满单核。热点：`Intl.Segmenter` 未缓存 + 每 chunk 重建 Markdown。`pi -ne` 即可复现。 | 评论 7 | **核心性能瓶颈**，影响所有流式交互体验，优化空间明确（缓存分段器、增量渲染）。 |
| 3 | [#4877](https://github.com/earendil-works/pi/issues/4877) Session folder collision | 🔴 **CLOSED** | 路径哈希冲突：`/a/b/c/d` 与 `/a-b/c-d` 映射为同一文件夹 `--a-b-c-d--`。 | 👍 2 | 评论 21 | 长期存在的隐患，虽标记关闭但讨论深度高，涉及会话隔离正确性。 |
| 4 | [#7020](https://github.com/earendil-works/pi/issues/7020) Sometimes Pi doesn't continue after compaction | 🟢 **OPEN** | 长会话协调场景下，Compaction 后 Agent 停止响应，需人工干预继续。 | 👍 1 | 评论 4 | **核心工作流断点**，影响长任务自动化可靠性。 |
| 5 | [#7048](https://github.com/earendil-works/pi/issues/7048) Compaction summary truncated mid-word (stopReason 'length' not checked) | 🟢 **OPEN** | 生成摘要时若触及 `length` 截断，会直接持久化半词摘要，未校验 `stopReason`。 | 评论 3 | **数据完整性风险**，导致上下文丢失关键信息。 |
| 6 | [#7064](https://github.com/earendil-works/pi/issues/7064) WSL absolute windows paths are mishandled | 🟢 **OPEN** | WSL2 下 Agent 读写工具因路径处理失败，回退至 CLI 全量写入。 | 评论 3 | **跨平台兼容性痛点**，WSL 开发者高频遭遇。 |
| 7 | [#6050](https://github.com/earendil-works/pi/issues/6050) TUI full redraw clears terminal scrollback | 🔴 **CLOSED** | 全量重绘导致终端回滚缓冲区清空，聊天记录跳回顶部。 | 评论 15 | **严重 UX 破坏**，虽关闭但根因在核心渲染器，需确认修复彻底性。 |
| 8 | [#7067](https://github.com/earendil-works/pi/issues/7067) Model switch breaks session: GPT HTML errors, Qwen enable_thinking 400 | 🔴 **CLOSED** | 中途切模型（大上下文→小上下文）导致：HTML 报错页、思考块 400、无前置校验。 | 评论 3 | **模型切换体验核心缺陷**，关联 #7065 验证需求。 |
| 9 | [#7078](https://github.com/earendil-works/pi/issues/7078) Support manual paste of localhost callback for OpenRouter login | 🔴 **CLOSED** | SSH/Headless 场景无法完成 OpenRouter OAuth 回调，需支持手动粘贴 URL（同 Claude/Codex）。 | 评论 3 | **远程开发刚需**，PR #7114 正在解决。 |
| 10 | [#7108/#7107/#7104](https://github.com/earendil-works/pi/issues/7108) Forward session-affinity headers for custom providers | 🔴 **CLOSED** | 多份重复 Issue 请求：为自定义 OpenAI/Anthropic 兼容提供商转发 `session_id` / `x-session-affinity` 头。 | 评论 1+ | **企业网关/代理场景刚需**，多用户顶贴合会话亲和性路由。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#7111](https://github.com/earendil-works/pi/pull/7111) feat: support durable external tool results | ✅ **MERGED** | 工具可返回 `defer: true`，Pi 持久化调用与待办标记，**不阻塞生成工具结果**；`AgentSession.resumeExternalToolResult` 支持外部注入结果。 | **架构级增强**：支持人工介入、长耗时异步任务、外部审批流，扩展生态关键基建。 |
| 2 | [#7118](https://github.com/earendil-works/pi/pull/7118) Expose extension context clear callback | ✅ **MERGED** | 扩展可调用上下

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-26

---

## 1. 今日速览
- **夜ly 版本发布**：v0.21.0-nightly.20260726.9d19eafa9 修复 CLI 本地时间统计并重构 autofix 逻辑。  
- **核心架构讨论热烈**：#6378 RFC“单 daemon 多工作区”已积累 30 条评论，涉及会话模型根本变更。  
- **多个高优先级 Bug 修复入库**：沙箱运行时探测（#7734）、IME 光标错位（#7711）、DashScope thinking 模式工具调用冲突（#7661）均有 PR 合并或待合并。  
- **Web Shell 功能大增强**：新增 Git 分支选择器、提交对话框、创建 PR 流程（#7731）及免会话执行 Shell 命令（#7724）。

---

## 2. 版本发布
### v0.21.0-nightly.20260726.9d19eafa9
- **fix(cli)**: 统一使用本地时间计算 insight 天/小时（@ComplexSimply, [#7670](https://github.com/QwenLM/qwen-code/pull/7670)）  
- **refactor(autofix)**: 重构自动修复扩展机制（详情见 Release Notes）  
🔗 [Release 页面](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260726.9d19eafa9)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 标签/优先级 | 评论 | 关注理由 | 链接 |
|---|------|-------------|------|----------|------|
| 1 | **RFC: Support multiple workspaces in one qwen serve daemon** | `priority/P2`, `feature`, `need-discussion`, `daemon` | 30 | 架构级变更，打破 “1 daemon = 1 workspace” 假设，影响扩展、会话隔离、资源共享 | [#6378](https://github.com/QwenLM/qwen-code/issues/6378) |
| 2 | **Sandbox runtime selected on PATH presence alone** | `priority/P2`, `bug`, `cli`, `sandbox` | 2 | **今日新增**，Docker 仅在 PATH 即被选中，即使守护进程未启动/用户无权限，导致 Podman 等可用运行时被隐藏 | [#7732](https://github.com/QwenLM/qwen-code/issues/7732) |
| 3 | **Command 模式下 statusline 多行导致输入法候选框位置偏离** | `priority/P2`, `bug`, `ui`, `macos` | 5 | macOS 中文/日文输入严重受影响，已有修复 PR #7711 | [#7684](https://github.com/QwenLM/qwen-code/issues/7684) |
| 4 | **Error code 520/522 导致无法编码** | `priority/P3`, `bug`, `integration`, `need-retesting` | 5 | 用户安装桌面版即遇到阻断性错误，需复现与定位 | [#7665](https://github.com/QwenLM/qwen-code/issues/7665) |
| 5 | **VS Code 无法连接 Unity MCP（Claude Code 可行）** | `priority/P3`, `bug`, `mcp`, `vscode` | 4 | MCP 生态兼容性缺口，影响游戏/Unity 开发者采纳 | [#7697](https://github.com/QwenLM/qwen-code/issues/7697) |
| 6 | **Subagent model grade selection at spawn time** | `priority/P3`, `feature`, `roadmap/subagents-tools` | 4 | 允许按任务复杂度动态分配模型等级，已实现 PR #7702 | [#7685](https://github.com/QwenLM/qwen-code/issues/7685) |
| 7 | **CLI 不显示 Token 用量/使用百分比** | `priority/P3`, `feature`, `token-management` | 3 | 成本可观测性缺失，用户无法监控配额 | [#7719](https://github.com/QwenLM/qwen-code/issues/7719) |
| 8 | **Feature: pinned/ memory directory（只读、免梦境合并）** | `priority/P2`, `feature`, `memory` | 3 | 保护关键上下文不被 `/dream` 覆盖，PR #7714 已实现保护逻辑 | [#6801](https://github.com/QwenLM/qwen-code/issues/6801) |
| 9 | **Skill 自动补全在连续提及多个 skill 时失效** | `priority/P2`, `bug`, `ready-for-agent` | 2 | 回归 Bug，影响技能发现效率 | [#7717](https://github.com/QwenLM/qwen-code/issues/7717) |
| 10 | **Qwen Code v0.21.0 界面每输入一字自动上滚一行** | `type/bug`, `needs-triage` | 1 | **今日新增**，提示行高度计算 off-by-one，严重影响可用性 | [#7713](https://github.com/QwenLM/qwen-code/issues/7713) |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 作者 | 状态 | 核心变更 | 关联 Issue | 链接 |
|---|------|------|------|----------|------------|------|
| 1 | **fix(web-shell): allow shell commands in new tasks without a session** | wenshao | Open | 新任务中输入 `!` 命令自动惰性创建会话，体验对齐普通消息 | — | [#7724](https://github.com/QwenLM/qwen-code/pull/7724) |
| 2 | **perf(core): Lazy-load first-use dependencies** | doudouOUC | Open | 启动路径按需加载依赖，减少冷启动开销 | — | [#7686](https://github.com/QwenLM/qwen-code/pull/7686) |
| 3 | **feat(review): redefine medium effort as a balanced verified pass** | wenshao | Open | `--effort medium` 升级为含子任务、构建/测试、验证的完整通过流程 | — | [#7733](https://github.com/QwenLM/qwen-code/pull/7733) |
| 4 | **feat(web-shell): add git branch picker, commit dialog, and create PR flow** | wenshao | Open | IntelliJ 风格分支选择器、提交对话框、创建 PR 全链路 | — | [#7731](https://github.com/QwenLM/qwen-code/pull/7731) |
| 5 | **feat(triage): add sandboxed /verify deep-verification lane** | wenshao | Open | PR 注释 `@qwen-code /verify` 触发维护者级深度验证（A/B 对比、空测试检测、无 Mock 线路证明） | — | [#7710](https://github.com/QwenLM/qwen-code/pull/7710) |
| 6 | **fix(cli): probe sandbox runtime before selecting it** | harjothkhara | Open | **修复 #7732**：运行时选择前用 `version` 探测真可用性，而非仅查 PATH | #7732 | [#7734](https://github.com/QwenLM/qwen-code/pull/7734) |
| 7 | **feat(review): mutation-test the tests in the test-coverage pass (Agent 5)** | wenshao | Open | 测试覆盖率 pass 增加变异测试，确保测试真能捕获回归 | — | [#7735](https://github.com/QwenLM/qwen-code/pull/7735) |
| 8 | **feat(core): add model grade selection for subagent spawn** | yiliang114 | Open | 实现 #7685：`agent` tool 新增 `model` 参数，支持 small/medium/high/super 语义等级映射 | #7685 | [#7702](https://github.com/QwenLM/qwen-code/pull/7702) |
| 9 | **fix(cli): keep IME cursor aligned after footer updates** | water-in-stone | Open | **修复 #7684**：多行 statusline 刷新时保持硬件光标与渲染光标对齐 | #7684 | [#7711](https://github.com/QwenLM/qwen-code/pull/7711) |
| 10 | **fix(core): avoid required tools in DashScope thinking** | hogeheer499-commits | Closed | 思考模式下不再发送 `tool_choice: "required"`，解决侧向查询 400 报错 | #7659 | [#7661](https://github.com/QwenLM/qwen-code/pull/7661) |

---

## 5.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-26

> 数据源：`github.com/Hmbown/CodeWhale` | 统计窗口：过去 24 小时（Issues 更新 50 条，PR 更新 41 条）

---

## 1. 今日速览
- **核心架构重构持续推进**：v0.9.2 里程碑下，“App 神对象”拆解（#3314）、Workflows 运行时接线（#2974）、遗留内存系统清理（PR #4455/4442/4444）同步落地，代码库向模块化、可测试方向迈进。
- **多提供商支持修复密集期**：连续修复 `model resolve/set` 逻辑仅兼容 DeepSeek（#4832、#4838）、配置校验拦截非 DeepSeek 模型（#4829）、Kimi 计费分级缺失（#4758）等阻断性 Bug，解除非 DeepSeek 提供商“裸奔”风险。
- **远程控制能力落地**：新增 `/rc` 远程控制协议宿主端（PR #4844），配合 `cwc` 浏览器端实现“浏览器驱动本地终端”，标志着协作/远程调试能力正式进入主干。

---

## 2. 版本发布
**过去 24 小时无新 Release**。当前最新稳定版为 `v0.9.1`，主干正在积累 v0.9.2 变更。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心诉求/缺陷 | 关注理由 | 社区热度 |
|---|-------|---------------|----------|----------|
| [#4520](https://github.com/Hmbown/CodeWhale/issues/4520) | **Header Token 明细可配置化** | 用户需在状态栏同时看到 input / cache hit / output 三列 token，而非仅累计值 | 直接影响成本可观测性，PR #2411 简化后引发回归诉求 | 💬 4 评论 |
| [#4831](https://github.com/Hmbown/CodeWhale/issues/4831) | **测试套件污染真实 `~/.codewhale/config.toml`** | 合并闸门 `cargo test` 两次跑出不同结果，且写入开发者真实配置 | CI 可靠性红线问题，关联 `allow_shell_save` 脆弱测试 | 💬 3 评论 |
| [#2743](https://github.com/Hmbown/CodeWhale/issues/2743) | **适配 Claude Code 技能生态** | 现有 skill-installer 转写不完美，希望原生兼容 Claude Code 技能 | 生态互通性核心需求，涉及技能市场竞争力 | 💬 3 评论 |
| [#1172](https://github.com/Hmbown/CodeWhale/issues/1172) | **支持 Plugin/Workflow 迁移** | 需要 plugin 市场、hook、skills/commands/agents 全套加载机制 | 老牌用户迁移阻滞点，关乎插件生态建设 | 💬 3 评论 |
| [#3927](https://github.com/Hmbown/CodeWhale/issues/3927) | **Onboarding 增加无提供商离线路径** | 首次运行仍强制联网/选模型，缺乏纯离线“逛逛”入口 | 新用户体验关键路径，降低试用门槛 | 💬 3 评论 |
| [#3314](https://github.com/Hmbown/CodeWhale/issues/3314) | **拆解 `App` 神对象（252 字段、4.5k 行）** | 将状态迁移至 owned submodules，提升可维护性 | 架构债偿还核心任务，v0.9.2 里程碑标志性工作 | 💬 3 评论 |
| [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) | **DeepSeek API URL 报错（冗余空格/拼写）** | `https://api.deepse ▏ ek.com/...` 导致请求失败 | 生产环境间歇性故障，提示 URL 拼装逻辑缺陷 | 💬 2 评论 |
| [#4828](https://github.com/Hmbown/CodeWhale/issues/4828) | **macOS “水下 shell” 导致 `open/osascript` 失败 (exit -54)** | v0.9.0 新 shell 破坏 macOS 进程权限，降级 v0.8.67 正常 | 平台兼容性回归，阻断 macOS 主力用户升级 | 💬 1 评论 |
| [#4833](https://github.com/Hmbown/CodeWhale/issues/4833) | **v0.9.1 浅色背景下默认文本对比度极低** | 浅色终端下正文渲染为极淡灰色，几乎不可见 | 视觉可用性缺陷，影响光标/主题自适应逻辑 | 💬 0 评论 |
| [#3905](https://github.com/Hmbown/CodeWhale/issues/3905) | **Ctrl+P 文件选择器阻塞事件循环（git status + 20k 走访）** | 同步子进程 + 全量遍历导致打开延迟严重 | 性能热点，直接影响核心交互流畅度 | 💬 0 评论 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| [#4844](https://github.com/Hmbown/CodeWhale/pull/4844) | **feat: `/rc` 远程控制宿主端** | 新功能 | 运行中会话可注册为远程受控宿主，配合 `cwc#119/120` 实现浏览器驱动终端 | 协作/远程调试/演示场景 |
| [#4843](https://github.com/Hmbown/CodeWhale/pull/4843) | **fix: Composer 高度自适应内容** | 修复 | 移除 `min_content_rows` 地板高度，输入框随内容自动伸缩 | TUI 交互体验 |
| [#4842](https://github.com/Hmbown/CodeWhale/pull/4842) | **feat: Workflow 按 Worker 遥测 & 有界载荷** | 新功能 | 补全 #2974 剩余接线：`task_completed` 携带 usage、run-record 截断 | Workflow 可观测性 |
| [#4841](https://github.com/Hmbown/CodeWhale/pull/4841) | **refactor: 移除废弃 `--no-alt-screen`** | 清理 | 删除无效兼容标志，简化入口逻辑 | 代码卫生 |
| [#4455](https://github.com/Hmbown/CodeWhale/pull/4455) | **chore: 清理遗留 memory push/inject** | 重构 | 移除 `UserMemory`/`ConfigEnabled` 等旧内存通路，配合 Moraine 回忆系统 | 内存子系统统一 |
| [#4442](https://github.com/Hmbown/CodeWhale/pull/4442) | **refactor: 移除 `refresh_system_prompt` 遗留内存块** | 重构 | 系统提示词构建不再拼装旧内存，改用 `PromptSessionContext.user_memory_block = None` | 提示词工程简化 |
| [#4743](https://github.com/Hmbown/CodeWhale/pull/4743) | **fix: 非流式请求不再受 45s SSE 超时限制** | 修复 | `codewhale exec` 非流式长生成不再误报超时 | CLI 可靠性 |
| [#4722](https://github.com/Hmbown/CodeWhale/pull/4722) | **fix: 编辑预览详情页显示完整 diff** | 修复 | 审批卡片保持紧凑，Alt+V 懒加载完整 `+/-` 预览 | 代码审阅体验 |
| [#4756](https://github.com/Hmbown/CodeWhale/pull/4756) | **fix: 合格 MCP 工具调用失败不重试** | 修复 | 修正重试策略：仅对 lookup miss 重解析，qualified 失败即返回 | MCP 稳定性 |
| [#4839](https://github.com/Hmbown/CodeWhale/pull/4839) | **docs: 纳入 TUI 本地化包进 `LOCALIZATION.md` 并加 CI 门禁** | 文档/工程 | 补全最大翻译面（TUI locales）文档，CI 防漂移 | 国际化治理 |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

1. **多提供商/模型生态平权**  
   - 高频：非 DeepSeek 提供商的模型解析、配置校验、计费分级、技能迁移（#4832、#4838、#4829、#4758、#2743、#1172）  
   - 信号：社区正从 “DeepSeek 专用” 向 “通用 Agent 客户端” 转型，提供商抽象层急需补全。

2. **Workflow / Plugin 体系产品化**  
   - 核心：运行时接线（#2974）、工具暴露、插件市场、Hook、技能包分发（#4836、#1172、#2743）  
   - 信号：v0.9.2 将 Workflow 从 “编译通过” 推向 “可用/可观测”，插件生态雏形浮现。

3. **TUI 性能与渲染架构治理**  
   - 密集：渲染循环同步 IO（#3905、#3908）、逐帧深拷贝/Token 估算（#3904、#3906）、工具折叠重扫（#3907）  
   - 信号：长会话、大工作区下帧率下降成痛点，需引入增量渲染/后台任务化。

4. **国际化与本地化工程化**  
   - 系统性：README 多语言已就绪，网站/TUI 包滞后，CI 门禁缺失（#3091、#3092、#3093、#4839）  
   - 信号：面向全球开发者，本地化从 “有无” 转向 “同步/治理”。

5. **远程协作与无头模式**  
   - 新增：`/rc` 协议（#4844）、Headless Context Report 清理（#4444）  
   - 信号：Cloud IDE / 远程开发 / CI 集成场景成新增长点。

---

## 6. 开发者关注点与痛点

| 痛点 | 典型反馈 | 潜在对策 |
|------|----------|----------|
| **非 DeepSeek 提供商“二等公民”** | 模型解析写死、配置校验拦截、计费分级缺失、技能不兼容 | 统一 Provider Registry + Model Capabilities Schema，CI 矩阵覆盖主流提供商 |
| **测试环境污染真实配置** | `cargo test` 写入 `~/.codewhale/config.toml` 导致合并闸门不稳定 | 强制测试用隔离 `HOME` / 临时配置目录，Mock FS 层 |
| **首次体验门槛高** | Onboarding 无离线路径、必须填 Key、无引导演示 | 实现 #3927 离线沙箱模式，内置 Demo Skill/Workflow |
| **长会话/大项目性能退化** | Ctrl+P 卡顿、渲染逐帧 O(N)、Token 估算全量序列化 | 引入异步文件索引、增量 Token 计数、虚拟化列表、后台 Worker |
| **macOS 原生能力受损** | “水下 shell” 破坏 `open/osascript/launchctl` | 重审 PTY/Shell 模式对平台能力的副作用，提供兼容开关 |
| **视觉可达性缺陷** | 浅色主题对比度不足、通知图标错位 | 引入 WCAG AA 校验、主题 Token 语义化、原生通知适配 |

---

> **下一关注点**：v0.9.2 合并窗口收敛期，重点观察 `#3314`（App 拆解）与 `#2974`（Workflow 接线）的落地节奏，以及多提供商兼容性测试矩阵是否纳入 CI。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*