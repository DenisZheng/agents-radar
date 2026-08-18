# OpenClaw 生态日报 2026-08-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-18 00:51 UTC

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

# OpenClaw 项目日报 | 2026-08-18

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：过去 24 小时累计 500 条 Issue 更新（482 新开/活跃、18 关闭）与 500 条 PR 更新（376 待合并、124 已合并/关闭），零版本发布。核心维护者（如 `steipete`）主导了十余个涉及 Gateway、Voice-call、Android、UI、SDK、脚本工具链的大型 PR，显示项目正处于**基础设施重构与稳定性攻坚并行**阶段。社区高频讨论聚焦于 **Agent 行为可观测性、Hook/子进程泄漏、会话状态丢失、多模型/多渠道配置灵活性** 四大痛点，P1/P0 级阻塞性 Bug 占比显著，释放出“生产可用性优先于新功能”的强烈信号。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展——今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **Security/UX** | Control UI 新增“安装策略警告确认”流程，管理员可审查后继续插件安装 | 插件生态、安全边界 | ✅ **Closed** |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **Security/CLI** | `security.installPolicy` 支持 `warn` 返回值，CLI 交互式确认可疑安装 | 供应链安全、运维体验 | ✅ **Closed** |
| [#120404](https://github.com/openclaw/openclaw/pull/120404) | **Agents/Memory** | `memory-flush` 追加写入返回符合 `outputSchema` 的完整细节 | 会话压缩、记忆一致性 | ✅ **Closed** |
| [#125242](https://github.com/openclaw/openclaw/pull/125242) | **UI/Polish** | 优化 Markdown 正文渲染呈现，修复富文本显示问题 | Control UI 可读性 | ✅ **Closed** |
| [#125485](https://github.com/openclaw/openclaw/pull/125485) | **Agents/Exec** | `exec` 工具描述新增 Unix Shell 元字符引用指导，规避 zsh glob 失败 | 工具调用成功率 | 🔄 **Open** |
| [#125484](https://github.com/openclaw/openclaw/pull/125484) | **Gateway/Transcript** | 持久化会话 `cwd` 到 transcript header，修复 worktree 场景下路径不一致 | 会话恢复、多工作区 | 🔄 **Open** |
| [#125469](https://github.com/openclaw/openclaw/pull/125469) | **Voice-call/Reliability** | Realtime 通话在短暂流重连中保持存活，解决网络抖动导致的掉线 | 语音通话可用性 | 🔄 **Open** |
| [#125458](https://github.com/openclaw/openclaw/pull/125458) | **Voice-call/Gateway** | 修复 Gateway in-process restart 后 `voicecall` CLI 死锁，增强重启存活 | 运维自动化、语音入口 | 🔄 **Open** |
| [#125332](https://github.com/openclaw/openclaw/pull/125332) | **Web UI/UX** | Composer 草稿（文本+附件）跨重启持久化，避免用户二次录入 | 控制台核心体验 | 🔄 **Open** |
| [#122764](https://github.com/openclaw/openclaw/pull/122764) | **Gateway/Queue** | 共享容量组调度器仲裁多车道容量，消除单车道饥饿 | 高并发网关吞吐 | 🔄 **Open** |

> **进展评估**：今日关闭 4 个高优 PR 涵盖安全、记忆一致性、UI 体验；在途 PR 多为 **P1/P2 级基础设施修复**（网关调度、语音通话存活、会话上下文持久化），显示项目正从“功能堆砌”转向“生产级可靠性打磨”。

---

## 4. 社区热点——讨论最活跃的 Issues（按评论数/👍数）

| Issue | 标题 | 评论 | 👍 | 核心诉求 | 关联标签 |
|-------|------|------|-----|----------|----------|
| [#77598](https://github.com/openclaw/openclaw/issues/77598) | **Track live dev agent behavior and trajectory** | 23 | 1 | 24h 连续观测开发者 Agent 行为轨迹，建立基线用于回归检测 | `maintainer`, `impact:session-state`, `impact:message-loss` |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | **Codex PreToolUse hook spawns CPU-bound processes, stalls gateway RPC** | 20 | 2 | `@openclaw/codex` 集成下 `pre_tool_use` hook 狂刷进程占满 CPU，阻塞网关 | `P1`, `impact:crash-loop`, `impact:message-loss`, `platinum hermit` |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | **Configurable streaming watchdog timeout threshold** | 15 | 8 | 长推理模型（Kimi/DeepSeek-R1）触发 30s 看门狗误报，需可配置阈值 | `P2`, `impact:ux-friction`, `diamond lobster` |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | **Coding Agent never completes anything (regression from 2026.4.2)** | 15 | 1 | 编码型 Agent 仅输出模糊状态更新，实质任务零完成，疑似回归 | `regression`, `P1`, `diamond lobster` |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | **"Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro** | 14 | 3 | 2026.3.2 起任何消息触发嵌入式 Agent 崩溃，模型提供商适配断层 | `regression`, `P1`, `platinum hermit`, `impact:auth-provider` |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | **AM embedded run aborts memory_search; classifies as timeout despite completion** | 14 | 3 | `active-memory` 插件 `memory_search` 被误判超时中止，实际模型已完成 | `P1`, `impact:session-state`, `clawsweeper-recovery-stuck` |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | **Umbrella: duplicate transcript/replay/context assembly across channels** | 14 | 0 | 多渠道（Teams/Webchat/Telegram/Followup）统一出现重复上下文组装 Bug | `maintainer`, `P1`, `gold shrimp` |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | **WhatsApp: Backfill missed messages after reconnection** | 13 | 1 | 断线重连窗口内的群消息静默丢失，无回填机制 | `P1`, `impact:message-loss`, `platinum hermit` |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **Leaks unreaped hook/tool child processes → zombie accumulation** | 9 | 1 | Hook/工具子进程未回收导致僵尸进程堆积，运行时随时间退化 | `regression`, `P1`, `gold shrimp`, `clawsweeper-recovery-stuck` |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | **Add MathJax/LaTeX Support to Control UI** | 8 | 10 | 控制台渲染数学公式需求，科研/教育场景高频 | `P3`, `off-meta tidepool`, `impact:ux-friction` |

> **热点画像**：
> - **P1 级稳定性/消息丢失** 占据前 10 席位的 7 个，`platinum hermit`（最高严重度）出现 4 次。
> - **Agent 行为不可控**（#77598、#62505）、**Hook/子进程失控**（#91009、#97616）、**多渠道上下文重复**（#69208）构成三大系统性风险。
> - 用户高赞（👍≥8）集中在 **可配置化**（看门狗、上传大小、LaTeX），反映“开箱即用配置不足”痛点。

---

## 5. Bug 与稳定性——今日报告/更新的关键缺陷（按严重度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 / Blocker** | [#70903](https://github.com/openclaw/openclaw/issues/70903) | Provider 计费 402 后写入持久化 `disabledUntil`，充值后仍长期封禁用户 | ❌ 无 | `ux-release-blocker`, `diamond lobster` |
| **P1 / Crash-loop** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex `pre_tool_use` hook 狂刷进程 → CPU 100% → Gateway RPC 卡死 | ❌ 无 | 需限流/熔断机制 |
| **P1 / Crash-loop** | [#45224](https://github.com/openclaw/openclaw/issues/45224) | Playwright CDP 断言错误未捕获 →

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-08-18

---

## 1. 生态全景

当前生态呈现 **“头部重基建、腰部拼生态、长尾守稳态”** 的三层结构。OpenClaw、NanoBot、Hermes Agent、IronClaw 四大头部项目同步进入 **生产级可靠性攻坚期**，核心指标从“功能完备”转向“P0/P1 缺陷收敛、多租户隔离、可观测性、成本治理”；LobsterAI、NanoClaw、Moltis、CoPaw 等腰部项目在 **运行时升级、多模型网关接入、本地化部署、协作 UI 打磨** 上并行推进，差异化切入垂直场景；NullClaw、TinyClaw、ZeptoClaw 处于低频维护或静默期。生态整体完成了从“原型验证”到“工程交付”的关键跨越，**安全合规、多渠道一致性、Agent 行为可解释性** 成为共识性硬指标。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 (新/关) | PRs 更新 (开/合) | Release | 核心健康度评估 | 阶段标签 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 482 / 18 | 376 / 124 | 无 | ⭐⭐⭐⭐⭐ **极高** | 基建重构/稳定性攻坚期 |
| **NanoBot** | 2 / 1 | 10 / 5 | 无 | ⭐⭐⭐⭐ **高** | 生产就绪收敛期 |
| **Hermes Agent** | 34 / 16 | 35 / 15 | v0.20.3 (08-16) | ⭐⭐⭐⭐ **高** | 版本冲刺/安全加固期 |
| **IronClaw** | 22 / 6 | 28 / 16 | v1.3.0-rc.1 | ⭐⭐⭐⭐ **高** | RC 冲刺/双轨并行 |
| **LobsterAI** | 7 / 0 | 3 / 18 | 无 | ⭐⭐⭐ **中高** | 技术债清仓/生态扩展期 |
| **NanoClaw** | ~10 / ~5 | ~10 / 25 | 无 | ⭐⭐⭐ **中高** | 核心架构落地/主干阻塞并存 |
| **Moltis** | 1 / 2 | 3 / 6 | 无 | ⭐⭐⭐ **中** | 高合并吞吐/长尾兼容性欠缺 |
| **CoPaw (QwenPaw)** | 8 / 6 | 13 / 22 | 无 | ⭐⭐⭐⭐ **高** | 高强度迭代/多会话隔离攻坚 |
| **PicoClaw** | 2 / 1 | 0 / 4 | 无 | ⭐⭐ **中低** | 偿还技术债/渠道补齐 |
| **NullClaw** | 0 / 0 | 1 / 0 | 无 | ⭐ **低** | 维护静默期/仅依赖更新 |

> **注**：OpenClaw 数量级显著高于其他项目（Issues/PRs 均为 500 条上限截断），反映其作为生态“上游核心”的超大规模协作强度。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 差异化证据 |
| :--- | :--- | :--- |
| **技术路线** | **“平台型内核 + 插件生态”** | 网关、Gateway、Transcript、Voice-call、Android SDK、Control UI 全栈自研；PR #122764 共享容量组调度、#125469 Realtime 存活、#125484 会话 `cwd` 持久化，显示其在**高并发网关、多模态实时通信、多工作区会话恢复**上构建护城河。 |
| **社区规模** | **生态“中央银行”** | 单日 500+ Issues/PRs 更新，核心维护者 `steipete` 主导十余大型 PR；`platinum hermit`/`diamond lobster` 等严重度标签体系成熟，吸纳 NanoClaw、LobsterAI、PicoClaw 等下游同步升级（LobsterAI #1663 升级至 v2026.4.12）。 |
| **优势** | 1. **全链路可观测性** 最完善（Hook 追踪、Transcript 审计、Realtime 监控）<br>2. **多渠道一致性** 架构领先（Web/Slack/Telegram/Teams/Voice 统一 Gateway）<br>3. **安全供应链** 成熟（Install Policy、SBOM、插件沙箱） |
| **挑战** | P0/P1 缺陷密集度高（子进程泄漏 #97616、Hook CPU 风暴 #91009、计费封禁 #70903），**生产可用性债务偿还压力大于新功能交付**。 |

---

## 4. 共同关注的技术方向（跨项目高频共振）

| 方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **Agent 行为可观测性与可解释性** | **OpenClaw** (#77598 24h 轨迹基线)、**NanoBot** (#4864 `complete_goal` 循环排查)、**Hermes** (#87654 Vision 工具消失缓存污染)、**CoPaw** (#7011 多会话信号泄漏) | 统一诉求：**结构化日志 + 会话回放 + 实时指标**，从“黑盒调试”转向“白盒治理”。 |
| **多渠道/多租户会话隔离与一致性** | **OpenClaw** (#69208 重复上下文组装)、**NanoClaw** (Channels Wave A/B `per-thread` 模型)、**IronClaw** (#7681 Slack 私密连接)、**CoPaw** (#7085 按频道独立模型) | 核心痛点：**上下文不污染、身份不穿透、配置可差异化**。NanoClaw `adapter-declared session-mode` 与 IronClaw 私密回复机制为典型解法。 |
| **生产级稳定性：熔断、自愈、资源配额** | **OpenClaw** (看门狗可配 #68596、僵尸进程 #97616)、**NanoBot** (Telegram Watchdog #5156、消费防火墙 #5409)、**Hermes** (libSQL 写饥饿 #7714/修复 #7717)、**Moltis** (Heartbeat PATCH 语义 #1209) | 从“尽力而为”转向**显式契约**：超时可配、重试有预算、进程有看门狗、Token 有硬上限。 |
| **本地化/私有化部署与模型网关扩展** | **LobsterAI** (dsh 引擎 #2502、OrcaRouter #2504)、**NanoBot** (Provider 容错 #5413)、**Moltis** (MiniMax Code ACP #1204)、**CoPaw** (AnySearch 接入) | 共识：**Provider Registry 单一事实来源 + 标准化 ACP/MCP 接口**，支撑“自带模型、自带网关、离线可用”。 |
| **安全边界与凭据治理** | **OpenClaw** (Install Policy `warn` #116489)、**Hermes** (凭据继承 #83565、Windows ACL #77462)、**NanoClaw** (Groups 目录守卫 #3308) | 核心动作：**最小权限原则落地**——插件安装确认、子进程凭据隔离、密文文件 ACL 硬化、残留数据拒收。 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构关键词 | 功能侧重差异 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级 AI 智能体平台内核** | 平台工程师、SaaS 厂商、大型研发组 | 微内核网关、插件沙箱、多运行时、Transcript 审计 | **全模态入口、多租户计费、供应链安全、极致可观测性** |
| **NanoBot** | **极客/开发者个人助手 + 轻量网关** | 个人开发者、小团队、Telegram 重度用户 | 单体 Rust + Telegram 深度绑定、原生 TUI、Cron 调度 | **Telegram 为第一公民、原生 CLI/TUI 体验、成本控制前置** |
| **Hermes Agent** | **桌面端原生 AI 应用** | 终端用户、桌面自动化场景 | Tauri/Rust 前端、Desktop 进程管理、技能市场 | **Desktop 稳定性、跨平台原生体验、技能分发、Cron 媒体投递** |
| **IronClaw** | **高性能、类 Unix 哲学的 Agent 运行时** | 追求极致性能/可组合性的工程师 | libSQL 耐久层、WASM 工具、ACP 协议、结构化输出终局化 | **DB 写入优化 (60%↓)、WASM 隔离、ACP 互联、Google Docs 语义编辑** |
| **LobsterAI** | **开箱即用的协作型 AI 客户端** | 非技术团队、中小企业、协作场景 | Electron + OpenClaw 下游、Cowork UI、多 Agent 编排 | **协作 UI 打磨 (分组/重生成/下载)、右键菜单、dsh 本地引擎、OrcaRouter** |
| **NanoClaw** | **多平台会话编排中台** | 需接入 Slack/Discord/Web 多渠道的开发者 | Channels/Drivers 双层抽象、Session Driver 接口、One-Door 投递 | **通道层标准化、运行时可插拔 (Docker/K8s/WASM)、会话生命周期钩子** |
| **CoPaw (QwenPaw)** | **国产化生态适配的全能桌面客户端** | 国内开发者、飞书/钉钉/微信生态用户 | Qwen 模型深度集成、OneBot 多协议、DataPaw 原生应用 | **DataPaw 数据分析应用、多项目目录、Provider 统一路由、PowerContext 记忆** |
| **Moltis** | **可编程的长期运行 Agent 编排器** | 需定时/事件驱动长任务的开发者 | Heartbeat 调度、External Agent (ACP)、Shadow DOM 浏览器 | **心跳调度、ACP 生态接入 (MiniMax)、受管文件库、浏览器自动化** |
| **PicoClaw** | **轻量级多渠道网关** | 资源受限环境、嵌入式/边缘部署 | Go 单二进制、Weixin/Slack/IRC 渠道、Agent 循环熔断 | **Agent 早停熔断、纯 Env 配置、微信多实例、Slack SDK 兼容跟进** |
| **NullClaw** | **实验性/维护模式** | — | Docker 基础镜像维护 | 无实质功能迭代 |

---

## 6. 社区热度与成熟度分层

| 梯队 | 项目 | 特征 | 典型信号 |
| :--- | :--- | :--- | :--- |
| **T1：核心基建期**<br>(高强度、高复杂度、高债务偿还) | **OpenClaw**, **IronClaw**, **Hermes Agent**, **NanoBot** | 日均 PR >15，Issue 讨论深度高，P0/P1 占比 >30%，有 RC/版本节奏，核心维护者全职投入 | OpenClaw 500+ PR/天；IronClaw Epic 驱动 60% DB 优化；Hermes 大文件拆解 20/20 完成；NanoBot Telegram Watchdog 落地。 |
| **T2：功能扩展与生态适配期**<br>(中高强度、重下游体验、重集成) | **LobsterAI**, **NanoClaw**, **CoPaw**, **Moltis** | 批量合并陈旧 PR（清仓式），新功能 PR 占比高（dsh、ACP、Channels、DataPaw），用户痛点 Issue 积压 (stale) 明显 | LobsterAI 单日合并 18 PR 含 UI/运行时/安全；NanoClaw 25 PR 落地 Channels/Drivers；CoPaw 22 PR 修复崩溃+推 DataPaw。 |
| **T3：维护/探索期**<br>(低频、单点修复、依赖更新) | **PicoClaw**, **NullClaw** | 修复阻塞性 Bug 为主，无版本节奏，社区互动近零 | PicoClaw 修复 Agent 死循环、Env 配置；NullClaw 仅 Dependabot Alpine 升级滞留 64 天。 |
| **T4：静默/归档态** | **TinyClaw**, **ZeptoClaw** | 24h 无任何活动 | — |

> **关键判断**：T1 梯队正经历 **“规模化带来的系统性故障爆发期”**（OpenClaw 子进程泄漏、IronClaw libSQL 饥饿、Hermes Windows ACL、NanoBot 网关序列化），能

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-18

> 数据范围：2026-08-17 至 2026-08-18 (UTC) | 数据源：GitHub API

---

## 1. 今日速览

**整体状态：高活跃度，核心基础设施稳健性显著增强，商业化前瞻性功能探索启动。**  
过去 24 小时内，项目共产生 **15 条 PR 更新**（其中 5 条已合并/关闭，10 条待合并）与 **3 条 Issue 活动**（1 条关闭，2 条新开/活跃）。合并的 PR 集中于 **Telegram 轮询故障自愈（#5156, #5301）**、**CLI 原生 TUI 落地（#5406）**、**目标循环修复（#5410）** 及 **网关进程身份稳定化（#5416）**，彻底解决了长期困扰生产环境的“静默掉线”与“进程身份漂移”问题。新开 PR 则聚焦于 **WebUI 会话协作（#5358, #5364, #5408）**、**跨平台兼容性（#5341, #5415）**、**安全加固（#5414）**、**Provider 容错（#5413）** 与 **观测性（#5412）**，显示项目正从“单体 Agent”向“多租户、多界面、生产级网关”演进。新 Issue #5409 提出“混合消费防火墙”，释放出商业化运营层面的成本控制强需求。

---

## 2. 版本发布

**无新版本发布。** 当前主分支积累了大量待发布修复与功能，建议维护者规划 vNext 里程碑发布。

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 影响面 | 进展评估 |
| :--- | :--- | :--- | :--- | :--- |
| **#5156** | **Merged** | **Telegram 轮询静默卡死自愈**：引入 Watchdog 机制，检测长轮询存活性，自动重建连接池。 | **Critical** - 生产环境稳定性 | 🟢 **重大里程碑**：彻底修复 #5171，消除“进程存活但消息不再接收”的幽灵故障。 |
| **#5301** | **Merged** | **Telemetry 增强**：将 stdlib logging 桥接至 loguru，新增轻量级存活探测日志（不重建连接）。 | Observability | 🟢 配合 #5156 提供可观测性基线，便于事后复盘。 |
| **#5406** | **Merged** | **原生 TypeScript TUI (`nanobot agent`)**：替换旧 Python TUI，支持跨终端渲染、键位绑定、流式 Markdown。 | **UX / CLI** | 🟢 **用户交互入口现代化**，解决 #4329 遗留合并事故，提供 `--classic` 回退。 |
| **#5410** | **Merged** | **目标循环澄清回复去重**：修复 `AgentRunner` 将普通文本响应误判为工具调用预算耗尽导致的重复注入。 | Agent Core / Reasoning | 🟢 修复目标执行逻辑回归，减少 Token 浪费与用户困扰。 |
| **#5416** | **Merged** | **网关进程身份稳定化**：macOS 采用 `proc_pidinfo` 出生时间戳替代 `ps lstart`，统一跨平台身份契约。 | Gateway / Infra | 🟢 解决因 Locale/格式导致的租约比对失败，提升网关集群一致性。 |
| **#5407** | Open | **Cron 系统任务退役修复**：禁用 `heartbeat`/`dream` 后，真正清理持久化的 `cron/jobs.json` 任务。 | Scheduling / Cost | 🟡 防止“已禁用任务仍按计划触发烧 Token”，配合 #5409 成本控制主线。 |

> **整体推进度**：核心通信链路（Telegram）、人机交互入口（TUI）、Agent 推理循环、网关基础设施四大支柱均有实质性合并，**项目进入“生产就绪”收敛期**，剩余 Open PR 多为功能扩展与边缘情况修复。

---

## 4. 社区热点

| 排名 | Item | 互动指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **Issue #4864** `[bug] Endless loop for complete_goal` | 💬 **7 评论** · 👍 **1** · 活跃至今日 | **网关参数序列化破坏性变更**：`complete_goal` 的 `recap` 参数被解析为裸字符串而非 JSON，导致 Agent 无限重试。7 条评论显示核心维护者与用户正深度排查，涉及工具调用协议契约不匹配，**阻断高级 Agent 工作流**，优先级极高。 |
| **2** | **Issue #5171** `Telegram polling stalls silently` | ✅ **Closed by #5156** | **生产环境“静默死亡”恐慌**：用户反馈网络抖动后 Bot 永久失联、日志无任何报错。PR #5156 合并彻底解决，社区信心恢复。 |
| **3** | **Issue #5409** `Prevent Margin Leaks: Hybrid Spend Firewall` | 🆕 **新开** · 0 评论 | **商业化成本控制前瞻**：作者以“未来商业化视角”提议引入**硬性预算上限、软性告警、熔断机制**，直指“用户无限循环导致破产”痛点。**强信号：项目正评估 SaaS 化运营模型**，需纳入路线图。 |

---

## 5. Bug 与稳定性

| 严重度 | Issue / PR | 标题 | 状态 | 关联 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (生产阻断)** | **#4864** | `complete_goal` 无限循环（参数解析错误） | **Open** | 无 | 网关序列化回归，影响所有依赖 `complete_goal` 的技能/工作流。需尽快 Hotfix。 |
| **🟠 High (功能失效)** | **#5171** | Telegram 轮询静默卡死不恢复 | **Closed** | **#5156 (Merged)** | 已修复并合并，含 Watchdog 自愈与日志桥接。 |
| **🟡 Medium (资源泄漏/成本)** | **#5407** | 禁用 Cron 任务后仍持续触发（心跳/梦境） | **Open** | **#5407 (Open)** | 修复 PR 已提交，待 Review。直接关联 Token 成本浪费。 |
| **🟡 Medium (跨平台兼容)** | **#5341** | Weather Skill Windows 下 `curl` 别名冲突 | **Open** | **#5341 (Open)** | PowerShell `curl` 别名指向 `Invoke-WebRequest`，导致命令失败需重试。 |
| **🟡 Medium (Windows 进程管理)** | - | 网关无法收养 venv 子进程 PID | **Open** | **#5415 (Open)** | Windows 下 `uv/venv` 启动器布局导致 PID 追踪断裂，影响进程生命周期管理。 |
| **🟢 Low (观测性缺失)** | - | 后台网关进程输出缓冲未刷新 | **Open** | **#5412 (Open)** | Python 块缓冲导致启动日志延迟写入文件，排查困难。 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR / 讨论 | 入版概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue #5409** | **混合消费防火墙**（硬限额/软告警/熔断/租户配额） | 无 PR | **高 (P0 规划项)** | 商业化必需，建议设立 `feat/billing-firewall` Epic，拆解为：配额中间件、实时计量、熔断策略、Admin API。 |
| **PR #5358** | **WebUI 会话间消息传递** (`@mention` 跨会话通信) | **Open** | **高** | 多 Agent 协作基础设施，配合 `#5364` Side Conversation 构建“工作空间级协作”。 |
| **PR #5364** | **WebUI 临时侧边对话** (`/side` 多标签并行) | **Open** | **高** | 类似 IDE 侧边栏/Notion 侧评论，提升复杂任务上下文管理体验。 |
| **PR #5408** | **WebUI 追问建议** (DeerFlow 风格空发即触发) | **Open** | **中高** | 降低用户认知负荷，提升留存，前端交互细节打磨项。 |
| **PR #5411** | **CLI 运行时隔离** (`agent_runtime` 模块化) | **Open** | **中** | 架构治理，为未来插件化/沙箱化铺路。 |
| **PR #5413/5414** | **Provider 异常兜底 / Slack 下载重定向校验** | **Open** | **中** | 生产级健壮性补丁，属于“防御性编程”常规迭代。 |

> **路线图推测**：**vNext 重点 = 稳定性收敛 + WebUI 协作闭环 + 成本治理雏形**。#5409 虽无 PR 但战略意义最高，建议本周内启动设计文档。

---

## 7. 用户反馈摘要

*   **痛点 1：网关协议脆弱性** (#4864 评论区)  
    > *“最近一次更新后 `recap` 变成了字符串，导致所有依赖结构化输出的技能全挂了，Agent 疯狂重试把配额跑光。”* —— **高频词：breaking change, serialization, token burn**  
    *启示：工具调用契约需版本化/Schema 校验，禁止隐式类型转换。*

*   **痛点 2：Telegram “幽灵掉线”信任危机** (#5171)  
    > *“进程活着、日志空的、消息堆服务器上、手动 getUpdates 正常……这简直是运维噩梦。”*  
    *启示：长连接组件必须具备 **主动探活 + 自动重建 + 结构化告警** 三件套，#5156/#5301 正是回应此诉求。*

*   **痛点 3：Windows 原生体验缺失** (#5341, #5415)  
    > 用户在 PowerShell 下遭遇 `curl` 别名、venv PID 追踪失效等“二等公民”问题。  
    *启示：CI 必须包含 Windows 矩阵测试，核心路径调用需显式路径或 `shim` 规避别名。*

*   **期望 4：多会话/多 Agent 协作** (#5358, #5364, #5408)  
    用户渴望在单一 WebUI 内并行处理多任务、跨会话引用上下文、获得智能追问建议 —— **从“单轮问答”向“协作工作台”跃迁**。

---

## 8. 待处理积压

| Item | 停滞时长 | 优先级 | 风险 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue #4864** `complete_goal` 无限循环 | **40 天** (创建 07-09) | **🔴 P0** | 核心技能不可用，Token 暴增，用户流失 | **立即指派 Owner**，发布 Hotfix 或回滚网关序列化逻辑；同步补全集成测试覆盖工具参数 Schema。 |
| **PR #5341** Weather Skill Windows 兼容 | 7 天 | 🟡 P2 | Windows 用户首次体验受损 | Reviewer 确认 `curl.exe` 显式调用方案，合并入主干。 |
| **PR #5407** Cron 任务退役修复 | 1 天 | 🟡 P2 | 静默烧 Token | 快速 Review 合并，配合 #5416 网关稳定性增强一同发布。 |
| **PR #5358 / #5364 / #5408** WebUI 协作三件套 | 1-5 天 | 🟢 P1 (Feature) | 功能分支冲突风险 | 建立 `feat/webui-collab` 叠加分支统一解冲突，集成测试后整体合并。 |
| **Issue #5409** 消费防火墙 | 0 天 | 🔵 P0 (Strategy) | 无工程实现，仅战略意图 | **本周内产出设计 RFC**，拆解为可执行 Epic，纳入下季度 OKR。 |

---

### 📌 维护者行动清单 (Action Items)

1.  **Firefighting**: 优先处理 **#4864** — 今日内定性、定责、出修复。
2.  **Merge Train**: 批量推进 **#5407, #5415, #5412, #5413, #5414** 等低风险修复 PR 合并，清理积压。
3.  **Integration**: 协调 **#5358, #5364, #5408** 统一 Rebase 解冲突，争取本周合并 WebUI 协作大特性。
4.  **Strategy**: 发起 **#5409** 设计讨论，明确计量粒度（Token/$/Request）、熔断动作（拒绝/

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-18

---

## 1. 今日速览

- **整体活跃度：高** —— 过去 24 小时共产生 **50 条 Issue 更新**（34 个新开/活跃，16 个关闭）与 **50 条 PR 更新**（35 个待合并，15 个已合并/关闭），显示核心维护团队与社区贡献者并行推进。
- **版本节奏：** 刚于 8 月 16 日发布 **v0.20.3 (v2026.8.16.2)**，为补丁版本，累计合并自 v0.20.2 以来约 125 个 PR，主要面向下游 Docker 镜像、托管部署与全新安装的稳定交付。
- **核心关注点聚焦于：** Desktop 客户端稳定性（后端进程残留、插件默认开启）、安全加固（凭据继承、威胁扫描截断、Windows ACL）、Cron 媒体发送超时配置化、以及会话/状态层的自愈与只读模型暴露。
- **技术债偿还：** 大文件拆解 Epic (#78647) 已完成 20/20 并关闭，标志着“神文件拆分”阶段性治理落地。
- **风险提示：** 技能索引已降级 29.8 小时 (#66616) 超过 26 小时阈值，CI 脆弱性 (#77476) 与 Windows 静默 ACL 失效 (#77462) 仍处于开放状态，需持续跟进。

---

## 2. 版本发布

### v0.20.3 (v2026.8.16.2) — 2026-08-16
- **性质**：补丁版本，滚动合并自 v0.20.2 以来 ~125 个 PR。
- **面向**：Docker 镜像构建、托管部署、全新安装的稳定基线。
- **破坏性变更**：无明确列出；按语义化版本为 PATCH，预期向后兼容。
- **迁移提示**：
  - 下游镜像建议重新构建以拉取最新依赖与安全修复。
  - 若使用技能索引 (`skills-index.json`)，需确认部署流水线中 `.github/workflows/skills-index.yml` 与 `deploy-site.yml` 正常运行，避免索引降级影响技能发现。
- **链接**：[Release v2026.8.16.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16.2)

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#88787](https://github.com/NousResearch/hermes-agent/pull/88787) | Bug Fix / Feature | Cron 媒体发送超时可配置 (`HERMES_CRON_MEDIA_SEND_TIMEOUT` / `config.yaml`，默认 300s) + 失败原因不再为空 | Cron 调度、大附件投递可靠性 | ✅ **已合并** |
| [#88788](https://github.com/NousResearch/hermes-agent/pull/88788) | Bug Fix | Desktop 侧边栏恢复原设计：Bots 面板作为 Sessions 区标签页；Cronjobs 面板仅在 Bot 模式显示 | Desktop UI/UX 一致性 | ✅ **已合并** |
| [#88785](https://github.com/NousResearch/hermes-agent/pull/88785) | Bug Fix | Bot Mode 会话隐藏逻辑改为“所有权基础”而非仅 ID，修复 CLI 产生的会话污染全局侧边栏 | 会话隔离、多租户场景 | ✅ **已合并** |
| [#87967](https://github.com/NousResearch/hermes-agent/pull/87967) / [#87965](https://github.com/NousResearch/hermes-agent/pull/87965) | Bug Fix | 同一问题的两个修复 PR，均被 #88787 吸收关闭 | — | ✅ **已关闭/合并** |
| [#88793](https://github.com/NousResearch/hermes-agent/pull/88793) | Chore | `npm run fix` 自动格式化修复 | 代码风格统一 | ✅ **已合并** |
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Refactor Epic | **大文件拆解 20/20 完成**，Issue 关闭 | 架构治理、可维护性 | ✅ **已关闭** |
| [#76064](https://github.com/NousResearch/hermes-agent/issues/76064) / [#76245](https://github.com/NousResearch/hermes-agent/issues/76245) / [#80898](https://github.com/NousResearch/hermes-agent/issues/80898) | Bug Fix | Desktop 默认插件清理、退出时后端可靠回收、macOS 孤儿进程治理 | Desktop 稳定性、资源泄漏 | ✅ **已关闭** |

**进展评估：** 今日合并 PR 多集中于 **Desktop 交互修复**、**Cron 可靠性增强**、**Bot Mode 隔离** 与 **代码库治理收尾**，推进了 v0.20.3 后的首批稳定性补丁入主干。

---

## 4. 社区热点（高互动 Issue/PR）

| Item | 评论/反应 | 核心诉求 | 分析 |
|------|-----------|----------|------|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) **Large-file decomposition** | 76 条评论 | 全仓“神文件”拆分治理，20 个子任务全部完成 | 社区高度关注架构治理进度，维护者通过 Epic 形式推进，已形成“拆分不回滚”文化。 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills index stale/degraded** | 48 条评论 | 自动化探测发现技能索引 29.8h 未更新，超 26h 阈值 | 长期运行的定时任务（cron 6/18 UTC）与部署流水线可能存在竞争或失败，需建立告警与自愈机制。 |
| [#77305](https://github.com/NousResearch/hermes-agent/issues/77305) **Delegation budget consumed on failed API calls** | 5 条评论 | 子代理迭代预算在 API 调用前扣减，重试/降级链耗尽预算 | 设计缺陷：预算应在成功调用后扣减，或引入“可重试预算”池，避免限流导致降级失效。 |
| [#83565](https://github.com/NousResearch/hermes-agent/issues/83565) **Child-process credential-inheritance** | 5 条评论 | 受信凭据泄露到非受信子进程（模型编写的命令） | 安全边界问题，关联 #77027，已形成 Campaign Epic，需从 CLI、Gateway、MCP 统一收口。 |
| [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) **Vision tools disappear after probe** | 5 条评论 | `_AuxProbeClientStub` 被缓存导致 vision 工具集在长进程中消失 | 缓存键设计缺陷，探针客户端不应进入生产缓存，需区分探测与实例生命周期。 |
| [#77462](https://github.com/NousResearch/hermes-agent/issues/77462) **Windows ACL hole** | 3 条评论, 0 👍 | `_secure_file` 在 Windows 上无效，密文可被 SYSTEM/Administrators 读取 | **CRITICAL** 级别，已有红队验证，需引入 `icacls` 或 Windows 专用 ACL API 修复。 |
| [#88706](https://github.com/NousResearch/hermes-agent/issues/88706) **Security gaps behind #88232/#88435** | 4 条评论 | 关闭使用时刻、溯源、权限三大缺口的十项加固战役 | 维护者正在系统性梳理安全债，属于高优先级战略任务。 |

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **Critical** | [#77462](https://github.com/NousResearch/hermes-agent/issues/77462) Windows ACL 失效 | 静态密钥文件在 Windows 无 ACL 保护 | ❌ 无 | 需立即安排 Windows 专项修复 |
| **High** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills 索引降级 | 索引 29.8h 未刷新，技能发现失效 | ❌ 无 | 建议在部署流水线增加索引新鲜度门禁 |
| **High** | [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) Vision 工具消失 | 长进程中首次探测后 vision 工具不可用 | ❌ 无 | 缓存污染，需修复 `_get_cached_client` 键设计 |
| **High** | [#88661](https://github.com/NousResearch/hermes-agent/issues/88661) MCP 超时导致整工具集注销 | 单工具超时引发连接“挂起”，需重启 Gateway 恢复 | ❌ 无 | 连接池与工具注册表需解耦，增加自动重连 |
| **Medium** | [#77305](https://github.com/NousResearch/hermes-agent/issues/77305) Delegation 预算提前扣减 | 限流/重试消耗预算导致降级链失效 | ❌ 无 | 需调整预算扣减时机或引入重试预算 |
| **Medium** | [#57921](https://github.com/NousResearch/hermes-agent/issues/57921) `database is locked` | Dashboard 事件循环卡顿导致 SQLite 锁竞争 | ✅ 已关闭 | 可能已通过其他 PR 缓解，建议回归验证 |
| **Medium** | [#78793](https://github.com/NousResearch/hermes-agent/issues/78793) `write_file`/`patch` 破坏 `.git` 目录 | 仅保护 worktree `.git` 文件，未保护 `.git/` 目录下 HEAD/index/refs | ❌ 无 | 需在文件工具层增加 `.git/` 目录整体守卫 |
| **Low** | [#76064](https://github.com/NousResearch/hermes-agent/issues/76064) Demo 插件默认开启 | 生产构建出现计数器按

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-18

---

## 1. 今日速览
- **整体活跃度：中等偏低**。过去 24 小时无新版本发布，但有 4 个 PR 完成合并/关闭，清理了部分长期积压的陈旧 PR（最早可追溯至 2 月和 4 月），代码库在配置加载、Agent 循环容错、Slack 文件上传、微信渠道支持等核心路径上完成了实质性修复与增强。
- **社区互动**：新增 1 个 Bug（Google Antigravity 429 报错），1 个长期 Feature Request（IRC 长消息支持）保持活跃，1 个严重 Bug（工具重复失败静默循环）已通过 PR #3312 修复并关闭。
- **技术债偿还明显**：合并的 3 个 PR 均针对“配置加载优先级”、“Agent 死循环保护”、“Slack SDK 兼容性”等生产环境痛点，显示维护团队正集中精力提升稳定性与部署鲁棒性。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) `fix(agent): stop turn early on repeated identical tool failure` | **Bug Fix / Stability** | 在 Agent 循环中引入“连续相同错误计数”机制，若工具连续 N 次返回完全一致的错误，提前终止当前 Turn 并返回错误信息给用户，避免空转至 `max_tool_iterations`。 | **高影响**。解决 Issue #3311 所述“用户永远收不到回复”的生产级严重缺陷，显著提升 Agent 在工具链不可用时的可用性与用户体验。 |
| [#271](https://github.com/sipeed/picoclaw/pull/271) `fix: env overrides when config.json is missing and add regression test` | **Bug Fix / Config** | 修复 `LoadConfig` 在 `config.json` 缺失时未应用环境变量覆盖的问题；新增回归测试保障。 | **中高影响**。解决 Fly.io 等纯环境变量部署场景下模型凭证缺失、默认回落 `glm-4.7` 导致启动失败的阻塞性问题，提升云原生部署鲁棒性。 |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) `feat: enhance Weixin channel support and configuration` | **Feature / Channel** | 重构微信渠道多实例目录结构、动态实例管理、非法名称校验、前端配置联动及文档。 | **中影响**。完善国内主流 IM 渠道的企业级部署能力，消除多实例配置冲突与校验盲区，为后续渠道插件化奠基。 |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) `fix(slack): set FileSize on media upload params` | **Bug Fix / Integration** | Slack 文件上传参数补全 `FileSize` 字段，适配 `slack-go v0.23.1` 强制要求的 `files.upload.v2` 流程。 | **低中影响**。及时跟进上游 SDK 破坏性变更，防止 Slack 文件上传功能在依赖升级后静默失效。 |

> **整体进度评估**：本轮合并 PR 覆盖 **Agent 核心循环、配置系统、两大主流渠道（Slack/Weixin）**，属于“强化基建、堵塞生产漏洞”阶段，非新功能扩展期。

---

## 4. 社区热点

| 对象 | 状态 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) `[Feature] Better support long messages in IRC` | **OPEN / stale** | 💬 6 条评论，跨越 26 天 | 用户希望 PicoClaw 原生支持 IRCv3 `labeled-response` / 消息分片重组，将 >512 字节的多段消息视为单一语义单元。当前需自行拼装，增加下游 Agent 处理复杂度。维护者尚未给出明确排期。 |
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) `[BUG] Repeated identical tool failure loops silently` | **CLOSED** | 💬 2 条评论 | 已由 #3312 修复。用户反馈在 Telegram 场景下 `git` 命令无凭证导致 Agent 静默空转数分钟，最终超时且无任何回复。痛点直指“可观测性缺失+无熔断机制”。 |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) `[Bug] Antigravity generation returns generic 429` | **OPEN** | 💬 0 评论（新建） | Google Antigravity（Vertex AI 代理层）鉴权与模型发现均正常，但生成请求恒定返回 429 `RESOURCE_EXHAUSTED` 且无 `quota` 细节。疑似配额维度不可见或 OAuth scope 与计费项目错配，急需维护者确认是否为上游限流或客户端参数缺失。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 关联 Fix PR | 当前状态 |
|----------|-------|------|-------------|----------|
| **Critical** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | 工具连续同类报错导致 Agent 静默循环至 `max_tool_iterations`，用户零反馈 | [#3312](https://github.com/sipeed/picoclaw/pull/3312) ✅ Merged | **已修复合并** |
| **High** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Google Antigravity 所有生成请求返回 429，无配额细节，阻断该模型可用性 | 无 | **待排查**（需确认是配额耗尽、计费未绑定、还是请求参数触发风控） |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息分片未自动重组，导致下游 Agent 收到碎片化上下文 | 无 | **Feature Gap**，标记 `stale` 暂缓 |
| **Low** | [#3340](https://github.com/sipeed/picoclaw/pull/3340) | Slack `files.upload.v2` 要求 `FileSize` 非零，旧代码传 0 导致预检失败 | [#3340](https://github.com/sipeed/picoclaw/pull/3340) 🟢 Open | **已有 PR 待 Review** |

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 可行性评估 | 可能纳入版本 |
|------|------|------------|--------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRCv3 长消息自动重组（`labeled-response` / `message-tags`） | 需在 IRC Channel 层实现分片缓冲与重组，涉及协议解析器改造，工程量中等。现标记 `stale`，优先级低于稳定性修复。 | **v0.17+**（若有贡献者驱动） |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) 已合并 | 微信渠道多实例、动态配置、前端联动 | 已落地，后续可延伸至“渠道插件热插拔”通用框架。 | 已在主分支 |
| 隐性需求（由 #3312 暴露） | Agent 级“熔断/降级”策略可配置化（最大重试次数、错误去重窗口、回退提示词） | #3312 仅硬编码“连续相同错误即停”，后续应暴露配置项。 | **v0.16.x 补丁** |

---

## 7. 用户反馈摘要

- **痛点 1：静默失败最可怕**。#3311 用户明确表达：“Agent 转了几分钟最后什么都不回，比直接报错糟糕得多”。这倒逼 #3312 引入“早停+回传错误上下文”机制。
- **痛点 2：云部署配置地狱**。#271 作者指出 Fly.io 等平台惯用 Secret/Env 注入，**缺失 `config.json` 是常态而非异常**，旧代码回落默认模型导致凭证缺失启动崩溃，修复后“纯环境变量部署”终于跑通。
- **痛点 3：上游 SDK 破坏性升级无感知**。#3340 发现 `slack-go v0.23.1` 强制 `FileSize`，若无 Dependabot/CI 预检，生产环境文件上传将突然全军覆没。
- **期望**：用户渴望“开箱即用的多渠道、可观测的 Agent 循环、零配置文件的云原生部署”，当前三大诉求均已在本轮 PR 中得到不同程度响应。

---

## 8. 待处理积压（建议维护者关注）

| 对象 | 陈旧天数 | 风险 | 建议动作 |
|------|----------|------|----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC 长消息支持 | 27 天（标记 `stale`） | 协议层功能缺失，影响 IRC 重度用户；长期挂起易劝退贡献者。 | **决策**：明确 Won't Fix / Accept Contribution / 纳入路线图。若接受，拆解为子任务挂 `good first issue`。 |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) Antigravity 429 | 1 天（0 评论） | 核心模型不可用，且错误信息不透明，阻塞使用 Google 模型的用户。 | **紧急**：维护者复现并区分“配额真耗尽”vs“请求参数错误/计费未开通”；补充 FAQ 或自动探测配额接口。 |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) Slack FileSize 修复 | 1 天（Open） | 依赖升级后的阻断性 Bug，修复简单（补字段），但需回归测试。 | **加速 Review 合并**，同步更新 CI 依赖矩阵锁定 `slack-go` 版本。 |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) Weixin 增强 | 119 天 → 今日合并 | 长周期 PR 终于落地，后续需关注**文档同步**与**多实例压测**。 | 补充 `CHANGELOG` 与迁移指南，避免存量用户升级后配置失效。 |

---

> **健康度总结**：本周期呈现 **“偿还技术债、堵塞生产漏洞、渠道能力补齐”** 的健康特征。唯一隐忧是 **Google Antigravity 429（#3339）零响应**，若 48 小时内无人跟进，建议升级为 `P0` 并指派 Owner；IRC 长消息（#3287）可依社区兴趣决定是否招募外部贡献。下一里程碑宜聚焦 **Agent 熔断策略可配置化** 与 **依赖升级自动化防护**。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-18

> **数据来源**: GitHub API (nanocoai/nanoclaw)  
> **统计窗口**: 2026-08-17 至 2026-08-18 (UTC)  
> **报告生成**: 2026-08-18

---

## 1. 今日速览

*   **活跃度极高，核心架构大规模落地**：过去 24 小时合并/关闭 **25 个 PR**，其中绝大多数为 `core-team` 推动的 **Channels（通道层）重构** 与 **Drivers（运行时驱动层）抽象** 相关变更，标志着多平台会话管理、Slack 集成、Session 生命周期解耦等核心架构正式并入主干。
*   **零版本发布，但主干稳定性面临挑战**：虽无新 Release，但新引入的 "One-Door" 任务投递机制 (#2988) 导致严重回归 (#3301)，且 Codex 提供者在主干编译不通过 (#3203)，需尽快通过热修复 PR 稳定主干。
*   **Bug 修复与技术债偿还并行**：针对定时任务错误路由 (#3311)、OneCLI 网关绑定地址 (#3302)、附件 XML 转义 (#3300)、待办消息轮询内存压力 (#3291) 等均已提交修复 PR，响应速度快。
*   **文档债务清理**：技能文档中遗留的 `/data/env` 路径引用已确认并关闭 (#1143)。
*   **新功能探索**：新增 **Local Web Chat** 通道适配器 (#3298) 与 **MCP Tool 扩展机制** (#3296)，拓展本地交互与工具生态边界。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展：核心架构合并潮与关键修复

今日合并的 25 个 PR 中，**18 个由 `core-team` (gavrielc) 提交并合并**，形成清晰的“通道层 + 驱动层”双轨架构落地序列。项目在会话模型、平台适配、运行时解耦三个维度实质性前进。

### 3.1 通道层与 Slack 深度集成 (Wave A/B) —— **已合并**
| PR | 标题 | 核心进展 |
| :--- | :--- | :--- |
| [#3305](https://github.com/nanocoai/nanoclaw/pull/3305) | **channels: shared channel-layer library + canvas cluster (Wave A)** | 引入 `src/channels/slack-lib.ts` 共享库，落地 Canvas 交互集群，同步主干最新钩子。 |
| [#3304](https://github.com/nanocoai/nanoclaw/pull/3304) | **channels: adapter-declared session-mode context defaults** | 适配器可声明 `sessionMode` (`shared` \| `per-thread`)，Slack 统一为 `per-thread`，消除调用侧硬编码。 |
| [#3309](https://github.com/nanocoai/nanoclaw/pull/3309) | **slack: defaults factory, membership, onboarding, a2a guard (Wave B)** | 补全 Slack 通道全能力：默认工厂、成员/入职/防护钩子，**确立“全场景 per-thread”会话模型**。 |
| [#3310](https://github.com/nanocoai/nanoclaw/pull/3310) | **fix(channels): restore the slack-formatting container skill** | 修复上游合并丢失 `slack-formatting` 技能的问题，恢复字节级一致性。 |
| [#3292](https://github.com/nanocoai/nanoclaw/pull/3292) | **channels: bridge inbound-policy registration seam** | 引入入站策略注册缝合点，将 Bot 消息策略等从桥接核心代码剥离。 |
| [#3293](https://github.com/nanocoai/nanoclaw/pull/3293) | **router: session-created hook for brand-new engaged sessions** | 新增会话创建钩子，支持平台侧会话引导（命名、元数据初始化）。 |
| [#3294](https://github.com/nanocoai/nanoclaw/pull/3294) | **delivery: post-delivery hook with first-delivery context** | 投递后钩子携带首次投递标记，支持首条消息引导/入职等一次性逻辑。 |
| [#3295](https://github.com/nanocoai/nanoclaw/pull/3295) | **channels: generic membership-event hook on the Chat SDK bridge** | 统一成员变更事件缝合点，支持 `onMemberJoinedChannel` 等平台事件接入。 |
| [#3297](https://github.com/nanocoai/nanoclaw/pull/3297) | **setup: per-channel pre-step and companion-skill declarations** | 向导新增预步骤与伴随技能声明，支持凭证预绑定与安装后自动化。 |

### 3.2 运行时驱动层抽象 —— **已合并/进行中**
| PR | 标题 | 核心进展 |
| :--- | :--- | :--- |
| [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) | **drivers: a session-runtime driver seam, with Docker as the built-in realization** | **核心架构里程碑**：引入 `src/drivers/`，定义 `SessionDriver` 接口，Docker 为内置实现。**纯增量，零调用侧变更，测试全绿**。 |
| [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) | **host: route session lifecycle through the driver seam** | 基于 #3306，Host 侧会话全生命周期（生成、领养、监管、停止、重建）全面委托 Driver。`NANOCLAW_RUNTIME_DRIVER` 环境变量控制实现选择。 |
| [#3308](https://github.com/nanocoai/nanoclaw/pull/3308) | **groups: refuse to create a group over a folder that already exists undisposed** | 数据安全守护：拒绝在未清理的残留目录上创建新 Group，防止数据误采纳/丢失。 |

### 3.3 核心修复与工具链增强
| PR | 状态 | 核心内容 |
| :--- | :--- | :--- |
| [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | **Open** | **Fix**: 定时任务错误路由修复 (#3223)，错误消息不再复制批次路由字段，改由 Agent 运行时决定投递目标。 |
| [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) | **Open** | **Fix**: 修复聊天会话中触发的 Task 丢失运行日志 (#3301 相关)，保留 `task_log` 并关联系列 ID。 |
| [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) | **Open** | **Fix**: 修正 OneCLI 网关默认绑定地址 (#2903)，确保网关监听 `0.0.0.0` 而非 Docker 内部地址。 |
| [#3300](https://github.com/nanocoai/nanoclaw/pull/3300) | **Open** | **Fix**: `formatAttachments` 转义 `type` 字段，修复 Agent 面向 XML 注入风险。 |
| [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) | **Open** | **Fix**: 限制 `getPendingMessages()` 加载量，解决积压导致的内存/性能问题 (#3289)。 |
| [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) | **Open** | **Chore**: `@openai/codex` 0.138.0 → 0.146.0，规避 GPT-5.4 于 2026-08-31 退役导致的 `/add-codex` 失效。 |
| [#3296](https://github.com/nanocoai/nanoclaw/pull/3296) | **Closed** | **Feat**: `extendTool` MCP 工具模式/描述加性扩展点，无需修改基础工具源码即可扩展 Schema。 |
| [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) | **Open** | **Feat Skill**: 新增 **Local Web Chat** 通道适配器（回环地址 + 浏览器 UI），支持本地无外网调试/演示。 |

---

## 4. 社区热点：架构落地与主干阻塞并存

| 排名 | 项目 | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **[PR #3306](https://github.com/nanocoai/nanoclaw/pull/3306) / [#3307](https://github.com/nanocoai/nanoclaw/pull/3307)** | **核心团队主导，25 个合并 PR 的基石** | **架构解耦诉求**：将“会话是什么”与“如何运行”彻底分离，为未来支持非 Docker 运行时（如 K8s, WASM, 进程池）铺路。`purely additive` 策略极大降低合并风险。 |
| **2** | **[Issue #3301](https://github.com/nanocoai/nanoclaw/issues/3301) + [PR #3303](https://github.com/nanocoai/nanoclaw/pull/3303)** | **新开 Issue，关联修复 PR，回归阻塞** | **主干稳定性诉求**：`one-door` 重构 (#2988) 导致聊天会话中 Task 日志丢失、回复被吞、系列未列出。用户 `glifocat` 指出影响所有 2.1.48 前创建的任务，**P0 级回归**。 |
| **3** | **[Issue #3203](https://github.com/nanocoai/nanoclaw/issues/3203)** | **开放 10 天，未合并修复，阻塞 Codex** | **集成可用性诉求**：`codex` provider 发出未声明的 `file` 事件导致主干类型检查失败，且生成图片被静默丢弃。`/add-codex` 技能在主干**完全不可用**。 |
| **4** | **[Issue #3289](https://github.com/nanocoai/nanoclaw/issues/3289) + [PR #3291](https://github.com/nanocoai/nanoclaw/pull/3291)** | **性能/稳定性 Issue，配套修复 PR** | **资源保护诉求**：`getPendingMessages()` 全量加载到 JS 再截断，积压时 OOM 风险。需在 DB 层面 `LIMIT`。 |
| **5** | **[PR #3298](https://github.com/nanocoai/nanoclaw/pull/3298)** | **新功能 PR，Feature Skill 标签** | **开发体验诉求**：零配置本地 Web 聊天界面，降低演示/调试门槛，无需 Slack/Discord 凭证即可体验完整会话流。 |

---

## 5. Bug 与稳定性：主干阻塞级回归为重中之重

| 严重程度 | Issue | 现象 | 影响范围 | 修复进展 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (主干阻塞)** | **[#3203](https://github.com/nanocoai/nanoclaw/issues/3203)** | `codex` provider 发出未声明 `file` ProviderEvent -> **主干 TypeCheck 失败**；生成图片静默丢弃。 | 所有使用 `/add-codex` / Codex Provider 的用户/开发者。 | **无修复 PR**。`providers` 分支有变更但未回主干。需尽

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-18

---

## 1. 今日速览
- **整体活跃度极低**：过去 24 小时内 **无 Issue 更新**，仅有 **1 条自动化依赖更新 PR** 活跃，无人工代码贡献、无版本发布、无社区讨论。
- **唯一动态为 Dependabot 提交的基础镜像升级**（Alpine 3.23 → 3.24），属于例行维护性更新，当前处于待审核/合并状态。
- **项目处于“维护静默期”**：核心功能开发、Bug 修复、社区互动均无新进展，需关注该 PR 是否顺利合并以保持构建链路安全性。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
### 待合并 PR（1 条）
| PR | 标题 | 作者 | 状态 | 影响范围 | 进展评估 |
|----|------|------|------|----------|----------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group` | dependabot[bot] | **Open** (创建于 2026-06-15，更新于 2026-08-17) | Docker 基础镜像升级（Alpine 3.23 → 3.24），涉及安全补丁与包版本更新 | **阻塞中**：自动化 PR 已停滞 2 个多月，CI 可能需人工确认兼容性后合并。合并后将消除已知 CVE 风险，属低风险维护任务。 |

> **整体进度**：核心功能零推进，仅有一项基础设施依赖更新待处理。

---

## 4. 社区热点
> 过去 24 小时 **无 Issue/PR 评论、Reaction 或人工讨论**，社区处于完全静默状态。

---

## 5. Bug 与稳定性
> 过去 24 小时 **无新增 Bug 报告、崩溃日志或回归问题**。

---

## 6. 功能请求与路线图信号
> 过去 24 小时 **无新功能请求**，路线图无新信号。

---

## 7. 用户反馈摘要
> 过去 24 小时 **无用户评论或反馈**，无法提炼痛点或使用场景。

---

## 8. 待处理积压 ⚠️
| 对象 | 类型 | 滞留时长 | 关键风险 | 建议行动 |
|------|------|----------|----------|----------|
| [PR #956](https://github.com/nullclaw/nullclaw/pull/956) | 依赖升级 | **64 天** (创建于 2026-06-15) | 长期未合并可能导致：<br>1. Docker 镜像构建使用过期基础镜像，存在安全漏洞<br>2. Dependabot 后续 PR 可能冲突堆积<br>3. CI/CD 流水线隐性风险 | **高优先级**：维护者应尽快 Review CI 结果，确认无破坏性变更后合并；若有兼容性问题，需手动调整 Dockerfile 并关闭该 PR。 |

---

### 📌 维护者行动建议
1. **立即处理 PR #956**：合并或关闭并手动升级 Alpine 基础镜像，恢复依赖更新通道健康度。
2. **评估项目活跃度**：连续多日无人工提交/讨论，建议确认项目是否进入“维护模式”并更新 README/路线图设定预期。
3. **启用自动合并策略**：针对 Dependabot 低风险补丁（如基础镜像小版本）可配置 Auto-merge，减少人工瓶颈。

--- 

*数据来源：GitHub API（Issues、PRs、Releases），统计窗口 2026-08-17 00:00 – 2026-08-18 00:00 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-18

---

## 1. 今日速览

**整体状态：高强度迭代期，核心基础设施重构与 v1.3.0-rc.1 发布同步推进。**  
过去 24 小时：28 个 Issue 更新（22 活跃/新开，6 关闭）、44 个 PR 更新（28 待合并，16 已合并/关闭）、1 个 RC 版本发布。活跃度极高，呈现“Epic 级性能优化（减少 60% DB 写入）+ 多条大型功能 PR 并行 + 犬食/QA 缺陷快速修复”三线并行态势。核心风险点集中在 libSQL 写连接饥饿导致的级联故障（#7714），已有修复 PR #7717 提交。项目整体处于 **v1.3.0 发布前冲刺 + v1.4.0 路线图铺垫** 的双轨节奏。

---

## 2. 版本发布

### ironclaw-v1.3.0-rc.1 (2026-08-17)
- **安装方式**：提供 Shell/PowerShell 一键安装脚本，预构建二进制分发
- **定位**：1.3.0 首个 Release Candidate，主分支已包含 1.2 修复前向移植（#7663 已合并）
- **关键信号**：
  - 无破坏性变更文档，说明 1.3.0 以性能/稳定性/内部重构为主
  - RC 阶段通常 1-2 周，预计 8 月底前后 GA
  - 同期 Epic #7591（减少 60% DB 写压力）多个 Tier 1/2 子任务已关闭（#7594、#7598、#7605），表明核心性能指标已落地

> [Release 页面](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.1)

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR（推进核心指标）
| PR | 规模 | 核心贡献 | 关联 Epic/Issue |
|----|------|----------|-----------------|
| [#7663](https://github.com/nearai/ironclaw/pull/7663) | XL | 1.2 修复前向移植：Windows 文件系统/发布冒烟可靠性、JSON 输出、健康检查 curl、线程索引修复 | v1.3.0 基线稳定 |
| [#7594](https://github.com/nearai/ironclaw/pull/7594) | — | **Tier 1**：Loop milestone sink 接入 CoalescingEventSink，消除 ~30 次/轮 关键路径池检出 | #7591 (Epic) |
| [#7598](https://github.com/nearai/ironclaw/pull/7598) | — | **Tier 2 最大收益**：能力调用状态写入折叠至 gate/terminal 边界，预估 −40~−60 rows/turn | #7591 |
| [#7605](https://github.com/nearai/ironclaw/pull/7605) | — | **Tier 3**：消息查找索引 sibling row 折叠进消息行，消除最热表写放大 | #7591 |
| [#7647](https://github.com/nearai/ironclaw/pull/7647) | — | 自动化：为 scheduled run 增加确定性 no-delivery outcome，解决 `[SILENT]` 抑制不可靠 | #6879 |
| [#7637](https://github.com/nearai/ironclaw/pull/7637) | — | 设计系统组件边界显式类型化，消除隐式 props 导致的 TS 校验绕过 | 前端技术债 |
| [#7275](https://github.com/nearai/ironclaw/pull/7275) | — | 验证跨会话显式持久记忆召回（生产环境），关闭长期反馈 | #7185 |

### 🚧 待合并的大型 PR（将决定 v1.3.0/1.4.0 范围）
| PR | 规模 | 方向 | 备注 |
|----|------|------|------|
| [#7694](https://github.com/nearai/ironclaw/pull/7694) | XL | **耐久后端建议系统**：`suggestions.*` 产品面中性 API，WebUI 作为 Rust 传输适配器 | 新能力面，零前端改动 |
| [#7693](https://github.com/nearai/ironclaw/pull/7693) | XL | **原生结构化输出终局化**：Provider 中立不可变输出契约，宿主拥有、工具禁用的单次终局化 | 不改动核心 agent loop |
| [#7718](https://github.com/nearai/ironclaw/pull/7718) | XL | **Google Docs 语义编辑工具**：结构化检查、锚定批量编辑、填充表格、确定性验证 | 保留 11 个遗留工具 |
| [#7708](https://github.com/nearai/ironclaw/pull/7708) | XL | **Automation run-now**：跨触发域/WebUI 的手动触发原子路径 | 保留调度身份与溯源 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | XL | **编码核心工具契约**：统一 `read/write/edit/glob/grep/bash` 六个裸名称，移除旧工具面 | #7392 slices 1-4 |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | XL | **Automation 运行结果从运行时证据推导**：结构化自动化声明 `required_capability_ids` | 替代纯答案语义判断 |
| [#7717](https://github.com/nearai/ironclaw/pull/7717) | XL | **修复 libSQL 写通道饥饿级联故障** | 直接修复 #7714，**阻塞级** |
| [#7712](https://github.com/nearai/ironclaw/pull/7712) | L | **BeforeModel checkpoint 批量化可选化+副作用安全** | 默认 1（现状），可配置间隔 |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) | XL | **WASM 类型化工具响应/Guest 迁移/调度错误清理** | 超越 #7703，避免增删 churn |
| [#7692](https://github.com/nearai/ironclaw/pull/7692) | XL | **Provider 失败与认证诊断规范化** | 能力响应归一化栈 #7627 的 PR 2 |
| [#7513](https://github.com/nearai/ironclaw/pull/7513) | XL | **CLI ACP serve 命令**：stdio 传输暴露 Agent Communication Protocol | 外部工具互联关键 |
| [#7682](https://github.com/nearai/ironclaw/pull/7682) | XL | **Slack 未链接用户私密连接提示+一键链接** | 修复 #7681 公开泄露+多步死胡同 |
| [#7710](https://github.com/nearai/ironclaw/pull/7710) | XL | **#7682 多智能体审查发现修正** | 连接链接落地页加固 7 项 |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | XL | **Nostr WASM 宿主函数**：签名/发布/密钥派生，私钥不出宿主 | Reborn 栈扩展 |

> **进展判读**：Epic #7591 的 Tier 1/2/3 核心写压力优化已 **全部落地合并**（#7594、#7598、#7605），预估单轮写入行数从 ~200+ 降至 ~80 左右，达标 60% 目标。同时，v1.3.0 RC 已含 1.2 修复前向移植，基线稳固。剩余大型 PR 多为 **v1.4.0 功能面**（建议系统、结构化输出、ACP、Google Docs、编码工具统一、Nostr 等），审查通过后将进入下一版本规划。

---

## 4. 社区热点

| Issue/PR | 类型 | 评论/互动 | 核心诉求 | 分析 |
|----------|------|-----------|----------|------|
| [#7714](https://github.com/nearai/ironclaw/issues/7714) | Bug (Critical) | 0 评论、新开 | **libSQL 单共享写连接导致资源总督日志饥饿 → 权限失效 → 预留泄漏级联** | PinchBench 147 任务复现，**生产级阻塞**，已有修复 PR #7717 |
| [#7681](https://github.com/nearai/ironclaw/issues/7681) | Enhancement (Epic) | 0 评论、新开 | Slack 未链接用户连接提示**公开可见+多步手动死胡同** | PR #7682/#7710 已修复：私密回复+一键连接链接 |
| [#7716](https://github.com/nearai/ironclaw/issues/7716) | Bug Bash P2 | 0 评论、新开 | MCP Server 添加流缺少 Bearer Token 认证、STDIO/HTTP 传输选项 | QA 犬食发现，阻碍企业级 MCP 接入 |
| [#7715](https://github.com/nearai/ironclaw/issues/7715) | Bug Bash P2 | 0 评论、新开 | Telegram 连接流缺少 Bot/个人账号选择与告知 | 同期 QA 发现，用户困惑点 |
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | Bug (P1, Customer) | 2 评论、长期 | **WebUI 编辑 AGENTS.md 不更新当前/未来会话 System Prompt** | v1.4.0 标记，核心用户痛点，涉及身份文件热重载 |
| [#7591](https://github.com/nearai/ironclaw/issues/7591) | Epic | 3 评论 | **减少 60% 耐久 DB 写压力，保持多 Worker 安全** | 已拆解 7 个 Tier 子 Issue，**核心性能指标已达标** |
| [#7687-#7691](https://github.com/nearai/ironclaw/issues/7687) | Epic (5 子 Issue) | 0 评论、新开 | **通用化 WebUI 通知中心 → 耐久用户收件箱** | 审批/认证/阻塞运行/运行失败/完成/投递失败全覆盖 |
| [#7704](https://github.com/nearai/ironclaw/issues/7704) | Daily Taxonomy | 0 评论、新开 | 每日失败分类：存储写通道冲突为最大可修复缺陷 | 配合 #7714 修复验证 |

> **热点画像**：  
> - **基础设施稳定性**（libSQL 写饥饿、存储写通道冲突）为当前 **最高优先级阻塞项**，已有修复进入审查  
> - **犬食/QA 缺陷批次**（#7715、#7716）暴露集成流程体验断层，修复周期短、影响面窄但用户感知强  
> - **通知系统重构**（#7687-#7691）为 **v1.3.0/v1.4.0 跨版本架构升级**，零评论说明内部推进为主  
> - **长期客户痛点**（#3762 AGENTS.md 热重载）已标记 v1.4.0，需关注是否纳入 1.3.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-18

---

## 1. 今日速览
**项目整体状态：高强度“清仓式”合并日，核心架构与生态扩展同步推进。**

过去 24 小时，**无新版本发布**，但代码库发生剧烈变动：**18 个 PR 被合并/关闭**（绝大多数为 4 月提交的 `stale` PR），集中解决了 UI 交互打磨、OpenClaw 运行时升级、日志安全脱敏、Agent 工作目录隔离、会话列表分组等长期积压的工程债务。**3 个新 PR 提交**聚焦于 **DeepSeek Harness (dsh) 引擎集成** 与 **OrcaRouter 提供商接入**，显示项目正加速拓展本地/第三方模型运行时生态。**7 个 Issue 活跃**，其中 6 个为 4 月遗留的 `stale` Bug/功能需求（配置被覆盖、Ollama 不兼容、MCP 非 SSE 模式失效等）至今未修复，1 个为外部项目 VOKO 的跨平台通信合作提议。项目呈现“重内部整理、轻外部响应”特征，技术债偿还显著，但用户侧痛点消化滞后。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展：批量落地与新生态接入并行

今日合并的 18 个 PR 可归纳为五大主题，项目工程质量与用户体验显著跃升：

### 🛠 核心运行时与架构升级（3 个）
| PR | 标题 | 核心价值 | 链接 |
| :--- | :--- | :--- | :--- |
| **#1663** | **feat(openclaw): upgrade OpenClaw to v2026.4.12** | 升级核心 Agent 运行时，同步修复插件 SDK 兼容性问题 (`resolvePreferredOpenClawTmpDir`)，移除废弃配置项。 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1663) |
| **#1668** | **feat(agent): 为每个 Agent 添加独立工作目录配置** | **里程碑式功能**：非 main Agent 支持专属工作目录（DB Migration 兼容存量），解决多 Agent 文件隔离痛点，回退策略完善。 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1668) |
| **#1661** | **fix(log): 脱敏导出日志中的敏感信息** | **安全加固**：主进程日志导出自动清洗 API Key、Bearer Token、OAuth Token、请求/响应体，新增集中脱敏工具类。 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1661) |

### 🎨 Cowork 协作界面全面打磨（6 个，均由 `0xFLX`/`liulingfeng` 推动）
| PR | 核心改进 | 用户体验提升 |
| :--- | :--- | :--- |
| **#1636** | 聊天窗口新增悬浮「滚动到底部」按钮 | 解决长对话手动上滚后无法快速回底的标准交互缺失 |
| **#1637** | AI 回复消息新增「重新生成」按钮 | 鼠标悬停显示，一键复制最后一轮用户输入重新请求 |
| **#1639** | **fix(i18n): 修复多处按钮 tooltip 硬编码英文未国际化** | 窗口标题栏、Skills、Schema 等 6 处硬编码替换为 `i18nService.t()` |
| **#1640** | 工具执行结果增加一键复制按钮 | Bash/Diff/标准工具结果区域复用 `CopyButton`，体验与 AI 回复一致 |
| **#1641** | **feat(modal): 所有弹窗统一支持 Esc 键关闭** | 底层 `Modal` 组件统一监听 Escape，移除各业务弹窗重复实现，新增 `closeOnEscape` 控制 |
| **#1675** | **feat(cowork): group session list by time period** | 会话列表按「置顶/今天/昨天/7天内/30天内/更早(按月)」分组渲染，支持多语言月份格式 |

### ⚙️ 设置与系统集成优化（4 个）
| PR | 核心改进 | 链接 |
| :--- | :--- | :--- |
| **#1667** | fix(Settings): 将 Qwen 控制台链接从灵积迁移至百炼 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1667) |
| **#1669** | feat: 修复设置页模型提供商体验问题 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1669) |
| **#1642** | feat: add right click menu (Windows 注册表右键「在 LobsterAI 中打开」) | [查看](https://github.com/netease-youdao/LobsterAI/pull/1642) |
| **#2503** | fix(electron): add edit context menu for text inputs | [查看](https://github.com/netease-youdao/LobsterAI/pull/2503) |

### 🚀 新增：模型运行时生态扩展（3 个新提交 PR，1 个已合并文档）
| PR | 状态 | 核心内容 | 战略信号 |
| :--- | :--- | :--- | :--- |
| **#2502** | **CLOSED** | **Feat: dsh engine integration** (DeepSeek Harness 引擎集成：主进程/渲染进程/构建全链路) | **主推本地/私有化部署能力** |
| **#2505** | **CLOSED** | feat: dsh process launcher | 配套进程启动器 |
| **#2506** | **CLOSED** | docs: add DeepSeek Harness (dsh) runtime setup instructions | 文档同步交付 |
| **#2504** | **OPEN** | feat: add OrcaRouter provider integration | **扩展第三方网关兼容性**，镜像 OpenRouter 接入模式 |

> **进展总结**：今日合并 PR 线数约 2000+，覆盖 `main`、`renderer`、`openclaw`、`cowork`、`build` 等全栈模块。项目完成了 **OpenClaw 运行时大版本跟随**、**多 Agent 隔离基建**、**日志安全合规**、**Cowork 交互标准化补齐** 四大工程里程碑，并启动 **dsh 本地引擎** 与 **OrcaRouter 网关** 双轨生态扩展。

---

## 4. 社区热点

| 排名 | 对象 | 热度指标 | 核心诉求分析 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Issue #2500** | **新建/评论 1/👍0** (作者主动推广) | **外部生态合作信号**：VOKO 作者提议接入「AI 智能体跨平台通信层」，支持 A2A 标准、本地 Agent 纳管、群聊多 Agent 调度。LobsterAI 作为 Agent 宿主，若接入 VOKO 协议可瞬间获得跨 IM/框架互通能力。维护者需评估协议适配成本 vs 生态收益。 | [查看](https://github.com/netease-youdao/LobsterAI/issues/2500) |
| **2** | **Issue #1653** | `stale` / 更新今日 / 评论 2 | **高频配置丢失**：`groupPolicy` 反复被覆盖为 `allowlist`，疑似配置持久化竞争或定时同步逻辑缺陷，影响团队权限管理。 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1653) |
| **3** | **PR #2504** | **新提交 / OPEN** | **提供商生态扩展**：引入 OrcaRouter (Anthropic/OpenAI 兼容网关)，命名空间模型 ID (`anthropic/claude-...`)，按 OpenRouter 模式全链路接入。显示项目「Provider Registry 单一事实来源」架构扩展性良好。 | [查看](https://github.com/netease-youdao/LobsterAI/pull/2504) |
| **4** | **Issue #1635** | `stale` / 更新今日 / 评论 1 | **本地模型生态断层**：Ollama 本地模型 (qwen3/gemma4) 在 LobsterAI 报错，但 Cherry Studio 正常。提示模型适配层/参数映射/工具调用协议存在差异。 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1635) |

---

## 5. Bug 与稳定性：存量高危 Bug 均未见修复 PR

| 严重级 | Issue | 现象 | 影响范围 | 是否有对应 Fix PR | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical** | **#1653** | `groupPolicy` 周期性被重置为 `allowlist` | 团队/企业权限体系失效，安全合规风险 | ❌ 无 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1653) |
| **🟠 High** | **#1635** | Ollama 本地主流模型 (qwen3/gemma4) 全系不可用 | 本地隐私部署核心场景受阻，用户流失至 Cherry Studio 等竞品 | ❌ 无 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1635) |
| **🟠 High** | **#1662** | 非 SSE 类型 MCP 引擎无法发现/使用 | 工具生态兼容性缺失，限制 Agent 能力边界 | ❌ 无 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1662) |
| **🟡 Medium** | **#1671** | MD 转 Word 长任务中断：`sse response finish reason: full` | 长文本生成/文件转换任务稳定性差，SSE 流控/超时策略需排查 | ❌ 无 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1671) |
| **🟡 Medium** | **#1643** | 定时任务保存提示「内容未保存」但实为保存成功 | UI 状态与后端状态不同步，干扰用户判断 | ❌ 无 | [查看](https://github.com/netease-youdao/LobsterAI/issues/1643) |

> ⚠️ **风险提示**：上述 5 个核心 Bug **均创建于 4 月中旬，标记 `stale` 且更新至今日仍 OPEN**，且**今日合并的 18 个 PR 中无任何一个直接修复上述 Issue**。建议维护者建立「用户痛点

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-18

---

## 1. 今日速览
Moltis 今日呈现**高合并、低发布**的维护节奏：过去 24 小时合并/关闭 6 个 PR、关闭 2 个 Issue，新开 PR 3 个、新开 Issue 1 个，零版本发布。核心进展集中在**心跳调度修复**、**外部 Agent 模型/精力选择**、**MiniMax Code ACP 集成**、**WebUI RPC 超时可配置**、**浏览器 Shadow DOM 穿透修复**以及**依赖项批量更新**。新开 PR #1206 引入“受管文件库与设置浏览器”这一体量较大的新功能，标志着项目向“文件即服务”方向迈进。整体活跃度**偏高**，合并吞吐率高（6/9 PR 合并），但长期悬而未决的 Podman 兼容性 Issue (#1095) 仍未破局，需关注。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 类型 | 关联 Issue | 核心变更 | 合并时间 |
|----|------|------|------------|----------|----------|
| [#1125](https://github.com/moltis-org/moltis/pull/1125) | Support model and effort selection for external agents | ✨ Feature | — | 为外部 Agent 引入 `models`/`efforts` 配置，`/model` 命令新增 `external-agent/<kind>` 分组，模型/精力元数据持久化，UI 同步。 | 2026-08-17 |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) | feat: add MiniMax Code ACP agent | ✨ Feature | — | 新增 `acp-minimax-code` external-agent kind，接入 `mcode acp`，补全可执行文件探测、注册表、文档、UI 配置校验。 | 2026-08-17 |
| [#1130](https://github.com/moltis-org/moltis/pull/1130) | feat: make webui rpc timeout configurable | ✨ Feature | [#1127](https://github.com/moltis-org/moltis/issues/1127) | WebUI RPC 超时可配置，闭合 #1127。 | 2026-08-17 |
| [#1103](https://github.com/moltis-org/moltis/pull/1103) | fix(browser): pierce shadow DOM lookups efficiently | 🐛 Bugfix | — | 重构浏览器快照与 ref-based 查找，高效穿透 Shadow DOM，修复 #1100 遗留问题。 | 2026-08-17 |
| [#1207](https://github.com/moltis-org/moltis/pull/1207) | chore(deps): bump cargo group (4 updates) | 🔧 Chore | — | 批量升级 `wasmtime-wasi`、`cmov`、`quinn-proto`、`serde_with`。 | 2026-08-17 |
| [#1087](https://github.com/moltis-org/moltis/pull/1087) | chore(deps): bump tar 0.4.45→0.4.46 | 🔧 Chore | — | 单依赖升级，滞后 80 天才合并，属依赖债务清理。 | 2026-08-17 |

**进展评估**：单日合并 6 PR，覆盖**外部 Agent 生态扩展**、**心跳/调度核心修复**（见下文开放 PR）、**WebUI 可配置性**、**浏览器引擎稳定性**与**依赖卫生**，整体向“多 Agent 编排平台”目标推进约 **1.5 个中型里程碑步长**。

---

## 4. 社区热点（评论/反应最多）

| 对象 | 类型 | 评论数 | 👍 | 核心诉求 | 链接 |
|------|------|--------|----|----------|------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) | Issue (Open) | 2 | 0 | **Podman 无法通过 Moltis 正常工作**，用户提供完整会话上下文，已排查现有 Issue，阻断容器化部署场景。 | [#1095](https://github.com/moltis-org/moltis/issues/1095) |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) | PR (Open) | — | 0 | 修复 `heartbeat.update` 全量覆盖配置导致默认值回退问题，修正为 PATCH 语义，关联 #1187。 | [#1209](https://github.com/moltis-org/moltis/pull/1209) |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) | PR (Open) | — | 0 | 修复 `heartbeat.active_hours` 从未生效，补全调度器调用 `is_within_active_hours`，关联 #1205。 | [#1208](https://github.com/moltis-org/moltis/pull/1208) |

**热点分析**：社区讨论集中在**心跳调度的两个核心缺陷**（配置语义错误、活跃时段失效）与**长期未决的 Podman 兼容性**；后者虽仅 2 条评论，但创建于 6 月初，跨度 76 天，反映容器化部署场景的真实阻力。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 标题 | 状态 | 是否有 Fix PR | 链接 |
|--------|----------|------|------|---------------|------|
| **High** | [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman is not working via moltis | Open | ❌ 无 | [#1095](https://github.com/moltis-org/moltis/issues/1095) |
| **Medium** | [#1187](https://github.com/moltis-org/moltis/issues/1187) | `heartbeat.update` 全量覆盖配置导致默认值回退 | Closed (by #1209) | ✅ [#1209](https://github.com/moltis-org/moltis/pull/1209) (Open) |
| **Medium** | [#1205](https://github.com/moltis-org/moltis/issues/1205) | `heartbeat.active_hours` 从未生效 | Closed (by #1208) | ✅ [#1208](https://github.com/moltis-org/moltis/pull/1208) (Open) |
| **Low** | [#1202](https://github.com/moltis-org/moltis/issues/1202) | 两文件超 1500 行导致 Format CI 失败 | Closed | ✅ 隐性修复（拆分文件或调整阈值） | [#1202](https://github.com/moltis-org/moltis/issues/1202) |
| **Low** | [#1103](https://github.com/moltis-org/moltis/pull/1103) | Shadow DOM 穿透查找低效/失效 | Merged | ✅ 已合并 | [#1103](https://github.com/moltis-org/moltis/pull/1103) |

**稳定性趋势**：核心调度路径（heartbeat）连续暴露两个语义级 Bug，说明**配置热更新路径测试覆盖不足**；Podman 问题涉及容器运行时适配层，属跨运行时兼容性缺口，优先级建议升至 P0。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 关联 PR/进展 | 纳入下一版本概率 | 备注 |
|------|------|--------------|------------------|------|
| [#1127](https://github.com/moltis-org/moltis/issues/1127) | WebUI RPC 超时可配置 | [#1130](https://github.com/moltis-org/moltis/pull/1130) 已合并 | ✅ 已入库 | 已闭环 |
| [#1125](https://github.com/moltis-org/moltis/pull/1125) | 外部 Agent 模型/精力选择 | [#1125](https://github.com/moltis-org/moltis/pull/1125) 已合并 | ✅ 已入库 | 奠基多模型路由能力 |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) | MiniMax Code ACP 集成 | [#1204](https://github.com/moltis-org/moltis/pull/1204) 已合并 | ✅ 已入库 | 扩展 ACP 生态 |
| [#1206](https://github.com/moltis-org/moltis/pull/1206) | 受管文件库 + 设置浏览器 | [#1206](https://github.com/moltis-org/moltis/pull/1206) (Open) | 🟡 **高** | 体量大、涉及持久化/权限/容器挂载，若 CI 通过极大概率进下一版 |
| [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman 兼容 | 无 | 🔴 **低** | 无人认领，需维护者主动排期 |

**路线图推断**：下一版本将聚焦**“文件即服务”基础设施（#1206）**与**心跳调度修复（#1209、#1208）**，外部 Agent 生态（MiniMax、模型选择）已落地，PodMan 兼容性暂不在近期交付范围。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 来源 | 痛点/场景 | 情绪 | 代表性原文（摘要） |
|------|-----------|------|---------------------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) | **Podman 无法启动/管理容器**，阻断本地开发/CI 部署 | 😟 挫败 | “已排查现有 Issue，提供完整会话上下文，Podman 完全无法通过 Moltis 工作” |
| [#1127](https://github.com/moltis-org/moltis/issues/1127) | **WebUI 长链接/大模型调用超时**，无法自定义超时 | 😐 中性 | “需配置 RPC 超时以适配慢速模型/网络” → 已由 #1130 解决 |
| [#1202](https://github.com/moltis-org/moltis/issues/1202) | **CI 因文件行数超限失败**，阻断合并 | 😐 中性 | “两文件超 1500 行，Format job 红” → 已关闭，推测已拆分或调整阈值 |

**整体情绪**：**中性偏负**——核心功能（心跳、外部 Agent）迭代快、响应快，但**基础设施兼容性（Podman）长期无人问津**，导致容器化用户流失风险。

---

## 8. 待处理积压（长期未响应/高价值）

| 对象 | 类型 | 停滞天数 | 价值/风险 | 建议动作 | 链接 |
|------|------|----------|-----------|----------|------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) | Issue (Bug) | **76 天** | **高**：阻断 Podman 用户，容器化部署核心场景 | 🔴 **指派维护者复现/排期**；若资源不足，标记 `help wanted` 招募社区贡献 | [#1095](https://

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-18

> **数据统计周期**：2026-08-17 至 2026-08-18（UTC）  
> **仓库**：agentscope-ai/QwenPaw  
> **核心指标**：Issues 更新 14 条（新开/活跃 8，关闭 6） | PR 更新 35 条（待合并 13，合并/关闭 22）| 新版本发布 0 个

---

## 1. 今日速览
项目处于**高强度迭代期**，单日合并/关闭 PR 达 22 个，呈现“修复为主、重构为辅、生态扩展并行”的健康态势。核心稳定性显著提升：修复了工具调用崩溃、Token 统计异常、镜像 URL 失效、插件热加载钩子丢失等多个生产级 Bug；同时推进 DataPaw 原生应用、多项目目录、Provider 统一路由、AnySearch 接入、PowerContext 长时记忆等大型特性。社区关注焦点集中在**多会话隔离可靠性（#7011）**、**渠道级模型隔离（#7085）**及**升级兼容性（#6405）**。无新版本发布，但积累的合并量足以支撑一个重度补丁版本（v2.1.1）。

---

## 2. 版本发布
**无新版本发布**。当前主分支已包含大量修复与特性，建议维护者近期切 v2.1.1 版本，重点包含：工具调用崩溃修复、上下文 Token 统计修正、OneBot 镜像 URL 本地化、控制台后台任务面板优化、PawApp 免刷新安装等用户感知强的改进。

---

## 3. 项目进展：今日合并/关闭的重要 PR（22 个）

### 🔧 核心稳定性与 Bug 修复（高优先级）
| PR | 标题 | 影响范围 | 关联 Issue |
|----|------|----------|------------|
| [#6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) | **fix(token-usage): 停止将图片 base64 计入文本 Token** | 控制台上下文环形图不再因上传 1-2 张图误报 100% 满载 | 隐性修复用户痛点 |
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) (Issue Closed) | **Agent 执行工具调用必现崩溃** (`async for` 误用于 coroutine) | **P0 阻塞性崩溃**，v2.1.0 核心回归 | #7063 ✅ 已修复合并 |
| [#7088](https://github.com/agentscope-ai/QwenPaw/issues/7088) (Issue Closed) | **OneBot 频道透传短效 QQ 图片 URL 导致 400 及会话中毒** | 多模态对话可靠性 | #7088 ✅ 修复见 #7087 |
| [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) (Issue Closed) | **控制台会话重载后图片附件丢失**（data URL 与缩略图不匹配） | 桌面端历史消息渲染 | #7051 ✅ 已修复 |
| [#7077](https://github.com/agentscope-ai/QwenPaw/issues/7077) (Issue Closed) | **插件运行时钩子在工作区热重载后静默丢失** | 插件生态热更新能力 | #7077 ✅ 已修复 |
| [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) | **fix(console): `/compact` 后上下文使用率环未更新** | 长对话压缩后的 Token 可视化准确性 | - |
| [#5151](https://github.com/agentscope-ai/QwenPaw/pull/5151) | **fix(GitPanel): 修复因 `prefixCls="qwenpaw"` 导致的 Tab 样式失效** | Git 面板 UI 渲染 | 存量技术债清理 |

### 🎨 交互体验与 UI 打磨
| PR | 标题 | 用户价值 |
|----|------|----------|
| [#7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) | **控制台后台任务列表紧凑化 + 滚动提示** | 避免长任务列表顶聊天输入框 |
| [#7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) | **新安装 PawApp 免刷新即可打开** | 应用中心安装即用体验 |
| [#7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) | **聊天媒体统一下载控制**（音频播放栏集成下载按钮） | 统一交互规范 |
| [#6981](https://github.com/agentscope-ai/QwenPaw/pull/6981) | **移除所有 7 种语言占位符中的 `/approve` `/deny` 提示** | 减少用户认知干扰 |
| [#7086](https://github.com/agentscope-ai/QwenPaw/pull/7086) | **统一语言下拉框与设置齿轮入口的可选语言**（补全印尼语/越南语） | 国际化一致性 |

### 🚀 新功能与架构演进（已合并）
| PR | 标题 | 战略意义 |
|----|------|----------|
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **feat(pawapp): 原生 DataPaw 应用运行时与持久化分析工作区** | **里程碑**：内置数据分析 Agent，拓展“编码/聊天”双主线之外的第三大核心场景 |

---

## 4. 社区热点：高讨论度 Issues/PRs

| # | 标题 | 评论/👍 | 核心诉求分析 |
|---|------|---------|--------------|
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | **Console 停止请求误取消活跃飞书会话（多 UI 会话身份穿透）** | 6 💬 | **P0 级多租户隔离缺陷**：控制台停止信号泄漏至飞书频道，导致生产会话中断。用户提供了完整复现链路，诉求为**会话身份强隔离**与**信号路由修正**。 |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | **升级 2.0 后 MCP 工具总提示 Tool notfound** | 7 💬 | **版本升级兼容性痛点**：Docker 用户反馈工具命名规则变更（`[mcp-key]__[tool_name]`）但注册/发现链路未同步更新，阻塞存量 MCP 生态迁移。 |
| [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | **[Feature] 按频道独立配置模型** | 3 💬 | **多渠道运营刚需**：钉钉/微信/控制台需差异化模型策略（成本/速度/合规），现行全局/智能体级配置无法满足。呼声高、场景明确，纳入路线图概率极大。 |
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | **Agent 执行工具调用必现崩溃** | 3 💬 | 已闭合，但反映 v2.1.0 发布前集成测试覆盖不足（`_acting` 返回类型变更未同步调用侧）。 |
| [#7079](https://github.com/agentscope-ai/QwenPaw/issues/7079) / [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | **可选 PowerContext 长时记忆后端** | 1 💬 / PR 开启 | 外部贡献者主动对接 `BaseMemoryManager` 扩展点，提供落地 PR，显示**记忆生态扩展性**已具备吸引第三方接入能力。 |

---

## 5. Bug 与稳定性：今日报告/修复汇总（按严重度）

| 严重度 | Issue | 状态 | 修复 PR / 备注 |
|--------|-------|

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

The user wants a daily report for the ZeroClaw project based on the provided GitHub data for 2026-08-18. I need to analyze the data and structure the report according to the 8 specified sections.

Let me parse the data:
- 50 issues updated (44 new/active, 6 closed)
- 50 PRs updated (35 open, 15 merged/closed)
- 0 new releases
- Top 30 issues by comment count (mostly RFCs, trackers, some bugs)
- Top 20 PRs by comment count (mostly bug fixes, enhancements, CI, dependencies)

Key observations:
- High RFC activity: Many open RFCs with high comment counts (23, 22, 20, 19, etc.) indicating active design discussions.
- Security focus: Several RFCs and PR

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*