# OpenClaw 生态日报 2026-06-09

> Issues: 500 | PRs: 494 | 覆盖项目: 13 个 | 生成时间: 2026-06-09 00:36 UTC

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

# OpenClaw 项目动态日报 — 2026-06-09

---

## 1. 今日速览

OpenClaw 今日处于**高活跃维护期**。过去 24 小时内 Issues 更新 500 条、PR 更新 494 条，其中新开/活跃 Issue 447 条、已关闭 53 条，待合并 PR 333 条、已合并/关闭 161 条，并发布了 2 个 beta 版本（v2026.6.5-beta.3 和 v2026.6.5-beta.5）。从数据看，项目处于密集迭代阶段，合并率约 32.6%（PR）和 10.6%（Issue），积压量较大但有稳定消化节奏。社区关注点集中在 session 状态管理、子代理生命周期、多渠道路由和安全性四个方向。

---

## 2. 版本发布

### v2026.6.5-beta.5（最新）

**核心变更：**

- **QQBot 剥离模型推理脚手架** — QQBot 在原生投递前自动剔除 `<thinking>` 等模型推理中间产物，防止内部思维链泄露到频道回复中。PR: [#89913](https://github.com/openclaw/openclaw/pull/89913), [#90132](https://github.com/openclaw/openclaw/pull/90132)，感谢 @openperf。
- **MCP 工具结果类型强制转换** — 对 `resource_link`、`resource`、`audio`、畸形图片等 MCP 工具返回结果进行类型 coerce，提升与未来内容类型的兼容性。

### v2026.6.5-beta.3

与 beta.3 相比，beta.5 为增量修复，无破坏性变更。建议 QQBot 渠道用户体验到思维链泄露的用户尽快升级。

---

## 3. 项目进展

今日有多个 PR 推进到「ready for maintainer look」阶段，表明代码审查正在加速：

| PR | 说明 | 状态 |
|---|---|---|
| [#91529](https://github.com/openclaw/openclaw/pull/91529) | **修复 transcript 图片脱敏** — 防止默认 secret 模式重写 base64 图片字节，修复已污染的 session 图片 blob | 👀 待 maintainer 审 |
| [#90122](https://github.com/openclaw/openclaw/pull/90122) | **折叠非致命工具错误** — 隐藏搜索无结果等内部工具失败的红色错误横幅，避免用户困惑 | 👀 待 maintainer 审 |
| [#91520](https://github.com/openclaw/openclaw/pull/91520) | **Control UI Agent 列表改为可见列表** — 替换 `<select>` 下拉框为侧边导航列表，解决多 Agent 场景下高频切换痛点 | 👀 待 maintainer 审 |
| [#88970](https://github.com/openclaw/openclaw/pull/88970) | **修复 Heartbeat 调度器静默失败**[#85871](https://github.com/openclaw/openclaw/issues/85871) — 5.x 版本的回归修复 | 👀 待 maintainer 审 |
| [#88245](https://github.com/openclaw/openclaw/pull/88245) | **WhatsApp 入站消息上下文重构** — 将扁平的 `WebInboundMessage` 重构为五个显式上下文组（event、sender、message、context、content） | 👀 待 maintainer 审 |
| [#89442](https://github.com/openclaw/openclaw/pull/89442) | **修复 Codex cron 初始化挂起**[#84567](https://github.com/openclaw/openclaw/issues/84567) — 将 `initialize` 绑定到剩余启动截止时间而非完整外层超时 | 👀 待 maintainer 审 |

**项目整体向前推进情况：** 多个长期存在的 P1 Bug（heartbeat 静默失败、Codex cron 初始化挂起、图片脱敏）已有高质量 fix PR 等待合并，预计下一版本将有显著稳定性提升。

---

## 4. 社区热点

### 最活跃 Issues（按评论数排序）

| Issue | 评论数 | 核心诉求 |
|---|---|---|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 18 | 集中化文件名编码工具——飞书中文文件名编码修复后，用户要求统一处理 Shift-JIS、EUC-KR、GB18030 等多编码 |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | 17 👍4 | Control UI 要求设备身份（HTTPS 或 localhost 安全上下文），影响所有 VPS 远程部署场景 |
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | 15 👍3 | **P1** — OpenAI Responses transport 对 gpt-5.4/gpt-5.5 返回 `invalid_provider_content_type`，直接影响最新模型用户 |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | 14 👍1 | **P1** — Agent 回复错位（回复前一条而非当前消息），session context 混乱 |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | 15 👍2 | ClawHub Skill 生态建设——Skill 开发与发布的实际体验与官方承诺差距大 |

### 热点 PR

| PR | 说明 |
|---|---|
| [#91451](https://github.com/openclaw/openclaw/pull/91451) | MCP OAuth 重定向和 Unicode schema 修复，涉及兼容性风险和 auth-provider |
| [#88815](https://github.com/openclaw/openclaw/pull/88815) | **Channel Echo / Session Pinning** — 跨频道镜像会话，支持 Telegram → WebChat 等多表面转发 |

**分析：** 社区最焦虑的问题集中在三个方面：① **新模型兼容性**（OpenAI gpt-5.4/5.5 不可用）；② **安全部署门槛**（HTTPS 强制要求阻碍 VPS 用户）；③ **多渠道路由和 session 可靠性**（消息错位、上下文混乱）。这些问题是 OpenClaw 从 early adopter 走向大众用户的关键障碍。

---

## 5. Bug 与稳定性

### P1 级 Bug（高优先级）

| Issue | 描述 | 已有 Fix PR? |
|---|---|---|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI Responses transport 对 gpt-5.4/gpt-5.5 失败 (`invalid_provider_content_type`) | ❌ 无 |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent 回复前一条消息而非当前消息（session context confusion） | ❌ 无 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode 未在 mid-turn 注入消息 | ❌ 无 |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord 泄露内部 tool-call 痕迹（NO_REPLY, raw JSON）到频道 | ❌ 无 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 Agent 编排不稳定：并发 add/config 覆盖、session-lock 失败 | ❌ 无 |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | Feishu read image 工具结果在最终出站 payload 前丢失 | ❌ 无 |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | `clearUnboundScopes` 无条件剥离非本地 token-auth 客户端的 operator scopes | ❌ 无 |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | Cron sessions 在工具失败时输出幻觉内容而非干净失败 | ❌ 无 |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | 子代理完成后残留，主 session 无响应 | ❌ 无 |

### P2 级回归问题（已有 Fix PR）

| Issue | Fix PR | 状态 |
|---|---|---|
| [#85871](https://github.com/openclaw/openclaw/issues/85871) Heartbeat 调度器静默失败 | [#88970](https://github.com/openclaw/openclaw/pull/88970) | ✅ Ready |
| [#84567](https://github.com/openclaw/openclaw/issues/84567) Codex cron 初始化挂起 | [#89442](https://github.com/openclaw/openclaw/pull/89442) | ✅ Ready |
| [#88009](https://github.com/openclaw/openclaw/issues/88009) memory embedding 应按文件批次 | [#89138](https://github.com/openclaw/openclaw/pull/89138) | ⏳ 需更多证明 |
| [#73837](https://github.com/openclaw/openclaw/issues/73837) Node 包安装失败后继续执行 | [#91528](https://github.com/openclaw/openclaw/pull/91528) | ⏳ 需更多证明 |
| [#90760](https://github.com/openclaw/openclaw/issues/90760) transcript 图片被脱敏破坏 | [#91529](https://github.com/openclaw/openclaw/pull/91529) | ✅ Ready |

### 已关闭的稳定化修复

| Issue | 描述 |
|---|---|
| [#88929](https://github.com/openclaw/openclaw/issues/88929) | Feishu 流式卡片打字机效果异常 + 内容截断 |
| [#87326](https://github.com/openclaw/openclaw/issues/87326) | Telegram 流式中间文本丢失 |
| [#48300](https://github.com/openclaw/openclaw/issues/48300) | memory_search hybrid 模式不返回 FTS 匹配 |
| [#65156](https://github.com/openclaw/openclaw/issues/65156) | SQLite-vec ABI 不匹配导致向量搜索失效 |

---

## 6. 功能请求与路线图信号

| Issue | 描述 | 可能纳入版本? |
|---|---|---|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 集中化文件名编码工具（多编码 Content-Disposition） | 🔶 中 — 有社区需求但范围大 |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) 👍3 | Pre-reset agentic memory flush（/new 和 daily reset 前自动保存记忆） | 🟢 高 — 用户点赞多，逻辑复用已有 compaction 机制 |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) | SKILL.md frontmatter 支持 `model` 字段（per-skill 模型路由） | 🟢 高 — 架构有先例（agent-level model），扩展自然 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) 👍1 | 网关层 per-agent 成本预算强制执行 | 🔶 中 — 已有 session-cost-usage 基础，但涉及计费策略 |
| [#88815](https://github.com/openclaw/openclaw/pull/88815) | Channel Echo / Session Pinning（跨频道会话镜像） | 🟢 高 — PR 已到 Ready 状态 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) 👍2 | YAML 配置文件支持 | 🔶 中 — 社区需求明确但涉及配置系统重构 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) 👍5 | MathJax/LaTeX 支持（Control UI） | 🟢 高 — 点赞最多，渲染层改动可控 |
| [#45031](https://github.com/openclaw/openclaw/issues/45031) | Skill 安装内置安全扫描（AgentShield 集成） | 🔶 中 — Snyk 研究背书（36% skill 含安全缺陷） |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 Agent 编排稳定性整体改进 | 🔴 复杂 — 涉及并发控制、session-lock、子代理生命周期 |

**路线图判断：** 下一版本（2026.6.6 或 2026.7）大概率聚焦于：① 2026.6.5 beta 集锦中已修复的 MCP 类型和 QQBot 思维链问题的稳定化；② Channel Echo（已有 PR）；③ per-skill 模型和 memory flush（社区呼声高、架构可行）。

---

## 7. 用户反馈摘要

**真实痛点：**

- **"Session 上下文混乱"是最高频痛点** — 多个 Issue 报告 Agent 回复错位（[#32296](https://github.com/openclaw/openclaw/issues/32296)）、steer mode 不生效（[#48003](https://github.com/openclaw/openclaw/issues/48003)）、多 Agent 并发时配置被覆盖（[#43367](https://github.com/openclaw/openclaw/issues/43367)）。这表明 session 状态管理是 OpenClaw 当前最薄弱的基础设施。

- **子代理生命周期管理不受信任** — "子代理完成后残留"（[#47975](https://github.com/openclaw/openclaw/issues/47975)）、"子代理完成早于实际工作"（[#50165](https://github.com/openclaw/openclaw/issues/50165)）、"embedded-run 产生僵尸 agent"（[#48573](https://github.com/openclaw/openclaw/issues/48573)）。用户的实际工作流依赖子代理完成长时间任务，但当前状态不可靠。

- **安全部署门槛过高** — Control UI 强制要求 HTTPS（[#32473](https://github.com/openclaw/openclaw/issues/32473)），VPS 用户普遍受影响。Docker 沙箱跨实例容器名碰撞（[#51363](https://github.com/openclaw/openclaw/issues/51363)）进一步暴露了多租户部署的盲区。

**满意点：**

- QQBot 思维链泄露的快速修复（[#89913](https://github.com/openclaw/openclaw/pull/89913)）回应了社区报告的隐私问题："Steer mode does not inject messages mid-turn" 作者在同一线程中确认 MCP 工具结果 coerce 修复改善了其工作流。
- 多个 beta 版本的快速迭代节奏让用户感受到项目活跃度。

---

## 8. 待处理积压

以下 Issue/PR 长期未获实质性响应，建议维护者优先关注：

| Issue/PR | 创建日期 | 年龄 | 优先级风险 | 说明 |
|---|---|---|---|---|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | 2026-03-02 | 3个月+ | **P1 🔴** | Agent 回复错位，14 条评论、3 次更新，无维护者回应 |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | 2026-03-03 | 3个月+ | **P1 🔴** | HTTPS 强制要求，17 条评论、👍4，影响所有远程部署 |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | 2026-03-3 | 3个月+ | **P1 🔴** | Discord 泄露内部工具痕迹，安全风险 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 2026-03-11 | 3个月+ | **P1 🔴** | 多 Agent 编排系统性不稳定 |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | 2026-03-19 | 近3个月 | **P2 🟡** | ClawHub Skill 生态承诺与现实的差距 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 2026-03-17 | 近3个月 | **P2 🟡** | 集中化文件名编码，18 条评论但无维护者决策 |
| [#45698](https://github.com/openclaw/openclaw/issues/45698) | 2026-03-14 | 近3个月 | **P2 🟡** | Control UI 长时间运行后卡死 |
| [#85888](https://github.com/openclaw/openclaw/issues/85888) | 2026-05-24 | 2周+ | **P2 🟡** | Cron jobs 在 MiniMax 早高峰时段持续失败 |
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | 2026-06-04 | 5天 | **P1 🔴** | OpenAI gpt-5.4/5.5 不可用，新用户会在版本升级后直接遭遇 |

> **⚠️ 维护者行动建议：** 9 个积压 Issue 中 4 个为 P1 级安全/数据完整性问题，其中 3 个已超过 3 个月无任何维护者评论。建议在本周内至少对 [#90083](https://github.com/openclaw/openclaw/issues/90083)（OpenAI gpt-5.4/5.5 兼容性）和 [#32473](https://github.com/openclaw/openclaw/issues/32473)（HTTPS 要求）给出明确回复或 workaround，以降低社区挫败感。

---

*数据来源：GitHub openclaw/openclaw | 报告生成时间：2026-06-09*

---

## 横向生态对比

# 个人AI助手与自主智能体开源生态横向对比报告

**日期：2026-06-09 | 分析引擎：OWL**

---

## 1. 生态全景

当前个人AI助手/自主智能体开源生态处于**高密度竞争与快速分化期**。过去24小时内，仅本报告追踪的14个项目合计处理了**超250条Issue更新和300条PR更新**，表明社区贡献力量充沛。行业焦点从"能不能用"转向"好不好用、安不安全"——**安全加固**（NanoClaw出站网络锁定、CoPaw密钥隔离、ZeroClaw安全提供者接口）、**渠道生态扩张**（PicoClaw DeltaChat、NanoBot AssemblyAI转录、OpenClaw WhatsApp重构）和**上下文管理**（OpenClaw子代理生命周期、ZeroClaw trim_history修复、CoPaw auto-compaction）成为三大赛道。然而，多个核心项目积压了大量3个月以上的P1级Bug无响应，**维护者资源瓶颈**正在成为生态整体成熟度的最大制约因素。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃→关闭) | PR (待合并→合并/关闭) | 版本发布 | 健康度 |
|---|---|---|---|---|
| **OpenClaw** | 447 → 53 | 333 → 161 | v2026.6.5-β.3/β.5 | 🟡 高活跃/高积压 |
| **NanoBot** | 4 → 4 | 22 → 15 | 无 | 🟢 良好 |
| **Hermes Agent** | 46 → 4 | 45 → 5 | 无 | 🟠 高积压 |
| **PicoClaw** | 2 → 1 | 9 → 9 | nightly | 🟢 稳健 |
| **NanoClaw** | 1 → 0 | 1 → 2 | 无 | 🟢 安全攻坚期 |
| **IronClaw** | 19 → 14 | 26 → 24 | 无 | 🟢 修复响应快 |
| **LobsterAI** | 0 → 0 | 1 → 18 | 无 | 🟢 集中冲刺 |
| **CoPaw** | 26 → 23 | 22 → 23 | 无 | 🟡 大批量清理 |
| **ZeroClaw** | 49 → 1 | 39 → 11 | 无 | 🔴 严重积压 |
| **TinyClaw** | 0 | 1 | 无 | 🟡 低活跃 |
| **NullClaw** | 0 | 0 | 无 | ⚪ 无活动 |
| **Moltis** | 0 | 0 | 无 | ⚪ 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 |

> **关键发现**：OpenClaw的PR积压量（333条待合并）远超其他所有项目之和，ZeroClaw和Hermes Agent也面临严重的reviewer资源瓶颈。TinyClaw、NullClaw、Moltis、ZeptoClaw处于沉寂状态，需关注是否已实质停止维护。

---

## 3. OpenClaw 在生态中的定位

**社区规模与活跃度**：OpenClaw今日Issue更新量（500条）和PR更新量（494条）均位列全生态第一，分别约为第二名CoPaw的**10倍**和ZeroClaw的**10倍**，确立了生态核心参照地位。其beta版本发布节奏（同日双beta）亦是生态最密集。

**核心优势**：
- **渠道覆盖面最广**：生态中唯一同时深度维护QQBot、Telegram、WhatsApp、Discord、Feishu、微信等多渠道的项目，且每个渠道都有活跃的重构和修复PR
- **安全闭环能力**：今日合并的QQBot思维链脱敏（#89913/#90132）、MCP类型强制转换，以及待合并的图片脱敏修复（#91529），构成全链路安全加固
- **生态基础设施**：ClawHub Skill生态虽面临体验差距批评（Issue #50090），但其Skill市场上的安全扫描需求（AgentShield集成/#45031）在所有项目中独树一帜

**技术路线差异**：与Hermes Agent（Nous Research出品，聚焦模型层和工具链标准化）和IronClaw（NEAR生态，Reborn架构迁移）相比，OpenClaw更强调**"Gateway + 多渠道 + 沙箱化"**的个人助手定位；与NanoBot（轻量模块化）和PicoClaw（边缘计算导向）相比，OpenClaw的架构复杂度明显更高，功能覆盖面也更广。

**短板**：9个长期积压P1 Bug（最长的session context混乱已3个月无维护者回应）、32.6%的PR合并率，暴露出维护者治理压力大、Issue响应机制不足的风险。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **① 安全加固** | OpenClaw, NanoClaw, CoPaw, ZeroClaw | OpenClaw MCP类型强制转换 + QQBot思维链脱敏；NanoClaw出站网络锁定 + webhook SSRF修复 + 随机数预测修复；CoPaw keychain主密钥隔离 + MCP子进程累积修复；ZeroClaw安全提供者接口RFC + OIDC认证 + Shell命令三档确认策略 |
| **② 多渠道消息可靠性** | OpenClaw, NanoBot, PicoClaw, ZeroClaw, CoPaw | OpenClaw session上下文混乱 + 消息错位 + WhatsApp入站重构；NanoBot Telegram代码块截断 + 微信静默死循环；PicoClaw Telegram定位消息 + Windows QQ鉴权失败；ZeroClaw WhatsApp LID联系人丢消息 + Telegram Markdown分割；CoPaw 微信iLink定时任务推送失败 |
| **③ 上下文管理** | OpenClaw, ZeroClaw, CoPaw, NanoBot | OpenClaw steer mode mid-turn注入 + 子代理生命周期；ZeroClaw trim_history清空对话 + context_compression丢工具调用；CoPaw auto-compaction无限压缩 + 图片无限压缩循环 + 会话温启动污染；NanoBot ContextGovernor提取 + Dream关闭后游标不前进 + micro-compaction网关分离 |
| **④ 模型兼容与多模型编排** | OpenClaw, NanoBot, IronClaw, CoPaw | OpenClaw OpenAI gpt-5.4/5.5 invalid_provider_content_type；NanoBot per-conversation模型切换 + Azure网关兼容；IronClaw Codex ChatGPT client_version硬编码隐藏新模型 + DeepSeek请求体400错误；CoPaw MCP工具名含"."时gpt-5.5校验失败 + KimiCode thinking内容不显示 |
| **⑤ 子Agent/编排稳定性** | OpenClaw, CoPaw, ZeroClaw | OpenClaw 子代理残留 + Heartbeat静默失败 + Codex cron初始化挂起；CoPaw 双生子Agent并发无限轮询 + Agent注册失败；ZeroClaw cron调度器重复触发 + 飞书仅调LLM不调Agent |
| **⑥ 数据可移植性** | LobsterAI, NanoClaw | LobsterAI用户数据备份/恢复/迁移服务 + 原子化恢复策略；NanoClaw WhatsApp入站媒体路径不可达 |

> **洞察**：安全、渠道可靠性、上下文管理这三个方向在所有项目中高度重叠，说明它们是AI Agent从MVP走向生产就绪的**通用瓶颈**，而非单一项目的特殊问题。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 | 竞争壁垒 |
|---|---|---|---|---|
| **OpenClaw** | 通用个人AI助手网关 | 跨渠道个人用户/小型团队 | 多渠道路由 + 沙箱隔离 + Skill市场 | 渠道覆盖面 + 社区规模 |
| **NanoBot** | 轻量模块化Agent框架 | 开发者/技术用户 | 模块化转录 + ContextGovernor解耦 + 跨Agent消息总线(开发中) | 架构整洁度 + 多后端扩展速度 |
| **Hermes Agent** | 研究级Agent平台(OSI测试SOTA) | 研究者/高级用户 | cron独立守护进程 + 插件系统 + OAuth PKCE | Nous Research品牌 + 模型层深度集成 |
| **PicoClaw** | 嵌入式/边缘AI助手 | IoT/边缘设备用户 | Go高性能实现 + 多IM渠道 + nightly构建 | Sipeed硬件生态 + RISC-V/嵌入式支持 |
| **NanoClaw** | 安全优先容器化Agent | 企业/安全敏感用户 | Docker沙箱 + 出站网络锁定 + crypto安全 | Agent容器隔离 + 安全加固深度 |
| **IronClaw(NEAR)** | V2架构迁移中(NEAR生态) | NEAR社区/链上Agent用户 | Reborn架构 + OpenAI兼容API重路由 + ProductWorkflow | NEAR区块链生态集成 |
| **CoPaw(Qwen)** | Qwen品牌全渠道桌面Agent | 国内普通用户/企业 | 本地化控制台 + AgentScope框架 + Plugin市场(建设中) | 阿里系模型生态 + 国产本地化 |
| **LobsterAI(网易有)** | 桌面端一体化AI助手 | 国内桌面用户 | Electron桌面端 + OpenClaw网关集成 + IM渠道插件 | 大厂工程资源 + 桌面体验优化 |
| **ZeroClaw** | Rust驱动的安全Agent框架 | Rust生态/安全敏感用户 | Rust实现 + 插件系统 + 安全执行层 | 内存安全 + 性能 + 安全架构 |
| **TinyClaw** | 小型AGI实验框架 | 初学者/教育用途 | SQLite原生 + 极简安装 | 低门槛（但社区已沉寂） |

---

## 6. 社区热度与成熟度分层

**🔥 第一梯队：高强度迭代期**

| 项目 | 特征 |
|---|---|
| **OpenClaw** | 日千人级贡献，超高活跃但积压严重，处于从"early adopter"向"稳定可用"的转型阵痛期 |
| **ZeroClaw** | RFC密集期（计算机-use、安全接口、Shell确认层等架构决策集中），但reviewer资源严重不足导致PR/Issue大量积压 |
| **Hermes Agent** | v0.16.0消化阶段，今日合并5个bugfix，但45个待合并PR构成明显瓶颈 |

**⚡ 第二梯队：质量巩固期**

| 项目 | 特征 |
|---|---|
| **IronClaw** | Reborn架构迁移加速，3个高优先级Bug当日报告当日修复，合并率优秀（24/50），升级回归是主要风险点 |
| **CoPaw** | 大批量Issue/PR清理日（各23条关闭），AgentScope 2.0迁移启动，auto-compaction修复合入是重要里程碑 |
| **NanoClaw** | 安全加固密集期（3个安全PR同日推进），架构清晰度提升但社区规模小 |
| **LobsterAI** | 集中冲刺日（18/19 PR合并），桌面端登录体验和数据迁移两大主线明确，Electron大版本依赖升级积压是隐患 |

**🟢 第三梯队：稳健维护期**

| 项目 | 特征 |
|---|---|
| **NanoBot** | 每日稳定产出，转录五后端格局成型，ContextGovernor等架构重构稳步推进 |
| **PicoClaw** | 工程质量加固（类型断言安全系列6个PR），Telegram定位支持等功能增量稳步交付 |

**🔇 第四梯队：低活跃/沉寂**

| 项目 | 特征 |
|---|---|
| **TinyClaw** | 仅1个安装体验PR，无社区互动，项目活力存疑 |
| **NullClaw / Moltis / ZeptoClaw** | 过去24小时零活动 |

---

## 7. 值得关注的趋势信号

### 信号①：安全从"可选插件"变为"基础设施刚需"

**证据**：单日内5个项目（OpenClaw、NanoClaw、CoPaw、ZeroClaw、NanoBot）均推进安全相关变更。NanoClaw将出站网络锁定作为一等公民功能落地；ZeroClaw将安全执行层暴露为可插拔接口；CoPaw修复密钥隔离和SSRF漏洞。

**对开发者的意义**：AI Agent的安全不再是事后补救项，而是架构设计的基础约束。容器隔离、密钥管理、SSRF防护、token脱敏将成为Agent框架的标配安全原语。

### 信号②：渠道碎片化成为用户体验的最大制约

**证据**：本报告追踪的10个活跃项目中，**9个**存在渠道相关Bug。从微信（OpenClaw/NanoBot/CoPaw）、Telegram（OpenClaw/NanoBot/ZeroClaw/IronClaw）、WhatsApp（OpenClaw/ZeroClaw/NanoClaw）、QQ（OpenClaw/PicoClaw/LobsterAI）、Discord、Feishu到LINE、Matrix——每个渠道的消息格式、认证机制、文件处理都有独特之处。

**对开发者的意义**："写一次，跑所有渠道"仍是未解决的行业难题。任何新进入者如果能在渠道抽象层实现突破（如NanoBot将转录能力从channel-local提取为shared capability的思路），将获得显著差异化优势。

### 信号③：Agent编排可靠性是下一阶段的核心竞争战场

**证据**：OpenClaw子代理残留/Heartbeat失败/Codex cron挂起、CoPaw双生子Agent无限轮询/会话温启动污染、ZeroClaw cron重复触发/Agent注册失败——这三个处于第一梯队的核心项目一致将Agent编排稳定性列为顶层优先级。

**对开发者的意义**：当单Agent能力趋于稳定，多Agent协作（任务分发、结果聚合、状态同步）的可靠性将成为用户选择框架时的决定性因素。子Agent生命周期管理、分布式锁、故障隔离是关键技术挑战。

### 信号④：上下文管理正在从"简单滑动窗口"走向"自适应治理"

**证据**：ZeroClaw context_compression丢工具调用、CoPaw auto-compaction无限压缩/图片无限压缩循环、NanoBot按上下文压力触发micro-compaction网关分离、OpenClaw steer mode mid-turn注入——这些问题的共性是：固定策略已不足够，需要感知实际上下文压力的自适应机制。

**对开发者的意义**：ContextGovernor类型的设计（从AgentRunner中独立出来）代表了上下文管理的架构演进方向：**将上下文治理抽象为独立层，由策略驱动而非硬编码**。

### 信号⑤：桌面端与本地化需求在中国市场独占性强

**证据**：CoPaw和LobsterAI（两个国内项目）的修复方向高度集中于本地化体验——QQ Bot白名单UI、桌面登录回调优化、会话颜色标注、测试连接错误信息国际化。CoPaw的Issue #5017明确获得"国内用起来特别舒服——本地化做得很到位"这一稀缺正面评价。

**对开发者的意义**：中国市场对AI Agent的需求轨迹与海外市场明显分化——QQ/微信/飞书/钉钉的全渠道覆盖、本地化安装体验、IM通知集成是中国开发者必须面对的差异化赛道，但这也是国际项目最薄弱的环节。

### 信号⑥：维护者治理能力成为项目健康度的最大瓶颈

**证据**：OpenClaw 333个待合并PR、ZeroClaw 39个待合并PR且7个持续P1 Bug无进展、Hermes Agent 3个P1 Issue超过3个月无维护者回应。相比之下，IonClaw和NanoBot的低积压量显著提升了Bug修复速度。

**对开发者的意义**：技术架构的先进性不等于社区治理的有效性。**项目规模超过一定阈值后，PR合并队列管理和Issue响应机制的建设比功能开发更为关键。** 对于评估采用哪个框架的开发者，"积压Issue的响应速度"是比"Star数"更可靠的长期健康度指标。

---

**报告总结**：个人AI助手开源生态正处于从"百花齐放"走向"大浪淘沙"的分水岭。安全与可靠性正在取代功能丰富度成为核心差异化维度，渠道碎片化和上下文管理是行业级未解难题。对于技术决策者，建议关注项目的**维护健康度**（PR合并率、Issue响应时间）而非仅看功能列表；对于开发者，上下文治理层、安全基础设施和渠道抽象层是下一步技术突破的关键方向。

---

*数据截止时间：2026-06-09 | 覆盖项目：14个 | OWL 生态分析引擎*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 · 2026-06-09

> 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) ｜统计周期：过去 24 小时

---

## 1. 今日速览

NanoBot 今日处于**高活跃维护期**，Issues 更新 8 条（新开 4 条、关闭 4 条），PR 更新高达 **37 条**（待合并 22 条、已合并/关闭 15 条），展现出强大的社区贡献吞吐能力。无新版本发布。

项目当前的核心推进方向集中在四个领域：**语音转录（Transcription）多后端扩展**、**安全加固（会话/工具/SSRF）**、**上下文工程管理** 以及 **模块化质量提升**。同时，一条长期关注的微信频道静默死链 Bug 有了修复 PR，版本显示需求也在迅速向前推进。整体来看，这是一个处于快速迭代期的健康开源项目——新功能与安全修复并行，模块边界逐渐清晰（ContextGovernor 提取、MemoryStore 加固、Transcription 独立化已进入尾声）。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| # | PR 标题 | 链接 | 意义 |
|---|---------|------|------|
| #4217 | feat(providers): add `extra_query` config for OpenAI-compatible providers | [PR #4217](https://github.com/HKUDS/nanobot/pull/4217) | Azure 风格网关兼容性问题得到解决 |
| #4224 | feat(transcription): add AssemblyAI provider | [PR #4224](https://github.com/HKUDS/nanobot/pull/4224) | 转录后端再增一员 |
| #4175 | feat(transcription): add Xiaomi MiMo ASR | [PR #4175](https://github.com/HKUDS/nanobot/pull/4175) | 中文语音识别能力增强 |
| #4113 | feat(transcription): configurable STT + OpenRouter transcription | [PR #4113](https://github.com/HKUDS/nanobot/pull/4113) | OpenRouter 同时覆盖 LLM 与 STT 的用例通道打通 |
| #4232 | feat(transcription): add shared voice input support | [PR #4232](https://github.com/HKUDS/nanobot/pull/4232) | 转录能力从 channel 专属变为 nanobot 共享能力 |
| #4219 | fix(session): drop orphan tool results before trimming history | [PR #4219](https://github.com/HKUDS/nanobot/pull/4219) | 历史修剪逻辑健壮性提升 |
| #4221 | fix(exec): block relative symlink workspace escapes | [PR #4221](https://github.com/HKUDS/nanobot/pull/4221) | 安全 — 防止通过相对路径符号链接逃逸工作目录 |
| #4235 | feat(webui): show nanobot version in Settings Overview | [PR #4235](https://github.com/HKUDS/nanobot/pull/4235) | 用户可见的版本信息上线 |
| #4074* | Security: MCP HTTP/SSE SSRF loopback issue | [Issue #4074](https://github.com/HKUDS/nanobot/issues/4074) | 安全 Issue 关闭（需关注是否为已合并修复） |

> **总体评估**：转录体系已初步形成 **Groq / OpenAI Whisper / Xiaomi MiMo / AssemblyAI / OpenRouter** 五后端格局，架构上完成了从 channel-local 到 shared capability 的重构。安全方向连续落地 symlink 逃逸和 SSRF 两个修复。上下文管理方面历史修剪、cursor 单调性、micro-compaction 网关分离等 PR 均已在推进中——这是为上下文窗口压力下的稳定运行做系统性铺垫的信号。

---

## 4. 社区热点

### 🔥 Issue #4250 — Telegram 代码块拆分渲染破损

- **链接**: [Issue #4250](https://github.com/HKUDS/nanobot/issues/4250)
- **摘要**: `split_message` 在字符边界硬切长消息时，可能将 fenced code block（` ``` `）从中截断，导致 Telegram 两端消息各自携带半个代码块，渲染出破碎的 HTML。
- **状态**: 已有对应修复 PR [#4257](https://github.com/HKUDS/nanobot/pull/4257)（`split_message` fenced-code-block-aware），同一天提交，响应极快。
- **分析**: 高频使用 Telegram 频道且回复较长模型输出的用户会直接受到影响，属于体验型 Bug 但触发面较广。

### 🔥 Issue #4242 — `dream.enabled=false` 后历史游标永不前进

- **链接**: [Issue #4242](https://github.com/HKUDS/nanobot/issues/4242)
- **摘要**: 关闭 Dream 功能后，游标未被推进，导致"Recent History"部分内容被反复注入系统 prompt——逻辑上应为空却实际膨胀。
- **状态**: 暂无对应 PR，标注为 [OPEN]。
- **分析**: 影响所有关闭 Dream 功能的用户，系统 prompt 膨胀可能导致非预期行为甚至 token 消耗增加，属于**中等 Bug**。

### 🔥 Issue #4251 — 输入框文件/图片上传支持

- **链接**: [Issue #4251](https://github.com/HKUDS/nanobot/issues/4251)（已关闭）
- **摘要**: 用户希望在 WebUI 输入框中上传图片或 PDF，让 NanoBot 解析图片内容或总结书籍。
- **状态**: Issue 已关闭，未提供详细结论，推测可能被归入更大的多模态支持路线图中。
- **分析**: 多媒体理解是用户的普遍期待，目前 NanoBot 的 transcription 体系正快速铺开，未来图片理解（vision model 集成）可能以此为起点。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 描述 | Issue / PR | 状态 |
|--------|------|------------|------|
| 🔴 **中** | MCP HTTP/SSE 配置在 SSRF 拦截前尝试回环连接，安全一致性不足 | [#4074](https://github.com/HKUDS/nanobot/issues/4074) | 已关闭（需确认是否已合并修复） |
| 🔴 **中** | `dream.enabled=false` 导致游标不前进，Recent History 污染系统 prompt | [#4242](https://github.com/HKUDS/nanobot/issues/4242) | OPEN — 暂无 PR |
| 🟡 **中** | Telegram `split_message` 截断 fenced code block 导致渲染碎裂 | [#4250](https://github.com/HKUDS/nanobot/issues/4250) | Fix PR [#4257](https://github.com/HKUDS/nanobot/pull/4257) OPEN |
| 🟡 **低** | 微信频道 session 过期后进入永久静默死循环（60 分钟暂停后不重新加载 state） | [#4223](https://github.com/HKUDS/nanobot/pull/4223) | Fix PR [#4223](https://github.com/HKUDS/nanobot/pull/4223) OPEN |
| 🟢 **低** | `MemoryStore` cursor 在不同步/压缩后可能回退或变负 | [#4256](https://github.com/HKUDS/nanobot/pull/4256) | Fix PR [#4256](https://github.com/HKUDS/nanobot/pull/4256) OPEN |
| 🟢 **低** | Session 历史修剪中 orphan tool result 导致边界异常 | [#4219](https://github.com/HKUDS/nanobot/pull/4219) | ✅ **已合并** |

---

## 6. 功能请求与路线图信号

| 需求/信号 | 来源 | 解读 |
|-----------|------|------|
| **per-conversation 模型切换** | [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) | 用户希望在同一 agent 中按隐私敏感度在不同模型间切换（如 OpenRouter ↔ 本地 llamacpp）。这是一个较重的架构需求，涉及 session 级别 provider 逻辑覆写，短期内落地的可能性有限，但属于常被提及的"多模型编排"方向。 |
| **WebUI 版本显示** | [Issue #4233](https://github.com/HKUDS/nanobot/issues/4233) / [PR #4235](https://github.com/HPKDS/nanobot/pull/4235) | ✅ **已合并**。同时 #4255 已在推进**带 PyPI 版本实时检查的 version badge**，预计短期内会跟进上线。 |
| **RTT/多 Agent 实例通信** | [PR #3992](https://github.com/HKUDS/nanobot/pull/3992) | 跨实例消息总线已进入实现阶段，这是一个潜在的**重大架构演进**。若能稳定落地，将从根本上扩展 NanoBot 的能力边界。 |
| **WebUI 文件上传（图片/PDF）** | [Issue #4251](https://github.com/HKUDS/nanobot/issues/4251) | 当前 Issue 已关闭但无详细结论，可能归入多模态长期规划。 |
| **ContextGovernor 提取** | [PR #4238](https://github.com/HKUDS/nanobot/pull/4238) | 从 AgentRunner 抽离上下文治理逻辑，按实际上下文压力（而非固定 tool result 计数）触发 micro-compaction。这是一个**重要的模块重构信号**，为未来的自适应上下文管理铺路。 |

---

## 7. 用户反馈摘要

- **真实痛点 1 — 网关兼容性**: Azure 风格网关需要 `?api-version=` 参数才能正常工作，此前无法配置导致 404。用户（mraad）直接提供了 patch，Axel Ray-dev 跟进 PR 实现。—— **需求已落地**（[#4217](https://github.com/HKUDS/nanobot/pull/4217) 已合并）。
- **真实痛点 2 — 模型切换不便**: 用户 rombert 使用多模型工作流（云端 fast + 本地 private），每次切换都需要改全局配置，缺乏 per-conversation 粒度的灵活性。—— 反映了 Multi-Model Orchestration 的迫切需求。
- **真实痛点 3 — WebUI 版本不可见**: 多位用户认为 `/status` CLI 不够方便，希望在 UI 上直接看到版本号及更新通知。—— ✅ **已满足**；且用户 Jiajun Bernoulli 主动贡献了版本检查功能。
- **真实痛点 4 — Telegram 代码块碎裂**: 长代码回复在 Telegram 中渲染损坏，高频开发者频道用户体验显著下降。—— Fix PR 已提交，预计很快合并。
- **真实痛点 5 — 微信频道静默死循环**: Session token 过期后进入无限静默，必须手动重新扫码才能恢复。—— 这是一个已存在较久的稳定性隐患，当前 fix PR 已就绪。

---

## 8. 待处理积压提醒

以下 Issue/PR 已存在一段时间且尚未合并/关闭，建议维护者关注：

| # | 标题 | 创建时间 | 状态 | 备注 |
|---|------|----------|------|------|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | feat(agent-collab): enable cross agent messaging | 2026-05-24 | OPEN | 已存在 16 天，功能重大但 review 量可能较大 |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | fix(tools): keep read-only roots out of write paths | 2026-05-29 | OPEN（11 天） | 安全相关，建议优先 review |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | fix(exec): block relative symlink workspace escapes | 2026-05-31 | OPEN（9 天） | 与 #4221（已合并）功能高度重叠，需确认是否为早期版本或独立场景 |
| [#4193](https://github.com/HKUDS/nanobot/pull/4193) | test: add memory lifecycle harness | 2026-06-04 | OPEN（5 天） | 基础设施测试，长期有益但非紧急 |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) | fix(weixin): reload session state after pause expiry | 2026-06-06 | OPEN（3 天） | 微信频道静默死循环修复，合并后可显著改善微信用户体验 |
| [#4242](https://github.com/HKUDS/nanobot/issues/4242) | dream.enabled=false 游标不前进 | 2026-06-08 | OPEN | 无任何 PR，中等 Bug，建议尽快确认修复方案 |

---

*日报由 OWL 自动生成 · 2026-06-09*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-09

---

## 1. 今日速览

Hermes Agent 今日处于**高活跃维护状态**，Issues 更新 50 条（新开/活跃 46 条、关闭 4 条），PR 更新 50 条（待合并 45 条、已合并/关闭 5 条），无新版本发布。项目处于 **v0.16.0 的密集修复迭代窗口**，今日合并的 5 个 PR 均聚焦 bugfix，反映维护者正在消化上个版本引入的多个回归问题。待合并队列高达 45 个 PR，积压压力显著，但多个关键 PR 提供了一线修复的合并路径。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为 v0.16.0（2026.6.5），多个修复 PR 预示着 v0.16.1 补丁版正在酝酿中。

---

## 3. 项目进展

今日合并/关闭的 **5 个 PR** 推进了以下核心修复：

| PR | 类型 | 说明 |
|---|---|---|
| **[#42469](https://github.com/nousresearch/hermes-agent/pull/42469)** | fix(agent) | `delegate_task` 子代理通过 deepcopy 隔离插件上下文引擎单例，防止父代理 context_length 被覆盖（修复 **[#42449](https://github.com/nousresearch/hermes-agent/issues/42449)**，P1） |
| **[#42461](https://github.com/nousresearch/hermes-agent/pull/42461)** | fix(agent) | 同上问题的另一独立修复方案，同样已合并 |
| **[#42464](https://github.com/nousresearch/hermes-agent/pull/42464)** | fix(gateway) | 移除 launchd plist 中的 `LimitLoadToSessionType` 键，修复 macOS 26+ 上 `launchctl bootstrap` 失败问题（修复 **[#42376](https://github.com/nousresearch/hermes-agent/issues/42376)**，P2） |
| **[#41372](https://github.com/nousresearch/hermes-agent/pull/41372)** / **[#40882](https://github.com/nousresearch/hermes-agent/pull/40882)** | fix(model) | 防止 `hermes model` 向导在添加新 provider 时覆盖 `model.base_url`，破坏原有默认模型配置（修复 **#40862**） |
| **[#42308](https://github.com/nousresearch/hermes-agent/pull/42308)** | fix(gateway) | 修复 Telegram 工具进度消息的 MarkdownV2 编辑回退，并修复 **[#41955](https://github.com/nousresearch/hermes-agent/issues/41955)** 和 **[#41732](https://github.com/nousresearch/hermes-agent/issues/41732)** 中终端命令/代码块泄露到聊天的问题 |
| **[#41363](https://github.com/nousresearch/hermes-agent/pull/41363)** / **[#41167](https://github.com/nousresearch/hermes-agent/pull/41167)** | feat(cron) | 新增 `hermes cron daemon` 独立守护进程模式，解决在无 gateway 运行的环境（Windows 无服务安装、无头服务器）中 cron 无法触发的问题 |

> **整体进展评估：** 项目正在集中偿还 v0.16.0 的技术债务。今日合并的修复覆盖了 **macOS 网关部署**、**Telegram 终端信息泄露**、**模型配置向导破坏性覆盖**、**cron 独立运行** 4 个维度，每一条都是社区痛点的直接回应。待合并队列中还有 Photon iMessage 出站修复 ([#42462](https://github.com/nousresearch/hermes-agent/pull/42462))、clarify 工具崩溃修复 ([#42458](https://github.com/nousresearch/hermes-agent/pull/42458))、Feishu 卡片序列化修复 ([#42465](https://github.com/nousresearch/hermes-agent/pull/42465)) 等高优先级 PR 正在等待合并。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

1. **[#27997](https://github.com/nousresearch/hermes-agent/issues/27997) — 声明式 Skill 统一保护策略（7 条评论，P3）**
   - 提出者：zccyman
   - **诉求：** Skill 保护规则分散在 6+ 文件中，执行不一致，且 `skill_manager_tool.py` 存在高危漏洞。需要集中化的声明式策略，确保所有 skill 操作遵循统一安全规则。这是社区对安全架构长期碎片化的集中抗议。

2. **[#34457](https://github.com/nousresearch/hermes-agent/issues/34457) — s6-log 锁碰撞无限循环（6 条评论，👍3，P2）**
   - 提出者：CMOS3
   - **诉求：** 多容器 gateway + dashboard 共享卷配置下，s6-log 因文件锁发生亚秒级崩溃循环。👍3 表明不止一个用户遭遇，属于 Docker 部署常见场景下的稳定性杀手。

3. **[#30399](https://github.com/nousresearch/hermes-agent/issues/30399) — Docker 镜像中 Matrix Gateway 无法使用（6 条评论，👍3，P2）**
   - 提出者：qdii
   - **诉求：** Matrix gateway 依赖 `mautrix[encryption]` 包未内置于 Docker 镜像，且只读文件系统中无法后装。Docker 化部署用户的长期痛点，👍3 说明有实际使用需求。

### 💥 今日爆发式增长的安全 Issue

4. **[#41955](https://github.com/nousresearch/hermes-agent/issues/41955) — Gateway 工具进度泄露 Shell 命令到聊天（已合并 PR 修复，👍2）** + **[#41732](https://github.com/nousresearch/hermes-agent/issues/41732) — Discord 紧凑工具进度泄露终端命令为代码块（已合并 PR 修复，👍1）**

   这两条 P2 Bug 是今日安全/隐私维度的重中之重。根因是 #41215 将终端工具调用渲染为原生 bash 代码块后，`非 verbose` 模式下也向 WhatsApp、Telegram、Slack 等聊天平台泄露完整 shell 命令。PR [#42308](https://github.com/nousresearch/hermes-agent/pull/42308) 已合并修复。

---

## 5. Bug 与稳定性

按严重程度排序的今日 Top Bug 报告：

### 🔴 P1 — 严重

| Issue | 描述 | Fix PR |
|---|---|---|
| **[#42449](https://github.com/nousresearch/hermes-agent/issues/42449)** | `delegate_task` 子代理通过共享单例覆盖父代理 context_length，导致上下文损坏 | ✅ **已合并** — PR [#42469](https://github.com/nousresearch/hermes-agent/pull/42469)、[#42461](https://github.com/nousresearch/hermes-agent/pull/42461) |

### 🟠 P2 — 重要

| Issue | 描述 | Fix PR |
|---|---|---|
| **[#34457](https://github.com/nousresearch/hermes-agent/issues/34457)** | 多容器 gateway + dashboard 共享卷下 s6-log 锁碰撞无限循环 | ⏳ 待修复 |
| **[#30399](https://github.com/nousresearch/hermes-agent/issues/30399)** | Docker 镜像缺失 mautrix[encryption]，Matrix gateway 无法运行 | ⏳ 待修复 |
| **[#42376](https://github.com/nousresearch/hermes-agent/issues/42376)** | macOS 26+ 上 gateway 生成的 plist 导致 launchctl bootstrap 失败 | ✅ **已合并** — PR [#42464](https://github.com/nousresearch/hermes-agent/pull/42464) |
| **[#36845](https://github.com/noussearch/hermes-agent/issues/36845)** | Cron 脚本超时被 LLM fallback 掩盖为 last_status=ok | ⏳ 待修复 |
| **[#42306](https://github.com/nousresearch/hermes-agent/issues/42306)** | Langfuse 插件 GENERATION spans 缺失 usage/token 计数（已关闭） | — |
| **[#42405](https://github.com/nousresearch/hermes-agent/issues/42405)** | Memory 容量满时 `replace` 零匹配重试循环导致静默挂起 | ⏳ 待修复 |

### 🟡 P3 — 一般

| Issue | 描述 | Fix PR |
|---|---|---|
| **[#41898](https://github.com/nousresearch/hermes-agent/issues/41898)** | NVIDIA NIM provider 响应闪现后消失 | ⏳ 待调查 |
| **[#42270](https://github.com/nousresearch/hermes-agent/issues/42270)** | TUI `/model` picker 硬限制 50 条模型 | ⏳ 待修复 |
| **[#42409](https://github.com/nousresearch/hermes-agent/issues/42409)** | Desktop Artifacts 时间戳全部显示 1970 年（秒级epoch传入了毫秒Date构造函数） | ⏳ 待修复 |
| **[#42401](https://github.com/nousresearch/hermes-agent/issues/42401)** | Desktop 切换页面时未发送的 prompt 被丢弃 | ⏳ 待修复 |
| **[#42362](https://github.com/nousresearch/hermes-agent/issues/42362)** | Discord 无 allowlist 时 slash commands 确认按钮死循环 | ⏳ 待修复 |
| **[#42267](https://github.com/nousresearch/hermes-agent/issues/42267)** | Gateway 停止/重启通知绕过 i18n 系统，硬编码英语 | ⏳ 待修复 |

---

## 6. 功能请求与路线图信号

### 高可能性纳入下一版本的功能

| 需求 | 对应 PR | 信号强度 |
|---|---|---|
| **Cron 独立守护进程模式** | PR [#41363](https://github.com/nousresearch/hermes-agent/pull/41363) / [#41167](https://github.com/nousresearch/hermes-agent/pull/41363) **已合并** | ✅ 已落地 |
| **API Server 会话隔离**（Runs/Sessions 按 session key 作用域化） | PR [#42459](https://github.com/nousresearch/hermes-agent/pull/42459)、[#42460](https://github.com/nousresearch/hermes-agent/pull/42460) 待合并 | 🔵 高 — 多 PR 并行推进 |
| **Per-entry reasoning_effort in fallback_model chain** | PR [#42447](https://github.com/nousresearch/hermes-agent/pull/42447) 待合并 | 🔵 高 — 有完整实现 |
| **Plugin 会话上下文传播** | PR [#42416](https://github.com/nousresearch/hermes-agent/pull/42416) 待合并 | 🔵 高 — 有完整实现 |
| **Desktop 多 Profile 会话侧边栏** | Issue [#38357](https://github.com/nousresearch/hermes-agent/issues/38357) | 🟡 中 — 有需求但无 PR |
| **Microsoft Teams Gateway 支持** | Issue [#9512](https://github.com/nousresearch/hermes-agent/issues/9512) | 🟡 中 — 长期需求，6 条评论 |
| **Microsoft 365 Calendar + To Do Skill** | Issue [#25979](https://github.com/nousresearch/hermes-agent/issues/25979) | 🟡 中 — 作者表示已有生产可用实现，愿意贡献 |
| **Gateway 附件持久化** | Issue [#41979](https://github.com/nousresearch/hermes-agent/issues/41979) | 🟡 中 — 15+ 平台接收文件后静默丢弃 |
| **自定义本地模型 provider 默认采样参数** | Issue [#41988](https://github.com/nousresearch/hermes-agent/issues/41988) | 🟡 中 — 影响 vLLM/llama.cpp/mlx-vlm 用户 |

---

## 7. 用户反馈摘要

### 😤 痛点

- **Docker 部署体验差：** 多个 Issue 反映 Docker 镜像不完整（缺 mautrix）、多容器共享卷有锁冲突、只读文件系统限制后装依赖。Docker 用户群体在增长，但官方镜像的维护节奏跟不上。
- **Desktop App 交互 Bug 集中爆发：** 今日至少 5 个 Desktop 相关 Bug（prompt 丢弃、时间戳 1970、Artifacts 渲染、Cron 视图空白、Excel 粘贴制表符），表明 Desktop 客户端在 v0.16.0 引入了较多回归。
- **安全/隐私泄露：** 终端命令和代码块被意外推送到聊天平台（WhatsApp、Telegram、Slack），👍2 的社区反应说明这触到了用户的安全红线。
- **macOS 部署门槛高：** launchd plist 配置问题导致 gateway 无法在 macOS 26+ 上通过 `launchctl` 启动，M1 Ultra 用户也受影响。

### 😊 满意信号

- **delegate_task 上下文隔离修复响应迅速：** P1 Bug 报告后数小时内即有 2 个独立 PR 合并，维护者响应速度值得肯定。
- **cron daemon 模式：** 长期被诟病的 cron 依赖 gateway 运行的问题终于得到解决，Windows 和无头服务器用户受益。
- **Telegram 终端泄露修复：** 👍2 的安全 Issue 当日即有 PR 合并，社区对维护者的安全响应效率表示认可。

### 📋 典型使用场景

- **多 Profile 编排用户**（[#38357](https://github.com/nousresearch/hermes-agent/issues/38357)）：使用 orchestrator + specialist 多 Profile 工作流，需要跨 Profile 查看会话。
- **企业消息平台集成**（[#9512](https://github.com/nousresearch/hermes-agent/issues/9512)、[#25979](https://github.com/nousresearch/hermes-agent/issues/25979)）：Microsoft Teams + M365 生态的企业用户需求强烈。
- **本地模型部署**（[#41988](https://github.com/nousresearch/hermes-agent/issues/41988)）：使用 vllm/llama.cpp/mlx-vlm 作为自定义 provider 的用户需要更细粒度的采样参数控制。

---

## 8. 待处理积压

以下长期未响应的重要 Issue/PR 需维护者关注：

| 项目 | 创建日期 | 等待天数 | 严重度 | 说明 |
|---|---|---|---|---|
| **[#4581](https://github.com/nousresearch/hermes-agent/issues/4581)** — read_file 应支持返回无行号原始内容 | 2026-04-02 | **68 天** | P3 | 4 条评论，👍1，影响需要原始文件内容的自动化场景 |
| **[#9512](https://github.com/nousresearch/hermes-agent/issues/9512)** — Microsoft Teams Gateway 支持 | 2026-04-14 | **56 天** | P3 | 6 条评论，企业级需求，无维护者回应 |
| **[#25979](https://github.com/nousresearch/hermes-agent/issues/25979)** — Microsoft 365 Calendar + To Do Skill | 2026-05-14 | **26 天** | P3 | 作者有生产可用实现并愿意贡献，但无维护者 review |
| **[#27997](https://github.com/nousresearch/hermes-agent/issues/27997)** — 声明式 Skill 统一保护策略 | 2026-05-18 | **22 天** | P3 | 7 条评论（今日最高），安全架构重构需求 |
| **[#30399](https://github.com/nousresearch/hermes-agent/issues/30399)** — Docker 镜像 Matrix Gateway 不可用 | 2026-05-22 | **18 天** | P2 | 👍3，Docker 部署用户核心痛点 |
| **[#34457](https://github.com/nousresearch/hermes-agent/issues/34457)** — s6-log 锁碰撞无限循环 | 2026-05-29 | **11 天** | P2 | 👍3，多容器部署稳定性问题 |
| **[#36845](https://github.com/nousresearch/hermes-agent/issues/36845)** — Cron 超时掩盖为 ok | 2026-06-01 | **8 天** | P2 | 生产环境数据丢失风险 |
| **[#40101](https://github.com/nousresearch/hermes-agent/issues/40101)** — mnemosyne-hermes 插件未被发现 | 2026-06-05 | **4 天** | P3 | 第三方插件生态兼容性问题 |

> **⚠️ 特别提醒：** Issue [#4581](https://github.com/nousresearch/hermes-agent/issues/4581) 已开放 **68 天**，是列表中等待时间最长的 Issue。Issue [#27997](https://github.com/nousresearch/hermes-agent/issues/27997) 以 7 条评论成为今日讨论最热的安全架构议题，建议维护者尽快给予方向性回应。

---

*数据来源：NousResearch/hermes-agent GitHub | 报告生成时间：2026-06-09 | OWL 项目动态日报*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-06-09 | 数据来源：GitHub.com/sipeed/picoclaw**

---

## 1. 今日速览

过去 24 小时 PicoClaw 项目活跃度**较高**，共处理 18 个 PR（9 个待合并，9 个已合并/关闭）和 3 个 Issue，并自动发布了 nightly 构建版本。代码提交集中在**稳定性修复与工程质量提升**，大量 PR 来自同一贡献者（chengzhichao-xydt），聚焦类型断言安全加固和错误处理规范化。社区端有 2 个活跃 Bug 报告仍在等待修复，其中 Telegram 定位消息 Bug 已有 PR 处理并于当日合并。

**整体健康度评估：🟢 良好** — 合并节奏稳健，维护者响应及时（多个 PR 在同一天内完成创建→合并），但积压的待合并 PR 略有增长（9 个）。

---

## 2. 版本发布

**Nightly Build：`v0.2.9-nightly.2026060608.875cf4a2`**

| 属性 | 详情 |
|------|------|
| 类型 | 自动化夜间构建 |
| 稳定性 | ⚠️ 不稳定，需谨慎使用 |
| 基准 | 基于 `v0.2.9` 与 `main` 分支之间的增量变更 |

> 本次 nightly 合并了过去一天的大量修复，包括 Telegram 位置消息处理、类型断言安全加固、错误包装规范等。适合需要的用户尝鲜，生产环境建议等待正式 release。
>
> **Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.9...main

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 摘要 |
|----|------|------|
| **[#3052](https://github.com/sipeed/picoclaw/pull/3052)** | 🐞 Bug Fix | **Telegram 位置消息处理** — 将 `message.location` 转换为 `[User location: lat=..., lng=...]` 文本，使位置信息能被 agent 管道消费 |
| **[#3050](https://github.com/sipeed/picoclaw/pull/3050)** | ♻️ Refactor | **结构化日志替换** — 将多处 `log.Printf`/`fmt.Printf` 替换为结构化 logger，确保日志通过统一后端输出 |
| **[#3051](https://github.com/sipeed/picoclaw/pull/3051)** | 🐞 Bug Fix | **错误包装规范** — channels 和 MCP 中 `%v` 改为 `%w`，修复 `errors.Is()`/`errors.As()` 断链问题 |
| **[#3018](https://github.com/sipeed/picoclaw/pull/3018)** | 🐞 Bug Fix | **三路防御性修复** — LINE channel `sync.Map.LoadAndDelete`、Evolution store `LoadOrStore` 类型断言加 `ok` 检查，`os.Getwd` 错误处理 |
| **[#3055](https://github.com/sipeed/picoclaw/pull/3055)** – [#3058](https://github.com/sipeed/picoclaw/pull/3058) | 🐞 Bug Fix | **类型断言安全加固系列** — 覆盖 `pkg/tools/shared/base.go`（7 处）、`webfetch`、`subagent/spawn`、`agent context`，共 ~15 处不安全类型断言 |
| **[#3062](https://github.com/sipeed/picoclaw/pull/3062)** | 🐞 Bug Fix | **Health check 始终返回 not ready 的 Bug** |

**进展总结：** 项目今日在**工程质量和稳定性**维度向前迈进一大步。最显著的功能进展是 Telegram 位置消息支持（PR #3052）；质量加固方面，贡献者 chengzhichao-xydt 通过 6 个 PR 系统性地消除了潜在 panic 风险（类型断言）和错误处理盲区（`%w`、`Close()` 返回值、`os.Getwd`），显著提升了代码健壮性。

---

## 4. 社区热点

### 🔥 最受关注的 Issues

**Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887) — `.deb` 包在 RISC-V 平台上无法使用 OpenAI 模型**
- 状态：OPEN（已标记 stale）| 👍 0 | 💬 9 条评论
- 发布时间：2026-05-17，最后更新：2026-06-08
- 用户报告在 Debian/RISC-V 上运行 `.deb` 版本时，AI 模型调用失败。9 条评论说明社区中有多人关注此问题，尤其在 **边缘计算/非 x86 平台** 用户群体中引发共鸣。
- ⚠️ 已被标记为 stale，可能表明维护者认为优先级较低或缺乏足够复现信息。

**Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015) — Windows 上 QQ Channel 连接失败**
- 状态：OPEN | 👍 0 | 💬 2 条评论
- 发布时间：2026-006-06，最后更新：2026-06-08
- QQ channel 在 Windows 上因获取 access token 超时而失败，Pico channel 正常。诉求是解决 **Windows 环境下 QQ 渠道的鉴权流程**。

---

## 5. Bug 与稳定性

### Bug 严重程度排序

| 严重级别 | Issue / PR | 状态 |
|---------|-----------|------|
| 🔴 **高** | Telegram 忽略位置消息 — [#3049](https://github.com/sipeed/picoclaw/issues/3049) | ✅ **已修复并关闭** — fix PR [#3052](https://github.com/sipeed/picoclaw/pull/3052) 同日内合并 |
| 🟠 **中** | RISC-V `.deb` 包 OpenAI 不工作 — [#2887](https://github.com/sipeed/picoclaw/issues/2887) | ⏳ 开放中，标记 stale，尚无 fix PR |
| 🟠 **中** | Windows QQ Channel token 超时 — [#3015](https://github.com/sipeed/picoclaw/issues/3015) | ⏳ 开放中，尚无 fix PR |
| 🟡 **低-中** | Health check 始终返回 not ready — [#3062](https://github.com/sipeed/picoclaw/pull/3062) | ✅ 已合并修复 |
| 🟡 **低** | Matrix allow_from 对含冒号用户 ID 错误拒绝 — [#3045](https://github.com/sipeed/picoclaw/pull/3045) | 🔧 fix PR 待合并 [#3045](https://github.com/sipeed/picoclaw/pull/3045) |
| 🟢 **工程** | 多处 `sync.Map` 类型断言未检查 | ✅ 大规模修复已合并（PR #3018, #3053–#3058）|
| 🟢 **工程** | 错误包装使用 `%v` 而非 `%w` | ✅ 已合并修复（PR #3051, #3060 待合并）|

---

## 6. 功能请求与路线图信号

### 新功能开发中

**PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) — DeltaChat Gateway（新增渠道）**
- 作者：trufae | 状态：OPEN
- 这是今日新增的**重大功能 PR**，为 PicoClaw 添加 DeltaChat 渠道适配器。DeltaChat 是一款基于电子邮件的去中心化通信工具，此举将 PicoClaw 的通信渠道覆盖范围进一步拓展到 **privacy-first / 去中心化** 用户群体。
- 信号：项目正在积极扩充通讯渠道生态（已有 Telegram、QQ、LINE、Pico 等）。

**长期 Agent 稳定性改进**

- PR [#2904](https://github.com/sipeed/picoclaw/pull/2904) — 修复 Agent 循环重载和 panic 清理稳定性，自 05-20 持续更新仍待合并，表明维护者对 **agent 核心稳定性的长期投入**。
- PR [#3061](https://github.com/sipeed/picoclaw/pull/3061) — 隐藏 Windows 子进程控制台闪屏（follow-up to #2654），改善 **Windows GUI 用户体验**。

---

## 7. 用户反馈摘要

| 痛点 | 来源 | 用户场景 |
|------|------|---------|
| **RISC-V 架构不兼容** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | 用户在低功耗/嵌入式 RISC-V 设备（如 Sipeed 自家硬件）上运行 AI 助手，`.deb` 包无法正常工作。PicoClaw 由 Sipeed 发起，此问题尤为敏感。 |
| **Windows 用户体验不足** | [#3015](https://github.com/sipeed/picoclaw/issues/3015) + [#3061](https://github.com/sipeed/picoclaw/pull/3061) | Windows 用户遭遇 QQ 渠道鉴权失败和控制台窗口闪屏。表明 Windows 用户群体在增长，但平台适配仍有差距。 |
| **Telegram 功能不完整** | [#3049](https://github.com/sipeed/picoclaw/issues/3049) | 在机器人场景中使用位置共享（如"发送我的位置"），机器人完全无响应，导致用户体验断裂。 |
| **满意点** | — | Telegram 定位 Bug 当日报告、当日修复合并，反映社区对维护者响应速度的认可。 |

---

## 8. 待处理积压

以下 PR 和 Issue 长期未获最终处理，建议维护者优先关注：

### 积压 PR（待合并）

| PR | 创建日期 | 摘要 | 等待天数 |
|----|---------|------|---------|
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | 05-20 | Agent 循环重载与 panic 稳定性修复 | **20 天** |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) | 06-07 | Matrix allow_from 用户 ID 解析修复 | 2 天 |
| [#3053](https://github.com/sipeed/picoclaw/pull/3053) | 06-08 | Evolution store `LoadOrStore` 类型断言 | 1 天 |
| [#3054](https://github.com/sipeed/picoclaw/pull/3054) | 06-08 | LINE channel `sync.Map` 类型断言 | 1 天 |
| [#3060](https://github.com/sipeed/picoclaw/pull/3060) | 06-08 | `%w` 错误包装 + JSON 处理 | 1 天 |
| [#3061](https://github.com/sipeed/picoclaw/pull/3061) | 06-08 | Windows 子进程控制台闪屏修复 | 1 天 |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | 06-08 | DeltaChat gateway 新功能 | 1 天 |

### ⚠️ 需要关注的长期开放 Issue

| Issue | 创建日期 | 摘要 | 状态 |
|-------|---------|------|------|
| [#2887](https://github.com/sipeed/picocaw/issues/2887) | 05-17 | RISC-V `.deb` 不工作 | **已标记 stale**，距创建已 23 天，且 9 条评论表明社区有真实需求 |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) | 06-06 | Windows QQ Channel 连接失败 | 开放中，尚无修复进展 |

> **建议：** Issue #2887 虽然被标记 stale，但背后是 PicoClaw 核心目标用户群（RISC-V/嵌入式设备），建议维护者明确该问题的解决方向（修复/Won't fix/Needs more info），避免伤害社区热情。

---

*日报由 OWL 自动生成 | 数据截止：2026-06-09 | 项目地址：https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-06-09

**项目地址：** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日整体活跃，过去 24 小时内新开 Issue 1 条，PR 更新 3 条（1 条待合并，2 条已合并/关闭）。项目进入新一轮安全加固活跃周期——三条 PR 中两条直接涉及安全防护（出站网络锁定、认证与随机数预测修复），表明社区与内部开发者正将安全视为当期最高优先级。无新版本发布，本周可能有 v3 patch release。今日有一个新 Bug 报告和两个安全 PR 密集上线，项目健康度良好，但 Issue 响应速度仍偏慢（平均 0 条评论）。

---

## 2. 版本发布

**无新版本发布。**

> 近期三个安全相关变更（egress lockdown、webhook 绑定修复、crypto.randomUUID 替换）均在未直接合并或待合并状态，建议发布后合并进下一个 patch 版本（如 v3.x.x-patch）。

---

## 3. 项目进展

今日合并/关闭的 PR 共 2 条，均已在上报时间窗口内完成：

| PR | 状态 | 内容摘要 | 链接 |
|---|---|---|---|
| #2713 | ✅ CLOSED | 出站网络锁定（opt-in，默认关闭）：每个 Agent 容器放置在 Docker `--internal` 网络，所有出站流量强制经由 OneCLI 网关 | [PR #2713](https://github.com/qwibitai/nanoclaw/pull/2713) |
| #2712 | ✅ CLOSED | 遵循贡献指南的常规 PR（未详细标注变更类型） | [PR #2712](https://github.com/qwibitai/nanoclaw/pull/2712) |

**关键推进：** #2713 的「出站网络锁定」功能是本期最大安全基建升级，使得 Agent 容器默认无法访问外部网络（`internal` 网络），仅允许经 OneCLI 网关路由出站请求。虽然当前为 opt-in（默认关闭 @omri-maya 已将该功能设计为非侵入式加入），但已将这一能力落地至项目基础架构上。

**待合并 PR：**

| PR | 状态 | 内容摘要 | 链接 |
|---|---|---|---|
| #2714 | ⏳ OPEN | 安全修复：webhook-server 绑定 127.0.0.1；用 crypto.randomUUID() 替代 Math.random()；等4项修复 | [PR #2714](https://github.com/qwibitai/nanoclaw/pull/2714) |

---

## 4. 社区热点

今日评论量较低（所有 Issue/PR 评论数均显示 0 / undefined），讨论热点基于内容推断而非评论量：

**🔥 Issue #2715 — WhatsApp 入站媒体无法被 Agent 访问**
- **报告者：** jon-ruth · **年龄：** 1天
- **链接：** [Issue #2715](https://github.com/qwibitai/nanoclaw/issues/2715)
- **诉求分析：** 用户报告 WhatsApp v2 存量附件下载至宿主目录后，路径传递至 Agent 容器内部时变成无效的 `/workspace/attachments/...`，Agent 无法打开图片/文档/音频。这直接影响 WhatsApp Agent 的核心用户体验，反映出宿主卷挂载与容器内部路径不一致这一基础设施级 Bug。用户期望 Agent 能够解析和链接入站媒体资源。

**🔥 PR #2714 — 今日价值最高的安全修复**
- **链接：** [PR #2714](https://github.com/qwibitai/nanoclaw/pull/2714)
- **解读：** 一次提交涵盖4项独立安全修复，包括 webhook 服务默认仅绑定 127.0.0.1，有效封堵外部网络嗅探。以 `crypto.randomUUID()` 替换 `Math.random()` 可防止定时攻击预测审批 ID，直接影响 sender-approval 机制的信任边界。

---

## 5. Bug 与稳定性

| Severity | Issue # | 描述 | 已有 Fix PR？ |
|---|---|---|---|
| High | [#2715](https://github.com/qwibitai/nanoclaw/issues/2715) | WhatsApp 入媒体文件路径不可达（容器路径映射缺失）；影响所有使用 WhatsApp 上传附件的用户 | ❌ 无已知 Fix PR |
| Medium | [#2714](https://github.com/qwibitai/nanoclaw/pull/2714) | webhook-server 绑定 0.0.0.0 存在 SSRF 泄露风险 | ✅ 已在本 PR 中修复（PR 待合并） |

**分析：** #2715 是一个基础设施级 Bug（路径未挂入容器），建议在合并 #2714 后优先排入 #2715 的修复，因该问题直接影响 WhatsApp 这一核心渠道的可用性。

---

## 6. 功能请求与路线图信号

| 信号来源 | 方向 | 推断优先级 |
|---|---|---|
| #2715 | WhatsApp 入站媒体可用性（路径一致性） | 高 — 直接影响用户核心场景 |
| #2714 | 安全加固（webhook 绑定 + 随机数升级） | 高 — 已提交 PR，预计近期合并 |
| #2713 | Agent 容器出站网络隔离（opt-in） | 中 — 已合并，基础设施就绪，等待文档跟进 |

**路线图判断：**
1. **安全系列（最高优先级）：** 三个安全相关变更近期密集出现，可推断下一个里程碑将以安全加固为核心主题（如 v3.x.x-patch-security1）。
2. **漏洞修复（中）：** #2715 WhatsApp 路径映射 Bug 很可能成为下一个 patch 的 headliner。

---

## 7. 用户反馈摘要

- **痛点：** WhatsApp 入媒体无法查看/打开，反映多 Agent 挂载体系下的媒体路径碎片化问题。该 Bug 的直接后果是 Agent 收到无效路径，用户体验严重受损。
- **期望：** 用户希望 Agent 能够无缝访问入站内容，上传即看、下载即管理。实际上该功能对 Agent 的多轮对话能力（如分析图片、阅读 PDF）至关重要。
- **满意度：** 尚无正面评价数据。

---

## 8. 待处理积压提醒

| Issue / PR | 创建至今 | 备注 |
|---|---|---|
| [#2715](https://github.com/qwibitai/nanoclaw/issues/2715) | 1 天 | WhatsApp 媒体不可达 — 0 评论，需尽快接入修复 |
| [#2714](https://github.com/qwibitai/nanoclaw/pull/2714) | 1 天 | 4项安全修复 — 待合并，建议尽快 Review |

**维护者行动建议：**
- **优先级 1：** Review & Merge PR #2714（4 项安全修复，影响 webhook 安全边界）。
- **优先级 2：** 指派 #2715 修复责任人，路径映射问题已有明确复现步骤。
- **优先级 3：** 验证 #2713（egress lockdown）opt-in 是否已在文档/CONFIG 中新增说明。

---

*日报由 OWL 基于 2026-06-09 GitHub 数据生成 · 字数 1,200+*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-09

---

## 1. 今日速览

IronClaw 今日处于**高活跃开发期**，过去 24 小时内 Issues 更新 33 条（新开/活跃 19 条，关闭 14 条），PR 更新 50 条（待合并 26 条，已合并/关闭 24 条），无新版本发布。项目核心工作仍围绕 **Reborn 生产化迁移**展开——OpenAI-compatible API 路由重构、ProductWorkflow 门面拆分、认证与审批并行推进。同时，多个面向最终用户的 Bug（Google Calendar 时间排序、Codex 版本硬编码、SSO 登录回归）在当天报告并迅速合并修复，显示团队响应速度较快。积压的待合并 PR 数量偏高（26 条），部分大型 PR 存在合并瓶颈。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为 `ironclaw 0.29.1`（PR #3708 尚未合并）。

---

## 3. 项目进展

今日合并/关闭的 24 条 PR 中，以下条目具有较高工程价值：

| PR | 作者 | 摘要 |
|---|---|---|
| **[#4578](https://github.com/nearai/ironclaw/pull/4578)** | BenKurrek | **fix(tools/google-calendar)**：`list_events` 未默认 `timeMin` 导致返回最旧事件而非即将到来的事件，已修复并合并。 |
| **[#4566](https://github.com/nearai/ironclaw/pull/4566)** | BenKurrek | **fix(llm)**：Codex ChatGPT 订阅路径中 `client_version` 硬编码为 `0.111.0`，导致新模型（如 gpt-5.5）被隐藏；改为自动检测版本号，已合并。 |
| **[#4576](https://github.com/nearai/ironclaw/pull/4576)** | henrypark133 | **feat(llm)**：为 `ToolCall` 添加 `arguments_parse_error` 字段（RC3/M9 Phase B），21 个文件机械更新，为后续 NormalizingProvider 铺路。 |
| **[#4572](https://github.com/nearai/ironclaw/pull/4572)** | henrypark133 | **feat(reborn)**：将 `researcher` subagent 替换为 `planner` 类型，重设计 `spawn_subagent` 参数命名（`flavor_id` → `subagent_type`），已合并。 |
| **[#4528](https://github.com/nearai/ironclaw/pull/4528)** | serrrfirat | **feat(slack)**：为 Slack host-beta 添加基于文件系统的 product workflow 幂等性账本和持久化出站投递状态，已合并。 |
| **[#4523](https://github.com/nearai/ironclaw/pull/4523)** | matiasbenary | **fix(host_api)**：`TenantId`/`UserId` 反序列化拒绝 `\x1fSYSTEM\x1f` sentinel 导致 LLM settings 接口 500 的问题，已合并。 |
| **[#4574](https://github.com/nearai/ironclaw/pull/4574)** | henrypark133 | **feat(outbound)**：添加 scoped outbound delivery defaults，支持 personal vs shared-agent 投递偏好分离，已合并。 |
| **[#4442](https://github.com/nearai/ironclaw/pull/4442)** | hanakannzashi | **feat(reborn)**：OpenAI-compatible API ingress 合约定义，为后续 Chat/Responses 路由迁移打基础，已合并。 |
| **[#4443](https://github.com/nearai/ironclaw/pull/4443)** | hanakannzashi | **feat(reborn)**：OpenAI-compatible 产品引用和幂等性层（`chatcmpl-*` / `resp_*`），已合并。 |
| **[#4488](https://github.com/nearai/ironclaw/pull/4488)** | danielwpz | **feat(reborn)**：将 `ProductWorkflow` 拆分为 `submit`/`read`/`subscribe` 三个明确入口门，已合并。 |
| **[#4201](https://github.com/nearai/ironclaw/pull/4201)** | henrypark133 | **feat(reborn)**：产品面认证 HTTP 表面（manual-token、recovery、refresh、cleanup），已合并。 |
| **[#4116](https://github.com/nearai/ironclaw/pull/4116)** | serrrfirat | **feat(auth)**：将 v1 Google/GitHub/NEAR SSO 迁移到 WebChat v2，已合并。 |
| **[#4180](https://github.com/nearai/ironclaw/pull/4180)** | italic-jinxin | **feat(auth)**：GitHub SSO 迁移到 WebChat v2，已合并。 |
| **[#3613](https://github.com/nearai/ironclaw/pull/3613)** | serrrfirat | **test(reborn)**：WebUI Beta 端到端验收测试，已合并。 |
| **[#4536](https://github.com/nearai/ironclaw/pull/4536)** | italic-jinxin | **bug**：OAuth 用户登录后无法聊天（被重定向到 `/welcome`），已关闭（修复合并）。 |
| **[#4560](https://github.com/nearai/ironclaw/pull/4560)** | zmanian | **feat(traces)**：Trace Commons 引导 HTTP 路由需经过主机网络出口策略，已关闭。 |

**整体进展评估：** Reborn 的生产化迁移正在加速——OpenAI-compatible API 的合约层、产品引用层、ProductWorkflow 门面拆分均已完成合并，路由层（Chat/Responses）的大型 PR 已进入评审阶段。认证体系（SSO 迁移、OAuth PKCE、产品认证 HTTP 表面）稳步推进。LLM 提供者链的规范化（NormalizingProvider）进入 Phase B/C。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 作者 | 评论 | 主题 |
|---|---|---|---|
| **[#3283](https://github.com/nearai/ironclaw/issues/3283)** | serrrfirat | 3 | **[Reborn] 将 OpenAI-compatible Chat 和 Responses API 迁移到 Reborn** — 这是整个 Reborn API 迁移的父级 Issue，关联 7 个子 Issue，讨论聚焦于如何在保持外部请求/响应兼容性的前提下完成路由家族迁移。 |
| **[#4175](https://github.com/nearai/ironclaw/issues/4175)** | henrypark133 | 3 | **Reborn: 完成 ProductAuth 生产后端对等和 OAuth PKCE HA 安全性** — 关注生产级认证的高可用性和安全性，是 Reborn 替代 V1 的关键前置条件。 |
| **[#3957](https://github.com/nearai/ironclaw/issues/3957)** | zmanian | 2 | **[hooks] 第三方激活加固后续** — 关注多租户生产环境中第三方 hook 的安全隔离和审计。 |
| **[#3959](https://github.com/nearai/ironclaw/issues/3959)** | zmanian | 2 | **[hooks] SecurityAuditSink 在剩余边界调用点的采用** — 安全审计覆盖面的完善。 |
| **[#3288](https://github.com/nearai/ironclaw/issues/3288)** | serrrfirat | 2 | **Reborn: 生产能力生命周期管理对等** — extension、skill、MCP、WASM 生命周期 UX 迁移。 |
| **[#3026](https://github.com/nearai/ironclaw/issues/3026)** | serrrfirat | 2 | **Epic: Reborn 生产布线和切换准备** — P0 级别的 Epic，关注生产图的构建、验证和流量控制。 |

### 🔥 待合并的大型 PR

| PR | 作者 | 大小 | 主题 |
|---|---|---|---|
| **[#4546](https://github.com/nearai/ironclaw/pull/4546)** | think-in-universe | XL | **feat(reborn): 将 Responses 路由通过 ProductWorkflow** — 添加 `OpenAiResponsesWorkflow`，将 `/api/v1/responses`、`/v1/responses` 等路由接入 ProductWorkflow。 |
| **[#4495](https://github.com/nearai/ironclaw/pull/4495)** | hanakannzashi | XL | **feat(reborn): 将 chat completions 路由通过 ProductWorkflow** — 非流式 `/v1/chat/completions` 的完整 Reborn 实现，含幂等性、actor-scoped ref 预留。 |
| **[#4559](https://github.com/nearai/ironclaw/pull/4559)** | zmanian | XL | **feat(traces): 通过邀请链接实现 agent 驱动的 Trace Commons 引导** — 用户粘贴邀请链接即可完成注册，替代旧的手动配置流程。 |
| **[#4552](https://github.com/nearai/ironclaw/pull/4552)** | think-in-universe | XL | **feat(reborn): 将投影流翻译为 OpenAI SSE** — 流式 Chat/Responses 的 SSE 翻译器。 |
| **[#4583](https://github.com/nearai/ironclaw/pull/4583)** | henrypark133 | L | **feat(llm): NormalizingProvider Layer-3 装饰器** — 规范化 `tool_calls` + `finish_reason` 不一致的问题。 |

**热点分析：** 社区核心诉求集中在三个方向：(1) **Reborn 生产化**——大量 Issue/PR 围绕将现有 V1 功能迁移到 Reborn 架构，这是当前最高优先级的工程目标；(2) **安全与审计**——第三方 hook 隔离、SecurityAuditSink 覆盖面、OAuth PKCE 安全性；(3) **LLM 提供者链的健壮性**——工具调用规范化、模型发现自动化。

---

## 5. Bug 与稳定性

### 🔴 高优先级（已修复并合并）

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| **[#4577](https://github.com/nearai/ironclaw/issues/4577)** | `google_calendar` `list_events` 未默认 `timeMin`，导致返回最旧事件而非即将到来的事件 | [#4578](https://github.com/nearai/ironclaw/pull/4578) | ✅ 已合并 |
| **[#4564](https://github.com/nearai/ironclaw/issues/4564)** | Codex ChatGPT 订阅路径 `client_version` 硬编码，隐藏新模型（如 gpt-5.5） | [#4566](https://github.com/nearai/ironclaw/pull/4566) | ✅ 已合并 |
| **[#4536](https://github.com/nearai/ironclaw/issues/4536)** | OAuth（Google/GitHub）用户登录后无法聊天，被重定向到 `/welcome` | — | ✅ 已关闭（修复合并） |

### 🟡 中优先级（待修复）

| Issue | 描述 | 状态 |
|---|---|---|
| **[#4548](https://github.com/nearai/ironclaw/issues/4548)** | 向 DeepSeek 发送含 tools 的 chat completion 请求时，JSON body 包含两个顶层 `model` 字段，导致 400 错误 | 🔴 待修复 |
| **[#4557](https://github.com/nearai/ironclaw/issues/4557)** | 部分 hosted agent 返回 403 Forbidden，但实例仍在运行 | 🔴 待修复 |
| **[#4556](https://github.com/nearai/ironclaw/issues/4556)** | 从 0.28.2 升级到 0.29.1 后，Telegram 创建新对话而非继续现有对话 | 🔴 待修复 |
| **[#4554](https://github.com/nearai/ironclaw/issues/4554)** | WebUI v2 国际化覆盖不完整，翻译键存在但运行时崩溃 | 🔴 待修复 |

### 🟠 基础设施

| Issue | 描述 | 状态 |
|---|---|---|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** | Nightly E2E 测试失败（自 2026-05-27 起持续） | ⚠️ 长期未解决 |

**稳定性评估：** 当日报告的 3 个高优先级 Bug 均在同一天内完成修复并合并，响应速度优秀。但 E2E 测试自 5 月底以来持续失败，可能掩盖潜在回归问题，建议优先排查。

---

## 6. 功能请求与路线图信号

### 新功能 Epic（今日新开）

| Issue | 描述 | 信号强度 |
|---|---|---|
| **[#4533](https://github.com/nearai/ironclaw/issues/4533)** | **Epic: Reborn 运维配置、诊断和服务生命周期** — 用户/运维人员需要能够设置、检查、调试和管理本地服务生命周期 | 🟡 中 |
| **[#4545](https://github.com/nearai/ironclaw/issues/4545)** | **Epic: Reborn 用户生成工具的自服务密钥设置和授权** — 用户通过 Slack/web/Telegram/CLI 提供密钥，不暴露给 LLM | 🟡 中 |
| **[#4543](https://github.com/nearai/ironclaw/issues/4543)** | **Epic: 凭证化通用 HTTP 和技能声明服务需求的运行时服务配置文件** — 支持第三方 API（Crisp、Stripe 等）的用户配置凭证 | 🟡 中 |
| **[#4539](https://github.com/nearai/ironclaw/issues/4539)** | **Epic: Reborn 审批对等** — 实现 V1 的完整审批循环（批准一次、拒绝、始终允许） | 🟡 中 |

### 路线图信号判断

- **OpenAI-compatible API 完整迁移**：合约层（#4442、#4443）已合并，路由层（#4495、#4546）和流式 SSE（#4552）的大型 PR 正在评审，预计将在下个版本中完成核心路径的迁移。
- **Reborn 运维工具**：新开的 Epic #4533 表明团队正在从"功能开发"转向"运维体验"，这是 Reborn 替代 V1 前的必要准备。
- **密钥管理**：#4545 和 #4543 两个 Epic 指向用户自服务凭证管理，这是多用户/多租户场景的核心需求。
- **LLM 提供者链规范化**：NormalizingProvider（#4583）和 ToolCall 扩展（#4576）正在推进，预计将改善工具调用的健壮性。

---

## 7. 用户反馈摘要

### 痛点

1. **升级回归**：从 0.28.2 升级到 0.29.1 后，Telegram 对话连续性被破坏（[#4556](https://github.com/nearai/ironclaw/issues/4556)），表明升级路径测试覆盖不足。
2. **OAuth 登录体验**：OAuth 用户登录后无法直接聊天（[#4536](https://github.com/nearai/ironclaw/issues/4536)），这是阻断用户使用的严重问题。
3. **工具行为不符合预期**：Google Calendar 返回最旧事件而非即将到来的事件（[#4577](https://github.com/nearai/ironclaw/issues/4577)），影响日常使用体验。
4. **模型发现不透明**：Codex 用户无法使用新模型（[#4564](https://github.com/nearai/ironclaw/issues/4564)），硬编码版本号导致用户困惑。
5. **国际化不完整**：WebUI v2 仍存在硬编码英文字符串和翻译运行时崩溃（[#4554](https://github.com/nearai/ironclaw/issues/4554)），影响非英语用户。
6. **Hosted agent 访问异常**：部分 agent 返回 403 但实例仍在运行（[#4557](https://github.com/nearai/ironclaw/issues/4557)），运维可见性不足。

### 满意点

- 多个 Bug（Google Calendar、Codex 版本、OAuth 登录）在报告当天即完成修复并合并，用户问题响应速度值得肯定。
- Reborn 架构的持续推进（ProductWorkflow 拆分、OpenAI-compatible API 迁移）显示出项目的技术方向明确。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于阻塞状态，建议维护者关注：

| 条目 | 类型 | 创建日期 | 最后更新 | 状态 | 建议 |
|---|---|---|---|---|---|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108)** | Issue | 2026-05-27 | 2026-06-08 | ⚠️ E2E 持续失败 >12 天 | **高优**：排查 Nightly E2E 失败根因，可能掩盖回归 |
| **[#3026](https://github.com/nearai/ironclaw/issues/3026)** | Issue (Epic) | 2026-04-28 | 2026-06-08 | 🔴 P0 Epic，进展缓慢 | 生产布线和切换准备是 Reborn 上线关键路径 |
| **[#3283](https://github.com/nearai/ironclaw/issues/3283)** | Issue (Epic) | 2026-05-06 | 2026-06-08 | 🟡 子任务推进中 | 父级 Issue，需跟踪子任务完成度 |
| **[#3708](https://github.com/nearai/ironclaw/pull/3708)** | PR | 2026-05-16 | 2026-06-08 | 🟡 发布 PR 阻塞 >3 周 | 包含 API breaking changes，需尽快决策合并或关闭 |
| **[#4186](https://github.com/nearai/ironclaw/pull/4186)** | PR | 2026-05-28 | 2026-06-08 | 🟡 本地开发审批门接线 | 超过 10 天未合并 |
| **[#4191](https://github.com/nearai/ironclaw/issues/4191)** | Issue | 2026-05-28 | 2026-06-08 | 🟡 WeCom 渠道验证发现多个问题 | 影响企业用户 |
| **[#4548](https://github.com/nearai/ironclaw/issues/4548)** | Issue | 2026-06-08 | 2026-06-08 | 🔴 DeepSeek 400 错误 | 当日报告，尚无修复 PR |
| **[#4557](https://github.com/nearai/ironclaw/issues/4557)** | Issue | 2026-06-08 | 2026-06-08 | 🔴 Hosted agent 403 | 当日报告，尚无修复 PR |

---

**日报生成时间：** 2026-06-09  
**数据来源：** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)  
**分析周期：** 过去 24 小时（2026-06-08 ～ 2026-06-09）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-06-09

---

## 1. 今日速览

LobsterAI 昨日（2026-06-08）开发活动高度活跃，共处理 **19 条 PR**，其中 18 条已合并/关闭，仅剩 1 条 Dependabot 依赖更新 PR 仍处于开启状态。Issue 侧无新开或关闭记录。无新版本发布。合并的 PR 覆盖面广，涵盖 **认证流程重构、数据迁移服务、Settings UI 增强、稳定性修复** 等多个核心模块，整体呈现出集中冲刺式的代码交付节奏。项目维护健康度良好，但积压的 stale PR 和依赖更新 PR 合并节奏值得持续关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 新功能（3 个）

| # | 变更 | 说明 |
|---|------|------|
| **PR #2125** ✅ | feat(data-migration): 用户数据备份与恢复服务 | 新增数据迁移核心服务：将 LobsterAI 用户数据打包为可移植 tar 归档，通过计划重启执行恢复，并支持回滚机制；Settings 面板新增备份/导入入口，完整打通 main ↔ preload ↔ renderer IPC 链路。这是产品级数据迁移能力的基础框架。<br>🔗 [netease-youdao/LobsterAI/pull/2125](https://github.com/netease-youdao/LobsterAI/pull/2125) |
| **PR #2122** ✅ | feat(auth): 本地化回调登录流程 | 为 Electron 客户端新增 `127.0.0.1` 临时回调服务器登录流程，避免桌面登录时浏览器弹出外部应用确认对话框，改用 localhost redirect 完成 OAuth 回调。这是改善桌面端登录体验的关键架构变更。<br>🔗 [netease-youdao/LobsterAI/pull/2122](https://github.com/netease-youdao/LobsterAI/pull/2122) |
| **PR #2123** ✅ | feat(settings): OpenClaw 网关地址与运行状态展示 | 通过 `OpenClawEngineManager` 暴露网关端口与 HTTP URL，在 Settings 中渲染可复制的地址卡片、带阶段感知的状态标签和启动进度条；同时替换 kits 空状态 SVG 为 React 组件。用户可直接在 UI 中获取网关集成地址，降低接入门槛。<br>🔗 [netease-youdao/LobsterAI/pull/2123](https://github.com/netease-youdao/LobsterAI/pull/2123) |

### 修复（11 个）

| # | 变更 | 说明 |
|---|------|------|
| **PR #2128** ✅ | fix(data-migration): 备份排除 Network 目录，恢复时保留 | 修复数据迁移服务中 Network 目录未排除导致备份膨胀/恢复覆盖的问题，确保运行时关键路径不受影响。<br>🔗 [netease-youdao/LobsterAI/pull/2128](https://github.com/netease-youdao/LobsterAI/pull/2128) |
| **PR #2126** ✅ | fix(data-migration): 就地恢复并保留运行时锁文件 | 将恢复策略从「重命名整个用户目录」改为「替换可恢复的用户数据条目」，保留 `SingletonLock/Socket/Cookie` 等运行时锁文件，仅在目标已变动且回滚归档就绪时才执行回滚。<br>🔗 [netease-youdao/LobsterAI/pull/2126](https://github.com/netease-youdao/LobsterAI/pull/2126) |
| **PR #2127** ✅ | fix(auth): Windows 回调登录后焦点控制 | 回调登录或 Deep Link 登录后主窗口置顶；Windows 上通过短暂切换 `always-on-top` 并停止任务栏闪烁，确保浏览器登录完成后桌面应用正确获得焦点。<br>🔗 [netease-youdao/LobsterAI/pull/2127](https://github.com/netease-youdao/LobsterAI/pull/2127) |
| **PR #2129** ✅ | chore(auth): 登录回调诊断日志 | 记录客户端使用的是 overmind 还是 fallback portal 登录 URL，以及桌面登录是否使用本地回调 redirect，便于 Windows dev-mode 回调问题的诊断。<br>🔗 [netease-youdao/LobsterAI/pull/2129](https://github.com/netease-youdao/LobsterAI/pull/2129) |
| **PR #2110** ✅ | fix(cowork): 防护超大 OpenClaw 图片载荷 | 在发送前检测 `chat.send` 载荷大小，将 `1009`/max-payload 网关失败分类为消息尺寸错误，区分单图与整消息尺寸提示，并补充专项测试。<br>🔗 [netease-youdao/LobsterAI/pull/2110](https://github.com/netease-youdao/LobsterAI/pull/2110) |
| **PR #2117** ✅ | fix(config): 迁移后保留用户已删除的 provider 模型 | 追踪 provider model 迁移版本号，确保新增默认模型仅注入一次，用户手动删除的 provider 模型在应用重启后不再被还原。<br>🔗 [netease-youdao/LobsterAI/pull/2117](https://github.com/netease-youdao/LobsterAI/pull/2117) |
| **PR #1510** ✅ | fix: 定时任务 IM 通知频道未选会话时静默失败 | 在 `TaskForm.validate()` 中添加 `notifyTo` 非空校验，会话选择器下方渲染错误提示，防止创建 `delivery.to` 为空的任务。<br>🔗 [netease-youdao/LobsterAI/pull/1510](https://github.com/netease-youdao/LobsterAI/pull/1510) |
| **PR #1514** ✅ | fix: QQ Bot 群组白名单 UI 缺失输入框 | 为 `Group Allow From` 区域补充输入框 + 添加按钮 + 标签列表 UI，与飞书/钉钉实现对齐，修复白名单功能完全不可用的问题。<br>🔗 [netease-youdao/LobsterAI/pull/1514](https://github.com/netease-youdao/LobsterAI/pull/1514) |
| **PR #1515** ✅ | fix(log-export): 修复日志导出超时 | 根因：`yazl` DEFLATE 压缩级别 6 串行压缩数百 MB 日志超过 30 秒超时限制 + 渲染进程 IPC 超时未正确传递。修复压缩策略并优化超时处理。<br>🔗 [netease-youdao/LobsterAI/pull/1515](https://github.com/netease-youdao/LobsterAI/pull/1515) |
| **PR #1517** ✅ | fix: 关闭 Settings 时未取消 GitHub Copilot OAuth 轮询 | 在 `Settings.tsx` 组件卸载时调用 `cancelPolling()`，防止后台轮询持续运行及 Token 静默丢失。<br>🔗 [netease-youdao/LobsterAI/pull/1517](https://github.com/netease-youdao/LobsterAI/pull/1517) |
| **PR #1521** ✅ | fix(openclaw): 防止 skills-changed 触发无效网关重启 | 过滤 `skills-changed` 事件，避免不必要的 gateway 重启循环。<br>🔗 [netease-youdao/LobsterAI/pull/1521](https://github.com/netease-youdao/LobsterAI/pull/1521) |

### 增强（4 个）

| # | 变更 | 说明 |
|---|------|------|
| **PR #1522** ✅ | feat(settings): 从 Provider API 动态获取模型列表 | 新增「↻ 获取模型列表」按钮，调用各厂商 `GET /v1/models` 端点，自动同步最新上线模型到配置，解决用户只能手动逐一添加的痛点。<br>🔗 [netease-youdao/LobsterAI/pull/1522](https://github.com/netease-youdao/LobsterAI/pull/1522) |
| **PR #1524** ✅ | feat(settings): 测试连接失败时提供详细错误信息 | 新增 13 个 i18n Key（中英双语），覆盖网络不通、DNS 解析失败、SSL 证书错误、认证失败等场景，替代之前简单的「连接失败: 0」。<br>🔗 [netease-youdao/LobsterAI/pull/1524](https://github.com/netease-youdao/LobsterAI/pull/1524) |
| **PR #1526** ✅ | feat(cowork): 会话列表颜色标注 | 为每个会话添加 7 种颜色标注，支持通过视觉快速区分工作/个人/实验等类型会话。涉及 SQLite 迁移、IPC 通道、Store 方法和 UI 渲染全链路。<br>🔗 [netease-youdao/LobsterAI/pull/1526](https://github.com/netease-youdao/LobsterAI/pull/1526) |
| **PR #2124** ✅ | chore: 增强测试模式 | 测试基础设施改进。<br>🔗 [netease-youdao/LobsterAI/pull/2124](https://github.com/netease-youdao/LobsterAI/pull/2124) |

### 整体评估

昨日合并的 PR 覆盖了 **认证架构重构 → 数据迁移服务 → 网关可观测性 → 多平台 IM 集成修复 → 配置管理健壮性 → 用户体验增强** 的完整链路。其中数据迁移服务（#2125、#2126、#2128）和本地回调登录（#2122、#2127、#2129）是两条最核心的架构主线，表明团队正在集中推进 **桌面端登录体验** 和 **用户数据可移植性** 两大方向。多个 stale PR 的集中合并也说明积压清理工作正在加速。

---

## 4. 社区热点

昨日无新开 Issue，PR 评论数据未返回（`undefined`），因此无法基于评论量和反应数识别热点。从 PR 内容本身来看，以下两条最具社区价值：

- **PR #1522 — 动态模型列表获取**：直接回应了用户「厂商不断发布新模型，只能手动逐一添加」的长期痛点，是 Settings 模块最受期待的功能之一。
  🔗 [netease-youdao/LobsterAI/pull/1522](https://github.com/netease-youdao/LobsterAI/pull/1522)

- **PR #1526 — 会话颜色标注**：为 cowork 会话列表引入视觉分类能力，是多会话管理场景下的高频需求。
  🔗 [netease-youdao/LobsterAI/pull/1526](https://github.com/netease-youdao/LobsterAI/pull/1526)

---

## 5. Bug 与稳定性

按严重程度排列昨日合并的 Bug 修复：

| 严重程度 | PR | 问题描述 | 状态 |
|----------|-----|----------|------|
| 🔴 高 | #1515 | 日志导出超时（30s），低配机器上数百 MB 日志串行压缩超限 | ✅ 已合并 |
| 🔴 高 | #1517 | GitHub Copilot OAuth Token 静默丢失（组件卸载未取消轮询） | ✅ 已合并 |
| 🟡 中 | #1510 | 定时任务 IM 通知 `delivery.to` 为空导致静默失败 | ✅ 已合并 |
| 🟡 中 | #1514 | QQ Bot 群组白名单 UI 缺失，功能完全不可用 | ✅ 已合并 |
| 🟡 中 | #2110 | 超大 OpenClaw 图片载荷导致网关 `1009` 错误 | ✅ 已合并 |
| 🟡 中 | #2117 | 用户删除的 provider 模型在重启后被还原 | ✅ 已合并 |
| 🟡 中 | #2126 | 数据迁移恢复时锁文件被覆盖导致运行时异常 | ✅ 已合并 |
| 🟢 低 | #1521 | skills-changed 触发无效网关重启 | ✅ 已合并 |
| 🟢 低 | #2127 | Windows 登录后窗口焦点未正确恢复 | ✅ 已合并 |

**无未修复的活跃 Bug。** 所有已识别问题均有对应 PR 且已全部合并。

---

## 6. 功能请求与路线图信号

从昨日合并的 PR 中可识别以下路线图方向：

| 信号 | 来源 PR | 推断方向 |
|------|---------|----------|
| **数据可移植性** | #2125、#2126、#2128 | 用户数据备份/恢复/迁移服务正在构建，可能延伸至跨设备同步或云备份 |
| **桌面端认证体验** | #2122、#2127、#2129 | 本地回调登录 + Windows 焦点管理 + 诊断日志，表明团队正在系统性解决 Electron 桌面端登录链路 |
| **模型管理自动化** | #1522 | 动态模型列表获取已落地，后续可能延伸至模型推荐、自动切换等 |
| **网关可观测性** | #2123 | 网关地址/状态/进度条暴露，为后续远程管理、多实例监控打基础 |
| **多平台 IM 集成完善** | #1510、#1514 | QQ Bot 白名单修复 + 定时任务通知校验，IM 集成健壮性持续补强 |
| **Cowork 协作增强** | #1526、#2110 | 会话颜色标注 + 大载荷防护，cowork 模块正在快速迭代 |

**待合并的功能型 PR**：
- **PR #1277** — Dependabot 自动更新 Electron 40.2.1 → 42.3.3 及 electron-builder，已开启近 2 个月仍未合并，建议尽快处理以避免依赖版本差距过大。
  🔗 [netease-youdao/LobsterAI/pull/1277](https://github.com/netease-youdao/LobsterAI/pull/1277)

---

## 7. 用户反馈摘要

昨日无新开 Issue，从已合并 PR 的原始问题描述中可提炼以下用户痛点：

| 痛点 | 场景 | 情绪 |
|------|------|------|
| 日志导出超时 | 用户在设置页点击「导出日志」，等待 30 秒后看到「Log export timed out」 | 😤 沮丧 |
| QQ Bot 群组白名单无法配置 | 切换为 allowlist 模式后无输入框，白名单功能形同虚设 | 😤 功能缺失 |
| Copilot Token 静默丢失 | OAuth 认证成功后关闭 Settings，Token 丢失需重新认证 | 😤 数据丢失 |
| 定时任务 IM 通知静默失败 | 创建任务时未选会话也能提交，运行时通知无感知失败 | 😕 困惑 |
| 模型列表无法自动更新 | 新模型发布后需手动逐一添加 | 😕 不便 |
| 测试连接失败信息不透明 | 仅显示「连接失败: 0」，无法定位问题 | 😕 不便 |

**整体情绪倾向**：用户对静默失败类问题（Token 丢失、通知失败、日志导出超时）的不满程度最高，这类问题缺乏可见的错误反馈，导致用户需要反复尝试或重新操作。

---

## 8. 待处理积压

| 项目 | 详情 | 建议 |
|------|------|------|
| **PR #1277** — Electron 依赖升级 | Dependabot 自动 PR，Electron 40.2.1 → 42.3.3，已开启 **68 天**（2026-04-02），最后更新 2026-06-08 | ⚠️ 大版本跨度升级（40→42），建议尽快安排兼容性测试并合并，避免后续合并冲突加剧 |
| **Stale PR 积压** | 昨日合并的 stale PR（#1510、#1514、#1515、#1517、#1521、#1522、#1524、#1526）均创建于 2026-04-07，积压约 2 个月后集中合并 | ✅ 积压已清理，建议审视 stale 标记策略，避免 PR 长期无人审查 |

**当前开启 PR 总数：1 条**（#1277），积压压力极低。

---

> **日报总结**：LobsterAI 昨日处于高产出状态，18 条 PR 集中合并，核心架构方向明确（认证重构 + 数据迁移 + 网关可观测性），Bug 修复覆盖全面且全部关闭。唯一需要关注的是 Electron 大版本依赖升级 PR 已积压 68 天，建议优先处理。项目整体健康度 **良好**。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报

**日期：2026-06-09 | 数据来源：github.com/TinyAGI/tinyagi**

---

## 1. 今日速览

TinyClaw 今日整体活跃度处于**低位平稳状态**。过去 24 小时内无新 Issue 产生，无版本发布，仅有一条 PR 处于开放状态。项目当前无紧急问题积压，社区互动量极低，属于典型的维护期节奏。唯一的活跃信号来自 PR #280，表明仍有贡献者在关注安装体验的改进。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日无已合并或已关闭的 PR，项目功能层面无实质性推进。

唯一开放的 PR 为：

- **PR #280 — fix(install): add postinstall script to auto-rebuild better-sqlite3**
  - 作者：dsy122 | 状态：OPEN | 创建于 2026-06-08
  - 链接：https://github.com/TinyAGI/tinyagi/pull/280
  - 内容：在 `package.json` 中添加 `postinstall` 脚本，使 `npm install` 后自动触发 `better-sqlite3` 的本地编译，免去用户手动执行 `npm rebuild better-sqlite3` 的步骤。
  - 意义：若合并，将显著降低新用户的安装门槛，消除因原生 C++ addon 未编译导致的首次运行报错。

---

## 4. 社区热点

今日无活跃讨论。过去 24 小时内 Issues 和 PR 均无新增评论，社区处于静默状态。

---

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

值得关注的是 PR #280 所针对的**安装阶段稳定性隐患**：`better-sqlite3` 作为原生 C++ 扩展，在全新安装环境下若未针对当前 Node.js 运行时重新编译，会导致运行时错误。该问题虽未被正式记录为 Issue，但属于已知的安装体验缺陷，PR #280 提供了对应的修复方案，目前等待维护者审核合并。

---

## 6. 功能请求与路线图信号

今日无新的功能请求。

从 PR #280 的信号来看，项目当前的开发重心偏向**开发者体验（DX）和安装流程优化**，而非新功能扩展。短期内路线图可能聚焦于降低上手成本、提升开箱即用体验。

---

## 7. 用户反馈摘要

今日无新的用户反馈。

PR #280 的提交本身间接反映了真实用户痛点：**原生依赖（better-sqlite3）在 fresh install 场景下的编译失败问题**。这说明部分用户在首次部署 TinyClaw 时遇到了环境兼容性问题，属于典型的"首次使用摩擦"。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 作者 | 状态 | 等待时长 | 优先级 |
|------|------|------|------|------|----------|--------|
| PR | #280 | fix(install): add postinstall script to auto-rebuild better-sqlite3 | dsy122 | OPEN | 1 天 | ⚠️ 中 |

**维护者关注建议：**

- **PR #280** 已开放 1 天，改动范围小、风险低（仅新增 postinstall 脚本），建议尽快 review 并合并。该 PR 直接解决新用户安装失败问题，合并后可减少后续重复性 Issue 的产生。

---

## 项目健康度评估

| 维度 | 状态 | 说明 |
|------|------|------|
| 活跃度 | 🟡 低 | 24h 内仅 1 条 PR，无 Issue 活动 |
| 稳定性 | 🟢 稳定 | 无新 Bug 报告 |
| 社区参与 | 🟡 低迷 | 无评论、无讨论 |
| 维护响应 | 🟡 待观察 | PR #280 尚未被 review |
| 版本节奏 | ⚪ 停滞 | 无新版本发布 |

**总结：** TinyClaw 当前处于低活跃维护期，无紧急风险。建议维护者优先处理 PR #280 以改善安装体验，同时关注社区沉寂是否意味着用户流失或项目进入稳定期。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报

**日期：2026-06-09**

---

## 1. 今日速览

CoPaw 今日活跃度处于**高位**，过去 24 小时共产生 **49 条 Issue 更新**（新开/活跃 26 条，关闭 23 条）和 **45 条 PR 更新**（待合并 22 条，已合并/关闭 23 条），社区参与度非常旺盛。从节奏看，项目正处于密集的 **v1.1.10 → v1.1.11 修复周期**：大量积压 Bug 正在被集中关闭（23 条 Issues、23 条 PR 在同一天关闭说明有集中合并或清理动作），同时新问题和新功能提案持续涌入。值得关注的是，底层框架从 AgentScope 1.x 升级至 2.0 的 Breaking Change 正在推进中（#4727），加之多个安全性和稳定性修复 PR 今日打开，项目整体处于 **稳定性攻坚 + 架构升级并行** 的阶段。无新版本发布。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 涵盖多处关键修复和功能推进：

| PR | 状态 | 摘要 |
|---|---|---|
| **#5018** fix: propagate ModelInfo.max_input_length to AgentScope context_size for auto-compaction | ✅ 已合并 | 将 QwenPaw 的 `ModelInfo.max_input_length` 桥接至 AgentScope 2.0 的 `model.context_size`，使原生 `compress_context()` 能感知用户配置的上下文窗口，修复了 auto-compaction 无限压缩的根因 |
| **#4286** fix(console): localize session and cron job controls | ✅ 已合并 | 完成 Sessions 和 Cron Jobs 页面的国际化补全（含印尼语），改善非英语用户的控制台体验 |
| **#2771** fix(install): restrict mlx-lm to Apple Silicon macOS | ✅ 已合并 | 长达 2 个月的首 contributor PR 终于合入，修复 mlx-lm 被错误安装到非 Apple Silicon 机器的问题 |
| **#4949** feat(acp): advertise commands, surface errors, tool params, agent/model meta, file links | 已关闭 | 扩展 ACP（Agent Client Protocol）服务器元数据，使 paw TUI 等客户端获得更好的聊天体验 |
| **#4340** test: app/runner + app/routers 单元测试覆盖 (Phase 3) | ✅ 已合并 | 核心运行时和 API 入口的单测覆盖大幅提升 |

**新打开的重要 PR：**

| PR | 摘要 | 潜在影响 |
|---|---|---|
| **#5028** fix(security): isolate keychain master key per install | 安全隔离各安装实例的主密钥，防止同一机器上的多实例共享 keychain 条目 | 🔴 安全关键 |
| **#5027** feat(acp): stop backend-warmup sessions from polluting the console; add session resume | 清理每次启动遗留的 "Warm up" 垃圾会话，增加会话恢复能力 | 🟡 用户体验 |
| **#5023** feat(plugins): add Plugin Market tab with AgentScope Platform integration | 新增插件市场标签页，支持从 AgentScope Platform 浏览和安装社区插件 | 🟢 生态建设 |
| **#5014** fix(mcp): prevent subprocess accumulation across restarts (#4834) | 修复 MCP 子进程在 Docker 重启后累积泄漏 | 🔴 稳定性 |
| **#4997** WIP: Plugin extension infrastructure | 统一前端扩展点注册机制（Menu/Route/Slot Registry） | 🟢 架构演进 |

**综合评估：** 项目在稳定性（MCP 泄漏修复、session 文件名校验、内存压缩崩溃修复）和用户体验（ACP 增强、控制台本地化、插件市场）两个维度同时推进。AgentScope 2.0 迁移（#4727）已通过 PR #5018 输出了第一个可合并的子任务，说明大升级正在分步落地。整体向前推进约 **1-1.5 个迭代**的节奏。

---

## 4. 社区热点

### 🔥 Issue #4477 — WeChat iLink 定时任务推送失败（15 条评论，已关闭）
**链接：** https://github.com/agentscope-ai/CoPaw/issues/4477
- **诉求：** 微信 iLink Bot 通道下，`context_token` 过期后 ret=-2 无重试逻辑，图片/文件发送失败无日志。这是企业微信通道用户的核心痛点。
- **意义：** 评论数最多（15条），说明大量用户受到此 Bug 影响，且持续了近 3 周。今日关闭说明修复已合并，但需关注是否覆盖全场景。

### 🔥 Issue #5017 — 建议借鉴 Hermes Agent 的"学习循环"（7 条评论，👍1，开放）
**链接：** https://github.com/agentscope-ai/CoPaw/issues/5017
- **诉求：** 用户建议参考 Hermes Agent（2 个月 46k+ Star）的 Learning Loop 理念，让 QwenPaw 的 Agent 能从自身行为中自动创建并迭代技能。
- **意义：** 这是一个关于 Agent 能力自进化方向的战略性建议。结合 Issue #4994（记忆系统自进化）和 PR #4443（goal mode），社区的诉求非常清晰：**QwenPaw 需要更强的自主学习和长期记忆能力。**

### 🔥 Issue #4727 — Migrate backend from AgentScope 1.x to AgentScope 2.0（6 条评论，👍2）
**链接：** https://github.com/agentscope-ai/CoPaw/issues/4727
- **诉求：** 将从 `agentscope==1.0.20` 升级至 2.0，这是一个标记为 Breaking Change 的架构级迁移。
- **意义：** 👍2 表明社区支持升级。PR #5018 已合入一个子任务，但整体迁移范围仍大，需要持续跟踪。

### 🔥 Issue #4123 — Windows execute_shell_command 每次弹出控制台窗口（9 条评论，已关闭）
**链接：** https://github.com/agentscope-ai/CoPaw/issues/4123
- **诉求：** Windows 下每次 shell 调用都会闪烁弹窗，体验极差。
- **意义：** 这是 Windows 用户的老大难问题，今日关闭意味着修复就绪。

### 🔥 PR #5023 — Plugin Market Tab（今日打开）
**链接：** https://github.com/agentscope-ai/CoPaw/pull/5023
- **意义：** 插件市场的引入标志着 CoPaw 从"工具型 Agent"向"平台型 Agent"演进的信号。与 Issue #5017 中用户提到的生态需求形成呼应。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 Critical — 崩溃/数据丢失

| # | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| **#5019** | 内存压缩期间 `as_msg_handler.py` 报 `AttributeError: 'str' object has no attribute 'get'` 崩溃 | 已关闭 | ✅ 已修复 |
| **#4895** | 图片无限压缩循环导致幻觉（infinite loop） | 开放 | ⏳ 待修复 |
| **#4970** | `loop_config.json` / `prd.json` 损坏导致整个 Agent 会话崩溃（JSONDecodeError 未捕获） | 开放 | ⏳ 待修复 |

### 🟠 Major — 功能失效

| # | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| **#4477** | WeChat iLink 定时任务推送失败（token 过期无重试） | 已关闭 | ✅ 已修复 |
| **#4408** | 工作目录文件散落，建议统一放入 `.qwenpaw` 目录 | 已关闭 | ✅ 已修复 |
| **#4918** | MCP 工具名含 "." 时 gpt-5.5 校验失败 | 已关闭 | ✅ 已修复 |
| **#4585** | 自建插件工具在企微通道未被 Agent 自动发现 | 已关闭 | ✅ 已修复 |
| **#5003** | 阿里 Coding Plan qwen3.7-plus 卡死 | 开放 | ⏳ 待确认 |
| **#4834** | MCP 子进程累积导致控制台加载缓慢 | 开放 | PR #5014 已打开 |
| **#4877** | custom channel 每次保存设置都停止监听 | 已关闭 | ✅ 已修复 |
| **#4926** | OneBot 监听修复未完成（端口未释放） | 开放 | ⏳ 待完成 |

### 🟡 Minor — 体验降级

| # | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| **#5015** | Windows Desktop 1.1.11 及以下前端加载不流畅 | 开放 | ⏳ 待修复 |
| **#4300** | Agent 回复内容重复（duplication） | 已关闭 | ✅ 已修复 |
| **#5016** | Web Console 多 Agent 聊天不稳定 | 开放 | ⏳ 待修复 |
| **#4993** | 图片预览放大拖动抖动 | 开放 | ⏳ 待修复 |
| **#4123** | Windows shell 弹窗闪烁 | 已关闭 | ✅ 已修复 |
| **#5013** | KimiCode API thinking 内容不显示 | 开放 | ⏳ 待修复 |
| **#4587** | 退出后遗留 qwenpaw app 后端进程 | 已关闭 | ✅ 已修复 |
| **#4151** | 聊天列表中出现孤儿条目 | 已关闭 | ✅ 已修复 |

---

## 6. 功能请求与路线图信号

| 方向 | Issue | 已有对应 PR | 信号强度 |
|---|---|---|---|
| **视觉模型独立配置** | [#4992 Visual Model Fallback](https://github.com/agentscope-ai/CoPaw/issues/4992) | 无 | 🟡 中 — 纯文本主模型 + 视觉中转的场景真实 |
| **记忆系统自进化** | [记忆系统自进化](https://github.com/agentscope-ai/CoPaw/issues/4994) | 无 | 🔴 高 — 结合 #5017（Hermes 学习循环），这是社区最高频的战略诉求 |
| **Agent 学习循环** | [#5017 Hermes Learning Loop](https://github.com/agentscope-ai/CoPaw/issues/5017) | 无 | 🔴 高 — 与记忆自进化形成完整闭环 |
| **Plugin Market（插件市场）** | — | PR #5023 已打开 | 🔴 高 — 代码已在推进 |
| **ACP 增强** | — | PR #4949（已关闭）、PR #5027（开放） | 🟡 中 — 架构分步落地 |
| **会话 Goal 模式** | — | PR #4443（开放，stale 约 3 周） | 🟡 中 — 需要 reviewer 跟进 |
| **Tauri 桌面自动更新** | — | PR #4669（开放） | 🟡 中 — Mac/Windows 桌面体验改善 |
| **企业微信工具感知** | 用户希望关闭工具调用时仍返回工具信息 | Issue #4990 | 低 — 尚未对应 PR |
| **9router 支持** | Issue #5001 | 无 | 低 — 用户需求不明确，等待更多信息 |

**预判：** Focus 可能优先解决稳定性（MCP 压缩、崩溃修复、内存压缩），然后推进 **Plugin Market**（#5023，代码已近就绪）和 **视觉模型 fallback**（#4992，👍1 但无竞争提案）。长期来看，**学习循环 + 记忆自进化**的组合功能将是区分 CoPaw 与 Hermes/OpenClaw 的核心竞争力。

---

## 7. 用户反馈摘要

**满意点：**
- 🔹 本地化体验好，开箱即用（Issue #5017："国内用起来特别舒服——本地化做得很到位，设置清晰无门槛"）
- 🔹 社区活跃响应快，大量积压 Issue 今日被集中关闭

**不满意的痛点（按频率排列）：**
1. **微信/企微通道稳定性差** — token 过期无重试（#4477）、建行插件工具不被感知（#4585）、关闭工具调用时返回错误信息（#4990）。**企微/微信是最高频崩溃场景。**
2. **Windows 体验差** — 弹窗闪烁（#4123）、Desktop 版卡顿 CPU 激增（#5015）。Windows 用户群体大但体验欠债多。
3. **内存/子进程管理混乱** — MCP 子进程累积（#4834）、内存压缩崩溃（#5019）、图片无限压缩循环（#4895）。系统级资源管理是**架构债**。
4. **多 Agent 和子 Agent 不稳定** — 子 Agent 并发导致主 Agent 无限轮询（#4873）、多 Agent 注册失败（#5016）。
5. **记忆和上下文管理薄弱** — 用户明确提到"记忆系统功能比较薄弱"（#4994）。

**使用场景画像：**
- **企业用户：** 通过企业微信/微信 iLink 使用，刚需定时任务推送
- **开发者/研究者：** 使用 Docker 部署，关注 MCP 工具集成和子 Agent 编排
- **个人用户：** 使用 Desktop 版，关注前端流畅度和开箱即用体验

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于 stale 状态，建议维护者关注：

| # | 类型 | 标题 | 创建日期 | 最后活跃 | 风险 |
|---|---|---|---|---|---|
| **#4895** | Bug | 图片无限压缩循环 | 2026-06-02 | 2026-06-08 | 🔴 可能导致 Agent 幻觉 |
| **#4970** | Bug | JSON 配置损坏导致会话崩溃 | 2026-06-05 | 2026-06-08 | 🔴 数据完整性 |
| **#4873** | Bug | 双子 Agent 并发导致无限轮询 | 2026-06-01 | 2026-06-08 | 🟠 飞书侧无法打断 |
| **#4926** | Bug | OneBot 监听修复未完成 | 2026-06-03 | 2026-06-08 | 🟠 频道完全不可用 |
| **#4443** | PR | feat: lightweight goal mode | 2026-05-16 | 2026-06-08 | 🟡 stale 3 周，需 review |
| **#4622** | PR | feat: DataPaw data-analysis plugin | 2026-05-22 | 2026-06-08 | 🟡 stale 2 周，需 review |
| **#4669** | PR | feat: Tauri auto updater | 2026-05-25 | 2026-06-08 | 🟡 stale 2 周，需 review |
| **#4838** | Feature | Suppress final text after tool calls | 2026-05-31 | 2026-06-08 | 🟡 静默工具执行需求 |
| **#4606** | Question | 大模型自主规划中增加中途干预 | 2026-05-21 | 2026-06-08 | 🟡 用户引导需求 |

**特别提醒：**
- **#4895（图片无限压缩）** 和 **#4970（JSON 损坏崩溃）** 是可能导致用户数据丢失或 Agent 行为异常的严重 Bug，建议优先分配资源。
- **#4443（goal mode）** 和 **#4622（DataPaw 插件）** 是社区贡献者等待 review 的 PR，长期不处理可能打击贡献者积极性。

---

*数据来源：agentscope-ai/CoPaw GitHub 仓库 | 统计时间窗口：2026-06-08 至 2026-06-09*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-09

---

## 1. 今日速览

ZeroClaw 今日活跃度极高：过去 24 小时内 **50 条 Issues 更新**（49 新开/活跃，仅 1 条关闭）、**50 条 PR 更新**（39 条待合并，11 条已合并/关闭），无新版本发布。项目处于高并发贡献期，社区提交节奏明显加快，但积压也在同步增长——待合并 PR 数量（39）显著高于已合并数量（11），提示 reviewer 资源可能成为瓶颈。整体来看，项目在安全架构、插件系统、多渠道路由等方向上有多条并行推进线，但大量 P1 级 Bug 仍处于 `in-progress` 状态，尚未形成闭环。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 11 条，以下为最具代表性的几项：

| PR | 状态 | 说明 |
|---|---|---|
| [#7403](https://github.com/zeroclaw-labs/zeroclaw/pull/7403) | ✅ 已合并 | **修复 `trim_history` 孤儿消息级联清空全部对话的严重 Bug**——当孤儿移除逻辑误判时，会导致整个对话历史被清空，代理陷入无上下文状态。此修复增加了安全守卫，检测到级联将耗尽所有非系统消息时跳过 trim。 |
| [#6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701) | ✅ 已合并 | **修复 Telegram 消息分割时 Markdown 代码围栏被截断的问题**——`split_message_for_telegram` 现在精确计算续行标记和代码围栏开闭标记的实际长度，避免拆分后出现裸露的代码块。 |
| [#7352](https://github.com/zeroclaw-labs/zeroclaw/pull/7352) | 🟢 待合并 | 为 Web Dashboard 的 cron 设置加载/保存失败添加上下文警告日志，改善运维可观测性。 |
| [#7383](https://github.com/zeroclaw-labs/zeroclaw/pull/7383) | 🟢 待合并 | 修复 CI 标签器中 `file` 和 `shell` 工具的路径映射缺失，确保 PR 自动标注流程正常运作。 |

**整体判断：** 项目在稳定性修复（历史修剪、消息分割）和开发者体验（CI 标签器、日志改进）上稳步推进，但核心架构级功能（安全提供者接口、MCP 资源支持、计算机使用）仍停留在 RFC 阶段，尚未进入实现合并。

---

## 4. 社区热点

以下按评论数排序，展示今日讨论最活跃的 Issues：

### 🔥 Issue [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) — `tool_filter_groups` 对真实 MCP 工具完全失效（7 条评论）
**标签：** bug · high risk · P1 · MCP · config · runtime
**核心诉求：** 用户发现 `tool_filter_groups` 配置项在文档中描述清晰、解析正常，但对 MCP 工具表面（tool surface）毫无过滤效果。根因是调度时的前缀检查逻辑存在 Bug，且与 `deferred_loading` 机制无集成。这是配置系统与运行时之间的信任断裂——用户以为自己在限制工具暴露范围，实际上所有工具都未被过滤。

### 🔥 Issue [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — RFC：桌面屏幕交互与输入控制的计算机使用能力（6 条评论）
**标签：** enhancement · high risk · P2 · RFC · desktop · screenshot
**核心诉求：** 对标 OpenAI Codex 和 openclaw/hermes 的 computer-use 能力，要求 ZeroClaw 支持截屏和鼠标/键盘事件发送。这代表了用户对"让 AI 代理真正操作本地桌面"的强烈需求，属于平台能力边界的扩展。

### 🔥 Issue [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) — RFC：将翻译文件移入 git 子模块（5 条评论）
**标签：** enhancement · medium risk · P3 · RFC · i18n · architecture
**核心诉求：** 将 `.ftl` 和 `.po` 翻译文件从主仓库中分离到独立 git 子模块，使翻译变更历史与代码变更解耦。这是国际化维护规模化的架构决策。

### 🔥 Issue [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) — 禁用 LeakDetector 高熵令牌脱敏的配置选项（4 条评论）
**标签：** enhancement · high risk · P2 · security
**核心诉求：** `LeakDetector` 的高熵启发式误报严重——MD5 文件名、微信媒体文件等合法内容被替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`。用户需要细粒度控制开关。

### 🔥 Issue [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) — RFC：将安全执行层暴露为可插拔提供者接口（4 条评论）
**标签：** enhancement · high risk · P2 · RFC · security · architecture · v0.9.0
**核心诉求：** 将内置的安全执行、报告和事件响应机制抽象为统一 trait，允许外部实现替换。这是安全架构模块化的关键一步。

### 🔥 Issue [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — RFC：高风险 Shell 命令的逐次确认层 + Claude Code 风格命令策略（4 条评论）
**标签：** enhancement · high risk · P1 · RFC · shell
**核心诉求：** 当前 ZeroClaw 对高风险 shell 命令只有"允许/拒绝"两档，用户需要中间档——"允许运行，但每次执行需手动确认"，并引入 allow/ask/deny 模式匹配策略。

### 🔥 Issue [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — RFC：OIDC 认证提供者支持（4 条评论）
**标签：** enhancement · high risk · P1 · RFC · security · architecture · v0.9.0
**核心诉求：** 支持 OIDC 认证提供者，属于 v0.9.0 安全/架构跟踪项。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

### 🔴 S0/S1 — 工作流阻断 / 数据丢失风险

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | `file_write` 工具静默失败，写入文件在宿主机上不可见 | in-progress · P1 | [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) 待合并 |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | WSL2 中连续 OOM 导致进程被 kill | in-progress · P1 | 无 |
| [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | Gemini 400 错误——历史序列化违反 assistant turn 必须在 user turn 之后的约束 | in-progress · P1 | 无 |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | `context_compression` 丢弃 assistant(tool_calls) 和 tool(result)，导致 MiniMax 等兼容提供商工具循环 | in-progress · P1 | 无 |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | `autonomy level = "full"` 时 shell 工具调用被拒绝，`tool_dispatch` 未到达运行时 | in-progress · P1 | 无 |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | Cron 作业在运行中可被重复触发（调度器缺少运行锁） | in-progress · P1 | 无 |
| [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) | `[runtime_profiles.*].max_tool_iterations` 配置项无效，必须在 `[agents.*]` 上设置 | in-progress · P1 | 无 |

### 🟡 S2/S3 — 行为降级 / 轻微问题

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | MCP tool_filter_groups 前缀检查 Bug | accepted · P1 | 无 |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp Web LID 联系人绕过 allowed-numbers 静默丢消息 | in-progress · P1 | [#6973](https://github.com/zeroclaw-labs/zeroclaw/pull/6973) 待合并 |
| [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) | XML tool_result 标签泄漏到频道响应 | in-progress · P2 | [#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796) 待合并 |
| [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) | SkillImprover 只处理 `SKILL.toml`，不处理 `manifest.toml` | accepted · P2 | 无 |
| [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | `skill_manage patch` 忽略冷却时间，可无限次写入 | in-progress · P2 | 无 |
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | 频道运行时命令回复绕过 Fluent 本地化 | in-progress · P2 | 无 |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Telegram 频道下 Prompt Caching 不工作 | in-progress · P2 | 无 |
| [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) | 飞书集成后默认只调用 LLM 而非 Agent | accepted · P2 | 无 |

**稳定性评估：** 当前有 **7 个 P1 in-progress Bug** 无对应 Fix PR，涉及核心运行时（OOM、cron 重复触发、shell 工具调度、上下文压缩、配置项失效），项目稳定性风险较高。`file_write` 静默失败（#4627）和 `trim_history` 清空对话（#7403 已合并）属于数据完整性问题，优先级应最高。

---

## 6. 功能请求与路线图信号

结合 RFC 标签和 v0.9.0 跟踪项，以下功能需求最可能纳入下一版本：

| 方向 | 相关 Issue(s) | 信号强度 | 判断依据 |
|---|---|---|---|
| **安全架构模块化** | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (安全提供者接口) + [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (OIDC) + [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (Shell 确认层) | ⭐⭐⭐⭐⭐ | 三个 RFC 均标记 v0.9.0 tracking，形成安全架构改造的完整闭环 |
| **MCP 完整支持** | [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) (MCP resource/prompt) + [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) (tool_filter_groups Bug) | ⭐⭐⭐⭐ | MCP 生态集成是差异化竞争力，但 filter Bug 需先修复 |
| **计算机使用 (Computer-use)** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | ⭐⭐⭐ | 对标 OpenAI Codex，但实现复杂度高，可能延后 |
| **插件系统完善** | [#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337) (插件工具命名空间) + [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) (WIT 接口定义) | ⭐⭐⭐⭐ | PR 已在活跃审查中，接近合并 |
| **内存策略解耦** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) + [#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234) | ⭐⭐⭐⭐ | 三阶段改造的最后一阶段 PR 已开放 |
| **本地优先模式** | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | ⭐⭐⭐ | 针对 Ollama 等本地模型的紧凑提示模式，有实际用户场景 |
| **i18n 架构调整** | [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) | ⭐⭐ | 仓库结构优化，非功能性需求 |

---

## 7. 用户反馈摘要

从今日 Issues 评论和描述中提炼的真实痛点：

**🔧 配置与实际行为不一致（信任危机）**
- `tool_filter_groups` 文档写得好、解析正常，但运行时完全不生效（#6699）——用户感到被配置系统欺骗。
- `max_tool_iterations` 放在 `runtime_profiles` 不生效，必须放在 `agents`（#6877）——配置项的实际作用域与直觉不符。
- `autonomy level = "full"` 下 shell 工具仍被拒绝（#6434）——"full autonomy" 的承诺未兑现。

**🔒 安全机制过于粗暴**
- LeakDetector 高熵脱敏误报严重，MD5 文件名、微信媒体文件被脱敏（#4832）——安全工具反而破坏了正常数据流。
- 用户需要 allow/ask/deny 三档策略而非简单的二元开关（#7155）。

**📡 渠道集成深度不足**
- 飞书集成后只调 LLM 不调 Agent（#4873）——渠道与 Agent 的集成存在默认行为偏差。
- Telegram 下 Prompt Caching 不工作（#6360）——同一功能在不同渠道下表现不一致。
- WhatsApp LID 联系人静默丢消息（#6350）——安全策略（allowed-numbers）在新场景下产生副作用。

**💻 本地/边缘场景需求明确**
- WSL2 OOM 问题（#5542）——Windows 用户群体的实际痛点。
- 本地模型紧凑模式（#5287）——Ollama 用户希望减少提示泄漏和 token 消耗。
- 计算机使用能力（#6909）——用户期望 ZeroClaw 能像 Codex 一样操作桌面。

---

## 8. 待处理积压

以下长期未响应或处于关键路径的 Issue/PR 需维护者重点关注：

| 项目 | 创建时间 | 年龄 | 风险 | 说明 |
|---|---|---|---|---|
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) WSL2 OOM | 2026-04-09 | 2 个月+ | 🔴 S0 | 数据丢失风险，无 Fix PR，in-progress 但无实质进展 |
| [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) file_write 静默失败 | 2026-03-25 | 2.5 个月+ | 🔴 S0 | Fix PR #7129 已开放 5 天但未合并 |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) Gemini CLI OAuth 不工作 | 2026-03-28 | 2.5 个月+ | 🔴 S1 | 👍2，有用户需求但无 Fix PR |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) Cron 重复触发 | 2026-04-23 | 1.5 个月+ | 🔴 P1 | 调度器缺少运行锁，可能导致级联故障 |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) context_compression 丢工具调用 | 2026-05-04 | 1 个月+ | 🔴 S1 | 影响所有 OpenAI 兼容提供商（MiniMax 等） |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) MCP resource/prompt 支持 | 2026-03-24 | 2.5 个月+ | 🟡 P2 | 👍4，社区需求明确但无实现 PR |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 个提交在批量 revert 后需恢复 | 2026-04-24 | 1.5 个月+ | 🟡 架构 | 大量已审核代码丢失，需系统性恢复 |
| [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) file_write Fix PR | 2026-06-03 | 5 天 | 🔴 | 修复 S0 Bug 的 PR，建议优先合并 |
| [#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796) XML tool_result 泄漏修复 | 2026-04-16 | 接近 2 个月 | 🟡 | 修复 PR 长期未合并 |

**⚠️ 关键提醒：**
- **#4627 / #7129**（file_write 静默失败 + Fix PR）组合是最高优先级——S0 数据丢失风险，Fix PR 已等待 5 天。
- **#6037**（Cron 重复触发）在 1.5 个月内无任何代码推进，但可能导致生产环境中的级联故障。
- **#4467**（MCP resource/prompt）有 👍4 的社区支持，是 MCP 生态完整性的关键缺口，建议排入 v0.9.0。

---

*日报生成时间：2026-06-09 | 数据来源：GitHub API | 分析引擎：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*