# OpenClaw 生态日报 2026-06-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-28 00:38 UTC

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

# OpenClaw 项目日报 — 2026-06-28

## 1. 今日速览

OpenClaw 今日保持极高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 486，关闭 14），PR 更新 500 条（待合并 447，已合并/关闭 53）。新合并/关闭的 PR 数量较少（53），大量 PR 堆积在待合并状态，说明审查带宽存在明显瓶颈。无新版本发布。当前项目处于高并发贡献期，社区提交的 bug 修复和功能 PR 大量排队等待维护者审阅，多个高影响 P0/P1 issue 仍未关闭。

---

## 3. 项目进展

今日合并/关闭的主要 PR：

| PR | 状态 | 内容 |
|---|---|---|
| [#97334](https://github.com/openclaw/openclaw/pull/97334) | 已合并 | fix(daemon): 通过 CLI flag 固定 Node heap 上限，解决托管环境下内存溢出问题 |
| [#97075](https://github.com/openclaw/openclaw/pull/97075) | 已合并 | Doctor: 暴露 gateway 运行时健康检查结果，增强可观测性 |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | 已合并 | 添加 PR review 自动修复流水线 + Windows 守护进程 |

**关键待审阅 PR（Ready for Maintainer）：**

- **[#85249](https://github.com/openclaw/openclaw/pull/85249)** — 修复 cron 隔离执行器中 `sourceDelivery` 为 undefined 导致的 TypeError，P1 级别，已标记 ready for maintainer review。
- **[#54716](https://github.com/openclaw/openclaw/pull/54716)** — 修复 `sessions.list` 对字面 per-agent store 路径的处理，解决多 Agent 会话发现异常。
- **[#52664](https://github.com/openclaw/openclaw/pull/52664)** — 在 plugin hook 事件中暴露 `rawBody` 字段，增强插件系统可观测性。
- **[#63634](https://github.com/openclaw/openclaw/pull/63634)** — 接受无严格 `inputSchema.type` 的 MCP tool schema，修复 MCP server 加载失败。
- **[#63330](https://github.com/openclaw/openclaw/pull/63330)** — 新增 `followup turn` API 和 gateway-restart 扩展，允许插件主动调度 Agent turn。
- **[#61485](https://github.com/openclaw/openclaw/pull/61485)** — 将 `llm_input`/`llm_output` hooks 从只读升级为可修改，赋能合规/过滤场景。
- **[#61576](https://github.com/openclaw/openclaw/pull/61576)** — 新增 Rust/GTK4 Linux 桌面伴侣应用，为 Linux 用户提供原生体验。

**项目整体推进评估：** 今日合并量偏低（53/500），但待合并队列中有大量高价值 PR 已标记 ready for review。瓶颈在维护者审查能力而非贡献量。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

**1. [#48788](https://github.com/openclaw/openclaw/issues/48788)** — 集中化文件名编码工具（18 条评论）
- **诉求：** 解决飞书等渠道中文文件名在多编码场景（Shift-JIS、EUC-KR、GB18030）下的乱码问题。当前 PR #48578 仅修复了 UTF-8 被误读为 Latin-1 的常见情况。
- **标签：** P2, impact:data-loss, 🦞 diamond lobster

**2. [#58450](https://github.com/openclaw/openclaw/issues/58450)** — Agent 承诺后续跟进但不执行（15 条评论，👍3）
- **诉求：** Agent 在对话中声称"我会回来跟进"但实际上未启动任何后台任务、子 Agent 或 cron job。用户期望 Agent 的承诺与行为一致。
- **标签：** P2, impact:session-state, impact:message-loss, 🐚 platinum hermit

**3. [#92201](https://github.com/openclaw/openclaw/issues/92201)** — Anthropic thinking block 签名间歇性无效（15 条评论）
- **诉求：** Embedded runner 在回放时出现 thinking block 签名校验失败，但错误文本被泛化导致恢复机制不触发。影响 Slack 插件用户。
- **标签：** P1, impact:session-state, impact:message-loss, 🦞 diamond lobster

**4. [#50090](https://github.com/openclaw/openclaw/issues/50090)** — 社区 Skill 开发与 ClawHub 生态（15 条评论，👍2）
- **诉求：** 用户期望 ClawHub 技能生态从"承诺"走向"实践"，降低技能开发和发布的门槛。
- **标签：** P2, impact:security, 🦞 diamond lobster

**5. [#62505](https://github.com/openclaw/openclaw/issues/62505)** — 编码 Agent 回归：不再完成任何任务（14 条评论）
- **诉求：** 2026.4.2 版本前正常工作的编码 Agent 现在只输出模糊状态更新，不产出实际代码。严重回归。
- **标签：** P1, regression, impact:session-state, impact:message-loss, 🦞 diamond lobster

---

## 5. Bug 与稳定性

### 🔴 P0 — 严重/崩溃

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#95833](https://github.com/openclaw/openclaw/issues/95833) | Subagent abort-settle 未释放 .jsonl.lock，永久锁定会话 | **已关闭** | 未明确 |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | Playwright 未捕获的 assertion error 导致 Gateway 崩溃 | 开放 | 无 |

### 🟠 P1 — 高影响

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Anthropic thinking block 签名间歇性无效 | 开放 | 无 |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 编码 Agent 回归：不再完成任何任务 | 开放 | 无 |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 高 reserveTokensFloor 下仍反复触发 hard reset | 开放 | 无 |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | sessions.json 无限增长导致 Gateway OOM（50-100 MB/min） | 开放 | 无 |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway 内存泄漏：4 天从 389MB 增至 14.7GB | 开放 | 无 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 大参数 tool call 导致 "Network connection lost" | 开放 | 无 |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes 无条件剥离 operator scopes（回归） | 开放 | 无 |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) | Google Chat Space/Group 消息被静默忽略 | 开放 | 无 |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | Discord routing/mention-gating 回归 | 开放 | 无 |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome extension browser relay 被移除且无跨机器替代（回归，👍5） | 开放 | 无 |

### 🟡 P2 — 中等影响

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | Safeguard compaction 忽略 compaction.model 配置 | 开放 | 无 |
| [#50165](https://github.com/openclaw/openclaw/issues/50165) | Subagent 在底层工作未完成时即显示完成 | 开放 | 无 |
| [#50248](https://github.com/openclaw/openclaw/issues/50248) | sessions cleanup --fix-missing 误删新 cron 会话 | 开放 | 无 |
| [#53486](https://github.com/openclaw/openclaw/issues/53486) | Feishu message(action=send) 卡片 JSON 被渲染为纯文本（回归） | 开放 | 无 |
| [#56692](https://github.com/openclaw/openclaw/issues/56692) | 群聊上下文处理可能混淆消息指向 | 开放 | 无 |
| [#57256](https://github.com/openclaw/openclaw/issues/57256) | openclaw status 误报 memory 不可用 | 开放 | 无 |
| [#62328](https://github.com/openclaw/openclaw/issues/62328) | node:sqlite 缺少 FTS5 模块，memory 关键词搜索失效 | 开放 | 无 |

**关键修复 PR（已 ready for review）：**
- [#85249](https://github.com/openclaw/openclaw/pull/85249) — 修复 cron 隔离执行器 TypeError
- [#63634](https://github.com/openclaw/openclaw/pull/63634) — 修复 MCP tool schema 加载失败
- [#64127](https://github.com/openclaw/openclaw/pull/64127) — Provider circuit breaker for quota exhaustion

---

## 6. 功能请求与路线图信号

### 高优先级功能需求（👍 较多或评论活跃）

| Issue | 需求 | 信号强度 |
|---|---|---|
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault 配置 | 👍10，10 条评论 — 多 Agent 隔离知识库 |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | 敏感数据脱敏（配置文件 + 日志 + UI） | 8 条评论 — 生产安全刚需 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI 支持 MathJax/LaTeX 渲染 | 👍7，8 条评论 — 科学/教育场景 |
| [#54794](https://github.com/openclaw/openclaw/issues/54794) | Telegram Inline Query 支持 | 👍2，6 条评论 — 提升 Telegram 用户体验 |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | 长运行 channel turn 的持久任务状态面板 | 👍2，7 条评论 |
| [#56349](https://github.com/openclaw/openclaw/issues/56349) | 不可绕过的出站策略执行（pre-send guarantee） | 6 条评论 — 安全合规 |
| [#58818](https://github.com/openclaw/openclaw/issues/58818) | 保证最近 N 条原始消息在 Agent 上下文中存活 | 👍2，6 条评论 |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | 多索引 embedding memory + 模型感知故障转移 | 👍1，6 条评论 |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | Multi-Slot Memory 架构 | 👍3，6 条评论 |

### 架构级 RFC

| Issue | 内容 |
|---|---|
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | 多 Agent 协作增强：能力画像 + 共享黑板 + 分层记忆 + Token 成本治理 |
| [#48874](https://github.com/openclaw/openclaw/issues/48874) | 多 Session 架构：共享 LLM + 隔离 Session + 公共知识库 |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) | Context Provenance：为注入的上下文段添加来源/易变性元数据 |

### 路线图判断

结合已有 PR 和讨论趋势，以下方向可能被纳入近期版本：
1. **Session 历史跨 reset 追溯** — PR #90239 + #90259 已 ready，解决 `chat.history` 跨 transcript 断裂问题
2. **Hosted Marketplace 功能栈** — PR #95964 正在推进，4 个 PR 按序落地
3. **Plugin 系统增强** — `rawBody` 暴露（#52664）、followup turn API（#63330）、llm_input/output 可修改化（#61485）均 ready
4. **内存/稳定性修复** — OOM、内存泄漏、锁文件清理等长期问题需要系统性解决

---

## 7. 用户反馈摘要

### 痛点

1. **内存与稳定性是最大用户痛点：** 多个高评论 issue 指向 Gateway OOM（#55334）、内存泄漏（#54155）、sessions.json 无限增长。用户反映 24GB 机器在 4 天内被吃到 58%。这是影响生产部署的核心障碍。

2. **Agent 行为不可靠：** Agent 承诺后续跟进但不执行（#58450）、subagent 显示完成但实际未完成（#50165）、编码 Agent 回归不产出代码（#62505）——用户对 Agent 的信任度正在被这些"表面完成"的问题侵蚀。

3. **多平台消息投递不可靠：** Google Chat 群消息静默丢失（#58514）、Feishu 卡片渲染退化（#53486）、Discord routing 回归（#44502）、WhatsApp 断连后消息无法补取（#50093）——渠道适配器的可靠性是社区持续关注的焦点。

4. **安全合规诉求强烈：** 敏感数据明文存储（#64046）、出站策略无法强制执行（#56349）、Chrome extension relay 被移除（#53599）——企业用户对这些问题的解决有明确时间压力。

### 满意

- 编码质量受认可：多个 PR 标记 `proof: sufficient`，社区对代码审查流程表示认可
- 插件系统扩展性获关注：plugin hook 增强相关 PR 讨论积极
- ClawHub 生态愿景受社区期待（#50090）

---

## 8. 待处理积压

### 长期未响应的高影响 Issue（创建超过 60 天，仍开放）

| Issue | 创建日期 | 评论数 | 状态 |
|---|---|---|---|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 2026-03-17 | 18 | 开放，需产品决策 |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | 2026-03-31 | 15 | 开放，需产品决策 |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | 2026-03-19 | 15 | 开放，需产品决策 |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 2026-04-07 | 14 | 开放，需产品决策 |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | 2026-03-30 | 14 | 开放，需产品决策 |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | 2026-03-29 | 13 | 开放，需产品决策 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | 2026-03-24 | 13 | 开放，需产品决策 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 2026-03-21 | 12 | 开放，需产品决策 |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | 2026-03-26 | 10 | 开放，需产品决策 |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | 2026-03-25 | 11 | 开放，需产品决策 |

### 积压 PR 提醒

当前 **447 个 PR 处于待合并状态**，其中以下高价值 PR 已标记 ready for maintainer review 超过 5 天：

- [#85249](https://github.com/openclaw/openclaw/pull/85249) — cron TypeError 修复（6 天）
- [#54716](https://github.com/openclaw/openclaw/pull/54716) — sessions.list 修复（33 天）
- [#52664](https://github.com/openclaw/openclaw/pull/52664) — plugin rawBody 暴露（35 天）
- [#63634](https://github.com/openclaw/openclaw/pull/63634) — MCP schema 修复（19 天）
- [#63330](https://github.com/openclaw/openclaw/pull/63330) — followup turn API（20 天）
- [#61485](https://github.com/openclaw/openclaw/pull/61485) — llm_input/output 可修改化（23 天）
- [#61576](https://github.com/openclaw/openclaw/pull/61576) — Rust/GTK4 Linux 应用（22 天）

### ⚠️ 特别关注

- **#51429** — 工作路径被硬编码为 `/Users/wangtao`，这是一个已合并进发布版本的严重 bug，影响所有非 wangtao 用户。已开放 97 天，需确认是否已在后续版本修复。
- **#53599** — Chrome extension browser relay 被移除（👍5），影响跨机器托管用户，需明确替代方案或回滚策略。
- **#55334 / #54155** — 内存问题（OOM + 泄漏）是影响生产部署的 top 优先级问题，建议分配专项资源排查。

---

*数据来源：GitHub.com/openclaw/openclaw | 报告生成时间：2026-06-28*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告（2026-06-28）

---

## 1. 生态全景

2026 年 6 月 28 日，个人 AI 助手/自主智能体开源生态呈现出**高并发贡献与审查瓶颈并存**的整体态势。单日 17 个跟踪项目合计产生 257+ 条 Issue 更新和 600+ 条 PR 更新，但多数项目 PR 积压严重——审查带宽而非贡献量成为核心约束。技术方向集中在四大主线：**Agent 行为可靠性**（memory 隔离、工具调用确定性、会话持久化）、**多平台消息投递一致性**（Telegram/WhatsApp/Discord/Feishu 渠道适配）、**安全合规架构**（审批流、策略引擎、供应链签名）、以及**本地小模型兼容性**（tool schema 归一化、推理内容兜底）。生态内出现明显分层：少数项目（OpenClaw、Hermes、ZeroClaw、IronClaw）已进入平台化/加固期，多数中小项目处于特色化探索阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | PR 积压率 | 健康度评估 | 阶段定位 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 无 | ~89% (447/500) |  活跃但瓶颈明显 | 高并发贡献期 |
| **Hermes Agent** | 50 | 50 | 无 | ~84% (42/50 估) |  良好，响应快 | 快速迭代期 |
| **ZeroClaw** | 46 | 50 | 无 | ~94% (47/50) | 🟡 活跃但积压严重 | 平台化建设期 |
| **IronClaw** | 12 | 50 | 无 | ~56% (28/50) |  良好 | 里程碑交付期 |
| **NanoBot** | 8 | 47 | 无 | ~38% (18/47 估) | 🟢 良好 | 密集修复期 |
| **CoPaw** | 5 | 15 | 无 | ~93% (14/15) |  活跃 | 测试基建补课期 |
| **NanoClaw** | 1 | 8 | 无 | 100% (8/8) | 🟡 待审查 | 稳步迭代期 |
| **PicoClaw** | 3 | 7 | 无 | ~71% (5/7) | 🟡 中等 | 维护模式 |
| **LobsterAI** | 2 | 8 | 无 | ~12% (1/8) |  中低 | 平稳维护期 |
| **Moltis** | 1 | 2 | 无 | 100% (2/2) | 🟢 稳定 | Polishing 阶段 |
| **NullClaw** | 1 | 1 | 无 | 100% (1/1) | 🟡 缓慢 | 早期开发 |
| **TinyClaw** | 0 | 0 | 无 | — | ⚪ 静默 | 不确定 |
| **ZeptoClaw** | 0 | 0 | 无 | — | ⚪ 静默 | 不确定 |

> 注：PR 积压率 = 待合并 PR / 总活跃 PR。部分项目积压率为估算值。

---

## 3. OpenClaw 在生态中的定位

**规模优势显著：** OpenClaw 当日 Issues 和 PR 更新量均达 500 条，是第二名 Hermes Agent 的 10 倍，在生态中处于绝对体量领先。其 Issue 生态bru（如 #48788 18 条评论、#58450 15 条评论）的社区讨论深度远超同类项目。

**技术路线差异：**

| 维度 | OpenClaw | 同类差异化竞争者 |
|---|---|---|
| 核心场景 | 多渠道聚合 + Plugin 生态 + ClawHub 技能市场 | Hermes 侧重桌面端多模态、ZeroClaw 侧重安全加固、IronClaw 侧重多用户平台化 |
| Extensibility | Plugin hook 事件体系（rawBody/llm_input/output 可修改） | CoPaw 用 Factor 抽象、ZeroClaw 用 WASM 沙箱 |
| Channel 覆盖 | 飞书/Slack/Discord/Telegram/WhatsApp 全覆盖 + 编码 Agent | Hermes 偏桌面/CLI、NanoBot 轻量 Python 优先 |
| Tool System | MCP server 兼容 + 编码 Agent 集成 + Cron 调度 | IronClaw 的 Capability Policy 更结构化 |

**核心劣势：** PR 积压率 89%（447/500）为生态最高水平之一，53 个 PR 已标记 ready for maintainer review 超过 5 天未合并，审查瓶颈可能正在消耗社区贡献热情。相比之下，Hermes 维护者当天即提交修复 PR，NanoBot 一周内合并 5 条底层修复，响应节奏明显快于 OpenClaw。

---

## 4. 共同关注的技术方向

### 4.1 Agent 行为可靠性（OpenClaw、NanoBot、Hermes、ZeroClaw、Moltis、CoPaw）
- **问题：** Agent "表面完成"——声称执行但未实际触发任务（OpenClaw #58450）、subagent 显示完成但底层工作未完成（OpenClaw #50165）、session resume 丢失 tool-loop 状态（Hermes #51089）
- **根因：** 状态机终态校验缺失、异步任务 lifecycle 管理不一致

### 4.2 多平台消息投递一致性（OpenClaw、Hermes、PicoClaw、ZeroClaw）
- **问题：** Google Chat 群消息静默丢失（OpenClaw #58514）、Telegram 重复发送/消息消失（Hermes #53449/#40416）、Feishu 卡片渲染退化（OpenClaw #53486）
- **渠道适配器**的 context compaction / stream send 交互是高频缺陷源

### 4.3 工具调用确定性（Moltis、NanoBot、CoPaw、OpenClaw）
- **问题：** 本地小模型将 `true`/`5000` 序列化为字符串导致校验失败（Moltis #1136）
- **问题：** MCP schema 无严格 `inputSchema.type` 导致 server 加载失败（OpenClaw #63634）
- **问题：** DeepSeek V4 流式 reasoning_content 缺失 + null Schema 类型 → 400 错误（CoPaw #5573）

### 4.4 内存/稳定性治理（OpenClaw、CoPaw、Hermes）
- **问题：** Gateway 内存泄漏 4 天从 389MB 增至 14.7GB（OpenClaw #54155）、sessions.json 无限增长 OOM（OpenClaw #55334）
- **问题：** 默认 32k context 首轮迭代即溢出（ZeroClaw #5508）

### 4.5 安全审批/策略框架（IronClaw、ZeroClaw、Hermes、NullClaw）
- **IronClaw：** Capability Policy 四维策略体系（配置/身份/审批/可用性）完整落地
- **ZeroClaw：** SLSA 供应链签名 + WASM 插件运行时 RFC 已拆解子任务
- **Hermes：** 危险命令审批可配置化需求（#5528，11 👍）
- **NullClaw：** Agent Shell 工具两轮审批流 PR 已提交（#969）

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多渠道聚合平台 + Plugin 生态 | 开发者、 equipe需多平台覆盖用户 | Node.js、ClawHub 技能市场、MCP 兼容、Cron 隔离调度 |
| **Hermes Agent** | 全能桌面端 AI 助手（Nix/CUDA/多模态） | 高级用户、macOS/Linux 桌面用户 | Deno/Node、Playwright、Computer-use、Nix 构建、多 Provider |
| **ZeroClaw** | 安全加固型自主代理平台 | 安全敏感场景、自托管用户 | Rust、WASM 插件沙箱、SLSA 溯源、Goal Mode 自主会话 |
| **IronClaw** | 多用户托管 AI 网关 | 小团队/组织、Railway 部署用户 | Rust/Reborn 架构、Capability Policy、libSQL + 文件增量存储 |
| **NanoBot** | 轻量 Python 优先 AI 助手 | Python 生态用户、WhatsApp/Telegram 用户 | Python、Cron silent 模式、轻 Session key 管理 |
| **CoPaw (QwenPaw)** | Agent 工具注册 + 治理框架 | 通义千问生态用户 | Python SDK、DataPaw 分析插件、测试基建密集投入 |
| **LobsterAI** | 桌面 GUI 套件 | 非技术终端用户 | Electron/桌面、SQLite 本地数据、NSIS 安装 |
| **Moltis** | 本地小模型兼容优先 | 端侧推理、Apple Silicon 用户 | Rust、aarch64 适配、Apple Container 支持 |
| **PicoClaw** | Go 轻量嵌入式 Agent | Go 生态、嵌入式/单一渠道 | Go、单二进制、Simplex 渠道 |
| **NanoClaw** | 容器化 Agent 编排 | Docker/VM 部署用户 | Rust、Coolify、OpenCode group 模型覆盖 |
| **NullClaw** | Zig 原生高性能 Agent | Zig 生态、Termux/移动端 | Zig、审批流框架（最新方向） |

---

## 6. 社区热度与成熟度分层

###  快速迭代期——活跃且响应及时

| 项目 | 证据 |
|---|---|
| **Hermes Agent** | 多平台修复 PR 同日提交、Issue 当天响应 |
| **NanoBot** | 一周内合并 5 条底层修复、开发者 hamb1y 集中贡献 |
| **IronClaw** | Epic #5261 五个 PR 48h 内完成全线合并 |
| **CoPaw** | 测试基建 W1-W4 sprint 密集推进，635 用例累计 |

###  高活跃但遇瓶颈——需关注吞吐量

| 项目 | 证据 |
|---|---|
| **OpenClaw** | 贡献量最大但积压最严重，审查带宽不足 |
| **ZeroClaw** | 高活跃度 + RFC 持续推进，但 PR 积压率 94% |
| **NanoClaw** | 8 个 PR 全部待合并，审查吞吐为零 |

###  平稳/维护期——低频但持续

| 项目 | 证据 |
|---|---|
| **LobsterAI** | 实质合并仅 1 项/日，社区反馈热度下降 |
| **PicoClaw** | 日常基础设施维护（Docker/i18n/.gitignore），无大功能 |
| **NullClaw** | 1 Issue + 1 PR，开发节奏缓慢 |

### ⚪ 静默——需关注状态

| 项目 | 情况 |
|---|---|
| **TinyClaw** | 连续无活动，建议确认项目存活状态 |
| **ZeptoClaw** | 连续无活动 |

---

## 7. 值得关注的趋势信号

### 趋势一：Agent 行为可信赖性成为核心竞争维度

多项目共现反映一个问题：**用户已不满足于"能运行"，要求"可靠完成"。** OpenClaw 的 Agent 承诺不执行（#58450，👍3）、subagent 假完成（#50165），Hermes 的 session resume 丢失 tool-loop（#51089），本质上是同一个根因——状态机 lacks strong consistency guarantees。这预示着 **Agent 执行语义的形式化验证/声明审计**（Hermes #26742、NanoBot #4534 Agent 验证门控）将成为下一阶段技术竞争焦点。

### 趋势二：本地小模型（SLM）正从"二等公民"走向一等公民

Moltis（#1136、#1098）、CoPaw（#5573 DeepSeek V4）、NanoBot 在修复本地小模型兼容性问题时，不是简单 reject 而是主动做 **tool schema 归一化 + 类型强制转换**。这不是 bug 修复而是架构适配信号——端侧推理（Apple Silicon、oMLX、Termux）用户群正在增长，**"本地模型优先"将成为差异化卖点**。

### 趋势三：安全框架从"功能加入"进入"架构设计"阶段

IronClaw 的 Capability Policy（四维策略体系）、ZeroClaw 的 WASM 插件沙箱 + SLSA 溯源、NullClaw 的审批流交互、Hermes 的可配置危险命令审批——四项目同时在不同抽象层解决同一问题：**如何在不牺牲 Agent 自主性前提下实现可控操作**。这将从根本上影响 Agent 安全设计范式。

### 趋势四：MCP 生态进入深度整合期

OpenClaw（#63634 schema 兼容）、CoPaw（#5213 MCP 策略布局）、Hermes（#48985 MCP profile 路由器 RFC）、NanoBot（#4542 MCP 图片传递）、ZeroClaw（#4467 MCP resources/prompts）——五个项目同时在 MCP 协议层面推进，方向涵盖**兼容性修复、profile 路由、权限模型、图片协议扩展**。MCP 正在成为 Agent-工具集成的事实标准。

### 趋势五：UI/UX 品质成为用户留存关键

Hermes Dashboard 主题改进 44 👍（#18080）是观察范围内单个 Issue 最高呼声；OpenClaw 新增 Rust/GTK4 Linux 应用（#61576）；Hermes 桌面编译失败 59 天未修复引发"二等公民"抱怨。非 CLI 用户群体正在壮大，**原生 GUI + 跨平台 UI 品质**正在拉开差距。

### 趋势六：审查带宽成为开源项目健康度的隐性杀手

OpenClaw（447 待合并）、ZeroClaw（47 待合并）、NanoClaw（8 待合并）、Moltis（PR #1098 开放 25 天）——大量高价值 PR 长期排队。这不是贡献不足而是**治理能力不足**，将直接导致贡献者流失和项目分叉风险。建议各社区关注**自动化审查**、**维护者扩容**和**PR 分类分流**机制。

---

*本报告基于 2026-06-28 日 17 个跟踪项目的 GitHub Issues/PR 数据自动生成。生态快速变化，建议每周审视关键指标趋势。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-28

---

## 1. 今日速览

NanoBot 在过去 24 小时内保持了**高活跃度**：47 条 PR 更新（29 条已合并/关闭）、8 条 Issue 更新（7 条已关闭），无新版本发布。项目正处于**密集 Bug 修复与稳定性加固期**，由 hamb1y 报告的多个 Anthropic/OpenAI 兼容层并发修复已全部合并。安全修复（allowPatterns 绕过 & login-shell 泄露）是今日最值得关注的优先级。社区方面，WebUI streaming 卡死和语音转录格式的讨论仍在持续，主维护者响应速度保持在 48 小时内。

---

## 2. 版本发布

**无新版本发布。** 多个高优修复正在积压，预计将汇聚进下一版本。

---

## 3. 项目进展

### 关键合并 PR（按影响力排序）

| PR | 类别 | 状态 | 说明 |
|---|---|---|---|
| **#4533** | 修复 | 已合并 | **Session key 磁盘碰撞**：修复 `safe_key()` 将 `:` 替换为 `_` 导致不同会话共享文件的问题，`telegram:a_b` 与 `telegram:a:b` 不再碰撞 |
| **#4532** | 修复 | 已合并 | Anthropic 助手内容块缺少必需 `type` 字段，可能导致 API 拒绝请求 |
| **#4531** | 修复 | 已合并 | Stream delta 合并忽略 `_stream_id`，导致同一聊天中并发流被错误合并 |
| **#4530** | 修复 | 已合并 | 非流式解析器未去重 tool call IDs，部分 OpenAI 兼容提供商的并行工具调用会产生重复 |
| **#3712** | 修复 | 已合并 | 损坏的 session 文件（`last_consolidated` 超出消息数）现在被安全处理 |
| **#4523** | 测试 | 已合并 | 修复文件系统 mtime 精度导致的 flaky test |
| **#4225** / **#4357** | 功能 | 已合并 | Cron silent 模式（两项独立 PR 合二为一）：定时任务现在可以选择不自动投递结果给频道 |

### 进行中的功能方向

| 方向 | 相关 PR | 状态 |
|---|---|---|
| **WebSearch Serper.dev 集成** | #4406 | OPEN |
| **音频转 WAV 16k 单声道预处理** | #4353 | OPEN — 修复 WhatsApp 语音偶尔转录失败 |
| **Dream 重复 skill 写入守卫** | #4554 | OPEN |
| **Per-session 模型预设** | #4555 | OPEN |
| **Dream model_override 运行时生效** | #4556 | OPEN |
| **Agent 验证门控 & Provider 恢复** | #4534 | OPEN — 新增通用可靠性层 |
| **MCP 图片内容传递为 artifact** | #4542 | OPEN |
| **WebUI 重连清粘 streaming** | #4565 | OPEN，跟随 #4500 |
| **Cron 公开 API 可用性守卫** | #4564 | OPEN |

> **推进评估**：过去 24 小时修复了一股由 hamb1y 发起的、持续一周的底层数据正确性修复浪潮（5 条 PR 全部合并），说明核心流式/序列化/存储层正趋于成熟。社区新功能路线集中在 MCP 能力扩展、Dream 稳定性、多 Provider 搜索三个方向。

---

## 4. 社区热点

### 🔥 Issue #660 — "Network-lightweight" 但包含 Node.js 依赖
- **链接**：https://github.com/HKUDS/nanobot/issues/660
- **状态**：已关闭（但作为 good first issue / help wanted 标签仍可供领取）
- **热度**：5 👍，**14 条评论**（今日最高）
- **核心矛盾**：项目宣传 "ultra-lightweight"，但 Dockerfile 同时安装 Python + Node.js。社区对此展开广泛讨论，涉及 GraalPy 替代、纯 Python WebSocket 方案等。维护者最终关闭但未合并具体修改，可能等待更具体的社区提案。

### 🔥 Issue #4500 — WebUI 自重启后 UI 卡在 "processing"
- **链接**：https://github.com/HKUDS/nanobot/issues/4500
- **状态**：OPEN
- **热度**：2 条评论，涉及移动端 Chrome/Safari
- **核心诉求**：网关重启或 WebSocket 重连后，客户端 turn registry 未清理导致 UI 持续显示处理中，stop 按钮报告"无活动任务"。已有 PR #4565 跟进修复。

### 活跃讨论
- **PR #4406（Serper.dev 搜索）**：已有较成熟的实现，等待 review 合并。
- **PR #4371（System prompt 缓存断点）**：涉及 KV-cache 友好的 prefix 稳定策略，对生产部署有重要性能意义。

---

## 5. Bug 与稳定性

| # | 严重度 | 问题 | Fix PR | 状态 |
|---|---|---|---|---|
| **#4521** | ⚠️ **高（安全）** | `exec.allowPatterns` 使用 `re.search()` 仅匹配命令前缀，链式命令如 `echo allowlisted && touch /tmp/evil` 可绕过白名单 | **#4562** (OPEN) — 拆分段逐一校验 | 未合并 |
| **#4518** | ⚠️ **高（安全）** | `exec` 默认使用 login-shell 执行， shell 启动文件中的 secrets 可能被回显或泄漏 | 暂无独立 fix PR | 待处理 |
| **#4500** | **中** | WebUI 自重启后 streaming 卡顿 + stop 按钮失效 | **#4565** (OPEN) | 修复中 |
| **#4057** | **中** | Session key 磁盘碰撞导致会话覆盖 | **#4533** (已合并) | ✅ 已修复 |
| **#4060** | **中** | Anthropic 助手内容块缺少 `type` 字段 | **#4532** (已合并) | ✅ 已修复 |
| **#4063** | **中** | Stream delta 合并不区分 `_stream_id` | **#4531** (已合并) | ✅ 已修复 |
| **#4059** | **低-中** | 非流式解析器保留重复 tool call IDs | **#4530** (已合并) | ✅ 已修复 |

> **重点关注**：两个安全漏洞（#4521、#4518）均涉及 `exec` 工具的会话隔离和命令白名单机制，建议优先 review 并合并 #4562，同时为 #4518 指派维护者。

---

## 6. 功能请求与路线图信号

### 已明确进入开发周期的功能

| 功能 | 信号强度 | 说明 |
|---|---|---|
| **Cron silent 模式** | ✅ 已合并 | 后台监控任务可静默运行，仅在异常时通知 |
| **Serper.dev 搜索后端** | 🟡 PR 进行中 | 跟随 exa 已有模式，实现风险低 |
| **MCP ImageContent → Artifact** | 🟡 PR 进行中 | 修复 base64 直接泄漏到工具结果的 bug |
| **Dream 整合能力增强** | 🟡 多个 PR 进行中 | 包括 model_override (#4556)、skill 去重 (#4554) |
| **Per-session 模型预设** | 🟡 PR 进行中 | 解决 #4253 — 每个对话独立模型选择 |
| **语音预处理流水线** | 🟡 PR 进行中 | ffmpeg 转换 ogg/opus → WAV 16k 单声道 |

### 社区强烈希望但尚未立项

| 功能 | 来源 | 呼声 |
|---|---|---|
| **移除 Node.js 依赖 / 纯 Python 运行时** | #660 | 5 👍，14 条评论 |
| **ask_clarification 工具** | #4527 (OPEN) | 内置澄清请求机制，涉及 agent turn 中断与上下文裁剪 |
| **Agent 验证门控 & Provider 恢复** | #4534 (OPEN) | 构建通用任务可靠性层，对运行 Codex provider 的用户尤为重要 |
| **System prompt prefix 缓存优化** | #4371 (OPEN) | 为 prefix caching / KV-cache 生产部署铺路 |

---

## 7. 用户反馈摘要

**满意方向 👍**
- 核心数据正确性修复一周内集中合并 5 条，验证了维护团队对 bug report 的快速响应能力。
- Cron silent 模式满足了后台监控用户的实际需求（不再每条 job 都投递消息）。
- Session key 碰撞的修复同时兼顾了 WebUI 文件名生成逻辑，未引入回归。

**痛点 & 不满 👎**
- **"ultra-lightweight" 定位与 Node.js 依赖矛盾**：多个用户在 #660 下反馈 Dockerfile 的双运行时增加了镜像体积和安全面，尤其对于自托管轻量场景。
- **安全机制的表面性**：`allowPatterns` 仅做前缀搜索导致可绕过，用户对此表示担忧；login-shell 默认行为在 secrets 管理场景下过于宽松。
- **WebUX 在异常场景下的可用性**：自重启后 UI 状态不一致（#4500），stop 按钮给出误导性反馈，在移动端同样复现。
- **WhatsApp 语音转录间歇性失败**（#4353）：AssemblyAI 对原始 ogg/opus 的兼容性问题，用户期望在 provider 调用前自动完成格式归一化。

**使用场景趋势**
- 后台 cron 监控 + 条件性通知的需求正在增长（silent mode PR 合并即为证明）。
- MCP 工具集成需求从文本扩展到了图片/多模态内容传递。
- Per-session 模型选择反映大模型成本管控诉求（不同对话使用不同能力模型）。

---

## 8. 待处理积压

| # | 问题 / PR | 积压天数 | 风险 | 建议动作 |
|---|---|---|---|---|
| **#4521 / #4518** | 安全漏洞（exec allowPatterns 绕过 + login-shell 泄露） | 3-4 天 | 🔴 高：涉及命令注入与 secrets 泄漏 | 优先指派维护者 review #4562；为 #4518 创建对应 PR |
| **#4371** | System prompt prefix KV-cache 断点优化 | 12 天 | 🟡 中等：影响前缀缓存部署的性能收益 | 设计 review — 需评估对系统 prompt 组装逻辑的重构风险 |
| **#4534** | Agent 验证门控 & Provider 通用恢复层 | 3 天 | 🟡 中等：对 Codex provider 用户至关重要 | 确认 PR scope 是否过大，可能需要拆分 |
| **#4353** | ogg/opus → WAV 预处理 | 13 天 | 🟢 低：修复明确，依赖 ffmpeg 可用性 | 合并前需确认所有部署环境的 ffmpeg 可选项 |
| **#4406** | Serper.dev 搜索集成 | 10 天 | 🟢 低：实现方案清晰 | 需补充 API key 缺失时的优雅降级说明 |
| **#4527** | ask_clarification 内置工具 | 3 天 | 🟡 中等：改变 agent turn 中断语义 | 需社区 discussion 确认接口设计落地 |

---

> **日报生成时间**：2026-06-28 | **数据来源**：HKUDS/nanobot GitHub | **分析人**：AI 智能体开源项目分析师

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-06-28 | 数据截至：2026-06-28 23:59 UTC**

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃状态**，共产生 50 条 Issue 更新与 50 条 PR 更新，社区参与度显著。项目未发布新版本，但多个关键修复 PR 正在快速推进，涵盖 Windows 桌面端稳定性、Telegram 消息重复、NVIDIA NIM 兼容性等问题。社区讨论最集中的方向是 Dashboard 主题可读性改进（#18080，44 👍）和危险命令审批机制可配置化（#5528，11 👍），反映出用户对**视觉体验**和**安全灵活性**的强烈诉求。整体项目健康度良好，维护团队响应速度较快，多个 Bug 在报告当天即有修复 PR 提交。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日共有 **8 个 PR 被合并/关闭**，以下为重点：

| PR | 状态 | 说明 |
|---|---|---|
| [#29622](https://github.com/NousResearch/hermes-agent/pull/29622) | ✅ 已合并 | DeepSeek 内置 provider 现在支持从 `config.yaml` 读取 `model.api_key`，减少对运行时环境变量的依赖 |
| [#19506](https://github.com/NousResearch/hermes-agent/pull/19506) | ✅ 已合并 | `hermes update` 新增 `--show-commits` 标志，用户可在更新前后查看具体变更的 commit 列表 |
| [#17297](https://github.com/NousResearch/hermes-agent/pull/17297) | ✅ 已合并 | 新增 `on-this-day-art-trivia` 技能 + Telegram 插件，支持"历史上的今天"艺术史猜谜游戏 |
| [#53805](https://github.com/NousResearch/hermes-agent/issues/53805) | ✅ 已关闭 | 错误仓库提交的 iOS Live Activity 问题，标记为 invalid |

**关键待合并 PR（高影响力）：**

- **[#53879](https://github.com/NousResearch/hermes-agent/pull/53879)** — 修复 Windows 后端子进程窗口闪烁问题，默认隐藏 child process 窗口。直接回应用户在 [#42544](https://github.com/NousResearch/hermes-agent/issues/42544) 和 [#53781](https://github.com/NousResearch/hermes-agent/issues/53781) 中的痛点。
- **[#53878](https://github.com/NousResearch/hermes-agent/pull/53878)** — 修复 NVIDIA NIM 下 `chat_template_kwargs` 被错误嵌套在 `extra_body` 中导致 `thinking_mode` 无法传递的问题（对应 Issue [#50703](https://github.com/NousResearch/hermes-agent/issues/50703)）。
- **[#53877](https://github.com/NousResearch/hermes-agent/pull/53877)** — 修复 `content_hash` 排序使用 `Path` 对象而非 POSIX 字符串导致的哈希不稳定问题（对应 Issue [#53404](https://github.com/NousResearch/hermes-agent/issues/53404)）。
- **[#53865](https://github.com/NousResearch/hermes-agent/pull/53865)** — 修复 Telegram draft 流式消息失败级联导致的 4 分钟消息沉默问题。
- **[#53875](https://github.com/NousResearch/hermes-agent/pull/53875)** — 将 MoA 辅助模型默认超时从 600s 降至 120s/180s，避免长时间挂起。
- **[#53873](https://github.com/NousResearch/hermes-agent/pull/53873)** — 修复 MCP OAuth 流程在服务器对 `initialize` 返回 200 时静默失败的问题。
- **[#53869](https://github.com/NousResearch/hermes-agent/pull/53869)** — 修复 macOS `launchd_restart()` 在屏幕锁定/睡眠状态下 gateway 无法重启的问题。
- **[#53872](https://github.com/NousResearch/hermes-agent/pull/53872)** — 新增持久化子代理事件日志（JSONL 格式），为 AFK 等内部消费者提供可观测性。
- **[#48644](https://github.com/NousResearch/hermes-agent/pull/48644)** — 为 `delegate_task` 添加 `profile` 参数，支持跨 profile 子代理（对应 Issue [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) 和 [#53846](https://github.com/NousResearch/hermes-agent/issues/53846)）。
- **[#53048](https://github.com/NousResearch/hermes-agent/pull/53048)** — Telegram 论坛话题级 profile 隔离，单 bot 下不同话题可路由到不同 profile。

---

## 4. 社区热点

### 🔥 最高互动 Issue

| Issue | 👍 | 评论 | 核心诉求 |
|---|---|---|---|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | **44** | 25 | Dashboard 主题字体对比度差、serif 字体小字号可读性低，要求改进主题系统 |
| [#5528](https://github.com/NousResearch/hermes-agent/issues/5528) | **11** | 4 | 危险命令审批模式硬编码，用户希望可自定义 pattern |
| [#52919](https://github.com/NousResearch/hermes-agent/issues/52919) | 0 | 9 | Nix 构建因 `package-lock.json` 更新而损坏（已关闭） |

**分析：**

- **#18080** 是项目历史最热门的 Issue 之一，反映出 Dashboard 视觉设计长期未迭代，用户对"专业级 UI"的期待持续积累。44 个 👍 在 Hermes 仓库中属于极高量级。
- **#5528** 代表企业/高级用户对安全策略细粒度控制的需求，当前硬编码 pattern 无法适配自定义工具链。
- **#52919** 虽已关闭，但 Nix 用户群体对构建稳定性的敏感度较高，需关注后续是否复发。

### 🔥 最受关注 PR

- **[#53880](https://github.com/NousResearch/hermes-agent/pull/53880)** — 为 AWS Bedrock 添加 OpenAI Responses 模型路由（`openai.gpt-5.5`），扩展 provider 兼容性。
- **[#38846](https://github.com/NousResearch/hermes-agent/pull/38846)** — Desktop 端新增 15 语言 i18n 支持，社区本地化需求旺盛（参见 [#40347](https://github.com/NousResearch/hermes-agent/issues/40347) 俄语需求）。
- **[#48985](https://github.com/NousResearch/hermes-agent/pull/48985)** — ChatGPT/Claude 客户端的 MCP profile 路由器 RFC，标志 Hermes 向外部 AI 客户端生态开放的意图。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（崩溃/数据丢失）

| # | Issue | 描述 | Fix PR |
|---|---|---|---|
| 1 | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | Windows 11 桌面端启动即崩溃（ breakpoint exception 0x80000003），AMD 平台复现 | ⚠️ 无 |
| 2 | [#53874](https://github.com/NousResearch/hermes-agent/issues/53874) | Discord 语音输入在 Linux 上因 `windows_hide_flags` 未定义而崩溃 | ⚠️ 无 |
| 3 | [#51089](https://github.com/NousResearch/hermes-agent/issues/51089) | Session resume 可能丢失进行中的 tool-loop 或压缩状态 | ⚠️ 无 |

### 🟡 中等（功能异常）

| # | Issue | 描述 | Fix PR |
|---|---|---|---|
| 4 | [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) | Windows 桌面端 `hermes update` / `hermes desktop` 编译失败 | ⚠️ 无 |
| 5 | [#53449](https://github.com/NousResearch/hermes-agent/issues/53449) | Telegram 短回复被重复发送（stream + send 双重投递） | ⚠️ 无 |
| 6 | [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) | Telegram context compaction 导致消息从用户聊天中"消失" | ⚠️ 无 |
| 7 | [#43042](https://github.com/NousResearch/hermes-agent/issues/43042) | 远程 gateway 模式下桌面端文件浏览器间歇性 ENOENT | ⚠️ 无 |
| 8 | [#41176](https://github.com/NousResearch/hermes-agent/issues/41176) | `hermes skills update` 不刷新 `content_hash`，导致永久误报 `update_available` | ⚠️ 无 |
| 9 | [#53834](https://github.com/NousResearch/hermes-agent/issues/53834) | `user_char_limit` / `memory_char_limit` 配置修改后不生效 | ⚠️ 无 |
| 10 | [#53833](https://github.com/NousResearch/hermes-agent/issues/53833) | Memory 工具对非 UTF-8 字节的 USER.md/MEMORY.md 报 UnicodeDecodeError | ⚠️ 无 |
| 11 | [#41092](https://github.com/NousResearch/hermes-agent/issues/41092) | 桌面端切换辅助模型时保留过期的 `base_url` | ⚠️ 无 |

### 🟢 轻微（体验问题）

| # | Issue | 描述 | Fix PR |
|---|---|---|---|
| 12 | [#42544](https://github.com/NousResearch/hermes-agent/issues/42544) | Windows terminal 工具每次执行命令闪烁 cmd 窗口 | [#53879](https://github.com/NousResearch/hermes-agent/pull/53879) 🔧 |
| 13 | [#53781](https://github.com/NousResearch/hermes-agent/issues/53781) | Windows Copilot token 自动检测导致 gh.exe 窗口闪烁/抢焦点 | [#53879](https://github.com/NousResearch/hermes-agent/pull/53879) 🔧 |
| 14 | [#28152](https://github.com/NousResearch/hermes-agent/issues/28152) | Computer-use / cua-driver 空闲时持续消耗 CPU | ⚠️ 无 |
| 15 | [#35166](https://github.com/NousResearch/hermes-agent/issues/35166) | Playwright Chromium 安装阶段卡住不响应 Ctrl+C | ⚠️ 无 |

**已修复（今日合并）：**
- [#52919](https://github.com/NousResearch/hermes-agent/issues/52919) — Nix 构建损坏 → 已关闭
- [#53404](https://github.com/NousResearch/hermes-agent/issues/53404) — `content_hash` 排序不稳定 → [#53877](https://github.com/NousResearch/hermes-agent/pull/53877) 🔧
- [#50703](https://github.com/NousResearch/hermes-agent/issues/50703) — NVIDIA NIM `chat_template_kwargs` 嵌套错误 → [#53878](https://github.com/NousResearch/hermes-agent/pull/53878) 🔧

---

## 6. 功能请求与路线图信号

### 高优先级（已有 PR 推进）

| 功能 | Issue | PR | 信号 |
|---|---|---|---|
| 跨 profile 子代理 | [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) | [#48644](https://github.com/NousResearch/hermes-agent/pull/48644) | 多租户/多场景代理隔离 |
| 持久化子代理事件 | — | [#53872](https://github.com/NousResearch/hermes-agent/pull/53872) | 可观测性基础设施 |
| Bedrock OpenAI Responses 模型 | — | [#53880](https://github.com/NousResearch/hermes-agent/pull/53880) | 多云 provider 兼容 |
| Telegram 话题级 profile 隔离 | — | [#53048](https://github.com/NousResearch/hermes-agent/pull/53048) | 社区/群组场景 |
| 桌面端多语言 i18n | [#40347](https://github.com/NousResearch/hermes-agent/issues/40347) | [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | 国际化扩张 |
| CLI Ctrl+R 历史搜索 | — | [#51391](https://github.com/NousResearch/hermes-agent/pull/51391) | 开发者体验优化 |
| ElevenLabs TTS 高级选项 | — | [#39382](https://github.com/NousResearch/hermes-agent/pull/39382) | 语音合成质量 |
| MCP OAuth 容错 | [#53870](https://github.com/NousResearch/hermes-agent/issues/53870) | [#53873](https://github.com/NousResearch/hermes-agent/pull/53873) | MCP 生态兼容 |

### 中优先级（无 PR，但讨论活跃）

| 功能 | Issue | 👍 | 说明 |
|---|---|---|---|
| Dashboard 主题改进 | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | 44 | 最高 👍 数，UI 现代化信号 |
| 危险命令审批可配置 | [#5528](https://github.com/NousResearch/hermes-agent/issues/5528) | 11 | 企业安全合规需求 |
| 语义搜索（BM25 + Vector） | [#44075](https://github.com/NousResearch/hermes-agent/issues/44075) | — | 替代当前 FTS5 关键词匹配 |
| Agent 声明验证与审计 | [#26742](https://github.com/NousResearch/hermes-agent/issues/26742) | — | 可信 AI / 合规方向 |
| Ambient/选择性响应网关 | [#31061](https://github.com/NousResearch/hermes-agent/issues/31061) | — | Discord 中间件策略 |
| 技能下载量/评分展示 | [#53856](https://github.com/NousResearch/hermes-agent/issues/53856) | — | 技能市场生态 |

### 创新/实验性

| 功能 | Issue | 说明 |
|---|---|---|
| 好奇心引擎 + 合成梦境周期 | [#53871](https://github.com/NousResearch/hermes-agent/issues/53871) | 赋予 Agent 跨会话"生命感"，探索自主行为 |
| MCP ChatGPT profile 路由器 | [#48985](https://github.com/NousResearch/hermes-agent/pull/48985) | 面向 ChatGPT/Claude 客户端的 MCP 服务暴露 |

---

## 7. 用户反馈摘要

### 😐 不满意

- **Windows 体验持续恶化**：多个 Issue 反映 Windows 平台崩溃（#38216）、窗口闪烁（#42544、#53781）、编译失败（#40187），用户明确表达"Windows 是二等公民"的不满。
- **Telegram UX 退化**：context compaction 导致消息"消失"（#40416）被描述为"terrible UX"；短消息重复发送（#53449）影响对话流畅度。
- **配置不生效**：修改 `config.yaml` 后字符限制不更新（#53834），用户需要反复重启 gateway。
- **Nix 构建脆弱**：一次 commit 即可破坏 Nix 构建（#52919），反映 CI 对 Nix 的覆盖不足。
- **安装体验差**：Playwright 安装卡住且无法中断（#35166），新用户首次体验受阻。

### 😊 满意/建设性

- **`--show-commits` 功能**（#19506 已合并）：用户长期要求更新可见性，合并后反馈积极。
- **技能系统扩展**：社区对技能市场、跨 profile 委托、持久化事件等方向有强烈兴趣，反映生态正在形成。
- **多语言需求**：俄语（#40347）、15 语言 i18n（#38846）等请求表明国际用户群体在增长。

### 核心痛点总结

1. **Windows 平台稳定性**是当前最大的用户流失风险点
2. **Dashboard UI/UX** 现代化呼声最高（44 👍）
3. **配置热更新**能力不足，频繁需要重启 gateway
4. **Telegram 消息投递**的可靠性（重复/消失）影响核心使用场景

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于停滞状态，建议维护者关注：

| 类型 | 链接 | 状态 | 等待天数 | 风险 |
|---|---|---|---|---|
| 🐛 Bug | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | OPEN，Windows 启动崩溃 | **86 天** | 🔴 高 — 影响核心功能 |
| 🐛 Bug | [#35166](https://github.com/NousResearch/hermes-agent/issues/35166) | OPEN，Playwright 安装卡住 | **59 天** | 🟡 中 — 新用户首次体验 |
| 🐛 Bug | [#28152](https://github.com/NousResearch/hermes-agent/issues/28152) | OPEN，computer-use 空闲 CPU 占用 | **71 天** | 🟡 中 — 资源效率 |
| 🐛 Bug | [#41092](https://github.com/NousResearch/hermes-agent/issues/41092) | OPEN，辅助模型 base_url 残留 | **52 天** | 🟡 中 — 配置一致性 |
| 🐛 Bug | [#51089](https://github.com/NousResearch/hermes-agent/issues/51089) | OPEN，session resume 丢失 tool-loop 状态 | **6 天** | 🟡 中 — 数据完整性 |
| 💡 Feature | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | OPEN，Dashboard 主题改进 | **59 天** | 🟡 中 — 最高社区呼声 |
| 💡 Feature | [#5528](https://github.com/NousResearch/hermes-agent/issues/5528) | OPEN，危险命令审批可配置 | **83 天** | 🟡 中 — 企业需求 |
| 💡 Feature | [#26742](https://github.com/NousResearch/hermes-agent/issues/26742) | OPEN，Agent 声明验证与审计 | **43 天** | 🟢 低 — 探索性 |
| 💡 Feature | [#31061](https://github.com/NousResearch/hermes-agent/issues/31061) | OPEN，Ambient 响应门控 | **66 天** | 🟢 低 — 设计讨论 |
| 🔀 PR | [#48985](https://github.com/NousResearch/hermes-agent/pull/48985) | OPEN，MCP profile 路由器 RFC | **40 天** | 🟡 中 — 需要 design review |
| 🔀 PR | [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | OPEN，Desktop 15 语言 i18n | **85 天** | 🟡 中 — 大型 PR 需 review |
| 🔀 PR | [#48644](https://github.com/NousResearch/hermes-agent/pull/48644) | OPEN，delegate_task profile 参数 | **41 天** | 🟡 中 — 功能完整待合并 |

**特别提醒：**
- **#38216**（Windows 崩溃，86 天）是持续时间最长的严重 Bug，建议优先分配 Windows 平台 QA 资源。
- **#18080**（Dashboard 主题，59 天，44 👍）虽非 Bug 但社区影响最大，建议给出路线图时间表以管理预期。
- **#48985**（MCP 路由器 RFC）已 40 天未获反馈，涉及架构方向，建议尽快给予 design review 或关闭。

---

*本报告基于 2026-06-28 GitHub 数据自动生成。数据源：NousResearch/hermes-agent Issues & PRs。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-06-28（周日）

---

## 1. 今日速览

PicoClaw 今日活跃度**中等偏低**，共处理 3 条 Issue 更新与 7 条 PR 更新，无新版本发布。社区贡献以基础设施维护（Docker 镜像升级、i18n 同步、.gitignore 清理）和代码质量改进为主，未出现重大功能合入。2 条长期停滞的 stale PR 被关闭，1 条 stale Issue 关闭，显示维护者正在清理积压。当前有 5 个 PR 处于 Open 状态等待审查，1 个新 Bug 尚未分配处理。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并，但有 2 个长期运行的 stale PR 被关闭，释放了审查带宽：

| PR | 状态 | 说明 |
|---|---|---|
| **#3048** `fix(mcp): reject unknown pre-positional flags in add` | ❌ CLOSED (stale) | 修复 `mcp add` 在 `DisableFlagParsing: true` 模式下根级 flag 泄漏问题。已停滞 20 天，作者未继续推进。 |
| **#2937** `Feat/agent collaboration` | ❌ CLOSED (stale) | 引入 Agent Collaboration Bus（per-agent mailboxes、collaboration threads、消息信封与投递状态）。该 PR 自 2026-05-24 开放以来停滞 34 天，是本期最具野心的功能提案，但因长期无响应被关闭。 |

**影响评估：** #2937 的关闭意味着 Agent 间协作架构的首次实现方案被搁置，该方向可能需要社区重新发起或维护者重新设计。

---

## 4. 社区热点

### 🔥 Issue #2472 — Windows 路径分隔符导致 `list_dir` 失败（7 条评论，👍1）

> **链接：** https://github.com/sipeed/picoclaw/issues/2472

该 Bug 自 2026-04-10 创建以来持续 78 天，终于在今日关闭。核心问题是 Windows 平台的反斜杠路径（`\`）被直接传递给 Go 的 `fs.FS`/`os.Root`，而后者严格要求正斜杠（`/`）。7 条评论表明多位 Windows 用户遭遇此问题。**该 Issue 已被关闭但未说明是否已有修复合入**，建议维护者确认 fix 是否已合并到 main 分支。

### 📋 Issue #3114 — Telegram 渠道按对话类型权限分级（2 条评论，👍1）

> **链接：** https://github.com/sipeed/picoclaw/issues/3114

用户提出 Telegram 渠道需要按**私聊/群组/频道**三类对话实施差异化权限策略——私聊开放全部能力，群组和频道限制 `exec`、`write_file` 等危险操作。该需求反映了 PicoClaw 在多人场景下的安全边界诉求，目前已被关闭（stale），但需求本身仍有现实意义。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 详情 | Fix PR |
|---|---|---|---|---|
| 🔴 **高** | [#3194](https://github.com/sipeed/picoclaw/issues/3194) Matrix 加密消息报错 | 🟡 OPEN | 收到加密消息但 crypto 未启用，Matrix channel 在 v0.2.4-9 版本触发。可能导致 Matrix 通信中断。 | ❌ 无 |
| 🟡 **中** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) Windows `list_dir` 路径分隔符 | 🟢 CLOSED | Windows 用户无法使用 `list_dir` 工具。Issue 已关闭，**待确认修复是否已合入**。 | ⚠️ 未明确 |

**关注点：** #3194 是今日新报告的唯一 Bug，影响 Matrix 渠道用户，建议优先排查是否为配置校验缺失（应在收到加密消息前检测 crypto 状态并给出明确错误提示）。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 信号强度 | 判断 |
|---|---|---|---|
| **Agent 间协作总线** | PR #2937（已关闭） | ⚠️ 暂缓 | 功能设计完整但缺乏维护者审查，方向有价值但短期不会落地 |
| **Simplex 渠道支持** | PR [#3193](https://github.com/sipeed/picoclaw/pull/3193)（OPEN） | 🟢 进行中 | 新增 simplex channel 类型，今日刚提交，审查中 |
| **Telegram 权限分级** | Issue #3114（已关闭） | ⚠️ 需求未实现 | 安全边界需求明确，需后续有社区或维护者接棒 |
| **LINE channel 错误处理改进** | PR [#3189](https://github.com/sipeed/picoclaw/pull/3189)（OPEN） | 🟢 进行中 | 改进 `resp.Body.Close()` 错误忽略方式，代码质量提升 |

**下一版本预测：** Simplex 渠道支持（#3193）和 i18n 补全（#3190）最有可能被合入，属于低风险增量改进。

---

## 7. 用户反馈摘要

| 痛点 | 场景 | 情绪 |
|---|---|---|
| Windows 兼容性差 | 用户在 Windows 上运行 PicoClaw 时 `list_dir` 工具直接报错，影响文件浏览工作流 | 😤 困扰 78 天 |
| 群组安全边界缺失 | 用户希望将 PicoClaw 拉入 Telegram 群组，但担心成员执行危险命令 | 🤔 需求明确但未被满足 |
| Matrix 加密配置不透明 | 用户启动 gateway 后收到加密消息却未启用 crypto，缺乏前置校验和清晰报错 | ⚠️ 新报告，待跟进 |

**正面信号：** 社区贡献者 `chengzhichao-xydt` 今日连续提交 4 个 PR（Docker 升级、i18n 同步、.gitignore 清理、LINE 错误处理），显示核心贡献者在持续维护基础设施质量。

---

## 8. 待处理积压

| 类型 | 编号 | 停滞天数 | 建议行动 |
|---|---|---|---|
| 🔴 **Bug** | [#3194](https://github.com/sipeed/picoclaw/issues/3194) Matrix 加密消息 | 1 天（新） | 优先分配维护者排查，确认是否为配置校验问题 |
| ⚠️ **PR** | [#3193](https://github.com/sipeed/picoclaw/pull/3193) Simplex 渠道 | 1 天 | 新 PR，建议尽快完成首次 review |
| ⚠️ **PR** | [#3189](https://github.com/sipeed/picoclaw/pull/3189) LINE channel 错误处理 | 1 天 | 小改动，适合快速合入 |
| ⚠️ **PR** | [#3190](https://github.com/sipeed/picoclaw/pull/3190) i18n 补全 | 1 天 | 低风险，建议合并 |
| ⚠️ **PR** | [#3191](https://github.com/sipeed/picoclaw/pull/3191) .gitignore 去重 | 1 天 | 极低风险，建议合并 |
| ⚠️ **PR** | [#3192](https://github.com/sipeed/picoclaw/pull/3192) Docker 镜像升级 | 1 天 | 依赖更新，建议验证 CI 通过后合并 |
| 📋 **Issue** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) Windows 路径 | 已关闭 | **确认修复是否已合入 main**，若未合入需重新打开 |
| 📋 **Feature** | Agent 协作总线 | 34 天（PR 已关） | 如方向仍属路线图，建议开 Issue 重新讨论设计 |

---

**日报总结：** PicoClaw 今日处于"维护模式"——无重大功能合入，无版本发布，但基础设施维护活跃（5 个新 PR）。主要风险点是 Matrix 加密 Bug（#3194）和 Agent 协作总线 PR 关闭带来的方向不确定性。建议维护者本周优先处理 #3194 并快速审查 5 个小型 PR，以维持社区贡献者的参与动力。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-06-28（周六）

---

## 1. 今日速览

NanoClaw 今日活跃度**中等偏高**：过去 24 小时新开/活跃 Issue 1 条，新开 PR 8 条，无新版本发布。社区贡献集中在**容器化部署优化**（Coolify 支持、全局挂载清理）、**技能系统修复**（`/update-skills` 静默跳过问题）以及**OpenCode 集成增强**（per-group 模型覆盖、Dashboard 推送）。所有 PR 均处于待合并状态，尚无合并或关闭动作，维护侧的 PR 吞吐压力值得关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭。以下 PR 代表了当前最活跃的开发方向，等待维护者审查：

| PR | 作者 | 方向 | 状态 |
|---|---|---|---|
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) | glifocat | **fix(skills)** — 将 pre-flight 与 credentials 拆分，使 `/update-skills` 能真正刷新已安装 channel 的代码和依赖 | 待合并 |
| [#2874](https://github.com/nanocoai/nanoclaw/pull/2874) | bogdano2 | **fix(signal)** — 修复 signal-cli 启动抖动导致的 crash-loop | 待合并 |
| [#2872](https://github.com/nanocoai/nanoclaw/pull/2872) | grantland | **feat(opencode)** — 支持通过 `container_configs.model` 为每个 OpenCode agent group 指定不同模型 | 待合并 |
| [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) | grantland | **feat(dashboard)** — 新增 `dashboard-pusher.ts`，每 60s 向远程 dashboard 服务器 POST 状态快照 | 待合并 |
| [#2875](https://github.com/nanocoai/nanoclaw/pull/2875) | zczDief | **deploy/coolify** — 新增 Coolify 部署支持 | 待合并 |
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) | CutSnake01 | **refactor(container-runner)** — 移除已失效的 `/workspace/global` 挂载 | 待合并 |
| [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) | CutSnake01 | **fix** — 移除 `groups/global/CLAUDE.md`（host 每次启动会删除该文件） | 待合并 |
| [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) | CutSnake01 | **fix** — 移除主 seed prompt 中过时的 "Global Memory" 指令 | 待合并 |

**整体判断**：项目在 OpenCode 集成、容器化部署、技能系统可靠性三个方向同步推进，但**合并吞吐为零**——8 个 PR 全部积压，维护者审查带宽可能成为瓶颈。

---

## 4. 社区热点

### Issue #2868 — `/update-skills` 对已安装 channel 静默无效
- **链接**：[nanocoai/nanoclaw#2868](https://github.com/nanocoai/nanoclaw/issues/2868)
- **作者**：glifocat | 👍 0 | 💬 1 条评论
- **核心诉求**：当用户运行 `/update-skills` 更新一个已安装的 channel 时，系统跳过了唯一能刷新 adapter 代码和锁定依赖的步骤，导致 `[Unreleased]` CHANGELOG 中要求用户"重新运行 `/add-<channel>`"的迁移说明形同虚设。
- **信号**：这是一个**工作流完整性**问题——用户按照官方文档操作却得不到预期结果，影响信任度。已有对应 fix PR #2873 提出，说明社区响应迅速。

### PR #2871 — Dashboard Pusher 功能
- **链接**：[nanocoai/nanoclaw#2871](https://github.com/nanocoai/nanoclaw/pull/2871)
- **关注点**：引入了向远程服务器发送状态快照的能力，涉及**数据外传**，可能引发隐私/安全方面的社区讨论。目前尚无评论，但值得持续关注。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | Issue/PR | 状态 |
|---|---|---|---|
| 🔴 **高** | `/update-skills` 对已安装 channel 静默跳过代码和依赖刷新 | [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) | ✅ Fix PR [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) 待合并 |
| 🟡 **中** | signal-cli 启动抖动导致 crash-loop | 无 Issue | ✅ Fix PR [#2874](https://github.com/nanocoai/nanoclaw/pull/2874) 待合并 |
| 🟢 **低** | 容器内 `/workspace/global` 挂载已失效 | 无 Issue | 🔧 Refactor PR [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) 待合并 |
| 🟢 **低** | `groups/global/CLAUDE.md` 被 host 反复删除 | 无 Issue | 🔧 Fix PR [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) 待合并 |
| 🟢 **低** | 主 seed prompt 包含过时的 "Global Memory" 指令 | 无 Issue | 🔧 Fix PR [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) 待合并 |

**总结**：所有已知 bug 均有对应 PR，但**无一合并**。#2868 和 #2874 应优先处理——前者影响用户可见的工作流，后者影响运行时稳定性。

---

## 6. 功能请求与路线图信号

| 方向 | 对应 PR | 信号强度 | 判断 |
|---|---|---|---|
| **OpenCode 多模型支持** | [#2872](https://github.com/nanocoai/nanoclaw/pull/2872) | 🟢 强 | 由活跃贡献者 grantland 提交，与项目 AI agent 核心场景高度契合，**大概率纳入下一版本** |
| **Dashboard 远程监控** | [#2871](https://github.com/nanocoai/nanoclaw/pull/2871) | 🟡 中 | 功能完整但涉及数据外传，可能需要隐私审查或 opt-in 机制 |
| **Coolify 一键部署** | [#2875](https://github.com/nanocoai/nanoclaw/pull/2875) | 🟡 中 | 降低自托管门槛，符合项目"个人 AI 助手"定位，但 PR 刚创建，成熟度待观察 |
| **容器运行时清理** | [#2822](https://github.com/nanocoai/nanoclaw/pull/2822)–[#2824](https://github.com/nanocoai/nanoclaw/pull/2824) | 🟢 强 | CutSnake01 一次性提交 3 个清理 PR，属于低风险高价值的技术债务偿还，**应优先合并** |

---

## 7. 用户反馈摘要

基于今日唯一活跃 Issue [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) 及其评论提炼：

- **痛点**：用户按照 CHANGELOG 的 `[Unreleased]` 迁移指南操作 `/update-skills`，却发现已安装的 channel 并未真正刷新——这是一个**文档与实现脱节**的问题，直接损害用户信任。
- **使用场景**：用户在已安装 channel 后尝试通过 `/update-skills` 获取最新代码和依赖，期望与 `/add-<channel>` 行为一致。
- **满意方面**：社区成员 glifocat 不仅报告了问题，还在同一天提交了 fix PR #2873，社区自修复能力较强。
- **不满意方面**：Issue 目前仅 1 条评论、0 👍，说明该问题影响面可能有限，或用户尚未广泛发现。

---

## 8. 待处理积压

| 积压项 | 创建日期 | 等待天数 | 风险等级 | 建议 |
|---|---|---|---|---|
| [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) refactor(container-runner): drop dead /workspace/global mount | 2026-06-20 | **8 天** | 🟢 低 | 纯重构，无行为变更，建议**快速审查合并** |
| [#2823](https://github.com/nanocoai/nanoclaw/pull/2823) fix: remove groups/global/CLAUDE.md | 2026-06-20 | **8 天** | 🟢 低 | 移除无效文件引用，建议**快速审查合并** |
| [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) fix: drop stale "Global Memory" instruction | 2026-06-20 | **8 天** | 🟢 低 | 清理过时 prompt，建议**快速审查合并** |
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) fix(skills): split pre-flight from credentials | 2026-06-27 | **1 天** | 🔴 **高** | 修复用户可见的工作流 bug，**建议优先合并** |
| [#2874](https://github.com/nanocoai/nanoclaw/pull/2874) fix(signal): survive signal-cli boot flaps | 2026-06-27 | **1 天** | 🟡 中 | 修复 crash-loop，**建议优先合并** |

**维护者行动建议**：

1. **立即**合并 #2873 + #2874——两个 fix PR 对应真实 bug，延迟合并会持续影响用户体验。
2. **本周内**合并 #2822–#2824——三个低风险清理 PR，合并成本极低但能显著减少积压。
3. **关注** #2871 的数据隐私影响——Dashboard Pusher 向远程服务器发送状态快照，建议在合并前确认是否有 opt-in 开关或隐私声明。
4. **整体积压**：当前 8 个 PR 全部未合并，建议维护者安排一次集中审查 session，避免贡献者积极性流失。

---

*数据来源：[github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 报告生成时间：2026-06-28*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-06-28

---

## 1. 今日速览

项目整体处于**中低活跃度**状态。过去 24 小时内仅有 1 条 Issue 更新和 1 条 PR 新增，无新版本发布。值得注意的是，唯一活跃的 PR #969（结构化审批流程）于今日新建，表明核心功能开发仍在推进。但 Issue 响应速度偏低——唯一的活跃 Issue #868 已开放 66 天且尚未进入修复流程。**建议关注积压 Issue 的及时分流与关闭，以维持社区信任度。**

---

## 2. 版本发布

过去 24 小时内无新版本发布，故本部分省略。

---

## 3. 项目进展

| PR | 状态 | 方向 |
|---|---|---|
| [#969](https://github.com/nullclaw/nullclaw/pull/969) `feat(agent): structured approval_request / approval_response flow` | 🟡 待合并 | Agent 工具审批流 |

**分析：** PR #969 今天是**创建首日**，实现了 Agent Shell 工具（及任何返回 `error.ApprovalRequired` 的工具）的两轮审批交互机制：工具触发审批请求 → Agent 捕获并暂存 `PendingApproval` → 通过 Channel SSE 事件推送审批 UI → 等待用户审批响应。这是一个**安全性与用户体验的关键能力**——在 Agent 自主执行 shell 命令前引入人工确认门槛，直接回应了 AI Agent 在实际部署中"越权操作"的核心风险。

**项目推进评估：** 👍 正向。补全了 Agent Tool Loop 安全拼图中缺失的一环，后续 PR 可基于此事件流扩展更多受控工具。但若 CI Review 节奏不快，合并速度将是瓶颈。

---

## 4. 社区热点

### 🔥 Issue [#868](https://github.com/nullclaw/nullclaw/issues/868) — Zig build fails on Android/Termux (aarch64) AccessDenied

| 指标 | 数值 |
|---|---|
| 评论数 | 4 条 |
| 开放天数 | 66 天（2026-04-23 至今） |
| 影响平台 | Android + Termux 用户 |

**热度分析：** 这是过去 24 小时唯一有更新的 Issue，评论数为当前活跃 PR 中最高。4 条评论意味着有用户在持续追问或补充复现信息。AArch64 Android 用户尝试在 Termux 环境下构建项目遭遇 `AccessDenied` on `options.zig` linkat——本质是 Android 文件沙箱/Termux 权限模型与 Zig 构建缓存机制冲突。

**背后诉求：** 虽然用户基数不大（移动端/嵌入式场景），但该 Issue 持续 66 天未修复也未关闭，**反映了两个信号：** (1) 项目对非 x86_64 官方构建环境的支持无明确优先级；(2) 缺少在不修复时的沟通/变通方案提示（如推荐容器构建或 remote dev）。

---

## 5. Bug 与稳定性

| 严重度 | 编号 | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🟡 中 | [#868](https://github.com/nullclaw/nullclaw/issues/868) | `zig build` on Android/Termux aarch64 因 linkat AccessDenied 失败 | Open — 66 天 | ❌ 无 |

**判断：**

- 该 Bug 影响非主流构建环境（Android + aarch64 + Zig 0.16.0），不阻塞核心 Linux/macOS 用户使用。但开放超过两个月未响应，有损 Issue Triage 健康度，建议至少给予"已知限制"标签或变通指引。
- 无崩溃/数据丢失/安全漏洞类高严重度 Bug 报告。

---

## 6. 功能请求与路线图信号

| 证据 | 信号 |
|---|---|
| PR [#969](https://github.com/nullclaw/nullclaw/pull/969) Shell 工具两轮审批流 | 安全审批机制进入核心链路 |
| 同 PR 提及 "and any tool that returns `error.ApprovalRequired`" | 目标：通用审批框架（不限于 shell），后续可覆盖文件系统、网络工具等 |

**预判下一版本可能纳入范围：**

- Agent Tool 拦截 + SSE 审批 UI（附属于 #969）
- 基于审批流的日志/审计记录（自然延伸）
- 审批超时 / 默认策略配置（常见用户诉求，当前未提及）

---

## 7. 用户反馈摘要

基于 Issue #868 评论文本提炼：

| 维度 | 洞察 |
|---|---|
| **设备/环境** | Xiaomi Redmi Note 9 + LineageOS 22.2 + Termux，非标准开发环境 |
| **真实诉求** | 希望在 Android 手机上搭建轻量 Agent 实验环境（体现移动/去中心化场景需求） |
| **使用方式** | `zig build -Doptimize=ReleaseSmall` —— 用户明确要求小体积 release 构建 |
| **不满点** | 错误信息 (`AccessDenied on options.zig linkat`) 不够友好，难以快速定位根因 |
| **满意/正向信号** | 用户未放弃，试图通过社区评论寻求 workaround |

---

## 8. 待处理积压

| 积压项 | 类型 | 龄 | 建议操作 |
|---|---|---|---|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) Zig Android/Termux Build 失败 | Issue | 66 天 | 如无法第一时间修复，建议：① 加 `platform/android` + `known-issue` 标签；② 评论提供 Docker/Remote SSH 替代构建方案；③ 评估是否为 Zig 标准库 bug 应 upstream 报告 |

**维护者关注指数：** ⭐⭐⭐（单一 Issue 虽无直接稳定性威胁，但长期 Open + 有互动未闭环会传递"Issue 会被遗忘"的信号，不利于贡献者留存。）

---

*数据截至 2026-06-28。数据来源：github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-06-28

---

## 1. 今日速览

过去 24 小时，IronClaw 项目维持高活跃输出：**12 条 Issues**（9 关闭 / 3 新开）、**50 条 PRs**（22 已合并 / 28 仍在审查中），无新版本发布。

**核心主线鲜明** — Epic #5261（Capability Policy，即管理员共享工具/技能并按用户鉴权）完成全部 5 个核心 PR 的合并，功能骨架全部落地。与此同时，Reborn WebUI v2 前端质量体系建设（实时 QA Canary、E2E 覆盖矩阵、Node 工具链固定）形成第二条并行主线。项目健康度良好，Issue 清理率 75%，PR 积压主要集中在需要审查的大型 XL PR 上。

---

## 2. 版本发布

无新版本发布。

PR #5311 标记了一次常规自动化 release PR，涵盖以下 crate 更新（仍在 OPEN 状态）：
- `ironclaw_common` 0.4.2 → 0.5.0（⚠ API breaking）
- `ironclaw_skills` 0.3.0 → 0.4.0（⚠ API breaking）
- `ironclaw_safety` 0.2.2 → 0.2.3（✓ 兼容）
- `ironclaw` 0.24.0 → 0.29.1
- `ironclaw_skill_learning` 0.1.0 → 0.1.1

该 PR 自 2026-06-26 提出至今 2 天未经合并，可能等待更多变更批量发布。

---

## 3. 项目进展

### 3.1 Epic #5261（Capability Policy）完整落地

过去 48 小时内，Epic #5261 的全部 5 个核心 PR 均已关闭/合并，为 Reborn 架构下的**四维能力策略体系**（配置 / 身份 / 审批 / 可用性）奠定完整骨架：

| # | PR | 规模 | 状态 | 作用 |
|---|---|---|---|---|
| 1 | [#5262](https://github.com/nearai/ironclaw/pull/5262) — `policy model` — `ironclaw_capability_policy` crate | XL | ✅ 已合并 | 四维策略词汇表、优先级级联、内存存储解析器 |
| 2 | [#5344](https://github.com/nearai/ironclaw/pull/5344) — `policy engine` — delta store + resolver + identity/config/approval | XL | ✅ 已合并 | libSQL/文件系统持久化增量存储；在 dispatch 层可观测 |
| 3 | [#5349](https://github.com/nearai/ironclaw/pull/5349) — `availability dimension` | XL | ✅ 已合并 | 唯一依赖 #4544（scoped-lifecycle store）的维度切片，使可用性别称真正改变模型可见的工具面 |
| 4 | [#5355](https://github.com/nearai/ironclaw/pull/5355) — `control plane` — REST users + admin grants | XL | ✅ 已合并 | 合并链顶端；依赖 availability + user role / is_admin，提供 `PUT /users/{id}/policies` 等管理 API |
| 5 | [#5270](https://github.com/nearai/ironclaw/pull/5270) — `DB-backed user role + admin gate` | L | ✅ 已合并 | Owner>Admin>Member 三级角色体系，为后续所有 admin gate 提供基础判断能力 |

**意义**：Epic #5261（含子 Issue #5266、#5267、#5268、#5272、#5273）全部关闭。Reborn 架构首次实现了**管理员可以通过 REST API 或（未来的）UI 向用户授予工具/策略的能力**。这是构建多用户托管服务的关键里程碑 — 没有它，IronClaw 的 Reborn 堆栈更像是一个单用户本地代理，而非面向平台的 AI 网关。

### 3.2 Reborn WebUI v2 质量体系建设启动

| # | PR | 状态 | 作用 |
|---|---|---|---|
| 1 | [#5380](https://github.com/nearai/ironclaw/pull/5380) — Expand QA matrix coverage | OPEN | 基于电子表格的隔离/矩阵测试覆盖；遵循"不重复"原则分离 Rust 契约扫描与 E2E |
| 2 | [#5354](https://github.com/nearai/ironclaw/pull/5354) — Live QA canary | OPEN | 通过 Playwright 驱动真实 `ironclaw-reborn serve` WebUI，复用现有 Canary 密钥注入模式 |
| 3 | [#5371](https://github.com/nearai/ironclaw/pull/5371) — Port WebUI chat history coverage | OPEN | 将旧版 Reborn 浏览器的核心行为覆盖移植到 v2 |
| 4 | [#5384](https://github.com/nearai/ironclaw/pull/5384) / [#5370](https://github.com/nearai/ironclaw/pull/5370) — Pin Node tooling | 各 1 个 PR（1 个已合并，1 个被合并到 main） | 锁定 Node 22 + 更新 frontend lockfile metadata + 添加 cargo 重构建提示 |

**意义**：Reborn WebUI v2 已不仅是代码实现阶段，正向**生产级质量门禁**迈进。这一系列 PR 构成了一套三层 QA 架构：单元/集成 → 实时 Canary → 矩阵回归，预计将在本次 Sprint 结束时交付可观测的质量指标看板。

### 3.3 其他值得关注的功能 PR

- **[#5279](https://github.com/nearai/ironclaw/pull/5279)**（OPEN）— 修复 Reborn 排队消息转向（ steering）机制，支持将用户消息排入 active run 并显示排队状态。解决长运行场景下的消息丢失 / 反馈缺失问题。
- **[#5362](https://github.com/nearai/ironclaw/pull/5362)**（OPEN）— 加固 Slack 配对（pairing）激活流程，防止过期 code 被重放后继续聊天或抵达模型。重要的安全加固。
- **[#5365](https://github.com/nearai/ironclaw/pull/5365)**（OPEN）— 修复 WebUI v2 聊天 Retry 按钮为真的重新发送（之前是 truthy no-op stub）。
- **[#4841](https://github.com/nearai/ironclaw/pull/4841)**（OPEN）— 消除"run-borking"终态错误，使所有运行终态错误可恢复、可解释。
- **[#5381](https://github.com/nearai/ironclaw/pull/5381)**（OPEN）— 建立 Reborn 集成测试框架（进程内运行完整 Reborn 轮次），为后续所有 Reborn 变更提供端到端回归保障。

---

## 4. 社区热点

### Issues 热点

**（1）[#5378](https://github.com/nearai/ironclaw/issues/5378) — Google OAuth 每小时强制重新认证（OPEN）**

- **问题**：在 Reborn `hosted-single-tenant` profile（Railway 托管）及 `local-dev` / `local-dev-yolo` 环境下，所有 Google OAuth 能力（gmail、Calendar、Drive）约每 1 小时迫使用户重新认证。
- **严重性**：高 — 直接影响所有使用 Google 生态的托管实例用户。
- **根因**：OAuth token refresh 在托管环境中返回 `BackendUnavailable`，系统未正确处理可重试场景。
- **是否已有修复**：未看到关联 fix PR。需要 token refresh 链路的重试逻辑或 refresh token 缓存策略调整。

**（2）[#4928](https://github.com/nearai/ironclaw/issues/4928) — Notion OAuth 在 Railway 部署重定向到 localhost（已关闭）**

- **问题**：Notion MCP OAuth 在本地 Railway 部署生成 `localhost` 回调 URL，远程用户无法访问。
- **状态**：已关闭（2026-06-27），推测已修复回调 URL 生成逻辑以使用 Railway 域名。

**（3）[#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E 定期失败（OPEN，自 2026-05-27 已持续 32 天）**

- **背景**：Automated nightly E2E workflow 持续报错。
- **观察**：已有一个月未关闭，可能 E2E 积压或团队资源已转向 Reborn 集成测试框架（PR #5381）。建议评估是否用新框架替代旧 nightly E2E。

### PR 热点

**（1）[#5380](https://github.com/nearai/ironclaw/pull/5380) — QA matrix coverage（OPEN）**

- 由核心贡献者 `serrrfirat` 提交，是 Reborn WebUI v2 质量体系的顶层设计 PR。
- 引入"不重复"原则：CI 负责 Rust 契约/底层扫描，Playwright 负责 E2E 行为覆盖，电子表格作为矩阵源 of truth。

**（2）[#5381](https://github.com/nearai/ironclaw/pull/5381) — Reborn integration-test framework（OPEN）**

- 由核心贡献者 `henrypark133` 提交，建立进程内集成测试框架。
- 运行完整 Reborn 轮次（product workflow → scheduler → agent loop → 真实 LLM provider gateway + 真实 decorator chain → 真实 RootFilesystem），仅 mock 模型调用。
- 这是 Reborn 架构长期缺少的测试基础设施，一旦合并将大幅降低回归风险。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 问题 | 状态 | 是否已有 fix PR |
|---|---|---|---|---|
| 🔴 高 | [#5378](https://github.com/nearai/ironclaw/issues/5378) | Google OAuth token refresh 每小时失败，强制用户重新认证 | OPEN | ❌ 无 |
| 🟡 中 | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E 持续失败（32 天） | OPEN | ❌ 无（但 PR #5381 的集成测试框架可能替代） |
| 🟡 中 | [#5382](https://github.com/nearai/ironclaw/pull/5382) | HostedSingleTenantVolume 在 PR #5346 后回归 | ✅ 已合并 | ✅ 自身即修复 |
| 🟢 低 | [#5365](https://github.com/nearai/ironclaw/pull/5365) | WebUI v2 Retry 按钮是 no-op stub | OPEN | ✅ 自身即修复 |
| 🟢 低 | [#5364](https://github.com/nearai/ironclaw/issues/5364) | "Always allow eligible tools" 默认值应为 ON | 已关闭 | ✅ 已修复 |

**关键关注点**：Google OAuth 每小时失效（#5378）是影响面最大的稳定性问题，建议优先分配资源排查 refresh token 缓存与 Railway 网络环境的交互。

---

## 6. 功能请求与路线图信号

### 6.1 已明确纳入开发的功能

| 功能 | 关联 PR | 状态 | 预计合并 |
|---|---|---|---|
| Capability Policy 完整体系 | #5262, #5344, #5349, #5355, #5270 | ✅ 全部合并 | 已落地 |
| Reborn 集成测试框架 | #5381 | OPEN | 本周 |
| Reborn WebUI v2 QA Canary | #5354 | OPEN | 本周 |
| Reborn WebUI v2 QA Matrix | #5380 | OPEN | 本周 |
| Slack 配对流程加固 | #5362 | OPEN | 本周 |
| 排队消息 steering | #5279 | OPEN | 本周 |
| WebUI v2 chat history 覆盖移植 | #5371 | OPEN | 本周 |
| Run-borking 错误恢复 | #4841 | OPEN | 待审查 |

### 6.2 新提出的功能请求

- **[#5385](https://github.com/nearai/ironclaw/issues/5385)**（OPEN）— 细化 Capability Policy 的用户配置：owner/admin/member 三角色下的细粒度权限配置界面。**信号**：Epic #5261 刚完成后端骨架，此 Issue 自然指向下一阶段 — 管理 UI 或更丰富的策略配置 API。
- **[#5368](https://github.com/nearai/ironclaw/issues/5368)**（OPEN）— 非 Slack 信道的个人配对端到端联调。**信号**：Reborn WebUI 的信道通用化脚手架已存在（#5362），但仅 Slack 完全可用。此 Issue 要求补齐其他信道的 e2e 流程。

### 6.3 路线图判断

当前项目处于 **Reborn 平台化** 的关键阶段：
1. ✅ 能力策略引擎（Capability Policy）— 已完成
2. 🔄 质量基础设施（QA Canary + 集成测试框架）— 进行中
3. ⏳ 多信道支持（非 Slack 配对）— 待启动
4. ⏳ 管理 UI（Capability Policy 配置界面）— 需求已提出

---

## 7. 用户反馈摘要

### 痛点

1. **OAuth 认证体验差**（#5378、#4928）
   - 托管部署中 Google OAuth 每小时失效、Notion OAuth 回调到 localhost — 反映 IronClaw 在**从本地开发向生产托管迁移**时，认证/回调路径的"环境感知"能力不足。
   - 用户期望：OAuth 流程应自动适配部署环境（localhost vs Railway 域名），且 token refresh 应静默完成。

2. **Reborn 多用户能力缺失**（#5385）
   - 用户明确表示："仓库状态应允许细粒度配置用户"。当前 owner 通过 env var 硬编码，无法在运行时管理用户角色。
   - 这恰好与 Epic #5261 的 Capability Policy 形成呼应 — 后端已就绪，前端管理 UI 是下一个需求爆发点。

3. **WebUI v2 交互缺陷**（#5364、#5365）
   - "Always allow eligible tools" 默认关闭导致新用户被频繁打扰；Retry 按钮是空壳 — 反映 v2 功能完备度与旧版存在差距。

### 满意

- Epic #5261 的 5 个 PR 在 48 小时内全部合并，社区贡献者 `zetyquickly` 的高效执行获得隐含认可（Issue 全部快速关闭，评论中无阻塞反馈）。
- Reborn 质量体系（QA Canary + 集成测试框架）的推进方向获得社区共识 — 多个核心贡献者协同推进。

---

## 8. 待处理积压

| 积压项 | 类型 | 等待天数 | 风险 | 建议 |
|---|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败 | Issue | 32 天 | 🟡 中 — 持续失败会侵蚀团队对 CI 的信任 | 评估是否用 PR #5381 的集成测试框架替代；或分配资源修复 |
| [#5311](https://github.com/nearai/ironclaw/pull/5311) Release PR | PR | 2 天 | 🟢 低 — 常规自动化 PR | 审查后合并 |
| [#4841](https://github.com/nearai/ironclaw/pull/4841) Run-borking 错误恢复 | PR | 15 天 | 🟡 中 — 影响生产稳定性 | 安排审查；该 PR 解决"每个运行终态错误可恢复"的核心可靠性问题 |
| [#5114](https://github.com/nearai/ironclaw/pull/5114) Dependabot tokio-ecosystem 更新 | PR | 7 天 | 🟢 低 — 依赖更新 | 常规合并 |
| [#4498](https://github.com/nearai/ironclaw/pull/4498) Dependabot serde_yml 更新 | PR | 23 天 | 🟢 低 — 依赖更新 | 审查后合并或关闭 |
| [#5378](https://github.com/nearai/ironclaw/issues/5378) Google OAuth 每小时失效 | Issue | 1 天 | 🔴 高 — 影响所有 Google 能力用户 | 优先分配资源排查 refresh token 缓存与 Railway 网络交互 |

---

**日报总结**：IronClaw 项目本周在 Reborn 平台化方向取得标志性进展 — Capability Policy 完整落地、质量基础设施启动、多用户架构从概念进入可测试阶段。当前最大风险点是 OAuth 认证在托管环境的稳定性（#5378）和 Nightly E2E 的长期失败（#4108），建议下周优先处理。项目健康度评估：**🟢 良好**。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-06-28 | 数据截止：2026-06-27**

---

## 1. 今日速览

LobsterAI 今日活跃度处于**中低水平**。新增 2 个 Issue，PR 更新 8 条，新版本积压加剧，用户反馈趋于平静。

> 📊 今日小结：社区反馈热度下降，但 PR 清理活跃——经历前一阵子的修复浪潮后，项目进入平稳维护期。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 **7 个 PR 完成合并/关闭**，另有 1 个 PR 仍处于待合并状态。合并的 PR 中 6 个为积压超过 2 个月的 stale 分支（自动关闭），**真正有实质合并内容的为 PR #1001**。

### 已合并/关闭的 PR

| PR | 状态 | 说明 |
|---|---|---|
| **[#1001](https://github.com/netease-youdao/LobsterAI/pull/1001)** | Closed | 为 MCP 传输类型补充 SSE 和流式 HTTP 支持，修复了「MCP 配置不生效」的隐性 bug。此前 `mcpServerMagnager.ts` 的 `startServers` 仅处理 stdio 传输类型的 MCP 服务器 |
| [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) | Closed (stale) | 修复 OpenClaw 网关反复启动失败导致的无限重启循环——竞态条件导致进程退出后仍触发无限重启 |
| [#1448](https://github.com/netease-youdao/LobsterAI/pull/1448) | Closed (stale) | 修复 Agent 设置页面删除按钮及技能选择器显示的英文硬编码问题，补充 i18n key |
| [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | Closed (stale) | 定时任务多次执行记录折叠分组展示，优化侧栏会话列表可读性 |
| [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453) | Closed (stale) | 修复已停用技能仍被注入对话提示词的问题——`toggleSkill` reducer 未同步清理 `activeSkillIds` |
| [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) | Closed (stale) | 修复「不重复」定时任务清空日期后点击创建按钮无声失败的问题 |
| [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) | Closed (stale) | 修复快捷键设置缺少重复检测，允许不同功能绑定相同快捷键组合 |

### 仍然待合并

| PR | 状态 | 说明 |
|---|---|---|
| **[#2065](https://github.com/netease-youdao/LobsterAI/pull/2065)** | **OPEN** | 使用短 UUID 替代名称生成 Agent ID，解决删除后同名 Agent 数据复活问题。已标记 stale，等待维护者决策 |

**评估：** 项目今日无重大功能发布。实质合并仅 PR #1001 一项。大部分活动来自对积压 stale PR 的清理。PR #2065 提出了一个重要架构变更（Agent ID 迁移），社区讨论较多但长期未推进，需关注。

---

## 4. 社区热点

今日无高热讨论项（所有 Issue 和 PR 评论数均为 0）。以下是最值得关注的活跃条目：

### 🔥 PR [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) — Agent ID 改用短 UUID

- **持续活跃**：2026-05-28 创建至今，已有一个月未合并且仍为 OPEN 状态
- **核心问题**：当前 Agent ID 基于名称派生（`"My Assistant"` → `"my-assistant"`），删除 Agent 后本地文件未清理，重新创建同名 Agent 会导致**旧数据意外复活**
- **详细分析了删除时的数据遗漏**：

  | 数据 | 是否清理 | 影响 |
  |---|---|---|
  | Agent workspace 目录 | ❌ 未清理 | 孤儿文件堆积 |
  | `cowork_sessions` 关联会话 | ❌ 未清理 | 会话列表污染 |
  | 对话历史文件 | ❌ 未清理 | 隐私泄露风险 |

- **建议方案**：以短 UUID 作为 Agent 唯一标识，名称仅用于展示。这是一个潜在的**破坏性变更**，需考虑向后兼容
- **状态**：已标 stale，社区关注但维护者尚未响应

### 💬 Issue [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) — 数据备份功能导致进程卡死

用户在执行「数据迁移 → 备份数据」时，100% 复现主窗口未响应。本质是主线程执行 SQLite 备份时阻塞 UI，属于性能与架构设计问题。目前无 fix PR。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 Critical

| # | 问题 | 链接 | 复现率 | 有 fix PR |
|---|---|---|---|---|
| 1 | 数据备份功能 100% 卡死主进程（未响应） | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) | 100% | ❌ |
| 2 | OpenClaw 网关无限重启循环（已修复但需确认合入版本） | [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) | 高 | ✅ 已关闭 |

### 🟡 Medium

| # | 问题 | 链接 | 有 fix PR |
|---|---|---|---|
| 3 | MCP SSE/流式HTTP 传输类型配置不生效 | [#1001](https://github.com/netease-youdao/LobsterAI/pull/1001) | ✅ 已关闭 |
| 4 | 已停用技能仍被注入对话提示词 | [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453) | ✅ 已关闭 |
| 5 | 定时任务日期清空后无声失败 | [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) | ✅ 已关闭 |
| 6 | 快捷键冲突无检测 | [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) | ✅ 已关闭 |
| 7 | 安装时 `Resource extraction failed: could not start extractor process` | [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) | ❌ |

### 🟠 特别关注：Issue [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) — NSIS 安装器反复失败

用户做了极其详细的排查：
- 退出码 `-2147450726`（`ERROR_BAD_ENVIRONMENT`）
- 已排除安全软件（Defender、联想电脑管家、AppLocker）
- 发现真实安装路径与 Log 路径不一致（G 盘 vs C 盘无关副本）
- 已手动解包 NSIS 安装包分析 `unp` 行为

这说明**问题已超出普通用户可自行解决的范围**，属于安装器层面的深层 bug，已超 24 小时未获官方响应。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 评估 |
|---|---|---|
| **Agent ID 改用 UUID** | [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) | 架构性变更，方向合理，但因涉及数据迁移需谨慎规划。长期 stale |
| **定时任务录音折叠展示** | [PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | UX 改善，已关闭但未确认是否合入主线 |
| **MCP 传输类型扩展** | [PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001) | 功能性补充，已关闭 |
| **删除 Agent 时完整清理数据** | [PR #2065 延伸](https://github.com/netease-youdao/LobsterAI/pull/2065) | 属架构清理诉求，尚无专项 fix PR |

**路线图判断：** 从近期合并和 issue 趋势看，项目当前优先级集中在：
1. **稳定性回归修复**（网关、技能注入、定时任务表单等）
2. **i18n 补全**
3. **数据隔离/清理**（Agent 删除遗留问题被反复提及）

---

## 7. 用户反馈摘要

从 Issue 内容提炼真实用户画像与痛点：

### 🧑‍💻 用户画像 A：重度 Windows 用户（#2214、#2215）
- **使用场景**：日常工作使用 LobsterAI，每天数百条消息，数据库已达 71.6 MB WAL 模式，有定时备份习惯
- **核心痛点**：
  - 数据备份应是最基础的功能，却导致主进程卡死（**100% 复现**）
  - NSIS 安装器反复失败，日志信息有限，`ERROR_BAD_ENVIRONMENT` 难以定位
  - 展现出极强的自行排查能力（解包 NSIS、分析多路径），侧面反映**项目文档和诊断工具不足**
- **情绪倾向**：理性但焦虑。问题报告极度详细说明用户投入大量时间，0 条评论说明社区氛围不足

### 🧑‍💻 用户画像 B：多语言用户 (#1448)
- 期望完整的中文本地化体验，而非中英混杂

### 🧑‍💻 用户画像 C：MCP 高级用户 (#1001, #2065)
- 积极使用 SSE/流式 HTTP MCP 传输
- 深度使用 Agent/定时任务功能，关注数据隔离

---

## 8. 待处理积压

以下条目长期未获响应或处于 stale 状态，建议维护者优先关注：

### 🔴 P0 — 需立即关注

| # | 条目 | 链接 | 等待天数 | 风险 |
|---|---|---|---|---|
| 1 | 数据备份卡死主进程 | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) | ~2 天 | 用户数据安全，基础功能不可用 |
| 2 | NSIS 安装器 `ERROR_BAD_ENVIRONMENT` | [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) | ~1 天 | 阻碍新用户安装 |

### 🟡 P1 — 需排期处理

| # | 条目 | 链接 | 等待天数 | 说明 |
|---|---|---|---|---|
| 3 | Agent ID 改用 UUID | [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) | ~30 天 | 架构变更，需评估迁移方案。持续 stale 可能导致后续更难合入 |

### ⚪ P2 — 建议处理

| # | 条目 | 链接 | 说明 |
|---|---|---|---|
| 4 | 定时任务录音折叠展示 | [PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449) | 已关闭，确认是否已合入主线 |
| 5 | 已停用技能注入修复 | [PR #1453](https://github.com/netease-youdao/LobsterAI/pull/1453) | 同上，确认合入状态 |

---

## 📈 项目健康度评估

| 维度 | 评级 | 说明 |
|---|---|---|
| **Issue 响应速度** | ⚠️ 一般 | #2215 已超 24 小时无响应，#2214 亦同 |
| **PR 吞吐效率** | 🟡 偏低 | 多数为 stale 自动关闭，实质合并仅 1 项 |
| **版本发布节奏** | ⚠️ 需关注 | 无新版本发布，积压中 |
| **Bug 修复能力** | ✅ 正常 | 已知严重 bug 多数已有 fix PR |
| **社区参与度** | 🔴 偏低 | 所有 Issue/PR 评论数为 0，用户各自为战 |
| **整体** | 🟡 **中等偏下** | 维护清洁有余，响应疏通不足 |

---

*数据来源：github.com/netease-youdao/LobsterAI | 日报由 AI 分析师自动生成*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-06-28（周日）

---

## 1. 今日速览

Moltis 今日维持**低强度周日工作节奏**：共 1 条新 Issue 和 2 条活跃 PR 更新，无版本发布。项目当前重心集中在 **Agent 工具调用确定性与本地小模型兼容性** 两条主线——两位 PR 贡献者均在解决较小模型（Gemma 4、oMLX）输出格式不规范的工程问题。无紧急热修复或破坏性变更，项目整体处于稳步 polishing 阶段，健康度良好。本周是否会有更多合并动作取决于维护者对这两条 PR 的 review 进度。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭。以下两条开放 PR 代表了当前最实质性的工程推进：

| PR | 方向 | 核心价值 |
|---|---|---|
| [#1136](https://github.com/moltis-org/moltis/pull/1136) | `fix(agents): coerce stringified scalar tool args before validation` | 解决小规模本地模型（Gemma 4、oMLX 等）将 `true / 5000` 等标量值序列化为 `"true" / "5000"` 字符串后导致预分发校验失败的问题。实施强制类型归一化，属于典型的模型兼容性加固。 |
| [#1098](https://github.com/moltis-org/moltis/pull/1098) | `fix(browser): tolerate null optional params in browser tool calls` | 解决部分模型对可选参数显式输出 `null`（如 `"ref_":null`）时，`#[serde(default]` 无法兜底的场景。同样属于本地小模型兼容补丁，已开放 25 天。 |

这两条 PR 若能合并，将对**本地部署用户**的体验形成可观改善，使 Moltis 在端侧/桌面模型生态中的稳定性上一个台阶。

---

## 4. 社区热点

**[ISSUE #1137](https://github.com/moltis-org/moltis/issues/1137)** — *Apple Container ID exceeds name limit*

- **背景：** macOS 容器系统（Apple Container）自动生成的容器 ID 超出 Docker/容器命名长度限制，导致 Moltis 在 macOS 容器环境下启动异常。
- **热度：** Issue 开放 1 天、👍 0、评论 0，讨论尚处于萌芽阶段。
- **诉求核心：** Apple 生态用户希望在 Moltis 中对接 Apple Container 方案时，命名合规性需主动适配，而非依赖用户自行 workaround。
- **信号价值：** 反映出 Moltis 用户群正在向 Apple 原生容器方案迁移（Apple Container 于 WWDC 2025 发布），后端适配需求可能在未来几个版本密集出现。

> 暂无其他高评论量或高 👍 的热点条目。

---

## 5. Bug 与严重性

| 严重级别 | 描述 | Fix PR | 状态 |
|---|---|---|---|
| 🟡 中 | **Apple Container ID 超命名长度限制** ([#1137](https://github.com/moltis-org/moltis/issues/1137))——不修复将阻塞 Apple Container 用户启动，影响 macOS 原生容器生态推广 | 尚无 | 报告中 |
| 🟢 低-中 | **小模型 string 标量工具参数导致校验失败** ([#1136](https://github.com/moltis-org/moltis/pull/1136)) | [#1136](https://github.com/moltis-org/moltis/pull/1136) 已有修复 PR，未合并 | 修复待合并 |
| 🟢 低-中 | **Browser tool 可选参数 null 导致解析中断** ([#1098](https://github.com/moltis-org/moltis/issue/1098)) | [#1098](https://github.com/moltis-org/moltis/pull/1098) 已有修复 PR，开放 25 天 | 修复待合并 |

**结论：** 无任何正在发生的严重崩溃/数据丢失问题；所有已知中度 Bug 均有对应修复 PR，只待 review & merge。

---

## 6. 功能请求与路线图信号

今日无明确的功能请求（Feature Request）。但以下方向可从现有 PR 与 Issue 中捕捉到路线图信号：

1. **本地小模型一等公民支持** — PR #1136、#1098 不约而同指向同一根因：小型/本地模型的工具调用输出稳定性差。合并这两个 PR 后，项目有望在 README 中正式加亮"兼容本地模型"作为一级卖点。
2. **Apple Container / macOS 原生容器适配** — Issue #1137 是首个 Apple Container 相关信号。建议留意后续是否出现更多同类 Issue，以判定是否需要专项适配里程碑。

---

## 7. 用户反馈摘要

| 维度 | 要点 |
|---|---|
| 😐 痛点 | 小模型用户在工具调用环节频繁遭遇静默失败（参数类型/空值），根因隐藏在模型层与框架层的边界，调试成本高。Apple 容器用户则在第一道门槛（容器命名）就被拦截。 |
| 🖥️ 使用场景 | 本地推理（Gemma 4 / oMLX 等）+ macOS Apple Container 开发环境——两个场景都指向"**非云端、非大模型**"的边缘/桌面用户群。 |
| 🙂 满意 | Issue 提交者对项目已有基本信任（复现流程详尽），愿意向项目报告而非直接放弃。 |
| 😕 不满意 | 尚无公开负面情绪表达，但 PR #1098 已开放 25 天未合并，可能影响贡献者后续提交积极性。 |

---

## 8. 待处理积压提醒

| 类型 | 编号 | 开放天数 | 提醒内容 |
|---|---|---|---|
| 🔴 PR (拖延) | [#1098](https://github.com/moltis-org/moltis/pull/1098) — browser null optional params | **25 天** | 超过三周无合并动作。建议维护者尽快完成 review，即使请求修改也请给出明确反馈——长期沉默会显著伤害外部贡献者积极性。 |
| 🟡 PR (待审) | [#1136](https://github.com/moltis-org/moltis/pull/1136) — coerce stringified scalar tool args | 1 天 | 正常节奏，建议本周内完成初次 review。 |
| 🟡 Issue (观察) | [#1137](https://github.com/moltis-org/moltis/issues/1137) — Apple Container ID name limit | 1 天 | 尚未确认维护者是否认领。若确认需要修复，请关联对应 PR 或留下 roadmap 评论，避免 stale 关闭。 |

---

> **总评：** Moltis 今日无紧急事项，项目稳定向好。核心建议——**优先合并 PR #1098 以兑现外部贡献者信任**，并以本周窗口完成 PR #1136 评审，形成"本地模型兼容"的发布亮点。Issue #1137 值得标记为 Apple-ecosystem 优先级，观察后续同类报告密度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-28（周日）

> 项目地址：github.com/agentscope-ai/CoPaw（即 QwenPaw）

---

## 1. 今日速览

CoPaw 在过去 24 小时内保持了**高开发活跃度**：15 个 PR 更新（14 待合并、1 已合并/关闭）和 5 个 Issue（4 活跃、1 已关闭），但无新版本发布。当前项目处于**密集迭代期**：多名贡献者围绕 Agent 工具注册、前端单元测试覆盖率、Matrix 流式消息、治理策略泛化等方向并行推进，测试基建（W1–W4 四个 sprint）正在快速铺开。整体健康度**良好**，但积压的老 PR 和部分 Issue 缺乏响应值得关注。

---

## 2. 版本发布

⚠️ 过去 24 小时无新版本发布。

---

## 3. 项目进展

### 已合并/关闭

| PR | 作者 | 内容摘要 |
|---|---|---|
| [#5213](https://github.com/agentscope-ai/QwenPaw/pull/5213) (CLOSED) | xiaoming-qxm | 改进 MCP 策略布局的响应式 UI，含来源作用域的访问主体发现 |

### 待合并中的重要 PR（按影响力排序）

| PR | 类型 | 内容 | 影响 |
|---|---|---|---|
| [#3521](https://github.com/agentscope-ai/QwenPaw/pull/5321) | feat | **scroll 上下文管理器** — 持久化 SQLite 历史 + recall REPL，替代原生压缩策略 | ⭐ 架构级新能力，可显著改善长对话质量 |
| [#5524](https://github.com/agentscope-ai/QwenPaw/pull/5524) | fix | **spawn_subagent 注册到 Runtime 2.0 工具发现** + 恢复后台聊天端点 | ⭐ Agent 子代理功能在新 Runtime 下恢复可用 |
| [#5546](https://github.com/agentscope-ai/QwenPaw/pull/5546) | feat | **泛化治理策略模式**（governance policy pattern） | 治理框架灵活性提升 |
| [#5568](https://github.com/agentscope-ai/QwenPaw/pull/5568) | fix | **修复全部 5 个官方插件在 2.0 上的安装失败** | 关键回归修复 |
| [#5582](https://github.com/agentscope-ai/QwenPaw/pull/5582) | fix | **恢复流式 reasoning_content 400 错误处理**（关联 #5573） | 关联关键 Bug |
| [#5585](https://github.com/agentscope-ai/QwenPaw/pull/5585) | feat | **Matrix 频道新增流式发送模式（类 Discord）** | 用户体验改善 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | feat | **DataPaw 数据分析插件 — 12 个 BI 技能** | 生态扩展 |
| [#5578](https://github.com/agentscope-ai/QwenPaw/pull/5578) | fix | **CI: Tauri 初始化后移除 BOOTSTRAP.md** | 修复 Windows/macOS 打包验证流 |

**测试基建推进（hanson-hex 系列）**：PR [#5409](https://github.com/agentscope-ai/QwenPaw/pull/5409) (M2 Stores+Hooks, 120 cases) → [#5422](https://github.com/agentscope-ai/QwenPaw/pull/5422) (runner, 47 cases) → [#5423](https://github.com/agentscope-ai/QwenPaw/pull/5423) (crons, 51 cases) → [#5434](https://github.com/agentscope-ai/QwenPaw/pull/5434) (前端 M3-A Agent hooks+Settings, 135 cases) → [#5438](https://github.com/agentscope-ai/QwenPaw/pull/5438) (前端 M3-B Inbox+API, 171 cases) → [#5581](https://github.com/agentscope-ai/QwenPaw/pull/5581) (app-infra W3, 11 cases)。七个 PR 累计贡献约 **635 个测试用例**，后端覆盖率从 39% 基线持续提升。

---

## 4. 社区热点

**🔥 [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) — DeepSeek V4 thinking 模式在 OpenAI 兼容端点的 400 错误**（2 条评论）

- **背景**：DeepSeek V4 通过第三方中转站（如 micu_ai）接入时，流式 `reasoning_content` 缺失未兜底 + 工具 Schema null 类型未清洗，导致几乎必现 400 错误。
- **信号**：DeepSeek V4 + OpenAI 兼容中转站是**广泛使用的真实场景**，非官方 API 的协议差异处理成为刚需。已有维护者在 PR [#5582](https://github.com/agentscope-ai/QwenPaw/pull/5582) 中跟进修复流式路径。

**🔥 [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) — 对话记录异常中断后丢失，缺乏断点保存**

- **场景**：Agent 执行 `reboot` 导致宿主机重启、服务崩溃/进程被杀后，当前对话记录完全消失。
- **信号**：对 Agent 长时间运行任务（特别是可执行系统命令的场景）的**容错能力**是核心用户诉求。目前尚无修复 PR。

**🔥 [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) — 无法连接自定义 ascend-vllm 模型**

- **关键信息**：1.1.7 版本可连接，后续版本断裂。测试通过但对话时连接失败，vLLM 后端显示正常。
- **信号**：**回归问题**，可能涉及 vLLM 客户端适配或环境变量传递变更。建议对比 1.1.7→1.1.8 的变更日志定位根因。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 问题 | 状态 |
|---|---|---|---|
| 🔴 高 | [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | 自定义 ascend-vLLM 模型连接失败（回归） | ❌ 无 fix PR |
| 🟡 中 | [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) | DeepSeek V4 流式 reasoning_content 缺失 / null Schema 类型 → 400 | ✅ [#5582](https://github.com/agentscope-ai/QwenPaw/pull/5582) under review |
| 🟡 中 | [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) | 对话记录在异常中断后无断点保存 | ❌ 无 fix PR |
| 🟢 低 | [#5583](https://github.com/agentscope-ai/QwenPaw/issues/5583) | 右侧对话弹出层默认选中背景不明显 | ❌ 无 fix PR |

**整体稳定性评估**：有两个中等严重度 Bug 缺乏响应（vLLM 回归 + 断点保存），DeepSeek V4 问题已有修复在途。建议优先关注 vLLM 回归问题，因其影响特定硬件用户群体的核心功能。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 判断 |
|---|---|---|
| **持久化上下文 / 长对话记忆** | [#5321 scroll 上下文管理器](https://github.com/agentscope-ai/QwenPaw/pull/5321) | 进入 review 阶段，技术方案可行，大概率纳入近期版本 |
| **子代理（spawn_subagent）正式化** | [#5524](https://github.com/agentscope-ai/QwenPaw/pull/5524) | 补完 Runtime 2.0 注册链，属于 Agent 核心能力 |
| **Matrix 频道增强** | [#5585 流式模式](https://github.com/agentscope-ai/QwenPaw/pull/5585) | 小步快跑，独立可合并 |
| **DataPaw 数据分析插件** | [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | 起步时间早（5月22日），但仍在 Under Review，可能需要 reviewer 排期 |
| **治理策略泛化** | [#5546](https://github.com/agentscope-ai/QwenPaw/pull/5546) | 描述模板未完善，成熟度待观察 |
| **对话断点恢复** | [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) | 高价值需求但实现复杂度大（需 checkpoint 机制），可能作为后续里程碑 |

---

## 7. 用户反馈摘要

- **多模型 / 中转站兼容性**：DeepSeek V4 + 非官方中转站的组合被广泛使用，但协议细节差异（reasoning_content、null 类型）缺乏兜底处理 → **不满点**：「几乎必现」、严重影响使用。
- **硬件生态碎片化**：华为 Ascend vLLM 用户在升级后遭遇断连，其他软件无此问题 → **诉求**：自定义端点君的兼容性测试需要覆盖主流推理框架。
- **Agent 执行安全边界**：用户让 Agent 执行 `reboot` 后对话全丢 → **矛盾**：赋予 Agent 系统级权限 vs. 缺乏容错 → 需要 checkpoint 或沙箱隔离的平衡方案。
- **正面反馈**：1.1.7 版本 vLLM 连接正常，说明基础功能本身可用，问题在于后续版本的变更引入了回归。

---

## 8. 待处理积压

| 积压项 | 类型 | 创建日期 | 等待天数 | 建议行动 |
|---|---|---|---|---|
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) DataPaw 插件 | PR | 2026-05-22 | **37 天** | 安排 reviewer，明确排期或请求作者补充 CI 测试 |
| [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) ascend-vLLM 连接失败 | Issue | 2026-06-27 | 1 天 | 优先排查，影响特定硬件用户 |
| [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) 对话断点保存 | Issue | 2026-06-27 | 1 天 | 确认优先级，纳入路线图讨论 |
| [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) scroll 上下文管理器 | PR | 2026-06-19 | 9 天 | 架构 PR 需要充分 review，但建议限时反馈 |

---

**日报总结**：CoPaw 项目当前处于功能快速迭代 + 测试基建补课的并行阶段。测试覆盖率（W1–W4 sprint）和 Agent 核心能力（子代理注册、上下文管理）两条主线推进积极。需要关注的风险点：(1) vLLM 回归 Bug 影响特定硬件用户；(2) 4622 等长期 PR 的 reviewer 积压；(3) 对话断点恢复是高价值但高复杂度需求，需尽快明确路线定位。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-28

---

## 1. 今日速览

ZeroClaw 社区保持高活跃度，过去 24 小时共产生 Issues 更新 46 条、PR 更新 50 条。项目持续推进多线并重的工作流：**安全加固链**（SLSA 供应链签名、WASM 插件运行时、容器镜像签名）已提交 RFC 并得到维护者拆分子任务跟进；**功能面**则新增了 WhatsApp 被动群组上下文、Inkbox 原生通信渠道、SOP 自动化维护 tick、Goal Mode 自主会话等有影响力的 PR。PR 积压严重（待合并 47 条），无新版本发布，CI 与 release 流程的迭代是当前瓶颈之一。

---

## 4. 社区热点

### 🗣️ 讨论最活跃的 5 条 Issues

| # | 议题 | 评论数 | 标签 |
|---|------|--------|------|
| 1 | [RFC #8177 — Supply chain signing（硬件 PGP、hermetic builds、SLSA 溯源）](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | 10 | `type:rfc` `risk:high` `status:blocked` |
| 2 | [Bug #5844 — 系统提示对 memory 权重过高](https://github.com/zerocaw-labs/zeroclaw/issues/5844) | 7 | `bug` `memory` `risk:high` |
| 3 | [Bug #5808 — 默认 32k context 即被 system prompt+工具定义撑爆](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | 6 | `bug` `S1` `risk:high` |
| 4 | [Bug #6360 — Telegram 通道不触发 prompt caching](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | 4 | `bug` `telegram` `prompt-caching` |
| 5 | [Bug #4879 — Gemini CLI OAuth 失效](https://github.com/zerocaw-labs/zeroclaw/issues/4879) | 4 | `bug` `provider:gemini` `risk:high` |

**核心诉求**：
- 安全类议题正从讨论走向实施（8177 已拆出 #8058/#8277/#8287 等子任务），社区对"构建可验证发布与第三方扩展沙箱"有强诉求；
- runtime 内存/上下文争用 Bug 反馈期已超 2 个月，至今卡在 `status:in-progress`，用户情绪明显在升温；
- 通道（channel）能力差异成为体验不一致的主要来源：Telegram 缓存失效、WhatsApp 群组静默丢弃消息均有对应 RFC/PR 正在发育中。

### 🔥 最受关注的 5 条 PRs

| # | 议题 | 特征标签 | 简介 |
|---|------|---------|------|
| 1 | [PR #8389 — WhatsApp 被动群组上下文](https://github.com/zeroclaw-labs/zerocaw/pull/8389) | `channel:whatsapp` `size:L` | 在 `ChannelMessage` 上新增 `passive_context` 与 `ChannelConversationScope`，补上 WhatsApp Web 群组消息的接收面 |
| 2 | [PR #8384 — Inkbox 原生渠道](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | `channel` `quickstart` | 引入 email+语音+SMS+iMessage 的 API-first 通信基础设施 |
| 3 | [PR #8344 — 修复 stable-pointer tag 检测时机](https://github.com/zeroclaw-labs/zeroclaw/pull/8344) | `ci` `risk:low` `size:XS` | 将 git tag 校验推迟到 deploy 阶段，修复 v0.8.2 合并后 Pages deploy 硬失败 |
| 4 | [PR #8368 — 替换 Extism 为 wasmtime component-model host](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) | `plugins:wasm` `risk:high` | 移除 Extism，直接对接 wasmtime 对三大 worlds 的 component-model host（**请勿合并**） |
| 5 | [PR #8391 — SOP 维护 tick（EPIC A1）](https://github.com/zeroclaw-labs/zeroclaw/pull/8391) | `tool:sop` `risk:medium` | 将 fail-closed approval timeout 接入生产 tick |

---

## 3. 今日进展（合并 / 关闭）

今日无合并 PR，但有 12 条 Issues 被关闭：

| 编号 | 标题 | 状态 / 标签 |
|------|------|-------------|
| #8378–#8371 | `dms-gst-agent` 系列 User Story / Bootstrap / 文档打磨任务（共 8 个） | `invalid` 关闭 |
| #8047 | ReadSkillTool 在 data_dir 查找 skills 而非 agent 工作区 | 已关闭 |
| #6434 | Shell 工具在 `[autonomy] level = "full"` 下仍被拒绝 | 已关闭 |
| #4879 | Gemini CLI OAuth 不通 | 已关闭 |
| #5844 | 系统提示 memory 权重过高 | 已关闭 |

注：`dms-gst-agent` 系列均以 `invalid` 单一标签关闭，推测为该 agent 子仓库任务管理方式与上游不合，或为误投，需跟踪后续是否迁移至独立仓库。

**无版本发布。**

---

## 5. Bug 与稳定性

| 严重度 | Bug | Fix PR / 状态 | 备注 |
|--------|-----|---------------|------|
| S1 工作流阻断 | [Bug #5808 — 默认 32k context 首轮迭代即溢出](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | `in-progress` 无对应 PR | 核心调度器参数缺陷 |
| S1 工作流阻断 | [Bug #6434 — Shell 工具全授权仍被拒](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | ✅ 已关闭 | — |
| S1 工作流阻断 | [Bug #4879 — Gemini CLI OAuth 失效](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | ✅ 已关闭 +2👍 | — |
| S2 降级 | [Bug #5844 — memory 在 cron job 中权重过高](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | ✅ 已关闭 | — |
| S2 降级 | [Bug #6360 — Telegram prompt caching 不生效](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | 无 fix PR | 通道能力差异 |
| S2 降级 | [Bug #8047 — ReadSkillTool 路径错位](https://github.com/zeroclaw-labs/zeroclaw/issues/8047) | ✅ 已关闭 | — |
| S1 待复测 | [Bug #8138 — OpenRouter 模型 fallback 未接入](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) | `in-progress` | 与 PR #8148 Anthropic 错误传播存在交叉关注 |

---

## 6. 功能请求与路线图信号

| 议题 / RFC | 标签 | 关联 PR | 预计落地位置 |
|------------|------|---------|--------------|
| [RFC #8177 — Supply chain signing](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | security `risk:high` `blocked` | #8058 / #8277 / #8287 | v0.8.x 安全硬化 |
| [RFC #8135 — Wasm-first 插件运行时](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) | wasm security `risk:high` | #8368（试验） | v0.8.3+ |
| [RFC #8398 — Plugin 权限/配置/secrets 模型](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | plugins — 今日新开 | 待定 | v0.9.0 |
| [RFC #8303 — Goal Mode 自主会话](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | agent-loop `risk:high` | ADR #8393 | v0.8.3 / v0.9.0 |
| [RFC #8396 — Wire-Protocol-First Provider 模型](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | provider — 今日新开 | 待设计 | v0.9.0 架构方向 |
| [Feature #4467 — MCP resources/prompts 支持](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | MCP tool `in-progress` | 进行中 | v0.8.x |
| [Feature #6642 — 在 llm.call 上捕获完整 prompt/completion](https://github.com/zeroclaw-labs/zeroclaw/issues/6642) | OTel `in-progress` | #6966（上游已提 PR） | v0.8.x |

结合 #7432（v0.9.0 追踪器，110 开放条目）和 #7314 / #7320（v0.8.3 追踪器），可判断 **v0.8.3 将继续承载 WASM 插件平台、SOP、Goal Mode、ACP 通道、安全加固**，而 v0.9.0 将聚焦 auth、gateway 边界与 breaking-change 队列。

---

## 7. 用户反馈摘要

- **cron job 中 memory 权重过高**（#5844）：用户报告在 cron 场景下 agent 过度依赖历史记忆而忽略当前 prompt，已关闭但根因修复需关注。
- **Telegram 通道体验不一致**（#6360）：CLI 下 prompt caching 正常，Telegram 下强制全量重处理，用户明确感知到成本与延迟差异。
- **WhatsApp 群组消息丢失**（#8379）：用户需要"被动上下文"模式，让未 @ 机器人的群消息也能进入历史，PR #8389 已响应。
- **Gemini OAuth 阻断**（#4879）：+2 点赞，说明 Gemini 用户群体不小，已关闭但需确认修复版本。
- **Shell 工具全授权仍被拒**（#6434）：用户配置了 `level = "full"` 仍无法执行简单命令，已关闭，需回归验证。
- **OpenRouter fallback 不可用**（#8138）：用户希望利用 OpenRouter 的自动模型 failover 能力提升可用性，目前仅支持单模型字符串。

---

## 8. 待处理积压（需维护者关注）

| 积压项 | 类型 | 状态 | 建议 |
|--------|------|------|------|
| [Bug #5808 — 默认 32k context 溢出](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | Issue | `in-progress` 无 PR，开放 73 天 | 需排期修复或明确 workaround |
| [Bug #6360 — Telegram prompt caching](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Issue | `accepted` 无 PR，开放 85 天 | 通道能力对齐 |
| [PR #6966 — OTel prompt/completion 捕获](https://github.com/zeroclaw-labs/zeroclaw/pull/6966) | PR | `needs-author-action` `stale-candidate`，开放 32 天 | 需作者响应或关闭 |
| [PR #5187 — arm64 Docker 目标](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) | PR | `needs-author-action`，开放 87 天 | 长期未动，建议关闭或接手 |
| [PR #8368 — wasmtime 替换 Extism](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) | PR | 明确标注 **DO NOT MERGE** | 需拆分或重新设计后重新提交 |
| [RFC #8177 — Supply chain signing](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | Issue | `status:blocked` | 需解除阻塞或明确依赖 |
| [RFC #8398 — Plugin 权限模型](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | Issue | 今日新开，0 评论 | 需社区讨论引导 |
| [RFC #8396 — Wire-Protocol-First Provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Issue | 今日新开，0 评论 | 需架构方向确认 |

---

**日报生成时间**：2026-06-28  
**数据来源**：github.com/zeroclaw-labs/zeroclaw（截至 2026-06-27 23:59 UTC+8）

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*