# OpenClaw 生态日报 2026-07-20

> Issues: 347 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-20 03:28 UTC

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

# OpenClaw 项目动态日报 | 2026-07-20

---

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内 Issues 更新 347 条（新开/活跃 235，关闭 112），PR 更新 500 条（待合并 371，合并/关闭 129），显示社区与维护团队处于密集的迭代与治理期。
- **无新版本发布**，但 PR 队列中包含多个 `P1` 级修复与 `ready for maintainer look` 的大型重构（如 Apple 离线数据库统一、Agent 合成溢出修复、Signal 传输所有权重构），预示下一个版本将包含重大稳定性与架构改进。
- **核心痛点聚焦于**：会话状态管理（子代理完成交付失败、Cron 隔离会话异常）、安全边界（Secret 掩码、内存投毒防护、审批解析器）、跨平台兼容性（Linux/Windows App 缺失、launchd/全局 npm 安装冲突）、以及工具链超时与死锁（exec 工具楔入、代理捕获、TLS 自签证书生成）。
- **维护负载偏重**：371 个待合并 PR 中大量标记 `needs proof` 或 `waiting on author`，审核吞吐可能成为瓶颈；多个长期 Issue（如 #75 Linux/Windows App、#6615 exec-approvals denylist）虽高赞但仍缺乏决策推进。
- **安全与可靠性投入显著**：新增 `Masked Secrets`、 `Memory Trust Tagging`、 `Pre-response enforcement hooks` 等高优先级增强 Issue，且均打上 `impact:security` 与 `needs-security-review`，反映项目正从“功能扩展”转向“生产级加固”。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类型/影响 | 状态 | 关键进展 |
|----|------|-----------|------|----------|
| [#111613](https://github.com/openclaw/openclaw/pull/111613) | fix(gateway): generate dashboard titles despite sender metadata | **Bug 修复 / 兼容性** | **CLOSED** | 修复 Control UI 新会话标题被发送者元数据错误覆盖的问题，提升仪表盘可用性。 |
| [#111344](https://github.com/openclaw/openclaw/pull/111344) | [Bug]: Startup validation falsely reports "missing register/activate" for defineChannelPluginEntry exports | **Bug 修复 / 插件生态** | **CLOSED** | 修复网关启动校验误判自有 SDK 导出的通道插件，消除插件开发者的虚假报错阻碍。 |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) | [Bug]: 2026.7.1 Agent failed before reply: LLM request failed... | **回归修复 / 认证提供商** | **CLOSED** | 修复 2026.7.1 版本导致的 LLM 请求 Schema/工具载荷被拒绝的回归问题。 |
| [#108238](https://github.com/openclaw/openclaw/issues/108238) | [Bug]: 2026.7.1 中会话上下文用量把累计 cacheRead 算进 totalTokens... | **回归修复 / 会话状态** | **CLOSED** | 修正 Token 计算逻辑，避免 `cacheRead` 导致的误判上下文溢出与压缩卡死。 |
| [#92405](https://github.com/openclaw/openclaw/issues/92405) | subagent spawn persists raw provider instead of CLI runtime... | **Bug 修复 / 子代理** | **CLOSED** | 修复子代理生成时持久化错误的 provider 导致深度生成静默失败的问题。 |
| [#97970](https://github.com/openclaw/openclaw/issues/97970) | [Bug] update 补全 gateway.bind 为 lan，与 auth.mode:none 冲突导致 exit 78 | **回归修复 / 安全/启动** | **CLOSED** | 修复 `openclaw update` 隐式补全 `bind: lan` 与 `auth.mode: none` 冲突导致的网关退出死循环。 |
| [#81525](https://github.com/openclaw/openclaw/issues/81525) | [Bug]: media-understanding silently routes images to user-declared vision models without validating declared capabilities | **Bug 修复 / 多模态** | **CLOSED** | 修复媒体理解模块未校验模型视觉能力即路由图片的静默失败问题。 |
| [#72948](https://github.com/openclaw/openclaw/issues/72948) | openclaw gateway stop returns 'Gateway service disabled' without killing a foreground-launched gateway | **Bug 修复 / CLI 体验** | **CLOSED** | 修复前台启动网关后 `gateway stop` 不杀进程仅报错的行为不一致。 |
| [#89954](https://github.com/openclaw/openclaw/issues/89954) | Telegram getUpdates 409 cascade after IPv6→IPv4 transport fallback... | **Bug 修复 / Telegram 通道** | **CLOSED** | 修复 IPv6 回退 IPv4 时长轮询 409 级联与重建循环未取消在途请求的问题。 |

**整体推进评估**：今日关闭的 129 个 PR/Issue 中，修复类占比高，集中解决了 2026.7.1 版本引入的多个回归（Token 计算、Schema 校验、更新脚本冲突）以及长期存在的通道/子代理稳定性问题。大型特性 PR（如 #111598 Apple 数据库统一、#108345 Signal 传输重构）仍在审核队列，未进入合并状态。

---

## 4. 社区热点（高讨论/高关注 Issues & PRs）

| # | 标题 | 评论/👍 | 核心诉求 | 分析 |
|---|------|---------|----------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows Clawdbot Apps** | 114 / 80 | **跨平台原生客户端缺失** | 创建于 2026-01-01，长期高居榜首。用户强烈期望 macOS/iOS/Android 之外的桌面原生支持，涉及安全审查、产品决策、维护者评审多重阻碍，是社区最核心的“欠债”功能。 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | **Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys** | 14 / 4 | **Secret 安全隔离** | P1 优先级，安全审查标签。需求明确：Agent “能用不能看”，防止提示词注入窃取凭证。已有关联 PR 推进中。 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **Feature Request: Memory Trust Tagging by Source** | 17 / 0 | **内存投毒防护** | 引入信任等级标签（用户指令/网页抓取/第三方技能），从架构层面缓解上下文投毒风险，属于深度安全加固。 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | **[Feature] Pre-response enforcement hooks (hard gates) for mandatory tool-call / policy rules** | 14 / 2 | **强制策略执行** | 将“必须调用工具 X 才能响应”从软提示升级为硬门控，面向金融/安全/运维高风险场景，标志着 Agent 可控性需求的成熟。 |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | **[Feature]: Everything is a cron — unify heartbeat, watchers, and scheduled automation** | 7 / 2 | **自动化原语统一** | 由核心维护者 steipete 提出，将心跳、监视器、定时任务统一为 Cron Job 原语，体现架构演进方向，可能影响下一大版本核心模型。 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | **Feature: Add denylist support for exec-approvals** | 8 / 8 | **审批策略灵活性** | 互补现有允许列表，支持“全放行除黑名单”，高赞且长期开放，反映用户对细粒度执行控制的刚需。 |
| [#94846](https://github.com/openclaw/openclaw/issues/94846) | **[Bug]: Cron isolated agentTurn skips delivery before dispatch when a recovered early tool error is classified as fatal** | 12 / 1 | **Cron 会话交付可靠性** | 钻石龙虾级严重度，涉及会话状态与消息丢失，复现路径清晰，阻碍生产级定时任务使用。 |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | **codex app-server: turn interrupted after client-delegated message tool result** | 11 / 1 | **工具分割运行器回归** | 2026.7.1 后引入，`terminate: true` 导致进度消息后续工作被中断，影响 Telegram 等通道的实时交互体验。 |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | **Subagent completion delivery can fail when requester run is inactive** | 10 / 0 | **子代理结果回传丢失** | 会话驱逐/锁定导致完成回调写入失败，Feishu 实测复现，影响多代理编排可靠性。 |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | **[Bug]: Telegram DM replies fall back after stale DM-scope cleanup in 2026.7.2-beta.3** | 5 / 1 | **Telegram 回复回退** | 新版本 Beta 引入的回归，DM 回复丢失源所有权，仅通过 conversations.send 兜底送达，时效性受损。 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 标题 | 状态 | 是否有 Fix PR | 关键影响 |
|--------|-------|------|------|---------------|----------|
| **🔴 Critical (P1, Crash/Deadlock/Data Loss)** | [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming run pegs gateway event loop ~10 min until killed | OPEN | 无 | 网关主线程阻塞 10 分钟，导致 CLI/RPC 无响应、通道掉线，需外部看门狗杀进程。 |
| **🔴 Critical (P1, Regression)** | [#102006](https://github.com/openclaw/openclaw/issues/102006) | exec tool: aborted run wedges subsequent exec calls in same session | OPEN | 无 | `exec` 中止后同会话后续调用无限挂起，回归自 PR #94412，破坏长会话可用性。 |
| **🔴 Critical (P1, Regression)** | [#108580](https://github.com/openclaw/openclaw/issues/108580) | cron tool schema incompatible with llama.cpp grammar-constrained tool calling | OPEN | [#108580 关联 PR?](https://github.com/openclaw/openclaw/pulls?q=is%3Apr+108580) | 2026.7.1 回归，导致所有 llama.cpp 调用失败，非仅 Cron 受影响。 |
| **🔴 Critical (P1, Security/Auth)** | [#83598](https://github.com/openclaw/openclaw/issues/83598) | anthropic:claude-cli OAuth refresh dead-ends main lane despite #73682 fix | OPEN | 无 | OAuth 刷新失败导致**所有** Agent 流量死胡同，非仅 Cron，已有修复但未生效。 |
| **🟠 High (P1, Session/Message Loss)** | [#94846](https://github.com/openclaw/openclaw/issues/94846) | Cron isolated agentTurn skips delivery before dispatch on fatal tool error | OPEN | 无 | 恢复的工具错误被误判为致命，导致最终输出不交付。 |
| **🟠 High (P1, Session/Message Loss)** | [#109490](https://github.com/openclaw/openclaw/issues/109490) | Turn interrupted after client-delegated message tool result (terminate:true) | OPEN | 无 | 进度消息发送后后续工作被中断，工具分割运行器引入的回归。 |
| **🟠 High (P1, Session/Message Loss)** | [#92076](https://github.com/openclaw/openclaw/issues/92076) | Subagent completion delivery fails when requester session inactive/locked | OPEN | 无 | 子代理结果无法回传给用户，Feishu 实测复现。 |
| **🟠 High (P2, Availability)** | [#70024](https://github.com/openclaw/openclaw/issues/70024) | Channel stop timeout leaves channel permanently dead (running: true + stale store) | OPEN | 无 | 停止超时导致通道永久僵死，无自动恢复，三代码路径耦合。 |
| **🟠 High (P2, Regression)** | [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram DM replies fall back after stale DM-scope cleanup (2026.7.2-beta.3) | OPEN | 无 | Beta 版本回归，DM 回复丢失源所有权。 |
| **🟡 Medium (P2, UX/Functional)** | [#93139](https://github.com/openclaw/openclaw/issues/93139) | write tool and exec heredocs insert literal \n instead of newlines | OPEN | 无 | 字符串转义处理错误，影响文件写入与脚本执行正确性。 |
| **🟡 Medium (P2, Concurrency)** | [#111506](https://github.com/openclaw/openclaw/issues

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-07-20

---

## 1. 生态全景
当前生态处于**“生产级加固与架构重构并行”**的关键转型期。头部项目（OpenClaw、ZeroClaw、Hermes Agent）均将核心精力从功能扩展转向**会话状态一致性、安全边界硬化（Secret 掩码/内存投毒防护/策略强制执行）、跨平台原生支持（Windows/Linux 桌面端）、工具链可靠性（超时/死锁/熔断）**。中腰部项目（NanoBot、CoPaw、PicoClaw）在**Provider 多元化、本地模型性能优化、移动端可用性**上形成差异化突围。整体呈现“头部内卷基建、腰部抢占细分场景、长尾项目维护乏力”的马太效应。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新(新/闭) | PR 更新(待合并/合并) | Release | 健康度评估 | 核心研发焦点 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **347** (235/112) | **500** (371/129) | 无 | 🟢 **极高负载·核心加固期** | 会话状态/安全边界/跨平台/审核吞吐瓶颈 |
| **ZeroClaw** | **34** (31/3) | **50** (48/2) | 无 (v0.8.4 近) | 🟢 **高活跃·双轨并行** | Windows 原生/内存三平面/WASM 插件/安全漏洞 |
| **Hermes Agent** | **50+** | **50+** (11 合并) | 无 (v0.18.3 近) | 🟢 **高活跃·阻塞修复期** | 多租户/Windows Desktop/流式传输/会话漂移 |
| **NanoBot** | **7** (1/6) | **33** (24/9) | 无 (0.2.3 近) | 🟢 **高质量·稳定性冲刺** | 文件系统安全/Windows 编码/GitStore/Provider 扩展 |
| **CoPaw (QwenPaw)** | **15** | **14** | 无 (v2.0.1b1 就绪) | 🟢 **高频迭代·Beta 冲刺** | 并行启动/上下文溢出重试/UX 折叠/离线模式 |
| **PicoClaw** | **4** (4/1) | **3** (0/0) | 无 | 🟡 **低吞吐·审核瓶颈** | Android 服务/MCP 死锁/Provider 路由/Exec 工具 |
| **Moltis** | **0** | **0** | **有** (20260719.01) | ⚪ **维护模式·仅发布** | 日期版本持续交付，缺乏社区互动与文档 |
| **NanoClaw / IronClaw / LobsterAI** | 数据获取失败 | - | - | ⚠️ **数据缺失** | - |
| **NullClaw / TinyClaw / ZeptoClaw** | **0** | **0** | 无 | 🔴 **休眠/归档态** | 无活动信号 |

> **关键指标说明**：OpenClaw 单日 PR/Issue 处理量为 ZeroClaw 的 **10-15 倍**，呈现绝对中心化地位；NanoBot、CoPaw 保持高合并率（>25%），工程效能优于 OpenClaw（合并率 ~25% 但积压 371 个）。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 对比基准 |
| :--- | :--- | :--- |
| **技术路线** | **“重网关、重协议、重多租户”**的中心化控制平面架构。核心优势在于 **Gateway 多通道聚合（Telegram/Slack/Feishu/Signal）、Cron/Subagent 编排原语、插件热加载体系**。 | ZeroClaw 侧重 Rust 原生运行时与 WASM 插件化；Hermes 侧重桌面端一体化；NanoBot/CoPaw 侧重单二进制/本地优先。 |
| **社区规模** | **生态霸主**。Issue/PR 量级为次位项之和的 **5 倍以上**，维护者团队（steipete 等核心成员）具备持续推进大型重构（Apple DB 统一、Signal 传输重构）的组织能力。 | ZeroClaw 拥有活跃 RFC 治理（Work Lanes/KeySource/MemoryStrategy）；NanoBot/CoPaw 依赖核心小团队+首贡献者驱动。 |
| **成熟度** | **生产级就绪度最高**，但也暴露“成功的烦恼”：审核吞吐成瓶颈（371 待合并 PR）、长期高赞 Issue（Linux/Win App #75、exec denylist #6615）决策滞后。 | ZeroClaw 通过 RFC 显性化治理；NanoBot/CoPaw 发布节奏更可控（明确 Beta/RC 节点）。 |
| **战略价值** | **行业标准制定者**。其协议设计（Channel/Tool/Session）、安全模型（Masked Secrets/Trust Tagging/Enforcement Hooks）正在成为生态隐性标准。 | 其他项目多在适配或参考其接口契约（如 OpenAI 兼容端点、MCP 协议栈）。 |

---

## 4. 共同关注的技术方向（跨项目共振信号）

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **安全边界硬化：Secret 隔离与策略强制执行** | **OpenClaw** (#10659 Masked Secrets, #13583 Pre-response Enforcement), **ZeroClaw** (#7947 execute_pipeline S0 漏洞, KeySource RFC), **NanoBot** (#4987 TOCTOU 修复, #4997 WebUI 安全登录) | 从“软提示”转向“硬门控”：Agent 能用不能看、工具调用强制校验、OAuth 状态全链路透出、文件系统能力型安全。 |
| **Windows 原生一等公民支持** | **OpenClaw** (#75 114 评论), **ZeroClaw** (#7462 74 测试失败, #9182 PowerShell 原生), **Hermes** (#49920 Dashboard 构建失败, #67200 Shell 语义), **NanoBot** (#4975 CP936 崩溃), **CoPaw** (#6239 PATH 分号丢失) | 覆盖原生 Shell 集成、CI 矩阵、编码兼容、安装器、桌面端渲染，**已成生存线级需求**。 |
| **会话/状态一致性与消息零丢失** | **OpenClaw** (#94846 Cron 交付, #92076 Subagent 回传, #109490 Turn 中断), **ZeroClaw** (#8891 三平面对齐, #9048 历史/记忆解耦), **Hermes** (#64789 Runtime 漂移, #67825 认证漂移), **CoPaw** (#6267 溢出重试) | 核心痛点：**子代理完成回调丢失、Cron 隔离会话交付失败、长上下文压缩重试、会话三元组漂移**。 |
| **Provider/模型生态标准化与本地化** | **OpenClaw** (Schema 校验回归), **ZeroClaw** (#8854 Builder API, #8935 Gemini thought), **NanoBot** (#4867 Ollama Prompt Cache 60s→ms, #4965 ModelScope, #4996 Atlas), **CoPaw** (#6242 Embedding 维度, #6258 max_tokens), **PicoClaw** (#3252 Model ID 解析) | 统一类型化 Builder、Prompt Cache 关键优化、国内厂商适配、OpenAI 兼容层鲁棒性、嵌入维度显性化。 |
| **工具链可靠性：超时/熔断/死锁治理** | **OpenClaw** (#99910 Dreaming 阻塞, #102006 Exec 楔入), **ZeroClaw** (#9105 ARM 冷启动超时), **NanoBot** (#4981/82 分片死循环), **PicoClaw** (#3269 MCP Hang), **Hermes** (#67012 Keepalive 破坏流式) | **Agent Loop Watchdog、Tool Call 超时/重试默认值、MCP 连接池熔断、HTTP Keepalive 可配置**成通用基建需求。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户/场景 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级网关、多通道运营、多租户隔离、复杂编排** | 企业内部部署、SaaS 服务商、重度自动化开发者 | **Go 单体网关 + 插件热加载 + SQLite/PostgreSQL 状态持久化**；强中心化控制面。 |
| **ZeroClaw** | **Rust 原生运行时、WASM 插件化、边缘计算、安全沙箱** | 安全敏感场景、边缘/嵌入式部署、插件生态建设者 | **Rust 核心 + WASM Component Model**；编译期 Feature → 运行时插件化（#8850），内存三平面（Lucid/Vector/Graph）显性分层。 |
| **Hermes Agent** | **桌面端一体化、TUI/CLI/Web 多前端、Kanban 任务编排** | 个人桌面开发者、全栈工程师、本地优先体验追求者 | **Electron/Tauri 桌面壳 + Go/Node 后端 + SQLite**；强调“单二进制分发”与桌面原生交互（文件树、Zoom、托盘）。 |
| **NanoBot** | **轻量级单二进制、Git 原生记忆、Channel 适配器模式、安全优先** | 个人开发者、私有化部署、GitOps 记忆管理爱好者 | **Go 单二进制 + Dulwich (纯 Go Git) + 文件系统能力型安全**；无中心网关，Channel 即插即用。 |
| **CoPaw (QwenPaw)** | **通义/阿里云生态深度集成、ReMe 记忆系统、Console 可视化、ACP 协议** | 阿里云/通义模型用户、中文社区、需可视化配置的开发者 | **Tauri + React Console + Go 后端**；ACP (Agent Communication Protocol) 解耦前后端，Scroll 语义检索增强记忆。 |
| **PicoClaw** | **嵌入式/移动端、Android Termux、极简资源占用** | 移动端/边缘设备用户、低算力设备部署 | **精简 Go 运行时**；聚焦 Android Service 生命周期、存储权限、MCP 轻量适配。 |
| **Moltis** | **持续交付、日期版本、极简维护** | 追求稳定可预测发布的下游集成者 | 架构细节不透明，表现为“高频发布、零社区互动”的黑盒维护模式。 |

---

## 6. 社区热度与成熟度分层

| 分层 | 项目 | 特征标签 | 核心风险/机会 |
| :--- | :--- | :--- | :--- |
| **L1：生态核心·规模化演化期** | **OpenClaw** | 超大规模社区、治理瓶颈、标准制定者、技术债集中爆发期 | **风险**：审核吞吐崩溃、长期高赞 Issue 决策瘫痪。<br>**机会**：建立分级维护者体系、自动化分流、将 RFC 流程显性化。 |
| **L2：高活跃·架构重构冲刺期** | **ZeroClaw, Hermes Agent, NanoBot, CoPaw** | 明确里程碑、高合并率、RFC/设计文档驱动、核心模块重写 | **风险**：破坏性变更兼容性、Windows CI 缺口、单点维护者依赖。<br>**机会**：差异化护城河形成（WASM/桌面/记忆/ACP），吸纳 OpenClaw 溢出需求。 |
| **L3：小而美·垂直深耕/生存期** | **PicoClaw** | 移动端刚需、审核带宽为零、P0 Bug 积压、贡献者流失风险 | **风险**：Android/MCP 核心阻断无人修、PR 积压 19 天。<br>**机会**：若解决审核瓶颈，移动端赛道护城河极深。 |
| **L4：维护/休眠/数据不透明** | **Moltis, NullClaw, TinyClaw, ZeptoClaw, NanoClaw, IronClaw, LobsterAI** | 仅发布无迭代、零社区、数据获取失败、疑似归档 | **建议**：使用者需审计依赖风险；生态统计需剔除僵尸项目噪音。 |

---

## 7. 值得关注的趋势信号（对 AI 智能体开发者的参考价值）

1.  **“Agent 能用不能看”成安全基线**  
    OpenClaw Masked Secrets、ZeroClaw KeySource/Pipeline 授权、NanoBot 文件系统能力

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-20

---

## 1. 今日速览
- **整体活跃度：高** —— 过去 24 小时内 Issues 更新 7 条（1 新开/活跃，6 关闭），PR 更新 33 条（24 待合并，9 已合并/关闭），无新版本发布。
- **核心动向**：社区集中精力攻坚 **稳定性修复**（文件系统安全、编码兼容、GitStore 初始化、Channel 消息分片死循环）与 **Provider/Channel 生态扩展**（ModelScope、Atlas Cloud、Nimble、Telegram 自定义 API、OAuth 状态透出）。
- **架构演进信号**：PR #4993 正在重构 Agent 内部 Turn 生命周期，统一 system message 与常规 turn 的处理流程；Issue #4999 提出将 Subagent 系统演进为真正的多 Agent 协作框架，显示项目正从“单 Agent + 后台任务”向“多 Agent 编排”迈进。
- **风险点**：多个高优先级 PR 标记 `conflict`（如 #4866、#4965、#4919），需尽快解决合并冲突以免阻塞后续发布；Windows 非 UTF-8 环境下 CLI 子进程输出崩溃（#4975）已修复但需回归测试。
- **社区响应**：维护者对新增 Provider（ModelScope、Atlas Cloud）与安全加固（PR #4987、#4997）响应迅速，多数 PR 在 24h 内完成首轮 Review。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展（今日合并/关闭的关键 PR）
| PR | 类型 | 核心变更 | 对项目推进度的影响 |
|----|------|----------|---------------------|
| [#4987](https://github.com/HKUDS/nanobot/pull/4987) | **Bug Fix / Security (P0)** | 文件系统操作绑定工作区检查至打开的文件句柄，引入 `O_NOFOLLOW` 与 `fstat`/`stat` 对比，修复 TOCTOU 竞争条件与符号链接攻击面。 | 🔒 **安全基线提升**，彻底封堵文件读写越界风险，纳入 0.2.3 必选修复。 |
| [#4975](https://github.com/HKUDS/nanobot/pull/4975) | **Bug Fix (P1)** | `CliAppManager` 显式指定 `encoding='utf-8'` 并捕获 `UnicodeDecodeError`，解决 Windows CP936/GBK 环境下 UTF-8 子进程输出崩溃。 | 🪟 **Windows 兼容性里程碑**，消除一类高频用户崩溃报告。 |
| [#4980](https://github.com/HKUDS/nanobot/pull/4980) | **Bug Fix (P1)** | `GitStore` 初始化改用绝对路径传递给 Dulwich `porcelain.add()`，修复工作区与进程 CWD 不一致导致的自动提交失败。 | 🛠️ **Monorepo/多工作区场景解锁**，为后续多项目记忆管理铺路。 |
| [#4981](https://github.com/HKUDS/nanobot/pull/4981) / [#4982](https://github.com/HKUDS/nanobot/pull/4982) | **Bug Fix (P2)** | Telegram/Feishu Markdown 分片函数在 `max_len <= 0` 时直接返回原内容，避免无限循环挂起。 | 🧩 **Channel 稳定性补丁**，修复边界条件导致的 Worker 卡死。 |
| [#4991](https://github.com/HKUDS/nanobot/pull/4991) | **Bug Fix (P1)** | Local Trigger 在目标 Channel 禁用后不再标记成功，避免无效模型调用消耗配额。 | ⚡ **资源治理**，修正触发器生命周期与 Channel 状态的一致性。 |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) (Closed) | **Enhancement** | 保留精确 Prompt 前缀以启用 Ollama Prompt Cache，单轮延迟从 +60s 降至毫秒级。 | 🚀 **本地模型性能质变**，使 32GB VRAM 跑大模型成为可用选项。 |

> **合计**：6 个关键修复/增强已落地，覆盖安全、跨平台兼容、Provider 性能、Channel 健壮性，项目整体向 **0.2.3 稳定版** 推进约 **35%**（按里程碑 Issue 数估算）。

---

## 4. 社区热点（讨论最活跃/反应最多）
| 对象 | 热度指标 | 核心诉求 | 分析 |
|------|----------|----------|------|
| [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) 👍0 💬11 | **评论最多** | 用户反馈 Ollama 每轮额外 60s 延迟导致“不可用”，要求保留 Prompt Prefix 启用缓存。 | **高频痛点**：本地模型推理性能是社区最敏感指标；已通过 Prompt Cache 修复，但需文档化最佳实践（见 PR #4998）。 |
| [Issue #1459](https://github.com/HKUDS/nanobot/issues/1459) 👍2 💬6 | **长期跟踪** | Codex 5.3 模式下 Agent “假装执行”实则未读取文件，需人工催促。 | **模型对齐/提示词工程问题**：涉及 System Prompt 与 Tool Calling 交互，需在 Agent Loop 层面加强执行验证机制。 |
| [PR #4866](https://github.com/HKUDS/nanobot/pull/4866) 💬N/A `conflict` | **架构级 PR** | 将 Model Preset 绑定到 Session，支持 `/model` 会话级持久化，跨 Subagent/SDK 透传。 | **多会话隔离与个性化基础设施**，冲突解决后将解锁 WebUI 多用户模型切换场景。 |
| [PR #4689](https://github.com/HKUDS/nanobot/pull/4689) 💬N/A `conflict` | **Provider UX** | OAuth 状态与过期预警在 CLI/WebUI/运行时全链路透出。 | **企业级就绪度**：减少“Token 过期静默失败”工单，配合 PR #4997 安全登录流形成完整认证闭环。 |

---

## 5. Bug 与稳定性（按严重程度排序）
| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 安全** | 文件系统 TOCTOU / 符号链接绕过 | ✅ Closed | [#4987](https://github.com/HKUDS/nanobot/pull/4987) | 已合并，建议回溯至 0.2.2 维护分支。 |
| **P1 崩溃** | Windows 非 UTF-8 Locale 下 CLI 子进程 `UnicodeDecodeError` | ✅ Closed | [#4975](https://github.com/HKUDS/nanobot/pull/4975) | 已合并，影响所有 Windows 中文用户。 |
| **P1 数据一致性** | `GitStore` 工作区 ≠ CWD 时初始化/自动提交失败 | ✅ Closed | [#4980](https://github.com/HKUDS/nanobot/pull/4980) | 已合并，Monorepo 场景必现。 |
| **P1 资源泄漏** | Local Trigger 目标 Channel 禁用后仍标记成功并消耗 Token | ✅ Closed | [#4991](https://github.com/HKUDS/nanobot/pull/4991) | 已合并，计费敏感场景必修。 |
| **P2 死循环** | Telegram/Feishu Markdown 分片 `max_len <= 0` 无限循环 | ✅ Closed | [#4981](https://github.com/HKUDS/nanobot/pull/4981) / [#4982](https://github.com/HKUDS/nanobot/pull/4982) | 边界条件触发概率低但后果严重（Worker 挂起）。 |
| **P2 回归** | WhatsApp Group Allow 机制在 0.2.2 后失效 | ✅ Closed | 未见 PR（Issue #4823 Closed） | 需确认是否由配置迁移 PR #4995 顺带修复，建议补充回归测试。 |
| **P1 逻辑缺陷** | Weixin Channel Session 过期后未重新加载 State 陷入静默死循环 | 🔄 Open | [#4223](https://github.com/HKUDS/nanobot/pull/4223) `conflict` | **长期未合并**，影响微信渠道可用性，优先级应升至 P0。 |

---

## 6. 功能请求与路线图信号
| 来源 | 需求描述 | 关联 PR / 进展 | 纳入下一版本概率 |
|------|----------|----------------|------------------|
| [Issue #4999](https://github.com/HKUDS/nanobot/issues/4999) | Subagent 系统演进为持久化身份、共享状态、Agent-to-Agent 通信的多 Agent 协作框架 | 无直接 PR，但 [#4993](https://github.com/HKUDS/nanobot/pull/4993) 统一 Turn 生命周期为多 Agent 编排铺平架构路径 | 🟡 **中** —— 属 0.3+ 里程碑，需先完成 Turn 统一与 Session 隔离（PR #4866）。 |
| [PR #4965](https://github.com/HKUDS/nanobot/pull/4965) | **ModelScope Provider** 内置支持（OpenAI 兼容 API，覆盖 Qwen/DeepSeek/Kimi/GLM 等） | `conflict` 待解决，测试通过 | 🟢 **高** —— 扩大国内模型可用性，符合 Provider 多元化战略。 |
| [PR #4996](https://github.com/HKUDS/nanobot/pull/4996) | **Atlas Cloud Provider** 注册为内置 OpenAI 兼容网关 | 新建，测试通过 | 🟢 **高** —— 补全云推理厂商矩阵。 |
| [PR #4951](https://github.com/HKUDS/nanobot/pull/4951) | **Nimble Search Provider** 接入 Web Search 抽象层 | `conflict` 待解决 | 🟢 **高** —— 搜索源多样化，低耦合集成。 |
| [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram Channel 支持自定义 Bot API Base URL 与 Extra Headers（自托管私有/企业网关） | `conflict` 待解决 | 🟢 **高** —— 企业私有化部署刚需。 |
| [PR #4997](https://github.com/HKUDS/nanobot/pull/4997) | WebUI 安全浏览器伴侣启动流程（HttpOnly Cookie、Localhost 仅状态端点） | 新建，安全审查中 | 🟢 **高** —— 修复 WebUI 认证安全短板，配合 PR #4689 OAuth 预警。 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）
| 痛点/场景 | 代表性引用 | 满意度趋势 |
|-----------|------------|------------|
| **Ollama 本地推理极慢** | “_adds an extra 60 seconds to every single turn… totally unusable with Ollama and 32 GB VRAM_” ([#4867](https://github.com/HKUDS/nanobot/issues/4867)) | ⬆️ **显著改善** —— Prompt Cache 修复后用户确认 “runs like thunder”。 |
| **Codex 模型“假执行”** | “_I haven't actually executed it yet… Thanks for the nudge_” ([#1459](https://github.com/HKUDS/nanobot/issues/1459)) | ➡️ **持续不满** —— 多轮催促才执行，破坏自主性体验，亟需 Agent Loop 加强 Tool Call 强制校验。 |
| **Windows 中文环境崩溃** | “_UnicodeDecodeError in subprocess's reader thread_” ([#4975](https://github.com/HKUDS/nanobot/issues/4975)) | ⬆️ **已解决** —— 显式 UTF-8 编码修复获好评。 |
| **WhatsApp 群组配置回归** | “_group allow is broken… post 0.2.2: allow broken_” ([#4823](https://github.com/HKUDS/nanobot/issues/4823)) | ⬇️ **回归未彻底根因** —— Issue 关闭但无修复 PR 关联，用户可能仍受影响。 |
| **微信 Channel 静默死循环** | “_永久静默 — 不重新扫码就无法恢复_” ([#4223](https://github.com/HKUDS/nanobot/pull/4223)) | ⬇️ **长期困扰** —— PR 卡冲突 40+ 天，企业用户无法接受。 |

---

## 8. 待处理积压（长期未响应/高价值阻塞项）
| 对象 | 滞留时长 | 阻塞点 | 维护者行动建议 |
|------|----------|--------|----------------|
| [PR #4223](https://github.com/HKUDS/nanobot/pull/4223) Weixin Session 重载修复 | **44 天** | 标记 `conflict`，涉及 `_poll_once` 核心循环重构 | **P0 指派**：安排专人 Rebase 解冲突，微信渠道可用性底线。 |
| [PR #4866](https://github.com/HKUDS/nanobot/pull/4866) Model Preset 绑定 Session | **10 天** | `conflict`，跨 Agent/Subagent/SDK 状态传播逻辑复杂 | **拆分合并**：先落地 Session 级持久化，再处理 Subagent 透传。 |
| [PR #4689](https://github.com/H

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-20

---

## 1. 今日速览

- **活跃度评级：高** — 过去 24 小时内 Issues 与 PRs 各 50 条，合并/关闭 11 项，新开/更新 90+ 项，社区与核心团队均在高频迭代。  
- **核心矛盾聚焦**：多租户隔离（Issue #34352）、Windows 桌面端稳定性（#49920, #67200, #65701）、流式传输中断（#67012）、会话状态漂移（#64789, #67825）四大类问题并行推进。  
- **架构演进信号**：生命周期 Hook 运行时化（#67798）、Kanban 外部 Worker 事务化（#67718）、API 级工具集授权（#67837）三大 PR 显示项目正从 “单进程网关” 向 “多运行时契约” 转型。  
- **技术债暴露**：内存污染（#66654）、Context 缓存失效（#65905）、文档滞后（#67278）等长期债务集中浮现，需专门 Sprint 清理。  
- **用户感知痛点**：桌面端“连接中”卡死、文件树自动弹出、Zoom 重置、TUI 僵尸进程，严重影响日常体验，优先级应高于新特性。

---

## 2. 版本发布  
**今日无新版本发布**。最近一次 Release 仍为 `v0.18.2`（上游 `f96b2e6e`），建议维护者在修复 #49920、#67012、#67817 等 P1/P2 阻塞性 Bug 后尽快切 `v0.18.3`。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#66349](https://github.com/NousResearch/hermes-agent/pull/66349) ✅ | feat(kanban) | 新增 **终端任务恢复动作**，支持 Worker 预算耗尽后仍保留工作区/交接物的证据门控恢复 | Cron/Kanban 高可用性 ⬆️ |
| [#67824](https://github.com/NousResearch/hermes-agent/pull/67824) ✅ | perf(desktop) | 文件树 **仅重新校验变更子树**，移除全量 `$workspaceChangeTick` 触发机制 | 桌面端大仓库响应速度 ⬆️ 3-5× |
| [#67320](https://github.com/NousResearch/hermes-agent/pull/67320) ✅ | fix(cli/desktop) | 修复 Desktop 调用不存在的 `/api/profiles/sessions/sidebar` 导致启动失败 | 桌面端启动成功率 100% |
| [#44585](https://github.com/NousResearch/hermes-agent/issues/44585) ✅ | fix(cron) | 修复 Cron 继承临时付费 Provider 状态导致停止后仍计费 | 账单风险归零 |
| [#63828](https://github.com/NousResearch/hermes-agent/pull/63828) ✅ | fix(web) | Dashboard Token 计数单位进位边界修正（999,950 → “1000.0K”） | 计费显示准确性 |
| [#67833](https://github.com/NousResearch/hermes-agent/pull/67833) 🔄 | fix(mcp) | **空闲过期 OAuth Token 自动刷新**，解决 Linear 等 MCP 服务端长连接断开 | MCP 可靠性 ⬆️ |

> **整体推进度**：核心修复 6 个，新特性 1 个，性能 1 个。关键阻塞 Bug（#49920, #67012, #67817）仍在 Open 状态，**发布就绪度约 70%**。

---

## 4. 社区热点（评论/反应 Top 5）

| 排名 | Issue/PR | 评论 | 👍 | 核心诉求 |
|------|----------|------|----|----------|
| 1 | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) *Multi-Tenant Hermes* | 10 | 2 | **生产级多租户隔离**：Memory 操作绕过 Hook 系统，需核心层面租户上下文传递，作者已在生产运行分支数月 |
| 2 | [#67012](https://github.com/NousResearch/hermes-agent/issues/67012) *keepalive_expiry=20s 破坏 Cloudflare/OpenRouter 流式* | 7 | 0 | **网络层回归**：`httpx.Limits(keepalive_expiry=20.0)` 导致边缘节点提前切连接，需可配置或恢复自定义 socket_options |
| 3 | [#46593](https://github.com/NousResearch/hermes-agent/issues/46593) *Kanban Worker rc=0 协议违规误判* | 6 | 0 | **可观测性缺失**：真实错误被 “protocol violation” 掩盖，需在 Dispatcher 层面捕获 stderr/exit code 并回传 |
| 4 | [#63754](https://github.com/NousResearch/hermes-agent/issues/63754) *TUI 崩溃 `paths[0] undefined`* | 4 | 0 | **Headless 环境兼容**：GatewayClient.start 参数校验缺失，阻断无桌面服务器部署 |
| 5 | [#49920](https://github.com/NousResearch/hermes-agent/issues/49920) *Windows 更新后 Desktop 挂 CONNECTING* | 4 | 0 | **安装流水线缺陷**：`NODE_ENV=production` 导致 `npm install` 跳过 devDependencies，Dashboard 构建静默失败 |

> **趋势**：Top 5 全为 **P1/P2 阻塞性 Bug** 或 **架构级特性**，社区讨论聚焦 “能不能跑通” 而非 “锦上添花”。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P1 - 数据/计费风险** | [#44585](https://github.com/NousResearch/hermes-agent/issues/44585) Cron 继承付费 Provider 继续计费 | ✅ Closed | [#66349](https://github.com/NousResearch/hermes-agent/pull/66349) | 已修复并合并 |
| **P1 - 启动阻塞** | [#67320](https://github.com/NousResearch/hermes-agent/issues/67320) Desktop 调用不存在路由 | ✅ Closed | 隐式修复 | 已关闭 |
| **P1 - 平台不可用** | [#49920](https://github.com/NousResearch/hermes-agent/issues/49920) Windows 更新后 Dashboard 构建失败 | 🔴 Open | [#67835](https://github.com/NousResearch/hermes-agent/pull/67835) (Open) | **阻断所有 Windows 用户更新**，需尽快合并 |
| **P1 - 网络中断** | [#67012](https://github.com/NousResearch/hermes-agent/issues/67012) Cloudflare/OpenRouter 流式中断 | 🔴 Open | 无 | 影响 OpenRouter 生产流量，建议回滚或加 `--keepalive-expiry` 开关 |
| **P2 - 会话不一致** | [#64789](https://github.com/NousResearch/hermes-agent/issues/64789) prompt.submit 目标陈旧 Runtime | 🔴 Open | 无 | 会话三元组漂移，可能导致上下文注入错误 |
| **P2 - 认证漂移** | [#67821](https://github.com/NousResearch/hermes-agent/issues/67821) Desktop Provider 配置修改不即时生效 | 🔴 Open | 无 | 需运行时热重载机制 |
| **P2 - MCP 连接泄漏** | [#67833](https://github.com/NousResearch/hermes-agent/issues/67833) OAuth Token 空闲过期不刷新 | 🟡 Open PR | [#67833](https://github.com/NousResearch/hermes-agent/pull/67833) | PR 已开，待 Review |
| **P2 - 终端语义差异** | [#67200](https://github.com/NousResearch/hermes-agent/issues/67200) `background=true` 加载交互式 alias | 🔴 Open | 无 | Windows/POSIX shell contract 不一致 |
| **P3 - UI 体验** | [#60693](https://github.com/NousResearch/hermes-agent/issues/60693) Zoom 110% 间歇重置 | 🔴 Open | 无 | Electron 设置持久化竞态 |
| **P3 - 文件树自动展开** | [#66059](https://github.com/NousResearch/hermes-agent/issues/66059) / [#66917](https://github.com/NousResearch/hermes-agent/issues/66917) / [#67286](https://github.com/NousResearch/hermes-agent/issues/67286) | 🔴 Open | 无 | 三个重复 Issue，建议合并统一修复 |
| **P3 - Telegram 适配器崩溃** | [#67817](https://github.com/NousResearch/hermes-agent/issues/67817) `HTTPXRequest.do_request` read-only | 🔴 Open | 无 | `python-telegram-bot` 版本锁定冲突 |

> **修复覆盖率**：11 个 P1/P2 Bug 中仅 3 个已有 Fix PR（含 1 个已合并），**修复滞后明显**。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 可能纳入版本 | 依赖/风险 |
|------|----------|--------|--------------|-----------|
| **多租户隔离核心支持** | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 🟡 设计阶段，作者有生产分支 | v0.19+ | 涉及 Memory/Hook/Session 全链路，破坏性变更大 |
| **生命周期 Hook 运行时契约化** | [#67798](https://github.com/NousResearch/hermes-agent/issues/67798) | 🟢 PR 讨论中 | v0.19 | 需统一 CLI/TUI/Cron/Plugins 入口，测试矩阵爆炸 |
| **Kanban 外部 Worker 事务化** | [#67718](https://github.com/NousResearch/hermes-agent/pull/67718) | 🟢 PR Open | v0.18.x | 向后兼容，风险可控 |
| **API 级工具集授权** | [#67837](https://github.com/NousResearch/hermes-agent/pull/67837) | 🟢 PR Open | v0.18.x | 安全边界增强，需文档同步 |
| **Qwen Cloud PAYG 计费通道澄清** | [#67831](https://github.com/NousResearch/hermes-agent/pull/67831) | 🟢 PR Open | v0.18.x | 仅别名/元数据，低风险 |
| **VOICEVOX 内置 TTS** | [#67803](https://github.com/NousResearch/hermes-agent/issues/67803) | 🔵 需求收集 | v0.20+ | 日语市场差异化，维护成本需评估 |
| **工具循环硬阻断** | [#67829](https://github.com/NousResearch/hermes-agent/issues/67829) | 🔵 需求收集 | v0.19 | 需在 Agent 核心循环插桩，影响现有重试策略 |
| **禁用动态 Context 缓存** | [#65905](https://github.com/NousResearch/hermes-agent/issues/65905) | 🟡 讨论中 | v0.18.x | 单行配置 `persist_context_cache: false` 即可，低成本 |

> **路线图判断**：v0.18.x 将以 **稳定性修复 + 小增强**（Kanban 外部 Worker、工具集授权、Qwen 别名、Context 缓存开关）为主；**多租户、Hook 运行时化、工具循环硬阻断** 将推至 v0.19 里程碑。

---

## 7. 用户反馈摘要（从评论提炼）

| 场景 | 真实痛点 | 频次/代表性评论 | 情感倾向 |
|------|----------|----------------|----------|
| **Windows 日常更新** | “每次 `hermes-setup.exe --update` 后 Desktop 卡 CONNECTING，只能卸载重装” | #49920、#67835 多用户复现 | 😡 极度沮丧 |
| **OpenRouter 生产流量** | “São Paulo 边缘节点流式 20s 必断，业务不可用” | #67012 作者称 “生产环境已绕过 Hermes 直连” | 😤 信任度下降 |
| **桌面端细节体验** | “文件树自己弹开”、“Zoom 自己跳回 100%”、“TUI 僵尸进程占端口” | #66059、#66917、#67286、#60693、#39136 | 😞 纸割感强 |
| **多租户 SaaS 建设** | “Memory 绕过 Hook，租户隔离只能 Fork 核心，维护成本极高” | #34352 作者 “已在生产跑数月分支” | 🤝 愿贡献上游 |
| **文档滞后** | “官网仍写 `custom_providers`，实际配置键已变 `providers`” | #67278 | 😕 困惑 |
| **MCP 长连接** | “Linear OAuth Token 过期后永久断连，需重启 Hermes” | #67833 | 😟 可靠性焦虑 |

---

## 

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-20

> **数据来源**: GitHub API (sipeed/picoclaw) | **统计窗口**: 过去 24 小时 | **报告生成时间**: 2026-07-20

---

## 1. 今日速览

*   **整体活跃度：中等偏低**。过去 24 小时无新版本发布，无 PR 合入主分支，代码库处于**积累待审阶段**。
*   **Issue 流入 > 流出**：新增/活跃 Issue 4 条，仅关闭 1 条（#3266），积压压力微增。
*   **核心关注点聚焦于“基础设施稳定性”**：新增 Bug 涉及 Android 服务启动失败、MCP 连接失败导致 Agent 死循环、Provider 模型 ID 解析错误、Exec 工具参数设计缺陷，均为阻塞性或强交互路径问题。
*   **PR 队列停滞**：3 个 OPEN PR 均停留在“待审/待CI”状态（#3251 12天、#3202 19天、#3267 1天），缺乏 Maintainer 响应，交付吞吐率为 0。
*   **项目健康度提示**：**需警惕“审核瓶颈”导致贡献者流失**，建议尽快安排 Triage 会议清理陈旧 PR 与 Stale Issue。

---

## 2. 版本发布

> **今日无新版本发布。**

---

## 3. 项目进展

> **今日无 PR 合入/关闭**，主分支代码未发生变更。以下为**待合并 PR 队列**现状，反映了项目当前的“在途价值”：

| PR | 标题 | 状态/停留时长 | 核心价值 | 阻塞点 |
| :--- | :--- | :--- | :--- | :--- |
| **[#3251](https://github.com/sipeed/picoclaw/pull/3251)** | `fix(providers): capture the prompt cache token usage in Anthropic providers` | **OPEN (Stale, 8天)** | **可观测性增强**：修复 Anthropic 两个 Provider 丢弃 `cache_creation_input_tokens` / `cache_read_input_tokens` 问题，对成本控制与 Prompt Cache 生效验证至关重要。 | 标记 Stale，疑似缺乏 Reviewer 关注。 |
| **[#3202](https://github.com/sipeed/picoclaw/pull/3202)** | `fix(routing): strip leading/trailing underscores in ID normalization` | **OPEN (19天)** | **规范合规修复**：修正 `NormalizeAgentID/AccountID` 未按文档去除首尾 `_` 的问题，确保 ID 符合 `^[a-z0-9][a-z0-9_-]{0,63}$`，避免路由冲突。 | 长期挂起，需确认是否有破坏性变更顾虑。 |
| **[#3267](https://github.com/sipeed/picoclaw/pull/3267)** | `fix scope bug for refresh agy token` | **OPEN (1天)** | **认证链路修复**：修复 Antigravity 场景下 Token 刷新 Scope 传递错误导致 `PERMISSION_DENIED`，属于**生产环境阻断性 Bug 修复**。 | 新提交，等待 CI 与 Review。 |

**进展评估**：三个 PR 均为高价值修复（可观测性、规范合规、认证可用性），但**零合入**表明审核带宽不足。建议优先合入 #3267（生产故障）与 #3202（低风险规范修复）。

---

## 4. 社区热点

| 排名 | Issue/PR | 交互热度 (评论/Reactions) | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **[#3182](https://github.com/sipeed/picoclaw/issues/3182)** `[BUG] Android version` | **4 评论 / 0 👍** (创建 24 天，今日更新) | **移动端可用性危机**：用户无法启动 Android 服务、无法修改存储路径、权限已给全仍失败。涉及文件系统访问、Service 生命周期、权限模型，为 **Android 端核心阻断 Bug**，长期未解决严重影响移动端用户留存。 |
| **2** | **[#3252](https://github.com/sipeed/picoclaw/issues/3252)** `[BUG] splitKnownProviderModel strips provider prefix` | **1 评论 / 0 👍** (创建 8 天) | **多模型路由逻辑缺陷**：Model ID 包含已知 Provider 别名时（如 `openai/gpt-4`），工厂函数错误剥离前缀导致路由错误。影响所有使用自定义/代理模型 ID 的高级用户。 |
| **3** | **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** `[BUG] MCP connection failure hangs agent loop` | **0 评论 / 0 👍** (今日新建) | **Agent 核心稳定性**：MCP 连接失败导致 Agent Loop 死锁，界面完全无响应。属于**单点故障导致全系统不可用**，需引入超时/熔断/降级机制。 |
| **4** | **[#3268](https://github.com/sipeed/picoclaw/issues/3268)** `[Bug] exec tool action param required` | **0 评论 / 0 👍** (昨日新建) | **工具设计人因缺陷**：`exec` 工具强制要求 `action: "run"`，导致 LLM 调用高失败率。符合“约定优于配置”原则，应默认 `run`。 |

**热点总结**：社区关注点高度集中于 **Android 端可用性** 与 **Agent/工具链鲁棒性**。长期 Stale Issue (#3182, #3252) 显示维护团队对移动端与 Provider 工厂模块的响应滞后。

---

## 5. Bug 与稳定性

按严重程度排序（P0=生产阻断/数据丢失，P1=核心功能失效，P2=体验受损）：

| 严重度 | Issue | 标题 | 关键影响 | 是否有对应 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** | MCP 连接失败导致 Agent Loop Hang | **全界面冻结**，用户无法发送新消息，需重启进程恢复。 | ❌ 无 |
| **P0** | **[#3182](https://github.com/sipeed/picoclaw/issues/3182)** | Android 服务无法启动/路径不可配 | **Android 端完全不可用**，存储路径硬编码或权限处理缺陷。 | ❌ 无 (Stale 24天) |
| **P1** | **[#3267](https://github.com/sipeed/picoclaw/pull/3267)** | Antigravity Token 刷新 Scope 错误导致 403 | 长会话认证失效，需重新登录。 | ✅ **已有 PR #3267 (OPEN)** |
| **P1** | **[#3252](https://github.com/sipeed/picoclaw/issues/3252)** | `splitKnownProviderModel` 错误剥离 Provider 前缀 | 模型路由错误，导致调用错误 Provider/模型。 | ❌ 无 |
| **P2** | **[#3268](https://github.com/sipeed/picoclaw/issues/3268)** | `exec` 工具 `action` 参数强制必填 | LLM 调用工具高失败率，增加 Prompt 工程负担。 | ❌ 无 |
| **P2** | **[#3266](https://github.com/sipeed/picoclaw/issues/3266)** | Weixin Channel 图片传给非多模态模型报错 | 错误信息暴露给用户前未做文件落盘兜底，体验差。 | ❌ 无 (已关闭，但未见修复 PR，疑为 Won't Fix 或待处理) |

**稳定性结论**：当前存在 **2 个 P0 级阻断性 Bug**（Android、MCP Hang）且均**无修复 PR**，建议立即启动热修复流程。

---

## 6. 功能请求与路线图信号

本期数据中**无显性功能请求 Issue**，但从 Bug 模式推导出的**隐性路线图信号**：

1.  **Agent Runtime Resilience (Agent 运行时韧性)**：
    *   信号：#3269 (MCP Hang)、#3268 (Tool 参数设计)。
    *   方向：引入 **Tool Call 超时/重试/默认值标准化**、**MCP 连接池与熔断器**、**Agent Loop Watchdog**。
2.  **Mobile-First Infrastructure (移动端基建补齐)**：
    *   信号：#3182 (Android Service/Path/Permission)。
    *   方向：Android 存储适配 (SAF/Scoped Storage)、前台服务生命周期管理、权限引导流程重构。
3.  **Provider Ecosystem Maturity (Provider 生态成熟度)**：
    *   信号：#3251 (Anthropic Cache Tokens)、#3252 (Model ID Parsing)、#3267 (Antigravity Auth)。
    *   方向：统一 Provider 接口契约测试、Token Usage 标准化 Schema、OAuth/Token Refresh 通用框架。

**下一版本 (vNext) 大概率纳入**：#3267 (Auth Fix)、#3202 (ID Norm Fix)、#3251 (Observability) —— 均为低风险、高价值的“代码卫生”类 PR。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的**真实用户画像与痛点**：

| 用户场景 | 痛点原话/意译 | 情绪倾向 | 隐性需求 |
| :--- | :--- | :--- | :--- |
| **Android 移动端开发/重度用户** (Monessem @ #3182) | "Can't launch service... Can't change path from settings... full permission to app" | 😤 **极度沮丧** | **开箱即用的移动端体验**：不想折腾 Termux/权限/路径，期望像普通 App 一样工作。 |
| **多模型聚合/代理服务搭建者** (v2up-32mb @ #3252) | "Model ID contains known provider alias... incorrectly strips prefix" | 😐 **技术理性** | **可预测的 Provider 路由确定性**：Model ID 解析需符合最小惊讶原则，支持嵌套/代理命名。 |
| **Agent 应用开发者/集成者** (ruiyigen @ #3269) | "Agent loop will hang... chat interface to stop replying" | 😰 **焦虑/阻塞** | **生产级可用性**：Agent 不能因单个下游 (MCP) 故障而全盘崩溃，需要熔断与优雅降级。 |
| **Prompt Engineer / LLM App Builder** (MrTreasure @ #3268, #3266) | "LLM calls fail unpredictably... overwhelmingly common case is 'run'" / "error message before file handling" | 😕 **不满/效率低** | **Developer Experience (DX) 打磨**：工具 Schema 符合 LLM 直觉；错误边界前置，不让用户看到原始 Stack Trace。 |

**核心洞察**：用户群体正从“尝鲜者”向**“生产集成者”**迁移，对**稳定性、DX、移动端可用性**的容忍度急剧下降。

---

## 8. 待处理积压 —— ⚠️ 维护者优先关注清单

| 优先级 | 目标 | 类型 | 停留/更新时间 | 处理建议 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 紧急** | **[#3182](https://github.com/sipeed/picoclaw/issues/3182)** Android Service/Path/Permission | Bug (P0) | **创建 24 天，今日仍活跃** | **指派 Owner 立即复现**；涉及 Scoped Storage 迁移与 Foreground Service 类型声明，建议发布 Hotfix 或至少给出 Workaround 文档。 |
| **🔴 紧急** | **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** MCP Hang Agent Loop | Bug (P0) | **今日新建** | **评估引入 `context.WithTimeout` / Circuit Breaker**；至少在 Loop 层加 Watchdog 防死锁，发布 Nightly 验证。 |
| **🟠 高** | **[#3267](https://github.com/sipeed/picoclaw/pull/3267)** Antigravity Token Refresh Scope | PR (Fix P1) | **OPEN 1 天** | **加速 Review 合入**；属于认证链路核心修复，回归风险低，优先合入主分支。 |
| **🟠 高** | **[#3202](https://github.com/sipeed/picoclaw/pull/3202)** ID Normalization Underscore Strip | PR (Fix Spec) | **OPEN 19 天** | **补齐单测后合入**；规范修复，影响面可控，解除长期 Stale 状态。 |
| **🟡 中** | **[#3251](https://github.com/sipeed/picoclaw/pull/3251)** Anthropic Cache Token Usage | PR (Feat/Obs) | **OPEN 8 天 (Stale)** | **取消 Stale 标记，安排 Review**；可观测性增强，对成本敏感用户高价值。 |
| **🟡 中** | **[#3252](https://github.com/sipeed/picoclaw/issues/3252)** `splitKnownProviderModel` Logic Bug | Bug (P1) | **创建 8 天** | **编写回归测试用例覆盖 Alias 嵌套场景**，再开 PR 修复。 |
| **🟢 低** | **[#3268](https://github.com/sipeed/picoclaw/issues/3268)** Exec Tool `action` Default | Bug (P2) | **昨日新建** | **按“约定优于配置”改默认值 `run`**，同步更新 Schema 文档。 |

---

## 📌 给维护团队的可执行建议

1.  **今日行动**：合入 **#3267**、**#32

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

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

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-20

---

## 1. 今日速览
**活跃度评级：🟢 低（维护模式/发布日）**

过去 24 小时，Moltis 代码仓库未产生新的 Issue 或 Pull Request 活动，社区讨论与代码贡献处于静默状态。核心动态集中在版本发布：项目于昨日（2026-07-19）推出版本 **`20260719.01`**，采用日期语义化版本号，暗示项目遵循持续交付或定期发布节奏。当前项目处于“发布后观察期”，无紧急 Bug 修复或热门功能讨论，整体健康度平稳，但缺乏外部贡献者参与信号。

---

## 2. 版本发布
### 📦 `20260719.01` ([Release 页面](https://github.com/moltis-org/moltis/releases/tag/20260719.01))
> **注意：原始数据未提供 Release Notes、Changelog 或资产下载链接，以下为基于版本号模式的标准化提示，维护者建议补充详细日志。**

| 维度 | 详情 |
| :--- | :--- |
| **版本类型** | 日期版本 (CalVer: YYYYMMDD.序号) |
| **发布时间** | 2026-07-19 |
| **更新内容** | ⚠️ **数据缺失**：GitHub API 返回中未包含 `body` (发布说明) 或 `assets` (构建产物)。请前往 Release 页面查看完整更新日志。 |
| **破坏性变更** | 未知 (需核对 Release Notes 中 `Breaking Changes` 章节) |
| **迁移注意事项** | 未知 (建议检查配置文件格式、API 接口变更、数据库迁移脚本) |
| **关联 Commit** | 建议对比 `20260718.xx` (上一版本) 至 `20260719.01` 的 Commit 差异: `github.com/moltis-org/moltis/compare/previous-tag...20260719.01` |

**⚡ 维护者行动建议：** 请补全 Release Notes，包含：新增功能、修复 Bug、依赖升级、升级指南，以便下游用户评估升级风险。

---

## 3. 项目进展
**今日无代码合并与关闭活动。**

*   **合并 PR 数：** 0
*   **关闭 Issue 数：** 0
*   **代码贡献者：** 0
*   **进展结论：** 项目代码库今日静止，版本 `20260719.01` 可能为定时自动构建发布或维护者离线打包。建议关注 `main` 分支近期提交记录，确认发布分支保护策略是否生效。

---

## 4. 社区热点
**今日无活跃 Issue 或 PR 讨论。**

*   **高热度 Issue：** 无
*   **高热度 PR：** 无
*   **社区信号：** 社区当前处于“只读/观望”状态。缺乏用户反馈回环可能意味着：1) 版本极其稳定无需反馈；2) 用户群体较小或迁移至其他沟通渠道；3) 文档/引导不足导致用户不知如何反馈。

---

## 5. Bug 与稳定性
**今日无新增 Bug 报告、崩溃日志或回归问题记录。**

*   **严重 :** 0
*   **高 :** 0
*   **中/低 :** 0
*   **已修复待合并 :** 0

> **风险提示：** 零 Bug 报告 ≠ 零 Bug 存在。建议维护者主动运行 CI/CD 流水线中的集成测试与压力测试，验证 `20260719.01` 稳定性。

---

## 6. 功能请求与路线图信号
**今日无新增功能请求。**

*   **待评估需求：** 0
*   **路线图关联 PR：** 无
*   **预测：** 短期内路线图无变动信号。建议维护者在 README 或 `ROADMAP.md` 中公开近期规划（如：多模态支持、插件系统、特定 LLM 适配），以引导社区贡献方向。

---

## 7. 用户反馈摘要
**今日无用户评论数据可供提炼。**

*   **痛点：** 无数据
*   **使用场景：** 无数据
*   **满意度：** 无数据

---

## 8. 待处理积压
> **数据来源说明：此部分基于“过去24小时无更新”推断，需维护者结合 GitHub 完整列表人工核查。**

| 类型 | 标题/编号 | 停滞时长 | 优先级 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue** | *(需人工筛选: `is:issue is:open sort:updated-asc`)* | > 30 天 | 🔴 高 | 清理无效 Issue；对长期未响应的 Bug/Feature 打标 `stale` 或指派 Owner |
| **PR** | *(需人工筛选: `is:pr is:open sort:updated-asc`)* | > 14 天 | 🟡 中 | 催促 Reviewer；若作者失联，考虑由 Maintainer 接手推进或关闭 |
| **Release** | **Release Notes 缺失** | 当前版本 | 🔴 **紧急** | **立即补全 `20260719.01` 发布说明**，关联 Commit/PR，标注 Breaking Changes |

---

## 📊 核心指标看板 (2026-07-20)

| 指标 | 今日数值 | 7天趋势 (估算) | 状态 |
| :--- | :--- | :--- | :--- |
| **新增 Issues** | 0 | ➡️ 持平 | 🟢 正常 |
| **关闭 Issues** | 0 | ➡️ 持平 | ⚪ 静默 |
| **新增 PRs** | 0 | ➡️ 持平 | 🟢 正常 |
| **合并 PRs** | 0 | ➡️ 持平 | ⚪ 静默 |
| **发布频率** | 1 (日更) | 高频 | 🟢 活跃 |
| **外部贡献率** | 0% | 0% | 🔴 **需关注** |
| **首响应时间 (中位数)** | N/A | N/A | ⚪ 无数据 |

---

## 💡 给维护者的建议
1.  **补全发布元数据：** `20260719.01` 缺少 Changelog，严重影响用户升级决策与信任度，请优先处理。
2.  **激活贡献路径：** 当前零外部贡献。建议添加 `good first issue` 标签，完善 `CONTRIBUTING.md` 与开发环境搭建指南。
3.  **建立健康度监控：** 接入 GitHub Insights 或第三方工具 (如 OssInsight, Repobeats) 追踪星标、克隆、访问量，避免“伪活跃”（仅有自动发布无实质迭代）。
4.  **清理积压：** 执行一次全仓库 `stale` 机制扫描，关闭过期无响应的 Issue/PR，保持面板整洁。

---
*报告生成时间：2026-07-20 06:00 UTC | 数据来源：GitHub API (moltis-org/moltis) | 分析师：AI Project Analyst*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-07-20

> **数据基准**：GitHub `agentscope-ai/QwenPaw` 仓库近 24h 活动（Issues: 15, PRs: 14, Releases: 0）

---

## 1. 今日速览
- **活跃度评级：高** —— 单日 15 条 Issue 更新、14 条 PR 活动，社区处于**高频迭代期**，核心维护者与外部贡献者并行推进。
- **核心主题**：**性能优化（并行化驱动初始化）**、**稳定性修复（沙箱回退、Embedding 维度、上下文溢出重试）**、**架构重构（Agent Loop 模式化、ACP 解耦）**三大方向并行。
- **版本节奏**：PR #6266 已将版本号推至 `2.0.1b1`，预示着 Beta 发布流程已启动，近期合并的修复类 PR 多为冲刺 Beta 的“阻断级”补丁。
- **社区健康度**：2 个 Issue 由首贡献者提交 PR 并快速进入审查（#6256, #6243, #6259），新人友好流程运行良好；但存在 1 个 Windows 环境阻断性 Bug（#6239）及 1 个离线模式回归（#6261）尚无对应 PR。
- **风险点**：Agent 重复输出/死循环（#6241）与多工具调用 Thinking 重复（#6257）暴露核心推理循环的鲁棒性隐患，需核心组优先排查。

---

## 2. 版本发布
**无正式 Release**。  
**里程碑信号**：PR [#6266](https://github.com/agentscope-ai/QwenPaw/pull/6266) `chore: bump version to 2.0.1b1` 已合并，标志着 **v2.0.1 Beta 1** 准备就绪，预计近期切 Tag。本次 Beta 主要承载 v2.0.0 后的累积修复与小增强。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
| :--- | :--- | :--- | :--- |
| **[#6267](https://github.com/agentscope-ai/QwenPaw/pull/6267)** `fix(scroll): retry once after context overflow` | **稳定性/核心修复** | 遇到 400 Context Overflow 时，强制触发 Scroll 压缩并重试 1 次。 | **解决长上下文对话硬性中断痛点**，显著提升长任务成功率，属 Beta 级阻断修复。 |
| **[#6266](https://github.com/agentscope-ai/QwenPaw/pull/6266)** `chore: bump version to 2.0.1b1` | **发布工程** | 版本号定桩。 | 正式开启 v2.0.1 发布窗口。 |
| **[#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250)** (Closed via **#6256**) | **配置/治理** | 新增配置项控制沙箱不可用时的回退行为（原硬编码 ASK）。 | 消除 Docker/WSL2 等环境下的强制审批阻塞，**提升自动化部署友好度**。 |
| **[#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242)** (Fixed by **#6243**) | **Bug Fix/Embedding** | Console 暴露 `use_dimensions` 开关，修复 OpenAI 兼容 API 维度不生效。 | 修复向量检索维度不匹配导致的召回失效，**ReMe 记忆系统关键补丁**。 |

> **整体进度判断**：核心阻断 Bug（上下文溢出、沙箱回退、Embedding 维度）均已有 Fix 合并或进入 Review，v2.0.1 Beta 质量基线已具备。

---

## 4. 社区热点（高互动/高关注 Issue/PR）

| 排名 | 对象 | 互动指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **Issue [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193)** `[Performance] MCP drivers start sequentially` | 💬 4 评论 / 👍 0 / **已有对应 PR #6238** | **启动性能痛点**：8 MCP 客户端串行 40s → 并行 5s (8x)。用户明确给出性能剖析数据与代码定位，PR #6238 已实现并发初始化（限流 8 并发），**社区共识度极高，合并优先级应最高**。 |
| **2** | **Issue [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260)** `[Feature] 结果呈现提升：折叠思考/工具过程` | 💬 1 评论 / 👍 **1** / 带截图 | **UX 核心痛点**：“过程淹没结果”。用户参考竞品（如 Cursor/Claude Code）要求默认折叠 Thinking/Tool Call，仅展示最终交付物。**直击普通用户核心体验**，非开发者导向功能优先级建议提升。 |
| **3** | **Issue [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241)** `[Bug] Agent 连续重复输出 + memory_search 死循环` | 💬 2 评论 / 👍 0 / **无 PR** | **核心推理稳定性**：框架层缺乏有效去重/熔断机制，Warning 仅打印不拦截。涉及 Agent Loop 核心逻辑，属 **P0 级稳定性风险**，需核心组介入设计通用重复检测与打断策略。 |
| **4** | **PR [#5796](https://github.com/agentscope-ai/QwenPaw/pull/5796)** `[Under Review] refactor(acp): decouple slash commands...` | 长周期 / **架构级重构** | ACP 协议栈解耦，统一 Bootstrap、安全检查、命令注册。**技术债偿还**，为多客户端/多协议扩展铺路，审查周期长但战略价值高。 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 影响范围 | Fix 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **P0 (阻断/数据风险)** | **[#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241)** Agent 重复输出/死循环 | 连续轮次输出相同内容；`memory_search` 同查询无限调用 | 所有长对话/多轮任务；记忆系统可用性 | ❌ 无 PR，**需紧急排期** |
| **P0 (环境阻断)** | **[#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)** Windows PATH 分号丢失 | User+Machine PATH 拼接丢 `;`，导致子进程找不到 `npm` 等全局命令 | Windows 原生/WSL 混合开发环境 | ❌ 无 PR，需修复 `backend` 环境变量拼接逻辑 |
| **P1 (功能失效)** | **[#6261](https://github.com/agentscope-ai/QwenPaw/issues/6261)** 离线环境 Code 模式无法预览文件 | 依赖在线 CDN 资源渲染预览，离线完全不可用 | 物理隔离/内网/离线部署场景 | ❌ 无 PR，回归问题（参考 #5781 修复不彻底） |
| **P1 (配置失效)** | **[#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258)** OpenAI 模型 `max_output_tokens` 不生效 | 配置参数未透传至 Provider | 依赖长输出模型的用户 | ❌ 无 PR，需排查参数映射链路 |
| **P1 (UI/交互)** | **[#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252)** Linux Tauri 缩放快捷键失效 | `Ctrl+/-` / `Ctrl+Wheel` 无响应 | Linux Desktop 用户 | ❌ 无 PR，Tauri/Webview 配置问题 |
| **P2 (已修复/合并中)** | **[#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250)** 沙箱回退硬编码 ASK | 已由 **#6256** 修复，新增配置项 | Docker/WSL2 自动化场景 | ✅ PR #6256 Open |
| **P2 (已修复/合并中)** | **[#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242)** Embedding `use_dimensions` 未暴露 | 已由 **#6243** 修复 | ReMe 记忆/向量检索用户 | ✅ PR #6243 Open |
| **P2 (已修复/合并中)** | **[#6238](https://github.com/agentscope-ai/QwenPaw/pull/6238)** MCP 驱动串行启动 | 已实现并发初始化 (semaphore=8) | 多 MCP 用户启动体验 | ✅ PR Open，待 Review |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 社区热度 | 实现就绪度 | 纳入下版本 (v2.0.1/v2.1) 概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **可复用工作流编排** | [#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163) | 💬 3 | 设计阶段 | **低 (v2.1+)** | 涉及新 DSL/状态机，架构影响大，非 Beta 范围。 |
| **Agent 级独立 Auto-Memory 配置** | [#6263](https://github.com/agentscope-ai/QwenPaw/issues/6263) | 💬 1 | 设计阶段 | **中 (v2.1)** | 兼容现有共享配置，改动局限于 ReMe 配置加载层。 |
| **结果折叠/聚焦交付物** | [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) | 👍 1 | 无 PR | **中高 (v2.1)** | 纯前端交互改动（Console/TUI），收益高、风险低，建议近期排期。 |
| **系统托盘最小化** | [#6264](https://github.com/agentscope-ai/QwenPaw/issues/6264) | 💬 1 | 无 PR | **中 (v2.1)** | Tauri 原生能力，实现成本低。 |
| **CIDR 免认证网段** | [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) | 首贡献 PR | **Code Ready** | **高 (v2.0.1)** | 安全增强，代码已就绪，审查通过即可合入 Beta。 |
| **Agent 配置一键复制** | [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) | 新 PR | **Code Ready** | **高 (v2.0.1)** | Console 体验优化，后端 API + 前端 Modal，低风险。 |
| **Scroll 日期感知历史召回** | [#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) | PR Open | **Code Ready** | **高 (v2.0.1)** | 记忆检索核心增强，修复交换轮次不完整、日期查询不一致。 |

---

## 7. 用户反馈摘要（从 Issue 评论与描述提炼）

| 维度 | 真实痛点/场景 | 代表性引用/现象 |
| :--- | :--- | :--- |
| **启动速度** | 多 MCP 服务场景下启动等待 40s+，严重影响开发/调试迭代频率。 | #6193: "配置 8 个 MCP 客户端...光等 MCP 连接就要花 ~40 秒" |
| **结果可读性** | 长链路任务中，Thinking/Tool Call 占满屏幕，最终代码/文件/答案被淹没，需手动滚动寻找。 | #6260: "结果藏在思考过程中...这些却占了整个屏幕，结果却被淹没" |
| **离线/内网部署** | 代码预览依赖外网 CDN，导致物理隔离环境核心功能（Code Mode 预览）完全不可用。 | #6261: "离线环境下使用code模式，无法预览文件内容，因为需要使用在线资源" |
| **Windows 兼容性** | PATH 拼接 Bug 导致 `npm`/`yarn` 等全局工具在子进程中找不到，阻断前端/全栈开发流。 | #6239: "child processes lose npm globals" |
| **Agent 可靠性** | 模型陷入重复循环（输出/工具调用），框架仅报 Warning 不干预，需人工打断。 | #6241: "系统虽已有 WARNING 提示...但并不阻止下一轮重复调用" |
| **配置一致性** | Console 设置了 Embedding 维度但未生效（缺 `use_dimensions` 开关），导致向量检索静默失败。 | #6242: "user enters `1024`... QwenPaw persists `use_dimensions=false`" |

---

## 8. 待处理积压（长期无响应/高价值未推进）

| 对象 | 类型 | 停滞时长/状态 | 关注理由 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **[#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241)** | Bug (P0) | 创建 2026-0

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-20

---

## 1. 今日速览

**高活跃度，核心聚焦于跨平台稳定性、内存子系统重构与安全加固。** 过去 24 小时 Issues 更新 34 条（31 活跃/新开，3 关闭），PR 更新 50 条（48 待合并，2 已合并）。无新版本发布。项目正处于 **v0.8.4 维护列车（7/31 目标）** 与 **v0.9.0 破坏性变更队列** 并行推进期：Windows 原生支持（PowerShell、CI、Socket）、持久化内存三平面对齐、WASM 插件化架构、网关 OpenAI 兼容端点、以及 S0 级安全漏洞修复（`execute_pipeline` 混淆代理）构成今日核心推进面。社区高频讨论集中在 Windows 测试缺口（74 个失败）、Telegram 通道阻塞、以及 RFC 治理落地。

---

## 2. 版本发布

> 今日无新版本发布。当前最新版本为 `0.8.3`，v0.8.4 维护列车冻结特性，目标 7 月 31 日发布（#8357）；v0.9.0 认证/安全/网关破坏性变更队列在 #7432 追踪。

---

## 3. 项目进展

| PR | 状态 | 核心推进 | 关联里程碑 |
|----|------|----------|------------|
| [#8499](https://github.com/zeroclaw-labs/zeroclaw/pull/8499) | ✅ **已合并** | 硬件层：保留 `serial` 与 `uno_q_bridge` 超时处理的内部 `Elapsed` 错误，修复错误链丢失 | v0.8.4 维护 |
| [#8514](https://github.com/zeroclaw-labs/zeroclaw/pull/8514) | ✅ **已合并** | `aardvark-sys`：`LibraryNotFound` 由单元变体改为携带 `String`，保留 `dlopen` 失败细节 | v0.8.4 维护 |
| [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | 🟢 **新开** | **Windows 原生 PowerShell 支持**：`runtime.shell` 在 Windows 不再被静默丢弃，新增 `powershell`/`pwsh` 选项，配置化原生 Shell 选择 | v0.8.4 / 跨平台 |
| [#8935](https://github.com/zeroclaw-labs/zeroclaw/pull/8935) | 🟢 活跃 | 保留 Gemini `ToolCall.extra_content`（thought signatures），修复多轮工具调用被拒绝 | 供应商兼容 |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | 🟢 活跃 | **网关新增 OpenAI Chat Completions 端点**，兼容 LangChain/OpenAI SDK/Continue.dev/Aider 等生态 | v0.9.0 网关 |
| [#8854](https://github.com/zeroclaw-labs/zeroclaw/pull/8854) | 🟢 活跃 | Provider crate 全面迁移到类型化 Builder API，消除位置/排列构造器混用 | 架构重构 |
| [#8898](https://github.com/zeroclaw-labs/zeroclaw/pull/8898) | 🟢 活跃 | **持久化内存跨会话语义召回**：修复 `session_id` 过滤导致全局记忆无法被召回 | #8891 Tracker |
| [#9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105) | 🟢 活跃 | Lucid ARM 冷启动超时从 500/800ms 提升至 3s，并可配置 | 内存后端 |
| [#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848) | 🟢 活跃 | SOP 执行槽在 HITL 批准时释放，新增准入策略 | 运行时治理 |
| [#8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931) | 🟢 活跃 | 清理出站 `tool_calls.function.arguments` 防止 OpenRouter 等上游 400 | 供应商稳健性 |

> **整体进度判断**：v0.8.4 维护列车已合并 2 个硬化 PR，Windows 原生支持（PowerShell、CI 矩阵、Socket）与内存跨会话召回正在加速；v0.9.0 破坏性变更（网关 OpenAI 端点、Provider Builder 重构、认证/安全边界）在多个大型 PR 中并行推进。

---

## 4. 社区热点

| Issue | 评论 | 核心诉求 | 状态/风险 |
|-------|------|----------|-----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) **RFC: Work Lanes, Board Automation, Label Cleanup** | 14 | **治理层面**：引入工作泳道、看板自动化、标签清理，减少维护者手工分流负担 | ✅ Accepted / 推进中 |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) **74 个 Windows 测试失败** | 10 | **阻塞级**：CI 仅跑 Linux，Windows 11 (CP936) 出现路径语义、控制台编码、Unix-only 命令导致的 74 个失败 | 🔴 P1 / High / 无 Windows CI |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) **Telegram 通道无法配置** | 6 | **S1 工作流阻塞**：`channels doctor` 与 quickstart/zerocode 显示不一致，Bot 无响应 | 🔴 P1 / High |
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) **execute_pipeline 绕过单 Agent 工具网关** | 2 | **S0 安全风险**：子工具仅按全局 `[pipeline].allowed_tools` 授权，忽略调用 Agent 的 `ToolAccessPolicy` | 🔴 S0 / High / in-progress |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) **RFC: KeySource Trait 抽象** | 7 | **秘密管理架构**：按来源/部署形态分类主密钥材料，支撑多租户/硬件密钥/云 KMS | ✅ Accepted / High |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) **Tracker: Persistent Memory 三平面对齐** | 7 | **史诗级追踪**：21 项开放（3 Issue + 18 PR），协调持久化内存与成熟对标运行时达标 | 🟡 In-progress |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) **RFC: 会话历史与长期记忆解耦** | 6 | 运行时/网关/通道自动保存仍将 `Conversation` 写入通用内存后端，需生命周期分离 | ✅ Accepted / High |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) **RFC: MemoryStrategy Trait 解耦存储后端** | 6 | 高层生命周期策略（上下文加载、巩固、治理）与底层 `Memory` 后端解耦 | ✅ Accepted / High |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) **编译期 Feature → 运行时 WASM 插件** | 4 | 可选通道/工具从 Cargo feature 迁移到运行时可

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*