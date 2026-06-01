# OpenClaw 生态日报 2026-06-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-01 02:21 UTC

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

# OpenClaw 项目动态日报 · 2026-06-01

---

## 1. 今日速览

OpenClaw 今日处于高活跃维护期，过去 24 小时内 Issues 与 PR 各更新约 500 条，其中 Issues 新开/活跃 284 条、已关闭 216 条，PR 待合并 198 条、已合并/关闭 302 条，流速匹配良好，表明维护团队处理积压的效率较高。项目正在密集推进 **5 个连续 beta 版本**（v2026.5.30 → v2026.5.31-beta.4），核心聚焦 Agent 运行时恢复鲁棒性和多渠道消息投递稳定性。整体来看，项目处于稳定迭代阶段，但 high-priority Issues 积压仍多，尤其集中在 session-state 与 message-loss 领域。

---

## 2. 版本发布

今日项目连续发布 **5 个 beta 版本**，跨越 5.30 与 5.31 两个基础版本线：

| 版本 | 链接 |
|---|---|
| v2026.5.31-beta.4 | https://github.com/openclaw/openclaw/releases |
| v2026.5.31-beta.3 | https://github.com/openclaw/openclaw/releases |
| v2026.5.31-beta.2 | https://github.com/openclaw/openclaw/releases |
| v2026.5.31-beta.1 | https://github.com/openclaw/openclaw/releases |
| v2026.5.30-beta.1 | https://github.com/openclaw/openclaw/releases |

**核心更新内容（5 个版本共享同一批变更）：**

- **Agent 与 CLI 运行时恢复增强**：修复了因中断的工具调用、过期的 session binding、compaction handoff 和媒体重试导致的运行断裂，#88129、#88136、#88141、#88162、#88182 均已合入。
- **消息渠道投递稳定性提升**：Telegram、WhatsApp、iMessage、Slack 的通道投递更加稳定。

**迁移注意事项：**
- 以上均为 beta 版本，生产环境建议等待正式版。
- 连续 5 个 release 的变化范围完全相同，说明团队在反复确认同一批修复的稳定性，正式版可能即将发布。

---

## 3. 项目进展

今日有多个 PR 已关闭/合并，以下为代表性进展：

### 已合并/关闭的 PR

| PR | 说明 |
|---|---|
| 🔗 [#88727](https://github.com/openclaw/openclaw/pull/88727) | **fix(feishu)**: 保留超长飞书流式回复，避免 streaming-card 截断问题 |
| 🔗 [#88704](https://github.com/openclaw/openclaw/pull/88704) | **fix(memory)**: 修复日级片段 rehydration 时 Markdown list marker 丢失的 bug（#87854 回归），已合入 |
| 🔗 [#88804](https://github.com/openclaw/openclaw/pull/88804) | **fix(agents)**: 修复 OpenAI 兼容 provider 在 `finish_reason: stop` 时静默丢弃工具调用的问题（#88791），已合入 |
| 🔗 [#88801](https://github.com/openclaw/openclaw/pull/88801) | **fix(hooks)**: 在 dispatch 前暴露回复元数据（replyToId 等），修复 #88521，已合入 |

### 今日整体推进小结

- **飞书渠道**：流式回复截断问题和工具注入问题（#84095）均在推进中；
- **Memory 系统**：daily promotion rehydration 修复已落地，batched embeddings（#88238）仍在 review；
- **Agent 运行时**：工具调用 reasoning 泄露（#88769）、skip-agent 模型解析（#88837）等 fix 均已提交待合入；
- 项目整体在高吞吐状态下稳步消化积压。

---

## 4. 社区热点

以下为今日评论最活跃或最受关注的 Issues 与 PRs（按热度排列）：

### Issues

| # | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| 🐚 #32296 | Agent 回复旧消息而非当前消息（session context confusion） | 13 | 1 | https://github.com/openclaw/openclaw/issues/32296 |
| 🦐 #87307 | Matrix 线程回复在 2026.5.22 变为普通回复；/status 和 /model 无响应 | 11 | 1 | https://github.com/openclaw/openclaw/issues/87307 |
| 🦞 #13583 | 预响应强制钩子（硬门控）用于必须调用工具 X 才能回复的策略 | 11 | 2 | https://github.com/openclaw/openclaw/issues/13583 |
| 🐚 #78308 | MCP 工具调用的渠道审批门控（consent envelope） | 11 | 1 | https://github.com/openclaw/openclaw/issues/78308 |
| 🐚 #88788 | GHCR 2026.5.28 镜像 emits 过期的 Discord 进度评论配置 schema | 9 | 1 | https://github.com/openclaw/openclaw/issues/88788 |
| 🐚 #83959 | Codex app-server 启动重试在替换服务器就绪前耗尽 | 8 | 1 | https://github.com/openclaw/openclaw/issues/83959 |
| 🦞 #85251 | Codex app-server 发出了 turn/started 后沉默，embedded run 卡满 360s | 7 | 1 | https://github.com/openclaw/openclaw/issues/85251 |
| 🐚 #86047 | Codex app-server / 插件审批停顿导致 Nextcloud Talk 会话超时（#86047） | 7 | **3** | https://github.com/openclaw/openclaw/issues/86047 |
| 🦞 #78055 | Subagent 宣布投递陈旧输出，子 agent 会话可能继承无关历史 | 5 | 2 | https://github.com/openclaw/openclaw/issues/78055 |
| 🦞 #77666 | 飞书群消息在升级到 2026.5.3 后收到 replies=0 | 5 | **4** | https://github.com/openclaw/openclaw/issues/77666 |

### PRs（最活跃）

| # | 标题 | 链接 |
|---|---|---|
| 🐚 #88859 | fix(mattermost): 路由发送附件通过上传路径 | https://github.com/openclaw/openclaw/pull/88859 |
| 🐚 #88767 | fix(plugin-sdk): 隔离 provider catalog 投影失败 | https://github.com/openclaw/openclaw/pull/88767 |
| 🐚 #88820 | fix(diagnostics): 清除恢复声明 lane idle 后的 embedded-run 活动 | https://github.com/openclaw/openclaw/pull/88820 |
| 🧂 #88806 | fix(memory-lancedb): 拒绝信封元数据残留 | https://github.com/openclaw/openclaw/pull/88806 |

### 热点背后的核心诉求

1. **Session 状态一致性问题持续高发**：#32296（Agent 回复旧消息）、#86047（Codex 审批停顿）、#85251（Codex 沉默）均指向 Agent 运行时在会话连续性、工具调用恢复方面的脆弱性，这正是 5 个最新 beta 版本的修复方向；
2. **飞书渠道体验下降引发关注**：#77666（👍4，最多附加反应）和 #88727（已合并）表明飞书用户群在版本升级中遭遇破坏性变化，修复节奏在加快；
3. **安全审批机制成熟化**：#13583（硬门控）和 #78308（MCP consent envelope）均要求从提示词级别的"软规则"升级为"机械阻止"，这在金融/安全场景中尤为迫切；
4. **Memory 系统稳固性仍是焦点**：多个 Issues 和 PRs 围绕 memory 的 index、rehydration、reindex 展开（#44166、#88238、#88704），说明这是长期复杂性最高的子系统之一。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 top Bug、崩溃与回归问题：

### P1 级别（最高）

| # | Bug 描述 | 影响 | 已有 Fix PR? | 链接 |
|---|---|---|---|---|
| 🐚 #32296 | Agent 回复旧消息（session context 混淆） | session-state, message-loss | ❌ | https://github.com/openclaw/openclaw/issues/32296 |
| 🐚 #86047 | Codex app-server 审批停顿 → Nextcloud Talk 会话中断 | session-state, message-loss | ❌ | https://github.com/openclaw/openclaw/issues/86047 |
| 🦞 #85251 | Codex 发出 turn/started 后沉默，embedded run 卡满恢复窗口 | session-state, message-loss | ❌ | https://github.com/openclaw/openclaw/issues/85251 |
| 🐚 #83959 | Codex app-server 启动重试耗尽 | crash-loop | ❌ | https://github.com/openclaw/openclaw/issues/83959 |
| 🦞 #45494 | Cron 任务在 LLM API 持续故障时静默超时而非快速失败 | data-loss | ❌ | https://github.com/openclaw/openclaw/issues/45494 |
| 🐚 #88788 | GHCR 2026.5.28 镜像 Discord 进度评论 schema 过时 | message-loss | ❌ | https://github.com/openclaw/openclaw/issues/88788 |
| 🐚 #86996 | Active Memory + Codex 路径导致响应延迟、hook 超时、网关事件循环卡顿 | message-loss, crash-loop | ❌ | https://github.com/openclaw/openclaw/issues/86996 |
| 🦐 #87307 | Matrix 线程回复回归为普通回复；/status /model 无响应 | session-state | ❌ | https://github.com/openclaw/openclaw/issues/87307 |
| 🐚 #88596 | xAI 模型报告错误上下文窗口（200k 而非 1M） | auth-provider | ✅ 同日关闭 | https://github.com/openclaw/openclaw/issues/88596 |

### P2 级别

| # | Bug 描述 | 影响 | 已有 Fix PR? | 链接 |
|---|---|---|---|---|
| 🐚 #87616 | LLM 请求超时（LM Studio，约 3s） | auth-provider | ❌ | https://github.com/openclaw/openclaw/issues/87616 |
| 🦞 #85888 | Cron 任务在 MiniMax 晨间持续手动触发正常但定时失败 | auth-provider | ❌ | https://github.com/openclaw/openclaw/issues/85888 |
| 🦞 #51628 | Telegram 投递队列恢复可重放旧 sendMessage，产生重复 | message-loss | ❌ | https://github.com/openclaw/openclaw/issues/51628 |
| 🦐 #88020 | REPLAY_INVALID_RE 未覆盖 Anthropic thinking block 签名过期 → 硬失败非恢复 | session-state | ✅ 已关闭 | https://github.com/openclaw/openclaw/issues/88020 |
| 🐚 #78301 | 插件加载器对遗留/无效合约静默失败，浪费调试时间 | — | ❌ | https://github.com/openclaw/openclaw/issues/78301 |
| 🦞 #87801 | supportsAdaptiveThinking 遗漏 opus-4-8，reasoning 启用后返回 400 | auth-provider | ✅ 已关闭 | https://github.com/openclaw/openclaw/issues/87801 |

### 稳定性小结

今日 P1 Bug 数量偏高（9条），且多数无 in-progress Fix PR。核心瓶颈在：
- **Codex app-server 生命周期管理**（启动、响应、恢复三项均有 P1）；
- **Session 上下文跨 turn 一致性**（多项关联 #32296）；
- **多渠道投递的幂等性**（Telegram 重放、飞书 replies=0）。

建议维护者优先分配资源到 Codex app-server 和 session-state 子系统。

---

## 6. 功能请求与路线图信号

### 新功能请求汇总

| # | 功能描述 | 优先级 | 有 PR? | 链接 |
|---|---|---|---|---|
| 🦞 #13583 | 预响应硬门控钩子（必须调工具 X 才能回复） | P2 | ❌ | https://github.com/openclaw/openclaw/issues/13583 |
| 🐚 #78308 | MCP 工具调用的渠道审批门控（consent envelope） | P2 | ❌（有 linked PR 开放中） | https://github.com/openclaw/openclaw/issues/78308 |
| 🦞 #85015 | Skills 配置向导在全部需求满足时列出合格技能 | P3 | ✅ 已关闭 | https://github.com/openclaw/openclaw/issues/85015 |
| 🦞 #8441 | 技能条目添加 thinking 和 model 配置覆盖 | P2 | ✅ 已关闭（部分实现） | https://github.com/openclaw/openclaw/issues/8441 |
| 🦞 #79458 | 斜杠命令描述的 i18n 支持 | P3 | ❌ | https://github.com/openclaw/openclaw/issues/79458 |
| 🐚 #88830 | dreaming shadow trial 结果评分（仅报告层） | P3 | ✅ PR 开放中 | https://github.com/openclaw/openclaw/pull/88830 |
| 🐚 #78441 | subagent sessions_spawn 工具白名单前向传递 | P2 | ✅ PR 开放中 | https://github.com/openclaw/openclaw/pull/78441 |
| 🐚 #86029 | agent.wait 响应中暴露 cost/usage 遥测 | P2 | ✅ PR 开放中 | https://github.com/openclaw/openclaw/pull/86029 |
| 🐚 #87827 | feeds 生命周期工具（validate / build / hash） | P2 | ✅ PR 开放中 | https://github.com/openclaw/openclaw/pull/87827 |

### 路线图信号判断

- **高概率近期落地**：MCP consent envelope（#78308）、subagent 工具白名单（#78441）、feeds 生命周期工具（#87827）——均有开放 PR 且在等待 maintainer review；
- **中期方向**：预响应硬门控（#13583）获高社区支持（2👍, 11条评论），安全需求强烈，但尚无 PR 启动，可能需要架构决策先行；
- **正在落地**：dreaming shadow trial（#88830）是 #83719 的延续，本次仅添加报告层评分，未触及 MEMORY.md 写入，表明团队在谨慎分阶段推进。

---

## 7. 用户反馈摘要

从今日 Issues 与评论中提炼的真实用户痛点：

> **痛点 1：Session 上下文混乱导致 Agent "答非所问"**
> 用户 survivor998 在 #32296（评论数最高，13条）描述 Agent 回复上一条消息而非当前消息，自 2026-03-02 报告以来跨3个月仍未彻底解决。类似问题也出现在 #86047（Nextcloud Talk）。这说明大规模部署中 session 一致性是最敏感的体验问题。

> **痛点 2：飞书渠道升级后群功能失效**
> #77666（👍4）用户报告升级到 2026.5.3 后飞书群消息 replies=0，DM 正常。维护者已迅速提交 #88727 并合入（长回复截断修复），但群消息路由问题本身可能涉及更深层次原因。

> **痛点 3：Codex 运行时令人沮丧的不稳定性**
> 多名用户报告 Codex 在 app-server 启动、审批流程、长时间运行等方面的失败（#83959、#85251、#86047），普通用户难以定位根因。#67670 和 #80628 进一步指出中国大陆网络环境下 Codex OAuth 和更新流程存在特异性问题。

> **痛点 4：插件开发调试成本过高**
> #78301 用户指出插件加载器的静默失败导致数小时浪费，尽管有 linked PR 但该问题标记 stale，社区期待更明确的错误提示。

> **正面信号**：多个复杂问题（memory rehydration #88704、OpenAI tool call drop #88804、hooks 元数据 #88801）在当日发现当日修复并合入，展示出维护团队的高效响应能力。

---

## 8. 待处理积压

以下为长期未响应或标记 stale 但仍值得高度关注的关键 Issues/PRs：

| # | 类型 | 标题 | 创建日期 | 状态 | 积压天数 | 链接 |
|---|---|---|---|---|---|---|
| 🐚 #32296 | Issue | Agent 回复旧消息（session context confusion） | 2026-03-02 | OPEN, P1, needs-live-repro | **91天** | https://github.com/openclaw/openclaw/issues/32296 |
| 🦞 #13583 | Issue | 预响应硬门控钩子 | 2026-02-10 | OPEN, P2, needs-product-decision | **111天** | https://github.com/openclaw/openclaw/issues/13583 |
| 🐚 #78308 | Issue | MCP 工具调用渠道审批门控 | 2026-05-06 | OPEN, stale, P2 | 26天 | https://github.com/openclaw/openclaw/issues/78308 |
| 🐚 #45494 | Issue | Cron 超时 vs 快速失败回归 | 2026-03-13 | OPEN, P1, regression | **80天** | https://github.com/openclaw/openclaw/issues/45494 |
| 🐚 #78301 | Issue | 插件加载器静默失败 | 2026-05-06 | OPEN, stale | 26天 | https://github.com/openclaw/openclaw/issues/78301 |
| 🐚 #78055 | Issue | Subagent 投递陈旧输出 | 2026-05-05 | OPEN, stale, P1 | 27天 | https://github.com/openclaw/openclaw/issues/78055 |
| 🐚 #86996 | Issue | Active Memory + Codex 路径导致延迟/timeout/stall | 2026-05-26 | OPEN, P1 | 6天 | https://github.com/openclaw/openclaw/issues/86996 |
| 🧂 #72515 | PR | fix(mcp): 拒绝混合 command+url 传输配置 | 2026-04-27 | OPEN, needs-proof | 35天 | https://github.com/openclaw/openclaw/pull/72515 |
| 🐚 #88806 | PR | fix(memory-lancedb): 拒绝信封元数据残留 | 2026-05-31 | OPEN, needs-proof | 1天 | https://github.com/openclaw/openclaw/pull/88806 |

### 维护者行动建议

1. **🔴 紧急**：#32296 已积压 91 天，是今日评论数最多的 Issue，建议分配 owner 并设立复现基准；
2. **🟡 高优**：#45494（Cron 超时回归）和 #86996（Active Memory + Codex 延迟）均为 P1，影响核心工作流；
3. **🟡 决策阻塞**：#13583（硬门控）已 111 天，卡在 needs-product-decision，需要产品层面给出方向；
4. **🟢 快速合入**：#88806、#72515 等 PR 已开放数周，仅缺 proof/approval，可加速 review 流水线。

---

**日报生成时间**：2026-06-01
**数据来源**：GitHub API — Issues / PRs / Releases（过去 24 小时）

> ⚠️ **项目健康度总评**：活跃度高、维护响应快、5 个连续 beta 版本体现了良好的工程节奏。但 P1 积压深度较大（尤其 Codex 和 session-state 子系统），建议在下个稳定版发布前集中清理高优先级 Issues。Overall Health: 🟡 (Good, with risk items).

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比报告

**日期：2026-06-01 | 分析师：OWL**

---

## 1. 生态全景

当前个人 AI 助手开源生态处于**高活跃、多极化竞争**的密集迭代期。过去 24 小时内，抽样监测的 13 个项目合计处理 Issues 230+ 条、PRs 350+ 条，远高于一般开源项目集群的平均水平，说明社区对"本地化、可自主运行的 AI Agent"需求的爆发。技术焦点高度收敛于三大方向——**流式响应与 session-state 鲁棒性**（近半数项目的 P1 Bug 均在此列）、**多渠道路由与投递一致性**（Telegram/飞书/Slack/WhatsApp 覆盖几乎全部项目）、以及 MCP 工具生态与安全门控。生态内已形成清晰的分层架构：OpenClaw 作为事实上的参照基准，多个项目（NanoClaw、NanoBot、Hermes Agent、PicoClaw）在 OpenClaw 基础上差异化演进，另有 ZeroClaw 和 IronClaw 从底层架构切入做 Rust/深度重构路线。整体处于从"能用"到"好用"的过渡阶段，稳定性债务大量积累，正式大版本发布节点密集临近。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活/关) | PR (待合/已合) | 今日 Release | 健康度 |
|---|---|---|---|---|
| **OpenClaw** | 284 / 216 | 198 / 302 | ✅ 5个 beta（v2026.5.30→5.31-beta.4） | 🟡 活跃但 P1 积压深 |
| **NanoBot** | 6 更新 | 7 合/关 — 待审若干 | — | 🟢 稳健，WebUI/安全双推进 |
| **Hermes Agent** | 50 更新 | 13 合/关 | — | 🟡 高活跃，Docker/多供应商适配是主战场 |
| **PicoClaw** | 4 / 3 | 7 / 3 | ✅ nightly `v0.2.9-nightly.20260601` | 🟡 中高活跃，Codex 流式修复刚合入 nightly |
| **NanoClaw** | 3（全新） | 6 待 / 2 关 | — | 🔴 3个 P0/P1 稳定性危机悬空 |
| **NullClaw** | 2（全新） | — | — | 🟤 极低活跃，Telegram 通道两 bug |
| **IronClaw** | 2 / 1 | 18 待 / 7 合 | — | 🟡 Reborn 重构推进中，E2E 失败阻塞门禁 |
| **LobsterAI** | — | 1 存量 stale | — | 🟤 接近休眠，唯一 PR（幽灵会话修复）被标 stale |
| **TinyClaw** | — | — | — | ⚪ 无活动 |
| **Moltis** | — | 1 待 | — | 🟤 低活跃，Codex 工具调用加固 PR 刚提交 |
| **CoPaw** | 18 / 5 | 3 待 / 1 合 | — | 🟡 高反馈量，v1.1.9 回归问题集中爆发 |
| **ZeptoClaw** | — / 1 关 | — | — | ⚪ 近乎休眠 |
| **ZeroClaw** | 34 / 12 | 40 待 / 10 合 | — | 🟢 最高活跃度，安全与 RBAC 需求强烈 |

> **注：** Issues/Past 24h = 新+活/关。健康度：🟢稳健 🟡有风险项 🔴危急 🟤低活跃 ⚪休眠。

---

## 3. OpenClaw 在生态中的定位

**渠道覆盖最广的事实标准。** OpenClaw 支持的通讯渠道（Telegram、WhatsApp、iMessage、Slack、飞书、Discord、Matrix、Mattermost、QQ、Codex app-server 等）远超生态内任何其他项目，且今日 5 个连续 beta 版本鲁棒性修复的覆盖范围横跨全部主流渠道，证明其集成深度已通过大规模用户验证。

**技术路线差异：** 与 ZeroClaw（Rust 自底向上重建）和 IronClaw（Reborn 堆叠式架构重写）不同，OpenClaw 选择在现有稳定基础上持续迭代修补 session-state 和消息投递这两个最高频 Bug 源——这是典型的"进化而非革命"路线。NanoClaw 和 PicoClaw 则可视为 OpenClaw 在特定端的移植/轻量化衍生。

**社区规模断层领先。** 仅 Issues 评论量一项，OpenClaw 单个 Issue（#32296 有 13 条评论）的互动量就超过今日 LobsterAI、NullClaw、Moltis、ZeptoClaw、TinyClaw 所有项目之和。PR 待合并队列 198 条、日吞吐量 302 条，意味着维护团队规模和处理能力也远高于生态平均值。OpenClaw 的 Bug 积压本身也成为其他项目的"需求信号参考"（如 CoPaw 工具按需加载的量化研究、ZeroClaw 的 RBAC 诉求均受 OpenClaw 生态影响）。

---

## 4. 共同关注的技术方向

### 4.1 Session 状态一致性与 Agent 运行时鲁棒性（OpenClaw, Hermes Agent, ZeroClaw, CoPaw, NanoClaw）

- **OpenClaw** #32296（91天未解决）：Agent 回复旧消息而非当前消息，直接用户的最高评论数 Issue。
- **Hermes Agent** #33075（14条评论, 11👍）：OpenAI Codex/GPT-5.5 子智能体频繁 APIConnectionError/TTFB 超时。
- **ZeroClaw** #5962：Ollama Provider 调用失败后同一会话永久阻塞。
- **CoPaw** #4653（8条评论）：定时任务与用户消息共享 Session 导致任务被中断。
- **NanoClaw** #2665：Host 事件循环被同步操作冻结，/health 无法检测。

> **诉求：** Session 跨 turn 一致性、工具调用恢复路径、崩溃后自动重连——这是所有 Agent 框架从 Demo 到生产落地最大的工程障碍。

### 4.2 MCP 工具安全与门控机制（OpenClaw, NanoBot, ZeroClaw, CoPaw）

- **OpenClaw** #78308（MCP consent envelope）、#13583（预响应硬门控）。
- **NanoBot** #4123（MCP SSRF 防护）。
- **ZeroClaw** #6876（allowed_tools 不限制 MCP 工具）、#6914、#6915（工具运行时强制）。
- **CoPaw** #4824（ACP 协议连接 Claude Code 失败）。

> **诉求：** 从"软提示词规则"升级为"机械阻止"；区分 MCP 工具与内置工具的安全边界；ACP/MCP 协议兼容性验证。

### 4.3 多渠道路由与飞书生态适配（OpenClaw, CoPaw, NanoBot）

- **OpenClaw** #77666（👍4，飞书群消息 replies=0）+ #88727（流式截断修复，已合并）。
- **CoPaw** #4821（飞书群组会话共享模式 PR 待审）。
- **NanoBot** #4114/#4112（Heartbeat 错误发送到飞书，已合并 fix）。

> **诉求：** 飞书群消息路由隔离、流式卡片消息不截断、Heartbeat/通知门控与渠道解耦。

### 4.4 定时任务（Cron/Schedules）隔离与数据一致性（CoPaw, NullClaw, ZeroClaw, LobsterAI）

- **CoPaw** #4653、#4835（cron 与用户消息共享 Session 中断；单 Job 验证失败 → Workspace 崩溃）。
- **NullClaw** #941（Agent cron job 不生成子进程，Telegram 投递静默失败）。
- **ZeroClaw** #6647（Cron 输出未路由到 Telegram）、#6954（RFC：Cron 应经 Orchestrator 管道）。
- **LobsterAI** #1359/#1465（已删除定时任务幽灵会话反复出现，stale PR）。

> **诉求：** Cron 任务执行隔离、删除操作的幂等性保证、调度失败时的快速失败而非静默超时。

### 4.5 Docker/容器化部署体验（Hermes Agent, IronClaw, NanoClaw, CoPaw）

- **Hermes Agent** #35835（hermes update 在 Docker 内不生效）、#36144（session HOME 指向错误）、#33075 系列。
- **NanoClaw** #2657（容器 worker 消亡但 health check 不触发重启）。
- **CoPaw** #4831（Docker 镜像预装建议）、#4834/#4842（MCP 进程在容器内累积）。
- **IronClaw** Nightly E2E 持续失败。

> **诉求：** 容器内 Gateway 生命周期自愈、env 变量传递健壮性、资源泄漏（孤儿容器/MCP fd）自动回收。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | ZeroClaw | IronClaw | CoPaw |
|---|---|---|---|---|---|---|---|---|
| **目标用户** | 全场景 Agent 开发者 | WebUI 重度用户 + 企业场景 | Codex/Claude 深度用户 + 桌面端 | 嵌入式/轻量设备 | OneCLI 网关 | 安全敏感 + 多租户 + 硬件扩展 | 基础设施重构优先 | 中国本土化桌面体验 |
| **核心渠道** | 全渠道（10+） | 飞书 + WebSocket + WebUI | Codex + Telegram + Discord + 桌面 | Telegram + QQ + OpenAI Codex | OneCLI 网关 | Telegram + WhatsApp + Slack + 硬件 | Slack + 即将支持全渠道 | 飞书 + 企业微信 + Qwen |
| **技术栈** | 大规模 TypeScript/Node | TypeScript/Python 混合 | Python + Docker-first | Go | Rust + Docker-first | Rust（全栈自研） | Rust（Reborn 架构） | TypeScript + Tauri 桌面 |
| **功能侧重** | 渠道覆盖面 + Agent 运行时 | WebUI 渲染 + Heartbeat + 语音 ASR | 多供应商模型适配 + Cron/Schedules | 轻量嵌入式 + 渠道精简 | 网关容器编排 | RBAC + Computer-Use + ESP32 | Slack Adapter + 模块化重构 | 对话管理 + Windows UX |
| **部署形态** | CLI/Gateway 服务 | CLI + WebUI | Docker-first Desktop + CLI | CLI 轻量二进制 | Docker Gateway | CLI + Docker | CLI + Docker | Tauri 桌面 App |
| **成熟度** | 高（大量生产验证） | 中（稳定迭代） | 中（快速跟进适配） | 低（nightly 阶段） | 低（频繁 P0） | 中高（beta-2 集成中） | 中（重构中期） | 中高（v1.1.9 大规模反馈） |

---

## 6. 社区热度与成熟度

**第一梯队 — 高吞吐快速迭代期：OpenClaw、ZeroClaw**
两者均有 50+ Issues/日、40+ PR/日，维护团队在高压力下消化积压。区别在于：OpenClaw 以 bugfix 稳定为主，ZeroClaw 以 feature（RBAC/Computer-Use/硬件）扩张为主。两者的 Issue 积压深度（60+ 天 P1 未解决）也相当，说明规模扩大后的 review 瓶颈是共性挑战。

**第二梯队 — 稳定演进 + 质量巩固期：Hermes Agent、CoPaw、IronClaw、NanoBot、PicoClaw**
Hermes Agent 受 Docker 部署和 OpenAI Codex 适配的不稳定性困扰；CoPaw 处于 v1.1.9 反馈清理阶段，PR review 偏慢（最长 17 天）；IronClaw 全力推动 Reborn 架构重构，但 E2E 阻塞问题全局；NanoBot 和 PicoClaw 均刚完成关键 fix（安全/流式）合并，节奏健康，释放周期即将来临。

**第三梯队 — 低活跃/维护不足：NanoClaw、NullClaw、LobsterAI、Moltis、ZeptoClaw、TinyClaw**
NanoClaw 虽有活跃贡献但 3 个 P0/P1 全部悬空，NullClaw 今日两 bug 均由同一用户提交，LobsterAI 和 ZeptoClaw 实质上处于半休眠状态。这些项目面临维护者资源不足的风险。

---

## 7. 值得关注的趋势信号

### 7.1 RBAC/多租户安全从"需求"变为"门槛"
ZeroClaw #5982（per-sender RBAC）、OpenClaw #13583（机械硬门控）、CoPaw #4845（企业微信记忆隔离漏洞）集中出现，说明**企业安全合规正在成为 Agent 框架的硬性门槛而不是可选项**。对开发者的参考：如果你的目标客户是金融/医疗/企业场景，安全框架（工具调用门控、多租户 Session 隔离、Prompt Injection 防御）需要在一开始就纳入架构设计，而不是事后修补。

### 7.2 Cron/定时任务成为 Agent 的核心生产力场景
5 个不同项目（CoPaw、NullClaw、ZeroClaw、OpenClaw、LobsterAI）均在今日暴露 cron 相关 Bug，但用户的诉求高度一致：**定时任务必须与交互式会话隔离、删除必须幂等、失败必须显式反馈**。简单地说，cron 已不是 Agent 的"附加功能"，而是工作流自动化的核心支柱，框架级别的隔离支持将成为差异化竞争力。

### 7.3 MCP/ACP 工具生态标准化需求迫切
OpenClaw #78308、NanoBot #4123、ZeroClaw #6876/#6914、CoPaw #4824——4 个项目同时面对 MCP 安全边界和 ACP 协议兼容性问题。这意味着 **MCP 生态正在从"原型可用"走向"生产部署"**，以下能力将成为框架标配：协议版本协商、MCP 工具的细粒度权限控制、SSRF 防护、stdio/HTTP 传输的统一抽象。

### 7.4 Docker-first 部署成为社区默认假设
Hermes Agent、NanoClaw、CoPaw、ZeroClaw、IronClaw 均将 Docker 作为一等部署场景，且 Bug 集中在容器生命周期管理（自愈、env 传递、资源回收、多架构更新）。**未来 Agent 框架的 CI/CD 和发布流程必须原生支持多架构 Docker 镜像**，而非事后补充。

### 7.5 飞书生态因中国企业级市场需求持续升温
OpenClaw、CoPaw、NanoBot 不约而同地推进飞书群消息、流式回复、群组 Session 共享等能力。飞书不再是"边缘渠道"，而是**中国 Agent 生态的头等公民渠道**，群消息隔离、流式卡片截断修复、Group 内多用户 Session 管理是需要持续投入的细分方向。

### 7.6 跨平台桌面体验是下一个体验战场
CoPaw 的 Windows cmd 闪烁/进程泄漏/幽灵技能系列 Bug 表明，**Agent 框架桌面化后，平台特异性问题的复杂性远超预期**。Tauri/Electron 等桌面框架与 Agent 运行时、MCP Server 进程的资源管理边界尚未形成最佳实践。率先解决 Windows/macOS 平台稳定性的项目将获得显著的个人用户市场份额。

---

*本报告基于 2026-06-13 个项目的 GitHub 公开数据生成。数据截至 2026-06-01 24:00 UTC。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-01

---

## 1. 今日速览

NanoBot 今日活跃度处于**较高水平**：24 小时内产出 18 个 PR 更新和 6 个 Issue 更新，社区贡献节奏密集。核心维护者 `Re-bin` 和 `hamb1y` 持续推动安全修复和架构改进落地。值得关注的是，今天未见新版本发布，多条关键 PR（WebUI 稳定性、WebSocket 安全、Heartbeat 行为修正）已在近期合并，预计将在下一个版本中集中交付。Azure AAD 认证支持、本地语音转录等新功能提案显示企业用户和多媒体场景的需求正在增长。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日 **7 个 PR 已合并/关闭**，重点进展如下：

| # | PR | 内容摘要 |
|---|-----|---------|
| ✅ [#4114](https://github.com/HKUDS/nanobot/pull/4114) | fix(heartbeat) | 修复空 `HEARTBEAT.md` 向飞书误发 "All clear." 的问题；Heartbeat 现默认 fail-closed |
| ✅ [#4112](https://github.com/HKUDS/nanobot/pull/4112) | fix(heartbeat) | 将通知评估器设为可配置，抑制心跳内部检查期间的消息工具投递，防止模型输出绕过通知门控 |
| ✅ [#4103](https://github.com/HKUDS/nanobot/pull/4103) | fix(security) | 修复 WebSocket token 签发路由未授权即可铸造令牌的漏洞（Issue #4077） |
| ✅ [#4117](https://github.com/HKUDS/nanobot/pull/4117) | fix(webui) | 修复无语言标识符的代码块导致 WebUI 白屏崩溃（Issue #4116） |
| ✅ [#4121](https://github.com/HKUDS/nanobot/pull/4117) | feat(webui) | 优化聊天流式渲染：助手 delta 正常可见、推理 delta 形成有序 Thought 块、文件编辑动作正确处理 |
| ✅ [#4127](https://github.com/HKUDS/nanobot/pull/4127) | fix(agent) | 扩展 `/goal` 任务的持续目标迭代预算，添加内部延续路径 |

**整体评估**：项目在稳定性、安全性和 WebUI 体验三个维度同步推进。Heartbeat 模块连续收到两个修复，说明该组件已引起维护者重点关注。WebSocket 安全漏洞的及时修补体现了项目对安全问题的快速响应能力。

---

## 4. 社区热点

### 🔥 活跃 Issue 讨论

- **[#4128 [bug]](https://github.com/HKUDS/nanobot/issues/4128)** — `retain_recent_legal_suffix` 在 else 分支下导致用户消息被重复归档
  - 作者 `huji820` 提交了精确到代码行的 Bug 报告，包括根因分析、具体复现步骤和影响面说明。若 else 分支触发（最近 N 条全是助手/工具消息），用户消息会同时出现在 archive 和 kept 中，可能导致 LLM 上下文不一致。**已有配套 PR #4129 待审查**。

- **[#4125 [enhancement]](https://github.com/HKUDS/nanobot/issues/4125)** — Azure AAD Based Auth for Azure OpenAI Provider
  - Azure 企业用户反馈订阅策略禁止 API Key 认证，需支持 Azure Identity 认证。已有 PR #4126 跟进，社区诉求明确。

- **[#4120]](https://github.com/HKUDS/nanobot/issues/4120)** — Vest × HKUDS: tool recommendations or monetization angle
  - 第三方 MCP 工具市场探索合作可能性，社区讨论 1 条评论后关闭，暂未进入 roadmap。

### 🔥 活跃 PR 讨论

- **[#4123 [OPEN]](https://github.com/HKUDS/nanobot/pull/4123)** — MCP SSRF 防护：在探测前拦截不安全的 HTTP URL，对回环地址等做防御性拒绝。安全加固类 PR，涉及 SSRF 攻击面，建议优先审查。
  
- **[#4124 [OPEN]](https://github.com/HKUDS/nanobot/pull/4124)** — 修复 mimo/glm 模型以 XML 格式透传 tool call 到聊天渠道的问题，避免用户看到原始 XML。影响 Telegram/WebSocket 等多渠道输出，用户体验相关。

---

## 5. Bug 与稳定性

### 高危 🔴

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#4077](https://github.com/HKUDS/nanobot/issues/4077) | WebSocket token 签发路由无需认证即可铸造短期令牌 | ✅ 已合并 [#4103](https://github.com/HKUDS/nanobot/pull/4103) |
| [#4116](https://github.com/HKUDS/nanobot/issues/4116) | WebUI 加载含无语言标识符代码块的会话时白屏崩溃 | ✅ 已合并 [#4117](https://github.com/HKUDS/nanobot/pull/4117) |

### 中危 🟡

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#4128](https://github.com/HKUDS/nanobot/issues/4128) | `retain_recent_legal_suffix` 导致用户消息重复归档，可能引发 LLM 上下文不一致 | ⏳ [#4129](https://github.com/HKUDS/nanobot/pull/4129) 待审查 |
| [#4111](https://github.com/HKUDS/nanobot/issues/4111) | Heartbeat 无任务时错误发送 "All clear." 到飞书 | ✅ 已合并 [#4114](https://github.com/HKUDS/nanobot/pull/4114) |

### 低危 🟢

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#4073](https://github.com/HKUDS/nanobot/issues/4073) | `write_file`/`edit_file` 可能将 `extra_allowed_dirs` 视为可写根目录 | ⏳ [#4099](https://github.com/HKUDS/nanobot/pull/4099) 待审查 |
| [#4075](https://github.com/HKUDS/nanobot/issues/4075) | Dream 可能覆盖用户自建 skill | ⏳ [#4101](https://github.com/HKUDS/nanobot/pull/4101) 待审查 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 Issue | 关联 PR | 判断 |
|------|-----------|---------|------|
| **Azure AAD 认证支持** | [#4125](https://github.com/HKUDS/nanobot/issues/4125) | [#4126](https://github.com/HKUDS/nanobot/pull/4126) 已有实现 | ✅ 高概率纳入下一版本，企业级功能需求明确 |
| **WebUI 本地语音录制 + ASR 转录** | — | [#4122](https://github.com/HKUDS/nanobot/pull/4122) | ⏸️ 功能新颖，但 `invalid` 标签表明可能需要更多评审，方向感兴趣但时机待定 |
| **Gateway-WebUI-AgentLoop 解耦** | — | [#4115](https://github.com/HKUDS/nanobot/pull/4115) | ✅ 架构重构，为热重载能力打基础，属于长期基础设施投入 |
| **Heartbeat 推理与通知分离** | — | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | ⏳ 功能已就绪但等待审查超过 3 个月，积压待处理 |
| **Dream 模块轻量化重构** | — | [#3990](https://github.com/HKUDS/nanobot/pull/3990) | ⏳ 架构重构中，减少约 315 行代码，等待审查 |
| **文件系统符号链接逃逸防护** | — | [#4119](https://github.com/HKUDS/nanobot/pull/4119) | 🔒 安全类，应优先处理 |

---

## 7. 用户反馈摘要

- **企业部署痛点突出**：Azure 用户明确表示订阅策略禁止 API Key 认证，需求从"锦上添花"变为"必须支持"（Issue #4125）。这表明 NanoBot 的企业级采用率在提升，基础设施合规要求成为新门槛。
  
- **稳定性满意度待提升**：24 小时内接连出现 WebUI 白屏崩溃（#4116）、消息重复归档（#4128）、误发通知（#4111），说明**会话管理和上下文压缩逻辑**是当前主要的质量短板，用户在使用较长会话时容易暴露问题。

- **安全建设获认可**：WebSocket token 签发漏洞（#4077）和 MCP SSRF 防护（#4123）的快速响应显示社区对安全问题的敏感度较高，贡献者主动参与安全加固。

- **多渠道适配复杂**：XML tool call 泄露 bug（#4124）暴露了不同模型厂商（mimo、glm）与不同输出渠道（Telegram、WebSocket）的兼容性问题持续存在。

---

## 8. 待处理积压

以下 PR/Issue 长期未响应，建议维护者优先关注：

| 条目 | 等待时长 | 说明 |
|------|----------|------|
| [#1443 PR](https://github.com/HKUDS/nanobot/pull/1443) — Heartbeat 推理与通知分离 | **自 3 月 2 日以来超 3 个月** | 功能完整的架构改进，含新增 `sendReasoning` 配置项。长期积压可能影响 Heartbeat 相关 Issue 的长期解决。 |
| [#3990 PR](https://github.com/HKUDS/nanobot/pull/3990) — Dream 模块轻量化重构 | 自 5 月 24 日，已超 1 周 | 大幅简化 Dream 类，但可能涉及行为变更，需仔细评审。 |
| [#4099 PR](https://github.com/HKUDS/nanobot/pull/4099) — 文件系统只读隔离 | 自 5 月 29 日 | 安全边界修复，涉及写权限控制，建议合并到下一稳定版本。 |
| [#4101 PR](https://github.com/HKUDS/nanobot/pull/4101) — Dream skill 归属标记 | 自 5 月 29 日 | 防止 Dream 覆盖用户 skill，用户体验保护逻辑，低风险可快速合入。 |
| [#4123 PR](https://github.com/HKUDS/nanobot/pull/4123) — MCP SSRF 防护 | 自 5 月 31 日 | 安全防御性代码，含回归测试，建议优先审查。 |

---

**日报生成时间**: 2026-06-01 · **数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-06-01

---

## 1. 今日速览

Hermes Agent 今日保持高活跃度（Issues 更新 50 条、PR 更新 50 条），社区反馈密集但无新版本发布。核心矛盾集中在**多个模型提供商的适配稳定性**（OpenAI Codex/GPT-5.5、Anthropic Opus 4.8、Bedrock）以及 **Docker 部署与 Gateway 生命周期管理**的主线上。今日有 13 个 PR 完成合并/关闭，显示维护者推进节奏加快。整体项目健康度良好，但积压的高优先级 Issue 数量值得持续关注。

---

## 2. 版本发布

**无新版本发布。** 当前仍为 v0.14.0。

---

## 3. 项目进展

今日合并/关闭了 13 个 PR，重点推进方向：

| PR | 内容 | 影响 |
|---|---|---|
| [#35583](https://github.com/NousResearch/hermes-agent/pull/35583) | fix(tools): forwarded secret 为空时回退到 `.hermes/.env` | 解决 Docker 环境密钥瞬态为空导致的身份认证失败 |
| [#36008](https://github.com/NousResearch/hermes-agent/pull/36008) | fix(docker): 忽略空字符串转发 env 值 | 上层的完善，加强 Docker 后端环境变量处理的健壮性 |
| [#36185](https://github.com/NousResearch/hermes-agent/pull/36185) | fix(desktop): 对齐安装器前置检查与引导流程 | Windows 桌面端首次运行体验改善 |
| [#11429](https://github.com/NousResearch/hermes-agent/pull/11429) | feat(zai): 新增智谱 China Coding Plan 端点及修复端点优先级 | 中国用户使用 ZAI 的 Coding Plan 计费套餐成为可能 |
| [#19655](https://github.com/NousResearch/hermes-agent/pull/19655) | feat(terminal): 长命令自适应空闲超时 | `git clone` 等长输出命令不再被固定超时杀掉 |

整体向前推进：Docker 部署稳定性 + 桌面安装体验 + 地域性 Provider 适配均有实质落地。

---

## 4. 社区热点

以下 Issue 的讨论热度或👍反应量居前：

### 🔥 [#33075](https://github.com/NousResearch/hermes-agent/issues/33075) — openai-codex/gpt-5.5 在 Hermes v0.14.0 极不稳定
- **14 条评论，11 👍**
- 用户在 v0.14.0 上复现了子智能体频繁触发 `APIConnectionError` / TTFB 超时，而同一台机器同一网络下官方 Codex CLI 正常。与更早的 [#13834](https://github.com/NousResearch/hermes-agent/issues/13834)（8 条评论）形成系列问题，说明社区对 OpenAI-Codex 供应商路径的不稳定积怨较深。
- **背后诉求**：希望 Hermes 团队能提供和官方 CLI 等同的网络兼容性（可能是 retry/keep-alive/认证 token 刷新机制差异）。

### 👍 [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) — Claude 订阅用户希望使用 subscription-based 后端（而非 Developer Platform API key）
- **4 条评论，13 👍（全场最高）**
- 用户已购买 Claude 订阅，不希望再额外支付 API 费用，期望类似 Codex-style 的 OAuth 订阅鉴权路径。
- **背后诉求**：定价公平 + 订阅账户打通，避免"付两次钱"。

### 💬 [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) — 跨设备云同步所有 Hermes 配置
- **4 条评论，9 👍**
- 多设备用户（PC + 笔记本）希望配置文件、技能、会话、记忆能在云端同步。
- **背后诉求**：团队协作/多端工作流场景，对标商业产品的"云记忆"能力。

### 💬 [#34554](https://github.com/NousResearch/hermes-agent/issues/34554) [已关闭] — claude-opus-4-8 HTTP 400 thinking schema 不兼容
- **3 条评论，已关闭**
- Anthropic 更新了 thinking schema，Hermes 发出的参数 `"thinking.type.enabled"` 不被新模型接受，需改为 `"thinking.type.adaptive"`。
- 已关闭说明已有修复合入，是今日关闭的一个高优先级适配问题。

---

## 5. Bug 与稳定性

按严重程度排列今日仍开放的关键 Bug：

| 优先级 | Issue | 严重性 | 已有 fix PR？ |
|---|---|---|---|
| **P1** | [#25281](https://github.com/NousResearch/hermes-agent/issues/25281) — 仪表盘 Update 按钮删除所有 cron jobs | 数据丢失，已多次复现 | ❌ |
| **P1** | [#36151](https://github.com/NousResearch/hermes-agent/issues/36151) — Bedrock Opus 4.8/4.7 400 错误，sampling参数未屏蔽 | Bedrock 路径功能受损 | ❌ |
| **P1** | [#30411](https://github.com/NousResearch/hermes-agent/issues/30411) — Telegram DM auto-topic-renaming / 路由被 `_recover_telegram_topic_thread_id()` 破坏 | Telegram 功能回归 | ❌ |
| **P2** | [#33961](https://github.com/NousResearch/hermes-agent/issues/33961) — `/new`, `/clear`, `/reset` 冻结终端 | CLI 核心功能不可用 | ❌ |
| **P2** | [#36149](https://github.com/NousResearch/hermes-agent/issues/36149) — Cron/Schedules UI 加载失败（前端 `/api/cron/jobs` vs 后端 `/api/jobs` 不匹配） | Dashboard 功能异常 | ❌ |
| **P2** | [#36108](https://github.com/NousResearch/hermes-agent/issues/36108) — 非 default profile 的 Discord gateway 不启动 | 多 profile 部署受阻 | ❌ |
| **P2** | [#35835](https://github.com/NousResearch/hermes-agent/issues/35835) — `hermes update` 在 Docker 容器内不生效 | 容器内自更新场景 | ❌ |
| **P1** | [#36144](https://github.com/NousResearch/hermes-agent/issues/36144) — Agent session HOME 指向错误路径，tools 查找错误 `~` | 工具路径解析异常 | ❌ |

**已关闭的今日 Bug（被视为修复完成）：**
- [#33075](https://github.com/NousResearch/hermes-agent/issues/33075) openai-codex/gpt-5.5 不稳定 — 关闭，但根因 Issue [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) 仍开放
- [#32423](https://github.com/NousResearch/hermes-agent/issues/32423) context compaction 中断恢复后窗口变为 256K — 已关闭
- [#31158](https://github.com/NousResearch/hermes-agent/issues/31158) kanban dispatcher WAL/SHM 竞态 — 已关闭
- [#34554](https://github.com/NousResearch/hermes-agent/issues/34554) Opus 4.8 schema 适配 — 已关闭（修复已合入）
- [#34339](https://github.com/NousResearch/hermes-agent/issues/34339) Docker s6-overlay gateway 不自动启动 — 已关闭

---

## 6. 功能请求与路线图信号

| 方向 | Issue | 信号强度 | 配套 PR？ |
|---|---|---|---|
| 跨设备云同步 | [#20510](https://github.com/NousResearch/hermes-agent/issues/20510)（9👍） | ⭐⭐⭐ 社区需求强 | ❌ |
| Claude subscription OAuth | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267)（13👍最高） | ⭐⭐⭐ 付费用户受阻 | ❌ |
| 对话回退/重做编辑 | [#21910](https://github.com/NousResearch/hermes-agent/issues/21910)（5👍） | ⭐⭐ 对标 Claude Code | ❌ |
| 禁用辅助任务（title_generation 等） | [#27877](https://github.com/NousResearch/hermes-agent/issues/27877) | ⭐⭐ 防 502 干扰 | ❌ |
| 原生移动端 + 语音通话 | [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | ⭐ 远期愿景 | ❌ |
| web_search 添加 categories 参数 | [#36113](https://github.com/NousResearch/hermes-agent/issues/36113) | ⭐ 能力增强 | ❌ |
| Discord clarify prompts embeds 隐藏但按钮可见 | [#36186](https://github.com/NousResearch/hermes-agent/pull/36186) | — | ✅ 有 PR |
| Hawser webhook notifier 插件 | [#36182](https://github.com/NousResearch/hermes-agent/pull/36182) | — | ✅ 有 PR |
| TUI 后台 review 延迟 | [#36187](https://github.com/NousResearch/hermes-agent/pull/36187) | — | ✅ 有 PR |

**判断**：跨设备云同步和 Claude subscription OAuth 是两个👍最高的功能需求，但尚无 PR 跟进，路线图信号强但落地不确定。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼出的真实痛点与使用场景：

- **多供应商切换是常态**：用户经常在 OpenAI Codex、Anthropic Claude、Google Gemini、MiniMax 之间切换，任何供应商侧都会遇到参数 schema 变更或限流，用户期望 Hermes 能快速适配。
- **Docker 部署是第一选择场景**：Windows/macOS 用户越来越多通过 Docker 部署生产级 Gateway，但 Gateway 启动顺序、env 变量传递、update 自更新在容器内均有问题。
- **Cron/Schedules 是生产力核心场景**：仪表盘更新操作丢失 cron 配置被用户称为"多发性事故"；cron ticker 文件锁竞争也是稳定性隐患。
- **多 profile 部署需求增长**：Discord/Telegram 多 profile 场景下 gateway 的发现与注册出现断裂。
- **用户期望 CLI 体验对标 Claude Code**：rewind/edit-and-resubmit、terminal 冻结问题都指向对标成熟的 coding agent 产品体验。

---

## 8. 待处理积压（提醒维护者关注）

以下重要 Issue 长期未关闭或近来虽有更新但尚无 fix PR：

| Issue | 创建日期 | 优先级 | 状态 |
|---|---|---|---|
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) — openai-codex 失败但官方 CLI 正常 | 2026-04-22（>1个月） | P2 | 开放，系列 bug 根因 |
| [#25281](https://github.com/NousResearch/hermes-agent/issues/25281) — Update 按钮删除 cron jobs | 2026-05-13（>2周） | **P1** | 开放，数据丢失 |
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) — Claude subscription OAuth | 2026-05-13（>2周） | P3 | 开放，高需求 |
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) — 跨设备配置云同步 | 2026-05-06（>3周） | P3 | 开放，9👍 |
| [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) — rewind/edit-and-resubmit | 2026-05-08（>3周） | P3 | 开放，对标需求 |
| [#31263](https://github.com/NousResearch/hermes-agent/issues/31263) — Holographic memory context injection 从不触发 | 2026-05-24 | P3 | 开放，记忆功能失效 |
| [#13142](https://github.com/NousResearch/hermes-agent/issues/13142) — Docker backend execute_code 静默返回 0 | 2026-04-20（>1个月） | 未标定 | 开放 |
| [#36151](https://github.com/NousResearch/hermes-agent/issues/36151) — Bedrock Opus 4.8 400 错误 | 2026-06-01（今日） | **P1** | 开放，急需 |

**特别提醒**：Issue [#25281](https://github.com/NousResearch/hermes-agent/issues/25281)（Update 清 cron）属于 P1 数据丢失级别，已开放 2 周尚无 fix，建议优先排期。

---

*本报告由 OWL 基于 2026-06-01 Hermes Agent GitHub 数据生成。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-01

---

## 1. 今日速览

PicoClaw 今日活跃度处于**中高水平**：24 小时内产生 7 条 Issue 更新（4 开/3 闭）和 10 条 PR 更新（7 待合并/3 闭），发布 nightly 自动构建版 `v0.2.9-nightly.20260601`。社区围绕 **Codex OAuth 流式响应丢失** 问题出现了两份独立 issue 和一份 fix PR，反映该 bug 影响面较广。另有多个基础设施类 PR（消息总线背压、provider SDK 升级、cron 工具扩展）等待审查合并，项目整体在稳定性修复与新功能拓展两端同步推进。

---

## 2. 版本发布

### 🌙 Nightly Build — `v0.2.9-nightly.20260601.ba806592`

- **版本号**: `v0.2.9-nightly.20260601.ba806592`（基于 commit `ba806592`）
- **类型**: 自动化 nightly 构建，**标记为不稳定版本，需谨慎使用**
- **变更范围**: `v0.2.9` → `main` 之间所有已合入提交
- **已知合入内容**（根据近期 PR）:
  - 🐛 **Codex 流式文本 delta 修复**（#2967）— 解决 OpenAI/Codex OAuth 空响应问题
  - 📁 **debug 输出文件已加入 .gitignore**（#2980）
- **⚠️ 迁移注意**: 无明确破坏性变更说明；nightly 构建未经完整回归测试，不建议直接用于生产环境

---

## 3. 项目进展

### 今日已关闭/合并的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#2967](https://github.com/sipeed/picoclaw/pull/2967) | 🐛 Bug Fix | **修复 Codex OAuth 空响应**：当 ChatGPT 后端仅通过 `response.output_text.delta` 事件流式返回文本（最终 `response.output` 为 `null`）时，Codex provider 现在会累积这些 delta 事件，而非返回空字符串。直接解决了 Issue #2674 和 #2953 两个高关注度 bug |
| [#2980](https://github.com/sipeed/picoclaw/pull/2980) | 📁 杂项 | 将 debug 输出文件加入 .gitignore，减少仓库污染 |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | ✨ Feature | **message 工具支持富媒体投递**：扩展 `message` 工具，支持单次语义化投递中包含文本 + 媒体附件，并实现 Telegram 频道的富媒体投递。对应 Issue #2855 |

### 待审查的功能性 PR（活跃推进中）

| PR | 方向 | 进展评估 |
|---|---|---|
| [#2979](https://github.com/sipeed/picoclaw/pull/2979) | Anthropic provider 兼容性升级至 SDK v1.46.0 | 当日新提，技术债务清理，优先级中高 |
| [#2977](https://github.com/sipeed/picoclaw/pull/2977) | Cron 工具新增 get/update 动作 | 当日新提，让 agent 能先查看再更新 cron job，避免 remove-add 重调度数据丢失 |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | Telegram 群聊中 reply-to-bot 等同 @mention | 当日新提，改善渠道交互体验 |
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) | 缺失二进制依赖时自动跳过对应 skill | stale 状态，但解决真实痛点 |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | 消息总线背压处理与健康检查可见性 | stale 状态，基础设施改进 |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Agent loop reload 稳定性 + panic 清理 | stale 状态，稳定性改进 |

> **评估**: 今日有 3 个 PR 被成功关闭/合并，解决了流式响应这一高优 bug。但仍有 7 个 PR 处于 open/stale 状态等待核心维护者 review，其中 2904/2906 作为稳定性基础设施修复积压时间较长。

---

## 4. 社区热点

### 🔥 Issue #2674 — Codex OAuth 空响应

- **链接**: <https://github.com/sipeed/picoclaw/issues/2674>
- **互动**: 7 条评论 👍4，创建后被多人👍，说明受影响用户较多
- **核心诉求**: 用户使用 OpenAI Codex OAuth provider 对接 ChatGPT 后端时，模型始终返回空响应。这不是认证/限额/账号问题，而是**流式 delta 事件未被正确处理**。
- **状态**: 已通过 PR #2967 修复并随 nightly 构建合入，但尚未发布正式版本。Issue 仍为OPEN（等待正式 release 后关闭）。

### 🔥 Issue #28 — LM Studio 简易连接支持

- **链接**: <https://github.com/sipeed/picoclaw/issues/28>
- **互动**: 21 条评论 👍2，创建四个月后仍活跃
- **核心诉求**: 用户希望在本地 LM Studio 场景中提供"一键连接"体验。评论区社区自发讨论配置方案，但缺乏官方集成。
- **状态**: 标记为 stale 但被社区讨论重新激活。

### 🔥 Issue #2953 — Codex OAuth 空响应（#2674 的姊妹 issue）

- **链接**: <https://github.com/sipeed/picoclaw/issues/2953>
- **互动**: 1 条评论，近期新建
- **补充信息**: 提交者进行了更深入的根因分析，明确指出 ChatGPT Codex 后端返回 `response.output_text.delta` 事件但 Picocaw 未累积 delta 内容。该 issue 为 PR #2967 的修复提供了额外验证。

### 📊 Issue #2952 — 版本发布节奏及多项功能建议

- **链接**: <https://github.com/sipeed/picoclaw/issues/2952>
- **互动**: 3 条评论
- **核心诉求**: 用户主动提及"很久没发新版本"，并集中提出 3 点改进需求（exec 命令 agent actions:run 缺失、QQ 渠道重启循环 bug、provider 管理和 UI 优化）。**反映出社区对更正式发布节奏和更易用 UI 的期待**。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高优 — 已修复

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth 对接 ChatGPT 后端时空响应（流式 delta 丢失） | [#2967](https://github.com/sipeed/picoclaw/pull/2967) | ✅ 已修复并合入 nightly |
| [#2953](https://github.com/sipeed/picoclaw/issues/2953) | 同上问题的独立报告，提供更详细根因分析 | [#2967](https://github.com/sipeed/picoclaw/pull/2967) | ✅ 同上修复 |

### 🟡 中优 — 未修复

| Issue | 描述 | 影响范围 | Fix PR |
|---|---|---|---|
| [#2968](https://github.com/sipeed/picoclaw/issues/2968) | `/context` 命令始终显示 Compress at: 76800 tokens，疑似 context 窗口计算逻辑 bug（FreeBSD 环境） | 使用 MiniMax provider + FreeBSD 的用户 | ❌ 无 |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952)（部分） | QQ 渠道重启后二次启动循环、exec 命令 actions:run 首次缺省导致报错 | QQ 渠道用户、使用 exec tool 的 agent | ❌ 无 |

### 🟢 低优 — 基础设施

| PR | 描述 | 影响 |
|---|---|---|
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Agent loop reload 时 goroutine 泄漏 + panic 清理不稳定 | 长期运行稳定性 |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | 消息总线队列满时无限阻塞 → 背压处理 | 高负载场景消息丢失 |

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 相关 PR | 纳入可能性 |
|---|---|---|---|
| **OmniRoute 作为 provider** | [#2978](https://github.com/sipeed/picoclaw/issues/2978) | 无 | 🟡 需社区贡献或用户自行配置 |
| **Cron 工具 get/update 动作** | [#2977](https://github.com/sipeed/picoclaw/pull/2977) | PR 新规 | 🟢 高，已提交实现 |
| **Telegram reply-as-mention** | [#2975](https://github.com/sipeed/picoclaw/pull/2975) | PR 新规 | 🟢 高，符合小功能快速合入模式 |
| **Anthropic SDK v1.46.0 兼容** | [#2979](https://github.com/sipeed/picoclaw/pull/2979) | PR 新规 | 🟡 中，SDK 升级通常较早合入避免依赖滞后 |
| **LM Studio 一键连接** | [#28](https://github.com/sipeed/picoclaw/issues/28)（21 条评论） | 无 | 🟡 社区呼声最高，但需产品决策 |
| **Skill 缺失二进制自动跳过** | [#2936](https://github.com/sipeed/picoclaw/pull/2936) | PR 已存在 | 🟡 stale 但逻辑清晰，pull 后可合 |
| **Provider 管理 UI 优化** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | 无 | 🔴 低，UI 改造涉及较大开发量 |

> **趋势判断**: 社区对 **provider 生态扩展**（OmniRoute、LM Studio）和 **agent 工具改进**（cron、exec 稳定性）有持续需求。短期看，cron 扩展和 Telegram 体验优化最可能进入下一正式发布版本。

---

## 7. 用户反馈摘要

**场景 1: 本地 LLM 部署** — Issue #2978 和 #28 均体现用户在**非云端环境**（本地 LM Studio、低算力嵌入式设备）跑 PicoClaw 的强烈诉求。用户遇到"添加自定义 provider 配置"的门槛。

**场景 2: 使用 OpenAI Codex / ChatGPT 后端** — Issue #2674（4 👍，7 条评论）说明不少用户将 Picocaw 对接 ChatGPT Codex 后端作为主力工作流。空响应 bug 严重影响使用，#2953 提交者明确指出"这不是 OAuth 或限额问题"，排除了大量误报可能。修复后社区反馈积极。

**场景 3: 国产渠道和环境** — Issue #2952 用户使用 **QQ 渠道 + Picocaw**，遇到重启循环和 exec 兼容性问题；Issue #2952 还反映**模型选择界面不直观**。#2968 用户在 FreeBSD 上运行，展示项目跨平台用户基础正在扩大。

**满意度信号**:
- 用户对夜间构建机制熟悉（multiple users referencing v0.2.9 系列）
- 社区成员主动提交 fix PR（#2967、#2977、#2979），说明贡献意愿健康
- Issue #2952 主动提到"好久没新正式版本"——说明用户关注版本节奏，期待更稳定的发布周期

---

## 8. 待处理积压

以下 Issue / PR 长期未获核心维护者响应，建议优先级排序进行清理：

| 编号 | 类型 | 标题 | 创建/最后更新 | 建议操作 |
|---|---|---|---|---|
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) | PR | feat(skills): skip skills whose required binaries are missing | 2026-05-24 / stale | 逻辑完善 + 有对应 Issue #2351，建议优先 review |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | PR | Fix message bus backpressure handling | 2026-05-20 / stale | 基础设施，建议评估后决定是否合入或关闭 |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | PR | Fix agent loop reload and panic cleanup | 2026-05-20 / stale | 稳定性修复，建议审查 |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) | PR | docs: add Android Termux guide | 2026-05-20 / stale | 纯文档 PR，审查成本极低，应尽快合入或明确反馈 |
| [#2968](https://github.com/sipeed/picocaw/issues/2968) | Issue | /context 始终显示 Compress at: 76800 tokens | 2026-05-30 | 需复现验证（FreeBSD + MiniMax 组合） |
| [#28](https://github.com/sipeed/picoclaw/issues/28) | Issue | LM Studio Easy Connect（21 评论） | 2026-02-11 / 仍活跃 | 社区呼声最长寿 issue，建议官方回复路线图方向 |

---

**📌 日报总结**: PicoClaw 今晨通过 nightly 构建合入了高优 Codex 流式修复（#2967），解决了近期最受关注的空响应 bug。但 7 个 open PR 中有 4 个已 stale，正式版本（v0.2.9）以来无正式 release，社区对发布节奏和功能 UI 的期待正在累积。建议维护者：(1) 推进 v0.2.9-patch 或 v0.3.0 规划；(2) 对 stale PR 做一次批量 triage；(3) 对 Issue #28（LM Studio）和 #2968（context bug）给予官方回应。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-06-01

---

## 1. 今日速览

NanoClaw 今日保持较高开发活跃度：**3 个新 Issue 全部为当日创建，8 个 PR 中有 6 个仍为开放状态**，显示社区贡献密集但合并节奏偏慢。无新版本发布，项目处于持续迭代阶段。值得关注的是，**今日所有 Issue 均由同一贡献者（mshirel）提交，且全部聚焦于稳定性与故障恢复**，暗示近期线上环境可能经历了严重故障暴露。PR 方向以功能扩展（MCP 协议支持、群组技能挂载、浏览器 Sidecar 容器化）为主，说明核心贡献者在积极拓宽能力边界。

---

## 2. 版本发布

*无新版本发布。*

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 结果 | 说明 |
|---|---|---|---|
| [#2658](https://github.com/nanocoai/nanoclaw/pull/2658) `Actual deployment` | cyber-chris | **已关闭** | 部署相关 PR，标记为 `follows-guidelines`，已关闭（未合并，可能因方案调整或征求指南后撤回） |
| [#2648](https://github.com/nanocoai/nanoclaw/pull/2648) `feat: add /upload-trace command to upload session trace to Hugging Face` | gavrielc | **已关闭** | 为 NanoClaw 增加了将 session trace 上传至 Hugging Face 的命令，已关闭（未合并），后续可能需要重新审视实现路径 |

> **小结**：当日关闭的 2 个 PR 均未真正合并入主干，反映出维护者对当前方案仍持审慎态度。

### 推进中的功能 PR（待合并）

| PR | 核心价值 |
|---|---|
| [#2662](https://github.com/nanocoai/nanoclaw/pull/2662) | HTTP/SSE MCP Server 支持，扩展 MCP 协议兼容性 |
| [#2661](https://github.com/nanocoai/nanoclaw/pull/2661) | 群组技能自动注册为 Claude Code slash 命令 |
| [#2660](https://github.com/nanocoai/nanoclaw/pull/2660) | 支持外部符号链接目标的群组技能挂载 |
| [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) | v2 容器中运行浏览器抓取 Sidecar，集成多项 skills |
| [#2659](https://github.com/nancoai/nanoclaw/pull/2659) | 通过 Host PID 级联回收无法被 Docker daemon 停掉的容器 |
| [#2656](https://github.com/nanocoai/nanoclaw/pull/2656) | 修复 mnemon setup 在 entrypoint.sh 中不执行的问题 |

---

## 4. 社区热点

当日所有 Issue 和 PR 评论数均为 0（`undefined`），尚无公开讨论形成热点。但从 Issue 内容和 PR 方向可推断以下焦点方向：

| 热点方向 | 关联条目 | 分析 |
|---|---|---|
| **核心稳定性危机** | [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) [#2655](https://github.com/nanocoai/nanoclaw/issues/2665) | 三个 Issue 高度关联，均指向**同一根因**——OneCLI 网关及主机事件循环的脆弱性，构成当前最高优先级讨论域 |
| **MCP 生态扩展** | [#2662](https://github.com/nanocoai/nanoclaw/pull/2662) | 从 stdio 扩展到 HTTP/SSE，社区对远程 MCP server 接入有明确需求 |
| **容器编排精细化** | [#2659](https://github.com/nanocoai/nanoclaw/pull/2659) [#2660](https://github.com/nanocoai/nanoclaw/pull/2660) [#2661](https://github.com/nanocoai/nanoclaw/pull/2661) | 多位贡献者同时在容器挂载、PID 回收、技能发现等基础设施层面发力 |

---

## 5. Bug 与稳定性

### 严重（🔴 P0 — 可导致完全停服）

- **[#2655](https://github.com/nanocoai/nanoclaw/issues/2655)** — **OneCLI 网关在突发负载下 fd 耗尽 hard-exit，全部 Agent 静默失联**
  - 根因：默认 1024 fd 软限，超限即 `os error 24` 退出
  - 影响：**全系统静默故障**，无自动恢复
  - 是否有修复 PR：**尚无**，但可与 Issue #2657 联动处理

### 高（🟠 P1 — 核心功能受损）

- **[#2665](https://github.com/nanocoai/nanoclaw/issues/2665)** — **单线程 Host 被无界/同步操作冻结，/health 无法检测**
  - 根因：Node 事件循环上存在无界 `await` 或同步阻塞调用（channel `deliver()`、execSync 镜像构建等）
  - 影响：整个 Host 事件循环冻结，所有 timer loop 和 channel adapter 停转
  - 是否有修复 PR：**尚无**

- **[#2657](https://github.com/nanocoai/nanoclaw/issues/2657)** — **自愈能力缺失：OneCLI 网关 worker 消亡但容器仍 Up，Docker unhealthy 状态不触发重启**
  - 根因：Docker `restart:` 策略仅针对容器退出，不响应 health check 失败后的进程级故障
  - 影响：故障检测到但无恢复动作
  - 是否有修复 PR：**尚无**

### 中（🟡 P2 — 功能异常）

- **容器孤儿泄漏**（已通过 [#2659](https://github.com/nancoai/nanoclaw/pull/2659) PR 尝试修复）— unprivileged 环境下 `docker stop` 返回 permission denied，结合 Host 重启后 `activeContainers` 内存 map 丢失，每次重启泄漏一个孤儿容器

> **🔧 稳定性评估**：今日暴露的稳定性问题**高度集中在基础设施层**（网关进程管理、事件循环隔离、容器生命周期），且均无现成 fix PR 覆盖。建议维护者将这三个 Issue 标记为最高优先级。

---

## 6. 功能请求与路线图信号

| 需求或信号 | 来源 | 实现进展 |
|---|---|---|
| **HTTP/SSE MCP Server 支持** | PR [#2662](https://github.com/nanocoai/nanoclaw/pull/2662) | ✅ PR 已提交，代码就绪待审 |
| **群组技能自动注册为 slash 命令** | PR [#2661](https://github.com/nanocoai/nanoclaw/pull/2661) | ✅ PR 已提交 |
| **外部 symlink 技能挂载** | PR [#2660](https://github.com/nanocoai/nanoclaw/pull/2660) | ✅ PR 已提交 |
| **浏览器 Sidecar + 多 Skill 容器化集成** | PR [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) | ✅ PR 已提交 |
| **上传 trace 至 Hugging Face** | PR [#2648](https://github.com/nanocoai/nanoclaw/pull/2648) | ❌ 已关闭，需重新设计 |
| **自愈网关 + 容器级 fail-fast** | Issue [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) | 🔴 尚无 PR，需排入 |

> **判断**：MCP 协议扩展（HTTP/SSE）、技能发现机制（slash 命令 + symlink）、浏览器 Sidecar 三条线均有活跃 PR，大概率进入下一版本。自愈能力（self-healing）目前仍为需求空白。

---

## 7. 用户反馈摘要

今日所有 Issue 评论数均为 0，无直接用户对话反馈。但从 Issue 内容可提炼以下核心痛点：

1. **线上可靠性焦虑** — mshirel 连续提交三个 Issue 指向同一事件链（fd 耗尽 → 网关退出 → Agent 全挂 → 自愈缺失），说明实际部署中曾发生或接近发生严重故障，对系统在生产环境下的韧性缺乏信心。

2. **健康检查盲区** — `/health` endpoint 被明确指出无法检测到事件 loop 冻结，用户期望健康检查能覆盖更深层的运行时状态。

3. **故障诊断能力不足** — 自愈机制缺失意味着运维必须手动介入，不符合 NanoClaw 作为"个人 AI 助手"的定位愿景。

---

## 8. 待处理积压

以下项目虽非今日新产生，但结合今日动态值得提醒维护者关注：

| 积压项 | 链接 | 建议优先级 | 说明 |
|---|---|---|---|
| OneCLI fd 耗尽 + hard-exit（无 fix） | [#2655](https://github.com/nanocoai/nanoclaw/issues/2655) | 🔴 紧急 | 全系统停服风险，且三个 Issue 形成完整故障链，建议统一制定修复方案 |
| 事件 loop 冻结检测（无 fix） | [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) | 🟠 高 | 需引入 worker thread 或 sub-process 隔离，架构层面改动 |
| 自愈机制缺失（无 fix） | [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) | 🟠 高 | 可作为独立 feature 推进，与Docker 健康检查深度集成 |
| 6 个开放 PR 待审 | #2664 #2662 #2661 #2660 #2659 #2656 | 🟡 中 | 积压较多，建议优先审 MCP 扩展（#2662）和容器回收（#2659），二者对标今日 Bug 方向 |

> **整体评估**：NanoClaw 今日呈现出"功能快速扩展"与"稳定性债务暴露"并存的局面。6 个开放 PR 覆盖能力增长，但 3 个 P0/P1 Issue 全部悬空无 PR。建议维护者在下一版本周期内**优先清偿稳定性债务**，再推进功能合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 · 2026-06-01

---

## 1. 今日速览

NullClaw 今日整体活动水平**较低**。过去24小时内共新增 2 条 Issue，均由同一用户（weissfl）提交，PR 活动为零，无新版本发布，项目处于**纯问题发现期**，尚无实质性修复进展。两个问题均与 Telegram 通道的交付/交互体验相关，暗示该平台集成是当前用户侧的核心摩擦点。整体项目健康度短期内处于**稳定但积压缓慢上升**的态势。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

今日无 PR 合并或关闭，项目功能推进**零进展**。

---

## 4. 社区热点

由于今日 Issues 评论数均为 0，反应数（👍）均为 0，**尚未形成社群讨论热点**。两条 Issue 目前处于"作者单方面报告、社区尚未介入"的状态。

| # | 类型 | 标题 | 作者 | 活性信号 |
|---|------|------|------|----------|
| [Issue #942](https://github.com/nullclaw/nullclaw/issues/942) | Bug | Telegram: missing typing indicator when pressing inline buttons | weissfl | ⭐0 · 💬0 |
| [Issue #941](https://github.com/nullclaw/nullclaw/issues/941) | Bug | Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens | weissfl | ⭐0 · 💬0 |

**分析：** 两条 Issue 均出自同一用户，聚焦于 Telegram 交互链路的完整性（UI 反馈 + 异步任务投递）。这类"同用户集中提交相关 Bug"的模式，通常指向一个**正在积极深度使用 NullClaw Telegram 集成的真实用户**，其反馈具有较高的场景真实性优先级。

---

## 5. Bug 与稳定性

今日共报告 **2 个 Bug**，按严重程度排列如下：

### 🔴 高 — Agent cron job 不生成子进程导致 Telegram 消息投递失败

> **[nullclaw/nullclaw Issue #941](https://github.com/nullclaw/nullclaw/issues/941)**

- **描述：** 通过 `schedule` 创建 `job_type: "agent"` 类型的定时任务时，任务被标记为已完成，但 Agent 子进程从未启动，Telegram 通道无消息送达。
- **影响范围：** 所有使用 Telegram 通道作为交付目标的定时 Agent 任务将**静默失败**，用户无法感知任务是否真正执行。
- **已有修复 PR：** 无
- **严重程度评估：** 🔴 **严重** — 功能彻底不可用，且无错误提示，属静默失败型缺陷。

### 🟡 中 — Telegram 内联按钮回调缺少"正在输入…"指示器

> **[nullclaw/nullclaw Issue #942](https://github.com/nullclaw/nullclaw/issues/942)**

- **描述：** 用户按下 Telegram 内联按钮（`callback_query`，如 `nc_choices`）后，Processing 期间不显示"typing…"状态指示器，而普通消息输入场景下该指示器正常运作。
- **影响范围：** Telegram 通道的用户体验一致性受损，用户可能因无反馈而重复触发操作。
- **已有修复 PR：** 无
- **严重程度评估：** 🟡 **中等** — 非功能阻塞，但属于交互一致性问题，可能在高频使用场景下累积为显著体验痛点。

---

## 6. 功能请求与路线图信号

今日 **无新的功能请求**。两条 Issue 均为缺陷报告，未提出任何新功能诉求。结合当前无活跃 PR 的局面，**下一版本的开发者重心大概率将优先处理 #941 和 #942**，以修复 Telegram 通路的完整性和体验一致性。

---

## 7. 用户反馈摘要

由于两条 Issue 评论数均为 0，**暂无社区层级的用户反馈交互**。从 Issue 的文本摘要中可提炼以下底层痛点：

**真实用户痛点：**

1. **异步任务交付可靠性存疑** — 用户配置了完整的 `delivery_mode: "always"` + `delivery_channel: "telegram"` 参数，系统标记任务完成，但实际从未投递。这说明用户对 NullClaw 有明确的业务级期望（定时 Agent → Telegram 推送），而系统在核心链路上存在断裂。
2. **跨平台交互一致性期望** — 用户注意到普通消息有 typing 指示器而内联按钮没有，说明用户已在多场景下使用 Telegram 集成，并对"每一类交互都应给予一致反馈"有明确期望。
3. **Telegram 为核心通道** — 两条 Issue 均集中在 Telegram，暗示该通道是 NullClaw 当前最重要的用户触达渠道之一，其稳定性直接影响核心用户体验。

---

## 8. 待处理积压提醒

> ⚠️ **当前数据仅覆盖过去24小时，无法从现有信息中识别长期未响应的早期 Issue 或 PR。** 如需积压分析，建议调用 NullClaw 项目的 `issues?state=open&sort=updated&direction=desc` 接口，拉取超过 7 天无更新的高优先级 Issue 列表进行专项审查。

**即时建议：**

| 积压项 | 建议优先级 | 原因 |
|---------|-----------|------|
| [#941 Agent cron 静默失败](https://github.com/nullclaw/nullclaw/issues/941) | 🔴 **应在本周内响应** | 功能性 Failure + 静默错误，可能影响所有 Telegram 定时任务用户 |
| [#942 Missing typing indicator](https://github.com/nullclaw/nullclaw/issues/942) | 🟡 **可纳入下个 Sprint** | UX 一致性问题，修复范围相对明确（需补 `sendChatAction` 调用） |

---

*日报生成时间：2026-06-01 | 数据来源：GitHub nullclaw/nullclaw API | 制作：OWL*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 — 2026-06-01

---

## 1. 今日速览

IronClaw 今日活跃度较高，项目处于密集的"Reborn"架构重写推进期。过去24小时内共处理 **25 条 PR 更新**（18 条待合并，7 条已合并/关闭）和 **3 条 Issue 更新**（2 条新开/活跃，1条已关闭）。无新版本发布。核心贡献者（serrrfirat、henrypark133、danielwpz）同时在多条 stacked PR 上推进，依赖更新类 PR 也有多条由 dependabot 持续提交。值得注意的是，**Nightly E2E 流水线处于失败状态**，需关注其对合并门禁的影响。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

今日共有 **7 条 PR 关闭/合并**，关键进展如下：

### ✅ 已合并/关闭的重要 PR

| PR | 说明 | 链接 |
|---|---|---|
| **#4263** `feat(triggers): add libsql repository` | 为 Reborn 触发器系统添加了第一个持久化后端（libSQL），实现 trigger 在 `ironclaw_triggers` 内的存储，是 PR11 系列的第一阶段 | [PR #4263](https://github.com/nearai/ironclaw/pull/4263) |
| **#4262** `feat(outbound): add resolution engine` | 在 `ironclaw_outbound` 中添加了 P0 级出站通信解析引擎，实现候选投递目标的选择逻辑（不含校验/渲染/发送），是出站模块的里程碑 | [PR #4262](https://github.com/nearai/ironclaw/pull/4262) |
| **#4257** `feat(reborn): wire AuthPromptView challenge enrichment + WebUI OAuth card` | 实现 GSuite OAuth、Notion MCP OAuth 和 GitHub PAT 认证流程的 Rust wire-shape 变更及 WebUI v2 组件，认证 UX 重写的关键一步 | [PR #4257](https://github.com/nearai/ironclaw/pull/4257) |
| **#4033 / #4000** `chore(deps)` 等 | 多条 dependabot 依赖更新 PR 关闭（含 agent-client-protocol 0.10.2→0.11.1、serde_json 等） | [PR #4033](https://github.com/nearai/ironclaw/pull/4033) / [PR #4000](https://github.com/nearai/ironclaw/pull/4000) |

### 📌 正在活跃推进的大型 PR（待合并）

| PR | 说明 | 链接 |
|---|---|---|
| **#4270** `feat(triggers): add postgres repository parity` | 触发器持久化的第二个后端（Postgres），与 #4263（libSQL）形成存储后端对称 | [PR #4270](https://github.com/nearai/ironclaw/pull/4270) |
| **#4272** `feat(slack): add Reborn Events API host ingress` | Slack Reborn 架构中第一个 host ingress 层——Slack Events API 路由片段，建立在 PR #4035 之上 | [PR #4272](https://github.com/nearai/ironclaw/pull/4272) |
| **#4271** `codex: Add outbound validation bridge` | 出站校验集成层（Phase 6 / PR 6），将投递候选连接到出站策略校验路径 | [PR #4271](https://github.com/nearai/ironclaw/pull/4271) |
| **#4269** `Propagate product-auth requirements to auth prompts` | 将运行时凭证认证需求传播到 auth 提示层，为手动 token 认证回退提供支持 | [PR #4269](https://github.com/nearai/ironclaw/pull/4269) |
| **#4239** `feat(reborn): project product-auth accounts into runtime credential broker` | 从 `ironclaw_auth` 到 `ironclaw_secrets` 的单向投影层，确保两套凭证存储不漂移 | [PR #4239](https://github.com/nearai/ironclaw/pull/4239) |

### 📊 整体进度评估

项目目前处于 **"Reborn"大规模重构的中期阶段**，多条 stacked PR 形成清晰的依赖链：

```
PR #4263 (libSQL trigger repo)  ✅ merged
PR #4262 (outbound resolution)   ✅ merged
PR #4257 (auth prompt + OAuth UI) ✅ merged
    ↓
PR #4270 (postgres trigger repo) ⏳ open
PR #4271 (outbound validation)  ⏳ open
PR #4269 (auth propagation)     ⏳ open
PR #4239 (credential projection) ⏳ open
    ↓
PR #4035 (Slack ProductAdapter)  ⏳ open
PR #4272 (Slack Events ingress) ⏳ open
```

触发器持久化、出站通信解析、产品认证和 Slack 适配四个并行工作流均在稳步推进。

---

## 4. 社区热点

### /#2923 — stdio MCP activation fails with "Failed to discover authorization endpoints"

**链接：** [Issue #2923](https://github.com/nearai/ironclaw/issues/2923)

**状态：** OPEN | 👍 1 | 💬 4 条评论

这是昨日讨论最活跃的 Issue。用户 rajulbhatnagar 重新提交了此前被错误关闭的 #2474，指出 **v0.25.0 已经端到端支持 stdio transport**，但激活预检（pre-flight）阶段存在 bug，导致错误地尝试发现授权端点。核心诉求是区分"不支持 stdio"与"stdio 预检逻辑存在 bug"。该 Issue 已获得社区的一个 👍，且有 4 条评论的活跃讨论，说明用户对 MCP stdio 传输的实际使用需求迫切。

### #4108 — Nightly E2E failed

**链接：** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)

**状态：** OPEN | 💬 0 条评论

由 github-actions 自动创建，指向 commit `749f584` 的 Nightly E2E 运行失败。失败涉及 "Full E2E / E2E (extensions)" 任务。目前无人评论，但持续失败的 E2E 会阻塞所有 PR 的合并门禁，**维护者应优先排查**。

### 高影响力 PR 讨论

- **PR #4272**（Slack Events API ingress）和 **PR #4035**（Slack ProductAdapter core）构成了 Slack 集成的核心路径，虽评论数暂未列明，但作为 Issue #3857 的关键子任务，其合并将标志着 IronClaw 对 Slack 作为一等产品适配器的支持确立。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Bug 描述 | Issue | 状态 | 严重程度 | Fix PR |
|---|---|---|---|---|
| **Nightly E2E 流水线持续失败** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | 未响应 | 🔴 高 — 阻塞合并门禁，掩盖潜在回归 | **无** |
| **stdio MCP 激活预检误报授权端点缺失** | [#2923](https://github.com/nearai/ironclaw/issues/2923) | 有讨论 | 🟠 中 — 阻断 stdio MCP server 的正常使用，v0.25.0 回归 | **无**（用户称此前 #2474 被错误关闭） |

### 稳定性评估

- 当前有 **2 个未修复的开放 Bug**，其中 E2E 失败影响所有 PR 的合并判断，应紧急处理。
- stdio MCP bug 可能是 v0.25.0 引入的回归，已有社区活跃跟进但尚未有官方 maintainer 回应。
- 依赖更新 PR（agent-client-protocol、tokio、serde 等）的持续引入也可能带来隐性稳定性风险，需观察 E2E 修复后是否通过。

---

## 6. 功能请求与路线图信号

根据当前活跃 Issue 和 PR 堆栈判断，以下功能极可能纳入下一版本：

| 方向 | 相关工作 | 信号强度 |
|---|---|---|
| **Reborn Slack 集成** | PR #4035、#4272，Issue #3857 | 🟢 强 — stacked PR 已在积极 review |
| **多后端触发器持久化** | PR #4263（libSQL ✅）、#4270（Postgres ⏳） | 🟢 强 — 两个存储后端均在推进 |
| **出站通信管道完善** | PR #4262（解析引擎 ✅）、#4271（校验桥接 ⏳） | 🟢 强 — 分阶段合并中 |
| **产品认证 UX 重构** | PR #4257（✅）、#4269（⏳）、#4239（⏳）、Issue #3289（已关闭） | 🟡 中 — 基础已合并，后续增强 PR 等待 |
| **Unified diff 预览展示** | PR #4184 | 🟡 中 — 已有独立 PR，尚未合并 |
| **WebUI v2 认证 E2E 测试覆盖** | PR #4256 | 🟡 中 — 测试 fixture 和场景文件已提交 |

Issue #3289（Migrate secrets/OAuth/auth setup flows）已于今日关闭，说明其产品范围已通过上述多条 PR 完成交付。

---

## 7. 用户反馈摘要

从 Issue 评论和描述中提炼真实用户痛点：

### 痛点

- **MCP stdio 传输被阻断**：用户在 v0.25.0 中期望 stdio transport 可用（文档或代码层面已声称支持），但激活流程的错误提示使其无法使用。用户 rajulbhatnagar 需重新开 Issue 来纠正此前被非 maintainer 错误关闭的问题，说明 **Issue 分类和关闭流程存在管理问题**。

- **E2E 测试不稳定影响信心**：自动化 E2E 失败 Issue 无人处理，社区贡献者的 PR 可能因此被误判为引入回归。

### 满意信号

- 多条 stacked PR 由同一贡献者持续高效推进（serrrfirat 在认证/凭证方向的 PR #4257、#4269、#4239、#4184，henrypark133 在触发器/出站方向的 PR #4263、#4262、#4270、#4271），说明核心贡献者对 Reborn 架构的推进节奏良好。

---

## 8. 待处理积压

以下 Issue/PR 长期未获响应或需维护者关注：

| 项目 | 链接 | 状态 | 问题 |
|---|---|---|---|
| stdio MCP bug | [#2923](https://github.com/nearai/ironclaw/issues/2923) | 已存在约1个月（创建于 2026-04-24） | 用户重新提交，此前 #2474 被错误关闭；4 条评论未有 maintainer 回应 |
| Nightly E2E 失败 | [#4108](https://github.com/nearai/ironclaw/issues/4108) | 创建于 2026-05-27 | 零评论，持续失败，阻塞合并门禁 |
| 大版本依赖更新积压 | [#4268](https://github.com/nearai/ironclaw/pull/4268)、[#4002](https://github.com/nearai/ironclaw/pull/4002)、[#4001](https://github.com/nearai/ironclaw/pull/4002) | 待合并（部分创建于 2026-05-24/25） | 46 个依赖同时更新，存在引入不稳定性的风险，建议分批处理并验证 E2E |
| Slack ProductAdapter core | [#4035](https://github.com/nearai/ironclaw/pull/4035) | XL 级 PR，创建于 2026-05-25 | 作为 Slack 集成的基础 crate，其 review 进度将直接影响后续 #4272 等关键 PR |

---

## 总结

IronClaw 项目在 2026-06-01 整体健康度为 **🟡 中等偏活跃**。Reborn 架构重构在多个方向（触发器持久化、出站通信、产品认证、Slack 适配器）并行推进，核心贡献者节奏稳定。但 **Nightly E2E 失败和 stdio MCP 阻塞 bug 是两个需要立即关注的风险点**——前者影响所有 PR 的合并判断，后者反映 Issue 管理流程存在疏漏。建议维护者今日优先排查 E2E 失败根因，并对 #2923 给出明确的维护者回应。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-06-01 | 数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 今日整体处于**低活跃度的维护期**。过去 24 小时内，无新开或活跃的 Issue，无新版本发布，PR 也仅有 1 条存量更新，无新合并或关闭动作。项目当前呈现出开发节奏明显放缓的特征，社区参与度和产出均处于阶段性低谷。

---

## 2. 版本发布

过去 24 小时内无新版本发布，此项略过。

---

## 3. 项目进展

今日无合并/关闭的 PR，项目在功能推进和代码合并层面无实质性进展。

---

## 4. 社区热点

唯一有动态的条目是一条存量 PR：

- **PR [#1465 — fix(scheduled-tasks): 已删除的定时任务重启后作为幽灵会话重新出现](https://github.com/netease-youdao/LobsterAI/pull/1465)**
  - 状态：OPEN · stale（已标记过期）
  - 作者：[@linlihua](https://github.com/linlihua) | 创建于 2026-04-04，最后更新 2026-05-31
  - 分析：该 PR 关联 Issue [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)，目标是修复定时任务删除后数据清理不完整的问题。截至今日该 PR 仍未被合并且已被标记 stale，显示出维护者对该 PR 的关注度不足或该修复优先级较低。

---

## 5. Bug 与稳定性

当前唯一涉及 Bug 修复的条目汇集于上述 PR：

| 严重程度 | 问题描述 | 相关 PR | 状态 |
|---|---|---|---|
| ⚠️ **中** | 已删除的定时任务在应用重启后以空内容的"幽灵会话"形式重新出现，且反复删除反复重现，影响用户体验 | [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | OPEN · stale，尚未合入 |

**根因**：定时任务删除操作仅调用了 `cron.remove`（OpenClaw 网关端），未清理本地 SQLite `cowork_sessions` 表中关联的会话记录，导致 `listSessions()` 在重启后将残留数据重新呈现为幽灵会话。

---

## 6. 功能请求与路线图信号

过去 24 小时内无新的功能请求 Issue 提交。当前 PR 队列中亦未见明确的新功能 PR。基于现有线索，下一版本的修复重点可能仍围绕 Bug 稳定性，新增功能方向信号暂不明确。

---

## 7. 用户反馈摘要

从 PR [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) 关联的 Issue [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) 中可以提炼出以下用户痛点：

- **核心痛点**：定时任务的管理操作（删除）在执行后缺乏幂等性保证，重启后状态回退，属于典型的数据一致性 Bug。
- **使用场景**：用户期望"删除即永久删除"，不希望操作被重启所逆转。目前的行为损害了用户对系统状态的可控预期。
- **情绪判断**：用户反馈的"反复删除反复出现"表明该问题已造成明显的困扰，属于影响日常使用的体验性缺陷。

---

## 8. 待处理积压

以下为需维护者优先关注的长期未解决项：

- **PR [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465)** — 定时任务幽灵会话 Bug 修复，已 stale，但对应的用户体验问题客观存在。建议尽快 review 并决定是否合入。关联 Issue [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) 同样长期未关闭。

> ⚠️ 数据说明：当前数据源返回 Issues 总数为 "共 0 条"，这可能反映数据接口的临时限制或过滤条件，并不代表项目实际上无任何历史 Issue。建议主维护者通过 GitHub 直接确认完整的 Issue 积压情况，避免遗漏重要反馈。

---

*本报告由 OWL 于 2026-06-01 生成，基于 GitHub 公开数据。如发现数据偏差，请以官方仓库为准。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-06-01

---

## 1. 今日速览

过去24小时内，Moltis 项目整体处于低活跃维护期。Issues 通道静默（0 条新开或更新），无新版本发布，社区讨论近乎停滞。唯一值得关注的动态是昨日（2026-05-31）提交的一条待合并 PR，涉及 OpenAI Codex 提供者层的工具调用参数处理。项目目前无公开的稳定性问题或用户反馈积压。整体健康度评估：**低活跃、稳定**。

---

## 2. 版本发布

无。过去24小时内无新版本发布。

---

## 3. 项目进展

过去24小时内无新增合并或关闭的 PR。积压的待合并 PR 共 **1 条**：

| 状态 | PR | 作者 | 创建于 | 说明 |
|---|---|---|------|
| 🟡 OPEN | [#1088](https://github.com/moltis-org/moltis/pull/1088) — Handle OpenAI Codex final tool-call arguments | s-salamatov | 2026-05-31 | 见下方分析 |

**PR #1088 预分析**（尚未合并，以下为独立解读）：
- 在三项技术变更点中，该 PR 对 OpenAI Codex 提供者做了精细化适配：(1) 记录 `response.function_call_arguments.done` 最终载荷；(2) 在未发出 argument deltas 时合成流式 argument delta；(3) 让空累计 argument 字符串流经 decode diagnostics 以确保缺失-argument 错误可被诊断。
- 若合并后，Codex 场景下工具调用的 **流式完整性** 与 **错误追溯能力** 将得到提升，属于提供者的**质量加固型**改动。

---

## 4. 社区热点

过去24小时无高热度讨论。唯一 PR [#1088](https://github.com/moltis-org/moltis/pull/1088)（👍 0，评论未定义），尚未形成社区反馈。

---

## 5. Bug 与稳定性

过去24小时内无新上报 Bug、崩溃或回归问题。PR [#1088](https://github.com/moltis-org/moltis/pull/1088) 本身可能包含针对 Codex 工具调用缺失 argument 场景的诊断加固，暗示此前存在**低概率的静默失败**，该 PR 可在合并后缓解；当前尚无临时规避方案可见。

---

## 6. 功能请求与路线图信号

过去24小时无新功能请求 Issue 提交。PR [#1088](https://github.com/moltis-org/moltis/pull/1088) 的方向暗示：**OpenAI Codex 提供者**仍处在迭代深化阶段，后续可能继续围绕工具调用鲁棒性与错误可见性演进。短期内路线图无显著新增信号。

---

## 7. 用户反馈摘要

过去24小时无新增 Issues 评论，暂无法提炼新的真实用户痛点或使用场景反馈。

---

## 8. 待处理积压

| 积压项 | 类型 | 创建/更新 | 备注 |
|---|---|---|---|
| [#1088](https://github.com/moltis-org/moltis/pull/1088) | PR (OPEN) | 2026-05-31 | 待合并；涉及 Codex 提供者行为修正，建议优先审阅，合并后减少静默失败风险 |

该项虽刚创建不足24小时，但因尚无评审活动，建议维护者在下次迭代中关注其合并进度，以推动 Codex 提供者稳定演进。

---

**总结：** Moltis 于 2026-06-01 处于低活跃静默期，唯一待合并的 PR 聚焦于 Codex 提供者工具调用加固。社区与用户反馈通道平稳，无紧急风险，建议依赖 OpenAI Codex 提供者的用户留意 PR 合并后的行为变更。

---
*数据来源：Moltis GitHub 仓库 | 报告生成时间：2026-06-01*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-01

> 数据来源：agentscope-ai/CoPaw GitHub 仓库 | 统计窗口：过去24小时

---

## 1. 今日速览

CoPaw 今日社区活跃度**较高**，共产生 **23 条 Issue 更新**（新开/活跃 18 条，关闭 5 条）和 **4 条 PR 更新**（待合并 3 条，关闭 1 条），无新版本发布。项目当前处于 **v1.1.9 密集反馈期**，大量 Bug 围绕该版本的 Windows 桌面端稳定性、定时任务隔离、会话管理等问题集中爆发。同时社区功能请求活跃，涉及聊天模式、上下文优化、桌面交互增强等多个方向，显示用户群体正在从"能用"向"好用"阶段过渡。值得注意的是，今日有 **1 个安全相关 Issue**（企业微信频道记忆隔离缺陷）需优先关注。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为近期发布的 v1.1.9（Desktop Tauri）。

---

## 3. 项目进展

| PR | 状态 | 内容 |
|---|---|---|
| [#4810](https://github.com/agentscope-ai/CoPaw/pull/4810) | ✅ 已合并 | **优化控制台聊天 slash 技能提示**：将当前 Agent 可用技能注入 `/` 命令建议弹窗，仅显示技能名称保持紧凑，限制 5 项可见并支持滚动，新增 ChatSkills 调试日志。提升技能发现效率。 |
| [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) | 🔍 审核中 | **每轮对话 Token 用量可视化**：新增每轮 Provider 用量统计、上下文窗口用量估算、右下角浮动 Token 徽章、流式/停止/重载时的 Markdown 使用注记。已进入 Under Review 阶段约两周。 |
| [#4821](https://github.com/agentscope-ai/CoPaw/pull/4821) | ⏳ 开放中 | **飞书群组会话共享模式**：新增 `share_session_in_group` 配置，允许群聊内所有成员共享同一 Session 上下文，或每人独立 Session，遵循与企业微信频道相同的实现模式。 |
| [#4812](https://github.com/agentscope-ai/CoPaw/pull/4812) | ⏳ 开放中 | **官网 Header 样式修复 + 自动播放视频**：前端样式改进。 |

**整体评估：** PR 合并节奏偏慢，最长的 [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) 已开放超两周仍处于审核中，建议维护者排查审核瓶颈。今日实际推进的功能增量较小，主要是 slash 技能提示的用户体验优化。

---

## 4.社区热点

### 🔥 Issue #4789 — [CLOSED] 对话回退与逐对话删除功能请求
**作者:** bcoooooooooooooooo | 👍 1 | 💬 8 条评论
🔗 [链接](https://github.com/agentscope-ai/CoPaw/issues/4789)

**社区诉求：** 用户希望 QwenPaw 借鉴 TR AE 的对话管理体验，支持每个对话独立删除、回退到任意历史节点（包括文件状态同步回退）、可选开启/关闭、打通本地项目目录管理。有 8 条评论参与讨论，获得 1 个赞。

**分析：** 这是当前社区讨论热度最高的 Issue。背后反映的核心诉求是 **对话粒度的精细化管理** —— 用户不满足于"整个沙箱"的粗放管理模式，期望获得类似 IDE 版本控制的体验。这是 CoPaw 从 Agent 框架向完整开发工作空间演进的关键信号。

---

### 🔥 Issue #4653 — [CLOSED] 定时任务与用户消息共享 Session 导致任务中断
**作者:** feng183043996 | 💬 8 条评论
🔗 [链接](https://github.com/agentscope-ai/CoPaw/issues/4653)

**社区诉求：** 详细描述了定时任务（cron）与用户即时消息共享同一 Session 时的竞争问题，并提供了完整日志证据。当定时任务执行期间用户发送消息，Agent 优先处理用户消息，导致定时任务被中断。

**分析：** 同一作者开设的 Issue 在今日获得大量互动，说明 **定时任务隔离** 是用户实际生产场景中的高频痛点（如定时育儿提醒、定时资讯推送等），期望获得独立于交互会话的执行通道。

---

### 🌟 Issue #4845 — [OPEN] 企业微信频道缺乏记忆隔离
**作者:** linhuang0405 | 💬 1 条评论（今日新开）
🔗 [链接](https://github.com/agentscope-ai/CoPaw/issues/4845)

**社区诉求：** 企业微信（WeWork）频道未实现用户间完整的记忆/Session 隔离，攻击者可通过 Prompt Injection 获取其他用户的聊天历史。

**分析：** ⚠️ **这是今日唯一的安全类 Issue**，尽管刚开，但涉及多租户场景下的隐私泄露风险。对于企业级部署场景尤为关键，建议维护者 **高优先级评估**。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 🔴 严重 (Critical)

| # | 问题 | 版本 | Fix PR |
|---|------|------|--------|
| [#4845](https://github.com/agentscope-ai/CoPaw/issues/4845) | 企业微信用户间记忆隔离缺陷，存在 Prompt Injection 泄露风险 | Latest main | ❌ 无 |
| [#4837](https://github.com/agentscope-ai/CoPaw/issues/4837) | v1.1.9 频繁出现系统级 fallback 回复"无法处理您的问题"，覆盖 Agent 真实回复 | v1.1.9 | ❌ 无 |
| [#4835](https://github.com/agentscope-ai/CoPaw/issues/4835) | jobs.json 中一个无效 Job 导致整个 Workspace 无法启动（1 validation error → cascading failure） | v1.1.9 | ❌ 无 |

### 🟠 重要 (Major)

| # | 问题 | 版本 | Fix PR |
|---|------|------|--------|
| [#4833](https://github.com/agentscope-ai/CoPaw/issues/4833) | pre_reasoning hook 中 compact memory 失败 | v1.1.9 | ❌ 无 |
| [#4824](https://github.com/agentscope-ai/CoPaw/issues/4824) | ACP 协议连接 Claude Code 协议不匹配（版本号格式错误 + delegate_external_agent 持续报 Internal error） | Latest | ❌ 无 |
| [#4842](https://github.com/agentscope-ai/CoPaw/issues/4842) | Windows 上大量 Agent 实例导致 MCP Server 进程爆炸式增长（300+ agents → 数百个 MCP 进程） | Latest | ❌ 无 |
| [#4834](https://github.com/agentscope-ai/CoPaw/issues/4843) | MCP Server 进程在服务重启后累积不清理，导致控制台加载缓慢 | Latest | ❌ 无 |

### 🟡 一般 (Minor)

| # | 问题 | 版本 | Fix PR |
|---|------|------|--------|
| [#4666](https://github.com/agentscope-ai/CoPaw/issues/4666) | 新建会话后 Models 配置页面丢失，显示"Load failed"，需重启 | v1.1.8.post1 | ❌ 无 |
| [#4829](https://github.com/agentscope-ai/CoPaw/issues/4829) | Windows cmd 窗口闪烁（已关闭，已有 Issue #4832 跟进） | Desktop Tauri v1.1.9 | ❌ 无 |
| [#4832](https://github.com/agentscope-ai/CoPaw/issues/4832) | subprocess 缺少 CREATE_NO_WINDOW 标志导致 cmd 窗口闪烁（根因已定位） | Desktop App | ❌ 无 |
| [#4844](https://github.com/agentscope-ai/CoPaw/issues/4844) | Windows 浏览器进程和临时目录锁在会话结束后持续存在 | Latest | ❌ 无 |
| [#4839](https://github.com/agentscope-ai/CoPaw/issues/4839) | Windows pip 升级后残留 ~前缀内置 Skill 目录，导致 Skill 池出现幽灵技能 | Windows + pip | ❌ 无 |

### 已修复/关闭（验证中）

| # | 问题 | 状态 |
|---|------|------|
| [#4653](https://github.com/agentscope-ai/CoPaw/issues/4653) | Cron 与用户消息共享 Session 导致中断 | ✅ Closed |
| [#4649](https://github.com/agentscope-ai/CoPaw/issues/4649) | jobs.json 更新后孤立的 Cron Job 不被清理（ghost tasks） | ✅ Closed |
| [#4828](https://github.com/agentscope-ai/CoPaw/issues/4828) | Windows cmd 窗口闪烁（重复 Issue） | ✅ Closed |

**总结：** v1.1.9 存在多个回归问题，尤其是系统级 fallback 消息和 jobs.json 验证过于严格两大 Bug 直接影响日常使用。ACP 协议兼容性问题在 #4824 中已有明确根因定位，属于可快速修复的类型。所有开放性 Bug 均无对应 Fix PR，修复积压明显。

---

## 6. 功能请求与路线图信号

### 近期信号分析

| # | 功能请求 | 方向 | 与已有 PR 关联 | 纳入可能性 |
|---|---------|------|---------------|-----------|
| [#4843](https://github.com/agentscope-ai/CoPaw/issues/4843) | 可配置聊天模式：Interrupt / Queue / Insert | 会话管理 | 无 | ⭐⭐⭐ 高（需求清晰，用户自行提出） |
| [#4836](https://github.com/agentscope-ai/CoPaw/issues/4836) | 工具定义按需加载，减少 55-65% token 开销 | 性能优化 | 无 | ⭐⭐⭐ 高（提供详细数据支撑，技术方案明确） |
| [#4789](https://github.com/agentscope-ai/CoPaw/issues/4789) | 对话回退与精细化管理 | 用户体验 | 无 | ⭐⭐ 中（大型功能，需架构调整） |
| [#4830](https://github.com/agentscope-ai/CoPaw/issues/4830) | 输出本地路径自动生成可点击链接 | 桌面端 UX | 无 | ⭐⭐ 中（实现成本低，收益高） |
| [#4831](https://github.com/agentscope-ai/CoPaw/issues/4831) | Docker 镜像预装 psycopg2-binary、pytz、mootdx | 运维 | 无 | ⭐⭐ 中（细节性改进） |
| [#4840](https://github.com/agentscope-ai/CoPaw/issues/4840) | 对话窗口思考强度等级 UI 选择器 | UI | 无 | ⭐⭐ 中等（已有类似 Issue #3996） |
| [#4838](https://github.com/agentscope-ai/CoPaw/issues/4838) | 工具调用后抑制最终文本回复 | 渠道配置 | 无 | ⭐ 低（特定场景需求） |
| [#4841](https://github.com/agentscope-ai/CoPaw/issues/4841) | Skill 提案：Before You Build Skill | 生态 | 无 | ⭐ 低（社区贡献） |

**路线图建议：** 结合 Issue #4836（token 优化数据详实）和 #4843（并发消息控制），适合作为下一版本的性能与体验重点。工具按需加载的技术方案已有量化数据支撑（55-65% token 节省），ROI 极高，建议优先排期。

---

## 7. 用户反馈摘要

### 🗣️ 用户痛点

1. **Windows 桌面端体验堪忧** — 多个 Issue 集中反映 cmd 窗口闪烁（#4829/#4832）、浏览器进程残留（#4844）、pip 升级后幽灵技能（#4839）、MCP 进程泄漏（#4834/#4842），表明 Windows 平台的进程管理和资源清理存在系统性短板。用户反馈措辞直接："非常影响使用体验"。

2. **v1.1.9 升级后稳定性倒退** — 用户明确感知到升级后出现新问题："升级后，Agent 在正常对话过程中频繁返回一条固定的中文 fallback 消息"（#4837），jobs.json 一个错误导致整体崩溃（#4835）。用户期望升级是改善而非恶化。

3. **ACP 生态兼容性** — 用户尝试通过 ACP 协议连接 Claude Code，发现协议版本号格式不匹配（#4824），说明 QwenPaw 的 ACP 实现对协议规范的遵循存在偏差，限制了多 Agent 协作生态。

### 😊 满意方向

- 社区对 slash 技能提示优化（PR #4810 已合并）方向表示认可，符合作为"个人 AI 助手"定位的效率提升需求。
- 用户积极提出详细的功能建议（如 #4789 附截图 + 完整需求描述，#4836 提供 token 开销量化数据），说明核心用户群体的参与度和专业度较高。

### 📊 高频用户画像

| 用户 | 特征 | 典型 Issue |
|------|------|-----------|
| feng183043996 | 重度 cron 任务用户，关注定时任务隔离、Docker 运维、token 优化 | #4653, #4649, #4835, #4831, #4836, #4834 |
| heidis168 | 桌面端活跃用户，关注交互体验和系统集成 | #4830, #4843, #4844 |
| yoDIan2 | Windows 桌面端用户 | #4829, #4828 |

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于积压状态，提醒维护者关注：

| # | 标题 | 类型 | 开放天数 | 状态 | 建议 |
|---|------|------|---------|------|------|
| [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) | Token 用量可视化 PR | PR | 17天 | 🔍 Under Review 无评论 | 需要 reviewer 指派或反馈 |
| [#4666](https://github.com/agentscope-ai/CoPaw/issues/4666) | 新建会话后 Models 配置丢失 | Bug | 7天 | ⏳ Open 无回复 | 可复现，影响日常使用 |
| [#4649](https://github.com/agentscope-ai/CoPaw/issues/4649) | 孤立 Cron Job 不清理 | Bug | 7天 | ✅ Closed 但同一天开了 #4835 作为后续 | 验证修复是否完整 |
| [#4653](https://github.com/agentscope-ai/CoPaw/issues/4653) | Cron 共享 Session 中断 | Bug | 7天 | ✅ Closed | 关注用户是否验证解决 |
| [#4836](https://github.com/agentscope-ai/CoPaw/issues/4836) | 工具按需加载（token 优化）Feature Request | Feature | 1天 | ⏳ Open 无回复 | 数据详实，建议尽快讨论是否接受 |

---

## 📌 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | ⭐⭐⭐⭐ | 23 条 Issue 更新，用户参与度高 |
| 版本发布节奏 | ⭐⭐ | 无新版本，v1.1.9 遗留问题较多 |
| PR 处理效率 | ⭐⭐ | 最长 PR 积压 17 天无 review，合并节奏偏慢 |
| Bug 响应速度 | ⭐⭐ | 大量 Bug 无 Fix PR，Windows 平台问题集中 |
| 安全响应 | ⭐⭐⭐ | #4845 今日新开，需尽快确认和分级 |

**综合评价：** CoPaw 社区活跃且用户质量较高，但工程端的 PR 审核和 Bug 修复节奏明显滞后于社区产出。建议维护者近期重点关注：(1) v1.1.9 回归问题的 hotfix；(2) Windows 平台进程管理的技术债清理；(3) ACP 协议兼容性修复以拓展生态；(4) #4836 工具按需加载（高 ROI 优化）。

---

*本报告由 OWL 自动生成，数据截至 2026-06-01。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报**  
📅 **2026年6月1日** | 维护者：qhkm | 源码：https://github.com/qhkm/zeptoclaw  

---

### 1. 今日速览  
ZeptoClaw 今日整体活跃度极低，社区贡献几乎停滞。过去24小时内仅有一条 Issue（#609）被关闭，无新增 Issue、Pull Request 或版本发布。项目处于安静期，可能反映维护者暂时未主动推进开发，或社区参与度下降。短期内缺乏实质性进展，项目健康度维持但无增长信号。

---

### 2. 版本发布  
无新版本发布。  
（Releases 页面无任何更新：https://github.com/qhkm/zeptoclaw/releases）

---

### 3. 项目进展  
今日无 PR 合并或关闭记录。唯一的动态是 Issue #609 被关闭，但该 Issue 为自动化安全扫描请求，非功能性开发推进，因此项目整体技术进展为零。

---

### 4. 社区热点  
**无活跃讨论**。  
唯一相关条目的链接与摘要如下：  
- **#609 [CLOSED] chore(security): repository-wide Codex Security scan for webhook identity routing**  
  作者：daneschneider-oai | 关闭时间：2026-05-31 | 评论：1 | 👍：0  
  链接：[qhkm/zeptoclaw Issue #609](https://github.com/qhkm/zeptoclaw/issues/609)  
  分析：该 Issue 由自动化安全工具（Codex Security）触发，聚焦于 webhook 请求身份验证与路由链路的安全审计。虽然已关闭，但内容仅为扫描请求，未揭示具体漏洞或修复措施，社区参与度低（仅1条评论），表明安全流程尚未转化为社区互动或公开改进。

---

### 5. Bug 与稳定性  
**无新 Bug 报告**。过去24小时未提交任何崩溃、回归或功能失效类 Issue。项目当前无已知公开安全或稳定性问题被标记为待修复。

---

### 6. 功能请求与路线图信号  
**无新功能请求**。  
今日及近期 Releases 与 Issues 均未体现用户明确提出的功能需求。结合现有 PR 队列为空，可判断下一版本短期内不会包含重大功能更新。建议关注 webhook 安全相关改进是否进入路线图，但目前无明确信号。

---

### 7. 用户反馈摘要  
**无有效用户反馈**。  
唯一关闭的 Issue #609 为自动化系统发起，评论内容未体现真实用户的使用场景、痛点或满意度。缺乏来自终端开发者的互动，难以评估用户体验或实际需求。

---

### 8. 待处理积压  
**当前无活跃积压项**。  
因今日及近期无开放 Issue、PR 或未响应讨论，暂无需紧急处理的项目债务。但长期看，若 webhook 安全扫描发现潜在风险（如 #609 所涉），建议优先透明披露审计结果以重建社区信任。

---

📊 **健康度评估**：项目处于休眠状态，无积极贡献或风险暴露。维持“稳定但低活性”评级。建议维护者适时发布路线图或安全报告以激活社区。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-01

---

## 1. 今日速览

ZeroClaw 今日活跃度处于**高位**：过去 24 小时内 Issues 更新 46 条（新开/活跃 34 条，关闭 12 条），PR 更新 50 条（待合并 40 条，已合并/关闭 10 条），无新版本发布。项目处于 **v0.8.0-beta-2 集成冲刺阶段**，大型集成分支 PR #6848 仍在等待反馈，多个小型 fix 和 feature PR 围绕通道（channel）、提供者（provider）、硬件（hub）等模块持续迭代。社区参与度显著提升，尤其体现在多通道 TTS 路由、MCP 工具安全策略和硬件外设支持等方向的密集讨论与并行开发。

---

## 2. 版本发布

**无新版本发布。** 当前最新集成基准仍为 PR #6848 所构建的 beta-2 集成分支。

---

## 3. 项目进展 — 今日合并/关闭的 PR

| PR | 状态 | 说明 |
|---|---|---|
| **PR #7044** (closed) | ✅ 已合并 | `refactor(cargo)`: 抽取 `channels-all` 聚合 feature，将邮件相关 crate（lettre、mail-parser、async-imap）从 agent-runtime 中剥离。简化依赖管理，`default` 仍包含 `channels-all` 确保向后兼容。 |
| **PR #7029** (closed) | ✅ 已合并 | `fix(zerocode)`: 修复 TUI 设置错误后 Chat 与 Code/ACP 界面空白状态刷新问题，改善 zerocode TUX 用户体验。 |

**项目整体推进：** 硬件外设（ESP32 smart-room）方向今天涌现 5 个新 PR（#7045–#7048），将原始的 hackathon 大分支 #6148 按职责拆分，说明模块化硬件支持已从概念验证进入工程化落地阶段。通道层方面，WhatsApp LID JID 路由修复（#7008）、邮件 XOAUTH2 认证（#7021）、TTS OGG/Opus 转码（#7050）等多个独立 PR 并行推进，多通道路由能力持续增强。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

**🔗 Issue #5937** — [Feature]: refactor: Unify providers architecture and reqwest client management
**评论: 9** | 👍: 0 | 标签: enhancement, risk: high, provider

核心诉求：`providers` 模块中 `reqwest` 客户端使用不一致、模型构造参数重复，导致配置碎片化。这是架构层面的高优先级重构请求，涉及所有提供者实现。**背后信号：** 社区认为当前提供者的技术债已经到了"先重构再叠加新 feature"才能持续演进的程度。

---

**🔗 Issue #5847** (CLOSED) — [Bug]: Document the use of gateway.web_dist_dir & ZEROCLAW_WEB_DIST_DIR
**评论: 8** | 👍: 1 | 标签: bug, documentation, risk: low

用户因 Gateway 日志提示 `Web dashboard: not available` 而困惑，需要明确的文档说明如何配置 `web_dist_dir` 和 `ZEROCLAW_WEB_DIST_DIR`。已关闭，反映文档缺口填补了用户体验痛点。

---

**🔗 Issue #5982** — [Feature]: Per-sender RBAC for multi-tenant agent deployments
**评论: 8** | 👍: 0 | 标签: enhancement, risk: high, security

**这是当前社区最强烈的功能需求之一。** 用户希望 ZeroClaw 实例能按发送者分配角色（客户、运维、开发者），实现工作空间、工具集、速率限制、系统提示的隔离。PR #6914 和 #6915 已在主动推进 `allowed_tools` 的运行时强制和技能范围临时提权，说明此请求已开始落地。

---

**🔗 Issue #6909** — [Feature]: computer-use support (screen interaction like Codex / Peekaboo)
**评论: 4** | 👍: 0 | 标签: enhancement, risk: high, security, type:rfc

ZeroClaw 目前无法与桌面 GUI 交互。该 RFC 提议添加截图捕获、鼠标/键盘事件发送能力，对标 OpenAI Codex 和 Hermes。这是将 ZeroClaw 从"连接器"升级为"自主智能体平台"的关键能力信号。

---

**🔗 Issue #6954** — RFC: Route scheduled tasks through the orchestrator message pipeline
**评论: 3** | 👍: 0 | 标签: risk: high, cron, type:rfc

**根因 RFC**，指出 cron 调度器绕过了 Orchestrator 消息管道，这是 #6037、#6105、#6648 等多个相关 bug 的共同根因。重要性在于：该架构决策将决定 ZeroClaw 的可靠性下限。

---

## 5. Bug 与稳定性

### 🔴 高严重性 P1 Bug

| Issue | 严重程度 | 状态 | 已有 Fix PR | 说明 |
|---|---|---|---|---|
| **#4842** (closed) | 🔴 P1 | 已关闭 | — | `zeroclaw update` 在 aarch64（树莓派）上下载了错误架构的二进制，导致 "Exec format error"。已关闭但修复未在数据中明确可见，可能仍在等待验证。 |
| **#5122** | 🔴 P1 | in-progress | — | `web_fetch` 的 `allowed_private_hosts` 对解析到私网 IP 的域名形同虚设（DNS 重绑定绕过）。安全风险尚未解决。 |
| **#6647** (closed) | 🔴 P1 | 已关闭 | — | Cron 作业输出仅出现在 Web Dashboard 而未路由到 Telegram 等配置通道。已关闭，应与 #6954 的 RFC 相关。 |
| **#6876** | 🔴 P1 | accepted | — | `risk_profile.allowed_tools` 不限制 MCP 工具（仅内置工具受限）。用户困惑这是设计还是文档缺失——**这是个安全问题，需要官方正式口径。** |
| **#4879** | 🔴 P1 | no-stake | — | Gemini CLI OAuth 认证流程彻底失败。👍 有 2 个，说明受影响用户不止一人，长期未解决。 |
| **#7022** | 🔴 P1 | open | ✅ **PR #7049** | Kimi-k2.6 因 `compatible.rs` 强制发送 `temperature: 0.7` 而返回 400。**修复 PR 已提交并开放中。** |
| **#6914** | 🔴 P1 | blocked | — | `allowed_tools` 字段存在但未在工具执行时强制。需要维护者审核。 |
| **#6916** | 🔴 P1 | blocked | — | Shell 子进程无内存限制，生产环境中 LLM 回退到 shell 命令（如 wkhtmltopdf）可 OOM 整个容器。**实际生产事故。** |

### 🟡 中等严重性 Bug

| Issue | 状态 | 说明 |
|---|---|---|
| **#5962** | in-progress | Ollama Provider 调用失败后同一会话永久阻塞 |
| **#5847** | ✅ 已关闭 | Gateway web_dist_dir 文档缺失 |
| **#5256** | ✅ 已封闭 | llama.cpp 连接 500 错误 |
| **#5289** | ✅ 已封闭 | Bedrock 误用 API_KEY 导致 403 |
| **#5866** | open | Telegram `mention_only=true` 时忽略对 bot 消息的回复 |
| **#6720** | accepted | `context_aware_tools` 配置字段是死代码，设置后无任何效果 |

---

## 6. 功能请求与路线图信号

基于 R 标 和活跃 PR 的交叉分析，以下功能很可能纳入 **v0.8.0-beta-2 或后续版本**：

| 方向 | 信号强度 | 相关 Issue(s) | 进度 |
|---|---|---|---|
| **MCP 工具安全策略** | ⭐⭐⭐⭐ 🔴 P1 | #6876, #6914, #6915, #6917 | PR #6914 / #6915 / #6917 已提交，但是 `blocked` — 等审核 |
| **RBAC 多租户** | ⭐⭐⭐ | #5982 | 纯 RFC 阶段，尚无直接 PR，但 #6914 是其子集提供者 |
| **Computer-Use (GUI 控制)** | ⭐⭐⭐ | #6909 | RFC 阶段，技术风险高，需要 maintainer review |
| **Cron → Orchestrator 管道路由** | ⭐⭐⭐ | #6954（RFC），关联 #6647 | 已被多个 bug 证实需要修复，RFC 到工程实现尚需时间 |
| **硬件/ESP32 Smart-Room** | ⭐⭐⭐ | #6148, #7045–#7048, #7044 | **非常活跃**，5 个 PR 同日入队，模块化拆分中 |
| **统一输出路由 (TTS/语音)** | ⭐⭐⭐ | #6969, #7020, #7050 | PR #7050 (OGG/Opus) 和 #7020 (static output_modality) 均已开放 |
| **提供商架构重构** | ⭐⭐⭐ | #5937 (9 评论) | 讨论激烈但尚未有 PR，技术债清理优先级被广泛认可 |
| **内存策略解耦** | ⭐⭐ | #6850 | 设计提案阶段，需 maintainer review |

---

## 7. 用户反馈摘要

### 😤 痛点

1. **"文档是关键缺口"** — 多个 issue（#5847、#6760、#6876）反映 ZeroClaw 配置选项缺少文档或使用说明，用户被迫阅读源码才能理解功能。`context_aware_tools`（#6720）是典型案例：字段在文档中承诺功能，实际却是死代码。

2. **"跨架构部署体验差"** — aarch64/树莓派用户（#4842）发现 `update` 命令下载错误二进制，说明 CI/CD release 流程的多架构支持存在缺陷。

3. **"安全配置不对等"** — 用户对 `allowed_tools` 不限制 MCP 工具感到困惑（#6876）。有些开发者已习惯其他平台（OpenClaw, Letta）的 RBAC 能力，迁移后发现 ZeroClaw 的安全模型仍较基础。

4. **"从 Letta 迁移后丢失关键行为"** — #6969 的作者明确表达了从 Letta 迁移后对 per-peer 输出路由能力缺失的不满，说明多场景用户期望开箱即用的个性化交付能力。

### 😊 满意信号

1. **MCP 集成受关注** — #4467（Add MCP resource and prompt support）获得 👍4，是数据中点赞最高的 issue，说明社区对 ZeroClaw MCP 能力的扩展非常期待且认可当前方向。

2. **docker 部署体验改善** — #6760 用户主动分享 v0.7.5-debian 的 Docker 配置方案，体现了用户已形成自助共建的氛围。

---

## 8. 待处理积压 ⚠️

以下长期未响应的重要 Issue/PR 需要维护者关注：

| 项目 | 创建时间 | 未响应天数（截至 6/1） | 关键标签 | 说明 |
|---|---|---|---|---|
| **Issue #4879** — Gemini OAuth 不工作 | 03-28 | **65 天** | P1, 👍2 | 影响 Gemini 用户的核心认证流程，已有 2 人 upvotes |
| **Issue #3100** — Mattermost oncall mode | 03-10 | **83 天** | p2, in-progress | 标记为 in-progress 但长期无进展 |
| **Issue #4467** — MCP resource/prompt support | 03-24 | **69 天** | p2, in-progress, 👍4 | **点赞最高的功能请求**，长期停滞 |
| **Issue #6074** — 恢复 bulk revert 丢失的 153 个 commits | 04-24 | **38 天** | audit, p2, in-progress | 代码审计类任务，需要在下一个正式发布前完成 |
| **PR #6848** — v0.8.0-beta-2 集成大分支 | 05-22 | **10 天** | size: XL, DO NOT MERGE | 标注"不合并"但已是 v0.8.0 的整体方向基线，需要 maintainer 给出阶段性 review 意见 |
| **PR #6148** — ESP32 Smart-Room 演示（原始大分支） | 04-27 | **35 天** | size: XL, needs-author-action | 已拆分为子 PR，需确认原始分支的处理方式 |
| **Issue #5122** — web_fetch 私网绕过 | 03-29 | **64 天** | P1, security | 持续开放的高风险安全问题 |

---

## 📊 项目健康度评分卡

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | 🟢 高 | 46 issues + 50 PR / 24h，开发者参与密集 |
| **响应速度** | 🟡 中等 | 新 issue 响应尚可，但 60+ 天的 P1 issue 仍未解决 |
| **代码质量趋势** | 🟢 正向 | 架构重构讨论 (#5937)、RFC 流程规范 (#6954, #6909) 显示工程成熟度提升 |
| **安全态势** | 🟡 需关注 | 多个 P1 安全类 issue 积压（MCP 限制绕过、RBAC 缺失、shell OOM） |
| **版本交付** | 🟡 待定 | 无新版本发布，beta-2 集成分支已存在 10 天等待 review |

---

> 数据来源：zeroclaw-labs/zeroclaw | 统计时间窗口：2026-05-31 至 2026-06-01 | 日报由 OWL 自动生成

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*