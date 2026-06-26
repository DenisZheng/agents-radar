# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-26 00:40 UTC

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

# OpenClaw 项目日报 — 2026-06-26

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，Issues 与 PR 更新量均达到 500 条（ Issues 新开/活跃 476 条、已关闭 24 条；PR 待合并 412 条、已合并/关闭 88 条），反映出社区贡献持续涌入且项目迭代节奏紧凑。**无新版本发布**，当前主分支处于高频集成阶段。安全加固、内存管理、多会话架构、Discord/Codex 集成以及工作区文件管理是本周核心攻关方向。项目健康度总体良好，但需关注内存 OOM 类长期 Issue 的修复进度。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 已关闭/合并的重要 PR

| PR | 状态 | 概述 |
|---|---|---|
| [#94411](https://github.com/openclaw/openclaw/pull/94411) | CLOSED | 修复沙箱 skill 同步回退路径，改为从配置解析 workspace，而非依赖硬编码默认值 |
| [#92520](https://github.com/openclaw/openclaw/pull/92520) | CLOSED | 修复无本地 OpenAI profile 时 Codex `/status` synthetic usage 字段丢失的问题 |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | CLOSED | 新增 PR review 自动修复流水线（~785 行 Python）及 Windows 后台守护进程 |
| [#96143](https://github.com/openclaw/openclaw/pull/96143) | CLOSED | 修复插件元数据临时失败后误报 npm spec 错误的回归问题 |

### 待合并关键 PR（Ready for Review）

| PR | 规模 | 优先级 | 概述 |
|---|---|---|---|
| [#96876](https://github.com/openclaw/openclaw/pull/96876) | L | — | 将本地实时语音路由接入主 Agent 循环，支持工具、子 Agent 和文件写入 |
| [#96173](https://github.com/openclaw/openclaw/pull/96173) | L | P3 | 新增本地实时语音/听写扩展（Whisper STT + Ollama + Kokoro TTS） |
| [#96106](https://github.com/openclaw/openclaw/pull/96106) | XL | P1 | 修复 Anthropic 推理过程和 pre-tool 评论在 Discord 上的展示 |
| [#95996](https://github.com/openclaw/openclaw/pull/95996) | XL | P1 | 将 yielded-parent 语义提升为共享生命周期分类器，修复子 Agent 完成后父会话卡住的问题 |
| [#95604](https://github.com/openclaw/openclaw/pull/95604) | XL | P2 | Discord 子 Agent 进度反馈：计数反应、失败标记、typing keepalive |
| [#93265](https://github.com/openclaw/openclaw/pull/93265) | XL | P2 | 入门引导流程优化：智能最短路径选择 + Agent 辅助配置 |
| [#62417](https://github.com/openclaw/openclaw/pull/62417) | XL | P2 | 为 Agent workspace 增加 Web UI 文件管理（list/edit/upload） |
| [#91000](https://github.com/openclaw/openclaw/pull/91000) | M | P2 | 保留 dispatch 拒绝后的 abort 终止状态，避免错误结果被覆盖 |
| [#90986](https://github.com/openclaw/openclaw/pull/90986) | L | P2 | 支持配置的 workspace 别名，解决 symlink 共享内容场景 |
| [#90933](https://github.com/openclaw/openclaw/pull/90933) | L | P2 | CLI 会话通道繁忙退出时向用户输出可操作的错误信息 |
| [#90923](https://github.com/openclaw/openclaw/pull/90923) | M | P1 | macOS 启动守护进程：将 LaunchAgent plist 写入启动卷，修复外置 APFS 卷无法安装的问题 |
| [#96875](https://github.com/openclaw/openclaw/pull/96875) | S | P2 | Vydra：限制控制响应读取，避免 OOM |
| [#96874](https://github.com/openclaw/openclaw/pull/96874) | S | P2 | TTS：限制音频响应读取（16 MiB cap），防止 Seed Speech 场景 OOM |
| [#96776](https://github.com/openclaw/openclaw/pull/96776) | XS | P2 | 图像生成：替换无界 `response.json()` 为带上限读取，修复 OOM 漏洞 |
| [#96790](https://github.com/openclaw/openclaw/pull/96790) | S | P1 | 媒体理解：插件缺失时输出可操作的 install hint |
| [#96516](https://github.com/openclaw/openclaw/pull/96516) | XS | P2 | Cron：拒绝无效的 `no-output-timeout-seconds` 参数 |
| [#96818](https://github.com/openclaw/openclaw/pull/96818) | S | P1 | Codex：等待原生工具完成，防止 completion-idle watchdog 误终止 |
| [#56806](https://github.com/openclaw/openclaw/pull/56806) | S | P2 | Exec 工具：暴露 `knownLongFlags` 配置字段 |

**整体判断**：本周合并重点集中在**安全加固**（多处 OOM 边界限制）、**Discord 体验**、**Codex 集成稳定性**和**语音/听写新功能**四条主线。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| # | Issue | 评论数 | 🔥 反应 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#48788](https://github.com/openclaw/openclaw/issues/48788) — 集中式多编码文件名工具 | 18 | 👍1 | 飞书中文编码修复后，用户要求扩展为通用多编码处理架构（Shift-JIS/EUC-KR/GB18030） |
| 2 | [#63918](https://github.com/openclaw/openclaw/issues/63918) — Cron agentTurn 向 GPT-5-nano 发送不支持的 thinking=none | 17 | 👍1 | API 参数兼容性问题，影响所有使用 GPT-5-nano 的定时任务用户 |
| 3 | [#58450](https://github.com/openclaw/openclaw/issues/58450) — Agent 承诺后续跟进但不执行 | 15 | 👍3 | Agent 可靠性问题：用户收到"稍后会跟进"但实际无后台任务被创建 |
| 4 | [#50090](https://github.com/openclaw/openclaw/issues/50090) — ClawHub 技能生态建设 | 15 | 👍2 | 社区对技能市场现状不满，指出文档与实际体验差距大 |
| 5 | [#45740](https://github.com/openclaw/openclaw/issues/45740) — gh-issues 技能注入未过滤内容到 sub-agent prompt | 14 | 👍1 | 安全漏洞：issue body 直接拼入 prompt 无任何安全隔离 |
| 6 | [#53628](https://github.com/openclaw/openclaw/issues/53628) — XDG_CONFIG_HOME 在技能安装时未被解析 | 13 | 👍1 | Docker 环境下路径变量失效 |
| 7 | [#57326](https://github.com/openclaw/openclaw/issues/57326) — CLI helper 路径绕过 CLI dispatch | 13 | 👍1 | CLI 后端模型与 API 路径行为不一致 |
| 8 | [#51429](https://github.com/openclaw/openclaw/issues/51429) — 工作区路径被硬编码为 /Users/wangtao | 12 | 👍0 | 严重的基础设施问题：个人开发路径被合并到主分支 |

**分析**：用户最高频的痛点集中在三个方向——①**Agent 行为可信度**（承诺执行但未跟进、幻觉输出、状态不可靠）；②**长期债务清理**（硬编码路径、注入安全、编码处理不彻底）；③**AI 模型兼容性**（新模型参数适配滞后）。

---

## 5. Bug 与稳定性

### 🔴 严重（P0/P1 — 数据丢失/安全/崩溃/回归）

| Issue | 标题 | 影响 | 有 Fix PR? |
|---|---|---|---|
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome extension browser relay 被移除无跨机器替代（+5 👍回归） | 托管服务商/跨机器用户无法使用 | 未明确 |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes 无条件剥离非本地客户端 operator scopes | 后端客户端功能损坏 | 未明确 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 硬编码 /Users/wangtao 作为工作区路径 | 所有用户路径异常 | 未明确 |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI helper 路径绕过 CLI dispatch | 认证提供者/安全状态不一致 | 未明确 |
| [#63918](https://github.com/openclaw/openclaw/issues/63918) | Cron agentTurn 向 GPT-5-nano 发送不支持的 thinking=none | Cron 任务大面积失败 | 未明确 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | gh-issues skill 未过滤直接注入 sub-agent prompt | 安全注入风险 | 未明确 |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | ACP 父会话子 Agent 完成后卡住直到手动刷新 | 会话无响应 | PR #95996 修复中 |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | 内存泄漏 389MB→14.7GB（4 天） | OOM 宕机 | 未明确 |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json 无界增长导致 Gateway OOM | Gateway 宕机 | 未明确 |
| [#58957](https://github.com/openclaw/openclaw/issues/58957) | 模型切换时上下文过大静默失败 | 用户体验差 | 未明确 |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | Cron 工具调用失败时 Agent 幻觉输出 | 信任/安全风险 | 未明确 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 大型参数工具调用触发 "Network connection lost" | 任务失败 | 未明确 |

### 🟡 中等（P2 — 功能异常/行为不符预期）

| Issue | 标题 | 有 Fix PR? |
|---|---|---|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | Content-Disposition 多编码处理不足 | 未明确 |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | Agent 承诺后续跟进但不执行 | 未明确 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | XDG_CONFIG_HOME 未解析 | 未明确 |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | reserveTokensFloor 足够仍反复硬重置 | 未明确 |
| [#50165](https://github.com/openclaw/openclaw/issues/50165) | Subagent 在底层工作完成前显示完成 | 未明确 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp 重连后丢失的消息无法回填 | 未明确 |
| [#52972](https://github.com/openclaw/openclaw/issues/52972) — 成功创建 cron 提醒后误附"未创建提醒"备注 | 未明确 |

### 稳定性总评

当前存在**两个高危内存增长 Issue**（#54155、#55334）均长期未解决，建议进入下一版本必答清单。多个 P1 安全相关 Issue（#53599、#51396、#45740）存在回归风险，需要优先复现和修复。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 路线图信号 | 相关 PR |
|---|---|---|---|
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | 多槽位 Memory 架构（👍3） | 高 — 影响 Agent 核心 | 未明确 |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | 多索引 embedding + 模型感知故障转移 | 高 — 生产可靠性刚需 | 未明确 |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | 敏感数据脱敏（配置文件+日志+UI） | 中 — 企业用户刚需 | 未明确 |
| [#65624](https://github.com/openclaw/openclaw/issues/65624) | Mattermost slash command 使用明文回调 URL（CVSS 7.6-8.6） | 高 — 实际安全漏洞 | 未明确 |
| [#64438](https://github.com/openclaw/openclaw/issues/64438) | 远程 Reranker 端点支持 | 中 — 与远程 embedding 配套 | 未明确 |
| [#52640](https://github.com/openclaw/openclaw/issues/52640)（👍2）| 长运行 channel turn 的持久化任务状态面板 | 中 — PR #95604 部分覆盖 Discord | PR #95604 |
| [#56349](https://github.com/openclaw/openclaw/issues/56349) | 不可绕过的出站消息策略执行（pre-send guarantee） | 中 — 安全合规 | 未明确 |
| [#50199](https://github.com/openclaw/openclaw/issues/50199) | 技能优先级配置 | 低 — 生态治理 | 未明确 |
| [#50739](https://github.com/openclaw/openclaw/issues/50739)（👍2）| 系统事件优先注入/跳过队列模式 | 中 — provider 限流场景需要 | 未明确 |
| [#58818](https://github.com/openclaw/openclaw/issues/58818)（👍2）| 保障最近 N 条原始消息在 compaction 后仍保留在上下文中 | 中高 — 影响长期对话连续性 | 未明确 |
| [#96173](https://github.com/openclaw/openclaw/pull/96173) | 本地实时语音+听写扩展 | 中 — 新功能 PR 已提交 | PR #96173、#96876 |
| [#62417](https://github.com/openclaw/openclaw/pull/62417) | Agent workspace Web UI 文件管理 | 中 — 已提交 PR | PR #62417 |
| [#93265](https://github.com/openclaw/openclaw/pull/93265) | Agent 辅助 onboarding 配置 | 高 — 易用性 + 降低入门门槛 | PR #93265 |

---

## 7. 用户反馈摘要

### 😤 主要痛点

1. **Agent 可信度危机**：多位用户反映 Agent 会在无实际执行的情况下声称"已安排"或"将跟进"（#58450，👍3）、在工具失败时幻觉输出（#49856）、以及在 UI 中提前显示 subagent 完成状态（#50165）。这直接影响用户对 Agent 执行力的信任。

2. **长期运行不稳定**：多份报告确认 Gateway 在 4 天内从 389MB 涨至 14.7GB（#54155），sessions.json 无界增长（#55334），大量过期数据堆积导致 OOM。这对 7×24 运营的生产用户影响严重。

3. **安全顾虑**：Chrome extension 被移除且无跨机器替代（#53599，👍5，最高互动）、gh-issues 技能直接注入未过滤内容到 prompt（#45740）、Mattermost cleartext 回调 token（#65624，CVSS 8.6）、工作区硬编码路径（#51429）——这些安全/隐私问题影响企业用户信心。

4. **模型适配滞后**：GPT-5-nano 的 thinking=none 参数不兼容导致大面积 cron 失败（#63918）；上下文过大时模型切换静默失败（#58957）；node:sqlite 缺少 FTS5 模块导致记忆搜索降級（#62328）。

### ✅ 满意方向

- PR #95604（Discord 子 Agent 进度反馈）因其解决实际使用中的可见性缺失而受到期待。
- PR #93265（Agent 辅助 onboarding）被认为能显著降低新用户入门门槛。
- 多处 OOM 边界限制 PR（#96776、#96874、#96875、#96873）同步提交，反映出贡献者对安全加固的主动关注。
- PR #96173/#96876 本地实时语音方案被视为降低 TTS/STT 成本的好方向。

### 📌 典型使用场景

- 多 channel 企业用户（飞书 + WhatsApp + Telegram + Discord）需要统一编码处理、消息可靠投递、断线重连恢复
- 7×24 自动化用户依赖 cron 任务，对模型兼容性敏感
- 生产环境用户对内存/CPU 稳定性要求极高（Mac Mini 24GB 场景）
- 合规用户要求敏感数据在配置/日志/UI 中全面脱敏

---

## 8. 待处理积压（维护者关注提醒）

以下 Issue 历史悠久、影响面广但缺少明确修复进展：

| Issue | 创建时间 | 评论数 | 状态 | 建议 |
|---|---|---|---|---|
| [#51429](https://github.com/openclaw/openclaw/issues/51429) — 硬编码路径 | 2026-03-21 | 12 | stale/无 fix | 🔴 立即调查合并来源，锁定责任人 |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) — Chrome extension 移除回归 | 2026-03-24 | 6 | OPEN/无 fix（👍5） | 🔴 高优先级——影响托管服务商 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) — 多编码文件名工具 | 2026-03-17 | 18 | OPEN/无 fix（最高评论） | 🟡 需架构决策 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) — gh-issues 注入问题 | 2026-03-14 | 14 | OPEN/无 fix | 🟡 安全审查优先 |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) — Agent 无执行承诺 | 2026-03-31 | 15 | OPEN（👍3） | 🟡 需 Agent 行为保障机制 |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) — Cron 幻觉输出 | 2026-03-18 | 8 | stale/无 fix | 🟡 信任安全 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) — XDG_CONFIG_HOME Docker | 2026-03-24 | 13 | stale/无 fix | 🟡 Docker 用户阻塞 |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) — sessions.json OOM | 2026-03-26 | 10 | OPEN/无 fix | 🔴 生产阻塞 |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) — 内存泄漏 14.7GB | 2026-03-25 | 7 | OPEN/无 fix | 🔴 生产阻塞 |
| [#63918](https://github.com/openclaw/openclaw/issues/63918) — GPT-5-nano cron 400 | 2026-04-09 | 17 | OPEN/无 fix | 🔴 最高评论活跃 Issue |

> **特别提醒**：#51429（硬编码路径）和 #53599（👍5 回归）虽已被标记 stale 但实际影响严重，建议重新打开并升级处理优先级。

---

*本报告基于 2026-06-26 当日 GitHub API 数据自动生成，数据来源：openclaw/openclaw 仓库。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**数据期：2026-06-26 | 分析师：OWL**

---

## 1. 生态全景

2026 年 6 月下旬，个人 AI 助手/自主智能体开源生态处于**高频迭代与架构分化并存**的活跃期。15 个跟踪项目中，10 个在 24 小时内有显著活动，社区贡献总量超过 400 条 Issue + 350 条 PR。安全加固（权限边界、沙箱隔离、供应链签名）已成为全行业共识性优先事项，不再是单一项目的差异化方向。多平台消息投递（Discord/Slack/Telegram/飞书/钉钉/WhatsApp）是各项目的共同基础能力建设重点，而**内存稳定性与 OOM 治理**正在成为 7×24 生产部署的新门槛。技术路线出现明显分化：OpenClaw 和 IronClaw 向"平台级框架"演进，PicoClaw 和 TinyClaw 聚焦嵌入式/轻量化，ZeroClaw 押注 Wasm-first 插件架构，NanoBot 和 CoPaw 则深耕多渠道企业集成。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 | 核心攻关方向 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（活跃476） | 500+（待合并412） | 无 | ★★★★ 良好 | 安全加固、Discord/Codex 集成、语音/听写、内存 OOM |
| **NanoBot** | 22 | 38 | 无 | ★★★★ 良好 | 安全漏洞修复（exec/MCP 权限绕过）、PWA、Windows 服务 |
| **Hermes Agent** | 50 | 50 | 无 | ★★★★ 良好 | 凭证安全、Dashboard 稳定性、Vertex AI Gemini、LSP 内存泄漏 |
| **PicoClaw** | 3 | 19（6已合并） | 无 | ★★★★☆ 优秀 | Evolution token 优化、Matrix 兼容性、libolm→vodozemac 迁移 |
| **NanoClaw** | 1 | 15（11已合并） | 无 | ★★★★☆ 优秀 | 安全加固（路径校验）、Slack 会话修复、容器资源配额 |
| **IronClaw** | 50 | 50 | 无 | ★★★★ 良好 | Capability-policy 四维度体系、Memory 架构、审批闸门一致性 |
| **LobsterAI** | 1 | 9（全部合并） | 无 | ★★★★★ 极佳 | 多模型计划模式、QQ/Discord 频道、子代理轮询 |
| **CoPaw** | 27 | 50 | 无 | ★★★☆ 中等 | AgentScope 2.0 迁移、浏览器进程泄漏、前端稳定性 |
| **ZeroClaw** | 49 | 50（仅1合并） | 无 | ★★★ 需关注 | 供应链签名、Wasm-first 运行时、MCP 孤儿进程泄漏、PR 积压严重 |
| **NullClaw** | 0 | 0 | — | ⚪ 静默 | — |
| **TinyClaw** | 0 | 0 | — | ⚪ 静默 | — |
| **Moltis** | 0 | 0 | — | ⚪ 静默 | — |
| **ZeptoClaw** | 0 | 0 | — | ⚪ 静默 | — |

> **注**：Issues/PR 更新量指 24 小时内活跃（新开+评论更新+关闭）的条目数，非净新增。

---

## 3. OpenClaw 在生态中的定位

### 社区规模优势

OpenClaw 以单日 **500 Issue + 500 PR** 的绝对数量遥遥领先，约为其他活跃项目总和的 2–3 倍。其 Issues 活跃量（476）远超第二名 ZeroClaw（36），反映出最大的用户基数和最广泛的场景覆盖。

### 技术路线差异

| 维度 | OpenClaw | 主要竞品 |
|---|---|---|
| **架构定位** | 全栈平台框架（Gateway + Agent Runtime + Channel Adapters + Workspace） | IronClaw 偏平台、NanoBot 偏渠道网关、ZeroClaw 偏插件运行时 |
| **渠道覆盖** | Discord/Codex/WhatsApp/Telegram/飞书等全渠道 + MCP 协议 | NanoBot 侧重企业 IM（钉钉/飞书/WhatsApp）；Hermes 侧重 Slack/Telegram |
| **Agent 架构** | 主 Agent 循环 + 子 Agent（yielded-parent 语义）+ Cron + Skills | IronClaw 有 Reborn capability-policy；ZeroClaw 有 delegate 模式 |
| **记忆系统** | 文件工作区 + 长期 Issue 讨论中的多槽位 Memory 架构 | IronClaw 有 Memory as Userland Extension（最完整）；Hermes 依赖语义压缩 |
| **安全模型** | 沙箱 skill 同步 + OOM 边界限制 + 路径校验 | NanoBot 有 exec.allowPatterns；ZeroClaw 押注 Wasm 沙箱 |

### 核心优势

1. **生态最完整**：渠道、Agent、工作区、Cron、Skills 全链路自研，不依赖外部编排
2. **社区贡献吞吐最高**：单日 412 待合并 PR 说明贡献者涌入意愿强
3. **问题暴露面最广**：大量真实生产场景反馈（内存 14.7GB OOM、GPT-5-nano 兼容性、Agent 幻觉等）

### 核心短板

1. **Issue 关闭率偏低**：476 条活跃 Issue 中大量长期积压（#51429 硬编码路径、#53599 Chrome 回归、#55334 sessions.json OOM）
2. **安全债务集中**：gh-issues 注入、Chrome extension 移除回归、硬编码路径等问题影响企业信任
3. **Agent 可信度危机**：承诺执行但不跟进、幻觉输出、subagent 状态不可靠等用户反馈值得重视

---

## 4. 共同关注的技术方向

### 方向一：安全加固与权限边界（全项目共识）

| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | gh-issues 技能注入未过滤内容到 sub-agent prompt；Chrome extension 移除无替代方案 |
| **NanoBot** | `exec.allowPatterns` 白名单绕过（4 种变体）+ MCP `enabledTools` deny-all 绕过 |
| **Hermes** | 零知识凭证代理架构提案；恶意插件通过 `--insecure` 标志攻击 Dashboard |
| **NanoClaw** | `send_file` 路径校验可被符号链接绕过 |
| **ZeroClaw** | delegate 绕过父级 tool allowlist（S0）；供应链签名 RFC |
| **IronClaw** | capability-policy 四维度策略体系（admin-shared + per-user auth） |

### 方向二：内存稳定性与 OOM 治理（生产部署门槛）

| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | 内存泄漏 389MB→14.7GB（4天）；sessions.json 无界增长导致 Gateway OOM |
| **Hermes** | LSP 空闲客户端回收器——15 小时积累 27 个 LSP 进程消耗 4GB RAM |
| **PicoClaw** | Evolution 心跳轮询无谓消耗 token（已修复） |
| **CoPaw** | browser_use 反复启停导致 Chrome renderer 进程残留 |

### 方向三：多平台消息投递与渠道集成

| 项目 | 重点渠道 |
|---|---|
| **OpenClaw** | Discord 子 Agent 进度反馈、Codex `/status` 修复 |
| **NanoBot** | 钉钉富文本、Telegram Web、WhatsApp 重连回填 |
| **Hermes** | Slack Block Kit 富文本、Telegram Bot API 10.1、飞书原生表格 |
| **CoPaw** | Slack Socket Mode、钉钉私有部署 |
| **PicoClaw** | Matrix allow_from 白名单、DeltaChat 网关、LINE 频道 |
| **LobsterAI** | QQ + Discord 官方插件预装 |

### 方向四：Agent 可信度与行为保障

| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | Agent 承诺后续跟进但不执行；Cron 工具失败时幻觉输出；subagent 提前显示完成 |
| **NanoBot** | Subagent 在底层工作完成前显示完成 |
| **IronClaw** | 审批闸门行为不一致（拒绝后仍询问、"始终允许"不持久化） |
| **CoPaw** | 对话思考逻辑进入死循环，缺乏中断机制 |

### 方向五：模型兼容性与 Provider 生态

| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | GPT-5-nano thinking=none 参数不兼容导致 Cron 大面积失败；node:sqlite 缺少 FTS5 |
| **Hermes** | Vertex AI Gemini 一等公民支持；GPT-4o-mini 加密内容报错 |
| **CoPaw** | GLM-5.x json_schema 编译错误；MiniMax-M3 媒体缓存错误；OMLX function calling |
| **NanoBot** | Custom Provider 缺乏 thinking 模式支持（火山引擎/豆包） |
| **ZeroClaw** | OpenRouter fallback_models 数组配置不支持 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键词 |
|---|---|---|---|
| **OpenClaw** | 全栈平台，渠道+Agent+工作区+技能市场 | 个人用户 + 小型团队 | TypeScript/Python、Gateway-Worker、yielded-parent 子 Agent |
| **IronClaw** | 企业级多租户 + Reborn 架构 | 企业部署、多用户场景 | Rust、CAS 持久化、Capability-Policy 四维度、Memory as Extension |
| **NanoBot** | 多渠道企业 IM 网关 + WebUI | 企业内部 IM 集成用户 | Python/FastAPI、钉钉/飞书/WhatsApp/Telegram、Dream 逻辑 |
| **Hermes Agent** | 桌面端 + Dashboard + 多 Provider | 个人高级用户、开发者 | Electron/TUI、OAuth 凭证池、LSP 集成、本地遥测 |
| **CoPaw** | AgentScope 框架 + 浏览器自动化 | 企业自动化用户 | Python/AgentScope 2.0、browser_use、Tauri 桌面端 |
| **PicoClaw** | 轻量化 + 嵌入式设备 | IoT/树莓派/低资源场景 | Go、Matrix/Telegram/LINE、Evolution 机制、本地 WebSocket |
| **NanoClaw** | 安全审批 + 容器化部署 | 安全敏感型小团队 | Rust、Slack per-thread、send_file 路径校验、容器资源配额 |
| **ZeroClaw** | Wasm 插件运行时 + 供应链安全 | 平台级开发者 | Rust/Wasm、SLSA 溯源、Goal Mode、SOP daemon 控制平面 |
| **LobsterAI** | 多模型 + 桌面端体验 | 国内个人用户 | Electron、GLM/Qwen 计划模式、QQ/Discord 频道 |
| **NullClaw/TinyClaw/Moltis/ZeptoClaw** | — | — | 当前静默，需持续观察 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代期（日活 Issue+PR > 80）

| 项目 | 特征 |
|---|---|
| **OpenClaw** | 最大社区，贡献量最高，但积压消化压力也大 |
| **IronClaw** | 架构演进最激进（Reborn + Capability-Policy + Memory 三线并行） |
| **CoPaw** | AgentScope 2.0 迁移期，回归问题集中暴露 |

### ⚙️ 质量巩固期（日活 Issue+PR 20–80）

| 项目 | 特征 |
|---|---|
| **NanoBot** | 安全漏洞集中披露后快速响应，PWA/Windows 服务推进 |
| **Hermes** | 桌面端打包问题（simple-git 三重 bug）倒逼 CI/CD 修复 |
| **ZeroClaw** | PR 积压 49 条，吞吐瓶颈明显，但架构方向清晰 |
| **NanoClaw** | 修复效率高（11/15 PR 已合并），Issue 缺额极小 |

### ✅ 稳定维护期（日活 Issue+PR < 20）

| 项目 | 特征 |
|---|---|
| **PicoClaw** | 维护节奏稳健，bug 修复响应快（24h 内合并） |
| **LobsterAI** | 积压极低（仅 1 条 stale Issue），PR 流转效率最佳 |

### ⚪ 静默期

| 项目 | 备注 |
|---|---|
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | 连续 24 小时无活动，可能处于开发间隔或需关注项目活力 |

---

## 7. 值得关注的趋势信号

### 趋势一：安全从"功能"变为"基础设施"

几乎所有活跃项目都在处理权限边界问题——从 NanoBot 的 exec 白名单绕过到 ZeroClaw 的 Wasm 沙箱，再到 IronClaw 的 capability-policy 体系。**2026 年下半年，不具备严格权限隔离能力的项目将面临企业市场准入障碍。**

### 趋势二：Agent 可信度成为用户留存关键

OpenClaw 的"承诺但不执行"、IronClaw 的审批闸门不一致、CoPaw 的死循环无中断——用户不再满足于"能跑"，而是要求"可预测、可信赖、可中断"。**Agent 行为保障机制（执行确认、失败回退、超时中断）将成为下一阶段的核心竞争力。**

### 趋势三：Wasm 正在重塑插件生态

ZeroClaw 的 Wasm-first 运行时、OCI 容器仓库作为插件发现机制、能力门控的 WASI 硬件宿主函数——**插件正在从"脚本扩展"走向"能力沙箱"，这一范式变更可能影响整个生态的安全模型设计。**

### 趋势四：多模型兼容是生存基线

GPT-5-nano 参数不兼容、GLM-5.x schema 编译错误、OMLX function calling 缺失——**用户不再接受"仅 OpenAI 可用"，多模型 + 多 Provider 的即插即用能力是生产部署的最低要求。**

### 趋势五：内存稳定性 = 生产就绪

OpenClaw 4 天涨至 14.7GB、Hermes 4GB LSP 泄漏、CoPaw Chrome 进程残留——**个人 AI 助手正从"能跑起来"进入"7×24 稳定运行"的新阶段，内存治理能力将决定谁能进入生产市场。**

### 趋势六：桌面端体验 Electron 仍是主流，Tauri 在追赶

Hermes、LobsterAI、CoPaw 均以 Electron/Tauri 构建桌面端，但打包质量问题（simple-git 缺失、asar 损坏、Windows npm install 失败）频发。**桌面端 CI/CD 的成熟度直接影响用户首周体验和留存。**

---

*本报告基于 2026-06-26 各开源项目 GitHub 公开数据生成，仅供技术决策参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-06-26

## 1. 今日速览

NanoBot 今日活跃度处于高位：共处理 22 条 Issue 更新与 38 条 PR 更新，社区参与密集。**安全审计成为今日核心议题**，研究员 YLChen-007 集中披露了 7 个 `exec` 工具与 MCP `enabledTools` 的权限绕过漏洞，引发广泛关注。与此同时，社区贡献者 axelray-dev 连续提交多个修复 PR，覆盖流式解析、会话键冲突、MCP 过滤等关键路径。项目无新版本发布，但多个高价值功能 PR 正在活跃推进中。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 与 Issue 推进了以下方向：

| 方向 | 内容 | 链接 |
|------|------|------|
| **钉钉集成** | 修复富文本消息格式解析与 HTTP 超时问题 | [Issue #4497](https://github.com/HKUDS/nanobot/issues/4497) |
| **WebUI 语音转录** | 修复小米 MiMo ASR 因 WebM→WAV 格式不匹配导致的转录失败 | [PR #4493](https://github.com/HKUDS/nanobot/pull/4493) |
| **Telegram Web** | 关闭富消息功能引入的 Telegram Web 兼容性问题 | [Issue #4488](https://github.com/HKUDS/nanobot/issues/4488) |
| **Subagent 配置** | 支持 `fail_on_tool_error` 行为可配置化 | [Issue #4198](https://github.com/HKUDS/nanobot/issues/4198) |
| **Custom Provider** | 支持自定义 provider 配置 thinking style（火山引擎/豆包等非标准参数） | [Issue #4429](https://github.com/HKUDS/nanobot/issues/4429) |
| **Dream 逻辑** | 修复 `dream.enabled=false` 时 Recent History 仍注入全部聊天历史的问题 | [Issue #4242](https://github.com/HKUDS/nanobot/issues/4242) |
| **MCP 安全** | 修复 `enabledTools: []` 时仍注册 resource/prompt 的 deny-all 绕过 | [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434)、[Issue #4435](https://github.com/HKUDS/nanobot/issues/4435) |
| **README 信任徽章** | 新增 HVTracker 供应链安全评分徽章 | [Issue #4503](https://github.com/HKUDS/nanobot/issues/4503) |

---

## 4. 社区热点

### 🔴 安全漏洞集中披露（最高关注度）

研究员 **YLChen-007** 在 2026-06-25 集中发布了 7 个安全公告，涉及两大漏洞类别：

**A. MCP `enabledTools` 权限绕过（3 个 Issue）：**
- [Issue #4519](https://github.com/HKUDS/nanobot/issues/4519) — `enabledTools` Scope Bypass 暴露 Resource 和 Prompt Wrappers
- [Issue #4517](https://github.com/HKUDS/nanobot/issues/4517) — Allowlist Bypass 在 Deny-All 策略下仍注册 Resource/Prompt
- [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434) — Deny-all 策略绕过暴露 MCP Resources 和 Prompts

**B. `exec.allowPatterns` 白名单绕过（4 个 Issue）：**
- [Issue #4521](https://github.com/HKUDS/nanobot/issues/4521) — Shell-chain bypass 允许非预期命令执行
- [Issue #4520](https://github.com/HKUDS/nanobot/issues/4520) — Allowlist bypass 通过 OpenAI-compatible API 实现链式命令执行
- [Issue #4516](https://github.com/HKUDS/nanobot/issues/4516) — Wrapper prefix bypass 导致非预期 shell 命令执行
- [Issue #4515](https://github.com/HKUDS/nanobot/issues/4515) — Comment-tail bypass 允许非预期 shell 命令执行

> **分析：** 这些漏洞影响所有使用 `exec` 工具且依赖 `allowPatterns` 做权限隔离的部署，以及使用 MCP `enabledTools` 做能力范围控制的场景。社区反应迅速，axelray-dev 已在 [PR #4526](https://github.com/HKUDS/nanobot/pull/4526) 中修复链式命令绕过，[PR #4524](https://github.com/HKUDS/nanobot/pull/4524) 修复 MCP resource/prompt 过滤。

### 🟡 Windows 服务稳定性问题

- [Issue #4511](https://github.com/HKUDS/nanobot/issues/4511) — `--background` 模式下 `/restart` 后进程信息不一致
- [Issue #4513](https://github.com/HKUDS/nanobot/issues/4513) — 使用 nssm 设置为系统服务后 `/restart` 异常

> **分析：** 两个 Issue 来自同一用户 Quincy-Zh，反映 Windows 平台下进程管理的长期痛点，涉及 nssm 服务模式与 WebUI 重启机制的冲突。

### 🟢 功能亮点 PR

- [PR #4494](https://github.com/HKUDS/nanobot/pull/4494) — PWA 支持与移动端侧滑手势
- [PR #4506](https://github.com/HKUDS/nanobot/pull/4506) — MCP 服务器空闲超时自动回收
- [PR #4508](https://github.com/HKUDS/nanobot/issues/4508) — 新增 `ask_clarification` 工具（功能请求）

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 链接 |
|--------|------|------|------|
| 🔴 **Critical** | `exec.allowPatterns` 白名单绕过（4 个变体）— 可导致未授权命令执行 | 部分修复中（[PR #4526](https://github.com/HKUDS/nanobot/pull/4526)） | [#4514](https://github.com/HKUDS/nanobot/issues/4514) [#4515](https://github.com/HKUDS/nanobot/issues/4515) [#4516](https://github.com/HKUDS/nanobot/issues/4516) [#4520](https://github.com/HKUDS/nanobot/issues/4520) [#4521](https://github.com/HKUDS/nanobot/issues/4521) |
| 🔴 **Critical** | MCP `enabledTools` deny-all 绕过 — 暴露不应暴露的 resource/prompt | 修复中（[PR #4524](https://github.com/HKUDS/nanobot/pull/4524)） | [#4519](https://github.com/HKUDS/nanobot/issues/4519) [#4517](https://github.com/HKUDS/nanobot/issues/4517) |
| 🟠 **High** | Windows `--background` 模式 `/restart` 后进程信息不一致 | 未修复 | [#4511](https://github.com/HKUDS/nanobot/issues/4511) |
| 🟠 **High** | nssm 系统服务模式下 `/restart` 异常（端口占用循环/服务停止但进程存活） | 未修复 | [#4513](https://github.com/HKUDS/nanobot/issues/4513) |
| 🟡 **Medium** | `dream.enabled=false` 时 Recent History 仍注入全部聊天历史 | 已关闭 | [#4242](https://github.com/HKUDS/nanobot/issues/4242) |
| 🟡 **Medium** | Telegram Web 不支持富消息格式 | 已关闭 | [#4488](https://github.com/HKUDS/nanobot/issues/4488) |
| 🟡 **Medium** | 钉钉富文本消息与 HTTP 超时问题 | 已关闭 | [#4497](https://github.com/HKUDS/nanobot/issues/4497) |
| 🟢 **Low** | 小米 MiMo ASR WebM→WAV 格式不匹配 | 已修复合并 | [#4492](https://github.com/HKUDS/nanobot/issues/4492) |

---

## 6. 功能请求与路线图信号

| 功能 | 状态 | 信号强度 | 链接 |
|------|------|----------|------|
| **PWA 支持 + 移动端侧滑手势** | PR 活跃审查中 | ⭐⭐⭐ 高 — 多文件改动，功能完整 | [PR #4494](https://github.com/HKUDS/nanobot/pull/4494) |
| **MCP 服务器空闲超时自动回收** | PR 已提交 | ⭐⭐⭐ 高 — 解决资源泄漏痛点 | [PR #4506](https://github.com/HKUDS/nanobot/pull/4506) |
| **Subagent 聚合结果模式** | PR 已提交 | ⭐⭐ 中 — 完善 subagent 架构 | [PR #4414](https://github.com/HKUDS/nanobot/pull/4414) |
| **Subagent 模型覆盖** | PR 已提交 | ⭐⭐ 中 | [PR #4415](https://github.com/HKUDS/nanobot/pull/4415) |
| **Cron Job 模型预设** | PR 已提交 | ⭐⭐ 中 | [PR #4416](https://github.com/HKUDS/nanobot/pull/4416) |
| **Eager Memory Consolidation** | PR 已提交 | ⭐⭐ 中 — 内存管理优化 | [PR #4402](https://github.com/HKUDS/nanobot/pull/4402) |
| **bwrap 额外绑定根目录** | PR 已提交 | ⭐ 低 — 沙箱扩展 | [PR #4404](https://github.com/HKUDS/nanobot/pull/4404) |
| **ask_clarification 工具** | Issue 讨论中 | ⭐ 低 — 需设计讨论 | [Issue #4508](https://github.com/HKUDS/nanobot/issues/4508) |
| **Heartbeat 触发命令** | PR 已提交 | ⭐⭐ 中 | [PR #4437](https://github.com/HKUDS/nanobot/pull/4437) |

**路线图判断：** 当前开发重心明显在三个方向 — **安全加固**（exec/MCP 权限模型）、**多平台体验**（PWA/移动端/Windows 服务）、**Agent 架构增强**（subagent 灵活性、内存管理、cron 预设）。安全修复预计将触发一个 patch release（如 v0.2.2）。

---

## 7. 用户反馈摘要

### 😤 痛点

- **Windows 用户体验欠佳：** Quincy-Zh 详细描述了 `--background` 模式和 nssm 服务模式下的多个异常，指出端口占用检测逻辑不够健壮，重启流程存在竞态条件。反映 Windows 平台长期缺乏充分测试。
- **安全隔离期望高：** 多位安全研究员期望 `enabledTools: []` 和 `allowPatterns` 能实现严格的 deny-all 语义，当前实现被认为"文档与行为不一致"。
- **钉钉集成不稳定：** 用户遇到文件/图片消息超时和富文本格式不支持的问题，影响企业场景使用。

### 😐 使用中遇到的限制

- **Custom Provider 缺乏 thinking 模式支持：** 使用火山引擎/豆包的用户无法通过 custom provider 启用推理模式。
- **Subagent 容错不足：** 工具报错时 subagent 立即终止，无法自我修正轻微错误。
- **Dream 关闭后仍残留行为：** 配置关闭 dream 后 Recent History 仍注入全部历史，影响 system prompt 质量。

### 😊 满意方向

- **PWA 支持** 获得积极反馈，移动端用户需求明确。
- **HVTracker 信任徽章** 提案获得社区认可，反映用户对供应链安全的关注。
- **MiMo ASR 修复** 快速响应（24 小时内合并），用户问题得到及时解决。

---

## 8. 待处理积压

| 项目 | 等待时间 | 优先级 | 链接 |
|------|----------|--------|------|
| **Issue #1710** — 模型返回空响应（qwen 3.5） | ~3.5 个月（2026-03-08 起） | 🟠 高 — 影响多用户日常使用 | [Issue #1710](https://github.com/HKUDS/nanobot/issues/1710) |
| **PR #4441** — MCP streamable_http 重连崩溃修复 | ~5 天 | 🔴 高 — Gateway 崩溃问题 | [PR #4441](https://github.com/HKUDS/nanobot/pull/4441) |
| **PR #4531** — Stream delta 合并键修复 | ~1 天 | 🟠 高 — 流式输出正确性 | [PR #4531](https://github.com/HKUDS/nanobot/pull/4531) |
| **PR #4533** — 会话键磁盘冲突修复 | ~1 天 | 🟠 高 — 数据完整性 | [PR #4533](https://github.com/HKUDS/nanobot/pull/4533) |
| **PR #4510** — 畸形 tool call 名称处理 | ~1 天 | 🟡 中 — 防御性编程 | [PR #4510](https://github.com/HKUDS/nanobot/pull/4510) |
| **PR #4522** — 通用重复工具调用防护 | ~1 天 | 🟡 中 — 防止死循环 | [PR #4522](https://github.com/HKUDS/nanobot/pull/4522) |

> **建议维护者关注：** Issue #1710 已开放超过 3 个月且涉及主流模型（qwen 3.5），建议确认是否仍可复现并安排根因分析。PR #4441 修复 Gateway 崩溃但尚未合并，建议优先审查。

---

*本报告基于 2026-06-26 GitHub 数据自动生成。数据截止时间：2026-06-26 23:59 UTC。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-06-26

## 1. 今日速览

Hermes Agent 今日保持高活跃度，共处理 50 条 Issue 更新与 50 条 PR 更新。社区围绕**凭证安全架构、多平台消息投递、桌面端稳定性**三条主线密集讨论。无新版本发布，但多个高价值 PR 集中在认证修复、网关稳定性与工具链优化方向，显示出项目处于 v0.17.x 密集迭代周期。整体健康度良好，Issue 关闭率 28%（14/50），PR 合并/关闭率 28%（14/50），积压消化速度稳定。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#52752](https://github.com/NousResearch/hermes-agent/pull/52752) | Bug fix | 修复辅助调用（auxiliary/compression）在 `provider="auto"` 时遇到 401 不刷新 OAuth 凭证的问题，涉及 `call_llm` 和 `async_call_llm` 双路径 |
| [#49462](https://github.com/NousResearch/hermes-agent/issues/49462) → 已关闭 | Bug fix | `_stored_prompt_matches_runtime` 行值匹配返回最后一个而非第一个匹配，导致 prompt 缓存不命中；已有修复 |
| [#41693](https://github.com/NousResearch/hermes-agent/issues/41693) → 已关闭 | Bug fix | Desktop 渲染进程 `tapClientLookup: Index N out of bounds` 崩溃，触发错误边界 "Reload window" |
| [#48248](https://github.com/NousResearch/hermes-agent/issues/48248) → 已关闭 | Bug fix | `billing_provider` 使用 `COALESCE` 导致会话中途切换模型后计费信息过期，误导 Dashboard 显示 |
| [#48173](https://github.com/NousResearch/hermes-agent/issues/48173) → 已关闭 | Bug fix | 会话中切换模型后 Web UI 仍显示旧模型/Provider 标签 |
| [#43719](https://github.com/NousResearch/hermes-agent/issues/43719) → 已关闭 | Security | 恶意第三方插件通过 `--insecure` 仪表板标志攻击 Hermes 实例，已处理 |
| [#48071](https://github.com/NousResearch/hermes-agent/issues/48071) → 已关闭 | Bug fix | Nix 安装路径生成的 systemd unit 绕过 Hermes wrapper |
| [#52023](https://github.com/NousResearch/hermes-agent/issues/52023) → 已关闭 | Bug fix | GPT-4o-mini/GPT-4.1 在全新安装后报 "Encrypted content is not supported with this model" |
| [#14185](https://github.com/NousResearch/hermes-agent/issues/14185) → 已关闭 | Bug fix | `todo_tool` 在 LLM 以 JSON 字符串而非数组形式发出 `todos` 时崩溃 |

**关键推进方向：**
- **认证体系加固**：OAuth 刷新路径修复（PR #52752）、凭证池跨 Profile 同步（PR #52760）
- **网关稳定性**：跨进程缓存清理不再阻塞事件循环（PR #52761）、Windows 重启路径加固（PR #52767）
- **模型切换一致性**：凭证池随 provider 切换刷新（PR #52763）

---

## 4. 社区热点

### 🔥 评论最多

| # | Issue | 👍 | 评论 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) — 凭证代理守护进程（零知识 HTTP/HTTPS Broker） | 1 | 11 | 在 PID 命名空间隔离基础上，进一步提出**零知识凭证代理架构**，使子进程永不直接接触原始 API 密钥 |
| 2 | [#52735](https://github.com/NousResearch/hermes-agent/issues/52735) — Desktop 启动崩溃：缺少 `simple-git` 模块 | 1 | 9 | 应用内更新后 `git-review-ops.cjs` 依赖未打包，Windows/macOS 均受影响 |
| 3 | [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) — 集成 headroom-ai 工具输出压缩 | 10 | 8 | 👍 数最高（10）。用户希望引入**语义级工具输出压缩**替代当前全上下文摘要方案，降低 token 成本 |
| 4 | [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) — Dashboard 聊天功能损坏（React 错误 #301） | 2 | 8 | 更新后 Dashboard 前端崩溃，影响所有 Dashboard 用户 |
| 5 | [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) — Slack Block Kit 支持 | 9 | 8 | 👍 数 9。Slack 适配器仍使用 legacy `mrkdwn`，不支持 Markdown 表格等富文本 |

**分析：** 社区最关心的三大主题是 **(1) 凭证安全与零信任架构**、**(2) 桌面端/ Dashboard 稳定性**、**(3) 多平台消息格式现代化**。工具输出压缩需求（👍10）反映出规模化使用下的成本压力。

---

## 5. Bug 与稳定性

### 🔴 P0/P1 — 严重/高优先级

| Issue | 严重度 | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | **P1** | OPEN | Curator 在证据不足时归档活跃技能（fail-open），一次运行可归档 10 个运营关键技能 | 无 |
| [#43719](https://github.com/NousResearch/hermes-agent/issues/43719) | **P1** | CLOSED | 恶意第三方插件通过 `--insecure` 标志攻击 Dashboard | 已处理 |
| [#14185](https://github.com/NousResearch/hermes-agent/issues/14185) | **P1** | CLOSED | `todo_tool` 在 LLM 输出 JSON 字符串时 `AttributeError` 崩溃 | 已修复 |
| [#52023](https://github.com/NousResearch/hermes-agent/issues/52023) | **P1** | CLOSED | GPT-4o-mini/4.1 全新安装后报加密内容不支持 | 已修复 |
| [#48071](https://github.com/NousResearch/hermes-agent/issues/48071) | **P1** | CLOSED | Nix 安装路径 systemd unit 绕过 Hermes wrapper | 已修复 |

### 🟡 P2 — 中等优先级

| Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|
| [#52735](https://github.com/NousResearch/hermes-agent/issues/52735) | CLOSED | Desktop 启动崩溃：`simple-git` 模块未打包 | 无（已关闭但未关联 PR） |
| [#52753](https://github.com/NousResearch/hermes-agent/issues/52753) | CLOSED | Windows Desktop 0.17.0 更新后 `simple-git` 缺失（重复） | 无 |
| [#52764](https://github.com/NousResearch/hermes-agent/issues/52764) | **OPEN** | `hermes update` 后 git pull 添加 npm 依赖导致 Desktop asar 构建损坏 | 无 |
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | OPEN | Dashboard 聊天功能 React 错误 #301 | 无 |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | OPEN | Windows 安装器在 "desktop" 阶段 `npm install` exit code 1 失败 | 无 |
| [#43810](https://github.com/NousResearch/hermes-agent/issues/43810) | OPEN | Nix 构建在 `extraPythonPackages` 与 sealed venv 依赖冲突时硬失败 | 无 |
| [#52711](https://github.com/NousResearch/hermes-agent/issues/52711) | OPEN | OpenAI 兼容 `/v1/responses` 端点 `status=incomplete` 导致单轮 ~60 条重复消息 | 无 |
| [#46778](https://github.com/NousResearch/hermes-agent/issues/46778) | OPEN | Desktop 池后端在空闲回收和退出时孤儿化（PPID=1 Dashboard 泄漏） | 无 |

### 🟢 P3 — 低优先级

| Issue | 状态 | 描述 |
|---|---|---|
| [#20084](https://github.com/NousResearch/hermes-agent/issues/20084) | OPEN | TUI Markdown 渲染在代码块中剥离星号（C/C++ 指针语法不可读） |
| [#52695](https://github.com/NousResearch/hermes-agent/issues/52695) | CLOSED | WebUI 表格复制携带深色样式且丢失表头行 |

**⚠️ 关键风险：** Issue #52764（新报告）与 #52735/#52753 形成**三重 `simple-git` 打包问题**，表明桌面端 CI/CD 打包流程存在系统性缺陷，需优先排查。

---

## 6. 功能请求与路线图信号

### 高信号（已有活跃 PR 推进）

| 方向 | Issue | PR | 信号强度 |
|---|---|---|---|
| **Vertex AI Gemini 一等公民支持** | — | [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | 🟢 强 — PR 活跃更新中 |
| **本地优先遥测/可观测性** | — | [#51714](https://github.com/NousResearch/hermes-agent/pull/51714) | 🟢 强 — 支持 `/insights` 命令 |
| **沙盒出口流量凭证注入防火墙** | — | [#30179](https://github.com/NousResearch/hermes-agent/pull/30179) | 🟢 强 — 安全架构升级 |
| **Slack Block Kit 富文本** | [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | — | 🟡 中 — 👍9，评论 8，但无 PR |
| **Telegram Bot API 10.1 Rich Messages** | [#44428](https://github.com/NousResearch/hermes-agent/issues/44428) | — | 🟡 中 — 评论 7，👍5 |
| **工具输出语义压缩** | [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | — | 🟡 中 — 👍10（最高），但无 PR |
| **Dashboard 反向代理 `--allowed-hosts`** | [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) | — | 🟡 中 — Tailscale 用户需求 |
| **OAuth HTTPS 回调 URL** | [#29299](https://github.com/NousResearch/hermes-agent/issues/29299) | — | 🟡 中 — Salesforce 等企业集成刚需 |
| **大文件上传进度反馈** | [#46454](https://github.com/NousResearch/hermes-agent/issues/46454) | — | 🟡 中 |
| **Discord 大视频预检优雅降级** | [#50846](https://github.com/NousResearch/hermes-agent/issues/50846) | — | 🟡 中 |
| **飞书原生 Markdown 表格** | — | [#27922](https://github.com/NousResearch/hermes-agent/pull/27922) | 🟢 强 — PR 活跃 |
| **后台委托任务 "将恢复" 提示** | — | [#52756](https://github.com/NousResearch/hermes-agent/pull/52756) | 🟢 强 — UX 改进 |
| **Advisor 最终审核门 v0** | — | [#52759](https://github.com/NousResearch/hermes-agent/pull/52759) | 🟢 强 — 质量保障新机制 |
| **LSP 空闲客户端回收器** | — | [#52751](https://github.com/NousResearch/hermes-agent/pull/52751) | 🟢 强 — 修复 4GB 内存泄漏 |
| **README 营销化重构** | — | [#52755](https://github.com/NousResearch/hermes-agent/pull/52755) | 🟢 强 — 项目形象升级 |

### 路线图判断

下一版本（推测 v0.17.1 或 v0.18.0）大概率包含：
1. **Vertex AI Gemini 提供商**（PR #8427 已成熟）
2. **本地遥测系统**（PR #51714）
3. **桌面端打包修复**（`simple-git` 三重 bug 倒逼）
4. **LSP 内存泄漏修复**（PR #52751，影响长时间运行网关）
5. **飞书原生表格渲染**（PR #27922）

---

## 7. 用户反馈摘要

### 😐 痛点（不满意）

- **桌面端更新体验差**：应用内更新后无法启动（#52735、#52753、#52764），Windows 用户尤为严重。用户反馈"更新后直接变砖"，需要手动清理 AppData 重装。
- **Dashboard 稳定性**：React 错误 #301 导致 Dashboard 聊天完全不可用（#36658），影响运维监控场景。
- **Nix 构建脆弱**：`extraPythonPackages` 与 sealed venv 的任何冲突都会硬失败（#43810），阻碍 NixOS 用户安装任何非平凡插件。
- **Windows 安装器失败**：`npm install` exit code 1 无详细错误提示（#46260），用户无法自助排查。
- **Curator 技能归档过于激进**：一次运行归档 10 个运营关键技能（#29912），用户认为 fail-open 行为在生产环境不可接受。

### 😊 满意/期待

- **工具输出压缩需求强烈**（#39691，👍10）：用户明确表示当前全上下文摘要方案在长会话中 token 成本不可控，期待语义级压缩。
- **Slack Block Kit 支持**（#8552，👍9）：企业用户需要 Markdown 表格、列表等富文本格式提升可读性。
- **零信任凭证架构**（#4656）：安全社区对 PID 命名空间隔离后的下一步零知识代理方案表现出高度参与意愿。
- **本地遥测**（PR #51714）：用户对"数据不出机器"的隐私设计表示欢迎。

### 📌 使用场景洞察

| 场景 | 涉及 Issue | 说明 |
|---|---|---|
| 企业 Salesforce MCP 集成 | #29299 | 需要 HTTPS OAuth 回调，当前仅支持 HTTP |
| Tailscale 反向代理后端 | #34390 | 自托管用户需要通过 Tailscale Serve 暴露 Dashboard |
| 飞书企业部署 | #27922 | 原生表格渲染影响信息传达效率 |
| 长时间运行网关（systemd） | #52751 | 15 小时积累 27 个 LSP 进程消耗 4GB RAM |
| 多 Profile 凭证池 | #52760 | 单 Profile 轮转 OAuth 导致兄弟 Profile `refresh_token_reused` |

---

## 8. 待处理积压

### 🔴 长期未响应的高优先级 Issue

| Issue | 创建日期 | 状态 | 风险 |
|---|---|---|---|
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) — Curator 归档活跃技能 | 2026-05-21 | OPEN, 评论 7 | **36 天未解决**。P1 级别，影响所有使用 Curator 技能管理的用户。fail-open 行为可能导致生产环境关键技能丢失。 |
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) — 凭证代理守护进程 | 2026-04-02 | OPEN, 评论 11 | **85 天未解决**。安全架构升级提案，社区参与度高但无官方路线图回应。 |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) — Windows 安装器失败 | 2026-06-14 | OPEN, 评论 7 | **12 天未解决**。阻碍 Windows 新用户入门。 |
| [#43810](https://github.com/NousResearch/hermes-agent/issues/43810) — Nix 构建依赖冲突 | 2026-06-10 | OPEN, 评论 3 | **16 天未解决**。阻碍 NixOS 社区采用。 |
| [#46778](https://github.com/NousResearch/hermes-agent/issues/46778) — Desktop 进程泄漏 | 2026-06-15 | OPEN, 评论 1 | **11 天未解决**。影响长时间运行 Desktop 用户。 |

### 🟡 需关注的 PR 积压

| PR | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) — Vertex AI Gemini | 2026-04-12 | OPEN, 75 天 | 长期未合并，可能需要 rebase 或设计评审 |
| [#30179](https://github.com/NousResearch/hermes-agent/pull/30179) — iron-proxy 沙盒防火墙 | 2026-05-22 | OPEN, 35 天 | 安全架构 PR，可能需安全审计 |
| [#48015](https://github.com/NousResearch/hermes-agent/pull/48015) — Mattermost 可配置帖子长度 | 2026-06-17 | OPEN, 9 天 | 小功能，合并阻力低 |
| [#48014](https://github.com/NousResearch/hermes-agent/pull/48014) — Mattermost 媒体帖子标题修复 | 2026-06-17 | OPEN, 9 天 | 小功能，合并阻力低 |

### ⚠️ 维护者行动建议

1. **立即**：为 `simple-git` 打包问题（#52764）创建跟踪 Issue，合并 #52735 和 #52753 为重复，指定负责人排查 CI/CD 打包流程
2. **本周**：对 #29912（Curator 归档）做出设计回应——是调整默认行为还是添加 `--force` 标志
3. **本月**：为 #4656（凭证代理）设定路线图预期，避免社区因长期无回应而流失贡献热情
4. **持续**：关注 Windows 安装器问题（#46260），考虑在安装阶段增加 `npm install` 的详细错误日志输出

---

*数据来源：GitHub.com/NousResearch/hermes-agent | 报告生成时间：2026-06-26*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-06-26

## 1. 今日速览

PicoClaw 今日活跃度较高，共处理 **3 条 Issue 更新**与 **19 条 PR 更新**，其中 6 个 PR 已完成合并或关闭，13 个仍待合并。无新版本发布。项目处于密集维护期，社区贡献者集中提交了一批 bugfix 与依赖升级 PR，维护团队响应迅速——多个 PR 在提交后 24 小时内即完成合并。整体健康度良好，代码质量治理与依赖现代化同步推进。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 6 个 PR 涵盖以下方向：

| PR | 类型 | 说明 |
|---|---|---|
| [#3169](https://github.com/sipeed/picoclaw/pull/3169) | Bug fix | 心跳轮询不再触发 evolution 冷路径调度，避免周期性心跳检查无谓消耗 token |
| [#3166](https://github.com/sipeed/picoclaw/pull/3166) | Bug fix | 修复 `openai_compat` 包中 `undefined: log` 构建失败，替换为结构化日志 |
| [#3168](https://github.com/sipeed/picoclaw/pull/3168) | Bug fix | 完善 OpenAI 兼容模型列表接口在非 200 响应且 body 不可读时的错误处理 |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) | Bug fix | 修复 Matrix 用户 ID（含 `@alice:example.com` 格式）在 `allow_from` 中被静默拒绝的问题 |
| [#3092](https://github.com/sipeed/picoclaw/pull/3092) | Bug fix | 为 `skills_install` 中的 `version` / `force` 类型断言添加 `ok` 检查，防止静默降级 |
| [#3145](https://github.com/sipeed/picoclaw/pull/3145) | Dependabot | `github.com/github/copilot-sdk/go` 0.2.0 → 1.0.2（已关闭，被 #3177 取代） |

**关键推进：**
- **Evolution 资源消耗优化**：#3169 明确针对心跳场景做了 token 节约，直接回应用户在 [#3012](https://github.com/sipeed/picoclaw/issues/3012) 中报告的"每分钟持续消耗 token"问题。
- **Matrix 兼容性修复**：#3045 解决了 Matrix 渠道的 `allow_from` 白名单解析缺陷，对使用 Matrix 作为通道的用户是重要修复。
- **构建稳定性**：#3166 修复了 `openai_compat` 包的编译阻断问题，保障 CI 健康。

---

## 4. 社区热点

### Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) — 用 vodozemac 替代 libolm（👍 2，3 条评论）

- **标签**：`help wanted` / `priority: high` / `stale`
- **核心诉求**：libolm 已停止维护且存在安全隐患，提议在编译时将其设为可选，改用 vodozemac 作为 Matrix 加密的官方替代库。
- **分析**：这是 PicoClaw 的 Matrix 安全基础设施升级信号。标记为 `help wanted` 说明维护者希望社区主导实现。由于涉及加密库替换，影响面较大，需要谨慎的迁移方案。

### Issue [#1757](https://github.com/sipeed/picoclaw/issues/1757) — 每小时定时任务触发频道错误（10 条评论）

- **标签**：`bug` / `question` / `channel` / `cron` / `stale` / `CLOSED`
- **核心诉求**：用户在使用 Telegram 频道 + cron 每小时执行任务时遇到频道错误。
- **分析**：评论数最高（10 条），说明该问题影响用户体验较深，讨论持续时间长。已关闭但未明确标注修复 PR，可能是通过其他方式解决或用户自行绕过。

### Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012) — Evolution 启用后每分钟持续消耗 token（5 条评论）

- **标签**：`bug` / `CLOSED`
- **核心诉求**：开启 Evolution（Draft 模式、Code Path Trigger）后，token 被每分钟持续消耗。
- **分析**：该 Issue 直接推动了 PR #3169 的合并——心跳轮询不再触发 evolution 冷路径。**Issue 与 PR 形成完整闭环**，是今日最有效的维护响应案例。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 关联 PR |
|---|---|---|---|
| 🔴 高 | Evolution 心跳轮询无谓消耗 token（[#3012](https://github.com/sipeed/picoclaw/issues/3012)） | ✅ 已修复 | [#3169](https://github.com/sipeed/picoclaw/pull/3169) |
| 🔴 高 | `openai_compat` 包构建失败（`undefined: log`） | ✅ 已修复 | [#3166](https://github.com/sipeed/picoclaw/pull/3166) |
| 🟡 中 | Matrix `allow_from` 白名单静默拒绝有效用户 ID（[#3044](https://github.com/sipeed/picoclaw/issues/3044)） | ✅ 已修复 | [#3045](https://github.com/sipeed/picoclaw/pull/3045) |
| 🟡 中 | OpenAI 兼容模型列表接口错误 body 不可读时信息丢失 | ✅ 已修复 | [#3168](https://github.com/sipeed/picoclaw/pull/3168) |
| 🟡 中 | `skills_install` 类型断言缺少 `ok` 检查导致静默降级 | ✅ 已修复 | [#3092](https://github.com/sipeed/picoclaw/pull/3092) |
| 🟡 中 | Cron 定时任务触发频道错误（[#1757](https://github.com/sipeed/picoclaw/issues/1757)） | ⚠️ 已关闭，修复方式不明 | — |
| 🟢 低 | Spawn 子代理 `ForUser` 字段未清理导致消息重复推送 | ⏳ 待合并 | [#3142](https://github.com/sipeed/picoclaw/pull/3142) |
| 🟢 低 | 工具输出中 `data:` URL 被误识别为媒体附件，导致会话历史损坏 | ⏳ 待合并 | [#3115](https://github.com/sipeed/picoclaw/pull/3115) |
| 🟢 低 | LINE 频道 `Send` 方法 `sync.Map` 类型断言缺少 `ok` 检查 | ⏳ 待合并 | [#3171](https://github.com/sipeed/picoclaw/pull/3171) |
| 🟢 低 | base64 编码器在 `io.Copy` 失败时未关闭，可能泄漏资源 | ⏳ 待合并 | [#3170](https://github.com/sipeed/picoclaw/pull/3170) |

---

## 6. 功能请求与路线图信号

### 🔮 DeltaChat 网关（PR [#3063](https://github.com/sipeed/picoclaw/pull/3063)，待合并）

- 新增 DeltaChat 消息通道，扩展 PicoClaw 的渠道覆盖范围。
- 包含文档更新，是完整的功能贡献。
- **路线图信号**：项目正在积极扩展即时通讯渠道生态（Telegram、LINE、Web、Matrix、DeltaChat）。

### 🔮 远程 Pico WebSocket 模式（PR [#3118](https://github.com/sipeed/picoclaw/pull/3118)，待合并）

- 为 `picoclaw agent` 命令添加 `--remote` 参数，支持通过 WebSocket 连接到远程 Pico 实例。
- **路线图信号**：本地优先架构正在向"本地 + 远程"混合模式演进，暗示未来可能有更完整的远程管理方案。

### 🔮 libolm → vodozemac 迁移（Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088)，待实现）

- 标记为 `priority: high` 且 `help wanted`，属于安全基础设施升级。
- 尚无关联 PR，是潜在的下一个里程碑任务。

### 📦 依赖现代化（5 个 Dependabot PR 待合并）

| PR | 依赖 | 版本变化 |
|---|---|---|
| [#3177](https://github.com/sipeed/picoclaw/pull/3177) | `github.com/github/copilot-sdk/go` | 0.2.0 → 1.0.4（大版本跳跃，需关注破坏性变更） |
| [#3176](https://github.com/sipeed/picoclaw/pull/3176) | `github.com/mymmrac/telego` | 1.9.0 → 1.10.0（Telegram Bot API v10.1 适配） |
| [#3174](https://github.com/sipeed/picoclaw/pull/3174) | `github.com/line/line-bot-sdk-go/v8` | 8.20.0 → 8.20.1 |
| [#3175](https://github.com/sipeed/picoclaw/pull/3175) | `fyne.io/systray` | 1.12.1 → 1.12.2 |
| [#3173](https://github.com/sipeed/picoclaw/pull/3173) | `modernc.org/sqlite` | 1.51.0 → 1.53.0 |

> ⚠️ **注意**：`copilot-sdk/go` 从 0.2.0 直接升至 1.0.4，属于大版本升级，建议维护者仔细审查 release notes 中的破坏性变更。

---

## 7. 用户反馈摘要

| 痛点 | 场景 | 情绪 |
|---|---|---|
| **Evolution token 消耗过快** | 用户开启 Evolution Draft 模式后，即使只是心跳轮询也触发 AI 调用，导致 token 账单激增（[#3012](https://github.com/sipeed/picoclaw/issues/3012)） | 😠 不满 → ✅ 已解决 |
| **Cron 定时任务频道错误** | 在 Raspberry Pi Zero W 上使用 Telegram 频道 + cron 每小时任务，触发频道错误（[#1757](https://github.com/sipeed/picoclaw/issues/1757)） | 😕 困惑，讨论活跃 |
| **Matrix 安全担忧** | 用户关注 libolm 的维护状态和安全风险，主动提出迁移方案（[#3088](https://github.com/sipeed/picoclaw/issues/3088)） | 🤔 建设性，期待回应 |
| **嵌入式设备资源受限** | #1757 用户明确提到 Rpi Zero W 环境，暗示对低资源设备的性能优化有持续需求 | 📌 长期关注点 |

---

## 8. 待处理积压

| 项目 | 类型 | 状态 | 建议 |
|---|---|---|---|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) — libolm → vodozemac 迁移 | Issue | `help wanted` / `priority: high` / `stale` | 已标记 stale 但优先级高，建议维护者主动认领或招募社区贡献者，给出迁移方案 RFC |
| [#3142](https://github.com/sipeed/picoclaw/pull/3142) — Spawn 子代理消息重复 | PR | `stale` / 待合并 | 已存在 9 天，建议尽快 review 或要求作者 rebase |
| [#3128](https://github.com/sipeed/picoclaw/pull/3128) — `resp.Body.Close()` 错误忽略 | PR | `stale` / 待合并 | 代码质量改进，建议合并或关闭 |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) — DeltaChat 网关 | PR | 待合并 | 大型功能 PR，建议安排专项 review |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) — 远程 WebSocket 模式 | PR | 待合并 | 同上，涉及网络架构变更，需重点 review 安全性 |
| [#3177](https://github.com/sipeed/picoclaw/pull/3177) — copilot-sdk 大版本升级 | PR | 待合并 | 0.x → 1.x 跳跃，需确认 API 兼容性后再合并 |

---

**日报总结**：PicoClaw 今日维护节奏稳健，核心 bug（Evolution token 消耗、Matrix 兼容性、构建失败）均得到及时修复。社区贡献活跃，多个功能 PR（DeltaChat、远程 WebSocket）正在排队等待 review。建议优先关注 `copilot-sdk` 大版本升级的兼容性审查，以及 libolm 迁移方案的安全规划。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-06-26

## 1. 今日速览

NanoClaw 今日活跃度较高，共产生 1 个新 Issue 和 15 条 PR 动态（其中 11 条已合并/关闭），显示出社区贡献活跃且 PR 吞吐量良好。今日无新版本发布。合并的 PR 涵盖安全加固 (`send_file` 路径限制)、国际化修复、功能增强 (容器资源配额、拒绝原因传递)、Slack 会话拆分修复等多个维度，项目在稳定性与功能层面均有实质推进。

整体评估：**项目健康度良好**，贡献者集中解决积压的问题，Issue 缺额较小（仅有 1 条开放 Issue），但仍有一个关键功能需求 (#2857) 反映实际使用中的多管理员审批痛点，值得关注。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并的主要 PR 推动了以下方向：

| 方向 | PR | 说明 |
|---|---|---|
| 安全加固 | **#2817** | 修复 `send_file` 的 workspace 路径逃逸风险，使用 realpath 校验并阻断向外符号链接 |
| 安全性与边界修复 | **#2815** | 修复 `safeParseContent` 将 JSON 原始类型误解析为对象的问题，防止路由匹配崩溃 |
| 稳定性 | **#2813** | 修复 socket 响应上限按字符数计算导致多字节 UTF-8 溢出的问题，改用字节长度计量 |
| 功能增强 | **#2832** | Module 审批卡片新增「附带原因拒绝」按钮，允许 approver 附带一行理由传回给 agent |
| 功能增强 | **#2856** | 新增 `CONTAINER_CPU_LIMIT`、`CONTAINER_MEMORY_LIMIT` 环境变量，支持 opt-in 的容器资源配额 |
| 通道集成 | **#2471 + #2472** | 修复 Slack DM 在 `per-thread` 模式下所有顶层消息合并为单个会话的长期问题 |
| macOS 兼容性 | **#2855** | 认证体系改造：OAuth 订阅为主、API key 为热备 failover，消除手动切换的痛点 |
| macOS 兼容性 | **#2854** | 修复 Rainer Desktop / Apple container 下 macOS Gateway CA 证书挂载失败的连接问题 |
| 安装体验 | **#2830** | 清理残留的 launchd/systemd 服务注册，防止删除 checkout 后系统反复拉起已不存在的二进制 |
| 新功能 | **#2843** | 新增 `/learn` Skill，可以从任意来源蒸馏可复用的 Skill |

---

## 4. 社区热点

**#2857 — approval should support multi admins and terminal cli approvals**
- [Issue 链接](https://github.com/nanocoai/nanoclaw/issues/2857)
- 作者反映实际使用场景：当前审批请求仅发给单一管理员，若该主管不在场，其他管理员无法代为审批，造成任务阻塞。建议管理员可配置备选审批人或 terminal CLI 审批入口。该 Issue 呼应了已在 PR #2832 中推进的「审批体验改进」方向，说明社区对灵活的审批机制有真实需求。

---

## 5. Bug 与稳定性

今日修复的 Bug 均已完成合并，无遗留严重问题：

| 严重度 | 描述 | 状态 |
|---|---|---|
| 🔴 高 | `send_file` 路径校验可被 `/workspace` 符号链接绕过 | **已修复** (#2817, 合并) |
|  中 | `safeParseContent` 将 JSON 原始类型（字符串/数字）误解析为对象，导致路由匹配错误 | **已修复** (#2815, 合并) |
| 🟡 中 | socket 响应截断按字符计数，多字节 UTF-8 负载在界限附近被截断 | **已修复** (#2813, 合并) |
|  中 | Slack DM 在 `per-thread` 模式下顶层消息全部合并为单一会话 | **已修复** (#2471 + #2472, 合并) |
|  中 | macOS (Rainer Desktop / Apple container) 下 Gateway CA 挂载失败，所有 API 报错自签名证书错误 | **已修复** (#2854, 合并) |
| 🟢 低 | 删除 NanoClaw 目录后残留的 launchd/systemd 服务注册持续重试拉起缺失的二进制 | **已修复** (#2830, 合并) |

**无未解决的严重 Bug，安全修复已合并。**

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 信号解读 |
|---|---|---|
| 多管理员审批 + terminal CLI 审批 | **[#2857](https://github.com/nanocoai/nanoclaw/issues/2857)** | 结合 PR #2832（审批卡片增强），下一版本大概率会扩展支持多管理员或备选审批人配置。terminal CLI 审批则可能作为高级功能在下下版本中落地。 |
| `/add-clidash` — 只读 CLI 仪表盘 Skill  | **[PR #2795](https://github.com/nanoca/nanoclaw/pull/2795) (Open)** | 社区贡献活跃，正在进行规范修复迭代（#2858），趋势表明即将被合并。 |

**路线图信号总结：** 审批机制优化、Slack/通道集成体验、容器资源管理是近期开发的三大主线。`/learn` Skill (#2843) 合并后带动的工具生态扩展值得关注。

---

## 7. 用户反馈摘要

| 场景/来源 | 反馈内容 | 情绪 |
|---|---|---|
| Slack 多会话管理 | PR #2471/#2472 解决了长期以来顶层 DM 合并为单一会话的问题，社区反应平静但问题影响面广 |  功能终于修复 |
| macOS Rainer Desk | 全部 API 调用报自签名证书错误 (#2854)，影响所有使用 macOS 桌面虚拟化的用户 |  高挫败感，现已修复 |
| 安全修复 (符号链接) | `send_file` 路径校验的绕过风险 (#2817)，说明安全审查在社区驱动下持续运作 |  积极贡献 |
| 容器资源争抢 | 同一宿主机上运行多个 agent 时缺乏资源限制 (#2856)，反映了多租户场景的真实需求 |  功能新增 |
| 认证 OAuth/subscription 频繁切换 | 手动 OAuth ↔ API 密钥切换的痛点 (#2855)，自动 failover 方案获合并 | 👍 满意 |
| 审批可用性 | 单主管不在场就无法审批 (#2857)，多主管团队的刚性需求 | ⚠️ 功能缺失 |

---

## 8. 待处理积压

| 积压项 | 等待时间 | 风险评估 | 建议 |
|---|---|---|---|
| **[#2795](https://github.com/nanocoai/nanoclaw/pull/2795)** `/add-clidash` — CLI 只读仪表盘 Skill | 创建: 2026-06-17，Open 9+ 天 |  中 — 社区贡献者已在迭代修复 (#2858)，建议尽快确认合并条件，避免贡献者流失 |
| **[#2824](https://github.com/nanocoai/nanoclaw/pull/2824)** 移除主 seed prompt 中过时的 "Global Memory" 指令 | 创建: 2026-06-20，Open 6 天 |  低 — 影响面小，可能是简单文本修改，贡献者等待 feedback |
| **[#2859](https://github.com/nanocoai/nanoclaw/pull/2859)** v2 迁移脚本对老版本 v1 数据库不兼容 (`is_main` 列不存在) | 创建: 2026-06-25，Open 1 天 | 🔴 高 — 直接影响 v1 → v2 升级的首次用户体验，老版本用户升级将直接崩溃，建议优先 review 并合并 |
| **[#2857](https://github.com/nanocoai/nanoclaw/issues/2857)** 多管理员审批支持 | 创建: 2026-06-25，Open 1 天 |  中 — 多个团队的实用性需求，可结合 PR #2832 的方向纳入近期规划 |

---

**本期要点回顾：** 本期 NanoClaw 以稳定性修复与 macOS 兼容性大幅加固为亮点，安全层面通过路径校验、字符编码、JSON 解析三处修复显著提升了项目健壮性。社区功能贡献活跃（Slack 会话修复、容器配额、审批体验、/learn Skill），整体节奏健康。**建议优先关注 #2859（v2 迁移兼容性，风险最高）和 #2857（多管理员审批需求）。**

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
## 2026-06-26

---

## 1. 今日速览

IronClaw 项目进入 6 月底冲刺期，今日保持**极高频迭代节奏**：过去 24 小时 Issues 与 PRs 更新量各达 50 条，此前无新版本发布。当前活跃工作主轴集中在三条线：(1) **Reborn capability-policy 四维度策略体系**（admin‑shared tools / per‑user auth）大规模铺开，一周内产生 6 个 epic‑tracking‑PR；(2) **持久化层的性能与正确性**——CAS 迁移、写合并、心跳分离、事件日志批处理；(3) **WebUI‑v2 体验修复**——审批闸门状态、时间戳可见性、消息输入冻结。Dogfooding 将日常发现的 UI/UX 问题（#5119 系列）持续闭环。项目处于活跃开发阶段，多个 XL 规模 PR 待合并，社区参与度高，技术债清理与架构演进同步推进。

---

## 2. 版本发布

无新版本发布。（过去 24 小时 Releases 计数为 0）

---

## 3. 项目进展（今日合并/关闭的重要 PR）

下列 PR 在过去 24 小时内被合并或关闭，按重要性排序：

- **[#5222][pr5222]** `fix(reborn): treat parked Blocked* triggered runs as terminal-for-delivery`  
  修复了 **Slack 触发式投递将 BlockedApproval / BlockedAuth 等待态误判为失败**的问题。之前生产日志中观察到 23+ 条假失败，此合并后按需等待的触发运行会被正确标记为"配送终态"，不再污染运维指标。

- **[#5250 OPEN][pr5250]** `fix(reborn): classify run-wait states — stop forever-hangs and gate-parked-run kills`  
  将四种被闸控阻塞的等待状态纳入统一的等待/轮询谓词，根治"永远等待"或"误杀闸控运行"的问题。是与 #5222 配套的等待逻辑收敛工作，仍处 OPEN 状态。

- **[#5234 OPEN][pr5234]** `fix(reborn): remove per-record lock convoys via shared cas_update helper`  
  用统一 CAS 辅助函数替代每行 record 上的 `tokio::sync::Mutex`，消除进程内串行化瓶颈，适配底层已有的版本化 CAS 后端。该 PR 建立了后续所有写入路径必须统一走 `cas_update` 的护栏。

- **[#5257 OPEN][pr5257]** `perf(reborn): batch durable event-log appends (write-behind coalescing)`  
  将"每事件一次 INSERT"改为批量写入，显著降低持久化层 QPS，已在日志上验证问题存在，方案待审。

- **[#4997 CLOSED][pr4997]** `add a seam for download_file to extract binary docs (PDF/PPTX/DOCX/XLSX)`  
  扩展 Google Drive 下载能力，通过主机侧拦截层将二进制文档提取为可读文本，解决了非 UTF-8 文件返回 `operation_failed` 的问题。

- **[#5255][pr5255]** `fix(filesystem): fold CAS put directory pre-check into one statement (3→1 round-trip)`  
  Postgres CAS 写入路径从 3 次 ping‑pong 降到 1 次。

- **[#3669 CLOSED][pr3669]** `engine v2: expose channel-supplied thread/response ids to tools`  
  **跨月余合并**——恢复 v1 中 `notify_thread_id/notify_response_id` 的契约，确保工具（外部 API 调用、审批回调等）能将其副作用与发起会话轮次关联。此项合并标志 Engine v1→v2 的契约对齐向前推进一步。

**整体进度判断**：项目在"大容量写入批处理 / 正确性闸控 / 契约兼容性"三个维度同时收敛；Reborn memory‑as‑userland‑extension 巨型 PR #5205 仍在审，表明架构层仍有大块工作量待落地。

[pr5222]: https://github.com/nearai/ironclaw/pull/5222
[pr5250]: https://github.com/nearai/ironclaw/pull/5250
[pr5234]: https://github.com/nearai/ironclaw/pull/5234
[pr5257]: https://github.com/nearai/ironclaw/pull/5257
[pr4997]: https://github.com/nearai/ironclaw/pull/4997
[pr5255]: https://github.com/nearai/ironclaw/pull/5255
[pr3669]: https://github.com/nearai/ironclaw/pull/3669

---

## 4. 社区热点

今日评论最多 / 最具代表性的 Issues 与 PRs：

### Issues

- **[#5276][issue5276]** *Scheduled automation fails with "No thread attached" (Daily PR Digest, 0% success)*  
  自动化每次按计划创建运行，却**从未挂接到会话线程**，最终 0% 成功。反映后台调度与线程管理之间的契约缺口。

- **[#5192][issue5192]** *Denying a tool approval can still lead to additional tool approval requests*  
  用户主动拒绝后仍收到新的审批请求，表明审批拒绝路径的幂等性/阻断逻辑不完善。

- **[#5242][issue5242]** *(已关闭) Tools page under Settings shows operator-only tools error for WebUI users*  
  普通用户在本地 WebUI 打开设置页被拒，原因是后端仍要求 operator 权限——与产品赋权方向相反。

- **[#5243][issue5243]** *(已关闭) "Approve & always allow" does not persist tool permission*  
  "始终允许"没有真正持久化。用户反复操作同一工具时体验极差。

- **[#5196][issue5196]** *"Ask each time" tool permission may fail with authorization error and trigger duplicate approval flow*  
  "每次询问"在审批通过后因授权错误触发二次审批，属于关键一致性缺陷。

- **[#4980][issue4980]** *(已关闭) Automations empty state does not explain how to create automations*  
  空态页面缺少引导文案与示例提示。

- **[#5219][issue5219]** *Follow-up: harden activity identity invariants after gate lifecycle refactor*  
  跟进 PR #5145，对剩余活动身份路径加约束，防止未来的批处理或直连路径"静默"分裂身份。

- **[#5261][issue5261] / [#5268][issue5268] / [#5267][issue5267] / [#5273][issue5273] / [#5272][issue5272] / [#5266][issue5266]**  
  **Capability-policy 史诗系列**——admin‑shared tools & skills with per-user auth 的六篇跟踪 Issue，覆盖 admin REST 面、可用性解析器、四维度策略存储、本地多用户认证、DB 角色门控。本周密集创建。

- **[#5264][issue5264]** *Memory #3537 follow-ups: native SQL storage‑port backing, semantic search…*  
  在 #5205 的基础上规划 Memory 子路线。

- **[#5260][issue5260]** *Reborn personal memory & self-learning — full system*  
  顶层跟踪"个人记忆 + 自学习体系"，包括安全、可控、自动过期的自策展存储。

### Pull Requests

- **[#5205 PR][pr5205]** `feat(memory): model memory as a userland extension — implements #3537`  
  **XL 级巨型 PR**：Extension Manifest v2、source‑aware trust、host‑defined capability profiles、memory profile‑binding policy、native document‑store。当前仍是 Reborn 最重量级的开放 PR。

- **[#5277 PR][pr5277]** `feat(reborn): availability resolver at the dispatch seam (#5267)`  
  让管理员的"授予能力"真正改变模型可见的工具面。

- **[#5275 PR][pr5275]** `fix(webui-v2): stop chat "Logs" link doubling the /v2 basename`  
  修复日志入口死路由。

- **[#5269 PR][pr5269]** `docs(reborn): design — native hot‑store primitives on the unified RootFilesystem trait`  
  提出将 Postgres 访问模式原生化的设计稿，目标是不换抽象层前提下启用行级/索引/部分更新。

- **[#5259 PR][pr5259]** `Add hosted single‑tenant volume profile`  
  为单租户 Railway 部署增加挂载卷/libSQL 存储的 profile。

- **[#5252 PR][pr5252]** `fix(reborn): persist Slack host conversation bindings`  
  通过 durable conversation 服务路由 Slack host‑beta 绑定。

- **[#5094 PR][pr5094]** `feat(reborn): /v1/models, model validation, external‑tool gate foundation`  
  OpenAI 兼容面演进，稳定了后续外部工具注册的基础。

**社区诉求总结**：
1. **审批闸门是 Riven 体验的血压计**——多条 Issue 反复触及审批拒绝/始终允许/多次询问之间的行为不一致。
2. **Memory 与 capability‑policy 是下一阶段主战场**——社区（尤其是 @zetyquickly、@BenKurrek）正用"史诗 + 跟踪子任务"方式有节奏地分解交付。
3. **每日基准失败分析公开透明**（@pranavraja99 的 daily failure taxonomy）说明项目把"健康度可见"作为一等公民。

[issue5276]: https://github.com/nearai/ironclaw/issues/5276
[issue5192]: https://github.com/nearai/ironclaw/issues/5192
[issue5242]: https://github.com/nearai/ironclaw/issues/5242
[issue5243]: https://github.com/nearai/ironclaw/issues/5243
[issue5196]: https://github.com/nearai/ironclaw/issues/5196
[issue4980]: https://github.com/nearai/ironclaw/issues/4980
[issue5219]: https://github.com/nearai/ironclaw/issues/5219
[issue5261]: https://github.com/nearai/ironclaw/issues/5261
[issue5268]: https://github.com/nearai/ironclaw/issues/5268
[issue5267]: https://github.com/nearai/ironclaw/issues/5267
[issue5273]: https://github.com/nearai/ironclaw/issues/5273
[issue5272]: https://github.com/nearai/ironclaw/issues/5272
[issue5266]: https://github.com/nearai/ironclaw/issues/5266
[issue5264]: https://github.com/nearai/ironclaw/issues/5264
[issue5260]: https://github.com/nearai/ironclaw/issues/5260
[pr5205]: https://github.com/nearai/ironclaw/pull/5205
[pr5277]: https://github.com/nearai/ironclaw/pull/5277
[pr5275]: https://github.com/nearai/ironclaw/pull/5275
[pr5269]: https://github.com/nearai/ironclaw/pull/5269
[pr5259]: https://github.com/nearai/ironclaw/pull/5259
[pr5252]: https://github.com/nearai/ironclaw/pull/5252
[pr5094]: https://github.com/nearai/ironclaw/pull/5094

---

## 5. Bug 与稳定性

按严重程度排序：

### 严重 🔴
- **[#5276][issue5276]** 自动化 0% 成功率，"N

[issue5210]: https://github.com/nearai/ironclaw/issues/5210
[issue5208]: https://github.com/nearai/ironclaw/issues/5208
[issue5221]: https://github.com/nearai/ironclaw/issues/5221
[issue5173]: https://github.com/nearai/ironclaw/issues/5173
[issue5191]: https://github.com/nearai/ironclaw/issues/5191
[issue5229]: https://github.com/nearai/ironclaw/issues/5229

---

## 6. 功能请求与路线图信号

**1. Capability‑Policy 四维度体系（Reborn 主线）**  
Epic [#5261][issue5261] 与姊妹 Issue 描述了"公司部署 → 管理员共享工具/技能 → 按用户授权"的完整闭环。当前已落地或正在 PR 的子项：
- 可用性解析器：[#5277 PR][pr5277]
- Admin REST 面：[#5268][issue5268]
- 四维度策略存储：[#5273][issue5273]
- 本地多用户认证：[#5272][issue5272]
- DB 角色门控：[#5270 PR][pr5270]
- 每能力默认策略源：[#5263 PR][pr5263]

**判断**：该体系极有可能在下一里程碑（Reborn 多租户 GA）中作为核心特性发布。

**2. Memory as Userland Extension**  
[#5205 PR][pr5205] 是底层架构，[#5264][issue5264] 与 [#5260][issue5260] 规划了上层语义搜索、自学习、过期与自策展。**判断**：Memory 是 Reborn 的"第二增长曲线"，短期会先完成 native SQL 存储端口与默认翻转。

**3. 持久化层性能**  
写合并 [#5257][pr5257]、心跳写后移 [#5253][issue5253]、CAS 统一 [#5234][pr5234]、单租户卷 profile [#5259][pr5259] 构成一组性能/稳定性组合拳。**判断**：这些是"让 Reborn 在单租户生产环境站稳"的必备项，优先级高。

**4. WebUI‑v2 体验**  
时间戳一致性 [#5212][issue5212]、自动滚动 [#5211][issue5211]、审批卡快捷方式 [#5246][issue5246]、日志链接修复 [#5275][pr5275]。**判断**：属于"最后一公里"打磨，会随每次迭代快速收敛。

**5. Engine v2 契约对齐**  
[#3669 PR][pr3669] 已合并，后续可能继续补齐 channel‑supplied 元数据在更多工具链路上的透传。

[issue5212]: https://github.com/nearai/ironclaw/issues/5212
[issue5211]: https://github.com/nearai/ironclaw/issues/5211
[issue5246]: https://github.com/nearai/ironclaw/issues/5246
[pr5263]: https://github.com/nearai/ironclaw/pull/5263
[pr5270]: https://github.com/nearai/ironclaw/pull/5270

---

## 7. 用户反馈摘要

从 Issues 评论与复现步骤中提炼的真实痛点：

**痛点**
- **审批闸门体验割裂**：拒绝后仍被重复询问 [#5192][issue5192]；"始终允许"不生效 [#5243][issue5243]；"每次询问"触发二次审批 [#5196][issue5196]。用户明确表达"反复操作同一工具时体验极差"。
- **自动化 0% 成功率**：每日 PR Digest 自动化完全失败，用户无法获得预期服务 [#5276][issue5276]。
- **WebUI 交互细节**：消息输入框在等待响应时冻结 [#5208][issue5208]；新消息不自动滚动 [#5211][issue5211]；时间戳时隐时现 [#5212][issue5212]；发送新消息时审批闸口导致状态丢失与重复警告 [#5210][issue5210]。
- **内部调试信息泄露**：技能编排/上下文预算等内部消息直接暴露在聊天 UI [#5191][issue5191]。
- **空态引导缺失**：自动化页面无创建入口、无示例提示 [#4980][issue4980]。
- **权限模型错位**：普通 WebUI 用户被要求 operator 权限 [#5242][issue5242]。

**满意 / 正向信号**
- 每日基准失败分析（@pranavraja99）被持续更新，社区对"健康度可见"给予正向反馈。
- Dogfooding 机制（#5119）将内部使用中发现的问题快速闭环，多个 Issue 在 24‑48 小时内被关闭。
- 跨月余的巨型 PR #3669 最终合并，用户评论"契约对齐终于完成"。

**使用场景**
- 本地 Reborn WebUI 作为日常工作代理（dogfooding）。
- 通过 Slack 触发式运行接收通知。
- 通过 Google Drive 下载并阅读 PDF/Office 文档。
- 通过自动化监控仓库事件（issues/PRs/commits）。

---

## 8. 待处理积压

以下重要 Issue / PR 长期未响应或仍处 OPEN，建议维护者关注：

- **[#5205 PR][pr5205]** `feat(memory): model memory as a userland extension`  
  **XL 规模**，已开放多日，是 Memory 路线的基座。建议尽快安排评审资源，避免阻塞 #5264、#5260 等后续工作。

- **[#5094 PR][pr5094]** `feat(reborn): /v1/models, model validation, external‑tool gate foundation`  
  自 6 月 19 日开放至今，涉及 OpenAI 兼容面，影响外部工具生态接入。

- **[#5276][issue5276]** 自动化 0% 失败  
  影响所有依赖定时任务的用户，建议提升优先级。

- **[#5196][issue5196]** "每次询问"触发二次审批  
  关键一致性缺陷，尚无关联 PR。

- **[#5192][issue5192]** 拒绝后仍收到审批请求  
  与 #5196 同属审批幂等性问题，建议合并处理。

- **[#5253][issue5253]** 心跳写后移  
  性能优化项，尚无关联 PR。

- **[#5221][issue5221] / [#5173][issue5173]** 每日失败分类 backlog  
  持续更新的基准失败清单，部分候选修复尚未进入 PR 阶段。

- **[#5219][issue5219]** 活动身份不变量加固  
  跟进 PR #5145 的后续，防止未来路径破坏身份一致性。

- **[#5229][issue5229]** Durable capability display previews 在 WebUI 运行中使用运行时所有者作用域  
  已关闭但根因可能需进一步验证。

**维护者建议**：本周可优先收敛审批闸门一致性（#5192、#5196、#5243）与自动化失败（#5276），再推进 Memory 巨型 PR 的评审。Capability‑policy 系列可按现有节奏分片交付。

---

*数据来源：IronClaw GitHub 仓库 (github.com/nearai/ironclaw)，截至 2026-06-26。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-06-26 | 数据来源：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 项目活跃度**极高**。过去 24 小时内共处理 10 项更新（1 项 Issue + 9 项 PR），所有 9 项 PR 均以合并或关闭完成，流转效率出色。社区贡献者表现积极，提交涉及渲染层、主进程、OpenClaw 框架、多业务模块（Cowork）及构建流程，覆盖修复、功能与体验优化多维度。无新版本发布，处于日常迭代与修复推进阶段。今日仓内无新增待合并 PR，整体健康。

---

## 2. 版本释放

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 9 项 PR 涵盖了多个核心模块的开发和维护：

### 🔧 修复与改进（Fix）

| PR | 模块 | 内容 | 状态 |
|---|---|---|---|
| [#2206](https://github.com/netease-youdao/LobsterAI/pull/2206) | renderer, main | Fix(settings): 修复开机自启状态，与操作系统登录项同步 | ✅ 已关闭 |
| [#2204](https://github.com/netease-youdao/LobsterAI/pull/2204) | renderer, cowork | 解析块级 proposed_plan 标签，修复 GLM 计划模式标签泄露问题 | ✅ 已关闭 |
| [#2203](https://github.com/netease-youdao/LobsterAI/pull/2203) | build, main, openclaw | 预编译本地扩展入口，优化打包校验 | ✅ 已关闭 |
| [#2202](https://github.com/netease-youdao/LobsterAI/pull/2202) | main, openclaw | 保持浏览器插件白名单受限，避免浏览器功能被误禁 | ✅ 已关闭 |
| [#2201](https://github.com/netease-youdao/LobsterAI/pull/2201) | main | 助手回复最终同步时去重，防止 GLM 回复重复 | ✅ 已关闭 |
| [#2199](https://github.com/netease-youdao/LobsterAI/pull/2199) | renderer, main | 父会话完成后续继续轮询运行中的子代理 | ✅ 已关闭 |
| [#2200](https://github.com/netease-youdao/LobsterAI/pull/2200) | main | 防止 Qwen 计划模式流抖动导致的重复 Plan 消息 | ✅ 已关闭 |
| [#2198](https://github.com/netease-youdao/LobsterAI/pull/2198) | docs, main, openclaw | 预装 QQ 和 Discord 插件，修复 NIM 可变索引 | ✅ 已关闭 |

### 🎨 体验优化（Style）

| PR | 模块 | 内容 |
|---|---|---|
| [#2205](https://github.com/netease-youdao/LobsterAI/pull/2205) | renderer, cowork | 优化计划模式图标，适配主题感知 SVG |

**今日重要推进：**
- 修复开机自启状态与不同操作系统（macOS/Windows/Linux）同步的历史问题
- 优化 OpenClaw 框架下插件加载与打包流程
- 修复多助手模型（GLM/Qwen）在计划模式下的消息重复与标签泄露
- 完善子代理轮询机制，确保父会话结束后子代理输出不丢失
- 官方 QQ 和 Discord 频道插件进入预装流程

---

## 4. 社区热点

**今日讨论聚焦 Issue：**

### [#1392 定时任务开关点击无反应](https://github.com/netease-youdao/LobsterAI/issues/1392)

- **状态：** OPEN（已标记 stale）
- **创建时间：** 2026-04-03 | **最近更新：** 2026-06-25
- **互动：** 👍0 | 💬 1 条评论
- **作者反馈：** 定时任务设置并运行后，部分任务开关无法点击关闭（非全部，仅个别任务存在此问题）
- **问题定性：** 该 Issue 涉及 UI 交互层_bug，可能与特定任务类型绑定或事件处理竞争有关。尽管已被标记为 stale，但 6 月 25 日仍有新活动，说明此问题尚未完全解决。无对应修复 PR 出现，可能需要进一步复现与定位。

---

## 5. Bug 与稳定性

| 严重级 | Issue/PR | 模块 | 描述 | Fix PR | 状态 |
|---|---|---|---|---|---|
| 🔴 高 | [#1392](https://github.com/netease-youdao/LobsterAI/issues/1392) | UI/设置 | 部分定时任务开关点击无反应，无法关闭任务 | ❌ 未修复 | OPEN |
| 🟡 中 | [#2204](https://github.com/netease-youdao/LobsterAI/pull/2204) | cowork | GLM 计划模式下 proposed_plan 标签泄露至消息正文 | ✅ 已合并 | CLOSED |
| 🟡 中 | [#2200](https://github.com/netease-youdao/LobsterAI/pull/2200) | main | Qwen 计划模式流抖动导致 Plan 消息重复 | ✅ 已合并 | CLOSED |
| 🟡 中 | [#2201](https://github.com/netease-youdao/LobsterAI/pull/2201) | main | 助手回复历史同步重复 GLM 消息 | ✅ 已合并 | CLOSED |
| 🟡 中 | [#2199](https://github.com/netease-youdao/LobsterAI/pull/2199) | cowork | 父会话结束后子代理轮询停止导致输出丢失 | ✅ 已合并 | CLOSED |
| 🟢 低 | [#2206](https://github.com/netease-youdao/LobsterAI/pull/2206) | main | 开机自启状态与 OS 不同步（含 Windows 历史参数清理） | ✅ 已合并 | CLOSED |
| 🟢 低 | [#2202](https://github.com/netease-youdao/LobsterAI/pull/2202) | openclaw | 浏览器插件被 allowlist 误禁 | ✅ 已合并 | CLOSED |

**小结：** 1 项高优先级 UI Bug (#1392) 仍处于 OPEN 状态且已 stale 近 3 个月，仅 1 条评论且无修复 PR，建议维护者确认是否可复现或考虑关闭。

---

## 6. 功能请求与路线图信号

本期 PR 透露的项目方向信号：

- **QQ & Discord 频道支持 ([[#2198](https://github.com/netease-youdao/LobsterAI/pull/2198)])：** OpenClaw 框架内预装官方 QQ 和 Discord 频道插件，标志着项目正加速**多平台通信集成**，未来可能支持更多 Messenger。
- **OpenClaw 插件体系强化 ([[#2202](https://github.com/netease-youdao/LobsterAI/pull/2202)], [[#2203](https://github.com/netease-youdao/LobsterAI/pull/2203)])：** 插件白名单、预编译入口、打包校验等改进，表明插件系统正在向**生产级稳定性**演进。
- **多模型计划模式优化 ([[#2204](https://github.com/netease-youdao/LobsterAI/pull/2204)], [[#2200](https://github.com/netease-youdao/LobsterAI/pull/2200)])：** 针对 GLM 和 Qwen 的计划模式消息处理持续打磨，暗示**计划模式（Plan Mode）** 是近期重点打磨的核心交互能力。
- **子代理架构完善 ([[#2199](https://github.com/netease-youdao/LobsterAI/pull/2199)])：** 子代理轮询机制的修复说明多 Agent 协作场景正在增多，**子代理（Subagent）** 能力将持续增强。

---

## 7. 用户反馈摘要

本期可提取的用户反馈较为有限，主要来自 Issue #1392：

- **痛点：** 定时任务开关点击失灵，影响任务管理体验。用户反馈"大部分开关正常，仅部分无法点击"，暗示可能与特定任务类型或创建时序有关。
- **使用场景：** 用户依赖定时任务功能进行自动化管理，开关失灵直接影响任务启停控制。
- **满意度信号：** 该 Issue 已存在近 3 个月且仅 1 条评论，可能表明受影响用户规模有限，或已有 workaround。但 stale 标签下仍有 6 月 25 日的活动，说明问题未彻底消失。

---

## 8. 待处理积压

| Issue/PR | 等待时长 | 优先级 | 建议 |
|---|---|---|---|
| [#1392 定时任务开关无反应](https://github.com/netease-youdao/LobsterAI/issues/1392) | ~84 天（自 4 月 3 日） | 🔴 高 | 已标记 stale，建议维护者：① 尝试复现并定位根因；② 若无法复现，向请求者索取更多信息后关闭；③ 若确认修复，关联 PR 关闭 |

**整体评估：** 项目积压非常低，仅 1 项长期未解决 Issue。今日 9 项 PR 全部完成合并/关闭，无新增待处理项，项目维护节奏优秀。

---

*本报告由 OWL 基于 2026-06-26 的 GitHub 公开数据生成。*

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

# CoPaw 项目动态日报 — 2026-06-26

## 1. 今日速览

CoPaw 项目保持高活跃度，过去 24 小时共处理 **27 条 Issues**（17 条新开/活跃、10 条已关闭）和 **50 条 PR**（27 条待合并、23 条已合并/关闭）。社区贡献者参与度较高，涉及前端 UI、浏览器自动化、上下文管理、模型提供商集成等多个维度。无新版本发布，但多个重要 bug 修复和功能 PR 正在推进中，项目整体处于稳定迭代状态。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的重要 PR 及其推进情况：

| PR | 状态 | 内容 |
|---|---|---|
| [#5443](https://github.com/agentscope-ai/QwenPaw/pull/5443) | 已合并 | 修复 TUI 在 AgentScope 2.0 迁移后 ACP 命令和内联审批功能丢失的问题，恢复了 `/clear`、`/compact`、`/skills`、`/model` 等斜杠命令 |
| [#5471](https://github.com/agentscope-ai/QwenPaw/pull/5471) | 已合并 | 通用化 match pattern 匹配模式 |
| [#5534](https://github.com/agentscope-ai/QwenPaw/pull/5534) | 已合并 | 为 README 添加 trending badge |
| [#5472](https://github.com/agentscope-ai/QwenPaw/issues/5472) | 已关闭 | GLM-5.x 模型通过 OpenCode Go 套餐调用时的 `json_schema_converter.cc` 编译错误已解决 |
| [#4887](https://github.com/agentscope-ai/QwenPaw/issues/4887) | 已关闭 | 钉钉私有部署自定义 endpoint 需求已合并 |
| [#2188](https://github.com/agentscope-ai/QwenPaw/issues/2188) | 已关闭 | 自定义 OpenAI 兼容提供商支持 Responses format 的需求已合入 |
| [#904](https://github.com/agentscope-ai/QwenPaw/issues/904) | 已关闭 | Discord 频道下载附件到本地以保持频道间一致性 |

**关键进展方向：** AgentScope 2.0 迁移后的功能恢复（TUI 命令、Mission Mode 集成）是当前重点；浏览器自动化进程清理（#5536 修复 #5520）和 MiniMax-M3 媒体请求缓存错误（#5535）是今日两个重要的 bug fix PR。

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)** — 自定义 OpenAI 兼容提供商（如 OMLX）不支持 function calling（8 条评论）
   - **诉求：** 用户期望手动添加的自定义提供商能像原生 Ollama 一样完整支持工具调用，目前仅返回文本。

2. **[#2733](https://github.com/agentscope-ai/QwenPaw/issues/2733)** — 浏览器自动化后 Chrome 进程未正确关闭，导致系统资源耗尽（6 条评论）
   - **诉求：** 长期存在的资源泄漏问题，影响使用 `browser_use` 的自动化工作流用户。

3. **[#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480)** — Console 长消息排版错乱（5 条评论）
   - **诉求：** Web 前端接收长 Markdown 消息时格式崩溃，需切换选项卡才恢复，影响日常使用体验。

4. **[#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)** — 对话思考逻辑进入死循环（5 条评论）
   - **诉求：** Agent 推理时陷入无限循环，缺乏中断机制。

5. **[#5455](https://github.com/agentscope-ai/QwenPaw/issues/5455)** — 建议将当前时间改为每用户消息前缀而非放入 system context（4 条评论）
   - **诉求：** 改善 prompt cache 命中率和长时间会话中的时间准确性。已有 PR [#5499](https://github.com/agentscope-ai/QwenPaw/pull/5499) 推进此改动。

### 关注最多的 PRs

- **[#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)** — `scroll` context manager：全新的上下文管理策略，将完整对话持久化到 SQLite，支持按需召回历史轮次，是对现有压缩策略的替代方案。
- **[#5540](https://github.com/agentscope-ai/QwenPaw/pull/5540)** — 自动记忆系统重构：基于 turn 标记的追踪机制替代 reply_id，默认记忆间隔改为 5 轮。
- **[#5193](https://github.com/agentscope-ai/QwenPaw/pull/5193)** — Slack 频道集成：完整的 Socket Mode 支持、多模态消息和流式输出。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | 大会话文件（>500KB）打开导致前端崩溃，页面完全无法渲染 | ⚠️ 开放 | 暂无 |
| [#5520](https://github.com/agentscope-ai/QwenPaw/issues/5520) | `browser_use stop()` 后 Chrome renderer 进程残留，反复启停导致内存泄漏（#2733 回归） | ⚠️ 开放 | [#5536](https://github.com/agentscope-ai/QwenPaw/pull/5536) 已提交 |
| [#5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) | MiniMax-M3 图片安全审核错误被缓存为 `rejects_media=True`，后续视觉请求被错误剥离 | ⚠️ 开放 | [#5535](https://github.com/agentscope-ai/QwenPaw/pull/5535) 已提交 |
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | 对话思考逻辑进入死循环 | ⚠️ 开放 | 暂无 |

### 🟡 中严重度

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | Console 长消息排版错乱（CSS layout recalculation 缺失） | ⚠️ 开放 | [#5538](https://github.com/agentscope-ai/QwenPaw/pull/5538) 已提交 |
| [#5541](https://github.com/agentscope-ai/QwenPaw/issues/5541) | Ollama cloud 模型配置后无法访问 | ⚠️ 开放 | 暂无 |
| [#5528](https://github.com/agentscope-ai/QwenPaw/issues/5528) | Linux 下 IME-wrapped 默认浏览器导致 `browser_use` 启动超时 | ⚠️ 开放 | [#5526](https://github.com/agentscope-ai/QwenPaw/pull/5526) 已提交 |
| [#5539](https://github.com/agentscope-ai/QwenPaw/issues/5539) | 心跳任务 120 秒硬编码超时被误判为用户打断 | ⚠️ 开放 | 暂无 |
| [#5508](https://github.com/agentscope-ai/QwenPaw/issues/5508) | Windows 本地版 `send_file_to_user` 文件预览链接返回 404 | ✅ 已关闭 | 暂无 |
| [#5501](https://github.com/agentscope-ai/QwenPaw/issues/5501) | 宽屏模式下聊天窗口发送按钮对不齐 | ✅ 已关闭 | 暂无 |

### 🟢 低严重度

| Issue | 描述 | 状态 |
|---|---|---|
| [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | Model Configuration 页面搜索框被浏览器误识别为凭证字段触发自动填充 | ⚠️ 开放 |
| [#5529](https://github.com/agentscope-ai/QwenPaw/issues/5529) | `/new` 命令与技能自动补全冲突（如 `/news`） | ⚠️ 开放 |
| [#5512](https://github.com/agentscope-ai/QwenPaw/issues/5512) | 模型提供商统计显示数量与实际不符 | ⚠️ 开放，[#5537](https://github.com/agentscope-ai/QwenPaw/pull/5537) 已提交 |
| [#5497](https://github.com/agentscope-ai/QwenPaw/issues/5497) | 内网安装后客户端白屏 | ⚠️ 开放 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 信号判断 |
|---|---|---|
| **工具结果大小硬上限**（防御上下文爆炸） | [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) | 有明确问题描述和代码位置，可能纳入下一版本的稳定性改进 |
| **通过 pip 从 PyPI 安装插件** | [#5484](https://github.com/agentscope-ai/QwenPaw/issues/5484) | 改善开发者体验，与插件生态发展方向一致 |
| **模型提供商内自定义排序** | [#5399](https://github.com/agentscope-ai/QwenPaw/pull/5399) | PR 已提交，实现拖拽排序 + 后端持久化，合并可能性高 |
| **Slack 频道集成** | [#5193](https://github.com/agentscope-ai/QwenPaw/pull/5193) | 完整实现，支持 Socket Mode + 多模态 + 流式，覆盖新渠道需求 |
| **DataPaw 数据分析插件** | [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | 12 个 BI 技能，标准插件结构，扩展平台能力 |
| **`cron update` CLI 命令** | [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | 后端已有 API，前端 CLI 补全，合并可能性高 |
| **Tauri 系统托盘行为** | [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) | 替代旧 pystray 方案，面向桌面端用户体验升级 |
| **AgentScope 2.0 动态模型切换** | [#5527](https://github.com/agentscope-ai/QwenPaw/issues/5527) | 限流/不可用时自动切换备用模型，企业级需求 |
| **Mission Mode 集成 Runtime v2** | [#5442](https://github.com/agentscope-ai/QwenPaw/pull/5442) | PR 已提交，修复迁移断点，合并可能性高 |
| **项目级 TUI 代码会话** | [#5448](https://github.com/agentscope-ai/QwenPaw/pull/5448) | 支持 `qwenpaw .` 绑定 ACP 会话到项目目录 |

---

## 7. 用户反馈摘要

### 痛点

- **浏览器自动化资源管理** 是长期痛点：#2733（Chrome 进程泄漏）尚未完全解决，#5520 又报告了 renderer 进程残留的回归问题。反复启停 browser_use 导致内存累积，影响生产环境稳定性。
- **前端健壮性**：长消息排版崩溃（#5480）和大会话文件白屏（#5479）严重影响日常使用，用户反馈"每次长消息输出都会复现"、"只能删除该会话才能继续使用"。
- **模型兼容性**：多个提供商（OMLX、MiniMax-M3、GLM-5.x）在 function calling、媒体输入、schema 编译等方面存在兼容性问题，用户需要更完善的 OpenAI 兼容提供商支持。
- **内网部署体验**：白屏问题（#5497）无错误提示，排查困难。

### 使用场景

- 企业用户通过钉钉私有部署接入（#4887）
- 数据分析场景需求强烈（DataPaw 插件 #4622）
- 定时任务用户需要更灵活的 cron 管理（#5210）和心跳任务超时控制（#5539）
- Linux 桌面用户遇到浏览器启动问题（#5528）

### 满意方面

- 社区贡献者活跃，多位 first-time-contributor 提交了高质量 PR（#5538、#5537、#5536、#5535、#5526）
- 钉钉自定义 endpoint、Discord 附件一致性等长期需求得到响应并关闭

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于开放状态，建议维护者关注：

| 项目 | 创建时间 | 状态 | 建议 |
|---|---|---|---|
| [#2733](https://github.com/agentscope-ai/QwenPaw/issues/2733) — Chrome 进程泄漏 | 2026-04-01 | 已关闭但 #5520 回归 | 需验证 #5536 修复是否彻底解决 |
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) — 对话死循环 | 2026-06-12 | ⚠️ 开放 | 5 条评论，无修复 PR，需评估是否需要超时/中断机制 |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) — 大会话文件前端崩溃 | 2026-06-24 | ⚠️ 开放 | 影响所有长会话用户，建议优先处理 |
| [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) — 工具结果大小硬上限 | 2026-06-20 | ⚠️ 开放 | 防御性架构改进，LLM 502 时上下文爆炸风险 |
| [#5523](https://github.com/agentscope-ai/QwenPaw/issues/5523) — `spawn_subagent` 在 Runtime 2.0 工具注册表中缺失 | 2026-06-25 | ⚠️ 开放 | AgentScope 2.0 迁移回归，文档有但功能不可用 |
| [#5527](https://github.com/agentscope-ai/QwenPaw/issues/5527) — AgentScope 2.0 动态模型切换 | 2026-06-25 | ⚠️ 开放 | 企业级高可用需求 |
| [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) — Tauri 系统托盘 | 2026-05-05 | ⚠️ 审查中 | 已开放近 2 个月，需审查反馈 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) — DataPaw 数据分析插件 | 2026-05-22 | ⚠️ 审查中 | 12 个 BI 技能，审查超过 1 个月 |
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) — Scroll context manager | 2026-06-19 | ⚠️ 审查中 | 全新上下文管理策略，架构影响较大 |

---

**总结：** CoPaw 项目今日保持高活跃度，社区贡献质量良好。当前重点应关注：(1) 浏览器自动化进程清理的回归验证；(2) 前端大会话/长消息稳定性问题的修复优先级；(3) AgentScope 2.0 迁移后的功能完整性（spawn_subagent、Mission Mode）；(4) 积压超过 1 个月的审查中 PR 需要及时反馈。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-26

---

## 1. 今日速览

ZeroClaw 今日活跃度处于**高位**：过去 24 小时共产生 49 条 Issue 更新（新开/活跃 36 条，关闭 13 条）和 50 条 PR 更新（待合并 49 条，仅 1 条已合并/关闭），显示社区贡献密集但合并吞吐偏紧。议题焦点集中在**安全加固**（供应链签名、delegate 权限绕过、Wasm 插件沙箱）、**v0.8.x 稳定性修复**（MCP 孤儿进程泄漏、Telegram 多图处理、provider 回退）以及**架构演进方向**（Wasm-first 运行时、统一插件目录、Goal Mode）。无新版本发布，当前主线仍处于 v0.8.2/v0.8.3 密集迭代窗口。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日仅 1 条 PR 完成合并/关闭，合并吞吐极低，大量贡献积压待审。已关闭的 Issue 多为近期修复落地：

- **#7873 [CLOSED]** — Telegram media groups 应合并为单条 agent 请求（而非逐张分发），已通过关联 PR 修复并关闭。
- **#8236 [CLOSED]** — `voice_wake.rs` 中 `ChannelMessage` 字面量缺少 `subject` 字段导致 `--all-features` 编译失败，已修复。
- **#7087 [CLOSED]** — `zeroclaw models set` 错误地路由到 doctor 而非写入配置，已修复。
- **#8154 [CLOSED]** — Kimi Code (Moonshot) 端点指向已失效的 `api.moonshot.cn/coder/v1`（404），已修正为 `api.kimi.com/coding/v1`。
- **#6714 [CLOSED]** — skill audit 中 `remote-markdown-link` 检查误报率过高，已移除或放宽。

**关键待合并 PR 推进方向：**

| PR | 方向 | 状态 |
|---|---|---|
| [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) | skills install/list/remove 改为 bundle-aware，修复多 agent 运行时技能加载 | 待合并 |
| [#8329](https://github.com/zeroclaw-labs/zeroclaw/pull/8329) | 修复原生工具调用后 narration 被错误抑制 | 待合并 |
| [#8317](https://github.com/zeroclaw-labs/zeroclaw/pull/8317) | 修复 provider 在 429/Retry-After 后的冷却逻辑 | 待合并 |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) | Skills 默认改为 compact 注入，弃用 full 模式 | 待合并 |
| [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) | 实现 RFC #8170：Web 仪表盘内一键升级+重启 | 待合并 |
| [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) | SOP 带外审批平面 + fail-closed 超时（SOP 里程碑 EPIC C） | 待合并 |

---

## 4. 社区热点

以下 Issue 为今日评论最活跃、讨论最深入的议题：

### [#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
- **评论 11 条**，当前最热议题
- **诉求**：引入 Work Lanes 机制自动化 issue/PR 路由，减少维护者手动分类负担；同步清理标签体系
- **状态**：已 Accepted，0.8.0-beta-1 起滚动推进中（Rev. 4）

### [#8177 — RFC: Supply Chain Signing（硬件 PGP + SLSA 溯源）](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
- **评论 8 条**
- **诉求**：为容器镜像和发布二进制引入硬件-backed PGP 密钥、多方签名、离线签名及 SLSA 溯源，延续 #7675 Hardened CI 管线
- **状态**：Blocked，待 maintainer review

### [#6165 — RFC: 通过外部集成精简 ZeroClaw 核心](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
- **评论 5 条**
- **诉求**：将 gws-cli、jira、github 等专用集成代码移除，改为通过 skills/MCP 外部交互，保持核心轻量
- **状态**：Accepted，Blocked

### [#8238 — Feature: 独立 delegate 模式](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)
- **评论 4 条**
- **诉求**：允许 specialist agent 在自身策略和工具集下运行，而非始终受限于父级过滤后的工具注册表
- **状态**：In-progress

### [#5903 — Bug: MCP stdio 子进程在 daemon 心跳中累积泄漏](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)
- **评论 4 条**，P1 高危
- **诉求**：`heartbeat.enabled=true` 时每个心跳 tick 泄漏一个 stdio 子进程，30 分钟间隔下约 48 个孤儿进程/天
- **状态**：Accepted，无 fix PR 关联

### [#5514 — Bug: Telegram 发送多张图片时 agent 请求重复追加](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)
- **评论 4 条**
- **诉求**：Telegram 多图应合并为单条消息，当前每张图触发独立 LLM 请求导致重复输出
- **状态**：Accepted，Help wanted

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

### S0 — 数据丢失/安全风险

| Issue | 描述 | Fix PR |
|---|---|---|
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | **delegate 绕过父级 tool allowlist** — 子 agent 可调用父策略排除的工具 | 无，刚报告 |

### S1 — 工作流阻断

| Issue | 描述 | Fix PR |
|---|---|---|
| [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) | Kimi Code 端点 404 回归 | 已关闭（修复合并） |

### S2 — 降级行为

| Issue | 描述 | Fix PR |
|---|---|---|
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio 孤儿进程泄漏（每心跳一个） | 无 |
| [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) | fill-translations 残留陈旧翻译条目导致泄露文本重新写入 | 无 |
| [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) | skills install/list/remove 写入 data_dir 但多 agent 运行时未加载 | [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) 待合并 |
| [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) | voice_wake.rs 缺少 subject 字段导致编译失败 | 已关闭 |
| [#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327) | 原生工具调用中 `[IMAGE:data:...]` 标记以纯文本发送，膨胀 token 计数 | 无 |

### S3 — 轻微问题

| Issue | 描述 | Fix PR |
|---|---|---|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram 多图重复追加 | 无 |

**关键回归**：#8279 delegate 权限绕过是新发现的 S0 漏洞，建议优先分配维护者跟进。

---

## 6. 功能请求与路线图信号

### 已 Accepted / In-progress 的 RFC（高概率纳入近期版本）

| RFC | 方向 | 关联 PR/Tracker |
|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | Work Lanes + 标签清理 | 滚动推进中 |
| [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | Web 仪表盘内升级+重启 | [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal Mode — 有界自主会话工作模式 | 无 PR |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | SOP 里程碑：daemon-owned 控制平面 5/5 | [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) |
| [#8181](https://github.com/zeroclaw-labs/zeroclaw/issues/8181) | v0.8.2 发布支持与非插件队列 | 多 PR 并行 |

### 架构级讨论（中长期方向）

- **[#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)** — OCI 兼容容器仓库作为 WASM 插件存储/发现机制
- **[#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)** — Wasm-first 插件运行时（默认开启、能力强制、签名分发）
- **[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)** — 用 Rust→Wasm 框架替换 React/Vite Web UI 构建
- **[#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187)** — 能力门控的 WASI 硬件宿主函数（GPIO/SPI/I2C/USB）
- **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)** — "Everything is a plugin" — 统一插件目录
- **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — 通过外部集成精简核心

### 用户侧功能需求

- **[#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)** — 支持 OpenRouter `fallback_models` 数组配置，当前仅发送单一模型字符串
- **[#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)** — 独立 delegate 模式（specialist agent 使用自身策略）
- **[#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743)** — 显式 target-profile 权限的 delegate handoff

---

## 7. 用户反馈摘要

**痛点：**

1. **MCP 孤儿进程泄漏**（[#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)）— 长期运行 daemon 的用户（尤其是配置了 stdio MCP server 的）会持续累积孤儿进程，影响系统稳定性。该 Issue 自 4 月报告至今未修复，用户等待时间较长。

2. **Telegram 多图体验差**（[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)）— 发送多张图片时 agent 输出重复消息，影响日常使用流畅度。标记 Help wanted 但无社区 PR 响应。

3. **Skills 安装后无法在多 agent 环境加载**（[#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)）— `skills install` 写入 `data_dir` 但运行时从 per-agent workspace + bundle 加载，导致"安装却不可用"的困惑。已有 PR #8335 待合并。

4. **delegate 安全边界**（[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)）— 子 agent 可绕过父级工具白名单，对依赖权限隔离的企业用户构成直接风险。

5. **OpenRouter 回退不可用**（[#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)）— 用户无法利用 OpenRouter 内置的模型故障转移能力，影响生产环境可用性。

**满意/正向信号：**

- RFC #6808 Work Lanes 获得 11 条评论的热烈讨论，社区对自动化项目管理的方向表示认可
- SOP 里程碑（[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)）推进到 5/5 目标，多 PR 并行，用户对 daemon-owned 控制平面期待较高
- Goal Mode RFC（[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)）获 👍 反应，显示用户对"有界自主会话"概念兴趣浓厚

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应或积压严重，建议维护者关注：

### 高危 Issue 无 Fix PR

| Issue | 创建日期 | 说明 |
|---|---|---|
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) — MCP stdio 孤儿进程泄漏 | 2026-04-19 | 2 个月未修复，P1 |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) — delegate 权限绕过 | 2026-06-24 | S0 漏洞，刚报告 |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — Telegram 多图重复 | 2026-04-08 | 2.5 个月，Help wanted 无响应 |
| [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) — 翻译残留数据丢失 | 2026-06-25 | 新报告 |

### 长期 RFC（Blocked 或需 maintainer review）

| Issue | 创建日期 | 说明 |
|---|---|---|
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) — 供应链签名 | 2026-06-22 | Blocked, needs-maintainer-review |
| [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) — Wasm-first 插件运行时 | 2026-06-22 | Blocked, needs-maintainer-review |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) — OCI 容器仓库插件发现 | 2026-06-11 | needs-maintainer-review |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — 精简核心 | 2026-04-27 | Accepted 但 Blocked 2 个月 |

### PR 积压

当前 **49 条 PR 待合并**，仅 1 条完成合并/关闭，合并吞吐严重不足。建议维护者：

1. 优先审查安全相关 PR（[#8329](https://github.com/zeroclaw-labs/zeroclaw/pull/8329)、[#8317](https://github.com/zeroclaw-labs/zeroclaw/pull/8317)）
2. 推进 skills 修复（[#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335)、[#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313)）
3. 对长期 Blocked RFC 给出明确时间表或关闭决策

---

**项目健康度评估**：ZeroClaw 社区贡献活跃但维护瓶颈明显——PR 积压 49 条、多个高危 Issue 超期未修、架构 RFC 大量 Blocked。建议短期聚焦安全修复（#8279、#5903）和 v0.8.x 稳定性，中长期对 Wasm-first 和统一插件架构给出明确路线图决策。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*