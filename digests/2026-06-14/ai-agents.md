# OpenClaw 生态日报 2026-06-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-14 00:42 UTC

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

# OpenClaw 项目动态日报 — 2026-06-14

---

## 1. 今日速览

过去 24 小时，OpenClaw 项目保持高活跃度：**Issues 更新 500 条**（新开/活跃 356，已关闭 144），**PR 更新 500 条**（待合并 303，已合并/关闭 197），并发布了 **2 个 Beta 版本**（v2026.6.8-beta.1、v2026.6.7-beta.1）。项目正处于密集迭代期，频道交付（Telegram/WhatsApp/Discord/Slack）、内存管理、安全加固、多平台兼容性是本周核心主线。待合并 PR 积压 303 条，需关注 review 瓶颈。

---

## 2. 版本发布

### v2026.6.8-beta.1
- **Telegram 频道交付大幅增强**：支持结构化富文本（表格、列表、可折叠 blockquote），CLI 后端交付保留 prompt，移除原生草稿迁移，更安全的富媒体边界处理。
- **WhatsApp 频道交付同步改进**（具体细节延续 v2026.6.7 的 WhatsApp 优化线索）。

### v2026.6.7-beta.1
- **频道交付全面收紧**：Slack 同频道最终消息持久化到转录；顶层 `image` 消息工具可附加媒体；Telegram 可折叠 blockquote 和 spool 机制。
- **静默回复、进度草稿、分页动作结果**等交付链路优化。

> ⚠️ **迁移注意**：Telegram 富文本和草稿迁移的变更可能影响依赖旧格式的自定义集成；建议测试环境验证后再升级生产。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（精选）

| PR | 领域 | 要点 |
|---|---|---|
| [PR #92580](https://github.com/openclaw/openclaw/pull/92580) | Cron | 修复隔离 cron 会话的投递目标丢失问题，将解析后的投递目标持久化到 deliveryContext |
| [PR #92547](https://github.com/openclaw/openclaw/pull/92547) | Nodes | 节点审批诊断信息显式化：approved / pending-approval / pending-reapproval / unapproved |
| [PR #92488](https://github.com/openclaw/openclaw/pull/92488) | Gateway | `/v1/responses` 端点支持纯图片输入，与 chat completions 对齐 |
| [PR #92724](https://github.com/openclaw/openclaw/pull/92724) | Gateway | 移除 Chokidar `awaitWriteFinish` 轮询，降低 macOS 空闲 CPU 占用 |
| [PR #92790](https://github.com/openclaw/openclaw/pull/92790) | Session | 清除过期的自动回退来源标记，避免模型选择卡死在旧回退 |
| [PR #92698](https://github.com/openclaw/openclaw/pull/92698) | Memory | 跳过 markdown 占位片段的短期记忆晋升，防止骨架内容污染 MEMORY.md |
| [PR #92800](https://github.com/openclaw/openclaw/pull/92800) | Telegram | 优先响应 callback queries，避免 grammY sequentialize 导致 15s 超时 |
| [PR #92810](https://github.com/openclaw/openclaw/pull/92810) | Voice Call | 拒绝未验证的语音媒体流，关闭未校验的 start 帧 |
| [PR #92786](https://github.com/openclaw/openclaw/pull/92786) | State | 容忍不支持 chmod 的挂载卷，修复 agent DB 权限初始化 |
| [PR #92604](https://github.com/openclaw/openclaw/pull/92604) | Status | 修复 TUI `/status` 中 context 百分比使用累积历史数据的错误 |
| [PR #92632](https://github.com/openclaw/openclaw/pull/92632) | Memory | `memory_search` 超时路径修复，不再将工具超时误报为 embedding 提供者失败 |
| [PR #92463](https://github.com/openclaw/openclaw/pull/92463) | Setup | 跳过失用的内置频道 setup fallback，减少误报警告 |

**整体方向**：项目在 **稳定性修复**（cron 投递、session 状态、内存管理）和 **安全加固**（语音流校验、节点审批诊断）两条主线同步推进，同时持续打磨 **频道交付体验**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 👍 | 核心诉求 |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent 完成通知静默丢失 | 19 | 1 | 子 agent 编排结果丢失无重试/无通知，需要可靠性保障 |
| [#54253](https://github.com/openclaw/openclaw/issues/54253) — RISC-V64 上 LLM 请求失败 | 14 | 4 | 非 x86 架构兼容性支持 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) — gh-issues skill 注入未过滤内容到子 agent prompt | 13 | 1 | **安全**：GitHub issue body 未做 sanitization 直接注入 prompt |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) — Cron 触发污染全局运行时状态 | 13 | 1 | Cron 隔离性不足，影响全局状态 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — 请求级别成本预算 | 12 | 1 | 需要在 gateway 层实现 per-agent 日/月成本上限 |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) — 飞书 read image 工具丢失媒体附件 | 12 | 0 | 飞书渠道媒体投递链路中断 |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) — Heartbeat/Cron "Current time" 时间戳过期 | 11 | 0 | 回归 bug：心跳消息中时间戳不刷新 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) — Write 工具缺少 append 模式 | 11 | 1 | 隔离 cron 会话写共享文件时静默数据丢失 |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) — Discord 泄露内部工具调用痕迹 | 10 | 1 | **安全**：内部 LLM tool-call 元数据泄露到用户频道 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) — 多 agent 编排不稳定 | 10 | 1 | 并发 agent 配置覆盖、session-lock 失败、子 agent 脱离 |

### 🔥 热门 PR

| PR | 评论 | 要点 |
|---|---|---|
| [PR #92725](https://github.com/openclaw/openclaw/pull/92725) — 外部 reranker 支持 | — | memory-core 增加外部 reranker，突破仅 MMR/QMD 的限制 |
| [PR #88815](https://github.com/openclaw/openclaw/pull/88815) — Channel echo / session pinning | — | 会话可镜像 turn 到其他线程，跨频道消息同步 |
| [PR #44884](https://github.com/openclaw/openclaw/pull/44884) — Gateway 公网安全加固 | — | IP 访问控制、速率限制等安全增强 |

**社区核心诉求归纳**：
1. **可靠性**：子 agent/cron 的静默失败是最大痛点，用户要求可观测性和自动恢复。
2. **安全**：prompt 注入和内部信息泄露是高频安全诉求。
3. **成本控制**：用户需要原生的成本预算机制，而非依赖外部监控。
4. **多平台兼容**：RISC-V64、Windows 等边缘平台的支持需求持续增长。

---

## 5. Bug 与稳定性

### 🔴 P0/P1 严重 Bug

| Issue | 严重度 | 影响 | 状态 | 已有 Fix PR |
|---|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway 内存泄漏（350MB→15.5GB） | 🔴 P0 | OOM 崩溃，反复重启 | OPEN | ❌ |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent 完成静默丢失 | 🔴 P1 | 消息丢失，无通知 | OPEN | ❌ |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) — Discord 泄露内部工具调用 | 🔴 P1 | 安全/隐私泄露 | OPEN | ❌ |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) — gh-issues prompt 注入 | 🔴 P1 | 安全：未过滤内容注入子 agent | OPEN | ❌ |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) — Compaction 超时导致消息重复发送 | 🔴 P1 | 无限循环重复消息 | OPEN | ❌ |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) — Playwright 未捕获断言崩溃 Gateway | 🔴 P1 | 整个 Gateway 进程退出 | OPEN | ❌ |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) — Cron 在 API 500 时未快速失败 | 🔴 P1 | 持续超时浪费资源 | OPEN | ❌ |
| [#43996](https://github.com/openclaw/openclaw/issues/43996) — no-new-privileges 下沙箱立即退出 | 🔴 P1 | 沙箱完全不可用 | OPEN | ❌ |
| [#45049](https://github.com/openclaw/openclaw/issues/45049) — Agent 循环允许模拟工具调用 | 🔴 P1 | 工具调用不实际执行 | OPEN | ❌ |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) — Write 工具无 append 模式 | 🔴 P1 | 共享文件被覆盖，数据丢失 | OPEN | ❌ |

### 🟡 P2 回归/行为 Bug

| Issue | 状态 | 已有 Fix PR |
|---|---|---|
| [#44993](https://github.com/openclaw/openclaw/issues/44993) — Heartbeat 时间戳过期（回归） | OPEN | ❌ |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) — OPENCLAW_HOME 嵌套目录（回归） | OPEN | ❌ |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) — Control UI 头像不显示（回归） | OPEN | ❌ |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) — Windows `openclaw update` EBUSY 错误 | OPEN | ❌ |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) — 内存管理混乱（回归） | OPEN | ❌ |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) — Discord 路由/mention-gating 回归 | OPEN | ❌ |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) — Telegram DM 仍路由到 agent:main:main | OPEN | ❌ |
| [#45314](https://github.com/openclaw/openclaw/issues/45314) — 早期中止响应模板变量未填充 | OPEN | ❌ |

> ⚠️ **稳定性警报**：Gateway 内存泄漏（[#91588](https://github.com/openclaw/openclaw/issues/91588)）和 Playwright 崩溃（[#45224](https://github.com/openclaw/openclaw/issues/45224)）是最紧急的 P0 问题，目前均无修复 PR。

---

## 6. 功能请求与路线图信号

### 高需求功能（已有 PR 推进）

| 功能 | Issue | 相关 PR | 信号 |
|---|---|---|---|
| 备份排除模式 | [#40786](https://github.com/openclaw/openclaw/issues/40786) | [PR #44288](https://github.com/openclaw/openclaw/pull/44288) | ✅ 已有 PR，待证明 |
| 外部 Reranker | — | [PR #92725](https://github.com/openclaw/openclaw/pull/92725) | ✅ 实现中 |
| Channel Echo / Session Pinning | — | [PR #88815](https://github.com/openclaw/openclaw/pull/88815) | ✅ 大型 PR，待证明 |
| Gateway 公网安全加固 | — | [PR #44884](https://github.com/openclaw/openclaw/pull/44884) | ✅ 已有 PR，待证明 |
| 内存压力阈值可配置 | — | [PR #86015](https://github.com/openclaw/openclaw/pull/86015) | ✅ 已合并 |

### 纯 Issue 待响应功能

| 功能 | Issue | 👍 | 可能性评估 |
|---|---|---|---|
| Per-agent 成本预算 | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 1 | 中 — 社区需求明确，但实现复杂 |
| Pre-reset 记忆刷新 | [#45608](https://github.com/openclaw/openclaw/issues/45608) | 4 | 高 — 与现有 compaction flush 机制对齐 |
| Write 工具 append 模式 | [#40001](https://github.com/openclaw/openclaw/issues/40001) | 1 | 高 — 数据丢失 bug，修复需求迫切 |
| YAML 配置格式 | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 2 | 低 — 锦上添花，非优先 |
| MathJax/LaTeX 支持 | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 6 | 中 — 学术用户群体需求 |
| 路径级 RWX 权限 | [#39979](https://github.com/openclaw/openclaw/issues/39979) | 0 | 中 — 安全增强，但设计复杂 |
| 自动会话记忆保留 | [#40418](https://github.com/openclaw/openclaw/issues/40418) | 1 | 中 — 与 pre-reset flush 相关 |
| 可配置 session 启动消息 | [#45501](https://github.com/openclaw/openclaw/issues/45501) | 1 | 高 — 小改动，用户需求明确 |

---

## 7. 用户反馈摘要

### 😤 痛点（不满意）

1. **静默失败无处不在**：子 agent 丢失结果、cron 超时无通知、write 覆盖文件无警告 — 用户反复强调"silent"一词，说明系统可观测性严重不足。（[#44925](https://github.com/openclaw/openclaw/issues/44925)、[#40001](https://github.com/openclaw/openclaw/issues/40001)、[#45494](https://github.com/openclaw/openclaw/issues/45494)）
2. **内存泄漏影响生产**：Gateway RSS 从 350MB 涨到 15.5GB，导致 OOM 重启，严重影响 7x24 部署场景。（[#91588](https://github.com/openclaw/openclaw/issues/91588)）
3. **安全边界模糊**：GitHub issue body 未过滤注入 prompt、Discord 泄露内部 tool-call 元数据 — 用户对安全性的担忧日益增加。（[#45740](https://github.com/openclaw/openclaw/issues/45740)、[#44905](https://github.com/openclaw/openclaw/issues/44905)）
4. **回归频繁**：多个用户报告升级后时间戳过期、UI 卡死、路径嵌套等问题，说明测试覆盖不足。（[#44993](https://github.com/openclaw/openclaw/issues/44993)、[#45698](https://github.com/openclaw/openclaw/issues/45698)、[#45765](https://github.com/openclaw/openclaw/issues/45765)）
5. **Windows 体验差**：EBUSY 更新失败、node 连接后无命令报告 — Windows 用户感到被忽视。（[#40540](https://github.com/openclaw/openclaw/issues/40540)、[#84644](https://github.com/openclaw/openclaw/issues/84644)）

### 😃 满意

1. **频道交付持续改进**：v2026.6.7/6.8 的 Telegram/WhatsApp 富文本和投递优化获得积极反馈，用户认可"richer and less brittle"的方向。
2. **社区响应活跃**：高评论 Issue 通常能在当天获得 maintainer 回复，clawsweeper 标签体系运作良好。
3. **功能丰富度**：多 agent 编排、多频道支持、memory 系统被用户视为核心竞争力。

---

## 8. 待处理积压

### 🚨 长期未响应的高优先级 Issue

| Issue | 创建日期 | 评论 | 状态 | 建议 |
|---|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent 静默丢失 | 2026-03-13 | 19 | OPEN, stale | 🔴 需立即响应，影响核心编排可靠性 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) — gh-issues prompt 注入 | 2026-03-14 | 13 | OPEN | 🔴 安全问题，需优先处理 |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) — Discord 泄露内部信息 | 2026-03-13 | 10 | OPEN | 🔴 安全问题 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) — Write 无 append 模式 | 2026-03-08 | 11 | OPEN, stale | 🟠 数据丢失，已 stale 近 3 个月 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) — 多 agent 编排不稳定 | 2026-03-11 | 10 | OPEN | 🟠 核心功能可靠性 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent 成本预算 | 2026-03-10 | 12 | OPEN, stale | 🟡 企业用户需求，长期未响应 |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) — 飞书图片丢失 | 2026-03-10 | 12 | OPEN, stale | 🟡 飞书用户核心功能 |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) — Compaction 超时循环 | 2026-03-12 | 7 | OPEN | 🟠 无限循环 bug |

### 📋 待 Review 的大型 PR

| PR | 创建日期 | 大小 | 状态 |
|---|---|---|---|
| [PR #44884](https://github.com/openclaw/openclaw/pull/44884) — Gateway 安全加固 | 2026-03-13 | XL | 待证明 |
| [PR #88815](https://github.com/openclaw/openclaw/pull/88815) — Channel echo | 2026-05-31 | XL | 待证明 |
| [PR #44288](https://github.com/openclaw/openclaw/pull/44288) — 备份排除模式 | 2026-03-12 | XL | 待证明 |
| [PR #92725](https://github.com/openclaw/openclaw/pull/92725) — 外部 Reranker | 2026-06-13 | XL | 待证明 |

> 💡 **建议**：当前待合并 PR 积压 303 条，其中 4 个 XL 级 PR 均处于"待证明"状态。建议维护者优先审查这些大型 PR，避免积压恶化。

---

*日报由 OWL 基于 2026-06-14 GitHub 数据自动生成。数据截至当日 UTC 时间。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告

**日期：2026-06-14 | 分析覆盖：12 个活跃项目 | 生成：OWL**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**高速分化与深度迭代并行**的关键阶段。OpenClaw 作为核心参照系，以日更数百 issues/PRs 的吞吐量和多频道交付、记忆管理、安全加固三路并进的策略，持续抬高行业基线；Hermes Agent、ZeroClaw、NanoBot 等中坚力量在 Telegram Rich Messages、WebSocket 交互、WebUI 体验等细分方向快速跟进；PicoClaw、NanoClaw 则分别深耕边缘硬件平台和容器化隔离部署，填补差异化场景空白。共性信号是**可靠性（静默失败）和安全边界（prompt 泄露/注入）已成为全行业的首要痛点**，而非单纯的功能堆叠。值得注意的是，部分项目（LobsterAI、TinyClaw、ZeptoClaw）已出现社区互动停滞迹象，生态呈现明显的**头部集中、长尾分化**格局。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 (开/关) | PR 更新 (待合/已合) | 新版本 | 健康度 |
|---|---|---|---|---|
| **OpenClaw** | 500 (356/144) | 500 (303/197) | ✅ 2 个 Beta | 🟡 高活跃，积压严重 |
| **Hermes Agent** | ~56 (12/44) | 100 (45/55) | ❌ | 🟢 健康，响应快 |
| **ZeroClaw** | 42 (25/17) | 50 (38/12) | ❌ | 🟡 高活跃，积压偏高 |
| **NanoBot** | 5 (2/3) | 19 (14/5) | ❌ | 🟢 健康 |
| **CoPaw** | 10 | 8 (5/3) | ❌ | 🟡 中等，PR 积压 |
| **NanoClaw** | 1 (0/1) | 15 (1/14) | ❌ | 🟢 健康，大量合并 |
| **PicoClaw** | 2 (1/1) | 7 (2/5) | ✅ 1 Nightly | 🟢 健康 |
| **IronClaw** | 6 (3/3) | 24 (18/6) | ❌ | 🟡 高活跃，CI 失败 |
| **Moltis** | 1 | 1 (1/0) | ❌ | 🟢 低活跃，稳定 |
| **NullClaw** | 2 | 1 (1/0) | ❌ | 🟡 低活跃，关键 Bug 待修 |
| **LobsterAI** | 4 (全 stale) | 5 (3/2) | ❌ | 🔴 社区停滞 |
| **TinyClaw** | — | — | — | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | ⚪ 无活动 |

> **注：** Issues/PR 数为过去 24 小时更新总量。健康度综合考虑活跃度、积压程度、响应速度和关键 Bug 处置情况。

---

## 3. OpenClaw 在生态中的定位

**规模碾压。** OpenClaw 的日 Issues 更新量（500）和 PR 更新量（500）均超过其他所有项目之和，已形成事实上的生态枢纽地位。

**核心优势：**
- **频道覆盖最广**：Telegram、WhatsApp、Discord、Slack、飞书全渠道持续投入，v2026.6.7/6.8 的富文本交付改进（表格、列表、blockquote）目前无竞品对标；
- **基础设施最完整**：从 Gateway 层（成本预算、速率限制）到 Session 层（compaction、model fallback）到 Cron 层（隔离投递、pause/resume），全链路均有深度覆盖；
- **社区自治成熟**：clawsweeper 标签体系运作良好，500 条 PR 的 reviewer 市场已经形成。

**相较竞品的差异：**
- vs **Hermes Agent**：OpenClaw 在记忆子系统（memory_search、compaction flush、pre-reset flush）上投入更深；Hermes 在 Telegram Bot API 10.1 Rich Messages 跟进更快，编码场景（Codex ACP、OAuth token 刷新）更聚焦；
- vs **ZeroClaw**：ZeroClaw 在 Rust/WASM 插件架构、多引擎统一（RFC-6969/7415）等底层架构设计上更前沿；OpenClaw 在生产稳定性和多渠道路由上领先；
- vs **NanoBot**：NanoBot 的 WebUI 与 config.json 对齐策略更接近"一体化开箱即用"思路；OpenClaw 更倾向于可组合的工具链范式；
- vs **PicoClaw/NanoClaw**：后两者分别在边缘硬件（RISC-V64、LoRa/GPS）和容器化安全隔离上开辟细分赛道，与 OpenClaw 的通用定位互补而非竞争。

**关键短板：** 303 个待合并 PR 积压是最大结构性风险；Gateway 内存泄漏（#91588，350MB→15.5GB）和 Playwright 崩溃（#45224）两个 P0 Bug 尚无修复 PR。

---

## 4. 共同关注的技术方向

以下方向在**两个及以上项目**中同期涌现，具有跨项目的行业共识意义：

### 4.1 记忆管理子系统的大重构期

| 涉及项目 | 具体诉求 |
|---|---|
| **OpenClaw** | memory_search 超时路径修复、markdown 骨架内容污染 MEMORY.md、请求级成本预算 |
| **Hermes Agent** | Auto Dream 自动记忆整合（Issue #10771，👍5）、上下文压缩被打断导致 fallback summary（#23975）、Memory 满后静默挂起（#42405） |
| **NanoBot** | idleCompact 丢弃后 8 条之外的历史导致总结遗漏（已修复 #4326） |
| **ZeroClaw** | Dream Mode 记忆反思与学习提案（#5849，18 条评论，最高讨论量） |

> **趋势判断：** 所有主要项目均在记忆子系统的可靠性、自动压缩和长期知识管理上遭遇瓶颈，这是 AI 助手从"短会话可用"到"长周期自主"的核心技术门槛。

### 4.2 多模态能力补课期

| 涉及项目 | 具体诉求 |
|---|---|
| **OpenClaw** | Gateway 纯图片输入支持（已合并）、飞书 read image 媒体附件丢失 |
| **NanoBot** | Ollama 多模态图片支持（已有 PR）、Codex 图片生成 SSE 处理修复 |
| **PicoClaw** | 视觉模型路由修复（纯文本模型幻觉，已修复 #3117）、图像输入压缩策略（待合 PR #2964） |
| **NanoClaw** | Ollama 多模态图片支持（已合并 #2072） |
| **CoPaw** | docx/pdf 文件下载 404（部分修复） |

### 4.3 Cron/定时任务可靠性

| 涉及项目 | 具体诉求 |
|---|---|
| **OpenClaw** | Cron 投递目标丢失（已修复）、Cron 污染全局状态、Write 工具无 append 模式导致数据丢失 |
| **NullClaw** | Agent 型 cron job 静默失败，Telegram 投递完全不工作（use-after-free，PR #954 待合） |
| **ZeroClaw** | Cron pause/resume 功能（已合并 #7398） |
| **CoPaw** | 定时任务单个无效 job 导致全部加载失败的级联崩溃（PR #5040 待合） |
| **Hermes Agent** | Cron 后台 review 阶段只读工具被阻断（#45877） |

### 4.4 Prompt 注入与安全边界

| 涉及项目 | 具体诉求 |
|---|---|
| **OpenClaw** | gh-issues 未过滤内容注入子 agent prompt（#45740）、Discord 泄露内部 tool-call 元数据（#44905） |
| **NanoBot** | exec workspace symlink 逃逸防护（已修复 #4098） |
| **CoPaw** | 上下文压缩丢失人设文件导致 Agent 身份崩溃（#5171） |
| **Hermes Agent** | dotenv override 优先级违反 12-factor 原则（#18705） |

### 4.5 WebUI/桌面客户端体验

| 涉及项目 | 具体诉求 |
|---|---|
| **NanoBot** | WebUI 与 config.json 对齐、反向代理子路径支持、自动化管理视图、TTS 多提供商配置 |
| **Hermes Agent** | Desktop 原生 OS 通知（#45866）、macOS GPU 启动崩溃（#45102） |
| **ZeroClaw** | canvas 页面空白回归（#7563）、macOS App 权限检测失败（#7527） |
| **CoPaw** | Tauri 桌面端启动从 1-2 分钟恶化至十几分钟（#5047） |
| **IronClaw** | Nightly E2E 持续失败 18 天（#4108） |

### 4.6 可观测性与静默失败

**这是跨项目的最大共同痛点。** OpenClaw 的 subagent 完成静默丢失、cron 超时无通知；NullClaw 的 cron job 标记完成但实际未执行；Hermes Agent 的 memory 满后静默挂起；NanoClaw 的 poll-loop 静默吞掉 5xx 错误——所有项目都在被"看不见的失败"反复困扰，社区对可观测性（日志、告警、状态反馈）的需求已全面觉醒。

---

## 5. 差异化定位分析

### 5.1 功能侧重对比

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | NanoBot | PicoClaw | NanoClaw | CoPaw | IronClaw | Moltis | NullClaw | LobsterAI | Tiny/Zepto |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 核心定位 | 全能型 Agent 平台 | 编码/研究型 Agent | 插件化运行时 | 轻量一体化助手 | 边缘硬件 Agent | 安全容器化 Agent | 国产场景 Agent 平台 | 企业级工作流引擎 | MCP 协议栈 | 调度+IM 桥接 | IDE 型创作工具 | 概念/微型 |
| 多渠道路由 | ★★★★★ | ★★★ | ★★★★ | ★★★ | ★★ | ★★ | ★★★ | ★★★★ | ★ | ★★★ | ★ | — |
| 记忆系统 | ★★★★ | ★★★★ | ★★★ | ★★★ | ★★ | ★★ | ★★★ | ★★★ | ★ | ★ | ★ | — |
| 插件/扩展性 | ★★★ | ★★ | ★★★★★ | ★★ | ★ | ★★ | ★★ | ★★★ | ★★★★ | ★ | ★ | — |
| WebUI | ★ | ★★★ | ★★★ | ★★★★ | ★ | ★ | ★★★★ | ★★★ | ★ | ★ | ★★★★★ | — |
| 桌面客户端 | — | ★★★★ | ★★★ | ★ | — | — | ★★★★ | — | — | — | ★★★ | — |
| 编码/ACP 集成 | ★★ | ★★★★★ | ★★★ | ★ | — | — | ★ | — | — | — | ★★★★ | — |

### 5.2 目标用户画像

- **OpenClaw**：技术型个人用户 + 小型团队；需要多 IM 渠道接入、高度可定制；运维能力强，能处理 300+ PR 积压的复杂度。
- **Hermes Agent**：研究者 + 开发者；重编码场景（Codex ACP、OAuth 管理）、长会话记忆需求。
- **ZeroClaw**：架构偏好者（Rust/WASM）；关注插件系统长期可扩展性；Web UI 重度用户。
- **NanoBot**：非技术背景个人用户；依赖 WebUI 管理、开源模型（Ollama）优先；追求开箱即用体验。
- **PicoClaw**：嵌入式/边缘计算开发者；需要在 FreeBSD/RISC-V64 等非标准平台运行。
- **NanoClaw**：安全敏感型部署；需要 Docker 容器化隔离、Signal 加密通讯。
- **CoPaw**：中国大陆用户；飞书/QQ/微信通道 + 国产模型（Kimi Coding）+ 东南亚语言支持。
- **IronClaw**：企业级 Slack 集成场景；需要 OAuth 能力编排、审批/认证流程。

### 5.3 技术架构关键差异

| 架构维度 | 特点实例 |
|---|---|
| **编程语言** | OpenClaw/NanoBot/CoPaw 以 TypeScript/Python 为主；ZeroClaw/IronClaw 全栈 Rust；NanoClaw 以 Rust 为核心 + TypeScript 工具链 |
| **插件模型** | ZeroClaw 和 Moltis 走 WASM/MCP 协议方向；OpenClaw 偏内置 skill 体系；IronClaw 使用 MountView 字节存储 + 附件注册表 |
| **Agent 运行时** | NanoClaw 走 Docker 容器隔离（最重）；OpenClaw 走进程内 session 隔离（最轻）；IronClaw 走 reborn 运行时 + gate 审批链（最复杂） |
| **记忆后端** | OpenClaw 自研 memory-core + reranker；ZeroClaw 用 SQLite + ANN 向量搜索提案；NanoBot 走文件型 JSONL |
| **通道适配** | OpenClaw 自研全渠道适配层；NanoClaw 依赖 chat-sdk-bridge；CoPaw 深度绑定国内 IM SDK |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高活跃 + 快速迭代

| 项目 | 日 PR 吞吐量 | 特征 |
|---|---|---|
| **OpenClaw** | 500 | 生态核心，全链路密集迭代，积压严重但方向清晰 |
| **Hermes Agent** | 100 | 编码场景聚焦，社区自治能力强，响应速度快 |
| **ZeroClaw** | 50 | 架构级 RFC 密集，插件系统顶层设计活跃 |
| **IronClaw** | 24 | 附件系统多轨并行，架构决策活跃（drain→reject） |

### 🟡 第二梯队：中等活跃 + 质量巩固

| 项目 | 日 PR 吞吐量 | 特征 |
|---|---|---|
| **NanoBot** | 19 | WebUI 功能完备性冲刺，多提供商兼容性修复 |
| **CoPaw** | 8 | 国内场景深耕，PR 审查积压需关注 |
| **NanoClaw** | 15 | 大量积压 PR 集中合并，基础设施加固期 |
| **PicoClaw** | 7 | 多模态和远程部署方向，响应速度良好 |

### 🟢 第三梯队：低活跃 + 维护模式

| 项目 | 特征 |
|---|---|
| **Moltis** | MCP 协议栈专项，社区窄但聚焦 |
| **NullClaw** | 关键 Bug 有 fix PR 待审，发布节奏缓慢 |

### 🔴 第四梯队：社区停滞

| 项目 | 风险 |
|---|---|
| **LobsterAI** | 3 Issue + 3 PR 积压超 70 天，openclaw 兼容性问题无响应 |
| **TinyClaw** | 过去 24 小时零活动 |
| **ZeptoClaw** | 过去 24 小时零活动 |

---

## 7. 值得关注的趋势信号

### 趋势 1：记忆子系统正从"附加功能"变为"核心架构"

**信号强度：★★★★★**

四个主要项目（OpenClaw、Hermes Agent、ZeroClaw、NanoBot）同期遭遇记忆子系统的可靠性危机，且社区讨论深度已从"修 bug"升级到"重新设计"（Auto Dream、pre-reset flush、Dream Mode）。**对开发者的启示：** 如果你的 Agent 产品还没有认真对待记忆管理（压缩策略、长期知识整合、容量上限处理），现在必须将其提升为架构级优先级。

### 趋势 2："静默失败"正在成为用户流失的首要原因

**信号强度：★★★★★**

OpenClaw 用户反复使用"silent"一词描述 subagent 丢失、cron 超时、write 覆盖等问题；NullClaw 的 cron job 标记完成但实际未执行；Hermes Agent 的 memory 满后静默挂起。**对开发者的启示：** 可观测性不是"nice to have"，是 Agent 产品的生存底线。每个异步操作（cron、subagent、文件写入）都需要明确的 success/failure 反馈路径和用户可见的状态指示。

### 趋势 3：MCP 生态正在从"工具调用"走向"协议基础设施"

**信号强度：★★★★**

Moltis 的 MCP OAuth `invalid_target` 修复、NanoBot 的 MCP streamableHttp GC 崩溃修复、Hermes Agent 的 `hermes mcp list` 崩溃——MCP 已从概念验证进入实际部署阶段，协议兼容性、OAuth 流程、连接稳定性成为新战场。**对开发者的启示：** 如果你的产品支持 MCP，需要建立专门的协议兼容性测试矩阵，覆盖 Notion、Linear 等主流服务商的实现差异。

### 趋势 4：Telegram 正在成为 Agent 生态的"事实标准通道"

**信号强度：★★★★**

OpenClaw 持续投入 Telegram 富文本（表格、列表、blockquote）；Hermes Agent 社区自发追踪 Bot API 10.1 Rich Messages 并形成 Issue 集群；ZeroClaw 也在推进 Telegram 流式卡片。**对开发者的启示：** 在 IM 渠道优先级排序中，Telegram 的开发者生态活跃度和 API 演进速度已显著领先于 WhatsApp/Discord/Slack，值得优先投入。

### 趋势 5：Rust 正在成为 Agent 底层运行时的新共识

**信号强度：★★★**

ZeroClaw（全栈 Rust + WASM 插件）、IronClaw（Rust + MountView 存储）、NanoClaw（Rust 核心 + TypeScript 工具链）均在 Rust 生态深耕；而 TypeScript/Python 系项目（OpenClaw、NanoBot）则在内存安全、并发稳定性上反复遭遇挑战（OpenClaw 内存泄漏、NanoBot asyncio 崩溃）。**对开发者的启示：** 新建 Agent 运行时项目时，Rust 的生态成熟度（tokio、WASM、OCI 容器）已足以支撑生产级开发，值得认真评估。

### 趋势 6：国产场景（飞书/QQ/微信/国产模型）正在形成独立生态

**信号强度：★★★**

CoPaw 的飞书 CardKit 优化、Kimi Coding 接入诉求、越南语/东南亚市场信号；OpenClaw 的飞书图片丢失问题；Hermes Agent 的中国区 OAuth 提供商需求。**对开发者的启示：** 中国市场和东南亚市场的 Agent 需求正在形成独特的产品形态（国内 IM 通道、国产模型适配、本地化语言），与欧美主导的 Telegram/Discord 生态存在显著差异，需要独立的产品策略。

### 趋势 7：桌面客户端体验是下一个竞争焦点

**信号强度：★★★**

Hermes Agent 的 Desktop 原生通知、ZeroClaw 的 Tauri 适配问题、CoPaw 的 Tauri 启动恶化、NanoBot 的 TUI 提案——多个项目同时在桌面端发力，但体验普遍不成熟。**对开发者的启示：** 桌面客户端（尤其是 Tauri/Electron 方案）的启动性能、权限管理、跨平台一致性仍是未解决的工程挑战，投入前需做好充分的性能基准测试。

---

*本报告由 OWL 基于 2026-06-14 各项目 GitHub 公开数据生成。数据截至当日 UTC 时间。项目选择基于个人 AI 助手/自主智能体开源生态的代表性覆盖，不构成对任何项目的背书或投资建议。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-14

> **数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **统计周期**: 2026-06-13 ~ 2026-06-14

---

## 1. 今日速览

NanoBot 今日处于**高活跃维护期**。过去 24 小时内共产生 5 条 Issue 更新（新开 2、关闭 3）和 19 条 PR 更新（待合并 14、已合并/关闭 5），无任何新版本发布。

核心主题集中在三个方向：**WebUI 体验大幅增强**（设置面板与配置文件对齐、自动化管理视图、反向代理路径支持、TUI 模式）、**提供商兼容性修复**（Anthropic `temperature` 参数、transcription 环境变量解析、MCP 服务器 GC 崩溃）以及**内存压缩逻辑的正确性修复**。

整体来看，开发节奏紧凑，多个功能 PR 和 Bug 修复 PR 正向项目迈进，但待合并积压 14 个 PR 也意味着维护者审查压力不低。

---

## 2. 版本发布

> 无新 Release。今日不输出此部分。

---

## 3. 项目进展

今日共有 **8 个 PR 被合并/关闭**，以下是按影响范围排序的重点：

### 高影响合并

| PR | 说明 |
|---|---|
| **#4326** · [fix(memory): summarize full session tail during idle compaction](https://github.com/HKUDS/nanobot/pull/4326) | **修复核心记忆压缩 bug（Issue #4264）**。之前 `idleCompact` 丢弃后 8 条之外的历史后因截断导致总结遗漏用户纠正行为，现在改为对完整会话尾部进行总结。这是对话准确性的重大改进。 |
| **#4313** · [feat(webui): config.json/webui parity](https://github.com/HKUDS/nanobot/pull/4313) | **WebUI 与 config.json 设置对齐**。新增 temperature、tool limits、dream、channels、memory 字段的 WebUI 写入端点，缩小了 WebUI 操作与配置文件之间的差距。 |
| **#4098** · [Fix exec workspace symlink guard and path precedence](https://github.com/HKUDS/nanobot/pull/4098) | **安全加固 + 路径优先级修复**。阻止 exec 命令通过相对符号链接逃逸工作区，同时修复 `pathAppend` 在 Unix 上不前置导致工具路径优先级丢失的问题（Fix #4072、#4083）。 |

### 中低影响合并

- **#4327** · 修复 WebUI 启动时因慢网关路由阻塞的问题，优化会话 JSONL 读取和 CLI 应用拉取逻辑。
- **#4314** · 重构：打破 tool config schema 的导入循环，将共享 Pydantic Base 移至独立模块。

---

## 4. 社区热点

### 🔥 Issue #193 · Ollama API support?（15 条评论，历史累积）

- **链接**: [HKUDS/nanobot#193](https://github.com/HKUDS/nanobot/issues/193)
- **状态**: 已关闭
- **热度分析**: 这是全部更新中评论最多的 Issue（15 条），说明社区对本地 Ollama 集成有持续需求。虽然该 Issue 已关闭（可能已合并支持），但其在今天被更新排在列表首位，表明仍有用户在追踪或补充讨论。核心诉求是**降低用户运行本地推理的门槛，不依赖商业云 API**。

### 🔥 PR #4303 · close tracked generators in _close_server to prevent GC crash

- **链接**: [HKUDS/nanobot#4303](https://github.com/HKUDS/nanobot/pull/4303)
- **状态**: 待合并
- **热度分析**: 该 PR 针对 MCP `streamableHttp` 服务器重连时的 asyncio cancel scope 跨任务崩溃，属于**影响稳定性的结构性 bug 修复**，且尚未合并，值得优先审查。

### 🔥 PR #4329 · Nanobot TUI（内联交互式 TUI）

- **链接**: [HKUDS/nanobot#4329](https://github.com/HKUDS/nanobot/pull/4329)
- **状态**: 待合并
- **热度分析**: 全新增量为 `nanobot agent` 引入内联交互式 TUI，支持 markdown 渲染、持久化输入、斜杠命令面板、图片附件和音频转写。功能体量大，是今日最具雄心的新功能 PR。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 🔴 严重 — Agent 启动崩溃

- **Issue #4322** · `NameError: 'session_key' is not defined in context.py`
  - **链接**: [HKUDS/nanobot#4322](https://github.com/HKUDS/nanobot/issues/4322)
  - **根因**: Commit `f8532448` 合并时将 `_build_memory_context` 从 `build_system_prompt` 提取出来时遗漏了 `session_key` 变量定义。
  - **影响**: 将 `fix/prompt-caching` 分支合并到 main 后，agent 启动即崩溃。
  - **Fix PR**: 尚未看到直接对应 PR，**需要紧急修复**。

- **Issue #4333** · Anthropic provider 对 opus-4-8/Fable 发送已废弃的 `temperature` 参数 → 每次请求 400
  - **链接**: [HKUDS/nanobot#4333](https://github.com/HKUDS/nanobot/issues/4333)
  - **影响**: 使用此模型的用户**完全无法正常工作**。
  - **Fix PR**: ✅ **PR #4334** 待合并，已将 `omit_temperature` 扩展至覆盖 `opus-4-8` 和 `fable`。

### 🟡 中等 — 功能异常

- **Issue #4264（已关闭）** · `idleCompact` 行为修正，只压缩丢弃的前缀而非完整会话尾部，导致 conversation history 记录错误。
  - **Fix PR**: ✅ **PR #4326** 已合并。

- **PR #4303** · MCP `streamableHttp` 重连时 asyncio cancel scope 跨任务崩溃（RuntimeError）。
  - **状态**: Fix PR 已提交但待合并。

- **PR #4332** · Codex 图片生成 SSE 处理：response.completed 后流关闭无 `[DONE]`，导致 httpx 抛出 `RemoteProtocolError`。
  - **状态**: Fix PR 已提交但待合并。

- **PR #4323/#4324/#4325** · transcription/WebUI settings 环境中 `${VAR}` 模板变量未解析即被使用，导致提供商认证失败、设置读写异常。
  - **状态**: 3 个 Fix PR 均已提交但待合并。建议一并审查，同根因。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 状态 |
|---|---|---|
| **WebUI 自动化管理** | PR #4330（@chengyongru） | 待合并。新增自动化列表、过滤、运行、暂停/恢复、删除的完整管理视图。 |
| **文件系统工具开关** | PR #4138（@niradler） | 待合并。增加 `tools.file.enable` 以与 `tools.exec.enable` / `tools.web.enable` 对齐，支持仅通过 MCP 服务器暴露文件操作的安全部署场景。 |
| **子 Agent 可配置模型预设** | PR #4291（@aiguozhi123456） | 待合并。允许 spawn 子 agent 时指定不同的模型预设，适用于多模型分工场景。 |
| **WebUI 反向代理/子路径支持** | PR #4328（@niradler） | 待合并。修复 WebUI 在 `https://host/nanobot/` 等非根路径下资源加载和 WebSocket 连接失败的问题。 |
| **TTS 多提供商配置** | PR #4316（@tobrien） | 待合并。新增 OpenAI、Groq (Orpheus)、ElevenLabs 的 TTS 配置系统，通过 WebUI 和配置文件管理。 |
| **内联交互式 TUI** | PR #4329（@pancacake） | 待合并。全新终端交互模式，支持 slash commands、多模态输入。 |
| **Ollama API 支持** | Issue #193 | 已关闭（推测已实现），社区对本地推理需求的持续关注。 |

**路线图判断**: 当前项目重点推进方向为 **WebUI 功能完备性**（设置对齐、自动化管理、i18n）、**多模型/多提供商兼容性**、以及 **终端交互体验升级**（TUI、TTS）。

---

## 7. 用户反馈摘要

### 🔴 痛点

1. **Prompt caching 分支合并导致崩溃**（Issue #4322）: 用户在合并 main 分支后遭遇 agent 无法启动的直接崩溃，且仅 1 条评论说明尚未引起广泛讨论。这是典型的"合并冲突引入回归"场景。
2. **新 Anthropic 模型完全不可用**（Issue #4333）: `claude-opus-4-8` 和 Fable 用户每次请求都被拒绝，属于 0/10 可用性问题的 blocker。
3. **MCP 服务器不稳定**（PR #4303）: `streamableHttp` 版本的 MCP 服务器在会话终止和重连时崩溃，影响依赖 MCP 工具链的工作流。

### 🟢 满意点

1. **idleCompact 修复响应及时**（Issue #4264 → PR #4326 合并）: 用户在 4 天内获得了合并修复，说明对此类核心 bug 的响应速度良好。
2. **WebUI 建设获得认可**: 多个 PR 持续增强 WebUI 功能，说明项目在降低非技术用户门槛方面的投入得到了社区积极响应。

### 🟡 使用场景

- 使用 Anthropic 最新模型（opus-4-8）的生产用户
- 在反向代理后部署 WebUI 的用户
- 依赖 MCP 服务器和本地 Ollama 的用户
- 使用子 Agent 进行多模型分工的高级用户

---

## 8. 待处理积压（需维护者关注）

| 条目 | 类型 | 创建时间 | 状态 | 积压天数 | 风险等级 |
|---|---|---|---|---|---|
| **PR #4303** · Fix MCP GC crash | Bug Fix | 2026-06-11 | 待合并 | 3 天 | 🔴 高 — 影响 MCP 用户稳定性 |
| **PR #4334** · Fix Anthropic temperature | Bug Fix | 2026-06-13 | 待合并 | 1 天 | 🔴 高 — 用户完全不可用 |
| **PR #4323/#4324/#4325** · Env var resolution | Bug Fix | 2026-06-13 | 待合并 | 1 天 | 🟡 中 — 同根因，建议批量审查 |
| **PR #4138** · `tools.file.enable` | Enhancement | 2026-06-01 | 待合并 | 13 天 | 🟡 中 — 安全相关功能，等待时间长 |
| **PR #4229** / **PR #4291** · Subagent model presets | Enhancement | 2026-06-11 | 待合并 | 3 天 | 🟢 低 — 增强功能，非阻塞 |
| **PR #4329** · Nanobot TUI | Feature | 2026-06-13 | 待合并 | 1 天 | 🟡 中 — 大功能 PR，需要充分测试 |
| **Issue #4322** · `session_key` NameError | Bug Report | 2026-06-13 | 开启中 | 1 天 | 🔴 高 — 启动崩溃，需紧急响应 |

> **建议优先行动**: 审查并合并 PR #4334（Anthropic 可用性）和 #4303（MCP 崩溃），确认 Issue #4322 的修复方案并合并。3 个 env-var resolution PR（#4323、#4324、#4325）同根因，建议一并处理。PR #4138 已等待 13 天，建议给予审查反馈。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-14**

---

## 1. 今日速览

Hermes Agent 过去 24 小时处于高活跃状态：合计 100 条 Issues 和 PR 更新，其中 45 个 PR 处于待合并队列，44 个 Issue 仍处于活跃状态。无新版本发布（当前最新版本仍为 v0.16.0，2026.6.5）。项目当前处于 Telegram Bot API 10.1 Rich Messages 功能集成的高峰探索期，多个相关 Issue 和 PR 集中在过去 48 小时内涌现。整体来看，项目维护节奏健康，Community PR 响应速度较快，但积压的开放 Issue 数量较多（大量 P2/P3 级别问题停留数周未处置）。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（5 个）

| PR | 说明 |
|---|---|
| [PR #33956](https://github.com/NousResearch/hermes-agent/pull/33956) | **feat(provider): 新增 Codex ACP 模型提供商支持** — 通过 `@zed-industries/codex-acp` ACP stdio 适配器，为 Codex 增加了新的模型提供路径，提升了对 Zed IDE 生态的兼容性。状态：已关闭（未合入主分支）。 |
| [PR #45870](https://github.com/NousResearch/hermes-agent/pull/45870) | **fix(codex): 提前刷新 OAuth Token** — 将 Codex OAuth 访问令牌的刷新时机从"即将到期"改为"到期前 36 小时"，修复长时段 Agent 运行中 Token 中途失效的问题。已合并。 |
| [PR #45871](https://github.com/NousResearch/hermes-agent/pull/45871) | **fix(checkpoints): 清除过期的影子索引锁文件** — 在运行 per-project shadow index git 操作前清理过期的 `.lock` 文件，同时保留近期活性锁。已合并。 |

### 待合并的重要 PR（精选）

- **[PR #45873](https://github.com/NousResearch/hermes-agent/pull/45873)** — `fix(runtime_provider)`: 修复自定义提供商的 `key_env`/`api_key_env` 环境变量解析 Bug，使 `no-key-required` 不再被错误发送。直接对应 Issue #44666 和 #43586。
- **[PR #45869](https://github.com/NousResearch/hermes-agent/pull/45869)** — `fix(provider)`: 修复 `model.base_url` 配置在网关运行时被静默丢弃的问题，本地 Ollama 等端点用户受影响（Issue #45782）。
- **[PR #45879](https://github.com/NousResearch/hermes-agent/pull/45879)** — `fix(skills)`: 将系统 Prompt 中技能描述截断上限从 60 字符提升至 300 字符，恢复路由上下文的完整性。
- **[PR #45866](https://github.com/NousResearch/hermes-agent/pull/45866)** — `feat(desktop)`: 桌面端新增原生操作系统通知机制（Electron Notification），支持按通知类型独立开关。
- **[PR #45867](https://github.com/NousResearch/hermes-agent/pull/45867)** — `feat(provider)`: 新增 OpenRouter Fusion 提供商工具支持。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

1. **[Issue #10771](https://github.com/NousResearch/hermes-agent/issues/10771)** — *Feature Request: Automatic Memory Consolidation (Auto Dream)* | 8 条评论 / 👍5
   - **创建时间**：2026-04-16，至今近 2 个月持续活跃
   - **诉求**：用户希望引入类似 Claude Code "Auto Dream" 的自动记忆清理/去重/优化机制，解决长期使用过程中记忆文件膨胀、过期相对时间引用等问题
   - **社区态度**：获 5 个赞，是过去 24 小时内互动量最高的 Issue，反映出长会话用户对记忆管理的强烈需求

2. **[Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428)** — *[Feature]: Support Telegram Bot API 10.1 Rich Messages* | 5 条评论 / 👍3
   - **诉求**：Telegram Bot API 于 2026-06-11 发布 10.1 版本，引入 `RichMessage`、富文本块（标题、表格、LaTeX、任务列表等）和流式草稿支持。用户希望 Hermes Agent 跟进支持
   - **背景**：这是社区对 Telegram 平台功能升级的经典跟进请求，且已有多条配套 Issue 和 PR 形成小型issue集群

3. **[Issue #23975](https://github.com/NousResearch/hermes-agent/issues/23975)** — *网关消息打断上下文压缩导致 fallback summary 标记* | 5 条评论
   - **诉求**：上下文压缩过程中被网关新消息打断，导致使用降级摘要标记而非完整压缩摘要，影响后续对话质量

### ⚡ 今日新涌现的 Telegram Rich Message Issue 集群

过去 48 小时内，围绕 Telegram Bot API 10.1 Rich Messages 形成了密集的 Issue 集群：

| Issue | 核心描述 |
|---|---|
| [#45864](https://github.com/NousResearch/hermes-agent/issues/45864) | Feature: Support Telegram Bot API 10.1 Rich Messages（重复请求） |
| [#45854](https://github.com/NousResearch/hermes-agent/issues/45854) | Feature: Add sendRichMessage support to send_message tool |
| [#45771](https://github.com/NousResearch/hermes-agent/issues/45771) | Bug: Rich Message body text 渲染字体过大 |
| [#45785](https://github.com/NousResearch/hermes-agent/issues/45785) | Bug: Telegram Web 无法渲染 sendRichMessage 消息 |
| [#45770](https://github.com/NousResearch/hermes-agent/issues/45770) | Bug: Rich Message draft streaming 在私有 DM topics 不工作 |

**分析**：这一集群表明社区中 Telegram 重度用户群体正在集中推进 Rich Messages 支持，但已进入"先有功能、再排 Bug"的早期适配阶段。字体渲染过大（#45771）和 Telegram Web 不兼容（#45785）属于平台侧限制需明确文档说明，而 draft streaming 不工作（#45770）可能需要修复。

---

## 5. Bug 与稳定性

### 🔴 严重 / P1 级别 Bug

| Issue | 状态 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| [#45758](https://github.com/NousResearch/hermes-agent/issues/45758) | OPEN | Desktop 应用崩溃后非默认 profile 的 `config.yaml` 被重置、`.env` 被删除 | ❌ |
| [#29205](https://github.com/NousResearch/hermes-agent/issues/29205) | **CLOSED** | Codex 推理空轮次后回落到 Anthropic 失败（trailing assistant prefill） | ✅ 已关闭 |
| [#27988](https://github.com/NousResearch/hermes-agent/issues/27988) | **CLOSED** | Codex Responses adapter 在 Azure Foundry 上将完整最终回答映射为 `finish_reason=incomplete` | ✅ 已关闭 |
| [#12408](https://github.com/NousResearch/hermes-agent/issues/12408) | **CLOSED** | Vision 工具向非 Nous 提供商发送 Nous 特定字段导致 400 错误 | ✅ 已关闭 |

### 🟠 中等 / P2 级别 Bug

| Issue | 状态 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| [#44666](https://github.com/NousResearch/hermes-agent/issues/44666) | OPEN | `api_key_env` 别名被自定义提供商静默忽略 | ✅ [PR #45873](https://github.com/NousResearch/hermes-agent/pull/45873) 待合并 |
| [#43586](https://github.com/NousResearch/hermes-agent/issues/43586) | OPEN | `model:` 块中 bare `provider: custom` + `key_env` 导致发送 `no-key-required` → 401 | ✅ [PR #45873](https://github.com/NousResearch/hermes-agent/pull/45873) 待合并 |
| [#23975](https://github.com/NousResearch/hermes-agent/issues/23975) | OPEN | 上下文压缩被网关消息打断导致 fallback summary | ❌ |
| [#45674](https://github.com/NousResearch/hermes-agent/issues/45674) | OPEN | `hermes mcp list` 在 mcp_servers 条目为 string 时崩溃 | ❌ |
| [#45792](https://github.com/NousResearch/hermes-agent/issues/45792) | OPEN | Docker 内 Hermes Agent 不理解运行环境 | ❌ |
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | OPEN | Memory 容量满 → `replace` 匹配失败 → 静默挂起无响应 | ❌ |
| [#19245](https://github.com/NousResearch/hermes-agent/issues/19245) | OPEN | 崩溃后 `session_search` 返回空，孤立 session JSON 未恢复 | ❌ |
| [#33907](https://github.com/NousResearch/hermes-agent/issues/33907) | OPEN | 上下文压缩创建孤立 session，state.db 中缺失对应记录 | ❌ |

### 🟡 P3 级别 Bug 精选

- [#45102](https://github.com/NousResearch/hermes-agent/issues/45102) — Linux Desktop 启动 GPU 错误崩溃
- [#45805](https://github.com/NousResearch/hermes-agent/issues/45805) — Desktop 模型思考等级设置无法持久化（重复 of #42228 相关）
- [#42228](https://github.com/NousResearch/hermes-agent/issues/42228) — TUI/桌面端压缩后 session 进入 "No workspace" 分组
- [#42454](https://github.com/NousResearch/hermes-agent/issues/42454) — Photon iMessage 插件 SDK 依赖的主机域名已失效 → **CLOSED**
- [#45877](https://github.com/NousResearch/hermes-agent/issues/45877) — Cron 后台 review 阶段阻止只读工具（read_file, search_files）
- [#45876](https://github.com/NousResearch/hermes-agent/issues/45876) — Cron 会话中 web_search 回落到 DDGS 超时（中国大陆）

---

## 6. 功能请求与路线图信号

### 高优先级功能信号（已有配套 PR）

| 功能 | Issue | 配套 PR | 判断 |
|---|---|---|---|
| 自定义提供商 API Key 修复 | [#44666](https://github.com/NousResearch/hermes-agent/issues/44666), [#43586](https://github.com/NousResearch/hermes-agent/issues/43586) | [PR #45873](https://github.com/NousResearch/hermes-agent/pull/45873) | 🔜 **极可能合并**，Bug 修复 PR 今日新建，改动范围明确 |
| 本地端点 base_url 透传 | [#45782](https://github.com/NousResearch/hermes-agent/issues/45782) | [PR #45869](https://github.com/NousResearch/hermes-agent/pull/45869) | 🔜 **极可能合并**，本地部署用户刚需 |
| Telegram Bot API 10.1 Rich Messages | [#44428](https://github.com/NousResearch/hermes-agent/issues/44428), [#45854](https://github.com/NousResearch/hermes-agent/issues/45854), [#45864](https://github.com/NousResearch/hermes-agent/issues/45864) | 暂无完整 PR，仅有 Issue | ⏳ **需求明确但实现量较大**，短期内可能先出基础 `sendMessage` 兼容层 |
| Codex OAuth Token 提前刷新 | — | [PR #45870](https://github.com/NousResearch/hermes-agent/pull/45870) | ✅ **已合并** |
| Skills 描述截断提升 | — | [PR #45879](https://github.com/NousResearch/hermes-agent/pull/45879) | 🔜 合理改动，预计合并 |
| Desktop 原生通知 | — | [PR #45866](https://github.com/NousResearch/hermes-agent/pull/45866) | 🔜 新功能 PR，改动面较广（需 cross-OS 适配），评审周期可能较长 |
| OpenRouter Fusion | — | [PR #45867](https://github.com/NousResearch/hermes-agent/pull/45867) | 🔜 新功能，需评审 WhatsApp Cloud Calling 侧 | — | [PR #45863](https://github.com/NousResearch/hermes-agent/pull/45863) | ⏳ 新功能侧 |

### 中长期功能请求

| Issue | 描述 | 判断 |
|---|---|---|
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | 自动记忆整合（Auto Dream）| 高社区关注度（👍5, 8条评论），但实现复杂度高，属于记忆子系统的架构改进，短期内不太可能落地 |
| [#18705](https://github.com/NousResearch/hermes-agent/issues/18705) | `load_hermes_dotenv()` 使用 `override=True` 违反 12-factor 原则 | 属于配置加载架构问题，影响 systemd/Docker secrets 用户，有设计讨论价值 |

---

## 7. 用户反馈摘要

### 🟢 正面信号
- **Telegram 平台用户活跃度高**：社区自发追踪 Bot API 并提交功能请求，反映出该平台是 Hermes Agent 的核心使用场景之一。
- **贡献者修复热情高涨**：针对暴露的 Bug（自定义 Provider API Key、base_url 丢弃等），今日即出现了多个对应 Fix PR，社区自治能力较强。

### 🔴 主要痛点
1. **长会话记忆管理是最大痛点**：Issue #10771、#19245、#42405 均指向记忆子系统的可靠性和可维护性不足，长期使用体验显著下降。
2. **上下文压缩稳定性存疑**：Issue #23975、#33907、#42228 揭示上下文压缩（auto context compression）在并发网关消息、进程间协调上存在多处边界情况未覆盖。
3. **多平台/提供商认证链路脆弱**：多个 P2 Bug（#44666、#43586、#45782）集中在提供商配置透传环节，说明自定义提供商（含本地 Ollama）的认证路径测试覆盖不足。
4. **Cron 会话工具权限过于严格**：Issue #45877 反映后台 Cron 流程连只读工具都被阻断，限制了 Cron 的实际应用场景。
5. **跨平台兼容性持续收到投诉**：Linux Desktop GPU 启动崩溃（#45102）、macOS 文件工具测试失败（#45826）、Docker 环境感知失败（#45792）表明跨 OS QA 覆盖度仍待提高。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue | 创建日期 | 等待时长 | 严重程度 | 说明 |
|---|---|---|---|---|
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | 2026-04-16 | **59 天** | P3 Feature | Auto Memory Consolidation — 高关注度，长期未分配 |
| [#18705](https://github.com/NousResearch/hermes-agent/issues/18705) | 2026-05-02 | **43 天** | P2 Bug | dotenv override 优先级违反 12-factor — 涉及安全凭证管理 |
| [#19245](https://github.com/NousResearch/hermes-agent/issues/19245) | 2026-05-03 | **42 天** | P2 Bug | 崩溃后 session 恢复 — 用户体验核心路径 |
| [#23975](https://github.com/NousResearch/hermes-agent/issues/23975) | 2026-05-11 | **34 天** | P2 Bug | 上下文压缩被打断 — 高频操作场景 |
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | 2026-06-08 | **6 天** | P2 Bug | Memory 满后静默挂起 — 无错误提示 |

### ⚠️ 长期开放的重要 PR

| PR | 创建日期 | 等待时长 | 说明 |
|---|---|---|---|
| [PR #38846](https://github.com/NousResearch/hermes-agent/pull/38846) | 2026-06-04 | 10 天 (仍在活跃更新) | feat(desktop): 15 语言 multilingual i18n — 大面积改动，评审周期长 |
| [PR #36286](https://github.com/NousResearch/hermes-agent/pull/36286) | 2026-06-01 | 13 天 | feat(minimax): 中国区 OAuth 提供商 |
| [PR #45316](https://github.com/NousResearch/hermes-agent/pull/45316) | 2026-06-13 | 1 天 | fix(cron): model fallback config — 昨日新开 PR |
| [PR #28479](https://github.com/NousResearch/hermes-agent/pull/28479) | 2026-05-19 | 26 天 | fix(dispatch): 传递 session_id — 旧 PR 回复活跃但无合入进展 |
| [PR #45800](https://github.com/NousResearch/hermes-agent/pull/45800) | 2026-06-13 | 1 天 | feat(whatsapp): Opus 语音消息转换 |

### 📌 维护者建议
1. **API Key 配置链路**的问题在今日已有高品质 Fix PR（#45873），建议优先合并——这是阻塞自定义提供商用户的 P2 级别阻塞性 Bug。
2. **上下文压缩的并发协调问题**（#23975 + #33907）已连续超 5 周处于开放状态，建议标记 `good first issue` 明确负责人以推进修复。
3. **Telegram Rich Messages 集群**建议由维护者创建统一追踪 Issue（Epic），避免功能碎片化在多 Issue/PR 间分散推进。

---

*日报由 OWL 自动生成 | 数据来源：GitHub NousResearch/hermes-agent | 覆盖时间范围：2026-06-13 ~ 2026-06-14*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-06-14 | 数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

过去 24 小时，PicoClaw 项目共处理 **2 条 Issue**（1 新开、1 关闭）和 **7 条 PR**（2 待合并、5 已合并/关闭），并发布了 **1 个 Nightly 版本**。整体活跃度处于中高水平，PR 合并节奏稳健，主要集中在 **Bug 修复** 和 **代码质量改进** 方向。值得关注的是，一个关于 Evolution 模式下 token 持续消耗的 Bug（#3012）已存在 8 天且仍在讨论中，社区对资源消耗类问题的敏感度较高。

---

## 2. 版本发布

### 🌙 Nightly Build — `v0.2.9-nightly.20260613.c362114c`

- **类型：** 自动化 Nightly 构建，**非稳定版本**，请谨慎使用
- **对比基线：** `v0.2.9` → `main`
- **完整变更日志：** [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

> ⚠️ **注意：** 此版本为自动化构建，可能包含不稳定变更，不建议用于生产环境。

---

## 3. 项目进展

今日共 **5 个 PR 被合并/关闭**，按重要性梳理如下：

### 🔴 重要 Bug 修复

| PR | 内容 | 影响 |
|---|---|---|
| **[#3117](https://github.com/sipeed/picoclaw/pull/3117)** fix(agent): route media turns to image models | 修复 Issue #3108 — 当活跃模型不支持视觉时，媒体请求不再错误地路由到纯文本模型，而是正确转发到配置的图像模型 | **直接解决用户可见的幻觉问题** |
| **[#3119](https://github.com/sipeed/picoclaw/pull/3119)** fix(tts): support OpenRouter voice overrides and fallback | 支持通过 `extra_body` 按模型覆盖 OpenAI TTS 的 `voice` 和 `response_format` 参数，并在失败时自动重试 | **增强 TTS 兼容性与健壮性** |

### 🟡 代码质量 / Lint 修复

| PR | 内容 |
|---|---|
| **[#3065](https://github.com/sipeed/picoclaw/pull/3065)** fix(seahorse): explicitly ignore Close() errors on PRAGMA/migration failure paths | 在 `pkg/seahorse/short_engine.go` 的 4 个错误路径上使用 `_ = db.Close()` 消除 linter 警告 |
| **[#3066](https://github.com/sipeed/picoclaw/pull/3066)** fix: explicitly ignore Close() errors on temp file write/sync failure paths | 在 3 个文件的临时文件错误路径上统一 `_ = tmpFile.Close()` 写法 |

### 🟢 文档 / 国际化

| PR | 内容 |
|---|---|
| **[#2935](https://github.com/sipeed/picoclaw/pull/2935)** docs(i18n): add Traditional Chinese (zh-TW) locale and READMEs | 新增繁体中文（台湾）文档和前端 i18n 支持 |

### 📌 待合并 PR（2 个）

| PR | 内容 | 状态 |
|---|---|---|
| **[#2964](https://github.com/sipeed/picoclaw/pull/2964)** Feat/image input compression | 为视觉管线添加可配置的入站图像压缩策略，解决大尺寸图片导致 payload 过大的问题 | 已开放 16 天，仍在审查中 |
| **[#3118](https://github.com/sipeed/picoclaw/pull/3118)** Add remote Pico WebSocket mode to picoclaw agent | 为 `picoclaw agent` 命令添加 `--remote` 参数，支持远程 WebSocket 模式 | 昨日新建，活跃中 |

---

## 4. 社区热点

### 🔥 Issue #3012 — Evolution 模式下 token 持续消耗

- **链接：** [sipeed/picoclaw#3012](https://github.com/sipeed/picoclaw/issues/3012)
- **状态：** OPEN | 3 条评论 | 已存在 8 天
- **作者：** @xpader
- **核心诉求：** 当启用 Evolution 功能（Draft 模式 + Code Path Trigger）时，系统每分钟持续消耗大量 token，即使用户未主动发起请求。环境为 FreeBSD 15.0 + Go 1.25.10 + MiniMax 模型。
- **社区信号：** 3 条评论表明已有用户关注此问题，但尚未有官方回应或修复 PR。这是一个**资源消耗类问题**，直接影响用户成本，优先级应较高。

### 🔥 PR #3117/#3119 — 视觉路由 + TTS 修复集中合并

这两个 PR 在同一天被合并，反映出维护者对 **多模态体验**（视觉描述、TTS）的重视。#3117 直接关联 Issue #3108（昨日关闭），形成完整的"报告→修复→关闭"闭环，响应速度较快。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | **[#3012](https://github.com/sipeed/picoclaw/issues/3012)** | Evolution 模式下每分钟持续消耗 token | **OPEN — 尚无 fix PR** |
| 🟡 中 | **[#3108](https://github.com/sipeed/picoclaw/issues/3108)** | 图像描述请求在纯文本模型上产生幻觉 | **CLOSED — 已由 [#3117](https://github.com/sipeed/picoclaw/pull/3117) 修复** |
| 🟢 低 | Lint 警告（#3065, #3066） | `Close()` 返回值未处理 | **CLOSED — 已修复** |

> ⚠️ **重点关注：** #3012 的 token 消耗问题已持续 8 天，涉及 Evolution 核心功能，建议尽快评估并分配修复资源。

---

## 6. 功能请求与路线图信号

| 方向 | 依据 | 可能性评估 |
|---|---|---|
| **图像输入压缩** | PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) 已存在 16 天，功能明确 | ✅ 高 — 代码已提交，待审查合并 |
| **远程 WebSocket 模式** | PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) 昨日新建 | 🔶 中 — 刚提交，需社区反馈和维护者审查 |
| **TTS 多模型兼容** | PR [#3119](https://github.com/sipeed/picoclaw/pull/3119) 已合并 | ✅ 已完成 |
| **繁体中文支持** | PR [#2935](https://github.com/sipeed/picoclaw/pull/2935) 已合并 | ✅ 已完成 |

**趋势判断：** 当前开发重心在多模态能力（视觉、TTS）和部署灵活性（远程模式）上，国际化也在持续推进。

---

## 7. 用户反馈摘要

### 😤 痛点

- **资源消耗不透明：** #3012 用户反馈 Evolution 模式下 token 持续消耗，暗示可能缺少使用量提示或自动限流机制。
- **多模态模型兼容性：** #3108 用户通过 OpenRouter 使用 `deepseek-v4-flash` 时遇到图像描述幻觉，说明模型能力检测机制不够完善（现已修复）。

### 👍 满意信号

- #3108 的修复速度较快（Issue 创建 2 天后即关闭），维护响应效率值得肯定。
- 繁体中文支持的合并表明项目对国际化社区的开放态度。

### 📋 使用场景

- 用户通过 OpenRouter 接入多种模型（DeepSeek、MiniMax 等），**多模型切换**是核心使用场景。
- Evolution 功能（自动代码路径触发）被实际使用，说明**自动化工作流**是高级用户的重要需求。
- FreeBSD 用户群体存在，跨平台兼容性需持续关注。

---

## 8. 待处理积压

| 项目 | 链接 | 等待时间 | 建议 |
|---|---|---|---|
| **#3012** Evolution token 持续消耗 | [Issue](https://github.com/sipeed/picoclaw/issues/3012) | 8 天 | 🔴 **高优先级** — 涉及资源成本，建议尽快响应或分配修复者 |
| **#2964** 图像输入压缩 | [PR](https://github.com/sipeed/picoclaw/pull/2964) | 16 天 | 🟡 审查积压 — 功能 PR 停留时间较长，建议维护者安排 review |
| **#3118** 远程 WebSocket 模式 | [PR](https://github.com/sipeed/picoclaw/pull/3118) | 1 天 | 🟢 正常 — 刚提交，按正常流程推进 |

---

**总结：** PicoClaw 项目当前处于稳定迭代期，Bug 修复响应及时，多模态和远程部署是近期主要发展方向。唯一需要警惕的是 #3012 的 token 消耗问题，建议优先处理以避免用户流失。

*— OWL · 2026-06-14*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-14

---

## 1. 今日速览

NanoClaw 今日处于**高活跃维护期**，过去24小时内共处理 16 条 Issue/PR 更新，其中 14 个 PR 完成合并/关闭，仅 1 个 Issue 因发错仓库被关闭。无新版本发布。项目当前核心工作集中在**基础设施加固**（容器生命周期、健康审计修复）、**多提供商能力扩展**（SDK 升级、内存脚手架、能力接缝）以及**积压 PR 的大规模清理**（多个 4-5 月的旧 PR 于今日集中合并）。整体来看，项目处于稳定迭代阶段，维护者正在消化积压的技术债务。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 14 个 PR 可按主题分为以下几类：

### 🔧 基础设施与稳定性修复（3 个）

| PR | 作者 | 说明 |
|---|---|---|
| [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) | ddaniels | **修复 agent-runner 中毒恢复导致的崩溃循环** — 当会话恢复时遇到损坏的 transcript（`thinking`/`redacted_thinking` 块无法修改），SDK 以 result 事件而非异常抛出 400 错误，导致 `isSessionInvalid` 恢复逻辑永远无法触发。此修复让崩溃循环得以自愈。 |
| [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | ddaniels | **修复 poll-loop 对瞬态 5xx API 错误的处理** — Claude Agent SDK 在瞬态错误（如 `529 Overloaded`）耗尽内部重试后，以 terminal result 消息报告失败而非抛出异常，此前该结果被静默吞掉。现增加重试逻辑并在耗尽时通知用户。 |
| [#2277](https://github.com/nanocoai/nanoclaw/pull/2277) | ddaniels | **修复 agent-runner 在查询中途收到后续消息时的路由刷新** — 此前 poll loop 从初始批次提取 `RoutingContext` 后冻结，当后续消息通过 `query.push` 到达时，回复仍走旧路由。 |

### 🏗️ 多提供商能力扩展（4 个）

| PR | 作者 | 说明 |
|---|---|---|
| [#2747](https://github.com/nanocoai/nanoclaw/pull/2747) | omri-maya | **SDK 升级至 2.2.1** — `@onecli-sh/sdk` 从 0.5.0 升至 2.2.1，注入 credential-stub 挂载和机器可校验的 pins。 |
| [#2746](https://github.com/nanocoai/nanoclaw/pull/2746) | omri-maya | **agent-surfaces 能力接缝** — 新增 host-side 注册表，允许 provider 按能力声明暴露 agent 表面。 |
| [#2745](https://github.com/nanocoai/nanoclaw/pull/2745) | omri-maya | **opt-in 持久内存脚手架** — 新增 `usesMemoryScaffold` provider 能力，为需要持久记忆的提供商提供容器化脚手架。 |
| [#2754](https://github.com/nanocoai/nanoclaw/pull/2754) | omri-maya | **onExchangeComplete provider hook + 斜杠命令中断** — 新增可选的 `onExchangeComplete` 钩子和斜杠命令中断支持。 |

### 📡 Signal 通道增强（4 个）

| PR | 作者 | 说明 |
|---|---|---|
| [#2203](https://github.com/nanocoai/nanoclaw/pull/2203) | ddaniels | **Signal 双向 reaction 支持** — 入站和出站均支持 emoji reaction，与 chat-sdk-bridge 对齐。 |
| [#2071](https://github.com/nanocoai/nanoclaw/pull/2071) | ddaniels | **Signal 非音频附件统一走 inbox 路径** — PDF、文档、归档等所有文件类型均通过 `/workspace/inbox/<msgId>/<name>` 传递给 agent。 |
| [#2070](https://github.com/nanocoai/nanoclaw/pull/2070) | ddaniels | **inbox 接受 host-path 附件** — `extractAttachmentFiles()` 此前仅识别 base64 格式，现支持原生通道适配器传递的磁盘文件路径。 |
| [#2040](https://github.com/nanocoai/nanoclaw/pull/2040) | ddaniels | **Signal 出站附件支持** — signal-cli 的 `send` JSON-RPC 已支持 `attachments` 参数，此前出站文件被丢弃并记录警告。 |

### 🔄 其他功能与修复（3 个）

| PR | 作者 | 说明 |
|---|---|---|
| [#2084](https://github.com/nanocoai/nanoclaw/pull/2084) | ddaniels | **每日项目备份 + 全量/按 agent 恢复** — 新增灾难恢复机制，支持本地和 S3 存储后端，提供 CLI 恢复工具。 |
| [#2267](https://github.com/nanocoai/nanoclaw/pull/2267) | ddaniels | **修复 agent-to-agent 回复路由回原始会话** — 多会话 agent group 中 a2a 回复此前总是落入最新会话，导致对话分裂。 |
| [#2072](https://github.com/nanocoai/nanoclaw/pull/2072) | ddaniels | **Ollama 多模态图片支持** — `ollama_generate` 新增可选 `images` 参数，支持工作区相对路径的图片输入。 |

### 📌 待合并 PR（1 个）

| PR | 作者 | 说明 |
|---|---|---|
| [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) | caburi00 | **加固 host + agent-runner（健康审计修复）** — 来自多对抗性 agent 健康审计的修复：容器生命周期 realpath 绑定挂载源（修复 Docker Desktop drvfs 崩溃循环）、生成时崩溃断路器、`MAX_CONCURRENT_CONTAINERS` 强制限制、daemon 级 `docker kill` 回退。**仍处于 OPEN 状态，值得重点关注。** |

---

## 4. 社区热点

今日社区互动较为平淡：

- **唯一 Issue** [#2755](https://github.com/nanocoai/nanoclaw/issues/2755) 为用户误操作（发错仓库），0 评论，已关闭。
- **15 个 PR 中无任何评论或 👍 反应**，表明当前合并的 PR 多为积压清理，社区讨论尚未集中爆发。
- **最值得关注的活跃 PR** 是 [#2732](https://github.com/nanocoai/nanoclaw/pull/2732)（host + agent-runner 加固），自 6月11日 创建以来持续更新至今日，涉及容器安全性和稳定性核心问题，预计将成为下一个合并的重点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | PR | 状态 |
|---|---|---|---|
| 🔴 **高** | 中毒恢复 transcript 导致 agent-runner 无限崩溃循环 | [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) | ✅ 已合并 |
| 🔴 **高** | poll-loop 静默吞掉瞬态 5xx API 错误结果 | [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | ✅ 已合并 |
| 🟡 **中** | agent-runner 路由冻结导致后续消息走旧路由 | [#2277](https://github.com/nanocoai/nanoclaw/pull/2277) | ✅ 已合并 |
| 🟡 **中** | agent-to-agent 回复在多会话场景下路由错误 | [#2267](https://github.com/nanocoai/nanoclaw/pull/2267) | ✅ 已合并 |
| 🟠 **待审** | Docker Desktop drvfs 容器崩溃循环、并发容器无限制 | [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) | ⏳ OPEN，待合并 |

**总结**：今日合并的 PR 修复了多个高严重性稳定性问题，项目整体稳定性显著提升。唯一待处理的高风险项是 PR #2732 中的容器生命周期加固。

---

## 6. 功能请求与路线图信号

从今日合并的 PR 可以观察到以下路线图方向：

1. **多提供商生态成熟化**：PR #2745、#2746、#2747、#2754 构成一组连贯的提供商能力扩展——SDK 升级、能力注册表、持久内存脚手架、exchange 完成钩子。这表明 NanoClaw 正在构建一个**标准化的 provider 接口层**，为未来支持更多 AI 提供商奠定基础。

2. **Signal 通道功能对等**：PR #2040、#2070、#2071、#2203 补齐了 Signal 在附件（入站/出站）和 reaction 方面的能力短板，使其与其他通道（如 email）功能对等。

3. **灾难恢复与运维工具**：PR #2084 引入的备份/恢复机制表明项目正在从"开发可用"向"生产可用"迈进。

4. **Ollama 多模态**：PR #2072 为本地 Ollama 模型增加了图片输入支持，暗示本地模型支持是持续投入的方向。

---

## 7. 用户反馈摘要

今日用户反馈极为有限：

- **Issue #2755**：用户 eranshir 误将 Issue 发布到错误仓库，无实质反馈内容。
- **无评论、无 👍 反应**：所有 PR 和 Issue 均无社区互动数据。

**间接信号**：从修复的 Bug 可以推断用户实际使用中遇到的痛点：
- 会话恢复失败导致的无限崩溃循环（#2670）是影响用户体验的严重问题
- Signal 通道附件支持不完整（此前出站附件被静默丢弃）
- 多会话 agent group 场景下的对话分裂问题

---

## 8. 待处理积压

| 项目 | 创建日期 | 状态 | 建议 |
|---|---|---|---|
| [#2732](https://github.com/nanocoai/nanoclaw/pull/2732) — host + agent-runner 加固 | 2026-06-11 | OPEN，已活跃 3 天 | **建议优先审查合并**。涉及容器安全性和稳定性核心问题，且来自对抗性健康审计，修复价值高。 |

**积压清理进展**：今日合并的 14 个 PR 中有多个来自 4-5 月（最早 #2040 创建于 4月27日），积压清理力度较大。建议维护者继续保持此节奏，避免 PR 队列过长导致合并冲突和审查疲劳。

---

> **项目健康度评估**：🟢 **健康**。高 PR 吞吐量、无新 Bug 报告、积压清理积极、核心稳定性问题持续修复。唯一关注点是 PR #2732 的审查进度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-14

## 1. 今日速览

NullClaw 今日处于**低至中等活跃度**，无新版本发布。2 个 Issue 在过去 24 小时内被重新激活讨论，均围绕核心调度与消息投递链路的质量问题，值得重点关注。1 个新 PR（#954）于昨日创建，直接对应 Issue #941 的根因修复，社区响应速度与 diagnostice 深度令人肯定。整体来看，项目当前处于**以稳定性修复为主**的阶段，正值 Agent 调度子系统的一次关键 harden 窗口期。

## 2. 版本发布

无。过去 24 小时无新 Release tag 发布。

## 3. 项目进展

| PR | 合入状态 | 推进方向 |
|---|---|---|
| [#954 — Fix: one-shot cron jobs silently fail to deliver messages (use-after-free in `OutboundMessage.channel`)](https://github.com/nullclaw/nullclaw/pull/954) | **OPEN**（待评审/合并） | 修复 agent 型一次性 cron job 执行后消息无法投递到 Telegram / Mattermost 等远端渠道的静默失败 bug，定位到 `OutboundMessage.channel` 指针的 **use-after-free** 问题。 |

> 📌 **整体前进一步**：调度子系统的消息出站可靠性有望在本 PR 合入后显著提升，agent ←→ 消息通道这一关键链路将回归闭环。

## 4. 社区热点

### Issue #941 — Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens

- **链接**: [nullclaw/nullclaw#941](https://github.com/nullclaw/nullclaw/issues/941)
- **今日评论数**: 7（最高活跃）
- **创建时间**: 2026-05-31，最后活跃: 2026-06-13
- **核心诉求**: 当用户通过 `schedule` API 创建 `job_type: "agent"` 的定时任务并指定 `delivery_mode: "always"` + `delivery_channel: "telegram"` 后，任务被标记为已完成但 agent 子进程根本未启动，Telegram 侧无任何消息到达。
- **分析**: 这是 NullClaw **外部可达性**的关键路径 bug——调度器本应是"触发 + 执行 + 投递"三步全链路，目前"执行"和/或"投递"两步同时静默失败，用户端只看得到一个"已完成"状态而无实际产出，属于 **silent failure**，排查成本极高。PR #954 已由 vernonstinebaker 主动提交，定位根因为 use-after-free，社区响应积极。

### Issue #914 — [enhancement] Create JIRA access tool

- **链接**: [nullclaw/nullclaw#914](https://github.com/nullclaw/nullclaw/issues/914)
- **评论数**: 1
- **创建时间**: 2026-05-13，最后活跃: 2026-06-13
- **核心诉求**: 请求为 NullClaw 平台增加原生的 JIRA 集成工具，覆盖读取 issue、创建工单、更新状态、添加评论、获取 sprint 等常用项目管理操作。
- **分析**: 反映了企业级用户对 NullClaw **工作流编排深度**的扩展期待，属于平台生态横向扩展信号。

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue / PR | 描述 | 是否已有 Fix PR | 备注 |
|---|---|---|---|---|
| 🔴 **Critical — Silent Failure** | [#941](https://github.com/nullclaw/nullclaw/issues/941) | agent 型 cron job 标记完成但未执行子进程，Telegram 等渠道无消息投递 | ✅ **PR #954 待合并** | `OutboundMessage.channel` use-after-free |
| 🟡 **Enhancement** | [#914](https://github.com/nullclaw/nullclaw/issues/914) | JIRA 集成工具请求 | ❌ 无 PR | 功能请求，非 bug |

> **稳定性评估**: 当前只有一个活跃 Critical Bug，且已有明确 fix PR 进入待审。若无其他隐藏问题，合入 #954 后调度子系统的关键质量门槛可视为达标。

## 6. 功能请求与路线图信号

| 信号源 | 需求方向 | 成熟度评估 | 纳入下一版本可能性 |
|---|---|---|---|
| [#914 — JIRA access tool](https://github.com/nullclaw/nullclaw/issues/914) | 第三方 SaaS 集成（JIRA），便于工作流编排 | 低（仅有 issue 描述，无技术草案或 PR） | **低** — 可能列为 backlog，需社区贡献者跟进 |

**路线图推断**: 维护者当前明显聚焦于 **核心稳定性修复**（cron/agent 调度链路）而非新功能扩展，下一版本极大概率是一个 **patch / hotfix release**，核心变更 = PR #954 的合入。

## 7. 用户反馈摘要

**真实痛点**:

- **Silent failure 零可见性**：用户通过 UI 或 API 创建定时 agent 任务后，系统返回"已完成"但最终 Telegram 无任何消息。由于没有任何 error log 或 explicit failure 提示，用户难以自行排查是否为消息通道配置错误还是 NullClaw 自身的调度缺陷。
- **Agent 工作流外部可达性焦虑**：NullClaw 的核心价值之一是「让 agent 主动将结果推送到 IM 渠道（Telegram/Mattermost）」，当这一链路静默断裂时，用户对平台的信任度会显著下降。
- **JIRA 用户需求印证了 NullClaw 被定位为「企业级 agent 编排平台」**：用户期待 NullClaw 无缝对接已有项目管理工具链。

**满意点**:
- 社区响应速度：Issue #941 自 5/31 创建以来，在 6/13 迅速得到诊断（+ fix PR），活跃讨论轮次达到 7 轮，说明 maintainers / contributors 对调度集群健康度持续关注。

## 8. 待处理积压

| 积压项 | 类型 | 最后活跃 | 风险等级 | 建议 |
|---|---|---|---|---|
| [#941 — agent cron subprocess + Telegram delivery broken](https://github.com/nullclaw/nullclaw/issues/941) | Bug (Critical) | 2026-06-13 | 🔴 高 | 加速 PR #954 评审与合入 |
| [#914 — JIRA integration tool](https://github.com/nullclaw/nullclaw/issues/914) | Enhancement | 2026-06-13 | 🟡 中 | 当前社区活跃但未实质性推进，建议维护者标记 contribution-welcome 或排入 v0.x 里程碑 |
| [#954 — Fix: use-after-free in OutboundMessage.channel](https://github.com/nullclaw/nullclaw/pull/954) | Fix PR | 2026-06-13 | 🔴 高（需及时合入） | 该 PR 自创建后尚未收到评论（comments: undefined），请尽快安排 code review |

---

**项目健康度综合评分**: ⭐⭐⭐☆☆ (3/5)
- ✅ 及时响应、fix 清晰、诊断精准
- ⚠️ 核心链路存在 critical silent failure，待合入修复
- 📉 新版本发布节奏缓慢（过去 30 天内无新 release）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-06-14 | 数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

过去 24 小时 IronClaw 项目活跃度**极高**：共处理 24 个 PR（18 个待合并、6 个已合并/关闭）和 6 个 Issue（3 个新开、3 个已关闭），核心贡献者 `henrypark133`、`ilblackdragon`、`serrrfirat` 三箭齐发。项目当前处于**密集迭代期**，工作重心集中在三大主线：**附件系统（#4644 多轨推进）**、**Slack 审批/认证循环修复**、以及 **DeferredBusy drain 架构决策收尾**。无新版本发布，但多个大型 PR 已趋近成熟，预计近期将有重要版本落地。CI 方面，Nightly E2E 测试仍处于失败状态（[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)），需关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 3.1 今日合并/关闭的 PR（6 个）

| PR | 状态 | 说明 |
|---|---|---|
| [#4654](https://github.com/nearai/ironclaw/pull/4654) | ✅ 已合并 | **可扩展附件格式注册表**（#4644 Track 1）：在 `ironclaw_common` 建立单一来源的附件格式支持，取代四份散落的硬编码列表，根治 "CSV 上传为 text" 类 bug |
| [#4655](https://github.com/nearai/ironclaw/pull/4655) | ✅ 已合并 | **Reborn 转录合同携带附件引用**（#4644 Track 2）：transcript 从纯文本扩展为可持久化 `AttachmentRef`，附件不再在持久化时静默丢弃 |
| [#4668](https://github.com/nearai/ironclaw/pull/4668) | ✅ 已合并 | **MountView 附件着陆 crate**（#4644 Track 6）：基于 `MountView` 的字节存储基础，使附件字节可落地到存储 |
| [#4670](https://github.com/nearai/ironclaw/pull/4670) | ✅ 已合并 | **附件字节→转录 AttachmentRef 桥接**（#4644 Track 6→Track 2）：将字节入口层与持久化层联通 |
| [#4672](https://github.com/nearai/ironclaw/pull/4672) | ✅ 已合并 | **WebChat v2 发送路径内联附件上传**：浏览器可通过 WebChat v2 附加文件，字节经文件系统权限落入项目存储 |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) | 🔒 已关闭 | Release PR：`ironclaw` 0.24.0 → 0.29.1，含 `ironclaw_common` 和 `ironclaw_skills` 的 API 破坏性变更 |

### 3.2 关键待合并 PR（18 个，按主题分组）

**🔵 附件系统（#4644 剩余轨道，5 个 PR）：**
- [#4675](https://github.com/nearai/ironclaw/pull/4675) — 提取文件文本抽取逻辑到独立 `ironclaw_extractors` crate
- [#4677](https://github.com/nearai/ironclaw/pull/4677) — 附件文本折叠到模型可见上下文（模型终于能看到附件内容）
- [#4680](https://github.com/nearai/ironclaw/pull/4680) — 停止对非文本部分发射 `[non_text_content]` 占位符
- [#4738](https://github.com/nearai/ironclaw/pull/4738) — WebChat v2 SPA 附件上传 UX 接线
- [#4780](https://github.com/nearai/ironclaw/pull/4780) — 引导 routine 投递通过出站目标

**🟢 Slack 审批/认证循环修复（4 个 PR）：**
- [#4839](https://github.com/nearai/ironclaw/pull/4839) — 修复认证门重新调度时调用身份丢失（Slack 重复审批循环根因）
- [#4840](https://github.com/nearai/ironclaw/pull/4840) — 在审批门之前先暴露缺失凭证的认证门（避免用户审批后被 auth 弹回）
- [#4843](https://github.com/nearai/ironclaw/pull/4843) — 按 run_id 单飞 gate 投递（防止 resolution-ack 扇出）
- [#4844](https://github.com/nearai/ironclaw/pull/4844) — 按原始 gate 字符串过滤已投递 gate 路由（auth vs approval 区分）

**🟡 DeferredBusy 架构收尾（1 个 PR）：**
- [#4838](https://github.com/nearai/ironclaw/pull/4838) — 用显式拒绝替代延迟停放（方案从 drain-and-resubmit 转向 reject-with-notice）

**🟣 运行时上下文 & 稳定性（3 个 PR）：**
- [#4836](https://github.com/nearai/ironclaw/pull/4836) — 运行时上下文暴露已连接通道、投递状态和运行来源
- [#4841](https://github.com/nearai/ironclaw/pull/4841) — 消除 reborn 中的 "run-borking" 终端错误，每个错误可恢复或可解释
- [#4842](https://github.com/nearai/ironclaw/pull/4842) — QA 追踪短语记录器改为终止或门控而非挂起

**⚪ 其他（2 个 PR）：**
- [#4264](https://github.com/nearai/ironclaw/pull/4264) — 新增 `POST /api/routines` 端点（新贡献者 wcc945）

### 3.3 整体进度评估

项目在 **#4644 附件系统** 上取得了决定性进展——后端 6 个 Track 中 4 个已合并（Track 1/2/6 + WebChat 上传入口），剩余 Track（文本抽取独立 crate、模型可见上下文折叠、前端 UX）均有活跃 PR 覆盖。**Slack 审批循环** 的 4 个修复 PR 构成一个完整的 bug-fix 集，架构上从 "drain-and-resubmit" 范式转向 "显式拒绝" 范式（[#4838](https://github.com/nearai/ironclaw/pull/4838)），是本周最重要的架构决策变更。

---

## 4. 社区热点

由于本次数据中多数 PR 评论数为 `undefined`（可能为 0 或数据暂不可用），以下按**技术影响力和关联 Issue 讨论活跃度**排列：

### 🔥 最热议题：Slack 重复审批循环

- **Issue #4817** — [DeferredBusy drain follow-ups](https://github.com/nearai/ironclaw/issues/4817)（3 条评论，仍在开放）：跟踪 drain 提交门、过期意图策略、启动扫描三个后续设计决策
- **Issue #4831** — [Route drain through replay entry point](https://github.com/nearai/ironclaw/issues/4831)（2 条评论，已关闭）：要求 drain 重提交走 `product_workflow` 重播入口
- **Issue #4832** — [Batch drained messages into single run](https://github.com/nearai/ironclaw/issues/4832)（1 条评论，已关闭）：N 条排队消息应批量处理而非逐条级联

**分析：** 这组 Issue 反映了社区对 DeferredBusy drain 架构的核心关切——从"逐条级联 drain"到"批量处理"再到"显式拒绝"的范式转变（[#4838](https://github.com/nearai/ironclaw/pull/4838)），说明维护者在架构决策上积极倾听反馈，快速迭代方案。

### 🔥 第二热点：附件系统多轨推进

- **PR #4654** — 附件格式注册表（已合并）
- **PR #4655** — 转录合同扩展（已合并）
- **PR #4677** — 附件文本折叠到模型上下文（待合并）

**分析：** #4644 是项目当前最大的功能倡议，横跨 6+ 个 Track、10+ 个 PR，涉及从后端存储到前端 UX 的全栈改动。社区诉求明确：**附件不应在持久化层被静默丢弃，模型应能看到附件内容**。

### ⚠️ 关注：Nightly E2E 持续失败

- **Issue #4108** — [Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108)（自 2026-05-27 起持续失败，已近 3 周）

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | **Nightly E2E 测试失败**（自 5/27 起，[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)） | 开放，无响应 | 无 |
| 🔴 高 | **Slack 重复审批循环**：一次逻辑调用触发 4 次连续审批门 | 修复中 | [#4839](https://github.com/nearai/ironclaw/pull/4839) + [#4840](https://github.com/nearai/ironclaw/pull/4840) + [#4843](https://github.com/nearai/ironclaw/pull/4843) + [#4844](https://github.com/nearai/ironclaw/pull/4844) |
| 🟠 中 | **Run-borking 终端错误**：reborn 遇到 `HostUnavailable`/模型失败时静默死亡，无恢复路径 | 修复中 | [#4841](https://github.com/nearai/ironclaw/pull/4841) |
| 🟠 中 | **缺失凭证的认证门顺序错误**：用户先审批后才发现凭证被弹回，审批作废 | 修复中 | [#4840](https://github.com/nearai/ironclaw/pull/4840) |
| 🟡 低 | **DeferredBusy drain 序列化瓶颈**：N 条消息需 N 次运行 | 方案变更 | [#4838](https://github.com/nearai/ironclaw/pull/4838)（改为显式拒绝） |
| 🟡 低 | **非文本内容占位符泄漏**：`[non_text_content]` 字面量到达模型 | 修复中 | [#4680](https://github.com/nearai/ironclaw/pull/4680) |
| 🟡 低 | **QA 追踪记录器在认证门挂起**：短语触发交互门时阻塞 | 修复中 | [#4842](https://github.com/nearai/ironclaw/pull/4842) |

---

## 6. 功能请求与路线图信号

| 功能 | 信号强度 | 依据 |
|---|---|---|
| **附件系统（#4644）** | ✅ 确认纳入 | 6+ Track 已排定，4 个已合并，剩余有活跃 PR |
| **运行时上下文感知** | ✅ 确认纳入 | [#4836](https://github.com/nearai/ironclaw/pull/4836) 实现两阶段交付，模型将获得通道连接/投递状态/运行来源感知 |
| **显式拒绝替代延迟停放** | ✅ 确认纳入 | [#4838](https://github.com/nearai/ironclaw/pull/4838) 已取代 #4812 的 drain 方案 |
| **Run 可恢复性** | ✅ 确认纳入 | [#4841](https://github.com/nearai/ironclaw/pull/4841) 消除 run-borking 错误 |
| **Routine REST API** | 🔍 观察中 | [#4264](https://github.com/nearai/ironclaw/pull/4264) 新增 `POST /api/routines` 端点，来自新贡献者，可能扩展为完整的管理 API |
| **文本抽取独立 crate** | 🔍 观察中 | [#4675](https://github.com/nearai/ironclaw/pull/4675) 将抽取逻辑提取为 `ironclaw_extractors`，为未来多格式支持打基础 |

---

## 7. 用户反馈摘要

### 痛点
1. **审批体验断裂**：用户审批了一个操作后，因凭证缺失被弹回，审批"白花了"——这直接违反了"审批应意味着可执行"的用户预期（[PR #4840](https://github.com/nearai/ironclaw/pull/4840) 摘要）
2. **附件静默丢失**：上传文件后 transcript 不持久化，用户不知道文件去了哪里（[#4655](https://github.com/nearai/ironclaw/pull/4655) 解决）
3. **模型看不到附件**：即使附件落地，模型在推理时也无法感知附件内容（[#4677](https://github.com/nearai/ironclaw/pull/4677) 解决）
4. **重复审批疲劳**：Slack 上一个逻辑调用触发 4 次审批，严重影响信任度和效率（[#4839](https://github.com/nearai/ironclaw/pull/4839) 解决）

### 满意信号
- 维护者对架构决策的响应速度高：drain 方案从 #4812 合并到 #4838 提出替代方案仅 2 天
- 附件系统采用分 Track 并行推进的方式，结构清晰，进展透明
- 新贡献者（wcc945）提交 Routine API PR，社区在扩展

### 使用场景
- **Slack 集成 + OAuth 能力**（如 `gmail.get_message`）是高频场景，对审批/认证流程敏感
- **WebChat v2 文件上传** 是另一个核心场景，用户期望浏览器端无缝附件体验

---

## 8. 待处理积压

| 积压项 | 类型 | 创建日期 | 状态 | 建议 |
|---|---|---|---|---|
| **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E 失败 | 🔴 Bug | 2026-05-27 | 开放，无评论，已持续 **18 天** | **最高优先级**：CI 红灯持续近 3 周，影响所有 PR 的信心基线。建议立即排查或暂时关闭该 job |
| **[Issue #4817](https://github.com/nearai/ironclaw/issues/4108)** — DeferredBusy drain 三个后续决策 | 🟡 架构 | 2026-06-12 | 开放，3 条评论 | 跟踪 trusted-resubmit seam、stale-intent policy、startup sweep 三个设计决策，防止丢失 |
| **[PR #4264](https://github.com/nearai/ironclaw/pull/4264)** — Routine create endpoint | ⚪ 功能 | 2026-05-31 | 开放，已 14 天无更新 | 新贡献者 PR，建议 reviewer 尽快给予反馈，避免贡献者流失 |
| **[PR #4838](https://github.com/nearai/ironclaw/pull/4838)** — 显式拒绝替代延迟停放 | 🟡 架构 | 2026-06-13 | 开放，size XL | 这是对 #4812 的架构替代方案，需要尽快决策合并或关闭，避免两条线并行 |

---

**总结：** IronClaw 正处于附件系统和 Slack 体验两大主线的高强度冲刺期。架构决策活跃（drain → reject 的转变），PR 吞吐量大，但 CI 红灯（#4108）是一个需要立即关注的健康隐患。建议今日优先处理：① 排查或暂停 Nightly E2E ② 对 4 个 Slack 修复 PR 进行集中 review ③ 对新贡献者 PR #4264 给予首次反馈。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-14

---

## 1. 今日速览

LobsterAI 今天处于**低活跃维护期**。过去 24 小时内无新版本发布，Issues 侧全部 4 条更新均来自 2026-04-03 创建但至今仍处于 `[OPEN][stale]` 状态的老问题，未见新增用户反馈。PR 端共 5 条更新，同样全部为 4 月初创建的陈旧条目，其中 2 条已关闭（代码贡献者 linlihua 针对 macOS 体验的两处 UI 修复），3 条开放 PR 仍处于待合并状态且无评审活动，`comments` 全部为 `undefined`。整体来看，项目近期**社区互动趋于停滞**，多个超过 70 天无人处理的积压 Issue/PR 尚未得到维护者响应，项目活跃度和响应速度需要关注。

---

## 2. 版本发布

**无新版本发布。** 最近一次 Release 在更早时间，今日无 Release 事件。

---

## 3. 项目进展

今日共合并/关闭 **2 个 PR**，均聚焦于 UI/UX 修复，不涉及核心功能迭代：

| PR | 状态 | 内容摘要 |
|---|---|---|
| [#1466](https://github.com/netease-youdao/LobsterAI/pull/1466) fix(mcp): modal close button unreachable when content grows tall | ✅ 已合并/关闭 | 修复 MCP Server 表单弹窗在内容较多时整体滚动导致 Cancel 按钮不可达的问题。将 `max-h-[80vh] overflow-y-auto` 从整个 modal panel 迁移至内容区域，确保 header/footer 按钮始终可见。 |
| [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) fix(shortcuts): display Cmd (⌘) instead of Ctrl on macOS | ✅ 已合并/关闭 | 修复 macOS 快捷键设置面板错误显示 `Ctrl` 而非 `Cmd (⌘)` 的问题。根因在于 `config.ts` 和 Settings 状态初始化均硬编码 `Ctrl`；修改后按平台区分渲染。 |

**项目整体推进评估**：两项合并均为小范围体验修复，不构成功能性里程碑。当前有 **3 个待合并 PR** 积压超过 70 天：

- [#1440](https://github.com/netease-youdao/LobsterAI/pull/1440) — 将已选 Skill 标签移至输入框内顶部展示，改善多 Skill 场景下的布局拥挤问题
- [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) — 为 HTML、React、Mermaid 文件添加可扩展的预览管道（继承自原 PR #1011 的冲突解决和 bug 修复版）
- [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) — 修复 Skill 重复导入无校验及 zip 导入目录名异常问题（直接关联到 Issue #1439 和 #1442 中用户反馈的技能管理 bug）

这三个 PR 覆盖了技能管理 UI、Artifact 预览能力和技能导入稳定性，若能及时合并，将有效回应用户侧多个痛点。

---

## 4. 社区热点

今日所有 Issue 均为陈旧条目更新，无"新热点"。但评论互动最多的两个 Issue 值得持续关注：

**🔥 [Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443) — 有计划支持新版本的 openclaw 吗？**
- **背景**：用户升级 openclaw 至 v2026.3.24 后，因官方 Release 包含 Breaking Change 导致 LobsterAI 无法启动。
- **诉求**：用户明确要求团队给出适配计划，属于**兼容性/依赖升级**类诉求。该 issue 自 4 月 3 日创建至今无官方回复，已超过 70 天处于 stale 状态。
- **分析**：openclaw 作为底层依赖，其 Breaking Change 直接影响 LobsterAI 可用性。用户目前处于"升级即崩溃"的阻塞状态，优先级应为 **P0/P1**。

**🔥 [Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437) — 创建定时任务时选择不重复、清空日历后点击创建无反应**
- **背景**：用户在"不重复"模式下清空日历内容后，点击创建任务按钮无任何响应，页面也不报错。
- **诉求**：前端交互 bug，用户期望至少应有错误提示或创建成功反馈。
- **分析**：典型的**空值校验缺失 + 前端无异常兜底**问题，虽不影响核心功能但对用户体验伤害较大。已 70+ 天无修复。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Bug | Issue | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **高** | openclaw v2026.3.24 Breaking Change 导致无法启动 | [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | OPEN, stale, 无回复 | ❌ 无 |
| 🟡 **中** | 上传已停用的技能后对话中仍可调用 | [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | OPEN, stale | ❌ 无 |
| 🟡 **中** | Agent 技能在对话后不再展示，切换会话后恢复 | [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) | OPEN, stale | ⚠️ 可能关联 PR #1440 / #1445 |
| 🟡 **中** | 定时任务创建时清空日历+不重复模式创建按钮无响应 | [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) | OPEN, stale | ❌ 无 |
| 🟢 **低** | MCP 弹窗内容过长时关闭按钮不可达 | — | ✅ 已修复 | [#1466](https://github.com/netease-youdao/LobsterAI/pull/1466) |
| 🟢 **低** | macOS 快捷键显示 Ctrl 而非 Cmd | — | ✅ 已修复 | [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) |

**关键风险点**：Issue #1443（openclaw 兼容性）属于**高严重度阻塞性 bug**，但完全无维护者响应，存在用户流失风险。Issue #1439（已停用技能仍可调用）涉及**权限控制/隔离逻辑缺陷**，属于潜在的安全体验问题。

---

## 6. 功能请求与路线图信号

| 请求/信号 | 来源 | 优先级评估 | 判断依据 |
|---|---|---|---|
| **适配 openclaw 新版本** | [Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | 🔴 紧急 | 用户直接被 Breaking Change 阻塞，影响可用性，属于必须响应的依赖升级需求 |
| **Agent Skill 选择机制的明确说明 / 技能管理功能增强** | [Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442)、[PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440)、[PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445) | 🟡 高 | 已有 2 个社区 PR 直接为此功能优化而来（Skill 标签展示 + 重复导入校验），说明社区对该方向有明确诉求和贡献意愿 |
| **Artifact 内容预览增强（HTML/React/Mermaid）** | [PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441) | 🟡 中高 | PR 已解决冲突并修复 5 个 bug，技术上已 ready for review，等待合并 |

**路线图推断**：下一版本最可能的方向是 **技能管理体验增强**（布局优化、重复校验、状态一致性）和 **Artifact 预览管线扩展**，因为社区贡献者已在此投入编码工作。openclaw 兼容性适配若再不启动，可能成为阻碍版本发布的关键阻塞项。

---

## 7. 用户反馈摘要

**真实痛点提炼：**

1. **依赖兼容性断裂**：openclaw 更新 Breaking Change 后用户完全无法使用 LobsterAI，且无任何迁移指南或适配说明，用户处于被动等待状态超过 2 个月。

2. **技能管理功能不透明**：
   - 用户不清楚创建 Agent 时添加技能的具体作用范围（只触发选择技能？还是作为推荐参考？）— Issue #1442 直接发问"agent 选择技能的作用是什么？"
   - 技能停用后仍可被调用，说明状态同步存在缺陷
   - 技能导入（zip/文件夹/GitHub 三种渠道）缺乏重复校验，导致同名技能冲突和 system prompt 污染

3. **前端交互兜底不足**：定时任务创建表单在必填项为空的情况下静默失败，无任何错误提示，用户甚至无法判断是 bug 还是操作问题。

**用户满意/认可点**：无直接正面反馈记录。但从 PR #1441 和 PR #1440 可以看到社区贡献者自发针对体验问题提交修复，说明仍有一部分深度用户对该产品有认同感并愿意投入。

---

## 8. 待处理积压（需维护者关注）

以下 Issue/PR 已积压超 70 天，建议尽快 triage：

### Issue 积压

| Issue | 创建天数 | 问题 | 建议处置 |
|---|---|---|---|
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | 72+ 天 | openclaw Breaking Change 兼容性 | 立即给出适配时间线或临时降级方案；P0 级别 |
| [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | 72+ 天 | 已停用技能仍可调用 | 需排查技能状态注入逻辑；可借助 PR #1445 的部分改动 |
| [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) | 72+ 天 | Agent 技能会话状态丢失 + 功能说明不足 | 可合并 PR #1440 作为部分修复；补充产品文档 |
| [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) | 72+ 天 | 定时任务创建无响应 | 前端表单校验 + 错误修复；难度较低，可快速关闭 |

### PR 积压

| PR | 创建天数 | 价值 | 建议处置 |
|---|---|---|---|
| [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) | 72+ 天 | 修复 Skill 重复导入 + zip 目录名异常 | 直接关联 Issue #1439/#1442；建议优先 review 合并 |
| [#1440](https://github.com/netease-youdao/LobsterAI/pull/1440) | 72+ 天 | Skill 标签 UI 布局优化 | 回应用户侧 Agent 技能体验诉求；代码审查后合并 |
| [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) | 72+ 天 | HTML/React/Mermaid 预览管线 | 原为 PR #1011 的完整版，已解决冲突；建议安排 review |

> **总结**：LobsterAI 目前有 **3 个 Issue + 3 个 PR** 积压超过 70 天且仍 marked `[stale]`，建议维护者本周内至少完成一轮 triage，对高优先级的 openclaw 兼容性问题给出明确答复，并对已 ready 的社区 PR 推进评审流程。积压问题若持续无响应，将损害社区贡献者积极性并加速用户流失。

---

*报告由 OWL 生成于 2026-06-14。数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-14

---

## 1. 今日速览

Moltis 今日整体活跃度较低，过去 24 小时内仅有 **1 条新 Issue** 和 **1 条新 PR**，无新版本发布。项目处于常规维护节奏，未见大规模功能推进或紧急热修。Issue 与 PR 均由同一贡献者（xzavrel）提交，呈现"自报自修"模式，社区参与面较窄。当前无积压的合并动作，项目健康度总体稳定但社区互动有待提升。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日无 PR 合并或关闭。唯一的新 PR 仍处于开放待审状态，尚未产生实质性的代码合并进展。

---

## 4. 社区热点

### Issue #1119 — MCP OAuth `invalid_target` Bug
- **链接：** [moltis-org/moltis#1119](https://github.com/moltis-org/moltis/issues/1119)
- **热度指标：** 1 条评论，0 个 👍（刚创建不足 24 小时）
- **分析：** 该 Issue 报告了 MCP OAuth 流程中一个具体协议兼容性问题——当远程 MCP 服务器（如 Notion、Linear）在 `WWW-Authenticate` 响应头中携带 `resource_metadata` 参数时，Moltis 的 OAuth 发现与注册流程会错误地将该 URL 传入后续请求，导致服务端返回 `invalid_target` 错误。这反映了 MCP 生态中不同厂商对 OAuth 元数据发现规范的实现差异，用户的核心诉求是**让 Moltis 能够无缝接入主流 MCP 服务提供商的 OAuth 流程**。

### PR #1120 — 对应修复
- **链接：** [moltis-org/moltis#1120](https://github.com/moltis-org/moltis/pull/1120)
- **分析：** 该 PR 直接对应 Issue #1119，修改方案为在 `fetch_resource_metadata()` 中改用直接 fetch 方式获取 `resource_metadata` URL，而非将其作为 target 参数传递。修复逻辑清晰、范围收敛，属于典型的协议层兼容性补丁。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---------|-------|------|--------|
| 🔴 高 | [#1119](https://github.com/moltis-org/moltis/issues/1119) | MCP OAuth 流程对 `resource_metadata` 的处理导致 `invalid_target` 错误，阻断 Notion、Linear 等主流 MCP 服务器的 OAuth 接入 | ✅ [#1120](https://github.com/moltis-org/moltis/pull/1120)（待合并） |

**说明：** 此 Bug 直接影响 MCP 远程服务器的 OAuth 认证流程，属于功能性阻断问题。虽然已有对应 PR，但尚未合并，受影响用户目前无法通过 Moltis 正常连接 Notion 和 Linear 的 MCP 端点。

---

## 6. 功能请求与路线图信号

今日无新的功能请求。当前唯一的 Issue 为 Bug 报告，不涉及新功能方向。从 PR #1120 的修复方向来看，项目在 **MCP 协议兼容性** 这一方向上持续投入，下一版本可能会包含更多 MCP OAuth 生态适配的改进。

---

## 7. 用户反馈摘要

- **核心痛点：** 用户在尝试将 Moltis 连接到 Notion（`https://mcp.notion.com/mcp`）和 Linear（`https://mcp.linear.app/sse`）的 MCP 服务器时，OAuth 授权流程在浏览器端直接报错，错误信息为 `{"error": "invalid_target"}`。这表明用户期望 Moltis 能够作为 MCP 客户端**开箱即用地支持主流 SaaS 平台的 MCP 端点**，而非需要手动调试或绕过。
- **使用场景：** 用户正在将 Moltis 作为 AI 智能体运行时，通过 MCP 协议接入第三方工具服务（项目管理、知识库等），属于典型的 MCP 多服务器编排场景。
- **满意度信号：** Issue 描述详尽，包含复现步骤和错误输出，说明用户对 Moltis 有较高期待并愿意投入时间反馈，但当前体验受阻。

---

## 8. 待处理积压

| 类型 | 编号 | 状态 | 等待时长 | 建议 |
|------|------|------|---------|------|
| PR | [#1120](https://github.com/moltis-org/moltis/pull/1120) | 开放待审 | ~1 天 | 建议维护者尽快 review 并合并，修复影响 MCP OAuth 核心流程的阻断性 Bug |
| Issue | [#1119](https://github.com/moltis-org/moltis/issues/1119) | 开放中 | ~1 天 | 已有对应 PR，合并后可关闭 |

**提醒：** 当前积压量极低，但 PR #1120 涉及 MCP OAuth 核心认证路径，建议优先处理。若长期未合并，可能影响更多尝试接入 Notion/Linear MCP 的用户体验。

---

> **日报生成时间：** 2026-06-14 | **数据来源：** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目日报 — 2026-06-14

---

## 1. 今日速览

CoPaw 今日整体活动量中等偏上，过去 24 小时共产生 10 条 Issue 更新和 8 条 PR 更新。社区开发者活跃度稳定，贡献者 `ly-wang19` 持续输出多轮质量修复 PR（5 个 OPEN PR），主要涉及本地模型、定时任务、配置处理和上下文管理等核心模块。新 Issue 以 Bug 报告和功能请求为主，Bug 话题集中在文件下载 404、Tauri 桌面端启动延迟、对话上下文压缩导致人设丢失等用户体验阻塞点上。今日无新版本发布，项目处于日常迭代维护阶段。

---

## 2. 版本发布

> ⚠️ 今日无新版本发布，本节略过。

---

## 3. 项目进展

**今日合并/关闭的 PR：**

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#2498](https://github.com/agentscope-ai/CoPaw/pull/2498) | fix(agents): use console language when creating agent and fallback unsupported langs | **CLOSED** | 修复新建 Agent 时语言始终默认为英文并错误复制中文人设文件的问题，改为读取 localStorage 语言设置并加入服务端自动回退逻辑 |
| [#4969](https://github.com/agentscope-ai/CoPaw/pull/4969) | feat(skill): Add skill tag batch download | **CLOSED** | 新增 Skill 批量下载的标签过滤能力，修复 #2961 |

**当前排队等待合并的 PR（均为 `ly-wang19`，first-time-contributor）：**

| PR | 说明 |
|---|---|
| [#5035](https://github.com/agentscope-ai/CoPaw/pull/5035) | 修复 llama.cpp 服务端版本号解析的硬编码切片 Bug |
| [#5040](https://github.com/agentscope-ai/CoPaw/pull/5040) | 修复定时任务单个无效 job 导致全部 job 加载失败的级联崩溃问题 |
| [#5037](https://github.com/agentscove-ai/CoPaw/pull/5037) | 修复 Linux 空 `Exec=` 配置行导致的 `IndexError` |
| [#5041](https://github.com/agentscope-ai/CoPaw/pull/5041) | 修复备份时单个不可读文件导致整个备份失败的问题（Windows 常见） |
| [#5038](https://github.com/agentscope-ai/CoPaw/pull/5038) | 修复 `LightContextManager.pre_reply` 空消息列表的 `IndexError` |
| [#5170](https://github.com/agentscope-ai/CoPaw/pull/5170) | 优化 `GET /agents` 端点的 `PROFILE.md` 重复磁盘读取及 O(n²) 去重性能问题 |

**整体向前迈进的方向：** 后端健壮性提升（边缘 case 防护）、本地模型兼容性改进、前端性能优化。多个 PR 处于 Under Review 阶段，预计下一个 patch 版本可收拢这批修复。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**[#5140 [CLOSED] Bug: v1.1.11.post2 附件下载 docx/pdf 报错 404](https://github.com/agentscope-ai/CoPaw/issues/5140)**
- 评论 6 条，今天被关闭
- 核心诉求：纯文本文件（txt/md/py）下载已修复，但 docx/pdf 等二进制文件点击下载仍然返回 404
- 状态：已关闭，但 Bot 自动回复称"将在下一个 minor 版本中评估修复方案"，社区尚未确认实际修复版本，需关注回归验证

**[#5156 [OPEN] Feature: 建议支持 kimi-for-coding / 加入 uv 白名单](https://github.com/agentscope-ai/CoPaw/issues/5156)**
- 评论 4 条
- 核心诉求：已订阅 Kimi Coding 套餐的用户无法通过非官方 API 方式接入，请求将 `kimi-for-coding` 加入 uv 白名单
- 反映了国内用户对多模型本地化接入的强烈需求

### 🔥 新提交值得关注

**[#5172] Bug: 聊天总出现问完问题没反应一直等待](https://github.com/agentscope-ai/CoPaw/issues/5172)**
- 严重可用性 Bug：对话间隔一段时间后再发消息，AI 无响应持续等待，点击停止报 `Task has been cancelled!`
- 对 QQ/微信等无法主动停止的通道场景是致命问题
- **无现有 fix PR，需要优先处理**

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 **严重** | [#5172](https://github.com/agentscope-ai/CoPaw/issues/5172) | 对话间隔后无响应、持续等待，影响所有通道 | ❌ 无 |
| 🔴 **严重** | [#5174](https://github.com/agentscope-ai/CoPaw/issues/5174) | Cron Agent 不能产出知识文件、心跳 Agent 不执行重任务，核心功能受限 | ❌ 无 |
| 🟠 **高** | [#5171](https://github.com/agentscope-ai/CoPaw/issues/5171) | 上下文压缩将人设文件（System Prompt）完全压缩丢失为 0，导致任务中断 | ❌ 无 |
| 🟠 **高** | [#5140](https://github.com/agentscope-ai/CoPaw/issues/5140) CLOSED | docx/pdf 文件下载 404 | ⚠️ 关闭但未确认实际修复 |
| 🟡 **中** | [#5047](https://github.com/agentscope-ai/CoPaw/issues/5047) | Tauri 桌面端启动从 1-2 分钟恶化至十几分钟，常无响应 | ❌ 无 |
| 🟡 **中** | [#5173](https://github.com/agentscope-ai/CoPaw/issues/5173) | 功能请求，控制台前端组件相关 | ❌ 无 |

**稳定性风险提示：** 今日新增的 #5172（无响应）和 #5171（上下文压缩丢失人设）均属于核心对话链路的严重 Bug，建议维护者尽快响应排查。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 相关产品方向 | 信号强度 |
|---|---|---|---|
| kimi-for-coding / uv 白名单接入 | [#5156](https://github.com/agentscope-ai/CoPaw/issues/5156) | 多模型本地接入 | 🟠 中 — 国产模型生态诉求 |
| 越南语界面支持 (vi) | [#5169](https://github.com/agentscope-ai/CoPaw/issues/5169) | 国际化 | 🟡 中 — 有印尼语和巴西葡语先例，实现路径已明确 |
| Zalo Bot 通道支持 | [#5168](https://github.com/agentscope-ai/CoPaw/issues/5168) | 越南消息通道 | 🟡 中 — 与越南语诉求同源，东南亚市场信号 |
| 飞书 CardKit 流式卡片长回复优化 | [#5167](https://github.com/agentscope-ai/CoPaw/issues/5167) | 飞书通道体验优化 | 🟠 中 — 已有人使用并反馈体验衰减 |
| Skill 标签批量下载 | [#4969](https://github.com/agentscope-ai/CoPaw/pull/4969) CLOSED | Skill 生态 | ✅ 已合并 |

**预测：** 国际化（越南语）和飞书体验优化大概率进入下一版本规划。多模型接入方面，社区对本地化模型兼容性的呼声持续升温。

---

## 7. 用户反馈摘要

**痛点：**
- **文件下载不稳定**：用户历经多个版本迭代仍遇到 docx/pdf 下载 404，纯文本与二进制文件处理逻辑不一致（#5140）
- **Tauri 桌面端体验倒退**：迁移到 Tauri 后启动时间从 1-2 分钟恶化到十几分钟，用户感到被忽视："卸载重装也无效"（#5047）
- **对话长时闲置后无响应**：有用户描述的症状极具破坏性，"接入 QQ/微信就没办法点_stop_ 就直接嘎了"（#5172）
- **人设文件丢失导致任务中断**：上下文压缩未考虑人设文件的保留优先级，压缩后上下文归零、任务崩溃（#5171）

**满意/正向信号：**
- 飞书 CardKit 流式卡片打通获得用户认可，只是长场景需优化（#5167）
- 用户对 CoPaw 整体项目态度友善，提出需求时措辞诚恳（#5156 "想诚恳提一个小需求"）

**使用场景画像：**
- Windows 桌面本地部署用户（Tauri 问题核心群体）
- QQ/微信/飞书通道接入用户
- 本地模型 + 多 Provider 配置的高级用户

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于等待状态，建议维护者关注：

| 编号 | 描述 | 创建日期 | 等待时长 | 风险 |
|---|---|---|---|---|
| [#5047](https://github.com/agentscope-ai/CoPaw/issues/5047) | Windows Tauri 启动极慢 | 2026-06-09 | 5天+ | 用户体验严重退化，无响应 |
| [#5035](https://github.com/agentscope-ai/CoPaw/pull/5035) | llama.cpp 版本解析 Bug 修复 | 2026-06-09 | 5天+ | 本地模型兼容性，Under Review |
| [#5040](https://github.com/agentscope-ai/CoPaw/pull/5040) | 定时任务级联崩溃修复 | 2026-06-09 | 5天+ | 影响所有 cron 用户 |
| [#5041](https://github.com/agentscope-ai/CoPaw/pull/5041) | 备份单文件失败导致全量失败 | 2026-06-09 | 5天+ | Windows 备份中断 |
| [#5037](https://github.com/agentscope-ai/CoPaw/pull/5037) | Linux 浏览器检测 IndexError | 2026-06-09 | 5天+ | Linux 边缘环境崩溃 |
| [#5038](https://github.com/agentscope-ai/CoPaw/pull/5038) | 空消息列表 IndexError | 2026-06-09 | 5天+ | 特定空上下文场景崩溃 |

> **积压风险提示：** 5 个 `ly-wang19` 的 PR 自 6 月 9 日提交后至今仍全部处于 OPEN/Under Review 状态。这些 Bug 修复质量良好且覆盖多个核心模块，建议维护者尽快走完审查流程。持续积压可能打击新贡献者的积极性。

---

**日报归档时间：** 2026-06-14 ｜ **项目健康度评估：** 🟡 中等 — 社区活跃但存在多个高优先级未响应 Bug，PR 审查存在明显积压。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-14

---

## 1. 今日速览

ZeroClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 **42 条**（新开/活跃 25 条，关闭 17 条），PR 更新 **50 条**（待合并 38 条，已合并/关闭 12 条）。无新版本发布，项目处于 **v0.8.0-beta-1 之后的密集开发期**，多个架构级 RFC 和核心 PR 并行推进。社区讨论聚焦于 **ask_user/WebSocket 交互修复、插件系统统一、多渠道路由、技能系统增强** 等方向。整体来看，项目迭代节奏快，Bug 修复响应迅速，但积压 PR 队列偏长（38 个待合并），维护者带宽可能成为瓶颈。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动了多项重要问题的解决：

- **#7398 [CLOSED]** — `feat(cron): add pause/resume for scheduled tasks`：允许在不删除重建的情况下启停定时任务，完善了 cron 调度器的运维体验。（参考 PR #7398）
- **#7509 [CLOSED]** — `fix(update self-test)`: 修复了 Windows 环境下更新自测中 zip 资产识别失败的问题。（PR #7509）
- **#7507 [CLOSED]** — `fix(quickstart infinite redraw)`: 修复了 `zeroclaw quickstart` 在非 TTY 环境下陷入无限循环刷出 4.3 GB 日志的严重体验问题。（PR #7507）

**重要待合并 PR 推进方向：**

| PR | 方向 | 关键内容 |
|---|---|---|
| #7546 | 架构统一 | 消除 SopEngine 双实例问题，单 daemon 单实例化 |
| #7549 | Bug 修复 | 对齐插件安装路径与发现路径，修复 CLI 安装的 WASM 插件不可见 |
| #7558 | DevOps | 规范化安装规范，9 个安装面统一从 Cargo.toml 派生 feature set |
| #7574 | 运行时 | 允许空 `delegate allowed_tools` 作为"无授权约束"语义 |
| #7361 | RFC-6969 | per-turn output routing via `send_via` + 语音投递修复 |

项目整体向前迈出显著一步：**核心运行时稳定性（单实例化）、插件安装路径一致性、WebSocket 交互修复** 三大方向已产出可合并 PR，预计将在近期合并主干后带来稳定性提升。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**#5849 — Dream Mode: 周期性记忆整合与反思学习**
（18 条评论，热度最高）
🔗 https://github.com/zeroclaw-labs/zerocaw/issues/5849

> 提案在空闲期引入轻量级后台"Dream Mode"，自动整合近期记忆、反思交互并更新长期知识结构。18 条评论显示这是社区最关注的智能体长期记忆方向，多位用户参与讨论记忆压缩策略和与现有 heartbeat/cron 机制的集成方式。这是 ZeroClaw 迈向 **自主学习与记忆进化** 路线的标志性提案。

**#5470 — 多 issue 报告：运行时行为异常**
（5 条评论，已关闭）
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/5470

> 用户报告 Telegram 渠道下消息被重复保存等多项运行时异常。已因"无法复现+stale"关闭，但核心诉求——**运行时稳定性**——在社区中反复出现。

**#5570 — SQLite 向量搜索优化：O(n) → ANN**
（5 条评论，已关闭）
🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/5570

> 提议为 SQLite 内存后端引入近似最近邻（ANN）索引替代暴力全表扫描。虽因 stale 关闭，但问题本质仍是性能瓶颈，有用户主动提出贡献实现。

### 📌 高度关注的功能提案

- **#7415 — RFC: 统一三个 Agent Turn 引擎**（PR #7540 已在执行中）
  🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7415
- **#7420 — RFC: 原生动态库插件系统**
  🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7420
- **#7497 — RFC: OCI 兼容容器仓库作为 WASM 插件存储与发现机制**
  🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7497

**分析：** 三个 RFC 同时活跃，表明社区正在为 ZeroClaw 的 **下一代插件与扩展架构** 做顶层设计决策。这直接关系到项目的长期可维护性和生态扩展能力。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| **S1 - 工作流阻断** | [#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) | canvas-store 回归，WS chat/ACP 会话后 /canvas 页面空白（由 #6986 引入） | 无 |
| **S1 - 工作流阻断** | [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) | WebSocket 会话中 `ask_user` 工具立即失败，报"Channel closed before receiving a response" | ✅ **#7584 / #7586 / #7587 |
| **S1 - 工作流阻断** | [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) | Web dashboard 不可用（macOS brew 安装后前端未构建） | 无（独立入口 `cargo web build`） |
| **S1 - 工作流阻断** | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS App 无法检测权限，空白窗口/窗口消失 | 无 |
| **S2 - 行为降级** | [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) | Telegram 消息重复保存等多项运行时异常 | 已关闭（无法复现） |
| **S3 - 轻微** | [#7509](https://github.com/zeroclaw-labs/zeroclaw/issues/7509) | Windos 环境下自测失败（zip 资产识别） | ✅ 已修复并关闭 |
| **S3 - 轻微** | [#7378](https://github.com/zeroclaw-labs/zeroclaw/issues/7378) | macOS Cmd-C 复制被识别为退出 chord | ✅ 已修复并关闭 |

**关键发现：**
- **#7563（canvas-store 回归）** 是今日最令人担忧的回归，直接影响 Web UI 使用体验，尚无修复。
- **#7542 / #7551 的 ask_user WebSocket 问题** 已有多个 PR（#7584, #7586, #7587）并行修复，表明社区对此问题的高度重视，预计很快合并。
- macOS App（Tauri）桌面适配问题（#7527）属于 S1，需维护者关注。

---

## 6. 功能请求与路线图信号

结合 Issue 与 PR 进展，以下功能需求可能纳入 v0.8.1：

1. **WebSocket 多会话支持**（#7543）：Web UI 侧边栏实现会话的创建/切换/重命名/删除。目前有 PR 在推进中，方向明确。

2. **多渠道路由（RFC-6969 / #7361）**：per-turn output routing via `send_via`，支持 QQ/DingTalk/WeChat/Feishu 的流式卡片消息（#7361, #7531）。PR 已在审查中，是最强 v0.8.1 候选。

3. **插件安装路径统一（#7549）**：将插件安装路径与发现路径对齐，解决 CLI 安装插件静默不可见的问题。PR 已有，预期近期合并。

4. **Agent Turn 引擎统一（#7415 / #7540）**：合并三个独立的 turn engine 为单一执行路径，架构重大简化。RFC 已通过，实现 PR 正在执行。

5. **Dream Mode 记忆整合（#5849）**：讨论最为活跃但处于提案阶段，预计需要更多架构讨论后才能进入开发。

6. **Quickstart 无限循环修复（#7507）**：已合并关闭，是非 TTY 环境下的关键体验修复。

---

## 7. 用户反馈摘要

**核心痛点：**
- **WebSocket / Web Dashboard 交互体验差**：`ask_user` 工具在 Web 端直接报错（#7542），多会话支持尚未实现（#7543），canvas 页面空白（#7563）。Web 前端体验是当前用户反映最集中的问题领域。
- **macOS 桌面端不稳定**：#7527 报告 macOS App 无法检测权限、窗口消失；#7523 报告 brew 安装后 dashboard 不可用。Tauri 桌面适配仍需打磨。
- **插件安装体验割裂**：用户通过 `zeroclaw plugin install` 安装的 WASM 插件在 agent 运行时不可见（#7549），路径配置不透明。

**满意信号：**
- Dream Mode 提案（#5849）获得 18 条讨论，社区对 ZeroClaw 在自主记忆与反思学习方向的探索表现出高度热情。
- 多个老旧 Bug 被迅速关闭（#7377, #7378, #7507），显示维护者对用户体验问题的响应效率较高。

**使用场景反馈：**
- 用户将 ZeroClaw 与 GPT-5.4 high reasoning 搭配使用（#5470），关注高推理模型下的运行时稳定性。
- 企业/自托管用户对自定义推理端点的 TLS 支持有需求（#5797，\"corporate PKI\"）。

---

## 8. 待处理积压

以下为长期未响应或积压的高价值 Issue/PR，建议维护者关注：

| 项目 | 创建日期 | 积压天数 | 状态 | 说明 |
|---|---|---|---|---|
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) Dream Mode | 2026-04-18 | **57 天** | OPEN, accepted | 最高讨论量提案，需确认是否纳入路线图 |
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) ANN 向量搜索 | 2026-04-09 | **66 天** | CLOSED (stale) | 性能优化诉求仍有效，需重新评估 |
| [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) TLS CA 自定义 | 2026-04-16 | **59 天** | OPEN | 企业用户刚需，PR 待审查 |
| [#6211](https://github.com/zeroclaw-labs/zeroclaw/issues/6211) Node.js LTS 锁定 | 2026-04-29 | **46 天** | in-progress | 开发中但进展缓慢 |
| [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) 运行时多异常 | 2026-04-07 | **68 天** | CLOSED (stale) | 多个运行时问题打包报告，部分可能仍存在 |

> **特别提醒：** 积压 PR 队列中 **38 个待合并 PR** 的审查压力较大。建议维护者对 #7546、#7549、#7558、#7574 等已就绪的核心 PR 优先完成 review，避免贡献者等待过久影响社区积极性。

---

*数据来源：ZeroClaw GitHub Repository (github.com/zeroclaw-labs/zeroclaw) | 统计截止：2026-06-14*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*