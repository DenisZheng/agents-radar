# OpenClaw 生态日报 2026-06-30

> Issues: 375 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-30 00:38 UTC

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

# OpenClaw 项目日报 — 2026-06-30

---

## 1. 今日速览

OpenClaw 今日保持高活跃度：**375 条 Issue 更新**（新开/活跃 304、关闭 71）、**500 条 PR 更新**（待合并 448、已合并/关闭 52），无新版本发布。社区讨论热度显著上升，多条长期运行的 P0/P1 Issue 在今日获得大量新评论。PR 侧呈现大规模代码加固（hardening）趋势，尤其在工具 schema 安全、渠道消息投递、代理配置等领域集中出现了一批中大型修复。整体项目健康度良好，维护节奏紧凑，但积压的 P1 Issue 数量仍然偏高。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动了以下方向：

| PR | 状态 | 影响 |
|---|---|---|
| [#97953](https://github.com/openclaw/openclaw/pull/97953) | 已合并 | ACP 运行时控制新增 owner 权限校验，非 owner 渠道发送者无法再调用管理接口 |
| [#97875](https://github.com/openclaw/openclaw/pull/97875) | 已合并 | Telegram 修复 durable reasoning 回复丢失问题，确保 reasoning 消息通过共享回复分发器正确投递 |
| [#95051](https://github.com/openclaw/openclaw/pull/95051) | 已合并 | Telegram durable reasoning payload 通过共享回复分发器，修复抑制逻辑 |
| [#91592](https://github.com/openclaw/openclaw/issues/91592) 关联修复 | 已关闭 | memory_search 在 `--force` rebuild 后的 scopeHash 不匹配问题已解决 |
| [#88548](https://github.com/openclaw/openclaw/issues/88548) 关联修复 | 已关闭 | GitHub Copilot 静态默认模型列表覆盖实时 entitlement 发现的问题已修复 |
| [#95500](https://github.com/openclaw/openclaw/issues/95500) 关联修复 | 已关闭 | 插件模型 provider（opencode-go）在 isolated cron sessions 中无法解析的问题已解决 |
| [#16896](https://github.com/openclaw/openclaw/issues/16896) 关联修复 | 已关闭 | Dashboard webchat 右键回复功能已实现 |

**重点待合并 PR：**

- **[#96625](https://github.com/openclaw/openclaw/pull/96625)** — 将 session/transcript 存储切换为 SQLite（XL 规模），这是 PR #88838 的延续，将 per-agent SQLite 设为规范运行时存储，legacy sessions.json 和 JSONL 文件降级为导入源。影响面极广，需谨慎合并。
- **[#96106](https://github.com/openclaw/openclaw/pull/96106)** — 在 Discord 上暴露 reasoning 和 pre-tool commentary，默认关闭、显式 opt-in，已回应 ClawSweeper 审查意见。
- **[#97713](https://github.com/openclaw/openclaw/pull/97713)** — 修复全局 undici 分发器的 NO_PROXY 匹配逻辑，支持前导点子网模式、CIDR 等场景。

---

## 4. 社区热点

### 🔥 评论量最高的 Issues

1. **[#75](https://github.com/openclaw/openclaw/issues/75)** — Linux/Windows Clawdbot 桌面客户端（110 评论，👍81）
   - 自 2026-01-01 创建至今仍未关闭，是社区呼声最高的功能请求之一。macOS、iOS、Android 已有客户端，Linux/Windows 缺失。今日仍有活跃讨论。

2. **[#86538](https://github.com/openclaw/openclaw/issues/86538)** — Session write-lock 超时阻塞子代理投递通道（18 评论）
   - Session JSONL 写入锁超时导致主通道、cron 嵌套通道和子代理通道全部阻塞，错误信息不充分，难以定位根因。标记为 diamond lobster 评级。

3. **[#80319](https://github.com/openclaw/openclaw/issues/80319)** — QA 工具默认套件混淆 Codex 原生工具与 OpenClaw 动态工具（17 评论）
   - 经维护者澄清为 QA harness/mock-provider 问题，非 Codex 运行时大规模工具丢失。

4. **[#74586](https://github.com/openclaw/openclaw/issues/74586)** — AM embedded run 中止 memory_search 工具调用（11 评论）
   - active-memory 插件在 embedded run 模式下，memory_search 工具调用被中止并误分类为超时，尽管模型已完成处理。

5. **[#80520](https://github.com/openclaw/openclaw/issues/80520)** — Telegram 消息静默丢弃（11 评论）
   - Gateway 接收并处理消息，但无 sendMessage API 调用日志，用户始终未收到回复。

### 📌 最受关注的新 Issue

- **[#97877](https://github.com/openclaw/openclaw/issues/97877)** — empty-error-retry 被 `hadPotentialSideEffects` 阻塞（4 评论，今日新建）
  - 只要 session 中执行过工具调用，瞬态 5xx 错误的重试路径就被静默阻断，用户无感知。标记为 diamond lobster。

---

## 5. Bug 与稳定性

### 🔴 P0 — 需立即关注

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#97877](https://github.com/openclaw/openclaw/issues/97877) | empty-error-retry 被 hadPotentialSideEffects 阻断，静默终端故障 | OPEN | ❌ |
| [#97961](https://github.com/openclaw/openclaw/pull/97961) | iMessage 群组操作未校验授权 | 修复中 | ✅ PR 已开 |
| [#97953](https://github.com/openclaw/openclaw/pull/97953) | ACP 运行时控制缺少 owner 校验 | 已修复 | ✅ 已合并 |

### 🟠 P1 — 高优先级

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock 超时阻塞子代理投递通道 | OPEN | ❌ |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM embedded run 中止 memory_search 工具调用 | OPEN | ❌ |
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | Telegram 消息静默丢弃 | OPEN | ❌ |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron 在 model-call-started 阶段一致失败 | OPEN | ❌ |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | Isolated cron agentTurn 因 setup timeout 失败 | OPEN | ❌ |
| [#94518](https://github.com/openclaw/openclaw/issues/94518) | DeepSeek 6.x 升级后缓存命中率 <10% | OPEN | ❌ |
| [#75782](https://github.com/openclaw/openclaw/issues/75782) | Embedded-run auth 阶段始终 10–15s 阻塞 | OPEN | ❌ |
| [#77642](https://github.com/openclaw/openclaw/issues/77642) | lossless-claw 5.3 回归：重复答案 + 合成错误 | OPEN | ❌ |
| [#79752](https://github.com/openclaw/openclaw/issues/79752) | Node v26 macOS 下 gzip 未解压导致 JSON 解析失败 | OPEN | ❌ |
| [#81484](https://github.com/openclaw/openclaw/issues/81484) | Discord guild 回复回归：畸形 payload + 重复外发循环 | OPEN | ❌ |
| [#81567](https://github.com/openclaw/openclaw/issues/81567) | GPT-4o agent session 单次响应后退出 | OPEN | ❌ |
| [#81490](https://github.com/openclaw/openclaw/issues/81490) | 子代理完成后新建 run 而非恢复 yielded session | OPEN | ❌ |
| [#82250](https://github.com/openclaw/openclaw/issues/82250) | macOS LaunchAgent KeepAlive=true 在正常退出后仍重启 | OPEN | ❌ |
| [#82070](https://github.com/openclaw/openclaw/issues/82070) | CLI 命令冷启动回归至 ~14s | OPEN | ❌ |
| [#80700](https://github.com/openclaw/openclaw/issues/80700) | 后续 agent 在 billing/quota 拒绝时静默丢弃消息 | OPEN | ❌ |
| [#95121](https://github.com/openclaw/openclaw/issues/95121) | Codex OAuth 路径 28s 延迟（2026.6.8 回归） | OPEN | ❌ |

### 🟡 P2 — 中优先级（节选）

| Issue | 标题 | 状态 |
|---|---|---|
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | QA 工具默认套件混淆 Codex 与 OpenClaw 工具 | OPEN |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | Telegram bot-to-bot / guest-bot 模式支持 | OPEN |
| [#81917](https://github.com/openclaw/openclaw/issues/81917) | Dashboard 在 Linux/KDE 上挂起 | OPEN |
| [#81607](https://github.com/openclaw/openclaw/issues/81607) | MiniMax "No text output returned" thinking+text | OPEN |
| [#82002](https://github.com/openclaw/openclaw/issues/82002) | Telegram 群组回复丢失 reply context | OPEN |
| [#80040](https://github.com/openclaw/openclaw/issues/80040) | OAuth 失效级联故障 | OPEN |
| [#80607](https://github.com/openclaw/openclaw/issues/80607) | 非默认多代理 10-17s 延迟 | OPEN |
| [#82020](https://github.com/openclaw/openclaw/issues/82020) | 自定义 provider 与内置 provider 共享 baseUrl 仍故障 | OPEN |

### 稳定性趋势

- **回归问题集中**：GPT-4o 会话退出（[#81567](https://github.com/openclaw/openclaw/issues/81567)）、Discord guild 回复（[#81484](https://github.com/openclaw/openclaw/issues/81484)）、lossless-claw 重复答案（[#77642](https://github.com/openclaw/openclaw/issues/77642)）、CLI 冷启动（[#82070](https://github.com/openclaw/openclaw/issues/82070)）等多条回归 Issue 表明近几个版本的发布质量需要关注。
- **Cron 子系统脆弱**：isolated cron 的 setup timeout、LLM request failed、wake scope 等问题持续存在，是用户可感知的高频故障点。
- **渠道层消息投递**：Telegram 静默丢弃、Discord guild 回复故障、iMessage 群组操作未授权等多条 Issue 指向渠道层消息投递链路需要系统性加固。

---

## 6. 功能请求与路线图信号

### 高置信度（已有活跃 PR 推进）

| 功能 | 关联 PR/Issue | 信号强度 |
|---|---|---|
| Telegram bot-to-bot 模式 | [#97806](https://github.com/openclaw/openclaw/pull/97806) + [#79077](https://github.com/openclaw/openclaw/issues/79077) | 🟢 强 |
| Session/Transcript 存储迁移至 SQLite | [#96625](https://github.com/openclaw/openclaw/pull/96625) | 🟢 强 |
| Discord reasoning/thinking 暴露 | [#96106](https://github.com/openclaw/openclaw/pull/96106) | 🟢 强 |
| Signal 原生回复引用 | [#95718](https://github.com/openclaw/openclaw/pull/95718) | 🟡 中 |
| Telegram 入站去抖（forwarded bursts） | [#97960](https://github.com/openclaw/openclaw/pull/97960) | 🟡 中 |
| 工具 schema 安全加固系列 | [#89550](https://github.com/openclaw/openclaw/pull/89550)、[#89539](https://github.com/openclaw/openclaw/pull/89539)、[#89529](https://github.com/openclaw/openclaw/pull/89529)、[#89513](https://github.com/openclaw/openclaw/pull/89513)、[#89504](https://github.com/openclaw/openclaw/pull/89504)、[#89499](https://github.com/openclaw/openclaw/pull/89499)、[#89493](https://github.com/openclaw/openclaw/pull/89493) | 🟢 强（批量推进） |
| Web UI 友好会话标识符 | [#96998](https://github.com/openclaw/openclaw/pull/96998) | 🟡 中 |
| 后台任务完成事件投递 | [#97963](https://github.com/openclaw/openclaw/pull/97963) | 🟡 中 |

### 中置信度（有 Issue 但无 PR）

| 功能 | 关联 Issue | 信号强度 |
|---|---|---|
| Linux/Windows 桌面客户端 | [#75](https://github.com/openclaw/openclaw/issues/75) | 🟡 中（社区呼声高但无官方 PR） |
| Skill 作者自定义 setup hook | [#80213](https://github.com/openclaw/openclaw/issues/80213) | 🟡 中 |
| 插件 SDK 稳定接口暴露 | [#81913](https://github.com/openclaw/openclaw/issues/81913) | 🟡 中 |
| 多 provider/model 引导配置 | [#81960](https://github.com/openclaw/openclaw/issues/81960) | 🟠 低-中 |
| 斜杠命令 i18n | [#79458](https://github.com/openclaw/openclaw/issues/79458) | 🟠 低 |
| 预路由入站消息 hook | [#81061](https://github.com/openclaw/openclaw/issues/81061) | 🟡 中 |

### 路线图信号总结

当前项目重心明显集中在 **三个方向**：
1. **安全加固**：工具 schema 隔离、owner 权限校验、代理 NO_PROXY 修复、exec 脚本预检等批量 PR。
2. **渠道层可靠性**：Telegram/Discord/iMessage/Signal 的消息投递、reasoning 暴露、群组操作等。
3. **存储层现代化**：SQLite 迁移是最大的架构变更，合并后将简化 session 管理和运维。

---

## 7. 用户反馈摘要

### 😤 核心痛点

1. **消息静默丢失**（[#80520](https://github.com/openclaw/openclaw/issues/80520)、[#80700](https://github.com/openclaw/openclaw/issues/80700)、[#80918](https://github.com/openclaw/openclaw/issues/80918)）
   - 用户发送消息后无回复、无错误提示，是"最严重的用户体验问题"。多个渠道均有报告，尤其是 Telegram 和 Discord。

2. **Cron 任务不可靠**（[#91363](https://github.com/openclaw/openclaw/issues/91363)、[#82662](https://github.com/openclaw/openclaw/issues/82662)、[#81514](https://github.com/openclaw/openclaw/issues/81514)）
   - Isolated cron 在 setup 阶段即失败，不调用 LLM；status 字段非确定性；用户无法依赖定时任务。

3. **性能退化**（[#82070](https://github.com/openclaw/openclaw/issues/82070

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**数据基准日：2026-06-30** | **覆盖项目：11 个**

---

## 1. 生态全景

当前个人 AI 助手开源生态正处于**从功能完备走向生产就绪的关键转折期**。渠道层（Telegram、Discord、飞书、Slack 等）已成为所有项目的标配战场，消息投递可靠性是用户感知最强的痛点。安全加固在 2026 年 H1 末集中爆发——沙箱逃逸、无界响应体缓冲、owner 权限校验等议题同时出现在多个项目的 P0/P1 backlog 中，标志着社区对"agent 上生产"的安全预期正在快速提升。架构层面，SQLite 替代 JSON 文件存储、WASM 插件运行时、A2A 多 Agent 协作三条主线并行推进，技术债务清理与下一代架构升级同步进行。整体生态呈现**高活跃度、高并发贡献、但合并吞吐普遍不足**的特征，PR 积压成为制约交付节奏的共性瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 待合并 PR | Release | 健康度 | 阶段判断 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 375（活跃 304） | 500（待合并 448） | 448 | 无 | 🟡 积压严重 | 大规模加固期 |
| **Hermes Agent** | 50（活跃 47） | 50（待合并 43） | 43 | 无 | 🟡 安全审计浪潮 | 快速迭代 + 安全加固 |
| **IronClaw** | 14（活跃 10） | 50（待合并 30） | 30 | 无 | 🟢 良好 | WebUI v2 收尾期 |
| **ZeroClaw** | 50（活跃 43） | 50（待合并 40） | 40 | 无 | 🟡 积压 + 回归 | v0.8.3 密集开发 |
| **CoPaw (QwenPaw)** | 29（活跃 20） | 50（待合并 31） | 31 | 无（v2.0.0-beta.1 验证中） | 🟡 迁移收尾 | Runtime v2 迁移修复 |
| **NanoBot** | 7 | 33（待合并 23） | 23 | 无 | 🟢 健康 | 功能扩张期 |
| **NanoClaw** | 0 | 7（待合并 5） | 5 | 无 | 🟢 良好 | 多渠道扩张 |
| **NullClaw** | 0 | 4（待合并 3） | 3 | 无 | 🟢 良好 | 体验打磨 |
| **PicoClaw** | 3 | 3（待合并 3） | 3 | 无 | 🟡 stale 偏多 | 缓慢迭代 |
| **LobsterAI** | 8（活跃 8） | 40（已合并 39） | 1 | v2026.6.29 ✅ | 🟢 最佳 | 稳定发布节奏 |
| **TinyClaw** | — | — | — | — | ⚪ 无活动 | — |
| **Moltis** | — | — | — | — | ⚪ 无活动 | — |
| **ZeptoClaw** | — | — | — | — | ⚪ 无活动 | — |

**关键发现：**
- **LobsterAI 是唯一有版本发布且 PR 合并效率最高的项目**（39/40 已合并），显示其维护团队执行力最强
- **OpenClaw 体量远超同类**（PR 更新 500 条 vs 第二名 50 条），但待合并 PR 448 个，积压风险最大
- **TinyClaw、Moltis、ZeptoClaw 三项目过去 24 小时零活动**，可能处于停滞状态

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 是生态中**无可争议的核心参照项目**。其今日 PR 更新量（500 条）是其他所有活跃项目之和（约 250 条）的两倍，Issue 更新量（375 条）同样断层领先。Issue #75（Linux/Windows 桌面客户端）单条获得 110 条评论、81 个赞，这种社区互动密度在其他项目中未见。

### 3.2 技术路线差异

| 维度 | OpenClaw | 同类项目 |
|---|---|---|
| **存储层** | 正在从 JSON/JSONL 迁移至 SQLite（PR #96625，影响面极广） | NanoBot、Hermes 已用 SQLite；IronClaw 用 LibSQL |
| **安全模型** | 工具 schema 隔离 + owner 权限校验 + exec 预检，批量推进 | Hermes 经历无界响应体审计浪潮；NanoClaw 修复符号链接逃逸 |
| **渠道覆盖** | Telegram/Discord/iMessage/Signal/ACP，最全面 | ZeroClaw 推进 Inkbox（email/SMS/voice）；NanoClaw 刚加 Discord |
| **多 Agent** | ACP 运行时 + 子代理 + cron 嵌套通道 | NanoBot 推进 A2A 跨 Agent 委派；Hermes 有通用 ACP 客户端诉求 |
| **架构复杂度** | 最高——session write-lock、embedded run、isolated cron 等多层抽象 | NullClaw、PicoClaw 走极简路线 |

### 3.3 社区规模对比

OpenClaw 的 Issue 编号已达 97xxx，远超 Hermes（55xxx）、ZeroClaw（85xxx 但含 PR）、IronClaw（54xx）。其 P1 Issue 积压 16 条，反映**社区期望与维护资源之间的张力**——作为生态标杆，任何功能缺失都会被放大为高赞 Issue。

---

## 4. 共同关注的技术方向

以下方向在**3 个及以上项目**中同时出现，代表生态级共识：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **渠道消息投递可靠性** | OpenClaw、Hermes、CoPaw、ZeroClaw、IronClaw | Telegram 静默丢弃（OpenClaw #80520）、Discord guild 回复回归（OpenClaw #81484）、飞书审批通知丢失（CoPaw #5601）、钉钉卡片流式效率低（CoPaw #5603）——**消息"发了但对方没收到"是跨项目的第一大用户体验痛点** |
| **安全加固（沙箱/缓冲/权限）** | OpenClaw、NanoBot、Hermes、NanoClaw | 工具 schema 安全（OpenClaw 批量 7+ PR）、shell guard 沙箱逃逸（NanoBot #4592）、无界响应体缓冲（Hermes 6+ 条）、容器符号链接逃逸（NanoClaw #2880）、ACP owner 校验（OpenClaw #97953）——**2026 年 H2 的安全基线正在被集体拉高** |
| **Cron/定时任务可靠性** | OpenClaw、LobsterAI、ZeroClaw | Isolated cron setup timeout（OpenClaw #82662）、cron follow-up 历史丢失（LobsterAI #2220）、cron 投递字面量 NO_REPLY（ZeroClaw #2128）——**定时任务是 agent 从"对话工具"走向"自主执行体"的关键基础设施，但目前普遍脆弱** |
| **多 Agent / A2A 协作** | OpenClaw、NanoBot、Hermes、ZeroClaw | ACP 运行时（OpenClaw）、A2A 跨 Agent 委派（NanoBot #4571）、通用 ACP 编排器（Hermes #5257）、A2A agent 发现协议（ZeroClaw #7218）——**多 Agent 协作是 2026 年差异化竞争的核心赛道** |
| **成本控制与可观测性** | NanoBot、PicoClaw、CoPaw、OpenClaw | 上下文压缩（NanoBot #4581）、Bedrock 提示缓存降本 90%（PicoClaw #3163）、DeepSeek 前缀缓存命中率（CoPaw #3891）、token 用量遥测（PicoClaw #3156）——**LLM 调用成本已成为生产部署的硬约束** |
| **存储层现代化** | OpenClaw、Hermes、IronClaw | SQLite 迁移（OpenClaw #96625）、SQLite WAL 兼容性（Hermes #55305）、LibSQL 矩阵测试（IronClaw #5392）——**JSON 文件存储正在被集体淘汰** |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 | 差异化壁垒 |
|---|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 平台 | 技术通吃型用户、自托管爱好者 | 渠道最多、ACP 运行时、cron 嵌套、子代理 | 生态规模 + 渠道覆盖广度 |
| **Hermes Agent** | 多 Agent 编排 + 桌面体验 | 研究者、多 agent 工作流用户 | Relay 平台抽象层、Desktop GUI、ACP server/client 双模 | 桌面端体验 + Nous Research 研究背书 |
| **IronClaw** | 多用户 RBAC 企业平台 | 小团队、企业用户 | Reborn WebUI v2、LibSQL、capability policy、RBAC | 多用户隔离 + 企业级权限模型 |
| **ZeroClaw** | 插件化 + 程序化记忆 | 开发者、高级用户 | WASM 插件运行时、SOP 引擎、Inkbox 原生频道 | WASM 沙箱 + SOP 程序化记忆 |
| **CoPaw (QwenPaw)** | Qwen 生态原生 Agent | 阿里云/Qwen 用户、国内企业 | Runtime v2、Tool Guard、File Guard、沙箱隔离 | 国产模型深度集成 + 安全沙箱 |
| **LobsterAI** | 商业级集成 IDE | 开发者、网易生态用户 | Electron 桌面、Cowork UI、OpenClaw 集成 | 产品化程度最高、发布节奏最稳定 |
| **NanoBot** | 轻量 + 多 Agent 协作 | 成本敏感用户、研究者 | Python 为主、A2A 委派、上下文压缩 | 轻量化 + A2A 原生支持 |
| **NanoClaw** | 多渠道 + 语音交互 | 移动端用户、Slack 用户 | 语音通知 v3 意图分流、容器化 Agent | 语音交互精细化 + 容器隔离 |
| **NullClaw** | 极简 CLI Agent | 终端用户、极简主义者 | REPL 行编辑、流式工具调用、Alpine 容器 | 极简 + 低资源占用 |
| **PicoClaw** | 嵌入式/低成本部署 | 硬件爱好者、边缘场景 | DeltaChat 网关、Bedrock 缓存、token 遥测 | 成本优化 + 非传统消息通道 |

---

## 6. 社区热度与成熟度分层

### 🔥 Tier 1：高活跃 + 高体量（快速迭代期）

| 项目 | 特征 | 风险 |
|---|---|---|
| **OpenClaw** | 日更 500 PR，社区期望极高 | P1 积压 16 条，回归问题集中，合并吞吐不足 |
| **Hermes Agent** | 安全审计浪潮 + 平台抽象重构 | P1 memory 静默挂起 22 天无 fix，fallback chain 双系统 50 天未解决 |
| **ZeroClaw** | v0.8.3 大型功能并行推进 | Kimi-code P1 已持续 81 天，153 commits 回滚恢复 67 天未关闭 |

### 🟢 Tier 2：稳定迭代（质量巩固期）

| 项目 | 特征 | 风险 |
|---|---|---|
| **IronClaw** | WebUI v2 E2E 测试批量迁移，RBAC 设计完成 | Nightly E2E 持续失败 34 天，Google 集成 Bug 集中爆发 |
| **CoPaw** | Runtime v2 迁移收尾，前端测试基建扩建 | v2 迁移后回归明显（卡顿、兼容性断裂） |
| **LobsterAI** | 唯一稳定发版，PR 合并效率最高 | Electron 大版本升级 88 天未决策，4 条 stale Issue 87 天未响应 |

### 🔵 Tier 3：垂直深耕（缓慢迭代期）

| 项目 | 特征 | 风险 |
|---|---|---|
| **NanoBot** | 安全响应及时，A2A 差异化 | PR 积压 33 个，合并节奏偏保守 |
| **NanoClaw** | 语音交互精细化，多渠道扩张 | 体量小，依赖少数贡献者 |
| **NullClaw** | 极简路线清晰 | 社区外部贡献有限 |
| **PicoClaw** | 成本优化 + 非传统通道 | stale 项偏多，维护者响应慢 |

### ⚪ Tier 4：停滞/早期

**TinyClaw、Moltis、ZeptoClaw** 过去 24 小时零活动，需观察是否已实质停滞。

---

## 7. 值得关注的趋势信号

### 趋势 1：渠道层正在经历"从能用到可靠"的质变

**信号**：OpenClaw（Telegram 静默丢弃、Discord guild 回复）、CoPaw（飞书审批丢失、钉钉卡片效率）、Hermes（Telegram ghosting）、ZeroClaw（Telegram 配置失败）——**所有项目的渠道层都在暴露可靠性问题**。

**判断**：2026 年 H2，渠道层将从"接入更多平台"转向"确保消息必达"。建议开发者关注：消息投递确认机制、失败重试策略、渠道特定限流处理。

### 趋势 2：安全从"加分项"变为"准入门槛"

**信号**：OpenClaw 批量 7+ 安全 PR、Hermes 单用户提交 6+ 无界响应体 Issue、NanoBot shell guard 逃逸、NanoClaw 容器符号链接逃逸——**安全审计正在从被动响应转向主动扫描**。

**判断**：生产部署场景下，沙箱隔离、响应体边界检查、owner 权限校验将成为最低要求。零信任架构（每个入口点独立鉴权）正在取代边界防护。

### 趋势 3：多 Agent 协作从概念验证走向协议标准化

**信号**：NanoBot A2A 跨 Agent 委派（#4571）、Hermes 通用 ACP 编排器（#5257，18 赞）、ZeroClaw A2A agent 发现协议 RFC（#7218）、OpenClaw ACP 运行时 owner 校验（#97953）。

**判断**：A2A（Agent-to-Agent）协议将在 2026 年下半年出现事实标准。`/.well-known/agent-card.json` 发现机制、ACP 权限模型、跨委派深度保护等将成为关键设计决策点。

### 趋势 4：成本控制从"压缩 prompt"走向"全链路可观测"

**信号**：NanoBot 上下文压缩 + 命令输出专用压缩器、PicoClaw Bedrock 提示缓存降本 90%、CoPaw DeepSeek 前缀缓存命中率焦虑、OpenClaw token 用量遥测需求。

**判断**：成本优化正从单一技术（压缩）走向全链路：提示缓存 → 上下文策略 → 输出压缩 → 用量遥测 → 模型自动降级。CoPaw 的"模型自动降级"需求（#5572）可能是下一个爆发点。

### 趋势 5：SQLite 替代 JSON 成为存储层共识

**信号**：OpenClaw 大规模 SQLite 迁移（#96625）、Hermes SQLite WAL 兼容性（#55305）、IronClaw LibSQL 矩阵测试（#5392）、NanoBot 已用 SQLite。

**判断**：JSON/JSONL 文件存储在 2026 年底将被主流项目淘汰。SQLite（及 LibSQL）凭借 WAL 并发、单文件部署、SQL 查询能力成为新标准。开发者应提前评估 ORM 选型、migration 策略、多连接 WAL 兼容性。

---

**总结**：个人 AI 助手开源生态正处于"功能竞赛"向"可靠性竞赛"的迁移窗口。OpenClaw 凭借规模和渠道覆盖维持标杆地位，但积压的 P1 Issue 和回归问题正在消耗社区信任。IronClaw 的多用户 RBAC、ZeroClaw 的 WASM 插件运行时、NanoBot 的 A2A 协作代表了三条差异化技术路线。对于技术决策者，**渠道可靠性、安全加固、存储层现代化**是 2026 年 H2 必须投入的基础设施；对于开发者，**多 Agent 协议标准化**和**全链路成本可观测**是最具前瞻性的技术方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-30

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，共处理 7 条 Issue 更新与 33 条 PR 更新，其中 23 个 PR 仍处于待合并状态，显示社区贡献旺盛但合并吞吐存在压力。今日无新版本发布，项目处于密集迭代期。核心工作集中在三大方向：**上下文成本优化**（两项性能 PR 合计减少 token 消耗）、**安全加固**（shell guard 路径提取、MCP 凭证脱敏）、**架构演进**（A2A 多 Agent 协作、出站事件类型化）。同时暴露出一个影响会话持久化的关键 Bug（#4595），已有修复 PR 待审。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共 10 个，以下为重点：

| PR | 状态 | 说明 |
|---|---|---|
| [#4502](https://github.com/HKUDS/nanobot/pull/4502) | CLOSED | 新增 Gateway Webhook 触发器，替换旧内联健康监听器，支持通用及 GitHub Enterprise webhook 路由，含请求/Body 限制与超时控制 |
| [#4596](https://github.com/HKUDS/nanobot/pull/4596) | OPEN（已修复） | 修复 `apply_final_call_ids` 在非文件编辑工具上的 ID 覆盖问题，直接解决 #4595 会话污染 Bug |
| [#4594](https://github.com/HKUDS/nanobot/pull/4594) | OPEN（已修复） | 修复 shell guard 路径提取正则遗漏 `=` 分隔符导致的沙箱逃逸风险（#4592） |
| [#4584](https://github.com/HKUDS/nanobot/pull/4584) | OPEN | MCP 连接日志中 URL 凭证泄露修复 |
| [#4583](https://github.com/HKUDS/nanobot/pull/4583) | OPEN | 配置迁移时 `tools.exec` 为 null 导致 `load_config()` 崩溃的防护 |

**整体推进评估**：项目在安全（3 个修复）、性能（2 个大 PR）、架构（A2A、类型化事件、触发器）三条线同步推进，合并节奏偏保守——33 个活跃 PR 中仅 10 个已关闭，建议关注积压。

---

## 4. 社区热点

### 🔥 Issue [#660](https://github.com/HKUDS/nanobot/issues/660) — "超轻量"定位与 Node.js 依赖矛盾
- **状态**：CLOSED（但仍有 15 条评论、5 👍）
- **作者**：besoeasy
- **核心诉求**：项目自称 ultra-lightweight，但 Dockerfile 同时依赖 Python + Node.js，与定位矛盾。讨论中社区成员对是否应将 Node.js 设为可选依赖、或提供纯 Python 镜像变体分歧明显。
- **信号**：品牌定位与实际交付的落差已引起社区注意，可能影响新用户信任度。

### 🔥 Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419) — 自动推理努力度升级
- **状态**：OPEN（4 条评论）
- **作者**：orrinwitt
- **核心诉求**：多提供商已暴露 `reasoningEffort` 参数，希望 nanobot 支持"默认→升级"的自动切换策略，而非仅手动配置。
- **信号**：推理成本控制是 2026 年 LLM 应用的核心议题，该功能若落地将显著提升竞争力。

### 🔥 PR [#4581](https://github.com/HKUDS/nanobot/pull/4581) + [#4588](https://github.com/HKUDS/nanobot/pull/4588) — 上下文/成本双优化
- **作者**：hamb1y
- **核心诉求**：通过压缩子 Agent 输出、命令输出专用压缩器（JSON/diff/lint/log）减少每轮 token 消耗。
- **信号**：成本敏感用户群体正在增长，这两项 PR 若合并将直接降低运营开支。

### 🔥 PR [#4571](https://github.com/HKUDS/nanobot/pull/4571) — 原生 A2A 跨 Agent 委派
- **作者**：findshan
- **核心诉求**：支持 Supervisor → Researcher → Writer 的多层 Agent 协作，含跨委派深度保护。
- **信号**：多 Agent 协作是开源 AI Agent 项目的差异化战场，该 PR 若完成将使 NanoBot 进入该赛道。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|---|
| 🔴 **高** | [#4595](https://github.com/HKUDS/nanobot/issues/4595) | `apply_final_call_ids` 覆盖非文件编辑工具的 `tool_call.id`，导致持久化会话中 ID 重复，**每次后续请求均受影响**（会话永久污染） | [#4596](https://github.com/HKUDS/nanobot/pull/4596) | ✅ 已提交，待审 |
| 🔴 **高** | [#4592](https://github.com/HKUDS/nanobot/issues/4592) | shell guard 路径提取正则遗漏 `=` 分隔符，`curl --output=/etc/passwd` 可绕过工作区沙箱隔离 | [#4594](https://github.com/HKUDS/nanobot/pull/4594) | ✅ 已提交，待审 |
| 🟡 **中** | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | `max_messages` 截断与 microcompact 持续使 prompt caching 失效，增加 API 成本 | — | CLOSED（已有修复） |
| 🟡 **中** | [#4583](https://github.com/HKUDS/nanobot/pull/4583) | 配置迁移时 `tools.exec` 为 null 导致 `load_config()` 崩溃 | 同 PR | 待审 |
| 🟡 **中** | [#4584](https://github.com/HKUDS/nanobot/pull/4584) | MCP 连接日志泄露 URL 中的凭证信息 | 同 PR | 待审 |
| 🟢 **低** | [#4597](https://github.com/HKUDS/nanobot/issues/4597) | 测试 Issue，无实际影响 | — | CLOSED |

**建议优先审**：#4596、#4594（均为安全/数据完整性，已就绪）。

---

## 6. 功能请求与路线图信号

| 功能 | Issue/PR | 信号强度 | 判断 |
|---|---|---|---|
| 自动推理努力度升级 | [#4419](https://github.com/HKUDS/nanobot/issues/4419) | ⭐⭐⭐ | 社区需求明确，但尚无 PR，预计需 1-2 周 |
| A2A 多 Agent 协作 | [#4571](https://github.com/HKUDS/nanobot/pull/4571) | ⭐⭐⭐⭐ | 已有实质性 PR，若审查顺利可能纳入下版本 |
| GitHub Copilot 企业端点覆盖 | [#4598](https://github.com/HKUDS/nanobot/pull/4598) | ⭐⭐⭐ | 今日新建，解决 #4220，企业用户需求 |
| 子 Agent 可配置模型预设 | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | ⭐⭐⭐ | 创建已 20 天，仍在活跃讨论，可能即将合并 |
| WebUI Markdown 导出 + 时间戳 | [#4586](https://github.com/HKUDS/nanobot/pull/4586) + [#4587](https://github.com/HKUDS/nanobot/pull/4587) | ⭐⭐ | 用户体验改善，低风险，合并概率高 |
| 出站事件类型化 | [#4590](https://github.com/HKUDS/nanobot/pull/4590) | ⭐⭐ | 架构基础工作，为后续 UI 扩展铺路 |
| 会话绑定本地触发器 | [#4591](https://github.com/HKUDS/nanobot/pull/4591) | ⭐⭐ | 新特性，扩展触发器生态 |
| 提供商级代理配置 | [#4578](https://github.com/HKUDS/nanobot/pull/4578) | ⭐⭐ | 企业环境刚需 |
| Conda 虚拟环境支持 | [#4580](https://github.com/HKUDS/nanobot/issues/4580) | ⭐ | 个人用户场景，社区贡献意愿待观察 |

---

## 7. 用户反馈摘要

**满意方面**：
- 社区对项目的"超轻量"定位有期待，说明品牌传播有效；Dream 记忆整合、子 Agent 等高级功能持续获得关注，产品方向被认可。
- hamb1y 等活跃用户主动提交性能优化 PR，表明深度用户对项目有归属感。

**痛点与不满**：
- **依赖膨胀**（#660）：Dockerfile 同时要求 Python + Node.js，与 ultra-lightweight 定位冲突，15 条评论中多人表示"被吸引来是因为轻量，部署时发现不是"。
- **沙箱安全**（#4592）：shell guard 绕过漏洞虽未确认被利用，但反映出安全审计不够系统，用户期待更全面的 fuzzing 测试。
- **会话可靠性**（#4595）：tool_call ID 重复导致"后续每个请求都受影响"，用户 MadSkittles 描述为"permanent session poison"，语气强烈，属于信任度杀手。
- **配置迁移健壮性**（#4583）：`tools.exec` 为 null 即崩溃，反映边界条件测试不足。
- **OAuth 登录体验**（#4573）：用户反馈"浪费时间才发现 OAuth provider 未被默认设置"，属 onboarding 摩擦。

**使用场景趋势**：
- 企业环境需求集中涌现（GHE、代理配置、虚拟环境），表明 NanoBot 正从个人工具向企业采用渗透。
- 成本优化诉求（#4581、#4588、#4419）反映用户在生产环境长期运行的经济压力。

---

## 8. 待处理积压

| 积压项 | 类型 | 等待天数 | 风险 | 建议行动 |
|---|---|---|---|---|
| [#4293](https://github.com/HKUDS/nanobot/pull/4293) — 子 Agent 结果注入 | PR | 20 天 | Cron + 子 Agent 场景无法正常工作 | 优先审查，影响自动化工作流 |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) — 子 Agent 模型预设 | PR | 20 天 | 多模型策略受阻 | 与 #4571（A2A）协调审查 |
| [#4581](https://github.com/HKUDS/nanobot/pull/4581) — 上下文压缩优化 | PR | 2 天 | 成本敏感用户期待 | 技术审查，评估与现有 compact 的交互 |
| [#4588](https://github.com/HKUDS/nanobot/pull/4588) — 命令输出压缩器 | PR | 1 天 | 同上 | 可与 #4581 联合审查 |
| [#4571](https://github.com/HKUDS/nanobot/pull/4571) — A2A 多 Agent | PR | 2 天 | 战略功能 | 需架构层面评审，建议安排专门 review |
| [#4590](https://github.com/HKUDS/nanobot/pull/4590) — 出站事件类型化 | PR | 1 天 | 架构基础 | 审查 API 兼容性后可快速合并 |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) — 自动推理升级 | Issue | 10 天 | 无 PR | 评估是否纳入下版本 scope |
| [#660](https://github.com/HKUDS/nanobot/issues/660) — 依赖膨胀 | Issue | 137 天 | 品牌信任 | 考虑在 README 或 Dockerfile 中明确说明 Node.js 用途，或提供 slim 变体 |

**总体健康度评估**：🟢 **健康**。项目活跃度高、贡献者多元、安全响应及时。主要风险在于 PR 合并吞吐不足（33 个活跃 PR），可能导致贡献者疲劳。建议本周优先处理 #4596、#4594（安全/数据完整性），并安排一次集中 review 清理积压。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-30 | 数据来源：github.com/nousresearch/hermes-agent**

---

## 1. 今日速览

过去 24 小时项目保持**高活跃度**：Issues 更新 50 条（新开/活跃 47，关闭 3），PR 更新 50 条（待合并 43，已合并/关闭 7），无新版本发布。社区贡献呈现明显的**安全审计浪潮**——用户 `ooiuuii` 一人提交了至少 8 个与"无界响应体缓冲"相关的安全/稳定性 Issue 及对应修复，覆盖 Gateway、Signal、BlueBubbles、Microsoft Graph、Discord、Account Usage 等多个适配器。此外，macOS Desktop 渲染崩溃、Dashboard 认证回退、Telegram 流式渲染 ghosting 等影响用户体验的 Bug 持续获得关注。项目整体处于**快速迭代 + 安全加固**阶段。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共 7 个，重点推进方向：

| PR | 状态 | 说明 |
|---|---|---|
| **#55299** [CLOSED] | 已合并 | 修复 `truncate_message()` 中代码围栏边界检测器，要求闭合围栏行仅含空白尾随字符，符合 CommonMark 规范，防止误判普通代码行为闭合围栏 |
| **#55266** [CLOSED] | 已合并 | 修复 Windows 8.3 短文件名导致 `test_media_files_routed_by_type` 测试失败的问题 |
| **#54501** [CLOSED] | 已合并 | 修复 MoA（Mixture-of-Agents）中 `xai-oauth` 引用模型静默失败的问题，将 OAuth 凭据路由到直接凭据路径 |
| **#55237** [CLOSED] | 已合并 | Signal RPC 无界响应体读取问题（对应 Issue 已关闭） |

**待合并的重要 PR：**

| PR | 方向 | 说明 |
|---|---|---|
| **#55294** | Bug fix | 收紧 `truncate_message()` 围栏追踪逻辑，与 #55299 互补 |
| **#55289** | Refactor | Relay 平台中性作用域标识符从 `guild_id` 重命名为 `scope_id`（Phase 2.5） |
| **#55300** | Bug fix | 压缩恢复时保留对等路由元数据，防止会话丢失 |
| **#55288** | Bug fix | 修复 macOS Desktop GUI 更新器因 Node 未预配导致构建失败 |
| **#55303** | Feature | 支持 Google Chat 应用命令 payload（`chat.appCommandPayload.message`） |
| **#55304** | Refactor | 从 `gateway/run.py`（18,870 行）提取 7 个显示辅助函数，持续削减"上帝文件" |

**整体判断：** 项目在消息分块/截断逻辑、跨平台兼容性、安全边界三个方向同步推进，relay 平台抽象层正在经历系统性重构（`guild_id → scope_id`），为后续多平台统一路由奠定基础。

---

## 4. 社区热点

### 🔥 讨论最活跃

| Issue | 👍 | 💬 | 焦点 |
|---|---|---|---|
| **#5257** [OPEN] | 18 | 13 | **通用 ACP 客户端**：将 Hermes 从 ACP server 扩展为可编排 Claud/Copilot 等所有 ACP 兼容编码 agent 的 CLI 编排器，是多 agent 协作的核心基础设施诉求 |
| **#50775** [OPEN] | 4 | 1 | **Telegram macOS 流式渲染 ghosting**：v0.17.0 更新后出现文字重叠/重影，影响面广（4 个赞） |
| **#4438** [OPEN] | 0 | 5 | **Rich Spreadsheet Skill**：为 xlsx/csv 提供结构化抽象，避免 agent 每次从零摸索 openpyxl/pandas |

### 📌 高赞/高互动新 Issue

- **#55191** [OPEN] — macOS Desktop 在对话达到 ~128K token 压缩阈值时渲染器崩溃循环，窗口冻结（2 评论）
- **#55130** [OPEN] — Dashboard 在仅配置 basic auth 时所有页面返回 HTTP 500，完全不可达（1 评论）
- **#55071** [OPEN] — Gateway 聊天净化器遗漏 `unexpected status 401` 认证错误信封，可能将原始认证失败信息泄露给终端用户（2 评论）

**热点分析：** 社区对 **多 agent 编排能力**（#5257）和 **桌面端稳定性**（#55191、#55130）的需求最为迫切。安全审计类 Issue 集中爆发，反映项目正在经历从"功能完备"到"安全加固"的阶段转换。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 严重

| Issue | 描述 | Fix PR |
|---|---|---|
| **#42405** | Memory 容量满 → `replace` 零匹配重试循环 → 无响应（静默挂起） | 无 |
| **#55130** | Dashboard 仅 basic auth 时 500 错误，完全不可达 | **#55295**（OPEN）、**#55302**（doctor 检测，OPEN） |

### 🟠 P2 — 高优先级

| Issue | 描述 | Fix PR |
|---|---|---|
| **#35876** | Gemini 配额错误时 vision fallback chain 静默失败（kwargs 未正确转发） | 无 |
| **#24039** | 辅助 fallback chain 与用户配置的 `fallback_providers` 双系统不互通 | 无 |
| **#49242** | Windows 上 WhatsApp gateway 未优先使用 Hermes-managed Node/npm | 无 |
| **#51560** | `fallback_providers` 以 JSON 字符串存储时静默清空 fallback chain | 无 |
| **#55071** | Gateway 净化器遗漏 401 认证错误信封 | 无 |
| **#55265** | Telegram 论坛主题私聊 cron 投递静默忽略 `direct_messages_topic_id`（#50023 回归） | 无 |
| **#55292** | `truncate_message` 将带尾随文本的代码行误判为闭合围栏 | **#55294**（OPEN）、**#55299**（已合并） |
| **#55305** | ZFS 上 SQLite WAL 多连接导致 state.db 损坏，会话列表全部失败 | 无 |

### 🟡 P3 — 中低优先级

| Issue | 描述 | Fix PR |
|---|---|---|
| **#49289** | 删除 profile 后 Desktop profile rail 图标残留 | 无 |
| **#55191** | macOS Desktop 渲染器在 ~128K token 压缩阈值崩溃循环 | 无 |
| **#50775** | Telegram macOS 流式更新 ghosting/文字重叠 | 无 |
| **#55274** | BlueBubbles REST helpers 无界缓冲 JSON 响应 | 无 |
| **#55276** | `reasoning_effort`/`thinking_budget` 对 custom/zai providers 静默丢弃 | 无 |
| **#55279** | Microsoft Graph client 无界缓冲 REST 响应 | 无 |
| **#55284** | Discord server tool 无界读取 REST 响应体 | 无 |
| **#55296** | WhatsApp formatter 粗斜体 markdown 转换错误 | **#55298**（OPEN） |
| **#55233** | trigram FTS 索引导致 state.db 膨胀（100K 消息占 2.1GB） | 无 |
| **#53329** | 非 git 项目文件夹显示重复 lane | 无 |

**安全专项：** 用户 `ooiuuii` 今日集中报告了 6+ 个"无界响应体缓冲"问题（#55211、#55237、#55274、#55279、#55284、#55205），覆盖 Signal、BlueBubbles、Microsoft Graph、Discord、Account Usage、Azure 检测等多个入口。这是一次系统性的安全审计，建议优先处理。

---

## 6. 功能请求与路线图信号

| Issue/PR | 方向 | 信号强度 | 判断 |
|---|---|---|---|
| **#5257** | 通用 ACP 客户端，多 agent CLI 编排 | 👍18, 💬13 | **高优先级** — 社区需求强烈，且与 Nous Research 多 agent 战略方向一致 |
| **#4438** | Rich Spreadsheet Skill (xlsx/csv) | 💬5 | **中** — 实用性强但社区讨论有限 |
| **#55287** | Desktop 可配置聊天宽度 | 新提交 | **低** — 纯 UI 微调 |
| **#55303** (PR) | Google Chat 应用命令支持 | OPEN | **中** — 扩展平台覆盖 |
| **#47320** (PR) | CLI ↔ Gateway 便携式 handoff 工作流 | OPEN | **中** — 改善跨端体验 |
| **#52136** (PR) | `/learn` 进度步骤展示 | OPEN | **低** — UX 改善 |
| **#55289** (PR) | Relay `scope_id` 重命名（Phase 2.5） | OPEN | **高** — 平台抽象层重构核心步骤 |

**路线图判断：** 下一版本可能聚焦于 (1) 安全加固（无界响应体、认证错误处理），(2) Relay 平台抽象层统一（`scope_id` 迁移），(3) ACP 多 agent 编排能力。Desktop 稳定性（渲染器崩溃、Node 预配）也需要优先修复以维护用户体验。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Dashboard 认证完全不可达**（#55130）：非 loopback 绑定 + basic auth 唯一提供者的常见配置场景下，所有页面返回 500，用户完全无法使用 Dashboard。
2. **macOS Desktop 渲染器崩溃**（#55191）：长对话达到压缩阈值后窗口冻结，仅 backend 存活，严重影响桌面端核心体验。
3. **Telegram 流式渲染 ghosting**（#50775）：v0.17.0 更新后引入的视觉回归，文字重叠/重影，4 个赞表明影响面广。
4. **Memory 静默挂起**（#42405）：容量满后 agent 进入重试循环，用户完全无响应且无任何提示。
5. **state.db 膨胀**（#55233）：生产环境 100K 消息导致 trigram FTS 索引占用 2.1GB，用户建议提供禁用开关。

### 😃 满意/中性

- **#5257** 的 18 个赞表明社区对 Hermes 作为多 agent 编排器的定位高度认可。
- **#4438** 的讨论反映用户对 agent 工具链专业化的期待（Spreadsheet Skill 作为结构化数据处理的标配）。

### 📋 使用场景

- **持久化 Dashboard 服务**（#43196）：用户在 Linux VM 上以 `systemd --user` 运行 Dashboard，绑定 `0.0.0.0:9119`，跨机器浏览器访问。
- **ZFS/TrueNAS 部署**（#55305）：用户在 TrueNAS 上部署 Hermes Agent，遭遇 SQLite WAL 兼容性问题。
- **多 provider fallback 配置**（#24039、#51560）：高级用户配置多 provider fallback chain，但双系统不互通和 JSON 字符串静默清空问题造成困扰。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，建议维护者关注：

| 编号 | 类型 | 等待时间 | 说明 |
|---|---|---|---|
| **#42405** | Issue (P1) | 22 天+ | Memory 容量满静默挂起，无 fix PR |
| **#35876** | Issue (P2) | 30 天+ | Gemini vision fallback chain kwargs 回归，无 fix PR |
| **#24039** | Issue (P2) | 50 天+ | 辅助 fallback chain 与用户配置双系统不互通 |
| **#49242** | Issue (P2) | 11 天+ | Windows WhatsApp Node 路径优先级问题 |
| **#51560** | Issue (P2) | 7 天+ | `fallback_providers` JSON 字符串静默清空 |
| **#50775** | Issue (P2) | 8 天+ | Telegram macOS ghosting，4 个赞 |
| **#24229** | PR (P1) | 49 天 | BlueBubbles 隐私泄露修复（出站回复可能误路由到群聊），已开放近 2 个月未合并 |
| **#47320** | PR (P3) | 14 天 | CLI ↔ Gateway 便携式 handoff 工作流 |
| **#52136** | PR (P3) | 6 天 | `/learn` 进度展示 |

**特别提醒：**
- **#24229** 是一个 P1 安全修复 PR（BlueBubbles 出站回复可能误路由到群聊，造成隐私泄露），已开放 49 天，建议优先审查合并。
- **#42405** 是 P1 级别的静默挂起 Bug，22 天无 fix PR，影响所有使用 memory 功能的用户。
- **#35876** 的 vision fallback chain 回归已存在 30 天，影响 Gemini 用户在配额耗尽时的自动降级体验。

---

*本报告基于 2026-06-30 的 GitHub 公开数据自动生成。数据窗口：过去 24 小时。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-06-30（周日）| 数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 今日保持中等活跃度，共 6 条 Issue/PR 更新，无新版本发布。社区贡献集中在两个方向：**新增 DeltaChat 网关**（PR #3063）和 **AWS Bedrock 提示缓存优化**（PR #3163），均由活跃贡献者推动。Bug 方面有 1 个已关闭的 iOS Safari 兼容性问题和 1 个待处理的豆包工具调用泄漏问题。整体项目健康度良好，但多个 PR 和 Issue 已标记 stale，维护者响应速度有待提升。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭。当前有 **3 个 Open PR** 处于待合并状态：

| PR | 作者 | 类型 | 状态 | 说明 |
|---|---|---|---|---|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | trufae | ✨ 新功能 | OPEN (stale) | 新增 DeltaChat 网关，扩展消息通道能力 |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | loafoe | ✨ 新功能 | OPEN | 利用 AWS Bedrock Converse API 的 cache points 实现提示缓存，可降低约 90% 输入 token 计费 |
| [#3156](https://github.com/sipeed/picoclaw/pull/3156) | loafoe | ✨ 新功能 | OPEN (stale) | 在 Pico 频道的 finalized 消息上输出每轮 LLM token 用量（input/output 分离），便于下游追踪成本 |

**关键信号：** loafoe 一人贡献了 2 个高质量 PR（Bedrock 缓存 + Token 用量遥测），均与成本优化相关，说明社区对 LLM 调用成本敏感度较高。

---

## 4. 社区热点

### 🔥 Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) — "I need SimpleX or tox"
- **👍** 1 | **💬** 4 条评论 | 状态：OPEN (stale)
- **作者：** Damian-o2 | 创建于 2026-06-10
- **核心诉求：** 用户请求新增 SimpleX、Wire 或 Tox 作为消息网关，反映对隐私优先/去中心化通信协议的需求。
- **分析：** 该 Issue 已活跃近 20 天且被标记 stale，说明维护者尚未将其纳入路线图。结合 PR #3063（DeltaChat 网关）的存在，社区对**非传统消息通道**的需求正在增长，但优先级尚未明确。

### 📌 PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) — Bedrock 提示缓存
- **作者：** loafoe | 创建于 2026-06-23
- **关注度：** 该 PR 是今日技术含量最高的贡献，直接对接 AWS Bedrock 的 prompt caching 能力，对高频调用场景下的成本优化意义显著。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 摘要 | Fix PR |
|---|---|---|---|---|
| ⚠️ 中 | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | **OPEN (stale)** | 火山引擎豆包 Seed 工具调用偶尔泄漏为原始 `<seed:tool_call>` XML 文本，而非正常执行 | ❌ 无 |
| 🟢 低 | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | **CLOSED** | iOS 16.4 以下 Safari 版本 Panel 面板无法正常使用 | ✅ 已关闭（具体修复方式未说明） |

**重点关注：** Issue #3153 涉及 LLM 工具调用链路的核心可靠性问题——当使用 `doubao-seed-2.0-pro` 模型时，工具调用未被正确解析执行，而是将内部 XML 结构暴露给终端用户。这属于**数据完整性和用户体验**双重问题，建议优先排查模型响应解析逻辑。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 路线图信号 |
|---|---|---|---|
| DeltaChat 网关 | PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) | 待合并 | 🟡 已有实现，需维护者 review |
| SimpleX / Tox / Wire 网关 | Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) | 未开始 | 🔴 仅社区呼声，无 PR |
| Bedrock 提示缓存 | PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) | 待合并 | 🟢 高质量 PR，合并概率高 |
| Token 用量遥测 | PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) | 待合并 | 🟡 实用性强，但已 stale |

**判断：** 下一版本（预计 v0.3.x）大概率合并 PR #3163（Bedrock 缓存）和 PR #3156（Token 遥测），两者均聚焦成本可观测性与优化。DeltaChat 网关（#3063）因已 stale 近 3 周，可能需要贡献者主动推动。

---

## 7. 用户反馈摘要

- **隐私通信需求浮现：** 用户 Damian-o2 明确提出对 SimpleX/Tox 等去中心化协议的支持需求（Issue #3093），4 条评论表明有一定社区共识，但项目方尚未回应。
- **移动端兼容性仍有短板：** iOS 16.4 以下 Safari 的 Panel 问题（Issue #3090）虽已关闭，但用户反馈中未确认修复效果，可能存在回归风险。
- **LLM 工具调用可靠性焦虑：** Issue #3153 用户描述了豆包模型工具调用"偶尔泄漏"的现象，反映了对多模型后端一致性的担忧——用户期望工具调用是**黑盒封装**，不应暴露内部 XML 结构。
- **成本敏感度较高：** 从 PR #3163（Bedrock 缓存降本）和 PR #3156（Token 遥测）可推断，PicoClaw 的用户群体对 LLM API 调用成本有明确的可视化与优化需求。

---

## 8. 待处理积压

| 类型 | 链接 | 停滞天数 | 风险等级 | 建议行动 |
|---|---|---|---|---|
| Issue | [#3093](https://github.com/sipeed/picoclaw/issues/3093) — SimpleX/Tox 网关需求 | 20 天 | 🟡 中 | 回复用户路线图计划，或标记为 "help wanted" |
| PR | [#3063](https://github.com/sipeed/picoclaw/pull/3063) — DeltaChat 网关 | 21 天 | 🟠 较高 | 安排 code review 或要求贡献者 rebase |
| Issue | [#3153](https://github.com/sipeed/picoclaw/issues/3153) — 豆包工具调用泄漏 | 8 天 | 🔴 高 | 优先排查解析逻辑，考虑添加集成测试 |
| PR | [#3156](https://github.com/sipeed/picoclaw/pull/3156) — Token 用量遥测 | 8 天 | 🟡 中 | 与 #3163 同作者，可一并 review |

**维护者关注建议：** 当前有 3 个 stale 项（1 Issue + 2 PR），建议在下次维护窗口中集中处理，避免贡献者积极性下降。特别是 PR #3063 和 #3156 已停滞超过一周未获回复，可能影响社区贡献意愿。

---

*本报告由 AI 助手基于 GitHub 公开数据自动生成，数据截止 2026-06-30。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-06-30 | 数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

过去 24 小时 NanoClaw 项目保持**高活跃开发节奏**，共产生 7 条 PR 更新（5 条待合并、2 条已合并/关闭），无新 Issue 报告。开发重点集中在**多平台渠道适配器扩展**（Discord、Slack Socket Mode）、**安全加固**（容器内符号链接逃逸修复）以及**语音通知 v3 意图分流**等方向。无新版本发布，主干处于功能快速迭代期。整体项目健康度良好，社区贡献者（thisdotrob、johnmathews、rudgalvis、tier2tech-tian、omri-maya 等）响应迅速，多个 PR 在 24 小时内完成从提交到合并/关闭的全流程。

---

## 2. 版本发布

> 过去 24 小时无新版本发布，本节省略。

---

## 3. 项目进展

### 已合并/关闭的 PR（2 条）

| PR | 状态 | 作者 | 说明 |
|---|---|---|---|
| [#2883](https://github.com/nanocoai/nanoclaw/pull/2883) | 已关闭 | tier2tech-tian | **feat: voice-notify v3 意图分流 + kill-switch** — 语音播报摘要从"一刀切"改为 5 类意图分流（action / silent / navigate / tech_status / notify），代码块与长表格直接跳过不播报，需决策消息突出行动项，技术汇报保留关键数据；新增 `VOICE_SUMMARY_VERSION=off` 运行时 kill-switch。38/38 测试通过，C1 三轮 review GO，tsc 编译通过。 |
| [#2882](https://github.com/nanocoai/nanoclaw/pull/2882) | 已关闭 | omri-maya | **fix(ncl): default messaging-groups create instance to channel_type** — 修复 `ncl messaging-groups create` 命令因 migration 016 新增的 `instance` 列（TEXT NOT NULL）未在通用 CRUD 资源定义中声明而导致的 `NOT NULL` 约束违反崩溃。 |

**进展评估：** 语音通知 v3 的合并标志着 NanoClaw 在 AI 语音交互体验上的精细化升级；CLI 工具链的稳定性修复则降低了新用户上手门槛。两项合并均属"即修即合"模式，说明维护团队对低风险修复的响应效率较高。

---

## 4. 社区热点

当前 5 条待合并 PR 均为 2026-06-28 至 2026-06-29 提交，尚无评论数据（`undefined`），但以下 PR 因涉及核心功能扩展和安全问题值得重点关注：

### 🔥 安全修复 — 容器符号链接逃逸

**[#2880](https://github.com/nanocoai/nanoclaw/pull/2880) fix(security): contain inbox symlink escapes in attachment writes (#2828)**
- 作者：johnmathews | 创建于 2026-06-28
- **CWE-59（符号链接跟随 → 任意主机文件写入）**：Agent 容器的 session 目录以可写方式挂载，被入侵的 Agent 可在自身 session 目录内预置符号链接，等待主机写入时穿越至宿主机任意路径。该 PR 在入站文件写入的双路径上同时封堵此漏洞。
- **严重程度：高** — 涉及容器隔离边界突破，建议优先 review 合并。

### 🚀 渠道扩展 — Discord 适配器

**[#2884](https://github.com/nanocoai/nanoclaw/pull/2884) feat(discord): add Discord channel adapter + fix Gateway approval-button routing**
- 作者：rudgalvis | 创建于 2026-06-29
- 新增 `src/channels/discord.ts`，通过 Chat SDK 桥接实现 Discord 渠道适配器（Gateway 模式、并发分发、回复上下文提取），注册至 `src/channels/index.ts`，新增 `@chat-adapter/discord@4.29.0` 依赖。
- 附带修复：所有 Discord DM 审批卡按钮路由错误。

### 🔧 渠道修复 — Slack Socket Mode 引导设置

**[#2885](https://github.com/nanocoai/nanoclaw/pull/2885) fix(setup): offer Slack Socket Mode in the guided setup flow**
- 作者：thisdotrob | 创建于 2026-06-29
- PR #2837 虽已实现 Slack Socket Mode 端到端支持，但仅合并至 `channels` 分支而未进 `main`，导致 `setup:auto` 的 Slack 流程在主干上仍为 webhook-only。该 PR 将 Socket Mode 选项补入主干引导设置流程。

### 🔐 权限修复 — 新 Agent 继承安装 Provider

**[#2886](https://github.com/nanocoai/nanoclaw/pull/2886) fix: channel-registered new agents inherit the install's provider (avoid 401 on single-provider installs)**
- 作者：thisdotrob | 创建于 2026-06-29
- 当用户连接新聊天渠道并选择"Connect new agent"时，`createNewAgentGroup` 始终使用内置默认 provider（Claude），在单 provider 安装场景下导致 401 认证失败。修复后新 Agent 将继承当前安装的 provider 配置。

### 📊 仪表盘推送器

**[#2871](https://github.com/nanocoai/nanoclaw/pull/2871) feat(dashboard): add dashboard pusher with OpenCode support**
- 作者：grantland | 创建于 2026-06-27（已等待 ~3 天）
- 新增 `src/dashboard-pusher.ts`，每 60 秒收集 NanoClaw 状态快照并 POST 至 `@nanoco/nanoclaw-dashboard` 服务器。无仪表盘配置时自动 no-op。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 关联 PR |
|---|---|---|---|
| 🔴 **高** | 容器内符号链接逃逸可导致宿主机任意文件写入（CWE-59） | 已有修复 PR，待合并 | [#2880](https://github.com/nanocoai/nanoclaw/pull/2880) |
| 🟠 **中高** | 单 provider 安装下新渠道 Agent 使用默认 Claude provider 导致 401 | 已有修复 PR，待合并 | [#2886](https://github.com/nanocoai/nanoclaw/pull/2886) |
| 🟡 **中** | `ncl messaging-groups create` 因 `instance` 列缺失导致 NOT NULL 约束违反 | ✅ 已修复合并 | [#2882](https://github.com/nanocoai/nanoclaw/pull/2882) |
| 🟡 **中** | Discord DM 审批卡按钮路由错误 | 已有修复 PR（随适配器一起），待合并 | [#2884](https://github.com/nanocoai/nanoclaw/pull/2884) |
| 🟢 **低** | Slack Socket Mode 未在主干引导设置中提供 | 已有修复 PR，待合并 | [#2885](https://github.com/nanocoai/nanoclaw/pull/2885) |

**总结：** 当前唯一高危问题（符号链接逃逸）已有对应修复 PR，建议维护者尽快完成 review 并合并至主干。其余均为中低风险问题，修复方案均已就位。

---

## 6. 功能请求与路线图信号

从当前 PR 队列可观察到以下路线图方向：

| 方向 | 信号来源 | 成熟度 | 预计纳入版本 |
|---|---|---|---|
| **Discord 渠道支持** | [#2884](https://github.com/nanocoai/nanoclaw/pull/2884) — 完整适配器实现 | 高（PR 已提交） | 下一 minor 版本 |
| **Slack Socket Mode 主干化** | [#2885](https://github.com/nanocoai/nanoclaw/pull/2885) — 引导设置补全 | 高（PR 已提交） | 下一 minor 版本 |
| **语音通知意图分流 v3** | [#2883](https://github.com/nanocoai/nanoclaw/pull/2883) — 已合并 | ✅ 完成 | 已合并待发版 |
| **远程仪表盘推送** | [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) — 60s 快照推送 | 中（PR 待 review） | 待定 |
| **多 Provider 渠道 Agent 继承** | [#2886](https://github.com/nanocoai/nanoclaw/pull/2886) | 高（PR 已提交） | 下一 patch 版本 |

**路线图判断：** NanoClaw 当前明显处于**多渠道扩张期**，Discord 适配器的提交意味着项目正在从"Slack + 基础渠道"向"全主流 IM 平台覆盖"演进。语音通知 v3 的意图分流则表明团队在 AI 交互体验精细化方面持续投入。仪表盘推送器（#2871）暗示未来可能推出托管/远程监控能力，值得关注。

---

## 7. 用户反馈摘要

> ⚠️ 过去 24 小时无新 Issue 提交，本节基于 PR 摘要中的问题描述间接提炼用户痛点：

| 痛点 | 来源 | 场景描述 |
|---|---|---|
| **单 provider 安装下新 Agent 认证失败** | [#2886](https://github.com/nanocoai/nanoclaw/pull/2886) | 用户仅配置了非 Claude 的单一 provider（如 OpenAI），在连接新渠道创建新 Agent 时因默认回退到 Claude 而遭遇 401 |
| **Slack Socket Mode 不可见于设置向导** | [#2885](https://github.com/nanocoai/nanoclaw/pull/2885) | 用户期望通过引导设置直接启用 Slack Socket Mode（无需公网 webhook），但主干上该选项缺失 |
| **CLI 创建消息组崩溃** | [#2882](https://github.com/nanocoai/nanoclaw/pull/2882) | 用户执行 `ncl messaging-groups create` 时遭遇 NOT NULL 约束违反，属于 migration 与 CRUD 层同步遗漏 |

---

## 8. 待处理积压

| PR/Issue | 等待时长 | 类型 | 建议行动 |
|---|---|---|---|
| [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) — Dashboard Pusher | ~3 天 | Feature PR | 已等待较久，建议维护者安排 review；该 PR 引入外部依赖 `@nanoco/nanoclaw-dashboard`，需确认依赖审核策略 |
| [#2880](https://github.com/nanocoai/nanoclaw/pull/2880) — 安全修复（符号链接逃逸） | ~2 天 | Security Fix | ⚠️ **建议最高优先级处理** — 涉及容器隔离边界，CWE-59 属于 OWASP 关注漏洞类型 |
| [#2884](https://github.com/nanocoai/nanoclaw/pull/2884) — Discord 适配器 | ~1 天 | Feature PR | 新增外部依赖 `@chat-adapter/discord@4.29.0`，需确认版本稳定性与许可证兼容性 |
| [#2885](https://github.com/nanocoai/nanoclaw/pull/2885) — Slack Socket Mode 设置 | ~1 天 | Bug Fix | 低风险修复，建议尽快合并以消除功能不一致 |
| [#2886](https://github.com/nanocoai/nanoclaw/pull/2886) — Provider 继承修复 | ~1 天 | Bug Fix | 影响单 provider 用户体验，建议优先合并 |

---

**日报生成时间：** 2026-06-30  
**下次更新：** 2026-07-01

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-30

---

## 1. 今日速览

NullClaw 在过去 24 小时内保持中等开发活跃度：共 4 条 PR 更新，其中 3 条待合并、1 条已关闭，无新开 Issue，无新版本发布。核心开发者 **vernonstinebaker** 集中推送了两项 CLI 交互改进（流式工具调用 + REPL 方向键处理），项目处于**功能迭代与体验打磨阶段**，节奏稳健但社区外部贡献有限。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已关闭

| PR | 作者 | 说明 |
|---|---|---|
| [#960](https://github.com/nullclaw/nullclaw/pull/960) | vernonstinebaker | **fix(cli): handle arrow keys in agent REPL** — 为交互式 `nullclaw agent` REPL 引入无分配行编辑器，启用 POSIX 原始模式输入，支持方向键、历史导航、光标移动、Backspace/Delete、Home/End 及常用词左右移动序列。该 PR 自 2026-06-17 创建，历经 12 天后关闭（推测被 #970 替代或重复）。 |

### 待合并（OPEN）

| PR | 作者 | 说明 |
|---|---|---|
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | vernonstinebaker | **feat(streaming): native tool calls during SSE streaming** — 将原生工具调用支持从流式路径中解耦，使支持流式原生工具调用的 Provider 能够真正输出工具调用。此前 agent loop 在检测到流式回调时强制禁用原生工具，退化为 prompt-injection 格式，严重限制了流式场景下的工具交互能力。**这是架构层面的重要改进。** |
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | vernonstinebaker | **fix(cli): handle arrow keys in agent REPL** — 与已关闭的 #960 功能相同，为替代/更新版本。同样引入无分配行编辑器与 POSIX 原始模式输入支持。 |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | dependabot[bot] | **ci(deps): bump alpine from 3.23 to 3.24** — Dependabot 自动依赖升级，Docker 镜像基础 Alpine 版本更新。自 2026-06-15 创建以来等待合并已超 14 天。 |

**项目推进评估：** #971 是本期最具价值的 PR，解决了流式输出与原生工具调用之间的架构冲突，直接影响多 Provider 的流式交互质量。#970/#960 解决了 CLI REPL 长期存在的交互体验痛点。

---

## 4. 社区热点

本期无 Issue 讨论，社区互动数据（评论、👍）均为零或未定义。

**关注点：**

- **[#971 — Native tool calls during SSE streaming](https://github.com/nullclaw/nullclaw/pull/971)**：该 PR 触及 agent loop 核心逻辑，解耦流式与工具调用路径，对 Provider 生态扩展意义重大。建议优先 Review。
- **[#970 — Arrow keys in agent REPL](https://github.com/nullclaw/nullclaw/pull/970)**：CLI 交互体验是终端用户最常接触的界面，方向键支持缺失会直接影响日常使用体验。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 | 关联 PR |
|---|---|---|---|
| 🟡 中 | CLI REPL 方向键/控制键打印为乱码，无法正常编辑输入 | 修复中（#970 待合并） | [#970](https://github.com/nullclaw/nullclaw/pull/970) |
| 🟡 中 | 流式模式下原生工具调用被禁用，退化为 prompt-injection 格式 | 修复中（#971 待合并） | [#971](https://github.com/nullclaw/nullclaw/pull/971) |
| 🟢 低 | Docker 基础镜像 Alpine 3.23 → 3.24 升级 | 待合并（#956，已等待 14 天） | [#956](https://github.com/nullclaw/nullclaw/pull/956) |

**无崩溃或数据丢失类严重 Bug 报告。**

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 判断 |
|---|---|---|
| 流式原生工具调用 | PR #971 已提交 | ✅ 明确纳入，等待合并 |
| CLI 交互增强（行编辑/快捷键） | PR #970 已提交 | ✅ 明确纳入，等待合并 |
| 容器镜像现代化 | Dependabot PR #956 | ⏳ 低优先级，但合并成本低 |

**路线图判断：** 当前开发重点集中在 **CLI 交互体验** 与 **流式架构优化** 两条主线，符合个人 AI 助手场景下对终端交互流畅性和实时响应的核心诉求。

---

## 7. 用户反馈摘要

本期无 Issue 评论数据，无法提取直接用户反馈。

**从 PR 摘要推断的痛点：**

- **REPL 交互体验差**：方向键和控制序列在 TTY 中打印为乱码（如 `^[[A`），说明此前缺乏行编辑器，对终端用户影响较大。
- **流式工具调用受限**：Provider 支持原生工具调用但在流式场景下被强制降级，影响响应速度和交互自然度。

---

## 8. 待处理积压

| 类型 | 编号 | 等待时长 | 建议 |
|---|---|---|---|
| 🔴 PR 待合并 | [#956](https://github.com/nullclaw/nullclaw/pull/956) — Alpine 3.23→3.24 | **14 天** | 建议尽快合并或关闭，避免基础镜像版本落后带来安全/兼容风险 |
| 🟡 PR 待合并 | [#970](https://github.com/nullclaw/nullclaw/pull/970) — REPL 方向键 | **1 天** | 功能完整，建议优先 Review 合并 |
| 🟡 PR 待合并 | [#971](https://github.com/nullclaw/nullclaw/pull/971) — 流式工具调用 | **1 天** | 涉及核心架构，建议仔细 Review 后合并 |

**维护者关注提醒：** #956 已等待合并超过两周，虽然是低风险依赖升级，但长期搁置可能导致后续 Dependabot PR 堆积和合并冲突。

---

> **项目健康度评估：🟢 良好** — 核心开发持续输出，架构层面有实质性推进，无严重积压 Bug。建议关注 PR 合并节奏，避免待合并分支长期滞留。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-30

## 1. 今日速览

IronClaw 项目保持高活跃度：过去 24 小时共处理 **14 条 Issue 更新**（10 条新开/活跃、4 条关闭）和 **50 条 PR 更新**（30 条待合并、20 条已合并/关闭）。无新版本发布。项目重心集中在 **Reborn WebUI v2 的 E2E 测试覆盖迁移**、**多用户 RBAC 架构设计**、以及 **Google 集成流程的 QA 问题修复**。核心贡献者（serrrfirat、ilblackdragon、henrypark133、thisisjoshford）并行推进多条主线，协作节奏紧凑。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动了以下方向：

| PR | 状态 | 核心进展 |
|---|---|---|
| [#5392](https://github.com/nearai/ironclaw/pull/5392) | ✅ 已合并 | Reborn 集成测试框架 slices 3–9：覆盖 LibSQL 矩阵、egress/HTTP matcher、M/OAuth/refresh 路径，为 Reborn 引擎提供了完整的进程内集成测试基础设施 |
| [#5402](https://github.com/nearai/ironclaw/pull/5402) | ✅ 已合并 | 在 #5392 基础上新增共享持久化"组"测试，覆盖跨线程的 approvals/auth/memory/secrets/extensions 产品适配器表面 |
| [#5371](https://github.com/nearai/ironclaw/pull/5371) | ✅ 已合并 | 将 Reborn WebUI 的聊天核心、附件、SSE/历史行为、DOM 资源边界等浏览器测试从旧版迁移至 v2 |
| [#5372](https://github.com/nearai/ironclaw/pull/5372) | ✅ 已合并 | 迁移审批门、手动/OAuth 认证门、渲染安全、工具执行可见性的浏览器覆盖至 v2 |
| [#5414](https://github.com/nearai/ironclaw/pull/5414) | ✅ 已合并 | 修复 WebUI v2 Logs 页面日志行文本无法选择/复制的问题（Issue [#5412](https://github.com/nearai/ironclaw/issues/5412)） |
| [#5422](https://github.com/nearai/ironclaw/pull/5422) | ✅ 已合并 | 修复 `/canary` PR 目标验证逻辑，确保 live QA 能正确 checkout PR head |
| [#5406](https://github.com/nearai/ironclaw/pull/5406) | ✅ 已合并 | 将 QA sheet 用户提示硬编码到 Reborn WebUI v2 live QA runner，使 agent 自行决定如何回答 |
| [#5423](https://github.com/nearai/ironclaw/pull/5423) | ✅ 已合并 | 允许 QA 7C 接受 routine/automation/cron/schedule/fires/watches 等多种措辞变体 |
| [#5425](https://github.com/nearai/ironclaw/pull/5425) | ✅ 已合并 | 多用户 RBAC 融合设计方案提案——复用现有能力、不新增额外层 |

**整体推进评估**：Reborn WebUI v2 的 E2E 测试迁移已进入批量收割阶段（今日合并 4 个迁移 PR），集成测试框架趋于完善；多用户架构设计启动，为下一阶段产品扩展奠定基础。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

1. **[#5413](https://github.com/nearai/ironclaw/issues/5413)** — Reborn inline OAuth refresh 静默吞掉未应用的 refresh 请求，应改为显式失败
   - 作者 thisisjoshford 指出这是导致 [#5378](https://github.com/nearai/ironclaw/issues/5378) 难以诊断的根本原因，强调可观测性对生产环境的关键性

2. **[#5421](https://github.com/nearai/ironclaw/issues/5421)** — Web search 在 ironclaw-reborn 下并非零配置，即使 chat 可用也会重复提示 NEAR AI API key
   - 用户期望"零配置"名副其实，bundled web-access / Exa MCP 应自动激活

3. **[#5420](https://github.com/nearai/ironclaw/issues/5420)** — Routine 投递目标是全局 per-user 默认值，设置 Slack 后所有 routine 都被重定向
   - 影响范围广，涉及多 routine 场景下的数据隔离

4. **[#5415](https://github.com/nearai/ironclaw/issues/5415)** — 多工具 Google Sheets 工作流在 18-25 次工具调用时因协议违规失败（P1 级别）

### 📌 关注最多的 PR

- **[#5149](https://github.com/nearai/ironclaw/pull/5149)** — Context management：渐进式工具披露（flag-gated），将每次模型调用的 prompt 从 ~25.8k tokens 大幅削减，解决 NEAR AI 120s 超时问题。这是影响所有 Reborn 用户的核心性能优化，目前仍为 OPEN 状态。

- **[#5394](https://github.com/nearai/ironclaw/pull/5394)** — Capability policy E2E 测试，直接回应 [#5385](https://github.com/nearai/ironclaw/issues/5385) 的多用户能力策略

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 状态 | 修复 PR |
|---|---|---|---|
| **P1** | [#5415](https://github.com/nearai/ironclaw/issues/5415) — 多工具 Google Sheets 工作流协议违规失败 | 🔴 OPEN | 无 |
| **P2** | [#5420](https://github.com/nearai/ironclaw/issues/5420) — Routine 投递目标全局覆盖而非 per-routine | 🔴 OPEN | 无 |
| **P2** | [#5417](https://github.com/nearai/ironclaw/issues/5417) — Hacker News 搜索激活错误 skill（tech-debt-tracker） | 🔴 OPEN | 无 |
| **P2** | [#5416](https://github.com/nearai/ironclaw/issues/5416) — Google 连接状态错误导致矛盾的认证流程 | 🔴 OPEN | 无 |
| **P2** | [#5421](https://github.com/nearai/ironclaw/issues/5421) — Web search 非零配置、重复提示认证 | 🔴 OPEN | 无 |
| **P3** | [#5419](https://github.com/nearai/ironclaw/issues/5419) — 无法重命名已创建的 automation | 🔴 OPEN | 无 |
| **P3** | [#5418](https://github.com/nearai/ironclaw/issues/5418) — 工具活动后对话消息顺序错误 | 🔴 OPEN | 无 |
| **P3** | [#5426](https://github.com/nearai/ironclaw/issues/5426) — 创建 routine 时系统驱动器不可用 | 🔴 OPEN | 无 |
| **已修复** | [#5412](https://github.com/nearai/ironclaw/issues/5412) — WebUI v2 日志行文本不可选 | ✅ 已关闭 | [#5414](https://github.com/nearai/ironclaw/pull/5414) |
| **已修复** | [#5413](https://github.com/nearai/ironclaw/issues/5413) — OAuth refresh 静默失败 | ✅ 已关闭 | 待关联 PR |
| **已修复** | [#5196](https://github.com/nearai/ironclaw/issues/5196) — "Ask each time" 工具权限授权后重复审批 | ✅ 已关闭 | 待关联 PR |
| **已修复** | [#4776](https://github.com/nearai/ironclaw/issues/4776) — 全局 Always Allow 设置 | ✅ 已关闭 | 待关联 PR |

**稳定性关注点**：
- Nightly E2E 持续失败（[#4108](https://github.com/nearai/ironclaw/issues/4108)，自 2026-05-27 起），需关注修复进展
- Google 集成相关 Bug 集中爆发（4 条 P1/P2），建议优先排查 OAuth 状态机与连接管理逻辑

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 路线图信号 |
|---|---|---|
| **多用户 RBAC** | [#5425](https://github.com/nearai/ironclaw/pull/5425) 设计方案已合并 | 设计阶段完成，实现即将启动；与 [#5394](https://github.com/nearai/ironclaw/pull/5394) capability policy E2E 并行推进 |
| **渐进式工具披露（Context management）** | [#5149](https://github.com/nearai/ironclaw/pull/5149) PR 待合并 | 解决 NEAR AI 超时问题的关键优化，flag-gated 默认关闭，风险可控，大概率纳入下版本 |
| **Slack 配对流程加固** | [#5362](https://github.com/nearai/ironclaw/pull/5362) PR 待合并 | 改善渠道配对 UX，修复 stale/expired code 处理 |
| **Reborn WebUI 渠道配对流程** | [#5373](https://github.com/nearai/ironclaw/pull/5373) PR 待合并 | 通用化配对流程，支持多渠道路由 |
| **存储压力测试工具** | [#5313](https://github.com/nearai/ironclaw/pull/5313) PR 待合并 | 基础设施加固，支持 libSQL + Postgres 后端的压力测试 |
| **Routine 重命名** | [#5419](https://github.com/nearai/ironclaw/issues/5419) | 低优先级 UX 改进，待排期 |
| **Routine 投递目标 per-routine 化** | [#5420](https://github.com/nearai/ironclaw/issues/5420) | 影响多 routine 用户，需数据模型变更，中期优先级 |

---

## 7. 用户反馈摘要

### 😤 痛点

1. **Google 集成体验割裂**：多位 QA 测试者（joe-rlo）报告 Gmail/Calendar/Drive/Sheets 的连接状态不一致、认证流程自相矛盾、多工具工作流在 18-25 次调用后崩溃。这表明 Google OAuth 状态机在复杂场景下存在竞态或上下文丢失。

2. **Routine 隔离缺失**：用户设置一个 routine 投递到 Slack，导致所有 routine 全部重路由——这对依赖多 routine 的用户（如邮件摘要 + 通知推送）造成数据泄露风险。

3. **"零配置"承诺未兑现**：Web search 在 Reborn 下仍需手动输入 API key，与产品宣传的 zero-config 体验不符，影响首次使用体验。

4. **日志不可操作**：WebUI v2 日志行无法选中/复制，影响开发者调试效率（已修复 ✅）。

### 😐 期望改进

- 用户希望 automation 名称可编辑（当前由 agent 自动生成，经常过长或被截断）
- 对话消息在工具活动后应保持正确的时间顺序
- Skill 选择准确性需提升（Hacker News 搜索不应激活 tech-debt-tracker skill）

### ✅ 正面信号

- 社区贡献者（joe-rlo、sunglow666）积极参与 QA 测试，提供详细复现步骤
- 核心团队响应迅速：OAuth refresh 静默失败当天提出当天关闭；日志选择性问题 4 小时内修复并合并

---

## 8. 待处理积压

| 积压项 | 类型 | 等待天数 | 风险 |
|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败 | CI 故障 | **34 天**（自 2026-05-27） | 🔴 高 — 持续失败意味着主分支可能长期处于不可发布状态，掩盖其他回归 |
| [#5149](https://github.com/nearai/ironclaw/pull/5149) Context management 渐进式工具披露 | 核心性能 PR | **7 天** | 🟡 中 — 解决 NEAR AI 超时问题，每延迟一天影响所有 Reborn 用户体验 |
| [#5394](https://github.com/nearai/ironclaw/pull/5394) Capability policy E2E | 安全测试 PR | **2 天** | 🟡 中 — 多用户能力策略的基础保障 |
| [#5362](https://github.com/nearai/ironclaw/pull/5362) Slack 配对流程加固 | 渠道 PR | **4 天** | 🟢 低 — 改善性变更，非阻塞 |
| [#5311](https://github.com/nearai/ironclaw/pull/5311) Release 自动化 PR | CI/CD | **4 天** | 🟢 低 — 流程优化 |
| [#5415](https://github.com/nearai/ironclaw/issues/5415) Google Sheets 多工具工作流 P1 Bug | Bug | **1 天** | 🔴 高 — 影响核心 Google 集成场景，需尽快分配 owner |

**维护者建议**：
1. **优先处理 #4108**（Nightly E2E 失败）— 34 天的持续失败严重削弱 CI 的信号价值，建议分配专人排查或暂时 pin 到已知通过的 commit
2. **加速 #5149 的 review 和合并** — 这是解决 NEAR AI 超时问题的直接方案，影响面广
3. **为 Google 集成 Bug（#5415–#5417, #5426）设立专项** — 4 条相关 Bug 同时爆发，建议统一排查 OAuth 状态机

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-06-29 | 数据窗口：过去 24 小时**

---

## 1. 今日速览

LobsterAI 今日处于**高活跃发布日**状态。项目发布了 **v2026.6.29** 版本，过去 24 小时内共有 **40 条 PR 更新**（39 条已合并/关闭），显示维护团队正集中将一批积累的 OpenClaw 集成修复与 UI 改进合入主干。Issue 侧新开/活跃 8 条、关闭 3 条，社区反馈持续流入，主要集中在**执行稳定性、国际化残留、订阅计费争议**三类问题。整体项目健康度良好，迭代节奏紧凑，但存在若干长期未响应的 stale Issue 需要关注。

---

## 2. 版本发布

### LobsterAI 2026.6.29（2026-06-29）

**Release PR:** [PR #2228](https://github.com/netease-youdao/LobsterAI/pull/2228)

本次版本为**稳定性修复版本**，无破坏性变更，建议所有用户升级。核心更新包括：

| 模块 | 修复内容 | 相关 PR |
|------|---------|---------|
| **OpenClaw** | 修复 agent bootstrap workspace 与 task cwd 混用导致身份/记忆文件加载错误 | [PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227) |
| **OpenClaw** | 修复 cron 定时任务 follow-up 历史同步丢失问题 | [PR #2220](https://github.com/netease-youdao/LobsterAI/pull/2220) |
| **OpenClaw** | 修复 user-turn 序列化缓存稳定性（v2026.6.1 回归） | [PR #2219](https://github.com/netease-youdao/LobsterAI/pull/2219) |
| **OpenClaw** | 插件审批路由走 Cowork 权限体系 | [PR #2217](https://github.com/netease-youdao/LobsterAI/pull/2217) |
| **Cowork** | 会话导航栏 tooltip 清理与对齐修复 | [PR #2218](https://github.com/netease-youdao/LobsterAI/pull/2218) |
| **OpenClaw** | OpenAI OAuth 路由到 ChatGPT responses provider | [PR #2221](https://github.com/netease-youdao/LobsterAI/pull/2221) |

**迁移注意事项：**
- 本次版本涉及 cron 存储迁移逻辑（[PR #2189](https://github.com/netease-youdao/LobsterAI/pull/2189)），首次启动时会自动检测并迁移旧版 cron JSON/run-log 存储，用户无需手动操作。
- 升级后如遇到 cron 任务历史缺失，属正常迁移过程中的元数据回填，后续运行会逐步恢复。

---

## 3. 项目进展

今日合并/关闭的 39 条 PR 主要推进了以下方向：

### 3.1 OpenClaw 集成稳定性（核心推进）

这是本次版本的主线，共涉及 **12 条 PR**，系统性修复了 v2026.6.1 引入的多个回归：

- **Agent 身份隔离**：修复 `runCwd` 被错误传入 `workspaceDir` 导致 OpenClaw 从用户项目目录加载 SOUL.md / IDENTITY.md / MEMORY.md 的问题，恢复了 agent 人格与长期记忆的隔离性。
- **Cron 体系全面修复**：涵盖 legacy 存储迁移、run-scoped session 键归一化、follow-up 历史保留、启动状态机明确化（startup/loading/ready/error 四态），解决了定时任务"更新无响应"和"历史丢失"两大痛点。
- **插件生态升级**：预装 QQ/Discord 官方插件，升级 DingTalk/Lark/WeCom/POPO 四个 IM 插件至 2026.6.1 布局，修复 NIM 插件 TypeScript 编译入口。

### 3.2 Cowork UI 修复

- 会话导航栏（conversation rail）经历了一次"合并→误回滚→重新应用"的波折（PR #2222 → #2224/#2225 → #2226），最终通过 release 分支重新应用修复，清理了 tooltip 中的 plan-mode 标签残留，增加了预览长度。

### 3.3 依赖与工程化

- Dependabot 自动升级 Electron 40.2.1 → 42.5.0（[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)），目前仍处于 OPEN 状态，等待维护者审核。
- AGENTS.md 文档更新，明确 Codex 指令范围与质量门禁（[PR #2184](https://github.com/netease-youdao/LobsterAI/pull/2184)）。

**整体评估：** 项目在 OpenClaw 集成层面向前迈进了一大步，解决了多个影响核心体验的回归问题。Cowork UI 的反复回滚说明分支管理流程仍有优化空间。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 标题 | 👍 | 评论 | 核心诉求 |
|-------|------|-----|------|---------|
| [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 执行结果窗口滚动到顶端会假死 | 0 | 2 | 用户反馈 2026.5.27 版本可复现的 UI 假死，影响日常使用 |
| [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 建议（多任务预输入/任务时长/UI 布局） | 0 | 2 | 开发者用户提出三项效率改进建议 |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 重复输出文字是否浪费 token | 0 | 2 | 用户对 agent 输出质量与成本表示担忧 |
| [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | 是否计划支持 hermes agent | 0 | 2 | 用户询问 agent 生态扩展路线图 |

### 🔥 最受关注的 PR

- **[PR #2228](https://github.com/netease-youdao/LobsterAI/pull/2228)** — 版本发布主干合并，涉及全部核心修复
- **[PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227)** — Agent workspace 隔离修复，解决了影响身份认知的关键 bug
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — Electron 大版本升级（40→42），已开放 2.5 个月未合并

### 分析

社区当前最关心的三个方向：
1. **执行稳定性**（滚动假死、任务被 terminated）—— 影响核心用户体验
2. **成本控制**（token 浪费、订阅积分清零）—— 影响付费用户信任
3. **效率提升**（多任务预输入、UI 布局优化）—— 来自重度开发者用户

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 - 严重（影响核心功能）

| 问题 | Issue | 状态 | Fix PR |
|------|-------|------|--------|
| Agent workspace 与 task cwd 混用导致身份/记忆加载错误 | 未单独提 Issue | ✅ 已修复 | [PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227) |
| Cron follow-up 历史同步丢失 | [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) 相关 | ✅ 已修复 | [PR #2220](https://github.com/netease-youdao/LobsterAI/pull/2220) |

### 🟡 P1 - 中等（影响使用体验）

| 问题 | Issue | 状态 | Fix PR |
|------|-------|------|--------|
| 执行结果窗口滚动到顶端假死 | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 🔴 未修复 | 无 |
| 任务运行中被 terminated 导致监控停止 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 第2点 | 🔴 未修复 | 无 |
| 重复输出文字浪费 token | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 🔴 未修复 | 无 |
| 邮箱配置测试连通性无响应 | [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) | 🔴 未修复（stale） | 无 |

### 🟢 P2 - 轻微（UI/展示问题）

| 问题 | Issue | 状态 | Fix PR |
|------|-------|------|--------|
| 语言切换后中文选项显示英文 | [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) | 🔴 未修复（stale） | 无 |
| 分享长图内容不全 | [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) | 🔴 未修复（stale） | 无 |
| 定时任务编辑更新无响应 | [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | 🔴 未修复（stale） | 无 |
| 自定义 agent 名称过长溢出弹框 | [#1435](https://github.com/netease-youdao/LobsterAI/issues/1435) | ✅ 已关闭 | 未关联 PR |

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| 需求 | Issue | 信号强度 | 判断 |
|------|-------|---------|------|
| 支持 hermes agent | [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | ⭐⭐ | 社区有需求，但未见官方回应，短期纳入可能性低 |
| 多任务预输入（任务队列） | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 第1点 | ⭐⭐⭐ | 来自重度开发者场景，与 workbuddy 功能对齐，有较高优先级 |
| 技能界面改为三列布局 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 第3点 | ⭐⭐ | 大屏适配问题，影响部分用户 |
| 延长单次任务运行时长 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 第2点 | ⭐⭐⭐ | 与 terminated 问题关联，影响开发场景 |

### 从已合并 PR 推测的下一版本方向

- **OpenClaw 插件生态持续扩展**：QQ/Discord 已预装，IM 插件全面升级，下一版本可能继续扩展更多渠道。
- **Cron 体系完善**：本次修复了 cron 的多个基础问题，后续可能增加 cron 任务管理 UI 增强。
- **Electron 升级**：[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 等待合并，可能在下下版本中引入。

---

## 7. 用户反馈摘要

### 😤 不满意

1. **订阅积分清零争议** — [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)（已关闭）
   > "我订阅的5500积分还没用，月底直接清零了???"
   
   **痛点：** 付费用户对积分过期政策不满，认为缺乏提前通知。该 Issue 已被关闭但未见明确解决方案公示。

2. **任务被 terminated** — [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)
   > "脚本还在进行但监控停止了，有点影响开发"
   
   **场景：** 用户用 claw 监控数据获取脚本，任务运行中被强制终止，影响开发效率。

3. **Token 浪费担忧** — [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)
   > "重复输出的文字是不是在大量吃我的token，造成token浪费?"
   
   **场景：** 用户观察到 agent 重复输出相同内容，担心成本失控。

### 💡 建设性建议

- **任务队列机制**（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)）：借鉴 workbuddy 的任务存储，允许在 claw 运行任务时预输入后续任务，提升连续开发效率。
- **大屏 UI 适配**（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)）：2560×1600 全屏下双列展示不佳，建议改三列。

### 📋 使用场景画像

从 Issue 中识别到的典型用户场景：
- **数据获取/监控脚本开发者** — 需要长时间运行 + 持续监控
- **多任务连续开发者** — 希望任务间无缝衔接
- **多语言用户** — 对国际化完整性有要求
- **付费订阅用户** — 关注积分政策与 token 成本

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，提醒维护者关注：

### 长期未响应的 Issue（创建超过 60 天且仍为 OPEN）

| Issue | 标题 | 创建日期 | 最后更新 | 天数 | 优先级 |
|-------|------|---------|---------|------|--------|
| [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) | 语言选择英文时中文选项显示英文 | 2026-04-03 | 2026-06-29 | 87 天 | 中 |
| [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) | 分享长图内容不全 | 2026-04-03 | 2026-06-29 | 87 天 | 中 |
| [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) | 邮箱配置测试连通性无响应 | 2026-04-03 | 2026-06-29 | 87 天 | 高 |
| [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | 定时任务无法更新 | 2026-04-03 | 2026-06-29 | 87 天 | 高 |

> ⚠️ 以上 4 条 Issue 均已被标记为 `[stale]`，但问题本身未被修复。其中 #1388（邮箱连通性）和 #1390（定时任务更新）影响核心功能，建议优先处理或至少回复用户说明计划。

### 长期未合并的 PR

| PR | 标题 | 创建日期 | 最后更新 | 天数 | 状态 |
|----|------|---------|---------|------|------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 40→42 升级 | 2026-04-02 | 2026-06-29 | 88 天 | OPEN |

> ⚠️ Electron 大版本升级涉及底层依赖变更，建议尽快完成兼容性测试并合并或关闭，避免长期悬挂。

### 建议行动

1. **本周内**：对 #2079（滚动假死）和 #2120（任务 terminated）进行复现评估，这两条影响核心用户体验且近期活跃。
2. **两周内**：清理 stale Issue，对 #1388、#1390 给出明确修复计划或关闭说明。
3. **下次发版前**：完成 Electron 升级 PR 的审核决策。

---

*本报告由 AI 基于 GitHub 公开数据自动生成，数据截止 2026-06-29。如有遗漏请以 [GitHub 仓库](https://github.com/netease-youdao/LobsterAI) 为准。*

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

# CoPaw 项目动态日报

**日期：2026-06-30 | 项目：agentscope-ai/QwenPaw**

---

## 1. 今日速览

过去 24 小时项目保持高活跃态势，共处理 **29 条 Issues**（新开/活跃 20 条、关闭 9 条）和 **50 条 PRs**（待合并 31 条、已合并/关闭 19 条）。无新版本发布，但 **v2.0.0-beta.1 的安装验证流程仍在进行中**（[#5571](https://github.com/agentscope-ai/QwenPaw/issues/5571)）。社区反馈集中在三个方面：**QwenPaw 2.0 迁移后的兼容性断裂**（Ascend-vLLM 无法连接、卡顿加剧）、**通道消息可靠性**（飞书/Telegram/DingTalk 多条链路出问题）、以及**工具执行层的稳定性**（工具结果卡片计数错误、安全策略失效）。PR 队列密度高（31 个待合并），多名贡献者正在集中补齐前端单元测试、内存管理策略和文档，测试基础设施扩建是当前最突出的工程投入方向。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日新合并或关闭的 PRs 主要推进了以下方向：

| PR | 状态 | 核心内容 |
|---|---|---|
| [#5601](https://github.com/agentscope-ai/QwenPaw/pull/5601) | **已合并** | 修复 Runtime 重构后工具审批事件不再通过流式管道下发的问题，为所有 IM 通道（飞书、企微、Telegram 等）补回 `send_approval_notification` 能力。直接解决飞书端收不到审批通知的痛点。 |
| [#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628) | **待合并** | 修复工具结果卡片计数始终显示 1 的 UI bug（[#5624](https://github.com/agentscope-ai/QwenPaw/issues/5624)），统一 Console 卡片与 Output 面板的排版计数逻辑。 |
| [#5623](https://github.com/agentscope-ai/QwenPaw/pull/5623) | **待合并** | 修复 Tool Execution Security 设为 OFF 模式后仍弹审批提示的回归 bug——Web UI 写入 `agent.json` 的字段名（`approval_level`）与 `PolicyGuardedTool` 读取的字段名（`execution_level`）不一致。 |
| [#5629](https://github.com/agentscope-ai/QwenPaw/pull/5629) | **待合并** | 修复记忆系统提示词过度触发 `memory_write` 的问题；同时在前端暴露原生/滚动上下文策略选择器，提升上下文管理的可观察性。 |
| [#5621](https://github.com/agentscope-ai/QwenPaw/pull/5621) | **待合并** | 在安全文档中新增完整 Sandbox 章节，覆盖 macOS Seatbelt / Linux Bubblewrap 的 OS 内核级沙箱隔离原理及与 Tool Guard、File Guard 的关系。 |
| [#5631](https://github.com/agentscope-ai/QwenPaw/pull/5631) | **待合并** | 更新上下文管理文档，补充滚动（scroll）上下文策略和情景记忆（episodic memory）相关内容。 |
| [#5627](https://github.com/agentscope-ai/QwenPaw/pull/5627) | **待合并** | 缓解 Windows nightly 集成测试因 2 核 IO 瓶颈导致的 httpx.ReadTimeout 失败，提升 HTTP 超时并增加单测试挂起保护。 |

**整体评估：** Runtime v2 架构迁移后的收尾修复是本周主线——审批通知、记忆策略、工具卡片计数等"最后一公里"问题正在被集中激活关闭。文档和测试基建同步跟进，项目健康度良好。

---

## 4. 社区热点

### 🔥 讨论最活跃 / 影响面最广

1. **DeepSeek V4 thinking 模式在 OpenAI 兼容端点上的两类 400 错误** — [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5573)
   - 使用第三方中转站 + DeepSeek V4 + thinking 模式的用户几乎必现 400，影响面涵盖所有通过 OpenAI 兼容协议接入 DeepSeek 的社区用户。作者提供了基于 doubao 生成的修复方案，等待核心维护者 review。

2. **MiniMax-M3 图片安全审核错误被缓存为 `rejects_media=True`** — [#5505](https://github.com/agentscope-ai/QwenPaw/issues/5505)（已关闭）
   - 一次真图片请求被内容审核拒绝后，后续图片请求被系统主动剥离——静默失败、难以排查。已合并修复。

3. **同时开两个 subagent 导致主 agent 无限快速轮询，飞书端无法打断** — [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)
   - 创建于 6 月初，至今仍未关闭，涉及任务调度与通道中断信号的深层问题。飞书通道侧缺乏取消信号传递路径。

4. **工具结果卡片计数始终显示 1** — [#5624](https://github.com/agentscope-ai/QwenPaw/issues/5624) / [#5626](https://github.com/agentscope-ai/QwenPaw/issues/5626)
   - 同一天内两人独立报告同一 bug，Affected tools 涉及 `glob_search`、`read_file` 等高频工具。已有 fix PR（[#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628)）待合并。

5. **对话记录在异常中断场景下丢失** — [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)
   - 描述宿主机重启、服务崩溃等场景下对话记录直接消失的问题，要求断点持久化机制。属架构级需求，尚无对应 PR。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue / PR | 问题描述 | Fix PR |
|---|---|---|---|
| 🔴 **高** | [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) | DeepSeek V4 thinking 模式流式 `reasoning_content` 缺失 + Schema null 类型未清洗，必现 400 错误 | 作者提交修复待 review |
| 🔴 **高** | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | 并发 subagent 导致无限快速轮询，飞书侧无打断通道 | 无 |
| 🔴 **高** | [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) | LLM 调用失败时 `post_acting` hook 被跳过，工具结果无裁剪地累积导致上下文爆炸 | [#5510](https://github.com/agentscope-ai/QwenPaw/pull/5510)（待合并） |
| 🟡 **中** | [#5624](https://github.com/agentscope-ai/QwenPaw/issues/5624) / [#5626](https://github.com/agentscope-ai/QwenPaw/issues/5626) | 工具结果卡片计数始终显示 1 | [#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628)（待合并） |
| 🟡 **中** | [#5561](https://github.com/agentscope-ai/QwenPaw/issues/5561) | 飞书通道长文本消息丢失，需降级为文件发送 | 无 |
| 🟡 **中** | [#5555](https://github.com/agentscope-ai/QwenPaw/issues/5555) | 最新版本整体卡顿加剧 | 无 |
| 🟡 **中** | [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | 1.1.8+ 版本无法连接自定义 Ascend-vLLM 模型（1.1.7 正常） | 无 |
| 🟡 **中** | [#5623](https://github.com/agentscope-ai/QwenPaw/issues/5623)（源自 UI bug） | Tool Security OFF 模式仍触发审批 | [#5623](https://github.com/agentscope-ai/QwenPaw/pull/5623)（待合并） |
| 🟡 **中** | [#5603](https://github.com/agentscope-ai/QwenPaw/issues/5603) | 钉钉通道卡片流式输出逐字动画，高频长回复场景效率极低 | 无 |
| 🟡 **中** | [#5587](https://github.com/agentscope-ai/QwenPaw/issues/5587) | Qwen-Image 工具安装失败 | 无 |
| 🟠 **低** | [#5591](https://github.com/agentscope-ai/QwenPaw/issues/5591) | 重复日志 `GET /api/console/inbox/events` 刷屏终端（已关闭） | 已关闭 |
| ✅ **已修** | [#5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) | MiniMax-M3 图片审核误判导致后续视觉请求被静默剥离 | 已修复 |
| ✅ **已修** | [#5601](https://github.com/agentscope-ai/QwenPaw/pull/5601) | Runtime 重构后 IM 通道丢失工具审批通知 | 已合并 |
| ✅ **已修** | [#5543](https://github.com/agentscope-ai/QwenPaw/issues/5553) | Function schema `"type": "null"` 导致第三方中转模型拒绝请求 | 已修复 |

---

## 6. 功能请求与路线图信号

| Issue | 功能请求 | 关联 PR / 判断 |
|---|---|---|
| [#5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) | 模型自动降级：主模型限流/超时 → 自动切换备选 | 与 [#5527](https://agentscope-ai/CoPaw/issues/5527)（已关闭，询问 agentscope 2.0 动态切换时间表）高度相关。**大概率纳入 v2.x 规划**。 |
| [#5588](https://github.com/agentscope-ai/QwenPaw/issues/5588) | 记忆搜索支持专用 Reranker 两阶段检索 | 无 PR，但方向与记忆系统升级趋势匹配。 |
| [#5615](https://github.com/agentscope-ai/QwenPaw/issues/5615) | 纯文本模型 + 图片上传时自动调用视觉模型生成描述 | 无 PR，属体验增强类需求。 |
| [#5609](https://github.com/agentscope-ai/QwenPaw/issues/5609) | 支持自定义模型协议端点（如 image generation），不仅限于 chat/completions | 无 PR，影响免费模型可用性。 |
| [#5593](https://github.com/agentscope-ai/QwenPaw/issues/5593) | DingTalk 通道支持可预览图片消息而非降级为文件 | 无 PR。 |
| [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622) | Windows 桌面托盘图标支持后台运行 | 无 PR。 |
| [#5630](https://github.com/agentscope-ai/QwenPaw/issues/5630) | Telegram 通道支持自定义 BaseURL | 无 PR。 |
| [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) | 对话记录断点持久化，异常中断后可恢复 | 无 PR，架构级需求。 |
| [#5510](https://github.com/agentscope-ai/QwenPaw/pull/5510) | 工具返回结果在执行层加入硬上限（context explosion 防御） | 待合并，直接对应 [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342)。 |
| [#5296](https://github.com/agentscope-ai/QwenPaw/pull/5296) | ADBPG 长期记忆移除 SQL 直连模式，仅保留 REST API | 待合并，长期记忆架构方向性调整。 |

**路线图判断：** v2.0 正式版的注意力集中在**通道可靠性修复**（审批通知、消息投递）和**执行层稳定性**（工具结果截断、子agent 调度、上下文记忆策略）。模型自动降级、自定义端点协议两个需求用户呼声较高，可能是 v2.1 的候选特性。

---

## 7. 用户反馈摘要

**痛点集中区：**

- **QwenPaw v2 迁移后回归问题明显**：多位用户反映升级到 1.1.8+ 后出现 Ascend-vLLM 完全无法连接（[#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584)）、操作卡顿加剧（[#5555](https://github.com/agentscope-ai/QwenPaw/issues/5555)）等退化。维护者需在 v2.0 GA 前做好版本兼容性回归测试覆盖。
- **飞书通道多项不可靠**：长文本消息丢失（[#5561](https://github.com/agentscope-ai/QwenPaw/issues/5561)）、工具审批无法通知到飞书、并发 subagent 时飞书端无法中断任务（[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)）。飞书是企业用户的核心入口，建议建立专门的飞书通道测试矩阵。
- **钉钉卡片流式输出效率低**（[#5603](https://github.com/agentscope-ai/QwenPaw/issues/5603)）：逐字动画效果导致长报告等待时间过长。用户建议改为批量推送或局部刷新。
- **DeepSeek 前缀缓存命中率仅 ~95%**（[#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)，创建于 4 月，至今未关闭）：5% 的 cache miss 在 DeepSeek 计费体系下意味着 4-10 倍成本差异，用户期望能在协议层优化 prefix caching 命中率。

**满意/中性信号：**

- DeepSeek V4 thinking 模式 bug 报告中，用户主动基于豆包生成并验证了修复方案再提交，说明社区技术参与度高。
- 大量前端单元测试 PR（[#5409](https://github.com/agentscope-ai/QwenPaw/pull/5409)、[#5434](https://github.com/agentscope-ai/QwenPaw/pull/5434)、[#5438](https://github.com/agentscope-ai/QwenPaw/pull/5438)、[#5422](https://github.com/agentscope-ai/QwenPaw/pull/5422)、[#5423](https://github.com/agentscope-ai/QwenPaw/pull/5423)）展示出测试基础设施正在系统性增强，有助于遏制后续回归。

---

## 8. 待处理积压

| Issue/PR | 创建日期 | 说明 |
|---|---|---|
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) — DeepSeek 前缀缓存命中率偏低 | 2026-04-27 | 创建超 2 个月仍无官方回复。计费成本差异巨大，影响所有 DeepSeek 用户。 |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) — 并发 subagent 无限轮询 + 飞书无法打断 | 2026-06-01 | 创建近 1 个月，涉及核心调度逻辑，需架构层面评估。 |
| [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) — 工具结果尺寸硬上限缺失导致上下文爆炸 | 2026-06-20 | 已有 fix PR [#5510](https://github.com/agentscope-ai/QwenPaw/pull/5510) 待合并，建议优先 review。 |
| [#5442](https://github.com/agentscope-ai/QwenPaw/pull/5442) — Mission Mode 集成 Runtime v2 | 2026-06-23 | 长期开放，涉及 mission 模式全面改造，建议明确是否在 v2.0 scope 内。 |
| [#5510](https://github.com/agentscope-ai/QwenPaw/pull/5510) — 工具响应硬上限防御 | 2026-06-25 | 关联高危 Issue #5342，建议优先合并。 |
| [#5

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-06-30 | 数据窗口：过去 24 小时**

---

## 1. 今日速览

ZeroClaw 今日活跃度处于**高位**，Issues 与 PR 各录得 50 条更新，社区贡献节奏紧凑。新开/活跃 Issue 达 43 条，显示问题涌入速度仍高于消化速度；PR 待合并积压 40 条，已合并/关闭仅 10 条，**合并通道存在明显瓶颈**。无新版本发布，项目处于 v0.8.3 密集开发期——WASM 插件运行时、provider 消息序列化、SOP 程序化记忆、多入口工具策略统一等多个大型 RFC 与实现 PR 并行推进，技术债务清理（153 commits 批量回滚恢复、CI 安全加固）也在同步进行。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 集中在**文档修正与小范围兼容性修复**，缺乏大型功能合入：

| PR | 状态 | 内容 |
|---|---|---|
| **#8436** [CLOSED] | 已关闭 | 修正 runtime 历史管理文档，补充 `max_history_messages` 硬上限说明 |
| **#8441** [CLOSED] | 已关闭 | 为兼容 provider 的 `NativeMessage` 增加 `name` 字段，修复 Groq 原生工具调用 400 错误 |
| **#8379** 对应 Issue | 已关闭 | WhatsApp Web 被动群聊上下文功能（Issue 关闭，实现应已合入） |
| **#8327** 对应 Issue | 已关闭 | 原生工具调用中 `[IMAGE:data:...]` 标记以纯文本发送导致 token 膨胀问题 |
| **#6841** 对应 Issue | 已关闭 | `vision_provider` 被静默忽略、入站图片被路由到 fallback provider 的问题 |
| **#2128** 对应 Issue | 已关闭 | Cron/heartbeat 任务在 LLM 返回 `NO_REPLY` 时仍向频道发送字面量文本 |

**整体判断**：今日合入以"修缝"为主，v0.8.3 的核心功能（WASM 插件运行时、provider 序列化重构、SOP 引擎）仍停留在 PR 阶段，尚未进入稳定集成。

---

## 4. 社区热点

以下 Issues 评论数最高，反映了当前社区最集中的诉求：

### 🔥 #5600 — Kimi-code provider 流式工具调用报错（11 条评论）
- **链接**：<https://github.com/zeroclaw-labs/zeroclaw/issues/5600>
- **标签**：P1 / bug / provider:kimi / risk:high
- **核心问题**：使用 kimi-code provider 进行流式聊天工具调用时，API 返回 400，原因是 `thinking is enabled but reasoning_content is missing in assistant tool call`。
- **分析**：这是**兼容 provider 消息序列化**类问题的典型代表，与 #8360 tracker（v0.8.3 provider 与原生工具消息序列化）直接相关。社区对国产/兼容 provider 的流式 reasoning + 工具调用组合场景需求强烈。

### 🔥 #8054 — 系统提示中工具可用性需与所有入口点的有效工具匹配（9 条评论）
- **链接**：<https://github.com/zeroclaw-labs/zeroclaw/issues/8054>
- **标签**：P1 / bug / security / tool / risk:high / status:blocked
- **核心问题**：#8053 修复了直接 runtime agent 路径的系统提示工具声明，但同一类 mismatch 仍存在于 channel、gateway、WebSocket、multimodal、`/think` 等其他入口点。
- **分析**：这是**多入口工具策略统一**的核心问题，直接关联到 PR #8496（集中化 deferred-MCP 访问策略）。该 Issue 被标记为 `status:blocked`，说明修复依赖前置工作。

### 🔥 #6909 — RFC: 桌面屏幕交互与输入控制的 Computer-use 支持（6 条评论）
- **链接**：<https://github.com/zeroclaw-labs/zeroclaw/issues/6909>
- **标签**：P2 / RFC / tool:browser / desktop / risk:high
- **核心诉求**：为 ZeroClaw 增加截图捕获和鼠标/键盘事件发送能力，追赶 OpenAI Codex 和 openclaw/hermes 的 computer-use 功能。
- **分析**：社区对"agent 操作桌面 GUI"有明确需求，但实现涉及安全沙箱、WASM 插件硬件访问等深层架构问题，短期内更可能以 RFC 讨论为主。

### 🔥 #7218 — RFC: 多 agent 安装的 A2A agent 发现机制（5 条评论）
- **链接**：<https://github.com/zeroclaw-labs/zeroclaw/issues/7218>
- **标签**：P2 / RFC / domain:architecture / risk:high
- **核心诉求**：定义 `/.well-known/agent-card.json` 在单 origin 多 agent 场景下的发现协议，为跨 "claw" 类系统互操作奠定基础。

### 🔥 #7800 — ZeroCode 代码帮助/快捷键在 macOS 上误导或不可达（5 条评论）
- **链接**：<https://github.com/zeroclaw-labs/zeroclaw/issues/7800>
- **标签**：P2 / bug / zerocode / risk:medium
- **核心问题**：ZeroCode TUI 的 Code/Chat 帮助和快捷键行为在 macOS 上存在误导性，部分操作在当前输入状态下不可达。
- **分析**：反映了 ZeroCode 桌面端用户体验的持续打磨需求。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

### 🔴 S1 — 工作流阻断

| Issue | 问题 | Fix PR |
|---|---|---|
| **#5600** | Kimi-code provider 流式工具调用 400 错误 | 无直接 fix PR，关联 #8360 tracker |
| **#7756** | OpenAI Responses/reasoning 和 Anthropic 轮次中原生/MCP 工具不可用 | #8053 已修复直接路径，#8054 追踪其余入口点 |
| **#8505** | Telegram channel 无法配置，bot 不响应 | 无 |
| **#6841** | `vision_provider` 被静默忽略 | 已关闭（今日） |

### 🟠 S2 — 行为降级

| Issue | 问题 | Fix PR |
|---|---|---|
| **#8410** | Channel 任务缺少"故意不回复"的一等公民语义 | 无 |
| **#8334** | `skills install/list/remove` 操作 data_dir，多 agent 运行时未加载 | 无 |
| **#8312** | `fill-translations` 泄漏修复残留陈旧翻译映射条目 | 无 |
| **#7904** | compact prompt 模式下 `always: true` SKILL.md frontmatter 不再生效 | 无 |
| **#7800** | ZeroCode 快捷键在 macOS 上误导/不可达 | 无 |

### 🟡 S3 — 轻微问题

| Issue | 问题 | Fix PR |
|---|---|---|
| **#6157** | Nextcloud Talk 使用错误的 bot 消息 API | 无 |

**关键观察**：多个 S2 级别 Bug 涉及**多 agent 运行时**（#8334、#8410），说明 v0.8.0 引入的多 agent 架构在 channel 任务分发、技能管理、静默回复等场景下仍存在语义缺口。

---

## 6. 功能请求与路线图信号

结合已有 PR 和 RFC，以下功能**极有可能纳入 v0.8.3 或 v0.9.0**：

| 方向 | 依据 | 成熟度 |
|---|---|---|
| **WASM 插件运行时默认开启** | RFC #8135 + Tracker #7314 + 多个 WASM 相关 PR | RFC 阶段，实现并行推进 |
| **SOP 程序化记忆引擎** | PR #8506、#8509、#8461 密集提交 | 实现阶段，多个 stacked PR |
| **Inkbox 原生频道（email/SMS/voice/iMessage）** | PR #8384（XL 规模） | 实现阶段 |
| **GitHub 频道 + SOP 入口** | PR #8504（XL 规模） | 实现阶段 |
| **Web 仪表板内应用升级 + 监督重启** | RFC #8170 | RFC 阶段 |
| **MCP resources-as-context + pinning + named-prompt** | PR #8508（stacked on #8403） | 实现阶段 |
| **Computer-use 桌面交互** | RFC #6909 | 早期 RFC |
| **A2A agent 发现** | RFC #7218 | 早期 RFC |
| **CI 安全加固（CodeQL/Trivy/SBOM）** | RFC #8057 + #8056 | RFC 阶段 |
| **OTel LLM/Tool 内容策略** | RFC #8462 | 早期 RFC |

**路线图信号**：v0.8.3 的核心叙事是 **"WASM-first 插件运行时 + provider 消息序列化重构 + SOP 程序化记忆"**，今日多个大型 PR（#8384、#8504、#8508、#8461、#8506、#8509）均围绕此展开。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点：

### 😤 不满意 / 痛点

1. **兼容 provider 体验割裂**：Kimi-code（#5600）、Groq（#8441/#7909）等兼容 provider 在流式工具调用、原生工具调用场景下频繁报错，用户需要逐个 provider 打补丁。
2. **多 agent 运行时功能残缺**：`skills install` 操作 data_dir 但多 agent 运行时根本不加载（#8334），"拉取技能并使用"的主流程在多 agent 安装下直接断裂。
3. **Telegram 配置体验差**：用户按 quickstart 和 zerocode 配置后 bot 仍不响应，`channels doctor` 声称频道未设置（#8504），说明配置验证与实际运行状态不一致。
4. **Channel 任务无法静默**：条件性 channel 任务（"有新邮件就通知，否则保持沉默"）在无新消息时仍发送可见回复（#8410），影响群聊体验。
5. **ZeroCode macOS 体验**：快捷键行为在 macOS 上具有误导性（#7800），TUI 的跨平台适配仍需打磨。

### 👍 满意 / 期待

1. **SOP 程序化记忆**方向获得多个贡献者并行推进（#8506、#8509、#8461），社区对"agent 可创建、检查、隔离、应用 SOP 提案"的能力表示期待。
2. **Inkbox 频道**（#8384）提供 email/SMS/voice/iMessage 统一身份，用户反馈积极。
3. **Web 仪表板内升级**（RFC #8170）解决了用户需要离开 dashboard 才能检查/应用更新的痛点。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应或处于阻塞状态，提醒维护者关注：

### 🔴 长期未响应的重要 Issue

| Issue | 创建日期 | 状态 | 风险 |
|---|---|---|---|
| **#5600** — Kimi-code 流式工具调用报错 | 2026-04-10 | 开放 / 11 评论 | P1，已持续 **81 天**，影响所有 kimi-code 用户 |
| **#6074** — 恢复 153 个被批量回滚的 commits | 2026-04-24 | 开放 / 2 评论 | 涉及已审核合入的 bug 修复和功能丢失，已持续 **67 天** |
| **#6157** — Nextcloud Talk bot 消息 API 错误 | 2026-04-27 | 开放 / 4 评论 | 已持续 **64 天** |
| **#6557** — v0.8.0 运行时模型切换与 provider 结构协调 | 2026-05-10 | 开放 / 4 评论 | 直接关联 v0.8.0 发布质量，已持续 **51 天** |
| **#6140** — 混合 skills + WASM 工具插件 | 2026-04-26 | 开放 / 3 评论 | 已持续 **65 天**，标记 `status:no-stale` |

### 🟠 待合并的重要 PR

| PR | 创建日期 | 状态 | 内容 |
|---|---|---|---|
| **#8384** — Inkbox 原生频道 | 2026-06-27 | 开放 / XL | 大型功能 PR，需 maintainer review |
| **#8504** — GitHub 频道 + SOP 入口 | 2026-06-29 | 开放 / XL | 大型功能 PR |
| **#8496** — 集中化 deferred-MCP 访问策略 | 2026-06-29 | 开放 / L | 修复 #8054 Surface 1(b)，需 author action |
| **#8440** — Telegram 频道 inbound debounce | 2026-06-28 | 开放 / M | 需 author action |
| **#8149** — WASM plugin host mutex poison 容忍 | 2026-06-22 | 开放 / XS | 需 author action |
| **#8148** — Anthropic streaming 序列化错误传播 | 2026-06-22 | 开放 / XS | 需 author action |

### ⚠️ 特别提醒

- **#6074**（153 commits 恢复审计）已开放 67 天，涉及大量已审核合入代码的恢复工作，建议维护者明确处理时间表或关闭。
- **#5600**（Kimi-code 报错）作为 P1 问题已持续 81 天无 fix PR，建议至少给出 workaround 或纳入 #8360 tracker 的修复范围。
- 多个标记 `needs-author-action` 的 PR（#8440、#8149、#8148、#8496）可能因作者未及时响应而长期挂起，建议 maintainer 设定超时关闭策略。

---

*日报生成时间：2026-06-30 | 数据来源：GitHub Issues/PR API | 分析窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*