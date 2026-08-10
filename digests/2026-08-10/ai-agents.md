# OpenClaw 生态日报 2026-08-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-10 01:13 UTC

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

# OpenClaw 项目日报 | 2026-08-10

---

## 1. 今日速览

OpenClaw 今日呈现**高并发维护态势**：过去 24 小时内 Issues 与 PRs 各产生 500 条更新，其中 Issues 新开/活跃 428 条、关闭 72 条；PRs 待合并 324 条、已合并/关闭 176 条。无新版本发布。核心矛盾集中在**会话状态一致性**、**模型回退与静默失败**、**多渠道消息去重**、**子进程泄漏**以及**大工作空间下的存储/迁移稳定性**。维护者正通过大量结构性重构（SQLite 事务围栏、会话清理、Slack Enterprise Grid 运行时检测、Cloud Worker 大仓库支持）推进架构稳健性，但多个 P1 级阻塞性 Bug（如 #116277 闭环失效、#91009 CPU 风暴、#97616 僵尸进程）仍在活跃讨论中，释放风险信号。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 规模 | 核心变更 | 对项目推进度的评估 |
|---|---|---|---|---|
| [#110261](https://github.com/openclaw/openclaw/pull/110261) | **已合并** | S | 修复 ACP 绑定后续轮次无法送达外部哈尼斯（Claude/Codex/Gemini）的问题，修正网关对外部 ACP harness ID 的错误归属判断 | ✅ 解除外部模型集成的关键阻塞，提升多运行时互操作可靠性 |
| [#121310](https://github.com/openclaw/openclaw/pull/121310) | **已合并** | XS | 移除无断言的会话历史探针测试，减少 CI 噪音 | 🧹 测试卫生改进，边际收益 |
| [#120190](https://github.com/openclaw/openclaw/pull/120190) | 待合并 | XL | **压缩恢复机制重构**：引入有界可恢复恢复，区分可恢复/终态失败，防止误判导致回复中断或取消软化 | 🔥 **核心稳定性里程碑**，直击 #116277/#121058 类静默失败根因 |
| [#97103](https://github.com/openclaw/openclaw/pull/97103) | 待合并 | XL | 会话清理命令新增归档文件预览与物理删除上报，修复 #75658 | 🛠️ 运维工具链完善，解决长期运维盲区 |
| [#121316](https://github.com/openclaw/openclaw/pull/121316) | 待合并 | M | SQLite 同步操作强制写入者围栏，移除废弃访问器中间层（6 月存储中立层残留） | 🏗️ 存储层架构债偿还，消除并发竞争隐患 |
| [#121262](https://github.com/openclaw/openclaw/pull/121262) | 待合并 | XL | Cloud Worker 支持大 Git 工作区（>25k 条目突变限制），关联 #120715 #121027 | ☁️ 解锁企业级大仓库托管场景 |
| [#120864](https://github.com/openclaw/openclaw/pull/120864) | 待合并 | XL | Slack 运行时自动检测 Enterprise Grid 安装类型，替代手动配置 `enterpriseOrgInstall` | 🔧 消除配置漂移，提升多工作区交付可靠性 |
| [#115138](https://github.com/openclaw/openclaw/pull/115138) | 待合并 | M | SQLite 本地数据库启用 `mmap_size` 内存映射读取，解决同步阻塞事件循环（修复 #112758） | ⚡ 存储性能优化，直接降低高负载下 P99 延迟 |
| [#121313](https://github.com/openclaw/openclaw/pull/121313) | 待合并 | M | macOS 应用迁移期采纳 CLI 设备身份，修复首次运行共享状态迁移卡死 | 🍎 桌面端体验修复，消除入口阻塞 |
| [#121315](https://github.com/openclaw/openclaw/pull/121315) | 待合并 | M | WebView 无原生对话桥时，设备令牌轮换结果不再丢失（修复 #121296） | 🌐 嵌入式 UI 凭据管理修复 |

**整体推进评估**：今日合并 2 个 PR，但 300+ 待合并 PR 中包含 **7 个 XL 级、10+ 个 L/M 级结构性变更**，显示维护者正集中攻坚基础设施层（存储、会话、网关、多租户）。若本周能合并 #120190、#121316、#121262、#120864 等核心 PR，将显著提升 2026.8.x 稳定版基线。

---

## 4. 社区热点

| Issue/PR | 评论/👍 | 核心诉求 | 热度驱动因素 |
|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 196 💬 / 0 👍 | **DeepSeek v4 Flash 静默回复失败** → 已关闭但 #121058 指出**复发** | P1 级消息丢失，影响生产可用性；闭环失效引发信任危机 |
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 19 💬 / 0 👍 | **#116277 修复无效，监控仍记录新发生** | 直接质疑修复质量，倒逼 #120190 压缩恢复重构 |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | 21 💬 / 1 👍 | **Anthropic thinking 签名回放失效，恢复包装器因错误泛化而不触发** | 嵌入式运行器核心路径，涉及会话状态一致性 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 18 💬 / 2 👍 | **Codex PreToolUse 原生钩子并发狂刷 CPU，阻塞网关 RPC** | P1 崩溃循环，已有配置化关闭 PR [#111205](https://github.com/openclaw/openclaw/pull/111205) 待审 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 16 💬 / 4 👍 | **Steer 模式不注入中途消息，导致主会话无法实时干预** | 交互体验核心痛点，关联提交 9889c6da5 回归 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 15 💬 / 4 👍 | **Masked Secrets：Agent 可用不可见 API Key** | 安全增强强需求，涉及认证提供商与会话状态 |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 15 💬 / 2 👍 | **`exec` 工具不继承 `skills.*.env` 环境变量** | 回归 Bug，阻断技能级密钥注入 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | 16 💬 / 1 👍 | **gh-issues 技能将不可信 Issue 内容直接注入子 Agent Prompt** | 安全边界缺失，需产品决策与安全审查 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 7 💬 / 1 👍 | **Hook/Tool 子进程泄漏导致僵尸累积，运行时退化** | 运行时稳定性基石，长期运行必现 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 13 💬 / 0 👍 | **跨渠道重复转录/回放/上下文装配的系统性问题** | 维护者打伞 Issue，揭示架构层面重复消息根因 |

**热点聚类分析**：
- **静默失败与消息丢失**（#116277、#121058、#92201、#96242、#114211）占据 Top 10 中 5 席，是当前社区最大痛点。
- **多渠道交付一致性**（Telegram 重复、Matrix 循环、Slack Grid 作用域、Feishu @ 提及）显示出跨平台适配器层缺乏统一去重/幂等抽象。
- **安全边界**（Masked Secrets、gh-issues 注入、exec 环境变量）与**运行时卫生**（僵尸进程、CPU 风暴、SQLite 并发）并列为架构债高发区。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 状态 | 关联 Fix PR | 备注 |
|---|---|---|---|---|---|
| **P0 / Release Blocker** | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 超前发布：`IsolatedSessions` 文档存在但 2026.3.13 版本无实现 | OPEN | — | 文档与代码不同步，误导用户 |
| **P1 / Crash Loop** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse 钩子并发 100%+ CPU，阻塞网关 RPC | OPEN | [#111205](https://github.com/openclaw/openclaw/pull/111205) (配置化关闭) | 生产环境可复现，需紧急缓解 |
| **P1 / Message Loss** | [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默回复失败 → **已关闭但复发** | CLOSED | [#120190](https://github.com/openclaw/openclaw/pull/120190) (压缩恢复重构) | 监控持续告警，闭环失效 |
| **P1 / Message Loss** | [#121058](https://github.com/openclaw/openclaw/issues/121058) | #116277 修复无效，静默失败持续发生 | OPEN | [#120190](https://github.com/openclaw/openclaw/pull/120190) | 直接关联核心 PR |
| **P1 / Message Loss** | [#96242](https://github.com/openclaw/openclaw/issues/96242) | 多独立路径导致 Telegram 重复消息（≥3 条路径确认） | OPEN | — | 去重机制缺失，跨渠道系统性问题 |
| **P1 / Session State** | [#87327](https://github.com/openclaw/openclaw/issues/87327) | 隔离 Agent 运行在 runtime-plugins 阶段卡死，小时级 Cron 全中招 | OPEN | — | 无命名插件诊断，排查极难 |
| **P1 / Security** | [#

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-08-10

---

## 1. 生态全景

当前生态呈现 **“一超多强、分层竞争”** 态势：OpenClaw 以日均 900+ Issue/PR 更新量、500+ 待合并 PR 的规模绝对领跑，确立了“基础设施级平台”地位；ZeroClaw、IronClaw、NanoBot、Hermes Agent、CoPaw 组成 **第一梯队**（日活 20~100 条），分别深耕安全合规、多租户编排、轻量本地部署、桌面端体验、中文社区生态等细分赛道；PicoClaw、NanoClaw、Moltis、LobsterAI 处于 **第二梯队**（日活 <10 条），多为垂直场景或早期探索；NullClaw、TinyClaw、ZeptoClaw 近期沉寂。整体呈现 **“核心层重架构重稳定、应用层重体验重分发、长尾层重生存”** 的分层演进特征。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Releases | 合并/关闭 PR | 健康度评估 | 核心状态关键词 |
|------|--------------|-----------|----------|--------------|------------|----------------|
| **OpenClaw** | 428 活跃 / 72 关闭 | 324 待合并 / 176 合并/关闭 | 无 | 2 合并 | 🟡 **高负荷攻坚期** | 架构重构密集、P1 Bug 复发、存储/会话/网关三大基建并行 |
| **ZeroClaw** | 50 更新 | 50 更新 | 无 | 4 关闭 (含 3 P1 Bug) | 🟢 **高质量冲刺期** | 安全加固、内存子系统重构、RFC 治理堰塞湖 |
| **IronClaw** | 22 活跃 / 7 关闭 | 27 更新 / 8 合并 | 无 | 8 合并 | 🟢 **特性冻结前质量期** | 工具发现增强、并行调度、Web Push、Bug Bash 收敛 |
| **Hermes Agent** | 50 活跃 | 50 更新 / 5 合并 | 无 | 5 合并 | 🟡 **高强度修复冲刺** | Desktop 稳定性危机、会话数据完整性、跨平台兼容性 |
| **NanoBot** | 5 新增 | 15 更新 / 4 合并 | 无 | 4 合并 | 🔴 **安全风暴期** | 双 RCE 0day、Docker 部署阻断、Token 可观测性缺失 |
| **CoPaw (QwenPaw)** | 10 活跃 / 6 关闭 | 49 待合并 / 1 合并 | 无 | 1 合并 | 🟢 **双轨并行打磨期** | ReMe 记忆体系、Provider 兼容、前端渲染重构、社区运营标杆 |
| **PicoClaw** | 2 新增 / 1 关闭 | 5 待审 / 1 合并 | 无 | 1 合并 | 🟢 **安全加固为主** | SSRF 防护三连合、DeltaChat 重构、Matrix 稳定性隐患 |
| **NanoClaw** | 1 新增 | 16 待合并 | 无 | 0 | 🟡 **重构积累期** | CLI 标准化、宿主生命周期统一、硬化镜像 CVE 封堵 |
| **Moltis** | 2 新增 | 1 待审 | 无 | 0 | 🟡 **低活跃待分流** | Vault 密钥派生修复、Apple Container 适配、UI 静默数据丢失 |
| **LobsterAI** | 3 更新 | 0 | 无 | 0 | 🔴 **维护停滞期** | Provider 解析 P0 Bug、多模型协作架构缺失、Stale Issue 积压 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 0 | ⚫ **沉寂/归档态** | 无活动 |

> **注**：OpenClaw 单日更新量约等于其余 12 个项目之和的 **5 倍**，生态头部效应极强。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对标 (ZeroClaw / IronClaw / Hermes) | 定位结论 |
|------|----------|------------------------------------------|----------|
| **技术路线** | **全栈平台化**：ACP 网关、多运行时编排、企业级多租户、存储中立层、跨渠道适配器 | ZeroClaw：安全优先的运行时内核；IronClaw：声明式技能/工作流编排；Hermes：桌面原生+本地优先 | **“操作系统级”基础设施**，而非单一 Agent 实现 |
| **规模量级** | 日均 900+ 事件、500+ 待合并 PR、100+ XL 级重构并行 | 单日通常 <100 事件、<20 待合并 PR | **生态锚点**，上游依赖库变更常以 OpenClaw 为首个验证场 |
| **社区结构** | 核心维护者团队 + 企业贡献者 + 长尾插件生态 | 多为核心小团队驱动，社区贡献占比较低 | **商业化反哺开源** 模式最成熟，企业级需求直接转化为 PR |
| **核心护城河** | 会话状态一致性、模型回退容灾、大工作空间存储、Slack Grid 原生支持 | ZeroClaw：内存子系统/Hindsight；IronClaw：工具发现/并行调度；Hermes：跨平台 Desktop | **企业级生产可用性** 是其不可替代的差异化价值 |
| **风险暴露** | P1 静默失败复发 (#116277→#121058)、子进程泄漏、跨渠道去重缺失 | ZeroClaw：Webhook 未认证、MCP 内存泄漏；Hermes：会话历史丢失三连发 | **规模带来的复杂性债** 远超同类，需持续投入基建偿还 |

---

## 4. 共同关注的技术方向（多项目共振）

| 技术方向 | 涉及项目 | 具体诉求/动作 | 信号强度 |
|----------|----------|---------------|----------|
| **会话/状态一致性与持久化** | OpenClaw (#120190 压缩恢复、#121316 SQLite 围栏)、Hermes (#82756 历史丢失、#82843 暖启动覆盖)、ZeroClaw (Hindsight 7 连 PR)、Moltis (Vault 短语哈希归一化) | 防止静默失败、消息丢失、重启后状态回滚；引入事务围栏、幂等键、快照隔离 | ⭐⭐⭐⭐⭐ **核心基建共识** |
| **安全边界与供应链硬化** | NanoBot (双 RCE #5305/5306)、PicoClaw (SSRF 三连合 #3322-3324)、ZeroClaw (Webhook 未认证 #9565、Secrets 抽象 #9194)、NanoClaw (CVE 闸门 #3207/3208)、IronClaw (依赖批量升级 #7387) | RCE 即时响应、SSRF 防护标准化、Webhook 签名强制、SBOM/镜像扫描纳入 CI | ⭐⭐⭐⭐⭐ **生存线** |
| **多渠道/多模型统一适配层** | OpenClaw (Slack Grid 检测 #120864、Telegram 去重 #96242)、IronClaw (Web Push #7398、工具完整签名 #7410)、CoPaw (Gemini $schema #6844、DeepSeek 1M 上下文 #6846)、Hermes (xAI OAuth #82539) | 幂等去重、能力声明式配置、Provider 兼容性矩阵、原生推送通道 | ⭐⭐⭐⭐ **互操作性刚需** |
| **运行时资源管控与可观测性** | OpenClaw (子进程泄漏 #97616、CPU 风暴 #91009)、ZeroClaw (MCP Schema 克隆内存泄漏 #8642)、NanoClaw (Signal 附件挂载 #3142)、NanoBot (Token 黑盒 #5266)、IronClaw (僵尸线程 #7400) | 僵尸进程收割、内存/CPU 配额、结构化 Token/成本日志、健康检查端点 | ⭐⭐⭐⭐ **生产级门槛** |
| **本地优先/桌面原生体验** | Hermes (macOS 27 卡死 #63047、Wayland 拖拽)、CoPaw (杀毒软件误杀 #6847、移动端适配 #6281)、Moltis (Apple Container 1.x #1185) | 系统级兼容性、代码签名/沙箱、PWA/响应式、容器运行时适配 | ⭐⭐⭐ **分发最后一公里** |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 | 典型部署形态 |
|------|----------|----------|------------------|--------------|
| **OpenClaw** | 企业级多租户平台、跨渠道网关、大规模工作空间 | 企业 IT、SaaS 厂商、大型团队 | 微内核+插件化、ACP 协议网关、存储中立层、运行时隔离 | K8s/Cloud Worker/二进制 |
| **ZeroClaw** | 安全合规内核、长时记忆、声明式策略 | 金融/医疗/高合规行业、安全研究者 | Rust 单二进制、能力模型、Hindsight 分层记忆、SOP 引擎 | 边缘节点/嵌入式/私有云 |
| **IronClaw** | 技能市场、工作流编排、工具发现优化 | 低代码开发者、自动化工程师 | 声明式 Skill/Automation、并行 Batch 调度、渐进式工具披露 | Docker Compose/单机 |
| **Hermes Agent** | 桌面原生、本地隐私、跨平台 UI | 个人高级用户、开发者、隐私敏感群体 | Electron + Tauri 双端、本地 SQLite + FTS、原生系统集成 | DMG/MSI/AppImage |
| **NanoBot** | 极简单文件、WebUI 优先、多模型路由 | 个人开发者、快速原型、轻量部署 | Go 单二进制、WebUI 为主、Provider 声明式能力 | Docker/二进制/Cloud Run |
| **CoPaw (QwenPaw)** | 中文社区生态、ReMe 记忆体系、移动端适配 | 国内开发者、中文场景、移动办公 | TypeScript 全栈、OneBot/多 IM 适配、Auto-Dream 记忆自动化 | Docker/桌面端/PWA |
| **PicoClaw** | 协议网关聚合、Matrix/IRC/Telegram 桥接 | 即时通讯重度用户、桥接运维者 | Rust 异步、协议适配器模式、配置热重载 | 容器/系统服务 |
| **NanoClaw** | 沙箱化技能执行、硬化镜像、CLI 标准化 | 安全敏感的技能开发者、CI/CD 集成 | 容器级隔离、模块生命周期钩子、CVE 闸门流水线 | 容器镜像分发 |
| **Moltis** | Vault 密钥管理、Heartbeat 监控、Apple 生态 | macOS/iOS 开发者、密钥管理需求者 | Swift 原生、Apple Container 集成、Keychain 集成 | macOS App/TestFlight |
| **LobsterAI** | 多模型协作、自定义 Provider、上下文配置 | 多模型实验者、Prompt 工程师 | Python 后端、Web 前端、网关函数调用链路 | Docker/Python 包 |

---

## 6. 社区热度与成熟度分层

| 分层 | 项目 | 判定依据 | 当前阶段特征 | 关键风险/机遇 |
|------|------|----------|--------------|---------------|
| **L1 基础设施领跑者** | **OpenClaw** | 日均事件量、PR 规模、企业采用深度、架构复杂度 | **大规模重构攻坚期**：7 个 XL 级 PR 并行，P1 Bug 复发考验架构韧性 | 风险：技术债偿还速度 vs 新增复杂度；机遇：确立行业标准 |
| **L2 高活跃专业选手** | **ZeroClaw, IronClaw, Hermes, CoPaw, NanoBot** | 日活 20~100、核心团队全职、垂直领域深度 | **质量冲刺/安全风暴/特性冻结**：ZeroClaw/IronClaw 进入 v1.x 候选，NanoBot 遭遇安全危机，Hermes 修复桌面稳定性，CoPaw 打磨产品化体验 | 共性：从“跑通”向“稳/安/易”转型 |
| **L3

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 NanoBot 项目日报 | 2026-08-10

> **数据范围**：2026-08-09 至 2026-08-10 (UTC)  
> **统计口径**：Issues/PRs 更新时间在过去 24 小时内的记录

---

## 1. 今日速览

- **活跃度评级：🟢 高** —— 过去 24 小时合计 **20 条** 核心动态（5 Issues + 15 PRs），其中 **4 个 PR 已合并/关闭**，显示核心维护团队处于高频迭代与质量把关并行状态。
- **安全风暴** —— 同一天连续披露 **两个高危安全漏洞（#5305、#5306）**，均涉及 `exec.allowPatterns` 绕过导致任意命令执行，需立即发布安全补丁版本。
- **基建强化** —— 合并 PR 集中在 **测试覆盖率提升（#5308）**、**WebUI 语音输入 HTTPS 兼容性文档修正（#5304）**、**Star History 组件恢复（#5307）**，体现“夯实基建、补齐体验”的短期策略。
- **提供商生态** —— 新增 Agnes AI 双重编码 Bug（#5311）与 Responses 能力声明式重构（#5204），显示多模型适配层正在快速演进。
- **运维痛点** —— Docker Compose 部署权限报错（#5295）与 Token 消耗不可观测（#5266）两大运维 Issue 持续升温，呼吁加强可观测性与开箱即用能力。

---

## 2. 版本发布

> **本周期无新版本发布**。建议维护团队尽快切出 **安全热修复版本（如 v0.1.x-hotfix）** 修复 #5305 / #5306，随后规划常规小版本合并已就绪 PR。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心推进 | 影响面 |
|----|------|----------|--------|
| [#5308](https://github.com/HKUDS/nanobot/pull/5308) | **CI/CD / Test / WebUI** | 引入用户路径 E2E 测试、V8 覆盖率门禁、清理冗余测试、修复 React `act` 泄漏 | **测试可信度 ↑、CI 稳定性 ↑、回归风险 ↓** |
| [#5304](https://github.com/HKUDS/nanobot/pull/5304) | **Bug / Doc / WebUI** | 明确语音输入需 HTTPS、区分不安全源与无支持源、补充局域网受信 HTTPS 方案文档 | **移动端/局域网 WebUI 语音可用性 ↑** |
| [#5307](https://github.com/HKUDS/nanobot/pull/5307) | **Doc / Feature** | 恢复 Star History 图表（新数据源） | **项目展示页指标恢复** |
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | **Feature (Closed)** | GitAgent Protocol 支持（agent.yaml + SOUL.md） | **维护者决定暂不合并，标记 Closed**，标准化进程需再评估 |

> **整体推进度**：核心基建（测试/文档/安全）完成 3 个 P2 级任务；GitAgent 等探索性特性暂缓，资源聚焦稳定性。

---

## 4. 社区热点（高互动 / 高关注）

| 排名 | 对象 | 互动量 | 核心诉求 |
|------|------|--------|----------|
| 1 | [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) | 💬 13 评论 | **Token 消耗黑盒**：用户 2 小时烧百万 Token 无感知，强烈要求结构化日志/实时计费 Hook |
| 2 | [Issue #5295](https://github.com/HKUDS/nanobot/issues/5295) | 💬 5 评论 | **Docker 部署即崩**：`entrypoint.sh` 权限拒绝，阻断新用户首次体验 |
| 3 | [Issue #5305](https://github.com/HKUDS/nanobot/issues/5305) / [#5306](https://github.com/HKUDS/nanobot/issues/5306) | 👀 安全公告 | **RCE 级漏洞**：`exec.allowPatterns` 可被 Shell 链/允许列表绕过，企业用户部署受阻 |
| 4 | [PR #5204](https://github.com/HKUDS/nanobot/pull/5204) | 长期跟进 | **Responses 能力声明式重构**：为 OpenAI/Copilot/DeepSeek 统一路由、推理回放、压缩策略，奠定多模型适配基石 |

> **信号**：运维可观测性（Token/日志）与容器化交付体验是当前社区最大痛点；安全漏洞已成阻断性议题。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **🔴 Critical (RCE)** | [#5305](https://github.com/HKUDS/nanobot/issues/5305) `exec.allowPatterns` 允许列表绕过 → 任意命令链执行 | Open | 无 | **需立即修复并发布 Security Advisory** |
| **🔴 Critical (RCE)** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) `exec.allowPatterns` Shell 链绕过 → 非预期命令执行 | Open | 无 | 同根因，建议合并修复 |
| **🟠 High** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) Docker Compose 启动失败 `Permission denied: entrypoint.sh` | Open | 无 | 镜像构建或入口脚本权限缺失，阻断全新部署 |
| **🟠 High** | [#5311](https://github.com/HKUDS/nanobot/issues/5311) Agnes AI 嵌套对象参数双重 JSON 编码导致 MCP 调用失败 | Open | 无 | 自定义 Provider 适配层序列化缺陷 |
| **🟡 Medium** | [#5302](https://github.com/HKUDS/nanobot/pull/5302) Dream 阶段调用不可用工具 | **Open PR** | #5302 | 已有修复 PR，待 Review 合并 |
| **🟡 Medium** | [#5303](https://github.com/HKUDS/nanobot/pull/5303) Windows PowerShell `curl` 别名导致天气 Skill 失败 | **Open PR** | #5303 | 已有修复 PR，待 Review 合并 |
| **🟡 Medium** | [#5301](https://github.com/HKUDS/nanobot/pull/5301) Telegram 日志桥接 + 僵尸轮询检测 | **Open PR** | #5301 | 观测性增强，配合 #5156 彻底解决 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 现有 PR 支撑 | 纳入下版本概率 |
|----------|----------|--------------|----------------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | **Token 用量结构化日志/实时 Hook** | [#5299](https://github.com/HKUDS/nanobot/pull/5299) 已实现 `/api/settings/usage/records` 按天拉取 | ⭐⭐⭐⭐⭐ **极高**（PR 已就绪，配合 Issue 强烈呼声） |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) | 外部管理 `nanobot serve` 真实状态上报 WebUI | Draft PR 持续更新 | ⭐⭐⭐ **中高**（多实例部署刚需） |
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) | Agent Plugins 与 CLI Apps 深度集成 | 进行中 | ⭐⭐⭐ **中**（架构重构，需充分测试） |
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | 模型无关 Computer Use (browser/computer_use) | 长期 WIP，冲突标记 | ⭐⭐ **低**（短期内难合并，需解冲突） |
| [#5311](https://github.com/HKUDS/nanobot/issues/5311) | 自定义 Provider 参数序列化规范化 | 无 | ⭐⭐⭐ **中高**（阻断 Agnes AI 用户，修复成本低） |

---

## 7. 用户反馈摘要（从评论提炼）

| 场景 | 痛点原声 | 情绪 | 隐性需求 |
|------|----------|------|----------|
| **成本失控** | “2 小时烧百万 Token 却看不到哪个调用在跑” (#5266) | 😤 挫败 | 实时计费告警、按会话/工具粒度账单 |
| **首发体验** | “照着 deployment.md 跑 compose 直接报权限错” (#5295) | 😟 困惑 | 官方镜像自动 `chmod +x`、健康检查与自愈 |
| **安全合规** | “允许列表形同虚设，审计不敢过” (#5305/#5306) | 😨 恐惧 | CVE 编号、回溯版本补丁、SBOM |
| **多模型适配** | “Agnes AI 嵌套参数双重编码，手动改适配层才能跑” (#5311) | 😕 无奈 | Provider SDK 标准化、自动化契约测试 |
| **Windows 兼容** | “PowerShell 里 `curl` 是别名，Skill 跑不通” (#5303) | 😐 无奈 | 跨平台 Shell 抽象层或原生 HTTP 客户端 |

> **满意度亮点**：WebUI 语音 HTTPS 提示修复（#5304）、Star History 恢复（#5307）获得隐性好评（无负面评论）。

---

## 8. 待处理积压（长期未响应 / 高价值）

| 对象 | 滞留天数 | 价值 | 建议动作 |
|------|----------|------|----------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) Token 结构化日志 | 4 天（高热） | 运维核心刚需 | **指派 Owner，里程碑设为下个 Patch 版本** |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) Docker 权限 | 2 天 | 新用户转化漏斗断点 | **修复 Dockerfile/entrypoint 权限，回归测试** |
| [#5305](https://github.com/HKUDS/nanobot/issues/5305) / [#5306](https://github.com/HKUDS/nanobot/issues/5306) RCE 漏洞 | 1 天 | **生存级** | **立即组建安全小组，24h 内出补丁 + Advisory** |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) Responses 能力声明式重构 | 9 天 | 多模型架构基石 | **安排 Code Review 专场，解冲突合并** |
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) Computer Use | 60+ 天 | 差异化杀手特性 | **评估拆分为独立插件仓库（#5288 方向），降低主仓耦合** |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) Telegram 僵尸轮询自愈 | 12 天 | 生产可用性 | **配合 #5301 合并，补全 Watchdog 闭环** |

---

## 🎯 明日关注建议

1. **安全优先**：发布 **Security Advisory + Hotfix Release** 修复 #5305/#5306，并在 README/部署文档醒目位置标注升级指引。
2. **解堵部署**：合并 Docker 权限修复，补充 `docker compose up --build` 单条命令验证流程至 CI。
3. **可观测落地**：Review 并合并 #5299（Token 记录 API），配合 #5266 需求形成闭环。
4. **架构推进**：安排 #5204 专题 Review，解锁后续 Provider 接入标准化。
5. **社区沟通**：在 Issue #5266/#5295 发布进度贴，降低用户焦虑。

---

*报告自动生成于 2026-08-10 | 数据来源：GitHub REST API / GraphQL*  
*下一期日报将于 2026-08-11 同步产出*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-10

---

## 1. 今日速览

Hermes Agent 今日呈现**高强度修复冲刺**态势：过去 24 小时共 50 条 Issue 活动、50 条 PR 活动，但**零版本发布**。核心矛盾集中在 **Desktop 客户端稳定性**（macOS 27 beta 卡死、会话历史静默丢失、Wayland 拖拽失效）、**会话/状态层数据完整性**（截断序数错误、测试数据泄露生产库、暖启动被 REST 刷新覆盖）、**跨平台兼容性**（Windows 插件崩溃、SSH 引导参数错误、Linux Wayland 交互缺失）以及 **工具链类型安全**（cron/goal 的 `max_turns` 字符串解析、skills_guard 误报占位符）。社区高优先级 Issue（P0/P1）均已有对应修复 PR 开出，显示维护团队响应迅速，但积压的架构级债务（FTS 损坏、会话连续性契约、无授权即执行的 Kanban 分发器）仍需系统性治理。

---

## 2. 版本发布

**今日无新版本发布**。当前最新版本为 v0.20.0 (2026.8.3, commit 3f83297/3bd844edf)，多个严重回归（会话历史丢失 #82756、Windows 插件崩溃 #80560、macOS 更新死锁 #77753）均发生在该版本发布后，预计将催生 v0.20.1 热修复版本。

---

## 3. 项目进展

今日**合并/关闭 5 条 PR**，**新开 45 条 PR**，呈现“修复并行、功能并进”局面：

| PR | 状态 | 核心推进 | 关联 Issue |
|------|------|----------|------------|
| [#82539](https://github.com/NousResearch/hermes-agent/pull/82539) | **CLOSED** | xAI OAuth token refresh 捕获 `httpx.ConnectError`，避免 DNS 失败时 CLI 崩溃 | — |
| [#74991](https://github.com/NousResearch/hermes-agent/pull/74991) | **CLOSED** | memory provider 恢复机制：保留历史记录供后续同步（重复实现见 #82844） | — |
| [#82442](https://github.com/NousResearch/hermes-agent/issues/82442) | **CLOSED (Issue)** | Desktop SSH 引导改用 `hermes` 二进制而非 `venv/bin/python`，修复 `--ssh-session-token-file` 校验失败 | #82442 |
| [#74411](https://github.com/NousResearch/hermes-agent/issues/74411) | **CLOSED (Issue)** | SSH 版本检查参数顺序修正，不再误报不支持新参数 | #74411 |
| [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) | **CLOSED (Issue)** | 追踪 Issue：gateway session continuity 在 FTS 损坏下的孤儿会话分叉与陈旧恢复 | #82616 |

**关键在审修复 PR（均为今日新开，直指 P0/P1）：**
- [#82811](https://github.com/NousResearch/hermes-agent/pull/82811) / [#82766](https://github.com/NousResearch/hermes-agent/pull/82766)：双路径修复 **#82756（P0 会话历史静默删除）**，引入 `message_id` 截断替代易错的 `user_ordinal`，并阻断 `confirm_truncate` 自动附加。
- [#82843](https://github.com/NousResearch/hermes-agent/pull/82843)：阻止空 REST 刷新覆盖暖启动缓存，缓解 macOS 睡眠恢复后历史消失 (#82806)。
- [#82845](https://github.com/NousResearch/hermes-agent/pull/82845) / [#82848](https://github.com/NousResearch/hermes-agent/pull/82848)：统一修复 `max_turns` 字符串 `"none"/"unlimited"/"0"/"-1"` 解析导致的 TypeError（影响 cron & goals）。
- [#82839](https://github.com/NousResearch/hermes-agent/pull/82839)：`skills_guard` 正则排除 `__PLACEHOLDER__` 占位符，解除误报阻安装 (#82798)。
- [#82794](https://github.com/NousResearch/hermes-agent/pull/82794)：Desktop session popout 路由至所属 profile，修复跨 profile 空白窗口 (#82768, #61286)。
- [#78288](https://github.com/NousResearch/hermes-agent/pull/78288)：安全加固——快照复制秘密文件强制 `chmod 0600`，与恢复路径对齐。

---

## 4. 社区热点

| 热度 | Issue/PR | 核心诉求 | 评论/👍 | 分析 |
|------|----------|----------|---------|------|
| 🔥 **19 评论** | [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | **macOS 27 beta (Sequoia) 下 Desktop ~5 条消息后完全冻结**，连 Settings 都打不开 | 19 / 0 | 系统级兼容性阻塞，涉及 Electron/Node 与新版 macOS 交互，P1 标记但 29 天未合并修复，用户焦虑高。 |
| 🔥 **13 评论** | [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | **VoiceOver 无障碍访问**：盲人用户无法使用 TUI/CLI/Dashboard，需语义标签、焦点管理、ARIA 支持 | 13 / 1 | 长期积压（3 月），P3 但涉及法律合规与包容性，社区持续催促。 |
| 🔥 **7 评论** | [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) | **Gateway 会话连续性契约失效**：FTS 损坏导致孤儿会话分叉、重启后恢复陈旧会话 | 7 / 0 | 架构级缺陷，teknium1（核心维护者）亲自追踪，关联 #82770 测试数据泄露，需存储层重构。 |
| 🔥 **6 评论 ×2** | [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) | **cron `repeat='forever'` 抛 TypeError**：`'<=' not supported between 'str' and 'int'` | 6 / 0 | 重复报告，根因同为 YAML 解析 `max_turns` 字符串，今日已有 #82845/#82848 修复。 |
| 🔥 **2 评论** | [#82756](https://github.com/NousResearch/hermes-agent/issues/82756) | **P0 数据丢失**：Desktop 回车提交静默删除 ~65 条历史，**第三次发生**（前两次 #70516, #80763） | 2 / 0 | 核心信任危机，同类修复未封堵 `truncate_before_user_ordinal` + `confirm_truncate` 组合路径。 |
| 🔥 **1 评论** | [#82842](https://github.com/NousResearch/hermes-agent/issues/82842) | **Critical：Agent 执行 `rd /s /q C:\` 险删系统盘**，仅因无管理员权限幸免 | 1 / 0 | 安全边界失守，终端工具授权模型需重审，Windows 用户高风险。 |

---

## 5. Bug 与稳定性

按严重程度排序（✅ = 已有修复 PR）：

| 严重级 | Issue | 现象 | 影响面 | 修复状态 |
|--------|-------|------|--------|----------|
| **Critical** | [#82842](https://github.com/NousResearch/hermes-agent/issues/82842) | Windows 终端工具越权执行 `rd /s /q C:\` | Windows 原生安装用户 | ❌ 无 PR，需终端工具授权模型重构 |
| **P0** | [#82756](https://github.com/NousResearch/hermes-agent/issues/82756) | Desktop 回车提交触发 `replace_messages` 删除历史，**第 3 次复发** | 所有 Desktop 用户 | ✅ [#82811](https://github.com/NousResearch/hermes-agent/pull/82811) / [#82766](https://github.com/NousResearch/hermes-agent/pull/82766) |
| **P1** | [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | macOS 27 beta 下 5 轮对话后 UI 彻底冻结 | macOS Beta/RC 用户 | ❌ 29 天无进展，需 Electron 升级或渲染进程隔离 |
| **P1** | [#82770](https://

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-10

---

## 1. 今日速览
- **核心活跃度**：过去 24 小时共产生 **3 个 Issue 更新**（1 关闭、2 新增）与 **6 个 PR 更新**（1 关闭合并、5 待审），呈现 **“修复/安全加固为主、新功能并行”** 的健康节奏。  
- **关闭项**：#3203（Matrix 同步循环断线不重连）标记 stale 关闭，#3326（Web 前端 pnpm-lock 重复条目）已合并，消除了构建阻断风险。  
- **安全加固**：SashaMIT 连续提交 #3322、#3323、#3324 三个 PR，统一将入站媒体下载纳入 `CreateSafeHTTPClient` + `BlockPrivateTargets` 防 SSRF 体系，覆盖 WeCom、Weixin 及通用 Channel 层。  
- **功能前沿**：As-tsaqib 同步发起 Issue #3325 与 PR #3327，推动 Telegram 原生富文本表格渲染；superuser-does 在 #3287 推动 IRCv3 长消息聚合。  
- **技术债清理**：trufae 的 #3222 对 DeltaChat 实现进行 -200 LOC 重构，移除遗留密码配置、硬编码 relay 列表等，配置模型向 jsonrpc secrets 统一收敛。  
- **整体评级**：⭐⭐⭐⭐☆（高活跃、安全响应快、功能迭代清晰，唯 stale issue 处理略显滞后）。

---

## 2. 版本发布
> 过去 24 小时无新 Release。当前最新稳定版仍为 **v0.2.9**（见 #3203 环境信息）。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | **修复/构建** | 删除 `web/frontend/pnpm-lock.yaml` 中两处逐字节重复的 `semver@7.8.5` 映射，解决 `pnpm install --frozen-lockfile` 报 `ERR_PNPM_BROKEN_LOCKFILE` | 前端 CI/CD、开发者首次拉取 | ✅ **已合并并关闭** |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | **Bug/稳定性** | Matrix `/sync` 长轮询断线后无重连、主进程存活导致 systemd 不重启 | Matrix 网关可用性 | 🔴 **Stale 关闭**（未修复，建议重新评估或迁移至 PR） |

> **进展小结**：今日仅 1 个构建阻断类 PR 真正落地；Matrix 断线重连这一高优 Bug 因标记 stale 而关闭，实质风险仍在，建议维护者在下一迭代建立专项 PR 跟进。

---

## 4. 社区热点（评论/反应 Top）

| 排名 | 对象 | 互动数据 | 核心诉求 |
|------|------|----------|----------|
| 1 | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | 👍 2 · 💬 8 | **Matrix 网关生产级可靠性**：用户反馈网络抖动/HS 重启后同步循环永久静默，systemd 无法感知，需在主循环内引入指数退避重连或健康检查触发重启。 |
| 2 | [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) | 👍 0 · 💬 4 | **IRCv3 长消息语义完整性**：当前自动分片导致下游渲染破碎，期望识别 `+draft/reply` 等标签将分片聚合为单条逻辑消息。 |
| 3 | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | 👍 0 · 💬 0（但代码变更 -200 LOC） | **DeltaChat 代码库瘦身与安全**：移除密码明文配置、硬编码 relay、废弃测试，强制 secrets 走 jsonrpc，配置模型现代化。 |

> **热点洞察**：社区最关心 **“协议层面的鲁棒性”**（Matrix/IRC）与 **“供应链/配置安全”**（DeltaChat 重构、SSRF 加固），而非单纯新协议接入。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue/PR | 现象 | 是否有 Fix PR | 备注 |
|--------|----------|------|---------------|------|
| **P0（生产环境静默失效）** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync 循环断线后永久死亡，systemd 不重启 | ❌ 无（stale 关闭） | **需立即重开或转 PR**，建议加入 `reconnect_with_backoff` + 健康探针 |
| **P1（SSRF 风险）** | 隐性（由 #3322/3323/3324 暴露） | 入站媒体 URL 可重定向至 loopback/RFC1918 | ✅ 三个 PR 已覆盖 WeCom/Weixin/通用 Channel | 审核通过后可合并，彻底封堵入站下载 SSRF |
| **P2（构建阻断）** | [#3326](https://github.com/sipeed/picoclaw/pull/3326) | pnpm frozen-lockfile 失败 | ✅ 已合并 | 已解决 |
| **P3（功能退化）** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息被拆分为多条物理行 | ❌ 无 | 需要协议层聚合逻辑，建议纳入 v0.3.0 里程碑 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 对应 PR | 纳入可能性 | 备注 |
|------|-------|---------|------------|------|
| **Telegram 原生富文本表格** | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | [#3327](https://github.com/sipeed/picoclaw/pull/3327) | ⭐⭐⭐⭐⭐ **极高** | PR 已同步提交，检测 GFM/HTML table → `sendMessage` rich media，符合 Bot API 10.1，审核通过即可进下一版本 |
| **IRCv3 长消息聚合** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 无 | ⭐⭐⭐ **中** | 需要协议解析器层面改动，优先级次于安全/稳定性，建议标记 `v0.3.0` 或 `good first issue` 招募贡献者 |
| **DeltaChat 配置现代化** | 隐性 | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | ⭐⭐⭐⭐ **高** | -200 LOC、移除密码明文、统一 secrets 模型，属于技术债偿还+安全加固，审核通过后应尽快合并 |

---

## 7. 用户反馈摘要（从评论提炼）

| 场景 | 痛点 | 原始证据（Issue/PR 评论意译） | 满意度倾向 |
|------|------|--------------------------------|------------|
| **Matrix 网关运维** | “半夜 HS 重启，网关挂了却进程存活，systemd 不拉起，早晨发现消息全丢” | #3203 评论区多位用户 +1，建议加入 `health_check` endpoint 供 systemd `WatchdogSec` 使用 | 😡 **极度不满** |
| **IRC 桥接** | “机器人发长文本被切碎，Markdown 渲染全乱，用户以为是 bug” | #3287 作者及跟帖者均表示“破坏可读性” | 😟 **不满** |
| **前端开发体验** | “`pnpm install --frozen-lockfile` 直接报错，CI 红了一周才发现是 lockfile 重复键” | #3326 作者自述 | 😐 **中性（已修复）** |
| **Telegram 群运营** | “表格只能发代码块，手机端横向滚动体验差，期待原生表格” | #3325 作者描述 | 😊 **期待中** |

---

## 8. 待处理积压（长期未响应/高价值）

| 对象 | 停滞天数 | 价值 | 建议动作 |
|------|----------|------|----------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix 重连 | 39 天（创建于 07-02） | **P0 稳定性**，影响所有 Matrix 部署 | **重新打开** 或转为 **PR**，指派核心维护者在本周内给出方案（重连逻辑 + systemd watchdog） |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) DeltaChat 重构 | 38 天 | **安全/技术债**，-200 LOC、密码移除、secrets 统一 | 请求 **Code Review**，若无架构异议建议本周合并，配套更新文档与 CHANGELOG |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC 长消息 | 19 天 | **用户体验**，IRCv3 兼容性缺口 | 标记 `help wanted`、`v0.3.0`，招募社区贡献者实现聚合层 |

---

> **维护者行动清单（建议今日/本周）**  
> 1. **立即处理 #3203**：重新评估并给出修复 PR 或至少提供 workaround 文档。  
> 2. **审核合并安全三件套**：#3322 / #3323 / #3324 统一引入 `CreateSafeHTTPClient`，消除入站媒体 SSRF。  
> 3. **推进 #3222 与 #3327**：前者为架构净化，后者为用户可见功能，均已代码完备，优先审核。  
> 4. **梳理里程碑**：将 #3287、#3325/3327 纳入 `v0.3.0`，明确发布节奏。  

---  
*数据来源：GitHub API 抓取（2026-08-09 00:00 – 23:59 UTC），由 AI 智能体自动汇总生成。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-10

> 数据范围：2026-08-09 00:00 – 23:59 (UTC) | 来源：`nanoclaw/nanoclaw` GitHub 实时数据

---

## 1. 今日速览
- **活跃度评级：高** —— 单日产出 16 个 PR、1 个 Issue，零合并/零发布，呈现典型的“积累重构与安全加固并行”阶段特征。
- **核心主题**：CLI 标准化输入（`--stdin-json`）、宿主/容器模块生命周期统一、技能架构文档化、Signal/Slack 附件回归修复、硬化镜像 CVE 封堵与发布流水线建设。
- **阻塞点**：Issue #3217 指出 `install_packages` 缺失 pip 渠道，导致依赖 Python 包的 Agent 无法走 hardened-image 路径，已有配套文档 PR (#3216) 但代码层面尚无解决方案。
- **安全姿态**：核心团队连续推进 `pnpm`/`npm`/`tar` 关键 CVE 升级 (#3207) 并落地 Docker Hub 发布 + CVE 闸门 (#3208)，供应链安全建设进入落地期。
- **合并债务**：16 个 PR 全处于“待合并”态，建议维护者本周安排专门 Review 窗口，避免长周期积压引发冲突。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 项目进展（重要 PR 推进情况）

| PR | 类型 | 核心推进 | 关联 Issue | 状态 |
|----|------|----------|------------|------|
| [#3218](https://github.com/nanoclaw/nanoclaw/pull/3218) | **Feature (CLI)** | 引入 `--stdin-json` 统一结构化输入通道，不破坏现有请求帧/鉴权/输出，为脚本化/管道化调用铺路 | — | Open |
| [#3214](https://github.com/nanoclaw/nanoclaw/pull/3214) | **Refactor (Host)** | 统一模块生命周期钩子，消除宿主侧重复启停逻辑，降低技能接入认知负载 | — | Open |
| [#3213](https://github.com/nanoclaw/nanoclaw/pull/3213) | **Refactor (Channels)** | 渠道侧注册问题渲染器，解耦渲染逻辑与核心分发器 | — | Open |
| [#3212](https://github.com/nanoclaw/nanoclaw/pull/3212) | **Refactor (DB)** | 新增模块迁移注册表，为多版本共存与灰度升级打基础 | — | Open |
| [#3215](https://github.com/nanoclaw/nanoclaw/pull/3215) | **Fix (Security)** | DM 分辨率日志脱敏，防止敏感元数据泄露 | — | Open |
| [#3209](https://github.com/nanoclaw/nanoclaw/pull/3209) | **Fix (Slack)** | 修复粘贴表格无法透传给 Agent 的渲染缺失 | — | Open |
| [#3210](https://github.com/nanoclaw/nanoclaw/pull/3210) | **Docs (Container)** | 明确附件在容器内落盘路径，填补文档盲区 | — | Open |
| [#2529](https://github.com/nanoclaw/nanoclaw/pull/2529) | **Fix (Signal)** | 将入站附件投递至 Agent 而非丢弃（关闭 #2528） | [#2528](https://github.com/nanoclaw/nanoclaw/issues/2528) | Open (长周期) |
| [#3142](https://github.com/nanoclaw/nanoclaw/pull/3142) | **Fix (Signal)** | 修正挂载路径，使图片/文件附件在容器内可读 | — | Open |
| [#3041](https://github.com/nanoclaw/nanoclaw/pull/3041) / [#3050](https://github.com/nanoclaw/nanoclaw/pull/3050) | **Feature Skill (Dial)** | 新增 Dial 适配器（SMS + AI 语音）并接入向导/技能选择器 | — | Open |
| [#3207](https://github.com/nanoclaw/nanoclaw/pull/3207) | **Fix (Security/CVE)** | 升级 pnpm/npm 修复 `tar` 关键 CVE (GHSA-23hp-3jrh-7fpw) | — | Open |
| [#3208](https://github.com/nanoclaw/nanoclaw/pull/3208) | **CI/CD (Core-team)** | 新增手动触发、主分支保护的多架构镜像发布流水线 + CVE 闸门 | — | Open |
| [#3186](https://github.com/nanoclaw/nanoclaw/pull/3186) | **Refactor (Host Seams)** | 为技能自有能力预留宿主接缝，推进插件化架构 | — | Open |
| [#3211](https://github.com/nanoclaw/nanoclaw/pull/3211) | **Docs (Skills)** | 确立“单一职责集成”规范，指导技能开发规范化 | — | Open |
| [#3216](https://github.com/nanoclaw/nanoclaw/pull/3216) | **Docs (Hardened Image)** | 明确 `install_packages` 仅覆盖 apt/npm，配合 #3217 设定预期 | [#3217](https://github.com/nanoclaw/nanoclaw/issues/3217) | Open |

> **整体进度**：重构类 PR 占比 5/16，安全/CI 类 2/16，功能/修复/文档各 3/16。项目正从“功能堆叠”向“架构收敛+供应链硬化”转型。

---

## 4. 社区热点
| 对象 | 热度指标 | 核心诉求 |
|------|----------|----------|
| [Issue #3217](https://github.com/nanoclaw/nanoclaw/issues/3217) | 新开 1 天、0 评论、👍 0 | **硬性阻塞**：Python 依赖项目无法使用 hardened-image，需在 `install_packages` 增加 `packages_pip` 或同等机制。虽有文档 PR (#3216) 确认现状，但代码层面无对应实现 PR，建议纳入下一里程碑。 |
| [PR #3208](https://github.com/nanoclaw/nanoclaw/pull/3208) | Core-team 标签、关联发布流水线 | **运维诉求**：自动化多架构镜像发布 + CVE 闸门，减少人工误操作，满足合规审计。 |
| [PR #3207](https://github.com/nanoclaw/nanoclaw/pull/3207) | 关联关键 CVE | **安全响应**：上游 `node:22-slim` 尚未修复 `tar` CVE，需自行升级工具链版本绕过，体现供应链风险自主可控能力。 |

> 其余 PR 暂无评论/Reaction，属于内部并行开发流，尚未进入社区讨论期。

---

## 5. Bug 与稳定性
| 严重级 | Issue/PR | 现象 | 修复进展 |
|--------|----------|------|----------|
| **High (数据丢失)** | [#2529](https://github.com/nanoclaw/nanoclaw/pull/2529) / [#3142](https://github.com/nanoclaw/nanoclaw/pull/3142) | Signal 适配器丢弃入站附件 / 挂载路径错误导致容器内不可读 | 均有对应 Fix PR 待合并，建议优先 Review 合入 |
| **Medium (功能缺失)** | [#3209](https://github.com/nanoclaw/nanoclaw/pull/3209) | Slack 粘贴表格未渲染透传 | Fix PR #3209 已提交 |
| **Medium (安全配置)** | [#3207](https://github.com/nanoclaw/nanoclaw/pull/3207) | Agent 镜像含 `tar` 关键 CVE | 版本升级 PR 待合并 |
| **Low (信息泄露)** | [#3215](https://github.com/nanoclaw/nanoclaw/pull/3215) | DM 分辨率日志含敏感元数据 | 脱敏 PR 待合并 |

> 无崩溃/回归新报告；存量 Bug 均有对应 PR，处于“待合并”统一风口。

---

## 6. 功能请求与路线图信号
| 来源 | 需求 | 纳入可能性 | 依据 |
|------|------|------------|------|
| [Issue #3217](https://github.com/nanoclaw/nanoclaw/issues/3217) | `install_packages` 支持 `packages_pip` | **高** | 直接阻断 hardened-image 采用路径，已有文档 PR 确认缺口，符合“开箱即用”战略 |
| [PR #3041](https://github.com/nanoclaw/nanoclaw/pull/3041) / [#3050](https://github.com/nanoclaw/nanoclaw/pull/3050) | Dial 通道 (SMS + AI Voice) | **高** | 已完整实现适配器+向导+技能注册，标记 `Feature skill`，仅待 Review |
| [PR #3218](https://github.com/nanoclaw/nanoclaw/pull/3218) | CLI `--stdin-json` 结构化输入 | **中高** | 非破坏性增强，解锁 CI/CD 与外部编排场景，代码量小、风险低 |
| [PR #3186](https://github.com/nanoclaw/nanoclaw/pull/3186) | 宿主接缝为技能自有能力赋能 | **中** | 架构演进前置工作，配合 #3211 单一职责规范，利于长期生态扩展 |

---

## 7. 用户反馈摘要
- **痛点**：`install_packages` 缺失 pip 支持（Issue #3217）导致“想用 hardened-image 却不得不维护自定义 Dockerfile”，违背“零 Dockerfile 运维”初衷。
- **场景**：Signal/Slack 重度用户依赖附件/富文本透传，历史遗留 Bug (#2528, #3142) 造成“文件收到但无法读取”的信任受损。
- **期望**：文档层面明确容器内附件落盘路径 (#3210)、技能开发规范 (#3211)，降低二次开发试错成本。
- **满意点**：核心团队主动推进 CVE 修复 (#3207) 与发布流水线 (#3208)，体现对供应链安全的重视。

---

## 8. 待处理积压（建议维护者本周关注）
| 对象 | 停滞时长 | 风险 | 建议动作 |
|------|----------|------|----------|
| [PR #2529](https://github.com/nanoclaw/nanoclaw/pull/2529) | ~3 个月 | Signal 附件丢失长期未合，用户感知差 | 安排专人 Review，若设计无争议尽快合入 |
| [PR #3041](https://github.com/nanoclaw/nanoclaw/pull/3041) / [#3050](https://github.com/nanoclaw/nanoclaw/pull/3050) | ~1 个月 | Dial 通道完整实现闲置，错失差异化功能窗口 | 合并前确认第三方依赖许可合规，纳入下次 Release |
| [PR #3186](https://github.com/nanoclaw/nanoclaw/pull/3186) | 6 天 | 宿主接缝重构为后续技能扩展铺路，拖延将增加冲突成本 | 本周内完成 Review/合并 |
| [Issue #3217](https://github.com/nanoclaw/nanoclaw/issues/3217) | 1 天 | 硬性阻塞 Python 生态采用 hardened-image | 立即建立 Epic 或 Milestone，分配实现 `packages_pip` 支持 |

---

> **下一步建议**：  
> 1. **本周合并窗口**集中清理 16 个 Open PR，优先级：安全修复 (#3207, #3215) > 数据丢失修复 (#2529, #3142) > 架构重构 (#3214, #3213, #3212, #3186) > 新功能 (#3041, #3050, #3218) > 文档 (#3216, #3211, #3210, #3209)。  
> 2. **启动 `packages_pip` 设计评审**，将 Issue #3217 纳入 vNext 里程碑，避免 hardened-image 采用率受限。  
> 3. **关注上游 `node:22-slim` CVE 修复进度**，若短期内无修复版本，考虑在 Dockerfile 中显式升级 `tar` 或切换基础镜像。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-10

---

## 1. 今日速览

IronClaw 今日呈现 **高强度并行推进** 态势：22 条 Issue 活跃（含 7 条关闭），27 条 PR 更新（8 条已合并/关闭），零版本发布。核心团队与社区贡献者同步推进 **工具发现增强（#7405/#7410）**、**并行能力调度（#7407）**、**Web Push 原生通道（#7398）**、**技能系统重构（#7171）** 等重点特性，同时修复了 **TOCTOU 竞态（#7395）**、**Emoji 渲染（#7404）**、**活动时间线乱序（#7403）**、**流式 Responses 僵尸线程（#7401）** 等关键缺陷。Bug Bash 遗留问题批量收敛（7 条关闭），项目整体处于 **v1.2.0 特性冻结前的质量攻坚期**，健康度良好。

---

## 2. 版本发布

> 今日无新版本发布。当前稳定版为 `1.1.0`，`1.1.0-rc.1` 仍在验证中。

---

## 3. 项目进展

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#7395](https://github.com/nearai/ironclaw/pull/7395) | **Bug Fix (XL)** | 修复 `claim_delivery_attempt_for_send` TOCTOU 竞态，允许失败行重新打开，消除发送态丢失/误判 | `outbound` 交付链路 | Open |
| [#7352](https://github.com/nearai/ironclaw/pull/7352) | **Bug Fix (L)** | 绑定 Gate 投影身份到 Gate Ref，解决同一 Run 多个同类通知投影 ID 冲突 | 审批/授权 Gate 通知 | Open |
| [#7410](https://github.com/nearai/ironclaw/pull/7410) | **Feature (M)** | `tool_search` 返回完整签名（`parameters` + `schema_complete: true`），超预算回退紧凑元数据 | 工具发现/延迟加载 | Open |
| [#7409](https://github.com/nearai/ironclaw/pull/7409) | **Test (L)** | 建立 100/500/1000 工具规模的检索基线，命名空间均衡干扰项 | 评估/回归防护 | Open |
| [#7396](https://github.com/nearai/ironclaw/pull/7396) | **Feature (XL)** | 通道中立的渐进式预览契约，Slack/Telegram 统一 `chat.postMessage`→`chat.update` 预览 | 通知频道统一体验 | Open |
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | **Bug Fix (XL)** | 每个 Skill Mount 对应独立 DB-backed 树，修复技能安装后消失、命令不可运行 | 技能系统核心 | **Closed (Merged)** |
| [#7398](https://github.com/nearai/ironclaw/pull/7398) | **Feature (XL)** | Web Push (RFC 8030/8291/8292) + PWA，Web App 成为第一方通知通道 | 通知触达完整性 | Open |
| [#7131](https://github.com/nearai/ironclaw/pull/7131) | **Feature (XL)** | 触发运行失败/取消/超时向创作者投递消毒后的终态通知 | 运行交付可观测性 | Open |
| [#7402](https://github.com/nearai/ironclaw/pull/7402) | **Fix (L)** | 仪表盘精确上报自动化总数（聚合查询），不再以分页 50 条为总数 | UI 数据一致性 | Open |
| [#7404](https://github.com/nearai/ironclaw/pull/7404) | **Fix (M)** | Markdown/Streamdown 渲染器支持 Gemoji 短码转换，保留代码块原文 | Emoji 显示回归 | Open |
| [#7403](https://github.com/nearai/ironclaw/pull/7403) | **Fix (S)** | 流式进度消息前置，最终回复保持轮次收尾位置，修复 Activity 时间线乱序 | 聊天 UI 时序 | Open |
| [#7401](https://github.com/nearai/ironclaw/pull/7401) | **Fix (S)** | 拒绝 `stream: true` + 外部 `tools[]` 组合（400 `param: tools`），阻断僵尸线程产生 | Responses API 稳健性 | Open |
| [#7387](https://github.com/nearai/ironclaw/pull/7387) | **Chore (L)** | 12 项依赖批量升级（base64, toml, rstest 等） | 供应链安全 | **Closed (Merged)** |
| [#7022](https://github.com/nearai/ironclaw/pull/7022) | **Chore (XS)** | GitHub Actions 依赖升级（setup-node 4→7 等） | CI 稳定性 | **Closed (Merged)** |

> **合计**：8 条 PR 已合并/关闭，其中 2 条核心修复（技能系统、依赖），6 条维护类；19 条在审，含 5 条 XL/L 级特性/修复，显示主干正向高密度推进。

---

## 4. 社区热点

| Issue/PR | 评论/互动 | 核心诉求 | 分析 |
|----------|-----------|----------|------|
| [#7400](https://github.com/nearai/ironclaw/issues/7400) | 2 💬 | **高严重**：`stream: true` + `tools[]` 导致中途失败并留下不可删“僵尸线程”，100% 复现 | 生产环境阻断性缺陷，**#7401 已给出拒绝策略修复**，需尽快合并回主干 |
| [#7405](https://github.com/nearai/ironclaw/issues/7405) | 2 💬 | 工具发现延迟加载：返回完整签名、命名空间感知目录预览，减少模型轮次 | 性能与 Token 预算优化，**#7410/#7409 为 Phase 1 实现**，路线图明确 |
| [#7407](https://github.com/nearai/ironclaw/issues/7407) | 2 💬 | `BatchPolicy::Parallel` 真并发执行（有界），零模型感知变更 | 吞吐提升关键路径，无配套 PR，属 v1.2.0 候选 |
| [#7166](https://github.com/nearai/ironclaw/issues/7166) | 1 💬 | 渐进式工具披露 Epic 跟踪，v1.2.0 里程碑 | 多 PR 并行（搜索、预览、命名空间），进度可观测 |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | 4 💬 | Reborn Routine 读 Slack DM 缺能力 + `capability_info` 重试环 | 已关闭，说明能力边界与重试策略已收敛 |
| [#7292](https://github.com/nearai/ironclaw/issues/7292) | 2 💬 | CoinGecko 工具安装后不可用，Runner 心跳报错 | 已关闭，工具安装/激活链路修复验证通过 |

> **信号**：社区关注点集中在 **工具链性能（搜索/并发/披露）**、**通知通道完备性**、**核心运行时稳健性** 三大维度，且均有对应 PR 在审，反馈闭环良好。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **Critical** | [#7400](https://github.com/nearai/ironclaw/issues/7400) | 流式 Responses + 外部工具 → 中途失败 + 僵尸线程（不可删） | [#7401](https://github.com/nearai/ironclaw/pull/7401) (拒绝入口) | Open / 有 Fix |
| **High** | [#7346](https://github.com/nearai/ironclaw/issues/7346) | Assistant 消息 Emoji 短码原文显示（`:wave:` 不渲染） | [#7404](https://github.com/nearai/ironclaw/pull/7404) | Open / 有 Fix |
| **High** | [#7348](https://github.com/nearai/ironclaw/issues/7348) | Activity 块与进度消息时序错乱 | [#7403](https://github.com/nearai/ironclaw/pull/7403) | Open / 有 Fix |
| **High** | [#7345](https://github.com/nearai/ironclaw/issues/7345) | Agent 上报 61 自动化，UI 仅显示 50（计数不一致） | [#7402](https://github.com/nearai/ironclaw/pull/7402) (聚合查询) | Open / 有 Fix |
| **Medium** | [#5882](https://github.com/nearai/ironclaw/issues/5882) | 反复 Slack 重连导致认证流破损，仅重装可恢复 | — | Open / 无 Fix |
| **Medium** | [#6479](https://github.com/nearai/ironclaw/issues/6479) | Routine 可创建/修改 Routine，自复制风险 | — | Open / 无 Fix |
| **Medium** | [#6046](https://github.com/nearai/ironclaw/issues/6046) | 简单邮件→表格任务触发 124 次工具调用（过度编排） | — | Open / 无 Fix |
| **Low** | [#7349](https://github.com/nearai/ironclaw/issues/7349) | 刷新页面导致长任务历史/Activity 丢失 | — | Open / 无 Fix |
| **Low** | [#5551](https://github.com/nearai/ironclaw/issues/5551) | Slack 自动化推送中间进度而非最终结果 | — | Open / 无 Fix |

> **已关闭验证**：#5522、#7292、#5552、#5509、#5510、#4341、#4344 —— 均为 Bug Bash 期 P2/P3 问题，批量收敛说明 QA 回归有效。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 入版本可能性 |
|------|------|--------|--------------|
| **工具发现完整签名 + 命名空间预览** | [#7405](https://github.com/nearai/ironclaw/issues/7405) | Phase 1 PR 就绪（#7410/#7409） | **极高**（v1.2.0 核心） |
| **Parallel Batch 真并发执行** | [#7407](https://github.com/nearai/ironclaw/issues/7407) | 设计明确，无 PR | **高**（性能里程碑） |
| **Web Push + PWA 第一方通道** | [#7398](https://github.com/nearai/ironclaw/pull/7398) | XL PR 在审，规范完整 | **高**（通知完整性） |
| **替换第一方编码工具为 omp 固定面** | [#7392](https://github.com/nearai/ironclaw/issues/7392) | 实验性 Epic，引用外部 pinned commit | **中**（需评估迁移成本） |
| **技能系统虚拟文件系统挂载** | [#7171](https://github.com/nearai/ironclaw/pull/7171) 衍生 #7203 | 核心修复已合并，后续项待排期 | **中**（v1.2.1+） |
| **内置/持久写路径压测覆盖** | [#7360](https://github.com/nearai/ironclaw/issues/7360) | 夜间压测扩展，Mock 模型增强 | **中**（质量保障） |

> **判断**：v1.2.0 将以 **工具发现增强、并行调度、Web Push、渐进式预览** 为四大可见特性；技能 VFS、编码工具替换、压测完善更可能滑入 v1.2.1。

---

## 7. 用户反馈摘要

| 痛点场景 | 代表 Issue | 用户原声/推测诉求 |
|----------|------------|-------------------|
| **Slack 认证脆弱** | [#5882](https://github.com/nearai/ironclaw/issues/5882) | “多次重连后卡在 Waiting for Slack，回调页报 Authorization failed，只能卸载重装” |
| **工具安装后失效** | [#7292](https://github.com/

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-10

---

## 1. 今日速览
- **整体活跃度：低** —— 过去 24 小时仅有 **3 条 Issue 更新**，**0 个 PR** 且 **无新版本发布**，代码库处于维护期而非快速迭代期。
- **核心动态集中在模型配置与多模型协作**：两条新 Issue（`#2453`、`#2132`）分别暴露了 **自定义模型 Provider 解析错误** 与 **跨模型子任务调度缺失** 问题；一条陈旧 Issue（`#1187`）再次被顶起，反映 **上下文窗口/输出 Token 手动配置** 的长期诉求。
- **社区响应迟缓**：三条 Issue 均无核心维护者介入，`#1187` 甚至被标记 `stale` 超过 4 个月，提示项目在 **Issue 分流与优先级排序** 上存在滞后。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
> 过去 24 小时 **无 PR 合并/关闭**，代码库无实质性前进。建议关注后续是否有针对 `#2453` 解析逻辑的修复 PR 提交。

---

## 4. 社区热点

| 排名 | Issue | 交互热度 | 核心诉求 | 分析 |
|------|-------|----------|----------|------|
| 1 | **#2453** 切换自定义模型被判定为不许可 | 💬 1 / 👍 0 / 创建即更新 | **Provider 前缀解析冲突**：`custom_1/openai/gpt-oss-20b:free` 被误判为 OpenAI 官方模型，导致鉴权失败；新线程不复现，仅在会话内切换触发。 | 典型 **字符串切分/正则匹配缺陷**，影响 OpenRouter/NVIDIA 免费模型用户，属 **高频阻断性 Bug**，建议 P0 修复。 |
| 2 | **#1187** 增加上下文窗口与输出 Token 设置 | 💬 2 / 👍 1 / `stale` 标记 | **模型参数硬编码导致溢出**：DeepSeek 报 `Context overflow`，用户期望在设置页显式配置 `max_context` 与 `max_output_tokens`。 | 长尾需求，反映 **模型能力元数据缺失**，若引入模型注册表可一并解决。 |
| 3 | **#2132** 跨模型子任务调用机制缺失 | 💬 1 / 👍 0 / `stale` 标记 | **多 Agent 协作断链**：主任务（M3）无法感知子任务状态，网关函数调用未纳入 `sessions_list`/`subagents` 追踪。 | 架构级缺口，涉及 **会话上下文传播与事件总线**，需设计统一协议，非单点修复可解。 |

> 🔗 链接：[#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) · [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) · [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)

---

## 5. Bug 与稳定性

| 严重级 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P0 阻断** | **#2453** | 会话内切换自定义模型 → Provider 解析错误 → 请求被拒 | 所有使用 OpenRouter/NVIDIA 免费模型且需会话中切换的用户 | ❌ 无 |
| **P1 功能缺失** | **#1187** | 无法手动调整上下文/输出上限 → 长对话溢出报错 | 依赖大上下文模型（DeepSeek 等）的重度用户 | ❌ 无 |
| **P2 架构缺陷** | **#2132** | 跨模型子任务状态不可见、无主动回调 | 多模型协作/编排场景 | ❌ 无 |

---

## 6. 功能请求与路线图信号
1. **模型元数据可配置化**（`#1187`） → 若引入 **Model Registry / Capability Schema**，可统一解决上下文窗口、输出上限、定价、模态等元数据问题，建议列入 **vNext 规划**。
2. **多模型协作总线**（`#2132`） → 需设计 **统一事件总线 + 子任务生命周期钩子**，属于 **中大型重构**，短期难落地，建议拆分为：① 会话内消息广播 ② 子任务完成回调 ③ 网关调用纳入追踪体系。
3. **Provider 解析器健壮化**（`#2453`） → 立即可落地的 **小范围重构**，建议在 **下一个 Patch 版本** 修复并回归测试。

---

## 7. 用户反馈摘要
- **痛点 1**：*“切个模型还得开新线程，体验割裂”* —— `#2453` 用户明确对比新/旧线程差异，暴露 **会话级 Provider 缓存** 设计缺陷。
- **痛点 2**：*“DeepSeek 动不动就 Context overflow，明明模型支持更长”* —— `#1187` 评论区用户反馈官方默认参数保守，期望 **UI 显式覆盖**。
- **痛点 3**：*“主 Agent 根本不知道子 Agent 干完没”* —— `#2132` 作者给出详细调用栈与数据结构缺失截图，属 **深度用户/二次开发者**，诉求具代表性。

---

## 8. 待处理积压（建议维护者本周关注）

| Issue/PR | 停滞时长 | 优先级建议 | 处理建议 |
|----------|----------|------------|----------|
| **#1187** | 131 天（含 `stale`） | P1 | 引入 `model_config.yaml` 或 Settings Schema，允许用户覆盖 `max_context_tokens`/`max_output_tokens`；同步更新模型选择器 UI。 |
| **#2132** | 62 天（含 `stale`） | P2 | 召开架构评审，定义 `SubTaskEvent{start,progress,done,error}` 协议；先在单模型内验证再扩展跨模型。 |
| **#2453** | 0 天（新） | **P0** | 立即修复 `parseModelIdentifier()` 正则，增加单元测试覆盖 `custom_*/provider/model:tag` 格式；发布 hotfix。 |

---

> **项目健康度提示**：当前 **Issue 处理周期偏长**，核心维护者可见度低。建议设立 **每周 Bug Triage 机制**，对 `stale` 标签自动升级或关闭，避免积压掩盖真实优先级。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-10

> 数据范围：2026-08-09 至 2026-08-10 (UTC) | 数据源：github.com/moltis-org/moltis

---

## 1. 今日速览
- **整体活跃度：低-中等**。过去 24 小时内无新版本发布，代码合并活动为零，主要动态集中在 **Issue 反馈（2 条）** 与 **待审 PR（1 条）**。
- **核心关注点**：集中在 **Vault 密钥派生一致性修复**（PR #1186）、**Heartbeat UI 表单状态丢失**（Issue #1187）及 **Apple Container 1.x 沙箱运行状态识别失效**（Issue #1185）。
- **项目健康度**：社区反馈精准且带复现步骤，维护者响应窗口尚未开启（均为 0 评论），建议尽快介入分流以避免积压。
- **风险提示**：PR #1186 涉及安全核心路径（恢复短语哈希），虽为修复不一致，但需充分测试向后兼容性后再合并。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展
**今日无 PR 合并/关闭。**  
唯一在途 PR 为 **#1186**，尚处「待审查」状态，未进入合并流程。项目代码库在过去 24h 无实质性前向推进。

---

## 4. 社区热点
| 排名 | 对象 | 标题 | 互动指标 | 核心诉求分析 |
|------|------|------|----------|--------------|
| 1 | [Issue #1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat settings UI silently resets fields not represented by the form | 👍 0 / 评论 0 | **数据完整性缺陷**：表单提交时未渲染的字段被静默重置，导致用户隐性配置丢失。虽无点赞/评论，但属典型「静默数据丢失」严重 Bug，优先级应高于普通 UI 缺陷。 |
| 2 | [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x sandbox starts but Moltis treats it as not running | 👍 0 / 评论 0 | **集成兼容性阻断**：上游 Apple Container 1.x 运行状态判断逻辑失效，导致编排/监控功能不可用。涉及外部依赖版本升级，需尽快适配。 |
| 3 | [PR #1186](https://github.com/moltis-org/moltis/pull/1186) | fix(vault): normalize recovery phrase before hashing | 👍 0 / 评论 undefined | **安全一致性修复**：解决恢复短语派生 KEK 与存储哈希不一致问题，修复「小写/含破折号短语无法解锁」的隐性 Bug。虽无讨论，但触及核心加密路径，审查优先级最高。 |

---

## 5. Bug 与稳定性
| 严重程度 | Issue | 标题 | 关联 Fix PR | 状态 |
|----------|-------|------|-------------|------|
| **High** | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat UI 静默重置未渲染字段 | 无 | **待确认/待修复** — 静默数据丢失，影响配置持久化可靠性 |
| **High** | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x 运行状态误判 | 无 | **待确认/待修复** — 核心集成功能失效，阻断依赖该沙箱的用户 |
| **Medium** | [#1186](https://github.com/moltis-org/moltis/pull/1186) | 恢复短语哈希未归一化导致解锁失败 | **PR #1186 (Open)** | **已有修复待审** — 修正派生与校验逻辑不一致，需回归测试旧短语兼容性 |

> **注**：所有 Issue 创建/更新均在 24h 内，尚无维护者回应或标签分流。

---

## 6. 功能请求与路线图信号
**本周期无显式功能请求（Feature Request）Issue。**  
但从现有动态可推导出隐性路线图信号：
1. **Apple Container 1.x 适配**（Issue #1185）将成为近期发布的必选项，因上游已发稳定版。
2. **Vault 恢复流程健壮化**（PR #1186）暗示后续可能跟进「恢复短语格式规范化」文档化或迁移工具。
3. **表单状态管理重构**（Issue #1187）可能触发更广泛的 Settings UI 技术债偿还。

---

## 7. 用户反馈摘要
- **痛点 1（配置丢失）**：用户在 Heartbeat 设置页保存时，未显示在表单中的字段被重置为默认值，导致「隐性配置回滚」，且无任何提示。场景：高级用户手动编辑过 JSON 或使用旧版本留下的字段。
- **痛点 2（沙箱不可用）**：升级 Apple Container 1.x 后，Moltis 无法识别沙箱运行状态，导致依赖容器隔离的 Agent/工具链全部失效。用户明确标注「最新版 Moltis」，回归可能性大。
- **满意度侧写**：两份报告均附带完整 Preflight Checklist 与复现步骤，显示用户群体技术成熟度高、反馈质量高，但零响应可能引发挫败感。

---

## 8. 待处理积压提醒
> 以下为本周期新增且**超 24h 无任何维护者动作（评论/标签/指派）**的关键项，建议立即处理：

| 对象 | 标题 | 停滞时长 | 建议动作 |
|------|------|----------|----------|
| [Issue #1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat UI 静默重置字段 | ~24h | 打 `bug` `data-loss` `ui` 标签，指派前端维护者，评估是否需热修复回港 |
| [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x 状态识别失效 | ~36h | 打 `integration` `apple-container` `regression` 标签，联系集成维护者复现 |
| [PR #1186](https://github.com/moltis-org/moltis/pull/1186) | Vault 恢复短语哈希归一化 | ~24h | **优先 Code Review**，要求补充：1) 现有短语迁移测试 2) 大小写/破折号矩阵测试 3) 文档同步 |

---

### 📌 维护者行动清单（建议今日内完成）
1. **Triage 三连击**：为上述 2 Issues + 1 PR 打标签、指派、里程碑（建议 `v0.x.x-hotfix`）。
2. **安全先行**：优先 Review & Merge PR #1186（需 CI 绿灯 + 至少 1 核心维护者 Approve）。
3. **回归阻断**：复现 Issue #1185，若确认为 Apple Container API 变更，发布兼容性补丁版本。
4. **静默丢失止血**：Issue #1187 评估「表单脏检查/部分更新」策略，若风险大考虑回滚或紧急修复。

---

*报告生成时间：2026-08-10 06:00 UTC | 下次更新：2026-08-11 同一时间*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-10

> **数据来源**: GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时动态  
> **统计口径**: Issues 16 条（新开/活跃 10，关闭 6），PRs 50 条（待合并 49，已合并/关闭 1），Release 0 个

---

## 1. 今日速览
- **活跃度评级：🟢 高** — 单日 50+ PR 活跃更新、16 个 Issue 交互，核心维护者与首次贡献者并行推进，呈现健康的“双轨并行”协作态势。
- **核心看点**：v2.1.0-beta.2 周边的 **ReMe 记忆体系增强（reranker、Auto-Dream 容错）**、**Provider 兼容性修复（Gemini `$schema`、DeepSeek V4 1M 上下文、StepFun 严格模式）**、**前端渲染/流式传输底层重构（SSE 实时流、长文本折叠、主题皮肤）** 三大技术主线同步推进。
- **风险点**：连续 4 个重复 Issue（#6848–#6851）反映前端长工具输出渲染崩溃，虽已关闭但未见修复 PR 合并，需警惕回归；杀毒软件误杀（#6847）为桌面端分发隐患。
- **社区信号**：移动端适配（#6281）、审批体验优化（#6832）、隐藏 Agent（#6842）等“长尾体验”需求集中涌现，标志着项目从“核心功能可用”向“产品级打磨”过渡。

---

## 2. 版本发布
> **今日无新 Release**  
> 当前最新版本仍为 `v2.1.0b2`（ReMe Light 0.4.1.4），正式版发布节奏取决于 Auto-Dream 稳定性（#6841）与 Provider 兼容性收敛。

---

## 3. 项目进展（今日已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响范围 |
|----|------|----------|----------|
| [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) ✅ **已合并** | **feat(providers)** | 新增 DeepSeek V4 (flash/pro) 1,000,000 token 上下文窗口目录条目，修复控制台误报 131k 导致的提前压缩 | Provider 配置、Console 显示、Context Compaction 触发阈值 |
| [#6848–#6851](https://github.com/agentscope-ai/QwenPaw/issues/6848) ❌ **Issue 关闭** | **bug(frontend)** | 4 个重复 Issue 报告“长多行工具输出折叠为不可读块”，标记为重复关闭，**但无对应修复 PR 合并** | Console 渲染器、Markdown/代码块虚拟化 |

> **进展评估**：Provider 侧配置类修复交付快（单文件改动、测试简单）；前端渲染/流式架构类 PR（#6843、#6750、#6312）仍在 Review/讨论中，**v2.1.0 正式版阻塞项集中在前端稳定性与 ReMe 自动化质量**。

---

## 4. 社区热点（高互动/高关注 Issue 与 PR）

| 对象 | 互动量 | 核心诉求 | 分析 |
|------|--------|----------|------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) **Help Wanted S1** | 💬 66 条评论 | 任务认领广场，涵盖主题皮肤、移动端、插件市场等 20+ 任务 | **社区运营标杆**：持续 4 个月保持高活跃，首次贡献者入口清晰，PR #6312/ #6842/ #6854 均源于此 |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) **移动端适配** | 💬 5 条评论 | Web Console 响应式布局、触控优化、PWA 支持 | 用户真实场景：手机端监控/审批长任务；PR #6312 主题模块可复用断点逻辑 |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) **MCP 数字字符串被误判为 number** | 💬 3 条评论 | 参数 schema 为 `string` 但值像数字（如 `"00123"`）时被序列化为 JSON number 导致调用失败 | 典型 **OpenAI Function Calling 兼容性陷阱**，需在 Provider/Tool Call 层强制 `string` 序列化 |
| [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) **审批目的本地化描述** | 首贡 PR | 为 Guarded Tool Call 增加 `purpose` 字段，Console 审批卡片直接展示“一句话理由” | 直接响应 #6832，体验收益高、改动面窄，**极大概率进 v2.1.0** |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **🔴 Critical** | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | 桌面端执行任务被杀毒软件拦截/强杀进程（附截图） | 无 | **开放**，需代码签名、行为白名单、或沙箱隔离方案 |
| **🟠 High** | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Gemini Provider 发送含 `$schema` 的 tool schema 导致 `Model 'unknown' execution failed` | [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) (strip `$schema`) | **PR 待合并**，单行修复，回归风险低 |
| **🟠 High** | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 参数 `type: string` 但值为纯数字字符串被当作 number 传参，调用失败 | 无 | **开放**，建议在 `tool_call` 序列化层按 schema 强制类型 |
| **🟡 Medium** | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手消息结束时间异常：实际 2 min 显示为几秒 | [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) (preserve `finished_at`) | **PR 待合并**，修复历史记录重载时的时间戳丢失 |
| **🟡 Medium** | [#6851–#6848](https://github.com/agentscope-ai/QwenPaw/issues/6851) | 长工具输出渲染崩溃为单行 Blob（v2.1.0b2 复现） | 无 | **Issue 关闭但无 Fix**，需虚拟列表/分页/折叠组件重构 |
| **🟢 Low** | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | `prompts.py` 宣称 Dream 自动同步到 `MEMORY.md` 实为未实现 | 无 | **文档/代码不一致**，需补全 ReMe Dream 第 5 步或修正提示词 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 入版本概率 | 备注 |
|------|----------|--------|------------|------|
| **审批卡片显示“目的描述”** | [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) / [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | ✅ PR Ready | **🟢 95%** | 首贡 PR、改动最小、直接解决痛点 |
| **隐藏 Agent（不在选择器显示但可被调度）** | [#6842](https://github.com/agentscope-ai/QwenPaw/pull/6842) | ✅ PR Ready | **🟢 90%** | 插件/内部 Agent 常见需求，已通过首贡 Review |
| **ReMe Reranker 支持（过采样→重排→截断）** | [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | 🔄 Under Review | **🟡 70%** | 后端核心增强，需性能基准与配置文档 |
| **Session Fork（快照式分叉新会话）** | [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | 🔄 Under Review | **🟡 60%** | 涉及会话身份、存储层，测试覆盖需补齐 |
| **OneBot 远程语音/图片媒体处理** | [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | 🔄 Under Review | **🟡 50%** | 适配特定 OneBot 实现，优先级取决于用户基数 |
| **可配置主题/皮肤模块** | [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) | 📝 Draft | **🔴 30%** | 仍在设计评审，v2.1.0 可能仅合并 Token 基础设施 |
| **移动端响应式 Console** | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 💡 Issue Only | **🔴 10%** | 需 CSS 重构、触控交互、PWA，建议纳入 v2.2 规划 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 维度 | 代表性声音 | 潜在改进行动 |
|------|------------|--------------|
| **安装/分发** | “QwenPaw 被杀软强杀，WorkBuddy 同模型同任务却无事”（#6847） | 申请 EV 代码签名证书；提供便携版免安装包；增加“受信任路径”安装引导 |
| **模型兼容** | “Ascend vLLM 1.1.7 后连不上，OpenAI SDK 抛 ConnectionError”（#5584） | 针对华为昇腾/国产化栈补充 CI 测试矩阵，Provider 层统一异常包装与重试策略 |
| **记忆系统** | “ReMe4 路线图何时全量？Auto-Link、四模态检索、四类摘要权重在哪？”（#6840） | 输出公开 Roadmap（含 Milestone 与 Owner），降低社区预期管理成本 |
| **前端体验** | “长工具输出直接炸成一行，根本看不了”（#6851） | 引入虚拟滚动 + 可折叠代码块 + “展开全文”按钮，参考 VS Code Output 面板交互 |
| **审批流** | “权限申请只贴 PowerShell 代码，完全看不懂干啥”（#6832） | **已有 PR #6854 解决**，建议同步增加“风险等级”图标与“撤销预览” |

---

## 8. 待处理积压（长期未响应/高价值滞留）

| 对象 | 停滞天数 | 价值 | 建议动作 |
|------|----------|------|----------|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) **移动端适配** | 21 天 | 扩大使用场景（手机端审批/监控） | 指派前端 Owner，拆解为：CSS 断点 → 触控交互 → PWA Manifest 三子任务，挂载到 #2291 认领 |
| [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) **Ascend vLLM 连不上** | 44 天 | 国产化部署关键阻塞 | 邀请华为/昇腾社区维护者复现，补充 `providers/ascend.py` 或统一 OpenAI 兼容层错误码映射 |
| [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) **主题皮肤 Draft PR** | 20 天 | 品牌化/白标交付基础 | 维护者给出“最小可行范围”评审意见（仅 CSS Variable + 构建时注入），避免设计发散 |
| [#6750](https://github.com/agentscope-ai/QwenPaw/pull/6750) **Session Deadlock/Oversized Prompt** | 5 天 | 修复会话卡死、提示词爆炸两大顽疾 | 优先 Review，涉及 `chatLoading` 状态机重构，需 E2E 测试兜底 |
| [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) **Auto-Dream 单元失败标记全任务 Error** | 1 天 | ReMe 自动化可靠性核心 | 设计“部分失败可重试 + 降级策略”，纳入 v2.1.0 必修清单 |

---

## 📌 维护者行动清单（建议今日/本周处理）
1. **合并 #6844 / #6845 / #6854** — 三个单文件/低风险 Fix，立即缓解 Gemini 报错、时间戳丢失、审批体验三大痛点。
2. **建立“前端渲染崩溃”专

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-10

> **数据基准**：过去 24 小时 GitHub 活动（Issues: 50 更新 / PRs: 50 更新 / Releases: 0）  
> **报告生成时间**：2026-08-10 08:00 UTC

---

## 1. 今日速览
- **整体活跃度：极高**。单日 100 条 Issue/PR 更新，且无新版本发布，表明项目处于 **密集开发/代码审查冲刺期**，而非发布窗口。
- **核心主题聚焦**：安全加固（SSRF 防护、Webhook 认证、Secrets 抽象）、内存子系统重构（Hindsight 7 连 PR）、多渠道稳定性（Telegram/Discord/Webhook）、以及 RFC 治理流程精简。
- **风险信号**：存在 **P0 级安全缺陷**（#9565 Webhook 非认证入口）与 **高风险内存泄漏**（#8642 MCP Schema 克隆导致 RSS 增长）均处于“Open/In-progress”且已有 PR 推进，需优先合并验证。
- **治理债务**：3 个长期开放的核心 RFC（#6808 Work Lanes、#7100 模型能力配置、#6971 安全态势）持续累积评论，显示维护者决策队列（Tracker #8692）存在堰塞湖。
- **CI 健康度**：Containerfile 锈版本固定导致构建失败（#9690 已关闭）与间歇性测试不稳定（#9834）提示基础设施维护滞后于功能开发。

---

## 2. 版本发布
**无新版本发布**。当前最新版本仍为 `0.8.3`（含 3 套并行签名机制，详见 #9101 正在整合中）。

---

## 3. 项目进展 | 今日合并/关闭的关键 PR 与 Issue
| 编号 | 类型 | 标题 | 影响面 | 状态 | 备注 |
|------|------|------|--------|------|------|
| [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) | Bug/CI | Containerfile StageX 固定 rustc 1.95.0 低于 MSRV | 容器构建全系 | **Closed** | 已修复构建阻塞，解除 v0.8.4 发布隐患 |
| [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | Bug/Runtime | `shared_budget` TOCTOU + `SopEngine::finish_run` panic | 运行时稳定性 (P1) | **Closed** | 并发预算竞态与 Mutex unwrap 双修复 |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | Bug/Tool | `browser_open` 无头环境挂起导致 Agent Turn 阻塞 | 工具链/Channel (S1) | **Closed** | 引入超时与子进程看门狗 |
| [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | Bug/Daemon | Stdio MCP Server 僵尸进程累积 | 守护进程资源泄漏 (S2) | **Closed** | 子进程收割机制完善 |
| [#9860](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) | Bug/Channel | 文件系统 Channel 触发 Web UI 冻结 | Web UI/运行时 (S2) | **Closed (Duplicate)** | 重复报告，根因待排查 |
| [#9555](https://github.com/zeroclaw-labs/zeroclaw/pull/9555) | Feat/Channel | 新增 ICT 企业消息渠道适配器 | 渠道生态扩展 | **Closed (Merged?)** | PR 显示 Closed，需确认是否已合入 master |

> **进展评估**：今日 **4 个 P1/S1 级阻塞性 Bug 关闭**，显著降低运行时故障面；但 **0 个大型 Feature PR 合并**（均处于 Review/Rebase 状态），功能交付处于“积压待审”阶段。

---

## 4. 社区热点 | 高互动 Issues/PRs 深度解析
| 排名 | 编号 | 评论/👍 | 核心诉求 | 关键分歧/阻力 |
|------|------|---------|----------|---------------|
| 1 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 22 / 0 | **Work Lanes 治理重构**：看板自动化、标签清理、优先级路由 | 已推迟批准，滚动推进中；维护者担心流程过度设计 |
| 2 | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 12 / 0 | **模型能力/上下文窗口统一配置**：解决 Vision/Context 多源不一致 | 涉及 Provider/Gateway/Runtime/Web 多层，风险标记 High，需 Maintainer Review |
| 3 | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | 11 / 0 | **WhatsApp `allowed_groups` 空列表语义修正**：从“全放行”改为“全拒绝” | 安全默认值变更属破坏性，需迁移路径与运营沟通 |
| 4 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 11 / 0 | **Maintainer 决策队列 Tracker** | 成为 RFC/设计问题的“等待室”，反映决策吞吐不足 |
| 5 | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) | 6 / 0 | **RFC 流程精简**：缩短讨论期、降低一致性门槛、自动化投票 | 直接回应 #6808/#7100 等长期搁置痛点，可能引发治理变革 |

> **洞察**：前 5 热点中 **4 个为 RFC/治理类**，揭示社区核心矛盾在于 **“决策机制跟不上技术债积累速度”**，而非单一技术难题。

---

## 5. Bug 与稳定性 | 按严重度排序
| 严重度 | 编号 | 标题 | 组件 | 是否有 Fix PR | 进展 |
|--------|------|------|------|---------------|------|
| **P0 / S0** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Gateway Webhook 未认证即分发 (WhatsApp/Linq/WATI) | Gateway/API | ❌ 无 PR | **In-progress**，需立即补丁 |
| **P1 / S1** | [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | `try_enable_pgvector` 嵌套 Runtime Panic | Memory/Postgres | ❌ 无 PR | **Accepted**，启动阻塞 |
| **P1 / High** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP Tool Schema 克隆导致 RSS 无界增长 | Agent/Runtime/MCP | ❌ 无 PR | **Accepted**，内存泄漏核心根因 |
| **P1 / High** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `sops_dir` 文档默认值未生效致 SOP 静默失效 | Daemon/Config/SOP | ❌ 无 PR | **Accepted**，配置静默失败 |
| **P2 / High** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 高熵检测器误杀 Solana 地址且开关失效 | Channel/Telegram/Security | ❌ 无 PR | **Accepted**，数据泄露误报 |
| **P2 / High** | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | Config Flush 并发覆盖写 | Runtime/Daemon | ❌ 无 PR | **Accepted**，配置一致性风险 |
| **P2 / Med** | [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | Discord Typing Indicator 卡死 (Dashboard Reload) | Channel/Discord | ❌ 无 PR | **Accepted**，UX 退化 |
| **P2 / Med** | [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) | Telegram Typing Indicator 审批等待期持续运行 | Channel/Telegram | ❌ 无 PR | **In-progress**，状态误导 |

> **关注点**：**P0 安全洞 (#9565) 与 P1 内存泄漏 (#8642) 均无关联 PR**，建议维护者今日内指派/开启热修复分支。

---

## 6. 功能请求与路线图信号
| 信号来源 | 功能方向 | 关联 PR 进度 | 纳入下版本 (v0.8.4+) 概率 | 备注 |
|----------|----------|--------------|----------------------------|------|
| [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) | **Secrets 抽象**：`KeySource` Trait + `FileKeySource` 后端 | Open, XL, Needs Author Action | 🟡 中 | 安全基建，阻塞后续 KMS/HSM 集成 |
| [#9064/9065/9068/9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9064) | **Hindsight Memory 重构** (7-stack: Tier/Recall/Retain/Dashboard) | 全部 Open, XL, Rebased 08-03 | 🟢 高 | 核心记忆子系统现代化，**已拆分可审查**，若 CI 通过极大概率进 0.8.4 |
| [#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607) | **Coding CLI 工具走配置 Runtime/Sandbox** (Codex/Claude/Gemini/OpenCode) | Open, L, Distinguished Contributor | 🟢 高 | 统一沙箱策略，安全合规刚需 |
| [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) | **Langfuse Observability Backend** | Open, L, Needs Author Action | 🟡 中 | 可观测性生态补齐，非阻塞 |
| [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) | **区块链地址发布安全例外** (RFC) | Open, RFC 阶段 | 🔴 低 | 需设计共识，短期难落地 |
| [#9875](https://github.com/zeroclaw-labs/zeroclaw/pull/9875) | **Agent 级 Env Vars + Shell Tool HOME 隔离** | Open (刚创建), Docs/Config | 🟡 中 | 多租户隔离增强，配套 #9194 |

> **路线图判读**：**Memory Stack (4 PRs) + Coding CLI Sandbox (#9607) + Secrets Trait (#9194)** 构成 **v0.8.4 核心增量**；治理类 RFC (#6808/#9496) 若本周达成共识，可能同步发布 **治理版 0.8.4-rc.1**。

---

## 7. 用户反馈摘要 | 从评论挖掘真实痛点
| 场景 | 痛点原声 (意译) | 频次/来源 | 满意度倾向 |
|------|-----------------|-----------|------------|
| **多模型切换** | “Provider 默认值把不支持 Vision 的模型标成支持，导致运行时报错；Context Window 莫名其妙回落 32k” | #7100 (12 评论) | 😡 强烈不满 |
| **WhatsApp 权限** | “新建 Channel 没填 `allowed_groups` 结果全公司群都收到机器人消息，安全事故” | #9397 (11 评论) | 😱 恐慌/愤怒 |
| **内存/稳定性** | “WSL2 跑久了 RSS 涨到 8G+ 被 OOM Kill，MCP Schema 复制是元凶” | #8642 (4 评论) | 😤 持续困扰 |
| **Webhook 安全** | “源码审计发现三个 Webhook 端点完全没验签，任意人可伪造消息注入 Agent” | #9565 (3 评论) | 😨 安全焦虑 |
| **SOP 静默失败** | “按文档配置 `sops_dir` 默认路径，Cron 任务从不执行也无日志，排查半天发现根本没加载” | #9779 (2 评论) | 😫 文档失信 |
| **Dashboard 体验** | “刷新网页/合盖笔记本电脑，Agent 正在跑的任务就被取消了，太脆弱” | #9002 (PR 讨论) | 😕 易用性差 |

> **核心诉求**：**安全默认值收敛、长时运行稳定性、配置即文档、Web 交互韧性**——均指向 **生产级就绪度** 而非新功能堆砌。

---

## 8. 待处理积压 | 维护者需关注的“沉睡巨鲸”
| 编号 | 类型 | 停滞时长 | 为何重要 | 建议动作 |
|------|------|----------|----------|----------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC (Governance) | **82 天** (05-20 开启) | 决定项目未来 6 个月协作效率 | **本周内安排 Maintainer 专题会议，强行推进 Ratify/Reject** |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC (Security Posture) | **75 天** | 统一

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*