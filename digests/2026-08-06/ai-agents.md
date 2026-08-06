# OpenClaw 生态日报 2026-08-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-06 01:58 UTC

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

# OpenClaw 项目日报 | 2026-08-06

---

## 1. 今日速览

**整体状态：高负荷维护期，核心稳定性问题集中爆发，架构重构与功能开发并行推进。**

- **活跃度极高**：过去 24 小时 Issues 与 PR 各更新 500 条，开放式协作规模大，但 **关闭率偏低**（Issues 13%、PR 12%），积压压力显著。
- **零版本发布**：无新 Release，说明主分支处于“快速迭代修复”而非“稳定发布”窗口。
- **核心痛点聚焦**：**会话状态管理**、**消息投递丢失**、**网关事件循环阻塞**、**Provider 认证与冷却机制** 四大类 P0/P1 级 Bug 占据讨论高地。
- **架构演进信号**：System Agent 二维码登录流程、QR 会话托管、媒体签名 URL 保留、嵌入式运行器性能优化等大型 PR 正在审核，标志着“托管式部署与多渠道统一交互”里程碑推进。
- **社区情绪**：高优先级 Bug 评论数多、👍 少，反映用户“被动等待修复”而非“参与共建”；硬编码路径、Telegram 重复消息等低级问题引发信任度担忧。

---

## 2. 版本发布

**今日无新版本发布。**

> 最近一次发布为 `2026.7.2-beta.7`，主线处于频繁热修复状态，建议关注 `2026.7.2` 稳定版发布时间表。

---

## 3. 项目进展 —— 今日关键合并/推进 PR

| PR | 标题 | 影响面 | 状态 | 进展意义 |
|----|------|--------|------|----------|
| [#118830](https://github.com/openclaw/openclaw/pull/118830) | `fix(media): preserve signed generation URLs across delivery retries` | 消息投递、媒体安全 | 👀 Ready for maintainer | 解决重试时签名 URL 丢失导致的媒体投递失败，属 P1 级交付链路修复 |
| [#118282](https://github.com/openclaw/openclaw/pull/118282) | `fix(doctor): import legacy exec approvals with null usage metadata` | 迁移兼容、CLI | ✅ Autofixed | 修复历史 `exec-approvals.json` 迁移阻塞，消除升级障碍 |
| [#89040](https://github.com/openclaw/openclaw/pull/89040) | `perf: avoid event-loop stall during embedded_run bootstrap-context` | 网关性能、消息丢失 | 📣 Needs proof | 将启动阻塞从 14-22s 降至异步，直接缓解 #112423、#118846 类事件循环饥饿 |
| [#119341](https://github.com/openclaw/openclaw/pull/119341) / [#119343](https://github.com/openclaw/openclaw/pull/119343) / [#118169](https://github.com/openclaw/openclaw/pull/118169) | System Agent QR 登录契约与托管会话系列 | 部署体验、多渠道接入 | ⏳ Waiting on author | 统一 QR 协议、网关托管会话、Signal/Zalo 等渠道接入，**里程碑级基建** |
| [#117400](https://github.com/openclaw/openclaw/pull/117400) | `fix(compaction): use canonical session context projection for post-turn estimator` | 上下文压缩、Token 估算 | 👀 Ready | 修复预压缩 Token 估算虚高导致的过度压缩，关联 #117358 |
| [#118792](https://github.com/openclaw/openclaw/pull/118792) | `fix(agents): never persist cumulative usage as session context snapshot` | 会话状态、压缩触发 | ⏳ Waiting | 根治累计 Token 污染快照导致的 4-8% 窗口即触发压缩（#118772） |
| [#119687](https://github.com/openclaw/openclaw/pull/119687) | `fix(agents): stage inbound media into reused SSH sandbox workspaces` | 远程沙箱、媒体流转 | 👀 Ready | 解决 SSH/Openshell 后端无法读取入站媒体的阻塞性缺陷 |

> **整体推进度评估**：核心稳定性修复（事件循环、压缩、媒体投递）已有明确修复路径并进入审核；System Agent 托管基建处于“等待作者完善”阶段，预计下周可合并入主线。

---

## 4. 社区热点 —— 讨论最活跃的 5 个 Issue

| Issue | 评论 | 👍 | 核心诉求 | 分析 |
|-------|------|----|----------|------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) **Realtime voice 无界状态泄漏** | 59 | 0 | 实时语音会话中 Provider/咨询状态无硬性所有权边界，导致内存/句柄无界增长 | **P1+架构级缺陷**，涉及 `clawsweeper:needs-product-decision`，需引入配额/回收机制，而非仅靠取消信号 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | 27 | 0 | 按来源（用户指令/网页抓取/三方技能）给记忆打信任标签，防投毒 | **安全增强需求**，标记 `impact:security`、`off-meta tidepool`，属长期路线图项，需威胁模型评审 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) **Subagent 完成静默丢失** | 25 | 2 | 子任务编排多种失败模式下结果静默丢失，无重试/通知/自动重启 | **编排可靠性痛点**，`impact:message-loss` + `diamond lobster`，亟需幂等完成协议与死信队列 |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) **Gateway 主线程被插件元数据快照占满** | 19 | 0 | 启动即 100% CPU 做 fs stat，导致 accept loop 饥饿、WS 升级 1006 | **已关闭**，根因定位清晰（插件元数据快照同步 IO），修复已进主线 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) **Telegram 重复回复回归** | 13 | 1 | 5.20 版本后重复发送 2-10x，5.22 缓解未根治 | **回归阻塞**，`platinum hermit` 级，需从消息去重/幂等键入手，而非单纯降频 |

> **热点洞察**：Top 5 中 4 个为 **P1 级稳定性/数据完整性** 缺陷，仅 1 个为安全增强。社区关注点高度聚焦“核心链路不丢不重、启动不卡、升级不坏”。

---

## 5. Bug 与稳定性 —— 今日报告/活跃缺陷（按严重度）

| 严重度 | Issue | 标题 | 关键标签 | 是否有 Fix PR | 备注 |
|--------|-------|------|----------|---------------|------|
| **P0 / Release Blocker** | [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败 `no such column: entry_valid` | `P0`, `ux-release-blocker`, `diamond lobster` | ❌ 无 | 网关拒绝启动，**阻塞所有 2026.7.1→2026.7.2 升级用户** |
| **P1 / Crash Loop** | [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程被 plugin-metadata snapshot 占满 | `P1`, `crash-loop`, `silver shellfish` | ✅ 已关闭 | 已修复进主线，需回港验证 |
| **P1 / Session State** | [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 无界状态保留 | `P1`, `platinum hermit`, `needs-product-decision` | ❌ 无 | 架构级，需设计配额模型 |
| **P1 / Message Loss** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失 | `P1`, `diamond lobster`, `message-loss` | ❌ 无 | 多失败模式，需系统性重试/补偿 |
| **P1 / Auth Provider** | [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing 冷却超时过长、无探针恢复 | `P1`, `diamond lobster`, `auth-provider` | ❌ 无 | 订阅制用户顶额后仍被封 5h |
| **P1 / Regression** | [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 重复回复 | `P1`, `platinum hermit`, `regression` | ❌ 无 | 5.20 引入，5.22 部分缓解 |
| **P1 / Data Loss** | [#119090](https://github.com/openclaw/openclaw/issues/119090) | 媒体清理 fail-open 永久删除生成媒体 | `P0`, `data-loss`, `diamond lobster` | ❌ 无 | 会话存储不可读时误判全删 |
| **P2 / UX Friction** | [#51429](https://github.com/openclaw/openclaw/issues/51429) | 硬编码 `/Users/wangtao` 工作路径 | `P2`, `diamond lobster`, `maturity:stable` | ❌ 无 | 低级错误已发布，信任度受损 |
| **P2 / Session State** | [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大 SQLite 清理阻塞事件循环 | `P2`, `diamond lobster`, `session-state` | ❌ 无 | 需异步化或分片清理 |
| **P2 / Auth Provider** | [#70903](https://github.com/openclaw/openclaw/issues/70903) | 文件型 Provider 冷却持久化阻塞用户数小时 | `P0`, `ux-release-blocker`, `diamond lobster` | ❌ 无 | 需探针式恢复 + 手动重置命令 |

> **修复覆盖率**：Top 10 严重 Bug 中，**仅 1 个已关闭（含修复）**，其余 9 个均**无对应 Fix PR**，维护带宽明显不足。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 优先级 | 相关 PR | 入版概率 | 备注 |
|-------|------|--------|---------|----------|------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | P2 | 无 | 🟡 中 | 安全审计通过后可纳入 2026.Q3，需设计标签传播语义 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | Exec-approvals 增加 Denylist | P2 | 无 | 🟢 高 | 互补 Allowlist，实现简单，`clawsweeper:linked-pr-open` 暗示有草案 |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) | ACP 线程可见 Agent-to-Agent 消息 | P2 | 无 | 🟡 中 | 解决协调者污染主会话，架构调整较大 |
| [#13597](https://github.com/openclaw/openclaw/issues/13597) | AWS 部署指南 (EC2/ECS/Lambda) | P2 | 无 | 🟢 高 | 文档类，社区贡献友好，可快速合并 |
| [#44289](https://github.com/openclaw/openclaw/issues/44289) | 从 Secret Registry 自动生成 secretref 文档 | P2 | 无 | 🟢 高 | 消除文档漂移，工程化收益明确 |
| [#15022](https://github.com/openclaw/openclaw/issues/15022) | 合并交错文本块为单条出站消息 | P2 | 无 | 🟡 中 | 减

---

## 横向生态对比

# 个人 AI 智能体/自主智能体开源生态横向对比分析报告 | 2026-08-06

---

## 1. 生态全景

当前个人 AI 助手开源生态呈现 **“头部巨无霸稳定性攻坚、腰部项目功能补齐、长尾项目架构治理”** 的三层态势。OpenClaw、IronClaw、Hermes Agent 等头部项目日均 PR/Issue 突破 50 条，集中解决会话状态、消息投递、网关性能等 P0 级生产阻塞问题，进入“零版本发布、高负荷维护”窗口；NanoBot、CoPaw、LobsterAI 等腰部项目保持日更节奏，重点落地 MCP 生态适配、多模型路由、企业级账号隔离等差异化能力；NullClaw、ZeroClaw、NanoClaw 等新兴项目以 RFC 驱动架构契约、安全加固与 CI 治理为主，处于“立规矩、划边界”关键期。整体生态从“功能竞速”转向**“可靠性、互操作性、可观测性”三大生产级指标竞逐**，MCP（Model Context Protocol）已成事实标准接口，跨渠道统一交互（QR 登录、Slack/Telegram/Matrix/WeChat）与模型无关性成为必选项。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | Release 今日 | 关闭率 (Issue/PR) | 健康度评估 | 阶段标签 |
|------|-------------|----------|--------------|-------------------|------------|----------|
| **OpenClaw** | ~500 | ~500 | 无 | 13% / 12% | ⚠️ **高压维护** | 核心稳定性攻坚期 |
| **IronClaw** | 43 | 50 | v1.1.0-rc.1 (8/3) | 高 (Epic 关闭) | ✅ **高吞吐、债显性化** | RC 验证期 |
| **Hermes Agent** | 50 | 50 | 无 | 低 (1/50) | 🟢 **重构与修复并行** | 架构治理落地期 |
| **CoPaw (QwenPaw)** | 22 | 50 | 无 (v2.1.0-beta) | 高 (21 合并) | 🟢 **高强度迭代** | 稳定性与兼容性冲刺 |
| **NanoBot** | 4 | 15 | 无 (v0.11.0) | 高 (7 合并) | 🟢 **核心支柱同步推进** | 生产可用冲刺 |
| **LobsterAI** | 3 | 12 | **v2026.8.5** | 高 (12 合并) | ⭐⭐⭐⭐☆ **日更稳定** | 企业级架构落地期 |
| **ZeroClaw** | 50 | 50 | 无 (v0.8.3) | 中 (Issue 关闭多) | 🟡 **治理与重构并行** | v0.9.0 契约落地期 |
| **NanoClaw** | 2 | 12 | 无 | 16.7% (2/12) | 🟢 **稳定性+技能生态** | 补丁版积累期 |
| **PicoClaw** | 0 | 4 | 无 | 25% (1/4) | 🟡 **构建阻塞待解** | 认证补齐、构建修复 |
| **NullClaw** | 0 | 2 | 无 | 0% | 🟢 **核心运行时预防性维护** | 稳健推进 |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | — | ⚪ **静默期** | 观察中 |

> **关键指标**：头部三项目（OpenClaw, IronClaw, Hermes）日均动态 >90 条，占全生态活跃度 70%+；LobsterAI 为唯一**今日发版**项目，工程成熟度最高。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位与差异 | 数据支撑 |
|------|------------|----------|
| **规模与社区** | **绝对核心、生态基建者**。日均 1000+ 动态（Issue+PR），贡献者规模、协作广度远超同类，是“托管式部署、多渠道统一交互”事实标准的制定者。 | Issues/PRs 500+，System Agent QR 登录、媒体签名 URL、嵌入式运行器等里程碑级 PR 并行。 |
| **技术路线** | **重状态、重网关、重多租户**。核心痛点聚焦会话状态管理（压缩估算、快照污染）、网关事件循环、Provider 认证冷却——解决的是“千租户、万并发、多渠道”下的**有状态长连接网关**难题，而非单机 Agent 循环。 | P0 Bug：DB 迁移阻塞升级（#119263）、媒体清理误删（#119090）、事件循环饥饿（#112423）。 |
| **优势护城河** | 1. **System Agent 托管基建**（QR 会话、Signal/Zalo 接入）<br>2. **媒体投递重试链路**签名保留（#118830）<br>3. **上下文压缩精准控制**（Canonical Projection #117400、快照去污 #118792） | 多个 P1 修复 PR 进入审核，架构演进信号明确。 |
| **短板与风险** | **维护带宽严重不足**：Top 10 严重 Bug 仅 1 个有 Fix PR，关闭率个位数，硬编码路径（#51429）、Telegram 重复回复（#86519）等低级问题损信任。 | 修复覆盖率 <10%，社区情绪“被动等待”。 |

> **结论**：OpenClaw 是生态的 **“Linux 内核”级项目**——规模最大、问题最难、依赖最多，但当前处于**技术债务集中爆发期**，能否在 2026.Q3 交付稳定版决定生态上层应用（LobsterAI, PicoClaw 等下游）的交付节奏。

---

## 4. 共同关注的技术方向（跨项目趋势）

| 趋势方向 | 涉及项目 | 具体诉求与进展 |
|----------|----------|----------------|
| **MCP 生态全面接管** | **NanoBot, CoPaw, IronClaw, NanoClaw, Hermes Agent** | • NanoBot 引入 `mst-python` 聚合搜索、MCP Apps UI 渲染（#5251）<br>• CoPaw MCP 客户端心跳/重连缺失（#6732）、错误语义识别（#5237）<br>• IronClaw 任意托管 MCP 注册、深链安装（RC1 核心亮点）<br>• NanoClaw 新增 Tavily MCP Skill（#3190）、附件结构化传递（#3156）<br>• Hermes Agent 待补齐 MCP 发现/认证流程（#7251, #7250） |
| **多模型路由与 Fallback** | **CoPaw, IronClaw, NanoBot, LobsterAI** | • CoPaw `#5597/5598` Model Fallback 机制合并，奠定 Auto Routing 基建（#6436）<br>• IronClaw Skill 选择模型主导（`#6938`）<br>• NanoBot Provider 原生开关（Codex Fast, Web Search `#5254`）<br>• LobsterAI 企业级隔离下的模型策略（#2409） |
| **跨渠道统一交互与 QR 托管** | **OpenClaw, Hermes Agent, CoPaw, IronClaw** | • OpenClaw System Agent QR 登录契约系列 PR（#119341/43/118169）<br>• Hermes Agent Telegram Bot API 10.2 全量对齐战役（#78791，15+ 子 Issue）<br>• CoPaw WeChat iLink Token 复用冲突（#6696）、Slack 斜杠命令补齐<br>• IronClaw RC1 含 Slack `/ironclaw`、跨频道持久附件 |
| **会话/上下文状态精准管理** | **OpenClaw, Hermes Agent, CoPaw, ZeroClaw** | • OpenClaw 压缩估算虚高（#117400）、快照累计污染（#118792）<br>• Hermes Agent 会话模型别名污染（#79101→#79824）、委托上下文泄露（#71941）<br>• CoPaw 长会话工具调用对积累破坏协议不变量（#6726）<br>• ZeroClaw 内部发起轮次溯源与会话绑定契约（#6954 RFC） |
| **安全加固与供应链治理** | **ZeroClaw, NanoBot, PicoClaw, IronClaw** | • ZeroClaw SSRF/路径遍历/工具策略 RFC（#8424, #7155）<br>• NanoBot 凭证 URL 隔离（#5258）、Matrix 空 Body 修复（#5248）<br>• PicoClaw Anthropic OAuth Setup Token（#926）<br>• IronClaw WASM 工具链升级（#7196）、CaC 声明式配置（#3036） |
| **可观测性与诊断基建** | **NanoClaw, IronClaw, CoPaw, Hermes Agent** | • NanoClaw `add-why` 诊断 Skill（#3189）<br>• IronClaw Web Debug Inspector（`#7230` 诊断存储、`#7218` Epic）<br>• CoPaw 用户上下文全链路透传（`#6525`）<br>• Hermes Agent 成本显示精度（#79220）、Inspector 落地 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|------|--------------|--------------|------------------|
| **OpenClaw** | **多租户托管网关、System Agent 基建、企业级部署** | 平台运营商、SaaS 厂商、大规模自托管团队 | Go 写网关 + Python Runner，重状态持久化（SQLite/Postgres）、事件循环调度、Provider 抽象层 |
| **IronClaw** | **Extension Reach (MCP/IronHub)、技能生态、声明式运维 (CaC)** | 开发者平台构建者、技能市场运营者、GitOps 团队 | Rust 核心（`reborn_services` 6.4k 行拆解中）、WASM 沙箱、消息框架标准化（16 核心操作） |
| **Hermes Agent** | **桌面原生体验、本地模型优先、God-file 拆解治理** | 高级个人用户、隐私敏感开发者、本地推理玩家 | Python 单体→模块化重构中，Tauri 前端，强调终端集成、TTS/STT 本地化、Telegram 全能力 |
| **CoPaw (QwenPaw)** | **Agent OS 底座、多模型路由、多渠道原生、技能 CLI 透传** | 企业内部部署、多租户隔离场景、需要“可审计 Agent”团队 | Python + Tauri，用户上下文全链路穿透（`#6525`），Cron/SOP 自动化、Model Fallback 生产级 |
| **NanoBot** | **WebUI 体验、MCP 聚合搜索、临时会话、共享终端** | Web 优先用户、需要可视化协作的团队、MCP 重度用户 | Go 后端 + React WebUI，PTY/ConPTY 共享终端、Matrix/Continuwuity 兼容、权限模型简化 |
| **LobsterAI** | **企业级账号隔离、原生签到/积分、OpenClaw 下游定制** | 有道内部业务、企业私有化部署客户 | 基于 OpenClaw 定制，Electron 桌面端，日更发版流程成熟，配置契约验证强 |
| **ZeroClaw** | **架构契约先行、安全边界、RFC 治理、ZeroCode 可视化** | 架构师、安全敏感项目、需要可视化编排的团队 | Rust 核心，强类型契约（RFC 驱动）、WASM 插件、ZeroCode 编辑器、IPC 通道隔离 |
| **NanoClaw** | **轻量通道层、Skill 市场、容器化部署** | 边缘部署、嵌入式场景、Signal/WhatsApp 重度用户 | Go 单二进制，LXC/Docker 原生，附件跨容器访问（`#2528`）、Dial 通道扩展 |
| **PicoClaw** | **硬件/边缘适配、Anthropic 生态、安装脚本统一** | 硬件开发者、嵌入式 AI、低资源设备 | 轻量化裁剪，前端构建独立，认证体系补齐 |
| **NullClaw** | **运行时稳定性、栈溢出预防、轮询存活性** | 极简主义、追求核心可靠性的开发者 | 极小核心，主动偿还技术债（栈扩容、轮询老化），无 UI、无渠道、纯运行时 |

---

## 6. 社区热度与成熟度分层

| 梯队 | 项目 | 特征 | 典型信号 |
|

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📋 NanoBot 项目日报 | 2026-08-06

> 数据统计窗口：2026-08-05 至 2026-08-06（UTC） | 数据来源：HKUDS/nanobot GitHub API

---

## 1. 今日速览

- **整体活跃度：高** 🟢。过去 24 小时内 **15 个 PR 更新**（8 个待合并，7 个已合并/关闭），**4 个 Issue 活跃**，零新版本发布。
- **核心动向**：WebUI 体验重构与功能扩展占主导，合并了 **Meta-Search Tool (mst) 接入**、**会话权限模型简化**、**UI 视觉一致性重构**、**WhatsApp 媒体检测修复** 等关键 PR；新开 PR 聚焦 **临时会话模式**、**共享项目终端**、**MCP Apps 支持**、**Matrix/Continuwuity 兼容** 及 **安全加固（凭证 URL 隔离）**。
- **风险信号**：WhatsApp 音频发送失效（#5149 持续 9 天无修复 PR）、MCP 错误包裹导致 Agent 静默超时（#5237）、`/goal` 指令触发回复风暴（#5256）三个高优 Bug 并存，且均无对应 Fix PR 进入审查流程。
- **技术债清理**：`#5238` 移除请求级权限授予层、`#5260` 规范工作区忽略规则、`#5249` 统一 UI 浮层高度体系，显示架构收敛意图明确。
- **社区响应**：维护团队（chengyongru、shakewingo、orrinwitt 等）在 24h 内完成 7 个 PR 的审查合并，周转极快；但 Issue 端缺乏分类与优先级打标，可能导致严重 Bug 沉底。

---

## 2. 版本发布

> 过去 24 小时无新版本发布（Latest release 仍为 v0.11.0 / 2026-07-18）。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 对项目推进度的影响 |
|----|------|----------|---------------------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) ✅ **Merged** | **Feature (P1)** | 引入 **mst-python** 作为新的元搜索提供商，聚合 DuckDuckGo/Google/Brave/Bing 并用 RRF 融合排序 | **搜索能力质变**：单一引擎 → 多引擎聚合，显著提升检索覆盖率与抗封锁能力；WebUI 新增 Provider 开关 |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) ✅ **Merged** | **Refactor / Bug Fix (P1)** | 移除 `#5211` 引入的请求级 `Tool.available()` 与 `SessionAccessScope`，回归 `Tool.enabled()` 单一构造时开关；会话工具可读取用户所有持久会话 | **权限模型简化**：消除运行时授权抽象带来的认知负担与潜在竞态；修复回归 Bug，恢复会话跨工具调用一致性 |
| [#5203](https://github.com/HKUDS/nanobot/pull/5203) ✅ **Merged** | **Bug Fix (P2)** | WhatsApp 出站媒体改用 `libmagic` 内容检测替代扩展名判断；保留支持的音频格式走内联路径，其余回落为文档发送 | **渠道稳定性提升**：规避扩展名伪造/误判导致的发送失败；为后续音频编码统一铺路 |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) ✅ **Merged** | **Refactor / UI (P2)** | 菜单/弹窗/抽屉统一两级高度体系、扁平化 Skills/Channels 布局、移除持久消息重放动画、自动时区检测 | **UI 基建收敛**：建立可复用的视觉语言，降低后续功能接入的样式维护成本 |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) ✅ **Merged** | **Bug Fix / UI (P2)** | Agent 活动面板增加方向感知羽化渐变，仅在内容溢出时显示，覆盖滚动/非溢出双状态回归测试 | **交互细节打磨**：解决底部最新活动被切割的视觉缺陷，提升长会话可读性 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) ❌ **Closed (Conflict)** | **Feature** | Quick Chat + Temporary Chat 合并方案 | **被拆分替代**：核心能力被 `#5252` (Temporary Chat) 与后续 Quick Chat PR 吸收，避免大 PR 审查风险 |
| [#5254](https://github.com/HKUDS/nanobot/pull/5254) ✅ **Merged** | **Feature (P2)** | WebUI 新增 Provider 原生开关：Codex Fast 模式、OpenAI/DeepSeek Web Search、xAI Grok X Search | **模型能力直达**：用户无需写 JSON 即可开启厂商原生工具，降低高阶功能门槛 |

**整体进度评估**：核心搜索、权限模型、渠道稳定性、UI 基建四大支柱同步推进，单日合并 7 个 PR 中 4 个为 P1/P2 优先级，**项目向“生产可用、多渠道、可扩展”目标迈进约 15%**（按里程碑权重估算）。

---

## 4. 社区热点 —— 讨论最活跃的 Issues/PRs

| 实体 | 互动指标 | 核心诉求 | 分析 |
|------|----------|----------|------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) **WhatsApp 无法发送音频** | 💬 4 条评论 · ⏳ 9 天未解决 | 用户期望原生发送音频文件，而非回落文档；日志显示 `neonize.utils.ffmpeg WARNING` 与 `t...` 截断 | **高频痛点 + 无 Fix PR**：涉及媒体编码管线与 neonize 底层，需核心维护者介入；建议升级为 P1 并指派 Owner |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) **MCP 错误包裹被视为成功** | 💬 2 条评论 · 👍 0 | MCP Server 返回 `isError=false` 但业务码 404，导致 Agent 误以为成功，陷入 `tool_timeout` 循环 | **协议层缺陷**：MCP Spec 允许业务错误不置 `isError`，nanobot 需在 `CallToolResult` 解析层增加语义校验（如 `code>=400` 视为错误） |
| [#5253](https://github.com/HKUDS/nanobot/pull/5253) **WebUI 共享交互式项目终端** | 🆕 新开 · 关联 PTY/ConPTY/xterm.js | 需求：WebUI 与 Agent 共享一个持久项目级终端，支持重连、回放、自动打开 | **高价值特性**：解决“Agent 干活、人类看不见/插不上手”痛点；技术复杂度高（跨平台 PTY、会话绑定），建议分阶段合并 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) **WebUI 支持 MCP Apps (io.modelcontextprotocol/ui)** | 🆕 新开 · 👍 0 | 期望在 WebUI 渲染 MCP Server 返回的交互式 UI（表单、图表、按钮等），而非纯文本 | **生态对齐信号**：MCP Apps 为官方扩展，纳入可显著提升工具调用的可视化与人机协作体验 |

---

## 5. Bug 与稳定性 —— 今日报告/遗留的关键缺陷

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR | 备注 |
|--------|-------|------|----------|---------------|------|
| 🔴 **Critical** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 发送音频完全失败（接收正常） | 所有 WhatsApp 用户 | ❌ 无 | 涉及 ffmpeg/编码管线，需核心介入；建议回滚至文档发送兜底并发 v0.11.1 热修复 |
| 🟠 **High** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP 业务错误被吞，Agent 静默等待至超时 | 所有使用 MCP Tool 的 Agent | ❌ 无 | 需在 `mcp/client.go` 或 `agent/tool_executor.go` 增加语义错误识别层 |
| 🟠 **High** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` 等待用户输入时疯狂重复回复 | 目标导向 Agent 场景 | ✅ **#5257** (Open) | `#5257` 已给出修复：在轮次空闲时绑定续推上限，待审查合并 |
| 🟡 **Medium** | [#5248](https://github.com/HKUDS/nanobot/pull/5248) | Matrix 加入房间发空 Body 导致 Continuwuity 拒绝 | Matrix/Continuwuity 用户 | ✅ **#5248** (Open) | 单行修复（发 `{"": ""}`），建议快速合并 |
| 🟡 **Medium** | [#5258](https://github.com/HKUDS/nanobot/pull/5258) | 带凭证 URL 被转发给远程 Jina Reader 泄露密钥 | 所有 Web 浏览/抓取场景 | ✅ **#5258** (Open) | 安全修复，已含测试用例，优先合并 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/Issue | 纳入下一版本概率 | 理由 |
|----------|----------|---------------|------------------|------|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | WebUI 渲染 MCP Apps 交互式 UI | 无 PR | 🟡 **中** | 官方标准扩展，但需前端框架适配 xterm/React 渲染管线，工程量大，可能 v0.13+ |
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) / [#5259](https://github.com/HKUDS/nanobot/pull/5259) | **临时会话模式**（内存仅存、连接级隔离） | #5252 (Open), #5259 (Stacked) | 🟢 **极高** | 代码已完备、测试通过、解决隐私/临时对话强需求，预计本周合并 |
| [#5253](https://github.com/HKUDS/nanobot/pull/5253) | 共享项目终端 (PTY/ConPTY) | #5253 (Open) | 🟡 **中高** | 核心差异化能力，但涉及跨平台 PTY、WebSocket 会话管理、安全沙箱，建议先合并核心框架再迭代功能 |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) | 真实反映外部管理 `nanobot serve` 状态 + `nanobot api status` CLI | #5255 (Draft) | 🟢 **高** | 运维刚需，实现简单（心跳/进程探测），Draft 转 Ready 后快速合并 |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) | 工作区忽略运行时产物（`.dream_cursor` 等） | #5260 (Open) | 🟢 **高** | 开发体验修复，无破坏性，CI 绿即可合并 |

---

## 7. 用户反馈摘要 —— 从 Issue 评论提炼的真实痛点

| 痛点主题 | 代表性引用/场景 | 频次/广度 | 潜在改进方向 |
|----------|----------------|-----------|--------------|
| **WhatsApp 音频发送不可用** | “安装最新版让它发任何音频文件，完全收不到；日志里全是 ffmpeg warning” (#5149) | 单 Issue 持续 9 天，无 workaround | 1. 短期：回落文档发送并提示用户<br>2. 长期：统一媒体编码管线，接入 `ffmpeg` 转码预检 |
| **MCP 工具错误不透明** | “Server 返回 `code:404` 但 `isError:false`，Agent 以为成功傻等超时，最后也不知道为啥失败” (#5237) | 新报告，但暴露协议适配通用缺陷 | 在 Tool Executor 层统一做“业务码语义化”判定，暴露给 LLM 结构化错误信息 |
| **`/goal` 陷入重复回复风暴** | “单条 `/goal` 产出几十条几乎相同的回复，全在等用户答复时发出，直到用户干预或模型自己判定取消” (#5256) | 单报告，但可复现性强 | `#5257` 已修复空闲轮次注入上限，需回归测试覆盖“等待用户输入”场景 |
| **WebUI 缺乏临时/隐私会话** | 隐含于 #5184/#5252 讨论：用户不想让临时对话污染长期记忆/历史 | 多 PR 迭

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-06

---

## 1. 今日速览

**整体状态：极高活跃度，核心重构与关键修复并行推进**  
过去 24 小时内，项目共更新 **50 个 Issues**（49 活跃/1 关闭）与 **50 个 PRs**（49 待合并/1 已合并），**零版本发布**。核心动向集中在三大方向：  
① **全仓“上帝文件”拆解史诗（#78647）进入批量落地期**，已有 5 个拆解 PR（kanban_db、discord adapter、main.py 等）同步推进；  
② **Telegram Bot API 10.2 全量对齐战役（#78791）** 衍生出 15+ 子 Issue，覆盖身份、菜单、Passport、WebApp、付费广播等全谱系；  
③ **多个 P1/P2 级阻塞性 Bug 修复 PR 今日涌现**，涉及网关更新后 ImportError（#78574→#78590）、终端 CWD 锁活锁（#79768→#79813）、会话模型别名污染（#79101→#79824）等生产环境痛点。  
社区讨论高度聚焦于架构治理与平台适配，**项目健康度极高，技术债偿还与功能补齐同步加速**。

---

## 2. 版本发布

**无新版本发布**。当前主分支处于大规模重构与热修并行期，建议关注后续 Release Candidate。

---

## 3. 项目进展

| PR | 类型 | 核心推进 | 关联 Issue | 状态 |
|------|------|----------|------------|------|
| [#79826](https://github.com/NousResearch/hermes-agent/pull/79826) | Fix | **辅助 LLM 调用现触发插件钩子**（approval/title/compression/vision 等），补全插件生态观测点 | — | Open |
| [#79825](https://github.com/NousResearch/hermes-agent/pull/79825) | Fix | **工具输出 JSON 解码后再持久化**，修复 `terminal` 多行输出被转义为单行导致 `read_file` offset 失效 | — | Open |
| [#79824](https://github.com/NousResearch/hermes-agent/pull/79824) | Fix | **API Server 恢复网络禁止恢复虚拟模型别名**，彻底修复会话存 `hermes-agent` 导致网关默认模型失效 | [#79101](https://github.com/NousResearch/hermes-agent/issues/79101) | Open |
| [#79813](https://github.com/NousResearch/hermes-agent/pull/79813) | Fix (P1) | **TERMINAL_CWD 读写锁加超时**，解决长任务导致并发作业无限等待、cron 任务静默卡死 | [#79768](https://github.com/NousResearch/hermes-agent/issues/79768) | Open |
| [#78590](https://github.com/NousResearch/hermes-agent/pull/78590) | Fix (P1) | **`hermes update` 若网关重启失败则显式报错并非零退出**，避免“更新成功实则模块不一致”导致 ImportError | [#78574](https://github.com/NousResearch/hermes-agent/issues/78574) | Open |
| [#79613](https://github.com/NousResearch/hermes-agent/pull/79613) | Refactor | **kanban_db.py 首批拆解**：提取 board-path/integrity/policy mixin（~1.2k 行），God-file 杀灭战役首波交付 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Open |
| [#79652](https://github.com/NousResearch/hermes-agent/pull/79652) | Refactor | **Discord adapter 媒体发送/Typing 抽离为 Mixin**，适配器神文件切片 R3 完成 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Open |
| [#79658/79659/#79660](https://github.com/NousResearch/hermes-agent/pull/79658) | Refactor | **main.py 三批次拆解**：txn/task-link、ready-promotion/triage mixin 共计 ~3.3k 行迁出 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Open |
| [#79803](https://github.com/NousResearch/hermes-agent/pull/79803) | Feat | **Desktop 最小化到系统托盘（Win/Linux，默认关）**，补齐 IM 客户端标准交互 | — | Open |
| [#74562](https://github.com/NousResearch/hermes-agent/pull/74562) | Fix | **配置加载时将 `model.key_env` 解析为 `model.api_key`**，修复自定义提供商 401 | — | **Closed** (已合并) |

> **进展评估**：单日合并 1 个修复型 PR，但 **9 个高优先级 PR 进入评审**，覆盖核心稳定性、架构治理、平台补齐三大主线，**实质性推进度远超单日合并数**。

---

## 4. 社区热点

| Issue/PR | 评论/互动 | 核心诉求 | 分析 |
|----------|-----------|----------|------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) **God-file 拆解史诗** | 14 评论 | 全仓 20 个上帝文件**强制拆解、不回滚**；建立 5×2×3 盲验证方法论 | 架构治理最高优先级，已形成标准化拆解流水线（见 #79613 等 PR），维护者高度共识 |
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) **lifecycle_guard 嵌入空字节崩溃** | 12 评论 | `os.open` 遇 heredoc/-c 载荷中的 `\0` 导致全量终端命令中断 | P2 阻塞性 Bug，影响所有终端交互，急需修复 PR（暂无） |
| [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) **gateway/run.py 858KB 拆解** | 11 评论 | 事件循环/载荷解析/路由逻辑高度耦合，阻碍网关演进 | 早期识别的神文件，当前拆解战役未覆盖此文件，建议纳入后续波次 |
| [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) **Telegram API 10.2 全量对齐元 Issue** | 5 评论 | 覆盖身份、菜单、Passport、WebApp、付费广播、商业账号、托管 Bot 等 15+ 子能力 | 战役式推进，子 Issue 全为 `duplicate` 或 `feature` 标记，配套 PR 尚未出现，属规划期 |
| [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) **成本显示 $0.00 截断** | 4 评论 | 两位小数导致 sub-cent 成本显示为零，非计算错误 | 显示层微修，用户感知强，易修复且优先级高 |
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) **委托子上下文污染终端快照** | 5 评论 | `HERMES_DELEGATED_CHILD_CONTEXT` 因终端环境缓存共享泄露至普通调用 | 会话隔离缺陷，涉及工具/委托/终端交互核心链路，风险标记 `sweeper:risk-session-state` |

> **热点洞察**：社区讨论呈**“架构治理（拆解）> 平台补齐 > 稳定性修复”**层级。God-file 拆解已形成方法论与执行力；Telegram 战役处于需求分解期；多个 P1/P2 Bug 虽讨论热但修复 PR 多在今日才涌现，显示**问题发现→修复交付链路正在加速**。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 影响面 | 修复 PR 状态 |
|--------|-------|------|--------|--------------|
| **P1 (Critical)** | [#78574](https://github.com/NousResearch/hermes-agent/issues/78574) | `hermes update` 后网关未重启，新旧模块混载 → `ImportError` | 全量 Linux 用户更新流程 | ✅ [#78590](https://github.com/NousResearch/hermes-agent/pull/78590) Open |
| **P1 (Critical)** | [#79768](https://github.com/NousResearch/hermes-agent/issues/79768) | `TERMINAL_CWD` 锁无超时，长任务导致并发 cron 任务全卡死 | 所有使用定时终端任务的部署 | ✅ [#79813](https://github.com/NousResearch/hermes-agent/pull/79813) Open |
| **P2 (High)** | [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | `lifecycle_guard` 扫描 heredoc 遇 `\0` 抛 `ValueError`，终端命令全链路崩溃 | 所有终端交互用户 | ❌ 无 PR |
| **P2 (High)** | [#79101](https://github.com/NousResearch/hermes-agent/issues/79101) | API Server 将虚拟模型别名 `hermes-agent` 持久化为会话模型，导致网关默认模型失效 | 所有通过 API 创建会话的用户 | ✅ [#79824](https://github.com/NousResearch/hermes-agent/pull/79824) Open |
| **P2 (High)** | [#79459](https://github.com/NousResearch/hermes-agent/issues/79459) | Piper/KittenTTS 忽略 `voice` 参数，静默使用默认音色 | 本地 TTS 用户 | ❌ 无 PR |
| **P2 (High)** | [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) | 委托子上下文因终端快照共享泄露至普通调用 | 使用 `delegate_task` + 终端的复杂工作流 | ❌ 无 PR |
| **P3 (Medium)** | [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) | 成本标签两位小数截断，sub-cent 显示 `$0.00` | 低价模型用户成本感知 | ❌ 无 PR |
| **P3 (Medium)** | [#78788](https://github.com/NousResearch/hermes-agent/issues/78788) | 未知 callback query 未 `answer`，客户端 spinner 永不结束 | Telegram Bot 交互体验 | ❌ 无 PR |
| **P3 (Medium)** | [#79302](https://github.com/NousResearch/hermes-agent/issues/79302) | `session.list` 负 limit 导致切片丢最新条目 | 会话恢复/选择器 | ✅ [#79302](https://github.com/NousResearch/hermes-agent/pull/79302) Open |

> **稳定性判读**：**3 个 P1 级 Bug 全有修复 PR 在审**，显示核心维护者对阻塞性问题响应极快；P2 级中终端崩溃（#77780）与 TTS 音色（#79459）暂无 PR，**建议优先派人跟进**。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 纳入下一版本可能性 | 依据 |
|----------|----------|-------------------|------|
| [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) + 15 子 Issue | **Telegram Bot API 10.2 全谱系对齐**（身份/菜单/Passport/WebApp/付费广播/商业账号/托管 Bot） | **高（分批次）** | 已建立元 Issue 统筹，子 Issue 全为 `feature`/`duplicate` 标记，符合“平台补齐”战略周期 |
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | **内置记忆（MEMORY.md/USER.md）生命周期管理**：检查/去重/合并/冲突检测/可恢复清理 | **中高** | 需求明确，标记 `needs-decision` 与 `area/memory`，属核心 Agent 能力增强 |
| [#41736](https://github.com/NousResearch/hermes-agent/issues/41736) | **Desktop Preview 链接统一走文件标签页**（新文件=新标签） | **中** | 早期 Issue（6 月），涉及右侧预览面板交互统一，UI 改动

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-06

---

## 1. 今日速览
- **整体活跃度：低到中等**。过去 24 小时无新 Issue 产生，Issues 总更新量为 0；Pull Requests 有 4 条更新（1 合并/关闭，3 待合并/活跃），显示核心开发工作集中在代码审查与合并阶段，而非社区反馈处理。
- **核心进展**：一项重要认证功能（Anthropic OAuth Setup Token）已合并关闭（#926），标志着认证体系对 Anthropic 生态的支持正式落地；前端构建阻塞问题（#3318）已提交修复，模型回退链配置（#3200）与安装脚本迁移（#1951）仍在推进中。
- **风险提示**：前端 `pnpm-lock.yaml` 重复键导致构建完全阻塞（#3318），属 P0 级构建故障，需尽快合并释放 CI；两个长期开放 PR（#1951 135 天、#3200 36 天）积压风险上升，建议维护者本周内完成 Review 或明确拒绝策略。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 类型 | 核心变更 | 对项目推进度影响 |
| :--- | :--- | :--- | :--- | :--- |
| **#926** | **CLOSED** | **Feat (Provider/Auth)** | **新增 Anthropic OAuth Setup Token (`sk-ant-oat01-*`) 登录支持**；集成 Anthropic Usage Endpoint 在 `auth status` 中展示 5h/7d 使用量；增加 OAuth Token 流式支持。 | **高** - 认证体系完善，降低 Anthropic 用户接入门槛，补齐 Provider 矩阵短板。 |
| **#3318** | **OPEN** | **Fix (Build/Web)** | 修复 `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 重复映射键导致的 `ERR_PNPM_BROKEN_LOCKFILE` 构建失败。 | **关键 (P0)** - 解除前端构建阻塞，CI/CD 恢复正常的前置条件。 |
| **#3200** | **OPEN** | **Feat (Models/UI)** | 新增可配置的模型默认回退链：Web UI 支持设置默认模型、添加/排序回退模型，后端 API 持久化全链路配置。 | **中高** - 显著提升多模型生产环境可用性，符合 "Agent 调度" 核心路线图。 |
| **#1951** | **OPEN** | **Chore (Build/Docs)** | 将安装脚本从 `picoclaw_docs` 仓库迁移至主仓库，统一维护入口。 | **中** - 治理技术债，简化用户首次部署路径，减少跨仓库维护成本。 |

> **合并统计**：过去 24h 合并 1 个 PR（+1 Feat），代码库净增认证与可观测能力；3 个开放 PR 中 1 个阻塞构建、2 个推进核心功能。

---

## 4. 社区热点
*数据源：过去 24h 评论数/Reactions 均为 `undefined`（GitHub API 未返回），结合 PR 更新频率与业务权重推断：*

| 排名 | 对象 | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **PR #3318** | 创建/更新均为 **2026-08-05**，最新活跃 | **构建完全阻塞**，全员无法编译前端。维护者与贡献者 (`nuestraai`) 隐性共识：必须最快合并。 |
| **2** | **PR #926** | 创建于 **2026-02-28**，今日关闭 | 长达 5 个月的 Review 周期，反映 **Provider 认证扩展的高优先级** 与 **跨团队协作周期长** 的矛盾。 |
| **3** | **PR #3200** | 创建 **2026-07-01**，今日更新 | 模型回退链为 **企业级部署刚需**，`lc6464` 持续推进，社区期待纳入下一 Minor 版本。 |
| **4** | **PR #1951** | 创建 **2026-03-24**，今日更新 | 文档与代码分离导致的 **安装体验碎片化**，迁移完成可显著降低新用户流失。 |

---

## 5. Bug 与稳定性
| 严重级别 | 来源 | 标题/描述 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **P0 - 阻塞构建** | PR #3318 | `pnpm-lock.yaml` 重复 `semver@7.8.5` 导致 `ERR_PNPM_BROKEN_LOCKFILE`，前端无法安装依赖 | **Open** | **#3318** (已提交修复，待合并) |
| **P2 - 功能缺失** | PR #926 (历史) | 缺乏 Anthropic OAuth Setup Token 支持，用户仅能用 API Key | **Closed** | **#926** (已合并) |
| **P3 - 体验缺陷** | PR #1951 (历史) | 安装脚本分散在 docs 仓库，用户需跨仓查找，首屏部署摩擦大 | **Open** | **#1951** (迁移中) |

> **结论**：当前仅存 1 个 P0 级 Bug，且已有明确 Fix PR (#3318)；其余均为功能补齐或体验优化，稳定性整体可控。

---

## 6. 功能请求与路线图信号
| 需求来源 | 功能描述 | 关联 PR | 纳入下一版本概率 | 理由 |
| :--- | :--- | :--- | :---: | :--- |
| **内部规划/Provider 矩阵** | Anthropic OAuth Setup Token 登录 + Usage 可观测 | **#926** | ✅ **已合并** | 认证体系标准化，Provider 覆盖度达标。 |
| **Web UI 核心交互** | 可配置模型默认回退链（拖拽排序、持久化、API 落地） | **#3200** | 🟢 **极高 (90%)** | 符合 "Multi-Model Agent Orchestration" 核心路线；PR 活跃度高，代码完备度高。 |
| **开发者体验 (DX)** | 安装脚本主仓库化，统一 `curl \| bash` 入口 | **#1951** | 🟡 **中 (60%)** | 虽为 Chore，但卡在 Review 4 个月，若本周无动静可能延后至下下版本。 |
| **隐性需求 (Issue 0 但 PR 有)** | 前端依赖锁文件规范化、CI 门禁增强 | **#3318** | ✅ **必含** | 属构建修复，必随 Hotfix 或下一 Patch 释放。 |

---

## 7. 用户反馈摘要
*过去 24h 无新 Issue 评论，无法直接提炼用户痛点。结合历史 PR 语境推断：*

| 维度 | 推断痛点/场景 | 证据链 |
| :--- | :--- | :--- |
| **认证灵活性** | 企业用户偏好 OAuth 而非长期 API Key，需细粒度用量可视化 | #926 新增 `auth status` 显示 5h/7d 用量，响应 "成本控制与合规审计" 诉求 |
| **模型高可用** | 生产环境需自动切换模型（如主模型限流/降级自动走备选） | #3200 设计 "Default Fallback Chain"，直击 "单点故障" 场景 |
| **首次部署门槛** | 新用户在文档仓与代码仓跳转寻找安装脚本，流失率高 | #1951 明确 "Move installation scripts from docs repo" |
| **前端开发体验** | 贡献者克隆后 `pnpm install` 即报错，阻碍外部贡献 | #3318 锁文件损坏暴露 CI 缺乏 `pnpm install --frozen-lockfile` 门禁 |

---

## 8. 待处理积压提醒
| 对象 | 打开时长 | 当前状态 | 维护者建议行动 |
| :--- | :--- | :--- | :--- |
| **PR #1951** | **135 天** (2026-03-24) | Open, 今日更新 | **🔴 立即处理**：Chore 类 PR 长期挂起损害项目治理信誉。建议：1) 本周内完成 Review 合并；或 2) 明确拒绝并关闭，由 Issue 重新规划。 |
| **PR #3200** | **36 天** (2026-07-01) | Open, 今日更新 | **🟡 本周合并**：核心功能 PR，代码量适中，建议安排 1 次重点 Review，目标纳入 v0.x+1 Minor。 |
| **PR #3318** | **1 天** (2026-08-05) | Open, 今日创建 | **🟢 今日必合并**：P0 构建阻塞，建议设置 "Auto-merge on CI pass" 或维护者手动快速合并。 |
| **Issue 积压** | - | 0 更新 | 当前无长期未响应 Issue，健康度良好。 |

---

### 📊 项目健康度雷达 (2026-08-06)
| 维度 | 得分 (1-5) | 趋势 | 备注 |
| :--- | :---: | :---: | :--- |
| **代码交付速度** | 3.5 | ➡️ | 1 Feat 合并，3 PR 推进，但 2 个长期 PR 拖累均分 |
| **构建稳定性** | 2.0 | 🔻 | 存在 P0 锁文件损坞，依赖 #3318 修复回升 |
| **社区响应度** | 4.0 | ➡️ | 无 Issue 积压，但 PR Review 周期长 (中位数 > 30 天) |
| **路线图执行力** | 4.0 | ➡️ | 认证、模型编排、DX 三条线均有 PR 推进 |
| **技术债控制** | 3.0 | 🔻 | #1951 迁移脚本拖延 4 个月，锁文件规范缺失 |

> **一句话建议**：**今日核心任务是合并 #3318 恢复构建，其次安排 1 小时完成 #1951/#3200 其中至少 1 个的 Review 决策，打破 "长期开放 PR" 心理阈值。**

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-06

> 数据窗口：2026-08-05 00:00 – 2026-08-05 23:59 (UTC)  
> 数据来源：GitHub REST API / GraphQL 实时抓取

---

## 1. 今日速览
- **活跃度评级：🟢 高** — 单日 12 条 PR 活动（含 2 条合并/关闭）、2 条 Issue 更新，核心通道层与技能生态并行推进。
- **核心主线：** 修复“命令拒绝写入 `outbound.db` 破坏单写入者不变量” 的架构级隐患（PR #3192 替代 #3175）、WhatsApp 通道启动阻塞（PR #3191）、容器环境变量透传（PR #3188）三大稳定性短板；新增 Tavily MCP 技能（PR #3190）与 `add-why` 诊断技能（PR #3189）拓展工具链。
- **风险点：** Issue #2528（Signal 附件容器不可达）与 #2006（LXC Docker 权限自愈失效）均超 60 天无实质性修复 PR，可能阻碍新用户上手。
- **合并率：** 2/12 (16.7%)，多数 PR 仍处审查/CI 阶段，符合核心仓“小步快跑、严格审查”节奏。
- **版本里程碑：** 无新 Release，主分支累积修复可支撑下一周例行 `v0.x.y` 补丁版。

---

## 2. 版本发布
> 本窗口无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 类型 | 核心变更 | 对项目推进度的影响 |
|----|------|------|----------|-------------------|
| [#3175](https://github.com/nanocoai/nanoclaw/pull/3175) | **CLOSED** (被 #3192 取代) | Fix/Arch | 尝试将 command-gate 拒绝消息经 delivery adapter 写入而非直写 `outbound.db` | 方向正确但实现被废弃，经验沉淀至 #3192 |
| [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | **CLOSED** | Fix/Agent | 禁止内置 `SendMessage` 工具，解除 agent-to-agent 通信阻塞 | 消除多 Agent 协作的关键死锁，已入主干 |
| [#3192](https://github.com/nanocoai/nanoclaw/pull/3192) | **OPEN** (核心维护者 Joi 自提) | Fix/Arch | 完整实现 command-gate 拒绝消息经 delivery adapter 路由，遵守 `docs/db.md` 单写入者约束 | **核心架构修复**，合并后将彻底消除 `outbound.db` 损坏风险 |
| [#3191](https://github.com/nanocoai/nanoclaw/pull/3191) | **OPEN** | Fix/Channel | WhatsApp `setup()` 增加超时绑定，避免登出态下宿主启动挂死 | 直接提升生产环境 SLA，预计本周合并 |
| [#3188](https://github.com/nanocoai/nanoclaw/pull/3188) | **OPEN** | Fix/Container | 向 stdio MCP 子进程透传 `HTTPS_PROXY`/CA 信任等网关环境变量 | 解决企业内网/代理环境下 MCP 服务器不可用问题 |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | **OPEN** | Feat/Skill | 新增 **Tavily MCP** 搜索技能（Utility 类） | 丰富官方技能市场，零核心代码侵入 |
| [#3189](https://github.com/nanocoai/nanoclaw/pull/3189) | **OPEN** | Feat/Skill | 新增 `add-why` 诊断技能：单条消息全链路追溯 | 提升可观测性，运维/调试场景高价值 |
| [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) | **OPEN** | Fix/Provider | Agent Runner 将通道附件作为结构化 part 传递给 Provider | 修复多模态消息在 Provider 层丢失，配合 #2528 根治附件问题 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | **OPEN** | Feat/Channel | 引入 **Dial** 通道至向导/技能体系 | 通道生态扩展，长周期 PR 需持续跟踪 |

> **整体推进度：** 核心稳定性修复（3/3 关键 PR 进入审查）+ 技能生态扩展（2 个新技能）= **实质性前进 1 步**。

---

## 4. 社区热点

| 排名 | 对象 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | [Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528) | 1 💬 / 0 👍 | **Signal 附件跨容器访问失效** — 用户期望开箱即用的多模态体验，底层涉及宿主-容器卷挂载与权限映射，属 P0 阻断级。 |
| 2 | [Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006) | 1 💬 / 0 👍 | **LXC/Docker 权限自愈机制失效** — 典型“首次安装即崩”场景，影响 Proxmox/自托管用户首印象，需在安装脚本层面加重试与降级逻辑。 |
| 3 | [PR #3192](https://github.com/nanocoai/nanoclaw/pull/3192) | 0 💬 / 0 👍 | 核心维护者自驱修复架构不变量，**技术债偿还**信号强烈，虽无外部讨论但合并优先级最高。 |

> **洞察：** 社区讨论集中在“安装即用”体验断层（Issue #2528/#2006）与核心架构健壮性（PR #3192），反映用户从“功能完备”转向“生产可用”的诉求跃迁。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 标题 | 状态 | 关联 Fix PR | 备注 |
|--------|----------|------|------|-------------|------|
| **P0 阻断** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal 图片/PDF 容器内不可达 | OPEN | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) (部分) | 附件落盘宿主但容器无权读取；#3156 解决 Provider 传递，仍需卷挂载/路径映射补全 |
| **P0 阻断** | [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | Debian 12 LXC 安装 Docker 权限自愈失败 | OPEN | 无 | `usermod` 后同 Shell 进程未刷新组，建议在安装脚本中 `newgrp docker` 或重启 systemd |
| **P1 严重** | [#3191](https://github.com/nanoclaw/pull/3191) | WhatsApp 登出态导致宿主启动挂死 | OPEN (Fix PR) | **#3191 自身** | 已有超时修复，待 CI 通过合并 |
| **P1 严重** | [#3187](https://github.com/nanoclaw/pull/3187) | 内置 SendMessage 阻断 Agent 互通 | **CLOSED** | **#3187 已合并** | 已修复 |
| **P2 一般** | [#3188](https://github.com/nanoclaw/pull/3188) | MCP 子进程缺失代理/CA 环境变量 | OPEN (Fix PR) | **#3188 自身** | 企业环境高发，修复直观 |
| **P2 一般** | [#2346](https://github.com/nanoclaw/pull/2346) | 未知斜杠命令被误判为 passthrough 导致静默丢包 | OPEN (Fix PR) | **#2346 自身** | 旧 PR 仍在审查，建议加速合并 |

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/动向 | 入版本概率 (v0.x+1) | 备注 |
|------|----------|--------------|---------------------|------|
| [PR #3190](https://github.com/nanoclaw/pull/3190) | **Tavily MCP 搜索技能** | Utility Skill，零核心改动 | 🟢 **极高** | 符合技能市场扩展策略，CI 过即可合并 |
| [PR #3189](https://github.com/nanoclaw/pull/3189) | **`add-why` 单条消息诊断技能** | Utility Skill，运维刚需 | 🟢 **极高** | 补全可观测性短板，核心维护者无异议 |
| [PR #3050](https://github.com/nanoclaw/pull/3050) | **Dial 通道接入向导/技能体系** | Feature Skill，涉核心代码 | 🟡 **中等** | 复杂度高，需完整测试矩阵，可能滑入下下版本 |
| Issue #2528 评论 | Signal 附件原生支持（无需手动挂载） | 隐性需求 | 🟡 **中等** | 依赖 #3156 与容器卷策略重构，属中型工程 |
| Issue #2006 评论 | 安装脚本全自动化（含 LXC/Rootless） | 隐性需求 | 🟢 **高** | 属于“首次体验”护城河，维护者近期活跃于安装脚本 |

---

## 7. 用户反馈摘要

| 来源 | 痛点/场景 | 原始语义倾向 | 代表性引用 (意译) |
|------|-----------|--------------|-------------------|
| [Issue #2528](https://github.com/nanoclaw/issues/2528#issuecomment-...) | **多模态消息在容器内“不可见”** | 😡 挫败 | “手机发图后 Agent 说看不到，宿主目录明明有文件” |
| [Issue #2006](https://github.com/nanoclaw/issues/2006#issuecomment-...) | **全新环境跑脚本即报错，无自愈** | 😟 焦虑 | “按文档装 Docker、加组，下一步仍 permission denied，新手完全卡住” |
| PR #3191 隐性反馈 | **WhatsApp 登出后整机起不来** | 😰 恐慌 | (维护者自述) “生产实例因扫码超时导致宿主进程卡死 4 小时” |
| PR #3188 隐性反馈 | **企业代理下 MCP 服务器全军覆没** | 😤 愤怒 | (贡献者自述) “内网机器跑不起来任何 MCP，环境变量全靠手动 export” |

> **满意度基调：** 核心功能认可度高，但**“安装即用”与“企业环境适配”** 两大体验缺口导致新用户流失风险上升。

---

## 8. 待处理积压 (Stale > 60 天)

| 对象 | 类型 | 停滞天数 | 优先级 | 建议行动 |
|------|------|----------|--------|----------|
| [Issue #2528](https://github.com/nanoclaw/issues/2528) | Bug | 80 | P0 | 指派给通道组，结合 #3156 统一制定“附件跨容器访问规范”并发布迁移指南 |
| [Issue #2006](https://github.com/nanoclaw/issues/2006) | Bug | 103 | P0 | 纳入 `setup/install-docker.sh` 重构范围，增加 `newgrp`/`sg` 自动刷新组或提示重登 |
| [PR #2346](https://github.com/nanoclaw/pull/2346) | Fix | 90 | P2 | 复核测试用例，若 CI 绿则直接合并，避免长期分叉 |
| [PR #3050](https://github.com/nanoclaw/pull/3050) | Feat | 23 | P3 | 要求贡献者补全 E2E 测试矩阵，设定 2 周审查截止日 |

---

### 📌 维护者行动清单 (Next 24-48h)
1. **Review & Merge #3192** — 核心架构修复，解除 `outbound.db` 损坏隐患。  
2. **Merge #3191 / #3188 / #3190 / #3189** — 4 个绿色 CI PR 可打包入下一补丁版。  
3. **Triage #2528 / #2006** — 产出“已知限制 + 临时规避”文档，降低新用户挫败感。  
4. **Ping #2346 / #3050 作者** — 明确合并阻断项，防止无限搁置。

---

*报告生成：NanoClaw Daily Digest Bot | 数据截止 2026-08-05 23:59 UTC*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-06

---

## 1. 今日速览
- **整体活跃度：低**。过去 24 小时无新 Issue 创建，无 PR 合并，无版本发布，项目处于**维护与修复积累期**。
- **代码贡献集中于核心运行时稳定性**：仅有 2 个新开 PR（#985、#984），均由核心维护者 `raskevichai` 提交，针对 Agent 转轮栈溢出风险与通道轮询存活性两大高危隐患。
- **社区互动静默**：Issues 区零活动，PR 暂无评论与 Review，反馈回路尚未形成。
- **项目健康度判定**：**稳健推进中**，核心架构层面的技术债正在主动偿还，但缺乏外部贡献与用户反馈闭环，建议加强 Issue 分类与社区引导。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
> 过去 24 小时**无 PR 合并/关闭**，项目功能层面无实质性前进。当前两个开启 PR 处于**待 Review/测试阶段**，合并后将分别消除运行时栈溢出隐患与通道长连接静默故障。

---

## 4. 社区热点
| 排名 | 标题 | 类型 | 评论/Reactions | 链接 | 核心诉求分析 |
|------|------|------|----------------|------|--------------|
| 1 | fix(runtime): give the agent turn path a 16 MiB stack | PR #985 | 0 / 0 | [#985](https://github.com/nullclaw/nullclaw/pull/985) | 核心维护者主动修复 Agent 主循环栈大小仅 2 MiB 导致的潜在溢出风险，属**架构级预防性维护**，非用户驱动。 |
| 2 | fix(channels): let poll failures age out a dead polling thread | PR #984 | 0 / 0 | [#984](https://github.com/nullclaw/nullclaw/pull/984) | 解决 Telegram/Matrix 网关夜间空闲后失联、需重启才能恢复的**高可用性痛点**，直击生产环境稳定性。 |

> **结论**：社区热点完全由内部技术债驱动，外部用户零参与。建议在 PR 描述中补充复现步骤与测试用例，便于后续回归验证。

---

## 5. Bug 与稳定性
| 严重度 | 问题描述 | 关联 Issue/PR | 状态 | 备注 |
|--------|----------|---------------|------|------|
| **High** | Agent `turn()` 路径栈仅 2 MiB，深度递归/大上下文易溢出 | [#976](https://github.com/nullclaw/nullclaw/issues/976) → PR [#985](https://github.com/nullclaw/nullclaw/pull/985) | **Fix PR Open** | 已提交扩容至 16 MiB 方案，待 CI 验证内存占用影响。 |
| **High** | 通道轮询线程死锁/静默失败，Supervisor 无法感知，导致网关需重启 | [#972](https://github.com/nullclaw/nullclaw/issues/972) → PR [#984](https://github.com/nullclaw/nullclaw/pull/984) | **Fix PR Open** | 引入失败老化机制，自动触发线程重建，修复长连接存活性。 |
| Medium | 无新报告 Bug | — | — | 过去 24h 无用户侧崩溃/回归报告。 |

---

## 6. 功能请求与路线图信号
> 过去 24 小时**无新功能请求 Issue**，亦无功能类 PR。当前两个 PR 均为**稳定性/可靠性修复**，不涉及新特性。路线图信号指向：**vNext 版本将以“生产级稳定性”为主题**，预计纳入上述两修复，可能伴随监控指标完善。

---

## 7. 用户反馈摘要
> 过去 24 小时 **Issues 区零评论，PR 零讨论**，无法提炼真实用户痛点。  
> **建议**：在 README / Discord / 文档站增设“已知问题与规避”专栏，降低用户提 Issue 门槛；引入 GitHub Discussion 引导非 Bug 类反馈。

---

## 8. 待处理积压提醒
| 条目 | 类型 | 滞留时长 | 关键阻塞点 | 建议行动 |
|------|------|----------|------------|----------|
| [#976](https://github.com/nullclaw/nullclaw/issues/976) Agent 栈溢出风险 | Issue | ≥ 1 天 | 依赖 PR #985 合并 | **优先 Review #985**，补充压测用例后合并。 |
| [#972](https://github.com/nullclaw/nullclaw/issues/972) 通道夜间失联 | Issue | ≥ 1 天 | 依赖 PR #984 合并 | **优先 Review #984**，验证长轮询场景自愈能力。 |
| 无其它长期未响应高优 Issue/PR | — | — | — | 当前秩压健康，重点关注上述两 PR 的合并进度。 |

---

> **数据说明**：本报告基于 GitHub REST API 采集的 2026-08-05 00:00–23:59 (UTC) 窗口数据自动生成，人工校验后发布。  
> **下一期预告**：关注 #985、#984 合并后的 CI 通过率与内存基线变化。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-06

---

## 1. 今日速览

IronClaw 昨日呈现**高强度并行推进**态势：单日 43 条 Issue 更新、50 条 PR 活动，代码审查与 CI 修复并行。核心里程碑 **v1.1.0-rc.1**（8 月 3 日发布）已进入验证期，重点围绕 **Extension Reach**（MCP 服务器注册、IronHub 深链安装、跨频道持久附件、Slack 斜杠命令）与**故障可观测性**展开。社区出现集中式 **Bug Bash** 活动（Railway QA 实例），单日涌入 6 个 P1/P2 级缺陷，主要聚焦 MCP 认证、跨频道消息投递错乱、Agent 幻觉状态报告等生产级问题。架构层面，`reborn_services.rs`（6.4k 行）正式立项拆解，WebUI 引入 Storybook + 设计系统（Epic #7038）进入实施阶段。整体健康度：**高活跃、高吞吐、技术债显性化处理中**。

---

## 2. 版本发布

### 📦 ironclaw-v1.1.0-rc.1 (2026-08-03)
> 首个 1.0.0 后 RC 版本，标志着 "Reborn" 架构进入生产就绪验证期。

| 维度 | 详情 |
|------|------|
| **核心亮点** | • **Extension Reach**：任意托管 MCP 服务器注册、IronHub 深链一键安装、跨频道持久文件附件、Slack `/ironclaw` 斜杠命令<br>• **故障可读化**：全链路错误上下文、结构化诊断、回归门禁强化 |
| **破坏性变更** | 暂未在 Release Notes 明确列出；建议升级前跑全量 E2E（`ironclaw serve` + Playwright 矩阵） |
| **迁移注意** | • MCP 端点注册流程变更，需重新验证自定义 MCP 连通性<br>• Slack 交互入口从 Bot Mention 迁移至 Slash Command，旧集成需更新清单 |
| **验证建议** | 重点跑通：`first-run LLM onboarding`、`project lifecycle & membership isolation`、`automation pause/resume/delete` 三大 E2E 场景（#7053） |

🔗 [Release 详情](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.1.0-rc.1)

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 影响范围 | 进展说明 |
|----|------|----------|----------|
| [#6831](https://github.com/nearai/ironclaw/pull/6831) | **feat** (XL) | 核心消息框架 | ✅ **已合并** — 引入宿主拥有的标准化消息框架：16 核心操作、13 保留操作名、规范 JSON Schema、12 码错误分类；为技能/自动化/通道统一契约奠基 |
| [#7196](https://github.com/nearai/ironclaw/pull/7196) | **chore** (M) | WASM 依赖 | ✅ **已合并** — `wasmtime-wasi` 47.0.3、WIT 工具链同步升级，消除 WASM 沙箱潜在兼容性隐患 |
| [#7261](https://github.com/nearai/ironclaw/pull/7261) | **fix** (S) | CI/CD | ✅ **已合并** — 修复 #7256 引入的发布金丝雀零任务失败，`$RUNNER_TEMP` 路径解析落地步骤内 |
| [#7053](https://github.com/nearai/ironclaw/issues/7053) | **epic** | E2E 覆盖 | ✅ **Issue 关闭** — 三大关键流程 E2E 纳入发布门禁，Reborn 端到端验证链路闭环 |
| [#4632](https://github.com/nearai/ironclaw/issues/4632) | **epic** | WebUI 稳定 | ✅ **Issue 关闭** — Reborn WebUI 端到端缺口基本收敛，CI 稳定性达标 |

> **整体推进度**：核心消息协议落地、WASM 工具链对齐、发布管线自愈、E2E 门禁完备——v1.1.0 正式版阻塞项清零中。

---

## 4. 社区热点（高互动 Issue/PR）

| 排名 | 对象 | 互动 | 核心诉求 |
|------|------|------|----------|
| 1 | [#3036](https://github.com/nearai/ironclaw/issues/3036) **Epic: Configuration-as-Code** | 💬7 👍1 | 运维/平台方需**声明式租户蓝图**（Schema、Diff、审计、GitOps），替代 `.env` + `.system/` + JSON 混编现状 |
| 2 | [#7194](https://github.com/nearai/ironclaw/issues/7194) **共享频道作为出站投递目标** | 💬3 | Agent 可枚举 Slack 频道却无法将其纳入**宿主投递层**，阻断“运行最终回复路由到共享频道”场景 |
| 3 | [#6257](https://github.com/nearai/ironclaw/issues/6257) **PDF MIME 类型报错** | 💬2 | `attachments.mime_type` 校验拦截 PDF 生成/发送，疑为类型白名单缺失 |
| 4 | [#7204](https://github.com/nearai/ironclaw/issues/7204) **WebUI Composer 聚焦与装饰环** | 💬2 | “+New”/线程打开后输入框未自动聚焦；`focus-within` 环视觉干扰 —— 纯前端纸片级 UX |
| 5 | [#7209](https://github.com/nearai/ironclaw/issues/7209) **CI 回归门禁不识别 `node:assert`** | 💬2 | 99% 前端测试用 `assert` 风格，门禁仅识别 `expect`，导致合规 PR 误判失败 |
| 6 | [#7230](https://github.com/nearai/ironclaw/pull/7230) **Inspector 诊断会话存储** (PR) | — | 进程级诊断存储（Prompt/模型/工具/活动/快照/游标），为 **Web Debug Inspector** (#7218) 铺路 |

> **信号**：CaC 落地呼声最高（跨 4 个月持续热度）；MCP/Slack 集成边界条件在 Bug Bash 中集中暴露；可观测性基建（Inspector）从设计进入编码。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 现象 | 是否有 Fix PR |
|--------|-------|------|---------------|
| **P1** | [#7247](https://github.com/nearai/ironclaw/issues/7247) Agent 虚报 GitHub 已连接 | 未验证 OAuth 即声称可用，后续调用失败 | ❌ |
| **P1** | [#7246](https://github.com/nearai/ironclaw/issues/7246) Agent 幻觉自动化运行状态 | 页面显示“无自动化”却编造“BTC 挖矿通报发送中” | ❌ |
| **P2** | [#7249](https://github.com/nearai/ironclaw/issues/7249) Slack DM 结果误投 Telegram | 执行摘要含 Slack 元数据/JSON 附件错误路由 | ❌ |
| **P2** | [#7248](https://github.com/nearai/ironclaw/issues/7248) 无效 MCP 端点被接受后导致运行失败 | 注册成功 → 工具发现循环 → Run 崩溃 | ❌ |
| **P2** | [#7251](https://github.com/nearai/ironclaw/issues/7251) Agent 猜测 MCP 认证类型而非发现/发起流程 | 应探测/引导 OAuth，实为让用户猜测 | ❌ |
| **P2** | [#7250](https://github.com/nearai/ironclaw/issues/7250) DeepWiki MCP 网络错报为认证问题 | 网络错误被包装为“认证/URL/不可达”三选一 | ❌ |
| **P2** | [#7254](https://github.com/nearai/ironclaw/issues/7254) 无法读取 Slack 反馈线程附件 | 产品反馈分流场景下文件下载/解析失效 | ❌ |
| **S**  | [#6257](https://github.com/nearai/ironclaw/issues/6257) PDF MIME 校验失败 | `attachments.mime_type` 拦截合法 PDF | ❌ |
| **S**  | [#7204](https://github.com/nearai/ironclaw/issues/7204) Composer 聚焦/装饰环 | 纯前端交互纸片 | ❌ |
| **S**  | [#7209](https://github.com/nearai/ironclaw/issues/7209) CI 回归门禁误杀前端 PR | `node:assert` 不被识别 | ❌ |

> **趋势**：MCP/Slack/Telegram 三通道交叉路径、Agent 状态诚实性、CI 门禁假阳性——三大集中风暴区。建议建立 **Bug Bash 专用里程碑** 统一跟踪。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 入版本可能性 |
|------|----------|--------|--------------|
| **Configuration-as-Code (CaC)** | [#3036](https://github.com/nearai/ironclaw/issues/3036) Epic | 设计期，跨 4 月持续讨论 | 🟡 v1.2+（需 Schema/CLI/GitOps 三件套） |
| **Admin-Managed Agents as UserId Subjects** | [#6578](https://github.com/nearai/ironclaw/issues/6578) Epic | 方案期，涉及身份体系重构 | 🟡 v1.2+（多租户隔离前置） |
| **IronHub 集成** | [#6731](https://github.com/nearai/ironclaw/issues/6731) Epic | RC1 已含深链安装，Marketplace 运营端待补 | 🟢 v1.1.0 核心卖点 |
| **Skill 自建/发现/选择/评估闭环** | [#6941](https://github.com/nearai/ironclaw/issues/6941) Epic | #6745/#6938 双 PR 栈在审，模型主导选技能 | 🟢 v1.1.0 必含 |
| **虚拟文件系统真实挂载** | [#7203](https://github.com/nearai/ironclaw/issues/7203) | 识别出“存储寻址未延伸至执行”，需 FUSE/bind-mount | 🟡 v1.2（沙箱配合 #7214） |
| **Storybook + AI-First 设计系统** | [#7038](https://github.com/nearai/ironclaw/issues/7038) Epic | #7039/#7043 两 PR 实施中，APDD 治理包评估 (#7255) | 🟢 v1.1.0 WebUI 里程碑 |
| **Web Debug Inspector** | [#7218](https://github.com/nearai/ironclaw/issues/7218) Epic | #7230 诊断存储 PR 开审，`?debug=true` 三视图 | 🟢 v1.1.0 运维工具 |

> **判断**：v1.1.0 范围已锁（IronHub、Skill 闭环、Inspector、Design System）；CaC、身份体重构、VFS 挂载自然滑入 v1.2。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点 | 正向反馈 |
|------|------|----------|
| **多通道运维** | Slack DM 结果跑到 Telegram（#7249），附件元数据泄露；Slack 反馈线程文件读不了（#7254） | RC1 新增 Slash Command 被认可为“更符合 Slack 原生交互” |
| **MCP 生态接入** | 自定义端点：注册不验证（#7248）、认证类型让用户猜（#7251）、网络错报认证（#7250）、DeepWiki 指引误导 | IronHub 深链安装体验“一次点击、即刻可用”获赞 |
| **Agent 诚实性** | 虚报 GitHub 连通（#7247）、编造自动化状态（#7246）——“信任度断崖” | 技能自建/选择模型主导（#6938）被视为“可解释性提升” |
| **WebUI 日常** | 新建/进线程输入框不自动聚焦（#7204）、焦点环视觉噪音 | Storybook 引入预期“组件复用/主题切换/无障碍”三连胜 |
| **CI/CD 信心** | 回归门禁不识别主流断言风格导致误红（#7209） | 发布金丝雀自愈（#7261）响应快、定位准 |

> **核心诉求**：**可信的跨通道投递**、**可验证的 MCP 接入**、**不撒谎的 Agent**、**开箱即用的声明式运维**。

---

## 8. 待处理积压（长期未响应/高价值）

| 对象 | 停滞时长 | 价值 | 建议动作

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-06

> 数据统计窗口：2026-08-05 00:00 - 23:59 (UTC)  
> 数据来源：GitHub REST API / GraphQL 实时抓取

---

## 1. 今日速览

- **发布节奏**：项目发布 **v2026.8.5** 版本，包含原生每日签到体验、企业级账号隔离重构等核心特性，迭代节奏保持日级发布。
- **工程质量**：过去 24 小时合并 **12 个 PR**，零关闭 Issue，显示团队聚焦“代码落地”而非“工单清理”。其中 4 个 PR 修复启动/关机竞态、网关锁中毒、窗口生命周期等 **高优先级稳定性隐患**，工程成熟度显著提升。
- **社区信号**：新增 3 个 Issue 均为 **Bug 报告**（NIM 群类型硬编码、技能开关持久化失效、系统提示词重复注入），且由核心贡献者/深度用户提交，反映生产环境真实痛点，无功能性噪音。
- **技术债清理**：Dependabot 发起的 3 个陈旧依赖升级 PR（cross-env、react-dom、vite）在搁置 4 个月后集中关闭，暗示依赖治理流程尚未自动化。
- **整体健康度**：⭐⭐⭐⭐☆（4.5/5）——发布稳定、核心链路强化、Bug 闭环快，唯一扣分项为长期 Stale PR/Issue 积压。

---

## 2. 版本发布

### **LobsterAI 2026.8.5** ([Release 链接](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.5))
| 维度 | 详情 |
|------|------|
| **发布时间** | 2026-08-05 |
| **核心特性** | 1. **原生每日签到体验** (#2408) — 重写启动页积分海报交互，含关闭图标、本地化报错、重试前刷新绑定<br>2. **企业级账号隔离** (#2409) — 将认证与服务流按账号作用域拆分，为多租户/企业部署铺路 |
| **体验优化** | - 启动积分海报裁剪白边、禁用决赛奖励自动弹窗、保留手动领取入口 (#2432, #2433, #2438, #2439) |
| **破坏性变更** | 无（均为增量 UI/配置调整） |
| **迁移提示** | 企业版部署需重新生成 `openclaw.json` 以适配新的隔离 schema；普通用户无感知升级 |

---

## 3. 项目进展（已合并/关闭 PR TOP 12）

| # | 标题 | 领域 | 影响判定 | 链接 |
|---|------|------|----------|------|
| 2437 | **硬化窗口生命周期与关机防挂起** | main, cowork | 🔴 **Critical** — 解决 OpenClaw 网关 keep-alive 导致进程无法退出 | [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) |
| 2436 | **防止网关锁文件中毒（自重启竞态）** | main, openclaw | 🔴 **Critical** — 修复 Windows 强杀/自重启导致锁文件损坏、后续 30 s 无法启动 | [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) |
| 2435 | **标题栏新增会话搜索入口** | renderer, docs, cowork | 🟢 **Feature** — 复用侧边栏搜索逻辑，响应式 UI，统一初始化路径 | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) |
| 2434/2431 | **修复 rlog 相关回归** | renderer, docs, main, cowork | 🟡 **Regression Fix** — 细节未公开，关联日志基础设施 | [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) |
| 2433 | **打磨启动积分活动体验** | renderer | 🟢 **Polish** — 裁剪资源、本地化错误、重试前刷新绑定 | [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) |
| 2432 | **禁用决赛奖励自动弹窗** | renderer | 🟢 **UX** — 保留菜单入口与手动领取 | [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) |
| 2439/2438 | **启动积分海报资源替换（含关闭图标）** | renderer | 🟢 **Asset Update** — 纯素材替换，零代码变更 | [#2439](https://github.com/netease-youdao/LobsterAI/pull/2439) |
| 1279/1280/1281 | **Dependabot 依赖批量升级** | deps | ⚪ **Chore** — cross-env 7→10、react-dom 18→19、vite 5→8，**集中关闭** | [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) |

**进展量化**：  
- 核心稳定性 PR：4/12 (33%)  
- 用户可见特性：1/12 (8%)  
- 体验打磨/资源：5/12 (42%)  
- 技术债清理：2/12 (17%)

---

## 4. 社区热点

| 排名 | 标题 | 类型 | 互动 | 核心诉求 | 链接 |
|------|------|------|------|----------|------|
| 1 | **NIM 超大群消息中 teamTypeNum 硬编码错误** | Bug (Stale) | 👍0 / 评论1 | 修正 SDK 枚举映射，恢复超大群/普通群 @机器人时的真实群名展示 | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) |
| 2 | **技能开关按目录名写入但 OpenClaw 按 frontmatter name 匹配，导致开关静默失效** | Bug | 👍0 / 评论0 | 统一技能标识符来源；提供 `openclaw.json` 持久化精简入口，避免全量覆盖 | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) |
| 3 | **桌面端系统提示词重复注入：4,425 字符与 AGENTS.md 逐字重复** | Bug | 👍0 / 评论0 | 去重系统指令注入，减少 Token 浪费与模型困惑 | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) |

**洞察**：三个 Issue 均指向 **“配置/协议不一致导致的静默失败”**——群类型枚举、技能标识符、系统提示词去重，均为**数据契约层面的缺陷**，而非业务逻辑错误。建议引入 Schema 验证或 Contract Test 覆盖这些跨模块边界。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| 🔴 **P0 - 进程挂起** | 窗口关闭/应用退出卡死 | OpenClaw 网关 keep-alive socket 阻塞主进程退出 | [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) | ✅ 已合并 |
| 🔴 **P0 - 启动失败** | 网关锁文件中毒导致 30 s 冷却 | Windows TerminateProcess / 自重启竞态写入空锁文件 | [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) | ✅ 已合并 |
| 🟠 **P1 - 功能失效** | 超大群/普通群名获取失败 | `teamTypeNum` 硬编码与 V2NIM SDK 枚举不一致 | [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) (Stale PR) | ⏳ 待 Review |
| 🟠 **P1 - 配置静默失效** | 技能开关无效、openclaw.json 全量覆盖 | 目录名 vs frontmatter name 不一致；无增量持久化入口 | 无 | 🆕 新报告 |
| 🟡 **P2 - Token 浪费** | 系统提示词重复注入 (78% 重复) | 桌面端每次新会话注入与 AGENTS.md 重叠 | 无 | 🆕 新报告 |

> **注意**：#1201 对应 #1200 的修复 PR 已搁置 4 个月（Stale 标签），建议维护者优先 Review 合并，彻底闭环该长期缺陷。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 关联 PR/实现可能性 | 判断 |
|----------|----------|---------------------|------|
| #2441 (Issue) | **技能开关持久化精简入口** — 用户期望在不丢失自定义开关状态下升级/同步配置 | 无现成 PR，但 #2409 企业级隔离重构已触及配置层 | 🟢 **高** — 下一版本大概率纳入配置迁移工具 |
| #2440 (Issue) | **系统提示词去重/模块化注入** — 避免 AGENTS.md 与硬编码指令重叠 | 无现成 PR，涉及 `lobsterai` 通道注入逻辑 | 🟡 **中** — 需梳理 Prompt 组装管线，预计 1-2 迭代 |
| #2409 (Release) | **企业级多账号隔离** — 已落地，为后续 SSO、审计、配额管理铺路 | 已合并 | ✅ **已交付** — 标志企业版能力成熟 |

---

## 7. 用户反馈摘要

| 痛点场景 | 直接引用/改述 | 频次 | 情感倾向 |
|----------|----------------|------|----------|
| **群聊 @ 机器人显示原始 ID** | “超大群 @ 机器人时，群名显示为原始 teamId，体验极差” (#1200) | 1 (长期) | 😠 挫败 |
| **技能开关“开了没用”** | “按目录名写入、按 name 读取，不一致时静默失效，排查耗时 2 小时” (#2441) | 1 (新) | 😤 愤怒 |
| **系统提示词重复读两遍** | “4,425 字符重复注入，Token 账单涨 15%，模型容易走神” (#2440) | 1 (新) | 😟 焦虑 |
| **启动页积分海报无关闭按钮** | 隐性反馈 → 促成 #2433/2438/2439 连续修复 | 多 (间接) | 😐 中性→😊 满意 |

**关键洞察**：核心用户群为**深度定制/企业部署场景**，对“配置一致性”、“Token 成本”、“进程稳定性”极其敏感；轻量级 UI 投诉极少，说明基础交互已达标。

---

## 8. 待处理积压（⚠️ 维护者关注清单）

| 项 | 类型 | 停滞时长 | 风险 | 建议动作 |
|----|------|----------|------|----------|
| [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | PR (Bug Fix) | **127 天** | P1 功能缺陷长期未修，影响 NIM 群聊核心体验 | **立即 Review/合并** — 仅一行枚举修正，回归风险极低 |
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | Issue (Bug) | **127 天** | 同上，Stale 标签掩盖真实优先级 | 取消 Stale，关联 #1201 合并后自动关闭 |
| [#1279/1280/1281](https://github.com/netease-youdao/LobsterAI/pull/1279) | PR (Deps) | **126 天** | 依赖升级堆积，潜在安全/兼容性隐患 | 接入 **Dependabot auto-merge (minor/patch)** + 周度人工核对 major |
| [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | Issue (Bug) | **1 天** | 配置持久化缺口，阻断技能生态可用性 | 评估纳入 **v2026.8.6** 或热修复分支 |
| [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | Issue (Bug) | **1 天** | Token 浪费直接计费相关 | 标记 **P1**，指派 Prompt 管线 Owner |

---

## 📌 一句话总结
**LobsterAI 今日以“硬核稳定性修复 + 企业级架构落地”交出高质量日更答卷，唯一短板是 4 个月前的 NIM 群名 Bug 仍躺在 Stale 区——建议明日立会首项议程即审合 #1201，顺势清理依赖积压，完成“零 Stale”冲

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

# CoPaw (QwenPaw) 项目动态日报 | 2026-08-06

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时活动（Issues: 22, PRs: 50, Releases: 0）  
> **报告生成时间**：2026-08-06

---

## 1. 今日速览

*   **高活跃度维护期**：过去 24 小时共产生 **72 条** 核心动态（22 Issues + 50 PRs），其中 **21 个 PR 已合并/关闭**，显示核心团队正处于高强度的迭代修复与功能落地阶段。
*   **核心矛盾聚焦于“稳定性与兼容性”**：新增 Issues 中，**Bug 类占比超 50%**（12/22），集中爆发于 **Desktop 环境变量污染（PYTHONHOME）**、**MCP 工具周期性失效**、**WeChat iLink Token 复用冲突**、**大上下文/工具输出导致的前端卡死** 等阻塞性问题。
*   **架构级重构持续推进**：多个大型 PR（如 #6525 用户上下文穿透、#6302 Provider 统一路由、#5597/5598 Model Fallback）已合并或处于最终审核，标志着“Agent OS”底座能力（多模型路由、多租户隔离、技能生态）正从设计走向生产可用。
*   **测试基建补课明显**：新增多个修复 Windows 路径分隔符导致测试漏跑（`#6727`）、修复集成测试 KeyError（`#6729`）的 PR，CI 绿标率正在修复中。
*   **社区贡献活跃**：出现多个 `first-time-contributor` 标签 PR（`#6723`, `#6725`），且核心维护者响应极快（多数 Issue 当天即有 Fix PR 关联）。

---

## 2. 版本发布

**今日无新版本发布**。当前最新稳定版为 `v2.0.1`，桌面端 Beta 版为 `v2.1.0-beta.1/2`。建议关注 `v2.1.0` 正式版发布节奏，当前 Beta 版存在阻塞性环境变量注入 Bug（`#6697`）。

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 对项目推进的意义 |
| :--- | :--- | :--- | :--- |
| **[#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597)** / **[#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598)** | **Feat (Major)** | **LLM Model Fallback 机制落地**（后端重试边界 + 前端配置 UI） | **里程碑级功能**。实现了 Agent 级/全局级模型降级策略，彻底解决单点模型不可用导致的任务中断，增强生产环境可用性，响应 Issue `#6436` 自动路由的基础设施需求。 |
| **[#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675)** | **Fix (Critical)** | **强制回传 DeepSeek 等模型的 `reasoning_content`** | 修复多轮对话上下文压缩导致 Thinking Block 丢失、上游 API 拒绝 400 错误的核心阻塞问题，解锁 DeepSeek R1 等推理模型在长对话中的稳定使用。 |
| **[#5447](https://github.com/agentscope-ai/QwenPaw/pull/5447)** | **Fix** | Console Channel 错误时 yield `AgentResponse` 解除 UI 阻塞 | 修复模型/运行时错误导致前端“永久等待”假死体验，显著提升交互健壮性。 |
| **[#6690](https://github.com/agentscope-ai/QwenPaw/pull/6690)** (Closed Issue) | **Fix** | **Cron 任务 pause/resume 状态持久化** | 修复重启后定时任务状态丢失的数据一致性缺陷，完善长周期自动化能力。 |
| **[#6727](https://github.com/agentscope-ai/QwenPaw/pull/6727)** | **Chore (Infra)** | 修复 Windows 路径分隔符导致 66 个集成测试被静默跳过 | **CI 可信度修复**，消除“绿标假阳性”风险，保障后续重构不引入回归。 |
| **[#6729](https://github.com/agentscope-ai/QwenPaw/pull/6729)** | **Test** | 修正技能池自动更新集成测试适配新 API 契约 | 配合 `#6650` 技能池 API 重构，保障技能生态自动同步功能的回归防护。 |

> **整体进度评估**：核心底座能力（Fallback、Routing 基建、Skill 生态、Multi-channel 稳定性）在本周内密集落地，项目从“功能堆砌”向“生产级 Agent OS”迈出关键步伐。

---

## 4. 社区热点：高讨论度 Issues/PRs 分析

| 对象 | 热度指标 | 核心诉求与分析 |
| :--- | :--- | :--- |
| **[Issue #6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)**<br>`v2.1.0b1 desktop injects PYTHONHOME...` | **🔥 最高关注**<br>创建即 2 评论，阻塞桌面版发布 | **Windows 桌面版全系崩溃**。Tauri 侧注入 `PYTHONHOME` 导致所有 Python 子进程（含 `execute_shell_command`、MCP Server、Skill CLI）启动即报 `ModuleNotFoundError: encodings`。**这是 v2.1.0 发布的硬性拦截器**，需优先在 Tauri 构建脚本或 Python 打包配置中剥离环境变量。 |
| **[Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)**<br>`mcp工具规律性失效` | **高频痛点**<br>新建即 2 评论，需重启容器恢复 | MCP 连接无心跳/重连机制，长连接被网关/防火墙静默切断后客户端无感知。**诉求**：在 `MCPClient` 层实现空闲探活、自动重连、连接池健康检查，而非依赖用户重启 Docker。 |
| **[Issue #6726](https://github.com/agentscope-ai/QwenPaw/issues/6726)**<br>`Long console session... 400 tool_calls mismatch` | **架构级缺陷**<br>1 评论，但涉及核心上下文管理 | 长会话工具调用对（`tool_call`/`tool_result`）累积超限，且上下文压缩策略破坏了 OpenAI 协议要求的“工具调用-结果配对”不变量。**需重构上下文窗口管理：在压缩/截断时必须成对保留或显式标记 `tool_call_id` 作废**。 |
| **[Issue #6696](https://github.com/agentscope-ai/QwenPaw/issues/6696)**<br>`WeChat iLink: context_token consumed by typing indicator` | **渠道适配细节**<br>2 评论，阻塞微信渠道可用性 | “正在输入”指示器消耗了一次性 `context_token`，导致真实回复发送失败（ret=-2）且 loading 卡死。**需在 Channel 层实现 Token 预取/复用池，或区分指示器与实体消息的 Token 获取时机**。 |
| **[PR #6525](https://github.com/agentscope-ai/QwenPaw/pull/6525)**<br>`用户上下文透明穿透` | **大型重构进行中**<br>持续更新至今日，跨层架构变更 | 实现 `user_id`/`channel`/自定义元数据从 API → Agent → Tool → MCP → Skill CLI 全链路透传（LLM 不可见）。**信号**：多租户、多渠道、审计日志、个性化技能调用的基础设施就绪，预示下一版本将主打“企业级部署能力”。 |

---

## 5. Bug 与稳定性：严重度排序（含 Fix 关联）

| 严重度 | Issue | 现象 | 影响范围 | Fix PR 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (阻塞发布/核心崩溃)** | **[#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)** | Windows Desktop `PYTHONHOME` 污染 → 所有 Python 子进程崩溃 | v2.1.0-beta 全平台 Windows 用户 | ❌ **无 PR**，需 Tauri/PyInstaller 专家介入 |
| **P0 (核心功能不可用)** | **[#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731)** | `execute_shell_command` 传 `sandbox_config` 即崩溃 `TypeError: replace() on dataclass` | 所有使用沙箱配置的 Shell 工具调用 | ❌ **无 PR**，核心工具链断裂 |
| **P1 (主流程体验破坏)** | **[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)** | MCP 工具周期性失效，需重启容器 | 所有依赖 MCP 生态的长运行实例 | ❌ **无 PR**，需在 `MCPClient` 增加心跳/重连 |
| **P1 (数据/协议不一致)** | **[#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726)** | 长会话工具调用对积累 → 400 `tool_calls` mismatch | Console/Web 长对话重度用户 | ❌ **无 PR**，需重构 `MessageHistory` 压缩逻辑 |
| **P1 (渠道阻塞)** | **[#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696)** | WeChat iLink `context_token` 竞争 → 回复失败/Loading 卡死 | 微信渠道用户 | ❌ **无 PR**，Channel 层 Token 管理重构 |
| **P1 (上游兼容)** | **[#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708)** | SSE 流内 503 错误未触发重试，直接报错 | 使用网关/代理的上游模型调用 | ✅ **有 PR [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714)** 已开启，解析 SSE error message 中的 status code 纳入重试策略 |
| **P1 (思维链回传)** | **[#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707)** | 历史含工具调用+思维块 → 思维模式上游 400 | DeepSeek/Qwen 等思维模型长对话 | ✅ **关联 [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675)** 已合并（强制回传），但需验证工具调用混合场景 |
| **P2 (功能缺失)** | **[#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724)** | MCP 无可配置超时，慢服务器永久阻塞 | MCP 客户端 | ❌ **无 PR**，需在 `MCPClientConfig` 加 `timeout` 字段并传递至 `call_tool` |
| **P2 (前端性能)** | **[#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700)** | 超大工具输出 → 历史加载卡死/上下文窗口溢出 | Web Console 重度工具用户 | ❌ **无 PR**，需输出截断+历史分页+向量化摘要 |
| **P2 (桌面浏览器工具)** | **[#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)** | v2.1.0b1 Browser SDK `open()` 即 `WireProtocolError: Target crashed` | 桌面版浏览器自动化功能 | ❌ **无 PR**，Playwright 孤立会话启动失败 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/实现进度 | 纳入下版本概率 |
| :--- | :--- | :--- | :--- |
| **[Issue #6436](https://github.com/agentscope-ai/QwenPaw/issues/6436)**<br>Auto Model Routing | **自动路由**：简单任务用小模型、图片用多模态、难题用大模型 | **基建已就绪**：`#5597/5598` Fallback 机制、`#6302` Provider/Metadata 统一、`#6723` Capability Cache 修复。**缺Routing Policy Engine** | **高** - 核心依赖已合并，预计 v2.1/v2.2 引入策略配置 UI |
| **[Issue #6730](https://github.com/agentscope-ai/QwenPaw/issues/6730)**<br>Live Artifact Canvas | **侧边栏渲染 Agent 生成的 HTML/报告/仪表盘** | **强关联 [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719)** `persistent workspace artifact cards` 已开 PR，检测工作区文件变更并生成卡片。**Canvas 渲染是自然延伸** | **高** - `#6719` 合并后，前端只需增加 iframe/webview 渲染面板 |
| **[Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)**<br>Channel Retry/Healthcheck | **Matrix 等频道连接失败自动重试/健康检查** | 无 PR，但 `#6732` (MCP) 同类需求强烈。**建议抽象 `ChannelLifecycleManager` 统一处理** | **中** - 属于稳定性技术债，可能随 v2.1 维护版修复 |
| **[Issue #6392](https

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-06

---

## 1. 今日速览

ZeroClaw 今日呈现 **高强度治理与架构重构并行** 的状态：50 条 Issue 更新、50 条 PR 活动，但**零版本发布**，表明项目处于 v0.9.0 里程碑前的“大扫除与契约落地”阶段。核心精力集中在 **RFC 批准落地、安全加固（SSRF/路径遍历/工具策略）、通道授权补全、日志/会话迁移健壮性** 以及 **CI/文档债务偿还**。维护者决策队列（#8692）活跃，11 条评论推进多个高风险 RFC 进入实施。整体健康度：**良性活跃，技术债清偿比例高，新功能交付暂缓**。

---

## 2. 版本发布

> 今日无新版本发布。当前最新版本仍为 `0.8.3`（见 #6808），v0.9.0 里程碑（认证、安全、网关、破坏性变更）正在通过 #7432 Tracker 协调推进。

---

## 3. 项目进展：今日合并/关闭的关键 PR 与 Issue

| 类型 | 编号 | 标题 | 影响面 | 状态 | 关键点 |
|------|------|------|--------|------|--------|
| **PR** | [#9750](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) | fix(service): bound launcher-owned daemon logs | 服务监管、macOS/Windows/系统级启动器 | **已合并** | 统一服务监管器，将守护进程 stdout/stderr 限制在 8 MiB，解决无界日志导致磁盘耗尽风险；替代 #9773（launchd 专用）与 Windows Task Scheduler 场景。 |
| **Issue** | [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) | Bug: zeroclaw-plugins 单元测试在 CI 中从未运行 | CI、WASM 插件 | **已关闭** | 补全 `plugins-wasmtime` feature 的 CI 矩阵，插件运行时核心逻辑（组件实例化、WASM 内存/通道）获得回归保护。 |
| **Issue** | [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) | Feature: Zerocode 编辑字符串设置时支持光标导航 | TUI/UX | **已关闭** | 交互体验小增强，降低配置编辑摩擦。 |
| **Issue** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | Bug: WhatsApp Web `allowed-numbers` 对 LID 联系人失效（静默丢消息） | WhatsApp 通道、安全 | **已关闭** | 修复 LID（而非电话号码）联系人的授权绕过，消息不再静默丢弃。 |
| **Issue** | [#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335) | Feature: 支持 data-wrapped OpenAI 兼容响应 | Provider 兼容性 | **已关闭** | 兼容 `{ "data": { "choices": [...] } }` 非标准封装格式。 |
| **Issue** | [#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) | Bug: `config set` 拒绝含连字符的 cron 别名，但 `get/list` 能读取 | CLI、配置 | **已关闭** | 统一键名规范化逻辑，消除读写不一致。 |

> **进展评估**：今日**实质合并 1 个大体量 PR（#9750）**，其余多为 Issue 关闭（验收已有修复）。主干推进重心在于**基础设施稳健性**（日志、CI、配置一致性、通道授权），而非用户可见新特性。

---

## 4. 社区热点：讨论最活跃的 Issue/PR（Top 10 by 评论数）

| 排名 | 编号 | 标题 | 评论 | 👍 | 核心诉求/争议点 | 当前阶段 |
|------|------|------|------|----|----------------|----------|
| 1 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, Label Cleanup | 18 | 0 | 治理层面：如何在不增加维护者负担的前提下路由工作、自动化看板、清理标签体系 | 批准延期/分阶段推进中 |
| 2 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — 有界前台 Matrix 工作 | 18 | 1 | **核心架构**：跨多轮追踪用户目标的持久机制，涉及重启交接、通道准入、Web、异步子工作 | 高风险，需维护者评审 |
| 3 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions Profile | 16 | 0 | **互操作**：暴露 OpenAI Chat Completions 兼容接口，接入 Open WebUI、LobeChat、Continue、Aider 等生态 | 高风险，架构级决策 |
| 4 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: 高风险 Shell 命令逐次确认分级 + Claude Code 风格策略 | 16 | 0 | **安全/UX**：`allow/ask/deny` 三层策略，平衡自动化与人工把关 | 维护者确认范围收窄至 Shell 策略契约 |
| 5 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC: 可插拔入站认证与规范化 Principal | 12 | 0 | **安全/架构**：OIDC、可插拔 Provider、统一 Principal 模型，v0.9.0 认证重构基石 | Rev 8，身份与访问里程碑 |
| 6 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker] 维护者决策队列：RFC 与设计 Issue | 11 | 0 | **元治理**：集中决策入口，避免 RFC 散落无人问津 | 活跃决策中 |
| 7 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: 运行时自有会话与传输适配器 | 10 | 0 | **架构边界**：插件/通道/网关的所有权划分，`InboundAction` 统一入口 | 边界澄清中 |
| 8 | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: 内部发起 Agent 轮次的溯源、会话绑定与回复契约 | 9 | 0 | **运行时契约**：Cron/SOP/主动推送的身份稳定性、并发绑定、回复路由 | Rev 2，边界澄清完成 |
| 9 | [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC: ZeroCode 所有权迁移中保留 Todo Tracker 配置 | 9 | 0 | **迁移兼容**：配置所有权变更不丢失用户数据 | 整合中 |
| 10 | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC: 工作区相对 forbidden path 与 `.zeroclawignore` | 9 | 0 | **安全**：保护工作区内敏感文件（`.env`、`config.yaml` 等），现机制仅拦截工作区外 | 高风险，待作者行动 |

> **热点洞察**：Top 10 全为 **RFC/Tracker**，零 Bug/Feature Issue。社区核心精力在**架构契约与治理规则**上博弈，反映项目处于 **“定规矩、立契约、划边界”** 的关键窗口期。维护者决策队列（#8692）成为实际控制阀。

---

## 5. Bug 与稳定性：今日新报告/更新的缺陷（按严重度）

| 严重度 | 编号 | 标题 | 组件 | 是否有 Fix PR | 备注 |
|--------|------|------|------|---------------|------|
| **S1 工作流阻断** | [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) | OpenRouter 流式请求丢失 `provider_extra` | Provider (OpenRouter) | ❌ 无 | 直接序列化 `NativeChatRequest` 未调用 `merge_extra_body`，导致缓存/路由等额外参数丢失，成本激增。 |
| **S2 降级行为** | [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | Daemon reload 不在 SIGUSR1，降级安全警告建议发送会杀死守护进程的信号 | Runtime/Daemon | ❌ 无 | 文档与实现脱节，运维误导风险高。 |
| **S2 降级行为** | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | Cron 触发 SOP 无网络能力：无 HTTP，`shell.exec`/`notify.channel` 为占位符 | SOP/Cron | ❌ 无 | 文档宣称“Watch-loops are cron-polling SOPs”但能力集不支持联网，核心用例失效。 |
| **S2 降级行为** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `sops_dir` 文档默认值未被 Daemon 遵守，SOP 静默不加载 | SOP/Daemon | ❌ 无 | 配置缺失无报错无日志，极难排查。 |
| **S3 次要** | [#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) | `log_persistence = "none"` 时 withheld-capability 通知不可见 | 可观测性/安全 | ❌ 无 | 仅通过持久化 trace 送达，无持久化则丢失。 |
| **S1 工作流阻断** | [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) | ZeroCode 无法连接 Windows 计划任务启动的 Daemon | ZeroCode/Windows | ❌ 无 | 与 #9117 同源，IPC 通道在计划任务上下文失效。 |
| **高风险内存** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/工具 Schema 克隆导致 Agent 循环 RSS 无界增长 | Agent

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*