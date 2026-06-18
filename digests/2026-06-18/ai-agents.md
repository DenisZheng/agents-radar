# OpenClaw 生态日报 2026-06-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-18 00:44 UTC

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

# OpenClaw 项目动态日报

**日期：2026-06-18** | **数据来源：GitHub (openclaw/openclaw)**

---

## 1. 今日速览

过去 24 小时，OpenClaw 项目共处理 **500 条 Issues 更新**（新开/活跃 491 条，关闭 9 条）和 **500 条 PR 更新**（待合并 441 条，已合并/关闭 59 条），社区活跃度处于高位。无新版本发布，项目处于高频迭代但未发版阶段。Issues 关闭率仅 1.8%，表明大量新涌入的问题正处于分类和分流过程中，维护团队面临较高的分流压力。PR 合并率约 11.8%，大量 PR 堆积在 "needs proof" 和 "waiting on author" 状态，显示审查瓶颈依然存在。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **59 个 PR 被合并或关闭**，以下按影响力梳理关键进展：

### 🔧 核心修复

| PR | 内容 | 影响 |
|---|---|---|
| [PR #91988](https://github.com/openclaw/openclaw/pull/91988) | 修复预置 workspace 中 BOOTSTRAP.md 被自动完成逻辑误删的问题 | 防止用户自定义引导文件在首次入驻前被静默清除 |
| [PR #93993](https://github.com/openclaw/openclaw/pull/93993) | 修复 cron 溢出追赶延迟 ID 在读 RPC 后丢失的问题 | 修复 cron 任务调度漂移 |
| [PR #93304](https://github.com/openclaw/openclaw/pull/93304) | 修复 systemd 中 SUDO_USER 残留导致 gateway 操作错误用户 scope | 修复 Linux 下 sudo 环境残留引发的服务管理问题 |
| [PR #94050](https://github.com/openclaw/openclaw/pull/94050) | 修复 exec 结果哈希中 volatile 输出导致 no-progress 检测失效 | 修复工具循环检测中的误判 |
| [PR #93627](https://github.com/openclaw/openclaw/pull/93627) | 修复 dreaming light phase 中已发射条目逐字重复的问题 | 改善记忆扩展的输出质量 |
| [PR #93853](https://github.com/openclaw/openclaw/pull/93853) | 修复自定义 baseUrl 的 memory embedding provider 路由问题 | 修复本地嵌入端点配置下的记忆功能 |
| [PR #93586](https://github.com/openclaw/openclaw/pull/93586) | 修复 mcporter ≥ 0.10 因 XDG 环境变量继承导致的配置解析失败 | 修复 QMD 记忆管理器兼容性 |
| [PR #93713](https://github.com/openclaw/openclaw/pull/93713) | 将已删除 agent 的会话清理路由通过生命周期 seam 处理 | 改善会话存储边界一致性 |

### 📡 渠道修复

| PR | 内容 |
|---|---|
| [PR #94321](https://github.com/openclaw/openclaw/pull/94321) | 修复 Telegram 中 HTML 表格标签被实体转义后显示为字面文本的问题 |
| [PR #94259](https://github.com/openclaw/openclaw/pull/94259) | 向 agent 上下文导出 Telegram 发送者的 `isBot` 字段，解决群聊中无法区分机器人与用户的问题 |
| [PR #93589](https://github.com/openclaw/openclaw/pull/93589) | 修复飞书卡片标题中 emoji 字段包含描述性文本时显示异常的问题 |
| [PR #93823](https://github.com/openclaw/openclaw/pull/93823) | 修复 WhatsApp 多分块回复中首个媒体失败导致开头文本块丢失的问题 |
| [PR #94320](https://github.com/openclaw/openclaw/pull/94320) | 为 Discord 网关重连时添加待投递队列排空机制，与 WhatsApp/Telegram 对齐 |
| [PR #94319](https://github.com/openclaw/openclaw/pull/94319) | 修复 `delivery.mode=none` 的 cron 会话仍使用存储的投递上下文的绕过问题 |

### 🛠️ 工具链与 CI

| PR | 内容 |
|---|---|
| [PR #91089](https://github.com/openclaw/openclaw/pull/91089) | 新增 Windows Node 版本漂移检测 CI 脚本，防止未来类似 #90953 的问题 |
| [PR #93299](https://github.com/openclaw/openclaw/pull/93299) | 修复 Windows schtasks 启动验证逻辑，消除前台监听器误判 |
| [PR #94253](https://github.com/openclaw/openclaw/pull/94253) | 新增 `openclaw doctor --explain` 命令，以结构化纯英文输出诊断结果 |

### 📊 项目整体判断

今日合并的 PR 集中在 **渠道兼容性修复**（Telegram/WhatsApp/Discord/飞书）和 **记忆/会话系统稳定性** 两个方向，反映出项目在多平台覆盖和核心状态管理上持续打磨。Windows 平台相关的 CI 和修复动作增多，说明团队正在系统性提升 Windows 端可靠性。

---

## 4. 社区热点

以下按评论量和互动热度排序：

### 🔥 最热 Issues

| # | Issue | 评论 | 👍 | 核心诉求 |
|---|---|---|---|---|
| 1 | **[#75](https://github.com/openclaw/openclaw/issues/75)** Linux/Windows ClawdBot Apps | 109 | 79 | 要求提供 Linux 和 Windows 原生客户端应用，功能对标 macOS 版 |
| 2 | **[#25592](https://github.com/openclaw/openclaw/issues/25592)** Text between tool calls leaks to messaging channels | 32 | 1 | Agent 在工具调用之间产生的中间文本被发送到消息渠道，严重影响 UX |
| 3 | **[#88838](https://github.com/openclaw/openclaw/issues/88838)** Track core session/transcript SQLite migration via accessor seam | 30 | 1 | 提议将会话/转录迁移到 SQLite 的进程拆分为可审查的小 PR 序列 |
| 4 | **[#9443](https://github.com/openclaw/openclaw/issues/9443)** Prebuilt Android APK releases | 25 | 2 | 要求 GitHub Releases 提供预编译 Android APK 下载 |
| 5 | **[#22438](https://github.com/openclaw/openclaw/issues/22438)** Tiered bootstrap file loading for progressive context control | 17 | 0 | 提议分层加载 bootstrap 文件以节省 token 消耗 |
| 6 | **[#32473](https://github.com/openclaw/openclaw/issues/32473)** Control UI requires device identity (HTTPS or localhost) | 17 | 5 | 回归问题：VPS + Docker 环境下 Control UI 因安全上下文限制无法使用 |
| 7 | **[#22676](https://github.com/openclaw/openclaw/issues/22676)** Signal daemon stop() race condition on SIGUSR1 restart | 17 | 0 | SIGUSR1 重启时 signal-cli 存在竞态条件，导致孤儿进程和发送失败 |
| 8 | **[#29387](https://github.com/openclaw/openclaw/issues/29387)** Bootstrap files in agentDir are silently ignored | 14 | 5 | 放置在 agentDir 中的 bootstrap .md 文件被静默忽略，仅 workspace 目录生效 |
| 9 | **[#62505](https://github.com/openclaw/openclaw/issues/62505)** Coding Agent never completes anything (regression) | 14 | 1 | 回归：编码 Agent 在 2026.4.2+ 版本中仅输出模糊状态更新，无法完成实际工作 |
| 10 | **[#10659](https://github.com/openclaw/openclaw/issues/10659)** Masked Secrets — Prevent Agent from Accessing Raw API Keys | 13 | 4 | 提议添加"密钥遮蔽"系统，让 Agent 可使用但不可见 API Key |

### 🔥 最热 PRs

| # | PR | 状态 | 核心内容 |
|---|---|---|---|
| 1 | **[#78303](https://github.com/openclaw/openclaw/pull/78303)** | OPEN | MCP 工具调用的渠道审批机制（consent envelope），对标 exec-approvals |
| 2 | **[#18889](https://github.com/openclaw/openclaw/pull/18889)** | OPEN | 为 agent 执行添加完整的生命周期边界（thinking/response/tool） |
| 3 | **[#18860](https://github.com/openclaw/openclaw/pull/18860)** | OPEN | 通过新 `after_tools_resolved` hook 暴露工具及其 schema |
| 4 | **[#18778](https://github.com/openclaw/openclaw/pull/18778)** | OPEN | Discord Canvas 支持 |
| 5 | **[#88919](https://github.com/openclaw/openclaw/pull/88919)** | OPEN | 允许 preflight compaction 重入会话锁，修复上下文接近上限时的超时问题 |

### 📌 热点分析

- **跨平台客户端缺失**（#75, #9443）是社区长期痛点，👍79 的投票量说明 Linux/Windows 原生应用和 Android APK 预编译是用户最迫切的需求之一。
- **安全问题集中爆发**：密钥遮蔽（#10659）、工具调用文本泄露（#25592）、Control UI 安全上下文（#32473）三个高热度 issue 均涉及安全/隐私，社区对 Agent 安全边界的关注度持续上升。
- **回归问题引发不满**：#62505（Coding Agent 回归）、#32473（Control UI 回归）、#31583（exec 环境变量继承回归）均为"以前能用现在不能用"类型，用户情绪较为负面。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 严重 / 数据丢失 / 安全

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| **[#25592](https://github.com/openclaw/openclaw/issues/25592)** | Agent 工具调用间的中间文本泄露到消息渠道 | ❌ 无 |
| **[#88838](https://github.com/openclaw/openclaw/issues/88838)** | 会话/转录 SQLite 迁移需要可审查的渐进方案 | ❌ 无（正在讨论方案） |
| **[#29387](https://github.com/openclaw/openclaw/issues/29387)** | agentDir 中的 bootstrap 文件被静默忽略 | ❌ 无 |
| **[#40001](https://github.com/openclaw/openclaw/issues/40001)** | write 工具缺少 append 模式，隔离 cron 会话会覆盖共享文件导致数据丢失 | ❌ 无 |
| **[#39476](https://github.com/openclaw/openclaw/issues/39476)** | A2A sessions_send 可导致重复消息 | ❌ 无 |

### 🟠 P1 — 高优先级 / 回归 / 崩溃

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| **[#62505](https://github.com/openclaw/openclaw/issues/62505)** | Coding Agent 回归：2026.4.2+ 无法完成实际工作 | ❌ 无 |
| **[#22676](https://github.com/openclaw/openclaw/issues/22676)** | Signal daemon SIGUSR1 重启竞态条件，产生孤儿进程 | ❌ 无 |
| **[#31583](https://github.com/openclaw/openclaw/issues/31583)** | exec 工具不继承 skills.entries.*.env 环境变量（回归） | ❌ 无 |
| **[#38327](https://github.com/openclaw/openclaw/issues/38327)** | google-vertex/gemini-3.1-pro-preview 在 2026.3.2 报 "Cannot convert undefined or null to object" | ❌ 无 |
| **[#37634](https://github.com/openclaw/openclaw/issues/37634)** | sandbox workspaceAccess=none 时 workspace 被挂载为只读 | ❌ 无 |
| **[#31331](https://github.com/openclaw/openclaw/issues/31331)** | Docker + Sandbox 环境下 workspace 挂载失败 | ❌ 无 |
| **[#50248](https://github.com/openclaw/openclaw/issues/50248)** | sessions cleanup --fix-missing 误删新的 cron 会话 | ❌ 无 |
| **[#57901](https://github.com/openclaw/openclaw/issues/57901)** | safeguard compaction 忽略 compaction.model 配置 | ❌ 无 |
| **[#75593](https://github.com/openclaw/openclaw/issues/75593)** | v2026.4.29 subagents list 在 spawn 后仍返回空列表 | ❌ 无 |
| **[#92201](https://github.com/openclaw/openclaw/issues/92201)** | Anthropic thinking signatures 在重放时间歇性无效 | ❌ 无 |

### 🟡 P2 — 中优先级

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| **[#32473](https://github.com/openclaw/openclaw/issues/32473)** | Control UI 在非 HTTPS/non-localhost 环境下要求设备身份（回归） | ❌ 无 |
| **[#67366](https://github.com/openclaw/openclaw/issues/67366)** | 替换 Telegram token 时 onboard 崩溃 TypeError | ❌ 无 |
| **[#45765](https://github.com/openclaw/openclaw/issues/45765)** | OPENCLAW_HOME=~/.openclaw 时产生嵌套目录（回归） | ❌ 无 |
| **[#37966](https://github.com/openclaw/openclaw/issues/37966)** | LiteLLM 代理的 Anthropic 模型忽略 cacheRetention 配置 | ❌ 无 |
| **[#39406](https://github.com/openclaw/openclaw/issues/39406)** | 临时工具错误警告在 agent 重试成功后仍显示给用户 | ❌ 无 |

### 📊 稳定性评估

今日共识别 **20 个高优先级 Bug**，其中 **14 个尚无 Fix PR**。回归类问题占比 40%，集中在 v2026.3.x 和 v2026.4.x 版本区间，建议维护团队优先排查。会话系统（session state）和认证提供者（auth-provider）是受影响最多的两个模块。

---

## 6. 功能请求与路线图信号

### 高需求功能（按社区热度排序）

| Issue | 需求 | 相关 PR | 纳入可能性 |
|---|---|---|---|
| **[#75](https://github.com/openclaw/openclaw/issues/75)** | Linux/Windows 原生 ClawdBot 应用 | 无 | ⭐⭐⭐ 高（👍79，长期需求） |
| **[#10659](https://github.com/openclaw/openclaw/issues/10659)** | Masked Secrets 密钥遮蔽系统 | 无 | ⭐⭐⭐ 高（安全相关，👍4） |
| **[#9443](https://github.com/openclaw/openclaw/issues/9443)** | Android APK 预编译发布 | 无 | ⭐⭐⭐ 高（降低使用门槛） |
| **[#22438](https://github.com/openclaw/openclaw/issues/22438)** | 分层 Bootstrap 文件加载 | 无 | ⭐⭐ 中（token 成本优化） |
| **[#12602](https://github.com/openclaw/openclaw/issues/12602)** | Slack Block Kit 消息支持 | 无 | ⭐⭐ 中（企业场景需求） |
| **[#39604](https://github.com/openclaw/openclaw/issues/39604)** | web_fetch 允许访问私有网络（opt-in） | 无 | ⭐⭐ 中（👍9，企业内网场景） |
| **[#7707](https://github.com/openclaw/openclaw/issues/7707)** | Memory Trust Tagging 按来源标记信任级别 | 无 | ⭐⭐ 中（安全+记忆系统） |
| **[#6731](https://github.com/openclaw/openclaw/issues/6731)** | Safe/Unsafe ClawdBot 沙箱模式 | 无 | ⭐⭐ 中（安全隔离） |
| **[#22358](https://github.com/openclaw/openclaw/issues/22358)** | Post-subagent completion extension hook | 无 | ⭐⭐ 中（多 Agent 编排） |
| **[#27445](https://github.com/openclaw/openclaw/issues/27445)** | sub-agent 完成通知路由到父会话 | 无 | ⭐⭐ 中（多 Agent 编排） |
| **[#13583](https://github.com/openclaw/openclaw/issues/13583)** | Pre-response enforcement hooks（硬闸门） | 无 | ⭐⭐ 中（金融/安全场景） |
| **[#14785](https://github.com/openclaw/openclaw/issues/14785)** | 减少工具 schema token 开销（~3500 tok/session） | 无 | ⭐⭐ 中（成本优化） |

### 有活跃 PR 推进的功能

| PR | 功能 | 状态 |
|---|---|---|
| **[#78303](https://github.com/openclaw/openclaw/pull/78303)** | MCP 工具调用审批机制（consent envelope） | OPEN，待 proof |
| **[#18889](https://github.com/openclaw/openclaw/pull/18889)** | Agent 执行生命周期边界 | OPEN，待作者 |
| **[#18860](https://github.com/openclaw/openclaw/pull/18860)** | 通过 hook 暴露工具 schema | OPEN，待维护者审查 |
| **[#18778](https://github.com/openclaw/openclaw/pull/18778)** | Discord Canvas 支持 | OPEN，待作者 |
| **[#94311](https://github.com/openclaw/openclaw/pull/94311)** | lossless-claw 自动授予 model override | OPEN，待 proof |

### 路线图信号判断

结合 Issues 热度和 PR 活跃度，下一版本可能聚焦：
1. **安全加固**：密钥遮蔽、工具审批、记忆信任标记——多个安全相关 issue 同时活跃
2. **多 Agent 编排**：sub-agent 生命周期 hook、完成通知路由、A2A 重复消息修复
3. **跨平台覆盖**：Linux/Windows 客户端、Android APK、Windows CI 改进
4. **性能/成本优化**：Bootstrap 分层加载、工具 schema token 压缩

---

## 7. 用户反馈摘要

### 😤 痛点（不满意）

1. **回归问题频繁**：多位用户报告 v2026.3.x ~ v2026.4.x 区间出现严重回归——Coding Agent 无法完成工作（#62505）、exec 环境变量不再继承（#31583）、Control UI 安全上下文断裂（#32473）。用户情绪："用了几周的东西突然不行了"。
2. **文档与实际行为不符**：#11659（webhook sessionKey 多轮对话不按文档工作）、#29387（agentDir 中 bootstrap 文件静默忽略）、#37966（cacheRetention 配置被静默忽略）——用户按文档配置但实际不生效，信任感受损。
3. **数据丢失风险**：#40001（write 工具无 append 模式导致 cron 会话覆盖共享文件）、#50248（cleanup 误删新 cron 会话）——用户对"静默数据丢失"非常敏感。
4. **平台覆盖不均**：macOS/iOS/Android 有客户端，Linux/Windows 缺失（#75），Android 有源码但无预编译 APK（#9443）——非 macOS 用户体验被忽视感较强。
5. **安全焦虑**：#10659（Agent 可读取原始 API Key）、#25592（内部处理文本泄露到渠道）、#7707（记忆投毒攻击）——随着 Agent 处理敏感数据增多，用户对安全边界的担忧日益加深。

### 😃 满意点

1. **多渠道覆盖**：Slack、Telegram、Discord、WhatsApp、iMessage、飞书等多平台支持仍是核心竞争力，社区认可度高。
2. **记忆系统**：memory/embedding 功能被多位用户提及为"最重要的功能"（#16670），说明产品方向正确。
3. **活跃的社区响应**：部分 PR 如 #91988（bootstrap 修复）、#93627（dreaming 重复修复）等显示维护团队在积极回应问题。

### 📋 典型使用场景

- **个人 AI 助手**：通过 Telegram/WhatsApp/Slack 与 Agent 日常交互，依赖记忆系统维持上下文
- **自动化运维**：cron 任务 + exec 工具链，用于定时任务和脚本执行
- **编码 Agent**：使用 coding agent 进行软件开发（但近期回归问题严重影响此场景）
- **多 Agent 协作**：通过 sessions_spawn/sessions_send 编排复杂工作流
- **企业部署**：Docker + VPS 部署，需要安全加固和多用户支持

---

## 8. 待处理积压

以下 Issues/PRs 长期未响应或处于积压状态，建议维护者关注：

### 🔴 长期未响应的重要 Issues（>30 天无实质进展）

| Issue | 创建日期 | 评论 | 👍 | 状态 | 建议 |
|---|---|---|---|---|---|
| **[#75](https://github.com/openclaw/openclaw/issues/75)** | 2026-01-01 | 109 | 79 | OPEN | 👍79 的超级热帖，建议发布正式 roadmap 回应 |
| **[#25592](https://github.com/openclaw/openclaw/issues/25592)** | 2026-02-24 | 32 | 1 | OPEN | P1 级文本泄露，影响所有渠道用户 |
| **[#9443](https://github.com/openclaw/openclaw/issues/9443)** | 2026-02-05 | 25 | 2 | OPEN | Android APK 预编译，降低门槛 |
| **[#22438](https://github.com/openclaw/openclaw/issues/22438)** | 2026-02-21 | 17 | 0 | OPEN | Bootstrap 分层加载，token 成本优化 |
| **[#22676](https://github.com/openclaw/openclaw/issues/22676)** | 2026-02-21 | 17 | 0 | OPEN | Signal daemon 竞态条件 |
| **[#29387](https://github.com/openclaw/openclaw/issues/29387)** | 2026-02-28 | 14 | 5 | OPEN | Bootstrap 文件静默忽略，文档与行为不符 |
| **[#62505](https://github.com/openclaw/openclaw/issues/62505)** | 2026-04-07 | 14 | 1 | OPEN | Coding Agent 回归，影响核心用户群 |
| **[#10659](https://github.com/openclaw/openclaw/issues/10659)** | 2026-02-06 | 13 | 4 | OPEN | 密钥遮蔽，安全相关 |
| **[#12602](https://github.com/openclaw/openclaw/issues/12602)** | 2026-02-09 | 13 | 0 | OPEN | Slack Block Kit，企业场景 |
| **[#39604](https://github.com/openclaw/openclaw/issues/39604)** | 2026-03-08 | 13 | 9 | OPEN | web_fetch 私有网络访问，👍9 |

### 🟡 长期未响应的重要 Issues（>60 天）

| Issue | 创建日期 | 评论 | 👍 | 状态 |
|---|---|---|---|---|
| **[#22676](https://github.com/openclaw/openclaw/issues/22676)** | 2026-02-21 | 17 | 0 | OPEN |
| **[#22358](https://github.com/openclaw/openclaw/issues/22358)** | 2026-02-21 | 12 | 1 | OPEN |
| **[#27445](https://github.com/openclaw/openclaw/issues/27445)** | 2026-02-26 | 11 | 5 | OPEN |
| **[#13583](https://github.com/openclaw/openclaw/issues/13583)** | 2026-02-10 | 11 | 2 | OPEN |
| **[#40001](https://github.com/openclaw/openclaw/issues/40001)** | 2026-03-08 | 11 | 1 | OPEN |
| **[#39476](https://github.com/openclaw/openclaw/issues/39476)** | 2026-03-08 | 10 | 0 | OPEN |
| **[#92201](https://github.com/openclaw/openclaw/issues/92201)** | 2026-06-11 | 10 | 1 | OPEN |

### 🟠 积压 PR（长时间未合并）

| PR | 创建日期 | 状态 | 内容 |
|---|---|---|---|
| **[#78303](https://github.com/openclaw/openclaw/pull/78303)** | 2026-05-06 | OPEN, needs proof | MCP consent envelope（46 天） |
| **[#18889](https://github.com/openclaw/openclaw/pull/18889)** | 2026-02-17 | OPEN, waiting on author | Agent 生命周期边界（121 天） |
| **[#18860](https://github.com/openclaw/openclaw/pull/18860)** | 2026-02-17 | OPEN, ready for review | 工具 schema 暴露（121 天） |
| **[#18778](https://github.com/openclaw/openclaw/pull/18778)** | 2026-02-17 | OPEN, waiting on author | Discord Canvas（121 天） |
| **[#88919](https://github.com/openclaw/openclaw/pull/88919)** | 2026-06-01 | OPEN, ready for review | Preflight compaction 锁重入（78 天） |

### ⚠️ Stale 标记 Issues

| Issue | 创建日期 | 评论 | 👍 | 内容 |
|---|---|---|---|---|
| **[#62505](https://github.com/openclaw/openclaw/issues/62505)** | 2026-04-07 | 14 | 1 | Coding Agent 回归 |
| **[#50248](https://github.com/openclaw/openclaw/issues/50248)** | 2026-03-19 | 9 | 0 | sessions cleanup 误删 cron 会话 |
| **[#45765](https://github.com/openclaw/openclaw/issues/45765)** | 2026-03-14 | 8 | 0 | OPENCLAW_HOME 嵌套目录回归 |

---

## 📊 项目健康度总览

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issues 活跃度 | 500 条更新 | 🟢 高 |
| 24h Issues 关闭率 | 1.8% (9/500) | 🔴 极低，分流压力大 |
| 24h PR 合并率 | 11.8% (59/500) | 🟡 偏低，审查瓶颈 |
| 无 Fix PR 的高优 Bug | 14/20 | 🔴 需关注 |
| 超 30 天未响应 Issue | 10+ | 🟡 积压严重 |
| 超 60 天未合并 PR | 4 | 🟡 需催办 |
| 新版本发布 | 0 | 🟡 高频迭代但未发版 |

**总结**：OpenClaw 项目社区活跃度旺盛，但维护团队的响应速度和处理能力面临明显压力。建议优先处理：(1) 回归类 Bug 的修复和发版；(2) 对 #75 (Linux/Windows 客户端) 等超级热帖给出正式回应；(3) 清理积压的 stale issues 和长期未合并的 PR。

---

*日报由 OWL 自动生成 | 数据截至 2026-06-18 | 来源：[openclaw/openclaw](https://github.com/openclaw/openclaw)*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**日期：2026-06-18 | 分析引擎：OWL**

---

## 1. 生态全景

2026 年 6 月 18 日，个人 AI 助手与自主智能体开源生态处于**高速扩张与深度分化并存**的格局。12 个被跟踪项目中，6 个处于高活跃开发期（OpenClaw、Hermes Agent、NanoClaw、IronClaw、CoPaw、ZeroClaw），日均 Issues 处理量均超 45 条、PR 更新超 45 条，社区贡献强度显著高于开源项目平均水平。**安全加固、跨平台覆盖、多 Agent 编排、Computer Use 桌面操控**成为多项目共同聚焦的四大方向，反映出社区对 Agent 能力边界的探索正从"对话助手"向"全能型自主智能体"快速迁移。与此同时，回归问题积压（OpenClaw 14 个高优 Bug 无修复 PR、Hermes 桌面端反复崩溃）和审查瓶颈（NanoClaw 16 个待合并 PR、IronClaw 33 个积压）普遍存在，说明生态整体处于**功能膨胀期向质量巩固期过渡**的关键节点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | Issues 关闭率 | PR 更新 | PR 合并率 | 新版本发布 | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 1.8% 🔴 | 500 | 11.8% 🟡 | 无 | 🟡 高活跃/高积压 |
| **NanoBot** | 10 | 30.0% 🟢 | 30 | 60.0% 🟢 | 无 | 🟢 高产出/快消化 |
| **Hermes Agent** | 50 | 14.0% 🟡 | 50 | 26.0% 🟡 | 无 | 🟡 高活跃/桌面端脆弱 |
| **PicoClaw** | 4 | — | 10 | 60.0% 🟢 | Nightly Build | 🟢 安全响应快 |
| **NanoClaw** | 5 | 20.0% 🟢 | 19 | 15.8% 🟡 | v2.1.0/v2.1.17 | 🟡 发布危机已修复 |
| **NullClaw** | 3 | 0.0% 🔴 | 1 | 0.0% 🔴 | 无 | 🔴 维护期/低活跃 |
| **IronClaw** | 48 | 45.8% 🟢 | 50 | 34.0% 🟡 | 无 | 🟡 CI 阻塞/高积压 |
| **LobsterAI** | 0 | — | 13 | 100.0% 🟢 | 2026.6.15 | 🟢 最健康 |
| **TinyClaw** | 0 | — | 0 | — | — | ⚪ 无活动 |
| **Moltis** | 3 | 33.3% 🟢 | 1 | 0.0% 🔴 | 无 | 🟢 稳定/低频 |
| **CoPaw** | 45 | 42.2% 🟢 | 50 | 68.0% 🟢 | v1.1.12/v2.0.0a1 | 🟢 双线并行 |
| **ZeptoClaw** | 0 | — | 0 | — | — | ⚪ 无活动 |
| **ZeroClaw** | 50 | 2.0% 🔴 | 50 | 20.0% 🟡 | 无 | 🟡 高活跃/高积压 |

**关键发现：**
- **LobsterAI** 健康度最佳——零积压 Issue、100% PR 合并率、有最新版本发布，处于"收尾型"节奏。
- **OpenClaw 和 ZeroClaw** 社区贡献强度最高（各 500/50 条 Issues+PRs），但关闭率最低（1.8%/2.0%），面临严重的分流压力。
- **NanoBot 和 PicoClaw** PR 合并率均达 60%，消化能力最强。
- **NullClaw、TinyClaw、ZeptoClaw** 三个项目基本处于停滞或极低活跃状态。

---

## 3. OpenClaw 在生态中的定位

### 社区规模绝对领先

OpenClaw 的日均 500 条 Issues + 500 条 PRs 的处理量，是第二名 IronClaw/ZeroClaw（各 50+50 条）的 **10 倍**，远超其他项目。Issue #75（Linux/Windows 客户端）获得 👍79、109 条评论，是单个项目中热度最高的 Feature Request。

### 核心优势

| 维度 | OpenClaw 表现 | 生态对比 |
|---|---|---|
| **渠道覆盖** | Slack、Telegram、Discord、WhatsApp、iMessage、飞书 6 大渠道 | 最广泛，Hermes 次之（无原生渠道层） |
| **记忆系统** | memory/embedding 被用户称为"最重要的功能" | 独有深度，NanoBot/PicoClaw 有轻量记忆 |
| **多 Agent 编排** | sessions_spawn/sessions_send + A2A 讨论 | 与 ZeroClaw 的 agent-to-agent 审批门控形成互补 |
| **社区规模** | Issues/PRs 量级断层领先 | 生态第一梯队 |

### 技术路线差异

- **OpenClaw** 走"**全平台覆盖 + 多渠道统一**"路线，核心架构强调 workspace 隔离、bootstrap 引导文件、多渠道投递网关。
- **Hermes Agent** 走"**桌面端 + Provider 兼容**"路线，Electron 桌面应用 + 多 LLM Provider 适配，但桌面端跨平台稳定性是当前最大短板。
- **NanoClaw** 走"**Managed Fleet + Agent 协作**"路线，强调 immutable image 部署、agent-to-agent 审批门控、安全加固。
- **IronClaw/ZeroClaw** 走"**Rust 原生 + 插件化**"路线，IronClaw 的 Reborn 架构和 ZeroClaw 的 WASM 插件生态代表更底层的技术栈选择。

### 短板

OpenClaw 的 Issues 关闭率（1.8%）和 PR 合并率（11.8%）均为活跃项目中最低，14 个高优 Bug 无修复 PR，回归问题占比 40%。社区贡献强度与维护团队处理能力之间存在明显落差。

---

## 4. 共同关注的技术方向

### 方向一：Computer Use / 桌面操控

| 项目 | 状态 | 具体诉求 |
|---|---|---|
| **LobsterAI** | ✅ 已上线 | PR #2143 新增 Computer Use 能力 |
| **ZeroClaw** | 📋 RFC 阶段 | Issue #6909 提议截图捕获 + 鼠标/键盘事件 |
| **OpenClaw** | 📋 需求阶段 | Issue #75 要求 Linux/Windows 原生客户端（间接需要桌面操控） |

**趋势：** Computer Use 正从"锦上添花"变为"刚需"。LobsterAI 已率先落地，ZeroClaw 进入 RFC，预计 2026 下半年将成为各项目的标配能力。

### 方向二：安全加固

| 项目 | 具体动作 |
|---|---|
| **NanoClaw** | 同日提交 5 个安全 PR（CWE-22 路径遍历、CVE-2026-29611 文件逃逸） |
| **PicoClaw** | OneBot SSRF 漏洞 8 天内修复合并 |
| **IronClaw** | Slack OAuth DM 隔离加固 |
| **ZeroClaw** | `http_request` SSRF 防护（DNS 重绑定） |
| **OpenClaw** | 密钥遮蔽系统（#10659）、工具调用审批（#78303） |

**趋势：** 安全不再是附属议题，而是与 Agent 能力扩展并行推进的核心工程。SSRF 防护、路径遍历修复、密钥遮蔽、审批门控——四道安全防线正在同步构建。

### 方向三：多 Agent 编排

| 项目 | 具体动作 |
|---|---|
| **NanoClaw** | Agent-to-agent 逐条消息审批门控（PR #2793） |
| **OpenClaw** | MCP consent envelope（PR #78303）、sub-agent 生命周期 hook |
| **Hermes Agent** | A2A 协议支持（Issue #514，22 评论 18👍） |
| **ZeroClaw** | WASM 插件生命周期 hooks、A2A agent 发现界面 |

**趋势：** 从"单 Agent 单用户"向"多 Agent 协作网络"演进，审批/治理机制成为下一阶段的核心挑战。

### 方向四：跨平台客户端

| 项目 | 诉求 |
|---|---|
| **OpenClaw** | Linux/Windows 原生应用（#75, 👍79）、Android APK 预编译（#9443） |
| **Hermes Agent** | 纯桌面瘦客户端模式（#38602, 👍17）、macOS 编译修复 |
| **NanoBot** | iOS Safari 移动端适配（#4388） |
| **CoPaw** | Tauri 桌面端崩溃修复、Windows 向量索引持久化 |

**趋势：** macOS 优先、移动端滞后是各项目的共同痛点。Linux/Windows 原生客户端和移动端 WebUI 体验是 2026 年下半年的主战场。

### 方向五：上下文管理优化

| 项目 | 具体动作 |
|---|---|
| **CoPaw** | 上下文压缩超时保护、按条数保留机制 |
| **LobsterAI** | 后压缩上下文连续性层 |
| **OpenClaw** | Bootstrap 分层加载（token 成本优化） |
| **NanoBot** | Session 回放窗口完整性修复 |

**趋势：** 长对话场景下，上下文压缩不再只是"截断"，而是需要连续性保障、优雅降级和 token 成本优化的系统工程。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | NanoClaw | IronClaw | ZeroClaw | CoPaw | LobsterAI | NanoBot | PicoClaw |
|---|---|---|---|---|---|---|---|---|---|
| **核心定位** | 多渠道个人助手 | 桌面端 AI 助手 | 多 Agent 协作平台 | Rust 原生智能体框架 | 插件化 Agent 平台 | 企业级 AI 工作台 | 多模态智能体 | 轻量级 Agent 框架 | 嵌入式 AI 智能体 |
| **技术栈** | Python | Python + Electron | Python + CLI | Rust | Rust + WASM | Python + Tauri | Python + 前端 | Python | Python + 嵌入式 |
| **目标用户** | 个人用户/极客 | 开发者/桌面用户 | 企业 DevOps | 基础设施开发者 | 插件开发者 | 企业团队 | 中文用户/企业 | 轻量部署用户 | 硬件/嵌入式开发者 |
| **渠道覆盖** | 6 大渠道（最强） | 无原生渠道 | iMessage + CLI | Slack + 飞书 | Slack + Mattermost | 飞书 + 钉钉 + 微信 | 自有前端 | Telegram + WhatsApp + Discord | OneBot + DeltaChat |
| **Agent 能力** | 记忆 + 多渠道 + cron | 桌面 + Provider 兼容 | Agent 协作 + 审批 | Reborn 架构 + Projects | WASM 插件 + A2A | 定时任务 + 群聊 | Computer Use + ASR | 搜索 + 子代理 | Gemini + 搜索 |
| **部署模式** | 本地/Docker/VPS | 桌面应用 | Managed Fleet | Cargo 部署 | Daemon + 插件 | 云端 + 桌面 | 云端服务 | Docker/本地 | 嵌入式设备 |

**关键差异：**
- **OpenClaw** 是生态中唯一的"多渠道全覆盖"选手，适合需要跨平台消息触达的个人用户。
- **Hermes Agent** 聚焦桌面端体验，但跨平台稳定性是当前最大风险。
- **NanoClaw 和 IronClaw** 面向企业/生产级场景，强调部署可靠性和 Agent 治理。
- **ZeroClaw** 以 Rust + WASM 插件架构独树一帜，适合需要高性能和自定义插件的高级用户。
- **LobsterAI** 在中文市场和多模态能力（Computer Use + ASR）上领先。
- **NanoBot 和 PicoClaw** 走轻量路线，适合资源受限和快速部署场景。

---

## 6. 社区热度与成熟度分层

### 第一梯队：高活跃 + 高积压（快速迭代期）

| 项目 | 特征 |
|---|---|
| **OpenClaw** | 社区贡献强度断层领先，但维护团队处理能力面临瓶颈。处于"功能膨胀期"，需尽快消化积压。 |
| **ZeroClaw** | 50+50 条日更，v0.8.2 配置重构栈接近收束，WASM 插件生态正在建立。 |
| **IronClaw** | Reborn Projects 5 层 stacked PR 就绪，Agent Loop 可靠性基础设施完成核心合并，但 CI 阻塞（cargo-deny）拖累进度。 |

### 第二梯队：高活跃 + 高产出（质量巩固期）

| 项目 | 特征 |
|---|---|
| **CoPaw** | 1.x 稳定版收尾（v1.1.12）+ 2.0 Alpha 双线并行，PR 合并率 68%，节奏健康。 |
| **Hermes Agent** | 响应速度快（同日报告同日修复），但桌面端跨平台稳定性是系统性短板。 |
| **NanoClaw** | 发布-修复-加固高强度节奏，安全审计推进中，PR 积压 16 个需加速消化。 |

### 第三梯队：稳定输出（成熟维护期）

| 项目 | 特征 |
|---|---|
| **LobsterAI** | 零积压、100% PR 合并率、有版本发布，是生态中健康度最高的项目。 |
| **NanoBot** | 18 个 PR 合并消化技术债务，bugfix 占比 70%，处于"打磨期"。 |
| **PicoClaw** | 安全响应快（8 天修复 SSRF），Nightly Build 持续输出，但 reviewer 带宽不足。 |

### 第四梯队：低频 / 停滞

| 项目 | 特征 |
|---|---|
| **Moltis** | 低频维护期，语音交互是用户摩擦最高的子系统。 |
| **NullClaw** | 3 条存量 Issue 激活，无新 PR 合并，处于最低活跃状态。 |
| **TinyClaw / ZeptoClaw** | 过去 24 小时无活动。 |

---

## 7. 值得关注的趋势信号

### 趋势一：Agent 安全从"可选项"变为"必选项"

6 月 18 日当天，NanoClaw 集中提交 5 个安全 PR、PicoClaw 合并 SSRF 修复、IronClaw 加固 OAuth 路径、ZeroClaw 推进 DNS 重绑定防护、OpenClaw 社区热议密钥遮蔽系统。**安全不再是独立议题，而是与能力扩展同步推进的并行工程线。** 对开发者的启示：新立项的 Agent 项目应在架构设计阶段就内置审批门控、路径校验、密钥隔离机制，而非事后补丁。

### 趋势二：Computer Use 将成为 2026 下半年标配

LobsterAI 已上线 Computer Use，ZeroClaw 进入 RFC，OpenClaw 社区持续要求原生客户端。**从"只能对话"到"能操作桌面"的能力跨越，将是个人 AI 助手产品的下一个分水岭。** 对开发者的启示：Computer Use 不仅需要截图 + 事件注入，还需要全新的安全模型（防止 Agent 失控操作），应尽早规划权限边界。

### 趋势三：多 Agent 协作治理成为新战场

NanoClaw 的 agent-to-agent 审批门控（PR #2793）、Hermes 的 A2A 协议支持（Issue #514）、ZeroClaw 的 WASM 插件生命周期 hooks——三个项目从不同角度解决同一个问题：**如何让多个 Agent 安全、可控地协作。** 对开发者的启示：单 Agent 能力已趋于同质化，下一阶段的差异化将在"协作治理"层展开。

### 趋势四：回归问题暴露快速迭代的风险

OpenClaw 回归问题占比 40%（Coding Agent 无法完成工作、exec 环境变量不再继承、Control UI 安全上下文断裂），Hermes 桌面端同一 Bug 被关闭-复现-再报告。**快速迭代带来的技术债务正在侵蚀用户信任。** 对开发者的启示：在追求功能速度的同时，需要建立回归测试基线，尤其是跨版本升级场景。

### 趋势五：Rust 原生栈正在 Agent 框架领域崛起

IronClaw（Rust + Reborn 架构）、ZeroClaw（Rust + WASM 插件）代表了一种与 Python 主流栈截然不同的技术路线。**Rust 在性能、内存安全和跨平台一致性上的优势，使其成为"生产级 Agent 框架"的有力竞争者。** 对开发者的启示：如果目标场景是高并发、低延迟或资源受限环境，Rust 栈值得重点评估。

### 趋势六：中文市场成为独立赛道

LobsterAI（网易有道）、NanoBot（港科大 HKUDS）、PicoClaw（Sipeed）三个中文背景项目在 Computer Use、飞书渠道、嵌入式场景上形成了差异化优势。**中文 AI Agent 市场正在形成独立的技术路线和生态闭环。** 对开发者的启示：中文场景的渠道集成（飞书/钉钉/微信）、模型兼容（国产 LLM）和部署环境（国产化硬件）是值得关注的市场机会。

---

*报告由 OWL 自动生成 | 数据截至 2026-06-18 | 覆盖 12 个开源项目*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 — 2026-06-18

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 统计窗口：过去 24 小时

---

## 1. 今日速览

NanoBot 今日处于 **高活跃状态**，共处理 10 个 Issue 更新与 30 个 PR 更新，社区协作节奏明显加快。Issues 方面新开/活跃 7 条、关闭 3 条，净积压仍在增长；PR 方面合并/关闭 18 条、待合并 12 条，吞吐量可观但 PR 流水线也在拉长。无新版本发布，当前处于 **密集开发迭代阶段**——大量 bugfix 与功能增强正在向主干涌入。核心贡献者 `chengyongru`、`yu-xin-c`、`franciscomaestre` 等多线并行，项目推进效率高。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭 **18 个 PR**，覆盖 agent 核心逻辑、providers、channels、tools、session、webui 等多个模块，整体以下是其中最值得关注的进展：

### ✅ Bug Fix 合并

| # | PR 标题 | 重要性 | 说明 |
|---|---------|--------|------|
| [#4380](https://github.com/HKUDS/nanobot/pull/4380) | fix: allow git commands in workspace subdirectories | 🔴 高 | shell 安全守卫仅检查 cwd 的绝对路径，导致 workspace 子目录中的 git 命令被误拦截，此次修复放宽了路径校验范围 |
| [#4381](https://github.com/HKUDS/nanobot/pull/4381) | fix: recover failed Feishu streaming updates | 🟡 中 | 飞书流式卡片更新失败时无法恢复，新增重试时重新打开 streaming_mode 的机制，并关闭损坏的空白卡片 |
| [#4367](https://github.com/HKUDS/nanobot/pull/4367) | fix(providers): disable proxy for local endpoints | 🔴 高 | 解决 Issue #4366：当系统设置了 `HTTP_PROXY` 环境变量时，对 Ollama / llama.cpp 等本地模型的请求也会被错误路由到代理，导致连接失败 |
| [#4385](https://github.com/HKUDS/nanobot/pull/4385) | fix: log primary model error before fallback | 🟡 中 | Fallback 机制中缺少主模型失败时的错误日志，增加 fallback 前的原始错误输出，提升可观测性 |
| [#4356](https://github.com/HKUDS/nanobot/pull/4356) | fix(anthropic): sanitize tool_use/tool_result IDs | 🟡 中 | Anthropic API 要求 tool ID 仅含 `[a-zA-Z0-9_-]`，来自其他 provider 的 ID 可能含管道符/点号导致 400 错误，新增确定性清洗逻辑 |
| [#4349](https://github.com/HKUDS/nanobot/pull/4349) | fix(session): preserve user turns in replay-window history | 🟡 中 | replay 窗口裁剪可能截断长用户轮次，导致 LLM 从轮次中间开始回放，修复后保证用户轮次完整性 |
| [#4283](https://github.com/HKUDS/nanobot/pull/4283) | fix(webui): correct activity duration display | 🟢 低 | WebUI 活动块时长显示错误，早期 reasoning 计时覆盖了完整轮次时长，修复后优先使用最终 assistant 轮次延迟 |
| [#4347](https://github.com/HKUDS/nanobot/pull/4347) | fix: MyTool model preset switching | 🟢 低 | MyTool 中 model_preset 切换逻辑不清晰，修复后明确处理成功/错误输出，并补充回归测试 |
| [#4386](https://github.com/HKUDS/nanobot/pull/4386) | fix: silence unroutable cli progress noise | 🟢 低 | 未知 channel 的进度检查产生噪音日志，降级为 debug 级别 |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | fix(tools): keep read-only roots out of write paths | 🟡 中 | 文件系统 extra allowed roots 被错误地授予写权限，修复后仅对读/列表工具生效 |
| [#4202](https://github.com/HKUDS/nanobot/pull/4202) | Clarify filesystem workspace write policy | 🟡 中 | 对齐 `apply_patch` 路径处理与 workspace 访问策略，明确区分 `extra_read_allowed_dirs` / `extra_write_allowed_dirs` |

### ✅ 功能增强合并

| # | PR 标题 | 说明 |
|---|---------|------|
| [#4350](https://github.com/HKUDS/nanobot/pull/4350) | feat(web): add Keenable search provider | 新增 Keenable 作为内置 web 搜索 provider，与 DuckDuckGo / Brave / Tavily 等并列 |
| [#4351](https://github.com/HKUDS/nanobot/pull/4351) | feat(providers): better Mistral support | 修复 Mistral API 在 `reasoning_effort`、tool calling 等 4 处与 OpenAI 兼容层的差异，提升 Mistral 模型稳定性 |
| [#4354](https://github.com/HKUDS/nanobot/pull/4354) | feat(bridge): send read receipts for WhatsApp | WhatsApp 桥接在接收消息后自动发送已读回执（蓝勾），8 行自包含改动 |

### 📌 整体评估

今日合并的 PR 中 **bugfix 占比超过 70%**，说明项目近期经历了一轮密集的功能迭代后正在集中消化技术债务。文件系统安全策略（#4053、#4202）、provider 兼容性（#4351、#4356、#4367）、session 回放逻辑（#4349）等核心模块的修复，显著提升了稳定性和多模型支持能力。

---

## 4. 社区热点

### 🔥 Issue #4360 — "end of file unexpected" during installer（9 条评论，已关闭）
- **链接**：[HKUDS/nanobot#4360](https://github.com/HKUDS/nanobot/issues/4360)
- **热度**：今日评论最多的 Issue（9 条）
- **分析**：用户在官方 `debian:13` Docker 镜像中运行 nanobot installer 时，pip 报 `Syntax error: end of file unexpected (expecting "}")`。评论中讨论了 shell 兼容性问题（dash vs bash），最终关闭。**背后诉求**：安装脚本的 POSIX 兼容性不足，影响 Docker 部署体验。

### 🔥 Issue #4388 — iOS Safari 点击输入框触发页面放大
- **链接**：[HKUDS/nanobot#4388](https://github.com/HKUDS/nanobot/issues/4388)
- **分析**：iPhone Air + iOS 26.5 + Safari 环境下，WebUI 输入框聚焦时页面自动放大并导致 UI 变形。用户明确指出"已包含移动端 UI 修复的最新代码"仍复现。**背后诉求**：移动端 WebUI 体验仍是短板，`font-size` 未按 Safari 规范设置（需 ≥16px 才能阻止自动缩放）。

### 🔥 Issue #4376 — user friendly wizard（👍 1）
- **链接**：[HKUDS/nanobot#4376](https://github.com/HKUDS/nanobot/issues/4376)
- **分析**：用户指出 `nanobot onboard --wizard` 假设用户了解大量技术细节，对新手不友好。**背后诉求**：降低入门门槛，提供更渐进式的配置引导。

### 🔥 PR #4391 — Feishu QR scan-to-create bot CLI login
- **链接**：[HKUDS/nanobot#4391](https://github.com/HKUDS/nanobot/pull/4391)
- **分析**：为飞书 channel 新增设备码流程（QR 扫码创建 bot），用户无需手动创建应用或查找凭证。**背后诉求**：简化飞书渠道的接入流程，对标 Slack/Discord 的 OAuth 体验。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|--------|-------|------|-------------|
| 🔴 **高** | [#4366](https://github.com/HKUDS/nanobot/issues/4366) ✅ | 本地模型服务器（Ollama/llama.cpp）因系统代理设置被错误路由，导致连接失败 | **已合并** [#4367](https://github.com/HKUDS/nanobot/pull/4367) |
| 🔴 **高** | [#4360](https://github.com/HKUDS/nanobot/issues/4360) ✅ | Debian 13 Docker 容器中安装脚本 shell 兼容性错误 | **已关闭**（讨论后定位为 dash/bash 问题） |
| 🟡 **中** | [#4388](https://github.com/HKUDS/nanobot/issues/4388) | iOS Safari 输入框聚焦导致页面放大 + UI 变形 | **待修复** |
| 🟡 **中** | [#4322](https://github.com/HKUDS/nanobot/issues/4322) ✅ | `NameError: 'session_key' is not defined` — 合并后 context.py 崩溃 | **已关闭**（用户侧合并冲突导致） |
| 🟡 **中** | [#4389](https://github.com/HKUDS/nanobot/issues/4389) | Fallback 模型 context window 小于主模型时，prompt 未自动裁剪导致溢出 | **待修复** |

**稳定性趋势**：今日合并的 PR 中有多个直接修复了此前引入的回归问题（git 命令拦截 #4380、session 回放 #4349、filesystem 写权限 #4053），说明项目在快速迭代中正积极消化回归风险。

---

## 6. 功能请求与路线图信号

| Issue | 诉求 | 信号强度 | 判断 |
|-------|------|----------|------|
| [#936](https://github.com/HKUDS/nanobot/issues/936) | 多租户 Gateway：单实例管理多个 Agent | ⭐⭐ | 长期需求，架构改动大，短期难落地 |
| [#4389](https://github.com/HKUDS/nanobot/issues/4389) | Per-model `contextWindowTokens` 配置 | ⭐⭐⭐ | 与 fallback 机制强相关，已有用户明确提出，**可能纳入近期版本** |
| [#4376](https://github.com/HKUDS/nanobot/issues/4376) | 更友好的 onboarding wizard | ⭐⭐ | 降低门槛类需求，需设计投入 |
| [#4390](https://github.com/HKUDS/nanobot/issues/4390) | 多实例管理的"傻瓜化"方案 | ⭐⭐ | 与 #936 相关但更轻量，可能通过配置模板实现 |
| [#4378](https://github.com/HKUDS/nanobot/issues/4378) | Cron 级别的 model/preset 切换 | ⭐⭐ | 定时任务场景，需 API 层支持 |
| [#3437](https://github.com/HKUDS/nanobot/issues/3437) | 按需触发 heartbeat（调试用） | ⭐ | 开发者体验改进，优先级较低 |

**路线图判断**：
- **高概率近期落地**：Per-model context window 配置（#4389）—— 与已合并的 fallback 日志改进（#4385）形成配套，逻辑连贯。
- **中期关注**：Feishu QR 扫码登录（PR #4391 已开放）—— 降低飞书渠道接入门槛，对中文用户群价值显著。
- **长期规划**：多租户 Gateway（#936）和多实例管理（#4390）—— 反映企业级部署需求增长，但架构复杂度高。

---

## 7. 用户反馈摘要

**真实痛点**：
1. **Docker/容器化部署体验差**：安装脚本 shell 兼容性（#4360）、代理环境变量干扰本地模型（#4366）—— 容器化场景的配置鲁棒性是持续痛点。
2. **移动端 WebUI 体验不足**：iOS Safari 自动缩放问题（#4388）在"已修复"后仍复现，说明移动端适配测试覆盖不够。
3. **多模型 fallback 策略不够精细**：全局 `contextWindowTokens` 无法适配不同 fallback 模型的窗口差异（#4389），高级用户需要更细粒度的控制。
4. **新手入门门槛高**：`onboard --wizard` 对非技术用户不友好（#4376），配置复杂度是增长瓶颈。

**满意信号**：
- 飞书渠道持续增强（流式卡片恢复 #4381、QR 扫码登录 #4391），中文社区活跃度可见一斑。
- 搜索 provider 生态扩展（Keenable #4350），用户对多搜索引擎支持表示欢迎。
- WhatsApp 已读回执（#4354）等小功能快速合并，社区贡献响应速度快。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于开放状态，建议维护者关注：

| # | 类型 | 标题 | 创建日期 | 状态 | 建议 |
|---|------|------|----------|------|------|
| [#936](https://github.com/HKUDS/nanobot/issues/936) | Issue | Multi-Tenant Gateway | 2026-02-21 | 开放 4 个月 | 架构级需求，建议标记为 `roadmap` 或 `help wanted` |
| [#3437](https://github.com/HKUDS/nanobot/issues/3437) | Issue | On-demand heartbeat trigger | 2026-04-25 | 开放近 2 个月 | 调试工具类，实现成本低，可快速关闭 |
| [#4205](https://github.com/HKUDS/nanobot/pull/4205) | PR | Add mailbox-backed subagent results | 2026-005-05 | 开放 6 周 | 子 agent 结果传递机制重构，需 review 资源 |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | PR | fix(codex): dedup reasoning items | 2026-05-27 | 开放 3 周 | AI-assisted PR，需人工验证 |
| [#4388](https://github.com/HKUDS/nanobot/issues/4388) | Issue | iOS Safari 页面放大 | 2026-06-17 | 开放 1 天 | 移动端体验问题，建议优先处理 |
| [#4389](https://github.com/HKUDS/nanobot/issues/4389) | Issue | Per-model contextWindowTokens | 2026-06-17 | 开放 1 天 | 与 fallback 机制强相关，建议评估后标记 |

**积压健康度评估**：Issue 积压净增长 +4（开 7 / 关 3），PR 待合并 12 条。整体积压可控，但 #936（4 个月未响应）和 #4205（6 周未 review）需要维护者明确态度——要么排期，要么关闭/标记为 `future`，避免社区贡献者信心流失。

---

> **日报总结**：NanoBot 今日处于高产出消化期，18 个 PR 合并集中修复了文件系统安全、provider 兼容性、session 回放等核心模块的回归问题。社区贡献活跃但 PR 流水线在拉长（12 个待合并），建议维护者加强 review 资源投入。iOS 移动端体验和 Docker 部署鲁棒性是持续的用户痛点，Per-model context window 配置可能成为下一个高优先级功能。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-18

---

## 1. 今日速览

Hermes Agent 社区持续处于高活跃状态：过去 24 小时共有 **50 条 Issue 更新**（43 条新开/活跃，7 条已关闭）和 **50 条 PR 更新**（37 条待合并，13 条已合并/关闭）。生态系统明显处于频繁迭代期，多个桌面端构建问题、Provider 兼容性修复和 Agent 核心稳定性补丁在同一时间窗口内集中涌现。今日无新版本发布，主分支处于密集开发状态。有几条长期讨论的 Feature Request（如 A2A 协议支持）持续升温，社区对产品的期望已从"能用"转向"互通"。整体来看，**项目健康度良好**——响应速度快（多条严重 Bug 均在同一天出现对应修复 PR），但桌面端跨平台一致性仍是重大隐患。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [PR #48117](https://github.com/NousResearch/hermes-agent/pull/48117) | Bug Fix | **修复 Auto-stash 合并冲突导致的安装死循环**：当 Git 自动 stash 在 update 流程中产生冲突标记（`<<<<<<< Updated upstream`）时，Python 解析 gateway 源码会抛出 SyntaxError，导致桌面端反复 crash-loop。PR 增加了对 autostash-poisoned tree 的检测与自愈。 |
| [PR #48122](https://github.com/NousResearch/hermes-agent/pull/48122) | Bug Fix | **修复桌面端自更新后不重启的问题**：增量更新构建成功但应用未自动重新启动，用户需手动操作。PR 增加了重试机制确保 relaunch 执行。 |
| [PR #48109](https://github.com/NousResearch/hermes-agent/pull/48109) | Bug Fix | **抑制空名称幻影工具调用的循环**：弱模型（MiMo、Nemotron 级别）在读取文件中的 XML/JSON 时会触发空名工具调用，每次重试向上下文中倾倒完整工具目录，导致 3-4x token 膨胀和上下文污染（关联 Issue #47967）。 |
| [PR #48108](https://github.com/NousResearch/hermes-agent/pull/48108) | Bug Fix | **xAI OAuth Responses 修复（native web_search + 上下文窗口报告）**：将 @XVVH 的 #44341 cherry-pick 到当前 main，修复 `grok-composer-2.5-fast` 等 xAI 模式下的网页搜索失败和 131k 上下文窗口误报问题。 |
| [PR #44341](https://github.com/NousResearch/hermes-agent/pull/44341) | Bug Fix (Closed) | 被 #48108 替代合并，原 PR 关闭。 |

**整体判断**：项目在 Agent 核心稳定性（provider 兼容性、工具调用鲁棒性）和桌面端发布流程（自更新、构建）两条线上均取得实质性进展。多条 PR 呈现出"同一天报告、同一天修复"的高响应节奏。

---

## 4. 社区热点

### Issue #514 — A2A (Agent-to-Agent) 协议支持
- **链接**: [NousResearch/hermes-agent#514](https://github.com/NousResearch/hermes-agent/issues/514)
- **数据**: 22 条评论 🔥，18 👍，已开放 103 天，至今仍活跃更新
- **分析**: Google 的 A2A 协议（Linux 基金会 Apache 2.0）与 MCP 互补——MCP 解决"我能用什么工具"，A2A 解决"谁能帮我"。此 Issue 代表了社区对 **跨框架 Agent 互操作** 的核心诉求。高评论数和高点赞量表明这是当前最有影响力的路线图请求之一，设计讨论已涉及服务发现、能力声明和远程 Agent 编排。

### Issue #3725 — Rocket Chat 支持
- **链接**: [NousResearch/hermes-agent#3725](https://github.com/NousResearch/hermes-agent/issues/3725)
- **数据**: 10 条评论，8 👍
- **分析**: 用户请求将 Rocket Chat 作为消息通道集成。这延续了工业化团队（尤其是有私有部署需求的公司）对非消费级 IM 渠道的持续诉求。范围标为 Small（< 50 行），说明社区认为实现门槛较低但优先级未被调度。

### Issue #47917 — 桌面构建再次失败（electronDist 路径问题复发）
- **链接**: [NousResearch/hermes-agent#47917](https://github.com/NousResearch/hermes-agent/issues/47917)
- **数据**: 8 条评论，**发布于今日 2026-06-17**
- **分析**: PR #47276 曾修复此问题，但用户反馈拉取最新代码后 **同一 Bug 再次出现**——Electron 二进制缓存在 update 流程中被删除。这表明修复不彻底或存在回回归，桌面端发布管线的可靠性高度脆弱。

### Issue #38602 — 纯桌面客户端安装模式
- **链接**: [NousResearch/hermes-agent#38602](https://github.com/NousResearch/hermes-agent/issues/38602)
- **数据**: 5 条评论，**17 👍** — 是所有新功能请求中点赞最高的
- **分析**: 用户希望将 Hermes Desktop 作为纯瘦客户端连接远程 Hermes 实例。但当前架构中 Electron bootstrap 逻辑始终在首次启动时引导安装本地 Agent 运行时。这是当前点赞数（17）最高的 Feature Request，说明**远程/云端部署模式**的市场需求明确。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1 — 严重

| Issue | 描述 | Fix PR |
|---|---|---|
| [#40692](https://github.com/NousResearch/hermes-agent/issues/40692) macOS 桌面端输入延迟 | 对话超过 30 轮后 Composer 出现 200-500ms 按键延迟，越长越严重 | ⚠️ 暂无 PR |
| [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) vision fallback_chain 静默损坏 | `_resolve_single_provider` 传递错误参数名（`base_url` vs `explicit_base_url`），TypeError 被静默吞掉，导致整个回退链失效 | ⚠️ 暂无 PR |

### P2 — 高

| Issue | 描述 | Fix PR |
|---|---|---|
| [#47917](https://github.com/NousResearch/hermes-agent/issues/47917) 桌面构建 electronDist 路径再次失败 | PR #47276 修复后复发 | ⚠️ 根因未消除 |
| [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) macOS electron-builder 编译失败 | `hermes update` / `hermes desktop` 最终阶段失败（9 条评论，持续 12 天） | ⚠️ 暂无 PR |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) Windows 10 安装失败 | npm install 阶段 exit code 1，desktop stage 未完成 | ⚠️ 暂无 PR |
| [#48061](https://github.com/NousResearch/hermes-agent/issues/48061) Linux pipx 安装发送空 runtime model/provider | v0.16.0 仍复现，API 请求失败（P1 级别 P2 处理） | ⚠️ 暂无 PR |
| [#32497](https://github.com/NousResearch/hermes-agent/issues/32497) Agent 意外修改自身 skills/系统提示 | 正常任务执行时 Agent 重写自己的 skill 定义 | ⚠️ 暂无 PR |
| [#43913](https://github.com/NousResearch/hermes-agent/issues/43913) macOS 安装循环 | launcher 使用系统 Python 3.9 而非 bundled venv，每次重新显示安装屏幕 | ⚠️ 暂无 PR |

### P3 — 中/低

| Issue | 描述 | Fix PR |
|---|---|---|
| [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) "Summarizing thread" 状态残留 | compaction 恢复后 Desktop UI 未清除该状态标签 | ⚠️ 暂无 PR |
| [#48133](https://github.com/NousResearch/hermes-agent/issues/48133) Windows 多单词时区名导致时间戳剥离失败 | `Pacific Daylight Time` 等含空格的时区名无法被正则解析 | ✅ [PR #48134](https://github.com/NousResearch/hermes-agent/pull/48134) 同日提交 |
| [#46371](https://github.com/NousResearch/hermes-agent/issues/46371) YOLO 开关 UX 不明确 | 安全关键控件（绕过危险命令审批）为无标注的闪电图标，无二次确认 | ⚠️ 暂无 PR |
| [#48055](https://github.com/NousResearch/hermes-agent/issues/48055) `/new` 不重置 model | session-only `/model` 切换后 `/new` 未恢复到 config 默认值 | ⚠️ 暂无 PR |

### 已关闭 Bug

| Issue | 描述 |
|---|---|
| [#47967](https://github.com/NousResearch/hermes-agent/issues/47967) XML 工具调用语法产生幻影工具调用 | ✅ 已关闭 → [PR #48109](https://github.com/NousResearch/hermes-agent/pull/48109) |
| [#48059](https://github.com/NousResearch/hermes-agent/issues/48059) macOS electronDist 路径问题（duplicate） | ✅ 已关闭（duplicate of #47917 系列） |
| [#44873](https://github.com/NousResearch/hermes-agent/issues/44873) Windows RotatingFileHandler PermissionError | ✅ 已关闭 |
| [#22931](https://github.com/NousResearch/hermes-agent/issues/22931) AES-256-GCM Nonce 重用风险 | ✅ 已关闭（cannot-reproduce） |

---

## 6. 功能请求与路线图信号

### 高优先级信号（有 PR 或明确设计讨论）

| Issue | 方向 | 信号强度 | 判断 |
|---|---|---|---|
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) A2A 协议支持 | Agent 互操作 / 协议层 | 🔥🔥🔥 22 评论 18👍 | **极高** — 社区共识强，但实现复杂度大，短期内可能进入 RFC 阶段而非直接开发 |
| [#47199](https://github.com/NousResearch/hermes-agent/issues/47199) MCP Provider for Claude Code Subscription | Provider 生态 | 📈 新兴需求 | 随着 Claude Max/Pro 订阅用户对本地后端无 API key 接入的需求增长，可能快速排入开发 |
| [#6715](https://github.com/NousResearch/hermes-agent/issues/6715) agentmemory 作为 memory 插件 | 记忆扩展 / 插件化 | 📈 已有实现 | 作者已分享插件实现方案，Hermes 原生 SQLite FTS5 + MEMORY.md 的下一步自然延伸 |

### 中等优先级信号

| Issue | 方向 |
|---|---|
| [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) 纯桌面客户端安装 | 17👍 — 云/远程部署需求 |
| [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) Rocket Chat 支持 | 8👍 — 企业 IM 通道 |
| [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) 统一插件路由选择器 | per-turn provider/model override |
| [#23739](https://github.com/NousResearch/hermes-agent/issues/23739) pre_llm_call 插件可覆盖 model/provider | 运行时路由灵活性 |
| [#20203](https://github.com/NousResearch/hermes-agent/issues/20203) OpenAI Responses API text verbosity 配置 | Provider 配置细化 |

### 判断

从 Issue 热度和 PR 方向来看，**下一版本的主题很可能是：桌面端跨平台稳定性 + Provider 兼容性扩展**。A2A 协议支持虽然声量最大，但架构改动大，更可能作为 RFC 先行讨论。**插件化路由**和**远程/瘦客户端模式**作为"平台化"信号值得关注。

---

## 7. 用户反馈摘要

### 🔴 核心痛点

1. **桌面端安装/构建体验极差（跨平台一致性问题严重）**
   - macOS 用户反复遭遇 electron-builder 失败（#40187、#47917、#48059），同一个 electronDist 路径问题被关闭-复现-再报告
   - Windows 用户面对安装死循环（#48117）和权限错误（#44873）
   - 这表明桌面端发布管线在 CI 跨平台测试覆盖上存在系统性缺口

2. **Agent 行为不可预测**
   - skills/系统提示被意外修改（#32497）
   - 弱模型因文件中的 XML 内容触发幻影工具调用（#47967）
   - `/new` 后模型未恢复到默认配置（#48055）
   - 用户期望 Agent 在生产环境中"不要碰自己的配置"这一基本稳定性尚未完全做到

3. **macOS 性能衰退**
   - 长对话下 Desktop 输入延迟达 200-500ms（#40692），远程模式正常，说明 TUI 渲染层存在 O(n) 或更差的算法

4. **Linux 安装体验被忽视**
   - pipx 安装下 model/provider 为空（#48061），说明对非官方推荐的安装路径适配不足

### 🟡 使用场景信号

- **企业/团队部署**：Rocket Chat（#3725）+ 瘦客户端模式（#38602）→ 用户将 Hermes 视为基础设施而非个人玩具
- **多云/多 Provider**：用户同时在 OpenAI、Claude Max、Nous Portal、xAI、AWS Bedrock 之间切换，期望统一的信用余额查询（#33376）和无缝路由
- **自建 Agent 生态**：A2A 协议支持（#514）+ agentmemory 插件（#6715）→ 高级用户在构建多 Agent 协作网络

### 🟢 满意方向

- xAI Provider 的持续修复（#44341、#48108）得到积极响应，xAI 用户对社区响应速度表示认可
- cron 调度器和 Kanban 集成等高级功能有持续的插件化改进讨论

---

## 8. 待处理积压 — 需要维护者关注

### Issue 积压

| Issue | 开放时长 | 严重度 | 当前状态 | 建议 |
|---|---|---|---|---|
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) A2A 协议支持 | **103 天** | Feature | 持续讨论 | 需要 RFC 或路线图确认，长期无官方回应会伤害社区热情 |
| [#40692](https://github.com/NousResearch/hermes-agent/issues/40692) macOS 输入延迟 | **12 天** | P1 Bug | 无任何 PR | **需紧急认领** — 直接影响所有 macOS Desktop 用户的日常可用 |
| [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) vision fallback_chain | **32 天** | P1 Bug | 无 PR | 根因明确（参数名错误），修复简单，仅需认领 |
| [#32497](https://github.com/NousResearch/hermes-agent/issues/32497) skills 自修改 | **23 天** | P2 Bug | 无 PR | 安全/稳定性影响较大需要优先处理 |
| [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) macOS 编译失败 | **12 天** | P2 Bug | 无 PR | 与 #47917 系列相关，需统一排查 |
| [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) 瘦客户端模式 | **14 天** | Feature | 17👍 | 需要架构层面的决策，建议标为 roadmap |
| [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) 统一路由选择器 | **11 天** | Feature | 与 #23739 相关 | 两条 Issue 讨论的是同一问题，建议合并 |

### PR 积压（开放待审）

| PR | 开放时长 | 说明 |
|---|---|---|
| [PR #15435](https://github.com/NousResearch/hermes-agent/pull/15435) | **54 天** | 测试环境 systemd mock — 小但长期无人 review |
| [PR #44338](https://github.com/NousResearch/hermes-agent/pull/44338) | **7 天** | Kanban 通知失败重试 — 功能合理但无 reviewer 响应 |
| [PR #44341](https://github.com/NousResearch/hermes-agent/pull/44341) | **7 天** | 已被 #48108 替代合并，可正式关闭 |

---

**日报生成时间**: 2026-06-18  
**数据来源**: GitHub — NousResearch/hermes-agent  
**分析引擎**: OWL, ZOO

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-18

---

## 1. 今日速览

PicoClaw 今日活跃度中等偏上：过去 24 小时内共 4 条 Issue 更新和 10 条 PR 动态，其中 6 个 PR 被合并/关闭，推进效率较高。安全修复响应尤为突出——OneBot 私有地址 SSRF 漏洞从报告到修复合并仅用 8 天。Gemini provider 层持续修补（3.5 Flash Agentic reasoning 兼容性），搜索引擎适配也在同步跟进。整体项目处于高速迭代期，社区修复节奏快于新功能合入。

---

## 2. 版本发布

### Nightly Build — `v0.3.0-nightly.20260617.a16a1e15`
> [github.com/sipeed/picoclaw/releases](https://github.com/sipeed/picoclaw/compare/v0.3.0…main)

- **性质**：自动化构建，不稳定，建议谨慎使用。
- **定位**：v0.3.0 主版本开发分支的最新快照，汇聚了近期合入的多个 fix（包括今日合并的 Gemini thought_signature、OneBot SSRF、Sogou 搜索适配等）。
- **迁移注意**：无正式 changelog 列出破坏性变更，但因仍处于 nightly 阶段，建议生产环境继续关注稳定版。

---

## 3. 项目进展

今日合并/关闭的 PR 覆盖了 **安全、LLM 兼容性、Web UI、搜索引擎** 四个维度：

| PR # | 状态 | 类型 | 摘要 |
|---|---|---|---|
| **#3140** | ✅ 合并 | 🔒 安全 | 拦截 OneBot 入站媒体 URL 中的私有地址/SSRF 攻击向量 |
| **#3136** | ✅ 合并 | 🐞 Bug fix | 同时输出 camelCase `thoughtSignature` 和 snake_case `thought_signature`，修复 Gemini 3.5 Flash 400 错误 |
| **#3139** | ✅ 合并 | 🐞 Bug fix | 更新 Sogou 搜索页面 HTML 结构解析正则表达式，恢复搜索结果解析能力 |
| **#2990** | ✅ 合并 | 🐞 Bug fix | 修复 Web UI 会话历史只显示最后一条用户消息的问题 |
| **#2917** | ✅ 合并 | ✨ 新功能 | 新增 NEAR AI Cloud 作为第一类 OpenAI 兼容 LLM Provider |
| **#3138** | ⚪ 关闭 | — | 韩语"审核功能"相关提交，无描述，疑似误提交或 spam |

**里程碑评估**：
- **安全层**：PR #3140 正式关闭了 Issue #3070 报告的 SSRF 漏洞，标志着 OneBot channel 安全加固完成一个关键闭环。
- **LLM 兼容层**：PR #3136 直接对应 Issue #3111 的报告，Gemini 生态的 Agentic 推理链路已可稳定运行于 3.5 Flash。
- **Provider 生态**：NEAR AI Cloud 的加入将该项目的 LLM 后端支持从主流云厂商扩展至区块链/TEE 领域，体现去中心化 AI 的战略方向。
- **Web UI**：会话历史完整性的修复（#2990）消除了长尾 Issue 积压，提升用户体验。

---

## 4. 社区热点

### 🔥 Issue #3088 — [Feature] 使用 vodozemac 替代 libolm
> [sipeed/picoclaw#3088](https://github.com/sipeed/picoclaw/issues/3088)

- **标签**：`help wanted` · `priority: high`
- **状态**：OPEN，获 2 个赞
- **内涵分析**：libolm 已停止维护且存在安全隐患，vodozemac 是 Matrix 生态官方推荐的 Rust 实现替代品。此 Issue 的 `help wanted` + `priority: high` 双重标签表明项目方将此列为待完成项，社区开发者可以介入。核心诉求是**编译时将 libolm 变为可选依赖**，降低供应链安全风险，同时保持向后兼容性。

### 📊 活跃 PR — #3063 feat: add deltachat gateway
> [sipeed/picoclaw#3063](https://github.com/sipeed/picoclaw/pull/3063)

- **状态**：OPEN（stale），创建于 6 月 8 日
- **内涵分析**：DeltaChat 作为基于邮件的端到端加密通信工具，其 gateway 接入意味着 PicoClaw 正积极扩展去中心化通信协议矩阵。此 PR 已 stagnant 超 10 天，需要 reviewer 关注以推动合入或给出反馈。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 描述 | Issue/PR | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **严重** | OneBot 入站媒体 URL 可被利用进行 SSRF 攻击（主机侧任意拉取） | [#3070](https://github.com/sipeed/picoclaw/issues/3070) | ✅ 已关闭 | **#3140** 已合并 |
| 🟠 **中高** | Gemini 3.5 Flash 执行工具失败，返回 400（缺少 thought_signature 字段） | [#3111](https://github.com/sipeed/picoclaw/issues/3111) | ✅ 已关闭 | **#3136** 已合并 |
| 🟡 **中等** | Sogou 搜索结果解析失败——HTML 结构变更导致正则失配 | — | — | **#3139** 已合并 |
| 🟡 **中等** | Web UI 会话历史仅显示最后一条用户消息 | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | ✅ 已关闭 | **#2990** 已合并 |
| 🔵 **低** | skills_install 中类型断言未检查 ok 值，可能导致静默行为异常 | — | OPEN | **#3092**（待合并） |
| 🔵 **低** | spawn 子轮询 ToolResult ForUser 字段未清除导致消息重复投递 | — | OPEN | **#3142**（待合并） |
| 🔵 **低** | Brave Search API 返回空结果时缺乏诊断日志 | — | OPEN | **#3141**（待合并） |

**修复率**：今日报告的 2 个严重/中高 bug 均已通过 PR 合并修复，修复效率 100%。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 分析 |
|---|---|---|
| **加密库切换** | [#3088](https://github.com/sipeed/picoclaw/issues/3088) — vodozemac 替换 libolm | 标记 `high priority` + `help wanted`，预计将在 v0.3.x 周期内推进。可能作为编译 feature flag 加入。 |
| **新通信协议扩展** | [#3093](https://github.com/sipeed/picoclaw/issues/3093) — 请求 SimpleX/Tox gateway | 零点赞、stale 状态，社区需求尚待验证。但结合 #3063（DeltaChat gateway 开发中），去中心化通信协议的扩展方向是明确的。 |
| **搜索引擎增强** | [#3141](https://github.com/sipeed/picoclaw/pull/3141) — Brave 诊断日志 | 搜索工具链的健壮性还在持续打磨中，当网页抓取解析遇到静默失败时缺乏排查手段的问题正在被解决。 |
| **Agentic 工具调用** | [#3142](https://github.com/sipeed/picoclaw/pull/3142) — spawn 消息去重 | 子代理（sub-agent）完成后的消息路由逻辑仍有优化空间，反映该项目正在深化 agentic 架构能力。 |

---

## 7. 用户反馈摘要

| 痛点 | 来源 | 用户真实场景 | 情感 |
|---|---|---|---|
| libolm 安全性担忧 | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | 用户注重供应链安全，关注到 libolm 已停维护且被官方标记为不安全的状况 | 😟 |
| Gemini 3.5 Flash 无法调用工具 | [#3111](https://github.com/sipeed/picoclaw/issues/3111) | 升级到 Gemini 3.5 Flash 后 Agent 工具调用链路直接中断的工作流 | 😤 |
| 缺乏 SimpleX/Tox 支持 | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | 用户需要将 PicoClaw 接入隐私通信场景 | 😐 |

整体来看，主流用户痛点集中在 **LLM provider 兼容性**（Google API 版本迭代快导致 schema 频繁不兼容）和 **通信协议覆盖**（去中心化/隐私通信需求）。

---

## 8. 待处理积压

以下 PR/Issue 长期未响应，建议维护者关注：

| 条目 | 类型 | 创建日期 | 年龄 | 问题描述 | 建议行动 |
|---|---|---|---|---|---|
| **#3088** — vodozemac 替代 libolm | Issue | 6月9日 | >8天 | 安全+高优先级，标记 `help wanted` 但无实质性回复 | 分配维护者或明确路线图计划 |
| **#3093** — SimpleX/Tox 请求 | Issue | 6月10日 | >7天 | 无点赞，用户需求边缘化，需判断是否纳入路线 | 关闭或标记为 `wontfix`，或转讨论 |
| **#3063** — DeltaChat gateway | PR | 6月8日 | 10天 stale | 新通信 gateway，已 stagnant | 需要 reviewer 给出反馈（approve/request changes） |
| **#3092** — skills_install 类型断言 | PR | 6月10日 | >7天 stale | 小修复，代码改动少，应可快速评审 | 安排 review/合并 |
| **#3142** — spawn 消息去重 | PR | 今日 | 1天 | 刚提交，涉及 agentic 子代理核心逻辑 | 尽快 review，避免后续 conflict |

---

> **OWL 视图**：PicoClaw 项目在 6 月 18 日的整体健康度 —🟢 **活跃**，安全响应快，核心 bug 修复闭环率高。当前瓶颈在于 reviewer 带宽不足导致部分 PR（尤其新功能类）积压，建议加强 Code Review 资源分配。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-18

---

## 1. 今日速览

NanoClaw 今日处于**高活跃度、高产出**状态：24小时内处理了 5 条 Issue（4 新开、1 关闭）和 19 条 PR（16 待合并、3 已合并/关闭），并发布了 **v2.1.17** 和 **v2.1.0** 两个 rollup 版本，两者均包含 [BREAKING] 变更。安全修复密集，有 2 个安全类 PR（CWE-22 路径遍历、CVE-2026-29611 文件读取逃逸）专门针对容器逃逸和路径穿越漏洞。整体来看，项目正经历一轮**集中清理与加固周期**——多个开发者（sturdy4days、specterslient95-lgtm）在同一天并行推进修复，但 16 个待合并 PR 的积压表明审查带宽可能成为瓶颈。

---

## 2. 版本发布

### v2.1.17（最新 rollup）
**链接：** [github.com/nanocoai/nanoclaw/releases/tag/v2.1.17](https://github.com/qwibitai/nanoclaw/releases)

**涵盖范围：** v2.1.0 → v2.1.17 所有 `package.json` bump 合并。

**[BREAKING] `@onecli-sh/sdk` 升级 0.5.0 → 2.2.1：**
- 新 SDK 要求 OneCLI 服务器提供 `/v1` API 端点。
- **否则所有 SDK 调用返回 404**（对所有多 agent 用户是致命影响）。
- 授权网关（gateway）和 CLI 版本现在被固定（pinned），旧版 gateway 需要手动对齐。
- **迁移注意：** 升级前确认 OneCLI server 支持 `/v1`；若运行旧版 gateway，需先协调升级。

---

### v2.1.0（基础 rollup）
**链接：** [github.com/nanocoai/nanoclaw/releases/tag/v2.1.0](https://github.com/qwibitai/nanoclaw/releases)

**涵盖范围：** v2.0.64 → v2.1.0 所有变更。

**[BREAKING] 启动需要升级标记（upgrade marker）：**
- 主机安装若未在 `data/upgrade-state.json` 中记录"达到当前版本"的状态，**将拒绝启动**。
- 设计目的：防止 managed fleet 等固定镜像部署在版本不一致时静默运行。
- **临时规避：** PR #2780 已合并，提供环境变量 `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` 供 managed fleet 选择退出。

---

## 3. 项目进展（今日合并/关闭）

| # | PR | 状态 | 摘要 |
|---|---|---|---|
| [2797](https://github.com/qwibitai/nanoclaw/pull/2797) | fix(delivery): isolate per-session failures so one bad session can't stall delivery for all | ✅ **Closed/Merged** | 修复了 Issue #2796 的核心**可用性缺陷**：原代码 `pollActive`/`pollSweep` 的 `for` 循环包裹在单一 `try/catch` 中，单个 agent 的 `outbound.db` 读取失败会导致**所有 agent 的消息传递静默中止**。修复通过隔离各 session 的错误边界，确保单点故障不影响全局。这是重大的稳定性修复。 |
| [2794](https://github.com/qwibitai/nanoclaw/pull/2794) | fix(providers): restore env-var gateway auth for managed fleets | ✅ **Closed/Merged** | 修复了 v2.1.17 的**严重回归**：managed fleet 中 LLM 认证失败（每轮返回 401），原因是环境变量形式的 gateway 认证在某次重构中被移除。此 PR 直接恢复了该路径，避免了已部署 fleet 的大规模服务中断。 |
| [2780](https://github.com/qwibitai/nanoclaw/pull/2780) | feat(upgrade-state): env opt-out for the startup tripwire (managed fleets) | ✅ **Closed/Merged** | 为 v2.1.0 引入的升级检查"绊线"（tripwire）提供了**受控退出机制**。`NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` 环境变量允许 immutable image 部署绕过检查（以 warn 级别日志记录），是 managed fleet 用户的必要逃生口。 |
| [2798](https://github.com/qwibitai/nanoclaw/pull/2798) | chore(release): expand CHANGELOG for v2.1.17 | 〰️ **Open**（文档） | 同步更新 CHANGELOG，处于待合并状态。 |

**整体进展评估：** 三个关键合并将项目从"发布 v2.1.0/v2.1.17 → 立即修复两个严重回归"的危机节奏中拉回稳定状态。消息传递隔离（#2797）和认证恢复（#2794）合计解决了影响所有 agent 可用性的潜在 P0 问题。升级绊线退出（#2780）体现了对 managed fleet 部署场景的重视。

---

## 4. 社区热点

### 🔥 热度最高 Issue

**[#2796 — One unhealthy session stalls message delivery for all agents](https://github.com/qwibitai/nanoclaw/issues/2796)**（已关闭）
- 作者 mashkovtsevlx 在报告后同一天即提交修复 PR #2797 并合并，**从发现到修复不到24小时**，反应速度说明这是已知的痛点。
- **背后诉求：** 多 agent 用户的核心诉求是"故障隔离"——一个 agent 的数据库不应拖垮整个系统。这是分布式架构中经典的级联失效模式。

### 🔥 热度最高 PR

**[#2793 — feat(agent-to-agent): per-message approval policies on connected agents](https://github.com/qwibitai/nanoclaw/pull/2793)**（待合并）
- 引入 agent 到 agent 消息的**按需逐条审批门控**。当 A→B 存在审批策略时，A 发给 B 的每条消息被暂存，B 的 owner 看到消息审批卡片后可 approve/deny。默认不启用，完全向后兼容。
- **背后诉求：** 随着 agent-to-agent 连接的推广，用户开始对消息流的安全性和可控性有更高要求。这是一个**从"自由连接"迈向"受控协作"**的信号，与 Zero Trust 理念一致。

### 🆕 新涌现议题

**sturdy4days 的安全修复束（5个同日 PR）：**
- PR [#2800](https://github.com/qwibitai/nanoclaw/pull/2800)（CWE-22 路径遍历）、[#2799](https://github.com/qwibitai/nanoclaw/pull/2799)（CVE-2026-29611 文件读取逃逸）以及 [#2804](https://github.com/qwibitai/nanoclaw/pull/2804)、[#2802](https://github.com/qwibitai/nanoclaw/pull/2802)、[#2750](https://github.com/qwibitai/nanoclaw/pull/2750) 表明该开发者在进行一轮**广泛的安全审计**，涉及 CLI、路由器和文件系统。

**specterslient95-lgtm 的文档修复束（5个同日 PR）：**
- PR [#2792](https://github.com/qwibitai/nanoclaw/pull/2792)、[#2790](https://github.com/qwibitai/nanoclaw/pull/2790)、[#2788](https://github.com/qwibitai/nanoclaw/pull/2788)、[#2786](https://github.com/qwibitai/nanoclaw/pull/2786) 分别修复了4个 skill 文档中的错误或缺失。对应 Issue #2785、#2787、#2789、#2791。
- **背后诉求：** 新用户上手体验正在成为社区反馈焦点，安装/迁移/初始化流程的文档质量问题正在被系统性地发现并修复。

---

## 5. Bug 与稳定性

### P0 — 严重（已有 fix PR）

| 问题 | Issue/PR | 严重程度 | Fix 状态 |
|---|---|---|---|
| 单 session 故障阻断全部 agent 消息传递 | [#2796](https://github.com/qwibitai/nanoclaw/issues/2796) / [#2797](https://github.com/qwibitai/nanoclaw/pull/2797) | **P0** — 所有 agent 消息传递静默停止且需手动重启 daemon | ✅ 已合并 |
| Managed fleet LLM 401 认证失败（v2.1.17 回归） | [#2794](https://github.com/qwibitai/nanoclaw/pull/2794) | **P0** — 已部署 fleet 完全无法调用 LLM | ✅ 已合并 |

### P1 — 高（已有 fix PR，待合并）

| 问题 | Issue/PR | 严重程度 | Fix 状态 |
|---|---|---|---|
| `send_file` 允许读取容器内任意文件 (CVE-2026-29611) | [#2799](https://github.com/qwibitai/nanoclaw/pull/2799) | **P1 — 安全**：prompt injection 可读取 credential state 等敏感文件 | ⏳ 待合并 |
| `ncl groups create` 允许路径穿越写入 (CWE-22) | [#2800](https://github.com/qwibitai/nanoclaw/pull/2800) | **P1 — 安全**：`--folder ../../etc` 可逃逸 GROUPS_DIR | ⏳ 待合并 |
| `ncl messaging-groups create` 完全崩溃（NOT NULL constraint） | [#2804](https://github.com/qwibitai/nanoclaw/pull/2804) | **P1 — 功能阻断**：CLI 创建群组命令完全不可用 | ⏳ 待合并 |
| Claude OAuth token PTY 捕获解析失败 | [#2796？ / #2805](https://github.com/qwibitai/nanoclaw/pull/2805) | **P1 — 功能阻断**：sbx 环境下 setup-token 输出被 PTY 换行包裹导致 token 无法解析 | ⏳ 待合并 |
| 卡住容器的 outbound.db journal 残留 | [#2750](https://github.com/qwibitai/nanoclaw/pull/2750) | **P1 — 稳定性**：SIGKILL 后 journal 未清理导致读失败 | ⏳ 待合并（已开启5天） |

### P2 — 中

| 问题 | Issue/PR | 严重程度 | Fix 状态 |
|---|---|---|---|
| socket 客户端无超时 & 无响应大小限制导致永久挂起 | [#2802](https://github.com/qwibitai/nanoclaw/pull/2802) | **P2 — 可靠性**：host 不响应时 promise 永不 resolve | ⏳ 待合并 |
| `safeParseContent` 对非对象 JSON 返回错误类型 | [#2801](https://github.com/qwibitai/nanoclaw/pull/2801) | **P2 — 正确性**：原始 JSON 载荷被错误解析 | ⏳ 待合并 |
| `add-imessage` skill 在缺少 `src/channels/` 目录时失败 | [#2791](https://github.com/qwibitai/nanoclaw/issues/2791) / [#2792](https://github.com/qwibitai/nanoclaw/pull/2792) | **P2 — 用户体验**：新 clone 无法完成 iMessage 添加 | ⏳ 待合并 |

---

## 6. 功能请求与路线图信号

### 明确的功能请求

| 方向 | 信号 | 来源 |
|---|---|---|
| **Agent-to-Agent 审批流** | 逐条消息审批门控 | PR [#2793](https://github.com/qwibitai/nanoclaw/pull/2793)（待合并） |
| **CLI Dashboard** | `/add-clidash` 只读仪表盘 skill | PR [#2795](https://github.com/qwibitai/nanoclaw/pull/2795)（待合并） |
| **LLM 后端扩展** | Atlas Cloud 作为 OpenAI 兼容后端 | PR [#2717](https://github.com/qwibitai/nanoclaw/pull/2717)（已开放9天，待合并） |
| **Managed Fleet 支持** | 升级绊线退出机制 | PR [#2780](https://github.com/qwibitai/nanoclaw/pull/2780)（已合并） |

### 路线图信号分析

1. **安全加固是当前最高优先级**：5个安全/稳定性 PR 同日提交，涵盖路径遍历、文件逃逸、超时控制、数据库 journal 清理。维护者应优先审查合并这些 PR。
2. **Agent 协作治理**：#2793 的审批门控表明项目正在从"agent 自由通信"向"可控协作"演进，这与企业级部署需求高度吻合。
3. **文档质量提升**：4个 skill 文档修复 PR 表明社区正在系统性地改善新用户引导体验，这是项目成熟度提升的标志。
4. **LLM 后端多元化**：Atlas Cloud 支持（#2717）延续了项目对多 LLM 后端兼容的开放态度。

---

## 7. 用户反馈摘要

### 痛点

- **"一个坏 session 拖垮全部 agent"**（#2796）：多 agent 用户最担心的是级联故障。修复已合并，但说明此前架构中错误隔离不足。
- **"setup 文档只有10行，遇到错误不知道怎么办"**（#2789）：新用户上手门槛高，`bash nanoclaw.sh` 失败后缺乏恢复指导。PR #2790 正在扩展为完整指南。
- **"端口号只在故障排查中出现，前面完全没提"**（#2787）：文档结构问题——关键信息（端口 10254）被埋在 Troubleshooting 末尾，用户无法提前规划。
- **"managed fleet 升级后直接拒绝启动"**（v2.1.0 BREAKING）：固定镜像部署场景下，升级绊线导致服务不可用。已通过 #2780 提供退出机制。
- **"managed fleet 升级后 LLM 认证全部失败"**（v2.1.17 回归）：环境变量认证路径被意外移除，fleet 用户首当其冲。已通过 #2794 修复。

### 满意信号

- mashkovtsevlx 在报告 #2796 的同一天即提交修复 PR 并合并，说明社区响应速度极快。
- specterslient95-lgtm 一次性发现并修复了4个文档问题，说明社区参与度高且注重细节。

### 使用场景

- **Managed fleet / immutable image 部署**：多个 Issue/PR 涉及此场景（#2780、#2794），说明 NanoClaw 已被用于生产级固定镜像部署。
- **多 agent 协作**：#2793、#2796 均涉及多 agent 场景，agent-to-agent 通信是核心使用模式。
- **iMessage 集成**：#2791 涉及 iMessage channel 添加，说明移动端消息通道是用户关心的集成点。

---

## 8. 待处理积压

### 需优先审查的安全 PR（建议今日处理）

| PR | 等待时间 | 紧急度 | 说明 |
|---|---|---|---|
| [#2799](https://github.com/qwibitai/nanoclaw/pull/2799) — CVE-2026-29611 文件读取逃逸 | 1天 | 🔴 **紧急** | 安全漏洞，prompt injection 可读取任意文件 |
| [#2800](https://github.com/qwibitai/nanoclaw/pull/2800) — CWE-22 路径遍历 | 1天 | 🔴 **紧急** | 安全漏洞，可逃逸 GROUPS_DIR |
| [#2804](https://github.com/qwibitai/nanoclaw/pull/2804) — messaging-groups create 崩溃 | 1天 | 🟠 **高** | CLI 功能完全不可用 |

### 长期未响应的 PR

| PR | 等待时间 | 说明 |
|---|---|---|
| [#2750](https://github.com/qwibitai/nanoclaw/pull/2750) — recover stale outbound.db journals | **6天** | 修复 #2516 和 #2640，涉及容器 SIGKILL 后的数据库恢复，影响稳定性 |
| [#2717](https://github.com/qwibitai/nanoclaw/pull/2717) — Atlas Cloud LLM backend docs | **9天** | 纯文档 PR，低风险，应可快速合并 |

### 积压 Issue（无 PR）

当前所有 4 个开放 Issue（#2785、#2787、#2789、#2791）均已有对应修复 PR 在途，**无孤立积压 Issue**。Issue #2796 已关闭。

---

> **日报总结：** NanoClaw 今日处于"发布-修复-加固"的高强度节奏中。两个 BREAKING 变更的 rollup 发布后迅速暴露了两个 P0 回归（认证失败、升级绊线），均在当日修复。当前最大风险是 **16 个待合并 PR 的审查积压**，其中至少 2 个安全漏洞修复（#2799、#2800）应被优先处理。项目整体健康度良好——社区活跃、响应迅速、安全审计正在推进，但审查带宽需要跟上贡献速度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-18

---

## 1. 今日速览

NullClaw 今日活跃度**偏低**，处于典型的维护期节奏。过去 24 小时内共产生 **3 条 Issue 更新**（均为已存续较长的存量 Issue 被重新激活）和 **1 条新 PR**，无新版本发布。项目整体无破坏性变更，唯一的 PR 聚焦于 CLI 交互体验修复，属于"小步快跑"式的稳定性打磨。社区参与度有限，新增 👍 反应为零，说明当前议题尚未引发广泛共鸣。

---

## 2. 版本发布

**无新版本发布。** 本节省略。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，项目功能版图未发生实质性推进。

唯一开放的 PR #960 尚待审查合并（详见下方 Bug 与稳定性节），若通过将直接解决一个已存续约 2 个月的 CLI 交互缺陷。整体而言，项目今日**向前推进幅度极小**，处于积压消化阶段。

---

## 4. 社区热点

今日更新的 3 条 Issue 均为**存量 Issue 被重新评论激活**，而非全新报告。按讨论热度排列：

| 排名 | Issue | 评论数 | 核心诉求 |
|------|-------|--------|----------|
| 1 | [#915 — scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915) | 2 | 调度器在 Telegram 和 CLI 渠道均报未授权错误，用户已确认 LLM 推理和工具调用正常，问题被隔离在调度模块 |
| 2 | [#865 — CLI arrow key control characters](https://github.com/nullclaw/nullclaw/issues/865) | 2 | CLI 方向键输出乱码（控制字符），破坏命令行历史导航和光标移动 |
| 3 | [#861 — Web UI on headless VPS](https://github.com/nullclaw/nullclaw/issues/861) | 1 | 用户请求用通俗语言解释如何在无头服务器上通过隧道暴露 Web UI |

**分析：** 三条 Issue 分别指向**调度器鉴权**、**CLI 终端兼容性**和**部署文档可读性**三个不同维度。其中 #915 和 #865 均有 2 条评论，说明已有社区成员尝试参与排查或复现。#861 反映的是文档门槛问题——README 的技术描述对非专业用户不够友好，属于典型的"易用性债务"。

---

## 5. Bug 与稳定性

### 🔴 高优先级 — 调度器鉴权失败

- **Issue:** [#915 — scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)
- **严重程度：高** — 调度器是 NullClaw 自动化能力的核心组件，完全不可用意味着定时任务、后台编排等关键场景瘫痪。
- **环境：** Ubuntu + 同网段 Ollama（qwen3.6:27b on RTX 3090），LLM 推理和工具调用正常，问题隔离在调度器模块。
- **已有 Fix PR：** ❌ 无
- **存续时长：** 自 2026-05-15 创建至今 **34 天**未解决。

### 🟡 中优先级 — CLI 方向键乱码

- **Issue:** [#865 — CLI shows ctrl characters for arrow keys](https://github.com/nullclaw/nullclaw/issues/865)
- **严重程度：中** — 影响所有使用交互式 REPL 的用户体验，但不阻断核心功能。
- **已有 Fix PR：** ✅ **PR #960** — `fix(cli): handle arrow keys in agent REPL`，作者 vernonstinebaker，于 2026-06-17 提交。该 PR 引入了一个无分配的轻量级行编辑器，启用 POSIX 原始模式以正确处理方向键、历史导航、Home/End 等序列。
- **存续时长：** 自 2026-04-23 创建至今 **56 天**，终于有了对应修复。

### 🟢 低优先级 — 部署文档不清晰

- **Issue:** [#861 — How to enable Web UI on headless VPS?](https://github.com/nullclaw/nullclaw/issues/861)
- **严重程度：低** — 非代码缺陷，属于文档/用户体验问题。
- **已有 Fix PR：** ❌ 无
- **存续时长：** 自 2026-04-22 创建至今 **57 天**。

---

## 6. 功能请求与路线图信号

今日**无新功能请求**。三条活跃 Issue 均为 Bug 或文档问题。

从 PR #960 的信号来看，维护者（或贡献者）当前的工作重心在**CLI 交互体验的完善**——这是一个"体验债"清理信号，暗示项目可能正在为下一个稳定版本做 polish 工作，而非推进新功能。

结合 Issue #915（调度器鉴权），如果该问题被定位为配置或文档缺陷而非代码 Bug，下一版本可能会附带**调度器配置指南的补充**。

---

## 7. 用户反馈摘要

从今日活跃 Issue 中提炼的真实用户画像与痛点：

| 维度 | 观察 |
|------|------|
| **部署场景** | 用户在 Ubuntu 服务器上搭配本地 Ollama 使用，属于典型的"自建 AI 智能体"场景 |
| **渠道偏好** | Telegram 是主要交互渠道之一，调度器在该渠道的失败直接影响核心体验 |
| **技术分层** | 用户群体技术能力分化明显——#915 用户能精确定位到调度器模块，而 #861 用户需要"非行话"级别的文档 |
| **满意点** | #915 用户明确表示"LLM 推理和工具调用基本正常"，说明核心链路质量获认可 |
| **不满意点** | 调度器完全不可用、CLI 终端体验粗糙、部署文档门槛过高 |

---

## 8. 待处理积压

以下 Issue/PR 长期未获解决，建议维护者优先关注：

| 项目 | 链接 | 存续天数 | 建议行动 |
|------|------|----------|----------|
| Issue #915 — scheduler unauthorized | [链接](https://github.com/nullclaw/nullclaw/issues/915) | **34 天** | 🔴 高优。调度器核心功能失效，需排查是否为配置缺失、环境变量问题或代码 Bug。建议要求报告者提供调度器日志 |
| Issue #865 — CLI arrow keys | [链接](https://github.com/nullclaw/nullclaw/issues/865) | **56 天** | 🟡 PR #960 已就绪，建议尽快审查合并 |
| Issue #861 — Web UI 部署文档 | [链接](https://github.com/nullclaw/nullclaw/issues/861) | **57 天** | 🟢 建议补充一份"Headless VPS 快速上手"指南，降低新用户门槛 |
| PR #960 — CLI arrow key fix | [链接](https://github.com/nullclaw/nullclaw/pull/960) | **1 天** | 🟡 新 PR，建议优先审查。变更范围小（仅 CLI 行编辑器），风险低 |

---

> **项目健康度总评：** 🟡 **中等**。核心功能（LLM 推理、工具调用）稳定，但调度器模块存在高优先级未修复 Bug，CLI 体验有积压。唯一的活跃 PR 是低风险修复，合并后可将项目健康度提升至 🟢。建议维护者本周优先处理 #915 和审查 #960。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-18

---

## 1. 今日速览

IronClaw 今日处于**高活跃开发期**，过去 24 小时内 Issues 更新 48 条（新开/活跃 26 条，关闭 22 条），PR 更新 50 条（待合并 33 条，已合并/关闭 17 条），无新版本发布。项目重心明显聚焦于 **Reborn 架构的生产化推进**——包括 Projects 功能栈（5 个 stacked PR）、Agent Loop 无进度检测重构（3 段式 PR）、Bedrock 集成修复、以及大量 WebUI/UX 质量改进。安全层面有 Slack OAuth 路径的 DM 隔离加固。整体来看，核心贡献者（ilblackdragon、serrrfirat、henrypark133、sunglow666）推进节奏紧凑，但待合并 PR 积压 33 条，合并吞吐有待跟上。

---

## 2. 版本发布

**无新版本发布。**

最近一次发版为 PR #3708（已关闭），涉及 `ironclaw 0.24.0 → 0.29.1`，其中 `ironclaw_common 0.5.0` 和 `ironclaw_skills 0.4.0` 含破坏性变更。当前 main 分支仍在快速迭代中，预计下一版本将包含 Reborn Projects、Agent Loop 无进度检测、Bedrock 支持等多项重大变更。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 说明 |
|---|---|---|
| **#5052** | henrypark133 | **安全加固**：为 live（非 triggered）Slack OAuth 路径补齐 DM 隔离校验，关闭 #5009。此前仅 triggered-run 路径做了 `authorization_url` 的结构性门控，live 路径存在绕过风险。 |
| **#5022** | serrrfirat | **Agent Loop 无进度检测重构 PR3（核心）**：基于 #5000（PR2）和 #4993（PR1），实现 output-aware no-progress 检测——通过 ContentDigest 比对能力输出，判断 agent 是否陷入无进展循环。这是改善 agent 可靠性的关键基础设施。 |
| **#5000** | serrrfirat | **Agent Loop ContentDigest 管道（PR2）**：为每个已完成能力输出添加 ContentDigest，为 PR3 的核心逻辑提供数据基础。 |
| **#5035** | ilblackdragon | **WebUI 工具参数实时展示**：工具运行期间即显示参数（而非等完成后才展示），关闭 #4852。改善长工具调用的用户等待体验。 |
| **#3708** | ironclaw-ci[bot] | **Release 流程 PR**（已关闭）：ironclaw 0.24.0 → 0.29.1，含 ironclaw_common 和 ironclaw_skills 的破坏性变更。 |

### 今日新开的重要 PR（待合并）

| PR | 作者 | 说明 |
|---|---|---|
| **#5059** | rajulbhatnagar | **Bedrock 集成修复**：将 `bedrock` feature 从 `ironclaw_llm` 透传到 `ironclaw-reborn` 二进制，同时修复 Converse tool schema 拒绝顶层 combinator 的问题。关闭 #5058。 |
| **#5057** | ilblackdragon | **Reborn WebChat v2 只读文件系统查看器**：新增多挂载浏览端口，用户可在 UI 中导航 agent 的 memory store 和 home 目录。size: XL。 |
| **#5015–#5019** | ilblackdragon | **Reborn Projects 功能栈（5/5）**：从底层 crate（`ironclaw_projects`）到 composition wiring、WebChat v2 API 端点、前端页面全栈推进。引入 Project/ProjectMember/ProjectRole 一等实体，与 legacy `ironclaw_engine` Project 区分。 |
| **#5043–#5045** | abbyshekit | **NEARAI_MODEL=auto 修复系列**：#5043 让 HTTP 400 invalid-model 快速失败（不再重试 3 轮），#5045 将 `auto` 解析为实际模型（z-ai/glm-5.2）。解决桌面端因 `auto` 别名不存在导致的静默挂起。 |
| **#5041** | abbyshekit | **Headless 触发器持久化修复**：解决 `builtin.trigger_create` 因 local-dev 策略路由到 `ask_destructive` 而静默失败的问题。 |
| **#5054–#5053** | serrrfirat | **Google OAuth 刷新改进**：处理 provider 省略 refresh token 的场景，添加 consent 链接引导，刷新 staging 环境运行时凭证。 |
| **#5055** | henrypark133 | **自动化运行错误展示优化**：将红色终端错误改为黄色 "Needs attention"，修复重复 "No runs" 空状态文本。 |

### 整体进展评估

项目在 **Reborn 产品化** 方向上迈进了重要一步：Projects 功能从 0 到 1 的完整栈已提交（5 个 stacked PR），Agent Loop 可靠性基础设施（no-progress 检测）完成核心合并，Bedrock 集成打通。WebUI/UX 层面有大量 polish 工作（工具参数实时展示、自动化错误展示优化、文件系统查看器）。安全方面持续加固 Slack OAuth 路径。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 👍 | 评论 | 焦点 |
|---|---|---|---|
| **#1584** WeChat channel for IronClaw | 3 | 3 | 社区对微信渠道有明确需求，OpenClaw 已有 `@tencent-weixin/openclaw-weixin` npm 包，用户期望 IronClaw 跟进适配。关联 #3582（Port WeChat channel to Reborn ProductAdapter）。 |
| **#3026** Epic: Reborn production wiring and cutover readiness | 0 | 3 | 生产就绪度的顶层设计问题：如何构建、验证、报告已配置的生产图，并在服务缺失时阻止流量。这是 Reborn 从开发走向生产的关键里程碑。 |
| **#4764** Denying shell approval leaves tool invocation pending | 0 | 2 | 用户拒绝 shell 审批后，工具调用处于 pending 状态且无反馈。已关闭，但关联的 #5028（denied activity ids 稳定性）仍在推进。 |

### 📌 值得关注的活跃 Issues

| Issue | 标签 | 说明 |
|---|---|---|
| **#5009** | security | Slack live OAuth 路径 DM 隔离 → 已由 PR #5052 关闭 |
| **#4824** | — | `cargo-deny` CI 因 postgres crate 新 RUSTSEC 告警持续失败，阻塞所有 PR |
| **#4878** | — | 使用 IronClaw 自身提升工程生产力的战略提案，子任务 #5036（可扩展 Agent 任务服务基础设施） |
| **#5031** | bug, UX | Slack connect card 在已连接后仍可触发，且仅支持英文命令 |

---

## 5. Bug 与稳定性

### 🔴 严重 / 阻塞性问题

| Issue | 严重程度 | 状态 | Fix PR |
|---|---|---|---|
| **#4824** cargo-deny 因 RUSTSEC 告警持续失败 | 🔴 阻塞 | OPEN | 无 | 
| | 影响：main 分支最近 3 次 CI 全失败，所有开放 PR 均被阻塞。postgres crate 的 SCRAM 迭代 DoS、hstore 解码 panic、DataRow panic 三个新告警需处理。 | | |
| **#5058** Bedrock 无法从 ironclaw-reborn 二进制使用 | 🟡 高 | OPEN | **#5059** |
| | AWS Bedrock 用户完全无法使用独立二进制，feature gate 未透传 + Converse tool schema 拒绝顶层 combinator。 | | |
| **#5044** NEARAI_MODEL=auto 被 cloud-api.near.ai 拒绝 (HTTP 400) | 🟡 高 | OPEN | **#5043**, **#5045** |
| | 桌面端默认配置直接不可用，且失败会触发多层重试导致长时间静默挂起。 | | |

### 🟡 中等优先级 Bug

| Issue | 说明 | 状态 | Fix PR |
|---|---|---|---|
| **#3729** tool_install 调用被拒绝后刷新页面显示为成功 | 状态显示不一致，❌ 变 ✅ 但内容仍为 denied | OPEN | 无 |
| **#4961** "Working" indicator 在 agent 完成后仍可见 | WebUI 状态机未正确清除运行指示器 | CLOSED | 已修复 |
| **#4986** 循环自动化因等待工具审批被永久阻塞 | 需要审批的自动化在无人审批时卡死 | CLOSED | 已修复 |
| **#4853** Railway/多租户环境下工具活动完成后消失 | 活动计数正确但完成后 UI 不显示 | CLOSED | 已修复 |
| **#4762** 工具工作流失败后后续消息和活动排序不一致 | 失败后的会话状态机混乱 | CLOSED | 已修复 |
| **#5007** Skills 验证错误在填写必填字段后不清除 | 前端验证状态机问题 | OPEN | 无 |
| **#5031** Slack connect card 已连接后可重复触发且仅英文 | i18n + 状态检查缺失 | OPEN | 无 |

### 🟢 已修复（今日关闭）

- **#4764** — 拒绝 shell 审批后无反馈 → 已关闭
- **#4952** — Slack auth auto-deny 遗留 stale AuthFlow 记录 → 已关闭
- **#4974** — 工具行显示重复 "..." 按钮 → 已关闭
- **#4977** — 审批拒绝工具活动可见性和排序 → 已关闭
- **#4983** — 移除 NEAR AI tool-message 展平兼容路径 → 已关闭
- **#5004** — 自动化失败摘要卡片不可操作 → 已关闭
- **#4988** — 最近运行可视化难以理解 → 已关闭
- **#4980** — 自动化空状态无创建引导 → 已关闭

---

## 6. 功能请求与路线图信号

### 新功能需求

| Issue | 方向 | 信号强度 | 判断 |
|---|---|---|---|
| **#4878** 提升 IronClaw 工程生产力 | AI-native 工程工作流 | 🔵 战略级 | 已有子任务 #5036 跟进，方向明确 |
| **#5036** 可扩展 Agent 任务服务基础设施 | 自动化编码/审查/CI 修复 | 🔵 战略级 | 与 #4878 关联，已有实现方向 |
| **#1584 / #3582** WeChat/Reborn ProductAdapter 渠道 | 渠道扩展 | 🟡 中 | #3582 有 porting guide，但无活跃 PR |
| **#5057** Agent 文件系统查看器 | WebUI 功能 | 🟢 已有 PR | PR 今日提交，size XL，预计近期合并 |
| **#5015–#5019** Reborn Projects | 核心功能 | 🟢 已有 PR | 5 个 stacked PR 全已提交 |

### 路线图信号判断

- **Reborn Projects** 将是下一版本的核心新特性（5 层 stacked PR 已就绪，等待逐层合并）。
- **Agent Loop 可靠性**（no-progress 检测）是持续投入方向，PR1–PR3 已完成核心合并。
- **Bedrock 支持** 正在补齐（#5059），AWS 用户群体有明确需求。
- **WeChat 渠道** 有社区需求但尚无活跃开发，可能排在下下个版本。
- **cargo-deny CI 修复** 虽非功能需求，但已阻塞所有 PR 合并，需优先处理。

---

## 7. 用户反馈摘要

### 痛点

1. **审批流体验差**：多个 Issue（#4764、#4986、#4977）集中反映工具审批拒绝后的 UX 问题——无反馈、状态不一致、活动排序混乱。虽然今日已关闭多个相关 Issue，但 #5028（denied activity ids 稳定性）仍在跟进，说明根本问题尚未完全解决。

2. **WebUI 状态机不可靠**：Working indicator 残留（#4961）、tool_install 状态刷新后翻转（#3729）、活动完成后消失（#4853）——用户无法信任 UI 显示的状态。

3. **自动化可观测性不足**：失败摘要卡片不可操作（#5004）、运行历史仅用彩色点表示且无图例（#4988）、空状态无创建引导（#4980）——用户无法有效管理和调试自动化。

4. **配置陷阱**：`NEARAI_MODEL=auto` 被桌面端默认使用但被云端拒绝（#5044），且失败时静默重试数分钟，用户完全不知道发生了什么。

5. **多语言/国际化**：Slack connect card 仅响应英文命令（#5031），中文用户无法使用。

### 满意点

- 核心团队对 UX 问题的响应速度较快，今日关闭了 8 个 WebUI/UX 相关 Issue。
- 工具参数实时展示（#5035）等 polish 工作显示团队在改善日常使用体验。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue | 创建日期 | 最后更新 | 说明 |
|---|---|---|---|
| **#4824** cargo-deny CI 失败 | 06-12 | 06-17 | 已 6 天，阻塞所有 PR 合并，需优先处理 |
| **#3729** tool_install 状态刷新翻转 | 05-17 | 06-17 | 已 1 个月，数据一致性问题 |
| **#4191** WeCom Channel Validation Findings | 05-28 | 06-17 | 已 3 周，v0.29.0 staging 验证发现的问题 |
| **#4115** Channel Removal Flow UI Issues | 05-27 | 06-17 | 已 3 周，删除确认模态框按钮不可见 |
| **#3582** Port WeChat to Reborn ProductAdapter | 05-13 | 06-17 | 已 1 个月+，有 porting guide 但无活跃开发 |

### 📦 待合并 PR 积压

当前 **33 个 PR 待合并**，其中 stacked PRs（#5015–#5019 Projects 栈、#4993→#5000→#5022 no-progress 栈）需要按序合并。建议维护者：

1. **优先处理 #4824**（cargo-deny 修复），解除 CI 阻塞。
2. **推进 Projects 栈的逐层合并**（#5015 → #5016 → #5017 → #5018 → #5019）。
3. **合并 #5059**（Bedrock 修复），解锁 AWS 用户。
4. **合并 #5043/#5045**（NEARAI_MODEL=auto 修复），解决桌面端默认配置不可用问题。

---

*数据来源：GitHub nearai/ironclaw | 统计时间：2026-06-18 | 生成：OWL*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-06-18 | 数据来源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

过去24小时内，LobsterAI 项目共合并/关闭 **13 个 PR**，无新开 Issue，无待合并 PR，整体处于**高频迭代、快速收尾**的节奏中。项目于 6 月 15 日发布了 **LobsterAI 2026.6.15** 新版本，涵盖 Computer Use、实时 ASR 语音输入、上下文压缩连续性等多项重要功能。核心贡献者 liuzhq1986 表现突出，独自完成了 10 个以上 PR 的合并，覆盖 Cowork 模块的稳定性修复、模型选择逻辑、Gateway 内存管理等多个关键领域。项目目前无活跃 Issue，社区反馈通道相对安静，维护者响应效率较高。

---

## 2. 版本发布

### LobsterAI 2026.6.15（2026-06-15）

**主要更新：**

- **feat: add Computer Use** — 新增 Computer Use 能力，扩展了 AI 智能体的操作边界，使其能够直接操控桌面/浏览器环境。（[PR #2143](https://github.com/netease-youdao/LobsterAI/pull/2143)）
- **feat(cowork): add realtime ASR voice input** — Cowork 模块新增实时 ASR 语音输入功能，支持实时语音流转文本输入。（[PR #2148](https://github.com/netease-youdao/LobsterAI/pull/2148)）
- **feat(cowork): improve post-compaction context continuity** — 改进上下文压缩后的连续性，确保 OpenClaw 压缩聊天历史后 Agent 能更可靠地继续任务。（[PR #2145](https://github.com/netease-youdao/LobsterAI/pull/2145)）

**迁移注意事项：**
- 新增 Computer Use 功能可能需要额外的系统权限配置，建议用户查阅最新文档。
- 实时 ASR 语音输入依赖音频设备权限，首次使用时需授权麦克风访问。
- 上下文压缩逻辑的变更对现有会话无破坏性影响，但新建会话将获得更好的长对话体验。

---

## 3. 项目进展

今日合并/关闭的 13 个 PR 可按主题归类为以下几个方向：

### 🔧 Cowork 模块稳定性（核心重点，占比最高）

| PR | 内容 | 状态 |
|---|---|---|
| [#2174](https://github.com/netease-youdao/LobsterAI/pull/2174) | 修复滚动到底部位置对齐问题，清理会话切换和卸载时的 settle 定时器 | ✅ 已合并 |
| [#2162](https://github.com/netease-youdao/LobsterAI/pull/2162) | 解决语音输入合并冲突，保留实时 ASR 流程同时保护草稿所有权和回调守卫 | ✅ 已合并 |
| [#2153](https://github.com/netease-youdao/LobsterAI/pull/2153) | 修复同名包模型选择被覆盖的问题，增加模型选择回归测试 | ✅ 已合并 |
| [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154) | 修复手动停止流式回复后模型元数据丢失的问题 | ✅ 已合并 |
| [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147) | 防止启动阶段被用户取消的 turn 仍发送消息，修复竞态条件 | ✅ 已合并 |
| [#2173](https://github.com/netease-youdao/LobsterAI/pull/2173) | 修复用户消息气泡中换行符丢失问题，以纯文本方式渲染 | ✅ 已合并 |
| [#2171](https://github.com/netease-youdao/LobsterAI/pull/2171) | 优化长会话中侧边栏导航的抖动问题，增加 rail 项 memoization | ✅ 已合并 |

### 🧠 系统架构与性能

| PR | 内容 | 状态 |
|---|---|---|
| [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) | 为 OpenClaw Gateway 进程设置 V8 堆内存上限，减少长时间多通道工作负载下的 OOM 崩溃 | ✅ 已合并 |
| [#2145](https://github.com/netease-youdao/LobsterAI/pull/2145) | 在 OpenClaw 压缩层外新增 LobsterAI 自有连续性层，提升上下文压缩后的任务延续能力 | ✅ 已合并 |

### 🔗 分享与协作

| PR | 内容 | 状态 |
|---|---|---|
| [#2172](https://github.com/netease-youdao/LobsterAI/pull/2172) | 支持恢复因开启数量上限而被关闭的 HTML 分享，区分不同关闭原因并调整提示 | ✅ 已合并 |

### 🔐 认证与基础设施

| PR | 内容 | 状态 |
|---|---|---|
| [#2144](https://github.com/netease-youdao/LobsterAI/pull/2144) | 更新 Portal 回退 URL 指向新域名，区分测试环境和生产环境 | ✅ 已合并 |

### 📝 文档与代码质量

| PR | 内容 | 状态 |
|---|---|---|
| [#2175](https://github.com/netease-youdao/LobsterAI/pull/2175) | 优化 README 文档 | ✅ 已合并 |
| [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) | 修复长模态标题溢出问题，截断显示并添加 hover tooltip | ✅ 已合并（stale PR 清理） |

**整体评估：** 项目在 Cowork 模块的稳定性和用户体验上取得了显著进展，多个长期存在的交互问题（滚动对齐、语音输入冲突、流式停止、模型选择覆盖等）在本轮集中解决。同时，Computer Use 和实时 ASR 的加入标志着项目正在从纯对话式 AI 向多模态、多通道智能体方向快速演进。

---

## 4. 社区热点

今日无新开 Issue，PR 评论数据未记录（均显示 `undefined`），因此无法按评论活跃度排序。以下按**技术影响范围**列出最值得关注的 PR：

- **[#2143 — feat: add Computer Use](https://github.com/netease-youdao/LobsterAI/pull/2143)**：这是本次版本最重磅的新功能，标志着 LobsterAI 从对话助手向桌面/浏览器自动化智能体的跨越，具有路线图级别的意义。
- **[#2148 — feat(cowork): add realtime ASR voice input](https://github.com/netease-youdao/LobsterAI/pull/2148)**：语音输入是用户交互体验的重大升级，尤其对移动端和无障碍场景意义重大。
- **[#2149 — fix(openclaw): raise gateway heap limit](https://github.com/netease-youdao/LobsterAI/pull/2149)**：解决 OOM 崩溃问题，直接影响生产环境稳定性，是基础设施层面的关键修复。

---

## 5. Bug 与稳定性

按严重程度排列今日修复的 Bug：

| 严重程度 | 问题描述 | PR | 状态 |
|---|---|---|---|
| 🔴 高 | OpenClaw Gateway 长时间多通道运行 OOM 崩溃 | [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) | ✅ 已修复 |
| 🔴 高 | 启动阶段用户取消后仍发送消息（竞态条件） | [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147) | ✅ 已修复 |
| 🟡 中 | 手动停止流式回复后模型元数据丢失 | [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154) | ✅ 已修复 |
| 🟡 中 | 同名包模型选择被覆盖 | [#2153](https://github.com/netease-youdao/LobsterAI/pull/2153) | ✅ 已修复 |
| 🟡 中 | 语音输入合并冲突导致草稿所有权和回调守卫丢失 | [#2162](https://github.com/netease-youdao/LobsterAI/pull/2162) | ✅ 已修复 |
| 🟢 低 | 用户消息气泡换行符丢失 | [#2173](https://github.com/netease-youdao/LobsterAI/pull/2173) | ✅ 已修复 |
| 🟢 低 | 长会话侧边栏导航抖动 | [#2171](https://github.com/netease-youdao/LobsterAI/pull/2171) | ✅ 已修复 |
| 🟢 低 | 滚动到底部位置不对齐 | [#2174](https://github.com/netease-youdao/LobsterAI/pull/2174) | ✅ 已修复 |
| 🟢 低 | 长模态标题溢出（Issue #1435） | [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) | ✅ 已修复 |

**总结：** 今日所有报告的 Bug 均已有对应修复 PR 并已全部合并，**无遗留未修复的 Bug**。项目处于较高的健康状态。

---

## 6. 功能请求与路线图信号

基于今日 PR 和版本发布，可识别以下路线图方向：

1. **Computer Use（桌面/浏览器自动化）** — 已在 2026.6.15 版本中落地（[PR #2143](https://github.com/netease-youdao/LobsterAI/pull/2143)），这是从对话式 AI 向全能型智能体转型的核心能力，预计后续会有更多相关 PR 跟进。
2. **实时语音交互** — ASR 语音输入已上线（[PR #2148](https://github.com/netease-youdao/LobsterAI/pull/2148)），语音输出（TTS）可能是下一步方向。
3. **上下文管理优化** — 后压缩上下文连续性层（[PR #2145](https://github.com/netease-youdao/LobsterAI/pull/2145)）表明团队正在系统性解决长对话场景下的记忆和任务延续问题。
4. **分享与协作体验** — HTML 分享恢复功能（[PR #2172](https://github.com/netease-youdao/LobsterAI/pull/2172)）显示团队在加强 Artifact 分享的产品化能力。
5. **稳定性与性能** — Gateway 堆内存管理（[PR #2149](https://github.com/netease-youdao/LobsterAI/pull/2149)）和多项竞态条件修复表明团队正在夯实基础设施，为上层功能扩展打基础。

---

## 7. 用户反馈摘要

今日无新开 Issue，但可从已关闭的 PR 摘要中提炼以下用户痛点和使用场景：

- **长会话体验**：多个 PR 聚焦于长会话场景（侧边栏导航抖动、滚动对齐、上下文压缩连续性），说明用户正在将 LobsterAI 用于**长时间、多轮次的复杂任务**，对会话稳定性有较高要求。
- **语音输入需求**：实时 ASR 功能的快速开发和合并（含冲突修复），说明语音交互是用户**呼声较高的功能方向**。
- **分享功能使用**：HTML 分享数量上限及恢复逻辑的优化，说明 Artifact 分享是用户**高频使用的协作功能**。
- **模型管理**：同名包模型选择被覆盖的修复，说明用户在**多模型配置**场景下有较深的使用。
- **长标题溢出**（Issue #1435）：用户自定义 Agent 名称较长，说明用户正在**大量创建自定义 Agent**，对 UI 适配性有要求。

**整体满意度信号：** 今日无新的负面反馈 Issue，且多个历史问题得到快速修复，社区情绪预计偏正面。

---

## 8. 待处理积压

- **无活跃 Issue** — 当前 Issue 列表为空，无待处理的用户报告。
- **无待合并 PR** — 所有 13 个 PR 均已合并或关闭，无积压。
- **Stale PR #1463**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1463)）— 该 PR 创建于 2026-04-04，标记为 stale，但已于今日被合并关闭，无需额外关注。

**结论：** 项目当前积压极低，维护者响应及时，项目健康度良好。

---

*日报由 OWL 自动生成 | 数据截至 2026-06-18*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-06-18

---

## 1. 今日速览

过去24小时内 Moltis 项目以低频但聚焦的方式推进：共产生 **3 个新 Issue**、**1 个 Issue 关闭**、**1 个新 PR 待审**，无新版本发布。社区活跃度偏低，属于典型的"维护期"节奏——多数贡献集中在语音交互和 WebUI 的精细化打磨上，未出现大规模功能迭代或紧急安全修复。整体项目健康状况稳定，维护者响应较快（1 个 Bug 在报告当日即关闭处理）。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日并无合并或关闭的 PR。唯一活跃的 PR **#1130** 处于待审状态：

- **[PR #1130] feat: make webui rpc timeout configurable**
  [github.com/moltis-org/moltis/pull/1130](https://github.com/moltis-org/moltis/pull/1130)
  - 作者 khimaros，将 WebUI 的 RPC 超时时间改为可配置项，用于修复 Issue #1127 中反映的超时僵死问题。
  - PR 描述简洁直白（"written on the tin"），属于典型的单点工程改善型提交。若合并成功将提升 WebUI 在高延迟或不稳定网络环境下的容错能力。

---

## 4. 社区热点

**🏆 讨论最活跃 Issue（3 条评论）：**

**#1126 [OPEN] [enhancement] Configurable TTS output format**
[github.com/moltis-org/moltis/issues/1126](https://github.com/moltis-org/moltis/issues/1126)

- 用户 khimaros 请求允许配置 TTS 输出格式，目前已有 3 条评论参与讨论，是整个报告期内互动最密集的话题。
- **背后诉求**：用户需要对语音合成的输出格式有细粒度控制，可能与下游管道集成（如不支持默认音频编码格式的硬件设备或多平台适配）相关。这是一个**"功能门控"型需求**——下游集成灵活性受限于当前硬编码的输出格式。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR |
|---------|-------|------|--------|
| 🔴 高 | **#1129** Live mode 缺乏回声消除导致 Agent 自触发循环 | OPEN，无评论 | 暂无 |
| 🟡 中 | **#1128** Self-hosted whisper.cpp 转录错误 | **CLOSED**，1 条评论 | 无明确 PR（问题已关闭，可能被判定为配置问题或用户环境 issue） |
| 🟡 中 | **#1127**（被引用）WebUI RPC 超时僵死 | — | **PR #1130 待审**（直接对应） |

**关键分析：**
- **#1129** 是最值得关注的未解决 Bug：在实时会话模式下缺乏回声消除（echo cancellation），Agent 会将自己的语音输出重新识别为输入，形成**反馈循环**。这在语音 AI Agent 场景中是严重的产品可用性问题，直接影响 live mode 的核心体验。目前零评论、无 PR，亟需排期跟进。
- **#1128** 当日即关闭，从上下文判断可能是用户自环境中 whisper.cpp 的配置/兼容性问题，维护者大概率判定为"无效报告"或通过评论指导解决。

---

## 6. 功能请求与路线图信号

| Issue | 方向 | 成熟度评估 |
|-------|------|-----------|
| **#1126** — 可配置 TTS 输出格式 | 语音管线配置化 | 🟡 中等成熟，已有讨论推进 |
| **#1131** — 一键复制/导出 Markdown | 用户体验/内容导出 | 🟢 低成熟度（zero engagement），但需求清晰简单，实现成本低 |

**路线图判断：**
- **#1131（Markdown 导出）** 是一个低门槛高价值的功能：代码逻辑简单、不触及核心架构、用户收益直观。这类"quick win"型 features 通常在社区活跃度和评审周期允许时快速合入。
- **#1126** 需要对语音管线做配置架构改造，涉及程度更深，可能排在下一个 minor 版本中。

---

## 7. 用户反馈摘要

从本周期 Issue 的提交模式中可以提炼出以下用户画像和痛点：

- **高级自部署用户为主**：报告者 khimaros（提交 3/4 的 Issue + 1 个 PR）和 vvuk 均表现出深入的嵌入式/自托管部署经验，使用 self-hosted whisper.cpp、精细调整 WebUI RPC 超时——这不是普通终端用户，而是**系统集成者和高级部署者**。
- **核心痛点集中在语音交互链路**：TTS 格式不可配（#1126）、回声消除缺失导致自触发（#1129）、whisper 转录异常（#1128）——三者全部属于 Audio Agent 语音管道的不同环节，说明 Moltis 作为 AI Agent 框架的**语音模块是目前用户摩擦最高的子系统**。
- **内容消费体验待完善**：Markdown 导出请求（#1131）间接说明用户将 Moltis 输出作为文档/备注来源，但现有"复制粘贴"流程不够优雅。

---

## 8. 待处理积压提醒

以下为本周报告周期内值得维护者关注的积压项：

| 积压项 | 建议优先级 | 说明 |
|--------|-----------|------|
| **#1129** 回声消除缺失 | 🔴 **P0 — 尽快回复** | 零评论、零 triage，严重影响 live mode 可用性 |
| **#1130** WebUI RPC 超时 PR 待审 | 🟡 **P1 — 建议本周审合** | 改动范围小、目标明确（fixing #1127），若 CI 通过应优先合入 |
| **#1126** TTS 格式配置化 | 🟢 **P2 — 纳入下一版本讨论** | 已有讨论积累，适合在下个 milestone 中设计 API |

> *注：本报告仅覆盖 2026-06-18 活跃窗口内的数据。长期积压的 Issues/PRs（数十天前创建且无响应的完整列表）未在此列举，建议维护者另行通过 label 过滤器进行全局积压清理。*

---

*报告生成时间：2026-06-18 | 数据来源：Moltis GitHub 仓库 (moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-18

---

## 1. 今日速览

CoPaw 今日处于**高活跃维护期**，过去 24 小时内 Issues 更新 45 条（新开/活跃 26 条，关闭 19 条），PR 更新 50 条（待合并 16 条，已合并/关闭 34 条），并正式发布了 **v1.1.12** 稳定版和 **v2.0.0a1** 里程碑版本。项目正处于 1.x 稳定版收尾与 2.0 架构迁移并行推进的关键阶段。社区反馈密集，Bug 报告集中在上下文压缩、向量索引持久化、桌面端崩溃等稳定性议题上，维护团队响应速度较快，当日即有多项关键修复合入。

---

## 2. 版本发布

### v1.1.12（稳定版）[#5280](https://github.com/agentscope-ai/QwenPaw/pull/5280)

**主要更新：**

- **Console — Models 页面重构**：Provider 聚合展示、统一卡片 UI、布局全面改版 [#5203](https://github.com/agentscope-ai/QwenPaw/pull/5203)
- **Console — 简洁模式（Simple Mode）**：扁平导航 + 会话列表按更新时间排序 [#5222](https://github.com/agentscope-ai/QwenPaw/pull/5222)
- **性能优化**：移除 Agent 配置中不必要的深拷贝操作 [#5240](https://github.com/agentscope-ai/QwenPaw/pull/5240)
- **Console — 会话标题过滤**：支持按标题搜索过滤会话 [#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178)
- **XiaoYi 频道重构**：单 WebSocket 改为双连接架构（主域名 + 备份 IP），对齐官方 A2A 协议 [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274)
- **桌面端修复**：修复 Tauri 侧载中插件依赖安装导致的崩溃循环 [#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260)
- **ChromaDB 运行时探针**：新增异步子进程探针，避免 Rust 绑定 SIGSEGV 直接杀死进程 [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271)
- **备份修复**：跳过不可读文件而非整体备份失败 [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041)

### v2.0.0a1（Alpha 里程碑）[#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281)

- 版本号从 `1.1.10b1` 直接跳至 `2.0.0a1`，标志着 **AgentScope 2.0 后端迁移**正式进入 Alpha 阶段。
- **破坏性变更预警**：后端依赖将从 `agentscope==1.0.20` + `agentscope-runtime==1.1.6` 升级至 AgentScope 2.0，架构、API 和运行时模型均将变更 [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)。

**迁移注意事项：**
- 插件开发者需关注 AgentScope 2.0 API 变更，提前适配。
- 2.0.0a1 为 Alpha 版本，不建议生产环境使用。
- 配置迁移工具已在开发中：`qwenpaw migrate openclaw` CLI 子命令 [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276)。

---

## 3. 项目进展

今日合入/关闭的 34 个 PR 推进了以下关键方向：

| 方向 | 代表 PR | 说明 |
|------|---------|------|
| **稳定性修复** | [#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260) | Tauri 桌面端插件依赖安装崩溃循环修复 |
| **稳定性修复** | [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) | ChromaDB Rust 绑定 SIGSEGV 异步探针保护 |
| **频道修复** | [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) | XiaoYi 双 WebSocket 连接重构，修复频道不可用 |
| **备份可靠性** | [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) | 备份跳过不可读文件，避免整体失败 |
| **定时任务** | [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) | 默认 `misfire_grace_seconds` 从 60s 提升至 3600s |
| **上下文压缩** | [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) | `agent.reply()` 增加超时保护，防止进程冻结 |
| **会话管理** | [#5026](https://github.com/agentscope-ai/QwenPaw/pull/5026) | 修复 `user_id == session_id` 时文件名重复问题 |
| **工具输出渲染** | [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) | 修复 `show_tool_details` 关闭时工具输出附件丢失 |
| **桌面端口配置** | [#5272](https://github.com/agentscope-ai/QwenPaw/pull/5272) | 支持通过环境变量固定桌面版后端端口 |
| **版本发布** | [#5280](https://github.com/agentscope-ai/QwenPaw/pull/5280) | v1.1.12 稳定版发布 |
| **架构升级** | [#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281) | v2.0.0a1 Alpha 里程碑发布 |

**整体评估**：项目在 1.x 稳定版线上持续打磨稳定性（崩溃、备份、频道），同时 2.0 架构迁移已进入 Alpha 阶段，双线并行推进节奏健康。

---

## 4. 社区热点

### 🔥 上下文压缩导致进程冻结 [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)（16 条评论）

子 Agent 触发上下文压缩时，QwenPaw 进程完全冻结无响应，只能手动重启。这是今日评论数最多的 Bug 报告，已有 PR [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) 尝试通过增加超时保护来修复，但尚未合入。

**用户诉求**：上下文压缩是长对话场景的核心功能，进程级冻结不可接受，需要优雅的降级或超时恢复机制。

### 🔥 Agent 创建的定时任务无法触发 [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)（12 条评论）

Agent 在会话中创建定时任务后，任务到达设定时间点无法自动触发执行，且不支持手动编辑。用户反馈影响定时任务功能正常使用。

**用户诉求**：定时任务应由 Agent 可靠创建和执行，当前行为与用户预期严重不符。

### 🔥 AgentScope 2.0 后端迁移 [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)（11 条评论，👍2）

AgentScope 2.0 已正式发布，QwenPaw 计划从 1.x 升级至 2.0。这是架构级变更，涉及 API、运行时模型的全面替换。

**用户诉求**：希望了解迁移时间表、破坏性变更清单、插件兼容性保障。

### 📌 附件下载 404 错误 [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)（7 条评论）

v1.1.11.post2 中纯文本文件（txt/md/py）下载正常，但 docx/pdf 等非文本文件点击下载报错 404。

**用户诉求**：文件下载是基础功能，需覆盖所有文件类型。

### 📌 上下文压缩保留缺少按条数保留机制 [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)（6 条评论）

当 Agent 人设文件 token 数大于保留阈值时，压缩可能将上下文完全压缩为 0，导致模型无法继续任务。

**用户诉求**：需要按条数保留或排除人设文件的选项，防止关键信息丢失。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 Critical — 进程级崩溃/冻结

| 问题 | Issue | 状态 | Fix PR |
|------|-------|------|--------|
| 子 Agent 上下文压缩导致进程冻结 | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | OPEN | [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242)（待审） |
| macOS ChromaDB Rust 绑定 SIGSEGV 崩溃循环 | [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243) | CLOSED | [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271)（已合入） |
| macOS Tauri 桌面端崩溃循环 | [#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209) | CLOSED | — |
| Tauri 插件依赖安装崩溃循环 | [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) | CLOSED | [#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260)（已合入） |

### 🟠 High — 功能不可用

| 问题 | Issue | 状态 | Fix PR |
|------|-------|------|--------|
| Agent 创建的定时任务无法触发 | [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | OPEN | — |
| MCP/ACP 配置接口保存成功但未持久化 | [#5266](https://github.com/agentscope-ai/QwenPaw/issues/5266) | CLOSED | — |
| 附件下载 404（docx/pdf） | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | OPEN | — |
| 上下文压缩保留为 0 | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | OPEN | — |
| 对话思考逻辑死循环 | [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) | OPEN | — |
| 执行过程死循环无法退出 | [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | OPEN | — |

### 🟡 Medium — 功能异常但有 workaround

| 问题 | Issue | 状态 | Fix PR |
|------|-------|------|--------|
| 群聊回复错误发送到私聊 | [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | OPEN | — |
| Windows 向量索引无法持久化 | [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | OPEN | — |
| 升级后禁用技能被重置 | [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | OPEN | — |
| `send_file_to_user` 不生效 | [#5258](https://github.com/agentscope-ai/QwenPaw/issues/5258) | CLOSED | — |
| Assistant message count mismatch | [#5208](https://github.com/agentscope-ai/QwenPaw/issues/5208) | OPEN | — |
| 路径解析不一致 `@appshare` vs `@apps/share` | [#5207](https://github.com/agentscope-ai/QwenPaw/issues/5207) | CLOSED | — |
| ChromaDB 探针集合名非法 | [#5284](https://github.com/agentscope-ai/QwenPaw/issues/5284) | OPEN | — |

### 🔵 Low — UI/体验问题

| 问题 | Issue | 状态 | Fix PR |
|------|-------|------|--------|
| 钉钉频道 uv 安装后不起作用 | [#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237) | OPEN | — |
| 打包后白屏 | [#5165](https://github.com/agentscope-ai/QwenPaw/issues/5165) | OPEN | — |
| 备份 PermissionError | [#4916](https://github.com/agentscope-ai/QwenPaw/issues/4916) | CLOSED | [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041)（已合入） |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 判断 |
|----------|-------|---------|------|
| OpenClaw 配置迁移工具 | [#5254](https://github.com/agentscope-ai/QwenPaw/issues/5254) | [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276)（OPEN） | ✅ 开发中，可能纳入 v1.1.x |
| `cron update` CLI 命令 | [#4939](https://github.com/agentscope-ai/QwenPaw/issues/4939) | [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210)（OPEN） | ✅ 开发中 |
| Agent 头像上传与展示 | — | [#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263)（OPEN） | ✅ 开发中 |
| UI 字体缩放 & 文件路径超链接 | [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) | — | ⏳ 待排期 |
| AgentScope tracing 初始化支持 | [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) | — | ✅ 已关闭（已合入） |
| 定时任务 misfire_grace 调大 | — | [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241)（OPEN） | ✅ 开发中 |

**路线图信号**：
- **AgentScope 2.0 迁移**是下一阶段核心里程碑，v2.0.0a1 已发布 [#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281)。
- **定时任务可靠性**是用户痛点集中领域，多个相关 PR 正在推进。
- **桌面端稳定性**（Tauri 崩溃、插件依赖）是近期修复重点。

---

## 7. 用户反馈摘要

**痛点：**
1. **上下文压缩是最大稳定性风险**：进程冻结 [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)、上下文清零 [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)、死循环 [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) 三个问题叠加，说明上下文管理模块在复杂场景下鲁棒性不足。
2. **定时任务功能信任度低**：Agent 创建的任务无法触发 [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)、不支持手动编辑，用户无法依赖该功能。
3. **升级体验差**：每次升级后禁用技能被重置 [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)，用户需要反复操作。
4. **桌面端稳定性堪忧**：macOS 崩溃循环 [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243)、[#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209)、Windows 向量索引不持久 [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259)，跨平台体验不一致。
5. **文件管理体验退化**：`send_file_to_user` 从可用变为不可用 [#5258](https://github.com/agentscope-ai/QwenPaw/issues/5258)，附件下载 404 [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)。

**满意点：**
- Console UI 持续改进（Models 页面重构、简洁模式、会话过滤），用户可见的产品体验在提升。
- 维护团队响应速度快，多个当日报告的问题当日即有修复 PR。

**使用场景：**
- 飞书/钉钉企业群聊集成（群聊回复路由问题 [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264)）
- 华为 XiaoYi 智能音箱对接 [#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911)、[#3840](https://github.com/agentscope-ai/QwenPaw/issues/3840)
- 云端部署 + Web 终端（安全报告 [#5234](https://github.com/agentscope-ai/QwenPaw/issues/5234)）
- AgentScope tracing 集成监控（Langfuse [#5127](https://github.com/agentscope-ai/QwenPaw/issues/5127)、Phoenix [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057)）

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于关键阻塞状态，建议维护者关注：

| 项目 | 链接 | 状态 | 等待天数 | 说明 |
|------|------|------|----------|------|
| AgentScope 2.0 迁移 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | OPEN | 22 天 | 架构级变更，需明确迁移计划和兼容性保障 |
| 定时任务无法触发 | [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | OPEN | 8 天 | 高关注度（12 评论），无修复 PR |
| 上下文压缩进程冻结 | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | OPEN | 2 天 | 最高评论数（16），Fix PR 待审 |
| 附件下载 404 | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | OPEN | 6 天 | 基础功能回归，无修复 PR |
| 上下文压缩保留为 0 | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | OPEN | 5 天 | 核心功能缺陷，无修复 PR |
| 对话死循环 | [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) | OPEN | 13 天 | 无修复 PR |
| 钉钉频道 uv 安装问题 | [#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237) | OPEN | 2 天 | 安装方式差异导致，需排查 |
| 打包后白屏 | [#5165](https://github.com/agentscope-ai/QwenPaw/issues/5165) | OPEN | 6 天 | 影响自定义打包用户 |
| OpenClaw 迁移工具 | [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276) | OPEN | <1 天 | 新 PR，需 review |
| `cron update` 命令 | [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | OPEN | 3 天 | 新 PR，需 review |
| 上下文压缩超时保护 | [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) | OPEN | 2 天 | 关键稳定性修复，建议优先 review |
| compaction summary schema 崩溃 | [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) | OPEN | <1 天 | 新 PR，需 review |

---

**日报生成时间**：2026-06-18  
**数据来源**：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) GitHub 仓库  
**统计窗口**：过去 24 小时

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-18

---

## 一、今日速览

ZeroClaw 今日社区活跃度维持高位：过去24小时内累计产生 **50条 Issue 更新**（新开/活跃49条、关闭1条）、**50条 PR 更新**（待合并40条、已合并/关闭10条），无新版本发布。多位核心贡献者（Audacity88、NiuBlibing、Nillth、singlerider）集中推进安全加固、Windows 平台修复、A2A 插件生态等方向，项目整体处于 v0.8.x 系列密集迭代期，多条高优先级 bugfix 与 feature 已进入评审末期，合并节奏健康。

---

## 二、版本发布

**无新版本发布。**

---

## 三、项目进展

今日共 **10 条 PR 被合并/关闭**，以下为其中影响范围最大的几项：

| PR | 状态 | 说明 |
|---|---|---|
| [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) | ✅ 已合并 | **修复 WS 聊天和 ACP 会话中 CanvasStore 线程未共享**，解决 Web UI `/canvas` 页面空白回归问题（对应 [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563)），是 P1 级别的工作流阻塞 bug |
| [#7840](https://github.com/zeroclaw-labs/zeroclaw/pull/7840) | ✅ 已合并 | **PR 系列（6/8）合并**：实现 config 中 aliased entries 的级联重命名能力，属于 v0.8.2 配置重构栈的关键一环 |
| [#7684](https://github.com/zeroclaw-labs/zeroclaw/pull/7684) | ✅ 已合并 | **ACP 层可见性修复**：history-pruner 和 turn-cancel 事件不再以明文 assistant 消息渲染，改为格式化系统事件输出 |
| [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) | 🔒 已关闭 | 上述 PR #7678 的修复使该 Issue 关闭 |

**整体评估**：bugfix（canvas-store 回归、self-test WebSocket 鉴权）与 v0.8.2 系列功能栈同步推进；一条 cascade 重构 PR 成功合入，显示 v0.8.x 配置层重构在稳步收束中。

---

## 四、社区热点

以下是今日按评论数/活跃度排列的前几条 Issue 与 PR 讨论热点：

### Top Issues

1. **[#6909 — RFC: Computer-use support for desktop screen interaction and input control](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** — 🔥 6条评论
   ZeroClaw 当前完全缺乏 GUI 交互能力。此 RFC 提出增加截图捕获 + 鼠标/键盘事件发送，对标 OpenAI Codex 和 openclaw/hermes 的 computer-use 功能。目前处于 P2/accepted 状态，尚未有对应 PR。

2. **[#2079 — [Feature]: Restore GitHub as a native channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)** — 🔥 6条评论
   用户希望 GitHub 成为一级通道（native channel），让 Agent 直接观察和响应 repo 活动（issues、PR、评论、review）。目前需要自定义 webhook 胶水代码，缺乏统一的通道接口。问题存在较久（自2026-02-27），但近期仍维持讨论热度，需求背后反映用户对 DevOps Agent 化的强烈诉求。

3. **[#6067 — Make channel reply-intent precheck configurable](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)** — 5条评论
   `classify_channel_reply_intent` 调用主路由模型导致全 Agent turn 阻塞，且无可观测性。请求支持更轻量模型、硬超时和计时日志。这是典型的性能可观测性诉求。

4. **[#6954 — RFC: Route scheduled tasks through the orchestrator message pipeline](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** — 4条评论
   当前 Cron 调度器直接向外部发送副作用，绕开了 orchestrator 消息管道，导致一系列 bug（#6037、#6105、#6648等）的根因。接受此 RFC 将重构整个定时任务的安全上下文和运行历史机制。

### Top PRs

5. **[#7842 — feat(cli): agents/providers/channels CRUD + skill-bundle cascade (#7468/#7175)](https://github.com/zeroclaw-labs/zeroclaw/pull/7842)** — XL 级 PR
   Typed delete-with-cascade 系列的第 8 片（栈尾），引入 agents/providers/channels CRUD CLI 和 skill-bundle 级联能力。合并后将大幅提升 v0.8.2 配置管理的完整度。

6. **[#7902 — fix(tools): pin http_request requests to vetted DNS addresses](https://github.com/zeroclaw-labs/zeroclaw/pull/7902)**
   SSRF 防护：为 `http_request` 添加入站工具的 resolved-IP 检查，防止 DNS 重绑定攻击。安全类 PR，risk评级高，无 author-action 阻塞。

---

## 五、Bug 与稳定性

### 已修复 / 有对应 PR

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| S1 | [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) Canvas-store 回归导致 `/canvas` 空白 | WS 聊天和 ACP 会话后 canvas 工具无法正常渲染 | ✅ [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) 已合并 |
| S2 | [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) Cron/heartbeat 发送 literal "NO_REPLY" 到频道 | 沉默指令被误转发为真实消息 | 暂无明确 fix PR |
| S2 | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) Agent 运行 Cron 时缺乏任务上下文 | status:blocked | 待 RFC #6954 落地后解决 |
| S2 | [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737) 并发审批时 attribution 被全局侧信道覆盖 | channel-global side channel 竞态 | 暂无明确 fix PR |
| S2 | [#7901](https://github.com/zeroclaw-labs/zeroclaw/pull/7901) 重复 shell 审批循环未加 bounds | 同一 shell 请求反复弹出审批提示 | 🟡 [#7901](https://github.com/zeroclaw-labs/zeroclaw/pull/7901) 待合并 |

### 仍在报告 / 待确认

| 严重程度 | Issue | 描述 |
|---|---|---|
| S2 | [#6698](https://github.com/zeroclaw-labs/zeroclaw/issues/6698) Fluent locale 文件滞后于英文源（如 `zh-CN` 缺少 `tools.ftl`） | 国际化不完整，影响非英语用户体验 |
| S2 | [#7819](https://github.com/zeroclaw-labs/zeroclaw/issues/7819) 缺失 skill 建议基于错误工具集判断 | 已提 PR 修复（[#7819](https://github.com/zeroclaw-labs/zeroclaw/pull/7819)），待合并 |

---

## 六、功能请求与路线图信号

**近期最可能被纳入下一版本（v0.8.2/v0.8.3）的信号**：

- **WASM 插件生命周期 hooks**（[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)）：让 WASM 插件通过 `PluginCapability::Hook` 订阅 Agent 生命周期事件（如 turn-complete），独立于内置 Rust hooks。处于 early 阶段，但已有明确 API 方向。

- **A2A agent 发现界面**（[#7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763)）：为 gateway 添加 A2A 发现 surface，标注 DO NOT MERGE，目标 v0.8.2。

- **v0.8.2 Skills 平台统一面**（[#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852)）：将 skills、plugins、A2A 整合为统一平台体验。目标 release。

- **v0.8.2 WASM 插件项目**（[#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)）：包括 FND-001 组件模型方向、WIT 接口文件和 WASM 插件宿主。

- **Mattermost WebSocket 监听模式**（[#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098)）：用 WebSocket 替代轮询降低延迟和 HTTP 负载，带有 needs-author-action 标签。

- **Security policy & channel config 零停机热加载**（[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)）：避免完整 daemon reload 来应用安全策略变更，P3，昨日新开。

**更长线**：Computer-use 桌面控制（#6909）、GitHub native channel（#2079）、Agent evaluation harness（#7065）尚未有具体实施 PR。

---

## 七、用户反馈摘要

从今日活跃的50条 Issue 讨论中，可提炼出以下反复出现的用户痛点和使用场景：

**🔴 痛点**
1. **Cron 上下文缺失**：多个 issue（#6105、#2128、#6954、#6510）反映 cron 任务 Agent 既没有发送任务的上下文，也无法区分是否应该回复。这是在大量真实提醒/自动汇报场景中被高频触发的体验阻塞点。
2. **Windows 平台体验差距大**：shell 宿主默认使用 `cmd.exe`（#7089）、self-update 更新在 Windows 上完全损坏（#7853），Windows 用户整体处于二等公民状态。
3. **频道竞态与 Silent 信道不健全**：审批 attribution 的 side-channel 竞争（#7737）、cron 发送 NO_REPLY（#2128）、Slack 线程中必须反复 @mention（#6055）——通道层的基础可靠性仍有明显缺口。
4. **国际化滞后**：Fluent locale 文件不完整（#6698），中文区 strings 明显缺失。

**🟢 满意信号**
- 配置快速入门验证（#6416）的需求说明用户希望更早发现问题而非运行时才报错；
- 新增成本追踪、缓存 token 计费（#7492）说明用户在生产环境中运行，需要精细化成本控制；
- 丰富的 milestone tracker 和 issue-organized PR stream 说明维护者的路线图管理获得社区接受。

---

## 八、待处理积压

以下长期存在但仍未获充分响应的 Issue/PR，建议维护者优先关注：

| 项目 | 最后活跃 | 说明 |
|---|---|---|
| **[#2079 — GitHub as native channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)** | 2026-02-27 | 超过4个月未关闭，虽近期活跃度仍高，但无对应实施 PR |
| **[#6055 — Slack 线程首次 mention 时自动 backfill 历史](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** | 2026-04-24 | 评论数较多（5），但无 PR |
| **[#6037 — Cron job 无历史消息上下文](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)** | 2026-04-25 | 已在 #6954 RFC 中被列为关联 root cause，但尚未转为实施 |
| **[#6714 — remote-markdown-link audit 误报率高](https://github.com/zeroclaw-labs/zeroclaw/issues/6714)** | 2026-05-16 | 社区 skill 审计误报率问题未解决 |
| **[#7098 — Mattermost WebSocket listener](https://github.com/zeroclaw-labs/zeroclaw/pull/7098)** | 2026-06-02 | PR 已提超过2周，带有 needs-author-action 标签，可能卡在作者头上 |
| **[#7539 — llama.cpp model router](https://github.com/zeroclaw-labs/zerocaw/issues/7539)** | 2026-06-12 | 本地模型用户的快速切换需求，无对应 PR |

---

**总结**：ZeroClaw 今日处于典型的"密集迭代中期"状态——修复性 PR（canvas-store、self-test、shell 审批、credential 脱敏）快速合入，平台级能力（WASM hooks、skills 统一面、A2A 发现）正在 PR 队列中排队。最大的社区信号是计算机使用能力（computer-use）和 GitHub 原生通道两个 high-risk RFC 仍无实施落地，而 cron/heartbeat 可靠性系列 bug 的根因修复（#6954 RFC）将是下一个架构层面的重要里程碑。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*