# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 01:54 UTC

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

# OpenClaw 项目动态日报 | 2026-08-05

---

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内 Issues 更新 500 条（新开/活跃 456，关闭 44），PR 更新 500 条（待合并 381，已合并/关闭 119），显示社区与维护团队处于密集并行开发与治理阶段。
- **零新版本发布**：当前处于开发分支（`main`）快速迭代期，积累大量修复与改进待合并，稳定版发布节奏可能滞后于代码库演进。
- **核心痛点聚焦**：高优先级（P1）Issue 高度集中在 **会话状态一致性**、**消息丢失/静默失败**、**子代理编排可靠性**、**网关主线程饱和/崩溃循环** 及 **认证/计费冷却恢复** 五大领域，多为“钻石龙虾”级严重评级。
- **PR 队列积压严重**：381 个待合并 PR 中，不乏标注 `merge-risk: 🚨 session-state/compatibility/security-boundary` 的大体量变更，审核吞吐可能成为瓶颈。
- **技术债显性化**：多个长期 Issue（如内存管理混乱、配置格式支持、文件名编码、WebChat 渲染差异）持续获得社区跟进，反映项目从“功能扩张”向“架构固化”过渡的阵痛。

---

## 2. 版本发布
**今日无新版本发布。**  
最近一次发布信息未在数据中体现，当前主线版本仍为 `2026.7.2-beta.x` 系列（见 Issue #118846、#119263）。建议关注后续 `stable` 分支切割节点。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题/核心变更 | 影响领域 | 状态/风险 | 链接 |
|----|---------------|----------|-----------|------|
| #119390 | **fix(codex): 复用核心脱敏策略处理监督工具结果** — 修复 Codex 监督工具仅用窄正则脱敏，导致凭证泄露风险 | 安全边界、认证提供者 | OPEN, P1, `merge-risk: 🚨 security-boundary`, needs proof | [#119390](https://github.com/openclaw/openclaw/pull/119390) |
| #119389 | **fix(system-agent): 批准的提案仅执行一次** — 修复系统代理冻结操作经批准后不执行的问题 | 会话状态、自动化 | OPEN, P1, `merge-risk: 🚨 security-boundary`, needs proof | [#119389](https://github.com/openclaw/openclaw/pull/119389) |
| #119376 | **Keep Slack progress and final replies in one message** — 合并草稿与最终回复，减少通知噪音 | 消息投递、Slack 适配器 | OPEN, P1, `merge-risk: 🚨 message-delivery/security-boundary`, needs proof | [#119376](https://github.com/openclaw/openclaw/pull/119376) |
| #119326 | **fix(agents): 遵守账号级历史限制而非静默忽略** — 修复多账号频道 `historyLimit`/`dmHistoryLimit` 配置未生效 | 兼容性、会话状态 | OPEN, P1, `merge-risk: 🚨 compatibility/session-state`, needs proof | [#119326](https://github.com/openclaw/openclaw/pull/119326) |
| #119023 | **fix(slack): 保留 Bot 开启线程时的频道上下文** — 解决用户在频道发起对话后，代理开线程回复丢失上下文 | Slack 适配器、会话状态 | OPEN, P1, `merge-risk: 🚨 compatibility/session-state`, needs proof | [#119023](https://github.com/openclaw/openclaw/pull/119023) |
| #116404 | **fix(auto-reply): 瞬态预检压缩失败后继续执行** — 避免维护模型超时/限流/5xx 导致整轮回复失败 | 可用性、代理运行时 | OPEN, P1, `merge-risk: 🚨 availability`, needs proof | [#116404](https://github.com/openclaw/openclaw/pull/116404) |
| #118717 | **fix(agents): 对嵌入式运行应用逐代理上下文上限** — 修复嵌入式轮次按模型默认窗口而非代理配置 `contextTokens` 预检 | 会话状态、上下文管理 | OPEN, P1, `merge-risk: 🚨 session-state`, needs proof | [#118717](https://github.com/openclaw/openclaw/pull/118717) |
| #119396 | **fix(qa): 停止仅含僵尸进程的网关进程组** — 修复 Docker E2E 清理阶段误判成功通道为失败 | QA 基建、自动化 | OPEN, P2, `merge-risk: 🚨 other`, needs proof | [#119396](https://github.com/openclaw/openclaw/pull/119396) |
| #119400 | **fix: 原始流写入失败导致的未处理拒绝崩溃进程** — 磁盘满/权限/符号链接拒绝不再导致网关退出 | 稳定性、网关 | OPEN, XS, needs proof | [#119400](https://github.com/openclaw/openclaw/pull/119400) |
| #119399 | **fix(slack): 为无文件名媒体上传推断扩展名** — 修复 Slack 无文件名上传被错误分类为 `upload` 而非具体 MIME | Slack 适配器、用户体验 | OPEN, S | [#119399](https://github.com/openclaw/openclaw/pull/119399) |

> **进展评估**：今日 PR 活动以 **“修复回归/数据一致性/安全边界”** 为主，多为 P1 且标注 `needs proof`，表明维护团队正在系统性清理 `2026.7.x` 系列引入的高风险缺陷，但合并门槛（需人工验证证明）导致吞吐受限。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）

### Issues Top 5（按评论数）
| # | 标题 | 评论 | 👍 | 核心诉求 | 链接 |
|---|------|------|----|----------|------|
| #116277 | **DeepSeek v4 Flash 静默回复失败 — 无回复生成，通用兜底** | 104 | 0 | 模型提供商集成的健壮性：静默失败无重试、无可观测性、用户仅见兜底文案 | [#116277](https://github.com/openclaw/openclaw/issues/116277) |
| #116201 | **实时语音工作可保留无界提供者与咨询状态** | 59 | 0 | 实时语音会话资源边界缺失：慢/阻塞/突发流量下保留超量 provider frames、预备音频、播放缓冲 | [#116201](https://github.com/openclaw/openclaw/issues/116201) |
| #115326 | **崩溃循环熔断器永久抑制 Discord/WhatsApp，文档恢复路径失败 (WS 1006)** | 25 | 0 | 崩溃循环保护机制过度激进且恢复路径失效，导致整个频道永久不可用 | [#115326](https://github.com/openclaw/openclaw/issues/115326) |
| #44925 | **子代理完成静默丢失 — 无重试、无通知、超时无自动重启** | 23 | 2 | 子代理编排的核心可靠性缺口：结果在多种失败模式下静默丢弃，无可观测恢复机制 | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| #48788 | **feat: 多编码 Content-Disposition 处理的中心化文件名编码工具** | 20 | 1 | 跨频道适配器统一解决中文/日文/韩文文件名编码问题，而非单点修复 | [#48788](https://github.com/openclaw/openclaw/issues/48788) |

### PRs 关注点
- **#119390 (Codex 凭证脱敏)** 与 **#119389 (系统代理提案执行)** 刚创建即标记 `P1` 且涉及 `security-boundary`，虽评论数未体现（数据为 `undefined`），但风险等级最高，极可能成为维护团队今日审核重点。
- **#119326 (账号级历史限制)**、`#119023 (Slack 线程上下文)` 解决多账号/多线程场景下的长期配置失效痛点，社区期待值高。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 核心症状 | 是否有 Fix PR | 链接 |
|--------|-------|----------|---------------|------|
| **🔴 P1 / 崩溃循环 / 消息丢失** | #115326 | 崩溃循环熔断器永久禁用 Discord/WhatsApp，`channels.start` 恢复失败 (WS 1006) | 无 | [#115326](https://github.com/openclaw/openclaw/issues/115326) |
| **🔴 P1 / 消息丢失 / 静默失败** | #116277 | DeepSeek v4 Flash 静默失败，无重试/告警，仅展示兜底文案 | 无 | [#116277](https://github.com/openclaw/openclaw/issues/116277) |
| **🔴 P1 / 会话状态 / 主线程饱和** | #118846 | 网关主线程启动即 100% CPU (plugin-metadata snapshot + fs stat)，导致 RPC `ws_upgrade` 1006 死亡 | 无 | [#118846](https://github.com/openclaw/openclaw/issues/118846) |
| **🔴 P1 / 会话状态 / 消息丢失** | #115908 | 会话转录投影重建活锁占主线程，阻塞所有频道传输数十秒 | 无 | [#115908](https://github.com/openclaw/openclaw/issues/115908) |
| **🔴 P1 / 子代理编排 / 消息丢失** | #44925 | 子代理完成结果在宣布/超时/排队/孤儿清理等多路径静默丢失 | 无 | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| **🔴 P1 / 子代理编排 / 消息丢失** | #67777 | 直接宣布超时/排水/孤儿修剪导致子代理完成投递丢失 | 无 | [#67777](https://github.com/openclaw/openclaw/issues/67777) |
| **🔴 P1 / 认证 / 崩溃循环** | #119263 | Agent DB v14→v15 迁移失败 `no such column: entry_valid`，网关拒绝启动 | 无 | [#119263](https://github.com/openclaw/openclaw/issues/119263) |
| **🔴 P1 / 会话状态 / 上下文上限** | #116010 | 所有持久会话硬编码 128k 上下文上限，忽略模型能力与配置 | 无 | [#116010](https://github.com/openclaw/openclaw/issues/116010) |
| **🟠 P1 / 认证 / 计费冷却** | #115642 | 订阅制计费错误触发固定 5 小时冷却，无探针恢复/手动重置 | 无 | [#115642](https://github.com/openclaw/openclaw/issues/115642) |
| **🟠 P1 / 嵌入式助手 / 重试缺失** | #117609 | 瞬态 LLM/Socket 错误在频道/一次性任务有重试，但嵌入式助手阶段无重试，长轮次整体死亡 | 无 | [#117609](https://github.com/openclaw/openclaw/issues/117609) |
| **🟠 P2 / 僵尸进程 / 运行时退化** | #97616 | Hook/Tool 子进程未回收导致僵尸累积，运行时性能随时间下降 | 无 | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| **🟠 P2 / 认证 / OAuth 超时** | #89278 | Codex OAuth 刷新成功但 cron/心跳因 10s 认证刷新超时失败 | 无 | [#89278](https://github.com/openclaw/openclaw/issues/89278) |
| **🟠 P2 / WebChat 渲染** | #77136 | WebChat 部分助手消息不渲染（TUI/转录正常），前端隔离缺陷 | 无 | [#77136](https://github.com/openclaw/openclaw/issues/77136) |
| **🟠 P2 / 会话状态 / 重复发送** | #114690 | Discord 成功发送后，同一轮次 Codex 压缩后恢复再次发送

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-08-05

---

## 1. 生态全景

当前生态呈现 **“头部项目架构收敛、腰部项目功能扩张、长尾项目维持维护”** 的三层态势。OpenClaw、IronClaw、ZeroClaw 等头部项目已进入 **核心运行时稳定性攻坚期**（会话一致性、安全边界、编排可靠性），PR 积压与 P0 级 Bug 清理成为主旋律；NanoBot、Hermes Agent、CoPaw 等腰部项目处于 **多模态接入、Provider 生态扩展、WebUI 体验重构** 的密集迭代期，发布节奏加快；PicoClaw、NanoClaw、NullClaw 等轻量级项目聚焦 **垂直场景适配与工程化交付**。整体生态从“功能竞赛”转向 **“生产级可靠性、多租户隔离、协议互操作（A2A/MCP）、成本可观测”** 的工程化深水区。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release | 合并率/吞吐 | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500** (新/活跃 456) | **500** (待合并 381) | 无 | 低 (119/500) | ⚠️ **高负载/积压** | 会话一致性攻坚、安全边界修复、PR 审核瓶颈 |
| **IronClaw** | 50 | 50 | 无 (rc.1 冲刺) | 高 (18 合并) | ✅ **高质量冲刺** | v1.1.0-rc.1、Reborn 架构收尾、Windows 发布解锁 |
| **ZeroClaw** | 50 (新/活跃 48) | 50 (待合并 48) | 无 | 极低 (2 关闭) | ⚠️ **设计并行/审核阻塞** | RFC 密集评审、安全加固、A2A 协议、会话所有权重构 |
| **Hermes Agent** | 50 | 50 | 无 (v0.19.1) | 中 (6 合并) | 🔥 **高强度修复** | Prompt Cache P0 修复、Telegram 重构、插件架构规划 |
| **NanoBot** | 5 | **26** (合并 18) | 无 | **极高 (69%)** | ✅ **高效交付** | Opus 5 适配、WebUI 重构、安全隔离债务、Matrix 修复 |
| **CoPaw (QwenPaw)** | 28 | **49** (合并 21) | 无 (v2.1.0-beta.1) | 高 | 🔥 **Beta 后热修复期** | Windows 崩溃 P0、WeChat 审批失效、技能按需加载需求 |
| **LobsterAI** | 0 | 10 (合并 7) | **有 (2026.8.3)** | 高 | ✅ **版本落地/安全债务** | 积分活动、Artifact 控制、React 19/Electron 43 升级受阻、Key 泄露未修 |
| **NanoClaw** | 0 | 5 (合并 1) | 无 | 中 | 🟢 **架构重构/新通道** | Dial 语音通道集成、Discord 审批 P0 Bug、Host Seams 重构 |
| **PicoClaw** | 0 | 4 (合并 0) | 无 | **0%** | ⚠️ **流程受阻/核心 Bug 悬而未决** | MCP 死循环、Web UI 卡顿、Stale 机制误伤高价值 PR |
| **NullClaw** | 0 | 1 (更新 1) | 无 | 低 | 🟢 **单一 Provider 扩展** | grok-cli 接入待 Review，生态扩展范式固化 |
| **Moltis** | 0 | 1 (Dependabot) | 无 | 低 | 🟡 **静默维护** | 仅文档站依赖升级，核心开发停滞 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | - | ⏸️ **无活动** | - |

> **注**：OpenClaw、IronClaw、ZeroClaw、Hermes Agent 因数据采样上限（500/50）显示饱和，实际活跃度可能更高。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 对比基准 |
| :--- | :--- | :--- |
| **技术路线** | **重运行时、重网关、重多租户隔离** 的“平台级”架构。核心资产在于 **Gateway 进程模型、插件沙箱、多协议适配层、Agent DB 迁移体系**。 | IronClaw/ZeroClaw 同属重架构阵营，但 OpenClaw 更侧重 **Slack/企业协作入口** 与 **Codex/Claude 等外部 CLI 代理编排**；IronClaw 强 WASM/Reborn 自研运行时；ZeroClaw 强 A2A/协议互操作与 TUI。 |
| **社区规模** | **头部第一梯队**。单日 Issue/PR 量级为其他项目 10-100 倍，P1 级 Issue 深度（会话状态、子代理编排、认证冷却）反映 **大规模生产部署反哺**。 | NanoBot/CoPaw 核心维护者驱动为主；IronClaw/ZeroClaw 有核心团队+外部贡献者双轨；OpenClaw 展现出最广泛的外部贡献者并行修复能力（但审核成瓶颈）。 |
| **优势** | 1. 企业级连接器最全；2. 子代理/编排模型最成熟；3. 安全边界（脱敏、认证）治理最系统。 | - |
| **劣势/风险** | 1. **技术债利息极高**：主线程饱和、DB 迁移失败、配置格式分裂；2. **治理吞吐不足**：381 PR 积压、`needs proof` 门槛高；3. 稳定版发布滞后于主线数月。 | IronClaw 通过 Clippy/Composition 门禁强治理；NanoBot 通过小步快跑保吞吐。 |

**结论**：OpenClaw 是生态中 **“工程复杂度上限最高、生产案例最丰富、但也最痛苦”** 的项目，适合作为 **架构反模式参考** 与 **企业级落地基座**，但需解决“审核瓶颈”否则将拖累创新速度。

---

## 4. 共同关注的技术方向 (跨项目趋同)

| 趋势方向 | 涉及项目 | 具体诉求/动作 | 成熟度 |
| :--- | :--- | :--- | :--- |
| **Prompt Cache / KV Cache 成本优化** | **OpenClaw** (#118846, #118717), **Hermes** (#78959, #79012, #79014), **CoPaw** (#6649), **NanoBot** (隐性) | 跨会话/轮次 Cache Key 作用域隔离、xAI/OpenAI/Anthropic 多厂商参数适配、Prompt Cache Token 审计日志 | 🔥 **P0 级并行攻坚**，OpenClaw/Hermes 已有核心修复合并 |
| **安全边界与凭证零泄露** | **OpenClaw** (#119390 Codex 脱敏), **NanoBot** (#4784 环境变量泄露 P0), **ZeroClaw** (#9565 Webhook Fail-closed, #9362 沙箱逃逸), **LobsterAI** (#1202 Key 泄露 126 天未修) | 监督工具结果脱敏、Provider 进程级隔离、Webhook 签名强校验、工具调用路径校验 | 🔴 **高危债务集中爆发**，NanoBot/NullClaw 尚无 Fix PR |
| **多通道/多会话一致性 (Web/IM/TUI/Console)** | **CoPaw** (#6655 Console 审批缺失, #6695 WeChat 单通道), **Hermes** (Telegram 重构), **OpenClaw** (#119023 Slack 线程上下文), **NanoBot** (WebUI 统一浮层), **ZeroClaw** (#9488 统一附件架构) | 审批渲染跨端一致、线程/会话上下文传递、附件模型统一、WebUI 组件库标准化 | 🟢 **架构重构进行中**，ZeroClaw/CoPaw 显性化为 Epic |
| **Agent 编排可靠性 (子代理/工具/ Cron)** | **OpenClaw** (#44925, #67777 子代理丢失), **ZeroClaw** (#9320 Cron 墙钟超时), **NanoBot** (#5237 MCP 错误语义识别), **IronClaw** (#6284 Error Recoverability), **CoPaw** (#6691 Cron 持久化) | 结果投递至少一次、超时/熔断/重试标准化、业务错误语义化、定时任务状态持久化 | 🟡 **从“功能实现”转“契约保障”**，OpenClaw/ZeroClaw 投入最大 |
| **Provider 生态标准化与新模型极速适配** | **NanoBot** (Opus 5 <24h, Exa Search PR), **NullClaw** (grok-cli 模板化), **OpenClaw** (DeepSeek v4 Flash 静默失败), **Hermes** (xAI Responses), **CoPaw** (GPT-5.6 Caching, DeepSeek Thinking) | CLI Provider 统一 `spawn-per-request` 模板、新模型发布即适配、错误分类细化、思维链/推理内容保留 | ✅ **最成熟协作模式**，NanoBot/NullClaw 形成可复用范式 |
| **A2A / MCP 协议互操作** | **ZeroClaw** (#9324 A2A 出站客户端 Phase 1), **NanoBot** (MCP 错误包装), **OpenClaw** (隐性), **IronClaw** (隐性) | A2A Wire Model 共享、工具调用标准化、MCP 客户端熔断/健康检查 | 🟢 **ZeroClaw 领跑**，其余多在消费端适配 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | IronClaw | ZeroClaw | NanoBot | Hermes Agent | CoPaw | LobsterAI | NanoClaw / PicoClaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **核心抽象** | Gateway + Plugin Sandbox + External Agent Orchestration | Reborn Runtime (WASM/Capsule) + Capability Graph | Runtime-owned Session + Transport Adapter + A2A | Core Agent + Provider Registry + Channel Adapter | Plugin/Channel 架构 + Codex CLI 深度绑定 | Qwen Agent + Multi-Channel + Skill System | Electron Desktop + Cowork 协作 + 积分商业化 | Lightweight Gateway / Edge Agent |
| **目标用户** | 企业 IT、平台工程师、重 Slack/Teams 协作场景 | 高级开发者、WASM 爱好者、自建可控运行时需求 | 协议极客、多 Agent 互操作、TUI 重度用户 | 个人开发者、多模型聚合、WebUI 体验派 | Codex/CLI 重度用户、Telegram 社区运营 | 国内开发者、Qwen 生态、桌面端多通道 | 企业内部部署、知识管理、商业化探索 | 边缘设备、嵌入式、轻量部署 |
| **架构特征** | **进程隔离重、状态外置 (Agent DB)、插件动态加载** | **编译期隔离 (WASM)、能力图谱、Hermetic Test** | **会话所有权下沉、协议优先、安全默认** | **单进程异步、Provider 可插拔、WebUI 一体化** | **外部 CLI 代理为主、插件生命周期管理** | **技能驱动、系统提示词动态构建、桌面端原生** | **主/渲染进程分离、本地优先、商业化功能内置** | **单二进制、资源受限友好、配置驱动** |
| **商业化痕迹** | 开源核心，企业功能模糊 | 纯社区/研究导向 | 纯社区/协议推动 | 纯社区 | 社区/学术 (Nous Research) | 商业公司主导 (AgentScope) | **显性商业化** (积分、广告、Artifact 控制) | 硬件厂商主导 (Sipeed/qhkm) |

---

## 6. 社区热度与成熟度分层

| 梯队 | 项目 | 阶段特征 | 关键指标 | 战略建议 |
| :--- | :--- | :--- | :--- | :--- |
| **S 级：平台化攻坚期** | **OpenClaw, IronClaw, ZeroClaw** | **高并发、高复杂度、高技术债**。核心矛盾：架构演进速度 vs 审核/测试吞吐 vs 稳定版交付。 | 日均 PR>50，P0 Bug 存活周期长，架构文档/RFC 机制完善。 | **引入自动化治理**（合并队列、风险分级、依

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-05

> 数据范围：2026-08-04 至 2026-08-05（UTC） | 数据来源：GitHub Issues/PRs API

---

## 1. 今日速览

**活跃度评级：🟢 高**  
过去 24 小时内，项目呈现 **“重构与修复并行，WebUI 与 Provider 双线推进”** 的高强度开发态势。共计 **26 个 PR 更新（18 个已合并/关闭，8 个待合并）**、**5 个 Issue 活跃**，无新版本发布。核心维护者 `chengyongru`、`goodtiding5`、`orrinwitt` 等高频提交，WebUI 重构（统一浮层、Markdown 渲染、Vite 开发模式）、Provider 安全加固（Anthropic Opus 5 支持、密钥泄漏修复）、Matrix/Telegram 等渠道适配修复同步落地。项目处于 **功能完善与架构清理的密集冲刺期**，技术债偿还（如会话权限模型简化、请求作用域移除）力度较大，整体代码库健康度向好。

---

## 2. 版本发布

**今日无新版本发布。**  
当前最新版本仍为历史版本，建议关注后续 `chore(release)` 分支或自动化发布流水线。

---

## 3. 项目进展

今日合并/关闭的 **18 个 PR** 覆盖 WebUI 体验、Provider 兼容、渠道健壮性、安全认证、命令解析等核心领域，推进幅度显著：

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) | **Bug Fix (P1)** | **Anthropic Opus 5 支持**：移除硬编码采样参数排除，按模型族版本阈值动态发送 `effort`/`budget_tokens`，需 `anthropic>=0.49.0` | **所有 Anthropic 用户**，解决 Opus 5 请求被拒 |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | **Refactor (P1)** | **会话权限模型简化**：移除请求作用域 `Tool.available()` 与 `SessionAccessScope`，统一由 `Tool.enabled()` 控制；会话工具可读取该用户所有持久会话 | **核心 Agent 运行时**，降低授权复杂度，潜在破坏性变更需验证 |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | **Security/Feature (P1)** | **WebUI 受信代理 Bootstrap 认证**：支持 Cloudflare Tunnel + Access 等零 Token 认证模式，需显式配置 CIDR 与 Header | **生产部署安全**，零信任网络适配 |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | **Feature (P1)** | **WebUI 集成 Vite 开发模式**：`nanobot webui --dev` 一键启动网关 + HMR，含就绪检查与副作用清理 | **前端贡献者体验**，大幅缩短热重载循环 |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | **Refactor (P2)** | **WebUI 视觉一致性重构**：双层高度系统、扁平化 Skills/Channels 布局、移除重播动画、系统主题自动检测 | **全量 WebUI 用户**，UI 技术债偿还 |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | **Bug Fix (P2)** | **WeCom 文件名清理兜底**：防止全非法字符文件名导致写入目录而非文件 | **企业微信渠道稳定性** |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | **Bug Fix (P2)** | **Telegram 代码块语言标签修复**：支持 `c++`、`objective-c` 等含特殊字符语言标识 | **Telegram 渠道富文本渲染** |
| [#5244/5245/5243/5241/5240](https://github.com/HKUDS/nanobot/pull/5244) | **Bug Fix/Refactor (P2)** | **WebUI 细节打磨**：Prompt Rail Markdown 渲染、时间戳 Tooltip 统一、自动化元数据对齐、Inline Token 高亮优化、浮层控件统一 | **WebUI 交互细节体验** |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | **Bug Fix (P2)** | **斜杠命令校验增强**：拒绝未注册命令、拼写纠错建议、仅命令历史持久化 | **CLI/WebUI 命令交互健壮性** |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | **Feature (P2)** | **Mattermost 线程独立 Group Policy**：区分主频道/线程 @ 提及策略，WebUI 暴露配置 | **Mattermost 企业用户** |

> **进展小结**：核心运行时（Provider/Session）完成关键架构简化与新模型适配；WebUI 进入 “视觉统一 + 开发体验 + 安全认证” 三位一体收尾阶段；多渠道（Matrix/Telegram/WeCom/Mattermost）边缘兼容性修复密集落地。

---

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 互动 | 核心诉求分析 |
|------|----------|------|------|--------------|
| 1 | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | **Security: Provider API keys leaked via global `os.environ` mutation** | 👍 0 / 评论 2 / 活跃 30 天 | **安全痛点**：全局环境变量写入导致多 Provider 密钥相互覆盖/泄漏，尤其影响网关型 Provider。用户期望进程级隔离或上下文管理器方案，当前无 PR 关联，需尽快纳入安全迭代。 |
| 2 | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | **MCP tool returns error envelope → agent ignores it, waits for timeout** | 👍 0 / 评论 1 / 新建 | **Agent 智能化缺口**：MCP 业务错误（`isError=False` 但含错误码）未被识别为失败，导致 LLM 无法重试/纠错。需在 Tool 结果规范化层引入语义错误识别。 |
| 3 | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | **Matrix bot does not auto-join when invited (Continuwuity rejects empty POST)** | 👍 0 / 评论 0 / 新建 | **渠道兼容性阻断**：`nio` 库 `join()` 发空 Body，Continuwuity 返回 `M_BAD_JSON`。已有对应修复 PR [#5248](https://github.com/HKUDS/nanobot/pull/5248) 待合并。 |
| 4 | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | **[Closed] Anthropic Opus 5 temperature bug** | 👍 0 / 评论 1 | **新模型适配时效性**：Opus 5 发布 10 天内完成修复并关闭（配合 #5236），展示社区对前沿模型响应速度。 |
| 5 | [#5246](https://github.com/HKUDS/nanobot/issues/5246) | **[Enhancement] `.gitignore` leaves `memory/.cursor` & `history.jsonl` untracked** | 👍 0 / 评论 0 | **工作区脚手架细节**：Dream 初始化时 `.gitignore` 否定规则不全，导致编辑器配置与历史文件未纳入版控。 |

> **热点洞察**：安全隔离（#4784）与 Agent 错误语义识别（#5237）为 **架构级隐患**，虽评论少但影响面广；渠道适配（#5247）已有修复跟进；新模型适配（#5235→#5236）形成 “Issue→PR→Close” 闭环最佳实践。

---

## 5. Bug 与稳定性

| 严重级 | Issue | 现象 | 状态 | 关联 PR |
|--------|-------|------|------|---------|
| **P0 安全** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Provider API Key 全局环境变量泄漏/覆盖 | 🔴 **Open，无 PR** | — |
| **P1 回归** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Opus 5 请求因温度参数被拒 | ✅ **Closed** | [#5236](https://github.com/HKUDS/nanobot/pull/5236) ✅ Merged |
| **P1 逻辑** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP 业务错误被当作成功，Agent 超时才感知 | 🔴 **Open，无 PR** | — |
| **P2 渠道** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix 受邀不自动入群 | 🟡 **Open，有 PR** | [#5248](https://github.com/HKUDS/nanobot/pull/5248) 🟡 Open |
| **P2 渲染** | [#5222](https://github.com/HKUDS/nanobot/issues/5222) | Telegram 代码块语言标签特殊字符截断 | ✅ **Closed** | [#5222](https://github.com/HKUDS/nanobot/pull/5222) ✅ Merged |
| **P2 文件** | [#5223](https://github.com/HKUDS/nanobot/issues/5223) | WeCom 文件名清理为空导致写目录 | ✅ **Closed** | [#5223](https://github.com/HKUDS/nanobot/pull/5223) ✅ Merged |
| **P2 交互** | — | WebUI Prompt Rail Markdown 不渲染 / Tooltip 样式不一致 / 自动化元数据错位 | ✅ **Closed** | [#5244](https://github.com/HKUDS/nanobot/pull/5244) [#5245](https://github.com/HKUDS/nanobot/pull/5245) [#5243](https://github.com/HKUDS/nanobot/pull/5243) ✅ Merged |

> **稳定性判读**：**P0 安全债（#4784）长期悬而未决**，建议立即建立安全专项 Sprint；**P1 回归（#5235）响应极快**（<24h 修复合并）；**Agent 语义错误识别（#5237）为新增盲区**，需设计统一错误包装层。

---

## 6. 功能请求与路线图信号

| 需求来源 | 信号强度 | 可能落地版本 | 备注 |
|----------|----------|--------------|------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) **Meta-Search Tool (mst-python) 作为新搜索 Provider** | 🔥 **高** | **下一版本** | PR 已开，含 WebUI 配置、RRF 融合、多引擎聚合，符合 “Provider 可插拔” 路线图 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) **Telegram 自定义 Bot API Base URL / Headers** | 🔥 **高** | **下一版本** | 解决 #4702，企业自建网关刚需，PR 待合并 20 天，建议加速 Review |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) **Mattermost 线程独立 Group Policy** | ✅ **已合并** | **当前开发版** | 已落地，WebUI 暴露配置 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) **WebUI Quick Chat / Temporary Chat** | 🟡 **中** | **下一版本** | 冲突标记，需解决 Rebase 后再评估 |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) **工作区 `.gitignore` 完善** | 🟢 **低** | **下一版本** | 单行配置修复，易捡漏 |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) **Telegram `group_mode` 配置补全** | 🟢 **低** | **长期积压** | 3 年旧 PR，冲突标记，建议关闭或重写 |

> **路线图推测**：**多 Provider 生态扩展（Meta-Search）+ 企业级渠道定制（Telegram 自建 API/Mattermost 线程策略）+ WebUI 交互范式升级** 为近期三大主线。

---

## 7. 用户反馈摘要

从 Issues 评论与 PR 讨论中提炼的真实痛点：

| 场景 | 痛点原话/意图 | 情感倾向 |
|------|---------------|----------|
| **多 Provider 并发** | “Gateway 型 Provider 会把前一个 Provider 的 Key 覆盖掉，导致后续请求失败” (#4784) | 😡 **强烈不满/安全焦虑** |
| **前沿模型首日可用** | “Opus 5 发布后温度参数直接导致 400，急需适配” (#5235) | 😰 **焦虑 → 😊 满意** (24h 修复) |
| **MCP 集成调试** | “业务层返回 404 但 `isError=false`，Agent 以为成功傻等超时，完全不知道哪

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-05

---

## 1. 今日速览

**活跃度评级：🔥 极高** — 单日 50 条 Issue 更新、50 条 PR 更新，零 Release，呈现典型的「修复冲刺 + 架构重构」并行态势。核心矛盾集中在 **提示词缓存键作用域修复（P0 级连环问题）**、**Telegram 适配器神级文件拆解**、**Windows 平台稳定性**、**Cron 生命周期守卫誤報** 四大战场。社区高讨论度 Issue 多为长期架构债（插件接口、多租户隔离、会话跨项目移动），显示项目正从「功能堆叠」转向「架构收敛」。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `v0.19.1`（Issue #75791、#78974 等均标注该版本）。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR（6 条）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#78866](https://github.com/NousResearch/hermes-agent/pull/78866) | ♻️ Refactor | Telegram `adapter.py` **首波拆解**：10,147 → 4,133 行，抽离 polling/inbound/delivery/rich 4 个 Mixin，**零行为变更** | plugins/platforms/telegram |
| [#79008](https://github.com/NousResearch/hermes-agent/pull/79008) | 🐛 Bug (dup) | WhatsApp 修复：turn 结束后清除 `typing` 指示器 | plugins/platforms/whatsapp |
| [#46343](https://github.com/NousResearch/hermes-agent/pull/46343) | 🐛 Bug | WhatsApp 同类修复（发送 `paused` 状态） | plugins/platforms/whatsapp |
| [#78959](https://github.com/NousResearch/hermes-agent/pull/78959) | 🐛 **P0** | **核心缓存修复**：`prompt_cache_key` 引入 session scope，阻断跨会话缓存污染，**一次修复 5 个关联 Issue** | agent/transports/codex.py |
| [#79019](https://github.com/NousResearch/hermes-agent/pull/79019) | 🐛 **P2** | Cron 生命周期守卫：抗 NUL 字节路径崩溃，补回归测试 | cron/lifecycle_guard.py |
| [#79020](https://github.com/NousResearch/hermes-agent/pull/79020) | 🐛 **P2** | Cron 守卫：修复非 `.py` 扩展名但含 `~/` 路径的 Python 脚本误报 | cron/lifecycle_guard.py |

> **进展判读**：P0 缓存修复（`#78959`）已合并，标志着 **跨会话缓存泄漏**这一核心稳定性隐患基本清除；Telegram 适配器拆解首波合并，技术债偿还正式落地。

---

## 4. 社区热点

| Issue | 评论/👍 | 核心诉求 | 关联 PR/状态 |
|-------|---------|----------|--------------|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | 21 / 0 | **插件接口扩展总规划**（社区 7 月 Discord 讨论沉淀），目标：让积压 PR 可稳定落地 | 无直接 PR，规划期 |
| [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) | 17 / 0 | **插件生命周期事件目录 & Hook 分类学**，批量清理待合并 Hook PR | 需决策 |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 14 / 2 | **多租户隔离**：Memory 绕过 Hook 系统，生产环境已自行维护补丁数月，**强烈要求上游化** | needs-decision |
| [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) | 9 / 1 | **可配置的有界 auto-continue**：工具调用迭代耗尽时不强制摘要，允许自主继续 | needs-decision |
| [#54204](https://github.com/NousResearch/hermes-agent/issues/54204) | 8 / 3 | **会话跨项目移动**：Desktop 侧边栏支持将现有会话重新绑定到另一项目 | duplicate 标记 |
| [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | 4 / 0 | **Telegram Bot API 10.2 全功能对齐**元 Issue，串联所有子任务 | [#79010](https://github.com/NousResearch/hermes-agent/pull/79010) 进行中 |

> **热点洞察**：前 3 条均为**架构级长期议题**，社区期待维护者给出明确决策窗口；Telegram 对齐战役已转入代码重构实施期。

---

## 5. Bug 与稳定性

### 🔴 P0 / P1 级（生产环境阻断）

| Issue | 严重度 | 现象 | 是否有 Fix PR |
|-------|--------|------|---------------|
| [#79017](https://github.com/NousResearch/hermes-agent/issues/79017) | **P0** | `prompt_cache_key` 跨 context-compression 会话轮转丢失连续性，需引入逻辑 cache-scope 概念 | ❌ 仅 Issue，[#78959](https://github.com/NousResearch/hermes-agent/pull/78959) 为部分修复 |
| [#79012](https://github.com/NousResearch/hermes-agent/issues/79012) | **P0** | 辅助 Codex 调用仍按 content-only 生成 cache key，无 session scope | ❌ 同属 `#78959` 后续 |
| [#79014](https://github.com/NousResearch/hermes-agent/issues/79014) | **P0** | xAI Responses：顶层 `prompt_cache_key` 未传入 `extra_body`（xAI 实际读取字段） | ❌ 同属 `#78959` 后续 |
| [#78406](https://github.com/NousResearch/hermes-agent/issues/78406) | **P2** | OpenAI 兼容网关频发 `RemoteProtocolError: incomplete chunked read`，transport 重建滞后于重试预算 | ❌ 无 PR |

### 🟠 P2 级（功能受损/崩溃）

| Issue | 组件 | 现象 | Fix PR |
|-------|------|------|--------|
| [#78942](https://github.com/NousResearch/hermes-agent/issues/78942) | cron/terminal | NUL 字节路径导致 `lifecycle_guard` 崩溃 | [#79019](https://github.com/NousResearch/hermes-agent/pull/79019) ✅ |
| [#78980](https://github.com/NousResearch/hermes-agent/issues/78980) | cron | 含 `~/` 字面量的非 `.py` 脚本误判为 shell | [#79020](https://github.com/NousResearch/hermes-agent/pull/79020) ✅ |
| [#78974](https://github.com/NousResearch/hermes-agent/issues/78974) | cron/terminal | `HOME` 不可解析时 `RuntimeError` 导致所有终端命令失效 | ❌ |
| [#77047](https://github.com/NousResearch/hermes-agent/issues/77047) | tools/file | CJK UTF-8 文件被误判为二进制（1000 字节采样截断多字节字符） | ❌ |
| [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) | cli/dashboard | Win11 25H2 `hermes dashboard --status` 错报无进程 | ❌ |
| [#78847](https://github.com/NousResearch/hermes-agent/issues/78847) | desktop | 发送文件夹附件+消息时，路径被消息内容覆盖 | ❌ |
| [#78975](https://github.com/NousResearch/hermes-agent/issues/78975) | gateway/cron/feishu | Feishu cron 投递失败：`receive_id_type="thread_id"` 非法 | ❌ |
| [#78948](https://github.com/NousResearch/hermes-agent/issues/78948) | agent/provider | Aux client 将 primary model 发给 fallback endpoint 致 404 | ❌ |

### 🟡 P3 级（体验/安全/文档）

| Issue | 类型 | 说明 |
|-------|------|------|
| [#77950](https://github.com/NousResearch/hermes-agent/issues/77950) | 🔒 Security | `overrides` 锁定 `brace-expansion@5.0.8` (GHSA-rgw5-rvv9-x895)，`npm audit fix` 失效 |
| [#78254](https://github.com/NousResearch/hermes-agent/issues/78254) | 📄 Docs | Quickstart 称 Portal 免费，官网却要求订阅 |
| [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) | 🐛 | Desktop 启动全盘扫描 `~` 下 git repo，无开关禁用 |
| [#46199](https://github.com/NousResearch/hermes-agent/issues/46199) | ❓ Question | Windows 便携/隔离部署官方指引缺失 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 社区热度 | 纳入下版本概率 | 备注 |
|------|------|----------|----------------|------|
| **插件接口扩展统一规范** | [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | ⭐⭐⭐⭐⭐ (21 评) | 🟡 中 | 需先完成 Hook 分类学（#64231） |
| **Hook 生命周期目录 & 批量清理** | [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) | ⭐⭐⭐⭐ (17 评) | 🟢 高 | 已有决策标签，阻塞插件 PR 合并 |
| **多租户 Memory 隔离上游化** | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | ⭐⭐⭐ (14 评, 2👍) | 🟡 中 | 生产补丁已存，需核心组评审 |
| **可配置 auto-continue** | [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) | ⭐⭐ (9 评, 1👍) | 🟡 中 | 需决策，影响 ACP/VS Code 长任务 |
| **会话跨项目移动** | [#54204](https://github.com/NousResearch/hermes-agent/issues/54204) | ⭐⭐ (8 评, 3👍) | 🟢 高 | 标记 duplicate，可能已有实现分支 |
| **Desktop 状态栏显示订阅/Token 用量** | [#78997](https://github.com/NousResearch/hermes-agent/issues/78997) | ⭐ (1 评) | 🟢 高 | 新增，UI 变更小，需求明确 |
| **Telegram Bot API 10.2 全对齐** | [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | ⭐⭐ (4 评) | 🟢 高 | [#79010](https://github.com/NousResearch/hermes-agent/pull/79010) 重构进行中 |
| **禁用自动项目/Repo 发现** | [#64615](https://github.com/NousResearch/hermes-agent/issues/64615) / [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) | ⭐⭐ | 🟢 高 | 多用户投诉，配置项易实现 |

---

## 7. 用户反

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-05

---

### 1. 今日速览
- **整体活跃度：中等偏低**。过去 24 小时无新版本发布，核心仓库主要呈现“清理陈旧项”与“新增特性并行”的状态。
- **代码合并停滞**：2 个 PR（`#3280`, `#3251`）被标记 `[stale]` 并关闭，均未合入主分支，提示维护流程中可能存在审阅瓶颈或自动清理策略过于激进。
- **新增贡献聚焦生态扩展与可观测性**：2 个新开 PR 分别引入 **Exa 原生搜索提供商**（`#3299`）与 **Prompt Cache Token 审计日志**（`#3317`），显示社区对工具链丰富度与成本透明度的强需求。
- **核心稳定性隐患犹存**：Web UI 长上下文输入卡顿（`#3281`）与 MCP 连接失败导致 Agent 死循环（`#3269`）两个高优 Bug 仍处 Open 状态，均有用户确认复现，亟需核心组介入修复。
- **Android 端阻塞性问题搁置**：Issue `#3182` 因长期无响应被标记 stale 关闭，但用户反馈的“服务无法启动、路径不可修改”属于发布级阻断，后续需通过人工复核决定是否重开。

---

### 2. 版本发布
**今日无新版本发布。**

---

### 3. 项目进展
| PR | 状态 | 核心变更 | 对项目推进度评估 |
| :--- | :--- | :--- | :--- |
| **[#3280](https://github.com/sipeed/picoclaw/pull/3280)** `fix(auth): make browser OAuth login survive real-world callback conditions` | **Closed (Stale)** | 修复无头/远程环境下 OAuth 回调失败、授权码复用、状态校验等 4 个实战问题。 | **进度归零**。代码未合入，认证流程在复杂网络环境下的鲁棒性改进暂缓。 |
| **[#3251](https://github.com/sipeed/picoclaw/pull/3251)** `fix(providers): capture the prompt cache token usage in Anthropic providers` | **Closed (Stale)** | 采集 Anthropic SDK 与 Messages API 返回的 `cache_creation_input_tokens` 与 `cache_read_input_tokens`。 | **进度归零**。成本核算与缓存命中率监控能力缺失持续，运营侧无法验证 Prompt Cache 生效情况。 |
| **[#3299](https://github.com/sipeed/picoclaw/pull/3299)** `Add native Exa web search provider` | **Open** | 新增 Exa 作为原生 `tools.web` 提供商，支持高亮片段、日期范围过滤、API Key 认证。 | **+1 生态能力**。填补高质量实时搜索源空白，若合并将直接增强 Agent 信息检索准确性。 |
| **[#3317](https://github.com/sipeed/picoclaw/pull/3317)** `feat(providers): log prompt cache tokens in LLM response debug output` | **Open** | 网关层统一记录 `prompt_cache_tokens` 等缓存元数据（兼容 DeepSeek/Cloudflare 等返回格式）。 | **+1 可观测性**。通用化解决方案优于单 Provider 硬编码，建议优先审阅合并。 |

> **整体评估**：主分支代码库**零增量**；两个高价值修复（Auth、Anthropic Cache）因流程原因搁浅；两个新增 PR 方向正确，建议本周内完成 Code Review 合入以释放社区动力。

---

### 4. 社区热点
| 排名 | 对象 | 互动指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **Issue [#3281](https://github.com/sipeed/picoclaw/issues/3281)** `Web UI chat input laggy with history` | 💬 3 👍 1 | **性能阻塞**：长会话下输入框渲染/状态更新未虚拟化或防抖，严重影响核心交互体验，用户感知强。 |
| **2** | **Issue [#3269](https://github.com/sipeed/picoclaw/issues/3269)** `MCP connection failure hangs agent loop` | 💬 3 👍 1 | **可用性阻塞**：MCP 客户端缺乏超时/熔断/重试机制，单点故障导致整个 Agent 停摆，生产环境不可接受。 |
| **3** | **Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182)** `Android version launch failure` | 💬 6 👍 0 (Closed Stale) | **平台阻塞**：Android 服务启动权限与路径配置失效，虽被自动关闭但评论数最高，显示移动端用户基数存量大且痛点深。 |
| **4** | **PR [#3299](https://github.com/sipeed/picoclaw/pull/3299)** `Add native Exa web search provider` | 💬 0 👍 0 | **功能扩展需求**：社区期望内置更高质量、结构化的搜索源，替代通用搜索 API。 |

---

### 5. Bug 与稳定性
| 严重级 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **P0 - 阻塞/崩溃** | **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** MCP 连接失败导致 Agent 循环挂起 | 网络抖动或 MCP Server 宕机时，Agent 无超时退出、无熔断、无降级，前端长轮询卡死。 | 所有使用 MCP Tool 的会话 | ❌ 无 |
| **P1 - 严重体验** | **[#3281](https://github.com/sipeed/picoclaw/issues/3281)** Web UI 长历史输入极度卡顿 | 消息列表未虚拟化、输入受控组件重渲染、可能存在 O(n²) Diff 计算。 | Web UI 重度用户/长上下文场景 | ❌ 无 |
| **P2 - 平台缺陷** | **[#3182](https://github.com/sipeed/picoclaw/issues/3182)** Android 服务无法启动/路径不可改 | 权限申请流程缺陷、存储路径硬编码或持久化逻辑错误。 | Android 全量用户 | ❌ 无 (Issue 已 Stale 关闭) |

> **建议**：立即建立 `#3269` 与 `#3281` 的 **Hotfix 分支**，引入 `context.WithTimeout` 与 `react-window`/`virtua` 虚拟列表；`#3182` 需人工确认是否为 Android 版本发布前提条件，若是则需 Reopen 并指派 Owner。

---

### 6. 功能请求与路线图信号
| 信号来源 | 需求描述 | 关联 PR | 入版本概率 (v0.3.2+) | 理由 |
| :--- | :--- | :--- | :--- | :--- |
| **PR [#3299](https://github.com/sipeed/picoclaw/pull/3299)** | 原生集成 Exa Search (高质量、结构化、实时) | 自身 | **高 (90%)** | 代码完整、符合 Provider 插件化架构、填补搜索质量短板。 |
| **PR [#3317](https://github.com/sipeed/picoclaw/pull/3317)** | 网关层统一记录 Prompt Cache Token 用量 | 自身 | **高 (85%)** | 通用化实现、成本管控刚需、无破坏性变更。 |
| **Issue [#3269](https://github.com/sipeed/picoclaw/issues/3269) 衍生** | MCP 客户端标准化：超时、重试、熔断、健康检查 | 无 | **中 (60%)** | 属基础设施完善，需设计统一 `MCPClient` 接口，工作量大于单 Bug Fix。 |
| **Issue [#3281](https://github.com/sipeed/picoclaw/issues/3281) 衍生** | Web UI 消息列表虚拟化、输入防抖、Web Worker 解析 | 无 | **中 (50%)** | 涉及前端架构重构，需评估收益与引入复杂度。 |

---

### 7. 用户反馈摘要
- **痛点 1：MCP 不可靠性** (`#3269` 评论) —— “一次 MCP 断连导致整个任务挂起，必须重启 Picoclaw 进程”，用户期望**优雅降级**（如提示工具不可用、继续对话）而非进程级死锁。
- **痛点 2：Web UI 长会话不可用** (`#3281` 评论) —— “History > 50 条时输入延迟 > 2s”，用户被迫频繁新建会话，**上下文连续性被工具性能切断**。
- **痛点 3：Android 端“半成品”感** (`#3182` 评论) —— “授予所有权限仍启动失败、设置里改不了下载路径”，移动端用户感到**被放弃维护**，信任度受损。
- **正向反馈**：对 Exa Search (`#3299`) 与 Cache Token 透出 (`#3317`) 的 PR 表达隐性期待（通过关注/订阅），显示社区对**工具链专业化**与**成本可视化**的高度认可。

---

### 8. 待处理积压
| 对象 | 滞留天数 | 关键风险 | 建议动作 |
| :--- | :--- | :--- | :--- |
| **Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182)** Android 启动失败 | **40+ 天** (自 6/26 创建，今日 Stale 关闭) | 移动端发布阻断；自动关闭掩盖真实优先级。 | **人工 Reopen**，打上 `platform:android` `priority:P0` 标签，指派移动端维护者验证复现。 |
| **PR [#3280](https://github.com/sipeed/picoclaw/pull/3280)** OAuth 登录修复 | **15 天** (7/21 创建，今日 Stale 关闭) | 远程/无头部署场景认证全阻断；贡献者投入沉没。 | **人工 Restore**，要求贡献者 Rebase 至最新主分支，安排 Core Reviewer 专项 Review。 |
| **PR [#3251](https://github.com/sipeed/picoclaw/pull/3251)** Anthropic Cache Token 采集 | **24 天** (7/12 创建，今日 Stale 关闭) | 成本核算缺口；与 `#3317` 方案冲突/重叠。 | **对比合并策略**：`#3317` 为网关层通用方案，建议采纳 `#3317` 并关闭 `#3251`，通知原作者。 |
| **Issue [#3269](https://github.com/sipeed/picoclaw/issues/3269)** MCP 挂起 | **16 天** (7/20 创建) | 核心 Agent 稳定性单点故障。 | **立即建立 Hotfix 分支**，引入 `go-breaker` 或标准库 `context` 超时控制。 |
| **Issue [#3281](https://github.com/sipeed/picoclaw/issues/3281)** Web UI 卡顿 | **15 天** (7/21 创建) | 核心交互体验退化。 | **引入前端性能 Profiling**，确定瓶颈在 React Diff 还是状态管理，小步快跑优化。 |

---

**报告生成时间**：2026-08-05 06:00 UTC  
**数据窗口**：2026-08-04 00:00 ~ 2026-08-05 00:00 (GitHub 事件时间)  
**下一关注点**：`#3269` / `#3281` Hotfix 进展、`#3299` / `#3317` Review 吞吐率、Android Issue 复活情况。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-05

> **数据来源**: GitHub API (nanocoai/nanoclaw) | **统计周期**: 2026-08-04 至 2026-08-05 (UTC)

---

## 1. 今日速览

*   **整体活跃度：中等** 。过去 24 小时无新 Issue 产生，但有 5 条 PR 更新，呈现典型的“开发驱动、Issue 相对静默”状态。
*   **核心动向**：**架构重构** 与 **新通道集成** 并行推进。一项核心重构 PR (#3186) 新建，旨在解耦技能能力；两项长期开发的 Dial 通道集成 PR (#3041, #3050) 持续更新；一项 Discord 严重交互 Bug (#3185) 已定位并提交修复；一项定时任务时间上下文修复 (#3154) 已合并入主干。
*   **合并率**：1/5 (20%)，处于正常代码审查周期内，无积压恶化迹象。
*   **风险点**：Discord 审批流程存在**全量拒绝**的严重回归风险 (#3185)，需优先合并修复。

---

## 2. 版本发布

> **无新版本发布**。当前主分支累积了通道适配、核心重构及关键修复，预计近期将切入 `v0.x` 或 `v1.x` 预发布流程。

---

## 3. 项目进展

### ✅ 已合并/关闭 (1 项)

| PR | 标题 | 类型 | 影响范围 | 关键变更 |
| :--- | :--- | :--- | :--- | :--- |
| **[#3154](https://github.com/nanocoai/nanoclaw/pull/3154)** | `fix(agent-runner): give scheduled tasks current run time` | **Bug Fix / Core** | Agent Runner, Scheduled Tasks | **已合并**。修复定时任务执行时缺乏“当前运行时间”上下文的问题。新增 `current_time` 字段（含星期、时区），回退兼容 `created_at`。解决了定时技能无法感知实际触发时间的痛点。 |

### 🔄 待合并/活跃 (4 项)

| PR | 状态 | 作者 | 核心诉求 | 进展备注 |
| :--- | :--- | :--- | :--- | :--- |
| **[#3186](https://github.com/nanocoai/nanoclaw/pull/3186)** | **Open (New)** | zvi-fried | **Architecture Refactor**: 引入 "Host Seams" 机制，允许技能拥有并暴露自身能力，而非强依赖核心注册表。 | 标签 `[Refactor, follows-guidelines]`。属于核心架构演进，旨在提升技能开发的解耦度与可组合性，审查周期预计较长。 |
| **[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)** | **Open (Updated)** | OmriBenShoham | **Feature (Channel)**: 新增 **Dial 通道适配器** (支持 SMS + AI 语音通话)。 | 开发近 3 周，今日同步更新。属于重大新通道接入，涉及协议适配、Webhook 处理、媒体流控制。 |
| **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** | **Open (Updated)** | OmriBenShoham | **Feature (Setup/Wizard)**: 将 Dial 集成至通道选择向导及 `runChannelSkill` 模型。 | 与 #3041 配套，解决“装好通道用不上”的最后一公里问题。今日同步更新，疑似解决 CI 或 Review 意见。 |
| **[#3185](https://github.com/nanocoai/nanoclaw/pull/3185)** | **Open (New)** | omerh | **Critical Bug Fix (Discord)**: 修复 Webhook 交互中 `custom_id` 解析错误导致**所有审批按钮均被判定为 Reject**。 | **高优先级**。定位到 Chat SDK Bridge 的 HTTP 交互路径，`split(':')` 逻辑在包含 `\n` 的 `custom_id` 前失效。建议立即 Review 并合并热修复。 |

---

## 4. 社区热点

> **数据提示**：过去 24 小时所有 PR 评论数均为 `undefined` (即 0)，Reactions 均为 0。社区讨论集中在代码审查而非 Issue 广场。

| 热度对象 | 类型 | 关注焦点 | 隐性诉求分析 |
| :--- | :--- | :--- | :--- |
| **[#3185](https://github.com/nanocoai/nanoclaw/pull/3185)** | **Critical Bug PR** | Discord 审批流完全失效 | **生产环境阻断**。用户在 Discord 点击 "Approve" 实际触发 "Reject"，直接影响人工介入工作流可用性。隐性诉求：`hotfix` 分支或立即合并至 `main` 发布 Patch 版。 |
| **[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)** / **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** | **Feature PRs** | Dial (SMS/Voice) 通道完整交付 | **商业化/场景拓展需求**。长周期开发（20+ 天）说明团队在推进语音/短信这一高价值通道。隐性诉求：完善文档、通过 E2E 测试、纳入下个 Minor 版本。 |
| **[#3186](https://github.com/nanocoai/nanoclaw/pull/3186)** | **Refactor PR** | 技能系统解耦 | **开发者体验 (DX) 提升**。核心成员主导的架构调整，旨在降低技能开发门槛，支持“技能自带能力”模式。隐性诉求：建立 RFC 或设计文档同步，避免破坏性变更无预警。 |

---

## 5. Bug 与稳定性

| 严重程度 | 来源 | 现象描述 | 根因定位 | 修复状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (P0)** | PR #3185 | Discord `ask_question` / 审批卡片：**点击 Approve 均返回 Reject**。 | Chat SDK Bridge Webhook 路径：`custom_id` 含 `\n` 分隔符时，`split(':')` 解析逻辑错误，导致 `action` 字段错位。 | **已有 Fix PR (#3185)**，待 Review 合并。建议标记 `hotfix`。 | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) |
| **🟡 Medium (P2)** | PR #3154 (已合并) | 定时任务执行时，Agent 无法获取“本次计划触发时间”，仅能拿到任务创建时间。 | `agent-runner` 未注入 `process_after` 派生的运行时时间上下文。 | **已修复并合并** (#3154)。引入 `current_time` (ISO8601 + Weekday)。 | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) |
| **🟢 Low (P3)** | - | 无新报告的崩溃、回归或数据丢失 Issue。 | - | - | - |

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能方向 | 成熟度判断 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #3041 / #3050** | **Dial Channel (SMS + AI Voice)** | 高。代码完备，包含适配器、向导、Skill 定义，持续更新 3 周。 | **极高 (90%)** | 核心通道扩展，预计作为 `v0.x` 或 `v1.0` 亮点特性发布。需确认 Twilio/Plivo 等上游依赖版本锁定。 |
| **PR #3186** | **Skill-owned Capabilities / Host Seams** | 早期。架构重构，涉及核心注册表、技能加载器、权限模型。 | **中 (40%)** | 属于破坏性重构风险，大概率走 `next` 分支或下个 Major 版本 (`v1.0`)，需配套迁移指南。 |
| **PR #3154 (Merged)** | **Scheduled Task Runtime Context** | 完成。 | **已纳入** | 为定时技能开发（如日报生成、定时巡检）奠定基础。 |

---

## 7. 用户反馈摘要

> **数据限制**：过去 24 小时 **0 条 Issue**，**0 条评论**。无法从 Issue 评论中提炼用户痛点。
> **间接推断**：
> *   **Discord 用户** 正遭遇审批流“全盘拒绝”的严重体验损伤 (源自 #3185)。
> *   **技能开发者** 期待更松耦合的能力声明机制 (源自 #3186 动机)。
> *   **运维/业务侧** 急需短信/语音通知触达能力 (源自 #3041/#3050 长周期投入)。

---

## 8. 待处理积压提醒

| 对象 | 类型 | 停滞时长 | 风险描述 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)** / **[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** | Feature PRs | **~22 天** (创建于 07-14) | 长周期未合并，易产生合并冲突；CI 可能随主分支推进而红建。 | **指定 Reviewer 专项攻坚**；拆分为“适配器核心”和“向导集成”两步合并；补充 E2E 测试用例。 |
| **[#3185](https://github.com/nanocoai/nanoclaw/pull/3185)** | Bug Fix PR | **< 1 天** (新建) | **虽新但极高危**。每延迟 1 小时合并，Discord 用户就多 1 小时无法正常审批。 | **立即 Review -> 合并 -> 切 Tag/热发布**。可考虑直接推送至 `main` 触发自动发布流水线。 |
| **[#3186](https://github.com/nanocoai/nanoclaw/pull/3186)** | Refactor PR | **< 1 天** (新建) | 核心架构变更，缺乏设计文档链接，审查负担重。 | 要求作者补充 **ADR (Architecture Decision Record)** 或链接设计讨论 Issue；安排 2 名 Core Reviewer 交叉审查。 |

---

### 📌 维护者行动清单 (Action Items)

1.  **[P0] 立即 Review & Merge #3185** - 修复 Discord 审批死锁，建议走热修复流程。
2.  **[P1] 推进 #3041/#3050 收尾** - 指定 Owner 本周内合并 Dial 通道，解锁语音/短信场景。
3.  **[P2] 启动 #3186 设计评审** - 发起架构评审会议，明确 Host Seams 边界与迁移策略，避免长期挂起。
4.  **[常规] 关注 CI 状态** - 确保上述 PR 合并后主分支构建通过，准备下一版本切版。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-05

> **数据来源**：GitHub API / 仓库 `nullclaw/nullclaw`  
> **统计周期**：2026-08-04 00:00 – 2026-08-04 23:59 (UTC)  
> **报告生成**：2026-08-05

---

## 1. 今日速览

- **整体活跃度：低**。过去 24 小时 **无新 Issue**，**无 PR 合并**，仅有 **1 个处于审查中的 PR (#981)** 在昨日收到更新。
- **核心动向**：社区贡献者 `valonmulolli` 正在推进 **`grok-cli` Provider** 的接入工作，旨在复用现有 `codex-cli` / `gemini-cli` / `claude-cli` 的“每请求启动子进程”架构模式。
- **发布节奏**：无新版本发布，主分支保持稳定。
- **社区互动**：Issue 区完全静默；PR #981 目前 **0 条评论、0 个 👍**，尚未引发讨论。
- **健康度判断**：项目处于 **“功能扩展待审”** 状态，维护者需尽快介入 Code Review 以避免贡献者热情流失。

---

## 2. 版本发布

> **本周期无新版本发布**。

---

## 3. 项目进展

| PR | 标题 | 状态 | 影响范围 | 进展说明 |
|----|------|------|----------|----------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | **feat(provider): add grok-cli provider for xAI Grok CLI** | 🟢 Open (更新于 2026-08-04) | 新增 Provider 模块 (`providers/grok-cli/`)；更新 Provider 注册表与文档 | 实现了与现有 CLI Provider 完全一致的 `spawn-per-request` 模式；标注为 **可选依赖**（需本地安装并认证 `grok` CLI）。测试用例、类型定义、README 均已同步补全，**代码完整度高**，等待 Maintainer Review 与 CI 通过。 |

**整体推进度**：+1 个 Provider 选项（尚未合并），核心框架无变更。

---

## 4. 社区热点

| 排名 | 对象 | 交互数据 | 核心诉求 / 讨论焦点 |
|------|------|----------|----------------------|
| 1 | [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | 0 评论 · 0 👍 | 贡献者希望尽快获得 Review 反馈；若维护者长时间不响应，可能导致后续同类 CLI Provider（如 `deepseek-cli`、`moonshot-cli`）贡献意愿下降。 |

> **分析**：当前社区热点**高度集中在单一 PR**，缺乏 Issue 端的用户反馈循环。建议维护者在 48h 内给出首轮 Review。

---

## 5. Bug 与稳定性

> **本周期无新 Bug 报告、崩溃堆栈或回归 Issue**。  
> 现有 PR #981 为纯增量功能，未涉及核心逻辑修改，**风险等级：低**。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 落地可能性 | 预计里程碑 |
|------|----------|------------|------------|
| PR #981 | **接入 xAI Grok 官方 CLI** 作为新 Provider | ⭐⭐⭐⭐⭐ (代码已就绪，仅待 Review) | v0.14.0 / 下一 Minor 版本 |
| 隐性信号 | 现有 `codex-cli` / `gemini-cli` / `claude-cli` 三件套已形成**标准化接入范式** | — | 后续同类 CLI 接入将沿用此模板，维护成本极低 |

**路线图推断**：项目正沿着 **“多厂商 CLI 统一适配”** 方向扩展 Provider 生态，下一版本大概率包含 `grok-cli` 并继续开放同类 PR 合并通道。

---

## 7. 用户反馈摘要

> **本周期 Issue 区零评论，无直接用户反馈可供提炼**。  
> 建议：在下一版本 Release Notes 中主动征集 `grok-cli` 早期体验反馈，建立“Provider 兼容性矩阵”文档，降低用户试错成本。

---

## 8. 待处理积压 ⚠️

| 对象 | 类型 | 停滞时长 | 风险提示 | 建议行动 |
|------|------|----------|----------|----------|
| [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | Feature PR | **创建 7 天 / 更新 1 天** | 贡献者 `valonmulolli` 首次向本仓库提交 PR，**首贡响应速度直接影响社区留存** | 1. 指派 Maintainer 在 24h 内完成首轮 Review<br>2. 若 CI 通过，建议直接 Squash Merge 入主分支<br>3. 合并后同步更新 `CHANGELOG.md` 与 Provider 文档 |

---

## 附录：关键链接速查

- **PR #981**：https://github.com/nullclaw/nullclaw/pull/981  
- **Provider 接入指南 (参考现有)**：`docs/providers/cli-providers.md` (如存在)  
- **CI 状态**：请在 PR 页面查看 GitHub Actions / Checks 标签页

---

> **下一期预告**：若 PR #981 合并，将在明日日报“项目进展”栏标记为 ✅ Merged，并统计新 Provider 对测试覆盖率的影响。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-05

---

## 1. 今日速览
- **整体活跃度：高** — 过去 24 h 内 Issues 与 PRs 各 50 条，合并/关闭 18 条 PR，新开/活跃 Issue 38 条，显示核心团队与外部贡献者并行推进 v1.1.0-rc.1 冲刺与架构治理。  
- **核心主线**：v1.1.0-rc.1 启动迁移无损化（#7178/#7198）、Reborn 架构波次收尾（WS0–4 批次 #7181/#7160/#7161）、Windows 发布阻断修复（#7197/#7200）、Clippy 门禁修复（#7167/#7119）。  
- **社区信号**：外部贡献者 theredspoon / Kampouse / theredspoon 等提交多份 XL/L 级文档/基建 PR；社区反馈集中于记忆跨会话不稳定（#7185）、模型选择权限（#7183）、Web 抓取不可靠（#7180）。  
- **风险点**：Clippy 门禁在新 package-set 下失效（#7119）、composition 预算门禁分母被污染（#7151）、tracing target 语法误用 121 处（#7146）均为“绿灯失效”型隐患。  
- **里程碑**：v1.1.0-rc.1 预发布冲刺进入收尾窗口，剩余阻断项聚焦 Windows 烟雾测试、迁移无损、Clippy 门禁全绿。

---

## 2. 版本发布
**无新版本发布** — 当前仍处于 `ironclaw-v1.1.0-rc.1` 预发布准备期，#7198 / #7197 / #7200 正解决最后阻断项。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 规模/风险 | 核心变更 | 关联 Issue / 里程碑 |
|---|---|---|---|
| [#7200](https://github.com/nearai/ironclaw/pull/7200) | M / low | **Windows 发布阻断修复**：阻止 `icacls` 向 CLI stdout 写入，解决 Windows 烟雾测试在 `profile list --json` 后卡死 | #7197 / v1.1.0-rc.1 blocker |
| [#7197](https://github.com/nearai/ironclaw/pull/7197) | S / low | **CI**：向 release smoke 传递 Windows 身份变量，解决 `USERNAME` 未设置导致的预发布失败 | #7197 / v1.1.0-rc.1 blocker |
| [#7167](https://github.com/nearai/ironclaw/pull/7167) | L / medium | **CI/Clippy 门禁修复**：修复 bin-only crate（`ironclaw_reborn_cli`）在 `--lib` 旗标下硬报错，补充 `.gitignore` 分类 | #7119 / clippy gate |
| [#7161](https://github.com/nearai/ironclaw/pull/7161) | XL / medium | **WS10**：将“吵闹”路径模式门禁转为 inventory keying，消除 crate 移动时的可见红灯 | #6946 / WS10 / target-architecture |
| [#7160](https://github.com/nearai/ironclaw/pull/7160) | XL / medium | **WS3**：lane 端口收敛为 narrow reserve/reconcile/release，移除 `ironclaw_resources` 依赖 | #7067 / WS3 / sandbox |
| [#7156](https://github.com/nearai/ironclaw/pull/7156) | L / low | **架构治理四件套**：same-layer edge inventory、composition 绝对 LOC 上限、D-E vendor census、ratchet slack 门禁全部 sabotage-tested 并生效 | #7149 #7151 #7150 #7147 / target-architecture |

> **进展小结**：今日合并 6 条 PR，全部为 **v1.1.0-rc.1 阻断项** 或 **架构治理硬指标** 收尾，标志着 Reborn 重构主干波次（WS0–4/WS10）基本收敛，Windows 发布管道贯通。

---

## 4. 社区热点（评论/互动最多的 Issues & PRs）

| 对象 | 评论数 | 核心诉求 / 讨论焦点 |
|---|---|---|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) 【CLOSED】 | 15 | **Epic: error-recoverability endgame** — 要求模型对 100% 中间错误满足“存活/可见/因果/可行动/不上报非成功”五重契约，已关闭标志契约落地。 |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) | 4 | **Clippy 门禁随 package-set 失效** — `ironclaw` + `ironclaw_reborn_config` 新 package-set 在 main 红灯，已由 #7167 修复门禁逻辑。 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) 【CLOSED】 | 4 | **Epic: Hermetic capability & journey testing** — 要求每个能力/关键旅程有确定性覆盖，已关闭标志平台就绪。 |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | 3 | **实例删除失败 / 重登卡 “Loading your agents…”** — 生产环境复现，尚无 fix PR，影响用户留存。 |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) | 3 | **WS2 extension_host → loops 重分层** — 发现以文件数计量分层规模错误，需按 four-port residue 重新估算。 |
| [#7029](https://github.com/nearai/ironclaw/pull/7029) | — | **XL 文档/交付链路修复** — 依赖 #7028，恢复 durable delivery claim，外部贡献者 theredspoon 主导。 |
| [#6970](https://github.com/nearai/ironclaw/pull/6970) | — | **XL 文档全面升级** — 移除 “Reborn” 对外术语，统一 V1 术语，社区贡献者 elliotBraem 主导。 |

> **热点洞察**：社区讨论聚焦 **“契约落地可验证性”**（#6284/#6524）、**“门禁绿灯可信度”**（#7119/#7147/#7151）与 **“外部贡献者文档/基建贡献”**（#7029/#6970/#7048）。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **Critical** | [#6752](https://github.com/nearai/ironclaw/issues/6752) | 实例删除报错 → 重登卡 “Loading your agents…” | ❌ 无 |
| 🔴 **Critical** | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 记忆跨会话不可靠召回，多测试者独立复现 | ❌ 无 |
| 🟠 **High** | [#7180](https://github.com/nearai/ironclaw/issues/7180) | Web 抓取命中率低，agent 误用 `http` 而非 `web_search` | ❌ 无 |
| 🟠 **High** | [#7191](https://github.com/nearai/ironclaw/issues/7191) | `builtin.time` 相对偏移解析失败，抛 `input_error()` 而非类型化错误 | ❌ 无 |
| 🟡 **Medium** | [#7192](https://github.com/nearai/ironclaw/issues/7192) | WebUI 乐观用户消息渲染在 agent 回复下方，阅读顺序错乱 | ❌ 无 |
| 🟡 **Medium** | [#7104](https://github.com/nearai/ironclaw/issues/7104) | Extractors “no text found” 误报 Failed 而非 Empty，误导模型 | ❌ 无 |
| 🟡 **Medium** | [#7115](https://github.com/nearai/ironclaw/issues/7115) | Docker entrypoint 依赖死环境变量 `IRONCLAW_REBORN_SLACK_ENABLED` 导致迁移跳过 | ❌ 无 |
| 🟢 **Low** | [#7146](https://github.com/nearai/ironclaw/issues/7146) | 121 处 `target = "…"` 应为 `target: "…"`，导致 tracing 过滤失效 | ❌ 无 |
| 🟢 **Low** | [#7103](https://github.com/nearai/ironclaw/issues/7103) | latency-trace 字段在关闭时仍计算 JSON 字节数 | ❌ 无 |

> **稳定性判读**：Critical 级均为 **用户可感知的数据/会话丢失**，且均无 Fix PR，建议下一 Sprint 纳入 P0；Medium/High 多为 **模型面向错误语义错误**，影响模型推理质量，建议并行修复。

---

## 6. 功能请求与路线图信号

| Issue / PR | 信号强度 | 可能纳入版本 | 判断依据 |
|---|---|---|---|
| [#7194](https://github.com/nearai/ironclaw/issues/7194) — admin-allowed shared channel as outbound target | 🟢 强 | v1.1.x | 明确 enhancement，size M，risk high，明确 delivery layer 缺口 |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) — automation run-now (manual fire) | 🟢 强 | v1.1.x | 完善 automation 完整 CRUD，size L，risk medium，产品面缺口明显 |
| [#7183](https://github.com/nearai/ironclaw/issues/7183) — per-user LLM model selection | 🟡 中 | v1.2.x | 来自 Champions 会议，权限模型变更，需权限重构，风险较大 |
| [#7177](https://github.com/nearai/ironclaw/issues/7177) — schema-aware ranked search for deferred tools | 🟡 中 | v1.1.x | Reborn progressive disclosure 自然延伸，size M，risk medium，有性能收益 |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) — Nostr host functions for WASM | 🟢 强 | v1.1.x | XL PR 已开，core contributor 推进，扩展 WASM 能力边界 |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) — skills self-create/find/choose/use (subset of #6565) | 🔴 强 | v1.1.0 | Epic 级，已拆解为可测量子集，v1.1.0 里程碑显式标注 |
| [#6731](https://github.com/nearai/ironclaw/issues/6731) — IronHub 集成 | 🟢 强 | v1.2.x | 战略级 marketplace 化，文档已先行 (#6965)，运行时集成待排期 |

> **路线图推断**：v1.1.x 将聚焦 **delivery/outbound 补全（#7194）、automation 手动触发（#7193）、skill 发现可靠性（#6941）、WASM 能力扩展（#7184）**；v1.2.x 承接 **IronHub 集成（#6731）、per-user 模型选择（#7183）、目标架构落地（#3773）**。

---

## 7. 用户反馈摘要（从 Issue 评论/描述提炼）

| 痛点 | 典型场景 | 用户原声/代理描述 | 满意度倾向 |
|---|---|---|---|
| **记忆跨会话失效** | 法律场景：前一会话确立的案件上下文在新会话丢失 | “the agent doesn't have access to information established in prior conversations” (#7185) | ⭐⭐☆☆☆ 严重不满 |
| **模型选择权限集中** | 个人用户想切换更便宜/更快的模型，只能找管理员 | “no way for an individual user to choose/switch the underlying LLM model” (#7183) | ⭐⭐⭐☆☆ 需求明确 |
| **Web 抓取不可靠** | 构建每日 GitHub→Slack 报表，抓取部分源成功、部分失败无规律 | “hit-or-miss — some sources succeed, others fail outright, with no clear pattern” (#7180) | ⭐⭐☆☆☆ 信任度低 |
| **实例删除/重登卡死** | 删除实例后无法重新进入，UI 卡在 “Loading your agents…” | “Attempting to delete an IronClaw instance… stuck on re-login” (#6752) | ⭐☆☆☆☆ 阻断性 |
| **乐观消息渲染错序** | 用户发送消息时 agent 正在输出，自己的消息跑到回复下方 | “The conversation reads out of order — the user's question appears after the answer” (#7192) | ⭐⭐⭐☆☆ 体验细节 |
| **文档术语混淆** | 外部贡献者阅读文档时 “Reborn” 与 V1 概念混淆 | “Removed ‘Reborn’ terminology from all public-facing docs” (#

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-05

> **数据来源**: GitHub API (netease-youdao/LobsterAI) | 统计周期: 2026-08-04 00:00 - 23:59 (UTC)

---

## 1. 今日速览
- **核心动态**: 项目昨日完成 **Release 2026.8.3** 的合并入主干（PR #2430），标志着一个包含原生积分活动、登录体验优化、Artifact 预览控制及 Windows 安装器可靠性提升的中型版本正式落地。
- **活跃度评估**: **高**。过去 24 小时合并/关闭 **10 个 PR**，涉及渲染进程、主进程、协作模块及依赖更新，代码库变更量大，发布节奏明确。
- **风险点**: 存在 1 个高危安全 Issue (#1202) 长期未修复（Agent 泄漏 Model Key），且多个 4 月份的依赖更新 PR (#1277, #1282-#1284) 今日被批量关闭，疑似依赖升级阻塞或策略调整。
- **社区互动**: 热度较低，新增 Issue 0 条，PR 评论数均为 0，主要为内部推进与自动化机器人活动。

---

## 2. 版本发布
**Release 2026.8.3** 已于昨日 (2026-08-04) 合并至 `main` 分支 ([PR #2430](https://github.com/netease-youdao/LobsterAI/pull/2430))，GitHub Releases 页暂未生成正式 Tag/制品（可能走内部分发或延迟发布）。

**核心更新内容**:
| 维度 | 变更详情 | 关联 PR |
| :--- | :--- | :--- |
| **新功能: 积分奖励活动** | 新增原生启动积分活动流程，含本地化海报资源、模态框渲染、服务端下发可用性/状态/奖励兑换逻辑。 | [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427), [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424) |
| **体验优化: 首次登录** | 简化首次运行登录体验，修复认证重定向 URL 上报、错误信息透传、Electron Auth IPC 契约扩展。 | [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429), [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) |
| **功能增强: Artifact 控制** | 设置页新增 “Artifact 自动预览” 开关，用户可禁用自动打开文件预览，保留手动预览入口。 | [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) |
| **稳定性: 模型错误分类** | 将 Provider “Overloaded/容量不足” 错误从通用 “Rate Limit” 中剥离，新增 `ModelOverloaded` 分类，避免用户误判立即重试。 | [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) |
| **工程化: Windows 安装器** | 提升 Windows 安装器可靠性 (细节见 PR 描述)。 | [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) |

> **迁移提示**: 涉及 Electron 版本跨度较大（见下文依赖更新），插件/原生模块开发者需重新编译适配 Electron 43.x。

---

## 3. 项目进展
今日合并/关闭的 **10 个 PR** 推进了版本发布与技术债清理两大主线：

| PR | 状态 | 类型 | 核心贡献 | 影响范围 |
| :--- | :--- | :--- | :--- | :--- |
| [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | **Merged** | **Release** | 合并 `release/2026.8.3` 至 `main`，版本落地入口 | 全栈 |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | **Merged** | **Feature** | 启动积分活动本地化资源打包与渲染逻辑 | Renderer, Cowork |
| [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424) | **Merged** | **Fix/Revert** | 恢复活跃中的积分活动入口与 500 积分领取流程 | Renderer, Main, Cowork |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | **Merged** | **Fix** | 完善启动活动埋点字段：重定向 URL、错误信息、IPC 契约 | Renderer, Main |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | **Merged** | **Chore** | 登录页优化 (配合首次运行体验) | Renderer, Cowork |
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | **Merged** | **Feature** | 设置页新增 Artifact 自动预览开关 | Renderer, Cowork |
| [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | **Merged** | **Fix** | 模型过载错误分类重构，修正用户侧重试误导 | Renderer, Main |
| [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) | **Closed** | **Deps** | `@headlessui/react` 1.7.19 → 2.2.9 (Major 升级) | Renderer (UI 组件库) |
| [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) | **Closed** | **Deps** | `react` 18.3.1 → 19.2.4 (Major 升级) | Renderer (核心框架) |
| [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) | **Closed** | **Deps** | `react-syntax-highlighter` 15.6.6 → 16.1.1 | Renderer (代码高亮) |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | **Open** | **Deps** | `electron` 40.2.1 → 43.2.0 / `electron-builder` 更新 | Main, Build (未合并) |

**进展总结**: 版本发布主线（**#2430 及其子任务 #2424-#2429**）已完美收官。技术债清理主线（React 19 / HeadlessUI 2 / Electron 43）遭遇阻力：React 生态升级 PR 被关闭未合并，Electron 43 升级 PR (#1277) 仍处 Open 状态，暗示重大依赖升级存在阻断性 Breaking Changes 或测试未通过。

---

## 4. 社区热点
当前无高互动讨论（所有 PR/Issue 评论数为 0，Reactions 均为 0）。关注点聚焦于以下 **结构性信号**：

1.  **安全债务未偿** ([Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202))
    - **状态**: Open, Stale (创建于 2026-04-01，更新于昨日)
    - **核心诉求**: Agent 无防护机制，直接泄漏 Model Key 配置路径、环境变量名及 Key 值，属 **高危安全漏洞**。
    - **异常点**: 严重安全漏洞存活 126 天未修复，且无任何核心成员回复/指派，疑似安全响应流程缺失。

2.  **侧边栏广告永久关闭需求** ([PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374))
    - **状态**: Open (创建于 2026-07-21)
    - **诉求**: 用户需在 Settings → General 中永久隐藏侧边栏广告横幅，而非临时Dismiss。关联 Issue #2342。
    - **信号**: 商业化变现与用户体验的博弈，功能开发已就绪待 Review。

---

## 5. Bug 与稳定性
| 严重级 | 编号 | 标题 | 状态 | 是否有 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Critical (安全)** | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | Agent 泄漏 Model Key 敏感信息 | **Open (Stale)** | ❌ 无 | 存活 126 天，核心安全边界缺失，需立即介入 |
| **High (功能)** | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | Session 重命名失败静默吞噬，无 Toast 提示 | **Open (Stale)** | ✅ **已有 PR** | PR #1205 (2026-04-01 提交) 已实现 try-catch + Toast + 保持输入框，但长期未合并 |
| **Medium (体验)** | [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | 模型过载错误被误判为 Rate Limit | **Merged** | ✅ 已修复 | 已随 2026.8.3 发布，改进错误分类与用户提示 |
| **Low (依赖)** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 40 → 43 升级 | **Open** | 🟡 进行中 | 主进程核心依赖，涉及 V8/Node/Chrome 内核大版本跨度，风险高 |

---

## 6. 功能请求与路线图信号
结合已合并 PR 与 Open PR，推测 **下一版本 (2026.9.x) 可能纳入**：

| 功能/改进 | 来源 | 成熟度 | 入版概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **永久隐藏侧边栏广告开关** | PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 代码就绪，解决 #2342 | ⭐⭐⭐⭐⭐ (极高) | 用户强需求，实现简单，仅待 Review/Merge |
| **Session 重命名失败兜底** | PR [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | 代码就绪，含测试方案 | ⭐⭐⭐⭐ (高) | 修复 Stale Bug，提升基础体验 |
| **Electron 43 / React 19 升级** | PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) | Electron PR Open; React PR Closed | ⭐⭐ (中低) | React 19 PR 被关闭暗示方案调整；Electron 43 是硬性维护任务，预计近期攻坚 |
| **Artifact 预览控制细化** | PR [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | 已合并 | - | 后续可能增加 “预览尺寸/主题” 等二级设置 |

---

## 7. 用户反馈摘要
本周期无新增 Issue 评论，无法直接提炼用户语音。结合历史 Issue 与 PR 背景，推测核心痛点：

1.  **隐私/安全焦虑** (#1202): 开发者/高级用户极度关注本地 Key 泄露风险，期望 Agent 具备最小权限原则与敏感信息脱敏能力。
2.  **UI 干扰控制** (#2342, #2374): 用户对侧边栏广告/推广位感到强烈反感，要求 **永久关闭** 而非临时屏蔽，体现 “本地优先、用户主权” 的产品预期。
3.  **基础交互可靠性** (#1205): 重命名等基础 CRUD 操作缺乏错误反馈，导致用户困惑（“点击了没反应，不知成功失败”）。
4.  **模型可用性透明度** (#2426): 用户在高峰期遇到 “Rate Limit” 反复重试无效，实际为模型满载，需明确区分 “限流(可重试)” 与 “满载(需等待/换模型)” 。

---

## 8. 待处理积压 (Action Required)
> **建议维护者本周优先处理以下 4 项，消除高风险债务：**

| 优先级 | 条目 | 链接 | 停滞时长 | 建议动作 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (阻断发布/安全)** | **修复 Agent Model Key 泄漏** | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | **126 天** | 1. 指派安全负责人评估影响面<br>2. 实施 Key 脱敏/权限隔离<br>3. 回溯历史版本是否需安全公告 |
| **P1 (体验/

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-05

---

## 1. 今日速览
- **整体活跃度：低** 🟢 过去 24 小时仅有 1 条 Dependabot 自动化依赖更新 PR（`#1184`），无人工提交的 Issue、PR 或 Release。
- **代码库状态**：主分支保持稳定，无新增 Bug 报告、功能请求或回归问题。
- **维护重点**：当前维护工作集中在网站文档站（`/website`）的依赖项安全/兼容性维护上。
- **社区互动**：无社区讨论、评论或 Review 产生，项目处于“静默维护期”。
- **健康度评估**：自动化依赖更新机制运行正常，但核心功能开发与社区运营处于停滞状态，建议关注后续是否有功能型 PR 进入。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
> 今日无人工 PR 合并或关闭。唯一变更为自动化依赖更新 PR，尚待 Review 与合并。

| PR | 状态 | 类型 | 影响范围 | 进度说明 |
|----|------|------|----------|----------|
| [#1184](https://github.com/moltis-org/moltis/pull/1184) | **OPEN** | `chore(deps-dev)` | `/website` (文档站) | **Dependabot 自动提交**：将 `undici` 从 `7.28.0` 升级至 `7.29.0`。属于 Node.js 原生 HTTP/1.1 客户端的小版本更新，通常包含 Bug 修复与性能优化，**无破坏性变更** 预期。等待 CI 通过及维护者合并。 |

---

## 4. 社区热点
> 过去 24 小时无人工 Issue/PR 产生，无讨论、评论或 Reaction 数据。**社区热点为空**。

---

## 5. Bug 与稳定性
> 今日无新增 Bug 报告、崩溃日志或回归 Issue。

| 严重度 | 数量 | 说明 |
|--------|------|------|
| Critical / High | 0 | - |
| Medium / Low | 0 | - |

---

## 6. 功能请求与路线图信号
> 今日无新增 Feature Request Issue。结合当前唯一的 PR `#1184`，项目短期路线图信号仅指向 **基础设施维护（依赖升级）**，无新功能开发迹象。

---

## 7. 用户反馈摘要
> 无 Issue 评论、Discussion 或支持请求，**无法提炼用户痛点或使用场景反馈**。

---

## 8. 待处理积压提醒
> 由于数据仅覆盖过去 24 小时，无法直接识别“长期未响应”项。建议维护者定期执行以下检查（GitHub 搜索建议）：
- **Stale PRs**: `is:pr is:open sort:updated-asc` 筛选超过 30 天无更新的 PR。
- **Stale Issues**: `is:issue is:open sort:updated-asc` 筛选超过 60 天无回应的 Issue。
- **依赖积压**: 检查 Dependabot PR `#1184` 是否在 48 小时内合并，避免依赖版本落后过多。

---

### 📌 给维护者的建议
1. **合并 `#1184`**：确认 CI 通过后尽快合并，保持文档站依赖最新。
2. **激活信号发射**：近期缺乏功能型提交，建议在 Roadmap 或 Discord/Forum 发布近期规划（如 v0.x 下一里程碑），召回贡献者关注。
3. **自动化治理**：可考虑为 Dependabot PR 配置 `auto-merge`（需通过 CI），减少维护负担。

---
*报告生成时间：2026-08-05 06:00 UTC | 数据来源：GitHub REST/GraphQL API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-05

---

## 1. 今日速览
- **活跃度评级：高** — 过去 24 小时累计 28 条 Issue 更新、49 条 PR 更新，且无新版本发布，说明项目处于 **v2.1.0-beta.1 发布后的密集修复与迭代期**。
- **核心动向**：Beta 版本（v2.1.0-beta.1）于 8 月 3 日发布（#6656），随后两天集中爆发桌面端环境变量污染（#6697）、浏览器 SDK 崩溃（#6698）、WeChat iLink 审批流失效（#6695/#6696）等阻塞性 Bug，均已有对应 Fix PR 或正在审查中。
- **社区互动**：Issue 评论数集中在 **GPT-5.6 prompt caching 支持（#6649，13 条）**、**Console 安全审批渲染缺失（#6655，12 条）**、**任务产出物目录结构优化（#6643，6 条）**，反映用户对**成本控制、多通道一致性、文件管理**的强烈诉求。
- **代码质量信号**：21 个 PR 已合并/关闭，涵盖时间戳时区修复（#6309/#6618）、Scroll 自动压缩触发记忆（#6628/#6629）、Cron 状态持久化（#6691）、插件命名空间隔离（#6688）、CI Playwright 依赖补全（#6678）等，**技术债偿还与稳定性加固并行**。
- **风险提示**：Windows 桌面端 `PYTHONHOME` 注入导致全量 Python 子进程崩溃（#6697）属 **P0 级回归**，需优先发布 hotfix；WeChat 单通道场景下审批不可达（#6695）影响生产可用性。

---

## 2. 版本发布
**无新版本发布**。当前最新为 **v2.1.0-beta.1（2026-08-03）**，处于安装验证期（#6656）。建议在修复 #6697、#6698、#6695 后发布 **v2.1.0-beta.2** 或 **RC1**。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 关联 Issue | 影响面 |
|----|------|----------|------------|--------|
| [#6309](https://github.com/agentscope-ai/QwenPaw/pull/6309) / [#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) | Bug Fix | 修复会话时间戳跨时区转换错误：naive UTC 被误判为本地时间 | [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) | 全通道会话列表、历史记录显示 |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) / [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) | Bug Fix | Scroll 自动压缩改用 `SystemMsg` 占位 + 触发 `summarize_when_compact` 记忆流程 | [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) / [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | 长上下文记忆、DeepSeek 等模型兼容性 |
| [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) | Bug Fix | `cron pause/resume` 持久化 `enabled` 状态至存储层 | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | 定时任务可靠性 |
| [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) | Bug Fix | 插件加载器隔离裸绝对导入，解决 `qwenpaw-creator` 安装失败 | [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | App Center / 插件生态 |
| [#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) / [#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) / [#6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) | CI/Test | 补全 Playwright Chromium、修正 integration test p-tier 标记、适配 `#6487` 导入限制 | — | CI 绿化、防止回归 |
| [#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) | Bug Fix | `agentscope_msg_to_message` 时间戳处理增强 | [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) | 后端消息转换管线 |
| [#6682](https://github.com/agentscope-ai/QwenPaw/pull/6682) | Bug Fix | Console 保存迭代限制时同步 legacy `max_iters` 字段 | — | 配置一致性 |
| [#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) | Enhancement | Sandbox 配置项（`deny_paths` 等）在后端不支持时显式报警而非静默忽略 | — | 安全策略透明度 |

> **整体进度**：Beta 发布后 48 小时内合并 21 个 PR，**修复率 100%**（针对 Beta 发现的阻塞性 Bug），但仍有 3 个 P0 级 Issue（桌面端崩溃、浏览器 SDK、WeChat 审批）处于 Open 状态，建议本周内出 hotfix。

---

## 4. 社区热点（高互动 Issue/PR）

| 排名 | Issue/PR | 评论/👍 | 核心诉求 | 分析 |
|------|----------|---------|----------|------|
| 1 | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) GPT-5.6 prompt caching | 13 💬 | 在 Responses API 中支持 `prompt_cache_key/options/breakpoint`，实现多轮对话前缀复用，**降低 30-50% 延迟与成本** | 企业级用户刚需，已标记 `enhancement`，建议纳入 v2.1.0 正式版 Provider 扩展包 |
| 2 | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) Console 通道安全审批不渲染 | 12 💬 | `channel: console` 下 HIGH 风险命令（`rm`/`del`）审批提示不显示，导致 300 s 静默超时 | **多通道一致性缺陷**，Web UI 正常、Console 失效，需补全 `ConsoleChannel.render_approval()` |
| 3 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) 任务产出物按任务分目录 | 6 💬 | `media/` 目录文件堆积混乱，期望按 `task_id` 自动分桶 | 低成本高收益 UX 改进，配合 #6492（保留上传文件名）可大幅提升文件可追溯性 |
| 4 | [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) DeepSeek thinking mode 多轮丢失 `reasoning_content` | 5 💬 | OpenAI Formatter 跳过 `ThinkingBlock` 导致二轮起推理内容丢失 | 影响 DeepSeek V4 Pro 等思维链模型复用，属 Provider 适配层 Bug |
| 5 | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) 按需加载技能 | 1 💬 / 新建 | 27+ 技能导致系统提示词 8k-10k tokens，请求按需注入 | **架构级优化信号**，当前全量加载模式不扩展，建议设计 `SkillRouter` + 动态注入机制 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 (阻塞/崩溃)** | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 Windows 桌面端注入 `PYTHONHOME` → 所有 `python` 子进程 `ModuleNotFoundError: encodings` | ❌ 无 | **必须热修复**，影响全量 Windows 用户升级 |
| **P0 (阻塞/崩溃)** | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | Browser SDK `open()` 必现 `WireProtocolError: Target crashed` (isolated Playwright) | ❌ 无 | 桌面端浏览器工具完全不可用 |
| **P0 (功能失效)** | [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) | WeChat 单通道下审批提示仅在 Console 弹出，用户无法审批 → 5 min 自动拒绝 | ❌ 无 | 单通道部署场景常见，需在 WeChat 侧渲染审批卡片或提供 CLI 交互 |
| **P0 (功能失效)** | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink `context_token` 被 typing indicator 消耗 → 回复 `ret=-2`、working 指示器卡死 | ❌ 无 | 同一 token 双重使用设计缺陷 |
| **P1 (严重功能缺陷)** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll 自动压缩不触发 `summarize_when_compact` 记忆（手动 `/compact` 正常） | ✅ [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) (Open) | 已有 PR 待合并 |
| **P1 (数据不一致)** | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | `cron pause/resume` 仅操作内存调度器，重启后状态丢失 | ✅ [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) (Open) | 已有 PR 待合并 |
| **P1 (插件安装失败)** | [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | App Center 安装 `qwenpaw-creator` 报 `No module named 'utils.env'` | ✅ [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) (Open) | 插件命名空间隔离修复 |
| **P2 (体验降级)** | [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测覆盖已知能力为 `false` | ❌ 无 | 导致模型能力判定错误 |
| **P2 (体验降级)** | [#6673](https://github.com/agentscope-ai/QwenPaw/issues/6673) | v2.1.0b1 前端对话窗口显示异常（截图附件） | ❌ 无 | 需复现定位 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 现有 PR/实现基础 | 入版本预测 |
|------|-------|----------|------------------|------------|
| **GPT-5.6 Prompt Caching** | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | ⭐⭐⭐⭐⭐ (13 评论) | 无 | **v2.1.0 正式版** — Provider 扩展属低风险增量 |
| **按需加载技能** | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | ⭐⭐⭐ (新建) | 无 | **v2.2.0** — 涉及系统提示词构建重构，需设计 RFC |
| **全局规则/系统提示词置顶** | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) | ⭐⭐ (1 评论) | 无 | **v2.1.x** — 类 `.claude` 机制，配置层面实现成本低 |
| **频道启动重试/健康检查** | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | ⭐⭐⭐ (3 评论) | ✅ [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) (Matrix 重试) | **v2.1.0** — 已有通用重试契约 PR，扩展至全通道 |
| **免费模型限流自动重试/降级** | [#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) | ⭐⭐ (1 评论) | 无 | **v2.1.x** — 需在 Provider 层加入 429 退避策略 |
| **Volcengine / Xiaomi MiMo 内置 Provider** | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | ⭐⭐ (3 评论) | 无 | **

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-05

---

## 1. 今日速览

ZeroClaw 今日保持**高强度设计与工程并行**态势：过去 24 小时累计 50 条 Issue 更新（48 活跃/新开、2 关闭）与 50 条 PR 更新（48 待合并、2 合并/关闭），**零版本发布**。核心精力集中在 **RFC 评审推进**、**安全加固**（Webhook fail-closed、知识图谱隔离、工具调用解析）、**运行时可观测性**（Token 核算、Cron 超时）、**多会话/多面板 UX**（ZeroCode、Web）以及 **A2A 协议出站客户端**等重型工程上。社区讨论高度聚焦于**架构边界划分**（Runtime vs Plugin vs Channel）、**安全默认值**与**向后兼容迁移**。项目整体处于 **v0.9.0 安全/架构里程碑** 的攻坚期，代码库变更密度大、跨 crate 依赖深，审核压力集中在少数 Maintainer 身上。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 核心推进 | 影响面 |
|----|------|----------|--------|
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | **Closed** | Mixture-of-Agents (MoA) 虚拟模型提供者 RFC 落地决议关闭，转入实现跟踪 | Provider 抽象、多模型编排 |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | Open (XL) | A2A 出站客户端 Phase 1：配置块、共享 v1.0 Wire Model、4 个 `a2a_*` 工具 | Agent-to-Agent 互操作、工具生态 |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | Open | ZeroCode 多会话面板 + Agent 侧边栏 + 快速启动入口（堆叠于 #9738） | TUI UX、多任务并行 |
| [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) | Open (L, P1, Security) | **Browser Tool 截图任意写修复**：引入 `is_path_allowed`/`resolve_tool_path` 校验 | 沙箱逃逸阻断、工作区策略强制 |
| [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) | Open (XL) | JSONL 会话迁移**重试安全**：共享锁 + SQLite 事务 + 原子 receipt + 无冲突归档 | 数据完整性、升级平滑度 |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Open (XL, P1) | Cron Agent 作业**墙钟超时**并释放锁，防止死锁占用 `locked_at` | 守护进程稳定性、资源泄漏修复 |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | Open (M, P1) | `config/set` 失败时**回滚自动创建的 map alias**，事务化写入 | 配置一致性、CLI 可靠性 |
| [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) | Open | Tool Call Parser 新增 DeepSeek DSML / `<|tool_call|>` 信封解析 | 多模型兼容性、原始文本泄露修复 |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | Open (L) | History-trim 事件暴露 `tokens_before/after` 核算，解决大段截断看似预算耗尽的困惑 | 可观测性、Token 预算透明化 |
| [#9548](https://github.com/zeroclaw-labs/zeroclaw/pull/9548) | Open (M, P2, Security) | `codex_cli.extra_args` 风险参数**非阻断告警**（沙箱、审批、execpolicy 等边界改变参数） | 供应链安全、配置审计 |

> **合并/关闭统计**：数据集中仅显示 2 条关闭（Issue #8568 与另一未列出 Issue），PR 侧无明显合并记录（Top 20 均为 Open）。提示 **Maintainer 审核吞吐可能成为瓶颈**。

---

## 4. 社区热点

| Issue/PR | 评论 | 核心诉求 | 信号解读 |
|----------|------|----------|----------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 16 | **Chat Completions Profile**：OpenAI 兼容协议接入，覆盖 Open WebUI / LobeChat / Continue.dev / Aider / LangChain / SDK | **生态互操作性最高优先级**，P2 但需 Maintainer 评审，风险高（协议映射、流式、工具调用语义） |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 14 | **Goal Mode v1**：有界前台 Matrix 工作流，跨 Turn 追踪用户目标 | 核心 Agent 循环演进，控制平面方向已定，实现边界收敛中 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 13 | **高危 Shell 命令分级确认 + 统一工具权限层**（Allow/Ask/Deny） | 安全 UX 基石，P1，已从 Shell 扩展至全工具，非目标项已剥离 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 12 | **统一附件架构**：Web Chat 与 Channel 共享附件模型 | 多入口一致性，架构边界清晰化前置依赖 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 10 | **Runtime 拥有会话 + Transport Surface Adapter** | 会话持久化所有权归属，配合 #9488/#9600 三件套推进 |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | 4 | **Tracker：会话持久化契约所有权与层序** | 显性化四条并行工作流的串行化顺序，防冲突 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 9 | **Maintainer Decision Queue** | 显性化 RFC/设计决策积压，透明化优先级 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 10 | **可插拔入站认证 + 规范 Principal**（Rev 7，In Progress） | 身份与访问里程碑，OIDC/插件化 Provider，P1 |
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | 3 | **S0 Bug：Webhook Handler 不 Fail-Closed**（WhatsApp/Linq/WATI） | **生产环境安全阻断**，In Progress，需立即回港合并 |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | 3 | **S0 Bug：知识图谱无 Agent 归属，跨 Agent 读写** | 多 Agent 隔离缺失，Accepted，P1 |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | 3 | **S0 Bug：Session/Channel 工具缺乏所有权校验**（Discord 等） | 工具层面越权，Accepted，P1 |

> **热点聚类**：
> 1. **协议互操作**（#8603、#9324）
> 2. **安全默认与隔离**（#7155、#9565、#9647、#9646、#7141、#7142）
> 3. **会话/附件/持久化所有权重构**（#9487、#9488、#9600、#8891）
> 4. **决策治理显性化**（#8692、#8603 needs-maintainer-review）

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 已有 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **S0** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) Webhook Handler 不 Fail-Closed (WhatsApp/Linq/WATI) | In Progress | 未见直接 PR

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*