# OpenClaw 生态日报 2026-06-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-20 00:39 UTC

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

# OpenClaw 项目动态日报 — 2026-06-20

---

## 1. 今日速览

OpenClaw 今日处于**高活跃但积压严重**的状态。过去 24 小时内 Issues 与 PR 更新量均达到 500 条，其中新开/活跃 Issues 442 条、待合并 PR 457 条，显示社区贡献极为踊跃，但维护者审查带宽明显不足。项目发布了 **v2026.6.9-beta.1**，聚焦 Telegram 富文本投递改进。当前积压的 P0/P1 级 Issue 中，多个涉及内存泄漏、消息丢失和崩溃循环等核心稳定性问题，需要维护者优先关注。

---

## 2. 版本发布

### v2026.6.9-beta.1

**核心更新：Telegram 富文本投递增强**

- Telegram 频道现支持富 HTML 发送，保留富 Markdown 和贴纸路径渲染
- 进度草稿和命令输出的渲染更加忠实
- mentions 和 spooled handlers 保持在正确的投递路径上

**关联 PR：** #93286、#93164、#93124、#93364、#9313（系列合并）

> ⚠️ **注意：** 此版本为 beta 标记，建议生产环境用户暂缓升级。此前 v2026.6.x 系列已引入多项回归（见第 5 节），建议等待稳定版。

---

## 3. 项目进展

今日合并/关闭的 PR 共 43 条，以下为重点推进项：

| 方向 | 内容 | 代表 PR |
|------|------|---------|
| **Telegram 投递** | 富 HTML/Markdown 渲染、sticker 路径、mention 路由 | #93286 系列 |
| **Matrix 渠道** | MiniMax `mm:` 命名空间 reasoning tag 识别（monitor 路径） | #93806（已合并）、#93874（已合并） |
| **Cron 可靠性** | 隔离 cron 会话的 A2A announce 流程修复 | #93826（待合并） |
| **Doctor 工具** | openai-codex 迁移时增加 OAuth 重新认证提示 | #95138（待合并） |
| **UI 修复** | 发送后清除 composer 防止残留文本 | #95143（待合并） |

**整体评估：** 项目在渠道兼容性（Telegram、Matrix）和 cron 可靠性方向稳步前进，但大量 PR 处于 "waiting on author" 或 "needs proof" 状态，合并节奏偏慢。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**① [#88838] SQLite session/transcript 迁移跟踪** — 31 条评论
> 核心架构级 Issue，讨论如何通过 branch-by-abstraction 模式将 session/transcript 运行时状态迁移到 SQLite，避免一次性大规模重写。这是当前最活跃的技术讨论，涉及 `impact:session-state` 和 `impact:message-loss`。
> 🔗 https://github.com/openclaw/openclaw/issues/88838

**② [#85333] `openclaw doctor --fix` 性能退化 4-5x** — 13 条评论
> 2026.5.20 版本中 doctor 命令从 55s 退化到 229s+，session snapshot 路径遍历成为瓶颈。已标记 stale，但问题未解决。
> 🔗 https://github.com/openclaw/openclaw/issues/85333

**③ [#91588] Gateway 内存泄漏 — RSS 从 350MB 增长到 15.5GB** — 12 条评论
> P0 级严重问题，导致 OOM 崩溃和 launchd 重启循环。社区高度关注，但目前无关联 PR。
> 🔗 https://github.com/openclaw/openclaw/issues/91588

**④ [#63839] Per-agent memory-wiki vault 配置** — 10 条评论，9 👍
> 多 agent 场景下每个 agent 需要独立的知识 wiki，而非共享全局 vault。社区需求强烈（9 个赞），但长期未推进。
> 🔗 https://github.com/openclaw/openclaw/issues/63829

**⑤ [#92043] 180s compaction 超时导致合法长会话失败** — 8 条评论
> 默认 compaction 超时从 900s 降至 180s 后，长历史/慢提供商的安装场景下 compaction 反复失败。
> 🔗 https://github.com/openclaw/openclaw/issues/92043

### 📊 社区诉求分析

当前社区最集中的诉求集中在三个方向：
1. **稳定性** — 内存泄漏、OOM、崩溃循环是最高优先级痛点
2. **Session/Compaction 架构** — SQLite 迁移、超时配置、子 agent 交付可靠性
3. **多租户/多 Agent 隔离** — per-agent 配置、topic-session 家族

---

## 5. Bug 与稳定性

### 🔴 P0 — 严重（崩溃/数据丢失）

| Issue | 问题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏，RSS 350MB→15.5GB，OOM 崩溃 | OPEN | ❌ 无 |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | 5.28→6.1 升级后 cron store 静默迁移到 SQLite，delivery.mode 默认值变更导致 channel 错误 | OPEN | ❌ 无 |

### 🟠 P1 — 高（功能损坏/回归）

| Issue | 问题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | Matrix channel 在 v2026.6.1 中崩溃（TypeError: Cannot read properties of undefined） | OPEN | ❌ 无 |
| [#92460](https://github.com/openclaw/openclaw/issues/92460) | 隔离 cron 完成 announcer 丢失 delivery.channel | OPEN | ❌ 无 |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | 子 agent 完成交付在 requester 会话失效时失败 | OPEN | ❌ 无 |
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | 预置 SOUL.md/IDENTITY.md 导致 bootstrap 被自动完成并删除 BOOTSTRAP.md | OPEN | ❌ 无 |
| [#92415](https://github.com/openclaw/openclaw/issues/92415) | `/model` 切换后 AgentSession.model 快照未刷新 | OPEN | ❌ 无 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay 产生 CPU 密集型进程导致 gateway RPC 停滞 | OPEN | ❌ 无 |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | 隔离 cron 持续 "LLM request failed"，模型调用从未到达 provider | OPEN | ❌ 无 |
| [#93794](https://github.com/openclaw/openclaw/issues/93794) | v2026.6.8 Telegram Web 消息不再支持 | **CLOSED** | ✅ 已修复 |
| [#92094](https://github.com/openclaw/openclaw/issues/92094) | message tool action=send 返回 "unsupported channel: telegram" | OPEN | ❌ 无 |

### 🟡 P2 — 中（性能/体验退化）

| Issue | 问题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | doctor --fix 性能退化 4-5x | OPEN (stale) | ❌ 无 |
| [#91223](https://github.com/openclaw/openclaw/issues/91223) | active-memory 插件导致 prompt cache hit rate 从 99.9% 降至 22% | OPEN | ❌ 无 |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | launchd plist StandardErrorPath 硬编码为 /dev/null，隐藏 gateway stderr | OPEN | ❌ 无 |
| [#93905](https://github.com/openclaw/openclaw/issues/93905) | /usage 命令在 Telegram 中不再工作 | OPEN | ❌ 无 |
| [#93928](https://github.com/openclaw/openclaw/issues/93928) | drive list/info 忽略分页，超过第一页的文件报 "File not found" | OPEN | ❌ 无 |

### 稳定性总结

**高风险信号：** P0 内存泄漏（#91588）和 cron 静默迁移（#90378）均无修复 PR，且影响生产环境。P1 中 Matrix 渠道崩溃（#90325）和 Telegram 消息发送失败（#92094）是跨版本回归，影响面广。整体来看，v2026.6.x 系列引入的回归问题多于修复，建议维护者考虑发布修复版本。

---

## 6. 功能请求与路线图信号

### 高需求功能（按社区反响排序）

| Issue | 需求 | 👍 | 关联 PR | 可能性 |
|-------|------|-----|---------|--------|
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault 配置 | 9 | 无 | 🔵 低（长期未推进） |
| [#53638](https://github.com/openclaw/openclaw/issues/53638) | Per-channel/group/DM model override | 2 | [#95120](https://github.com/openclaw/openclaw/pull/95120)（directUserId 支持） | 🟡 高（PR 已提交） |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | Topic-session 家族（多命名上下文 lane） | 1 | 无 | 🔵 低 |
| [#46656](https://github.com/openclaw/openclaw/issues/46656) | Webchat/Control UI 内联按钮支持 | 1 | 无 | 🔵 低 |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) | Pre-compaction memory flush 的 bounded/validated append 语义 | 1 | 无 | 🟡 中（与 compaction 架构相关） |
| [#93884](https://github.com/openclaw/openclaw/issues/93884) | 文档化 gateway host agent 运行时边界 | 1 | 无 | 🟢 高（纯文档） |

### 路线图判断

- **近期可能落地：** per-DM model override（PR #95120 已提交）、Control UI 插件入口点（PR #80388 待审查）
- **中期架构方向：** SQLite session 迁移（#88838 讨论活跃）、compaction 超时优化
- **长期积压：** per-agent vault、topic-session 家族

---

## 7. 用户反馈摘要

### 😤 痛点

1. **升级恐惧：** 多个用户报告 v2026.6.x 升级后出现 Matrix 崩溃、cron 静默迁移、doctor 性能退化等问题，用户对版本升级信心不足。（#90325、#90378、#90213）

2. **消息丢失：** 隔离 cron 交付失败、子 agent 完成投递失败、delivery-recovery 在 gateway 重启后失效——多个独立报告指向消息可靠性问题。（#92460、#92076、#91212）

3. **内存/OOM：** 生产环境中 gateway 内存持续增长最终导致 OOM，用户被迫手动重启。（#91588）

4. **文档不足：** Kubernetes 部署文档被评价为 "awkward"，gateway 运行时边界缺乏文档。（#91455、#93884）

5. **多 Agent 隔离：** 多 agent 用户强烈需要 per-agent 配置隔离，而非全局共享。（#63829）

### 😊 满意点

- **Telegram 投递改进** 获得正面反馈，富 HTML 和 markdown 渲染是用户期待已久的功能
- **Doctor 工具** 虽然性能退化，但其自动修复能力被认可（#85334）

### 典型使用场景

- **多 Agent + 多 Channel：** 用户在 Feishu、Telegram、Matrix 等多渠道部署，需要 per-channel 模型覆盖和隔离 session 管理
- **长时间运行：** 用户在 VPS 上 24/7 运行 gateway，对内存泄漏和 OOM 极为敏感
- **Cron 自动化：** 大量用户使用隔离 cron 进行自动化任务，cron 可靠性直接影响业务

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue | 创建日期 | 问题 | 优先级 | 建议动作 |
|-------|----------|------|--------|----------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 2026-06-09 | Gateway 内存泄漏 OOM | P0 | 🔴 立即分配 owner |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | 2026-06-04 | Cron 静默迁移 + delivery 默认值变更 | P0 | 🔴 需要迁移回滚方案 |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | 2026-04-09 | Per-agent memory-wiki（9 赞） | P2 | 🟡 纳入路线图讨论 |
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | 2026-05-22 | Doctor 性能退化（已 stale） | P1 | 🟡 确认是否仍存在 |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | 2026-06-04 | Matrix 渠道崩溃 | P1 | 🔴 跨版本回归，需 hotfix |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | 2026-06-05 | launchd stderr 被丢弃 | P2 | 🟡 5.28 回归 |

### 📋 长期未合并的重要 PR

| PR | 创建日期 | 内容 | 状态 |
|----|----------|------|------|
| [#59859](https://github.com/openclaw/openclaw/pull/59859) | 2026-04-02 | GTK-native Linux 桌面应用 | needs proof |
| [#39386](https://github.com/openclaw/openclaw/pull/39386) | 2026-03-08 | Gateway 子会话事件转发 | waiting on author |
| [#38295](https://github.com/openclaw/openclaw/pull/38295) | 2026-03-06 | 去重配置警告 spam + 慢重启风暴 | waiting on author |
| [#80388](https://github.com/openclaw/openclaw/pull/80388) | 2026-05-10 | Control UI 插件入口点 | waiting on author |
| [#92725](https://github.com/openclaw/openclaw/pull/92725) | 2026-06-13 | External reranker 支持 | waiting on author |

> **维护者建议：** 当前待合并 PR 457 条，建议优先审查标记为 "ready for maintainer look" 的 PR（如 #94369、#94038、#95129、#93926、#94096），这些已有充分证明且风险可控。

---

*日报生成时间：2026-06-20 | 数据来源：GitHub openclaw/openclaw | 分析：OWL*

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告

**日期：2026-06-20 | 分析：OWL**

---

## 1. 生态全景

2026 年 6 月，个人 AI 助手/自主智能体开源生态正处于**从功能扩张向稳定性夯实的关键转折点**。今日追踪的 13 个项目中，6 个处于高活跃状态（OpenClaw、NanoBot、Hermes Agent、IronClaw、ZeroClaw、CoPaw），4 个低活跃（PicoClaw、NanoClaw、NullClaw、LobsterAI），3 个沉默（TinyClaw、Moltis、ZeptoClaw）。**多 Agent 协作架构、多渠道消息投递、上下文压缩与 Session 管理**已成为全生态的共同技术焦点。几乎所有活跃项目都面临同一个矛盾：社区贡献远超维护者审查带宽——OpenClaw 积压 PR 457 条、ZeroClaw 47 条，社区热情与维护能力的鸿沟正在扩大。同时，**安全与基础设施升级**（SSRF 防护、OIDC 认证、内存管理与 CI 可靠性）开始成为下一阶段的竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 活跃/新开 | PRs 待合并 | PR 合并/关闭 | Release | 健康度 |
|------|:-:|:-:|:-:|:-:|:-:|
| **OpenClaw** | 442 | 457 | 43 | v2026.6.9-beta.1 | 🟠 积压严重，P0 未修复 |
| **NanoBot** | 3（活跃） | ~14 | 19 | 无 | 🟢 良好，修复响应快 |
| **Hermes Agent** | 50 | ~30+ | ~20 | v0.17.0（6/19 刚发） | 🟢 优秀，发布后消化期 |
| **IronClaw** | 5 | 18 | 12 | 无 | 🟡 Nightly E2E 三周失败 |
| **ZeroClaw** | 50 | 47 | ~5 | v0.8.1（刚发） | 🟡 PR 积压，多项回归 |
| **CoPaw** | 10 | 10 | 6 | 无 | 🟢 良好，修复节奏快 |
| **PicoClaw** | 4 | 6 | 0 | nightly | 🟡 stale 积压 |
| **NanoClaw** | 0 | 5 | 0 | 无 | 🟡 零合并/评论 |
| **NullClaw** | 2 | 1 | 0 | 无 | 🟢 小规模稳定 |
| **LobsterAI** | 1 | 0 | 0 | 2026.6.18 | 🟡 stale 关闭高优 Issue |
| **TinyClaw** | — | — | — | — | ⚪ 无活动 |
| **Moltis** | — | — | — | — | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | — | ⚪ 无活动 |

> 注：部分项目 PR 数量取当日变化量估算，精确数以 GitHub 实时数据为准。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当今生态中无可争议的核心参照系**，这体现在三个维度：

**规模绝对领先**：Issue + PR 日更量均达 500 条，是第二名 Hermes Agent（100 条）的 5 倍，NanoBot（~50 条）的 10 倍。OpenClaw 的 PR 积压（457 条）超过其余所有项目积压之和。社区贡献者规模和用户使用基数在生态中首屈一指。

**技术路线差异**：OpenClaw 走的是**"大而全的多渠道个人 AI 助手"**路线——支持 Telegram、Matrix、Discord、iMessage、Feishu 等超多渠道，架构覆盖面最广。相比而言：
- **NanoBot** 走轻量化路线，专注核心功能（Subagent 体系、TUI 体验），代码更易审计；
- **Hermes Agent** 走**"桌面原生 + 安全合规"**路线，强调 Desktop GUI、i18n 多语言、凭证安全代理；
- **IronClaw / ZeroClaw** 走**"Reborn / 新架构重建"**路线，用 Rust 重写核心，注重并发调度、SOP 运行时等企业级能力；
- **PicoClaw** 专注边缘部署（Go 编写、Agent 协作总线），跨平台覆盖 Including Android；
- **NanoClaw / NullClaw** 属于极简主义阵营，功能裁剪到最小可用集。

**社区引力**：LobsterAI 社区的 Feature Request（#2180）直接以"将 OpenClaw 升级为 AI 协作平台"为标题，NanoBot、CoPaw 等项目的设计理念和功能集均受到 OpenClaw 的显著影响。OpenClaw 已成为生态的事实标准。

**劣势**：OpenClaw 也是今日生态中积压最严重、P0 Bug 最多（#91588 内存泄漏、#90378 cron 静默迁移均无修复）的项目，版本升级恐惧（v2026.6.x 多项回归）正在侵蚀社区信任。

---

## 4. 共同关注的技术方向

以下技术在 ≥3 个项目中同时涌现，构成生态级共识：

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **① Session/上下文管理与 Compaction** | OpenClaw、NanoBot、CoPaw、ZeroClaw、Hermes Agent | OpenClaw 讨论 SQLite 迁移（#88838, 31 条评论）；CoPaw 为 compaction 加超时保护（PR #5242）；ZeroClaw 修复 context budget 超出 3.3x（#5808）；Hermes Agent 上下文压缩导致答案重复（#49307）；NanoBot 讨论 Per-model contextWindowTokens（#4389）|
| **② 多 Agent 协作架构** | PicoClaw、NanoBot、IronClaw、ZeroClaw、CoPaw、NanoClaw | PicoClaw PR #2937（Agent Collaboration Bus）；NanoBot PR #4414/#4415（Subagent 聚合结果+模型覆盖）；IronClaw PR #5085（并发 TurnRunScheduler）；ZeroClaw #6893（多数据库 session 后端）；NanoClaw #2605（子 Agent 权限继承）；CoPaw #5332（多 Agent 协作 skill 触发修复）|
| **③ 消息投递可靠性与渠道兼容** | OpenClaw、NanoBot、PicoClaw、ZeroClaw、CoPaw | OpenClaw Telegram 富文本系列 PR（#93286）；NanoBot 飞书卡片渲染修复（#4342）；ZeroClaw v0.8.0 Slack/Discord 缺失回归（#7787）；CoPaw SSE 流式响应卡死（#5328/#5333）；OpenClaw Matrix 渠道崩溃（#90325）|
| **④ Cron / 定时任务可靠性** | OpenClaw、NanoBot、CoPaw、ZeroClaw、Hermes Agent | OpenClaw cron store 静默迁移（#90378）、隔离 cron 交付失败（#92460）；NanoBot cron 模型预设（PR #4416）；CoPaw misfire_grace 从 60s→3600s（PR #5241）；ZeroClaw cron 重复触发 20 次（#6037）；Hermes Agent Signal cron 静默投递失败（#49260）|
| **⑤ 安全与基础设施** | PicoClaw、IronClaw、ZeroClaw、Hermes Agent | PicoClaw SSRF 绕过修复（PR #3143）；Hermes Agent 零知识凭证代理提案（#4656）；ZeroClaw OIDC 认证 RFC（#7141）；IronClaw 统一 Feature-Flag 提案（#5091）|
| **⑥ 内存/性能退化** | OpenClaw、NanoBot、CoPaw | OpenClaw gateway 内存泄漏 350MB→15.5GB（#91588）；NanoBot doctor 性能退化 4-5x（#85333）；CoPaw ChromaDB 膨胀至 37GB（#4795）|
| **⑦ 引导/Onboarding 体验** | ZeroClaw、NanoBot | ZeroClaw 对话式 onboarding 向导（PR #8033）；NanoBot 改进入门向导（PR #4395）|

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术栈特征 | 差异化亮点 |
|------|----------|----------|------------|------------|
| **OpenClaw** | 全功能多渠道个人 AI 助手 | 重度多平台用户、技术型个人用户 | TypeScript/Node.js | 渠道覆盖最广、插件生态最大、社区最强 |
| **NanoBot** | 轻量级可审计 AI 助手 | 注重代码质量的中小团队、CLI 爱好者 | Python | Subagent 体系设计清晰、TUI 体验好 |
| **Hermes Agent** | 桌面原生 + 国际化 AI 助手 | 桌面用户、非英语用户、安全敏感用户 | 多语言 Desktop | 15 语言 i18n、Desktop GUI 原生体验、凭证安全代理 |
| **IronClaw** | Reborn — 下一代可运维 Agent 平台 | 企业部署、需要精细权限控制的团队 | Rust（新架构） | 并发调度、工具级权限覆盖、Feature-Flag |
| **ZeroClaw** | 高可扩展多 Agent 运行时 | 多 Agent 集群用户、开发者 | Rust | SOP 运行时、多数据库 session、EPIC 式架构演进 |
| **CoPaw** | 智能体工作室 + 协作 | 项目制团队、多 Agent 协作者（中文社区） | ChromaDB + SSE | 向量记忆、Todo 面板、Agent 办公室 UI |
| **PicoClaw** | 跨平台边缘 AI 助手 | Android/Termux 用户、IoT 边缘场景 | Go | Agent 协作总线、SSRF 安全部署、跨平台 |
| **NanoClaw** | 极简 AI 助手 | 轻量部署、快速体验 | — | 审批流程、Discord 集成、Apple Container |
| **NullClaw** | 极简单文件 AI 助手 | 嵌入式/Android 开发者 | Zig | Zig 跨平台编译、最小依赖 |
| **LobsterAI** | AI 协作办公平台 | 非技术办公用户、网易生态 | — | 制品多格式分享、语音输入、网易内部生态 |

---

## 6. 社区热度与成熟度

**第一梯队 — 高活跃 + 快速迭代**（架构扩张期）
- **OpenClaw**：日更 500 条，但积压严重，正值"功能扩张→质量消化"的阵痛期。v2026.6.x 系列的回归问题需要一两个 patch 周期消化。
- **Hermes Agent**：v0.17.0 刚发布（1,475 commits, 245 贡献者），处于发布后的"反馈收集 + Bug 修复"消化期。国际化进展亮眼。
- **IronClaw**：Reborn 架构功能补全期，Projects 页面、外部工具 Responses、并行渠道接入三路并进，正从"可用"走向"可运维"。

**第二梯队 — 中高活跃 + 质量巩固**（夯实基础期）
- **ZeroClaw**：v0.8.1 刚发布，123 项修复 + 46 项新功能。PR 积压 47 条，正从 v0.8.0 的稳定性危机中恢复。
- **CoPaw**：v1.1.12.post1 修复期，ChromaDB 膨胀、SSE 卡死、图片显示回归等多项问题正在被系统性修复。DeepSeek 兼容性是当前最大痛点。
- **NanoBot**：修复响应速度最快的项目之一，流式超时和 heartbeat 误发消息两个 v0.2.x 回归已有 PR 推进。整体健康度在小型项目中最佳。

**第三梯队 — 低活跃 / 维护模式**（稳定但增长放缓）
- **PicoClaw**：Agent 协作总线（PR #2937）已 stale 27 天，Windows 兼容性 Issue 71 天无响应。需要维护者重新激活。
- **NanoClaw**：PR 队列 5 条、零合并/评论，权限继承 PR 已开放 27 天。社区贡献者在等待。
- **NullClaw**：仅 1 条活跃 PR，小规模稳定维护中。
- **LobsterAI**：3 条高优 Bug 被 stale 关闭（70+ 天），社区信任受损。但制品分享功能发布显示团队仍在推进。

**第四梯队 — 沉默**
- **TinyClaw / Moltis / ZeptoClaw**：过去 24 小时无任何活动，需关注是否为废弃项目。

---

## 7. 值得关注的趋势信号

### 趋势一："Agent 协作"正从概念走向基础设施

PicoClaw 的 Agent Collaboration Bus、NanoBot 的 Subagent 模型覆盖 + 聚合结果、IronClaw 的并发 TurnRunScheduler、NanoClaw 的子 Agent 权限继承、ZeroClaw 的多数据库 session 后端——**多达 6 个项目在同期推进多 Agent 协作能力**。这不再是锦上添花，而是成为下一代 AI 助手的必备架构。

**对开发者的参考价值**：在选型时，Agent 间通信模型（消息队列 vs 共享 session vs 协作线程）和权限隔离粒度将成为关键决策点。NanoBot 的 SuspendTurn（#4411）为 human-in-the-loop 场景提供了优雅的架构范式。

### 趋势二：上下文管理是用户体验的核心瓶颈

OpenClaw compaction 超时（#92043）、CoPaw compaction 超时保护（PR #5242）、ZeroClaw context budget 超 3.3x（#5808）、Hermes Agent 答案重复（#49307）、NanoBot 流式超时（#4013）——**所有活跃项目在今日都面临上下文管理的挑战**。这是 LLM 长对话场景的固有限制，但各项目的应对策略差异很大：超时保护、SQLite 迁移、可配置窗口、branch-by-abstraction 渐进重构。

**对开发者的参考价值**：上下文管理将成为 2026 年下半年最重要的工程化方向。关注 OpenClaw 的 SQLite 迁移讨论（#88838），其 branch-by-abstraction 模式值得参考。

### 趋势三：Cron/定时任务可靠性是生产部署的刚需

OpenClaw、NanoBot、CoPaw、ZeroClaw、Hermes Agent 五个项目在同一天都有 Cron 相关的问题或修复。错失窗口、重复触发、静默投递失败、模型预设缺失——**自动化任务已从边缘功能变成核心工作流**。

**对开发者的参考价值**：评估项目时，应将 cron 可靠性作为生产就绪度的重要指标。CoPaw 将 misfire_grace 从 60s 提升到 3600s 的决策值得参考。

### 趋势四：安全正在成为差异化竞争点

PicoClaw 的 SSRF 防护（PR #3143）有详细的回归测试、Hermes Agent 的零知识凭证代理讨论已持续 2+ 个月、ZeroClaw 的 OIDC 认证 RFC、IronClaw 的 Feature-Flag 提案——**安全不再是事后补救，而是架构设计的核心考量**。

**对开发者的参考价值**：对于企业和自托管场景，OIDC 支持、凭证安全代理、SSRF 防护、工具级权限控制将成为 2026 下半年的关键选型标准。

### 趋势五：边缘部署和跨平台需求真实存在但未被充分满足

NullClaw 的 Zig Android 构建失败（#868）、PicoClaw 的 Windows 路径分隔符（#2472、71 天未修复）、ZeroClaw 的 Termux 二进制问题（#7911）、NanoClaw 的 Apple Container 支持（PR #2809）——**Android、Windows、macOS 原生容器等边缘平台的用户需求真实存在，但几乎所有项目的第一优先级仍然是 Linux/macOS 主路径**。

**对开发者的参考价值**：这为差异化竞争者留下了明确的市场空间。PicoClaw（Go 编写）和 NullClaw（Zig 编写）在跨平台部署上有先天语言优势，但需要增强维护带宽。NanoClaw 的 Apple Container 支持是前瞻性的。

### 趋势六：生态正在围绕 OpenClaw 形成"引力场"

LobsterAI 的提案以"升级 OpenClaw"为愿景、NanoBot 和 CoPaw 的设计路线图均受 OpenClaw 显著影响、Hermes Agent 的语言感知会话标题 PR 明确标注"灵感来自 Claude Code"——**开源 AI 助手生态正在经历事实上的标准收敛**。但 OpenClaw 当前严重的积压和升级回归问题，也在为追赶者创造窗口期。

**对开发者的参考价值**：如果 OpenClaw 不能在未来 1-2 个版本周期内有效消化积压、修复 P0 Bug、恢复社区信任，部分用户和贡献者可能向 NanoBot（轻量可审计）或 Hermes Agent（桌面 + 安全）迁移。

---

*本报告由 OWL 基于 2026-06-20 GitHub 公开数据生成。数据采集范围：13 个 AI 智能体/个人助手开源项目。如需针对某一项目的深度分析，可另行生成专题报告。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-20

---

## 1. 今日速览

过去 24 小时 NanoBot 社区保持高活跃度：**33 条 PR 更新（19 条已合并/关闭）、9 条 Issue 更新（6 条已关闭）**，无新版本发布。今日合并了多项关键修复（MCP 超时、会话删除竞态、飞书卡片渲染、OpenAI 图像编辑路由），项目稳定性持续改善。多线并行开发活跃，Subagent 模型覆盖、Cron 任务模型预设、TUI 界面等增强功能均在推进中。社区问题集中在 v0.2.x 回归（heartbeat 误发消息、流式传输卡顿）上，需关注。

---

## 2. 版本发布

无。近期最新稳定版为 **v0.2.1**，下一版本预计将包含本轮合并的多项修复与功能增强。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 状态 | 摘要 |
|---|---|---|
| **[#4394](https://github.com/HKUDS/nanobot/pull/4394)** | ✅ MERGED | **OpenAI 图像参考编辑支持**：将含参考图的请求路由至 `/images/edits`，DALL-E 收到参考图时报清晰错误，补全 OpenAI 图像工作流缺口 |
| **[#4342](https://github.com/HKUDS/nanobot/pull/4342)** | ✅ MERGED | **飞书 WebSocket 卡片渲染修复**：修正 WebSocket 卡片内容读取路径的结构性不匹配，解决卡片显示为占位符的问题 |
| **[#4230](https://github.com/HKUDS/nanobot/pull/4230)** | ✅ MERGED | **streamableHttp MCP 超时设置**：为 httpx.AsyncClient 设置默认超时，防止 MCP 启动时因握手无响应而无限挂起 |
| **[#4246](https://github.com/HKUDS/nanobot/pull/4246)** | ✅ MERGED | **会话删除同步清理旧路径文件**：`delete_session` 同时清除 `~/.nanobot/sessions/` 下的历史遗留文件，防止会话"复活" |
| **[#2655](https://github.com/HKUDS/nanobot/pull/2655)** | ❌ CLOSED (invalid) | Discord 模块重写 PR 关闭，未说明合并或拒绝原因 |
| **[#4138](https://github.com/HKUDS/nanobot/pull/4138)** | ❌ CLOSED | `tools.file.enable` 开关 PR 关闭 |

**整体评估**：项目在向 v0.3.0 迈进过程中积累了显著增量——Subagent 体系（[#4414](https://github.com/HKUDS/nanobot/pull/4414) 聚合结果模式、[#4415](https://github.com/HKUDS/nanobot/pull/4415) 模型覆盖）、Cron 任务精细化（[#4416](https://github.com/HKUDS/nanobot/pull/4416) 模型预设、[#4412](https://github.com/HKUDS/nanobot/pull/4412) 静默通知修复）、以及新增的 `SuspendTurn` 机制（[#4411](https://github.com/HKUDS/nanobot/pull/4411)）均展现了模块化扩展方向。今日合并集中解决稳定性和渠道兼容性问题，**项目整体健康度良好**。

---

## 4. 社区热点

### Issue 热点

- **[#4013](https://github.com/HKUDS/nanobot/issues/4013)** · `stream stalled for more than 90 seconds`（5 条评论）  
  用户从 v0.1.5post2 升级到 v0.2.0 后遭遇 LLM 流式传输 90 秒超时。这是高评论量 Issue，社区多名用户反映同类问题，说明 **v0.2.x 的流式超时默认值偏短**，或特定模型/Provider 的延迟阈值未适配。已关闭，可能标记为已知问题或在另一 PR 中修复。

- **[#4374](https://github.com/HKUDS/nanobot/issues/4374)** · 项目工作区 SOUL.md/USER.md 读写不对称（3 条评论）  
  项目工作区（#4007 新功能）中 AGENTS/SOUL/USER.md 的读取在项目根目录完成，但 agent 写回时却写入默认工作区。这是 WebUI 项目工作区的核心逻辑 Bug，PR 尚未关联合并。

- **[#4389](https://github.com/HKUDS/nanobot/issues/4389)** · 回退模型 Per-model contextWindowTokens（2 条评论）  
  当 fallback 模型上下文窗口比主模型小时，nanobot 不会自动裁剪 prompt。已有 PR #4373（delivery context 修复）在活跃推进。

- **[#4287](https://github.com/HKUDS/nanobot/issues/4287)** · 空响应不触发 fallback（2 条评论）  
  DeepSeek 高峰期返回空响应时被错误归类为"不可 fallback"错误。说明错误分类逻辑需要更精细的 fallbackable 错误类型判断。

### PR 热点

- **[#4411](https://github.com/HKUDS/nanobot/pull/4411)** · `SuspendTurn` — 工具可暂停当前 turn 等待异步/人工续接  
  这是架构级增强，允许工具返回 sentinel 来干净地结束 turn，不调用模型、不发送消息，等下一条入站消息时恢复。**对 human-in-the-loop 和异步工具场景意义重大**。

- **[#4329](https://github.com/HKUDS/nanobot/pull/4329)** · 内联 TUI 终端界面  
  为 `nanobot agent` 添加交互式终端 UI，非 TTY 和 `--classic` 模式保持原有行为。降低 CLI 使用门槛。

- **[#4395](https://github.com/HKUDS/nanobot/pull/4395)** · 改进入门向导 (onboard wizard)  
  优化 `nanobot onboard` 的 TTY 交互流程，新增 Quick Start 路径，JetBrains 风格终端配色，保留草稿回退。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#4013](https://github.com/HKUDS/nanobot/issues/4013) | v0.2.0 升级后 LLM 流式 90s 超时，影响实际使用 | 无明确关联 PR，已关闭 |
| 🔴 高 | [#4410](https://github.com/HKUDS/nanobot/issues/4410) | 升级后 heartbeat 即使 LLM 回复"不发消息"仍发送消息（agent/loop.py:1008-1009） | **[#4412](https://github.com/HKUDS/nanobot/pull/4412)** 已开放 |
| 🟡 中 | [#4374](https://github.com/HKUDS/nanobot/issues/4374) | 项目工作区 bootstrap 文件读写路径不对称 | 无 |
| 🟡 中 | [#4287](https://github.com/HKUDS/nanobot/issues/4287) | 空模型响应未触发 fallback | 无 |
| 🟡 中 | [#4345](https://github.com/HKUDS/nanobot/issues/4345) | image-strip fallback 导致模型"看到"未收到的图片并泄露文件路径 | 无 |
| 🟢 低 | [#4052](https://github.com/HKUDS/nanobot/issues/4052) | MCP notifications/progress 被 Pydantic 拒绝 | 无（已关闭） |

**关键关注点**：
- **Heartbeat 误发消息**（#4410）是 v0.2.x 最突出的回归，PR #4412 已开放修复，建议优先合并。
- **流式超时**（#4013）影响面广，建议考虑将超时时间设为可配置参数或在文档中说明调整方法。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR | 信号强度 |
|---|---|---|---|
| Heartbeat 任务结果投递到任务添加时的频道 | [#4418](https://github.com/HKUDS/nanobot/issues/4418) | 无 | ⭐⭐ 新提，合理 |
| Telegram Bot API 10.1 富文本消息 | [#4413](https://github.com/HKUDS/nanobot/issues/4413) | 无 | ⭐⭐ 渠道增强 |
| Per-model contextWindowTokens | [#4389](https://github.com/HKUDS/nanobot/issues/4389) | 无 | ⭐⭐⭐ 多模型 fallback 场景刚需 |
| Subagent 模型覆盖 | — | [#4415](https://github.com/HKUDS/nanobot/pull/4415) | ⭐⭐⭐ PR 已活跃 |
| Subagent 聚合结果模式 | — | [#4414](https://github.com/HKUDS/nanobot/pull/4414) | ⭐⭐⭐ PR 已活跃 |
| Cron 任务模型预设 | — | [#4416](https://github.com/HKUDS/nanobot/pull/4416) | ⭐⭐⭐ PR 已活跃 |
| SuspendTurn（异步/human-in-the-loop） | — | [#4411](https://github.com/HKUDS/nanobot/pull/4411) | ⭐⭐⭐ 架构级 |
| 内联 TUI | — | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | ⭐⭐ 体验提升 |
| XMPP 渠道 | — | [#1945](https://github.com/HKUDS/nanobot/pull/1945) | ⭐ 长期开放 |

**判断**：Subagent 体系增强（模型覆盖 + 聚合结果）和 Cron 精细化（模型预设 + 静默通知）是最有可能进入下一版本的功能集群。`SuspendTurn` 是潜在的重大架构扩展，需要更多评审。

---

## 7. 用户反馈摘要

**痛点**：
- **升级断裂**：多名用户反映 v0.1.5 → v0.2.0 升级后出现流式超时（#4013）和 heartbeat 行为变化（#4410），说明 v0.2.x 的破坏性变更未充分传达。
- **多模型 fallback 不智能**：用户配置 fallback 模型时期望系统自动适配不同上下文窗口（#4389），当前全局 `contextWindowTokens` 设置无法满足。
- **项目工作区不完整**：WebUI 项目工作区功能（#4007）已上线但读写不对称（#4374），用户实际使用时会产生困惑。

**满意点**：
- #4013 作者特别提到 v0.1.5post2 "been very good (way to say ty)"，说明旧版本体验获得认可。
- 飞书渠道用户积极提交 PR（#4342），说明企业用户群体在增长。

**使用场景**：
- Telegram Bot + DeepSeek 多模型 fallback（#4287）
- WebUI 多项目管理（#4374）
- 飞书企业集成（#4342）

---

## 8. 待处理积压

| 项目 | 创建日期 | 状态 | 建议 |
|---|---|---|---|
| **[#1945](https://github.com/HKUDS/nanobot/pull/1945)** XMPP 渠道 | 2026-03-12 | 开放 3+ 个月 | 长期无评审，需 maintainer 明确接受/拒绝 |
| **[#3591](https://github.com/HKUDS/nanobot/pull/3591)** Dream 更新范围控制 | 2026-05-02 | 开放 1.5 月 | 功能合理，需评审 |
| **[#3590](https://github.com/HKUDS/nanobot/pull/3590)** Heartbeat 手动触发命令 | 2026-05-02 | 开放 1.5 月 | 与 #4418 需求方向一致，可联合评审 |
| **[#3662](https://github.com/HKUDS/nanobot/pull/3662)** Token 估算避免网络加载 | 2026-05-06 | 开放 1.5 月 | 离线环境优化，低优先级但稳定 |
| **[#4345](https://github.com/HKUDS/nanobot/issues/4345)** image-strip fallback 泄露文件路径 | 2026-06-15 | 已关闭但无修复 | ⚠️ 安全问题，建议重新打开或创建修复 PR |

**特别提醒**：#4345 涉及**文件路径泄露**（模型收到包含本地路径的文本），虽已关闭但无修复 PR 关联，建议维护者确认是否已修复或重新打开。

---

*数据来源：HKUDS/nanobot GitHub | 报告生成时间：2026-06-20 | OWL — ZOO*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-20 | 分析师：OWL**

---

## 1. 今日速览

Hermes Agent 在 v0.17.0（"The Reach Release"）发布后的第二天依然保持极高活跃度——过去 24 小时内共处理 50 条 Issue 更新和 50 条 PR 更新，社区贡献者持续涌入。项目重心明显从"功能扩张"转向"稳定性加固与生态完善"：大量 PR 聚焦 TUI/Desktop 体验修复、安全加固、i18n 多语言覆盖以及插件架构改进。整体健康度良好，但若干 P1 级 Bug（如上下文压缩导致答案重复、Signal cron 静默投递失败）需要维护者尽快响应。

---

## 2. 版本发布

### 🆕 v0.17.0 — "The Reach Release"（发布于 2026-06-19）

| 指标 | 数据 |
|---|---|
| Commits | ~1,475 |
| Merged PRs | ~800 |
| 变更文件 | 1,693 |
| 新增行数 | +235,390 |
| 删除行数 | −50,730 |
| 关闭 Issues | 300+ |
| 社区贡献者 | 245 |

**定位：** v0.16.0 将 Hermes 带到桌面端；v0.17.0 则大幅扩展了平台覆盖能力与集成深度。

**迁移注意事项：**
- 大量文件变更（1,693 files）意味着插件开发者可能需要检查 API 兼容性
- 安全相关变更（PID namespace isolation、credential proxy daemon 讨论）可能影响自建部署的配置方式
- i18n 架构从原生骨架迁移至 JSON locale 系统（15 语言 / 861 keys），自定义主题可能需要适配

> 详情：[nousresearch/hermes-agent/releases/tag/v2026.6.19](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.19)

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#49243](https://github.com/NousResearch/hermes-agent/pull/49243) | 🐛 Bug Fix (P1) | **防止 gateway 在 session resume 时陷入无限重启循环**——修复了 gateway 容器异常重启后的恢复逻辑 |
| [#49240](https://github.com/NousResearch/hermes-agent/pull/49240) | 🐛 Bug Fix | 消除 raft 插件 `check_fn` 的日志刷屏（每 ~10 秒一条 WARNING），改善无 raft CLI 用户的体验 |
| [#49287](https://github.com/NousResearch/hermes-agent/pull/49287) | 🔧 Refactor | 修复 CLI memory-provider 在 `on_session_end` 时 shutdown 路径不可观测的问题 |
| [#49282](https://github.com/NousResearch/hermes-agent/pull/49282) | 🔧 Refactor | 修复 FAL 图片构建器中模型白名单可能剥离 prompt/source images 的问题 |
| [#45296](https://github.com/NousResearch/hermes-agent/pull/45296) | ✨ Feature | **语言感知会话标题**——session 标题默认跟随对话语言，支持固定语言 pin（灵感来自 Claude Code v2.1.176） |
| [#21788](https://github.com/NousResearch/hermes-agent/issues/21788) | 🐛 Bug Fix (P2) | 修复 `.venv` 与 `venv` 共存时 Dashboard `/chat` 报 "gateway exited" 的问题 |

### 项目整体进度评估

- **稳定性层**：无限重启循环的修复（#49243）是关键基础设施加固，表明 gateway 的容错能力正在系统化提升
- **国际化**：多语言支持从框架走向完整覆盖（15 语言，fr 完整翻译已提交 PR #48070）
- **插件生态**：raft 插件日志治理（#49240）显示团队开始关注内置插件对非目标用户的噪音问题

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 👍 | 评论 | 热度解读 |
|---|---|---|---|
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) — 集成 headroom-ai 进行工具输出压缩 | 9 | 6 | 社区对上下文压缩质量有强烈需求，当前 LLM 级摘要被认为开销过大且质量不稳定 |
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) — 零知识凭证代理守护进程 | 1 | 11 | 安全敏感用户（企业/自托管）对凭证泄露防护有深层诉求，讨论已持续 2+ 个月 |
| [#38478](https://github.com/NousResearch/hermes-agent/issues/38478) — camofox 浏览器截图裁剪 | 0 | 6 | 影响所有使用 camofox 作为浏览器后端的用户，属于工具链基础体验问题 |
| [#41625](https://github.com/NousResearch/hermes-agent/issues/41625) — MCP 工具在 TUI 中不可用 | 1 | 5 | MCP 集成是生态扩展核心，TUI 与 MCP 的兼容性问题阻碍了开发者工作流 |

### 🔥 最受关注的 PRs

| PR | 关注点 |
|---|---|
| [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) — 一等公民 Projects 架构 | 用后端权威会话树取代 git-branch/worktree 推断模型，Desktop 侧边栏成为后端快照的薄渲染层——**这是重大的架构方向调整** |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) — 15 语言 i18n 支持 | 社区国际化需求集中体现，多语言用户积极参与 |
| [#49333](https://github.com/NousResearch/hermes-agent/pull/49333) — 自托管 katana 爬取工具 | 无需 API key 的 web 提取方案，回应了用户对成本的关切 |

---

## 5. Bug 与稳定性

### 🔴 P1 — 需立即关注

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| [#49307](https://github.com/NousResearch/hermes-agent/issues/49307) | OPEN | **上下文压缩导致答案重复 + 新指令丢失**——影响所有长对话场景 | ❌ 无 |
| [#49260](https://github.com/NousResearch/hermes-agent/issues/49260) | CLOSED | **Signal cron 任务静默投递失败**——状态显示 ok 但消息从未送达用户 | 已有修复合并 |
| [#49243](https://github.com/NousResearch/hermes-agent/issues/49243) | CLOSED | Gateway session resume 无限重启循环 | ✅ [#49243](https://github.com/NousResearch/hermes-agent/pull/49243) |

### 🟠 P2 — 影响用户体验

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| [#47868](https://github.com/NousResearch/hermes-agent/issues/47868) | OPEN | `messages[]` 泄漏 `timestamp` 元数据导致严格 OpenAI 兼容 provider 拒绝请求 | ❌ 无 |
| [#48523](https://github.com/NousResearch/hermes-agent/issues/48523) | OPEN | gateway 模式下 `convert_messages` 未剥离内部元数据字段，导致 400 错误 | ❌ 无 |
| [#49332](https://github.com/NousResearch/hermes-agent/issues/49332) | OPEN | `delegate_task` 的 model override 被忽略——子代理使用错误模型，消耗非授权额度 | ❌ 无 |
| [#48991](https://github.com/NousResearch/hermes-agent/issues/48991) | OPEN | `auxiliary.vision.provider=auto` 不继承 `base_url`/`api_key`，自定义 provider 连接失败 | ❌ 无 |
| [#47500](https://github.com/NousResearch/hermes-agent/issues/47500) | OPEN | Desktop 应用自动预览外部链接触发系统协议处理器弹窗 | ❌ 无 |
| [#49293](https://github.com/NousResearch/hermes-agent/issues/49293) | OPEN | 文件浏览器面板不跟随 profile 切换（竞态条件） | ❌ 无 |
| [#49283](https://github.com/NousResearch/hermes-agent/issues/49283) | OPEN | `execute_code` 同意门控不识别 Desktop GUI 中的显式聊天授权 | ❌ 无 |
| [#49242](https://github.com/NousResearch/hermes-agent/issues/49242) | OPEN | Windows 上 WhatsApp gateway 和 Desktop updater 未优先使用 Hermes 管理的 Node/npm | ❌ 无 |

### 🟡 P3 — 功能改进

| Issue | 状态 | 描述 |
|---|---|---|
| [#47795](https://github.com/NousResearch/hermes-agent/issues/47795) | OPEN | Desktop 聊天滚动位置跳动/弹跳，流式输出停止后仍持续 |
| [#49326](https://github.com/NousResearch/hermes-agent/issues/49326) | OPEN | 中文输入法输入逗号/句号跳转到设置页面 |
| [#49075](https://github.com/NousResearch/hermes-agent/issues/49075) | OPEN | `skills_list`/`skill_view` 缺少幂等调用检测，导致工具循环无法被拦截 |
| [#23802](https://github.com/NousResearch/hermes-agent/issues/23802) | OPEN | `hermes plugins enable/list` 过滤掉了 entry-point 发现的插件 |

---

## 6. 功能请求与路线图信号

### 高可能性纳入下一版本的 Feature Requests

| Issue | 信号强度 | 分析 |
|---|---|---|
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) — 工具输出压缩 (👍9) | ⭐⭐⭐⭐⭐ | 高赞 + 与 v0.17.0 上下文压缩系统直接相关，社区已提出 headroom-ai 集成方案 |
| [#49333](https://github.com/NousResearch/hermes-agent/pull/49333) — katana 自托管爬取 | ⭐⭐⭐⭐ | PR 已提交，无 API key 依赖，符合项目"降低用户使用门槛"方向 |
| [#49331](https://github.com/NousResearch/hermes-agent/pull/49331) — 消息发送门控配置 | ⭐⭐⭐⭐ | 企业级部署的合规需求，PR 已就绪 |
| [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) — Projects 一等公民架构 | ⭐⭐⭐⭐ | 重大架构调整，已有多方讨论，符合长期产品方向 |
| [#49252](https://github.com/NousResearch/hermes-agent/pull/49252) — 后台自改进辅助模型路由 | ⭐⭐⭐ | 成本优化方向，PR 已提交，技术路线清晰 |

### 长期跟踪

| Issue | 说明 |
|---|---|
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) — 零知识凭证代理 | 安全基础设施，讨论深入但实现复杂，预计需要多个版本迭代 |
| [#32159](https://github.com/NousResearch/hermes-agent/issues/32159) — Web 搜索/提取后端的有序故障转移链 | 基础设施可靠性，与 katana PR 可能形成互补 |
| [#49279](https://github.com/NousResearch/hermes-agent/issues/49279) — GLM-5.x reasoning 支持 | 模型提供商覆盖扩展，符合项目多后端战略 |

---

## 7. 用户反馈摘要

### 😤 痛点（不满意）

1. **上下文压缩质量**：多位用户反映长对话中答案重复、新指令丢失（#49307），当前 LLM 级摘要被认为不可靠且开销大
2. **TUI 与 MCP 兼容性**：MCP 工具在 TUI 模式下不可用（#41625, #47121）——开发者核心工作流受阻，已有用户报告 timeout race condition 根因
3. **Desktop 中文输入体验**：中文标点符号触发设置页面跳转（#49326），严重影响中文用户日常使用
4. **严格 provider 兼容性**：多个 issue（#47868, #48523）反映 Hermes 向严格 OpenAI 兼容 provider 泄漏元数据，导致 400 错误——影响 Fireworks、OpenCode Go 等用户
5. **delegate_task model override 被忽略**（#49332）：用户发现子代理始终使用默认模型，导致额度消耗超出预期——这是信任问题

### 😊 满意 / 积极

1. **v0.17.0 发布规模**：1,475 commits、245 贡献者——社区对项目发展速度印象深刻
2. **i18n 多语言支持**：15 语言覆盖让非英语用户感到被重视
3. **自托管工具选项**：katana 爬取工具（无 API key 依赖）受到自托管用户欢迎
4. **安全加固**：PID namespace isolation、E2EE 加密保护（#45518）获得安全社区正面反馈

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue | 创建日期 | 状态 | 建议 |
|---|---|---|---|
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) — 凭证代理守护进程 | 2026-04-02 | OPEN, 11 条评论 | 已讨论 2+ 个月，建议给出明确的路线图表态（接受/推迟/拒绝） |
| [#33327](https://github.com/NousResearch/hermes-agent/issues/33327) — BlueBubbles webhook 冲突 | 2026-05-27 | OPEN | 有本地修复分支但未合入，建议审查 |
| [#23802](https://github.com/NousResearch/hermes-agent/issues/23802) — plugins CLI 过滤 bug | 2026-05-11 | OPEN | 影响插件开发者体验，修复范围明确 |
| [#25106](https://github.com/NousResearch/hermes-agent/issues/25106) — CLI 全局模型切换不持久化 | 2026-05-13 | OPEN | 配置持久化基础 bug，影响所有 CLI 用户 |
| [#32159](https://github.com/NousResearch/hermes-agent/issues/32159) — Web 后端故障转移链 | 2026-05-25 | OPEN | 与 katana PR 功能重叠，建议合并讨论 |

### ⚠️ 待审查的重要 PR

| PR | 创建日期 | 说明 |
|---|---|---|
| [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) — Projects 架构 | 2026-06-19 | 重大架构变更，需要核心团队深度审查 |
| [#42334](https://github.com/NousResearch/hermes-agent/pull/42334) — 安全依赖升级 (aiohttp, anthropic, cryptography) | 2026-06-08 | 安全相关 PR 审查不应拖延，已等待 12 天 |
| [#45518](https://github.com/NousResearch/hermes-agent/pull/45518) — Matrix E2EE 加密保护 | 2026-06-13 | 安全加固，已等待 7 天 |
| [#2830](https://github.com/NousResearch/hermes-agent/pull/2830) — 供应链审计扩展 | 2026-03-24 | 已等待近 3 个月，需要安全团队关注 |

---

## 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区活跃度 | 🟢 优秀 | 245 贡献者、50+50 日更量，活力充沛 |
| 代码质量 | 🟡 良好 | 安全 PR 积压需关注，架构调整期需谨慎审查 |
| 稳定性 | 🟡 良好 | P1 bug 已修复关键项，但上下文压缩和元数据泄漏问题持续 |
| 文档/国际化 | 🟢 优秀 | i18n 15 语言覆盖，多语言用户体验提升显著 |
| 响应速度 | 🟡 良好 | 部分 Issue/PR 积压数周，建议增加 triage 带宽 |

**总体评价：** Hermes Agent 正处于 v0.17.0 发布后的"消化期"——大规模功能落地后，社区反馈的稳定性问题正在集中浮现。建议维护者近期优先处理 P1/P2 bug 积压、加速安全相关 PR 审查，并对长期讨论的 Feature Request 给出明确路线图回应，以维持社区信任。

---

*本报告基于 2026-06-20 GitHub 数据自动生成 | 数据来源：github.com/NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-06-20 ｜ 数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

过去 24 小时，PicoClaw 项目保持中等偏上的活跃节奏：**4 条 Issue 更新（全部为活跃/新开状态，无关闭）、7 条 PR 更新（6 条待合并、1 条已关闭）、1 个 Nightly 版本发布**。社区贡献者集中在安全修复（SSRF 防护）、类型断言健壮性、跨平台路径兼容性等基础设施层面。整体来看，项目处于 v0.3.0 正式发布前的密集打磨期，Nightly 构建持续迭代，但积压的 stale PR 数量偏高，维护者响应速度值得关注。

---

## 2. 版本发布

### 🌙 Nightly Build — `v0.3.0-nightly.20260619.287853ab`

- **类型：** 自动化 Nightly 构建，**非稳定版本**，仅供测试使用
- **基于：** `main` 分支，对比基线为 `v0.3.0` tag
- **完整变更日志：** [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
- **注意事项：** 此构建可能包含未经验证的新功能和修复，不建议在生产环境部署。

> ⚠️ 无正式 Release 发布。Nightly 构建的频繁更新暗示 v0.3.0 正式版可能仍在功能冻结或回归修复阶段。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 状态 | 说明 |
|---|---|---|
| [#2956](https://github.com/sipeed/picoclaw/pull/2956) | ✅ 已关闭 | **修复 `security.yml` 合并时 channel `enabled` 状态被覆盖的问题。** 此前用户在 `.security.yml` 中添加凭证（如 `telegram.token`）时，若未显式设置 `enabled: true`，合并流程会将 config.json 中已启用的 channel 意外禁用。该修复保障了配置合并的安全性。 |

### 待合并的重要 PR（活跃中）

| PR | 作者 | 说明 |
|---|---|---|
| [#3143](https://github.com/sipeed/picoclaw/pull/3143) | lc6464 | **修复 `web_fetch` SSRF 防护绕过（ISATAP IPv6 字面量）。** 针对 Issue #3074 描述的安全漏洞，扩展 IP 分类器以识别嵌套私环回 IPv4 地址的 ISATAP IPv6 字面量，覆盖两种常见 IID 形式。**安全关键修复，建议优先审查合并。** |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | afjcjsbx | **Agent Collaboration Bus（代理协作总线）。** 引入持久化 Agent 间通信机制，包含 per-agent 邮箱、隔离会话历史的协作线程、结构化消息信封与投递状态、权限感知路由。这是 PicoClaw 多 Agent 架构的核心基础设施。 |
| [#3091](https://github.com/sipeed/picoclaw/pull/3091) | chengzhichao-xydt | 修复 OpenAI 兼容 provider 中 `native_search` 类型断言未检查 `ok` 导致静默禁用搜索的问题。 |
| [#3053](https://github.com/sipeed/picoclaw/pull/3053) | chengzhichao-xydt | 修复 `evolution/store.go` 中 `sync.Map.LoadOrStore` 类型断言失败导致 panic 的问题。 |
| [#3048](https://github.com/sipeed/picoclaw/pull/3048) | afjcjsbx | 修复 `mcp add` 子命令在根级持久化标志传入时参数解析错误的问题。 |
| [#3045](https://github.com sipeed/picoclaw/pull/3045) | chengzhichao-xydt | 修复 Matrix 用户 ID（含冒号格式 `@alice:example.com`）被 `allow_from` 静默拒绝的问题（Fixes #3044）。 |

**整体判断：** 项目在安全加固（SSRF 修复）、多类型断言健壮性修复、以及多 Agent 协作架构三个方向上同步推进。Agent Collaboration Bus 是本期最具战略价值的 PR，但已 stale 近一个月，需要维护者尽快给出审查反馈。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

**[#2472](https://github.com/sipeed/picoclaw/issues/2472) — `list_dir` 在 Windows 上因路径分隔符不匹配返回 "invalid argument"**
- **👍 1 ｜ 💬 6 条评论**
- **标签：** bug, tool, stale
- **核心问题：** Windows 平台下反斜杠 `\` 被直接传递给 Go 的 `fs.FS`/`os.Root`，而后者严格要求正斜杠 `/`。
- **社区诉求：** 用户期望 PicoClaw 在 Windows 上开箱即用，路径处理应做平台适配或统一归一化。6 条评论说明该问题影响面较广，但已标记 stale，维护者尚未正式回应。

### 💡 高优先级功能请求

**[#348](https://github.com/sipeed/picocaw/issues/348) — 通用附件支持：跨渠道处理文件、文档和媒体**
- **💬 4 条评论 ｜ 标签：** enhancement, high priority, roadmap
- **核心诉求：** 用户希望 PicoClaw 能处理 Telegram、Discord 等 IM 渠道中发送的各类附件（日志、配置文件、代码片段、图片、音视频等），而非仅处理纯文本消息。
- **意义：** 这是一个路线图级功能请求，直接关系到 PicoClaw 作为个人 AI 助手的实用性天花板。

### 🆕 最新报告

**[#3150](https://github.com/sipeed/picoclaw/issues/3150) — "它给自己整失忆了"**
- **💬 2 条评论 ｜ 标签：** bug
- **核心问题：** 用户报告 AI 助手出现"失忆"现象——上下文记忆丢失。可能与 session 管理或上下文窗口截断有关，需更多复现信息。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 **高** | [#3074](https://github.com/sipeed/picoclaw/issues/3074)（关联 PR [#3143](https://github.com/sipeed/picoclaw/pull/3143)） | `web_fetch` SSRF 防护可被 ISATAP IPv6 字面量绕过 | ✅ 已有 fix PR，待合并 |
| 🟠 **中高** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Windows 下 `list_dir` 路径分隔符导致 "invalid argument" | ❌ 无 fix PR，stale |
| 🟡 **中** | [#3150](https://github.com/sipeed/picoclaw/issues/3150) | AI 助手"失忆"——上下文记忆丢失 | ❌ 无 fix PR，需复现 |
| 🟢 **低** | [#3091](https://github.com/sipeed/picoclaw/pull/3091) | `native_search` 类型断言静默失败 | ✅ 有 fix PR，待合并 |
| 🟢 **低** | [#3053](https://github.com/sipeed/picoclaw/pull/3053) | `sync.Map.LoadOrStore` 类型断言不匹配可导致 panic | ✅ 有 fix PR，待合并 |
| 🟢 **低** | [#3045](https://github.com/sipeed/picoclaw/pull/3045) | Matrix 用户 ID 含冒号时被 `allow_from` 静默拒绝 | ✅ 有 fix PR，待合并 |

**关键结论：** SSRF 安全漏洞已有修复方案，应优先合并。Windows 路径兼容性问题虽标记 stale 但影响用户体验，建议尽快响应。

---

## 6. 功能请求与路线图信号

| 功能 | 关联 Issue | 关联 PR | 可能性评估 |
|---|---|---|---|
| **Agent 间协作总线** | — | [#2937](https://github.com/sipeed/picoclaw/pull/2937) | ⭐⭐⭐⭐⭐ 已有实质性 PR，属于 v0.3.0 核心功能 |
| **通用附件/文件处理** | [#348](https://github.com/sipeed/picoclaw/issues/348)（high priority, roadmap 标签） | 无 | ⭐⭐⭐⭐ 路线图级需求，但尚无实现 PR |
| **Telegram 权限分级控制** | [#3114](https://github.com/sipeed/picoclaw/issues/3114) | 无 | ⭐⭐⭐ 安全边界增强，与 Agent 协作架构配套 |
| **SSRF 防护增强** | [#3074](https://github.com/sipeed/picoclaw/issues/3074) | [#3143](https://github.com/sipeed/picoclaw/pull/3143) | ⭐⭐⭐⭐⭐ 安全修复，应尽快合入 |

**路线图判断：** v0.3.0 的重点方向已清晰——多 Agent 协作（Agent Bus）+ 安全加固（SSRF、类型断言）+ 配置管理修复。通用附件支持可能排在 v0.4.0 或更后版本。

---

## 7. 用户反馈摘要

### 痛点
- **Windows 兼容性差：** 路径分隔符未做跨平台适配，导致核心文件操作功能在 Windows 上直接报错（[#2472](https://github.com/sipeed/picoclaw/issues/2472)）。
- **上下文记忆不稳定：** 用户反映 AI 助手出现"失忆"现象，影响长对话场景的可用性（[#3150](https://github.com/sipeed/picoclaw/issues/3150)）。
- **配置合并行为不透明：** 添加安全凭证后 channel 被意外禁用，用户需要深入了解内部合并逻辑才能排查（已修复，[#2956](https://github.com/sipeed/picoclaw/pull/2956)）。
- **Telegram 群组安全风险：** 将机器人加入群组后，群成员可能触发危险操作（shell 执行、文件修改），缺乏细粒度权限控制（[#3114](https://github.com/sipeed/picoclaw/issues/3114)）。

### 满意点
- Nightly 构建机制让用户能持续获取最新修复，v0.3.0-nightly 的频繁发布体现了开发节奏。
- 安全社区活跃，SSRF 绕过问题有详细的修复方案和回归测试（[#3143](https://github.com/sipeed/picoclaw/pull/3143)）。

### 使用场景
- 用户将 PicoClaw 接入 Telegram/Discord 作为个人 AI 助手，涉及文件处理、代码执行、多轮对话等重度场景。
- 跨平台部署需求明确（Windows、Linux、macOS、Termux）。

---

## 8. 待处理积压

以下 PR 已标记 stale（超过 14 天无维护者响应），建议优先关注：

| PR | 创建日期 | 等待天数 | 建议 |
|---|---|---|---|
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) — Agent Collaboration Bus | 2026-05-24 | **27 天** | 🔴 核心功能 PR，建议尽快给出审查意见或合并 |
| [#3048](https://github.com/sipeed/picoclaw/pull/3048) — mcp add 参数解析修复 | 2026-06-07 | **13 天** | 🟡 简单修复，建议快速审查 |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) — Matrix allow_from 修复 | 2026-06-07 | **13 天** | 🟡 简单修复，建议快速审查 |
| [#3053](https://github.com/sipeed/picoclaw/pull/3053) — evolution store panic 修复 | 2026-06-08 | **12 天** | 🟡 简单修复，建议快速审查 |
| [#3091](https://github.com/sipeed/picoclaw/pull/3091) — native_search 断言修复 | 2026-06-10 | **10 天** | 🟡 简单修复，建议快速审查 |

以下 Issue 长期未响应：

| Issue | 创建日期 | 等待天数 | 建议 |
|---|---|---|---|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) — Windows 路径分隔符 | 2026-04-10 | **71 天** | 🔴 影响 Windows 用户核心体验，建议分配负责人 |
| [#348](https://github.com/sipeed/picoclaw/issues/348) — 通用附件支持 | 2026-02-17 | **123 天** | 🟡 路线图级需求，建议更新状态或关联 PR |
| [#3114](https://github.com/sipeed/picoclaw/issues/3114) — Telegram 权限分级 | 2026-06-12 | **8 天** | 🟡 安全相关，建议评估是否纳入近期版本 |

---

**总结：** PicoClaw 正处于 v0.3.0 发布前的关键窗口期，Agent 协作和安全修复是两大主线。建议维护者集中精力审查积压的 stale PR（尤其是 #2937 Agent Bus 和 #3143 SSRF 修复），并对长期未响应的 Windows 兼容性 Issue（#2472）做出明确回应，以提升社区信任度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-20

---

## 1. 今日速览

过去 24 小时内，NanoClaw 项目**无新 Issue 报告、无新版本发布**，但 PR 活动较为活跃，共 **5 条 Pull Request 处于开放状态**，均于 6 月 18–19 日创建或更新。整体来看，项目处于**稳定迭代期**：没有紧急 Bug 涌入，社区贡献者集中在修复现有缺陷（审批持久化、Discord 消息截断）和扩展平台能力（Apple Container 运行时、远程 OneCLI 网关）。维护者尚未对这批 PR 做出合并或评论响应，积压值得关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去 24 小时内**无 PR 被合并或关闭**，所有 5 条 PR 均处于 `[OPEN]` 状态。以下为各 PR 推进的功能方向汇总：

| # | PR 标题 | 方向 |
|---|---------|------|
| [#2820](https://github.com/nanocoai/nanoclaw/pull/2820) | fix(approvals): persist delivery target on pending_approvals rows | 修复审批流程数据完整性缺陷 |
| [#2812](https://github.com/nanocoai/nanoclaw/pull/2812) | fix(discord): chunk replies over 2000 chars instead of truncating | 修复 Discord 长消息截断问题 |
| [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) | feat(apple-container): Apple Container runtime + remote OneCLI gateway | 新增 Apple Container 运行时支持与远程网关能力 |
| [#2605](https://github.com/nanocoai/nanoclaw/pull/2605) | feat: inherit parent agent permissions via OneCLI | 子 Agent 权限继承（5 月底创建，昨日更新） |
| [#2819](https://github.com/nanocoai/nanoclaw/pull/2819) | Add MseeP.ai badge | README 安全徽章（社区推广类） |

**项目整体向前推进有限**——尚无代码落地，但功能储备较为丰富，尤其是 Apple Container 运行时支持将显著扩展 macOS 用户的部署选项。

---

## 4. 社区热点

由于所有 PR 评论数均为 `undefined`（无评论）、👍 反应数均为 0，**今日无明显讨论热点**。但从 PR 内容的技术深度和社区价值来看，以下两条值得重点关注：

- **[#2809 — Apple Container runtime + remote OneCLI gateway](https://github.com/nanocoai/nanoclaw/pull/2809)**
  这是今日技术覆盖面最广的 PR。它引入了 `CONTAINER_RUNTIME` 环境变量（默认 `docker`，可选 Apple Container），并原生支持远程 OneCLI 网关。对 macOS 用户和需要远程部署的团队意义重大。诉求：**降低 macOS 本地开发门槛，支持远程 Agent 编排**。

- **[#2820 — persist delivery target on pending_approvals rows](https://github.com/nanocoai/nanoclaw/pull/2820)**
  修复了一个设计层面的数据完整性问题：`requestApproval()` 在选定审批人之前创建 `pending_approvals` 行，导致 `channel_type`、`platform_id`、`platform_message_id` 永远为 `NULL`。这直接影响 `approvals list` 命令的可用性。诉求：**让审批审计链路完整可追踪**。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | PR | 状态 |
|----------|----------|----|------|
| 🔴 **高** | `pending_approvals` 行缺少投递目标信息（channel_type/platform_id/platform_message_id 全为 NULL），导致审批列表功能残缺 | [#2820](https://github.com/nanocoai/nanoclaw/pull/2820) | ✅ 已有 fix PR，待合并 |
| 🟡 **中** | Discord 回复超过 2000 字符时被截断而非分块发送，长回复内容丢失 | [#2812](https://github.com/nanocoai/nanoclaw/pull/2812) | ✅ 已有 fix PR，待合并 |

**无新报告的无 PR 覆盖的 Bug。** 两个已知缺陷均有对应修复 PR 在队列中，稳定性风险可控，但需尽快合并以避免影响用户体验。

---

## 6. 功能请求与路线图信号

从当前 PR 队列中可以识别出以下路线图信号：

1. **Apple Container / macOS 原生容器支持** ([#2809](https://github.com/nanocoai/nanoclaw/pull/2809))
   信号强度：强。PR 已完整实现，包含环境变量开关和远程网关支持。一旦合并，将解锁 macOS 用户的无缝本地部署路径，**极可能纳入下一版本**。

2. **远程 OneCLI 网关** ([#2809](https://github.com/nanocoai/nanoclaw/pull/2809) + [#2605](https://github.com/nanocoai/nanoclaw/pull/2605))
   两条 PR 共同指向远程 Agent 编排能力。#2809 提供基础设施，#2605 提供权限继承逻辑。**远程多 Agent 协作**正在成为明确的路线图方向。

3. **子 Agent 权限继承** ([#2605](https://github.com/nanocoai/nanoclaw/pull/2605))
   5 月底创建、昨日更新，说明作者仍在积极跟进。结合 #2809 的远程网关，权限继承是多 Agent 架构的必要拼图。

4. **Discord 平台体验完善** ([#2812](https://github.com/nanocoai/nanoclaw/pull/2812))
   分块发送是平台适配的基础能力，属于**平台成熟度提升**的常规迭代。

---

## 7. 用户反馈摘要

今日无新 Issue 报告，无法从评论中提炼用户反馈。但从 PR 内容可间接推断以下用户痛点：

- **审批流程不可审计**：`approvals list` 命令因数据缺失而无法有效使用，管理员无法追踪审批请求的投递渠道和消息 ID。这是 Agent 治理场景中的核心痛点。
- **Discord 长回复体验差**：超过 2000 字符的回复被静默截断，用户收到不完整信息却无提示。影响复杂任务（如代码审查、长文档摘要）的交付质量。
- **macOS 部署门槛高**：现有 Docker 依赖对 macOS 用户不够友好，Apple Container 支持的需求真实且迫切。

---

## 8. 待处理积压

| 积压项 | 创建时间 | 最后更新 | 等待天数 | 建议优先级 |
|--------|----------|----------|----------|------------|
| [#2605](https://github.com/nanocoai/nanoclaw/pull/2605) — 子 Agent 权限继承 | 2026-05-24 | 2026-06-19 | **27 天** | 🔴 高 — 已近一个月，作者昨日仍在更新，需维护者尽快 review |
| [#2812](https://github.com/nanocoai/nanoclaw/pull/2812) — Discord 分块发送 | 2026-06-18 | 2026-06-19 | 2 天 | 🟡 中 — 修复明确，建议优先合并 |
| [#2820](https://github.com/nanocoai/nanoclaw/pull/2820) — 审批数据持久化 | 2026-06-19 | 2026-06-19 | 1 天 | 🟡 中 — 影响审批功能完整性 |
| [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) — Apple Container | 2026-06-18 | 2026-06-19 | 2 天 | 🟡 中 — 功能覆盖面广，建议安排 review |
| [#2819](https://github.com/nanocoai/nanoclaw/pull/2819) — MseeP.ai 徽章 | 2026-06-19 | 2026-06-19 | 1 天 | 🟢 低 — 推广类 PR，可按需处理 |

**⚠️ 特别提醒**：PR #2605 已开放近一个月，涉及权限模型核心逻辑，建议维护者尽快给予反馈，避免贡献者流失。

---

> **项目健康度评估**：🟡 中等偏上。无紧急事故，Bug 有 PR 覆盖，但 PR 积压且零合并/零评论，维护响应速度是主要瓶颈。建议维护者在本周内至少完成 #2820 和 #2812 的合并，并对 #2605 给出明确反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-20

---

## 1. 今日速览

NullClaw 今日整体活跃度**偏低**，处于常规维护节奏。过去 24 小时内新增/活跃 Issue 2 条、待合并 PR 1 条，无新版本发布。值得关注的是，一个针对 Android/Termux 平台 Zig 构建失败的 Bug（Issue #868）已催生对应的修复 PR #966，显示社区贡献者响应较为及时。飞书集成联网问题（Issue #484）仍处于开放状态，社区讨论有限。项目整体健康度良好，无紧急安全或稳定性事件。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

今日无 PR 合并或关闭，但有一条新 PR 值得关注：

- **PR #966** — `fix(http): route stdlib HTTP through curl on aarch64-linux-android`
  - **作者：** vernonstinebaker | **状态：** OPEN | **链接：** [nullclaw/nullclaw#966](https://github.com/nullclaw/nullclaw/pull/966)
  - **内容：** 将 `aarch64-linux-android`（Termux）平台上的标准库 HTTP 请求路由至 curl，以绕过 Zig 0.16 stdlib 在 Android 上因缺少 `/etc/resolv.conf` 导致的 `getaddrinfo()` DNS 解析失败问题。
  - **意义：** 直接对应 Issue #868 的构建失败问题，若合并将显著改善 Android/Termux 用户的开发体验。

---

## 4. 社区热点

| 条目 | 评论数 | 👍 | 链接 |
|------|--------|-----|------|
| Issue #484 — 飞书无法联网查询 | 3 | 0 | [nullclaw/nullclaw#484](https://github.com/nullclaw/nullclaw/issues/484) |
| Issue #868 — zig build fails on Android/Termux | 2 | 0 | [nullclaw/nullclaw#868](https://github.com/nullclaw/nullclaw/issues/868) |

**分析：**
- **Issue #484** 评论数最多（3 条），反映飞书渠道用户在联网查询功能上遇到障碍，可能涉及飞书 API 权限配置或网络代理问题，但缺乏维护者回复，诉求尚未得到明确回应。
- **Issue #868** 虽评论较少，但已有贡献者主动提交修复 PR #966，说明该问题定位清晰、修复路径明确，社区自驱力较强。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|----------|-------|------|--------|
| 🔴 高 | [#868](https://github.com/nullclaw/nullclaw/issues/868) | `zig build` 在 Android/Termux (aarch64) 上因 `linkat` AccessDenied 及 DNS 解析失败无法编译 | ✅ PR #966 已提交 |
| 🟡 中 | [#484](https://github.com/nullclaw/nullclaw/issues/484) | 飞书渠道无法联网查询，影响核心功能可用性 | ❌ 暂无 |

**说明：** Issue #868 的构建失败直接阻断 Android 平台用户使用，严重程度高，且已有针对性修复 PR 待审。Issue #484 影响飞书集成场景下的联网能力，需进一步排查根因。

---

## 6. 功能请求与路线图信号

今日无新增功能请求类 Issue。当前活跃 Issue 均为 Bug 报告，未发现明确的路线图信号。建议维护者在 PR #966 合并后，关注 Android/Termux 平台支持是否应纳入下一版本的平台兼容性改进计划。

---

## 7. 用户反馈摘要

- **Android/Termux 开发者**（Issue #868）：在 Xiaomi Redmi Note 9 + LineageOS 22.2 + Termux 环境下使用 Zig 0.16 构建 nullclaw v2026.4.17 时遭遇编译失败，错误涉及文件系统权限和 DNS 解析。用户提供了完整的环境信息，便于复现。
- **飞书用户**（Issue #484）：反馈飞书渠道下无法进行联网查询，附截图但问题描述较简略，需补充日志或复现步骤。

**痛点共性：** 两类问题均涉及特定平台/渠道的兼容性问题，说明 NullClaw 在边缘平台（Android、飞书）的测试覆盖可能不足。

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 状态 | 链接 |
|------|----------|----------|------|------|
| Issue #484 — 飞书无法联网查询 | 2026-03-13 | 2026-06-19 | OPEN | [nullclaw/nullclaw#484](https://github.com/nullclaw/nullclaw/issues/484) |
| Issue #868 — zig build fails on Android/Termux | 2026-04-23 | 2026-06-19 | OPEN | [nullclaw/nullclaw#868](https://github.com/nullclaw/nullclaw/issues/868) |
| PR #966 — fix(http): route stdlib HTTP through curl on aarch64-linux-android | 2026-06-19 | 2026-06-19 | OPEN | [nullclaw/nullclaw#966](https://github.com/nullclaw/nullclaw/pull/966) |

**提醒：**
- **Issue #484** 已开放近 3 个月，建议维护者主动联系提问者获取更多复现信息，或标记为需要更多信息（`needs-info`）。
- **PR #966** 为当日新提交，建议尽快 review 并决定是否合并，以闭环 Issue #868。

---

*数据来源：GitHub API | 生成时间：2026-06-20 | 分析工具：OWL*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-20

---

## 1. 今日速览

IronClaw 今日处于**高活跃开发期**，过去 24 小时内共产生 30 条 PR 更新（18 条待合并、12 条已合并/关闭）和 5 条 Issue 更新，无新版本发布。项目核心工作集中在 **Reborn 架构的功能补全与 CI 基础设施加固**上——Projects 页面完成 5/5 堆叠合并、外部工具 Responses 链路进入 Phase 4、Telegram/Slack 双渠道 ingress 并行推进。同时，一个统一的 feature-flag 系统提案（#5091）和并发 turn 执行调度器（#5085）标志着 Reborn 正从"功能可用"向"生产级可运维"过渡。整体项目健康度良好，PR 吞吐量高，但积压的长期 Issue（如 nightly E2E 持续失败）仍需关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 12 条 PR 推动了多项关键功能落地：

| PR | 状态 | 核心贡献 |
|---|---|---|
| [#5019](https://github.com/nearai/ironclaw/pull/5019) | ✅ 已合并 | **Projects 页面 5/5 堆叠完成** — 前端 WebChat v2 接入真实 `/api/webchat/v2/projects` CRUD 端点，Projects 页面正式点亮 |
| [#5064](https://github.com/nearai/ironclaw/pull/5064) | ✅ 已合并 | 修复已合并 Projects 切片遗留的 review 注释：类型化时间戳、DTO 对齐 |
| [#5095](https://github.com/nearai/ironclaw/pull/5095) | ✅ 已合并 | 新增 Reborn QA LLM trace 录制 fixtures（connection/routine/web-fetch 场景），强化回归测试基础设施 |
| [#5096](https://github.com/nearai/ironclaw/pull/5096) | ✅ 已合并 | 将 7 个 `project-setup` benchmark 从 `nearai/benchmarks` 迁移至 Reborn QA 录制回放框架 |
| [#5097](https://github.com/nearai/ironclaw/pull/5097) | ✅ 已合并 | 为 AGENTS.md 添加 Reborn QA 测试指引，明确跨层行为测试与 hermetic 集成测试的边界 |
| [#5090](https://github.com/nearai/ironclaw/pull/5090) | ✅ 已合并 | 将 mold linker 优化扩展至 reborn-e2e 和 replay-gate Rust CI 作业，持续压缩 CI 反馈周期 |
| [#5092](https://github.com/nearai/ironclaw/pull/5092) | ✅ 已合并 | 新增 sccache vs rust-cache A/B 实验性工作流，为后续 CI 缓存策略决策提供数据 |

**仍在推进中的重要开放 PR：**

- **[#5099](https://github.com/nearai/ironclaw/pull/5099)** — 外部工具 Responses 往返链路 Phase 4b-4f（基于 #5094 的模型验证基础），实现 `function_call` 停车/恢复完整流程
- **[#5094](https://github.com/nearai/ironclaw/pull/5094)** — `/v1/models` 端点、模型验证、外部工具门控基础，为 OpenAI 兼容表面铺路
- **[#5093](https://github.com/nearai/ironclaw/pull/5093)** — Slack ingress 从 extension state 投影，与 [#5100](https://github.com/nearai/ironclaw/pull/5100)（Telegram 同类实现）形成双渠道并行
- **[#5085](https://github.com/nearai/ironclaw/pull/5085)** — 并发 turn 执行调度器（TurnRunScheduler），打破串行执行瓶颈，支持 per-user/per-type 并发上限
- **[#5062](https://github.com/nearai/ironclaw/pull/5062)** — 工具级权限覆盖模型（`always_allow` / `ask_each_time` / `disabled`），为精细化审批控制奠基
- **[#5081](https://github.com/nearai/ironclaw/pull/5081)** — 托管单租户 PostgreSQL profile，为 Reborn 托管预览路径提供持久化状态后端
- **[#5061](https://github.com/nearai/ironclaw/pull/5061)** — Hermes 风格技能提取与自进化机制，后台自动将成功对话提炼为可复用 `SKILL.md`

---

## 4. 社区热点

### 🔥 Issue [#5091](https://github.com/nearai/ironclaw/issues/5091) — 统一 Feature-Flag 系统提案
- **作者：** ilblackdragon（核心贡献者）
- **标签：** enhancement, scope: config, reborn, module:M1-webui-product, module:M4-host-kernel
- **摘要：** 当前 Reborn 的功能开关依赖零散的 `std::env::var` 检查（如 `IRONCLAW_REBORN_PROJECTS`），均为部署级二进制开关、启动时读取一次，缺乏 per-tenant/per-user 定向、渐进 rollout 和 A/B 测试能力。提案要求建立统一的 feature-flag 系统，支持环境变量 + 动态切换 + 定向发布。
- **分析：** 这是 Reborn 从开发阶段迈向生产部署的关键基础设施诉求。随着 Projects、Triggers、外部工具等功能陆续上线，缺乏精细化的功能开关将成为发布风险的主要来源。该提案直接关联到 [#5062](https://github.com/nearai/ironclaw/pull/5062)（工具权限覆盖）和 [#5085](https://github.com/nearai/ironclaw/pull/5085)（并发调度）等功能的灰度发布需求。

### 🔥 Issue [#5078](https://github.com/nearai/ironclaw/issues/5078) — 大型工具命令导致审批弹窗难以阅读（已关闭）
- **作者：** sunglow666
- **摘要：** 审批弹窗现在会显示实际执行的命令，但对大型 shell 命令，命令内容过长会占据弹窗主导位置，使审批控件和动作详情难以查看。
- **分析：** 虽然已关闭，但反映了 Reborn 审批 UX 在边缘场景下的可用性问题。随着外部工具调用日趋复杂（如多行脚本、管道命令），审批弹窗的信息层级设计需要更精细的折叠/截断策略。

### 🔥 Issue [#1012](https://github.com/nearai/ironclaw/issues/1012) — Alibaba Coding Plan 在 openai_compatible 模式下无法使用
- **作者：** wznmickey | 👍: 1
- **摘要：** 在其他 *claw 框架中可通过 openai_compatible 端点使用 Alibaba coding plan，但在 IronClaw 中收到 HTTP 405 错误。
- **分析：** 这是 OpenAI 兼容性覆盖面的缺口。随着 [#5094](https://github.com/nearai/ironclaw/pull/5094) 推进 `/v1/models` 和模型验证基础，此类 provider 兼容性问题应被纳入测试矩阵。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#4108](https://github.com/nearai/ironclaw/issues/4108) | OPEN | **Nightly E2E 持续失败** — 自 2026-05-27 起 nightly E2E 定时运行持续报错，涉及 `Full E2E / E2E (features)` 作业 | 无直接 fix PR；[#4829](https://github.com/nearai/ironclaw/pull/4829) 尝试将 Reborn 套件迁移至 nightly deep CI |
| 🟡 中 | [#5088](https://github.com/nearai/ironclaw/issues/5088) | OPEN | Shell 审批提示将读取命令误标为 `"reads"` — 用户看到 `reads` 并非实际 shell 命令，造成困惑 | 无 |
| 🟡 中 | [#1012](https://github.com/nearai/ironclaw/issues/1012) | OPEN | Alibaba Coding Plan 在 openai_compatible 端点返回 HTTP 405 | 无 |
| 🟢 低 | [#5078](https://github.com/nearai/ironclaw/issues/5078) | CLOSED | 大型命令导致审批弹窗 UX 退化 | 已关闭（具体修复 PR 未在数据中标注） |

**稳定性评估：** Nightly E2E 的持续失败（已超过 3 周）是最突出的稳定性隐患，表明主分支上存在未被捕捉的回归。建议优先排查 E2E 失败根因，或暂时将失败作业从阻塞门禁中解耦以避免掩盖其他 PR 的 CI 信号。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 Issue | 关联 PR | 信号强度 |
|---|---|---|---|
| **统一 Feature-Flag 系统** | [#5091](https://github.com/nearai/ironclaw/issues/5091) | 暂无 | 🟡 中 — 核心贡献者提案，但尚无实现 PR |
| **并发 Turn 执行** | 隐含需求 | [#5085](https://github.com/nearai/ironclaw/pull/5085) | 🟢 强 — PR 已开放，实现完整 |
| **外部工具 Responses 完整链路** | 隐含需求 | [#5094](https://github.com/nearai/ironclaw/pull/5094) + [#5099](https://github.com/nearai/ironclaw/pull/5099) | 🟢 强 — Phase 4 分阶段推进中 |
| **Telegram + Slack 双渠道 Ingress** | 隐含需求 | [#5093](https://github.com/nearai/ironclaw/pull/5093) + [#5100](https://github.com/nearai/ironclaw/pull/5100) | 🟢 强 — 同日并行提交 |
| **技能自进化** | 隐含需求 | [#5061](https://github.com/nearai/ironclaw/pull/5061) | 🟡 中 — PR 开放但为新贡献者，需核心 review |
| **一次性定时触发器** | 隐含需求 | [#5065](https://github.com/nearai/ironclaw/pull/5065) | 🟡 中 — PR 开放，设计清晰 |
| **工具级权限覆盖** | [#4958](https://github.com/nearai/ironclaw/issues/4958) | [#5062](https://github.com/nearai/ironclaw/pull/5062) | 🟢 强 — PR 直接对应 Issue |
| **Google OAuth Token 自动刷新** | [#5071](https://github.com/nearai/ironclaw/issues/5071) | [#5087](https://github.com/nearai/ironclaw/pull/5087) | 🟢 强 — PR 已开放并标注 closes |

**路线图判断：** 下一版本（或下一个里程碑）极可能包含：Projects 页面正式可用、外部工具 Responses 往返链路完整、Telegram/Slack 渠道接入、并发 turn 执行。Feature-Flag 系统可能以提案评审 + 设计讨论阶段进入，具体实现或需更长时间。

---

## 7. 用户反馈摘要

**痛点：**
- **审批 UX 在复杂场景下退化**（#5078）：大型 shell 命令导致审批弹窗信息过载，用户无法有效审查动作详情。这反映了安全审批场景下信息架构的深层挑战——如何在"透明展示执行内容"与"保持审批控件可操作"之间取得平衡。
- **OpenAI 兼容性覆盖不足**（#1012）：Alibaba Coding Plan 等国内模型提供商在 openai_compatible 端点下无法使用，限制了 IronClaw 在国内开发者群体中的适用性。
- **Shell 审批日志语义混乱**（#5088）：`reads` 作为非实际命令出现在审批提示中，降低了用户对审批系统的信任感。

**满意信号：**
- 审批弹窗开始显示实际命令内容（#5078 中肯定"now display the actual command being executed, which is helpful"），说明透明度改进方向受到认可。

**使用场景：**
- 本地开发场景（Reborn local-dev）是高频使用环境（#5088 明确提到"using IronClaw Reborn locally"）
- 多模型提供商混用场景（openai_compatible 端点 + 非 OpenAI 原生模型）

---

## 8. 待处理积压

| 项目 | 创建日期 | 最后更新 | 状态 | 风险 |
|---|---|---|---|---|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E 持续失败 | 2026-05-27 | 2026-06-19 | OPEN | 🔴 **高** — 超过 3 周未解决，可能掩盖主分支回归 |
| **[#1012](https://github.com/nearai/ironclaw/issues/1012)** — Alibaba Coding Plan 兼容性 | 2026-03-12 | 2026-06-19 | OPEN | 🟡 **中** — 创建已超 3 个月，仅有 1 次更新，用户有 👍 但无维护者响应 |
| **[#4829](https://github.com/nearai/ironclaw/pull/4829)** — 退役 dormant CI + 迁移至 nightly deep CI | 2026-06-12 | 2026-06-19 | OPEN | 🟡 **中** — 与 #4108 直接相关，但 PR 本身 review 进展不明 |
| **[#4002](https://github.com/nearai/ironclaw/pull/4002)** — Dependabot 批量 bump（16 个 actions 更新） | 2026-05-24 | 2026-06-19 | OPEN | 🟡 **中** — 创建近 1 个月，涉及 `actions/checkout` 大版本跨越（v4→v7），需谨慎验证 |

**维护者行动建议：**
1. **立即**：排查 Nightly E2E 失败根因，或将其从阻塞门禁中临时解耦
2. **本周内**：对 #1012 给出明确回复（是否为已知限制 / 是否有修复计划）
3. **本周内**：推进 #4829 和 #4002 的 review/合并决策，避免 CI 配置积压

---

*数据来源：GitHub nearai/ironclaw | 报告生成时间：2026-06-20 | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-06-20 | 数据来源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

过去24小时，LobsterAI 项目整体活跃度**中等偏低**。共处理 4 条 Issues（1 条新开，3 条已关闭），PR 活动为零，但发布了 **LobsterAI 2026.6.18** 新版本。版本更新聚焦于**制品分享能力扩展**和**语音输入修复**，属于功能性增强与小修小补的组合。社区侧出现一条重量级的 Feature Request（#2180），提出将 OpenClaw 升级为 AI 协作平台，值得关注。整体来看，项目处于**稳定迭代期**，核心功能持续打磨，但社区 Issue 响应速度偏慢——今日关闭的 3 条 Issue 均为 stale 状态，平均存活超过 70 天。

---

## 2. 版本发布

### 🔖 LobsterAI 2026.6.18（2026-06-18）

**更新内容：**

| 类型 | 模块 | 说明 |
|------|------|------|
| 🆕 feat | artifacts | 制品分享能力升级，新增支持 Word、PPT、Excel、PDF、Markdown、Mermaid 等多种文件类型的分享 |
| 🐛 fix | voice-input | 语音输入模块修复，仅保留实时 ASR（自动语音识别）模式 |

**破坏性变更：** 未发现明确的破坏性变更声明。

**迁移注意事项：**
- `artifacts` 模块的分享能力扩展为向后兼容的功能增强，现有分享链接和 API 调用应无需修改。
- `voice-input` 的 fix 涉及 ASR 模式调整，若用户此前依赖非实时 ASR 模式，需确认该模式是否已被移除或降级，建议在升级后重新测试语音输入流程。

**关联 PR：** [PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159)（by @liugang519）

---

## 3. 项目进展

今日无 PR 合并或关闭活动。版本 2026.6.18 的发布依赖此前已合并的 PR #2159（artifacts 分享能力升级），该 PR 为本次版本的核心功能贡献。

**项目整体向前推进的方向：**
- **多格式制品分享**：标志着 LobsterAI 在协作与输出物分发能力上迈出重要一步，支持办公文档（Word/PPT/Excel/PDF）和图表（Mermaid）的分享，提升了作为 AI 协作工具的实用性。
- **语音输入稳定性**：ASR 模块收敛到实时模式，简化了架构，降低了维护成本。

---

## 4. 社区热点

### 🔥 Issue #2180 — Build "AI Collaborator" Form: Introduce Natural Language Command Bar and Task Dispatch Console

- **链接：** [netease-youdao/LobsterAI#2180](https://github.com/netease-youdao/LobsterAI/issues/2180)
- **作者：** woxinsj | **创建：** 2026-06-19 | **评论：** 0 | **👍：** 0
- **状态：** OPEN（新 Issue，尚无社区讨论）

**分析：** 这是一条**战略性 Feature Request**，提出将 OpenClaw 从底层工具集升级为面向"技术型非精英程序员"的 AI 协作平台，核心诉求包括：
1. **自然语言命令栏** — 用自然语言驱动跨模型编排
2. **任务调度控制台** — 可视化管理 AI 任务的分发与执行
3. **项目级记忆** — 跨会话的上下文持久化

该 Issue 附带了详细的提案文档（[openclaw-ai-collaborator-proposal.md](https://github.com/user-attachments/files/29118222/openclaw-ai-collaborator-proposal.md)），说明提案者进行了深入思考。这与 LobsterAI 当前版本（2026.6.18）聚焦的制品分享和语音输入修复形成鲜明对比——社区用户期望的是**平台级的范式升级**，而非增量改进。

---

## 5. Bug 与稳定性

今日关闭的 3 条 Issue 均为 Bug 报告，但均因 stale 被关闭，**未见明确的修复 PR 关联**：

| 严重程度 | Issue | 问题描述 | 状态 | Fix PR |
|----------|-------|----------|------|--------|
| 🔴 高 | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) | 切换会话/视图时输入框草稿因去抖未持久化导致内容丢失 | CLOSED (stale) | ❌ 无 |
| 🔴 高 | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) | 编辑历史消息时静默覆盖当前输入框未发送内容，无确认提示 | CLOSED (stale) | ❌ 无 |
| 🟡 中 | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) | 会话中调用 Python 脚本异常（本地 30B 模型），同 skills 在 Claude Code CLI 中正常 | CLOSED (stale) | ❌ 无 |

**⚠️ 关键观察：** 以上 3 条 Bug 均存活超过 70 天后被 stale 自动关闭，未获得实质性修复。其中 #1471 和 #1472 涉及**用户数据丢失**（草稿丢失、内容被覆盖），属于高优先级体验问题，建议维护者评估是否需要重新打开并修复。

---

## 6. 功能请求与路线图信号

| 优先级 | 功能请求 | 来源 | 信号强度 | 纳入可能性 |
|--------|----------|------|----------|------------|
| ⭐⭐⭐ | AI 协作平台升级：自然语言命令栏 + 任务调度控制台 + 项目级记忆 | [#2180](https://github.com/netease-youdao/LobsterAI/issues/2180) | 单 Issue，附详细提案 | 🟡 中 — 方向性提案，需社区讨论和 RFC 流程 |
| ⭐⭐ | 多格式制品分享（Word/PPT/Excel/PDF/Mermaid） | [PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159) | 已合并，已发布 | ✅ 已完成 |

**路线图判断：** 当前版本聚焦于**实用功能打磨**（分享、语音修复），而社区正在呼唤**平台级架构升级**。下一版本（2026.7.x）可能仍以小修小补为主，但 #2180 提案若获得足够社区支持，可能催生独立的 RFC 分支或子项目。

---

## 7. 用户反馈摘要

从今日处理的 Issues 中提炼以下用户痛点与使用场景：

**🔴 痛点：**
- **草稿丢失问题（#1471）**：用户在 Cowork 输入框中输入内容后快速切换会话/视图，300ms 去抖机制导致内容未持久化即丢失。反映用户有**多任务并行切换**的使用习惯。
- **内容覆盖无确认（#1472）**：编辑历史消息时直接覆盖当前输入框内容，无二次确认。反映用户在**长对话场景中频繁回溯和编辑历史消息**。
- **Python 脚本执行环境差异（#1487）**：同一 Python 脚本在 Claude Code CLI 中正常，在 LobsterAI 会话中异常。反映用户将 LobsterAI 作为**本地模型测试和开发工具**使用，对执行环境一致性有高要求。

**🟡 使用场景画像：**
- 用户倾向于在 Cowork 会话中进行**长文本编写和多轮迭代**，对输入框状态管理敏感。
- 用户将 LobsterAI 与 Claude Code CLI 等工具**并行使用**，对功能对等有明确预期。

**🟢 满意点：** 未在今日 Issues 中观察到正面反馈。

---

## 8. 待处理积压

| Issue | 等待时间 | 严重程度 | 建议 |
|-------|----------|----------|------|
| [#2180](https://github.com/netease-youdao/LobsterAI/issues/2180) — AI 协作平台升级提案 | 1 天（新 Issue） | 🔵 功能请求 | 建议维护者尽快给予初步回应（acknowledgment），引导社区讨论或要求补充 RFC |
| [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) — 草稿丢失 | 76 天（stale 关闭） | 🔴 高 | 建议重新评估，考虑在组件卸载时强制 flush 去抖内容 |
| [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) — 内容覆盖无确认 | 75 天（stale 关闭） | 🔴 高 | 建议重新评估，添加确认对话框或草稿保护机制 |
| [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) — Python 脚本执行异常 | 75 天（stale 关闭） | 🟡 中 | 建议请求用户提供最小复现案例，确认是否为环境配置问题 |

**⚠️ 积压风险提示：** 3 条高/中优先级 Bug 被 stale 关闭可能引发社区不满。建议建立**stale 关闭前的修复评估流程**，或在关闭时留下明确的"欢迎复现后重新打开"的说明。

---

*日报由 OWL 自动生成 | 数据截至 2026-06-20 00:00 UTC*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 — 2026-06-20

**项目地址**: [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. 今日速览

CoPaw 今日活跃度处于中高水位：过去 24 小时内共产生 **11 条 Issue 更新**（10 新开/活跃、1 关闭）、**16 条 PR 更新**（10 待合并、6 已合并/关闭），无新版本发布。社区贡献者参与度较高，尤其是 **lecheng2018** 和 **nguyenthanhthe** 两位贡献者在同一天内分别提交了多条修复及功能 PR，协同推进节奏明显加快。整体来看，项目正处于 **v1.1.12.post1 发布后的密集修复期**，多个回归问题正在被快速响应。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共有 **4 个 PR 被合并/关闭**，均直接关联用户报告的 Bug：

### ✅ 已合并/关闭的重要 PR

| PR | 说明 | 关联 Issue |
|---|---|---|
| **#5332** [已合并] fix(memory): add index maintenance and timeout protection for ChromaDB | 新增 `compact_index()`、`purge_index()`、`get_index_stats()` 手动维护接口；引入自动压缩策略（默认 1000 次写入阈值）；增加超时保护 | [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) |
| **#5242** [已合并] fix(compaction): add timeout protection to agent.reply() in _compact_context | 为上下文压缩中的 `agent.reply()` 添加超时保护，防止 LLM API 挂起时整个进程冻结 | — |
| **#5241** [已合并] fix(cron): increase default misfire_grace_seconds from 60 to 3600 | 将 cron 任务的错失宽限期从 60 秒提升至 3600 秒，避免长任务运行期间定时任务被静默跳过 | — |
| **#5179** [已合并] fix(skills): expand multi-agent collaboration skill trigger keywords | 扩展 `multi_agent_collaboration` skill 的触发关键词，解决用户明确要求"团队协作"模式时被忽略的问题 | — |

### 📊 评判
项目在 **内存稳定性**（ChromaDB 无限膨胀）、**进程健壮性**（压缩超时保护）、**定时任务可靠性**（cron misfire 窗口）和 **多 Agent 协作触发** 四个方向上同时推进修复，说明维护团队正在系统性地夯实 v1.1.x 系列的基础稳定性。

---

## 4. 社区热点

### Issue #4795 — 向量索引无限膨胀至 37GB 导致 memory_search 崩溃
- **链接**: [agentscope-ai/CoPaw#4795](https://github.com/agentscope-ai/CoPaw/issues/4795)
- **状态**: OPEN | 👍 0 | 💬 3
- **热度分析**: 这是一个持续了近 3 周的高严重度 Bug。用户报告正常使用 3 个月后 ChromaDB 膨胀至 37GB，session 文件仅 2.6MB，排除了会话层问题，确认根因在于向量数据库。该 Issue 的解决标志着项目在长期运行稳定性上迈过了一个关键门槛——PR #5332 已合并，提供了自动压缩和手动维护手段。

### Issue #5333 — Agent 执行后 UI 状态卡死（文本框可提交而非暂停按钮）
- **链接**: [agentscope-ai/CoPaw#5333](https://github.com/agentscope-ai/CoPaw/issues/5333)
- **状态**: OPEN | 👍 0 | 💬 1
- **热度分析**: 用户反馈提交指令后 Agent 看似在运行实则卡死，而 UI 未正确切换为"停止"状态，允许用户继续提交新指令。这与 Issue #5328（DeepSeek thinking 卡死）高度相关，共同指向 **流式响应（SSE）异常处理链路** 的缺陷。PR #5335 已被提交修复，预计在下一个 patch 版本中落地。

### Issue #5267 & Issue #5327 — 功能请求集中涌现
- **#5267** [链接](https://github.com/agentscope-ai/CoPaw/issues/5267): 模型列表自定义排序 → PR #5336 已提交
- **#5327** [链接](https://github.com/agentscope-ai/CoPaw/issues/5327): 智能体办公室加入对话和会话切换按钮 → 尚无 PR

两个功能请求都指向同一用户痛点：**在多 Agent 工作流中，管理和切换 Agent 的操作效率不足**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|---|
| 🔴 **严重** | [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) | ChromaDB 膨胀至 37GB，memory_search 持续崩溃 | #5332 | ✅ 已合并 |
| 🔴 **严重** | [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) | DeepSeek thinking 阶段卡死，需手动停止后重新继续 | 暂无 PR | ⏳ 待响应 |
| 🟡 **中等** | [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) | Zhipu 供应商 API 测试连接成功但所有模型测试失败 | #5339 | 🔀 待合并 |
| 🟡 **中等** | [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333) | Agent 执行后 UI 卡死，输入框状态未切换到"停止" | #5335 | 🔀 待合并 |
| 🟡 **中等** | [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320) | v1.1.12 升级后 send_file_to_user 图片不显示（回归问题） | #5324 | 🔀 待合并 |
| 🟢 **低** | [#5319](https://github.com/agentscope-ai/CoPaw/issues/5319) | Console channel 显示 "Answers have stopped" | — | ✅ 已关闭（重装解决） |
| ℹ️ **环境问题** | [#5317](https://github.com/agentscope-ai/CoPaw/issues/5317) | Windows Tauri 下conda Python 路径丢失，skill 无法运行 Python 脚本 | 暂无 PR | ⏳ 待响应 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有 PR | 趋势判断 |
|---|---|---|---|
| 模型列表自定义排序 | [#5267](https://github.com/agentscope-ai/CoPaw/issues/5267) | [#5336](https://github.com/agentscope-ai/CoPaw/pull/5336) (OPEN) | ⏳ 高概率纳入下版本 |
| 折叠侧边栏模式下切换 Agent | [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) | [#5334](https://github.com/agentscope-ai/CoPaw/pull/5334) (OPEN) | ⏳ 高概率纳入下版本（移动端刚需） |
| 实时 SSE 推送 + 语音提醒 | [#5322](https://github.com/agentscope-ai/CoPaw/issues/5322) | [#5331](https://github.com/agentscope-ai/CoPaw/pull/5331) (OPEN) | ⏳ 积极开发中 |
| 原生 todo_write 进度面板 | [#5318](https://github.com/agentscope-ai/CoPaw/issues/5318) | [#5323](https://github.com/agentscope-ai/CoPaw/pull/5323) (OPEN) | ⏳ 积极开发中 |
| 窗口最小化到系统托盘 | [#5312](https://github.com/agentscope-ai/CoPaw/issues/5312) | [#5326](https://github.com/agentscope-ai/CoPaw/pull/5326) (OPEN) | ⏳ 积极开发中 |
| 记忆搜索的时间衰减排序 | [#5316](https://github.com/agentscope-ai/CoPaw/issues/5316) | [#5325](https://github.com/agentscope-ai/CoPaw/pull/5325) (OPEN) | ⏳ 积极开发中 |
| 智能体办公室加入对话按钮 | [#5327](https://github.com/agentscope-ai/CoPaw/issues/5327) | 暂无 | 🔵 待认领 |
| Scroll 上下文管理策略 | — | [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) (OPEN, first-time-contributor) | 🔵 新贡献者提交，需 Review |

**信号解读**: 目前有 **5 个 PR 处于待合并状态**，全部是对应用户 Issue 的直接响应。下一版本（推测 v1.1.13 或 v1.2.0）的路线图将围绕三条主线展开：(**1**) 修复 v1.1.12 引入的回归 Bug（图片显示、UI 状态管理）；(**2**) 增强 SSE/流式响应链路的可靠性；(**3**) UX 层面的效率改进（多 Agent 管理、实时通知、计划进度可视化）。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **DeepSeek 兼容性问题是当前最高频抱怨点** — bob-geek11 在一天内连续提交了 #5328（thinking 卡死）和 #5333（UI 状态异常）两个 Issue，均指向 DeepSeek 作为后端时的体验缺陷，且用户在 web 端、console 端、Tauri 端均复现，说明问题出在**通用模型响应处理层**而非特定 channel。

2. **移动端/窄屏适配不足** — Issue #5329 的用户通过手机浏览器访问后端时发现折叠状态下无法切换 Agent，这是一个典型的移动端 UX 缺陷。

3. **升级后回归令人沮丧** — Issue #5320 用户在 v1.1.12 升级后图片无法正常显示，且历史聊天记录中的图片也一并消失，这属于数据层面的回归而非单纯 UI 问题。

4. **向量数据库在缺乏维护机制下的长期运行风险** — Issue #4795 揭示的 37GB 膨胀问题表明，此前的 ChromaDB 类似"黑盒"运行，用户缺乏任何监控和干预手段。

### 😊 满意

- Issue #5319 的用户通过重装快速解决后主动关闭了 Issue，社区响应效率尚可。

---

## 8. 待处理积压

以下为长期未得到充分响应或存在处理延迟的风险项：

| 项目 | 风险说明 | 建议行动 |
|---|---|---|
| **Issue #4795** 延迟 3 周才合并修复 | ChromaDB 膨胀问题从 5 月 29 日报告到 6 月 19 日 PR 合并，历时近 3 周。属于**严重稳定性问题**的响应偏慢。 | ✅ 已解决。建议后续建立性能类 Bug 的 SLA 机制。 |
| **Issue #5328** — DeepSeek 卡死问题无 PR | thinking 阶段卡死影响所有 DeepSeek 用户的日常使用，但截至本日报发布尚无修复 PR。 | ⚠️ 建议优先排期，该问题可能影响较大用户群。 |
| **Issue #5317** — Windows Tauri Python 路径 | conda 内置 Python 丢失导致 skill 无法运行 Python 脚本，影响 Windows 平台核心使用场景。 | ⚠️ 需要平台相关排查，建议标记 `help wanted` 吸引 Windows 平台贡献者。 |
| **PR #5321** — Scroll 上下文策略（新贡献者） | first-time-contributor 提交的大型功能 PR，涉及新的上下文管理策略和 agent-config 解析修复，Review 压力较大。 | 建议尽早分配 Reviewer，避免新贡献者流失。 |

---

> **项目健康度评分**: ★★★★☆ (4/5)
> 
> - **响应速度**: Issues 从报告到 PR 产出的周期整体合理，但 DeepSeek 相关问题和 Windows 路径问题尚需关注。
> - **贡献者活跃度**: lecheng2018 和 nguyenthanhthe 的高频贡献是当前开发推进的主要动力，但过度依赖少数贡献者存在 bus factor 风险。
> - **版本节奏**: 无新版本发布，但多个 Fix PR 蓄势待发，预计近期会有 patch 版本。
> - **社区治理**: first-time-contributor 参与度上升（#5321、#5334、#5321 等），说明项目的入门门槛和社区友好度在改善。

---

*本日报由 OWL 自动生成，数据来源：GitHub REST API，截至 2026-06-20。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-20

---

## 1. 今日速览

ZeroClaw 今日处于 **高活跃状态**，Issues 与 PR 各录得 50 条更新，社区参与度持续旺盛。项目刚发布 **v0.8.1** 补丁版本（207 次提交、45 位贡献者），标志着 v0.8.x 稳定化阶段全面启动。当前 PR 积压严重（47 条待合并），维护者面临较大的 review 压力。Discord 交互组件、SOP 运行时、OIDC 认证等重磅功能正在并行推进中，整体路线图向 v0.9.0 安全/架构方向演进。

---

## 2. 版本发布

### v0.8.1 — 首个 v0.8.x 补丁版本

- **发布链接**: [zeroclaw-labs/zeroclaw Releases](https://github.com/zeroclaw-labs/zeroclaw/releases)
- **规模**: 207 次提交，45 位贡献者，自 v0.8.0 以来
- **修复**: 123 项 bug fix
- **新功能**: 46 项 feature
- **聚焦领域**: 多智能体运行时（multi-agent runtime）、channels 通道栈、provider 提供商的稳定性

**迁移注意事项**:
- Issue #7787 报告 v0.8.0 预编译二进制文件 **未包含 Slack/Discord channel 功能**（从 v0.7.x 回归），v0.8.1 应已修复此问题。建议从 v0.7.x 升级的用户验证 channel 功能是否恢复正常。
- 涉及 agent rename/delete 的状态持久化顺序问题（#7907、#7941）已在当前 PR 队列中修复，建议关注合并进度后再升级生产环境。

---

## 3. 项目进展

### 今日合并/关闭的 PR 与 Issue

| # | 类型 | 说明 |
|---|------|------|
| **#6970** | Issue CLOSED | v0.8.1 integration/channel/provider/tool 跟踪器完成关闭，标志着 v0.8.1 集成队列入库 |
| **#5618** | Issue CLOSED | Phase 2 D1: DaemonSubsystems 回调替换为类型化 Registry API — 架构重构里程碑完成 |
| **#6271** | Issue CLOSED | V3 SwarmConfig schema + 运行时实现完成，为 v2→v3 迁移提供前进路径 |
| **#6826** | Issue CLOSED | Zerocode TUI 跟踪器关闭，TUI 作为独立二进制已交付 |
| **#8031** | Issue CLOSED | Noop 占位 issue 清理 |

### 当前推进中的重要 PR

| # | 规模 | 说明 |
|---|------|------|
| **#7965** | XL | **Discord 交互组件** — 按钮、选择框、模态框、按钮审批流、斜杠命令自动补全（EPIC B），补全 Discord 交互面 |
| **#8001** | L | **SOP RunStore trait + 内存后端** — 为 SOP 持久化/并发/可观测性打基础（EPIC B scaffold） |
| **#7946** | L | **模型上下文窗口使用量条** — 在 zerocode TUI、gateway agent chat、CLI 交互模式中统一展示 |
| **#8033** | — | **对话式 onboarding 助手** — 将 `zeroclaw onboard` 从废弃存根恢复为类 OpenClaw 的聊天式设置向导 |
| **#6893** | XL | **多数据库 session 后端** — PostgreSQL、Oracle、MySQL、Db2 四个可选特性门控后端，面向多智能体集群共享 session 状态场景 |

**整体评估**: v0.8.1 的发布标志着 v0.8.x 稳定化阶段正式开启，多条架构重构线（Registry API、SwarmConfig V3、SOP 运行时）已收束。当前 PR 积压 47 条，维护者 review 吞吐量是项目前进的主要瓶颈。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**#7787** — Prebuilt v0.8.0 binaries ship without Slack/Discord channel features
- 👍 1 | 💬 6 条评论
- 链接: [Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787)
- **分析**: 这是 v0.8.0 最严重的回归问题之一。用户发现官方预编译二进制缺少 Slack/Discord channel 功能，降级到 v0.7.5 才能恢复。这暴露了 CI/CD 构建流水线中 feature flag 配置不一致的问题。v0.8.1 应已修复，但社区仍在验证确认中。

**#5844** — Too much emphasis on memory
- 💬 6 条评论
- 链接: [Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)
- **分析**: 用户反映系统 prompt 对 memory 的权重过高，尤其在 cron job 场景中，历史记忆压过了当前 prompt 的意图。这是一个长期存在的 agent 行为调优问题，涉及 prompt engineering 和 memory 检索策略的核心设计。

**#7141** — OIDC Authentication Provider support (RFC)
- 💬 5 条评论
- 链接: [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)
- **分析**: 目标 v0.9.0 的安全/架构级 RFC，要求支持可插拔的 OIDC 认证提供商。这是企业级部署的刚需，与 #7432（v0.9.0 auth/security tracker）联动。

**#6067** — Make channel reply-intent precheck configurable
- 💬 5 条评论
- 链接: [Issue #6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)
- **分析**: 用户希望 channel 回复意图预检查使用更小的模型、增加超时控制并输出耗时日志，避免阻塞完整的 agent turn。这反映了社区对 **延迟可观测性** 和 **成本优化** 的强烈诉求。

### 🔥 活跃 PR

**#7965** — Discord interaction components (EPIC B)
- 链接: [PR #7965](https://github.com/zeroclaw-labs/zeroclaw/pull/7965)
- **分析**: 规模最大的开放 PR（XL），补全 Discord 交互面。社区对 Discord 集成的完整度有很高期待。

**#8033** — Chat-based conversational setup assistant
- 链接: [PR #8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033)
- **分析**: 新用户引导体验的重大改进，将 onboarding 从枯燥的配置文件编辑变为对话式向导，有望显著降低上手门槛。

---

## 5. Bug 与稳定性

### 🔴 高风险 Bug（P1/S1）

| # | 严重程度 | 描述 | Fix PR |
|---|---------|------|--------|
| **#7787** | P1/S1 | v0.8.0 预编译二进制缺少 Slack/Discord channel（回归） | ✅ 应在 v0.8.1 中修复 |
| **#7907** | P1/S1 | agent rename 可能在配置持久化前移动 owned state | 🔧 待合并 |
| **#7941** | P1/S1 | agent delete 可能在配置持久化前清除 owned state（#7907 镜像） | 🔧 待合并 |
| **#6302** | P1/S2 | Gemini 400 — assistant tool_call 在首轮违反 history serializer 不变量 | ❌ 无 PR |
| **#5808** | P1/S1 | 默认 32k context budget 在第 1 次迭代即被 system prompt + tool definitions 超出 ~3.3x | ❌ 无 PR |
| **#6037** | P1/S2 | cron job 在仍在运行时可被重复触发（已观察到 20 次连续执行） | ❌ 无 PR |
| **#6841** | P1/S1 | vision_provider 被静默忽略，入站图片被路由到 fallback provider | ❌ 无 PR |

### 🟡 中风险 Bug（P2）

| # | 描述 | Fix PR |
|---|------|--------|
| **#6002** | Telegram 中 assistant 回复未明确指向（使用 llama.cpp 本地模型时） | ❌ 无 PR |
| **#5514** | Telegram 发送多张图片时，每张图片被当作独立请求，导致重复输出 | ❌ 无 PR |
| **#7911** | Android Termux 上预编译二进制和本地编译均产生 unknown linux aarch64 | ⚠️ 需复现 |
| **#7973** | context-compression summary provider 自包含性问题 | ✅ PR #7973 开放中 |
| **#8014** | 流式 narration 在 native tool calls 前被重复 | ✅ PR #8014 开放中 |
| **#8009** | HMAC tool receipts 未通过 agent turn 路径（ACP、gateway WS、CLI） | ✅ PR #8009 开放中 |

### 🟢 已修复/关闭

| # | 描述 |
|---|------|
| **#5221** | Model cost 未为 schedules、CLI 和 web agents 捕获 → **已关闭** |
| **#5618** | DaemonSubsystems 回调替换为类型化 Registry API → **已关闭** |
| **#6271** | V3 SwarmConfig schema → **已关闭** |
| **#7983** | 文件描述符耗尽（EMFILE）在 IPC accept 循环中 → **PR 开放中** |
| **#8023** | MCP stdio 子进程在每次心跳 tick 中泄漏 → **PR 开放中** |

**稳定性评估**: 当前有 **7 个 P1 级 Bug** 处于开放状态，其中 4 个尚无修复 PR，主要集中在 agent 生命周期管理（rename/delete 持久化顺序）、多 provider 路由（Gemini 兼容性、vision provider 静默失败）和 cron 调度可靠性方面。建议维护者将 #7907/#7941 的修复 PR 优先合并，因为这两个 bug 可能导致生产环境数据丢失。

---

## 6. 功能请求与路线图信号

### 近期可能纳入的功能（已有 PR 推进）

| 功能 | 对应 PR | 预计版本 |
|------|---------|---------|
| Discord 交互组件（按钮/模态框/审批流/自动补全） | #7965 | v0.8.x |
| 对话式 onboarding 向导 | #8033 | v0.8.x |
| 上下文窗口使用量条（TUI/CLI/Web） | #7946 | v0.8.x |
| SOP 运行时持久化存储 | #8001 | v0.9.0 |
| 多数据库 session 后端 | #6893 | v0.9.0 |
| 临时文件清理配置 | #7996 | v0.8.x |

### 路线图级功能（RFC/Tracker，尚无 PR）

| 功能 | 对应 Issue | 目标版本 |
|------|-----------|---------|
| OIDC 认证提供商支持 | #7141 | v0.9.0 |
| v0.9.0 认证/安全/网关/破坏性变更队列 | #7432 | v0.9.0 |
| v0.8.3 MCP dashboard 和 web/插件管理面 | #7320 | v0.8.3 |
| Gateway WebSocket 生命周期与 agent turn 解耦 | #7759 | v0.8.x |
| 统一斜杠命令注册表（web/TUI/channel） | #7929 | v0.8.x |
| 路由层认证中间件提取 | #6250 | v0.9.0 |

**路线图信号**: 社区正在从 v0.8.x 的"稳定化"阶段向 v0.9.0 的"安全加固与企业级架构"阶段过渡。OIDC 认证、多数据库 session 后端、统一命令注册表是下一版本的三大支柱。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **预编译二进制功能残缺** (#7787): 用户明确指出 v0.8.0 官方二进制缺少 Slack/Discord 支持，被迫降级到 v0.7.5。这严重损害了用户对发布流程的信任。
2. **Cron 任务不可靠** (#6037): 用户观察到单个 cron job 在 3 分钟内被触发 20 次，这对生产调度场景是不可接受的。
3. **Context 预算管理混乱** (#5808): 默认 32k 上下文在第一次迭代就被超出 3.3 倍，导致持续的 preemptive trim，用户需要手动调参才能正常工作。
4. **Memory 权重过高** (#5844): 在 cron job 等自动化场景中，历史记忆压过了当前指令，导致 agent 行为偏离预期。
5. **Telegram 多图体验差** (#5514): 发送多张图片时产生多条重复回复，用户体验割裂。

### 😐 使用场景

- **本地 LLM 用户**: 使用 llama.cpp 作为本地后端，通过 Telegram 与 agent 交互（#6002）
- **低存储设备用户**: 在存储受限环境中运行，需要临时文件清理机制（#7996）
- **Android/Termux 用户**: 尝试在移动端部署 ZeroClaw（#7911）
- **多智能体集群用户**: 需要跨 worker 共享 session 状态，要求多数据库后端（#6893）
- **企业安全用户**: 需要 OIDC 认证集成（#7141）

### 😊 满意信号

- v0.8.1 的发布（207 次提交、45 位贡献者）展示了项目强劲的开发节奏
- Zerocode TUI 的交付（#6826 关闭）为 headless 服务器和无 GUI 环境提供了完整的操作界面
- 对话式 onboarding（#8033）的推进表明团队关注新用户引导体验

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| # | 创建日期 | 描述 | 风险 |
|---|---------|------|------|
| **#4721** | 2026-03-26 | zeroclaw 应 log 到 stderr 而非 stdout | 影响 CLI 管道使用，已开放近 3 个月 |
| **#5869** | 2026-04-18 | rumqttc 依赖链锁定旧版 rustls-webpki，触发 4 个 RUSTSEC 安全通告 | **安全风险**，被 blocked 状态 |
| **#5514** | 2026-04-08 | Telegram 多图重复请求 | 开放 2.5 个月，无修复 |
| **#6002** | 2026-04-22 | Telegram + llama.cpp 回复未明确指向 | 开放 2 个月，需作者补充信息 |
| **#6037** | 2026-04-23 | cron job 重复触发 | 开放 2 个月，**P1 级无修复** |
| **#6302** | 2026-05-03 | Gemini 400 错误 — history serializer 不变量违反 | 开放 1.5 个月，影响所有 Gemini 用户 |
| **#6841** | 2026-05-21 | vision_provider 被静默忽略 | 开放 1 个月，影响多模态用户 |

### ⚠️ 长期开放的重要 PR

| # | 创建日期 | 描述 | 规模 |
|---|---------|------|------|
| **#6893** | 2026-05-24 | 多数据库 session 后端 | XL |
| **#6557** | 2026-05-10 | 运行时 model switching 与 provider 结构协调 | — |
| **#6067** | 2026-04-24 | channel reply-intent precheck 可配置化 | — |

### 🔔 维护者行动建议

1. **立即处理**: #7907 和 #7941 的修复 PR — agent rename/delete 持久化顺序缺陷可能导致生产数据丢失
2. **安全优先**: #5869 — RUSTSEC 安全通告已开放 2 个月，需要升级 rumqttc 或寻找替代方案
3. **P1 无修复**: #6037（cron 重复触发）、#6302（Gemini 400）、#6841（vision provider 静默忽略）均无修复 PR，需要分配 owner
4. **清理积压**: #4721（log to stdout）虽为 P2，但已开放近 3 个月且修复成本低，建议尽快处理以释放社区摩擦

---

*日报生成时间: 2026-06-20 | 数据来源: GitHub API | 分析引擎: OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*