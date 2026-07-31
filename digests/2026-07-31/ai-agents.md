# OpenClaw 生态日报 2026-07-31

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-31 02:09 UTC

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

⚠️ 摘要生成失败。

---

## 横向生态对比

---

# 个人 AI 助手与自主智能体开源生态横向对比分析报告（2026-07-31）

## 1. 生态全景
当前个人 AI 助手/自主智能体开源生态呈现 **“百花齐放、分层演进、安全优先”** 的高活跃态势。以 **OpenClaw** 为核心内核的 “Claw 系” 项目（IronClaw、ZeroClaw、PicoClaw、NanoClaw、ZeptoClaw）构成了最庞大的技术派系，Rust 与 Go 为主导语言；**NanoBot、Hermes Agent、CoPaw/QwenPaw、LobsterAI、Moltis** 等独立线路分别切入开发者工具、桌面原生、企业协作、多模态交互等细分赛道。全生态共识已从“功能堆砌”转向 **“架构重构偿还技术债、上下文/记忆体系重构、供应链与运行时安全基线夯实、Computer Use 原生化”** 四大核心主线，版本发布节奏加快但破坏性变更风险并存。

---

## 2. 各项目活跃度对比

| 项目 | 核心语言/定位 | Issues (24h 新增/活跃) | PRs (24h 合并/待合并) | Release (今日) | 健康度评级 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **NanoBot** | Go / 多渠道开发者助手 | 7 (5新) | **31 / 17** | 无 | 🟢 **优** | 高密度修复、SQLite迁移、WebUI现代化、回归零积压 |
| **Hermes Agent** | TS/Rust / 桌面优先/托管部署 | 50 (0闭合) | 2 / 48 | **v0.19.1** | 🟡 **关注** | 积压>消化、Win/macOS更新器阻塞、配置注入RCE(P1)、安全债集中爆发 |
| **PicoClaw** | Go / 边缘/物联网/多协议网关 | 7 | ~5 / 12 | 无 | 🟢 **高** | 依赖现代化、渠道完善(钉钉/IRC/DeltaChat)、OAuth MCP停滞 |
| **NanoClaw** | Go / 容器原生/技能生态 | 2 (2新/P0) | 5 / 12 | 无 | 🟠 **有风险** | 镜像硬化回滚、Sigstore签名、**Slack/Registry双P0回归阻断** |
| **IronClaw** | Rust / 高吞吐/多租户/平台级 | 38 | 0 / 50 | 无 | 🟢 **高速** | “Reborn”架构落地(WS0合并)、跨用户内存泄漏(P0/Sec)、技能系统重写 |
| **LobsterAI** | TS/Electron / 企业协作/闭源驱动 | 0 | **10 / 0** | **v2026.7.29** | 🟢 **稳** | 侧边栏协作、账号隔离重构、Win安装器修复、邮件路径穿越修复、长期PR积压 |
| **Moltis** | Go / 可观测性/Slack深度集成 | 2 (1 Critical Sec) | 1 / 3 | 无 | 🟠 **关键** | **Vault认证缺失(CWE-306, P0)**、Slack BlockKit合并、权限模型硬化 |
| **CoPaw/QwenPaw** | TS/Tauri / Qwen生态/Computer Use先锋 | 24 (18活跃) | **25 / 23** | 无 | 🟢 **高速** | v2.0架构债偿还(~2s延迟/记忆丢失/会话Fork混乱)、**Computer Use原生合并**、Creator插件增强 |
| **ZeroClaw** | Rust / 网关/平台/高定制化 | 14 (活跃) | 0 / **50** | 无 | 🟡 **瓶颈** | **Webhook鉴权绕过(S0, #9565)**、记忆分离RFC、OpenAI适配器、MoA路由、**Review吞吐成瓶颈** |
| **ZeptoClaw** | Rust / 极简/运行时安全基线 | 0 | 0 / 1 (滞后8天) | 无 | ⚪ **维护期** | 子进程环境清理/超时回收PR(#645)待合并、单维护者模式 |
| **NullClaw / TinyClaw** | - | 无活动 | 无活动 | 无 | ⚫ **静默** | - |
| **OpenClaw** | **(核心内核)** | **摘要生成失败** | - | - | - | **生态上游核心参照，数据缺失** |

> **数据说明**：PR 数含合并/关闭与待审；健康度综合考量合并率、P0阻塞、安全响应、架构演进平滑度。

---

## 3. OpenClaw 在生态中的定位
**核心上游内核 / 标准制定者 / 生态聚合中心**
*   **优势**：作为 “Claw 系” (IronClaw, ZeroClaw, PicoClaw, NanoClaw, ZeptoClaw) 共同的上游依赖，掌握核心 Runtime、Channel 抽象、Tool Calling 协议、Session/Memory 接口定义。拥有最大的下游分发网络和隐性社区规模。
*   **技术路线差

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-31

---

## 1. 今日速览

**整体状态：高活跃度、修复导向、架构演进并行**

过去 24 小时，NanoBot 仓库呈现**“高密度修复 + 核心重构推进”**双轨并行态势：共 48 条 PR 更新（31 合并/关闭，17 待合并），7 条 Issue 活跃（5 新开/活跃，2 关闭）。合并 PR 占比 65%，且集中在 P1 级回归修复（时区数据、会话锁泄漏、输出缓冲溢出、Cron 状态竞态、配对读取失败）、稳定性增强（Telegram 长轮询自愈、Responses API 推理链保留）与基础设施升级（CI 稳定化、会话存储 SQLite 迁移）。新增 Issue 多为环境兼容性（Termux 缺 tzdata）、模型交互异常（工具调用泄露、length finish_reason 路由错误）及渠道可靠性（Telegram 静默失联、WhatsApp 音频发送失败），反映用户场景向边缘环境与复杂多轮对话延伸。**项目健康度优**：关键回归均在 24h 内定位并合并修复，核心重构（SQLite 会话存储、WebUI Quick Chat）有序推进，技术债偿还与新功能交付平衡良好。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 🟢 已合并/关闭的关键 PR（31 条，选取高影响项）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | **CI/CD、性能、P1** | 移除时序依赖的 exec-session 测试，改用 stdin 就绪握手；批量合并 channel 依赖安装，顺序回退；整体 CI 耗时 ↓ 30%+，波动率 ↓ 90% | 全仓库开发效率、Release 可靠性 |
| [#5136](https://github.com/HKUDS/nanobot/pull/5136) | **回归修复、P1** | 修复 `finish_reason='length' 且 content 为空` 被误路由至 empty-response retry，现正确进入 length recovery 并保留 tool_calls | 所有 LLM Provider 长输出场景，避免工具调用丢失 |
| [#5150](https://github.com/HKUDS/nanobot/pull/5150) | **性能、稳定性、P1** | Exec 会话输出缓冲引入固定头/尾预算，生产端丢字符纳入截断统计，`wait_for` 聚合有界 | 长时间/高吞吐 Shell/代码执行任务，防 OOM |
| [#5151](https://github.com/HKUDS/nanobot/pull/5151) | **内存泄漏修复、P1** | `AgentLoop._session_locks` 改用 `WeakValueDictionary`，空闲会话锁自动回收 | 高并发多会话部署，内存线性增长 → 恒定 |
| [#5147](https://github.com/HKUDS/nanobot/pull/5147) | **数据一致性、P1** | Pairing store 读取失败不再清空已批准列表；读失败闭合、写失败显式报错 | 多渠道配对授权，防误踢合法用户 |
| [#5183](https://github.com/HKUDS/nanobot/pull/5183) | **Cron 状态一致性、P1** | 手动/定时执行共享 live store 保护，完成状态与运行历史在并发读取下保持一致 | 定时任务与 WebUI/API 交互可靠性 |
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | **Responses API 能力对齐** | 完整保留并回放 opaque output-item 链（含加密 reasoning），上下文压缩时保留推理链 | OpenAI Responses / Codex 多轮推理连贯性 |
| [#5181](https://github.com/HKUDS/nanobot/pull/5181) / [#5182](https://github.com/HKUDS/nanobot/pull/5182) / [#5184](https://github.com/HKUDS/nanobot/pull/5184) | **WebUI 重构** | 引入持久化 **Quick Chat**（复用会话/流式栈）、**Temporary Chat**（纯内存历史）、统一 Sidebar 高亮复用 | 用户交互入口现代化，降低新建会话认知负荷 |

### 🟡 待合并重点 PR（17 条，含冲突/需 Review）

| PR | 状态 | 关键点 | 风险/依赖 |
|----|------|--------|-----------|
| [#5189](https://github.com/HKUDS/nanobot/pull/5189) | **Open, P1** | 全平台安装 `tzdata` 解决 Termux/精简 Linux 缺 zoneinfo 问题，含 `UTC`/`Asia/Shanghai` 回归测试 | **阻塞 #5187**，建议优先合并 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | **Open** | Telegram polling 静默失联自愈：检测长轮询卡死 → 重置 offset → 指数退避重连 | 解决 #5171，需验证代理/网络抖动场景 |
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | **Open** | **会话存储 JSONL → SQLite 迁移**：首启事务导入、运行期仅 SQLite、JSONL 留档回滚 | 核心数据层重构，**需充分集成测试**，建议分阶段合并 |
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | **Open, Conflict** | Consolidation 锁从 `WeakValueDictionary` 改回 plain dict，防 GC 导致双锁并发 | 与 #5151 方向相反，**需架构裁决** |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **Open, P2** | Telegram 自定义 Bot API Base URL / Headers（自建/企业网关） | 企业级部署解锁，低风险 |
| [#4291](https://github.com/HKUDS/nanobot/pull/4291) | **Open, P2** | Spawn 子代理可指定命名 Model Preset（provider/model/temp/tokens） | 多模型编排能力增强 |

---

## 4. 社区热点

| 排名 | Item | 互动 | 核心诉求 |
|------|------|------|----------|
| 1 | [#5149](https://github.com/HKUDS/nanobot/issues/5149) *WhatsApp 音频发送失败* | 3 评论、0 👍 | `neonize.utils.ffmpeg` 警告 → 音频编码/传输链路断裂，**阻塞多媒体交互场景** |
| 2 | [#5185](https://github.com/HKUDS/nanobot/issues/5185) *模型回复中泄露 tool_calls 代码* | 1 评论、0 👍 | 突发性系统提示/解析失效，导致原始 function calling JSON 直达用户，**体验严重受损** |
| 3 | [#5171](https://github.com/HKUDS/nanobot/issues/5171) *Telegram polling 静默永久失联* | 0 评论、0 👍 | 网络抖动后长轮询卡死、进程存活、日志无告警，**可观测性缺失** → 已有 PR #5156 修复中 |
| 4 | [#5187](https://github.com/HKUDS/nanobot/issues/5187) *Termux 无法启动* | 0 评论、0 👍 | 缺系统时区数据库 → `zoneinfo` 验证失败，**边缘环境兼容性** → PR #5189 修复中 |
| 5 | [#3106](https://github.com/HKUDS/nanobot/issues/3106) *GPT 定时任务频现 "I completed the tool steps but couldn't produce a final answer"* | 0 评论、0 👍 | 特定模型（GPT 系列）工具调用后未生成最终回答，**Prompt/模型适配问题** |

> **热点分析**：用户痛点聚焦于 **“渠道可靠性（WhatsApp/Telegram）”** 与 **“模型输出结构化解析健壮性”**。Termux 等非标环境诉求虽小但反映边缘部署需求增长。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 生产可用性** | [#5171](https://github.com/HKUDS/nanobot/issues/5171) Telegram polling 静默失联 | Open | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | 无日志、无自愈，需紧急合并验证 |
| **P0 功能缺失** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp 不发音频 | Open | — | 涉及上游 `neonize`/ffmpeg，需排查编码参数 |
| **P1 回归** | [#5133](https://github.com/HKUDS/nanobot/issues/5133) `finish_reason=length` + tool_calls + 空内容 路由错误 | **Closed** | [#5136](https://github.com/HKUDS/nanobot/pull/5136) ✅ | 已合并，回归测试覆盖 |
| **P1 环境兼容** | [#5187](https://github.com/HKUDS/nanobot/issues/5187) Termux 启动校验失败 | Open | [#5189](https://github.com/HKUDS/nanobot/pull/5189) | 依赖 `tzdata` 打包，**建议今日合并** |
| **P1 体验破坏** | [#5185](https://github.com/HKUDS/nanobot/issues/5185) 响应中泄露 tool_calls 代码 | Open | — | 疑似 system prompt / parser 回归，**需复现定位** |
| **P2 旧问题复现** | [#3106](https://github.com/HKUDS/nanobot/issues/3106) GPT 定时任务工具调用后无最终回答 | Open | — | 长期存在，模型相关，建议纳入 Prompt 优化回归套件 |

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 现有 PR 支持 | 入版概率 | 备注 |
|------|------|--------------|----------|------|
| [#4702](https://github.com/HKUDS/nanobot/issues/4702) → [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram 自建 Bot API / 企业网关 | ✅ PR Ready | **高 (P2)** | 企业私有化部署刚需，代码变更小 |
| [#1899](https://github.com/HKUDS/nanobot/issues/1899) → [#4551](https://github.com/HKUDS/nanobot/pull/4551) | Heartbeat 共享会话模式 (`isolated_session: false`) | ✅ PR Ready | **中** | 多渠道同步场景，需文档补全 |
| [#3633](https://github.com/HKUDS/nanobot/issues/3633) → [#4021](https://github.com/HKUDS/nanobot/pull/4021) | Codex Responses API 推理项去重重试 | ✅ PR Ready (AI-assisted) | **中** | 影响 Codex 多轮稳定性，需人工 Review |
| 用户反馈 | WebUI “快速对话/临时对话” 入口 | ✅ [#5181](https://github.com/HKUDS/nanobot/pull/5181) [#5184](https://github.com/HKUDS/nanobot/pull/5184) | **高** | 已合并/待合并，下一版可发布 |
| 架构债 | 会话存储 SQLite 化 | 🟡 [#5173](https://github.com/HKUDS/nanobot/pull/5173) | **中长期** | 需迁移工具、回滚方案、性能基准 |

---

## 7. 用户反馈摘要

| 场景 | 痛点 / 正向反馈 | 代表 Issue/PR |
|------|----------------|---------------|
| **边缘部署** | Termux、Alpine、精简容器缺 `tzdata` 导致启动即崩；期望零配置跨平台 | [#5187](https://github.com/HKUDS/nanobot/issues/5187) |
| **多媒体交互** | WhatsApp 收音频正常、发音频失败；ffmpeg 警告无下文 | [#5149](https://github.com/HKUDS/nanobot/issues/5149) |
| **长对话/推理** | GPT 定时任务工具调用后“卡住”不出最终答；Responses API reasoning 链丢失上下文 | [#3106](https://github.com/HKUDS/nanobot/issues/3106) [#5172](https://github.com/HKUDS/nanobot/pull/5172) |
| **渠道稳定性** | Telegram 代理抖动后永久不收消息、无告警；需自愈+可观测 | [#5171](https://github.com/HKUDS/nanobot/issues/5171) |
| **UI/UX** | 期望类 ChatGPT “新建聊天/临时聊天” 一键入口，减少会话管理心智负担 | [#5184](https://github.com/HKUDS/nanobot/pull/5184) |
| **开发体验** | CI 频繁超时/

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-31

---

## 1. 今日速览

- **整体活跃度：高** —— 过去 24 小时内 Issues 与 PRs 各 50 条更新，且 0 Issues 关闭、仅 2 PRs 合并，呈现“积累大于消化”态势，积压压力显著。
- **版本里程碑**：发布 **v0.19.1 (v2026.7.30)**，为补丁版本，聚合自 v0.19.0 以来 1000+ PR，面向 Docker 镜像、托管部署与全新安装的稳定标签。
- **核心矛盾**：桌面端（Windows/macOS）更新机制、会话状态同步、Provider 路由一致性、安全边界（配置注入、环境变量泄露）等高优先级缺陷集中爆发，多个 P1/P2 Issue 仍无 Fix PR。
- **社区信号**：用户对“后台/集成任务污染会话列表”、“技能检索 Token 开销”、“Windows 原生体验（PTY、驱动器号、保留文件名）”痛点呼声高；插件启动通告、ACO keepalive、双栈绑定等增强型 PR 已就绪待决策。
- **健康度评级**：🟡 **关注** —— 发布节奏稳健，但关键回归与安全类 Issue 积压未闭环，需优先分配 Review 资源。

---

## 2. 版本发布

### v0.19.1 (v2026.7.30) — Patch Release
- **发布日期**：2026-07-30
- **定位**：聚合自 v0.19.0 以来 ~1,000+ PR 的稳定标签，供下游消费（Docker 镜像、托管部署、全新安装）。
- **破坏性变更**：无（补丁级）。
- **迁移注意**：
  - 旧版本用户可直接 `hermes update` 或拉取最新 Docker 镜像。
  - 若此前因桌面端更新器、Provider 路由、Docker 首次工具调用等问题受阻，建议全新安装验证。
- **链接**：[Release v2026.7.30](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.30)

---

## 3. 项目进展

> 今日**合并/关闭 PR 仅 2 个**（未在列表中展示），主干推进主要体现在**新开 PR 与高优 Fix 的就绪**：

| PR | 类型 | 核心变更 | 关联 Issue | 状态 |
|----|------|----------|------------|------|
| [#75129](https://github.com/NousResearch/hermes-agent/pull/75129) | Bug Fix (P2) | `model picker` 现使用 `providers:` 下的**配置键**而非显示名派生 slug，修复自定义 Provider 路由失效 | [#75087](https://github.com/NousResearch/hermes-agent/issues/75087) | Open |
| [#75122](https://github.com/NousResearch/hermes-agent/pull/75122) | Bug Fix (P2) | 对齐 `max_iterations` 默认值 90→500，且 `execute-code-only` 轮次退还 `api_call_count` | [#75097](https://github.com/NousResearch/hermes-agent/issues/75097) | Open |
| [#75113](https://github.com/NousResearch/hermes-agent/pull/75113) | Bug Fix (P2) | Windows PTY 后代进程清理：快照 PID 树、逐个校验终止、身份不匹配则 fail-closed | — | Open |
| [#75037](https://github.com/NousResearch/hermes-agent/pull/75037) | Security/Deps (P3) | 修补已知易受攻击依赖（Pillow, mcp, pygments, pynacl...），引入发布年龄下限与 npm 脚本允许列表 | — | Open |
| [#74904](https://github.com/NousResearch/hermes-agent/pull/74904) | Bug Fix (P2) | Windows 保留设备名（CON/PRN/AUX/NUL/COM*/LPT*）文件在 autostash 阶段临时重命名，避免 `git stash` 失败 | — | Open |
| [#72416](https://github.com/NousResearch/hermes-agent/pull/72416) | Bug Fix (P2) | Anthropic OAuth 尊重 `--no-browser`，仅打印授权 URL 接受粘贴 code | — | Open |
| [#72428](https://github.com/NousResearch/hermes-agent/pull/72428) | Bug Fix (P2) | Docker 后端下 `web_extract` / `browser_snapshot` 缓存路径转译为容器可见路径 | — | Open |
| [#70505](https://github.com/NousResearch/hermes-agent/pull/70505) | Feature (P3) | 桌面端新会话标题栏显示目标 Project，复用 `session.create` 解析规则 | — | Open |
| [#73849](https://github.com/NousResearch/hermes-agent/pull/73849) | Feature (P3) | `hermes serve` 支持多 `--host` 实现 IPv4/IPv6 双栈绑定 | — | Open |
| [#75124](https://github.com/NousResearch/hermes-agent/pull/75124) | Feature (P4) | ACP 新增 `acp.keepalive_interval_s`（默认 45s）防止客户端空闲超时断开 | — | Open |

**整体推进**：安全加固（依赖、配置注入）、Windows 兼容性、Provider/会话路由一致性、Docker 路径映射、ACP 企业级能力等**高价值修复已备齐**，等待 Review 与合并窗口。

---

## 4. 社区热点

| Issue | 评论/👍 | 核心诉求 | 代表性声音 |
|-------|---------|----------|------------|
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) **10💬** | 记忆上下文被当作权威用户消息注入，导致 Agent 困惑与潜在威胁面 | “将 `memory-context` 视为背景上下文而非权威用户消息” | 作者委托 Agent 撰写 Issue，反映问题复杂度超越普通用户认知 |
| [#74942](https://github.com/NousResearch/hermes-agent/issues/74942) **5💬 2👍** | Windows 更新器误判自身 PID 为“另一实例运行”，导致更新失败 | PID 自检逻辑缺陷，阻塞全量 Windows 用户更新 | “检测到的‘另一实例’正是正在执行检查的进程本身” |
| [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) **3💬 1👍** | macOS 残留 `~/.hermes/hermes-setup` 永久破坏应用内更新，无版本门控 | `resolveUpdaterBinary()` 仅判文件存在，无陈旧/版本校验 | “任意 `hermes update` 皆无法修复” |
| [#74570](https://github.com/NousResearch/hermes-agent/issues/74570) **3💬** | 会话 Pin/UnPin 静默回滚，根因 `pullRemotePins()` 竞态 | 多端共享 Gateway 时 Pin 同步竞态 | “Shift+Click、右键菜单、快捷键全失效” |
| [#53140](https://github.com/NousResearch/hermes-agent/issues/53140) **2💬** | **[Security HIGH]** `config.yaml` quick commands `shell=True` 执行，无文件所有权/权限校验 | 攻击者可通过写入/符号链接替换配置实现任意代码执行 | “当前用户拥有权校验缺失” |
| [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) **3💬** | `microsoft-teams-apps` 导入副作用加载外部 `.env` 破坏 Profile 密钥隔离 | 平台插件发现机制在导入时污染进程环境 | “Gateway 进程间密钥隔离失效” |
| [#75128](https://github.com/NousResearch/hermes-agent/issues/75128) **2💬** | 桌面端缓存 Provider/Model 字符串导致配置变更后路由分歧 | Electron 多进程缓存未失效 | “CLI 正常、Desktop 报 `Unknown provider 'custom:ominiroute'`” |

**热点画像**：  
- **Windows/macOS 更新与原生体验** 是最大痛点（3 个 P1/P2 桌面端 Issue 同日活跃）  
- **安全边界**（配置注入、环境变量泄露、Profile 隔离）获安全标签高度关注  
- **会话状态一致性**（Pin 同步、Project 关联、后台任务污染）贯穿 Desktop/CLI/Gateway  

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P1** | [#74942](https://github.com/NousResearch/hermes-agent/issues/74942) | Windows 更新器自检 PID 假阳性 → 更新完全阻塞 | ❌ | 影响全量 Windows 用户，需紧急修复 |
| **P1** | [#53140](https://github.com/NousResearch/hermes-agent/issues/53140) | 配置注入 RCE（`shell=True` + 无所有权校验） | ❌ | 安全评级 HIGH，建议优先发布安全补丁 |
| **P2** | [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) | macOS 残留二进制永久破坏应用内更新 | ❌ | 无版本门控，用户无法自愈 |
| **P2** | [#54354](https://github.com/NousResearch/hermes-agent/issues/54354) | Docker 后端首次工具调用跑在宿主机（返回本地路径） | ❌ | 镜像懒拉取导致首轮沙箱逃逸 |
| **P2** | [#74570](https://github.com/NousResearch/hermes-agent/issues/74570) | Pin/UnPin 竞态静默回滚 | ❌ | 多端共享 Gateway 场景高发 |
| **P2** | [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) | Teams 插件导入污染 `.env` → Profile 密钥隔离失效 | ❌ | 供应链/插件机制缺陷 |
| **P2** | [#75128](https://github.com/NousResearch/hermes-agent/issues/75128) | Desktop/CLI Provider 路由分歧 | ✅ [#75129](https://github.com/NousResearch/hermes-agent/pull/75129) | 已有修复 PR 待合并 |
| **P2** | [#75018](https://github.com/NousResearch/hermes-agent/issues/75018) | `PYTHONPATH/VIRTUAL_ENV` 泄露到 `no_agent` cron 子进程 | ❌ | 破坏非 venv Python 解释器 |
| **P3** | [#53362](

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-31

> **数据统计周期**：2026-07-30 00:00 – 2026-07-30 23:59 (UTC)  
> **数据来源**：GitHub API / 仓库 `sipeed/picoclaw`  

---

## 1. 今日速览
- **活跃度评级：🟢 高** —— 单日 7 个 Issue 与 17 个 PR 同步更新，依赖升级、渠道适配、核心引擎修复三线并进。  
- **核心动向**：  
  1. **依赖现代化**：5 个 Dependabot PR 集中升级 AWS SDK、Anthropic SDK、Go 工具链、Node 工具链，消除安全隐患并解锁新模型能力。  
  2. **渠道完善**：钉钉图片入站、DeltaChat 重构、Telegram 会话管理、IRC 长消息拆分等 4 个渠道相关 PR/Issue 推进。  
  3. **核心稳定性**：Seahorse 工具调用泄漏修复、Hook 反序列化缺陷修复、并发隐患代码审查（Issue #3308）同步进行。  
- **阻塞点**：OAuth 2.1/PKCE for MCP（#2546、#3302）长期停滞，需明确优先级或拆解为可交付子任务。  

---

## 2. 版本发布
**本周期无新版本发布**（最近 Release 仍为 `v0.3.1`）。建议在合并 #3271（模型列表更新）、#3270（DashScope TTS）、#3279（Seahorse 泄漏修复）后切 `v0.3.2`。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 对项目推进度 |
|----|------|----------|--------------|
| [#3288](https://github.com/sipeed/picoclaw/pull/3288) / [#3290](https://github.com/sipeed/picoclaw/pull/3290) | 🔧 依赖升级 | `aws-sdk-go-v2/config` 1.32.25 → 1.32.31，`bedrockruntime` 1.53.3 → 1.56.0 | 解锁 Bedrock Converse API 新特性，为 #3163（Prompt Caching）铺路 |
| [#3262](https://github.com/sipeed/picoclaw/pull/3262) / [#3263](https://github.com/sipeed/picoclaw/pull/3263) | 🔧 CI 升级 | `actions/setup-go` 6→7、`actions/setup-node` 6→7 | 修复 GitHub Actions 弃用警告，构建流水线保持绿色 |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) (Issue Closed) | 🐛 Bug 修复 | Hook `before_tool` 反序列化缺陷导致 `decision` 字段丢失 | 已确认根因并关闭，待对应 Fix PR 合并（当前未见 PR 编号，需核实） |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) (Issue Closed) | 💡 功能补全 | Gateway 模式新增无状态/无历史会话选项 | 设计方案已定型，实现 PR 待跟进 |

> **整体进度**：核心依赖与 CI 已就绪，渠道与 Hook 修复进入验收期，下一里程碑（v0.3.2）约 60% 就绪。

---

## 4. 社区热点（高互动 / 长讨论）

| 排名 | 对象 | 评论/👍 | 核心诉求 | 分析 |
|------|------|---------|----------|------|
| 1 | [#2546](https://github.com/sipeed/picoclaw/issues/2546) (Closed) | 6 💬 / 0 👍 | Dashboard 一键添加 OAuth 2.1+PKCE 的 MCP Server，面向非技术用户 | 已关闭但未合并实现，**强烈建议重新打开或拆解为 #3302 同款 Issue 纳入路线图** |
| 2 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) (Open) | 2 💬 / 0 👍 | IRCv3 长消息自动拆包重组，避免单条 512 字节限制导致语义断裂 | IRC 仍是运维/开发者核心渠道，**优先级应 ≥ Telegram 会话管理** |
| 3 | [#3308](https://github.com/sipeed/picoclaw/issues/3308) (Open) | 0 💬 / 0 👍 | 代码审查级 Issue：SeaHorse/Channel Manager/Hooks 并发隐患、Goroutine 泄漏、内存/速度优化 | **隐性技术债清单**，建议由 Maintainer 拆解为子 Issue 并标记 `good first issue` |
| 4 | [#3307](https://github.com/sipeed/picoclaw/issues/3307) (Open) | 0 💬 / 0 👍 | Telegram 端会话列表/切换/删除命令，对齐 Web UI 能力 | 多渠道一致性诉求明确，PR #3200（默认回退链）合并后可同步实现 |

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 是否有 Fix PR | 说明 |
|--------|-------|------|---------------|------|
| 🔴 **Critical** | [#3308](https://github.com/sipeed/picoclaw/issues/3308) 并发/泄漏/性能 | Open | 无 | 涉及 SeaHorse、Channel Manager、Hooks 三大核心模块，**建议本周内拆解并指派** |
| 🟠 **High** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) Hook 反序列化丢字段 | Closed | 未见 PR | 已定位根因，**需尽快补 PR 并回归测试** |
| 🟡 **Medium** | [#3279](https://github.com/sipeed/picoclaw/pull/3279) Seahorse 工具调用格式泄漏到摘要 | Open (PR) | **PR #3279** | 已提交修复，待 Review 合并 |
| 🟢 **Low** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC 长消息拆包 | Open | 无 | 纯逻辑增强，不阻塞主流程 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 关联 PR/进展 | 纳入下一版本概率 |
|------|------|--------------|------------------|
| **DashScope TTS + WeChat 语音发送** | [#3270](https://github.com/sipeed/picoclaw/pull/3270) | PR 已开，代码完整 | 🟢 **95%** —— 依赖无破坏性变更，测试通过即可合并 |
| **模型默认回退链可视化配置** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | PR 开发中，UI+API 同步 | 🟡 **70%** —— 涉及 Web UI 与后端联调，需预留时间 |
| **钉钉图片入站** | [#3283](https://github.com/sipeed/picoclaw/pull/3283) | PR 已开，含 Token 缓存重构 | 🟢 **90%** —— 单渠道增量，风险可控 |
| **DeltaChat 重构 (-200 LOC)** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR 开发中，文档同步 | 🟡 **60%** —— 破坏性配置变更需文档与迁移指南 |
| **OAuth 2.1/PKCE for MCP** | [#2546](https://github.com/sipeed/picoclaw/issues/2546) / [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 仅 Issue，无 PR | 🔴 **<10%** —— 需架构评审，建议规划到 v0.4.0 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点 / 期望 | 代表性引用 |
|------|-------------|------------|
| **网关模式开发者** | 无法像 CLI `--session` 那样随意创建隔离会话 | #3257 “gateway 模式 session key 固定为 channel/channel_user，无法手动指定” |
| **IRC 重度用户** | 长消息被强制拆分导致上下文破碎 | #3287 “PicoClaw 当前把拆包后的片段当作独立消息处理” |
| **Hook 编写者** | `before_tool` 返回体反序列化失败，`decision` 字段静默丢弃 | #3258 “args misparsed due to deserialization defect” |
| **非技术运营** | 想在 Dashboard 直接粘贴 URL 接入 OAuth MCP，无需写配置 | #2546 “same UX as Claude.ai's 'Add connector'” |
| **Telegram 移动端用户** | 无法在聊天界面查看/切换历史会话 | #3307 “Web UI 有完整会话管理，Telegram 完全没有” |

> **满意度信号**：核心功能（多渠道、模型管理、Hook 系统）已可用，但**多渠道一致性**与**非技术友好度**是当前最大差距。

---

## 8. 待处理积压（>30 天无实质推进）

| 对象 | 停滞天数 | 重要性 | 建议行动 |
|------|----------|--------|----------|
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) OAuth 2.1/PKCE for MCP | ~106 天 | 🔴 高（生态接入关键） | 1) 重新打开或迁移至 #3302；2) 发起设计讨论会，拆解为：拆出 `dashboard-oauth-mcp` 子项目 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) DeltaChat 重构 | ~28 天 | 🟡 中 | 催促 Reviewer 完成文档与迁移指南同步，合并后发布 Breaking Change Note |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) Bedrock Prompt Caching | ~38 天 | 🟢 低（性能优化） | 依赖 #3288/#3290 已合并，**建议本周完成 Review 合并** |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) 默认回退链 | ~30 天 | 🟡 中 | 追加 UI 单测与 E2E 测试，纳入 v0.3.2 必选项 |

---

## 📌 维护者行动清单（建议今日内完成）
1. **Review & Merge**：#3279（Seahorse 泄漏）、#3283（钉钉图片）、#3270（DashScope TTS） — 低风险高价值。  
2. **拆解 #3308**：创建 3-5 个子 Issue（`concurrency`、`leak`、`perf`），打上 `help wanted`。  
3. **决策 OAuth MCP**：在 #3302 下评论明确「Q3 规划 / Q4 交付 / 暂不支持」三选一，避免社区预期悬空。  
4. **催办 #3258 Fix PR**：确认作者是否已在本地修复，若无则指派核心成员 2 天内出 PR。  
5. **更新 CHANGELOG.md**：同步已合并依赖升级与 Bug 修复，为 v0.3.2 预热。

---

> **下一期预告**：若 v0.3.2 发布，将重点跟踪「多渠道会话一致性」与「MCP 生态接入」两大主线进展。  
> **报告生成时间**：2026-07-31 06:00 UTC | 数据截止 2026-07-30 23:59 UTC

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-31

> **数据周期**：2026-07-30 00:00 – 2026-07-30 23:59 (UTC)  
> **数据源**：GitHub REST / GraphQL（Issues、PRs、Releases）  
> **统计口径**：过去 24 小时新增/更新的 Issues 与 PRs，以及当日发布的 Release

---

## 1. 今日速览
- **活跃度评级：高** —— 单日 2 个新 Issue、17 个 PR 活动（12 个待合并、5 个已合并/关闭），核心维护者与社区贡献者并行推进容器运行时、技能体系、供应链安全与消息平台适配等多条主线。  
- **核心交付**：已合并 5 个 PR，涵盖 **Agent 镜像硬化版本回滚（#3160）**、**Vercel CLI 可选化（#3159）**、**OpenCode 兼容性与内存对齐（#3122）**、**技能更新跳过 v1-only 分支（#2682）**、**文档架构链接补全（#3152）**。  
- **阻塞风险**：Issue #3153 指出 **Slack 入站消息的 `add_reaction`/`edit_message` 100% 失败**，根因是平台消息 ID 未去除 agent-group 后缀，导致平台返回 `message_not_found`；Issue #3155 揭示 **Registry 分支与 main 漂移，Provider 自身安装门禁失效**，可能阻断技能安装流水线。  
- **安全/供应链**：PR #3158 引入 Sigstore keyless 签名验证的发布者身份锚定，修复 “变量缺失导致签名验证全跳过” 的隐患。  
- **技术债清理**：PR #3119 修复容器运行时孤儿容器重复生成；PR #3157 禁止模板技能实例化时跟随容器内符号链接；PR #3154 为定时任务注入当前运行时间上下文。

---

## 2. 版本发布
**今日无新 Release**。最近一次发布仍为早期版本，建议关注 `main` 分支的 `hardened-2026-07-30` 镜像回滚（#3160）后续是否触发自动发布。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#3160](https://github.com/nanocoai/nanoclaw/pull/3160) | **核心镜像回滚** | Agent 镜像从 `sha256:089ff730… (781 MB, 18 layers)` 回滚至 `sha256:4e441375… (611 MB, 8 layers)`，最大单层从 39% 降至 27% | 大幅降低拉取带宽与启动延迟，层数减半利于镜像分发与缓存命中 |
| [#3159](https://github.com/nanocoai/nanoclaw/pull/3159) | **供应链精简** | 将 Vercel CLI 从基础镜像移出，改为 `/add-vercel` 技能按需挂载 | 减少 100% 部署场景外的攻击面与镜像体积，符合最小权限原则 |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | **适配修复** | OpenCode 主分支兼容性、自定义端点传输、内存模型对齐 | 消除上游同步滞后导致的运行时崩溃，恢复多模型路由能力 |
| [#2682](https://github.com/nanocoai/nanoclaw/pull/2682) | **技能治理** | `update-skills` 新增 v2 兼容性检查，自动跳过 `1.x` 分支并汇总展示 | 避免 v1-only 技能污染主线安装流水线，提升维护者审阅效率 |
| [#3152](https://github.com/nanocoai/nanoclaw/pull/3152) | **文档导航** | README Architecture 区新增 `REQUIREMENTS.md` 与 `SECURITY.md` 链接 | 降低新贡献者查阅门槛，强化安全合规入口可见性 |

> **合并统计**：5 个 PR 合并，0 个 Release，代码库净增约 **-170 MB 镜像体积**、**+3 个安全加固点**、**+2 个文档入口**。

---

## 4. 社区热点（高互动 / 高关注）

| 排名 | 对象 | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | [Issue #3153](https://github.com/nanocoai/nanoclaw/issues/3153) | 👍 0 / 评论 1 / 更新 1 次 | **Slack 入站消息无法添加表情/编辑** —— 平台 ID 带后缀导致 3 次重试全失败，直接影响运维交互体验 |
| 2 | [Issue #3155](https://github.com/nanocoai/nanoclaw/issues/3155) | 👍 0 / 评论 0 / 更新 1 次 | **Registry 分支漂移导致 Provider 自测失败** —— `/add-codex` 在 main 上构建报错，阻断技能发布流水线 |
| 3 | [PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156) | 评论 0 / 👍 0 | **Agent Runner 携带 Channel Attachments 为结构化 Part** —— 为多模态消息铺路，核心团队标记 `follows-guidelines` |
| 4 | [PR #3119](https://github.com/nanocoai/nanoclaw/pull/3119) | 评论 0 / 👍 0 | **容器运行时孤儿容器去重** —— 5 天 uptime 下单组并发达 3 个，修复后防止资源泄漏 |

> **洞察**：两个 0-评论 Issue 均为 **P0 级回归**，且均由核心贡献者（TO-maschenborn、glifocat）提交，说明内部犬食发现机制生效；PR #3156 虽无外部评论，但带 `core-team` 标签且涉及消息模型重构，后续讨论度预期上升。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue / PR | 现象 | 根因 | 已有 Fix PR |
|--------|------------|------|------|-------------|
| **P0 - 生产阻断** | [#3153](https://github.com/nanocoai/nanoclaw/issues/3153) | Slack `add_reaction`/`edit_message` 100% 失败，`message_not_found` | 入站消息 ID 未 strip `agent-group` 后缀 | **无**（需在 `agent-runner`/`platform-adapter` 层修复 ID 规范化） |
| **P0 - CI/CD 阻断** | [#3155](https://github.com/nanocoai/nanoclaw/issues/3155) | `/add-codex` 技能自测失败，Registry 分支与 main 漂移 | Provider payload 与主线同步滞后，安装门禁自检不通过 | **无**（需同步 `providers` 分支至 f2b75837+ 或回滚 main 依赖） |
| **P1 - 资源泄漏** | [#3119](https://github.com/nanocoai/nanoclaw/pull/3119) | 单 Agent Group 并发 3 容器轮询同一 Session DB | 孤儿容器未被协调器识别与回收 | **PR #3119 已打开，待 Review** |
| **P1 - 安全回归** | [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) | Sigstore 签名验证全跳过（环境变量缺失） | `AGENT_IMAGE_SIGNER_IDENTITY/ISSUER` 未注入 | **PR #3158 已打开，补全发布者身份锚定** |
| **P2 - 符号链接越界** | [#3157](https://github.com/nanocoai/nanoclaw/pull/3157) | `materializeTemplateSkills` 跟随容器内 symlink 导致路径逃逸 | `fs.statSync` 默认 follow link | **PR #3157 已打开，改用 `lstatSync`** |
| **P2 - 定时任务上下文缺失** | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | Scheduled Task 无当前运行时间，依赖创建时间回退 | `process_after` 未渲染为 `time` 字段 | **PR #3154 已打开，注入 `current_time`** |

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR / 讨论 | 入版本概率（主观） |
|------|----------|----------------|---------------------|
| [PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156) | **Channel Attachments 结构化透传** —— 为多模态（图片/文件/语音）提供统一 Part 模型 | 核心团队发起，标记 `follows-guidelines` | **高**（vNext 必含） |
| [PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685) | **Signal 群组 Typing / 出站 Reaction / Quote-Reply** 文档补全 | 长期 PR（6/4 创建），近期仍在更新 | **中**（文档级，随 Signal 适配器稳定合并） |
| [PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301) | **GitHub Polling 模式 (Mode B)** —— 无需公网端口的 REST API 轮询集成 | 5/6 创建，长期未合并，近期仍活跃 | **中低**（需安全审计与 Webhook 降级策略） |
| [PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317) | **本地免费 Whisper 语音转写技能** | 双后端（openai-whisper / whisper.cpp），预检自动选型 | **中**（技能级，依赖容器镜像体积预算） |
| [PR #2634](https://github.com/nanocoai/nanoclaw/pull/2634) | **paws4claws AWS 凭证代理技能** | Mount-from-outside 模式，运维友好 | **中**（运维技能，按需合并） |

> **趋势判断**：核心团队当前聚焦 **供应链安全（#3158, #3160, #3159）**、**容器运行时稳定性（#3119, #3157）** 与 **消息模型结构化（#3156, #3153 Fix）**，新技能类 PR 多处于“长期候选”状态，预计下一里程碑（v0.12 / v0.13）以基础设施强化为主。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点 / 场景 | 代表性引述 | 涉及对象 | 情感倾向 |
|-------------|------------|----------|----------|
| **Slack 运维交互失效** | “Every attempt comes back `message_not_found`, retries 3× and ends as `failed`.” | Issue #3153 | 😡 强烈不满（核心功能不可用） |
| **技能安装自测失败** | “Running `/add-codex` on `main` … fails at the skill's own build step.” | Issue #3155 | 😟 焦虑（阻断新技能上线） |
| **镜像体积与拉取速度** | 隐性反馈：PR #3160 强调 “largest single layer gates pull” | PR #3160 | 👍 认可优化方向 |
| **Vercel CLI 强制捆绑** | 隐性反馈：PR #3159 “credential surface present by default rather than by choice” | PR #3159 | 👍 认可最小权限原则 |

> **整体情绪**：核心用户/维护者对 **基础设施收敛（镜像瘦身、可选组件、签名验证）** 给予正向反馈；对 **消息平台适配器回归（#3153）** 与 **技能治理漂移（#3155）** 表达强烈不满，要求尽快修复。

---

## 8. 待处理积压（长期未响应 / 高价值）

| 对象 | 创建时间 | 停滞天数 | 价值 / 风险 | 建议动作 |
|------|----------|----------|-------------|----------|
| [PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301) | 2026-05-06 | **86 天** | GitHub Polling 模式解决 NAT/防火墙痛点，社区需求明确 | 指派 Reviewer，补安全威胁模型文档后合并 |
| [PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317) | 2026-05-07 | **85 天** | 本地免费语音转写，降低多模态门槛 | 评估镜像体积预算，拆分为可选技能包 |
| [PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685) | 2026-06-04 | **57 天** | Signal 适配器文档完善，用户可见度高 | 仅文档变更，建议快速合并 |
| [PR #2634](https://github.com/nanocoai/nanoclaw/pull/2634) | 2026-05-28 | **64 天** | AWS 凭证代理运维技能，企业级场景刚需 | 等待 `mount-from-outside

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-31

> **数据基准**：GitHub 近 24 小时原始数据（Issues 38 条、PRs 50 条、Releases 0 个）  
> **统计口径**：以 `updated_at` 判定活跃度；“合并/关闭”包含显式合并与关闭不合并两类。

---

## 1. 今日速览
- **活跃度极高**：单日 88 条 Issue/PR 更新，核心贡献者（`italic-jinxin`、`BenKurrek`、`serrrfirat`、`pranavraja99` 等）并行推进 **架构重构、安全修复、技能系统重写、WebUI 体验打磨** 四大主线。  
- **零发版但“准发版”工作密集**：`#5598`（版本发布 chore）挂载 28 天仍未合并，暗示发布流程存在卡点；多个 `dependabot` 依赖更新 PR 积压。  
- **安全债务集中爆发**：两个 **P0/安全级** 问题（`#6900` 跨用户内存泄漏、`#6866` 共享 Home 目录）同日浮现，均涉及多租户隔离底线，需立即止血。  
- **“Reborn”架构落地进入实施期**：`#3773` 及 `#6919`–`#6927` 共 10 个子 Issue 拆解完毕，`#6934`（WS0 预备）已合并，后续移 crate、死代码清理、Contract 拆分将密集着陆。  
- **用户可感知 Bug 修复同步跟进**：`#6902`（虚假指标）、`#6915`（工作区链接失效）均在报告当日即有 Fix PR（`#6906`、`#6917`）进入审查。

---

## 2. 版本发布
**无新版本发布**。  
> 关注 `#5598`（`ironclaw_common` 0.5.0 breaking、 `ironclaw_skills` 0.4.0 breaking），若需阻塞上游发布请优先审核该 PR。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心推进 | 关联 Issue/Epic |
|----|------|----------|-----------------|
| [#6934](https://github.com/nearai/ironclaw/pull/6934) | **Refactor (Merged)** | `ironclaw_host_api` 去通配符 prelude，完成 Target Architecture **WS0 项 1**，为后续 10-family 迁移扫清依赖图障碍 | `#3773`, `#6920` |
| [#6771](https://github.com/nearai/ironclaw/pull/6771) | **Test (Closed)** | 稳定 Reborn Playwright 矩阵（`legacy-runtime`、`served-api-routes`），修复独立服务器启动/就绪/生命周期问题 | `#4632` |
| [#4636](https://github.com/nearai/ironclaw/pull/4636) | **Test (Closed)** | 补齐 SSO 会话与多用户隔离的端到端覆盖，提供 hermetic OAuth provider | `#4632` |
| [#6934](https://github.com/nearai/ironclaw/pull/6934) 已合并，**标志着“目标架构”从决策文档（`#6918`）进入可执行基线阶段**。 |

> **整体里程碑感知**：架构重构**从“设计冻结”进入“机械落地”**；技能系统（`#6565`）进入“路由/激活”双轨修复；WebUI 质量门（分页、虚假数据、Markdown 渲染）同步收口。

---

## 4. 社区热点（高互动/高关注 Issue/PR）

| 排名 | Item | 互动 | 核心诉求/争议点 |
|------|------|------|-----------------|
| 1 | [#6284](https://github.com/nearai/ironclaw/issues/6284) **[EPIC] error-recoverability endgame** | 💬 15 | **核心架构共识**：要求 *每一个* 中途错误均满足“存活、可见、含因果与修复建议、模型得以行动、不上报非成功”五条契约。讨论集中在“契约如何机械化校验”及“对现有 TurnCoordinator 的侵入性”。 |
| 2 | [#6524](https://github.com/nearai/ironclaw/issues/6524) **[EPIC] Hermetic capability & journey testing platform** | 💬 4 | 测试基建痛点：现有 fixture/Emulate 覆盖“已采集 trace”，但无法回答“所有能力/关键旅程是否有确定性覆盖”。呼吁建立 **能力级覆盖率仪表盘** 与 **hermetic journey 编排层**。 |
| 3 | [#3773](https://github.com/nearai/ironclaw/issues/3773) / [#6919](https://github.com/nearai/ironclaw/issues/6919) **Target Crate Architecture** | 💬 0（长期跟踪） | 跨 14 个月的架构北极星，**今日拆解为 10 个并行 Workstream**（`#6920`–`#6927`），`#6934` 已落地 WS0 第一刀。社区隐性关注度极高，任何层违规将阻塞合并。 |
| 4 | [#6565](https://github.com/nearai/ironclaw/issues/6565) **[EPIC] Reliable Skill Discovery, Routing, and Activation** | 💬 1 | 技能系统“能发现但不可用/静默失败”顽疾；`#6937`（关键词边界匹配）、`#6938`（拒绝理由/需求强制/发现限流兜底）同日开出，**标志着 Epic 进入代码层切片**。 |

> **洞察**：讨论集中在 **“契约化/机械化保证”**（错误恢复、测试覆盖、架构层界），反映项目从“功能堆砌”转向“工程可验证”的阶段性跃迁。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 / Security** | [#6900](https://github.com/nearai/ironclaw/issues/6900) | 共享频道默认 subject 绑定导致 **所有用户坍缩至 Operator 的内存命名空间**（跨用户内存泄漏） | ❌ 无 | `suggested_P0`、`reborn`、`security` 三标签，**需立即止血**，建议在 Turn 入口强制绑定真实 Actor Identity。 |
| **P0 / Security** | [#6866](https://github.com/nearai/ironclaw/issues/6866) | 所有用户共享同一 Home 目录，工作区互相可见（隐私泄露） | ❌ 无 | 多租户隔离底线，**建议引入 per-user workspace root + 强制命名空间前缀**。 |
| **P1 / Data Loss Risk** | [#6752](https://github.com/nearai/ironclaw/issues/6752) | 实例删除报错，“Loading your agents…” 卡死于再登录 | ❌ 无 | 涉及实例生命周期与前端状态机不一致，需补偿事务或幂等删除。 |
| **P2 / Integration Broken** | [#6834](https://github.com/nearai/ironclaw/issues/6834) | Slack 集成设置流程失败（near.foundation 账号） | ❌ 无 | OAuth/回调链路断裂，建议复用 `#4636` hermetic OAuth provider 复现。 |
| **P2 / User-Facing Regression** | [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub 技能 CTA 全量 404 | ❌ 无 | 链接生成逻辑回归，`#6933`（绑定验证包身份）可能关联，需排查路由前缀。 |
| **P3 / UI/UX** | [#6916](https://github.com/nearai/ironclaw/issues/6916) | `.md/.mdx` 预览模态框当作纯文本渲染 | ❌ 无 | 缺少 Markdown 渲染管线接入。 |
| **P3 / UI/UX** | [#6915](https://github.com/nearai/ironclaw/issues/6915) | 助手消息中的工作区文件链接点击无反应 | ✅ **[#6917](https://github.com/nearai/ironclaw/pull/6917)** (Open) | 规范化 `/workspace/...` 链接并走认证预览。 |
| **P3 / Data Integrity** | [#6902](https://github.com/nearai/ironclaw/issues/6902) | Projects 页面展示捏造指标（$0.00 spend、0 pending gates 等） | ✅ **[#6906](https://github.com/nearai/ironclaw/pull/6906)** (Open) | 仅渲染 API 返回字段，移除硬编码假数据。 |
| **P3 / Pagination** | [

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-31

---

## 1. 今日速览
- **整体活跃度：高**。过去 24 小时内无新 Issue 产生，但合并/关闭了 **10 个 PR**，并发布了 **1 个正式版本 (2026.7.29)**，呈现典型的“版本发布后集中收尾与清理”节奏。
- **核心动向**：版本迭代聚焦于 **协作侧边栏** 功能完善、企业级账号隔离架构重构、Windows 进程管理健壮性修复，以及侧边栏运营活动（签到/轮播）的新增。
- **技术债清理**：集中修复了邮件技能路径遍历漏洞、Agent 创建弹窗 UX 缺陷、Windows 进程残留风险等稳定性与安全隐患。
- **社区状态**：当前无活跃 Issue 讨论，2 个长期搁置 PR（#1228, #1231）仍处于 Open 状态，需维护者决策。
- **健康度评估**：⭐⭐⭐⭐☆ (发布节奏稳健，核心架构在演进，但长期积压 PR 需关注)。

---

## 2. 版本发布
### **LobsterAI 2026.7.29** (发布于 2026-07-29)
> **链接**：[Release 2026.7.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.29)

| 类型 | 核心变更 | 关联 PR | 影响评估 |
| :--- | :--- | :--- | :--- |
| **feat** | **协作侧边栏**：侧聊面板支持选中文本标签传递 | [#2405](https://github.com/netease-youdao/LobsterAI/pull/2405) | 增强上下文感知协作体验 |
| **feat** | **模型支持**：新增 Kimi K3 模型支持 | [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) | 扩展模型生态兼容性 |
| **fix** | **认证加固**：会话生命周期硬化与 Token 刷新机制优化 | (Release Note 提及) | **安全/稳定性核心修复**，建议全量升级 |

> **迁移提示**：认证层逻辑变更可能导致旧版本 Token 失效，用户升级后需重新登录；无数据库结构破坏性变更。

---

## 3. 项目进展：今日合并/关闭的关键 PR (共 8 个)

| PR | 标题 | 类型 | 核心价值 | 模块影响 |
| :--- | :--- | :--- | :--- | :--- |
| **[#2412](https://github.com/netease-youdao/LobsterAI/pull/2412)** | `fix(nsis): re-kill survivor processes on every stop poll round` | **Bug Fix / Stability** | 解决 Windows 安装器卸载/更新时进程残留导致的文件占用失败，新增逐轮轮询杀进程及详细幸存者日志。 | `platform: windows`, `installer` |
| **[#2411](https://github.com/netease-youdao/LobsterAI/pull/2411)** | `feat(sidebar): support check-in and banner carousel` | **Feature** | 统一侧边栏轮播组件，融合每日签到与多 Banner 运营位，支持单项隐藏控制、关闭组重开逻辑。 | `area: renderer`, `sidebar` |
| **[#2410](https://github.com/netease-youdao/LobsterAI/pull/2410)** | `style(sites): align page layout with management views` | **UI Polish** | Sites 页面布局、间距、搜索样式与 Skills/MCP 管理视图对齐，提升一致性。 | `area: renderer`, `sites` |
| **[#2389](https://github.com/netease-youdao/LobsterAI/pull/2389)** | `fix(email): prevent attachment path traversal` | **Security Fix** | 修复邮件技能附件下载路径遍历漏洞，新增跨平台安全测试，版本号递增。 | `area: skills`, `security` |
| **[#2397](https://github.com/netease-youdao/LobsterAI/pull/2397)** | `feat(cowork): add isolated /btw side chat` | **Major Feature** | 新增可拖拽/八向缩放/跟进提问的浮动侧聊面板，`/btw` 执行与历史隔离，走 OpenClaw 工具流。 | `area: cowork`, `openclaw`, `renderer` |
| **[#2406](https://github.com/netease-youdao/LobsterAI/pull/2406)** | `fix(cowork): improve side chat input handling` | **Enhancement** | 侧聊面板开启期间累积选中文本、移除产品层问题长度限制、保留上下文与传输安全边界。 | `area: cowork` |
| **[#2409](https://github.com/netease-youdao/LobsterAI/pull/2409)** | `feat(enterprise): isolate account-scoped auth and service flows` | **Arch Refactor** | **核心架构重构**：按账号隔离认证、媒体、排队跟进、分享、部署状态；防止账号切换时异步残留污染；强制企业权限校验、改进失败回滚。 | `area: main`, `renderer`, `auth`, `enterprise` |
| **[#2408](https://github.com/netease-youdao/LobsterAI/pull/2408)** | `feat(activity): add native daily check-in experience` | **Feature** | 服务端驱动原生每日签到体验（侧边栏+账号菜单），未登录引导登录流，已登录无 Token 暴露领取奖励。 | `area: renderer`, `activity` |

**进展总结**：今日合并 PR 涵盖 **安全修复(1)、架构重构(1)、核心新功能(2)、平台稳定性(1)、运营组件(2)、UI 一致性(1)**。项目从“功能堆砌”转向“账号体系隔离”与“协作体验打磨”的成熟期。

---

## 4. 社区热点
> **数据口径**：过去 24h 无新 Issue，所有 PR 评论数均为 0/undefined，无显著社区讨论热点。
> **推测**：核心开发由内部团队主导，社区外部贡献者参与度较低，或讨论迁移至内部渠道。

---

## 5. Bug 与稳定性
| 严重度 | 问题描述 | 来源 PR | 修复状态 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **High (Security)** | 邮件技能附件文件名未校验，存在路径遍历风险可任意写入文件系统 | [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | ✅ **已合并** | 已加跨平台安全测试，建议所有用户升级 |
| **High (Stability)** | Windows NSIS 安装器停止轮询仅杀进程一次，导致内核清理慢或重生进程幸存，后续操作失败 | [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) | ✅ **已合并** | 新增逐轮 `Stop-Process` 及幸存者详细日志 |
| **Medium (UX Regression)** | `AgentCreateModal` 无 Escape 关闭支持，重新打开显示残留表单数据 | [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | ❌ **Open (Stale)** | 创建于 2026-04-01，长期未合并，影响一致性体验 |
| **Low (Logic)** | 侧聊面板输入处理：选中文本未累积、存在产品层长度限制 | [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | ✅ **已合并** | 同步修复于今日发布版本中 |

---

## 6. 功能请求与路线图信号
| 来源 | 需求描述 | 关联 PR/动态 | 纳入下一版本可能性 | 理由 |
| :--- | :--- | :--- | :--- | :--- |
| **内部规划** | **会话「标记为未读」**（列表右键/详情菜单） | [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) (Open, Stale) | ⭐☆☆☆☆ (低) | PR 搁置 4 个月，未获 Review，且当前迭代聚焦企业级隔离与协作面板，优先级被降级 |
| **内部规划** | **Agent 创建弹窗 UX 补齐** | [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) (Open, Stale) | ⭐⭐☆☆☆ (中低) | 修改量小，符合现有 Modal 模式，但长期未合并暗示非当前 Sprint 目标 |
| **已落地** | 侧边栏运营化（签到/轮播） | [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411), [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) | ✅ **已在 2026.7.29** | 服务端驱动运营组件化，后续可扩展更多活动入口 |
| **架构演进** | 多账号/企业级状态彻底隔离 | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | ✅ **核心进行中** | 为企业版多租户、SSO、权限体系铺路，后续必有跟进 PR |

---

## 7. 用户反馈摘要
> **数据来源**：过去 24h 无新 Issue 评论，无用户反馈数据可提炼。
> **侧写参考**：近期合并的 PR (#2397, #2406) 侧聊面板交互细节（拖拽、累积选中文本、移除长度限制）暗示内部测试/犬食用户反馈了“侧聊不够灵活、上下文丢失、输入受限”等痛点，已快速响应修复。

---

## 8. 待处理积压
| 项目 | 类型 | 创建时间 | 停滞时长 | 核心阻碍 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[#1228](https://github.com/netease-youdao/LobsterAI/pull/1228)** | PR (feat) | 2026-04-01 | ~120 天 | 标记 `stale`，无 Reviewer 指派，功能范围涉及 Redux/i18n/ContextMenu 多处 | **决策**：若纳入规划，指派 Owner 并 Rebase；若弃用，标记 `wontfix` 关闭减少噪音 |
| **[#1231](https://github.com/netease-youdao/LobsterAI/pull/1231)** | PR (fix) | 2026-04-01 | ~120 天 | 标记 `stale`，修改极小（补齐 Escape 监听、resetForm 时机），但长期未合并 | **快速合并**：属于“纸上得来终觉浅”的 UX 修复，建议直接合入 `main` 分支回归测试 |

---

**报告生成时间**：2026-07-31 06:00 UTC
**数据基准**：GitHub API 数据快照 (2026-07-30 00:00 ~ 2026-07-30 23:59)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-31

---

## 1. 今日速览
- **整体活跃度：中等偏高**。过去 24 小时内无新版本发布，但代码审查与合并活动频繁，共计 4 个 PR 推进，其中 1 个重大 Slack 集成 PR (#1166) 已合并，3 个核心基础设施/安全/前端 PR 处于活跃审查状态。
- **社区互动**：新增 2 个 Issue，均为首次提交（0 评论），分别聚焦 **Telegram Bot 交互能力增强** 与 **Vault 认证缺失安全漏洞 (CWE-306)**，后者为高危安全问题，需优先响应。
- **核心进展**：可观测性基建 (#1174)、权限模型细化 (#1170)、Web 端导出体验 (#1176) 并行推进，显示项目正从“功能完备”向“生产级可靠性、可观测性、安全性”演进。

---

## 2. 版本发布
> **今日无新版本发布。**

---

## 3. 项目进展
### ✅ 已合并 / 关闭
| PR | 标题 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | **feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit** | 基于 #1165 确认反应，引入消息级生命周期管理（阶段、重连监督、队列/取消/重试/回调风暴下的安全性），并迁移至 Block Kit UI。 | **Slack 适配器核心交互体验**，解决“无 typing indicator”导致的用户感知空白，提升生产环境稳定性。 |

### 🔄 进行中（待合并）
| PR | 标题 | 状态/更新 | 关键点 |
|----|------|-----------|--------|
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | **Add instrumentation and feedback collection infrastructure** | 2026-07-31 仍在更新 | **全链路可观测性基建**：后端中立的 Agent 插桩、Langfuse v4 导出、OTLP 后端、用户反馈收集。包含流式/非流式对齐、提供商故障转移归因、缓存感知 Token 统计、推理记录。为生产级监控与评测奠基。 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | **fix(channels): gate /sh and privileged tools behind a per-account operators list** | 2026-07-31 仍在更新 | **权限模型硬化**：将“访问控制”与“特权操作”解耦，引入账号级 `operators` 白名单，覆盖命令、回调、队列重放、聊天执行、外部调用全路径。修复潜在提权风险。 |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | **feat(web): add Markdown copy and session export** | 2026-07-30 创建，近期无更新 | **前端体验补全**：保留原始 Markdown 复制（含流式/持久化回复），新增会话级“另存为 Markdown”导出（分页历史、用户/助手文本、图片引用）。 |

> **进展评估**：核心通道（Slack）交互闭环已补齐；可观测性、权限、导出三大生产级能力并行开发，预示下一版本将显著提升企业级就绪度。

---

## 4. 社区热点
| 排名 | Item | 类型 | 互动 | 核心诉求分析 |
|------|------|------|------|--------------|
| 1 | [#1177](https://github.com/moltis-org/moltis/issues/1177) | **Bug / Security** | 0 👍 / 0 评论 | **Vault 解锁/恢复端点缺失认证 (CWE-306)**。报告者确认为最新版复现，**直接威胁秘密管理安全**，属 P0 级阻塞性漏洞，虽无讨论热度但必须优先修复。 |
| 2 | [#1178](https://github.com/moltis-org/moltis/issues/1178) | **Feature** | 0 👍 / 0 评论 | **Telegram Inline Buttons & 结构化回调支持**。用户期望 Agent 能主动发送交互式按钮并接收结构化响应，属于“多模态交互/人机协作”路线图延伸，潜在需求来自复杂审批、表单填报场景。 |
| 3 | [#1174](https://github.com/moltis-org/moltis/pull/1174) | **PR (Infra)** | 0 👍 / 评论未计数 | 维护者 `penso` 主导的基建 PR，虽社区反应少，但关乎**可观测性标准化**，是项目长期健康度关键。 |
| 4 | [#1170](https://github.com/moltis-org/moltis/pull/1170) | **PR (Security/Auth)** | 0 👍 / 评论未计数 | 同作者推进的**最小权限原则落地**，配合 #1177 共同构筑安全基线。 |

> **信号**：社区外部贡献者（`Practice100101`、`eddyvlad`）聚焦**安全**与**Telegram 生态**；核心维护者（`penso`、`Jonesxq`）聚焦**基建、权限、前端体验**。两条线索形成“外部压力+内部主动”双驱动。

---

## 5. Bug 与稳定性
| 严重度 | Issue | 标题 | 状态 | 关联 Fix PR |
|--------|-------|------|------|-------------|
| **Critical (P0)** | [#1177](https://github.com/moltis-org/moltis/issues/1177) | Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306) | **OPEN** | **无** ⚠️ **急需建立修复 PR** |
| — | — | 其余 PR 中修复的为架构级缺陷（权限绕过 #1170、Slack 竞态 #1166），非运行时 Crash。 | — | — |

> **建议**：立即指派安全负责人评估 #1177 影响范围（是否已被利用），编写回归测试并发布热修复版本。

---

## 6. 功能请求与路线图信号
| 来源 | 需求 | 成熟度 | 纳入下一版本可能性 | 理由 |
|------|------|--------|---------------------|------|
| [#1178](https://github.com/moltis-org/moltis/issues/1178) | Telegram Inline Buttons + 结构化回调 | **概念阶段**（0 评论，无设计文档） | **低**（本周期） | 需设计协议适配层、回调路由、状态持久化，工作量大；但属“多渠道交互统一”战略方向，**中长期必做**。 |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | Web 端 Markdown 复制 / 会话导出 | **代码完成**，待 Review | **高** | 前端独立功能，风险低，用户诉求明确（知识沉淀、合规归档），极大概率随下一版本发布。 |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | 可观测性/反馈基建 | **代码主体完成**，集成测试中 | **中高** | 属基础设施，合并后需文档与配置示例，可能随次要版本发布或单独打标签。 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 特权命令 Operators 白名单 | **代码完成**，安全敏感 | **高** | 配合 #1177 共同构筑安全基线，审查通过即合并。 |

---

## 7. 用户反馈摘要
> 今日 Issue 评论区均为空，**无直接用户痛点文本可提炼**。  
> 侧写推测：
- **安全焦虑**：#1177 报告者主动核对最新版并引用 CWE 编号，显示用户具备安全合规意识，可能为企业内部审计或外部渗透测试发现。
- **Telegram 深度集成需求**：#1178 提交者完成 Preflight Checklist，熟悉贡献流程，可能为二次开发者或高频 Telegram 场景用户（客服、运维审批）。
- **前端导出刚需**：#1176 由非核心维护者 `Jonesxq` 提交，说明 Web 端“复制/导出”缺失已阻塞实际使用场景（会话归档、Prompt Engineering 复盘）。

---

## 8. 待处理积压提醒
| Item | 类型 | 停滞时长 | 风险 | 建议动作 |
|------|------|----------|------|----------|
| [#1177](https://github.com/moltis-org/moltis/issues/1177) | **Security Bug** | < 24h | **极高** | **立即分派**、**建立私有修复分支**、准备 Security Advisory。 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | **Security Hardening PR** | ~5 天 | 高 | 加速 Review，合并后回溯至维护分支。 |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | **Infra PR** | ~4 天 | 中 | 关注 CI 通过情况，补充文档后合并。 |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | **Feature PR** | ~1 天 | 低 | 安排前端 Maintainer Review，快速合并释放用户价值。 |
| [#1178](https://github.com/moltis-org/moltis/issues/1178) | **Feature Request** | < 24h | 低 | 标记 `needs-design`，纳入下季度规划讨论。 |

---

> **总结**：**安全债务（Vault 认证缺失）为当前最大风险**，需零延迟响应；**可观测性、权限细化、Web 导出**三大生产级能力并行交付在即，合并后将显著提升项目企业级成熟度。建议维护者今日核心精力聚焦 **#1177 修复 + #1170/#1176 Review 合并**，其余按常规节奏推进。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-07-31

> **数据来源**: GitHub `agentscope-ai/QwenPaw` 仓库近 24h 活动 (Issues: 24, PRs: 48)  
> **报告生成时间**: 2026-07-31

---

## 1. 今日速览

*   **整体活跃度极高**：过去 24 小时共有 **72 条** 核心动态，其中 PR 更新 48 条（合并/关闭 25 条，待合并 23 条），Issue 更新 24 条（新开/活跃 18 条，关闭 6 条）。项目处于 **v2.0 发布后的密集迭代修复与架构重构并行期**。
*   **核心矛盾聚焦于 v2.0 架构债务偿还**：头部 Issue #6307 揭示的 **~2s 固定延迟回归** 仍在深度排查中；MCP 会话恢复 (#6524)、Context Compression 导致的数据丢失 (#6555, #6540)、Session Fork 管理混乱 (#6559) 等架构层面问题集中爆发。
*   **社区贡献活跃**：多个 "first-time-contributor" PR 被合并 (#6562, #6486, #6556, #6584)，修复覆盖了 Mission 模式 TypeError、Matrix E2EE、Creator 插件增强及 CI 稳定性，展现良好的外部协作生态。
*   **桌面端体验打磨加速**：原生 Computer Use 能力 (#6424 已合并)、全局快捷键唤起 (#6568)、应用名简化 (#6587)、文件上传中文名保留 (#6567, #6492) 等前端/桌面端改进 PR 密集涌现。
*   **风险提示**：CI 工作流 `real-behavior-proof.yml` 曾阻塞所有 Fork PR (#6563)，虽已紧急修复关闭，但提示 CI 鲁棒性需加强；大输出导致 UI 冻结 (#6589) 及 Shell 命令换行解析错误 (#6565) 严重影响核心工具链可用性。

---

## 2. 版本发布

**今日无新版本发布**。当前最新版本为 `v2.0.1`。大量修复型 PR 正在积累，预计将汇聚为 `v2.0.2` 或 `v2.1.0` 维护版本。

---

## 3. 项目进展：今日合并/关闭的重要 PR

以下 PR 已合并或关闭，标志着对应功能/修复已落地主分支：

| PR | 类型 | 核心变更 | 关联 Issue | 进展意义 |
| :--- | :--- | :--- | :--- | :--- |
| **[#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562)** | **Bug Fix** | 修复 `/mission` 命令 TypeError (#6533)、`spawn_subagent` 继承父会话 `approval_level: OFF` 失效 (#6506)、CloudPaw 兼容性问题。 | #6533, #6506 | **核心编排流程解阻**：Mission 模式与子 Agent 生成恢复正常，权限继承逻辑修正。 |
| **[#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486)** | **Bug Fix** | 修复 Matrix 端到端加密在 Python 3.12 下因 `olm` 依赖构建失败而不可用，改为探测 `vodozemac` 后端。 | #6476 | **通信基建修复**：解决 Matrix 频道加密在新 Python 版本上的可用性断层。 |
| **[#6556](https://github.com/agentscope-ai/QwenPaw/pull/6556)** | **Feature** | **Creator 插件大更新**：引入创建检查点、首页重设计、媒体恢复、导入导出、双语指南。 | - | **生态工具成熟化**：Agent 创作工作流工具链显著增强，降低开发者门槛。 |
| **[#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)** | **Feature** | **Computer Use 原生桌面自动化** 支持 Windows/macOS (Accessibility + Tauri 控制模式)。 | - | **里程碑能力落地**：Agent 具备原生 GUI 操控宿主机能力，从 "聊天助手" 向 "操作型 Agent" 跨越。 |
| **[#6584](https://github.com/agentscope-ai/QwenPaw/pull/6584)** | **CI Fix** | 修复 CI 变更检测逻辑，确保 `reload()` 能感知最新变更。 | #6563 (间接) | **工程效能保障**：修复因 CI 缓存/检测失效导致的 "假绿" 或 "假红" 问题。 |
| **[#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256)** | **Feature** | 沙箱不可用时的降级行为 (`SANDBOX_FALLBACK`) 支持配置化（可选：提示审批/拒绝/允许）。 | #6250 | **安全策略灵活化**：企业级部署对沙箱缺失场景的合规控制力增强。 |

> **整体推进评估**：今日合并 PR 质量高，**核心阻塞类 Bug 清零**（Mission、MCP加密、权限继承），**核心新能力交付**（Computer Use、Creator 插件），项目从 "v2.0 不可用" 向 "v2.0 可用/好用" 推进明显。

---

## 4. 社区热点：高讨论度/高关注度 Issues & PRs

| 排名 | 项目 | 标题 | 评论/互动 | 核心诉求分析 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **[Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)** | **[Performance] v2.0 introduces ~2s fixed overhead per simple conversational reply vs v1.x** | **7 评论** 👍0 | **架构性能回归核心痛点**。用户反馈 v2.0 简单对话固定 +2s 延迟，怀疑请求管道架构变更（如 Provider 统一路由、Context 压缩钩子、MCP 预热等）引入冷启动开销。维护者正深度 Profiling，关乎 v2.x 留存率。 |
| **2** | **[Issue #6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)** | **[Bug] MCP 后端重启后客户端无法自动恢复，需执行 list mcp 才能重新连接** | **5 评论** | **MCP 协议健壮性缺失**。`streamable_http` 模式下 Session ID 失效后无自动重连/重协商机制，导致长连接场景工具调用静默失败。PR #6586 正在修复中。 |
| **3** | **[Issue #6559](https://github.com/agentscope-ai/QwenPaw/issues/6559)** | **[Feature] Unwanted session forking during main conversation — no parent-child grouping** | **2 评论** 👍0 | **Session 管理体验崩塌**。主会话中系统自动创建大量 Fork 会话平铺列表，无树形分组/折叠/标记，用户无法区分主/子会话，历史追溯极困难。暴露 Session 模型设计缺陷。 |
| **4** | **[Issue #6555](https://github.com/agentscope-ai/QwenPaw/issues/6555)** | **[Bug] Dream/memory compression misses early-session events when context scrolls out** | **2 评论** | **长期记忆数据丢失**。Context Compression 滚动窗口机制导致早期关键操作在 Daily Memory 生成前被挤出，永久丢失。挑战 "压缩即遗忘" 的架构假设。 |
| **5** | **[PR #6540](https://github.com/agentscope-ai/QwenPaw/pull/6540)** | **fix(agents): add last-mile tool-message sanitizer before every model call** | **活跃讨论中** | **针对 #6407 的兜底修复**。孤儿 `tool_result` 消息泄露到 Provider API 导致 400 报错，在每次模型调用前强制清洗。体现 v2.0 Context 管理复杂度带来的边缘 Case 爆发。 |

---

## 5. Bug 与稳定性：按严重程度排序

| 严重度 | Issue | 现象描述 | 影响范围 | Fix PR 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (阻塞/数据丢失)** | **[#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)** | `execute_shell_command` 大量输出(万行)一次性渲染导致 **UI 主线程冻结**，需强杀进程。 | 所有执行长命令/大日志场景的用户 | ❌ 无 PR |
| **🔴 Critical** | **[#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555)** | **Dream 记忆生成丢失早期上下文** (Context Compression 窗口滚动导致)。 | 依赖长期记忆/日志审计的用户 | ❌ 无 PR (架构级修复) |
| **🟠 High (核心功能失效)** | **[#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565)** | `execute_shell_command` 多行命令换行被折叠为空格导致语法错误 + Linux PIPE 模式后台进程卡住。 | 所有 Shell 工具重度用户 | ❌ 无 PR |
| **🟠 High** | **[#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)** | MCP Server 重启后客户端 **不自动重连**，复用过期 Session ID 导致工具调用失败。 | 远程 MCP / 生产环境部署 | ✅ **[PR #6586](https://github.com/agentscope-ai/QwenPaw/pull/6586)** (Open, 待审) |
| **🟠 High** | **[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)** | `spawn_subagent` 单任务模式 `batch` 参数被 Schema 标记为 required，导致 **无法创建前台单子 Agent**。 | Mission 模式/复杂编排用户 | ❌ 无 PR |
| **🟡 Medium (体验/兼容性)** | **[#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557)** | MCP 工具名以 `-` 开头 (如 `-MCP__xxx`)，**触发 Kimi/Moonshot 等严格 API 400 报错**。 | 使用严格校验 LLM 提供商的用户 | ✅ **[PR #6561](https://github.com/agentscope-ai/QwenPaw/pull/6561)** (Open, 待审) |
| **🟡 Medium** | **[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)** | **v2.0 固定 ~2s 延迟回归** (架构开销)。 | 所有对话交互用户 | 🔍 **排查中** (无 PR) |
| **🟡 Medium** | **[#6578](https://github.com/agentscope-ai/QwenPaw/issues/6578)** (Closed) | Cron 任务 `dispatch.mode: "final"` 失效，中间事件实时推送。 | 定时任务/通知渠道用户 | ✅ 已关闭 (推测已修复或待验证) |
| **🟢 Low (UI/交互)** | **[#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)** | 聊天框底部 "已接收字符数" 动态闪烁干扰注意力，无关闭开关。 | 桌面端用户 | ❌ 无 PR |
| **🟢 Low** | **[#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)** | 拖入多文件时单行截断无法完整显示文件名。 | 多文件上传场景 | ❌ 无 PR |

---

## 6. 功能请求与路线图信号

结合 Issue 需求与现有 PR 进度，判断下一版本 (v2.0.2 / v2.1) 纳入概率：

| 需求 | Issue | 相关 PR / 信号 | 纳入概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **MCP 会话自动恢复/健壮性** | #6524 | **PR #6586 (Open)** | ⭐⭐⭐⭐⭐ **极高** | 生产环境刚需，PR 已提交，修复逻辑清晰。 |
| **MCP 工具名规范化 (首字符字母)** | #6557 | **PR #6561 (Open)** | ⭐⭐⭐⭐⭐ **极高** | 兼容性阻塞，修复简单 (前缀处理)，首选合并。 |
| **文件上传保留原始中文文件名** | #6453 | **PR #6567, #6492 (Open)** | ⭐⭐⭐⭐ **高** | 两个 PR 并行修复同一问题，用户体验强诉求。 |
| **Session Fork 树形管理/分组** | #6559 | 无 PR | ⭐⭐⭐ **中高** | 架构调整量大 (前端状态+后端模型)，可能延后至 v2.1 重构。 |
| **Computer Use 权限/隔离完善** | - | **PR #6590 (Open, macOS Screen Recording 修复)** | ⭐⭐⭐⭐ **高** | #6424 已合并，#6590 

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-07-31

> **数据基准**：GitHub 官方 API，统计窗口 2026-07-30 00:00 – 2026-07-31 00:00 (UTC)  
> **项目地址**：<https://github.com/qhkm/zeptoclaw>

---

## 1. 今日速览
- **整体活跃度**：**低**。过去 24 小时无新 Issue、无 PR 合并、无版本发布，仅有一个已存在 8 天的 PR（#645）在昨日（07-30）收到更新。
- **核心动向**：维护者 `qhkm` 正在推进 **Runtime 安全加固**（清理子进程环境变量、超时进程树回收），该 PR 处于“待评审/待合并”状态，尚未进入主分支。
- **社区互动**：零评论、零 Reaction，处于典型的“开发自驱、社区静默”周期。
- **健康度判断**：代码库处于**维护期/重构期**，短期无功能性交付压力，但安全相关 PR 审核滞后可能积累技术债。

---

## 2. 版本发布
**无新版本发布**。当前最新稳定版仍为历史版本（数据未提供具体版本号），请关注后续 `Release` 页面。

---

## 3. 项目进展
### 待合并 PR（1 条）
| PR | 标题 | 状态 | 影响模块 | 关键进展 |
|---|---|---|---|---|
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | `fix(runtime): scrub subprocess secrets and reap timed-out process trees` | **OPEN** (更新于 07-30) | `runtime` / `shell` / `docker` | 解决两类安全/稳定性隐患：<br>1. **凭据泄露**——子进程继承完整父进程环境，导致 Provider Key 等敏感信息外泄；<br>2. **僵尸进程/容器残留**——`Command::output()` 超时取消时未彻底终止并回收后代进程树及 Docker 容器。<br>**下一步**：需核心维护者 Review 并通过 CI，合并后将显著提升多租户/沙箱场景下的隔离性。 |

> **里程碑意味**：若合并，将标志着 ZeptoClaw 在“运行时安全基线”上迈出关键一步，为后续 Agent 沙箱化、多用户隔离奠基。

---

## 4. 社区热点
**无高热度讨论**。  
- 仅 PR #645 存在，评论数 0、Reaction 0。  
- 无 Issue 活动，无外部贡献者介入。  
- **信号**：项目当前处于**核心维护者单线推进**模式，社区生态尚未形成规模化反馈回路。

---

## 5. Bug 与稳定性
| 严重度 | 来源 | 描述 | 修复状态 |
|---|---|---|---|
| **High** (潜在) | PR #645 隐性暴露 | 子进程继承完整环境变量 → API Key/Secret 泄露风险；超时未回收进程树 → 资源泄漏、端口占用、容器残留。 | **已有 Fix PR (#645)**，待合并。 |
| — | 其它 | 过去 24h 无新 Bug 报告，无崩溃/回归 Issue。 | — |

> **建议**：优先安排 #645 的 Code Review 与合并，纳入下一个 Patch 版本（如 `v0.x.y+1`），并在 Changelog 标注 **Security Fix**。

---

## 6. 功能请求与路线图信号
- **显性需求**：无新 Feature Request Issue。
- **隐性路线图**（由 PR #645 推断）：
  1. **运行时沙箱化**——环境变量白名单、进程树强制回收、容器生命周期绑定。
  2. **多租户隔离**——为后续 “用户级 Agent 实例” 做底层准备。
  3. **可观测性增强**——超时/回收事件需结构化日志，便于审计。
- **下一版本可能纳入**：#645 合并后，预期将伴随一次小版本发布（`patch`），主打“安全加固”。

---

## 7. 用户反馈摘要
**数据为空**。过去 24h 无 Issue 评论、无 PR 讨论，无法提炼用户痛点或满意度。  
> **运营提示**：若项目进入对外推广期，建议引入 “Good First Issue”、Discord/论坛引导，打破“零反馈”僵局。

---

## 8. 待处理积压
| 实体 | 类型 | 停滞天数 | 关注理由 | 建议动作 |
|---|---|---|---|---|
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | PR (Security/Stability) | **8 天** (创建 07-23) | 核心安全修复，关联凭据泄露与资源泄漏，长期未合并将持续暴露攻击面。 | **P0 优先**：安排维护者本周内完成 Review + CI 绿灯 + 合并；同步打 Tag 发布 Patch 版本。 |
| — | Issue | — | 无长期未响应 Issue（当前 Open Issue 总数未提供，但 24h 无更新）。 | 定期执行 `stale` 机制清理。 |

---

### 📌 维护者行动清单 (Action Items)
1. **立即 Review #645** → 合并 → 发布 `vX.Y.Z+1` (Security Patch)。  
2. 在 Release Notes 明确标注：`BREAKING: subprocess env sanitization; timeout now kills process tree`，提醒下游适配。  
3. 考虑补充 **Runtime Security 文档**（威胁模型、配置白名单、审计日志格式），降低用户升级摩擦。  
4. 若资源允许，开启 Dependabot/CodeQL 定期扫描，防止同类环境变量泄露回归。

---

*报告自动生成于 2026-07-31 06:00 UTC | 数据源：GitHub REST/GraphQL API*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-31

---

## 1. 今日速览

- **整体活跃度：高**。过去 24 小时内无版本发布，但 **50 个 PR 处于待合并状态**，且有 **14 个 Issue 保持活跃更新**，显示项目处于密集的特性开发与安全加固并行阶段。
- **核心焦点**：安全加固（Webhook 认证、命令允许列表大小写敏感）、架构演进（记忆分离、OpenAI 兼容适配器、MoA 虚拟模型、Gemini 实时语音）、以及可观测性增强（OTel 跨轮次关联）。
- **风险信号**：新增 **S0 级安全漏洞（#9565）**：WhatsApp Cloud、Linq、WATI 三个 Webhook 处理器未验证签名即放行攻击者可控消息，已有修复 PR（#9569）待合并。另发现 **S2 级崩溃回归（#9572）**：WebSocket 处理导致 Tokio 工作线程栈溢出。
- **技术债治理**：CI 门禁收紧（rustdoc 警告阻断 #9545、PR 风险/体积标签自动重算 #9345）、WATI 渠道移除（#9571）、技能注入模式精简（#8313）等治理类 PR 推进中。
- **社区互动**：Issue 讨论多集中于 RFC 设计评审（如 #9048 记忆分离 12 条评论、#8603 OpenAI 适配器 7 条），维护者参与度高，但多数 PR 仍处于 `needs-author-action` 或 `needs-maintainer-review` 状态，合并吞吐可能成为瓶颈。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

> **注意**：数据显示过去 24 小时 **已合并/关闭 PR 为 0**。以下为 **待合并的高影响力 PR**，代表项目当前的主攻方向，一旦合并将显著推进代码库。

| PR | 标题/领域 | 关键变更 | 关联 Issue | 状态/风险 |
|----|-----------|----------|------------|-----------|
| [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) | **fix(gateway): fail closed when a WhatsApp Cloud or Linq webhook cannot be verified** | 修复 S0 漏洞：当未配置密钥或签名验证失败时，直接拒绝请求（返回 401/403），不再静默放行。 | #9565 | `OPEN` / `risk:high` **🔥 阻塞级安全修复** |
| [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) | **fix(security): match command allowlist entries case-insensitively on Unix** | 修复 Unix 下 `allowed_commands` 大小写敏感导致的误拦截（回归自 #4552），统一为不区分大小写匹配。 | #9566 | `OPEN` / `risk:medium` **🐛 回归修复** |
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) | **chore(channels): remove the WATI channel** | 彻底移除 WATI 渠道代码、配置、CI、容器、安装器等所有痕迹（配合 #9565 安全收敛）。 | #9565 | `OPEN` / `size:L` **🧹 代码瘦身/减少攻击面** |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) | **fix(security): default command audit logging to disabled** | 默认关闭命令审计日志，从示例配置中移除，修正操作员指引，避免虚假安全感。 | #9391 | `OPEN` / `priority:p1` **🔒 安全态势收敛** |
| [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) | **fix(runtime): make streamed user turns read as conversation, not log payloads** | 修复流式用户轮次被小模型误读为日志导致的协议式回复问题，恢复对话语义。 | — | `OPEN` / `risk:high` **🧠 体验关键修复** |
| [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) | **feat(runtime): add trusted goal tools and delegation boundaries** | 引入 `goal_start`/`goal_objective`/`goal_resume` 受信工具，建立目标级委托边界与人工闸口。 | — | `OPEN` / `size:XL` **🏗️ 核心架构里程碑** |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | **feat(plugins): validate typed instance config** | 插件配置强制声明 JSON Schema（Draft 2020-12），启动时校验，提前拦截配置错误。 | — | `OPEN` / `size:XL` **🔧 插件生态稳健性** |
| [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) | **feat(eval): append-only run-history receipts** | 评测运行追加只读历史记录，支持趋势分析与回溯。 | — | `OPEN` / `size:XL` **📊 评测基建** |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) | **feat(skills): default to compact injection, deprecate full mode** | 技能指令默认按需注入（compact），弃用全量注入模式，大幅节省 Prompt 预算。 | — | `OPEN` / `risk:high` **⚡ Prompt 工程优化** |

---

## 4. 社区热点

| Item | 类型 | 评论/👍 | 核心诉求/讨论焦点 | 维护者响应 |
|------|------|---------|-------------------|------------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | **RFC: 记忆分离** | 12 💬 / 0 👍 | **高优先级架构重构**：将会话历史与 Agent 策划的长期记忆在存储、生命周期、检索路径上彻底解耦。讨论集中于迁移策略、向后兼容、运行时/网关/渠道自动保存代码的改造范围。 | `needs-maintainer-review`，作者 Audacity88 持续推进，设计文档已迭代多轮。 |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | **RFC: OpenAI Chat Completions 兼容适配器** | 7 💬 / 0 👍 | **生态互通需求**：让 Open WebUI、LobeChat 等标准客户端零成本接入 ZeroClaw。核心争点：流式转换、工具调用映射、认证桥接、多模态支持边界。 | `status:in-progress`，REL-mame 主导，原型已在分支验证。 |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | **RFC: OTel 跨轮次会话关联** | 7 💬 / 0 👍 | **可观测性深化**：在 OTel 导出中携带 `gen_ai.conversation.id` 串联多轮对话，便于追踪与分析。讨论 ID 来源（入口会话 vs 内部生成）、传播链路、采样策略。 | `needs-maintainer-review`，FTDGRT 推进，依赖运行时观测事件总线改造。 |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | **Feature: local_small 运行时画像** | 7 💬 / 2 👍 | **本地模型极简模式**：压缩 Prompt、禁用宽容回退、防止系统指令泄露。解决本地小模型“幻觉协议输出”痛点。 | `status:accepted`，长期跟踪，依赖 #8313 技能精简与 #7951 努力路由落地。 |
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | **Bug: Webhook 未鉴权 (S0)** | 2 💬 / 0 👍 | **安全事件披露**：三大渠道 Webhook 处理器完全跳过签名验证。社区关注修复时效、是否已有在野利用、其他渠道（Matrix/Email/Telegram）是否同类问题。 | **已有修复 PR #9569**，同步移除 WATI (#9571)，维护者 JordanTheJet 极速响应。 |

---

## 5. Bug 与稳定性

| 严重级 | Issue | 标题 | 影响组件 | 复现/根因 | 修复 PR 状态 |
|--------|-------|------|----------|-----------|--------------|
| **S0** (数据丢失/安全) | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | **Gateway Webhook handlers do not fail closed (WhatsApp Cloud, Linq, WATI)** | `gateway/api` | 代码审计发现：`process_whatsapp_message`、`process_linq_webhook`、`process_wati_webhook` 均在 `if let Some(secret) = secret` 分支内验签，无 `else` 分支拒绝 → **无密钥配置时完全放行** | ✅ **[#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569)** 已开，待合并 |
| **S2** (退化/崩溃) | [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | **Debug gateway WebSocket turns can overflow the default Tokio worker stack** | `gateway/api` | Debug 构建下，WebSocket 处理 Agent 轮次递归/深度调用导致 Tokio 默认栈溢出 (`overflowed its stack`) | ❌ 无 PR，需增大栈或重构为异步非阻塞 |
| **S2** (退化) | [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) | **Uppercase allowed_commands entries never match on Unix (regressed from #4552)** | `security/sandbox` | `is_allowlist_entry_match` 仅在 Windows 分支做大小写折叠，Unix 直接 `==` 比较 → 含大写字母的条目永不命中 | ✅ **[#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568)** 已开，待合并 |
| **S3** (次要) | [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) | **cargo test --doc fails with duplicated rustdoc theme flag** | `tooling/ci` | Rust 1.96 将仓库级 `default-theme` 视为重复传递，导致文档测试失败 | ❌ 无 PR，需调整 `RUSTDOCFLAGS` 或 `doc` 配置 |
| **Support** | [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) | **How to disable auto-scroll in WebChat while agent is streaming?** | `WebChat` | 流式回复时自动滚动覆盖手动滚动，无法阅读历史 | ❌ 无 PR，属前端交互配置缺失 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR/进展 | 纳入下版本概率 | 备注 |
|----------|----------|--------------|----------------|------|
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | **Gemini Live 实时语音多模态渠道** (原生音频转音频、打断、函数调用) | 无 PR，仍在 RFC 阶段 | ⭐☆☆ (低) | 依赖运行时音频管线、工具审批闸口、跨渠道记忆等基建，属大型特性 |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | **Mixture-of-Agents (MoA) 虚拟模型提供商** (并行参考模型 + 聚合裁决模型) | 无 PR，设计讨论中 | ⭐⭐☆ (中) | 契合“模型路由/编排”战略，实现复用现有 Provider 抽象，工程量可控 |
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | **基于 Effort 的本地/云模型路由** (简单/延迟敏感留本地，困难升云) | 无 PR，`status:accepted` | ⭐⭐⭐ (高) | 与 #5287 `local_small`、#83

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*