# OpenClaw 生态日报 2026-07-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-14 08:37 UTC

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

# OpenClaw 项目日报 | 2026-07-14

---

## 1. 今日速览
- **发布里程碑**：v2026.7.1 正式发布，聚焦 Control UI/Onboarding 重构、三端官方 App 大版本更新、新增 GPT-5.6 / Tencent Hy3 / Meta Muse Spark 1.1 兼容，以及 Codex 与连接式编码代理工作流增强。
- **活跃度极高**：过去 24 h 内 **Issues 500 条更新（新开/活跃 283，关闭 217）**、**PR 500 条更新（待合并 330，已合并/关闭 170）**，日均处理量达百单位，社区与维护团队并行吞吐处于高位。
- **稳定性压力显性化**：Top 50 Issues 中 **P0/P1 占比超 40%**，集中在会话状态损坏、SQLite 并发写入冲突、Telegram/Matrix/Feishu 等渠道消息丢失、CLI 挂起、模型提供商认证回归等核心路径。
- **技术债偿还进行中**：大量 PR 针对“规范化媒体原语”、“会话恢复修复”、“SecretRef 解析”、“配置迁移原子性”、“医生命令兜底”等长期痛点提交修复，显示维护者正系统性清理 v2026.6.x 遗留回归。
- **生态扩展信号明确**：新增 Linux/Windows 原生 App 需求（#75，81 👍）、记忆信任标签（#7707）、Masked Secrets（#10659）、自托管 STT/TTS（#45508）、生产就绪标签（#73537）等增强需求高票未决，指向下一阶段路线图。

---

## 2. 版本发布
### v2026.7.1 `openclaw 2026.7.1` 
**发布时间**：2026-07-14  
**核心变更**：
| 维度 | 关键点 |
|------|--------|
| **Control UI / Onboarding** | 全流程重写，新增引导向导、运行中任务悬浮预览、会话展示元数据标准化（PR #106832、#107297、#107302） |
| **官方 App** | iOS / Android / macOS 同步大版本：原生媒体管线、文件传输插件、Claude CLI `entrypoint: "cli"` 识别修复（PR #105162） |
| **模型 / 提供商** | 新增 **GPT-5.6**、**Tencent Hy3**、**Meta Muse Spark 1.1**；DeepSeek 缓存命中率回归修复进行中（#94518） |
| **Codex / 编码代理** | 连接式工作流增强：允许自定义 app-server provider ID（PR #101587）、修复子会话创建时错误回收父 Codex 绑定（PR #106932） |
| **安全 / 观测** | 新增 AI 安全/质量可观测事件框架（#82548）、Masked Secrets 设计评审中（#10659） |
| **破坏性变更** | `models list` 因 `applyAnthropicSonnet5Cost` 回归崩溃（Issue #106914，已有修复 PR）；`openai-responses` transport 发送 `null content` 导致严格提供商 400（Issue #90094） |
| **迁移注意** | 遗留状态迁移仍阻塞网关启动（#103076）、`doctor --fix` 原子性失效（#77802）、SQLite 并发损坏风险（#101290）需人工干预或等待后续补丁 |

> 🔗 [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1)

---

## 3. 项目进展（今日合并/关闭的关键 PR）
| PR | 类型 | 影响范围 | 状态 | 说明 |
|----|------|----------|------|------|
| #107298 | 重构 | JSON5 兜底解析统一 | ✅ Merged | 消除三处重复逻辑，降低配置/迁移/插件激活路径解析差异风险 |
| #107296 | 重构 | Ollama 内部导出裁剪 | ✅ Merged | Knip 检测通过，减少 8 个无用公共符号，提升构建确定性 |
| #106789 | 文档/自动化 | Crabbox provider 尊重配置 | ✅ Merged (automerge) | 修复测试环境 provider 路由误判，CI 绿标恢复 |
| #106914 | 修复 | `models list` 崩溃回归 | 🔴 Open | **P0 阻塞**：Sonnet-5 成本计算未处理 undefined，已有修复待审 |
| #106932 | 修复 | Codex 父绑定错误回收 | 🟡 Review | 解决 Control UI 新建仪表盘子会话导致父会话失效 |
| #106599 | 修复 | Discord 线程绑定扫描重叠 | 🟡 Review | 修复并发扫描导致的绑定状态竞态 |
| #106832 | 功能 | 会话展示元数据标准化 | 🟡 Review | 为 Web/移动端提供不透明 routing key 的友好替代 |
| #107285 | 修复 | `doctor --fix` 允许列误删 | 🟡 Review | 保护版本绑定运行时插件（如 `@openclaw/codex`）不被误剔除 |

> **整体推进**：核心基础设施（JSON 解析、依赖更新、CI 探针、Knip 裁剪）已落地；**会话/渠道/模型三大核心路径的 P0 回归修复正在并行 Review**，预计 24-48 h 内落地形成 v2026.7.2 热修复。

---

## 4. 社区热点（高互动 Issues/PRs）
| # | 标题 | 评论 | 👍 | 标签/信号 | 核心诉求 |
|---|------|------|----|-----------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows Clawdbot Apps** | 112 | 81 | enhancement, help wanted, P2 | 缺失桌面原生 App，用户期望与 macOS/iOS/Android 达到功能对等 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **Memory Trust Tagging by Source** | 17 | 0 | enhancement, P2, security | 防止记忆投毒：按来源（用户指令/网页抓取/第三方技能）打信任标签 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | **Masked Secrets - Prevent Agent from Accessing Raw API Keys** | 14 | 4 | enhancement, P1, security | Agent 仅能“使用”密钥而不可“读取”，防御提示注入窃密 |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | **Second message fails: "reply session initialization conflicted"** | 13 | 1 | bug, P0? | 跨渠道会话第 2 轮必现冲突，阻塞多轮对话 |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | **CLI preflight corrupts live SQLite DB** | 12 | 1 | bug, regression, P0, data-loss | 健康检查并发写入导致 `database disk image is malformed`，生产环境已现 4 次损坏 |
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | **Telegram messages silently dropped** | 12 | 3 | stale, P1, message-loss | 网关处理完但无 `sendMessage` 日志，用户无感丢信 |
| [#94518](https://github.com/openclaw/openclaw/issues/94518) | **DeepSeek cache hit rate <10% after 6.x** | 7 | 10 | stale, P1, auth-provider | 边界感知缓存破坏前缀匹配，成本激增 |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | **Add production-readiness stability label to releases** | 7 | 2 | P2, crash-loop | 家庭/企业用户需明确 LTS/稳定版标识，避免追新版踩坑 |

> **趋势**：安全/信任（Memory Tagging、Masked Secrets）、跨平台原生 App、生产级稳定性标识 三大主题持续高热，且均无明确里程碑承接，**建议纳入 v2026.8 路线图规划**。

---

## 5. Bug 与稳定性（按严重度）
| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 / Data-Loss** | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI preflight 并发损坏 SQLite | ❌ 无 | 已导致生产 4 次损坏，需锁机制或延迟检查 |
| **P0 / Crash-Loop** | [#106914](https://github.com/openclaw/openclaw/issues/106914) | `models list` 启动崩溃 | ✅ #106914 (Open) | v2026.7.1 回归，阻断所有 CLI 操作 |
| **P0 / Session-State** | [#103076](https://github.com/openclaw/openclaw/issues/103076) | 遗留迁移阻塞网关启动 | ❌ 无 | #102780 后仍有 5+ 来源未修 |
| **P1 / Message-Loss** | [#80520](https://github.com/openclaw/openclaw/issues/80520) | Telegram 静默丢信 | ✅ #86012 (Open, LINE 同类) | 缺乏 push 兜底与 reply token 过期重试 |
| **P1 / Session-State** | [#102020](https://github.com/openclaw/openclaw/issues/102020) | 第 2 轮会话初始化冲突 | ❌ 无 | 跨渠道、位置相关，复现稳定 |
| **P1 / Auth-Provider** | [#95612](https://github.com/openclaw/openclaw/issues/95612) | `cli-backend` 走 Anthropic 返回 401 | ❌ 无 | Shell 直连正常，怀疑环境变量/Token 传递 |
| **P1 / Regression** | [#38327](https://github.com/openclaw/openclaw/issues/38327) | `google-vertex/gemini-3.1-pro` 抛 undefined | ❌ 无 | 2026.3.2 起持续，模型兼容性回归 |
| **P2 / Perf** | [#80607](https://github.com/openclaw/openclaw/issues/80607) | 非默认 Agent 走 `embedded_run` 延迟 10-17s | ❌ 无 | 多 Agent 场景体验劣化 |
| **P2 / Regression** | [#90213](https://github.com/openclaw/openclaw/issues/90213) | 迁移警告 `doctor --fix` 后仍残留 | ❌ 无 | 共享 SQLite 状态冲突导致索引残留 |
| **P2 / Crash** | [#77443](https://github.com/openclaw/openclaw/issues/77443) | WhatsApp 首条消息阻塞事件循环 12s | ❌ 无 | Windows 2026.5.3-1 回归 |

> **修复覆盖率**：Top 10 严重 Bug 中 **仅 2 个有活跃 PR**，其余处于“需复现/需维护者决策/需安全审查”流转态，**建议本周安排 Bug Bash 专项推进**。

---

## 6. 功能请求与路线图信号
| 需求 | Issue | 社区热度 | 相关 PR / 实现就绪度 | 纳入下版本可能性 |
|------|-------|----------|----------------------|------------------|
| **Linux/Windows 原生 App** | [#75](https://github.com/openclaw/openclaw/issues/75) | 112 评论 / 81 👍 | 无 | ⭐⭐⭐⭐⭐（官方三端已有，补齐桌面是自然下一步） |
| **Memory Trust Tagging** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 17 评论 | 无 | ⭐⭐⭐（安全审查标签已打，需设计评审） |
| **Masked Secrets** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 14 评论 / 4 👍 | 无 | ⭐⭐⭐⭐（P1 + security，符合 v2026.7.x 安全主题） |
| **自托管 STT/TTS WebChat** | [#45508](https://github.com/openclaw/openclaw/issues/45508) | 7 评论 / 2 👍 | 无 | ⭐⭐（需前端/网关协同，工程量大） |
| **生产就绪稳定性标签** | [#73537](https://github.com/openclaw/openclaw/issues/73537) | 7 评论 / 2 👍 | 无 | ⭐⭐⭐⭐（低成本、高信任价值，Release 流程易集成） |
| **会话结束 Hook** | [#10142](https://github.com/openclaw/openclaw/issues/101

---

## 横向生态对比

#个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-07-14

---

## 1. 生态全景

当前生态呈现 **"一超多强、分层演进"** 态势：OpenClaw 以日均千级 Issue/PR 吞吐量确立绝对中心地位，NanoBot、NanoClaw、IronClaw、ZeroClaw、Hermes Agent、CoPaw 形成第一梯队（日均 50+ 变更），Moltis、PicoClaw、NullClaw 处于第二梯队（专注垂直领域或架构重构）。整体从 "功能堆砌" 转向 **"生产就绪" 竞赛**：安全加固（Masked Secrets、RBAC、审批流）、可靠性工程（SQLite 并发、消息投递保证、会话恢复）、多模态/多渠道原生支持（桌面 App、Dial/SMS、Matrix/Telegram 深度适配）成为跨项目共识。版本发布节奏加快，但 **发布后回归缺陷密度普遍偏高**（OpenClaw v2026.7.1、CoPaw v2.0.0、IronClaw 即将发布的 breaking 版本均暴露 P0 级回归），反映出 CI/CD 与自动化回归测试建设滞后于功能迭代。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release (今日) | 合并率/吞吐 | 健康度评级 | 核心状态关键词 |
|------|--------------|-----------|----------------|-------------|------------|----------------|
| **OpenClaw** | 500 (283新/活跃, 217关) | 500 (330待合并, 170合/关) | **v2026.7.1** | 34% / 极高 | 🟡 **高活跃·稳定性承压** | 里程碑发布、P0/P1>40%、技术债偿还中 |
| **NanoBot** | 13 | 54 (36合/关) | v0.2.2 准备就绪 | 67% / 高 | 🟢 **高活跃·架构治理期** | Channel/Config/WebUI 三重构并行、P1清零3项 |
| **Hermes Agent** | 50 (42关, 8新/活跃) | 50 (13合/关, 37待合并) | 无 | 26% / 高 | 🟢 **高强度维护期** | Desktop/Gateway/Provider 修复主导、大型特性排队 |
| **NanoClaw** | 3关, 0新 | **26合/关** | 无 | **高** / 极高 | 🟢 **极高·质量冲刺期** | 安全基线闭环、消息可靠性重构、技能/记忆标准化 |
| **ZeroClaw** | 50 (39新/活跃, 11关) | 50 (45待合并, 5合/关) | v0.8.3 验证中 | 10% / 极高 | 🟡 **极高·发布冻结期** | 6大Tracker全关、Channel插件化/Gateway兼容落地 |
| **IronClaw** | 48 (39新/活跃, 9关) | 50 (28待合并, 22合/关) | 破坏性版本准备中 | 44% / 高 | 🟢 **高·系统性缺陷扫描** | v1退役执行、Reborn稳定化、Security.md缺失 |
| **CoPaw/QwenPaw** | 50 (21新/活跃, 29关) | 50 (16待合并, 34合/关) | **v2.0.0.post1** | 68% / 高 | 🟡 **关注期·发布后稳定化** | 回归缺陷爆发、修复吞吐极高、Sandbox重构启动 |
| **Moltis** | 2新/活跃 | 7合/关, 4待合并 | 无 | **高** / 中 | 🟢 **修复导向·高质量迭代** | 模型兼容(GPT-5.6/Gemma4)、CalDAV/MCP/OAuth修复 |
| **PicoClaw** | 5活跃(2新) | 5待合并, **0合并** | 无 | **0% / 低** | 🔴 **Review瓶颈·积压风险** | 核心修复卡队列17天、安全债(vodozemac)未决 |
| **NullClaw** | 0 | 4待合并, 0合并 | 无 | **0% / 低** | 🟠 **维护者驱动·静默期** | 4大核心PR积压25天、Android/Matrix/REPL/审批流 |
| **TinyClaw** | 0 | 0 | 无 | — | ⚪ **休眠** | 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | — | ⚪ **休眠** | 24h 无活动 |
| **LobsterAI** | 数据缺失 | 数据缺失 | 无 | — | ⚫ **数据不可得** | 摘要生成失败 |

> **合并率** = 已合并/关闭 PR ÷ 总 PR 更新数；**吞吐** = Issues+PRs 总更新量。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 第一梯队均值 (NanoBot/NanoClaw/ZeroClaw/IronClaw/Hermes/CoPaw) | 差异化结论 |
|------|----------|---------------------------------------------------------------|------------|
| **社区规模** | Issues/PRs 日均 **1000+** 量级，参与者广 | 日均 **100-200** 量级，核心团队主导 | **生态中枢**：上游模型/渠道适配首发地，下游衍生项目配置迁移参考标准 |
| **技术路线** | **全栈一体化**：Gateway + Control UI + 多端 App + 模型路由 + 编码代理 + 记忆/技能体系 | 多为 **模块化/插件化**：NanoBot(Channel/Runtime分离)、ZeroClaw(Channel插件化)、IronClaw(Reborn运行时)、Hermes(Desktop+Gateway) | **标准制定者**：`models list`、Codex连接式工作流、Session元数据标准等常成行业参考实现 |
| **发布成熟度** | 月度大版本 + 热修复，但 **P0回归率高**（v2026.7.1 即含 3 个 P0 阻塞） | 多采用 **里程碑冻结+验证**（NanoClaw/ZeroClaw/IronClaw 均在发布前集中修复） | **快速迭代代价显性**：OpenClaw 承担生态探路风险，衍生项目可“等稳定版再跟进” |
| **企业级特性** | Masked Secrets(#10659)、Memory Trust Tagging(#7707)、生产就绪标签(#73537) 高呼声未决 | NanoClaw 已落地 **MCP工具白名单/Per-sender RBAC(ZeroClaw规划中)/审批流(Hermes/NullClaw)** | **安全/合规落地略滞后**：社区呼声高但缺乏专人推进，建议设立 Security WG |
| **跨平台覆盖** | iOS/Android/macOS **三端官方 App**，Linux/Windows 桌面端 **高票缺失(#75, 81👍)** | Hermes/NanoBot/CoPaw 均有 Desktop 原生投入，NullClaw 攻坚 Android/Termux | **移动优先、桌面欠债**：补齐 Linux/Windows 原生 App 可直接解锁企业内网部署场景 |

**定位总结**：OpenClaw 是 **生态的“Linux 内核”** —— 规模最大、接口最全、变更最快、回归风险也最高。衍生项目多在其上游接口稳定后，通过**架构裁剪（去中心化/插件化）、垂直深耕（编码/运维/移动端）、强化工程质量（测试/观测/安全）** 形成差异化竞争力。

---

## 4. 共同关注的技术方向（跨项目高频涌现）

| 技术方向 | 涉及项目 & 具体诉求 | 成熟度梯队 |
|----------|---------------------|------------|
| **安全与信任边界** | **OpenClaw**: Masked Secrets(#10659 P1)、Memory Trust Tagging(#7707) <br> **NanoClaw**: `add_mcp_server` 审批走私修复(#2998)、MCP工具白名单(#3037) <br> **ZeroClaw**: Per-sender RBAC(#5982 P2)、SSRF防护、Landlock沙箱 <br> **Hermes/NullClaw/CoPaw**: 结构化审批流、工具调用确认、沙箱开关 <br> **IronClaw**: 缺失 SECURITY.md/私有漏洞上报(#6000) | **设计/实现并行**：NanoClaw/Hermes/NullClaw 已有代码落地；OpenClaw/ZeroClaw 处于高呼声设计期 |
| **消息投递可靠性与会话状态一致性** | **OpenClaw**: SQLite并发损坏(#101290)、Telegram/Matrix/Feishu静默丢信(#80520)、第2轮会话冲突(#102020) <br> **NanoClaw**: 离线适配器静默丢包修复(#2996/#2226)、重试路径+死信队列 <br> **ZeroClaw**: Docker Gateway回环绑定阻塞(#9035)、Channel Runtime本地化缺失(#6548) <br> **Hermes**: Telegram DM Topic吞唤醒事件(#63911)、Email网关轮询即标记已读(#43018) <br> **CoPaw**: 会话迁移批量写入优化(#6021)、遗留会话兼容 | **工程化落地期**：NanoClaw/ZeroClaw 引入显式重试/死信/幂等；OpenClaw 仍在修补核心路径 |
| **多模态/多渠道原生体验** | **OpenClaw**: Linux/Windows原生App(#75 81👍)、Feishu音视频原生类

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-14

> **数据基准**：GitHub 过去 24 小时快照（Issues: 13 更新 / PRs: 54 更新）  
> **统计口径**：`2026-07-13 00:00` – `2026-07-14 23:59` (UTC)

---

## 1. 今日速览

- **活跃度评级：🟢 高** — 单日 **54 条 PR 更新（36 合并/关闭）**，合并率 66%，核心模块（Agent Runtime、WebUI、Channels、Config、MCP）均有代码落地。  
- **发布节奏**：无新 Release，但 `v0.2.2` 准备工作（`#4445`）已合并，版本号与 changelog 已就绪，随时可切 Tag。  
- **架构演进**：**Channel 所有权重构**（`#4908`）、**配置持久化仓库化**（`#4918`）、**WebUI Runtime Facade 集中化**（`#4769`）三大重构并行推进，显示项目正从“功能堆砌”转向“架构治理”。  
- **稳定性回收**：修复 **Streaming LLM 无超时**（`#4902`）、**Windows PowerShell UTF-16 乱码**（`#4881`）、**MCP 关闭时 `CancelledError` 泄漏**（`#4842`）等 3 个 P1 级缺陷，显著降低长跑会话与跨平台风险。  
- **社区信号**：用户对 **Telegram 长消息分片渲染**（`#4637`）、**Session 消息无界增长**（`#4787`）、**Feishu 文件接收失败**（`#2352`）痛点持续关注，且均有维护者介入或 PR 在途。

---

## 2. 版本发布

> **无新版本发布**。  
> `chore(release): prepare v0.2.2`（`#4445`）已合并至 `main`，包含版本号升级、README 新闻栏更新、Ruff import-order 清理。维护者可随时执行 `git tag v0.2.2 && git push --tags` 触发自动发布流水线。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 关联 Issue |
|----|------|----------|--------|------------|
| [#4902](https://github.com/HKUDS/nanobot/pull/4902) | **Bug Fix (P1)** | 为 Streaming/Progress-Streaming LLM 请求引入有限 **wall-clock timeout**；保留 `NANOBOT_LLM_TIMEOUT_S=0` 关闭开关；补充 runner 测试 | Agent Runner、长跑会话资源保护 | [#4795](https://github.com/HKUDS/nanobot/issues/4795) |
| [#4842](https://github.com/HKUDS/nanobot/pull/4842) | **Bug Fix (P1)** | `close_mcp` 捕获 `asyncio.CancelledError`，防止 stdio 子进程超时未终止导致协程泄漏 | MCP 生命周期、资源回收 | — |
| [#4881](https://github.com/HKUDS/nanobot/pull/4881) | **Bug Fix (P1)** | Windows `ExecTool` 改用 `decode("utf-16le", errors="replace")` 兼容 PowerShell 默认编码 | 跨平台 Shell 执行、文件重定向 | [#4881](https://github.com/HKUDS/nanobot/issues/4881) |
| [#4769](https://github.com/HKUDS/nanobot/pull/4769) | **Refactor (P1)** | WebUI 引入 **Runtime Facade** 统一 native host 访问；重构 engine restart、diagnostics、folder picking | WebUI 架构、可测试性、扩展性 | — |
| [#4916](https://github.com/HKUDS/nanobot/pull/4916) | **Docs (P2)** | 重组 README & docs index：以 “WebUI 引导式首次成功回复” 为主线，降低新手门槛 | 文档体验、用户激活率 | — |
| [#4445](https://github.com/HKUDS/nanobot/pull/4445) | **Chore (Release)** | `v0.2.2` 版本准备：bump version、changelog、lint 清理 | 发布就绪 | — |
| [#4771](https://github.com/HKUDS/nanobot/pull/4771) | **Feature (P2)** | WebUI 支持 **文档附件** 上传（picker/paste/drop）；MIME/大小/计数策略外置至配置 | WebUI 多模态、安全策略 | — |
| [#3979](https://github.com/HKUDS/nanobot/pull/3979) | **Feature (P2)** | MCP **Preset 目录**、**连接测试**、**热重载**、**@mention 仅已安装** | MCP 易用性、开发者体验 | — |
| [#3950](https://github.com/HKUDS/nanobot/pull/3950) | **Docs** | 新增 **FAQ** 板块，覆盖高频问题 | 文档自助率 | — |
| [#3965](https://github.com/HKUDS/nanobot/pull/3965) | **Test (CI)** | CLI Apps 测试 Mock `shutil.which`/`subprocess.run`，**Windows CI 启用** | 跨平台回归防护 | — |

> **进展量化**：核心模块 **Agent/Channels/WebUI/Config/MCP** 均有代码落地；P1 缺陷清零 3 项；文档与 CI 补强 3 项。项目整体向 **“可发布、可扩展、可观测”** 迈进一大步。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）

| 对象 | 标题 | 互动 | 核心诉求 | 维护者响应 |
|------|------|------|----------|------------|
| [Issue #4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram 长消息分片渲染异常（非最后分片无法渲染） | 💬 3 | **渠道层消息分片策略缺陷**：Markdown 解析在分片边界破坏 | 已关闭，但未见修复 PR，**需跟踪** |
| [Issue #4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 陷入无限循环：gateway 将 `recap` 当裸字符串而非 JSON 解析 | 💬 3 | **Tool Gateway 参数序列化回归** | 活跃讨论中，**高优先级** |
| [Issue #1500](https://github.com/HKUDS/nanobot/issues/1500) | 信息流强制输出：LLM 无法控制输出模式（日志分级诉求） | 👍 1 / 💬 2 | **可观测性分级**：用户期望 `info/warn/error` 可配置，Cron 静默执行 | 已关闭，未见设计文档，**建议纳入路线图** |
| [Issue #4787](https://github.com/HKUDS/nanobot/issues/4787) | `Session.messages` 无界增长（仅显示截断，内存不释放） | 💬 1 | **长会话内存泄漏**：需引入 LRU/滚动窗口/持久化分层 | 维护者确认，**待设计 PR** |
| [Issue #4911](https://github.com/HKUDS/nanobot/issues/4911) | **Guarded Tool Gateway Seam**：Channel 需运行 Agent 工具（如实时语音） | 💬 0 (新建) | **架构解耦**：Channel 仅持 `(config, bus)`，无工具调用路径 | **路线图强信号**，配合 `#4908` Channel 重构 |

> **热点画像**：用户关注点从 “能不能跑通” 转向 **“长跑稳定性”、“多渠道一致性”、“可观测性分级”、“架构可扩展性”** —— 典型的 **生产化前夜** 信号。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 修复状态 | 关联 PR |
|--------|-------|------|----------|---------|
| 🔴 **Critical** | [#4795](https://github.com/HKUDS/nanobot/issues/4795) | Streaming LLM 无 wall-clock timeout，可无限挂起消耗资源 | ✅ **已修复合并** | [#4902](https://github.com/HKUDS/nanobot/pull/4902) |
| 🔴 **Critical** | [#4881](https://github.com/HKUDS/nanobot/issues/4881) | Windows PowerShell UTF-16 输出被当 UTF-8 解码 → NUL 字节损坏 | ✅ **已修复合并** | [#4881](https://github.com/HKUDS/nanobot/pull/4881) |
| 🟠 **High** | [#4842](https://github.com/HKUDS/nanobot/pull/4842) | MCP stdio 子进程关闭超时抛 `CancelledError` 导致协程泄漏 | ✅ **已修复合并** | [#4842](https://github.com/HKUDS/nanobot/pull/4842) |
| 🟠 **High** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 参数反序列化失败 → 无限重试循环 | 🟡 **讨论中，未见 PR** | — |
| 🟡 **Medium** | [#4787](https://github.com/HKUDS/nanobot/issues/4787) | `Session.messages` 列表无上限，长会话 OOM 风险 | 🟡 **确认，待设计** | — |
| 🟡 **Medium** | [#4882](https://github.com/HKUDS/nanobot/issues/4882) | `dream_content_diff` 把未变空文件误报为 modified | ✅ **已修复合并** | (隐含在 dream 相关提交) |
| 🟡 **Medium** | [#4893](https://github.com/HKUDS/nanobot/issues/4893) | `/dream-log` `/dream-restore` 混入非 Dream commit | ✅ **已修复合并** | (隐含在 dream 相关提交) |
| 🟢 **Low** | [#2376](https://github.com/HKUDS/nanobot/issues/2376) | 两条连续 assistant message 触发 vLLM 400 | ✅ **已修复合并** | (subagent role fix) |
| 🟢 **Low** | [#4887](https://github.com/HKUDS/nanobot/issues/4887) | `dev` extra 缺 `lark-oapi` 导致 Feishu 测试失败 | ✅ **已修复合并** | (依赖补充) |

> **趋势**：P1/P0 缺陷 **当日清零 3 项**，剩余高危项 `#4864` 与 `#4787` 需在下一 Sprint 解决。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 现有 PR/设计支撑 | 纳入下一版本概率 |
|----------|----------|------------------|------------------|
| [#4911](https://github.com/HKUDS/nanobot/issues/4911) | **Guarded Tool Gateway**：Channel 调用 Agent 工具（实时语音、外部模型 function calling） | `#4908` Channel 重构已引入 `Channel-owned setup/validation/runtime`，**架构预留口** | ⭐⭐⭐⭐⭐ (极高) |
| [#4702](https://github.com/HKUDS/nanobot/issues/4702) | Telegram **自定义 Bot API Base URL / Headers**（自建/企业网关） | ✅ **PR 已开** [#4919](https://github.com/HKUDS/nanobot/pull/4919) | ⭐⭐⭐⭐⭐ (已实现待合并) |
| [#2627](https://github.com/HKUDS/nanobot/issues/2627) | Telegram **Forum Topic Threads** 支持 | 🟡 **长期 PR** [#2628](https://github.com/HKUDS/nanobot/pull/2628) 持续更新，近期仍有 commit | ⭐⭐⭐ (中高，依赖 Channel 重构合并后再合) |
| [#1500](https://github.com/HKUDS/nanobot/issues/1500) | **消息分级/可控输出**（Cron 静默、日志级别） | 无 PR，但 `#4918` Config Repository 重构为 **动态运行时配置** 奠基 | ⭐⭐⭐ (中，配合 Config 重构) |
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) | **Session 消息滚动/持久化分层** | 无 PR，需配合 `#4918` FileConfigRepository 模式扩展到 Message Store | ⭐⭐ (中低，需设计评审) |

> **路线图推演**：**Channel 重构 (`#4908`)** 与 **Config Repository (`#4918`)** 是当前 **两大架构主线**，合并后将解锁 Tool Gateway、动态日志级别、多实例隔离等高阶能力，预计将在 **v0.3.0** 周期落地。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点原声 | 满意点 | 未满足需求 |
|------|----------|--------|------------|
| **Telegram 重度用户** | “长消息分片后前几段全是乱码，只有最后一段能渲染 Markdown” (`#4637`) | Bot 基础功能可用 | **分片感知渲染**、**消息聚合展示** |
| **Cron/后台任务运维者** | “每小时跑一次 GitHub release 检查，没更新也把完整执行日志吐给我

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-14

---

## 1. 今日速览
**项目整体状态：高强度维护期，核心精力集中在 Desktop 客户端稳定性、网关多平台兼容性修复及 Provider 生态完善上。**  
过去 24 小时共处理 **50 个 Issue 更新（42 关闭、8 新增/活跃）** 与 **50 个 PR 更新（13 合并/关闭、37 待合并）**，无新版本发布。关闭的 Issue 多为 v0.16.0 发布后暴露的 Desktop 交互缺陷（滚动、复制、路径解析）、Provider Token 统计偏差、Matrix 安全日志泄露等“阻断级/体验级”问题，修复 PR 已合并入主干。开放 PR 队列中积累了代码索引工具、Agent 编排层、技能体系扩展等中大型特性，预示下一版本将向“代码库深度理解”与“多 Agent 协作”方向演进。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展
### ✅ 已合并/关闭的关键 PR（推进核心稳定性与兼容性）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#41668](https://github.com/NousResearch/hermes-agent/pull/41668) | **Bug/P2** | 修复 macOS `launchd` 域不匹配导致网关服务误判未加载，`hermes gateway start/stop/install` 恢复正常 | macOS 用户网关管理 |
| [#43019](https://github.com/NousResearch/hermes-agent/pull/43019) | **Bug/P2** | WhatsApp 网关暴露入站视频缓存路径，模型可直接读取本地文件而非占位符 | WhatsApp 多模态交互 |
| [#43018](https://github.com/NousResearch/hermes-agent/pull/43018) | **Bug/P2** | Email 网关改用 `BODY.PEEK[]` 替代 `RFC822`，避免轮询即标记已读 | 自托管邮件网关可用性 |
| [#43023](https://github.com/NousResearch/hermes-agent/pull/43023) | **Bug/P3** | MiniMax Provider 默认 `base_url` 指向 `/anthropic` 兼容端点，修复 401 认证失败 | MiniMax/Minimax-CN 模型切换 |
| [#43005](https://github.com/NousResearch/hermes-agent/pull/43005) | **Bug/P3** | Desktop 用户气泡移除两行截断，完整渲染 Prompt，对齐 Codex 体验 | 桌面端核心交互 |
| [#42775](https://github.com/NousResearch/hermes-agent/pull/42775) | **Bug/P3** | 修复 Windows 路径解析、编码、测试运行器兼容性，解除 Windows CI/开发阻塞 | Windows 原生支持 |
| [#47286](https://github.com/NousResearch/hermes-agent/pull/47286) | **Feat/P3** | 网关层面落地 Provider 上报实际成本（OpenRouter/Nous），替代估算，贯穿 `/usage` 与会话 DB | 计费透明化、多模型路由决策 |

> **进展评估**：今日合并 PR 以 **P2/P3 级修复为主**，覆盖 Desktop、Gateway、Provider、跨平台四大支柱，v0.16.x 稳定性显著提升。大型特性 PR（代码索引、Agent 编排、技能包）仍在 Review 队列，预计需 1-2 个迭代落地。

---

## 4. 社区热点
### 🔥 讨论最活跃/关注度最高的 Issue/PR

| 编号 | 标题 | 状态 | 评论/👍 | 核心诉求分析 |
|------|------|------|---------|--------------|
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | **Feat: Dreaming — 自动后台记忆巩固** | OPEN | 5 💬 | **长期高呼声特性**：借鉴生物睡眠/OpencLaw Dreaming，在空闲期将短期对话压缩入长期记忆。涉及 Cron、Plugin、Memory 多组件，架构复杂度高，社区期待官方给出设计文档与里程碑。 |
| [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) | **Bug: Telegram DM Topic 模式吞掉 Kanban 唤醒事件** | OPEN | 4 💬 | **新报告、高优先级**：根 DM 作为大厅时，缺 `thread_id` 事件被网关静默丢弃，导致 Kanban 任务无法自动推进。阻塞 Telegram 协作流，需尽快修复网关分发逻辑。 |
| [#42525](https://github.com/NousResearch/hermes-agent/issues/42525) | **Feat: Desktop UI 允许切换工作区/目录** | CLOSED | 3 💬 / 3 👍 | **高赞闭环**：用户强烈要求在 UI 内切换 `cwd` 而非改配置重启。PR 已合并，验证“配置即代码”向“运行时可视化配置”演进的需求。 |
| [#42366](https://github.com/NousResearch/hermes-agent/issues/42366) | **Bug: Desktop 聊天不自动滚动、输入框消失** | CLOSED | 3 💬 / 3 👍 | **核心易用性痛点**：输出时不跟随、输入框闪烁，严重影响长对话体验。已修复合并，反馈 Desktop 原生感仍有提升空间。 |
| [#43030](https://github.com/NousResearch/hermes-agent/pull/43030) | **Feat: 耐久 Profile-Agent 编排层 (`agent_control`)** | OPEN | — | **架构级信号**：恢复 #18493 工作，引入 ACP 协议让 Profile 管理 Peer Agent。标志着项目从“单 Agent”向“多 Agent 编排平台”跨越，审查周期预计较长。 |

---

## 5. Bug 与稳定性
### 🐛 今日报告/修复的 Bug（按严重度排序）

| 严重度 | Issue | 状态 | 修复 PR | 说明 |
|--------|-------|------|---------|------|
| **P2 (阻断/安全)** | [#42505](https://github.com/NousResearch/hermes-agent/issues/42505) Matrix 启动时默认打印恢复密钥 | CLOSED | 已合并 | 密钥泄露风险，已改为仅在显式配置缺失时警告并提示捕获一次。 |
| **P2 (阻断)** | [#41668](https://github.com/NousResearch/hermes-agent/issues/41668) macOS `launchd` 域不匹配 | CLOSED | [#41668](https://github.com/NousResearch/hermes-agent/pull/41668) | 网关服务管理完全失效，已修复。 |
| **P2 (阻断)** | [#43019](https://github.com/NousResearch/hermes-agent/issues/43019) WhatsApp 视频无本地路径 | CLOSED | [#43019](https://github.com/NousResearch/hermes-agent/pull/43019) | 多模态输入断链，已修复。 |
| **P2 (阻断)** | [#43018](https://github.com/NousResearch/hermes-agent/issues/43018) Email 网关轮询即标记已读 | CLOSED | [#43018](https://github.com/NousResearch/hermes-agent/pull/43018) | 导致邮件客户端误判未读，已修复。 |
| **P3 (体验/功能缺失)** | [#42479](https://github.com/N

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-14

> **数据来源**: GitHub API (sipeed/picoclaw)  
> **统计窗口**: 2026-07-13 至 2026-07-14 (UTC)  
> **报告生成时间**: 2026-07-14

---

## 1. 今日速览

项目今日处于**低合并、高维护活跃**状态。过去 24 小时内 **无版本发布、无 PR 合并、无 Issue 关闭**，但有 **5 个 PR 挂起待审** 且 **5 个 Issue 保持活跃更新**，其中 2 个为今日新建。核心贡献者集中在适配器层修复（Feishu/DingTalk/Gemini/Anthropic）、基础设施升级（Docker/GoReleaser）及模型解析逻辑优化。项目呈现“零交付、多积压”的短期特征，维护者需优先疏导审核队列以释放增量价值。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

**今日无 PR 合并/关闭，项目主干代码未推进。** 以下 5 个待合并 PR 代表当前主要增量方向，建议维护者按优先级排期 Review：

| PR | 标题 | 类型 | 影响范围 | 状态 | 链接 |
|----|------|------|----------|------|------|
| **#3256** | `fix(feishu): send audio and video with native message types` | **Bug Fix / Feature** | Feishu Adapter | **Open (New Today)** | [#3256](https://github.com/sipeed/picoclaw/pull/3256) |
| **#3254** | `fix(agent): prefer verbatim model matches over provider-alias splits when resolving refs` | **Bug Fix (Core Logic)** | Agent Model Resolution | **Open** | [#3254](https://github.com/sipeed/picoclaw/pull/3254) |
| **#3228** | `fix(anthropic-messages): send SystemParts as system blocks with cache_control` | **Feature (Performance)** | Anthropic Provider (Prompt Caching) | **Open (Stale)** | [#3228](https://github.com/sipeed/picoclaw/pull/3228) |
| **#3192** | `chore(docker): bump goreleaser base images from alpine:3.21 to 3.23` | **Chore (Infra)** | CI/CD, Docker Images | **Open (Stale)** | [#3192](https://github.com/sipeed/picoclaw/pull/3192) |
| **#3191** | `chore: remove duplicate build/ entry in .gitignore` | **Chore (Housekeeping)** | Repo Config | **Open (Stale)** | [#3191](https://github.com/sipeed/picoclaw/pull/3191) |

**进展评估**：核心功能修复（#3254, #3256）与高性能特性（#3228）均卡在审核队列，基础设施维护 PR（#3191, #3192）虽小但长达 17 天未合并，表明 **Review 吞吐率为瓶颈**。

---

## 4. 社区热点

按评论数、Reaction 及讨论深度排序，以下 Issue 反映社区最迫切诉求：

### 🔥 Top 1: 核心加密库替换计划 — **高优先级、安全债务、阻塞架构演进**
*   **Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088)**: `[Feature] use vodozemac instead of libolm`
*   **信号**: `priority: high`, `help wanted`, `stale` (但 7/13 仍有更新)，👍 2，评论 8 条。
*   **诉求分析**: `libolm` 已停维且存在安全隐患，官方推荐迁移至 Rust 实现的 `vodozemac`。讨论集中在 **CGO 依赖引入的跨平台编译复杂度** 与 **编译时可选化** 方案。这是项目底层通信安全的基石工程，虽标记 `stale` 但近期仍有活动，极大概率纳入下个大版本路线图。

### 🔥 Top 2: Anthropic Prompt Caching 生态完善 — **性能优化、Token 成本控制**
*   **PR [#3228](https://github.com/sipeed/picoclaw/pull/3228)** / **Issue [#3229](https://github.com/sipeed/picoclaw/issues/3229)**
*   **信号**: PR 实现 `SystemParts` 与 `cache_control` 映射；Issue #3229 提出对话历史滚动缓存断点策略。
*   **诉求分析**: Agentic 工作流下对话历史占 Token 绝对多数。社区不仅需要“开关缓存”，更需要**细粒度控制缓存边界**（如系统提示固定、工具调用历史动态截断）。此功能直击大模型调用成本痛点，关注度极高。

### 🔥 Top 3: 即时通讯适配器体验修复 — **用户可见 Bug、多平台并发**
*   **Issue [#3255](https://github.com/sipeed/picoclaw/issues/3255)** (DingTalk 预览固定显示 "PicoClaw") — **New Today**
*   **PR [#3256](https://github.com/sipeed/picoclaw/pull/3256)** (Feishu 音视频原生发送) — **New Today**
*   **Issue [#3231](https://github.com/sipeed/picoclaw/issues/3231)** (SearXNG BasicAuth Header 支持)
*   **诉求分析**: 企业级部署场景下，IM 适配器的**原生消息类型支持**（卡片、音视频、Markdown 渲染）与**认证方式兼容性**是落地门槛。Feishu/DingTalk 双平台同日出现问题/修复，说明企业用户迁移/试用活跃。

---

## 5. Bug 与稳定性

今日新增/活跃 Bug 共 3 个，按严重程度排序：

| 严重度 | Issue | 标题 | 核心影响 | 关联 Fix PR | 状态 |
|--------|-------|------|----------|-------------|------|
| **High (逻辑错误)** | [#3254](https://github.com/sipeed/picoclaw/pull/3254) (PR) | Model Resolution: provider-alias split 优先级错误导致模型匹配错乱 | Agent 核心调度，可能导致调用错误模型或 Provider | **PR #3254 已提交** | 待合并 |
| **Medium (功能缺失)** | [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Gemini via OpenAI Compat: Function Call 缺失 `thought_signature` | Gemini 2.5+ Thinking 模式在网关模式下不可用 | 无 | Open |
| **Medium (UI/UX)** | [#3255](https://github.com/sipeed/picoclaw/issues/3255) | DingTalk 会话列表预览固定显示 "PicoClaw" | 企业微信/钉钉用户无法在列表页预判消息内容 | 无 | **New Today** |
| **Low (体验降级)** | [#3256](https://github.com/sipeed/picoclaw/pull/3256) (PR) | Feishu 音视频以附件而非原生播放器发送 | 用户需下载才能播放，非原生体验 | **PR #3256 已提交** | 待合并 |

> **稳定性提示**: #3254 涉及模型路由核心逻辑，属于**回归风险高**变更，合并前需补充单测覆盖 `lookupModelConfigByRef` 的边界用例（同名模型、别名冲突、Provider 前缀歧义）。

---

## 6. 功能请求与路线图信号

结合 Issue 与 PR，下版本 (v0.3.2+ 或 v0.4.0) 大概率纳入以下特性：

| 特性 | 来源 | 成熟度 | 纳入可能性 | 备注 |
|------|------|--------|------------|------|
| **Feishu 原生音视频消息** | PR [#3256](https://github.com/sipeed/picoclaw/pull/3256) | **代码就绪** | ⭐⭐⭐⭐⭐ (极高) | 纯 Adapter 层修改，无破坏性，等待 Review 即可发布。 |
| **Model Resolution 优先级修正** | PR [#3254](https://github.com/sipeed/picoclaw/pull/3254) | **代码就绪** | ⭐⭐⭐⭐⭐ (极高) | 核心 Bug Fix，需谨慎合并。 |
| **Anthropic Prompt Caching (System Block)** | PR [#3228](https://github.com/sipeed/picoclaw/pull/3228) | **代码就绪** | ⭐⭐⭐⭐ (高) | 依赖 #3229 讨论的断点策略统一设计，建议打包发布。 |
| **DingTalk Markdown Title/预览修复** | Issue [#3255](https://github.com/sipeed/picoclaw/issues/3255) | **需开发** | ⭐⭐⭐ (中高) | 企业 IM 刚需，修复成本低 (仅调整 JSON 结构)。 |
| **SearXNG BasicAuth Header** | Issue [#3231](https://github.com/sipeed/picoclaw/issues/3231) | **需开发** | ⭐⭐ (中) | 搜索插件增强，非核心路径。 |
| **vodozemac 替换 libolm** | Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) | **设计阶段** | ⭐⭐⭐ (中，长期) | 涉及构建链重构，预计需单独里程碑。 |

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述中提炼的真实用户画像与痛点：

1.  **企业内网部署派** (DingTalk/Feishu/SearXNG 用户):
    *   **痛点**: 适配器“能用但不好用”——音视频只能发附件、Markdown 预览失效、私有搜索引擎无法鉴权。
    *   **场景**: 运维机器人、知识库问答、CI/CD 通知推送。
    *   **呼声**: “原生消息类型支持是决定能否替换原有 Bot 框架的关键”。

2.  **大模型重度应用派** (Anthropic/Gemini/Agent 用户):
    *   **痛点**: Token 成本失控、Provider 兼容层不完善。
    *   **场景**: 多轮 Agent 编程、长上下文 RAG、Thinking 模型调用。
    *   **呼声**: “Prompt Caching 省钱 90%，但缺乏对话级缓存策略”；“Gemini OpenAI 兼容层坑太多，建议原生 Provider 优先”。

3.  **安全合规派** (Matrix/OLM 用户):
    *   **痛点**: 依赖停维 C 库 (`libolm`)，供应链安全扫描不通过。
    *   **诉求**: 纯 Go / 纯 Rust 替代方案，或至少编译时可剥离。

---

## 8. 待处理积压提醒

以下长期未响应项需维护者**本周内介入**，避免贡献者流失与技术债务固化：

| 项目 | 类型 | 停滞时长 | 风险 | 建议行动 |
|------|------|----------|------|----------|
| **PR [#3191](https://github.com/sipeed/picoclaw/pull/3191)** | Chore (gitignore) | **17 天** | 低，但信号极差：连微小清理都不合并，挫伤贡献者信心 | **立即合并** (一键操作)，释放“维护活跃”信号。 |
| **PR [#3192](https://github.com/sipeed/picoclaw/pull/3192)** | Chore (Docker Base) | **17 天** | 中：Alpine 3.21 即将 EOL，镜像安全合规风险 | 指派 Reviewer，CI 通过即合并。 |
| **PR [#3228](https://github.com/sipeed/picoclaw/pull/3228)** | Feature (Anthropic Caching) | **8 天** | 高：核心性能特性，阻塞 #3229 后续设计 | 安排 Core Maintainer Review，配合 #3229 讨论结论合并。 |
| **Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088)** | Epic (Security/Arch) | **35 天** (近期有更新) | 极高：安全债务，架构重构前置依赖 | 召集架构会议，确定 `vodozemac` 集成方案 (CGO vs FFI vs Subprocess)，输出 RFC。 |

---

**📌 维护者行动清单

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-14

---

## 1. 今日速览

*   **整体状态**：项目处于**高强度维护与功能迭代并行期**。过去 24 小时无新 Issue 开启，但有 **3 个 Issue 关闭**（含 2 个高危安全漏洞修复确认）且 **26 个 PR 合并/关闭**，显示核心团队正集中精力清理积压、落地安全加固与基础设施完善。
*   **活跃度评估**：⭐⭐⭐⭐⭐ **极高**。日合并 PR 数达 26 个，覆盖安全、消息投递、容器、技能系统、新通道适配 等核心模块，代码库变更量大，发布节奏加快。
*   **核心看点**：
    1.  **安全审计落地**：针对 `add_mcp_server` 审批流隐藏 `args/env` 的“审批走私”漏洞（#2827, #2762）已通过 #2998 修复并关闭。
    2.  **消息投递可靠性重构**：针对离线适配器静默丢包（#2995）的修复（#2996, #2226）已合并，引入重试机制与显式报错。
    3.  **新通道接入**：**Dial（短信/语音）** 适配器（#3032）及安装向导（#3033）正式落地，拓展通信边界。
    4.  **技能系统架构升级**：结构化技能格式（#3035）将 `SKILL.md` 确立为单一事实来源，安装流程标准化。

---

## 2. 版本发布

*   **今日无新版本发布**（`Releases: 0`）。
*   *注*：大量修复与特性已合并至主分支，预计近期将切出新版本（建议关注 `changelog` 与 `git tag`）。

---

## 3. 项目进展：今日合并/关闭的重要 PR（26 个合并/关闭，精选高影响项）

| PR | 类型 | 核心变更 | 关联 Issue | 影响面 |
| :--- | :--- | :--- | :--- | :--- |
| **[#2998](https://github.com/qwibitai/nanoclaw/pull/2998)** | **Security Fix** | 修复 `add_mcp_server` 审批卡片：现完整渲染运行时 `args` 与 `env`，堵塞“审批走私”攻击链。 | #2827, #2762 | **极高** – 所有自修改 MCP Server 接入场景 |
| **[#2996](https://github.com/qwibitai/nanoclaw/pull/2996)** | **Fix (Delivery)** | 缺失 Channel Adapter 的出站消息不再标记 `delivered`，改入重试路径（指数退避），最终进入死信队列。 | #2995 | **高** – 消息可靠性、多租户运维 |
| **[#2226](https://github.com/qwibitai/nanoclaw/pull/2226)** | **Fix (Host)** | `deliveryAdapter.deliver` 缺适配器时抛 `MissingChannelAdapterError`，触发上层重试循环，彻底终结静默丢包。 | #2995 | **高** – 核心投递链路 |
| **[#3032](https://github.com/qwibitai/nanoclaw/pull/3032)** | **Feat (Channel)** | 新增 **Dial 适配器**：原生支持 SMS/MMS 与 AI 语音调用，基于 `@getdial/sdk`，长文自动分片，媒体类型直通。 | — | **中高** – 新业务通道拓展 |
| **[#3033](https://github.com/qwibitai/nanoclaw/pull/3033)** | **Feat (Setup)** | `setup:auto` 引入 Dial 选项，配套 `/add-dial` 技能，实现向导化零配置接入。 | — | **中** – 运维体验、新通道落地 |
| **[#3035](https://github.com/qwibitai/nanoclaw/pull/3035)** | **Refactor (Skills)** | **结构化技能格式落地**：安装向导直接应用 `SKILL.md` 机器可执行步骤，废弃各通道专用向导代码，单一事实来源。 | — | **高** – 技能生态可维护性、扩展性 |
| **[#3022](https://github.com/qwibitai/nanoclaw/pull/3022)** | **Feat (Templates)** | 模板支持 `tasks/*.md` 定义周期性调度任务（cron + 可选脚本门控 + Prompt），创建时自动暂停，附文档。 | — | **中** – 代理自动化、运维标准化 |
| **[#3012](https://github.com/qwibitai/nanoclaw/pull/3012)** / **[#3013](https://github.com/qwibitai/nanoclaw/pull/3013)** | **Feat (Memory)** | **Provider-agnostic 持久化记忆树**：`memory/index.md` + `system/definition.md`，Claude/Codex 双 Provider 在启动/清理/压缩时自动加载/刷新。 | — | **高** – 长期记忆、多 Provider 一致性 |
| **[#2743](https://github.com/qwibitai/nanoclaw/pull/2743)** | **Fix (CLI)** | `ncl wirings create` 补齐 `agent_destinations` 副作用，修复新建接线后代理消息投递为空。 | — | **中** – CLI 正确性 |
| **[#1889](https://github.com/qwibitai/nanoclaw/pull/1889)** / **[#1887](https://github.com/qwibitai/nanoclaw/pull/1887)** | **Fix (Ops)** | 清理脚本 `sqlite3` 缺失/报错时**硬失败**；诊断上报遵守 `DO_NOT_TRACK` 且 `curl` 缺失时静默跳过。 | #1825 | **中** – 运维脚本健壮性、隐私合规 |

> **进展小结**：今日合并 PR **实质性推进 3 大里程碑**——**安全基线闭环**、**消息投递可靠性重构**、**技能/模板/记忆三大基建模块标准化**。代码库处于“破坏性修复后稳定期”，适合切版本。

---

## 4. 社区热点：讨论最活跃 / 关注度最高

| Item | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- |
| **[#2827](https://github.com/qwibitai/nanoclaw/issues/2827)** / **[#2762](https://github.com/qwibitai/nanoclaw/issues/2762)** | 🔒 **Security Advisory** ×2<br>创建 6 月中旬，今日同步关闭 | **供应链/自修改安全**：研究员 YLChen-007 披露 `add_mcp_server` 审批流仅展示 Server 名称，隐藏 `args/env` 导致恶意参数注入。社区零评论但**双 Issue 并行跟踪**说明核心团队高度重视，修复 PR #2998 已合并，信任度修复完成。 |
| **[#2995](https://github.com/qwibitai/nanoclaw/issues/2995)** | 🐛 **Bug**<br>作者 glifocat（核心成员）<br>今日关闭 | **可观测性缺口**：离线适配器导致消息“已送达”实则未发。触发 #2996 + #2226 双 PR 协同修复，体现**核心成员自驱治理**文化。 |
| **[#3038](https://github.com/qwibitai/nanoclaw/pull/3038)** | 🆕 **Open PR (今日新开)**<br>WhatsApp LID 模式群发卡“waiting” | **WhatsApp 协议适配**：LID 寻址模式下群成员 JID 转换错误导致 sender-key 分发失败。DM/小群正常，大群/旧群受阻。**实时通信核心链路阻塞**，需紧急 Review。 |
| **[#2802](https://github.com/qwibitai/nanoclaw/pull/2802)** | 🔧 **Open PR (长周期)**<br>创建 6/17，持续更新至今日 | **Socket 传输层加固**：客户端超时/帧上限、服务端拒绝式关闭/帧上限。解决“挂起永不返回”与“内存无界增长”两大 DoS 隐患。虽未合并但持续迭代，属**基础设施安全债偿还**。 |

---

## 5. Bug 与稳定性：今日报告/修复追踪

| 严重度 | Issue / PR | 现象 | 修复状态 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Critical (安全)** | [#2827](https://github.com/qwibitai/nanoclaw/issues/2827) / [#2762](https://github.com/qwibitai/nanoclaw/issues/2762) | MCP Server 审批走私：攻击者可隐藏恶意 `args/env` 获取批准 | ✅ **已修复合并** (#2998) | 审批卡片现全量渲染 payload，前后端一致性校验通过 |
| **High (数据丢失/静默失败)** | [#2995](https://github.com/qwibitai/nanoclaw/issues/2995) | 离线 Channel Adapter 导致消息标记 `delivered` 实则未发 | ✅ **已修复合并** (#2996, #2226) | 引入重试路径 + 显式异常，彻底堵住静默丢包 |
| **High (功能阻塞)** | [#3038](https://github.com/qwibitai/nanoclaw/pull/3038) | WhatsApp LID 群消息永久卡在 “waiting”，收方不渲染 | 🔄 **Open PR 待 Review** | 核心通信链路，**建议优先合并**；DM/小群不受影响 |
| **Medium (CLI 正确性)** | [#2743](https://github.com/qwibitai/nanoclaw/pull/2743) | `ncl wirings create` 缺失 `agent_destinations` 导致投递为空 | ✅ **已修复合并** | 补齐 CRUD 层副作用 |
| **Medium (运维脚本)** | [#1889](https://github.com/qwibitai/nanoclaw/pull/1889) | 清理会话脚本 `sqlite3` 失败时静默当作 “无活跃会话” | ✅ **已修复合并** | 改为硬失败，避免数据静默丢失 |
| **Low (隐私/诊断)** | [#1887](https://github.com/qwibitai/nanoclaw/pull/1887) | 诊断上报未遵守通用 `DO_NOT_TRACK`、缺 `curl` 仍强行上报 | ✅ **已修复合并** | 兼容通用退出标志，缺依赖静默跳过 |

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 落地进度 | 入版概率 |
| :--- | :--- | :--- | :--- |
| **[#3037](https://github.com/qwibitai/nanoclaw/pull/3037)** (Open) | **容器层 MCP 工具白名单**：`NANOCLAW_MCP_TOOL_ALLOWLIST` 环境变量按逗号分隔工具名，其余隐藏不可调。 | PR 开启，设计完整，待 Review | ⭐⭐⭐⭐⭐ **极高** – 最小权限原则，容器化部署刚需 |
| **[#3036](https://github.com/qwibitai/nanoclaw/pull/3036)** (Open) | **Agent 上下文注入当前时间 + 本地化星期**：解决定时任务轮次 Agent 混淆日期/小时。 | PR 开启，修改面窄 | ⭐⭐⭐⭐ **高** – 定时任务可用性直接相关 |
| **[#3012](https://github.com/qwibitai/nanoclaw/pull/3012)** / **[#3013](https://github.com/qwibitai/nanoclaw/pull/3013)** (Merged) | **Provider-agnostic 持久化记忆**：跨 Provider 共享 `memory/` 树，启动/清理/压缩自动加载。 | **已合并** | ✅ **已入主线** – 下一版核心亮点 |
| **[#3022](https://github.com/qwibitai/nanoclaw/pull/3022)** (Merged) | **模板内置调度任务**：`tasks/*.md` 定义 cron/脚本/Prompt，创建即暂停。 | **已合并** | ✅ **已入主线** – 模板生态关键补全 |
| **[#3032](https://github.com/qwibitai/nanoclaw/pull/3032)** / **[#3033](https://github.com/qwibitai/nanoclaw/pull/3033)** (Merged) | **Dial 通道（短信/语音）**：原生适配器 + 向导技能。 | **已合并** | ✅ **已入主线** – 通道矩阵扩展 |

> **路线图研判**：下一版本（或近期 Release）将聚焦 **“安全基线 + 消息可靠性 记忆/模板/技能三大基建标准化”**，并同步交付 **Dial 通道** 与 **MCP 工具白名单** 两大增量能力。

---

## 7. 用户反馈摘要：从 Issue 评论提炼真实痛点

*   **安全信任危机（已缓解）**：研究员连续披露两个同根异源的 MCP 审批漏洞（#2827, #2762），直指“自修改能力若审计不透明即为后门”。核心团队 **24h 内合并修复并关闭 Issue**，展示响应速度，社区信任度修复中。
*   **“以为发了其实没

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-07-14

---

## 1. 今日速览

- **整体活跃度：低-中等（代码贡献侧活跃，社区互动侧静默）**。过去 24 小时无 Issue 更新、无版本发布、无 PR 合并，但有 4 个 PR 保持“Open”并持续更新（最近更新均为 2026-07-13），说明核心维护者正在并行推进多项底层修复与功能重构。
- **核心进展方向**：聚焦于 **CLI 交互体验优化（REPL 行编辑）**、**Agent 审批流标准化**、**Matrix 通道同步状态持久化** 以及 **Android/Termux 环境下的网络兼容性修复**。
- **项目健康度**：代码库处于“预发布/重构期”，积累了 4 个较大体量的待合并 PR，缺乏 Review 与 Merge 动作可能成为交付瓶颈。社区零 Issue 活动，反馈回路当前依赖内部推进。

---

## 2. 版本发布

> **今日无新版本发布。**

---

## 3. 项目进展

> **今日无 PR 合并/关闭。** 以下为当前处于活跃开发/评审阶段的关键 PR，代表项目当前的主要技术攻坚方向：

| PR | 标题 | 状态 | 核心推进内容 | 影响面 |
| :--- | :--- | :--- | :--- | :--- |
| **[#970](https://github.com/nullclaw/nullclaw/pull/970)** | `fix(cli): handle arrow keys in agent REPL` | Open (Updated 07-13) | 引入零分配行编辑器，启用 POSIX Raw Mode，支持方向键、历史导航、光标移动、Home/End、词级跳转等。解决 REPL 下控制字符乱码问题。 | **CLI 核心交互体验**，直接影响开发者/用户日常使用手感。 |
| **[#969](https://github.com/nullclaw/nullclaw/pull/969)** | `feat(agent): structured approval_request / approval_response flow` | Open (Updated 07-13) | 实现双轮次工具审批流：Tool 抛出 `ApprovalRequired` -> Agent 暂存并发送 SSE 事件 -> UI 渲染审批 -> 用户响应 -> Agent 恢复执行。 | **Agent 安全性与可控性核心架构**，为 Shell 等高危工具提供标准化人工介入机制。 |
| **[#968](https://github.com/nullclaw/nullclaw/pull/968)** | `fix(matrix): persist next_batch across restart + test env isolation` | Open (Updated 07-13) | 修复 Matrix Channel 重启导致 `next_batch` 丢失、触发全量初始同步的问题；引入持久化存储并隔离测试环境。 | **Matrix 通道稳定性/可靠性**，解决重启后重复拉取历史/状态重置的严重回归风险。 |
| **[#966](https://github.com/nullclaw/nullclaw/pull/966)** | `fix(http): secure buffered curl fallback on Android` | Open (Updated 07-13) | 修复 `aarch64-linux-android` (Termux) 下 Zig stdlib HTTP DNS 解析失败 (`NameServerFailure`) 问题，完善 curl 回退路径保留完整 `std.http` 语义。 | **Android/Termux 平台兼容性**，解决移动端/边缘环境网络不可用的阻塞性 Bug。 |

**进度评估**：4 个 PR 均为“修复/重构”性质，且均涉及核心基础设施（REPL、Agent 循环、Matrix 同步、网络层）。若能在本周内完成 Review 并合并，将显著提升 v0.x 版本的稳定性基线。

---

## 4. 社区热点

> **过去 24h 无 Issue 评论、无 PR 评论、无 Reaction 数据。** 社区讨论处于静默期。所有 4 个 PR 的评论数均为 `undefined` (0)，👍 数为 0。
- **分析**：当前项目驱动模式为 **Maintainer-driven（维护者驱动）**，外部贡献者/用户参与度极低。建议维护者在合并上述 PR 后，主动发起 “Call for Testing” 或发布 Pre-release 以激活反馈回路。

---

## 5. Bug 与稳定性

> **今日无新增 Issue 报告。** 但根据现有 PR 隐含的 Bug 画像，当前已知的关键稳定性风险如下（均已有对应 Fix PR）：

| 严重程度 | 问题描述 | 关联 PR | 修复状态 |
| :--- | :--- | :--- | :--- |
| **High (阻塞性)** | **Android/Termux 环境网络完全不可用** (Zig stdlib DNS 解析失败) | [#966](https://github.com/nullclaw/nullclaw/pull/966) | **有 Fix PR，待合并** |
| **High (数据一致性)** | **Matrix 通道重启丢失同步游标**，导致全量重同步、消息重复/丢失、状态重置 | [#968](https://github.com/nullclaw/nullclaw/pull/968) | **有 Fix PR，待合并** |
| **Medium (体验阻断)** | **Agent REPL 无法使用方向键/编辑历史**，控制字符直接打印，严重影响交互 | [#970](https://github.com/nullclaw/nullclaw/pull/970) | **有 Fix PR，待合并** |
| **Medium (架构缺失)** | **缺乏标准化工具审批机制**，高危操作 (如 Shell) 无法安全落地 | [#969](https://github.com/nullclaw/nullclaw/pull/969) | **有 Feature PR，待合并** |

**建议**：优先 Review 并合并 #966 与 #968，因其涉及平台可用性与数据正确性，属于“必须修复”类。

---

## 6. 功能请求与路线图信号

> **今日无新增 Feature Request Issue。** 基于现有 PR 推测下一版本 (v0.x+1) 纳入信号：

1.  **Agent 审批流标准化 (#969)**：强信号。这是 Agent 能力商业化/生产化的前置条件（Human-in-the-loop），极大概率纳入下一版本核心特性。
2.  **REPL 专业级行编辑 (#970)**：中强信号。提升 CLI 为一等公民体验，符合 “Developer-first” 定位。
3.  **Matrix 状态持久化 (#968)**：隐性需求。虽非用户显性提需求，但属于分布式系统工程质量红线，必选修复项。
4.  **Android 支持 (#966)**：战略性需求。拓展运行时边界至移动端/边缘设备，符合 “Local-first AI Agent” 长期愿景。

**路线图推测**：下一里程碑将聚焦 **“生产就绪”**——解决稳定性（Matrix/Network）、安全性（Approval）、易用性（REPL）三大短板。

---

## 7. 用户反馈摘要

> **过去 24h 无 Issue 评论，无用户反馈数据可供提炼。**
- **现状**：反馈渠道仅限 GitHub Issues，且当前无活跃讨论。
- **建议**：在 README / Discord / Matrix 频道增加 “Good First Issue” 标签引导；发布 Nightly Build 链接鼓励早期尝鲜反馈。

---

## 8. 待处理积压

> **重点关注：4 个长期 Open 且近期持续更新的大型 PR，** 形成“Review 积压”，阻碍价值交付。

| PR | 停留时长 (创建至今) | 最近更新 | 风险提示 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **[#966](https://github.com/nullclaw/nullclaw/pull/966)** | **25 天** (06-19) | 07-13 | Android 平台完全不可用；涉及网络层底层逻辑，回归风险高，需充分测试。 | **指派核心维护者本周完成 Review/合并**；补充 Android CI 测试。 |
| **[#968](https://github.com/nullclaw/nullclaw/pull/968)** | **22 天** (06-22) | 07-13 | Matrix 同步核心逻辑变更，测试环境隔离新增，需验证不破坏现有同步语义。 | **优先 Code Review**；要求补全集成测试覆盖重启场景。 |
| **[#969](https://github.com/nullclaw/nullclaw/pull/969)** | **16 天** (06-28) | 07-13 | 引入新的事件类型 (`approval_request/response`) 与状态机，API 变更面广，需确认向后兼容性。 | **架构评审会**；确认 SSE 事件契约文档同步更新。 |
| **[#970](https://github.com/nullclaw/nullclaw/pull/970)** | **15 天** (06-29) | 07-13 | 新增 Raw Mode 依赖，需验证 Windows/非 TTY 环境降级兼容性。 | **跨平台验证** (Windows, Docker, SSH) 后快速合并。 |

**累计秵压风险**：4 个 PR 合计代码变更量大，且相互独立，建议采用 **“小步快跑”** 策略：优先合并 #970 (独立性强、风险低、体验提升即时) 与 #966 (阻塞性 Bug)，再攻坚 #968、#969。

---

### 📊 核心指标快照 (2026-07-14)

| 指标 | 数值 | 趋势 vs 昨日 |
| :--- | :--- | :--- |
| Open Issues 总数 | 数据未提供 | - |
| Open PRs 总数 | **≥ 4** (活跃) | 持平 |
| 过去 24h Commits (推测) | 活跃 (4 PRs 更新) | - |
| 关键 Bug 修复率 | 0% (0 merged) | ⬇️ 需加速 |
| 社区互动指数 | 0 (评论/Reactions) | ⬇️ 静默 |

---

**报告生成时间**：2026-07-14 00:00 UTC
**数据来源**：GitHub API (NullClaw/nullclaw) - Issues, PRs, Releases
**下一步建议**：召集 30 分钟 “PR Triage Meeting”，逐个过筛上述 4 个 PR，明确 Reviewer 与合并截止日期，打破零合并僵局。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-14

---

## 1. 今日速览

- **活跃度评估：高** — 过去 24 小时累计 48 条 Issue 更新（39 个新建/活跃，9 个关闭）与 50 条 PR 更新（28 个待合并，22 个已合并/关闭），日均变更量处于项目近期高位。
- **核心主线：** 围绕 **Reborn 运行时** 的稳定化、v1 遗留代码彻底清理（4 个关联 Issue 今日集中创建）、自动化/触发器可观测性补齐、WebUI 交互细节打磨三大方向并行推进。
- **质量信号：** 多个 "bug_bash_P2/P3" 类 Issue 集中涌现，说明团队正在进行系统性缺陷扫描；同时 9 个 Issue 当日关闭、22 个 PR 合并，修复吞吐率约 46%，技术债偿还节奏可控。
- **风险点：** #6000 揭示安全漏洞上报通道缺失（无 SECURITY.md、私有报告关闭），合规风险需尽快补齐；#6029 GitHub 扩展生命周期管理缺口可能阻碍生产环境运维。
- **里程碑：** v1 运行时退役计划正式进入执行阶段（Issue #6077-#6080），标志着架构统一进入收尾期。

---

## 2. 版本发布

**无新版本发布**。最近一次发布 PR #5598（2026-07-03 创建，今日仍在更新）显示即将发布的版本包含破坏性变更：
- `ironclaw_common` 0.4.2 → 0.5.0 (⚠ API breaking)
- `ironclaw_skills` 0.3.0 → 0.4.0 (⚠ API breaking)
- `ironclaw` 0.24.0 → 0.29.1  
建议关注该 PR 合并后的正式 Release Notes 以获取迁移指南。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（推进核心功能与稳定性）

| PR | 标题 | 影响范围 | 状态 |
|----|------|----------|------|
| [#5911](https://github.com/nearai/ironclaw/pull/5911) | fix: load older chat history pages | WebUI 活动面板分页加载彻底修复，解决 #5889 | ✅ CLOSED |
| [#5912](https://github.com/nearai/ironclaw/pull/5912) | fix: record security audit events in harness | 集成测试桩补齐 `RecordingSecurityAuditSink`，消除 wiring parity 守卫报错 (#5640) | ✅ CLOSED |
| [#5907](https://github.com/nearai/ironclaw/pull/5907) | fix: clear stale chat run failure banner | 后续成功运行自动清除残留错误横幅，解决 #5879 | ✅ CLOSED |
| [#5975](https://github.com/nearai/ironclaw/pull/5975) | Detect prompt-cache breaks and stop doomed compaction loops | 引入提示缓存断裂检测，长轮次成本降低 ~3.5× (claw-swe-bench) | ✅ CLOSED |
| [#5979](https://github.com/nearai/ironclaw/pull/5979) | Surface new post-edit check diagnostics on reborn coding edits | 编辑后自动推送新诊断到模型，减少旁路破坏 | ✅ CLOSED |
| [#5985](https://github.com/nearai/ironclaw/pull/5985) | feat(reborn): route caller-requested model on OpenAI-compatible API (Phase 2) | OpenAI 兼容 API `model` 字段真正生效路由，而非仅校验 | ✅ CLOSED |
| [#5961](https://github.com/nearai/ironclaw/pull/5961) | skills/coding: add Verify Before You Finish discipline | 技能层面强制验收验证，降低编码任务失败率 | ✅ CLOSED |
| [#6015](https://github.com/nearai/ironclaw/pull/6015) | Flaky CI isolation fix | 修复 `all-features` coverage leg 下的环境变量竞态 | ✅ CLOSED |

### 待合并的大型 PR（正在推进）

| PR | 标题 | 预估影响 |
|----|------|----------|
| [#6066](https://github.com/nearai/ironclaw/pull/6066) | fix(triggers): derive active-hold visibility for gate-parked automations | 解决 #5886，触发器因审批/认证阻塞导致静默跳过，新增 WebUI 与能力层可见性 |
| [#5977](https://github.com/nearai/ironclaw/pull/5977) | Advertise Reborn skills as one-line listing; load bodies on activation | 系统提示 token 从 ~7K/call 大幅压缩，缓解长上下文成本 |
| [#5978](https://github.com/nearai/ironclaw/pull/5978) | Require read-before-edit and reject stale edits in reborn coding tools | 对齐 Claude Code 编辑守卫，强制 read-before-write + 乐观锁 |
| [#6013](https://github.com/nearai/ironclaw/pull/6013) | feat(agent-loop): tools-capable completion nudge for interactive coding | 交互式编码模式下启用驱动级完成提示，提升代码生成连贯性 |
| [#5952](https://github.com/nearai/ironclaw/pull/5952) | fix: distinguish inactive extension search results | 修复 #5948 核心逻辑：仅活跃扩展标记为可调用，安装未激活给出明确引导 |

---

## 4. 社区热点

| 排名 | Issue/PR | 评论/互动 | 核心诉求 |
|------|----------|-----------|----------|
| 1 | [#5948](https://github.com/nearai/ironclaw/issues/5948) | 5 💬 | **GitHub 扩展状态误报**：助手声称扩展“已激活”实则仅“已安装”，导致能力调用失败；阻塞生产环境扩展使用信心 |
| 2 | [#6000](https://github.com/nearai/ironclaw/issues/6000) | 1 💬 | **安全上报通道缺失**：无 SECURITY.md、GitHub 私有漏洞报告关闭，研究者无法负责任披露 |
| 3 | [#5889](https://github.com/nearai/ironclaw/issues/5889) | 2 💬 | **历史消息加载失效** → 已由 #5911 修复并关闭 |
| 4 | [#5640](https://github.com/nearai/ironclaw/issues/5640) | 2 💬 | **测试桩缺口导致 CI 守卫误报** → 已由 #5912 修复并关闭 |
| 5 | [#6029](https://github.com/nearai/ironclaw/issues/6029) | 1 💬 | **GitHub 扩展不可去激活/卸载**：生命周期管理缺口，运维受限 |

> **趋势：** 今日新建的 4 个 v1 退役 Issue (#6077-#6080) 与 7 个 e2e live-test 场景 Issue (#6067-#6074) 均为 0 评论，属于内部规划驱动，非社区外部压力。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P2 (高)** | [#5836](https://github.com/nearai/ironclaw/issues/5836) | 定时例行任务每 5 分钟全量失败 “No thread attached” | 无 | 🔴 OPEN |
| **P2** | [#5885](https://github.com/nearai/ironclaw/issues/5885) | 审批通知点击后打开动作页但无审批卡片，无法批准/拒绝 | [#5910](https://github.com/nearai/ironclaw/pull/5910) (hydrate approval gates) | 🟡 PR OPEN |
| **P2** | [#5879](https://github.com/nearai/ironclaw/issues/5879) | 失败横幅在后续成功后残留 | [#5907](https://github.com/nearai/ironclaw/pull/5907) | ✅ FIX MERGED |
| **P2** | [#6044](https://github.com/nearai/ironclaw/issues/6044) | WebUI Enter 键间歇性不发送消息 | 无 | 🔴 OPEN |
| **P3 (中)** | [#5948](https://github.com/nearai/ironclaw/issues/5948) | 扩展状态误报（见热点） | [#5952](https://github.com/nearai/ironclaw/pull/5952) | 🟡 PR OPEN |
| **P3** | [#6050](https://github.com/nearai/ironclaw/issues/6050) | 对话历史错误横幅误报，实际请求成功 | 无 | 🔴 OPEN |
| **P3** | [#5741](https://github.com/nearai/ironclaw/issues/5741) | `builtin.http.save` 大响应触发 `OutputTooLarge` 而非落盘 | [#5915](https://github.com/nearai/ironclaw/pull/5915) | 🟡 PR OPEN |
| **P3** | [#5891](https://github.com/nearai/ironclaw/issues/5891) | “Last completed” 显示进行中运行时间戳 | 已修复 (未见 PR 编号) | ✅ CLOSED |
| **P3** | [#6052](https://github.com/nearai/ironclaw/issues/6052) | 扩展注册页加载 10 秒+，仅显示骨架屏 | 无 | 🔴 OPEN |
| **P3** | [#5860](https://github.com/nearai/ironclaw/issues/5860) | 工具详情仅在完成后出现 | 已修复 | ✅ CLOSED |

> **修复覆盖率：** 10 个 P2/P3 Bug 中 4 个已有 Fix PR（40%），2 个已关闭（20%），4 个仍无对应 PR（40%）。建议优先排期 #5836、#6044、#6050、#6052 的根因分析。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 已有 PR/Issue 支持 | 纳入下一版本可能性 |
|----------|----------|-------------------|-------------------|
| [#6029](https://github.com/nearai/ironclaw/issues/6029) | GitHub 扩展全生命周期管理（去激活/重配置/卸载） | 无 PR，但 #5952 为状态区分铺路 | ⭐⭐⭐ 高（运维刚需） |
| [#6

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-14

> **数据范围**：2026-07-13 至 2026-07-14 (UTC) | **数据来源**：GitHub API / moltis-org/moltis

---

## 1. 今日速览
**项目整体呈现“修复导向、高合并率”的健康迭代状态**。过去 24 小时**无新版本发布**，但合并/关闭 **7 个 PR**，新增/活跃 **2 个 Issue**，开放 PR 积压维持在 **4 个**。核心精力集中在 **模型兼容性适配（Gemma 4、oMLX、GPT-5.6）**、**基础设施稳定性（CalDAV 崩溃、MCP OAuth、Matrix 依赖膨胀）** 与 **浏览器工具链健壮性** 上。社区互动指标（评论/Reaction）均处于低位，呈现典型的“核心维护者驱动型”开源协作模式。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展：核心合并与修复（7 个 Closed PR）

今日合并的 PR 质量极高，均解决了具体阻断性问题或引入重要模型支持，显著推进了项目稳定性与生态兼容性：

| PR | 类型 | 核心变更 | 影响面 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#1146** | **Feat** | **新增 GPT-5.6 系列模型支持** (Sol, Terra, Luna)，更新 OpenAI/Codex 目录，修正上下文窗口参数 (1.05M/372K)，清理废弃模型引用。 | **模型生态/用户体验** | [#1146](https://github.com/moltis-org/moltis/pull/1146) |
| **#1120** | **Fix** | **修复 MCP OAuth `invalid_target` 错误**，针对 Notion/Linear 等在 `WWW-Authenticate` 头携带 `resource_metadata` 的服务器，改用直接 Fetch 获取元数据。**关联 Issue #1119**。 | **集成/MCP/认证** | [#1120](https://github.com/moltis-org/moltis/pull/1120) |
| **#1145** | **Fix** | **修复 CalDAV `normalise_datetime` 非 ASCII 日期时间导致 Panic**，增强对远程服务器异常数据的容错能力。 | **稳定性/CalDAV/崩溃** | [#1145](https://github.com/moltis-org/moltis/pull/1145) |
| **#1136** | **Fix** | **Agent 工具参数类型强制转换**：自动将小模型 (Gemma 4, oMLX) 常见的字符串标量 (`"true"`, `"5000"`) 转为布尔/数字，解决验证失败。 | **Agent/本地模型兼容性** | [#1136](https://github.com/moltis-org/moltis/pull/1136) |
| **#1098** | **Fix** | **Browser Tool 容忍显式 `null` 可选参数**：修复 `serde(default)` 无法处理显式 `null` 导致的反序列化失败 (Gemma 4 场景)。 | **Browser/工具调用/本地模型** | [#1098](https://github.com/moltis-org/moltis/pull/1098) |
| **#1089** | **Perf/Stability** | **会话历史再水化时截断持久化 Tool Result**，防止上下文爆炸，覆盖普通/流式/压缩/重试等全链路。 | **核心架构/内存/性能** | [#1089](https://github.com/moltis-org/moltis/pull/1089) |
| **#1139** | **Fix/Build** | **移除 `metrics` feature 对 `matrix-sdk` 的强制依赖**，修复禁用 Matrix 频道时仍编译庞大 SDK 的构建膨胀问题。 | **构建体积/依赖管理/网关** | [#1139](https://github.com/moltis-org/moltis/pull/1139) |

**进展评估**：**单日修复 5 个 Bug + 1 个性能优化 + 1 个模型适配**，且均针对生产环境真实报错（Panic、OAuth 失败、模型输出不规范），代码质量与响应速度均处于优秀水平。

---

## 4. 社区热点

当前社区讨论量极低（全量 Issue/PR 评论数 ≤ 1，Reaction 均为 0），热点集中在**长期未决的结构性需求**：

| 项目 | 状态 | 互动 | 核心诉求 | 分析 |
| :--- | :--- | :--- | :--- | :--- |
| **#1102** | Open | 💬 1 | **引入 FunASR/SenseVoice 作为本地 STT 引擎** | 作者于今日 (07-14) 补充 License 澄清备注，显示推进意愿强烈。涉及 Rust 生态音频模型集成，技术复杂度高，需核心成员评估维护成本。 | [#1102](https://github.com/moltis-org/moltis/issues/1102) |
| **#1132** | Open | 💬 1 | **"main" Session 无法删除/归档** | 基础会话管理缺陷，影响用户基础体验。虽有讨论但无修复 PR，建议提升优先级。 | [#1132](https://github.com/moltis-org/moltis/issues/1132) |
| **#1124** | Open PR | - | **Chat Turn 级 Context Command 注入** | 由 `gptme-thomas` 提出，支持部署端运行时上下文自动注入，属高价值架构增强，审查周期较长 (创建于 06-15)。 | [#1124](https://github.com/moltis-org/moltis/pull/1124) |

---

## 5. Bug 与稳定性

### 🔴 已修复并合并 (生产级阻断)
| 严重度 | 问题 | 修复 PR | 状态 |
| :--- | :--- | :--- | :--- |
| **Critical (Panic)** | CalDAV 非 ASCII 时间导致进程崩溃 | [#1145](https://github.com/moltis-org/moltis/pull/1145) | ✅ Merged |
| **Critical (Auth Fail)** | MCP OAuth `invalid_target` 导致 Notion/Linear 无法接入 | [#1120](https://github.com/moltis-org/moltis/pull/1120) | ✅ Merged |
| **High (Tool Fail)** | 本地小模型 (Gemma 4/oMLX) 工具参数类型/Null 导致调用失败 | [#1136](https://github.com/moltis-org/moltis/pull/1136), [#1098](https://github.com/moltis-org/moltis/pull/1098) | ✅ Merged |

### 🟡 待修复
| 严重度 | Issue | 现状 | 建议 |
| :--- | :--- | :--- | :--- |
| **High (Data/UX)** | **#1132**: "main" Session 无法删除/归档 | Open, 无关联 PR, 存在 26 天 | 分配 Owner，纳入下个 Sprint；涉及会话生命周期核心逻辑，风险可控。 |

---

## 6. 功能请求与路线图信号

结合 Open PR 与 Issue，下一版本 (vNext) 可能纳入的特性：

1.  **部署端运行时上下文注入** (`#1124`)：**就绪度高**。解决“手动粘贴上下文”痛点，适配企业级部署自动化需求，等待 Review 合并。
2.  **浏览器操作可视化时间轴** (`#1135`)：**工程化完善**。自动截图附加到 Tool Result，提升 Agent 可观测性，非破坏性增强。
3.  **频道活动日志可见性细粒度控制** (`#1093`)：**社区/企业治理刚需**。账号/频道/用户三级覆盖策略，设计完善，停滞 40+ 天，建议催审。
4.  **CalDAV 服务端时间范围过滤** (`#1147`)：**修复性功能**。修复 `list_events` 忽略范围参数的长期 Bug，已由社区贡献修复，审查中。
5.  **本地 STT 引擎 (FunASR/SenseVoice)** (`#1102`)：**战略性探索**。License 已澄清 (Apache-2.0 兼容)，但引入 Python/Rust 混合推理栈风险较大，大概率不会进下一版，适合单独孵化分支或插件化。

---

## 7. 用户反馈摘要

从有限评论中提炼的真实痛点：
*   **会话管理刚性不足** (#1132)：“无法清理主会话” → 用户积累历史会话时缺乏治理手段，影响检索与隐私。
*   **本地模型落地门槛高** (#1098, #1136 隐性反馈)：Gemma 4、oMLX 等小模型输出格式不标准 (字符串化标量、显式 Null)，框架兼容层缺失，导致“开箱即用”体验断层。
*   **企业集成认证细节坑** (#1119/1120)：Notion/Linear 等主流 SaaS 的 MCP 实现不完全标准 (resource_metadata 在 Header)，框架需具备鲁棒的发现机制。
*   **构建依赖膨胀** (#1139 隐性反馈)：可选功能 强制拉取重型依赖，影响轻量级部署场景 (嵌入式/Edge)。

---

## 8. 待处理积压 —— ⚠

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-07-14

> **数据来源**：agentscope-ai/QwenPaw（注：输入提及 CoPaw/agentscope-ai/CoPaw，但全部实时数据指向 QwenPaw 仓库，下文统一按 QwenPaw 统计）  
> **统计窗口**：2026-07-13 至 2026-07-14（UTC）  
> **核心指标**：Issues 50 条（新/活跃 21，关闭 29）| PRs 50 条（待合并 16，已合并/关闭 34）| 新版本 1 个

---

## 1. 今日速览
- **版本发布**：v2.0.0.post1 紧急修正版发布，主打修复 OpenAI formatter 对 `ToolResultBlock` 序列化导致的 400 错误、浏览器自动填充干扰 provider 搜索、遗留会话兼容性等核心回归问题。  
- **社区情绪**：v2.0.0 正式版发布后 **“回归缺陷集中爆发”**——24 h 内新增 21 个活跃 Issue，其中 8 个直接指向 `MODEL_EXECUTION_ERROR: Messages with role 'tool' must be a response to a preceding message with 'tool_calls'`，另有沙箱权限、会话丢失、Channel 渲染、环境变量失效等高频痛点。  
- **维护响应**：核心团队同天合并 34 个 PR，覆盖 Goal 门控重置、TUI 点击崩溃、会话迁移批量写入、MCP 凭据迁移、工具结果截断提示统一等 10+ 关键修复，并新开 6 个修复类 PR 进入审查，**修复吞吐率极高**。  
- **架构信号**：Sandbox 与 Tool Guard 进入“可用性重构期”（#6023 Tracking Issue），Windows 沙箱新后端（#5931）、工具审批粒度拆分（#6096）、后台任务超时忽略（#6056）同步推进，显示 v2.1 将以“降低摩擦、保持安全”为主线。  
- **健康度评级**：🟡 **关注期**——发布后缺陷密度高但修复速度快，若 v2.0.0.post1 能稳住核心报错，社区信心可快速恢复。

---

## 2. 版本发布
| 版本 | 发布时间 | 关键变更 | 破坏性变更 | 迁移提示 |
|------|----------|----------|------------|----------|
| **v2.0.0.post1** | 2026-07-14 | 1. 版本号递增至 2.0.0.post1 ([#6007](https://github.com/agentscope-ai/QwenPaw/pull/6007))<br>2. 修复 provider 搜索输入被浏览器自动填充 ([#6011](https://github.com/agentscope-ai/QwenPaw/pull/6011))<br>3. 修复遗留会话加载逻辑（细节截断，推测涉及 `ToolResultBlock` 兼容） | 无显式破坏性变更，属补丁级 | 直接覆盖安装；若仍遇 `tool_calls` 400 错误，请清理本地会话缓存或执行 `/clear` |

---

## 3. 项目进展（今日合并/关闭的重点 PR）
| PR | 类型 | 核心价值 | 关联 Issue |
|----|------|----------|------------|
| [#6093](https://github.com/agentscope-ai/QwenPaw/pull/6093) / [#6094](https://github.com/agentscope-ai/QwenPaw/pull/6094) | **Fix** | `/new` 与 `/clear` 现在会重置 Goal 迭代门控（`TERMINATE` 标记、doom-loop 计数器），解决“完成 /goal 后后续对话全被拦截” | #6082 |
| [#6069](https://github.com/agentscope-ai/QwenPaw/pull/6069) | **Fix** | TUI 流式输出时点击/选中不再崩溃（Textual 8.2.8 兼容） | #6008 |
| [#6021](https://github.com/agentscope-ai/QwenPaw/pull/6021) | **Perf** | 会话历史迁移改为批量事务，大库启动从“数分钟”降至“秒级” | — |
| [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) | **Fix** | 统一使用 `ToolResultPruningMiddleware` 处理截断提示，修复 scroll 模式下 `ToolResultLimiter` 失效 & 误触发 `recall_history` | #5946, #5929, #6009 |
| [#6091](https://github.com/agentscope-ai/QwenPaw/pull/6091) | **Fix** | MCP 驱动迁移时将 `${VAR}` 正确解析为凭据引用，避免 `Authorization: Bearer ${VAR}` 字面量导致 401 | #6029 |
| [#6060](https://github.com/agentscope-ai/QwenPaw/pull/6060) | **Chore** | 升级 `reme-ai` 至 0.4.1.0，对齐最新记忆/检索特性 | #5950 |
| [#5348](https://github.com/agentscope-ai/QwenPaw/pull/5348) | **Perf** | `env_context` 日期按会话冻结，避免跨天导致 System Prompt 前缀变化、KV Cache 失效 | — |
| [#5341](https://github.com/agentscope-ai/QwenPaw/pull/5341) | **Security** | 内置文件工具强制限定在 Agent Workspace 内，阻断路径遍历 | — |
| [#5716](https://github.com/agentscope-ai/QwenPaw/pull/5716) | **Feat** | 新增通用 Webhook Channel（HMAC-SHA256 双向签名），打通任意 HTTP JSON 入口 | #338 |
| [#5375](https://github.com/agentscope-ai/QwenPaw/pull/5375) | **Feat** | 接入小米米家智能家居，提供完整部署指南与 Agent 模板 | — |

> **进展小结**：今日合并 PR 中 **修复类占 60%+**，性能/安全/新特性各 1-2 个，呈现典型的“发布后稳定化冲刺”画像。

---

## 4. 社区热点（评论/反应 Top 10）
| 排名 | Issue/PR | 标题 | 评论 | 👍 | 核心诉求 |
|------|----------|------|------|----|----------|
| 1 | [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) | **2.0.0 对话产生 MODEL_EXECUTION_ERROR**（tool_calls 缺失） | 11 | 0 | **阻断性回归**——OpenAI formatter 将 `ToolResultBlock` 序列化为 `role=tool` 但上游无 `tool_calls`，导致 400；已关闭（推测随 v2.0.0.post1 修复） |
| 2 | [#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879) | **请求可关闭沙箱开关** | 7 | 0 | 受信设备上沙箱过度限制（甚至无法 `pip install`），期望 UI 开关或配置项；已关闭（可能纳入 #6023 统一重构） |
| 3 | [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) | **v2.0.0 循环执行：反复写入/删除文件** | 7 | 0 | qwen3.7-plus 下 Agent 陷入“写-删-写”死循环，任务无法收敛；**仍 OPEN** |
| 4 | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | **v2.0.0 缺失 SSH Offline / Profiles 404** | 6 | 0 | 从 1.1.12 升级后核心工作流功能 404，**仍 OPEN** |
| 5 | [#6055](https://github.com/agentscope-ai/QwenPaw/issues/6055) | **环境变量不传递 & 前端配置不同步 (Docker)** | 5 | 0 | `SUMMARIZE_WHEN_COMPACT=false` 失效、前端不读本地配置；**仍 OPEN** |
| 6 | [#6034](https://github.com/agentscope-ai/QwenPaw/issues/6034) | **升级 2.0 后多异常：IM 内部错误、自动加内容、tool_calls 400** | 5 | 0 | 综合回归报告，已关闭（部分随 post1 修复） |
| 7 | [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | **Channel 侧分开控制工具调用参数/结果

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-14

---

## 1. 今日速览

*   **整体活跃度：极高**。过去 24 小时内共有 **100 条** 记录更新（50 Issues + 50 PRs），其中新开/活跃 Issue 39 条，待合并 PR 45 条，显示社区处于密集的开发冲刺期。
*   **核心焦点：v0.8.3 发布倒计时**。多个带有 `type:tracker` 标签的 Epic 级 Issue（#7320, #8070, #8071, #8073, #8360, #8362, #8363）均在今日更新并标记为 **CLOSED**，标志着 v0.8.3 里程碑的所有子任务已完成，项目进入最终发布验证阶段。
*   **架构重构持续推进**：核心 PR 集中在 **Channel 插件化架构**（Mirror Channel, WASM Channel）、**Gateway OpenAI 兼容端点**、**Provider 诊断增强** 及 **安全加固**（SSRF 防护, Landlock 沙箱修复）四大方向。
*   **技术债偿还明显**：针对 `channel-line` 缺失 CI 覆盖（#9052）、`models_cache.json` 只读不写（#9046）、Windows Ctrl+C 退出码异常（#9028）等长期潜伏缺陷均有修复 PR 提交。
*   **治理流程规范化**：RFC #6808（Work Lanes/Label Cleanup）持续推进，配合 ADR 审计 Tracker #8691，项目治理向标准化迈进。

---

## 2. 版本发布

**今日无新版本发布。**
*   **状态**：v0.8.3 处于 **Release Closeout** 阶段（参考 #7320）。`CHANGELOG-next.md` 已通过 PR #9054 准备就绪，汇总了 379 个非合并提交。
*   **预期**：待最终发布验证通过后即将发布 v0.8.3。

---

## 3. 项目进展：今日合并/关闭的关键 PR 与 Issue

以下合并/关闭动作标志着 v0.8.3 核心交付物完成：

| 编号 | 类型 | 标题 | 影响范围 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **#8961** | **PR (Bug Fix)** | `fix(runtime): add 20s timeout to model probing, display partial doctor results` | **Runtime/Doctor** - 解决 `doctor` 命令因模型探测挂起导致全量诊断结果丢失的严重可用性问题。 | **CLOSED (Merged)** |
| **#8939** | **PR (Bug Fix)** | `fix(web): eliminate horizontal scrollbar on left sidebar rail` | **Web/UI** - 修复左侧边栏绝对定位 Tooltip 导致的横向滚动条视觉缺陷。 | **CLOSED (Merged)** |
| **#9044** | **Issue (Bug)** | `google_workspace rejects camelCase methods required by gws (batchUpdate)` | **Tools/Google Workspace** - 工具验证逻辑过于严格拒绝合法 API 调用，已确认修复。 | **CLOSED** |
| **#7694** | **Issue (Enhancement)** | `feat(memory): cover storage-reader timestamp and ordering edge cases` | **Memory/Tests** - 内存存储读取器的确定性边缘情况测试覆盖完成。 | **CLOSED** |
| **#7693** | **Issue (Enhancement)** | `feat(zerocode): cover insecure-TLS confirmation flow` | **ZeroCode/Tests/Security** - 不安全 TLS 确认流程的关键用户路径测试覆盖完成。 | **CLOSED** |
| **#7690** | **Issue (Enhancement)** | `feat(provider): cover responses-wire option propagation` | **Provider/Tests** - Provider 非默认构造器及请求选项传播测试覆盖完成。 | **CLOSED** |
| **#8070, #8071, #8073, #8360, #8362, #8363** | **Issues (Trackers)** | **v0.8.3 全系统子 Tracker (Gateway, Runtime, Observability, Provider, Channel, Config)** | **Project Management** - 所有 6 大子 Tracker 全部关闭，里程碑功能冻结确认。 | **ALL CLOSED** |

> **进展评估**：v0.8.3 已从“功能开发”转入“发布验证”阶段。核心基础设施（Channel 插件化、Gateway 兼容性、Observability、Provider 序列化）均已落地。

---

## 4. 社区热点：高讨论度 Issues/PRs 深度分析

### 🔥 Top 1: RFC 治理与流程自动化 (#6808)
*   **链接**：[#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (14 评论)
*   **核心诉求**：建立 **Work Lanes（工作泳道）** 机制，自动化看板流转，清理冗余 Label。旨在解决维护者“手动维护项目管理系统”的痛苦，实现 Issue 自动路由。
*   **进展**：Status `Accepted / rollout in progress`，Rev. 16。这是项目元层面的效能工程，影响后续所有迭代效率。

### 🔥 Top 2: 多租户安全隔离 - Per-sender RBAC (#5982)
*   **链接**：[#5982 [Feature]: Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (10 评论, 更新于今日)
*   **核心诉求**：单实例支撑多用户类别（客户/运营/开发），需隔离 Workspace、Tool Set、Rate Limit、System Prompt。**Risk: High, Priority: P2**。
*   **信号**：企业级部署刚需，架构涉及 Gateway、Agent、Security 核心路径，可能推迟至 v0.9.0 或作为 v0.8.x 实验性功能。

### 🔥 Top 3: 核心瘦身 - 外部化集成 (#6165)
*   **链接**：[#6165 RFC: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) (9 评论)
*   **核心诉求**：将长尾集成迁移至 Skills、MCP Servers、CLI 插件，保持 Core 精简。**Status: Accepted, In Progress**。
*   **关联 PR**：#8855 (Mirror Channel via Plugin `provides`), #8852 (Run WASM Channel Plugins) 正是此 RFC 的落地实践。

### 🔥 Top 4: Slack 线程上下文回溯 (#6055 / #8969)
*   **Issue**：[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) (7 评论) | **PR**：[#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969)
*   **核心诉求**：首次 @Bot 时自动回填 Slack 线程历史 (`conversations.replies`)，解决 `strict_mention_in_thread` 模式下用户需重复 @ 的痛点。
*   **进展**：PR #8969 已开发完成，引入 `thread_context_max_messages` 配置，待 Review 合并。

### 🔥 Top 5: 本地小模型模式优化 (#5287)
*   **链接**：[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (5 评论, 👍 2)
*   **核心诉求**：针对本地小模型（Ollama 等）提供 Compact Prompt、Strict Parser、防 Prompt Leakage 模式。
*   **用户痛点**：👍 2 表明真实用户在本地部署场景下遭遇 Prompt 膨胀导致性能/效果下降。

---

## 5. Bug 与稳定性：今日报告与修复进度

按严重程度排序（S1 阻塞 > S2 退化 > S3 次要）：

| 严重度 | 编号 | 标题 | 组件 | 状态 | 修复 PR |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **S1 (Workflow Blocked)** | **#9035** | Docker Compose Gateway 回环绑定导致端口不可达 | Runtime/Daemon | **Open** (需维护者介入) | 无 |
| **S1 (Workflow Blocked)** | **#9052** | `channel-line` 缺失于 `channels-full` & `ci-all` 导致 CI 盲区 | CI/Channel | **Open** | **[#9053](https://github.com/zeroclaw-labs/zeroclaw/pull/9053)** (已提交修复) |
| **S2 (Degraded)** | **#8973** | **Landlock 沙箱阻塞 Shell 访问 `/dev/null` (Fedora)** | Runtime/Security | **Accepted** | 无 (需内核/配置层面放行) |
| **S2 (Degraded)** | **#9028** | Windows `Ctrl+C` 导致强制退出 (Exit Code 1073741510) | Runtime/CLI | **Accepted** | 无 |
| **S2 (Degraded)** | **#9046** | `models_cache.json` 只读不写，`models refresh` 失效 | Channel | **Open** | 无 |
| **S3 (Minor)** | **#6548** | Channel Runtime 命令回复硬编码英文，绕过 Fluent 本地化 | Channel/i18n | **Accepted** | 无 |
| **S3 (Minor)** | **#9044** | Google Workspace 工具拒绝合法 camelCase 方法名 | Tools | **Closed** | 隐含修复 |

> **关注点**：
> 1.  **#9035 (Docker 网络)** 为 S1 且无 PR，阻塞容器化部署，建议优先排查 `docker-compose.yml` 网络模式或 Gateway 监听地址配置（0.0.0.0 vs 127.0.0.1）。
> 2.  **#8973 (Landlock)** 涉及安全沙箱核心能力，Fedora 环境下 Shell Tool 完全不可用，需尽快给出规则配置修复或文档规避指引。

---

## 6. 功能请求与路线图信号

结合 Issue 讨论热度与已有 PR 进度，判断下一版本（v0.8.3 / v0.9.0）纳入可能性：

| 功能需求 | 来源 Issue | 关联 PR 进度 | 纳入概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Channel 插件化架构** | #6165 (RFC) | **#8855 (Mirror), #8852 (WASM), #8857 (Parity)** 已开发完毕待合并 | **极高 (v0.8.3)** | 核心架构重构，已进入收尾。 |
| **Gateway OpenAI Chat Completions 端点** | #8550 / #8603 | **#8486** (XL, 需 Author Action) | **高 (v0.8.3)** | 生态兼容性关键，已实现核心逻辑。 |
| **Slack 线程上下文回溯** | #6055 | **#8969** (XL, 需 Author Action) | **高 (v0.8.3)** | 用户体验显著提升，实现完备。 |
| **Agent 生命周期事件观测** | - | **#8916** (XL), **#8985** (Slack Progress), **#8905** (In-flight Counter) | **高 (v0.8.3)** | Observability Tracker #8073 核心交付物。 |
| **Provider 失败诊断增强** | #9001 | **#9056** (已提交) | **高 (v0.8.3)** | 开发者体验改进，区分密钥/模型/网络错误。 |
| **Per-sender RBAC (多租户)** | #5982 | 无 | **低 (v0.9.0+)** | Risk High, 设计复杂，需完整安全模型重构。 |
| **本地小模型 Compact Mode** | #5287 | 无 | **中 (v0.8.x 后续)** | 用户呼声明确，实现相对隔离。 |
| **内存体系分离 (Conversation vs Long-term)** | **#9048** (今日新建 RFC) | 无 | **中 (v0.9.0)** | 架构级重构，当前实现混用，需谨慎规划。 |

---

## 7. 用户反馈摘要：真实痛点与场景

从 Issue 评论与描述中提炼：

1.  **容器化部署门槛高** (#9035)：
    *   *场景*：用户 `docker compose up -d` 后端口拒绝连接。
    *   *痛点*：网络模式/监听地址文档不足或默认配置陷阱，导致“构建成功但不可用”的挫败感。
2.  **本地模型推理体验差** (#5287)：
    *   *场景*：Ollama 等小模型部署。
    *   *痛点*：Prompt 膨胀导致上下文窗口溢出/推理慢；工具调用解析容错低；系统指令泄露给用户。
3.  **Slack 协作模式反人类** (#6055)：
    *   *场景*：团队协作线程中使用 Bot。
    *   *痛点*：`strict_mention_in_thread` 开启后，用户必须每条消息都 @Bot，打断对话流。
4.  **Windows 原生体验缺失** (#9028)：
    *   *场景*：Windows Terminal / PowerShell 交互。
    *   *痛点*：`Ctrl+C` 非优雅退出，返回异常码 `0xC000013A` (STATUS_CONTROL_C_EXIT)，破坏脚本自动化流程。
5.  **开发者调试

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*