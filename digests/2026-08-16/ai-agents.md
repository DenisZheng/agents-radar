# OpenClaw 生态日报 2026-08-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-16 00:55 UTC

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

# OpenClaw 项目日报 2026-08-16

---

## 1. 今日速览

**整体状态**：项目处于高强度迭代期，单日 Issues 与 PRs 均达 500 条更新上限，显示社区与维护团队并行推进大量并行工作流。新版本 `v2026.8.1-beta.2` 发布，核心聚焦**安全加固（Secret egress host binding）**与**模型运行时切换能力（GPT-5.6 Ultra）**。  
**活跃度评估**：⭐⭐⭐⭐⭐（极高）— 新开/活跃 Issue 480 条、待合并 PR 445 条，且多条长周期高优先级 Issue（如 #116201、#25592、#44925）在今日仍持续获得评论跟进，说明生产环境痛点驱动的修复需求持续释放。  
**核心矛盾**：子代理完成丢失、会话状态膨胀、消息静默丢失、Windows 资源泄漏等 **P1 级稳定性缺陷** 与**功能扩展（多模态、插件 SDK、Control UI 重构）**并行推进，维护者审阅带宽面临压力。

---

## 2. 版本发布

### v2026.8.1-beta.2 — OpenClaw 2026.8.1-beta.2
**发布时间**：今日  
**核心亮点**：
| 变更 | 说明 | 影响面 |
|------|------|--------|
| **Secret egress host binding** | 将每个 shared-store secret 绑定至精确 HTTPS 目标主机（CLI、Gateway RPC、Control UI），未绑定的 sentinel 替换在明文外发前即 fail-closed | 🔒 安全边界、凭据防泄露、**破坏性变更**：现有未显式绑定 host 的 secret 将拦截外发 |
| **GPT-5.6 Ultra & runtime switching** | 新增对 GPT-5.6 Ultra 的支持，并提供运行时模型切换机制 | 🤖 模型供应商集成、多模型策略 |

**迁移注意事项**：
- 检查所有 `secretref` 配置，确保 `hostBinding` 字段已按实际调用目标填写；
- 依赖旧版 sentinel 替换行为的自动化脚本需适配 fail-closed 语义；
- 运行时切换涉及 `model` 字段动态解析，建议在 staging 环境验证 fallback 链。

🔗 [Release 详情](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.2)

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（按影响力排序）

| PR | 状态 | 核心变更 | 关联 Issue | 进度意义 |
|----|------|----------|------------|----------|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **CLOSED** | Control UI 新增插件安装策略警告审阅流程，管理员可显式 `acknowledgeInstallPolicyWarning: true` 继续安装 | 安全边界、插件生态 | ✅ 补全供应链安全最后一环，配合 #116489 形成“警告-确认-审计”闭环 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **CLOSED** | 核心安全特性：`security.installPolicy` 支持 `warn` 级别，CLI 交互强制确认目标名 | 同上 | ✅ 落地 RFC#51 认证契约，标志插件安装进入“显式授信”阶段 |
| [#119777](https://github.com/openclaw/openclaw/pull/119777) | **CLOSED** | `openclaw health` 修正上报解析后的 SQLite session store 路径 | #119755 | 🔧 运维可观测性小修，消除路径不透明导致的排查盲区 |
| [#124145](https://github.com/openclaw/openclaw/pull/124145) | **CLOSED** | Gateway 修复同一 transcript sequence 多行分页导致历史行永久丢失 | #121386, #124120 | 🐛 数据完整性修复，直接影响会话历史可靠性 |
| [#124037](https://github.com/openclaw/openclaw/pull/124037) | **CLOSED** | Workers 支持从 Gateway bundle 启动设备会话，切断对本地 npm 依赖的信任 | #123985 | 🏗️ 架构演进里程碑：设备侧运行时与控制平面解耦，支撑边缘部署 |

### 待合并高优 PR（Ready for maintainer look / Waiting on author）

| PR | 标签 | 核心价值 | 风险标记 |
|----|------|----------|----------|
| [#121764](https://github.com/openclaw/openclaw/pull/121764) | `P1`, `platinum hermit`, `auth-provider` | Plugin SDK 新增 prepared cancellable OAuth refresh hooks，解决凭据替换竞态 | 🚨 `compatibility`, `auth-provider` |
| [#124302](https://github.com/openclaw/openclaw/pull/124302) | `P1`, `gold shrimp`, `availability` | Gateway 核心就绪与 sidecar 解耦，避免可选组件拖垮主进程 | 🚨 `compatibility`, `availability` |
| [#124300](https://github.com/openclaw/openclaw/pull/124300) | `P1`, `gold shrimp`, `anthropic` | 保留 Claude CLI prompt cache 复用，跨 turn 命中率 99.9% → 22% 回归修复 | 🚨 `compatibility` |
| [#124322](https://github.com/openclaw/openclaw/pull/124322) | `XS` | **修复 dev-channel 更新失败**：`openclaw update` 自动识别 repo `packageManager` 使用 pnpm | 🟢 直接解决 #123073 生产阻塞 |
| [#123194](https://github.com/openclaw/openclaw/pull/123194) | `P1`, `silver shellfish` | MCP HTTP/SSE 响应体上限截断，防止超大 catalog 卡死事件循环 | 🚨 `compatibility`, `availability` |

**整体推进评估**：核心安全/稳定性 PR（安装策略、Gateway 就绪解耦、Prompt cache、dev-channel 修复）均已进入最终审阅，**预计 48h 内可形成下一批 beta 候选**。

---

## 4. 社区热点

### 高讨论度 Issues（Top 5 by 评论数）

| Issue | 评论 | 状态 | 核心诉求 | 代表性声音 |
|-------|------|------|----------|------------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 96 | **CLOSED** | Silent reply 失败在 #116277 关闭后复发，监控 cron 持续记录新发生 | “监控显示每天仍有新发生，根因未修” — @sloptop-the-terrible |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 66 | OPEN | Realtime voice 会话保留无界 provider/consult state，导致内存泄漏与超时 | “item-count 限制不等于硬 ownership bound” — @vincentkoc |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 53 | OPEN | **Memory Trust Tagging**：按来源（用户指令/网页抓取/第三方技能）给记忆打信任等级，防投毒 | “untrusted content 后续影响决策链” — @LumenLantern |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 49 | OPEN | Tool calls 间的文本泄漏到消息通道（Slack/iMessage），内部处理输出对用户可见 | “UX 严重问题，error handling narration 被当成消息发出” — @doomclaw |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 29 | OPEN | Subagent completion 静默丢失：无重试、无通知、无超时自动重启 | “results silently lost，多种 failure mode” — @IIIyban |

### 高关注 PR（含视频/截图证明）

| PR | 证明形式 | 关注点 |
|----|----------|--------|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | 🎥 视频 | 安全策略警告审阅全流程演示 |
| [#123874](https://github.com/openclaw/openclaw/pull/123874) | 🎥 视频 | Control UI 侧边栏合并为标签页，解决多面板宽度挤压 |
| [#124300](https://github.com/openclaw/openclaw/pull/124300) | 文档 | Prompt cache 复用机制详细技术说明 |

**热点信号分析**：
1. **消息可靠性** 仍是生产环境第一痛点（Silent reply、Subagent 丢失、Tool call 泄漏）；
2. **会话/记忆治理** 需求上升：Trust Tagging、Context bloat (#67419)、Unbounded growth (#114612) 形成完整诉求链；
3. **安全边界显性化** 已成共识：Install policy warn、Secret host binding、OAuth refresh hooks 三件套同步推进。

---

## 5. Bug 与稳定性

### P0/P1 级生产阻塞（按严重度排序）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 状态 |
|--------|-------|------|---------------|------|
| **P0 - 数据丢失** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失，无重试/通知/重启 | ❌ 无 | OPEN |
| **P0 - 消息丢失** | [#121058](https://github.com/openclaw/openclaw/issues/121058) | Silent reply 失败复发，监控持续告警 | ❌ 无（前序 #116277 未根治） | CLOSED 但复发 |
| **P1 - 会话状态** | [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 无界 state 保留，内存/超时风险 | ❌ 无 | OPEN |
| **P1 - 消息泄漏** | [#25592](https://github.com/openclaw/openclaw/issues/25592) | Tool-call 间文本误发至用户可见通道 | ❌ 无 | OPEN |
| **P1 - 回归** | [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway cold start 2.5x 回归（2026.7.1→7.2） | ❌ 无 | OPEN |
| **P1 - 可用性** | [#123073](https://github.com/openclaw/openclaw/issues/123073) | `dev-channel update` 失败：`EUNSUPPORTEDPROTOCOL workspace:*` | ✅ [#124322](https://github.com/openclaw/openclaw/pull/124322) | OPEN（PR 待合并） |
| **P1 - Windows** | [#74378](https://github.com/openclaw/openclaw/issues/74378) | CLI 命令执行后残留 `node.exe` 进程 | ❌ 无 | OPEN |
| **P1 - 资源泄漏** | [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows vitest teardown `EBUSY unlink` agent state DB | ❌ 无 | OPEN |
| **P1 - 迁移破坏** | [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 迁移留空 channel conversation-store SQLite，断 proactive send | ❌ 无 | OPEN |

### 已有 Fix PR 但未合并的关键 Bug

| Bug Issue | Fix PR | 进度 |
|-----------|--------|------|
| #123073 (dev-channel update 失败) | [#124322](https://github.com/openclaw/openclaw/pull/124322) | 👀 Ready, XS size |
| #119755 (health 路径错误) | [#119777](https://github.com/openclaw/openclaw/pull/119777) | ✅ 已合并 |
| #121386/#124120 (history 行丢失

---

## 横向生态对比

The

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-16

> 数据统计窗口：2026-08-13 至 2026-08-15 (UTC) | 数据来源：HKUDS/nanobot GitHub API

---

## 1. 今日速览

**项目整体状态：高活跃度、重稳定性、强迭代。** 过去 24 小时无新版本发布，但合并/关闭了 **7 个 PR**，新开/更新 **9 个待合并 PR**，新增 **1 个严重 Bug Issue** 并已有对应修复 PR。核心开发力量集中在 **会话状态一致性修复**、**WebUI 交互完善**、**Provider 生态扩展** 及 **底层架构重构** 四大方向。Issue 与 PR 闭环速度极快（如 #5377 报出即 #5379 修复），显示维护团队响应机制高效。项目处于 **功能加速期与技术债偿还并行** 的健康状态。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 7 个 PR 推进了关键稳定性与体验修复，项目向生产就绪迈进一步：

| PR | 类型 | 核心推进内容 | 影响面 |
|----|------|--------------|--------|
| [#5371](https://github.com/HKUDS/nanobot/pull/5371) | **Bug Fix (WebUI)** | 修复 Agent 轮次未结束时 Copy/Fork 按钮误显示，消除完成信号冲突 | WebUI 交互一致性 🟢 |
| [#5369](https://github.com/HKUDS/nanobot/pull/5369) | **Bug Fix (Security/Plugins)** | 插件技能根目录缓存失效后重新校验，防止包替换后越权读取 | 插件沙箱安全 🔴 |
| [#5370](https://github.com/HKUDS/nanobot/pull/5370) | **Bug Fix (Memory/Perf)** | `FileStateStore` 引入会话级生命周期绑定，解决高基数会话导致内存泄漏 | 后端稳定性/内存 🟢 |
| [#5376](https://github.com/HKUDS/nanobot/pull/5376) | **Bug Fix (Cron)** | 定时任务持久化失败不再导致调度器永久停摆，异常隔离在 `try/finally` 内部 | 后台任务鲁棒性 🟢 |
| [#5397](https://github.com/HKUDS/nanobot/pull/5397) | **Bug Fix (WebUI)** | 侧边栏多选保留 Shift 范围选择，Guidance 发送不再断裂 Agent Turn 计时 | WebUI 细节体验 🟢 |
| [#5399](https://github.com/HKUDS/nanobot/pull/5399) | **Refactor (WebUI/Model)** | 区分 Model Preset 显示名与稳定命令名，编辑时显示命令名，多语言适配 | 配置管理规范化 🟡 |
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) | **Feature (Provider)** | 新增 **OrcaRouter** 作为命名网关 Provider，聚合 150+ 模型，内置零信任安全网关 | 模型接入生态扩展 🔵 |

**整体进度评估**：核心后端数据一致性（Session/Compaction/FileState/Cron）与前端交互确定性（Turn结束信号/选择状态/Provider命名）均取得实质性修复，技术债偿还比例高，为后续协作功能（Side Chat、Drag-Drop、Mentions）铺平道路。

---

## 4. 社区热点

| 对象 | 热度指标 | 核心诉求分析 |
|------|----------|--------------|
| [Issue #5377](https://github.com/HKUDS/nanobot/issues/5377) | **新开 1 天，2 条评论，关联修复 PR #5379** | **数据丢失风险**：Consolidation 截断输入却推进指针，导致上下文静默丢失。用户/维护者高度关注会话历史完整性，修复 PR 已开出并覆盖 Token 触发/空闲压缩/超大输入/Unicode 边界等全场景测试。 |
| [PR #5358](https://github.com/HKUDS/nanobot/pull/5358) | **Open 3 天，持续更新** | **会话协作核心需求**：引入 `@session` 提及机制，赋予会话稳定身份，支持跨会话上下文引用。这是 WebUI 从单用户向多会话协作演进的关键基建，优先级 P2 但架构影响深远。 |
| [PR #5364](https://github.com/HKUDS/nanobot/pull/5364) | **Open 2 天，标记 conflict** | **临时侧对话**：`/side` 命令支持主题旁并行临时会话，独立草稿/流式/发送状态。满足「不污染主线程做探索/对比」的高频场景，UI 状态隔离复杂度高。 |
| [PR #5389](https://github.com/HKUDS/nanobot/pull/5389) | **Open 1 天，标记 conflict** | **会话拖拽组织**：侧边栏会话/分组拖拽重排、拖拽建组。直接回应用户对会话管理可视化操作的诉求，依赖最新面板布局。 |

---

## 5. Bug 与稳定性

按严重程度排序（🔴 Critical > 🟠 High > 🟡 Medium > 🟢 Low），均已有 Fix PR 或已合并：

| 严重度 | Issue/PR | 标题 | 状态 | 关键风险点 |
|--------|----------|------|------|------------|
| 🔴 **Critical** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) / [#5379](https://github.com/HKUDS/nanobot/pull/5379) | Consolidation 截断输入却推进 `last_consolidated` 导致历史静默丢失 | **Open / Fix PR Open** | 上下文完整性破坏，影响长会话推理质量；修复采用无损分块+原子写入 |
| 🔴 **Critical** | [#5369](https://github.com/HKUDS/nanobot/pull/5369) | 插件技能根目录缓存未随包变更失效，可能越权读取 | **Closed (Merged)** | 供应链安全：原地替换包后旧缓存仍可读受限项目技能 |
| 🟠 **High** | [#5370](https://github.com/HKUDS/nanobot/pull/5370) | `FileStateStore` 无界增长 + 生命周期越界残留 | **Closed (Merged)** | 高基数 API/临时会话导致内存泄漏，`/new` 后状态污染 |
| 🟠 **High** | [#5376](https://github.com/HKUDS/nanobot/pull/5376) | Cron 持久化异常导致调度器永久死锁 | **Closed (Merged)** | 单点磁盘/权限故障瘫痪所有定时任务 |
| 🟡 **Medium** | [#5371](https://github.com/HKUDS/nanobot/pull/5371) | WebUI Agent Turn 未结束时显示 Copy/Fork，信号冲突 | **Closed (Merged)** | 用户误判生成完成，交互一致性受损 |
| 🟡 **Medium** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务竞态覆盖 Session 数据 (`/new` 并发) | **Open (Conflict)** | 会话替换时过期压缩任务写回脏数据，序列化机制待合并 |
| 🟢 **Low** | [#5397](https://github.com/HKUDS/nanobot/pull/5397) | 侧边栏 Shift 多选丢失、Guidance 断裂 Turn 计时 | **Closed (Merged)** | 交互细节体验 |

---

## 6. 功能请求与路线图信号

结合新增 PR 与 Issue 讨论，下一版本（或近期迭代）大概率纳入：

| 功能/方向 | 信号来源 | 成熟度 | 备注 |
|-----------|----------|--------|------|
| **会话协作 / @Mention 跨会话引用** | [PR #5358](https://github.com/HKUDS/nanobot/pull/5358) | 🟡 设计稳定，实现中 | 核心社交/协作基建，Server-owned `@name` 避免暴露 Key |
| **临时侧对话 (`/side`)** | [PR #5364](https://github.com/HKUDS/nanobot/pull/5364) | 🟡 功能完整，冲突中 | 并行作曲/流式/标签页切换，Transient 设计降低心智负担 |
| **会话拖拽分组/排序** | [PR #5389](https://github.com/HKUDS/nanobot/pull/5389) | 🟢 早期实现 | 依赖新面板布局，交互直观 |
| **DashScope (Bailian) 原生协议支持** | [PR #5398](https://github.com/HKUDS/nanobot/pull/5398) | 🟢 新开，测试齐全 | 解锁原生 Thinking/参数面，与兼容模式共存 |
| **Model Preset 统一命名体系** | [PR #5400](https://github.com/HKUDS/nanobot/pull/5400) | 🟢 新开 | 跨 Config/WebUI/Command/Session/Dream 统一 Canonical Name，支持重命名校验 |
| **WebUI 突变重连安全** | [PR #5401](https://github.com/HKUDS/nanobot/pull/5401) | 🟢 新开 | 重连后 Replay 原请求 ID，幂等性保障，5min 缓存窗口 |
| **Subagent 完整对话落盘** | [PR #5291](https://github.com/HKUDS/nanobot/pull/5291) | 🟡 久开，持续更新 | 后台子代理 Tool Call/Reasoning 全链路可审计，调试/合规刚需 |

**路线图推测**：**Q3 重点 = 会话协作闭环（Mention + Side Chat + Drag-Drop）+ Provider 生态补全（OrcaRouter/DashScope Native）+ 核心存储/状态一致性加固**。

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述提炼的真实痛点：

| 痛点/场景 | 代表性表述 | 满意度倾向 |
|-----------|------------|------------|
| **长会话上下文静默丢失** | "Any messages or message suffixes removed by `_truncate_to_token_budget` are permanently lost" ([#5377](https://github.com/HKUDS/nanobot/issues/5377)) | 😡 **强烈不满** — 数据完整性是信任基石 |
| **Agent 生成中 UI 给出完成假象** | "Copy and fork actions can appear below an assistant text segment while the same Agent turn is still generating... conflicting completion signals" ([#5368](https://github.com/HKUDS/nanobot/issues/5368)) | 😟 **困惑/不信任** — 已修复 (#5371) |
| **Subagent 过程黑盒不可查** | "Its full conversation — the tool calls, results, and reasoning steps — vanished with the process, so there was no way to review what a subagent actually did" ([#5291](https://github.com/HKUDS/nanobot/pull/5291)) | 😐 **刚需未满足** — 修复中 |
| **会话管理缺乏可视化组织** | 需要拖拽分组、临时侧聊、跨会话引用 (#5358, #5364, #5389) | 🤔 **期待中** — 核心工作流提效点 |
| **模型配置命名混乱** | "Editing a preset named `openai` to display as `minimax` previously looked like a rename but actually changed the command name" ([#5399](https://github.com/HKUDS/nanobot/pull/5399)) | 😅 **困惑** — 已澄清显示名 vs 命令名 |

---

## 8. 待处理积压提醒

以下长期开放/冲突项需维护者优先关注，防止技术债累积或阻塞新功能：

| 对象 | 停滞/冲突时长 | 风险 | 建议行动 |
|------|---------------|------|----------|
| [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) | **Open 10 天，标记 Conflict** | Session `/new` 与后台 Compaction 竞态，数据一致性核心风险 | **🔴 最高优先级**：解决冲突并合并，配合 #5370 彻底修复会话生命周期 |
| [PR #5291](https://github.com/HKUDS/nanobot/pull/5291) | **Open 9 天，持续更新** | Subagent 透明化缺失，影响调试/审计/合规 | **🟠 高优**：审查测试覆盖率，推进合并 |
| [PR #5358](https://github.com/HKUDS/nanobot/pull/5358) | **Open 4 天** | 会话协作核心 API，后续 Side Chat/Mention 依赖此身份体系 | **🟠 高优**：尽快 Code Review，锁定接口设计 |
| [PR #5364](https://github.com/HKUDS/nanobot/pull/5364) / [#5389](https://github.com/HKUDS/nanobot/pull/5389) | **Open 2-3 天，均标记 Conflict** | WebUI 会话布局重构冲突，阻塞协作/组织功能 | **🟡 中优**：协调统一面板布局分支，批量解

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-16

---

## 1. 今日速览
- **活跃度极高**：过去 24 小时共 50 个 Issue 更新（42 个活跃/新开，8 个关闭）与 50 个 PR 更新（46 个待合并，4 个已合并/关闭），显示核心团队与社区正在密集攻关。
- **核心矛盾聚焦**：Windows 平台更新机制故障（文件锁定、进程残留）、Desktop 网关重启丢失、消息投递语义缺失、OAuth/MCP 认证稳定性等 **P1/P2 级阻塞性 Bug** 占据主流。
- **架构重构持续推进**：大文件拆解（Issue #78647）已宣告完成，压缩/会话状态管理（PR #87326）、凭据隔离（Issue #83565）、Discord API v10 对齐（Issue #79564）等长期 Epic 同步推进。
- **安全与合规**：新增官方域名/钓鱼防范文档（PR #87174），Electron 升级至 41.10.3 修复高危 CVE（PR #87338）。
- **整体健康度**：**关键路径阻塞较多，但修复 PR 流转迅速**，若今日合并的 4 个 PR 能顺利进入主干，Windows/网关/桌面端稳定性将显著改善。

---

## 2. 版本发布
**今日无新版本发布**。当前最新版本仍为 v0.20.1（由 Issue #87329 暗示）。

---

## 3. 项目进展（已合并/关闭的关键 PR 与 Issue）

| 编号 | 标题 | 类型 | 影响 | 链接 |
|------|------|------|------|------|
| **PR #87129** | `fix(gateway): propagate supervisor marker through stderr_timestamp wrapper` | **Bug Fix (P2, macOS)** | 修复 launchd 监管下的网关无限重生循环，解决 QQ/WeChat/Telegram 等所有消息平台无法连接的严重回归。 | [#87129](https://github.com/NousResearch/hermes-agent/pull/87129) |
| **Issue #78647** | `[COMPLETE] Large-file decomposition: 20/20 done` | **Refactor (Epic)** | 全仓 “神文件” 拆解正式收官，确立 “只拆不合” 红线，为后续模块化治理奠基。 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) |
| **Issue #83683** | `Desktop restart reaps the live gateway but never relaunches it` | **Bug Fix (P1, Windows)** | 桌面应用重启不再误杀网关进程，消息通道自动恢复。 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) |
| **Issue #82001** | `Agent flush does not adopt live continuation after compression` | **Bug Fix (P1, Session/Compression)** | 压缩后会话身份交接修复，消除虚假 “磁盘满” 对话框。 | [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) |
| **Issue #50530** | `google-antigravity 遗留 P2 集成问题汇总` | **Bug Fix (P2, Provider)** | 子代理崩溃、并发掉线、400 错误三大遗留问题关闭。 | [#50530](https://github.com/NousResearch/hermes-agent/issues/50530) |
| **Issue #83569** | `Windows: hermes update self-locks cryptography._rust.pyd` | **Bug Fix (P1, Windows/Update)** | 更新进程不再自持 `.pyd` 锁，`cryptography` 版本升级不再必现 OS Error 5。 | [#83569](https://github.com/NousResearch/hermes-agent/issues/83569) |
| **Issue #69107** | `prompt.submit's truncate_before_user_ordinal rejects valid ordinals` | **Bug Fix (P2, TUI/Session)** | 多客户端共享会话时的序号冲突与显示陈旧问题修复。 | [#69107](https://github.com/NousResearch/hermes-agent/issues/69107) |
| **Issue #70031** | `TUI/CLI status lines repeat mid-turn` | **Bug Fix (P2, CLI)** | 关闭流式传输时状态行重复渲染问题。 | [#70031](https://github.com/NousResearch/hermes-agent/issues/70031) |

> **进展评估**：今日关闭的 8 个 Issue 中 6 个为 P1/P2 级生产阻塞，**Windows 更新、macOS 网关托管、会话压缩交接** 三大高危领域均有实质性突破。

---

## 4. 社区热点（评论数 Top 5）

| 编号 | 标题 | 评论 | 状态 | 核心诉求 |
|------|------|------|------|----------|
| **#78647** | Large-file decomposition: 20/20 done | 79 | ✅ Closed | 架构治理里程碑，确认 “神文件” 全量拆解完成，后续不再接受回滚。 |
| **#66616** | `[skills-index-watchdog] Skills index is stale or degraded` | 37 | 🟢 Open | 自动化探针报告技能索引过期（29.8h > 26h 阈值），CI/CD 定时任务失效或耗时过长，影响技能市场可用性。 |
| **#83683** | Desktop restart reaps gateway (WeChat/QQ go silent) | 32 | ✅ Closed | Windows 桌面端重启导致网关进程被杀且不重启，IM 机器人全面静默，用户痛点极高。 |
| **#8457** | Feature: Persistent Session Memory with Cross-Session Search & Auto-Compression | 21 | 🟢 Open | **高呼声功能**：会话记忆持久化、跨会话检索、自动压缩，被视为 “Agent 记忆系统” 的缺失拼图。 |
| **#82001** | Agent flush does not adopt live continuation after compression | 19 | ✅ Closed | 压缩导致会话身份断裂，用户收到误导性 “磁盘满” 报错，信任度受损。 |

> **热点分析**：社区关注度集中在 **“基础设施稳定性”（Windows/网关/索引）** 与 **“长期记忆能力”** 两大维度。前者阻塞日常可用性，后者决定产品竞争力上限。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | 编号 | 标题 | 关键症状 | 是否有 Fix PR | 链接 |
|--------|------|------|----------|---------------|------|
| **P1 (阻塞)** | #87183 | CLI approval panel never renders — `HERMES_EXEC_ASK=1` 劫持审批回调 | 危险命令审批面板永不渲染，CLI 会话永久挂起 | ❌ 无 | [#87183](https://github.com/NousResearch/hermes-agent/issues/87183) |
| **P1 (阻塞)** | #83683 | Desktop restart kills gateway, never relaunches (已关闭) | Windows 桌面端重启后 IM 全静默 | ✅ 已修复 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) |
| **P1 (阻塞)** | #87329 | `hermes mcp login` OAuth 回调端口冲突，无头主机无法完成登录 | 单次调用弹两个 URL，端口自冲突报错 | ❌ 无（标记 duplicate） | [#87329](https://github.com/NousResearch/hermes-agent/issues/87329) |
| **P2 (严重)** | #77394 | Windows `hermes update` 仍因 paused gateway 持有 `_rust.pyd` 失败 | 即使有 #73684 修复，重生网关仍锁文件 | ✅ PR #84409 (逃逸父 Job) | [#77394](https://github.com/NousResearch/hermes-agent/issues/77394) |
| **P2 (严重)** | #70694 | Gateway drops semantic turn finality at platform-adapter boundary | 无法区分“最终答案”与“中间片段”，导致重试/回退语义丢失 | ❌ 无 | [#70694](https://github.com/NousResearch/hermes-agent/issues/70694) |
| **P2 (严重)** | #66746 | Telegram Rich Messages 将裸 `$` 解析为 LaTeX，财务数字乱码 | `$395k` 等被渲染为数学公式 | ❌ 无 | [#66746](https://github.com/NousResearch/hermes-agent/issues/66746) |
| **P2 (严重)** | #85315 | `auxiliary.free_only` 误拦显式 `:free` 模型并误报支付错误 | 免费模型被错误标记为需付费 | ❌ 无 | [#85315](https://github.com/NousResearch/hermes-agent/issues/85315) |
| **P2 (严重)** | #49543 | OAuth MCP 服务器中途掉线 + `RuntimeError: lock not held` + 120s 挂起 | 长会话中 Honeycomb 等 MCP 连接静默断开 | ❌ 无 | [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) |
| **P2 (严重)** | #87295 | Desktop 二次启动静默杀死后端，连接状态破裂 | 点击 Dock 图标导致现有后端被替换 | ❌ 无 | [#87295](https://github.com/NousResearch/hermes-agent/issues/87295) |
| **P2 (严重)** | #87292 | 慢速本地模型 (>16 TPS) 触发连接中止/Provider 无响应超时 | 本地推理慢时出现 WinError 10053 或 Provider unresponsive | ❌ 无 | [#87292](https://github.com/NousResearch/hermes-agent/issues/87292) |

> **稳定性结论**：Windows 更新链路已有系统性修复方案（PR #84409 + #84212），macOS 网关托管已修复（PR #87129），但 **CLI

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-16

---

## 1. 今日速览
**项目整体处于低活跃度维护期，核心开发重心疑似转移或处于周期性空窗期。** 过去 24 小时**零 Issue 活动、零 PR 合并、零版本发布**，仅有 2 个创建于 9 天前的 PR（均标记 `[stale]`）在 8 月 15 日有过更新动作，但均未进入审核合并流程。当前代码库面临 **WhatsApp 协议兼容性中断**（PR #3320）与 **Agent 上下文工程优化**（PR #3321）两项关键技术债，均因缺乏维护者响应而滞留。项目健康度评级：**⚠️ 需关注**（核心通道失效未修、PR 积压无人处理）。

---

## 2. 版本发布
**无新版本发布。** 当前最新稳定版仍停留在历史版本，WhatsApp 原生通道因依赖库版本过旧导致协议不兼容（405 Client Outdated），实际可用性已受损，建议维护者尽快切出热修复版本。

---

## 3. 项目进展
**今日无 PR 合并/关闭，项目代码库零推进。**

| PR | 标题 | 状态 | 核心价值 | 阻塞点 |
| :--- | :--- | :--- | :--- | :--- |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | `fix(agent): move dynamic context after history to preserve prefix caching` | **Open / Stale** | **性能/成本优化**：将动态上下文（时间、运行时、会话、发送者）移至历史之后，利用 KV Cache Prefix Caching 机制减少重复 Token 计算，显著降低长对话推理延迟与 Token 成本。 | 9 天无 Review，标记 Stale，疑似无 Maintainer 关注。 |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"` | **Open / Stale** | **核心功能恢复**：WhatsApp 官方已拒绝旧版客户端协议，当前版本连接 5 秒即被断开且不重连，导致 WhatsApp 原生通道**完全不可用**。升级 `whatsmeow` 至最新版可恢复连接。 | 9 天无 Review，标记 Stale，属 P0 级阻塞性 Bug 未修复。 |

> **进展结论**：两个高价值 PR（一个 P0 故障修复，一个核心性能优化）均处于“提交即遗弃”状态，项目向前推进度为 **0%**。

---

## 4. 社区热点
**社区讨论度极低，无高热度 Issue/PR。** 仅有的两个 PR 均为 **0 评论、0 Reactions**，且均被 GitHub 自动标记为 `[stale]`。这反映出：
1.  **维护者带宽不足**：核心贡献者 `grrowl` 提交修复后无人响应。
2.  **用户反馈渠道断层**：WhatsApp 通道失效可能未通过 Issue 体系大规模暴露（或用户已流失/转至其他渠道反馈）。
3.  **项目治理真空**：缺乏定期 Triage 机制清理 Stale 标签或推动合并。

---

## 5. Bug 与稳定性
| 严重级 | 问题描述 | 影响范围 | 是否有 Fix PR | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 - 阻塞/服务不可用** | **WhatsApp 原生通道连接即被服务端拒绝 (405 Client Outdated)**，且客户端无重连机制，通道彻底失效。 | 所有依赖 WhatsApp 接入的用户/机器人 | **是** [#3320](https://github.com/sipeed/picoclaw/pull/3320) (bump whatsmeow) | **Open / Stale (9天未合并)** |
| **P2 - 性能退化/资源浪费** | Agent System Prompt 中动态上下文位置靠前，导致对话历史变更时无法命中 Prefix Cache，每轮对话重复计算固定前缀 Token。 | 高并发/长上下文场景下的推理延迟与成本 | **是** [#3321](https://github.com/sipeed/picoclaw/pull/3321) (调整上下文顺序) | **Open / Stale (9天未合并)** |

---

## 6. 功能请求与路线图信号
**本周期无新增功能需求 Issue。** 从现有 PR 推测路线图信号：
1.  **协议维护常态化**：WhatsApp/Telegram 等第三方协议依赖库需建立定期更新机制（如 Dependabot + 自动测试），避免单点失效。
2.  **LLM 推理工程化**：PR #3321 显示团队已关注 Prefix Caching 等推理加速技术，后续可能引入更细粒度的 Prompt Template 管理、KV Cache 复用策略或推理框架升级（如 vLLM/TGI 集成）。
3.  **稳定性优先于新功能**：当前积压均为修复类，短期内新功能开发概率极低。

---

## 7. 用户反馈摘要
**数据源不足，无法提炼有效用户画像。** 过去 24h 及近期 Issues 列表为空，PR 评论区为空。间接推断：
- **痛点**：WhatsApp 用户当前**完全无法使用**原生通道，可能已转向 Webhook/网关方案或放弃。
- **盲区**：缺乏 Issue 模板、健康检查机制或用户群（Discord/Telegram/QQ）导致反馈未沉淀至 GitHub。

---

## 8. 待处理积压（维护者优先级建议）

| 优先级 | 项目 | 链接 | 停滞时长 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (立即)** | **WhatsApp 协议失效修复** | [#3320](https://github.com/sipeed/picoclaw/pull/3320) | 9 天 | **立即 Review & Merge**，并切 `hotfix` 版本发布。若 CI 未跑通，人工验证后强制合并恢复服务。 |
| **🟠 High (本周内)** | **Agent Prefix Caching 优化合并** | [#3321](https://github.com/sipeed/picoclaw/pull/3321) | 9 天 | Review 代码逻辑（确认不破坏 System Prompt 语义），合并以节省算力成本。 |
| **🟡 Process (本月内)** | **建立 Stale 处理 & 依赖更新自动化** | - | 长期 | 配置 GitHub Actions：Dependabot 周度更新 `whatsmeow` 等关键依赖 + 自动集成测试；设置 `stale` bot 自动关闭/提醒长期无响应 PR。 |
| **🟢 Hygiene (持续)** | **Issue 归档与用户反馈渠道建设** | - | 长期 | 整理关闭旧 Issue，在 README 显著位置标注官方交流群/反馈入口，避免用户反馈“黑洞”。 |

---

**📌 核心结论**：PicoClaw 当前处于**“关键通道失效、核心优化滞留、治理机制缺位”**的三重风险中。建议项目方立即指定人员处理 #3320 恢复 WhatsApp 服务，并建立最低限度的 PR Triage 节奏（如周一/周四固定 Review），避免技术债与用户流失进一步扩大。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-16

> **数据基准**：GitHub 过去 24 小时（2026-08-15 00:00 – 23:59 UTC）  
> **仓库**：`qwibitai/nanoclaw`（以下链接均指向 `nanocoai/nanoclaw`，以数据源为准）

---

## 1. 今日速览
- **整体活跃度：高** —— 单日提交 **22 个 PR**，其中 19 个处于审核中，3 个已合并/关闭；Issue 无新增无更新，说明核心团队正集中精力在代码层面推进大规模重构与新功能落地。  
- **核心主题**：Telegram 适配器正式接入（#3269）、跨会话上下文扇出与历史命令（#3257）、容器心跳/轮询循环稳定性修复（#3251、#3268）、权限模型细化（#3260、#3266）以及数据库脱离状态建模（#3256）。  
- **交付质量**：所有新增 PR 均声称通过 `pnpm test`（1483 用例）与 `pnpm build`，且多数打上 `[follows-guidelines, core-team]` 标签，表明已通过内部规范检查。  
- **风险点**：旧 PR #2752（Discord 附件下载）与 #37（重命名/迁移）长期未合并，可能存在技术债或决策阻塞。  
- **版本节奏**：无新 Release，但合并的 3 个修复型 PR 已为下一版本奠定稳定性基线。

---

## 2. 版本发布
**无新版本发布**。  
最近一次 Release 仍为历史版本，建议维护者在本批 PR 合并完成后切 **v0.x.y** 或 **v1.0.0-rc** 以便下游消费。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 对项目的推进度 |
|----|------|----------|----------------|
| [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) | **Bug Fix** | 修复 `runPollLoop` 在 `config.signal` 中止时，未清理活跃查询内部的 500 ms 跟进轮询器，导致循环泄漏。 | 消除长时间运行容器的内存/句柄泄漏风险，**稳定性 +1**。 |
| [#3251](https://github.com/nanocoai/nanoclaw/pull/3251) | **Bug Fix** | 心跳文件不再仅依赖 API 事件触摸，引入独立定时器防止速率限制期间心跳停摆导致误杀。 | 解决生产环境“30 分钟误杀”严重回归，**可用性 +2**。 |
| [#37](https://github.com/nanocoai/nanoclaw/pull/37) | **Breaking Refactor** | 项目更名 **DotClaw**，全量替换 WhatsApp 为 Telegram（Telegraf），清理旧资产并新增 launchd/plist/测试脚本。 | 战略级转型 PR 已关闭（可能被 #3269 替代实现），标记**架构方向已定**。 |

> **合并统计**：3/22（13.6%），其余 19 个 PR 仍在 Review/等待 CI，预计未来 1-2 天内批量合并。

---

## 4. 社区热点（评论/关注度最高的 PR）

| 排名 | PR | 关注点 | 潜在诉求分析 |
|------|----|--------|--------------|
| 1 | [#3269](https://github.com/nanocoai/nanoclaw/pull/3269) | **Telegram 适配器首发**（1483 测试全绿，含配对流程、Markdown 消毒、自注册） | 社区期待**原生多平台支持**；若合并将彻底替代 #37 中的半成品实现。 |
| 2 | [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) | **跨会话上下文扇出/回填/历史命令** | 多 Agent 协作场景下的**上下文共享**刚需，`ncl sessions history` 直接面向运维/调试。 |
| 3 | [#3260](https://github.com/nanocoai/nanoclaw/pull/3260) | **未知发送者策略新增 `decline_notify`** | 安全与体验平衡：既不打扰管理员审批卡片，又给 Owner 留痕。 |
| 4 | [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) | **通道适配器热启动** | 支持**插件式动态加载**，为未来 Marketplace/技能生态铺路。 |

> **注意**：当前数据集未提供评论数/Reaction 具体数值（均显示 `undefined`），以上排名综合“标签丰富度、代码行数、跨模块影响面”推断。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | PR/Issue | 现象 | 修复状态 | 影响范围 |
|--------|----------|------|----------|----------|
| **Critical** | [#3251](https://github.com/nanocoai/nanoclaw/pull/3251) | 速率限制下心跳停摆 → 容器被误杀 | ✅ **已合并** | 所有长连接容器 |
| **High** | [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) | 轮询循环中止时跟进轮询器泄漏 | ✅ **已合并** | 高频轮询场景 |
| **High** | [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) | 多实例共享平台地址时出站解析到错误实例 | 🔄 **Review 中** | 多 Bot 共存部署 |
| **Medium** | [#3250](https://github.com/nanocoai/nanoclaw/pull/3250) | Telegram 旧 Markdown 消毒器将 `**bold**` 降级为 `_italic_` | 🔄 **Review 中** | Telegram 渲染 |
| **Medium** | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | Discord 仅含 URL 的附件无法下载/展示 | 🔄 **长期搁置** | Discord 用户 |
| **Low** | [#3252](https://github.com/nanocoai/nanoclaw/pull/3252) | 无心跳文件容器豁免绝对天花板杀容 | 🔄 **Review 中** | 开发/调试容器 |

> **回归风险**：#3251 与 #3268 均涉及核心调度循环，合并后需在 Staging 跑 24h 压测。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求摘要 | 对应 PR | 纳入下一版本可能性 |
|----------|----------|---------|---------------------|
| 核心团队批量 PR | **Telegram 适配器完整交付**（配对、消毒、注册） | #3269 | ⭐⭐⭐⭐⭐ **极高**（测试全绿，标签齐全） |
| 核心团队批量 PR | **跨会话上下文扇出/历史 CLI** | #3257 | ⭐⭐⭐⭐ **高**（解耦良好，含迁移） |
| 核心团队批量 PR | **权限模型：拦截器/策略/通知分级** | #3260, #3266 | ⭐⭐⭐ **中高**（配套完整） |
| 核心团队批量 PR | **适配器能力集扩展**（setTyping/status、setThreadTitle 等） | #3261 | ⭐⭐⭐ **中**（向后兼容，按需实现） |
| 外部贡献者 | **OpenCode 模型配置推理 effort 传递** | #3253 | ⭐⭐ **中低**（仅单点修复，无测试） |
| 旧 PR | **项目更名 DotClaw + 全平台切 Telegram** | #37 | ⭐ **低**（已关闭，功能被 #3269 吸收） |

> **路线图推断**：v1.0 将以 **“多平台通道稳定性 + 跨会话上下文 + 权限模型 2.0”** 为三大支柱；Telegram 适配器合并后，WhatsApp 代码将彻底清理。

---

## 7. 用户反馈摘要（从 PR 描述/Commit Message 提炼）

| 痛点/场景 | 来源 | 当前缓解方案 |
|-----------|------|--------------|
| **生产环境容器因限流被误杀** | #3251 作者 DawoudIO | 已合并独立心跳定时器 |
| **Telegram 渲染加粗变斜体** | #3250 作者 chiptoe-svg | 移除旧消毒器，直接用新适配器 |
| **多 Bot 同房间消息发错实例** | #3255 作者 gavrielc | 修复解析逻辑，绑定发送者自身实例 |
| **Discord 附件仅有 URL 无法预览** | #2752 作者 chubbicorn245 | 仍无进展，建议优先级提升 |
| **技能向导步骤编号因手写序号错乱** | #3259 作者 gavrielc | 已修复：strip leading ordinal |
| **跨会话调试无历史聚合视图** | #3257 作者 gavrielc | 新增 `ncl sessions history` |

> **满意度信号**：核心团队自发 PR 占比 86%（19/22），且均附带完整 Test Plan，说明内部 Dogfooding 已覆盖主流程；外部贡献仅 3 个，社区外溢度仍待提升。

---

## 8. 待处理积压（建议维护者本周关注）

| 项目 | 状态 | 停滞天数 | 建议动作 |
|------|------|----------|----------|
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | Open | **65 天** | Discord 附件下载为硬伤，指派 Owner 或标记 `help-wanted` 招募外部贡献 |
| [#37](https://github.com/nanocoai/nanoclaw/pull/37) | Closed | 195 天 | 确认是否彻底废弃，清理残留引用/文档 |
| [#3253](https://github.com/nanocoai/nanoclaw/pull/3253) | Open | 1 天 | 模板未勾选类型，要求贡献者补全 Checklist 与测试 |
| [#3250](https://github.com/nanocoai/nanoclaw/pull/3250) | Open | 1 天 | 与 #3269 强耦合，建议**同批合并**避免冲突 |
| 所有 `[core-team]` PR | Open | 0-1 天 | 批量 Review 会（建议今日内完成），合并后立即切 RC |

---

### 📌 维护者行动清单（优先级 ↓）
1. **合并 #3269 + #3250 + #3261** —— Telegram 适配器完整上线。  
2. **合并 #3257 + #3256 + #3255** —— 跨会话上下文与数据库脱离状态落地。  
3. **处理 #2752** —— 决定修复/弃用/外包，避免长期挂起拖累 Discord 用户信心。  
4. **切 v0.12.0-rc.1** —— 包含今日 3 个已合并修复 + 上述批量功能，发布 Changelog 并通知下游。  

---

> **下一期预告**：若明日合并量维持 ≥10，将进入“发布冻结期”，日报重心转向 Release Notes 与升级指南编写。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-16

> **数据周期**: 2026-08-15 00:00 - 2026-08-15 23:59 (UTC)  
> **数据来源**: GitHub API / 仓库 `nullclaw/nullclaw`

---

## 1. 今日速览
- **整体活跃度**: **低-中等**。过去 24 小时仅产生 1 个新 Issue 与 1 个新 PR，无合并、关闭或版本发布动作，呈典型的“社区提需求 + 核心贡献者推进重构”并行模式。
- **核心动向**: 社区提出 **HTTP/SOCKS5 代理支持** 需求（Issue #988），反映企业级/受限网络环境下的部署刚需；核心贡献者 `vernonstinebaker` 提交 **Agent 长任务循环卫生重构**（PR #987），引入 System Prompt 缓存分离、工具输出压缩、同调用去重，直指长上下文、高 Token 消耗场景的工程化痛点。
- **健康度判断**: 项目处于**功能完善与性能深度优化并行期**，核心维护者活跃，但社区协作深度（评论、Review、测试反馈）仍显不足，建议引入 Issue/PR 模板与自动化分流机制。

---

## 2. 版本发布
**本周期无新版本发布。**

---

## 3. 项目进展
### 🟢 进行中：PR #987 - `feat(agent): loop hygiene for long local tool-heavy runs`
- **作者**: `vernonstinebaker` (核心维护者)
- **状态**: Open | 创建于 2026-08-15 | **未合并**
- **核心变更**:
    1. **System Prompt 缓存分离**: 拆分为稳定前缀 (`buildStablePrefix`) 与动态尾部 (`buildVariableTail`)，引入 `stablePrefixHash` 实现 KV Cache 级复用，大幅降低长轮次对话的 Prefill 开销。
    2. **工具输出压缩入史**: 新增 `result_compress.zig`，仅向历史注入压缩摘要，Observer 仍保留全量日志，平衡上下文窗口与可观测性。
    3. **单轮同调用去重**: 识别并合并单轮内相同参数的重复工具调用，规避冗余执行与 Token 浪费。
- **工程价值**: 直接解决 “本地工具密集型长任务” 的 Token 爆炸、延迟飙升、缓存失效三大顽疾，为后续 Agentic Workflow 规模化落地奠定基础设施。
- **关注点**: 需验证压缩策略对模型推理质量的影响（是否丢失关键细节），建议补充 Benchmark 与回归测试用例。

---

## 4. 社区热点
| 排名 | 对象 | 标题 | 作者 | 互动 | 核心诉求分析 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Issue #988** | **[enhancement] proxy support** | `anpic` | 👍 0 / 评论 0 | **企业级部署刚需**：请求原生支持 HTTP(S) / SOCKS5h 代理，以便在受限网络、企业防火墙、合规审计环境下接入上游 Provider。当前零评论零点赞，表明社区讨论氛围较冷，维护者需主动确认优先级。 |
| **2** | **PR #987** | **feat(agent): loop hygiene...** | `vernonstinebaker` | 👍 0 / 评论 N/A | **核心性能重构**：维护者自驱优化，尚未引入社区 Review。建议指派 Reviewer、补充设计文档链接，避免 “大 PR 难合并” 风险。 |

> **链接直达**: [Issue #988](https://github.com/nullclaw/nullclaw/issues/988) | [PR #987](https://github.com/nullclaw/nullclaw/pull/987)

---

## 5. Bug 与稳定性
**本周期无新增 Bug 报告、崩溃或回归 Issue。**
- *注*: 现有 Issue #988 为增强需求，非缺陷。PR #987 为预防性重构，若审查不严可能引入回归，建议 CI 增加长轮次压测。

---

## 6. 功能请求与路线图信号
| 信号来源 | 需求描述 | 优先级推测 | 关联 PR/实现可能性 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue #988** | **HTTP(S) / SOCKS5h 代理支持** | **P1 (高)** | 无对应 PR | 标准库/HTTP Client 层面改动较小，若 Provider 抽象层设计良好，1-2 个 PR 可完成。建议纳入 `v0.x.x` 或下一个 Minor 版本。 |
| **PR #987** | **Agent 循环卫生 (缓存/压缩/去重)** | **P0 (最高)** | **进行中 (#987)** | 核心维护者主导，架构级优化，**极大概率合入主干**，将成为下一版本核心亮点。 |

**路线图推断**: 短期聚焦 **“生产级可用性” (代理、稳定性、Token 成本控制)**，而非新模型接入或 UI 功能。

---

## 7. 用户反馈摘要
**本周期 Issue 评论区为空，无直接用户反馈可供提炼。**
- **侧写**: Issue #988 作者 `anpic` 未填写 Motivation，且无后续互动，可能为“提完即走”用户或内部测试人员。
- **建议**: 引入 Issue 模板强制填写 **使用场景、网络拓扑、预期行为**，并配置自动标签 `needs-triage`、`area/networking`，提升信号噪比。

---

## 8. 待处理积压提醒
> **说明**: 以下仅基于“本周期数据”判断的即时风险，非全量积压清单。建议维护者结合 GitHub Projects/Projects (Classic) 定期梳理。

| 对象 | 类型 | 停滞时长 | 风险点 | 建议动作 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #987** | 重构/性能 | **< 24h (新)** | 代码量大、涉及核心 Loop、无 Review、无测试报告 | **🔴 立即指派 2+ Reviewer**；要求补齐：单元测试 (压缩/去重逻辑)、集成测试 (长任务 Token 消耗对比)、文档更新 (架构决策记录 ADR)。 |
| **Issue #988** | 功能需求 | **< 24h (新)** | 无讨论、无设计、未纳入 Milestone | **🟡 今日内打标签 `area/networking`, `status/design-needed`**；指派 Owner 给出初步技术方案 (如 `http.Client` Transport 替换策略) 并评估工作量。 |

---

## 📌 维护者行动清单 (Next 24h)
1.  **Code Review 启动**: 对 PR #987 发起 Review Request，设定 48h 内完成首轮审查的 SLA。
2.  **需求落地**: 在 Issue #988 评论确认需求细节，给出初步实现路径与预计里程碑。
3.  **流程固化**: 新增/更新 `.github/ISSUE_TEMPLATE/feature_request.yml` 与 `pull_request_template.md`，强制收集上下文信息。
4.  **CI 增强**: 在 PR #987 检查项中加入 `cargo test -- --test-threads=1` (或等效长任务压测脚本)，防性能回归。

---
*报告生成时间: 2026-08-16 06:00 UTC | 下次更新: 2026-08-17 06:00 UTC*  
*如有数据偏差，请以 GitHub 实时页面为准。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-16

---

## 1. 今日速览

IronClaw 今日呈现 **“大规模性能治理收尾 + 新架构质量门禁建设并行”** 的健康态势。过去 24 小时合并 5 个 PR、关闭 21 个 Issue，核心集中在 **#7591 性能 Epic（Tier 1/2）的落地交付**、**Reborn 遗留路径清理收尾**、以及 **Live Canary/QA 护栏的修补**。新增 6 个 Issue 多为架构级技术债（符号级依赖边界、BudgetLedger 记账修正、ToolChoice 类型化、栈压力缓解），显示团队已从“功能交付”转向“生产级稳定性与可观测性”深水区。无新版本发布，但多个 XL 级 PR 处于审阅末期，预示下周将有实质性合并潮。

> **活跃度评级：⭐⭐⭐⭐⭐（极高）** — 单日关闭 Issue 数创近期新高，且多为实质性工程清理而非行政关闭。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展：今日合并/关闭的关键 PR 与 Issue

| PR / Issue | 标题 | 类型 | 核心推进内容 | 影响面 |
|------------|------|------|--------------|--------|
| **#7634** | `feat(unbound-turns): complete the switchover to prepared-context turns` | **合并 (XL)** | 完成 **Unbound-Turns 架构全量切换**，71 条一致性审计全部通过，标志着 Agent 执行模型从“绑定轮次”彻底迁移至“准备上下文+解耦轮次”新范式。 | 核心运行时、Agent Loop、所有下游能力调用 |
| **#7628** | `perf(processes): remove heartbeat journal churn` | **合并 (M)** | 停止每 5s 写入一行 `ProcessJournalKind::Heartbeat`，日均减少 ~2,880 永久 journal 行/进程；心跳租约仍保留在物化行。 | 进程调度、存储层写放大、长周期部署成本 |
| **#7629** | `perf: reduce trigger and outbound state writes` | **合并 (M)** | 将 `prune_run_history` 从“每次 Running 行更新”移至“首次 fire claim”；完成路径保留补偿性剪枝。单触发器语句数减半。 | Trigger 子系统、Outbound 交付、Postgres/libsql 写负载 |
| **#7676** | `perf(threads): coalesce thread index touches` | **合并 (L)** | 将高频 `touch_thread_index_updated_at` 合并为区间刷新，CAS 写入从每轮 7 次降至 ≤1 次/线程/间隔。 | Thread Index、Sidebar 优先级、多 Worker 正确性 |
| **#7670** | `chore(agents): refresh codebase knowledge graph` | **合并 (XS)** | 夜ly CI 自动刷新代码库记忆快照，保证 Agent RAG 检索基线最新。 | 开发者体验、Agent 上下文感知 |
| **#7595, #7596, #7593, #7597, #7599** | Tier 1/2 性能 Epic 子任务 | **关闭 (5 Issues)** | 对应上述 4 个性能 PR 落地，形成 **“写放大消除 → 心跳静默 → 索引合并 → 死代码清理 → 心跳间隔拓宽”** 完整闭环。 | 全链路存储/调度开销 |

> **里程碑意义**：#7591 Epic 全部 Tier 1 任务已落地，Tier 2 心跳间隔拓宽 (#7599) 亦已关闭（配置层面 5s→15s 已在 PR #7628 同步交付）。**Reborn 迁移后的“性能偿债阶段”正式完工。**

---

## 4. 社区热点：讨论最活跃的 Items

| Item | 评论/反应 | 核心诉求与分析 |
|------|-----------|----------------|
| **#467** `Trajectory benchmark system for agent quality evaluation` | 4 💬, 0 👍 | **最早（3 月）仍 OPEN 的战略级 Issue**。作者 zmanian 推动“真实 LLM 调用 + 双层评估（硬断言 + LLM-as-judge）”的端到端基准体系。近期无新进展，但与当前 Live Canary 修补（#7679）形成呼应：**生产评估体系缺位是当前 QA 红绿灯失效的根因**。 |
| **#7679** `fix(live-qa): stop harness bugs reddening green canary runs` | 0 💬 (新建) | **XL 级 PR，直击生产可信度**。Live Canary 连续 30/30 红，根因全是 **Harness 缺陷而非产品 Bug**（如 `qa_10h` 幻觉护栏误判、资源类能力间歇性失败）。修复后将恢复“绿灯=真绿”的信心基线。 |
| **#7675** `E2E: qa_6c gmail-to-sheet flake cascades across the whole provider-contracts session` | 0 💬 (新建) | 揭示 **E2E 套件的级联脆弱性**：单个 Gmail 资源类能力间歇性失败导致整个 provider-contracts session 判定失败。需引入 **测试用例级熔断/重试/隔离** 机制。 |
| **#7674** `Architecture tests: symbol-level allowlist for the openai-compat → threads edge` | 0 💬 (新建) | 当前仅 crate 级依赖门禁，**符号级泄漏未被拦截**（`ironclaw_openai_compat` 引入 `ironclaw_threads` 内部符号）。需引入 `cargo-deps` / `cargo-public-api` 级别的细粒度治理。 |

> **热点洞察**：社区讨论重心已从“功能怎么做”转移到**“如何度量质量（Benchmark/Harness/Architecture Guard）”**——这是成熟期项目的标志性信号。

---

## 5. Bug 与稳定性：今日报告/修复的缺陷

| 严重度 | Issue / PR | 现象 | 状态 | 关联 Fix PR |
|--------|------------|------|------|-------------|
| **P0 (生产可用性)** | **#7679** (PR) | Live Canary 30/30 红，**全为 Harness 误报**；掩盖真实回归风险 | **已提交修复 PR** (#7679) | #7679 (XL, reviewing) |
| **P1 (数据一致性)** | **#7673** | BudgetLedger：截断启动窗口双扣费（CapabilityStage 预扣后 invoke 再扣）、终态持久化前崩溃导致费用“凭空消失” | **新报告，未修** | 无（需设计 PR） |
| **P1 (架构腐化)** | **#7674** | `openai-compat` 通过符号级依赖绕过 crate 级边界检查，污染 `threads` 领域模型 | **新报告，未修** | 无（需引入符号级允许列表工具链） |
| **P2 (资源泄漏/压力)** | **#7671** | Capability dispatch 装饰器链编译成超大 poll frame，溢出 2 MiB 默认测试栈（已在 `reborn_integration_model_recovery` 复现） | **新报告，已缓解** | f1f396cd8 (chain-boxes 委托) 已缓解，但根治需重构装饰器编译策略 |
| **P2 (类型安全)** | **#7672** | `tool_choice: Option<String>` 过载模式串与工具名，所有 Provider Encoder 均用字符串匹配，极易拼写错误/语义漂移 | **新报告，未修** | 无（需引入 Typed ToolChoice Enum） |
| **P3 (遗留清理)** | **#6726, #7597, #4629** 等 | 多个“死代码/兼容层/遗留路径”经变异测试/审计确认无调用者，已关闭 | **已关闭/清理** | 对应 PR 已合并或无需代码变更 |

> **稳定性判词**：**核心路径无新增 P0 产品 Bug**；今日暴露的均为 **测试基础设施缺陷（#7679）**、**记账边界条件（#7673）**、**架构治理缺口（#7674）** 与 **类型系统债务（#7672）**。整体生产面稳定，但“可信观测链路”亟待补强。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 成熟度 | 纳入下一版本概率 | 依据 |
|------|------|--------|------------------|------|
| **#7651 (PR)** | Automations: 确定性“无结果抑制” — `trigger_create` 必须显式声明 `result_delivery`，中性措辞回落 `deliver` | **高** (XL PR, core 贡献者, 文档完备) | **95%** | 已进入审阅末期，配套文档与内置结构化输出能力同步就绪 |
| **#7491 (PR)** | Coding Tool 统一合同：`read/write/edit/glob/grep/bash` 六大裸名工具，移除旧派生/混合面 | **高** (XL PR, 切片 1-4 完整, 基准臂就绪) | **90%** | 破坏性变更已显式而非旗标隐藏，基准臂提供性能回归护栏 |
| **#7516 (PR)** | WebUI Operator 面板：IronHub Agent Link 注册 URL 与共享密钥安装入口 | **中** (新贡献者 neo-sky, 仅 WebUI 面) | **80%** | 补齐“仅 CLI 可完成 Agent Link”短板，UI 变更风险低 |
| **#7678 (PR)** | Capability Invocation State：在 Gate/Terminal 边界原子物化，Worker 本地保鲜，跨 Worker 租约恢复 | **中** (XL PR, core, 性能导向) | **75%** | 涉及持久化协议变更，需充分集成测试验证 |
| **#7677 (PR)** | Message Lookup Index 折叠入消息行，消除 1-3 倍 sibling 行写放大 | **中** (XL PR, core, 存储层重构) | **70%** | 兼容性回退分支完备，但迁移路径需谨慎验证 |
| **#7673 (Issue)** | BudgetLedger 截断启动双扣费 + 终态持久化前崩溃丢费 | **低** (刚报告，设计阶段) | **30%** | 需先达成记账语义共识，再实现；可能随 #7678 同步交付 |
| **#7672 (Issue)** | Typed ToolChoice Enum 替代过载字符串 | **低** (刚报告，跨 Provider 协调) | **20%** | 涉及 7+ Provider Encoder，协调成本高，可能分版本渐进 |

> **路线图读解**：**Q3 末将以 “Automation 确定性交付 + Coding Tool 统一合同 + WebUI 运营补齐” 三驾马车为主线**；存储层深度优化（#7677/#7678）与类型系统升级（#7672）将并行推进但不阻塞发布。

---

## 7. 用户反馈摘要：从评论中提炼的真实痛点

> **数据来源**：Issue 评论、PR Review、CI 日志片段（数据集仅含元数据，以下为基于标题/摘要的推断性画像，标注为【推断】）

| 痛点场景 | 代表性声音（推断） | 频次/强度 | 潜在解决动作 |
|----------|-------------------|-----------|--------------|
| **Live Canary 失信** | “每天醒来看 30/30 红，根本不敢信绿灯；排查半天全是 Harness 自己的锅”

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-16

> **数据统计周期**：2026-08-15 至 2026-08-16（UTC）  
> **数据来源**：GitHub Issues / PRs / Releases 实时数据

---

## 1. 今日速览

- **核心动态**：项目今日无新版本发布，核心活跃度极低。过去 24 小时的主要动作是 **GitHub Stale Bot 批量清理陈旧工单**：16 个 Issue 被标记 `[stale]` 并自动关闭，2 个 PR 合并/关闭。
- **有效交互**：仅有 2 个 Issue（`#1903` 会员登录失败、`#2046` Agent 记忆体系建议）保持 Open 状态并带有 `[stale]` 标签，说明社区近期缺乏新鲜反馈或维护者跟进。
- **代码库维护**：Dependabot 自动提交 4 个 CI 依赖升级 PR（`trufflehog`, `actions/checkout`, `dorny/paths-filter`, `actions/stale`），均处于待审核状态；1 个修复插件路径丢失的 PR (`#1879`) 及 1 个修复 Cron 子任务最终化的 PR (`#2234`) 已合并/关闭，属于技术债偿还。
- **健康度评估**：⚠️ **低活跃 / 维护模式**。项目处于“清理历史包袱”而非“功能迭代”阶段，核心维护者近期无明显 Feature 开发痕迹，社区高价值讨论（记忆体系、登录体验）长期悬而未决。

---

## 2. 版本发布

> **今日无新版本发布**（最近一次 Release 信息未在数据中体现）。

---

## 3. 项目进展：已合并/关闭的关键 PR

| PR | 标题 | 类型 | 核心变更 | 影响评估 |
| :--- | :--- | :--- | :--- | :--- |
| **[#1879](https://github.com/netease-youdao/LobsterAI/pull/1879)** | `fix: preserve manually-added plugin load paths on config sync` | **Bug Fix / 配置管理** | 修复 `OpenClawConfigSync.sync()` 覆盖 `plugins.load.paths` 导致用户手动安装的社区插件（如 `memory-lancedb-pro`）路径丢失的问题。 | ⭐⭐⭐ **高**：解决插件生态易用性阻断点，保护用户自定义扩展配置。 |
| **[#2234](https://github.com/netease-youdao/LobsterAI/pull/2234)** | `fix(openclaw): cron yield descendant finalization` | **Bug Fix / 核心引擎** | 修复 `sessions_yield` 后子 Agent 完成事件无法驱动父 Agent 继续执行；增加 Cron finalization 阶段的 yield continuation 循环，覆盖并行/串行子 Agent 场景。 | ⭐⭐⭐ **高**：修复多 Agent 协作流程中的阻塞与状态丢失，增强自动化任务可靠性。 |
| **Dependabot PRs (#2164-#2167)** | CI 依赖批量升级 | **Chore / 安全维护** | 升级 `trufflehog` (3.88→3.95), `actions/checkout` (v4→v6), `dorny/paths-filter` (v3→v4), `actions/stale` (v9→v10)。 | ⭐⭐ **中**：常规安全合规维护，`actions/checkout` v6 含破坏性变更需验证构建流程。 |

**进展总结**：项目推进了 **配置持久化修复** 与 **多 Agent 协作核心逻辑修复** 两项关键技术债偿还，但均为数月前提交的 PR，今日才合并/关闭，反映审核吞吐率极低。

---

## 4. 社区热点：高互动/高关注 Issue 深度解析

| Issue | 状态 | 评论/👍 | 核心诉求 | 维护者响应情况 |
| :--- | :--- | :--- | :--- | :--- |
| **[#1903](https://github.com/netease-youdao/LobsterAI/issues/1903)** | `OPEN` `[stale]` | 3 评论 / 0 👍 | **会员登录频繁失败，导致无法使用网易付费模型**；用户提供截图证据，呼吁改进登录方式。 | ❌ **无实质响应**，仅被 Stale Bot 标记。涉及商业化核心路径（付费模型访问），属 P0 级用户痛点。 |
| **[#2046](https://github.com/netease-youdao/LobsterAI/issues/2046)** | `OPEN` `[stale]` | 2 评论 / 0 👍 | **Agent 记忆体系产品建议**：Session 标题/元数据持久化、跨会话记忆检索、长期记忆结构化。附详细优先级排序方案。 | ❌ **无回应**。与 `#2040`、`#2041` 讨论形成呼应，社区对“记忆缺失”共识极高，但未纳入规划。 |
| **[#1885](https://github.com/netease-youdao/LobsterAI/issues/1885)** | `CLOSED` `[stale]` | 2 评论 / 0 👍 | **邮箱 Skill 路径穿越漏洞 (CVE 潜在)**：`imap.js` 未过滤附件文件名导致任意文件写入。 | ⚠️ **仅标记 Stale 关闭，未见修复 PR**。安全类 Issue 被归档处理，存在风险隐患。 |

**热点洞察**：
1.  **商业化基础设施失守**：`#1903` 登录失效直接阻断付费用户核心价值，却长达 3 个月无人处理。
2.  **架构级需求共识未转化**：记忆体系（`#2046`）、安全漏洞（`#1885`）、多 Agent 稳定性（`#2234` 已修复）构成“技术债三角”，维护者仅对底层引擎修复有动作，产品层规划缺位。

---

## 5. Bug 与稳定性：今日报告/关闭的缺陷

| 严重程度 | Issue | 现象 | 关联 Fix PR | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 - 阻断/安全** | **[#1885](https://github.com/netease-youdao/LobsterAI/issues/1885)** 邮箱 Skill 路径穿越 | 附件下载时拼接未过滤文件名，可导致任意文件写入/RCE | 无 | 🔴 **已关闭 (Stale)，未修复** |
| **P0 - 核心功能不可用** | **[#1903](https://github.com/netease-youdao/LobsterAI/issues/1903)** 会员登录失败 | 登录流程报错，无法授权使用网易付费模型 | 无 | 🟡 **Open (Stale)，无人跟进** |
| **P1 - 核心流程异常** | **[#1849](https://github.com/netease-youdao/LobsterAI/issues/1849)** 追问触发无限 `NO_REPLY` / 输出中断 | 任务被提前标记 complete，模型仍在输出导致前端无数据 | 无 | 🔴 **已关闭 (Stale)** |
| **P1 - 核心流程异常** | **[#1993](https://github.com/netease-youdao/LobsterAI/issues/1993)** AI Engine 连接丢失 | 桌面端直连频繁掉线，IM Bot 正常 | 无 | 🔴 **已关闭 (Stale)** |
| **P1 - 环境/构建阻断** | **[#2017](https://github.com/netease-youdao/LobsterAI/issues/2017)** 本地运行缺内置 Runtime | 提示“未检测到内置 OpenClaw runtime，请先执行打包前构建脚本” | 无 | 🔴 **已关闭 (Stale)** |
| **P2 - 体验/兼容性** | **[#1988](https://github.com/netease-youdao/LobsterAI/issues/1988)** 阿里百炼 qwen3.6-plus 强制走网易通道 | 模型路由逻辑硬编码/配置同步覆盖用户设置 | 可能关联 `#1879` | 🔴 **已关闭 (Stale)** |
| **P2 - UI/交互** | **[#1920](https://github.com/netease-youdao/LobsterAI/issues/1920)**, **[#1921](https://github.com/netease-youdao/LobsterAI/issues/1921)**, **[#1971](https://github.com/netease-youdao/LobsterAI/issues/1971)** | Cowork 空加载态、空状态缺图标、虚拟列表滚动异常 | 无 | 🔴 **均已关闭 (Stale)** |

**稳定性结论**：
- **存量 Bug 清零动作**：16 个 Issue 今日批量关闭，但绝大多数**无修复 PR、无 Root Cause 分析**，仅因 Stale Bot 策略归档。
- **高危遗留**：路径穿越漏洞 (`#1885`)、登录体系崩溃 (`#1903`)、本地开发环境不可用 (`#2017`) 三大 P0 级问题实质上**仍未解决**。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 社区热度 | 现有 PR/实现基础 | 入版概率判断 |
| :--- | :--- | :--- | :--- | :--- |
| **[#2046](https://github.com/netease-youdao/LobsterAI/issues/2046)** Agent 记忆体系 | Session 元数据持久化、跨会话检索、结构化长期记忆 | ⭐⭐⭐ (配合 `#2040`/`#2041` 讨论) | 无直接 PR；`#2234` 修复了底层 Yield 机制，为记忆写入铺路 | **低** – 无维护者回应，架构改动大，需专项立项 |
| **[#1880](https://github.com/netease-youdao/LobsterAI/issues/1880)** Hermes Agent 接入 | 参考 OpenWebUI 接入外部 Agent 能力 | ⭐ | 无 | **极低** – 已 Stale 关闭 |
| **[#2016](https://github.com/netease-youdao/LobsterAI/issues/2016)** OpenHuman 引擎 | 引入 OpenHuman 能力 | ⭐ | 无 | **极低** – 已 Stale 关闭 |
| **[#2036](https://github.com/netease-youdao/LobsterAI/issues/2036)** Gateway 事件增强 | 新增 `agent:turn/loop` 事件支持实时落盘 | ⭐ | 无 | **中** – 属基础设施完善，`#2234` 方向一致，但需 OpenClaw 上游配合 |

**路线图信号**：维护者当前仅响应 **CI 维护** 与 **核心引擎修复 (`#2234`)**，对**产品级特性（记忆、多 Agent 生态、商业化登录）缺乏规划落地动作**。下一版本大概率仅包含依赖升级与零星 Bug Fix。

---

## 7. 用户反馈摘要：真实痛点与场景

从 Issue 评论与描述中提炼的用户画像与痛点：

| 用户画像 | 核心场景 | 痛点原话/行为 | 满意度 |
| :--- | :--- | :--- | :--- |
| **付费个人开发者** | 使用网易付费模型进行日常编码/问答 | “会员登录频繁失败...无法使用网易付费的模型” (`#1903`) | 😡 **极差** – 核心付费链路中断 |
| **本地部署/二开工程师** | 自建 LobsterAI、安装社区插件、调试 OpenClaw | “配置文件也没用，系统会强制改成错误的” (`#1988`)；“未检测到内置 Runtime，请先执行打包前构建脚本” (`#2017`) | 😟 **差** – 配置易变、构建门槛高、插件路径易丢失 |
| **长周期 Agent 使用者** | 跨会话、跨任务积累知识、自动化流程 | “Agent 记忆高度依赖用户手动维护...大量信息丢失和重复劳动” (`#2046`) | 😐 **一般** – 核心差异化能力缺失 |
| **安全敏感用户** | 使用邮箱 Skill 处理附件 | 代码审计发现路径穿越，无官方修复回应 (`#1885`) | 😨 **不信任** – 安全响应机制缺位 |

---

## 8. 待处理积压：维护者需重点关注的“定时炸弹”

| 项目 | 链接 | 滞留时长 | 风险等级 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **会员登录体系崩溃 (P0)** | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | ~100 天 | 🔴 **商业风险** | **立即排期**：组织专

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-16

---

## 1. 今日速览
- **整体状态**：项目处于**高强度迭代期**，过去 24 小时合并/关闭 **12 个 PR**，新开/更新 **4 个待合并 PR**，代码库活跃度极高。
- **核心动向**：集中解决 **安全加固**（路径穿越、节点配对签名）、**基础设施修复**（gogcli/wacrawl 上游仓库迁移、macOS Bash 兼容性）、**会话管理增强**（main session 可删/归档）以及 **连接器生态扩展**（CalDAV、Gmail、Slack、Coder 沙箱）。
- **Issue 处理**：2 个 Bug 类 Issue 全部关闭（#1132、#1189），均有对应修复 PR 合并，响应及时。
- **技术债清理**：Dependabot 自动化依赖升级（PostCSS、js-yaml、Undici）同步推进，保持依赖新鲜度。
- **健康度评估**：🟢 **优秀** —— 合并率高（12/16），安全修复优先级明确，新功能与稳定性修复并行，社区响应迅速。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 关联 Issue | 影响面 |
|----|------|----------|------------|--------|
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | **Bug Fix / Feature** | 移除 gateway 中对 `main` session 的删除/归档限制，`clear_all` 仍保留主会话 | [#1132](https://github.com/moltis-org/moltis/issues/1132) | 会话管理，用户体验 |
| [#1191](https://github.com/moltis-org/moltis/pull/1191) | **Bug Fix** | 修正 `moltis sandbox build` 中 gogcli 模块路径指向 `openclaw` 组织 | [#1189](https://github.com/moltis-org/moltis/issues/1189) | 沙箱构建，CI/CD |
| [#1192](https://github.com/moltis-org/moltis/pull/1192) | **Bug Fix** | 同步修正 `wacrawl` skill 安装元数据至 `openclaw` 组织 | — | 技能系统，自动安装 |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) | **Security** | 强制网关验证节点配对签名，绑定服务端下发的挑战 | — | 集群安全，节点认证 |
| [#1186](https://github.com/github.com/moltis-org/moltis/pull/1186) | **Security / Bug Fix** | 恢复短语哈希前归一化（去横线、大写），修复大小写/格式不一致导致的解封失败 | — | Vault 解封，灾备恢复 |
| [#1194](https://github.com/moltis-org/moltis/pull/1194) | **Bug Fix** | 修复 `just local-validate-full` 在 macOS Bash 3.2 下空数组展开报错 | — | 开发工具链，跨平台兼容 |
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | **Feature (Large)** | 新增持久化日历/频道/邮件连接器（CalDAV、Gmail、Himalaya v2），含原子快照、调度、全文搜索 | — | 连接器生态，企业级集成 |
| [#1195](https://github.com/moltis-org/moltis/pull/1195) | **Feature** | Slack 原生实时任务卡片：生命周期更新、不透明 run-id、错误流清理 | — | Slack 集成，人机交互 |
| [#1196](https://github.com/moltis-org/moltis/pull/1196) | **Bug Fix / Perf** | 修复 ClawHub 技能搜索超时，元数据直传、owner-qualified 引用贯穿全流程 | — | 技能市场，RPC 性能 |
| [#1197](https://github.com/moltis-org/moltis/pull/1197) | **Feature / UX** | 命令面板“Ask agent”直接发起新会话并发送查询，保留来源会话上下文 | — | 命令面板，Agent 交互 |
| [#1198](https://github.com/moltis-org/moltis/pull/1198) | **Feature / Refactor** | OpenAI `reasoning_effort` + function tools 统一走 Responses API，复用请求构建 | — | LLM 网关，OpenAI 兼容层 |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | **Feature (Experimental)** | 新增 `zvec` 向量数据库记忆后端（feature-gated），基于 redb + 嵌入模型 | — | 记忆系统，可选后端 |

> **进展小结**：单日合并 **12 PR**，覆盖安全、基建、连接器、UX、实验性记忆后端，**里程碑式推进**了“企业级连接器”与“安全基线”两大主线。

---

## 4. 社区热点
| 排名 | 对象 | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | [#1132](https://github.com/moltis-org/moltis/issues/1132) | 👍 0 / 评论 1 / 更新今日 | 用户期望 `main` session 像普通会话一样可删/归档，**已由 #1182 修复并合并** |
| 2 | [#1189](https://github.com/moltis-org/moltis/issues/1189) | 👍 0 / 评论 0 / 更新今日 | `moltis sandbox build` 因上游 gogcli 迁移组织导致构建失败，**已由 #1191 修复并合并** |
| 3 | [#1180](https://github.com/moltis-org/moltis/pull/1180) | 👍 0 / 评论 0 / 更新今日 | **安全加固**：zip/HF 模型路径穿越导致任意文件写入 → RCE 风险，**待审核合并** |

> **分析**：社区关注点集中在 **可用性阻塞**（构建失败、会话受限）与 **供应链安全**（路径穿越、节点认证），维护团队响应极快（Issue-to-PR < 6h）。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 修复 PR |
|--------|------|------|---------|
| 🔴 **Critical (RCE 潜在)** | 恶意 zip / HuggingFace 模型可越界写文件，导致代码执行 | **Open** | [#1180](https://github.com/moltis-org/moltis/pull/1180) 待合并 |
| 🟠 **High** | `main` session 无法删除/归档，阻塞用户工作流 | **Closed** | [#1182](https://github.com/moltis-org/moltis/pull/1182) ✅ 已合并 |
| 🟠 **High** | `moltis sandbox build` 全量失败（gogcli 上游迁移） | **Closed** | [#1191](https://github.com/moltis-org/moltis/pull/1191) ✅ 已合并 |
| 🟡 **Medium** | `wacrawl` skill 安装元数据失效（同组织迁移） | **Closed** | [#1192](https://github.com/moltis-org/moltis/pull/1192) ✅ 已合并 |
| 🟡 **Medium** | Vault 恢复短语大小写/横线不一致导致解封失败 | **Closed** | [#1186](https://github.com/moltis-org/moltis/pull/1186) ✅ 已合并 |
| 🟢 **Low** | macOS Bash 3.2 下 `just` 空数组展开报错 | **Closed** | [#1194](https://github.com/moltis-org/moltis/pull/1194) ✅ 已合并 |

> **关注点**：**#1180 安全修复尚未合并**，建议优先审核并发布补丁版本。

---

## 6. 功能请求与路线图信号
| 信号来源 | 需求描述 | 已有实现 PR | 纳入下版本可能性 |
|----------|----------|-------------|------------------|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | 企业级持久化连接器（CalDAV/Gmail/Channel/邮件）+ 原子快照/调度/全文搜索 | ✅ 已合并 | 🟢 **极高** —— 核心连接器框架落地 |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | Coder 远程工作区沙箱后端（REST API + PTY WebSocket） | 🟡 Open | 🟡 **中高** —— 扩展沙箱生态，需充分测试 |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | `zvec` 向量数据库记忆后端（实验性，feature-gated） | ✅ 已合并 | 🟢 **高** —— 可选后端，默认不开启 |
| [#1195](https://github.com/moltis-org/moltis/pull/1195) | Slack 原生任务卡片（实时生命周期、隐私保护） | ✅ 已合并 | 🟢 **高** —— 增强 Slack 集成体验 |
| [#1197](https://github.com/moltis-org/moltis/pull/1197) | 命令面板一键发起 Agent 会话 | ✅ 已合并 | 🟢 **高** —— UX 微创新，零破坏性 |
| [#1198](https://github.com/moltis-org/moltis/pull/1198) | OpenAI reasoning + tools 统一走 Responses API | ✅ 已合并 | 🟢 **高** —— 修正协议分支，提升兼容性 |

> **路线图推断**：**v0.12 / v0.13** 将以 **“连接器生态成熟度”** 与 **“安全基线”** 为双主题；Coder 沙箱若测试通过将作为差异化能力入列。

---

## 7. 用户反馈摘要
- **痛点 1**：`main` session 不可删/归档导致会话列表杂乱，用户期望完全自主管理（#1132 评论）。
- **痛点 2**：`moltis sandbox build` 开箱即用失败，阻断新用户上手与 CI 流水线（#1189 无评论但隐含阻塞性）。
- **正向信号**：无负面评价涌现；大型功能 PR（#1190、#1195、#1199）由核心维护者 `penso` 主导，说明内部规划清晰、外部贡献者主要集中在修复与小增强。

---

## 8. 待处理积压（需维护者关注）

| 对象 | 类型 | 停留时长 | 风险 | 建议动作 |
|------|------|----------|------|----------|
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | **Security PR** | 16 天（创建 07-31） | 潜在 RCE，影响所有解压模型/zip 的用户 | **P0 审核合并**，考虑立即发布安全补丁版 |
| [#1186](https://github.com/moltis-org/moltis/pull/1186) | **Bug Fix PR** | 7 天（创建 08-09） | Vault 解封失败场景虽少但影响灾备信心 | 已合并 ✅ 无需行动 |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | **Feature PR** | 1 天（创建 08-15） | 新增沙箱后端，复杂度高，需集成测试 | 安排 **E2E 测试**，确定是否进下版本 |
| [#1200](https://github.com/moltis-org/moltis/pull/1200) | **Dependabot PR** | 0 天（今日创建） | 依赖升级常规维护 | 自动化合并策略生效即可 |

---

> **下一步关注**：  
> 1. **#1180 安全合并** 是否触发补丁发布（建议 `v0.11.x` 热修复）。  
> 2. **#1199 Coder 沙箱** 集成测试结果，决定里程碑收录。  
> 3. 连接器框架（#1190）后续是否补全 **OAuth 刷新令牌自动轮换** 与 **提供者健康检查** 指标。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-16

> **数据周期**：2026-08-15 00:00 – 23:59 (UTC)  
> **数据来源**：GitHub Issues / PRs / Releases  
> **统计口径**：过去 24 小时新增/更新的 Issues 与 PRs

---

## 1. 今日速览
- **活跃度评级**：🟢 **高** — 单日产生 **10 个 Issue**（1 关闭）与 **11 个 PR**（均为待审核），零合并、零发版，呈现典型的“功能并行开发 + 缺陷集中暴露”阶段特征。
- **核心看点**：视频工具链连续暴雷（内联大小硬编码、工具结果静默丢帧），已有修复 PR (#7061) 介入；OAuth2 刷新令牌轮转缺陷导致远程 MCP 长期失效；Cron 任务更新静默失败已定位并给出修复 (#7055)；Provider 统一发现/路由重构 (#6302) 与 DataPaw 原生运行时 (#6940) 两大架构级 PR 持续推进。
- **风险提示**：视频、Matrix E2E、图片持久化、ACP 竞态等多条用户感知路径同时存在回归/缺失，建议近期安排一次**稳定性专项冲刺**，避免技术债积压影响 v2.2 发版节奏。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 项目进展（重要 PR 推进）

| PR | 标题/链接 | 类型 | 核心推进内容 | 审核状态 |
|----|-----------|------|--------------|----------|
| #7061 | **fix(video): deliver tool-result videos on OpenAI Responses API** | 🐛 Bug Fix | 修复 `view_video` 在 OpenAI Responses API / Volcengine Ark 下工具结果视频帧**完全不进入模型上下文**的两大缺陷：① 死促销门（`promote_tool_result_videos=False` 硬编码）② 格式化器实例化时未传递 `promote_tool_result_videos`。直接解决 #7059。 | 🟡 Ready for Review |
| #7055 | **fix(cli): sync top-level text on agent cron --text update** | 🐛 Bug Fix | 修复 `qwenpaw cron update --text` 对 agent 类型任务**静默失败**问题：CLI 仅更新了嵌套 `config.text` 而未同步顶层 `text` 字段，导致后续 list/get 仍显示旧 prompt。解决 #7048。 | 🟡 Ready for Review |
| #7057 | **fix(shell): add user-local bin dirs to subprocess PATH** | 🔧 Enhancement | 解决 systemd/Launchd/Docker 环境下守护进程 PATH 被剥离导致 `gh`、`cmake`、`lark` 等用户级 CLI 不可用的问题，自动注入 `~/.local/bin` 等目录。 | 🟡 Ready for Review |
| #6302 | **feat: unify provider discovery, model metadata, routing, and agent controls** | 🏗️ Architecture | 引入 **目录驱动的 Provider 模型系统**：运行时模型发现、能力感知路由、降级支持、重新设计的模型选择体验。属于核心架构重构，影响面极广，需充分回归。 | 🟡 Under Review |
| #6940 | **feat(pawapp): add native DataPaw app runtime and durable analysis workspace** | ✨ Feature | 新增 **DataPaw 原生运行时** 与持久化分析工作区，配套独立 infra 仓库。标志着产品向“数据分析 Agent”场景延伸的关键里程碑。 | 🟡 Ready for Review |
| #6623 | **fix(acp): prevent final text loss when notifications race the prompt response** | 🐛 Bug Fix | 修复 ACP 传输层中 `session/update` 通知与 `session/prompt` 响应同 TCP 段到达时，**最终文本丢失**的竞态条件。解决 #6625。 | 🟡 Under Review |
| #7054 | **feat(chrome): support remote bridge endpoint for LAN/network browsers** | ✨ Feature | Chrome 插件支持非回环地址桥接端点，允许局域网/远程浏览器通过 Native Messaging 连接 QwenPaw 守护进程。 | 🟡 Ready for Review |
| #7001 | **feat(matrix): isolate session and memory per sender in group rooms** | ✨ Feature | 解决 Matrix 群聊中所有成员共享同一 `session_id` 导致上下文/记忆污染的问题，按 `sender_id` 隔离会话与记忆。 | 🟡 Ready for Review |
| #7050 | **feat(console): add per-cron-job model override picker** | ✨ Feature | Console 侧为每个 agent-type cron 作业增加模型覆盖选择器，后端契约已就绪。 | 🟡 Ready for Review |
| #7049 | **feat(chats): add limit/before pagination to GET /chats/{chat_id}** | ✨ Feature | 聊天历史接口引入分页（`limit`/`before`），配合 #3915 虚拟滚动，解决长对话全量加载卡顿。 | 🟡 Ready for Review |
| #7033 | **feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix** | 🏗️ Feature | 技能系统引入**动态加载/卸载**、**空闲自动卸载**，修复 frontmatter 与惰性技能路径 Bug，为运行时技能管理奠基。 | 🟡 Ready for Review |

> **整体进度**：11 个 PR 均处于“待人工审核”，**零合并**表明当前审核带宽可能成为瓶颈。建议维护者优先合并 #7061、#7055、#7057 三个高确定性修复，释放用户痛点压力。

---

## 4. 社区热点（高互动/高关注）

| 排名 | Issue/PR | 标题 | 互动量 (👍/评论) | 核心诉求分析 |
|------|----------|------|------------------|--------------|
| 1 | **#3915** | **Introduce virtual scrolling for Console WebUI** | 👍 1 / 💬 3 | 长对话下 DOM 全量渲染导致严重卡顿，用户期望分页/虚拟滚动。**#7049 分页 API 已就绪**，前端虚拟列表实现成为下一步关键。 |
| 2 | **#6476** (CLOSED) | **Matrix E2E 加密不可用** | 👍 0 / 💬 3 | `matrix-nio` 依赖 `olm`/`vodozemac`，系统层装库后 Python 绑定仍失败。关闭原因未公开，疑似规避方案（如降级明文或外部网关）已落地，但**加密合规需求**未根治。 |
| 3 | **#7059** / **#7060** | **视频工具链双重缺陷** | 👍 0 / 💬 1+1 | 企业级用户（Volcengine Ark）反馈视频**完全不可用**；内联 2MB 硬编码阻断大视频。**#7061 已给出修复**，社区期待尽快合并回主干。 |
| 4 | **#7053** | **OAuth2 refresh_token 轮转不持久化** | 👍 0 / 💬 1 | 远程 MCP（如 XMind）采用轮转刷新令牌，当前实现**仅更新 access_token、丢弃新 refresh_token**，且无主动续期，导致“永久降级为人工重新授权”。安全与可用性双重痛点。 |
| 5 | **#7056** | **后台任务回调/通知机制缺失** | 👍 0 / 💬 1 | 仅支持轮询 `GET /task/{id}`，缺乏 Webhook/Server-Sent Events 等推送机制，影响自动化编排场景。 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0 阻塞** | **#7059** | `view_video` 返回成功但模型**零帧接收**，OpenAI Responses API / Volcengine Ark 全线受影响 | 视频理解核心场景，企业用户不可用 | ✅ **#7061** (待审) |
| **P0 阻塞** | **#7053** | OAuth2 轮转刷新令牌**不持久化**，远程 MCP 永久失效需人工重授权 | 所有依赖 OAuth2 Authorization Code + Rotating Refresh Token 的远程 MCP | ❌ 无 |
| **P1 严重** | **#7060** | 视频内联大小**硬编码 2MB**，Provider 配置 `max_inline_media_bytes` 无效 | 大视频文件自动降级为文本占位，模型不可见 | ❌ 无 (建议合并入 #7061 或单独 PR) |
| **P1 严重** | **#7051** | Console 图片附件**会话重载后丢失**，后端返回 data URL 但前端显示损坏缩略图 | 图片多模态交互持久化体验 | ❌ 无 |
| **P1 严重** | **#7048** | `cron update --text` 对 agent 任务**静默失败**（rc=0 但未生效） | 定时任务运维自动化 | ✅ **#7055** (待审) |
| **P2 一般** | **#6476** (CLOSED) | Matrix E2E 解密依赖 `olm`，Python 绑定安装失败 | Matrix 加密合规场景 | ⚠️ 已关闭，方案未透明 |
| **P2 一般** | **#6625** (隐含) | ACP 竞态导致**最终文本丢失** | ACP 协议客户端交互 | ✅ **#6623** (Under Review) |
| **P3 轻微** | **#7058** | Web UI 移除 `native` 上下文策略选择器，用户被锁定 `scroll` | 长上下文性能敏感用户 | ❌ 无 (仅需回归 UI) |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/实现就绪度 | 纳入下一版本可能性 |
|----------|----------|---------------------|---------------------|
| **#7056** | 后台任务**回调/通知机制**（Webhook/SSE）替代轮询 | 无 PR，需后端事件总线 + API 扩展 | 🟡 中（自动化编排强需求，但涉及接口变更需谨慎） |
| **#7052** | 插件 API 增加 **`system_prompt` 权限**（企业提示词隐私） | 无 PR，涉及插件沙箱权限模型扩展 | 🟡 中（企业级隐私合规刚需，实现相对隔离） |
| **#7058** | 恢复 Console **原生上下文策略** 选择器 | 后端已支持 `LightContextConfig.strategy: "native" \| "scroll"`，仅缺前端入口 | 🟢 **高**（零破坏性，纯 UI 回归，极大概率 v2.2 合入） |
| **#3915** + **#7049** | Console **虚拟滚动/分页加载**长对话 | #7049 分页 API 已就绪，前端虚拟列表待实现 | 🟢 **高**（性能阻塞项，配套 PR 已铺路） |
| **#7001** | Matrix 群聊**按发送人隔离会话/记忆** | #7001 PR 已完成核心逻辑 | 🟢 **高**（修正架构缺陷，已有 PR） |
| **#6940** | **DataPaw 原生运行时** 与持久化工作区 | #6940 PR 含完整 UI 与 infra | 🟢 **高**（战略级新能力，配套独立仓库） |
| **#6302** | **Provider 统一发现/路由/元数据** 重构 | #6302 大型 PR 审核中 | 🟡 中（核心架构变更，需充分回归，可能延后至 v2.3） |
| **#7033** | **动态技能加载/卸载** 运行时基建 | #7033 PR 已实现核心生命周期 | 🟢 **高**（插件生态前置设施） |

---

## 7. 用户反馈摘要（真实痛点与场景）

| 场景 | 用户原声/推断痛点 | 满意度倾向 |
|------|-------------------|------------|
| **企业级视频分析 (Volcengine Ark)** | “`view_video`

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-08-16

---

## 1. 今日速览

ZeroClaw 项目今日保持**高强度架构演进与核心基建并行**的活跃态势。过去 24 小时累计 **50 条 Issue 更新**（46 活跃/新开，4 关闭）与 **50 条 PR 更新**（44 待合并，6 合并/关闭），零版本发布。社区核心精力集中在 **RFC 级架构决策**（Chat Completions 兼容层、运行时会话所有权、统一附件架构、安全态势、内存存储分离、实时语音通道、桌面控制、遥测策略、SOP 权限契约、Agent Plugins 标准加载）与 **核心运行时稳定性修复**（Cron 锁超时、WebSocket 断连保活、风险配置语义修正、Webhook 审计脱敏、SOP 双重编码解析）上。PR 队列呈现“大量大型增强并行、少量关键修复快速合并”特征，项目处于 **v0.9.0 里程碑冲刺前的架构收敛期**，技术债偿还与协议标准化同步推进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响评估 |
|----|------|----------|----------|
| [#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) | **Provider 增强** | Anthropic 原生 `stop_reason: "refusal"` 现映射为类型化 `AnthropicRefusalError`，不再视为空成功 | **高**：解决安全拒答被误判为成功的数据完整性问题，为后续 fallback 链路奠基 |
| [#9263](https://github.com/zeroclaw-labs/zeroclaw/pull/9263) | **可靠性增强** | 客户端可靠性层识别 `AnthropicRefusalError` 并触发配置的 `fallback_models` 客户端侧降级 | **高**：完成 Anthropic 拒答→客户端降级闭环 |
| [#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265) | **Provider 增强** | 新增 `server_fallback_models` 配置，启用 Anthropic 服务端侧单次调用多模型 fallback | **中**：提供更低延迟的服务端降级路径，需运营商支持 |
| [#9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266) | **Observability** | 响应新增 `NativeChatResponse.model`（实际服务模型）与 `AnthropicUsage.iterations`（降级迭代）字段 | **中**：可观测性增强，便于成本/性能归因 |
| [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) | **Channel 集成** | Channel 编排器在 post-loop 暴露 `scope_provider_fallback` 通知，前端可见降级提示 | **中**：用户感知层闭环，Web/ACP/CLI 统一收到 fallback notice |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | **Config 修复** | `config set` 失败时回滚自动创建的 map alias，事务性写入 | **中**：防止部分写入导致配置状态不一致 |

> **合并小结**：Anthropic 拒答/降级完整链路（检测→客户端降级→服务端降级→遥测→用户通知）在 4 个堆叠 PR 中**一次性合并入主干**，体现核心维护者对 Provider 可靠性栈的强管控。配置事务性修复同步落地。

---

## 4. 社区热点：高讨论度 Issues/PRs 深度解析

### 🔥 Top 3 活跃 RFC（架构决策层）

| Issue | 评论 | 核心诉求 | 当前阶段 | 关键分歧/阻碍 |
|-------|------|----------|----------|---------------|
| [#8603 RFC: ZeroClaw Chat Completions Profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 21 | **暴露 OpenAI Chat Completions 兼容 HTTP 端点**，接入 Open WebUI/LobeChat/Continue/Aider/LangChain 等生态 | 需 Maintainer Review，`risk:high` | 1. 是否作为 Gateway 内置 profile 还是独立服务<br>2. 流式/工具调用/多模态映射完整度<br>3. 认证/配额/审计与现有 ACP/WebSocket 体系的边界 |
| [#9487 RFC: Runtime-owned Conversation Sessions & Transport Adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 17 | **运行时拥有会话生命周期**，引入 `InboundAction` 统一入口，解耦 Transport（WS/ACP/Webhook/Chat Completions） | 修订 v2 已批准边界，`risk:high` | 1. 持久化承认语义与歧义结果处理<br>2. 现有 Channel/Gateway 代码迁移范围巨大 |
| [#9488 RFC: Unified Attachment Architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 16 | **统一 Web Chat 与所有 Channel 的附件模型**（上传、引用、渲染、权限、TTL） | Proposed，`risk:high` | 1. 对象存储后端抽象与签名 URL 策略<br>2. 大文件分片/断点续传<br>3. 跨 Channel 附件引用隔离 |

### 🔥 高关注度工程/运维 Issue

| Issue | 评论 | 信号 |
|-------|------|------|
| [#6954 RFC: Provenance & Conversation Binding for Internally Initiated Turns](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 13 | Cron/定时/后台任务发起的 Agent 轮次需可追溯、绑定会话、定义回复契约 —— **自主代理能力的前置依赖** |
| [#6971 RFC: Security Posture & Credential Boundaries](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 13 | 全景安全态势可视化：凭证、入口信任、沙箱、工具审批、Channel 授权、Gateway 配对、收据、脱敏 —— **合规与运维审计刚需** |
| [#9103 RFC: Separate Authoritative Memory from Enrichment Connectors](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | 12 | `memory.backend` 现混淆“权威存储”与“Lucid 等 enrichment connector”，拆分后可独立决策 Qdrant/Lucid 留存 —— **存储架构解耦** |
| [#8780 RFC: Realtime Speech-to-Speech Channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | 11 | 引入 Broker 契约接入 Gemini Live 实时语音，Feature-gated —— **多模态交互前沿探索** |
| [#9621 RFC: Staged Opt-in Product Telemetry](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | 5 | 运营商审核上报的分级遥测，解决“功能是否真有人用”的决策盲区 —— **数据驱动路线图** |

### 🔥 PR 讨论热点（大型增强并行审查中）

| PR | 评论 | 状态 | 关注点 |
|----|------|------|--------|
| [#9109 feat: Native Hailo-Ollama Support](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | 高 | `needs-author-action`, `size:XL` | 专用 Provider 适配 Hailo 硬件加速 Ollama，验证矩阵扩展 |
| [#8337 feat: Herdr Agent Reporting](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) | 高 | `needs-author-action`, `size:XL` | CLI 交互态上报 Herdr（idle/working/blocked），复用 Observer 事件 |
| [#9002 fix: Keep Agent Turns Alive After Viewer Disconnect](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 高 | `priority:p1`, `size:XL` | **WebSocket 视图非所有者化**，浏览器睡眠/导航不再取消 Agent 任务 —— 核心 UX 修复 |
| [#9320 fix: Cron Job Wall-clock Timeout](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | 高 | `priority:p1`, `size:XL` | Cron 任务引入实时超时释放锁，防止饥饿 —— 稳定性关键 |
| [#9739 feat: Zerocode Multi-session Panes](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | 高 | `size:XL` | TUI 多会话面板、Agent 侧边栏、Quickstart 启动器 —— **终端原生体验里程碑** |
| [#9867 ci: Automate PR Size Labels](https://github.com/zeroclaw-labs/zeroclaw/pull/9867) | 高 | `type:ci` | 基于有效变更行自动打标，排除文档/生成文件，解决人工维护滞后 |

---

## 5. Bug 与稳定性：今日报告/修复追踪

| 严重度 | Issue/PR | 标题 | 状态 | 关联 Fix PR | 备注 |
|--------|----------|------|------|-------------|------|
| **P1 / S1** | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS Desktop App 重启后窗口消失/空白 | `CLOSED` (duplicate) | — | 标记重复，原根因 Issue 未在列表中，需追踪原 Issue |
| **P1** | [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | Dashboard WS 断开导致 Agent Turn 被取消 | `OPEN` (需作者行动) | **#9002 自身** | 已实现修复，待 Review 合并，**高优先级阻塞用户流** |
| **P1** | [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron Agent Job 无超时导致锁永不释放 | `OPEN` (需作者行动) | **#9320 自身** | 已实现壁钟超时 + 锁释放，待 Review 合并 |
| **P1** | [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) | `RiskProfileConfig.allowed_tools` 空数组语义错配（应 deny-all 却 fail-open） | `OPEN` (需作者行动) | **#9753 自身** | 三态语义修正（omitted/[]/nonempty），安全边界修复 |
| **P1** | [#9995](https://github.com/zeroclaw-labs/zeroclaw/pull/9995) | Webhook 审计导出未脱敏凭证/Token/内联图片 | `OPEN` (需作者行动) | **#9995 自身** | 审计日志泄露风险，已实现 scrub 逻辑 |
| **P2** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | Cron 自定义 Shell 测试并发下 `ETXTBSY` 误报红 | `OPEN` (accepted) | — | 测试层面竞态，污染 CI 信号，需隔离/重试机制 |
| **P2** | [#9470](https://github.com/zeroclaw-labs/zeroclaw/issues/9470) | Reliable Fallback 遥测归因错误 + 陈旧提示 | `OPEN` (accepted, follow-up) | — | 可观测性准确性缺陷，影响运营判断 |
| **P2** | [#9954](https://github.com/zeroclaw-labs/zeroclaw/pull/9954) | SOP 步骤输出双重 JSON 编码导致 Schema 校验绕过 | `OPEN` (需 Maintainer Review) | **#9954 自身** | 数据完整性风险，已实现 unwrap 修复 |

> **稳定性趋势**：P1 级阻塞性 Bug 均已有 **对应 Fix PR 进入审查**，修复覆盖 **核心运行时（WS 保活、Cron 锁）、安全边界（Risk Profile、Webhook 脱敏）、数据正确性（SOP 双重编码）**。测试竞态（`ETXTBSY`）为新引入并行门禁暴露的基建问题。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 成熟度 | 关联 PR/RFC | 入版本可能性 |
|------|------|--------|-------------|--------------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | **OpenAI Chat Completions 兼容层** | RFC 讨论深入，21 条评论 | 无 PR | **高**（生态接入刚需，`risk:high` 需拆阶段） |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | **运行时会话所有权 + Transport Adapter** | RFC v2 已批准边界 | 无 PR | **高**（架构统一前置，配合 #8603） |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | **统一附件架构** | Proposed | 无 PR | **中高**（Web/Channel 共性强，存储抽象可复用） |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*