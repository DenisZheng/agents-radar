# OpenClaw 生态日报 2026-08-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-21 00:55 UTC

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

# OpenClaw 项目日报 | 2026-08-21

---

## 1. 今日速览
- **活跃度极高**：过去 24 小时累计 **500 条 Issue 更新**（470 新开/活跃，30 关闭）与 **500 条 PR 更新**（360 待合并，140 已合并/关闭），项目处于密集迭代与缺陷修复并行期。  
- **零新版本发布**，但 **v2026.8.1-beta.2 正处于发布验证阶段**（Issue #125626），社区正在进行实测回归。  
- **核心痛点聚焦于稳定性**：P0 级网关启动失败（#108435）、文档超前发布（#48920）、SQLite 快照数据完整性（#113306）、僵尸进程泄漏（#97616）等阻塞性问题集中爆发。  
- **安全与合规加固持续推进**：多个已合并 PR 引入安装策略确认机制（#116489, #120900）并修复 OAuth 刷新回归（#125471）。  
- **技术债偿还明显**：针对 HTTP Chat 会话泄漏（#126616）、工具调用截断（#126611）、沙箱权限（#126775）等架构层面缺陷已有 P1 级修复 PR 进入审查。

---

## 2. 版本发布
**今日无正式版本发布**。  
当前处于 **v2026.8.1-beta.2 发布验证期**（[Issue #125626](https://github.com/openclaw/openclaw/issues/125626)），维护者要求测试者在真实网关上完成升级并填写验证工作表，预计近期将推送稳定版。

---

## 3. 项目进展（重要合并/关闭 PR 与推进中大项）

| PR | 标题 | 类型 | 影响面 | 状态 | 关键进展 |
|----|------|------|--------|------|----------|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | 安全/合规 | CLI/Web UI/插件安装 | **已关闭** | 引入 `warn` 级别安装策略，强制操作员确认可疑插件/技能安装，交互式 CLI 与 Web UI 均已适配。 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | 安全/UX | Control UI | **已关闭** | Web 端管理员可审查并确认安装策略警告，配合 `acknowledgeInstallPolicyWarning: true` 显式放行。 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | 认证/回归修复 | Gateway/Control UI | **已关闭** | 修复网关重启后遗留 `auth.profiles` 导致 Claude CLI OAuth 刷新失效的回归。 |
| [#126877](https://github.com/openclaw/openclaw/pull/126877) | fix(onboard): honor secret-input-mode ref for the generated gateway token | 安全/引导 | CLI/配置 | **已关闭** | `openclaw onboard --secret-input-mode ref` 现正确写入引用而非明文 token，消除 `doctor` 告警。 |
| [#126496](https://github.com/openclaw/openclaw/pull/126496) | fix(cron): preserve Codex trigger exec authority | 代理/定时任务 | Codex/Cron | **待合并** | 修复 Codex 触发的 cron 任务在触发评估时 `Unknown tool id: exec` 的权限回归。 |
| [#126537](https://github.com/openclaw/openclaw/pull/126537) | fix(agent-core): preserve accepted handoff in tool settlement catches | 核心/会话状态 | Agent Handoff | **待合并** | 修正 `sessions_yield` 主动移交后，工具结算路径错误吞噬中止信号导致的状态不一致。 |
| [#126775](https://github.com/openclaw/openclaw/pull/126775) | fix(sandbox): provision materialized skills mount target as sandbox user | 沙箱/权限 | Docker/Podman | **待合并** | 解决可写沙箱下技能挂载目标未预创建导致的权限错误。 |
| [#126616](https://github.com/openclaw/openclaw/pull/126616) | fix: HTTP chat binds one unbounded session from a constant OpenAI user | 网关/会话隔离 | HTTP API | **待合并** | 修复恒定 `user` 字段导致所有请求共享单一无界会话的严重泄漏。 |
| [#126619](https://github.com/openclaw/openclaw/pull/126619) | fix: HTTP chat still sends a full system prompt when tools.profile is minimal | 性能/HTTP API | Token 成本 | **待合并** | `tools.profile: minimal` 时不再注入完整系统提示，显著降低 TTFB 与 Token 消耗。 |
| [#126611](https://github.com/openclaw/openclaw/pull/126611) | fix: custom reasoning models truncate tool-call JSON at default 8192 maxTokens | 推理/工具调用 | 自定义模型 | **待合并** | 补齐 `maxTokens` 缺省回退，避免推理模型工具调用 JSON 被静默截断。 |

**整体推进评估**：核心安全合规特性已落地，HTTP API 会话隔离与 Token 成本优化进入最后审查，沙箱与代理层权限修复并行推进，预计 2-3 个工作日内可汇聚进下一个 RC。

---

## 4. 社区热点（高互动 Issue 深度解析）

| Issue | 评论/👍 | 核心诉求 | 代表性声音 | 关联 PR/标签 |
|-------|--------|----------|------------|--------------|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) Release validation v2026.8.1-beta.2 | 17 / 0 | **发布质量把关**：要求真实网关升级验证，收集回归数据 | 维护者 Patrick-Erichsen 发起结构化验证工作表，强调“保留网关名称、本地路径、凭证路径”以便复现 | `release-validation`, `maintainer` |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) Gateway fails to start after 2026.7.1 | 14 / 3 | **P0 启动崩溃**：systemd/ollama/手动启动均报 `gateway did not start on 127.0...` | 多用户确认回归，附带完整日志，怀疑端口绑定或健康检查逻辑变更 | `regression`, `P0`, `impact:crash-loop`, `issue-rating: 🦞 diamond lobster` |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) `Cannot convert undefined or null to object` with google-vertex/gemini-3.1-pro-preview | 14 / 3 | **提供商适配回归**：特定模型导致嵌入式代理全链路崩溃 | 用户提供最小复现步骤，指向模型响应解析路径的空指针解引用 | `regression`, `P1`, `impact:auth-provider` |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore lacks crash/identity guarantees | 12 / 0 | **数据完整性**：快照恢复报成功实则目录未持久化，身份守卫失效 | 详细分析父目录创建与 sidecar 身份校验的竞态，标记 `impact:data-loss` | `P1`, `impact:data-loss`, `issue-rating: 🦞 diamond lobster` |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) DeepSeek V4 Flash incomplete turn (payloads=0) | 11 / 1 | **模型输出异常**：OpenRouter 上 DeepSeek V4 Flash 出现零载荷、工具数=2 的不完整轮次 | 仅在 2026.5.27/28 复现，26 版本正常，疑似流式解析或 stopReason 处理回归 | `P2`, `impact:message-loss`, `issue-rating: 🦪 silver shellfish` |
| [#48920](https://github.com/openclaw/open

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-08-21）

---

## 1. 生态全景

当前生态呈现 **“头部项目密集攻坚稳定性，腰部项目差异化深耕垂类，尾部项目维持低频维护”** 的分层态势。  
核心基建层（网关、沙箱、会话持久化、多模型路由、插件/WASM 运行时）已成为各头部项目共同的 **技术债偿还主战场**；安全合规（安装策略确认、OAuth 回调治理、供应链锁定）、生产级可观测性（Token 核算、会话隔离、错误上下文保全）从“可选项”转为“发布门槛”。  
商业化落地路径显性化：Slack/Teams/钉钉一键部署、企业合规 Provider（Vertex AI、Bedrock）、付费 MCP 服务接入、Token 用量上报已成标配。  
社区协作模式趋同：RFC 治理显性化、核心团队主导 XL 级 PR 堆叠合并、Dependabot 自动化依赖升级成常态。  
整体健康度 **偏好**，但 Windows 桌面分发、长上下文存储膨胀、网络抖动自愈仍是跨项目共性痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release (24h) | 合并率 | 健康度评估 | 当前阶段 |
|------|--------------|-----------|---------------|--------|------------|----------|
| **OpenClaw** | 500 (470新/30关) | 500 (360待/140合) | 无 (β验证中) | 28% | 🟡 **高负荷攻坚** | 稳定性冲刺期 |
| **NanoBot** | 5 | 29 (12合) | 无 | 41% | 🟢 **高效迭代** | 生产级硬化期 |
| **Hermes Agent** | 50 (42新/8关) | 50 (46待/4合) | 无 | 8% | 🟠 **脆弱** | 热修复积压期 |
| **PicoClaw** | 3 | 8 (1合/5依赖) | 无 | 12% | 🔴 **低频维护** | 架构过渡期 |
| **NanoClaw** | 3 | 50 (35待/15合) | 无 | 30% | 🟢 **核心团队冲刺** | 技能生态硬化期 |
| **IronClaw** | 21 (17新/4关) | 33 (19待/14合) | 无 | 42% | 🟢 **多 Epic 并行** | v1.4.0 预备期 |
| **LobsterAI** | 2 (均 stale) | 6 (全合并) | 无 | 100% | 🟢 **里程碑式交付** | 内部驱动稳定期 |
| **Moltis** | 1 (关闭) | 4 (全合并) + 4 Open | 1 (20260820.01) | 100% | 🟢 **安全响应零延迟** | 通道成熟期 |
| **CoPaw (QwenPaw)** | 28 | 50 (22待/28合) | 1 (v2.1.1-β.1) | 56% | 🟢 **发布前冲刺** | 2.1 稳定化收尾 |
| **ZeroClaw** | 50 (45新/5关) | 50 (48待/2合) | 无 | 4% | 🟡 **架构重构并行** | 运行时插件化里程碑 |
| **NullClaw** | 0 | 0 | 0 | — | ⚪ **静默** | 休眠/私有化 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | — | ⚪ **静默** | 早期/实验期 |

> **合并率** = 已合并/关闭 PR ÷ 总 PR 更新数。  
> **阶段判定** 基于 PR 规模（XL 占比）、Issue 严重度分布、Release 节奏综合研判。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类头部对标 |
|------|----------|--------------|
| **规模与吞吐** | 单日 1k+ Issue/PR 变更，**生态量级最大**，核心维护者 + 社区贡献者双驱动 | NanoClaw/ZeroClaw/CoPaw 单日 ~100；Hermes 100 但合并率极低 |
| **技术路线** | **Go 单体网关 + 插件化技能 + SQLite 快照 + HTTP/WS 双协议**，强调“网关即控制面” | NanoBot：Python 异步优先，多渠道适配器丰富；ZeroClaw：Rust 运行时 + WASM 插件，强隔离；IronClaw：Rust 微内核 + Sidecar 代理 |
| **成熟度** | v2026.8.x β 验证，**生产级功能最全**（安装策略、OAuth 刷新、沙箱权限、HTTP 会话隔离、Token 成本优化同步落地） | 多数仍在核心架构重构（ZeroClaw 插件化、IronClaw 沙箱持久化、Hermes Windows 更新） |
| **社区治理** | 结构化 Release Validation、P0/Impact 标签体系、Diamond Lobster 评级、**流程最规范** | IronClaw 引入 Epic/Phase/RFC；ZeroClaw 建立决策队列；其余多为 Issue 驱动 |
| **短板** | 历史技术债集中爆发（网关启动、快照完整性、僵尸进程），**单日 P0 并发数最高** | NanoBot/CoPaw 单点修复更快；Moltis/LobsterAI 发布节奏更稳 |

**结论**：OpenClaw 是生态 **“事实标准制定者”** 与 **“压力测试场”**，其解决的问题（会话泄漏、快照一致性、安装策略）半年后将在其他项目以 PR 形式复现。

---

## 4. 共同关注的技术方向（跨项目高频诉求）

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **会话/状态持久化可靠性** | OpenClaw(#113306)、Hermes(#89293)、CoPaw(#7168)、ZeroClaw(#10068) | SQLite WAL 竞态、快照恢复身份守卫、history.db 膨胀去重、上下文截断根因修复 |
| **沙箱/运行时隔离与持久化** | OpenClaw(#126775)、IronClaw(#7732/#7779)、ZeroClaw(插件 WASM)、NanoClaw(容器配置注入) | 用户级持久沙箱、Sidecar 代理出站、权限最小化挂载、网络平面隔离 |
| **多模型路由与 Provider 适配层** | NanoBot(#5459 Vertex)、PicoClaw(#3331 ASR/#1158 Anthropic)、OpenClaw(推理模型截断)、ZeroClaw(#9809 多别名) | 企业合规 Provider 原生支持、统一工具调用截断兜底、模型别名/路由策略可配置 |
| **插件/技能 安全治理** | OpenClaw(#116489/#120900)、NanoClaw(技能安装体系)、ZeroClaw(#9582/#9584/#10146)、IronClaw(Hook 体系) | 安装策略确认、出站策略授予仪式、Hook 生命周期点、WASM 能力边界 |
| **桌面/容器分发与更新原子性** | Hermes(#86443/#44225/#90829)、CoPaw(打包)、LobsterAI(#1555 Mac 打包) | Windows 更新不丢可执行文件、Electron rebuild 熔断、Mac 签名/校验脚本兼容 |
| **可观测性与 Token 核算** | ZeroClaw(#9713)、NanoClaw(#3270)、LobsterAI(设置搜索)、OpenClaw(#126619) | 运行时 Token 用量上报、HTTP 最小画像、CLI 统计命令、设置面板可检索 |
| **网络抖动自愈与代理兼容** | NanoBot(#5444 Docker OAuth/#5425 socks://)、CoPaw(#6932/#6974)、Hermes(安装下载卡顿) | 容器化回调地址模板化、代理别名支持、连接池健康检查、重试策略统一 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构关键词 | 差异化护城河 |
|------|----------|----------|------------|--------------|
| **OpenClaw** | 企业级 AI 网关/控制平台 | 平台工程师、SRE、多租户 SaaS | Go 单体、插件技能、声明式安装策略 | 合规优先、多协议网关、生产级运维工具链 |
| **NanoBot** | 多渠道对话式 Agent 框架 | 全栈开发者、Bot 运营者 | Python Async、适配器模式（Slack/Telegram/Matrix）、MCP 优先 | 渠道广度、MCP 落地最快、付费 MCP 样板 |
| **Hermes Agent** | 桌面优先的自主编码 Agent | 个人开发者、高级用户 | Electron + Go 后端、Kanban 任务编排、ACP 协议 | 桌面原生体验、可视化任务编排、多供应商模型切换 |
| **ZeroClaw** | 安全优先的可扩展运行时 | 安全敏感型企业、插件生态建设者 | Rust、WASM 插件、能力本位安全、ACP 网关 | 零信任插件模型、Rust 内存安全、反模式治理体系 |
| **IronClaw** | 多租户托管 Agent 平台 | 云厂商、企业内部平台团队 | Rust 微内核、Sidecar 代理、设计系统、Storybook | 沙箱持久化架构、UI 组件治理、自动化运行手册 |
| **NanoClaw** | 技能市场驱动的 Agent 编排 | 低代码开发者、ISV | 技能注册表、容器化技能、一键 Slack 部署 | 技能即产品、商业化分发路径最短 |
| **CoPaw (QwenPaw)** | 通义大模型深度集成的 IDE 伴侣 | 阿里云/通义生态开发者 | Electron + Rust、Artifacts 渲染、Driver 并发初始化 | 模型原生能力解锁（GLM/Qwen）、编辑器级集成 |
| **LobsterAI** | 面向开发者的本地桌面助手 | 个人开发者、技术写作者 | Tauri/Rust、Write 工具预览、Redux 状态管理 | 产物可视化体验极致、内部团队高节奏交付 |
| **Moltis** | 隐私优先的个人知识助手 | 隐私敏感用户、自建部署者 | Go、Vault 加密存储、WhatsApp 深度适配 | 端到端加密 Vault、通道层安全基线高 |
| **PicoClaw** | 轻量级嵌入式/边缘 Agent | IoT/边缘设备开发者 | Go、最小依赖、Web UI 可选 | 二进制极小、交叉编译友好、资源受限环境可运行 |

---

## 6. 社区热度与成熟度分层

| 分层 | 项目 | 特征信号 |
|------|------|----------|
| **第一梯队：规模化生产级** | **OpenClaw、ZeroClaw、IronClaw、NanoClaw** | 日均 PR >30、XL 级架构 PR 并行、RFC/Tracker 治理显性、核心团队全职投入、企业采用案例公开 |
| **第二梯队：高效迭代/垂类领先** | **NanoBot、CoPaw、Moltis、LobsterAI** | 合并率 >40%、单日交付闭环（Issue→PR→Merge）、明确垂直优势（渠道、模型、隐私、体验）、发布节奏可预测 |
| **第三梯队：架构重构/技术债偿还期** | **Hermes Agent、PicoClaw** | 高 Issue/低合并率、P0 阻塞长期未根治、核心路径缺乏自动化回归、需集中火力修复基建 |
| **第四梯队：低频维护/早期探索** | **NullClaw、TinyClaw、ZeptoClaw** | 24h 无活动、依赖更新为主、文档/社区建设缺失、定位模糊或内部孵化中 |

> **关键判据**：合并率、XL PR 占比、P0 Issue 闭环时长、Release 节奏、核心维护者全职度。

---

## 7. 值得关注的趋势信号（对 AI 智能体开发者的参考价值）

| 趋势信号 | 证据项目 | 开发者行动建议 |
|----------|----------|----------------|
| **“安装策略确认”成合规基线** | OpenClaw、NanoClaw、ZeroClaw 同步落地 | 新建 Agent 平台**首周**即纳入插件/技能安装风险分级与用户确认流程，避免事后补丁成本 10x |
| **沙箱从“一次性容器”转向“持久 Sidecar + 代理”** | IronClaw(#7779)、OpenClaw(#126775)、ZeroClaw(WASM) | 设计沙箱 API 时预留 **持久卷挂载、出站策略注入、快照/恢复钩子** 三大扩展点 |
| **Token 核算下沉至运行时/网关层** | ZeroClaw(#9713)、Nano

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-21

---

## 1. 今日速览

**整体状态：高活跃度、以稳定性与多模态扩展为主线的并行迭代期。**

过去 24 小时，项目呈现**“Issue 驱动 PR、PR 即时响应”**的高效协作模式：5 个 Issue 中 3 个已有对应 Fix PR（其中 #5454 → #5455 已关联），2 个已关闭 Issue 伴随合并 PR（#5425、#5447）；29 条 PR 更新中 12 条已合并/关闭，合并率 41%，且多为 `fix`/`chore`/`test` 类，显示核心维护者正集中精力收敛技术债、补齐边界场景测试。WebUI 可观测性重构（#5420）、MCP SDK v2 迁移评估（#5179/#5180）、Telegram/Matrix/Slack 多渠道稳健性增强等大体量 PR 同步推进，表明项目正从“功能堆砌”转向“生产级可靠性与可扩展性”双轨演进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#5425](https://github.com/HKUDS/nanobot/pull/5425) **CLOSED** | `fix` | 支持 `socks://` 代理别名（兼容 `socks5://`/`socks5h://`） | 消除自定义 OpenAI 兼容提供商在企业代理环境下的连接阻断，拓宽部署兼容性 |
| [#5447](https://github.com/HKUDS/nanobot/pull/5447) **CLOSED** | `feat` | 集成 ScanPay x402 付费安全扫描 MCP 服务 | 首个“付费 MCP”商业化落地样板，验证 `x402` 微支付协议在 Agent 生态的可行性 |
| [#5452](https://github.com/HKUDS/nanobot/pull/5452) **CLOSED** | `feat(tui)` | TUI 退出时打印可直接复用的 `nanobot agent --session websocket:<id>` 命令 | 显著降低会话恢复门槛，提升 CLI 端用户留存 |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) **CLOSED** | `refactor(webui)` | 统一悬浮控件样式与语义（Menu/Popover/Combobox） | 为后续 WebUI 可观测性重构（#5420）奠定组件库基础 |
| [#5456](https://github.com/HKUDS/nanobot/pull/5456) **OPEN→MERGED** | `chore(deps)` | 移除未使用 `websocket-client`、显式声明 `certifi` | 精简依赖树，规避供应链风险 |
| [#5458](https://github.com/HKUDS/nanobot/pull/5458) **OPEN→MERGED** | `fix(matrix)` | 修正 Loguru 占位符 `%s` → `{}`，恢复错误上下文（文件名/房间 ID/Chat ID） | 恢复 Matrix 渠道可观测性，缩短排查 MTTR |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) **OPEN→MERGED** | `fix(agent)` | 释放已完成 `TaskGroup`，修复长运行 `AgentLoop` 内存泄漏 | 解决守护进程模式下的 OOM 隐患 |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) **OPEN→MERGED** | `fix(agent)` | 后台任务异常自动上报（含任务名/堆栈），取消静默吞噬 | 强化生产环境可观测性，符合 SRE 最佳实践 |

> **进度刻度**：核心稳定性指标（内存泄漏、异常静默、代理兼容、错误上下文丢失）单日清零 4 项；WebUI 与 MCP 两大战略模块均有里程碑级合并。

---

## 4. 社区热点 —— 高互动/高关注 Issue 与 PR

| 标的 | 互动指标 | 核心诉求 | 分析 |
|------|----------|----------|------|
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) **Bug: Docker 中 OAuth 登录 OpenAI 失败** | 👍0 / 评论 1 / 更新频繁 | `localhost:1455` 回调地址在容器网络不通，期望支持 `host.docker.internal` 或可配置 `redirect_uri` | **部署拓扑痛点**：Docker/Compose/K8s 场景下 OAuth 回调地址硬编码为 `localhost`，阻断容器化分发。建议在 Provider 配置 Schema 增加 `oauth_redirect_host` 字段。 |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) **Feature: 原生 Google Vertex AI Provider (Claude)** | 👍0 / 评论 0 / 新建即热 | 企业合规要求必须走 Vertex AI 托管 Claude，现有 Anthropic/OpenAI 兼容层均不满足 | **企业级落地刚需**：Vertex AI 需服务账号、区域、项目 ID 等差异化认证，建议复用 `#5453` SenseNova 接入模式，新增 `vertex` Provider 类并纳入 CI 矩阵。 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) **feat(webui): turn observability & safe recovery** | 评论最多（未披露具体数） | 将每轮对话投影为单一 Answer Surface，保留有序推理/工具/文件编辑轨迹；支持中断恢复 | **WebUI 核心重构**：解决长上下文、多工具调用、流式中断三大可用性难题。若通过 E2E 测试，将成 vNext 版本标志性交付。 |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) / [#5180](https://github.com/HKUDS/nanobot/pull/5180) **MCP SDK v2 迁移** | 长周期跟踪 / 冲突标记 | 评估 v2 高级 `Client` API 迁移成本，保留 SSE/stdio 双传输兼容 | **生态对齐关键路径**：MCP 协议演进加速，v1 维护即将停止。双 PR 并行评估（全量 vs 最小）显示团队审慎决策，预计下个里程碑合并。 |

---

## 5. Bug 与稳定性 —— 今日新报告 / 已跟踪

| 严重度 | Issue | 现象 | 已有 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 数据丢失风险** | [#5454](https://github.com/HKUDS/nanobot/issues/5454) | 流式输出中途出现 `server_error`（Codex `response.failed`），已输出内容后不再重试 | [#5455](https://github.com/HKUDS/nanobot/pull/5455) **OPEN** | 已定位至 `_TRANSIENT_ERROR_MARKERS` 缺失 `server_error`，补全后可覆盖流式前/后两类场景 |
| **P1 认证阻断** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) | Docker 环境 OAuth 回调 `localhost:1455` 不可达 | 无 | 需引入 `redirect_uri` 模板化或自动探测 `host.docker.internal` |
| **P1 连通性回归** | [#5425](https://github.com/HKUDS/nanobot/issues/5425) **CLOSED** | `socks://` 代理 URL 导致自定义 Provider 请求前置失败 | 已合并 | 兼容性修复已落地 |
| **P2 可观测性缺失** | [#5458](https://github.com/HKUDS/nanobot/pull/5458) **MERGED** | Matrix 错误日志占位符未渲染，关键上下文丢失 | 已合并 | 日志质量回升 |
| **P2 内存泄漏** | [#5430](https://github.com/HKUDS/nanobot/pull/5430) **MERGED** | 长周期 `AgentLoop` 累积空 `TaskGroup` | 已合并 | 守护进程场景必修 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 需求描述 | 关联 PR / 实现就绪度 | 纳入下版本概率 |
|----------|----------|----------------------|----------------|
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) Issue | **Vertex AI 原生 Provider (Claude)** | 无 PR，但 `#5453` SenseNova 提供完整模板（OpenAI-compat + 自定义端点/认证） | ⭐⭐⭐⭐⭐ 企业合规刚需，模板复用成本低 |
| [#5453](https://github.com/HKUDS/nanobot/pull/5453) PR | **SenseNova (商汤日日新) Provider** | **OPEN**，含 3 模型、配置样例、测试用例 | ⭐⭐⭐⭐ 国产厂商接入标杆，CI 通过即可合并 |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) PR | **Telegram 可复用 Sticker 回复** | **OPEN**，暴露 `file_id`/`emoji`/`set_name`，保留路由语义 | ⭐⭐⭐ 社交渠道体验增强，低风险 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) PR | **WebUI Turn 级可观测性与安全恢复** | **OPEN**，大体重构，涉及状态投影、用量累积、中断恢复 | ⭐⭐⭐ 核心交互重构，需充分回归，预计 vNext 里程碑 |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) PR | **MCP SDK v2 全量迁移 (兼容 v1)** | **OPEN**，冲突标记，含 `httpx2` 传输、SSRF/重定向/DNS Pinning 保留 | ⭐⭐⭐⭐ 生态硬依赖，评估分支 `#5180` 已跑通最小集，大概率合并 v2 完整版 |

---

## 7. 用户反馈摘要 —— 真实痛点与场景

| 来源 | 痛点 / 场景 | 情绪倾向 | 潜在机会 |
|------|-------------|----------|----------|
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) 评论 | “Docker Compose 部署时 OAuth 回调地址无法访问，手动改 `host.docker.internal` 才能跑通” | 😟 挫败 | 提供 `NANOBOT_OAUTH_REDIRECT_HOST` 环境变量或配置项，开箱即用容器化 |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) 描述 | “企业必须走 Vertex AI 托管 Claude，合规审计不允许直连 Anthropic” | 😐 刚性 | 原生 Provider + 服务账号认证流，打开大型企业入场券 |
| [#5425](https://github.com/HKUDS/nanobot/issues/5425) 评论 | “公司代理统一用 `socks://` 别名，纳管后 nanobot 直接报错” | 😟 阻断 | 已修复，建议在文档“网络配置”章节显性记录支持别名列表 |
| [#5452](https://github.com/HKUDS/nanobot/pull/5452) 合并后隐性反馈 | “每次 TUI 退出要手动找 session id 很烦” | 😊 满意 | 继续打磨“会话即代码”体验，如导出/导入会话快照 |

---

## 8. 待处理积压 —— 需维护者关注的长期项

| 标的 | 停滞时长 | 关键阻碍 | 建议行动 |
|------|----------|----------|----------|
| [#1203](https://github.com/HKUDS/nanobot/pull/1203) **fix(cli): Event loop is closed on Linux** | **~6 个月** (2026-02-25 创建) | 标记 `conflict`，涉及 `asyncio` 关闭序列的底层 workaround，需核心维护者裁决风险 | **建议**：指派 Owner 复现于 Python 3.11/3.12，若风险可控合并；否则关闭并记录已知限制 |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) / [#5180](https://github.com/HKUDS/nanobot/pull/5180) **MCP SDK v2 迁移** | **~3 周** | 双分支并行评估，冲突标记，测试矩阵未全绿 | **建议**：设定“下周三”决策 deadline，由 Tech Lead 对比 diff 与基准测试决定合并哪条线 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) **fix(memory): preserve full consolidation input** | **~1 周** | `conflict`，涉及 `history.jsonl` 有界保留与 `last_consolidated` 推进的竞态 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-21

> **数据基准**：过去 24 小时 Issues 更新 50 条（新开/活跃 42，关闭 8），PR 更新 50 条（待合并 46，合并/关闭 4），新版本发布 0 个。  
> **统计口径**：截至 2026-08-21 23:59 UTC，来源 `NousResearch/hermes-agent`。

---

## 1. 今日速览
- **活跃度极高**：单日 100 条 Issue/PR 变更，且 PR 多为“待合并”态，显示维护者正在密集审核/合并修复补丁。  
- **核心痛点聚焦**：Windows 桌面端更新/重建失败、Electron `node_modules` 污染、SQLite WAL 并发损坏、OpenAI/Anthropic 缓存参数不兼容、会话状态序列化丢失——均为 **P0/P1 级阻塞性缺陷**。  
- **架构治理推进**：多个 PR 尝试引入“事务级部署计划”（#88683）、“可证明的可观测状态”（#90866）及会话 CWD 优先级统一（#91195/91197），标志着从“点修补”向“契约化运维”转型。  
- **社区反馈强烈**：Windows 用户因 `hermes update` 导致可执行文件丢失、快捷方式失效的抱怨集中爆发（#86443、#44225、#90829、#91193）。  
- **整体健康度**：**偏脆弱**——虽有大量修复 PR 涌入，但关键路径（更新、会话持久化、桌面构建）仍缺乏自动化回滚/熔断机制，建议本周内发布 **v0.20.5 hotfix** 收敛风险。

---

## 2. 版本发布
> 过去 24 小时无新 Release。当前最新稳定版仍为 **v0.20.4 (2026-08-18)**。

---

## 3. 项目进展（已合并/关闭的关键 PR）
| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#91195](https://github.com/NousResearch/hermes-agent/pull/91195) | **Bug Fix (Closed)** | 统一 `hermes resume` 的 CWD 优先级：显式 `--in` > 继承 `TERMINAL_CWD` > 保存的会话 CWD > 安全回退 | 会话恢复一致性，修复派生任务在错误目录启动 |
| [#90287](https://github.com/NousResearch/hermes-agent/pull/90287) | **Feature (Closed)** | 新增 `session.steer_peer / steer_broadcast`，支持平级/广播式子代理引导 | 多代理协作编排能力增强 |
| [#91178](https://github.com/NousResearch/hermes-agent/pull/91178) | **Bug Fix (Closed)** | 修复 Kanban `--initial-status blocked` 被错误推进为 `running` | 任务调度准入门槛恢复 |
| [#91176](https://github.com/NousResearch/hermes-agent/pull/91176) | **Bug Fix (Closed)** | Z.ai `glm-5.3` 模型映射修正（models.dev 目录错配） | 供应商适配层修正 |

> **合并节奏**：4 个 PR 合并/关闭，均为**单点修复**，未见架构级大合并。主分支保护策略较严，多数 PR 仍在 Review/等待 CI。

---

## 4. 社区热点（评论/反应 Top 5）
| # | Issue/PR | 评论 | 👍 | 核心诉求 |
|---|----------|------|----|----------|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills 索引陈旧** | 66 | 0 | 自动化鲜度探针报警：索引 29.8 h 超过 26 h 阈值，CI 重建流水线需加固 |
| 2 | [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) **OpenCode Go gpt-5.6-luna 缺 `finish_reason` 导致桌面端丢答案** | 7 | 1 | SSE 流式协议兼容性：需在无 `finish_reason` 时优雅收尾，避免误判为中断 |
| 3 | [#86443](https://github.com/NousResearch/hermes-agent/issues/86443) **Windows `hermes update` 删除桌面可执行文件且退出码 0** | 6 | 0 | **数据丢失级**：更新原子性缺失，要求“全成功或全回滚” |
| 4 | [#44225](https://github.com/NousResearch/hermes-agent/issues/44225) **Electron 重建失败导致 `Hermes.exe` 永久丢失** | 5 | 1 | 同 #86443，历史遗留未根治，用户高度不满 |
| 5 | [#88683](https://github.com/NousResearch/hermes-agent/issues/88683) **架构级：引入事务级部署计划** | 4 | 0 | 统一 install/update/bootstrap 的单一事实来源，消除漂移 |

> **洞察**：Top 1 为自动化巡检报警（机器人生成），Top 2-4 均为 **Windows 桌面更新数据丢失** 的不同切面，社区情绪集中在“更新不可信、需手动兜底”。

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 (数据丢失/不可用)** | [#86443](https://github.com/NousResearch/hermes-agent/issues/86443) | Win 更新删除 `Hermes.exe` 且报成功 | [#91193](https://github.com/NousResearch/hermes-agent/pull/91193) (Open) | 需原子化替换 + 回滚快照 |
| **P0** | [#44225](https://github.com/NousResearch/hermes-agent/issues/44225) | Electron rebuild 失败导致可执行文件永久消失 | [#87879](https://github.com/NousResearch/hermes-agent/pull/87879) (Open, stale) | 同根因，建议合并方案 |
| **P0** | [#91164](https://github.com/NousResearch/hermes-agent/issues/91164) | gpt-5.6 `prompt_cache_retention` 触发 400 且不可重试 | 无 | 需迁移到 `prompt_cache_options.ttl`，影响所有 OpenAI 兼容流 |
| **P1 (核心功能受损)** | [#89293](https://github.com/NousResearch/hermes-agent/issues/89293) | 单机高并发 8 天 3 次 `state.db` 损坏（WAL 回滚+升级后 journal_mode 静默回退） | [#85079](https://github.com/NousResearch/hermes-agent/issues/85079) 相关重试补丁 | 需离线恢复工具 + 启动时校验 |
| **P1** | [#90971](https://github.com/NousResearch/hermes-agent/issues/90971) | `apply_anthropic_cache_control` 非幂等（预装饰输入） | 无 | 缓存控制头重复注入导致请求体膨胀 |
| **P1** | [#90493](https://github.com/NousResearch/hermes-agent/issues/90493) | SQLite 错误被粗暴分桶，腐坏只报 generic message | 无 | 需保留原始错误码/消息 |
| **P2** | [#90237](https://github.com/NousResearch/hermes-agent/issues/90237) | Win11 22H2+ 窗口 `transparent: true` 破坏 Snap/FancyZones | 无 | 需按 OS 版本动态启用玻璃效果 |
| **P2** | [#90829](https://github.com/NousResearch/hermes-agent/issues/90829) | Win 日更失败：`node_modules` 损坏 + fail-closed gate | [#82355](https://github.com/NousResearch/hermes-agent/pull/82355) / [#91188](https://github.com/NousResearch/hermes-agent/pull/91188) | 托管 Node 优先级修复在途 |
| **P2** | [#90795](https://github.com/NousResearch/hermes-agent/issues/90795) | Dashboard React `useSyncExternalStore` 重入导致最大更新深度超限 | 无 | 上游 `@assistant-ui/tap` 兼容性 |

> **Fix 覆盖率**：P0 级 3 个仅 1 个有活跃 PR，P1 级 3 个 0 个 PR，**修复滞后明显**。

---

## 6. 功能请求与路线图信号
| 需求 | Issue/PR | 成熟度 | 可能纳入版本 |
|------|----------|--------|--------------|
| **事务级部署计划** | [#88683](https://github.com/NousResearch/hermes-agent/issues/88683) | 设计阶段，需决策 | v0.21.0+（架构级） |
| **可证明的可观测状态（证明携带）** | [#90866](https://github.com/NousResearch/hermes-agent/issues/90866) | RFC 级，依赖多个前置修复 | v0.22.0+ |
| **OpenAI Codex OAuth Loopback 适配器** | [#91199](https://github.com/NousResearch/hermes-agent/pull/91199) | PR Ready，需安全审查 | v0.20.5 / v0.21.0 |
| **A2A 命名同级授权** | [#91192](https://github.com/NousResearch/hermes-agent/pull/91192) | PR Ready，配置级变更 | v0.21.0 |
| **压缩会话保留 Standing Goals 可见** | [#91200](https://github.com/NousResearch/hermes-agent/pull/91200) | PR Ready，UX 增强 | v0.20.5 |
| **Discord `allow_bots` 配置桥接** | [#35810](https://github.com/NousResearch/hermes-agent/pull/35810) / [#91198](https://github.com/NousResearch/hermes-agent/pull/91198) | 老 PR 新补，已有实现 | v0.20.5 |
| **Kanban 运行溯源契约 v1.1.0 入库** | [#91194](https://github.com/NousResearch/hermes-agent/pull/91194) | 文档级，配套 #88683 | v0.21.0 |

> **趋势**：近期 PR 多为 **“补齐契约/配置桥接/幂等性”** 而非新功能，暗示项目进入**稳固期**，大功能冻结，聚焦可靠性。

---

## 7. 用户反馈摘要（从评论提炼）
| 场景 | 痛点原话/意图 | 频次/代表 Issue |
|------|---------------|-----------------|
| **Windows 日常更新** | “每次点更新都提心吊胆，`Hermes.exe` 消失了快捷方式成死链，得手动重装” | #86443, #44225, #90829, #91193 |
| **会话/状态丢失** | “`state.db` 损坏只能离线 `.recover`，丢掉半天上下文，生产环境不敢用” | #89293, #90493 |
| **桌面流式体验** | “Luna 模型输完就断，没有 `finish_reason`，桌面端直接把答案扔了” | #75801 |
| **安装卡顿** | “安装脚本下载 Chrome for Testing 卡 1 小时无日志，怀疑网络/镜像源” | #90932 |
| **多设备/SSH 切换** | “切换 SSH profile 反而启动本地后端，还连错远程主机” | #90477 |
| **代理/委派失控** | “CLI review 循环跑了 17 批才停，烧光 Codex 额度” | #91122 (PR) |

> **满意度极低点**：Windows 更新体验、会话持久化可信度。  
> **满意度高点**：CLI/Kanban 任务编排、多供应商模型切换、插件生态（Discord/Slack 桥接）。

---

## 8. 待处理积压（长期未响应/高风险）
| Issue/PR | 停滞天数 | 风险等级 | 建议动作 |
|----------|----------|----------|----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills 索引陈旧 | 34 天 | **中**（文档站可用性） | 修复 CI cron 或降级阈值，指派专人巡检 |
| [#32678](https://github.com/NousResearch/hermes-agent/issues/32678) GCP Vertex AI 404 | 87 天 | **低**（小众供应商） | 关闭或标记 `help wanted`，提供 curl 对照脚本 |
| [#35810](https://github.com/NousResearch/hermes-agent/pull/35810) Discord `allow_bots` 桥接 | 448 天 | **中**（插件完整性） | **立即合并** #91198 替代，关闭老 PR |
| [#87879](https://github.com/NousResearch/hermes-agent/pull/87879) 恢复被删桌面构建 | 5 天 | **高**（阻塞 Windows 用户） | Review 冲突，合并或由 #91193 取代 |
| [#82355](https://github.com/NousResearch/hermes-agent/pull/82355) Windows 托管 Node 优先级 | 12 天 | **高**（构建失败根因） | 合并 #91188 替代，清理冲突 |
| [#73379](https://github.com/NousResearch/her

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-21

---

## 1. 今日速览

**整体状态：低频维护期，依赖更新为主，核心功能 PR 长期搁置，社区反馈集中于 Web UI 性能与多模型协议支持。**

- **活跃度评估**：⭐⭐☆☆☆（低）。过去 24 小时无新 Release，仅 3 个 Issue 与 8 个 PR 产生活动，其中 5 个为 Dependabot 自动依赖升级 PR，2 个核心功能 PR（#1158、#423）虽已关闭但历经数月未合入主干，1 个修复类 PR（#3318）已合并。
- **核心动向**：Web 前端构建阻塞（pnpm-lock.yaml 重复键）已修复合并；Anthropic 原生 Messages API 协议支持（#1158）与多智能体协作框架（#423）分别因设计分歧/范围过大被关闭，未纳入主线；社区强烈呼吁解决 Web UI 长上下文输入卡顿（#3281）及扩展 ASR 模型兼容性（#3331）。
- **风险提示**：多个核心依赖（AWS SDK、Anthropic SDK、Matrix SDK）处于自动升级待审核状态，需关注破坏性变更；长期未响应的 Stale Issue 积压严重。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| **#3318** `fix(web): repair unparseable pnpm-lock.yaml` | ✅ **已合并/关闭** | 修复 `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 重复映射键导致的 `ERR_PNPM_BROKEN_LOCKFILE`，恢复前端 CI/CD 与本地开发环境可构建性。 | **高** — 解除前端构建阻塞，属于必须修复的工程债务。 |
| **#1158** `feat: add anthropic-messages protocol for native Anthropic API format` | ❌ **已关闭** | 引入 `anthropic-messages` 协议前缀，支持 `/v1/messages` 原生端点，修复 #269。因维护者倾向统一适配层而非新增协议前缀，最终未合入。 | **中** — 需求真实（代理服务兼容性），但实现方案被拒，后续需在现有 Anthropic 适配器中扩展而非新增协议。 |
| **#423** `feat: base multi-agent collaboration framework & shared context` | ❌ **已关闭** | WIP：基于黑板的多智能体协作框架（共享上下文、Agent 移交、发现工具）。因范围过大、设计未定型，维护者建议拆分为小 PR 逐步推进。 | **低** — 架构级探索已存档，短期内不会并入主线。 |
| **#3332~#3336** (5 个 Dependabot PR) | ⏳ **待合并** | AWS SDK Go v2 (核心/config/bedrockruntime)、Anthropic SDK Go、Matrix SDK (mautrix) 版本批量升级。 | **中** — 例行安全/兼容性维护，需人工审核 CHANGELOG 后合并。 |

**整体进展判断**：仅 1 个工程修复类 PR 真正落地；两大功能性 PR（协议扩展、多 Agent 框架）均因架构分歧关闭，项目处于“维护存量、谋划增量”的过渡期。

---

## 4. 社区热点

| 排名 | Item | 互动数据 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | **Issue #3281** `[BUG] Web UI chat input laggy with long history` | 💬 6 评论 · 👍 1 · 更新 2026-08-20 | **性能痛点 TOP 1**。用户在单会话积累较多历史后，输入框严重掉帧。评论区讨论集中于虚拟列表、增量渲染、Web Worker 分流等前端优化方案，呼吁官方给出修复时间表。 |
| 2 | **Issue #3331** `[Feature] Support non-whisper models for /audio/transcriptions` | 💬 1 评论 · 👍 0 · 更新 2026-08-20 | **协议开放性需求**。现行 `asr.go` 硬编码仅识别 `*-whisper-*` 模型，用户希望通过配置标志（如 `whisper-transcription: true`）复用任意兼容 OpenAI Audio API 的模型（如 faster-whisper、whisper.cpp 服务、第三方 ASR 网关）。 |
| 3 | **Issue #3330** `[Feature] Dynamic model override in delegate/spawn/subagent` | 💬 1 评论 · 👍 0 · 更新 2026-08-20 | **多智能体编排灵活性**。当前三类工具均静态绑定模型，用户期望在工具调用时显式传参覆盖，便于按任务复杂度动态切换大/小模型，降低成本。 |

> **热点共性**：均指向**“运行时可配置性”**与**“前端大上下文体验”**两大短板，且均无对应活跃 PR 推进。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 影响面 | 是否有 Fix PR |
|--------|-------|------|--------|---------------|
| **P1（严重）** | **#3281** Web UI 输入卡顿 | 单会话历史 > ~50 条时，输入框 keystroke 延迟 > 500ms，甚至浏览器标签页假死 | 所有 Web UI 用户，尤其长对话场景 | ❌ 无 |
| **P2（中等）** | **#3318** 前端构建失败 | `pnpm install` 报 `ERR_PNPM_BROKEN_LOCKFILE`，阻断 CI 与新贡献者于本地构建 | 前端开发者、CI 流水线 | ✅ **#3318 已合并** |
| **P3（潜在）** | 依赖升级滞后 | 5 个核心依赖（AWS/Anthropic/Matrix SDK）停留在数月前版本，可能遗漏安全补丁或新特性 | 生产环境稳定性、新模型兼容性 | ⏳ 5 个 Dependabot PR 待审核 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 关联 PR/设计 | 纳入下一版本可能性 | 备注 |
|------|------|--------------|---------------------|------|
| **Anthropic 原生 Messages API** | #269 → #1158 | #1158 被关闭，维护者倾向在现有 `anthropic` 适配器内扩展 `messages` 端点支持 | 🟡 **中** — 需求明确，实现路径已定，需贡献者按维护者意图重写 PR |
| **ASR 模型白名单解除** | #3331 | 无 | 🟢 **高** — 仅需在 `asr.go` 增加配置开关，改动极小，符合“配置大于约定”原则 |
| **工具调用时动态指定模型** | #3330 | 无 | 🟡 **中** — 涉及 `delegate/spawn/subagent` 工具签名变更，需向后兼容设计，建议先在实验分支验证 |
| **多 Agent 协作框架** | #423 | #423 已关闭 | 🔴 **低** — 短期不纳入，维护者建议拆解为：共享上下文存储、Agent 注册发现、Handoff 协议三个独立增量 PR |

---

## 7. 用户反馈摘要

| 维度 | 代表性声音（源自 Issue 评论） |
|------|-------------------------------|
| **痛点** | - “超过 100 条消息后 Web UI 基本不可用，只能新建会话”（#3281）<br>- “不想跑本地 Whisper，想接入公司内部 ASR 网关，但被模型名硬编码拦截”（#3331）<br>- “子任务想用便宜小模型，主任务用大模型，现在只能改配置重启”（#3330） |
| **使用场景** | - 长文档分析、代码库重构等多轮长对话<br>- 企业内网部署，需对接私有化 ASR/LLM 网关<br>- 多 Agent 管道：Planner(大模型) → Coder(中模型) → Formatter(小模型) |
| **满意点** | - 后端 Go 核心稳定，CLI 体验好<br>- 多提供商路由、模型回退链机制设计合理 |
| **不满点** | - Web UI 维护优先级低，前端技术债累积（虚拟滚动、状态管理均未上）<br>- 核心功能 PR 响应周期长（月级），社区贡献者信心受挫 |

---

## 8. 待处理积压（建议维护者本周关注）

| 优先级 | Item | 停滞时长 | 建议行动 |
|--------|------|----------|----------|
| 🔴 **Critical** | **#3281 Web UI 输入卡顿** | 31 天（创建 2026-07-21） | 1) 承认 Bug 并打 `good first issue` 标签；2) 提供最小复现脚本；3) 引导贡献者实现 `react-window` 虚拟化或 `requestIdleCallback` 分帧渲染。 |
| 🟠 **High** | **#3318 后续：前端依赖审计** | 16 天（创建 2026-08-05） | 合并后跑一次 `pnpm audit`，修复高危漏洞，更新 `pnpm-lock.yaml` 至最新。 |
| 🟠 **High** | **5 个 Dependabot PR (#3332~#3336)** | 8 天 | 批量 Review：重点检查 AWS SDK v2 1.43.x 与 Anthropic SDK 1.62.x 的 Breaking Changes，通过 CI 后合并。 |
| 🟡 **Medium** | **#3331 ASR 模型白名单** | 8 天 | 核心维护者 1 小时内可完成：在 `VoiceConfig` 增加 `ForceWhisperPath bool`，修改 `asr.go` 判断逻辑，发布 v0.3.2 patch。 |
| 🟡 **Medium** | **#1158 Anthropic Messages 协议重写** | 168 天 | 在 #1158 下发最终设计意见：`provider/anthropic.go` 新增 `UseMessagesAPI bool` 配置，复用现有认证/重试链路，避免新增协议前缀。 |
| 🟢 **Low** | **#423 多 Agent 框架拆解** | 184 天 | 创建 3 个子 Issue：`shared-context-store`、`agent-registry`、`handoff-protocol`，分别挂载 `help wanted`。 |

---

> **下一期预告**：重点跟踪 #3281 是否有 PR 介入、Dependabot PR 合并后的 CI 通过率、以及 v0.3.2 patch 版本切版计划。  
> **数据来源**：GitHub REST API / GraphQL，统计窗口 2026-08-20 00:00–23:59 UTC。  
> **报告生成**：PicoClaw 开源项目分析师 · 2026-08-21 06:00 UTC

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-21

> 数据窗口：2026-08-20 00:00 – 2026-08-20 23:59 (UTC)  
> 来源：github.com/qwibitai/nanoclaw (Issues, PRs, Releases)

---

## 1. 今日速览
- **活跃度极高**：过去 24 小时共产生 **50 条 PR 更新**（其中 35 条待合并、15 条已合并/关闭）与 **3 条 Issue 更新**，显示核心团队正在进行大规模代码审查与技术债清理。
- **核心团队主导**：近 20 条高优先级 PR 均带有 `[core-team]` 标签，集中修复技能安装体系、容器配置注入、WhatsApp/Slack/Matrix 适配器的兼容性缺陷，属于典型的“硬化发布前冲刺”。
- **阻塞性 Bug 已修复**：Issue #2606（`engage_mode='always'` 静默丢消息）与 Issue #3369（`mention-sticky` 误触发）均在今日获得针对性 Fix PR（#3422 等），预计将在下一版本释放。
- **零新版本发布**：当前处于积累变更阶段，预计合并潮结束后将切 v2.x 小版本。
- **技术债显性化**：多个 PR 明确标注 “Audit verdict”“Stacked on #3408”，表明团队正在系统性偿还技能安装、配置注入、容器生命周期等跨模块架构债。

---

## 2. 版本发布
**今日无新版本发布**。  
最近一次 Release 仍为历史版本，建议关注 `main` 分支合并节奏，预计下周将切 `v2.x.x` 修订版。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#3421](https://github.com/nanocoai/nanoclaw/pull/3421) `docs+setup: announce one-click Slack agents` | 文档/产品化 | 为 README 增加 “Add Agent to Slack” 一键部署入口，串联应用创建、Avatar、Workspace 安装全流程 | 降低 Slack 接入门槛，直接服务商业化落地路径 |
| [#1311](https://github.com/nanocoai/nanoclaw/pull/1311) `Feature create new session` | 功能技能 | 新增会话创建技能（含 SKILL.md） | 补全会话生命周期管理，为多租户隔离奠基 |
| [#3401](https://github.com/nanocoai/nanoclaw/pull/3401) `fix(whatsapp-cloud): keep skill payload compatible with main` | 兼容性修复 | 导出注册表辅助函数，修复 WhatsApp Cloud 技能在 `main` 分支组合时的类型报错 | 消除跨分支技能组合阻滞，保证多渠道并行开发 |
| [#3403](https://github.com/nanocoai/nanoclaw/pull/3403) `fix(matrix): use a refresh-safe ESM patch` | 稳定性修复 | 引入 pnpm patch 机制修复 Matrix 适配器在 Node 22 下的无扩展名 ESM 导入失败 | 锁定 Node 22 兼容性，避免运行时崩溃 |
| [#3402](https://github.com/nanocoai/nanoclaw/pull/3402) `fix(codex): deliver provider-generated files` | 功能增强 | 实现供应商生成文件的显式路径/所有权契约、安全 outbox 分级、任务运行计数修正 | 完善 Codex 等代理提供商的文件交付链路，提升可观测性 |

> **合并统计**：15 条 PR 已合并/关闭，其中 8 条带 `[core-team]` 标签，覆盖 Slack、WhatsApp、Matrix、Codex、Dashboard、Ollama、Atomic Chat、Tavily、CLI Dash 等 10+ 技能/适配器，显示“技能生态硬化”已进入收尾期。

---

## 4. 社区热点（高互动/高关注 Issues & PRs）

| 实体 | 互动指标 | 核心诉求分析 |
|------|----------|--------------|
| [Issue #2715](https://github.com/nanocoai/nanoclaw/issues/2715) `Inbound WhatsApp media unreachable` | 👍 0 / 评论 1 / 创建 2026-06-08 | **长期痛点**：WhatsApp 附件下载至宿主未挂载目录，导致 Agent 容器内路径不存在。用户期望“零配置挂载”或“自动转发到会话收件箱”，涉及存储卷拓扑重构。 |
| [Issue #3369](https://github.com/nanocoai/nanoclaw/issues/3369) `mention-sticky engages without a mention` | 👍 0 / 评论 0 / 创建 2026-08-20 | **回归缺陷**：`accumulate` 策略意外创建会话行导致订阅生效，Agent 在未被 @ 的线程中回复。PR #3422 已给出修复，关注点在于“策略语义与实现的一致性”。 |
| [PR #3247](https://github.com/nanocoai/nanoclaw/pull/3247) `fix(scheduling): retire a malformed cron string` | 评论数最多（未披露具体数） | **工程化诉求**：避免恶意/手写错误 cron 表达式导致调度器每轮报错并保留脏数据，需“自动退役+告警”而非无限重试。 |
| [PR #3422](https://github.com/nanocoai/nanoclaw/pull/3422) `fix(router): mention-sticky subscribes on a mention, not on a session` | 新开即热 | 直接回应 #3369，核心团队优先级最高，预示下版本必入。 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue / PR | 现象 | 影响面 | 是否有 Fix PR | 状态 |
|--------|------------|------|--------|---------------|------|
| **P0 阻塞** | [#2606](https://github.com/nanocoai/nanoclaw/issues/2606) `engage_mode='always' silently drops all messages` | `evaluateEngage()` 缺少 `always` 分支，消息静默丢弃，理由 `no_agent_engaged` | 所有配置 `always` 模式的接线 | 隐含在 router 重构中，未见单独 PR | ✅ **已关闭**（今日关闭，推测随 router 重构合并修复） |
| **P0 阻塞** | [#3369](https://github.com/nanocoai/nanoclaw/issues/3369) `mention-sticky` 误触发 | `accumulate` 创建会话行导致订阅生效，Agent 误回复 | Slack 线程模式、多租户隔离 | [#3422](https://github.com/nanocoai/nanoclaw/pull/3422) | 🟡 **Open** 待审 |
| **P1 严重** | [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) WhatsApp 媒体不可达 | 附件落盘 `DATA_DIR/attachments` 未挂载进 Agent 容器，路径 `/workspace/attachments/...` 容器内 404 | WhatsApp 所有媒体类型（图片/文档/音频） | 无专门 PR，涉及存储卷拓扑 | 🔴 **Open** 无 Fix |
| **P1 严重** | [#3403](https://github.com/nanocoai/nanoclaw/pull/3403) Matrix Node 22 ESM 崩溃 | 无扩展名 ESM 导入在 Node 22 失败 | Matrix 适配器用户 | [#3403](https://github.com/nanocoai/nanoclaw/pull/3403) | 🟡 **Open** 待合并 |
| **P2 一般** | [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) Cron 解析错误导致调度器噪音 | 非法 cron 字符串每轮报错且不退役 | 定时任务/周期性技能 | [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) | 🟡 **Open** 待合并 |
| **P2 一般** | 多技能配置注入失效 | `add-atomic-chat-tool`、`add-ollama-tool` 等读取 `process.env` 而非容器配置 | 依赖环境变量的技能 | [#3415](https://github.com/nanocoai/nanoclaw/pull/3415) [#3416](https://github.com/nanocoai/nanoclaw/pull/3416) 等 6 个 Stacked PR | 🟡 **Open** 批量修复中 |

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR / 实现进度 | 纳入下版本可能性 |
|------|----------|---------------------|------------------|
| [PR #3355](https://github.com/nanocoai/nanoclaw/pull/3355) / [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) | **Cursor Agent SDK 提供商接入**：新增 `/add-cursor` 技能与 Provider Payload | 两条 PR 均为 `[core-team]` + `Feature skill`，含 SKILL.md 与核心类型扩展 | ⭐⭐⭐⭐⭐ **极高**（已进入核心评审） |
| [PR #3270](https://github.com/nanocoai/nanoclaw/pull/3270) | **`ncl` CLI Token 统计/用量上报** | `Feat/ncl token usage`，Utility skill 方向 | ⭐⭐⭐ **中高**（可观测性刚需） |
| [PR #3189](https://github.com/nanocoai/nanoclaw/pull/3189) | **`add-why` 技能**：解释单条消息为何被处理/丢弃 | Utility skill，调试/审计工具 | ⭐⭐⭐ **中高**（提升可观测性） |
| Issue #2715 衍生 | **统一文件收件箱/存储卷抽象** | 无显式 PR，但 #3417 `#3419` 涉及 `portable SQL`、`shutdown wiring` | ⭐⭐ **中**（需架构级重构，可能延后至 v2.1） |
| [PR #3421](https://github.com/nanocoai/nanoclaw/pull/3421) | **一键 Slack Agent 部署向导** | 文档+Setup 层，依赖 #3404 | ⭐⭐⭐⭐ **高**（产品化里程碑） |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点 / 场景 | 代表性声音 | 满意度倾向 |
|-------------|------------|------------|
| **WhatsApp 附件无法访问** | “Agent 收到图片路径但在容器内找不到文件，只能回复‘我看不见’” (#2715) | ❌ **强烈不满** —— 核心功能受阻，阻碍生产可用 |
| **Engage 模式语义不符预期** | “`always` 模式配置后完全不工作，日志里只有 `no_agent_engaged`” (#2606) | ❌ **失望** —— 文档与实现严重偏离 |
| **Slack `mention-sticky` 误触发** | “Bot 在从未被 @ 的线程里自动回复，污染上下文” (#3369) | ⚠️ **担忧** —— 影响多租户隔离信任 |
| **技能安装/升级脆弱** | 多个 PR 提到 “hardcoded labels”“bare `ncl` call”“dead-config class” | ⚠️ **焦虑** —— 运维成本高，期待 “install-scoped / per-group MCP” 方案落地 |
| **一键部署体验** | “期待 `Add Agent to Slack` 真正做到一条命令搞定” (#3421) | ✅ **期待** —— 认可产品化方向 |

---

## 8. 待处理积压（长期未响应/高价值）

| 实体 | 停滞时长 | 价值/风险 | 建议动作 |
|------|----------|-----------|----------|
| [Issue #2715](https://github.com/nanocoai/nanoclaw/issues/2715) WhatsApp 媒体路径不通 | **74 天**（2026-06-08 创建） | P0 阻塞 WhatsApp 生产可用，涉及存储卷架构，需架构师介入设计统一 `Inbox/Attachments` 抽象 | 🔴 **立即排期**：指定 Owner，拆解为“挂载点标准化”+“路径重写中间件”两子任务 |
| [PR #3196](https://github.com/nanocoai/nanoclaw/pull/3196) `Fix/add mount readonly` | 14 天 | 容器安全加固（只读挂载），属于纵深防御基线 | 🟡 **本周合并**：CI 绿即可合入 |
| [PR #3247](https://github.com/nanocoai/nanoclaw/pull/3247) Cron 丑陋字符串退役 | 7 天 | 防止调度器噪音风暴，属于稳定性硬指标 | 🟡 **本周合并**：需补充单测覆盖“退役后不再重试” |
| [PR #3270](https://github.com/nanocoai/nanoclaw/pull/3270) `ncl token usage` | 5 天 | 可观测性缺口，商业化计费前置依赖 | 🟢 **下周纳入**：确认 CLI 输出格式与后端埋点一致性 |
| [PR #3189](https://github.com/nanocoai/nanoclaw/pull/3189) `add-why` 技能 | 16 天 | 调试利

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-21

---

## 1. 今日速览

**整体状态：高强度迭代期，核心基建与产品化并行推进**  
过去 24 小时项目呈现「多 Epic 并行 + 关键阻塞修复 + 技术债清理」三线作战态势：  
- **Issue 活跃度高**：21 条更新（17 新建/活跃，4 关闭），新增 3 个 Epic（#7732 沙箱持久化、#7770 Agent 生命周期钩子、#7781/7782 设计系统后续阶段），暴露出架构层面的结构性需求。  
- **PR 吞吐量大**：33 条更新（19 待合并，14 已合并/关闭），其中 3 个 CI 阻塞型 PR（#7777、#7778、#7786）已火线合并，解除主分支红构建。  
- **零版本发布**：当前处于 v1.4.0 预备期，重心在沙箱代理化（#7779）、Hook 体系（#7765）、通知中心（#7698/7699）、设计系统落地（#7750）四大支柱特性。  
- **健康度评估**：🟢 **良好**——核心阻塞及时清除，Epic 拆解清晰，但长周期 XL 型 PR 积压（>10 天）需关注合并节奏。

---

## 2. 版本发布

**无新版本发布**。当前主线聚焦 v1.4.0 预备特性，预计待 #7732（沙箱持久化）、#7770（Hook 体系）、#7038/#7781（设计系统）主干合并后切版本。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的关键 PR（14 个，节选高影响项）

| PR | 类型 | 影响面 | 核心进展 |
|----|------|--------|----------|
| [#7786](https://github.com/nearai/ironclaw/pull/7786) | **SEV 修复** | LLM 建议生成 | 修复 OpenAI 结构化输出 `uniqueItems: true` 导致全量生成失败，清理死允许列表，门控已连接扩展卡片 —— **已合并，可回溯至稳定分支** |
| [#7777](https://github.com/nearai/ironclaw/pull/7777) / [#7778](https://github.com/nearai/ironclaw/pull/7778) | **CI 解阻** | 全工作区 | Rust 1.98 clippy 新 lint 导致全分支红构建，双 PR 同步修复迁移，恢复合并队列绿色 —— **已合并** |
| [#7729](https://github.com/nearai/ironclaw/pull/7729) | **功能完整** | Automations | 实现 `run-now` 手动触发全链路：域层原子火路径 → Capability → Assistant Service → WebUI API → 本地化 UI，**闭环 #7193** |
| [#7763](https://github.com/nearai/ironclaw/pull/7763) | **文档重构** | Subagent 设计 | 7 份设计文档（7k+ 行）合并为单一规范 `README.md`，净删 9,713 行，消除相互矛盾 —— **已合并** |
| [#7738](https://github.com/nearai/ironclaw/pull/7738) | **UX 补全** | Slack 扩展 | 为所有 admin 配置字段补齐 `description`，渲染为 Admin 配置卡提示文案 |
| [#7304](https://github.com/nearai/ironclaw/pull/7304) | **UX 调序** | 登录页 | OAuth 按钮上移至 Gateway Token 表单上方，符合主流认知模型 |

### 🚧 进行中的里程碑级 PR（19 个待合并，重点跟踪）

| PR | Epic/关联 | 规模/风险 | 当前状态 |
|----|-----------|-----------|----------|
| [#7779](https://github.com/nearai/ironclaw/pull/7779) | #7732 Step 2 | XL / Medium | **沙箱核心**：用户级 `iron-proxy` sidecar 路由出站流量，替换 `--network none` + host broker，按 `(tenant, user)` 隔离 Docker 网络 |
| [#7765](https://github.com/nearai/ironclaw/pull/7765) | #7770 Phase 1 | XL / Low | **Hook 体系落地**：引入 `AfterTurn` 生命周期点（首个可执行 Hook），内存整理作为首个消费者，仅 `Builtin/Trusted` 可安装 |
| [#7750](https://github.com/nearai/ironclaw/pull/7750) | #7038 Phase 1 | XL / Medium | **Storybook + 设计系统目录** 集成，重建自 main 干净分支，替代旧 #7039 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | #7392 | XL / Medium | **编码工具统一契约**：6 个裸工具名 `read/write/edit/glob/grep/bash`，移除旧工具/读取器/混合命名，**已 10 天未合并** |
| [#7698](https://github.com/nearai/ironclaw/pull/7698) / [#7699](https://github.com/nearai/ironclaw/pull/7699) | 通知中心 | XL / Medium | 通用 Inbox 模型替代自动化专用模型，支持审批/认证/阻塞/失败/完成/投递失败全类型，稳定 ID 去重 |

> **进展判读**：沙箱持久化（Step 2/多步）、Hook 体系（Phase 1/多阶段）、设计系统（Phase 1/5）均已进入**主干可审 PR 阶段**，v1.4.0 特性集成度显著提升。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数/更新频次）

| Issue | 评论 | 核心诉求 | 分析 |
|-------|------|----------|------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) **Epic: Persistent per-user sandbox** | 8 | 将 `builtin.shell` 从「每命令建删容器」升级为「持久用户沙箱 + 代理出站」，解决 `/workspace` 持久化、网络隔离、资源复用 | **架构级共识已形成**，Step 2 PR (#7779) 已开，后续需解决代理高可用、多租户网络平面、快照/恢复 |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) **Epic: Agent lifecycle hooks** | 3 | 将 `after-turn`/`before-turn`/`compaction`/`tool-result` 四个缝合点暴露为 Hook 注册，避免核心引擎硬编码 | **可扩展性刚需**，Phase 1 PR (#7765) 已实现 `AfterTurn`，其余阶段按单 Agent 可交付拆分 |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) **Design System Phase 1** | 2 | Storybook 接入 + 组件目录建立，作为后续治理/主题/交互重构基石 | PR #7750 重建分支推进中，Phase 2-3 已拆至 #7781，Phase 4-5 至 #7782 |
| [#7783](https://github.com/nearai/ironclaw/issues/7783) **LLM timeout policy bug** | 1 | 结构化输出终结器走非流式客户端，TTFT 不可见，重试预算挤不进 75s 终结期，单次传输卡顿即毁掉整轮 | **生产稳定性痛点**，涉及 HTTP 客户端分层、截止期传递、重试策略，需核心组介入 |

### 💬 PR 讨论热点
- [#7711](https://github.com/nearai/ironclaw/pull/7711) (wasm typed tool response) 与 [#7749](https://github.com/nearai/ironclaw/pull/7749) (benchmark trigger) 今日均有更新，分别关联能力响应规范化收尾与自动化基准回归，**技术债偿还与度量体系建设并行**。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|--------|-------|------|----------|-------------|
| **SEV / P0** | [#7783](https://github.com/nearai/ironclaw/issues/7783) | 结构化输出终结期走非流式客户端，提供方卡顿 60s 不可见，75s 总期限内重试无法完成，**单次传输卡顿即导致整轮失败** | 所有依赖结构化输出的 LLM 调用 | ❌ 无 PR，**需立即排期** |
| **P1** | [#7776](https://github.com/nearai/ironclaw/issues/7776) |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-21

> **数据来源**：GitHub API / 网页抓取 | **统计周期**：2026-08-20 至 2026-08-21 (UTC) | **项目地址**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

*   **整体状态**：项目处于 **活跃维护与功能迭代并行** 阶段。过去 24 小时虽无新版本发布，但合并/关闭了 **6 个 PR**，涵盖核心 Agent 技能同步、引擎启动容错、定时任务交互修复、Write 工具文件预览（重大功能）、Mac 打包构建修复、设置面板搜索增强及 Agent 切换逻辑修复。
*   **活跃度评估**：**高**。核心维护者（内部贡献者为主）集中在 4 月初（数据显示创建时间均为 2026-04-07/08）提交了批量高质量 PR，并于今日集中审核合并，显示出明确的里程碑式发布节奏。
*   **社区互动**：Issues 讨论度较低（2 条更新均为 4 月创建的 stale 标签），社区驱动力弱，项目主要由内部团队推进。
*   **技术债关注**：Mac 打包脚本兼容性修复（#1555）及引擎启动超时交互优化（#1546）体现了对工程稳定性的持续投入。

---

## 2. 版本发布

**今日无新版本发布**。当前合并的 PR 群（特别是 #1553 文件预览、#1545 技能同步、#1560 Agent 切换）极大概率将汇聚入下一个 **v0.x / v1.x 小版本迭代**。建议关注后续 `CHANGELOG` 与 `Release Notes`。

---

## 3. 项目进展：核心 PR 合并综述

今日合并的 6 个 PR 形成了一个连贯的 **“Agent 体验闭环 + 工程稳定性”** 交付包：

| PR | 类型 | 核心价值 | 关联 Issue | 影响面 |
| :--- | :--- | :--- | :--- | :--- |
| **[#1553](https://github.com/netease-youdao/LobsterAI/pull/1553)** | **Feat (Major)** | **Write 工具文件卡片 + 分屏预览面板**<br>实现 Markdown/HTML/代码/图片/SVG 即时渲染，支持拖拽调宽 (320-900px)，彻底解决 Agent 产物“不可见”痛点。 | **Closes #1552** | **核心交互**<br>极大提升写作/编码/文档生成场景效率 |
| **[#1545](https://github.com/netease-youdao/LobsterAI/pull/1545)** | **Fix** | **Agent 技能即时同步**<br>修复更新 Agent 技能后，当前对话徽章不刷新、需手动切 Agent 才生成的状态不同步 Bug。 | Fixes #1502 | **Agent 系统**<br>状态管理一致性 |
| **[#1560](https://github.com/netease-youdao/LobsterAI/pull/1560)** | **Fix** | **Agent 列表切换回聊天修复**<br>解决编辑 Agent 后点击当前选中 Agent 无法返回聊天界面的交互死循环。 | - | **侧边栏/导航**<br>核心路由逻辑 |
| **[#1546](https://github.com/netease-youdao/LobsterAI/pull/1546)** | **Feat (UX)** | **引擎启动超时逃生口**<br>启动超 30s 显示“取消启动/查看日志”按钮，避免 5 分钟硬等待，提升故障自助排查能力。 | - | **主进程/引擎**<br>启动链路健壮性 |
| **[#1557](https://github.com/netease-youdao/LobsterAI/pull/1557)** | **Feat (UX)** | **设置面板侧栏搜索筛选**<br>支持中英分词 AND 匹配、NFKC 规范化、当前 Tab 被过滤自动跳转、i18n 适配。 | - | **设置中心**<br>信息查找效率 |
| **[#1555](https://github.com/netease-youdao/LobsterAI/pull/1555)** | **Fix (Build)** | **Mac x64 打包构建修复**<br>解决 `sha256sum` 命令不存在导致的 `dist:mac:x64` 失败，改用 `shasum -a 256` 兼容。 | - | **CI/CD / 发布工程** |

**整体推进评估**：**显著前进**。单日合并解决了 1 个重大交互特性（文件预览）、3 个核心交互 Bug、1 个工程阻塞、1 个易用性增强，代码变更集中、目的明确，代码库健康度提升明显。

---

## 4. 社区热点

> **注意**：当前 2 条活跃 Issue 均带 `[stale]` 标签且创建于 4 月，非今日新开，反映社区外部驱动力不足。

| 排名 | Issue/PR | 标题 | 互动数据 | 核心诉求分析 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **[Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)** | **feat: AI产物 Markdown 预览及文件卡片支持** | 👍 0 · 💬 1 · 🕒 更新: 08-20 | **高频刚需**。用户痛点极其明确：Agent 写文件后无法所见即所得，必须 Read 回显或外部打开。PR #1553 已完美闭环此需求，**属于“用户呼声 -> 内部实现 -> 合并交付”标准闭环案例**。 |
| **2** | **[Issue #1556](https://github.com/netease-youdao/LobsterAI/issues/1556)** | **doc bug: IM机器人配置指南404** | 👍 0 · 💬 2 · 🕒 更新: 08-20 | **文档断链**。官网文档链接失效，阻碍 IM 接入落地。虽有 2 条评论但无人修复，**建议维护者优先处理文档站部署或链接修正**，属于低成本高收益修复。 |

---

## 5. Bug 与稳定性

今日无**新增**崩溃/回归报告。以下为**已修复并合并**的稳定性问题（按严重度排序）：

| 严重度 | PR | 问题描述 | 修复状态 | 风险残留 |
| :--- | :--- | :--- | :--- | :--- |
| **P1 (阻塞发布)** | **[#1555](https://github.com/netease-youdao/LobsterAI/pull/1555)** | `npm run dist:mac:x64` 因 `sha256sum` 缺失构建失败，导致 Mac 版无法出包。 | ✅ **已合并** | 低。脚本层兼容性修复，建议补充 CI 矩阵覆盖 Mac x64/arm64。 |
| **P2 (核心流程受阻)** | **[#1545](https://github.com/netease-youdao/LobsterAI/pull/1545)** | Agent 技能更新后 Redux `activeSkillIds` 未同步，导致当前会话技能失效，需重进会话恢复。 | ✅ **已合并** | 低。状态同步逻辑补全，建议补充集成测试覆盖技能增删改查全链路。 |
| **P2 (交互死循环)** | **[#1560](https://github.com/netease-youdao/LobsterAI/pull/1560)** | 编辑 Agent 后点击当前选中 Agent 无法返回聊天界面，交互卡死。 | ✅ **已合并** | 低。路由守卫逻辑修正，需回归测试 Agent 列表/详情/编辑各状态切换。 |
| **P3 (体验缺陷)** | **[#1547](https://github.com/netease-youdao/LobsterAI/pull/1547)** | 定时任务通知渠道无法改回“不通知”，表单回显不一致。 | 🟡 **Open (待合并)** | 中。PR 已开发完成 (+2/-0 行)，**建议尽快 Review 合并**，修复表单初始化优先级逻辑。 |
| **P3 (容错缺失)** | **[#1546](https://github.com/netease-youdao/LobsterAI/pull/1546)** | 引擎启动卡死 5 分钟无交互，用户只能强杀进程。 | ✅ **已合并** | 低。新增 30s 超时交互入口，建议补充启动日志自动采集上报机制。 |

---

## 6. 功能请求与路线图信号

结合已合并 PR 与 Open Issue，识别出以下 **下一版本 (vNext) 高概率落地** 信号：

1.  **✅ 已落地：Agent 产物可视化体系** (`#1553` merged)
    *   **信号**：Write/Read 工具结果差异化展示（卡片 vs 摘要）、分屏预览渲染引擎（MD/HTML/Code/SVG/Image）已成熟。
    *   **后续演进**：预期支持 **双向编辑**（预览面板直接修改回写）、**版本对比**、 **多文件标签页化管理**。

2.  **🟡 进行中：定时任务表单交互完善** (`#1547` Open)
    *   **信号**：表单受控组件与后端数据结构 (`delivery.mode`) 不一致的历史债务正在偿还。
    *   **路线图**：可能引出 **定时任务执行历史可视化**、**失败重试策略配置化**。

3.  **🟢 潜在需求：文档站重构/自动化** (`#1556` Open)
    *   **信号**：官网文档 404 且长期未修，暗示文档维护流程缺失（如 docs-as-code + CI 校验链接）。
    *   **建议**：将文档迁移至 Repo 内 `/docs` 目录，接入 `markdown-link-check` CI，随代码版本发布。

4.  **🔮 隐性趋势：设置中心规模化治理** (`#1557` merged)
    *   **信号**：Tab 数量已超 9 个，引入搜索筛选是信息架构重构前兆。
    *   **预测**：未来可能拆分为 **模块化设置插件系统**，支持三方扩展注入配置项。

---

## 7. 用户反馈摘要

> 从 Issue 评论与 PR 描述中提炼的真实用户画像与痛点：

*   **核心用户画像**：**开发者/技术写作者/自动化运维者** —— 高频使用 Agent 进行代码生成、文档写作、定时巡检。
*   **高频痛点**：
    1.  **“写完看不见”**：Agent 生成 Markdown/HTML/代码文件后，必须手动 Read 或外部打开，**上下文切换成本极高**（#1552 描述典型场景）。
    2.  **“配置找不到”**：IM/邮件/模型等配置入口深、分类多，无搜索只能靠记忆翻找（#1557 隐性需求）。
    3.  **“改了不生效”**：Agent 技能修改后当前会话不同步，破坏“即时生效”心智模型（#1502/#1545）。
    4.  **“卡住没反馈”**：引擎启动长时间无响应、无日志入口，排查门槛高（#1546）。
*   **满意点**：
    *   PR #1553 的交互细节（拖拽分栏、语法高亮、沙箱 iframe、复制路径/打开目录一键达成）获得隐性认可 —— **体现团队对“开发者体验 (DX)”的极致打磨**。
*   **不满/焦虑点**：
    *   官网文档 404 长达 4 个月未修 (#1556)，传递出 **“文档维护优先级低 / 发布流程割裂”** 信号，可能劝退新接入开发者。

---

## 8. 待处理积压

> 长期未响应、但影响面较广的事项，建议维护者本周内处理：

| 优先级 | 项目 | 类型 | 停滞时长 | 处理建议 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 高** | **[Issue #1556](https://github.com/netease-youdao/LobsterAI/issues/1556)** | Doc Bug | **~4.5 个月** (创建 04-08) | **立即修复链接或下线失效页**；建议建立 `docs/` 目录纳入版本控制，CI 自动校验链接有效性。 |
| **🟠 中** | **[PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)** | Bug Fix | **~4.5 个月** (创建 04-07) | **代码改动极小 (+2 行)**，逻辑清晰修复表单回显 Bug，**建议今日内 Review 合并**，避免用户持续踩坑。 |
| **🟡 中** | **[Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)** | Feature | **~4.5 个月** | **已由 PR #1553 完美闭环并合并**，**建议立即在 Issue 下评论关联 PR 并手动 Close**，清理积压列表。 |
| **🟢 低** | **Release 自动化** | Process | 长期 | 连续多日批量合并 PR 但无 Release，建议建立 **

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-21

> **数据来源**: GitHub API (moltis-org/moltis)  
> **统计窗口**: 2026-08-20 00:00 – 23:59 UTC  
> **报告生成**: 2026-08-21

---

## 1. 今日速览
- **整体活跃度**: **高** —— 单日合并 4 个 PR、发布 1 个版本、修复 1 个高危安全漏洞，核心团队在 WhatsApp 通道、安全加固、Windows 兼容性三条主线并行推进。  
- **版本节奏**: 发布 **20260820.01**，为日期制小版本，包含昨日晚间合并的安全修复与通道改进。  
- **风险指标**: 无新增高危 Issue；唯一关闭的 Issue (#1177) 为 **CWE-306 认证缺失**，已由 PR #1216 修复并随版本发布。  
- **技术债关注**: PR #468（Windows Shell Hook 兼容）跨度 5 个月仍未合并，需评估是否纳入下一里程碑。  
- **社区信号**: 无高热度讨论，维护者以“快速修复 → 立即发布”模式响应安全与体验问题。

---

## 2. 版本发布
| 版本 | 发布时间 | 变更性质 | 关键变更 | 破坏性变更 | 迁移提示 |
|------|----------|----------|----------|------------|----------|
| **20260820.01** | 2026-08-20 | 安全/修复 | • 修复 Vault 解锁/恢复端点缺失认证 (CWE-306)  <br>• WhatsApp 通道：回复识别、Markdown 渲染、Push Name 可配置  <br>• 取消硬编码的 `untrusted-turn` 工具拒绝策略，改为可配置 | 无 | 直接升级即可；运营者需检查 `channels.untrusted_turn_tool_ceiling` 新配置项 |

> **Release 链接**: [20260820.01](https://github.com/moltis-org/moltis/releases/tag/20260820.01)

---

## 3. 项目进展（已合并/关闭 PR）
| PR | 类型 | 核心贡献 | 影响模块 | 状态 |
|----|------|----------|----------|------|
| [#1216](https://github.com/moltis-org/moltis/pull/1216) | **Security Fix** | 为 `POST /api/auth/vault/unlock` 与 `recovery` 强制要求 `AuthSession`，关闭 CWE-306 | `httpd` / `auth` | ✅ Merged |
| [#1218](https://github.com/moltis-org/moltis/pull/1218) | **Feature/Fix** | 移除 WhatsApp 硬编码 Push Name "Moltis"，改用 Bot 配置名称 | `whatsapp` | ✅ Merged |
| [#1219](https://github.com/moltis-org/moltis/pull/1219) | **Refactor** | 将 `untrusted-turn` 工具上限从硬编码 `deny-all` 改为可配置策略层 | `channels` | ✅ Merged |
| [#1217](https://github.com/moltis-org/moltis/pull/1217) | **UX Fix** | 群聊中回复 Bot 视同 @Mention，修复 `mention_mode="mention"` 下的误判 | `whatsapp` | ✅ Merged |

> **里程碑推进**: 安全基线加固（Auth ガード完善）、WhatsApp 企业级易用性（Markdown/Reply/Push Name）同步交付，标志着 **通道层成熟度跃升**。

---

## 4. 社区热点
| 排名 | 对象 | 互动量 | 核心诉求 | 分析 |
|------|------|--------|----------|------|
| 1 | [Issue #1177](https://github.com/moltis-org/moltis/issues/1177) | 👍 0 / 评论 0 | 报告 Vault 端点无认证，CVE 级关注 | 虽无公开讨论，但触发安全响应流程，<24h 修复并发版，体现维护者对供应链安全的高优先级 |
| 2 | [PR #1222](https://github.com/moltis-org/moltis/pull/1222) | 👍 0 / 评论 0 | Sandbox 镜像引用校验，防止供应链注入 | 新开即自测通过，显示核心成员对容器安全的主动加固意识 |
| 3 | [PR #1221](https://github.com/moltis-org/moltis/pull/1221) | 👍 0 / 评论 0 | 锁定 Snyk Agent Scan 版本，移除 fallback | 供应链安全加固的又一举措，`uvx` 强依赖可能影响无 uv 环境的 CI，需关注后续反馈 |

> **整体趋势**: 社区讨论集中在 **安全加固** 与 **通道体验**，且多为维护者自驱 PR，外部贡献者较少。

---

## 5. Bug 与稳定性
| 严重度 | Issue/PR | 标题 | 状态 | 修复 PR | 备注 |
|--------|----------|------|------|---------|------|
| **Critical (CWE-306)** | [#1177](https://github.com/moltis-org/moltis/issues/1177) | Vault Unlock/Recovery 缺失认证 | ✅ Closed | [#1216](https://github.com/moltis-org/moltis/pull/1216) | 已随 20260820.01 发布 |
| **Medium** | [#1217](https://github.com/moltis-org/moltis/pull/1217) | 群聊回复 Bot 被误判为未 Mention | ✅ Closed | 自身 | WhatsApp 群聊核心交互路径 |
| **Low** | [#1218](https://github.com/moltis-org/moltis/pull/1218) | Push Name 硬编码导致品牌暴露 | ✅ Closed | 自身 | 多租户/白标场景痛点 |
| **Low** | [#1219](https://github.com/moltis-org/moltis/pull/1219) | `untrusted-turn` 策略过度收敛 | ✅ Closed | 自身 | 影响公共工具可用性 |

> **回归风险**: 无新增回归；PR #1219 修改策略层逻辑，建议关注集成测试覆盖。

---

## 6. 功能请求与路线图信号
| 来源 | 需求描述 | 关联 PR | 入版本概率 | 备注 |
|------|----------|---------|------------|------|
| PR #1220 | WhatsApp 出站消息实时 Markdown → 原生标记转换 | [#1220](https://github.com/moltis-org/moltis/pull/1220) | **高** (Open, 已自测) | 提升富文本体验，符合通道成熟度路线 |
| PR #1222 | Sandbox 镜像/包名校验，限制 Operator 权限 | [#1222](https://github.com/moltis-org/moltis/pull/1222) | **高** (Open, 测试通过) | 安全加固持续投入 |
| PR #1221 | Snyk Agent Scan 版本锁定，移除 mcp-scan fallback | [#1221](https://github.com/moltis-org/moltis/pull/1221) | **中** (Open, 待测试) | 依赖 `uv` 可能阻碍部分社区贡献者 |
| PR #468 | Windows `cmd.exe /C` 兼容 Shell Hook | [#468](https://github.com/moltis-org/moltis/pull/468) | **低** (长期搁置) | 5 个月无合并，需明确是否支持 Windows 一级平台 |

> **下一版本预测**: 20260821/22 将以 **WhatsApp Markdown 渲染** 与 **Sandbox 校验** 为主打特性发布。

---

## 7. 用户反馈摘要
- **无直接用户评论数据**（过去 24h Issues/PRs 评论数均为 0）。  
- **间接痛点推断**:  
  1. **安全合规**: 企业用户对未授权 Vault 操作零容忍 → 驱动 #1177/#1216 极速闭环。  
  2. **多租户品牌隔离**: Push Name 硬编码导致白标部署暴露 "Moltis" → #1218 修复。  
  3. **群聊自然交互**: 回复 ≠ Mention 的认知偏差 → #1217 统一语义。  
  4. **开发者体验**: Windows 原生开发受阻 → #468 长期未决，社区潜在流失点。

---

## 8. 待处理积压（建议维护者关注）
| 对象 | 停滞时长 | 重要性 | 建议动作 |
|------|----------|--------|----------|
| [PR #468](https://github.com/moltis-org/moltis/pull/468) | **151 天** | 中 (Windows 支持) | ① 决定是否正式支持 Windows；② 若支持，指派 Reviewer 推进合并；③ 若不支持，关闭并文档化限制 |
| [PR #1221](https://github.com/moltis-org/moltis/pull/1221) | 1 天 | 中 (供应链安全) | 补全 `cargo test -p moltis-gateway snyk_agent_scan` 后合并 |
| [PR #1220](https://github.com/moltis-org/moltis/pull/1220) | 1 天 | 高 (用户体验) | 等待 Review 通过，纳入下一版本 |
| [PR #1222](https://github.com/moltis-org/moltis/pull/1222) | 1 天 | 高 (安全) | 已自测通过，建议快速合并 |

---

## 📌 结语
Moltis 今日展现了 **“安全响应零延迟、通道体验快迭代”** 的健康工程文化。唯一结构性风险在于 **Windows 兼容性 PR 长期悬而未决**，建议在下个规划会明确平台支持策略，避免技术债累积。下一版本预计将以 WhatsApp 富文本与 Sandbox 校验为亮点发布。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-21

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时活动（Issues: 28, PRs: 50, Releases: 1）  
> **报告生成时间**：2026-08-21

---

## 1. 今日速览

- **活跃度评级：🟢 高** — 单日 50 条 PR 更新（22 待合并、28 已合并/关闭）与 28 条 Issue 活动，核心维护者与社区贡献者并行推进，呈现典型“发布前冲刺”态势。
- **里程碑**：发布 **v2.1.1-beta.1**，聚焦编辑器 Tab 溢出导航优化、Provider 速率限制器日志降噪，标志着 2.1 线进入稳定化收尾阶段。
- **核心工程进展**：并行完成“持久化 Driver 并发初始化”（冷启动加速）、“Console 长会话渲染性能优化”、“Embedding Health Check 超时可配置化”、“Env 存储原子写入与损坏保护”四大基础设施级改造，显著提升稳定性与可观测性。
- **社区信号**：用户痛点集中于**多步任务自动停顿（#6921）**、**网络抖动自愈（#6932）**、**历史库膨胀（#7168）**、**VPN/代理兼容性（#6974）**；新功能诉求指向**模型自动路由（#6436）**、**工作区级 Always-on Skill（#7182）**、**第三方 Agent Harness 接入（#7181）**。
- **风险提示**：`history.db` 单库 7.6 GB（#7168）与 Embedding Health Check 硬编码超时（#7156）若不在 2.1.1 正式版前修复，将成为线上高频投诉源。

---

## 2. 版本发布

### v2.1.1-beta.1 (Beta)
- **发布页**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1
- **主要变更**：
  1. `feat(console)`: 编辑器 Tab 溢出导航体验优化（#6983）
  2. `fix(providers)`: 降低速率限制器初始化日志级别，减少噪音（#6988）
  3. `chore`: 更新发布说明
- **破坏性变更**：无
- **迁移提示**：Beta 版仅供验证，建议在隔离工作区测试；正式版预计在通过 #7180 安装验证清单后发布。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心价值 | 关联 Issue |
|----|------|----------|------------|
| [#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) | `perf(drivers)` | **持久化 Driver 并发初始化**，冷启动耗时显著下降 | — |
| [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) | `perf(console)` | **长会话流式渲染/Markdown 解析性能优化**，解决历史消息堆积卡顿 | — |
| [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) | `fix(envs)` | **Env 存储原子写入 + 损坏文件保留**，防止静默丢失所有环境变量 | [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) |
| [#7166](https://github.com/agentscope-ai/QwenPaw/pull/7166) | `fix(release)` | **qwenpawmail MCP 打包为独立 Sidecar**，解决冻结构建依赖冲突 | — |
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | `fix(file-handling)` | **下载器超时 fallback 修复**，`wget/curl/urllib` 链路完整生效 | [#6370](https://github.com/agentscope-ai/QwenPaw/issues/6370) |
| [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) | `feat(console)` | **Assistant Response Card 新增 Artifacts 展示**，增强产物可视化 | — |
| [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) | `fix(security)` | **Master Key 文件权限修正为 0o600**，满足安全基线 | — |

> **整体推进度**：2.1.1 里程碑核心基建类 PR 全部落地，剩余 22 条待合并 PR 多为 UI 细节、文档、新功能原型，预计 1-2 个迭代周期清空。

---

## 4. 社区热点（高互动 Issues/PRs）

| 对象 | 标题 | 评论/👍 | 核心诉求 | 分析 |
|------|------|---------|----------|------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | **多步任务频繁自动停止，需手动“继续”** | 10 💬 | Agent 在输出规划类文本后未真正调用工具即挂起，用户体验严重受损 | **高频痛点**，疑似 Planner/Executor 切换逻辑或 Tool Call 解析阈值问题，亟需复现并修复 |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | **GLM 5.3 免费模型冻结 >10 分钟** | 9 💬 | 特定 Provider 流式首包超时无重试/降级，导致整会话卡死 | 涉及 Provider 抽象层超时策略，建议统一接入 `#7156` 可配置超时机制 |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | **任务产物堆积在单一 media 目录** | 6 💬 | 期望按 Task 隔离产物目录，便于检索与清理 | 低复杂度高价值，适合 2.1.1 或 2.1.2 纳入 |
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | **自动模型路由** | 4 💬 / 1 👍 | 按任务复杂度/模态自动选模型，降低用户心智负担 | **战略级 Feature**，架构涉及 Provider Registry & Router，建议纳入 2.2 路线图 |
| [#7185](https://github.com/agentscope-ai/QwenPaw/issues/7185) | **文档：远程 MCP Server OAuth 2.1 接入指南** | 1 💬 (新建) | 现有文档仅覆盖 Static Bearer，缺失 OAuth 授权码流程 | 文档债，优先级高（安全合规相关） |

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 现象 | 现有 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| 🔴 **P0 - 数据丢失/不可用** | [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) | `envs.json` 单字节损坏导致全量环境变量静默清零 | [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) ✅ **已合并** | 已修复 |
| 🔴 **P0 - 核心流程阻塞** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步任务规划后自动挂起，需人工干预 | 无 | **急需排查** |
| 🟠 **P1 - 资源耗尽** | [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) | `history.db` 膨胀至 7.6 GB，同一区间重复落库 | 无 | **需根因分析**（ToolResultCapMiddleware + recall_history 机制） |
| 🟠 **P1 - 网络自愈缺失** | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | 网络恢复后 LLM 请求持续超时，需重启进程 | 无 | 建议复用 HTTPX Retry 策略 + 连接池健康检查 |
| 🟠 **P1 - 配置硬编码** | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | Embedding Health Check 5s 硬编码超时，预热后仍失败 | 无 | [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) (WIP) 引入可配置超时 |
| 🟡 **P2 - 流式中断** | [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) | `httpx.ReadError` 未纳入重试白名单，导致 `UNKNOWN_AGENT_ERROR` | 无 | 需扩展 `_get_httpx_retryable()` |
| 🟡 **P2 - 图片链接失效阻塞会话** | [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | 单条不可达图片 URL 导致整会话不可用 | 无 | 需在消息入库/渲染层做容错降级 |
| 🟡 **P2 - 视频内联限制** | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | `view_video` 2MB 硬编码上限，Provider 设置无效 | [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) (Open) | 待 Review |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR | 纳入可能性 | 备注 |
|------|-------|---------|------------|------|
| **工作区级 Always-on Skill** | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) (Open) | ⭐⭐⭐⭐⭐ **极高** | PR 已提交，符合“专用化 Agent”趋势，预计 2.1.x 合入 |
| **Agent 级 Scroll 跨会话召回开关** | [#7184](https://github.com/agentscope-ai/QwenPaw/issues/7184) | 无 | ⭐⭐⭐⭐ **高** | 配置粒度细化，实现成本低 |
| **Qwen_Code 作为第三方 Harness** | [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181) | 无 | ⭐⭐⭐ **中** | 涉及 ACP/协议适配，优先级次于核心稳定性 |
| **自动模型路由** | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 无 | ⭐⭐ **中长期** | 架构重构大，建议 2.2 规划 |
| **Chat 统一工具面板/Terminal/Preview** | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 无 | ⭐⭐ **中长期** | UI 重构量大，需设计评审 |
| **DingTalk/QQ 群聊上下文模式/主动推送** | [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158) / [#7159](https://github.com/agentscope-ai/QwenPaw/issues/7159) | 无 | ⭐⭐⭐ **高** | 渠道侧刚需，社区贡献者活跃 |

---

## 7. 用户反馈摘要（真实痛点）

| 场景 | 原声摘录 | 情感倾向 | 隐性需求 |
|------|----------|----------|----------|
| **多步编码/分析任务** | “经常在‘Now 2.1, 3.1… Let me do all three.’后停止，没实际开始干也无任何视觉可见的提示” (#6921) | 😤 挫败 | **进度可见性** + **自动继续机制** |
| **弱网/移动办公** | “VPN 时整个桌面客户端基本不可用” (#6974) / “网络恢复后需手动重启” (#6932) | 😟 焦虑 | **网络抖动自适应** + **代理感知** |
| **长期项目维护** | “history.db 被撑爆到 7.6G，同一区间重复落库” (#7168) | 😱 恐惧 | **存储配额/清理策略** + **去重写入** |
| **非技术用户** | “新建聊天改称新任务更合适” (#6734) / “手机上入口在下面、停止按钮太靠前” (#7177) | 😐 困惑 | **术语对齐** + **移动端交互优化** |
| **多模态协作** | “对话里出现一个没法访问的图片链接，会话彻底挂掉” (#7110) | 😡 愤怒 | **资源引用容错** + **降级渲染** |

---

## 8. 待处理积压（长期未响应/高价值）

| 对象 | 标题 | 停滞天数 | 为何关注 | 建议动作 |
|------|------|----------|----------|----------|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | **自动模型路由** | 28 天 | 战略差异化能力，社区 👍 

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-21

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时累计 **100 条** Issue/PR 更新（Issues 50 条，PRs 50 条），其中新开/活跃 Issue 45 条、待合并 PR 48 条，显示核心团队与贡献者正处于密集并行开发期。
- **无新版本发布**，但多个 **P1/P2 级大型 PR**（`size:XL`）正在审核/堆叠，涉及提供商多模型、插件出站策略、Shell 安全策略、MCP 资源物化、运行时 Token 核算等核心架构变更。
- **RFC 讨论持续升温**：`#7155`（Shell 命令分级确认）、**#9487**（运行时会话所有权）、**#10118**（Rust 反模式治理）三大议题评论数居前，显示社区正在就安全边界、架构所有权、代码质量基线达成共识。
- **Bug 修复并行推进**：已关闭 5 个 Issue（含 1 个 P1 级 CI 审查器竞态、1 个 Windows 启动阻塞），多个 `risk:high`/`priority:p1` 修复 PR 处于审核末期。
- **插件/WASM 生态落地加速**：`#9582`、`#9584`、`#10146`、`#10076` 形成完整链路——从宿主出站策略、授予仪式、逻辑通道激活到综合插件架构 RFC，标志着“运行时插件化”里程碑进入工程化收尾阶段。

---

## 2. 版本发布

> 今日无新 Release 发布。

---

## 3. 项目进展（今日合并/关闭的关键 PR 与 Issue）

| 编号 | 标题 | 类型 | 影响面 | 状态 | 备注 |
|------|------|------|--------|------|------|
| [#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) | PR 审查器在合并后仍发布评审结果 | Bug / CI | `tooling/ci` | ✅ **CLOSED** | P1 级竞态修复，避免合并后误触发评审污染历史记录 |
| [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) | Windows: `TaskDialogIndirect` 入口点未找到 | Support / Desktop | `installation` | ✅ **CLOSED (duplicate)** | 已有同类 Issue 跟进，属依赖库版本不匹配 |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | OpenAI 工具调用在 `reasoning_effort` 被拒时失败 | Bug / Provider | `provider:openai` | ✅ **CLOSED** | P2 级，已在 `#9447`/`#9999` 栈式 PR 中修复终端响应分类逻辑 |

> **整体推进评估**：核心架构类 PR（`#9582`、`#9584`、`#9809`、`#9713`、`#10146`）均为 `size:XL` 且处于 **活跃审核/堆叠** 状态，预计未来 1–2 周内陆续合并，将显著推进“多模型提供商”、“插件出站治理”、“运行时 Token 可观测性”三大里程碑。

---

## 4. 社区热点（高互动 Issues/PRs）

| 编号 | 标题 | 评论 | 👍 | 标签 | 核心诉求分析 |
|------|------|------|-----|------|--------------|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: 高风险 Shell 命令逐次确认分级 + Claude Code 风格策略 | 23 | 0 | `enhancement, security, tool:shell, priority:p1, risk:high, status:accepted` | **安全与易用性平衡**：社区期望在“完全自动化”与“全人工确认”之间引入**分级确认机制**（allow/ask/deny），并参照 Claude Code 模式建立命令模式策略，已获维护者接受进入实现阶段。 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: 运行时拥有的会话与传输适配器 | 22 | 0 | `enhancement, runtime, gateway, channel:acp, priority:p2, risk:high` | **架构边界清晰化**：统一入口为 `InboundAction`，引入持久准入与歧义结果语义，解决“网关/通道/运行时”三方职责模糊导致的会话状态不一致。 |
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Tracker: Rust 反模式债务清理（307 处候选） | 16 | 0 | `cleanup, priority:p2, risk:high, status:in-progress` | **代码质量基线治理**：针对 `unwrap`/`expect`、`panic`、冗余 `clone` 等 307 处反模式制定分阶段清理计划，体现项目对生产级代码规范的严格追求。 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: 解耦内存生命周期策略与存储后端 | 14 | 0 | `enhancement, memory, gateway, priority:p2, risk:high` | **存储与策略分层**：将合并/治理等生命周期决策从 `Memory` trait 中剥离，避免每个网关/后端重复实现，利于多后端扩展。 |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC: Gemini Live 实时语音通道 | 14 | 0 | `enhancement, channel, provider:gemini, priority:p2, risk:high` | **多模态实时交互**：引入 Broker 契约，支持功能门控的实时语音通道，为未来多模态 Agent 奠基。 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: 维护者决策队列（RFC/设计/发布策略） | 13 | 0 | `tracker, priority:p2, status:accepted` | **治理流程显性化**：建立“决策队列”确保高风险 RFC 不被搁置，提升项目决策透明度与可预测性。 |

> **高评论 PR**（评论数字段为 `undefined`，但由 `size:XL`/`priority:p1`/`risk:high` 推断关注度最高）：
> - [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) / [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) —— 插件出站策略与授予仪式（**P1, risk:high, XL**）
> - [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) / [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) —— Git Shell 策略硬化与风险配置三态修正（**P1, risk:high, XL**）
> - [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) / [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) —— Anthropic/OpenAI 兼容层终端响应分类（**P1, XL, stacked**）

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 编号 | 标题 | 组件 | 是否有 Fix PR | 进展 |
|--------|------|------|------|---------------|------|
| **S1 工作流阻塞** | [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | OpenAI `reasoning_effort` 导致工具调用失败 | `provider` | ✅ `#9447` `#9999` (stacked) | 已关闭，修复合并中 |
| **S1 工作流阻塞** | [#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) | CI 审查器合并后仍发布结果 | `tooling/ci` | ✅ 已修复 | 已关闭 |
| **S2 行为降级** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | 交互式会话上下文被硬编码 32k 截断 | `runtime/daemon` | 🔄 `#9713` (相关) | PR `#9713` 引入 Token 核算可观测性，根因修复进行中 |
| **S2 行为降级** | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) | 精确代理选择器拒绝合法转录服务 | `config/onboarding` | 🔄 待 PR | 需调整选择器匹配逻辑 |
| **S2 行为降级** | [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) | `SECURITY.md` 引用已删除的 CI Docker 作业 | `docs, ci` | 🔄 待 PR | 文档与 CI 同步滞后 |
| **S3 轻微** | [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) | ZeroCode Health 面板法语/西语标签错位 | `zerocode/tui` | 🔄 `#10198` (测试层面) | good first issue，修复中 |
| **平台阻塞** | [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) | Windows `TaskDialogIndirect` 缺失 | `desktop` | ❌ duplicate | 依赖 `windows-rs` 版本升级 |

> **关注点**：`#10068`（上下文截断）直接影响长会话体验，`#9713` 虽提供可观测性但尚未修复根因；建议优先安排专人攻坚。

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能诉求 | 关联 PR/RFC | 纳入下一版本可能性 | 理由 |
|----------|----------|-------------|-------------------|------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | **单提供商配置多模型别名** | PR `#9809` (XL, P2) | ⭐⭐⭐⭐⭐ **极高** | 已进入审

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*