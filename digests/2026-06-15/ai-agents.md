# OpenClaw 生态日报 2026-06-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-15 00:44 UTC

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

# OpenClaw 项目动态日报 — 2026-06-15

---

## 1. 今日速览

OpenClaw 今日处于**高活跃但积压严重**的状态。过去 24 小时内 Issues 与 PR 各更新 500 条，其中 Issues 新开/活跃 441 条、关闭 59 条，PR 待合并 456 条、已合并/关闭仅 44 条——**净积压持续扩大**，维护者审查带宽明显不足。项目发布了 v2026.6.8-beta.1，聚焦 Telegram/WhatsApp 消息投递的健壮性改进。社区讨论最集中的议题包括：QA 工具套件与 Codex 运行时工具一致性问题、Telegram 消息静默丢失、多 provider 认证回归、以及 SQLite 会话存储的 companion 友好化。整体来看，项目功能迭代活跃，但 issue 消化速度跟不上报告速度，积压风险上升。

---

## 2. 版本发布

### v2026.6.8-beta.1 — 2026.6.8

**核心改进：Telegram & WhatsApp 消息投递健壮性大幅提升**

| 维度 | 详情 |
|------|------|
| **Telegram** | 支持结构化富文本投递（表格、列表、可折叠 blockquote）；CLI 后端投递保留 prompt；废弃原生 draft 迁移；更安全的富媒体边界处理 |
| **WhatsApp** | 投递逻辑同样得到加固（具体细节在 release note 中被截断，但方向一致） |

**迁移注意事项：**
- Telegram 原生 draft 迁移路径已废弃，依赖此路径的用户需切换到新的结构化投递模式
- 富媒体边界处理逻辑变更可能影响自定义插件中对 Telegram 消息格式的假设，建议插件作者检查兼容性

🔗 [Release v2026.6.8-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1)

---

## 3. 项目进展

今日 PR 合并/关闭仅 44 条，相对于 456 条待合并的积压而言推进有限。以下是从评论活跃度与标签中筛选出的**关键推进项**：

### 已合并/关闭的重要 PR（从关联 Issue 推断）

| PR | 方向 | 说明 |
|----|------|------|
| 关联 #81978 | Discord 会话状态修复 | 非主 Discord 路由会话在 run:completed 后仍标记 processing 导致打字延迟的问题已关闭 |
| 关联 #90886 | Gateway 启动挂起修复 | provider 缺少 credentials 时 gateway 在 `[gateway] starting...` 挂起的回归已修复 |
| 关联 #50795 | 上下文 token 计数修复 | compaction 后 context token count 始终显示 0 的 bug 已关闭 |
| 关联 #81889 | WhatsApp 配对码登录 | 通过 Baileys requestPairingCode 实现手机配对码登录替代 QR 扫描的 feature 已合并 |

### 待合并但已就绪的关键 PR

| PR | 方向 | 状态 |
|----|------|------|
| [#80788](https://github.com/openclaw/openclaw/pull/80788) | Discord gzip 响应解析修复 | ✅ ready for maintainer look |
| [#81572](https://github.com/openclaw/openclaw/pull/81572) | Cron 任务结果增量持久化 | ✅ ready for maintainer look |
| [#81467](https://github.com/openclaw/openclaw/pull/81467) | 每日 Token  Usage 图表补全日历 | ✅ ready for maintainer look |
| [#93054](https://github.com/openclaw/openclaw/pull/93054) | Control UI hard reset 后清除聊天 | ✅ ready for maintainer look |
| [#80928](https://github.com/openclaw/openclaw/pull/80928) | Telegram suppressReply 抑制回退消息 | ✅ ready for maintainer look |

**整体评估：** 项目在消息投递（Telegram/Discord/WhatsApp）、会话状态管理、cron 可靠性等方向稳步前进，但大量 PR 停留在 "needs proof" 或 "waiting on author" 状态，**审查瓶颈是主要阻碍**。

---

## 4. 社区热点

以下按评论数与反应数排序，展示今日最活跃的讨论：

### 🔥 Issue #80319 — QA 工具套件与 Codex 运行时工具一致性
- **作者：** 100yenadmin | **评论：** 17 | 👍 1
- **核心诉求：** QA tool-defaults 套件将 Codex-native 工具与 OpenClaw 动态工具混为一谈，导致测试结果不可靠。需要明确区分两类工具的测试边界。
- **标签：** P2, needs-maintainer-review, needs-product-decision
- 🔗 [openclaw/openclaw#80319](https://github.com/openclaw/openclaw/issues/80319)

### 🔥 Issue #80380 — 升级至 gemini-3.1-flash-lite GA 版本
- **作者：** akessel56 | **评论：** 14 | 👍 4
- **核心诉求：** Google 已发布 gemini-3.1-flash-lite GA 版本，preview 版本即将废弃。OpenClaw 需更新默认模型引用。
- **状态：** CLOSED（已处理）
- 🔗 [openclaw/openclaw#80380](https://github.com/openclaw/openclaw/issues/80380)

### 🔥 Issue #79902 — SQLite 会话/转录 companion 友好化
- **作者：** 100yenadmin | **评论：** 13 | 👍 2
- **核心诉求：** 在 database-first runtime 之上暴露 companion-friendly 的 SQLite transcript/session 接口，让高级用户无需解析 opaque blobs 即可构建应用。
- **关联 PR：** 有 linked PR 开放中
- 🔗 [openclaw/openclaw#79902](https://github.com/openclaw/openclaw/issues/79902)

### 🔥 Issue #80520 — Telegram 消息静默丢失
- **作者：** kyle20026 | **评论：** 11 | 👍 3
- **核心诉求：** Telegram 消息被静默丢弃，gateway 接收并处理消息但无 sendMessage 日志，用户始终未收到回复。
- **标签：** P1, needs-live-repro
- 🔗 [openclaw/openclaw#80520](https://github.com/openclaw/openclaw/issues/80520)

### 🔥 Issue #79077 — Telegram Bot-to-Bot & Guest Bot 支持
- **作者：** bautrey | **评论：** 8 | 👍 8（最高反应）
- **核心诉求：** 支持 Telegram 2026-05-07 发布的 Guest Bot 和 Bot-to-Bot 通信两大新平台特性。
- **状态：** stale, P2, 多标签待决策
- 🔗 [openclaw/openclaw#79077](https://github.com/openclaw/openclaw/issues/79077)

### 🔥 Issue #80213 — Skill 作者自定义 setup hook
- **作者：** alexminza | **评论：** 7 | 👍 4
- **核心诉求：** 在 SKILL.md frontmatter 中添加 `setup.script` 钩子，在 skills.install/update 后运行自定义脚本，填补预定义 install 类型的空白。
- **关联 PR：** linked-pr-open
- 🔗 [openclaw/openclaw#80213](https://github.com/openclaw/openclaw/issues/80213)

**热点分析：** 社区最集中的诉求围绕三个方向——**消息投递可靠性**（Telegram/Discord 消息丢失）、**认证与 provider 管理**（多 provider 回归、OAuth 问题）、**可扩展性**（SQLite companion 接口、skill setup hook、plugin SDK 表面）。Telegram 生态的改进需求尤其突出。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的关键 Bug：

### 🔴 P1 — 严重/阻塞级

| # | 问题 | 影响 | Fix PR |
|---|------|------|--------|
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | Telegram 消息静默丢弃，无 sendMessage 日志 | message-loss | ❌ 无 |
| [#83419](https://github.com/openclaw/openclaw/issues/83419) | 群聊上下文注入产生连续 user-role 消息，破坏 Anthropic API 兼容性 | session-state, message-loss, auth-provider | ❌ 无 |
| [#81484](https://github.com/openclaw/openclaw/issues/81484) | Discord 公会回复畸形发送 payload 及重复外发循环 | message-loss | ❌ 无 |
| [#83366](https://github.com/openclaw/openclaw/issues/83366) | Gateway 事件循环饥饿导致 Discord/会话超时 | session-state, message-loss, crash-loop | ❌ 无 |
| [#82250](https://github.com/openclaw/openclaw/issues/82250) | macOS LaunchAgent KeepAlive=true 在干净退出后仍重启 | crash-loop | ❌ 无 |
| [#82070](https://github.com/openclaw/openclaw/issues/82070) | CLI 命令冷启动 ~14s 回归（2026.5.12 更新后） | auth-provider, crash-loop | ❌ 无 |

### 🟡 P2 — 重要/功能受损

| # | 问题 | 影响 | Fix PR |
|---|------|------|--------|
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 隔离 cron agentTurn 因 setup timed out 失败，所有 fallback 模型耗尽 | auth-provider, crash-loop | ❌ 无 |
| [#83736](https://github.com/openclaw/openclaw/issues/83736) | Gateway 在 node 版本轻微不匹配时硬拒绝从属节点 | crash-loop | ❌ 无 |
| [#80040](https://github.com/openclaw/openclaw/issues/80040) | 级联失败：OAuth 失效→空占位回复→provider 切换→重复工具执行→会话滚动丢失上下文 | session-state, message-loss, auth-provider | ❌ 无 |
| [#81917](https://github.com/openclaw/openclaw/issues/81917) | Dashboard 日志暴露裸 URL，Linux/KDE 浏览器启动挂起 | security, auth-provider, crash-loop | ❌ 无 |
| [#83425](https://github.com/openclaw/openclaw/issues/83425) | xAI OAuth redirect_uri 不匹配 | auth-provider | ❌ 无 |
| [#82020](https://github.com/openclaw/openclaw/issues/82020) | 自定义 provider 与内置 provider 共享 baseUrl 仍 broken | auth-provider | ❌ 无 |
| [#81525](https://github.com/openclaw/openclaw/issues/81525) | media-understanding 未验证模型视觉能力即路由图像 | message-loss, auth-provider | ❌ 无 |
| [#80607](https://github.com/openclaw/openclaw/issues/80607) | 非默认多 agent 使用 embedded_run 导致 10-17s 延迟 | perf | ❌ 无 |

### 🟢 P3/已修复

| # | 问题 | 状态 |
|---|------|------|
| [#90886](https://github.com/openclaw/openclaw/issues/90886) | Gateway 在 provider 缺少 credentials 时挂起 | ✅ CLOSED |
| [#81978](https://github.com/openclaw/openclaw/issues/81978) | Discord 非主路由会话 processing 状态残留 | ✅ CLOSED |
| [#50795](https://github.com/openclaw/openclaw/issues/50795) | Compaction 后 context token count 始终为 0 | ✅ CLOSED |

**稳定性评估：** 今日 P1 Bug 中 **6/6 无 fix PR**，消息投递（Telegram/Discord）和认证 provider 回归是最高风险区域。CLI 冷启动 14s 回归影响开发者体验，需优先排查。

---

## 6. 功能请求与路线图信号

| # | 功能请求 | 信号强度 | 判断 |
|---|---------|---------|------|
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | SQLite companion-friendly 会话/转录接口 | ⭐⭐⭐⭐ 有 linked PR，多子 issue 关联 | **高概率纳入** — 已有活跃开发，是 database-first runtime 的自然延伸 |
| [#80213](https://github.com/openclaw/openclaw/issues/80213) | Skill setup hook (setup.script) | ⭐⭐⭐⭐ 有 linked PR，👍4 | **高概率纳入** — 填补 skill 生命周期管理空白，需求明确 |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | Telegram Guest Bot & Bot-to-Bot | ⭐⭐⭐ 👍8 最高反应，但 stale | **中等概率** — 社区需求强烈但维护者决策待定，需产品方向确认 |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | before_route_inbound_message 预路由拦截钩子 | ⭐⭐⭐ 👍3，有 linked PR | **中等概率** — 架构上有价值，但涉及核心路由逻辑变更 |
| [#81913](https://github.com/openclaw/openclaw/issues/81913) | 稳定的 plugin SDK 表面用于 skill 工作流 | ⭐⭐⭐ 有 linked PR | **中等概率** — 与 skill 生态扩展方向一致 |
| [#79458](https://github.com/openclaw/openclaw/issues/79458) | Slash 命令描述 i18n | ⭐⭐ P3，有 linked PR | **低概率近期** — 国际化改进，优先级较低 |
| [#81164](https://github.com/openclaw/openclaw/pull/81164) | Context-engine interceptCompaction 契约 | ⭐⭐⭐ 大型 PR，多扩展关联 | **中等概率** — 为 context-engine 插件提供更大灵活性 |

**路线图信号总结：** 下一版本的主题很可能是 **"可扩展性 + 消息投递可靠性"** —— SQLite companion 接口、skill 生命周期钩子、Telegram 新特性支持是社区呼声最高的三条线。

---

## 7. 用户反馈摘要

从今日 Issues 评论与描述中提炼的真实用户痛点：

### 😤 不满意 / 痛点

1. **消息投递不可靠是最大痛点**
   - Telegram 消息静默丢失（#80520）、Discord 公会回复畸形（#81484）、LINE Flex 消息因配额耗尽被静默丢弃（PR #81299）——多个渠道同时出现投递问题，用户信任度受损
   - 用户原话倾向："messages are silently dropped" 反复出现，说明**静默失败比显式报错更令用户不安**

2. **认证/OAuth 体验碎片化**
   - xAI OAuth redirect_uri 不匹配（#83425）、自定义 provider 与内置 provider 共享 baseUrl 冲突（#82020）、多 provider fallback 级联失败（#80040）
   - 用户配置多 provider 时频繁踩坑，**provider 管理是高级用户最高频的摩擦点**

3. **性能回归影响日常使用**
   - CLI 冷启动 14s 回归（#82070）、多 agent embedded_run 10-17s 延迟（#80607）
   - 用户期望的是"更新后更快"，实际体验是"更新后更慢"

4. **文档与实际行为不一致**
   - CLI 文档说 JSON5 解析但实际是 strict JSON（PR #80981）、Dashboard 日志暴露裸 URL 而非 tokenized URL（#81917）

### 😊 满意 / 正向信号

1. **v2026.6.8-beta.1 的 Telegram 富文本改进** 获得社区认可，结构化投递（表格、列表、blockquote）是用户期待已久的能力
2. **WhatsApp 配对码登录**（#81889 已合并）解决了 QR 扫描在部分场景下不可用的问题
3. **每日 Token Usage 图表修复**（PR #81467）虽是小改进，但用户对"数据可视化准确性"的关注说明**运营可观测性**需求在增长

### 📋 典型使用场景

- **多 agent 用户**：配置 2+ agent 时遇到 embedded_run 延迟（#80607），说明多 agent 工作流正在被实际使用
- **多 provider 用户**：同时使用 Zhipu/ZAI 两个账户（#82020）、xAI + OpenAI 组合（#83425），说明**多 provider 是高级用户的标配**
- **Telegram 重度用户**：群聊、bot-to-bot、guest bot、富文本投递——Telegram 是 OpenClaw 生态中最活跃的渠道

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR，提醒维护者关注：

### ⚠️ 长期开放的重要 Issue（按创建时间排序）

| # | 标题 | 创建 | 最后更新 | 评论 | 风险 |
|---|------|------|---------|------|------|
| [#22060](https://github.com/openclaw/openclaw/issues/22060) | 通过 URL link preview 元数据的间接 prompt 注入 | 2026-02-20 | 2026-06-14 | 4 | **安全风险**，已 stale 4个月 |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) | heading-aware chunking + 实体提取用于 memory search | 2026-03-12 | 2026-06-14 | 5 | 核心 memory 能力改进，长期 stagnant |
| [#56781](https://github.com/openclaw/openclaw/issues/56781) | compaction 和 LCM summaryModel 的 fallback model 链 | 2026-03-29 | 2026-06-14 | 4 | 影响会话稳定性 |
| [#77802](https://github.com/openclaw/openclaw/issues/77802) | doctor --fix 在多重验证错误时原子性失败 | 2026-05-05 | 2026-06-14 | 6 | 升级体验差 |
| [#78805](https://github.com/openclaw/openclaw/issues/78805) | 同步 I/O 导致严重事件循环阻塞/冻结 | 2026-05-07 | 2026-06-14 | 4 | **性能核心问题**，P1 regression |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | Telegram Guest Bot & Bot-to-Bot 支持 | 2026-05-07 | 2026-06-14 | 8 | 👍8 最高需求，但 stale |

### ⚠️ 长期开放的重要 PR

| # | 标题 | 创建 | 最后更新 | 状态 |
|---|------|------|---------|------|
| [#36630](https://github.com/openclaw/openclaw/pull/36630) | Signal 双向 quote-reply 支持 | 2026-03-05 | 2026-06-15 | needs proof，已开放 3+ 月 |
| [#73704](https://github.com/openclaw/openclaw/pull/73704) | Safeguard compaction provider/model 解析 | 2026-04-28 | 2026-06-15 | ready for maintainer look，等待 1.5 月 |
| [#61464](https://github.com/openclaw/openclaw/pull/61464) | Docker Mac 迁移和 keep-awake 辅助脚本 | 2026-04-05 | 2026-06-15 | needs proof，已开放 2+ 月 |
| [#81164](https://github.com/openclaw/openclaw/pull/81164) | Context-engine interceptCompaction 契约 | 2026-05-12 | 2026-06-15 | needs proof，大型 PR |

### 🔔 维护者行动建议

1. **安全优先：** #22060（prompt 注入）已 stale 4 个月，建议安全审查后关闭或排期
2. **性能回归：** #78805（同步 I/O 阻塞）是 P1 regression，影响所有渠道的消息响应，建议优先分配审查资源
3. **高需求功能：** #79077（Telegram Guest Bot）有最高社区反应（👍8），建议产品决策后给出明确时间线
4. **PR 积压：** 多个 "ready for maintainer look" 的 PR（#73704、#80788、#81572、#81467、#93054、#80928）已就绪，建议集中审查合并

---

> **日报生成时间：** 2026-06-15  
> **数据来源：** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)  
> **项目健康度评分：** ⚠️ **中等偏下** — 功能迭代活跃但积压严重，P1 Bug 消化不足，消息投递和认证稳定性是最大风险区域

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-06-15 | 分析周期：过去 24 小时**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态处于**高活跃、高分化**的快速发展期。16 个被追踪项目中，11 个在过去 24 小时内有实质性活动，其中 OpenClaw、Hermes Agent、IronClaw、ZeroClaw 四个项目贡献了绝大部分的 Issue 和 PR 吞吐量，呈现明显的头部集中效应。**消息投递可靠性**（Telegram/Discord/WhatsApp 多渠道）、**安全加固**（审批绕过、沙箱逃逸、prompt 注入）、**多 provider 架构**成为全生态最密集的三大技术主题，反映出用户群体正从早期尝鲜者向生产级部署者过渡。值得注意的是，安全研究员 YLChen-007 今日同时在 NanoClaw 和 IronClaw 两个项目中提交了 9 个高危安全漏洞，说明该生态已引起专业安全社区的系统性关注，安全成熟度将成为下一阶段的分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issues (开/活→闭) | PR (待合并→已合/闭) | Release | 健康度评估 |
|------|-------------------|---------------------|---------|------------|
| **OpenClaw** | 441 → 59 | 456 → 44 | v2026.6.8-beta.1 | ⚠️ 中等偏下 — 积压严重，P1 Bug 消化不足 |
| **NanoBot** | 4 → 0 | 16 → 16 | 无 | 🟢 良好 — 合并节奏稳健，无积压 |
| **Hermes Agent** | 44 → 6 | 39 → 11 | 无 | 🟢 良好偏上 — 响应快，当日 fix 当日合 |
| **PicoClaw** | 4 → 1 | 3 → 5 | nightly build | 🟡 中等 — 活跃但 stale 积压需清理 |
| **NanoClaw** | 6 → 1 | 6 → 5 | 无 | 🟡 中等 — 架构推进扎实，安全响应滞后 |
| **NullClaw** | — | — | — | ⚪ 无活动 |
| **IronClaw** | 24 → 7 | 26 → 17 | 无 | 🟡 中等 — 高频迭代，6 条高危安全漏洞待修 |
| **LobsterAI** | 2 → 0 | 3 → 1 | 无 | 🟡 中等 — 活跃度低，PR 积压 stale |
| **TinyClaw** | — | — | — | ⚪ 无活动 |
| **Moltis** | 1 → 0 | 2 → 0 | 无 | 🟡 中等 — 低活跃，零互动积压 |
| **CoPaw** | 7 → 1 | 7 → 0 | 无 | 🟡 中等 — 版本回归问题集中，PR 全积压 |
| **ZeptoClaw** | — | — | — | ⚪ 无活动 |
| **ZeroClaw** | 13 → 28 | 49 → 1 | 无 | 🟡 中等 — Issue 清理积极，PR 积压 49 条 |

> **数据要点：** OpenClaw 以 441 条 Issue 更新和 456 条待合并 PR 遥遥领先，吞吐量接近其余项目之和。NanoBot 是唯一实现 PR 100% 当日消化（16→16）的项目。ZeroClaw Issue 关闭率最高（28/41=68%），显示维护者在积极清理积压。

---

## 3. OpenClaw 在生态中的定位

**规模绝对领先，但效率是短板。** OpenClaw 的 Issue 更新量（441）是第二名 Hermes Agent（44）的 10 倍，待合并 PR（456）是第二名 ZeroClaw（49）的 9.3 倍，社区规模与活跃度在生态中无出其右。

**与同类项目的关键差异：**

| 维度 | OpenClaw | Hermes Agent | IronClaw | ZeroClaw |
|------|----------|-------------|----------|----------|
| **核心定位** | 通用多平台 AI 网关 | 研究级 Agent 框架 | 安全优先的运行时 | 企业级多 agent 平台 |
| **渠道覆盖** | Telegram/Discord/WhatsApp/CLI 全渠道 | Telegram/Matrix/飞书/Mattermost | Slack/WebChat/微信 | Discord/WhatsApp/QQ/邮件 |
| **技术路线** | 消息投递 + provider 生态 | 工具链 + 桌面端 + 多模型 | 审批安全 + Reborn 运行时 | 多 agent delegate + 集群部署 |
| **社区规模** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **维护效率** | ⚠️ PR 积压 456 条 | 🟢 当日 fix 当日合 | 🟢 合并节奏稳定 | ⚠️ PR 积压 49 条 |
| **安全成熟度** | 中（6 个 P1 未修） | 中（1 个 bypass 未修） | 低（6 个高危未修） | 中（1 个 S1 未修） |

**OpenClaw 的核心优势**在于其最广泛的 IM 渠道覆盖和最丰富的 provider 生态，使其成为事实上的"AI 消息网关标准"。但 456 条待合并 PR 和 6 个无 fix PR 的 P1 Bug 表明，**社区贡献的消化能力已成为项目发展的最大瓶颈**。相比之下，Hermes Agent 以 1/10 的体量实现了更高的维护效率和更快的响应速度。

---

## 4. 共同关注的技术方向

以下技术方向在多个项目中同时涌现，代表生态级共识：

### 🔴 安全加固（涉及 5 个项目）

| 项目 | 具体诉求 |
|------|----------|
| **NanoClaw** | `add_mcp_server` 审批流程隐藏参数注入、本地网关 webhook 未认证、`send_file` 任意文件外泄 |
| **IronClaw** | Shell 审批边界 6 种绕过路径（env 包装、符号链接逃逸、换行符注入等） |
| **Hermes Agent** | memory 工具绕过 `disabled_toolsets` 策略、密码脱敏后 agent 状态不一致 |
| **OpenClaw** | URL link preview 元数据间接 prompt 注入（stale 4 个月） |
| **ZeroClaw** | 文件传输 header 中 Bearer Token 明文存储（已修复） |

> **共性诉求：** 审批流程的细粒度控制、沙箱边界的完整性、凭证/敏感信息的脱敏一致性。安全已从"附加功能"变为"基础门槛"。

### 🟡 消息投递可靠性（涉及 4 个项目）

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | Telegram 消息静默丢失、Discord 畸形 payload、多 provider fallback 级联失败 |
| **NanoBot** | Telegram 长消息 Markdown 围栏代码块断裂、飞书 WebSocket 卡片解析错位 |
| **Hermes Agent** | Matrix 媒体消息 E2EE 连接耗尽导致静默丢失、飞书消息重试重复发送 |
| **IronClaw** | Slack 路由重放、WebChat v2 plain HTTP 阻断 |

> **共性诉求：** 消息投递的可观测性（用户需要知道消息是否真正到达）、渠道适配的统一抽象、静默失败的显式报错。

### 🟢 多 Provider 架构（涉及 4 个项目）

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | 多 provider 认证回归、xAI OAuth redirect_uri 不匹配、自定义 provider 与内置 provider 冲突 |
| **NanoClaw** | 多提供者架构核心落地（provider registry + 可切换 + 记忆迁移） |
| **NanoBot** | OpenAI-compatible endpoint 返回全零 usage tokens、Anthropic 模型升级 400 错误 |
| **Hermes Agent** | 自定义 provider 模型在桌面端选择器中不显示（已修复） |

> **共性诉求：** Provider 的可插拔性、模型版本升级的自动适配、usage/token 计费的精确追踪。

### 🔵 桌面端与本地部署（涉及 3 个项目）

| 项目 | 具体诉求 |
|------|----------|
| **Hermes Agent** | Windows 兼容性问题（WSL/bash 选择、npm 安装失败）、桌面端国际化 15 种语言 |
| **CoPaw** | Windows 桌面 GUI 自动化（UIA 后端）、插件安装 cmd 窗口弹窗死循环 |
| **LobsterAI** | Electron 桌面端会话搜索、运行计时器、阻止系统休眠 |

> **共性诉求：** Windows 平台兼容性、桌面端 UX 打磨、本地模型（Ollama 等）的深度集成。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 竞争壁垒 |
|------|----------|----------|----------------|----------|
| **OpenClaw** | 通用 AI 消息网关 | 需要多渠道部署的个人/团队 | 多渠道适配 + provider 生态 + skill 系统 | 渠道覆盖最广、社区最大 |
| **Hermes Agent** | 研究级 Agent 框架 | 研究者、高级用户、多模型实验者 | 工具链 + 桌面端 + computer_use + memory | NousResearch 品牌、研究导向 |
| **IronClaw** | 安全优先的 Agent 运行时 | 企业用户、安全敏感场景 | 审批链 + Reborn 运行时 + 沙箱 | 安全审批机制最完善 |
| **ZeroClaw** | 企业级多 agent 平台 | 需要集群部署的企业 | delegate agentic + 多数据库 session + Operator Console | 多 agent 架构最成熟 |
| **NanoClaw** | 轻量级安全 Agent | 注重安全的个人开发者 | provider 切换 + vault 认证 + Codex 集成 | 安全设计从底层构建 |
| **NanoBot** | 高质量渠道适配 | 需要稳定 IM 集成的开发者 | 参数校验 + 渠道协议 + WebUI | 代码质量与合并效率 |
| **CoPaw** | 桌面端 AI 助手 | Windows 桌面用户 | Electron + Tauri + computer_use | Windows 桌面自动化 |
| **LobsterAI** | 协作式 AI 工作台 | 团队协作场景 | Cowork 会话 + Electron + 定时任务 | 协作体验差异化 |
| **PicoClaw** | 边缘/嵌入式 Agent | 嵌入式开发者、边缘场景 | 远程 WebSocket + 插件化通道 + 轻量运行时 | 边缘部署能力 |
| **Moltis** | 边缘压缩场景 | 极端资源受限环境 | Docker + 内存后端 + 边缘优化 | 边缘压缩差异化 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高频迭代期

**OpenClaw、Hermes Agent、IronClaw、ZeroClaw**

四个项目日 Issue 更新量均超过 20 条，PR 吞吐量高，社区贡献者众多。特征是功能迭代快、新需求密集，但积压管理压力大。OpenClaw 和 ZeroClaw 的 PR 积压分别达 456 和 49 条，需要扩充维护者团队或优化审查流程。

### 🟡 第二梯队：质量巩固期

**NanoBot、NanoClaw、CoPaw、PicoClaw**

日 Issue 更新量在 4-8 条之间，合并节奏相对可控。NanoBot 以 100% 当日 PR 合并率表现突出。这一梯队的共同特征是从"快速加功能"转向"修 bug + 加固质量"，NanoClaw 的多提供者架构重构和 NanoBot 的参数校验加固都是典型信号。

### 🟢 第三梯队：稳定维护期

**LobsterAI、Moltis**

日更新量 ≤2 条，活跃度偏低，存在 stale PR/Issue 积压。项目仍在推进但节奏缓慢，需要维护者重新激活社区参与感。

### ⚪ 休眠期

**NullClaw、TinyClaw、ZeptoClaw**

过去 24 小时无任何活动，需关注项目是否已停止维护。

---

## 7. 值得关注的趋势信号

### 趋势一：安全成为基础门槛而非附加功能

**信号强度：⭐⭐⭐⭐⭐**

今日最突出的生态级事件是安全研究员 YLChen-007 在两个项目中一次性提交 9 个高危漏洞（NanoClaw 3 个 + IronClaw 6 个），加上 Hermes Agent 的 memory 工具绕过、OpenClaw 的 prompt 注入，安全议题覆盖了 5 个项目。**对开发者的启示：** 在 Agent 框架设计之初就需要将审批链、沙箱边界、凭证管理作为核心架构要素，而非事后补丁。预计未来 6 个月内，不具备完善安全机制的 Agent 框架将面临用户流失。

### 趋势二：消息投递的"可观测性"成为用户核心诉求

**信号强度：⭐⭐⭐⭐**

OpenClaw 的 Telegram 消息静默丢失（#80520）、Hermes Agent 的 Matrix 媒体消息静默丢失（#46310）、NanoBot 的飞书卡片降级为 `[Card]` 占位符——用户反复表达的是同一类不满：**"我不知道消息到底有没有发出去"**。**对开发者的启示：** 消息投递层需要提供端到端的投递确认机制（delivery receipt），并在 UI 层面明确区分"已发送"、"已投递"、"已读"三种状态。静默失败比显式报错更损害用户信任。

### 趋势三：多 Provider 架构从"能用"走向"好用"

**信号强度：⭐⭐⭐⭐**

NanoClaw 今日落地了多提供者架构（provider registry + 可切换 + 记忆迁移），OpenClaw 的多 provider 认证回归问题被频繁报告，NanoBot 的 usage tokens 归零影响计费精确性。**对开发者的启示：** 多 provider 架构的下一个竞争焦点是**无缝切换**——包括模型版本升级的自动适配、跨 provider 的 session 状态迁移、统一的 usage/计费追踪。谁先解决这些问题，谁就能吸引高级用户。

### 趋势四：桌面端与本地部署需求持续增长

**信号强度：⭐⭐⭐**

Hermes Agent 的 Windows 兼容性问题、CoPaw 的 Windows GUI 自动化、LobsterAI 的 Electron 桌面端体验增强、NanoBot 的 WebUI 移动端优化——多个项目同时在桌面端发力。**对开发者的启示：** AI Agent 的交互入口正在从纯 CLI/Web 向桌面端扩展，Windows 兼容性是最大短板。支持本地模型（Ollama 等）的深度集成将成为桌面端 Agent 的标配能力。

### 趋势五：生态分化加速，"全能型"与"专精型"并行

**信号强度：⭐⭐⭐**

OpenClaw 继续走全渠道覆盖路线，IronClaw 深耕安全审批，PicoClaw 聚焦边缘部署，LobsterAI 专注协作体验。**对开发者的启示：** 生态已进入差异化竞争阶段，新项目需要找到明确的垂直定位（安全、边缘、桌面、协作等），而非重复建设通用框架。同时，OpenClaw 作为"通用网关层"与其他"专精型"项目形成互补而非竞争关系的可能性正在增大。

---

> **报告由 OWL 基于各开源项目 GitHub API 数据综合分析生成 | 2026-06-15**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-15

> 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

今日 NanoBot 活跃度极高，**24 小时内 PR 更新 32 条、Issue 更新 4 条、无新版本发布**。项目重心集中在代码质量加固（参数校验、空值过滤、配置边界重构）、WebUI 多端适配与本地化，以及通讯协议层（Telegram、飞书、Matrix）的修复。待合并 PR 与已合并/关闭 PR 各占一半，表明维护者处理节奏稳健。整体健康度良好。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭了 **16 个 PR**，主要推进方向如下：

| 方向 | 代表 PR | 说明 |
|---|---|---|
| **工具参数校验加固** | [#4312](https://github.com/HKUDS/nanobot/pull/4312) · [#4311](https://github.com/HKUDS/nanobot/pull/4311) · [#4336](https://github.com/HKUDS/nanobot/pull/4336) | 修复 `message` 工具非法 `media` 附件、非正分页参数、畸形 `run_cli_app` args 三类边界输入，避免运行时崩溃或异常行为 |
| **会话历史一致性** | [#4011](https://github.com/HKUDS/nanobot/pull/4011) | 清理孤立的 tool 结果消息，持久化恢复时不再脏数据回填 |
| **Telegram 消息拆分** | [#4340](https://github.com/HKUDS/nanobot/pull/4340) | 修复拆散长消息时 Markdown 围栏代码块断裂问题（[#4250](https://github.com/HKUDS/nanobot/issues/4250)） |
| **WebUI 移动响应式** | [#4339](https://github.com/HKUDS/nanobot/pull/4339) | 优化移动端间距、Safe Area、侧边栏宽度及堆叠布局，改善小屏使用体验 |
| **WebUI 本地化** | [#4331](https://github.com/HKUDS/nanobot/pull/4331) | 新增检测更新提示的 i18n 资源并补齐测试 |
| **Matrix 协议集成** | [#1056](https://github.com/HKUDS/nanobot/pull/1056) | 新增完整 Matrix 频道支持：认证方式兼容 access_token 和密码，支持 DM 与房间消息 |
| **基础设施/文档** | [#4341](https://github.com/HKUDS/nanobot/pull/4341) · [#4338](https://github.com/HKUDS/nanobot/pull/4338) · [#4295](https://github.com/HKUDS/nanobot/pull/4295) | README 封面更新、Kimi/MinamiX 合作伙伴链接整合 |

---

## 4. 社区热点

### Issue [#4309 — `/v1/chat/completions` 始终返回零 usage tokens](https://github.com/HKUDS/nanobot/issues/4309)
- 状态：**OPEN · 1 评论**
- 诉求：兼容 OpenAI 的 `/v1/chat/completions` 接口目前将 usage 硬编码为全零，影响依赖 token 计费的下游应用。用户期望 endpoint 返回 Agent Loop 已追踪的真实 token 数。
- 潜在影响：**高**——涉及计费、配额监控和第三方兼容。

### PR [#4344 — Refactor config and agent loop boundaries](https://github.com/HKUDS/nanobot/pull/4344)
- 状态：**OPEN**
- 诉求：将工具配置模型抽离到无副作用的模块、删除根配置 schema 对具体工具实现的运行时注入，并提取精细化的 AgentLoop 协调器。这是架构解耦的重要一步，降低后续扩展成本。

### PR [#4342 — fix(feishu): support reading WebSocket rendered card content](https://github.com/HKUDS/nanobot/pull/4342)
- 状态：**OPEN · 今日新增**
- 诉求：飞书 WebSocket 卡片消息结构与预期不符，导致卡片降级为 `[Card]` 占位符提示。该 PR 找出三层结构错位并修正解析逻辑。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | 问题 | 状态 | 修复情况 |
|---|---|---|---|
| 🔴 **高** | Anthropic `claude-opus-4-8` / Fable 请求带已弃用 `temperature` → 每次 400 错误（[#4333](https://github.com/HKUDS/nanobot/issues/4333)） | CLOSED | 预计今日有修复分支合并（Issue 已关闭） |
| 🔴 **高** | OpenAI-compatible endpoint 返回全零 usage tokens，破坏计费兼容（[#4309](https://github.com/HKUDS/nanobot/issues/4309)） | **OPEN** | 暂无公开 fix PR，需优先处理 |
| 🟡 **中** | Telegram `split_message` 拆散围栏代码块（[#4250](https://github.com/HKUDS/nanobot/issues/4250)） | **CLOSED** | 已合并 [#4340](https://github.com/HKUDS/nanobot/pull/4340) |
| 🟢 **低** | agent 启动时首次不显示 botIcon（[#4262](https://github.com/HKUDS/nanobot/issues/4262)） | CLOSED | 未明确关联 PR，可能已捎带修复 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 趋势判断 |
|---|---|---|---|
| 子智能体可配置模型预设（spawn presets） | [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) | 开放中 | 功能设计清晰，合并可能性高 |
| `tools.file.enable` 开关（对齐 exec/web） | [PR #4138](https://github.com/HKUDS/nanobot/pull/4138) | 已关闭 | 部分设计被替代，建议重新审视 |
| WebUI 自动化（Automations）管理视图 | [PR #4330](https://github.com/HKUDS/nanobot/pull/4330) | 开放中 | 功能完整，含 API 路由，下个版本可能落地 |
| 拒绝未知内置工具参数（strict schema） | [PR #4343](https://github.com/HKUDS/nanobot/pull/4343) | 开放中 | 健壮性增强，预期很快合并 |
| 配置中 env-var 模板解析问题（read & update） | [PR #4324](https://github.com/HKUDS/nanobot/pull/4324) · [#4325](https://github.com/HKUDS/nanobot/pull/4325) | 开放中 | 影响 WebUI 功能，建议优先审查 |

**信号总结：** 下一版本预计聚焦多模型灵活调度（spawn presets）、WebUI 自动化管理界面、以及配置层安全性（strict params + env-var resolution）。

---

## 7. 用户反馈摘要

- **计费/监控痛点**：下游团队严重依赖 `/v1/chat/completions` 的 usage 字段做配额统计。硬编码归零导致只能在外层自行估算 token，增加集成成本。
- **模型版本升级断层**：Anthropic 用户反馈模型一升级（opus-4-7 → opus-4-8）即出现 400，期望 provider 内部自动适配弃用参数，避免手动配置差异。
- **通讯协议碎片化**：Telegram 和飞书渠道的消息渲染在不同格式边界下出现断裂，渠道适配的统一抽象需求愈发突出。
- **正面信号**：WebUI 移动端优化、自动化视图、Matrix 新渠道等功能 PR 参与者多，社区贡献活跃。

---

## 8. 待处理积压

以下 Issue/PR **响应不足或长期未跟进**，建议维护者重点排查：

| 条目 | 类型 | 问题 |
|---|---|---|
| [#4309](https://github.com/HKUDS/nanobot/issues/4309) — usage tokens 始终为零 | Issue · OPEN · 3天 | 无 fix PR，影响 OpenAI 兼容用户 |
| [#4344](https://github.com/HKUDS/nanobot/pull/4344) — config/agent loop 重构 | PR · OPEN | 架构级别变更，尽早 review 或提供方向性反馈 |
| [#4324](https://github.com/HKUDS/nanobot/pull/4324) / [#4325](https://github.com/HKUDS/nanobot/pull/4325) — WebUI env-var 解析 | PR · OPEN · 2天 | 潜在安全/正确性问题，审查成本较低 |
| [#4343](https://github.com/HKUDS/nanobot/pull/4343) — strict built-in params | PR · OPEN | 防御性增强，合并阻力小 |

---

**项目整体评价：** NanoBot 正处于快速迭代期，质量加固（参数校验、空值过滤、会话一致性）与渠道扩展（Matrix、飞书 WebSocket）并行推进。当前最紧迫的动作是给 **Issue #4309（usage tokens）** 分配 fix owner，并加速 WebUI 相关 PR 的审查节奏。若保持当前合并吞吐量，下一版本将以"多模型调度 + WebUI 自动化管理"为主要亮点。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 · 2026-06-15

---

## 1. 今日速览

过去24小时，Hermes Agent 社区活跃度极高：共产生 **50 条 Issue 更新**（44 新开/活跃、6 关闭）和 **50 条 PR 更新**（39 待合并、11 已合并/关闭），无任何新版本发布。今日呈现出典型的"高吞吐、快迭代"状态——多个 fix PR 当天当天合入且对应 Issue 同日关闭，社区响应速度显著。值得注意的是，今日涌现了多个 **P1 级安全/稳定性 bug**（内存工具绕过 tool policy、Matrix 消息投递丢失），且均有开发者当天跟进并提出 fix PR，整体项目健康度处于良好偏上的水平。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 覆盖了桌面应用、Web 工具、CLI、底层工具链等多个维度，具体如下：

| PR | 摘要 | 意义 |
|---|---|---|
| **#40529** `fix(cli): surface inline custom provider model in the picker` | 修复自定义 OpenAI 兼容 Provider 的模型在桌面端模型选择下拉框和 Telegram/Discord `/model` 选择器中不显示的 bug | 解决了一个长期存在 (#40480) 的桌面 + 多平台 UI 一致性问题，对使用第三方 provider（如 SenseNova）的用户体验有实质改善 |
| **#44457** `fix(web): don't re-run bundled fallback sweep when web-parallel disabled` | 修复并行 Web 插件被显式禁用后仍重复执行回退扫描的 bug | 对 #44433 的 review nit 跟进，消除冗余 I/O 开销 |
| **#36856** `fix(utils): handle EXDEV in atomic_replace for cross-filesystem symlinks` | 跨文件系统符号链接场景下 `atomic_replace` 抛出 EXDEV 的处理 | 修复了从 v0.16.0 开始暴露的部署环境问题（managed deployment 常见） |
| **#46355** `fix: cool down transient Telegram typing failures` | Telegram typing 瞬态失败后加入退避冷却机制 | 从 OpenClaw 移植，减少 Telegram 上不必要重试 |
| **#46364** `fix(cron): prefer Git Bash and POSIX paths on Windows (#46332)` | Windows 上 cron 脚本优先选用 Git Bash 而非 WSL，路径统一使用正斜杠 | 修复了 #46332 报告的 Windows native 环境下 cron job 完全失败的问题 |
| **#46365** `fix(send_message): reuse live gateway adapter for Matrix media sends (#46310)` | Matrix 媒体消息发送时复用已建立的 gateway adapter，避免每条消息都重新初始化 E2EE | 修复了 #46310 报告的 P1 级 Matrix 消息静默丢失问题 |
| **#46363** `fix: repair URL authority whitespace before web fetches` | Web URL 修复模型生成的 `://` 后空白字符 | 从 OpenClaw 移植，减少 web_fetch 因 URL 格式问题失败 |
| **#46358** `feat: add Docker terminal network toggle` | 新增 `terminal.docker_network: false` 配置项，可禁用 Docker 终端会话的网络出口 | 安全加固选项，从 NanoClaw 移植 |
| **#46359** `feat: add uninstall dry-run mode` | `hermes uninstall --dry-run` 预览卸载方案而不实际执行 | 运维安全新增 |
| **#46361** `fix: stable feishu message UUID + stream chunk dedup` | 飞书消息 UUID 确定性生成 + 流式 chunk 去重 | 修复飞书消息重试场景下的重复发送和乱序问题 |

**整体评价**：今日 11 个合并/关闭的 PR 中有 8 个为 bug fix、2 个为新功能、1 个为 review nit 修复。上下游社区（OpenClaw、NanoClaw）安全功能移植节奏加速，项目整体在向更高的稳定性和安全性演进。

---

## 4. 社区热点

### 🔥 评论/互动最活跃 Issue

**1. [#45058] web_search/web_extract 静默重定向到 Parallel.ai（已关闭）**
链接：https://github.com/NousResearch/hermes-agent/issues/45058
- **7 条评论，👍 11**——反应数最高，远超其他 Issue
- 核心诉求：大量用户默认未配置 Web backend 时，流量被静默路由至第三方付费服务（Parallel.ai），存在隐私和费用风险
- 状态：已关闭，表明维护者已处理（PR #43798 引发此问题）
- **分析**：这反映了用户对「默认行为透明度」的高度敏感——AI Agent 工具调用中的静默第三方路由是不可接受的

**2. [#43083] 密码被脱敏为 *** 但模型读取对话历史后在第二次工具调用时失败**
链接：https://github.com/NousResearch/hermes-agent/issues/43083
- **7 条评论**，P1 级 bug
- 安全脱敏（defense-in-depth）改变了 tool call arguments 中的 credential 值，但 LLM 读取对话历史中的脱敏记录后尝试使用，导致失败
- **分析**：这是一个典型的「安全与可用性」矛盾问题，涉及 agent 内部状态一致性的深层次设计考量

**3. [#31584] 将 memory-context 视为背景上下文而非权威性用户消息内容**
链接：https://github.com/NousResearch/hermes-agent/issues/31584
- **5 条评论**，P2 特性请求
- 核心诉求：memory 注入的内容被模型误认为是用户直接指令，存在 prompt injection 风险
- **分析**：在 Agent 安全日益受关注的背景下，这是一个值得优先关注的设计方向

### 🔥 反应最多的 Issue

| Issue | 👍 | 主题 |
|---|---|---|
| #36865 | 3 | 专业/无障碍主题需求 |
| #44140 | 3 | 桌面端 UI bug（自动滚动、侧边栏覆盖）|
| #45058 | 11 | Web backend 静默路由 |

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 严重

| Issue | 描述 | Fix PR |
|---|---|---|
| **[#46310]** Matrix media 路径每条消息重建 E2EE 连接，耗尽 OTK 导致消息静默丢失 | https://github.com/NousResearch/hermes-agent/issues/46310 | ✅ **#46365**（已开 PR，当天修复） |
| **[#46142]** Matrix gateway mautrix 迁移后 Tuwunel homeserver 入站消息完全不派发 | https://github.com/NousResearch/hermes-agent/issues/46142 | ❌ 待处理 |
| **[#46171]** memory 工具（fact_store/fact_feedback）绕过 `disabled_toolsets` 策略，仍然可被模型调用 | https://github.com/NousResearch/hermes-agent/issues/46171 | ❌ 待处理 |
| **[#43083]** 密码脱敏后 Agent 读取脱敏历史导致二次工具调用失败 | https://github.com/NousResearch/hermes-agent/issues/43083 | ❌ 待处理 |

### 🟡 P2 — 中等

| Issue | 描述 | Fix PR |
|---|---|---|
| **[#45519]** GLM-5.2 上下文长度被错误检测为 202,752（实际 1M），自动压缩阈值错误 | https://github.com/NousResearch/hermes-agent/issues/45519 | ❌ 已关闭（需确认是否已修复） |
| **[#46303]** 并发 Session 交叉污染：共享 memory 注入 + 共享 git worktree，无隔离 | https://github.com/NousResearch/hermes-agent/issues/46303 | ❌ 待处理 |
| **[#43389]** `update_fact` 更新内容时 UNIQUE 约束冲突导致崩溃 | https://github.com/NousResearch/hermes-agent/issues/43389 | ❌ 待处理 |
| **[#46260]** Windows 桌面安装器在 npm install 阶段失败 | https://github.com/NousResearch/hermes-agent/issues/46260 | ❌ 待处理 |

### 🟢 P3 — 较低/功能改进

| Issue | 描述 | Fix PR |
|---|---|---|
| **[#46332]** Windows native 上 cron job 选中 WSL bash 而非 Git Bash | https://github.com/NousResearch/hermes-agent/issues/46332 | ✅ **#46364** |
| **[#46304]** 模型切换器无法隐藏未配置的 provider | https://github.com/NousResearch/hermes-agent/issues/46304 | ❌ 待处理（duplicate 标记为 #46320） |
| **[#46320]** 桌面模型切换器缺少全局 toggle；恢复 session 覆盖模型设置 | https://github.com/NousResearch/hermes-agent/issues/46320 | ❌ 待处理 |
| **[#42651]** Desktop App 显示所有 profile 的 cronjobs（应按 profile 隔离） | https://github.com/NousResearch/hermes-agent/issues/42651 | ❌ 待处理 |
| **[#45103]** 桌面侧边栏悬停卡片显示 AI 生成的 session 摘要 | https://github.com/NousResearch/hermes-agent/issues/45103 | ❌ 待处理（作者表示将自行实现 PR） |
| **[#40480]** 桌面端自定义 provider 模型不在下拉列表中显示 | https://github.com/NousResearch/hermes-agent/issues/40480 | ✅ **#40529**（今日合并） |

---

## 6. 功能请求与路线图信号

今日新功能相关信号如下：

### 今日已开 PR 的新功能（高概率进入近期版本）

| PR | 描述 |
|---|---|
| **#46366** | cron 运行结果记录耗时和 token 用量统计 |
| **#46360** | kanban 观察者系统新增 epoch 回调，支持螺旋式自动工作流 |
| **#46351** | 新增 `streaming-content` 技能：Twitch/Kick/Rumble 直播转录（对标 youtube-content）|
| **#43927** | `computer_use` 新增 Windows UIA 后端（突破 macOS 独占）|
| **#43920** | 桌面端 11 个新主题 + 主题选择持久化修复 |
| **#38846** | 桌面端国际化 i18n（15 种语言，861 个 key）|

### 社区 Issue 信号 → 潜在路线图方向

| Issue | 方向 | 信号强度 |
|---|---|---|
| #46253 GBrain 作为 memory provider 插件 | 扩展 memory 后端生态 | 🔶 中等 |
| #44757 会话合并 (`sessions merge`) | 长期项目上下文管理 | 🔶 中等 |
| #46192 CLI 设置 base_url 时提供 Keep 选项 | CLI UX 微优化 | 🟢 低 |
| #16108 Gateway 事件幂等性 + 取消 + 陈旧响应抑制 | 消息平台可靠性 | 🔶 中等 |
| #22027 持久化 agent session（关闭浏览器标签后任务继续）| 可靠性/持久化 | 🔶 中等（开放已 38 天）|

**研判**：1）多平台 `computer_use` 的后端扩展（Windows 支持）和 memory 生态扩展是社区持续关注的两个方向；2）流式内容获取平台从 YouTube 扩展到 Twitch/Kick/Rumble，显示用户希望统一的内容检索能力；3）cron 统计（#46366）和 kanban epoch 自动化（#46360）表明用户正将 Hermes 用于更复杂的自动化编排场景。

---

## 7. 用户反馈摘要

### 🗣️ 真实使用场景

1. **本地化 + 模型自主运行**：大量 Issue 涉及 Ollama 后端（#46131）、GLM 模型（#45519）、Ollama reasoning models 返回空响应，表明本地 LLM 用户群体庞大且活跃
2. **多平台 IM 集成用户**：Telegram、Matrix、飞书、Mattermost 均有 bug 报告，说明 Hermes 已被广泛部署为多平台 AI bot 后端
3. **企业级/专业用户**：#36865 中用户（30年行业经验的 ADHD 用户）明确要求「专业/无障碍主题」，反映 Hermes 的使用场景已从个人扩展至职业办公环境
4. **Docker 安全敏感用户**：#46358 的 Docker network toggle 移植反映了用户对容器化部署安全边界的关注

### 😤 不满与痛点

| 痛点 | 来源 |
|---|---|
| 第三方付费服务静默路由，无用户知情同意 | #45058（11 👍 强烈不满）|
| 桌面端 UI/UX 细节不完善（自动滚动、侧边栏遮挡、模型选择器）| #44140、#46320 |
| Windows 兼容性问题持续（WSL/bash 选择、路径、npm 安装）| #46332、#46260 |
| 安装流程不完整，阶段失败不清晰 | #46260 |
| 中文翻译质量不够（~40% 覆盖率 + 术语不统一）| #46300、#38846 |

### 😊 积极信号

- #45103 和 #46366 等 Issue 中，多数作者表示"我想自己实现并提交 PR"，社区贡献意愿强烈
- 对 NousResearch 团队当日快速响应 bug 并合入 fix PR 的行为，社区整体反馈积极

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或存在重要阻塞，提醒维护者关注：

### ⚠️ 超期未处理的重要 Issue

| Issue | 开放天数 | 优先级 | 状态 |
|---|---|---|---|
| **[#16108]** Gateway 事件幂等性 | 80 天 | P3 | 仍开放，无 PR |
| **[#22027]** 持久化 agent session（关闭浏览器后任务继续）| 38 天 | P3 | 仍开放，无 PR |
| **[#23704]** Mattermost 文件附件发送静默失败 | 35 天 | P2 | 已关闭但需确认是否修复 |
| **[#31584]** Memory-context 作为背景上下文而非用户消息 | 22 天 | P2 | 讨论停滞 |
| **[#46171]** memory 工具绕过 disabled_toolsets（安全风险）| 1 天 | P2 | **今天新报告，急需响应** |

### ⚠️ 积压的重要 PR（开放 ≥ 5 天）

| PR | 开放天数 | 描述 | 风险评估 |
|---|---|---|---|
| **#38846** | 11 天 | 桌面 i18n 15 语言支持 | 与上游原生 i18n skeleton 存在架构冲突，需协调 |
| **#40136** | 10 天 | gamefi-research 工作流技能 | 范围较大，review 复杂 |
| **#43927** | 4 天 | Windows UIA 后端 | 新功能，review 充分但尚未合并 |
| **#43920** | 4 天 | 11 个新主题 + 主题持久化修复 | PR 描述与实现可能存在范围蔓延 |

### 🔴 今日新报告但尚无 PR 的 P1/P2

| Issue | 描述 |
|---|---|
| **#46171** | memory 工具 security bypass — 安全类问题，建议 48 小时内响应 |
| **#46142** | Matrix mautrix 迁移后 Tuwunel 服务器入站消息完全中断 — 部署环境特异性 bug |
| **#46303** | 并发 session 交叉隔离 — 多用户/多 session 场景下的数据隔离 bug |

---

> **总结**：Hermes Agent 社区今日贡献密度极高，维护团队响应效率值得肯定（多个 fix PR 当日开当日合）。当前最主要的风险集中在安全漏洞（#46171 memory bypass）和多平台部署可靠性（Matrix、Windows）；产品方向上，computer_use 的跨平台扩展、memory 生态丰富化、以及桌面端的国际化/主题完善是社区共识度最高的三大方向。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-15

---

## 1. 今日速览

过去 24 小时项目活跃度为**中等偏上**：Issues 更新 5 条（4 开 / 1 闭），PR 更新 8 条（待合并: 3，已合并/关闭: 5），同时发布了 nightly 构建 `v0.2.9-nightly.20260614.cf67dd38`。新功能 PR 已开始涌现（远程 agent 模式、扩展通道配置 Hook），而稳定性层面的修复（错误处理、资源清理）正在密集合并。整体来看，项目在 v0.2.9 之后处于积极迭代期，社区贡献者入场节奏加快，但从多个 Issue 被标记为 `[stale]` 来看，响应速度仍有提升空间。

---

## 2. 版本发布

### Nightly Build — `v0.2.9-nightly.20260614.cf67dd38`

> 🔗 [Full Changelog: v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

- **性质**：自动化 nightly 构建，不稳定，仅供参考与测试。
- **说明**：此版本包含 v0.2.9（当前最新稳定版）之后 `main` 分支上的所有最新开发变更，尚未标记为正式发布。用户生产环境请继续使用 `v0.2.9` 稳定版。

---

## 3. 项目进展

今日合并/关闭的 5 个 PR 主要集中在**错误处理与日志规范化**方向：

| PR | 类型 | 概要 |
|---|---|---|
| [#3124](https://github.com/sipeed/picoclaw/pull/3124) | Merge | TTS 模块：修复非 200 响应时 `io.ReadAll` 错误被静默丢弃的问题，避免诊断信息丢失 |
| [#3123](https://github.com/sipeed/picoclaw/pull/3123) | Merge | 文件系统工具：显式标记目录文件描述符 `Close()` 错误的故意忽略，提升代码可读性与 go vet 兼容性 |
| [#3122](https://github.com/sipeed/picoclaw/pull/3122) | Merge | Evolution 模块：捕获 append-only 文件 `Close()` 时可能暴露的延迟写入失败（磁盘满、NFS 错误等） |
| [#3121](https://github.com/sipeed/picoclaw/pull/3121) | Merge | OpenAI 兼容层：将唯一残留的 `log.Printf` 替换为结构化日志 `logger.WarnCF`，收齐日志规范 |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Close | Agent 循环重载与 panic 清理稳定性修复（创建已近一个月，最终被关闭） |

**综合评价**：这四个同日合并的修复 PR 均由同一贡献者提交，构成了一次集中的"卫生工程"（hygiene pass）——提升错误可见性、消除静默丢弃、统一日志风格。PR #2904 的关闭则暗示相关修复可能已通过其他方式落地，或方案被重构。

---

## 4. 社区热点

### 🔥 最高活跃度
- **[Issue #3125](https://github.com/sipeed/picoclaw/issues/3125)** — `web_search` 工具在密钥迁移至 `.security.yml` 后静默失效，架构变更导致的回归 Bug，今日刚提交尚无评论，但潜在影响面广（所有使用 Brave API 搜索的用户）。

### 💬 讨论最密集
- **[Issue #3044](https://github.com/sipeed/picoclaw/issues/3044)** — `allow_from` 对 Matrix 用户 ID 中冒号解析失效，涉及权限控制核心路径，存在评论讨论但未获维护者跟进。
- **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118)** — 远程 Pico WebSocket Agent 模式，是今日最具野心的功能 PR，将本地 agent 扩展为可远程连接，打开了边缘/嵌入式场景的可能性。

### 📌 值得关注
- **[PR #3120](https://github.com/sipeed/picoclaw/pull/3120)** — 新增 `RegisterChannelSettings` Hook，Channel 工厂已公开但配置侧未开放，此 PR 补全了"out-of-tree channel"扩展性的最后一环，对插件生态意义重大。

**分析**：社区当前的诉求集中在两块——一是**让自定义通道真正可插拔**（#3120 PR 直接回应此需求），二是**修复核心功能/API 的静默失效**（#3125、#3044），用户对"看起来配置正确但实际不工作"的容忍度很低。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重级别 | Issue | 状态 | 已有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#3125](https://github.com/sipeed/picoclaw/issues/3125) — `web_search` 静默返回空结果（Brave API） | OPEN, 待响应 | ❌ |
| 🟠 中 | [#3044](https://github.com/sipeed/picoclaw/issues/3044) — Matrix `allow_from` 对含冒号用户 ID 静默拒绝 | OPEN, stale | ❌ |
| 🟠 中 | [#3041](https://github.com/sipeed/picoclaw/issues/3041) — `mcp add` 全局标志误解析为位置参数，HTTP/SSE 服务添加失败 | OPEN, stale | ❌ |
| 🟡 低 | [#3090](https://github.com/sipeed/picoclaw/issues/3090) — iOS Safari < 16.4 面板无法使用 | OPEN, 待响应 | ❌ |

**整体稳定性评估**：今日合并的四个 PR 均为预防性修复（错误路径覆盖），未涉及线上活跃故障。但目前有 **4 个开放 Issue** 分布在高风险区域（搜索功能、权限控制、命令行工具），其中 3 个已标记 stale，建议在下一个稳定版前优先处理前两项。

---

## 6. 功能请求与路线图信号

### 新功能 PR 汇总

| PR | 方向 | 是否可能在 v0.3 纳入 |
|---|---|---|
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) — 远程 Pico WebSocket Agent | 核心架构扩展 | ✅ 高概率，已有完整实现 |
| [#3120](https://github.com/sipeed/picoclaw/pull/3120) — `RegisterChannelSettings` Hook | 插件生态 | ✅ 高概率，补全设计一致性 |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) — Telegram 回复即触发提及 | 渠道增强 | ⚠️ 可能，已 stale 需作者更新 |

### Issue 中的功能信号
- **[#2978](https://github.com/sipeed/picoclaw/issues/2978)**（已关闭）：用户请求增加 OmniRoute 提供商 — 第三方渠道集成需求持续存在，配合 #3120 的扩展 Hook，暗示项目正在构建更易用的第三方接入框架。

**判断**：项目当前的路线图信号清晰指向两点——**远程/嵌入式部署能力**（#3118）和**可扩展性/插件化**（#3120）。这两者大概率会成为下一个里程碑的核心卖点。

---

## 7. 用户反馈摘要

从今日 5 个 Issue 中提炼的真实痛点：

| 痛点 | 具体表现 | 用户场景 |
|---|---|---|
| 🔧 **配置迁移后的静默回归** | `.security.yml` 迁移后 Brave API key 读取路径变更，后端不报错只返回空结果 | 安全基础设施升级 |
| 🔐 **权限控制对特殊字符敏感** | Matrix `@localpart:domain` 格式的冒号被错误解析，配置完全匹配却拒绝消息 | Matrix 自建部署 |
| 🛠️ **CLI 标志解析错误** | `--no-color` 等全局标志被 `mcp add` 子命令误接收 | 服务器自动化/脚本化配置 |
| 📱 **移动端兼容性断裂** | iOS 16.4 以下 Safari 原生不支持关键 Web API | 移动端运维管理 |
| 🔌 **第三方通道集成门槛高** | 用户不清楚如何 fork 或配置自定义 Provider | 企业私有化渠道对接 |

**模式总结**：用户最不满意的是**"静默失败"**——系统不报错、配置看起来正确、但就是不工作。这与 #3124 修复的 TTS 错误丢弃模式完全一致，说明静默失败是项目中一类系统性质量问题。

---

## 8. 待处理积压

以下 PR/Issue 长期未获响应，建议维护者在本周窗口期至少逐一确认状态：

| 条目 | 类型 | 等待天数 | stale | 建议行动 |
|---|---|---|---|---|
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) — Matrix `allow_from` 冒号解析 | Issue | 8 天 | ✅ 已 stale | 确认是否可复现，安排修复优先级；权限类 Bug 不宜长期积压 |
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) — `mcp add` 标志解析错误 | Issue | 8 天 | ✅ 已 stale | 现有 PR #3120 关注同一代码路径，可一并处理 |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) — Telegram 回复触发提及 | PR | 16 天 | ✅ 已 stale | 请作者 rebase 最新 main 并更新，或直接关闭并记录 |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) — iOS <16.4 面板不工作 | Issue | 5 天 | ❌ | 评估影响用户比例，决定是添加兼容性垫片还是更新系统要求 |

> **项目健康度总评**：| 🟢 活跃更新 | 🟡 积压管理 | 🟢 功能推进——项目整体开发节奏良好，但积压 Issue 的 stale 标记和缺乏维护者早期响应是需要改进的模式。建议引入至少每周一次的积压 triage 流程。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw 项目动态日报 · 2026-06-15

---

### 1. 今日速览

NanoClaw 今日活跃度较高，共处理 **7 条 Issue 更新**（6 开 1 闭）和 **11 条 PR 更新**（6 待合并，5 已合并/关闭），无新版本发布。项目当前处于密集迭代期，核心方向集中在 **安全加固、多提供者架构升级、Codex 集成完善** 三个维度。值得关注的是，今日有 **3 个安全类 Issue** 集中披露，涉及审批流程绕过、未认证 webhook 和任意文件外泄，严重程度较高，但尚未有官方响应。整体项目健康度良好，合并节奏稳定，但安全响应速度需跟进。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

今日合并/关闭的 5 个 PR 推进了以下关键方向：

| PR | 状态 | 核心内容 |
|---|---|---|
| [#2764](https://github.com/nanocoai/nanoclaw/pull/2764) | ✅ 已合并 | 修复 `CLAUDE.md` 中两个已迁移文件的路径引用，提升文档准确性 |
| [#2756](https://github.com/nanocoai/nanoclaw/pull/2756) | ✅ 已合并 | **多提供者架构核心**：将 agent provider 变为显式、操作者可选的属性，合并了提供者注册表、安装器、vault 认证流程和记忆迁移 skill 等基础设施 |
| [#2757](https://github.com/nanocoai/nanoclaw/pull/2757) | ✅ ✅ 已合并 | **Codex 提供者 v2**：将 Codex 升级为完整的 agent provider，通过 OneCLI 进行 vault-only 认证，基于 host capability seams 运行 |
| [#2758](https://github.com/nanocoai/nanoclaw/pull/2758) | ✅ 已合并 | **容器 CLI 工具数据驱动安装**：将 Dockerfile 中硬编码的 `ARG` + `RUN` 块替换为 `cli-tools.json` 数据清单，新增 CLI 工具只需添加 JSON 条目 |
| [#2769](https://github.com/nanocoai/nanoclaw/pull/2769) | ❌ 已关闭 | 文档修复：`/add-codex` skill 中补充交互式认证步骤说明和 host-restart 步骤（关闭原因未说明） |

**整体评估**：多提供者架构（provider registry + 可切换 + 记忆迁移）的基础设施已落地主干，Codex 作为首个非默认提供者完成 v2 集成，容器构建流程实现数据驱动。项目在架构层面的推进非常扎实。

---

### 4. 社区热点

今日所有 Issue 和 PR 评论数均为 0，无显著讨论热点。但从 Issue 主题来看，以下议题具有较高关注度潜力：

- **[#2762](https://github.com/nanocoai/nanoclaw/issues/2762) — `add_mcp_server` 审批流程隐藏参数漏洞**：攻击者控制的 agent 可在审批者不可见的情况下注入 `args` 和 `env` 并持久化，属于高危安全漏洞。
- **[#2761](https://github.com/nanocoai/nanoclaw/issues/2761) — 本地网关审批绕过**：localhost webhook 未认证发送者即信任其事件，可绕过审批流程。
- **[#2760](https://github.com/nanocoai/nanoclaw/issues/2760) — `send_file` 任意文件外泄**：MCP 工具接受绝对路径且未约束读取范围，可外泄任意本地文件。

这三个安全 Issue 均来自同一研究者（YLChen-007），构成一组系统性安全审计发现，值得维护者集中响应。

---

### 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高危 | [#2762](https://github.com/nanocoai/nanoclaw/issues/2762) | `add_mcp_server` 审批流程隐藏参数注入 | ❌ 暂无 |
| 🔴 高危 | [#2761](https://github.com/nanocoai/nanoclaw/issues/2761) | 本地网关审批绕过（未认证 webhook） | ❌ 暂无 |
| 🔴 高危 | [#2760](https://github.com/nanocoai/nanoclaw/issues/2760) | `send_file` 任意本地文件外泄 | ❌ 暂无 |
| 🟡 中 | [#2751](https://github.com/nanocoai/nanoclaw/issues/2751) | 预算耗尽的 LLM 轮次被静默丢弃，用户无任何回复 | ✅ [#2759](https://github.com/nanocoai/nanoclaw/pull/2759)（待合并） |
| 🟡 中 | [#2516](https://github.com/nanocoai/nanoclaw/issues/2516) / [#2640](https://github.com/nanocoai/nanoclaw/issues/2640) | 容器 SIGKILL 后 outbound.db 日志残留及热日志轮询竞争 | ✅ [#2750](https://github.com/nanocoai/nanoclaw/pull/2750)（待合并） |
| 🟢 低 | [#2763](https://github.com/nanocoai/nanoclaw/issues/2763) | `CLAUDE.md` 中两个文件路径已失效 | ✅ [#2764](https://github.com/nanocoai/nanoclaw/pull/2764)（已合并） |

**安全类 Issue 目前均无修复 PR，建议优先处理。**

---

### 6. 功能请求与路线图信号

| Issue | 方向 | 信号强度 | 判断 |
|---|---|---|---|
| [#2768](https://github.com/nanocoai/nanoclaw/issues/2768) | Claude provider 默认启用 prompt caching | ⭐⭐⭐ | 明确的优化诉求，Anthropic SDK 已支持，实现成本低，大概率纳入近期迭代 |
| [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) | Telegram legacy-Markdown 清理器已过时（上游已修复） | ⭐⭐ | 技术债务清理，依赖上游 `@chat-adapter/telegram@4.30.0`，合并后可移除 workaround |
| [#2751](https://github.com/nanocoai/nanoclaw/issues/2751) | 预算耗尽时向用户传递错误信息 | ⭐⭐⭐ | 已有 fix PR #2759 待合并，即将解决 |

**路线图信号**：多提供者架构（provider switching + memory migration）已进入主干，下一阶段预计会看到更多提供者（如 OpenCode）完成类似 Codex v2 的集成。Prompt caching 和 Telegram 清理器清理属于低 hanging fruit，可能随下次版本一并发布。

---

### 7. 用户反馈摘要

今日所有 Issue 评论数为 0，无法从评论中提炼用户反馈。但从 Issue 标题和摘要中可识别以下痛点：

- **安全研究者视角**：YLChen-007 提交的三份安全审计报告表明，有外部安全研究人员对 NanoClaw 进行了系统性审计，发现了审批流程、认证机制和文件访问控制方面的深层漏洞。这反映了项目在安全设计上的不足，也说明项目已引起安全社区关注。
- **用户体验痛点**：预算耗尽时静默丢弃回复（#2751）是直接影响用户体验的问题，用户完全无法感知发生了什么。
- **文档维护滞后**：文件迁移后文档未同步更新（#2763），对 AI 编码助手和新手用户均不友好。

---

### 8. 待处理积压

以下 Issue/PR 已开放较长时间或严重程度高，提醒维护者关注：

| 条目 | 类型 | 创建日期 | 状态 | 备注 |
|---|---|---|---|---|
| [#2762](https://github.com/nanocoai/nanoclaw/issues/2762) | 🔴 安全 | 2026-06-14 | OPEN | 高危，无响应，无修复 PR |
| [#2761](https://github.com/nanocoai/nanoclaw/issues/2761) | 🔴 安全 | 2026-06-14 | OPEN | 高危，无响应，无修复 PR |
| [#2760](https://github.com/nanocoai/nanoclaw/issues/2760) | 🔴 安全 | 2026-06-14 | OPEN | 高危，无响应，无修复 PR |
| [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) | PR | 2026-06-11 | OPEN | 健康审计加固，已 rebase 到最新主干，typecheck + tests 通过，建议尽快 review |
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | PR | 2026-06-12 | OPEN | 修复 outbound.db 日志残留和竞争条件，关联两个 Issue |
| [#2759](https://github.com/nanocoai/nanoclaw/pull/2759) | PR | 2026-06-14 | OPEN | 修复预算耗尽静默丢弃问题，关联 #2751 |
| [#2770](https://github.com/nanocoai/nanoclaw/pull/2770) | PR | 2026-06-14 | OPEN | Codex 文件事件传递修复，类型声明缺失 |

**优先建议**：安全类 Issue 应在 48 小时内响应（确认/修复/披露），#2732 健康审计加固 PR 已就绪超过 3 天且测试通过，建议优先 review 合并。

---

*数据来源：[github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) · 报告生成时间：2026-06-15*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**2026-06-15 | 数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

过去 24 小时 IronClaw 项目共处理 **31 条 Issue 更新**（新开/活跃 24 条，关闭 7 条）和 **43 条 PR 更新**（待合并 26 条，已合并/关闭 17 条），无新版本发布。项目处于高频迭代阶段：核心团队集中推进 Reborn 运行时稳定性、安全修复、WebChat v2 UX 打磨三项主线。值得高度关注的是，安全研究员 **YLChen-007** 一次性提交了 **6 条 Shell 工具审批绕过漏洞**（#4861–#4865, #4797），构成当前最紧迫的技术债务。

---

## 2. 版本发布

无新版本发布。自动化 release PR（#3708）仍处于 OPEN 状态，涵盖 `ironclaw` 0.24.0 → 0.29.1 及多个 crate 的破坏性升级，尚未完成合并。

---

## 3. 项目进展

### ✅ 今日关闭的关键 Issue

| Issue | 关闭前状态 | 说明 |
|---|---|---|
| [#4851](https://github.com/nearai/ironclaw/issues/4851) | 安全类 | trusted-trigger origin 通过 adapter_kind 字符串被"清洗"的根因已定位并修复（类型系统层面） |
| [#4848](https://github.com/nearai/ironclaw/issues/4848) | 安全类 | auth-resume 匹配逻辑已从 `capability_id` 升级为 per-invocation identity（`input_ref`），关闭了 slot-reuse 风险 |
| [#4751](https://github.com/nearai/ironclaw/issues/4751) | Bug | Reborn 大体积响应请求中 provider tool arguments 超限 16384 bytes 的问题已修复 |
| [#3515](https://github.com/nearai/ironclaw/issues/4708) | 文档 | 微信公众号（WeChat channel）文档已补充 |
| [#4707](https://github.com/nearai/ironclaw/issues/4707) | UX | 对话页面字体过小 |
| [#4708](https://github.com/nearai/ironclaw/issues/4708) | UX | 生成代码块缺少语法高亮 |

### 🔀 今日合并的关键 PR

| PR | 规模 | 说明 |
|---|---|---|
| [#4738](https://github.com/nearai/ironclaw/pull/4738) | XL | **feat(reborn): WebChat v2 SPA 附件上传 UX** — 将附件上传交互接入 Reborn WebChat v2 前端，补齐了 #4644 的前端侧缺口 |
| [#4836](https://github.com/nearai/ironclaw/pull/4836) | XL | **feat(runtime-context): 运行时上下文切片** — 模型在每次循环启动时可见当前连接的 channels、 outbound delivery 目标及 run origin（`msg:runtime.*` 消息行） |
| [#4844](https://github.com/nearai/ironclaw/pull/4844) | M | **fix(slack): 按原始 gate 字符串过滤已送达路由** — 修复 gate 类型判断中的两个 bug，避免错误路由重放 |
| [#4873](https://github.com/nearai/ironclaw/pull/4873) | XS | **test(slack): 审批→认证→最终回复的 Slack 交付 e2e 测试** — 将从 #4839 移除的 flaky 测试重新安家 |

### 📈 整体推进判断

项目在三个方向同时前进：
- **安全与信任链**（#4851/#4848 的修复关闭 + #4840 凭证门控顺序修复）
- **Reborn 稳定化**（#4841 消除 run-borking 错误、#4873 补全 e2e 覆盖）
- **附件与多模态**（#4738 前端上传 UX + #4871 视觉模型图像附件）

---

## 4. 社区热点

### Issue 热度排行

| 排名 | Issue | 👍 | 评论 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#4851](https://github.com/nearai/ironclaw/issues/4851) | 0 | 1 | **类型系统安全**：trigger pipeline 将 trust 从类型降级为字符串再衍生，是 `ScheduledTrigger` origin 可伪造的根因 |
| 2 | [#4848](https://github.com/nearai/ironclaw/issues/4848) | 0 | 1 | **认证恢复唯一性**：auth-resume 匹配需要 per-invocation identity 而非 `capability_id`，防止 slot-reuse 竞争 |
| 3 | [#4644](https://github.com/nearai/ironclaw/issues/4644) | 0 | 1 | **通用附件管线**：v1/v2 附件在 Reborn 上静默丢弃，且格式支持逻辑在 4+ 处重复，缺乏扩展点 |

### PR 热度观察

| PR | 关注点 |
|---|---|
| [#4876](https://github.com/nearai/ironclaw/pull/4876) | dependabot 批量升级 **43 个依赖**（含 agent-client-protocol 0.10.4 → 0.14.0、refinery 0.8.16 → 0.9.2），规模大、风险中等，是潜在的破坏性变更源 |
| [#4778](https://github.com/nearai/ironclaw/pull/4778) | 将 Slack 重构为 **product-adapter 扩展**，移出硬编码内置 channel 列表，对产品架构影响深远 |
| [#4787](https://github.com/nearai/ironclaw/pull/4787) | **Barcelona Hackathon 分支** 标记 NO MERGE，但持续跟踪上游，表明社区推广活动在进行中 |

**热点解读**：三次"评论最多"的 Issue 均集中在类型系统和认证安全上，反映出贡献者对底层信任链的严肃关注。#4851 虽然评论仅 1 条，但其描述的根因（类型擦除导致安全降级）已在 #4848 的修复中部分覆盖，说明社区对安全审计的参与度正在提升。

---

## 5. Bug 与稳定性

### 🔴 高危安全漏洞（需立即关注）

| Issue | 严重程度 | 描述 | 修复 PR | 状态 |
|---|---|---|---|---|
| [#4865](https://github.com/nearai/ironclaw/issues/4865) | **Critical** | Shell 审批边界可通过 `env /bin/sh -c` 透明包装绕过 | 未提及 | **OPEN** |
| [#4864](https://github.com/nearai/ironclaw/issues/4864) | **Critical** | 高风险命令可继承先前的自动审批 | 未提及 | **OPEN** |
| [#4863](https://github.com/nearai/ironclaw/issues/4863) | **Critical** | `env`/shell 包装器在自动审批后可绕过审批 | 未提及 | **OPEN** |
| [#4862](https://github.com/nearai/ironclaw/issues/4862) | **High** | `sort --compress-program` 可逃逸风险分类 | 未提及 | **OPEN** |
| [#4861](https://github.com/nearai/ironclaw/issues/4861) | **High** | 换行符链接的破坏性命令绕过确认 | 未提及 | **OPEN** |
| [#4797](https://github.com/nearai/ironclaw/issues/4797) | **High** | `write_file` 沙箱可通过悬空符号链接逃逸 | 未提及 | **OPEN** |

> ⚠️ 以上 6 条安全 Issue 均来自同一研究者（YLChen-007），**全部无关联 PR 且标有 `[security]` 标签**，建议安全团队优先确认并启动修复流程。

### 🟡 中等稳定性问题

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#4874](https://github.com/nearai/ironclaw/issues/4874) | WebChat v2 在 plain HTTP 非 localhost 访问时发送消息报 "Illegal invocation" | 未提及 |
| [#4870](https://github.com/nearai/ironclaw/issues/4870) | WebUI WebSocket helper 与 v2 auth 协议冲突（query-token 认证在 WebSocket 路由上被拒绝） | 未提及 |
| [#4867](https://github.com/nearai/ironclaw/issues/4867) | GitHub 仓库分析可能绕过 GitHub Extension 回退到 builtin.http | 未提及 |
| [#4853](https://github.com/nearai/ironclaw/issues/4853) | Railway/多租户环境下 Tool Activity 完成后消失 | 未提及 |

### 🟢 UX 与非致命 Bug

| Issue | 描述 |
|---|---|
| [#4852](https://github.com/nearai/ironclaw/issues/4852) | 审批对话框和活动历史中 shell 命令不可见 |
| [#4868](https://github.com/nearai/ironclaw/issues/4868) | 移动端设置页 provider 操作按钮溢出屏幕 |
| [#4855](https://github.com/nearai/ironclaw/issues/4855) | WebUI zh-CN 语言包在核心流程仍回退英文 |
| [#4854](https://github.com/nearai/ironclaw/issues/4854) | 简单 GitHub Extension 请求触发过多审批提示 |
| [#4857](https://github.com/nearai/ironclaw/issues/4857) | 全新环境错误显示 NEAR AI provider 为 ACTIVE |
| [#4856](https://github.com/nearai/ironclaw/issues/4856) | 对话框、命令面板可访问性与移动端交互打磨 |

---

## 6. 功能请求与路线图信号

### 待合并 PR 直接指向的近期路线图

| PR | 指示方向 | 可能纳入版本 |
|---|---|---|
| [#4871](https://github.com/nearai/ironclaw/pull/4871) | **图像附件多模态**：视觉模型接收真实像素而非文本指针 | 下一 feature 版本 |
| [#4738](https://github.com/nearai/ironclaw/pull/4738)（已合并） | **通用附件管线前端** | 近期发布 |
| [#4778](https://github.com/nearai/ironclaw/pull/4778) | **Slack 外部扩展化**：channel 层可插拔架构 | 中期路线图 |
| [#4835](https://github.com/nearai/ironclaw/pull/4835) | **审批范围跨线程**："always allow" 移除 thread_id 维度 | 下一 patch 版本 |
| [#4840](https://github.com/nearai/ironclaw/pull/4840) | **凭证门控顺序修复**：先检查凭证再审批 | 紧急 patch |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) | **消除 run-borking 错误**：终端错误可恢复可解释 | 下一 feature 版本 |
| [#4588](https://github.com/nearai/ironclaw/pull/4588) | **Reborn 可观测性接口**：trajectory observer + LLM provider 注入 | 面向 benchmark/外部集成 |

### 仅 Issue 形式的需求（尚无关联 PR）

| Issue | 诉求 | 评估 |
|---|---|---|
| [#4877](https://github.com/nearai/ironclaw/issues/4877) | Production runtime 接入 communication-context provider（目前仅 local-dev） | 已有明确的代码位置指引，实施门槛低 |
| [#4875](https://github.com/nearai/ironclaw/issues/4875) | `runtime_context.rs` 拆分（~1025 行，4 个变更原因合一） | 代码组织重构，优先级中等 |
| [#4872](https://github.com/nearai/ironclaw/issues/4872) | comm-labels 渲染为 escaped untrusted data 而非 instruction text | 安全相关但非紧急，可与安全修复合批处理 |
| [#4850](https://github.com/nearai/ironclaw/issues/4850) | 将 #4839 遗留的超大文件拆分为守规模块 | 机械性重构，已有 `.claude/rules/architecture.md` 规范驱动 |

**路线图判断**：
- **安全修复 + auth 加固** 是当务之急（6 条高危 Issue + #4840），预计会在下一版本中占比最重
- **附件多模态 + WebChat UX** 正在并行推进，近 1-2 个 feature 版本可见成果
- **Reborn 可观测性** 和 **Slack 外部化** 属于架构层变更，需要更长的 review 周期

---

## 7. 用户反馈摘要

### 🔴 真实用户痛点

1. **审批体验令人沮丧**（[#4854](https://github.com/nearai/ironclaw/issues/4854)）
   > 仅查询最新 commit 就触发了 3+ 次审批弹窗。读操作不需要写同等的安全确认，审批粒度需要区分操作风险等级。

2. **Shell 审批框缺少上下文**（[#4852](https://github.com/nearai/ironclaw/issues/4852)）
   > 审批框只显示 `Capability: builtin.shell`，不展示实际命令内容。用户无法做出有意义的审批决策。

3. **多租户/部署场景体验差**（[#4853](https://github.com/nearai/ironclaw/issues/4853)）
   > 任务执行中 Activity 计数正常但完成后消失。用户无法审计已执行的操作。

4. **plain HTTP 被阻断**（[#4874](https://github.com/nearai/ironclaw/issues/4874)）
   > 内网非 HTTPS 访问全面崩溃。虽然安全立场正确，但缺少错误提示引导用户理解原因。

5. **移动端基本不可用**（[#4868](https://github.com/nearai/ironclaw/issues/4868)）
   > 设置页操作按钮被截断，无法完成 provider 配置。

### 🟢 隐含的正面信号

- **Reborn Dogfooding 持续进行**（[#4692](https://github.com/nearai/ironclaw/issues/4692)）：核心团队在日常开发中使用 IronClaw 自身作为 agent，是产品成熟的标志
- ** Barcelona Hackathon 适配**（[#4787](https://github.com/nearai/ironclaw/issues/4787)）：外部社区正在基于 IronClaw 构建赛事方案，说明项目具备足够的可扩展性和吸引力
- **WeChat 渠道趋于成熟**（[#3515](https://github.com/nearai/ironclaw/issues/3515)）：已到文档化阶段

### 😐 不满意集中在：

| 维度 | 典型评论方向 |
|---|---|
| 本地化 | zh-CN 翻译不完整 |
| 安全研究响应 | 6 条高危漏洞同一天提交，说明此前缺乏外部安全审计 |
| 默认体验 | 全新 install 时 UI 状态展示不准确 |

---

## 8. 待处理积压

### ⏰ 长期未响应的关键项

| 项目 | 类型 | 开放天数 | 风险 | 建议 |
|---|---|---|---|---|
| **6 条 Shell 安全漏洞**（[#4861](https://github.com/nearai/ironclaw/issues/4861)–[#4865](https://github.com/nearai/ironclaw/issues/4865), [#4797](https://github.com/nearai/ironclaw/issues/4797)） | Security Issue | **< 1 天** | 🔴 危急 | 建议在 24h 内分配所有者，72h 内出修复 PR |
| [#4846](https://github.com/nearai/ironclaw/pull/4846) — workspace 路径规范化 | PR (M) | 刚提交 | 🟡 中 | 回归风险已含测试，但需尽快 review 避免积压 |
| [#4876](https://github.com/nearai/ironclaw/pull/4876) — 依赖批量升级 43 项 | dependabot | < 1 天 | 🟡 中 | agent-client-protocol 大版本跳跃（0.10→0.14），建议单独拆分评估 |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) — 自动化 release | Bot PR | **~30 天** | 🟠 长期挂起 | 可能是 CI 或审核流程卡住，建议检查自动化 pipeline 状态 |
| [#4499](https://github.com/nearai/ironclaw/pull/4499) — tokio-ecosystem 升级 | dependabot | **~40 天** | 🟠 长期挂起 | tokio-tungstenite/hyper 升级影响 async runtime 核心，需手动验证 |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) — GitHub Actions 升级 16 项 | dependabot | **~21 天** | 🟠 长期挂起 | CI 基础设施变更，建议合并前确认 CI 全绿 |
| [#4778](https://github.com/nearai/ironclaw/pull/4778) — Slack 扩展化 | PR (XL) | **4 天** | 🟡 中 | 产品架构变更，需要充分 review |
| [#4850](https://github.com/nearai/ironclaw/issues/4850) — 文件拆分跟踪 | Tracking Issue | < 1 天 | 🟢 低 | 技术规范驱动，按计划推进即可 |

### 🔎 特别提醒维护者

1. **安全响应机制待建立**：同一位研究者一次性提交 6 条高危漏洞，目前全部未分配 owner、无关联 PR。建议立即指定安全对接人，并在 `SECURITY.md` 中公开响应时间承诺。
2. **dependabot PR 积压严重**：#4499（40天）、#4002（21天）、#3708（30天）三批依赖升级长期未合并。tokio/hyper 等核心 async runtime 的旧版本可能带来安全和技术债务。建议设定每周一次的依赖合并窗口。
3. **Reborn 方向 Issue 密集但缺 UX owner**：#4852、#4868、#4855、#4856、#4857 共 5 条 WebUI UX 问题来自 Dogfooding，均为细节打磨类但数量多。建议指派一名 UX-focused maintainer 集中处理。

---

*日报由 OWL 基于 GitHub API 数据自动生成 | 2026-06-15 00:00 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-06-15

---

## 1. 今日速览

过去24小时内 LobsterAI 共有 **2 条 Issue 更新**、**4 条 PR 更新**，无新版本发布。整体活跃度为**低水平**，两项 Issue 均标记为 `[stale]`，且最近活动时间停留在 48 小时前，说明它们被重新激活但尚未得到维护者响应。待合并 PR 共 3 条，全部处于 stale 状态，社区贡献正在积压。

---

## 2. 版本发布

过去24小时内无新版本发布。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR

| # | PR 标题 | 贡献者 | 说明 |
|---|---------|--------|------|
| [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | fix(scheduled-tasks): 已删除的定时任务重启后作为幽灵会话重新出现 | linlihua | **关键稳定性修复**。关联 Issue [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)，根本原因为删除定时任务时本地 SQLite `cowork_sessions` 表中的关联会话记录未被清理，导致重启后以空内容会话反复重生。该 PR 补全了数据清理链路，是一项直接影响用户数据一致性的修复。 |

**项目整体向前迈进了一小步**：幽灵会话问题长期困扰用户，此次修复补足了删除-CRUD 链路的完整性。

### 🔄 待合并 PR（共 3 条）

| # | PR 标题 | 贡献者 | 说明 |
|---|---------|--------|------|
| [#1429](https://github.com/netease-youdao/LobsterAI/pull/1429) | feat(cowork): add in-session message search with mark.js highlighting | noransu | 在 Cowork 会话视图中新增会话内消息搜索功能，支持 `Cmd/Ctrl+F`、实时高亮、匹配计数、`Enter` 跳转、自动清理旧会话高亮等完整交互。 |
| [#1430](https://github.com/netease-youdao/LobsterAI/pull/1430) | feat(cowork): 会话运行期间自动阻止系统休眠 | choyuenga | 利用 Electron `powerSaveBlocker` API，在 `cowork:session:start` 时 acquire，在会话完结/报错/手动停止时 release，解决长时间任务因系统休眠被中断的可靠性问题。 |
| [#1431](https://github.com/netease-youdao/LobsterAI/pull/1431) | feat(cowork): StreamingActivityBar 右侧显示会话运行计时器 | choyuenga | 秒级实时计时器，格式化显示（`42s / 2m 5s`），从最后一条 user 消息 timestamp 起算，对标 Claude Code 等工具的流式体验。 |

这三条功能 PR 均已 stale 逾两个月，但每一条都是对 Cowork 体验的完整增强，合并后将显著提升产品竞争力。

---

## 4. 社区热点

今日所有更新 Issues/PRs 评论数均≤1，**无明显热点讨论**。以下为近期最受关注的条目：

| 条目 | 链接 | 热度信号 |
|------|------|----------|
| [#1434](https://github.com/netease-youdao/LobsterAI/issues/1434) | 龙虾中文环境下技能搜索无数据时显示英文提示 | 用户反馈中典型的 i18n 遗漏问题，中文模式下的 fallback 文案未翻译为中文 |
| [#1435](https://github.com/netease-youdao/LobsterAI/issues/1435) | 新建自定义 agent 名称过长溢弹框 | 简单但影响用户体验的 UI 溢出 bug |

这两条 Issue 均由 **xuzx-code** 在同一天（2026-04-03）提出，描述精准、附截图，质量较高，但至今未获得维护者回复。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 链接 | 描述 | 状态 |
|----------|-------|------|------|------|
| 🟡 中 | [#1465 PR已合并](https://github.com/netease-youdao/LobsterAI/pull/1465) | [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) | 删除定时任务后重启以幽灵会话反复出现 | ✅ 已修复并合并 |
| 🟢 低 | [#1434](https://github.com/netease-youdao/LobsterAI/issues/1434) | 中文模式下技能搜索无数据时 fallback 提示仍为英文 | ❌ 未分配 |
| 🟢 低 | [#1435](https://github.com/netease-youdao/LobsterAI/issues/1435) | 新建自定义 agent 名称过长导致弹框溢出 | ❌ 未分配 |

**综合评估**：幽灵会话 bug 的修复是最实质性的稳定性进展，当前其余 bug 均属于低优先级 UI 问题，不影响核心功能。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 说明 |
|------|------|------|
| **内置搜索** | [PR #1429](https://github.com/netease-youdao/LobsterAI/pull/1429) | 会话内全文搜索 + 高亮。随着会话历史增长，内置搜索将成为标配能力，该 PR 已完整实现，有望较快合并。 |
| **长任务可靠性** | [PR #1430](https://github.com/netease-youdao/LobsterAI/pull/1430) | 防止系统休眠中断 Agent 任务。对于执行耗时任务的 Power Users 是高频痛点。 |
| **运行时可观测性** | [PR #1431](https://github.com/netease-youdao/LobsterAI/pull/1431) | 实时计时器，提升用户对长任务进度的感知。与 #1430 配合构成"长任务体验增强"组合。 |
| **i18n 完善** | [Issue #1434](https://github.com/netease-youdao/LobsterAI/issues/1434) | 中文环境下 UI 仍有英文 fallback 残留，需系统性排查 i18n 覆盖度。 |
| **UI 溢出防护** | [Issue #1435](https://github.com/netease-youdao/LobsterAI/issues/1435) | 表单输入长度校验与溢出处理，前端组件健壮性提升。 |

**判断**：三条 Cowork 体验 PR（#1429、#1430、#1431）功能完整、互不冲突，具备作为一组特性合并的条件，有望纳入下一版本。

---

## 7. 用户反馈摘要

- **多语言支持不完整**：用户明确提出龙虾设为中文后，技能搜索无数据时的空状态提示和按钮仍为英文。用户附截图说明，说明该问题可直接复现，降低了 localization 的完成度感知。
- **表单输入边界处理缺失**：新建 Agent 时名称过长直接爆框，表明前端组件未做 max-length 或 overflow 防护，影响专业用户对产品品质的信任。
- **定时任务可靠性**：幽灵会话问题（Issue #1359）说明用户实际在使用定时任务功能，但删除逻辑不完整导致反复出现异常数据，严重影响用户信任。该问题已被 PR #1465 修复但尚未发布正式版。
- **整体满意度信号**：无点赞（👍）的 Issue 获得正面反馈，也未见用户在评论中表达不满语言；社区处于**发现问题—等待响应**的稳态。

---

## 8. 待处理积压

以下 Issue/PR 标记为 `[stale]`，提醒维护者关注并决策：

| # | 类型 | 链接 | 最后更新 | 说明 |
|---|------|------|----------|------|
| 1434 | Issue | [链接](https://github.com/netease-youdao/LobsterAI/issues/1434) | 2026-06-14 (48h前激活) | i18n 遗漏，低工作量，建议快速 close |
| 1435 | Issue | [链接](https://github.com/netease-youdao/LobsterAI/issues/1435) | 2026-06-14 (48h前激活) | UI 溢出 bug，低工作量，建议快速 close |
| 1429 | PR | [链接](https://github.com/netease-youdao/LobsterAI/pull/1429) | 2026-06-14 (48h前激活) | 会话内搜索，功能完备，建议 review 合并 |
| 1430 | PR | [链接](https://github.com/netease-youdao/LobsterAI/pull/1430) | 2026-06-14 (48h前激活) | 阻止休眠，功能完备，建议 review 合并 |
| 1431 | PR | [链接](https://github.com/netease-youdao/LobsterAI/pull/1431) | 2026-06-14 (48h前激活) | 运行计时器，功能完备，建议 review 合并 |

**建议**：维护者可考虑在下一版本窗口期集中处理——3 条 low-hanging Issue 直接确认/修复，3 条 stale PR 完成 review 后合并，这将显著向前推进版本节奏并回馈社区贡献者的等待。

---

> **项目健康度总评**：LobsterAI 目前处于**功能开发活跃但维护响应滞后**的状态。社区贡献者已提交多项高质量功能 PR，但 stale 标签积压提示维护者需加快 review 节奏。稳定性方面幽灵会话隐患已修复，整体风险可控。建议维护者尽快完成 PR review 轮次，避免贡献者流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-15

---

## 1. 今日速览

过去 24 小时内，Moltis 项目整体活跃度**偏低**，处于维护性迭代阶段。共新增 1 个 Issue 和 2 个 PR，均处于开放状态，尚无合并或关闭动作，也无新版本发布。社区参与度有限——所有新增条目评论数均为 0，👍 反应也为 0，表明当前议题尚未引发广泛讨论。项目节奏以依赖升级和基础设施修复为主，未见重大功能推进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日无 PR 合并或关闭，项目在代码层面的推进为零。两个开放 PR 均处于待审状态：

| PR | 类型 | 说明 |
|---|---|---|
| [#1122](https://github.com/moltis-org/moltis/pull/1122) — *fix: drop VOLUME declarations that shadow the home bind mount* | Bug 修复 | 移除 Dockerfile 中与用户 home 目录 bind mount 冲突的 `VOLUME` 声明，解决部署时的路径遮蔽问题 |
| [#1121](https://github.com/moltis-org/moltis/pull/1121) — *chore(deps-dev): bump esbuild 0.25.12 → 0.28.1* | 依赖升级 | 将前端构建工具 esbuild 跨大版本升级（含 3 个小版本跨度），需关注 breaking changes |

**评估：** 两个 PR 均为低风险变更，但均未被 review 或合并，建议维护者尽快处理以避免积压。

---

## 4. 社区热点

今日社区讨论极为平静，**无热点议题**。新增的 Issue 和 PR 评论数均为 0，👍 反应均为 0，尚未形成社区互动。

唯一值得关注的功能请求：

- **[#1123 [Feature]: Add pure-Rust turbovec as an alternative memory backend for extreme edge compression](https://github.com/moltis-org/moltis/issues/1123)**
  - 作者 joeblew999 提议引入纯 Rust 实现的 `turbovec` 作为替代内存后端，目标场景为**极端边缘压缩（extreme edge compression）**。
  - 该请求已完成预检清单（确认非重复提案），但尚未收到任何社区反馈。
  - **背后诉求：** 用户可能在资源受限的边缘环境中运行 Moltis，对内存效率和压缩性能有更高要求，希望摆脱现有后端的限制。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix PR |
|---|---|---|---|
| 🟡 中 | [#1122 (PR)](https://github.com/moltis-org/moltis/pull/1122) | Dockerfile 中 `VOLUME` 声明遮蔽用户 home bind mount，导致部署时配置/数据目录行为异常 | PR 已提交，待合并 |
| 🟢 低 | [#1121 (PR)](https://github.com/moltis-org/moltis/pull/1121) | esbuild 跨大版本升级（0.25.x → 0.28.x），可能引入构建兼容性问题 | PR 已提交，待合并 |

**无崩溃或回归问题报告。** 唯一的实际 Bug（VOLUME 遮蔽）已有对应修复 PR，但尚未合并。

---

## 6. 功能请求与路线图信号

| 请求 | 链接 | 分析 |
|---|---|---|
| 引入 pure-Rust turbovec 作为替代内存后端 | [#1123](https://github.com/moltis-org/moltis/issues/1123) | 这是一个**架构级增强请求**，涉及替换/新增内存后端。目前无相关 PR 存在，短期内不会被纳入下一版本。需要维护者评估技术可行性和优先级。 |

**路线图信号：** 当前项目处于稳定维护期，无明确的大版本功能规划信号。边缘计算场景的优化需求（如 #1123）可能代表一个潜在方向，但需更多社区共识。

---

## 7. 用户反馈摘要

今日新增内容中**无实质性用户评论**，无法提炼具体痛点或使用场景。

从 Issue/PR 内容可间接推断：

- **部署配置问题：** PR #1122 表明用户在 bind mount 整个 home 目录的部署模式下遇到了 VOLUME 遮蔽问题，说明存在**自托管/容器化部署**的用户群体，且对 Docker 配置细节敏感。
- **边缘计算场景：** Issue #1123 表明有用户在**资源受限的边缘环境**中运行 Moltis，对内存压缩效率有极致需求。
- **依赖现代化：** esbuild 的大版本升级（PR #1121）反映项目在跟进前端工具链的最新进展。

---

## 8. 待处理积压

| 条目 | 链接 | 状态 | 建议 |
|---|---|---|---|
| PR #1122 — VOLUME 遮蔽修复 | [链接](https://github.com/moltis-org/moltis/pull/1122) | 开放，无评论 | **建议优先合并**，修复明确的部署 Bug，风险低 |
| PR #1121 — esbuild 升级 | [链接](https://github.com/moltis-org/moltis/pull/1121) | 开放，无评论 | 需验证构建兼容性后合并，关注 esbuild 0.26+ 的 breaking changes |
| Issue #1123 — turbovec 内存后端 | [链接](https://github.com/moltis-org/moltis/issues/1123) | 开放，无评论 | 需维护者回复确认是否纳入路线图，避免长期挂起 |

**整体健康度评估：** 项目当前积压量极低，但所有新增条目均处于"零互动"状态，建议维护者至少进行初步 review 或回复，以维持社区参与感。

---

*数据来源：GitHub moltis-org/moltis | 报告生成时间：2026-06-15*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-15

---

## 1. 今日速览

CoPaw 今日活跃度较高，共产生 **8 条 Issue 更新**（7 新开 / 1 关闭）和 **7 条 PR 更新**（全部待合并），无新版本发布。社区贡献者 `nguyenthanhthe` 表现突出，一人提交了 4 个 PR，覆盖控制台功能、定时任务、技能触发词和会话过滤。整体来看，项目处于 **v1.1.11.post2 发布后的反馈消化期**，用户集中报告了该版本的回归问题，同时社区在国际化、Windows 桌面自动化和前端体验方面持续贡献代码。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为 v1.1.11.post2。

---

## 3. 项目进展

今日 **无 PR 合并或关闭**，所有 7 个 PR 均处于待合并状态。以下是各 PR 的进展方向汇总：

| PR | 作者 | 方向 | 说明 |
|---|---|---|---|
| [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | jinglinpeng | ✨ 新功能 | 新增 `computer_use` 内置工具，支持 Windows 桌面 GUI 自动化（截图、UIA 元素描述、点击/输入/滚动/拖拽/应用启动），配合 Tauri 端 **Control Mode** 让用户实时查看 agent 操作 |
| [#5186](https://github.com/agentscope-ai/CoPaw/pull/5186) | biencuong | 🌐 国际化 | 完整的越南语 (vi) 界面翻译，覆盖全部 40 个 UI 章节，取代之前不完整的 #5175 |
| [#5175](https://github.com/agentscope-ai/CoPaw/pull/5175) | nguyenthanhthe | 🌐 国际化 | 越南语部分翻译（已被 #5186 取代） |
| [#5180](https://github.com/agentscope-ai/CoPaw/pull/5180) | nguyenthanhthe | 🔧 修复 | 增加 cron/heartbeat 超时时间并添加自主上下文提示，解决复杂多步操作静默失败问题 |
| [#5179](https://github.com/agentscope-ai/CoPaw/pull/5179) | nguyenthanhthe | 🔧 修复 | 扩展 `multi_agent_collaboration` 技能触发关键词，修复"团队协作"模式首次响应被忽略的问题 |
| [#5178](https://github.com/agentscope-ai/CoPaw/pull/5178) | nguyenthanhthe | ✨ 新功能 | 控制台会话页面新增按标题过滤功能（对应 Issue #4999） |
| [#5176](https://github.com/agentscope-ai/CoPaw/pull/5176) | nguyenthanhthe | 🔧 修复 | 审批命令文本添加 `word-break` 换行，防止长路径导致水平溢出（对应 Issue #4985） |

**整体判断：** 项目在 Windows 桌面自动化方向迈出重要一步（#5187），国际化越南语即将完善，前端体验和定时任务稳定性也在持续推进。但所有 PR 均未合并，维护者审查速度有待提升。

---

## 4. 社区热点

### 🔥 Issue #5156 — 建议支持 kimi-for-coding / 加入 uv 白名单
- **链接：** https://github.com/agentscope-ai/CoPaw/issues/5156
- **互动：** 5 条评论（今日最高）
- **分析：** 用户 `wjt0321` 反映已订阅 Kimi coding 套餐的用户无法将 `kimi-for-coding` 接入 CoPaw，因为该模型未被加入 `uv` 白名单。核心诉求是 **扩展模型生态兼容性**，让付费用户能充分利用已有订阅。这反映出 CoPaw 在第三方模型接入策略上可能存在限制，社区对多模型支持的需求较为迫切。

### 🔥 Issue #5184 — Local model providers not showing in v1.1.11.post2
- **链接：** https://github.com/agentscope-ai/CoPaw/issues/5184
- **互动：** 2 条评论
- **分析：** v1.1.11 引入的本地模型提供者在 v1.1.11.post2 中无法正常显示。这是一个 **回归 bug**，直接影响本地部署用户的核心工作流。

### 🔥 Issue #5181 — 插件依赖安装导致 cmd 窗口持续弹窗
- **链接：** https://github.com/agentscope-ai/CoPaw/issues/5181
- **互动：** 1 条评论
- **分析：** 插件系统自动 `pip install` 时未隐藏 cmd 窗口，在网络不稳定时触发死循环重试，导致桌面频繁闪现 cmd.exe。这是 **v1.1.11.post2 的严重 UX 回归**，影响 Windows 用户日常使用体验。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 — 影响核心功能

| # | Issue | 描述 | 版本 | Fix PR |
|---|---|---|---|---|
| 1 | [#5184](https://github.com/agentscope-ai/CoPaw/issues/5184) | 本地模型提供者在 v1.1.11.post2 中不显示（v1.1.11 引入功能的回归） | v1.1.11.post2 | ❌ 无 |
| 2 | [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | 聊天间隔一段时间后发送消息无响应，需点击停止后恢复（已关闭，但问题描述严重） | 未标注 | ✅ 已关闭（原因未明） |
| 3 | [#5181](https://github.com/agentscope-ai/CoPaw/issues/5181) | 插件依赖安装死循环导致 cmd 窗口持续弹窗 | v1.1.11.post2 | ❌ 无 |

### 🟡 中等 — 影响特定场景

| # | Issue | 描述 | Fix PR |
|---|---|---|---|
| 4 | [#5177](https://github.com/agentscope-ai/CoPaw/issues/5177) | 钉钉 channel 消息未注册到 chats.json，前端会话列表不可见 | ❌ 无 |
| 5 | [#5183](https://github.com/agentscope-ai/CoPaw/issues/5183) | 宠物功能在 Wayland 桌面（Niri WM）上无法正常使用 | ❌ 无 |

### 🟢 轻微 — 体验优化

| # | Issue | 描述 | Fix PR |
|---|---|---|---|
| 6 | [#5185](https://github.com/agentscope-ai/CoPaw/issues/5185) | Agent 上下文中缺少实时时分秒时间戳 | ❌ 无 |

**稳定性评估：** v1.1.11.post2 引入了至少 **2 个回归 bug**（本地模型提供者不显示、cmd 弹窗），建议维护者尽快排查并发布修复版本。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关 PR | 信号强度 |
|---|---|---|---|
| Windows 桌面 GUI 自动化 | — | [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | 🟢 已有 PR，功能完整 |
| 越南语界面支持 | #5169 | [#5186](https://github.com/agentscope-ai/CoPaw/pull/5186) | 🟢 已有完整 PR |
| 会话按标题过滤 | #4999 | [#5178](https://github.com/agentscope-ai/CoPaw/pull/5178) | 🟢 已有 PR |
| 审批命令文本换行 | #4985 | [#5176](https://github.com/agentscope-ai/CoPaw/pull/5176) | 🟢 已有 PR |
| 支持 kimi-for-coding | [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | ❌ 无 | 🟡 社区有需求，待排期 |
| Agent 上下文注入实时时间戳 | [#5185](https://github.com/agentscope-ai/CoPaw/issues/5185) | ❌ 无 | 🟡 合理需求，实现成本低 |
| 统一模型配置（向量/文本/音视频） | [#5182](https://github.com/agentscope-ai/CoPaw/issues/5182) | ❌ 无 | 🟡 架构优化方向 |
| Cron/heartbeat 超时优化 | — | [#5180](https://github.com/agentscope-ai/CoPaw/pull/5180) | 🟢 已有 PR |
| 多智能体协作触发词优化 | — | [#5179](https://github.com/agentscope-ai/CoPaw/pull/5179) | 🟢 已有 PR |

**路线图判断：** 下一版本（v1.1.12 或 v1.1.12.post1）大概率会包含越南语支持、会话过滤、cron 超时修复和审批命令换行。Windows 桌面自动化（#5187）是一个较大的功能 PR，可能需要更长的审查周期。

---

## 7. 用户反馈摘要

**痛点：**
- **v1.1.11.post2 回归问题集中爆发**：本地模型提供者消失、cmd 窗口弹窗死循环，用户对新版本稳定性不满。
- **模型生态封闭**：Kimi coding 套餐用户无法接入，用户感到付费订阅价值被浪费。
- **长时间对话体验差**：间隔一段时间后发送消息无响应（#5172），用户描述"这么严重问题竟然一直存在"，情绪较为负面。
- **Wayland 兼容性缺失**：宠物功能在 Wayland  compositor（Niri）上无法使用，Linux 桌面用户被忽视。
- **钉钉集成不完善**：消息虽能收发，但前端会话列表不可见，影响使用体验。

**满意点：**
- Issue #5156 的用户对项目整体表达了感谢（"感谢你们一直在维护这个项目"），说明社区对团队的努力持认可态度。

**使用场景画像：**
- Windows 桌面用户（cmd 弹窗、宠物功能、GUI 自动化需求）
- 本地模型部署用户（本地模型提供者 bug）
- 企业 IM 集成用户（钉钉 channel）
- 多语言用户（越南语翻译需求）
- 复杂任务用户（cron/heartbeat 超时问题）

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，提醒维护者关注：

| # | 类型 | 标题 | 创建日期 | 状态 | 建议 |
|---|---|---|---|---|---|
| [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | Issue | 支持 kimi-for-coding | 2026-06-12 | 开放中，5 条评论 | 已有社区讨论，建议回复排期或技术限制说明 |
| [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | Issue | 聊天无响应 bug | 2026-06-13 | **已关闭** | 关闭原因不明，建议确认是否已修复或需要复现 |
| [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | PR | Windows GUI 自动化 | 2026-06-14 | 待审查 | 功能较大，建议尽早启动审查 |
| [#5186](https://github.com/agentscope-ai/CoPaw/pull/5186) | PR | 越南语完整翻译 | 2026-06-14 | 待审查 | 与 #5175 冲突，建议合并 #5186 并关闭 #5175 |

**特别提醒：** 7 个 PR 全部积压未合并，建议维护者尽快安排审查，避免贡献者积极性下降。

---

*数据来源：agentscope-ai/CoPaw | 报告生成时间：2026-06-15 | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-15

---

## 1. 今日速览

ZeroClaw 今日活跃度处于**高位**：过去 24 小时内 Issues 更新 41 条（新开/活跃 13 条，关闭 28 条），PR 更新 50 条（待合并 49 条，已合并/关闭 1 条），无新版本发布。项目整体呈现**高吞吐量、高积压**特征——大量 PR 排队待审，Issue 关闭率较高（68%），说明维护者在积极清理积压。但待合并 PR 已累积至 49 条，存在明显的**审查瓶颈**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日仅 1 条 PR 被合并/关闭：

| PR | 状态 | 说明 |
|---|---|---|
| [#7566](https://github.com/zeroclaw-labs/zeroclaw/pull/7566) | ✅ 已合并 | **fix(config): 对文件传输 header 中的 Bearer Token 进行脱敏** — 修复了 `file_upload_bundle.headers` 和 `file_download.headers` 中 Authorization Bearer Token 明文存储和回显的安全问题。 |

**值得关注但尚未合并的重要 PR（按规模和影响排序）：**

- **[#7665](https://github.com/zeroclaw-labs/zeroclaw/pull/7665)** — **Operator Console 全面重设计**：对 gateway web UI 进行彻底重构，引入 schema-driven 配置和多 agent 聊天功能。这是今日最新提交的大型 PR，代表项目在用户体验层面的重大投入。
- **[#7594](https://github.com/zeroclaw-labs/zeroclaw/pull/7594)** — **类型驱动的 alias-ref picker 和自声明配置枚举**：消除硬编码的逐路径特殊处理，是配置系统架构层面的重要内部重构。
- **[#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893)** — **多数据库 session 后端（Postgres/Oracle/MySQL/Db2）**：为多 agent 集群提供跨 worker 共享 session 状态的能力，是企业级部署的关键基础设施。
- **[#7492](https://github.com/zeroclaw-labs/zeroclaw/pull/7492)** — **支持 OpenAI 兼容提供商的缓存 input token 定价**：解析 `prompt_tokens_details.cached_tokens` 和 `prompt_cache_hit_tokens`，使成本追踪更精确。
- **[#7490](https://github.com/zeroclaw-labs/zeroclaw/pull/7490) / [#7489](https://github.com/zeroclaw-labs/zeroclaw/pull/7489)** — **Discord 斜杠命令支持**：通过现有 Gateway WebSocket 提供 Discord 应用命令，无需新的 HTTPS 入口，技能可通过 manifest 中的 `slash` tag 自动注册为 Discord 命令。
- **[#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351)** — **MCP 断线自动重连**：修复远程 MCP 服务器重启后客户端永久卡死的问题。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 👍 | 核心议题 |
|---|---|---|---|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 13 | 3 | **提供"完整"Docker 镜像**（含 WhatsApp 等全特性编译），降低新用户入门门槛。已关闭，说明已有结论或替代方案。 |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 11 | 0 | **RFC: 工作流通道、看板自动化和标签清理** — 治理层 RFC，旨在简化 PR 路由和 issue 管理流程，减轻维护者手动管理负担。 |
| [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) | 7 | 0 | **为自定义推理提供商添加本地 CA 证书支持** — 企业用户连接内部 PKI 签名的推理端点的需求。已关闭。 |
| [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) | 7 | 0 | **delegate agentic 模式拒绝空的 risk_profile.allowed_tools** — 高优先级 bug，阻塞多 agent reviewer/research 工作流。 |
| [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) | 5 | 0 | **RFC: 统一三个 agent turn 引擎** — 架构级 RFC，已通过单一整合 PR（#7540）执行完成。 |

### 📌 热点分析

- **Docker 体验是持续痛点**：#3642 获得最多评论和点赞，反映大量用户希望开箱即用的完整 Docker 镜像，而非手动编译。
- **治理流程优化需求迫切**：#6808 的 RFC 直接针对维护者工作流，说明随着项目规模增长，手动管理 issue/PR 标签和路由已成为瓶颈。
- **多 agent 架构正在成熟**：#7470 和 #7415 都围绕多 agent 工作流，表明用户已在实际场景中使用 delegate 模式，但稳定性和易用性仍需打磨。

---

## 5. Bug 与稳定性

### 🔴 高风险 / P1 Bug

| Issue | 严重程度 | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) | S1 - 工作流阻塞 | 🔄 进行中 | delegate agentic 模式拒绝空的 `risk_profile.allowed_tools`，同 profile 门控阻止更严格的目标 | 无 |
| [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) | S0 - 数据丢失/安全风险 | ✅ 已关闭 | email channel 配置逻辑缺陷 | 已修复（已关闭） |
| [#5662](https://github.com/zeroclaw-labs/zeroclaw/issues/5662) | S1 - 工作流阻塞 | 🔄 进行中 | QQ channel 语音消息被重复处理 20+ 次，brain.db 产生大量重复条目 | 无 |

### 🟡 中风险 / P2 Bug

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | 🔄 进行中 | `show_tool_calls` 在 channel schema v3 中缺失 | 无 |
| [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) | ✅ 已关闭 | 单个用户请求触发 LLM 重复调用两次 | 已修复 |
| [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) | ✅ 已关闭 | WhatsApp channel 不显示 QR 码 | 已修复 |

### 🟢 今日合并的安全修复

- **[#7566](https://github.com/zeroclaw-labs/zeroclaw/pull/7566)** — 文件传输 header 中 Bearer Token 明文存储问题已修复。

### ⚠️ 稳定性评估

项目当前存在 **2 个高风险未修复 bug**（#7470 和 #5662），均阻塞用户核心工作流。#7470 涉及多 agent delegate 模式，影响面较广；#5662 影响 QQ channel 用户的数据完整性。建议优先处理。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本的功能（已有 PR 推进中）

| 方向 | 相关 Issue/PR | 信号强度 |
|---|---|---|
| **Discord 深度集成** | [#7489](https://github.com/zeroclaw-labs/zeroclaw/pull/7489), [#7490](https://github.com/zeroclaw-labs/zeroclaw/pull/7490), [#7526](https://github.com/zeroclaw-labs/zeroclaw/pull/7526) | ⭐⭐⭐⭐⭐ 多条 PR 形成完整功能链 |
| **Operator Console UI 重设计** | [#7665](https://github.com/zeroclaw-labs/zeroclaw/pull/7665) | ⭐⭐⭐⭐⭐ 大型 PR，今日刚提交 |
| **配置系统架构重构** | [#7594](https://github.com/zeroclaw-labs/zeroclaw/pull/7594) | ⭐⭐⭐⭐ 内部架构改进 |
| **多数据库 session 后端** | [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) | ⭐⭐⭐⭐ 企业级需求 |
| **MCP 可靠性提升** | [#7351](https://github.com/zeroclaw-labs/zeroclaw/pull/7351) | ⭐⭐⭐⭐ 基础设施稳定性 |
| **成本追踪精确化** | [#7492](https://github.com/zeroclaw-labs/zeroclaw/pull/7492) | ⭐⭐⭐ 缓存 token 定价支持 |

### 社区呼声高但尚无 PR 的功能

| Issue | 描述 | 社区热度 |
|---|---|---|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 完整 Docker 镜像（全特性编译） | 👍3 / 13 评论 |
| [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) | `extra_args` 安全验证/白名单 | 安全相关 |
| [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) | Zerocode ACP Bridge | 追踪器 |

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Docker 入门门槛高**：多个特性（如 WhatsApp）默认禁用，新用户需要手动编译才能使用完整功能，非技术用户尤其受挫。（#3642）
2

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*