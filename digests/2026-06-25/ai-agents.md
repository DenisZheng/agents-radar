# OpenClaw 生态日报 2026-06-25

> Issues: 346 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-25 00:39 UTC

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

# OpenClaw 项目日报 — 2026-06-25

## 1. 今日速览

OpenClaw 今日活跃度极高，过去 24 小时共产生 **346 条 Issue 更新**（新开/活跃 281 条，关闭 65 条）和 **500 条 PR 更新**（待合并 447 条，已合并/关闭 53 条），并发布 **2 个新版本**。项目处于高并发协作状态，社区贡献者集中提交了安全边界加固、channel 兼容性修复和内存架构改进等一批高质量 PR。与此同时，长期积压的 P1 级 Bug（如 Windows 客户端缺失、Session/Transcript 迁移、多平台 crash-loop 等）仍在持续引发大量讨论，维护者需要同时处理大量 security-boundary 和产品决策评审。

---

## 2. 版本发布

### v2026.6.11-beta.1

| 项目 | 详情 |
|---|---|
| **版本号** | openclaw 2026.6.11-beta.1 |
| ** Highlights** | **更强大的 Channel 控制能力 |

主要更新：
- **Slack Relay 模式**：全新 relay 模式让 Slack 频道的自动化操作更简洁（#94707）
- **原生 Mattermost `/oc_queue`**：Mattermost 频道新增原生队列命令（#95546）
- **Per-DM 模型覆盖**：支持为不同 DM 会话指定不同模型（#95120）
- 感谢 @sjf-oa、@amknight、@xydigit-zt、@thomaszta、@gandalf-at-lerian 的贡献

> GitHub Release: [v2026.6.11-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.11-beta.1)

### v2026.6.10

| 项目 | 详情 |
|---|---|
| **版本号** | openclaw 2026.6.10 |
| ** Highlights** | **Talks 自动快速模式 + 更可靠的模型路由** |

主要更新：
- **自动快速模式**：短对话自动启用 fast mode，长对话带 bounded fallback 和投递行为自动切回正常模式（#85104）
- **更可靠的模型路由**：Zai 模型合成路由改进
- 感谢 @alexph-dev、@vincentkoc 的贡献

**迁移注意事项**：v2026.6.9 曾出现记忆存储静默迁移问题（#95495），升级至 2026.6.10 时建议检查 `memory store` 路径是否正确。v2026.6.9 中 Telegram richMessages 的段落断裂渲染回归（#95554）已在后续修复中关闭。

> GitHub Release: [v2026.6.10](https://github.com/openclaw/openclaw/releases/tag/v2026.6.10)

---

## 3. 项目进展

今日 **53 条 PR 已合并/关闭**，以下是最重要的推进：

### 已合并的关键修复

| PR | 文件 | 说明 |
|---|---|---|
| [#96603](https://github.com/openclaw/openclaw/pull/96603) | extensions/ollama | **安全加固**：限制 Ollama web search 成功响应读取，防止恶意/错误配置的 baseUrl 通过无限流式响应发起 DoS 攻击 |
| [#96528](https://github.com/openclaw/openclaw/pull/96528) | agents | **Session 锁修复**：启用对超过持有者声明的 maxHoldMs 的锁的 reclaim，修复 session-write-lock 竞争条件 |
| [#96595](https://github.com/openclaw/openclaw/pull/96595) | ci | QA Profile Evidence 默认 maturity evidence 扩展至全部 profile |
| [#66977](https://github.com/openclaw/openclaw/pull/66977) | — | **macOS 兼容性**：确认 sqlite-vec 扩展无法在 macOS 加载（Node.js node:sqlite 以 OMIT_LOAD_EXTENSION 编译） |
| [#95554](https://github.com/openclaw/openclaw/pull/95554) | channel: telegram | **回归修复**：v2026.6.9 Telegram richMessages 破坏段落换行和表格渲染 |
| [#88073](https://github.com/openclaw/openclaw/pull/88073) | feishu | Feishu dispatch 在 v2026.5.27 中失败：无法读取 undefined 的 'run' 属性 |

### 待合并的重点 PR（维护者评审中）

| PR | 评级 | 说明 |
|---|---|---|
| [#88504](https://github.com/openclaw/openclaw/pull/88504) | 🐚 Platinum | **多槽位记忆角色架构**：重构 memory-plugin，分离 auto-capture、compaction、factual recall 等角色，解决单一 `plugins.slots.memory` 的架构瓶颈 |
| [#95847](https://github.com/openclaw/openclaw/pull/95847) | — | **Subagent 生命周期修复**：修复 requester 消费子 agent 输出后的交付计数错误 |
| [#96250](https://github.com/openclaw/openclaw/pull/96250) | — | **Daemon OOM 防护**：为 gateway service 环境设置默认 `NODE_OPTIONS --max-old-space-size=8192` |

**项目整体进展**：v2026.6.11-beta.1 的发布标志着 Channel 多模型化和 Slack/Mattermost 深度集成进入新阶段；多槽位记忆架构（#88504）如果合并将是本月的标志性架构变更；安全加固系列 PR（Alix-007 系列）集中清理了多个 provider 的 unbounded response 读取漏洞，整体安全边界显著提升。

---

## 4. 社区热点

今日讨论量排名前列的 Issues：

### 🔥 #75 — Linux/Windows Clawdbot Apps
- **作者**：steipete | **创建**：2026-01-01 | **评论**：109 | 👍：80
- **链接**：[Issue #75](https://github.com/openclaw/openclaw/issues/75)
- **分析**：这是项目最早的长期 Feature Request 之一（已开放 175 天）。macOS/iOS/Android 已有客户端，Linux 和 Windows 缺失。80 👍 说明跨平台桌面端需求强烈，可能是社区最期待的功能之一。标签 `clawsweeper:needs-product-decision` 表明维护者尚未做出最终路线决定。

### 🔥 #88838 — Track core session/transcript SQLite migration via accessor seam
- **作者**：jalehman | **创建**：2026-06-01 | **评论**：35 | 👍：1
- **链接**：[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)
- **分析**：正在进行的工作跟踪 Issue — Path 3 阶段已基本完成 file-backed seam adoption，Session/Transcript 从直接访问迁移到 accessor 层。这是大型架构改造，影响数据持久化层。

### 🔥 #32473 — Control UI requires device identity
- **作者**：RafaelLee | **创建**：2026-03-03 | **Comment**：17 | 👍：5
- **链接**：[Issue #32473](https://github.com/openclaw/openclaw/issues/32473)
- **分析**：Hostinger VPS + Docker + Brave API Key 场景下 Control UI 报安全上下文错误。标签 `clawsweeper:needs-security-review` 提示此问题涉及设备身份认证的安全模型——在非 localhost/HTTPS 环境下如何安全识别设备是核心难题。

### 🔥 #22676 — Signal daemon stop() race condition on SIGUSR1 restart
- **作者**：UberKitten | **创建**：2026-02-21 | **评论**：17 | 👍：0
- **链接**：[Issue #22676](https://github.com/openclaw/openclaw/issues/22676)
- **分析**：`config.patch` / `config.apply` 触发 SIGUSR1 gateway restart 时，signal daemon 向 signal-cli 发送 SIGTERM 但不等待进程退出，导致新旧实例竞争 HTTP 端口和配置文件锁。这是影响配置热加载稳定性的 P1 问题。

### 🔥 #96148 — iMessage source-reply latency instrumentation
- **作者**：omarshahine | **创建**：2026-06-23 | **评论**：17 | 👍：1
- **链接**：[Issue #96148](https://github.com/openclaw/openclaw/issues/96148)
- **分析**：iMessage 在 source-reply 和 message-tool-only 回合中响应延迟异常。已有多个 PR 修复（#95621, #95942），正在收集性能证据。mobile channel 的性能问题持续受到关注。

---

## 5. Bug 与稳定性

以下按严重程度排列：

### P0 — 立即关注

| Bug | 影响 | 状态 | 修复 |
|---|---|---|---|
| [#96250](https://github.com/openclaw/openclaw/pull/96250) Gateway heap 增长至 1073MB+，OOM crash-loop | 内存/可用性 | PR 已提交 | 设置 `--max-old-space-size=8192` |
| [#95833](https://github.com/openclaw/openclaw/issues/95833) Subagent abort-settle 未释放 .jsonl.lock，永久锁定 session | 数据丢失/死锁 | OPEN | — |

### P1 — 高优先级

| Bug | 影响 | 状态 | 修复 |
|---|---|---|---|
| [#86827](https://github.com/openclaw/openclaw/issues/86827) Group chat session 停留在 'failed' 状态后静默丢弃所有后续消息 | 消息丢失 | OPEN | — |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) Native Anthropic 路径中回放历史 thinking blocks 导致长工具使用线程 400 错误 | 消息丢失/死锁 | OPEN | — |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) Active Memory + Codex app-server 路径导致长响应延迟、hook 超时、启动中止 | Crash-loop | OPEN | — |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap 在 macOS 上增长至 1073MB+，cron 任务在内存压力下静默失败 | 消息丢失/Crash-loop | OPEN | PR #96250 |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) MCP tools 未注入到 subagent 会话 | 消息丢失/数据丢失 | OPEN | — |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) Auto-update 后运行中的 gateway 使用过期哈希 bundle 导入 | 消息丢失/数据丢失 | OPEN | — |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) Internal Reasoning Leakage in 2026.6.5 — 内部推理/思考泄露到用户响应 | 隐私泄露 | OPEN | — |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon SIGUSR1 restart 竞态条件产生孤立进程 | 消息丢失 | OPEN | — |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) Steer mode 未在 main session 轮次中途注入消息 | 消息丢失 | OPEN | — |
| [#86034](https://github.com/openclaw/openclaw/issues/86034) Media 生成成功但 completion delivery 失败，看起来像生成失败 | 消息丢失 | OPEN | — |

### P2 — 中高优先级

| Bug | 影响 | 状态 | 修复 |
|---|---|---|---|
| [#29387](https://github.com/openclaw/openclaw/issues/29387) Bootstrap 文件在 agentDir 中被静默忽略，仅 workspace 目录文件注入 system prompt | 数据丢失/安全 | OPEN | — |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) Safeguard compaction 忽略 compaction.model 配置，使用 session 模型 | 消息丢失 | OPEN | — |
| [#72031](https://github.com/openclaw/openclaw/issues/72031) `image` tool 在 Bedrock `auth mode: aws-sdk` 下因 `requireApiKey` 抛出异常 | Auth-provider | OPEN | — |
| [#53486](https://github.com/openclaw/openclaw/issues/53486) Feishu message(action=send) 将 card JSON 渲染为纯文本 | 消息丢失 | OPEN | — |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) `sudo openclaw update` 创建混合所有权，随后 doctor 在 EACCES 后覆写配置 | 数据丢失/Crash-loop | OPEN | — |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) OPENCLAW_HOME=~/.openclaw 产生嵌套目录 | 回归 | OPEN | PR #87255 |

### 已修复/已关闭的 Bug

| Bug | 关闭方式 |
|---|---|
| [#95495](https://github.com/openclaw/openclaw/issues/95495) v2026.6.9 静默迁移 memory store 导致完整重新嵌入 1499 个文件 | CLOSED |
| [#95554](https://github.com/openclaw/openclaw/issues/95554) Telegram richMessages 破坏段落换行 | PR 关闭 |
| [#96603](https://github.com/openclaw/openclaw/pull/96603) Ollama web search unbounded response 读取 | 已合并 |
| [#66977](https://github.com/openclaw/openclaw/pull/66977) sqlite-vec 无法在 macOS 加载 | CLOSED（确认问题） |
| [#88073](https://github.com/openclaw/openclaw/pull/88073) Feishu dispatch 失败 | CLOSED |

---

## 6. 功能请求与路线图信号

### 高 👍 / 高评论功能请求（可能纳入近期版本）

| 需求 | 👍 | 评论 | 关联 PR | 信号强度 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 桌面客户端 | 80 | 109 | — | ⭐⭐⭐⭐⭐ 极高需求 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approvals 添加 denylist 支持 | 7 | 7 | — | ⭐⭐⭐ 安全相关 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) 文件系统沙箱配置 `tools.fileAccess` | 4 | 9 | — | ⭐⭐⭐ 安全相关 |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) Telegram Business Bot 支持 | 6 | 8 | — | ⭐⭐ 企业级功能 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit 支持 | 0 | 13 | — | ⭐⭐ 企业需求 |
| [#14344](https://github.com/openclaw/openclaw/issues/14344) WhatsApp message delete (revoke) action | 1 | 5 | — | ⭐ |

### 架构变更信号

| 需求 | 标签 | 关联 PR | 信号 |
|---|---|---|---|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) Gateway-lite 模式（无 AI 确定性部署） | maintainer, security | — | 架构方向 |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) 备份/恢复工具（config、cron jobs、session history） | maintainer, security | — | 运维工具 |
| [#12678](https://github.com/openclaw/openclaw/issues/12678) Capability-based 权限（skills/tools 默认拒绝高风险操作） | maintainer, security | — | 安全模型 |
| [#38626](https://github.com/openclaw/openclaw/issues/38626) Subagent 可观测性 + 异步监督控制 | linked-pr-open | — | — |

### 已启动的功能开发（有活跃 PR）

| 功能 | PR | 状态 |
|---|---|---|
| Discord subagent 进度显示 | [#95604](https://github.com/openclaw/openclaw/pull/95604) | OPEN, XL, waiting on author |
| 多槽位记忆角色架构 | [#88504](https://github.com/openclaw/openclaw/pull/88504) | OPEN, XL, ready for maintainer |
| 在 plugin hook events 中暴露 rawBody | [#52664](https://github.com/openclaw/openclaw/pull/52664) | OPEN, ready for maintainer |
| Doctor lint profiles | [#96471](https://github.com/openclaw/openclaw/pull/96471) | OPEN, ready for maintainer |

---

## 7. 用户反馈摘要

### 痛点

1. **Windows/Linux 客户端缺失**（#75 — 109 条评论，80 👍）：这是最大的痛点。用户在 Mac 上体验良好，但团队成员使用 Windows/Linux 时没有对等体验，影响了企业推广。

2. **内存系统脆弱**：多个独立 Issue 指向 memory 相关的问题 — migration 静默失败（#95495）、Active Memory 导致延迟/超时（#86996）、MCP 工具未注入子 agent（#85030）、codex legacy fallback 忽略 contextTokenBudget（#84084）。记忆系统似乎是当前架构中最脆弱的子系统。

3. **Channel 渲染回归频繁**：Telegram richMessages（#95554）、Feishu card（#53486）、Google Chat group messages（#58514）、Slack tool progress（#33413）——用户在升级后频繁遇到消息渲染问题，对质量稳定性产生疑虑。

4. **安全上下文限制影响 VPS 部署**：使用 Hostinger 等 VPS + Docker 的用户无法访问 Control UI（#32473），需要 HTTPS 或 localhost 才能建立设备身份。

5. **Cryptic 错误信息**："Internal agent reasoning/thinking is being exposed"（#91804）——升级后思考内容泄露到最终响应，这是严重的 UX 和隐私回归。

### 满意方面

- 新发布的 Slack relay 模式和 Mattermost `/oc_queue` 受到社区欢迎
- v2026.6.10 的自动快速模式被认为显著改善了短对话体验
- 安全加固系列（PR #96603-96608）获得专业认可，安全边界意识提升

---

## 8. 待处理积压

以下长期未响应的 Issue/PR 需要维护者关注：

### 长期积压的 P0/P1 Issues

| Issue | 创建日期 | 天数 | 状态 | 建议 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 桌面客户端 | 2026-01-01 | 175 天 | OPEN, 109 评论 | 需要产品决策和规划；或考虑社区贡献 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit 支持 | 2026-02-09 | 136 天 | OPEN | 评估与 v2026.6.11 Slack relay 模式的关系 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approvals denylist | 2026-02-01 | | OPEN, 7 👍 | 安全特性，建议高优先级评估 |
| [#12855](https://github.com/openclaw/openclaw/issues/12855) 内置自动更新工作流 | 2026-02-09 | | OPEN | 与 #85844（auto-update stale bundle）相关 |

### 长期积压的活跃 Issues（>30 天无评论）

| Issue | 创建 | 最后更新 | 状态 |
|---|---|---|---|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon 竞态条件 | 2026-02-21 | 2026-06-24 | 17 评论，无修复 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) Bootstrap files 在 agentDir 中被忽略 | 2026-02-28 | 2026-06-24 | 14 评论，无修复 |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) sudo update 创建混合所有权 | 2026-05-06 | 2026-06-24 | 6 评论 |

### 长期积压的活跃 PRs（>7 天未合并）

| PR | 创建 | 天数 | 大小 | 状态 |
|---|---|---|---|---|
| [#88504](https://github.com/openclaw/openclaw/pull/88504) 多槽位记忆角色架构 | 2026-05-31 | 25 天 | XL | ready for maintainer |
| [#52664](https://github.com/openclaw/openclaw/pull/52664) Plugin hook 暴露 rawBody | 2026-03-23 | 94 天 | M | ready for maintainer |
| [#85358](https://github.com/openclaw/openclaw/pull/85358) 防止 bundled plugin 路径注入配置 | 2026-05-22 | 34 天 | M | — |
| [#87255](https://github.com/openclaw/openclaw/pull/87255) 修复 OPENCLAW_HOME 嵌套目录 | 2026-05-27 | 29 天 | M | waiting on author |
| [#95920](https://github.com/openclaw/openclaw/pull/95920) QA Lab Crabline 环境 | 2026-06-23 | 2 天 | L, P3 | waiting on author |

---

**项目健康度评估**：🟡良好偏高负荷

- **活跃度**：🟢 极高（346 Issue + 500 PR / 24h）
- **响应性**：🟡 中等（安全加固 PR 合并速度快，但多个 P1 Issue 开放超过一个月）
- **质量**：🟡 中等（频繁的 channel 回归表明端到端测试覆盖不足）
- **方向性**：🟢 明确（多槽位记忆、Gateway-lite、exec denylist 等方向清晰）

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-06-25 | 分析周期：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高速增长与架构分化并存**的成熟期。15 个活跃项目今日合计处理约 1,750 条 Issue 更新和 2,200 条 PR 更新，社区贡献强度极高。技术路线从 OpenClaw 的"全功能单体架构"到 ZeroClaw 的"WASM 插件化安全架构"，再到 NanoBot 的"轻量级多渠道网关"，已形成明显的分层格局。安全加固（11 个子项目涉及 CVE 修复）、多模型 provider 适配（OpenAI 兼容层成为标配）、Channel 生态扩展（Mattermost/DeltaChat/Rocket.Chat 成为共同方向）是三大集体演进方向。用户反馈显示，**稳定性与可观测性**已超越功能丰富度，成为社区满意度的核心决定因素。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度 | 核心方向 |
|---|---|---|---|---|---|
| **OpenClaw** | 346 | 500 | 2 个版本 | 🟡 良好偏高负荷 | 多槽位记忆架构、Channel 多模型化 |
| **CoPaw** | 23 | 50 | — | 🟠 前端风险 | 2.0 迁移收尾、scroll context manager |
| **ZeroClaw** | 50 | 50 | — | 🟢 良好 | SOP 审批平面、WASM 插件宿主、OIDC |
| **Hermes Agent** | 50 | 50 | — | 🟢 良好 | Token 优化、桌面端体验、多 Agent 编排 |
| **NanoBot** | 18 | 46 | — | 🟡 需加速安全审查 | Mattermost 渠道、MCP 安全修复 |
| **NanoClaw** | 1（+2 关闭） | 18 | — | 🟢 良好 | Matrix E2EE、Telegram 多 Bot、CVE 修复 |
| **IronClaw** | 19 | 41 | — | 🟢 良好 | Reborn 内存架构、WebUI v2、provider 容错 |
| **LobsterAI** | 1（陈旧） | 43（合并） | — | 🟢 良好 | 网关稳定性集中清理、token 燃烧修复 |
| **PicoClaw** | 13（关闭） | 8 | — | 🟡 stale PR 积压 | DeltaChat 网关、OpenAI 兼容层修复 |
| **TinyClaw** | 0 | 1（关闭） | — | 🟡 中等 | Windows 跨平台兼容 |
| **NullClaw** | — | — | — | ⚪ 无活动 | — |
| **Moltis** | — | — | — | ⚪ 无活动 | — |
| **ZeptoClaw** | — | — | — | ⚪ 无活动 | — |

> **注**：LobsterAI 今日合并的 41 个 PR 中绝大多数为延迟消化（最早可追溯到 5 月 25 日），实际新增产出集中在稳定性修复。

---

## 3. OpenClaw 在生态中的定位

### 核心优势

| 维度 | OpenClaw | 生态平均 |
|---|---|---|
| **日 Issue 吞吐量** | 346 条 | ~50 条 |
| **日 PR 吞吐量** | 500 条 | ~40 条 |
| **Channel 覆盖** | Slack/Telegram/Feishu/Mattermost/iMessage/Discord 等 | 3-5 个 |
| **版本发布频率** | 2 个版本/日 | < 0.5 个/日 |
| **安全 PR 密度** | Alix-007 系列 6+ PR/日 | 1-2 PR/日 |

### 技术路线差异

- **单体 vs 插件化**：OpenClaw 采用单体集成架构（所有 channel/provider 在同一代码库），ZeroClaw 采用 WASM 组件模型插件宿主，Hermes 采用 ACP 协议解耦。OpenClaw 的单体模式带来更一致的用户体验但增加了维护复杂度。
- **记忆架构**：OpenClaw 推进"多槽位记忆角色架构"（#88504，将 auto-capture/compaction/factual recall 分离），这在生态中独树一帜——其他项目多采用单一 memory 模块或外挂记忆服务。
- **Channel 多模型化**：OpenClaw 的 Per-DM 模型覆盖（#95120）和 Slack Relay 模式是生态中最激进的 channel-model 解耦尝试。

### 社区规模

OpenClaw 的日活跃度（Issue + PR 合计 846 条）约为第二名 ZeroClaw（100 条）的 **8.5 倍**，社区贡献者基数和 PR 合并速度均处于生态绝对领先地位。但高并发也带来代价：多个 P1 Issue 开放超过一个月，长期积压的 Feature Request（如 #75 Linux/Windows 客户端，已开放 175 天）仍需产品决策。

---

## 4. 共同关注的技术方向

### 4.1 安全加固与边界防护（11/15 项目涉及）

| 项目 | 具体动作 |
|---|---|
| **OpenClaw** | Ollama web search 无限流式响应 DoS 防护（#96603） |
| **NanoBot** | MCP enabledTools deny-all 策略绕过修复（#4436/#4452） |
| **NanoClaw** | CVE-2026-29611 系列：send_file 路径限制、路径遍历、safeParseContent 加固（#2799-#2802） |
| **PicoClaw** | 11 个安全漏洞批量关闭（SSRF、授权绕过、命令执行、CSRF 等） |
| **ZeroClaw** | MCP 运行时隔离（#7747）、供应链签名（cosign + SLSA）、OIDC 认证 |
| **Hermes** | 子代理安全边界（DELEGATE_BLOCKED_TOOLS 过滤 messaging/cronjob） |
| **CoPaw** | 内网部署安全（#5497 白屏问题涉及离线环境认证） |

### 4.2 多模型 Provider 适配

| 项目 | 新增 Provider |
|---|---|
| **NanoBot** | Kimi Coding Plan、OpenCode Zen/Go |
| **OpenClaw** | Per-DM 模型覆盖（任意 channel 内不同 DM 指定不同模型） |
| **PicoClaw** | 火山引擎豆包 Seed XML 工具调用恢复 |
| **CoPaw** | GLM-5.x schema 兼容性修复、DashScope extra_body 参数 |
| **Hermes** | Vertex AI（PR #8427，74 天未合并）、Ollama Cloud |

### 4.3 Channel 生态扩展

| 目标 Channel | 推动项目 |
|---|---|
| **Mattermost** | NanoBot（#4459，WebSocket + REST API）、OpenClaw（原生 /oc_queue 命令） |
| **DeltaChat** | PicoClaw（#3063） |
| **Rocket.Chat** | Hermes（#3725，👍10） |
| **Telegram 多实例** | NanoClaw（#2853，环境变量发现机制） |

### 4.4 Token 成本优化

| 项目 | 方案 |
|---|---|
| **Hermes** | Lazy Tool Schema Loading（两阶段注入，#6839，👍14）+ 工具输出压缩（#39691） |
| **IronClaw** | Context management 渐进式工具披露（#5149，目标削减 25.8k tokens/轮） |
| **LobsterAI** | 中断工具循环 token 燃烧修复（#2049/#2051） |
| **OpenClaw** | 自动快速模式（短对话 fast mode，长对话 bounded fallback） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 | 差异化标签 |
|---|---|---|---|---|
| **OpenClaw** | 全功能 Channel 集成 + 记忆架构 | 个人用户 + 小团队 | 单体 Rust/Node，SQLite 持久化 | 功能最全、社区最大 |
| **ZeroClaw** | 安全审批平面 + WASM 插件 | 企业/多租户 | Rust + wasmtime 组件模型 | 零信任架构、供应链安全 |
| **Hermes** | Token 优化 + 多 Agent 编排 | 成本敏感型开发者 | ACP 协议解耦 | Token 成本可视化、ACP 生态 |
| **IronClaw** | Reborn 内存架构 + WebUI v2 | 需要 Web 管理面的团队 | Rust + 自定义 WebUI | 内存架构重构、可观测性 |
| **NanoBot** | 轻量多渠道网关 | 快速部署者 | Node.js + TypeScript | 轻量、provider 生态丰富 |
| **NanoClaw** | Matrix E2EE + 容器化部署 | 隐私优先用户 | Rust + Docker 原生 | Matrix 原生加密、Docker-in-Docker |
| **CoPaw** | 2.0 运行时迁移 + 前端体验 | Qwen 生态用户 | Python + Tauri 前端 | Qwen 深度集成、scroll context |
| **LobsterAI** | 网关稳定性 + 微信生态 | 中文企业用户 | Electron + Node.js | 微信渠道独家支持 |
| **PicoClaw** | 嵌入式/边缘部署 | IoT/边缘场景 | Go + 轻量运行时 | 资源占用低、DeltaChat |
| **TinyClaw** | 跨平台 CLI | 纯 Windows 开发者 | Rust CLI | Windows 原生兼容 |

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代期（日 PR > 40 条）

- **OpenClaw**：功能密集发布期，v2026.6.10/v2026.6.11-beta.1 连续发布，多槽位记忆架构等待合并
- **LobsterAI**：41 个 PR 集中合并，完成一轮大规模技术债务清理
- **CoPaw**：2.0 迁移收尾 + 前端稳定性攻坚，50 条 PR/日

### 🟡 质量巩固期（日 PR 15-40 条）

- **Hermes**：桌面端更新体验集中修复（5 个 PR），Token 优化 RFC 讨论热烈
- **IronClaw**：Reborn 内存架构 M2 lift + WebUI v2 体验整顿
- **NanoBot**：Mattermost 渠道 + 安全修复，但安全 PR 需加速合并
- **ZeroClaw**：SOP 审批平面 + WASM 插件宿主推进，但多个 P1 安全 Issue 待修复

### 🟠 稳定维护期（日 PR < 15 条）

- **NanoClaw**：CVE 系列修复后趋于平静，Matrix E2EE 适配器是主要新功能
- **PicoClaw**：8 个待合并 PR 均为 stale 状态，需清理
- **TinyClaw**：Windows 兼容修复后暂无新动向

### ⚪ 无活动

- **NullClaw**、**Moltis**、**ZeptoClaw**：过去 24 小时无任何活动

---

## 7. 值得关注的趋势信号

### 趋势 1：安全左移成为生存门槛

PicoClaw 单日关闭 11 个安全漏洞（涵盖 SSRF、授权绕过、命令执行、CSRF 四大类），NanoClaw 集中处理 CVE-2026-29611 系列四个攻击面，OpenClaw 的 Alix-007 系列安全 PR 持续涌现——**安全审计已从"最佳实践"变为"准入门槛"**。对开发者的启示：新项目应从设计阶段即采用 deny-by-default 策略、路径沙箱隔离和运行时强制校验。

### 趋势 2：Token 成本成为用户留存关键因素

Hermes 的用户实测数据（73% 的 API 调用为固定开销，约 13.9K tokens/次）和 OpenClaw 的自动快速模式表明，**Token 优化正从"锦上添花"升级为"核心竞争力"**。两阶段工具 schema 注入、工具输出专项压缩、中断循环 breaker 等模式正在成为标配。

### 趋势 3：Channel 多模型化是下一个战场

OpenClaw 的 Per-DM 模型覆盖、NanoBot 的 provider 快速扩张（Kimi/OpenCode Zen/Go）、CoPaw 的 GLM/Kimi 兼容性修复——**用户期望在同一 channel 内根据不同会话/用户动态切换模型**，而非全局绑定单一 provider。这将推动 channel 层与 model 层的彻底解耦。

### 趋势 4：可观测性成为企业部署前提

IronClaw 的 Reborn 托管可观测性需求（#5182，operators 难以从 binary 中提取诊断日志）、Hermes 的 Token 监控仪表盘（#4379）、ZeroClaw 的 SOP 审批平面——**企业级用户要求 agent 的每一次工具调用、每一次 token 消耗、每一次审批流转都可审计、可追踪、可告警**。

### 趋势 5：WASM 插件化是架构演进方向

ZeroClaw 的 WASM 组件模型（#7928，替换 Extism）和 NanoClaw 的通用扩展点接口（#2842）表明，**安全可扩展的插件架构正成为中高端项目的共同选择**。WASM 沙箱提供了语言无关的隔离边界，同时避免了容器化的资源开销。

---

**报告总结**：个人 AI 助手开源生态正处于从"功能竞赛"向"质量深耕"的转型期。OpenClaw 凭借社区规模和功能广度保持领先，但 ZeroClaw 的安全架构、Hermes 的 Token 优化、IronClaw 的内存重构代表了生态的下一个技术高地。对于新进入者，**安全左移 + Token 效率 + 可观测性** 是三个不可回避的基线要求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-25

---

## 1. 今日速览

NanoBot 在过去 24 小时内保持了极高的社区活跃度：**18 条 Issues 更新、46 条 PR 更新**，显示出强烈的外部贡献意愿和核心团队的响应能力。今日无新版本发布，但多条高价值 PR 已接近合并窗口，涵盖安全修复、渠道扩展（Mattermost）、Telegram Bug 修复、WebUI 体验优化等方向。项目整体处于 v0.2.2 后的密集迭代期，稳定性和多通道兼容性是当前主线。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#4464](https://github.com/HKUDS/nanobot/pull/4464) | feat(provider) | 新增 `kimi_coding` provider，支持 Kimi Coding Plan 的 Anthropic Messages API 端点，将商业订阅用户与开源版本区分开 |
| [#4475](https://github.com/HKUDS/nanobot/pull/4475) | feat(provider) | 新增 **OpenCode Zen** 和 **OpenCode Go** 两个编程专用 provider |
| [#4463](https://github.com/HKUDS/nanobot/pull/4463) | feature | 支持 Kimi Coding Plan（kimi-for-coding）订阅用户 |
| [#4487](https://github.com/HKUDS/nanobot/pull/4487) | fix(webui) | 修复多文件 `apply_patch` 编辑记录丢失问题，改善 WebUI 编辑追踪显示 |
| [#4499](https://github.com/HKUDS/nanobot/issues/4499) | fix(telegram) | Telegram 频道空消息问题已关闭 |
| [#4470](https://github.com/HKUDS/nanobot/issues/4470) | fix(telegram) | Telegram v0.2.2 换行丢失 & 消息闪烁问题已关闭 |
| [#4388](https://github.com/HKUDS/nanobot/issues/4388) | fix(webui) | iOS Safari 输入框触发页面放大问题已关闭 |
| [#4442](https://github.com/HKUDS/nanobot/issues/4442) | fix(bug) | 流式响应中重复 `tool_use` id 导致会话中毒（400 错误）已关闭 |

### 待合并的关键 PR（27 条 open）

- **[#4459](https://github.com/HKUDS/nanobot/pull/4459)** — 新增 **Mattermost** 频道渠道（WebSocket + REST API，含自动重连与流式响应），多通道生态进一步扩展
- **[#4505](https://github.com/HKUDS/nanobot/pull/4505)** — 为 Telegram Web "不支持的消息"问题添加 `rich_message` 配置开关
- **[#4501](https://github.com/HKUDS/nanobot/pull/4501)** — 修复钉钉渠道 richText 格式截断及 HTTP 客户端超时设定
- **[#4504](https://github.com/HKUDS/nanobot/pull/4504)** — skills 支持子目录组织，解决扁平目录在技能数量增长时的可维护性问题
- **[#4502](https://github.com/HKUDS/nanobot/pull/4502)** — Gateway Webhook 触发器：重构 HTTP 入口，支持 `/health` + 通用 webhook 路由

---

## 4. 社区热点

### 🔥 最受关注 Issues

| Issue | 👍 | 评论 | 焦点 |
|---|---|---|---|
| [#660](https://github.com/HKUDS/nanobot/issues/660) | 5 | 11 | 项目自称"超轻量"却依赖 Node.js，Dockerfile 臃肿 — 长期存在的老牌 Issue，社区对轻量性承诺质疑持续发酵 |
| [#4499](https://github.com/HKUDS/nanobot/issues/4499) | 0 | 1 | Telegram 回复消息显示为空，但 Bot API 直接调用正常 |
| [#4488](https://github.com/HKUDS/nanobot/issues/4488) | 0 | 0 | Telegram Web 显示"此消息不受支持"，已被 #4505 PR 修复中 |

### 📣 热线安全通报

| Issue | 严重性 | 状态 |
|---|---|---|
| [#4434](https://github.com/HKUDS/nanobot/issues/4434) | 🔴 高 | MCP `enabledTools` deny-all 策略绕过，资源/Prompt 泄露给模型 |
| [#4435](https://github.com/HKUDS/nanobot/issues/4435) | 🔴 高 | allowlist 绕过暴露 resource 和 prompt 能力 |

两道安全通报均有对应修复 PR 待合并：
- **[#4436](https://github.com/HKUDS/nanobot/pull/4436)** — gate MCP resource/prompt registration behind enabledTools
- **[#4452](https://github.com/HKUDS/nanobot/pull/4452)** — enforce MCP enabledTools for all capabilities（覆盖 tools + resources + prompts）

> ⚠️ 两 PR 均已等待 ~3-4 天，建议优先审查合并。

---

## 5. Bug 与稳定性

### 🔴 高优先级（已有 Fix PR）

| Bug | PR | 状态 |
|---|---|---|
| 钉钉 richText 格式截断 + HTTP 超时 [#4497](https://github.com/HKUDS/nanobot/issues/4497) | [#4501](https://github.com/HKUDS/nanobot/pull/4501) | 待合并 |
| Telegram Web "消息不受支持" [#4488](https://github.com/HKUDS/nanobot/issues/4488) | [#4505](https://github.com/HKUDS/nanobot/pull/4505)、[#4495](https://github.com/HKUDS/nanobot/pull/4495) | 待合并 |
| MCP enabledTools deny-all 绕过 [#4434](https://github.com/HKUDS/nanobot/issues/4434) / [#4435](https://github.com/HKUDS/nanobot/issues/4435) | [#4436](https://github.com/HKUDS/nanobot/pull/4436)、[#4452](https://github.com/HKUDS/nanobot/pull/4452) | 待合并 |
| MCP streamable_http generator crash on reconnect [#4441](https://github.com/HKUDS/nanobot/pull/4441) | 同 PR | 待合并 |

### 🟡 中优先级（待响应）

| Bug | 状态 |
|---|---|
| Telegram 消息换行丢失 + 反复编辑闪烁 [#4470](https://github.com/HKUDS/nanobot/issues/4470) | 已关闭（修复中） |
| WebUI 主页面发送不导航、停止按钮失效、流式流残留 [#4500](https://github.com/HKUDS/nanobot/issues/4500) | 新开 |
| Kimi MiMo ASR WebM 格式不兼容 [#4492](https://github.com/HKUDS/nanobot/issues/4492) | 已有 PR [#4493](https://github.com/HKUDS/nanobot/pull/4493) 修复 |
| WebM→WAV 转换（Xiaomi MiMo 语音转录） | 同上 |

### 🟢 低优先级 / 已修复

- [#4465](https://github.com/HKUDS/nanobot/issues/4465) — WebUI 渲染 `<thinking/>` 标签为可见文本 → 已关闭
- [#4434](https://github.com/HKUDS/nanobot/issues/4434) — 安全通报 #1 → 修复中
- [#4463](https://github.com/HKUDS/nanobot/pull/4464) — Kimi Coding Plan provider → 已合并
- [#4442](https://github.com/HKUDS/nanobot/issues/4442) — 重复 tool_use id 导致 API 400 → 已关闭

---

## 6. 功能请求与路线图信号

### 近期可能合并的功能

| 方向 | Issue/PR | 信号强度 |
|---|---|---|
| **新渠道：Mattermost** | [#4459](https://github.com/HKUDS/nanobot/pull/4459) (OPEN) | ⭐⭐⭐ 成熟度高，功能完整 |
| **Telegram Rich Messages 可配置化** | [#4495](https://github.com/HKUDS/nanobot/pull/4495)、[#4505](https://github.com/HKUDS/nanobot/pull/4505) | ⭐⭐⭐ 多客户端兼容诉求强烈 |
| **Skills 子目录组织** | [#4504](https://github.com/HKUDS/nanobot/pull/4504) | ⭐⭐ 小而实用 |
| **Gateway Webhook 触发器** | [#4502](https://github.com/HKUDS/nanobot/pull/4502) | ⭐⭐ 基础设施扩展 |
| **CLI 跨渠道路由** | [#4496](https://github.com/HKUDS/nanobot/pull/4496) | ⭐⭐ 修复 `-m` 模式消息静默丢弃 |
| **Dream Prompt 工作区覆盖** | [#4491](https://github.com/HKUDS/nanobot/pull/4491) | ⭐ 提升 prompt 灵活性 |
| **自定义 Provider thinking style** | [#4482](https://github.com/HKUDS/nanobot/pull/4482) | ⭐⭐ 火山引擎/豆包用户需要 |

### 长期/探索性诉求

| 请求 | Issue | 备注 |
|---|---|---|
| Trust Badge for README | [#4503](https://github.com/HKUDS/nanobot/issues/4503) | 社区信任信号，非技术功能 |
| PWA 支持 + 移动端手势 | [#4479](https://github.com/HKUDS/nanobot/issues/4479) | 移动端体验改善 |
| 搜索历史工具 | [#4439](https://github.com/HKUDS/nanobot/pull/4439) | 只读 recall 工具 |
| 项目轻量化争议 | [#660](https://github.com/HKUDS/nanobot/issues/660)（5👍，11评论） | 长期架构辩论 |

---

## 7. 用户反馈摘要

### 满意方面 ✅
- **多通道支持**：用户积极认可 nanobot 对 Telegram、钉钉、WhatsApp 等多渠道的覆盖
- **provider 生态**：OpenCode Zen/Go、Kimi Coding Plan 等新 provider 需求说明 AI 开发工具市场在持续增长
- **社区响应速度**：多数 issue 在 24-48 小时内得到响应或修复

### 不满意方面 ⚠️
- **Telegram 稳定性**：v0.2.2 引入换行丢失、空消息、Rich Message 不兼容等多个回归，破坏用户体验
- **MCP 安全策略不完整**：enabledTools 仅对 tools 生效但未覆盖 resources/prompts，安全审计暴露了 deny-all 绕过的风险
- **轻量性争议**：Dockerfile 同时依赖 Python + Node.js，与项目营销的"ultra-lightweight"形成认知冲突（#660，持续讨论中）
- **WebUI 移动端体验**：iOS Safari 输入框放大、主页发送不导航等问题说明移动端测试覆盖不足

### 用户画像观察
- **多语言用户活跃**：中文（钉钉渠道/iOS 适配）和英文社区同时贡献
- **企业集成需求**：Mattermost、钉钉渠道表明企业用户在推动功能优先级
- **AI 开发者群体**：Provider 定制、thinking style 配置等需求反映高级用户对灵活性的要求

---

## 8. 待处理积压

### 🔴 需要立即关注

| 项目 | 链接 | 等待天数 | 风险 |
|---|---|---|---|
| MCP enabledTools 绕过修复 | [#4434](https://github.com/HKUDS/nanobot/issues/4434)、[#4435](https://github.com/HKUDS/nanobot/issues/4435) | 3-4 天 | **安全风险**，任意 MCP server 可泄露资源/prompt |
| 对应修复 PR | [#4436](https://github.com/HKUDS/nanobot/pull/4436)、[#4452](https://github.com/HKUDS/nanobot/pull/4452) | 3-4 天 | 合并前持续存在 |
| MCP streamable_http 崩溃 | [#4441](https://github.com/HKUDS/nanobot/pull/4441) | 4 天 | 生产环境 gateway 可能 crash |

### 🟡 建议尽快审查

| 项目 | 链接 | 等待天数 |
|---|---|---|
| Mattermost 渠道（功能完整，审查后可合并） | [#4459](https://github.com/HKUDS/nanobot/pull/4459) | 3 天 |
| Telegram Rich Message 配置开关 | [#4495](https://github.com/HKUDS/nanobot/pull/4495)、[#4505](https://github.com/HKUDS/nanobot/pull/4505) | 1 天 |
| 钉钉 richText + 超时修复 | [#4501](https://github.com/HKUDS/nanobot/pull/4501) | 1 天 |
| WebUI 主页发送/停止按钮/流式残留 | [#4500](https://github.com/HKUDS/nanobot/issues/4500) | 新开 |

### 🟢 长期未响应

| 项目 | 链接 | 状态 |
|---|---|---|
| 项目臃肿/Node.js 依赖争议 | [#660](https://github.com/HKUDS/nanobot/issues/660) | 自 2026-02-14 起，131 天未关闭 |
| 自定义 Provider thinking style | [#4482](https://github.com/HKUDS/nanobot/pull/4482) | 2 天，正常 |
| 搜索历史工具 | [#4439](https://github.com/HKUDS/nanobot/pull/4439) | 4 天，正常 |

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **社区活跃度** | 🟢 高 | 18 issues + 46 PRs / 24h，贡献者背景多元 |
| **响应速度** | 🟢 良好 | 多数 issue 在 24h 内得到首次响应 |
| **安全响应** | 🟡 需加速 | 安全通报已 3-4 天，修复 PR 待合并 |
| **发布节奏** | 🟡 稳定 | 无新 release，但 PR 合并活跃 |
| **多通道稳定性** | 🟡 需关注 | Telegram 回归较多，钉钉/WhatsApp 也有问题 |
| **移动端体验** | 🟡 需改善 | iOS Safari 适配仍有多个 open issue |

**总体判断**：项目处于快速扩张期，社区贡献活跃但安全审查流程需要加速。建议优先合并 MCP 安全修复 PR，并考虑尽快发布包含 Telegram/钉钉修复的 patch release。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-06-25

## 1. 今日速览

Hermes Agent 今日保持高活跃度，共处理 **50 条 Issue 更新**（新开/活跃 37 条，关闭 13 条）和 **50 条 PR 更新**（待合并 32 条，已合并/关闭 18 条）。无新版本发布。项目处于快速迭代期，重点方向集中在：**桌面端体验修复**（多个 PR 解决更新流程 UI 冻结问题）、**网关稳定性**（Discord 心跳阻塞、缓存锁争用）、**Token 开销优化**（工具 schema 懒加载方案讨论热烈），以及 **Docker/部署** 相关修复。社区对 Token 成本优化和多平台消息投递可靠性关注度极高。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 18 个 PR 推进了以下方向：

### 桌面端（Desktop）— 最大活跃区域
- **PR #52201**（已合并）：修复浅克隆（shallow checkout）导致的更新计数错误，从 #51979 cherry-pick 而来。
- **PR #52203**（已合并）：在桌面更新流程中广播 gateway drain 等待状态，避免更新界面看起来卡死。
- **PR #52205**（已合并）：修复多 Profile 环境下 gateway 重启/状态/更新操作可能指向错误后端的问题。
- **PR #52208**（已合并）：修复更新进度条在 macOS/Linux 上显示为"不确定"状态（进度条冻结假象）的问题。
- **PR #52196**（已合并）：拒绝 BMP 格式图片嵌入原生视觉输入，避免 OpenAI/Codex 不支持的 MIME 类型导致调用失败。

> 桌面端今日共合并 **5 个 PR**，更新体验是近期重点打磨方向。

### 网关（Gateway）稳定性
- **PR #52151**（已合并）：修复 gateway 存活检查中的陈旧 PID 误判——当 `gateway_state.json` 中的 PID 已被回收给其他进程时，会错误判断为存活。
- **PR #52199**（已合并）：将 dashboard 的存活检查降级限定在正确的 profile 范围内，是 #52151 的补充修复。
- **PR #52200**（待合并，OPEN）：将跨进程缓存清理移出 `_agent_cache_lock` 锁外，修复 Discord 网关因锁争用导致的心跳阻塞（Issue #52197）。

### Docker / 部署
- **PR #51615**（已合并）：使 Docker 启动时配置迁移具备事务性——迁移失败时自动恢复 `config.yaml` 和 `.env` 的备份，防止半写状态导致容器无法启动。

### CLI
- **PR #52158**（已合并）：修复 `cli-code-format` 插件在流式输出时剥离反引号导致代码块损坏的问题。

---

## 4. 社区热点

### 🔥 Issue #6839 — Lazy Tool Schema Loading（27 条评论，👍14）
**链接**: https://github.com/NousResearch/hermes-agent/issues/6839

这是今日讨论最热的问题。当前每次 API 调用都会注入**所有**已启用工具集的完整 schema（50+ 工具约消耗 3,500-5,000 tokens）。提案建议采用两阶段注入（two-pass）：首轮仅注入轻量工具列表，模型选择工具后再注入完整 schema。社区对此方向认同度高，但涉及 agent 核心调用流程，需要谨慎设计。

### 🔥 Issue #4379 — Token 开销分析：73% 为固定开销（15 条评论）
**链接**: https://github.com/NousResearch/hermes-agent/issues/4379

用户 Bichev 搭建了监控仪表盘，分析了 Hermes v0.6.0 在 Telegram + WhatsApp + Cron 网关部署中的 token 消耗，发现 **73% 的每次 API 调用是固定开销（约 13.9K tokens）**。与 #6839 形成呼应，两者共同指向 token 成本优化的迫切需求。

### 🔥 Issue #5257 — 通用 ACP Client 多 Agent 编排（11 条评论，👍16）
**链接**: https://github.com/NousResearch/hermes-agent/issues/5257

提议将 Hermes 现有的 ACP 服务端能力扩展为通用客户端，使其能够编排所有 ACP 兼容的编码代理（Claude Code、Codex、Cursor 等）。👍16 表明社区对多代理协作有强烈需求。

### 🔥 Issue #3725 — Rocket.Chat 支持（11 条评论，👍10）
**链接**: https://github.com/NousResearch/hermes-agent/issues/3725

社区对新增消息通道有持续需求，Rocket.Chat 作为企业自建 IM 的热门选择，呼声较高。

### 🔥 Issue #39691 — 集成 headroom-ai 进行工具输出压缩（7 条评论，👍10）
**链接**: https://github.com/NousResearch/hermes-agent/issues/39691

当前上下文压缩在会话级别通过 LLM 调用完成，效率低。提案建议引入专门的工具输出压缩层，减少上下文膨胀。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0/P1 — 严重

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#52197](https://github.com/NousResearch/hermes-agent/issues/52197) | 跨进程 agent-cache 缓存在持有 `_agent_cache_lock` 时执行清理，阻塞 Discord 心跳数分钟 | OPEN | **#52200**（待合并） |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | OpenAI-Codex 凭证池在轮换过程中可能丢弃新添加的凭证 | OPEN | 无 |
| [#42449](https://github.com/NousResearch/hermes-agent/issues/42449) | `delegate_task` 通过共享单例污染父级 `context_length` | **CLOSED** | 已修复 |
| [#43466](https://github.com/NousResearch/hermes-agent/issues/43466) | `DELEGATE_BLOCKED_TOOLS` 未过滤 `messaging`/`cronjob`，子代理继承了不应有的能力 | **CLOSED** | 已修复 |
| [#46762](https://github.com/NousResearch/hermes-agent/issues/46762) | Telegram rich_message 在 flood control 重试时丢弃最终响应 | **CLOSED** | 已修复 |
| [#36776](https://github.com/NousResearch/hermes-agent/issues/36776) | DuckDuckGo 搜索无超时，永久挂起阻塞所有平台 | **CLOSED** | 已修复 |

### 🟡 P2 — 中等

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#13834](https://github.com/NousResearch/hermes-agent/issues/13834) | Hermes openai-codex 在同一机器/网络上失败，但官方 Codex CLI 正常 | OPEN | 无 |
| [#33801](https://github.com/NousResearch/hermes-agent/issues/33801) | 密钥脱敏在内容层操作，破坏代码语法（Python/Shell） | OPEN | 无 |
| [#32660](https://github.com/NousResearch/hermes-agent/issues/32660) | 自定义 Ollama 端点的 API 调用中 tools 数组缺失 | OPEN | 无 |
| [#50663](https://github.com/NousResearch/hermes-agent/issues/50663) | z.ai 在高峰期限流 Hermes Agent | OPEN | 无 |
| [#52212](https://github.com/NousResearch/hermes-agent/issues/52212) | 不支持 edit_message 的平台静默丢弃所有工具进度 | OPEN | 无 |
| [#51136](https://github.com/NousResearch/hermes-agent/issues/51136) | Docker 镜像中延迟安装的可选依赖无法安装 | **CLOSED** | 已修复 |

### 🟢 P3 — 低优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#34385](https://github.com/NousResearch/hermes-agent/issues/34385) | Kanban DB 在 WAL 模式下多进程并发访问索引损坏 | OPEN |
| [#33389](https://github.com/NousResearch/hermes-agent/issues/33389) | Gemini 辅助视觉提供者显式配置未被遵守 | OPEN |
| [#36216](https://github.com/NousResearch/hermes-agent/issues/36216) | Hindsight 在 `retain_every_n_turns > 1` 时丢失缓冲轮次 | OPEN |
| [#52141](https://github.com/NousResearch/hermes-agent/issues/52141) | Kanban 工具 `kanban_create`/`kanban_list` 不可用 | OPEN |
| [#52126](https://github.com/NousResearch/hermes-agent/issues/52126) | Telegram 频道文件附件被静默丢弃 | OPEN |
| [#50075](https://github.com/NousResearch/hermes-agent/issues/50075) | 手机上无法选择/复制聊天文本（xterm canvas 限制） | OPEN |

---

## 6. 功能请求与路线图信号

| 方向 | Issue/PR | 信号强度 | 判断 |
|------|----------|----------|------|
| **Token 优化** | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) (Lazy Tool Schema) + [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) (工具输出压缩) + [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) (监控数据) | 🔥🔥🔥 | 三个高赞议题形成合力，Token 成本优化极可能成为下一版本的重点方向 |
| **多 Agent 编排** | [#5257](https://github.com/NousResearch/hermes-agent/issues/5257) (通用 ACP Client) | 🔥🔥 | 👍16，社区需求明确，但涉及架构层，可能需要 RFC 流程 |
| **新消息通道** | [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) (Rocket.Chat) | 🔥 | 持续有用户请求，但需要社区贡献实现 |
| **Gateway Scale-to-Zero** | [PR #52207](https://github.com/NousResearch/hermes-agent/pull/52207) | 🔥🔥 | PR 已提交，Phase 0 空闲检测 + 休眠静默，面向托管部署场景 |
| **Ollama Cloud 搜索** | [PR #22648](https://github.com/NousResearch/hermes-agent/pull/22648) | 🔥 | 长期开放的 PR，已 rebase 到最新 main，等待审查 |
| **Vertex AI 支持** | [PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427) | 🔥 | 长期活跃，Gemini 通过 GCP 的企业级访问路径 |
| **飞书增强** | [PR #51269](https://github.com/NousResearch/hermes-agent/pull/51269) | 🔥 | Bot 间自动发现 + 持久化缓存，推动飞书生态多 Bot 协作 |
| **i18n 本地化** | [#52137](https://github.com/NousResearch/hermes-agent/issues/52137) (俄语) + 法语/中文/葡萄牙语 | 🔥 | 多个语言请求并存，但需要框架级支持而非单点翻译 |
| **辅助 Web Extract 后端** | [PR #52209](https://github.com/NousResearch/hermes-agent/pull/52209) | 🔥 | 修复 `auxiliary` 后端未被注册的问题，小范围修复 |

---

## 7. 用户反馈摘要

### 核心痛点

1. **Token 成本过高**（反复出现）：
   - 用户反馈 50+ 工具的 schema 每次调用都全量注入，浪费 3,500-5,000 tokens
   - 实测 73% 的 API 调用为固定开销
   - 用户期望：按需加载、两阶段注入、工具输出专项压缩

2. **多平台消息投递不可靠**：
   - Telegram 频道文件附件静默丢弃（#52126）
   - Telegram flood control 重试后丢失最终响应（#46762，已修复）
   - 不支持 edit_message 的平台（QQ、微信、Signal、钉钉等）所有工具进度消息被丢弃（#52212）

3. **Docker 部署体验差**：
   - 配置迁移失败导致容器无法启动（已修复，#51615）
   - 官方镜像注册了 Firecrawl 但未安装 SDK，且禁用了延迟安装（已修复，#51136）

4. **桌面端更新体验**：
   - 更新进度条冻结（多个 PR 集中修复）
   - 多 Profile 环境下操作可能指向错误后端（已修复）

5. **子代理安全边界**：
   - `DELEGATE_BLOCKED_TOOLS` 未过滤 messaging/cronjob，子代理继承了消息发送和定时任务能力（已修复，#43466）
   - 这被视为潜在的安全边界问题

### 满意方面
- 社区对桌面端修复的响应速度表示认可（多个 PR 在 24 小时内合并）
- Docker 事务性迁移修复获得积极反馈
- 网关稳定性修复（liveness 检查）被认为解决了长期存在的部署问题

---

## 8. 待处理积压

以下 Issue/PR 长期未得到充分响应，建议维护者关注：

| 项目 | 创建时间 | 状态 | 建议 |
|------|----------|------|------|
| **[#6839](https://github.com/NousResearch/hermes-agent/issues/6839)** Lazy Tool Schema Loading | 2026-04-09 | OPEN，27 条评论 | 已持续 77 天，社区呼声极高，建议尽快给出 RFC/roadmap 表态 |
| **[#4379](https://github.com/NousResearch/hermes-agent/issues/4379)** Token 开销分析 | 2026-04-01 | OPEN，15 条评论 | 已持续 85 天，配合 #6839 可作为下一个里程碑的核心优化 |
| **[#13834](https://github.com/NousResearch/hermes-agent/issues/13834)** OpenAI-Codex 连接问题 | 2026-04-22 | OPEN，12 条评论 | 已持续 64 天，影响 ChatGPT 付费用户 |
| **[#33801](https://github.com/NousResearch/hermes-agent/issues/33801)** 密钥脱敏破坏代码语法 | 2026-05-28 | OPEN，7 条评论 | 已持续 28 天，影响代码生成场景的可靠性 |
| **[#32660](https://github.com/NousResearch/hermes-agent/issues/32660)** Ollama 自定义端点 tools 缺失 | 2026-05-26 | OPEN，3 条评论 | 已持续 30 天，影响本地模型用户 |
| **[#34385](https://github.com/NousResearch/hermes-agent/issues/34385)** Kanban DB 并发索引损坏 | 2026-05-29 | OPEN，3 条评论 | 已持续 27 天，影响 Kanban 功能可靠性 |
| **[PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427)** Vertex AI 支持 | 2026-04-12 | OPEN | 已开放 74 天，长期未合并，可能需要架构审查 |
| **[PR #22648](https://github.com/NousResearch/hermes-agent/pull/22648)** Ollama Cloud 搜索插件 | 2026-05-09 | OPEN | 已开放 77 天，已 rebase 到最新 main，等待审查 |
| **[#52212](https://github.com/NousResearch/hermes-agent/issues/52212)** 非 edit 平台丢弃工具进度 | 2026-06-25 | OPEN，0 条评论 | 新报告，影响 QQ/微信/Signal/钉钉/企微/邮件等多平台用户体验 |

---

**日报生成时间**: 2026-06-25
**数据来源**: GitHub.com/NousResearch/hermes-agent
**分析周期**: 过去 24 小时

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-25

## 1. 今日速览

过去 24 小时，PicoClaw 项目共处理了 **13 条已关闭 Issues** 和 **8 条待合并 PRs**，无新版本发布。今日活跃度较高，主要集中在**安全漏洞的集中关闭**和**多项 bug fix PR 的提交**。值得注意的是，13 条关闭的 Issues 中有 **11 条为同一位安全研究员（YLChen-007）报告的 stale 安全漏洞**，显示项目近期经历了一轮安全审计并进行了批量处理。目前仍有 8 个 PR 等待合并，项目处于积极开发迭代中。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭操作，但以下 **8 个待合并 PR** 代表了当前项目的前进方向：

| PR | 作者 | 类型 | 说明 |
|---|---|---|---|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | trufae | 新功能 | 新增 DeltaChat 网关，扩展消息通道生态 |
| [#3116](https://github.com/sipeed/picoclaw/pull/3116) | afjcjsbx | Bug fix | 完善 Pico `turn.done` 生命周期信号传递，修复排队消息的 `request_id` 保留问题 |
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | Alix-007 | Bug fix | 恢复火山引擎豆包 Seed XML 工具调用解析，修复 OpenAI 兼容性层 |
| [#3166](https://github.com/sipeed/picoclaw/pull/3166) | Alix-007 | Bug fix | 修复 `openai_compat` 包中 `undefined: log` 构建失败问题 |
| [#3168](https://github.com/sipeed/picoclaw/pull/3168) | Alix-007 | Bug fix | 修复模型列表获取失败时错误响应读取异常的处理 |
| [#3169](https://github.com/sipeed/picoclaw/pull/3169) | Alix-007 | Bug fix | 心跳轮次跳过 evolution 冷路径调度，避免不必要的 token 消耗 |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | jp39 | Bug fix | 修复 `data:` URL 被误判为媒体附件导致的会话历史损坏 |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | jp39 | 新功能 | 为 `picoclaw agent` 添加远程 Pico WebSocket 模式 |

**关键方向：** OpenAI 兼容性层的持续修复（4 个 PR 来自 Alix-007）表明项目在对接多模型后端方面投入大量精力；DeltaChat 网关和远程 WebSocket 模式则体现了通道扩展和部署灵活性的路线图。

---

## 4. 社区热点

### 🔴 安全漏洞批量关闭（11 条）

研究员 **YLChen-007** 于 2026-06-09 集中提交了一批安全 advisory，涵盖 11 个独立漏洞，均标记为 stale 并于 2026-06-24 统一关闭。涉及范围包括：

- **SSRF 防护绕过**：通过环境变量配置的 HTTP 代理（[#3078](https://github.com/sipeed/picoclaw/issues/3078)）和 ISATAP IPv6 字面量嵌入内网 IPv4（[#3074](https://github.com/sipeed/picoclaw/issues/3074)）
- **授权绕过**：飞书回复上下文绕过 `allow_from`（[#3082](https://github.com/sipeed/picoclaw/issues/3082)）、企业微信群触发策略绕过（[#3076](https://github.com/sipeed/picoclaw/issues/3076)）、MQTT `allow_from` 伪造（[#3068](https://github.com/sipeed/picoclaw/issues/3068)）
- **命令执行安全**：审批 hook `cwd` 符号链接竞争条件（[#3081](https://github.com/sipeed/picoclaw/issues/3081)）、`exec` 白名单跳过拒绝模式（[#3079](https://github.com/sipeed/picoclaw/issues/3079)）
- **其他**：LINE webhook 重放（[#3073](https://github.com/sipeed/picoclaw/issues/3073)）、Launcher CSRF（[#3072](https://github.com/sipeed/picoclaw/issues/3072)）、WebSocket 未授权重载（[#3071](https://github.com/sipeed/picoclaw/issues/3071)）、不受信任 skills 自动加载（[#3075](https://github.com/sipeed/picoclaw/issues/3075)）

> **分析：** 这些漏洞被统一标记为 stale 后关闭，可能意味着已通过其他渠道修复或确认为已知限制。但如此高密度的安全问题集中处理，建议关注后续是否有安全公告或修复 PR 跟进。

### 🟡 流式 HTTP 请求功能请求

**[#2404](https://github.com/sipeed/picoclaw/issues/2404)** — 请求在配置中支持 `streaming: true` 以向后端 LLM 发送流式 HTTP 请求。该 Issue 获得 **13 条评论、1 个 👍**，是今日互动量最高的 Issue，反映了用户对 OpenAI 兼容流式调用风格的强烈需求。

### 🟡 PageAgent 对 Vue/MVVM 架构的适配咨询

**[#3167](https://github.com/sipeed/picoclaw/issues/3167)** — 用户 Wavekip 咨询 PageAgent 是否有针对 Vue 等 MVVM 架构的适配方案，描述了 Vue 2 + Element UI 企业后台系统的测试场景。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | `openai_compat` 包构建失败（`undefined: log`） | 待合并 | [#3166](https://github.com/sipeed/picoclaw/pull/3166) |
| 🔴 高 | 会话历史因 `data:` URL 误判为媒体附件而损坏 | 待合并 | [#3115](https://github.com/sipeed/picoclaw/pull/3115) |
| 🟡 中 | 模型列表获取失败时错误响应读取异常 | 待合并 | [#3168](https://github.com/sipeed/picoclaw/pull/3168) |
| 🟡 中 | 心跳轮次浪费 evolution draft mode token | 待合并 | [#3169](https://github.com/sipeed/picoclaw/pull/3169) |
| 🟡 中 | Pico `turn.done` 生命周期信号不完整 | 待合并 | [#3116](https://github.com/sipeed/picoclaw/pull/3116) |
| 🟡 中 | 豆包 Seed XML 工具调用在 OpenAI 兼容层丢失 | 待合并 | [#3165](https://github.com/sipeed/picoclaw/pull/3165) |

> **注意：** 上述 11 个安全漏洞虽已关闭，但尚不清楚是否已有对应修复代码合并。建议维护者确认并发布安全公告。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 信号强度 | 判断 |
|---|---|---|---|
| **DeltaChat 网关** | [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) | 🟢 已有 PR | 高概率纳入下一版本 |
| **远程 Pico WebSocket 模式** | [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) | 🟢 已有 PR | 高概率纳入下一版本 |
| **流式 HTTP 请求支持** | [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) | 🟡 高互动无 PR | 需求明确，需排期实现 |
| **PageAgent MVVM 适配** | [Issue #3167](https://github.com/sipeed/picoclaw/issues/3167) | 🟡 新咨询 | 需评估技术可行性 |

---

## 7. 用户反馈摘要

- **多模型后端兼容性是核心痛点：** Alix-007 在一天内提交了 4 个修复 PR，覆盖 Seed XML 工具调用恢复、日志构建修复、错误响应处理和心跳优化，说明 OpenAI 兼容层在实际使用中存在较多对接问题，尤其是对接火山引擎豆包等非 OpenAI 原生模型时。
- **企业用户关注 PageAgent 落地：** Wavekip 的咨询反映了企业级后台系统（Vue 2 + Element UI）对 GUI Agent 的真实需求，但 MVVM 框架下 DOM 操作与组件状态同步是技术难点。
- **流式调用呼声持续：** Issue #2404 的 13 条评论表明社区对配置化流式 HTTP 请求的期待长期存在，这直接影响 LLM 交互的响应速度和用户体验。

---

## 8. 待处理积压

| 积压项 | 类型 | 等待时间 | 建议 |
|---|---|---|---|
| [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) DeltaChat 网关 | PR | 17 天 | stale 状态，需确认是否仍有意愿合并 |
| [PR #3116](https://github.com/sipeed/picoclaw/pull/3116) Pico turn.done 生命周期 | PR | 13 天 | stale 状态，需 review |
| [PR #3115](https://github.com/sipeed/picoclaw/pull/3115) data URL 媒体提取修复 | PR | 13 天 | stale 状态，需 review |
| [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) 远程 WebSocket 模式 | PR | 13 天 | stale 状态，需 review |
| [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) 流式 HTTP 请求 | Issue | 69 天 | 高互动长期未解决，建议排期或给出路线图 |
| 11 个安全漏洞修复确认 | Issue | — | 建议发布安全公告，确认修复已合并 |

> **整体健康度评估：** 项目活跃度高，开发者响应积极（今日 8 个新 PR），但存在 stale PR 积压和安全漏洞处理透明度不足的问题。建议优先清理 stale PR 并公开安全修复状态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-25

## 1. 今日速览

NanoClaw 今日保持高开发活跃度，共产生 18 条 PR 更新和 1 条 Issue 讨论。社区贡献者围绕 **Telegram 多实例支持、Matrix 原生 E2EE 适配器、macOS 网关证书挂载修复、安全加固** 等多个方向并行推进。无新版本发布，但多个高质量 PR 处于待合并状态，显示项目正处于功能密集迭代期。安全相关修复持续活跃（CVE-2026-29611 系列），表明社区对生产级安全性有较高关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 **2 个 PR 被关闭**（#2849 关闭，#2799 关闭），16 个 PR 处于待合并状态。关键进展如下：

### 已合并/关闭

| PR | 状态 | 说明 |
|---|---|---|
| [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) | CLOSED | `fix(security): confine send_file reads to /workspace`（CVE-2026-29611）。修复了 `send_file` 工具允许读取容器内任意路径文件的安全漏洞，限制为仅 `/workspace` 目录。 |
| [#2849](https://github.com/nanocoai/nanoclaw/pull/2849) | CLOSED | `feat(telegram): support multiple bot instances via TELEGRAM_BOT_TOKEN_<SUFFIX>`。作者随后以 #2853 替代，当前已关闭。 |

### 待合并重点 PR

| PR | 作者 | 方向 |
|---|---|---|
| [#2844](https://github.com/nanocoai/nanoclaw/pull/2844) | avri-schneider | **Matrix 原生持久化 E2EE 适配器**：用 `matrix-bot-sdk` + `@matrix-org/matrix-sdk-crypto-nodejs` 替换 Chat SDK 桥接，解决 WASM 加密性能问题。 |
| [#2854](https://github.com/nanocoai/nanoclaw/pull/2854) | rodrigocuriel | **macOS 网关 CA 证书挂载修复**：解决 Rancher Desktop 和 Apple `container` 环境下因自签名证书导致的 API 连接失败。 |
| [#2847](https://github.com/nanocoai/nanoclaw/pull/2847) | grantland | **URL 远程 MCP 服务器支持**：为 `McpServerConfig` 添加可选 `url` 字段，支持 HTTP/SSE 远程 MCP 服务器连接。 |
| [#2846](https://github.com/nanocoai/nanoclaw/pull/2846) | grantland | **Docker-in-Docker 支持**：挂载 `/var/run/docker.sock` 并添加 `--group-add <docker-gid>`，支持容器内运行 Docker agent 组。 |
| [#2842](https://github.com/nanocoai/nanoclaw/pull/2842) | foxsky | **通用扩展点接口**：在 host 和 container runtime 中添加惰性扩展点（`registerX()` / `applyX()` 对），为未来插件架构奠定基础。 |
| [#2853](https://github.com/nanocoai/nanoclaw/pull/2853) | grantland | **Telegram 多 Bot 实例支持**（替代 #2849）：通过 `TELEGRAM_BOT_TOKEN_<SUFFIX>` 环境变量发现机制，支持单实例运行多个 Telegram bot。 |

---

## 4. 社区热点

### Issue #2852 — Telegram 多 Bot 实例功能诉求

- **链接**: [nanocoai/nanoclaw Issue #2852](https://github.com/nanocoai/nanoclaw/issues/2852)
- **作者**: Kwisss
- **内容**: 用户反映 Telegram 多 Bot 功能此前存在后被移除，文档提到 "instance" 支持但 Claude 无法使其正常工作，质疑该功能是否会被正式实现。
- **分析**: 该 Issue 直接呼应了 #2849 / #2853 的开发工作，说明社区对此需求有真实痛点。用户语气中带有不确定性（"do we need to look elsewhere?"），暗示部分用户可能因功能缺失而考虑迁移。#2853 的及时出现有望回应此关切。

### PR #2844 — Matrix 原生 E2EE 适配器

- **链接**: [nanocoai/nanoclaw PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844)
- **分析**: 这是今日体量最大的功能 PR，将 Matrix 适配器从 WASM 加密桥接方案迁移到原生 Rust 绑定实现，预期解决性能和内存占用问题。该 PR 关闭了 #2843 的追踪工作，显示团队对 Matrix 渠道有长期投入计划。

---

## 5. Bug 与稳定性

| 严重程度 | PR/Issue | 问题描述 | 状态 |
|---|---|---|---|
| 🔴 **Critical** | [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) | CVE-2026-29611：`send_file` 允许读取容器内任意文件（凭证状态、挂载文件等） | 已关闭 |
| 🔴 **Critical** | [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) | `ncl groups create --folder` 路径遍历漏洞（CWE-22），可逃逸 `GROUPS_DIR` | 待合并 |
| 🔴 **Critical** | [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | `safeParseContent` 对原始 JSON 解析返回非对象，导致路由 `.text`/`.sender` 读取为 `undefined` | 待合并 |
| 🟠 **High** | [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) | `ncl` socket 无请求超时和响应缓冲区上限，可导致永久挂起或无限内存增长 | 待合并 |
| 🟠 **High** | [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | 容器 SIGKILL 后 `outbound.db` 日志损坏；热日志轮询竞争条件 | 待合并 |
| 🟡 **Medium** | [#2851](https://github.com/nanocoai/nanoclaw/pull/2851) | 测试中废弃的 poll loop 未正确终止，窃取后续测试消息 | 待合并 |
| 🟡 **Medium** | [#2850](https://github.com/nanocoai/nanoclaw/pull/2850) | Signal 群聊消息缺少 `isMention` 和 `isGroup` 字段，路由无法区分@消息与普通群流量 | 待合并 |
| 🟡 **Medium** | [#2848](https://github.com/nanocoai/nanoclaw/pull/2848) | OpenCode provider 缺少 cwd 和 .env 回退机制 | 待合并 |
| 🟡 **Medium** | [#2845](https://github.com/nanocoai/nanoclaw/pull/2845) | `q.ts` 未转发位置参数，不支持参数化查询 | 待合并 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 路线图信号 |
|---|---|---|
| **Telegram 多 Bot 实例** | Issue [#2852](https://github.com/nanocoai/nanoclaw/issues/2852) + PR [#2853](https://github.com/nanocoai/nanoclaw/pull/2853) | 高概率纳入下一版本，已有实现 PR |
| **Matrix 原生 E2EE 适配器** | PR [#2844](https://github.com/nanocoai/nanoclaw/pull/2844) | 高概率合并，已关闭关联追踪 issue |
| **远程 MCP 服务器（HTTP/SSE）** | PR [#2847](https://github.com/nanocoai/nanoclaw/pull/2847) | 中等概率，需 review 安全影响 |
| **Docker-in-Docker 支持** | PR [#2846](https://github.com/nanocoai/nanoclaw/pull/2846) | 高概率，实现简洁且需求明确 |
| **通用扩展点架构** | PR [#2842](https://github.com/nanocoai/nanoclaw/pull/2842) | 长期方向，当前为惰性占位，风险低 |
| **`/learn` 技能** | PR [#2843](https://github.com/nanocoai/nanoclaw/pull/2843) | 新增技能，低风险，可能快速合并 |

---

## 7. 用户反馈摘要

- **Telegram 多实例功能缺失**（Issue #2852）：用户明确表示该功能曾被移除后无法通过文档指引恢复，产生"是否需要另寻他路"的犹豫。反映出两个问题：① 功能移除时缺乏迁移说明；② 文档与实际行为存在差距。建议合并 #2853 后同步更新文档并发布 changelog。
- **macOS 开发环境兼容性**（PR #2854）：Rancher Desktop 和 Apple 容器用户在实际开发中遇到证书验证失败，说明项目在 macOS 生态的 QA 覆盖有待加强。
- **安全漏洞响应积极**：CVE-2026-29611 系列 PR（#2799、#2800、#2801、#2802）均由社区成员主动提交，且覆盖文件读取、路径遍历、输入解析、传输层四个攻击面，体现社区对安全治理的高度参与。

---

## 8. 待处理积压

| PR/Issue | 创建日期 | 最后更新 | 风险提示 |
|---|---|---|---|
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) — outbound.db 日志恢复 | 2026-06-12 | 2026-06-24 | 已等待 12 天，涉及数据丢失场景，建议优先 review |
| [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) — 路径遍历漏洞 | 2026-06-17 | 2026-06-24 | 安全关键 PR，等待 8 天，建议加速合并 |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) — safeParseContent 加固 | 2026-06-17 | 2026-06-24 | 安全相关，与 #2800 同批提交 |
| [#2802](https://github.com/nanocoai/nanoclaw/pull/2802) — socket 加固 | 2026-06-17 | 2026-06-24 | 安全相关，与 #2800 同批提交 |
| [#2815](https://github.com/nanocoai/nanoclaw/pull/2815) — safeParseContent 回归测试补充 | 2026-06-18 | 2026-06-24 | 是 #2801 的替代版本，建议确认是否取代旧 PR |

> **维护者建议**：4 个安全相关 PR（#2799、#2800、#2801、#2802）均已在 6 月 17 日提交，其中 #2799 已关闭。建议对 #2800、#2801、#2802 进行集中 review 并尽快合并，以完整关闭 CVE-2026-29611 系列。#2815 与 #2801 存在功能重叠，建议确认合并策略避免冲突。

---

*本报告基于 2026-06-25 GitHub 数据自动生成。数据源：github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-25

## 1. 今日速览

IronClaw 今日活跃度处于**高位**：共处理 Issues 19 条（新开/活跃 17，关闭 2）、PR 41 条（24 待合并，17 已合并/关闭），反映出社区贡献和内部迭代节奏均较快。核心贡献者（serrrfirat、BenKurrek、italic-jinxin、hanakannzashi、sunglow666）集中发力，多条大尺寸（XL）PR 并行推进，主线围绕 **Reborn 内存架构重构、WebUI v2 前端整顿、provider 容错、工具权限体验** 四条线展开。今日无新版本发布，但有若干关键修复和重构 PR 已合并，项目健康度良好。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的代表性 PR 及其推进：

| PR | 状态 | 内容摘要 |
|---|---|---|
| **PR #5193** | ✅ Closed | 修复 CI workflow 文件 YAML 重复 key 导致 CI 完全无法运行的问题，同时补回遗漏的 `spawn_subagent` 测试 ignore 配置，恢复 main 分支绿色 CI。 |
| **PR #5194** | ✅ Closed | 修复从 Slack 创建 thread 后通过 WebUI 重连 SSE 导致 session "disconnected" 并扩散到其他用户的生产级 bug。 |
| **PR #5186** | ✅ Closed | 完成 Reborn 设置标签中文化及自动化筛选器标签响应性修复（对应 Issue #5187）。 |
| **PR #5187** | ✅ Issue Closed | 与 PR #5186 配对，Reborn WebUI v2 设置与自动化筛选器本地化需求确认完成。 |

**整体推进评估：**
- **CI 健康度**：通过 #5193  + #5194  ，项目 main 分支 CI 恢复绿色，SSE 重连回归修复弥补了一个影响多租户用户的生产缺陷。
- **WebUI v2 体验**：#5186 设置本地化落地，#5160（仍在进行）持续修复工具活动流 SSE 推送问题，WebUI v2 体验持续改善。
- **内存架构**：#5163（Reborn 内存层 M2 lift）+ #5195（审批卡持久化）为后续 provider 中性与扩展打下基础。

---

## 4. 社区热点

按评论活跃度与议题重要性排序：

1. **[Issue #5169](https://github.com/nearai/ironclaw/issues/5169)** —  Bundled skills 触发 prompt-safety 词汇 denylist 导致良性请求直接 fail。讨论虽仅 2 条评论，但问题直指核心 safety 过滤器的误伤机制，社区对"干净安装即出错"的尖锐描述反应强烈。
2. **[Issue #5139](https://github.com/nearai/ironclaw/issues/5139)** — Reborn 在 web/research 任务初始化阶段挂起（0 LLM 调用、0 工具调用）的回归，影响 PinchBench 21/147 任务。PR 已修复并关闭，但影响面较大。
3. **[Issue #5182](https://github.com/nearai/ironclaw/issues/5182)** — Reborn 托管可观测性需求：operators 难以从 binary 中提取有意义的诊断日志，诉求明确指向运维友好性。
4. **[PR #5149](https://github.com/nearai/ironclaw/pull/5149)** — Context management：渐进式工具披露，旨在将每轮提示从约 25.8k tokens 削减以避免 120s 超时。生产数据驱动，讨论热度高。
5. **[PR #5203](https://github.com/nearai/ironclaw/pull/5203)** — LLM provider 快速失败机制：避免 provider 宕机时单个 turn 阻塞 30+ 分钟，直接影响所有 hosted 用户。
6. **[PR #5137](https://github.com/nearai/ironclaw/pull/5137)** — 将 ~132k 行的 god-crate `ironclaw_reborn_composition` 拆解为独立 crate 的首个 PR，提出分阶段渐进拆解方案。

---

## 5. Bug 与稳定性

按严重程度排列（严重 → 一般）：

| 严重级别 | Issue / PR | 标题 | 状态 | 是否已有 Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#5139](https://github.com/nearai/ironclaw/issues/5139) | Reborn web/research 任务 init 挂起（0 调用） | ✅ Closed | 已有 PR 修复并关闭 |
| 🔴 高 | [#5194](https://github.com/nearai/ironclaw/pull/5194) | Slack + WebUI 跨通道 SSE 重连断开 | ✅ Closed | PR #5194 已修复 |
| 🔴 高 | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E 持续失败 | ⚠️ Open | 长期未解决 |
| 🟡 中 | [#5169](https://github.com/nearai/ironclaw/issues/5169) | Bundled skills 触发 safety denylist 误杀 | ⚠️ Open | 暂无 |
| 🟡 中 | [#4986](https://github.com/nearai/ironclaw/issues/4986) | 循环自动化因工具审批永久阻塞 | ⚠️ Open | 暂无 |
| 🟡 中 | [#5184](https://github.com/nearai/ironclaw/issues/5184) | NEAR AI MCP product-auth 不可用时启动失败 | ⚠️ Open | 暂无 |
| 🟡 中 | [#5189](https://github.com/nearai/ironclaw/issues/5189) | WebUI 运行中工具成功时活动详情不显示 | ⚠️ Open | — |
| 🟡 中 | [#5190](https://github.com/nearai/ironclaw/issues/5190) | 无效 UI bearer token 可进入 WebUI 后续操作无响应 | ⚠️ Open | — |
| 🟡 中 | [#5196](https://github.com/nearai/ironclaw/issues/5196) | "Ask each time" 工具权限点 Approve 后报 authorization 错误并触发重复审批 | ⚠️ Open | — |
| 🟡 中 | [#5197](https://github.com/nearai/ironclaw/issues/5197) | Disabled 工具可能触发无关工具调用而非报告不可用 | ⚠️ Open | — |
| 🟡 中 | [#5191](https://github.com/nearai/ironclaw/issues/5191) | 内部 skill 激活 / context budget 消息暴露给用户 | ⚠️ Open | — |
| 🟡 中 | [#5192](https://github.com/nearai/ironclaw/issues/5192) | 拒绝工具审批后仍出现额外审批请求 | ⚠️ Open | — |
| 🟢 低 | [#5179](https://github.com/nearai/ironclaw/issues/5179) | 多租户用户无法在 WebUI 查看日志 | ⚠️ Open | PR #5199 进行中 |
| 🟢 低 | [#5187](https://github.com/nearai/ironclaw/issues/5187) | 设置标签本地化与自动化筛选器标签响应性 | ✅ Closed | PR #5186 已合并 |
| 🟢 低 | [#5188](https://github.com/nearai/ironclaw/issues/5188) | WebUI v2 侧边栏响应式行为异常 | ⚠️ Open | — |

---

## 6. 功能请求与路线图信号

从 Issues 与并行 PR 中梳理出的潜在路线图方向：

| 方向 | 驱动 Issue / PR | 判断依据 |
|---|---|---|
| **Context management / 工具按需披露** | PR #5149 | 大尺寸 XL PR，生产数据驱动，直接解决超时问题，合并概率高。 |
| **Provider 智能容错 / 快速失败** | PR #5203 | 解决 NEAR AI 单点故障导致的全局阻塞，方向与 #5149 互补，可能被优先合并。 |
| **Reborn 内存层 provider 中性与扩展** | PR #5163 + Issue #5201 + PR #5165 | M2 lift 已完成，#5201 已创建继任跟踪 issue，#5165 紧随其后提供 native seeding。路线图明确。 |
| **Composition crate 拆解** | PR #5137 | 系列化重构首个 PR，方向清晰，风险 medium，已通过产品无侵入性降低合并阻力。 |
| **工具权限体验整顿（WebUI v2）** | PR #5068 + #5195, Issues #5196/#5197/#5192 | 多个 issue 聚焦审批流异常，#5195 已持久化 always-allow，后续可能继续收敛。 |
| **Reborn 托管可观测性** | Issue #5182 | 呼声明确但尚无对应 PR，可能进入 M3 或后续里程碑。 |
| **Nightly E2E 稳定化** | Issue #4108 | 持续失败超过一个月，建议作为优先级提升的独立项目处理。 |

---

## 7. 用户反馈摘要

从今日 Issues 评论与 descriptor 中提炼的真实痛点：

- **生产可靠性焦虑**（核心诉求）：多个用户通过 dogfooding tracker #5119 报告 WebUI v2 在工具审批、活动流、SSE 重连、认证 token 等方面存在"静默失败"——实际操作未生效但无任何错误提示（#5190、#5189、#5196）。用户期望失败**显式可感**。
- **多租户可操作性问题**：#5179 指出多租户用户无法在 WebUI 查看日志而非真正"无权限"，说明租户隔离策略可能**过度阻断**而非合理放行。
- **API 词汇误杀**：#5169 中 "clean-setup repro" 的描述暗示用户并未进行任何异常操作即触发 safety denylist，反馈"temporary system issue" 的报错信息具有误导性——用户期望**更明确的拒绝原因或白名单豁免机制**。
- **Benchmark 疲劳信号**：Issue #5173 发布日失败分类，强调"benchmark defects, not model quality"，暗示社区对基准测试基础设施本身存在信任危机。
- **满意信号**：#5182 对托管可观测性的诉求以"目前必须手动肉眼 scrap process logs"描述，虽为功能请求，但侧面反映用户对当前产品**主动采用和部署**的意愿较高。

---

## 8. 待处理积压

以下长期未响应或高风险积压项建议维护者关注：

| 积压项 | 持续时长 | 风险 | 建议 |
|---|---|---|---|
| **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)** Nightly E2E 失败 | > 30 天（5/27 至今） | 🟠 可能阻塞 release 门禁，且长期红色 CI 降低贡献者信心 | 拆分根因，独立排期修复或临时 skip 部分 flaky 测试 |
| **[Issue #4986](https://github.com/nearai/ironclaw/issues/4986)** 循环自动化工具审批永久阻塞 | 9 天（6/16 至今） | 🔴 影响自动化核心使用场景 | 关联到 PR #5068 工具权限设计一并解决 |
| **[Issue #5169](https://github.com/nearai/ironclaw/issues/5169)** Bundled skills 触发 safety denylist | 2 天 | 🟠 干净安装即可复现，影响新用户首次体验 | 建议优先排入最近一个 patch release |
| **[Issue #5184](https://github.com/nearai/ironclaw/issues/5184)** product-auth 启动失败无 degrade | 新鲜报告 | 🟡 关联 #5119，需确认是否需要 PR #5203 的快速失败机制覆盖此路径 | — |
| **PR #5084** Automations 页面重设计 | 7 天 | 🟡 大 PR 无评论，可能因 review 带宽不足被阻塞 | — |
| **PR #5137** Composition crate 1/N 拆解 | 3 天 | 🟡 XL 无评论，系列首篇，合并节奏影响后续拆解 | — |
| **PR #5149** Context management — progressive tool disclosure | 2 天 | 🟡 xl 规模，需充足 review 时间 | — |

---

**总结**：IronClaw 项目今日处于**高产出、高并行**状态，核心团队在 WebUI 体验、内存架构、provider 容错三条战线上同步推进。短期优先级建议聚焦：(1) 恢复并维持 CI 绿色；(2) 合并 provider 快速失败与 context management 两个高价值 PR；(3) 将 #4108 Nightly E2E 作为独立风险项排期清理。社区对 WebUI v2 "静默失败"类体验问题反应集中，建议后续通过统一的错误可见性方案系统性回应。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-25

---

## 1. 今日速览

LobsterAI 在过去 24 小时内保持了**高活跃度**，共有 **43 个 PR 更新**（其中 41 个已合并/关闭），合并节奏非常紧密，体现出团队正在集中消化一批积压已久的 PR 改动。Issues 方面仅有 1 条为长期闲置的陈旧 Issue，无新的用户问题涌入。**无新版本发布**，当前处于大规模代码落地后的稳定期。整体来看，项目稳中向前，重点在**稳定性修复与架构清理**，而非功能扩张。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 43 个 PR 覆盖了多个核心模块，以下按方向分类汇总最重要的进展：

### 🔧 OpenClaw 网关稳定性（核心）

| PR | 摘要 |
|---|---|
| [#2196](https://github.com/netease-youdao/LobsterAI/pull/2196) | 修复 shell 快照期间产生多余 dock 的问题，将 Windows 的 Electron Node spawn 路径扩展到 macOS/Linux |
| [#2195](https://github.com/netease-youdao/LobsterAI/pull/2195) | 统一使用 `ELECTRON_RUN_AS_NODE=1` 通过 spawn 方式启动 OpenClaw 网关，避免嵌套 Electron 子进程将 Node 参数解析为应用路径 |
| [#2043](https://github.com/netease-youdao/LobsterAI/pull/2043) | 修复 GitHub Copilot token 刷新导致网关意外重启的问题 |
| [#2050](https://github.com/netease-youdao/LobsterAI/pull/2050) | 处理 `sessions.patch` 超时不再阻塞 `chat.send` |
| [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) | **高优先级**：修复中断的工具循环（aborted tool loops）持续消耗 token 的问题——添加了缺失的 aborted-loop breaker |
| [#2051](https://github.com/netease-youdao/LobsterAI/pull/2051) | 再次修复 tool loop breaker（对 [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) 的补充修正） |

### 🤝 Cowork（协作/会话）模块

| PR | 摘要 |
|---|---|
| [#2197](https://github.com/netease-youdao/LobsterAI/pull/2197) | 去重 history fallback 后产生冗余 assistant 前缀摘要 |
| [#2047](https://github.com/netease-youdao/LobsterAI/pull/2047) | **重大修复**：解决会话冻结（session freezing）问题 |
| [#2058](https://github.com/netease-youdao/LobsterAI/pull/2058) | 收紧大型工具结果后短期 final 的宽限期 |
| [#2078](https://github.com/netease-youdao/LobsterAI/pull/2078) | 新增功能：发送 selected-skill 路由元数据而非内联提示词 |

### 💬 IM / 消息模块

| PR | 摘要 |
|---|---|
| [#2063](https://github.com/netease-youdao/LobsterAI/pull/2063) | 限定 reply assembly 作用于当前轮次，并过滤 thinking blocks |

### 🖥️ 渲染器 / UI

| PR | 摘要 |
|---|---|
| [#2053](https://github.com/netease-youdao/LobsterAI/pull/2053) | 修复模型选择 UI |
| [#2088](https://github.com/netease-youdao/LobsterAI/pull/2088) | 更新 Kits UI |
| [#2102](https://github.com/netease-youdao/LobsterAI/pull/2102) | 保留用户自定义 context windows，新增 mimo v2.5 模型 |

### ⚙️ 安装 / 更新

| PR | 摘要 |
|---|---|
| [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057) | 新版应用更新器：用隐藏 PowerShell 替换已弃用的 VBScript 启动器 |
| [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) | 修复 Windows 微信更新/重装期间的 Bug |

### 📊 评估

今日合并密度极高（41 个 PR），但其中绝大多数是**延迟合并**（最早可追溯到 5 月 25 日），实际消化的是过去一个月积累的改动。核心产出集中在三大方向：**OpenClaw 网关稳定性**（解决 token 无限消耗、会话冻结、网关重启等问题）、**Cowork 模块可靠性**、以及**模型/配置管理优化**。项目在工程健壮性层面迈出了一大步。

---

## 4. 社区热点

今日无新增活跃讨论。唯一一条更新的 Issue 为陈旧 Issue（见下文 §8），无评论爆发或社区热议迹象。

---

## 5. Bug 与稳定性

按严重程度排列今日涉及修复的关键 Bug：

| 严重度 | Bug 描述 | 修复 PR | 状态 |
|:---:|---|---|:---:|
| 🔴 **P0** | 中断的工具循环（aborted tool loop）导致 token 持续燃烧，空闲状态下不终止 | [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049)、[#2051](https://github.com/netease-youdao/LobsterAI/pull/2051) | ✅ 已合并 |
| 🟠 **P1** | 会话冻结（session freezing） | [#2047](https://github.com/netease-youdao/LobsterAI/pull/2047) | ✅ 已合并 |
| 🟠 **P1** | GitHub Copilot token 刷新触发网关重启 | [#2043](https://github.com/netease-youdao/LobsterAI/pull/2043) | ✅ 已合并 |
| 🟠 **P1** | 嵌套 Electron 子进程将 Node 脚本误识别为应用路径 | [#2195](https://github.com/netease-youdao/LobsterAI/pull/2195)、[#2196](https://github.com/netease-youdao/LobsterAI/pull/2196) | ✅ 已合并 |
| 🟡 **P2** | `sessions.patch` 超时阻塞消息发送 | [#2050](https://github.com/netease-youdao/LobsterAI/pull/2050) | ✅ 已合并 |
| 🟡 **P2** | Shell 快照期间产生多余 dock 条目 | [#2196](https://github.com/netease-youdao/LobsterAI/pull/2196) | ✅ 已合并 |
| 🟢 **P3** | Windows 微信更新/重装期间异常 | [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) | ✅ 已合并 |
| 🟢 **P3** | LLM 流输出含空数据 | [#2048](https://github.com/netease-youdao/LobsterAI/pull/2048) | ✅ 已合并 |

**分析**：所有高优先级 Bug 均已被修复合并，项目在稳定性层面完成了一次集中清障。P0 级别的 token 燃烧问题尤其值得关注——这直接影响用户的 API 成本，修复后应显著降低异常消耗。

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 路线图判断 |
|---|---|---|
| **Skill 路由透明化** | [#2078](https://github.com/netease-youdao/LobsterAI/pull/2078) 已合入——使用路由元数据替代表层内联提示词 | ✅ 已落地；后续可能扩展 skill 面板可视化 |
| **模型生态扩展** | [#2089](https://github.com/netease-youdao/LobsterAI/pull/2089) 新增 MiniMax M3、BYOK 默认 context windows、[#2102](https://github.com/netease-youdao/LobsterAI/pull/2102) 新增 mimo v2.5 | ✅ 已落地；模型支持列表持续扩展 |
| **用户自定义配置保护** | [#2102](https://github.com/netease-youdao/LobsterAI/pull/2102) 保留用户手动设置的 context windows | ✅ 已落地；体现对高级用户配置的尊重 |
| **安装器现代化** | [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057) VBScript → PowerShell 迁移 | ✅ 已落地；Windows 平台维护性提升 |

**判断**：当前路线图重心在**稳定性与模型生态**，未见重大新功能方向的 PR 积压。下一版本预计以 Bug 修复和小幅优化为主。

---

## 7. 用户反馈摘要

今日唯一活跃的 Issue [#1394](https://github.com/netease-youdao/LobsterAI/issues/1394) 反映了以下用户痛点：

- **场景**：用户创建了"不重复执行"的定时任务，期望任务执行一次后仍可编辑和再次使用
- **实际行为**：任务执行一次后被自动永久删除
- **用户诉求**：不重复执行 ≠ 一次性执行；任务应保留，支持后续手动编辑和重新激活
- **情绪倾向**：困惑与不满——"虽然是不重复执行的任务，但任务是支持编辑的，这次跑过之后也许下次还需要用"
- **状态**：该 Issue 创建于 2026-04-03，已标记 stale，长期未获回应

---

## 8. 待处理积压

| Issue/PR | 创建日期 | 状态 | 风险 |
|---|---|---|---|
| [#1394](https://github.com/netease-youdao/LobsterAI/issues/1394) — 定时任务不重复执行后自动删除 | 2026-04-03 | 🟡 OPEN / stale | 已搁置近 3 个月，标记 stale 但未被正式关闭或修复；影响定时任务功能的可维护性体验 |

**建议**：该 Issue 虽非阻塞性 Bug，但涉及用户对定时任务生命周期的心智模型预期。建议维护者尽快做出明确决策——修复或正式关闭并说明设计意图，避免 stale 标签掩盖真实需求。

---

> **日报总结**：LobsterAI 今日完成了一轮大规模 PR 合并（41 个），集中解决了 OpenClaw 网关稳定性、token 异常消耗、会话冻结等关键问题。项目健康度**良好**，工程债务正在被有效清理。主要风险点在于 Issue 响应速度——唯一活跃 Issue 已 stale 近 3 月，社区互动有待加强。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报 — 2026-06-25

## 1. 今日速览

TinyClaw 项目在过去 24 小时内整体活跃度较低。无新开或活跃的 Issue，无新版本发布。唯一的动态是 PR #281 于 6 月 24 日完成关闭，该 PR 修复了 Windows 原生环境下的三个关键兼容性问题。项目目前处于相对平静期，社区贡献节奏放缓，维护侧以存量 PR 消化为主。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**PR #281 — fix: Windows cross-platform support in CLI**（已关闭）

- **作者：** mperkins0155
- **时间线：** 创建于 2026-06-16，更新于 2026-06-24
- **链接：** [TinyAGI/tinyagi#281](https://github.com/TinyAGI/tinyagi/pull/281)

**修复内容摘要：**

该 PR 解决了三个导致 `tinyagi` CLI 无法在原生 Windows（非 WSL）环境下运行的独占性 Bug：

1. **路径双驱动字母导致 `MODULE_NOT_FOUND`** — `new URL('.', import.meta.url).pathname` 在 Windows 上返回 `/C:/Users/...`，传入 `path.resolve` 后 Node.js 将前导 `/` 误解析为路径组件，导致模块查找失败。
2. **Windows 路径分隔符不兼容** — 代码中硬编码了 Unix 风格的 `/` 分隔符，在 Windows 环境下引发文件路径解析异常。
3. **Windows 不支持的信号/进程管理调用** — 涉及 Unix 特有系统调用在 Windows 上不可用。

**影响评估：** 这是一次重要的跨平台兼容性修复，将项目的可覆盖用户群扩展至纯 Windows 开发者群体，降低了 Windows 用户的使用门槛。

---

## 4. 社区热点

过去 24 小时内无活跃讨论。PR #281 虽已关闭，但作为近期唯一的技术贡献，其 Windows 兼容性问题反映了跨平台用户群体的实际需求。该 PR 从创建到关闭历时 8 天，期间未见评论互动，说明维护者可能直接完成了合并/关闭流程，社区讨论氛围偏安静。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | Fix PR |
|---------|---------|------|--------|
| 🔴 高 | Windows 原生环境 `MODULE_NOT_FOUND` 崩溃 | 已修复 | PR #281 |
| 🟡 中 | Windows 路径分隔符不兼容 | 已修复 | PR #281 |
| 🟡 中 | Windows 不支持的 Unix 信号/进程调用 | 已修复 | PR #281 |

所有已知 Windows 相关 Bug 已通过 PR #281 一并解决，当前无未修复的稳定性问题积压。

---

## 6. 功能请求与路线图信号

- 当前无活跃 Issue 提出新功能请求。
- PR #281 的修复方向表明项目团队正在推进**跨平台支持**这一基础设施能力建设，后续可能继续覆盖更多平台适配（如 ARM 架构、BSD 系统等）。
- 建议关注后续是否有 Windows CI/CD 测试矩阵的补充 PR，以保障跨平台修复的长期稳定性。

---

## 7. 用户反馈摘要

- **痛点：** Windows 原生用户无法直接运行 `tinyagi` CLI，被迫依赖 WSL 层，增加了使用复杂度和性能开销。
- **使用场景：** 希望在 Windows 开发环境中直接调用 TinyClaw 进行本地 AI 智能体开发，无需额外虚拟化层。
- **满意度信号：** PR 已关闭表明问题得到解决，但缺乏用户确认评论，建议维护者在合并后主动邀请报告者验证修复效果。

---

## 8. 待处理积压

- 当前无活跃 Issue 积压，无待合并 PR。
- **建议关注：** 项目近 24 小时零 Issue 活动，可能反映社区发现渠道不活跃或用户群体尚在早期培育期。建议维护者主动在社区渠道（Discord/Discussions）引导用户反馈使用体验，以提前捕获潜在问题。

---

**项目健康度评估：** 🟡 中等
- 代码质量维护正常，关键 Bug 得到修复
- 社区活跃度偏低，需关注用户增长与贡献者留存
- 跨平台能力建设取得进展，基础设施趋于完善

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 · 2026-06-25

---

## 1. 今日速览

CoPaw 社区保持高活跃度，过去 24 小时共处理 **23 条 Issues**（14 新开/活跃，9 关闭）和 **50 条 PR**（44 待合并，6 已合并/关闭）。无可发布新版本，但合入的 PR 密集覆盖了 GLM 模型兼容性修复、AgentScope 2.0 Token UI 恢复、Cron 热稳定性等关键议题。**前端稳定性仍为用户抱怨最集中的方向**——Console 渲染崩溃、长消息排版错乱、会话文件过大导致白屏等问题持续涌入，需要优先关注。

---

## 2. 版本发布

无。最新版本仍为 v1.1.12.post2，2.0 分支仍处于 beta 阶段（git `a9ee2e83`）。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 类型 | 意义 |
|---|---|---|
| **#5498** fix: 将 `Current date` 从 env context 移至每用户消息动态前缀 | Bug Fix | 解决长会话中时间戳陈旧问题，提升 prompt-cache 友好性 |
| **#5476** 移动端无法切换智能体 | Bug Fix | 已关闭 |

### 待合并重点 PR 储备

| PR | 类型 | 内容 |
|---|---|---|
| **#5321** | Feature🆕 | `scroll` context manager — 基于 SQLite 持久化 + REPL 按需召回的上下文管理新策略 |
| **#5448** | Feature🆕 | TUI 支持 project-scoped code sessions（`qwenpaw .`） |
| **#5443** | Bug Fix | 恢复 ACP 迁移后丢失的 TUI 内联审批与 slash commands |
| **#5496** | Bug Fix | 内联工具 schema 中的 `$ref/$defs` 以修复 GLM-5.x 兼容性 |
| **#5495** | Bug Fix | 对齐 envelope event 翻译协议，修复 2.0 流式 tool call 前端渲染 |
| **#5493** | Bug Fix | 恢复 AgentScope 2.0 迁移后丢失的 token/context usage 环形图与弹窗 |
| **#5492** | Feature🆕 | 支持通过 pip 从 PyPI 安装 plugins（entry points 发现机制） |
| **#5494** | Bug Fix | 修复 cron session 可见性、内存隔离与热重载稳定性 |
| **#5491** | Bug Fix | DashScope provider 正确处理 `extra_body` 参数，兼容旧配置 |
| **#5210** | Feature🆕 | `qwenpaw cron update` CLI 子命令，支持原地修改 cron job |

**综合判断：** 项目正在推进 2.0 运行时的功能对等化（token UI 恢复、streaming 对齐），同时 scroll context manager 和 pip 插件安装属于战略性新功能，可能纳入 1.1.13 或 2.0 正式版。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**#5345** — [Custom OpenAI-compatible providers (e.g. OMLX) don't support function calling](https://github.com/agentscope-ai/QwenPaw/issues/5345)
- 👍 0 · 💬 8 条评论 · 开放 5 天
- **诉求**：用户实现了完整的 OpenAI `/v1/chat/completions + tools` API，在 Reasonix（另一 Agent 框架）上 Agent 能力验证通过，但在 CoPaw 中自定义 OMLX provider 后模型仅返回文本、不调用工具。
- **信号**：自定义 provider 的 function calling 链路存在缺陷，影响所有非原生支持的 OpenAI 兼容后端。

**#5479** — [大会话文件（>500KB）打开报错](https://github.com/agentscope-ai/QwenPaw/issues/5479)
- 👍 0 · 💬 2 条评论 · 今日新增
- **场景**：重度使用者单次会话历史超过 500KB 后 Web UI 完全白屏，只能删会话。

**#5480** — [Console 长消息排版错乱，切换选项卡后恢复](https://github.com/agentscope-ai/QwenPaw/issues/5480)
- 👍 0 · 💬 2 条评论 · 今日新增
- **场景**：接收含 Markdown 的长回复时换行/列表/代码块全失效，怀疑 CSS recalculation 未触发。

**#5401** — [大工具调用历史导致前端崩溃](https://github.com/agentscope-ai/QwenPaw/issues/5401)
- 👍 0 · 💬 3 条评论
- **根因**：`DataContent` type=`"data"` 在渲染组件中无对应处理器。已有 PR **#5495** 在修复 streaming 协议对齐。

**#5264** — [群聊消息回复错误发送到私聊](https://github.com/agentscope-ai/QwenPaw/issues/5264)
- 👍 0 · 💬 5 条评论 · 已关闭
- 飞书 channel 的 session 路由 bug，已在近期关闭。

### 🔥 最值得关注的 PR

**PR #5321** — [scroll context manager](https://github.com/agentscope-ai/QwenPaw/pull/5321)
- 首次贡献者 · Under Review · 💬 正在评审
- 实现基于 SQLite 的持久化对话存储 + REPL 召回，作为 native compression 之外的新路径。架构影响较大，值得重点 review。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重级 | Issue | 描述 | Fix PR |
|:---:|---|---|:---:|
| 🔴 高 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 大工具调用历史导致前端崩溃（`type: "data"` 未处理） | [#5495](https://github.com/agentscope-ai/QwenPaw/pull/5495) |
| 🔴 高 | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Python `pip` 安装后启动直接报 Internal Server Error | — |
| 🔴 高 | [#5497](https://github.com/agentscope-ai/QwenPaw/issues/5497) | 内网 Windows 安装后空白页面，无报错 | — |
| 🟠 中 | [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | 长消息 Markdown 排版错乱 | — |
| 🟠 中 | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | >500KB 会话文件打开白屏 | — |
| 🟠 中 | [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | 自定义 OpenAI provider 不触发 function calling | — |
| 🟠 中 | [#5456](https://github.com/agentscope-ai/QwenPaw/issues/5456) | Channel 请求中 agent 身份错误（非 default agent 时） | — |
| 🟠 中 | [#5472](https://github.com/agentscope-ai/QwenPaw/issues/5472) | GLM 系列模型 `json_schema_converter.cc` schema 编译失败 | [#5496](https://github.com/agentscope-ai/QwenPaw/pull/5496) |
| 🟡 低 | [#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441) | 刚启动即占用 1.4GB 内存 — 已关闭但关注度高 | [#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441) |
| 🟡 低 | [#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373) | Shell 命令特殊字符解析失败 — 已关闭 | — |
| 🟡 低 | [#5474](https://github.com/agentscope-ai/QwenPaw/issues/5474) | Skill ZIP 上传 YAML 报错被静默吞掉 | — |
| 🟡 低 | [#5358](https://github.com/agentscope-ai/QwenPaw/issues/5358) | 切换会话偶发 `TypeError: Cannot read properties of null` — 已关闭 | — |

**健康度评估：** 6 🔴高 + 6 🟠中，其中 3 个 🔴高 尚无 fix PR。前端稳定性是最大的系统性风险。

---

## 6. 功能请求与路线图信号

### 新用户功能需求

| Issue | 描述 | 路线图信号 |
|---|---|---|
| [#5427](https://github.com/agentscope-ai/QwenPaw/issues/5427) | **Kimi Coding Plan Models**：当前 provider 仅支持 OpenAI 兼容，不兼容 Kimi Anthropic 端点 | 🔴 高优先级 — 模型生态扩展 |
| [#5489](https://github.com/agentscope-ai/QwenPaw/issues/5489) | **OpenAI response-format 消息流**支持 | 🟠 中 — 与 #5345 共同指向 OpenAI 兼容性补全 |
| [#5231](https://github.com/agentscope-ai/QwenPaw/issues/5231) | **MCP 工具名显示优化** + 文件卡片默认展开 | 🟠 中 — 体验打磨 |
| [#5497](https://github.com/agentscope-ai/QwenPaw/issues/5497) | **内网部署**空白页面问题 | 🔴 高 — 离线/企业场景刚需 |
| [#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441) | **内存占用优化**（启动 1.4GB） | 🟠 中 — 长期性能健康 |
| [#5484](https://github.com/agentscope-ai/QwenPaw/issues/5484) | **通过 pip 安装 plugins** — 已有 PR #5492 | 🟠 中 |

**路线图判断**：
- **下一版本高概率包含**：GLM schema 修复 (#5496) (#5486)、DashScope 兼容 (#5491)、token UI 恢复 (#5493)
- **可能纳入 2.0 正式版**：scroll context manager (#5321)、pip 插件安装 (#5492)、per-message 时间戳 (#5499)
- **需持续跟踪**：自定义 provider function calling (#5345)、内网部署 (#5497)

---

## 7. 用户反馈摘要

### 正面信号
- **first-time-contributor PR 活跃**：PR #5321（scroll context）、#5492（pip 插件）、#5210（cron update）均来自首次贡献者，社区生态健康。
- Bug 报告质量较高：多数用户提供了日志、版本号、Step-by-step 复现路径（如 #5264、#5480、#5472）。

### 核心痛点

| 痛点 | 涉及 Issue | 使用场景 |
|---|---|---|
| **前端不堪重负** | #5401, #5479, #5480, #5358 | 重度用户长时间使用后累积大量历史 token，Console 白屏/崩溃/排版本错乱 |
| **企业/内网部署困难** | #5497, #5015 (Tauri 卡顿) | Windows 用户对安装流畅度和离线可用性的期望较高 |
| **模型兼容性断层** | #5345, #5472, #5427 | 用户不仅使用通义/DeepSeek，对 Kimi、GLM 等第三方模型需求强烈；当前 OpenAI 兼容层有功能缺失 |
| **内存占用偏高** | #5441 (1.4GB 启动) | 独立开发者希望在笔记本上本地运行 |
| **Skill/ZIP 上传报错静默** | #5474 | 新手上传 Skill 时缺乏明确错误指引 |
| **Tauri 下 Python 路径丢失** | #5317 | CHANGELOG 级别的跨平台体验问题 |

---

## 8. 待处理积压

需要维护者优先关注：

| Issue / PR | 等待时长 | 风险 |
|---|---|---|
| [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) — pip 安装后 Internal Server Error | 4 天 | 🔴 影响所有新用户首次体验 |
| [#5497](https://github.com/agentscope-ai/QwenPaw/issues/5497) — 内网白屏 | 1 天 | 🔴 阻止企业用户部署 |
| [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) — 自定义 provider function calling | 5 天 | 🔴 影响整个 OpenAI 兼容生态 |
| [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) — 长消息排版错乱 | 1 天 | 🟠 影响所有 Console 用户 |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) — >500KB 文件白屏 | 1 天 | 🟠 重度用户阻塞 |
| [#5456](https://github.com/agentscope-ai/QwenPaw/issues/5456) — Channel agent 身份错误 | 2 天 | 🟠 2.0 beta 路由正确性 |
| **PR #5321** — scroll context manager | 6 天审稿中 | Under Review 状态需尽快推进决策 |
| **PR #4669** — Tauri auto updater | 31 天 | 长期未合入，可能需要 rebase |
| **PR #5210** — cron update 命令 | 10 天审稿中 | Closes #4939，关联用户需求明确 |
| **PR #5213** — MCP access policy layout | 9 天 | UI 修复，可增加 review 资源 |

---

### 日报总结

CoPaw 项目整体处于 **2.0 迁移收尾 + 体验打磨并行** 阶段。PR 吞吐量健康（50 条/日），社区贡献者活跃。核心风险集中在 **前端稳定性**（5+ 渲染相关 bug 同时开放）和 **企业部署**（内网白屏）。建议维护者本周优先修复 #5379（安装报错）和推动 #5495（streaming 渲染）的 review 合入，同时给 #5345（自定义 provider function calling）指定 owner。

---

*数据来源：agentscope-ai/QwenPaw · 日报生成时间：2026-06-25*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-06-25

---

## 1. 今日速览

ZeroClaw 在过去 24 小时内保持了极高的开发活跃度，共录得 **50 条 Issue 更新**（新开/活跃 44 条，关闭 6 条）和 **50 条 PR 更新**（待合并 46 条，已合并/关闭 4 条）。项目当前无新版本发布，但多个里程碑级功能（SOP 审批平面、WASM 插件宿主、网关认证加固、供应链签名等）正在密集推进中，代码库处于 v0.8.3 冲刺和 v0.9.0 功能规划的关键交汇期。社区参与度极高，安全、架构、多租户相关议题讨论深入。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

**已合并/关闭的关键 PR：**

| PR | 用途 | 意义 |
|---|---|---|
| [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) [CLOSED] | 将 `mcp_bundles` 实际接入 agent loop，修复"解析但不执行"的静默失效 | 修复了 Issue [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) 中描述的安全隐患——MCP 服务器隔离从 Schema-only 升级为运行时强制，是多租户和最小权限架构的关键一步 |
| [#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075) [CLOSED] | 记录 Zerocode 在 macOS 下与全局快捷键冲突的问题 | 已归档为已知问题，为后续修复提供依据 |
| [#8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) [CLOSED] | 建议在 quickstart 中自动将 risk profile 设为 yolo | 改善新用户体验，已接受 |
| [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) [CLOSED] | Matrix 频道下 deferred image 丢失可重新加载引用 | 工作流阻断级 bug，已修复（S1 级别） |

**项目整体进度：** MCP 运行时隔离的落地标志着多租户安全架构从设计进入实施阶段；SOP 审批平面（[#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304)）作为带外审批体系的 EPIC C，正在将工具调用安全审批从内嵌式转为独立平面，是构建企业级零信任 agent 基础设施的核心演进。

---

## 4. 社区热点

以下 Issues 因评论数和讨论深度成为今日焦点：

- **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** — Per-sender RBAC for multi-tenant agent deployments（9 条评论）
  核心诉求：单一 ZeroClaw 实例上，不同用户类别（客户、运维、开发者）需要隔离的工作空间、工具集、速率限制和系统提示。这反映了企业级多租户部署的强烈需求，可能与正在推进的 OIDC 认证（[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)）和 SOP 审批平面形成互补。

- **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — OIDC Authentication Provider support（6 条评论，P1，v0.9.0 tracking）
  作为认证可插拔化的总纲 RFC，OIDC 支持和本地用户/密码登录（[#8076](https://github.com/zeroclaw-labs/zeroclaw/pull/8076)）正在并行推进，目标是覆盖有 IdP 和无 IdP 两种部署场景。

- **[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** — Supply chain signing RFC（5 条评论，风险：high）
  硬件 PGP、密封构建、SLSA 溯源——社区对供应链安全的关注度极高，与 [#8058](https://github.com/zeroclaw-labs/zeroclaw/pull/8058)（cosign signing PR，3 条评论）和 [#8129](https://github.com/zeroclaw-labs/zeroclaw/pull/8129)（cargo-audit CI gate）构成完整的供应链安全推进链路。

- **👍 最多：** [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（Goal mode RFC，1 个赞）
  提出了一类全新的"有界自主工作模式"，让 agent 以持久化方式追踪并推进用户目标直至完成或预算耗尽。这代表了用户对从"单轮交互"到"持久化自主代理"的范式升级需求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| **S2** | [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | mcp_bundles 配置被解析但在运行时未执行，per-agent MCP 隔离静默失效 | ✅ 已合并 [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) |
| **S1** | [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151) | Matrix 频道 deferred image 丢失引用，bot 否认见过图片 | ✅ 已关闭（修复已含于合并 PR） |
| **S0** | [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) | 不支持 OpenAI 兼容端点的自签名证书/自定义 CA | ⛔ wontfix（已知决策，标记为不接受） |
| **S2** | [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) | 委托 Codex/OAuth 子代理仍失败，resolve_brain 泄露 coordinator API key | 🔴 无 fix PR，状态 accepted/in-progress |
| **P1** | [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) | /model --agent 缺少 per-sender 授权检查，任何人都可修改全局模型 | 🔴 无 fix PR |
| **P1** | [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | daemon heartbeat 模式下 stdio MCP 子进程泄漏（每 tick 累计孤儿进程） | 🔴 无 fix PR，已开放 2 个月 |

**关注点：** [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) 的 stdio 进程泄漏问题在默认配置下即可触发，影响所有启用 heartbeat 并使用 stdio MCP 的用户，应优先修复。

---

## 6. 功能请求与路线图信号

**高概率进入下一版本的候选功能：**

| 方向 | 关联 Issue/PR | 信号强度 |
|---|---|---|
| **SOP 带外审批平面** | [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) | ⭐⭐⭐ — 已有 L-size PR，EPIC C 实施中 |
| **WASM 组件模型插件宿主** | [#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) + [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) | ⭐⭐⭐ — PR 已开放，替换 Extism 路线已确定 |
| **OIDC 认证 + 本地用户/密码** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) + [#8076](https://github.com/zeroclaw-labs/zeroclaw/pull/8076) | ⭐⭐⭐ — v0.9.0 tracking，多个子 PR 在途 |
| **Session TTL 自动截断** | [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) | ⭐⭐ — 配置已存在，仅缺实现 |
| **供应链签名（cosign + SLSA）** | [#8058](https://github.com/zeroclaw-labs/zeroclaw/pull/8058) + [#8129](https://github.com/zeroclaw-labs/zeroclaw/pull/8129) | ⭐⭐ — 两个 PR 并行推进 |
| **OpenRouter 模型回退列表** | [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) | ⭐⭐ — 功能范围明确，待 maintainer review |
| **Telegram Webhook 模式** | [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | ⭐ — 有需求但尚在 RFC 阶段 |
| **Goal Mode（有界自主会话）** | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 🆕 — 刚提出，有潜力成为下一大版本核心特性 |

---

## 7. 用户反馈摘要

从 Issues 文本和标签中提炼的真实痛点和场景：

**👍 满意的方向：**
- **多租户/企业需求社区** 对 RBAC（[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)）、per-agent 环境变量（[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)）、per-sender 授权（[#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044)）有系统性诉求，表明 ZeroClaw 的企业级定位获得认可。
- **MCP 生态快速扩展**，从 bundle 隔离（[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)）到注册表搜索安装（[#8264](https://github.com/zeroclaw-labs/zeroclaw/pull/8264)）再到 prompt 触发安装建议（[#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)），user experience 在持续打磨。

**⚠️ 核心痛点：**
- **默认配置存在泄漏风险**：[#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) 的 stdio 子进程泄漏在默认 heartbeat 配置下即可积累（~48 orphans/天），用户可能在不知情的情况下产生大量僵尸进程。
- **静默失效的安全隔离**：[#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) 的 mcp_bundles 配置曾在长时间内"看起来正常"但实际不生效，用户信任被辜负。
- **认证体系分散**：[#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) 显示部分用户需要自签名证书支持被标记为 wontfix，可能导致该群体运维负担加重。
- **macOS 用户体验**：多个 Issue（[#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)、[#8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075)）反映 Zerocode TUI 在 macOS 快捷键冲突、键位绑定不可达等问题，影响开发者日常使用。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获得足够关注，建议维护者评估优先级：

| Issue/PR | 类型 | 活跃时长 | 风险 |
|---|---|---|---|
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) — stdio MCP 进程泄漏 | Bug (P1) | ~2 个月 | 生产环境默认配置下自动触发，应紧急修复或默认禁用 heartbeat + stdio MCP 组合 |
| [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) — delegate 子代理 OAuth 密钥泄露 | Bug (P1) | ~10 天 | 涉及凭证安全，已有 accepted 标记但无 fix PR |
| [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) — /model --agent 无授权 | Bug (P1) | ~5 天 | 信道级安全缺陷 |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) — Skills + WASM Tools 混合插件 | Enhancement | ~2 个月 | 多篇关联 Issue 等待，markdown skill 交付被列为前置依赖 |
| [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) — Extism 替换为 wasmtime 组件模型 | RFC/架构 | ~1 个月 | [#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) PR 已开放但未合并，路线确定后应加速推进 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — Per-sender RBAC 多租户 | Enhancement | ~2 个月 | 企业级需求核心，目前依赖 OIDC（v0.9.0）作为前置条件 |

---

*数据来源：github.com/zeroclaw-labs/zeroclaw | 报告生成时间：2026-06-25*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*