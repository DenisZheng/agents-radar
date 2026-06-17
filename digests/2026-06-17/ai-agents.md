# OpenClaw 生态日报 2026-06-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-17 00:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-06-17

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度：过去 24 小时内 **Issues 更新 500 条**（新开/活跃 465，关闭 35）、**PR 更新 500 条**（待合并 361，已合并/关闭 139），并发布了 **2 个新版本**（v2026.6.8 正式版 + beta.2）。项目节奏紧凑，交付吞吐量大，但积压 — 待合并 PR 与活跃 Issue 数量基本持平，显示社区贡献活跃的同时 review 管线仍有压力。值得关注的趋势是：session 稳定性与消息投递可靠性相关的 Issue/PR 密度最高，说明社区对核心对话引擎的健壮性最为关切。

---

## 2. 版本发布

### v2026.6.8（含 v2026.6.8-beta.2）

**核心变更：「Richer channel delivery」**

| 维度 | 详情 |
|------|------|
| **改进对象** | Telegram、WhatsApp 两个渠道的消息投递质量 |
| **Telegram** | 结构化文本渲染增强：支持 **Markdown 表格、列表、可折叠 blockquote、保留有意的换行符**，以及 CLI 后端回复的可靠性提升 |
| **WhatsApp** | 现在正确遵循已配置的 **ACP 绑定**（Agent Communication Protocol 集成），此前配置可能被静默忽略 |
| **关联 PR** | #92679、#931（编号截断，完整号待查） |

**迁移注意事项：**
- 若你依赖 Telegram 渠道的纯文本输出，升级后消息格式可能发生变化（表格/列表渲染），建议测试后再全量推送。
- WhatsApp 用户若之前配置了 ACP 绑定但未生效，升级后绑定将开始生效，需确认行为符合预期。

---

## 3. 项目进展

今日合并/关闭的 PR 共 **139 条**，以下列出最具代表性的进展：

### ✅ 已合并/关闭的重要 PR

| PR | 内容摘要 | 意义 |
|----|---------|------|
| **#93786** | 修复插件刷新目录被跳过运行时发现的问题（#93775） | 插件生态稳定性 |
| **#93773** | Skill Workshop 提案范围限定到所选 Agent（#93760） | 多 Agent 工作区隔离 |
| **#68936** | 新增 PR review 自动修复流水线 + Windows 后台守护进程 | 开发者体验 & Windows 支持 |

### 🔧 今日新开的重要 PR（待合并）

| PR | 内容摘要 | 意义 |
|----|---------|------|
| **#93826** | 修复隔离 cron 会话通过 `sessions_send` 触发 A2A ping-pong 反馈循环（#92257） | 🔴 高优先级 — cron 会话状态安全 |
| **#93823** | WhatsApp 多 chunk 回复中媒体失败时首段文字被静默丢弃 | 消息投递完整性 |
| **#93822** | Slack 编辑消息时丢失自定义用户名/头像（#58737） | 渠道一致性 |
| **#93696** | Matrix 渠道将推理回复以 `m.notice` 投递而非静默抑制 | 渠道功能对等 |
| **#93620** | 修复 OpenRouter 提供商 `reasoning_content` 丢失 | 多模型兼容性 |
| **#93516** | Matrix 可配置 `apiPrefix`，支持反向代理后的非标准路径 | 自托管部署灵活性 |
| **#93056** | 修复 `/model` 切换后 `this.model` 快照不同步（#92415） | 模型切换可靠性 |
| **#88504** | 新增多槽位 memory role 架构（recall/compaction/capture 等） | 🧠 记忆系统架构升级 |
| **#85505** | CLI runner 新增 host-only auth epoch 模式，避免 auth-profile 轮换导致会话重置 | 长会话稳定性 |

**整体判断：** 项目在渠道适配层（Telegram/WhatsApp/Slack/Matrix/iMessage）和会话核心（cron 隔离、模型切换、记忆架构）两个方向同时推进，今日合并密度高，积压消化速度健康。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| # | Issue | 👍 | 评论 | 核心诉求 |
|---|-------|-----|------|---------|
| **#75** | [Linux/Windows Clawdbot 桌面应用](https://github.com/openclaw/openclaw/issues/75) | 79 | 109 | 社区强烈要求补齐 Linux/Windows 原生桌面客户端，与 macOS/iOS/Android 对齐。这是**全项目点赞最高的 Issue**，反映跨平台覆盖是用户基础诉求 |
| **#88838** | [核心 session/transcript SQLite 迁移追踪](https://github.com/openclaw/openclaw/issues/88838) | 1 | 30 | 架构级重构：将 session 运行时状态迁移到 SQLite，要求以分支抽象接缝方式小步推进，避免高风险大重写 |
| **#44925** | [子 Agent 完成结果静默丢失](https://github.com/openclaw/openclaw/issues/44925) | 1 | 19 | 子 Agent 编排在超时/失败时无任何重试或通知，结果直接消失 |
| **#22676** | [Signal daemon SIGUSR1 重启竞态条件](https://github.com/openclaw/openclaw/issues/22676) | 0 | 17 | Signal 渠道在配置热重载时产生孤儿进程和发送失败 |
| **#39604** | [web_fetch 允许访问私有网络](https://github.com/openclaw/openclaw/issues/39604) | 9 | 13 | 需要 opt-in 配置让 `web_fetch` 工具能访问内网地址（localhost/10.x/192.168.x），当前被硬编码阻止 |

### 📊 热点分析

- **跨平台桌面端（#75）** 以 79 赞、109 条评论遥遥领先，是社区最持久的诉求。
- **Session 稳定性** 相关 Issue 占据热榜半壁江山（#88838、#44925、#22676、#32296 等），说明这是当前用户痛感最强的领域。
- **安全增强** 需求活跃：私有网络访问控制（#39604）、MCP 工具调用审批（#78308）、敏感数据脱敏（#64046）均有持续讨论。

---

## 5. Bug 与稳定性

### 🔴 P0/P1 — 严重/高优先级 Bug

| # | 问题 | 影响 | Fix PR |
|---|------|------|--------|
| **#88838** | Session/transcript 运行时状态需迁移到 SQLite | 会话状态丢失风险 | 架构追踪 Issue，分步推进中 |
| **#44925** | 子 Agent 完成结果静默丢失，无重试无通知 | 任务结果丢失 | 无直接 fix PR |
| **#22676** | Signal daemon 重启竞态 → 孤儿进程 + 发送失败 | 消息投递失败 | 无直接 fix PR |
| **#62505** | Coding Agent 从不完成任何任务（2026.4.2 后回归） | 🔴 回归，核心功能失效 | 无直接 fix PR |
| **#57326** | CLI 后端辅助路径绕过 `runCliAgent()` 调度 | 模型路由错误 | 无直接 fix PR |
| **#48003** | Steer 模式无法在运行中注入消息 | 交互体验受损 | 无直接 fix PR |
| **#40001** | Write 工具缺少 append 模式，cron 会话覆盖共享文件 | 数据丢失 | 无直接 fix PR |
| **#43367** | 多 Agent 编排不稳定：并发配置覆盖、会话锁失败 | 多 Agent 不可用 | 无直接 fix PR |
| **#55334** | sessions.json 无界增长导致 Gateway OOM（50-100MB/min） | 🔴 内存泄漏 | 无直接 fix PR |
| **#54155** | Gateway 内存泄漏：389MB → 14.7GB/4天 | 🔴 内存泄漏 | 无直接 fix PR |
| **#65161** | Heartbeat 隔离模式节奏停滞、事件标签错误 | 心跳系统退化 | 无直接 fix PR |
| **#67777** | 子 Agent 完成投递在超时时丢失 | 任务结果丢失 | 无直接 fix PR |

### 🟡 P2 — 中等优先级

| # | 问题 | Fix PR |
|---|------|--------|
| **#57901** | Safeguard compaction 忽略 compaction.model 配置 | 无 |
| **#58450** | Agent 承诺后续跟进但不执行任何操作 | 无 |
| **#53628** | XDG_CONFIG_HOME 在安装 skill 时未解析 | 无 |
| **#51429** | 工作路径被 hardcode 进代码（`/Users/wangtao`） | 无 |
| **#67288** | amazon-bedrock-mantle 每次请求都运行不必要的 discovery | 无 |
| **#65564** | Heartbeat isolatedSession 复用旧 transcript 文件 | 无 |
| **#67366** | 替换 Telegram token 时 onboarding 崩溃 | 无 |
| **#66443** | 溢出恢复时 role=user 消息重复，加速 transcript 膨胀 | 无 |
| **#65538** | 屏幕阅读器流式输出时每个 token 都朗读（无障碍） | 无 |
| **#65374** | Dreaming 系统在多 Agent 设置下污染 Agent 身份 | 无 |
| **#64664** | Gateway 重启后审批 ID 丢失，按钮显示过期错误 | 无 |
| **#59330** | Control UI Raw 模式永久禁用（2026.3.31 回归） | **#59336** ✅ |
| **#58514** | Google Chat 群组消息被静默忽略 | 无 |
| **#53486** | Feishu 消息卡片渲染为纯文本（回归） | 无 |
| **#52130** | Telegram retry.jitter 类型不匹配导致重启风暴 | 无 |

### 稳定性评估

> ⚠️ **警告级别：高。** 当前积压的 P0/P1 Bug 中，**内存泄漏**（#55334、#54155）、**消息/任务结果静默丢失**（#44925、#67777、#40001）和**回归性功能失效**（#62505）是最紧迫的问题。这些 Issue 多数创建已久但缺乏 fix PR，建议维护者集中资源处理。

---

## 6. 功能请求与路线图信号

### 高信号功能请求（已有 PR 推进或社区呼声高）

| # | 功能 | 状态 | 信号强度 |
|---|------|------|---------|
| **#75** | Linux/Windows 桌面应用 | 无 PR，79 赞 | ⭐⭐⭐⭐⭐ |
| **#88504** | 多槽位 memory role 架构 | PR 开放中 | ⭐⭐⭐⭐ |
| **#39604** | web_fetch 允许私有网络访问 | 无 PR，9 赞 | ⭐⭐⭐ |
| **#78308** | MCP 工具调用的渠道审批（consent envelope） | 无 PR | ⭐⭐⭐ |
| **#63829** | Per-agent memory-wiki vault 配置 | 无 PR，9 赞 | ⭐⭐⭐ |
| **#64046** | 敏感数据脱敏（配置文件 + 日志 + UI） | 无 PR | ⭐⭐⭐ |
| **#66252** | Per-Agent TTS/STT 配置覆盖 | 无 PR | ⭐⭐ |
| **#52640** | 长运行任务的持久化状态面板 | 无 PR | ⭐⭐ |
| **#54373** | Context Provenance：注入上下文溯源元数据 | 无 PR | ⭐⭐ |
| **#63930** | Anthropic advisor tool 支持 | 无 PR | ⭐⭐ |
| **#11665** | Webhook hook 会话复用（多轮对话支持） | 无 PR | ⭐⭐ |

### 路线图判断

- **记忆系统架构升级**（#88504）是最接近落地的大型功能变更，PR 已进入 review 阶段。
- **安全增强**（私有网络访问控制、MCP 审批、数据脱敏）是社区持续呼声，但尚未有 PR 启动，可能需要在下一版本规划中排优先级。
- **跨平台桌面端**（#75）虽然呼声最高，但属于大型工程投入，短期内可能以社区贡献形式推进。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **消息/结果静默丢失** — 多个用户报告子 Agent 结果、cron 投递、Signal 消息在无任何错误提示的情况下消失。这是用户信任度最大的威胁。
2. **内存泄漏导致 Gateway 崩溃** — 多用户报告 Gateway 在数天内从数百 MB 增长到 10+ GB，最终 OOM。这对 24/7 运行的用户影响极大。
3. **Session 上下文膨胀** — bootstrap 文件每轮重新注入消耗 20-30% 上下文（#67419），长对话用户最先感受到质量下降。
4. **多 Agent 编排不可靠** — 并发配置覆盖、会话锁失败、子 Agent 脱离，使多 Agent 工作流在生产环境中难以使用。
5. **渠道行为不一致** — Telegram/WhatsApp/Slack/Matrix/Feishu/Google Chat 各渠道的渲染、编辑、群组支持存在差异和回归。

### 😊 满意点

1. **v2026.6.8 的渠道改进** — Telegram 结构化渲染和 WhatsApp ACP 绑定修复直接回应了社区长期反馈。
2. **Skill Workshop 改进**（#93773）— 多 Agent 工作区隔离让用户能更精细地管理技能。
3. **活跃的 PR 合并节奏** — 每日 139 条 PR 合并/关闭显示项目响应速度较快。

### 📋 典型使用场景

- **个人 AI 助手**：通过 Telegram/WhatsApp 日常对话，关注消息投递可靠性和会话连续性。
- **多 Agent 编码工作流**：使用子 Agent 并行编码任务，遭遇结果丢失和编排不稳定。
- **自托管部署**：在 Docker/私有服务器上运行，关注内存泄漏、配置管理和安全隔离。
- **企业/团队场景**：使用 Slack/Discord/Feishu/Google Chat，需要群组消息支持和渠道一致性。

---

## 8. 待处理积压

### 🚨 长期未响应的重要 Issue

| # | 创建日期 | 问题 | 天数 | 建议行动 |
|---|---------|------|------|---------|
| **#75** | 2026-01-01 | Linux/Windows 桌面应用 | 167 天 | 需产品决策，明确路线图或开放社区贡献 |
| **#32296** | 2026-03-02 | Agent 回复错位（回复前一条消息） | 107 天 | 已关闭但根因可能未彻底解决 |
| **#44925** | 2026-03-13 | 子 Agent 结果静默丢失 | 96 天 | 🔴 需分配 owner，高影响 |
| **#55334** | 2026-03-26** | sessions.json 无界增长 OOM | 83 天 | 🔴 内存泄漏，需紧急排查 |
| **#54155** | 2026-03-25 | Gateway 内存泄漏 389MB→14.7GB | 84 天 | 🔴 同上，可能关联 |
| **#62505** | 2026-04-07 | Coding Agent 不完成任务（回归） | 71 天 | 🔴 回归需回滚或修复 |
| **#51429** | 2026-03-21 | 工作路径 hardcode | 88 天 | 安全问题，需 hotfix |
| **#52130** | 2026-03-22 | Telegram 重启风暴 | 87 天 | 影响可用性 |

### 📦 长期未合并的重要 PR

| # | 创建日期 | 内容 | 天数 | 状态 |
|---|---------|------|------|------|
| **#44288** | 2026-03-12 | 备份排除模式 + 智能排除 | 97 天 | 等待行为证明 |
| **#39065** | 2026-03-07 | 可配置未配对 DM 安全响应 | 102 天 | 等待作者 |
| **#46502** | 2026-03-14 | Watchdog 核心服务 + cron 引擎 | 95 天 | 需要行为证明 |
| **#58373** | 2026-03-31 | 引导非 main models.json 防止 Unknown model | 78 天 | 等待作者 |
| **#58823** | 2026-04-01 | 恢复全局 subagent model 默认优先级 | 77 天 | 准备 maintainer review |
| **#59336** | 2026-04-02 | 修复 Control UI Raw 模式禁用回归 | 76 天 | 等待作者 |
| **#59920** | 2026-04-02 | CLI JSONL 解析器优先终端回复字段 | 76 天 | 准备 maintainer review |
| **#60212** | 2026-04-03 | 修复 cron 空 sanitized 最终回复 | 75 天 | 等待作者 |

> **维护者建议：** 上述积压中，**#55334 / #54155（内存泄漏）** 和 **#51429（路径 hardcode 安全问题）** 应优先处理。PR 积压中 **#58823、#59920** 已标记为"ready for maintainer look"，可优先 review 合并。

---

*日报由 OWL 自动生成 | 数据来源：GitHub openclaw/openclaw | 生成时间：2026-06-17*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**日期：2026-06-17 | 分析引擎：OWL**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**从"能用"到"好用"的密集打磨期**。11 个核心项目今日合计处理超过 300 条 Issue 和 250 条 PR，活跃度极高，但各项目分化明显——头部项目（OpenClaw、ZeroClaw、IronClaw）处于高吞吐迭代通道，而尾部项目（TinyClaw、ZeptoClaw）近乎停滞。**上下文管理、多渠道消息投递可靠性、内存安全**是跨项目出现频率最高的三大技术痛点，反映出社区已从功能探索阶段进入稳定性与生产就绪度攻坚阶段。安全议题（SSRF、CSRF、沙箱绕过、供应链攻击）在多个项目同时升温，标志着生态正从"个人玩具"向"企业级工具"跃迁。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新/活/关） | PR（待合/已合） | Release | 健康度 | 阶段定位 |
|------|:---:|:---:|:---:|:---:|------|
| **OpenClaw** | 500（465/35） | 500（361/139） | v2026.6.8 + beta.2 | 🟢 高 | 高吞吐迭代 |
| **ZeroClaw** | 37（35/2） | 50（35/15） | 无 | 🟢 高 | 密集迭代期 |
| **IronClaw** | 50（28/22） | 50（35/15） | 无 | 🟡 中 | 架构切换关键期 |
| **Hermes Agent** | 50 | 50（10/40） | 无 | 🟡 中 | 安全加固期 |
| **CoPaw** | 41（19/22） | 40（20/20） | v1.1.12-beta.1 | 🟢 高 | 密集修复期 |
| **NanoBot** | 9（5/4） | 23（9/14） | 无 | 🟢 高 | 稳定迭代 |
| **PicoClaw** | 15（13/2） | 16（3/13） | nightly | 🟢 高 | 快速迭代 |
| **NanoClaw** | 6（5/1） | 5（1/4） | 无 | 🟢 稳定 | 维护期 |
| **NullClaw** | 2 | 3（3/0） | 无 | 🟡 中 | 缓慢维护 |
| **LobsterAI** | 1 | 4（1/3） | 无 | 🟡 中 | 功能打磨 |
| **Moltis** | 2 | 2（2/0） | 无 | 🟢 稳定 | 平稳维护 |
| **TinyClaw** | 0 | 1（1/0） | 无 | ⚠️ 低 | 间歇期 |
| **ZeptoClaw** | 0 | 1（1/0） | 无 | ⚠️ 低 | 停滞期 |

> **注：** Issues 和 PR 数为过去 24 小时内更新量，包含新开、活跃、关闭/合并。健康度综合考量积压比、P0 Bug 数量、响应速度、社区情绪。

---

## 3. OpenClaw 在生态中的定位

### 规模优势
OpenClaw 是生态中**社区体量最大、交付节奏最快**的项目：今日 Issues 和 PR 更新量均达 500 条，远超第二名 ZeroClaw（37/50），活跃 Issue 积压 465 条、待合并 PR 361 条，显示其拥有最大规模的贡献者基础。Issue #75（跨平台桌面端）获得 79 赞、109 条评论，是全生态中社区呼声最高的单一功能请求。

### 技术路线差异
- **全渠道覆盖战略**：OpenClaw 支持 Telegram、WhatsApp、Slack、Matrix、Discord、Signal、iMessage、Feishu、Google Chat 等 9+ 渠道，是生态中渠道适配最广的项目。v2026.6.8 的 Telegram 结构化渲染（Markdown 表格、列表、可折叠 blockquote）和 WhatsApp ACP 绑定修复直接回应了社区长期反馈。
- **会话核心 + 记忆架构升级**：多槽位 memory role 架构（recall/compaction/capture，PR #88504）是生态中最接近落地的记忆系统重构，SQLite session 迁移（Issue #88838）则是架构级重构方向。
- **Skill Workshop + 多 Agent 工作区隔离**：在多 Agent 编排方向上走出了差异化路线。

### 社区规模对比
| 指标 | OpenClaw | ZeroClaw | IronClaw | Hermes Agent |
|------|:---:|:---:|:---:|:---:|
| 今日 Issue 更新 | 500 | 37 | 50 | 50 |
| 今日 PR 更新 | 500 | 50 | 50 | 50 |
| 待合并 PR | 361 | 35 | 35 | 40 |
| 版本发布 | 2 个 | 0 | 0 | 0 |

OpenClaw 的社区吞吐量约为其他头部项目的 **10-14 倍**，但积压比（待合并/已合并 ≈ 2.6:1）也高于健康阈值，review 管线压力是主要瓶颈。

---

## 4. 共同关注的技术方向

### 方向一：上下文管理与长对话稳定性（涉及 8 个项目）
| 项目 | 具体诉求 |
|------|---------|
| OpenClaw | Session/transcript SQLite 迁移（#88838）、上下文膨胀（#67419） |
| NanoBot | Token 计数替代字符计数（#4352）、idle auto-compact 默认启用（#4370）、缓存断点优化（#4371） |
| CoPaw | 子 Agent 上下文压缩冻结（#5218）、Headroom 压缩层集成（#5063）、长对话无响应（#5161） |
| ZeroClaw | 循环检测修复（#7681）、技能目录缓存（#7786） |
| Hermes Agent | 沙箱工具隔离绕过（#47494） |
| PicoClaw | LLM 空响应重试（#2983）、流式传输 tool_calls 丢失（#2987） |
| NanoClaw | 预算耗尽静默丢弃修复（#2759） |
| IronClaw | 审批门拒绝后运行取消（#4764）、工具调用失败不可见（#4942） |

**核心趋势：** 社区正从"能对话"向"长对话不崩"演进，auto-compact、token 精确计数、缓存分段优化是三大技术手段。

### 方向二：多渠道消息投递可靠性（涉及 7 个项目）
| 项目 | 具体诉求 |
|------|---------|
| OpenClaw | Telegram 结构化渲染、WhatsApp ACP 绑定、Slack 编辑丢头像、Matrix m.notice |
| Hermes Agent | Slack Block Kit 升级（#8552）、WhatsApp JID 路由（#41407）、Signal 审批路由（#46866） |
| PicoClaw | Telegram Forum 话题回复错乱（#3135）、流式 HTTP 支持（#2404） |
| NanoClaw | Slack @handle URL 断裂（#2779） |
| ZeroClaw | Discord 斜杠命令持久化（#7784）、Slack 渠道特性回归（#7787） |
| IronClaw | Slack OAuth URL 泄露（#4953） |
| CoPaw | 钉钉睡眠唤醒失效（#5214） |

**核心趋势：** 各渠道适配器独立演进导致的"渠道行为不一致"是社区最大痛点之一，需要统一的"消息路由与格式化抽象层"。

### 方向三：安全加固（涉及 6 个项目）
| 项目 | 具体诉求 |
|------|---------|
| PicoClaw | 12 个系统性安全审计（SSRF/CSRF/沙箱绕过/路径穿越），由安全研究员 YLChen-007 集中提交 |
| Hermes Agent | 沙箱工具隔离绕过（#47494）、Windows GBK 编码（#47516） |
| CoPaw | Keychain 隔离（#5028）、Windows CI 加固（#5125） |
| ZeroClaw | CI 供应链安全 RFC（#7675）、循环检测（#7681） |
| OpenClaw | 私有网络访问控制（#39604）、MCP 审批（#78308）、数据脱敏（#64046） |
| NanoClaw | Credential Proxy 封号风险（#1669） |

**核心趋势：** 安全议题从"功能安全"（防崩溃）向"运行时安全"（防攻击）跃迁，供应链安全开始进入社区视野。

### 方向四：Cron/自动化可靠性（涉及 5 个项目）
| 项目 | 具体诉求 |
|------|---------|
| OpenClaw | Cron 会话 A2A ping-pong 循环（#93826）、子 Agent 结果丢失（#44925） |
| IronClaw | 自动化"看得见管不着"（#5005）、循环自动化审批阻塞（#4986） |
| ZeroClaw | Cron session_target=main 行为不符（#6648）、Cron 文档缺失（#7762） |
| CoPaw | Cron 未按计划执行（#5235）、Cron 打断主对话（#5250） |
| NullClaw | 调度器权限修复（#959）、Cron 子代理引擎（#783） |

**核心趋势：** Cron/自动化正从"能用"走向"可靠执行"，核心挑战是**隔离性**（不干扰主对话）和**可观测性**（失败可知、可管理）。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | ZeroClaw | IronClaw | Hermes Agent | CoPaw | NanoBot | PicoClaw | NanoClaw | NullClaw | LobsterAI | TinyClaw | Moltis | ZeptoClaw |
|------|---------|---------|---------|-------------|-------|---------|---------|---------|---------|----------|---------|-------|----------|
| **核心定位** | 全渠道个人 AI 助手 | Rust 高性能代理运行时 | 本地优先 AI 代理 + WebUI | 多平台 AI 代理 | 桌面 AI 编码助手 | 轻量级 AI 代理 | 嵌入式/边缘 AI 代理 | 企业级沙箱代理 | 极简代理 | 协作式 AI 代理 | 微型代理 | 多模型代理 | 实验性代理 |
| **目标用户** | 全渠道用户、自托管极客 | 性能敏感型开发者 | 本地开发团队 | 多平台用户 | 开发者 | 轻量级用户 | 嵌入式开发者 | 企业运维 | 极简主义用户 | 团队协作用户 | 极简用户 | 模型研究者 | 实验者 |
| **技术栈** | TypeScript/Python | Rust | TypeScript | Python | TypeScript/Python | Python | Python | TypeScript | Rust | TypeScript | TypeScript | Python | Rust |
| **渠道覆盖** | 9+（最广） | Discord/Slack | Slack/Discord | 6+ | 钉钉等 | Telegram | 8+（含飞书/企业微信/LINE/MQTT） | Slack | 单一 | 有限 | 无 | 有限 | 无 |
| **架构特色** | 全渠道 + 记忆架构 | Rust 零成本抽象 | Engine V2 + Reborn UI | 插件生态 | Tauri 桌面 + Gemini | 轻量核心 | 嵌入式优化 | 沙箱隔离 | 极简调度 | Cowork 协作 | 极简 | 多模型 | 实验性 |
| **差异化优势** | 渠道广度 + 社区规模 | 性能 + 内存安全 | 本地体验 + 审批流 | 安全修复速度 | 桌面集成 | 开箱即用 | 嵌入式/安全审计 | 企业部署 | 极简 | 协作体验 | 极小足迹 | 模型灵活 | — |

**关键差异总结：**
- **OpenClaw** 走"广度路线"：渠道最多、社区最大、功能最全，但复杂度高、review 管线承压。
- **ZeroClaw** 走"性能路线"：Rust 实现 + 零成本抽象，适合对资源敏感的场景，但文档质量是短板。
- **IronClaw** 走"本地体验路线"：Reborn WebUI + 审批流 + 扩展生态，面向日常 AI 代理用户，但架构切换期存在不稳定性。
- **CoPaw** 走"桌面编码路线"：Tauri + Gemini 深度集成，面向开发者，但 macOS 稳定性堪忧。
- **NanoBot/PicoClaw** 走"轻量/嵌入式路线"：资源占用低、部署简单，适合边缘场景。

---

## 6. 社区热度与成熟度

### 第一梯队：高吞吐迭代期
| 项目 | 特征 |
|------|------|
| **OpenClaw** | 日处理 500+ Issue/PR，2 个版本发布，社区最活跃，但积压比高（2.6:1），review 管线是瓶颈 |
| **ZeroClaw** | v0.8.0 发布后密集迭代，P1 Bug 集中爆发（8 个），处于"发布后灭火"阶段 |
| **CoPaw** | v1.1.12-beta.1 发布，安全加固 + 桌面稳定性双轨推进，Issue 关闭数略超新开数，积压收窄 |

### 第二梯队：质量巩固期
| 项目 | 特征 |
|------|------|
| **IronClaw** | Engine V2 + Reborn WebUI 架构切换中，自动化 UX 反馈集中但开发资源不足 |
| **Hermes Agent** | 安全加固 + 跨平台兼容性修复为主，但 63 天积压 Issue（#12655）暴露响应速度问题 |
| **NanoBot** | 稳定迭代，auto-compact 默认启用 + token 计数优化，积压少、健康度高 |
| **PicoClaw** | 快速迭代，goroutine panic 恢复 + Telegram Forum 修复，但 12 个安全 Issue 积压需紧急处理 |

### 第三梯队：平稳维护期
| 项目 | 特征 |
|------|------|
| **NanoClaw** | 企业部署场景，PR 合并节奏快（4/5 已合），但 Credential Proxy 合规风险（#1669）72 天未响应 |
| **NullClaw** | 缓慢维护，PR 合并节奏偏慢（3 个待合），Issue #952 无回复 |
| **LobsterAI** | 功能打磨期，Cowork + Artifacts 体验优化，但定时任务 Bug 70 天未修 |

### 第四梯队：低活跃/停滞
| 项目 | 特征 |
|------|------|
| **TinyClaw** | 社区近乎停滞，唯一 PR 无人评审 |
| **ZeptoClaw** | 仅 Dependabot 自动化 PR，社区参与度为零 |
| **Moltis** | 平稳但冷清，2 个 PR 待合 2 天 |

---

## 7. 值得关注的趋势信号

### 趋势一：上下文管理正成为"长对话产品"的分水岭
几乎所有头部项目都在投入上下文管理优化（auto-compact、token 精确计数、缓存分段、SQLite 迁移）。**谁能率先解决"长对话不崩、不丢、不膨胀"的问题，谁就能在个人 AI 助手赛道建立护城河。** 建议开发者重点关注：基于 token 而非字符的截断策略、stable/dynamic prompt 分段缓存、以及可插拔的压缩层架构。

### 趋势二：安全从"附加项"变为"准入门槛"
PicoClaw 的 12 个系统性安全审计、CoPaw 的 Keychain 隔离、ZeroClaw 的 CI 供应链安全 RFC——安全不再是可选项。**SSRF 防护、沙箱隔离、供应链 SBOM** 正在成为企业级部署的必备能力。对于 AI 智能体开发者，这意味着：工具调用链的每个环节（exec、web_fetch、skills 加载）都需要安全审计。

### 趋势三：Cron/自动化的"最后一公里"问题
5 个项目集中反映 Cron 的隔离性和可观测性问题。**用户期望 Cron 在后台静默执行、失败时可感知、可管理**，但当前多数实现仍停留在"能触发"阶段。这为专注于任务调度的基础设施项目（如 Temporal、Airflow 的 AI 原生替代）留出了机会窗口。

### 趋势四：文档质量成为社区信任的最大威胁
ZeroClaw 用户直言"代码再好，文档垃圾也没用"，OpenClaw 的 SQLite 迁移需要"分支抽象接缝方式小步推进"。**在功能趋同的背景下，文档质量正成为项目间差异化竞争的关键维度。** 对于开发者，投资文档（配置示例、架构图、迁移指南）的 ROI 可能高于新增功能。

### 趋势五：macOS 桌面端正成为稳定性重灾区
CoPaw（Tauri 崩溃循环 + ChromaDB SIGSEGV）、Hermes Agent（Windows 安装失败）、TinyClaw（Windows 路径解析错误）——**跨平台桌面端正处于"能跑但跑不稳"的阶段**。这反映了 AI 代理项目在追求原生桌面体验时，对平台差异（路径编码、进程管理、GUI 框架）的估计不足。

### 趋势六：记忆系统架构升级是下一个大型功能战场
OpenClaw 的多槽位 memory role（#88504）、NanoBot 的 auto-compact 默认启用（#4370）、CoPaw 的 Headroom 压缩层提案（#5063）——**记忆管理正从"存储一切"向"智能遗忘"演进**。recall/compaction/capture 的分离架构可能成为下一代 AI 代理的标准范式。

---

> **总结：** 个人 AI 助手开源生态正经历从"功能竞赛"到"质量竞赛"的关键转型。OpenClaw 凭借渠道广度和社区规模保持领先，但 review 管线压力是隐患；ZeroClaw 和 IronClaw 分别在性能和本地体验上建立差异化；CoPaw 聚焦开发者桌面场景。上下文管理、安全加固、Cron 可靠性是跨项目的三大共同挑战，而文档质量和 macOS 稳定性则是容易被忽视但影响深远的竞争维度。

---

*报告由 OWL 自动生成 | 数据来源：GitHub API（11 个项目） | 生成时间：2026-06-17*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-17

---

## 1. 今日速览

NanoBot 今日保持高活跃度：**Issues 更新 9 条**（新开/活跃 5、关闭 4），**PR 更新 23 条**（待合并 9、已合并/关闭 14）。今日无新版本发布。项目整体处于频繁迭代期，合入的 PR 集中在 **context/webui 缓存优化、Dream 行为修复、安装体验改进、流式超时健壮性**等方向，多条积压 Bug 得到关闭。社区贡献者覆盖面广，核心维护者 `chengyongru`、`yu-xin-c` 等持续高效处理 backlog。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 🔧 已合并/关闭的重要 PR（精选 10 条）

| # | PR | 主题 | 链接 |
|---|-----|------|------|
| 1 | **#4352** | **fix(context): recent-history digest 改用 token 计数替代字符计数** — 修复英文 32k chars ≈ 8k tokens 而 CJK/代码远超的问题，提升多语言上下文截断精度 | [PR #4352](https://github.com/HKUDS/nanobot/pull/4352) |
| 2 | **#4358** | **fix(api): 修复空响应重试导致 user turn 重复 #4079** — 空响应恢复时设置 `persist_user_message=False`，避免对话记录重复 | [PR #4358](https://github.com/HKUDS/nanobot/pull/4358) |
| 3 | **#4363** | **fix(providers): 统一校验 stream idle timeout 配置 #4065** — 抽取共享 `resolve_stream_idle_timeout_s()` 助手，拒绝非法/非正值，钳制极端值，跨 OpenAI-compatible 提供商复用 | [PR #4363](https://github.com/HKUDS/nanobot/pull/4352) |
| 4 | **#4369** | **fix: 优化空 Dream 运行时的提示信息** — 将 `/dream` 无历史记录时的模糊报错改为可恢复的解释，引导用户使用 idle auto-compact | [PR #4369](https://github.com/HKUDS/nanobot/pull/4369) |
| 5 | **#4370** | **feat: 默认启用 idle auto-compact（15 分钟阈值）** — 将 `idleCompactAfterMinutes` 默认值从 `0` 改为 `15`，显式 `0` 为禁用，同步更新文档与测试 | [PR #4370](https://github.com/HKUDS/nanobot/pull/4370) |
| 6 | **#4368** | **fix: macOS 安装器适配 externally managed Python (PEP 668)** — 优先使用 virtualenv/uv tool/pipx，回退到 `~/.nanobot/venv`，避免系统级 pip 安装失败 | [PR #4368](https://github.com/HKUDS/nanobot/pull/4368) |
| 7 | **#4365** | **docs: curl 安装命令改为 pipe 模式** — 将 `sh -c "$(curl ...)"` 替换为 `curl ... | sh`，修复 Dockerfile 等嵌套脚本场景下 `$(...)` 被外层 shell 提前展开的问题 | [PR #4365](https://github.com/HKUDS/nanobot/pull/4365) |
| 8 | **#4330** | **feat(webui): 新增 Automations 管理视图** — WebUI 新增自动化任务队列/详情布局，支持过滤、搜索、排序、编辑、运行、暂停/恢复、删除；系统任务只读保护；配套 WebUI 自动化 API | [PR #4330](https://github.com/HKUDS/nanobot/pull/4330) |
| 9 | **#4247** | **fix(webui): transcript 超 8MB 时自动 compact 而非清空** — 历史会话 JSONL 超大时不再返回 `[]` 导致聊天记录消失，改为自动压缩保留 | [PR #4247](https://github.com/HKUDS/nanobot/pull/4247) |
| 10 | **#3401** | **feat(api): OpenAI-compatible 提供商新增 /v1/embeddings 支持** — 添加嵌入端点及测试覆盖，补齐 API 表面能力 | [PR #3401](https://github.com/HKUDS/nanobot/pull/3401) |

> **项目前进步伐：** 今日合并的 PR 覆盖了稳定性（timeout 校验、空响应重试、transcript 超大）、用户体验（默认 auto-compact、Dream 空运行提示）、安装（macOS PEP 668、pipe 模式）和功能增强（WebUI Automations、embeddings）。多条积压 Bug（#4065、#4079）已通过 PR 关闭，项目健康度持续提升。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

**#4360** — *"end of file unexpected" during installer*（6 条评论）
- 作者在 fresh Debian 13 Docker 容器中运行 nanobot installer 时，pip 报错 `Syntax error: end of file unexpected (expecting "}")`。已有其他用户跟进复现，社区正在排查安装脚本在特定环境下的兼容性问题。
- **链接：** [Issue #4360](https://github.com/HKUDS/nanobot/issues/4360)

### 🔥 讨论最活跃的 PR

**#4371** — *[enhancement] fix(cache): add breakpoint before Recent History so the stable system prefix caches*
- 针对 `ContextBuilder.build_system_prompt` 中 recent history 每轮增长导致系统提示缓存命中率低的问题，提出在 stable prefix 与 dynamic history 之间插入缓存断点，提升 KV-cache 利用率。与今日合并的 #4352（token 计数）形成互补，均聚焦上下文效率优化。
- **链接：** [PR #4371](https://github.com/HKUDS/nanobot/pull/4371)

### 📌 社区诉求分析

| 诉求方向 | 代表 Issue/PR | 背后需求 |
|----------|--------------|----------|
| **安装体验** | #4360, #4365, #4368 | 用户在 Docker/macOS 等环境下安装失败，需要更健壮的安装脚本和文档 |
| **上下文效率** | #4371, #4352, #4370 | 长对话场景下 token 消耗、缓存命中率是核心痛点，社区期待更智能的 context 管理 |
| **Dream 行为透明** | #4242, #4369 | 用户期望关闭 dream.enabled 后彻底停止相关行为，且需要清晰的反馈说明 |
| **WebUI 功能完整性** | #4330, #4247, #4364 | 自动化管理、transcript 稳定性、LAN 访问等需求反映 WebUI 正成为高频使用入口 |

---

## 5. Bug 与稳定性

### 🔴 高严重性（已报告，待处理）

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| **#4375** | Git 命令在项目子目录中被 workspace security guard 阻止，即使目录在允许范围内 | 🟡 OPEN | ❌ 无 |
| **#4374** | 项目工作区 SOUL.md/USER.md 读取与写入路径不一致（read/write asymmetry）：read 从 project root，write 回退到 default workspace | 🟡 OPEN | ❌ 无 |
| **#4360** | Docker 环境下 installer 报 `end of file unexpected` 语法错误 | 🟡 OPEN | ❌ 无 |

### 🟡 中严重性（已有 PR 修复中）

| # | 问题 | Fix PR | 链接 |
|---|------|--------|------|
| **#4242** | 关闭 dream.enabled 后 Recent History 仍注入全部聊天历史 | #4371（关联） | [Issue #4242](https://github.com/HKUDS/nanobot/issues/4242) |

### 🟢 今日已关闭

| # | 问题 | 关闭方式 |
|---|------|----------|
| **#4065** | 无效的 NANOBOT_STREAM_IDLE_TIMEOUT_S 导致 streaming 崩溃 | ✅ PR #4363 合并 |
| **#4079** | API 空响应重试导致 user turn 重复 | ✅ PR #4358 合并 |
| **#4286** | Nanobot 报告缺少 "sustained goal" 上下文 | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

### 📋 新功能请求（OPEN Issues）

| # | 请求 | 是否有对应 PR | 纳入可能性 |
|---|------|--------------|-----------|
| **#4366** | Local model servers 需要代理配置支持（区分 cloud/local 端点） | ✅ **#4367** 已提交 | 🔴 高 — PR 已存在，逻辑清晰 |
| **#4374** | 项目工作区 bootstrap 文件读写一致性 | ❌ | 🟡 中 — 与 WebUI project workspaces (#4007) 相关，架构调整后自然需要 |
| **#4375** | Git 命令在子目录中的安全策略放宽 | ❌ | 🟡 中 — workspace security guard 的边界判断需细化 |

### 📈 路线图信号（来自活跃 PR）

- **上下文缓存优化** (#4371)：提出 stable/dynamic prompt 分段缓存，与今日合并的 token 计数 fix (#4352) 共同指向 **长对话 efficiency** 作为近期核心优化方向。
- **Auto-compact 默认启用** (#4370)：将 auto-compact 从 opt-in 改为 opt-out（默认 15 分钟），反映项目对 **开箱即用体验** 的重视。
- **WebUI Automations** (#4330)：一等公民的自动化管理视图，标志 WebUI 从"聊天界面"向 **控制台/仪表盘** 演进。
- **MCP 健壮性** (#4372)：过滤 malformed progress notifications，说明 MCP 集成正从功能实现转向 **生产级稳定性**。
- **Embeddings API** (#3401)：补齐 OpenAI-compatible 表面能力，为下游 RAG/搜索场景铺路。

---

## 7. 用户反馈摘要

| 维度 | 反馈 |
|------|------|
| **安装体验** | Docker 场景下 installer 报语法错误（#4360），macOS PEP 668 导致安装失败（已通过 #4368 修复）|
| **配置复杂度** | 代理环境变量未区分 local/cloud 端点，导致本地模型服务器不可用（#4366）|
| **Dream 行为** | 关闭 dream.enabled 后仍注入历史，用户期望"关闭即彻底停止"（#4242）；空 Dream 运行提示不友好（已通过 #4369 改善）|
| **工作区一致性** | 项目工作区 bootstrap 文件读写路径不一致，导致配置意外覆盖（#4374）|
| **Git 集成** | workspace security guard 在子目录场景过于严格，阻断合法 git 操作（#4375）|
| **WebUI 稳定性** | 超大 transcript 导致聊天记录消失（已通过 #4247 修复）；LAN 设备访问 WebUI 卡 "Opening new chat..."（已通过 #4364 修复）|

---

## 8. 待处理积压

### 🏷️ 长期未响应的重要 Issue

| # | 问题 | 创建 | 最后更新 | 天数 | 备注 |
|---|------|------|----------|------|------|
| **#4242** | 关闭 dream.enabled 后 Recent History 仍注入全部历史 | 2026-06-08 | 2026-06-16 | 9 天 | 已有 #4371 尝试关联修复，但未直接 close |
| **#4360** | Docker installer 语法错误 | 2026-06-16 | 2026-06-16 | 1 天 | 6 条评论，社区高度关注，blocking 新用户 onboarding |

### 🏷️ 长期未合并的重要 PR

| # | PR | 创建 | 最后更新 | 天数 | 备注 |
|---|-----|------|----------|------|------|
| **#3662** | fix(tokens): avoid network loads during estimation | 2026-05-06 | 2026-06-16 | 42 天 | 解决离线主机 tokenizer 网络加载问题，功能合理但长期未合 |
| **#4053** | fix(tools): keep read-only roots out of write paths | 2026-05-29 | 2026-06-16 | 19 天 | 安全相关 PR，修复 write/edit tools 不当继承 media-dir 访问权限 |
| **#3401** | feat(api): add embeddings support (已于今日合并) | 2026-04-23 | 2026-06-16 | 55 天 | ✅ 今日合并 |

> **⚠️ 提醒维护者：** #4360（Docker installer 报错）已有 6 条评论，属于新用户落地第一关，建议优先排查；#3662（token estimation 离线优化）已积压 42 天，涉及离线场景核心体验，建议 review 后决策；#4053（read-only roots 安全修复）虽仅 19 天但涉及安全边界，建议尽早合入。

---

*日报生成时间：2026-06-17 | 数据来源：GitHub HKUDS/nanobot | 覆盖时间范围：过去 24 小时*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报 — 2026-06-17

---

## 1. 今日速览

Hermes Agent 今日处于**高活跃状态**，24小时内共处理了 100 条 Issue/PR 更新（Issues 50 条 + PR 50 条），但无新版本发布，仍处于上一版本的迭代期。今日新开 Issue 以 Bug 居多，涉及 Gateway 崩溃、跨线程路由错误、配置键值类型腐化等核心路径问题，P0/P1 级别的有 3 条，需要高度关注。合并/关闭 PR 共 10 条，方向集中在工具调用健壮性、跨平台兼容性及安全修复，进展显著。社区讨论最活跃的方向是 Slack 消息格式升级、MCP 超时与超时发现竞态、以及 Kanban 状态机异常——这些反映了用户在多渠道路由、插件生态、任务编排三大场景上的迫切需求。社区情绪整体偏向**建设性反馈**，但部分长期积压的多平台适配 Issue（WhatsApp/Slack 路由缺陷）已有超过两个月未获响应，存在用户流失风险。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共合并/关闭 **10 条 PR**，以下是已合并或有实质性推进的重要条目：

| # | PR | 作者 | 方向 | 说明 |
|---|-----|------|------|------|
| 🔒 | [#47518](https://github.com/NousResearch/hermes-agent/pull/47518) | BROCCOLO1D | Provider: Anthropic | 已合并。修复 Anthropic `<invoke>` tool-call XML 以文本块形式返回时的救助逻辑，避免结构化 `tool_use` 解析失败。提升了 Claude 生态下的工具调用鲁棒性。 |
| 🔒 | [#47514](https://github.com/NousResearch/hermes-agent/pull/47514) | kyssta-exe | Gateway 核心 | **高优先级修复**。解决跨线程中断时 `session_source` 被覆盖导致消息路由到错误会话的 Bug（Issue #47445）。这对 Discord/Telegram 等多频道联动场景至关重要。 |
| 🔒 | [#47443](https://github.com/NousResearch/hermes-agent/pull/47443) | kyssta-exe | CLI/认证 | 修复 18 个 HermesOverlay 条目缺少 `extra_env_vars` 的问题（Issue #47361），使环境变量读取路径与 PROVIDER_REGISTRY 对齐。这是跨 Provider 认证凭证发现的骨干修复。 |
| 🔒 | [#47519](https://github.com/NousResearch/hermes-agent/pull/47519) | liuhao1024 | CLI 配置 | 修复 `hermes config set` 对字符串类型键值（如 `"off"`, `"yes"`）被隐式强制转为布尔值的 Bug，防止 `approvals.mode` 等枚举配置被静默损坏。 |
| 🔒 | [#47522](https://github.com/NousResearch/hermes-agent/pull/47522) | MarkVLK | Desktop UI | 修复 Settings → Model 中 Fallback Models 显示为 `[object Object]` 的回归问题，改为结构化编辑器。修复了目录外模型的可见性。 |
| 🔒 | [#47516](https://github.com/NousResearch/hermes-agent/pull/47516) | kyssta-exe | Tool: Browser | 修复 Windows 非 UTF-8 区域（GBK/CJK）下 Browser 子进程输出编码错误导致的 `UnicodeDecodeError`（Issue #47456），改为 `errors=replace` 降级处理。 |
| 🔒 | [#47494](https://github.com/NousResearch/hermes-agent/pull/47494) | mw76hctjzb-sys | **安全 P0** | 修复沙箱工具隔离绕过——区分 `enabled_tools` 为 `None` 与显式空/非重叠的关键逻辑（Issue #6614）。这是本周期最重要的安全修复。 |
| 🔒 | [#47511](https://github.com/NousResearch/hermes-agent/pull/47517) | liuhao1024 | Desktop/CLI 对齐 | 统一 Desktop 新建/重命名 Profile 时自动小写化，与 CLI 行为对齐（Issue #47504）。 |

**整体评估**：项目在今日向前迈进了一个"安全加固 + 跨平台兼容性修复"的阶段。安全沙箱绕过和多渠道路由错误的修复是核心进展，Desktop UI 的结构化配置编辑器也显著改善了用户配置体验。

---

## 4. 社区热点

以下按讨论活跃度（评论数、👍 反应）排列的 Top 热门条目：

### Issue #8552 — Slack 平台改用 Block Kit markdown 块类型
- **链接**: [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552)
- **热度**: 💬 7 评论 | 👍 9 | P2 / 平台/Slack
- **诉求**: 当前 Slack 适配器使用遗留 `mrkdwn` 格式，不支持 Markdown 表格，标准 Markdown 语法被转换为 Slack 旧格式。用户要求迁移到原生 `markdown` 块类型。
- **状态**: 已有对应 PR [#47051](https://github.com/NousResearch/hermes-agent/pull/47051)（tw0316），将 Slack 最终响应默认改为 Block Kit `markdown` 块，已进入 Review。

### Issue #12655 — model-picker 增加 `picker_providers` 配置过滤
- **链接**: [Issue #12655](https://github.com/NousResearch/hermes-agent/issues/12655)
- **热度**: 💬 7 评论 | P3 / CLI-Config
- **诉求**: 仅使用自定义端点的用户需要从 `/model` 选择器中隐藏内置 Provider（Anthropic、OpenRouter 等），避免 OAuth/自动检测条目干扰。
- **状态**: 无对应 PR，开自 2026-04-19，长期悬而未决。

### Issue #40014 — Claude Code OAuth (Max/Pro) 仍走按量计费端点
- **链接**: [Issue #40014](https://github.com/NousResearch/hermes-agent/issues/40014)
- **热度**: 💬 4 评论 | P2 / Auth
- **诉求**: 使用 Claude Max 订阅 + OAuth 凭证时，API 请求仍被路由到 `/v1/messages` 按量计费端点，消耗"额外用量"积分而非订阅配额。
- **状态**: 无 PR，需要 Provider 路由层主动识别订阅类型。

### Issue #47134 — `/reload-mcp` 导致 Gateway 崩溃（SIGTERM 发送到自身进程组）
- **链接**: [Issue #47134](https://github.com/NousResearch/hermes-agent/issues/47134)
- **热度**: 💬 3 评论 | P1 / Gateway MCP
- **诉求**: `killpg` 向自身进程组发送 SIGTERM 导致整个 Gateway 进程被终止。
- **状态**: 相关修复 PR [#47523](https://github.com/NousResearch/hermes-agent/pull/47523) 今日被提出，包含"harden native image routing and MCP probes"，部分缓解但未明确关闭此 Issue。

### Issue #47121 — MCP 工具在 TUI 会话中缺失（发现竞态 750ms vs ~6s）
- **链接**: [Issue #47121](https://github.com/NousResearch/hermes-agent/issues/47121)
- **热度**: 💬 2 评论 | P2 / TUI MCP
- **诉求**: `wait_for_mcp_discovery` 超时 0.75s 远短于 MCP 实际发现耗时（~6s），导致 TUI 会话中系统性地缺少 MCP 工具，Agent 回退到 terminal 工具。
- **状态**: 有相关 PR [#47520](https://github.com/NousResearch/hermes-agent/pull/47520) 提升 MCP 发现失败日志级别至 WARNING，但竞态修复可能还需进一步提升超时或改为阻塞等待。

### Issue #47000 — (德文) SysOps P12 全部 23 个 Lifecycle-Scheduler-Jobs 被禁用
- **链接**: [Issue #47000](https://github.com/NousResearch/hermes-agent/issues/47000)
- **热度**: 💬 3 评论 | P1 / 运维事故
- **诉求**: P12 角色意外禁用了所有 23 个 Lifecycle Scheduler 任务，P1 角色还在正常运行，出现状态漂移（自 2026-05-03）。
- **状态**: 这是多智能体运维隔离的案例，涉及 Roles/Auth 层是否有进程级别隔离保障。无直接 PR。

### Issue #39609 — Kanban `--initial-status blocked` 自动提升为 ready（审批门控被绕过）
- **链接**: [Issue #39609](https://github.com/NousResearch/hermes-agent/issues/39609)
- **热度**: 💬 3 评论 | 👍 1 | P3 / Plugins
- **诉求**: 任务创建后约 1 秒内被自动提升为 `ready`，无记录 Actor，绕过人工审批门控。
- **状态**: 无 PR。审批门控被绕过是一个信任/安全相关 Bug，需调查状态机的自动提升逻辑。

### Issue #40095 — Kanban Workers 崩溃：`display.interface: tui` 在无 TTY 环境下启动 TUI
- **链接**: [Issue #40095](https://github.com/NousResearch/hermes-agent/issues/40095)
- **热度**: 💬 1 评论 | P3 / CLI/TUI
- **诉求**: Kanban Worker Subprocess 有 `display.interface: tui` 时检测到无 TTY 后直接退出 rc=0，不执行 Agent 循环。
- **状态**: 无 PR。

### Issue #47521 — Ollama Cloud 模型切换后保留旧 Codex 端点
- **链接**: [Issue #47521](https://github.com/NousResearch/hermes-agent/issues/47521)
- **热度**: 💬 0 评论（今日新开） | Bug / Provider
- **诉求**: 切换 Provider 后 base_url 未刷新，请求被发送到原 chatgpt.com 端点。
- **状态**: 无 PR。与 #40014（订阅路由错误），共同指向 Provider 路由层存在缓存/变更刷新不完整的问题。

---

## 5. Bug 与稳定性

按严重程度排列：

### P0 — 安全修复
| # | Issue | 描述 | Fix PR | 状态 |
|---|-------|------|--------|------|
| [#47494](https://github.com/NousResearch/hermes-agent/pull/47494) | PR | 沙箱工具隔离绕过：`enabled_tools` 为 `None` 与空集合未区分 | 自身 | ✅ PR Review 中 |

### P1 — 关键功能中断
| # | Issue | 描述 | Fix PR | 状态 |
|---|-------|------|--------|------|
| [#47134](https://github.com/NousResearch/hermes-agent/issues/47134) | Issue | `/reload-mcr` → `killpg` 发送 SIGTERM → Gateway 自身崩溃 | [#47523](https://github.com/NousResearch/hermes-agent/pull/47523) | 🔄 PR 刚开，缓解级修复 |
| [#47360](https://github.com/NousResearch/hermes-agent/issues/47360) | Issue | Discord Gateway 连接成功但不接收 MESSAGE_CREATE 事件（已标 duplicate 关闭） | — | ❌ 标记 duplicate，待追踪原始 issue |
| [#46866](https://github.com/NousResearch/hermes-agent/issues/46866) | Issue | Signal 审批响应被错误路由为 steered mid-turn 消息，不进审批 handler | — | ⏳ 无 PR |
| [#47000](https://github.com/NousResearch/hermes-agent/issues/47000) | Issue | P12 全部 Lifecycle-Scheduler-Jobs 禁用（可能涉及权限隔离问题） | — | ⏳ 无 PR |

### P2 — 显著功能缺陷
| # | Issue | 描述 | Fix PR | 状态 |
|---|-------|------|--------|------|
| [#47121](https://github.com/NousResearch/hermes-agent/issues/47121) | Issue | TUI 中 MCP 工具系统性缺失（超时竞态） | [#47520](https://github.com/NousResearch/hermes-agent/pull/47520) 提升日志级别 | ⚠️ 日志修复已开，竞态根因未解决 |
| [#46464](https://github.com/NousResearch/hermes-agent/pull/46464) | PR | 跨线程中断时 session_source 被覆盖 → 消息路由错误 | [#47514](https://github.com/NousResearch/hermes-agent/pull/47514) | ✅ 已合并 |
| [#41407](https://github.com/NousResearch/hermes-agent/issues/41407) | Issue | WhatsApp 群组/LID JIDs 静默回退到 home channel | — | ⏳ 无 PR |
| [#47500](https://github.com/NousResearch/hermes-agent/issues/47500) | Issue | Desktop 应用自动预览外部链接触发自定义协议 handler (bitbrowser://) | — | ⏳ 无 PR |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | Issue | Windows 安装器在 desktop 阶段失败（npm exit code 1） | — | ⏳ 无 PR |

### P3 — 体验/边缘问题
| # | Issue | 描述 | Fix PR | 状态 |
|---|-------|------|--------|------|
| [#39609](https://github.com/NousResearch/hermes-agent/issues/39609) | Issue | Kanban blocked 状态自动提升绕过审批门控 | — | ⏳ 无 PR |
| [#47498](https://github.com/NousResearch/hermes-agent/issues/47498) | Issue | Desktop 应用发送照片时"Maximum call stack size exceeded"崩溃 | — | ⏳ 无 PR |
| [#47524](https://github.com/NousResearch/hermes-agent/issues/47524) | Issue | 快速切换 Profile 后 Composer 模型 pill 卡在 loading spinner | — | ⏳ 无 PR |
| [#41490](https://github.com/NousResearch/hermes-agent/issues/41490) | Issue | Agent 在工具调用被阻止后仍循环调用相同工具 | — | ⏳ 无 PR |
| [#37289](https://github.com/NousResearch/hermes-agent/issues/37289) | Issue | MiniMax-M3 上下文窗口硬编码 1M vs 模型实际 512K 不一致 | — | ⏳ 无 PR |

---

## 6. 功能请求与路线图信号

### 已确认有 PR 跟进（有望纳入近期版本）

| # | 功能 | PR | 作者 | 优先级 | 进展信号 |
|---|------|-----|------|--------|----------|
| Slack Block Kit 输出升级 | 将 Slack 默认消息格式从 legacy `mrkdwn` 改为 Block Kit `markdown` 块 | [#47051](https://github.com/NousResearch/hermes-agent/pull/47051) | tw0316 | P2 | Issue #8552（👍 7）已获得 PR 支持，双向确认 |
| Kanban 任务推理覆盖 | 支持 per-task `reasoning_override` 和 `--reasoning` CLI 参数 | [#47476](https://github.com/NousResearch/hermes-agent/pull/47476) | latentoperator | P3 | 独立 PR，功能完整 |
| 动态工作流协调 | 引入原生子 Agent 协调和依赖跟踪 | [#46971](https://github.com/NousResearch/hermes-agent/pull/46971) | bbopen | P3 | 独立 PR，功能完整 |
| Petdex 动画吉祥物 | 跨 CLI/TUI/Desktop 的动画 Mascot | [#46464](https://github.com/NousResearch/hermes-agent/pull/46464) | OutThisLife | P3 | 社区趣味功能 |
| MCP 工具调用超时提升 | 默认从 120s 提升到 300s（借鉴 openai/codex） | [#47506](https://github.com/NousResearch/hermes-agent/pull/47506) | teknium1 | P3 | 直接移植自 Codex 上游 |

### 无 PR、列为 Feature Request

| # | 功能 | 优先级 | 备注 |
|---|------|--------|------|
| [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) | 新增 IRC、Google Chat、LINE、Nostr、Twitch、QQBot 渠道（对齐 OpenClaw） | P3 | 开自 2026-04-13，长期积压，反映平台覆盖焦虑 |
| [#38849](https://github.com/NousResearch/hermes-agent/issues/38849) | Desktop 状态栏快速 Workspace 切换器 | P3 | ✅ 1 |
| [#39020](https://github.com/NousResearch/hermes-agent/issues/39020) | Desktop 独立 Providers 设置页（API key 管理/enable/disable） | P3 | ✅ 1 |
| [#47446](https://github.com/NousResearch/hermes-agent/issues/47446) | Agent 级 pre-response hook（用于 skill pre-loading 等工作流检查） | P3 | 框架需求 |
| [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) | Email 集成支持 JMAP 协议（替代 IMAP） | P3 | ✅ 1 |
| [#29379](https://github.com/NousResearch/hermes-agent/issues/29379) | 原生 Canvas Mode 用于协作规划和 UI 工作流 | P3 | ✅ 2 |
| [#40140](https://github.com/NousResearch/hermes-agent/issues/40140) | Windows Desktop 检测并集成已有 WSL 安装（避免双环境分裂） | P3 | ✅ 1 |
| [#47199](https://github.com/NousResearch/hermes-agent/issues/47199) | Claude Code 本地订阅 MCP Provider（无需 API Key） | P3 | 与 #40014 相关 |
| [#47499](https://github.com/NousResearch/hermes-agent/issues/47499) | Desktop UI 缩放/Zoom 控制 | P3 | 辅助功能 |

### 路线图信号判断

可能纳入下一版本的信号组合：
1. **消息渠道现代化**：Slack Block Kit PR (#47051) 已在活跃 Review，预计很快合并。
2. **Kanban 推理控制**：`reasoning_override` PR (#47476) 是独立的新功能，包含 CLI/TUI 支持，完整度高。
3. **Provider 管理 UI 重构**：Desktop Fallback Models 编辑器修复 (#47522) 已合并后，设置页的完整重构（#39020）可能跟进。
4. **多渠道路由修复**：WhatsApp JID 路由缺陷 (#41407) + Discord 事件丢失 (#47360) → 渠道适配层可能需要一次系统审计。
5. **MCP 稳定性**：超时竞态 (#47121) + 超时提升 (#47506) → MCP 连接层已有系统级别 Issue，可考虑合并为"MCP Stability Sprint"。

---

## 7. 用户反馈摘要

**真实痛点提炼**：

**A. 多平台消息路由一致性差**
- Slack 的 `mrkdwn` 格式已落后于需求，不支持表格、标准 Markdown（#8552）。WhatsApp JID 路由逻辑不完善（#41407）。Signal 审批响应被错误路由（#46866）。这三个问题的共同根因是**各平台适配器独立演进、缺乏统一的"消息路由与格式化抽象层"**。

**B. MCP 集成体验堪忧**
- TUI 中 MCP 工具系统性缺失（#47121），`/reload-mcp` 直接导致 Gateway 崩溃（#47134），发现失败仅记录在 DEBUG 级别（#47520），超时只有 120s（#47506）。**用户在实际使用中会遭遇 MCP 工具"时有时无"的困惑**，需要端到端的可靠性改进。

**C. 跨平台配置一致性不足**
- Desktop Profile 命名与 CLI 大小写行为不一致（已修），Fallback Provider 显示 `[object Object]`（已修），Windows Desktop 无法集成 WSL 环境的（#40140）——用户在**双端工作流中被迫维护两套配置**。

**D. 订阅/认证模型理解不够透明**
- Claude OAuth 用户发现消耗的是"额外用量"而非订阅配额（#40014），不了解路由决策过程。用户无法简单地在"Hermes 使用 Max 订阅"之间建立信任映射。**需要在 UI/日志中明确展示计费路径**。

**E. 稳定性信任危机**
- Desktop 发送照片导致调用栈溢出崩溃（#47498），Kanban 状态机出现未经授权的自动提升（#39609），`/reload-mcp` 崩溃（#47134）。三个不同模块的关键路径崩溃正在侵蚀用户对**核心功能可靠性的信心**。

**正面信号**：
- Desktop i18n 支持 15 种语言的 PR (#38846) 显示了强劲的国际化社区贡献力。
- Petdex 吉祥物 PR (#46464) 体现了社区对品牌体验的关注。
- 用户对 Block Kit 升级的支持（👍 9）表明核心渠道改进方向正确。

---

## 8. 待处理积压

以下为**超过 30 天未获响应或实质性进展**的重要 Issue/PR：

### Issues

| # | 标题 | 创建 | 最后更新 | 分类 | 风险评级 |
|---|------|------|----------|------|----------|
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | Slack: use Block Kit markdown block type | 2026-04-12 | 2026-06-16 | Feature/Slack | 🔴 高 — 尽管有 PR，Issue 本身仍 open，PR 合并状态不明确 |
| [#12655](https://github.com/NousResearch/hermes-agent/issues/12655) | feat: add picker_providers config to filter model/ | 2026-04-19 | 2026-06-16 | Feature/Config | 🔴 高 — 63 天无 PR，7 条讨论 |
| [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) | feat: add missing messaging channels (IRC/Chat/LINE/Nostr/Twitch) | 2026-04-13 | 2026-06-16 | Feature/Plat. | 🟡 中 — 大范围需求，需分阶段 |
| [#11424](https://github.com/NousResearch/hermes-agent/issues/11424) | Support for JMAP in email integration | 2026-04-17 | 2026-06-16 | Feature/Email | 🟡 中 |
| [#47000](https://github.com/NousResearch/hermes-agent/issues/47000) | SysOps P12: Lifecycle-Scheduler disabled | 2026-06-16 | 2026-06-16 | P1/运维 | 🔴 高 — P1 事故级，涉及权限隔离 |
| [#41490](https://github.com/NousResearch/hermes-agent/issues/41490) | Agent loops on identical tool calls despite being blocked | 2026-06-07 | 2026-06-16 | Bug/Agent | 🟡 中 |
| [#38849](https://github.com/NousResearch/hermes-agent/issues/38849) | Add quick workspace switcher on Hermes Desktop status bar | 2026-06-04 | 2026-06-16 | Feature/Desktop | 🟡 中 |

### PRs（长期开放 Review 中）

| # | 标题 | 创建 | 最后更新 | 作者 | 风险评级 |
|---|------|------|----------|------|----------|
| [#47051](https://github.com/NousResearch/hermes-agent/pull/47051) | feat(slack): add opt-in markdown block rich output | 2026-06-16 | 2026-06-17 | tw0316 | 🟢 低 — 活跃 PR |
| [#37814](https://github.com/NousResearch/hermes-agent/pull/37814) | fix(agent): suppress stale review tool summaries | 2026-06-03 | 2026-06-17 | konsisumer | 🟡 中 — 已开放 14 天 |
| [#47476](https://github.com/NousResearch/hermes-agent/pull/47476) | feat: add Kanban task reasoning overrides | 2026-06-16 | 2026-06-17 | latentoperator | 🟢 低 |
| [#46971](https://github.com/NousResearch/hermes-agent/pull/46971) | feat(dynamic-workflow): add native workflow coordination | 2026-06-16 | 2026-06-17 | bbopen | 🟢 低 |
| [#46464](https://github.com/NousResearch/hermes-agent/pull/46464) | feat(pets): petdex animated mascots across CLI/TUI/desktop | 2026-06-15 | 2026-06-17 | OutThisLife | 🟢 低 |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | feat(desktop): add multilingual i18n support with 15 languages | 2026-06-04 | 2026-06-17 | iaendi | 🟡 中 — 已开放 13 天，需要与上游 i18n 骨架合并 |

### 维护者行动建议

1. **🔴 立即处理**：Issue #47000（P1 级运维事故）、Issue #40014（配额路由问题，涉及付费用户信任）应在本周内给出回应或分配 owner。
2. **🟡 本周内响应**：Issue #12655（picker_providers，63 天积压），Issue #41490（Agent 循环），Issue #47121（MCP 竞态）均已有多次讨论，需方向确认。
3. **📊 积压管理**：建议对超过 30 天未响应的 Issue 进行批量 triage，标记 `stale` 或给出 timeline 期望，提升社区信任度。
4. **🔀 PR 合并节奏**：当前 40 个 PR 待合并，活跃的 Review 流程显然存在瓶颈。建议增加 Code Review 轮次或扩大 Reviewer 权限范围。

---

> **报告时间**: 2026-06-17 | **数据窗口**: 过去 24 小时 | **来源**: GitHub `NousResearch/hermes-agent`
> **分析**: OWL — ZOO Company

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-17

---

## 1. 今日速览

PicoClaw 今日活跃度处于**高位**：过去 24 小时内共处理 15 条 Issue 更新（13 条新开/活跃、2 条关闭）和 16 条 PR 更新（13 条已合并/关闭、3 条待合并），并发布了 nightly 构建版本。项目整体呈现**快速迭代**态势——大量 stale 安全类 Issue 集中被重新激活（更新），同时多个核心 bug fix 和稳定性 PR 在今日完成合并。值得关注的是，社区安全研究员 YLChen-007 持续提交的安全漏洞报告已形成积压，维护者尚未逐一响应。

---

## 2. 版本发布

### Nightly Build — `v0.2.9-nightly.20260616.c1ff5aa6`

- **类型**：自动化 nightly 构建，**非稳定版本**，请谨慎用于生产环境。
- **对比基线**：自 `v0.2.9` 以来 main 分支的全部增量提交。
- **Full Changelog**：https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- **说明**：nightly 版本包含今日合并的多个 bug fix（Telegram forum 回复、goroutine panic 恢复、session history 读取等），适合开发者和早期试用者验证最新修复。

---

## 3. 项目进展

今日合并/关闭的 PR 共 13 条，以下按重要性排列：

### 🔧 核心 Bug Fix

| PR | 说明 |
|---|---|
| **#3135** [fix(telegram): use compositeChatID in InboundContext.ChatID for forum topics](https://github.com/sipeed/picoclaw/pull/3135) | **修复 Telegram Forum 话题回复错乱问题**。此前 `InboundContext.ChatID` 未携带 thread ID，导致回复消息被发送到 `#General` 根话题而非目标子话题。此 PR 与 Issue #3110 直接对应，今日同步关闭。 |
| **#3132** [fix: add panic recovery to core-path goroutines](https://github.com/sipeed/picoclaw/pull/3132) | **为关键路径 goroutine 添加 panic recovery**。此前未受保护的 goroutine panic 会导致整个进程崩溃，此次修复覆盖工具执行等核心路径，显著提升运行时稳定性。 |
| **#2983** [fix(agent): retry empty llm response](https://github.com/sipeed/picoclaw/pull/2983) | **修复 LLM 返回空响应时的重试逻辑**。当 OpenAI 兼容端返回 HTTP 200 但 `content: null` 且无 tool calls 时，此前被当作有效响应处理，现在会触发重试。 |
| **#2987** [fix(channels): exclude tool_calls from auxiliary message filtering](https://github.com/sipeed/picoclaw/pull/2987) | **修复流式传输中 tool_calls 消息被错误丢弃的问题**。`preSend()` 在流活跃时过滤了所有辅助消息，导致 tool_calls 丢失。 |
| **#2988** [fix(agent): use summarize_token_percent config for context compression](https://github.com/sipeed/picoclaw/pull/2988) | **修复 `/context` 命令忽略 `summarize_token_percent` 配置的问题**。此前无论配置如何，始终显示固定值 76800 tokens。 |
| **#2990** [fix(web): read full session history for Web UI display](https://github.com/sipeed/picoclaw/pull/2990) | **修复 Web UI 会话历史仅显示最后一条用户消息的问题**。根因是 `readJSONLSession()` 传入了 `meta.Skip` 导致跳过历史消息。 |

### ⚡ 功能增强

| PR | 说明 |
|---|---|
| **#3137** [feat: allow configured remote cron commands](https://github.com/sipeed/picoclaw/pull/3137) | **新增 `tools.cron.command_allowed_remotes` 配置项**，允许指定远程通道或远程 cron 命令的白名单，增强 cron 工具的安全性。 |
| **#3120** [feat(config): add RegisterChannelSettings hook for out-of-tree channels](https://github.com/sipeed/picoclaw/pull/3120) | **新增 `RegisterChannelSettings` hook**，使第三方模块（out-of-tree channels）无需 fork PicoClaw 即可完成通道配置注册，提升可扩展性。 |

### 🧹 代码质量

| PR | 说明 |
|---|---|
| **#3127** [fix: explicitly ignore Close() errors on directory file descriptors](https://github.com/sipeed/picoclaw/pull/3127) | 显式忽略目录文件描述符的 `Close()` 错误，消除 linter 警告。 |
| **#3129** [fix(tts): explicitly ignore file.Close() error in write error path](https://github.com/sipeed/picoclaw/pull/3129) | TTS 模块写入失败路径中显式忽略 `file.Close()` 错误。 |
| **#3130** [fix(seahorse): handle json.Marshal errors in grep and expand tools](https://github.com/sipeed/picoclaw/pull/3130) | 修复 grep/expand 工具中 `json.Marshal` 错误被静默丢弃的问题，改为返回描述性错误。 |

### 📖 文档

| PR | 说明 |
|---|---|
| **#3096** [docs: add PicoPaw banners to READMEs](https://github.com/sipeed/picoclaw/pull/3096) | 为 README 添加 PicoPaw 横幅。 |

### 项目整体评估

今日合并的 PR 覆盖了 **稳定性（panic 恢复）、核心功能（Telegram、LLM 重试、流式消息）、可扩展性（out-of-tree channels）** 三个维度，项目健康度良好。多个 stale PR（#2983、#2987、#2988、#2990）在今日完成合并，说明维护者正在清理积压。

---

## 4. 社区热点

### 🔥 Issue #2404 — [Feature] Add in config to send streaming HTTP request
- **链接**：https://github.com/sipeed/picoclaw/issues/2404
- **数据**：12 条评论、1 个 👍，创建于 2026-04-07，今日仍有活跃更新
- **分析**：这是今日**评论数最多**的 Issue。用户希望在配置文件中添加 `"streaming": true` 以支持向 LLM 后端发送流式 HTTP 请求（类似 Python OpenAI 客户端的 `stream=True`）。该需求自 4 月提出以来持续讨论，说明**流式输出**是社区高频诉求。目前尚无对应 PR，建议评估后纳入路线图。

### 🔒 安全类 Issue 批量激活（10 条 stale 安全报告今日更新）

以下 Issue 均由安全研究员 YLChen-007 于 2026-06-09 提交，今日被重新激活（更新），但均处于 stale 状态且评论数仅 1 条：

| Issue | 标题 | 严重程度 |
|---|---|---|
| [#3082](https://github.com/sipeed/picoclaw/issues/3082) | Feishu reply-context expansion bypasses `allow_from` | 🔴 高 |
| [#3081](https://github.com/sipeed/picoclaw/issues/3081) | Approval hook `cwd` symlink race | 🔴 高 |
| [#3079](https://github.com/sipeed/picoclaw/issues/3079) | `exec` command whitelist allows jq environment disclosure | 🟠 中高 |
| [#3078](https://github.com/sipeed/picoclaw/issues/3078) | `web_fetch` SSRF protection bypass via HTTP proxy | 🔴 高 |
| [#3076](https://github.com/sipeed/picoclaw/issues/3076) | WeCom group trigger policy bypass | 🟠 中高 |
| [#3075](https://github.com/sipeed/picoclaw/issues/3075) | Untrusted `skills/` metadata auto-loaded into system prompt | 🟠 中高 |
| [#3074](https://github.com/sipeed/picoclaw/issues/3074) | `web_fetch` SSRF guard bypass via ISATAP IPv6 | 🔴 高 |
| [#3073](https://github.com/sipeed/picoclaw/issues/3073) | Signed LINE webhook replay allows duplicate execution | 🟠 中高 |
| [#3072](https://github.com/sipeed/picoclaw/issues/3072) | CSRF in Launcher First-Run Password Setup | 🔴 高 |
| [#3071](https://github.com/sipeed/picoclaw/issues/3071) | WebSocket clients can trigger unauthorized `/reload` | 🟠 中高 |
| [#3070](https://github.com/sipeed/picoclaw/issues/3070) | OneBot inbound media URL allows host-side arbitrary fetch | 🔴 高 |
| [#3068](https://github.com/sipeed/picoclaw/issues/3068) | MQTT `allow_from` authorization bypass via topic spoofing | 🔴 高 |

**分析**：这是一批**系统性的安全审计结果**，覆盖 Feishu、WeCom、LINE、OneBot、MQTT 多个通道以及 `web_fetch`、`exec`、`skills` 等核心工具。今日集中更新可能是安全研究员在推动维护者关注。**建议优先处理 SSRF 相关（#3078、#3074）和 CSRF（#3072）问题**。

---

## 5. Bug 与稳定性

### 已修复（今日合并 PR）

| 问题 | 严重程度 | Fix PR |
|---|---|---|
| Telegram Forum 话题回复发送到错误话题 | 🟠 中 | [#3135](https://github.com/sipeed/picoclaw/pull/3135) ✅ |
| 核心路径 goroutine panic 导致进程崩溃 | 🔴 高 | [#3132](https://github.com/sipeed/picoclaw/pull/3132) ✅ |
| LLM 空响应未触发重试 | 🟠 中 | [#2983](https://github.com/sipeed/picoclaw/pull/2983) ✅ |
| 流式传输中 tool_calls 消息丢失 | 🟠 中 | [#2987](https://github.com/sipeed/picoclaw/pull/2987) ✅ |
| Web UI 会话历史仅显示最后一条消息 | 🟡 低 | [#2990](https://github.com/sipeed/picoclaw/pull/2990) ✅ |

### 新报告 Bug（待处理）

| Issue | 问题 | 严重程度 | Fix PR |
|---|---|---|---|
| [#3134](https://github.com/sipeed/picoclaw/issues/3134) | `su -c 'echo OK'` 在 agent gateway 环境下返回 "No daemon is currently running!" 并崩溃退出 | 🟠 中 | 无 |
| [#3110](https://github.com/sipeed/picoclaw/issues/3110) | Telegram adapter 忽略 `message_thread_id`（已关闭，由 #3135 修复） | 🟠 中 | [#3135](https://github.com/sipeed/picoclaw/pull/3135) ✅ |

### 待合并 PR 中的修复

| PR | 问题 | 严重程度 |
|---|---|---|
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | Pico `turn.done` 生命周期信号不完整，`request_id` 丢失 | 🟠 中 |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | 内联 data URL 被误识别为媒体附件，导致会话历史损坏 | 🟠 中 |
| [#3136](https://github.com/sipeed/picoclaw/pull/3136) | Gemini provider 仅设置 camelCase `thought_signature`，Gemini 3.5 Flash Agentic 需要 snake_case | 🟡 低 |

---

## 6. 功能请求与路线图信号

### 明确的功能请求

| Issue | 需求 | 信号强度 | 对应 PR |
|---|---|---|---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 配置化支持流式 HTTP 请求（`streaming: true`） | 🔥 强（12 评论，跨 2 月持续讨论） | 无 |

### 从已合并 PR 推断的路线图方向

1. **可扩展性**：PR #3120 新增 `RegisterChannelSettings` hook，表明项目正在**正式支持第三方通道插件化**，未来可能看到更多 out-of-tree 通道生态。
2. **安全性增强**：PR #3137 为 cron 工具添加远程命令白名单，结合今日批量激活的安全 Issue，**安全加固**是明确的优先方向。
3. **多模型兼容**：PR #3136（待合并）修复 Gemini 3.5 Flash 的 `thought_signature` 格式问题，说明项目在**适配更多推理模型**的 agentic 特性。

### 预测

- **流式输出支持**（Issue #2404）极有可能纳入下一正式版本，社区需求强烈且实现方案明确。
- 安全类修复可能以**安全补丁版本**（如 v0.2.10-security）的形式集中发布。

---

## 7. 用户反馈摘要

### 痛点

1. **Telegram Forum 支持不完善**：用户反馈在 Supergroup Forum 模式下，bot 虽然能正确触发 typing 指示器，但回复消息总是跑到 `#General` 根话题（Issue #3110）。**已修复**。
2. **LLM 流式输出需求强烈**：用户明确表示需要类似 OpenAI Python SDK 的 `stream=True` 配置选项（Issue #2404），当前缺乏此功能影响实时交互体验。
3. **安全顾虑集中爆发**：安全研究员 YLChen-007 提交的系统性安全审计覆盖了 12 个漏洞，涉及多个通道和核心工具，反映出**安全是当前最大的用户信任风险**。
4. **`su -c` 命令执行失败**：用户在 agent gateway 环境下执行 `su -c 'echo OK'` 时遇到 daemon 未运行错误并崩溃（Issue #3134），影响需要在特权上下文中执行命令的使用场景。

### 满意点

- 多个长期 stale PR（#2983、#2987、#2988、#2990）在今日完成合并，说明维护者正在积极清理积压，社区贡献者会感受到**被响应**。
- goroutine panic 恢复（PR #3132）的及时合并表明维护者对**稳定性问题**的重视。

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 类型 | 创建日期 | 状态 | 建议 |
|---|---|---|---|---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Feature | 2026-04-07 | 开放，12 评论 | **高优先级**：需求明确、社区关注度高，建议尽快给出路线图回应 |
| [#3082](https://github.com/sipeed/picoclaw/issues/3082) | Security | 2026-06-09 | stale | Feishu `allow_from` 绕过，建议 48 小时内响应 |
| [#3072](https://github.com/sipeed/picoclaw/issues/3072) | Security | 2026-06-09 | stale | CSRF 导致控制面接管，**严重**，建议立即评估 |
| [#3078](https://github.com/sipeed/picoclaw/issues/3078) | Security | 2026-06-09 | stale | SSRF 绕过，建议优先修复 |
| [#3074](https://github.com/sipeed/picoclaw/issues/3074) | Security | 2026-06-09 | stale | SSRF 绕过（IPv6），建议与 #3078 一并处理 |

### 待合并 PR（需维护者 Review）

| PR | 类型 | 创建日期 | 说明 |
|---|---|---|---|
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | Fix | 2026-06-12 | Pico `turn.done` 生命周期修复，关联 Issue #2984 |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | Fix | 2026-06-12 | 内联 data URL 误识别为媒体附件，导致会话历史损坏 |
| [#3136](https://github.com/sipeed/picoclaw/pull/3136) | Fix | 2026-06-16 | Gemini `thought_signature` 格式兼容 |

### 维护者行动建议

1. **安全响应**：建议在未来 7 天内对 YLChen-007 提交的 12 个安全 Issue 逐一确认并给出修复计划，必要时发布安全公告。
2. **流式输出**：对 Issue #2404 给出明确的路线图回应（接受/拒绝/排期），避免社区热情消退。
3. **PR Review**：3 个待合并 PR 均为 bug fix，建议尽快 review 合并，减少积压。

---

> **日报生成时间**：2026-06-17
> **数据来源**：GitHub sipeed/picoclaw（过去 24 小时）
> **项目健康度评估**：🟢 **良好** — 迭代速度快、bug 修复及时，但安全积压需尽快处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-06-17 | 数据来源：github.com/nanocoai/nanoclaw**

---

## 1. 今日速览

过去 24 小时，NanoClaw 项目共处理 **6 条 Issues**（5 条新开/活跃，1 条已关闭）和 **5 条 Pull Requests**（1 条待合并，4 条已合并/关闭），无新版本发布。项目处于**高活跃维护期**，社区反馈集中在 Slack 消息路由、容器热更新、安全文档过时等具体问题上。一条关键 bug（预算耗尽时 LLM 回复被静默丢弃）已通过 PR #2759 完成修复并合并，体现了较快的响应节奏。整体来看，项目迭代稳健，但积压的文档债务和若干新 bug 需要关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 状态 | 说明 |
|---|---|---|
| **[#2759](https://github.com/nanocoai/nanoclaw/pull/2759)** — fix(agent-runner): deliver budget/billing error turns instead of dropping them | ✅ 已合并 | 修复了一个影响用户体验的关键 bug：当 LLM 调用因 token/费用预算耗尽而中断时，agent-runner 不再静默丢弃该轮回复，而是将错误信息传递给用户。对应 Issue [#2751](https://github.com/nanocoai/nanoclaw/issues/2751)。 |
| **[#2782](https://github.com/nanocoai/nanoclaw/pull/2782)** — fix: make tailscale-docker routing service self-healing | ✅ 已合并 | 将 Tailscale Docker 路由的 systemd 服务从 `Type=oneshot` 升级为自修复方案，解决了 Tailscale 在会话中刷新 ip rule 导致规则静默丢失的问题。 |
| **[#2775](https://github.com/nanocoai/nanoclaw/pull/2775)** — docs(changelog): clarify the OneCLI gateway is a separate, operator-driven upgrade | ✅ 已合并 | 修正了 changelog 中关于 `@onecli-sh/sdk` 2.2.1 升级说明的误导性措辞，明确 OneCLI 网关升级是独立于 NanoClaw 包的操作。 |
| **[#2069](https://github.com/nanocoai/nanoclaw/pull/2069)** — Skill/webchat v1 | 🔒 已关闭 | 一个较早期的 webchat 技能 PR，已关闭（非合并）。 |

### 待合并 PR

| PR | 状态 | 说明 |
|---|---|---|
| **[#2780](https://github.com/nanocoai/nanoclaw/pull/2780)** — feat(upgrade-state): env opt-out for the startup tripwire (managed fleets) | 🟡 待合并 | 为受管集群（managed fleets）场景新增 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` 环境变量，允许在不可变镜像部署中跳过启动升级检查。面向企业级部署的灵活性改进。 |

**进展总结：** 今日合并的 PR 覆盖了关键 bug 修复（预算耗尽静默丢弃）、基础设施可靠性（Tailscale 路由自修复）和文档准确性（OneCLI 升级说明），项目在稳定性和部署灵活性两个方向均有实质推进。

---

## 4. 社区热点

### 🔥 最热 Issue

**[#1669](https://github.com/nanocoai/nanoclaw/issues/1669) — Does Credential Proxy implementation risk Anthropic account bans？**
- **作者：** LCJD99 | **评论：** 1
- **核心诉求：** 社区成员关注 Credential Proxy 的当前实现是否会触发 Anthropic 的反欺诈检测，导致账号被封禁。这反映了一部分用户对 OAuth 合规风险的深度担忧，尤其是在 Anthropic 明确禁止 OAuth 逆向代理的背景下。
- **分析：** 该 Issue 创建于 4 月 6 日，今日仍有活动，说明问题尚未得到充分回应。这是一个**合规与安全高度相关的议题**，建议维护者给出明确的技术说明或风险提示。

### 🔥 最热 Bug 报告

**[#2779](https://github.com/nanocoai/nanoclaw/issues/2779) — Slack: @handles inside URLs get mangled into broken mentions**
- **作者：** GitOnion | **评论：** 1
- **核心诉求：** 当 agent 向 Slack 发送包含 `@handle` 的 URL（如 HackMD 链接 `hackmd.io/@user/...`）时，Slack 的 @ 提及机制会破坏 URL 结构。这是一个直接影响消息正确性的问题。
- **分析：** 涉及 Slack channel 的消息转义/编码逻辑，修复难度预计不大，但影响面可能较广（所有含 @ 的 URL 均受影响）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | **[#2751](https://github.com/nanocoai/nanoclaw/issues/2751)** (已关闭) | 预算耗尽的 LLM 轮次被静默丢弃，用户收不到任何回复 | ✅ 已由 PR [#2759](https://github.com/nanocoai/nanoclaw/pull/2759) 修复 |
| 🟠 中 | **[#2779](https://github.com/nanocoai/nanoclaw/issues/2779)** | Slack 中 URL 内的 `@handle` 被错误解析为 @ 提及，导致链接断裂 | ❌ 暂无 |
| 🟠 中 | **[#2784](https://github.com/nanocoai/nanoclaw/issues/2784)** | container-runner 的 session 源文件新鲜度检查仅监控 `index.ts`，遗漏 `ipc-mcp-stdio.ts` 的变更，可能导致容器内运行过时代码 | ❌ 暂无 |
| 🟡 低 | **[#2783](https://github.com/nanocoai/nanoclaw/issues/2783)** | `docs/SECURITY.md` 仍描述已废弃的 v1 信任模型，引用了不存在的 skill，与当前 v2 角色权限架构不符 | ❌ 暂无 |

**稳定性评估：** 最严重的 bug（#2751）已修复。但 #2784 涉及容器内代码同步不完整，在开发/调试场景下可能导致难以排查的行为异常，建议优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 分析 |
|---|---|---|
| **原生凭证支持（绕过 OneCLI）** | **[#2781](https://github.com/nanocoai/nanoclaw/issues/2781)** | 下游打包者希望在沙箱环境中直接使用外部注入的 provider 凭证，跳过 OneCLI 认证。这与 PR #2780（受管集群的升级检查跳过）共同指向**企业级/受管环境部署灵活性**这一方向，可能是下一版本的重要主题。 |
| **受管集群启动升级检查跳过** | **[#2780](https://github.com/nanocoai/nanoclaw/pull/2780)** (待合并) | 为不可变镜像部署提供 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE` 环境变量。已进入 PR 阶段，合并概率高。 |

**路线图信号：** 从近期合并的 PR 和新 Issue 来看，项目正在向**企业/受管部署场景**倾斜，关注点包括：部署灵活性（环境变量控制）、认证链简化（绕过 OneCLI）、以及基础设施可靠性（Tailscale 路由自修复）。

---

## 7. 用户反馈摘要

### 痛点
- **静默失败无反馈：** 用户（Issue #2751）对 LLM 调用因预算耗尽被静默丢弃表示不满——这是最影响信任度的体验问题。✅ 已修复。
- **Slack 消息正确性：** 用户（Issue #2779）发现 URL 中的 `@` 被 Slack 解析机制破坏，影响 agent 输出信息的可读性和可用性。
- **容器开发体验：** 开发者（Issue #2784）指出文件同步逻辑的盲区，可能导致容器内运行与本地不一致的代码，增加调试难度。

### 满意/积极信号
- Issue #2751 的修复 PR（#2759）在报告后 **4 天内**即完成合并，响应速度获社区认可。
- Tailscale 路由自修复（PR #2782）体现了对基础设施可靠性的持续投入。

### 使用场景
- **受管集群/不可变镜像部署：** 多个 Issue/PR 涉及企业级部署场景（PR #2780、Issue #2781），说明 NanoClaw 正在被集成到更复杂的基础设施中。
- **下游打包/沙箱环境：** Issue #2781 反映了 NanoClaw 作为组件被二次分发的趋势。

---

## 8. 待处理积压

| Issue/PR | 等待时间 | 建议 |
|---|---|---|
| **[#1669](https://github.com/nanocoai/nanoclaw/issues/1669)** — Credential Proxy 封号风险 | 创建于 2026-04-06，已 **72 天**未关闭 | ⚠️ 高优先级。涉及合规风险，建议维护者尽快给出官方立场（是否安全 / 是否有缓解措施），避免社区猜测。 |
| **[#2784](https://github.com/nanocoai/nanoclaw/issues/2784)** — container-runner 文件同步遗漏 | 创建于 2026-06-16，**1 天** | 建议评估修复难度，若简单则尽快出 PR。 |
| **[#2783](https://github.com/nanocoai/nanoclaw/issues/2783)** — SECURITY.md 过时 | 创建于 2026-06-16，**1 天** | 文档类 Issue，修复成本低但对项目可信度影响大，建议排入下一批处理。 |
| **[#2780](https://github.com/nanocoai/nanoclaw/pull/2780)** — 受管集群升级检查跳过 | 创建于 2026-06-16，**1 天** | 待合并状态，建议尽快 review 合并。 |

---

**日报总结：** NanoClaw 今日在 bug 修复和部署灵活性方面取得实质进展，社区活跃度良好。需重点关注 Credential Proxy 合规风险（#1669）的长期未响应问题，以及容器文件同步（#2784）和文档过时（#2783）两个新 Issue 的跟进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-17

---

## 1. 今日速览

过去 24 小时内，NullClaw 社区活跃度**中等偏低**：共新开/活跃 Issue 2 条，待合并 PR 3 条，无新版本发布。项目当前处于**修复与功能打磨阶段**——3 个开放 PR 中有 2 个直接针对近期报告的 Bug（调度器令牌持久化、Teams 认证兼容性），表明维护者对稳定性问题响应较为及时。整体来看，项目节奏稳健，但积压的长期 Issue/PR 值得持续关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日无 PR 被合并或关闭，但有 3 个 PR 处于开放状态，其中 2 个为近期提交，直接对应已知 Bug：

| PR | 状态 | 说明 |
|---|---|---|
| **#959** fix(cron): persist paired token for scheduler tool access | 🟡 OPEN | 修复 Issue #839 中报告的"bit has no access to scheduler"问题。`/pair` 成功后，gateway 将新生成的 bearer token 持久化到 `<config_dir>/paired_token`，并通过 `SecretStore`（ChaCha20-Poly1305 加密，`enc2:` 信封，`0600` 权限）加密存储。这是对调度器安全认证链的关键修复。 |
| **#958** fix(teams): accept lowercase `serviceurl` JWT claim and raise JWKS fetch cap | 🟡 OPEN | 修复 MS Teams Bot Framework 连接器 token 验证中的两个问题：(1) `serviceUrl` claim 大小写不匹配导致 403 拒绝；(2) JWKS 获取上限过低。直接影响 Teams 渠道的可用性。 |
| **#783** feat(cron): cron subagent, run history, JSON output, security hardening | 🟡 OPEN | 大型功能 PR（自 2026-04-07 起开放），引入 DB 驱动的调度器、cron 子代理引擎、运行历史表、JSON CLI 输出等。已持续开放近 2.5 个月，可能涉及较大范围的代码审查。 |

**整体评估**：项目在调度器安全性和多平台兼容性方面持续推进，但合并节奏偏慢，3 个 PR 均处于待审状态。

---

## 4. 社区热点

### Issue #952 — Local model using ollama returns incomplete answers
- **链接**: [nullclaw/nullclaw#952](https://github.com/nullclaw/nullclaw/issues/952)
- **热度**: 2 条评论，创建于 2026-06-11，最后更新 2026-06-16
- **分析**: 用户通过 Ollama 拉取 Gemma 模型后，Agent 返回的答案不完整（非完整句子）。这反映了**本地模型集成体验**的痛点——用户期望开箱即用的本地 LLM 支持，但实际输出质量可能受模型能力、prompt 工程或上下文窗口截断影响。目前尚无官方回复或关联 PR。

### Issue #839 — bug: bit has no access to scheduler !?
- **链接**: [nullclaw/nullclaw#839](https://github.com/nullclaw/nullclaw/issues/839)
- **热度**: 1 条评论，创建于 2026-04-18，最后更新 2026-06-16
- **分析**: 调度器访问权限问题，用户报告 bit（子代理？）无法访问调度器。**已有 PR #959 直接修复此问题**，社区诉求明确且维护者已响应。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 **高** | [#839](https://github.com/nullclaw/nullclaw/issues/839) — bit has no access to scheduler | 调度器核心功能不可用，影响自动化任务执行 | ✅ PR #959 已开放 |
| 🟡 **中** | [#952](https://github.com/nullclaw/nullclaw/issues/952) — Ollama 本地模型返回不完整答案 | 影响本地 LLM 用户体验，但非核心功能阻断 | ❌ 尚无关联 PR |
| 🟡 **中** | [#958](https://github.com/nullclaw/nullclaw/pull/958) 中修复的 Teams 403 问题 | MS Teams 渠道认证失败，影响企业用户 | ✅ PR #958 已开放 |

---

## 6. 功能请求与路线图信号

- **Cron 子代理与调度器增强**（PR #783）：这是当前最大的功能 PR，涵盖 DB 驱动调度、子代理引擎、运行历史、JSON 输出等。结合 Issue #839 的修复需求，**调度器模块显然是下一版本的重点方向**。
- **本地模型支持优化**（Issue #952）：随着 Ollama 等本地 LLM 工具的普及，用户对本地模型集成体验的期望持续提升。虽然当前 Issue 报告的是模型输出质量问题，但可能推动项目在 prompt 模板、上下文管理或模型适配层进行改进。
- **MS Teams 渠道稳定性**（PR #958）：企业级通信渠道的认证修复表明 NullClaw 正在加强多平台适配能力。

---

## 7. 用户反馈摘要

| 维度 | 反馈 |
|---|---|
| **痛点** | 本地模型（Ollama + Gemma）输出不完整，影响 Agent 可用性；调度器权限配置复杂，子代理无法正常访问 |
| **使用场景** | 本地 LLM 部署（Ollama）、MS Teams 企业集成、自动化调度任务（cron） |
| **满意点** | 维护者对 Issue #839 响应迅速，PR #959 已针对性修复 |
| **不满意点** | Issue #952 自 6 月 11 日创建以来无官方回复；PR #783 开放近 2.5 个月未合并，可能影响贡献者积极性 |

---

## 8. 待处理积压

| 项目 | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| **PR #783** — feat(cron): cron subagent, run history, JSON output | 2026-04-07 | 🟡 OPEN（近 2.5 个月） | 大型功能 PR，建议维护者明确审查时间线或拆分合并，避免贡献者流失 |
| **Issue #952** — Ollama 本地模型不完整输出 | 2026-06-11 | 🔴 OPEN（无回复） | 建议至少回复确认问题范围，引导用户提供复现步骤或日志 |
| **Issue #839** — bit has no access to scheduler | 2026-04-18 | 🔴 OPEN（PR #959 待合并） | PR 已就绪，建议尽快合并关闭 Issue |

---

> **项目健康度评估**：🟡 **中等**。核心 Bug 有对应修复 PR 但合并节奏偏慢，长期积压的 PR #783 和 Issue #952 需要维护者关注。整体方向正确，但响应速度有待提升。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-06-17 | 项目：nearai/ironclaw**

---

## 1. 今日速览

过去 24 小时，IronClaw 项目共处理 **50 条 Issues**（28 条新开/活跃，22 条已关闭）和 **50 条 Pull Requests**（35 条待合并，15 条已合并/关闭），无新版本发布。项目处于**高活跃迭代期**，核心工作集中在 Reborn WebUI 的 UX 修复、Engine V2 架构演进、以及自动化（Automations）功能的稳定性治理上。多位核心贡献者（serrrfirat、sunglow666、think-in-universe、zetyquickly）并行推进，社区反馈以 Reborn 本地体验的 Bug 报告和功能建议为主。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 |
|---|---|---|
| [PR #4902](https://github.com/nearai/ironclaw/pull/4902) | ilblackdragon | **OpenAI 兼容视觉支持**：`/v1/chat/completions` 现在支持内联 base64 `image_url` 内容，完成 #4644 附件史诗的第 4 步 |
| [PR #4954](https://github.com/nearai/ironclaw/pull/4954) | henrypark133 | **审批拒绝不再取消运行**：修复审批门拒绝后模型无法感知用户拒绝的问题，避免同一审批循环重复触发 |
| [PR #4858](https://github.com/nearai/ironclaw/pull/4858) | think-in-universe | **Shell 命令详情可见性**：在审批对话框和活动历史中展示经过净化的 shell 命令摘要 |
| [PR #4995](https://github.com/nearai/ironclaw/pull/4995) | pranavraja99 | **Benchmark 路由到 NEAR AI 云**：转发 `NEARAI_API_KEY` 使 /benchmark 工作流使用 NEAR 云而非 OpenRouter |

### 待合并的重要 PR（关键路径）

| PR | 作者 | 说明 |
|---|---|---|
| [PR #5003](https://github.com/nearai/ironclaw/pull/5003) | thisisjoshford | **修复 Railway local-dev SSO 自动化失败**（#4992）：自动化触发后因 `creator_user_id` 与 `local_reborn_access` 不匹配导致在 run/thread 创建前失败 |
| [PR #5001](https://github.com/nearai/ironclaw/pull/5001) | serrrfirat | **放宽 provider 输出验证以停止放弃循环**：针对 PinchBench 失败分类 B/C/D 的修复，属于推荐修复 #1 和 #2 |
| [PR #4993](https://github.com/nearai/ironclaw/pull/4993) | serrrfirat | **无进度停止不再伪装完成**：修复 `StopKind::NoProgressDetected` 时返回 `Completed` 而非诚实报告停止原因 |
| [PR #4998](https://github.com/nearai/ironclaw/pull/4998) | serrrfirat | **认证恢复后重新呈现审批门**：修复 auth-resume 路径中审批门被静默吞掉的问题 |
| [PR #4997](https://github.com/nearai/ironclaw/pull/4997) | zetyquickly | **Google Drive 二进制文件文本提取**：为 PDF/PPTX/DOCX/XLSX 添加主机端拦截层，突破 1MB WASM 往返限制 |
| [PR #5000](https://github.com/nearai/ironclaw/pull/5000) | serrrfirat | **内容摘要管道（PR2/无进度重设计）**：为 Engine V2 输出感知进度铺设基础设施 |
| [PR #4841](https://github.com/nearai/ironclaw/pull/4841) | serrrfirat | **消除 run-borking 终端错误**：使每个终端错误可恢复或可解释 |
| [PR #4712](https://github.com/nearai/ironclaw/pull/4712) | serrrfirat | **Slack 设置迁移至 WebUI**：将 TOML 配置削减为 `[slack].enabled`，其余通过 WebUI 完成 |

**整体判断：** 项目正处在 Engine V2 架构切换和 Reborn WebUI 大规模打磨的并行关键期。核心贡献者 serrrfirat 一人承载了大量高复杂度 PR（安全、引擎、审批、多租户测试），是当前的单点瓶颈。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 链接 | 分析 |
|---|---|---|---|
| **#2721** Engine V2 quality: Milestone 0 + multi-route execution | 3 | [链接](https://github.com/nearai/ironclaw/issues/2721) | 架构级讨论，关注 Engine V2 过度依赖单一 CodeAct/orchestrator 路径的问题。已关闭，但其子任务（#2723、#2724、#2725）同日关闭，表明 Milestone 0 已完成评估并做出 go/no-go 决策 |
| **#4908** Google Calendar 扩展显示"Activate"但已激活 | 3 | [链接](https://github.com/nearai/ironclaw/issues/4908) | Reborn 扩展状态同步不一致，影响用户信任 |
| **#4942** 工具调用失败需重新获取/刷新才可见 | 2 | [链接](https://github.com/nearai/ironclaw/issues/4942) | SSE 推送链路中工具调用失败事件丢失，影响实时交互体验 |
| **#4764** 拒绝 shell 审批后工具调用挂起且无反馈 | 2 | [链接](https://github.com/nearai/ironclaw/issues/4764) | 审批拒绝路径的用户反馈缺失，PR #4954 已部分解决同类问题 |

### 热点 PR

| PR | 链接 | 分析 |
|---|---|---|
| [PR #4876](https://github.com/nearai/ironclaw/pull/4876) | Dependabot 批量依赖升级（43 个包），包括 `agent-client-protocol` 0.10.4→0.14.0 的大版本跳跃，需关注兼容性 |
| [PR #4881](https://github.com/nearai/ironclaw/issues/4881) | 为 IronClaw PR 添加类 Vercel 预览部署，社区对开发者体验提升有明确诉求 |

**核心诉求：** 社区反馈高度集中在 **Reborn WebUI 的 UX 一致性**（状态同步、按钮行为、可视化可理解性）和 **审批/认证流程的可靠性**上。

---

## 5. Bug 与稳定性

### 严重（影响核心功能）

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| Railway local-dev SSO 自动化在触发后、run 创建前失败 | [#4992](https://github.com/nearai/ironclaw/issues/4992) | OPEN | [PR #5003](https://github.com/nearai/ironclaw/pull/5003) 待合并 |
| 审批门拒绝后运行被取消，模型无法感知拒绝 | [#4764](https://github.com/nearai/ironclaw/issues/4764) | OPEN | [PR #4954](https://github.com/nearai/ironclaw/pull/4954) ✅ 已合并 |
| 工具调用失败不实时显示，需刷新 | [#4942](https://github.com/nearai/ironclaw/issues/4942) | OPEN | 无 |
| 审批拒绝后工具活动状态不一致（显示为 RUN 直到刷新） | [#4977](https://github.com/nearai/ironclaw/issues/4977) | OPEN | 无 |

### 中等（影响体验）

| Bug | Issue | 状态 | Fix PR |
|---|---|---|---|
| 循环自动化因工具审批被永久阻塞 | [#4986](https://github.com/nearai/ironclaw/issues/4986) | OPEN | 无 |
| Google Drive 401 认证失败无刷新重试机制 | [#4991](https://github.com/nearai/ironclaw/issues/4991) | OPEN | 无 |
| Google Drive 二进制文件下载受 1MB WASM 限制 | [#4999](https://github.com/nearai/ironclaw/issues/4999) | OPEN | [PR #4997](https://github.com/nearai/ironclaw/pull/4997) 待合并 |
| Engine V2 下 `/api/admin/usage` 返回空数据 | [#4992](https://github.com/nearai/ironclaw/issues/4985) | OPEN | 无 |
| Slack OAuth URL 可能发布到非私聊频道 | — | — | [PR #4953](https://github.com/nearai/ironclaw/pull/4953) 待合并 |

### 低（UI/UX 细节）

| Bug | Issue | 状态 |
|---|---|---|
| 自动化页面无管理操作（暂停/恢复/编辑/删除） | [#5005](https://github.com/nearai/ironclaw/issues/5005) | OPEN |
| 自动化失败摘要卡片不可操作 | [#5004](https://github.com/nearai/ironclaw/issues/5004) | OPEN |
| 自动化运行历史可视化难以理解（彩色圆点无说明） | [#4988](https://github.com/nearai/ironclaw/issues/4988) | OPEN |
| 自动化空状态无创建指引 | [#4980](https://github.com/nearai/ironclaw/issues/4980) | OPEN |
| 自动化仪表盘状态徽章含义不清 | [#4981](https://github.com/nearai/ironclaw/issues/4981) | OPEN |
| 自动化行选择区域过小 | [#4982](https://github.com/nearai/ironclaw/issues/4982) | OPEN |
| "New" 按钮字体大小不一致 | [#4972](https://github.com/nearai/ironclaw/issues/4972) | OPEN |
| 最近对话列表排序不按最后交互时间 | — | — | [PR #5002](https://github.com/nearai/ironclaw/pull/5002) 待合并 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 可能性评估 |
|---|---|---|---|
| **PR 预览部署**（类 Vercel 体验） | [#4881](https://github.com/nearai/ironclaw/issues/4881) | 无 | 🟡 中等 — 有明确社区诉求，但需 CI/CD 基础设施投入 |
| **自动化管理操作**（暂停/恢复/编辑/删除） | [#5005](https://github.com/nearai/ironclaw/issues/5005) | 无 | 🟢 高 — 自动化功能的基础管理需求，多个 Issue 集中反映 |
| **自动化失败详情可操作** | [#5004](https://github.com/nearai/ironclaw/issues/5004) | 无 | 🟢 高 — 与自动化管理操作配套的 UX 需求 |
| **Google Drive 大文件支持** | [#4999](https://github.com/nearai/ironclaw/issues/4999) | [#4997](https://github.com/nearai/ironclaw/pull/4997) | 🟢 高 — 已有 PR 待合并 |
| **Engine V2 多路由执行** | [#2721](https://github.com/nearai/ironclaw/issues/2721) | 无 | 🟡 中等 — 架构级变更，Milestone 0 已评估，需等待后续决策 |
| **Slack 设置迁移至 WebUI** | — | [#4712](https://github.com/nearai/ironclaw/pull/4712) | 🟢 高 — PR 已存在且活跃 |
| **多租户隔离** | — | [#3890](https://github.com/nearai/ironclaw/pull/3890) | 🟡 中等 — 测试覆盖先行，实现待跟进 |

---

## 7. 用户反馈摘要

### 痛点

1. **自动化功能"看得见管不着"**：多位用户（主要是 sunglow666 通过 dogfooding）反映 Automations 页面提供了状态视图但完全没有管理操作，失败时无法快速定位问题。这是当前最集中的 UX 痛点。
2. **审批/认证流程脆弱**：审批拒绝后工具调用挂起、认证恢复后审批门消失、循环自动化因审批阻塞——审批路径的可靠性是 Engine V2 的核心体验瓶颈。
3. **扩展状态不一致**：Google Calendar 扩展在已激活时仍显示"Activate"按钮、GitHub 扩展引导用户使用 Fine-grained PAT 但仅 Classic PAT 可用、新对话中 Google OAuth 需重复授权——扩展系统的状态管理和 onboarding 流程需要系统性梳理。
4. **工具调用失败不可见**：工具调用失败需手动刷新才能看到，SSE 推送链路存在事件丢失。

### 满意点

- 社区对 **Reborn WebUI 的持续迭代**持积极态度，dogfooding 机制产出了大量高质量反馈。
- **审批门拒绝不再取消运行**（PR #4954）等修复获得认可，表明团队对用户反馈响应及时。

### 使用场景

- 用户正在将 IronClaw 作为**日常 AI 代理**使用（而非仅开发测试），因此对自动化、扩展管理、审批流程的稳定性要求越来越高。
- **本地开发 + Railway 部署**的双模式使用场景普遍，local-dev 与生产环境的差异导致了特定的 Bug（如 #4992 SSO 不匹配）。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于阻塞状态，建议维护者优先关注：

| 项目 | 创建时间 | 链接 | 说明 |
|---|---|---|---|
| **IronClaw Reborn Local Dogfooding 06/08-06/14** | 2026-06-10 | [#4692](https://github.com/nearai/ironclaw/issues/4692) | 已关闭但包含大量历史发现，需确认所有子项已追踪 |
| **Reborn 多租户隔离契约测试** | 2026-05-22 | [PR #3890](https://github.com/nearai/ironclaw/pull/3890) | 已开放近 1 个月，XS 规模但无评论，可能被遗忘 |
| **Reborn 事件和调度并行覆盖** | 2026-05-23 | [PR #3947](https://github.com/nearai/ironclaw/pull/3947) | 同上，近 1 个月无活动 |
| **Reborn 扩展生命周期 E2E 覆盖** | 2026-06-06 | [PR #4518](https://github.com/nearai/ironclaw/pull/4518) | 11 天未合并，CI 可能阻塞 |
| **Slack 设置迁移至 WebUI** | 2026-06-10 | [PR #4712](https://github.com/nearai/ironclaw/pull/4712) | 7 天未合并，XL 规模 |
| **消除 run-borking 终端错误** | 2026-06-13 | [PR #4841](https://github.com/nearai/ironclaw/pull/4841) | 4 天未合并，XL 规模，核心稳定性工作 |
| **Dependabot 批量依赖升级** | 2026-06-14 | [PR #4876](https://github.com/nearai/ironclaw/pull/4876) | 3 天未合并，含 `agent-client-protocol` 大版本跳跃 |
| **自动化管理操作** | 2026-06-17 | [#5005](https://github.com/nearai/ironclaw/issues/5005) | 今日新建，无 PR，高优先级 |
| **Google Drive 认证失败无重试** | 2026-06-16 | [#4991](https://github.com/nearai/ironclaw/issues/4991) | 无 PR，影响 Google Drive 扩展可用性 |
| **Engine V2 用量统计为空** | 2026-06-16 | [#4985](https://github.com/nearai/ironclaw/issues/4985) | 无 PR，影响运维可见性 |

---

**总结：** IronClaw 正处于 Engine V2 架构切换与 Reborn WebUI 体验打磨的**双重关键期**。当前最大风险在于：(1) serrrfirat 作为核心贡献者承载了过多高复杂度 PR，形成单点瓶颈；(2) 自动化功能的 UX 反馈集中爆发但缺乏对应的开发资源投入；(3) 多个超过 1 周的 PR 和 Issue 未得到响应，需防止积压恶化。建议优先推进审批/认证路径的稳定性修复（已有 PR 可合并），同时为自动化管理操作分配开发资源。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-17

---

## 1. 今日速览

过去 24 小时 LobsterAI 活跃度**中等偏低**：共产生 1 条新 Issue 和 4 条 PR 更新，无新版本发布。PR 吞吐量尚可，4 条中有 3 条在同一天内完成合并，显示核心团队对 renderer/cowork 模块的迭代节奏较快。但值得警惕的是，当前开放的 Issue 和 PR 中有多条已标记 `[stale]`，说明部分历史问题长期未得到处理，存在积压风险。整体项目处于**功能打磨期**，重心在 cowork 协作体验和 artifacts 预览优化上。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为 LobsterAI v2026.4.1。

---

## 3. 项目进展

今日合并/关闭的 3 条 PR 均聚焦于 **Cowork 协作模块** 和 **Artifacts 预览体验**，推进了以下功能：

| PR | 状态 | 核心贡献 |
|---|---|---|
| [#2168](https://github.com/netease-youdao/LobsterAI/pull/2168) | ✅ 已合并 | 为 Cowork 对话新增**浮动滚动至底部按钮**，支持平滑滚动、滚轮穿透、国际化标签和点击诊断，提升长对话浏览体验 |
| [#2169](https://github.com/netease-youdao/LobsterAI/pull/2169) | ✅ 已合并 | **全面优化 Artifacts 预览卡片与浏览器预览体验**：统一卡片样式、暗色 hover 效果、多文件折叠展示、HTML 卡片新增"在有道龙虾浏览器中打开"入口、优化右侧浏览器预览标题栏和地址栏样式，并补充了测试和 spec 文档 |
| [#2170](https://github.com/netease-youdao/LobsterAI/pull/2170) | ✅ 已合并 | **Cowork 任务搜索改为从 SQLite 数据库查询**，而非仅过滤预加载的最近会话列表，同时保留无搜索词时的侧边栏、Agent 预览、分页和快捷任务槽行为不变 |

**整体评估**：项目在用户体验层面稳步推进，Cowork 模块的搜索能力和交互细节（滚动控制）得到增强，Artifacts 预览的视觉一致性和可用性显著提升。三条 PR 均在同一天内完成创建→合并，说明相关功能已充分开发，属于计划内交付。

---

## 4. 社区热点

今日讨论最活跃的 Issue 为：

- **[#1425 快捷键重复无校验](https://github.com/netease-youdao/LobsterAI/issues/1425)** — 作者 `zqgittest` 报告在 LobsterAI v2026.4.1 中，设置重复快捷键时保存无任何校验提示，直接保存成功。该 Issue 已有 1 条评论，附截图复现步骤清晰。

**背后诉求**：用户期望快捷键配置具备基本的冲突检测与提示机制，避免因重复绑定导致功能不可用却无反馈。这是一个典型的**数据完整性校验缺失**问题，属于基础 UX 防护，优先级应为中高等，但目前仍标记 `[stale]`，尚未有官方响应。

---

## 5. Bug 与稳定性

### 🔴 高优先级 — 定时任务"停止"操作静默失败

- **Issue/PR**: [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) `[OPEN][stale]`
- **严重程度**：🔴 高 — 功能性 Bug，用户操作与实际状态不一致
- **描述**：定时任务的"停止"IPC handler 实际上不执行任何操作，但返回 `{ success: true }`，导致前端误认为任务已成功停止，而实际上任务仍在运行。此外，所有定时任务操作（开关切换、创建、更新、删除、立即运行、加载）失败时，服务层虽将错误写入 Redux state，但**没有任何 UI 组件读取 `state.scheduledTask.error`**，导致所有操作失败时用户完全无反馈。
- **Fix PR 状态**：PR #1424 已存在，但标记 `[stale]`，创建自 2026-04-03，至今未合并。

### 🟡 中优先级 — 快捷键重复无校验

- **Issue**: [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) `[OPEN][stale]`
- **严重程度**：🟡 中 — 数据校验缺失，影响配置可靠性
- **描述**：设置重复快捷键时无校验，直接保存成功。
- **Fix PR 状态**：暂无关联 PR。

---

## 6. 功能请求与路线图信号

今日无新增功能请求。从近期 PR 方向判断，下一版本的开发重心可能包括：

1. **Cowork 协作模块持续增强** — 搜索能力（#2170）、滚动交互（#2168）已落地，后续可能继续完善任务管理和会话组织功能。
2. **Artifacts 预览体验优化** — #2169 已合并大量 UI 改进，后续可能进一步扩展文件类型支持和预览交互。
3. **定时任务模块修复** — PR #1424 虽标记 stale，但涉及核心功能的可靠性问题，一旦被重新激活合并，将显著提升系统稳定性。

---

## 7. 用户反馈摘要

从今日 Issue 和 PR 中提炼的用户痛点：

| 痛点 | 来源 | 用户场景 |
|---|---|---|
| 快捷键重复绑定无提示 | [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) | 用户自定义快捷键时，因无冲突检测导致绑定失效却不知情 |
| 定时任务停止操作虚假成功 | [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) | 用户点击"停止"后任务仍在后台运行，可能导致资源浪费或重复执行 |
| 定时任务操作失败无反馈 | [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) | 创建/更新/删除任务失败时 UI 无任何错误提示，用户无法判断操作结果 |

**满意点**：Artifacts 预览卡片和浏览器预览体验的优化（#2169）表明团队在视觉一致性和交互细节上投入了较多精力，这类打磨型更新通常能直接提升日常使用满意度。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者优先关注：

| 编号 | 类型 | 标题 | 创建日期 | 状态 | 建议行动 |
|---|---|---|---|---|---|
| [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424) | PR | 定时任务错误处理与停止操作修复 | 2026-04-03 | `[OPEN][stale]` | **高优** — 涉及核心功能可靠性，建议 review 后合并或请求作者更新 |
| [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) | Issue | 快捷键重复无校验 | 2026-04-03 | `[OPEN][stale]` | **中优** — 复现步骤清晰，修复成本低，建议排入近期迭代 |

> ⚠️ 两条积压均创建于 2026-04-03，距今已超过 **70 天** 未得到处理。建议维护者尽快响应或明确关闭原因，避免社区贡献者积极性受损。

---

*数据来源：GitHub — [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 报告生成时间：2026-06-17*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报 — 2026-07-17

> 数据来源：[github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi) | 统计窗口：过去 24 小时

---

## 1. 今日速览

TinyClaw 今日整体活跃度**极低**。过去 24 小时内无新 Issue 提交、无新版本发布，仅有一条 PR 处于开放状态。项目处于**维护间歇期**，社区互动近乎停滞。唯一的 PR 聚焦于 Windows 平台兼容性修复，表明仍有开发者在推动跨平台支持，但尚未进入合并流程。

---

## 2. 版本发布

> 过去 24 小时无新版本发布，本节省略。

---

## 3. 项目进展

**无 PR 在过去 24 小时内被合并或关闭。**

唯一开放的 PR #281 仍处于待审状态，尚未产生合并动作。项目整体在今日**未向前推进**可交付的代码变更。

---

## 4. 社区热点

**PR #281 — `fix: Windows cross-platform support in CLI`**
- 🔗 [TinyAGI/tinyagi#281](https://github.com/TinyAGI/tinyagi/pull/281)
- 作者：`mperkins0155` | 创建于 2026-06-16 | 👍 0 | 评论：无

**分析：** 该 PR 修复了三个导致 `tinyagi` CLI 在原生 Windows（非 WSL）环境下无法运行的 Bug，核心问题为 `new URL('.', import.meta.url).pathname` 在 Windows 上返回 `/C:/Users/...` 格式，导致 `path.resolve` 产生双盘符路径，触发 `MODULE_NOT_FOUND` 错误。这是**跨平台兼容性**的关键修复，直接影响 Windows 用户能否开箱即用。目前零评论、零反应，维护者尚未介入评审。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 |
|---------|------|------|
| 🔴 **高** | Windows 原生环境下 CLI 因路径解析错误导致 `MODULE_NOT_FOUND` 崩溃 | PR #281 已提交，待合并 |

**说明：** 该 Bug 阻止了所有非 WSL 的 Windows 用户运行 CLI，属于**阻断性缺陷**。PR #281 提供了修复方案，但尚未被维护者审核合并。

---

## 6. 功能请求与路线图信号

过去 24 小时无新功能请求提交。

从 PR #281 的信号来看，**Windows 原生支持**是当前社区自发推进的方向，预计该修复合并后将成为下一版本的组成部分。

---

## 7. 用户反馈摘要

过去 24 小时无新 Issue 或评论，无法提取新的用户反馈。

从 PR #281 可间接推断：**Windows 用户群体存在但体验受阻**，跨平台兼容性是真实痛点。

---

## 8. 待处理积压

| 项目 | 链接 | 状态 | 等待时长 | 建议 |
|------|------|------|---------|------|
| PR #281 — Windows CLI 修复 | [链接](https://github.com/TinyAGI/tinyagi/pull/281) | 开放中，无评审 | 已开放 1 天 | 🔔 建议维护者尽快评审，该修复解决阻断性 Bug |

**提醒：** 该 PR 涉及核心 CLI 在 Windows 上的可用性，属于高优先级修复，建议维护者在本周内完成评审与合并决策。

---

> 📊 **项目健康度评估：** ⚠️ **低活跃** — 社区互动近乎为零，唯一 PR 处于无人评审状态。建议维护者关注积压 PR 的及时处理，避免贡献者流失。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-17

---

## 1. 今日速览

Moltis 今日整体活跃度**偏低**，处于常规维护节奏。过去 24 小时内新增 2 个 Issue、2 个 PR，均处于开放状态，无合并或关闭记录，无新版本发布。贡献者方面，`khimaros` 连续提交两项功能请求，`gptme-thomas` 则持续推进两项已开放数日的 PR。项目当前无紧急问题积压，社区参与度平稳。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日**无 PR 合并或关闭**。当前有 2 个 PR 处于开放待审状态，均已于 2026-06-15 创建，至今未获合并：

| PR | 作者 | 核心内容 |
|---|---|---|
| [#1124](https://github.com/moltis-org/moltis/pull/1124) | gptme-thomas | 为每次 chat turn 添加 `context_command` 支持，允许在对话前自动注入运行时上下文到 prompt |
| [#1125](https://github.com/moltis-org/moltis/pull/1125) | gptme-thomas | 为外部 agent 提供者添加 `/model` 下的模型与 effort 选择能力，支持配置 `models` 和 `efforts` 列表及元数据持久化 |

这两项 PR 均涉及核心交互流程的扩展，一旦合并将显著提升部署灵活性和多模型管理能力。

---

## 4. 社区热点

今日讨论最活跃的是 **Issue #1126**（1 条评论，👍 0）：

- **[#1126 [Feature] Allow to choose the format of TTS output](https://github.com/moltis-org/moltis/issues/1126)** — 用户 `khimaros` 提出希望 TTS 输出格式可配置。当前 TTS 输出格式似乎是硬编码的，用户需要根据下游场景（如不同播放器、存储需求）选择格式。这是语音交互场景下的常见诉求。

其余 Issue 和 PR 今日暂无评论互动。

---

## 5. Bug 与稳定性

**今日无 Bug 报告、崩溃或回归问题。** 项目稳定性无异常信号。

---

## 6. 功能请求与路线图信号

今日新增 2 个功能请求，均由 `khimaros` 提交：

| Issue | 诉求 | 与现有 PR 关联 |
|---|---|---|
| [#1126](https://github.com/moltis-org/moltis/issues/1126) — TTS 输出格式可配置 | 允许用户选择 TTS 输出音频格式 | 暂无直接关联 PR |
| [#1127](https://github.com/moltis-org/moltis/issues/1127) — 可配置 RPC 超时 | 允许用户自定义 RPC 调用超时时间，提升弱网/慢服务场景下的可用性 | 暂无直接关联 PR |

结合当前开放 PR 的方向来看，项目近期明显在**扩展配置灵活性和外部集成能力**（context 注入、模型选择）。TTS 格式配置和 RPC 超时配置与该方向一致，有较大概率在后续版本中被纳入。

---

## 7. 用户反馈摘要

从今日 Issue 内容可提炼以下用户痛点：

- **TTS 场景需求**：用户在实际部署中需要控制语音输出格式，说明 Moltis 的语音功能已有真实使用场景，但配置粒度不够细。
- **RPC 可靠性诉求**：用户关注 RPC 超时配置，暗示部分部署环境存在网络延迟或服务端响应慢的问题，当前硬编码超时值可能不满足所有场景。

整体来看，用户反馈集中在**可配置性**方向，说明项目功能已趋于稳定，用户开始关注生产环境的精细化调优。

---

## 8. 待处理积压

以下 PR 已开放超过 2 天，尚未合并，建议维护者关注：

| PR | 创建日期 | 等待天数 | 说明 |
|---|---|---|---|
| [#1124](https://github.com/moltis-org/moltis/pull/1124) — Context command support | 2026-06-15 | 2 天 | 涉及 chat 核心流程，建议优先 review |
| [#1125](https://github.com/moltis-org/moltis/pull/1125) — Model/effort selection for external agents | 2026-06-15 | 2 天 | 涉及配置 schema 变更，需评估向后兼容性 |

两项 PR 均由 `gptme-thomas` 提交，描述清晰、实现范围明确，建议尽快安排 review 以推进合并。

---

> **项目健康度评估**：🟢 稳定。无紧急 Bug，无版本发布压力，社区贡献节奏平稳。建议优先处理积压 PR 以加速功能交付。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-17

---

## 1. 今日速览

CoPaw 今日处于**高活跃维护期**：过去 24 小时内共处理 41 条 Issue（新开/活跃 19 条，已关闭 22 条）和 40 条 PR（待合并 20 条，已合并/关闭 20 条），并发布了 v1.1.12-beta.1 版本。项目维护节奏健康，Issue 关闭数略超新开数，积压有所收窄。安全加固（Keychain 隔离、Windows CI 加固）和崩溃修复（SIGSEGV Cron、配置缓存引用污染）是本轮迭代的主旋律，同时社区围绕上下文压缩、Cron 调度和多模型兼容性贡献了大量代码。

---

## 2. 版本发布

### v1.1.12-beta.1

| 类型 | 说明 |
|------|------|
| **安全修复** | `fix(security)`: 每个安装实例隔离 Keychain 主密钥，防止跨安装凭证泄露（PR #5028，@ekzhu） |
| **桌面端修复** | `fix(desktop)`: 加固 Tauri Windows CI，防御 crates.io 拉取失败导致的构建中断（PR #5125，@jinglinpeng） |
| **重构** | `refactor(cons…`（变更日志截断，完整内容见 Release 页面） |

**迁移注意事项**：Keychain 隔离变更可能影响已有凭证存储路径，升级后首次启动需重新授权。Windows 桌面用户建议重新拉取最新 CI 构建产物。

---

## 3. 项目进展

今日合并/关闭的 PR 共 20 条，以下为关键进展：

| PR | 状态 | 说明 |
|----|------|------|
| [#5229](https://github.com/agentscope-ai/QwenPaw/pull/5229) | ✅ 已合并 | `fix(config)`: 对缓存的 agent 配置执行深拷贝，修复运行时配置污染和 agent.json 静默覆盖问题（对应 Issue #5206） |
| [#5240](https://github.com/agentscope-ai/QwenPaw/pull/5240) | ✅ 已合并 | `perf(config)`: 移除 agent 配置缓存中不必要的深拷贝操作，降低内存占用、提升配置加载性能 |
| [#5226](https://github.com/agentscope-ai/QwenPaw/pull/5226) | ✅ 已合并 | `fix(gemini)`: 清理 tool schema 中的 `additionalProperties` 和 `anyOf: [{type: "null"}]` 模式，修复 Gemini 函数调用 400 INVALID_ARGUMENT 错误 |
| [#5228](https://github.com/agentscope-ai/QwenPaw/pull/5228) | ✅ 已合并 | `fix`: title_generator 和 skills_stream 改用 formatter 处理消息格式，兼容 Gemini 等非 OpenAI 模型 |
| [#5222](https://github.com/agentscope-ai/QwenPaw/pull/5222) | ✅ 已合并 | `feat(console)`: Console 新增"简洁模式"——扁平导航 + 按更新时间排序的会话列表 |
| [#5232](https://github.com/agentscope-ai/QwenPaw/pull/5232) | ✅ 已合并 | `feat(chat)`: 模型返回空响应时展示 fallback 消息，避免用户看到空白 |
| [#5248](https://github.com/agentscope-ai/QwenPaw/pull/5248) | ✅ 已合并 | `feat(console)`: ConsoleChannel 输出支持 OSC 8 可点击链接（Windows Terminal、iTerm2 等） |
| [#5247](https://github.com/agentscope-ai/QwenPaw/pull/5247) | ✅ 已合并 | `feat(coding)`: Ponytail 编程哲学固化为可注入 agent 规则 + 零依赖代码索引器 |
| [#5201](https://github.com/agentscope-ai/QwenPaw/pull/5201) | ✅ 已合并 | `test(integration)`: 新增 Sprint 2.4 Cron 执行路径和工具 API 集成测试，重构 Mock LLM 基础设施 |

**整体评估**：项目在稳定性（配置缓存、Gemini 兼容性）、用户体验（简洁模式、空响应兜底）和测试覆盖（Cron 集成测试）三个维度同步推进，v1.1.12 的修复范围已初具规模。

---

## 4. 社区热点

### 🔥 Issue #5218 — 子 Agent 触发上下文压缩时进程冻结（14 条评论）
**链接**: https://github.com/agentscope-ai/QwenPaw/issues/5218

当子 Agent 触发上下文压缩（context compaction）时，QwenPaw 进程完全冻结，只能手动重启恢复。这是今日评论数最多的 Issue，也是当前最严重的可用性问题。社区已有 PR #5242 尝试为 `_compact_context()` 中的 `agent.reply()` 添加超时保护，但尚未合并。

### 🔥 Issue #5063 — 集成 Headroom 作为可选上下文压缩层（6 条评论）
**链接**: https://github.com/agentscope-ai/QwenPaw/issues/5063

用户提议将 [Headroom](https://github.com/chopratejas/headroom)（本地优先、可逆的上下文压缩层）作为可选插件集成，声称可减少 60–95% 的 token 消耗。社区贡献者已提交 PR #5244 实现 `HeadroomContextManager`，目前处于待审核状态。

### 🔥 Issue #4625 — MiniMax-M2.5 模型思考过程返回 XML 格式不兼容（6 条评论）
**链接**: https://github.com/agentscope-ai/QwenPaw/issues/4625

使用 MiniMax-M2.5 时，模型的思考过程以 XML 格式返回，导致指令/技能无法执行，问答中断。该问题自 5 月 22 日报告以来持续影响用户体验，至今未修复。

### 🔥 Issue #5161 — 长对话后 QwenPaw 无响应（5 条评论）
**链接**: https://github.com/agentscope-ai/QwenPaw/issues/5161

与 #5218 高度相关——长对话/大上下文场景下 Agent 卡住不回复。两个 Issue 可能共享同一根因（上下文管理缺陷），值得合并排查。

### 🔥 Issue #5209 — macOS ARM64 Tauri 桌面版崩溃循环（3 条评论）
**链接**: https://github.com/agentscope-ai/QwenPaw/issues/5209

macOS 26.5.1 Apple Silicon 上 qwenpaw-backend 进程约每分钟崩溃重启一次。PR #5238 已提交修复 Tauri 插件依赖启动循环问题。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| 🔴 **P0** | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 子 Agent 上下文压缩导致进程完全冻结 | [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242)（待合并，添加超时保护） |
| 🔴 **P0** | [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243) | macOS ChromaDB Rust 绑定 SIGSEGV 崩溃，两天 48 次重启 | [#5246](https://github.com/agentscope-ai/QwenPaw/pull/5246)（待合并，添加配置降级路径） |
| 🔴 **P0** | [#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209) | macOS Tauri 桌面版崩溃循环 | [#5238](https://github.com/agentscope-ai/QwenPaw/pull/5238)（待合并） |
| 🟠 **P1** | [#5206](https://github.com/agentscope-ai/QwenPaw/issues/5206) | `load_agent_config` 返回缓存引用导致配置污染 | ✅ 已修复（PR #5229 已合并） |
| 🟠 **P1** | [#5208](https://github.com/agentscope-ai/QwenPaw/issues/5208) | LongCat-2.0-Preview 模型 reasoning block 类型不匹配导致消息计数错误 | ❌ 暂无 PR |
| 🟠 **P1** | [#5235](https://github.com/agentscope-ai/QwenPaw/issues/5235) | Cron 定时任务未按计划时间执行 | ❌ 暂无 PR |
| 🟠 **P1** | [#5250](https://github.com/agentscope-ai/QwenPaw/issues/5250) | Cron 任务打断主对话（以用户消息形式注入聊天流） | ❌ 暂无 PR |
| 🟡 **P2** | [#5214](https://github.com/agentscope-ai/QwenPaw/issues/5214) | 钉钉 Stream 频道在笔记本睡眠唤醒后静默失效 | ✅ 已关闭（根因已定位：半开死连接） |
| 🟡 **P2** | [#5233](https://github.com/agentscope-ai/QwenPaw/issues/5233) | Ollama 模型无切换选项 | ✅ 已关闭 |
| 🟡 **P2** | [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) | MiniMax-M2.5 XML 格式不兼容 | ❌ 暂无 PR |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 纳入可能性 |
|----------|-------|---------|------------|
| Headroom 上下文压缩集成 | [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | [#5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) | ⭐⭐⭐ 高 — 已有实现 PR，社区需求明确 |
| Agent 自我进化机制（从错误中学习） | [#5205](https://github.com/agentscope-ai/QwenPaw/issues/5205) | 无 | ⭐⭐ 中 — 概念阶段，需设计讨论 |
| 企业微信图文同时推送 | [#5217](https://github.com/agentscope-ai/QwenPaw/issues/5217) | 无 | ⭐⭐ 中 — 频道增强，实现复杂度可控 |
| 工作区临时文件存储优化 | [#5225](https://github.com/agentscope-ai/QwenPaw/issues/5225) | 无 | ⭐⭐ 中 — 影响文件管理体验 |
| 治理 & 沙箱接口（Breaking Change） | — | [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) | ⭐ 低 — 标记为 Breaking Change，仍在讨论阶段 |
| 数据分析和 BI 插件 DataPaw | — | [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | ⭐⭐ 中 — 功能完整但审核周期长 |
| 越南语界面支持 | [#5169](https://github.com/agentscope-ai/QwenPaw/issues/5169) | [#5245](https://github.com/agentscope-ai/QwenPaw/pull/5245) | ⭐⭐⭐ 高 — PR 已提交，低风险 |

---

## 7. 用户反馈摘要

**痛点集中领域**：

1. **上下文管理是最大痛点**：多个 Issue（#5218、#5161、#5063）指向长对话/大上下文场景下的冻结、无响应和 token 消耗问题。用户已开始自行探索第三方压缩方案（Headroom），说明内置上下文管理能力尚未满足实际需求。

2. **Cron 调度体验不佳**：#5235 和 #5250 分别从"不执行"和"打断主对话"两个角度反映 Cron 功能的不成熟。用户期望 Cron 在后台静默执行，而非以用户消息形式注入聊天流。

3. **多模型兼容性持续摩擦**：Gemini 的 schema 限制（#5226 已修复）、MiniMax 的 XML 格式（#4625 未修复）、LongCat 的 reasoning block 类型（#5208 未修复）——每接入一个新模型都会暴露适配问题。

4. **桌面端稳定性堪忧**：macOS 上同时存在 Tauri 崩溃循环（#5209）和 ChromaDB SIGSEGV（#5243）两个独立崩溃路径，桌面用户体验严重受损。

5. **正面信号**：用户对 Console UI 简洁模式（#5222 已合并）、OSC 8 可点击链接（#5248 已合并）等体验优化反馈积极，说明前端改进方向正确。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 项目 | 创建时间 | 状态 | 建议 |
|------|----------|------|------|
| [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) — MiniMax-M2.5 XML 格式不兼容 | 2026-05-22 | 开放 26 天 | 影响用户日常使用，需排入修复计划 |
| [#4632](https://github.com/agentscope-ai/QwenPaw/issues/4632) — 缺少可靠多行文本写入工具 | 2026-05-22 | 已关闭但标记 invalid | 用户实际需求未解决，建议重新评估 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) — DataPaw 数据分析插件 | 2026-05-22 | 开放 26 天 | 功能完整的插件贡献，审核周期过长 |
| [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) — 治理 & 沙箱接口（Breaking Change） | 2026-06-10 | 开放 7 天 | 标记为 Breaking Change，需架构讨论后决策 |
| [#4904](https://github.com/agentscope-ai/QwenPaw/issues/4904) — 侧边栏菜单过于复杂 | 2026-06-02 | 已关闭 | 与 #5222 简洁模式相关，可确认是否已覆盖 |
| [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) — loop_config.json 损坏导致 Agent 崩溃 | 2026-06-05 | 已关闭 | 建议增加 JSON 损坏的容错处理 |

---

> **日报总结**：CoPaw 当前处于密集修复期，v1.1.12-beta.1 聚焦安全和桌面稳定性。社区最迫切的需求集中在上下文管理（冻结/压缩/Cron 调度）和多模型兼容性两大方向。建议维护者优先推进 #5242（上下文压缩超时保护）、#5246（ChromaDB SIGSEGV 降级路径）和 #5238（Tauri 崩溃修复）三个 PR 的审核，以尽快解决 P0 级稳定性问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 — 2026-07-17

> 数据来源：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

ZeptoClaw 今日整体活跃度**极低**，处于典型的维护期平稳状态。过去 24 小时内无新 Issue 提交或关闭，无新版本发布，社区侧未出现用户讨论或反馈。唯一的动态来自自动化依赖机器人 Dependabot 提交了一个 Docker 基础镜像版本升级 PR，目前处于待合并状态。项目当前无紧急问题暴露，健康度良好，但社区参与度近乎停滞。

---

## 2. 版本发布

> 过去 24 小时无新版本发布，本节省略。

---

## 3. 项目进展

今日无 PR 合并或关闭。唯一活跃的 PR 为：

| PR | 状态 | 说明 |
|---|---|---|
| **#630** · `chore(deps): bump debian from b6e2a15 to 4e401d9` | 🟡 OPEN | Dependabot 自动将 Docker 基础镜像 `debian:trixie-slim` 从旧 digest 升级至新 digest，属于常规依赖维护，无功能性变更。 |

**评估**：该 PR 尚未合并，项目在依赖安全更新方面略有滞后。由于是 digest 级别的 patch 更新（同版本 `trixie-slim`），风险较低，建议维护者尽快 review 并合并，以保持基础镜像安全补丁的最新状态。

---

## 4. 社区热点

> 过去 24 小时无用户讨论、评论或反应活动，本节省略。

---

## 5. Bug 与稳定性

> 过去 24 小时无新 Bug 报告、崩溃或回归问题提交，本节省略。

---

## 6. 功能请求与路线图信号

> 过去 24 小时无新功能请求提交。当前待合并的 PR #630 为纯依赖维护，不涉及功能演进。

---

## 7. 用户反馈摘要

> 过去 24 小时无用户评论或反馈产生，本节省略。

---

## 8. 待处理积压

| PR | 等待时长 | 说明 | 建议 |
|---|---|---|---|
| **#630** · `chore(deps): bump debian` | 1 天 | Dependabot 自动依赖升级，digest 级别安全更新 | 🔄 建议尽快 review 合并，避免依赖补丁滞后 |

> ⚠️ **提醒**：当前积压量极低，仅此 1 条自动化 PR 待处理。建议维护者在方便时完成合并，保持依赖链健康。

---

## 总结

| 指标 | 数值 |
|---|---|
| 新 Issue | 0 |
| 关闭 Issue | 0 |
| 新 PR | 1（自动化依赖升级） |
| 合并 PR | 0 |
| 新版本 | 0 |
| 活跃讨论 | 0 |

**项目健康度：🟢 稳定** — 无紧急问题，无社区摩擦，唯一的待办事项为一条低风险的依赖升级 PR。建议维护者抽空处理 PR #630 即可。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-17

---

## 1. 今日速览

ZeroClaw 处于 **v0.8.0 发布后的密集迭代期**，社区活跃度极高：过去 24 小时产生 **37 条 Issue 更新**（35 条新开/活跃）和 **50 条 PR 更新**（35 条待合并），无新版本发布。项目重心明显集中在三条主线：**v0.8.1 集成/渠道/提供者队列推进**、**ZeroCode TUI 体验修复**、以及 **CI 安全与供应链加固**。今日合并/关闭的 PR 共 15 条，涵盖 Discord 持久化、技能目录缓存、翻译保护等关键修复，项目整体向前推进稳健。值得注意的是，今日新开 Issue 中 **P1 级别高优先级 bug 占比显著**（工具不可用、会话恢复空白、渠道功能回归等），需维护者重点关注。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为 **v0.8.0**。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 状态 | 说明 |
|---|---|---|
| [#7681](https://github.com/zeroclaw-labs/zeroclaw/pull/7681) | ✅ 已合并 | **修复运行时无进度循环检测**：`detect_no_progress` 之前仅统计严格连续的同工具调用，交错调用会重置计数，导致代理陷入循环无法被正确中断。修复后能跨交错调用正确检测无进展循环。 |
| [#7786](https://github.com/zeroclaw-labs/zeroclaw/pull/7786) | ✅ 已合并 | **技能目录加载缓存**：`load_skills_from_directory` 和 `load_open_skills_from_directory` 之前每次调用都执行递归读取+完整安全审计，造成显著性能开销。引入内容验证缓存后大幅减少重复 I/O。 |
| [#7784](https://github.com/zeroclaw-labs/zeroclaw/pull/7784) | ✅ 已合并 | **Discord 斜杠命令协调状态持久化 + data_dir 共享存储读取**：修复 Discord 重启后斜杠命令指纹丢失导致重复协调的问题，同时修复共享存储路径未正确从 `data_dir` 读取的问题。 |
| [#7734](https://github.com/zeroclaw-labs/zeroclaw/pull/7734) | ✅ 已合并 | **技能编辑器暴露 frontmatter 标签 + 斜杠命令切换**：修复 `SkillFrontmatter` 作为编辑器单一事实来源的标签 API，使标签在编辑器和运行时斜杠命令中一致可见。 |

**整体评估**：今日合并的 PR 覆盖了运行时稳定性（循环检测）、性能（技能缓存）、渠道可靠性（Discord 持久化）和开发者体验（技能编辑器），项目在 v0.8.0 发布后的质量加固阶段稳步推进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 热度焦点 |
|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup | 11 条 | 关于工作流路由、看板自动化和标签治理的治理 RFC，已进入 Accepted/rollout 阶段，社区对自动化规则细节讨论热烈。 |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) — v0.8.1 integration/channel/provider/tool 追踪器 | 3 条 | v0.8.1 里程碑的集成/渠道/提供者/工具队列追踪，是理解下一版本范围的核心入口。 |
| [#7175](https://github.com/zeroclaw-labs/zeroclaw/issues/7175) — 类型化级联删除配置 | 2 条 | V3 配置中别名条目的级联删除设计，已有配套 PR [#7785](https://github.com/zeroclaw-labs/zeroclaw/pull/7785) 推进中。 |
| [#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675) — RFC: 加固 CI 流水线（供应链扫描、溯源、SBOM 生成） | 2 条 | 针对 CI 供应链安全盲点的 RFC，提出在每次 PR 和每日定时运行中增加安全门禁。 |

### 📌 分析

社区当前最核心的诉求集中在：
1. **治理与自动化**（#6808）：随着项目规模增长，手动维护工作流标签和看板已成为瓶颈，社区希望 RFC 尽快落地。
2. **v0.8.1 路线图透明度**（#6970）：用户和贡献者迫切想了解下一版本的集成和渠道支持范围。
3. **安全与供应链**（#6675）：安全社区对 CI 供应链加固的关注度上升，这与当前行业趋势一致。

---

## 5. Bug 与稳定性

### 🔴 P1 — 工作流阻塞 / 高严重性

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | **OpenAI Responses/Anthropic 轮次中 native/MCP 工具不可用**：MCP 服务器连接且工具注册成功，但模型实际收不到工具列表，取决于具体模型。 | ❌ |
| [#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) | **v0.8.0 预编译二进制文件缺少 Slack/Discord 渠道特性**（v0.7.x 回归）：即使配置正确，Slack 也无法工作。 | ❌ |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | **Gateway WebSocket 生命周期与代理轮次强耦合**：客户端断开连接会取消正在执行的轮次，应改为后台执行、重连恢复。 | ❌ |
| [#7796](https://github.com/zeroclaw-labs/zeroclaw/issues/7796) | **直接代理轮次忽略 runtime-profile 的 max_tool_iterations**：即使配置了更高的工具迭代上限，仍停在默认值 10。 | ❌ |
| [#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804) | **代码历史可能发送非交替角色的 Anthropic 消息**：长会话或恢复会话中，相邻同角色消息导致 Anthropic 返回 400。 | ❌ |
| [#7799](https://github.com/zeroclaw-labs/zeroclaw/issues/7799) | **恢复的代码会话以空白 transcript 打开**：会话选择器显示有消息，但恢复后界面为空。 | ❌ |
| [#7753](https://github.com/zeroclaw-labs/zeroclaw/issues/7753) | **渠道会话持久化存在并发同发送者排序竞争**：同一发送者的消息并发处理时，session-store 的 append/delete 操作可能乱序。 | ❌ |
| [#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) | **非默认端口运行时配对码不显示**：`zeroclaw gateway start -p <port>` 启动横幅不显示配对码。 | ❌ |

### 🟡 P2 — 行为降级 / 中等严重性

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809) | **渠道轮次忽略 runtime-profile strict/parallel 工具标志** | ❌ |
| [#7810](https://github.com/zeroclaw-labs/zeroclaw/issues/7810) | **git_operations 在非仓库路径下无恢复提示** | ❌ |
| [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) | **CLI 密钥提示粘贴后无反馈** | ❌ |
| [#7807](https://github.com/zeroclaw-labs/zeroclaw/issues/7807) | **审批弹窗可能继承终端背景而非 ZeroCode 主题** | ❌ |
| [#7805](https://github.com/zeroclaw-labs/zeroclaw/issues/7805) | **取消的代码轮次在空队列时显示"队列暂停"提示** | ❌ |
| [#7803](https://github.com/zeroclaw-labs/zeroclaw/issues/7803) | **活动代码会话无法直接切换代理** | ❌ |
| [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | **代码帮助/键位绑定在 macOS 上误导或不可达** | ❌ |
| [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) | **cron session_target=main 仍在隔离会话中运行** | ❌ |
| [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) | **GLM-5.1 中 Thoughts 合并到最终消息** | ❌ |
| [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) | **Cron 文档缺失 + 无法指定模型运行 cronjob** | ❌ |

### 🟢 已关闭

| Issue | 描述 |
|---|---|
| [#7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758) | 文档质量问题（配置语法不可读）— 已关闭 |
| [#7143](https://github.com/zeroclaw-labs/zeroclaw/issues/7143) | 代理重复运行近重复 shell 命令耗尽 max_tool_iterations — 已关闭（可能由 #7681 修复覆盖） |

**稳定性评估**：今日 P1 bug 数量较多（8 个），且多数尚无 fix PR，特别是 **v0.8.0 预编译二进制缺少渠道特性**（#7787）和 **MCP 工具不可用**（#7756）是影响用户核心工作流的严重回归，建议优先处理。

---

## 6. 功能请求与路线图信号

### 明确的功能请求

| Issue | 描述 | 信号强度 |
|---|---|---|
| [#7794](https://github.com/zeroclaw-labs/zeroclaw/issues/7794) | **逐代理 Dream Mode 选择性启用 + 操作界面一致性**（聊天命令 + Gateway Dreams 视图） | 🟡 中 — 跟进 #6693 基础 Dream Mode |
| [#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) | **Cron 文档 + 按模型指定 cronjob 运行** | 🟡 中 — 文档缺口 + 功能增强 |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | **Gateway WebSocket 与代理轮次解耦** | 🟢 高 — P1 优先级，已有社区关注 |
| [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) | **v0.8.2 WASM 插件计划追踪器** | 🟢 高 — 里程碑协调入口，已有 FND-001 组件模型方向 |
| [#7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763) | **A2A 代理发现界面**（PR 已开放，标记 v0.8.2） | 🟢 高 — 已有实现推进中 |

### 路线图判断

- **v0.8.1**（近期）：聚焦集成/渠道/提供者队列（#6970）、配置级联删除（#7175 → #7785）、渠道运行时修复。
- **v0.8.2**（中期）：WASM 插件基础设施（#7314）、A2A 代理发现（#7763）、Dream Mode 逐代理启用（#7794）。
- **持续加固**：CI 安全供应链（#7675）、ZeroCode TUI 体验（多个 P2 bug）、测试覆盖率（#7685）。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **文档质量严重不足**：#7758 直言"代码再好，文档垃圾也没用"，用户无法编写配置文件、无法了解正确语法。#7762 指出 Cron 文档完全缺失。这是影响新用户上手的首要障碍。
2. **v0.8.0 预编译二进制回归**：#7787 用户发现从 v0.7.5 升级到 v0.8.0 后 Slack 渠道直接不可用，降级才恢复。预编译构建的 feature flag 配置问题严重影响用户信任。
3. **MCP 工具不可靠**：#7756 用户报告 MCP 工具注册成功但模型实际收不到，问题取决于具体模型，调试困难。
4. **ZeroCode TUI 体验碎片化**：今日集中出现多个 TUI 相关 bug（#7800、#7803、#7805、#7807、#7799），涉及键位绑定、会话恢复、主题一致性、代理切换等，说明 TUI 在 v0.8.0 重构后存在较多体验回归。
5. **macOS 兼容性问题**：#7800 特别指出键位绑定在 macOS 上误导或不可达。

### 😐 中性 / 建设性

- #7143 用户首先肯定了项目的资源效率（"Rust-based agent runtime that is much lighter on resources"），然后才报告 bug，说明核心用户对项目方向认可。
- #6808 的 RFC 讨论中，社区对自动化工作流路由的需求明确，愿意参与设计。

### 👍 满意

- 未在今日 Issue 中观察到明确的正面评价，但 #7681（循环检测修复）和 #7786（技能缓存）的快速合并反映了维护者对关键修复的响应速度。

---

## 8. 待处理积压 — 需维护者关注

### 长期未响应的重要 Issue

| Issue | 创建日期 | 状态 | 风险 |
|---|---|---|---|
| [#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) — 非默认端口配对码不显示 | 2026-04-03 | Open, P1, Accepted | 🔴 超过 2 个月未解决，影响测试/多实例部署场景 |
| [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) — GLM-5.1 Thoughts 泄露 | 2026-05-13 | Open, P2, Accepted | 🟡 超过 1 个月，影响 GLM 用户 |
| [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) — cron session_target=main 行为不符 | 2026-05-14 | Open, P2, Accepted | 🟡 超过 1 个月，影响 cron 工作流 |
| [#6407](https://github.com/zeroclaw-labs/zeroclaw/issues/6407) — i18n 翻译质量问题 | 2026-05-05 | Open, P2, In-Progress | 🟡 超过 1 个月，翻译 pipeline 存在内容正确性缺陷 |
| [#6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) — ZeroCode UX 追踪器 | 2026-05-21 | Open, P2, Accepted | 🟡 跨切面 UX 问题，需要整体协调 |

### 待合并的重要 PR

| PR | 创建日期 | 说明 |
|---|---|---|
| [#7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763) | 2026-06-16 | A2A 代理发现界面（XL 规模，标记 v0.8.2，DO NOT MERGE） |
| [#7785](https://github.com/zeroclaw-labs/zeroclaw/pull/7785) | 2026-06-16 | 配置级联删除基础（L 规模，对应 #7175） |
| [#7778](https://github.com/zeroclaw-labs/zeroclaw/pull/7778) | 2026-06-16 | 代理工具调用实时卡片渲染修复 |
| [#7798](https://github.com/zeroclaw-labs/zeroclaw/pull/7798) | 2026-06-16 | 配对码恢复修复（对应 #5266） |
| [#7661](https://github.com/zeroclaw-labs/zeroclaw/pull/7661) | 2026-06-14 | Matrix 房间管理恢复 |

### ⚠️ 特别提醒

- **#5266（配对码不显示）** 已开放超过 2 个月，今日有用户通过 #7798 提交了 fix PR，建议优先审核合并。
- **#7787（v0.8.0 渠道特性回归）** 是影响所有使用预编译二进制用户的严重回归，需要紧急确认是否为构建配置问题并发布 hotfix。
- **ZeroCode TUI bug 集中爆发**（今日 6+ 个相关 Issue），建议评估是否需要一位维护者集中处理 TUI 相关积压。

---

*日报生成时间：2026-06-17 | 数据来源：GitHub API | 分析引擎：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*