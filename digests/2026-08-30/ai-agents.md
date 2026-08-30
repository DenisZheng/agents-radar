# OpenClaw 生态日报 2026-08-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-30 02:59 UTC

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

# OpenClaw 项目日报 · 2026-08-30

---

## 1. 今日速览

OpenClaw 今日呈现 **高强度维护与修复并行** 态势。过去 24 小时累计 500 条 Issue 更新（新开/活跃 415、关闭 85）与 500 条 PR 更新（待合并 331、已合并/关闭 169），**零版本发布**但有两条发布准备 PR（#130731 准备 2026.9.1-beta.1，#133000 准备 extended-stable 2026.7.33），显示项目处于 **“稳定版维护 + 下一版本冻结”** 双轨并行阶段。核心矛盾集中在 **网关内存泄漏（RSS 增长 44 倍）**、**会话车道饥饿/消息丢失**、**子进程僵尸累积** 等 P0/P1 级稳定性缺陷，多个修复 PR 已进入审核流水线。社区讨论热度集中于生产环境可靠性（WhatsApp/Slack/Telegram 多渠道投递失败、Cron 调度器失效、上下文截断），维护者响应迅速但积压仍在增长。

---

## 2. 版本发布

**无正式发布**。两条发布准备 PR 处于待合并状态：
- **#130731** `chore(release): prepare 2026.9.1-beta.1` — 含 Linux 安装器韧性修复、完整 CI 证据链，标记 `P1 / rating: 🦐 gold shrimp`，等待作者确认。
- **#133000** `chore: prepare extended-stable 2026.7.33` — 回溯 19,153 个非等价提交的低风险修复，面向长期支持线，`P1 / rating: 🦐 gold shrimp`。

> ⚠️ **迁移提示**：beta.1 含多渠道 Webhook 连接释放修复（#126818）、会话权限选择器显式默认标签（#132989）、Telegram 群主题审批卡片定位修复（#125190），升级前建议跑全量 E2E。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|------|------|----------|--------|------|
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | `feat` | Web UI 会话头部菜单补全 pin/unread/icon/copy/move 等动作 | UX、多会话管理 | ✅ **CLOSED** |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | `fix` | 修复 Claude CLI OAuth 刷新令牌所有权在网关重启后丢失、Control UI 显示矛盾行 | 认证、Control UI | ✅ **CLOSED** |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | `fix` | CLI `models aliases add` 从写入快照解析别名目标，避免竞态 | CLI、模型别名 | ✅ **CLOSED** |
| [#132894](https://github.com/openclaw/openclaw/pull/132894) | `fix` | 切换 Agent 时不再泄露另一 Agent 的 auth/quota 信息 | 安全边界、多租户 | ✅ **CLOSED** |
| [#117266](https://github.com/openclaw/openclaw/pull/117266) | `fix` | 回滚/重置会话时保留非活跃分支引用的托管媒体，防止误删 | 数据完整性、媒体管理 | ⏳ **待作者** |
| [#69822](https://github.com/openclaw/openclaw/pull/69822) | `feat` | `session-message-events` + `socket.drain` 确保下游即时感知会话驱逐 | 可靠性、Pub/Sub 延迟 | 📣 **需证明** |

> **整体推进度**：核心稳定性修复（内存、僵尸进程、会话车道、OAuth、Webhook）已进入“需证明/等待维护者”阶段，预计随 2026.9.1-beta.1 交付；长期支持线 2026.7.33 同步回溯低风险补丁。

---

## 4. 社区热点（评论/反应 Top 10）

| # | Issue | 评论 | 👍 | 核心诉求 | 关联 PR |
|---|-------|------|-----|----------|---------|
| 1 | [#91588](https://github.com/openclaw/openclaw/issues/91588) **Gateway Memory Leak — RSS 350MB→15.5GB/OOM** | 22 | 1 | **P0 级生产阻断**：内存泄漏导致 launchd 反复重启，需根因定位（疑似沙箱桥/内存刷新路径） | [#131604](https://github.com/openclaw/openclaw/pull/131604) 并发刷新原子追加修复 |
| 2 | [#96834](https://github.com/openclaw/openclaw/issues/96834) **WhatsApp 图片楔住主车道 ~3 分钟** | 14 | 1 | 多模态图片注入导致 `active_reply_work/queued_work_without_active_run` 搁浅，阻塞入站分发 | — |
| 3 | [#121953](https://github.com/openclaw/openclaw/issues/121953) **Cron + DeepSeek：`[cron:...]` 前缀触发低优先级队列** | 13 | 0 | DeepSeek 边缘对 `[cron:` 前缀降级，导致定时任务卡顿数十秒 | — |
| 4 | [#74586](https://github.com/openclaw/openclaw/issues/74586) **AM embedded 误判 `memory_search` 超时** | 13 | 3 | 模型已完成但工具调用被标记超时，影响主动记忆检索 | — |
| 5 | [#84516](https://github.com/openclaw/openclaw/issues/84516) **Codex 回复静默截断 ~1000 字符** | 12 | 2 | `stop=null, aborted=false` 却中断，疑似 app-server 缓冲区/流控问题 | — |
| 6 | [#39476](https://github.com/openclaw/openclaw/issues/39476) **A2A `sessions_send` 双向调用产生重复消息** | 12 | 0 | 设计缺陷：B 回调 A 导致请求方收到两份回复 | — |
| 7 | [#6599](https://github.com/openclaw/openclaw/issues/6599) **Feature: `/models test-fallback` 验证降级链** | 11 | 1 | 运维需求：故障前验证 fallback 配置 | — |
| 8 | [#112196](https://github.com/openclaw/openclaw/issues/112196) **memory_search 瞬态超时伪装持久失败** | 10 | 0 | 重启后报 `database is not open` 实为嵌入同步未就绪 | ✅ **CLOSED** |
| 9 | [#132762](https://github.com/openclaw/openclaw/issues/132762) **overflow-retry 成功但无最终投递** | 10 | 0 | 多阶段文档工作流重试以 `toolResult` 结束，缺 assistant 回复 | — |
| 10 | [#97616](https://github.com/openclaw/openclaw/issues/97616) **Hook/Tool 子进程泄漏 → 僵尸累积** | 9 | 1 | 长期运行性能退化，需 `waitpid`/信号处理加固 | — |

> **信号分析**：Top 10 中 8 个为 **P1/P0 稳定性/数据丢失** 类，仅 1 个增强（#6599），1 个已关闭（#112196）。社区核心诉求聚焦 **“长期运行不崩、消息不丢、重启可恢复”**，而非新功能。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 / 🦞 diamond lobster** | [#125333](https://github.com/openclaw/openclaw/issues/125333) | `totalTokens` 膨胀：`#123065` 仅修 `api==="cli"`，memory-flush 路径成无守护棘轮 | [#131604](https://github.com/openclaw/openclaw/pull/131604) 原子追加修复并发刷新数据丢失 | Beta.2 复现，阻断发布 |
| **P0 / 🦐 gold shrimp** | [#124788](https://github.com/openclaw/openclaw/issues/124788) | Beta.2 事件循环每 ~10.9 min 阻塞 ~100-120 s（锚定计时器 + 字符串构建 + fs 扫描） | — | 已关闭但根因未消，需回归验证 |
| **P1 / 🦞** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关 RSS 350MB→15.5GB/OOM，launchd 重启循环 | [#131604](https://github.com/openclaw/openclaw/pull/131604) 沙箱桥原子追加 | 评论最多，生产环境高频复现 |
| **P1 / 🦞** | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 图片楔住主车道 3 min | — | 多模态注入路径阻塞 |
| **P1 / 🦞** | [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron + DeepSeek 前缀降级导致卡顿 | — | 需产品决策：前缀可配置化 |
| **P1 / 🦞** | [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 头部调用静

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据基准：2026-08-30 社区动态摘要 | 维度：10 个核心开源项目**

---

## 1. 生态全景

当前生态呈现 **“头部项目深耕生产级稳定性，腰部项目探索差异化交互与架构，尾部项目面临维护停滞”** 的三极分化态势。  
核心矛盾已从“功能竞赛”转向 **“长期运行可靠性（内存/进程/状态一致性）、多模态/多渠道投递保真度、安全沙箱与权限模型落地”** 三大工程硬骨头。  
头部项目普遍进入 **“版本冻结+补丁并行”** 交付节奏，技术债偿还比例显著高于新特性开发。  
社区贡献结构呈现 **“核心团队主导基建/安全，外部贡献者补齐适配器/i18n/边缘体验”** 的典型双峰分布。  
**A2A 互操作、持久化记忆、边缘/本地化部署、企业级多租户** 正成为下一阶段共同演进的四大确定性赛道。

---

## 2. 各项目活跃度对比

| 项目 | 仓库 | Issues (新/活/关) | PRs (待合并/合并关闭) | Release | 健康度评估 | 核心态势 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | openclaw/openclaw | 415 / 85 | 331 / 169 | 无 (2 个发布准备 PR) | 🟡 **高负载稳定期** | P0/P1 Bug 积压高，双版本线并行，核心维护者全力修复内存/会话/进程泄漏 |
| **NanoBot** | HKUDS/nanobot | 2 新增 | 9 / 5 | 无 | 🟢 **高质量迭代期** | CLI 破坏性重构、Provider 动态发现、安全基线修复同步推进，响应极快 |
| **Hermes Agent** | NousResearch/hermes-agent | 28 / 22 | 31 / 19 | 无 | 🟢 **高吞吐闭环期** | 会话恢复、多平台适配、i18n、终端兼容性等 P1/P2 修复批量合并 |
| **NanoClaw** | qwibitai/nanoclaw | 15 新增 | 15 / 30 | 无 | 🟢 **工程冲刺期** | 单日合并 30 PR，聚焦容器构建、Slack 适配器、CI 标准化、Signal 集成阻塞修复 |
| **ZeroClaw** | zeroclaw-labs/zeroclaw | 18 (4 关) | 50 (2 合并) | 无 (v0.8.5 冻结) | 🟢 **架构重构并行期** | 安全加固、Provider 兼容、Windows CI、A2A/记忆/边缘网格 Tracker 推进 |
| **CoPaw** | agentscope-ai/CoPaw | 8 新增 | 7 / 0 | 无 | 🟡 **审核瓶颈期** | 社区贡献热度高（含多租户 Hub RFC），但零合并，P0 Bug 阻断新会话 |
| **PicoClaw** | sipeed/picoclaw | 1 活跃 | 1 / 2 (Stale关闭) | 无 | 🟠 **低频维护/债务清理期** | Telegram 编辑风暴 P0 Bug 无人修，Stale Bot 误伤有效 PR 需治理 |
| **LobsterAI** | netease-youdao/LobsterAI | 1 / 0 | 0 / 0 | 无 | 🔴 **维护真空期** | 5 个就绪 PR 积压 150 天，P1 数据丢失 Bug 无 Fix，Stale 机制失效 |
| **Moltis** | moltis-org/moltis | 1 新增 | 0 / 0 | 无 | 🔴 **静默阻塞期** | 核心 Sandbox 运行阻塞 Bug 48h 无响应，维护者缺位 |
| **TinyClaw / ZeptoClaw / NullClaw** | - | 0 | 0 / 0 | 无 | ⚫ **休眠/归档态** | 过去 24h 无任何活动 |

> **注**：IronClaw 摘要生成失败，不纳入统计。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 差异化证据 |
| :--- | :--- | :--- |
| **技术路线** | **重运行时、重网关、重多租户** 的“平台级”智能体基础设施 | 网关架构、会话车道、沙箱桥、多渠道投递、Cron 调度器、A2A 原生支持 — 均为生产级编排组件，非单纯 CLI/Chat 包装器 |
| **规模与吞吐** | 生态内 **绝对量级最大**（日均 500+ Issue/PR 更新），社区规模、代码库复杂度、生产部署案例均居首位 | 单日 500 条 Issue/PR 更新量约等于其余 9 个活跃项目之和 |
| **核心优势** | 1. **生产级可靠性工程深度最深**：系统性攻克内存泄漏、僵尸进程、会话饥饿、Webhook 连接释放等“长期运行”顽疾<br>2. **双轨发布策略成熟**：Extended-Stable (LTS) + Beta 并行，兼顾企业稳定与前沿验证<br>3. **多渠道/多模态投递链路最完备**：WhatsApp/Slack/Telegram/Slack/钉钉/飞书等原生适配器生态 |
| **主要挑战** | 技术债利息极高（RSS 增长 44x、总 Token 膨胀棘轮）、积压 Issue 消化周期长、贡献者入门门槛高（核心修复多需维护者主导） |
| **生态角色** | **“Linux 内核式”基础设施内核** — 为上层应用（如 NanoClaw、PicoClaw 等下游分发/定制版）提供稳定内核能力 |

---

## 4. 共同关注的技术方向（跨项目高频涌现）

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **长期运行稳定性（内存/进程/状态）** | **OpenClaw** (RSS泄漏、僵尸进程、会话车道饥饿), **NanoBot** (速率限制内存泄漏 #5593), **ZeroClaw** (供应链安全、观测性缺口) | 核心诉求：**“不崩、不漏、可恢复”**。修复模式趋同：原子操作替代棘轮、显式资源回收、健康度探针、零字节状态库识别。 |
| **安全沙箱与最小权限模型** | **NanoBot** (ExecTool 无沙箱拒绝执行 #5536), **ZeroClaw** (Git Shell 策略硬化 #9678, Skill HTTP 出站绑定 #10369), **OpenClaw** (沙箱桥内存泄漏疑云) | 共识：**Fail-closed 默认拒绝**。从“应用层路径检查”转向“OS 级沙箱强制隔离/能力显式授予”，兼容 Bubblewrap/Landlock/Seatbelt 多后端。 |
| **多渠道/多模态投递保真** | **OpenClaw** (WhatsApp 图片楔车道、Telegram 群主题、Webhook 释放), **NanoClaw** (Slack 表格恢复、Signal 专用号注册阻塞), **Hermes** (WhatsApp 未@观察、QQBot 审批命名空间), **PicoClaw** (Telegram 编辑风暴限流) | 痛点一致：**协议边缘场景导致主流程阻塞/消息丢失/限流封号** 。修复聚焦：幂等键、背压控制、指数退避熔断、线程/主题命名空间隔离。 |
| **持久化记忆与跨会话上下文** | **OpenClaw** (Memory Search 超时/同步), **ZeroClaw** (Tracker #8891 三平面对齐、分类作用域授权 #10252), **Hermes** (Bot 群聊持久化 #97681, 0 字节 state.db #98300), **CoPaw** (长期记忆后端 #7080) | 演进方向：**从“会话级”向“用户级/团队级/分类级”跨越**。关键技术点：向量检索同步就绪性、权限作用域、相关性排序、可操作性提取。 |
| **A2A / MCP 互操作标准落地** | **OpenClaw** (A2A 双向重复消息 #39476), **ZeroClaw** (Tracker #3566 原生 A2A v0.3+), **NanoBot** (MCP 动态模型发现 #5596, MCP 失败容错 #3337), **CoPaw** (MCP 迁移凭证丢失 #7301, 超时配置 #6874) | 现状：**协议层已定，工程层坑多**。共同需求：标准化 Tool Calling/Streaming/Authentication/Error Mapping，避免厂商锁定。 |
| **企业级/多租户能力** | **OpenClaw** (会话权限选择器、多租户隔离 #132894), **CoPaw** (Hub 多租户 RFC #7318 - RBAC/审计/SSO/计费), **ZeroClaw** (边缘网格 RFC #10360), **NanoClaw** (团队配置导入导出 #1145) | 从“个人助手”向“团队协作平台”演进。核心缺口：审计日志、配额计费、技能市场、SSO/OIDC、跨设备状态同步。 |
| **本地化/边缘部署与原生体验** | **Hermes** (移动端 App 呼声 #11911, macOS Chrome 绑定 #93068), **ZeroClaw** (家庭边缘网格 RFC #10360), **NanoBot** (WebUI 完成提示音 #5602, 面板状态持久化 #5591), **CoPaw** (Windows ACP 启动阻塞 #7401) | 关键词：**原生感、离线优先、跨设备无缝、硬件异构利用**。WebUI 向 Desktop/TUI/Mobile 多端同构演进。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级网关/编排中台** | 平台工程师、SRE、ISV 集成商 | **中心化网关 + 会话车道 + 多运行时沙箱**；强调多租户隔离、审计、长连接管理、协议适配器插件化 |
| **ZeroClaw** | **安全优先的自主智能体运行时** | 安全敏感型开发者、边缘计算场景 | **能力安全模型 + 细粒度沙箱策略 + Rust 核心**；无中心网关，Agent 间 P2P (A2A)、技能 HTTP 出站绑定、内存权限作用域 |
| **NanoBot** | **开发者体验极致的本地优先 CLI/TUI** | 个人开发者、高级用户 | **单二进制 + 内嵌 WebUI + AgentRunner 解耦**；Provider 动态发现、Context Compaction 下沉 Runner、技能手动调用模式 |
| **Hermes Agent** | **多模态桌面助手 + 消息网关** | 重度桌面用户、跨平台消息聚合需求者 | **桌面端 + 网关分离架构**；Computer Use (Browser/SSH)、原生语音 (Gemini TTS/STT)、多消息平台适配器 (WhatsApp/QQ/Telegram/Slack) |
| **NanoClaw** | **技能驱动的轻量化部署单元** | 运维工程师、技能市场参与者 | **Container Skill 规范 + Chat SDK Bridge**；强调技能安装/更新原子性、环境变量统一、Slack/Signal 等渠道深度适配 |
| **CoPaw** | **可扩展的个人助手向团队平台演进** | 个人用户向中小团队过渡 | **插件化核心 + PowerContext 记忆 + ACP 协议**；正规划 Hub 多租户化，Windows 原生支持较强 |
| **PicoClaw** | **嵌入式/边缘侧轻量部署** | IoT 设备、资源受限环境 | **Go 单二进制、极简依赖**；聚焦 Telegram Bot API 兼容性、MCP 容错、i18n 覆盖 |
| **LobsterAI** | **协作式 Agent 管理工作台** | 非技术团队、Agent 运营人员 | **前端重 (React) + 后端轻**；核心价值在 Cowork 协作调试、技能可视化创建、定时任务可观测、团队配置模板化 |
| **Moltis** | **可视化编排/图式智能体** | 低代码编排用户 | **节点图运行时 + Sandbox 隔离**；核心阻塞点在动态拓扑变更后的沙箱状态同步 |

---

## 6. 社区热度与成熟度分层

| 梯队 | 项目 | 阶段特征 | 关键指标 |
| :--- | :--- | :--- | :--- |
| **第一梯队：生产级核心基建** | **

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-30

---

## 1. 今日速览

- **整体活跃度：高**。过去 24 小时内共有 **14 条 PR 更新**（9 个待合并，5 个已合并/关闭）与 **2 个新增 Issue**，显示核心团队正处于密集迭期，重点聚焦于 WebUI 体验打磨、Agent 核心逻辑重构与安全加固。
- **交付节奏稳健**：当日合并 5 个 PR，覆盖 CLI 默认命令调整、Provider 模型发现、WebUI 界面修复等已验证功能，发布流水线运转正常。
- **技术债偿还明显**：针对 `SendSessionMessageTool` 的速率限制内存泄漏（Issue #5593）、`edit_file` 文档歧义（Issue #5592）、以及 `ExecTool` 沙箱缺失时的“默认兑现”安全隐患（PR #5536），均已有对应 Fix PR 提出或合并，体现项目对稳定性与安全性的高优先级响应。
- **架构演进进行中**：PR #5568 将上下文压缩逻辑下沉至 `AgentRunner`，标志着 Agent 运行时核心控制流的进一步解耦与收敛。
- **无新版本发布**：当前积累的变更量（含破坏性 CLI 变更 PR #5560）暗示近期将切出新的 Minor 版本。

---

## 2. 版本发布

> **今日无新版本发布。**

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
| :--- | :--- | :--- | :--- |
| **[#5560](https://github.com/HKUDS/nanobot/pull/5560)** | **Feat (Breaking CLI)** | `nanobot` 裸命令默认启动终端 Agent；根命令直接接受 Agent 选项 (`-m`, `--workspace` 等)。 | **重大交互变更**：降低用户心智负担，统一 CLI 入口。需在发布说明中显著标注破坏性变更及别名迁移指引。 |
| **[#5596](https://github.com/HKUDS/nanobot/pull/5596)** | **Feat (Providers)** | 在线发现 OpenAI Codex、xAI Grok、GitHub Copilot 的账户级模型目录；统一 WebUI 与运行时能力检查目录；Grok 4.6 设为默认。 | **Provider 生态同步**：消除本地硬编码模型列表过期问题，提升多提供商切换体验，奠定动态模型路由基础。 |
| **[#5599](https://github.com/HKUDS/nanobot/pull/5599)** | **Fix (CLI/WebUI)** | `nanobot webui` 实时流式输出 Gateway 日志至终端；支持日志文件缺失/截断恢复；去除 Rich 标记渲染纯文本。 | **运维观测性增强**：开发者与高级用户可即时排查 WebUI 后端网关问题，减少“黑盒”调试成本。 |
| **[#5595](https://github.com/HKUDS/nanobot/pull/5595)** | **Fix (WebUI/UI)** | 隐藏 SkillHub 安装计数显示（数据稀疏且多为 0，造成“损坏感”）。 | **UI 信噪比优化**：快速修复视觉干扰，体现产品化细节打磨。 |
| **[#5591](https://github.com/HKUDS/nanobot/pull/5591)** | **Fix (WebUI/State)** | 修复具名面板组在仅剩单 pane 时被错误溶解导致自定义标题丢失；修复删除活跃 pane 状态异常。 | **WebUI 状态管理修复**：解决布局持久化一致性问题，提升复杂多任务工作流的稳定性。 |

---

## 4. 社区热点

| 对象 | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- |
| **[Issue #5593](https://github.com/HKUDS/nanobot/issues/5593)** <br> *Session message rate-limit state retains expired one-shot sessions* | 新建即关联 Fix PR **[#5594](https://github.com/HKUDS/nanobot/pull/5594)** | **内存泄漏风险**：`_sent_at` 字典因仅在同源再次发送时清理过期时间戳，导致一次性会话键永久驻留。用户/维护者关注长时运行进程的资源泄漏，**已有修复方案进入审查**。 |
| **[Issue #5592](https://github.com/HKUDS/nanobot/issues/5592)** <br> *edit_file documentation does not state that match selectors are mutually exclusive* | 新建即关联 Fix PR **[#5598](https://github.com/HKUDS/nanobot/pull/5598)** | **文档-实现不一致**：`occurrence`、`line_hint`、`replace_all` 互斥约束仅存在于运行时校验，文档与 Tool Contract 未明示，导致模型/用户误用。**文档修复 PR 已就绪**，呼吁同步更新 Contract 与自然语言描述。 |
| **[PR #5536](https://github.com/HKUDS/nanobot/pull/5536)** <br> *fix(exec): fail closed when restricted shell lacks a sandbox* | **Priority: P1 (Security)**, 关联 Issue #4072，跨 4 天审查 | **安全基线修复**：`ExecTool` 在 `restrict_to_workspace` 开启但无沙箱时，原依赖应用层路径检查，易被 symlink/扩展绕过。改为**无沙箱即拒绝执行**，属“默认拒绝”安全模型落地。社区关注度高，系长期遗留安全债（Issue #4072）。 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 现象与影响 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **P1 (安全/稳定性)** | **[#5536](https://github.com/HKUDS/nanobot/pull/5536)** | `ExecTool` 无沙箱时工作区限制可绕过，存在命令注入/路径遍历风险。 | **已提交 PR，审查中** (Priority: P1, Security 标签)。 |
| **P2 (资源泄漏)** | **[#5593](https://github.com/HKUDS/nanobot/issues/5593)** / **[#5594](https://github.com/HKUDS/nanobot/pull/5594)** | 速率限制状态字典无限增长，长时运行 Agent 进程内存泄漏。 | **已提交 PR，审查中** (Priority: P2)。 |
| **P2 (功能缺失)** | **[#5600](https://github.com/HKUDS/nanobot/pull/5600)** | 流式请求取消时，Native Reasoning 流未正常关闭（缺 `reasoning_end`），导致前端状态机卡死/显示异常。 | **已提交 PR，审查中** (Priority: P2)。 |
| **P2 (事件丢失)** | **[#5597](https://github.com/HKUDS/nanobot/pull/5597)** | `RetryWaitEvent` 被 `ChannelManager` 丢弃，用户在启用进度流时看不到重试等待提示。 | **已提交 PR，审查中** (Priority: P2)。 |
| **P2 (状态不一致)** | **[#5601](https://github.com/HKUDS/nanobot/pull/5601)** | WebUI 拒绝消息时，附件与 WS 订阅未回滚，产生孤立媒体文件与幽灵连接。 | **已提交 PR，审查中**。 |

> **趋势判断**：今日新增 Bug 均为 P2 级，且均在数小时内产出 Fix PR，修复响应速度极快。P1 级安全修复 (#5536) 已进入最终审查阶段，预计近期合并。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 纳入下一版本可能性 | 依据 |
| :--- | :--- | :--- | :--- |
| **[PR #5602](https://github.com/HKUDS/nanobot/pull/5602)** (Closes #5524) | **WebUI 完成提示音**：前台页面轮询完成时播放可选提示音 (`notificationSound` 本地偏好，默认关)。 | **极高** | 需求明确 (#5524)，实现完备含偏好存储、默认关闭、无障碍兼容，代码量小风险低。 |
| **[PR #5405](https://github.com/HKUDS/nanobot/pull/5405)** | **Skill `disable-model-invocation: true`**：仅允许用户手动调用的 Skill（部署/发布类副作用操作）。 | **高** | 设计讨论充分 (创建于 8/16)，解决“模型误触发高风险技能”核心痛点，已含测试与文档，处于长周期审查末期。 |
| **[PR #5568](https://github.com/HKUDS/nanobot/pull/5568)** | **Runner 接管 Context Compaction**：上下文压缩逻辑从 Agent 核心剥离至 Runner，统一输入天花板执行。 | **高 (架构演进)** | 属重构类，非用户可见功能，但为后续“原生压缩/摘要策略可插拔”铺路，核心维护者主导，推进决心大。 |
| **[Issue #5524](https://github.com/HKUDS/nanobot/issues/5524)** (隐含) | WebUI 后台通知已有，前台缺乏听觉反馈。 | **已解决** | 见 PR #5602。 |

---

## 7. 用户反馈摘要

> **数据来源局限**：过去 24 小时 Issues/PRs 评论数均为 0 或 `undefined`，无法直接提炼用户语料。以下综合 Issue 描述、PR 动机及历史模式推断：

1.  **CLI 易用性诉求强烈**：PR #5560 将 `nanobot` 裸命令映射至 `nanobot agent`，隐含用户对“子命令层级过深”的抱怨，期望开箱即用体验。
2.  **WebUI 生产力细节敏感**：
    - 面板组标题丢失 (#5591) 影响多任务并行上下文保持；
    - 完成无声 (#5524) 导致“等待-确认”循环效率低；
    - 无意义的 “0 installs” 标签 (#5595) 破坏信任感。
3.  **安全配置的“惊喜”行为**：Issue #4072 (关联 PR #5536) 反映用户假设开启 `restrict_to_workspace` 即安全，实则无沙箱时形同虚设，期望**显式报错而非静默失效**。
4.  **文档与运行时契约同步**：Issue #5592 揭示模型/用户因文档缺失互斥约束而频繁报错，呼吁“文档即契约”工程化。

---

## 8. 待处理积压（长期未响应/高价值滞留）

| 对象 | 滞留时长 | 关键阻碍 | 维护者行动建议 |
| :--- | :--- | :--- | :--- |
| **[PR #5405](https://github.com/HKUDS/nanobot/pull/5405)** <br> *feat(skills): support manual-only invocation* | **14 天** (创建 8/16) | 设计评审周期长，涉及 Skill 元数据 Schema 变更与模型工具广播逻辑调整。 | **建议本周完成 Review**：该功能为高危操作（部署/发布）的关键护栏，已含完整测试与文档，优先合并解除阻塞。 |
| **[PR #5568](https://github.com/HKUDS/nanobot/pull/5568)** <br> *refactor(agent): let runner own context compaction* | **3 天** (创建 8/27) | 核心重构，需确保流式/非流式、原生/非原生压缩分支全覆盖回归。 | **安排核心维护者专项 Review**：明确合并门槛（基准测试/压测通过），避免长期悬置造成分支偏移。 |
| **[PR #5536](https://github.com/HKUDS/nanobot/pull/5536)** <br> *fix(exec): fail closed when restricted shell lacks a sandbox* | **5 天** (创建 8/25) | P1 安全修复，涉及破坏性行为变更（原允许执行现拒绝），需发布说明与迁移文档配套。 | **加速合并并同步准备 Release Note**：安全债偿还不宜拖延，建议纳入下一个 Patch/Minor 版本。 |
| **Issue #4072** (关联 #5536) | **长期** | 底层沙箱依赖缺失时的安全兜底策略未定。 | **随 #5536 合并自动关闭**，确认无遗留场景。 |

---

### 📌 维护者行动清单 (Action Items)

1.  **合并安全基线**：优先完成 **[PR #5536](https://github.com/HKUDS/nanobot/pull/5536)** Review 与合并，同步更新安全公告模板。
2.  **清理积压大 PR**：安排时间窗口集中 Review **[PR #5405](https://github.com/HKUDS/nanobot/pull/5405)** 与 **[PR #5568](https://github.com/HKUDS/nanobot/pull/5568)**，解除架构与功能阻塞。
3.  **版本规划**：结合已合并的破坏性 CLI 变更 (#5560) 与 Provider 动态发现 (#5596)，启动 **vX.Y.0** 版本切分流程，撰写迁移指南（CLI 别名、ExecTool 行为变更）。
4.  **文档同步跟进**：确认 **[PR #5

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-30

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时共 50 条 Issue 更新（28 新开/活跃、22 关闭）与 50 条 PR 更新（31 待合并、19 已合并/关闭），呈现 **“高吞吐、快闭环”** 的维护节奏。  
- **无新版本发布**，但多个 P1/P2 级修复 PR 已合并或进入审核，预示下一个补丁版本（v0.18.x 或 v0.19.0）将包含大量稳定性改进。  
- **核心关注点集中在**：网关/会话状态恢复、Bot 群聊持久化、桌面端渲染器崩溃恢复、技能文件只读保护、多提供商 `extra_body` 回退逻辑、TUI/终端兼容性、国际化（印尼语）落地。  
- **社区诉求**：移动端原生 App（iOS/Android）呼声持续；WhatsApp/Telegram/QQBot 等消息平台的细节体验仍有缺口；SSH 后端与桌面文件浏览器的路径同步问题需解决。  
- **项目健康度**：**良** —— Issue 处理及时，PR 审核活跃，但长期积压的“移动端”“原生语音通话”“会话持久化架构重构”仍缺乏明确路线图承诺。

---

## 2. 版本发布

> 今日无新 Release。最近一次发布为 `v0.18.0`（上游 `af250d84`），当前主分支累积大量修复，建议关注下一周的补丁版本或 `v0.19.0` 预发布。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#97783](https://github.com/NousResearch/hermes-agent/pull/97783) | **Bug Fix (P2)** | `cron/jobs.py` 的 `parse_duration()` 支持裸单位（`hour`、`day` 等），修复 UI 宣称支持但解析报错的不一致 | Cron 调度、桌面端新建任务对话框 |
| [#98296](https://github.com/NousResearch/hermes-agent/pull/98296) | **Bug Fix (P2)** | QQBot 私聊会话键命名空间修正，授权按钮点击不再被拒绝 | QQBot 平台、网关多会话复用 |
| [#54922](https://github.com/NousResearch/hermes-agent/issues/54922) (关联 PR) | **Bug Fix (P2)** | `custom_providers[].extra_body` 在网关/消息路径不再被静默丢弃，CLI 与网关行为对齐 | 多提供商配置、网关转发 |
| [#64926](https://github.com/NousResearch/hermes-agent/issues/64926) (关联 PR) | **Bug Fix (P2)** | 技能目录可配置为只读，Agent 不再自动创建/修改/删除技能文件 | Skills 管理、只读部署场景 |
| [#93068](https://github.com/NousResearch/hermes-agent/issues/93068) (关联 PR) | **Bug Fix (P2)** | 统一 `computer_use.grant_existing_profile` 与浏览器恢复路径，消除 macOS 上 Chrome 既有配置文件授权冲突 | Computer Use、macOS 浏览器绑定 |
| [#97577](https://github.com/NousResearch/hermes-agent/pull/97577) | **Bug Fix (P3)** | 桌面端渲染器重启后恢复群聊回复：持久化恢复标记、有界轮询去重、生命周期安全 | Desktop、Bot 群聊、会话恢复 |
| [#98300](https://github.com/NousResearch/hermes-agent/pull/98300) | **Bug Fix (P1)** | `is_zeroed_state_db()` 识别 0 字节 `state.db` 为“已清零”而非健康，防止静默数据丢失 | 会话状态、数据完整性 |
| [#98303](https://github.com/NousResearch/hermes-agent/pull/98303) | **Bug Fix (P3)** | Gemini TTS 请求超时从硬编码 60s 改为随音频长度动态缩放 | TTS、Gemini 提供商 |
| [#98289](https://github.com/NousResearch/hermes-agent/pull/98289) | **Bug Fix (P3)** | Linux VTE/xterm 终端 `Ctrl+J` 识别为换行而非提交，与主流 TUI 对齐 | TUI、跨平台终端兼容性 |
| [#92336](https://github.com/NousResearch/hermes-agent/pull/92336) / [#92192](https://github.com/NousResearch/hermes-agent/pull/92192) / [#93632](https://github.com/NousResearch/hermes-agent/pull/93632) | **Feature (i18n)** | 完整引入印尼语：CLI/网关/桌面 UI、根文档、Docusaurus 站点 | 国际化、文档本地化 |

> **进展评估**：今日合并/关闭的 PR 覆盖 **会话恢复、数据完整性、多平台消息适配、终端兼容、国际化** 五大维度，显著降低生产环境故障率，为下一版本积累了扎实的稳定性基线。

---

## 4. 社区热点 —— 讨论最活跃的 Issue/PR

| # | 标题 | 状态 | 评论 | 👍 | 核心诉求 |
|---|------|------|------|----|----------|
| [#54922](https://github.com/NousResearch/hermes-agent/issues/54922) | `custom_providers[].extra_body` 在网关/消息路径静默丢弃 | **Closed** | 7 | 1 | 统一 CLI 与网关的提供商参数合并行为，避免生产环境参数丢失 |
| [#64926](https://github.com/NousResearch/hermes-agent/issues/64926) | 技能文件被自动修改，无法通过配置只读 | **Closed** | 6 | 1 | 企业/平台化部署需“只读技能目录”，防止运行时污染 |
| [#38710](https://github.com/NousResearch/hermes-agent/issues/38710) | WhatsApp 增加 `observe_unmentioned_group_messages` | **Open** | 6 | 4 | 与 Telegram 对齐：在不被 @ 时也能接收群消息上下文，增强群聊感知 |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 原生移动端 App（iOS/Android）+ 语音通话 | **Open** | 5 | 0 | 手机端原生交互、实时语音通话，补齐“桌面+消息网关”之外的移动入口 |
| [#97754](https://github.com/NousResearch/hermes-agent/issues/97754) | macOS 浏览器绑定多 CuaDriver 运行时冲突 | **Closed** | 5 | 0 | 规范化 macOS 上 Chrome 既有配置文件的授权与恢复路径 |
| [#98292](https://github.com/NousResearch/hermes-agent/issues/98292) | QQBot 命名会话中审批按钮被拒为未授权 | **Open** | 3 | 0 | 网关多会话键命名空间不一致导致审批流程卡死 |
| [#98299](https://github.com/NousResearch/hermes-agent/issues/98299) | `/v1/runs` 绕过 `GoalManager`，持久化 Goal 失效 | **Open** | 2 | 0 | API 结构化运行路径与斜杠命令行为不一致，破坏后台任务编排 |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot 群聊应在桌面端关闭后继续工作 | **Open** | 1 | 0 | 解耦 Desktop 与 Bot 调度，支持多网关、多设备协作的持久化群聊 |

> **热点分析**：  
> - **已闭环**：`extra_body` 丢失、技能只读、macOS 浏览器冲突、Cron 解析、QQBot 审批、0 字节 state.db 等 **P1/P2 级阻塞性 Bug 均已修复并关闭**。  
> - **进行中**：WhatsApp 群消息观察、移动端 App、Bot 群聊持久化、API `/v1/runs` 与 Goal 系统对齐 —— 均为 **架构级/产品级** 需求，需在 Roadmap 中明确排期。  
> - **新增**：Slack 线程回退、Gemini TTS 超时、印尼语落地、SSH 隔离桌面实例等 PR 显示社区贡献者正在并行推进长尾体验优化。

---

## 5. Bug 与稳定性 —— 今日报告/修复的缺陷（按严重度）

| 严重度 | Issue | 状态 | 关联 PR | 说明 |
|--------|-------|------|---------|------|
| **P1 (数据丢失风险)** | [#98300](https://github.com/NousResearch/hermes-agent/issues/98300) 0 字节 `state.db` 被误判为健康 | **Open (PR #98300 已提交)** | #98300 | 已有修复 PR，需尽快合并入主分支 |
| **P2 (功能失效)** | [#54922](https://github.com/NousResearch/hermes-agent/issues/54922) `extra_body` 网关路径丢失 | **Closed** | 隐性修复 | 已验证 CLI 与网关行为一致 |
| **P2 (功能失效)** | [#64926](https://github.com/NousResearch/hermes-agent/issues/64926) 技能文件不可只读 | **Closed** | 隐性修复 | 新增只读配置项，满足平台化部署 |
| **P2 (功能失效)** | [#93068](https://github.com/NousResearch/hermes-agent/issues/93068) macOS 既有 Chrome 配置授权冲突 | **Closed** | 隐性修复 | 统一授权与恢复路径 |
| **P2 (消息丢失)** | [#93911](https://github.com/NousResearch/hermes-agent/issues/93911) Desktop relay 30s 超时丢弃 `bot_relay.deliver` | **Closed** | 隐性修复 | 延长/可配置超时，保护长耗时 Computer Use 任务 |
| **P2 (审批卡死)** | [#98292](https://github.com/NousResearch/hermes-agent/issues/98292) QQBot 命名会话审批按钮被拒 | **Open** | [#98296](https://github.com/NousResearch/hermes-agent/pull/98296) | PR 已提交，待审核合并 |
| **P2 (会话状态)** | [#98228](https://github.com/NousResearch/hermes-agent/issues/98228) Telegram 重连后进度编辑/清理使用已退役适配器 | **Open** | 无 | 需在重连路径中绑定新适配器引用 |
| **P2 (Cron 审计缺失)** | [#96391](https://github.com/NousResearch/her

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-30

> **数据来源**：GitHub `sipeed/picoclaw` 仓库近 24 小时动态（Issues、PRs、Releases）  
> **统计窗口**：2026-08-29 00:00 – 2026-08-30 00:00 (UTC)

---

## 1. 今日速览
- **整体活跃度：低-中等**。过去 24 小时无新版本发布，Issue 端仅 1 条活跃（实为 8 天前创建的 Stale Bug 近期更新），PR 端有 3 条动态（1 个新增 i18n PR，2 个 Stale PR 被关闭）。
- **核心进展**：合并/关闭了两个长期搁置的 PR（#3315 Telegram 私聊 Topic 支持、#3337 MCP 失败导致 Agent 循环挂起修复），清理了技术债；新增 1 个捷克语本地化补全 PR（#3348）待评审。
- **风险点**：#3343 报告的 Telegram 编辑消息风暴（22.8 万次/天）已触发服务端限流，**属严重可用性 Bug**，目前无对应 Fix PR，需优先排查动画重试逻辑。
- **社区信号**：贡献者侧重于边缘场景兼容（Telegram Topic、MCP 容错）与多语言完善，核心循环稳定性仍有隐患。

---

## 2. 版本发布
> **无新版本发布**。当前最新 Release 仍为历史版本，建议维护者在修复 #3343 后切一条 `patch` 版本。

---

## 3. 项目进展（合并/关闭的重要 PR）

| PR | 标题 | 状态 | 核心变更 | 对项目推进度 |
|----|------|------|----------|--------------|
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | **CLOSED (stale)** | 修复 Telegram 私聊机器人启用 Forum Topic 模式下的消息识别：不再依赖 `Chat.IsForum`，改用 `IsTopicMessage` 与 `MessageThreadID`。 | ✅ 补全 Telegram Bot API 边缘场景兼容性，消除私聊 Topic 消息丢失风险。 |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | **CLOSED (stale)** | `AgentLoop.Run` 在 `ensureMCPInitialized` 报错时不再直接退出循环，改为记录错误并继续服务，避免整个聊天界面假死。 | ✅ **关键稳定性修复**：MCP 服务不可用不再导致全局 Agent 停摆，提升容错边界。 |

> **小结**：两个 Stale PR 被集中清理，说明维护者正在回收技术债，但均标记为 `stale` 关闭而非合并，**实际代码是否已落入主分支需复核 Commit 记录**。

---

## 4. 社区热点

| 对象 | 类型 | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Issue (Bug) | 👍 0 · 评论 1 · 更新 2026-08-29 | **Telegram `editMessageText` 疯狂重试**：工具反馈动画在 Turn 失败后仍每 3 秒发起编辑，累计 22.8 万次，触发 `retry_after` 限流。用户要求：失败即停止动画、指数退避、上限熔断。 |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | PR (i18n) | 👍 0 · 评论 0 | 补全捷克语代码块包装标签（`code_wrap_start/end`），完善本地化覆盖率。 |

> **分析**：#3343 虽互动量低，但**影响面广（所有 Telegram 用户）、可复现性强、已造成实质性服务降级**，属典型“静默严重 Bug”，应置顶优先级。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 现象 | 是否有 Fix PR | 备注 |
|--------|----------|------|---------------|------|
| **P0 - 严重** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Tool feedback animation 无限轮询 `editMessageText`，导致 Telegram 限流、资源耗尽 | ❌ 无 | 需在动画任务中引入：`maxRetries`、`exponentialBackoff`、Turn 结束信号取消机制。 |
| P1 - 主要 | [#3337](https://github.com/sipeed/picoclaw/pull/3337) (已关闭) | MCP 连接失败导致 AgentLoop 彻底退出 | ✅ PR 存在但标记 Stale Closed | 需确认修复是否已 cherry-pick 到主分支；若未合并需重新提交。 |
| P2 - 次要 | [#3315](https://github.com/sipeed/picoclaw/pull/3315) (已关闭) | 私聊 Bot Topic 消息未被识别 | ✅ PR 存在但标记 Stale Closed | 同理，需确认落地情况。 |

---

## 6. 功能请求与路线图信号
| 来源 | 需求描述 | 关联 PR/Issue | 纳入下一版本可能性 |
|------|----------|---------------|---------------------|
| 贡献者 KrtCZ | 捷克语代码块标签本地化补全 | [#3348](https://github.com/sipeed/picoclaw/pull/3348) | **高** —— 纯文案变更，CI 过即可合并。 |
| Issue #3343 隐性需求 | 动画/重试通用熔断框架（非仅限 Telegram） | 无 | **中** —— 需架构级重构，建议纳入 vNext 里程碑。 |
| PR #3315/3337 隐性需求 | 更完善的 Telegram Bot API 8.0+ 新特性兼容矩阵 | 无 | **低** —— 按需修补即可。 |

---

## 7. 用户反馈摘要
- **痛点**：Telegram 场景下，Agent 执行失败后界面仍显示“思考中”动画且持续数天，用户感知为“卡死”，实则后端疯狂请求 API 导致限流。
- **使用场景**：私聊 Bot + Forum Topic 模式、MCP 服务间歇性不可用的生产环境。
- **满意点**：社区对多语言（i18n）响应快，捷克语 PR 当天即提交。
- **不满点**：Stale 机制导致有效修复 PR 被自动关闭，缺乏人工复核流程，可能引入回归。

---

## 8. 待处理积压（需维护者关注）

| 对象 | 类型 | 停滞时长 | 关注理由 | 建议动作 |
|------|------|----------|----------|----------|
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Bug | 8 天 (创建) / 1 天 (更新) | P0 级生产事故隐患，无 Fix PR | **立即指派/认领**，输出 Fix PR 并回溯至最新稳定分支。 |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | PR | 27 天 | 已编写完整修复及测试，被 Stale Bot 误关 | **人工 Review**，确认无冲突后合并或重新打开。 |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | PR | 15 天 | 核心稳定性修复，同因 Stale 关闭 | 同上，优先级高于 #3315。 |
| 无 | CI/CD | 长期 | Stale Bot 直接关闭而非标记 `stale` label，导致有效贡献流失 | 调整 `.github/stale.yml`：`days-before-stale: 60`、`days-before-close: 14`，且 `exempt-all-assignees: true`。 |

---

## 📌 给维护者的行动清单（Action Items）
1. **今日必做**：针对 #3343 创建 Hotfix 分支，实现“动画任务绑定 Turn 生命周期 + 指数退避 + 最大重试次数”。
2. **本周内**：人工复核 #3315、#3337 代码质量，若通过 CI 直接合并至 `main` 并打 `vX.Y.Z+1` patch 版本。
3. **本月内**：调整 Stale Bot 策略，避免高质量社区贡献被误伤；补充 `AgentLoop` 级熔断/重试抽象，根治同类风暴问题。

---

*报告自动生成于 2026-08-30 06:00 UTC | 数据截止 2026-08-30 00:00 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

#  📋 NanoClaw 项目日报 | 2026-08-30

> **数据范围**：2026-08-29 00:00 - 2026-08-30 00:00 (UTC)  
> **数据源**：GitHub Issues / PRs / Releases 实时同步

---

## 1. 今日速览

*   **高强度工程冲刺日**：过去 24 小时合并/关闭 **30 个 PR**，新开 **15 个 PR**，合并率高达 66%，核心团队集中攻坚基础设施、Slack 适配器稳定性及 CI 治理体系。
*   **零版本发布，重内部建设**：无新 Release，核心精力投入 `container` 镜像构建健壮性、`.env` 解析一致性、PR/Issue 标准化流程（CI-04）等“强基”任务。
*   **Signal 集成暴露多个部署级阻塞**：社区贡献者 `IT-Sage` 连续提交 3 个高质量 Issue (#3669, #3670, #3671)，直指 `install-signal-cli.sh` 版本锁定、PATH 解析、专用号注册权限归属三大痛点，**建议纳入下一补丁版本优先解决**。
*   **Session DB 只读错误疑似生产事故**：Issue #3660 报告 SQLite 数据库只读导致全渠道消息投递失败，发起于 12 小时前，**尚无关联 Fix PR，需立即排查运维侧磁盘/权限/锁机制**。
*   **技术债偿还显著**：`gavrielc` 主导 8 个核心修复 PR 全部合并，覆盖 Slack 适配器模块缺失、配置默认值、容器重试、超时语义修正、占位符中性化等，代码库健康度提升明显。

---

## 2. 版本发布

> **今日无新版本发布**  
> 当前最新版本仍为历史版本，建议关注 `main` 分支合并节奏，预计积累至 30+ 修复后切 `v0.x.y` 补丁版。

---

## 3. 项目进展：核心合并 PR 深度解析 (30 Merged/Closed)

| PR | 类型 | 核心变更 | 影响面 | 关联 Issue |
| :--- | :--- | :--- | :--- | :--- |
| **[#3668](https://github.com/nanocoai/nanoclaw/pull/3668)** | **Hotfix** | 修复 `add-slack` 技能安装缺失 `slack-raw-text.ts` 导致 TS 编译失败 | **所有 Slack 适配器部署** | 由 #3666 引入回归 |
| **[#3667](https://github.com/nanocoai/nanoclaw/pull/3667)** | **Hotfix** | `add-slack` 技能同步拷贝 `slack-raw-text.ts` 至目标工程 | 部署流程 | 同 #3668 |
| **[#3666](https://github.com/nanocoai/nanoclaw/pull/3666)** | **Feature** | Slack 适配器新增“粘贴表格原文恢复”能力，依赖 `extractRawText` Hook | Slack 渠道消息富文本还原 | 依赖 #3665 |
| **[#3665](https://github.com/nanocoai/nanoclaw/pull/3665)** | **Core** | `chat-sdk-bridge` 开放 `extractRawText` 钩子，保留 `message.raw` 供下游二次提取 | **所有 Chat SDK 渠道扩展点** | 基建 |
| **[#3664](https://github.com/nanocoai/nanoclaw/pull/3664)** | **Feature** | 新增 `NANOCLAW_DEFAULT_MODEL` / `NANOCLAW_FAST_MODE` 两个全局环境变量 | 多 Agent 群模型统一、成本控制 | 配置层 |
| **[#3663](https://github.com/nanocoai/nanoclaw/pull/3663)** | **Chore** | 文档/示例/测试固件中维护者实名替换为中性占位符 | 开源合规、用户首印象 | 无 |
| **[#3662](https://github.com/nanocoai/nanoclaw/pull/3662)** | **Fix** | 预任务脚本超时错误码区分：不再泛化为 "Command failed" | 任务编排可观测性 | 无 |
| **[#3661](https://github.com/nanocoai/nanoclaw/pull/3661)** | **Reliability** | Dockerfile `RUN curl ... | bash` 新增 **自动重试** 逻辑，规避 Bun 官网抖动 | **镜像构建成功率** | 无 |
| **[#3659](https://github.com/nanocoai/nanoclaw/pull/3659)** | **Fix** | 统一双 `.env` 解析器对引号值的处理行为 (`TZ="Asia/Shanghai"` 等) | 配置加载一致性 | 无 |
| **[#3655](https://github.com/nanocoai/nanoclaw/pull/3655)** | **Fix** | `ncl tasks update` 拒绝空 `--prompt`，避免误覆盖 | CLI 交互安全 | 无 |

> **进展量化**：核心团队 `core-team` 标签 PR 合并 **12 个**，社区贡献合并 **3 个**（含 #3655, #3364 Context.dev 技能, #3545 Slack 房间移交），其余为自动化/文档/依赖更新。**Slack 适配器从“编译不通过”到“表格恢复/房间移交”单日闭环，工程响应速度极快。**

---

## 4. 社区热点：高互动 / 高关注议题

| 排名 | 项目 | 标题 | 互动/信号 | 核心诉求分析 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **[Issue #3671](https://github.com/nanocoai/nanoclaw/issues/3671)** | `install-signal-cli.sh` 锁定 0.14.3 导致新会话建立**永久挂起** | 新开 0 评论，但 **技术细节极全**，附上游修复版本 0.14.7 | **生产阻塞级**：用户无感知挂起，无超时、无报错。需立即升级脚本版本锁，或提供可选版本参数。 |
| **2** | **[Issue #3670](https://github.com/nanocoai/nanoclaw/issues/3670)** | 专用号注册模式下 `owner` 绑定到 Bot 自身，审批卡片发给自己 **无人看管** | 新开 0 评论，逻辑链条清晰 (`signal-auth.ts` 归属判断缺陷) | **架构缺陷**：文档宣称的“Alternatives”路径实不可用。需修正 `owner` 解析逻辑，绑定至操作员而非 Bot 账号。 |
| **3** | **[Issue #3669](https://github.com/nanoclaw/nanoclaw/issues/3669)** | `signal-auth` 非登录 Shell 下找不到 `~/.local/bin/signal-cli`，向导错误落回二维码绑定 | 新开 0 评论，定位精准 (`cliPath()` 依赖 `SIGNAL_CLI_PATH` 或登录 Shell PATH) | **安装体验断层**：非交互式部署（CI/CD、systemd、Docker）必现。建议安装脚本写入 `/etc/profile.d/` 或强制要求 `SIGNAL_CLI_PATH`。 |
| **4** | **[Issue #3660](https://github.com/nanocoai/nanoclaw/issues/3660)** | **Session DB 只读错误阻断所有出站消息** (Discord 等) | 新开 0 评论，**发生于 12 小时前**，堆栈指向 `better-sqlite3` | **疑似 P0 事故**：无 Fix PR，无人 Claim。需排查：磁盘满、只读挂载、WAL 模式锁残留、容器卷权限漂移。建议立即建立 Incident 跟踪。 |
| **5** | **[PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646)** | `host-sweep` 30 分钟硬编码上限改为可配置 | 活跃更新至 8-30，`core-team` 标签 | 运维侧需求：不同负载集群需要差异化清理窗口。 |

---

## 5. Bug 与稳定性：严重度分级

| 严重度 | 编号 | 标题 | 状态 | 是否有 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0 (生产停摆)** | **[#3660](https://github.com/nanocoai/nanoclaw/issues/3660)** | Session SQLite 数据库只读，全渠道消息投递失败 | **Open** | ❌ 无 | **最优先处理**；建议运维立即检查磁盘/挂载/锁文件，代码侧考虑增加只读检测降级/告警。 |
| **P1 (核心功能失效)** | **[#3671](https://github.com/nanocoai/nanoclaw/issues/3671)** | Signal 新会话建立永久挂起 (upstream bug 0.14.3) | **Open** | ❌ 无 | 升级 `install-signal-cli.sh` 至 `0.14.7+` 即可修复，建议今日内合入。 |
| **P1 (核心功能失效)** | **[#3670](https://github.com/nanocoai/nanoclaw/issues/3670)** | Signal 专用号模式审批卡片发送给 Bot 自身 | **Open** | ❌ 无 | 需修改 `signal-auth.ts` 归属判断逻辑，涉及安全模型，需核心成员 Review。 |
| **P2 (部署/安装受阻)** | **[#3669](https://github.com/nanocoai/nanoclaw/issues/3669)** | 非登录 Shell 找不到 signal-cli，向导逻辑跑偏 | **Open** | ❌ 无 | 修复成本低：安装脚本输出 `SIGNAL_CLI_PATH` 或写入系统级 PATH。 |
| **P3 (已修复回归)** | **[#3668](https://github.com/nanocoai/nanoclaw/pull/3668)** | Slack 适配器安装缺失模块导致 TS 编译失败 | **Merged** | ✅ #3668/#3667 | 已在 8-29 合并，影响仅限 `add-slack` 技能安装后的首次构建。 |
| **P3 (已修复回归)** | **[#3661](https://github.com/nanocoai/nanoclaw/pull/3661)** | Docker 构建因 Bun 安装器网络抖动失败 | **Merged** | ✅ #3661 | 已加重试逻辑，提升镜像构建鲁棒性。 |

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/进展 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **[Issue #3643](https://github.com/nanocoai/nanoclaw/issues/3643)** (via PR #3646) | `host-sweep` 绝对轮转上限 (30min) 硬编码 → 可配置 | **[PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646) Open** | **高** | 已有 PR 且遵循指南，核心团队标签，预计近期合并。 |
| **社区贡献** | **Context.dev MCP 集成技能** | **[PR #3364](https://github.com/nanocoai/nanoclaw/pull/3364) Open (8-20创建)** | **中** | 标记为 `Operational/container skill`，已挂 10 天，需 Reviewer 关注。 |
| **核心团队** | **CI-04 标准化流程**：PR Template v2、自动打标、Issue Forms | **[PR #3647](https://github.com/nanocoai/nanoclaw/pull/3647)**, **[#3648](https://github.com/nanocoai/nanoclaw/pull/3648)**, **[#3657](https://github.com/nanocoai/nanoclaw/pull/3657)**, **[#3644](https://github.com/nanocoai/nanoclaw/pull/3644)** 全部 **Open** | **高** | 4 个联动 PR 同步推进，目标消除人工分拣成本，属于“内部效能”里程碑。 |
| **核心团队** | **全局默认模型 / 快速服务分级** | **[PR #3664](https://github.com/nanocoai/nanoclaw/pull/3664) Merged** | **已入主干** | `NANOCLAW_DEFAULT_MODEL` / `NANOCLAW_FAST_MODE` 已生效，下版本即可用。 |
| **核心团队** | **Slack 粘贴表格原文恢复 / 房间显式移交** | **[PR #3666](https://github.com/nanocoai/nanoclaw/pull/3666)**, **[#3545](https://github.com/nanocoai/nanoclaw/pull/3545)** | **高** | #3666 已合并依赖链，#3545 待合并，Slack 体验大幅增强。 |

---

## 7. 用户反馈摘要：真实痛点与场景

> **数据来源**：Issue 描述、PR 讨论、Commit Message 隐性信息

1.  **Signal 集成“文档与实现严重脱节”** (来自 `IT-Sage` 连环 3 Issue)  
    *   **场景**：生产环境部署专用号 Signal Bot，期望获得独立身份与审批流。  
    *   **痛点**：① 版本锁死含已知阻塞 Bug (0.14.3)；② 安装路径未进系统 PATH，非交互部署必死；③ 权限模型设计缺陷导致审批卡片“自发自收”。  
    *   **潜台词**：“Alternatives” 文档路径未经过真实验收，**建议核心团队补全 E2E 测试覆盖此路径**。

2.  **Session DB

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-30

> **数据基准**：GitHub 过去 24 小时（2026-08-29 至 2026-08-30）增量数据  
> **项目地址**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

- **整体活跃度：低（维护停滞期）**。过去 24 小时无版本发布、无 PR 合入、无 Issue 关闭，代码库处于“零交付”状态。
- **在途工作量堆积**：现有 **5 个 OPEN PR** 与 **1 个 OPEN Issue** 全部打上 `[stale]` 标签，且创建于 2026-03-31，最近更新于 2026-08-29，疑似为机器人定期唤醒或批量打标，而非真实研发推进。
- **交付管道阻塞**：5 个 PR 涵盖协作报错高亮、技能快捷创建、Agent 图标修复、定时任务 UX、团队配置导入导出等完整特性，均停留在“待审核”超 5 个月，Code Review 与合并流程疑似中断。
- **社区互动沉寂**：所有条目评论数为 0 或 undefined，👍 数均为 0，缺乏外部贡献者参与与内部维护者响应。
- **健康度预警**：长周期积压 + 零合入 + 零释出，项目处于**维护真空期**，需立即排查 CI/CD、Review 机制或人力分配问题。

---

## 2. 版本发布

**无新版本发布**。上一个 Release 信息缺失，建议确认最近稳定版本号与发布节奏，评估是否需要切版本清理积压 PR。

---

## 3. 项目进展

**今日合并/关闭 PR：0 个**  
**今日关闭 Issue：0 个**  

> **结论**：项目在代码交付层面**零前进**。5 个功能型 PR（含 1 个 Bugfix）均已实现完毕并停留就绪态超 150 天，若合并可立即带来：Cowork 容错体验提升、技能创建入口补全、Agent 图标一致性修复、定时任务可观测性增强、团队配置可迁移能力。当前阻塞点不在开发，而在**审批与发布决策**。

---

## 4. 社区热点

| 排名 | 标题 | 类型 | 更新时间 | 互动 | 核心诉求 |
|------|------|------|----------|------|----------|
| 1 | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) 重名 Agent 切换后任务记录丢失 | Issue | 2026-08-29 | 💬1 / 👍0 | **数据一致性缺陷**：创建同名 Agent 导致状态机与持久化不同步，需“切出再切入”才能恢复，严重影响多 Agent 管理流程。 |
| 2 | [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) Cowork: 工具报错高亮 + 跳转最新按钮 | PR | 2026-08-29 | 💬0 / 👍0 | **可观测性增强**：工具调用失败时红色高亮 + 一键定位，降低调试认知负荷。 |
| 3 | [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) 技能管理页：快捷创建技能入口 | PR | 2026-08-29 | 💬0 / 👍0 | **入口发现性优化**：从技能列表直达 Cowork 并预填 skill-creator，缩短“想法→可用技能”路径。 |
| 4 | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) 修复 Agent 默认图标不一致 | PR | 2026-08-29 | 💬0 / 👍0 | **UI 一致性修复**：侧边栏 🦞 与我的 Agent 页 🤖 双标准，根因 `icon.trim() \|\| undefined` 丢失默认值。 |
| 5 | [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) 定时任务：展示最近执行时间 + 运行态反馈 | PR | 2026-08-29 | 💬0 / 👍0 | **运维可视化补齐**：列表页直接看最后执行时间，避免逐个点进详情。 |
| 6 | [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) 设置：团队配置模板导入导出 | PR | 2026-08-29 | 💬0 / 👍0 | **团队协作标准化**：一键导出/导入 UI、模型默认、Provider、Cowork 选项、技能开关，支撑多环境同步。 |

> **热点分析**：唯一有评论的 #1139 暴露**核心状态管理 Bug**，且无对应 Fix PR，建议优先指派排查。其余 5 PR 均为“低风险、高体验值”改动，合并成本极低，长期搁置属于典型 **Review 瓶颈**。

---

## 5. Bug 与稳定性

| 严重度 | 编号 | 标题 | 状态 | 关联 Fix PR | 影响范围 |
|--------|------|------|------|-------------|----------|
| **P1 - 数据不一致** | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | 重名 Agent 切换后任务记录丢失 | OPEN | **无** | 多 Agent 场景下历史对话不可见，需手动规避（切出切入），用户信任度受损。 |
| **P2 - UI 不一致** | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | 创建 Agent 默认图标侧边栏与列表页不一致 | OPEN (PR 就绪) | **#1143 自身** | 视觉割裂，非功能阻断，但降低产品成熟度感知。 |

> **稳定性结论**：当前已知 Bug 仅 2 个，均非崩溃/安全类，**但 P1 级 Bug 缺乏 Fix PR 超 5 个月**，暴露问题跟踪与修复闭环失效。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 已有 PR 覆盖 | 纳入下版本概率 | 备注 |
|----------|----------|--------------|----------------|------|
| **内部 PR #1138** | Cowork 调试体验：错误高亮、锚点跳转 | ✅ #1138 完整实现 | **高**（纯前端、无破坏性） | 审阅通过即可合入 |
| **内部 PR #1142** | 技能创建入口前置，降低门槛 | ✅ #1142 完整实现 | **高**（交互补全） | 依赖 Cowork 页面稳定性 |
| **内部 PR #1144** | 定时任务列表页可观测性 | ✅ #1144 完整实现 | **高**（仅增量字段） | 无后端变更 |
| **内部 PR #1145** | 团队配置模板化、可迁移 | ✅ #1145 完整实现 | **中**（涉及 IPC 新增、导入校验） | 需安全评审导入逻辑 |
| **Issue #1139** | 重名 Agent 状态同步修复 | ❌ 无对应 PR | **不确定** | 需先定位根因（State/Storage/Router），再评估工期 |

> **路线图推断**：若维护团队恢复 Review，下一版本（vNext）极大概率包含 **#1138, #1142, #1143, #1144** 四个低风险 PR；**#1145** 需额外安全测试；**#1139** 需独立排期修复。

---

## 7. 用户反馈摘要

- **唯一有效反馈来自 #1139 作者 @tzhouzhou**：
  - **场景**：多 Agent 迭代开发中频繁“删旧建新同名 Agent”。
  - **痛点**：新建同名 Agent 后，系统自动切换至新实例但**任务记录为空**；必须手动切换到别的 Agent 再切回，才能触发数据加载。
  - **隐含诉求**：期望“创建即可用”的原子性体验，而非需手动干预的最终一致性。
  - **情绪**：客观复现步骤 + 截图，无情绪化表达，属于**高质量 Bug Report**。

> **社区声音极度稀缺**：除作者外无讨论、无点赞、无外部复现，说明**用户反馈渠道未激活**或**用户基数处于低位**。

---

## 8. 待处理积压（Action Required）

| 优先级 | 条目 | 滞留时长 | 处理建议 | 责任方建议 |
|--------|------|----------|----------|------------|
| **🔴 Critical** | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) Agent 记录丢失 | ~153 天 | 1. 指派 Owner 复现定责（State/Router/Storage）<br>2. 产出 Fix PR 并加入下一发布 | 核心维护者 / Tech Lead |
| **🟠 High** | [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) / [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) / [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) / [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) | ~153 天 | **批量 Review + 合并**：均为低风险 UI/UX 改动，建议单次 Review 会议全部通过，清理积压。 | Maintainer / Reviewer |
| **🟡 Medium** | [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) 团队配置导入导出 | ~153 天 | 补安全评审（导入校验、权限、版本兼容），通过后合入。 | Security Reviewer + Maintainer |
| **🟢 Process** | **Stale 机制失效** | 持续 | 1. 审计 `stale` bot 配置：为何已更新仍标 stale？<br>2. 建立 **SLA**：PR > 7 天无 Review 自动升级/指派。<br>3. 设置每周例会清理积压。 | Repo Admin / PM |

---

## 📌 给维护团队的三条建议

1. **立即召开“秩压清理会”**（30 分钟）：逐个过遍 5 个 PR，除 #1145 需安全评审外，其余**当场合并**；同步建立 #1139 修复子任务。
2. **修复 Stale Bot 误判**：当前“更新于 8-29 却打 stale 标签”会干扰优先级判断，建议调整为“30 天无人类评论才标记”。
3. **恢复发布节奏**：即使无大特性，亦建议双周切 **Patch 版本**（如 v0.x.y），将合并的 PR 快速交付用户，重建“持续交付”信心。

---

*报告生成时间：2026-08-30 06:00 UTC | 数据来源：GitHub REST API / GraphQL 增量同步*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-30

---

## 1. 今日速览
- **整体活跃度：低**。过去 24 小时仅新增 1 个 Issue（#1246），无 PR 活动，无版本发布。
- **核心动态**：用户报告在节点添加后无法在 Sandbox 环境运行，属于阻塞性 Bug，但尚无社区讨论或修复 PR。
- **项目健康度**：当前处于维护静默期，Issue 积压处理速度为零，需关注核心维护者响应时效。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
> 过去 24 小时无 PR 合并或关闭，项目代码库无实质性推进。

---

## 4. 社区热点
| Issue/PR | 标题 | 反应/评论 | 分析 |
| :--- | :--- | :--- | :--- |
| **[#1246](https://github.com/moltis-org/moltis/issues/1246)** | **[Bug]: can't run on sandbox after a node is added** | 👍 0 / 评论 0 | **唯一热点**。用户 `maop` 提交完整复现步骤，涉及节点动态添加后 Sandbox 执行失败，疑似状态同步或隔离机制缺陷。当前零互动，属“静默阻塞型”问题，若 48h 无响应将影响用户信心。 |

---

## 5. Bug 与稳定性
| 严重程度 | Issue | 现象 | 影响范围 | Fix PR 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **High (P1)** | **[#1246](https://github.com/moltis-org/moltis/issues/1246)** | 节点添加后 Sandbox 无法运行 | 核心编排/沙箱功能，阻断动态拓扑场景 | **无** |

> **风险提示**：该 Bug 触及节点生命周期管理与沙箱隔离核心路径，建议维护者优先排查 `node added` 事件对 Sandbox Runtime 状态的污染。

---

## 6. 功能请求与路线图信号
> 过去 24 小时无新增 Feature Request，无 PR 暗示路线图变化。

---

## 7. 用户反馈摘要
- **痛点聚焦**：动态拓扑变更（添加节点）导致运行时环境失效，用户期望“即插即用”式的节点扩展能力。
- **使用场景**：涉及运行时动态调度节点的复杂 Agent 编排流程。
- **情绪倾向**：中性偏焦虑（提交了详细 Preflight Checklist，但 24h 无回应）。

---

## 8. 待处理积压提醒
| 对象 | 类型 | 停滞时长 | 建议动作 |
| :--- | :--- | :--- | :--- |
| **[#1246](https://github.com/moltis-org/moltis/issues/1246)** | Bug (P1) | ~48h (创建于 08-28) | **立即分派**：指定 Owner 复现并给出 Root Cause 分析；若需设计变更，请在 Issue 下发布临时 Workaround。 |
| *历史秺压* | - | - | 建议维护者执行 `stale` 机制清理，聚焦 P0/P1 存量。 |

---

> **数据来源**：GitHub REST API / GraphQL，统计窗口 2026-08-29 00:00 – 2026-08-30 00:00 (UTC)。  
> **下一期预告**：关注 #1246 是否产出 Fix PR，以及是否有 0..x / 1.0 里程碑相关 Issue 入选。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-08-30

> **数据来源**：GitHub `agentscope-ai/CoPaw` 仓库过去 24 小时活动（Issues、PRs、Releases）  
> **报告生成时间**：2026-08-30 08:00 UTC

---

## 1. 今日速览
- **活跃度评级**：🟢 **高** — 过去 24 小时新增/活跃 Issue 8 条、PR 7 条，无合并/关闭 PR，显示社区贡献热度高、审核流程处于“积压审核”状态。  
- **核心动向**：  
  1. **多租户 Hub 规划**（#7318）进入社区征集阶段，标志着项目从“个人助手”向“团队/企业级”演进的关键节点。  
  2. **MCP 遗留迁移导致凭证丢失**（#7301）与 **Ark Responses API 空文本块导致 400 错误**（#7402）两个高严重度 Bug 同日暴露，均阻断新会话，需优先修复。  
  3. 前端体验改进集中涌现：**聊天滚动锁定**（#7356）、**工具调用可见性切换**（#7357）、**主题配置诉求**（#7406），反映用户对 Desktop 客户端可用性的强烈期待。  
  4. 首次贡献者 PR 占比 2/7（~29%），社区入门门槛较低，但审核吞吐不足导致多条 PR 长期挂起（最早 #6874 已 20 天）。  

---

## 2. 版本发布
> **今日无新版本发布**。  
> 最近一次发布为 v2.1.0，下一里程碑 v2.2.0 将随多租户 Hub 一同推出（见 #7318）。

---

## 3. 项目进展
| PR | 状态 | 核心推进 | 备注 |
|----|------|----------|------|
| **无** | — | 过去 24 h **零合并/零关闭 PR** | 审核带宽成为瓶颈，7 条 OPEN PR 全处于“待审核/Under Review” |

> **整体进度判断**：代码库功能增量已就绪（滚动锁、工具调用切换、ACP Windows 启动修复、MCP 超时配置、长期记忆后端、图片尺寸校验、README 更新），但**交付节奏受限于审核吞吐**，建议维护者本周安排专门 “PR Triage Day”。

---

## 4. 社区热点
| 排名 | Issue/PR | 互动量 | 核心诉求 |
|------|----------|--------|----------|
| 1️⃣ | **#7318** [Discussion] QwenPaw Hub 多租户版规划 | 👍 1 · 💬 14 | 社区期待 **RBAC、技能市场、审计日志、SSO、计费/配额** 等企业级能力；作者明确征集优先级投票。 |
| 2️⃣ | **#7301** MCP 遗留迁移留空凭证引发 `CredentialNotFoundError` | 💬 3 | 阻断所有新会话，影响面广（所有从旧版升级的用户），急需回滚脚本或自动修复迁移。 |
| 3️⃣ | **#7402** Ark Responses API 空 `output_text` 导致 400 | 💬 1 | 卷积厂商 Ark 兼容性问题，回放历史即触发，建议在持久化层做非空校验或自动剔除。 |
| 4️⃣ | **#7406** 官方主题配置（强调色/字体/间距） | 💬 1 | 用户被迫修改 `.app` 内 `index.html` 维护定制，强烈要求 **配置键 + 设置页 + CSS 变量注入点**。 |
| 5️⃣ | **#7398** `/btw` 侧边提问命令（仿 Claude Code） | 💬 1 | 轻量上下文隔离需求，适合在不污染主会话的情况下快速追问。 |

---

## 5. Bug 与稳定性
| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0 阻断** | **#7301** MCP legacy migration → `CredentialNotFoundError` | 每次新建会话均失败 | 所有从 ≤2.1.x 升级且使用 MCP 的用户 | ❌ 无 |
| **P0 阻断** | **#7402** Ark Responses API 400 “MissingParameter: input.content.text” | 历史含空 `output_text` 的助手消息导致后续请求全灭 | 使用 Volcengine Ark / 兼容 Responses API 的用户 | ❌ 无 |
| **P1 严重** | **#7401 (PR)** Windows ACP agent 启动时事件循环被 `bootstrap_plugins()` 同步阻塞 | 启动挂起数分钟或完全无响应 | Windows 原生 ACP 用户 | ✅ **PR #7401** 已提交，待审核 |
| **P2 一般** | **#7220 (PR)** 超尺寸图片（如 10240×6400）绕过 2 MiB 限制导致冻结 | 仅检查字节数未校验像素上限 | 粘贴高压缩大尺寸图片的用户 | ✅ **PR #7220** 已提交，待审核 |
| **P3 轻微** | **#6770** Chrome 标签页生命周期不可配置 | 长任务导致标签页过早关闭/保留 | 需要精细控制浏览器行为的高级用户 | ❌ 无（已关闭，标记为 enhancement） |

---

## 6. 功能请求与路线图信号
| 需求 | 来源 | 关联 PR/进展 | 进入下版本 (v2.2.0) 概率 |
|------|------|--------------|----------------------------|
| **多租户 Hub（RBAC/技能市场/审计/SSO/计费）** | #7318 | 无 PR，处于 RFC 阶段 | 🟡 **中** — 明确标为 2.2.0 核心，但需社区投票定范围 |
| **可配置 MCP 工具调用超时** | #6874 | **PR #6874** Under Review 20 天 | 🟢 **高** — 代码完备，仅待合并 |
| **可插拔长期记忆** | #7080 | **PR #7080** Under Review 13 天 | 🟢 **高** — 实现 `BaseMemoryManager`，架构就绪 |
| **聊天滚动锁定 / 工具调用切换** | #7356, #7357 | **PR #7356, #7357** 均就绪 | 🟢 **高** — 前端体验类，审核成本低 |
| **官方主题系统** | #7406 | 无 PR | 🟡 **中** — 需设计 Token 体系，可能延至 2.2.1 |
| **`/btw` 侧边提问** | #7398 | 无 PR | 🔴 **低** — 新命令需 CLI/前端双端实现，优先级低于 Hub |
| **Console 暴露 `card_auto_layout`** | #7404 | 无 PR | 🟢 **高** — 仅补全 Console 配置项，工作量极小 |

---

## 7. 用户反馈摘要
| 痛点/场景 | 代表性引用 | 情感倾向 |
|-----------|------------|----------|
| **升级即坏** | “每次新会话都报 `CredentialNotFoundError`，完全不可用” (#7301) | 😡 极度负面 |
| **厂商兼容性差** | “Ark 返回 400，只能手动清理数据库里的空文本块” (#7402) | 😠 负面 |
| **Windows 原生体验差** | “ACP agent 启动卡死几分钟，以为崩了” (#7401) | 😟 负面 |
| **前端只读体验差** | “流式输出时根本看不了旧内容，滚动锁急需” (#7356) | 😐 中性-期待 |
| **定制化受限** | “每次更新都要改 `.app` 里的 `index.html`，太痛苦” (#7406) | 😠 负面 |
| **期待团队协作** | “希望 Hub 能有技能市场、审计日志、SSO” (#7318 评论区) | 😊 正面-建设性 |

---

## 8. 待处理积压（需维护者关注）
| 条目 | 停滞天数 | 优先级 | 建议行动 |
|------|----------|--------|----------|
| **PR #6874** `feat(mcp): configurable tool call timeout` | 20 天 | P1 | 指派 Reviewer 本周内合并，解锁 MCP 生产可用性 |
| **PR #7080** `feat: PowerContext long-term memory` | 13 天 | P1 | 同步审核，纳入 2.2.0 差异化卖点 |
| **PR #7220** `fix(media): reject oversized image dimensions` | 7 天 | P2 | 体积小、测试易通过，建议快速合并 |
| **Issue #7301** MCP 迁移凭证丢失 | 4 天 | **P0** | **立即组织热修复回滚脚本或自动修复迁移**，避免用户流失 |
| **Issue #7402** Ark 空文本块 400 | 1 天 | **P0** | 在 `session.persist` 阶段加入非空校验，或提供 `qwenpaw doctor` 清理命令 |
| **Issue #6770** Chrome tab lifetime configurable | 24 天 | P3 | 已关闭但标为 enhancement，建议在 Hub 规划中统一纳入“浏览器池管理” |

---

### 📌 给维护者的三条行动建议
1. **今日内合并 #6874、#7080、#7220、#7356、#7357、#7401** — 六个“高成熟度/低风险” PR 一次性清空，立即提升交付信心。  
2. **启动 #7301 / #7402 双 P0 热修复分支** — 目标 24 h 内出补丁镜像（Docker tag `v2.1.1-hotfix`），并在 Discord/公告栏通知升级路径。  
3. **本周三前锁定 #7318 Hub MVP 范围** — 依据社区投票（建议在 Issue 内加 Reaction 投票）输出 `HUB_MVP.md`，作为 2.2.0 里程碑基线。

---

> **下一期预告**：关注 v2.1.1 热修复发布情况、Hub MVP 方案定稿、以及首批首次贡献者 PR 合并后的社区活跃度变化。  
> **订阅方式**：Watch `agentscope-ai/CoPaw` → Custom → “Releases / Issues / Pull requests” 即可实时获取动态。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-30

---

## 1. 今日速览

ZeroClaw 今日保持**高强度工程迭代**态势：过去 24 小时无新版本发布，但 **50 条 PR 活跃更新**（其中 2 条已合并/关闭），**18 条 Issue 推进**（4 条关闭），呈现“重构与稳定性并行”特征。核心研发力量集中在 **安全加固（沙箱策略、Git Shell 策略、内存权限）**、**Provider 兼容性修复**、**跨平台 CI 能力建设（Windows 测试、CodeQL 路由）** 以及 **A2A 协议、持久化记忆、边缘网格** 等架构级 Tracker 的落地。社区讨论聚焦于 **RFC 级设计决策**（沙箱、家庭边缘网格）与 **生产级 Bug 修复**（Telegram 语音转写、OpenRouter 流式保活、ZeroCode SGR 鼠标报文）。项目整体健康度良好，技术债偿还与前瞻性架构演进同步推进。

---

## 2. 版本发布

**今日无新版本发布。** 当前稳定化线聚焦于 `v0.8.5`（见 Tracker [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)），入冻已于 8 月 4 日完成，按周切片交付就绪工作项。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR 与 Issue
| 编号 | 类型 | 标题 | 影响面 | 状态 |
|------|------|------|--------|------|
| [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | Bug | Deepgram/OpenAI 转写 Provider 静默丢弃 `language` hint，导致非英语语音笔记被跳过 | Channel(Telegram)、Provider | **Closed** |
| [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | Task | 移除孤儿 SkillForge 引擎，保留清单溯源兼容性 | Runtime、SkillForge | **Closed** |
| [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | Bug | Telegram 回复线程导致会话记忆按线程碎片化 | Channel(Telegram)、Memory | **Closed** |
| [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) | CI | Advisory 扫描失败：`chacha20 0.10.0` 被 yank | Dependencies、Security | **Closed** (修复 PR 进行中) |

### 🚀 核心在推 PR（高优/大体量）
| PR | 标题 | 关键变更 | 风险/规模 |
|----|------|----------|-----------|
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | `fix(config): harden Git shell policy arguments` | 统一命令词规范化，收敛可执行允许列表、Git 风险分类、环境变量赋值检查、工作区路径检查 | **High / XL** |
| [#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369) | `feat(runtime)!: bound skill HTTP egress` | Skill HTTP 工具全链路参数编码、目的地一次性解析验证、禁用环境代理/重定向、响应体上限 1 MiB | **High / M** |
| [#10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252) | `feat(memory): add category-scoped cross-agent grants` | 引入分类作用域的跨 Agent 记忆授权，兼容旧字符串条目，全读路径强制执行作用域 | **High / XL** |
| [#10094](https://github.com/zeroclaw-labs/zeroclaw/pull/10094) | `ci(memory): require PostgreSQL backend tests` | 将 PostgreSQL 记忆后端测试纳入必跑 CI，消除一次性本地验证依赖 | **High / S** |
| [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350) | `ci(tests): measure affected Windows tests on PR` | 新增仅度量的 Windows 测试作业，暂不阻塞合并，收集选项/耗时/缓存证据 | **High / XL** |
| [#10448](https://github.com/zeroclaw-labs/zeroclaw/pull/10448) | `fix(providers): add compatible tool-result image policy` | 增加 `tool_result_image_policy`，兼容拒绝 tool result 中 image block 的 OpenAI 兼容网关 | **Medium / M** |
| [#10442](https://github.com/zeroclaw-labs/zeroclaw/pull/10442) | `fix(providers): keep OpenRouter streams alive` | 专用 HTTP 客户端、连接建立 10s 超时、体读取静默 30s 上限 | **Low / M** |
| [#10440](https://github.com/zeroclaw-labs/zeroclaw/pull/10440) | `fix(zerocode): recover split SGR wheel input` | 重组 Crossterm 拆分的 SGR 滚轮报文，接入现有鼠标分发 | **Medium / M** |

> **整体推进度评估**：安全加固（Git Shell、Skill HTTP、内存权限）与 Provider 兼容性修复已进入审查尾声；Windows CI 与 CodeQL 路由（[#10348](https://github.com/zeroclaw-labs/zeroclaw/pull/10348)、[#10441](https://github.com/zeroclaw-labs/zeroclaw/pull/10441)）为长期工程质量奠基；Tracker 级大项（A2A、持久化记忆、Gemini Speech、v0.8.5 稳定化）按周切片稳步推进。

---

## 4. 社区热点

| 热度指标 | Issue/PR | 核心诉求 | 分析 |
|----------|----------|----------|------|
| 💬 **评论 16** / 🕒 持续 3 月 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) **RFC: Granular sandbox policy** | 统一应用层路径准入与 OS 沙箱后端，按 Agent 风险画像实现细粒度文件系统/网络限制 | **架构级安全决策**，需 Maintainer 仲裁，涉及 Bubblewrap/Landlock/Seatbelt 多后端一致性，风险标记 `risk:high` |
| 💬 **评论 14** / 🔄 今日更新 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue** | 集中管理 RFC/设计/发布策略等待决策项，避免隐性阻塞 | **治理流程显性化**，反映项目规模扩大后决策吞吐成为瓶颈 |
| 👍 **7** / 💬 **10** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) **Tracker: A2A protocol interoperability** | 原生支持 A2A v0.3+，实现 ZeroClaw 与 NanoClaw/OpenClaw/任意 A2A Agent 互通 | **生态互联核心需求**，社区关注度高，已纳入路线图 Tracker |
| 💬 **9** | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) **Tracker: Persistent memory parity** | 将跨会话持久化记忆子系统对齐成熟 Peer 运行时（策展/相关性/可操作三平面） | **长期记忆能力补齐**，多 PR 协同滚动交付 |
| 💬 **3** / 🕒 新开 5 天 | [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) **RFC: Household edge mesh** | 可选加入家庭边缘网格，Pull Worker + 签名收据，跨设备共享 CPU/RAM/GPU | **前瞻性架构探索**，`priority:p3` 但 `risk:high`，需安全模型深度论证 |

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 影响组件 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **S1 工作流阻断** | [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) | Anthropic-backed 兼容网关拒绝 tool result 中的 `image_url` block | Provider | ✅ [#10448](https://github.com/zeroclaw-labs/zeroclaw/pull/10448) (Open) |
| **S2 行为降级** | [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | `AgentEnd` 事件缺失 `cost_usd`，Channel 路径从不发射 `AgentEnd` | Channel、Observability | ❌ 无 |
| **S2 行为降级** | [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) | ElevenLabs TTS API Key 头未标记敏感，可能泄露至日志/追踪 | Channel、Security | ❌ 无 |
| **S2 行为降级** | [#10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437) | ZeroCode TUI 滚动时将 SGR 滚轮报文残留插入编辑器 | ZeroCode/TUI | ✅ [#10440](https://github.com/zeroclaw-labs/zeroclaw/pull/10440) (Open) |
| **Medium** | [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | 非英语 Telegram 语音笔记被静默丢弃（语言 hint 丢失） | Channel(Telegram)、Provider | ✅ 已关闭（推测随 Provider 修复合入） |
| **Medium** | [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | Telegram reply-thread 导致会话历史按线程分桶，丢失多轮上下文 | Channel(Telegram)、Memory | ✅ 已关闭 |
| **供应链** | [#10447](https://github.com/zeroclaw-labs/zeroclaw/issues/10447) / [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) | `chacha20 0.10.0` 被 yank，CI Advisory 扫描连续两天失败 | Dependencies、CI | 🔄 需 `cargo update -p chacha20` 并回归测试 |

> **稳定性信号**：S1 级 Bug 已有修复 PR 进入审查；供应链告警连续触发，建议尽快锁定 `chacha20` 版本并补齐依赖更新 PR；观测性缺口（`cost_usd`、敏感头标记）属于技术债积压，需纳入下周迭代。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/Tracker | 入版概率 (v0.8.5 / 后续) |
|----------|----------|-----------------|---------------------------|
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | `POST /webhook` 支持 `stream: true` + SSE 流式返回 Agent Loop Token | 独立 Issue | **高** — Hosted Path A 直接诉求，实现成本可控 |
| [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) | Gemini Live Speech-to-Speech Broker Channel 落地 | Tracker (Implementation batch) | **高** — 已通过政策投票 (#8780)，进入实施批次 |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | A2A 协议原生互通 | Tracker (长期) | **中** — 架构级，预计分阶段交付，v0.8.5 可能仅含框架 |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 持久化记忆三平面对齐 | Tracker (Epic) | **中高** — 7 个子项并行，部分 PR 已在审 ([#10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252)) |
| [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) | 家庭边缘网格 | RFC (p3) | **低 (v0.8.5)** — 需完整威胁建模，更可能落地 v0.9+ |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 细粒度沙箱策略 | RFC (p2, in-progress) | **中** — 安全基线，若 Maintainer 本周定论可赶 v0.8.5 |

---

## 7. 用户反馈摘要

> 从 Issue 评论与 Bug 报告中提炼的真实痛点：

| 场景 | 痛点原声 | 潜在改进方向 |
|------|----------|--------------|
| **Telegram 语音交互** | “意大利语语音笔记总是被静默丢弃，日志只显示 `Voice transcription returned empty text, skipping`” ([#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429)) | Provider 层强制透传 `language` hint；Channel

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*