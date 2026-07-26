# OpenClaw 生态日报 2026-07-26

> Issues: 340 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-26 02:08 UTC

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

# OpenClaw 项目日报 · 2026-07-26

> **数据基准**：过去 24h（2026-07-25 ~ 2026-07-26）GitHub 活动快照  
> **统计口径**：Issues 更新 340 条（新开/活跃 240，已关闭 100），PR 更新 500 条（待合并 280，已合并/关闭 220），新版本 0 个

---

## 1. 今日速览
- **活跃度极高**：单日 840 条 Issue/PR 更新，维护团队与社区贡献者并行推进 **Bug 修复、架构重构、新功能落地** 三条主线，呈现典型的“发布前冲刺/技术债清理”并行态势。
- **核心矛盾聚焦于“会话状态与稳定性”**：Top 50 Issues 中 **P0/P1 级别占比超 40%**，集中在 Gateway 启动失败、SQLite 恢复可靠性、内存泄漏、会话上下文膨胀、Telegram/Slack 消息丢失等生产可用性痛点。
- **安全与信任机制进入实质推进阶段**：Memory Trust Tagging (#7707)、MCP 通道审批 (#78308)、文件系统沙箱 (#7722)、工具调用强制执行 (#45049) 等高优先级安全增强均有 PR 关联或处于 `needs-security-review` 状态，显示项目正从“功能完备”向“企业级可信”演进。
- **技术债偿还显性化**：大量 PR 聚焦于模块拆分（daemon、talk、doctor、qa-lab）、日志结构化、配置 Schema 校准、CI/脚本超时治理，代码库健康度指标正在改善。
- **多模态/多渠道生态补齐加速**：Azure Foundry Realtime Talk (#87325)、WhatsApp 贴纸 (#7476)、IRC 纯文本修正 (#112961)、Mac 端 Dashboard 网关切换 (#113965) 等 PR 表明“一次接入、全渠道运行”愿景落地提速。

---

## 2. 版本发布
**今日无新版本发布**。  
当前最新稳定版为 `2026.7.1` 系列，社区正在验证 `2026.7.1-beta.5` 后续修复；建议关注 `#108435`（Gateway 启动失败）与 `#109145`（HTTP 不接受连接）的闭环情况，作为下一版本发布的门控指标。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#113952](https://github.com/openclaw/openclaw/pull/113952) | **Refactor (UI)** | 统一 Lucide 图标 Stroke 属性，修复 Shadow DOM 下图标不可见 | Control UI 全平台 | ✅ **Closed** |
| [#113882](https://github.com/openclaw/openclaw/pull/113882) | **Fix (UI)** | 归档会话保持侧边栏选中态，Composer 替换为只读提示 | 会话管理 UX | ✅ **Closed** |
| [#113937](https://github.com/openclaw/openclaw/pull/113937) | **Refactor (Doctor)** | 将 2211 行健康检查模块拆分为独立贡献器 | 可观测性/运维 | ✅ **Closed** |
| [#113947](https://github.com/openclaw/openclaw/pull/113947) | **Fix (UI)** | 只读看板隐藏不可用的 Chat 侧边栏控件 | 多租户/协作场景 | ✅ **Closed** |
| [#113951](https://github.com/openclaw/openclaw/pull/113951) | **Fix (UI)** | 恢复推送通知点击的作用域导航，修复 SPA 路由丢失 | 移动端/桌面端通知 | ✅ **Closed** |
| [#113957](https://github.com/openclaw/openclaw/pull/113957) | **Feat (Core)** | 采纳外部 Pi/OpenCode 会话时检测人类新增轮次 | 会话互操作/迁移 | ✅ **Closed** |
| [#113967](https://github.com/openclaw/openclaw/pull/113967) | **Refactor (Talk)** | 拆分实时语音中继 6 大所有权关注点（1647 行 → 多模块） | 语音交互稳定性 | ✅ **Closed** |
| [#113970](https://github.com/openclaw/openclaw/pull/113970) | **Refactor (Meetings)** | 统一 Google Meet/Teams/Zoom 探针与解析器 | 会议集成维护成本 | ✅ **Closed** |
| [#113857](https://github.com/openclaw/openclaw/pull/113857) | **Docs (Auto-QA)** | 使自主 QA 战役证据可验证，防止误判 | CI/CD 可信度 | ✅ **Closed** |
| [#112961](https://github.com/openclaw/openclaw/pull/112961) | **Fix (IRC)** | 出站消息去 Markdown，发送纯文本 | IRC 渠道兼容性 | ✅ **Closed** |

> **整体推进评估**：今日合并 PR 以 **UI 体验修复、核心模块解耦、跨渠道兼容性** 为主，显著降低了技术债利息，为后续大功能（Readiness Framework、Memory Trust、MCP Approval）落地铺平架构基础。

---

## 4. 社区热点（高互动 Issue/PR 深度解析）

| # | 标题 | 评论/👍 | 核心诉求 | 当前阶段 |
|---|------|---------|----------|----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **Memory Trust Tagging by Source** | 21 💬 / 0 👍 | 为记忆条目打来源信任等级，防御记忆投毒攻击 | `needs-security-review` `needs-product-decision` |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | **Channel-mediated approval for MCP tool calls** | 15 💬 / 1 👍 | 让 MCP 服务端复用 `/approve` 审批流，统一状态变更授权 | `linked-pr-open` `needs-security-review` |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | **SQLite snapshot restore 缺乏端到端崩溃/身份保证** | 13 💬 / 0 👍 | 恢复报成功但父目录未持久化，清理仍用旧路径 → 数据丢失风险 | **P1 / maintainer** `impact:data-loss` |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | **v2026.7.1 Gateway 启动失败** | 11 💬 / 2 👍 | 回归：systemd/Ollama/手动启动均报 `gateway did not start on 127.0.0.1` | **P0 / regression** `impact:ux-release-blocker` |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | **Session context bloat：bootstrap 文件每轮重复注入** | 10 💬 / 2 👍 | 每轮消耗 20-30% token，多轮对话严重挤占上下文 | `clawsweeper-recovery-stuck` |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | **Filesystem Sandboxing Config** | 10 💬 / 4 👍 | 配置化文件系统访问控制（允许/拒绝路径） | `needs-security-review` `clawsweeper-recovery-stuck` |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | **Models: fully dynamic model discovery (OpenRouter + beyond)** | 10 💬 / 3 👍 | 取代静态模型目录，支持快速变更的提供商目录发现 | `clawsweeper-recovery-stuck` |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | **Gateway heap 增长至 1GB+ 导致 cron 静默失败** | 10 💬 / 1 👍 | 空闲态内存泄漏 → event-loop 饥饿 → web_fetch/search 超时无上报 | **P1 / stale** `impact:crash-loop` |
| [#45049](https://github.com/openclaw/openclaw/issues/45049) | **Agent loop 允许模拟工具调用而非强制真实调用** | 7 💬 / 1 👍 | 模型输出文本模拟 tool call，绕过执行引擎，安全隐患 | **P1** `impact:security` |
| [#113466](https://github.com/openclaw/openclaw/issues/113466) | **/new 和 /reset 不真正创建新会话 (2026.7.1-2)** | 6 💬 / 0 👍 | 仅触发钩子返回成功，未调用 `performGatewaySessionReset` | **P1** 新报告 |

> **热点信号汇总**：  
> 1. **安全左移**成共识：Trust Tagging、MCP Approval、Filesystem Sandbox、Tool Call Enforcement 四大议题同步推进，预示下个大版本将以“可信执行环境”为主题。  
> 2. **会话/状态可靠性**成最大痛点：SQLite 恢复、Gateway 启动、Context Bloat、Session Reset 失效、Heap Leak 形成“稳定性五连击”，阻碍生产落地。  
> 3. **模型生态开放度**需求强烈：动态发现、OpenRouter 成本透传 (#9016)、Azure Foundry Talk (#87325) 呼吁厂商中立的统一抽象层。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 / Release Blocker** | [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway 完全无法启动 | ❌ 无 | 回归于 2026.7.1，影响所有部署方式 |
| **P0 / Release Blocker** | [#109145](https://github.com/openclaw/openclaw/issues/109145) | HTTP 监听但不接受连接 | ❌ 无 | beta.5 专属，疑似 socket accept loop 死锁 |
| **P0 / Data Loss** | [#95515](https://github.com/openclaw/openclaw/issues/95515) | 升级 6.8→6.9 写入非法 `groupAllowFrom` 破坏邮件配置 | ❌ 无 | 已发版版本间迁移 Bug |
| **P1 / Crash Loop** | [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大 SQLite 转录清理阻塞事件循环 | ❌ 无 | 需异步化/分片清理 |
| **P1 / Message Loss** | [#113315](https://github.com/openclaw/openclaw/issues/113315) | Telegram 更新被 ack 但无 ingress/spool/dispatch 永久丢失 | ❌ 无 | 偏移量持久化与处理原子性缺失 |
| **P1 / Session State** | [#113466](https://github.com/openclaw/openclaw/issues/113466) | `/new` `/reset` 伪装成功实则无效 | ❌ 无 | 核心 CLI 命令失效 |
| **P1 / Memory Leak** | [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap 12h 从 558MB 涨到 1073MB+ | ❌ 无 | 导致 cron 静默失败，需 heap profile 定位 |
| **P2 / Regression** | [#112906](https://github.com/openclaw/openclaw/issues/112906) | `richMessages: true` 下 `details` 标签渲染崩坏 | ❌ 无 | v2026.7.1 回归 |
| **P2 / Config** | [#103162](https://github.com/openclaw/openclaw/issues/103162) | 文档配置项被 6.11 Schema 拒绝 | ❌ 无 | 文档与实

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告 · 2026-07-26

---

## 1. 生态全景

当前生态呈现**“头部项目冲刺企业级可信、腰部项目聚焦体验闭环、长尾项目探索边缘协议”**的分层演进态势。OpenClaw、NanoBot、ZeroClaw 等核心项目同步进入“安全左移、稳定性收敛、架构解耦”的发布前整固期，P0/P1 级缺陷修复与安全增强成为普遍主线。多模态接入、多渠道聚合、MCP/工具调用标准化、本地化/边缘部署能力已成共识性基建。社区整体从“功能竞赛”转向“生产可用性与信任机制”竞争，版本发布节奏趋于谨慎，技术债偿还显性化。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新(新/闭) | PR 更新(开/合) | Release | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 340 (240/100) | 500 (280/220) | 无 (验证 beta.5) | 🟡 **高活跃/稳定性攻坚期** | 会话状态可靠性、安全信任机制、技术债偿还、多渠道补齐 |
| **NanoBot** | 0 / 0 | 12 (5/7) | **v0.3.0 发布** | 🟢 **高质量交付/发布后稳定期** | Agency 里程碑、WebUI 一键启动、CI 落地、配置数据完整性债务 |
| **Hermes Agent** | 50 (47/3) | 50 (33/17) | 无 (v0.19.0) | 🟡 **高活跃/Windows 回归修复期** | Windows 启动/登录循环、架构重构、安全响应、会话一致性 |
| **ZeroClaw** | 19 (16/3) | 50 (48/2) | 无 (v0.8.4 准备中) | 🟢 **高活跃/维护列车冲刺期** | 安全旁路修复、插件化架构、CI 稳定性、发布自动化 |
| **IronClaw** | 11 (7/4) | 20 (11/9) | 无 (预发布破坏性变更) | 🟢 **高活跃/v1 冲刺质量关** | WebUI 性能/无障碍/i18n、Reborn 架构解耦、错误可恢复性契约 |
| **NanoClaw** | 2 / 0 | 11 (10/1) | 无 (v0.14.2) | 🟢 **高响应/基建加固期** | 上下文完整性修复、容器安全基线、技能生态扩展 |
| **LobsterAI** | 9 (1/8) | 11 (2/11) | 无 (积累中) | 🟢 **中活跃/体验债清理期** | Windows 安装器安全、Cowork 会话细节打磨、文件夹上下文需求 |
| **Moltis** | 0 / 0 | 5 (3/2) | 无 | 🟢 **中活跃/协议扩展期** | Slack 企业级可观测性、Nostr/NIP-29 互操作、向量记忆后端 |
| **CoPaw (QwenPaw)** | 7 / 0 | 8 (8/0) | 无 (v2.0.1) | 🔴 **黄色预警/核心阻塞修复期** | MCP 传输硬编码、模型连接全面失败、Edge/Wayland 高 CPU |
| **PicoClaw** | 1 / 0 | 3 (1/2) | 无 (v0.3.1) | 🟢 **低活跃/稳定性收敛期** | Matrix 重连机制缺失、ARMv7/Simplex 适配、工具链扩展 |
| **NullClaw** | - | - | - | ⚪ **静默** | 过去 24h 无活动 |
| **TinyClaw** | - | - | - | ⚪ **静默** | 过去 24h 无活动 |
| **ZeptoClaw** | - | - | - | ⚪ **静默** | 过去 24h 无活动 |

> **注**：OpenClaw 规模量级显著高于其他项目（Issue/PR 总量约为其他头部项目 5-10 倍），体现其作为核心参照项目的社区广度与工程复杂度。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 对比同类优势/差异 |
| :--- | :--- | :--- |
| **技术路线** | **“重网关、重状态、重渠道、重安全”的全栈一体化平台** | 对比 NanoBot/ZeroClaw 等“轻核心+插件”架构，OpenClaw 将 Gateway、Session、Memory、Channel 内置耦合，提供开箱即用的企业级会话状态管理（SQLite 快照、上下文压缩、多设备同步）。 |
| **社区规模** | **生态核心枢纽，贡献者基数最大，Issue/PR 吞吐量断层领先** | 单日 840 条更新量级远超 ZeroClaw (69)、IronClaw (31)、Hermes (100)，形成“内核团队+外围贡献者”双轮驱动，文档、CI、安全审查流程最成熟。 |
| **功能广度** | **覆盖面最广：IM 聚合(10+)、会议智能、语音实时、MCP 网关、多租户控制台** | 竞品多聚焦单一交互模式（CLI/WebUI/IM），OpenClaw 独家推进“一次接入、全渠道运行”及 Control UI 可视化运营能力。 |
| **演进阶段** | **从“功能完备”向“企业级可信”跨越的关键窗口期** | Memory Trust Tagging、MCP Approval、Filesystem Sandbox 同步推进，安全左移深度超越 NanoBot (v0.3.1 才清理兼容性) 与 ZeroClaw (Verifiable Intent 尚有缺口)。 |
| **风险敞口** | **遗留架构技术债利息最高（会话膨胀、Gateway 启动、SQLite 恢复）** | 单体内耦合导致回归风险放大（P0 级 Gateway 启动失败持续阻断发布），微服务化拆分（daemon/talk/doctor）尚在进行中。 |

---

## 4. 共同关注的技术方向（跨项目收敛）

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **安全与信任机制** | **OpenClaw, NanoBot, ZeroClaw, IronClaw, NanoClaw, Hermes** | **Memory Trust Tagging (OC)、MCP Channel Approval (OC)、Filesystem Sandbox (OC/NB/ZC)、Tool Call Enforcement (OC)、Container Hardening (NC/ZC)、Signed Intent (IC)、Verifiable Intent (ZC)**。核心共识：从“模型输出可信”转向“执行环境可信、数据溯源可信、授权链路可信”。 |
| **会话/状态可靠性** | **OpenClaw, NanoBot, Hermes, ZeroClaw, NanoClaw, CoPaw** | **SQLite 恢复一致性 (OC)、Context Bloat 治理 (OC)、Session Reset 失效 (OC/HC)、消息不丢失/路由正确性 (NB/ZC/HC/CP)、上下文完整性 (NC)**。生产落地的首要拦截项。 |
| **MCP / 工具调用标准化** | **OpenClaw, NanoBot, ZeroClaw, IronClaw, CoPaw, LobsterAI** | **动态模型发现 (OC)、Streamable HTTP 传输修复 (CP)、MCP JSON 导入 (LA)、OpenAI 兼容网关 (ZC/IC)、工具可见性/预览 (NC)**。构建厂商中立的工具生态接入层。 |
| **多渠道/多模态聚合** | **OpenClaw, Hermes, ZeroClaw, Moltis, PicoClaw, LobsterAI** | **Azure Foundry Realtime Talk (OC)、WhatsApp/IRC/Simplex/Nostr 适配 (OC/PC/MT/PC)、Telegram/Slack/Matrix/Discord 能力对齐 (HC/ZC/MT/IC)、语音/视频会议集成 (OC)**。 |
| **本地化/边缘部署** | **NanoBot, PicoClaw, ZeroClaw, NanoClaw, CoPaw** | **一键 WebUI/桌面安装 (NB/CP)、ARMv7/9router 支持 (PC)、Wasmtime 插件/容器沙箱 (ZC/NC)、Windows 原生沙箱/安装器加固 (CP/LA)**。降低私有化部署门槛。 |
| **架构解耦与插件化** | **OpenClaw, ZeroClaw, Hermes, IronClaw, Moltis** | **模块拆分/Doctor/Talk/QA-Lab (OC)、Everything is Plugin (ZC)、Extension Host 解耦 (IC/HC)、Reborn 微内核 (HC)、Nostr/Slack 适配器模块化 (MT)**。应对复杂度爆炸。 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级全能中台**：IM 聚合、会议纪要、知识库、多租户运营、安全合规 | 企业 IT、运维团队、需要私有化部署全套协作套件的组织 | **单体大仓 + 内置 Gateway/State/Channel**；重状态持久化（SQLite/向量）、重运维工具链。 |
| **NanoBot** | **极致个人体验**：一键启动、WebUI 中心、流式交互、子代理协作、桌面原生感 | 高阶个人开发者、追求“本地优先”无缝体验的 Power User | **Rust 核心 + TypeScript WebUI**；`nanobot webui` 统一入口，强调零配置、状态可视化、Agency 自主性。 |
| **ZeroClaw** | **可组合自动化引擎**：插件化、Wasmtime 沙箱、Verifiable Intent、FinOps 核算、多 Agent 编排 | 构建垂直领域 Agent 平台的开发者、需要强隔离与可审计执行的场景 | **Workspace + Plugin (WASM/Native)**；“Everything is Plugin”，Channel/Source/Provider 统一抽象，强调编译期安全。 |
| **IronClaw** | **产品级交付质量**：WebUI 性能/无障碍/i18n、错误可恢复性契约、Reborn 微内核、Mutation Testing | 面向终端用户发布商业化桌面/网页产品的团队 | **Rust 工作空间 + Leptos WASM**；极度重视 Bundle Size、Focus Management、Conformance Matrix、Release 自动化。 |
| **Hermes Agent** | **开发者生产力增强**：Curator 技能、话题感知压缩、Claude SDK 集成、Nostr/Buzz 去中心化 | 追求极客可定制、本地模型优先、去中心化身份的开发者群体 | **单二进制 + 内置技能市场**；话题级上下文压缩、Nostr 原生身份、Claude Agent SDK Provider。 |
| **NanoClaw** | **轻量容器化运维助手**：容器安全基线、技能生态、Opencode 兼容、GitHub/飞行值机等运维技能 | SRE/平台工程师、需要在 K8s/容器环境运行 Agent 自动化运维任务的团队 | **容器优先**；默认 `--cap-drop=ALL`、技能即容器镜像、与 Opencode 协议对齐。 |
| **LobsterAI** | **知识工作桌面客户端**：Cowork 会话管理、MCP 配置可视化、定时任务、多模型路由、Windows 分发安全 | 知识工作者、需要 GUI 管理提示词/会话/工具的非极客用户 | **Electron + Rust 后端**；重 UI 细节（时间分组、全文搜索、导出、工具块折叠）、Windows 代码签名/防劫持。 |
| **Moltis** | **协议互操作枢纽**：Matrix/Nostr/Slack/IRC 网关、向量记忆、去中心化身份 | 自建通讯基础设施、追求数据主权、跨协议互联的社区/团队 | **Go 微服务 + 适配器模式**；NIP-29/NIP-42 协议原生支持、zvec/redb 嵌入式向量库。 |
| **CoPaw (QwenPaw)** | **模型即服务控制台**：ReMe 记忆重排、浏览器自动化 SDK、MCP 管理、模型连接测试 | 依赖通义/阿里云模型生态、需要浏览器自动化与记忆增强的企业开发者 | **Rust + React Console**；ReMe 记忆引擎、Control/Execution Plane 分离浏览器 SDK、MCP 状态客户端。 |
| **PicoClaw** | **边缘设备轻量 Agent**：ARMv7 支持、Matrix/Simplex/9router、Google Calendar/Email/System Stats 工具 | 树莓派/嵌入式设备部署、需要基础 IM 聚合与系统工具的轻量场

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-26

---

## 1. 今日速览

**核心里程碑：** NanoBot 正式发布 **v0.3.0** 版本，历经 260 个 PR 合并与 38 位新贡献者参与，标志着智能体核心能力（Agency）的重大跃升。  
**交付重心：** 版本发布与收尾工作占主导，7 个 PR 于今日合并/关闭，涵盖发布准备、文档重构、CI 落地、WebUI 体验闭环及关键稳定性修复。  
**活跃度评估：** **高**。虽 Issue 新开为 0，但核心维护者（Re-bin, chengyongru, yu-xin-c 等）在发布窗口期高密度推进 12 个 PR，其中 5 个仍在审查中（含 P1 级 Bug 修复与沙箱增强），显示发布后维护节奏未减。  
**社区信号：** 长期悬而未决的 CI Coverage (#1131) 与配置数据丢失 (#1073) 今日同步获得 PR 落地或推进，技术债偿还明显。  
**健康度：** 发布流程规范（兼容性窗口显式管理、文档先行）、回归修复及时（WebUI 子代理可见性、Heartbeat 路由），项目处于**高质量交付期**。

---

## 2. 版本发布：v0.3.0 “Agent Gained Agency”

| 维度 | 详情 |
| :--- | :--- |
| **发布标签** | `v0.3.0` ([Release Notes](https://github.com/HKUDS/nanobot/releases/tag/v0.3.0)) |
| **核心亮点** | **智能体获得自主性**；一键启动体验：`nanobot webui` 自动完成本地 WebUI 准备、网关启动、浏览器工作台打开。 |
| **规模统计** | 260 PRs Merged，38 New Contributors。 |
| **破坏性变更** | **无破坏性变更**。PR #5083 显式将 3 项兼容性清理（遗留会话路径回退、 `agents.defaults.maxMessages` 警告、遗留配置键）推迟至 `v0.3.1`，**v0.3.0 为最终兼容窗口**，运行时行为保持不变。 |
| **迁移建议** | 现有用户可直接升级，无需配置迁移。建议关注 `v0.3.1` 发布时的清理公告。 |
| **快速入口** | `nanobot webui`（新用户推荐）、`nanobot gateway`（运维/服务入口）、交互式 `nanobot` CLI。 |

---

## 3. 项目进展：今日合并/关闭的关键 PR（7 个）

| PR | 类型 | 核心推进内容 | 对项目进度的贡献 |
| :--- | :--- | :--- | :--- |
| **[#5081](https://github.com/HKUDS/nanobot/pull/5081)** `chore(release): prepare v0.3.0` | **发布工程** | 版本号 0.2.2 → 0.3.0；Composer Model Badge 布局修复（内在宽度替代固定 92px）；长按预设切换器保留。 | **里程碑落地**，完成版本冻结与构建元数据更新。 |
| **[#5082](https://github.com/HKUDS/nanobot/pull/5082)** `docs(readme): clarify WebUI, gateway, and CLI quick starts` | **文档/体验** | 确立 `nanobot webui` 为新用户首选路径；澄清 WebUI 前/后台生命周期；保留 `gateway` 作为 OpenClaw 风格入口。 | **降低新用户认知负载**，统一对外口径，配合发布同步上线。 |
| **[#5085](https://github.com/HKUDS/nanobot/pull/5085)** `feat: open WebUI after fresh desktop install` | **核心体验** | 全新一键安装后自动执行 `nanobot webui --yes`（桌面浏览器环境下）；SSH/Headless/存量配置保留向导；`NANOBOT_SKIP_WIZARD=1` 优先级不变。 | **实现 Release Notes 承诺的“最快体验路径”**，关闭首次使用断层。 |
| **[#4696](https://github.com/HKUDS/nanobot/pull/4696)** `Smooth WebUI streaming with state-driven viewport motion` | **WebUI/UX** | 流式 Token 即时渲染 + 视口平滑跟随（帧合并、缓动、持续重定向）；显式建模滚动所有权（Prompt 锚定、输出跟随、轮次完成、导航、历史）。 | **大幅提升流式输出阅读体验**，解决长输出抖动/丢失焦点痛点。 |
| **[#4954](https://github.com/HKUDS/nanobot/pull/4954)** `fix(webui): keep late subagent turns visible` | **回归修复/P1** | 子代理生成时保留原 WebUI 交付元数据；晚到的子代理结果分配新 Turn ID 并重新派发；运行态/进度/流式/结束/空闲全链路恢复 WebSocket 路由。 | **修复多轮协作场景下子代理结果“消失”严重 Bug**，保障 Agency 可观测性。 |
| **[#1284](https://github.com/HKUDS/nanobot/pull/1284)** `Add CI workflow with quality checks and coverage` | **工程基建** | 引入 GitHub Actions CI（PR/Push 自动测试）；代码质量/覆盖率工具链；工具验证测试。 | **补全长期缺失的 CI 闭环**（响应 Issue #1131），为后续重构护航。 |
| **[#5083](https://github.com/HKUDS/nanobot/pull/5083)** `chore: defer compatibility cleanup to v0.3.1` | **版本治理** | 将 3 项兼容清理 TODO 显式迁移至 v0.3.1；标记 v0.3.0 为最终兼容窗口。 | **规范化发布节奏**，避免在大版本混入破坏性变更，提升用户信任。 |

> **整体进度判断：** v0.3.0 核心交付（Agency、WebUI 一键启动、流式体验、子代理可见性、CI 基建）已全部落地，**版本质量高于预期**；5 个 Open PR 多为 P1 级修复与沙箱增强，指向 v0.3.1 稳定性迭代。

---

## 4. 社区热点：高关注度 Issues/PRs 分析

| 对象 | 状态 | 互动/关注点 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **[Issue #1131](https://github.com/HKUDS/nanobot/issues/1131)** `CI Test Coverage` | **Closed** (by #1284) | 4 条评论，创建于 2026-02-24，长达 5 个月。 | **工程基建诉求**：明确 CI 是否自动运行、强制检查项（单测/Lint/覆盖率）、覆盖率门槛。PR #1284 一次性落地，体现维护者对技术债“一次性清零”偏好。 |
| **[PR #1073](https://github.com/HKUDS/nanobot/pull/1073)** `fix: preserve unknown config keys when saving` | **Open** (Conflict) | 创建于 2026-02-23，长期未合并。 | **数据完整性诉求**：`save_config()` 丢弃未知键（如自定义 Provider `openai-codex`），导致用户手动配置静默丢失（#1023 Bug 2）。虽标记 Conflict，但涉及用户数据安全，**建议优先解冲突合并**。 |
| **[PR #4928](https://github.com/HKUDS/nanobot/pull/4928)** `fix(heartbeat): route unified sessions to last channel` | **Open** (P1, Bug) | 近期更新频繁，关联统一会话架构。 | **多渠道消息路由可靠性**：Heartbeat 需精准送达最后用户 Channel，避免自动化轮次覆盖。核心通路稳定性诉求。 |
| **[PR #5084](https://github.com/HKUDS/nanobot/pull/5084)** `fix(agent): preserve pending message runtime context` | **Open** (P1, Bug) | 刚创建即关联 #4064。 | **排队消息上下文保真**：中途用户消息入队时需携带完整 Runtime Context（Channel、Chat、Sender、Metadata、Workspace 等），防止 Provider 侧信息丢失。 |

> **热点总结：** 社区核心关注点集中在 **“配置数据不丢失”**、**“多渠道/统一会话路由正确性”**、**“CI 基建补全”** 三大基础设施议题，而非新功能提案，反映项目处于**夯实地基、规模化交付**阶段。

---

## 5. Bug 与稳定性：今日修复与遗留风险

| 严重级 | 问题 | 相关 PR | 状态 | 影响面 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (数据丢失风险)** | `save_config()` 静默丢弃未知配置键（自定义 Provider 等） | [#1073](https://github.com/HKUDS/nanobot/pull/1073) | **Open / Conflict** | 所有手动修改配置文件的高级用户/插件开发者。**建议 v0.3.1 优先解冲突合并**。 |
| **P1 (核心功能回归)** | 统一会话下 Heartbeat 路由错误，发往错误/失效 Channel | [#4928](https://github.com/HKUDS/nanobot/pull/4928) | **Open** | 多平台（Telegram/Discord/CLI）混用场景，导致心跳超时、会话假死。 |
| **P1 (核心功能回归)** | 代理排队消息丢失 Runtime Context（Channel/Chat/Metadata/Workspace） | [#5084](https://github.com/HKUDS/nanobot/pull/5084) | **Open** | 并发/中断场景下子任务上下文断裂，导致工具调用失败或权限异常。 |
| **P1 (已修复)** | WebUI 晚到的子代理 Turn 不可见/状态不同步 | [#4954](https://github.com/HKUDS/nanobot/pull/4954) | **Closed (Merged)** | 多智能体协作核心路径，**v0.3.0 已修复**。 |
| **P2 (体验/边缘)** | `at` 类型定时任务因 LLM 延迟轻微过期即被丢弃，未执行 | [#3035](https://github.com/HKUDS/nanobot/pull/3035) | **Open / Conflict** | 定时任务可靠性。引入 10 分钟宽限窗口，过期 <10min 立即执行。 |
| **P2 (沙箱限制)** | `bwrap` 沙箱无法访问 `~/.local/bin`、`~/.cargo/bin` 等用户级工具目录 | [#4625](https://github.com/HKUDS/nanobot/pull/4625) | **Open** | 需要自定义工具链的开发者部署场景。新增 `tools.exec.sandbox.extraBindRoots` 配置。 |

> **稳定性结论：** v0.3.0 发布版本**无已知 P0/P1 阻塞性 Bug**（上述 P1 均为 Open PR 修复中，未释放）。但 **#1073 配置丢失风险** 存在时间最长、影响面最广，强烈建议在 v0.3.1 热修复中解决。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 落地可能性 | 预测版本 | 依据 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #4625** | `bwrap` 沙箱支持额外绑定根目录（`~/.local/bin` 等） | **极高** | v0.3.1 | PR 已完备，解决实际部署痛点，无破坏性，标准增强。 |
| **PR #3035** | Cron `at` 任务宽限窗口（10min）防止轻微过期丢弃 | **高** | v0.3.1 | 逻辑清晰，有默认常量，解决 LLM 延迟导致的定时任务不可靠。 |
| **PR #1073** | 配置保存保留未知 Key（防数据丢失） | **极高** | v0.3.1 (Hotfix) | 数据安全底线，虽冲突但维护者近期活跃处理类似债务（#1131→#1284）。 |
| **Issue #1131 / PR #1284** | CI 强制覆盖率门槛、质量红线 | **进行中** | v0.3.x 持续 | 基建已落地，后续将逐步提高覆盖率阈值，纳入合并保护。 |
| **PR #5082/5085** | WebUI 入口多模态适配（桌面自动打开 vs SSH 向导） | **已完成** | v0.3.0 | 发布同步交付，后续可能优化向导交互细节。 |
| **隐性信号** | 兼容性清理（Legacy Session Path、MaxMessages 警告、Legacy Config Keys） | **确定** | **v0.3.1** | PR #5083 显式承诺，破坏性变更窗口已开启。 |

> **路线图推断：** **v0.3.1 将是“稳定性与兼容性清理版”** —— 合并 #1073、#4625、#3035

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-26

---

## 1. 今日速览

- **整体活跃度：极高** —— 过去 24 小时内 Issues 与 PR 各更新 50 条，合并/关闭 PR 17 个，新开/活跃 Issue 47 个，显示核心团队与社区贡献者正在并行推进多条主线。
- **平台稳定性压力集中在 Windows**：桌面启动循环（#71226）、Cloud 登录 401 循环（#71491）、更新失败链（#63717）、路径编码问题（#60447, #63177）等 6 个高优先级 Windows 相关 Issue 同日活跃，暗示近期主干引入的变更对 Windows 兼容性产生回归。
- **架构级重构持续推进**：“单网关多智能体”（#62944、#71686）、“Buzz/Nostr 适配器”（#71610）、“Claude Agent SDK Provider”（#65982）三大特性 PR 同步更新，说明 v0.20 里程碑的核心骨架已进入集成测试阶段。
- **安全修复快速响应**：`hermes debug share` 信息泄露（#22016）已关闭；容器权限提升（#71682）、PowerShell 植入攻击面（#71687）两个安全 PR 同日提出并进入审查。
- **无新版本发布**，但已合并 PR 包含“会话命名一致性”（#71672）、“推理 effort 修正”（#71679）等用户可感知的小体验改进，预计将汇入下一周的补丁版本。

---

## 2. 版本发布

> **今日无新版本发布**。最近一次 Release 仍为 v0.19.0（对应提交 `07e97d2`，见 #71491）。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#62660](https://github.com/NousResearch/hermes-agent/pull/62660) | **Feature** | **话题感知上下文压缩**：为多话题会话引入分话题摘要，避免单一扁平摘要丢失早期细节 | `comp/agent`, `comp/cli`, `area/sessions`, `area/compression` | **CLOSED (merged)** |
| [#71679](https://github.com/NousResearch/hermes-agent/pull/71679) | **Bugfix** | **Desktop 遵守配置的 `reasoning_effort`**：修复手动选模型后静默降级为 `medium` 的问题 | `comp/desktop`, `area/config` | **CLOSED (merged)** |
| [#71672](https://github.com/NousResearch/hermes-agent/pull/71672) | **Bugfix** | **⌘T 新标签页会话命名与 ⌘N 对齐**：首条消息发送即命名，消除 “New session” 占位 | `comp/desktop` | **CLOSED (merged)** |
| [#22016](https://github.com/NousResearch/hermes-agent/issues/22016) | **Security** | **移除 `hermes debug share` 暴露隐私数据的风险**：命令已废弃/重写，Issue 标记关闭 | `comp/cli` | **CLOSED** |
| [#64393](https://github.com/NousResearch/hermes-agent/issues/64393) | **Bugfix** | **Curator 状态标签修正**：不再将内置技能误标为 “agent-created” | `comp/cli`, `tool/skills` | **CLOSED** |
| [#65123](https://github.com/NousResearch/hermes-agent/issues/65123) | **Bugfix** | **.env UTF-8 BOM 导致首键静默丢失**：文档/工具链已加入 BOM 检测与剥离 | `comp/cli`, `area/config` | **CLOSED** |

**进展评估**：核心压缩算法（话题感知）、Desktop 体验细节、安全加固三条并行推进，v0.19.1 补丁版本积累了足够合并项。

---

## 4. 社区热点 —— 讨论最活跃的 Issues/PRs

| 排名 | 对象 | 评论/👍 | 核心诉求 | 关联 PR/进展 |
|------|------|---------|----------|--------------|
| 1 | [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) **Telegram MarkdownV2 转义破坏列表渲染** | 7 💬 / 1 👍 | `- item` 被转义为 `\- item` 导致列表不渲染，影响所有 Telegram 用户 | 无对应 PR，需在 `gateway/platforms/telegram/` 增加渲染前还原步骤 |
| 2 | [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) **Dashboard 多标签页会话泄漏 + `/new` 卡死** | 7 💬 | 标签页间会话状态未隔离，`/new` 触发全容器重启，严重影响 Web Dashboard 多任务流 | 暂无 PR，涉及 `comp/dashboard`, `area/sessions` |
| 3 | [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) **`providers` 与 `custom_providers` 双存储导致 CLI/GUI 不一致** | 6 💬 | 两套 Provider 配置并存且显示逻辑分离，用户在 CLI 与 Desktop 看到不同列表，模型版本卡在 Profile | 无 PR，需统一存储或同步展示层 |
| 4 | [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) **Windows Desktop 启动循环：WebSocket 连即断** | 5 💬 | v0.19.0 后 Windows 11 必现，Renderer 触发重置循环，无法进入应用 | 无 PR，标记 `P1`, `sweeper:risk-platform-windows` |
| 5 | [#71491](https://github.com/NousResearch/hermes-agent/issues/71491) **Windows Cloud 模式 401 循环，从不发起登录** | 3 💬 | `2c1a38a` 正常 → `07e97d2` 失效，仅 Windows 复现，Cookie 处理回归 | 无 PR，需二分定位认证流程变更 |
| 6 | [#71680](https://github.com/NousResearch/hermes-agent/pull/71680) **Curator 自主写入策略一致性修复** | 新建即热 | 解决 #67140：后台审查 Fork 与定时整理共用写入守卫导致策略不一致 | **OPEN**，作者 `teknium1`（核心维护者）自提，极大概率本周合并 |
| 7 | [#71682](https://github.com/NousResearch/hermes-agent/pull/71682) **容器日志软链接 chown 权限提升** | 新建即热 | s6 日志脚本未校验软链接，非特权用户可劫持任意路径 | **OPEN**，安全等级 `P2`，需尽快合并进 Docker 镜像构建 |
| 8 | [#71687](https://github.com/NousResearch/hermes-agent/pull/71687) **托管 uv 引导期 PowerShell 植入攻击面** | 新建即热 | Windows 当前目录可植入 `powershell.exe/.cmd/.bat` 劫持执行 | **OPEN**，同属供应链安全加固系列 |

**热点洞察**：Windows 回归与多平台会话一致性是当前社区痛点密度最高的两大领域；安全类 PR 虽评论数未累积，但由核心维护者直接推进，表明项目对供应链安全的响应机制已成熟。

---

## 5. Bug 与稳定性 —— 今日报告/活跃的缺陷（按严重度）

| 严重度 | Issue | 标题 | 关键信息 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0 / Blocker** | [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) | Windows Desktop 启动循环 | WebSocket 连即断 → Renderer 重置循环，用户完全无法使用桌面端 | ❌ 无 |
| **P0 / Blocker** | [#71491](https://github.com/NousResearch/hermes-agent/issues/71491) | Windows Cloud 登录 401 死循环 | 仅 Windows，`07e97d2` 回归，Cookie 未发起登录流程 | ❌ 无 |
| **P1 / Critical** | [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) | Dashboard 跨标签会话泄漏 + `/new` 挂起 | 需整容器重启恢复，多标签页核心场景受阻 | ❌ 无 |
| **P1 / Critical** | [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) | Windows 更新失败 7 重关联根因 | 3 周持续失败，涉及路径、权限、签名、杀毒软件交互等 | ❌ 无 |
| **P2 / High** | [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) | Provider 双存储 CLI/GUI 不一致 | 配置分裂导致模型版本卡死，迁移路径不明 | ❌ 无 |
| **P2 / High** | [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | Windows `search_files` 绝对路径返回 0 结果 | `rg` + `MSYS_NO_PATHCONV` 冲突，Git Bash 环境必现 | ❌ 无 |
| **P2 / High** | [#48510](https://github.com/NousResearch/hermes-agent/issues/48510) | Windows 3 处 `codex.CMD` 未解析 PATHEXT | `subprocess.run(["codex",...])` 直接报 `FileNotFoundError` | ❌ 无 |
| **P2 / High** | [#60447](https://github.com/Nous

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-26

> 数据窗口：2026-07-25 至 2026-07-26（GitHub 最近 24 小时更新）

---

## 1. 今日速览

*   **整体活跃度：中等偏低**。过去 24 小时无新版本发布，代码合并活动集中在清理长期搁置的 PR（2 个关闭，1 个旧 PR 更新），新增 Issue 仅 1 个，且均为存量问题跟进。
*   **核心风险点**：**Matrix 通道长轮询缺乏重连机制（#3203）**，导致网络波动后服务“静默死亡”，且因主进程存活导致 systemd 无法自动拉起，严重影响生产环境可用性，社区讨论度最高（6 条评论，2 👍）。
*   **功能交付**：近期合并的 PR #339 引入了 Google Calendar、Email 增强及 System Stats 等重量级工具链，但该 PR 从 2 月开到 7 月才关闭，暗示审核流程或 CI 存在瓶颈。
*   **架构扩展**：新增 Simplex 聊天协议支持（PR #3193）及 9router/ARMv7 适配（PR #3205），显示项目正向边缘计算设备与去中心化通讯场景延伸。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `v0.3.1` (commit `2cf030d`)。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR（2 个）

| PR | 标题 | 核心变更 | 影响评估 |
| :--- | :--- | :--- | :--- |
| **[#339](https://github.com/sipeed/picoclaw/pull/339)** | **Added Email Tool, Calendar Integration and System Stats Overview Tool** | **重大功能扩展**。新增 `CalendarTool` (Google Calendar)、增强 `EmailTool` (轮询/内容获取)、新增 `GitHubTool` 与 `SystemStatsTool`。 | **高**。显著增强了 Agent 的工具调用生态，覆盖日程、邮件、代码托管、系统监控四大高频场景。耗时 5 个月合并，建议复盘审核流程。 |
| **[#3205](https://github.com/sipeed/picoclaw/pull/3205)** | **[stale] fix: support 9router gateway responses and add Linux ARMv7 build target** | **硬件/网关适配修复**。修复 OpenAI Compat Provider 对 9router 响应的解析失败；补充 Launcher 的 `linux/arm/v7` 构建目标 (支持 RPi 3 B+)。 | **中**。解决了边缘设备（ARMv7）部署阻断问题，兼容第三方网关，降低嵌入式场景门槛。标记 `stale` 说明长期未响应，现已处理。 |

### 🔄 待合并/更新的 PR（1 个）

| PR | 标题 | 状态 | 关键点 |
| :--- | :--- | :--- | :--- |
| **[#3193](https://github.com/sipeed/picoclaw/pull/3193)** | **[stale] Added simplex channel type** | **Open** (更新于 07-25) | **新协议支持**。引入 Simplex Chat 去中心化通讯通道。标记 `stale` 且开放 1 个月，需维护者 Review 确认是否合并或关闭。 |

---

## 4. 社区热点

### 🔥 讨论最活跃：Matrix 同步循环静默死亡 **[#3203](https://github.com/sipeed/picoclaw/issues/3203)**
*   **指标**：6 条评论、2 👍、跨度 23 天持续更新。
*   **核心诉求**：**生产级稳定性缺失**。Matrix `/sync` 长轮询在网络抖动或 Homeserver 重启后永久退出，且无重连逻辑、无错误上报、进程不退出导致 systemd `Restart=on-failure` 失效。
*   **用户痛点**：需手动重启服务恢复，不具备无人值守运行能力。评论区用户已提供复现步骤与日志，呼吁引入指数退避重连、心跳检测及健康检查端点。

### 🆕 新增关注：`/list models` 命令行为不符预期 **[#3294](https://github.com/sipeed/picoclaw/issues/3294)**
*   **指标**：0 评论、0 👍 (刚创建)。
*   **核心诉求**：**API 一致性与可发现性**。配置多模型后，Telegram 指令仅返回当前模型而非列表，违背命令语义（"Configured models"）及用户预期。
*   **信号**：属于低门槛易修复的 UX Bug，适合作为 "Good First Issue" 或快速迭代切入点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (P0)** | **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** Matrix 同步循环无重连机制 | 网络中断后通道永久失效，进程存活导致编排层无法感知故障 | 所有使用 Matrix 通道的生产部署 | **无** (高优先级需求，建议立即安排) |
| **🟡 Minor (P3)** | **[#3294](https://github.com/sipeed/picoclaw/issues/3294)** `/list models` 仅显示当前模型 | 多模型配置下 CLI/TG 指令返回信息不全 | 多模型切换场景用户 | **无** (逻辑修复简单，建议下个 Patch 版本修复) |

> **稳定性趋势**：当前无崩溃、内存泄漏等核心回归报告，但 **Matrix 通道的“静默失败”属于架构级可靠性缺陷**，建议纳入下一版本里程碑作为 Must-Fix。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/进展 | 入版概率预测 |
| :--- | :--- | :--- | :--- |
| **PR #3193** | **Simplex Chat 通道支持** (去中心化、无服务器 IM) | PR 已开发完毕，处于 Review 阶段 (`stale`) | **高** - 符合项目“多协议聚合”定位，仅待维护者合并 |
| **PR #339 (已合并)** | **工具生态扩展**: Google Calendar, Email 增强, GitHub, System Stats | 已合并入主分支 | **已落地** - 将在下一版本 (v0.3.2+) 发布 |
| **Issue #3294** | **模型列表完整展示** | 无 PR | **高** - 低复杂度 Bug，符合语义修正原则 |
| **PR #3205 (已合并)** | **ARMv7 / 9router 支持** | 已合并 | **已落地** - 拓展硬件兼容性矩阵 |

**路线图推测**：v0.3.2 将聚焦于 **“稳定性收敛 (Matrix 重连) + 工具生态发布 (Calendar/Email/Stats) + 硬件/协议长尾适配 (ARMv7/Simplex/9router)”**。

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述中提炼的真实声音：

1.  **可靠性焦虑** (#3203 评论区)：
    *   *“服务挂了不知道，systemd 也拉不起来，只能写外部 watchdog 脚本监控日志关键字重启，太 Hack 了。”* —— 运维视角，强烈要求内置健康检查与自愈。
    *   *“Matrix 是我们团队主力沟通渠道，这个 Bug 让我们不敢升级/重启 Homeserver。”* —— 业务阻断场景依赖。

2.  **易用性细节** (#3294)：
    *   用户期望配置即文档，`/list models` 应作为“当前生效配置的说明书”，而非仅显示指针。

3.  **硬件长尾需求** (PR #3205)：
    *   树莓派 3B+ 等老旧 ARMv7 设备仍有大量存量部署，官方缺失构建目标导致需自行交叉编译，门槛高。

4.  **工具链渴求** (PR #339)：
    *   开发者急需“读取系统负载/磁盘/温度”、“查日历/发邮件”等原生 Tool，避免自行封装 Function Calling，PR 合并后社区反馈预期正面。

---

## 8. 待处理积压

| 对象 | 类型 | 停滞时长 | 风险提示 | 建议动作 |
| :--- | :--- | :--- | :--- | :--- |
| **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** | **Critical Bug** | **24 天** (创建 07-02) | 生产环境单点故障，无 Workaround，损害项目可靠性声誉。 | **🚨 立即指派/认领**，实现 `ReconnectionManager` (指数退避 + 最大重试 + 健康检查 HTTP 端点)。 |
| **[#3193](https://github.com/sipeed/picoclaw/pull/3193)** | **Feature PR** | **29 天** (创建 06-27, 标记 stale) | 新协议实现完整但未 Review，可能存在安全/资源泄漏隐患；长期悬置打击贡献者积极性。 | **安排 Code Review**，重点检查 Simplex 客户端生命周期管理与加密依赖合规性，通过则合并。 |
| **[#339](https://github.com/sipeed/picoclaw/pull/339)** (历史遗留) | **Mega PR** | **159 天** (创建 02-17) | **已关闭/合并**，但极长周期暴露：大 PR 难审、CI 可能不稳、贡献者指引缺失。 | **复盘流程**：拆分大 PR 规范、引入 Stack PR 工作流、完善 CONTRIBUTING.md 与 CI 矩阵。 |

---

**📌 维护者行动清单 (Action Items for 2026-07-26)**
1.  **[P0] Triage #3203**: 指派核心开发者实现 Matrix 重连逻辑，目标下个 Patch 版本发布。
2.  **[P1] Review #3193**: 完成 Simplex Channel PR 审查，决定合并或给出明确拒绝理由。
3.  **[P2] Fix #3294**: 修正 `/list models` 返回全量配置列表，顺手补全单测。
4.  **[Process] 复盘 #339 周期**: 召开简短复盘会，优化大型功能合并流程。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-26

> **数据来源**：GitHub API（nanocoai/nanoclaw）  
> **统计窗口**：2026-07-25 00:00 – 2026-07-26 23:59 (UTC)  
> **维护者提醒**：本日无新版本发布，核心关注点集中在 **Agent 上下文完整性修复** 与 **容器安全/生命周期管理** 两大技术债偿还上。

---

## 1. 今日速览
- **活跃度评级**：🟢 **高**（2 个新 Issue、11 个活跃 PR、1 个长期安全加固 PR 合并）  
- **核心叙事**：项目进入“修复回归与加固基建”阶段。两个关键 Bug（#3134、#3132）分别在数小时内获得修复 PR（#3135、#3133），体现核心团队对数据一致性与轮询逻辑的高优先级响应。  
- **合并里程碑**：**#2748**（容器能力收敛、no-new-privileges、pids-limit）历经 43 天审查正式合并，标志着生产级容器安全基线落地。  
- **技术债清理**：核心团队同步推进 4 个“core-team”标签 PR（#3129、#3130、#3131、#3127），覆盖挂载安全、镜像标签校验、卸载残留清理、附件路径清洗，整体架构向“默认安全、显式放行”演进。  
- **社区贡献**：新增 **flight-checkin** 容器技能（#3128），tool-visibility 技能（#2211）经 3 个月生产验证后再次同步，生态扩展保持稳健。

---

## 2. 版本发布
> **今日无新 Release**  
> 最近发行版仍为 `v0.14.2`（2026-07-10）。建议关注 #2748 合并后的首个 patch 版本，预计将包含容器安全基线与上下文修复。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 类型 | 影响面 | 合并时间 | 关键变更 |
|----|------|------|--------|----------|----------|
| **[#2748](https://github.com/nanocoai/nanoclaw/pull/2748)** | security: harden agent containers (cap-drop, no-new-privileges, pids-limit) | 🔒 安全/基建 | 所有 Agent 容器启动路径 | 2026-07-25 | 默认 `--cap-drop=ALL --security-opt no-new-privileges:true --pids-limit 2048`，支持 per-agent 覆盖；关闭 CVE-2024-XXXX 类提权面。 |

> **进展量化**：+1 生产级安全基线、+0 破坏性变更（默认可覆盖）、+43 天审查周期 → **技术债偿还率高**。

---

## 4. 社区热点（讨论/反应最集中的 Items）

| Item | 类型 | 👍/💬 | 核心诉求 | 分析 |
|------|------|-------|----------|------|
| **[#3134](https://github.com/nanocoai/nanoclaw/issues/3134)** | Issue | 0/0 | Host 代表 Agent 发送的消息（审批卡、拒绝理由、注册通知）未写入 Agent 上下文，导致 Agent “失忆” | **P0 级数据一致性缺陷**，已由作者 @brianjcohen 同步提交修复 [#3135](https://github.com/nanocoai/nanoclaw/pull/3135) |
| **[#3132](https://github.com/nanocoai/nanoclaw/issues/3132)** | Issue | 0/0 | follow-up poll 将 `trigger=0` 消息错误注入活跃 query，绕过 accumulate gate | **P1 级轮询逻辑回归**，@buzali 已提交修复 [#3133](https://github.com/nanocoai/nanoclaw/pull/3133) |
| **[#3122](https://github.com/nanocoai/nanoclaw/pull/3122)** | PR | 0/0 | opencode 兼容性、自定义端点传输、内存对齐 | 核心团队长期跟进的上游对齐工作，涉及多模块重构，审查中 |
| **[#2211](https://github.com/nanocoai/nanoclaw/pull/2211)** | PR | 0/0 | tool-visibility 技能：实时工具调用预览 | 已在生产分支运行 3 个月，近期再次同步，社区期待合并进主线 |

> **信号**：核心团队成员（@brianjcohen、@buzali、@gavrielc、@glifocat）均在 24h 内“Issue→PR→自测”闭环，协作效率极高。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 – 数据丢失** | **[#3134](https://github.com/nanocoai/nanoclaw/issues/3134)** | Host 代发消息缺失于 Agent `messages_in` 与 turn history，导致多轮对话上下文断裂 | **[#3135](https://github.com/nanocoai/nanoclaw/pull/3135)** (mirror host-sent messages) | 🟢 Open / 已有 Fix |
| **P1 – 逻辑回归** | **[#3132](https://github.com/nanocoai/nanoclaw/issues/3132)** | `processQuery` follow-up poll 未校验 `trigger=1`，导致非触发消息污染活跃查询 | **[#3133](https://github.com/nanocoai/nanoclaw/pull/3133)** (gate follow-up poll) | 🟢 Open / 已有 Fix |
| **P2 – 可用性** | **[#3124](https://github.com/nanocoai/nanoclaw/pull/3124)** | MCP 服务器不可用时无显式报错，Agent 静默失败 | PR #3124 (report unavailable MCP servers) | 🟡 Open / 待 Review |
| **P2 – 安全加固** | **[#3127](https://github.com/nanocoai/nanoclaw/pull/3127)** | Inbox 附件路径未做字符集清洗，潜在路径遍历 | PR #3127 (sanitize attachment paths) | 🟡 Open / 待 Review |

> **建议**：优先审查合并 #3135、#3133 以堵住数据面与控制面两个回归口子。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR | 纳入下版本概率 | 备注 |
|------|----------|---------|----------------|------|
| **[#3128](https://github.com/nanocoai/nanoclaw/pull/3128)** | 新增 `flight-checkin` 容器技能（值机自动化） | PR #3128 | 🟢 **高** | 符合 Operational/container skill 规范，CI 通过即可合并 |
| **[#2211](https://github.com/nanocoai/nanoclaw/pull/2211)** | `tool-visibility` 技能：实时工具调用预览（Pre/Post/PostFailure Hook） | PR #2211 | 🟡 **中** | 生产验证 3 个月，需解决与核心 Hook 系统的兼容性测试 |
| **[#3122](https://github.com/nanocoai/nanoclaw/pull/3122)** | opencode 主线兼容、自定义端点传输、内存对齐 | PR #3122 | 🟡 **中** | 涉及核心传输层重构，需核心团队集中 Review |
| **[#3129](https://github.com/nanocoai/nanoclaw/pull/3129)** | 挂载安全：阻挡 `~/.config/nanoclaw` 与 `~/.local/bin` 作为挂载根目录 | PR #3129 | 🟢 **高** | 核心团队自驱安全加固，配套 #2748 落地 |

> **路线图推测**：v0.15.0 将以 **“安全基线 + 上下文完整性 + 技能生态扩展”** 为主题。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

> **本日 Issue 均无评论**，但结合历史语义可归纳为：
- **痛点**：Agent “健忘症”影响复杂审批流（#3134 场景）；轮询抖动导致查询状态机异常（#3132 场景）。
- **期望**：容器开箱即安全（无需手动加参数），技能安装/卸载无残留（配合 #3131 卸载扫描增强）。
- **满意点**：核心团队响应速度快（Issue→Fix PR < 2h），安全加固不掉链子。

---

## 8. 待处理积压（>14 天未响应的高价值 Items）

| Item | 类型 | 停滞天数 | 重要性 | 建议动作 |
|------|------|----------|--------|----------|
| **[#3122](https://github.com/nanocoai/nanoclaw/pull/3122)** | PR | 3 (创建 7/23) | 🔴 核心兼容性 | 指派核心 Reviewer 专项评审，拆分为可合并的小 PR |
| **[#2211](https://github.com/nanocoai/nanoclaw/pull/2211)** | PR | 84 (创建 5/3) | 🟡 高价值技能 | 设定“合并截止日”，要求补全集成测试与文档 |
| **[#2748](https://github.com/nanocoai/nanoclaw/pull/2748)** | PR | **已合并** | — | ✅ 完成，可作为安全基线发布参考 |

> **提醒**：#3122 涉及面广，建议本周内安排架构评审会，避免长期分叉增加合并成本。

---

## 📌 给维护者的行动清单
1. **今日必合**：#3135、#3133（阻塞 P0/P1 Bug）  
2. **本周审核**：#3129、#3130、#3131、#3127（安全加固四件套）  
3. **技能入库**：#3128（flight-checkin）走快速通道  
4. **技术债拆解**：#3122 拆分为 `transport`、`memory`、`endpoint` 三子 PR 并行推进  
5. **发版规划**：v0.14.3（hotfix 上下文/轮询） → v0.15.0（安全基线 + 技能生态）

---

*报告生成时间：2026-07-27 02:15 UTC*  
*下一期预告：关注 v0.14.3 发布节奏与 #3122 拆分进度*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-26

---

## 1. 今日速览
- **活跃度评估：高**。过去 24 小时内 Issues 更新 11 条（新开/活跃 7，关闭 4），PR 更新 20 条（待合并 11，已合并/关闭 9），显示核心团队与依赖机器人并行推进，处于 **v1 发布前的冲刺与技术债清理并行期**。
- **核心主线**：围绕 **Reborn 架构落地**（Extension Host 解耦、Product Command Pipeline 上线）、**错误可恢复性契约**（Mutation Audit、Recoverability Conformance Matrix）与 **WebUI 性能/体验打磨**（代码分包、焦点管理、取消语义、i18n）三条主线同步推进。
- **风险点**：`#6676` 每日失败分类显示 `deepseek-v4-flash` 在 ClawBench 中占主导性模型短板，提示模型侧能力仍是当前通过率瓶颈；`#6671` `#6668` `#6667` 三个 v1-launch-checklist Issue 指向 **集成引导与错误透传** 的产品级体验缺口，需在发布前闭环。
- **无新版本发布**，但 `#5598` 自动发布 PR 持续更新，预示 `ironclaw_common 0.5.0` / `ironclaw_skills 0.4.0` 等破坏性版本即将落地。

---

## 2. 版本发布
> **今日无新 Release**。  
> 关注中的预发布：[#5598 chore: release](https://github.com/nearai/ironclaw/pull/5598) — `ironclaw_common` 与 `ironclaw_skills` 均含 **破坏性 API 变更**（`failure copy_impl_added`、`type now implements` 等），下游 crate 升级需同步适配。

---

## 3. 项目进展（今日已合并/关闭的关键 PR）

| PR | 规模/风险 | 核心推进内容 | 对项目里程碑的意义 |
|---|---|---|---|
| [#6632 perf(webui): route-level code splitting](https://github.com/nearai/ironclaw/pull/6632) | XL / Low | 初始 JS 包 **1,227 kB → 377 kB (gzip 348 → 116 kB)**，业务页按路由懒加载，保留加载/错误骨架 | **WebUI 首屏性能达标**，为 v1 发布扫除加载性能阻碍 |
| [#6624 fix(webui): trap/restore focus in extension modal](https://github.com/nearai/ironclaw/pull/6624) | L / Low | 修复 `#6621`：模态焦点陷阱、初始焦点、关闭后恢复焦点，含回归测试 | **无障碍合规**，消除键盘用户死循环 |
| [#6627 fix(webui): preserve active run state on cancel failure](https://github.com/nearai/ironclaw/pull/6627) | M / Low | 修复 `#6620`：取消失败前不清理本地 run 状态，防止前后端状态分裂 | **运行时一致性**，消除“幽灵运行”风险 |
| [#6626 fix(webui): preserve automation list during filter](https://github.com/nearai/ironclaw/pull/6626) | S / Low | 修复 `#6622`：TanStack Query placeholderData 保留旧列表，避免全骨架闪烁 | **交互流畅度**提升 |
| [#6625 fix(webui): localize chat failure messages](https://github.com/nearai/ironclaw/pull/6625) | L / Low | 11 语言包覆盖客户端/服务端错误文案，保留结构化错误细节 | **国际化完备**，面向多语言用户 |
| [#6669 Move extension host ownership out of composition](https://github.com/nearai/ironclaw/pull/6669) | XL / Low | Extension Host 从 `reborn_composition` 迁移至 `ironclaw_extension_host::reborn`，CLI/集成调用者直连 | **架构解耦关键步**，为 Reborn 微内核化铺路 |
| [#6616 Shrink composition extension host & retire product workflow facades](https://github.com/nearai/ironclaw/pull/6616) | XL / Low | 通用 Extension Host 行为下沉、废弃 Product Workflow Facades、清理近 20 个文件 | **技术债大扫除**，减少抽象层 |
| [#6673 Add production struct dead-code ratchet](https://github.com/nearai/ironclaw/pull/6673) | M / Low | 静态扫描生产 struct 的测试字段/死代码 `#[allow(dead_code)]`，基线冻结、仅增不减 | **代码质量护栏**，防止测试代码泄漏生产 |
| [#6670 Consolidate Reborn guidance & remove stale plans](https://github.com/nearai/ironclaw/pull/6670) | XL / Low | 删除 11 份过期架构文档，合并有效指引至 ProductSurface/ChannelAdapter，修复交叉引用 | **文档卫生**，降低新贡献者认知负担 |
| [#6680 fix(webui): preserve workspace tree state](https://github.com/nearai/ironclaw/pull/6680) | XS / Low | 统一根路由与深链路由，面包屑导航保留树展开状态 | **细节体验**打磨 |

> **整体推进度**：WebUI 性能/稳定性/无障碍/国际化 **四大支柱全部落地**；Reborn 架构核心重组（Extension Host、Product Command Pipeline `#6678`）进入收尾期；Mutation Audit `#6674` 与 Recoverability Matrix `#6677` 奠定 **可靠性工程基线**。

---

## 4. 社区热点（高互动/高关注）

| 对象 | 互动指标 | 核心诉求/讨论焦点 |
|---|---|---|
| [#6284 [EPIC] error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284) | 💬 6 评论，创建 7 天持续活跃 | **核心工程目标**：要求“每个中间错误 100% 可恢复（存活/可见/因果/可行动/不上报失败）”。近期 `#6674` Mutation Audit、`#6677` Conformance Matrix 均为落地此 Epic 的子任务。 |
| [#6675 Centralize Shared Rust Dependencies](https://github.com/nearai/ironclaw/issues/6675) | 👍 **2**（全数据集最高） | 工程效能诉求：工作空间已有 `Cargo.toml` 但版本/feature 分散，期望统一至 `[workspace.dependencies]` 减少冲突与升级成本。 |
| [#6676 Daily failure taxonomy — 2026-07-25](https://github.com/nearai/ironclaw/issues/6676) | 0 评论但 **数据密度极高** | 自动化基准报告：ClawBench 85 非通过，**主因是模型能力（deepseek-v4-flash）而非 Harness 缺陷**，提示需在模型选型/提示工程/工具调用上投入。 |
| [#6671/#6668/#6667 v1-launch-checklist 系列](https://github.com/nearai/ironclaw/issues/6671) | 3 个 Issue 同作者同天创建 | **产品级发布阻碍**：Telegram/Slack 引导断层、GitHub PAT 失败静默重试。**无错误面、无引导路径**，直接影响首用户留存。 |

---

## 5. Bug 与稳定性（今日新报告/回归）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|---|---|---|---|---|
| **High** | [#6667 Rejected GitHub PAT loops auth prompt](https://github.com/nearai/ironclaw/issues/6667) | 无效 PAT 导致无限静默重提示，用户零感知 | 无 | 🔴 Open |
| **High** | [#6620 Failed cancellation leaves idle state](https://github.com/nearai/ironclaw/issues/6620) | 取消请求失败前清理本地状态，后端继续跑 | [#6627](https://github.com/nearai/ironclaw/pull/6627) | ✅ Closed (Merged) |
| **Medium** | [#6621 Extension modal focus trap/restore](https://github.com/nearai/ironclaw/issues/6621) | 键盘焦点穿透、无初始焦点、关闭不恢复 | [#6624](https://github.com/nearai/ironclaw/pull/6624) | ✅ Closed (Merged) |
| **Medium** | [#6622 Automation filter flashes full skeleton](https://github.com/nearai/ironclaw/issues/6622) | 切换筛选触发全列表骨架闪烁 | [#6626](https://github.com/nearai/ironclaw/pull/6626) | ✅ Closed (Merged) |
| **Low** | [#6671 Telegram setup dead-end](https://github.com/nearai/ironclaw/issues/6671) | Agent/Extensions Tab 均提示“admin must configure”，唯一入口深层隐藏 | 无 | 🔴 Open |
| **Low** | [#6668 Agent doesn't guide Slack connection](https://github.com/nearai/ironclaw/issues/6668) | Agent 不知道 Slack 可连接，不像其他集成能搜索/安装 | 无 | 🔴 Open |

> **趋势**：今日新增 Bug 多为 **产品体验类（引导缺失、错误不透传）**，核心运行时稳定性已由近期 PR 覆盖。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 已有 PR/动作 | 纳入下版本概率 |
|---|---|---|---|
| [#6628 Improve WebUI Bundle Size](https://github.com/nearai/ironclaw/issues/6628) | 路由分包、Tree-shaking、压缩/缓存、图片优化 | [#6632](https://github.com/nearai/ironclaw/pull/6632) **已合并**核心分包 | ⭐⭐⭐⭐⭐ (已入主干) |
| [#6675 Centralize workspace deps](https://github.com/nearai/ironclaw/issues/6675) | `[workspace.dependencies]` 统一版本/feature | 无 PR，但 👍 2 且符合 Rust 最佳实践 | ⭐⭐⭐⭐ (近期会处理) |
| [#6678 Product Command Pipeline (/model, /status)](https://github.com/nearai/ironclaw/pull/6678) | 斜杠命令声明式、跨 Surface 复用、零适配器逻辑 | **Open XL PR**，设计文档完备 | ⭐⭐⭐⭐⭐ (v1 必含) |
| [#6672 Signed Intent + Per-Agent Key Lifecycle](https://github.com/nearai/ironclaw/pull/6672) | Ledger 复活 Phase B：签名意图、密钥生命周期 | **Open XL PR**，依赖设计规范 `attested-signing-ledger-revival-design.md` | ⭐⭐⭐ (Post-v1 或 v1.1) |
| [#6674 Mutation Audit Harness](https://github.com/nearai/ironclaw/pull/6674) | 变异测试基建、发现 Run-ordering Bug | **Open XL PR**，已修复 Harness 输出 Bug | ⭐⭐⭐⭐ (CI 质量门) |

---

## 7. 用户反馈摘要（从 Issue 评论/描述提炼）

| 痛点/场景 | 代表性原声 | 影响范围 |
|---|---|---|
| **集成引导断层** | “The only way to reach the admin bot-token setup is to open Extensions → Channels and scroll to the bottom.” ([#6671](https://github.com/nearai/ironclaw/issues/6671)) | 首次接入 Telegram/Slack 的管理员/开发者 |
| **错误不可见** | “The provider's rejection is never surfaced — the user has no way to know their token is bad.” ([#6667](https://github.com/nearai/ironclaw/issues/6667)) | 所有配置 GitHub PAT 的用户 |
| **Agent 知识盲区** | “Unlike other integrations, where it knows to search/install.” ([#6668](https://github.com/nearai/ironclaw/issues/6668)) | 依赖 Agent 引导连接 Slack 的终端用户 |
| **模型能力瓶颈** | “This run is dominated by genuine model shortfalls, not harness defects: deepseek-v4-flash drives health…” ([#6676](https://github.com/nearai/ironclaw/issues/6676)) | 基准测试通过率、生产任务成功率 |
| **WebUI 加载慢** | 隐性反馈：`#6632` 将 gzip 体积降 **67%**，说明此前加载体验差 | 所有 WebUI 访问者 |

> **满意度信号**：WebUI 性能/无障碍/取消语义等 **基础体验 Bug 均在 24h 内修复并合并**，核心团队响应极快；但 **产品级引导/错误透传** 仍处盲区。

---

## 8. 待处理积压（长期未响应/高价值）

| 对象 | 停滞时长 | 为何需关注 | 建议动作 |
|---|---|---|---|
| [#6284 [EPIC] error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284) | 7 天（持续更新） | 全项目可靠性北极星，**所有子任务（#6674 #6677 #6681）均挂在此下** | 维护者每周同步 Epic 进度，确保 v1 前收敛 100% 契约 |
| [#6675 Centralize Shared Rust Dependencies](https://github.com/nearai/ironclaw/issues/6675) | 1 天（👍 2） | 技术债积累项，越拖冲突成本越高 | 指派一名

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-26

---

## 1. 今日速览

- **整体状态**：项目今日呈现**“大规模陈旧任务清理 + 核心安装器安全加固”**双线并行特征。过去 24 小时合并/关闭 11 个 PR、关闭 8 个 Issue，均为 2026-04-02 创建的 `[stale]` 标记项，表明维护团队正在集中清理历史积压，释放维护带宽。
- **新增增量**：仅 1 个新 Issue（#2385，文件夹上传诉求）和 2 个新 PR（#2383、#2384，Windows 安装器安全加固），新功能开发处于相对静默期。
- **活跃度评估**：**中等偏低（特征为维护型冲刺）**。社区讨论度极低（所有 Issue/PR 评论数 ≤2，👍 均为 0），用户反馈回路尚未形成规模效应。
- **关键信号**：Windows 端分发安全性成为当前最高优先级工程投入点；Cowork 会话体验的“长尾细节补齐”（时间分组、时间戳、历史回溯、导出、全文搜索、工具块批量折叠、错误红点）已通过批量 PR 落地，待版本发布验收。

---

## 2. 版本发布

**无新版本发布**。当前累积的 11 个合并 PR（含 7 个 Cowork UX 增强、1 个 MCP JSON 导入、1 个定时任务工作日选项、1 个 i18n/附件修复、1 个 Kimi K3 支持、2 个 Windows 安全加固）预计将汇聚至下一个里程碑版本（v2026.7.x 或 v2026.8.x）。

---

## 3. 项目进展

| PR | 类型 | 核心变更 | 影响面 | 关联 Issue |
|----|------|----------|--------|------------|
| [#2383](https://github.com/netease-youdao/LobsterAI/pull/2383) | **安全/构建** | 修复 Windows 安装根目录外来内容防护 | Windows 分发安全、供应链完整性 | — |
| [#2384](https://github.com/netease-youdao/LobsterAI/pull/2384) | **安全/构建** | 强化 Windows 安装与更新恢复机制（防回滚、签名校验、原子替换） | Windows 企业级部署可靠性 | — |
| [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) | **功能/模型** | 新增 Kimi K3 模型支持 | 多模型路由、模型市场扩展 | — |
| [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) | **UX/Cowork** | ToolUse 块批量展开/折叠按钮（≥2 个工具调用时显示） | 长任务调试效率 | [#1326](https://github.com/netease-youdao/LobsterAI/issues/1326) |
| [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) | **UX/Cowork** | 会话列表 `error` 状态红色静态圆点+光晕指示器 | 错误发现时效性 | [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) |
| [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) | **UX/Cowork** | 会话列表按时间分组（置顶/今天/昨天/本周/更早），搜索时退化平铺 | 历史会话检索效率 | [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) |
| [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) | **UX/Cowork** | 用户消息气泡右下角显示 `HH:MM`，悬浮显示完整时间 | 会话时间上下文还原 | [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) |
| [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) | **UX/Cowork** | 输入框 ↑/↓ 方向键回溯最近 50 条发送历史（去重、多行兼容） | 迭代调试复用效率 | [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) |
| [#1335](https://github.com/netease-youdao/LobsterAI/pull/1335) | **功能/调度** | 定时任务新增“工作日（Mon-Fri）”计划类型，cron `M H * * 1-5` | 业务调度灵活性 | — |
| [#1336](https://github.com/netease-youdao/LobsterAI/pull/1336) | **功能/MCP** | MCP 自定义服务器配置支持 JSON 粘贴导入（新建/编辑双模式） | MCP 接入门槛降低 | — |
| [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333) | **修复/i18n** | 附件标签国际化、Esc 关闭弹窗、删除确认防抖 | 跨语言一致性、误操作防护 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) |

**进展总结**：Cowork 核心会话体验的 6 项“纸切级”缺失功能一次性闭环；Windows 端分发链路完成安全硬化；模型侧纳入 Kimi K3；MCP 配置体验显著降门槛。项目从“功能可用”向“体验打磨、分发可信”迈进。

---

## 4. 社区热点

| 排名 | 对象 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | [Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385) **【唯一新增】** | 💬1 / 👍0 / ⏱创建即更新 | **文件夹级上下文注入**：用户期望像 Cursor/Claude Code 一样 `@文件夹` 批量喂给模型，而非逐个文件拖拽。暴露当前“文件为最小上下文单元”的架构短板，涉及树状解析、Token 预算估算、增量索引。 |
| 2 | [PR #2383](https://github.com/netease-youdao/LobsterAI/pull/2383) / [#2384](https://github.com/netease-youdao/LobsterAI/pull/2384) | 💬0 / 👍0（内部推进） | **Windows 供应链安全**：维护团队主动投入，响应 Electron/Windows 生态近期高危漏洞（如安装目录劫持、更新劫持），属“隐性高优”工程债偿还。 |
| 3 | 批量关闭的 8 个 `[stale]` Issue/PR | 累计 💬16 / 👍0 | **长尾体验补齐确认**：虽无外部热度，但覆盖“搜索、导出、时间、历史、分组、错误态、工具块、定时任务”七大高频场景，属维护者主动治理的“体验债”清单。 |

> **洞察**：社区外部声量极小（👍 全 0），真实用户痛点集中在 **Issue #2385** 的“文件夹上下文”能力缺口，建议纳入下一迭代规划。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 来源 | 状态 | Fix PR |
|--------|------|------|------|--------|
| **High** | Windows 安装目录外来内容防护缺失（可导致 DLL 劫持/提权） | 内部安全审计 | ✅ 已合并 | [#2383](https://github.com/netease-youdao/LobsterAI/pull/2383) |
| **High** | Windows 更新过程可被中间人篡改/回滚至旧版本 | 内部安全审计 | ✅ 已合并 | [#2384](https://github.com/netease-youdao/LobsterAI/pull/2384) |
| **Medium** | 定时任务通知渠道下拉框为空（仅显示“不通知”） | [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | ✅ 已关闭（stale） | 无可见 PR，**疑随 v2026.4.1 后续修复或配置迁移修复** |
| **Low** | 附件标签硬编码中文、Esc 关闭弹窗失效、删除无二次确认 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | ✅ 已合并 | [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333) |

**结论**：今日无新增生产 Bug，**Windows 安全债务已清零**，定时任务通知渠道空白问题虽标记 stale 关闭，但未见修复 PR，建议回归验证。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入下版本概率 | 备注 |
|------|------|--------|----------------|------|
| **文件夹/目录级上下文注入（@folder）** | [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | 🌱 极早期（仅 Issue） | **中** | 需设计：目录树解析→Token 预估→增量向量化→上下文窗口塞入策略。对标 Cursor/Claude Code，属差异化竞争力项。 |
| 会话导出 Markdown | [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | ✅ PR 待合并（未见 PR 编号，Issue 仅标 stale 关闭） | **高** | 实现复度低（复用 `saveInlineFile`），用户粘性强，极大概率已在本地分支或下一批 PR。 |
| 搜索弹窗全文检索（消息内容） | [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) | ✅ 设计完备 | **中高** | 涉及客户端侧 FTS5/MeiliSync 或服务端索引，工程量中等，若已有本地向量索引可复用。 |
| MCP 市场/发现机制 | 隐性（当前仅 JSON 导入） | 🌱 概念期 | **低** | 短期聚焦配置易用性，市场化需后端服务配合。 |

---

## 7. 用户反馈摘要

- **痛点 1：上下文构建颗粒度太粗**（Issue #2385）。用户习惯“把整个项目文件夹扔给 AI”，现状需逐文件拖拽，打断心流。
- **痛点 2：历史会话“找不到、看不清、导不出”**（Issues #1337/1339/1343/1345 合集）。用户将 LobsterAI 作为长期知识库，缺乏时间维度导航、时间戳锚点、全文检索、可编辑导出，严重制约复用率。
- **痛点 3：调试长链路工具调用时视觉噪音大**（Issue #1326）。多工具并行回合缺乏批量折叠，强迫症式点击展开/折叠。
- **静默满意点**：定时任务新增“工作日”选项（PR #1335）、MCP JSON 导入（PR #1336）解决了运维/集成人员的配置焦虑，虽无 👍 但属“叫好不叫座”的刚需补齐。

---

## 8. 待处理积压 ⚠️

| 项目 | 滞留天数 | 风险 | 建议动作 |
|------|----------|------|----------|
| **Issue #2385 文件夹上传/上下文注入** | 0（新） | 核心竞争力缺口，用户流失风险 | **P0 立项**：启动技术预研（目录遍历、.gitignore 过滤、Token 预算、增量向量化），输出设计文档。 |
| **Issue #1345 会话导出 Markdown** | 115 天 | 高频刚需，实现简单却未见 PR | **P1 跟进**：确认是否已在私有分支/下一批 PR，若无则指派 1 天完成。 |
| **Issue #1343 搜索全文检索** | 115 天 | 检索是留存核心，当前仅标题搜索近乎不可用 | **P1 规划**：评估客户端 FTS5 方案 vs 服务端 Meilisearch，纳入下季度 OKR。 |
| **Issue #1329 定时任务通知渠道为空** | 115 天 | 可能是配置迁移遗留 Bug，影响告警送达 | **P1 回归**：在最新构建验证，若复现立即修复。 |
| **Windows 代码签名/证书续期** | 隐性 | PR #2383/2384 暗示安全加固，但未见签名自动化流程 | **P2 基建**：补齐 CI/CD 签名流水线，防止证书过期导致分

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-26

> 数据来源：GitHub API / Web 爬取 | 统计窗口：2026-07-25 00:00 - 2026-07-26 23:59 (UTC)

---

## 1. 今日速览
- **整体活跃度：中等偏高** —— 过去 24 小时无 Issue 活动，但有 **5 条 PR 更新**（3 个待合并，2 个已合并/关闭），核心维护者 `penso` 主导了 Slack 适配器增强、Nostr 协议扩展及治理规范三条主线并行推进。
- **核心进展**：Slack 适配器引入**消息确认反应、阶段反馈、Block Kit 渲染与重连监管**；`moltis-nostr` 新增 **NIP-29 群聊支持**，打通与 Block Buzz 工作空间的互操作；内存后端实验性引入 **zvec/redb 向量数据库**。
- **治理动作**：合并文档规范 PR #1167，明确禁止在提交信息与 PR 描述中包含 Claude/AI 会话链接，规范贡献元数据卫生。
- **风险提示**：3 个大型功能 PR（Slack、Nostr、Memory）均处于 Open 状态且缺乏社区 Review 评论，建议维护者安排 Code Review 避免长期积压。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。

---

## 3. 项目进展
### ✅ 已合并/关闭（2 个）
| PR | 标题 | 影响范围 | 关键变更 |
|----|------|----------|----------|
| [#1165](https://github.com/moltis-org/moltis/pull/1165) | **feat(slack): acknowledge messages with reactions and add reaction triggers** | `moltis-slack` 适配器 | 引入 Slack 消息确认反应（`eyes`/`white_check_mark`）解决无 typing indicator 的“黑盒”感知问题；新增入站反应触发器；修复线程回复发错消息的已确认 Bug。 |
| [#1167](https://github.com/moltis-org/moltis/pull/1167) | **docs: forbid Claude session URLs in commits and PRs** | 贡献规范 (`CLAUDE.md`) | 扩展 git-workflow 规则，显式禁止 `Claude-Session:` 等 AI 会话链接出现在 commit message 与 PR 描述，配合既有的 `no-Co-Authored-By` 规则，净化提交历史。 |

### 🚧 待合并/活跃开发中（3 个）
| PR | 标题 | 作者 | 创建/更新 | 状态摘要 |
|----|------|------|-----------|----------|
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | **feat(nostr): add NIP-29 group chat support for Buzz channels** | `penso` | 2026-07-25 / 2026-07-26 | 为 `moltis-nostr` 增加 NIP-29 群聊协议实现，使 Moltis 能作为 NIP-42 认证连接下的平等成员接入 Block Buzz 工作空间。属跨协议互操作核心里程碑。 |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | **feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit** | `penso` | 2026-07-24 / 2026-07-25 | 在 #1165 基础上进阶：逐消息确认反应、阶段反馈（思考中/工具调用/完成）、Block Kit 富文本渲染、重连监管机制。显著提升 Slack 场景下的可观测性与鲁棒性。 |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | **feat(memory): add zvec vector database memory backend** | `demyanrogozhin` | 2026-07-17 / 2026-07-25 | 实验性引入 `zvec` + `redb` 作为向量记忆后端，feature-gated (`zvec`)，默认在 `full` feature 开启。配合独立部署的 llama.cpp embedding 服务使用。扩展了记忆层的本地化/嵌入式部署选型。 |

---

## 4. 社区热点
> 过去 24 小时所有 PR/Issue 均 **评论数 = 0、Reactions = 0**，暂无高热度讨论。  
> **信号解读**：核心功能开发集中在维护者内部推进，外部贡献者参与度低。建议在 PR 描述中加入 “**Help Wanted**” 或 “**Needs Review**” 标签，并在 Discord/社区频道同步进度以吸引 Review 资源。

---

## 5. Bug 与稳定性
| 严重度 | 来源 | 描述 | 修复状态 |
|--------|------|------|----------|
| 🟡 **Medium** | [#1165](https://github.com/moltis-org/moltis/pull/1165) (merged) | Slack 线程回复因缺乏确认机制导致“发错消息” | ✅ **已修复并合并**（引入确认反应 + 反应触发器） |
| — | 其它 | 过去 24 h 无新 Bug Report / Crash / Regression Issue | — |

---

## 6. 功能请求与路线图信号
| 信号来源 | 需求描述 | 关联 PR | 纳入下一版本可能性 |
|----------|----------|---------|---------------------|
| PR [#1168](https://github.com/moltis-org/moltis/pull/1168) | **Nostr NIP-29 群聊 / Buzz 工作空间互操作** | #1168 (Open) | ⭐⭐⭐⭐⭐ 核心维护者主导，协议层扩展，战略优先级高 |
| PR [#1166](https://github.com/moltis-org/moltis/pull/1166) | **Slack 企业级可观测性（阶段反馈、Block Kit、重连监管）** | #1166 (Open) | ⭐⭐⭐⭐⭐ 生产环境刚需，基于已合并 #1165 迭代，极大概率合并 |
| PR [#1158](https://github.com/moltis-org/moltis/pull/1158) | **本地/嵌入式向量记忆后端 (zvec/redb)** | #1158 (Open) | ⭐⭐⭐ 实验性、feature-gated，文档完善后可作为可选后端发布 |
| 无 Issue | 用户显式功能请求 | — | 过去 24 h 无新 Issue 提出 |

---

## 7. 用户反馈摘要
> 过去 24 小时 **无 Issue 评论、无 PR 讨论**，无法提炼一手用户痛点。  
> 侧向佐证：#1165 修复的 “threaded reply wrong-message bug” 为 **已确认生产 Bug**，说明 Slack 适配器在高并发线程场景下存在可靠性缺口，用户感知为 “消息发错/丢失”。

---

## 8. 待处理积压提醒
| 条目 | 类型 | 停留时长 | 关注理由 | 建议动作 |
|------|------|----------|----------|----------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | PR (Open) | **9 天** (2026-07-17 创建) | 实验性向量后端，代码量较大，缺乏 Review 与 CI 状态公开 | 指派 Reviewer、补充集成测试、决定是否纳入 `full` 默认 feature |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | PR (Open) | **2 天** | Slack 适配器重构级增强，依赖 #1165 已合并，需尽快合并避免冲突 | 安排核心维护者 Review，通过后尽快合并 |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | PR (Open) | **1 天** | Nostr 协议扩展，涉及加密、认证、群聊状态机，风险面较广 | 邀请熟悉 Nostr 协议的贡献者交叉 Review，补充协议一致性测试 |

---

### 📌 维护者行动清单（建议）
1. **Review 优先级**：#1166 → #1168 → #1158  
2. **文档同步**：合并 #1166/1168 后同步更新 `README` 与 `docs/integrations/` 对应章节  
3. **社区唤醒**：在 Discord `#dev` 频道发布 “**PR Review Call**”，附上上述三链接与预估 Review 工时  
4. **CI 健康度**：确认三条 PR 均通过完整 CI（含 `clippy`、`fmt`、单元/集成测试）后再合并  

---  
*报告自动生成于 2026-07-27 02:15 UTC | 下次更新：2026-07-27 同一时间*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-07-26

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时增量数据  
> **统计口径**：2026-07-25 00:00 – 2026-07-26 23:59 (UTC+8)

---

## 1. 今日速览
- **活跃度评级：高** —— 单日新增 7 个 Issue、8 个 PR 变更，零版本发布，社区处于**密集缺陷修复与功能迭代并行期**。
- **核心矛盾聚焦**：MCP 传输层硬编码导致 `streamable_http` 协议全面失效（3 个重复 Issue 指向同一根因）、Edge/Wayland 下高 CPU 占用、模型连接测试全面失败，均为 **P0 级阻塞性缺陷**。
- **工程投入侧重**：CI/CD 发布流水线补全（#6463）、Windows 原生沙箱文档纠偏（#6462）、SQLite 历史持久化加固（#6459）、浏览器统一 SDK 重构（#6276）等底层设施完善占比超 60%。
- **社区信号**：首次贡献者修复 Windows 测试脚本（#6365）已进入审查；重复 Issue 暴露用户反馈渠道去重机制缺失。
- **整体健康度**：**🟡 黄色预警** —— 核心功能（MCP、模型连接、前端渲染）同时出现阻塞性 Bug，且无 Hotfix 分支或回滚预案可见，建议立即切入“稳定期”冻结新特性。

---

## 2. 版本发布
> **今日无新版本发布**  
> 当前最新稳定版仍为 **v2.0.1**，下一版本（预计 v2.0.2 或 v2.1.0）需待 P0 级 Bug 修复验收后切 Tag。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 标题 | 类型 | 影响面 | 合并时间 | 进度评价 |
|----|------|------|--------|----------|----------|
| [#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691) | feat(console): add reranker config UI for reme0.4 memory search | ✨ Feature | Console/UI、Memory 检索 | 2026-07-25 | **已关闭**（功能合入主干，配套后端 #5692 同步关闭） |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | feat(memory): add reranker for search results on reme0.4 | 🔧 Backend | Memory/Reranker 管线 | 2026-07-25 | **已关闭**（完成 reme0.4 语义重排核心链路，填补检索精度短板） |

> **里程碑意义**：ReMe 0.4 记忆检索“召回→重排”闭环正式落地，为后续 Agent 长期记忆、RAG 增强奠定基础设施基线。

---

## 4. 社区热点（高互动/高关注）

| 排名 | Issue/PR | 评论/👍 | 核心诉求 | 链接 |
|------|----------|---------|----------|------|
| 1 | **#6470 / #6469 / #6468** (同一根因) | 3 条评论 / 0 👍 | **MCP `streamable_http` 传输协议被硬编码 SSE 客户端阻断**，导致所有配置该协议的 MCP Server 连接失败、工具加载不可用。用户已定位至 `mcp_stateful_client.py:800` `_setup_transport`。 | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) |
| 2 | **#6460** | 2 条评论 / 0 👍 | **Edge + Wayland 单标签 CPU 飙升**，疑似大结果集渲染 / WebSocket 推送触发，严重影响 Linux 桌面端可用性。 | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) |
| 3 | **#6464** | 1 条评论 / 0 👍 | **模型连接测试全面失败**，聊天界面模型下拉为空，Platform 部署场景完全不可用。 | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) |
| 4 | **#6276** (PR) | — | **浏览器统一 SDK 重构**（Control/Execution Plane 分离），属大型架构重组，审查周期长，社区关注度高。 | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) |

> **洞察**：MCP 传输层缺陷在 24h 内被 3 位不同用户独立提交，**去重机制失效**；Edge/Wayland 与模型连接失败均为“安装即崩”级体验断点，建议维护者发布 **Known Issues 公告** 并引导用户降级或规避。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 标题 | 根因/现象 | 是否有 Fix PR | 状态 |
|--------|-------|------|-----------|---------------|------|
| **P0 - 阻塞** | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver ignoring transport config — hardcoded SSE client breaks streamable_http servers | `mcp_stateful_client.py` 硬编码 `sse_client`，忽略 YAML `transport: streamable_http` | ❌ 无 | 🔴 Open |
| **P0 - 阻塞** | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | 连接测试失败：API error when connecting to model 'xxx' | Platform 部署下所有模型连通性中断，下拉列表为空 | ❌ 无 | 🔴 Open |
| **P0 - 严重** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge+Wayland 下单标签高 CPU 占用 | 大结果集渲染 / WebSocket 推送疑似触发主线程繁忙 | ❌ 无 | 🔴 Open |
| **P1 - 主要** | [#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469) | 同 #6470 (重复) | Jin10 MCP 工具报错 `Session terminated` | ❌ 无 | 🔴 Open |
| **P1 - 主要** | [#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468) | 同 #6470 (重复) | 同上 | ❌ 无 | 🔴 Open |
| **P2 - 次要** | [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467) | qwenpaw.agentscope.io 服务器搭建节点失败 | 用户自建代理节点异常，文档/视频指引可能过期 | ❌ 无 | 🔴 Open |

> **修复建议**：  
> 1. 立即开分支 `hotfix/mcp-transport-hardcode` 修正 `_setup_transport` 读取配置动态实例化 Transport。  
> 2. #6464 需排查 Platform 侧模型注册表与网关代理配置，建议并行复现。  
> 3. #6460 引入性能剖析（`chrome://tracing` / `perf`）定位渲染/WS 热点，考虑虚拟列表/分页/防抖。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求描述 | 关联现有工作 | 纳入下版本概率 | 备注 |
|----------|----------|--------------|----------------|------|
| [#6466](https://github.com/agentscope-ai/QwenPaw/issues/6466) | Agent 输出可点击的文件/文件夹路径按钮（打开资源管理器） | 无现成 PR，涉及 Markdown 渲染器扩展 + Electron `shell.openPath` | 🟡 中（低侵入、高体验价值） | 建议作为 v2.1.0 “开发者体验”专项纳入 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | ReMeLightMemoryCard 新增 Reranker UI 配置面板 | 配套后端 #5692 已合入 | 🟢 高（PR 在审，功能完整） | 随 v2.0.2 发布同步上线 |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 统一浏览器 SDK（Control/Execution Plane 分离） | 长期架构重构，影响自动化、爬虫、测试全链路 | 🔴 低（短期不进稳定版） | 需完整 E2E 通过后再考虑合入主干 |
| [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | 文档修正：Windows 原生沙箱支持（AppContainer/Restricted Token） | 修正过时 “需 WSL2” 说法 | 🟢 高（纯文档，无风险） | 立即合入 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点场景 | 典型原声 | 情感倾向 | 隐性需求 |
|----------|----------|----------|----------|
| **MCP 生产不可用** | “所有配置为 Streamable HTTP 的 MCP Server 连接失败，工具无法加载” (#6470) | 😤 挫败 | 协议兼容性矩阵文档、自动化兼容性测试 |
| **Linux 桌面不可用** | “单标签 CPU 狂飙、风扇全速，基本只出现在 QwenPaw 页面” (#6460) | 😟 焦虑 | Wayland 适配测试基线、性能预算门禁 |
| **Platform 部署即挂** | “测试所有模型均返回连接失败，聊天下拉为空” (#6464) | 😡 愤怒 | 部署自检脚本、健康检查面板 |
| **新手入门断层** | “按视频搭建节点最后 -1，群里也没人理” (#6467) | 😔 无助 | 交互式向导、故障自诊断、社区响应 SLA |
| **开发效率细节** | “Agent 给路径还要手动复制粘贴进资源管理器” (#6466) | 😐 平淡 | 交互微创新、无障碍访问 |

> **关键洞察**：用户在 **“协议不兼容”**、**“平台部署交付质量”**、**“Linux 桌面适配”** 三大维度集中爆雷，反映 **发布前兼容性矩阵验收缺失** 与 **多环境 CI 覆盖不足**。

---

## 8. 待处理积压（长期未响应/高价值）

| 项目 | 类型 | 滞留时长 | 价值/风险 | 建议动作 |
|------|------|----------|-----------|----------|
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | PR (feat) | 6 天 | **架构级重构**，影响面极广，审查停滞 | 指定 Code Owner 发起架构评审会，产出《合入清单》与回滚预案 |
| [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) | PR (fix) | 4 天 | **首贡修复 Windows CI**，低风险高善意 | 加速 Review 合入，激励新贡献者 |
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | PR (fix) | 2 天 | **SQLite 持久化加固**（并发/WAL/Schema/备份），数据安全核心 | 优先合入，配合发布 v2.0.2 |
| [#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) | PR (ci) | 1 天 | **官网部署流水线修复**，关联发布自动化 | 合入后触发一次完整发布演练 |
| **Issue 去重机制** | Process | 长期 | 24h 内 3 个重复 Issue 消耗维护精力 | 配置 GitHub Issue Forms + 关键词拦截 Bot，或引入 `duplicate` 自动标签 |

---

## 📌 维护者行动清单（建议今日内执行）
1. **P0 修复分支**：`hotfix/mcp-transport` + `hotfix/model-connect` + `hotfix/edge-wayland-cpu` 并行开工，指定 Owner。  
2. **发布 v2.0.2-hotfix**：仅含上述 3 个 Fix + #6459 + #6462 + #6365，冻结新特性。  
3. **发布 Known Issues 公告**：在 GitHub Discussions / 官网 / 交流群置顶，附规避方案。  
4. **补全兼容性矩阵 CI**：新增 `streamable_http` MCP、Edge/Wayland、Platform 部署 3 个 E2E 矩阵。  
5. **治理重复 Issue**：配置 `issue-forms.yml` 强制填写环境/版本/复现步骤，启用 `duplicate-detector` Action。

---

> **下一份日报预告**：关注 v2.0.2-hotfix Tag 切发情况、MCP 传输层修复验收、Windows CI 绿标恢复、社区响应 SLA 改善。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-26

> 数据来源：GitHub API（zeroclaw-labs/zeroclaw），统计窗口：2026-07-25 00:00 – 2026-07-26 23:59 UTC

---

## 1. 今日速览

*   **活跃度极高**：过去 24 小时累计 **19 个 Issue 更新**（16 新开/活跃，3 关闭）与 **50 个 PR 更新**（48 待合并，2 合并/关闭），核心维护团队与外部贡献者并行推进多条主线。
*   **安全与稳定性为主旋律**：新增 3 个 **P1/High** 安全/稳定性 Issue（WhatsApp Web 配置旁路、Verifiable Intent 验证链缺失、Runtime 测试全局互斥锁中毒），均已有对应修复 PR 或追踪 Issue。
*   **v0.8.4 维护列车进入发布冲刺**：`#9376` 已打包完成 crates.io 发布、Changelog 生成、工作区重命名（`zeroclawlabs`→`zeroclaw`）等发布级变更，目标里程碑 7 月 31 日。
*   **架构重构持续推进**：“Everything is a plugin” (`#6489`)、Channel/Source 边界清理 (`#8583`)、插件共享出站策略 (`#9137`) 等长周期 Tracker 均有 PR 进展。
*   **CI/CD 优化并行化**：引入 Blacksmith 跑编译密集型 Job (`#9115`)，Runtime 压力测试并行化 (`#9371`)，显著缩短反馈回路。

---

## 2. 版本发布

**无新版本发布**。但 **PR #9376** `chore(release): cut v0.8.4` 已就绪，包含：
*   首次将工作区 18 个 crate 发布至 crates.io（根包重命名 `zeroclawlabs` → `zeroclaw`，`cargo install zeroclaw` 即可安装）。
*   5 个内部 crate 保持私有。
*   自动生成 Changelog，包含自 v0.8.3 以来所有合并变更。
*   **迁移提示**：下游依赖 `zeroclawlabs` 的项目需更新 `Cargo.toml` 为 `zeroclaw`。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 标题 | 类型 | 影响 |
|----|------|------|------|
| [#9270](https://github.com/zeroclaw-labs/zeroclaw/pull/9270) | `fix(web/deps): resolve npm audit advisories` | **Security/Deps** | 修复 3 个 High/Critical npm 审计项（`@redocly/openapi-core`、`js-yaml`、`brace-expansion`），关联 Issue `#9235` 已关闭。 |
| [#9123](https://github.com/zeroclaw-labs/zeroclaw/pull/9123) | `fix(plugins): host-stamp channel plugin routes` | **Bugfix/Plugins** | 修正插件通道路由：引入 `PluginChannelEndpoint`，分离路由类型与实例别名，消除宿主盖章缺失导致的路由冲突。 |

> **整体进度**：v0.8.4 维护列车（`#8357`）已完成核心修复与发布打包，剩余为 CI 绿灯确认与标签推送；插件化、网关 OpenAI 兼容、Telegram 多消息流式等大型特性仍在审阅/迭代中。

---

## 4. 社区热点（高互动/高关注 Issue & PR）

| 编号 | 标题 | 互动 | 核心诉求/分析 |
|------|------|------|---------------|
| [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | **WhatsApp Web `mode=business` 下配置旁路（S1 安全）** | 6 💬 | **运维误判风险**：配置看似锁定（`dm_policy`/`group_policy`），实则仅在 `personal` 模式生效；业务模式下空 `allowed_groups` 等同全放行。已拆出 `#9366` 追踪 `approval_timeout_secs` 未读取问题，PR `#9354` 增加运行时告警。 |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | **“Everything is a plugin” 统一插件目录（RFC/Tracker）** | 5 💬 | **架构长期方向**：将 Integrations（Channels/Providers/Tools）与 Wasmtime 插件合并为统一目录。当前阶段为设计共识收集，风险标记 High，需跨团队评审。 |
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | **Runtime 单测 95% 失败率 & 全局 Mutex 中毒（P1）** | 2 💬 | **CI 稳定性红线**：`cargo test -p zeroclaw-runtime --lib` 在 master 上极不稳定，单次断言失败污染全局锁导致连锁失败。阻碍合并信心，急需隔离/修复。 |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | **RFC: AI 辅助 PR 预审与复审** | 2 💬 | **工程效能提升**：利用现有 CI 结果触发 AI 初审，保留人工终审与风险分级。符合项目成熟的 PR 治理体系，讨论聚焦误报率控制与 CODEOWNERS 协同。 |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | **Telegram `multi_message` 流式模式（XL）** | 高关注 | **用户体验对齐**：补齐 Discord/Matrix 已有的分批发送节奏控制（`multi_message_delay_ms`），引入 Draft API 实现并发草稿节流，评论集中于并发节流语义与回退兼容。 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **S1 (Security)** | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) WhatsApp Web 业务模式配置旁路 | **Open** | [#9354](https://github.com/zeroclaw-labs/zeroclaw/pull/9354) (warn) | 需补全业务模式下的策略生效逻辑，当前仅加告警。 |
| **S1 (Security)** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) `verifiable-intent` 约束评估跳过凭证链验证 | **Open** | 无 | 核心安全逻辑缺陷：`evaluate_constraints` 直接信任调用方传入的 fulfillment，未校验加密链。 |
| **S2 (Degraded)** | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) Runtime 单测高失败率 & Mutex 中毒 | **Open** | 无 | 冲击 CI 通过率，需优先定位易失性测试并重构全局锁。 |
| **S2** | [#9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) Peer-agent 交付缺失成本追踪上下文 | **Open** | 无 | 导致预算不生效、花费不记账，影响多 Agent 协作场景。 |
| **S2** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) CLI 创建 Cron 任务 `delivery=none` 丢弃输出 | **Open** | 无 | 静默失败，用户无感知；需补全 CLI 交互式 delivery 配置。 |
| **S3** | [#9374](https://github.com/zeroclaw-labs/zeroclaw/issues/9374) CLI `run()` 手写生命周期导致 `AgentStart` 泄漏 | **Open** | 无 | 12 条退出路径均未 `AgentEnd`，影响可观测性指标完整性。 |
| **S3** | [#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) `config patch` 嵌套路径错误掩盖为未知属性 | **Closed** | 隐含在相关配置重构中 | 已关闭，可能由配置模块重构顺带修复。 |

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能/方向 | 成熟度 | 可能纳入版本 |
|----------|-----------|--------|--------------|
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) Tracker | **统一插件目录**（Integrations ↔ Plugins 合并） | 设计阶段/RFC | **v0.9+** 长周期，需分阶段落地。 |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) PR | **Gateway OpenAI Chat Completions 端点** | 代码完成/审阅中 | **v0.8.4 或 v0.8.5** 高优先，解锁生态兼容。 |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) PR | **Telegram `multi_message` 流式** | 代码完成/迭代中 | **v0.8.4** 目标，补齐 Channel 能力对齐。 |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) PR | **Matrix 单消息进度草稿** | 代码完成/审阅中 | **v0.8.4** 目标。 |
| [#9200](https://github.com/zeroclaw-labs/zeroclaw/pull/9200) PR | **Atlas Cloud 模型提供商** | 代码完成/待审 | **v0.8.4** 小增量，低风险。 |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) PR | **配置 Schema 结构化 & Risk 字段** | 大型重构/长期迭代 | **v0.9+** 基础设施级，配合沙箱策略。 |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) RFC | **AI 辅助 PR 审查流水线** | 讨论早期 | **工程工具链**，非核心产品版本绑定。 |

> **判断**：v0.8.4 维护列车（7/31 截止）聚焦**修复、发布解锁、现有 Channel 能力补齐**；架构级重构（插件统一、配置 Schema、沙箱）明确推后至 v0.9。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

*   **安全配置的“虚假安全感”痛点** (`#9348`)：运维人员在业务模式下配置了 `dm_policy=deny` 却发现机器人仍回复所有私聊，**文档与运行时行为严重不符**，要求要么在业务模式下生效，要么配置校验阶段直接报错拒绝。
*   **CI 不稳定拖累开发效率** (`#9357`, `#8962`)：多位贡献者抱怨 `zeroclaw-runtime` 单测“跑一次过一次，重跑又过”，全局 Mutex 中毒导致无法定位真实回归，**强烈要求隔离易失性测试或标记 `#[ignore]`**。
*   **插件开发体验** (`#9125`, `#9124`, `#9137`)：插件作者期望 Channel Listener 被监管树托管（而非后台任务）、真实 WASM 组件 Fixture 可用、统一出站策略避免重复造轮子。
*   **国际化缺口** (`#9363`, `#9377`)：ZeroCode/Web 界面配置元数据（分组标题、字段说明）仍硬编码英文，**中文翻译 PR `#9377` 已提交**，但运行时元数据翻译机制尚缺失。
*   **可观测性盲区** (`#9349`, `#9373`)：`AgentEnd.cost_usd` 长期为 `null`、Peer-agent 交付无成本追踪，**FinOps 场景无法落地**，用户期望开箱即用的 Token/美元核算。

---

## 8. 待处理积压（长期未响应/高风险）

| 编号 | 标题 | 停滞天数 | 风险 | 建议动作 |
|------|------|----------|------|----------|
| [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) | `forbid(unsafe_code)` 全局生效（仅 `aardvark-sys` 例外） | **54 天** | **供应链安全基线**；当前仅文档承诺，编译器未强制。 | 指派 Owner，拆解为 crate 级 PR 逐个加 `#[forbid(unsafe_code)]`，CI 门禁。 |
| [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) | v0.8.4 维护列车 Tracker | **30 天** | **发布管理**；目标 7/31，剩余 5 天需锁定范围、清理 CI。 | 每日站会跟进 `#9376` 发布 PR 绿灯情况，必要时切 `release/v0.8.4` 分支冻结。 |
| [#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) | Channel/Source 共享边界清理 & Orchestrator 裁剪 | **25 天** | **架构债**；新 Channel 接入易引入不一致。 | 确认 `#9125`/`#9124` 合并后是否可关闭部分子任务，产出 ADR 文档。 |
| [#9328](https://github

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*