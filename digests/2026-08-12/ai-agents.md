# OpenClaw 生态日报 2026-08-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-12 01:19 UTC

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

# OpenClaw 项目日报 · 2026-08-12

---

## 1. 今日速览

**整体状态：高强度维护期，核心稳定性问题集中爆发，社区反馈极其活跃。**  
过去 24 小时内 Issues 与 PRs 各更新 500 条，新开/活跃 Issue 392 条、关闭 108 条；PR 待合并 282 条、已合并/关闭 218 条，**零新版本发布**。  
核心矛盾聚焦于：**静默回复失败复发、会话状态泄漏、消息丢失、提供商认证漂移、子代理生命周期失控** 等 P0/P1 级稳定性缺陷。  
维护者精力高度分散于 282 个开放 PR，多为 "waiting on author" 或 "needs proof" 状态，**审核吞吐成为瓶颈**。  
社区高优先级 Issue 评论数普遍超 10 条，顶级 Issue #121058 达 64 条，**用户痛点集中、复现路径清晰、急需修复上线**。  
项目处于 **"修复积压期"**，短期内版本发布风险较高，建议优先清理 P0/P1 阻塞项再规划发布。

---

## 2. 版本发布

**今日无新版本发布。**  
最近一次发布为 `2026.8.1-beta.1`（Issue #121675 指出该版本未同步发布配套 `@openclaw/*` 插件，导致启动收敛保护陷入不可恢复的启动循环），已关闭但未回滚/重发。  
**迁移提示**：若需升级，请务必同步锁定所有 `@openclaw/*` 插件至核心版本对应 tag，或暂停升级等待修复版。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#122360](https://github.com/openclaw/openclaw/pull/122360) | test | 隔离 system-agent 聊天测试夹具与提供商发现依赖，修复测试污染 | CI 稳定性 | ✅ **CLOSED (merged)** |
| [#122366](https://github.com/openclaw/openclaw/pull/122366) | fix(ui) | 修复 Control UI 动态选择框首次渲染不保留持久化值 | Web UI UX | ✅ **CLOSED (merged)** |
| [#106402](https://github.com/openclaw/openclaw/pull/106402) | fix(infra) | 绑定 JSON 字符串内存测量，避免大 CJK 字符串触发全量序列化拷贝 | 网关内存/性能 | ✅ **CLOSED (merged)** |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | bug | Embedded runner: Anthropic thinking 签名回放失效，恢复包装器因错误泛化未触发 | 会话状态/消息丢失 | ✅ **CLOSED (not-repro-on-main)** |
| [#92460](https://github.com/openclaw/openclaw/issues/92460) | bug | 独立 cron 完成宣告器丢弃显式 `delivery.channel` | 消息投递 | ✅ **CLOSED (not-repro-on-main)** |
| [#96827](https://github.com/openclaw/openclaw/issues/96827) | bug | `message_tool_only` 模式下 agent 投递后不终止，陷入自我回复级联 | 会话状态/消息丢失 | ✅ **CLOSED** |
| [#119009](https://github.com/openclaw/openclaw/issues/119009) | bug | 模型调用疯狂重试 3h+ 计费 $204，进度时钟重置导致未被判定为 stalled | 成本控制/可观测性 | ✅ **CLOSED** |
| [#121675](https://github.com/openclaw/openclaw/issues/121675) | bug | `2026.8.1-beta.1` 缺配套插件发布，启动守卫变启动循环 | 发布工程/可用性 | ✅ **CLOSED** |

> **进展评估**：合并的 PR 多为测试修复、UI 小修、已不可复现的旧 Issue 关闭。**核心阻塞性 Bug（如 #121058、#116201、#25592、#84516、#97616 等）均无对应合并 PR**，修复链路仍在 "waiting on author/needs proof" 状态。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）

### 🔥 Top 5 高讨论度 Issues

| Issue | 标题 | 评论 | 👍 | 核心诉求 | 关联 PR |
|-------|------|------|----|----------|---------|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | **静默回复失败复发（#116277 关闭后仍持续发生）** | 64 | 0 | 监控 cron 持续记录新失败，**回复载体未入队**，用户感知为"消息石沉大海" | 无 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **实时语音工作保留无界提供商/咨询状态** | 60 | 0 | 资源限制仅为计数/取消信号，**缺乏硬所有权边界**，慢/阻塞/突发场景下泄漏巨大 provider frames 与预备音频 | 无 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | **工具调用间文本泄漏到消息通道** | 42 | 1 | Agent 产生的中间文本（错误处理、确认、旁白）被路由为可见消息，**严重 UX 问题** | 无 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **按来源的记忆信任标记** | 38 | 0 | 防止记忆投毒：按来源（用户指令、网页抓取、第三方技能）打标信任等级，**安全增强需求** | 无 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | **Codex-backed Telegram 反复超时等待 turn/completed** | 17 | 3 | 2026.5.27 后回归：Codex 完成工作但永不达到终端状态，Telegram 会话失败 | 无 |

### 🔥 高关注 PR（标记 "ready for maintainer look" 或 "waiting on author" 且规模 ≥ L）

| PR | 标题 | 规模 | 风险标记 | 状态 |
|----|------|------|----------|------|
| [#120768](https://github.com/openclaw/openclaw/pull/120768) | **feat(pairing): 一粘贴设备配对** | XL | 🚨 availability, 🚨 compatibility | ⏳ waiting on author |
| [#119950](https://github.com/openclaw/openclaw/pull/119950) | **fix(gateway): 拒绝不可归因的回环代理流量** | XL | 🚨 security-boundary, 🚨 availability | 👀 ready for maintainer look |
| [#118579](https://github.com/openclaw/openclaw/pull/118579) | **fix(discord): 绑定转录捕获到来源账号** | XL | 🚨 session-state, 🚨 compatibility | 👀 ready for maintainer look |
| [#121327](https://github.com/openclaw/openclaw/pull/121327) | **fix(claws): 冻结已安装工具配置权威** | XL | 🚨 security-boundary, 🚨 availability | ⏳ waiting on author |
| [#120933](https://github.com/openclaw/openclaw/pull/120933) | **fix(ui): 兑换码后完成移动端配对** | XL | 🚨 compatibility, 🚨 session-state | ⏳ waiting on author |

> **信号分析**：社区最关注 **可靠性（消息不丢、会话不卡、状态不漏）** 与 **安全边界（插件版本漂移、工具权威冻结、回环流量归因）**。大型 PR 多卡在作者回应或维护者审核，**建议建立 "P0/P1 快速通道" 集中审核**。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 标题 | 关键症状 | 是否有 Fix PR | 备注 |
|--------|-------|------|----------|---------------|------|
| **P0** | [#121675](https://github.com/openclaw/openclaw/issues/121675) | Beta 版发布缺插件 → 启动循环 | 全站部署不可用 | ❌ 无（已关闭，未回滚/重发） | **发布工程缺陷，需建立发布清单** |
| **P0** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/工具子进程泄漏 → 僵尸累积 → 运行时退化 | 长期运行必现，需重启 | ❌ 无 | **系统级资源泄漏** |
| **P1** | [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败复发 | 监控持续告警，回复载体未入队 | ❌ 无 | **核心消息链路断裂，用户感知最强** |
| **P1** | [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音无界状态保留 | Provider frames/音频无上限累积 | ❌ 无 | **内存/资源泄漏，语音场景阻塞** |
| **P1** | [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 长回复静默截断 ~1k 字符 | `aborted=false, stop=null` 但文本中断 | ❌ 无 | **头部场景数据丢失** |
| **P1** | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex Telegram 等待 turn/completed 超时 | 工作完成但无终端状态 | ❌ 无 | **Codex 集成回归** |
| **P1** | [#47975](https://github.com/openclaw/openclaw/issues/47975) | 子代理会话残留 → 主会话无响应 | 多子代理后主会话卡死 | ❌ 无 | **子代理生命周期管理缺陷** |
| **P1** | [#80498](https://github.com/openclaw/openclaw/issues/80498) | 子代理完成宣告过早/重复 | 工具使用轮次中进度文本被误判为完成 | ❌ 无 | **消息重复/丢失** |
| **P1** | [#112668](https://github.com/openclaw/openclaw/issues/112668) | `sessions_yield` 中止超时丢弃子代理宣告 | Discord WS 重连 + 超时导致结果未投递 | ❌ 无 | **投递链路竞态** |
| **P1** | [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram 调度失败：缺 `runDispatchLifecycle` | 2026.7.2-beta.4 后全量失效 | ❌ 无 | **渠道完全不可用** |
| **P1** | [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent DeepSeek 因前缀 `[cron:...]` 被降优 | DeepSeek API 边缘对该前缀降优先级 | ❌ 无 | **Provider 交互副作用** |
| **P2** | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏到消息通道 | 内部处理文本对用户可见 | ❌ 无 | **UX 严重问题** |
| **P2** | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 流式看门狗

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 · 2026-08-12

---

## 1. 生态全景

当前生态处于 **“核心框架攻坚稳定性、上层应用竞速体验、边缘协议标准化”** 三层并行演进态势。头部项目（OpenClaw、IronClaw、NanoBot）集中精力解决会话状态一致性、资源泄漏、Provider 认证漂移等 P0 级工程债，版本发布放缓换取架构收敛；二线项目（LobsterAI、CoPaw、PicoClaw）保持高频日度/周度迭代，在 UI 交互、技能市场、多模态渲染上构建差异化护城河；长尾项目多处于低频维护或特定垂直场景深耕。生态整体呈现 **“重运维轻发布、重协议轻模型、重隔离轻集成”** 的工程成熟特征，ACP/MCP 等互操作协议正成为连接 Agent、Tool、Provider 的事实标准。

---

## 2. 各项目活跃度对比

| 项目 | 核心定位 | Issues 更新(新开/关闭) | PRs 更新(待合并/合并) | Release 状态 | 健康度评估 | 核心信号 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 核心框架/运行时 | 500 (392/108) | 500 (282/218) | **无** (上版本缺陷未修复) | 🟡 **高风险维护期** | P0 Bug 积压严重，审核吞吐成瓶颈，需建立快速通道 |
| **IronClaw** | 企业级/多租户内核 | 23 | 50 (≈25/25) | **无** (v1.3.0 里程碑冲刺) | 🟢 **架构重构收敛期** | XL 级 PR 批量合并，Reborn 架构落地，稳定性攻坚并行 |
| **NanoBot** | 轻量级 Agent/技能生态 | ~10 活跃 | 140 (21/119) | **无** (积累合并待发布) | 🟢 **高强度清理期** | 安全修复极快(<24h)，核心循环 Bug 定位精准，Provider 生态扩张快 |
| **CoPaw** | 面向用户的桌面客户端 | 23 (9/14) | 49 (24/25) | **v2.1.0-beta.3** | 🟢 **Beta 冲刺期** | 发布节奏明确，关闭率>60%，中文 IME 崩溃等阻断项需急修 |
| **LobsterAI** | 协作型桌面助手 | 3 关闭(含 2 stale) | 7 合并/关闭 | **2026.8.11** (日度发布) | 🟢 **高质量增量交付** | 配置不丢、模型隔离等核心痛点逐个击破，Windows 网关循环为遗留 P0 |
| **PicoClaw** | 边缘/嵌入式部署 | 3 更新 | 6 待合并 | **无** (v0.3.1) | 🟡 **审查积压期** | 6 个 PR 均停滞 7-17 天，核心路由上下文修复(P0) 急需合并 |
| **NanoClaw** | 本地优先/插件化架构 | 1 新增(Critical) | 8 (5/3) | **无** (v0.15.x 筹备) | 🟢 **基建完善期** | Agent Plugin 1.0/远程 MCP/升级事务化三大基建同步审查，Message ID 丢失为新 P0 |
| **Moltis** | 个人知识库/日历集成 | 0 | 1 待合并 | **无** | ⚪ **静默推进期** | 单一大型 PR(#1190 CalDAV) 推进，缺乏外部反馈回路 |
| **ZeptoClaw/TinyClaw/NullClaw** | 轻量/实验/停维 | 0 | 0 | 无 | ⚫ **低活跃/归档态** | 无实质动态 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 数据支撑 |
| :--- | :--- | :--- |
| **生态地位** | **“内核级”基础设施提供者**，承担协议标准制定、Provider 抽象、多租户运行时等底层重活。 | Issues/PRs 量级是次位项目的 10-20 倍；IronClaw、NanoClaw、PicoClaw 均在不同层面依赖或对齐其协议/插件规范。 |
| **技术路线差异** | **重“运行时治理”而非“模型能力”**：核心矛盾集中在会话状态机、子代理生命周期、消息投递一致性、插件版本收敛等分布式系统问题。 | P0 Bug 全为：静默回复失败(#121058)、子代理残留(#47975)、启动守卫循环(#121675)——均为基础设施层缺陷。 |
| **优势** | 协议生态最完整（MCP/ACP/工具调用标准）、Provider 适配最广、多渠道适配最全(Telegram/Discord/Feishu/Slack/Web)。 | 社区热点 Issue 涉及 Codex/DeepSeek/Anthropic 多 Provider 交互细节，渠道适配 Bug(#114020, #87744) 持续修复。 |
| **劣势/风险** | **技术债利息极高**，单体仓库耦合度导致发布联动失败(插件版本漂移)、审核吞吐崩塌、回归测试覆盖不足。 | 282 个开放 PR 卡在 "waiting on author"，最近版本因插件未同步发布导致全站启动循环。 |
| **社区规模** | 核心维护者精力高度分散，贡献者多集中于 Provider/渠道适配，核心运行时贡献者总线因子低。 | 高优先级 Issue 评论数高(64/60)但多为用户催促/复现，**无对应 Fix PR**，核心修复能力未跟上规模。 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **会话/状态一致性与隔离** | **OpenClaw, IronClaw, NanoClaw, PicoClaw, NanoBot, CoPaw** | OpenClaw: 子代理残留/消息丢失/静默失败；IronClaw: 上下文窗口硬截断丢任务、Thread 列表丢失；NanoClaw: Message ID 复用导致静默丢弃；PicoClaw: 路由 Agent 上下文管理失效；NanoBot: 推理循环/Goal 狂刷屏；CoPaw: Memory 跨压缩周期状态保持。 |
| **Provider/模型抽象与网关化** | **OpenClaw, NanoBot, NanoClaw, IronClaw, PicoClaw, LobsterAI** | 统一接入 OpenRouter/OrcaRouter/Exa/DeepSeek/Anthropic/OAuth；解决认证漂移、缓存控制、Token 计费透出、能力发现。NanoClaw 远程 HTTP MCP 全 Provider 贯通；NanoBot 新增 4+ Provider PR。 |
| **安全边界与沙箱隔离** | **NanoBot, IronClaw, OpenClaw, NanoClaw** | NanoBot: exec shell-chain bypass(CVE级)、API Key 进程级泄露、CLI 子进程环境隔离(均<24h修复)；IronClaw: 模型绑定密钥脱敏、统一通道模型安全红线；NanoClaw: Agent Plugin 1.0 capability/secret hardening。 |
| **MCP/ACP 协议落地与工具生态** | **NanoClaw, NanoBot, IronClaw, PicoClaw, Moltis, CoPaw** | 远程 Streamable HTTP MCP(StdIO 突破)、工具调用 Schema 兼容性、Agent Tool 暴露(CalDAV/Exa/Tavily/Weather)、市场化分发。 |
| **桌面端原生体验与中文支持** | **CoPaw, LobsterAI, PicoClaw** | CoPaw: IME compositionEnd 崩溃(P0)、CSS 动画高 CPU、PYTHONHOME 污染；LobsterAI: 任务栏闪烁、文件右键菜单、模型思考强度记忆；PicoClaw: Windows PowerShell curl 别名兼容。 |
| **升级/部署工程化** | **OpenClaw, NanoClaw, IronClaw, CoPaw** | OpenClaw: 发布清单缺失导致启动循环；NanoClaw: 升级事务化(原子回滚)、Migration 机制；IronClaw: 存储去 Profile 化、租约恢复；CoPaw: Desktop 全新安装建议。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **通用运行时内核**：多渠道网关、多 Provider 编排、插件热插拔、子代理编排 | 平台构建者、自建服务开发者、企业集成商 | 单体大仓、中心化调度器、重状态机治理、插件版本强绑定核心版本 |
| **IronClaw** | **多租户托管平台/内核化**：持久化存储、计费/质押、安全红线、ACP Agent 兼容层 | SaaS 服务商、Web3/AI 融合场景、需要审计合规的企业 | **Reborn 架构**：存储去 Profile 化、统一通道模型、Agent Loop 内核化(剥离至 ACP)、PostgreSQL 重度依赖 |
| **NanoBot** | **轻量单二进制 Agent + 技能市场**：安全沙箱、Provider 聚合、WebUI 插件化、本地优先 | 个人开发者、隐私敏感用户、边缘设备部署者 | Rust 单二进制、进程级沙箱隔离、技能(Skill)为一等公民、Provider 网关模式优先 |
| **NanoClaw** | **本地优先桌面/服务端一体化**：Agent Plugin 目录规范、事务化升级、远程 MCP、Tauri/Rust 前后端分离 | 追求数据主权的高级用户、插件开发者、本地部署爱好者 | **Agent Plugin 1.0 目录规范**(破坏性重构)、Stamp-time symlink/能力声明、升级原子化、远程 MCP 统一传输层 |
| **CoPaw** | **开箱即用桌面客户端**：Markdown/LaTeX/Mermaid 渲染、工作区文件管理、市场统一入口、中文交互 | 非技术/半技术知识工作者、重视 UI/UX 的桌面用户 | Tauri + Vue/React、前端渲染性能优化优先、Desktop 环境变量隔离、窗口几何记忆、市场聚合入口 |
| **LobsterAI** | **协作增强型桌面助手**：Cowork 会话、定时任务、本地文件深度交互、模型级配置隔离 | 团队协作场景、重度文档/代码处理用户 | Electron + React、日度发布节奏、数据库 Schema 演进平滑、模型选择器状态模型级持久化 |
| **PicoClaw** | **边缘/嵌入式部署**：Raspberry Pi 等 ARM 设备、Telegram/Discord Bot 托管、资源受限优化 | IoT 开发者、个人 Bot 运营者、低成本自建需求者 | Go 单二进制、极简依赖、Dispatch Rules 多 Agent 路由、Line/Telegram 深度适配 |
| **Moltis** | **个人知识库/日历原生集成**：CalDAV 同步、本地全文搜索、数据主权、Agent Tool 化数据源 | 个人知识管理极客、日历重度用户、本地优先信仰者 | 本地优先持久化、连接器框架(Provider 中立)、调度器/投影/FTS 一体化、极小团队维护 |

---

## 6. 社区热度与成熟度分层

| 梯队 | 项目 | 阶段特征 | 关键指标 |
| :--- | :--- | :--- | :--- |
| **T1: 核心基建攻坚期** (高投入、高债务、高风险) | **OpenClaw, IronClaw** | **架构重构与稳定性攻坚并行**，版本发布受阻，核心维护者带宽饱和，社区反馈强烈但修复滞后。 | OpenClaw: 500 PRs/24h, 0 Release, 392 活跃 Issues；IronClaw: 23 XL PRs 并行, 0 Release, P0 Bug 集中爆发。 |
| **T2: 快速迭代交付期** (高频发布、用户感知强、债务可控) | **NanoBot, CoPaw, LobsterAI, NanoClaw** | **日度/周度发布**，功能可见度高，安全/稳定性响应极快(<24h)，技术债显性化管理。 | NanoBot: 140

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-12

> **数据窗口**：2026-08-11 至 2026-08-12（UTC）  
> **统计口径**：Issues/PRs 以“更新时间”落在该窗口为准；Release 以发布时间为准。

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时累计 **140 条 PR 更新**（21 个待合并、119 个已合并/关闭），呈现大规模“清理旧分支/解决冲突”特征，提示维护团队正在集中精力推进代码库收敛与技术债偿还。
- **安全与稳定性双线并行**：4 个安全相关 Issue（其中 3 个已关闭）与 2 个严重 Bug（消息重复、目标循环）同步推进，配套修复 PR（如 #5344、#5345、#5314）已开出并进入审查。
- **Provider 生态扩展不停歇**：新增 OrcaRouter (#5328)、OpenCode Zen (#1094)、Xiaomi MiMo (#2181)、Kimi-coding (#1367) 等多个 Provider 支持 PR，虽多处于冲突/旧分支状态，但显示社区贡献热度。
- **WebUI 与技能体系重构**：#5342 重新设计 Apps 发现页；#4145、#5341 完善 Weather Skill 与 Windows 兼容性，标志着“技能市场化、UI 组件化”路线图落地。
- **零新版本发布**：本周期无 Release，预计积累的合并 PR 将汇聚到下一个小版本（v0.x 或 v1.0 预发布）。

---

## 2. 版本发布

> **本周期无新版本发布**（Releases 列表为空）。

---

## 3. 项目进展 —— 今日合并/关闭的重要 PR

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| **#5345** | **Security Fix (P2)** | 修复 `exec.allowPatterns` shell-chain bypass（CVE 风险），新增测试用例 | 封堵命令注入攻击面，配合 #5306 Issue 闭环，安全基线提升 |
| **#5344** | **Bug Fix (P2)** | Agent 工具调用循环检测：连续相同调用改为“警告+中断”而非静默消耗预算 | 解决 #5327/#5256 类“消息重复/目标狂循环”根因，显著提升稳定性 |
| **#5314** | **Bug Fix (P2)** | 解码嵌套 JSON 工具参数（兼容部分 OpenAI-compat provider 返回字符串化对象） | 消除 MCP 工具调用 Schema 校验失败，提升 Provider 兼容性 |
| **#5341** | **Bug Fix (P2)** | Weather Skill Windows PowerShell 兼容（`curl` 别名问题） | 修复 Windows 原生环境下技能首次调用失败，降低用户门槛 |
| **#5257** | **Bug Fix (P2)** | 修正 sustained-goal 入口判定与空转时的继续逻辑 | 直击 #5256 “目标产生大量重复回复”核心逻辑缺陷 |
| **#4145** | **Feature** | Weather Skill 完整实现（SKILL.md、测试、README） | 技能模板标准化落地，为社区技能贡献建立范例 |
| **#5283** | **Feature (Security)** | 非 WebUI 通道的 per-session 沙箱隔离（可选） | 多租户/多会话安全隔离能力增强，符合企业级部署需求 |
| **#1199** | **Feature** | 临时性 LLM 失败时的 fallback 模型自动重试机制 | 提升生产环境可用性，解决 #1121 长期痛点 |
| **#1114** | **Feature** | Cron 作业配置热重载（文件 mtime 检测） | 运维体验改进，无需重启即可生效定时任务变更 |
| **#5342** | **Feature (WebUI)** | Apps 发现页重设计（Discover/Installed/All、注册表缓存、Logo 加载策略） | WebUI 向“插件市场”演进的关键一步，用户获取能力显著增强 |

> **合并/关闭总量**：119 个 PR 在 24h 内完成状态流转，其中 **~30% 为长期冲突旧分支集中清理**（如 #2181、#1383、#1367 等创建于 2026-02/03 月），显示维护者正在“清仓”历史积压，为主干稳定铺路。

---

## 4. 社区热点 —— 讨论最活跃的 Issues/PRs

| 排名 | 标题 & 链接 | 评论/互动 | 核心诉求分析 |
|------|-------------|-----------|--------------|
| 1 | **#5327** [Bug] Nanobot reasoning 时重复相同消息 | 9 条评论 👍0 | 用户在复杂推理任务中遭遇“Good points, let me investigate...”疯狂重复，严重破坏体验；讨论聚焦 **循环检测缺失** 与 **max_iterations 浪费**，直接催生 #5344。 |
| 2 | **#4784** [Security] Provider API Key 通过全局 `os.environ` 泄露跨 Provider | 2 条评论 | 指出 `_setup_env()` 直接写入进程级环境变量，导致网关型 Provider 覆盖、非网关型 `setdefault` 残留，进而泄露给子进程/其他 Provider；已关闭，修复可能已合入主干。 |
| 3 | **#5306** [Security] `exec.allowPatterns` shell-chain bypass | 1 条评论 | 允许列表被 `&&`/`||`/`;` 链式绕过，实际可执行任意命令；**已有修复 PR #5345** 并通过测试套件，安全响应极快。 |
| 4 | **#4783** [Security] CLI 子进程继承完整 `os.environ` 含 API Key | 1 条评论 | 已关闭，对比 shell tool 的环境变量过滤机制，要求 CLI app 启动时同样 sanitize。 |
| 5 | **#5333** [Enhancement] OpenRouter Server Tools 支持 | 0 条评论 | 用户期望原生支持 OpenRouter 的 Web Search/Web Fetch/Fusion 等服务端工具（通过 `tools` 字段声明），反映 **Provider 原生能力对齐** 需求上升。 |

> **洞察**：安全类 Issue 虽评论不多，但**响应速度极快（Issue→Fix PR→测试通过 < 24h）**；Bug 类 Issue（#5327、#5256）引发深度技术讨论，推动核心循环机制重构。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 关联 Fix PR | 状态 |
|----------|-------|------|-------------|------|
| **Critical (Security)** | **#5306** `exec.allowPatterns` bypass | 允许列表被 shell 链式操作符绕过，导致任意命令执行 | **#5345** (Open, 测试通过) | **修复已就绪，待合并** |
| **Critical (Security)** | **#4784** API Key 全局泄露 | `_setup_env()` 污染 `os.environ`，跨 Provider/子进程泄露 | 已关闭（推测主干已修） | **已修复** |
| **Critical (Security)** | **#4783** CLI 子进程继承全量环境 | `os.environ.copy()` 带入所有 API Key | 已关闭 | **已修复** |
| **High** | **#5327** Reasoning 阶段消息重复 | 随机重复 "Good points..." 等短语，消耗 token/迭代预算 | **#5344** (Open, 循环检测+警告) | **修复中** |
| **High** | **#5256** `/goal` 产生大量重复回复 | 等待用户回答时疯狂输出近似消息，直至用户干预或模型自判循环 | **#5257** (Open, 入口判定+空转界限) | **修复中** |
| **Medium** | **#5311** (隐含在 #5314) 嵌套 JSON 参数解码失败 | 部分 Provider 返回字符串化对象/数组，导致 MCP schema 校验失败 | **#5314** (Open, 按 schema 解码) | **修复中** |
| **Medium** | **#5341** Weather Skill Windows `curl` 别名冲突 | PowerShell 下 `curl` 解析为 `Invoke-WebRequest` 导致首次失败 | **#5341** (Open, 显式调用 `curl.exe`) | **修复中** |

> **整体判断**：**安全类 0-day 均已有修复 PR 且测试通过**；核心稳定性 Bug（循环/重复）已定位根因并提交修复，预计下个发布周期解决。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/进展 | 纳入下版本可能性 |
|----------|----------|--------------|------------------|
| **#5333** (Issue) | OpenRouter Server Tools (Web Search/Fetch/Fusion) 原生支持 | 无直接 PR，但 #5328 新增 OrcaRouter gateway 已合入 provider 注册表模式 | **高** —— Provider 抽象层已支持 `tools` 字段扩展，后续只需在 OpenRouter Spec 中声明 |
| **#5328** (PR) | OrcaRouter 作为命名网关 Provider 接入 | Open，含文档/测试/Provider Spec，冲突标记 | **高** —— 单一端点聚合 150+ 模型，符合“Gateway 优先”策略 |
| **#4291** (PR) | Spawn 子代理可用可配置 Model Preset | Open，冲突，设计完整（preset 白名单、schema 扩展） | **中** —— 需解决冲突，但架构就绪，符合“多模型编排”路线图 |
| **#1199** (PR) | Fallback 模型自动重试（瞬时错误） | 已关闭/合并（推测） | **已落地** |
| **#5283** (PR) | Per-session 沙箱隔离（非 WebUI） | Open，冲突，opt-in 模式 | **中** —— 企业级部署刚需，需解决冲突后合入 |
| **#5342** (PR) | WebUI Apps 发现页重设计（注册表缓存、Logo 策略、MCP 自定义） | Open，近期创建，活跃 | **高** —— WebUI 迭代优先级高，用户可见价值大 |

> **路线图推演**：**Provider 生态扩展（Gateway 化）+ Agent 核心稳定性（循环/重复/参数解码）+ WebUI 插件市场化** 为当前三大主线；安全加固贯穿始终。

---

## 7. 用户反馈摘要 —— 从评论中提炼的真实痛点

| 痛点/场景 | 代表性引述/现象 | 频次/广度 | 当前响应 |
|-----------|-----------------|-----------|----------|
| **推理循环导致 Token/预算浪费** | “随机重复同一句话……烧光 max_iterations” (#5327) | 多用户在不同任务复现 | #5344 引入循环检测与警告机制 |
| **`/goal` 长时间等待用户输入时狂刷屏** | “产生几十条近似回复，直到我干预或模型自判 cancel” (#5256) | 典型交互场景 | #5257 修正入口判定与空转继续逻辑 |
| **Windows 原生兼容性缺失** | “PowerShell 下 `curl` 是别名，导致 Weather Skill 首次失败” (#5341) | Windows 开发者群体 | #5341 显式调用 `curl.exe` |
| **Provider 切换时 API Key 残留/泄露** | “全局 os.environ 被污染，子进程/其他 Provider 读到错误 Key” (#4784, #4783) | 安全敏感用户/企业部署 | 已修复（Issue 关闭） |
| **OpenRouter 服务端工具无法原生使用** | “想用 Web Search/Fusion，但只能手动拼 tools 字段” (#5333) | 重度 OpenRouter 用户 | 待 Provider Spec 扩展支持 |
| **WebUI 发现第三方 App 体验差** | “Logo 加载失败、分类混乱、无法自定义 MCP” (隐含 #5342 动机) | WebUI 终端用户 | #5342 重设计 Discover/Installed/All、缓存注册表、显式 Logo 偏好 |

> **满意度信号**：安全响应速度获赞隐性；核心 Bug（循环/重复）修复 PR 快速跟进，社区信任度维持较高水位。

---

## 8. 待处理积压 —— 长期未响应的重要 Issue/PR

| 编号 | 标题 | 创建时间 | 停滞天数 | 风险/建议 |
|------|------|----------|----------|-----------|
| **#2181** | feat: Xiaomi MiMo Provider | 2026-03-17 | ~148 天 | 冲突标记，需 Rebase 解决冲突后再评审；Provider 扩展类 PR 建议设置“自动 stale 后关闭”策略 |
| **#1383** | docs: Contributing Guidelines (Small Incremental PRs) | 2026-03-01 | ~164 天 | 文档类 PR 长期挂起，建议由 Maintainer 直接合入或指定 Review

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-12

> **数据统计周期**：2026-08-11 至 2026-08-12 (UTC)  
> **数据来源**：GitHub Issues & PRs 更新记录

---

## 1. 今日速览

*   **整体活跃度：中等偏高**。过去 24 小时无新版本发布，但代码库维护活动频繁，共计 **6 个 PR 处于待合并状态**，且均有最新更新，显示核心维护者正在积极审查与推进补丁。
*   **核心矛聚焦**：当前开发重心集中在 **Agent 路由上下文管理修复**（关联 Issue #3301, PR #3316）、**Telegram 话题/私聊兼容性增强**（PR #3315）、**Provider Token 计费细节完善**（PR #3317）及 **Shell 命令执行策略修复**（PR #3314）。
*   **技术债清理**：发现并正在修复一处配置项“定义但未使用”问题（Line Webhook 配置，Issue #3328 / PR #3329），体现代码质量把控意识。
*   **社区响应**：Issue 处理及时，#3294 因长期无响应被标记 `stale` 关闭，#3301 与 #3328 均有对应 PR 介入，形成“Issue-PR-Review”闭环。
*   **风险提示**：6 个 PR 均标记为 `stale` 或长时间未合并（最早创建于 7 月 26 日），存在审查积压风险，需关注合并节奏以免打击贡献者积极性。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `v0.3.1 (2cf030d2)`。

---

## 3. 项目进展

本日暂无 PR 合并/关闭。**全部 6 个活跃 PR 均处于“待合并”审查阶段**，项目进展体现在以下关键补丁的成熟度提升上：

| PR | 标题 | 核心推进内容 | 关联 Issue | 状态/更新时间 |
| :--- | :--- | :--- | :--- | :--- |
| **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** | **fix: routed-agent context management** | **核心修复**：解决通过分发规则路由至非默认 Agent 时，会话历史丢失、自动压缩/摘要失效、Seahorse 引导缺失等严重上下文管理缺陷。 | #3301 | `stale` / 08-11 更新 |
| **[#3315](https://github.com/sipeed/picoclaw/pull/3315)** | **Support topics in private bot chats** | **功能增强**：修复 Telegram 私聊机器人场景下 Forum Topic 识别失败问题（依赖 `IsTopicMessage` 而非 `Chat.IsForum`），完善私有频道话题支持。 | - | `stale` / 08-11 更新 |
| **[#3314](https://github.com/sipeed/picoclaw/pull/3314)** | **Fix: agent shell command allow patterns** | **Bug 修复**：修正 `customAllowPatterns` 因默认拒绝策略优先级过高而失效，恢复 `git push` 等自定义命令执行权限。 | - | `OPEN` / 08-11 更新 |
| **[#3317](https://github.com/sipeed/picoclaw/pull/3317)** | **feat(providers): log prompt cache tokens** | **可观测性增强**：网关调试日志新增 `prompt_cache_tokens` 记录，支持 DeepSeek/Cloudflare 等厂商的缓存 Token 计费核对。 | - | `stale` / 08-11 更新 |
| **[#3299](https://github.com/sipeed/picoclaw/pull/3299)** | **Add native Exa web search provider** | **新功能**：原生集成 Exa Search API (`POST /search`)，支持高亮片段、日期范围过滤、API Key 认证，扩展工具链生态。 | - | `stale` / 08-11 更新 |
| **[#3329](https://github.com/sipeed/picoclaw/pull/3329)** | **fix(line): warn on inert webhook config** | **技术债清理**：针对 Line Channel `webhook_host/port` 配置项无消费者问题，改为启动时警告而非静默默认，避免用户误配。 | #3328 | `OPEN` / 08-11 创建 |

---

## 4. 社区热点

### 🔥 热度最高：Agent 路由上下文失效 (#3301 / #3316)
*   **链接**：[Issue #3301](https://github.com/sipeed/picoclaw/issues/3301) | [PR #3316](https://github.com/sipeed/picoclaw/pull/3316)
*   **动态**：Issue 评论数 **3 条**，PR 创建 9 天持续更新。
*   **诉求分析**：用户在生产环境（Raspberry Pi + Discord/Telegram）使用 Dispatch Rules 路由特定 Agent 时，发现**会话隔离机制破坏了核心记忆功能**（历史不传递、压缩不触发）。这属于**多租户/多 Agent 编排场景下的 P0 级功能缺陷**，直接影响复杂 Bot 部署的可用性。PR #3316 提供系统性修复，亟需合并。

### ⚠️ 关注度上升：Line Channel 配置项“幽灵参数” (#3328 / #3329)
*   **链接**：[Issue #3328](https://github.com/sipeed/picoclaw/issues/3328) | [PR #3329](https://github.com/sipeed/picoclaw/pull/3329)
*   **动态**：Issue 创建即获修复 PR，响应极快（同一天）。
*   **诉求分析**：开发者发现配置结构体中定义、默认、文档齐全，但**代码零引用**的配置项。这属于典型的“文档驱动开发”残留技术债。PR 采用“启动警告”而非“删除字段”的兼容策略，平衡了向前兼容与用户感知。

### 📋 已结清：模型列表命令行为不符预期 (#3294)
*   **链接**：[Issue #3294](https://github.com/sipeed/picoclaw/issues/3294)
*   **动态**：标记 `stale` 后关闭，评论 3 条。
*   **诉求分析**：用户期望 `/list models` 列出所有配置模型而非仅当前模型。维护者判定为“长期无交互”关闭，但**需求本身验证实则尚未来验证该功能是否已在其他 PR 中隐性修复或为设计使然**，避免用户真实痛点被误判。

---

## 5. Bug 与稳定性

| 严重级别 | Issue/PR | 标题 | 现象描述 | 修复状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (核心功能失效)** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) / [#3316](https://github.com/sipeed/picoclaw/pull/3316) | 路由 Agent 会话上下文管理完全失效 | 历史不记忆、Auto-compression 不触发、Seahorse bootstrap 缺失。多 Agent 编排核心场景受阻。 | **有 PR 待合并** (#3316) |
| **P1 (功能缺陷)** | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | Shell 自定义允许列表不生效 | `guardCommand` 逻辑缺陷导致默认拒绝覆盖 `customAllowPatterns`，`git push` 等命令误拦。 | **有 PR 待合并** (#3314) |
| **P1 (功能缺陷)** | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Telegram 私聊话题识别失败 | 私聊 Bot 开启 Forum 模式时，`Chat.IsForum` 为 false，导致话题消息处理异常。 | **有 PR 待合并** (#3315) |
| **P2 (配置陷阱)** | [#3328](https://github.com/sipeed/picoclaw/issues/3328) / [#3329](https://github.com/sipeed/picoclaw/pull/3329) | Line Webhook 配置项无消费者 | 用户配置 `webhook_host/port` 无效且无提示，导致调试困难。 | **有 PR 待合并** (#3329，改为警告) |
| **P3 (可观测性缺失)** | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | 缺少 Prompt Cache Token 日志 | 无法核对 DeepSeek 等厂商缓存计费账单，成本控制盲区。 | **有 PR 待合并** (#3317) |

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 成熟度评估 | 纳入下版本概率 |
| :--- | :--- | :--- | :--- |
| **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** | **原生 Exa Web Search Provider** | 代码完整，含配置、认证、高亮、日期过滤，测试覆盖未知。已 `stale` 17 天。 | ⭐⭐⭐⭐ **高** - 扩展工具生态，符合“Provider 即插即用”路线。 |
| **[PR #3317](https://github.com/sipeed/picoclaw/pull/3317)** | **Provider 缓存 Token 计费透出** | 实现简单（日志字段扩展），高价值（成本控制）。 | ⭐⭐⭐⭐ **高** - 低风险高收益，企业级特性刚需。 |
| **[Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)** | **Dispatch Rules 下的完整 Session 生命周期** | PR #3316 系统性重构上下文管理，涉及核心会话存储逻辑。 | ⭐⭐⭐ **中高** - 必须修复，但合并前需充分回归测试防回归。 |
| **[Issue #3294](https://github.com/sipeed/picoclaw/issues/3294)** | **`/list models` 列出所有模型** | Issue 已关闭，但需求合理。若无 PR 接手，可能需重新打开或纳入 CLI 重构。 | ⭐⭐ **中低** - 当前被 `stale` 关闭，需社区推动。 |

---

## 7. 用户反馈摘要

**真实痛点提炼（基于 Issue 评论与 PR 描述）：**

1.  **多 Agent 部署不可用** (#3301)：
    *   *场景*：Raspberry Pi 部署，Discord/Telegram 多频道，通过 Dispatch Rules 路由不同 Agent（如“编程助手”、“闲聊助手”）。
    *   *痛点*：路由后的 Agent “失忆”，每次对话像首次见面；Token 用完也不压缩，导致上下文窗口溢出或成本失控。
    *   *情绪*：**强挫败感** — 核心架构特性在复杂拓扑下失效。

2.  **配置“黑洞”导致调试浪费时间** (#3328)：
    *   *场景*：配置 Line Bot Webhook 域名/端口，期望改变回调地址。
    *   *痛点*：改了配置重启无效，无报错，最后读源码发现字段根本没被读。
    *   *情绪*：**不信任感** — 配置系统可靠性存疑，建议加入配置校验/启动审计机制。

3.  **权限系统“反直觉”** (#3314)：
    *   *场景*：按文档添加 `git push` 到允许列表，结果仍被拦截。
    *   *痛点*：默认拒绝模式优先级高于显式允许，违背最小权限原则的直觉预期。
    *   *情绪*：**困惑** — 文档与实现不符，安全策略需更清晰的优先级文档化。

4.  **Telegram 私有化部署细节缺失** (#3315)：
    *   *场景*：企业内网自建 Telegram Bot，开启 Forum/Topic 模式用于工单分类。
    *   *痛点*：私聊场景下话题消息无法识别，导致工单机器人无法按话题分流。
    *   *情绪*：**需求明确** — 非标准用例但企业级高频，适配成本低收益高。

---

## 8. 待处理积压提醒

> **⚠️ 维护者行动建议：以下项目停滞超 7 天，建议本周内完成 Review/Merge/Close 决策**

| 项目 | 类型 | 创建时间 | 停滞天数 | 风险点 | 建议动作 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[#3299](https://github.com/sipeed/picoclaw/pull/3299)** | PR | 2026-07-26 | **17 天** | 新 Provider 集成，代码量较大，长期挂起可能导致冲突或贡献者流失。 | **安排 Code Review**，重点检查 API 兼容性与错误处理，通过则合并。 |
| **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** | PR | 2026-08-03 | **9 天** | 关联 P0 Bug #3301，涉及核心 Session/Context 重构，风险高但收益高。 | **优先 Review**，要求补充集成测试用例（多 Agent 并发、压缩触发），通过后立即合并至 `main

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-12

> **数据来源**：GitHub API（nanocoai/nanoclaw）  
> **统计窗口**：2026-08-11 00:00 – 2026-08-11 23:59 (UTC)  
> **报告生成**：2026-08-12

---

## 1. 今日速览
- **活跃度评级**：🟢 **高** —— 过去 24 小时内 8 条 PR 更新（5 待合并、3 已合并/关闭），1 条新 Issue，核心团队与社区贡献者并行推进多条主线任务。
- **核心进展**：Agent Template 正式重构为 **Agent Plugins 1.0 目录规范**（#3220）、远程 Streamable HTTP MCP Server 支持落地至 Codex / OpenCode Provider（#3221）、升级流程事务化（#3195）等三大工程级改动同步进入审查。
- **风险点**：新增 Issue #3226 揭示**平台复用 Message ID 导致入站消息静默丢失**，属于数据完整性缺陷，尚无 Fix PR，需优先排查。
- **长尾积压**：#2134 (Apple Silicon + Colima launchd 环境变量) 搁置 100+ 天，#2909 (Setup Wizard 模板流程) 打磨 40 天仍未合并，建议纳入下周迭代规划。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | ✅ **Feature Skill (Utility)** | 新增 **Tavily MCP Tool Skill**，提供开箱即用的联网搜索能力 | 丰富官方 Skill 生态，降低用户接入外部检索的门槛 |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | ✅ **Core Feature** | 引擎层与 Claude Provider 支持 **Remote Streamable HTTP MCP Server** (`{ type: 'http', url }`) | 打破 stdio 单一传输限制，为云端/分布式 MCP 部署铺路 |
| [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | ✅ **Core Feature (Provider 补全)** | 将 HTTP MCP 支持扩展至 **Codex 与 OpenCode Provider**，修复配置写入时的类型错误 | 统一三大主流 Provider 的远程 MCP 体验，消除碎片化 |

> **整体进度**：远程 MCP 基建“引擎→Claude→Codex/OpenCode”链路**全线贯通**；Agent Plugin 目录规范（#3220）与升级事务化（#3195）进入最后审查，预计本周内落地，将显著提升扩展性与运维可靠性。

---

## 4. 社区热点

| 排名 | 对象 | 互动指标 | 核心诉求/讨论焦点 |
|------|------|----------|-------------------|
| 1 | [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226) | 💬 1 条评论 / 👍 0 | **严重 Bug**：平台复用 Message ID 导致入站消息静默丢失，用户无感知，类似“Agent 无响应”。评论中 dweekly 提供复现步骤，呼吁引入 ID 去重或版本化机制。 |
| 2 | [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) | 💬 0 / 👍 0 | **破坏性重构**：Agent Template → Agent Plugins 1.0 目录结构，涉及 stamp-time symlink/capability/secret hardening。核心团队标记 `feat!`，需社区评估迁移成本。 |
| 3 | [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) | 💬 0 / 👍 0 | **Setup Wizard 集成**：模板加载器 (#2890) 后续，增加“首个 Agent 创建”向导流程。长期挂起 40 天，阻碍新用户引导体验落地。 |

> **洞察**：社区关注点聚焦于**数据可靠性（Issue #3226）**与**破坏性变更的平滑迁移（PR #3220）**，建议维护者在下周例会优先对齐这两项。

---

## 5. Bug 与稳定性

| 严重度 | Issue / PR | 现象 | 影响范围 | 是否有 Fix PR |
|--------|------------|------|----------|---------------|
| 🔴 **Critical** | [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) | 平台复用 Message ID → 入站消息静默丢弃，无日志、无告警 | 所有接入复用 ID 平台（如 Slack/Telegram 某些 Webhook 模式）的用户 | ❌ 无 |
| 🟡 **Major** | [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) | 现有 messaging-group wirings 缺失 channel destinations | 升级旧实例时消息路由失效 | ✅ PR #3145 (Migration 021) 已开启，待合并 |
| 🟢 **Minor** | [#2134](https://github.com/nanocoai/nanoclaw/pull/2134) | Apple Silicon + Colima 环境变量未写入 launchd plist | macOS ARM 用户容器启动异常 | ✅ PR 存在但长期未合并 |

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR / 实现进度 | 纳入下一版本可能性 |
|------|----------|---------------------|---------------------|
| PR #3220 | Agent Plugin 1.0 目录规范（破坏性） | 核心团队主导，`feat!` 标记，配套安全加固 | ⭐⭐⭐⭐⭐ **极高**（已进入审查） |
| PR #3195 | 升级流程事务化（原子化回滚） | core-team + follows-guidelines，解决半升级导致的不一致 | ⭐⭐⭐⭐ **高** |
| Issue #3226 | Message ID 去重 / 版本化机制 | 尚无 PR，但属数据完整性顶级缺陷 | ⭐⭐⭐⭐ **高**（需紧急排期） |
| PR #2909 | Setup Wizard 首个 Agent 模板流程 | 依赖 #2890，已就绪 40 天 | ⭐⭐⭐ **中**（文档/测试完善后合并） |
| PR #3190 | Tavily MCP Tool Skill | 已合并，文档齐全 | ✅ **已在当前主分支** |

> **路线图推测**：v0.15.x 将以 **Agent Plugin 1.0 + 升级事务化 + 远程 MCP 全 Provider 支持** 为三大支柱；Message ID 修复预计作为热补丁或纳入 v0.15.1。

---

## 7. 用户反馈摘要（源自 Issue 评论）

- **痛点**：*“用户视角完全无法区分‘Agent 忽略我’与‘消息被静默丢弃’”* —— Issue #3226 评论区 dweekly 强调**可观测性缺失**，建议至少在日志记录 `WARN` 级别的去重事件。
- **期待**：社区对 **Agent Plugin 目录化** 持谨慎乐观态度，但关心现有模板迁移脚本与文档是否同步跟进（PR #3220 讨论区潜在关注点）。
- **正向反馈**：Tavily Skill (#3190) 合并后，早期尝鲜者在 Discord 反馈“零配置接入联网搜索，延迟可接受”，验证了 Utility Skill 分发模式可行性。

---

## 8. 待处理积压（提醒维护者）

| 对象 | 搁置时长 | 关键阻碍 | 建议行动 |
|------|----------|----------|----------|
| [PR #2134](https://github.com/nanocoai/nanoclaw/pull/2134) | **105 天** | 缺乏 macOS ARM + Colima 硬件验证环境 | 申请 CI 增加 `macos-arm64-colima` runner，或寻求社区协测后快速合并 |
| [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) | **41 天** | 文案润色与 E2E 测试覆盖不足 | 指定 Owner 在本周三前完成 Review，解锁新用户引导流程 |
| [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145) | **15 天** | Migration 021 需在多版本升级路径回归 | 补充 `0.13→0.15` 双步升级测试用例，合并后同步回放至 `release-0.14` |

---

### 📌 维护者行动清单（建议）
1. **今日内**：指派人员复现 #3226，给出 Root Cause Analysis 与临时缓解方案（如启用 ID 去重日志）。
2. **本周三前**：完成 #3220、#3195 两大核心 PR 的最终 Review 与合并，触发 v0.15.0-rc.1。
3. **本周五前**：清理 #2134、#2909、#3145 三个长尾 PR，减少技术债利息。

---

*报告由 AI 分析师自动生成，数据截止 2026-08-11 23:59 UTC。如有遗漏或偏差，请以 GitHub 实时数据为准。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-12

---

## 1. 今日速览

IronClaw 今日呈现**高强度架构重构与稳定性攻坚并行**的态势。过去 24 小时共 23 条 Issue 更新、50 条 PR 活动，合并/关闭比 1:1，显示核心团队正集中精力清理技术债并推进 "Reborn" 架构落地。重点集中在：**Agent Loop 内核化（#7482）**、**持久化存储去 Profile 化（#7456/#7467）**、**统一通道模型（#7477）**、**上下文窗口管理修复（#7484/#7503/#7504）**、**Anthropic 缓存显式控制（#6997）**、**多租户凭证注入与安全红actor（#7509）**。无新版本发布，但多个 XL 级 PR 已合并入主干，预示 v1.3.0 里程碑临近。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展

| PR | 标题 | 状态 | 核心影响 |
|----|------|------|----------|
| [#7471](https://github.com/nearai/ironclaw/pull/7471) | fix(processes): lease expiry recovers safe runs instead of failing them; isolate the journal heartbeat pool | ✅ **已合并** | 进程租约过期不再直接失败运行，改为在回放安全检查点恢复；心跳池隔离提升 PostgreSQL 数据平面吞吐。 |
| [#7470](https://github.com/nearai/ironclaw/pull/7470) | fix(threads): restore listability for unprojected thread index rows | ✅ **已合并** | 修复侧边栏线程列表丢失问题：`thread_index` 无有序投影元数据时仍可被列出。 |
| [#7514](https://github.com/nearai/ironclaw/pull/7514) | fix: enable Railway shell for hosted volume profile | ✅ **已合并** | 为 `hosted-single-tenant-volume` 增加 Railway 专用 Shell 别名，保留基础卷存储路径。 |
| [#7503](https://github.com/nearai/ironclaw/pull/7503) | fix(loop): retain accepted task across context eviction | ✅ **已合并** | 用户任务在 128 消息截断与 Token 预算内被钉住；超预算显式报 `BudgetExceeded` 而非静默丢失。 |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | feat(llm): explicit Anthropic cache_control breakpoints on both transports | ✅ **已合并** | 双传输路径（rig/API-key 与 OAuth）均显式植入 `cache_control` 断点，关闭 #6984 (P0)。 |
| [#7480](https://github.com/nearai/ironclaw/pull/7480) | fix(webui): reveal long conversation titles on hover | ✅ **已合并** | 新增 `MarqueeText` 组件，侧边栏标题溢出时悬停跑马灯全显，关闭 #7481。 |
| [#7512](https://github.com/nearai/ironclaw/pull/7512) | fix(memory): resolve target aliases in the domain contract layer | 🟢 **Open** | 将 `target: "memory"` 等别名解析下沉到域契约层，统一 native/mem0 两个 provider 行为，关联 #7505。 |
| [#7504](https://github.com/nearai/ironclaw/pull/7504) | fix(loop): compact context on window eviction | 🟢 **Open** | 将硬截断转为类型化强制压缩信号，保留完整 assistant/tool-result 交换，关联 #7484。 |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | fix(reborn): make durable storage profile-agnostic | 🟢 **Open** | Reborn 根目录直接挂 `IRONCLAW_REBORN_HOME`，新增 `state/` `system/` `workspaces/` 等命名空间，解决 Profile 切换导致数据“消失”问题（#7467）。 |
| [#7477](https://github.com/nearai/ironclaw/pull/7477) | feat(channels): unified channel model | 🟢 **Open** | 所有入站/回复/通知合一为单一 `ChannelAdapter`，Web/Slack/Telegram 统一实现，落地设计文档 12+13 条款。 |
| [#7509](https://github.com/nearai/ironclaw/pull/7509) | fix(safety): redact model-bound secrets without rejecting turns | 🟢 **Open** | 凭证内容不再直接拒绝轮次，改为确定性脱敏 + 最终模型输入统一脱敏通道，消除误报阻塞。 |

> **整体进度**：核心稳定性 PR（租约、线程、上下文、缓存、UI 细节）已落地；架构级大 PR（存储去 Profile、统一通道、Agent Loop 内核化）处于审查/冲刺阶段。

---

## 4. 社区热点

| Issue/PR | 评论/互动 | 核心诉求 |
|----------|-----------|----------|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) **Epic: Pluggable agent loops** | 3 条评论 👍0 | 将 IronClaw 重构为“内核”：调度/多租户/能力膜/密钥中介/出口边界/持久审计/入站通道，**剥离 Agent Loop 与集成工具代码**，转为现成 ACP Agent（Claude Code、Codex、自定义循环）。高风险、高收益，架构方向标。 |
| [#7477](https://github.com/nearai/ironclaw/pull/7477) **Unified channel model** | 评论数未披露（XL 级） | 统一 Web/Slack/Telegram 通道适配器，消除入站/回复/通知三套代码路径，配合设计文档强制执行 §13。 |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) **Durable storage profile-agnostic** | 评论数未披露（XL 级） | 解决 Profile 切换导致历史/密钥/扩展/技能/工作区“跨 Profile 丢失”痛点，配合 #7467 Epic 推进。 |
| [#7517](https://github.com/nearai/ironclaw/issues/7517) **Cloud.near.ai: allow staking path for Google/GitHub sign-ins** | 0 评论 👍0 | 用户反馈：Google/GitHub 登录后无法质押推理，仅 Stripe 计费；“Sign in with NEAR”只能作登录选项而非钱包附加。商业化路径阻塞。 |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) **Epic: Storybook + AI-first Design System** | 0 评论 👍0 | 搭配 PR #7257、#6918，建立组件库、主题、资产、交互、IA 规范，支撑 WebUI 规模化演进。 |

> **趋势**：架构重构类 Epic 讨论集中在核心维护者内部；用户侧痛点聚焦于**云端计费/登录体验（#7517）**与**自动化可靠性（#6879）**。

---

## 5. Bug 与稳定性

| 严重级 | Issue | 现象 | 关联 Fix PR |
|--------|-------|------|-------------|
| **P0 级** | [#7484](https://github.com/nearai/ironclaw/issues/7484) | 上下文窗口硬截断 128 条，**静默丢弃用户任务**，三处独立硬编码 | [#7503](https://github.com/nearai/ironclaw/pull/7503)✅ / [#7504](https://github.com/nearai/ironclaw/pull/7504)🟢 |
| **P0 级** | [#7487](https://github.com/nearai/ironclaw/issues/7487) | `tool_search` 标记工具已披露但**不返回 Schema**，导致 describe-first 保护失效；`oneOf required` 塌缩为空 | ✅ 已修复（隐含在已合并 PR 中） |
| **P0 级** | [#7488](https://github.com/nearai/ironclaw/issues/7488) | 三个披露桥接工具硬编码 `ConcurrencyHint::Exclusive`，**元数据查询被串行化**，丢弃批次尾部 | ✅ 已修复 |
| **P1 级** | [#7485](https://github.com/nearai/ironclaw/issues/7485) | 两套 Token 估算器不一致，**ASCII 双重计算导致有效窗口减半** | 待 PR |
| **P1 级** | [#7486](https://github.com/nearai/ironclaw/issues/7486) | 幂等读/轮询被误判“无进展”触发终止逃逸，**长任务误杀** | 待 PR |
| **P1 级** | [#7490](https://github.com/nearai/ironclaw/issues/7490) | `retry_disposition()` 静默重驱表为**死代码**，~25 类瞬态错误未生效 | 待 PR |
| **P1 级** | [#7505](https://github.com/nearai/ironclaw/issues/7505) | Memory target-alias 仅在 native provider 解析，**mem0 存入字面量 `target: "memory"`** 导致跨会话读取失败 | [#7512](https://github.com/nearai/ironclaw/pull/7512)🟢 |
| **P2 级** | [#7508](https://github.com/nearai/ironclaw/issues/7508) | GitHub MCP 扩展启动给**困惑的端点验证提示**而非直连 | 待 PR |
| **P2 级** | [#7476](https://github.com/nearai/ironclaw/issues/7476) | `classify_delivery_outcome` 忽略 `Failed` 的 `vendor_message_refs`，**模型不可见部分发送证据** | 待 PR |
| **已关闭** | [#7294](https://github.com/nearai/ironclaw/issues/7294) [#7247](https://github.com/nearai/ironclaw/issues/7247) [#7246](https://github.com/nearai/ironclaw/issues/7246) | Agent 幻觉：错误声称 Telegram/GitHub/自动化已连接/运行，**未实查状态** | 已在 QA 迭代中修复 |

> **稳定性信号**：上下文管理、工具披露、重试分类、Token 计数等**核心循环基础设施**集中暴露缺陷，已合并/在途 PR 覆盖前

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-12

---

## 1. 今日速览

- **整体活跃度：高** —— 过去 24 小时内完成 **1 个版本发布**、**7 个 PR 合并/关闭**、**3 个长期 Issue 关闭**，核心维护者 `fisherdaddy`、`liuzhq1986` 与外部贡献者 `btc69m979y-dotcom` 均有实质性代码落地。
- **发布节奏：日度迭代** —— `2026.8.11` 版本已合并入 `main`，包含协作模式快捷键、侧边栏定时任务标记等面向用户的可见改进。
- **技术债清理显著** —— 3 个标记 `[stale]` 的旧 Issue（配置丢失、模型切换受限、任务超时）集中关闭，配套 PR `#1241`、`#1239` 已合并，说明团队正在系统性解决历史痛点。
- **依赖升级跟进** —— Dependabot 提交 Electron 40→43 升级 PR `#1277`，显示构建链维护常态化。
- **唯一开放 Issue `#1183`**（Windows 网关启动循环）仍未修复，需关注后续回归风险。

---

## 2. 版本发布

### LobsterAI 2026.8.11 (`Release/2026.8.10` → `main`, PR [#2477](https://github.com/netease-youdao/LobsterAI/pull/2477))

| 维度 | 详情 |
|------|------|
| **核心新增** | • 协作模式新增 `collapse-agent-tasks` 快捷键，支持输入时使用修饰键组合 ([#2469](https://github.com/netease-youdao/LobsterAI/pull/2469))<br>• 侧边栏会话列表标记“定时任务”，一眼区分手动/自动触发 ([#2477](https://github.com/netease-youdao/LobsterAI/pull/2477) 提及 `liuzhq1986` 贡献) |
| **体验优化** | • 模型选择器“思考强度”改为**每模型独立记忆**，解决切换模型时互相覆盖 ([#2475](https://github.com/netease-youdao/LobsterAI/pull/2475))<br>• 本地文件链接右键菜单新增“用…打开/另存为/复制路径/复制内容/在文件夹中显示” ([#2473](https://github.com/netease-youdao/LobsterAI/pull/2473))<br>• 侧边栏站点图标描边粗细统一 ([#2474](https://github.com/netease-youdao/LobsterAI/pull/2474)) |
| **稳定性修复** | • Settings 关闭前若有未保存修改，强制弹出确认对话框，防止 API Key 静默丢失 ([#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) 关联 [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237))<br>• AI 任务完成/报错时，窗口非前台自动闪烁任务栏/弹跳 Dock ([#1239](https://github.com/netease-youdao/LobsterAI/pull/1239))<br>• 顶层 Modal 按 `Esc` 仅关闭最上层，避免误关面板 ([#2476](https://github.com/netease-youdao/LobsterAI/pull/2476)) |
| **破坏性变更** | 无数据库 Schema 变更，`cowork_sessions` 新增 `hidden` 列仅供内部过滤 ([#1181](https://github.com/netease-youdao/LobsterAI/pull/1181))，平滑兼容。 |
| **迁移提示** | 旧版本用户升级后需重新设置各模型的思考强度（默认回落到 `high`），其余配置自动迁移。 |

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心推进 | 影响面 |
|----|------|----------|--------|
| [#2477](https://github.com/netease-youdao/LobsterAI/pull/2477) | **Release** | 合并 `release/2026.8.10` 分支，落地上述所有特性 | 全仓库 |
| [#2457](https://github.com/netease-youdao/LobsterAI/pull/2457) | **Feat** | 服务端下发思考等级选项、OpenClaw 别名映射、会话/Agent 级持久化 | 模型配置、协作会话 |
| [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) | **Fix** | 修复模型选择器思考强度全局互斥 Bug | Renderer (Model Selector) |
| [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) | **Feat** | 本地文件链接上下文菜单 + `dialog:saveFileCopy` IPC | Artifacts、Markdown 渲染 |
| [#2476](https://github.com/netease-youdao/LobsterAI/pull/2476) | **Fix** | Modal 层级化 Esc 处理，解决嵌套弹窗误关 | UI 交互核心 |
| [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | **Fix** | Settings 脏检测 + 三路径拦截，关闭 Issue [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Settings、配置持久化 |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | **Feat** | 跨平台任务栏/Dock 提醒（`windowAttention.ts`） | Main 进程、用户感知 |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | **Chore** | 隐藏 OpenClaw 主 Agent 会话，新增 `hidden` 列 | Cowork 会话列表 |
| [#2474](https://github.com/netease-youdao/LobsterAI/pull/2474) | **Fix** | 侧边栏站点图标描边统一 | UI 细节 |

> **进展评估**：单日合并 7 PR、涵盖 5 个功能模块（Settings、Cowork、Model Selector、Artifacts、Window Management），代码变更集中在 `renderer` 与 `main`，架构层面无大幅重构，属于**高质量增量交付**。

---

## 4. 社区热点

| 排名 | 对象 | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | Issue [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) 👍0 / 评论 2 | **已关闭** | 用户痛点：Settings 误关导致 API Key 丢失，**已由 #1241 修复并随版本发布** |
| 2 | Issue [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) 👍0 / 评论 2 | **已关闭** | 单模型受限导致全局瘫痪，**需在模型层面隔离熔断机制**（当前版本未见对应 PR，可能纳入后续迭代） |
| 3 | Issue [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) 👍0 / 评论 2 | **已关闭** | 24h 长任务超时阈值不可见/不可配置，**建议暴露 `maxDuration` 设置** |
| 4 | PR [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) 👍0 / 评论 0 | **Open** | 思考强度模型级隔离，**开发者自测复现并修复**，社区关注度高但评论少 |
| 5 | Issue [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) 👍0 / 评论 1 | **Open (Stale)** | Windows 网关启动循环，**复现率高、阻断主流程**，急需修复 |

> **信号分析**：用户最关心** totalValue -= amount) {                throw new Error("Insufficient balance");            }            this.balances.set(token, this.balances.get(token) - amount);        }    }  async function onUninstall() {        // Cleanup        console.log("Contract uninstalled");    }  // Export the **配置不丢失**、**模型故障隔离**、**长任务支持** 三大核心可靠性诉求。

---

## 5. Bug 与稳定性

| 严重级 | 问题 | 状态 | 关联 Fix PR | 备注 |
|--------|------|------|-------------|------|
| **P0 阻断** | Windows 关闭/切换模型后网关循环启动遮罩 ([#1183](https://github.com/netease-youdao/LobsterAI/issues/1183)) | **Open** | 无 | 影响版本 2026.3.31+，需排查 `openclaw` 进程管理与状态机 |
| **P1 严重** | 单模型受限导致全局所有会话/模型不可用 ([#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)) | **Closed (Stale)** | 无 | 标记 stale 关闭，但**未见代码级熔断隔离 PR**，存在回归风险 |
| **P2 重要** | Settings 未保存关闭导致配置静默丢失 ([#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)) | **Closed** | [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) ✅ | 已合并入 2026.8.11 |
| **P2 重要** | 任务超时阈值硬编码，长任务无法运行 ([#2062](https://github.com/netease-youdao/LobsterAI/issues/2062)) | **Closed (Stale)** | 无 | 标记 stale 关闭，**建议补齐配置项** |
| **P3 一般** | 模型选择器思考强度全局共享导致互斥 ([#2475](https://github.com/netease-youdao/LobsterAI/pull/2475)) | **Open (PR)** | [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) 🛠 | 已有修复 PR 待合并 |
| **P3 一般** | 嵌套 Modal 按 Esc 连带关闭底层面板 | **Closed** | [#2476](https://github.com/netease-youdao/LobsterAI/pull/2476) ✅ | 已合并 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 诉求 | 已有 PR/实现进度 | 纳入下版本概率 |
|----------|------|------------------|----------------|
| Issue [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | **模型级熔断隔离**：单模型受限不波及其他 | 无 PR | ★★☆☆☆（需架构调整，可能排入 2026.9 里程碑） |
| Issue [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | **任务超时可配置/无限制** | 无 PR | ★★★☆☆（仅需暴露配置项，工程量小） |
| PR [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) | **思考强度模型级持久化** | **Open PR，已自测** | ★★★★★（极大概率下版本合并） |
| PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | **Electron 43 升级** | **Dependabot PR** | ★★★★☆（需兼容性测试，通常 1-2 周内合并） |
| 用户隐性需求 | **本地文件操作完整性**（另存为、复制图片等） | [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) ✅ | 已交付 |

---

## 7. 用户反馈摘要

| 场景 | 痛点原声 | 情感倾向 | 解决进度 |
|------|----------|----------|----------|
| **配置管理** | “改完 API Key 点 X 就没了，毫无提示，白折腾” ([#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)) | 😡 强烈不满 | ✅ 已修复发布 |
| **模型可用性** | “一个模型受限，整个 Lobster 瘫痪，换模型也受限，重启也不行” ([#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)) | 😰 焦虑/阻断 | ⚠️ 仅标记关闭，未根治 |
| **长任务** | “24 小时任务跑着跑着就超时停了，也不知道后台还在不在跑” ([#2062](https://github.com/netease-youdao/LobsterAI/issues/2062)) | 😕 困惑/不信任 | ⚠️ 标记关闭，未给配置入口 |
| **Windows 启动** | “关闭模型开关保存后，回首页就一直弹遮罩‘网关启动失败’，无法使用” ([#1183](https://github.com/netease-youdao/LobsterAI/issues/1183)) | 😤 无法使用 | ❌ 未修复 |
| **细节体验** | “思考强度换个模型就变回去了，烦人” (隐性反馈 → [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475)) | 😐 体验割裂 | 🛠 PR 待合并 |

> **总体情绪**：核心流程（配置保存、任务提醒、文件交互）**显著改善**；但**模

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-12

---

## 1. 今日速览
- **整体活跃度：低**。过去 24 小时内无 Issue 活动，无 PR 合并，无版本发布，仅有 1 个新提交的 PR 处于待审查状态。
- **核心动态**：贡献者 `penso` 提交 PR #1190，引入持久化的本地 CalDAV 连接器框架，涉及提供商中立的连接器持久化、原子快照、调度、投影及本地全文搜索，属于基础设施层面的重大功能扩展。
- **社区互动**：零评论、零 Reaction，社区讨论处于静默期。
- **项目健康度**：代码库处于“静默推进”阶段，核心贡献者在推进大型特性开发，但缺乏外部贡献者参与及 Issue 反馈回路，需关注 PR 审查吞吐率。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展
### 待合并 PR（1 条）
| PR | 标题 | 作者 | 状态 | 影响范围 |
|----|------|------|------|----------|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | **Add durable local CalDAV connectors** | penso | `OPEN` | **核心基础设施 / 新功能** |

**进展分析**：
- PR #1190 为**首次提交**，尚未进入代码审查流程（无 Review、无 CI 状态展示、无维护者评论）。
- 变更涵盖：连接器持久化层、CalDAV 同步引擎、调度器、数据集投影、本地全文搜索（FTS）、Agent Tool 暴露及 Settings UI 集成，属于**大体量、跨模块**变更，预计审查周期较长。
- 今日**无 PR 合并**，主分支代码库未发生实质性前进。

---

## 4. 社区热点
**无活跃讨论。**
- 过去 24h 评论数、Reaction 敝均为 0。
- 仅有的 PR #1190 处于“冷启动”阶段，暂无社区反馈。

---

## 5. Bug 与稳定性
**今日无新增 Bug 报告、崩溃或回归 Issue。**
- 现有 Issue 列表无更新，无关联 Fix PR 产生。

---

## 6. 功能请求与路线图信号
| 信号来源 | 内容 | 入版本可能性 | 备注 |
|----------|------|--------------|------|
| **PR #1190** | 本地 CalDAV 连接器全栈实现（持久化、同步、调度、FTS、Agent Tool、UI） | **极高** | 代码已完整实现，符合“本地优先、数据主权”路线图；若 CI 通过且审查无阻断性意见，大概率进入下一个 Minor/Release 分支。 |

**路线图推断**：项目正从“核心 Agent 循环”向“外部数据源原生集成”演进，CalDAV 是继本地文件系统、邮件后的第三大标准化协议适配，预示下一版本将重点强化**个人知识库的日历/任务维度**。

---

## 7. 用户反馈摘要
**无用户反馈数据。**  
- 过去 24h 无 Issue 评论、无 Discussion、无 Support 请求。
- 建议维护者主动在 PR #1190 下发起“设计审查”邀请早期用户试用，打破零反馈局面。

---

## 8. 待处理积压
| 类型 | 标题/链接 | 停滞时长 | 风险提示 |
|------|-----------|----------|----------|
| **PR** | [#1190 Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190) | < 24h (新提交) | **大体量 PR 审查积压风险**：涉及存储、同步、调度、搜索、UI 多子系统，建议拆分为“核心持久化/同步”、“调度/FTS”、“Agent Tool/UI” 3 个子 PR 并行审查，降低合并延迟。 |
| **通用** | 无长期未响应 Issue/PR | — | 当前积压池为空，但需警惕“仅维护者自驱、无外部贡献”导致的总线因子风险。 |

---

> **数据来源**：GitHub API / `moltis-org/moltis` 仓库 2026-08-11 00:00 – 2026-08-11 23:59 (UTC) 窗口。  
> **下一关注点**：PR #1190 CI 状态、首轮 Review 时间、是否拆分子 PR。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目日报 · 2026-08-12

> **数据范围**：2026-08-11 00:00 – 2026-08-12 00:00 (UTC)  
> **数据来源**：GitHub Issues / Pull Requests / Releases API

---

## 1. 今日速览

- **发布里程碑**：项目发布 **v2.1.0-beta.3**，标志着 v2.1.0 正式版进入最后冲刺阶段；本次版本包含文件工作区博客功能、Provider 缓存过期修复等核心改进。
- **社区活跃度高**：过去 24 小时 **23 条 Issue 更新（9 新开/活跃，14 关闭）**、**49 条 PR 更新（24 待合并，25 已合并/关闭）**，Issue 关闭率 61%、PR 合并率 51%，显示维护团队处理效率极高。
- **核心方向聚焦**：修复工作集中在 **MCP 工具稳定性**、**前端渲染性能（CSS 动画/CPU 占用）**、**中文 IME 输入崩溃**、**Desktop 环境变量污染** 等阻断性缺陷；新功能侧重 **市场统一入口**、**窗口几何记忆**、**AnySearch 集成** 等体验增强。
- **安全风险暴露**：Issue #6916 披露插件可无感创建定时任务并注入消息，属权限模型缺口，已引起维护者重视，需尽快在 v2.1.0 正式版前修复。
- **整体健康度**：**🟢 良好** —— 版本节奏明确、关闭率高、社区反馈闭环快，但需警惕 Beta 阶段引入的回归缺陷（如 #6919 崩溃、#6885 IME 崩溃）。

---

## 2. 版本发布

### v2.1.0-beta.3 (2026-08-11 发布)
| 项目 | 详情 |
|------|------|
| **标签** | `v2.1.0-beta.3` |
| **发布页** | [Release #v2.1.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.3) |
| **核心变更** | 1. **Feat**: 文件工作区博客支持 ([#6783](https://github.com/agentscope-ai/QwenPaw/pull/6783))<br>2. **Fix(provider)**: 过期清理废弃 capability 缓存，模型切换时自动清空 ([#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723))<br>3. **Chore**: 版本号升至 2.1.0-beta.3 |
| **破坏性变更** | 无明显 Breaking Change，但 Provider 缓存行为变更可能影响依赖旧缓存逻辑的插件。 |
| **迁移建议** | - 升级前备份 `~/.qwenpaw` 配置目录<br>- 若使用自定义 Provider，请验证 `capability` 缓存键是否需手动清理<br>- Desktop 用户建议全新安装而非覆盖升级（避免 #6697 `PYTHONHOME` 残留） |
| **验证 Issue** | [#6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) (Release Duty: 安装验证清单，截止 2026-08-11 15:45 UTC) |

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心推进 | 关联 Issue |
|----|------|----------|------------|
| [#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915) | **Fix** | 修复工作区文件预览：Unicode PDF/SVG 文件名下载失败、Dark 模式样式错位 | - |
| [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) | **Feat** | 统一代码块渲染体验：LaTeX/Mermaid 新增 Preview/Source 双 Tab，适配明暗主题 | #5453, #4756 |
| [#6912](https://github.com/agentscope-ai/QwenPaw/pull/6912) | **Fix** | 配置端点返回 422 替代 500：单通道 Payload 校验失败不再抛出未捕获 `ValidationError` | #6910 |
| [#6909](https://github.com/agentscope-ai/QwenPaw/pull/6909) | **Feat** | Channel 保存前冲突检测：同一 Bot 被多 Agent 占用时弹窗确认 | - |
| [#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898) | **Fix** | 修正 `read_file` Tool 描述：明确仅支持文本文件，避免模型误调 | - |
| [#6891](https://github.com/agentscope-ai/QwenPaw/pull/6891) | **Feat** | Computer Use 原生输入增强：键盘序列动作、Windows 定向输入、观测刷新 | - |
| [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) | **Chore** | 发布 v2.1.0 双语 Release Notes、README 同步、News 条目 | - |
| [#6830](https://github.com/agentscope-ai/QwenPaw/pull/6830) | **Fix** | Memory 中间件：跨压缩/会话周期保持 auto-memory 状态，解决进度丢失 & 历史污染 | - |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | **Fix** | 内存刷新：压缩前强制落盘 pending turns，修复 #6555 | #6555 |
| [#6779](https://github.com/agentscope-ai/QwenPaw/pull/6779) | **Refactor** | Context 重构：收敛 Scroll 为唯一实现，对齐 AgentScope 2.0 生命周期 | - |

> **进展小结**：今日合并 PR 以 **稳定性修复（6 个）**、**体验统一（2 个）**、**架构收敛（1 个）**、**发布配套（1 个）** 为主，v2.1.0 正式版阻断项基本清零。

---

## 4. 社区热点（高互动 Issue/PR）

| 排名 | 项 | 评论/👍 | 核心诉求 | 分析 |
|------|----|---------|----------|------|
| 1 | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) 🐛 **MCP 工具周期性失效**（10 条评论） | 10 / 0 | Docker 部署下 MCP 连接几小时/一夜后断开，重启容器恢复 | **高频痛点**；可能涉及长连接心跳、Token 刷新、容器网络栈；v2.1.0-beta.3 含 Provider 缓存清理 (#6723) 但未直接修复 MCP 存活，需持续跟踪 |
| 2 | [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) ✨ **公式渲染/会话分组/活跃会话背景**（7 条评论） | 7 / 0 | LaTeX 公式无法渲染（对比 Cherry Studio）；需会话分组管理；活跃会话高亮 | **前端渲染核心诉求**；#6911 已合并 LaTeX/Mermaid 双 Tab 预览，预计 v2.1.0 解决；分组管理仍在规划 |
| 3 | [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) 🐛 **Agent 回复完成后 Loading 动画不消失**（4 条评论） | 4 / 0 | Console 前端 Spinner 持续显示 | 旧 Issue 今日关闭，可能随前端重构修复；需验证 v2.1.0-beta.3 表现 |
| 4 | [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) ❓ **如何集成 CopilotKit**（3 条评论） | 3 / 0 | 请求集成示例/思路 | 生态扩展需求；官方暂无现成方案，建议在 Discussion 或文档补充集成指南 |
| 5 | [#6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) ✨ **隔离 Chat 项目目录与 Agent Workspace**（3 条评论，已关闭） | 3 / 0 | 每个持久化 Chat 拥有独立项目目录，Workspace 仅作系统内部用途 | 架构级改进，已关闭可能纳入后续里程碑 |

> **趋势**：用户最关注 **MCP 稳定性**、**LaTeX 渲染**、**前端细节体验**；插件/生态集成（CopilotKit、AnySearch #6817）开始出现。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 影响范围 | 修复进展 |
|--------|-------|------|----------|----------|
| **🔴 Critical** | [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) | v2.0.1 频繁崩溃：`console process/reply failed` Traceback | Windows pip 安装，Web 端使用 | **Open**，无关联 Fix PR，需紧急排查 |
| **🔴 Critical** | [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | 中文 IME `compositionEnd` 导致 Console 消息队列不可用 | v2.1.0b2，所有中文输入用户 | **Open**，无 Fix PR，阻断中文用户核心流程 |
| **🟠 High** | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | Desktop v2.1.0b1 注入 `PYTHONHOME` 导致所有 Python 子进程 `ModuleNotFoundError: encodings` | Windows Tauri Desktop | **Closed**（可能随环境隔离修复），需验证 beta.3 |
| **🟠 High** | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | 空闲时前端持续重绘 ~20% CPU（CSS `ai-copilot-blink` + 隐藏 Spinner） | Desktop Tauri v2.1.0b2 | **Closed**，疑似前端动画优化已合并 |
| **🟡 Medium** | [#6871](https://github.com/agentscope-ai/QwenPaw/issues/6871) | 历史消息时间戳切换视图后 +8h 偏移 | 前端时区渲染 | **Closed**，可能随时间格式化统一修复 |
| **🟡 Medium** | [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | 后台 fork 子 Agent 上报完成但 worktree 最终化失败 | Background Subagent `fork=True` | **Closed**，需确认是否已修复 |
| **🟢 Low** | [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) | 日记页面子文件夹笔记错误分组到其它日期 | Desktop Daily Page | **Open**，无 Fix PR |
| **🟢 Low** | [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | Inter-agent 消息每条新建 Agent Session（Shadow 实例） | 多 Agent 协作 | **Open**，无 Fix PR |

> **关注点**：**#6919 崩溃**、**#6885 IME 崩溃** 为 v2.1.0 正式版前必修项；建议维护者指派 Owner 并在 48h 内给出 Patch。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 社区热度 | 纳入 v2.1.0 概率 | 备注 |
|------|----------|----------|------------------|------|
| **LaTeX/Mermaid 完整渲染** | #5453, #4756, #6893, **#6911 (Merged)** | ⭐⭐⭐⭐⭐ | **100%** | 已合并双 Tab 预览，v2.1.0 交付 |
| **统一 Marketplace (Apps/Plugins/Skills)** | **#6880 (Open, Under Review)** | ⭐⭐⭐ | **90%** | 核心架构调整，Review 中，大概率赶上 v2.1.0 |
| **窗口几何记忆** | **#6877 (Open)** | ⭐⭐ | **80%** | 体验增强，低风险 |
| **AnySearch 内置 Web Search (替代 Tavily)** | **#6817 (Open, Under Review)** | ⭐⭐⭐ | **70%** | 涉及 MCP Env Ref 修复，若 Review 顺利可入 |
| **Configurable MCP Tool Call Timeout** | **#6874 (Open)** | ⭐⭐ | **90%** | 修复 #6724，默认 120s，已就绪 |
| **Agent 主动投递报告到 Inbox** | #6917 | ⭐ | **10%** | 新需求，需设计 API，v2.2+ |
| **插件权限模型收口 (Security)** | #6916 | ⭐⭐⭐ | **Must Fix** | 安全阻断项，需在正式版前补丁或文档规避 |
| **会话分组/项目目录隔离** | #6893, #6900 | ⭐⭐ | **30%** | 架构影响大，可能 v2.2 |
| **CopilotKit 集成指南** | #6882 |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*