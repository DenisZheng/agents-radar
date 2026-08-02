# OpenClaw 生态日报 2026-08-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-02 02:07 UTC

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

# OpenClaw 项目日报 · 2026-08-02

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时 Issues 与 PRs 各产生 500 条更新，新开/活跃 Issue 460 条、待合并 PR 401 条，社区处于**高强度迭代与修复并行**阶段。
- **版本推进**：发布 **v2026.7.2-beta.6**，核心聚焦**状态安全与恢复**（隔离存储、崩溃可恢复快照、Schema 升级拒绝数据丢失、回滚写入器恢复），为后续稳定版奠定基础。
- **Bug 密集爆发期**：Top 50 Issues 中 P0/P1 占比超 60%，集中在**消息丢失、会话状态损坏、崩溃循环、认证回退、推理流泄露**等核心链路，反映近期大规模重构（状态层、传输层、Provider 抽象）引入的回归风险。
- **修复交付加速**：当日合并/关闭 PR 99 条，多个高优 Fix PR 已进入 `ready for maintainer look` 或 `waiting on author`，修复覆盖 Telegram/Slack/WhatsTok 消息投递、会话恢复、用量统计冻结、推理流渲染等用户感知强路径。
- **技术债显性化**：长期 Issue（如 #25592 工具间文本泄露、#31583 exec 环境变量不继承、#48920 文档超前发布）持续累积评论，维护者需在新特性与稳定性之间显式权衡。

---

## 2. 版本发布

### v2026.7.2-beta.6 (2026-08-02)
**核心主题：State safety and recovery**  
**关键变更**：
| 变更点 | 说明 | 影响面 |
|--------|------|--------|
| Quarantine store（隔离存储） | 主 DB 损坏时持久化数据自动切入隔离区，防止主库故障波及历史状态 | 全部持久化场景 |
| Crash-recoverable SQLite snapshots | 写入前自动快照，崩溃后可原子恢复 | 网关、CLI、后台任务 |
| Crash-durable filesystem publication | 文件系统发布采用写入-重命名原子操作，掉电不丢配置/状态 | 部署、升级、容器化 |
| Schema-upgrade data-loss rejection | 检测到降级风险时拒绝自动迁移，强制人工确认 | 版本升级、回滚 |
| Rollback-writer snapshot recovery | 回滚写入器可从快照恢复未完成事务 | 长事务、批量导入 |

**破坏性变更**：无直接 API 破坏，但**状态目录布局调整**（新增 `.quarantine/`、快照文件），运维脚本需同步更新。  
**迁移建议**：生产环境建议先在 Staging 完整跑一次“杀进程→重启→校验状态完整性”演练，再灰度发布。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心解决 | 状态 | 关联 Issue |
|----|------|----------|------|------------|
| [#117733](https://github.com/openclaw/openclaw/pull/117733) | **Fix** | 会议机器人音频生命周期硬限制，解决 #116201 实时语音无界残留 | ✅ **Closed** | #116201 |
| [#117727](https://github.com/openclaw/openclaw/pull/117727) | **Fix** | 分片限制为小数导致文本分割卡死，最小归一化为 1 | 👀 Ready | — |
| [#117721](https://github.com/openclaw/openclaw/pull/117721) | **Fix (AI-assisted)** | WebChat 渲染 `reasoning_content`（Kimi/DeepSeek Reasoner），修复 #88079 | ⏳ Waiting | #88079 |
| [#117657](https://github.com/openclaw/openclaw/pull/117657) | **Fix** | Control UI 制品预览 UTF-8 解码，修复中文/Emoji 乱码 | ✅ **Closed** | — |
| [#114254](https://github.com/openclaw/openclaw/pull/114254) | **Fix** | 用量统计刷新锁 PID 复用导致永久冻结，容器化部署高发 | 👀 Ready | #114234 |
| [#115968](https://github.com/openclaw/openclaw/pull/115968) | **Fix** | 回退链压缩超时共享→各候选独立 180s，避免大上下文 fallback 饿死 | ⏳ Waiting | — |
| [#116248](https://github.com/openclaw/openclaw/pull/116248) | **Fix** | 非默认 Agent 粘贴 API Key 后默认 Agent 丢 Key，认证隔离修复 | 👀 Ready | #116243 |
| [#117506](https://github.com/openclaw/openclaw/pull/117506) | **Fix** | CLI 恢复会话上下文去重，修复 Telegram 群置顶消息导致窗口裁剪异常 | 📣 Needs Proof | #97887 |
| [#116671](https://github.com/openclaw/openclaw/pull/116671) | **Feat** | Slack 默认语义进度任务卡片，替代嘈杂的流式片段 | 📣 Needs Proof | — |
| [#114587](https://github.com/openclaw/openclaw/pull/114587) | **Fix** | Telegram 直聊长轮次静默恢复，补齐进度心跳与终态保底 | 📣 Needs Proof | — |

**整体推进度**：核心稳定性修复（状态恢复、消息投递、认证隔离、推理渲染）已形成**可交付补丁包**，预计下个 Beta 或 RC 将集中合入。

---

## 4. 社区热点（评论/反应 Top 10）

| # | Issue/PR | 评论 | 👍 | 核心诉求 | 当前进展 |
|---|----------|------|-----|----------|----------|
| 1 | [#116277](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash 静默失败 | 73 | 0 | 模型无回复且无错误日志，fallback 文案不可见 | 无 Fix PR，**需 Provider 侧日志增强** |
| 2 | [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具间文本泄露到消息通道 | 39 | 1 | 内部处理文本（错误、确认、旁白）被当作用户消息发送 | 标记 `needs-product-decision`，**架构层需引入“内部/外部”消息分流** |
| 3 | [#116201](https://github.com/openclaw/openclaw/issues/116201) 实时语音无界 Provider/Consult 状态残留 | 38 | 0 | 资源限制为计数/取消信号而非硬字节上限，导致 OOM | **#117733 已合并** 修复音频生命周期，其余待后续 PR |
| 4 | [#115326](https://github.com/openclaw/openclaw/issues/115326) Crash-loop breaker 永久屏蔽 Discord/WhatsApp | 24 | 0 | 文档恢复路径 `channels.start` 报 WS 1006，需人工干预 | 无 Fix PR，**需自动化恢复与更友好的错误码** |
| 5 | [#115908](https://github.com/openclaw/openclaw/issues/115908) 会话投影重建活锁阻塞主线程 | 11 | 0 | 持续写入下投影重建不收敛，同步阻塞事件循环数十秒 | 无 Fix PR，**需异步化或背压机制** |
| 6 | [#48920](https://github.com/openclaw/openclaw/issues/48920) Live Docs 超前发布 | 11 | 4 | 文档包含未发布特性（IsolatedSessions），误导用户 | 标记 `ux-release-blocker`，**需文档版本化与发布门禁** |
| 7 | [#114234](https://github.com/openclaw/openclaw/issues/114234) 用量统计锁 PID 复用永久冻结 | 7 | 0 | 容器固定 PID 导致锁永不释放，统计冻结 | **#114254 Ready** 待合入 |
| 8 | [#116010](https://github.com/openclaw/openclaw/issues/116010) 所有持久会话硬顶 128k 上下文 | 7 | 0 | 忽略模型实际上下文窗口与配置 | 无 Fix PR，**需在会话恢复时读取模型能力** |
| 9 | [#115909](https://github.com/openclaw/openclaw/issues/115909) 浏览器扩展永远无法配对 | 7 | 0 | 设备身份连接被拒为 `token_missing`，`PAIRING_REQUIRED` 不可达 | 无 Fix PR，**需放宽设备身份认证路径** |
| 10 | [#115421](https://github.com/openclaw/openclaw/issues/115421) Schema 降级恢复误隔离/清空状态 DB | 5 | 0 | v1 打开 v6 DB 导致 Cron 任务丢失，备份命名混乱 | 无 Fix PR，**需降级策略：只读模式+人工确认** |

**热点画像**：用户最痛点集中在**“看不见的失败”**（静默失败、无日志、文档失真）、**“状态不一致”**（会话、认证、统计、上下文）、**“恢复路径失效”**（文档恢复命令报错、自动恢复加剧故障）。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 / Data-loss** | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动预检损坏运行中网关的 SQLite (`database disk image is malformed`) | 无 | 仅 macOS 复现，vanilla SQLite 不复现，**疑似并发写入竞争** |
| **P0 / Data-loss** | [#115421](https://github.com/openclaw/openclaw/issues/115421) | Schema 降级恢复误清空状态 DB，Cron 任务丢失 | 无 | 生产环境已造成数据丢失，**需回滚策略重构** |
| **P1 / Crash-loop** | [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker 永久屏蔽 Discord/WhatsApp，恢复命令失败 | 无 | 影响多通道可用性，**需自动化健康检查与软恢复** |
| **P1 / Message-loss** | [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默失败，无回复、无错误、fallback 不可见 | 无 | 多用户确认，**Provider 抽象层缺乏超时/重试/可观测性** |
| **P1 / Session-state** | [#115908](https://github.com/openclaw/openclaw/issues/115908) | 投影重建活锁阻塞主线程，所有传输停摆 | 无 | 高并发写入触发，**需异步重建+背压** |
| **P1 / Auth** | [#115909](https://github.com/openclaw/openclaw/issues/115909) | 浏览器扩展设备身份永远无法配对 | 无 | 阻断扩展核心流程，**认证网关

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-08-02）

---

## 1. 生态全景

当前生态呈现**“头部项目攻坚稳定性、腰部项目重构架构、长尾项目补齐生态”**的三层并行态势。OpenClaw、NanoBot、Hermes Agent 等头部项目进入**高强度 Bug 修复与状态安全加固期**，版本迭代从功能竞赛转向数据一致性、崩溃恢复、认证隔离等生产级指标。IronClaw、ZeroClaw、Moltis 等新生代项目聚焦**契约层解耦、多租户安全、可观测性基建**，展现出更强的架构治理意识。整体生态正从“Demo 可跑”向“生产可托”跨越，**状态管理、多通道网关、Provider 抽象、插件沙箱**成为共性技术债高地。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release (24h) | 合并/关闭 PR | 核心状态 | 健康度评估 |
|------|--------------|-----------|---------------|--------------|----------|------------|
| **OpenClaw** | 460 新开/活跃 | 401 待合并 | **v2026.7.2-beta.6** | 99 | 状态安全重构期，P0/P1 Bug 密集爆发 | 🟡 **高活跃·高风险** 需集中修复交付 |
| **NanoBot** | ~10 活跃 | 12 更新/新开 | 无 | **13** | 核心稳定性加固，架构现代化（Responses API） | 🟢 **高活跃·高质量** 技术债偿还显著 |
| **Hermes Agent** | 35 新开/活跃 | 35 待合并 | 无 | **15** | Windows/桌面端安装链路修复，多 Profile 安全收敛 | 🟢 **高活跃·重体验** 桌面端痛点集中 |
| **IronClaw** | 9 新开/活跃 | 16 待合并 | 无 | **8** | Wave 2 架构重构并行（契约层解耦、CI 门禁补齐） | 🟢 **高活跃·重治理** 架构演进有序 |
| **ZeroClaw** | 47 新开/活跃 | **50 待合并** | 无 (v0.8.4 准备中) | 0 | RFC 密集评审期（内存分离、KeySource、A2A、评测框架） | 🟡 **高设计·低合并** 评审瓶颈待破 |
| **NanoClaw** | 2 | 15 | **v2.1.54** | **6** | iMessage 统一频道破坏性变更落地，Setup/容器修复极快 | 🟢 **发版驱动·响应极快** 生产级交付节奏 |
| **Moltis** | 0 | 3 | 无 | **2** | 遥测基建/权限模型重构合并，主会话限制解除待审 | 🟢 **低频·高含金量** 核心基建里程碑 |
| **CoPaw (QwenPaw)** | 9 新开 | 12 待合并 | 无 | 1 | 内存/压缩/ACP 竞态修复 PR 就绪，桌面 UX 需求强烈 | 🟡 **高活跃·合并滞后** 关键 Fix PR 待审 |
| **PicoClaw** | 1 旧 Issue 活跃 | 3 | 无 | 1 | Matrix 重连 P0 Bug 久拖不决，Provider 生态扩展中 | 🔴 **低活跃·高风险** 维护带宽不足 |
| **LobsterAI** | 6 被 Stale 关闭 | 2 停滞 | 无 | 0 | P0 Bug (MCP/大文件) 被误关，PR 积压 100+ 天 | 🔴 **维护近乎停摆** 需紧急干预 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 0 | 0 | 无活动 | ⚪ **休眠/归档态** |

> **指标说明**：Issues/PRs 以“新开/活跃/待合并”为主，排除单纯的机器人更新；健康度综合考量合并率、P0 响应、发版节奏、架构治理度。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类头部对比 (NanoBot / Hermes / IronClaw) |
|------|----------|---------------------------------------------|
| **核心优势** | **最完整的多通道网关**（Telegram/Slack/WhatsApp/Discord/Teams/Matrix/iMessage）、**最成熟的状态持久化方案**（SQLite 快照、隔离存储、Schema 保护）、**最大规模社区协作**（日均 500+ 更新） | NanoBot 单用户体验更强，Hermes 桌面端原生更好，IronClaw 架构治理更激进 |
| **技术路线差异** | **Go 单体 + SQLite 嵌入式**，强调零依赖部署、二进制分发、状态自包含 | NanoBot (Python + uv)、Hermes (TypeScript + Tauri)、IronClaw (Rust Workspace + libSQL/Postgres) |
| **社区规模** | **Issues/PRs 量级领先 10-50 倍**，贡献者基数大，但信噪比挑战显著 | 核心团队驱动为主，外部贡献集中在 Provider/技能扩展 |
| **发展阶段** | **Beta 向 RC 冲刺**，核心任务是“把重构引入的回归修干净” | NanoBot/Hermes 已进入 v1.0 预备期，IronClaw/ZeroClaw 在 v0.x 架构重塑期 |

**定位结论**：OpenClaw 是**生态中的“Linux 内核”级基础设施**——通道最全、状态最重、部署最易、社区最吵。其成败直接决定开源个人 AI 助手能否摆脱“玩具”标签进入生产环境。

---

## 4. 共同关注的技术方向（跨项目涌现需求）

| 技术方向 | 涉及项目 | 具体诉求/动作 |
|----------|----------|---------------|
| **状态安全与崩溃恢复** | **OpenClaw** (快照/隔离/回滚写入器)、**NanoBot** (MemoryStore 容错、Cron 状态锁)、**NanoClaw** (outbound.db journal 恢复)、**ZeroClaw** (内存分离 RFC) | 统一诉求：**掉电不丢、升级不坏、降级可控、多进程不冲突** |
| **多通道网关统一与消息投递可靠性** | **OpenClaw** (Telegram/Slack/WhatsApp 修复)、**Hermes** (Discord/WhatsApp 恢复、Telegram 媒体提取)、**NanoClaw** (iMessage 双后端统一)、**ZeroClaw** (WhatsApp 业务模式安全漏洞) | 核心痛点：**重连自愈、媒体透传、幂等投递、业务/个人模式隔离** |
| **Provider 抽象与模型路由标准化** | **NanoBot** (本地/云端匹配修复、OrcaRouter 接入)、**CoPaw** (OrcaRouter/Aliyun 模型对齐)、**PicoClaw** (Exa/OrcaRouter Provider)、**ZeroClaw** (OpenAI 兼容适配器 RFC) | 趋势：**OpenAI Responses API 成事实标准、Vendor/Model 路由协议化、流式/推理内容统一渲染** |
| **插件/技能沙箱与权限模型** | **Hermes** (Plugin 生命周期、Slot 渲染)、**IronClaw** (Extension Manager 拆分、WASM 沙箱)、**Moltis** (Channel 权限重构、Operator 显式名单)、**ZeroClaw** (技能注册表封装) | 方向：**最小权限、显式授权、热加载/卸载无残留、供应链安全** |
| **可观测性与评测体系** | **Moltis** (遥测基建、Langfuse/OTLP)、**IronClaw** (性能基线守护、变更覆盖率门禁)、**ZeroClaw** (评测框架 7 连 PR、OTel 会话关联 ID) | 目标：**从“有日志”到“有指标/追踪/评测/成本核算”全链路可视** |
| **桌面端原生体验与轻量交互** | **Hermes** (字体选择器、会话路由、PrettyLink)、**CoPaw** (全局浮窗、工作区快捷方式)、**NanoBot** (Quick Chat/Temporary Chat) | 共识：**降低调用摩擦（Raycast/豆包模式）、会话隔离（临时/快速）、原生渲染性能** |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键词 | 典型部署形态 |
|------|----------|----------|----------------|--------------|
| **OpenClaw** | **全通道网关、多用户协作、企业级部署** | 运维团队、高级开发者、社区自建服务商 | Go 单体、SQLite 嵌入、单二进制、状态自包含 | 单机/容器/K8s，零外部依赖 |
| **NanoBot** | **单用户极致体验、知识管理、WebUI 优先** | 个人知识工作者、研究员、本地优先派 | Python、uv 管理、MemoryStore、OpenAI Responses API 原生 | 本机/容器，WebUI 为主入口 |
| **Hermes Agent** | **桌面原生、多 Profile 隔离、语音/多模态** | 桌面重度用户、隐私敏感型、跨平台一致性追求者 | TypeScript、Tauri、Rust 侧车、WebView 渲染 | 原生安装包，系统托盘常驻 |
| **IronClaw** | **架构治理、契约层解耦、多租户 SaaS 化** | 平台构建者、插件生态建设者、强治理团队 | Rust Workspace、Trait 契约、libSQL/Postgres、CI 门禁治理 | 微服务化倾向，可独立扩展组件 |
| **ZeroClaw** | **协议标准化、A2A 互操作、安全密钥管理** | 协议制定者、多 Agent 编排研究者、安全合规场景 | Rust、A2A 双向、KeySource 抽象、mTLS 中继 | 守护进程+CLI+Web，强调协议合规 |
| **NanoClaw** | **技能驱动、快速迭代、生产级可观测** | 想要“开箱即用技能市场”的团队、自动化工程师 | Go、技能为一等公民、OneCLI 凭证、滚动发布 | 单二进制，技能热装载 |
| **Moltis** | **遥测驱动开发、最小权限、单用户极简** | 关注成本/质量可视化的个人开发者、极简主义者 | Go、OTLP 原生、Operator 权限模型、无桌面端 | 单机/容器，CLI/TUI 为主 |
| **CoPaw (QwenPaw)** | **阿里系模型深度集成、桌面端、多 Agent 协作** | 通义/阿里云生态用户、中文场景重度用户 | TypeScript、Tauri、AgentScope 集成、ACP 协议 | 桌面原生，云模型零配置 |
| **PicoClaw** | **轻量网关、Matrix 原生、嵌入式设备** | IoT/边缘设备、Matrix 社区用户、资源受限环境 | Go、极简依赖、Matrix 优先、ARM 友好 | 单二进制，适配树莓派等 |
| **LobsterAI** | **Web 端聚合、多模型对比、企业定制** | 需要统一 Web 入口的企业、非技术决策者 | Vue/Go、OpenClaw 引擎封装、硬编码 i18n 遗留 | Docker Compose，Web 为主 |

---

## 6. 社区热度与成熟度分层

| 阶段 | 项目 | 特征标识 | 关键信号 |
|------|------|----------|----------|
| **快速迭代·高风险期** | **OpenClaw**、**ZeroClaw**、**CoPaw** | 日均 PR>10、P0 Bug 密集、重构回归多、合并率波动 | OpenClaw 500+ 更新/天、ZeroClaw 50 PR 全挂起评审、CoPaw 关键 Fix PR 待审 3 天+ |
| **质量巩固·发版就绪期** | **NanoBot**、**Hermes Agent**、**NanoClaw**、**Moltis** | 合并率高(>50%)、修复聚焦核心链路、架构变更有序、有明确版本规划 | NanoBot 13 合并/天、NanoClaw 发版即含破坏性迁移指引、Moltis 里程碑式合并 |
| **架构重塑·治理先行期** | **IronClaw** | RFC 驱动、CI 门禁完善、破坏性变更可控、文档同步代码 | Wave 1/2 并行、路径键控门禁清零、Target Architecture 审计 |
| **维护不足·风险累积期** | **PicoClaw**、**LobsterAI** | P0 Bug 久拖、PR 积压月级、Stale 机制误伤、核心维护者带宽不足 | PicoClaw Matrix 重连 31 天

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-02

> 数据来源：GitHub HKUDS/nanobot | 统计周期：2026-08-01 至 2026-08-02 (UTC)

---

## 1. 今日速览

*   **整体状态**：项目处于**高强度迭代期**，过去 24 小时合并/关闭 PR 13 个，新开/更新 PR 12 个，代码变更涵盖 WebUI 体验优化、核心 Agent 稳定性修复、Provider 兼容性增强及 Cron 任务状态一致性保障等核心模块。
*   **活跃度评估**：⭐⭐⭐⭐⭐ **极高**。日均合并 PR >10，且多为 P1/P2 优先级修复与重构，显示维护团队正集中攻坚技术债与稳定性问题，而非单纯追赶新功能。
*   **核心动向**：
    1.  **WebUI 交互重构**：引入 Quick Chat/临时会话、跨会话搜索引用、受信代理认证、模型预设切换可发现性优化等体验级改进。
    2.  **核心稳定性加固**：修复会话归档丢失媒体路径、Cron 手动触发状态丢失、流式响应重复日志、DeepSeek/本地 Provider 消息结构兼容性等高危 Bug。
    3.  **架构演进**：MemoryStore 容错性增强、Spawn 子任务支持独立 Model Preset、Execution 截断保留等待目标。

---

## 2. 版本发布

> **无新版本发布**。当前主分支积累大量修复与功能，预计近期将切出 v0.9.x 或 v1.0.0-rc 版本。

---

## 3. 项目进展：今日合并/关闭的关键 PR（13 个）

| PR | 类型 | 核心变更 | 影响模块 | 优先级 |
| :--- | :--- | :--- | :--- | :--- |
| **[#5183](https://github.com/HKUDS/nanobot/pull/5183)** | **Bug Fix (Regression)** | 修复手动触发 Cron 任务时，完成状态被 WebUI 轮询重载覆盖导致状态回滚为 Failed 的竞态条件。引入存储层级锁保护。 | `CronService`, `WebUI`, `Store` | **P1** 🔥 |
| **[#5153](https://github.com/HKUDS/nanobot/pull/5153)** | **Bug Fix (Regression)** | 修复 `MemoryStore._format_messages` 在处理原始归档数据时，对非字符串/缺失 `timestamp` 及缺失 `role` 字段的容错处理，防止 KeyError/TypeError 导致历史加载失败。 | `MemoryStore`, `Session` | **P1** 🔥 |
| **[#5200](https://github.com/HKUDS/nanobot/pull/5200)** | **Bug Fix** | 修复 `exec` 工具 `write_stdin(wait_for=...)` 在响应被截断（head/tail）时丢失等待目标的问题，改为在内部缓冲区搜索而非截断后输出。 | `Execution`, `Tool` | **P1** |
| **[#5201](https://github.com/HKUDS/nanobot/pull/5201)** | **Bug Fix** | 容错会话持久化摘要元数据 (`_last_summary`) 字段缺失或格式错误，回退至 `updated_at` 避免启动崩溃。 | `Session`, `AutoCompact` | **P1** |
| **[#5208](https://github.com/HKUDS/nanobot/pull/5208)** | **Bug Fix** | 修复 Dream Cron Job 仅在 Agent 完全干净退出时才推进游标的问题，现兼容 ephemeral runs 产出编辑但非标准停止原因的场景，防止历史批次重复处理。 | `Cron`, `Dream` | **P1** |
| **[#5172](https://github.com/HKUDS/nanobot/pull/5172)** | **Feature / Arch** | **重大架构升级**：采用 OpenAI Responses API 完整不透明输出项链（含加密推理），跨工具调用/用户轮次保持推理上下文，实现上下文压缩。 | `Agent`, `Provider (OpenAI)`, `Memory` | **P1** |
| **[#5108](https://github.com/HKUDS/nanobot/pull/5108)** | **Feature / Security** | 为所有 Channel Adapter 引入基于发送者的消息速率限制（令牌桶），防止单用户高频请求耗尽配额/Token。 | `Channels`, `Security` | **P1** |
| **[#5209](https://github.com/HKUDS/nanobot/pull/5209)** | **Refactor / UI** | 统一 Sidebar 选中高亮组件，消除嵌套层级导致的遮罩闪烁，优化新建话题路由即时高亮。 | `WebUI` | P2 |
| **[#5199](https://github.com/HKUDS/nanobot/pull/5199)** | **Refactor / Code Quality** | 收窄 CLI 模块 Pyright 抑制范围：从文件级降级为行级，仅针对 Typer 回调与 KeyBindings 处理，提升类型安全基线。 | `CLI`, `Type Safety` | P2 |
| **[#3732](https://github.com/HKUDS/nanobot/pull/3732)** | **Bug Fix (Long-standing)** | 修复 Provider 匹配逻辑：本地 Provider 需同时满足 `is_local` 与 `api_base` 才能通过关键字匹配，防止劫持云端同名模型。 | `Providers`, `Model Routing` | P2 |
| **[#5186](https://github.com/HKUDS/nanobot/pull/5186)** | **Bug Fix** | WebUI Skills 搜索支持 `skills.sh` 返回的 well-known 发现源（如 `uizze.com`），修复趋势榜单缺失与直接安装失败。 | `WebUI`, `Skills` | P2 |
| **[#5139](https://github.com/HKUDS/nanobot/pull/5139)** | **Bug Fix (Regression)** | 修复会话合并归档时丢失仅存储于 `media[]` 字段的上传媒体路径，保证归档后文件可恢复。 | `Memory`, `Session Consolidation` | **P1** |
| **[#5206](https://github.com/HKUDS/nanobot/pull/5206)** | **Bug Fix / Observability** | 修复流式响应在 `TurnDelivery` 与 `AgentLoop` 双重记录日志问题，改为在 Delivery 层聚合内容一次性记录。 | `Logging`, `Delivery` | P2 |

**进展总结**：今日合并 PR **质量极高**，集中解决了 **数据一致性（Cron/Session/Media）**、**核心稳定性（Memory/Provider/Exec）**、**安全基线** 与 **架构现代化** 四大痛点。项目技术债偿还进度显著推进。

---

## 4. 社区热点：高互动/高关注 Items

| Item | 类型 | 互动/状态 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **[#5185](https://github.com/HKUDS/nanobot/issues/5185)** | **Issue (Closed/Invalid)** | 4 条评论, 0 👍 | 用户反馈模型突然在回复中输出原始 Tool Call 代码块。经排查为 **Provider 返回格式异常或解析失败**，非 Nanobot 核心 Bug。反映用户对**模型输出异常时的可观测性/降级提示**有需求。 |
| **[#5205](https://github.com/HKUDS/nanobot/issues/5205)** | **Issue (Closed)** | 2 条评论 | Debian 环境下 `uv` 安装的 Python 缺少 `ensurepip` 导致插件安装失败。暴露**打包分发对系统 Python 依赖的假设过强**，需在文档或安装脚本中增加 `python3-venv`/`ensurepip` 依赖提示。 |
| **[#5198](https://github.com/HKUDS/nanobot/issues/5198)** | **Issue (Open)** | 1 条评论 | **高频功能诉求**：WebUI 会话级模型切换无效，`/model` 命令仅作 Fallback。用户期望 **Session-scoped Model Selection** 与 SaaS 产品一致的交互体验。关联 PR [#5202](https://github.com/HKUDS/nanobot/pull/5202) 正优化预设切换入口，但底层 Session Model 绑定逻辑仍待重构。 |
| **[#5211](https://github.com/HKUDS/nanobot/pull/5211)** | **PR (Open)** | 新开, 0 评论 | **跨会话搜索与 @引用**：引入 `search_sessions`/`read_session` 只读工具，WebUI `@` 菜单支持引用历史会话。这是 **Knowledge Management** 方向的关键一步，社区期待度极高。 |
| **[#5184](https://github.com/HKUDS/nanobot/pull/5184)** | **PR (Open)** | 更新频繁, 0 评论 | **Quick Chat / Temporary Chat**：一级入口持久化 Quick Chat + 连接级内存临时会话。解决“临时提问污染主历史”痛点，符合 AI Native 交互范式。 |

---

## 5. Bug 与稳定性：今日报告/修复汇总（按严重度）

| 严重度 | Issue / PR | 标题 | 状态 | 修复 PR | 根因/影响 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Critical (数据丢失/状态不一致)** | [#5163](https://github.com/HKUDS/nanobot/issues/5163) / [#5183](https://github.com/HKUDS/nanobot/pull/5183) | 手动 Cron 运行完成状态被 WebUI 轮询覆盖回 Failed | **Fixed** ✅ | #5183 | 存储重载竞态，缺乏运行时锁保护。 |
| **Critical (启动崩溃/数据损坏)** | [#4801](https://github.com/HKUDS/nanobot/issues/4801) / [#5153](https://github.com/HKUDS/nanobot/pull/5153) | `MemoryStore._format_messages` 直接访问 `message['role']` 导致 KeyError | **Fixed** ✅ | #5153 | 原始归档数据脏字段（缺 role、timestamp 类型错误）无容错。 |
| **Critical (功能失效)** | [#5205](https://github.com/HKUDS/nanobot/issues/5205) | 插件启用失败：`No module named ensurepip` | **Closed** (Env Issue) | - | `uv` tool 环境 Python 裁剪导致标准库缺失，非代码 Bug，但需文档/脚本规避。 |
| **High (上下文/媒体丢失)** | [#5139](https://github.com/HKUDS/nanobot/pull/5139) | 会话合并归档丢失 `media[]` 路径 | **Merged** ✅ | #5139 | `Session.get_history` 合成面包屑但 `MemoryStore` 归档未持久化 media 字段。 |
| **High (逻辑错误)** | [#5208](https://github.com/HKUDS/nanobot/pull/5208) | Dream Cron 游标不推进导致重复处理 | **Merged** ✅ | #5208 | 仅检查 `stop_reason == complete`，忽略成功产出编辑的非标准停止原因。 |
| **Medium (可观测性污染)** | [#5206](https://github.com/HKUDS/nanobot/pull/5206) | 流式响应重复记录日志 | **Merged** ✅ | #5206 | `TurnDelivery` 与 `AgentLoop` 双重发布。 |
| **Medium (兼容性)** | [#3869](https://github.com/HKUDS/nanobot/pull/3869) | DeepSeek API 拒绝 null content / "(empty)" 占位符泄漏 | **Open** (Conflict) | #3869 (WIP) | `_coerce_content_to_string` 兜底策略与 `_sanitize_messages` 丢弃逻辑与 DeepSeek 严格校验冲突。需硬化消息清洗管线。 |
| **Low (UX/交互)** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 会话级模型切换无效 | **Open** | - | 架构限制：模型绑定在 Instance/Global 级，Session 级仅 Fallback。 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR / 进展 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue [#5198](https://github.com/HKUDS/nanobot/issues/5198)** | **Session-scoped Model Selection** (会话级独立模型绑定) | [#5202](https://github.com/HKUDS/nanobot/pull/5202) 优化预设菜单入口 | **中** | 入口优化已合并，但底层 `Session.config.model` 字段与 Resolver 逻辑重构未见 PR，可能需下个里程碑。 |
| **PR [#5211](https://github.com/HKUDS/nanobot/pull/5211)** | **Cross-Session Search & Mentions** (跨会话搜索/引用) | 新开 PR，含 Tool + WebUI `@` 集成 | **极高** | 核心知识管理功能，实现完整，符合 v1.0 里程碑 "Context Engineering" 方向。 |
| **PR [#5184](https://github.com/HKUDS/nanobot/pull/5184)** | **Quick Chat / Temporary Chat** (快速/临时会话) | 新开 PR，WebUI 一级入口 + 内存历史 | **极高** | 标准化 AI 交互范式，代码复用度高（复用 Thread/Stream/Renderer），风险低。 |
| **PR [#5210

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-02

---

## 1. 今日速览

- **活跃度评估：高** — 过去 24 小时共 50 条 Issue 更新（35 新开/活跃，15 关闭）与 50 条 PR 更新（35 待合并，15 已合并/关闭），无新版本发布。  
- **核心主题**：Windows 桌面端安装/更新链路修复、多 Profile 凭据隔离加固、插件生命周期与 Dashboard 扩展性、会话状态持久化一致性、流式/媒体传输安全清洗。  
- **风险信号**：Windows 上 `npm` 引擎约束 (`>=12.0.0`) 导致 Node 22 / npm 11 安装失败（#76486）、Desktop 启动器自愈缺失（#76421）、Telegram 排队消息媒体提取缺失（#60845）均为 P2 且暂无合并 PR。  
- **社区情绪**：用户对更新不稳定（#75598）、桌面端默认启用演示插件（#76064）、IME 预编辑位置偏移（#75960）反馈强烈；字体选择器（#37566，5 👍）等定制化需求持续高呼。  
- **整体判断**：项目处于“密集修复期向功能完善期过渡”，核心基础设施（Gateway、SessionDB、Credential Pool、Plugin System）均有 PR 推进，但 Windows/桌面端安装链路仍是短期最大痛点。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|---|---|---|---|---|
| [#66698](https://github.com/NousResearch/hermes-agent/pull/66698) | Bug Fix | `write_approval` 去重：按 payload 指纹合并重复挂起写入，避免技能/记忆重复审批卡片 | Agent Core, Skills, Memory | ✅ **Closed (Merged)** |
| [#67969](https://github.com/NousResearch/hermes-agent/pull/67969) | Security | `hermes dump` / `hermes debug share` 脱敏 `fallback_providers` 内联 `api_key`，防止凭据误泄露 | CLI, Config, Security | ✅ **Closed (Merged)** |
| [#70144](https://github.com/NousResearch/hermes-agent/pull/70144) | Security | Gateway 媒体投递拒绝同级 Profile 凭据路径，修复 Prompt Injection 窃取兄弟 Profile 密钥 | Gateway, Profiles, Media | ✅ **Closed (Merged)** |
| [#56040](https://github.com/NousResearch/hermes-agent/pull/56040) | Security | 流式路径 `_clean_for_display` 补充 Secret 红actor 与 Tool-trace 移除，分片消息不再泄露 | Gateway, Streaming | ✅ **Closed (Merged)** |
| [#67836](https://github.com/NousResearch/hermes-agent/pull/67836) | Bug Fix | Desktop PrettyLink 不再抓取 GitHub HTML 标题，PR/issue 统一渲染 `owner/repo#n` | Desktop, UI | ✅ **Closed (Merged)** |
| [#67822](https://github.com/NousResearch/hermes-agent/pull/67822) | Bug Fix | 围栏文件列表按代码块渲染，保留普通文本为散文 | Desktop, Markdown | ✅ **Closed (Merged)** |
| [#67091](https://github.com/NousResearch/hermes-agent/pull/67091) | Bug Fix | 修复 Desktop 新建会话标题路由回退，清理陈旧 session identity | Desktop, Sessions | ✅ **Closed (Merged)** |
| [#64094](https://github.com/NousResearch/hermes-agent/pull/64094) | Feature | Desktop 聊天流展示异步进程/委托结果（`status.update(kind=process)`） | Desktop, Delegation | ✅ **Closed (Merged)** |
| [#35040](https://github.com/NousResearch/hermes-agent/pull/35040) | Feature | 新增 `POST /api/voice/turns/stream` 原生语音轮次 SSE 流端点 | Gateway, Voice API | ✅ **Closed (Merged)** |
| [#67809](https://github.com/NousResearch/hermes-agent/pull/67809) | Infra | 新增经验证的 Desktop 发布流水线（私有镜像、只读配置、HE 自签） | Desktop, Release | ✅ **Closed (Merged)** |
| [#76511](https://github.com/NousResearch/hermes-agent/pull/76511) | Perf | Copilot token exchange 前置 `_is_suppressed()` 检查，启动避免 ~4.5s 空等 | Agent, Auth, Copilot | ✅ **Closed (Merged)** |
| [#76482](https://github.com/NousResearch/hermes-agent/pull/76482) | Bug Fix | Kanban notifier 修复 adapter-less gateway 导致订阅静默跳过 | Gateway, Kanban, Profiles | ✅ **Closed (Merged)** |
| [#76484](https://github.com/NousResearch/hermes-agent/pull/76484) | Bug Fix | Bootstrap 安装器修复 Windows `npm` 版本约束 `EBADENGINE` 失败 | CLI, Install, Windows | ✅ **Closed (Merged)** |
| [#76513](https://github.com/NousResearch/hermes-agent/pull/76513) | Feature | Discord 自动线程会话键改用 `prospective_thread_id`，修复首线程后标题丢失 | Gateway, Discord | ✅ **Closed (Merged)** |
| [#76515](https://github.com/NousResearch/hermes-agent/pull/76515) | Test | Gateway conftest 优先使用真实 PTB，Mock 仅作兜底 | Gateway, Tests, Telegram | ✅ **Closed (Merged)** |

**进展小结**：安全加固（凭据隔离、流式脱敏、dump 脱敏）与桌面端体验（会话路由、链接渲染、异步结果展示）同步推进；Desktop 发布流水线落地为后续稳定分发铺路。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）

| Issue/PR | 标题 | 评论 | 👍 | 核心诉求 |
|---|---|---|---|---|
| [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) | **更新导致多网关冲突、Profile 切换不生效、程序不稳定** | 7 | 0 | 用户近一周更新后出现多实例残留、Profile 隔离失效，要求自愈/清理机制 |
| [#65274](https://github.com/NousResearch/hermes-agent/issues/65274) | **Windows 上项目作用域新会话回退到 Home 目录** | 6 | 1 | Desktop 新建会话未继承 Project cwd，破坏项目级上下文 |
| [#51603](https://github.com/NousResearch/hermes-agent/issues/51603) | **Security: `resolve_anthropic_token()` 跨 Profile 凭据泄露** | 5 | 0 | Multiplex 模式下 Anthropic token 解析越过 Profile 作用域，已修复并关闭 |
| [#60845](https://github.com/NousResearch/hermes-agent/issues/60845) | **Telegram 排队消息媒体提取缺失，附件以纯文本路径投递** | 4 | 0 | `busy_input_mode: queue` 下媒体标签未提取，阻塞多模态交付 |
| [#76352](https://github.com/NousResearch/hermes-agent/issues/76352) | **MCP 工具结果超上下文，压缩 3 次耗尽后 `agent_close` 与显式报错不一致** | 4 | 0 | 大结果压缩失败路径不一致，需统一错误契约 |
| [#37566](https://github.com/NousResearch/hermes-agent/issues/37566) | **Feature: 桌面端字体选择器** | 4 | 5 | 用户强烈期望原生字体定制，WebUI 可通过 CSS 规避但桌面端无变通 |
| [#64229](https://github.com/NousResearch/hermes-agent/issues/64229) | **Plugin 生命周期：注册句柄、所有权账本、on_unload、受监管任务** | 3 | 0 | 核心维护者推动插件体系成熟化，解决卸载残留与任务泄漏 |
| [#43757](https://github.com/NousResearch/hermes-agent/issues/43757) | **Responses API `function_call_output` 被剥离，跨轮工具结果丢失** | 3 | 0 | 兼容 OpenAI Responses API 歷史格式，影响多轮工具调用 |
| [#32887](https://github.com/NousResearch/hermes-agent/issues/32887) | **Gateway 心跳缺失导致跨容器 WebUI 误判存活** | 3 | 0 | `gateway_state.json` 仅状态变更写入，空闲 >2min 被标记 down |
| [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) | **`microsoft-teams-apps` 导入副作用污染全局 `.env`，破坏 Profile 密钥隔离** | 3 | 0 | 插件发现阶段加载第三方依赖触发 dotenv，已修复并关闭 |

**热点洞察**：  
1. **Windows/桌面端安装与会话体验** 是用户感知最强的痛点（更新失败、cwd 回退、启动器自愈、npm 约束）。  
2. **多 Profile 安全边界** 持续受关注（Anthropic token、Teams 插件副作用、媒体投递越权），已有多个 PR 合并收敛。  
3. **插件系统成熟度**（生命周期、Slot 渲染缺失 #76381、默认演示插件 #76064）成为扩展性瓶颈。  
4. **流式/媒体管线** 在分片、排队、压缩等边界条件下仍有不一致行为。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|---|---|---|---|---|
| **P2 (High)** | [#76486](https://github.com/NousResearch/hermes-agent/issues/76486) | `package.json` `"npm": ">=12.0.0"` 导致 Node 22 / npm 11 `EBADENGINE` 安装失败 | 所有源码安装、CI、Bootstrap | ❌ 无 |
| **P2** | [#76421](https://github.com/NousResearch/hermes-agent/issues/76421) | `hermes update` 不自愈陈旧/缺失 `~/.local/bin/hermes` 启动器 | Git/源码安装、CLI 入口 | ❌ 无 |
| **P2** | [#60845](https://github.com/NousResearch/hermes-agent/issues/60845) | Telegram 排队消息媒体提取缺失，附件以纯文本路径投递 | Telegram 平台、多模态 | ❌ 无 |
| **P2** | [#65274](https://github.com/NousResearch/hermes-agent/issues/65274) | Windows Desktop 项目作用域新会话 cwd 回退 Home | Desktop、Windows、Sessions | ❌ 无 |
| **P2** | [#76505](https://github.com/NousResearch/hermes-agent/issues/76505) | Qwen3VL 原生 `image_input_mode` 全分辨率发送被拒，文本模式回退却成功 | Agent、Provider/Qwen、图像路

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-08-02

---

## 1. 今日速览
- **整体活跃度：低-中等**。过去 24 小时无新版本发布，仅有 1 条 Issue 更新（实为旧 Issue 重新活跃）与 3 条 PR 更新，代码合并量极少（仅 1 个 PR 关闭/合并）。
- **核心关注点聚焦于“基础设施稳健性”与“生态扩展”**：社区正推动 Matrix 同步循环的重连机制修复（严重稳定性隐患），同时有贡献者主动扩展 Web 搜索提供商与 LLM 提供商支持。
- **技术债风险显性**：Issue #3203 被标记 `stale` 却长期未解决，且导致进程“静默死亡”绕过 systemd 守护，属典型的高优先级生产环境阻断型 Bug。
- **国际化与多模态能力持续补齐**：繁体中文本地化 PR 已关闭（可能由维护者直接合并或拒绝），新增 Exa 搜索与 OrcaRouter 提供商 PR 处于早期审查阶段。
- **维护者响应带宽有限**：3 个开放 PR 均无审查评论，Issue #3203 仅有 7 条评论且多为社区自发讨论，缺乏核心成员介入定夺。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 对项目推进度评估 |
|----|------|----------|------------------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | **CLOSED** | 新增繁体中文语言包，统一 WebUI 与文档术语 | **已完成/归档**。本地化覆盖度提升，但关闭原因不明（合并或拒绝），需检查提交记录确认是否已入主分支。 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **OPEN** | 新增原生 Exa Web 搜索提供商（支持高亮、日期范围、API Key 认证） | **功能扩展进行中**。填补 `tools.web` 生态空白，代码结构符合现有 Provider 抽象，待 CI 通过与审查。 |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | **OPEN** | 新增 OrcaRouter 作为 OpenAI 兼容提供商（支持 `vendor/model` 路由） | **生态兼容性增强**。零侵入式接入多模型网关，降低用户切换成本，同样处于初审阶段。 |

**整体进度判断**：今日无核心架构级合并，进展主要体现在“外围能力补齐”上；关键稳定性修复（重连逻辑）仍停留在 Issue 讨论层面，未转化为 PR。

---

## 4. 社区热点

| 排名 | 对象 | 交互数据 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | 👍 2 | 评论 7 | **生产可用性痛点**：Matrix `/sync` 长轮询在网络抖动或 Homeserver 重启后永久挂死，且进程存活导致 systemd 不重启。用户需**自动重连 + 指数退避 + 健康检查**的完整方案，而非单一补丁。 |
| 2 | [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | 👍 0 | 评论 0 | **搜索提供商多元化**：贡献者主动适配 Exa（强调语义高亮与实时性），暗示现有搜索源（如 DuckDuckGo/Google）在特定场景下效果不足。 |
| 3 | [PR #3309](https://github.com/sipeed/picoclaw/pull/3309) | 👍 0 | 评论 0 | **模型路由层标准化**：OrcaRouter 采用 `vendor/model` 约定，呼应社区对“统一多厂商网关接口”的隐性需求。 |

> **信号提示**：Issue #3203 的 `stale` 标签与持续评论形成矛盾，说明自动清理策略误判了严重 Bug 的优先级，建议人工移除 `stale` 并打上 `blocker`/`high-priority`。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现状 | 是否有 Fix PR | 影响面 |
|--------|-------|------|---------------|--------|
| **Critical (P0)** | [#3203 Matrix sync loop 无重连逻辑](https://github.com/sipeed/picoclaw/issues/3203) | **OPEN / stale** | ❌ 无 | 所有使用 Matrix 网关的生产部署。网络抖动/服务端重启 → 通道永久失联，需人工重启进程。绕过 systemd `Restart=on-failure`，运维无感知。 |
| — | 其余 | 过去 24h 无新增 Bug 报告 | — | — |

**建议**：将 #3203 纳入下一个热修复版本（v0.2.10-hotfix），实现最小可行重连逻辑：`while true { sync(); on_error { backoff(); continue } }`，并暴露健康检查端点供 systemd `WatchdogSec` 使用。

---

## 6. 功能请求与路线图信号

| 需求来源 | 具体需求 | 关联 PR | 入版概率 (主观) | 备注 |
|----------|----------|---------|-----------------|------|
| PR #3299 | 原生 Exa 搜索支持 | #3299 | **高 (80%)** | 代码完整、符合 Provider 接口、无破坏性变更，仅需 CI 绿灯与维护者 Merge。 |
| PR #3309 | OrcaRouter (OpenAI 兼容) 接入 | #3309 | **高 (75%)** | 同属 Provider 扩展，复用现有 OpenAI 适配层，风险极低。 |
| Issue #3203 评论区 | Matrix 重连/健康检查 | 无 | **中 (50%)** | 虽为 P0 Bug，但涉及核心网络层重构，需核心维护者设计方案；社区尚无人提交 PR。 |
| PR #3261 (已关闭) | 繁体中文本地化 | #3261 | **已决** | 若关闭因“另行合并”，则 v0.3.0 将包含；若因“拒绝/过时”则需重提。 |

**路线图推测**：v0.3.0 将以 **Provider 生态扩充（搜索+模型）** 为主题，稳定性修复或以热补丁形式插入 v0.2.x 维护分支。

---

## 7. 用户反馈摘要（源自 Issue #3203 评论）

| 痛点/场景 | 代表性引述 (意译) | 情感倾向 |
|-----------|-------------------|----------|
| **静默失联** | “服务器重启后 PicoClaw 进程还在，但 Matrix 频道再也收不到消息，systemd 以为它正常。” | 😡 强烈不满 |
| **运维盲区** | “没有日志报错、没有指标暴露、没有健康检查端点，只能靠用户投诉才发现挂了。” | 😟 焦虑 |
| **变通方案成本高** | “不得不写外部 watchdog 脚本去 curl `/health` 并杀进程，这不该是用户的活。” | 😤 抱怨 |
| **对架构的期待** | “希望能像其他网关一样内置 `retry_policy` 和 `circuit_breaker` 配置项。” | 💡 建设性 |

> **核心洞察**：用户不再仅满足于“功能跑通”，而是要求**可观测性（Health/Metrics）与自愈能力**达到生产级标准。这应成为项目下一阶段技术债偿还的主攻方向。

---

## 8. 待处理积压提醒

| 对象 | 停滞时长 | 优先级 | 维护者行动建议 |
|------|----------|--------|----------------|
| [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | **创建 31 天 / 更新 1 天前** | **P0 (Critical)** | 1. 移除 `stale` 标签，打上 `blocker` `needs-triage`<br>2. 指派核心维护者输出设计文档（重连策略/退避/健康检查）<br>3. 若人力不足，发布 `help wanted` `good first issue` 招募社区贡献 PR |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | 创建 7 天 / 更新 1 天前 | P2 (Feature) | 请求 Code Review，重点检查：API Key 存储安全性、速率限制处理、单元测试覆盖。 |
| [PR #3309](https://github.com/sipeed/picoclaw/pull/3309) | 创建 1 天 / 更新 1 天前 | P2 (Feature) | 快速过 CI 后安排 Review，确认 `vendor/model` 解析逻辑与现有 `openai` provider 无冲突。 |
| [PR #3261](https://github.com/sipeed/picoclaw/pull/3261) | 已关闭 | — | **确认关闭原因**：若为维护者直接合并至主分支，请在 Changelog 标注；若为拒绝，需向贡献者说明（术语规范/翻译质量/分支策略）。 |

---

> **日报生成时间**：2026-08-02 06:00 UTC  
> **数据窗口**：2026-08-01 00:00 – 2026-08-02 00:00 UTC  
> **下一建议关注点**：Issue #3203 是否在 48 小时内转入修复流程；PR #3299/#3309 首轮 Review 时效。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-02

---

## 1. 今日速览
- **整体活跃度：高**。过去 24 小时内累计产生 **17 条 Issue/PR 更新**（2 Issues + 15 PRs），并发布 **1 个大版本（v2.1.54）**，呈现“版本落地 + 缺陷快速修复 + 架构清理”并行态势。
- **版本里程碑**：v2.1.54 为滚动发布，覆盖 v2.1.18–v2.1.54 所有合并内容，核心亮点是 **iMessage 统一为单一 `imessage` 频道（本地 + Hosted 双后端）**，属破坏性变更，需运维注意迁移。
- **缺陷响应极快**：Issue #3169（非 Claude 安装失败仍提示装 Claude CLI）于同日由 #3170 修复并合并，体现核心团队对 Setup 流程的高优先级把控。
- **技术债清理同步推进**：#3172 移除两个依赖外部未配置集成的 Qodo 技能；#3166 修复迁移脚本引用已重命名函数的编译期错误；#3174 解决 rootless Docker 场景下 Agent 容器不可用问题。
- **长期 PR 活跃度回升**：多个创建于 6–7 月的 PR（#2750、#2801、#2956、#3046）在今日均有更新，显示维护者正在系统性推进旧账清理。

---

## 2. 版本发布
### v2.1.54 (2026-08-01)
- **范围**：滚动发布，包含 v2.1.18 至 v2.1.54 所有合并提交（自 v2.1.17 标签以来）。
- **核心破坏性变更**：
  - **iMessage 统一**：原有多入口合并为单一 `imessage` 频道，通过 `/add-imessage` 技能安装，支持两种后端：
    - **Local**：本机 `chat.db` + Chat SDK
    - **Hosted**：Photon (photon.codes) 原生托管，通过 `spectrum` 协议
  - 迁移提示：旧配置需重新运行 `/add-imessage` 完成注册流程，Hosted 后端需完成 Photon 注册/认证。
- **其他聚合更新**：凭证过期告警（#3167）、发布流程安全兜底（#3168）、路由器输入硬化（#2801）、文档同步（#3046）等。
- **升级建议**：生产环境建议先在 Staging 验证 iMessage 迁移与凭证告警流程，再全量滚动。

> 🔗 [Release v2.1.54](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54)

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心推进 | 状态 |
|----|------|----------|------|
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | Feature/Skill | **iMessage 统一频道（Local + Hosted 双后端）落地**，随 v2.1.54 发布 | ✅ Merged |
| [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | Feature/Skill | Hosted iMessage (Photon) 可用的注册流程，替代 #2999 初版实现 | ✅ Merged |
| [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | Fix | Setup 失败时按**用户实际选择的 Provider** 分派诊断助手，修复 #3169 | ✅ Merged |
| [#3168](https://github.com/nanocoai/nanoclaw/pull/3168) | Fix | 发布后合并安全兜底，防止发布流程缺口导致不一致 | ✅ Merged |
| [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | Feat | **凭证过期主动告警**（OneCLI vault 凭证过期时在 WhatsApp 等渠道显式提示） | ✅ Merged |
| [#3166](https://github.com/nanocoai/nanoclaw/pull/3166) | Fix | 迁移脚本 `migrate-v2` 调用已重命名函数 `insertTaskRow`，修复静态导入报错 | ✅ Merged |

**整体推进评估**：核心架构（Channel 统一）、运维保障（凭证告警、发布兜底）、首次体验（Setup 修复）三条主线同步闭环，项目向“多后端统一管理、生产级可观测性”迈进一大步。

---

## 4. 社区热点
| 对象 | 互动指标 | 核心诉求/讨论焦点 |
|------|----------|-------------------|
| [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) (Issue) | 新开、0 评论、0 👍 | **内置 Qodo 技能依赖未配置的外部 SaaS**，拦截正常编码请求，用户感知为“莫名其妙的失败”。 |
| [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) (PR) | 新开、关联 #3171 | 直接**移除两个 Qodo 技能**（`get-qodo-rules`、`qodo-pr-resolver`），以“删除即修复”方式响应 #3171。 |
| [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) (PR) | 新开、0 评论 | **Rootless Docker 场景下 Agent 容器不可用**（两处独立故障），作者为非 docker 组用户，暴露权限假设缺陷。 |
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) (PR) | 评论数未披露、长周期 | iMessage 统一架构设计讨论，最终随 v2.1.54 落地，社区关注度高。 |

**分析**：当前热点集中在 **“开箱即用体验修复”**（Setup、内置技能可用性、容器权限兼容），而非新功能需求，符合 v2.1 稳定化阶段特征。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 来源 | 是否有 Fix PR | 状态 |
|--------|------|------|---------------|------|
| **P0 - 阻塞/崩溃** | `migrate-v2` 静态导入 `insertTask`（实为 `insertTaskRow`）导致启动即 `SyntaxError` | [#3166](https://github.com/nanocoai/nanoclaw/pull/3166) | ✅ #3166 | Merged |
| **P0 - 阻塞/崩溃** | Rootless Docker：Agent 容器双重失败（权限与路径假设），非 docker 组用户完全不可用 | [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) | ✅ #3174 | Open (待 Review) |
| **P1 - 体验回归** | Setup 选非 Claude Provider 失败时仍引导装 Claude CLI，且可能触发 Anthropic 登录 | [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) | ✅ #3170 | Closed (已合并) |
| **P1 - 功能失效** | 两个内置 Qodo 技能依赖 `~/.qodo/config.json` 但无任何设置入口，拦截正常请求 | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | ✅ #3172 (移除) | Open (PR 待合并) |
| **P2 - 静默失败** | 凭证过期仅在容器日志留痕，用户侧仅见 “Reconnecting... Read-only file system” 无语义报错 | [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | ✅ #3167 | Merged |
| **P2 - 潜在重复** | Agent 通过 `send_message` 发送后又在 final output 重复相同文本 → 双份投递 | [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | ✅ #2956 | Open (长期) |
| **P2 - 数据一致性** | 容器 SIGKILL 导致 `outbound.db` 遗留 hot-journal，只读句柄后续轮询竞态 | [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | ✅ #2750 | Open (长期) |

---

## 6. 功能请求与路线图信号
| 信号来源 | 需求描述 | 关联 PR/可能性 | 判断 |
|----------|----------|----------------|------|
| [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) / [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | **移除/替换依赖外部未托管凭证的内置技能** | #3172 已开 PR 移除 Qodo 两技能 | **极高**：已进入删除流程，下版本必出 |
| [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) | **原生支持 Rootless Docker / 非特权容器运行时** | #3174 提供修复 | **高**：涉及 CI/生产部署兼容性，核心团队可能快速合并 |
| [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | Agent 最终输出去重（避免工具调用+文本双投递） | #2956 长期开放 | **中**：体验优化，非阻塞，可能并入下一维护周期 |
| [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | Reaction 投递尽力而为（Best-effort），避免因表情回复失败阻塞主流程 | #3121 开放中 | **中**：健壮性改进，优先级次于 P0/P1 |
| [#3046](https://github.com/nanocoai/nanoclaw/pull/3046) | 文档同步：`init-first-agent` 解析当前 Telegram 状态块格式 | #3046 仅文档 | **高**：文档与实现一致性，易合并 |

**路线图推测**：v2.1.55 或 v2.1.60 将聚焦 **“清理有缺陷内置技能、容器运行时兼容性、投递去重、文档同步”** 四大项。

---

## 7. 用户反馈摘要
- **痛点 1：Setup 引导混淆**（#3169）  
  > “选了 Codex，失败后却问我要不要装 Claude CLI，Yes 还默认勾选；装了 Claude 又逼我登录 Anthropic。”  
  → 已由 #3170 修复，用户体验回正。

- **痛点 2：内置技能“隐形依赖”导致莫名拦截**（#3171）  
  > “`get-qodo-rules` 读 `~/.qodo/config.json`，但仓库没任何地方引导生成该文件，正常写代码请求被拦截报错。”  
  → 社区倾向直接移除（#3172），而非补全配置流程，因 Qodo 非核心厂商集成。

- **痛点 3：凭证过期无感知**（#3167）  
  > “WhatsApp 只显示 `Reconnecting... Read-only file system`，日志里才是真实的凭证过期。”  
  → #3167 已在渠道侧显式告警，填补可观测性空白。

- **痛点 4：Rootless Docker 环境被忽视**（#3174）  
  > “刻意不把用户加 docker 组，结果 Agent 容器双重失败，日志无明显报错。”  
  → 暴露“宿主在 docker 组”隐性假设，修复后将显著提升安全合规部署体验。

---

## 8. 待处理积压（长期未响应/高价值）

| 对象 | 创建时间 | 核心价值 | 当前状态 | 建议动作 |
|------|----------|----------|----------|----------|
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | 2026-06-12 | **容器杀掉后 `outbound.db` journal 恢复与竞态分类**，修复 #2516 #2640 | Open，今日有更新 | **高优先 Review**：关联数据一致性，已诊断完善，建议本周合并 |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | 2026-06-17 | **Router 输入硬化**：`safeParseContent` 原始 `JSON.parse` 导致非对象 payload 静默返回 undefined | Open，今日有更新 | **中优先**：安全/健壮性，建议与 #3121 同批 Review |
| [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | 2026-07-05 | **Agent 最终输出去重**（工具调用+文本双投递） | Open，今日有更新 | **中优先**：用户体验细节，建议纳入下一维护版本 |
| [#3046](https://github.com/nanocoai/nanoclaw/pull/3046) | 2026-07-14 | **文档同步**：`init-first-agent` 解析最新 Telegram 状态块 | Open，仅文档 | **低成本高收益**：建议立即合并，消除文档漂移 |
| [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | 2026-07-23 | **Reaction 投递 Best-effort** | Open | **中优先**：非阻塞，建议与 #2801 同批处理 |

> **维护者

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-02

> **数据窗口**：2026-07-31 至 2026-08-01（UTC）  
> **统计口径**：Issues 11 条（新开/活跃 9，关闭 2），PRs 24 条（待合并 16，已合并/关闭 8），Releases 0 个

---

## 1. 今日速览
- **核心主题**：架构重构“Wave 2”全面推进（WS2.1/WS2.4/WS5 并行）、CI 门禁补齐收官（#6963 关闭）、性能回归治理（Postgres 容量恢复 #6973、libSQL 尾延迟 #6974）、新提供商接入（OrcaRouter #7009）与 OOBE 原型落地（#6993/6994）。
- **活跃度评估**：**极高**。单日 24 个 PR 活跃，其中 8 个已合并/关闭，核心维护者（BenKurrek、serrrfirat、ilblackdragon）主导的大型重构 PR 成堆叠依赖链并行推进，代码库结构正在经历大规模契约层解耦与 crate 拆分。
- **健康度信号**：
  - ✅ 长期技术债（路径键控 CI 门禁）在 #6996 中一次性清零。
  - ⚠️ 性能基线未完全回归：Postgres 容量恢复 PR（#6973）虽已开启，但 libSQL 工具密集型场景 p95 仍超标 15 倍（#6974）。
  - ⚠️ 变更覆盖率门禁暴露集成层故障注入缺失（#7006），需补齐测试基建。

---

## 2. 版本发布
**无新版本发布**。  
最近一次自动发布 PR（#5598）仍处于开放状态，包含 `ironclaw_common` 0.5.0（破坏性）、`ironclaw_skills` 0.4.0（破坏性）等版本跃迁，建议关注其合并时机以规划下游迁移。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 标题/范围 | 影响判定 | 关联 Issue/里程碑 |
|----|-----------|----------|-------------------|
| [#6996](https://github.com/nearai/ironclaw/pull/6996) | **ci(gates): close #6963 — inventory-driven discovery + fail-closed across the remaining path-keyed gates** | 🟢 **里程碑级** 清理 8 个遗留路径键控 CI 门禁，实现“目录无关”的门禁发现机制，彻底修复 #6946 遗留的 8 个缺陷。 | 关闭 #6963 |
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | **refactor(contracts): invert extension_host's product-facing ports onto product_contracts (WS2.1)** | 🟢 **架构基石** `ironclaw_extension_host` 依赖 `ironclaw_product` → `ironclaw_product_contracts`，切断产品层实现耦合，波次 2 首个落地。 | Wave 2 Slot 1 |
| [#6995](https://github.com/nearai/ironclaw/pull/6995) | **docs(target-architecture): Wave 1 truth audit** | 🟢 **文档同步** 将 7 个 Wave 1 PR 的落地实况回写进 `docs/reborn/target-architecture/`，决策记录与代码实况对齐。 | Wave 1 收官 |
| [#6761](https://github.com/nearai/ironclaw/pull/6761) | **test: cover generic outbound registration** | 🟢 **测试补强** 新贡献者 ogarciarevett 提交，覆盖通用通道出站注册回归，增强扩展注册链路可靠性。 | - |
| [#7002](https://github.com/nearai/ironclaw/pull/7002) | **refactor(contracts): invert webui + openai_compat onto product_contracts (WS5)** | 🟡 **已关闭/合并至堆叠分支** WebUI 与 OpenAI 兼容层端口倒置至 `product_contracts`，随 #7000 统一合并。 | Wave 2 Slot 3/WS5 |
| [#6998](https://github.com/nearai/ironclaw/pull/6998) 等 3 个已关闭 PR | 均为 Wave 2 堆叠链节点，实际代码已随后续 PR 进入主干。 | - | - |

> **整体推进度**：Wave 1（WS1.1–WS1.7）全数落地并完成文档审计；Wave 2 已打通 WS2.1（端口倒置）、WS2.4（extension_manager 拆分 #7003 待合并）、WS5（会话/附件命名规范 #7005、operator 端口倒置 #7004）多条并行赛道，**核心契约层解耦目标已过半**。

---

## 4. 社区热点（高互动/高关注）

| 实体 | 类型 | 互动指标 | 核心诉求/争议点 |
|------|------|----------|-----------------|
| [#6963](https://github.com/nearai/ironclaw/issues/6963) | Issue | 7 条评论、👍0、状态 **CLOSED** | **CI 门禁技术债清零**：从“清单勾选”升级为“自动发现+失效闭环”，讨论聚焦于如何让门禁在 `git mv` 重构中自动存活。 |
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | Issue | 2 条评论、👍0、状态 **OPEN** | **libSQL 尾延迟病理**：工具密集型压测 p95 37–135 s，远超 2.5 s SLA；虽 #6973 修复 Postgres 容量，但 libSQL 写入路径仍为瓶颈，需存储引擎层面优化。 |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) | PR | 评论数未披露、👍0、状态 **OPEN** | **Postgres 容量恢复**：XL 级 PR，回滚 #6696 引入的行原生日志导致的 275 ms → 4.78 s 退化，性能基线守护战核心战役。 |
| [#7009](https://github.com/nearai/ironclaw/issues/7009) | Issue | 0 评论、👍0、状态 **OPEN** | **新提供商接入**：OrcaRouter 缺失于 `providers.json`，用户需自行维护自定义配置，呼吁内置以统一体验。 |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | PR | 评论数未披露、👍0、状态 **OPEN** | **OOBE 原型落地**：UI 原型（轮播、内联卡片、Agent 模式胶囊）已就绪，等待后端联调（#6993），首次用户体验建设关键节点。 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue/PR | 现象 | 影响范围 | 是否已有 Fix PR |
|--------|----------|------|----------|-----------------|
| **P0 – 生产阻塞** | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL `thread_store_writes` 病理，工具密集场景 p95 37–135 s | 宿主单租 Postgres API 容量门禁、夜ly 基线 | ❌ 无（需存储层优化，#6973 仅解决 Postgres 侧） |
| **P1 – 回归/门禁失效** | [#7006](https://github.com/nearai/ironclaw/issues/7006) | 变更覆盖率门禁拦截 #5981 约 180 行：CAS 冲突、FS 错误、序列化失败等错误路径**仅存在 crate 级测试，集成层无故障注入** | 合并队列通过率、交付信心 | ❌ 无（需补齐集成测试故障注入框架） |
| **P1 – CI 误报** | [#6978](https://github.com/nearai/ironclaw/issues/6978) | `reborn-tests.yml` 的 `workflow_dispatch` 触发时 `critical-mutation` 作业被跳过但被判定为不允许，导致汇总红灯 | CI 可信度、开发者体验 | ❌ 无（需调整 `if:` 条件或允许跳过） |
| **P2 – 架构一致性缺口** | [#6999](https://github.com/nearai/ironclaw/issues/6999) | `reborn_dependency_boundaries` 服务器生命周期规则未覆盖 WebChat v2 路由面 | 架构治理规则完整性 | ❌ 无（需架构决策：补规则还是调整路由归属） |
| **P2 – 大文件豁免** | [#7008](https://github.com/nearai/ironclaw/issues/7008) | `product_wire.rs` 1,923 行超 1,500 行阈值，挂 `arch-exempt: large_file` | 代码审查阈值、模块化压力 | ❌ 无（Issue 要求拆分 DTO 家族） |

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/进展 | 纳入下一版本概率 |
|------|----------|--------------|------------------|
| [#7009](https://github.com/nearai/ironclaw/issues/7009) | **内置 OrcaRouter 提供商** | 无 PR，但 `providers.json` 维护成本低，符合“主流网关全内置”策略 | 🟢 **高**（下一个小版本极大概率合入） |
| [#6993](https://github.com/nearai/ironclaw/issues/6993) + [#6994](https://github.com/nearai/ironclaw/pull/6994) | **OOBE 自动化任务后端联调** | UI 原型 #6994 已就绪，后端 Issue #6993 追踪中 | 🟢 **高**（Wave 2/产品化里程碑核心交付） |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | **系统前缀字节稳定缓存**（PI Agent 采用计划 P0 #2） | PR 开放，配套 #6997（显式缓存断点）已开放 | 🟡 **中**（性能优化类，视基线验收结果） |
| [#7011](https://github.com/nearai/ironclaw/issues/7011) | **extension_manager 拆分遗留 5 项发现** | 源自 #7003 拆分，含虚假 WriteFilesystem 效应、未测试锁谓词等 | 🟡 **中**（需在 #7003 合并前/后跟进修复） |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

> **数据限制**：提供的数据仅含 Issue/PR 标题、摘要与元数据，**不包含评论正文**，因此无法直接提炼真实用户语音。以下为基于标题/摘要的**代理推断**：

| 推断痛点/场景 | 依据 | 验证建议 |
|---------------|------|----------|
| **重构期间 CI 门禁频繁误报/失效，阻碍大规模 `git mv`** | #6963 摘要称“检查清单行是弱跟踪，8 个缺陷被发现”，#6996 修复后关闭 | 查阅 #6963 评论区开发者抱怨频次 |
| **夜ly 性能基线波动大，工具密集型负载不可用** | #6974 明确 “main 无法在 20 min CI 超时内通过 large-context prefill”，p95 超标 15 倍 | 关注 #6973 合并后的夜ly 报告 |
| **扩展生态注册/安装流程碎片化，缺乏统一深度链接** | #6780 重新移植 #5409，强调“公共注册握手 + HMAC + 私有清单源” | 询问扩展作者对当前注册体验的满意度 |
| **首次用户引导（OOBE）缺失，激活转化率低** | #6994 称“恢复自 7 月设计会话的陈旧 WIP”，#6993 追踪后端联调 | 结合产品埋点数据确认激活漏斗 |

---

## 8. 待处理积压（长期未响应/高风险）

| 实体 | 创建时间 | 停滞天数 | 风险描述 | 建议行动 |
|------|----------|----------|----------|----------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | 2026-07-03 | **30 天** | 自动发布 PR 挂起，包含 **破坏性变更**（`ironclaw_common` 0.5.0、`ironclaw_skills` 0.4.0），阻塞下游版本同步 | **P0 处理**：确认变更日志完整性 → 合并发布 → 通知下游 |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | 2026-07-11 | **22 天** | 消息

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-02

---

## 1. 今日速览
- **整体活跃度：低（维护期/清理期）**。过去 24 小时无新版本发布，无 PR 合入主分支，核心动作为 **Stale 机制批量关闭 6 个长期无响应 Issue**（均创建于 2026-04-02），仅剩 1 个 Open Issue 及 2 个 Open PR 处于活跃/待审状态。
- **代码交付：停滞**。两个 Open PR（#1224、#2358）分别停留在 4 月与 7 月，均未合并，说明当前审核吞吐为零。
- **社区信号：以历史遗留 Bug 清理为主**。用户近期无新增高优反馈，现存讨论聚焦于 i18n 硬编码、MCP 协议兼容、长图上传崩溃、定时任务历史显示等已知缺陷。
- **项目健康度：⚠️ 需关注**。积压 PR 无人审、Stale 关闭掩盖了真实未解决问题，建议建立「每周最少 1 次 PR Review」机制，避免贡献者流失。

---

## 2. 版本发布
**无新版本发布**。  
*最近一次 Release 仍为历史版本，建议维护者在积累 3–5 个合并 PR 后发布 vNext 补丁版，包含当前 Open PR 的修复内容。*

---

## 3. 项目进展
| PR | 状态 | 核心变更 | 进度影响 |
|----|------|----------|----------|
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | Open (stale) | **i18n 硬编码修复**、**Agent 弹窗 Esc 关闭**、**删除防重复点击** | 解决 #1223 三大 UX 痛点，属低风险高收益改动，**建议优先合并** |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | Open | **会话重命名失败时的本地化 Toast 提示** | 修复 #670 交互盲区，提升容错体验，**建议同批次合并** |

> **整体推进度**：0%（无合并）。两个 PR 均通过 CI、关联明确 Issue，技术债清偿价值高，阻塞点仅在于 Review 资源。

---

## 4. 社区热点
| 排名 | Issue/PR | 互动量 | 核心诉求 |
|------|----------|--------|----------|
| 1 | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 👍1 / 评论2 | **自定义 HTTP MCP 在 OpenClaw 引擎不可用**，仅 SSE 协议生效——阻断企业级私有化部署场景 |
| 2 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 评论2 | **3 MB 长图上传解析导致页面崩溃、任务整体不可用**——大文件处理链路稳定性堪忧 |
| 3 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | 评论1 | **硬编码中文污染英文 Prompt、Agent 弹窗缺 Esc/防抖**——国际化与交互细节完善 |

> **趋势**：高赞/高评 Issue 均为 **Stale 关闭**，实则未修复。维护者需区分「自动清理」与「问题解决」，避免用户误判为已修复。

---

## 5. Bug 与稳定性
| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 崩溃/不可用** | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 3 MB 长图上传 → 页面报错 → 新任务全链路不可用 | 无 | ❌ 未修复（Stale 关闭） |
| **P0 功能失效** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 自定义 HTTP MCP 不被 OpenClaw 识别 | 无 | ❌ 未修复（Stale 关闭） |
| **P1 逻辑错误** | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 两字提示词被判定「超出模型限制」 | 无 | ❌ 未修复（Stale 关闭） |
| **P2 显示异常** | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 定时任务删后历史标题错位 | 无 | ❌ 未修复（Stale 关闭） |
| **P2 交互缺陷** | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 编辑面板关闭后切换 Provider 变只读 | 无 | ❌ 未修复（Stale 关闭） |
| **P3 i18n/UX** | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | 硬编码中文、缺 Esc/防抖 | [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | 🟡 **有 PR 待合并** |

> **关键风险**：P0 级 Bug #1293、#1296 直接影响核心功能可用性，却因 Stale 机制被标记 Closed，**强烈建议重新打开或转入「Backlog: Critical」标签跟踪**。

---

## 6. 功能请求与路线图信号
| 需求 | 来源 | 可行性 | 纳入下一版本可能性 |
|------|------|--------|---------------------|
| **代码块行号切换** | [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 高（UI 增强，依赖 `react-syntax-highlighter`） | 🟡 中 —— 需设计评审，非阻塞 |
| **会话重命名失败反馈** | [#670](https://github.com/netease-youdao/LobsterAI/issues/670) → [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | 高（已有 PR） | 🟢 **高** —— 合并后即可发布 |
| **HTTP MCP 支持** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 中（涉及 OpenClaw 引擎协议适配） | 🔴 低 —— 需架构评估，短期难交付 |

> **路线图建议**：优先合并 #1224、#2358 发布 **vNext Patch**；将 #1293、#1296 列入 **vNext Minor** 里程碑并指定 Owner。

---

## 7. 用户反馈摘要
- **痛点 1：大文件/多模态稳定性差**——#1296 用户上传 3 MB 长图即崩溃，且「新开任务会一直报错，整体不可用」，显示错误边界与熔断机制缺失。
- **痛点 2：企业级集成受阻**——#1293 用户反馈「只有 SSE 的 MCP 可用」，HTTP 协议在 OpenClaw 完全不可用，限制私有化/内网部署场景。
- **痛点 3：国际化体验断层**——#1223 指出硬编码中文直接拼入 Prompt，英文用户收到「输入文件」等中文标签，违背 AGENTS.md 规范。
- **细节抱怨**——#1307「编辑面板关闭后切换 Provider 变只读」、#1305「删除任务后历史标题错乱」均属交互细节打磨不足，降低专业度感知。

> **满意度信号**：无正面赞誉 Issue，用户多为「遇到 Bug 来报告」，且多个关键 Bug 长达 4 个月未修复，**社区信任度下降风险高**。

---

## 8. 待处理积压 ⚠️
| 项目 | 滞留时长 | 风险 | 建议动作 |
|------|----------|------|----------|
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | 123 天 | 贡献者 MaoQianTu 可能失去动力 | **本周内安排 Review → Merge** |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | 15 天 | 修复交互盲区，低风险 | **同批次合并** |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 122 天 | 企业级协议不兼容，阻断商业化场景 | **重新打开、打标 `priority:critical`、指派核心维护者** |
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 122 天 | 数据丢失/应用崩溃风险 | **同上** |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 122 天 | Token 计算逻辑疑似错误 | **引入自动化回归测试用例** |

---

### 📌 维护者行动清单（建议今日内完成）
1. **取消 Stale 关闭**：对 #1293、#1296、#1298 执行 `reopen` 并加标签 `triage:urgent`。  
2. **PR 审核冲刺**：安排 1 h 完成 #1224、#2358 Review & Merge，发布 `vX.Y.Z+1`。  
3. **建立「周五 PR 日」**：固定每周五 10:00–12:00 仅处理 PR Review，防止积压。  
4. **补充回归用例**：针对 #1296（大文件上传）、#1298（Token 计算）编写 E2E 用例纳入 CI。

---

*报告生成时间：2026-08-02 08:00 UTC | 数据来源：GitHub REST API / GraphQL 实时拉取*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-02

---

## 1. 今日速览
- **整体活跃度：中等偏低**。过去 24 小时无新 Issue 产生，仅有 3 条 PR 更新，其中 2 个重要功能性 PR（`#1174`、`#1170`）已合并/关闭，1 个修复类 PR（`#1182`）处于待审核状态。
- **核心进展集中在基础设施与安全加固**：遥测反馈体系（`#1174`）与通道权限模型重构（`#1170`）已落地，标志着项目在可观测性与多租户安全边界上的关键里程碑完成。
- **技术债偿还进行中**：针对主会话（`main` session）的特殊限制解除（`#1182`）正在推进，消除历史遗留的硬编码逻辑。
- **社区互动静默**：无 Issue 讨论、无用户反馈、无 Release 发布，属于典型的“内核打磨期”节奏。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展
### ✅ 已合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 项目影响 |
|----|------|----------|----------|
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | **Feat/Infra** | **新增 Agent 级遥测基建与反馈收集体系**：引入后端无关的插桩层、Langfuse v4 导出、OTLP 运维后端、端侧 Reaction 反馈；支持流式/非流式对齐、Provider 故障转移归因、缓存感知 Token 统计、Reasoning 记录。 | **里程碑级**：为生产环境可观测性、模型评估闭环、成本核算奠定数据基础；解锁后续“在线评测 / RLHF / 成本优化”路线图。 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | **Fix/Security** | **通道权限模型重构**：将“访问白名单”与“特权操作（`/sh`、宿主工具）”解耦，引入账号级 `operators` 显式名单；在命令、回调、队列重放、聊天执行、外部触发等全链路强制校验。 | **安全加固**：修复权限越界风险，满足多租户/企业级部署的最小权限合规要求。 |

### 🔄 进行中的 PR
| PR | 状态 | 核心变更 | 审核重点 |
|----|------|----------|----------|
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | **Open** | **会话模型通用化**：移除 `gateway` 中对 `main` session 的删除/归档守卫（`delete_impl`、`is_archivable_entry`），保留“当前活跃频道会话不可归档”及 `sessions.clear_all` 保底逻辑。 | 需验证：主会话被删后的首次启动恢复流程、频道会话关联一致性、前端状态机兼容性。 |

---

## 4. 社区热点
> 过去 24 小时 **无 Issue 评论、无 PR 评论、无 Reaction 数据**。社区处于纯观察/部署验证期，建议维护者：
> - 在 `#1182` 中主动 @ 相关 reviewer（如 `@penso`、`@shixi-li`）加速合并；
> - 若 `#1174`/`#1170` 涉及配置变更，考虑发布 **Migration Guide** 或 **Changelog Preview** 降低升级摩擦。

---

## 5. Bug 与稳定性
| 严重度 | 来源 | 描述 | 修复状态 |
|--------|------|------|----------|
| **中** | `#1182` 关联 Issue [#1132](https://github.com/moltis-org/moltis/issues/1132) | `main` session 无法删除/归档，导致用户无法清理工作区、迁移会话。 | **Fix PR 已开 (#1182)**，待 Review 合并。 |
| **低** | `#1170` 隐性修复 | 非 Operator 账号通过 Channel 访问白名单可触达 `/sh` 等特权命令。 | **已合并 (#1170)**，回归测试建议覆盖 Queue Replay 与外部 Webhook 场景。 |

> 无新增 Crash、回归或数据丢失报告。

---

## 6. 功能请求与路线图信号
| 信号来源 | 隐性需求 | 下一版本落地概率 | 依赖/阻塞 |
|----------|----------|------------------|-----------|
| `#1174` 完工 | **在线评测 / 自动化 Prompt 优化管线** | ⭐⭐⭐⭐⭐ (基建已就绪) | 需上层调度器 / UI 对接 |
| `#1174` 完工 | **成本实时看板 / 预算告警** | ⭐⭐⭐⭐ (OTLP + Token 语义已有) | 需 Grafana Dashboard 模板 |
| `#1182` 进行中 | **会话模板 / 克隆 / 导入导出** | ⭐⭐⭐ (主会话限制解除是前置) | 待 `#1182` 合并后启动设计 |
| `#1170` 完工 | **RBAC 细粒度策略（资源级/动作级）** | ⭐⭐ (Operator 仅是二元分级) | 需 Policy Engine 引入 (OPA/Cedar) |

---

## 7. 用户反馈摘要
> 今日 **无用户评论、无 Issue 新开**。近期反馈真空可能源于：
> 1. 核心用户群处于 `#1174`/`#1170` 升级验证窗口；
> 2. 缺乏显式“升级指引”导致观望；
> 3. 社区规模仍处早期，隐性使用为主。
> **建议**：在 Discord/Forum 发起“vNext 升级体验调研”，收集迁移痛点。

---

## 8. 待处理积压提醒
| 项目 | 类型 | 停滞时长 | 风险 | 建议行动 |
|------|------|----------|------|----------|
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | PR (Open) | < 24h | 低 | 指派 Reviewer，目标 **今日合并**；同步更新 `CHANGELOG.md` 与迁移文档。 |
| [#1132](https://github.com/moltis-org/moltis/issues/1132) | Issue (Closed by #1182) | ~1 周 | 低 | 确认 `#1182` 合并后自动关闭，验证回归用例。 |
| **文档同步** | Task | 持续 | 中 | `#1174` 遥测配置、`#1170` Operator 策略、`#1182` 会话行为变更均需文档化，**建议纳入 Release Checklist**。 |

---

> **健康度指标速览**  
> 🟢 核心基建推进顺利 | 🟡 社区互动静默 | 🟢 安全/技术债主动偿还 | 🟡 文档/发布流程待补强  
> **下一关键动作**：合并 `#1182` → 切 Tag `v0.x.y` → 发布含迁移指南的 Release Notes。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-02

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库近 24h 活动（Issues/PRs/Releases）  
> **统计口径**：2026-08-01 00:00 – 2026-08-02 00:00 (UTC)

---

## 1. 今日速览
- **活跃度评级：🟢 高** —— 单日 9 个 Issue 全为新开/活跃状态，13 个 PR 更新（12 待合并、1 已关闭），显示社区与核心团队并行推进“修复+新功能”双轨节奏。  
- **核心主题**：**内存/压缩机制修复**、**ACP 协议竞态修复**、**技能池持久化**、**模型提供商对齐**、**桌面端 UX 改进（全局浮窗、工作区快捷方式）**。
- **零发版**：无新 Release，但 5 个 “first-time-contributor” PR 与 3 个核心成员 PR 同时在审，预示下一版本（v2.0.2+）将密集落地修复。
- **风险点**：Issue #6619（Gemini `extra_content` 导致崩溃）与 #6625（ACP 通知竞态丢文本）已有对应 Fix PR，但尚未合并，建议优先审核合入主干。

---

## 2. 版本发布
> **今日无新版本发布**  
> 最近一次发布为 v2.0.1（桌面版），当前主干积累的修复建议汇总为 v2.0.2 补丁版本。

---

## 3. 项目进展（已合并/关闭 PR）
| PR | 类型 | 核心变更 | 影响范围 |
|----|------|----------|----------|
| [#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598) | **Bug Fix** | 修复插件来源技能标签重启后丢失（#6537） | 技能池持久化、插件生态 |
| *其余 12 个 PR 均为 OPEN 状态，尚未合并* | | | |

> **进展结论**：今日仅 1 个 PR 关闭（且为 #6632 的重复/前序尝试），主干推进主要依赖后续 Review 通过的 5 个核心 Fix PR。

---

## 4. 社区热点（高互动/高关注 Issue/PR）
| 排名 | 对象 | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | [Issue #6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 👍 0 · 评论 2 · 更新频繁 | **统一清理页面**：用户长期使用导致工作区膨胀，需全局可视化清理（自动记忆、备份、协作产物、收件箱）。 |
| 2 | [Issue #6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | 👍 0 · 评论 2 | **全局快捷键浮动输入框**：参考豆包/Raycast 体验，降低“随手问一句”摩擦，已核查代码可行性。 |
| 3 | [Issue #6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | 👍 0 · 评论 1 | **多智能体协作引导缺失**：Default Agent 不自动调用其他 Agent，文档未明示需在 PROFILE.md 显式配置，导致 50+ 轮无效调试。 |
| 4 | [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 长期更新 · 评论多 | **Provider/模型/路由/Agent 控制统一重构**：关联 #6167，属大型架构调整，审阅周期长。 |

> **洞察**：用户痛点聚焦 **“存储治理”**、**“轻量交互入口”**、**“多 Agent 门槛”** 三大方向，均属产品化补齐而非底层 Bug。

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 崩溃** | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | `ToolCallBlock` 缺少 `extra_content` 字段导致 Gemini 流式响应崩溃（qwenpaw 2.0.1 + agentscope 2.0.4.post1） | [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) (first-time-contributor) | **Open / 待审** |
| **P0 数据丢失** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP `delegate_external_agent` 竞态导致“completed without text output” | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) (first-time-contributor) | **Open / 待审** |
| **P1 回归** | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | 自动压缩不触发 `summarize_when_compact` 记忆，手动 `/compact` 正常 | [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) (BlackBox-Labs) | **Open / 待审** |
| **P1 协议不兼容** | [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | Real behavior proof gate 误删 fenced Evidence 块 | 无 PR | **Open** |
| **P2 环境问题** | [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | `nohup`/`&` 后台命令导致 Agent 卡住 | 无 PR | **Open** |

> **建议**：优先合并 #6620、#6623、#6629 三个已有 Fix PR，可一次性解决 3 个 P0/P1 阻塞。

---

## 6. 功能请求与路线图信号
| 需求 | Issue | 关联 PR/实现线索 | 纳入下版本概率 |
|------|-------|------------------|----------------|
| 统一清理页面（全局存储治理） | [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 无 PR，涉及 Console + 后端新增页面 | 🟡 中（需设计评审） |
| 全局快捷键浮动输入框 | [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | 作者已核查 `console/src-tauri` 可行性 | 🟢 高（桌面端增强，优先级高） |
| OrcaRouter 内置 Provider | [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | PR 已提交，first-time-contributor | 🟢 高（单文件注册，低风险） |
| Aliyun Coding Plan 模型对齐 | [#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631) | PR 已提交，修正模型列表 | 🟢 高（修正类） |
| 工具卡片图片内联+画廊 | [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | 长期 PR，UI 增强 | 🟡 中（需 UI 评审） |
| 工作区快捷方式侧边栏 | [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) | Desktop only，关联 #6083 | 🟢 高（桌面端易用性） |

> **路线图推测**：v2.0.2 将以 **稳定性修复（3 个 P0/P1）+ 低风险 Provider/桌面增强（OrcaRouter、工作区快捷方式、Aliyun 模型对齐）** 为主；全局清理页与浮动输入框大概率排入 v2.1.0。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）
| 维度 | 代表性声音 | 频次/强度 |
|------|------------|-----------|
| **存储焦虑** | “长期使用 qwenpaw 会混乱不堪加大空间占用，自己处理又麻烦且可能误删” (#6593) | 🔥 高 |
| **多 Agent 门槛** | “文档只描述概念，未明示需在 PROFILE.md 显式写入调用指令，导致 50+ 轮无效调试” (#6621) | 🔥 高 |
| **轻量交互缺失** | “主窗口 1280×800 太重，随手问一句需切应用、等加载，浮动框能显著降低摩擦” (#6568) | 🔥 高 |
| **协议兼容性** | “loongsuite-python 文档只讲 AgentScope，如何接入 QwenPaw？” (#6627) | ⚠️ 中 |
| **稳定性信任** | “Gemini 思想签名导致每次请求崩溃”“ACP 竞态丢文本” (#6619, #6625) | 🔴 关键 |

---

## 8. 待处理积压（长期未响应/高价值）
| 对象 | 停滞天数 | 重要性 | 建议动作 |
|------|----------|--------|----------|
| [PR #5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | ~40 天 | UI 体验核心增强 | 安排 UI Review，决定合并或拆分为小 PR |
| [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | ~12 天 | 架构统一重构 | 需核心成员专项 Review，拆解为可合并单元 |
| [Issue #6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | ~7 天 | 后台命令卡死 | 缺乏复现/修复 PR，建议指派研发排查 `execute_shell_command` 逻辑 |
| [Issue #6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | ~2 天 | 存储治理高频诉求 | 纳入 v2.1 规划，发起设计讨论 Issue |

---

### 📌 维护者行动清单（建议今日/明日处理）
1. **Review & Merge**：#6620、#6623、#6629（阻塞性崩溃/丢文本/记忆回归）  
2. **快速合入**：#6622（OrcaRouter）、#6631（Aliyun 模型对齐）、#6630（空响应上报）、#6628（SystemMsg 占位符）  
3. **指派排查**：#6480（nohup 卡死）给熟悉 Shell 执行链路的成员  
4. **发起讨论**：#6593（清理页设计）、#6568（浮动输入框技术方案确认）  
5. **关闭重复**：#6598 已关闭，确认 #6632 为最终修复版本并加速审核  

--- 

*报告生成时间：2026-08-02 06:00 UTC | 下次更新：2026-08-03 同一时间*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-02

---

## 1. 今日速览

- **活跃度评估：高** — 过去 24 小时共 50 条 Issue 更新（47 个新开/活跃，3 个关闭）与 50 条 PR 更新（均为待合并，0 个已合并/关闭），显示社区处于密集的设计评审与大型重构并行期。
- **核心主题**：内存架构重构（分离会话历史与长时记忆）、安全加固（密钥源抽象、认证插件化、沙箱策略）、A2A 协议双向支持、评测框架完善、WhatsApp/Telegram 通道修复、Computer Use 原生驱动落地。
- **发布状态**：无新版本发布；PR #9648 已准备将版本号推至 `v0.8.4`，但尚未合并。
- **风险信号**：多个高优先级 RFC 处于“accepted/in-progress”且风险标记为 `high`，需维护者及时裁决以免阻塞后续 PR；WhatsApp 业务模式下的安全漏洞（S1）已有修复 PR（#9397、#9417）但仍在评审。
- **社区健康度**：核心贡献者（Audacity88、JordanTheJet、Nillth、IftekharUddin 等）高频推进大型 PR，新贡献者（abhinavmathur-atlan、Hyye123 等）切入通道层修复，协作结构健康。

---

## 2. 版本发布

**今日无新版本发布。**  
下一版本候选 `v0.8.4` 已在 PR #9648 准备就绪，包含版本号递增与翻译目录修正，等待合并后切标签发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR 与 Issue）

| 类型 | 编号 | 标题 | 状态 | 影响摘要 |
|------|------|------|------|----------|
| **Issue** | #8568 | Mixture-of-Agents (MoA) 虚拟模型提供者 | **CLOSED** | 接受设计，纳入路线图，后续将由专门 PR 实现多模型聚合编排。 |
| **Issue** | #9550 | 修复 GitHub 组织主页失效的 LinkedIn 链接 | **CLOSED** | 文档类微调，已完成。 |
| **PR** | — | *今日无 PR 合并* | — | 所有 50 条 PR 均处于 **OPEN** 状态，说明维护者正在批量评审大型变更，合并窗口预计在未来 1–2 天集中释放。 |

> **整体推进度**：核心架构类 RFC（内存、安全、A2A、认证）已进入“accepted”并转入实现阶段；评测框架 7 连 PR（`#9220–#9225, #9244, #9248`）已完整铺开基线/回归/报告体系；Computer Use 三平台驱动（#9091）与安全中继传输（#9080）代码完备，等待最终评审合并。

---

## 4. 社区热点（评论/互动最多的 Issue 与 PR）

| 编号 | 标题 | 评论数 | 核心诉求 / 讨论焦点 | 链接 |
|------|------|--------|----------------------|------|
| **#9048** | RFC: 将会话历史与 Agent 策划的长时记忆分离 | 16 | 运行时/网关/通道自动保存仍将对话轮次写入通用内存后端为 `Conversation` 类别，导致生命周期混淆；需拆分存储接口与策略。 | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) |
| **#9127** | RFC: 抽象 `KeySource` trait — 按来源/部署形态分类主密钥材料 | 13 | 现有 `#[secret]`/`#[credential_class]` 体系无法区分“本地文件、KMS、HSM、环境变量”等密钥来源，阻碍审计与轮换自动化。 | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) |
| **#8603** | RFC: OpenAI Chat Completions 兼容适配器 | 12 | 让 Open WebUI、LobeChat 等标准客户端零适配接入 ZeroClaw，需统一请求/响应转换、流式映射、工具调用协议。 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| **#8933** | RFC: OTel 导出跨轮次会话关联 ID | 12 | 引入 `gen_ai.conversation.id` 语义约定，实现分布式追踪中会话维度的关联，便于可观测性平台聚合分析。 | [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) |
| **#7155** | RFC: 高风险 Shell 命令分级确认 + Claude Code 风格允许/询问/拒绝策略 | 11 | 现有 `auto_approve` 粒度过粗，期望引入“按执行实例确认”机制，配合命令模式白名单，平衡安全与效率。 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| **#9348** | **Bug**: WhatsApp Web `business` 模式下回复所有私聊/群聊（策略仅针对个人模式，空 `allowed_groups` 放行所有群） | 9 | **S1 安全风险** — 配置看似锁定实则全开，已有后续 RFC #9397 提议“空列表即拒绝所有群”。 | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) |
| **#9091** | feat(computer-use): 新增 macOS/Linux X11/Windows 原生驱动 | — | **PR 评审热度高**（隐性），实现桌面屏幕感知、无障碍树、鼠键输入的三平台安全能力，配合特性门控与准入策略。 | [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) |
| **#9080** | feat(relay): 安全传输平面与浏览器侧注册前门 | — | 引入双向 mTLS、自签 CA、CSR 签发、证书审计/吊销/续期，支撑 ZeroCode 与 Web UI 的安全远程接入。 | [#9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080) |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | 编号 | 标题 | 组件 | 是否已有 Fix PR | 状态 |
|--------|------|------|------|----------------|------|
| **S1 (安全)** | #9348 | WhatsApp Web 业务模式策略失效，回复所有消息 | `channel:whatsapp` | **是** → #9397 (RFC: 空 `allowed_groups` 视为拒绝全部)、#9417 (承载 token 泄露) | OPEN / IN-PROGRESS |
| **S2 (退化)** | #9417 | WhatsApp Cloud `request_approval` 发送失败/取消时泄露实时审批 token | `channel:whatsapp` | **否** (Issue 中已定位代码位置) | OPEN |
| **S1 (功能阻断)** | #9340 | CLI 创建的 cron 任务 `delivery.mode = "none"` 导致输出丢弃 | `channel:cli`, `cron` | **否** | IN-PROGRESS |
| **S3 (次要)** | #6157 | Nextcloud Talk 使用错误的 Bot 消息 API 导致发送失败 | `channel:nextcloud-talk` | **否** | IN-PROGRESS |
| **潜在回归** | #9056 | 供应商错误统一包装为通用 `All model_providers/models failed`，丢失根因 | `provider:reliable` | **是** → #9056 (PR 已开，展示具体错误) | OPEN / NEEDS-AUTHOR-ACTION |

> **关注建议**：WhatsApp 相关两个 S1/S2 问题直接面向生产环境安全，建议优先合并 #9397 与 #9417 的修复；cron 输出丢失 (#9340) 影响自动化可靠性，应尽快补上 `delivery` 默认值。

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能 / 需求 | 关联 PR / 进展 | 纳入下一版本可能性 |
|----------|-------------|----------------|---------------------|
| **RFC #9048** (accepted) | 会话历史与长时记忆存储分离 | 无直接 PR，但 #9103 (权威存储与 enrichment 连接器分离) 同向 | **高** — 架构债务清理优先级 P2，v0.9.0 必含 |
| **RFC #9127** (in-progress) | `KeySource` trait 统一密钥来源分类 | 无直接 PR，配合 #7141 (可插拔认证) 推进 | **高** — 安全里程碑核心依赖 |
| **RFC #8603** (accepted) | OpenAI Chat Completions 适配器 | 无直接 PR，但网关层已有 WebSocket/_webhook 基础 | **中** — 需要专人实现，可能滑入 v0.8.5 |
| **RFC #9106** (accepted) | A2A 出向客户端 (`A2ATool`) | 无直接 PR，入向 `A2AServer` 已在 v0.8.2 发布 | **高** — 双向 A2A 是 v0.9.0 多代理协作前置条件 |
| **Tracker #6489** | 统一能力目录与插件迁移路线图 | 多 PR 并行 (#8313 skills 注入、#9319 工具注册表封装) | **进行中** — 重构已落地大半，v0.9.0 完成 |
| **PR 系列 #9220–#9225, #9244, #9248** | 评测框架：基线/回归/报告/种子内存/JUnit/种子回归套件 | **7 个 PR 同步开放**，作者为核心贡献者 IftekharUddin | **极高** — 已进入 CI 门禁设计，v0.8.4/0.8.5 合并概率大 |
| **PR #9091** | Computer Use 三平台原生驱动 | 代码完备，特性门控 `computer_use` | **高** — 桌面自动化杀手级特性，配合 #6909 RFC |
| **PR #9080** | 安全中继传输 (mTLS + CA) | 代码完备，涉及 daemon/zerocode/web 多端 | **高** — 远程开发/托管场景核心基建 |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点 / 场景 | 代表性 Issue / 评论 | 用户声音要旨 |
|-------------|---------------------|--------------|
| **内存系统混淆导致调试困难** | #9048, #9103, #6850 | “无法区分‘当前会话上下文’与‘跨会话长时记忆’，排查上下文污染极其痛苦”；期望明确的存储边界与生命周期策略。 |
| **WhatsApp 业务模式安全感缺失** | #9348, #9397, #9417 | “配置了 `allowed_groups: []` 以为锁死，结果全群自动回复，造成信息泄露风险”；强烈要求“空即全拒”默认行为。 |
| **标准客户端无法直连** | #8603 | “团队习惯用 Open WebUI / LobeChat，每次

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*