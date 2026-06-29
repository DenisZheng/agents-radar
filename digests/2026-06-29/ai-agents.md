# OpenClaw 生态日报 2026-06-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-29 00:40 UTC

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

# OpenClaw 项目动态日报 — 2026-06-29

---

## 1. 今日速览

OpenClaw 今日活跃度极高，过去 24 小时共产生 **500 条 Issue 更新**（新开/活跃 438 条，关闭 62 条）和 **500 条 PR 更新**（待合并 434 条，已合并/关闭 66 条），社区参与度保持在高位。项目发布了 **v2026.6.11-beta.2** 版本，重点增强 Slack/Mattermost 通道控制能力。当前积压待合并 PR 数量偏高（434 条），维护者审查压力较大，尤其是多个标记为 `merge-risk: security-boundary` 和 `merge-risk: message-delivery` 的 PR 仍在等待深入审查。

---

## 2. 版本发布

### v2026.6.11-beta.2

**核心更新：**

- **更强大的通道控制能力：** 新增 Slack relay 模式、原生 Mattermost `/oc_queue` 支持，以及 per-DM 模型覆盖，使通道操作更易自动化和调优。（相关 PR: #94707, #95546, #95120）
- **贡献者：** @sjf-oa, @amknight, @xydigit-zt, @thomaszta, @gandalf-at-lerian

**迁移注意事项：** 该版本为 beta 预发版本，建议在生产环境部署前在测试通道验证 Slack relay 和 Mattermost 队列行为。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 说明 |
|---|---|---|
| **#97450** — fix(llm): preserve structured tool result text across providers | 已关闭 | 修复跨提供商（OpenAI Chat Completions、Anthropic 等）结构化工具结果文本被丢弃的问题，涉及 provider-serializer 层 |
| **#97591** — fix(agents): preserve compactionSummary in limitHistoryTurns | 待合并 | 修复 session 配置 historyLimit 后自动压缩摘要被静默丢弃的 bug，影响所有启用历史限制的会话 |
| **#97594** — fix(codex): cap native-subagent completion delivery retries | 待合并 | 修复 Codex 原生子代理完成通知无限重试问题（对应 issue #97593） |
| **#96469** — fix(config): fail closed when config is unreadable | 待合并 | 修复 `openclaw.json` 因权限问题（如 sudo 后 root 所有）不可读时配置加载器返回空快照导致后续写入覆盖的问题 |
| **#97157** — fix(clawhub): validate GitHub skill commit is immutable sha | 待合并 | 安全加固：ClawHub GitHub 技能安装路径验证 commit 字段为不可变 SHA，防止中间人攻击 |
| **#94106** — fix(secrets): scope env scrub to migrated providers' vars | 待合并 | 修复迁移一个 provider 的 API key 到 SecretRef 时可能静默删除另一个 provider 凭证的严重安全问题 |

**整体判断：** 项目在 **安全加固**（secrets 隔离、ClawHub SHA 验证、config 权限失败关闭）和 **通道稳定性**（UTF-16 截断修复批量出现）两个方向上推进明显。SQLite 存储迁移（Path 3, PR #96625）仍在进行中，尚未合并。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 👍 | 评论 | 核心诉求 |
|---|---|---|---|
| **#88838** — Track core session/transcript SQLite migration | 3 | 36 | 社区对 SQLite 存储迁移高度关注，希望彻底解决 sessions.json 膨胀和 OOM 问题 |
| **#77598** — Track live dev agent behavior and trajectory | 1 | 22 | 长期运行的开发代理行为监控，社区对 agent 可观测性有强需求 |
| **#88312** — Codex app-server turn-completion stall regression | 4 | 18 | 2026.5.27 版本回归导致 Codex 多工具调用失败，用户迫切需要修复 |
| **#79077** — Telegram bot-to-bot and guest-bot modes | **8** | 8 | 👍 最高，Telegram 新 bot 平台特性支持呼声强烈 |
| **#78308** — Channel-mediated approval for MCP tool calls | 1 | 13 | MCP 工具调用需要类似 shell-exec 的通道审批机制，安全诉求明显 |

### 关键 PR 讨论

- **#97478** — Migrate Tool Search gateway E2E into QA Lab flow（@RomneyDa）：将工具搜索 E2E 测试迁移到 QA Lab 框架，提升自动化测试覆盖率
- **#90226** — Preserve thread sessions across daily reset（@simplyclever914）：Discord 线程会话跨日重置保留，社区对会话连续性有明确期待

---

## 5. Bug 与稳定性

### 🔴 P1 — 严重/崩溃/数据丢失

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| **#88312** | Codex app-server turn-completion stall regression | OPEN | 无明确 fix PR，回归自 2026.5.27 |
| **#55334** | sessions.json unbounded growth causes gateway OOM | OPEN | 关联 PR #96625（SQLite 迁移），未合并 |
| **#74484** | Gateway pairing scope deadlock | OPEN | 无 fix PR |
| **#74586** | AM embedded run aborts memory_search tool calls | OPEN | 无 fix PR |
| **#76042** | Clean install of 2026.5.xx not possible | OPEN | 无 fix PR |
| **#76038** | Stuck Session Recovery 双重失效 | OPEN | 无 fix PR |
| **#75380** | provider-payload.jsonl / cache-trace.jsonl 无限增长 | OPEN | 无 fix PR |
| **#78493** | sudo openclaw update 导致混合所有权 | OPEN | 无 fix PR |
| **#77467** | MiniMax Portal OAuth token 无法自动刷新 | OPEN | 无 fix PR |

### 🟡 P2 — 功能异常/性能

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| **#77930** | Discord channel not loaded in 2026.5.4 regression | OPEN | 无 fix PR |
| **#77642** | lossless-claw: duplicate answers + synthetic errors | OPEN | 无 fix PR |
| **#77733** | Bare /new and /reset no longer trigger persona greeting | OPEN | 无 fix PR |
| **#77136** | WebChat fails to render some assistant messages | OPEN | 无 fix PR |
| **#79552** | Android node sends node.event before WS handshake | OPEN | 无 fix PR |
| **#94147** | macOS CLLocationManager 每秒重建导致 TCC 权限疯狂请求 | OPEN | 无 fix PR |

### 🟢 已修复/有关闭 PR

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| **#86827** | Group chat session stuck in 'failed' state drops messages | CLOSED | 有关联 PR |
| **#83184** | Heartbeat-driven agent replies leave pendingFinalDelivery stuck | CLOSED | 有关联 PR |
| **#92479** | opencode Zen provider ships no model catalog | CLOSED | 有关联 PR |
| **#97593** | Codex native subagent completion delivery infinite retry | — | **#97594**（待合并） |
| **#97590** | compactionSummary dropped in limitHistoryTurns | — | **#97591**（待合并） |

### 批量 UTF-16 截断修复（今日亮点）

开发者 @llagy009 今日集中提交了 **6 个 PR** 修复各通道的 UTF-16 边界截断问题：
- **#97600** — Discord model picker button labels
- **#97595** — Feishu comment prompt text
- **#97599** — Tlon approval message preview
- **#97598** — iMessage merged text
- **#97597** — Mattermost streaming draft text
- **#97596** — Matrix thread starter body

这些修复解决了 emoji 在字符边界处被截断导致畸形 UTF-16 的问题，影响所有使用 emoji 的通道交互。

---

## 6. 功能请求与路线图信号

### 高优先级功能需求

| Issue | 需求 | 信号强度 | 判断 |
|---|---|---|---|
| **#79902** | Companion-friendly SQLite transcript/session seams | 13 评论，关联 4 个子 issue（#79903-79905, #88838） | 🔮 **极可能纳入下一版本** — SQLite 迁移已在活跃开发中（PR #96625），这些 companion API 是迁移后的自然延伸 |
| **#78308** | Channel-mediated approval for MCP tool calls | 13 评论，需安全审查 | 🔮 **可能纳入** — 安全审批流程是平台核心能力，MCP 生态扩展的必然需求 |
| **#86881** | Gateway-lite mode without AI harness | 8 评论 | 🔮 **可能纳入** — 对确定性部署（webhook/cron）有明确场景，降低资源占用 |
| **#79077** | Telegram bot-to-bot / guest-bot modes | 👍 8（最高） | 🔮 **可能纳入** — 社区呼声高，Telegram 平台新特性 |
| **#74704** | SDK: stabilize app-client happy path | 8 评论 | 🔮 **持续进行** — SDK 稳定性是生态基础 |
| **#79047** | Preserve context across cross-backend model switches | 5 评论 | ⏳ 待评估 — 多后端会话连续性，技术复杂度较高 |

### 路线图判断

当前项目的核心路线似乎是：
1. **SQLite 存储迁移**（Path 3）— 解决 sessions.json 膨胀/OOM 的根因
2. **安全加固** — secrets 隔离、审批流程、ClawHub 验证
3. **通道能力扩展** — Slack/Mattermost/Telegram 深度集成
4. **QA Lab 自动化测试** — 测试基础设施升级

---

## 7. 用户反馈摘要

### 🔴 核心痛点

1. **Session 稳定性是最大痛点：** 多个长期 issue（#55334 OOM、#76038 stuck recovery、#88312 Codex stall、#86827 failed state）指向 session 状态管理的系统性问题。用户反馈 gateway 从"可用"到"需要重启"的时间越来越短。

2. **升级体验退化：** #76042 用户反馈"之前 20 分钟装完，现在 2026.4.29 等 5 分钟都启动不了"，#78493 反馈 sudo 升级后权限混乱。安装/升级流程的可靠性在退化。

3. **Discord 回归频发：** #77930（channel not loaded）、#77642（duplicate answers）、#77733（/new regression）— Discord 通道在 5.x 版本中反复出现回归，影响最大的用户群体。

4. **Telegram 功能落后：** #79077 用户明确表示 Telegram 新 bot 平台特性（guest bots、bot-to-bot）急需支持，👍 数最高。

### 🟢 满意点

- **beta 版本节奏稳定：** v2026.6.11-beta.2 持续迭代，通道控制能力（Slack relay、Mattermost 原生命令）获得正面反馈
- **UTF-16 截断集中修复：** 开发者 @llagy009 一次性修复 6 个通道的类似问题，响应速度获认可
- **安全审查流程完善：** 多个 PR 标记 `merge-risk: security-boundary` 等待审查，说明项目对安全变更持审慎态度

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue（按创建时间排序）

| Issue | 创建日期 | 标题 | 等待天数 | 建议行动 |
|---|---|---|---|---|
| **#45718** | 2026-03-14 | Session bloat: skillsSnapshot accumulated on every run | **107 天** | 与 SQLite 迁移关联，确认是否在 #96625 中一并解决 |
| **#49104** | 2026-03-17 | Telegram HTML parse_mode silently truncinates responses | **104 天** | 已关闭，确认修复版本 |
| **#49944** | 2026-03-18 | Control UI tool cards remain collapsed | **103 天** | 已关闭 |
| **#50248** | 2026-03-19 | sessions cleanup --fix-missing prunes fresh cron sessions | **102 天** | 已关闭 |
| **#55334** | 2026-03-26 | sessions.json unbounded growth causes OOM | **95 天** | 🔴 高优先级，关联 SQLite 迁移 PR |
| **#73182** | 2026-04-28 | Reasoning default silently flipped to on for Claude | **62 天** | 需要产品决策，成本影响大 |
| **#74484** | 2026-04-29 | Gateway pairing scope deadlock | **61 天** | 🔴 安全/认证核心流程 |
| **#75380** | 2026-05-01 | provider-payload.jsonl grows unbounded | **59 天** | 运维问题，需配置化轮转策略 |
| **#76042** | 2026-05-02 | Clean install not possible since 2026.5.xx | **58 天** | 🔴 新用户入门体验严重退化 |
| **#77930** | 2026-05-05 | Discord channel not loaded regression | **55 天** | 最大用户群体受影响 |

### ⚠️ 长期未合并的重要 PR

| PR | 创建日期 | 标题 | 等待天数 | 建议行动 |
|---|---|---|---|---|
| **#61960** | 2026-04-06 | docs: require i18n postprocess before skip | **84 天** | 等待作者更新 |
| **#78964** | 2026-05-07 | fix(feishu): preserve topic reply anchors | **53 天** | 等待作者更新 |
| **#87449** | 2026-05-27 | fix(mattermost): preserve text-block boundaries | **33 天** | ✅ Ready for maintainer look，建议优先审查 |
| **#88681** | 2026-05-31 | Make runtime plugin startup stalls name in-flight plugins | **29 天** | ✅ Ready for maintainer look |
| **#92294** | 2026-06-11 | fix(codex): keep OpenClaw exec when native surface has no environment | **18 天** | ✅ Ready for maintainer look |
| **#92957** | 2026-06-14 | feat(gateway): add agents.setDefault RPC method | **15 天** | ✅ Ready for maintainer look |

---

**日报总结：** OpenClaw 项目当前处于高活跃但高积压的状态。SQLite 存储迁移是解决多个核心痛点的关键路径，建议优先推进 #96625 的审查和合并。安全相关 PR（#94106、#97157）和 Discord 稳定性修复需要维护者重点关注。新用户的安装体验退化（#76042）和 gateway 稳定性问题（#55334、#76038）如不及时解决，可能影响项目口碑和用户留存。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告

**日期：2026-06-29 ｜ 覆盖项目：12 个**

---

## 1. 生态全景

2026 年 6 月 29 日，个人 AI 助手与自主智能体开源生态呈现**高活跃、高分化**的格局。头部项目（OpenClaw、ZeroClaw、Hermes Agent）日均 Issue/PR 更新量突破 50 条，社区贡献进入规模化阶段；腰部项目（NanoBot、CoPaw、IronClaw）聚焦特定能力突破（A2A 协作、钉钉集成、Reborn 框架）；尾部项目（PicoClaw、NullClaw、ZeptoClaw）则处于维护停滞或早期探索状态。整体来看，**SQLite 存储迁移、Prompt Cache 成本优化、跨平台通道稳定性**成为全行业共同面临的技术拐点，安全与多租户能力正从"可选"变为"必选"。

---

## 2. 各项目活跃度对比

| 项目 | Issues (开/活/关) | PR (待/合/关) | 最新版本 | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 438 / 62 | 434 / 66 | v2026.6.11-beta.2 | 🟡 高活跃 / 高积压 |
| **ZeroClaw** | ~50 / — | 47 / 3 | 无 Release | 🟡 高活跃 / 审查瓶颈 |
| **Hermes Agent** | 42 / 8 | 46 / 4 | 无 Release | 🟡 高活跃 / Windows 稳定性承压 |
| **NanoBot** | 6 / 1 | 13 / 10 | v0.2.2 | 🟢 健康 / 集中收尾期 |
| **CoPaw** | 4 / 1 | 6 / 0 | v1.1.12.post2 | 🟢 中等活跃 / 测试补强中 |
| **IronClaw** | 3 / — | 25 / 17 | 无 Release（#5311 待发） | 🟢 高合并 / Reborn 框架推进 |
| **LobsterAI** | 1 / 4 | 2 / 3 | 2026.6.11 | 🟢 低活跃 / 维护期 |
| **Moltis** | 1 / — | 2 / 0 | 无 Release | 🟢 低活跃 / 稳定 |
| **NanoClaw** | 1 / — | 5 / 1 | v2.1.1 | 🟢 补丁密集 / 安全修复中 |
| **PicoClaw** | 0 / 0 | 1 / 0 | 无 Release | 🔴 停滞 / Stale 关闭频发 |
| **NullClaw** | 0 / 1 | 0 / 0 | 无 Release | 🔴 近休眠 |
| **TinyClaw** | 0 / 0 | 0 / 0 | — | 🔴 无活动 |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | — | 🔴 无活动 |

> **关键发现：** 活跃项目（前 7 个）占据了 95% 以上的社区互动量，生态呈现明显的**头部集中效应**。OpenClaw 单项目 Issue 更新量占全部项目总和的 70% 以上。

---

## 3. OpenClaw 在生态中的定位

### 优势

| 维度 | OpenClaw | 同类对比 |
|---|---|---|
| **社区规模** | 500+ Issue/PR 日更新，绝对领先 | ZeroClaw ~50，Hermes ~50，NanoBot ~30 |
| **通道覆盖** | Slack、Mattermost、Discord、Telegram、Matrix、iMessage、Feishu、Tlon 等全通道 | ZeroClaw 聚焦 Telegram/Matrix，Hermes 侧重 Telegram/Email/WhatsApp |
| **版本节奏** | Beta 版持续迭代（v2026.6.11-beta.2） | 多数项目无正式 Release |
| **安全审查** | 明确的 `merge-risk: security-boundary` 标签体系 | 仅 Hermes 有 IDOR 修复 PR，其余项目安全流程较松散 |

### 技术路线差异

- **OpenClaw** 走"**全功能平台**"路线——SQLite 存储迁移（解决 sessions.json OOM）、per-DM 模型覆盖、Slack relay 模式，目标是成为 AI 助手的"操作系统"。
- **ZeroClaw** 聚焦"**运行时安全**"——WASM 插件宿主、SOP 控制平面、per-agent 环境变量隔离，技术叙事更偏向安全沙箱与多租户。
- **Hermes Agent** 押注"**桌面端体验**"——多终端面板、Windows 稳定性收敛、凭证池多账户轮换，是 GUI 方向投入最大的项目。
- **NanoBot** 选择"**轻量 + A2A 协作**"——子代理模型覆盖、原生 Agent-to-Agent 委托，走差异化的小而美路线。

### 社区规模对比

OpenClaw 的待合并 PR 积压（434 条）远超其他项目之和，既反映了社区贡献热情，也暴露了维护者审查带宽的瓶颈。相比之下，IronClaw 今日合并了 17 个 PR，显示出更高效的审查流程。

---

## 4. 共同关注的技术方向

### 方向一：SQLite 存储迁移（解决 Session 膨胀）

| 项目 | 状态 | 具体动态 |
|---|---|---|
| **OpenClaw** | 🔧 进行中 | PR #96625（Path 3）待合并，Issue #88838 跟踪，社区 36 条评论关注 |
| **CoPaw** | 🔧 进行中 | PR #5321 提出 Scroll 策略——SQLite 持久化 + Python REPL 召回 |
| **NanoBot** | ✅ 部分完成 | PR #4568 修复 max_messages 截断对 Prompt Cache 的破坏 |

**行业信号：** 几乎所有活跃项目都在从 JSON/文件存储向 SQLite 迁移。sessions.json 的 OOM 和膨胀问题是**全行业共性痛点**，SQLite 已成为事实标准。

---

### 方向二：Prompt Cache 成本优化

| 项目 | 状态 | 具体动态 |
|---|---|---|
| **NanoBot** | 🔧 进行中 | PR #4581 压缩超大子代理公告内容，Issue #4222 跟踪 microcompact 击穿缓存 |
| **ZeroClaw** | 🐛 已关闭 | Issue #6360 Telegram prompt caching 失效（已关闭，根因待确认） |
| **IronClaw** | 🔧 进行中 | PR #5149 渐进式工具披露，削减 25.8k tokens/轮的 prompt 体积 |

**行业信号：** 随着生产部署规模扩大，**token 成本**已从"可忽略"变为"核心关切"。Prompt Cache 命中率直接影响账单，是"生产级"项目的必修课。

---

### 方向三：跨平台通道稳定性

| 项目 | 受影响通道 | 核心问题 |
|---|---|---|
| **OpenClaw** | Discord | #77930 channel not loaded 回归、#77642 重复回答 |
| **OpenClaw** | Telegram | #79077 bot-to-bot/guest-bot 特性缺失（👍 最高） |
| **Hermes Agent** | Telegram | #28004 打字指示器竞态卡死 |
| **Hermes Agent** | Windows | #54220 控制台闪烁（被标记为"仓库内最活跃 Bug"） |
| **NanoBot** | 微信 | PR #4567 streaming 字段缺失导致 tool_use 丢失 |

**行业信号：** 通道适配是"看不见的冰山"——每个通道都有独特的协议细节（UTF-16 截断、流式字段、OAuth 流程），维护成本极高。OpenClaw 今日集中修复 6 个通道的 UTF-16 截断问题，说明**通道层已进入精细化打磨阶段**。

---

### 方向四：安全加固

| 项目 | 安全议题 | 状态 |
|---|---|---|
| **OpenClaw** | ClawHub SHA 验证（#97157）、secrets 隔离（#94106） | PR 待合并 |
| **Hermes Agent** | IDOR 漏洞：`/resume` 端点未做归属校验（#52355） | PR 待合并 |
| **NanoBot** | exec.allowPatterns 白名单绕过（#4521） | PR #4562 待合并 |
| **NanoClaw** | 符号链接逃逸导致任意文件写入（#2828） | PR #2880 待合并 |
| **ZeroClaw** | MCP 隔离静默失效（#7733） | 无 Fix PR |

**行业信号：** 安全已从"加分项"变为"准入线"。多个项目出现**高危漏洞**（IDOR、路径遍历、命令注入），且部分长期未修复，说明安全审查能力普遍不足。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能平台，通道全覆盖 | 企业/团队，多通道部署 | 模块化 provider 架构，SQLite 迁移中 |
| **ZeroClaw** | 安全运行时 + WASM 插件 | 安全敏感场景，多租户 | Rust + WASM（wasmtime），SOP 控制平面 |
| **Hermes Agent** | 桌面端 GUI + 多网关 | 个人用户，远程 gateway 部署 | 桌面/CLI/TUI 三端并行，凭证池轮换 |
| **NanoBot** | 轻量 + A2A 多代理协作 | 开发者，成本敏感场景 | 子代理模型覆盖，Prompt Cache 优化 |
| **CoPaw** | 钉钉生态 + 记忆系统 | 国内企业用户 | Agentscope 2.0 适配，SQLite 持久化 |
| **IronClaw** | Reborn 框架 + WebUI | NEAR AI 生态用户 | Rust crate 分片，LibSql 矩阵 |
| **LobsterAI** | 定时任务 + 技能系统 | 网易内部/企业用户 | 定时任务 UI，技能市场 |
| **NanoClaw** | 多 provider + 容器隔离 | 开发者，多模型切换 | 容器化 agent 运行时 |
| **PicoClaw** | WebSocket 协议 + 嵌入式 | IoT/边缘场景 | Pico Protocol，Simplex 通道 |
| **NullClaw** | 嵌入式/ESP32 探索 | 硬件爱好者 | 极轻量，边缘部署 |

---

## 6. 社区热度与成熟度分层

### 第一梯队：快速迭代期（日活 Issue/PR > 30）

| 项目 | 阶段判断 | 关键特征 |
|---|---|---|
| **OpenClaw** | 规模化扩张 | 高贡献 + 高积压，需解决审查瓶颈 |
| **ZeroClaw** | 功能爆发期 | WASM 插件、SOP、Inkbox 多线并进 |
| **Hermes Agent** | 平台补全期 | Windows 稳定性收敛 + 桌面端能力扩展 |

### 第二梯队：质量巩固期（日活 Issue/PR 5-30）

| 项目 | 阶段判断 | 关键特征 |
|---|---|---|
| **NanoBot** | 集中收尾 | 历史积压清理，A2A 协作升级 |
| **CoPaw** | 测试基建 | Agentscope 2.0 适配，120 个测试用例补齐 |
| **IronClaw** | 框架推进 | Reborn 集成测试分片开发，务实止损 |

### 第三梯队：维护/停滞期（日活 Issue/PR < 5）

| 项目 | 阶段判断 | 关键特征 |
|---|---|---|
| **LobsterAI** | 维护平稳 | 无重大功能推进，stale 清理为主 |
| **NanoClaw** | 补丁密集 | 安全修复主导，无版本节奏 |
| **Moltis** | 稳定维护 | 依赖优化 + 图片处理修复 |
| **PicoClaw** | 停滞 | Stale 关闭频发，维护带宽不足 |
| **NullClaw** | 近休眠 | 4 个月响应周期，零开放 Issue |
| **TinyClaw / ZeptoClaw** | 无活动 | 可能已弃坑 |

---

## 7. 值得关注的趋势信号

### 趋势一：从"能用"到"好用"——生产级门槛正在抬高

- **信号：** OpenClaw 用户反馈"从可用到需重启的时间越来越短"（#55334），NanoBot 用户开始计算每轮 token 成本（#4222），CoPaw 用户要求记忆搜索 Reranker（#5588）。
- **启示：** 社区正从"功能验证"转向"生产稳定性"。**Session 管理、成本优化、错误恢复**将成为下一阶段的核心竞争力。

### 趋势二：A2A（Agent-to-Agent）协作从概念走向实现

- **信号：** NanoBot 提交原生 A2A 委托 PR（#4571），CoPaw 出现跨 Agent 无限循环 Bug（#5204），OpenClaw 的 MCP 工具调用审批需求（#78308）。
- **启示：** 多 Agent 协作不再是 PPT 概念，**Agent 间的通信协议、循环检测、权限边界**将成为新的技术攻坚方向。

### 趋势三：安全从"事后补丁"变为"设计前提"

- **信号：** 今日 5 个独立项目同时出现高危安全 PR（IDOR、路径遍历、命令注入、MCP 隔离失效、secrets 交叉污染）。
- **启示：** AI Agent 的权限边界、沙箱隔离、凭证管理已成为**架构设计阶段必须考虑**的约束，而非事后修补。

### 趋势四：Windows 平台成为桌面端"最后的战场"

- **信号：** Hermes Agent 将 Windows 稳定性作为核心议题（控制台闪烁、GBK 崩溃、IME 兼容），OpenClaw 的 #78493 反馈 sudo 升级后权限混乱，ZeroClaw 的 #7462 报告 74 个 Windows 测试失败。
- **启示：** macOS/Linux 已相对成熟，**Windows 兼容性是桌面端产品化的最后一道关卡**。

### 趋势五：通道生态进入"精细化运营"阶段

- **信号：** OpenClaw 集中修复 6 个通道的 UTF-16 截断，NanoBot 修复微信 streaming 字段，ZeroClaw 推进 Telegram Bot API 10.1 富文本。
- **启示：** 通道层已从"接入"转向"打磨"。**协议细节（编码、流式、OAuth）的完善度**将直接决定用户体验。

---

**总结：** 个人 AI 助手开源生态正处于从"功能竞赛"向"质量竞赛"的关键转折期。OpenClaw 凭借社区规模和通道覆盖保持领先，但高积压和稳定性隐患是潜在风险。ZeroClaw 的安全运行时、NanoBot 的 A2A 协作、Hermes Agent 的桌面端体验代表了差异化的技术探索方向。对于 AI 智能体开发者而言，**SQLite 存储、Prompt Cache 优化、安全加固、Windows 兼容性**是 2026 年下半年必须面对的四大技术课题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-06-29 ｜ 数据窗口：过去 24 小时**

---

## 1. 今日速览

过去 24 小时 NanoBot 社区活跃度处于**高位**：共产生 **7 条 Issue 更新**（6 条新开/活跃，1 条已关闭）和 **23 条 PR 更新**（13 条待合并，10 条已合并/关闭），显示出社区贡献持续涌入。本日无新版本发布。整体来看，**上一轮 PR 合并密度非常高**——大量历史积压被一次性消化，同时当日又涌现出十余个新 PR，主要集中在**Prompt Cache 优化、子代理模型覆盖、安全与稳定性加固**三个方向。社区对性能和成本的关注度明显升温，多个议题围绕 context 用量与缓存命中率展开。

---

## 2. 版本发布

本日无新版本发布。最新已知稳定版本为 **v0.2.2**。

---

## 3. 项目进展——今日合并/关闭的重要 PR

过去 24 小时内，**10 条 PR 被合并或关闭**，覆盖功能、安全、通道、测试等多个层面：

| PR | 状态 | 摘要 |
|---|---|---|
| **#4565** | 已合并 | **修复 WebUI WebSocket 重连后"假流式"卡死 + 停止按钮失效**——对应 Issue #4500，显著提升 WebUI 稳定性。 |
| **#4569** | 已合并 | **加固 tool-call 路径，防止畸形 relay 响应导致历史污染和后续崩溃**。提升上游兼容性鲁棒性。 |
| **#4566** | 已合并 | **修复 `list_sessions()` 在处理旧格式 session 文件名时报错被丢弃**的问题，避免信息丢失。 |
| **#4542** | 已合并 | **MCP 工具返回的图片内容以 artifact 方式交付**，解决之前 base64 被当作纯文本塞入上下文的痛点。 |
| **#4564** | 已合并 | **修复 cron 在底层 store 未就绪时暴露在外的公开 API 调用异常**。 |
| **#4504** | 已关闭 | 子目录 skills 组织支持（已处理合并或关闭流程）。 |
| **#2120** | 已关闭 | 添加贡献者文档与 README 链接，完善项目文档结构。 |
| 其余 | 已关闭 | 若干历史 PR 被清理关闭。 |

**整体迈进步伐：** 项目在**稳定性**（WebUI 卡死、session 损坏、cron/store 异常）和**兼容性**（MCP 图片、畸形 tool-use 响应）两个方面同时推进；这批 PR 合并标志着维护者近期在进行集中清理和收尾。

---

## 4. 社区热点——今日讨论最活跃的 Issues & PRs

### 最活跃 Issue

**[#4010](https://github.com/HKUDS/nanobot/issues/4010) — Feature proposal: text-to-speech / voice output support**
- 👍 2，评论 2 条，作者 olgagaga。
- **核心诉求**：nanobot 已经能听（语音输入），却不能说。希望原生支持语音输出，尤其在支持 voice note 的通道（微信/Telegram 等），让对话形成真正的双向语音闭环。
- **情绪判断**：社区对该方向有小幅点赞支持，维护者尚未回复。由于涉及 TTS 服务对接与通道适配，短期内落地概率有限，但呼声存在。

### 最受关注 PR（新PR与社区兴趣交叉）

- **[#4581](https://github.com/HKUDS/nanobot/pull/4581) — optimization: reducing context usage and thus reducing costs**
  - 作者 hamb1y，同日提交。**压缩超大子代理公告内容、减少每轮输入 token**，直接回应近期用户对成本和上下文长度的焦虑。与 #4222、#4574 形成 cost 主题集群。

- **[#4570](https://github.com/HKUDS/nanobot/pull/4570) — feat(spawn): add per-subagent model override (#4231)**
  - 直接实现 Issue #4231，允许每个子代理指定不同模型。**实用性高**：有利于"用一个便宜模型跑重活、主模型省钱"等组合策略。

- **[#4571](https://github.com/HKUDS/nanobot/pull/4571) — feat(subagent): native A2A peer delegation (#4179)**
  - 实现 **Agent-to-Agent 原生协作**，支持 Supervisor → Researcher → Writer 式的团队编排。如果合并，将把 spawn 从"后台匿名子任务"升级为**多代理协作框架**，是较大的路线图信号。

- **[#4562](https://github.com/HKUDS/nanobot/pull/4562) — [security] fix: validate each shell segment against exec.allowPatterns**
  - **针对安全 Issue #4521 的修复**：防止 `echo allowlisted && touch /tmp/evil` 这种命中白名单后再追加恶意命令的攻击手段。该类问题属于**高危**，通常会较快合并。

### 小结

本日社区热点可归纳为三大主题：
1. **成本与缓存效率**（#4581、#4568、#4222）
2. **子代理 / A2A 架构能力增强**（#4570、#4571、#4231）
3. **安全与稳定收尾**（#4562、#4569、#4565）

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重级 | 问题 | 状态 |
|---|---|---|
| 🔴 **高危** | **exec.allowPatterns 白名单绕过** — `re.search` 在原始命令上做匹配，可被 `&&`/`;` 拼接绕过（已上报至 #4521）。 | 已有专门 Fix PR **#4562**，待审合并。 |
| 🟡 **中** | **WebUI 自重启后流式假死**、**"停止按钮无活动任务"**（Issue [#4500](https://github.com/HKUDS/nanobot/issues/4500)）。 | 已关闭，相应 Fix PR **#4565** 已合入。 |
| 🟡 **中** | **max_messages 截断 + microcompact 持续破坏 Prompt Cache 前缀一致性**，增加重复计费（Issue [#4222](https://github.com/HKUDS/nanobot/issues/4222)）。 | 半数 Fix 已落地：**PR #4568** 负责 `max_messages` 部分，仍需关注 microcompact 侧。 |
| 🟡 **中** | **weixin 通道无 streaming 字段**，导致流式退化为非流式，部分上游 Anthropic-compatible relay 丢失 tool_use 字段（PR [#4567](https://github.com/HKUDS/nanobot/pull/4567)）。 | 已有 PR，未合并，需要 reviewer 关注。 |
| 🟢 **低** | **list_sessions 对旧格式 base64 文件名静默丢弃**（PR [#4566](https://github.com/HKUDS/nanobot/pull/4566) 修复）。 | 已合并。 |
| 🟢 **低** | **cron 在 store 未就绪时被调用** 崩溃（PR [#4564](https://github.com/HKUDS/nanobot/pull/4564)）。 | 已合并。 |

**稳定性趋势：** 大多数中长期影响的 bug 已在此轮 PR 中得到修复或推进，项目当前**稳定性表现为近几周较佳时点**。

---

## 6. 功能请求与路线图信号

| 功能/方向 | 来源 Issue | 落地信号 |
|---|---|---|
| **子代理指定模型 / per-subagent model override** | [#4231](https://github.com/HKUDS/nanobot/issues/4231) | 已有特性完备的 **PR #4570**，合并概率高。 |
| **A2A 原生代理协作 + 递归深度保护** | [#4179](https://github.com/HKUDS/nanobot/issues/4179) | 部分落地中（**PR #4571**）。路线图上的一大步。 |
| **Prompt Cache 友好上下文管理** | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | 半解（**PR #4568**）。还有后续。 |
| **全局 context 用量压缩 / 降本** | (社区趋势) + PR **#4581** | 有明确实现，未来很可能持续优化。 |
| **exec 子进程默认支持虚拟环境/conda** | [#4580](https://github.com/HKUDS/nanobot/issues/4580)（新发） | 暂无对应 PR。 |
| **WebUI 会话时间戳 + Markdown 导出** | [#4579](https://github.com/HKUDS/nanobot/issues/4579)（新发） | 小改动，适合社区新手贡献。 |
| **群聊消息防抖 / 缓冲** | [#3938](https://github.com/HKUDS/nanobot/issues/3938) | 尚在讨论，暂无 PR。 |
| **TTS 语音输出** | [#4010](https://github.com/HKUDS/nanobot/issues/4010) | 长期规划，暂无落地。 |

**路线图判断：** 下一版本（推测性）很可能会把**子代理模型覆盖**和**A2A 协作**作为主打亮点；同时 context 效率优化会持续作为高优先级进行。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实使用场景与痛点：

1. **真正在用的人变多：** 多个 Issue 提及在飞书、Telegram 群组里与同事一起跑 nanobot（#3938），以及使用 WebUI 时启动多个并行会话做对比（#4579）。说明项目正在**走出单人实验，进入协作场景**。
2. **成本敏感度上升：** 用户开始认真计算每轮 token 成本，并指出 Prompt Cache 反复被击穿对账单的影响（#4222）。这是项目走向"生产级"后的自然反馈。
3. **对子代理"向上管理能力"的渴望：** 用户希望 spawn 能够指定模型（#4231），更希望有多代理团队模式（#4179）。说明用户在**用 nanobot 构建更复杂的多代理系统**。
4. **稳定性容忍度低但对修复给正反馈：** #4500 的"WebUI 自重启假死"和停止按钮 bug 被耐心跟进并附日志，收到修复后 Issue 随即关闭，说明**用户愿意配合反馈，且对响应速度感知正面**。
5. **安全与合规需求实际存在：** 企业用户对 exec.allowPatterns 绕过的报告（#4521，收敛进 #4562）反映真实生产安全审查在推动用例渗透。

---

## 8. 待处理积压——需维护者关注

| 积压项 | 类型 | 创建时间 | 积压天数 | 风险 |
|---|---|---|---|---|
| **#4580** — exec 应支持 conda/虚拟环境 | 功能请求 | 2026-06-28 | 1 天（新但易用性痛点） | 影响 Python 工作流用户。 |
| **#4579** — WebUI 会话时间戳 + Markdown 导出 | 功能请求 | 2026-06-28 | 1 天 | 高 ROI 用户体验改进，可鼓励社区贡献。 |
| **#3938** — 群聊消息防抖/缓冲 | Enhancement | 2026-05-20 | ~40 天 | 持续存在，用户已在 Feishu/Telegram 协作中遇到。 |
| **#4578** — Codex OAuth proxy 显式处理 | 修复 | 2026-06-28 | 1 天 | 涉及隐私场景，加速审查。 |
| **#4567** — 微信通道流式修复 | 修复 | 2026-06-28 | 1 天 | 影响大量中文用户，应优先审。 |
| **#4574** — RetentionRefactor 类型化返回值 | 重构 | 2026-06-28 | 1 天 | 长期可维护性相关，需审核确定是否合。 |
| **#4534** — 通用可靠性层 + Codex + 验证反馈 | 大 PR | 2026-06-26 | 3 天 | 覆盖面广但题注较大，拆分可能更适合。 |

**建议维护者优先处理：** #4567（微信）、#4562（安全）、#4570（子代理模型覆盖）、#4581（成本压缩）。这几项直接影响更大的用户群与安全问题。

---

**总结判断：** NanoBot 在过去 24 小时内经历了**一轮高密度 PR 合并潮**，长期积压的稳定性问题得到集中清理，同时社区贡献量不减反增，方向集中在 **Prompt Cache 优化、子代理/A2A 能力升级、安全与通道修复** 三条主线。项目社区活跃度与健康度均处于良好状态。若无意外，下一版本的核心叙事大概率会围绕"**更省钱** + **更会组队**"展开。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-29**

---

## 1. 今日速览

过去 24 小时，Hermes Agent 项目保持高活跃度：共处理 **50 条 Issue 更新**（新开/活跃 42 条，关闭 8 条）和 **50 条 PR 更新**（待合并 46 条，已合并/关闭 4 条）。无新版本发布。项目当前处于密集迭代期，**Windows 桌面端稳定性**和**多平台消息网关**是今日最突出的议题——大量 Issue 集中在 Windows GUI 控制台闪烁、IME 输入法兼容性、以及 Telegram/Email/Matrix 等网关的消息投递异常。待合并 PR 积压达 46 条，显示维护者审查带宽存在瓶颈。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 **4 条 PR 被合并/关闭**，从 Issue 侧追踪可见以下修复已落地：

| 修复内容 | 关联 Issue | 状态 |
|---|---|---|
| Windows `gh auth token` 子进程控制台闪烁抑制 | [#53370](https://github.com/NousResearch/hermes-agent/issues/53370) | ✅ Closed |
| Windows `PseudoConsoleWindow` 闪烁（`gho_*` token 子进程） | [#53957](https://github.com/NousResearch/hermes-agent/issues/53957) | ✅ Closed |
| Windows 双 Bug：GBK 编码崩溃循环 + 终端窗口洪水 | [#53065](https://github.com/NousResearch/hermes-agent/issues/53065) | ✅ Closed |
| Desktop 终端面板启动/切换闪烁（1f950e189 回归） | [#53433](https://github.com/NousResearch/hermes-agent/issues/53370) | ✅ Closed |

**关键推进：** Windows 桌面端体验在今日获得集中修复——多个长期存在的控制台窗口闪烁问题被关闭，表明团队正系统性攻克 Windows 平台适配短板。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| # | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | Fails to install NeuTTS during setup | 12 | 4 | [#3002](https://github.com/NousResearch/hermes-agent/issues/3002) |
| 2 | Telegram typing indicator stuck indefinitely (race condition) | 7 | 0 | [#28004](https://github.com/NousResearch/hermes-agent/issues/28004) |
| 3 | Desktop /compress returns "not a quick/plugin/skill command" | 6 | 0 | [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) |
| 4 | Telegram bot responds with random 401 error | 6 | 0 | [#3846](https://github.com/NousResearch/hermes-agent/issues/3846) |
| 5 | Windows Desktop GUI: console windows flash on subprocess spawns (Tracking) | 6 | 0 | [#54220](https://github.com/NousResearch/hermes-agent/issues/54220) |

**分析：**

- **NeuTTS 安装失败**（[#3002](https://github.com/NousResearch/hermes-agent/issues/3002)，12 评论，4 👍）是今日互动量最高的话题。用户反馈全新安装后启用 NeuTTS 时报 `No module named pip`，指向 venv 环境内 pip 缺失的安装流程缺陷。该 Issue 已存在 3 个月，社区反复讨论但尚未根治，反映出 TTS 工具链的安装体验是持续痛点。

- **Telegram 打字指示器卡死**（[#28004](https://github.com/NousResearch/hermes-agent/issues/28004)）涉及 `_keep_typing` 清理路径的竞态条件，影响所有 Telegram 用户体验，属于消息投递基础设施的核心稳定性问题。

- **Windows 控制台闪烁追踪 Issue**（[#54220](https://github.com/NousResearch/hermes-agent/issues/54220)）被标记为"仓库内被报告最多的活跃 Bug"，今日仍有新变体不断涌现（[#54506](https://github.com/NousResearch/hermes-agent/issues/54506)），说明根因尚未完全消除。

### 📝 值得关注的新 PR

| # | 标题 | 类型 | 链接 |
|---|---|---|---|
| 1 | feat(desktop): multi-terminal panel with side tab rail | Feature | [#54517](https://github.com/NousResearch/hermes-agent/pull/54517) |
| 2 | feat(credential-pool): per-credential base_url for multi-account rotation | Feature | [#54524](https://github.com/NousResearch/hermes-agent/pull/54524) |
| 3 | security(gateway): scope /resume and /sessions to caller's origin (IDOR) | Security P1 | [#52355](https://github.com/NousResearch/hermes-agent/pull/52355) |
| 4 | fix(agent): persist compression backoff across resume | Bug P2 | [#54525](https://github.com/NousResearch/hermes-agent/pull/54525) |
| 5 | feat(gateway): wire GatewayEventDispatcher + Slack native plan/task cards | Feature | [#54522](https://github.com/NousResearch/hermes-agent/pull/54522) |

---

## 5. Bug 与稳定性

### 🔴 P1 / 严重

| 问题 | 链接 | 状态 |
|---|---|---|
| **IDOR 漏洞**：`/resume` 和 `/sessions` 端点未做归属校验，授权调用者可读取他人会话 | [#52355](https://github.com/NousResearch/hermes-agent/pull/52355) (PR) | 🔧 Fix PR 待合并 |

### 🟠 P2 / 高优先级

| 问题 | 链接 | 是否有 Fix PR |
|---|---|---|
| Windows Desktop GUI 控制台窗口闪烁（Tracking Issue，多个变体） | [#54220](https://github.com/NousResearch/hermes-agent/issues/54220) | 部分已修复，新变体仍涌现 |
| Telegram typing indicator 竞态条件导致永久卡死 | [#28004](https://github.com/NousResearch/hermes-agent/issues/28004) | ❌ 无 |
| Email gateway 缺乏基于 subject 的会话隔离 | [#27804](https://github.com/NousResearch/hermes-agent/issues/27804) | ❌ 无 |
| Cron 工具可调度 gateway 生命周期脚本导致重启循环 | [#51976](https://github.com/NousResearch/hermes-agent/issues/51976) | ❌ 无 |
| Matrix 多 profile 共享账号时绕过 allowed-room 隔离 | [#54461](https://github.com/NousResearch/hermes-agent/issues/54461) | ❌ 无 |
| `hermes chat -m <model>` 使用过期 api_mode 导致 404 | [#54147](https://github.com/NousResearch/hermes-agent/issues/54147) | ❌ 无 |
| DeepSeek 流式响应因自定义 httpx transport 中断 | [#54049](https://github.com/NousResearch/hermes-agent/issues/54049) | ❌ 无 |
| Docker 沙箱 file tools 使用未净化的 host cwd | [#54447](https://github.com/NousResearch/hermes-agent/issues/54447) | ❌ 无 |
| 恢复超大会话后压缩冷却期丢失，立即重入压缩 | [#54465](https://github.com/NousResearch/hermes-agent/issues/54465) | ✅ PR [#54525](https://github.com/NousResearch/hermes-agent/pull/54525) |
| Ollama 视觉模型图片被静默剥离 | [#54511](https://github.com/NousResearch/hermes-agent/issues/54511) | ✅ PR [#54520](https://github.com/NousResearch/hermes-agent/pull/54520), [#54530](https://github.com/NousResearch/hermes-agent/pull/54530) |

### 🟡 P3 / 中低优先级

| 问题 | 链接 |
|---|---|
| Windows 中文 IME Enter 无法发送消息 | [#39025](https://github.com/NousResearch/hermes-agent/issues/39025) |
| IME 导致发送按钮变语音按钮 + 文本截断 | [#39651](https://github.com/NousResearch/hermes-agent/issues/39651) |
| Dashboard 聊天长会话中新输入/输出不可见 | [#53641](https://github.com/NousResearch/hermes-agent/issues/53641) |
| Desktop model picker 不显示远程 Linux gateway 的 MoA/BeastMode | [#53817](https://github.com/NousResearch/hermes-agent/issues/53817) |
| Desktop 远程 TTS 音频显示为 0 秒文件 | [#46135](https://github.com/NousResearch/hermes-agent/issues/46135) |
| Ollama Cloud model picker 显示本地模型而非云端模型 | [#52599](https://github.com/NousResearch/hermes-agent/issues/52599) |
| Kanban artifact 创建/删除异常 | [#36046](https://github.com/NousResearch/hermes-agent/issues/36046) |
| Desktop 三大回归：与 CLI/TUI 体验差距 | [#54473](https://github.com/NousResearch/hermes-agent/issues/54473) |

---

## 6. 功能请求与路线图信号

| 功能 | 链接 | 信号强度 | 判断 |
|---|---|---|---|
| **Desktop 多终端面板**（VS Code 风格 icon rail） | PR [#54517](https://github.com/NousResearch/hermes-agent/pull/54517) | 🟢 高 | PR 已提交，今日新建，极可能纳入下版本 |
| **多网关连接 + 分网关标签页** | [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) (2 👍) | 🟡 中 | 用户需求明确但尚无 PR |
| **凭证池 per-credential base_url**（多账户同 provider 轮换） | PR [#54524](https://github.com/NousResearch/hermes-agent/pull/54524) | 🟢 高 | PR 已提交 |
| **Slack 原生 plan/task cards** + GatewayEventDispatcher 上线 | PR [#54522](https://github.com/NousResearch/hermes-agent/pull/54522) | 🟢 高 | PR 已提交，关闭结构性缺口 |
| **会话边界触发后台记忆回顾** | [#31597](https://github.com/NousResearch/hermes-agent/issues/31597) | 🟡 中 | 长期需求，无 PR |
| **边缘垂直能力包**（PM/分析师工作模式） | [#54463](https://github.com/NousResearch/hermes-agent/issues/54463) | 🟡 中 | 新提案，尚无 PR |
| **安全客服部署 Profile**（RFC） | [#17062](https://github.com/NousResearch/hermes-agent/issues/17062) | 🟡 中 | 长期 RFC，2 个月未更新 |
| **Desktop 多语言 i18n**（15 种语言） | PR [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | 🟡 中 | PR 存在 2 个月，与上游原生 i18n 骨架并存，需协调合并策略 |

**路线图判断：** 下一版本（推测 v0.18.x）大概率聚焦 **Windows 桌面端稳定性收敛** + **多终端面板** + **Slack 集成深化**。安全类修复（IDOR、session isolation）可能以补丁形式优先发布。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Windows 桌面端体验碎片化**：控制台闪烁、GBK 崩溃、IME 输入问题、终端面板闪烁——多个 Windows 特异性 Bug 叠加，导致非英语 Windows 用户"几乎无法使用"（[#53065](https://github.com/NousResearch/hermes-agent/issues/53065) 原文）。尽管今日有多个修复关闭，但新变体仍在涌现，用户信心有待恢复。

2. **TTS 安装体验差**：NeuTTS 在全新安装中因 venv 缺少 pip 而失败（[#3002](https://github.com/NousResearch/hermes-agent/issues/3002)），该问题存在 3 个月、12 条评论，社区已提供多种 workaround 但官方未根治。

3. **Desktop 与 CLI/TUI 体验差距**：有用户系统性指出 Desktop 发布时未补齐与 CLI/TUI 参考体验的三大回归（[#54473](https://github.com/NousResearch/hermes-agent/issues/54473)），并指出 commit 分布显示桌面功能提交速度是 TUI 的 30 倍，暗示资源分配失衡。

4. **Telegram 401 认证错误**：用户报告 Telegram bot 间歇性返回 `No cookie auth credentials found`（[#3846](https://github.com/NousResearch/hermes-agent/issues/3846)），影响基本可用性。

### 😃 满意 / 正向信号

- Windows 控制台闪烁修复获得快速响应（多个 Issue 在 1-2 天内关闭），用户感受到维护者的重视。
- 多终端面板 PR 的提交（[#54517](https://github.com/NousResearch/hermes-agent/pull/54517)）显示团队正积极增强桌面端核心能力。

### 📋 典型使用场景

- **远程 Linux gateway + Windows Desktop 前端**：用户将 Hermes 后端部署在 VPS，通过 Windows Desktop 连接使用。此场景下 TTS 音频播放异常（[#46135](https://github.com/NousResearch/hermes-agent/issues/46135)）和 model picker 不显示远程 MoA 预设（[#53817](https://github.com/NousResearch/hermes-agent/issues/53817)）是高频问题。
- **多平台消息网关**：Telegram、Email、WhatsApp、Matrix、QQ Bot 等多网关并行使用，会话隔离和消息投递可靠性是核心诉求。
- **多账户/多 provider 轮换**：凭证池 per-credential base_url 需求（[#54524](https://github.com/NousResearch/hermes-agent/pull/54524)）反映企业级用户在同一 provider 下管理多个账户的真实场景。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者优先关注：

### Issues

| # | 标题 | 创建日期 | 最后更新 | 链接 |
|---|---|---|---|---|
| 1 | RFC: Safe customer-support deployment profile | 2026-04-28 | 2026-06-28 | [#17062](https://github.com/NousResearch/hermes-agent/issues/17062) |
| 2 | Fails to install NeuTTS during setup | 2026-03-25 | 2026-06-29 | [#3002](https://github.com/NousResearch/hermes-agent/issues/3002) |
| 3 | Telegram typing indicator stuck (race condition) | 2026-05-18 | 2026-06-29 | [#28004](https://github.com/NousResearch/hermes-agent/issues/28004) |
| 4 | Email gateway: lack of subject-based session isolation | 2026-05-18 | 2026-06-28 | [#27804](https://github.com/NousResearch/hermes-agent/issues/27804) |
| 5 | Desktop /compress built-in command not redirected | 2026-06-11 | 2026-06-28 | [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) |
| 6 | WhatsApp bridge: critical CVE in baileys (GHSA-qvv5-jq5g-4cgg) | 2026-06-12 | 2026-06-28 | [#44983](https://github.com/NousResearch/hermes-agent/issues/44983) |
| 7 | Cron tool can schedule gateway restart loops | 2026-06-24 | 2026-06-28 | [#51976](https://github.com/NousResearch/hermes-agent/issues/51976) |

### Pull Requests

| # | 标题 | 创建日期 | 最后更新 | 链接 |
|---|---|---|---|---|
| 1 | fix(skills): isolate OpenClaw skill directories | 2026-04-29 | 2026-06-29 | [#17376](https://github.com/NousResearch/hermes-agent/pull/17376) |
| 2 | feat(desktop

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-06-29 | 数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 今日整体活跃度**偏低**，处于典型的维护期节奏。过去 24 小时内仅有 1 条 Issue 和 2 条 PR 发生状态变化，且均为陈旧（stale）项目的自动关闭或长期未合并的积压项，无新开 Issue 或新 PR。无新版本发布。值得关注的是，一个新增 `simplex` 通道类型的开放 PR（#3193）已存在超过 24 小时尚未获得评审反馈，是当前唯一活跃的开发线。

---

## 2. 版本发布

> 过去 24 小时无新版本发布，本节省略。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 状态 | 说明 |
|---|---|---|
| **#2964** Feat/image input compression | ❌ CLOSED (stale) | 作者 afjsbx 提出为视觉管线增加可配置的多级图像压缩策略，避免大尺寸图片直接构建模型 payload 导致内存压力。该 PR 自 2026-05-28 创建以来未获得有效评审，最终因陈旧被自动关闭。**功能未合入。** |

**评估：** 今日无实质代码合入。项目整体功能推进**停滞**，图像压缩优化诉求仍然存在但缺乏维护者响应。

### 待合并 PR

| PR | 状态 | 说明 |
|---|---|---|
| **#3193** Added simplex channel type | 🟡 OPEN | 作者 dim 新增 `simplex`（单工）通道类型，属于纯功能扩展（non-breaking）。自 2026-06-27 提交至今尚无评审意见，是当前唯一活跃开发线。 |

---

## 4. 社区热点

### Issue #2984 — WebSocket 客户端显式回合完成信号

- **链接：** https://github.com/sipeed/picoclaw/issues/2984
- **作者：** Brook-sys | **评论：4 条 | 👍: 2**
- **状态：** CLOSED (stale) | 创建 2026-06-02，关闭 2026-06-28

**诉求分析：** 外部 Pico Protocol WebSocket 客户端目前依赖 `message.create`、`message.update`、`typing.start`、`typing.stop` 等事件来推断 Agent 是否完成处理，但缺乏**确定性的回合完成信号**。这导致客户端无法精确判断何时可以安全地发送下一条消息或更新 UI 状态。Brook-sys 提出增加一个显式的 turn completion 事件，获得了 2 个赞和 4 条评论的讨论，说明该痛点在 WebSocket 集成用户中有一定共鸣。然而该 Issue 同样因陈旧被自动关闭，**需求未被正式采纳或拒绝**。

**信号：** 随着 PicoClaw 的 WebSocket 协议被更多外部客户端采用，协议层的确定性和可观测性将成为日益重要的议题。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| — | 过去 24 小时无新 Bug 报告 | — | — |

**说明：** 今日无新提交的 Bug、崩溃或回归问题。已关闭的 #2984 和 #2964 均为陈旧自动关闭，不涉及已知未修复的缺陷。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 纳入可能性评估 |
|---|---|---|---|
| **WebSocket 显式回合完成信号** | Issue #2984 | ❌ 已关闭 (stale) | 🟡 中等 — 需求合理且有用户支持，但需维护者重新打开并确认优先级 |
| **图像输入多级压缩** | PR #2964 | ❌ 已关闭 (stale) | 🟡 中等 — 对视觉场景有实际价值，但 PR 需更新后重新提交 |
| **Simplex 通道类型** | PR #3193 | 🟡 OPEN | 🟢 较高 — 纯扩展性变更，无破坏性，一旦评审通过即可合入 |

**路线图判断：** 若维护者近期恢复活跃，`simplex` 通道类型（#3193）最有可能成为下一版本的增量功能。图像压缩和 WebSocket 协议增强需要更多社区推动或维护者主动认领。

---

## 7. 用户反馈摘要

从今日有限的 Issue 评论中提炼：

- **🔴 痛点：WebSocket 协议确定性不足**
  使用 Pico Protocol 的外部 WebSocket 客户端开发者（如 Brook-sys）反馈，当前事件流无法可靠判断 Agent 处理完成的精确时刻，需要引入显式信号。这反映了 PicoClaw 在**多客户端生态**场景下的协议成熟度仍有提升空间。

- **🔴 痛点：视觉管线缺乏压缩策略**
  PR #2964 作者指出入站图片仅受 `max_media_size` 约束，缺少多级压缩策略，可能导致大图片场景下的性能问题。该反馈来自实际部署经验。

- **🟡 满意度信号：**
  未发现明确的正面评价。整体社区反馈以功能缺口为主。

---

## 8. 待处理积压

| 项目 | 类型 | 创建日期 | 积压天数 | 建议行动 |
|---|---|---|---|---|
| **#3193** Added simplex channel type | 🟡 OPEN PR | 2026-06-27 | ~2 天 | 维护者尽快评审，避免重蹈 stale 关闭覆辙 |
| **#2984** WebSocket turn completion signal | Issue (已关闭) | 2026-06-02 | 26 天后关闭 | 如有价值，建议 reopen 并标记为 `accepted` 或 `wontfix`，给用户明确交代 |
| **#2964** Image input compression | PR (已关闭) | 2026-05-28 | 31 天后关闭 | 建议维护者联系作者了解是否有更新意愿，或将需求转为正式 Issue 跟踪 |

**⚠️ 健康度提醒：** 近期多个 PR/Issue 均因陈旧（stale）被自动关闭，反映出项目维护带宽与社区贡献之间存在**响应缺口**。建议维护者：
1. 优先处理 #3193 评审，保持贡献者积极性；
2. 对已关闭的 stale 项目补充关闭原因说明，降低社区挫败感；
3. 考虑调整 stale bot 的超时阈值，避免有价值贡献被过早清理。

---

*本报告由 AI 基于 2026-06-29 的 GitHub 公开数据自动生成。如有偏差，请以仓库实际状态为准。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-06-29

---

## 1. 今日速览

过去 24 小时 NanoClaw 项目保持中等活跃度：社区提交 **6 个 PR**（5 个待审、1 已关闭）和 **1 个新 Issue**，无新版本发布。修复类 PR 占据绝对主导——尤其是围绕 Issue #2828（路径遍历/符号链接逃逸安全漏洞）出现了多条独立修复分支，说明安全问题被多位贡献者并行关注。功能侧方面有 Telegram **Bot API 10.1 原生富文本渲染**（#2877）和 **Coolify 部署适配**（#2875）两个集成扩展在评审中。整体来看，今日处于典型的「补丁密集、无版本节奏」的维护窗口期，社区响应速度值得肯定（当日 PR 当日提交），但多个 PR 仍停留在 `undefined` 评论状态，审阅者介入力度不足。

---

## 2. 版本发布

过去 24 小时无新版本发布。最新已知稳定版本仍为 **NanoClaw 2.1.1**（由 Issue #2876 提及）。

---

## 3. 项目进展

过去 24 小时 **1 个 PR 被关闭**：

| 状态 | PR | 说明 |
|---|---|---|
| ❌ **Closed** | [#2879](https://github.com/qwibitai/nanocaw/pull/2879) `fix(agent-to-agent)`：containment-check target inbox | 由 johnmathews 提交，针对 #2828 A2A 附件转发时符号链接逃逸问题的修复，采用了与 `saveAttachments()` 相同的 `lstat + realpath + isPathInside` 防御模式。该 PR 已被同一作者提交的 [#2880](https://github.com/qwibitai/nanoclaw/pull/2880) **覆盖 / 替代**（见下文 Bug 章节），因此关闭属于正常的迭代收敛。 |

**净进展评估**：安全问题修复已形成两条闭环（inbound + forward 两条路径），但仍处于 Open PR 阶段，**尚未合入主线**。

---

## 4. 社区热点

### 🔥 Issue #2876 — OpenAI Provider 容器崩溃

- **链接**：https://github.com/qwibitai/nanoclaw/issues/2876
- **作者**：MJDemarcus · 创建于 2026-06-28
- **内容**：用户将 agent group 的 provider 设置为 `openai` 后，配置正常持久化，但 agent 收到消息、触发新容器 spawn 时崩溃。
- **分析**：这是 **OpenAI 原生 provider 集成** 的稳定性问题。CLI 层已接受参数，但容器运行时层缺少对应的初始化逻辑或环境变量注入。目前 0 条评论、0 个 👍，尚未有维护者响应。鉴于 NanoClaw 主打多 provider 架构，此类「配置可写但运行时不可用」的体验断裂对用户信任影响较大，建议优先排查。

### 🔥 PR #2880 — 安全修复：inbound 附件写入符号链接逃逸

- **链接**：https://github.com/qwibitai/nanoclaw/pull/2880
- **作者**：johnmathews · 创建于 2026-06-28
- **内容**：修复 CWE-59（符号链接跟随导致任意主机文件写入），覆盖 inbound 文件写入路径。
- **分析**：这是今日技术含量最高的 PR，直接回应 #2828 安全漏洞。与已关闭的 #2879 形成互补——#2879 修复 A2A 转发路径，#2880 修复 inbound 写入路径。两条路径均涉及 session 目录挂载到容器的场景，攻击面真实且严重。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 — 安全漏洞：符号链接逃逸导致任意主机文件写入（CWE-59）

- **Issue**：[#2828](https://github.com/qwibitai/nanoclaw/issues/2828)（引用自多个 PR）
- **影响**：被入侵的 agent 可在自身 session 目录内预置符号链接，诱导主机写入任意位置文件。
- **Fix PR 状态**：
  - ✅ [#2880](https://github.com/qwibitai/nanoclaw/pull/2880)（inbound 路径）— **Open，待审**
  - ❌ [#2879](https://github.com/qwibitai/nanoclaw/pull/2879)（A2A 转发路径）— **已关闭**，被 #2880 覆盖
- **建议**：#2880 应尽快合入并发布安全补丁版本。

### 🟠 中等 — OpenAI Provider 容器 Spawn 崩溃

- **Issue**：[#2876](https://github.com/qwibitai/nanoclaw/issues/2876)
- **影响**：使用 `--provider openai` 配置后，agent 无法正常响应消息。
- **Fix PR 状态**：暂无关联 PR。
- **建议**：需要维护者复现并定位容器初始化阶段的缺失逻辑。

### 🟡 低 — Discord 按钮 custom_id 解析错误

- **PR**：[#2881](https://github.com/qwibitai/nanoclaw/pull/2881)（Open，待审）
- **影响**：Discord 适配器在解析按钮 `custom_id` 时未解码分隔符 `\n`，导致 `tail` 字段包含 `'0\n0'` 而非 `'0'`，`resolveSelectedO...` 调用失败。
- **Fix PR 状态**：✅ 已有修复 PR，逻辑清晰，建议尽快审合。

### 🟡 低 — Codex OneCLI 陈旧 Token 导致断连

- **PR**：[#2878](https://github.com/qwibitai/nanoclaw/pull/2878)（Open，待审）
- **影响**：`runCodexAuthStep()` 仅检查 OneCLI secret 是否存在而不验证有效性，token 过期后 Codex agent 在对话中途失败，报错 `Your access token could not be refreshed`。
- **Fix PR 状态**：✅ 已有修复 PR。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 状态 | 纳入可能性 |
|---|---|---|---|
| **Telegram Bot API 10.1 原生富文本渲染** | PR [#2877](https://github.com/qwibitai/nanoclaw/pull/2877) | Open，待审 | 🟢 高 — 纯功能增强，无破坏性变更，且紧跟上游 Bot API 版本迭代 |
| **Coolify 部署适配** | PR [#2875](https://github.com/qwibitai/nanoclaw/pull/2875) | Open，待审 | 🟡 中 — 属于 Operational/container skill 类型，需确认与现有部署流程的兼容性 |
| **OpenAI Provider 完整支持** | Issue [#2876](https://github.com/qwibitai/nanoclaw/issues/2876) | 无 PR | 🟡 中 — 多 provider 是 NanoClaw 核心卖点之一，但需先解决运行时崩溃问题 |

**路线图判断**：下一版本（推测为 2.1.2 或 2.2.0）大概率以 **安全补丁 + Telegram 富文本** 为主线，Coolify 部署可能作为独立 skill 先行合入。

---

## 7. 用户反馈摘要

今日仅有 1 条 Issue，反馈内容如下：

- **用户痛点**：MJDemarcus 在 Issue #2876 中描述了「配置层与运行时层不一致」的体验断裂——CLI 接受参数、DB 持久化成功，但实际运行时容器崩溃。这种「看似可用实则不可用」的状态是用户最反感的体验之一。
- **使用场景**：用户希望将 agent group 切换到 OpenAI 的 `gpt-4o` 模型，属于典型的多 provider 切换需求。
- **满意度**：未表达明确满意/不满意，但问题描述简洁、包含复现步骤，说明用户具备一定技术能力且对产品有期待。

> ⚠️ 注意：今日 Issue 评论数均为 0，无法从评论中提炼更多用户声音。建议维护者主动在 #2876 中回复以收集更多上下文。

---

## 8. 待处理积压

以下 PR 已提交但**尚无审阅者介入**（评论状态为 `undefined`），建议维护者关注：

| PR | 提交时间 | 类型 | 建议优先级 |
|---|---|---|---|
| [#2880](https://github.com/qwibitai/nanoclaw/pull/2880) 安全修复：inbound 符号链接逃逸 | 2026-06-28 | 🔴 Security | **P0 — 立即审合** |
| [#2881](https://github.com/qwibitai/nanoclaw/pull/2881) Discord custom_id 解码修复 | 2026-06-28 | 🟠 Bug fix | **P1 — 本周内审合** |
| [#2878](https://github.com/qwibitai/nanoclaw/pull/2878) Codex OneCLI 陈旧 Token 重连 | 2026-06-28 | 🟡 Bug fix | **P1 — 本周内审合** |
| [#2877](https://github.com/qwibitai/nanoclaw/pull/2877) Telegram Bot API 10.1 富文本 | 2026-06-28 | 🟢 Feature | **P2 — 排入下版本** |
| [#2875](https://github.com/qwibitai/nanoclaw/pull/2875) Coolify 部署适配 | 2026-06-27 | 🟢 Feature | **P2 — 排入下版本** |

**Issue 积压**：

| Issue | 提交时间 | 状态 | 建议 |
|---|---|---|---|
| [#2876](https://github.com/qwibitai/nanoclaw/issues/2876) OpenAI Provider 容器崩溃 | 2026-06-28 | Open，0 评论 | 维护者需尽快确认是否可复现，并反馈排期 |

---

**日报生成时间**：2026-06-29 · **数据来源**：GitHub API（nanocoai/nanoclaw） · **下次更新**：2026-06-30

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：2026-06-29 ｜ 项目地址：github.com/nullclaw/nullclaw**

---

## 1. 今日速览

NullClaw 过去 24 小时整体保持低活跃度运行状态：**无新版本发布、无待处理 PR、仅 1 条 Issue 完成闭环**。社区互动频率较低，未出现新议题激增或紧急修复信号，表明项目当前处于稳定的维护期或暂休期。Issue #50 在创建近 4 个月后完成了最终回复与关闭，维护者响应周期较长值得留意。整体健康度评分：**良好（稳定但低活跃）** ✅

---

## 2. 版本发布

> **无新版本发布。** 本次监控周期内（2026-06-28～06-29）项目无 Release 标签更新。

---

## 3. 项目进展

> **无合并或关闭的 PR。** 过去 24 小时内无代码层面的推进动作，项目整体功能无增量变化。

---

## 4. 社区热点

###  Issue #50 [CLOSED] — Can this run on an Esp32?

- **链接：** https://github.com/nullclaw/nullclaw/issues/50
- **作者：** @ngantrandev **评论：** 4 条 ｜ **反应数：** 0
- **生命周期：** 创建 2026-02-21 → 关闭 2026-06-28（跨度约 **127 天**）
- **诉求分析：** 用户希望在 ESP32 微控制器上运行 NullClaw，这是一个典型的**平台兼容性/移植性需求**。在 AI 助手项目快速向边缘设备下沉的趋势下，此类议题反映了社区对轻量化、嵌入式部署的潜在兴趣。Issue 最终以关闭告终，维护者大概率给出了不可行性说明或明确表示不在支持范围内。4 条评论的互动说明用户对议题有一定跟进意愿，但 👍 数为 0 表明社区需求尚未形成集体共识。

> ⚠️ **关注信号：** 从创建到关闭跨度超过 4 个月，响应周期偏长。如果未来类似边缘部署需求增多，建议维护者在 README 或 FAQ 中主动说明硬件兼容性边界，以降低重复提问率。

---

## 5. Bug 与稳定性

> **今日无 Bug 报告、崩溃或回归问题提交。**
> Issue #50 属于功能咨询类，不构成稳定性风险。项目在过去 24 小时内无已知缺陷暴露。

---

## 6. 功能请求与路线图信号

| 请求来源 | 请求内容 | 纳入可能性评估 |
|---------|---------|---------------|
| Issue #50 | ESP32 / 嵌入式设备支持 |  **较低** — Issue 已被关闭且无后续 PR 推进，官方路线图目前未体现边缘设备方向 |

> **综合判断：** 当前无任何 PR 在排队，可确认短期内无新功能进入交付流程。项目处于**功能冻结或迭代间歇期**。下一版本的驱动力需依赖新 PR 的出现或重大 Issue 的提出。

---

## 7. 用户反馈摘要

基于本周唯一活跃的 Issue #50，提炼用户反馈洞察：

| 维度 | 内容 |
|------|------|
| **使用场景** | 用户希望在资源受限的嵌入式硬件（ESP32）上部署 AI 助手，典型 IoT + AI 融合场景 |
| **痛点/期望** | 缺乏清晰的硬件兼容性文档，用户在尝试前需耗费时间咨询确认 |
| **满意度** | Issue 最终被关闭但互动有限，用户未表达明显不满，也未表达满意——体验为**中性偏冷淡** |
| **潜在机会** | 如果项目有朝边缘侧扩展的意向，可考虑在文档中添加官方支持的硬件最低规格清单 |

---

## 8. 待处理积压

| 积压项 | 类型 | 状态 | 风险等级 | 建议 |
|--------|------|------|----------|------|
| Issue #50 响应延迟 | Issue | 已关闭 |  已解决 | 建议总结关闭结论至 FAQ |
| 整体 Issue 积压 | 系统 | 当前无开放 Issue | 🟢 健康 | 继续监控 |

> **积压评估结论：** NullClaw 当前**零开放 Issue、零待审 PR**，处于极低积压的清洁状态。这一方面说明项目无未处理的技术债务，另一方面也可能意味着社区参与度不足或项目处于非活跃开发期。建议维护者通过发布、文档更新或 Roadmap 公告等方式重新激活社区注意力。

---

*本报告由 AI 智能体自动生成，数据来源：github.com/nullclaw/nullclaw，截至 2026-06-29 00:00 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-06-29 | 数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日保持**高活跃度**，过去 24 小时共产生 42 条 PR 更新和 3 条 Issue 更新，其中 17 个 PR 已完成合并/关闭，显示核心团队推进节奏密集。当前有 **25 个 PR 待合并**，积压量偏大，以依赖升级（Dependabot）和 Reborn 集成测试框架为主。无新版本发布，但存在一个待处理的 release PR（#5311），涉及多个 crate 的破坏性变更。社区侧出现两项重要信号：**Capability Policy 权限体系**提案（#5385）和 **Nightly E2E 持续失败**（#4108），值得重点关注。

---

## 2. 版本发布

无新版本发布。

> ⚠️ **待发布预警**：PR #5311（`chore: release`）已就绪，包含以下破坏性变更：
> - `ironclaw_common` 0.4.2 → **0.5.0**（⚠ API breaking）
> - `ironclaw_skills` 0.3.0 → **0.4.0**（⚠ API breaking）
> - `ironclaw` 0.24.0 → 0.29.1
>
> 建议关注该 PR 合并后的迁移指南。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 说明 |
|---|---|---|
| **#5388** | ✅ 已合并 | 修复 Reborn WebUI Google SSO `id_token` 解码问题（适配 `jsonwebtoken` 10.x），修复 Railway 预览域名 OAuth 状态校验 |
| **#5386** | ✅ 已关闭 | Reborn 集成测试 Slice 9（Embeddings fake）——评估后判定为不可达接缝，停止开发 |
| **#5387** | ✅ 已合并 | Reborn 集成测试 Slice 4 — URL/方法键控 HTTP 匹配器 + 出口断言 API |
| **#5393** | ✅ 已关闭 | 验证 `/benchmark` 构建兼容性的临时 PR |
| **#5236** | ✅ 已关闭 | Issue 已解决：停止将 WebUI v2 dist bundle 产物提交至仓库 |

### 关键推进总结

1. **Reborn 集成测试框架持续扩展**（#5392、#5387、#5386）：团队正在分片构建覆盖 LibSql 矩阵、HTTP 出口匹配、MCP/OAuth 刷新等场景的端到端测试基础设施，Slice 9 经评估后主动止损，显示务实的工程判断。

2. **Google OAuth 登录修复上线**（#5388）：解决了 `jsonwebtoken` 10.x 升级后的 RS256 令牌解码兼容性问题，同时加固了多域名部署场景下的 OAuth 状态安全。

3. **WebUI v2 产物管理清理**（#5236 关闭）：确认不再将前端构建产物提交到主仓库，仓库整洁度提升。

---

## 4. 社区热点

### 🔥 Capability Policy 权限体系提案
- **Issue #5385** — [Add Capability Policy](https://github.com/nearai/ironclaw/issues/5385)
- 作者：zetyquickly | 👍 0 | 💬 0
- **诉求**：提出三层用户模型（Owner / Admin / Member），通过环境变量配置 Owner 身份，实现细粒度能力控制。这是社区对多用户协作场景的明确需求信号。
- **进展**：已有对应的 E2E 测试 PR #5394（`capability policy e2e`）同步开启，作者本人正在推动实现。

### 🔥 Reborn 上下文管理 — 渐进式工具披露
- **PR #5149** — [feat(reborn): Context management — progressive tool disclosure](https://github.com/nearai/ironclaw/pull/5149)
- 作者：serrrfirat | 风险：low | 标记：flag-gated, default off
- **背景**：生产日志显示每次模型调用发送全部 ~91 个工具 schema + 系统提示 + 历史 ≈ 25.8k tokens，每轮重复 ~4 次，导致 NEAR AI 超出 120s 请求超时。此 PR 通过渐进式工具披露削减 prompt 体积，是**性能关键路径上的优化**。

### 🔥 Reborn WebUI v2 Live QA Canary
- **PR #5354** — [Add Reborn WebUI v2 live QA canary](https://github.com/nearai/ironclaw/pull/5354)
- 作者：serrrfirat | 风险：medium
- 将真实 `ironclaw-reborn serve` WebUI 接入 Playwright 自动化测试，使用 CI 密钥注入模式，覆盖实时 LLM/工具集成场景。

---

## 5. Bug 与稳定性

### 🔴 P0 — Nightly E2E 持续失败
- **Issue #4108** — [Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108)
- 状态：**OPEN** | 创建于 2026-05-27，已持续 **32 天**
- 最新失败：2026-06-28 04:47 UTC，commit `6a3b10fa`
- 失败任务：Full E2E / E2E (features)
- **影响**： nightly 构建红灯持续超过一个月，说明主分支存在未被修复的端到端回归，或测试环境本身存在不稳定性。
- **Fix PR**：未发现直接关联的修复 PR。多个 Reborn 集成测试框架 PR（#5392、#5390）可能在长期解决此问题，但短期无明确止血方案。

### 🟡 P2 — Reborn 审批恢复循环
- **PR #5306** — [fix(reborn): ask-each-time approval resume loop](https://github.com/nearclaw/ironclaw/pull/5306)
- 状态：**OPEN** | 风险：low
- 修复 `ask_each_time` 审批门控在恢复已批准的一次性能力租约时的循环问题。涉及安全审批流程，需审慎合并。

### 🟡 P2 — Slack 主机会话绑定持久化
- **PR #5252** — [fix(reborn): persist Slack host conversation bindings](https://github.com/nearai/ironclaw/pull/5252)
- 状态：**OPEN** | 风险：low
- 修复 Slack 主机测试版会话绑定在持久化层的路由问题，增加重启回归测试。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 状态 | 纳入可能性 |
|---|---|---|---|
| **Capability Policy（权限策略）** | Issue #5385 + PR #5394 | 提案 + E2E 同步开发 | ⭐⭐⭐ 高 — 作者自推实现，且有多用户协作场景需求 |
| **渐进式工具披露 / 上下文管理** | PR #5149 | 开发中，flag-gated | ⭐⭐⭐ 高 — 直接解决生产超时问题，默认关闭降低风险 |
| **Reborn 错误可恢复性分级** | PR #5390（引用审计计划文档） | 开发中 | ⭐⭐ 中 — 属于稳定性基础设施 |
| **Web Access Exa 内容获取优化** | PR #5395 | 开发中 | ⭐⭐ 中 — 工具集成优化 |
| **Slack 配对流程加固** | PR #5362 | 开发中 | ⭐⭐ 中 — 用户体验改进 |

**路线图判断**：当前开发重心明显在 **Reborn 稳定性与可观测性**（集成测试框架、错误分类器、QA Canary）和 **性能优化**（上下文管理）两条主线。Capability Policy 权限体系可能成为下一个重要功能里程碑。

---

## 7. 用户反馈摘要

由于今日 3 条 Issue 评论均为 0，无法从评论中提取用户反馈。从 Issue/PR 摘要中可推断以下信号：

- **多用户权限管理需求真实存在**（#5385）：提案详细定义了 Owner/Admin/Member 三层模型和环境变量配置方式，说明至少有一个部署场景需要细粒度访问控制。
- **生产环境超时问题严重**（#5149）：25.8k tokens × 4 次/轮的超时模式已被生产日志证实，用户对响应速度有明确痛点。
- **前端产物管理曾引发困扰**（#5236）：WebUI v2 dist bundle 被提交到仓库的历史问题已被识别并修复，开发者体验改善。

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| 项目 | 链接 | 等待天数 | 说明 |
|---|---|---|---|
| **Nightly E2E 失败** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | **32 天** | 🔴 持续一个月未修复，主分支稳定性存疑，建议优先排查或至少添加根因分析评论 |
| **Dependabot 依赖升级积压** | #5391, #4002, #5114, #4032, #4498 | 1–37 天 | 5 个 Dependabot PR 待合并，其中 #4002 已等待 37 天（16 个 GitHub Actions 升级），存在工具链落后风险 |
| **Barcelona Hackathon 分支** | [#4787](https://github.com/nearai/ironclaw/pull/4787) | 17 天 | 标记 NO MERGE，但持续同步上游，可能包含对 hackathon 用户有价值的稳定性修复，考虑是否有可提取的改进 |
| **Release PR 待合并** | [#5311](https://github.com/nearai/ironclaw/pull/5311) | 2 天 | 包含多个 crate 的 breaking changes，需确认迁移文档是否就绪后再合并 |

---

**日报生成时间**：2026-06-29  
**下次更新**：2026-06-30

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-06-29 | 数据来源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

过去 24 小时项目活跃度**中等偏低**。共产生 5 条 Issue 更新（1 新开 / 4 关闭）和 5 条 PR 更新（2 待合并 / 3 关闭），无新版本发布。值得注意的是，今日关闭的 4 条 Issues 和 3 条 PR 均带有 `[stale]` 标签，说明这些条目已长期无实质进展并被自动化流程清理，**并非今日真正解决**。唯一新开的活跃 Issue #2216 涉及 Memory Search 在 Windows 下的 DB 锁阻塞问题，值得优先关注。整体来看，项目当前处于**维护期平稳状态**，无重大发布或破坏性变更。

---

## 2. 版本发布

> 过去 24 小时无新版本发布，本节省略。

---

## 3. 项目进展

今日有 **3 条 PR 被关闭（stale）**，均非当日合并，而是因长期无活动被自动清理。当前仍有 **2 条 PR 处于 OPEN 状态**，是近期实际可推进的变更：

| PR | 状态 | 说明 |
|---|---|---|
| [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) `feat(scheduledTask)` | 🟡 OPEN | 定时任务模块 UI 全面升级：表格→卡片网格布局、新增搜索/日期范围筛选/历史分组。与技能/MCP 页面风格统一。 |
| [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) `fix(cowork)` | 🟡 OPEN | 修复技能选择状态全局共享问题，改为按会话独立管理（以 draftKey 为键存储）。 |

**评估：** 两条 PR 均由内部贡献者 `gongzhi-netease` 提交，创建时间分别为 4 月 5 日和 4 月 6 日，已开放近 3 个月。PR #1494 是体验类 bug fix，改动范围可控，建议优先 review 合并；PR #1488 涉及 UI 重构，回归面较大，需充分测试。

---

## 4. 社区热点

### 🔥 唯一活跃 Issue：Memory Search 无法切换 embedding provider

**[Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)** — *Memory Search 无法切换为 local embedding provider，索引重建被 DB 锁阻塞 (EBUSY)*

- **作者：** AL-Mint | **环境：** LobsterAI 2026.6.1 / Windows 11 / Node.js v24.11.1
- **核心诉求：**
  1. Memory Search 的 embedding provider 被硬编码为 `openai`，UI 中无法切换为 local 或其他 provider
  2. 当 OpenAI API 配额耗尽（HTTP 429）时，记忆搜索功能**完全不可用**——无降级方案
  3. 尝试手动重建索引时遭遇 SQLite `EBUSY` 锁错误，导致索引重建失败

**分析：** 该 Issue 反映了两个层面的问题——**架构层面**（embedding provider 缺乏可插拔设计，过度依赖单一闭源服务）和**稳定性层面**（Windows 下 SQLite 并发锁未妥善处理）。对于 Windows 本地部署用户而言，这是一个**高影响度**问题：一旦 OpenAI 配额用尽，核心的记忆检索功能即告瘫痪。目前尚无关联 fix PR。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| 🔴 **高** | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) | OPEN | Memory Search 锁定 OpenAI provider，429 时完全不可用；Windows 下索引重建 DB 锁阻塞 | ❌ 无 |
| 🟡 **中** | [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) | CLOSED (stale) | 定时任务创建时选择"不重复"后点击创建按钮无响应，无报错提示 | ❌ 未修复即关闭 |
| 🟡 **中** | [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | CLOSED (stale) | 技能已停用后，对话中仍可通过关键字调用该技能 | ❌ 未修复即关闭 |
| 🟢 **低** | [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) | CLOSED (stale) | Agent 对话后技能标签消失，需重新切换 Agent 才展示 | ❌ 未修复即关闭 |

**关键发现：** 4 条被 stale 关闭的 Issue 中，#1437、#1439、#1442 均为**功能性 bug 未经修复即被自动关闭**，存在回归风险。建议维护者评估是否应重新打开或纳入修复计划。

---

## 6. 功能请求与路线图信号

### 用户功能请求

| Issue | 请求内容 | 信号强度 |
|---|---|---|
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | 适配 openclaw 新版本（v2026.3.24 存在 breaking change） | 🟡 中 — 依赖上游兼容性，需持续跟踪 |
| [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) | Memory Search 支持可插拔 embedding provider（local 等） | 🔴 强 — 涉及架构扩展性，多平台用户需要 |

### 路线图判断

结合待合并 PR，以下功能**大概率已在开发管线中**：

1. **定时任务 UX 升级**（PR #1488）— 卡片化、搜索、历史分组
2. **技能选择按会话隔离**（PR #1494）— 体验优化
3. **技能导入去重校验**（PR #1445，已 stale 关闭但改动合理，可能被重新提交）

**尚未进入开发但社区有明确需求的：**
- Embedding provider 可插拔化（Issue #2216）
- openclaw 新版本适配（Issue #1443）

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的真实用户痛点：

| 维度 | 反馈 |
|---|---|
| **🔧 稳定性不满** | Windows 用户遭遇 DB 锁导致索引重建失败，缺乏错误恢复机制 |
| **🔌 可扩展性不满** | Memory Search 强绑定 OpenAI，无 local fallback，API 配额耗尽即功能瘫痪 |
| **📦 依赖升级焦虑** | 用户尝试升级 openclaw 到 v2026.3.24 因 breaking change 失败，希望官方提供适配时间表 |
| **🐛 交互体验瑕疵** | 定时任务创建无响应但无错误提示（#1437）；技能停用后仍可被调用（#1439）—— 反映出**前端校验和状态同步**存在系统性疏漏 |
| **🤔 功能理解困惑** | 用户对"Agent 选择技能"的作用不清晰（#1442），暗示产品文档或 UI 引导不足 |

**整体情绪：** 用户对 LobsterAI 的核心能力（记忆搜索、技能系统、定时任务）有较高期待，但对**边界场景处理**（API 失败降级、状态一致性、错误提示）感到不满。

---

## 8. 待处理积压

以下条目长期未响应，提醒维护者关注：

| 类型 | 链接 | 创建日期 | 等待天数 | 建议行动 |
|---|---|---|---|---|
| PR | [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) — 定时任务 UI 升级 | 2026-04-05 | **~85 天** | 确认是否需要继续推进或关闭；UI 重构需回归测试 |
| PR | [#1494](https://github.com/netease-youdao/LobsterAI/pull/1494) — 技能选择按会话隔离 | 2026-04-06 | **~84 天** | 改动范围小、问题明确，建议优先 review 合并 |
| Issue | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) — Memory Search provider 可插拔 | 2026-06-28 | **1 天** | 🔴 新报告高影响问题，建议 48h 内响应确认 |
| Issue | [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) — 定时任务创建无响应 | 2026-04-03 | **~87 天** | 已 stale 关闭但 bug 未修复，建议重新评估 |
| Issue | [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) — 技能停用后仍可调用 | 2026-04-03 | **~87 天** | 已 stale 关闭但 bug 未修复，涉及 system prompt 注入安全 |

---

**日报总结：** LobsterAI 当前处于维护平稳期，无重大发布。核心风险点在于 **4 条功能性 bug 被 stale 自动关闭而未实际修复**，以及新报告的 **Memory Search 在 Windows 下的可用性问题**（Issue #2216）。建议维护者优先处理 #2216 的响应，并重新评估 stale 关闭的 bug 类 Issue 是否需要修复。两条积压近 3 个月的 PR（#1488、#1494）也需要明确的推进或关闭决策。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：2026-06-29 | 数据来源：github.com/moltis-org/moltis**

---

## 1. 今日速览

过去 24 小时项目整体活跃度**偏低**，共产生 1 条新 Issue 和 2 条新 PR，无新版本发布。两名贡献者（`resumeparseeval`）集中提交了 2 个修复型 PR，分别针对 gateway 依赖膨胀和 agent 图片上下文溢出问题，均处于待审状态。社区侧仅有一位用户报告了 Apple Container 命名长度超限的 Bug，尚未有官方回复。项目当前处于**稳定维护期**，无重大功能推进，但存在若干值得关注的稳定性隐患。

---

## 2. 版本发布

> 过去 24 小时无新版本发布，本节省略。

---

## 3. 项目进展

过去 24 小时**无 PR 被合并或关闭**，但有 2 个新 PR 提交，预示以下修复即将进入主线：

| PR | 方向 | 预期影响 |
|---|---|---|
| **#1139** `fix(gateway): don't force-enable matrix-sdk via the metrics feature` | 依赖优化 | 修复 `metrics` feature 错误地强制引入 `moltis-matrix` 依赖的问题，避免在禁用 Matrix channel 时不必要地拉取整个 `matrix-sdk`，减小二进制体积和编译时间 |
| **#1138** `fix(agents): downscale oversized images before they enter model context` | 稳定性修复 | 在图片进入模型上下文前进行尺寸压缩，防止单张高分辨率照片（如 4032×3024）以 base64 内联后占用约 350K tokens 导致 prompt 被溢出保护机制拒绝 |

**整体进度评估**：两个 PR 均聚焦于"减少不必要的资源消耗"，反映出项目在**构建效率**和**运行时鲁棒性**两个维度持续打磨。一旦合并，将显著改善非 Matrix 用户的构建体验，以及移动端拍照场景下的对话可用性。

---

## 4. 社区热点

### Issue #1137 — Apple Container ID exceeds name limit
- **链接**：[moltis-org/moltis#1137](https://github.com/moltis-org/moltis/issues/1137)
- **作者**：holgzn | **状态**：OPEN | **👍**：0 | **评论**：1
- **核心诉求**：在 Apple Container 环境下，自动生成的容器 ID 超出了系统对名称长度的限制，导致容器创建/启动失败。
- **分析**：这是一个**平台兼容性 Bug**，影响 macOS 上使用 Apple Container 后端运行 Moltis 的用户。问题虽小但会直接阻断启动流程，属于高优先级修复范畴。目前仅有 1 条评论（可能为作者自补充），尚未有维护者响应。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 已有 Fix PR |
|---|---|---|---|
| 🔴 **高** | [#1137](https://github.com/moltis-org/moltis/issues/1137) | Apple Container ID 超长导致容器无法启动 | ❌ 无 |
| 🟡 **中** | [#1138](https://github.com/moltis-org/moltis/pull/1138) (PR) | 高分辨率图片以 base64 内联后撑爆上下文窗口，prompt 被拒绝 | ✅ PR #1138 待审 |
| 🟡 **中** | [#1139](https://github.com/moltis-org/moltis/pull/1139) (PR) | `metrics` feature 强制引入 matrix-sdk，造成不必要的依赖膨胀 | ✅ PR #1139 待审 |

**总结**：当前唯一无修复方案的 Bug 是 #1137（Apple Container 命名限制），建议维护者尽快确认复现路径并给出修复方案。

---

## 6. 功能请求与路线图信号

过去 24 小时**无新的功能请求 Issue**。

从近期 PR 方向可推断以下路线图信号：

1. **构建系统精细化** — PR #1139 表明团队正在梳理 feature flag 之间的依赖关系，未来可能进一步拆分可选依赖，支持更轻量的构建配置。
2. **多模态输入优化** — PR #1138 对图片进行预处理压缩，暗示项目正在增强对多模态（图片）输入的支持鲁棒性，后续可能引入更完善的媒体文件处理管道。

---

## 7. 用户反馈摘要

| 维度 | 内容 |
|---|---|
| **痛点** | Apple Container 用户因容器 ID 命名长度限制无法正常启动 Moltis（[#1137](https://github.com/moltis-org/moltis/issues/1137)） |
| **使用场景** | 移动端拍照后直接发送图片进行对话（触发 PR #1138 修复的上下文溢出问题） |
| **满意点** | 未在今日评论中体现 |
| **不满意点** | 未在今日评论中体现 |

> 注：今日评论数量有限（仅 1 条），用户反馈样本不足，难以形成趋势性结论。

---

## 8. 待处理积压

| 项目 | 链接 | 状态 | 建议 |
|---|---|---|---|
| Issue #1137 — Apple Container ID 超长 | [链接](https://github.com/moltis-org/moltis/issues/1137) | OPEN，无维护者回复 | ⚠️ 建议 48 小时内确认复现并给出修复 ETA |
| PR #1138 — 图片降采样修复 | [链接](https://github.com/moltis-org/moltis/pull/1138) | OPEN，待审 | 建议尽快 review，该修复直接影响多模态可用性 |
| PR #1139 — metrics feature 依赖修正 | [链接](https://github.com/moltis-org/moltis/pull/1139) | OPEN，待审 | 建议尽快 review，影响构建产物大小 |

---

**日报生成时间**：2026-06-29  
**下次更新**：2026-06-30

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-06-29 | 数据来源：agentscope-ai/CoPaw**

---

## 1. 今日速览

过去 24 小时 CoPaw 项目保持中等活跃度：共产生 **5 条 Issue 更新**（4 开/1 闭）和 **6 条 PR 更新**（全部待合并），无新版本发布。社区贡献呈现两个明显方向——**钉钉渠道能力扩展**（mention 支持已有配套 PR 当日提交）和**后端单元测试系统性补强**（3 个 Agentscope 2.0 适配的测试 PR 集中更新）。值得关注的是，跨 Agent 通信的无限循环 Bug（#5204）在提出两周后被正式关闭，但根因层面的修复 PR 尚未明确关联，需确认是否通过配置规避而非代码层面解决。整体项目健康度良好，无破坏性变更或紧急安全事件。

---

## 2. 版本发布

> 过去 24 小时无新版本发布，本节省略。

---

## 3. 项目进展

今日无 PR 合并或关闭。以下 PR 处于待合并状态，代表近期可能进入主线的工作：

| PR | 作者 | 类型 | 说明 |
|---|---|---|---|
| [#5590](https://github.com/agentscope-ai/CoPaw/pull/5590) | wananing | Feature | 为钉钉主动发送路径（`/messages/send`、`channels send`、cron）添加 `@mention` 支持，直接响应 Issue #5564 |
| [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) | niceIrene | Feature (Under Review) | 新增 **scroll** 上下文管理策略——将完整对话持久化到 SQLite，通过 Python REPL 按需召回，作为原生压缩的替代方案 |
| [#5586](https://github.com/agentscope-ai/CoPaw/pull/5586) | zorrofox1121 | Bug Fix | 修复会话内切换模型时，compaction 阈值仍读取静态配置而非运行时模型覆盖值的问题 |
| [#5581](https://github.com/agentscope-ai/CoPaw/pull/5581) | hanson-hex | Test | app-infra 后端单元测试（31 cases），适配 Agentscope 2.0 |
| [#5422](https://github.com/agentscope-ai/CoPaw/pull/5422) | hanson-hex | Test | chats 模块单元测试（38 cases），适配 Agentscope 2.0 |
| [#5423](https://github.com/agentscope-ai/CoPaw/pull/5423) | hanson-hex | Test | crons 模块单元测试（51 cases），适配 Agentscope 2.0 |

**关键信号：** PR #5590 与 Issue #5564 同日出现，说明该功能需求已有现成实现即将落地；3 个测试 PR 合计 **120 个用例**，表明团队正在系统性地为 Agentscope 2.0 迁移补齐测试覆盖。

---

## 4. 社区热点

### 🔥 Issue #5204 — 跨 Agent 无限循环（已关闭）
**链接：** https://github.com/agentscope-ai/CoPaw/issues/5204  
**作者：** laeni | **评论：** 3 条 | **👍：** 0

两个 QwenPaw Agent 通过 Matrix 通信时陷入永无止境的互唤醒循环——Agent A 的消息唤醒 Agent B，B 的回复又唤醒 A，runtime 层面缺乏打断机制。报告者明确指出这与单 Agent 内部的 ReAct 死循环（#5162、#4967）或 subagent 轮询（#4873）不同，属于**跨 Agent 双向唤醒链**问题。

**分析：** 该 Issue 在创建 13 天后关闭，但未在摘要中看到关联的修复 PR 链接。建议维护者确认关闭原因是"已通过某 PR 修复"还是"转为文档/配置建议"，以避免同类问题在 Discord、Telegram 等其他渠道复现。

### 🔥 Issue #5564 — 钉钉 @mention 支持
**链接：** https://github.com/agentscope-ai/CoPaw/issues/5564  
**作者：** tecgic | **评论：** 2 条 | **👍：** 0

多 Agent 协作场景下，需要在钉钉群中 `@` 另一个 Agent 以触发响应，并让群成员可见完整协作记录。目前主动发送和 cron 推送均无法指定 `@` 对象。

**分析：** 该需求已有配套 PR #5590 当日提交，响应速度极快，预计近期可合并。

### Issue #5588 — 记忆搜索 Reranker 两阶段检索
**链接：** https://github.com/agentscope-ai/CoPaw/issues/5588  
**作者：** cjc0045 | **评论：** 1 条

当前 `memory_search` 仅使用 embedding 单阶段检索，随着记忆库增长召回精度下降。建议引入专用 Reranker 模型做二次精排，并启用 reME service 的 `enable_llm_rerank` 能力。

**分析：** 这是一个典型的"规模上来后精度不够"的演进信号，反映已有用户将 CoPaw 用于长期记忆场景。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | Fix PR |
|---|---|---|---|
| 🔴 **高** | [#5204](https://github.com/agentscope-ai/CoPaw/issues/5204) | 跨 Agent Matrix 互聊无限循环（已关闭，修复方式待确认） | 未明确关联 |
| 🟡 **中** | [#5587](https://github.com/agentscope-ai/CoPaw/issues/5587) | Qwen-Image Tool 安装报错（v1.1.12.post2） | 无 |
| 🟢 **低** | [#5586](https://github.com/agentscope-ai/CoPaw/pull/5586) | 会话内切换模型后 compaction 阈值未跟随运行时模型 | PR #5586 待合并 |

**重点提醒：**
- **#5587 Qwen-Image Tool 安装错误** 报告于最新版本 v1.1.12.post2，目前仅有 1 条评论，缺少复现步骤和错误日志，建议维护者主动跟进获取完整 traceback。
- **#5204 跨 Agent 循环** 虽已关闭，但如果是通过文档建议（如设置轮询上限）而非代码修复解决，建议在 Issue 中明确说明，防止其他渠道用户重复报告。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 状态 | 判断 |
|---|---|---|---|
| 钉钉 `@mention` | [#5564](https://github.com/agentscope-ai/CoPaw/issues/5564) | PR #5590 已提交 | ✅ **极可能纳入下一版本** |
| 输入框连续添加多个 Skill | [#5589](https://github.com/agentscope-ai/CoPaw/issues/5589) | 仅 1 条评论 | ⏳ 待评估，体验优化类 |
| 记忆搜索 Reranker 两阶段检索 | [#5588](https://github.com/agentscope-ai/CoPaw/issues/5588) | 仅 1 条评论 | ⏳ 中长期路线图候选 |
| Scroll 上下文管理（SQLite 持久化+REPL 召回） | PR [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) | Under Review | ⏳ 架构级变更，需充分测试 |

**路线图判断：** 钉钉 mention 支持（#5590）是最明确的下一版本功能。记忆搜索 Reranker 和 scroll 上下文管理反映了两个不同方向的用户诉求——**检索精度**和**长对话管理**，可能成为后续 minor version 的核心卖点。

---

## 7. 用户反馈摘要

**真实痛点：**

1. **多 Agent 协作的渠道能力不足** — 钉钉用户（#5564）希望在群聊中实现 Agent 间的 `@` 触发，这反映了 CoPaw 正从"单人单 Agent"向"多人多 Agent 协作"场景演进，但渠道层（channel layer）的交互能力尚未跟上。

2. **跨 Agent 通信稳定性** — #5204 揭示了当多个自治 Agent 通过消息通道互联时，缺乏全局级别的循环检测和断路机制。这是一个分布式系统层面的挑战，而非简单的配置问题。

3. **记忆系统面临规模瓶颈** — #5588 表明已有用户积累了大量记忆数据，单阶段 embedding 检索已不够用。这是产品从"demo 级"走向"生产级"的典型信号。

4. **UI 交互细节待打磨** — #5589 的"连续添加 Skill"需求虽小，但反映了重度用户在效率上的诉求。

**满意方向：** 未在今日 Issue 评论中观察到明确的正面评价，但 #5564 的配套 PR 在 3 天内提交，侧面说明维护响应速度令贡献者满意。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于等待状态，建议维护者关注：

| 项目 | 创建日期 | 等待天数 | 说明 |
|---|---|---|---|
| PR [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) — Scroll 上下文管理 | 2026-06-19 | 10 天 | 首次贡献者，Under Review 状态，架构影响较大，需及时反馈评审意见 |
| Issue [#5587](https://github.com/agentscope-ai/CoPaw/issues/5587) — Qwen-Image Tool 安装错误 | 2026-06-28 | 1 天 | 缺少复现信息，需主动追问 |
| Issue [#5588](https://github.com/agentscope-ai/CoPaw/issues/5588) — 记忆 Reranker | 2026-06-28 | 1 天 | 功能复杂度较高，需评估优先级 |
| Issue [#5589](https://github.com/agentscope-ai/CoPaw/issues/5589) — 连续添加 Skill | 2026-06-28 | 1 天 | 小优化，可快速响应 |

**特别提醒：** PR #5321 由首次贡献者提交，已等待 10 天。对于首次贡献者，及时的评审反馈（即使是"需要更多讨论"）对维护社区活跃度至关重要。

---

*本报告基于 2026-06-29 GitHub 公开数据自动生成，仅供参考。如需深入分析特定 Issue/PR，请查阅 [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-06-29 | 数据来源：github.com/zeroclaw-labs/zeroclaw**

---

## 1. 今日速览

ZeroClaw 今日保持高活跃度，Issues 与 PR 各录得 50 条更新，社区贡献节奏稳健。项目当前无新版本发布，开发重心集中在 **v0.8.3 运行时执行 / WASM 插件 / SOP 控制平面** 三条主线，以及 **v0.9.0 安全与网关** 长期路线图的推进上。今日合并/关闭的 PR 仅 3 个，待合并积压达 47 个，显示审查带宽仍是瓶颈。多个高优先级 Bug（Windows 测试全崩、MCP 隔离静默失效、SQLite 默认配置矛盾）持续未解，需维护者关注。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共 3 个，具体如下：

| PR | 状态 | 说明 |
|---|---|---|
| **#8446** fix(telegram): stay silent for unauthorized senders in group chats | ✅ MERGED | 修复 Telegram 群组中非授权发送者触发运营商审批提示的问题，避免在共享房间中刷屏并泄露绑定命令。直接提升 Telegram 频道安全性与用户体验。 |
| **#8432** bug(ci): package publish tokens fail late when push access is missing | ✅ CLOSED | 修复发布流程中 Homebrew/Scoop token 仅有读取权限时延迟失败的问题。提升 CI 发布可靠性。 |
| **#8275** [Bug]: Scoop manifest does not register zerocode | ✅ CLOSED | 修复 Windows Scoop 安装包未注册 `zerocode.exe` 到 PATH 的问题。 |

**整体推进评估：** 今日合并量偏低（3/50），大量高价值功能 PR 仍积压待审（见第 8 节）。项目在 Telegram 安全修复和 CI 稳定性上有所前进，但核心功能（WASM 插件宿主、Inkbox 频道、SOP 路由引擎）的合并进度将决定 v0.8.3 的发布节奏。

---

## 4. 社区热点

以下按讨论热度排序，取今日评论最多的 Issues/PRs：

### 🔥 RFC: Work Lanes, Board Automation, and Label Cleanup — 12 条评论
**[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** | 状态：OPEN / Accepted / In-Progress
- **作者：** Audacity88 | **标签：** RFC, governance, priority:p2
- **核心诉求：** 提出工作流自动化与标签治理方案，让任务分发更轻松，减少维护者手动管理负担。已迭代至 Rev. 5，进入落地阶段。
- **意义：** 这是项目治理层面的重要 RFC，反映了社区规模增长后对流程自动化的迫切需求。

### 🔥 Prompt Caching does not work with Telegram — 4 条评论
**[Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)** | 状态：CLOSED
- **作者：** edgarkech | **标签：** bug, channel:telegram, agent:prompt
- **核心诉求：** Telegram 渠道下 prompt caching 失效，日志显示 "forcing full prompt re-processing due to lack of cache data"，导致每次对话都需完整重处理 prompt，增加延迟和 token 消耗。
- **状态：** 已关闭，但根因是否完全修复需跟进。

### 🔥 RFC: Deconflict Plugin System Goals in FND-001 — 4 条评论
**[Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)** | 状态：OPEN / Accepted
- **作者：** bheatwole | **标签：** RFC, runtime:wasm, risk:high
- **核心诉求：** 提议用原生 wasmtime component model 宿主替代 Extism，将插件构建目标统一到 `wasm-wasip2`。FND-001 文档中存在多处互斥承诺，需先行解决。
- **关联 PR：** [#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) feat(plugins): wasmtime component-model host（待合并，size:XL）

### 🔥 Cron/Heartbeat NO_REPLY sentinel 泄漏 — 4 条评论
**[Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)** | 状态：OPEN / In-Progress
- **作者：** loganprit | **标签：** bug, cron, heartbeat
- **核心诉求：** 当 cron/heartbeat 任务返回 `NO_REPLY` 时，投递路径将字面量 "NO_REPLY" 发送到 Telegram 等渠道，产生噪音消息。

### 🔥 Per-agent custom environment variables — 4 条评论
**[Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)** | 状态：OPEN / needs-author-action
- **作者：** susyabashti | **标签：** RFC, security, tool:shell, tool:mcp
- **核心诉求：** 引入 `runtime_context` 和 `runtime_secrets` 配置块，解决多租户场景下的身份、参数和 token 隔离问题。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

### 🔴 P1 — 高优先级

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|--- |
| **[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)** | `mcp_bundles` 在 Config 中解析展示但运行时从未执行 — per-agent MCP 隔离静默失效 | OPEN / In-Progress | 无 |
| **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** | Windows 下 74 个测试失败（Unix 专属命令、路径语义、控制台编码） | OPEN / Accepted | 无 |
| **[#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)** | SQLite 为默认 memory backend 但 quickstart 不要求 embedding model — hybrid search 静默降级为纯关键词 | OPEN | 无 |

### 🟡 P2 — 中优先级

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|--- |
| **[#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)** | Telegram 渠道 prompt caching 失效 | CLOSED | 已关闭 |
| **[#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)** | Cron/heartbeat 发送 NO_REPLY 字面量文本 | OPEN / In-Progress | 无 |
| **[#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366)** | Heartbeat engine 从 data_dir 而非 agent workspace 读取 HEARTBEAT.md | CLOSED | 已关闭 |
| **[#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)** | ZeroCode 快捷键/帮助在 macOS 上误导或不可达 | OPEN / Accepted | 无 |
| **[#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445)** | Telegram 多消息模式需求（当前所有 turns 拼接为一条消息） | OPEN（今日新建） | 无 |

### 🟢 P3 — 低优先级

| Issue | 标题 | 状态 |
|---|---|---|
| **[#8275](https://github.com/zeroclaw-labs/zeroclaw/issues/8275)** | Scoop manifest 未注册 zerocode | CLOSED |
| **[#7996](https://github.com/zeroclaw-labs/zeroclaw/issues/7996)** | 受限部署的临时文件清理配置 | CLOSED (wontfix) |

**稳定性评估：** 3 个 P1 Bug 均无关联 Fix PR，其中 #7733（MCP 隔离静默失效）具有安全相关性，建议优先处理。#7462（Windows 测试全崩）长期存在，CI 不覆盖 Windows 是根本原因。

---

## 6. 功能请求与路线图信号

### 今日新建 / 活跃的功能请求

| Issue | 诉求 | 路线图信号 |
|---|---|---|
| **[#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445)** Telegram 多消息模式 | 每个 agent turn 独立发送一条消息 | 渠道体验优化，可能纳入 v0.8.x |
| **[#8442](https://github.com/zeroclaw-labs/zeroclaw/issues/8442)** Matrix 单消息流式草稿 | 工具/进度/推理活动流式写入一个草稿消息 | 已有 PR [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) 待合并 |
| **[#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415)** Telegram Bot API 10.1 富消息 | 改善 Telegram 表格等富文本渲染 | 渠道体验优化 |
| **[#8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379)** WhatsApp 被动群聊上下文 | 存储未 @ 机器人的群消息作为被动上下文 | 渠道扩展 |
| **[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** .ignore 文件机制 | 保护敏感文件免受 AI agent 访问 | 安全增强，可能纳入 v0.9.0 |
| **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)** Wire-Protocol-First Provider Model | 以 `wire_api` 作为 provider 主要组织轴 | 架构 RFC，需社区讨论 |
| **[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)** Per-agent 环境变量 | 多租户隔离 | 安全/多租户方向 |
| **[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)** 全渠道预构建资源包 | 发布 `channels-full` 预构建二进制 | 安装体验优化 |

### 路线图追踪器状态

| Tracker | 版本 | 状态 |
|---|---|---|
| **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** | v0.9.0 auth/security/gateway | 111 open items (10 PRs, 101 issues) |
| **[#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)** | v0.8.3 runtime/agent-loop/tools | In-Progress |
| **[#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)** | v0.8.3 WASM plugin program | In-Progress |
| **[#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)** | v0.8.3 observability/CI/docs | In-Progress |
| **[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)** | SOP milestone → 5/5 | In-Progress |

**判断：** 下一版本（v0.8.3）最可能落地的功能包括：WASM 插件宿主（#8368）、SOP 步骤路由与 schema 强制（#8430, #8420）、Matrix 单消息流式（#8443）、Inkbox 频道（#8384）。安全侧的 .ignore 机制和 per-agent 环境变量可能排入 v0.9.0。

---

## 7. 用户反馈摘要

从今日 Issues 评论与描述中提炼的真实用户痛点：

### 😤 不满意 / 痛点

1. **Telegram prompt caching 失效**（[#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)）：用户明确对比 CLI 与 Telegram 渠道，前者正常后者失败，导致 token 成本增加和响应延迟。这是直接影响日常使用的性能退化。

2. **Windows 测试全崩无人修**（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)）：74 个测试失败，CI 不覆盖 Windows，意味着 Windows 用户始终处于"无人验证"状态。贡献者已提交详细报告但长期无进展。

3. **MCP 隔离静默失效**（[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)）：配置界面显示 per-agent MCP 隔离已配置，但运行时完全不执行。用户直到手动验证才发现——这是"比不隔离更危险"的场景，因为用户误以为已保护。

4. **SQLite 默认配置矛盾**（[#8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)）：默认选择 sqlite 但 quickstart 不提示需要 embedding model，用户以为 hybrid search 正常工作，实际静默降级为关键词搜索。

5. **NO_REPLY 字面量泄漏**（[#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)）：心跳/cron 任务向 Telegram 发送 "NO_REPLY" 文本，用户收到无意义消息。

### 👍 满意 / 正向信号

- 多个 RFC 获得维护者快速接受（status:accepted），显示治理流程运转良好。
- 安全相关 PR（Telegram 群组未授权发送者静默处理 #8446）被迅速合并，显示团队对安全问题的响应速度。
- SOP 能力持续获得多 PR 推进（#8430, #8420），社区对该功能方向有热情。

---

## 8. 待处理积压

以下重要 PR 长期待审，提醒维护者关注：

| PR | 标题 | 作者 | 创建日期 | 标签 | 等待天数 |
|---|---|---|---|---|---|
| **[#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368)** | feat(plugins): wasmtime component-model host for tool/channel/memory | singlerider | 06-26 | size:XL, risk:high | 3天 |
| **[#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)** | feat(inkbox): native Inkbox channel (email+SMS+voice+iMessage) + Quickstart | dimavrem22 | 06-27 | size:XL, risk:high | 2天 |
| **[#8430](https://github.com/zeroclaw-labs/zeroclaw/pull/8430)** | feat(sop): enforce step routing | Nillth | 06-28 | size:XL, risk:high | 1天 |
| **[#8420](https://github.com/zeroclaw-labs/zeroclaw/pull/8420)** | feat(sop): enforce step schemas at engine boundary | Nillth | 06-28 | size:XL, risk:high | 1天 |
| **[#8157](https://github.com/zeroclaw-labs/zeroclaw/pull/8157)** | ci: add Semgrep (PR gate) and CodeQL (master+schedule) static analysis | ConYel | 06-22 | size:S, risk:high | 7天 |
| **[#8422](https://github.com/zeroclaw-labs/zeroclaw/pull/8422)** | docs(architecture): document runtime state ownership | Audacity88 | 06-28 | size:S, docs | 1天 |

**积压分析：** 当前待合并 PR 共 47 个，其中多个 size:XL 的功能性 PR（#8368, #8384, #8430, #8420）涉及核心架构变更，需要维护者投入大量审查时间。建议优先审查 #8157（CI 安全门禁，size:S）以快速提升代码安全基线，同时安排时间处理 WASM 插件宿主（#8368）——这是 v0.8.3 路线图的基石。

---

*日报生成时间：2026-06-29 | 下次更新：2026-06-30*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*