# OpenClaw 生态日报 2026-06-08

> Issues: 296 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-08 00:41 UTC

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



# OpenClaw 项目动态日报 — 2026-06-08

---

## 1. 今日速览

OpenClaw 今日处于**高活跃、高吞吐量**状态：过去 24 小时内 Issues 更新 296 条（新开/活跃 177，关闭 119），PR 更新 500 条（待合并 374，已合并/关闭 126）。无新版本发布，项目处于快速迭代期。Issue 关闭率约 40%（119/296），PR 合并/关闭率约 25%（126/500），积压的待合并 PR 数量（374）持续偏高，维护者审查压力较大。整体来看，社区贡献旺盛，但 PR 队列消化速度跟不上提交速度。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 126 条，以下列举具有代表性的已合并/关闭项：

| PR | 说明 |
|---|---|
| [#91252](https://github.com/openclaw/openclaw/pull/91252) | **fix(skills)**: 修复 chokidar 文件描述符泄漏——每个 SKILL.md 打开一个持久 FD 且永不关闭，随安装技能数量线性累积。已合并。 |
| [#88234](https://github.com/openclaw/openclaw/issues/88234) | **fix(feishu)**: 修复飞书消息投递时 `TypeError: Cannot read properties of undefined (reading 'run')` 崩溃。已关闭。 |
| [#84216](https://github.com/openclaw/openclaw/issues/84216) | **feat(ui)**: Control UI 最近会话列表增加折叠下拉，优化小屏幕体验。已关闭。 |
| [#71932](https://github.com/openclaw/openclaw/issues/71932) | **fix(auth)**: 修复子代理使用 `google/gemini-3.1-flash-lite-preview` 时代理生成 404 的问题（缺少 `models/` 前缀）。已关闭。 |
| [#74822](https://github.com/openclaw/openclaw/issues/74822) | **fix(gateway)**: Telegram 会话中反复出现 "Something went wrong" 需手动重启的问题。已关闭。 |
| [#73802](https://github.com/openclaw/openclaw/issues/73802) | **fix(discord)**: Discord exec approval 卡片/按钮未送达的回归问题。已关闭。 |
| [#76724](https://github.com/openclaw/openclaw/issues/76724) | **fix(mcp)**: MCP 工具握手成功（200 OK）但 Agent 端未发现的回归。已关闭。 |
| [#69778](https://github.com/openclaw/openclaw/issues/69778) | **fix(gateway)**: Gateway 重启后恢复 24 小时前中断的 CLI 子代理任务并自动执行。已关闭。 |

**整体推进评估**：今日合并/关闭集中在飞书插件稳定性、Discord/Telegram 渠道修复、MCP 工具发现、UI 体验优化等方向，项目在**渠道适配健壮性**和**资源泄漏修复**方面向前迈进了一步。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

**1. [#25592](https://github.com/openclaw/openclaw/issues/25592) — 工具调用间文本泄漏到消息渠道（27 条评论）**
- 🔴 P1 | 安全影响 | 消息丢失影响 | 钻石龙虾评级
- Agent 在工具调用之间产生的文本（错误处理、处理确认、旁白）被路由到 Slack、iMessage 等消息渠道，构成严重的 UX 问题和安全风险。
- **背后诉求**：用户需要工具调用中间文本与最终回复的严格区分，防止内部处理输出泄露到外部渠道。

**2. [#88838](https://github.com/openclaw/openclaw/issues/88838) — SQLite 会话/迁移追踪（18 条评论）**
- 🟡 P2 | 会话状态影响 | 离岸潮汐池评级
- 将会话/转录运行时状态迁移到 SQLite，通过分支抽象接缝以小 PR 序列推进，避免一次性高风险重写。
- **背后诉求**：社区希望核心数据层迁移更加可控和可审查。

**3. [#88312](https://github.com/openclaw/openclaw/issues/88312) — Codex 应用服务器回合完成停滞回归（14 条评论，3 个赞）**
- 🔴 P1 | 回归 | 会话状态+消息丢失影响 | 白金寄居蟹评级
- 2026.5.27 起，多工具 Agent 回合在 Codex 上稳定失败，报 "Codex stopped before confirming the turn was complete"。
- **背后诉求**：这是一个已修复过又回归的问题（原 #84076 由 #85107 修复），用户对反复回归感到不满。

**4. [#29387](https://github.com/openclaw/openclaw/issues/29387) — agentDir 中引导文件被静默忽略（14 条评论，5 个赞）**
- 🔴 P1 | Bug | 会话状态+安全影响 | 钻石龙虾评级
- 放在 `agentDir` 中的 SOUL.md、AGENTS.md 等引导文件不生效，只有 `workspace` 目录下的文件被加载。
- **背后诉求**：多代理配置用户需要每个代理独立的引导文件，当前行为与预期不符。

**5. [#90991](https://github.com/openclaw/openclaw/issues/90991) — Cron 触发污染全局运行时状态（13 条评论）**
- 🔴 P1 | 认证提供者影响 | 白金寄居蟹评级
- Cron 调度触发器污染全局运行时状态，导致瞬时系统级过载失败。
- **背后诉求**：定时任务与会话隔离是生产部署的基础需求。

### 🔥 热门 PRs

**1. [#91246](https://github.com/openclaw/openclaw/pull/91246) — WebChat 媒体完成交接修复**
- 🔴 P1 | 钻石龙虾评级 | 待维护者审查
- 修复音乐/图片/视频任务的媒体完成事件未正确传递 `MEDIA:<path-or-url>` 指令的问题。

**2. [#90101](https://github.com/openclaw/openclaw/pull/90101) — 运行时自上下文配置和工具**
- 🟡 P2 | 白金寄居蟹评级 | 待维护者审查 | 大型 PR
- 实现运行时自上下文配置切片，支持运行时/卸载/扩展/成本感知。

**3. [#89045](https://github.com/openclaw/openclaw/pull/91076) — 恢复终端会话状态**
- 🔴 P1 | 白金寄居蟹评级 | 待维护者审查
- 修复群聊会话卡在 `failed` 状态后静默丢弃所有后续消息的问题（#86827）。

**4. [#89659](https://github.com/openclaw/openclaw/pull/89659) — 飞书发送限流重试**
- 🔴 P1 | 黄金虾评级 | 需证明
- 为飞书 API 发送限流错误码 230020/230006 添加重试逻辑（最多 2 次，线性退避）。

---

## 5. Bug 与稳定性

### 🔴 严重（P1）— 需立即关注

| Issue | 描述 | 影响 | Fix PR |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏到消息渠道 | 安全 + 消息丢失 | 无 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex 回合完成停滞（2026.5.27 回归） | 会话状态 + 消息丢失 | 无 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | agentDir 引导文件被静默忽略 | 会话状态 + 安全 | 无 |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | Cron 污染全局运行时状态 | 认证提供者 | 无 |
| [#91212](https://github.com/openclaw/openclaw/issues/91212) | Gateway 重启后 delivery-recovery 在通道传输就绪前开始投递 | 消息丢失 | 无 |
| [#90639](https://github.com/openclaw/openclaw/issues/90639) | safeguard compaction 模式允许会话增长到上下文上限 | 会话状态 + 消息丢失 | 无 |
| [#90428](https://github.com/openclaw/openclaw/issues/90428) | exec 工具在 WSL2 + Node 24 上触发 SIGTERM | 回归 | 无 |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | exec 工具不继承 skills env 变量 | 安全 + 认证 | 有开放 PR |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | sandbox workspaceAccess=none 时工作区只读 | 会话状态 + 安全 | 无 |
| [#38091](https://github.com/openclaw/openclaw/issues/38091) | WebSocket reconnect 导致会话 terminated | 会话状态 + 消息丢失 | 无 |
| [#38622](https://github.com/openclaw/openclaw/issues/38622) | 工作区文件注入不跟随符号链接 | 会话状态 + 安全 | 有开放 PR |
| [#38907](https://github.com/openclaw/openclaw/issues/38907) | ACP 桥接会话失败 | 会话状态 + 消息丢失 | 无 |

### 🟡 中等（P2）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#87326](https://github.com/openclaw/openclaw/issues/87326) | Telegram 流式传输中间文本块被静默覆盖 | 无 |
| [#87136](https://github.com/openclaw/openclaw/issues/87136) | 切换模型时 compaction 绝对 token 阈值失效 | 无 |
| [#64664](https://github.com/openclaw/openclaw/issues/64664) | Gateway 重启后审批丢失，按钮显示过期错误 | 无 |
| [#57256](https://github.com/openclaw/openclaw/issues/57256) | openclaw status 错误报告 mem0 不可用 | 有开放 PR |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM 嵌入式运行中止 memory_search 工具调用 | 无 |

### 稳定性趋势

- **回归问题突出**：#88312（Codex 回合停滞）、#31583（exec env 继承）、#38439（webchat avatar 404）均为回归，说明测试覆盖或发布前验证存在缺口。
- **消息丢失是最高频影响标签**：至少 8 个 P1/P2 Issue 标记了 `impact:message-loss`，涉及 Telegram、Slack、Feishu、WebChat 多个渠道。
- **安全相关 Issue 积压**：#25592、#29387、#29736、#37634、#38622 等安全影响 Issue 长期处于开放状态。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 相关 PR | 纳入可能性 |
|---|---|---|---|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) | Gateway-lite 模式（无 AI 轻量部署） | 无 | 中 — 架构级变更 |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | 话题会话族（多命名上下文通道） | 无 | 中 — 会话模型扩展 |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) | 预压缩 memory flush 的有界/验证追加语义 | 无 | 高 — 与 compaction 改进相关 |
| [#90328](https://github.com/openclaw/openclaw/pull/90328) | WebUI 模型选择器展示 Agent 运行时 | PR 开放中 | 高 — PR 已就绪 |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | SQLite 会话迁移 | 无 | 高 — 讨论活跃 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | 子代理完成后扩展钩子 | 无 | 中 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 工具追加模式 | 有开放 PR | 高 — 有 PR 关联 |
| [#33962](https://github.com/openclaw/openclaw/issues/33962) | slug-generator 使用轻量模型 | 无 | 中 — 3 个赞 |
| [#40215](https://github.com/openclaw/openclaw/issues/40215) | /usage 显示累计上下文使用量 | 无 | 中 — 3 个赞 |
| [#33413](https://github.com/openclaw/openclaw/issues/33413) | Slack 工具级进度显示 | 无 | 低 |

**路线图信号总结**：社区对**会话隔离与状态管理**（SQLite 迁移、话题会话族、compaction 改进）和**渠道投递可靠性**（消息丢失修复、限流重试）的需求最为集中。Gateway-lite 轻量部署模式代表了企业级用户的诉求。

---

## 7. 用户反馈摘要

### 😤 痛点

1. **消息丢失无处不在**：多个渠道（Telegram、Slack、Feishu、WebChat）用户报告消息在流式传输、工具调用间、Gateway 重启后丢失。这是用户最不满意的领域。
2. **回归反复出现**：#88312 用户明确指出 "2026.5.26 completes the same turns"，表明版本间行为不一致，用户对质量保障信心下降。
3. **安全顾虑**：工具调用间文本泄漏（#25592）、exec 环境变量不继承（#31583）、引导文件被忽略（#29387）等安全问题长期未解决。
4. **Cron/定时任务不可靠**：#90991 用户报告 Cron 污染全局状态导致系统级过载，#40001 用户报告隔离 cron 会话破坏共享文件。
5. **审批流程体验差**：#64664 用户报告 Gateway 重启后 Telegram 审批按钮失效，显示 "unknown or expired approval id"。

### 😐 使用场景

- **多代理配置**：用户配置独立 `agentDir` 实现代理隔离（#29387），但当前不支持。
- **多模型切换**：用户在会话中切换不同上下文窗口的模型（#87136），compaction 参数不适配。
- **企业级部署**：用户需要无 AI 的轻量 Gateway 模式用于确定性部署（#86881）。
- **飞书集成**：多个 Issue 和 PR 涉及飞书（消息投递崩溃、限流重试、typing indicator、wiki 分页），说明飞书是国内用户的重要渠道。

### 😊 满意点

- UI 改进得到正面响应：#84216（会话列表折叠，3 个赞）、#40215（上下文使用量显示，3 个赞）。
- 子代理工具策略转发（#78441）等安全增强功能获得社区认可。

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR 需维护者关注：

### 🔴 长期开放的高优先级 Issue（>30 天无实质进展）

| Issue | 创建日期 | 评论数 | 状态 |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) — 工具调用间文本泄漏 | 2026-02-24 | 27 | stale，需安全审查 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) — agentDir 引导文件忽略 | 2026-02-28 | 14 | stale，需维护者审查 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) — 子代理完成钩子 | 2026-02-21 | 12 | stale |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) — exec env 不继承 | 2026-03-02 | 12 | stale，有开放 PR |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) — exec approvals 路径忽略状态根 | 2026-02-28 | 10 | stale，需安全审查 |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) — sandbox 工作区只读 | 2026-03-06 | 9 | stale，6 个赞 |
| [#38622](https://github.com/openclaw/openclaw/issues/38622) — 符号链接不跟随 | 2026-03-07 | 5 | stale，有开放 PR |
| [#38907](https://github.com/openclaw/openclaw/issues/38907) — ACP 桥接会话失败 | 2026-03-07 | 5 | stale |

### 📋 积压 PR 风险

- **待合并 PR 374 条**：大量 PR 处于 "needs proof" 或 "waiting on author" 状态，建议维护者集中处理 "ready for maintainer look" 标签的 PR。
- **高价值待审 PR**：
  - [#91246](https://github.com/openclaw/openclaw/pull/91246) — WebChat 媒体交接（P1，钻石龙虾）
  - [#89045](https://github.com/openclaw/openclaw/pull/89045) — 终端会话状态恢复（P1，白金寄居蟹）
  - [#90101](https://github.com/openclaw/openclaw/pull/90101) — 运行时自上下文（P2，白金寄居蟹，大型 PR）
  - [#78441](https://github.com/openclaw/openclaw/pull/78441) — 子代理工具策略转发（P2，白金寄居蟹）

---

> **日报总结**：OpenClaw 今日社区活跃度极高，但面临消息丢失、回归反复、安全 Issue 积压三大挑战。建议维护者优先处理 P1 安全相关 Issue、推进 "ready for maintainer look" 的高价值 PR 合并、建立回归测试机制防止已修复问题再次出现。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告
**报告日期：2026-06-08 | 分析项目数：13**

---

## 1. 生态全景

当前个人 AI 助手开源生态正处于**高并发迭代期**：13 个主要项目中，8 个在过去 24 小时内有实质性社区活动（Issues + PR），合计产生超过 500 次 Issue 更新和 800 次 PR 更新，但仅有 1 个项目（PicoClaw）有版本发布，其余均处于功能积累和质量收敛阶段。**消息渠道适配（Telegram、飞书、Discord、Slack、WhatsApp）是所有项目的最大公约数**，会话隔离与上下文管理（compaction、SQLite 迁移、工具结果截断）正在成为第二代架构的核心议题。安全议题（沙箱隔离、权限校验、SSRF 防护、路径穿越）从边缘走向主流，6 个以上项目同时报告了安全相关 Issue。整体生态呈现出"**OpenClaw 作为参照中心向外辐射，各分叉项目差异化竞争**"的格局。

---

## 2. 各项目活跃度对比

| 项目 | ⭐ Stars 级别 | Issues 更新 | PR 更新 | Release | 健康度 | 一句话评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 旗舰级 | 296（开177/闭119） | 500（待374/合126） | 无 | ⭐⭐⭐ | 吞吐量最大，但积压严重 |
| **Hermes Agent** | 大型 | 50（开48/闭2） | 50（待44/合6） | 无 | ⭐⭐⭐ | Desktop+多平台是核心方向 |
| **ZeroClaw** | 中型 | 50（开33/闭17） | 50（待39/合11） | 准备 v0.8.0 | ⭐⭐⭐⭐ | v0.8.0 冲刺，zerocode TUI 亮眼 |
| **IronClaw** | 中型 | 50（开42/闭8） | 38（待22/合16） | 无 | ⭐⭐⭐ | Reborn 架构冲刺，一人驱动 |
| **NanoBot** | 中型 | 7（开5/闭2） | 18（待14/合4） | 无 | ⭐⭐⭐⭐ | 安全加固密集期 |
| **PicoClaw** | 小型 | 21（开4/闭17） | 19（待7/合12） | ✅ nightly | ⭐⭐⭐⭐ | 质量收敛，积压快消化 |
| **NanoClaw** | 小型 | 3（新开） | 9（待6/合3） | 无 | ⭐⭐⭐ | 权限安全需关注 |
| **Moltis** | 小型 | 1（新开） | 3（全待合） | 无 | ⭐⭐⭐ | 低活跃，聚焦 Telegram |
| **CoPaw** | 小型 | 5（新开） | 2（全待合） | 无 | ⭐⭐ | 版本回归 Bug 未修 |
| **LobsterAI** | 小型 | 15（全 stale） | 0 | 无 | ⭐⭐ | 维护静默，积压 60 天+ |
| **NullClaw** | — | 无活动 | — | — | — | 休眠 |
| **TinyClaw** | — | 无活动 | — | — | — | 休眠 |
| **ZeptoClaw** | — | 无活动 | — | — | — | 休眠 |

> **活跃项目占比：62%（8/13），健康度 ≥3星占比：62.5%（5/8），生态整体活跃但分化明显。**

---

## 3. OpenClaw 在生态中的定位

### 优势

- **规模碾压**：OpenClaw 今日 Issues 更新（296）超过其余所有活跃项目之和（197），PR 更新（500）是第二名 NanoBot（18）的 27 倍，确立事实上的生态中心地位。
- **渠道覆盖最广**：从日报可见，OpenClaw 同时维护 Telegram、Slack、Discord、iMessage、飞书、WhatsApp、WebChat、MCP 等多个渠道，没有任何一个竞品的渠道矩阵可与之匹敌。
- **影响力辐射**：多个竞品的 PR 描述中直接引用 OpenClaw 的修复方案（如 Hermes Agent 的 #41610 "from OpenClaw"、NanoBot 的 channel 层修复），证明 OpenClaw 已成为技术参照基准。

### 技术路线差异

| 维度 | OpenClaw | 其他项目典型路线 |
|---|---|---|
| **架构** | Gateway 中心化 + Skills 插件体系 | PicoClaw 用 Go 注重嵌入式；IronClaw 用 Rust 走 Reborn 重写路线；NanoBot 自研沙箱化 |
| **会话模型** | File-based workspace | ZeroClaw 走 zerocode TUI-first；Hermes Agent 走 Desktop-first；IronClaw 走 DB-backed |
| **渠道策略** | 全渠道覆盖 | Moltis 专注 Telegram；NanoBot 聚焦飞书/WhatsApp 企业 IM |

### 社区规模对比

OpenClaw 今日活跃的 P1/P2 Issues 数量（约 12 条）已接近 NanoBot、PicoClaw 等小型项目的全量 Issues 之和，其 374 个待合并 PR 的积压量更是其他项目待合 PR 总量（155）的 2.4 倍——规模既是优势也是治理挑战。

---

## 4. 共同关注的技术方向

以下方向横跨 3 个以上项目，反映行业共性挑战：

| 共同方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话上下文管理** | OpenClaw、NanoBot、ZeroClaw、Moltis、Hermes Agent | compaction 策略优化（#87326、#87136）、SQLite 会话迁移（#88838）、工具结果截断（Moltis #1089/microcompact（NanoBot #4238） |
| **渠道消息投递可靠性** | OpenClaw、NanoBot、PicoClaw、Moltis、Hermes Agent、ZeroClaw | 流式传输文本丢失、Gateway 重启后消息投递失败、限流重试、跨渠道双发/漏发 |
| **安全与沙箱隔离** | NanoBot、PicoClaw、ZeroClaw、NanoClaw、IronClaw | bwrap 沙箱配置（#4236/4237）、SSRF 防护（#4123）、权限校验缺失（#2711）、路径穿越（#4119）、符号链接逃逸（#38622） |
| **Compaction/上下文压缩** | OpenClaw、Hermes Agent、Moltis、ZeroClaw、NanoBot | 压缩时丢弃必要上下文、跨模型切换时阈值失效、需要感知上下文压力的动态压缩 |
| **Provider 兼容性与 Fallback** | ZeroClaw、NanoBot、Hermes Agent、PicoClaw | 空响应重试导致消息重复、模型 404 静默回退、多 provider 切换的凭证管理、Bedrock 跨模型兼容性 |
| **多 Agent 路由与隔离** | OpenClaw、NanoClaw、ZeroClaw、Hermes Agent | agentDir 引导文件隔离（#29387）、容器级配置（#2709）、bindings 路由（ZeroClaw #2767）、子代理策略转发 |
| **Desktop/客户端体验** | Hermes Agent、NanoClaw、ZeroClaw、CoPaw | 休眠唤醒恢复、Wayland 兼容性、纯客户端安装模式、SSO 登录集成 |

---

## 5. 差异化定位分析

### 功能侧重对比

| 项目 | 核心差异化 | 目标用户 | 主要语言 |
|---|---|---|---|
| **OpenClaw** | 全渠道覆盖 + Skills 生态 + Gateway 中心化 | 个人/团队全场景用户 | TypeScript |
| **Hermes Agent** | Desktop-first + A2A 协议前瞻 + 多平台服务集成 | 桌面用户、注重 UX 的个人用户 | Rust/TypeScript |
| **ZeroClaw** | zerocode TUI + Schema v3 架构 + 多 Provider | 开发者、终端重度用户 | Rust |
| **IronClaw** | Reborn 架构重写 + Rust 安全优先 + Hermetic gate | 企业用户、安全敏感场景 | Rust |
| **NanoBot** | bwrap 沙箱 + 企业 IM（飞书/WhatsApp）+ 渠道稳定性 | 企业 IM 集成用户 | Python |
| **PicoClaw** | 轻量嵌入式 + Go 实现 + 快速部署 | 边缘/嵌入式场景、低资源用户 | Go |
| **NanoClaw** | 容器化多 Agent 管理 + 账号轮换 | 多租户运营用户 | TypeScript |
| **Moltis** | Telegram 深度优化 + 可观测性 | Telegram 重度用户 | Likely TS |
| **CoPaw** | 视觉模型兜底 + ACP 协议扩展 | 国内开发者（Qwen 生态） | TypeScript |
| **LobsterAI** | 多渠道 IM 集成 + 会话管理 UI | 国内 IM 用户 | TypeScript |

### 技术架构光谱

```
轻量/嵌入式 ←————————————————————→ 重架构/平台化

PicoClaw(Go)  Moltis  CoPaw  LobsterAI  NanoBot  NanoClaw  Hermes  OpenClaw  ZeroClaw  IronClaw(Rust)
                                                                                    ↑Reborn重写
```

- **左侧（轻量）**：Go 实现、单渠道优化、快速部署
- **右侧（重架构）**：Rust 重写、DB-backed 状态、平台化网关、企业安全
- **中间（平衡）**：TypeScript/Node 生态、Desktop + CLI + 多渠道路线

---

## 6. 社区热度与成熟度分层

### 🔥 Tier 1：快速迭代期（日 Issues >30 / PR >30）

| 项目 | 日 Issue | 日 PR | 特征 |
|---|---|---|---|
| **OpenClaw** | 296 | 500 | 事实生态中心，吞吐量独占 |
| **Hermes Agent** | 50 | 50 | Desktop 稳定性冲刺 |
| **ZeroClaw** | 50 | 50 | v0.8.0 功能冻结期 |
| **IronClaw** | 50 | 38 | Reborn 架构集成冲刺 |

### 🔧 Tier 2：质量巩固期（日 Issues 5-20 / PR 5-20）

| 项目 | 日 Issue | 日 PR | 特征 |
|---|---|---|---|
| **PicoClaw** | 21 | 12合/7待 | nightly 发布，积压快速消化，**今日最健康的迭代节奏** |
| **CoPaw** | 5 | 0合/2待 | 版本回归 Bug 修复中 |
| **NanoBot** | 7 | 4合/14待 | 安全加固密集期 |
| **NanoClaw** | 3 | 3合/6待 | 账号轮换与容器配置推进 |

### 🟡 Tier 3：低活跃/静默期

| 项目 | 状态 | 风险 |
|---|---|---|
| **Moltis** | 1 Issue / 0 合并 | 新开 Issue，PR 7天未合 |
| **LobsterAI** | 全 stale，0 PR，60天+积压 | 维护资源可能不足，用户流失风险 |
| **NullClaw / TinyClaw / ZeptoClaw** | 24h 无活动 | 休眠或废弃 |

---

## 7. 值得关注的趋势信号

### 趋势 1：从"能用"到"可靠"——消息投递可靠性成为核心战场

**信号**：OpenClaw 今日 8 个 P1/P2 Issues 标记了 `impact:message-loss`；NanoBot 的会话历史丢失（#4203）被列为数据丢失级 Bug；Moltis 的 #1113 专门修复流式回复丢失；ZeroClaw 的 outbound 消息队列（#7190）是今日最大合并亮点。

**判断**：生态正从"接入渠道"转向"可靠投递"。未来的差异化不再是谁支持的渠道多，而是谁的投递语义更精确（at-least-once vs exactly-once）、Gateway 恢复后消息能否自动补发。**对开发者的启示**：在设计渠道层时，将 outbound 消息队列和 per-channel delivery receipts 作为一等公民。

### 趋势 2：Agent 间互操作从概念走向诉求

**信号**：Hermes Agent 的 A2A 协议支持 Issue（#514）以 19💬 18👍 成为全生态热度最高的 feature request，且已活跃 3 个月零官方回应；OpenClaw 的 MCP 工具发现（#76724）仍然是 P1；ZeroClaw 的 A2A（#3566）获得 7 个 👍；OpenClaw 的子代理隔离（SOUL.md/#29387）和消息路由（#2767）话题持续升温。

**判断**：用户期望 AI 助手不再是孤岛——既需要 MCP（工具互操作）也需要 A2A（Agent 互操作），而后者对架构的冲击更大。**对开发者的启示**：现在就开始在 agent-to-agent 通信协议上布局，即使短期不实现，也要在消息模型中预留 `agent_id` 和 `delegation_context` 字段。

### 趋势 3：安全不再是可选项——沙箱和权限模型进入必选项清单

**信号**：NanoBot 今日合并了 3 个安全类 PR（SSRF、路径穿越、写入保护）；IronClaw 有 2 个 P0 级安全 Issue 已 24 天无回应；NanoClaw 的 `create_agent` 权限未校验（#2711）是今日新出现的安全边界问题；OpenClaw 有 5 个安全标记的 Issue 长期处于 stale 状态。

**判断**：沙箱化（bwrap/sandbox-exec/Docker）、SSRF 防护、最小权限原则正在从"nice-to-have"变为"must-have"。随着多 Agent 路由需求增长，容器级别的隔离能力将成为门槛。**对开发者的启示**：在架构阶段就将沙箱策略和 RBAC 权限模型纳入设计，而非事后打补丁。

### 趋势 4：Context Management 作为独立模块被提取

**信号**：NanoBot 的 PR #4238 将 compact 逻辑从 AgentRunner 提取为 Context Governor；OpenClaw 的 compaction 模式控制 Issue（#90639）标记为 P1；Moltis 的 #1089 对 tool_result 内容进行 cap 截断；IronClaw 的 #4534 压缩保活活跃任务也是今日最大 PR 之一。

**判断**：compaction 正在从一个"prompt 末尾的策略参数"演进为一个独立的、可配置的、感知上下文压力的子系统。**对开发者的启示**：将 context management 设计为可插拔模块，支持按 token 预算、按轮次、按压缩策略（摘要/截断/静默丢弃/归档到长期记忆）的灵活组合。

### 趋势 5：Desktop/客户端体验差异化正在成为新战场

**信号**：Hermes Agent 今日合并了 Desktop 休眠唤醒修复（#40135）和代码签名修复（#41524）；零ZeroClaw 的 zerocode TUI 出站消息队列（#7190）和实时模型切换（#7209）是今日最大的体验改进；Hermes 的 Issue #38602 纯客户端安装模式获得 8 个 👍。

**判断**：当 CLI/Gateway 能力逐步收敛后，客户端体验（Desktop GUI、TUI、移动端 Web）将成为留存用户的关键。**对开发者的启示**：尽早将客户端与 Gateway 解耦，支持瘦客户端 + 远程 Gateway 的分离部署模式。

### 趋势 6：Rust 重写浪潮确认

**信号**：IronClaw（Rust）和社区热度极高的 ZeroClaw（Rust）合计占据 50% 的 Tier 1 话语权；PicoClaw（Go）在嵌入式方向有明确定位。OpenClaw 虽然仍是 TypeScript 的事实中心，但 Rust 生态在安全性和性能上的优势正在吸引更激进的开发者。

**判断**：Rust 在 AI Agent 基础设施层的渗透正在加速，预计未来 12 个月内会出现更多以 Rust 重写现有 TypeScript 生态组件的项目。

---

*报告由 OWL 生成 | 数据截至 2026-06-08 | 数据来源：各项目 GitHub 公开数据*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-08

---

## 1. 今日速览

NanoBot 今日活跃度处于**中高水位**：过去 24 小时内新增 7 条 Issue（5 开 2 闭）、18 条 PR 变动（14 待合并，4 已合并/关闭），无新版本发布。社区贡献趋于集中——安全/沙箱（bwrap、SSRF、路径穿越）、会话管理（孤立工具结果丢弃消息）、API 空响应重试等方向同时有 Issue 报告与对应修复 PR 推进，说明项目的**稳定性修复与测试基础设施补全**正处于密集期。整体来看，项目核心路径（工具循环、沙盒隔离、会话历史）的质量加固是本周主线。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展（今日合并/关闭的重要 PR）

### ✅ 已合并

| PR | 作者 | 摘要 |
|---|---|---|
| **[#4227](https://github.com/HKUDS/nanobot/pull/4227)** | michaelxer | **修复 custom provider 下空字符串 `reasoning_content` 被强制转为 `None` 的问题**。之前 `""` 被视为 falsy，导致工具调用消息中 reasoning 字段丢失。 |
| **[#2885](https://github.com/HKUDS/nanobot/pull/2885)** | xwind | **飞书频道修复**：解析消息中的 `@_user_n` 占位符并替换为实际用户信息；修复 access token 初始化逻辑。 |
| **[#4240](https://github.com/HKUDS/nanobot/pull/4240)** | Re-bin | **WebUI ANSI 彩色输出渲染**：新增 ANSI SGR 解析器，支持标准色、256 色、RGB、粗体/斜体/下划线等样式，输出转纯净文本用于复制。 |
| **[#2663](https://github.com/HKUDS/nanobot/pull/2663)** | danielphang | **WhatsApp LID 群 @提及检测修复**：规范化 JID 时保留域名部分；在 `groupPolicy=mention` 下正确处理滑动手势回复。 |

### 📌 意义总结
今天合并的 PR 打通了三个长期悬而未决的通道级 Bug（飞书 mention 解析、WhatsApp LID 群消息），显著改善了消息可靠性。同时，PR #4227 与 Issue #4105 形成闭环——`reasoning_content` 空串这一显示为 Edge Case 的问题被精准修复，说明 custom provider 生态正在被更严格的测试覆盖。WebUI 的 ANSI 渲染提升了对终端工具（如 `ls --color`、`grep --color`）输出结果的展示能力。

---

## 4. 社区热点

### 🔥 今日最热 Issue

| Issue | 标签 | 评论数 | 热度来源 |
|---|---|---|---|
| **[#2256](https://github.com/HKUDS/nanobot/issues/2256)** `[CLOSED]` — 飞书话题群 bot 回复问题 | good first issue, feature request | 4 | 飞书用户期望 bot 在话题群中直接回复对应话题，而非只在主群回复；4 条评论显示有多位用户确认该行为不一致，维护者已关闭但可能未完全解决。 |
| **[#4203](https://github.com/HKUDS/nanobot/issues/4203)** `[OPEN]` — `find_legal_message_start` 丢弃所有消息 | bug | 2 | 孤立工具结果（无对应 assistant 调用）导致函数返回列表长度，会话历史被清空。已有 [#4219](https://github.com/HKUDS/nanobot/pull/4190) PR 修复中。 |
| **[#4236](https://github.com/HKUDS/nanobot/issues/4236)** `[OPEN]` — bwrap 沙箱在 Ubuntu 24.04 失败 | bug | 1 | 现代 Linux 默认禁用非特权用户命名空间，导致 bwrap 无法创建沙箱。 |
| **[#4237](https://github.com/HKUDS/nanobot/issues/4237)** `[OPEN]` — bwrap 沙箱未重置 HOME 环境变量 | bug | 1 | HOME 指向宿主机目录，沙箱内写入操作因权限不足失败。 |

**分析**：bwrap 沙箱在两条 Issue 中暴露出**配置与使用文档脱节**——Ubuntu 24.04、Debian 13 等主流发行版已限制 unprivileged user namespaces，用户按文档操作后直接报错。HOME 变量问题则属于真正的实现缺陷。两者均已对应 PR #4236、#4239 推进修复。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重级别 | 问题 | Issue | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **严重** | 孤立工具结果导致会话历史被清空 | [#4203](https://github.com/HKUDS/nanobot/issues/4203) | OPEN | ✅ [#4219](https://github.com/HKUDS/nanobot/pull/4219) 修复中 |
| 🔴 **严重** | bwrap 沙箱 HOME 未设置，工具写入失败 | [#4237](https://github.com/HKUDS/nanobot/issues/4237) | OPEN | ✅ [#4239](https://github.com/HKUDS/nanobot/pull/4239) 修复中 |
| 🟠 **高** | bwrap 在 Ubuntu 24.04 上因 namespace 限制失败 | [#4236](https://github.com/HKUDS/nanobot/issues/4236) | OPEN | ⚠️ 待处理（可能需要文档+代码双重修复） |
| 🟠 **高** | OpenAI-compatible API 空响应重试导致用户消息重复 | — | OPEN | ✅ [#4234](https://github.com/HKUDS/nanobot/pull/4234) 修复中 |
| 🟡 **中** | 自定义 provider 空 reasoning 被强制转 None | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | CLOSED | ✅ [#4227](https://github.com/HKUDS/nanobot/pull/4227) 已合并 |
| 🟡 **中** | 相对路径符号链接可逃逸工作目录 | — | OPEN | ✅ [#4119](https://github.com/HKUDS/nanobot/pull/4119) 修复中 |
| 🟡 **中** | MCP streamableHttp 无超时保护 | — | OPEN | ✅ [#4230](https://github.com/HKUDS/nanobot/pull/4230) 修复中 |

**重点关注**：Issue #4203 属于**数据丢失级 Bug**——孤岛工具结果直接清空会话历史，导致后续对话失去上下文。PR #4219 的合并优先级应提高到最高。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 相关 PR | 评估 |
|---|---|---|---|
| **在 WebUI 显示版本号** | [#4233](https://github.com/HKUDS/nanobot/issues/4233) `enhancement` | ✅ [#4235](https://github.com/HKUDS/nanobot/pull/4235) 已实现 | 低复杂度，已有实现，待合并 |
| **Subagent spawn 工具支持 model 参数覆盖** | [#4231](https://github.com/HKUDS/nanobot/issues/4231) `enhancement` | ❌ 暂无 PR | 中复杂度，用户诉求明确（不同子任务使用不同模型），可能纳入下一版本 |
| **共享语音输入/转录能力** | — | [#4232](https://github.com/HKUDS/nanobot/pull/4232) | 重构类 PR，将 transcription 从 channel-only 提升为全局能力，支持 WebUI 与桌面语音输入 |
| **Context Governor（上下文压力驱动的 microcompact）** | — | [#4238](https://github.com/HKUDS/nanobot/pull/4238) | 架构重构，将 compact 逻辑从 AgentRunner 提取为独立模块，基于实际上下文压力而非固定计数触发 |

**判断**：**spawn model override** 和 **ANSI 渲染** 是用户呼声较高且实现成本低的两项功能，预计近期合并。**Context Governor** 虽然 PR 刚提交，但其解决的是长对话核心痛点（microcompact 次数过多/过少），值得优先 Review。

---

## 7. 用户反馈摘要

**痛点**：
- **飞书话题群交互体验**（Issue #2256）：bot 只在主群回复而非对应话题群，降低效率。
- **bwrap 沙箱不可用**（Issues #4236、#4237）：默认配置在主流桌面 Linux 上即报错，文档未给出排障指引。
- **MCP SSE/streamable HTTP 安全性**：用户报告 SSRF 风险（PR #4123），表明更严格的安全审计需求。
- **会话历史丢失**（Issue #4203）：边缘场景下的消息丢失直接损害对话连续性，严重影响体验。

**满意点**：
- 对 reasoning 修复的响应速度较快（Issue #4105 → PR #4227 → 合并仅耗时约 1 周）。
- ANSI 渲染功能（PR #4240）获得正面反馈，用户认为对调试工具输出极有帮助。

**使用场景观察**：
- 飞书、WhatsApp 是企业 IM 集成的高频需求方，channel 层 Bug 修复直接影响企业用户留存。
- bwrap 沙箱说明用户在桌面环境（macOS 对应 sandbox-exec）有强隔离需求，安全敏感型用户占比提升。

---

## 8. 待处理积压（提醒）

| PR / Issue | 创建日期 | 当前状态 | 说明 |
|---|---|---|---|
| **PR [#3982](https://github.com/HKUDS/nanobot/pull/3982)** — 测试：脚本化 agent runner 框架 | 2026-05-24 | OPEN (14 天) | 测试基础设施，降低后续功能 PR 的测试门槛，建议合并。 |
| **PR [#3983](https://github.com/HKUDS/nanobot/pull/3983)** — 测试：runner 被拦截的 tool-call finish reason 覆盖 | 2026-05-24 | OPEN (14 天) | 同上，测试框架完整性依赖此 PR。 |
| **PR [#4123](https://github.com/HKUDS/nanobot/pull/4123)** — 修复：MCP SSRF 防护 | 2026-05-31 | OPEN (8 天) | 安全类修复，应尽快 Review。 |
| **PR [#4190](https://github.com/HKUDS/nanobot/pull/4190)** — 工具调用验证严格化 | 2026-06-04 | OPEN (4 天) | 防止无效参数被静默修复为 `{}`，改为显式报错。 |
| **PR [#4053](https://github.com/HKUDS/nanobot/pull/4053)** — 修复：只读根目录不应出现在写入路径 | 2026-05-29 | OPEN (10 天) | 安全加固，防止写入逃逸。 |
| **Issue #4231** — spawn 工具 model 参数 | 2026-06-07 | OPEN | 功能请求，尚无 PR，可标记为 `help wanted`。 |

**建议**：积压的 5 个 PR 中有 3 个属于安全加固（SSRF、路径穿越、写入保护），建议维护者在本周内集中 Review 并合并，避免安全修复长期悬而未决。测试框架类 PR（#3982、#3983）虽非功能代码，但能显著提升后续 PR 的合并效率，同样值得优先处理。

---

*数据来源：GitHub HKUDS/nanobot | 统计窗口：2026-06-07 至 2026-06-08 | 生成时间：2026-06-08*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-08 | 数据来源：github.com/nousresearch/hermes-agent**

---

## 1. 今日速览

过去 24 小时 Hermes Agent 社区保持高活跃度，共产生 **50 条 Issue 更新**（新开/活跃 48 条，关闭 2 条）和 **50 条 PR 更新**（待合并 44 条，已合并/关闭 6 条），无新版本发布。项目当前处于密集迭代期，Desktop 客户端稳定性、多平台网关适配、以及 Agent 核心循环的健壮性是今日三大主线。值得注意的是，P1/P2 级别的关键 Bug 数量较多（约 10 条），涉及配置迁移静默破坏工具链、Gateway 进程管理异常、以及多 provider 兼容性问题，需要维护者优先关注。社区对 A2A 协议集成（Issue #514，19 条评论、18 个 👍）和 Desktop 纯客户端安装模式（Issue #38602，8 个 👍）表现出强烈兴趣，反映出用户对互操作性和部署灵活性的迫切需求。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **6 个 PR 被合并或关闭**，以下是关键进展：

| PR | 状态 | 说明 |
|---|---|---|
| [#40605](https://github.com/NousResearch/hermes-agent/pull/40605) | ✅ 已合并 | **Hindsight 记忆插件优化**：修复 `update_mode='append'` 时重复发送整个会话的问题，改为仅发送新增轮次增量，显著降低记忆插件的 token 消耗 |
| [#41215](https://github.com/NousResearch/hermes-agent/pull/41215) | ✅ 已合并 | **终端工具调用渲染改进**：在支持 Markdown 的平台上将 `terminal` 工具调用渲染为原生 `bash` 代码块，提升可读性 |
| [#40135](https://github.com/NousResearch/hermes-agent/pull/40135) | ✅ 已合并 | **Desktop 睡眠唤醒恢复**：修复 Mac 休眠后聊天输入框永久卡在"Starting Hermes…"的问题，通过重新验证缓存的后端连接实现自动恢复 |
| [#41524](https://github.com/NousResearch/hermes-agent/pull/41524) | 🔄 待合并 | **macOS 代码签名修复**：强制本地开发构建使用 ad-hoc 签名，解决 Apple 开发者证书在 keychain 中导致 electron-builder 构建失败的问题（对应 Issue #41499） |
| [#41332](https://github.com/NousResearch/hermes-agent/pull/41332) | 🔄 待合并 | **Bedrock 响应去重**：修复 Bedrock mantle Responses 端点返回累积 `message` output_items 导致回复文本重复的问题（对应 Issue #41321） |
| [#41148](https://github.com/NousResearch/hermes-agent/pull/41148) | 🔄 待合并 | **Windows Gateway 事务性重启**：实现 fail-closed 的网关重启协调器，解决 Windows 上 `_HERMES_GATEWAY=1` 守卫阻止自重启的问题 |

**整体判断**：项目在 Desktop 体验修复（睡眠唤醒、代码签名、退出命令路由）和跨平台网关稳定性（Windows 重启、macOS launchd 加固）上推进明显，但 44 个待合并 PR 的积压量较大，合并节奏有待加快。

---

## 4. 社区热点

### 🔥 Issue #514 — A2A (Agent-to-Agent) 协议支持
- **链接**：[NousResearch/hermes-agent#514](https://github.com/NousResearch/hermes-agent/issues/514)
- **数据**：19 条评论、18 个 👍，自 2026-03-06 创建以来持续活跃
- **分析**：这是当前社区热度最高的 Feature Request。用户希望 Hermes Agent 支持 Google 主导的 A2A 开放协议（Linux Foundation，Apache 2.0），实现远程 Agent 发现、通信与互操作。该协议与 MCP 互补——MCP 解决"用什么工具"，A2A 解决"谁能帮我"。这反映出社区对 **Agent 间协作与生态互操作** 的强烈期待，也是 AI Agent 领域 2026 年的核心趋势之一。

### 🔥 Issue #38602 — Desktop 纯客户端安装模式
- **链接**：[NousResearch/hermes-agent#38602](https://github.com/NousResearch/hermes-agent/issues/38602)
- **数据**：8 个 👍，2 条评论
- **分析**：用户希望将 Hermes Desktop 作为瘦客户端，连接到远程已有的 Hermes 安装，而非每次启动都自动引导安装 Agent runtime。这反映了 **分离部署** 场景的需求——用户希望在服务器/云端运行 Agent，在本地仅使用 GUI 前端。

### 🔥 Issue #29144 — 微信多账号企业部署
- **链接**：[NousResearch/hermes-agent#29144](https://github.com/NousResearch/hermes-agent/issues/29144)
- **数据**：4 个 👍，2 条评论，自 2026-05-20 持续讨论
- **分析**：企业/团队场景下，微信渠道只能绑定一个账号，无法支持多成员协作。这与 Telegram/Discord/QQ 的多账号支持形成鲜明对比。该 Issue 触及了 Hermes 在 **中国企业市场落地** 的关键阻塞点。

### 🔥 Issue #41092 — Desktop 辅助模型切换保留过期 base_url
- **链接**：[NousResearch/hermes-agent#41092](https://github.com/NousResearch/hermes-agent/issues/41092)
- **数据**：3 条评论
- **分析**：在 Desktop/Dashboard 中切换辅助模型时，`provider` 和 `model` 更新了，但 `auxiliary.<task>.base_url` 未被清除，导致之前配置的自定义/OpenRouter 端点残留。这是一个典型的 **状态一致性** 问题。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 P1 — 关键问题

| Issue | 描述 | Fix PR |
|---|---|---|
| [#38798](https://github.com/NousResearch/hermes-agent/issues/38798) | **配置迁移 v25→v26 破坏 `platform_toolsets`**：`hermes update` 将有效的 `hermes-cli` 重写为不存在的 `hermes`，导致所有工具静默失效 | ❌ 暂无 |
| [#41355](https://github.com/NousResearch/hermes-agent/issues/41355) | **Gateway 忽略 `--profile` 标志**：`hermes gateway run --profile <name>` 加载默认 profile 的配置/上下文，而非目标 profile | ❌ 暂无 |

### 🟠 P2 — 高优先级

| Issue | 描述 | Fix PR |
|---|---|---|
| [#41631](https://github.com/NousResearch/hermes-agent/issues/41631) | **Gateway 在 `systemctl stop` 时退出码为 1**：导致 systemd unit 进入 `failed` 状态而非 `inactive`，污染监控 | ❌ 暂无 |
| [#41457](https://github.com/NousResearch/hermes-agent/issues/41457) | **Shell hooks 在 Desktop 和 ACP 适配器中未注册**：`pre_tool_call` 拦截钩子静默失效，安全策略无法生效 | ❌ 暂无 |
| [#41517](https://github.com/NousResearch/hermes-agent/issues/41517) | **Desktop 聊天 worker 丢失选中的 profile**：实际执行使用了默认 profile 而非用户选择的 profile | ❌ 暂无 |
| [#41296](https://github.com/NousResearch/hermes-agent/issues/41296) | **Bedrock 区域推理配置文件切换失败**：`/model` 切换到 `jp.*/eu.*/apac.*` 时缺少 `_bedrock_region` 设置 | ❌ 暂无 |
| [#41331](https://github.com/NousResearch/hermes-agent/issues/41331) | **Email IMAP/SMTP 登录用户名硬编码为 `EMAIL_ADDRESS`**：自定义域名邮箱无法使用不同登录凭据 | ❌ 暂无 |
| [#41366](https://github.com/NousResearch/hermes-agent/issues/41366) | **Telegram 视频消息缓存后未暴露给 Agent**：Agent 只能看到文字标题，无法处理视频内容 | ❌ 暂无 |
| [#41377](https://github.com/NousResearch/hermes-agent/issues/41377) | **Cron job 主模型 404 时静默回退**：工具使用不支持的模型返回 404 后自动替换，但无审计日志或错误披露 | ❌ 暂无 |
| [#41392](https://github.com/NousResearch/hermes-agent/issues/41392) | **`hermes cron list` 在 `deliver: null` 时崩溃**：TypeError 导致无法列出任何定时任务 | ❌ 暂无 |
| [#41407](https://github.com/NousResearch/hermes-agent/issues/41407) | **WhatsApp 群组/LID JID 目标静默回退**：消息被错误路由到 home channel | ❌ 暂无 |
| [#41534](https://github.com/NousResearch/hermes-agent/issues/41534) | **managed_uv 无回退解析链**：`$HERMES_HOME/bin/uv` 损坏时 `hermes update` 完全无法恢复 | ❌ 暂无 |
| [#41539](https://github.com/NousResearch/hermes-agent/issues/41539) | **Windows 上 Discord 连接 30s 超时**：Bot 永远无法上线（标记为 duplicate） | ❌ 暂无 |

### 🟡 P3 — 中优先级

| Issue | 描述 | Fix PR |
|---|---|---|
| [#41092](https://github.com/NousResearch/hermes-agent/issues/41092) | Desktop 辅助模型切换保留过期 `base_url` | ❌ 暂无 |
| [#38015](https://github.com/NousResearch/hermes-agent/issues/38015) | Linux Wayland 下聊天内容周期性闪烁/跳动 | ❌ 暂无 |
| [#41321](https://github.com/NousResearch/hermes-agent/issues/41321) | Bedrock mantle 回复文本重复 | ✅ [#41332](https://github.com/NousResearch/hermes-agent/pull/41332) |
| [#41311](https://github.com/NousResearch/hermes-agent/issues/41311) | Kanban dispatcher 注入已归档的 `kanban-worker` skill 导致崩溃 | ❌ 暂无 |
| [#41327](https://github.com/NousResearch/hermes-agent/issues/41327) | Desktop Dashboard 打包后 `dist/` 未从 `app.asar` 解包，所有静态路由返回 404 | ❌ 暂无 |
| [#41379](https://github.com/NousResearch/hermes-agent/issues/41379) | `reasoning_effort: none` 在 Anthropic 协议第三方 provider 上被静默丢弃 | ❌ 暂无 |
| [#41499](https://github.com/NousResearch/hermes-agent/issues/41499) | macOS 本地构建因 Apple 代码签名身份冲突失败 | ✅ [#41524](https://github.com/NousResearch/hermes-agent/pull/41524) |
| [#41518](https://github.com/NousResearch/hermes-agent/issues/41518) | OAuth 重构意外移除了 macOS `/Applications` 自动放置和 Dock 固定功能 | ❌ 暂无 |

**关键发现**：P1 级别的 Issue #38798（配置迁移破坏工具链）和 #41355（Gateway profile 隔离失效）均无修复 PR，且影响范围广，建议维护者立即响应。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 热度 | 判断 |
|---|---|---|---|
| **A2A 协议支持** | [#514](https://github.com/NousResearch/hermes-agent/issues/514) | 19💬 18👍 | 高优先级趋势，但实现复杂度高，短期内可能以实验性支持形式出现 |
| **Desktop 纯客户端模式** | [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) | 8👍 | 与远程网关部署场景强关联，可能随 gateway 架构优化一并解决 |
| **微信多账号企业部署** | [#29144](https://github.com/NousResearch/hermes-agent/issues/29144) | 4👍 | 中国市场刚需，但受限于微信官方 API 约束，短期突破难度大 |
| **统一插件路由选择器** | [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) | 2💬 | 架构改进需求，与现有插件系统重构方向一致 |
| **Hermes Workspace 集成** | [#41553](https://github.com/NousResearch/hermes-agent/issues/41553) | 1💬 | 社区工具生态整合，可能以官方插件形式支持 |
| **工具错误分类与智能恢复** | [#41314](https://github.com/NousResearch/hermes-agent/issues/41314) | 1💬 | Agent 核心能力提升，与 [#41490](https://github.com/NousResearch/hermes-agent/issues/41490)（Agent 重复调用循环）关联 |
| **macOS launchd 加固** | — | — | 已有 PR [#41635](https://github.com/NousResearch/hermes-agent/pull/41635) 推进中，预计近期合并 |
| **Windows RPC 连接复用** | — | — | 已有 PR [#41638](https://github.com/NousResearch/hermes-agent/pull/41638) 修复 TIME_WAIT 耗尽问题 |
| **Nous provider 限速恢复** | — | — | 已有 PR [#41610](https://github.com/NousResearch/hermes-agent/pull/41610) 从 OpenClaw 移植 |

**路线图信号**：从 PR 活跃度判断，下一版本的重点方向是 **(1) Desktop 客户端稳定性与跨平台体验**、**(2) Gateway 进程管理与多平台服务集成**、**(3) Agent 循环健壮性（工具调用去重、错误恢复、Honcho 防护）**。A2A 协议支持虽热度最高，但属于中长期规划。

---

## 7. 用户反馈摘要

### 😤 痛点与不满

1. **配置迁移静默破坏工具链**（Issue #38798）：用户执行 `hermes update` 后所有工具无声失效，无任何错误提示，排查成本极高。这是典型的 **升级体验灾难**。

2. **Desktop 在 Linux Wayland 上几乎不可用**（Issue #38015）：聊天内容周期性闪烁/跳动，且"无 workaround"。Linux 桌面用户被严重忽视。

3. **macOS 本地开发构建频繁失败**（Issue #41499）：任何拥有 Apple 开发者证书的开发者都会触发 electron-builder 签名冲突，且 OAuth 重构还意外移除了 `/Applications` 自动放置功能（Issue #41518）。macOS 开发者体验在退化。

4. **Gateway profile 隔离形同虚设**（Issue #41355）：`--profile` 标志被完全忽略，多环境/多用户场景无法使用。

5. **Windows 平台体验持续薄弱**：Discord 连接超时（Issue #41539）、Dashboard Session 0 残留（Issue #41598/#41636）、RPC TIME_WAIT 耗尽（Issue #41612/#41638）、Gateway 自重启失败（PR #41148）——Windows 用户面临一连串平台特有问题。

6. **Cron 系统脆弱**：`deliver: null` 导致 `cron list` 崩溃（Issue #41392），模型 404 时静默回退无审计（Issue #41377）——定时任务子系统的错误处理严重不足。

### 👍 满意与期待

1. **A2A 协议支持呼声强烈**（Issue #514）：社区对 Agent 间互操作标准表现出高度热情，18 个 👍 在 Feature Request 中非常罕见。

2. **Desktop 纯客户端模式需求明确**（Issue #38602）：用户欣赏 Desktop GUI 的质量，但希望与远程部署解耦。

3. **Hindsight 记忆插件优化获认可**（PR #40605）：增量发送修复被快速合并，社区对性能优化类改进反应积极。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，提醒维护者关注：

| 项目 | 链接 | 创建日期 | 状态 | 说明 |
|---|---|---|---|---|
| Issue #514 | [A2A 协议支持](https://github.com/NousResearch/hermes-agent/issues/514) | 2026-03-06 | 开放，19💬 | 已活跃 3 个月，社区热度最高但无官方路线图回应 |
| Issue #29144 | [微信多账号](https://github.com/NousResearch/hermes-agent/issues/29144) | 2026-05-20 | 开放，2💬 | 企业部署硬阻塞，近 3 周无维护者回复 |
| Issue #38798 | [配置迁移破坏工具链](https://github.com/NousResearch/hermes-agent/issues/38798) | 2026-06-04 | 开放，P1 | 升级即损坏，4 天无响应 |
| Issue #41355 | [Gateway 忽略 --profile](https://github.com/NousResearch/hermes-agent/issues/41355) | 2026-06-07 | 开放，P1 | 多 profile 功能完全失效，1 天无响应 |
| Issue #41457 | [Shell hooks 在 Desktop/ACP 中未注册](https://github.com/NousResearch/hermes-agent/issues/41457) | 2026-06-07 | 开放，P2 | 安全策略静默失效，1 天无响应 |
| PR #41568 | [安全依赖升级（12 CVE）](https://github.com/NousResearch/hermes-agent/pull/41568) | 2026-06-07 | 待合并 | PyJWT、aiohttp 等关键依赖存在已知漏洞，已开放 1 天 |
| PR #41148 | [Windows Gateway 事务性重启](https://github.com/NousResearch/hermes-agent/pull/41148) | 2026-06-07 | 待合并 | Windows 核心稳定性修复，已开放 1 天 |

**建议**：
- **立即处理** Issue #38798 和 #41355（P1 级别，影响核心功能）
- **优先合并** PR #41568（安全 CVE 修复不应等待）
- **给出路线图回应** Issue #514（社区等待已久，即使短期不实现也应说明立场）

---

*日报由 OWL 生成 | 数据截至 2026-06-08*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-08

---

## 1. 今日速览

PicoClaw 今日处于**高活跃度维护期**：24小时内 Issues 更新 21 条（关闭 17 条，新开/活跃仅 4 条），PR 更新 19 条（合并/关闭 12 条，待合并 7 条），整体积压快速消化。项目发布了 **v0.2.9-nightly.20260607** 自动化夜间构建，结合近期大量 defensive fix PR 的密集合并，表明维护团队正在为下一个稳定版本做质量收敛。值得关注的方向包括 Matrix 权限解析修复、`mcp add` 参数解析缺陷、Telegram 位置消息缺失，以及一系列由社区贡献的边缘 case 加固。

---

## 2. 版本发布

- **nightly: v0.2.9-nightly.20260607.7d2b0c2a**（自动化夜间构建）

  > Nightly build. This is an automated build and may be unstable. Use with caution.
  > Full Changelog: v0.2.9...main

  非正式稳定版，不建议生产使用。本次日报所涵盖的大量 fix PR（错误检查加固、关闭句柄验证、Anthropic 默认模型修正等）均包含在此 nightly 构建中，可作为下阶段稳定版的预验基础。

---

## 3. 项目进展 — 今日合并 / 关闭的重要 PR

今日 **12 条 PR 合并/关闭**，以稳定性加固和 bug 修复为主线，无重大新功能合并。

| PR | 作者 | 说明 |
|---|---|---|
| [#3042](https://github.com/sipeed/picoclaw/pull/3042) | chengzhichao-xydt | 修复 `os.Getwd()` 错误被静默吞掉导致内置 skills 目录无法找到的问题 |
| [#3046](https://github.com/sipeed/picoclaw/pull/3046) | chengzhichao-xydt | 为 `agentCmd` 中 `GetStartupInfo` 的类型断言增加 `ok` check，防止潜在 panic |
| [#3040](https://github.com/sipeed/picoclaw/pull/3040) | chengzhichao-xydt | 修复 `singlefire.Group.Do()` 类型断言缺少 `ok` 检查的运行时崩溃风险 |
| [#3036](https://github.com/sipeed/picoclaw/pull/3036) | SutraHsing | 修正 Anthropic 默认模型 ID（`claude-sonnet-4.6` → `claude-sonnet-4-6`），消除首次使用 404 报错 |
| [#3034](https://github.com/sipeed/picoclaw/pull/3034) | chengzhichao-xydt | 检查飞书资源下载 `Close()` 错误，避免在磁盘满/IO错误时注册损坏文件 |
| [#3035](https://github.com/sipeed/picoclaw/pull/3035) | chengzhichao-xydt | 检查 io.Copy 后 `Close()` 错误，防止截断文件被当作正常文件使用 |
| [#3033](https://github.com/sipeed/picoclaw/pull/3033) | chengzhichao-xydt | 检查媒体文件下载 `Close()` 错误，避免返回截断/损坏文件路径 |
| [#3037](https://github.com/sipeed/picoclaw/pull/3037) | jp39 | **新增原生 Kagi 搜索 provider** — 集成 Kagi 官方 Go 客户端至 `tools.web` 系统 |
| [#3016](https://github.com/sipeed/picoclaw/pull/3016) | chengzhichao-xydt | 修复 reload 时旧 `dispatchTask` context 未取消的 goroutine 泄漏，以及 nil agent guard |
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) | maxmilian | Skills 缺少 PATH 上声明的二进制时自动过滤，不再向 LLM 广播不可用 skill |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | SiYue-ZO | 修复消息总线背压处理：有界等待替代无界阻塞，新增 per-stream 丢弃统计 |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) | puneetdixit200 | 新增 Android Termux 运行指南并关联文档入口 |

**整体推进评估**：项目在稳定化层面迈出扎实一步——文件句柄关闭错误的系列修复（#3033/#3034/#3035）覆盖了媒体下载、飞书资源、通用文件复制三类路径，说明系统性代码审计正在推进。Kagi provider 的合并（#3037）是今日唯一的新功能增量，价值中等但影响面有限。

---

## 4. 社区热点

### 🔴 Issue #2674 — Codex OAuth 空助手响应
**链接**: [sipeed/picoclaw#2674](https://github.com/sipeed/picoclaw/issues/2674)
**互动**: 8 条评论，👍 4

使用 OpenAI Codex OAuth provider 对接 ChatGPT 后端时代助响应为空。问题自 4 月底创建，至今 43 天仍有讨论，说明受影响用户在持续增长。该 issue 今日被关闭（stale），但尚未合并显式修复 PR，社区成员可能仍有未解决的阻塞。

### 🟡 Issue #3044 — Matrix `allow_from` 冒号问题
**链接**: [sipeed/picoclaw#3044](https://github.com/sipeed/picoclaw/issues/3044)

`allow_from` 无法匹配含冒号的标准 Matrix 用户 ID 格式（`@localpart:domain`），消息被静默拒绝。**已对应 PR #3045（待合并）**，该 PR 定位到 `ParseCanonicalID` 在非冒号处的切分 bug。

### 🟡 Issue #3041 — `mcp add` 全局 flag 误解析
**链接**: [sipeed/picoclaw#3041](https://github.com/sipeed/picoclaw/issues/3041)

`mcp add` 启用 `DisableFlagParsing: true` 导致 `--no-color` 等根级 flag 泄漏到自定义解析器，被误当位置参数。**已对应 PR #3048（待合并）**，方案是拒绝未知预置位 flag。

### 🟡 Issue #2978 — 请求添加 OmniRoute provider
**链接**: [sipeed/picoclaw#2978](https://github.com/sipeed/picoclaw/issues/2978)

用户希望集成 [OmniRoute](https://github.com/diegosouzapw/OmniRoute) 作为 provider，或提供配置指南。目前无维护者响应，也无可视 PR。该需求本质上是"provider 扩展机制如何配置"的文档缺口。

### 🟢 Issue #3049 — Telegram 忽略位置消息
**链接**: [sipeed/picoclaw#3049](https://github.com/sipeed/picoclaw/issues/3049)

Telegram 渠道仅响应 `message.text`，发送位置 pin 时无任何日志输出。新 issue，尚无讨论或 PR。

---

## 5. Bug 与稳定性

按严重程度排列：

| # | Bug | 严重程度 | Fix PR | 状态 |
|---|---|---|---|---|
| 1 | `mcp add` 全局 flag 泄漏导致 STDIO server 误命名 / HTTP SSE 添加失败 | **高** — 核心 MCP 功能受损 | [#3048](https://github.com/sipeed/picoclaw/pull/3048) | 待合并 |
| 2 | Matrix `allow_from` 冒号解析错误导致合法用户被静默拒绝 | **高** — 安全策略失效 | [#3045](https://github.com/sipeed/picoclaw/pull/3045) | 待合并 |
| 3 | `os.Getwd()` 静默失败导致 builtin skills 目录路径错误 | **中** — 影响 skill 加载 | [#3042](https://github.com/sipeed/picoclaw/pull/3042) | ✅ 已合并 |
| 4 | `agentCmd` startupInfo 类型断言缺 `ok` check，未来重构后 panic | **中** — 防御性缺陷 | [#3046](https://github.com/sipeed/picoclaw/pull/3046) | ✅ 已合并 |
| 5 | `singleflight` 类型断言缺 `ok` check 导致潜在运行时 panic | **中** — 防御性缺陷 | [#3040](https://github.com/sipeed/picoclaw/pull/3040) | ✅ 已合并 |
| 6 | 系列 `Close()` 错误被静默吞掉（媒体/文件/飞书资源） | **中** — 数据完整性风险 | #3033/#3034/#3035 | ✅ 已合并 |
| 7 | reload 时 goroutine 泄漏（旧 dispatchTask context 未取消） | **中** — 长期运行后资源耗尽 | [#3016](https://github.com/sipeed/picoclaw/pull/3016) | ✅ 已合并 |
| 8 | Telegram 忽略位置消息 | **低** — 功能不完整 | 无 | 待处理 |
| 9 | Skill-creator 缺少 `init_skill.py` 脚本无法运行 | **低** — 文档/工具链 | 无 | 长期未处理（参见 [#652](https://github.com/sipeed/picoclaw/issues/652)） |

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 信号强度 | 判断 |
|---|---|---|---|
| **OmniRoute 作为新 provider** | [#2978](https://github.com/sipeed/picoclaw/issues/2978) | ⚠️ 弱 | 需维护者响应或社区 PR |
| **Android Termux 支持** | [#286](https://github.com/sipeed/picocaw/issues/286) | ⚠️ 弱 | PR #2902 已合并，文档到位，剩余为使用反馈问题 |
| **ClawHub / 交易相关功能** | #3024~#3032（一系列葡萄牙语标签 issue） | ⚠️ 弱且不明确 | 这些 issue 像内部任务板（含"TDD obligatorio""ring buffer lock-free"等描述），被快速关闭，可能为计划性功能实验或 spam，需关注是否产生实质 PR |
| **模型界面改进（key 复用、下拉选择、一键测试）** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | ✅ 中等 | 合理 UX 改进诉求，但目前已 stale 关闭，无跟进 |
| **Exchange connector (Binance)** | #3024~#3028 | ✅ 中等 | 任务型 issue，研究性质，暂无社区 PR |

**下一版本预期优先级**：`mcp add` 参数解析修复 + Matrix allow_from 修复 → 大概率进入下个小版本或 point release。Kagi provider 已合并，将随 nightly 进入后续稳定版。

---

## 7. 用户反馈摘要

**痛点**：

1. **Provider 集成体验不顺畅**：Codex OAuth 对接 ChatGPT 后端出现空响应（#2674），说明 multi-provider 场景下的 stream 事件兼容性仍需打磨；OmniRoute 用户手动配置困难，说明缺乏通用 provider 添加文档。
2. **初次使用体验差**：Anthropic 默认模型 ID 使用点号导致首次启动直接 404（→ PR #3036 已修复）；刚装好的 skill-creator 无法运行，缺少关键脚本（#652 长期未解决）。
3. **渠道行为不一致**：QQ 渠道重启后再次收到消息会触发再次重启的循环 bug（#2952）；Telegram 位置消息完全被忽略（#3049）。
4. **资源受限设备上的 skill 可用性**：如 $10 树莓派上 `agent-browser` skill 因缺二进制仍可出现在系统提示中导致 LLM 调用失败（→ PR #2936 已修复）。

**满意信号**：

- Kagi provider 从提出到合并周期短，说明社区 PR 响应机制有效。
- 系列 defensive fix（类型断言、Close() 错误、goroutine 泄漏）的快速合并营造了"安全网"加固的正向信号。

---

## 8. 待处理积压

| 条目 | 类型 | 创建/更新时间 | 备注 |
|---|---|---|---|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) — Codex OAuth 空响应 | Bug | 2026-04-26 / 2026-06-07 | 8 条评论，4 个 👍，stale 关闭但无确认修复，**建议重新打开排查** |
| [#652](https://github.com/sipeed/picoclaw/issues/652) — Skill-creator 缺失 init_skill.py | Bug | 2026-02-22 / 2026-06-07 | **近4个月**未解决，影响开发者入门 |
| [#2978](https://github.com/sipeed/picoclaw/issues/2978) — OmniRoute provider 请求 | Feature | 2026-05-31 / 2026-06-07 | 7 天无维护者响应 |
| [#3049](https://github.com/sipeed/picoclaw/issues/3049) — Telegram 忽略位置消息 | Bug | 2026-06-07 | 新 issue，尚无讨论 |
| **PR #3045** — Matrix allow_from fallthrough | Fix PR | 2026-06-07 / — | 待合并，影响 Matrix 渠道用户 |
| **PR #3048** — `mcp add` flag 误解析 | Fix PR | 2026-06-07 / — | 待合并，影响 MCP 功能使用 |
| **PR #2904** — Agent loop reload + panic cleanup | Fix PR | 2026-05-20 / 2026-06-07 | stale 状态，核心 agent 路径稳定性修复需评审 |

---

> 本日报由 OWL 基于 2026-06-08 当日可获取的 GitHub 公开数据生成。所有链接指向 [sipeed/picoclaw](https://github.com/sipeed/picoclaw) 仓库。建议维护者优先关注待合并 PR #3045 和 #3048，两者均有明确 issue 对应、根因清晰、改动范围收敛，风险较低可直接合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-06-08 | 数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

过去 24 小时 NanoClaw 社区活跃度**较高**：共产生 3 条新 Issue 和 9 条 PR 更新，其中 6 个 PR 待合并、3 个已关闭，无新版本发布。今日贡献者群体多元，涵盖安全、容器配置、安装体验、账号轮换等多个方向。值得注意的是，今日出现了 1 个**权限安全类 Issue**（#2711）和 1 个**安装体验阻塞类 Issue**（#2703），均无评论响应，建议维护者优先关注。整体来看，项目处于**高频迭代但无版本发布**的积累阶段。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日共 3 个 PR 被合并/关闭，推进了以下方向：

| PR | 状态 | 说明 |
|---|---|---|
| [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) — docs(ollama): allow prompt caching by filtering the cache-busting hash | **CLOSED** | 为 `docs/ollama.md` 新增"允许 Prompt Caching"章节，解释 Claude-Code-CLI → Ollama 路径默认缓慢的原因及依赖过滤方案。文档改进，降低用户困惑。 |
| [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) — feat(upgrade): startup tripwire + upgrade marker | **CLOSED** | 新增启动时版本路径校验：若安装未通过 `/setup`、`/update-nanoclaw`、`/migrate-nanoclaw` 等正规路径升级，则拒绝启动并给出自愈提示，防止 `git pull` 跳过迁移导致静默损坏。 |
| [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) — fix(账号轮换): 限制模式并校准切换状态 | **CLOSED** | 修复账号轮换逻辑：Codex/Gemini 模式不再误入 Anthropic 自动轮换；轮换前读取 OneCLI 实际绑定 secret 以校准 DB 游标漂移；限流轮换成功后立即发送切换通知；`killGroup` 增加 SIGTERM→SIGKILL 兜底。 |

**小结：** 今日合并的 PR 集中在**安装/升级安全性**和**账号轮换稳定性**两个方向，属于运维体验的关键修复。

---

## 4. 社区热点

### 🔥 Issue #2711 — `create_agent` MCP tool 权限未校验
- **链接：** https://github.com/nanocoai/nanoclaw/issues/2711
- **作者：** jonazri | 评论：0 | 👍：0
- **摘要：** `create_agent` 在注释和描述中标注为"admin-only"，但实际暴露给所有容器，host 端未执行任何角色/权限校验，任意 agent container 均可创建新的 agent group。
- **分析：** 这是一个**安全边界问题**。在多租户/多容器场景下，缺乏 admin 校验意味着任何被授权的 agent 都可以越权创建 group，可能导致资源滥用或隔离失效。该 Issue 自创建以来尚无评论，建议维护者尽快确认是否属于设计意图或确为遗漏。

### 🔥 Issue #2312 — `groups/global/CLAUDE.md` 每次启动被无条件删除
- **链接：** https://github.com/nanocoai/nanoclaw/issues/2312
- **作者：** mbernabeu | 评论：2 | 👍：0
- **摘要：** `migrateGroupsToClaudeLocal()` 在每次启动时无条件删除已提交到仓库的 `groups/global/CLAUDE.md`，导致任何拉取仓库并重启服务的实例产生永久 dirty working tree。
- **分析：** 这是一个**持续困扰用户**的老问题（自 2026-05-06 创建），已有 2 条评论但无修复。对于使用 Git 管理配置的用户，dirty working tree 会干扰自动化部署流程。

### 🔥 PR #2709 — DB-backed env + blocked_hosts for ContainerConfig
- **链接：** https://github.com/nanocoai/nanoclaw/pull/2709
- **作者：** markbala | 状态：OPEN
- **摘要：** 为 `container_configs` 新增两个 DB 存储的 JSON 列：`env`（环境变量键值对）和 `blocked_hosts`（主机黑名单），实现 maintainer 在 #1867 中请求的容器级配置能力。
- **分析：** 这是今日最具**架构意义**的开放 PR，将容器配置从文件系统迁移到数据库，为多容器管理提供了更灵活的配置通道。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 已有 Fix PR |
|---|---|---|---|
| 🔴 **高** | [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) | `create_agent` 权限未校验，任意容器可创建 agent group | ❌ 无 |
| 🟡 **中** | [#2703](https://github.com/nanocoai/nanoclaw/issues/2703) | 推荐安装路径下 `cli/local` 未正确连接，`pnpm run chat hi` 挂起 120s 后超时退出，无错误提示 | ❌ 无 |
| 🟡 **中** | [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) | 每次启动删除 `groups/global/CLAUDE.md`，产生永久 dirty working tree | ❌ 无 |
| 🟢 **低** | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | `send_message` 在对话中途触发时产生重复文本（poll-loop 问题） | ✅ PR 已开放待审 |
| 🟢 **低** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | `use-native-credential-proxy` skill 未能真正绕过 OneCLI gateway，在 launchd/systemd 安装上静默回退 | ✅ PR 已开放待审 |

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 状态 | 判断 |
|---|---|---|---|
| **容器配置 DB 化** | [#2709](https://github.com/nanocoai/nanoclaw/pull/2709) + [#1867](https://github.com/nanocoai/nanoclaw/issues/1867) | PR 开放中 | 高概率纳入下一版本，maintainer 主动提出的需求 |
| **Telegram Topic 隔离与自动注册** | [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) | PR 开放中（自 2026-04-04） | 功能完整但长期未合并，可能需更多 review |
| **启动升级路径校验** | [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) | ✅ 已合并 | 已落地 |
| **Ollama Prompt Caching 文档** | [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) | ✅ 已合并 | 已落地 |
| **账号轮换稳定性** | [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) | ✅ 已合并 | 已落地 |
| **容器凭证代理绕过** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | PR 开放中 | 修复真实安装场景问题，合并优先级较高 |

---

## 7. 用户反馈摘要

- **安装体验断裂：** 用户 `bigintersmind`（[#2703](https://github.com/nanocoai/nanoclaw/issues/2703)）反馈，按照官方推荐路径安装后，`pnpm run chat hi` 命令直接挂起 120 秒后超时，且没有任何提示说明原因。这是**新用户首次体验的严重阻塞点**——安装流程末尾推荐的验证命令无法运行，会直接打击用户信心。

- **安全边界模糊：** 用户 `jonazri`（[#2711](https://github.com/nanocoai/nanoclaw/issues/2711)）指出文档与实现不一致：`create_agent` 声称 admin-only 但实际无校验。这反映了**多租户场景下权限模型需要系统性审视**，而非单点修复。

- **Git 工作流冲突：** 用户 `mbernabeu`（[#2312](https://github.com/nanocoai/nanoclaw/issues/2312)）遇到启动即 dirty 的问题，说明部分用户将 NanoClaw 配置纳入 Git 管理，但框架的迁移逻辑与这一使用模式存在冲突。

- **凭证代理在 systemd/launchd 上失效：** 用户 `premald`（[#2705](https://github.com/nanocoai/nanoclaw/pull/2705)）发现 `use-native-credential-proxy` 在真实生产安装（非开发环境）中静默回退到 OneCLI gateway，说明**开发环境与生产环境的行为差异**需要更多测试覆盖。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 编号 | 类型 | 标题 | 创建日期 | 状态 | 建议 |
|---|---|---|---|---|---|
| [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) | Issue | `groups/global/CLAUDE.md` 每次启动被删除 | 2026-05-06 | OPEN，2 条评论 | 已存在 1 个月+，影响 Git 工作流用户，建议优先修复或说明设计意图 |
| [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) | PR | Telegram topic isolation with auto-registration | 2026-04-04 | OPEN，近 2 个月未合并 | 功能完整但长期挂起，建议 review 或说明阻塞原因 |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | PR | fix(poll-loop): suppress duplicate text | 2026-05-18 | OPEN，近 3 周未合并 | 修复消息重复的稳定性问题，建议 review |
| [#2703](https://github.com/nanocoai/nanoclaw/issues/2703) | Issue | 推荐安装路径下 `pnpm run chat hi` 挂起 120s | 2026-06-07 | OPEN，0 评论 | **新用户首次体验阻塞**，建议 24h 内响应 |
| [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) | Issue | `create_agent` 权限未校验 | 2026-06-07 | OPEN，0 评论 | **安全相关**，建议尽快确认并响应 |

---

**日报总结：** NanoClaw 今日社区贡献活跃，合并了 3 个涉及升级安全、账号轮换和文档的 PR。但新出现的权限安全 Issue（#2711）和安装体验 Issue（#2703）均无响应，加上积压 1 个月以上的 #2312 和近 2 个月未合并的 #1626，项目在**响应速度**上存在改进空间。建议维护者今日优先处理 #2711（安全）和 #2703（新用户阻塞），并对长期积压项给出明确时间表。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：** 2026-06-08
**数据来源：** https://github.com/nearai/ironclaw
**分析时段：** 过去 24 小时

---

## 1. 今日速览

IronClaw 今日呈现**高活跃度、高推进力**的核心工作日特征：过去 24 小时共有 **50 条 Issue 更新**（其中 42 条新开/活跃、8 条关闭）和 **38 条 PR 更新**（22 条待合并、16 条已合并/关闭），无新版本发布。

核心人才 `serrrfirat` 是当之无愧的**当日最大贡献者**，一人驱动了几乎所有活跃 Issue 的讨论和多条大型 PR 的提交，覆盖了 Reborn 工作流表层、WebUI v2、安全沙箱、API 迁移等多个核心方向。Dependabot 同步推送了 4 批依赖更新，显示项目依赖维护节奏正常。

整体来看，项目处于 **Reborn 主干集成冲刺阶段**，正在密集推进 Reborn 内核从"可用"向"安全、生产级、用户可用"的产品化链路迈进。

---

## 2. 版本发布

**无新版本发布。**

截至本日报时间点，最近的可合并变更仍停留在 PR 层面：
- **PR #3708**（chore: release，状态：开放中）计划推动 `ironclaw_common` 0.4.2→0.5.0、`ironclaw_skills` 0.3.0→0.4.0、`ironclaw` 0.24.0→0.29.1 等多个 crate 版本升级，其中 `ironclaw_common` 和 `ironclaw_skills` **标注了 API 破坏性变更（breaking changes）**，合并前需充分评审。

---

## 3. 项目进展

今日合并/关闭的 PR（共 16 条，以下为最重要的 10 条）：

| 状态 | # | 作者 | 简述 |
|:---:|---|:---:|---|
| ✅ 已关闭 | [#4530](https://github.com/nearai/ironclaw/pull/4530) | serrrfirat | 结构化模型可见工具观察值——为工具结果绑定类型化、可验证的模型可见观测数据 |
| ✅ 已关闭 | [#4532](https://github.com/nearai/ironclaw/pull/4532) | serrrfirat | Slack 允许频道选择器 WebUI 组件，管理端可配置 Slack 频道准入 |
| ✅ 已关闭 | [#4516](https://github.com/nearai/ironclaw/pull/4516) | serrrfirat | WebChat v2 线程删除能力，通过 Reborn 产品工作流门面路由 |
| ✅ 已关闭 | [#4511](https://github.com/nearai/ironclaw/pull/4511) | henrypark133 | 出站投递偏好合约 Phase 1——通过 RebornServicesApi 暴露 OutboundPreferencesProductFacade |
| ✅ 已关闭 | [#4463](https://github.com/nearai/ironclaw/pull/4463) | serrrfirat | Slack 主机 Beta 持久化存储——对话/出站/幂等状态从内存迁移到文件系统 |
| ✅ 已关闭 | [#3298](https://github.com/nearai/ironclaw/pull/3298) | serrrfirat | Hermes 风格密闭本地门禁——规范格式检查、Clippy 正确性、密闭 Rust 测试 |
| ✅ 已关闭 | [#3565](https://github.com/nearai/ironclaw/pull/3565) | serrrfirat | 延长夜间 E2E 测试超时从原值到 90 分钟，减少 CI 误报 |
| 🔵 打开中 | [#4534](https://github.com/nearai/ironclaw/pull/4534) | serrrfirat | 压缩保活活跃任务——压缩策略不丢弃最新用户边界，保证压缩后上下文连贯 |
| 🔵 打开中 | [#4527](https://github.com/nearai/ironclaw/pull/4527) | serrrfirat | 用户级技能设置 UI——设置界面增加 Skills 分组，添加/编辑/删除用户自有技能 |
| 🔵 打开中 | [#4531](https://github.com/nearai/ironclaw/pull/4527) | serrrfirat | 技能渐进式曝光改进——区分 discoverable / loaded / unavailable 三种激活状态 |

**关键进展判断：**
- **Reborn 产品化落地加速。** Slack 频道选择器（#4532）和线程删除（#4516）已落地，说明 Reborn 对 WebUI 产品表面的渗透正在快速补齐常规功能。
- **CI/CD 纪律强化。** Hermetic gate（#3298）和 E2E 超时调整（#3565）反映团队对工程质量基础设施的重视。
- **大型功能 PR 积压。** 当日提交但尚未合并的 XL 级 PR（#4534、#4527、#4531、#4492）显示多个重功能并行推进，需要关注审查资源。

---

## 4. 社区热点

### Issue 热度排行（按评论数降序）

| 排名 | Issue | 作者 | 评论 | 核心议题 |
|:---:|---|---|:---:|---|
| 1 | [#3280](https://github.com/nearai/ironclaw/issues/3280) | serrrfirat | 7 | 添加 ProductWorkflow 和 InboundTurnService 门面——Reborn 产品面最重要的入口层抽象 |
| 2 | [#3036](https://github.com/nearai/ironclaw/issues/3036) | ilblackdragon | 5 | 声明式配置即代码——租户蓝图和使用场景工具的声明式配置需求 |
| 3 | [#3044](https://github.com/nearai/ironclaw/issues/3044) | serrrfirat | 3 | 本地开发者运行时配置文件——简化本地搭建体验 |
| 4 | [#3283](https://github.com/nearai/ironclaw/issues/3283) | serrrfirat | 3 | 将 OpenAI 兼容 API 迁移到 Reborn——兼容性策略 |
| 5 | [#3333](https://github.com/nearai/ironclaw/issues/3333) | serrrfirat | 3 | Reborn 生产接线和缺失 crate —— 审计发现的空白 |

**讨论焦点解读：**

- **ProductWorkflow 门面争议（#3280，7 条评论）** 是今日的讨论焦点，5 月 6 日创建至今已累积 7 条评论，讨论集中在 Reborn ProductAdapter 与主机层服务之间的接口契约如何划分。标签 `suggested_P0` 表明这是最高优先级的架构决策之一。
- **配置即代码诉求（#3036，5 条评论）** 由 `ilblackdragon` 提出（唯一非 serrrfirat 的重度 Issue 作者），代表了**外部贡献者**对 IronClaw 操作化的强烈需求——当前混合 `.env`、`.system/`、JSON、扩展安装和运行时标志的配置方式缺乏 Schema 和审计日志，是典型的 operator 痛点。
- **`serrrfirat` 一人主导所有重磅讨论。** 评论最多的前 5 条 Issue 全部来自同一维护者，反映当前项目决策高度集中，社区参与深度有限。

### PR 热度排行

| 排名 | PR | 作者 | 规模 | 核心议题 |
|:---:|---|---|:---:|---|
| 1 | [#4527](https://github.com/nearai/ironclaw/pull/4527) | serrrfirat | XL | 用户级技能设置 UI |
| 2 | [#4503](https://github.com/nearai/ironclaw/pull/4503) | dependabot | XL | 38 个依赖批量升级（含 agent-client-protocol 0.10.4→0.14.0） |
| 3 | [#3708](https://github.com/nearai/ironclaw/pull/3708) | ironclaw-ci | M | 多 crate 版本发布（含 breaking changes） |
| 4 | [#4492](https://github.com/nearai/ironclaw/pull/4492) | serrrfirat | XL | 修复扩展凭证暂存配置（含 DB 迁移） |

---

## 5. Bug 与稳定性

今日 Issue 数据中**未发现明确标记为 `bug` 或 `crash` 的新报告**。但以下 Issue 涉及稳定性/安全风险，需关注：

| 严重度 | Issue | 简述 | 状态 | Fix PR |
|:---:|---|---|:---:|---|
| 🔴 高 | [#4042](https://github.com/nearai/ironclaw/issues/4042) | 租户沙箱进程能力不完整——Docker 租户沙箱仍限于简单命令执行，无法安全支持工作区 | OPEN | 无 |
| 🔴 高 | [#4116](https://github.com/nearai/ironclaw/issues/4116) | WebChat v2 缺少 Google/GitHub/NEAR SSO 登录——v1 有完整浏览器登录路径，v2 仅有 bearer/session | OPEN | 无 |
| 🟡 中 | [#3609](https://github.com/nearai/ironclaw/issues/3609) | 审批租约可能被 UI 提供的衰减值过度信任——存在安全面被扩宽的风险 | OPEN | 无 |
| 🟡 中 | [#3608](https://github.com/nearai/ironclaw/issues/3608) | 调度边界依赖代码审查——调用方可构造无权威证明的调度请求 | OPEN | 无 |
| 🟡 中 | [#3956](https://github.com/nearai/ironclaw/issues/3956) | FS 加固：RESOLVE_NO_XDEV 绑定挂载隔离——fd 相对解析器无法阻止跨设备挂载点遍历 | OPEN | 无 |
| 🟢 低 | [#4059](https://github.com/nearai/ironclaw/issues/4059) | Reborn 运行时错误信息过于保守——模型可见错误缺乏恢复上下文 | OPEN | 无 |

**关键发现：** 安全相关的 P0 级 Issue（#3609、#3608）自 5 月 14 日创建以来已存在近 3 周，均无关联 Fix PR，建议维护者评估是否需要在 Reborn WebUI Beta 发布前优先处理。

---

## 6. 功能请求与路线图信号

### 新功能需求（从 Issue 标签和摘要提取）

| 优先级 | Issue | 功能描述 | 实现信号 |
|:---:|---|---|:---|
| P0 | [#3280](https://github.com/nearai/ironclaw/issues/3280) | ProductWorkflow + InboundTurnService 门面 | 架构讨论活跃，预计近期有 PR |
| P0 | [#3032](https://github.com/nearai/ironclaw/issues/3032) | 无暴露防护——防止敏感数据跨越公开/模型/传输/持久化边界 | 已有 #3924 跟进 |
| P0 | [#3026](https://github.com/nearai/ironclaw/issues/3026) | 配置驱动的生产组合根 | 与 #3036 配置即代码需求互补 |
| P1 | [#3044](https://github.com/nearai/ironclaw/issues/3044) | 本地开发者运行时配置文件 | 与 #4517（首次启动种子 config.toml）直接相关 |
| P1 | [#3283](https://github.com/nearai/ironclaw/issues/3283) | OpenAI 兼容 API 迁移到 Reborn | 与 #3280 紧密耦合 |
| P2 | [#3572](https://github.com/nearai/ironclaw/issues/3572) | ProductAdapter 作为 WASM 组件在独立运行时中运行 | 架构重构，中长期方向 |
| P2 | [#3036](https://github.com/nearai/ironclaw/issues/3036) | 声明式配置即代码 | 外部贡献者需求，社区关注度高 |

### 路线图判断

结合今日 PR 动态，**下一版本（或 Reborn Beta）最可能包含的功能**：
1. ✅ **用户级技能管理 UI**（PR #4527 已提交）
2. ✅ **Slack 频道准入管理**（PR #4532 已合并）
3. ✅ **WebChat v2 线程删除**（PR #4516 已合并）
4. 🔄 **出站投递偏好**（PR #4511 已合并，Phase 1）
5. 🔄 **Reborn 配置种子文件**（PR #4517 开放中）
6. 🔄 **扩展凭证暂存修复**（PR #4492 开放中，含 DB 迁移）

---

## 7. 用户反馈摘要

由于 IronClaw 当前阶段 Issue 主要由核心维护者 `serrrfirat` 和 `zmanian` 驱动，**外部用户直接反馈较少**。但从 Issue 内容中可提炼以下痛点：

### 真实痛点

1. **配置管理混乱（#3036）**
   > "operators want to declaratively configure IronClaw, and today both have to hand-edit a mix of `.env`, workspace docs under `.system/...`, settings JSON, extension installs, and runtime flags — with no schema, no diff, no audit trail"
   
   **解读：** 运维人员对声明式、可审计的配置管理有强烈需求，当前碎片化配置方式已成为操作化瓶颈。

2. **本地开发体验门槛高（#3044）**
   > "needs a simple way to run as a local coding agent without making engineers manually wire grants, mounts, process backends, network policy, and approvals"
   
   **解读：** 新贡献者/用户的 onboarding 成本过高，需要一键式本地开发环境。

3. **安全边界信任问题（#3609、#3608）**
   > "A compromised or buggy approval surface could widen allowed effects/mounts/network/secrets/resources beyond the reviewed capability"
   
   **解读：** 安全架构师对当前审批机制的可信度存疑，需要更强的密码学保证。

### 满意信号

- **Reborn 架构方向获得内部认可。** 多条 Issue 的讨论集中在"如何完善"而非"是否应该做"，说明 Reborn 重构方向已被团队接受。
- **CI 纪律改善获得正面反馈。** Hermetic gate（#3298）的合并显示团队对工程质量的投入。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于关键阻塞状态，建议维护者优先关注：

### 长期开放的重要 Issue

| Issue | 创建日期 | 状态 | 标签 | 建议行动 |
|---|---|:---:|---|---|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | 2026-04-28 | OPEN | P2, enhancement | 已存在 39 天，外部贡献者需求，建议指定 owner |
| [#3044](https://github.com/nearai/ironclaw/issues/3044) | 2026-04-28 | OPEN | P1, reborn | 已存在 39 天，与 #4517 相关，可考虑关闭或合并 |
| [#3032](https://github.com/nearai/ironclaw/issues/3032) | 2026-04-28 | OPEN | P0, reborn | 已存在 39 天，安全关键，无 Fix PR |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) | 2026-04-28 | OPEN | P0, reborn | 已存在 39 天，生产组合根，无 Fix PR |
| [#3609](https://github.com/nearai/ironclaw/issues/3609) | 2026-05-14 | OPEN | P0, safety | 已存在 24 天，安全面信任问题，无 Fix PR |
| [#3608](https://github.com/nearai/ironclaw/issues/3608) | 2026-05-14 | OPEN | P0, safety | 已存在 24 天，调度边界安全，无 Fix PR |
| [#4042](https://github.com/nearai/ironclaw/issues/4042) | 2026-05-25 | OPEN | P1, risk: high | 已存在 13 天，沙箱能力不完整，无 Fix PR |
| [#4116](https://github.com/nearai/ironclaw/issues/4116) | 2026-05-27 | OPEN | risk: high | 已存在 11 天，SSO 登录缺失，无 Fix PR |

### 长期开放的 PR

| PR | 创建日期 | 状态 | 规模 | 建议行动 |
|---|---|:---:|---|---|
| [#3708](https://github.com/nearai/ironclaw/pull/3708) | 2026-05-16 | OPEN | M | 已存在 22 天，含 breaking changes，需尽快评审或关闭 |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) | 2026-05-24 | OPEN | L | 已存在 14 天，GitHub Actions 依赖升级 |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) | 2026-05-25 | OPEN | M | 已存在 13 天，WASM 依赖升级 |

### 积压风险提示

- **4 月 28 日批次 Issue（#3032、#3026、#3029、#3036、#3044）** 已开放超过 39 天，全部标记为 P0/P1，但均无关联 Fix PR。这批 Issue 来自 Reborn 切换后的关键阻塞项，建议维护者重新评估优先级和分配。
- **安全相关 P0 Issue（#3609、#3608）** 已存在 24 天，如果 Reborn WebUI Beta 有明确发布时间表，这些应作为发布前置条件处理。

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|:---:|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 50 Issue + 38 PR / 24h，极高活跃度 |
| 推进力 | ⭐⭐⭐⭐ | 16 条 PR 合并/关闭，功能落地明显 |
| 代码质量 | ⭐⭐⭐⭐ | Hermetic gate 落地，CI 纪律改善 |
| 社区参与 | ⭐⭐ | 核心贡献者高度集中，外部参与有限 |
| 安全态势 | ⭐⭐⭐ | 多条安全 P0 Issue 未关闭，需关注 |
| 文档/配置 | ⭐⭐ | 配置管理混乱，本地开发体验待改善 |

**总体评价：** IronClaw 正处于 Reborn 架构冲刺的高强度推进期，核心功能落地速度令人印象深刻。但安全关键 Issue 的积压和外部社区参与不足是两大隐患，建议在功能推进的同时分配资源清理安全债务。

---

*本日报由 OWL 基于 GitHub 公开数据自动生成，数据截至 2026-06-08。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-08

---

## 1. 今日速览

过去 24 小时内，LobsterAI 项目共有 **15 条 Issues 更新**，全部为已存在的 stale 问题被 retrigger/bump，**无新开 Issue**，**无 PR 活动**，**无新版本发布**。

项目处于典型的**维护静默期**——上周（2026-06-07）发生了集中性的用户反馈涌入（14 条 issues 同日更新），但今日无新增内容，社区活跃度显著回落。没有 PR 合并或关闭，核心开发推进几乎停滞。需要维护者关注积压问题的处置。

---

## 2. 版本发布

**过去 24 小时无新版本发布。**

---

## 3. 项目进展

**过去 24 小时无 PR 合并或关闭。** 项目在代码层面无可见进展。

> ⚠️ 值得注意：Issue #1518 — CI Labeler 工作流权限错误和 lint `--max-warnings 0` 策略问题 — 属于基础设施阻塞项，若不及时修复将影响后续所有 PR 的 CI 通过率。

---

## 4. 社区热点

由于今日所有 15 条更新均为 stale issue 被 retrigger，我们焦点分析 **2026-06-07 集中爆发的这批问题中用户诉求最强烈的议题**：

### 🔥 高频痛点：技能（Skills）模块系统性缺陷

用户 **MaoQianTu** 一人连续提交了 **5 条 issues**（#1500、#1502、#1506、#1512、#1516、#1525），构成一个**系统性反馈簇**，集中暴露了 Skills 子系统的多个核心缺陷：

| # | 核心问题 |
|---|---------|
| #1500 | 禁用技能后仍被注入提示词 |
| #1502 | Agent 设置保存后当前会话未同步 |
| #1506 | 定时任务 IM 通知会话空选可提交，静默失败 |
| #1512 | QQ Bot 白名单 UI 缺失输入框 |
| #1516 | Settings 关闭后 OAuth Token 静默丢失 |
| #1525 | 会话缺少颜色标注 |

👉 [netease-youdao/LobsterAI Issue #1500](https://github.com/netease-youdao/LobsterAI/issues/1500) · [Issue #1502](https://github.com/netease-youdao/LobsterAI/issues/1502) · [Issue #1506](https://github.com/netease-youdao/LobsterAI/issues/1506)

### 🏷️ 最新非 stale 问题

- **Issue #2121** — 用户 `nbjoe` 报告 AI 回复出现**重复输出文字**，怀疑大量消耗 token。这是今日唯一一条非 stale 问题，且直接关系到用户成本，需优先排查。

👉 [netease-youdao/LobsterAI Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121)

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 — 数据/状态静默丢失

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | GitHub Copilot OAuth Token 认证成功后静默丢失 | ❌ 无 |
| [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | 定时任务 IM 通知静默失败，用户无感知 | ❌ 无 |

### 🟠 高 — 功能逻辑错误

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | 禁用技能后仍保留在 activeSkillIds 中被调用 | ❌ 无 |
| [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | Agent 设置保存后当前会话 activeSkillIds 未同步 | ❌ 无 |
| [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | QQ Bot 群组白名单 UI 缺少添加输入框，功能完全不可用 | ❌ 无 |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | AI 回复重复输出，疑似大量浪费 token | ❌ 无 |

### 🟡 中 — 体验/校验缺陷

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | Popo IM 的 AES Key 缺少必填校验 | ❌ 无 |
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) | Skills 文件生成长时间阻塞无中间态反馈 | ❌ 无 |
| [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) | 声明条款内容格式不规范（序号重复、括号不完整） | ❌ 无 |

### 🔵 低 — 基础设施

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) | CI Labeler 权限错误 + lint 策略说明缺失 | ❌ 无 |

> **总结：所有 Bug 均无对应 Fix PR，积压严重。**

---

## 6. 功能请求与路线图信号

以下功能请求来自用户真实使用场景，按需求强度排序：

| Issue | 功能 | 信号强度 | 判断 |
|-------|------|---------|------|
| [#1541](https://github.com/netease-youdao/LobsterAI/issues/1541) | 会话标签分类与筛选 | ⭐⭐⭐⭐⭐ | 高频刚需，参考 Notion/Obsidian 标签体系 |
| [#1537](https://github.com/netease-youdao/LobsterAI/issues/1537) | AI 回复消息收藏/书签 | ⭐⭐⭐⭐ | 长对话场景核心需求 |
| [#1525](https://github.com/netease-youdao/LobsterAI/issues/1525) | 会话颜色标注 | ⭐⭐⭐⭐ | 视觉管理基础能力 |
| [#1528](https://github.com/netease-youdao/LobsterAI/issues/1528) | 批量导出会话 | ⭐⭐⭐ | 数据管理基本能力 |
| [#1532](https://github.com/netease-youdao/LobsterAI/issues/1532) | 本地使用统计面板 | ⭐⭐⭐ | 桌面端常见功能 |

**路线图判断：** 当前无任何 PR 在推进上述功能。考虑到 Skills 子系统的多个严重 Bug 尚未修复，预计维护者会优先处理稳定性问题，功能请求可能延后。**会话管理增强（标签、颜色、书签、导出）** 构成一个清晰的功能主题，建议作为下一个 minor 版本的规划方向。

---

## 7. 用户反馈摘要

### 😤 不满意

- **技能系统信任危机**：用户 `jimmy-xz`（#1509）明确对比了竞品 Openclaw，指出"同样的提示词给到 Openclaw 里相同的模型，就能很好地理解和生成我想要的 skills"，暗示 LobsterAI 在模型理解能力或 skill-creator 流程上存在差距。
- **静默失败模式反复出现**：多个 issue（#1506、#1516、#1500）都指向同一类问题——**操作失败但无任何反馈**。这是用户体验的最大敌人。
- **Token 浪费担忧**：用户 `nbjoe`（#2121）对重复输出直接质疑"是不是在大量吃我的token"，说明用户对 AI 成本高度敏感。

### ✅ 满意 / 建设性

- 用户 **MaoQianTu** 的反馈质量极高：每条 issue 都包含完整的复现步骤、根本原因分析，甚至对比了飞书/钉钉的实现差异（#1512），极大降低了维护者的排查成本。
- 功能请求类 issue（#1525、#1528、#1532、#1537、#1541）均附带详细的价值说明和实现建议，体现了深度用户的建设性参与。

### 📌 核心使用场景

从反馈中可提炼出以下高频使用场景：
1. **多 Agent + 多技能管理** — 用户同时使用多个 Agent，每个 Agent 配置不同技能组合
2. **IM Bot 集成** — QQ、钉钉、飞书等多渠道 Bot 配置与群组管理
3. **定时任务 + IM 通知** — 自动化任务触发后通过 IM 渠道推送结果
4. **长对话信息检索** — 数十条消息的会话中定位关键信息

---

## 8. 待处理积压

以下长期未响应的重要 Issue 需维护者重点关注：

| Issue | 创建日期 | 最后更新 | 等待天数 | 优先级 |
|-------|---------|---------|---------|--------|
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) | 2026-04-07 | 2026-06-07 | **62 天** | 🔴 P0 |
| [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | 2026-04-07 | 2026-06-07 | **62 天** | 🔴 P0 |
| [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) | 2026-04-07 | 2026-06-07 | **62 天** | 🟠 P1 |
| [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) | 2026-04-07 | 2026-06-07 | **62 天** | 🔴 P0 |
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) | 2026-04-07 | 2026-06-07 | **62 天** | 🟠 P1 |
| [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | 2026-04-07 | 2026-06-07 | **62 天** | 🔴 P0 |
| [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) | 2026-04-07 | 2026-06-07 | **62 天** | 🟡 P2 |
| [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | 2026-04-07 | 2026-06-07 | **62 天** | 🔴 P0 |
| [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) | 2026-04-07 | 2026-06-07 | **62 天** | 🟠 P1 |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 2026-06-07 | 2026-06-07 | **1 天** | 🔴 P0 |

> ⚠️ **关键风险**：14 条核心 Issue 自 2026-04-07 创建以来已积压 **超过 60 天**，全部标记为 stale，且无任何 PR 跟进。其中 5 条为 P0 级别（功能完全不可用或数据静默丢失）。这种积压深度可能反映维护资源不足或优先级错位，建议尽快 triage 并给出响应。

---

*数据来源：GitHub netease-youdao/LobsterAI | 报告生成时间：2026-06-08*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-06-08

> 数据来源：github.com/moltis-org/moltis | 统计窗口：过去 24 小时

---

## 1. 今日速览

Moltis 今日处于**中低活跃度维护期**：过去 24 小时有 1 条新 Issue 开启、3 条 Pull Request 进入开放状态（或与主分支同步更新），无新版本发布。所有 PR 均处于待合并（Open）状态，尚未产生今日合并动作。项目推进节奏以 Telegram 通道热修复和会话/可见性配置类重构为主轴，表明团队近期聚焦于消息通道稳定性与可观测性增强。

---

## 2. 版本发布

**无新版本发布。** 本次统计窗口内无 release/tag 创建。

---

## 3. 项目进展

今日无 PR 完成合并（已合并/关闭数为 0），但以下 3 条活跃 PR 均在近两天内更新，推进了关键方向：

| PR | 方向 | 简介 |
|---|---|---|
| **#1113** [hotfix(telegram): stream final replies without completion notify](https://github.com/moltis-org/moltis/pull/1113) | 通道 / 热修复 | 修复 Telegram 在启用 streaming 但关闭 completion notification 时，最终回答不被当作流式最终回复的回归问题。跟随 #1099 的 Telegram 编辑就地流式改动而来。 |
| **#1089** [Cap persisted tool results before rehydration](https://github.com/moltis-org/moltis/pull/1089) | 会话 / 数据层 | 在会话历史重新装配（rehydrate）为 provider-bound `ChatMessage` 时，对持久化的 `tool`/`tool_result` 内容进行截断（cap），覆盖普通聊天、流式聊天、压缩重试、提示词检查、静默记忆轮次、LLM-backed compaction prompt 等多条路径。 |
| **#1093** [Add channel activity log visibility settings](https://github.com/moltis-org/moltis/pull/1093) | 可观测性 / 配置 | 新增按账户、渠道、用户维度的 `activity_log` 可见级别设置（`all` / `errors_only` / `off`），用户级覆盖优先于渠道/账户默认值，作用于普通与附件类回复目标。 |

**评估：** 三条 PR 分别对应通道传输健壮性（hotfix）、会话内存与上下文质量（tool cap）、运维可观测性（activity log 分级），是 Moltis 作为 AI 多渠道网关向生产就绪迈进的关键补丁。若全部合入，将显著降低 Telegram 流式场景的截断异常率、控制长会话 LLM 上下文膨胀、提升运维排障效率。

---

## 4. 社区热点

**Issue #1107** — [Multiline text input in the mobile web UI](https://github.com/moltis-org/moltis/issues/1107)

- **作者：** IlyaBizyaev | **创建：** 2026-06-05 | **更新：** 2026-06-07 | **标签：** enhancement
- **摘要：** 提议在移动端 Web 界面中支持多行文本输入。作者已完成预检清单（已检索过现有请求、确认非重复提案）。
- **评论量：** 1 条 | 👍：0（刚开启，尚未积累互动）

**分析：** 这是一个来自真实用户的移动端 UI 体验痛点。作为 AI 助手类项目，移动端 Web 是高频入口，单行输入框对于较长 prompt 或粘贴多段内容极为不便。虽然当前评论量较低，但属于**终端用户体验类诉求**，若在多平台用户场景中得到共鸣（如与 Telegram 移动端形成互补），有望在下一轮 UX 迭代中排期。

---

## 5. Bug 与稳定性

过去 24 小时内**无新 Bug 报告**（issues 中无 bug/crash/regression 类标签的新条目）。

值得关注的**已知修复中 Bug**（已通过上方 PR 处理）：

| Bug 描述 | 严重程度 | 关联 PR | 状态 |
|---|---|---|---|
| Telegram streaming + completion notify 关闭 → 最终回复未正确流式输出 | **中**（影响 Telegram 串流用户体验，已知回归路径） | #1113 | Open / 待合并 |
| 长会话 rehydrate 时 tool/tool_result 内容无上限 → 可能导致上下文超长、计费/延迟上升 | **中**（长会话稳定性风险） | #1089 | Open / 待合并 |

---

## 6. 功能请求与路线图信号

**Issue #1107** — [Multiline text input in the mobile web UI](https://github.com/moltis-org/moltis/issues/1107)

- **类型：** 功能增强（enhancement）
- **方向：** 移动端 Web 前端用户体验
- **路线图信号：** 当前无关联 PR，属于待排期项。与 #1093 渠道可见性设置共同反映了用户对"更细粒度控制与更大操作空间"的需求。若团队在下一版本中聚焦 UX 改进（尤其是移动端），此条目优先级有望提升。

**合并 PR #1089 和 #1093 后可能触发的后续工作：**
- tool cap 阈值可能需要可调参数（当前硬编码 → 用户自定义 的 follow-up issue）
- activity log 的 `errors_only` 模式可能需要与外部告警系统集成的文档/示例

---

## 7. 用户反馈摘要

| 来源 | 场景 / 痛点 | 情绪 |
|---|---|---|
| #1107 | 移动端 Web UI 仅支持单行输入，长 prompt 编辑不便 | 中性提案（未表达强烈不满，但属于明确改进点） |
| #1113 | Telegram 流式最终回复在特定配置组合下丢失 | 开发团队内部识别并修复（技术债） |
| #1089 | 长会话持久化上下文无法控制体量 | 架构层面的前瞻性改进 |

**整体基调：** 社区体量仍较小（issue 互动低），但开发团队主动在底层架构层面投入，用户侧反馈以功能请求为主。

---

## 8. 待处理积压（提醒关注）

以下 PR 已开放较长时间，仍待审查合入：

| PR | 创建日期 | 天数 | 说明 |
|---|---|---|---|
| **#1089** — Cap persisted tool results before rehydration | 2026-06-01 | **7 天** | 会话反序列化数据层修复，覆盖多条路径，建议优先合入 |
| **#1093** — Add channel activity log visibility settings | 2026-06-03 | **5 天** | 功能完整，涉及配置合并逻辑，建议 review 后合入 |

**建议：** #1089 和 #1093 均在 2026-06-07 有最新活动（更新），表明作者仍在跟进。推荐维护者尽快安排 code review，避免长时间挂起导致冲突 #1113 创建于昨日，为热修复性质，建议**高优先级 review**。

---

> **项目健康度评分（今日）：** ⭐⭐⭐☆☆（3/5）
> — 活跃但有积压，无新发布，3 个开放 PR 待合并，社区互动偏低。 Telegram 热修复和会话稳定性补丁完成合入后，项目将进入更健康的维护节奏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-08

---

## 1. 今日速览

CoPaw 过去 24 小时活跃度中等偏上。新开了 **5 个 Issues**、**2 个 PRs**，无新合并 PR，无新版本发布。社区反馈集中在新版本（1.1.9/1.1.10）的回归 Bug，同时出现了两个值得关注的需求方向：视觉模型兜底配置与记忆系统升级。整体看项目处于**功能迭代期**，但近期升级引入了若干稳定性问题需尽快修复。

---

## 2. 版本发布

**无新版本发布。** 最新稳定版仍为 v1.1.10。

---

## 3. 项目进展

当前 **0 个 PR 被合并或关闭**，无实质性功能落地。

- **PR #4995** `fix(channels): preserve renderer tool output` — 由首次贡献者 AbbyJL 提交，修复当 `show_tool_details` 被关闭时，channel renderer 丢失工具输出附件和可见文本的缺陷，同时修复 `AudioContent` 中 `media_type` 未保留的问题。若合入可改善前端对话渲染的完整性。
- **PR #4949** `feat(acp): advertise commands, surface errors, tool params, agent/model meta, file links` — 作者 ekzhu，自 6 月 3 日处于 Under Review 状态。该 PR 扩展 ACP（Agent Client Protocol）服务端能力，为终端 TUI 客户端暴露命令列表、错误信息、工具参数、代理/模型元数据及文件链接，属于 ACP 协议层面的长期建设。昨日有更新，表明维护者仍在关注。

> **项目整体向前进展有限。** 无 PR 合并，新功能尚未进入主线。

---

## 4. 社区热点

| Issue | 类型 | 评论数 | 链接 |
|-------|------|--------|------|
| #4992 feat: 支持独立视觉模型配置 | Feature Request | **2** | [链接](https://github.com/agentscope-ai/CoPaw/issues/4992) |
| #4989 [Bug]: 1.1.9 & 1.1.10 对话无响应 | Bug Report | **2** | [链接](https://github.com/agentscope-ai/CoPaw/issues/4989) |

**分析：**

- **视觉模型兜底配置（#4992）**：核心诉求是让纯文本主模型也能通过一个独立视觉模型中转来处理多模态输入。这反映了用户在使用非多模态主力模型（如 longcat-2.0-preview、deepseek-v4-flash）时"被迫升级主模型才能看图"的痛点，架构上类似业界已有的 "visual model rewriter" 模式。
- **v1.1.9 对话无响应（#4989）**：用户明确指出在 QwenPaw 从 1.1.5 升级到 1.1.9/1.1.10 后，本地 vLLM 部署的千问 3.6-27B 虽然连接测试通过，但对话页面提交后无输出，属于典型回归。已有跟进讨论。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重等级 | Issue | 描述 | 已有 Fix PR |
|----------|-------|------|-------------|
| 🔴 **高** | [#4989](https://github.com/agentscope-ai/CoPaw/issues/4989) | v1.1.9/1.1.10 升级后，本地 OpenAI 兼容模型对话无响应（loading 转圈但无输出），影响核心对话功能。已知影响 1.1.9→1.1.10 升级用户 | ❌ 暂无 |
| 🟡 **中** | [#4993](https://github.com/agentscope-ai/CoPaw/issues/4993) | v1.1.10 图片预览放大后拖拽出现异常抖动，前端 UI 问题，macOS 26.5 环境下可复现 | ❌ 暂无 |
| 🟢 **低** | [#4991](https://github.com/agentscope-ai/CoPaw/issues/4991) | 用户提问，内容不完整，Impact 待定 | 待确认 |

**稳定性评估：** 项目在新版本发布后出现了核心功能回归 Bug（对话静默失败），且当前无对应修复 PR，建议维护者将其作为 P0 处理。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 分析 |
|-------|------|------|
| [#4992](https://github.com/agentscope-ai/CoPaw/issues/4992) | Feature: 独立视觉模型配置（visual_model fallback） | 有明确配置示例，设计直觉清晰，且已有社区关注和讨论，**很可能被纳入下一版本** |
| [#4994](https://github.com/agentscope-ai/CoPaw/issues/4994) Enhancement: 记忆系统薄弱，希望引入分层记忆框架 | 表达笼统，未给出具体实现方案，但反映了 Agent 长期记忆能力的普遍需求。**短期落地可能性较低**，需更详细的产品设计 |

**与现有 PR 的关联：** 当前两个开放 PR 均不直接处理上述功能请求，但 PR #4949（ACP 扩展）所暴露的 metadata 能力（agent/model/file links）可为未来视觉模型和记忆系统的 ACP 客户端集成提供协议基础。

---

## 7. 用户反馈摘要

**不满意 / 痛点：**

- **升级破坏向后兼容性**：用户花了时间从 1.1.5 升级到 1.1.9/1.1.10，却发现核心对话功能失效（#4989）。虽然 Docker 持久化数据操作正确（挂载已有数据路径 / 全新路径均测试），升级后仍然触发 Bug，说明是代码层面的回归而非配置问题。
- **"连接测试通过"不等于"实际可用"**：用户特别提到界面测试连接成功、多模态测试也成功，但对话仍失败，暗示当前健康检查逻辑覆盖不足。
- **前端 UI 细节体验差**：图片拖拽抖动（#4993）导致浏览体验下降，虽非致命但影响专业感。

**满意 / 正面信号：**

- 出现首次外部贡献者（AbbyJL 提交 PR #4995），表明社区生态在扩展。
- 用户对 ACP 协议扩展（ekzhu 的 PR #4949）有持续跟进，说明 CoPaw 作为 Agent 基础设施的定位正被社区认可。

---

## 8. 待处理积压

| PR | 状态 | 开日 | 链接 |
|----|------|------|------|
| #4949 feat(acp): advertise commands, surface errors, tool params, agent/model meta, file links | Under Review | 2026-06-03 | [链接](https://github.com/agentscope-ai/CoPaw/pull/4949) |

> **提醒：** PR #4949 已开放 **5 天**，昨日有更新表明仍在讨论中，但一直未获正式 review 意见。建议维护者在下一轮 sprint 中给予澄清或合并决定，避免长期悬置打击贡献者积极性。

---

*数据来源：agentscope-ai/CoPaw | 报告生成时间：2026-06-08*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-08

---

## 1. 今日速览

ZeroClaw 今日维持高活跃开发节奏：过去 24 小时内 **50 条 Issues 更新**（33 新开/活跃，17 已关闭）、**50 条 PR 更新**（39 待合并，11 已合并/封闭），无新版本发布。项目当前处于 **v0.8.0 发布准备阶段**（已有 `chore(release): release v0.8.0` PR #7364 创建），大量功能 PR 堆积待合并。核心维护者 `singlerider` 异常活跃，今日一人贡献了至少 6 个 PR 和多个 Issue 回复，代码审查压力显著。社区参与热度良好，但长期积压的 bug 和 feature request 仍较多。

---

## 2. 版本发布

**无新版本发布。**

当前版本仍为 v0.7.x 系列。`chore(release): release v0.8.0`（PR [#7364](https://github.com/zeroclaw-labs/zeroclaw/pull/7364)）已于 2026-06-07 创建，为发布准备分支，尚未合并。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

今日有 **11 个 PR 合并或关闭**，以下是关键进展：

| PR | 状态 | 内容摘要 |
|---|---|---|
| [#7357](https://github.com/zeroclaw-labs/zeroclaw/pull/7357) | ✅ Merged | **修复 channel image-history 回归测试**——更新测试 fixture 以匹配 `ChannelRuntimeContext` 的最新字段结构，消除因模型提供者重构导致的 nightly 测试失败 |
| [#7315](https://github.com/zeroclaw-labs/zeroclaw/pull/7315) | ✅ Merged | **Bedrock：跳过不支持 prompt caching 的模型**——修复 #7312，非 Claude/Nova 模型（如 Qwen）在第二次 prompt 时收到 400 错误的问题 |
| [#7262](https://github.com/zeroclaw-labs/zeroclaw/pull/7262) | ✅ Merged | **新增 7 个 OpenAI 兼容 provider 的使用示例文档**——Morph, GitHub Models, Upstage, Featherless, Arcee, Lambda AI, Inception |
| [#7011](https://github.com/zeroclaw-labs/zeroclaw/pull/7011) | ✅ Merged | **维护者工作流：定义 Issue 所有权路径**——明确已接受、进行中、免于过期标记的 Issue 的所有权归属流程 |
| [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) | ✅ Merged | **Per-alias 模型/Provider 级联回退**——重新引入 V2/V3 移除的 Provider 级失败回退链（不同于全局 model fallback） |
| [#7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190) | ✅ Merged | **zerocode：出站消息队列 + 侧边栏 + 消息注入**——从"处理响应时完全阻塞输入"改为排队机制，体验大幅提升 |
| [#7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209) | ✅ Merged | **zerocode：/model 和 /model-provider 实时切换**——会话内无需退出即可切换模型和 provider |
| [#7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249) | ✅ Merged | **zerocode：主题增强**——24-bit 颜色降级兼容、预设主题注册表、per-agent 颜色覆盖、调色板色卡 |

**整体推进：** v0.8.0 的 feature 冻结已接近完成期的合并消化阶段此次合并主要集中在 zerocode 前端 UX 增强和 provider 基础设施完善。7 个新 OpenAI 兼容 provider 的 schema v3 合并、per-alias 回退机制、出站消息队列是 v0.8.0 的核心亮点。当前仍堆积 39 个待合并 PR，发布节奏取决于审查速度。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**1. [#4866 [CLOSED]](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) — Web dashboard 仍然不可用**
- **28 条评论** | 👍 0 | 创建: 2026-03-28 | 关闭: 2026-06-07
- **严重程度 S1（工作流阻塞）**。用户访问 Web UI 或 Tauri 桌面应用时持续提示 *"Web dashboard not available. Build it with: cd web && npm ci && npm run build"*，多个版本未修复。最终于今日关闭，但未见明确的修复 commit 引用——可能通过文档/构建流程调整解决。
- **用户痛点：** 新用户体验极差，预编译二进制不包含 web UI 是一个持续性摩擦点。

**2. [#4710 [OPEN]](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — 设计更好的 LOGO**
- **11 条评论** | 👍 2 | 状态: blocked, needs-author-action
- 社区成员主动提供 Logo 设计建议并附设计图，但项目方尚未选定方向。低优先级的项目品牌问题。

**3. [#5146 [OPEN]](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) — 通过 skill 编译最小化 token 消耗**
- **9 条评论** | 👍 1 | 标签: agent, runtime, security, skills
- **核心诉求：** 每次简单的"天气查询"请求都把 400+ 行的 SKILL.md 全文发送给 LLM，造成巨大 token 浪费。建议编译为更紧凑的表示。
- **影响面：** 所有使用 skills 的用户，直接关联使用成本。

**4. [#3642 [OPEN]](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) — 提供"全功能"Docker 镜像**
- **9 条评论** | 👍 3 | 状态: blocked
- **诉求：** 官方 Docker 镜像默认禁用 WhatsApp 等特性以压缩镜像体积，导致非技术用户入门门槛高。需要 `zeroclaw-full` 标签。

**5. [#2767 [OPEN]](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) — 多 Agent 路由**
- **6 条评论** | 👍 9 | 标签: agent, channel, gateway, memory, runtime, security
- **最受欢迎的 feature request 之一**（👍 9）。希望效仿 OpenClaw 实现多 Agent 隔离路由：独立 workspace / agentDir / session + 多渠道账号，通过 bindings 路由入站消息。这是架构层面的重要需求。

### 🔥 最新的关键 PR

**[#7365](https://github.com/zeroclaw-labs/zeroclaw/pull/7365) — docs push (WIP)**
- 作者 singlerider，DO NOT MERGE，正在进行的大规模文档更新。

**[#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) — RFC-6969: per-turn output routing via send_via + voice delivery fixes**
- **亮点：** 修复多 channel 双发 bug、voice-only peer 投递逻辑，引入 `send_via` 按轮次指定输出路由。这是 #6969 号 RFC 的实现，值得关注。

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（S0-S1）

| Issue | 严重程度 | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | **S0 — 数据丢失/安全风险** | `file_write` tool 静默失败：报告写入成功但文件在宿主文件系统中不可见 | OPEN, in-progress | ⚠️ 无 |
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | **S1 — 工作流阻塞** | Web dashboard / Tauri app 持续不可用 | **CLOSED** ✅ | 已关闭（通过文档/构建调整） |
| [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) | **S1 — 工作流阻塞** | `context_compression` 在 daemon/channel 模式下不触发 | **CLOSED** ✅ | — |
| [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | **S1 — 工作流阻塞** | Fallback provider chain 忽略 `[providers.X]` 配置 | **CLOSED** ✅ | 已修复 |
| [#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) | **S1 — 工作流阻塞** | Delegate agents 忽略 `prompt_injection_mode` 始终注入完整 skills | **CLOSED** ✅ | 已修复 |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | **S1 — 工作流阻塞** | Gemini CLI OAuth 完全无法工作 | OPEN, in-progress | ⚠️ 无 |
| [#4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827) | **S1 — 工作流阻塞** | Channel mode 中 auto_compact_history 未启用，工具调用上下文丢失 | **CLOSED** ✅ | — |

### 🟡 中等 Bug（S2）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#7253](https://github.com/zeroclaw-labs/zeroclaw/issues/7253) | Web console `/config` 页面 JSON.parse 失败 | 未标注 | **PR #7343** OPEN 🔧 |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | `web_fetch` 的 `allowed_private_hosts` 对解析到内网 IP 的域名无效 | **CLOSED** ✅ | — |
| [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | zeroclaw 日志应输出到 stderr 而非 stdout | OPEN | ⚠️ 无 |
| [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | 飞书集成默认只调用 LLM 而非 Agent | OPEN | ⚠️ 无 |

### 🟢 Bug 趋势分析

- **今日关闭率较高**：17 个 Issues 关闭中包含多个 S1 级别 bug，表明维护者在 recent 一周内集中清理了积压的关键缺陷。
- **仍有关键 bug 悬而未决**：`#4627` file_write 静默失败（S0 数据丢失级别）已创建近 3 个月，仍未修复，需要优先关注。
- **Web 控制台**：#7253 web console config 页面有活跃 PR #7343 修复中，有望很快解决。
- **Bedrock provider**：#7312 通过 #7315 修复合并，#7343 继续跟进 conversation_id 重置问题。

---

## 6. 功能请求与路线图信号

### 🔮 高概率纳入 v0.8.x / v0.9.0 的需求

| 需求 | Issue | 信号强度 | 分析 |
|---|---|---|---|
| **Per-turn output routing (send_via)** | [#7361](https://github.com/zeroclaw-labs/zerocaw/pull/7361) | 🟢 高 | 已有活跃 PR，修复双发 bug 同时引入 send_via 路由能力 |
| **7 个新 OpenAI 兼容 Provider** | [#7260](https://github.com/zerocaw-labs/zeroclaw/pull/7260) | 🟢 高 | PR 已创建，文档配套 #7262 已合并 |
| **Schema v3 typed-slot 架构** | [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) | 🟢 高 | 已合并，是 v0.8.0 核心架构升级 |
| **Context-window usage bar** | [#7362](https://github.com/zeroclaw-labs/zeroclaw/pull/7362) | 🟡 中 | 当前 PR 将其暂时隐藏（`SHOW_CTX_BAR = false`），功能成熟后启用 |

### 🔮 中期路线图信号

| 需求 | Issue | 👍 | 分析 |
|---|---|---|---|
| **多 Agent 路由** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | 9 | 社区呼声最高的 feature之一，架构复杂度高 |
| **A2A 协议支持** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | 7 | Google A2A 生态对齐，战略价值大但工程量巨大 |
| **Token 消耗最小化（skill 编译）** | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | 1 | 直接影响运营成本，技术方向上可结合 #5155（delegate skills 注入优化）一起解决 |
| **Air-gapped 执行模式** | [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | 0 | 安全/企业场景刚需，有 RFC 文档 |

### 🔮 低优先级 / 待定

| 需求 | Issue | 分析 |
|---|---|---|
| Bubblewrap 沙箱可写路径配置 | [#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127) | 安全增强，niche 需求 |
| Per-user channel 消息投递工具 | [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) | 功能需求清晰，但工作量不大 |
| Shell 命令 pre/post message hooks | [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | 扩展性增强 |
| 全功能 Docker 镜像 | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 已有 👍 3，阻塞中，可能与 CI/CD 策略相关 |
| NapCat/OneBot channel | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | 社区需求，但无维护者跟进 |

---

## 7. 用户反馈摘要

### 😤 主要痛点

1. **Web UI 体验断裂（高频、长期）**
   - Issue #4866（28 条评论）是最典型代表：用户安装后无法开箱使用 Web 或 Tauri UI，被迫手动 build，严重损害新手体验。跨多个版本未彻底根除，说明构建/分发流程存在深层问题。
   - 用户原话摘要：*"this issue has persisted across many versions"* — 反复出现的挫败感。

2. **Docker 入门门槛高（#3642, #6760）**
   - 新用户期望 `docker pull zeroclaw && docker run` 就能获 WhatsApp 等完整功能体验，但当前镜像为控制体积默认裁剪了大量 feature flags。
   - 社区已有用户自行编写 docker-compose（见 #6760），说明需求真实且有行动力。

3. **Provider 配置与使用体验不足**
   - Fallback 链忽略配置文件（#5803）、Gemini OAuth 失败（#4879）、Bedrock 对非 Claude 模型兼容性差（#7312）——用户在不同 provider 的认证和 fallback 场景下频繁踩坑。
   - `zeroclaw models list` 只显示数量不显示模型名（已有 PR #7346 修复）——信息不足导致选择困难。

4. **Channel 行为与预期不一致**
   - 飞书集成只调 LLM 不调 Agent（#4873）、Channel mode 丢失工具调用上下文（#4827）、File write 工具静默失败（#4627）——这些 bug 直接影响核心可用性和数据完整性。

### 😊 正面反馈方向

- **zerocode TUI 持续迭代**：出站消息队列（#7190 已合并）和模型实时切换（#7209 已合并）获得大量社区关注，说明很多人将 zerocode 作为主要交互入口。
- **多 provider 支持扩展**：#7260 新增 7 个 OpenAI 兼容 provider 获得积极反馈。

---

## 8. 待处理积压 — 需要维护者关注

### ⚠️ 高风险长期 Issue（无响应或 blocked）

| Issue | 创建日期 | 严重程度 | 风险说明 |
|---|---|---|---|
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) file_write 静默失败 | 2026-03-25 | **S0** | 数据损失级别，3 个月无修复。Docker 用户核心路径。 |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) Gemini OAuth 不工作 | 2026-03-28 | S1 | 标记 in-progress 但3个月无进展，可能有认证流程根本性变更。 |
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) 同上 | — | — | 强烈建议分配 owner。 |

### 📋 PR 积压压力

当前 **39 个 PR 待合并**，审查压力集中在少数维护者（主要是 `singlerider`）。以下 PR 长期待审：

| PR | 创建日期 | 等待天数 | 说明 |
|---|---|---|---|
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) Air-gapped 执行模式 RFC | 2026-05-03 | ~36天 | 架构级 RFC，需要架构评审 |
| [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) Per-turn output routing | 2026-06-07 | 1天 | 新 PR，但涉及多 channel 核心逻辑，需仔细审查 |
| [#7350](https://github.com/zeroclaw-labs/zeroclaw/pull/7350) Azure OpenAI reasoning_effort | 2026-06-07 | 1天 | 小修复，可快速合并 |
| [#7260](https://github.com/zeroclaw-labs/zeroclaw/pull/7260) 7 个新 Provider | 2026-06-05 | 3天 | 文档已合并，代码审查中 |

### 📋 长期 Blocked Feature Request

| Issue | 创建日期 | 状态 | 建议 |
|---|---|---|---|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) 全功能 Docker 镜像 | 2026-03-15 | blocked | 明确 block 原因（CI 资源？策略？），或提供社区构建指南 |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) NapCat/OneBot channel | 2026-03-02 | accepted | 3 个月无进展，考虑标记为 help wanted 或关闭 |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) Logo 设计 | 2026-03-25 | needs-author-action | 低优先级，但社区已提供设计稿，建议尽快决策 |

---

**日报总结：** ZeroClaw 正处于 v0.8.0 发布冲刺期，核心功能 PR 大量合并，zerocode 前端体验显著提升，provider 生态快速扩展。主要风险在于：(1) 39 个待合并 PR 的审查瓶颈；(2) file_write 静默失败（S0）等关键 bug 长期未修复；(3) Web UI 分发体验持续损害新用户转化。建议维护者近期优先处理 #4627 和 #4879，并考虑扩大 reviewer 团队以消化 PR 积压。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*