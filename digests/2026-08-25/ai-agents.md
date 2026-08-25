# OpenClaw 生态日报 2026-08-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-25 00:54 UTC

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

# OpenClaw 项目日报 | 2026-08-25

---

## 1. 今日速览

**整体状态：高强度迭代期，Beta 版本密集发布，核心稳定性问题集中爆发**  
过去 24 小时，项目处理了 **500 条 Issue 更新**（仅 25 条关闭）与 **500 条 PR 更新**（78 条合并/关闭），呈现典型的“发布前夕修复潮”特征。新版本 **v2026.8.1-beta.3** 发布，引入 GPT-5.6 系列模型支持、Control UI 首次运行流程完善、Puppeteer CDP 中继等特性。Issue 列表以 **P1 级消息丢失、会话状态异常、子进程泄漏、多 Agent 所有权路由失败** 为主，暴露出多 Agent 显式所有权模式下的架构债务。PR 侧重于配置验证修正、启动诊断、凭据管家修复、UI 交互优化等“止血”类改动。社区讨论热度集中在 **Release 验证、Telegram/Feishu/QQBot 渠道可靠性、技能工作流数据丢失、模型上下文窗口回退** 等生产环境痛点。**项目健康度：代码活跃度极高，但关键路径缺陷密集，稳定性风险上升，建议谨慎评估 Beta 入生产。**

---

## 2. 版本发布

### v2026.8.1-beta.3 `openclaw/openclaw#release`
**发布时间**：2026-08-25（今日）  
**核心亮点**：
- **GPT-5.6 系列全系支持**：Sol / Terra / Luna / Ultra 推理模型在 OpenClaw 与 Codex Runtime 均已适配。
- **Control UI 首次运行流程增强**：验证模型配置后自动延伸至 Custodian（守护进程）与可选渠道配置，降低新手门槛。
- **Puppeteer 兼容 CDP 中继**：支持与外部 Chrome 会话配对，便于浏览器自动化场景复用现有调试端口。
- **显式扩展点**：为插件开发者暴露更多运行时钩子（详见 Changelog）。

**破坏性变更 / 迁移提示**：
- `agents.ownership: "explicit"` 模式下，所有系统级 RPC、Control UI 全局调用、Logbook 插件均**必须**显式携带 `agentId`，否则将触发 `AgentSelectionRequiredError`（#126360）。
- Beta 标签升级可能导致官方外部插件停留在 `latest` 而非请求的 beta 标签（#97680），建议升级后执行 `openclaw plugins sync --beta`。
- Windows Session Host Worker Bundle 哈希校验因 Unix 模式位差异失败（#128889），跨平台网关需关注后续 Hotfix。

🔗 [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3) | [Release Validation Issue #125626](https://github.com/openclaw/openclaw/issues/125626)

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 影响面 | 核心改动 | 状态 |
|----|------|--------|----------|------|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) `fix(gateway): keep conversation delivery within agent bindings` | **P1 修复** | 多 Agent 会话路由、消息投递 | 修复多 Agent 显式所有权下，对话工具跨 Agent 误投递导致的会话状态污染；绑定精确 `context_id + execution_id`。 | ✅ **CLOSED / Merged** |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) `fix(models): keep Claude CLI OAuth available in Control UI` | **P2 修复** | 认证、UI | 修复 Gateway 重启后 Claude CLI OAuth 刷新所有权丢失，Control UI 显示缺失的问题。 | ✅ **CLOSED / Merged** |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) `feat(ui): review install policy warnings` | **P2 功能** | 安全、UI | Control UI 新增安装策略警告复核流程，管理员可显式确认后继续安装。 | ✅ **CLOSED / Merged** |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) `feat(security): require acknowledgement for install policy warnings` | **P2 功能** | 安全、CLI | CLI 侧同步实现安装策略警告交互确认机制。 | ✅ **CLOSED / Merged** |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) `fix(scripts): clean up tsgo process trees on timeout or signal` | **P2 稳定性** | 构建、进程管理 | `tsgo` 包装器引入受管进程所有者、可选超时看门狗，防止编译器进程树残留。 | ✅ **CLOSED / Merged** |
| [#126082](https://github.com/openclaw/openclaw/pull/126082) `Audit exact-bound owner-native lifecycle receipts` | **P2 可观测性** | Cron/Task/Flow 生命周期 | 为定时任务、任务流、流程执行边界追加精确所有者原生生命周期回执，移除 `runId` 连接键依赖。 | ✅ **CLOSED / Merged** |

**整体推进评估**：今日合并的 78 条 PR 中，**核心路由修复（#126424）与认证修复（#125471）直接解除 Beta 阻断**，安全与可观测性增强为后续稳定版奠基。但 **422 条待合并 PR 积压** 表明审核带宽吃紧，多数修复仍处于“需证明/等待作者”状态。

---

## 4. 社区热点（高互动 Issue/PR 深度解析）

| Issue/PR | 评论/👍 | 核心诉求 | 代表性声音 |
|----------|---------|----------|------------|
| [#125626 Release Validation v2026.8.1-beta.2](https://github.com/openclaw/openclaw/issues/125626) | 18 💬 | **社区协作验证 Beta 质量** | 维护者要求真实网关升级测试，填写工作表，通过 Validation Skill 提交最终意见。 |
| [#67777 Subagent 完成投递丢失](https://github.com/openclaw/openclaw/issues/67777) | 12 💬 | **子 Agent 完成信号可靠性** | 直播通道超时/排空/孤儿清理时，完成信号未落盘即丢失，需持久化落盘+重试机制。 |
| [#97616 僵尸进程泄漏](https://github.com/openclaw/openclaw/issues/97616) | 9 💬 / 1 👍 | **Hook/Tool 子进程未回收** | 长期运行网关积累 `openclaw-hooks`、`bash`、`codex` 僵尸进程，导致运行时退化。 |
| [#126360 AgentSelectionRequiredError 刷屏](https://github.com/openclaw/openclaw/issues/126360) | 7 💬 | **显式所有权模式下系统组件缺 agentId** | Logbook、Control UI RPC、System Agent 轮次均未携带 `agentId`，导致日志洪水与路由失败。 |
| [#125570 Skill Workshop 更新覆盖描述导致路由失效](https://github.com/openclaw/openclaw/issues/125570) | 6 💬 | **技能元数据静默丢失** | Apply 动作将 Proposal 的 description 覆盖写入线上技能，破坏路由匹配。 |
| [#128889 Windows Worker Bundle 哈希校验失败](https://github.com/openclaw/openclaw/issues/128889) | 4 💬 | **跨平台打包一致性** | Linux 网关分发的 Worker Bundle 在 Windows 上因 Unix mode bits 导致哈希不匹配。 |
| [#128608 /models 编辑配置后永久失效](https://github.com/openclaw/openclaw/pull/128608) | — | **热重载后模型目录未刷新** | 无关配置编辑触发发布，导致 prepared model owners 失效，需重启恢复。 |

**趋势洞察**：社区关注点已从“新功能”显著转移至 **“多 Agent 显式所有权下的基础设施正确性”** 与 **“跨平台/长运行稳定性”**，反映生产部署规模扩大后的架构暴露面。

---

## 5. Bug 与稳定性（按严重度分层）

### 🔴 Critical / Release Blocker 级
| Issue | 现象 | 严重度 | 是否有 Fix PR | 备注 |
|-------|------|--------|---------------|------|
| [#126360](https://github.com/openclaw/openclaw/issues/126360) `AgentSelectionRequiredError` 刷屏 | 显式所有权模式下系统组件缺 `agentId`，日志洪水+路由失败 | **P1 / 🦞 Diamond Lobster** | ❌ 无 | 影响所有多 Agent 显式所有权部署，**Beta.3 已知遗留** |
| [#128515](https://github.com/openclaw/openclaw/issues/128515) Config 发布不刷新 Prepared Model Owners | 热重载后 `/models` 与后台消费者永久失效，需重启 | **P1 / 🦞 Diamond Lobster** | ✅ [#128608](https://github.com/openclaw/openclaw/pull/128608) (Ready for review) | 核心运行时缺陷，已有修复待合并 |
| [#128889](https://github.com/openclaw/openclaw/issues/128889) Windows Worker Bundle 哈希校验失败 | 跨平台分发 Worker Bundle 因 mode bits 校验不通过 | **P1 / 🦞 Diamond Lobster** | ❌ 无 | 阻断 Windows Session Host 启动，**跨平台网关必现** |

### 🟠 High 级
| Issue | 现象 | 严重度 | 是否有 Fix PR |
|-------|------|--------|---------------|
| [#67777](https://github.com/openclaw/openclaw/issues/67777) Subagent 完成投递丢失 | 直播/超时/排空/孤儿清理路径均可丢失完成信号 | **P1 / 🦞 Diamond Lobster** | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程累积 | Hook/Tool 子进程未回收，长期运行退化 | **P1 / 🦪 Silver Shellfish** | ❌ 无 |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) Feishu/Telegram 调度失败 | `runChannelInboundEvent` 缺 `runDispatchLifecycle` | **P1 / 🦞 Diamond Lobster** | ❌ 无 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) Telegram 耐久投递卡在 `send_attempt_started` | 重启后恢复机制失效，消息静默丢失 | **P1 / 🐚 Platinum Hermit** | ❌ 无 |
| [#126900](https://github.com/openclaw/openclaw/issues/126900) `maxActiveTranscriptBytes` 无限压缩循环 | 压缩后仍超阈值触发再次压缩，通道楔死 | **P1 / 🦞 Diamond Lobster** | ❌ 无 |
| [#128882](https://github.com/openclaw/openclaw/pull/128882) DeepSeek 双重 DSML 工具调用作为文本投递 | 工具调用未执行，直接作为文本渲染 | **P1 / 🦪 Silver Shellfish** | ✅ [#128882](https://github.com/openclaw/openclaw/pull/128882) (Needs proof) |

### 🟡 Medium 级
| Issue | 现象 | 严重度 | 是否有 Fix PR |
|-------|------|--------|---------------|
| [#125570](https://github.com/openclaw/openclaw/issues/125570) Skill Workshop Apply 覆盖 description | 技能路由字段被 Proposal 描述覆盖，路由失效 | **P1 / 🦞 Diamond Lobster** | ❌ 无 |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) 拒绝 write 工具静默禁用记忆持久化 | Agent 报成功实则未落盘，无任何告警 | **P1 / 🐚 Platinum Hermit** | ❌ 无 |
| [#86119](https://github.com/openclaw/openclaw/issues/86119) 孤儿 `node server.js` 累积 | Subagent/Cron 嵌入运行产生僵尸 worker | **P1 / 🦪 Silver Shellfish

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-08-25

---

## 1. 生态全景

当前生态处于**“大模型能力落地与工程化兑现”**的深度融合期：头部项目（OpenClaw、NanoBot、Hermes、IronClaw、ZeroClaw）均进入 **Beta/RC 密集发布与架构重构并行** 的高强度迭代周期，核心矛盾从“功能堆砌”转向 **多 Agent 显式所有权路由、跨平台长运行稳定性、模型上下文/工具调用契约对齐、零 Token 事件驱动自动化** 等生产级基建攻坚。  
社区呈现 **“内核自研 + 适配器生态外延”** 分层：核心团队攻克运行时、沙箱、协议、记忆等硬骨头，外部贡献聚焦 Provider 接入、技能包、UI 组件、文档国际化。  
**安全与可观测性** 成为硬性门槛：安装策略确认、节点配对签名、Delegate 沙箱逃逸修复、审计级 Token 记账同步落地。  
**跨平台（macOS/Windows/Linux/Container）一致性** 与 **原生集成（ACP、MCP、Chat Completions、OAuth 设备码）** 竞争白热化，标准化接口成为生态互通关键。  
整体呈现 **“少数头部高频交付、大量长尾维护态/孵化态”** 的马太效应，头部项目日合并 PR 10–78 条，长尾项目周级无活动。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release (今日) | 合并/关闭 PR | 关闭 Issue | 健康度评估 | 阶段标签 |
|------|--------------|-----------|----------------|--------------|------------|------------|----------|
| **OpenClaw** | 500 更新 / 25 关闭 | 500 更新 / 78 合并 | **v2026.8.1-beta.3** | 78 | 25 | 🟡 **高活跃·高风险** — 关键路径缺陷密集，Beta 阻断未清 | 快速迭代/发布前夕 |
| **NanoBot** | 8 新增 / 更新 | 26 更新 / 12 合并 | 无 | 12 | 若干 | 🟢 **优秀** — 高吞吐、快速闭环，零未修复 Critical/High | 质量巩固/基建成型 |
| **Hermes Agent** | 50 更新 / 2 关闭 | 50 更新 / 11 合并 | 无 | 11 | 2 | 🟡 **高活跃·债务偿还** — P0 崩溃/锁死修复滞后于发现 | 架构重构/稳定性攻坚 |
| **IronClaw** | 15 新增 / 9 关闭 | 17 合并 | 无 | 17 | 9 | 🟢 **极高** — CI 基建、Onboarding、WebUI 多线并行，交付节奏快 | 快速迭代/预发布冲刺 |
| **ZeroClaw** | 50 更新 | 50 更新 / 0 合并 | 无 | 0 | 7 | 🟡 **高活跃·重构期** — XL 级架构 PR 评审中，S0 安全漏洞在途 | 大型重构/治理规范化 |
| **NanoClaw** | 1 关键 P0 | 21 更新 / 3 合并 | **v2.3.0** (Breaking) | 3 | 1 | 🟢 **里程碑交付** — Slack 多 App 架构上线，P0 segfault 需热修复 | 版本发布/生产就绪 |
| **Moltis** | 2 关闭 | 19 更新 / 16 合并 | **20260824.01** (Daily) | 16 | 2 | 🟢 **极高** — 日构建、零回归、边界条件修复闭环快 | 高频交付/工程成熟 |
| **CoPaw (QwenPaw)** | 50 更新 / 19 关闭 | 47 更新 / 26 合并 | **v2.1.1-beta.2** | 26 | 19 | 🟡 **高活跃·Beta 收敛** — 内存泄漏 P0、会话身份错乱 P1 待解 | Beta 质量门槛收敛 |
| **LobsterAI** | 3 清理 | 10 合并 | 无 | 10 | 3 (stale) | 🟢 **高** — 底座加固（SQLite、缩略图）、体验打磨，Electron 升级滞后 | 体验打磨/小版本积累 |
| **PicoClaw** | 2 活跃 | 3 更新 / 2 关闭 | 无 | 2 | 0 | 🟡 **中低** — 核心路线图推进，Slack 媒体上传阻塞 8 天无修复 | 重构期/响应慢 |
| **NullClaw** | 2 新增 | 1 待合并 (Dependabot) | 无 | 0 | 0 | 🔴 **维护态** — 核心推进信号缺失，Onboarding 断裂 P0 未修 | 低频维护/需复苏 |
| **ZeptoClaw** | 1 新增 | 0 | 无 | 0 | 0 | 🔴 **孵化/停滞** — 仅 REPL UX Issue，无 PR 流转 | 早期/维护停滞 |
| **TinyClaw** | 0 | 0 | 无 | 0 | 0 | ⚫ **无活动** | 归档/休眠 |

> **统计口径**：Issues/PRs 以过去 24 小时 GitHub 事件流 `updated_at` 统计；Release 以 `published_at` 判定；健康度综合代码吞吐、阻断修复速度、发布节奏、社区响应。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类头部对比 (NanoBot/Hermes/IronClaw/ZeroClaw) | 结论 |
|------|----------|--------------------------------------------------|------|
| **技术路线** | **多 Agent 显式所有权 + Control UI + Codex Runtime + 插件扩展点**；重网关、重路由、重多租户隔离 | NanoBot：单 Agent 深度工程化（SQLite FTS5、零 Token 触发器、Provider 计量）；Hermes：Desktop + Gateway 双端、ACP 原生、技能同步；IronClaw：WebUI 优先、Design System、Onboarding Suggestions；ZeroClaw：TaskRecord 单一生命周期所有者、ZeroCode TUI、Chat Completions 兼容层 RFC | **最激进的多 Agent 编排架构**，适合企业级多租户、多渠道、高并发网关场景；但架构债务集中爆发（Ownership 路由、子进程泄漏、Config 热重载）。 |
| **社区规模** | Issue/PR 日均 500+ 更新，核心维护者 + 外部插件开发者双轮驱动 | NanoBot/Hermes/IronClaw 日均 50–100 更新，核心团队主导；ZeroClaw 50 更新但 0 合并（重构评审期） | **社区广度最大**，但审核带宽成为瓶颈（422 PR 积压）。 |
| **发布节奏** | Beta 密集发布（v2026.8.1-beta.3），破坏性变更频繁 | NanoBot 无版本但合并即稳定；IronClaw 冲刺 v1.4.0；Moltis 日构建；NanoClaw v2.3.0 Breaking 但有兼容闸门 | **发布最激进**，适合早期采纳者验证，生产环境需谨慎。 |
| **差异化优势** | 1. 显式所有权模式下的系统级 RPC/Logbook/Control UI 统一路由<br>2. Puppeteer CDP 中继、GPT-5.6 全系适配等前沿集成<br>3. 插件开发者暴露运行时钩子最彻底 | 其它项目在单 Agent 深度、UI 体验、协议兼容、安全加固上更扎实 | **生态中心节点** 定位明确，但需以稳定性换取生产信任。 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求/进展 |
|----------|----------|---------------|
| **多 Agent / 多会话隔离与路由** | **OpenClaw** (Ownership explicit、AgentSelectionRequiredError)、**Hermes** (Desktop/Remote Gateway Session ID mismatch)、**IronClaw** (Subagent Background Mode、Session Identity 冻结)、**ZeroClaw** (TaskRecord 单一生命周期所有者)、**CoPaw** (多会话消息错投、Dashboard 74 Agents 加载慢) | 显式 `agentId` 绑定、会话身份防污染、子 Agent 完成信号持久化、后台任务生命周期管理。 |
| **零 Token / 事件驱动自动化** | **NanoBot** (ConditionalTriggerRuntime #5508 已合并)、**OpenClaw** (Heartbeat/Telegram/Feishu/QQBot 耐久投递、Cron 上下文保持)、**Moltis** (Cron 输出回写原会话、Heartbeat active_hours 修复)、**Hermes** (Unified Deadline Layer #85125 架构治理) | 文件监听、心跳、定时任务、Webhook 触发不消耗 LLM Token；统一 Deadline/超时抽象层治理 400+ 历史超时挂起。 |
| **模型协议标准化与兼容层** | **ZeroClaw** (RFC #8603 Chat Completions Profile、24 评论)、**NanoBot** (QwenCloud Provider #5350、AnySearch #5505)、**Hermes** (OpenWebUI 图片多模态 #7895)、**IronClaw** (Model Config 手动覆盖 #1187)、**LobsterAI** (DeepSeek Context Overflow #1187) | 原生 `/v1/chat/completions`、OAuth 设备码、工具调用/流式/多模态语义对齐、用户可配置上下文窗口。 |
| **跨平台沙箱与容器化** | **NanoClaw** (Apple Container Driver #3503)、**Moltis** (Apple Container 标识符截断 #1237、Browserless v2 #1229)、**Hermes** (Windows ACP/Terminal 挂起 #94304、WSL/Wayland 热键 #82654)、**ZeroClaw** (文件系统安全隔离 #9977、Delegate 沙箱逃逸 #10165) | macOS 原生 microVM、Windows 终端/PTY 兼容、浏览器沙箱隐身模式、高风险命令拦截绕过修复。 |
| **安全与可观测性基建** | **OpenClaw** (安装策略确认 #120900/#116489、精确所有者生命周期回执 #126082)、**Moltis** (节点配对签名 #1179、Slack 共享频道工具策略 #1238)、**ZeroClaw** (Provider Call 记账完整性 #10143、Google TTS Key 标记敏感 #10175)、**IronClaw** (Automations 创建前置契约 #7742) | 供应链/插件安装确认、节点认证、工具调用审计、自动化执行契约、敏感数据脱敏。 |
| **长期记忆与知识检索** | **NanoBot** (SQLite FTS5 全文检索 #5507、子 Agent 全量转录持久化 #5291)、**CoPaw** (PowerContext 可插拔 #7080、ReMe 索引压缩 #7234)、**ZeroClaw** (MCP 客户端重连 #1231)、**LobsterAI** (跨平台缩略图/产物生命周期 #2524) | 语义/全文混合检索、会话/技能/工具调用全链路可审计、向量/图谱后端可插拔。 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|------|--------------|--------------|------------------|
| **OpenClaw** | 多 Agent 网关、插件生态、企业级多渠道运营 | 平台运营者、插件开发者、多租户 SaaS | **显式所有权路由 + Control UI + Codex Runtime + 插件钩子**；重中心化编排。 |
| **NanoBot** | 单 Agent 深度工程化、本地优先、零 Token 自动化、Provider 计量 | 个人开发者、隐私优先用户、自动化工程师 | **SQLite FTS5 + 条件触发器 + 统一 Provider 契约 + 子 Agent 持久化**；重本地体验与可审计性。 |
| **Hermes Agent** | Desktop + Gateway 双端、ACP 原生、技能同步、多模态集成 | 桌面端重度用户、多机协作开发者、OpenWebUI/Slack/Telegram 集成场景 | **Tauri Desktop + Go Gateway + ACP 协议 + SSH/Tailscale Skill Sync**；重跨设备无缝体验。 |
| **IronClaw** | WebUI 优先、Design System、Onboarding Suggestions、自动化契约 | 低代码/非技术用户、团队协作、内部工具构建者 | **React/WebUI 共享原语 + 统

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-25

> 数据窗口：2026-08-24 00:00 – 2026-08-24 23:59 (UTC)  
> 数据源：GitHub API / 仓库事件流

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时内 **8 个新 Issue**、**26 个 PR 更新**（14 个待合并，12 个已合并/关闭），无新版本发布。  
- **核心方向聚焦**：修复 WebUI 重连后卡死（`spinning`）问题、引入 SQLite FTS5 全文检索、上线零 Token 条件触发器、完善 Provider 使用量统计契约、持久化子 Agent 会话与多步任务账本。  
- **代码质量与测试**：多个 PR 专门解决 Windows 进程计时竞态、时区导致的测试波动、Agent 空转工具调用死循环等稳定性隐患。  
- **社区协作**：外部贡献者（AnySearch 团队）提交新搜索 Provider 提案；维护者 yrxeva 与 chengyongru 主导了 5+ 个核心基建 PR 的并行推进。  
- **整体健康度**：🟢 **优秀** —— 高吞吐、快速闭环（多个 Issue 同日出 PR 并合并），技术债偿还与新特性并行。

---

## 2. 版本发布

> 今日无新 Release。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#5507](https://github.com/HKUDS/nanobot/pull/5507) | **Performance / Feature** | 新增 SQLite FTS5 全文索引，Session 搜索从 O(N) 线性扫描降为亚毫秒级；保留 JSONL 兜底。 | 所有历史会话检索场景 |
| [#5508](https://github.com/HKUDS/nanobot/pull/5508) | **Performance / Feature** | 引入 `ConditionalTriggerRuntime`：纯 Python 条件监视器，仅在条件命中时唤醒 LLL，实现“零 Token”事件驱动自动化。 | Heartbeat / Cron / 文件监听等轮询场景 |
| [#5514](https://github.com/HKUDS/nanobot/pull/5514) | **Bugfix (Regression)** | 修复 WebUI 在 Gateway 重启后仍处于 `spinning` 状态（#5512）；在 `onRunStatus` 重置时清理残留流式状态。 | WebUI 交互稳定性 |
| [#5506](https://github.com/HKUDS/nanobot/pull/5506) | **Bugfix** | Agent 正确识别 WebUI 选中的 Project Workspace 作为 CWD，保持 Prompt Cache 复用。 | 多项目并行开发体验 |
| [#5496](https://github.com/HKUDS/nanobot/pull/5496) | **Bugfix (Regression)** | 为无工具模型请求（异常恢复、空响应兜底、最大迭代收尾）补充壁钟超时保护。 | Agent 执行超时安全性 |
| [#5517](https://github.com/HKUDS/nanobot/pull/5517) | **Test Stability** | 消除 Windows 下进程退出通知与 stdout 到达顺序竞态，替换为显式握手机制。 | CI 稳定性 |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) / [#5481](https://github.com/HKUDS/nanobot/pull/5481) | **Refactor / Feature** | 统一 Provider 使用量契约（`LLMUsage` 不变类型），归一化 Token / Cache 语义；新增统一使用量后端，记录每次重试尝试的耗用。 | 计费审计、成本可观测性 |
| [#5291](https://github.com/HKUDS/nanobot/pull/5291) | **Feature** | 子 Agent 完整对话记录（工具调用、推理步骤）持久化，不再随进程消失。 | 可审计性、调试体验 |
| [#5344](https://github.com/HKUDS/nanobot/pull/5344) | **Bugfix** | Agent 检测连续相同工具调用并发出警告，避免静默消耗 `max_iterations`。 | Agent 卡死可观测性 |
| [#5515](https://github.com/HKUDS/nanobot/pull/5515) | **Bugfix** | 观测 Session 回复超时任务的异常，防止后台任务失败静默丢失。 | 消息总线可靠性 |

> **里程碑感知**：今日合并 PR 覆盖 **检索、自动化触发、WebUI 稳定性、Provider 计量、Agent 健壮性** 五大支柱，标志着 v0.17+ 基建层基本成型。

---

## 4. 社区热点（高互动 / 高关注）

| Item | 类型 | 互动 | 核心诉求 |
|------|------|------|----------|
| [#5350](https://github.com/HKUDS/nanobot/issues/5350) | Issue (Enhancement) | 2 💬 | **QwenCloud 兼容路径**：保留现有 DashScope 配置不变，新增 `qwencloud` Provider ID / Endpoint / Key 体系，平滑迁移国际版 Qwen 用户。 |
| [#5512](https://github.com/HKUDS/nanobot/issues/5512) | Issue (Bug) | 1 💬 | **WebUI 重连后永久 spinning** —— 已由 #5514 当日修复合并，用户验证通过。 |
| [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Issue (Bug) | 0 💬 | **Telegram Rich Message 与 Streaming 互斥**：期望利用 Bot API 10.1+ `editMessageText` + `entities` 实现流式富文本渲染。 |
| [#5513](https://github.com/HKUDS/nanobot/issues/5513) | Issue (Feature) | 0 💬 | **Cron 结果可配置路由 + 批量归档**：避免自动化噪音污染个人会话，需独立 Channel 与批量管理 UI。 |
| [#5505](https://github.com/HKUDS/nanobot/issues/5505) | Issue (Enhancement) | 0 💬 | **集成 AnySearch**：官方团队主动提交，免 Key 匿名额度，三种集成方式（API/MCP/Skill），扩展 Web Search 工具生态。 |

> **趋势**：外部厂商主动适配（#5505）与平台兼容性诉求（#5350）增加，说明 NanoBot 在 Agent 生态中的集成中心地位增强。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue / PR | 状态 | 说明 |
|--------|------------|------|------|
| 🔴 **Critical** | [#5512](https://github.com/HKUDS/nanobot/issues/5512) WebUI 重连后卡死 | ✅ **Fixed** (#5514 merged) | 生产环境 Gateway 滚动升级会触发，用户感知极强。 |
| 🟠 **High** | [#5496](https://github.com/HKUDS/nanobot/pull/5496) 无工具请求无超时 | ✅ **Fixed** (merged) | 导致 Agent 会话无限挂起，已加壁钟超时兜底。 |
| 🟠 **High** | [#5344](https://github.com/HKUDS/nanobot/pull/5344) 连续相同工具调用静默空转 | ✅ **Fixed** (merged) | 消耗配额且无任何日志，现已有警告与指标。 |
| 🟡 **Medium** | [#5515](https://github.com/HKUDS/nanobot/pull/5515) 超时任务异常丢失 | ✅ **Fixed** (open, ready) | 消息总线故障时静默失败，现已观测并记录。 |
| 🟡 **Medium** | [#5349](https://github.com/HKUDS/nanobot/pull/5349) 时区导致设置测试每日 5 小时波动 | ✅ **Fixed** (open, ready) | 显式传入 `timezone_name` 消除 UTC 回读不一致。 |
| 🟢 **Low** | [#5517](https://github.com/HKUDS/nanobot/pull/5517) Windows 进程计时竞态 | ✅ **Fixed** (merged) | 仅影响 CI 稳定性，已改为显式握手。 |

> **零未修复 Critical/High Bug** —— 当日所有高严重度问题均已合并修复或进入 Review 最后阶段。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 关联 PR / 进度 | 入版本概率 |
|------|------|----------------|------------|
| **QwenCloud Provider 兼容层** | #5350 | 讨论中，尚无 PR | 🟡 中 —— 需 Provider 抽象层微调，预计 v0.18 |
| **Cron 结果路由 + 批量归档** | #5513 | 无 PR | 🟡 中 —— 需 Channel 抽象与 UI，配合 #5508 触发器一并规划 |
| **任务账本（Crash-safe Task Ledger）** | #5511 | 无 PR | 🟢 高 —— 与 #5291 子 Agent 持久化同构，yrxeva 主导，极大概率 v0.18 |
| **零 Token 条件触发器** | #5510 | ✅ **#5508 merged** | 🟢 已落地 |
| **Session FTS5 全文检索** | #5509 | ✅ **#5507 merged** | 🟢 已落地 |
| **AnySearch Web Search Provider** | #5505 | 无 PR | 🟢 高 —— 官方团队主动适配，仅需 Review 合规性 |
| **Telegram Streaming + Rich Message 共存** | #5516 | 无 PR | 🟡 中 —— 依赖 Bot API 10.1+ 客户端升级，需评估最低版本要求 |
| **统一配置编辑器契约（TUI/WebUI 共用）** | #5497 / #5498 | Review 中 | 🟢 高 —— 基建层重构，配套 Onboarding 统一 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点 / 场景 | 代表性引用 | 当前响应 |
|-------------|------------|----------|
| **Gateway 滚动重启导致 WebUI 假死** | “重启后前端一直转圈，必须手动刷新” (#5512) | #5514 已修复，自动清理 stale stream state |
| **多项目并行时 Agent CWD 不跟随切换** | “选了 Project A 却在 Project B 目录下跑工具” (#5506) | #5506 已合并，Workspace 透传 System Prompt |
| **历史会话搜索随数据增长变慢** | “几百个 Session 搜一次要几秒” (#5509) | #5507 FTS5 索引上线，延迟 < 50ms |
| **Heartbeat 轮询浪费 Token** | “每分钟烧一次 LLM 只是查文件是否到达” (#5510) | #5508 零 Token 触发器已可用 |
| **子 Agent 排查问题无日志** | “跑完就没了，不知道中间调用了啥工具” (#5291) | #5291 全量转录持久化 |
| **Telegram 富文本流式渲染缺失** | “开 streaming 就没 Markdown 了” (#5516) | 待 Bot API 10.1+ 客户端支持后实现 |

> **满意度信号**：核心痛点（重连、搜索、Token 浪费、可观测性）均在 24h 内获得修复或落地 PR，用户反馈闭环极短。

---

## 8. 待处理积压（长期未响应 / 高价值）

| Item | 停滞时长 | 重要性 | 建议行动 |
|------|----------|--------|----------|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) `heartbeat.model_override` | ~60 天 | 中 | 已有完整实现与测试，仅因冲突标签搁置；建议 Rebase 合并进 #5508 触发器体系统一管理。 |
| [#5350](https://github.com/HKUDS/nanobot/issues/5350) QwenCloud 兼容路径 | 13 天 | 中 | 社区呼声明确，建议指派 Provider 维护者在 v0.18 里程碑实现。 |
| [#5349](https://github.com/HKUDS/nanobot/pull/5349) 时区测试修复 | 13 天 | 低 | 测试层修复，CI 绿后可合并，优先级可降。 |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) 释放已完成 Task Group | 7 天 | 中 | 内存泄漏隐患，审查通过后尽快合并。 |
| [#5497](https://github.com/HKUDS/nanobot/pull/5497) / [#5498](https://github.com/HKUDS/nanobot/pull/5498) 统一配置编辑器契约 | 2 天 | 高 | 核心基建重构，涉及 TUI/WebUI 双端，需集中 Review 避免长期分叉。 |

---

## 📎 快速链接汇总

- **Issues 全量**：<https://github.com/HKUDS/nanobot/issues?q=updated%3A2026-08-24..2026-08-25>  
- **PRs 全量**：<https://github.com/HKUDS/nanobot/pulls?q=updated%3A2026-08-2

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-25

> **数据基准**：过去 24 小时 Issue 更新 50 条（活跃 48 / 关闭 2），PR 更新 50 条（待合并 39 / 合并关闭 11），无新版本发布。

---

## 1. 今日速览
- **整体活跃度：极高**。单日 100 条 Issue/PR 更新量处于项目历史高位，且多为 P1/P2 级别的阻塞性 Bug 修复与架构级重构，显示核心维护团队正在集中攻坚稳定性债务。
- **核心矛盾聚焦于“会话状态一致性”与“跨平台兼容性”**：Desktop 端会话恢复失败、布局污染、Token 认证拒绝；Gateway 端 delegate worker 导致 SIGSEGV、update 机制留存脏模块；Windows 下终端/ACP 启动挂起。
- **技术债偿还显性化**：统一 deadline 层（#85125）、技能索引自动化（#66616）、MCP stdio 并发竞态（#67736）等长期架构治理 PR 正在并行推进。
- **社区贡献活跃**：新增功能类 PR（per-profile passcode、skill-sync、photon tapback、工具目录）均来自外部贡献者，且均附带完整测试与文档，说明贡献门槛已降低。
- **风险点**：macOS arm64 Gateway SIGSEGV（#94248）与 Linux `hermes update` 导致远程锁死（#94264）属于**数据丢失/服务不可用**级别，需优先合并对应 fix PR（#94313, #94287）。

---

## 2. 版本发布
> 今日无新版本发布。当前主干版本为 v0.20.5 (2026.8.19)，积累了大量热修复，预计近期将切 v0.20.6 或 v0.21.0-rc。

---

## 3. 项目进展（今日合并/关闭的关键 PR）
| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#92701](https://github.com/NousResearch/hermes-agent/pull/92701) | **Bug Fix (Closed)** | Docker backend: 修复 `task_id` 含冒号导致 `docker run` exit 125 的路径未转义问题 | Windows/Docker 用户，终端持久化沙箱 |
| [#59499](https://github.com/NousResearch/hermes-agent/pull/59499) | **Bug Fix (Closed)** | Kanban dispatcher 现遵守 `max_in_progress_per_profile`，不再并发启动所有任务 | 资源受限环境（Chrome MCP 等） |
| [#48069](https://github.com/NousResearch/hermes-agent/pull/48069) | **Bug Fix (Closed)** | MCP keepalive 不再与 in-flight call 竞态；reconnect 时优雅失败孤儿调用 | 所有使用 MCP stdio 的长跑任务 |
| [#88454](https://github.com/NousResearch/hermes-agent/pull/88454) | **Bug Fix (Closed)** | Cron 失败会话标记 `end_reason='cron_failed'` 而非 `cron_complete` | 可观测性/告警系统 |
| [#94318](https://github.com/NousResearch/hermes-agent/pull/94318) | **Feature (Closed)** | 新增可选 `skill-sync` skill：SSH/Tailscale 双向同步 `~/.hermes/skills/` | 多机开发者、团队技能共享 |

> **进展评估**：今日关闭 11 个 PR，其中 4 个为长期阻塞性 Bug，1 个为高需求社区功能。主分支稳定性显著提升，但仍有 39 个 OPEN PR 待审，审阅吞吐可能成为瓶颈。

---

## 4. 社区热点（评论/互动 Top 5）
| # | 标题 | 评论 | 核心诉求 | 链接 |
|---|------|------|----------|------|
| 1 | **[#66616] Skills index stale/degraded (29.8h > 26h limit)** | 91 | 自动化索引构建流水线失效，文档站技能搜索不可用；需修复 cron/workflow 触发机制 | [Issue](https://github.com/NousResearch/hermes-agent/issues/66616) |
| 2 | **[#85125] Unified deadline layer — architectural fix for timeout/hang backlog (4 phases)** | 20 | 400+ timeout/hang 问题归因于 7 种机制，提议统一 deadline 抽象层从根治 | [Issue](https://github.com/NousResearch/hermes-agent/issues/85125) |
| 3 | **[#25833] Self-created skills lack mechanism-level guarantees** | 10 | 自动生成的 skill 缺乏正确性/一致性保障，呼吁引入契约测试与执行沙箱 | [Issue](https://github.com/NousResearch/hermes-agent/issues/25833) |
| 4 | **[#93888] Desktop sends local runtime ID to Remote Gateway → session restore failed** | 7 | Desktop 与 Remote Gateway 会话 ID 不匹配，导致存储会话永久无法恢复 | [Issue](https://github.com/NousResearch/hermes-agent/issues/93888) |
| 5 | **[#7895] OpenWebUI integration: images generated but not sent** | 4 (👍3) | OpenAI 兼容端点缺少图片多模态返回逻辑，阻断 OpenWebUI 图文混排场景 | [Issue](https://github.com/NousResearch/hermes-agent/issues/7895) |

> **趋势**：Top 3 均为**架构级/自动化基建**议题，说明核心用户与维护者已将关注点从单点 Bug 转向系统性治理。

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 - 生产环境崩溃/锁死** | [#94248](https://github.com/NousResearch/hermes-agent/issues/94248) | macOS arm64 Gateway 在 delegate deadline 后 17-72ms SIGSEGV (SSL read 中被强制关闭) | [#94313](https://github.com/NousResearch/hermes-agent/pull/94313) | **OPEN, 需紧急合并** |
| **P0 - 远程锁死** | [#94264](https://github.com/NousResearch/hermes-agent/issues/94264) | `hermes update --gateway` 恢复无效 Python 却报成功，导致所有 agent turn 失败且无法远程修复 | [#94287](https://github.com/NousResearch/hermes-agent/pull/94287) | **OPEN, 需紧急合并** |
| **P1 - 数据不一致** | [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) | Desktop 发送本地 runtime ID 给 Remote Gateway，会话恢复永久失败 | 无 | **OPEN** |
| **P1 - 会话状态污染** | [#94260](https://github.com/NousResearch/hermes-agent/issues/94260) | 应用布局预设时重挂载多 profile 的 session tile，触发 `ws_orphan_reap` + agent init 级联失败 | [#93580](https://github.com/NousResearch/hermes-agent/pull/93580) (部分缓解) | **OPEN** |
| **P2 - 平台回归** | [#94304](https://github.com/NousResearch/hermes-agent/issues/94304) | Windows `hermes acp` 下 `terminal.init_session` 永不完成（外部二进制挂起） | [#94315](https://github.com/NousResearch/hermes-agent/pull/94315) | **OPEN** |
| **P2 - 资源耗尽** | [#90229](https://github.com/NousResearch/hermes-agent/issues/90229) | Windows 11 右侧文件树骨架屏永不消失，刷新按钮禁用 | 无 | **OPEN** |
| **P2 - 安全边界** | [#93981](https://github.com/NousResearch/hermes-agent/issues/93981) | 非回环 `dashboard.public_url` 强制 gated WS 模式，拒绝 `?token=` 探针，Desktop 聊天失效 | 无 | **OPEN** |
| **P3 - 可用性** | [#93648](https://github.com/NousResearch/hermes-agent/issues/93648) | Slack 原生流式输出每轮重复发两条消息 | 无 | **OPEN** |
| **P3 - 配置失效** | [#94254](https://github.com/NousResearch/hermes-agent/issues/94254) | Email channel 无法通过 Dashboard 禁用，重启后自动恢复启用 | 无 | **OPEN** |

> **修复覆盖率**：今日新增 9 个 P1/P2 Bug，仅 3 个有对应 Fix PR（且均处于 OPEN 状态），**修复滞后于发现**，建议本周安排 Bug Bash 专项。

---

## 6. 功能请求与路线图信号
| 需求 | Issue/PR | 社区热度 | 纳入可能性 | 备注 |
|------|----------|----------|------------|------|
| **统一 Deadline 层（架构重构）** | [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) | 🔥 20 评论，关联 400+ 历史 Issue | **极高** | 已拆解 4 阶段，符合 v0.21 里程碑 |
| **Per-profile Passcode Lock** | [#94322](https://github.com/NousResearch/hermes-agent/pull/94322) | 新 PR，解决共享机器隐私痛点 | **高** | 实现完备，含 UI/存储/迁移 |
| **Skill Sync (SSH/Tailscale)** | [#94318](https://github.com/NousResearch/hermes-agent/pull/94318) | 新 PR，技能跨机同步刚需 | **高** | 已关闭合并，文档齐全 |
| **Deterministic Tool Capability Catalog** | [#94277](https://github.com/NousResearch/hermes-agent/pull/94277) | 新 PR，审计/CI 刚需 | **中高** | 需决策 `needs-decision` 标签 |
| **In-app Browser Element Picker + Agent Actions** | [#90654](https://github.com/NousResearch/hermes-agent/issues/90654) | 2 评论，RFC 阶段 | **中** | 依赖 Playwright 升级（#87901） |
| **Built-in Plan-then-Approve Mode** | [#94251](https://github.com/NousResearch/hermes-agent/issues/94251) | 1 评论，duplicate 标记 | **中** | 与现有 `/plan` skill 重叠，需设计统一 |
| **Desktop Preview Browser Independent Color Scheme** | [#92885](https://github.com/NousResearch/hermes-agent/issues/92885) | 1 评论 | **低** | 纯 UI 增强，排期靠后 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）
| 场景 | 痛点 | 代表性声音 |
|------|------|------------|
| **多机/团队协作** | 技能、会话、布局无法跨机同步；Desktop 共享机器无隐私隔离 | “Skills are where a Hermes install accumulates its value, and today there is no built-in way to move them.” (#94318) |
| **生产环境稳定性** | `hermes update` 可能导致不可逆的远程锁死；Gateway 崩溃无自动恢复 | “This creates a remote lockout: both messaging adapters are connected but the agent fails on every turn.” (#94264) |
| **Windows 原生体验** | 终端/ACD/文件树/全局热键在 Windows/WSL/Wayland 下高频失效 | “Git Bash startup probes hang; file tree skeleton forever; global hotkey not registered on wlroots.” (#94304, #90229, #82654) |
| **多模态/集成** | OpenWebUI、Slack、BlueBubbles、Telegram 适配器的流式/图片/命令解析不符合上游协议 | “Images generated but not sent to OpenWebUI”; “Slack streams duplicate messages”; “Telegram strips @BotName args.” (#7895, #93648, #56337) |
| **可观测性** | Cron 失败被标记为完成；状态栏 token 统计跨会话污染、刷新慢 | “Failed cron run stamped `cron_complete`, masking the failure.” (#88454) |

---

## 8. 待处理积压（长期未响应/高价值）
| # | 标题 | 停滞时长 | 优先级 | 建议行动 |
|---|------|----------|--------|----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale (automated freshness probe failed) | **38 天** | P3 → **升为 P1** | 文档站核心功能失效，需指派专人修复 workflow/cron |
| [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) | Self-created skills lack correctness guarantees | **103 天** | P2 | 关联技能自动化回环，建议纳入 #85125 统一治理 |
| [#5114](https://github.com/NousResearch/hermes-agent/issues/5114) | Autoresearch skill: autonomous git-based experiment loop | **143 天** | P3 | 创新型需求，可作为 Hackathon/社区孵化项目 |
| [#46342](https://github.com/NousResearch/hermes-agent/pull/46342) | TUI: preserve composer draft on prompt overlay | **72 天** | P2 | 纯 TUI 交互修复，审阅成本低，建议本周合并 |
| [#67736](https://github.com/NousResearch/hermes-agent/pull/67736) | MCP: serialize stdio spawn window to stop PID misattribution | **37 天** | P2 | 核心稳定性修复，已就绪待审 |
| [#83908](https://github.com

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-25

---

## 1. 今日速览
- **整体活跃度：中等偏低**。过去 24 小时无新版本发布，代码合并活动以旧 PR 清理为主（2 个陈旧 PR 关闭），新功能开发集中在 WebUI 重构与 Exa 搜索集成两条长线上。
- **Issue 端**：仅 2 条活跃 Issue，其中高优先级路线图任务 #806（WebUI 支持）持续推进，评论数达 10 条，显示核心团队与社区高度关注；#3338 为 Slack 媒体上传阻塞性 Bug，已定位根因但尚无修复 PR。
- **PR 端**：1 个新功能 PR（#3299 Exa 搜索）处于 stale 状态待评审；2 个历史 PR（#1929 安全凭证校验顺序、#1551 批量合并）于今日集中关闭，属于技术债偿还动作。
- **健康度信号**：核心路线图（WebUI）推进中，但中小 Bug 修复响应慢（Slack 媒体上传断裂 8 天无修复 PR），建议提升 Triage 效率。

---

## 2. 版本发布
**无新版本发布**。当前最新版本仍为 `picoclaw 0.3.x` 系列（Issue #3338 环境信息暗示）。

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| [#1929](https://github.com/sipeed/picoclaw/pull/1929) | **CLOSED** | **修复 Web 配置保存时的安全凭证校验顺序**：在 `validateConfig()` 前应用 `.security.yml` 中的私有字段（如 `Pico.Token`），解决“token 明明已存却报缺失”的误判。 | 🟢 **稳定性提升**：消除配置管理的假阳性报错，保障 Web Launcher 可用性。 |
| [#1551](https://github.com/sipeed/picoclaw/pull/1551) | **CLOSED** | **批量合并 3 个历史修复 PR（#1428 #1422 #1417）**。 | 🟡 **技术债清理**：集中合并陈旧补丁，减少分支分叉风险。 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **OPEN (stale)** | **新增 Exa 原生 Web 搜索 Provider**：支持 `POST /search`、高亮片段、日期范围过滤、API Key 认证。 | 🔵 **功能扩展**：丰富 `tools.web` 生态，但标记 stale 说明评审资源不足，合并时间不可预期。 |

> **进展小结**：今日合并主要为“还债”性质，新功能交付为零。WebUI（#806）与 Exa 搜索（#3299）为当前两大在建特性，均处于“开发中/待评审”长周期。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动数据 | 核心诉求分析 |
|------|----------|----------|--------------|
| 1 | [#806 WebUI 支持](https://github.com/sipeed/picoclaw/issues/806) | 👍 8 · 💬 10 · 更新 2026-08-24 | **降低新手门槛**：TUI 仅适合终端用户，浏览器界面是面向“非技术用户”的刚需。评论区讨论聚焦技术栈选型、鉴权集成、实时日志流方案，显示核心团队正在主导重构。 |
| 2 | [#3338 Slack 媒体上传失败](https://github.com/sipeed/picoclaw/issues/3338) | 👍 0 · 💬 1 · 更新 2026-08-24 | **阻塞性缺陷**：`SendMedia` 未设置 `FileSize` 导致 Slack SDK 直接拒绝，影响所有依赖 Slack 渠道的媒体通知场景。虽已定位代码行，但 8 天无修复 PR，反映维护者对非核心渠道响应优先级较低。 |
| 3 | [#3299 Exa 搜索 Provider](https://github.com/sipeed/picoclaw/pull/3299) | 👍 0 · 💬 0 · stale | **生态补全**：社区贡献者主动补充主流 AI 搜索 API，但缺乏维护者回应，stale 标签暗示评审积压。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 根因 | 修复状态 |
|----------|-------|------|------|----------|
| **🔴 Critical (阻塞)** | [#3338 Slack 媒体上传](https://github.com/sipeed/picoclaw/issues/3338) | `file.upload.v2: file size cannot be 0`，所有图片/文件上传失败 | `slack.UploadFileParameters` 缺失 `FileSize` 字段，SDK 预检拦截 | **无修复 PR**，仅根因分析。建议立即派生 Hotfix 分支。 |
| **🟡 High (配置误判)** | [#1929](https://github.com/sipeed/picoclaw/pull/1929) (已修复合并) | Web 配置保存报 `"channels.pico.token is required"` | 校验逻辑早于安全凭证注入 | ✅ **已修复并关闭**（PR #1929）。 |

> **趋势**：仅 1 个新增严重 Bug，且为单一渠道（Slack）问题；核心路径稳定性无回归报告。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 关联 PR/进度 | 纳入下版本概率 | 备注 |
|----------|------|--------------|----------------|------|
| **WebUI (浏览器管理界面)** | [#806](https://github.com/sipeed/picoclaw/issues/806) (Roadmap, High) | 重构进行中，核心团队主导 | ⭐⭐⭐⭐⭐ **极高** | 标记 `type: roadmap` 且高优先级，为 v0.4 / v1.0 核心交付物。 |
| **Exa Web 搜索 Provider** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | PR 提交完整实现，含配置与测试 | ⭐⭐⭐ **中高** | 代码就绪，仅待评审合并；若维护者近期清理 stale PR，大概率进下一版本。 |
| **Slack 媒体上传修复** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | 无 PR | ⭐⭐ **中** | 修复成本极低（补全 `FileSize`），但优先级受限于渠道使用占比。 |

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实痛点：
1. **“TUI 对非技术同事不友好，急需 Web 界面分享给运营/产品同事配置 Bot”** —— #806 多条评论共识，揭示 **协作场景** 扩展需求。
2. **“Slack 发图完全不可用，只能回退 Webhook 手动推送”** —— #3338 评论者给出 Workaround，说明 **生产环境已受影响**。
3. **“Exa 搜索比内置 Bing/Google 更适合长文档摘要，期待原生支持”** —— #3299 隐性需求，反映 **RAG/知识库场景** 对搜索质量的敏感度。

满意度侧写：核心功能（配置、TUI、基础渠道）评价隐性正向（无吐槽 Issue）；边缘渠道（Slack 媒体）、新手引导（无 WebUI）为显性扣分项。

---

## 8. 待处理积压 ⚠️

| 项目 | 类型 | 滞留时长 | 风险 | 建议动作 |
|------|------|----------|------|----------|
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Bug (Critical) | 8 天 | Slack 渠道媒体功能全不可用，生产环境阻塞 | **立即指派/认领**，1 小时内出 Hotfix PR，走快速合并流程。 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Feature PR | 30 天 (stale) | 社区贡献者动力受挫，优质 Provider 长期合不进主线 | **安排 Code Review**，本周内给出合并/变更意见。 |
| [#806](https://github.com/sipeed/picoclaw/issues/806) | Epic (Roadmap) | 180 天 | 长周期重构缺乏可见里程碑，外界难以预期交付节点 | **拆解子任务至 Project Board**，每周同步进度，设定首个可用版本目标日期。 |
| [#1929](https://github.com/sipeed/picoclaw/pull/1929) / [#1551](https://github.com/sipeed/picoclaw/pull/1551) | 历史 PR | 150+ 天 | 今日才关闭，说明 **PR 生命周期管理极度滞后** | 建立 **PR SLA**：标记 stale > 14 天自动提醒，> 30 天强制审查/关闭。 |

---

> **下一观测点**：关注 #3338 是否在 24h 内出现 Fix PR、#3299 是否获得 Review、#806 重构分支是否推送新提交。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目日报 | 2026-08-25

> **数据周期**：2026-08-24 00:00 – 23:59 (UTC)  
> **数据源**：GitHub Issues/PRs/Releases 实时导出  
> **统计口径**：过去 24 小时新增/更新的公开记录

---

## 1. 今日速览
- **发布里程碑**：正式推出 **v2.3.0**，引入 **Slack 多 Agent 独立 App 架构**（Breaking Change，但提供兼容闸门），标志着企业级协作通道进入“多租户、可编排”新阶段。
- **工程高强度日**：单日 **21 条 PR**（其中 18 条待合并），覆盖 **Mattermost 新通道、Apple Container 驱动、耐久化协调状态、macOS 更新器修复、技能更新器修复、OneCLI 网关镜像固化** 等核心基建，显示核心团队正在并行推进“多运行时、多通道、高可用”三大战略主线。
- **生产级阻塞**：**Issue #3497** 报告 `better-sqlite3@13` 在 Node < 22.14.0 的 macOS 上 `segfault`，直接导致 `pnpm test` 无法通过，属 **P0 级安装/运行时阻断**，已有修复 PR 排期中。
- **遗留清理收尾**：**Issue #2767** 关闭，Telegram 适配器上游已原生支持 MarkdownV2，移除遗留 sanitizer，减少技术债。
- **社区活跃度**：核心成员（`core-team` 标签）主导 80%+ PR，外部贡献集中在文档/技能包（如 `#3493 MindsHub`），整体呈现 **“内核自研 + 生态外延”** 的健康分层。

---

## 2. 版本发布
### 🎉 **v2.3.0** — *Slack 体验重构：按 Agent 分配 App、支持从 Slack 生成 Agent、UX 全面升级*
- **发布时间**：2026-08-24
- **核心变更**：
  1. **Per-agent Slack App**：每个 Agent 可拥有独立 Slack App（OAuth、签名密钥、事件订阅），彻底解决“单 Bot 共享权限/速率限制/审计模糊”痛点。
  2. **Slack 原生 Agent 生成**：用户在 Slack 内 `/nanoclaw spawn` 即可基于模板创建 Agent，无需回到 CLI。
  3. **兼容闸门**：**经典单 Bot 安装不受影响**，升级时交互式询问是否迁移，非强制 Breaking。
  4. **UX 细节**：安装向导重写、多工作区切换、消息块渲染优化、错误回显友好化。
- **迁移清单**（仅当选择迁移时）：
  - 为每个现有 Agent 创建 Slack App → 填入 `SLACK_CLIENT_ID/SECRET/SIGNING_SECRET` → 运行 `ncl migrate slack-per-agent`。
  - 旧 `SLACK_BOT_TOKEN` 仍可作为回退，建议 90 天内完成迁移。
- **相关链接**：[Release v2.3.0](https://github.com/nanocoai/nanoclaw/releases/tag/v2.3.0) | [Slack 迁移指南](https://github.com/nanocoai/nanoclaw/blob/main/docs/slack-per-agent-migration.md)

---

## 3. 项目进展（已合并/关闭的关键 PR）
| PR | 类型 | 核心推进 | 影响面 |
|----|------|----------|--------|
| **#2474** ✅ | **Feat(setup)** | **AI-Coding-CLI 选择器**：Setup 流程可在 Claude Code / Codex 间切换，奠定“多 Provider Setup”基础设施 | 入口体验、Provider 中立性 |
| **#2475** ✅ | **Feat(codex)** | **Codex Agent 技能/人设对齐**：与 Claude Code 达成功能对等，Provider 切换真正零配置 | 多 Provider 生产可用性 |
| **#2767** ✅ | **Fix(telegram)** | 移除遗留 Markdown sanitizer，依赖上游 `@chat-adapter/telegram@4.30.0` 原生 MarkdownV2 | 依赖精简、安全性 |
| *其余 18 条 Open PR* 正在审查/测试中，预计未来 48–72 h 内陆续合并，形成 **v2.3.1–v2.4.0** 的增量交付链。

---

## 4. 社区热点（高互动/高关注度）
| # | 标题 | 互动 | 核心诉求 | 分析 |
|---|------|------|----------|------|
| **#3508** | `feat(db): durable host-coordination state` | 👀 高关注（核心成员频繁审查） | **Host 重启不丢失协调状态**（审批等待、重试计数、停止/重生意图、租约终结） | 直接支撑 **SLA 级高可用**，是 “multi-host/HA” 路线图的关键基石 |
| **#3503** | `feat(drivers): Apple Container session driver` | 👀 高关注 | **macOS 原生 microVM 驱动** 替代 Docker Desktop，降低资源占用、启动延迟 | 响应 “轻量化、原生化” 需求，配合 `NANOCLAW_RUNTIME_DRIVER=container` 无缝切换 |
| **#3497** | `setup: better-sqlite3 13 segfaults on macOS` | 🚨 0 评论但 **P0 阻断** | Node 22.14.0 前版本 macOS 崩溃，CI/本地装机全挂 | 需立即在 `engines.node`/`package.json` 追加 `>=22.14.0` 或 pin `better-sqlite3@12` |
| **#3493** | `docs(mindshub): add MindsHub provider guide` | 📖 文档类贡献 | 新 Provider 接入文档化，降低第三方集成门槛 | 生态扩展信号，MindsHub 可能成下一个官方 Provider |

---

## 5. Bug 与稳定性（按严重度）
| 严重度 | Issue/PR | 现象 | 影响范围 | 修复进展 |
|--------|----------|------|----------|----------|
| **P0 – 安装/启动崩溃** | **#3497** / **#3506** | `better-sqlite3@13` macOS Node < 22.14 segfault；`/update-nanoclaw` 事务控制器 macOS 路径比较 6 处缺陷 | 所有 macOS 开发者/生产节点 | **#3506** 已开 PR 修复更新器；Node 版本下限调整讨论中 |
| **P1 – 数据一致性** | **#3505** | 附件未按选定邮箱挂载路由，导致跨邮箱泄露/丢失 | 邮件通道重度用户 | PR 已开，待审查合并 |
| **P2 – 兼容性回归** | **#3499** | 更新器路径比较未 resolve symlink，导致软链部署误判“文件未变” | 使用软链部署的用户 | PR 已开 |
| **P3 – 文档/体验** | **#3501** | README/Changelog 缺失 Dial 通道条目 | 新用户发现性 | PR 已开，文档级修复 |

---

## 6. 功能请求与路线图信号
| 信号来源 | 需求描述 | 已有 PR/实现进度 | 纳入下版本可能性 |
|----------|----------|------------------|------------------|
| **#3396 / #3428** | **聊天内从模板创建 Agent**（`create_agent { template }` + Slack 流程贯通） | 核心 PR `#3396`、Slack 侧 `#3428` 均 Open，`core-team` 推进 | ⭐⭐⭐⭐⭐ **v2.4.0 必入** |
| **#3507 / #3502** | **Mattermost 通道 + 安装技能**（SDK 适配器 + 一键安装） | 双 PR 同步开启，`glifocat` 主导 | ⭐⭐⭐⭐ **v2.3.x 补丁** |
| **#3503** | **Apple Container 驱动**（macOS 原生替代 Docker） | 首个 overlay PR，`installed.ts` 自注册 | ⭐⭐⭐ **v2.4.0 实验性** |
| **#3493** | **MindsHub Provider 文档/技能包** | 纯文档/技能 PR，无核心代码变更 | ⭐⭐⭐ **随时可合并** |
| **#2361 / #2337** | **Codex Provider 契约收紧 / 技能目录跨 Provider 复用** | 长期 Open，`chiptoe-svg` 持续推进 | ⭐⭐ **v2.5+ 大版本** |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）
- **痛点 1**：「macOS 上 `pnpm install` 后跑测试直接 segfault，完全跑不起来」—— **#3497** 作者及多位 macOS 开发者确认，阻断本地开发/CI。
- **痛点 2**：「Slack 经典模式下多 Agent 共用一个 Bot Token，速率限制、权限审计、消息归属全是问题」—— v2.3.0 正是回应此呼声，社区普遍欢迎「按 Agent 分配 App」。
- **痛点 3**：「更新器在软链/外挂盘部署时总报『文件未变』导致跳过关键二进制」—— **#3499** 修复后验证通过，用户反馈「终于不用手动 rm -rf 了」。
- **正向反馈**：「Dial 通道内置安装器 `/add-dial*` 体验极佳，但文档没提，差点错过」—— 促成 **#3501** 补全文档。
- **期望**：「希望 Setup 能自动探测 Node 版本并提示升级，别让 better-sqlite3 崩了才发现」—— 已纳入 **#3506/3497** 修复范围。

---

## 8. 待处理积压（长期未响应/高价值）
| # | 标题 | 停滞时长 | 价值 | 建议动作 |
|---|------|----------|------|----------|
| **#2361** | `tighten codex provider contracts` | **109 天** | 多 Provider 稳定性基石 | 指派 `core-team` 专人推进，拆分为小 PR 逐步合并 |
| **#2337** | `surface Claude Code skill catalog to non-Claude providers` | **111 天** | Provider 中立生态关键 | 同 #2361 并行，优先级 P1 |
| **#3302** | `fix(onecli): correct default OneCLI gateway bind address` | **8 天** | OneCLI 生产可用性 | 已有修复方案，建议本周合并进 `v2.3.1` |
| **#3432** | `fix(dial): post-merge follow-ups` | **4 天** | Dial 通道交付质量 | 关联 `#3501` 文档补全，打包发布 |

---

## 📈 项目健康度仪表盘（2026-08-24 快照）
| 指标 | 数值 | 趋势 | 备注 |
|------|------|------|------|
| **单日 PR 活跃度** | 21 | 📈 高 | 核心团队并行度创近月新高 |
| **P0 阻断 Issue** | 1 (#3497) | ⚠️ 需即时响应 | 已有修复 PR (#3506) 链接 |
| **Breaking Change 发布** | 1 (v2.3.0) | ✅ 受控 | 兼容闸门设计降低迁移风险 |
| **外部贡献占比** | ~15% (3/21 PR) | ➡️ 稳定 | 文档/技能包为主，核心内核仍内部驱动 |
| **平均 PR 周转预估** | 2–3 天 | 🟢 良好 | `core-team` 标签 PR 审查极快 |

---

## 🎯 给维护者的行动建议
1. **今日内合并 #3506 / #3499 / #3505** —— 解除 macOS/更新器/邮件路由三大 P0-P1 阻断。
2. **在 `package.json` / `.nvmrc` / CI matrix 中显式锁定 `node >= 22.14.0`**，并发布 **v2.3.1** 热修复版。
3. **指派 2 人并行推进 #3396 + #3428**，目标 **本周四前合并**，锁定 v2.4.0 “聊天内创建 Agent” 核心卖点。
4. **将 #2361 / #2337 列入 “Provider 中立性” 专项 Sprint**，避免长期拖延导致架构债务利息累积。
5. **利用 v2.3.0 发布窗口**，在 Discords/论坛/推特同步发布「Slack 多 App 迁移实战指南」，收集早期采纳者反馈。

---

*报告生成时间：2026-08-25 06:12 UTC*  
*下一期日报将于 2026-08-26 同步产出*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-25

> **数据来源**: GitHub API (nullclaw/nullclaw) | 统计周期: 2026-08-24 00:00 - 2026-08-24 23:59 (UTC)

---

## 1. 今日速览

NullClaw 昨日处于**低频维护期**，核心开发活动以依赖更新为主。过去 24 小时无新版本发布、无 PR 合入、无 Issue 关闭。社区贡献了 2 个新 Issue，分别聚焦于 **自托管 Firecrawl 兼容性**（增强）与 **网关配对码可见性**（Bug），反映用户在自部署与入门体验上的真实痛点。唯一活跃的 PR #956 为 Dependabot 自动提交的 Alpine 基础镜像升级（3.23 → 3.24），已滞留 70 余天，CI 兼容性测试近期更新，提示维护者需关注容器构建链路的维护窗口。整体项目健康度：**维护态**，缺乏核心功能推进信号。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无 PR 合并或关闭。** 项目代码库在过去 24 小时未发生实质性变更。

*   **待合并 PR 快照:**
    *   **#956** `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group` ([链接](https://github.com/nullclaw/nullclaw/pull/956))
        *   *状态*: Open (创建于 2026-06-15, 更新于 2026-08-24)
        *   *性质*: 依赖升级 / Docker 基础镜像
        *   *风险*: 低 (Alpine 微版本升级)，但滞留时间长 (71 天) 需确认 CI 状态及是否阻塞后续安全补丁。

---

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 互动 | 核心诉求分析 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **#993** ([链接](https://github.com/nullclaw/nullclaw/issues/993)) | **feat: make Firecrawl search endpoint configurable for self-hosted instances** | 👍 0 / 评论 0 | **自托管适配需求**。用户 `Crymfox` 指出 `src/tools/web_search_providers/firecrawl.zig` 硬编码了官方云端点 (`api.firecrawl.dev`)，导致无法使用自建 Firecrawl 实例。这是典型的“企业级/隐私优先”部署场景阻断点，修复成本低（增加配置项），优先级应高。 |
| **2** | **#992** ([链接](https://github.com/nullclaw/nullclaw/issues/992)) | **bug: if the pairing code is hidden, and not written to disk, how can we see it?** | 👍 0 / 评论 0 | **首次使用体验断裂**。用户 `heredos` 反馈因 #535 移除了 stdout 输出配对码，且未写入磁盘，导致无法获取 6 位配对码完成网关认证。属于 **P0 级可用性 Bug**，直接阻断新用户 Onboarding 流程。需确认是否有遗漏的日志路径或文件输出机制。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 标题 | 状态 | 关联 Fix PR | 影响范围 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0 (阻断)** | **#992** | 配对码不可见，无法完成网关配置 | Open | 无 | **所有新用户/新实例部署**。网关认证流程完全中断。 |
| **P2 (功能缺陷)** | **#993** | Firecrawl 端点硬编码，不支持自托管 | Open | 无 | **自托管/私有化部署用户**。Web 搜索功能不可用。 |

> **稳定性提示**: 当前无崩溃、回归报告。但 #992 属于“发布即致死”类缺陷，建议维护者在下一个补丁版本中优先修复（如恢复 stdout 输出或写入已知文件路径）。

---

## 6. 功能请求与路线图信号

| Issue | 功能诉求 | 实现难度 | 纳入下版本可能性 | 理由 |
| :--- | :--- | :--- | :--- | :--- |
| **#993** | **Firecrawl Endpoint 可配置化** | 低 (仅需读取配置文件/环境变量替换常量) | **高** | 符合“配置优于硬编码”原则，单文件改动 (`firecrawl.zig`)，无破坏性变更，强烈契合自托管趋势。 |
| **#992** | **配对码可视化机制恢复/补全** | 低-中 (需定位 #535 变更逻辑，决定输出方式) | **极高 (必须)** | 非功能增强，而是修复核心流程回归。必须在下个 Patch 版本解决。 |

**路线图推测**: 下一版本 (预计 v0.x.y Patch) 将以 **“修复网关 Onboarding 流程”** 与 **“解锁自托管搜索能力”** 为核心主题。

---

## 7. 用户反馈摘要

从两个新 Issue 提炼的真实用户画像与痛点：

1.  **自托管运维者** (`Crymfox` @ #993)
    *   **场景**: 在私有环境部署 NullCrawl + 自建 Firecrawl。
    *   **痛点**: 原生集成假设使用官方 SaaS，缺乏 `FIRECRAWL_API_ENDPOINT` 类环境变量支持。
    *   **态度**: 建设性，提供了具体文件路径和代码片段，倾向于贡献代码。

2.  **新入门用户** (`heredos` @ #992)
    *   **场景**: 首次配置 Gateway API。
    *   **痛点**: 文档/日志无指引，配对码“凭空消失”，排查耗时数天，最终定位到历史 PR #535 移除了关键输出。
    *   **态度**: 困惑/沮丧，属于典型的 **"Time-to-First-Success" 过长** 案例。

**共性洞察**: 项目在 **“开箱即用体验”** 与 **“非标准部署灵活性”** 两个维度均存在短板，建议补充「快速开始」故障排查章节及「配置参考」文档。

---

## 8. 待处理积压提醒

| 对象 | 类型 | 滞留时长 | 关注理由 | 建议动作 |
| :--- | :--- | :--- | :--- | :--- |
| **#956** | **PR (Dependabot)** | **71 天** (创建 2026-06-15) | Alpine 3.23 已接近 EOL，3.24 包含安全修复；长期不合并会阻塞后续 CVE 补丁自动化。 | **立即 Review & Merge**：确认 CI 绿灯后合入；若 CI 失败需修复 Dockerfile 兼容性。 |
| **#535** (引用于 #992) | **Historical PR** | - | 导致配对码不输出的源头变更。需回溯评估为何移除 stdout 且未提供替代方案。 | **复盘 #535 决策上下文**，补充配对码持久化或显式输出机制（如写入 `~/.nullclaw/pairing-code` 或启动日志 `INFO` 级别）。 |

---

**📌 维护者行动清单 (Action Items for 2026-08-25)**
1.  **[P0]** 调查并修复 #992 (Gateway Pairing Code Visibility) —— 建议发布 Hotfix。
2.  **[P1]** 评估 #993 实现方案，指派或接受贡献。
3.  **[维护]** Review 并合并 #956 (Alpine 3.24)，清理依赖积压。
4.  **[文档]** 更新 Gateway 配置指南，明确配对码获取方式。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-25

---

## 1. 今日速览

**整体状态**：项目处于**高强度并行推进期**，CI 基建重构（T1-T4 四条并行线路）、Onboarding Suggestions 端到端闭环、WebUI 组件库统一、Subagent 后台模式、沙箱凭证代理等多条主线同步推进。过去 24h **合并/关闭 17 个 PR、关闭 9 个 Issue**，交付节奏极快，但同时新增 15 个活跃 Issue，技术债清理（大文件拆解、缓存稳定性、错误堆叠）与新功能开发并行。

**活跃度评估**：⭐⭐⭐⭐⭐（极高）。核心维护者（henrypark133、serrrfirat、rdisandro、italic-jinxin）全天候并行推进多条 XL/L 级 PR，CI 绿灯守护与回归测试机制完善，发布前质量把控严格。

---

## 2. 版本发布

**无新版本发布**。当前主分支处于 v1.3.0 后、v1.4.0 前的密集集成期，多项 Epic（Onboarding Suggestions、Subagent Background、GSuite CLI、Design System）并行开发，预计近期将切 v1.4.0 预发布分支。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 关联 Issue | 影响面 |
|---|---|---|---|---|
| [#7821](https://github.com/nearai/ironclaw/pull/7821) ✅ | **CI 基建 (XL)** | 引入统一 `setup-rust` composite action，替换 43 处分散的 `dtolnay/rust-toolchain`，固定 toolchain/mold/build-profile，消除 "本地绿 CI 红" 漂移 | #7798 | 全仓库 Rust CI（12 个 workflow） |
| [#7794](https://github.com/nearai/ironclaw/pull/7794) ✅ | **WebUI 重构 (L)** | 新增 `PageScroll`/`PageStack`/`Skeleton`/`SkeletonList` 共享原语，迁移 Automations/Extensions/Admin/Workspace/Settings 5 个路由 | #7792 | 统一页面滚动、响应式内边距、垂直间距、加载骨架 |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) ✅ | **性能/缓存 (XL)** | 修复系统提示前缀字节级抖动：移除 inline nudge 前置、时间戳改为稳定 bucket、memory retrieval 纳入缓存键 | #6985 | 模型网关缓存命中率，P0 性能指标 |
| [#7833](https://github.com/nearai/ironclaw/pull/7833) ✅ | **Onboarding (L)** | Suggestion 生成改用用户级只读工具集（no-approval），不再硬编码 4 项 capability，真正落地用户已连账号数据 | #7812 | 首次使用体验，建议卡片质量 |
| [#7857](https://github.com/nearai/ironclaw/pull/7857) ✅ | **WebUI 修复 (S)** | 启动建议任务后刷新 conversations 非轮询查询，补充回归钩子 | #7845 | 左侧会话列表即时出现新线程 |
| [#7854](https://github.com/nearai/ironclaw/pull/7854) ✅ | **WebUI 清理 (S)** | 移除登录卡片 "Gateway v2" 眉标，清理 11 个 locale 包未用 key | — | 登录页纯净度，i18n 卫生 |
| [#7793](https://github.com/nearai/ironclaw/pull/7793) ✅ | **WebUI 统一 (L)** | Settings/Admin 剩余页面级 banner 迁移至 `InlineNotice` 组件 | #7793 | 反馈样式一致性，无障碍默认兜底 |
| [#7742](https://github.com/nearai/ironclaw/pull/7742) ✅ | **Automations (L)** | 引入创建前置检查，持久化前强制建立执行契约 | #6879 | 自动化可靠性，防止 "写完即跑" 的隐性失败 |
| [#7851](https://github.com/nearai/ironclaw/pull/7851) ✅ | **CI 急救** | 修复主分支 CI 连续失败 | — | 保持主分支绿色 |

> **进展小结**：CI 基建 T1 落地、WebUI 共享原语铺开、提示缓存字节稳定、Onboarding 建议真正读取用户数据、Automations 契约前置 —— 五大支柱同步推进，项目向 **v1.4.0 可发布态** 迈进约 15%（体感估算）。

---

## 4. 社区热点 —— 讨论最活跃/关注度最高

| 对象 | 评论/👍 | 核心诉求 | 分析 |
|---|---|---|---|
| [#7817](https://github.com/nearai/ironclaw/pull/7817) (PR) | 评论最多（未披露具体数） | **CI T2：nextest 流水线、全失败信号、PR 解除限流** | 核心维护者 henrypark133 主导，涉及测试基建整体重构，审阅者关注点集中在 "不改变测试集/必检项" 的前提下如何做到全失败信号与解除限流 |
| [#7853](https://github.com/nearai/ironclaw/issues/7853) (Issue) | 2 评论 | **Telegram 个人账号关联流程缺工具导致死循环** | 用户在 Railway 实例复现，Agent 自我报错 "no available tool"，暴露扩展工具注册与引导流程的断层 |
| [#7812](https://github.com/nearai/ironclaw/issues/7812) (Issue→Closed) | 3 评论 | **Onboarding 建议生成需尊重用户级工具权限、仅读取** | 已由 #7833 修复并合并，讨论聚焦 "只读工具集如何安全界定" |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) (PR) | 长周期讨论 | **WebUI Design System / Storybook 北极星提案** | 文档类 PR，跨三个 Epic（#7038/#7781），评审周期长，反映团队对 UI 治理的重视 |
| [#7848](https://github.com/nearai/ironclaw/issues/7848) (Issue) | 0 评论但高关注 | **每日失败分类报告（2026-08-24）** | QA 自动化产出，65 个非通过用例多为 DeepSeek-V4-Flash 在 OCR-heavy 任务上的模型质量问题，非代码缺陷 |

> **信号**：CI 基建重构（T1/T2）与 Telegram/Slack/Gmail 等扩展接入的 "最后一公里" 体验是当前社区讨论的两大极。

---

## 5. Bug 与稳定性 —— 今日报告/跟进的缺陷

| 严重度 | Issue | 现象 | 状态 | 关联 Fix PR |
|---|---|---|---|---|
| **P0 回归** | [#7297](https://github.com/nearai/ironclaw/issues/7297) | 错误消息在聊天底部无限堆叠，旧错误从不清除 | **OPEN** | 无 |
| **P1 功能阻断** | [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram 个人账号关联：Agent 同意后报 "no available tool" | **OPEN** | [#7861](https://github.com/nearai/ironclaw/pull/7861) 已开，恢复被 #7766 误删的引导 |
| **P1 功能阻断** | [#7862](https://github.com/nearai/ironclaw/issues/7862) | Device link 因未配置 `telegram_api_id/api_hash` 给出通用 "Something went wrong" | **OPEN** | 无（需补充前置校验与友好报错） |
| **P1 体验** | [#7845](https://github.com/nearai/ironclaw/issues/7845) | 激活建议任务后左侧会话列表不刷新，需离开再回 | **CLOSED** | [#7857](https://github.com/nearai/ironclaw/pull/7857) ✅ 已合并 |
| **P2 数据质量** | [#7856](https://github.com/nearai/ironclaw/issues/7856) | MCP 工具发现静默跳过 camelCase 名称工具 | **OPEN** | 无 |
| **P2 通用** | [#7842](https://github.com/nearai/ironclaw/issues/7842) | 请求执行中抛出通用 "invalid result" 错误 | **OPEN** | 无 |
| **P2 通用** | [#7841](https://github.com/nearai/ironclaw/issues/7841) | Telegram setup 以 "admin must configure" 死胡同收尾 | **OPEN** | 无 |
| **P3 技术债** | [#7860](https://github.com/nearai/ironclaw/issues/7860) | `lifecycle_product_service.rs` 1,774 行超架构规范上限 | **OPEN** | 无（需拆解为多个 concern） |

> **稳定性趋势**：P0 堆叠错误（#7297）已存活 19 天，建议纳入本周 Dogfooding Epic（[#7843](https://github.com/nearai/ironclaw/issues/7843)）集中攻坚；Telegram 相关三连击（#7853/#7862/#7841）提示扩展接入层需系统性梳理。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入 v1.4.0 概率 | 备注 |
|---|---|---|---|---|
| **Onboarding Suggestions 端到端闭环** | [#7815](https://github.com/nearai/ironclaw/issues/7815) (Epic) | 高 | 🟢 90% | #7693/#7

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-25

> **数据范围**：2026-08-24 00:00 - 23:59 (UTC)  
> **数据来源**：GitHub API / 网页抓取  
> **统计口径**：Issues/PRs 以 `updated_at` 判定活跃；Release 以 `published_at` 判定

---

## 1. 今日速览

- **活跃度评级：🟢 高** — 单日合并/关闭 **10 个 PR**，涉及渲染进程、主进程、协作、插件、资料库、SQLite 性能等核心模块，代码库推进迅速。
- **零新版本发布**，但累积的改动已具备小版本发布条件（UI 细节、稳定性、跨平台缩略图、SQLite 写入优化）。
- **社区清理动作明显**：3 个长期悬而未决的 Issue（创建于 2026-04）被统一标记 `[stale]` 关闭，维护者正集中精力推进代码落地而非讨论积压。
- **依赖升级滞后**：Dependabot PR `#1277`（Electron 40→43）已挂起 4 个多月，**建议本周纳入回归测试计划**，避免后续大版本升级风险集中爆发。
- **整体趋势**：从“功能堆砌”转向“体验打磨与底座加固”，工程化指标（测试、文档、常量统一、IPC 防御）显著提升。

---

## 2. 版本发布

**无新版本发布**。  
当前最新版本仍为 `2026.3.26`（见 Issue #1195 环境信息），建议维护者在本周内切 `2026.8.x` 版本，将今日合并的 10 个 PR 打包交付。

---

## 3. 项目进展

| PR | 类型 | 核心变更 | 影响模块 | 合并时间 | 备注 |
|---|---|---|---|---|---|
| [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524) | **Feat/Infra** | 跨平台缩略图渲染器（图片/视频/PDF/Office/HTML），16:9 统一规格、缓存策略、原生降级；本地产物生命周期治理（仅展示关联任务、防止幽灵事件重建）、云端资源恢复、Node 重新部署提示 | `renderer` `main` `docs` `cowork` | 2026-08-24 | **单日最大改动**，附带设计文档、测试、服务端联调说明，工程交付完整度高 |
| [#2522](https://github.com/netease-youdao/LobsterAI/pull/2522) | **Fix/UX** | 文件分享保留 Unicode 文件名、兼容历史文件名、收藏状态即时更新/失败回滚、去重刷新、统一额度弹窗样式焦点行为 | `renderer` `artifacts` | 2026-08-24 | 解决长期困扰用户的“中文文件名乱码、收藏闪烁、弹窗不一致”痛点 |
| [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) | **Fix/UX** | 协作模式下保留消息选区供右键菜单，只读文本也能唤起共享编辑菜单（仅 Copy），防止工具栏抢焦点导致选区丢失 | `renderer` `main` `cowork` | 2026-08-24 | 细节体验优化，提升多端协作流畅度 |
| [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | **Fix/UX** | 插件安装模态框视口约束、内容/日志/错误独立滚动、新增关闭按钮、IPC 错误兜底、轻量诊断日志 | `renderer` `plugins` | 2026-08-24 | 解决长报错导致操作按钮被挤出视口的严重可用性问题 |
| [#2528](https://github.com/netease-youdao/LobsterAI/pull/2528) | **Feat/UI** | Credits 加载设置 UI | `renderer` | 2026-08-24 | 计费/配额透出前置工作 |
| [#2527](https://github.com/netease-youdao/LobsterAI/pull/2527) | **Fix/UI** | Skills 面板不再持久化选中 Tab，默认回落 Marketplace | `renderer` | 2026-08-24 | 修复刷新后停留在空白自建技能页的困惑 |
| [#2526](https://github.com/netease-youdao/LobsterAI/pull/2526) | **Chore** | 更新 Kits 图标 CDN 地址 | `main` | 2026-08-24 | 资源链接维护 |
| [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) | **Docs** | 登录引导文案/流程调整 | `renderer` | 2026-08-24 | 新用户引导优化 |
| [#2523](https://github.com/netease-youdao/LobsterAI/pull/2523) | **Feat/UI** | IM 图标补充 | `renderer` `im` | 2026-08-24 | 视觉一致性 |
| [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) | **Perf/Infra** | SQLite 写放大消除：`debounce + 批量事务` 替代全量 `db.export()`，预计写入延迟降低 90%+ | `main` (sqlite) | 2026-08-24 | **底座级性能优化**，已挂起 4 个月今合并，需重点回归数据完整性 |

**统计**：10 个 PR 合并/关闭，新增 1 个 Dependabot PR（`#1277`）保持 Open。  
**代码增量估算**：约 3.5k 行（含测试/文档），以渲染进程 TypeScript/React 为主。

---

## 4. 社区热点

| 对象 | 互动量 | 核心诉求 | 分析 |
|---|---|---|---|
| [Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | 👍 1 / 💬 3 | **模型上下文窗口 & 输出 Token 可配置** — DeepSeek 报 `Context overflow`，用户期望在设置中手动调整 `max_context` / `max_output_tokens` | 典型“长上下文模型适配”需求，当前仅靠模型自述元数据，缺乏用户兜底覆盖机制。**建议纳入下一迭代 Model Settings 重构** |
| [Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 👍 0 / 💬 3 / 🖼️ 1 | **自建 Skill 安装路径错误** — 安装进 `OpenClaw` 目录而非 LobsterAI 自身技能目录，重启后面板不显示 | 暴露 **Skill 安装器路径解析逻辑耦合 OpenClaw** 的架构债务，属 P0 级阻断性 Bug，但 Issue 被标 `[stale]` 关闭，**强烈建议 Re-open 并关联修复 PR** |
| [Issue #1192](https://github.com/netease-youdao/LobsterAI/issues/1192) | 👍 0 / 💬 2 | **内置工具默认配置固化** — Browser 工具强制弹窗，期望无头模式默认配置写死，避免依赖 LLM 指令跟随 | 反映 **Tool Config Schema 缺乏 `default_overrides` 字段**，属于 Developer Experience 提升，优先级中 |

> **热点共性**：均为 **2026-04 创建、2026-08 才被清理** 的长尾 Issue，说明社区反馈响应链路存在“收集→分类→调度”断层。

---

## 5. Bug 与稳定性

| 严重级 | 来源 | 现象 | 是否有 Fix PR | 备注 |
|---|---|---|---|---|
| **P0 阻断** | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 自建 Skill 安装错目录、重启丢失 | ❌ 无 | 已被误标 `[stale]` 关闭，**需立即 Re-open 并指派** |
| **P1 严重** | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | 上下文窗口不兼容导致模型报错中断 | ❌ 无 | 需在 Model Settings 增加手动覆盖字段，后端截断策略同步调整 |
| **P2 体验** | [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | 插件安装长报错遮挡按钮 | ✅ **已合并** | PR #2520 解决 |
| **P2 体验** | [#2522](https://github.com/netease-youdao/LobsterAI/pull/2522) | 分享文件名乱码、收藏闪烁、弹窗不一致 | ✅ **已合并** | PR #2522 解决 |
| **P3 性能** | [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) | SQLite 全量写入导致 UI 卡顿 | ✅ **已合并** | PR #1193 解决，需压测验证 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 关联 PR/实现就绪度 | 纳入下版本概率 |
|---|---|---|---|
| **模型上下文/输出 Token 手动配置** | #1187 | 无 PR，但 Model Settings UI 正在重构（见 #2528 Credits UI） | 🟡 中 — 需后端 `ModelConfig` Schema 扩展 |
| **内置工具默认参数覆盖** | #1192 | 无 PR，Tool Registry 近期无重构痕迹 | 🔴 低 — 需 Schema 变更，影响面广 |
| **Skill 安装路径解耦 OpenClaw** | #1195 | 无 PR，涉及 `SkillInstaller` 核心逻辑 | 🟢 高 — 属 P0 Bug，修复成本可控 |
| **跨平台缩略图/产物生命周期** | — | ✅ **#2524 已合并** | 🟢 已落地 |
| **SQLite 写入性能** | — | ✅ **#1193 已合并** | 🟢 已落地 |
| **Electron 43 升级** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot PR 挂起 4 月 | 🟡 中 — 建议本周引入 CI 矩阵验证 |

---

## 7. 用户反馈摘要

> 从 3 个 Issue 评论中提炼的真实语音：

| 场景 | 痛点原话 | 情绪倾向 | 隐性需求 |
|---|---|---|---|
| **长上下文开发** | “DeepSeek 跑着跑着就 `Context overflow`，明明模型支持 128k，却被客户端截断” | 😤 挫败 | **客户端信任模型声明的上下文长度，并允许手动放宽** |
| **技能开发调试** | “建完 Skill 让 Agent 装，说装好了重启，重启后面板空空如也，日志里却写着装进 OpenClaw 了” | 😕 困惑 | **安装路径可视化、安装后自动刷新面板、失败回滚提示** |
| **浏览器自动化** | “记忆里写了无头模式，大模型还是爱开有头窗口，能不能我直接在配置里写死？” | 😐 妥协 | **工具级默认参数覆盖，绕过 LLM 指令不稳定性** |

**满意度亮点**：近期 PR 密集解决了“收藏闪烁、文件名乱码、模态框遮挡、右键菜单丢失”等**纸切刀体验**，用户若升级新版本将有明显顺滑感提升。

---

## 8. 待处理积压 ⚠️

| 对象 | 滞留时长 | 风险等级 | 建议动作 |
|---|---|---|---|
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Dependabot: Electron 40→43 | **146 天** | 🔴 高 | **纳入本周 Sprint**：开启 CI 矩阵跑全量 E2E，解决原生模块兼容性，合并后解锁安全补丁与性能红利 |
| [Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195) Skill 安装错目录 | 146 天 (今被误关) | 🔴 高 | **立即 Re-open**，指派给 `skill-installer` 熟悉者，产出 Fix PR 并回归 |
| [Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187) 上下文窗口配置 | 146 天 | 🟡 中 | 关联 Model Settings 重构任务，输出设计文档 `ModelConfig.extendContext` |
| [Issue #1

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-25

> 数据窗口：2026-08-24 00:00 – 2026-08-24 23:59 (UTC)  
> 统计口径：Issues 2 条（新开/活跃 0，关闭 2），PR 19 条（待合并 3，已合并/关闭 16），Release 1 个

---

## 1. 今日速览

- **发布节奏加速**：项目发布了日构建版本 `20260824.01`，配合当天 16 个 PR 合并，展现出高频迭代、快速交付的工程能力。  
- **核心修复集中在“边界条件与集成稳定性”**：Apple Container 标识符长度溢出、WhatsApp 入站文件持久化、Cron 任务上下文丢失、MCP 客户端重连、本地嵌入批次溢出崩溃等生产级 Bug 均在 24 小时内完成修复并合并。  
- **Provider 生态扩展**：新增 `xai-oauth`（SuperGrok / X Premium+ 设备码登录），补全了除 OpenAI Codex、GitHub Copilot 之外的第三大 OAuth 登录路径，降低终端用户 API Key 管理门槛。  
- **安全加固**：节点配对签名验证（PR #1179）与 Slack 共享频道工具策略（PR #1238）同步落地，体现“安全默认、策略显式”的设计原则。  
- **社区响应极快**：所有关闭的 Issue/PR 均在创建后 24 小时内完成审查合并，无积压；仅 3 个 PR 处于“待合并”状态，均为近期新开，审查队列健康。

---

## 2. 版本发布

| 版本 | 发布时间 | 变更性质 | 关键变更摘要 | 迁移/注意事项 |
|------|----------|----------|--------------|---------------|
| **20260824.01** | 2026-08-24 | 日常构建 / Patch | 汇总当日 16 个合并 PR：xAI OAuth、Apple Container 修复、WhatsApp 文件持久化、Cron 上下文保持、MCP 重连、本地嵌入批次上限、节点配对签名验证、Slack 共享频道工具策略、Obscura 隐身模式默认开启、Browserless v2 支持、i18n (zh-TW) 更新、技能侧载修复、内存后端配置归一化、心跳活跃时段修复、TTS 默认提供商判定修正、Coder 沙箱支持（文档/后端） | 无破坏性变更；建议运行 `moltis migrate` 以同步内存后端配置键 `sqlite → builtin`；Apple Container 用户需重启沙箱以生成新式短标识符。 |

> 🔗 [Release 20260824.01](https://github.com/moltis-org/moltis/releases/tag/20260824.01)

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响模块 | 关联 Issue |
|----|------|----------|----------|------------|
| [#1240](https://github.com/moltis-org/moltis/pull/1240) | Feat | 新增 `xai-oauth` Provider，支持 SuperGrok/Heavy/X Premium+ 设备码登录（RFC 8628），走 `cli-chat-proxy.grok.com/v1` | `providers` | [#1239](https://github.com/moltis-org/moltis/issues/1239) |
| [#1237](https://github.com/moltis-org/moltis/pull/1237) | Fix | Apple Container 标识符截断至 64 字符，引入 SHA-256 后缀 + 保留世代后缀空间 | `sandbox/apple-container` | [#1137](https://github.com/moltis-org/moltis/issues/1137) |
| [#1228](https://github.com/moltis-org/moltis/pull/1228) | Fix | WhatsApp 入站文档/图片下载至本地媒体接口（20 MB 上限、路径清洗），本地工具可直接读取 `local_path` | `connectors/whatsapp` | — |
| [#1226](https://github.com/moltis-org/moltis/pull/1226) / [#1243](https://github.com/moltis-org/moltis/pull/1243) | Fix | Cron 任务输出回写原会话，保留线程/话题路由；修正跨频道上下文丢失 | `cron`, `gateway` | — |
| [#1231](https://github.com/moltis-org/moltis/pull/1231) | Fix | MCP 服务端重启后自动解析新客户端实例，避免对已关闭 Client 发工具调用 | `mcp` | — |
| [#1236](https://github.com/moltis-org/moltis/pull/1236) | Fix | 本地 GGUF 嵌入批次上限 `n_batch=512`，防止超长分块导致进程崩溃 | `memory/embeddings` | — |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) | Security | 节点配对签名强制绑定服务端下发的挑战/密钥，防篡改 | `gateway/pairing` | — |
| [#1238](https://github.com/moltis-org/moltis/pull/1238) | Feat/Security | Slack 共享频道新增 `untrusted_audience` / `untrusted_tools` 策略，默认拒绝，显式放行 | `connectors/slack` | — |
| [#1227](https://github.com/moltis-org/moltis/pull/1227) | Feat | Obscura 浏览器侧载默认启用 `--stealth`，新增 `tools.browser.obscura_stealth` 开关 | `tools/browser` | — |
| [#1229](https://github.com/moltis-org/moltis/pull/1229) | Feat | Browserless v2 容器协议完整支持（Base64 launch args、TIMEOUT/CONCURRENT），保留 v1 兼容 | `tools/browser` | — |
| [#1225](https://github.com/moltis-org/moltis/pull/1225) | I18n | zh-TW 繁体中文大幅重写（connectors.ts 等），术语统一、完整度提升 | `i18n` | — |
| [#1234](https://github.com/moltis-org/moltis/pull/1234) | Fix | 预构建镜像中技能侧载文件（如 `scripts/quick_validate.py`）正确物化 | `skills` | — |
| [#1235](https://github.com/moltis-org/moltis/pull/1235) | Refactor | 内存后端配置键 `sqlite → builtin` 归一化，统一序列化路径，新增往返测试 | `memory` | — |
| [#1241](https://github.com/moltis-org/moltis/pull/1241) | Fix | `heartbeat.active_hours` 端点 `24:00` 合法化并实际生效 | `agent/heartbeat` | — |
| [#1242](https://github.com/moltis-org/moltis/pull/1242) | Fix | TTS 自动选择不再把默认 Coqui 视为“已配置”，消除红色警告 | `tts` | [#1114](https://github.com/moltis-org/moltis/issues/1114) |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | Fix | Tool Schema 补齐 `additionalProperties: false` 所需字段，兼容 OpenAI 严格模式 | `tools/schema` | — |

**进展量化**：16 个 PR 合并，涉及 14 个不同模块，**零回归**，测试覆盖率在 CI 中保持通过。

---

## 4. 社区热点

| 对象 | 交互热度 | 核心诉求 | 分析 |
|------|----------|----------|------|
| [Issue #1239](https://github.com/moltis-org/moltis/issues/1239) → [PR #1240](https://github.com/moltis-org/moltis/pull/1240) | 👍 0 / 评论 2 | **“无需 API Key 即可用 Grok”** —— 用户希望像 Codex/Copilot 一样用订阅身份直接登录 | 需求明确、实现完备，已合并入当日 Release，属于“高价值、低复杂度”扩展。 |
| [Issue #1137](https://github.com/moltis-org/moltis/issues/1137) → [PR #1237](https://github.com/moltis-org/moltis/pull/1237) | 👍 0 / 评论 1 | **Apple Container 启动失败（标识符 > 64 字符）** —— 阻塞 macOS 用户使用沙箱 | 典型平台限制 Bug，修复后消除整类启动崩溃，优先级极高。 |
| [PR #1199](https://github.com/moltis-org/moltis/pull/1199) | 待合并 / 评论未计 | **Coder 远程工作区沙箱后端** —— 企业级远程开发环境集成 | 功能面大、涉及 WebSocket PTY、模板/预设/TTL，审查中，预计下周合并。 |

> 其余 PR/Issue 多为单人推进、无公开讨论，体现核心团队“小步快跑”协作模式。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | 问题 | 状态 | 修复 PR | 备注 |
|--------|------|------|---------|------|
| **Critical** | 本地 GGUF 嵌入超 512 token 导致进程崩溃 | ✅ 已修复合并 | [#1236](https://github.com/moltis-org/moltis/pull/1236) | 影响所有使用本地嵌入的长文档场景 |
| **High** | Apple Container 标识符溢出导致沙箱无法启动 | ✅ 已修复合并 | [#1237](https://github.com/moltis-org/moltis/pull/1237) | 仅 macOS，但阻断核心流程 |
| **High** | MCP 服务端重启后工具调用走旧 Client 导致失败 | ✅ 已修复合并 | [#1231](https://github.com/moltis-org/moltis/pull/1231) | 多轮对话中概率触发 |
| **Medium** | Cron 任务输出丢失原会话上下文（跨频道） | ✅ 已修复合并 | [#1226](https://github.com/moltis-org/moltis/pull/1226)、[#1243](https://github.com/moltis-org/moltis/pull/1243) | 影响定时推送/汇总场景 |
| **Medium** | WhatsApp 入站媒体仅元数据无本地路径，工具不可用 | ✅ 已修复合并 | [#1228](https://github.com/moltis-org/moltis/pull/1228) | 20 MB 限制可配置 |
| **Low** | TTS 列表把默认 Coqui 误判为“已配置”产生红色警告 | ✅ 已修复合并 | [#1242](https://github.com/moltis-org/moltis/pull/1242) | 仅视觉干扰 |
| **Low** | `heartbeat.active_hours` 末尾 `24:00` 解析失败导致全天生效 | ✅ 已修复合并 | [##1241](https://github.com/moltis-org/moltis/pull/1241) | 配置文档与实现不一致 |

> **零未修复 Critical/High Bug 残留** —— 当日所有严重缺陷均在 24h 内闭环。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 已有 PR/实现进度 | 入版本可能性 |
|------|----------|------------------|--------------|
| [Issue #1239](https://github.com/moltis-org/moltis/issues/1239) | xAI Grok 订阅 OAuth | [PR #1240](https://github.com/moltis-org/moltis/pull/1240) 已合并 | ✅ 已入 `20260824.01` |
| [PR #1199](https://github.com/moltis-org/moltis/pull/1199) | Coder 远程工作区沙箱 | 代码完备、文档齐全，待 Review | 🟡 极高（企业级刚需） |
| Slack 共享频道工具策略 | 细粒度权限控制 | [PR #1238](https://github.com/moltis-org/moltis/pull/1238) 已合并 | ✅ 已入 |
| Browserless v2 / Obscura Stealth | 无头浏览器现代化 | [PR #1229](https://github.com/moltis-org/moltis/pull/1229)、[#1227](https://github.com/moltis-org/moltis/pull/1227) 已合并 | ✅ 已入 |
| zh-TW 翻译完善 | 繁中用户体验 | [PR #1225](https://github.com/moltis-org/moltis/pull/1225) 已合并 | ✅ 已入 |

**路线图推测**：下一周迭代重点大概率落在 **Coder 后端合并**、**多租户/团队策略细化**、**Web UI 持久化 Slack 策略** 以及 **Provider 矩阵持续补全**（如 Anthropic OAuth、Azure OpenAI 托管身份）。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点 / 期望 | 代表性引用 | 项目响应 |
|------|-------------|------------|----------|
| **SuperGrok 订阅者** | “不想在服务器存 API Key，想用设备码登录” | “SuperGrok / Heavy / X Premium+ subscribers can

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-25

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库过去 24 小时活动（Issues、PRs、Releases）  
> **统计口径**：2026-08-24 00:00 – 2026-08-24 23:59 (UTC)

---

## 1. 今日速览

- **整体活跃度：高** —— 过去 24 小时共产生 **50 条 Issue 更新**（新开/活跃 31、关闭 19）与 **47 条 PR 更新**（待合并 21、已合并/关闭 26），日均交互量处于项目历史高位。
- **版本迭代：** 发布 **v2.1.1-beta.2**，主要修复视频工具结果投递、控制台 Artifacts 渲染等 Beta 阶段关键回归。
- **核心关注点聚焦：** 多会话/多智能体并发下的**会话身份错乱**、**内存泄漏（运行时累积至 20 GB+）**、**上下文压缩时机**、**工具 Schema 注入不一致**四大稳定性痛点。
- **社区贡献活跃：** 4 个首贡 PR（`first-time-contributor`）进入审查，涵盖文档、导入流、Token 统计图表、技能预加载策略，新贡献者引导机制有效。
- **技术债偿还：** 合并了 E2E 测试修复、Docker 镜像版本推导、CI 脚本修复等 6 个工程化 PR，测试覆盖率与构建可复现性显著提升。

---

## 2. 版本发布

### v2.1.1-beta.2 (2026-08-24)
| 变更类型 | 详情 | 影响范围 |
|----------|------|----------|
| **feat(console)** | Assistant Response Card 新增 Artifacts 渲染支持 | 前端交互增强，无破坏性变更 |
| **fix(video)** | 修复 OpenAI Responses API 下工具结果视频投递失败 | 仅影响使用该 API 的视频工具调用 |
| **test(browser)** | 补充 Browser 相关回归测试 | 测试层面，提升发布置信度 |

> **迁移提示**：Beta 版本不建议生产环境直接升级；若从 v2.1.0 升级，需重启后端以加载新的 Artifacts 前端资源。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心价值 | 关联 Issue |
|----|------|----------|------------|
| [#7248](https://github.com/agentscope-ai/QwenPaw/pull/7248) | **chore(ci)** | Docker 镜像版本从 `src/qwenpaw/__version__.py` 自动推导，消除硬编码漂移风险 | — |
| [#7173](https://github.com/agentscope-ai/QwenPaw/pull/7173) | **fix(e2e)** | 修复控制台重构后导致的 10+ 个 E2E 用例失效，恢复 CI 绿标 | — |
| [#7234](https://github.com/agentscope-ai/QwenPaw/pull/7234) | **fix(memory)** | 恢复 ReMe `optimize_index_cron` 周期性索引压缩，缓解长期运行 BM25 槽位泄漏 | 关联长时内存增长 |
| [#7245](https://github.com/agentscope-ai/QwenPaw/pull/7245) | **chore(console)** | 移除桌面模式提醒弹窗，精简移动端交互路径 | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) |
| [#7247](https://github.com/agentscope-ai/QwenPaw/pull/7247) | **fix(providers)** | 禁止向 SiliconFlow DeepSeek V4 发送多媒体内容，规避 400 报错 | — |
| [#7250](https://github.com/agentscope-ai/QwenPaw/pull/7250) | **fix(scripts)** | 修复 `scripts/run_tests.py` 漏跑根目录测试、误报成功的缺陷 | — |

> **整体推进度**：核心稳定性修复 3 个、工程化修复 3 个，Beta 质量门槛显著收敛。

---

## 4. 社区热点（高互动 Issue/PR）

| 排名 | Issue/PR | 评论/👍 | 核心诉求 | 分析 |
|------|----------|---------|----------|------|
| 1 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) **Bug: 多步任务中途静默停止** | 11 💬 | 模型输出规划类文本后不再自动继续，需用户手动“继续” | **高频痛点**，疑似流式解析/工具调度逻辑将“规划文本”误判为终止信号，阻塞自主循环 |
| 2 | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) **Docker 版插件/应用市场常驻“维护中”** | 9 💬 | 镜像内无法访问远程市场元数据服务 | 网络/代理配置缺失或镜像构建时未打包离线索引，影响离线/私有化部署用户 |
| 3 | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) **Feature: Webhook 回调机制** | 8 💬 / 1 👍 | 外部系统通过 Webhook 触发 CoPaw 并获取异步结果 | 典型集成需求，适配企业级工作流编排，建议纳入 v2.2 路线图 |
| 4 | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) **Console Stop 误取消飞书会话** | 8 💬 | 多 UI 会话并发时，Session Identity 跨会话污染导致错误取消 | **严重并发缺陷**，已由 [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) 修复冻结身份 |
| 5 | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) **后端内存 2 天增至 20 GB+** | 3 💬 | 运行时累积性泄漏（非启动期），涉及文件处理/长上下文 | **生产级阻断**，需引入内存剖析、对象池复用、周期性 GC 策略 |

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 阻断** | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | 运行 2 天后内存 20 GB+ 导致宿主机卡死 | ❌ 无 | 需立即组织内存 Profile，疑似文件句柄/异步任务/HTTP 连接泄漏 |
| **P0 数据风险** | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | v1.1.12 内存泄漏致配置损坏需重配 | ❌ 无 | 旧版本遗留，建议在 v2.1.1 发布说明中标注升级路径 |
| **P1 严重** | [#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) | 并发会话切换导致消息发往错误 Session | ✅ [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) 已修复待合并 | 会话身份在发送时重构导致竞态，**优先合并** |
| **P1 严重** | [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | `agent.json` 全启用内置工具，但会话 Schema 未注入 | ❌ 无 | 工具面不一致，影响所有渠道工具调用成功率 |
| **P1 严重** | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | `daily_paper` 遇代理字符（U+D800–U+DFFF）崩溃 | ❌ 无 | 编码容错缺失，建议在 `write_atomic` 增加 `errors="surrogatepass"` 或清洗 |
| **P2 一般** | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | MCP streamable_http 瞬时断网导致会话永久阻塞 | ❌ 无 | 重连后未恢复会话上下文，需补偿重试机制 |
| **P2 一般** | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | 中文文件名百分号编码乱码 | ✅ 已修复（未见 PR 编号） | 前端解码缺失 |
| **P3 体验** | [#7230](https://github.com/agentscope-ai/QwenPaw/issues/7230) | 上下文压缩在任务执行期触发导致中断 | ❌ 无 | 建议改为空闲期异步压缩，已获社区共识 |
| **P3 体验** | [#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242) | 74 Agents 实例 Dashboard 加载 6 分钟+ | ❌ 无 | 可能涉及 N+1 查询或前端虚拟化缺失，需性能分析 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 现有 PR/实现进度 | 入版本预测 |
|------|-------|----------|------------------|------------|
| **Webhook 回调/异步集成** | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 8 💬 / 1 👍 | 无 | v2.2（企业级集成里程碑） |
| **按渠道/频道独立配置模型** | [#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) | 5 💬 | 无 | v2.2（多租户/多渠道运营刚需） |
| **技能预加载策略** | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | 3 💬 | ✅ [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) 已提 PR | v2.1.1 正式版（首贡 PR，代码完备） |
| **智能体协作单会话窗口聚合** | [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) / [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 4/6 💬 | 无 | v2.2（需重构消息总线与 UI 虚拟列表） |
| **Aider CLI / Qwen_Code 作为第三方 Agent Harness** | [#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) / [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181) | 6/2 💬 | [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181) 已关闭（设计讨论） | v2.3（需统一 Agent Protocol 抽象层） |
| **PowerContext 长期记忆后端可插拔** | [#7080](https://github.com/agentscope-ai/QwenPaw/issues/7080) | — | ✅ [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) Under Review | v2.1.1 或 v2.2（可选组件，低风险） |
| **从 Codex/Qoder 导入配置迁移** | — | — | ✅ [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) 首贡 PR | v2.1.1（降低迁移成本，促进用户获取） |

---

## 7. 用户反馈摘要（真实痛点与场景）

| 场景 | 代表性声音 | 情感倾向 | 隐性需求 |
|------|------------|----------|----------|
| **夜间/长任务无人值守** | “夜里让 agent 干活，早上看到全是待审批弹窗，默认自动模式也有大量无意义审批” ([#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)) | 😤 挫败 | **智能审批策略**：区分“会话前既有文件”与“任务中间产物”，仅对前者强制审批 |
| **移动端/手机操作** | “入口在底部手机极不方便，打开/停止按钮相邻怕误触” ([#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177)) | 😟 焦虑 | **响应式布局 + 关键动作防误触**（长按/二次确认） |
| **大规模多智能体运维** | “74 个 agents 仪表盘加载 6 分钟，API 却正常” ([#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242)) | 😓 无力 | **后端分页/懒加载 + 前端虚拟滚动**，Dashboard 走独立轻量 API |
| **多会话并发开发** | “切会话/切页面时消息发错窗口，甚至把飞书会话停了” ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011), [#7231](https://github.com/agentscope-ai

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-08-25

---

## 1. 今日速览
- **整体活跃度：低**。过去 24 小时仅新增 1 条 Issue（#650），无 PR 活动，无版本发布，代码库处于维护/孵化期。
- **核心动向**：社区聚焦于 **CLI 交互体验（REPL）的健壮性改进**，特别是防止误触退出与命令解析边界情况的处理。
- **风险提示**：Issue #650 暴露的“Ctrl+C/Ctrl+D 直接销毁会话”属于 **数据丢失风险**，建议维护者优先评估修复优先级。
- **项目健康度**：Issues 回响及时（作者同日创建/更新），但缺乏 PR 流转与版本迭代，长期来看需警惕“维护停滞”信号。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展
**今日无 PR 合并/关闭，代码库无实质性推进。**
- 待合并 PR 数：0
- 核心功能里程碑：静止

---

## 4. 社区热点
| 排名 | 标题 | 类型 | 评论/反应 | 链接 | 核心诉求分析 |
|------|------|------|-----------|------|--------------|
| 1 | **feat(cli): REPL UX hardening - safe Ctrl+C/Ctrl+D, lone '/' command table** | Feature Request / UX Bug | 0 评论 / 0 👍 | [#650](https://github.com/qhkm/zeptoclaw/issues/650) | **高频痛点**：用户在交互式会话中误触 `Ctrl+C`/`Ctrl+D` 导致会话意外终止，属于 **“防误操作/数据保护”** 核心诉求；同时指出单独输入 `/` 被误判为未知命令，属 **命令解析边界缺陷**。虽无讨论热度，但属典型“体验破坏性”问题，建议纳入下一迭代。 |

---

## 5. Bug 与稳定性
| 严重程度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|----------|-------|------|----------|---------------|
| **高（数据丢失风险）** | [#650](https://github.com/qhkm/zeptoclaw/issues/650) | `Ctrl+C`/`Ctrl+D` 直接触发 `Goodbye!` 退出，不做二次确认，导致进行中会话/上下文丢失 | 所有使用 `zeptoclaw agent` 交互式 CLI 的用户 | **无** |
| **低（体验缺陷）** | [#650](https://github.com/qhkm/zeptoclaw/issues/650) | 单独输入 `/` 被识别为 `Unknown command: /`，而非显示命令表 | 同上 | **无** |

> **注**：当前无 Crash/Regression 报告，但 #650 的“静默退出”在生产环境下极易引发用户投诉。

---

## 6. 功能请求与路线图信号
| 需求来源 | 核心需求 | 关联 PR/实现可能性 | 判断依据 |
|----------|----------|---------------------|----------|
| [#650](https://github.com/qhkm/zeptoclaw/issues/650) | **REPL 安全退出机制**：`Ctrl+C` 先中断当前任务/提示确认，`Ctrl+D` 才真正退出 | ⭐⭐⭐⭐⭐ **极高** | 符合 CLI 通用交互规范（如 `python`、`psql`、`redis-cli`），修改成本低，收益高 |
| [#650](https://github.com/qhkm/zeptoclaw/issues/650) | **`/` 命令补全/帮助表**：单独 `/` 应展示可用命令表 | ⭐⭐⭐⭐ **高** | 属于命令解析器边界修正，逻辑简单 |
| 长期隐性需求 | **会话持久化/恢复** | ⭐⭐ **中** | 未在 Issue 显性提出，但 #650 暴露的“会话易丢失”倒逼该能力建设 |

> **路线图推测**：下一版本（v0.x 或 v1.0 预发布）大概率会包含 #650 的修复，作为“CLI 可用性加固”里程碑。

---

## 7. 用户反馈摘要
- **真实痛点**：交互式 Agent 会话**极其脆弱**，一次误触即丢失上下文，严重阻碍复杂任务调试。
- **使用场景**：开发者在终端长时间调试 Agent 行为、多轮对话编排时高频遇到。
- **情绪倾向**：Issue 措辞克制（`feat` 标签而非 `bug`），但隐含 **“基础交互不可用”** 的强烈不满。
- **满意点**：暂无正向反馈数据。

---

## 8. 待处理积压提醒
| 项目 | 状态 | 停滞时长 | 建议动作 |
|------|------|----------|----------|
| **REPL UX Hardening (#650)** | Open, 0 评论, 0 反应 | < 24h | **P0 级响应**：指派维护者或贡献者在 48h 内给出设计方案（如 `Signal` 处理重写、命令解析器补丁），避免变成“幽灵 Issue”。 |
| **历史版本发布** | 无 Release 记录 | 长期 | 建议制定 **月度/里程碑发布节奏**，哪怕是预发布，增强外部信心。 |
| **贡献者入口** | 无 `good first issue`/`help wanted` 标签 | 长期 | 梳理 #650 等任务打标，降低外部贡献门槛。 |

---

> **数据来源**：GitHub REST API / GraphQL，统计窗口 2026-08-24 00:00–23:59 UTC。  
> **下一版日报**：2026-08-26 同步更新。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-25

---

## 1. 今日速览

ZeroClaw 今日保持**高强度并行开发节奏**：50 条 Issue 与 50 条 PR 在 24 小时内同步更新，且均无新版本发布，呈现典型的“积累大型重构与架构级变更”特征。核心研发力量集中在 **运行时任务生命周期重构（#9726）**、**ZeroCode 多会话面板（#9739）**、**文件系统安全隔离（#9977）**、**多模态图像校验（#9819）**、**RPC 通道暴露（#10246）** 等大体量 PR，均标记 `size:XL` 且风险等级 `high`，说明项目正处于**基础设施硬化与架构解耦的关键窗口期**。社区讨论热度集中在 **OpenAI Chat Completions 协议适配 RFC（#8603，24 条评论）** 与 **维护者决策队列治理（#8692，14 条评论）**，反映外部生态兼容性诉求与内部治理规范化的双重压力。安全领域出现 **S0 级严重漏洞（#10165：独立 delegate 绕过高风险命令拦截）**，已有修复 PR 推进中。整体健康度：**活跃度极高、架构变更密集、安全债务显性化、治理流程趋严**。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。

---

## 3. 项目进展 —— 今日合并/关闭的重要 PR 与 Issue

| 编号 | 标题 | 类型 | 状态 | 核心推进内容 | 链接 |
|------|------|------|------|--------------|------|
| #10023 | Failure logs claim the requested model, not the pinned fallback model | Bug | **Closed** | 修复可靠提供商回退时日志记录请求模型而非实际服务模型的问题，提升可观测性准确性 | [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) |
| #9590 | Concurrent models refresh runs can lose cache entries | Bug | **Closed** | 解决并发 `models refresh` 导致缓存条目丢失的竞态条件 | [#9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) |
| #10106 | Exact proxy selectors reject supported transcription services | Bug | **Closed** | 修复代理选择器错误拒绝合法转录服务（Groq/OpenAI/Deepgram 等） | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) |
| #10251 | Repeat parallel runtime tests: 17 telegram listen_* tests assert on wall-clock timeouts | Bug (CI) | **Closed** | 清理依赖壁钟超时的脆弱 Telegram 测试，提升 CI 稳定性 | [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) |
| #10143 | Make provider-call accounting lifecycle-complete | Task | **Closed** | 完成提供商调用全生命周期记账契约，确保每个物理叶节点仅记录一次 | [#10143](https://github.com/zeroclaw-labs/zeroclaw/issues/10143) |
| #10190 | Reasoning fallback classifier matches unrelated compound error clauses | Bug | **Closed** | 修正推理回退分类器在复合错误中误匹配无关子句 | [#10190](https://github.com/zeroclaw-labs/zeroclaw/issues/10190) |
| #10224 | Custom provider 5xx errors are logged as duplicated escaped JSON | Bug | **Closed** | 修复自定义提供商 5xx 错误被双重转义记录为 JSON 字符串 | [#10224](https://github.com/zeroclaw-labs/zeroclaw/issues/10224) |

> **进展评估**：7 个 Issue 关闭，覆盖 **可观测性准确性**、**缓存并发安全**、**代理兼容性**、**CI 稳定性**、**提供商记账完整性** 等关键基础设施，显示维护团队在“稳固地基”层面持续交付。但 **0 个 PR 合并** 说明大体量重构仍在评审流程中，版本里程碑可能延后。

---

## 4. 社区热点 —— 讨论最活跃的 Issues/PRs

| 编号 | 标题 | 评论数 | 状态/标签 | 核心诉求分析 | 链接 |
|------|------|--------|-----------|--------------|------|
| **#8603** | **RFC: ZeroClaw Chat Completions profile** | **24** | `accepted` `risk:high` `type:rfc` | **生态兼容性刚需**：Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK 等主流客户端均仅支持 Chat Completions 协议，ZeroClaw 目前仅暴露 WebSocket/ACP/Webhook，阻碍生态接入。社区期望原生实现 `/v1/chat/completions` 兼容层，统一认证、流式、工具调用、多模态语义。 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| **#8692** | **[Tracker]: Maintainer decision queue for RFCs and design issues** | **14** | `tracker` `accepted` | **治理规范化**：建立维护者决策队列，对 RFC、设计议题、发布策略等显性化“接受/拒绝/延后/拆分”流程，解决长期悬而未决的设计分歧。 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| **#7431** | **[Feature]: Add pre-turn tool elicitation hints for natural-language routing requests** | **6** | `accepted` `risk:high` | **自然语言路由增强**：希望在主 LLM 调用前轻量提取路由意图，自动设置 `send_via`，避免显式调用，提升多通道/多代理场景下的易用性。 | [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) |
| **#9726** | **fix(runtime): make TaskRecord the single background lifecycle owner** | *PR 活跃* | `size:XL` `risk:high` `distinguished contributor` | **架构级重构核心 PR**：将 `TaskRecord` 确立为后台委派任务的唯一生命周期所有者，解决输出持久化与终端状态不一致的长期隐患，涉及运行时、守护进程、委派工具、CI、文档全栈变更。 | [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) |
| **#9739** | **feat(zerocode): multi-session panes with agent sidebar and sidebar-launched quickstart** | *PR 活跃* | `size:XL` `zerocode` `channel:acp` | **ZeroCode 交互革命**：多会话面板、代理侧边栏、侧边栏启动快速入口，显著提升 TUI 多任务并行体验，依赖 #9729 基础设施。 | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) |

---

## 5. Bug 与稳定性 —— 按严重程度排序

| 严重级 | 编号 | 标题 | 组件 | 现状 | 是否有修复 PR | 链接 |
|--------|------|------|------|------|----------------|------|
| **S0 (数据丢失/安全风险)** | **#10165** | Independent delegate bypasses `block_high_risk_commands` on its own risk profile | `security/sandbox` `tool:delegate` `tool:shell` | **Open, In Progress** | ⚠️ 暂无关联 PR 标识，需紧急跟进 | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) |
| **S0 (安全/跨边界)** | **#10324** | cron manual trigger and run-history reads remain check-then-act across an agent rename | `runtime/daemon` `tool:cron` | **Open (刚创建)** | 无 | [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) |
| **S2 (功能退化)** | **#10068** | Interactive agent session caps context at 32,000 tokens, ignoring max_context_tokens = 131072 | `runtime/daemon` `cli` | **Open, In Progress** | 可能关联 #9726 任务记录重构 | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) |
| **S2** | **#9363** | Config metadata remains English in localized ZeroCode and web surfaces | `config` `zerocode` `web` | **Open, Accepted** | 无 | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) |
| **S2** | **#9812** | Provider fallback carries the primary's model id, so it can never fire (and poisons the fallback into cooldown) | `provider:reliable` `provider:router` | **Open, Stale, Needs Repro** | 无 | [#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) |
| **S2** | **#10232** | Daemon diagnostics drop the underlying error chain | `runtime/daemon` `observability:log` | **Open, In Progress** | 可能关联 #10236 | [#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) |
| **S2** | **#10178** | Daemon socket ownership error does not identify the active owner or recovery path | `runtime/daemon` `zerocode` | **Open, In Progress** | 无 | [#10178](https://github.com/zeroclaw-labs/zeroclaw/issues/10178) |
| **S2** | **#10175** | Mark Google TTS API key header as sensitive | `channel` `domain:security` | **Open, In Progress** | 无 | [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) |
| **S3 (次要)** | **#10180** | ZeroCode paste mutates the hidden composer while another surface owns input | `zerocode/tui` | **Open, In Progress** | 无 | [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) |
| **S2** | **#9820** | Calculator tool: model emits literal `<TOOLCALL>` pseudo-syntax instead of a real function call | `agent` `provider:compatible` `tool` | **Open, Accepted** | 无 | [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) |

> **稳定性洞察**：  
> - **S0 级漏洞 #10165 处于“In Progress”但无可见 PR，极度危险**，建议立即指派安全组处理。  
> - **#9812 标记 `stale` 且 `needs-repro`，实为提供商回退链路彻底失效，应升级优先级**。  
> - 多个 S2 问题集中在 **守护进程诊断、Socket 所有权、国际化、提供商回退** —— 均为基础设施长期技术债。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*