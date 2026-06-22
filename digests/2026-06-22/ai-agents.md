# OpenClaw 生态日报 2026-06-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-22 00:43 UTC

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

# OpenClaw 项目动态日报 — 2026-06-22

---

## 1. 今日速览

过去24小时 OpenClaw 项目活跃度极高：Issues 更新 **500 条**（新开/活跃 478，已关闭 22），PR 更新 **500 条**（待合并 479，已合并/关闭 21），发布 **2 个新版本**（v2026.6.9 正式 + v2026.6.10-beta.1）。项目处于高并发迭代期，社区反馈密集涌入，但积压也同步加深——PR 待合并池高达 479 条，Issue 关闭率仅 4.4%，维护者审查压力显著。session-state 和 message-loss 是当前最受关注的两大影响域。

---

## 2. 版本发布

### v2026.6.10-beta.1（2026-06-22）
**[Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.6.10-beta.1)**

核心改进：
- **更可靠的 Agent turn 与会话状态管理**：修复子 agent 完成通知丢失、聊天历史转录为空、媒体索引对齐偏差、休眠 follow-up drain 重启、compaction model alias 解析不一致等问题。（关联 PR #94）

### v2026.6.9（正式版本，2026-06-22 发布）
**[Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.6.9)**

核心改进：
- **Telegram 富文本投递增强**：支持富 HTML 发送、保留丰富 Markdown 与 sticker 路径、更忠实地渲染进度草稿与命令输出、安全的 HTML 表格规范化、修复 mentions 和 spooled handler 的投递路径。（关联 PR #93286）
- **⚠️ 破坏性变更 / 迁移注意**：Issue [#95495](https://github.com/openclaw/openclaw/issues/95495) 报告 2026.6.9 **静默迁移 memory vector store**（从 `~/.openclaw/memory/main.sqlite` 迁移到 `~/.openclaw/agents/main/agent/openclaw-agent.sqlite`），无任何升级提示，导致用户被迫全量 re-embed（案例涉及 1499 个文件）。**升级前建议备份 Memory Store 路径并观察迁移日志。**

---

## 3. 项目进展

今日仅有 **1 个 PR 完成合并/关闭**：

| PR | 状态 | 说明 |
|---|---|---|
| [#95618](https://github.com/openclaw/openclaw/pull/95618) | **已合并** | 修复重试成功后运行时状态的一致性协调——修复后台 worker/session 运行中先发成功结果、后因临时错误导致最终投影被错误覆盖的问题 |

今日新开/活跃的重大 PR（维护者审查中）：

| PR | 标签 | 说明 |
|---|---|---|
| [#95604](https://github.com/openclaw/openclaw/pull/95604) | P2, size:XL | **feat(discord): 子 agent 进度可视化** — Discord 用户现可在主会话中看到子 agent 运行状态，解决长时间 turn 看似"假死"的体验问题 |
| [#95611](https://github.com/openclaw/openclaw/pull/95611) | P2, ready | **fix(codex): 运行 native post-tool 中间件** — 修复 Codex native `PostToolUse` relay 跳过后置中间件（如 Tokenjuice）的问题 |
| [#95342](https://github.com/openclaw/openclaw/pull/95342) | P2 | **fix(agents): 上下文引擎接管 compaction 时跳过预检查** — 解决 CJK 内容因 token 高估导致误触自动 compaction 的问题 |
| [#95333](https://github.com/openclaw/openclaw/pull/95333) | P1 | **可信的 inbound-decoration 合同** — 为消费者提供标准化去除/去重协议，替代不可靠的文本启发式方法，修复 #95279 |
| [#95620](https://github.com/openclaw/openclaw/pull/95620) | P2 | **feat(dreaming): diary 语言配置选项** — 支持非英语 Dream Diary 条目 |
| [#95614](https://github.com/openclaw/openclaw/pull/95614) | P2 | **fix(memory-wiki): 重注入时保留人工 notes 区块** — 解决 memory-wiki 源重新导入时用户备注被覆盖的痛点 |
| [#95595](https://github.com/openclaw/openclaw/pull/95595) | P2 | **fix(memory-core): 健康零命中搜索跳过强制同步** — 避免零结果时触发不必要的全量 sync |
| [#95479](https://github.com/openclaw/openclaw/pull/95479) | P2, ready | **feat(feishu): 卡片 footer 可配置** — 允许部署级自定义飞书卡片底部元数据 |

**整体进展评估**：PR 待合并池高达 479 条，绝大多数 PR 处于 "waiting on author" 或 "needs proof" 状态，合并速率（21/500）远低于社区贡献速度。项目处于**快速积累但消化不足**的状态。

---

## 4. 社区热点

以下按评论数排序，展示最受关注的活跃 Issue：

### 🔴 最高关注（P1, diamond lobster, 评论数 10+）

| Issue | 评论数 | 核心问题 |
|---|---|---|
| **[#86538](https://github.com/openclaw/openclaw/issues/86538)** | 12 | **Session 写锁超时阻塞子 agent 投递通道** — JSONL write-lock 超时导致 main/cron-nested/subagent 三条通道全部阻塞，且缺乏足够的可诊断信息 |
| **[#86519](https://github.com/openclaw/openclaw/issues/86519)** | 10 | **Telegram 重复回复 2-10x（5.20 回归）** — 升级后 agent 对同一用户消息发送多条相同回复（已部分缓解但未彻底修复） |

### 🟠 高度关注（评论数 8）

| Issue | 核心问题 |
|---|---|
| **[#90354](https://github.com/openclaw/openclaw/issues/90354)** | 功能请求：预 compaction memory flush 需要硬性上限/验证护栏，包括写入大小限制和静默失败处理 |
| **[#92043](https://github.com/openclaw/openclaw/issues/92043)** | **180s compaction 超时**：原本 900s 降为 180s 后，大型会话每次 compaction 必然失败，从无超时变成 100% 失败 |

### 🟡 活跃讨论（评论数 7）

| Issue | 核心问题 |
|---|---|
| **[#92460](https://github.com/openclaw/openclaw/issues/92460)** | isolated cron 完成通知器丢弃 delivery.channel — 即使显式设置 `delivery.channel: "webchat"` 仍报 "Channel is required" |
| **[#92076](https://github.com/openclaw/openclaw/issues/92076)** | 子 agent 完成投递在 requester 会话已不活跃时 session transcript 被锁定导致失败 |
| **[#92415](https://github.com/openclaw/openclaw/issues/92415)** | AgentSession 内 model 快照在 `/model` switch 后未刷新，影响 contextWindow、reasoning、branch summary 等 8 个读操作 |
| **[#86214](https://github.com/openclaw/openclaw/issues/86214)** | Codex app-server client 在图像/工具请求中途中止（logs_2.sqlite 太大时） |
| **[#90325](https://github.com/openclaw/openclaw/issues/90325)** | **Matrix 频道全面崩溃（v2026.6.1 回归）**：TypeError 每次入站消息都触发，👍 2 |

### 📌 今日新开高价值 Issue

| Issue | 核心问题 |
|---|---|
| **[#95495](https://github.com/openclaw/openclaw/issues/95495)** | 🔥 **2026.6.9 静默迁移 memory store**：升级后向量存储路径变更无提示，强制全量 re-embed，👍 1 |
| **[#95248](https://github.com/openclaw/openclaw/issues/95248)** | release_lane 在被live worker持有时是 no-op，Telegram 入站事件被阻塞直到 gateway 重启 |

**诉求分析**：社区的核心诉求集中在三个方向——
1. **投递可靠性**（子 agent、cron、Telegram、Matrix 的投递路径）
2. **Session 状态一致性**（模型切换后状态不刷新、写锁超时、compaction 超时）
3. **回归防护**（多个 v2026.6.x 升级引起的静默破坏性变更）

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 严重（数据丢失 / 回归 / 崩溃循环）

| Issue | 问题 | 有 Fix PR | 说明 |
|---|---|---|---|
| [#95495](https://github.com/openclaw/openclaw/issues/95495) | 2026.6.9 静默迁移 memory store | ❌ | **最新发现，影响所有升级用户** |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session 写锁超时阻塞所有投递通道 | ❌ | 影响范围广，持续 1 个月未解决 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 重复回复（5.20 回归） | ⏳ linked PR open | 部分缓解但未根除 |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 180s compaction 超时导致大会话必失败 | ❌ | 需要架构级重设计 |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | Matrix 频道全量崩溃 | ❌ | 严重回归 |
| [#93375](https://github.com/openclaw/openclaw/issues/93375) | Telegram polling 静默崩溃循环后健康监控无法恢复 | ❌ | |
| [#95248](https://github.com/openclaw/openclaw/issues/95248) | release_lane no-op 永久阻塞入站事件 | ❌ | |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) | **内部 reasoning 泄露给用户（P6.5 安全回归）** | ❌ | **安全风险** |
| [#92241](https://github.com/openclaw/openclaw/issues/92241) | 回滚后 gateway 持有 stale 模块路径，入站消息静默丢弃 | ⏳ linked PR open | |

### 🟡 P1 — 功能失效

| Issue | 问题 |
|---|---|
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | 预置 SOUL.md/IDENTITY.md 导致 bootstrap 首次运行前自动完成并删除 BOOTSTRAP.md |
| [#92415](https://github.com/openclaw/openclaw/issues/92415) | `/model` switch 后 session model 快照未刷新 |
| [#92094](https://github.com/openclaw/openclaw/issues/92094) | message tool `action=send` 返回 "unsupported channel: telegram" |
| [#90840](https://github.com/openclaw/openclaw/issues/90840) | 子 agent 完成结果以 raw worker 输出投递给用户（应为摘要） |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | `sessions_yield` 回复未投递，auto-announce mirror 投递了错误的子 agent 摘要 |
| [#90639](https://github.com/openclaw/openclaw/issues/90639) | compaction safeguard 模式允许 session 增长到 context ceiling，Slack 上无恢复提示 |
| [#90082](https://github.com/openclaw/openclaw/issues/90082) | active-memory 熔断过激 + fallback prompt 污染主 session |
| [#91212](https://github.com/openclaw/openclaw/issues/91212) | gateway 重启后 delivery-recovery 0 recovered，channel transport 未就绪即尝试投递 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 对应 PR | 信号强度 |
|---|---|---|---|
| **子 agent 进度可见性（Discuss）** | — | [#95604](https://github.com/openclaw/openclaw/pull/95604) | 🟢 有实施中 PR |
| **Memory flush 写入护栏** | [#90354](https://github.com/openclaw/openclaw/issues/90354) | ⚪ 待排期 | 🟡 P2 功能请求 |
| **Topic-session 多话题会话族** | [#90916](https://github.com/openclaw/openclaw/issues/90916) | ⚪ | 🟡 P2 |
| **可配置 compaction 超时/分段进度** | [#92043](https://github.com/openclaw/openclaw/issues/92043) | ⚪ | 🟡 架构级问题，可能需要大重构 |
| **子 agent 在 cron 隔离会话中的编排支持** | [#92369](https://github.com/openclaw/openclaw/issues/92369) | ⚪ | 🟡 P2 |
| **飞书卡片 footer 自定义** | — | [#95479](https://github.com/openclaw/openclaw/pull/95479) | 🟢 ready for review |
| **Dreaming 多语言支持** | — | [#95620](https://github.com/openclaw/openclaw/pull/95620) | 🟢 有新 PR |
| **Kubernetes 文档改进** | [#91455](https://github.com/openclaw/openclaw/issues/91455) | ⚪ | 🟢 P3 文档类 |

**路线图判断**：子 agent 可见性、飞书定制、codex 中间件修复等方向已有 PR 推进，有望在下一稳定版落地；session 写锁超时和 compaction 架构问题需要更长周期的设计讨论。

---

## 7. 用户反馈摘要

### 🔴 不满意 / 痛点

| 痛点 | 来源 Issue |
|---|---|
| **"升级即踩坑"**：多次升级引入静默破坏性变更（memory store 路径迁移无提示、Matrix 崩溃、Telegram 重复回复），用户对 v2026.6.x 系列信任度下降 | [#95495](https://github.com/openclaw/openclaw/issues/95495), [#90325](https://github.com/openclaw/openclaw/issues/90325), [#86519](https://github.com/openclaw/openclaw/issues/86519) |
| **子 agent / cron 投递路径极不稳定**：多个独立报告指向同一模式——子 agent 完成后消息丢失或投递错误对象 | [#92076](https://github.com/openclaw/openclaw/issues/92076), [#90944](https://github.com/openclaw/openclaw/issues/90944), [#90840](https://github.com/openclaw/openclaw/issues/90840), [#92460](https://github.com/openclaw/openclaw/issues/92460) |
| **Compaction 超时/防护失效导致高频 "Something went wrong"** | [#92043](https://github.com/openclaw/openclaw/issues/92043), [#90639](https://github.com/openclaw/openclaw/issues/90639) |
| **Gateway 在 multi-session/multi-agent 负载下变慢或超时** | [#92057](https://github.com/openclaw/openclaw/issues/92057) |
| **Windows native CLI gateway 无法作为计划任务稳定运行** | [#91144](https://github.com/openclaw/openclaw/issues/91144) |

### ✅ 满意 / 肯定

- **Telegram 富文本增强**（v2026.6.9）被期望解决长期存在的格式保留问题
- **子 agent 进度可见性 PR [#95604](https://github.com/openclaw/openclaw/pull/95604)** 受到社区正面反馈，Discord 用户长期以来的"长任务即死"体验有望改善

### 📋 典型使用场景

- 多 agent 并行 cron 编排（[#92369](https://github.com/openclaw/openclaw/issues/92369)）
- Codex/OAuth 集成使用大型上下文会话（[#90925](https://github.com/openclaw/openclaw/issues/90925), [#89278](https://github.com/openclaw/openclaw/issues/89278)）
- Kubernetes 上部署（[#91455](https://github.com/openclaw/openclaw/issues/91455)）
- Linux 本地 memory embedding 生产环境（[#90414](https://github.com/openclaw/openclaw/issues/90414), [#92582](https://github.com/openclaw/openclaw/issues/92582)）
- 长时间后台任务 + cron 监控（[#88087](https://github.com/openclaw/openclaw/issues/88087)）

---

## 8. 待处理积压

### 长期未响应的高优先级 Issue（P1, diamond lobster，创建超过 14 天仍无固定解决方案）

| Issue | 创建日期 | 持续天数 | 说明 |
|---|---|---|---|
| **[#86214](https://github.com/openclaw/openclaw/issues/86214)** | 2026-05-24 | **29 天** | Codex app-server client 中途中断 |
| **[#86612](https://github.com/openclaw/openclaw/issues/86612)** | 2026-05-25 | **28 天** | Docker gateway 容器在 OPENCLAW_SANDBOX=1 时重启循环 |
| **[#88087](https://github.com/openclaw/openclaw/issues/88087)** | 2026-05-29 | **24 天** | 长期后台任务 UX 差 + cron wake 失败 |
| **[#89374](https://github.com/openclaw/openclaw/issues/89374)** | 2026-06-02 | **20 天** | compaction 成功报告但 session 实际不可恢复 |
| **[#90082](https://github.com/openclaw/openclaw/issues/90082)** | 2026-06-04 | **18 天** | active-memory 熔断过激 + 污染主 session |
| **[#90925](https://github.com/openclaw/openclaw/issues/90925)** | 2026-06-06 | **16 天** | Codex/OAuth 子 agent compaction 失败路由至错误 API |
| **[#91009](https://github.com/openclaw/openclaw/issues/91009)** | 2026-06-06 | **16 天** | Codex PreToolUse hook relay CPU 过载 + 阻塞 gateway RPC |
| **[#90639](https://github.com/openclaw/openclaw/issues/90639)** | 2026-06-05 | **17 天** | safeguard compaction 模式允许 session 增长至上下文上限 |

### 长期未合并的高评 PR

| PR | 创建日期 | 持续天数 | 说明 |
|---|---|---|---|
| **[#67080](https://github.com/openclaw/openclaw/pull/67080)** | 2026-04-15 | **68 天** | feat(plugins): 从 manifest 缩小 gateway 路由加载——大型架构 PR |
| **[#69346](https://github.com/openclaw/openclaw/pull/69346)** | 2026-04-20 | **63 天** | fix(embedded-runner): 空流配置错误的可操作诊断信息 |
| **[#75554](https://github.com/openclaw/openclaw/pull/75554)** | 2026-05-01 | **52 天** | [codex] 插件任务生命周期 API |
| **[#78836](https://github.com/openclaw/openclaw/pull/78836)** | 2026-05-07 | **46 天** | NVIDIA NIM OpenAI-compat 端点 max_tokens 修复 |
| **[#78857](https://github.com/openclaw/openclaw/pull/78857)** | 2026-05-07 | **46 天** | perf(agents): trim agent tool helper queues |

### ⚠️ 关键积压风险

- **Issue 关闭率仅 4.4%**（22/500），且评论最多的 50 条 Issue 全部处于 OPEN 状态
- **多个 P1 regression 超过 2 周无任何 maintainer review 或方向确认**
- **PR 合并瓶颈**：大量 PR 卡在 "waiting on author"（贡献者无法推进）和 "needs proof"（需要实际运行验证），维护者资源严重不足

---

> **日报总结**：OpenClaw 社区贡献活跃度极高，但维护端消化能力严重滞后。当前最紧急的风险点是 v2026.6.9 的静默 memory store 迁移和 v2026.6.1 的 Matrix 全量崩溃回归。建议维护者优先确认 memory 迁移路径的向前兼容方案，并制定 PR 积压清理计划——当前 479 条待合并 PR 的积压已开始反噬社区贡献意愿。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**日期：2026-06-22 | 分析范围：14 个活跃开源项目**

---

## 1. 生态全景

2026 年 6 月，个人 AI 助手/自主智能体开源生态处于**高并发迭代与架构分化并存**的成熟期。整体呈现三个特征：

- **交付可靠性成为核心议题**——子 agent 投递、session 状态一致性、跨渠道消息路由等"最后一公里"问题在多个项目中集中爆发（OpenClaw、Hermes、ZeroClaw），标志着生态从"功能堆叠"进入"质量巩固"阶段。
- **安全边界问题浮出水面**——多 agent 协作中的权限绕过、路径穿越、审批流程漏洞在 NanoClaw、LobsterAI、NanoBot 等项目中接连被安全研究员披露，A2A 和 MCP 协议的安全加固将成为下一阶段硬仗。
- **移动端适配和跨平台体验成为新战场**——CoPaw、PicoClaw、IronClaw 集中推进移动端 UI 和跨平台构建修复，Web-first 向 Mobile-first 的迁移正在加速。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 待合并 PR | Issue 关闭率 | 健康度评估 |
|---|---:|---:|---:|---:|---:|---|
| **OpenClaw** | 500 | 500 | 2（含 1 beta） | 479 | 4.4% | 🔴 高活跃/积压严重 |
| **Hermes Agent** | 50 | 50 | 0 | — | — | 🟢 活跃/稳健 |
| **NanoBot** | 10 | 35 | 0 | 21 | 30% | 🟢 高响应/健康 |
| **PicoClaw** | 5 | 32 | 1 (Nightly) | 3 | 40% | 🟢 积压清理中 |
| **CoPaw** | 16 | 32 | 0 | 30 | 18.8% | 🟡 活跃/积压偏高 |
| **ZeroClaw** | 41 | 50 | 0 | 40 | 26.8% | 🟡 活跃/积压中等 |
| **IronClaw** | 3 | 29 | 0 | 15 | — | 🟢 工程推进期 |
| **NanoClaw** | 2 | 6 | 0 | 3 | — | 🟡 安全响应待启 |
| **LobsterAI** | 15 | 0 | 0 | 0 | 100%（stale） | 🔴 低活跃/停滞 |
| **NullClaw** | 1 | 0 | 0 | 0 | 0% | 🟡 静默期 |
| **ZeptoClaw** | 1 | 1 | 0 | 0 | 100% | 🟢 稳态维护 |
| **TinyClaw** | 0 | 0 | 0 | 0 | — | ⚪ 无活动 |
| **Moltis** | 0 | 0 | 0 | 0 | — | ⚪ 无活动 |

> **注**：TinyClaw 和 Moltis 过去 24 小时无活动，未纳入深度分析。

---

## 3. OpenClaw 在生态中的定位

### 社区规模优势

OpenClaw 是生态中**绝对活跃度最高**的项目——单日 Issues 和 PR 更新各达 500 条，远超第二名（Hermes 50 条）一个数量级。其生态定位可概括为：

| 维度 | OpenClaw | 最接近竞争者 | 差距 |
|---|---|---|---|
| 单日 Issue 量 | 500 | Hermes 50 | 10x |
| 单日 PR 量 | 500 | ZeroClaw 50 | 10x |
| 待合并 PR 积压 | 479 | CoPaw 30 | 16x |
| 渠道覆盖 | Telegram/Discord/Matrix/Feishu/Codex | ZeroClaw（+Mattermost/NapCat） | 相当 |
| 版本发布节奏 | 日级（6.9 + 6.10-beta.1） | PicoClaw（Nightly） | 相当 |

### 技术路线差异

- **OpenClaw**：以 TypeScript/Node.js 为核心，采用 plugin 架构扩展渠道和技能，强调"一个 agent、全渠道覆盖"。其 session-state 和 compaction 架构复杂度最高，但当前可靠性问题也最突出。
- **Hermes Agent**：Rust + TypeScript 混合架构，侧重浏览器自动化和 MCP 协议集成，Desktop 客户端（Electron）是一体化差异化优势。
- **ZeroClaw**：Rust 原生实现，强调性能和安全性，RFC 治理流程最成熟，但社区规模仅为 OpenClaw 的 1/10。
- **NanoBot**：Python 优先，轻量级框架定位，安全响应速度最快（高危漏洞数小时内即有 PR）。

### 核心风险

OpenClaw 的**积压风险**在生态中最显著——479 条待合并 PR 和 4.4% 的 Issue 关闭率已开始反噬社区贡献意愿。相比之下，NanoBot（14/35 PR 合并率）和 PicoClaw（29/32）的吞吐效率更健康。

---

## 4. 共同关注的技术方向

以下方向在**3 个及以上项目**中同时涌现：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **子 Agent / Cron 投递可靠性** | OpenClaw、Hermes、ZeroClaw | 子 agent 完成通知丢失、cron 投递通道阻塞、requester 会话不活跃时投递失败 |
| **Session 状态一致性** | OpenClaw、Hermes、CoPaw | 模型切换后快照不刷新、写锁超时阻塞全通道、compaction 超时导致连锁失败 |
| **跨渠道消息格式保留** | OpenClaw、Hermes、NanoBot、CoPaw | Telegram 富文本/HTML 渲染、Markdown 表格保留、流式输出格式一致性 |
| **MCP 协议安全加固** | NanoClaw、NanoBot、Hermes | `enabledTools` 白名单绕过、审批流程参数隐藏、MCP 服务器熔断 |
| **移动端 / 跨平台体验** | CoPaw、PicoClaw、IronClaw、Hermes | 移动端侧边栏适配、Windows 安装体验、Docker 兼容性 |
| **Memory/上下文管理** | OpenClaw、ZeroClaw、Hermes | 向量存储迁移、compaction 护栏、memory consolidation 工具化 |
| **多 Provider 兼容性** | OpenClaw、ZeroClaw、Hermes、NanoBot | Gemini CLI 下线迁移、DeepSeek 消息净化、OpenAI 兼容 provider 工具调用 |
| **安全审计与漏洞修复** | NanoClaw、LobsterAI、NanoBot | A2A 路径穿越、SSRF 防护退化、MCP 权限绕过 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构 | 差异化优势 |
|---|---|---|---|---|
| **OpenClaw** | 全渠道 AI Agent 操作系统 | 多渠道重度用户、自托管玩家 | TS/Node.js + Plugin | 渠道覆盖最广、生态最大 |
| **Hermes Agent** | 一体化 AI 智能体（含 Desktop） | 桌面用户、浏览器自动化场景 | Rust + TS + Electron | 浏览器自动化、mem0 记忆、Desktop 客户端 |
| **ZeroClaw** | 高性能 Rust Agent 框架 | 安全敏感用户、企业部署 | 纯 Rust | RFC 治理、OTel 追踪、技能注册表 |
| **NanoBot** | 轻量级 Python Agent 框架 | 快速原型开发者、Python 生态 | Python | 部署简单、安全响应快、TTS 多 Provider |
| **CoPaw** | 多 Agent 协作平台 | 团队/企业级用户 | Go + Web UI | 移动端 UI 最成熟、Slack 集成 |
| **PicoClaw** | 极简嵌入式 Agent | 硬件/机器人开发者、隐私用户 | Rust + 极简设计 | 极小二进制体积、Factory Reset、跨平台 |
| **IronClaw** | 学习驱动型 Agent 平台 | NEAR 生态用户、DeFi 用户 | Rust + WASM | Reborn 学习系统、Composio 集成 |
| **NanoClaw** | 多 Agent 协作 + A2A 协议 | 多 Agent 系统开发者 | — | A2A 协议原生支持、MCP 审批流程 |
| **LobsterAI** | 企业级 AI Agent 工作台 | 企业内部用户、IM 集成 | — | 多 IM 渠道（钉钉/飞书/QQ）、技能市场 |

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代期（日级发布 / 高 PR 吞吐）

| 项目 | 特征 |
|---|---|
| **OpenClaw** | 日级发布节奏，但积压严重，需消化 |
| **NanoBot** | 高响应速度，安全修复当日合并 |
| **PicoClaw** | Nightly 构建持续，积压清理显著 |
| **CoPaw** | 移动端 PR 集中涌入，v1.1.12 回归修复中 |

### 🟡 质量巩固期（周级节奏 / 重点修复）

| 项目 | 特征 |
|---|---|
| **Hermes Agent** | mem0 自托管落地，AntiGravity 迁移待完成 |
| **ZeroClaw** | 0.8.0 持续迭代，测试覆盖补全，S1 Bug 清理中 |
| **IronClaw** | Reborn 学习系统逐层推进，CI 重构 |
| **NanoClaw** | 安全审计响应待建立，日常维护正常 |

### 🔴 低活跃 / 停滞期

| 项目 | 特征 |
|---|---|
| **LobsterAI** | 零 PR，Issue 全部 stale 关闭，安全 Issue 无响应 |
| **NullClaw** | 仅 1 个 Bug 报告，无代码提交 |
| **ZeptoClaw** | 稳态维护，基础设施微调 |
| **TinyClaw / Moltis** | 无活动 |

---

## 7. 值得关注的趋势信号

### 信号 1：Agent 交付可靠性成为"最后一公里"决胜点

**证据**：OpenClaw（子 agent 投递、写锁超时）、Hermes（cron 崩溃、Desktop 白屏）、ZeroClaw（消息队列串台）三大头部项目同时爆发投递层问题。

**启示**：Agent 从"能跑"到"跑得稳"的跨越，需要在**消息总线、状态机、背压处理**三个层面进行架构级投入。这将是 2026 下半年的技术竞争焦点。

### 信号 2：多 Agent 协作安全从"可选"变"必选"

**证据**：NanoClaw（A2A 路径穿越 + MCP 审批绕过）、NanoBot（MCP `enabledTools` 绕过）、LobsterAI（SSRF 防护退化）三个项目在**同一周**被同一安全研究员披露高危漏洞。

**启示**：随着 A2A 和 MCP 协议成为多 Agent 协作标准，**沙箱隔离、路径校验、审批流程完整性**将成为项目安全基线。建议所有涉及多 Agent 协作的项目进行专项安全审计。

### 信号 3：Gemini CLI 下线引发供应链风险预警

**证据**：Hermes Agent 的 Gemini CLI 于 6 月 18 日停用，社区涌入大量 Issue，迁移 PR 积压超 30 天未合并。OpenClaw 的 Codex 集成也面临类似的中途断开问题。

**启示**：AI Agent 对外部 LLM Provider 的依赖构成**单点故障风险**。建议开发者：1) 实现 Provider 热切换；2) 建立 fallback 链路；3) 监控 Provider 服务状态变更。

### 信号 4：移动端体验成为用户获取关键

**证据**：CoPaw 单日涌现 8+ 个移动端适配 PR，PicoClaw 推进 Web 端流式聊天重构，Hermes 报告 Desktop 端多平台崩溃。

**启示**：AI Agent 的使用场景正从"桌面开发者"扩展到"移动优先用户"。**响应式设计、触摸交互、移动端性能优化**将成为项目的竞争力分水岭。

### 信号 5：Rust 重写趋势加速

**证据**：ZeroClaw、IronClaw、PicoClaw、Hermes 四个项目以 Rust 为核心语言，在性能、安全、二进制体积方面形成对 TypeScript 项目的显著优势。OpenClaw 的积压问题部分可归因于 Node.js 在高并发场景下的吞吐瓶颈。

**启示**：对于需要**长期运行、高并发、安全敏感**的 Agent 项目，Rust 正在成为事实标准。TypeScript 项目可能需要通过 Rust 扩展（如 NAPI-RS）来弥补性能短板。

---

> **报告总结**：个人 AI 助手开源生态正处于从"功能竞赛"到"质量深耕"的转型期。OpenClaw 凭借社区规模领先，但积压风险最严峻；NanoBot 和 PicoClaw 以高效吞吐和精简架构形成差异化；ZeroClaw 和 IronClaw 代表 Rust 重写趋势；Hermes 的一体化 Desktop 路线独树一帜。**交付可靠性、多 Agent 安全、移动端体验**将是下一阶段的三条主线竞争赛道。

---

*报告由 OWL 基于 2026-06-22 各项目 GitHub 公开数据生成*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-22

---

## 1. 今日速览

过去 24 小时，NanoBot 社区保持高活跃度：**35 个 PR 更新（21 个待合并，14 个已合并/关闭）、10 个 Issue 更新（7 个新开/活跃，3 个已关闭）**，无新版本发布。今日开发工作集中在三个方向：**安全修复（MCP `enabledTools` 绕过漏洞）**、**流式响应中的 `tool_use` 去重**、以及 **WebUI 环境变量解析回归修复**。同时出现了两项值得关注的新 Bug 报告——并发场景下 hook 共享状态竞争、以及重复 `tool_use` id 导致会话永久损坏。整体来看，项目处于密集迭代期，安全性和稳定性是当前阶段的优先焦点。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

今日共 **14 个 PR 合并或关闭**，以下为关键进展：

| 变更类型 | PR | 核心内容 |
|---|---|---|
| **🐛 回归修复** | [#4323](https://github.com/HKUDS/nanobot/pull/4323) | 转录配置中的环境变量 `${VAR}` 提前解析，修复转录功能因找不到 API Key 而静默失败的回归 |
| **🐛 回归修复** | [#4324](https://github.com/HKUDS/nanobot/pull/4324) | WebUI 设置读取路径：环境变量模板未解析导致误判 Provider 未配置 |
| **🐛 回归修复** | [#4325](https://github.com/HKUDS/nanobot/pull/4325) | WebUI 设置更新路径：环境变量模板未解析导致 Provider 设置对比逻辑出错 |
| **✨ 功能新增** | [#4316](https://github.com/HKUDS/nanobot/pull/4316) | TTS 配置系统新增，支持 OpenAI、Groq (Orpheus)、ElevenLabs 多 Provider，WebUI 可配置 |

**推进评估**：环境变量解析回归的集中修复（PR #4323–#4325）显著提升了 WebUI 和转录模块的配置可靠性。TTS 多 Provider 支持（#4316）标志着 NanoBot 在语音交互方向迈出重要一步，为后续 Agent 语音能力奠定基础。

---

## 4. 社区热点 🔥

### Issue #4442 — Duplicate `tool_use` ids 导致会话永久损坏
- **链接**: [HKUDS/nanobot#4442](https://github.com/HKUDS/nanobot/issues/4442)
- **热度信号**: 报告后数小时内已有两个独立 PR（#4443、#4444）跟进修复
- **分析**: 使用 Anthropic 流式输出时，同一个 `tool_use` block 可能被重复持久化到会话历史，此后每轮请求都因 "tool_use ids must be unique" 被拒绝 400，整个会话被不可逆地破坏。这是**破坏性 Bug**，严重影响 Anthropic 系 Provider 用户的稳定性。社区响应迅速。

### Issue #4434 / #4435 — MCP `enabledTools` 白名单绕过安全漏洞
- **链接**: [HKUDS/nanobot#4434](https://github.com/HKUDS/nanobot/issues/4434) | [HKUDS/nanobot#4435](https://github.com/HKUDS/nanobot/issues/4435)
- **热度信号**: 同一作者 YLChen-007 在同一天提交两份安全审计报告
- **分析**: `enabledTools: []`（拒绝所有工具）仅对 `list_tools()` 生效，但 MCP Resources 和 Prompts 仍被无条件注册到模型中，造成权限绕过。对于配置了严格白名单的用户，这意味着未授权的资源/提示内容可能被模型访问。**安全类 Issue**，优先级高。目前已有一个 PR #4436 跟进修复。

### Issue #4431 — Heartbeat 独立 Model 配置请求
- **链接**: [HKUDS/nanobot#4431](https://github.com/HKUDS/nanobot/issues/4431)
- **分析**: 用户希望 Heartbeat 服务能使用更轻量/更便宜的模型，而非绑定主 Agent 模型，以降低运行成本。这反映出 NanoBot 在**高频后台任务成本控制**方面的用户需求。

### Issue #4440 — 新增只读 `search_history` 工具
- **链接**: [HKUDS/nanobot#4440](https://github.com/HKUDS/nanobot/issues/4440)
- **分析**: 当前 `memory/history.jsonl` 中的对话摘要仅通过 memory skill 的 Markdown 文件间接召回，缺乏程序化检索手段。已有响应 PR #4439 跟进。反映用户对**历史记忆的 Agent 原生访问能力**有真实需求。

---

## 5. Bug 与稳定性 🐛

| 严重程度 | Issue | 描述 | Fix PR |
|---:|---|---|---|
| 🔴 **高** | [#4442](https://github.com/HKUDS/nanobot/issues/4442) | 流式响应重复 `tool_use` id → 400 → 会话永久失效 | ✅ [#4443](https://github.com/HKUDS/nanobot/pull/4443), [#4444](https://github.com/HKUDS/nanobot/pull/4444) |
| 🔴 **高** | [#4434](https://github.com/HKUDS/nanobot/issues/4434) / [#4435](https://github.com/HKUDS/nanobot/issues/4435) | MCP `enabledTools` 白名单绕过，Resources/Prompts 未过滤 | ✅ [#4436](https://github.com/HKUDS/nanobot/pull/4436) |
| 🟡 **中** | [#4408](https://github.com/HKUDS/nanobot/issues/4408) | `Nanobot.run()` 并发不安全：共享 `_extra_hooks` 竞争覆盖 | ❌ 尚无 PR |
| 🟡 **中** | [#4420](https://github.com/HKUDS/nanobot/issues/4420) | `estimate_prompt_tokens` 每轮冗余 tiktoken 编码，性能问题 | ❌ 尚无 PR |

**重点提醒**：Issue #4408（并发 Hook 竞争）虽已关闭，但属于需要关注的设计级问题。在多实例/并发运行场景下，共享 Hook 状态可能被互相覆盖，目前尚无修复 PR 跟进。

---

## 6. 功能请求与路线图信号 🛣️

| 方向 | Issue | 信号强度 | 已有进展 |
|---|---|---|---|
| **Telegram Rich Messages** | [#4413](https://github.com/HKUDS/nanobot/issues/4413) | 🟡 中 | 关联 Issue #4422 已关闭（对应 PR 可能已合并），支持 Telegram Bot API 10.1 的表格、任务列表、折叠块、数学公式渲染 |
| **History 搜索工具** | [#4440](https://github.com/HKUDS/nanobot/issues/4440) | 🟡 中 | PR #4439 已提交：新增只读 `search_history` 工具 |
| **Heartbeat 独立 Model** | [#4431](https://github.com/HKUDS/nanobot/issues/4431) | 🟡 中 | 尚无 PR，需求明确、实现路径清晰 |
| **Tool 结果微压缩可配置** | — | 🟢 低 | PR #4392 待合并，添加 `microcompactToolResults` 配置项 |
| **Tool 结果急切整合（Eager Consolidation）** | — | 🟢 低 | PR #4402 待合并，自动归档已完成对话片段到 `history.jsonl` |
| **WebUI Slash 命令激活 Skill** | — | 🟢 低 | PR #4284 待合并，`/skill <name>` 交互式 Skill 激活 |

**预判**：`search_history` 工具、Telegram Rich Messages 支持以及 Tool 微压缩配置化最有可能纳入下一版本，因为它们已有高质量 PR 或 Issue 已关闭。Heartbeat 独立 Model 配置需求清晰、实现简单，但尚未有人认领。

---

## 7. 用户反馈摘要 💬

**痛点 / 不满意：**

- **并发安全性被忽视**：用户 waelantar 发现 `Nanobot.run()` 在并发场景下共享可变 Hook 状态（#4408），这类问题在 Agent 框架中可能是隐蔽性高、影响面大的隐患。
- **安全配置与实际行为不符**：白名单用户严格配置 `enabledTools: []` 后仍暴露了 Resources 和 Prompts（#4434/#4435），用户对"配置即安全"的预期被打破。
- **流式输出稳定性**：重复 `tool_use` id（#4442）源于流组装层面的缺陷，用户直到会话完全失效才察觉问题，诊断成本极高。
- **Token 计算冗余拖慢响应**：自建数字员工项目的用户发现 `estimate_prompt_tokens` 每轮重新编码不变的（#4420），说明在大规模工具注册场景下性能瓶颈明显。

**满意 / 使用场景：**

- 用户自建项目（如 **nanobee 数字员工**），并在上游项目中发现性能优化点后主动回馈社区（#4420），说明 NanoBot 正被用作实际生产系统的基础框架。
- 用户积极探索 Telegram Bot API 10.1 最新 Rich Message 能力（#4413），希望将复杂文档原生渲染到聊天中。

---

## 8. 待处理积压 📋

以下 Issue/PR 长期未响应，建议维护者关注：

| 类型 | 编号 | 创建日期 | 状态 | 说明 |
|---|---|---|---|---|
| Issue | [#1011](https://github.com/HKUDS/nanobot/issues/1011) | 2026-02-22 | stale / open | Mattermost 频道支持请求，👍4。用户对 Discord/Telegram/Slack 的隐私和商业顾虑明确，Mattermost 是自建替代方案，已有 4 个月无进展 |
| PR | [#4092](https://github.com/HKUDS/nanobot/pull/4092) | 2026-05-29 | open | OpenAI 兼容工具调用解析修复，涉及 #4059/#4061，创建已近一个月 |
| PR | [#3869](https://github.com/HKUDS/nanobot/pull/3869) | 2026-05-16 | open | DeepSeek 消息净化（null content → 400 错误、"(empty)" 占位符泄漏），已近一个半月 |
| PR | [#4271](https://github.com/HKUDS/nanobot/pull/4271) | 2026-06-10 | open | 只读会话跳过 LLM 处理，对 Cloud Demo/Squad 类场景非常有用 |
| PR | [#4225](https://github.com/HKUDS/nanobot/pull/4225) | 2026-06-06 | open | Cron 任务静默模式 + `lock_recipient`，适合作为后台监控任务的抑制机制 |

**关注度最高的是 PR #3869**（DeepSeek 消息修复），时间跨度最长且 DeepSeek 是国内用户高频使用的 Provider，积压可能影响大范围用户。Issue #1011 虽已 stale，但 Mattermost 需求背后的自建部署诉求值得社区回应。

---

> **📊 项目健康度评估**：NanoBot 今日处于**高活跃、高响应**状态。安全修复和稳定性 Bug 的修复速度令人满意，14 个 PR 合并/关闭说明维护团队吞吐量强劲。积压中 DeepSeek 相关修复（PR #3869）和 Mattermost 频道支持（Issue #1011）是社区长期等待的痛点，建议优先处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-22

---

## 1. 今日速览

Hermes Agent 今日处于**高活跃度维护期**，24 小时内 Issue 与 PR 更新各达 50 条，反映出社区参与度和贡献量均处于较高水平。项目未发布新版本，核心工作集中在 bug 修复、安全加固及面向下一版本的 PR 合并上。多条 Gemini CLI 下线相关的 Issue/PR 在社区持续发酵，成为当日最热话题。整体项目健康度良好，维护者响应速度中等偏上。

---

## 2. 版本发布

**无新版本发布。** 最近一次版本为 v0.16.0，多个正在进行的 PR 明显在为 v0.17.0 或下一个补丁版本做积累。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

当日共合并/关闭 34 条 PR，以下为重点：

| PR | 说明 |
|---|---|
| **#50479** | **feat(mem0): 自托管支持** — 允许通过 `MEM0_HOST` 配置将 mem0 插件指向自托管实例而非云端，解决了自托管用户的核心痛点。这是社区多轮努力的最终落地版本。 |
| **#15008** | **fix(browser): 浏览器守护进程 SIGTERM→SIGKILL 周期性孤儿清理** — 提升了浏览器工具在代理异常退出后的资源清理可靠性。 |
| **#49623** | **fix(mem0): self-hosted 实例 httpx wrapper** — 修复 mem0 插件忽略 host 配置始终请求云端 API 的问题。 |
| **#9488, #20185, #31209, #21601, #27200, #30902** | 多条 mem0 自托管支持相关 PR 密集合并，**标志着 mem0 完整自托管方案在今日终于落地**。 |
| **#13377** | feat(mem0): 初始自托管支持，经过数月的增量迭代今日多条 PR 同步关闭。 |

**整体判断**：今日最大的项目进展是 **mem0 自托管方案从提案到收敛**，功能链条基本完整。浏览器工具的安全性与健壮性也有所提升。

---

## 4. 社区热点

### 🔥 Issue #45500 — Matrix 纯文本消息绕过 E2EE 加密（6 条评论）
**[CLOSED · P1 · security]**
文件上传路径会检查 `is_encrypted()` 并对附件加密，但文本消息路径直接调用 `_client.send_message_event()` 不做任何加密检查。在已加密房间中，纯文本消息将以明文传输。这是今日评论最多的 Issue，标签已被标记为 `sweeper:cannot-reproduce`，但该问题的安全隐患值得关注。

### 🔥 Issue #8950 — 新增缺失消息渠道（IRC、Google Chat、LINE、Nostr、Twitch、QQBot）（5 条评论）
**[OPEN · P3 · feature]**
社区成员对比 OpenClaw 与 Hermes 的渠道覆盖矩阵，列出了 Hermes 目前缺失的多个渠道。这反映了社区对**多渠道统一接入平台**的强烈诉求，是路线图上长期悬而未决的议题。

### 🔥 Issue #14327 — 逐平台模型配置（4 条评论）
**[OPEN · P3 · feature]**
用户希望为每个消息通道配置不同的底层模型（如飞书用 mimo-v2.5，Telegram 用 GPT-4），当前只能在会话级别通过 `/model` 命令切换。这是企业级多租户使用场景的关键需求。

### 🔥 Issue #44637 — Skills 运行时强制验证门（4 条评论）
**[OPEN · P3 · feature]**
目前 Skills 的 `Verification` 章节只是 prompt 级别的引导，执行依赖于模型"自愿"遵守。建议引入运行时强制验证，对代码变更、部署、文件生成等高风险操作做确定性检查。这是**从"依赖模型自觉"到"架构级安全保障"**的重要思路升级。

### 🔥 Issue #29294 — Gemini CLI / Code Assist 服务于消费级用户下线（3 条评论，👍8）
**[CLOSED · P2]**
Google 于 2026-06-18 正式将 Gemini CLI 迁移至 Antigravity CLI，免费/付费消费级用户的请求全部停止响应。这是当日点赞最多的 Issue，影响力广泛。

> **关联**：Issue #49701、#49705、#50338、#44943 均为此事件的延伸报道或重复 Issue，已被合并关闭。**Issue #44943**（👍5）明确提出"在 Gemini CLI 废弃前接入 AntiGravity"，但尚未有合并的 PR 实现此迁移。

---

## 5. Bug 与稳定性

### 🔴 严重（P1）

| Issue | 摘要 | Fix PR |
|---|---|---|
| **#50449** | Desktop "Thinking" 开关回弹，`config.set reasoning` 写入游离顶层键导致配置失效 | 暂无公开 PR |
| **#49609** | Desktop 应用更新后 UI 白屏冻结，会话恢复 404 且无回退逻辑 | [CLOSED · sweeper:implemented-on-main] |
| **#47759** | Windows pip install `hermes-agent[matrix]` 报错，E2EE 扩展无法安装 | 暂无 PR，needs-repro |
| **#50090** | Windows bootstrap-installer 杀死 Gateway 后不再重启，Telegram bot 静默停服 | [CLOSED · P1] |
| **#48234** | cron 任务触发 LLM IndexError 导致 Gateway 崩溃后无法恢复（Feishu WebSocket 断连） | [CLOSED · sweeper:implemented-on-main] |

### 🟡 中等（P2）

| Issue | 摘要 | Fix PR |
|---|---|---|
| **#49983** | OpenRouter free 模型 HTTP 404，工具调用不支持 `:free` 层级的模型 | 暂无 PR |
| **#47048** | Telegram 富消息最终回复与已流式 Markdown V2 消息重复渲染（表格+列表双重显示） | [CLOSED · P2] |
| **#50438** | TUI 会话未记录 cwd，Desktop 将所有 TUI 会话归入默认工作区 | 暂无 PR |
| **#8919** | custom provider 配置在运行时被忽略，不命中自定义 base URL | [CLOSED · P2] |

### 🟢 低危（P3）及以下

- **#49614** — Desktop 切换会话时 `refText` crash，[CLOSED · sweeper:implemented-on-main]
- **#50167** — Hermes Desktop 关闭窗口应最小化到系统托盘而非完全退出，[CLOSED · duplicate]
- **#50460** — API 错误信息不可读，应转换为人类友好格式（如用量限额重置时间），[OPEN]

### 今日新开 Fix PR 亮点

- **PR #50483**：紧急修复 Ctrl+C 中断工具执行后，孤立 `tool_calls` 导致 DeepSeek/Anthropic 返回 HTTP 400 的问题。
- **PR #50482**：为每个 MCP stdio 服务器添加独立熔断器，防止一个崩溃的 MCP 服务器引发整个 MCP bridge 的重启风暴（关联 Issue #50394）。
- **PR #50480**：修复从思考型 provider 回退到严格 provider 时残留 `reasoning_content` 导致 400/422 的问题。

---

## 6. 功能请求与路线图信号

| 方向 | 代表 Issue/PR | 信号强度 | 判断 |
|---|---|---|---|
| **Gemini → AntiGravity 迁移** | #29294, #44943, #50338 | 🔴 紧急 | Gemini CLI 已于 6 18 停用，但迁移 PR 尚未完成，**将成为下一个版本的必做项** |
| **mem0 自托管** | #50479, #13377, #49623 等 | ✅ 已落地 | 今日多条 PR 合并，功能闭环完成 |
| **多渠道扩展** | #8950 | 🟡 开放讨论 | 跨越度大（IRC/Nostr/QQBot）但社区有明确需求，需架构层支持 |
| **逐平台模型配置** | #14327 | 🟡 中等 | PR 尚未出现，但技术可行性高 |
| **Skills 运行时验证门** | #44637 | 🟡 中等 | 需要架构设计，短期难以落地但长期方向正确 |
| **动态思考模式切换** | #50240, #50293 | 🟡 中等 | 两个同日重复 Issue（duplicate），诉求一致，涉及成本优化 |
| **cron 任务中启用 send_message 工具** | #20140 | 🟢 低 | 特定场景需求，PR 未出现 |

**预测**：下一版本的重点可能包括 AntiGravity 迁移（紧急）、MCP 连接稳定性改进（已有 PR 落地中）以及 mem0 自托管功能的正式发布说明。

---

## 7. 用户反馈摘要

### 核心痛点
1. **Gemini CLI 突然停用，用户陷入困境** — 大量用户涌入 Issue 报告 google-gemini-cli provider 已完全无法使用，且相关修复 PR 已积压超 30 天无人合并，社区不满情绪明显（Issue #49701 措辞激烈："This is not a feature request — it's a service-affecting bug"）。
2. **Desktop 版稳定性堪忧** — 多位用户报告更新（#49609）、会话切换（#49614）后的崩溃和白屏问题，Hermes Desktop 的 Electron 前端可靠性是突出短板。
3. **Windows 体验薄弱** — Windows installer 杀 Gateway 不重启 (#50090)、Matrix 扩展无法在 Windows pip install (#47759)，Windows 用户的从安装到运维链路存在多处断点。
4. **调试与诊断能力不足** — API 错误信息不友好（#50460）、custom provider 配置被忽略（#8919）等问题表明 Hermes 在"出错时的可观测性"方面需要加强。

### 满意场景
- mem0 自托管方案的持续迭代获得了多个社区贡献者的协同推进，体现出自托管/本地化部署是用户的真实刚需。
- Telegram、DingTalk（PR #49612）等平台适配 PR 活跃，多渠道适用性在稳步提升。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者优先关注：

| 条目 | 创建日期 | 状态 | 风险 |
|---|---|---|---|
| **Issue #8950** — 缺失多渠道支持 | 2026-04-13 | 开放中，70+ 天 | 社区长期诉求，持续累积讨论热度但无路线图确认 |
| **Issue #14327** — 逐平台模型配置 | 2026-04-23 | 开放中，60+ 天 | 企业级用户关键需求，迟迟无进展可能流失核心用户 |
| **Issue #41180** — Desktop 应用可能稀释 power-user 体验 | 2026-06-07 | 开放中，15 天 | 策略层面讨论，需要维护者主动参与定调 |
| **Issue #29294 + #44943** — AntiGravity 迁移 | 2026-05-20 / 2026-06-12 | 已标记 CLOSED 但无实际合并 PR | 实际迁移工作仍未完成，大量用户受影响 |
| **Issue #44637** — Skills 运行时强制验证 | 2026-06-12 | 开放中，10 天 | 重要的安全架构方向，需要早期设计反馈 |

---

> **总结**：Hermes Agent 当前处于活跃维护期，mem0 自托管是今日最大亮点，Gemini CLI 停用是最大风险。Desktop 客户端的端到端稳定性、Windows 兼容性、以及 AntiGravity 迁移是当前最紧迫的三项待办。建议维护者在下一个版本中优先处理 AntiGravity 迁移和 Desktop 崩溃修复，并对积压的长期功能需求给予明确的路线图响应或关闭说明。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-22

> **数据来源**: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日处于**高强度合并消化期**。过去 24 小时内 PR 活动极为活跃，共 32 条 PR 更新，其中 29 条已合并/关闭，仅 3 条待合——大量积压数周乃至两个月的 PR 集中落地。Issues 端相对平淡：5 条更新，新开/活跃 3 条，关闭 2 条（均为 stale 过期自动关闭）。项目发布了新的 **Nightly Build（v0.3.0-nightly.20260621）**，标志 v0.3.0 开发分支已进入持续集成阶段。整体健康度：**活跃且正向，积压清理进展显著。**

---

## 2. 版本发布

### 🌙 Nightly Build — `v0.3.0-nightly.20260621.287853ab`

- **发布时间**: 2026-06-21
- **类型**: 自动化每日构建（不稳定，生产环境慎用）
- **对比基线**: `v0.3.0` ← `main`
- **Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.3.0...main

> **说明**: 该 Nightly 构建涵盖了约 5 月初至今累积的大量 PR 合入，包括 V3 配置格式迁移、流式通信、模型配置工作流重构、Factory Reset、序列化工具支持等。Nightly 阶段意味着功能已就绪但尚未经过稳定化测试，推荐开发者和早期体验者使用。

---

## 3. 项目进展

今日（及近期集中合入）的重要 PR 共 20 条，覆盖以下核心方向：

### 🔧 稳定性与核心架构修复

| PR | 内容 | 意义 |
|---|---|---|
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | 修复消息总线背压处理与健康状态可见性 | 解决队列饱和时的无限阻塞，新增 per-stream 丢弃统计，提升运行时可靠性 |
| [#2913](https://github.com/sipeed/picoclaw/pull/2913) | 修复 JSONL 会话索引热路径克隆与 TTL 语义 | 消除每次缓存命中时的全量内存克隆，显著降低高频会话查找的性能开销 |
| [#2907](https://github.com/sipeed/picoclaw/pull/2907) | 修复 JSONL 存储崩溃后的元数据漂移 | 解决 `.jsonl` 与 `.meta.json` 写入顺序导致的崩溃一致性问题，防止数据损坏 |
| [#2905](https://github.com/sipeed/picoclaw/pull/2905) | 修复过期上下文时 fallback 链处理 | 请求超时/截止时间到达后立即终止 fallback 链，避免无意义重试消耗资源 |

### 🌐 Web UI 与 API 增强

| PR | 内容 | 意义 |
|---|---|---|
| [#2831](https://github.com/sipeed/picoclaw/pull/2831) | 提供方选择与模型表单基础架构 | 模型配置 CRUD、默认 API base URL 等元数据支持，为后续 UI 工作奠基 |
| [#2832](https://github.com/sipeed/picoclaw/pull/2832) | 模型获取请求与已保存模型目录支持 | 新增 `POST /api/models/fetch`（从上游拉取可用模型）和 `GET /api/models/catalog` 端点 |
| [#2833](https://github.com/sipeed/picoclaw/pull/2833) | 带真实连通性验证的测试连接 | 配置编辑器中的"测试连接"不再仅检查格式，而是实际发起网络探测确认可达 |
| [#2752](https://github.com/sipeed/picoclaw/pull/2752) | 改进模型配置工作流（整体合集 PR） | 汇聚上方三个子 PR，统一描述模型配置体验的整体提升 |
| [#2908](https://github.com/sipeed/picoclaw/pull/2908) | 恢复模型页面提供方 Logo 回退显示 | 修复后端目录元数据重构后提供方图标消失的问题 |
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | Pico 网页聊天流式输出与滚动 UX | 端到端流式支持 + 前端聊天渲染/滚动行为全量重构，大幅提升对话体验 |
| [#2659](https://github.com/sipeed/picoclaw/pull/2659) | 隔离思考气泡折叠状态 | 每个 reasoning bubble 独立管理展开/折叠状态，修复全局共享 atom 导致的状态串扰 |
| [#2661](https://github.com/sipeed/picoclaw/pull/2661) | 思考消息可见性切换 | 用户可显示/隐藏模型推理过程，偏好持久化至 localStorage |
| [#2663](https://github.com/sipeed/picoclaw/pull/2663) | 改进配置保存与重启反馈 | 跨 channel/model/config/tools/web search settings 均需提供明确的保存/重启状态反馈 |

### 🏭 系统与工具

| PR | 内容 | 意义 |
|---|---|---|
| [#2891](https://github.com/sipeed/picoclaw/pull/2891) | 添加"恢复出厂设置"功能 | 配置不兼容时的恢复路径：备份当前配置 → 创建默认配置 → 保留安全凭证 |
| [#2673](https://github.com/sipeed/picoclaw/pull/2673) | 跨平台序列化工具支持 | 内置 `serial` 硬件工具，支持 Linux/macOS/Win，并入运行时工具注册表 |
| [#2607](https://github.com/sipeed/picoclaw/pull/2607) | 飞书群聊触发与随机表情回应配置 | 新增 `group_trigger.mention_only` 选项 + 前端 i18n 更新 |
| [#2654](https://github.com/sipeed/picoclaw/pull/2654) | 隐藏 Windows 子进程控制台闪烁 | 修复 `picocaw-launcher.exe` 反复弹出 PowerShell 黑框的 UX 退化 |
| [#2487](https://github.com/sipeed/picoclaw/pull/2487) | 修复 Windows 构建流程 | 移除 root/Makefile 和 web/Makefile 中的 Unix-only 假设 |
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | 文档同步至 V3 配置格式 | 26 个文件格式更新：`api_key` → `api_keys`、`channels` → `channel_list`、version 2→3 |

### 🤖 提供方支持

| PR | 内容 | 意义 |
|---|---|---|
| [#2915](https://github.com/sipeed/picoclaw/pull/2915) | 为 MiMo 提供方添加 CommonModels | `mimo-v2.5`（多模态）和 `mimo-v2.5-pro`（纯文本），WebUI 可正确推荐视觉模型 |

**整体评估**: 这批 PR 的集中落地标志着 PicoClaw 从 v0.2.x 稳定期向 v0.3.0 功能跨越的重要一步。核心运行时稳定性（JSONL 一致性、背压处理、fallback 链路）、Web 端模型配置体验、流式聊天、跨平台构建均有实质推进。

---

## 4. 社区热点

### Issue [#3012 — BUG: evolution 启用后每分钟持续消耗 tokens](https://github.com/sipeed/picoclaw/issues/3012) ⭐5 评论

- **环境**: v0.2.9 / FreeBSD 15.0 / MiniMax / Go 1.25.10
- **问题**: 开启 Evolution（Draft 模式 + Code Path Trigger）后，token 以每分钟级别的速率持续消耗，即使没有用户交互。
- **诉求**: 用户怀疑 evolution 的自动触发在某种边界条件下进入了无限循环或过短的定时轮询，期望确认是否为 bug 并提供修复或配置规避方案。

### Feature Request [#3093 — 需要 SimpleX / Wire / Tox 支持](https://github.com/sipeed/picoclaw/issues/3093) ⭐2 评论 👍1

- 用户请求将 SimpleX、Wire 或 Tox 作为消息渠道接入 PicoClaw。这是对去中心化/隐私通信协议的支持诉求。

### Issue [#3090 — [stale] Safari iOS <16.4 面板无法工作](https://github.com/sipeed/picoclaw/issues/3090) ⭐2 评论

- iOS Safari 16.4 以下版本登录后功能异常，已标记 stale。历史遗留兼容性 issue，尚无活跃的 fix PR。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| 🔴 **高** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | 🟡 Open | Evolution 启用后 token 无限消耗 | ❌ 暂无 |
| 🟡 **中** | [#3044](https://github.com/sipeed/picoclaw/issues/3044) | 🔴 Closed (stale) | Matrix `allow_from` 对含冒号的用户 ID 静默拒绝 | — 过期关闭，可能已修复或放弃 |
| 🟡 **中** | [#3041](https://github.com/sipeed/picoclaw/issues/3041) | 🔴 Closed (stale) | `mcp add` 全局标志错误解析为位置参数 | — 过期关闭 |
| 🟡 **中** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | 🔴 Closed (stale) | Safari iOS < 16.4 面板不可用 | ❌ 暂无 |
| 🟢 **低** | (已合入 PR 修复) | ✅ Fixed | JSONL 元数据漂移、背压阻塞、fallback 链过期不退、Windows 控制台闪烁等 | 见上文 PR 列表 |

**重点关注**: **#3012 token 消耗问题**是当前唯一活跃的回归级 bug，影响使用 Evolution 功能的用户成本，建议维护者优先排查 evolution 定时触发逻辑中的循环条件。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 信号强度 | 判断 |
|---|---|---|---|
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | SimpleX / Wire / Tox 渠道 | 🟡 中（1👍，2评论） | 去中心化通信协议支持，与矩阵生态契合，但实现复杂度取决于协议 SDK 可用性 |
| Nightly v0.3.0 | V3 配置格式已落地 | 🟢 强 | #2766 已完成文档迁移，V3 为下一个稳定版的默认格式 |
| 流式聊天 PR #2587 | Web 端流式对话 | ✅ 已合入 | 下一稳定版核心 UX 提升 |
| 提供方扩展 #2915 | 更多模型提供方原生支持 | 🟢 强 | MiMo 已加入，预计更多跟进入 |
| Factory Reset #2891 | 配置恢复能力 | ✅ 已合入 | 配置版本迁移场景的标准保障 |

**路线图判断**: v0.3.0 稳定版核心功能基本就绪（V3 配置、流式聊天、模型配置工具链、Factory Reset），下一阶段预计聚焦于：1) Nightly 回归修复（尤其是 #3012）；2) 提供方生态扩展；3) 可能的渠道扩展（如 SimpleX）。

---

## 7. 用户反馈摘要

- **Token 成本敏感**: Evolution 功能的 token 消耗问题（#3012）反映用户对 AI 模型调用成本有明确预期，无限消耗是零容忍问题。
- **跨平台使用场景多样**: 用户覆盖 FreeBSD、Raspberry Pi OS (Debian 13)、Linux x86_64、Windows、macOS，说明 PicoClaw 的跨平台定位满足了真实的多环境部署需求。
- **隐私通信诉求**: SimpleX/Wire/Tox 的请求表明部分用户群体对去中心化、端到端加密通信有强需求，与 Matrix 渠道的用户画像重叠。
- **低版本 iOS 兼容性遗留**: 仍运行 iOS <16.4 的用户无法使用 Web 面板，但项目已将其标记 stale，暗示支持下限可能在 iOS 16.4+。
- **MCP 工具生态**: `mcp add` 的解析 bug（#3041）说明用户积极使用 MCP 工具集成功能，生态扩展活跃度较高。

---

## 8. 待处理积压

| 项目 | 状态 | 等待时间 | 建议 |
|---|---|---|---|
| **#3012 — Evolution token 消耗** | 🟡 Open，无 PR | 创建 17 天 | 🔴 **高优先级**：回归型 bug，需尽快排查确认 |
| **#3093 — SimpleX/Wire/Tox 渠道** | 🟡 Open，无 PR | 创建 12 天 | 🟡 中优先级：评估协议 SDK 可行性后回复用户计划 |
| **#3090 — iOS <16.4 Safari 兼容** | 🔴 Closed (stale) | 创建 12 天 | 🟢 低优先级：若影响范围小可保持关闭，或整理为已知限制文档 |

> **总结**: #3012 是当前最值得立即投入精力的问题——一个正在活跃消耗用户资金的 bug。其余积压项均可按节奏处理。整体来看，PicoClaw 项目在经历了一个密集的 PR 消化日后，积压量显著下降，v0.3.0 稳定版轮廓日渐清晰。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-22

---

## 1. 今日速览

过去 24 小时 NanoClaw 社区活跃度**中等偏低**：共 2 个新 Issue 和 6 个 PR 更新，无新版本发布。值得关注的是，今日两个新 Issue 均来自同一安全研究员（YLChen-007），均标记为 **[Security]**，涉及 A2A 附件转发路径穿越和 MCP 服务器审批流程绕过，属于**高危安全漏洞**，但截至报告时间均无评论和响应。PR 方面，3 个已合并/关闭，3 个仍开放，整体推进节奏正常。项目当前处于**安全响应待启动 + 日常维护并行**的状态。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 3 个，均聚焦于**安装/部署流程的健壮性修复**：

| PR | 状态 | 核心内容 |
|---|---|---|
| [#2825](https://github.com/nanocoai/nanoclaw/pull/2825) | ✅ 已合并 | **修复 setup 首次聊天步骤竞态条件**：`service` 步骤在 `launchctl load` / `systemctl start` 返回后立即报告成功，但此时 host 进程尚未完成启动并绑定 socket，导致首次聊天 ping `data/cli.sock` 失败。修复增加了等待 socket 就绪的逻辑。 |
| [#2829](https://github.com/nanocoai/nanoclaw/pull/2829) | ❌ 已关闭 | 提交内容仅为占位符 "eee"，未遵循贡献指南，被关闭。 |
| [#2168](https://github.com/nanocoai/nanoclaw/pull/2168) | ✅ 已合并 | **修复 rootless Docker 下 `host.docker.internal` 映射**：当 OneCLI 位于默认 `bridge` 网络时，在容器生成时将 `host.docker.internal` 固定到 OneCLI 的 bridge IP，而非依赖 `host-gateway`。此 PR 自 2026-05-01 创建以来历经近两个月终于合并。 |

**整体评估**：项目在部署体验和容器兼容性方面持续打磨，#2168 的长期积压合并也表明维护者在清理历史债务。

---

## 4. 社区热点

今日社区热点集中于**两个安全 Issue**，均由安全研究员 YLChen-007 在 2026-06-21 提交：

### 🔴 Issue [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) — A2A 附件转发符号链接路径穿越
- **严重程度**：高（安全漏洞）
- **问题**：当目标 agent 的 `inbox/` 目录被替换为符号链接时，NanoClaw 的 A2A 附件转发会跟随符号链接，将文件写入目标 session root 之外的任意路径。被入侵或遭受 prompt injection 的 agent 可利用此漏洞实现任意文件写入。
- **社区响应**：截至报告时间 0 评论，维护者尚未响应。

### 🔴 Issue [#2827](https://github.com/nanocoai/nanoclaw/issues/2827) — `add_mcp_server` 审批流程隐藏运行时参数
- **严重程度**：高（安全漏洞）
- **问题**：`add_mcp_server` 自修改流程的审批卡片仅显示 MCP 服务器名称和基础信息，隐藏了运行时 `args` 和 `env` 参数。攻击者可通过精心构造的请求在审批通过后注入恶意环境变量或命令行参数（"approval smuggling"）。
- **社区响应**：截至报告时间 0 评论，维护者尚未响应。

**分析**：两个 Issue 均指向 NanoClaw 的**多 agent 协作安全边界**问题。随着 A2A（Agent-to-Agent）和 MCP 服务器动态注册功能的成熟，安全审查机制需要同步跟进。建议维护者尽快确认并排期修复。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) | A2A 附件转发符号链接路径穿越 | 待修复，无 fix PR |
| 🔴 高 | [#2827](https://github.com/nanocoai/nanoclaw/issues/2827) | MCP 服务器审批流程参数隐藏 | 待修复，无 fix PR |
| 🟡 中 | [#2830](https://github.com/nanocoai/nanoclaw/pull/2830) | 删除 checkout 后残留的 launchd/systemd 服务注册 | **有开放 PR**，待审查合并 |
| 🟢 低 | [#2826](https://github.com/nanocoai/nanoclaw/pull/2826) | `/update-nanoclaw` 技能更新步骤被标记为可选，导致用户可能遗漏重要修复 | **有开放 PR**，待审查合并 |

**总结**：两个高危安全漏洞目前**均无修复 PR**，是当前最需要关注的风险点。

---

## 6. 功能请求与路线图信号

| PR | 描述 | 信号强度 |
|---|---|---|
| [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) | **新增 `/add-clidash` 技能**：一个只读的 CLI 派生仪表盘技能，允许通过 CLI 查看 NanoClaw 状态仪表盘 | ⭐⭐⭐ 功能技能，已开放 5 天，仍在审查中 |

**分析**：#2795 是一个**工具类技能（Utility skill）**，不修改核心源码，仅添加独立的 `.claude/skills/` 目录文件，合并风险较低。此类只读仪表盘功能符合 NanoClaw 提升可观测性的方向，有较大概率在近期被纳入。

---

## 7. 用户反馈摘要

今日 Issues 和 PR 评论数量极少（大部分为 0 评论），从 Issue/PR 描述中可提炼以下用户痛点：

- **安全边界意识增强**：安全研究员 YLChen-007 连续提交两个安全 advisory，说明外部安全社区已开始对 NanoClaw 的多 agent 协作机制进行深入审计，项目需要建立更正式的安全响应流程。
- **部署体验仍存摩擦**：PR #2825 和 #2830 均指向安装/卸载流程的边缘情况（竞态条件、残留注册），说明用户在频繁测试/重装场景下会遇到问题。
- **更新流程透明度不足**：PR #2826 指出技能更新被框架为"可选"，导致用户可能在不知情的情况下遗漏重要修复，反映出更新 UX 需要更明确的风险提示。

---

## 8. 待处理积压

| 项目 | 创建时间 | 等待天数 | 说明 |
|---|---|---|---|
| [#2168](https://github.com/nanocoai/nanoclaw/pull/2168) PR | 2026-05-01 | ~52 天 | ✅ 已于今日合并，积压清理 |
| [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) PR | 2026-06-17 | 5 天 | `/add-clidash` 仪表盘技能，仍在审查 |
| [#2828](https://github.com/nanocoai/nanoclaw/issues/2828) Issue | 2026-06-21 | 1 天 | 🔴 高危安全漏洞，**尚无维护者响应** |
| [#2827](https://github.com/nanocoai/nanoclaw/issues/2827) Issue | 2026-06-21 | 1 天 | 🔴 高危安全漏洞，**尚无维护者响应** |

**⚠️ 维护者关注建议**：
1. **优先处理 #2828 和 #2827**：两个安全漏洞涉及多 agent 场景下的权限边界，建议尽快确认影响范围、分配修复负责人，并考虑发布安全公告。
2. **审查 #2830 和 #2826**：两个开放 PR 均为低风险的维护性修复，建议尽快审查合并以减少积压。
3. **评估 #2795**：功能技能 PR，风险低，可考虑合并以丰富技能生态。

---

*数据来源：GitHub API | 报告生成时间：2026-06-22 | 分析周期：过去 24 小时*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期：2026-06-22（周日）**
**数据来源：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)**

---

## 1. 今日速览

过去 24 小时内，NullClaw 项目整体活跃度处于**低位**：仅新增 1 条 Issue，无 PR 提交与合并，无新版本发布。唯一的 Issue 来自 Windows 用户在调用 Agnes-2.0-Flash 模型时遇到的 `NoResponseContent` 报错，已在创建后次日即获得社区评论响应，说明社区仍有一定互动热度。项目暂无新的代码合并进展，处于静默期，整体节奏平稳。

---

## 2. 版本发布

**无新版本发布。**

最近无 Release 记录，近期依赖社区从最新版本号推断，上次发布版本为 `v2026.5.29`（以用户报告的版本为准）。

---

## 3. 项目进展

过去 24 小时内 **无 PR 合并、无 PR  submitted、无 PR 关闭**。项目在代码层面没有实质性进展推进，当前处于零提交状态。若此趋势延续，需关注开发或维护节奏是否有阶段性间歇。

---

## 4. 社区热点

### 🔥 唯一活跃 Issue 引发社区讨论

**[Issue #967](https://github.com/nullclaw/nullclaw/issues/967) — `[bug] error: NoResponseContent`**

- **作者**：svier0
- **创建时间**：2026-06-20 | **最后更新**：2026-06-21
- **评论数**：1 | 点赞：0

**简述**：用户在 Windows 11 环境下使用 NullClaw v2026.5.29，通过 `nullclaw agent -m "你好！"` 调用 Agnes-2.0-Flash 模型时，在 21 次对话中 12 次出现 `error: NoResponseContent`，频率超过 50%。同一模型和 API Key 在竞品环境下表现正常，初步排除模型/Key 本身问题。已有 1 条评论，社区可能在跟进或补充复现信息。

> 该 Issue 的持续讨论决定了当前社区的主要注意力所在。

---

## 5. Bug 与稳定性

| 严重程度 | Bug 描述 | 平台 | 状态 | 修复 PR |
|:---:|---|---|---:|
| 🔴 高 | `error: NoResponseContent`，核心对话流程偶发中断，频率 50%+ | Windows 11, Agnes-2.0-Flash | 🟡 **已报告**，社区有 1 条评论，**无 fix PR** | 无 |
| — | 无其他新 Bug 报告 | — | — | — |

**关注要点**：该 Bug 发生在高频场景（直接发起对话），且与特定模型（Agnes-2.0-Flash）关联，可能指向模型响应解析 / 流读取超时 / 空内容校验等底层逻辑。若后续出现更多同类报告，建议优先定位并提交 PR。

---

## 6. 功能请求与路线图信号

过去 24 小时内无新的功能请求（Feature Request）或路线图信号。但基于当前唯一 Issue，可推断：

- **Agnes-2.0-Flash 在 Windows 端的对话鲁棒性** - 若后续有更多同类报告，相关修复有望被优先纳入下一补丁版本。
- **未响应或长期沉默的积压 Issue**—见下节—也可能重新被关注，推动路线图方向。

整体来看，目前尚未出现清晰的路线图加速信号，社区反馈偏向单点的稳定性和修复诉求。

---

## 7. 用户反馈摘要

### 痛点
- 空响应问题：对话中途返回 `NoResponseContent`，打断工作流，用户只能多次重试。
- **复现环境特定**：仅 Windows 11 + Agnes-2.0-Flash 高频复现，同模型同 Key 在其他端正常，暗示平台或网络栈差异。
- **会话量不大，故障率极高**：21 次对话 12 次报错，严重损害信任度。

### 使用场景
正常命令行交互用例（`nullclaw agent -m "你好！"`），基础问答场景。

### 满意度
- 不满意：对 NullClaw 在该模型下的稳定性和兼容性存疑。
- 满意：主动复现、提供了详细信息，说明用户仍愿配合问题定位，对项目有信心。

### 潜在诉求
快速定位 NoResponseContent 根因（可能涉及超时重试机制、响应内容提取或协议层校验），给出临时缓解或正式修复。

---

## 8. 待处理积压

过去 24 小时无 PR 积压或未响应 Issue 被新增。当前唯一未关闭且无关联 PR 的 Issue 为：

- ⏳ **[Issue #967](https://github.com/nullclaw/nullclaw/issues/967)** — 已获 1 条评论但 **未分配负责人，无关联 PR**，已处于 Pending/No Fix 状态。**建议维护者介入复现、标记优先级评估，或请求作者补充调试日志**。

因时间窗口仅 24 小时，无长期积压列表可供追踪。若维护者有空，建议回顾近期积压的 help wanted / bug / stale Issue，避免响应断开。

---

> **整体健康度评价**：🟡 中性偏低。核心出错 Issue 已获社区回应，但无修复进展，需尽快推动响应与修复流程。无新增提交，项目近期处于低活跃期。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-22

---

## 1. 今日速览

IronClaw 今日活跃度**极高**，共处理 29 条 PR 更新（14 条已合并/关闭，15 条待合并）和 3 条 Issue 更新，无新版本发布。项目当前处于**密集工程推进期**：Reborn 学习系统（WS-1/WS-2/WS-3）、CI/CD 基础设施重构、以及 Composio 连接器集成为三大主线。值得关注的是，Nightly E2E 持续失败（Issue #4108），且 Google OAuth 主动刷新问题（Issue #5071）已关闭但无评论，需确认是否真正解决。整体项目健康度良好，合并节奏快，但积压的开放 PR 数量偏高（15 条待合并），存在一定的审查瓶颈。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 14 条 PR 覆盖了 CI 重构、Reborn 核心功能、依赖升级等多个维度，以下是关键进展：

### 🔧 CI/CD 基础设施大幅重构
- **PR #5113** — 将跨平台/兼容性测试 job 从 `test.yml` 提取到独立的 `platform-and-compat.yml`，降低主工作流复杂度，提升 CI 可维护性。
- **PR #5118** — 修复 Rust 缓存策略：将 per-crate 缓存改为共享单一缓存，解决 ~60 个 crate 缓存竞争导致的 LRU 驱逐和重复下载问题。
- **PR #5115** — 为 64-crate 闭包测试添加 `CARGO_NET_RETRY`，缓解 crates.io 瞬时网络故障导致的全红问题（已观察到两次）。
- **PR #4830** — 在 merge queue 中启用 Reborn E2E 测试，补上此前 Reborn 变更合并时缺少 Rust 合约门控和 Playwright 冒烟测试的空白。
- **PR #5065** — 合入一次性调度触发器（`TriggerSchedule::Once`），为 Issue #5117 中请求的 "Completed" 卡片提供后端基础。

### 🤖 Reborn 核心功能推进
- **PR #4990** — 修复 NEAR AI MCP 就绪状态投影，将运行时凭证从浏览器管理的扩展设置需求中移除，简化 onboarding 流程。
- **PR #2927** — 修复首次启动时 WASM channel 全部不活跃的回退问题（`load_startup_active_channels` 接线），影响全新安装用户体验。

### 📦 依赖升级
- **PR #4876** — 合入 43 项 Rust 依赖更新（`everything-else` 组），包括 `agent-client-protocol` 0.10.4→0.14.0、`refinery` 0.8.16→0.9.2 等。
- **PR #4499** — 合入 tokio 生态 3 项更新（`tokio-tungstenite` 0.26.2→0.27.x 等）。

**整体评估**：项目在 CI 稳定性和 Reborn 功能完整性两个方向上同时推进，今日合并的 PR 质量较高且覆盖面广。

---

## 4. 社区热点

### 🔥 PR #4975 — reborn(learning) WS-3: lightweight reflection service
- **链接**: [nearai/ironclaw#4975](https://github.com/nearai/ironclaw/pull/4975)
- **作者**: serrrfirat | **状态**: OPEN | **规模**: XL
- **分析**: 这是 Reborn 学习系统堆栈的第三层（WS-1→WS-2→WS-3），实现"反思 fork"——在后台将失败/纠正转化为学习记忆。这是实现"从错误中学习、永不重复"（Hermes 对等能力）愿景的核心组件。由于依赖前两层 PR 先合并，当前处于等待状态。

### 🔥 PR #5109 — feat(reborn): read-only + gated-write connector route (Composio)
- **链接**: [nearai/ironclaw#5109](https://github.com/nearai/ironclaw/pull/5109)
- **作者**: abbyshekit (新贡献者) | **状态**: OPEN | **规模**: XL
- **分析**: 为 IronClaw Desktop Workbench 添加 Composio 连接器路由，支持读取已连接账户和令牌交换。这是扩展 IronClaw 第三方集成能力的关键一步，来自新贡献者，需核心团队审查。

### 🔥 PR #5085 — feat(reborn): concurrent turn execution via TurnRunScheduler
- **链接**: [nearai/ironclaw#5085](https://github.com/nearai/ironclaw/pull/5085)
- **作者**: henrypark133 | **状态**: OPEN | **规模**: XL
- **分析**: 将 Reborn 运行时从严格串行执行改为并发执行，引入 `TurnRunScheduler` + 每用户/每类型上限。这是性能关键路径的重大架构变更，解决了 LLM 推理串行化的瓶颈。

### 🔥 Issue #4108 — Nightly E2E failed
- **链接**: [nearai/ironclaw#4108](https://github.com/nearai/ironclaw/issues/4108)
- **状态**: OPEN | **持续**: 自 2026-05-27 起
- **分析**: Nightly E2E 自 5 月底以来持续失败，已近一个月。虽然 CI 重构 PR（#5113、#5118、#5115）可能间接改善此问题，但 E2E 失败的根本原因尚未明确追踪和修复。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | Fix PR |
|---------|---------|------|------|--------|
| 🔴 高 | [#5071](https://github.com/nearai/ironclaw/issues/5071) | Google OAuth token 过期需频繁重新认证 | **CLOSED**（无评论） | 未明确关联 PR，需确认关闭原因 |
| 🟡 中 | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E 持续失败（>30 天） | **OPEN** | 无直接 fix PR，CI 重构可能间接改善 |
| 🟢 低 | [#2927](https://github.com/nearai/ironclaw/pull/2927) | 首次启动 WASM channel 全部不活跃 | **已合并** | PR #2927 已合入 |

**⚠️ 关注点**：Issue #5071 被标记为 `[risk: high]` 且涉及 OAuth/Authority 安全域，但关闭时无评论记录。建议维护者确认是"已修复"还是"转为其他 Issue"或"不再修复"，避免高优先级安全问题被静默关闭。

---

## 6. 功能请求与路线图信号

### 📋 Issue #5117 — Automations: "Completed" summary card
- **链接**: [nearai/ironclaw#5117](https://github.com/nearai/ironclaw/issues/5117)
- **作者**: henrypark133 | **类型**: enhancement
- **诉求**: 在 `/v2/automations` 顶部摘要条中添加 **COMPLETED** 卡片，显示已完成（一次性触发）的自动化数量，填充当前空白的第 6 个网格单元。
- **路线图信号**: ✅ **已有实现基础** — PR #5065（`TriggerSchedule::Once`）已合入，提供了后端数据模型。此 Issue 是 PR #5065 的自然延伸，很可能由同一贡献者在近期实现。

### 🔮 从开放 PR 推断的路线图方向
1. **Reborn 学习系统完整堆栈**（PR #4937 WS-1 → #4938 WS-2 → #4975 WS-3）：三层全部合入后，Reborn 将具备从失败中自动学习的能力。
2. **Reborn 并发执行**（PR #5085）：性能优化，解锁多用户/多类型并行处理。
3. **Composio 连接器生态**（PR #5109）：扩展第三方工具集成。
4. **Hosted 单租户 Postgres**（PR #5081）：为 Reborn 提供托管预览路径。

---

## 7. 用户反馈摘要

由于今日所有 Issue 评论数均为 0，无法从评论中提炼用户反馈。但从 Issue 和 PR 的摘要中可推断以下**用户痛点**：

- **OAuth 体验差**（Issue #5071）：用户需要每小时重新认证 Google 账户，期望 refresh token 自动续期。
- **自动化可见性不足**（Issue #5117）：用户无法一目了然地看到已完成的自动化数量，管理界面信息不完整。
- **首次安装体验缺陷**（PR #2927）：全新安装后所有 WASM channel 默认不活跃，即使安装向导已选择。
- **CI 不稳定影响开发信心**（Issue #4108 + PR #5115/#5118）：E2E 持续失败和 crates.io 网络抖动导致开发者对主干稳定性缺乏信心。

---

## 8. 待处理积压

以下长期未响应的 Issue/PR 需维护者关注：

| 项目 | 创建日期 | 状态 | 建议行动 |
|------|---------|------|---------|
| **Issue #4108** — Nightly E2E failed | 2026-05-27 (26天) | OPEN, 0 评论 | 🔴 **高优**：指派负责人排查根因，或至少添加评论说明已知/调查中 |
| **PR #4002** — dependabot: bump actions (16 updates) | 2026-05-24 (29天) | OPEN | 审查并合并或关闭，避免 GitHub Actions 版本过旧 |
| **PR #4032** — dependabot: bump wasm group | 2026-05-25 (28天) | OPEN | 同上 |
| **PR #4498** — dependabot: bump serde_yml | 2026-06-05 (17天) | OPEN | 低风险依赖升级，建议尽快合并 |
| **PR #2927** — fix: wire load_startup_active_channels | 2026-04-24 (59天) | **已合并** ✅ | — |
| **PR #4937** — reborn(learning) WS-1 | 2026-06-15 (7天) | OPEN | 学习系统基础层，需优先审查以解锁 WS-2/WS-3 |
| **PR #5081** — hosted single-tenant Postgres | 2026-06-18 (4天) | OPEN | 含 DB MIGRATION，需 DBA/核心开发者审查 |

**积压健康度评估**：开放 PR 中 15 条待合并，其中约 6 条为 dependabot 自动生成的依赖升级（低风险、高延迟），建议批量处理。核心功能 PR（#4937、#4975、#5085、#5109）均为 XL 规模，审查负担重，可能需要分阶段合并或增加审查人力。

---

*日报生成时间: 2026-06-22 | 数据来源: GitHub nearai/ironclaw | 分析引擎: OWL*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-22

---

## 1. 今日速览

过去 24 小时内，LobsterAI 共更新 **15 条 Issues**，全部为已关闭状态（14 条 stale 自动关闭 + 1 条新发现的安全问题），**无 PR 合并，无新版本发布**。项目整体处于低活跃维护期，社区贡献近乎停滞。值得关注的是，今日新出现一条 **安全类 Issue**（#2181），涉及默认 SSRF 防护削弱，需维护者尽快响应。大量历史 Bug 报告因长期未处理被标记为 stale 后集中关闭，反映出项目积压问题较为严重。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**无 PR 合并，无新功能推进。**

过去 24 小时内 PR 更新为 0 条，项目代码库无实质性合并进展。所有 15 条 Issues 均为关闭状态，且全部为 stale 自动关闭或已有结论的历史问题，无新修复合入主干。

---

## 4. 社区热点

### 🔴 安全预警 — Issue #2181（新开放，0 评论）

> [LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard](https://github.com/netease-youdao/LobsterAI/issues/2181)

**作者**: YLChen-007 | 创建于今日（2026-06-21）

这是今日唯一处于 OPEN 状态的 Issue，且带有 **[Security]** 标签。报告指出 LobsterAI 的浏览器设置层默认恢复为 `ProxyCompatible` 模式，当没有显式存储浏览器策略时，会序列化允许访问私有网络的配置，从而削弱了内置的 OpenClaw SSRF 防护。这是一个**默认安全配置退化**问题，可能导致内网 SSRF 攻击面暴露。

**分析**: 该问题属于安全加固回退（security regression），在 AI Agent 工具能够操控浏览器的场景下，SSRF 防护的削弱是较高风险隐患。目前尚无评论和响应，建议维护者**高优先级处理**。

---

### 批量 stale 关闭的 Issues（14 条，均于 2026-06-21 关闭）

以下 Issues 均创建于 2026-04-07，在约 75 天后因 stale 被自动关闭，反映了这些问题的长期积压状态：

| # | 问题摘要 | 核心诉求 |
|---|---------|---------|
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) | skills 文件生成阻塞无中间态展示 | 长任务进度可视化 |
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | 禁用技能后仍保留在 activeSkillIds 中被调用 | 技能状态一致性 |
| [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | Agent 设置保存技能列表后当前会话未同步 | 配置实时生效 |
| [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | POPO IM 的 AES Key 缺少必填校验 | 表单校验完善 |
| [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | 定时任务选 IM 通知频道未选会话即可提交，通知静默失败 | 表单校验 + 错误提示 |
| [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | QQ Bot 群组白名单缺少添加输入框 | UI 功能缺失 |
| [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) | 声明条款内容规范不统一（序号重复、括号不完整） | 文案规范化 |
| [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | 关闭 Settings 面板未取消 GitHub Copilot OAuth 轮询，Token 静默丢失 | 资源清理 + 状态管理 |
| [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) | CI Labeler 权限错误 + lint 策略说明缺失 | CI/CD 基础设施修复 |
| [#1525](https://github.com/netease-youdao/LobsterAI/issues/1525) | 会话列表缺少颜色标注功能 | 会话视觉管理 |
| [#1528](https://github.com/netease-youdao/LobsterAI/issues/1528) | 批量模式仅支持删除，无法导出多个会话 | 数据管理完善 |
| [#1532](https://github.com/netease-youdao/LobsterAI/issues/1532) | 设置页面缺少本地会话使用统计 | 使用数据可视化 |
| [#1537](https://github.com/netease-youdao/LobsterAI/issues/1537) | 长会话中无法标记/收藏重要 AI 回复 | 消息书签功能 |
| [#1541](https://github.com/netease-youdao/LobsterAI/issues/1541) | 会话列表缺少标签分类和筛选功能 | 会话组织体系 |

---

## 5. Bug 与稳定性

### 🔴 高危 — 安全问题

| Issue | 严重程度 | 描述 | Fix PR |
|-------|---------|------|--------|
| [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) | **高** | 默认恢复私有网络浏览器访问，削弱 SSRF 防护 | ❌ 无 |

### 🟡 中危 — 功能缺陷（均已 stale 关闭，未修复）

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | 禁用技能后仍被调用（Redux 状态不一致） | ❌ 无 |
| [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | Agent 技能配置保存后当前会话不同步 | ❌ 无 |
| [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | OAuth 轮询未取消导致 Token 静默丢失 | ❌ 无 |
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) | skills 生成长时间阻塞，无中间态反馈 | ❌ 无 |

### 🟢 低危 — 体验/UI 问题

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | POPO AES Key 缺少必填校验 | ❌ 无 |
| [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | 定时任务 IM 通知静默失败 | ❌ 无 |
| [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | QQ Bot 白名单 UI 缺少添加输入框 | ❌ 无 |
| [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) | 条款文案序号重复、括号不完整 | ❌ 无 |
| [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) | CI Labeler 权限错误 | ❌ 无 |

**总结**: 所有 Bug 均**无 Fix PR**，全部处于未修复状态。安全 Issue #2181 是唯一活跃的高危问题。

---

## 6. 功能请求与路线图信号

从积压的 Issues 中可提炼出以下**高频功能诉求**，按提及频次和用户价值排序：

### 📌 会话管理增强（4 条相关 Issue，同一用户 MaoQianTu 集中提交）

- **会话标签分类与筛选** ([#1541](https://github.com/netease-youdao/LobsterAI/issues/1541)) — 用户期望类似 Notion/Obsidian 的标签体系
- **会话颜色标注** ([#1525](https://github.com/netease-youdao/LobsterAI/issues/1525)) — 视觉快速区分会话类型
- **批量导出会话** ([#1528](https://github.com/netease-youdao/LobsterAI/issues/1528)) — 数据备份与迁移
- **消息收藏/书签** ([#1537](https://github.com/netease-youdao/LobsterAI/issues/1537)) — 长对话中标记关键回复

**信号分析**: 这 4 条功能请求来自同一用户，创建时间集中（2026-04-07），且均围绕**会话信息组织**这一核心场景。说明重度用户在会话规模增长后，线性列表已无法满足管理需求。这是一个明确的**产品方向信号**——会话管理需要从"列表"升级为"信息管理系统"。

### 📌 使用统计面板 ([#1532](https://github.com/netease-youdao/LobsterAI/issues/1532))

用户期望在设置页面查看本地使用统计（会话数、消息数、活跃度等），参考 VS Code 活跃度统计模式。

### 📌 长任务进度可视化 ([#1509](https://github.com/netease-youdao/LobsterAI/issues/1509))

skills 生成等长时间操作缺乏中间态展示，用户无法感知任务是否在执行。

**路线图判断**: 目前无任何 PR 在处理上述功能，且项目处于低活跃期。这些功能请求短期内被纳入下一版本可能性较低，除非维护者重新激活开发节奏。

---

## 7. 用户反馈摘要

### 😤 核心痛点

1. **状态一致性差**: 多个 Issue（#1500、#1502、#1516）反映出 Redux 状态管理与实际 UI/行为之间存在不一致。禁用技能后仍被调用、保存配置后不生效、关闭面板后后台任务继续跑——这些都是**状态同步**层面的系统性问题。

2. **静默失败，用户无感知**: Issue #1506（定时任务通知静默失败）、#1516（Token 静默丢失）、#1509（生成阻塞无反馈）共同指向一个核心体验问题——**操作结果缺乏反馈**。用户无法知道任务是否成功、是否失败、当前处于什么状态。

3. **表单校验缺失**: Issue #1504（AES Key 无必填校验）、#1506（空会话可提交）表明关键表单路径缺少前端校验，导致无效数据进入系统后产生不可预期的行为。

4. **跨 IM 平台体验不一致**: Issue #1512 指出 QQ Bot 白名单缺少添加输入框，而飞书和钉钉已有完整实现，说明不同 IM 渠道的设置面板开发进度不统一。

### 💡 使用场景

- **MaoQianTu**（提交 7 条 Issue）是典型的**重度多 Agent 用户**，使用多个 IM 渠道（钉钉、飞书、QQ）、配置定时任务、管理大量会话，对配置一致性和数据管理有较高要求。
- **jimmy-xz**（Issue #1509）使用 skill-creator 技能生成自定义 skills，属于**技能开发者**角色，对长任务执行过程的可观测性有强需求。

### 😐 满意点

从当前 Issue 数据中未发现正面反馈。所有更新均为问题报告，说明活跃用户当前以"发现问题"为主要互动方式。

---

## 8. 待处理积压

### 🔴 需立即关注

| Issue | 原因 | 建议 |
|-------|------|------|
| [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) — SSRF 防护削弱 | 安全问题，今日新报告，0 响应 | 高优先级评估，确认是否为配置回退，考虑安全公告 |

### 🟡 建议近期处理

| Issue | 积压时长 | 影响范围 |
|-------|---------|---------|
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) — 禁用技能仍被调用 | 75 天 | 所有使用技能管理功能的用户 |
| [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) — Agent 配置不实时生效 | 75 天 | 所有多 Agent 用户 |
| [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) — OAuth Token 静默丢失 | 75 天 | 使用 GitHub Copilot 集成的用户 |
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) — 长任务无进度反馈 | 75 天 | 技能开发者 |

### 📋 积压健康度评估

- **总积压 Issue**: 15 条在 24 小时内被关闭，但全部为 stale 自动关闭，**实际修复率为 0%**
- **最长未响应**: 75 天（2026-04-07 创建的问题至今未获人工响应）
- **PR 活跃度**: 过去 24 小时 0 条 PR，项目处于**零贡献者活跃**状态
- **项目健康度**: ⚠️ **偏低**。核心指标（Issue 响应时间、PR 合并频率、版本发布节奏）均显示项目维护力度不足。建议维护者至少对安全 Issue #2181 和状态一致性 Bug（#1500、#1502）给出明确的处理计划或社区沟通。

---

> **日报生成时间**: 2026-06-22  
> **数据来源**: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **分析周期**: 2026-06-21 至 2026-06-22

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

# CoPaw 项目动态日报 — 2026-06-22

---

## 1. 今日速览

CoPaw 今日活跃度处于**高位**：过去 24 小时内 Issues 更新 16 条（新开/活跃 13 条，关闭 3 条），PR 更新 32 条（待合并 30 条，已合并/关闭 2 条），无新版本发布。项目当前处于**密集迭代期**，社区贡献者集中涌入移动端适配相关 PR（至少 8 个），同时 v1.1.12 版本暴露的若干回归 Bug 正在被快速跟进。整体来看，项目健康度良好，但积压 PR 数量偏高（30 个待合并），维护者审查压力较大。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共 2 个，另有多个重要 PR 处于活跃推进状态：

| PR | 状态 | 说明 |
|---|---|---|
| [#5359](https://github.com/agentscope-ai/CoPaw/pull/5359) | **已关闭** | 基于 PR #5350 的增强补丁——移动端 Chat Header 跑马厅效果、会话切换下拉、折叠菜单居中。已关闭，改动可能已并入 #5350 或替代方案 |
| [#5365](https://github.com/agentscope-ai/CoPaw/pull/5365) | **已关闭** | Agent Config 页面移动端响应式布局。已关闭，由 #5366 替代 |

**活跃推进中的关键 PR：**

- **[#5324](https://github.com/agentscope-ai/CoPaw/pull/5324)** — 修复 `send_file_to_user` 图片不显示问题（v1.1.12 回归），将 `FileResponse` 的 `content-disposition` 改为 inline，直接对应 Issue [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320)。
- **[#5334](https://github.com/agentscope-ai/CoPaw/pull/5334)** — 侧边栏折叠模式下允许切换 Agent，直接回应 Issue [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) 的用户诉求。
- **[#5357](https://github.com/agentscope-ai/CoPaw/pull/5357)** — 修复嵌入式模式下会话切换锁死问题，对应 Issue [#5354](https://github.com/agentscope-ai/CoPaw/issues/5354)。
- **[#5321](https://github.com/agentscope-ai/CoPaw/pull/5321)** — 新增 **Scroll 上下文管理策略**，提供检索驱动的历史压缩替代方案，同时修复非默认 Agent 上下文策略加载失败的 Bug。这是一个较大的架构级 PR。
- **[#5193](https://github.com/agentscope-ai/CoPaw/pull/5193)** — 新增 **Slack 频道支持**（Socket Mode + 流式回复），对应 Issue #5152，已开放 7 天。

**项目整体向前迈进的方向：** 移动端 UI 适配正在系统性推进（Channels、Sessions、CronJobs、Agent Config、Security、Models、SkillPool、Chat Header 等页面均已覆盖），v1.1.12 的回归 Bug 正在被逐一修复，上下文管理架构持续演进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 焦点 |
|---|---|---|
| [#5329](https://github.com/agentscope-ai/CoPaw/issues/5329) | **5 评论** | 移动端侧边栏折叠后无法切换 Agent |
| [#5353](https://github.com/agentscope-ai/CoPaw/issues/5353) | **3 评论** | 飞书群聊必须 @ 智能体才响应（已关闭） |
| [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | **3 评论** | 自定义 OpenAI 兼容提供商不支持 function calling |

**分析：**

- **#5329（最高评论）** 反映了真实用户通过手机浏览器访问 CoPaw 的使用场景。用户不仅提出了 Agent 切换按钮的需求，还指出了新建聊天按钮在移动端被挤出屏幕的布局问题。这直接催生了 PR #5334 和 PR #5350 等多个移动端适配 PR，说明社区对移动端体验的诉求非常强烈且已得到响应。
- **#5353** 虽已关闭，但 3 条评论集中在飞书群聊的 @ 行为配置问题上，说明企业 IM 集成场景下的配置灵活性是用户关注重点。
- **#5345** 暴露了 CoPaw 在自定义模型提供商支持上的功能缺口——Ollama 原生支持 function calling，但手动添加的 OpenAI 兼容提供商（如 OMLX）不行，说明 provider 适配层存在不一致性。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重性（影响核心功能）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320) | v1.1.12 升级后 `send_file_to_user` 图片不显示（回归） | ✅ [#5324](https://github.com/agentscope-ai/CoPaw/pull/5324) |
| [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) | Agent 忙碌时 `/api/console/chat` 返回 200 但静默丢弃消息 | ❌ |
| [#5354](https://github.com/agentscope-ai/CoPaw/issues/5354) | 消息发送队列串台 + 会话切换后切不回去 | ✅ [#5357](https://github.com/agentscope-ai/CoPaw/pull/5357) |

### 🟡 中严重性（影响体验）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#5353](https://github.com/agentscope-ai/CoPaw/issues/5353) | 飞书群聊必须 @ 智能体才响应（已关闭） | 已关闭 |
| [#5328](https://github.com/agentscope-ai/CoPaw/issues/5328) | 使用 DeepSeek 时 Agent 在 thinking 过程中卡死 | ❌ |
| [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333) | Agent 卡住时文本框仍可提交（未变为停止按钮） | ❌ |
| [#5358](https://github.com/agentscope-ai/CoPaw/issues/5358) | 会话切换时 `TypeError: Cannot read properties of null` | ❌ |
| [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330) | Zhipu 供应商 API

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 · 2026-06-22 (周一)

**项目**: [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
**分析周期**: 2026-06-21 → 2026-06-22

---

## 1. 今日速览

ZeptoClaw 本周维持极低频变更节奏——过去24小时内仅关闭了1条 Issue（#537）和合并/关闭了1条 PR（#611），均为 CI 基础设施类微调，无新功能发布、无新 Issue 开启、无活跃讨论。项目处于典型的**维护期稳态**，核心开发工作似已进入阶段性收敛。

| 指标 | 数值 |
|---|---|
| Issues 更新 | 1 (0 新开 / 1 关闭) |
| Pull Requests 更新 | 1 (0 待合并 / 1 关闭) |
| 新版本发布 | 0 |

---

## 2. 版本发布

过去24小时内无新版本发布。**本节省略。**

---

## 3. 项目进展

### PR #611 · 已关闭
**标题**: `chore(ci): promote binary-size to PR gate at 7.5MB`
作者: qhkm | 创建: 2026-06-01 | 关闭: 2026-06-21
🔗 [qhkm/zeptoclaw PR #611](https://github.com/qhkm/zeptoclaw/pull/611)

**变更摘要**:
- 将 `binary-size` CI 任务从「仅 push-to-main 时运行」升级为 **每次 PR 都必须通过** 的检查门控（PR gate）。
- 二进制体积上限从 **7MB 下调至 7.5MB**（注：Issue #537 原始提议为 7MB，此处 PR 实际采用稍宽松的 7.5MB 作为渐进实施的第一步）。

**战略意义**:
ZeptoClaw 的核心设计目标是 "does this still fit on a robot?"——即保持极小的二进制体积以适应嵌入式/机器人部署场景。此 PR 将体积管控从「事后观察」变为「事前拦截」，是项目基础设施成熟度提升的标志。

---

## 4. 社区热点

过去24小时内无活跃讨论、无评论、无 👍 反应。**本节省略。**

---

## 5. Bug 与稳定性

过去24小时内无新 Bug 报告、无崩溃或回归问题。**本节省略。**

---

## 6. 功能请求与路线图信号

过去24小时内无新功能请求。**本节省略。**

---

## 7. 用户反馈摘要

过去24小时内无用户评论或反馈。**本节省略。**

---

## 8. 待处理积压

| 编号 | 标题 | 状态 | 创建 | 最后更新 | 备注 |
|---|---|---|---|---|---|
| [#537](https://github.com/qhkm/zeptoclaw/issues/537) | `[chore, P1-critical] chore(ci): binary size budget gate` | ✅ 已关闭 | 2026-04-23 | 2026-06-21 | 已通过 PR #611 实现并关闭 |

**积压评估**: 当前无长期未响应的 Issue 或 PR。项目积压状态健康。

---

## 总结

ZeptoClaw 本周处于**低活跃维护期**，唯一的实质性变更是将二进制体积检查从可选观察升级为强制 PR 门控，体现了项目对「机器人可部署」这一核心设计约束的持续坚守。无新功能、无 Bug 报告、无社区讨论，整体项目健康度稳定。

---

*报告由 OWL 自动生成 · 数据来源: GitHub API*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-22

---

## 1. 今日速览

ZeroClaw 今日活跃度处于**高位**：过去 24 小时内 Issues 更新 41 条（新开/活跃 30 条，关闭 11 条），PR 更新 50 条（待合并 40 条，已合并/关闭 10 条），无新版本发布。项目正处于 **0.8.0 版本的持续迭代期**，大量工作集中在测试覆盖补全、多平台构建修复、渠道功能增强和运行时稳定性上。维护者 Audacity88 今日表现极为活跃，亲自提交了多个 PR 并推动了一批 Issue 关闭。整体来看，项目节奏紧凑，积压 PR 数量偏高（40 个待合并），需要关注合并吞吐。

---

## 2. 版本发布

**无新版本发布。** 当前版本线为 0.8.0，RFC #6808 中提及的 Work Lanes / Board Automation / Label Cleanup 治理改进正在推进中。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在**测试覆盖、构建修复和渠道 Bug 修复**三个方向：

| PR | 状态 | 说明 |
|---|---|---|
| [#7835](https://github.com/zeroclaw-labs/zeroclaw/pull/7835) | ✅ 已合并 | `git_operations` 工具在非仓库目录下返回的错误信息增加了路径上下文和恢复提示，改善用户体验 |
| [#7845](https://github.com/zeroclaw-labs/zeroclaw/pull/7845) | ✅ 已合并 | 为 `execute_one_tool` 添加了 poisoned mutex 恢复路径的回归测试，提升运行时健壮性 |
| [#7859](https://github.com/zeroclaw-labs/zerocaw/pull/7859) | ✅ 已合并 | 为 `Agent::turn` 和 `Agent::turn_streamed` 的空白输入拒绝行为添加了单元测试 |
| [#7724](https://github.com/zeroclaw-labs/zeroclaw/pull/7724) | ✅ 已合并 | Lark/Feishu 渠道新增 `ack_reactions` 配置支持，修复快速 ack 反应路径未受控的问题 |
| [#8096](https://github.com/zeroclaw-labs/zeroclaw/pull/8096) | ✅ 已合并 | `install.sh` 修复 Intel Mac 上错误下载 arm64 预编译二进制的问题（`bad CPU type in executable`） |

**整体推进评估：** 今日合并的 PR 以小型修复和测试为主，未涉及大型功能合并。项目在**测试基础设施补全**和**跨平台兼容性**方面稳步前进，但 40 个待合并 PR 的积压表明合并带宽仍是瓶颈。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

1. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup**（11 条评论）
   - 这是当前评论最多的 Issue，属于治理 RFC，已进入 Accepted / rollout in progress 状态。核心诉求是**自动化工作流路由**，减少维护者手动管理看板的工作量。涉及 0.8.0 的标签体系重构。

2. **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) — [Feature]: where is napcat channel**（9 条评论）
   - 用户希望 ZeroClaw 支持 NapCat/OneBot 协议接入 QQ 渠道。这是一个**长期悬而未决的渠道需求**（自 2026-03-02 创建至今），社区呼声持续但尚未有官方实现路线图。

3. **[#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) — [Feature]: Webhook transforms**（6 条评论）
   - 用户需要 Webhook 系统支持自定义路径和 payload 转换，以兼容 GitHub 等通用 Webhook 发送方。当前 Webhook 系统对任意 payload 的支持不足，限制了集成场景。

4. **[#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) — [Feature]: use tool-calling for memory consolidation**（4 条评论）
   - 提议将 memory consolidation 的输出从 prompt-constrained JSON 改为结构化 tool-calling（如 `save_memory` 工具），以提高可靠性和解析稳定性。

5. **[#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) — Prompt-triggered install suggestions for missing skills**（4 条评论）
   - 当用户请求 ZeroClaw 有能力提供但尚未安装/启用的功能时，主动推荐可安装的技能或插件。这是**改善新用户发现体验**的关键功能。

### 📌 值得关注的活跃 PR

- **[#7926](https://github.com/zeroclaw-labs/zeroclaw/pull/7926)** — 恢复紧凑 prompt 模式下 `SKILL.md` frontmatter 中 `always: true` 的支持，修复 #7904 回归
- **[#7827](https://github.com/zeroclaw-labs/zeroclaw/pull/7827)** — 用户可配置的额外技能注册表（`registry:<name>/<skill>`），扩展技能生态
- **[#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098)** — Mattermost 渠道新增 WebSocket 监听模式，替代 3 秒轮询降低延迟

---

## 5. Bug 与稳定性

### 🔴 严重（S1 — 工作流阻塞）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth 认证后仍报 rate_limited 错误，完全无法使用 | 开放中 | 无 |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | `context_compression` 对 OpenAI 兼容 provider（如 MiniMax）丢弃 tool_calls/tool(result)，导致工具循环和无效 system 角色错误 | 开放中 | 无 |
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | OpenAI Responses/reasoning 和 Anthropic turns 上 native/MCP 工具不可用 | 开放中 | 无 |
| [#7898](https://github.com/zeroclaw-labs/zeroclaw/issues/7898) | `rust_native` 浏览器快照和 @ref 选择器在 WebDriver 下失败 | 开放中 | 无 |
| [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) | Quickstart 中添加 Anthropic provider 后在 chat 中不可用，需 reset | 开放中 | 无 |

### 🟡 中等（S2 — 行为降级）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Telegram 渠道下 Prompt Caching 不工作，每次都强制完整重新处理 | 开放中 | 无 |
| [#7896](https://github.com/zeroclaw-labs/zeroclaw/issues/7896) | Groq 原生 tool 消息缺少 `name` 字段 | 开放中 | 无 |
| [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | zeroclaw 日志输出到 stdout 而非 stderr，污染 `config schema` 等命令的输出 | 开放中 | 无 |

### 🟢 已修复/关闭

| Issue | 描述 | 关闭方式 |
|---|---|---|
| [#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089) | Docker/Debian Dockerfile 构建因缺失 aardvark-sys build.rs 失败 | 已关闭 |
| [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) | agent rename 在配置持久化前移动 owned state | 已关闭 |
| [#8095](https://github.com/zeroclaw-labs/zeroclaw/issues/8095) | install.sh 在 Intel Mac 上安装 arm64 预编译二进制 | 已通过 [#8096](https://github.com/zeroclaw-labs/zeroclaw/pull/8096) 修复 |
| [#7810](https://github.com/zeroclaw-labs/zeroclaw/issues/7810) | git_operations 在非仓库路径下错误信息缺少上下文 | 已通过 [#7835](https://github.com/zeroclaw-labs/zeroclaw/pull/7835) 修复 |

**稳定性评估：** 当前有 **5 个 S1 级别 Bug 处于开放状态且无修复 PR**，涉及核心 provider 集成（Gemini、MiniMax、OpenAI、Anthropic）和工具系统，对用户体验影响较大，建议优先排期。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本的功能

| 方向 | Issue/PR | 信号强度 | 说明 |
|---|---|---|---|
| **技能系统增强** | [#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) + [#7827](https://github.com/zeroclaw-labs/zeroclaw/pull/7827) | ⭐⭐⭐ | 已有活跃 PR 实现额外技能注册表，配合缺失技能自动推荐，构成完整的技能发现闭环 |
| **渠道国际化** | [#7858](https://github.com/zeroclaw-labs/zeroclaw/pull/7858) | ⭐⭐⭐ | 核心运行时命令回复已本地化，中文翻译已添加 |
| **Mattermost WebSocket** | [#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) | ⭐⭐ | 大型 PR，实现完整，待审核 |
| **Slack 附件上传** | [#7170](https://github.com/zeroclaw-labs/zeroclaw/pull/7170) | ⭐⭐ | 支持 outbound 附件上传，已有实现 |
| **上下文压缩通知** | [#7162](https://github.com/zeroclaw-labs/zeroclaw/pull/7162) | ⭐⭐ | 在上下文压缩前向用户发送渠道可见通知 |
| **OTel 追踪增强** | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) + [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) | ⭐⭐ | Turn 级 trace 关联和 prompt/completion 捕获，已有下游实现可上游化 |
| **内存系统改进** | [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) | ⭐ | Tool-calling 方式替代 prompt-constrained JSON，技术方向明确但尚无 PR |

### 长期积压需求

- **NapCat/OneBot 渠道** ([#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503))：社区需求强烈但无官方排期
- **Webhook 转换** ([#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467))：通用集成能力，需要架构层面支持
- **更强配对码** ([#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613))：安全增强，6 位数字太弱
- **aardvark-sys crate 退役** ([#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043))：架构清理 RFC，刚提出

---

## 7. 用户反馈摘要

### 痛点

1. **Provider 兼容性问题突出**：Gemini OAuth 完全不可用 ([#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879))、MiniMax 等 OpenAI 兼容 provider 的工具调用在上下文压缩后被破坏 ([#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361))、Groq 工具消息格式不完整 ([#7896](https://github.com/zeroclaw-labs/zeroclaw/issues/7896))。**多 provider 适配质量是用户最集中的不满来源。**

2. **本地模型体验有待提升**：Issue [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 获得 2 个赞，用户希望有专门的本地模型模式，减少 prompt 膨胀、禁用宽松回退解析、防止系统指令泄露到用户可见输出。

3. **安装体验存在平台缺陷**：Intel Mac 用户因 `install.sh` 硬编码 arm64 而无法安装 ([#8095](https://github.com/zeroclaw-labs/zeroclaw/issues/8095))，Docker 构建因 aardvark-sys 缺失而失败 ([#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089))。**跨平台安装可靠性需要系统性改进。**

4. **新用户引导不足**：用户不知道 NapCat 渠道在哪里 ([#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503))，不知道缺失的技能可以自动安装 ([#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289))。**发现和引导机制是降低新用户门槛的关键。**

### 满意点

- 维护者 Audacity88 响应迅速，今日亲自推动多个 PR 合并和 Issue 关闭
- 测试覆盖补全工作系统推进（#7685 父任务下的多个子 PR 陆续合并）
- 国际化工作开始落地（中文翻译已添加）

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

| 项目 | 创建时间 | 状态 | 说明 |
|---|---|---|---|
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) — NapCat/OneBot 渠道 | 2026-03-02 | 开放，9 条评论 | **已超 3 个月无官方回应**，社区需求强烈 |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) — Webhook transforms | 2026-03-02 | 开放，6 条评论 | **已超 3 个月**，影响通用 Webhook 集成 |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) — Gemini CLI OAuth | 2026-03-28 | 开放，S1 | **已近 3 个月**，核心 provider 完全不可用 |
| [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) — 日志输出到 stderr | 2026-03-26 | 开放 | **已近 3 个月**，影响 CLI 工具链使用 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — 153 个提交丢失审计 | 2026-04-24 | 进行中 | 大量历史工作需要恢复，进度不明 |
| [#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) — Mattermost WebSocket | 2026-06-02 | 开放，大型 PR | **已超 2 周**，需要审核资源 |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) — 本地模型模式 | 2026-04-04 | 进行中 | 有 2 个赞，方向明确但推进缓慢 |

**积压健康度评估：** 40 个待合并 PR 中多个已超过一周未获审核响应，建议维护者集中安排 PR review session，优先处理 S1 Bug 的修复 PR 和已就绪的大型功能 PR（如 Mattermost WebSocket）。

---

*数据来源：GitHub API | 统计时间：2026-06-22 | 生成：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*