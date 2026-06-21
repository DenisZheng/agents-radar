# OpenClaw 生态日报 2026-06-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-21 00:43 UTC

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

# OpenClaw 项目日报 — 2026-06-21

## 1. 今日速览

OpenClaw 今日活跃度极高，过去 24 小时共产生约 500 条 Issues 更新（其中新开/活跃 480 条、关闭 20 条）和 500 条 PR 更新（待合并 471 条、已合并/关闭 29 条），无新版本发布。社区讨论高度集中于**会话状态管理**（session-state）、**消息投递可靠性**（message-loss）和**子代理编排**（subagent orchestration）三大主题，反映出项目在复杂多通道、多代理场景下面临的稳定性压力。多个高评分（🦞 diamond lobster / 🐚 platinum hermit）P1 问题仍在活跃讨论中，维护者响应速度成为社区关注焦点。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 29 个 PR 被合并或关闭，以下是最重要的推进：

| PR | 状态 | 内容 |
|---|---|---|
| **#95432** | 待合并（👀 ready for maintainer） | 修复多消息块流式传输中每条最终消息被重复投递的问题，由 yetval 提交，P1 评级，涉及 message-delivery 风险 |
| **#95434** | 待合并（📣 needs proof） | 修复子代理 spawn 时 `modelOverride`/`providerOverride` 未持久化的 bug（Issue #91171） |
| **#95436** | 待合并 | 修复子代理模型路由忽略 `model` 参数、静默回退到 deepseek 的问题 |
| **#95328** | 待合并（📣 needs proof） | 修复频道切换时 session origin 字段未重置的问题（Issue #95325） |
| **#95356** | 待合并（📣 needs proof） | 修复 Telegram ingress 超时后事件 claim 无限阻塞导致会话死锁 |
| **#95278** | 自动合并已启动 | ClawSweeper bot 自动修复 #94573 的合并准备 |
| **#95393** | 待合并（👀 ready） | 修复 `openclaw doctor` 误报本地 memory embeddings 未就绪（Issue #92582） |
| **#95414** | 待合并（📣 needs proof） | 修复本地模型（llama.cpp）工具调用 JSON 键尾随空格导致 cron 工具失败 |
| **#95267** | 待合并（🛠️ actively grinding） | 修复 Windows 下 QMD memory 路径反斜杠被 JSON 解析剥离的问题 |
| **#95431** | 待合并（👀 ready） | 修复 gateway drain/restart 期间向用户暴露内部错误提示信息的问题 |

**整体判断：** 今日合并的 PR 以 bug 修复为主，覆盖消息投递、子代理路由、Telegram 稳定性、跨平台兼容等关键路径。多消息块流式重复投递（#95432）和子代理模型路由（#95434/#95436）是高优先级修复，预计将纳入下一版本。

---

## 4. 社区热点

以下 Issues 今日讨论最活跃（按评论数排序）：

### 🔥 #88838 — SQLite 会话/转录迁移（31 条评论）
- **链接：** https://github.com/openclaw/openclaw/issues/88838
- **状态：** OPEN，P1，maintainer 标签
- **核心诉求：** 将会话/转录运行时状态从当前存储迁移到 SQLite，通过分支抽象接缝（branch-by-abstraction seam）分小 PR 落地，避免一次性高风险重写。这是目前评论数最多的 Issue，反映了社区对会话数据持久化和可恢复性的高度关注。

### 🔥 #85333 — `openclaw doctor --fix` 性能回退 4-5x（13 条评论）
- **链接：** https://github.com/openclaw/openclaw/issues/85333
- **状态：** OPEN，P1
- **核心诉求：** 2026.5.20 版本后 `doctor --fix` 从 55s 恶化到 229s+，根因为 session snapshot 路径遍历瓶颈。影响所有使用 `doctor --fix` 进行自动修复的用户。

### 🔥 #92201 — Anthropic thinking 签名间歇性无效（10 条评论）
- **链接：** https://github.com/openclaw/openclaw/issues/92201
- **状态：** OPEN，P1
- **核心诉求：** Embedded runner 中 Anthropic thinking 块签名在重放时间歇性无效，且恢复包装器因错误文本被泛化而永远不触发。影响所有使用 Anthropic + thinking 的嵌入式场景。

### 🔥 #86519 — Telegram 重复回复 2-10x（10 条评论）
- **链接：** https://github.com/openclaw/openclaw/issues/86519
- **状态：** OPEN，P1，回归
- **核心诉求：** 5.20 更新后 Telegram 通道出现严重重复回复。5.22 有所缓解但未完全修复。已有多个用户确认，影响面广。

### 🔥 #84583 — Cron 公告投递触发 SessionTakeoverError（9 条评论，👍3）
- **链接：** https://github.com/openclaw/openclaw/issues/84583
- **状态：** OPEN，P2
- **核心诉求：** 当 cron 任务完成并尝试向正在活跃聊天用户投递结果时，触发 `EmbeddedAttemptSessionTakeoverError`。根因是用户消息和 cron 公告并发写入同一 session 文件。

---

## 5. Bug 与稳定性

按严重程度排列的活跃 Bug：

### 🔴 P1 — 严重/数据丢失

| # | 标题 | 影响 | 有 Fix PR |
|---|---|---|---|
| **#88838** | SQLite 会话迁移 | session-state, message-loss | 否（跟踪 issue） |
| **#85333** | doctor --fix 4-5x 性能回退 | session-state, crash-loop | 否 |
| **#92201** | Anthropic thinking 签名无效 | session-state, message-loss, auth-provider | 否 |
| **#86519** | Telegram 重复回复 2-10x | session-state, message-loss | 否 |
| **#92043** | 180s compaction 超时导致长会话失败 | session-state, crash-loop | 否 |
| **#92460** | Isolated cron 投递丢失 delivery.channel | message-loss | 否 |
| **#92415** | `/model` 切换后 session 内 model 快照未刷新 | session-state, data-loss, auth-provider | 否 |
| **#91363** | Isolated cron 持续报 "LLM Request failed" | session-state, message-loss, auth-provider | 否 |
| **#93375** | Telegram polling 静默崩溃循环 | session-state, message-loss, crash-loop | 否 |
| **#91931** | 预置文件导致 bootstrap 被自动完成并删除 BOOTSTRAP.md | session-state, data-loss | 否 |
| **#91804** | 内部推理泄露（2026.6.5 回归） | security, message-loss | 否 |
| **#90945** | SQLite channel_ingress_events 过期 claim 不恢复 | session-state, message-loss | **是（#95356）** |
| **#92094** | message tool action=send 报 unsupported channel: telegram | message-loss | 否 |
| **#92057** | 多会话/多代理负载下 gateway 变慢或超时 | crash-loop | 否 |

### 🟡 P2 — 中等/功能受限

| # | 标题 | 影响 | 有 Fix PR |
|---|---|---|---|
| **#84583** | Cron 公告触发 SessionTakeoverError | session-state, message-loss | 否 |
| **#90354** | Pre-compaction memory flush 缺少边界验证 | session-state | 否 |
| **#90325** | Matrix 通道在 v2026.6.1 完全崩溃 | message-loss, auth-provider | 否 |
| **#91009** | Codex PreToolUse hook 消耗 100%+ CPU | crash-loop | 否 |
| **#90711** | launchd plist stderr 重定向到 /dev/null | 其他 | 否 |
| **#90595** | Cron 热重载/重试时误发失败通知 | 其他 | 否 |
| **#91223** | Active memory 注入使 prompt cache 命中率从 99.9% 降至 22% | 其他 | 否 |
| **#91212** | Gateway 重启后 delivery-recovery 0 recovered | message-loss, auth-provider | 否 |
| **#89278** | Codex OAuth 刷新成功但 cron/heartbeat 10s 超时 | message-loss, auth-provider | 否 |
| **#90925** | Subagent announce compaction 路由错误 | session-state, message-loss, auth-provider | 否 |
| **#90840** | Subagent 完成消息作为原始 worker 输出投递给用户 | session-state, security, message-loss | 否 |
| **#90639** | safeguard compaction 模式允许 session 增长到 context 上限 | session-state, message-loss | 否 |
| **#90082** | active-memory 熔断器过于激进，fallback 提示污染主会话 | session-state, auth-provider | 否 |
| **#90414** | agentmemory 搜索持续报 index metadata missing | auth-provider | 否 |
| **#89374** | Timeout compaction 报告成功但 session 无法恢复 | session-state, message-loss | 否 |
| **#92433** | Subagent 完成在 steer 到已结束的 requester run 时被静默丢弃 | session-state, message-loss | 否 |
| **#92361** | 工具可用性评估器静默忽略空 allOf/anyOf 组 | 其他 | 否 |
| **#92273** | Tool Search 模式破坏 pre-compaction memory flush | session-state, message-loss | 否 |
| **#90944** | sessions_yield 恢复回复已记录但未投递 | session-state, message-loss | 否 |
| **#94249** | skill_workshop apply 在大型提案上超时 | security | 否 |
| **#92582** | doctor 误报本地 memory embeddings 未就绪 | 其他 | **是（#95393）** |
| **#92884** | config validate 拒绝插件拥有的 channel schema 扩展 | 其他 | 否 |
| **#92369** | Cron isolated session 中 subagent 编排无可靠聚合方式 | session-state | 否 |
| **#94032** | exec 无法访问 private-LAN 主机 | security | 否 |

### 关键发现：
- **消息投递**（message-loss）是今日最普遍的影响标签，涉及至少 15 个活跃 Issue
- **安全相关** Issue 增加：#91804（推理泄露）、#94032（LAN 访问）、#90840（子代理输出泄露）
- 已有 Fix PR 的 Bug：#90945 → #95356，#92582 → #95393

---

## 6. 功能请求与路线图信号

| # | 需求 | 信号强度 | 已有 PR |
|---|---|---|---|
| **#88838** | SQLite 会话/转录迁移 | ⭐⭐⭐ 高（31 评论，P1，maintainer） | 否 — 需分多个小 PR |
| **#90916** | Topic-session families（多上下文通道） | ⭐⭐ 中（7 评论） | 否 |
| **#90354** | Pre-compaction memory flush 边界验证 | ⭐⭐ 中（8 评论） | 否 |
| **#14785** | 减少工具 schema token 开销（~3,500 tok/session） | ⭐⭐ 中（8 评论） | 否 |
| **#91455** | Kubernetes 文档更新 | ⭐ 低（7 评论，P3） | 否 |
| **#92105** | memory-wiki 可配置页面组 | ⭐ 低（4 评论，P3） | 否 |
| **#92957** | 新增 `agents.setDefault` Gateway RPC | ⭐⭐ 中 | **是（#92957 即 PR 本身）** |
| **#88504** | 多 slot memory 角色架构 | ⭐⭐ 中 | **是（#88504 即 PR 本身，XL 规模）** |
| **#86655** | Claude bridge app-server harness | ⭐⭐ 中 | **是（#86655 即 PR 本身，XL 规模）** |
| **#94707** | Slack relay 模式 | ⭐ 低 | **是（#94707 即 PR 本身）** |
| **#90703** | 支持 compat reasoning levels for thinking xhigh | ⭐ 低 | **是（#90703 即 PR 本身）** |

**路线图判断：**
- **SQLite 会话迁移**（#88838）是最明确的长期路线图项目，维护者已介入，预计将以系列小 PR 方式推进
- **多 slot memory 架构**（#88504）和 **Claude bridge**（#86655）是两个大型 XL 规模 PR，如将合并将显著改变项目架构
- **Active memory 插件稳定性**（#90082, #91223）的多个问题表明该插件可能需要架构级修复

---

## 7. 用户反馈摘要

### 😤 不满意

1. **性能回退未及时修复：** #85333 用户报告 `doctor --fix` 从 55s 恶化到 229s，已持续近一个月（5.22 提出），社区对修复速度不满。

2. **Telegram 体验退化：** #86519 用户反馈 5.20 后出现重复回复，虽在 5.22 有所改善但社区认为"未完全修复"。#93375 用户报告 Telegram polling 静默崩溃，健康监控无法恢复，需手动干预。

3. **Cron 隔离会话不可靠：** 多个用户（#91363, #92369, #84583）报告 isolated cron 场景下消息投递失败、subagent 编排不可靠。有用户表示"无论 timeoutSeconds 设置多少都失败"。

4. **安全回归令人担忧：** #91804 用户报告 2026.6.5 后内部推理/思考被暴露给终端用户，称其为"重大隐私和 UX 回归"。

5. **文档与实际不符：** #91455 用户指出 Kubernetes 部署文档使用"awkward"指令，与实际最佳实践脱节。

### 😐 中性/建设性

1. **SQLite 迁移方案获认可：** #88838 用户普遍支持分支抽象接缝方案，认为"避免一次性高风险重写"是正确方向。

2. **Subagent 路由问题需要根本修复：** #91171 及相关 Issue 用户指出子代理模型路由"静默回退"问题影响工作流可靠性，期待 #95434/#95436 尽快合并。

3. **Windows 支持需改进：** #95267 用户报告 QMD memory 在 Windows 下"完全不可用"，修复 PR 已提交。

### 😊 满意/积极

1. **ClawSweeper bot 自动修复流程：** #95278 等 PR 显示自动化工具链正在有效运作，社区对自动合并机制表示认可。

2. **维护者响应：** #88838 获得 maintainer 标签，多个 P1 问题在 24 小时内有新评论。

---

## 8. 待处理积压

以下长期未响应或处理缓慢的重要 Issue/PR 需维护者关注：

### 🔴 超 30 天未解决的 P1 Issue

| # | 标题 | 创建日期 | 最后更新 | 天数 | 风险 |
|---|---|---|---|---|---|
| **#88838** | SQLite 会话迁移 | 2026-06-01 | 2026-06-20 | 20 | 高 — 社区最关注 |
| **#85333** | doctor --fix 性能回退 | 2026-05-22 | 2026-06-20 | 30 | 高 — 影响所有用户 |
| **#86519** | Telegram 重复回复 | 2026-05-25 | 2026-06-20 | 27 | 高 — 影响面广 |
| **#84583** | Cron SessionTakeoverError | 2026-05-20 | 2026-06-20 | 32 | 中 — 有 workaround |
| **#88870** | Stuck-session 恢复误杀长运行 agent | 2026-06-01 | 2026-06-20 | 20 | 中 |

### 🟡 超 60 天未解决的 P2 Issue

| # | 标题 | 创建日期 | 最后更新 | 天数 |
|---|---|---|---|---|
| **#14785** | 工具 schema token 开销 | 2026-02-12 | 2026-06-20 | 130 |
| **#85334** | doctor --fix 自动注入循环警告 | 2026-05-22 | 2026-06-20 | 30 |

### 🔵 待合并的重要 PR（超 7 天）

| # | 标题 | 创建日期 | 等待天数 | 状态 |
|---|---|---|---|---|
| **#88504** | 多 slot memory 角色架构 | 2026-05-31 | 21 | 👀 ready for maintainer |
| **#86655** | Claude bridge harness | 2026-05-25 | 27 | ⏳ waiting on author |
| **#92957** | agents.setDefault RPC | 2026-06-14 | 7 | 👀 ready for maintainer |
| **#93087** | 拒绝不支持的 OTel grpc 配置 | 2026-06-14 | 7 | 👀 ready for maintainer |
| **#92946** | Telegram 无 rich API 时保留投递 | 2026-06-14 | 7 | 🛠️ actively grinding |

### ⚠️ 需特别关注

1. **#88504（多 slot memory）** 和 **#86655（Claude bridge）** 均为 XL 规模 PR，已等待 3 周+，需要维护者投入大量审查时间。如长期不合并可能导致贡献者流失。

2. **#85333（doctor --fix 性能）** 已满 30 天，影响所有使用 `doctor --fix` 的用户，建议优先分配维护者资源。

3. **#91804（推理泄露）** 虽标记为回归但未分配 fix PR，安全风险较高。

---

*日报生成时间：2026-06-21 | 数据来源：GitHub.com/openclaw/openclaw | 分析工具：OWL Analytics*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**日期：2026-06-21 | 分析范围：14 个活跃开源项目**

---

## 1. 生态全景

2026 年 6 月，个人 AI 助手/自主智能体开源生态处于**高速分化期**。头部项目（OpenClaw、ZeroClaw、Hermes Agent）在 24 小时内各产生约 500 条社区更新，进入复杂多通道、多代理场景的深水区；第二梯队（NanoBot、IronClaw、CoPaw）在 50-100 条量级上密集迭代，聚焦并发安全与性能优化；尾部项目（PicoClaw、TinyClaw、Moltis）则处于低流量维护或安全事件响应阶段。整体生态呈现**功能趋同、路径分化**的格局——消息投递可靠性、会话状态管理、子代理编排成为所有项目的共同战场，而内存架构、上下文策略、认证安全成为新的竞争高地。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度 | 阶段判断 |
|---|---|---|---|---|---|
| **OpenClaw** | ~500 | ~500 | 无 | 🟢 强劲 | 高吞吐 bug 修复期 |
| **ZeroClaw** | 50 | 50 | 无 | 🟡 活跃但积压上升 | 密集开发 (v0.8→v0.9) |
| **Hermes Agent** | 50 | 50 | 无 | 🟡 回归消化期 | v0.17.0 后修复 |
| **NanoBot** | 5 新开 | 18 | 无 | 🟢 良好 | 密集迭代期 |
| **IronClaw** | 1 | 22 | 无 | 🟢 强劲 | 快速迭代期 |
| **CoPaw** | 6 | 9 | 无 | 🟢 良好 | 稳定开发期 |
| **NanoClaw** | 1 | 6 | 无 | 🟡 需关注 | 安全修复积压 |
| **PicoClaw** | 2 | 1 | Nightly | 🟡 低流量 | 维护期 |
| **NullClaw** | 2 | 0 | 无 | 🔴 需改善 | 响应迟缓 |
| **LobsterAI** | 0 | 0 | 无 | 🔴 停滞 | 存量问题消化 |
| **TinyClaw** | 1 | 0 | 无 | 🟡 安全警报 | 维护静默期 |
| **Moltis** | 0 | 2 | 无 | 🟢 稳定 | 依赖维护期 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 静默 | — |

> **注：** Issues/PR 更新数为过去 24 小时内的活跃条目数（含新开、评论更新、关闭等），非净新增。

---

## 3. OpenClaw 在生态中的定位

**规模优势：** OpenClaw 的 500 Issues + 500 PR 日活跃度在生态中遥遥领先，约为第二梯队的 5-10 倍，反映出其社区规模和贡献者基数显著高于同类。

**技术路线差异：**

| 维度 | OpenClaw | 同类对比 |
|---|---|---|
| 会话存储 | SQLite 迁移中（#88838，31 评论） | ZeroClaw 已在推进多数据库后端（#6893） |
| 内存架构 | Active Memory 插件（#90082 熔断器问题） | CoPaw 正在迁移至 ReMe4（#5349） |
| 子代理编排 | Subagent announce 路由修复中（#90925） | NanoBot 在 SDK 层解决并发安全（#4425） |
| 通道支持 | Telegram/Matrix/WhatsApp 全覆盖 | ZeroClaw 通道更丰富（QQ/钉钉/微信/飞书） |
| 安全认证 | 推理泄露回归（#91804） | ZeroClaw 已在推进 OIDC（#7141） |

**核心优势：** OpenClaw 的**生态广度**和**社区自运转能力**（ClawSweeper bot 自动化、多贡献者并行提交）是其最大壁垒。但其在**性能回退修复速度**（#85333 已 30 天）和**安全回归响应**（#91804 无 fix PR）方面落后于同类。

---

## 4. 共同关注的技术方向

### 4.1 消息投递可靠性（涉及 8+ 项目）

| 项目 | Issue | 核心问题 |
|---|---|---|
| OpenClaw | #86519 | Telegram 重复回复 2-10x |
| OpenClaw | #92043 | Isolated cron 投递丢失 |
| OpenClaw | #92460 | delivery.channel 丢失 |
| Hermes Agent | #49812 | 消息重复投递 ~18 次 |
| CoPaw | #5344 | API 返回 200 但静默丢消息 |
| ZeroClaw | #6036 | Android 无限循环 |
| NullClaw | #967 | NoResponseContent 错误 |
| NanoBot | #4303 | MCP 会话终止 GC 崩溃 |

**共性根因：** 异步消息管道 + 并发写入 + 缺乏幂等性保障。

### 4.2 会话状态管理（涉及 6+ 项目）

- **OpenClaw：** SQLite 迁移（#88838）、compaction 超时（#92043）、model 切换快照未刷新（#92415）
- **ZeroClaw：** 32k context 首轮超限（#5808）、上下文幻觉（#6517）
- **Hermes Agent：** 工具输出膨胀导致多分钟卡顿（#49673）
- **CoPaw：** Scroll context manager 新策略（#5321）
- **NanoClaw：** Prompt caching 未启用导致成本浪费（#2768）
- **NanoBot：** Dream 禁用时游标未前进（#4321）

### 4.3 子代理编排（涉及 4+ 项目）

- **OpenClaw：** Subagent 完成消息路由错误（#90925）、模型路由静默回退（#95436）
- **NanoBot：** 并发 run() hook 竞争（#4408）
- **IronClaw：** Subagent prompt body 受 512-byte 限制（#4765）
- **ZeroClaw：** Agent 工具自省能力缺失（#5862）

### 4.4 认证与安全（涉及 5+ 项目）

- **ZeroClaw：** OIDC 认证支持（#7141）
- **CoPaw：** 文件工具路径穿越修复（#5341）
- **NanoClaw：** CVE-2026-29611 send_file 路径遍历（#2799）
- **TinyClaw：** 未认证 prompt_file 更新导致 LFI（#285）
- **Hermes Agent：** execute_code 绕过文件安全限制（#49578）

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特色 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手 | 开发者/极客 | Rust + 多通道 + 插件系统 |
| **ZeroClaw** | 安全优先的个人助手 | 企业/安全敏感用户 | Rust + OIDC + 可观测性 |
| **Hermes Agent** | 研究型智能体 | 研究人员/多平台用户 | Python + 多通道 + TUI |
| **NanoBot** | 轻量级 SDK 框架 | 开发者/集成商 | Python SDK + MCP 集成 |
| **IronClaw** | 高性能并发 Agent | 高并发场景 | Rust + Reborn runtime + 托管化 |
| **CoPaw** | 可观测性优先平台 | 企业级部署 | Langfuse + ReMe4 + Scroll Context |
| **NanoClaw** | 极简容器化 Agent | 容器/Docker 用户 | 单文件 + 容器优先 |
| **PicoClaw** | 嵌入式/协议级 Agent | IoT/协议开发者 | WebSocket Protocol + Evolution |
| **NullClaw** | 本地模型集成 | 本地部署用户 | Ollama + 第三方 Provider |
| **LobsterAI** | 桌面端 AI 助手 | 非技术用户 | GUI 优先 + 任务管理 |
| **TinyClaw** | 最小化 Agent 框架 | 极简场景 | 最小依赖 + HTTP API |
| **Moltis** | 文档/网站生成 | 内容创作者 | Astro + 静态站点 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代期（日活跃 > 100 条更新）

- **OpenClaw：** 500+ 更新，但积压严重，需关注维护者带宽
- **ZeroClaw：** 50 更新，v0.9.0 安全重构关键期
- **Hermes Agent：** 50 更新，v0.17.0 回归修复期

### ⚡ 稳定开发期（日活跃 10-50 条）

- **NanoBot：** 18 PR，并发安全修复方案并行
- **IronClaw：** 22 PR，channel 插件化 + reborn 并发双线推进
- **CoPaw：** 9 PR，scroll context + ReMe4 迁移

### 🛠️ 质量巩固期（日活跃 < 10 条）

- **NanoClaw：** 6 PR，CVE 安全修复积压 4 天
- **PicoClaw：** 1 PR + Nightly，token 消耗 bug 16 天未修复

### 💤 维护静默期（日活跃 ≈ 0）

- **NullClaw、LobsterAI、TinyClaw、Moltis、ZeptoClaw**

---

## 7. 值得关注的趋势信号

### 趋势 1：SQLite/持久化会话成为标配

OpenClaw 的 SQLite 迁移（#88838，31 评论，P1，maintainer 标签）和 ZeroClaw 的多数据库后端（#6893）表明，**会话数据持久化已从"锦上添花"变为"必备能力"**。用户无法接受重启后丢失对话上下文。

### 趋势 2：上下文管理是 2026 年核心战场

几乎所有项目都在上下文策略上投入重资源：OpenClaw 的 compaction 优化、CoPaw 的 scroll context、ZeroClaw 的 32k budget 规划、Hermes 的工具输出膨胀控制。**长对话的上下文管理直接决定产品可用性。**

### 趋势 3：安全左移正在加速

ZeroClaw 的 OIDC（#7141）、CoPaw 的文件工具路径约束（#5341）、NanoClaw 的 CVE 修复（#2799）、TinyClaw 的 LFI 漏洞（#285）——安全不再是事后补救，而是架构设计的一部分。**未认证的管理 API 和路径穿越是最常见的攻击面。**

### 趋势 4：可观测性成为差异化竞争力

CoPaw 的 Langfuse 集成（#5128 已合入）、ZeroClaw 的 OTel trace correlation（#8065）、Hermes Agent 的 Gateway 通知自定义（#29846）——用户不再满足于"能用"，而是要求"可见"。

### 趋势 5：并发安全在 SDK 层解决

NanoBot 的 contextvars 方案（#4425）和 IronClaw 的 TurnRunScheduler（#5085）表明，**并发安全正从"用户自行规避"转向"框架层原生支持"**。

### 趋势 6：本地模型兼容性仍是痛点

NullClaw 的 Ollama Gemma 截断（#952）、Agnes-2.0-Flash 无响应（#967）、NanoBot 的 VolcEngine/Doubao 推理参数（#4429）——**非 OpenAI 标准模型的兼容性是国产用户的核心诉求，也是开源生态的蓝海。**

---

*报告由 OWL 基于 2026-06-21 14 个项目的 GitHub 公开数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 — 2026-06-21

---

## 1. 今日速览

NanoBot 今日活跃度处于**高位**：过去 24 小时内共产生 **5 条新开 Issue** 和 **18 条 PR 更新**（14 条待合并、4 条已合并/关闭），无新版本发布。项目当前处于密集迭代期，社区贡献者围绕 **并发安全、性能优化、渠道扩展、SDK 增强** 四个方向同时推进。值得注意的是，今日合并的 3 条 PR 均聚焦于 bug 修复和稳定性提升，反映出维护团队对质量问题的快速响应。整体项目健康度良好，但待合并 PR 积压量较大（14 条），需要关注 review 瓶颈。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **4 条 PR 完成合并/关闭**，以下是关键进展：

| PR | 类型 | 说明 |
|---|---|---|
| [#4303](https://github.com/HKUDS/nanobot/pull/4303) | Bug Fix | 修复 MCP `streamableHttp` 服务器会话终止时的 GC 崩溃问题（`RuntimeError: Attempted to exit cancel scope in a different task`），通过正确关闭 tracked generators 解决。**显著提升 MCP 集成稳定性。** |
| [#4321](https://github.com/HKUDS/nanobot/pull/4321) | Bug Fix | 修复 Dream 功能禁用时游标未前进导致的 prompt 膨胀问题。当 `dream.enabled=false` 时，`.dream_cursor` 现在会正确前进，避免历史记录被重复塞入 prompt。 |
| [#4427](https://github.com/HKUDS/nanobot/pull/4427) | Bug Fix | 修复 iOS Safari 在 textarea 聚焦时自动缩放的问题，将移动端字体设为 16px，桌面端保持不变。**改善 WebUI 移动端体验。** |
| [#4426](https://github.com/HKUDS/nanobot/pull/4426) | Feature (Closed) | 新增 iMessage 渠道支持（通过 Photon Spectrum），采用与 WhatsApp 桥接相同的 Python-channel + Node-sidecar 模式。该 PR 被关闭，可能需进一步讨论或重新提交。 |

**整体评估**：项目在稳定性和渠道覆盖面上向前迈进了一步。MCP 崩溃修复和 Dream 游标修复属于关键稳定性补丁，建议用户在下次发布时优先升级。

---

## 4. 社区热点

### 🔥 最热 Issue

**[#4408 — Nanobot.run() per-run hooks are not concurrency-safe](https://github.com/HKUDS/nanobot/issues/4408)**
- 👍 0 | 💬 2 条评论
- **核心诉求**：当同一 `Nanobot` 实例上并发执行多个 `run()` 调用时，共享的 `self._loop._extra_hooks` 会被互相覆盖，导致 hook 丢失或错配。这是多会话/多用户场景下的严重竞态条件。
- **响应情况**：已有 **2 条独立 PR**（[#4425](https://github.com/HKUDS/nanobot/pull/4425)、[#4409](https://github.com/HKUDS/nanobot/pull/4409)）分别通过 `contextvars` 方案和参数传递方案尝试修复，显示社区对此问题的高度关注。

### 🔥 最热 PR

**[#4425 — fix(sdk): use contextvars for per-call hooks to prevent concurrent run() race](https://github.com/HKUDS/nanobot/pull/4425)**
- 作者 michaelxer 提出使用 `contextvars` 实现 per-call hook 隔离，避免共享状态竞争。方案更优雅，无需修改 `process_direct` 方法签名。

**[#4409 — fix(sdk): pass per-run hooks to process_direct instead of mutating shared loop state](https://github.com/HKUDS/nanobot/pull/4409)**
- 作者 waelantar（即 Issue #4408 的报告者）提出通过参数传递方式修复，但涉及公共方法签名变更，目前标记为 draft。

**两方案并行**，维护者需决策最终合并方向。

### 📈 性能优化讨论活跃

- **[#4420 — estimate_prompt_tokens 冗余 tiktoken 编码](https://github.com/HKUDS/nanobot/issues/4420)**：用户 codeLong1024 在做自己的数字员工项目时发现响应缓慢，定位到工具定义在每次迭代中被重复序列化和编码。已有 **2 条 PR**（[#4421](https://github.com/HKUDS/nanobot/pull/4421)、[#4428](https://github.com/HKUDS/nanobot/pull/4428)）分别实现了不同层级的缓存方案。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 问题描述 | Fix PR | 状态 |
|---|---|---|---|---|
| 🔴 高 | [#4408](https://github.com/HKUDS/nanobot/issues/4408) | `Nanobot.run()` 并发不安全，共享 `_extra_hooks` 被覆盖 | [#4425](https://github.com/HKUDS/nanobot/pull/4425)、[#4409](https://github.com/HKUDS/nanobot/pull/4409) | 待合并 |
| 🟡 中 | [#4420](https://github.com/HKUDS/nanobot/issues/4420) | `estimate_prompt_tokens` 每轮重复编码工具定义，导致响应延迟 | [#4421](https://github.com/HKUDS/nanobot/pull/4421)、[#4428](https://github.com/HKUDS/nanobot/pull/4428) | 待合并 |
| 🟡 中 | [#4303](https://github.com/HKUDS/nanobot/pull/4303) | MCP streamableHttp 会话终止时 GC 崩溃 | — | ✅ 已合并 |
| 🟡 中 | [#4321](https://github.com/HKUDS/nanobot/pull/4321) | Dream 禁用时游标未前进导致 prompt 膨胀 | — | ✅ 已合并 |
| 🟢 低 | [#4427](https://github.com/HKUDS/nanobot/pull/4427) | iOS Safari textarea 聚焦自动缩放 | — | ✅ 已合并 |

**关键风险**：并发安全 bug（#4408）影响所有使用同一 `Nanobot` 实例处理多会话的用户，建议维护者尽快评审并合并修复方案。

---

## 6. 功能请求与路线图信号

| 方向 | Issue | 关联 PR | 信号强度 | 分析 |
|---|---|---|---|---|
| **推理模型增强** | [#4429](https://github.com/HKUDS/nanobot/issues/4429) — 自定义 provider 配置 thinking style | 无 | ⭐⭐ | 用户需要 VolcEngine/Doubao 等非标准推理参数支持。`custom` provider 目前无法启用 reasoning 模式。 |
| **推理强度自动升级** | [#4419](https://github.com/HKUDS/nanobot/issues/4419) — 自动 reasoning effort 升级 | 无 | ⭐⭐ | 用户希望 nanobot 支持默认 + 多级 escalated reasoning effort，类似 Cursor 的行为。 |
| **Telegram 富消息** | [#4422](https://github.com/HKUDS/nanobot/issues/4422) — Bot API 10.1 sendRichMessage | [#4423](https://github.com/HKUDS/nanobot/pull/4423) | ⭐⭐⭐ | 支持表格、任务列表、折叠块、数学公式渲染。已有 PR 推进中。 |
| **子 Agent 聚合结果** | — | [#4414](https://github.com/HKUDS/nanobot/pull/4414) | ⭐⭐⭐ | 新增 `aggregated` 子 agent 结果模式，缓冲后一次性发布，减少消息碎片化。 |
| **Cron 任务模型预设** | — | [#4416](https://github.com/HKUDS/nanobot/pull/4416) | ⭐⭐ | 支持 cron job 级别的 model preset 覆盖，不修改 agent 全局模型配置。 |
| **SDK 运行时控制** | — | [#4296](https://github.com/HKUDS/nanobot/pull/4296) | ⭐⭐⭐ | 将 Python SDK 从最小化 `bot.run()` 门面扩展为完整开发者 API，包含 `RunResult` 元数据、会话/内存客户端等。 |
| **CLI 内联 TUI** | — | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | ⭐⭐ | 为 `nanobot agent` 添加终端 UI，交互式 TTY 下默认启用。 |
| **iMessage 渠道** | — | [#4426](https://github.com/HKUDS/nanobot/pull/4426) (Closed) | ⭐ | PR 被关闭，但需求存在，可能后续重新提交。 |

**路线图判断**：下一版本大概率会包含 **并发安全修复**、**性能优化（token 缓存）**、**Telegram 富消息支持** 和 **SDK 增强**。推理模型相关需求（#4429、#4419）目前仅有 Issue 无 PR，可能需要更长时间。

---

## 7. 用户反馈摘要

**真实痛点：**

1. **并发场景下的数据竞争**：用户 waelantar 报告了生产环境中多会话并发运行时的 hook 丢失问题（[#4408](https://github.com/HKUDS/nanobot/issues/4408)），说明已有用户将 nanobot 用于多用户/多会话的实时场景，对稳定性要求高。

2. **性能瓶颈影响实际部署**：用户 codeLong1024 在构建自己的数字员工项目 "nanobee" 时发现响应缓慢，定位到 token 估算的冗余计算（[#4420](https://github.com/HKUDS/nanobot/issues/4420)）。这表明 nanobot 正被用于对延迟敏感的生产项目，而不仅仅是实验性使用。

3. **非 OpenAI 推理模型支持不足**：用户 gkd2323c 指出 VolcEngine/Doubao 等模型使用非标准推理参数，`custom` provider 无法配置（[#4429](https://github.com/HKUDS/nanobot/issues/4429)）。随着国产模型使用增长，这一需求将更加迫切。

4. **Telegram 消息格式受限**：用户 zpljd258 希望支持 Bot API 10.1 的富消息格式（[#4422](https://github.com/HKUDS/nanobot/issues/4422)），当前 HTML parse mode 无法渲染表格、数学公式等内容。

**满意信号：**
- 多个 PR 由社区成员主动提交修复（如 michaelxer 同时提交了 MCP 崩溃修复、Dream 游标修复和并发安全修复），说明社区对项目有较高的参与度和归属感。
- 性能优化 Issue 附带了详细的 profiling 分析，用户愿意深入源码层贡献。

---

## 8. 待处理积压

以下 PR 已开放较长时间，建议维护者关注：

| PR | 开放天数 | 说明 | 建议 |
|---|---|---|---|
| [#4256](https://github.com/HKUDS/nanobot/pull/4256) — fix(memory): keep history cursor monotonic | 13 天 | 修复 MemoryStore 游标在压缩/越界时的单调性问题，含回归测试 | 📌 已充分评审，建议尽快合并 |
| [#4296](https://github.com/HKUDS/nanobot/pull/4296) — feat(sdk): expand Python SDK runtime controls | 10 天 | SDK 大规模增强，涉及公共 API 变更 | 📌 需要维护者重点评审 API 设计 |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) — feat(cli): add inline TUI | 8 天 | CLI 终端 UI，影响用户体验 | 📌 建议确认 TUI 方案后推进 |
| [#4373](https://github.com/HKUDS/nanobot/pull/4373) — fix(memory): preserve delivery context during consolidation | 5 天 | 修复归档过程中投递上下文丢失 | 📌 含 delivery 逻辑变更，需仔细评审 |
| [#4407](https://github.com/HKUDS/nanobot/pull/4407) — feat(whatsapp): seed LID->phone mappings | 3 天 | WhatsApp LID 到电话号码的启动时预填充 | 📌 功能明确，建议合并 |

**Issue 积压提醒：**
- [#4429](https://github.com/HKUDS/nanobot/issues/4429) 和 [#4419](https://github.com/HKUDS/nanobot/issues/4419) 均为推理模型增强需求，目前无 PR 跟进。如果下一版本计划支持更多推理模型，建议维护者明确方向以引导社区贡献。

---

> **日报总结**：NanoBot 今日处于高活跃迭代状态，社区贡献质量较高。最紧迫的事项是 **并发安全修复方案的选择与合并**（#4425 vs #4409）和 **性能优化 PR 的评审**（#4421、#4428）。待合并 PR 积压 14 条，建议维护者集中处理已成熟的功能和修复，避免贡献者等待过久影响积极性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：2026-06-21 | 数据窗口：过去24小时**

---

## 1. 今日速览

今日 Hermes Agent 仓库保持高活跃状态，共产生 **50 条 Issue 更新**与 **50 条 PR 更新**，且已合并/关闭比例偏低（Issue 关闭率 36%、PR 合并率 26%），表明新涌入的工单和贡献速度略快于消化速度，积压有所增长。无新版本发布，项目处于 **v0.17.0 发布后的消化吸收期**——多个与该版本相关的 Bug 报告集中出现（WhatsApp Docker 桥接崩溃、cron 模块缺失报错、Chat Completions timestamp 泄漏回归）。值得警惕的是，今日出现了 **3 个 P1 级 Issue**（cron 启动崩溃、Anthropic OAuth 404、strict provider 消息格式拒绝），均指向 v0.17.0 或近期合入的代码回归，需要优先处置。与此同时，Matrix 平台的系统性改进（DM 检测修复、E2EE 加固）和移动端概念验证（Android Capacitor 客户端）正在并行推进，显示社区贡献方向趋向平台扩展与稳定性深化。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为近期发布的 v0.17.0。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 摘要 |
|---|---|---|
| [#49850](https://github.com/NousResearch/hermes-agent/pull/49850) | ✅ 已合并 | **Telegram 表格回退渲染修复**：将 GFM pipe-table 无法在 MarkdownV2 中渲染时降级为项目符号列表的行为，改为使用等宽代码块保留原始表结构，提升 Telegram 普通消息模式下的表格可读性。 |
| [#49840](https://github.com/NousResearch/hermes-agent/pull/49840) | ✅ 已合并 | **Chat Completions timestamp 剥离**（v0.17.0 回归修复）：从发往 strict provider 的 `messages[]` 中移除内部 `timestamp` 字段，修复 Mistral/Fireworks 等兼容端点返回 HTTP 422 `extra_forbidden` 的问题。（配合 [#47875](https://github.com/NousResearch/hermes-agent/pull/47875) 形成双重保障） |
| [#49839](https://github.com/NousResearch/hermes-agent/pull/49839) | ✅ 已合并 | **WhatsApp Docker 桥接目录解析修复**（v0.17.0 回归修复）：桥接源目录不可写时自动镜像到 `HERMES_HOME`，解决容器内 `npm install` `EACCES` 错误。 |
| [#49654](https://github.com/NousResearch/hermes-agent/pull/49654) | ✅ 已合并 | 同上 WhatsApp 桥接修复的共享 helper 重构版本。 |
| [#49584](https://github.com/NousResearch/hermes-agent/pull/49584) | ✅ 已合并 | WhatsApp Docker 桥接可写目录问题的另一种实现（三 PR 同日合并同一问题，显示维护者对该问题的紧迫处理）。 |
| [#49812](https://github.com/NousResearch/hermes-agent/issues/49812) | ✅ 已关闭 | Telegram `sendRichMessageDraft` + `fresh_final_after_seconds` 导致消息重复投递 ~18 次的 Bug 报告（已关闭，推测已定位修复）。 |
| [#47875](https://github.com/NousResearch/hermes-agent/pull/47875) | ✅ 已合并 | Chat Completions timestamp 剥离的另一独立修复（与 #49840 同日合并，覆盖不同代码路径）。 |
| [#39923](https://github.com/NousResearch/hermes-agent/pull/39923) | ✅ 已合并 | **Matrix DM 检测修复**：`_is_dm_room()` 从成员数启发式改为检查 `is_direct` 标志，修复小群聊被误判为 DM 的问题。 |
| [#22275](https://github.com/NousResearch/hermes-agent/pull/22275) | ✅ 已合并 | **安装模式增强**：新增 `default`、`minimal`、`minimalTUI` 三种安装模式，支持功能化安装和运行时感知工具集选择。 |

**整体进展评估**：今日合并集中在 **v0.17.0 回归修复**（WhatsApp Docker、Chat Completions 兼容性）和 **平台渲染改进**（Telegram 表格、Matrix DM 检测），项目在快速消化上一版本引入的回归问题。安装体验的改进（多模式安装）也标志着项目在用户引导层面持续投入。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 热度信号 | 核心诉求 |
|---|---|---|
| **[#29846](https://github.com/NousResearch/hermes-agent/issues/29846)** — Gateway 关闭通知自定义 | 7 评论 / 👍5 | 用户希望可配置或禁用 Gateway 重启时的系统通知（"⚠️ Gateway shutting down"），尤其在 cron 自动更新场景下频繁打扰。**已关闭**（标记 `sweeper:implemented-on-main`），说明已在 main 分支实现。 |
| **[#48061](https://github.com/NousResearch/hermes-agent/issues/48061)** — v0.16.0 仍发送空 runtime model/provider | 4 评论 | Linux pipx 安装下请求因 `MODEL: ''` / `PROVIDER: None` 失败，max_retries_exhausted。**仍开放**，跨越两个版本未修复，影响 pipx 用户群。 |
| **[#43784](https://github.com/NousResearch/hermes-agent/issues/43784)** — 可共享 Profile 模板 | 4 评论 | 用户希望 Profile（配置+技能+MCP+soul.md 的集合）可导出/分享，避免每次从零配置。反映 Profile 系统已成熟但缺乏分发机制。 |
| **[#49673](https://github.com/NousResearch/hermes-agent/issues/49673)** — Gateway 会话因工具输出膨胀导致多分钟卡顿 | 3 评论 | 长时间工具密集型任务后，会话上下文保留大量原始工具输出，压缩反复分裂会话，后续正常消息继承膨胀历史。**新报告**，指向会话管理的内存/性能瓶颈。 |
| **[#49578](https://github.com/NousResearch/hermes-agent/issues/49578)** — execute_code 绕过文件编辑安全限制 | 2 评论 | `patch`/`write_file` 工具正确拒绝修改 `~/.hermes/config.yaml`，但 `execute_code` Python RPC 包装器可绕过此限制。**安全问题**，需统一安全边界。 |

### 🔥 活跃 PR

| PR | 方向 |
|---|---|
| [#49830](https://github.com/NousResearch/hermes-agent/pull/49830) | 浏览器工具安全加固：默认拒绝 `browser_console(expression=...)` 中的危险 JS 原语，强制在 CDP 输出边界进行密钥脱敏。**P1 安全修复**。 |
| [#49834](https://github.com/NousResearch/hermes-agent/pull/49834) | **Hermes Agent Android 应用概念验证**（Capacitor 瘦客户端），Draft 状态，讨论移动端可行性。 |
| [#18507](https://github.com/NousResearch/hermes-agent/pull/18507) | Matrix 平台全面加固：HTML 消毒、E2EE、媒体处理、诊断和可选 Synapse 集成层。长期开放的大型 PR。 |

---

## 5. Bug 与稳定性

### 🔴 P1 — 严重/崩溃

| Issue | 描述 | Fix PR |
|---|---|---|
| **[#49824](https://github.com/NousResearch/hermes-agent/issues/49824)** | v0.17.0 网关启动崩溃：`ModuleNotFoundError: No module named 'cron.scheduler_provider'` | ⚠️ 无 fix PR，需紧急处理 |
| **[#49821](https://github.com/NousResearch/hermes-agent/issues/49821)** | Anthropic OAuth 登录 404：token exchange 仍使用已迁移的 `console.anthropic.com` 端点 | ⚠️ 无 fix PR |
| **[#48061](https://github.com/NousResearch/hermes-agent/issues/48061)** | v0.16.0/v0.17.0 Linux pipx 安装发送空 model/provider 导致请求失败 | ⚠️ 无 fix PR，跨版本未修复 |
| **[#49830](https://github.com/NousResearch/hermes-agent/pull/49830)** | 浏览器工具安全边界绕过（`execute_code` 可访问敏感文件） | ✅ PR #49830 开放中 |

### 🟠 P2 — 功能受损

| Issue | 描述 | Fix PR |
|---|---|---|
| **[#49852](https://github.com/NousResearch/hermes-agent/issues/49852)** | TUI `session.close` 可能泄漏并发构建中的 AIAgent（线程竞态） | ⚠️ 无 fix PR |
| **[#49831](https://github.com/NousResearch/hermes-agent/issues/49831)** | WhatsApp 桥接路径 `parents[2]` 在可编辑/源码安装中浅一层 | ⚠️ 无 fix PR |
| **[#49673](https://github.com/NousResearch/hermes-agent/issues/49673)** | 工具输出膨胀导致会话多分钟卡顿 | ⚠️ 无 fix PR |
| **[#49569](https://github.com/NousResearch/hermes-agent/issues/49569)** | WhatsApp Docker 桥接 npm install EACCES + 错误日志路径 | ✅ 已合并 #49839/#49654/#49584 |
| **[#47868](https://github.com/NousResearch/hermes-agent/issues/47868)** | Strict provider 拒绝 `messages[].timestamp` | ✅ 已合并 #47875/#49840 |
| **[#42685](https://github.com/NousResearch/hermes-agent/issues/42685)** | macOS launchd 网关崩溃循环：root 拥有的 `gateway.lock` 导致 PermissionError | ⚠️ 无 fix PR |
| **[#32528](https://github.com/NousResearch/hermes-agent/issues/32528)** | QQ Bot C2C 按钮审批因 chat_type 不匹配（dm vs c2c）被拒绝 | ⚠️ 无 fix PR |
| **[#17144](https://github.com/NousResearch/hermes-agent/issues/17144)** | Docker agent/tool memory 写入 root 拥有文件，网关用户不可读 | ⚠️ 无 fix PR |

### 🟡 P3 — 体验问题

| Issue | 描述 |
|---|---|
| **[#49787](https://github.com/NousResearch/hermes-agent/issues/49787)** | macOS Desktop 每次启动提示重新安装/设置，尽管配置有效 |
| **[#45834](https://github.com/NousResearch/hermes-agent/issues/45834)** | 全局和 Profile patches 目录中重复 patch 文件被应用两次（已关闭） |
| **[#20815](https://github.com/NousResearch/hermes-agent/issues/20815)** | Dashboard 对本地 no-key-required  provider 显示 API key 警告 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 信号强度 | 判断 |
|---|---|---|---|
| **Gateway 关闭通知自定义/禁用** | [#29846](https://github.com/NousResearch/hermes-agent/issues/29846) | 👍5 + 7评论 + `sweeper:implemented-on-main` | ✅ **已在 main 实现**，预计下版本可用 |
| **可共享 Profile 模板** | [#43784](https://github.com/NousResearch/hermes-agent/issues/43784) | 4评论 | 🔶 需求明确但无 PR，可能纳入后续版本 |
| **WhatsApp Cloud API 消息模板支持** | [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) | 👍2 + 2评论 | 🔶 真实生产需求（机械加工业务），但官方此前表示"等待明确需求信号"，此 Issue 即为信号 |
| **自动化工作区记忆** | [#38552](https://github.com/NousResearch/hermes-agent/issues/38552) | 2评论 | 🔶 互补于 #33856，Agent 自动记住目录用途，减少 token 浪费 |
| **Qwen3.7-plus 加入 alibaba-coding-plan** | [#44662](https://github.com/NousResearch/hermes-agent/issues/44662) | 2评论 | 🔶 简单模型列表增补，低优先级 |
| **image_gen 支持 reference_image_urls** | [#29999](https://github.com/NousResearch/hermes-agent/issues/29999) | 2评论 + `sweeper:implemented-on-main` | ✅ **已在 main 实现** |
| **Android 客户端** | [#49834](https://github.com/NousResearch/hermes-agent/pull/49834) | Draft PR | 🔶 概念验证阶段，社区讨论中 |
| **Linear Kanban 集成** | [#49856](https://github.com/NousResearch/hermes-agent/pull/49856) | 开放 PR | 🔶 功能开发中，Dashboard 侧 Linear 链接元数据和控件 |

**路线图判断**：下一版本的主题预计为 **v0.17.x 回归修复 + 平台扩展**。WhatsApp Docker 修复、Chat Completions 兼容性修复已合并，Gateway 通知自定义和 image_gen 参考图支持已在 main 就绪。WhatsApp 消息模板和 Profile 模板共享是呼声较高的新功能方向。

---

## 7. 用户反馈摘要

### 😤 痛点

- **Docker 部署体验差**：WhatsApp 桥接在官方 Docker 镜像中因只读文件系统和错误路径完全不可用（[#49569](https://github.com/NousResearch/hermes-agent/issues/49569)），需要手动干预才能启动。多个 Docker 相关问题（[#17144](https://github.com/NousResearch/hermes-agent/issues/17144) 文件权限问题）长期未解决。
- **pipx 安装用户被忽视**：空 model/provider 问题从 v0.16.0 延续至今（[#48061](https://github.com/NousResearch/hermes-agent/issues/48061)），跨越两个版本无修复，pipx 用户群体可能较小但体验极差。
- **macOS 桌面端体验粗糙**：launchd 崩溃循环（[#42685](https://github.com/NousResearch/hermes-agent/issues/42685)）、每次启动提示重新安装（[#49787](https://github.com/NousResearch/hermes-agent/issues/49787)），显示桌面端在 macOS 上的打磨不足。
- **安全边界不一致**：`execute_code` 可绕过 `write_file`/`patch` 的安全限制（[#49578](https://github.com/NousResearch/hermes-agent/issues/49578)），存在配置被恶意修改的风险。

### 😊 满意 / 积极信号

- Gateway 关闭通知自定义需求得到快速响应（`sweeper:implemented-on-main`），显示维护者对用户体验反馈的重视。
- Matrix 平台的系统性改进（DM 检测、E2EE、渲染加固）获得持续投入，Matrix 用户社区活跃。
- 多模式安装（`minimal`/`minimalTUI`）的合入显示项目在降低入门门槛方面的努力。

### 📋 典型使用场景

- **制造业 WhatsApp 客服**：用户运行机械加工业务，需要通过 WhatsApp Cloud API 发送消息模板进行客户回访（[#45935](https://github.com/NousResearch/hermes-agent/issues/45935)）。
- **Docker 化部署**：多用户报告 Docker 部署问题，显示 Hermes 在容器化生产环境中的采用度较高。
- **多平台消息路由**：Telegram、WhatsApp、Matrix、QQ Bot 多平台并行使用，用户期望一致的消息渲染体验。

---

## 8. 待处理积压（需维护者关注）

### 🚨 长期未响应的重要 Issue

| Issue | 创建日期 | 等待天数 | 严重性 | 说明 |
|---|---|---|---|---|
| **[#48061](https://github.com/NousResearch/hermes-agent/issues/48061)** — 空 model/provider | 2026-06-17 | 4天+ | P1 | 跨版本 Bug，pipx 用户完全无法使用 |
| **[#42685](https://github.com/NousResearch/hermes-agent/issues/42685)** — macOS launchd 崩溃循环 | 2026-06-09 | 12天 | P2 | macOS 核心部署场景 |
| **[#32528](https://github.com/NousResearch/hermes-agent/issues/32528)** — QQ Bot C2C 审批失效 | 2026-05-26 | 26天 | P2 | 国内用户核心功能 |
| **[#17144](https://github.com/NousResearch/hermes-agent/issues/17144)** — Docker root 文件权限 | 2026-04-28 | 54天 | P2 | Docker 部署基础问题 |
| **[#20815](https://github.com/NousResearch/hermes-agent/issues/20815)** — Dashboard 误报 API key 警告 | 2026-05-06 | 46天 | P3 | 本地 provider 用户体验 |

### 📦 长期开放的重要 PR

| PR | 创建日期 | 等待天数 | 说明 |
|---|---|---|---|
| **[#18507](https://github.com/NousResearch/hermes-agent/pull/18507)** — Matrix 全面加固 | 2026-05-01 | 51天 | 大型 PR，含 E2EE/媒体/诊断，需审查资源 |
| **[#13336](https://github.com/NousResearch/hermes-agent/pull/13336)** — Webhook chunked body 上限 | 2026-04-21 | 61天 | P1 安全修复，长期未合并 |
| **[#44700](https://github.com/NousResearch/hermes-agent/pull/44700)** — Matrix DM m.direct 记录 | 2026-06-12 | 9天 | 配合 #39923 的后续修复 |
| **[#47050](https://github.com/NousResearch/hermes-agent/pull/47050)** — 自定义 provider 自去重修复 | 2026-06-16 | 5天 | 桌面端 model picker 隐藏自定义 provider |

### ⚠️ 特别提醒

1. **v0.17.0 回归集中爆发**：今日至少 3 个 P1 Issue 指向 v0.17.0 回归（cron 模块缺失、WhatsApp Docker 崩溃、Chat Completions timestamp 泄漏），建议考虑发布 **v0.17.1 紧急修复版本**。
2. **安全 PR 积压**：[#13336](https://github.com/NousResearch/hermes-agent/pull/13336)（Webhook body 上限）和 [#49830](https://github.com/NousResearch/hermes-agent/pull/49830)（浏览器安全边界）均为 P1 安全修复，建议优先审查合并。
3. **Docker 问题集群**：Docker 相关 Issue 长期积压（#17144 已 54 天），与今日新报告的 WhatsApp Docker 问题叠加，建议系统性审查 Docker 部署路径。

---

*数据来源：GitHub API | 生成时间：2026-06-21 | OWL 项目分析系统*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-06-21

> 数据来源：GitHub.com/sipeed/picoclaw | 统计口径：过去 24 小时（2026-06-20 ～ 2026-06-21）

---

## 1. 今日速览

| 维度 | 数值 |
|---|---|
| Issues 更新 | **2 条**（新开/活跃） |
| Pull Requests 更新 | **1 条**（待合并） |
| 新版本 | **1 个** Nightly Build |
| 合并/关闭 | 0 |
| Stale 标记 Issue | **3 个**（占比显著） |

> 项目处于**低流量维护期**：当日无代码合并，核心活跃条目均为 2 周前创建、近期复入的旧 Issue/PR，社区自发贡献有限。Nightly Build 正常滚动发布，功能主线迭代仍在推进。⚠️ 需注意当前活跃 Issue/PR 中 stale 比例偏高（仅 1 条 PR 标记 stale，但 Issue 中 2 条均为 stale），维护者响应节奏偏慢。

---

## 2. 版本发布

### Nightly — `v0.3.0-nightly.20260620.287853ab`

| 属性 | 详情 |
|---|---|
| **标签** | `v0.3.0-nightly` |
| **构建号** | `20260620.287853ab` |
| **性质** | 自动化持续集成构建，**非稳定版** |
| **风险提示** | 官方明确标注"may be unstable, use with caution" |
| **变更范围** | `v0.3.0` → `main` 全量 diff |
| **Changelog** | [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main) |

**分析**：Nightly 的持续产出说明 PicoClaw `main` 分支仍在上游演进，`v0.3.0` 正式版尚未就绪。破坏性变更细节需查阅 changelog，下游用户在升级前应做回归测试。

---

## 3. 项目进展

**今日无 PR 合并或关闭。**

唯一活跃 PR 为 `#2964`，仍处于开放状态——详见第 8 节"待处理积压"。

---

## 4. 社区热点

### Issue `#3012` — [BUG] Continuous consumption of tokens every minutes when evolution is enabled
- **链接**：https://github.com/sipeed/picoclaw/issues/3012
- **作者**：xpader | **环境**：`v0.2.9` / Go 1.25.10 / MiniMax / FreeBSD
- **互动**：4 条评论

**热度判定**：当日评论数最多、标题明确指向 BUG，且已进入 stale 状态（问题已存在 16 天）。

**诉求分析**：用户启用 Evolution 模式（Draft / Code Path Trigger）时，系统出现**不间断的 token 持续消耗**。这直接对用户产生**成本影响**，是一个高紧迫的经济性痛点。从"every minutes"描述来看，疑似某后台循环未正确收敛或在每次 tick 都触发完整的模型调用。

---

### Issue `#2984` — [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients
- **链接**：https://github.com/sipeed/picoclaw/issues/2984
- **作者**：Brook-sys | 👍: 2（社区赞同）
- **互动**：3 条评论

**热度判定**：点赞数最高，需求合理性获得社区初步认可。

**诉求分析**：Pico Protocol 的 WebSocket 客户端（外部接入方）目前依赖 `message.create`、`typing.start/stop` 等隐式事件来推断 Agent 是否完成一次回复，缺乏**确定性的 turn-complete 信号**。这会导致客户端侧需要额外的状态机猜测逻辑，影响可靠性与体验。本质是**协议层可观测性/语义完整性**的缺失。

---

### PR `#2964` — Feat/image input compression
- **链接**：https://github.com/sipeed/picoclaw/pull/2964
- **作者**：afjcjsbx

**热度判定**：当日唯一活跃的 PR，但评论数显示 `undefined`（可能为 0），且已标 stale。

**诉求分析**：`#3012` 的 token 持续消耗问题可能与大量原始图片直接输入到模型有关。如果 `#2964` 的多层级图像压缩合入，将在协议层减少每轮请求的 payload 大小，**对缓解 token 冗余有直接价值**。两条数据点之间存在潜在的因果关联。

---

## 5. Bug 与稳定性

| # | 严重性 | Issue / PR | 描述 | 已有 fix PR |
|---|---|---|---|---|
| 1 | 🔴 **高** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) | Evolution 启用后 token 被持续消耗，用户成本不可控 | ❌（推测 `#2964` 可部分缓解，但无直接关联 fix） |
| 2 | 🟡 **中** | [#2984](https://github.com/sipeed/picoclaw/issues/2984) | WebSocket 协议缺少显式 turn-complete 信号，客户端逻辑脆弱 | ❌ |
| 3 | 🟢 **低** | [#2964](https://github.com/sipeed/picoclaw/pull/2964) | 图像输入无多阶段压缩策略，高流量场景下可能导致输入超限 | ✅（PR 待合并） |

**核心风险**：`#3012` 是成本级别 BUG，在 SaaS/付费场景下优先级应调至最高。如果 Evolution 模式触发了低频但无法收敛的模型调用（如 draft review / code path 循环），则属于资源泄漏。

---

## 6. 功能请求与路线图信号

来自 Issue/标题及标签判断：

| 方向 | 强度 | 信号来源 | 建议 |
|---|---|---|---|
| **图像预处理管线** | ★★★★☆ 高 | `#2964`（实现 PR） | 多层级图像压缩、可配置阈值，已在 PR 中推进；建议合入后作为 v0.3.0 的亮点 |
| **协议/事件模型扩展** | ★★★☆☆ 中 | `#2984`、点赞数 | 需要增加 completion 信号事件（如 `message.complete` 或 `turn.end`），建议在协议文档中明确 state machine |
| **Evolution 成本治理** | ★★★☆☆ 中（待拆解） | `#3012` 的真实诉求 | 用户除了期望 bug 修复外，更期待对 Evolution 模式下的 token 用量有可观测、可配置配额 |
| **Nightly → 正式版** | ★★★★☆ 高 | Nightly 构建节奏 | Nightly 分支已分离 `v0.3.0`，建议尽快规划 rc 冻结窗口，避免 Nightly 与 release 漂移过大 |

---

## 7. 用户反馈摘要

| 维度 | 提炼 |
|---|---|
| **痛点** | Evolution 模式启用后 token 消耗无界（成本问题，{#3012}）；WebSocket 客户端无法确定 Agent 完成边界（{#2984}）；图像无压缩策略（{#2964} PR 前驱） |
| **满意/价值** | 图像压缩功能已有志愿者跟进；Nightly Build 持续产出为社区提供尝鲜渠道 |
| **使用场景** | 嵌入式/设备端 Agent + WebSocket 协议，意图在 FreeBSD / Web 端低延迟客户端落地 |
| **期待** | 更多可对 token 用量做配额/限流的配置项；协议层面提供更强的事件语义；清晰的 v0.3.0 里程碑 |

---

## 8. 待处理积压

> 以下条目符合"长期未响应且标记 stale"或"社区有正向评价但未推进"的标准。

| # | stale 标记 | 创建时间 | 描述 | 建议动作 |
|---|---|---|---|---|
| `PR #2964` | ✅ | 2026-05-28（**24 天前**） | 多级图像输入压缩功能 | **Review + 合入**：该功能可独立交付，已与 token 成本问题间接关联 |
| `Issue #3012` | ✅ | 2026-06-05（**16 天前**） | Evolution token 持续消耗 | **优先级提升**：为成本敏感环境增加了关键修复，可先做 usage audit / 限流 |
| `Issue #2984` | ✅ | 2026-06-02（**19 天前**） | 协议 turn-complete 信号缺失 | **确认是否纳入 v0.3.0**，若在则给出 delivery ETA |

---

**总结**：PicoClaw 项目当前处于 Nightly 迭代状态，最近合并节奏较低，但仍有活跃的 Issue 讨论（集中在 token 消耗与协议扩展）。建议维护者对 stale backlog 进行一次分级处理：

1. 尽快 Review `#2964`（能直接影响成本感知）
2. 回复 `#3012` 提供临时修复或配置建议（可避免用户损失）
3. 在 v0.3.0 backlog 中明确标记 `#2984` 的接纳状态（帮助外部客户端方决策接入方式）

---

> 本报告由 OWL 自动整理，数据截至 2026-06-21 UTC。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-21

---

## 1. 今日速览

过去 24 小时内，NanoClaw 社区活跃度**中等偏低**：共产生 **1 条新 Issue** 和 **6 条新 PR**，无新版本发布，无 PR 合并。所有 PR 均处于待合并状态，说明维护者今日尚未完成任何代码合入。从 PR 内容来看，社区贡献集中在**安全加固、容器挂载清理和文档补全**三个方向，反映出项目在快速迭代后正进入稳定性与安全性收敛阶段。整体项目健康度良好，但 PR 积压值得注意。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日**无 PR 合并或关闭**，项目代码库无实质性推进。6 条待合并 PR 的概况如下：

| # | 作者 | 类型 | 摘要 |
|---|------|------|------|
| [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) | CutSnake01 | Fix | 移除主 seed prompt 中已过时的 "Global Memory" 指令 |
| [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) | CutSnake01 | Fix | 删除 `groups/global/CLAUDE.md`（容器每次启动时会被主机删除） |
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) | CutSnake01 | Refactor | 移除已废弃的 `/workspace/global` 挂载 |
| [#2821](https://github.com/nanocoai/nanoclaw/pull/2821) | chandrameenamohan | Docs | 补充 `assistant-name` 环境变量文档 |
| [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) | sturdy4days | Security Fix | 限制 `send_file` 读取路径至 `/workspace`（修复 CVE-2026-29611） |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | sturdy4days | Fix | 修复 `safeParseContent` 对非对象 JSON 的处理 |

CutSnake01 的三条 PR 构成一组**容器启动逻辑清理**，解决宿主机与容器之间文件同步的遗留问题。sturdy4days 的两条 PR 则分别处理**安全漏洞**和**路由解析健壮性**。

---

## 4. 社区热点

### Issue #2768 — Enable prompt caching by default in Claude provider
- **链接**: [nanocoai/nanoclaw#2768](https://github.com/nanocoai/nanoclaw/issues/2768)
- **作者**: galmorduku | **创建**: 2026-06-14 | **更新**: 2026-06-20 | **评论**: 1

**分析**: 该 Issue 指出 Claude provider 在调用 `sdkQuery()` 时未设置 `enablePromptCaching`，导致 Anthropic Agent SDK 默认关闭 prompt 缓存，每轮对话都会重新发送完整的系统 prompt。对于系统 prompt 较长的 agent，这会显著增加 token 消耗和延迟。Issue 自 6 月 14 日创建以来仅 1 条评论，尚未有官方回应或关联 PR。这是一个**成本与性能优化**诉求，实现难度低（单行配置修改），但需要维护者确认是否会影响现有 agent 行为。

### PR #2799 — CVE-2026-29611 安全修复
- **链接**: [nanocoai/nanoclaw#2799](https://github.com/nanocoai/nanoclaw/pull/2799)

**分析**: 这是今日最受关注的安全相关 PR。`send_file` 功能仅检查文件存在性，未做路径限制或规范化，攻击者可通过 prompt 注入读取容器内任意文件（包括凭证状态、`/workspace/extra/*` 挂载下的文件）。该 PR 将读取路径限制在 `/workspace` 范围内。**尚未合并**，建议优先处理。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 描述 | Fix PR |
|----------|------|------|--------|
| 🔴 **严重** | CVE-2026-29611 | `send_file` 路径遍历，可读取容器内任意文件 | [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) 待合并 |
| 🟡 **中等** | `safeParseContent` 非对象 JSON 解析 | 原始 JSON 为基本类型时，调用方读取 `.text`/`.sender` 得到 `undefined` 而非回退到原始文本 | [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) 待合并 |
| 🟢 **低** | 容器启动时 `groups/global/CLAUDE.md` 被主机删除 | 每次容器启动后该文件消失，导致配置不一致 | [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) 待合并 |
| 🟢 **低** | `/workspace/global` 挂载已废弃 | 死代码，增加维护负担 | [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) 待合并 |

**建议**: CVE-修复 PR #2799 应作为最高优先级合入，当前处于未合并状态已 4 天。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 状态 | 分析 |
|------|------|------|------|
| Claude provider 默认启用 prompt caching | [#2768](https://github.com/nanocoai/nanoclaw/issues/2768) | 开放中，无关联 PR | 低成本高收益的优化，预计下一版本可能被纳入 |
| `assistant-name` 环境变量文档化 | [#2821](https://github.com/nanocoai/nanoclaw/pull/2821) | PR 待合并 | 文档补全，合并门槛低 |

**路线图信号**: 当前社区贡献集中在**安全加固**和**容器运行时清理**，未见重大新功能提案。项目可能处于功能稳定期，下一版本的重点预计为安全修复、性能优化（prompt caching）和文档完善。

---

## 7. 用户反馈摘要

- **安全顾虑**: CVE-2026-29611 的提出表明用户对 agent 沙箱隔离的**文件访问边界**高度关注，尤其是在多租户或不可信 prompt 场景下。
- **成本敏感**: Issue #2768 反映出拥有复杂系统 prompt 的用户对 **token 成本**的敏感度，prompt 缓存的缺失直接影响使用成本。
- **容器启动可靠性**: CutSnake01 的三条 PR 暗示部分用户在容器启动时遇到了**文件同步不一致**的问题，影响 agent 初始化行为的可预测性。
- **文档缺口**: `assistant-name` 环境变量的文档缺失说明用户在**自定义配置**时遇到障碍。

---

## 8. 待处理积压

| 条目 | 类型 | 创建/最后更新 | 等待天数 | 建议 |
|------|------|---------------|----------|------|
| [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) — CVE-2026-29611 安全修复 | PR | 2026-06-17 / 2026-06-20 | 4 天 | ⚠️ **紧急**：安全修复，建议 24h 内合入 |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) — safeParseContent 修复 | PR | 2026-06-17 / 2026-06-20 | 4 天 | 高优先级：影响路由解析正确性 |
| [#2768](https://github.com/nanocoai/nanoclaw/issues/2768) — Claude prompt caching | Issue | 2026-06-14 / 2026-06-20 | 7 天 | 需维护者确认是否接受，或指派贡献者提交 PR |
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) — 移除废弃挂载 | PR | 2026-06-20 | 1 天 | 低风险重构，可批量合入 |
| [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) — 删除 CLAUDE.md | PR | 2026-06-20 | 1 天 | 低风险修复，可批量合入 |
| [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) — 移除 Global Memory 指令 | PR | 2026-06-20 | 1 天 | 低风险修复，可批量合入 |

**积压总结**: 当前共有 **6 条 PR 待合并**，其中 2 条（#2799、#2801）已等待 4 天且涉及安全与稳定性，建议维护者尽快处理。Issue #2768 已开放 7 天无官方回应，需关注。

---

> **项目健康度评估**: 🟡 **良好但需关注** — 社区贡献活跃，但 PR 合入速度偏慢，安全修复积压。建议维护者提升 PR 审查吞吐量，优先处理 CVE 相关修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-21

---

## 1. 今日速览

过去 24 小时内，NullClaw 项目整体活跃度**偏低**：共产生 2 条 Issue 更新（1 条新开、1 条关闭），无 PR 活动，无新版本发布。项目处于**维护期平稳状态**，社区贡献节奏放缓，但仍有用户持续反馈本地模型集成和 API 响应稳定性问题。当前无合并中的功能 PR，开发推进力度较弱。

---

## 2. 版本发布

过去 24 小时内无新版本发布。最新已知发行版本仍为 **v2026.5.29**。

---

## 3. 项目进展

过去 24 小时内**无 PR 合并或关闭**，项目功能推进无实质性进展。

唯一值得关注的关闭 Issue 为 **#952**，该 Issue 报告了通过 Ollama 拉取 Gemma 模型后 Agent 返回不完整回答的问题，已于 2026-06-20 关闭，但关闭原因（修复/无法复现/用户自行解决）未在摘要中体现，建议维护者补充关闭说明以便社区追溯。

---

## 4. 社区热点

### Issue #967 — `[bug] error: NoResponseContent`（新开，0 评论）
🔗 [nullclaw/nullclaw#967](https://github.com/nullclaw/nullclaw/issues/967)

- **作者**: svier0 | 创建于 2026-06-20
- **核心诉求**: 在 Windows 11 + v2026.5.29 环境下，使用 Agnes-2.0-Flash 模型时，超过 50% 的对话（21 次中出现 12 次）返回 `NoResponseContent` 错误。用户强调同一模型和 API Key 在 PicoClaw 中工作正常，说明问题可能出在 NullClaw 对该模型/Provider 的响应解析逻辑上。
- **分析**: 这是一个**高优先级稳定性问题**——高频复现（>50%）、跨平台（Windows）、且存在可对比的参照实现（PicoClaw）。背后诉求是要求 NullClaw 兼容更多第三方模型 Provider 的响应格式，或在错误处理上给出更明确的诊断信息。

### Issue #952 — `[bug] Local model using ollama returns incomplete answers`（已关闭，3 条评论）
🔗 [nullclaw/nullclaw#952](https://github.com/nullclaw/nullclaw/issues/952)

- **作者**: bloodgroup-cplusplus | 关闭于 2026-06-20
- **核心诉求**: 通过 Ollama 使用 Gemma 模型时，Agent 回答不完整（截断/断句）。
- **分析**: 3 条评论表明社区有一定关注，但 Issue 已被关闭。与 #967 共同指向**本地模型/Ollama 集成路径的健壮性不足**，可能是流式响应处理或 token 截断逻辑存在缺陷。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|---------|-------|------|------|--------|
| 🔴 高 | [#967](https://github.com/nullclaw/nullclaw/issues/967) | OPEN | `NoResponseContent` 错误，复现率 >50%，Windows + Agnes-2.0-Flash | ❌ 无 |
| 🟡 中 | [#952](https://github.com/nullclaw/nullclaw/issues/952) | CLOSED | Ollama + Gemma 返回不完整回答 | ❓ 关闭原因未说明 |

**总结**: 当前唯一活跃的 Bug（#967）复现率高、影响核心对话功能，且无修复 PR 跟进，建议维护者尽快响应。

---

## 6. 功能请求与路线图信号

过去 24 小时内**无新功能请求**。当前 Issue 均为 Bug 报告，未发现明确的 Feature Request 或路线图信号。

从 #967 和 #952 的共性来看，社区对**本地模型（Ollama）和第三方 Provider 的兼容性**有持续需求，这暗示下一版本可能需要优先投入：
- 响应解析层的容错增强
- 更完善的错误诊断与日志输出

---

## 7. 用户反馈摘要

| 维度 | 观察 |
|------|------|
| **痛点** | 第三方模型（Ollama/Gemma、Agnes-2.0-Flash）集成不稳定，高频出现响应截断或无响应 |
| **使用场景** | 本地部署 + Ollama 运行开源模型；Windows 桌面端使用 |
| **满意点** | 用户愿意在 NullClaw 和 PicoClaw 之间对比测试，说明对 NullClaw 生态有期待 |
| **不满意** | 错误信息 `NoResponseContent` 缺乏诊断细节；Issue #952 关闭未说明原因，透明度不足 |

---

## 8. 待处理积压

| Issue | 等待时长 | 建议 |
|-------|---------|------|
| [#967](https://github.com/nullclaw/nullclaw/issues/967) | 1 天（新开，但复现率高） | 🔴 建议 48 小时内响应，要求用户提供 verbose 日志 |
| [#952](https://github.com/nullclaw/nullclaw/issues/952) | 已关闭 | 建议补充关闭原因（fixed / wontfix / duplicate），便于社区查阅 |

**整体积压评估**: 当前积压量极小，但 #967 的高复现率意味着若不及时处理，可能迅速积累更多同类报告。

---

> **项目健康度评分**: ⭐⭐⭐☆☆ (3/5) — 活跃度低，无版本迭代，存在高优先级未修复 Bug，社区响应速度有待提升。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-06-21（周日）

**项目：** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 本周日依然保持**极高活跃度**，过去 24 小时共有 **22 条 PR 更新**（9 条已合并/关闭、13 条待合并），1 条 Issue 新开/活跃，主力贡献者 serrrfirat 和 henrypark133 并行推进多条核心功能主线。当前项目处于快速迭代期，没有任何新版本发布。三条重要主线持续推进：① **reborn 进入并发化与托管化**——并发 turn 执行（#5085）和托管单租户 PostgreSQL profile（#5081）同步推进；② **channel 配置 manifest 化**——ingress 策略、认证、传输层从 Rust 硬编码中彻底抽离（#5107 合并了三个已关闭的前身 PR）；③ **reborn 自身可靠性**——安全测试修复（#5105）、依赖闭包 CI 扩展（#5098）、nightly E2E 失败追踪（#4108）形成完整闭环。整体健康度评价：🟢 **强劲活跃**，周末产线不眠，但尚无版本化产出，需关注积压 Issue 跟进窗口。

---

## 2. 版本发布

无。0 个新版本发布。

---

## 3. 项目进展

今日（2026-06-20 更新至日报日）共 **9 条 PR 完成合并/关闭**，7 条为社区/核心贡献者新提交的合并，其余为自动废弃的重复 PR。核心推进如下：

| PR | 状态 | 进展说明 |
|---|---|---|
| **[#5107](https://github.com/nearai/ironclaw/pull/5107)** | OPEN（核心合并） | 将 #5103、#5102、#5106 三个已关闭的同类 PR 合并为单一自包含 PR。channel/extension 的 ingress、auth、transport、secret 全部改为 manifest 定义，而非 provider-specific Rust 代码。这是 channel 插件化的基石性变更。 |
| **#5103** | CLOSED | 原 Move 1 keystone PR，ingress 策略 + 类型化 auth 的 manifest 投射。被 #5107 吸收。 |
| **#5102** | CLOSED | Move 3：v2 manifest 投射中跨合约凭证一致性（cross-contract credential coherence）不变量。被 #5107 吸收。 |
| **#5106** | CLOSED | Move 4：将 serve.rs 中 Slack/Telegram 各自重复的 host-ingress 挂载块合并为一个泛型 plan，消除 cfg 排列矩阵膨胀。被 #5107 吸收。 |
| **#5104** | CLOSED | Move 2：fail-close 化 auth verifier（keystone 修复）+ 类型化传输判别器。与 #5107 同在今日处理，覆盖了整个 manifest-driven-channels 方案的 4 个 move。 |
| **[#5105](https://github.com/nearai/ironclaw/pull/5105)** | CLOSED | 修复 `safety` 和 `auth` crate 中 3 条在 main 上断言预先变更行为的过期测试（stale tests），确认**非安全回归**，恢复 reborn CI 闭包完整性。 |
| **[#5108](https://github.com/nearai/ironclaw/pull/5108)** | OPEN（修复中） | 对 reborn 依赖闭包 CI 中暴露的 3 条剩余失败进行自动 agent 修复。其中 `ironclaw_host_runtime` / GitHub tool 的 **真实安全相关 over-exposure bug** 已修复；另外两条被判为 false-positive。 |
| **[#4829](https://github.com/nearai/ironclaw/pull/4829)** | CLOSED | 清理长期休眠的 `reborn-integration` workflow（未针对任何 main-target 执行过），并将其 Reborn 测试套件整合进 nightly deep CI，消除重复定义。 |
| **[#4777](https://github.com/nearai/ironclaw/pull/4777)** | CLOSED | 修复 Use Case 3 中 Slack 重连死循环：通过让 WebUI/channel state 正确反映已有 Slack 出站连接状态，避免无限 reconnect。提升 channel 可靠性。 |
| **[#5086](https://github.com/nearai/ironclaw/pull/5086)** | CLOSED | CI spike：实验性全量门控——nextest archive + mold + sccache + 分片。结果为非阻塞测量，为后续 merge gate 的全量化提供数据基线。 |

**整体推进评估**：channel 插件化主线（manifest-driven channels）迈出决定性一步；reborn 从串行执行向并发化演进（待合并的 #5085）；基础设施侧 CI 去重与加固同步推进。

---

## 4. 社区热点

> 注：今日所有 PR 评论数均显示为 `undefined`（可能平台未索引或新 PR 暂无评论），以下按 **功能影响面 & 关联 PR 数量** 排序，而非评论数。

### 🔥 #5107 — Channel Manifest 化整合 PR（影响面最广）
**[nearai/ironclaw#5107](https://github.com/nearai/ironclaw/pull/5107)**

将 channel 的 ingress、auth、transport、secrets 全部从 Rust 硬编码切换为 manifest 定义。**关联 3 个被吸收的 PR（#5103、#5102、#5106）** 同日全部关闭，合并进此单一 PR。反映出社区对 **channel 可扩展性** 的强烈诉求——当前每个新 channel 都需要修改 Rust 源码，严重制约生态扩展。

### 🔥 #5085 — Reborn 并发 Turn 执行
**[nearai/ironclaw#5085](https://github.com/nearai/ironclaw/pull/5085)**

将 Reborn runtime 从严格串行 turn 执行升级为 `TurnRunScheduler` + 每用户/每类型 cap 的并发模型。这是 reborn 性能扩展的关键一步，直接回应了高并发场景下 LLM 推理吞吐的瓶颈。

### 🔥 #5065 — One-Shot Scheduled Triggers
**[nearai/ironclaw#5065](https://github.com/nearai/ironclaw/pull/5065)**

引入 `TriggerSchedule::Once { at, timezone }` 作为与 recurring Cron 并列的一等调度变体。满足了"定时执行一次"的常见需求（如定时提醒、延迟任务），无需用户手动创建后删除 cron。

### 🔥 #5087 — Google OAuth Token 主动刷新
**[nearai/ironclaw#5087](https://github.com/nearai/ironclaw/pull/5087)**

在凭证解析时按需刷新 Google OAuth access token（1h TTL），避免手动重连。解决了长期运行 agent 因 token 过期而中断的痛点。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 🔴 **高** | **Nightly E2E 失败** — Full E2E (features) job 在 commit `ac1e16f` 上失败，2026-06-20 04:44 UTC 触发 | ⚠️ 已报告，暂无修复 PR | [#4108](https://github.com/nearai/ironclaw/issues/4108) |
| 🟡 **中** | **Reborn 依赖闭包 3 条失败** — 含 GitHub tool over-exposure 真实安全 bug + 2 条 false-positive | ✅ 已有 fix PR #5108（OPEN） | [#5108](https://github.com/nearai/ironclaw/pull/5108) |
| 🟡 **中** | **3 条安全相关 guard 测试在 main 上断言过期行为** — 非回归但曾漏检 | ✅ 已修复合并 #5105 | [#5105](https://github.com/nearai/ironclaw/pull/5105) |
| 🟢 **低** | **Slack 重连死循环** — WebUI 未正确反映已有连接状态 | ✅ 已修复合并 #4777 | [#4777](https://github.com/nearai/ironclaw/pull/4777) |
| 🟢 **低** | **Subagent inline prompt body 受 512-byte LoopSafeSummary 限制** — 影响子 agent 目标/direction 表达 | 🔧 修复中 #4765（OPEN） | [#4765](https://github.com/nearai/ironclaw/pull/4765) |

**关键关注点**：#4108 Nightly E2E 失败已持续超过 1 个月（创建于 2026-05-27），建议维护者尽快排查根因或暂停该 job 避免持续噪音。

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 当前状态 | 判断 |
|---|---|---|---|
| **Channel 插件化/扩展生态** | #5107 系列（4 PR 同日处理） | 核心 PR 待合并 | ✅ 高优，即将落地 |
| **Reborn 并发执行** | #5085 | OPEN，待 review | ✅ 高优，与托管化并行 |
| **Reborn 托管单租户 PostgreSQL** | #5081 | OPEN，待 review | ✅ 高优，hosted preview 路径 |
| **Reborn 学习系统（从错误中学习）** | #4937 | OPEN，WS-1 阶段 | 🔄 中优，长期路线图 |
| **One-Shot Triggers** | #5065 | OPEN | ✅ 中优，实现完整 |
| **Google OAuth 自动刷新** | #5087 | OPEN | ✅ 中优，实现完整 |
| **Workspace 实体与跨 workspace 分享** | #2548 | CLOSED（已合并） | ✅ 已完成，含 DB migration |
| **Hosted 单租户 Postgres Profile** | #5081 | OPEN | 🔄 中优，与 reborn 托管化关联 |

**路线图判断**：当前项目重心明确为 **① Reborn 运行时强化（并发 + 托管 + 学习）** + **② Channel 生态解耦（manifest 化）** 双线并行。Workspace 实体化已完成，下一阶段自然走向多租户托管。

---

## 7. 用户反馈摘要

由于今日所有 PR 评论数为 `undefined`，以下从 PR Issue 摘要和描述中提炼用户/开发者诉求：

- **Channel 扩展性痛点（强共识）**：#5107 系列 4 个 PR 同日密集处理，反映开发者对"每加一个 channel 就要改 Rust 源码"的强烈不满。manifest 化是社区反复讨论后的落地。
- **Reborn 串行瓶颈（实操痛点）**：#5085 明确描述了"inbound conversations 被并发接受但 runs（LLM 推理）严格串行"的矛盾，这是高并发场景的真实吞吐瓶颈。
- **Token 过期中断（体验痛点）**：#5087 针对 Google OAuth 1h access token 需手动重连的问题，提出按需自动刷新方案，改善长期运行 agent 的可靠性体验。
- **Slack 重连循环（稳定性痛点）**：#4777 描述了 Use Case 3 中因 WebUI 状态未同步导致的无限 reconnect，影响生产环境 channel 可用性。
- **Nightly E2E 持续失败（信心风险）**：#4108 自 2026-05-27 起持续失败，长期未修复可能削弱贡献者对 CI 门控的信心。

---

## 8. 待处理积压

| 积压项 | 类型 | 创建日期 | 最后更新 | 风险 | 建议 |
|---|---|---|---|---|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E failed | Issue | 2026-05-27 | 2026-06-20 | ⚠️ 已持续 **25 天**未关闭 | 建议：排查根因或暂停 job，避免 CI 噪音 |
| **[#4002](https://github.com/nearai/ironclaw/pull/4002)** — Dependabot actions 批量升级（16 项） | PR | 2026-05-24 | 2026-06-20 | ⚠️ 已超 **27 天**未合并 | 建议：审查 breaking changes（checkout v4→v7）后合并或关闭 |
| **[#4765](https://github.com/nearai/ironclaw/pull/4765)** — Subagent inline prompt body budget | PR | 2026-06-11 | 2026-06-20 | 🟡 10 天未合并 | 建议：core review，变更范围小 |
| **[#4937](https://github.com/nearai/ironclaw/pull/4937)** — Reborn learning system WS-1 | PR | 2026-06-15 | 2026-06-20 | 🟡 6 天，长期路线图 | 建议：按节奏推进，无需加速 |
| **[#2548](https://github.com/nearai/ironclaw/pull/2548)** — Workspace entities（已合并但含 DB migration） | PR | 2026-04-16 | 2026-06-20 | 🟢 已合并 | 关注：DB migration 执行后是否有用户反馈数据问题 |

**重点关注**：#4108（Nightly E2E）和 #4002（Dependabot）两项积压均超过 3.5 周，建议本周内分别给出明确处理意见（修复/暂停/关闭），以维护 CI 健康度和贡献者信任。

---

*本报告由 OWL 基于 2026-06-21 GitHub 公开数据自动生成。数据截至 2026-06-21 00:00 UTC。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 — 2026-06-21

> **数据来源**: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | **统计周期**: 过去24小时

---

## 1. 今日速览

LobsterAI 今日处于**低活跃维护期**。过去24小时内无新 Issue 或 PR 提交，无新版本发布，也无 PR 合并活动。全部5条 Issue 更新均为**已关闭的 stale 议题**（由自动化流程或维护者批量关闭），说明当前社区新增反馈趋缓，项目进入存量问题消化阶段。整体活跃度评估：**低**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**无 PR 合并或关闭活动。** 过去24小时 PR 更新为0条，项目在功能推进和代码合入方面无可见进展。

---

## 4. 社区热点

今日无新增讨论，5条更新均为 stale 关闭操作。以下按历史评论量和关注度梳理近期最具代表性的议题：

| # | Issue | 关注点 | 链接 |
|---|-------|---------|------|
| 1 | 任务显示完成但无返回结果 | 用户体验/任务执行可靠性 | [Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496) |
| 2 | 进程无故中断 | 系统稳定性 | [Issue #1495](https://github.com/netease-youdao/LobsterAI/issues/1495) |
| 3–5 | 三个"未保存确认"类 UI Bug | 数据安全与交互设计 | [Issue #1468](https://github.com/netease-youdao/LobsterAI/issues/1468) · [Issue #1469](https://github.com/netease-youdao/LobsterAI/issues/1469) · [Issue #1470](https://github.com/netease-youdao/LobsterAI/issues/1470) |

**分析**: 由同一用户 `MaoQianTu` 提交的三个 UI 一致性 Bug（#1468、#1469、#1470）具有高度关联性——均指向**弹窗/面板关闭时缺乏未保存更改确认机制**，涉及 Agent 创建、Agent 设置、MCP 服务器配置三个核心模块。这反映出用户对**数据丢失风险**的强烈担忧，属于交互设计层面的系统性缺陷，而非孤立问题。

---

## 5. Bug 与稳定性

以下按严重程度排列今日关闭的 Bug 类 Issue：

### 🔴 高 — 稳定性/可靠性

- **进程无故中断** ([Issue #1495](https://github.com/netease-youdao/LobsterAI/issues/1495))
  - 用户报告使用过程中频繁出现进程中断，无法确认是客户端还是大模型侧问题。👍 1，评论2条。
  - **状态**: 已关闭（stale），**无关联 fix PR**。

- **任务显示完成但无返回结果** ([Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496))
  - 任务状态与实际输出不一致，属于状态同步/结果回传缺陷。评论3条。
  - **状态**: 已关闭（stale），**无关联 fix PR**。

### 🟡 中 — 数据丢失风险

- **Agent 创建弹窗关闭时无未保存确认** ([Issue #1468](https://github.com/netease-youdao/LobsterAI/issues/1468))
- **Agent 设置面板关闭时无未保存确认** ([Issue #1469](https://github.com/netease-youdao/LobsterAI/issues/1469))
- **MCP 服务器配置弹窗关闭时无未保存确认** ([Issue #1470](https://github.com/netease-youdao/LobsterAI/issues/1470))

  三个 Issue 同属一个系统性 UI 缺陷模式，影响 Agent 配置工作流的核心路径。各2条评论。
  - **状态**: 均已关闭（stale），**均无关联 fix PR**。

> ⚠️ **注意**: 上述5个 Issue 均以 stale 标签关闭，意味着它们可能因长期未活跃而被自动关闭，**不代表问题已修复**。

---

## 6. 功能请求与路线图信号

今日无新功能请求提交。从近期关闭的 Issue 中可提取以下**隐含的改进方向**：

- **未保存更改确认机制**: 三个一致性的 UI Bug 表明用户期望在 Agent 创建、Agent 设置、MCP 配置等所有表单弹窗中引入统一的"dirty check + 确认对话框"模式。这是一个明确的 UX 改进信号。
- **任务执行状态可靠性**: Issue #1495 和 #1496 指向任务执行链路的健壮性需求，可能涉及客户端-服务端状态同步机制的增强。

目前无相关 PR 在推进上述方向。

---

## 7. 用户反馈摘要

从近期 Issue 内容中提炼的真实用户痛点：

| 痛点 | 场景 | 情绪 |
|------|------|------|
| **配置内容静默丢失** | 用户花费时间填写 Agent 系统提示词、MCP 环境变量（含 API Key）后，因误触或习惯性关闭弹窗导致全部内容丢失，需重新填写 | 😤 沮丧 |
| **任务结果不可见** | 界面上任务已标记完成，但实际未收到任何返回结果，用户无法判断是执行失败还是展示问题 | 😕 困惑 |
| **进程频繁中断** | 使用过程中突然中断，影响工作流连贯性，且缺乏明确的错误归因信息 | 😟 不安 |

**关键洞察**: 用户的核心不满集中在**可预期性**上——无论是数据是否保存、任务是否真正完成、进程是否稳定，系统都未能给出清晰、可靠的反馈。这提示项目在**状态透明度和用户确认机制**方面存在系统性短板。

---

## 8. 待处理积压

以下 Issue 虽已被 stale 关闭，但**问题本身未确认修复**，建议维护者重新评估：

| Issue | 问题描述 | 创建日期 | 建议 |
|-------|----------|----------|------|
| [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) | 进程无故中断 | 2026-04-07 | 🔴 稳定性问题，建议重新打开并排查根因 |
| [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) | 任务完成但无返回 | 2026-04-07 | 🔴 状态同步缺陷，建议验证是否已修复 |
| [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) | Agent 创建弹窗无未保存确认 | 2026-04-04 | 🟡 建议作为统一 UX 改进项跟踪 |
| [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) | Agent 设置面板无未保存确认 | 2026-04-04 | 🟡 同上 |
| [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) | MCP 配置弹窗无未保存确认 | 2026-04-04 | 🟡 同上 |

> 📌 **维护者建议**: 考虑将 #1468、#1469、#1470 合并为一个统一的"表单脏数据确认"改进任务，在 Modal/Panel 层实现统一的 `onBeforeClose` 拦截逻辑，避免逐点修复。

---

**项目健康度总评**: ⚠️ **需关注** — 当前无活跃开发活动，多个涉及稳定性和数据安全的核心 Bug 以 stale 方式关闭但未确认修复，建议维护者尽快排查并更新状态。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报 — 2026-06-21

> 数据来源：[github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi) | 统计窗口：过去 24 小时

---

## 1. 今日速览

TinyClaw 今日整体活跃度**极低**：过去 24 小时内仅有 1 个新 Issue 提交，无 PR 活动，无新版本发布。项目处于典型的**维护静默期**，社区贡献近乎停滞。值得注意的是，唯一的活动是一条**安全漏洞报告**，且涉及未认证条件下的任意本地文件读取，严重性不容忽视。维护团队需尽快响应，避免漏洞细节在公开 Issue 中持续暴露。

---

## 2. 版本发布

**无新版本发布。** 当前最新版本仍为 `0.0.20`。

---

## 3. 项目进展

**无 PR 合并或关闭。** 项目在过去 24 小时内无实质性代码推进。

---

## 4. 社区热点

### Issue #285 — 安全漏洞：未认证的 `prompt_file` 更新导致任意本地文件读取

- **链接：** [TinyAGI/tinyagi#285](https://github.com/TinyAGI/tinyagi/issues/285)
- **作者：** YLChen-007 | **状态：** OPEN | **评论：** 0 | **👍：** 0
- **摘要：** TinyAGI `<= 0.0.20` 允许任何能访问 HTTP 管理 API 的客户端，将某个 agent 的 `prompt_file` 设置为任意可读的本地文件路径，从而将文件内容注入到发往 LLM provider 的 prompt 中。

**分析：** 这是一个典型的 **IDOR / 未认证敏感操作** 漏洞。攻击者无需认证即可通过管理 API 修改 `prompt_file` 配置，读取服务器上的任意本地文件（如 `/etc/passwd`、环境变量文件、API 密钥等），并将内容外泄至第三方 LLM provider。该漏洞同时涉及**本地文件包含（LFI）** 和**数据外泄**两个攻击面，CVSS 评分预估在 **High~Critical** 区间。Issue 目前尚无维护者响应，考虑到漏洞细节已完全公开，建议尽快发布安全公告和补丁版本。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---------|-------|------|--------|
| 🔴 **Critical** | [#285](https://github.com/TinyAGI/tinyagi/issues/285) | 未认证 `prompt_file` 更新导致任意本地文件读取 | ❌ 暂无 |

**当前无其他 Bug 报告。** Issue #285 是唯一需要紧急处理的稳定性/安全问题。

---

## 6. 功能请求与路线图信号

**今日无新功能请求提交。** 结合 Issue #285 的安全漏洞判断，下一版本（`0.0.21` 或安全热修复版本）的优先事项应包括：

1. **HTTP 管理 API 的认证与授权机制** — 对所有敏感配置变更操作增加身份验证
2. **`prompt_file` 路径校验** — 限制可配置的文件路径范围，防止目录遍历
3. **安全审计** — 对管理 API 的其他端点进行类似的安全审查

---

## 7. 用户反馈摘要

今日 Issue 评论数为 0，无直接用户反馈可供提炼。从 Issue #285 的报告内容来看，安全研究员（YLChen-007）对 TinyClaw 的攻击面进行了系统性分析，反映出项目在**安全设计层面存在明显短板**，尤其是管理 API 缺乏基本的认证保护。

---

## 8. 待处理积压

| Issue | 标题 | 状态 | 建议 |
|-------|------|------|------|
| [#285](https://github.com/TinyAGI/tinyagi/issues/285) | [Security] Unauthenticated `prompt_file` update allows arbitrary local file read | OPEN, 0 评论 | ⚠️ **需立即响应** — 安全漏洞已公开，建议 24 小时内确认并给出修复计划 |

**项目健康度评估：** 🟡 **需关注** — 日常活跃度低尚可接受（小型开源项目常见），但安全漏洞的零响应状态是主要风险信号。建议维护者建立安全披露流程（如 SECURITY.md），并考虑设置漏洞响应 SLA。

---

*日报由 OWL 自动生成 | 数据截止：2026-06-21*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-21

---

## 1. 今日速览

Moltis 今日整体活跃度**极低**，处于典型的维护期平静状态。过去 24 小时内无新 Issue 报告，无新版本发布，仅有 2 个由 dependabot 自动发起的依赖更新 PR，其中 1 个已关闭、1 个待合并。项目当前无社区讨论热点，无 Bug 暴露，无功能请求涌入。整体健康度良好，但社区参与度趋近于零，属于"低噪声、低风险"的稳态。

---

## 2. 版本发布

> 无新版本发布，本节省略。

---

## 3. 项目进展

今日仅有依赖维护类 PR 活动，无功能性合并：

| PR | 状态 | 说明 |
|---|---|---|
| **#1134** — chore(deps): bump npm_and_yarn group across 2 directories | 🟡 OPEN | 同时更新 `/docs` 目录下的 `astro`（6.3.3 → 6.4.8）和 `/website` 目录下的 `undici`。覆盖范围比 #1133 更广，可能是 #1133 被关闭的原因（被 #1134 取代）。 |
| **#1133** — chore(deps): bump astro from 6.3.3 to 6.4.8 in /docs | 🔴 CLOSED | 仅更新 `/docs` 的 `astro`，已被范围更大的 #1134 替代而关闭。 |

**分析：** #1133 的关闭与 #1134 的开启几乎同时发生，推测是 dependabot 自动将单目录更新合并为跨目录批量更新。项目在文档站点的构建依赖（Astro 框架）上保持跟进，属于常规技术债务维护，无功能性推进。

---

## 4. 社区热点

> 今日无活跃讨论。过去 24 小时内 Issues 更新为 0，PR 评论数为 undefined（无实质讨论），👍 反应均为 0。社区处于静默状态。

---

## 5. Bug 与稳定性

> 今日无新 Bug 报告、崩溃或回归问题。项目稳定性无异常信号。

---

## 6. 功能请求与路线图信号

> 今日无新功能请求 Issue。从现有 PR 来看，项目当前路线图信号集中在**依赖维护**层面，无新功能开发或架构变更的迹象。建议关注 Astro 6.4.x 的新特性（如 #1134 所跟进的版本跳跃），评估是否有值得利用的文档构建改进。

---

## 7. 用户反馈摘要

> 今日无用户反馈数据。Issues 和 PR 评论均为空，无法提炼用户痛点或使用场景。

---

## 8. 待处理积压

当前唯一待处理的 PR：

- **#1134** — [chore(deps): bump npm_and_yarn group across 2 directories](https://github.com/moltis-org/moltis/pull/1134)
  - 状态：OPEN，创建于 2026-06-20
  - 建议：此为低风险依赖更新 PR，建议维护者尽快 review 并合并，避免依赖版本滞后累积。由于同时涉及两个目录的变更，建议确认 CI 通过后合并。

> ⚠️ 注意：由于本次日报数据仅覆盖过去 24 小时，无法判断是否存在长期未响应的历史 Issue/PR。建议维护者定期运行积压清理（backlog grooming），对超过 30 天无活动的 Issue 进行关闭或标记。

---

**总结：** Moltis 今日处于低活跃维护状态，项目健康但社区冷清。唯一的待办事项是合并 #1134 依赖更新 PR。建议维护者关注社区参与度趋势，适时通过 Roadmap 讨论或 Good First Issue 标签吸引贡献者。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-21

---

## 1. 今日速览

CoPaw 今日活跃度**较高**，共产生 6 条 Issue 更新和 9 条 PR 更新，无新版本发布。社区贡献者参与度显著，多个首次贡献者（first-time-contributor）提交了 PR，涵盖上下文管理、工具安全、内存架构迁移等核心模块。Bug 报告集中在 API 兼容性和消息处理可靠性方面，其中 2 个 Bug 在当日即被关闭（含重复提交）。整体项目健康度良好，维护节奏稳定。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 说明 |
|---|---|
| **#5128** · [group langfuse observations by agent loop](https://github.com/agentscope-ai/CoPaw/pull/5128) | **已合并**。将一次完整的 Agent ReAct 循环聚合为单个 Langfuse trace，解决了之前每个 LLM 调用产生独立 trace、导致一次对话轮次在观测面板中显示为多条断链的问题。提升了可观测性体验。 |

### 活跃的重要 PR（待合并）

| PR | 方向 | 说明 |
|---|---|---|
| **#5349** · [feat(memory): migrate memory runtime to ReMe4](https://github.com/agentscope-ai/CoPaw/pull/5349) | 架构升级 | 将记忆栈从旧版 `reme-ai` / `ReMeLight` 迁移至 ReMe4 应用框架（`reme[core]==0.4.0.0`），保留 `ReMeLightMemoryManager` 类名和 `remelight` 注册表键以向后兼容。**标记为 WIP**，尚未就绪。 |
| **#5321** · [feat(context): scroll context manager](https://github.com/agentscope-ai/CoPaw/pull/5321) | 新功能 | 新增 **scroll** 上下文管理策略——基于检索驱动的历史压缩替代方案，附带 REPL 召回能力；同时修复了非默认 Agent 无法加载自身 context strategy 的配置解析 Bug。**已进入 Review 阶段**。 |
| **#5348** · [feat(runner): freeze env_context date per session](https://github.com/agentscope-ai/CoPaw/pull/5348) | 性能优化 | 将 System Prompt 中的 `Current date` 在会话级别冻结，避免跨午夜时前缀变化导致 KV Cache 全部失效、token 重算的问题。 |
| **#5347** · [fix(crons): drop invalid jobs.json entries on startup](https://github.com/agentscope-ai/CoPaw/pull/5347) | 稳定性 | 在 workspace 启动时运行 `migrate_invalid_jobs()`，校验并清除 `jobs.json` 中的无效条目（在 `cron_manager` 加载之前），是 #4835 的根因修复方案。 |
| **#5341** · [fix(tools): constrain file tools to agent workspace](https://github.com/agentscope-ai/CoPaw/pull/5341) | 安全 | 修复内置文件工具（`read_file` / `write_file` / `edit_file` / `append_file`）未将路径约束至配置 workspace 的安全漏洞——绝对路径原样返回、相对路径未做规范化，存在路径穿越风险。 |
| **#5339** · [fix(providers): use plain string content for check_model_connection](https://github.com/agentscope-ai/CoPaw/pull/5339) | 兼容性 | 修复 #5330：`OpenAIProvider.check_model_connection` 发送 chat message content 为数组格式导致 Zhipu AI 提供商所有模型连接测试失败的问题，改为纯字符串格式。 |
| **#5340** · [fix(model_factory): switch formatter drop detection from blacklist to whitelist](https://github.com/agentscope-ai/CoPaw/pull/5340) | 稳定性 | 修复用户点击停止按钮中断 Agent 生成后，AgentScope `ReActAgent._reasoning` 在 `finally` 块中写入空消息（`content=[]`），导致下一轮 formatter 黑名单逻辑误判空消息存活而引发的异常。 |

---

## 4. 社区热点

### Issue #5208 · [Assistant message count mismatch with reasoning blocks](https://github.com/agentscope-ai/CoPaw/issues/5208)
- **状态**：已关闭 | **评论**：6 条（今日最多）
- **热度分析**：当模型提供商（如 LongCat-2.0-Preview）返回 `type: "reasoning"` 而非 `type: "thinking"` 的推理块时，消息计数不匹配导致 `reasoning_content` 注入被跳过。6 条评论的讨论量表明这是一个影响多模型兼容性的核心问题，社区关注度高。

### Issue #5250 · [Cron scheduled tasks interrupt main chat conversation](https://github.com/agentscope-ai/CoPaw/issues/5250)
- **状态**：已关闭 | **评论**：2 条
- **热度分析**：Cron 任务触发时将任务描述作为用户消息注入当前聊天流，Agent 误认为是新指令而中断当前工作。这揭示了调度系统与对话流之间的隔离设计缺陷。

### Issue #5345 · [Custom OpenAI-compatible providers don't support function calling](https://github.com/agentscope-ai/CoPaw/issues/5345)
- **状态**：新开 | **评论**：1 条
- **热度分析**：OMLX 实现了完整的 OpenAI tools API，在 Reasonix 上验证正常，但在 CoPaw 中添加为自定义提供商后模型只返回文本不调用工具。对比 Ollama（原生支持）工作正常，说明 CoPaw 对自定义 OpenAI 兼容提供商的 function calling 路径存在特殊处理缺失。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 **高** | [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344) / [#5343](https://github.com/agentscope-ai/CoPaw/issues/5343) | `/api/console/chat` 在 Agent 忙碌时返回 HTTP 200 但**静默丢弃消息**——用户以为发送成功，消息实际从未到达 Agent。#5343 已关闭（可能为重复提交），#5344 仍开放。 | ❌ 暂无 |
| 🔴 **高** | [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) | 工具结果大小仅靠 `post_acting` hook 裁剪，当 LLM 调用失败（如 502）时 hook 被跳过，工具结果在上下文中无界累积，形成级联故障。 | ❌ 暂无（但 Issue 本身已提出 defense-in-depth 方案） |
| 🟡 **中** | [#5345](https://github.com/agentscope-ai/CoPaw/issues/5345) | 自定义 OpenAI 兼容提供商（OMLX）不支持 function calling，模型仅返回文本。 | ❌ 暂无 |
| 🟡 **中** | [#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) | 模型返回 `reasoning` 类型块时消息计数不匹配，reasoning_content 注入被跳过。 | ✅ 已关闭（应有修复） |
| 🟢 **低** | [#5250](https://github.com/agentscope-ai/CoPaw/issues/5250) | Cron 任务注入打断主对话流。 | ✅ 已关闭 |

**特别关注**：#5344（静默丢消息）和 #5342（上下文爆炸）是尚未修复的高严重度问题，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

| 方向 | Issue/PR | 信号强度 | 分析 |
|---|---|---|---|
| **上下文管理策略扩展** | [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) PR (scroll context manager) | ⭐⭐⭐⭐⭐ | 已进入 Review，是最有可能在下一版本合入的重大新功能。提供检索驱动的历史压缩替代方案。 |
| **内存架构升级** | [#5349](https://github.com/agentscope-ai/CoPaw/pull/5349) PR (ReMe4 迁移) | ⭐⭐⭐⭐ | WIP 状态，但方向明确——从旧版 ReMeLight 迁移至 ReMe4 框架，属于架构级升级。 |
| **工具执行安全** | [#5341](https://github.com/agentscope-ai/CoPaw/pull/5341) PR (file tools workspace 约束) | ⭐⭐⭐⭐ | 安全类修复，优先级高，首次贡献者提交，需维护者审核。 |
| **工具结果大小硬限制** | [#5342](https://github.com/agentscope-ai/CoPaw/issues/5342) Issue | ⭐⭐⭐ | 用户主动提出在 execution layer 添加硬上限作为 defense-in-depth，与 #5341 的安全方向一致。 |
| **KV Cache 优化** | [#5348](https://github.com/agentscope-ai/CoPaw/pull/5348) PR (freeze env_context date) | ⭐⭐⭐ | 性能优化，解决跨午夜 KV Cache 失效问题，首次贡献者提交。 |
| **Cron 系统健壮性** | [#5347](https://github.com/agentscope-ai/CoPaw/pull/5347) PR (jobs.json migration) | ⭐⭐⭐ | 根因修复 #4835，启动时清理无效 cron 条目。 |

**判断**：下一版本的主题可能围绕 **上下文管理**（scroll 策略）、**安全加固**（文件工具约束 + 工具结果限制）和 **可观测性改进**（Langfuse 已合入）展开。

---

## 7. 用户反馈摘要

**真实痛点提炼：**

1. **多模型兼容性不足**：用户在使用非标准 OpenAI 兼容 API（LongCat、OMLX、Zhipu AI）时频繁遭遇功能降级——reasoning 块类型不匹配（#5208）、function calling 不生效（#5330/#5339）、连接测试失败。用户期望"自定义提供商也能获得与原生支持相同的完整能力"。

2. **消息可靠性存疑**：#5344 暴露了一个严重的用户体验问题——API 返回 200 但消息被静默丢弃，用户无法感知失败。这动摇了用户对系统可靠性的信任。

3. **调度与对话隔离缺失**：#5250 反映用户在实际使用中，Cron 任务与主对话流互相干扰，说明当前架构未将后台调度与前台对话充分隔离。

4. **上下文爆炸风险**：#5342 的用户描述了 LLM 502 错误导致工具结果无界累积的级联故障模式，说明现有 `post_acting` hook 单点防护不够健壮。

5. **安全边界模糊**：#5341 揭示的文件工具路径穿越风险表明，用户在多 Agent 工作区场景下期望有严格的沙箱边界。

**满意点**：Langfuse 可观测性改进（#5128 已合入）表明社区对调试和观测能力的增强方向持肯定态度。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，提醒维护者关注：

| 编号 | 类型 | 创建日期 | 状态 | 说明 |
|---|---|---|---|---|
| **#4835** | Issue | 较早 | 开放中 | Cron jobs.json 无效条目问题，#5347 PR 已提出修复方案但尚未合入。 |
| **#5040** | Issue | 较早 | 开放中 | 与 #4835 相关的讨论，讨论了在运行时容忍 vs 根因清理之间的方案选择。 |
| **#5330** | Issue | 较早 | 开放中 | Zhipu AI 提供商连接测试失败，#5339 PR 已提出修复但尚未合入。 |
| **#5344** | Issue | 2026-06-20 | 开放中 | 静默丢消息问题，**无 PR**，需优先处理。 |
| **#5342** | Issue | 2026-06-20 | 开放中 | 工具结果大小无硬限制，**无 PR**，用户已提出方案建议。 |
| **#5345** | Issue | 2026-06-20 | 开放中 | 自定义提供商 function calling 不支持，**无 PR**。 |

**建议**：
- #5344 和 #5342 为高严重度且无修复 PR，建议维护者评估后尽快分配处理。
- #5339、#5347、#5341 均为首次贡献者提交的有效修复 PR，建议加速 Review 流程以激励社区贡献。

---

*数据来源：agentscope-ai/CoPaw GitHub 仓库 | 统计周期：2026-06-20 至 2026-06-21 | 生成时间：2026-06-21*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-21

---

## 1. 今日速览

ZeroClaw 今日活跃度极高，Issues 与 PR 各录得 50 条更新，社区参与度持续处于高位。Issues 以新开/活跃为主（44 条），仅 6 条关闭，说明新问题涌入速度超过解决速度，积压仍在增长。PR 端有 10 条已合并/关闭，40 条待合并，合并率约 20%，表明审查队列存在一定瓶颈。无新版本发布，项目仍处于 v0.8.x → v0.9.0 的密集开发周期中。整体来看，项目处于**高活跃、高吞吐但积压上升**的状态，维护者面临较大的 review 与 triage 压力。

---

## 2. 版本发布

**无新版本发布。**

当前开发主线聚焦 v0.8.2（skills 平台）和 v0.9.0（认证/安全/网关重构），多个 tracker issue 处于活跃状态。

---

## 3. 项目进展

今日合并/关闭的 PR 共 10 条，以下为其中最重要的 3 条：

| PR | 状态 | 说明 |
|---|---|---|
| **#7932** [CLOSED] fix(docker): correct Node 24 digest pins | ✅ 合并 | 修复 Docker 镜像中 Node 24 摘要 pinning 偏差，确保 Debian 与源码 Dockerfile 的 web-node 阶段保持一致，消除构建不确定性。 |
| **#8036** [CLOSED] test(runtime): pin system prompt in cache-hit test to kill date flake | ✅ 合并 | 修复因系统提示中嵌入 `Local::now()` 导致的缓存命中测试偶发失败，提升 CI 稳定性。 |
| **#7616** [CLOSED] fix(providers): strip assistant reasoning on outbound replay for Groq | ✅ 合并 | 修复 Groq OpenAI 兼容端点拒绝 `reasoning_content` 字段的问题，推理模型（如 gpt-oss-120b）经 Groq 路由时不再因回放历史中的 reasoning 字段而报错。 |

**推进方向小结：**
- **Docker/CI 基础设施**持续加固（digest pinning、flake 修复）。
- **多 provider 兼容性**逐步改善（Groq、Xiaomi mimo 系列等）。
- 大量开放 PR（40 条）集中在安全认证（#8063）、可观测性（#8065, #8066）、运行时稳定性（#8014, #8048）和通道功能（#8025, #7019），显示项目正并行推进多条关键路径。

---

## 4. 社区热点

以下为今日评论数最多、讨论最活跃的 Issues：

### 🏆 #5849 — [Feature]: Dream Mode — Periodic Memory Consolidation & Reflective Learning
- **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/5849
- **评论：** 18 条 | 状态：OPEN / in-progress / accepted
- **分析：** 这是今日讨论最热烈的 issue。用户提议在 ZeroClaw 空闲期间引入"梦境模式"——一个轻量级后台进程，用于整合每日记忆、反思近期交互并更新长期知识结构。18 条评论表明社区对**自主记忆管理**和**反思学习能力**有强烈诉求，这直接关系到 ZeroClaw 作为"个人 AI 助手"的核心价值——能否越用越懂用户。该功能被标记为 high risk + p2，且已处于 accepted/in-progress 状态，说明维护者已认可方向，但实现复杂度较高。

### 🥈 #5862 — [Bug]: zeroclaw does not know it can add cron
- **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/5862
- **评论：** 13 条 | 状态：OPEN / blocked / needs-author-action
- **分析：** 用户反馈当要求 ZeroClaw 设置定时任务时，Agent 声称没有此工具，但实际上 `zeroclaw cron` 命令是存在的。这暴露了**工具发现/自描述机制**的缺陷——Agent 无法感知自身可用的 CLI 工具。13 条评论中社区成员在积极复现和定位根因，但目前处于 blocked 状态，需要原作者提供更多信息。

### 🥉 #6808 — RFC: Work Lanes, Board Automation, and Label Cleanup
- **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/6808
- **评论：** 11 条 | 状态：OPEN / accepted / rollout in progress
- **分析：** 这是一项治理 RFC，旨在通过工作流自动化和标签体系重构来降低维护者手动路由工作的负担。11 条评论集中在实施细节讨论上，表明社区对**项目治理效率**的关注。该 RFC 已进入 accepted 状态且正在 rollout 中。

### #7141 — [Feature]: OIDC Authentication Provider support
- **链接：** https://github.com/zeroclaw-labs/zeroclaw/issues/7141
- **评论：** 6 条 | 状态：OPEN / accepted / p1
- **分析：** OIDC 认证支持是 v0.9.0 的旗舰安全特性，作为 umbrella tracking issue 统筹多个子 PR。今日有子 PR #8063（Principal type + AuthProvider seam）和子 issue #8076（local username/password AuthProvider）同时活跃，显示该功能正在**分层落地**。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃的关键 Bug：

### 🔴 S0/S1 — 工作流阻断 / 数据丢失

| Issue | 严重程度 | 描述 | Fix PR |
|---|---|---|---|
| **#6672** [reasoning_content not passed in tool-call loops] | S0 — 数据损失/安全风险 | Xiaomi mimo-v2.5 系列模型在 thinking mode 下，首轮 `reasoning_content` 未在后续轮次中传递，导致推理链断裂 | ❌ 无 |
| **#6558** [providers error — 405 Method Not Allowed] | S0 — 数据损失/安全风险 | 自定义 provider（通义千问）返回 405 后标记为 non_retryable，导致所有 provider 快速失败 | ❌ 无 |
| **#6036** [infinite tool-call loop on Termux/Android] | S1 — 工作流阻断 | Android/Termux 环境下 Agent 进入无限工具调用循环，重复输出同一条消息 | ✅ 已关闭（今日） |
| **#5883** [zeroclaw service start fails on macOS] | S1 — 工作流阻断 | macOS 上服务启动失败 | ✅ 已关闭（今日） |
| **#5808** [32k context budget exceeded on iteration 1] | S1 — 工作流阻断 | 默认 32k 上下文在首轮即被系统提示 + 工具定义超出 ~3.3x，导致持续预裁剪 | ❌ 无（in-progress） |

### 🟡 S2 — 行为降级

| Issue | 描述 | Fix PR |
|---|---|---|
| **#5844** [Too much emphasis on memory] | 系统提示过度优先记忆而非当前提示，尤其在 cron job 中表现明显 | ❌ 无 |
| **#6517** [Context Overflow Causes Hallucination / Topic Drift] | 长对话填满上下文后出现幻觉/话题漂移 | ❌ 无 |
| **#8047** [ReadSkillTool looks in `data_dir` but skills live in agent workspace] | 紧凑技能模式下，ReadSkillTool 在错误目录查找技能文件 | ❌ 无（今日新报） |

### 🟢 已修复/关闭

- **#6036** — Android 无限循环 → 已关闭
- **#5883** — macOS 服务启动失败 → 已关闭
- **#6243** — Streaming decode error 挂起 → 已关闭
- **#5686** — QQ 消息命令文档缺失 → 已关闭
- **#7877** — external coding tools 相对路径解析错误 → 已关闭
- **#7795** — Telegram static_voice_peers SSOT 违规 → 已关闭

**稳定性趋势：** 今日关闭了 6 个历史 bug（含多个 S1 级别），但同时新增了 #8047 等 S2 问题。S0 级别的 provider 兼容性问题（#6672、#6558）仍处于无 fix PR 状态，需优先关注。

---

## 6. 功能请求与路线图信号

结合活跃 issue 和 PR 判断，以下功能最可能被纳入近期版本：

### v0.8.2 — Skills 平台（高置信度）
- **Tracker #7852** 正在协调 v0.8.2 的技能平台工作。
- **#7950** — Docker 镜像内置文档，让 Agent 能回答 ZeroClaw 自身功能问题（p3，accepted）。
- **#8047** — ReadSkillTool 路径修复，直接关联 skills 平台稳定性。

### v0.9.0 — 认证与安全（高置信度）
- **#7141** (OIDC) + **#7432** (v0.9.0 tracker) 构成安全重构双轨。
- **PR #8063** — Principal type + AuthProvider seam 今日开放，是 #7141 的第一个 DoD 子项落地。
- **Issue #8076** — 本地用户名/密码 AuthProvider（IdP-less 浏览器登录），作为 #7141 子项今日创建。

### v0.9.0+ — 可观测性增强（中高置信度）
- **RFC #7232** — 结构化可观测性增强（Rich Events + OTel Trace Correlation + Bridge Refactoring）。
- **PR #8065** — trace_id 关联 + 每次调用 cost_usd 记录。
- **PR #8066** — LLM 请求载荷可选捕获（默认关闭）。
- **Issue #6641** — Turn-level OTel trace correlation。

### 长期探索 — Dream Mode（中置信度）
- **#5849** — Dream Mode 已获得 18 条评论和社区高度关注，标记为 in-progress/accepted，但实现复杂度高，可能跨越多个版本。

### 通道扩展（持续滚动）
- **#7531** — QQ/钉钉/微信/飞流流式卡片消息。
- **#7944** — 语音卫星设备（ESP32/智能手机/PWA）+ 审批按钮。
- **#6055** — Slack 线程上下文回填。
- **PR #8025** — 企业微信主动消息 + 附件消息。

---

## 7. 用户反馈摘要

从今日 Issues 评论和描述中提炼的真实用户痛点：

### 😤 不满意 / 痛点

1. **Agent 工具自省能力不足**（#5862）：用户期望 Agent 能自动发现并使用 `zeroclaw cron` 等内置工具，而非声称"没有此功能"。这反映了用户对**自主 Agent**的期望与当前实现之间的落差。

2. **上下文管理是最大痛点**：多个 issue（#5808、#5844、#6517）集中反映上下文预算规划不合理——要么首轮就超限，要么记忆权重过高挤占当前对话空间，要么长对话溢出导致幻觉。这是 ZeroClaw 作为个人助手最核心的体验问题。

3. **Provider 兼容性碎片化**（#6672、#6558、#6243）：Xiaomi mimo、通义千问、Groq 等 OpenAI 兼容 provider 各有不同的行为差异，用户在实际部署中频繁遭遇"能用但不完全能用"的困境。

4. **Android/Termux 支持体验差**（#6036）：移动端用户遭遇无限循环，虽已关闭但暴露了边缘平台测试覆盖不足。

5. **Docker 镜像缺乏自文档**（#7950）：Agent 无法回答关于 ZeroClaw 自身的问题，因为 Docker 镜像不包含文档——这是一个"鸡生蛋"问题。

### ✅ 满意 / 正向信号

1. **RFC 治理流程获认可**（#6808、#7232）：社区成员积极参与 RFC 讨论，说明 ZeroClaw 的开放治理模式有效。

2. **安全重构方向受支持**（#7141、#7432）：OIDC 认证和 Principal 抽象获得社区积极响应，子 issue/PR 自发涌现。

3. **Dream Mode 概念引发共鸣**（#5849）：18 条评论的高度参与表明社区对 ZeroClaw 向"有记忆、会反思的伴侣"方向演进充满期待。

---

## 8. 待处理积压

以下为长期未响应或处于阻塞状态的重要 Issue/PR，提醒维护者关注：

### 🔴 高优先级积压（P0/P1，超过 30 天无实质进展）

| Issue | 创建日期 | 状态 | 问题 |
|---|---|---|---|
| **#5808** [32k context exceeded on iteration 1] | 2026-04-16 | in-progress / accepted | 已标记 in-progress 但超过 60 天，上下文预算问题影响所有用户 |
| **#6037** [Cron jobs launched repeatedly while running] | 2026-04-23 | accepted / p1 | Cron 调度器缺乏运行中锁，可导致同一任务并发执行数十次 |
| **#6672** [reasoning_content not passed in tool-call loops] | 2026-05-15 | blocked / needs-author-action | S0 级别，Xiaomi 模型用户核心工作流受阻 |

### 🟡 中优先级积压（P2，社区关注度高但无 fix PR）

| Issue | 创建日期 | 评论数 | 问题 |
|---|---|---|---|
| **#5844** [Too much emphasis on memory] | 2026-04-17 | 6 | 记忆与当前提示的权重平衡问题 |
| **#6517** [Context Overflow Causes Hallucination] | 2026-05-07 | 2 | 长对话幻觉/话题漂移 |
| **#5862** [zeroclaw does not know it can add cron] | 2026-04-18 | 13 | 工具发现机制缺陷，blocked 需作者补充信息 |

### 🔵 PR 审查积压（开放超过 7 天的重要 PR）

| PR | 创建日期 | 说明 |
|---|---|---|
| **#6893** [multi-database session backends] | 2026-05-24 | XL 规模，添加 Postgres/Oracle/MySQL/Db2 会话后端，超过 25 天未合并 |
| **#7019** [Telegram TTS to Opus + STT provider] | 2026-05-30 | L 规模，Telegram 语音通道修复，超过 20 天 |
| **#7345** [gate path-listing tool results from vision routing] | 2026-06-07 | 修复文件系统搜索结果被错误路由到视觉模型的问题 |

### 💡 建议

1. **#5808 和 #6037** 均为 P1 且已 accepted 超过 30 天，建议明确 owner 和交付时间线。
2. **#6672** 处于 blocked/needs-author-action 状态，若作者长期未响应，考虑由维护者直接复现并解除阻塞。
3. **#6893**（多数据库后端）规模大、涉及面广，建议拆解为更小的独立 PR 以加速审查。
4. 当前 40 条待合并 PR 中，建议优先审查安全认证相关 PR（#8063）和可观测性 PR（#8065、#8066），因其为 v0.9.0 关键路径。

---

*日报生成时间：2026-06-21 | 数据来源：GitHub API | 分析引擎：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*