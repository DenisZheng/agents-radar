# OpenClaw 生态日报 2026-07-19

> Issues: 390 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-19 02:04 UTC

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

# OpenClaw 项目日报 | 2026-07-19

---

## 1. 今日速览

OpenClaw 今日发布 **v2026.7.2-beta.3**，主打**远程编码会话**与**原生自动化节点**两大亮点，标志着云端 Worker 与本地终端的无缝衔接正式进入测试阶段。过去 24 小时 **Issue 活跃度极高**（390 条更新，其中 249 条新开/活跃），**PR 吞吐量大**（500 条更新，264 条待合并），项目处于**高强度迭代期**。社区最热讨聚焦于 **Linux/Windows 原生应用缺失（#75，113 条评论、81 👍）**，以及 **Codex Hook CPU 暴涨（#91009）**、**网关启动失败回归（#108435, #109867）** 等阻塞性缺陷。核心架构层面，“Durable Core”六连 PR 已推进至第 2 个实现切片（#111121），会话仪表盘域（Dashboard Domain）大型特性（#110960）同步落地，展现出向**多租户、可观测、可扩展**网关演进的明确路线图信号。

---

## 2. 版本发布

### v2026.7.2-beta.3 (`openclaw/openclaw@2026.7.2-beta.3`)
**发布时间**：今日  
**核心亮点**：
| 特性 | 描述 | 关联 PR/Issue |
|------|------|---------------|
| **Remote Coding Sessions** | 在云端 Worker 上运行 Control UI 会话；在终端直接打开 Codex/Claude 目录会话；在终端直接恢复 OpenCode/Pi 会话 | #107670, #107086, #107200 |
| **Native Automation & Nodes** | 原生自动化能力与节点编排框架（Release Note 截断，详见完整日志） | — |

**破坏性变更 / 迁移提示**：
- Beta 版本，**不建议生产环境直接升级**；
- 若从 `beta.1/beta.2` 升级，**须关注 SQLite 迁移顺序问题**（#109867：`agent_id` 索引建在列添加前，导致 `doctor --fix` 卡死），升级前请备份 `~/.openclaw/data.sqlite`；
- Codex 集成侧的 `PreToolUse` Hook 进程模型已调整，若有自定义 Hook 链需重新验证 CPU/内存占用。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR

| PR | 状态 | 规模 | 核心价值 | 影响面 |
|----|------|------|------|--------|
| [#111119](https://github.com/openclaw/openclaw/pull/111119) `refactor(discord): split message process runtime` | **CLOSED** | XL | 将 1358 行单体模块拆分为反应生命周期、回复投递、草稿进度、队列协调四大子模块，消除“大文件技术债” | Discord 通道稳定性、代码可维护性 |
| [#111121](https://github.com/openclaw/openclaw/pull/111121) `Durable core PR2/6: add optional shared-state foundation` | **OPEN** | XL | Durable Core 架构落地第二刀：引入可选共享状态基础设施，为后续 Worker/Session 解耦铺路 | 网关核心架构、多租户隔离 |
| [#110960](https://github.com/openclaw/openclaw/pull/110960) `feat(gateway): session dashboard domain` | **OPEN** | XL | 会话仪表盘域全套服端：Board RPC、Ticketed Widget、Dashboard Tool、Agent 级持久化 | Web Control UI、多 Agent 协作可观测 |
| [#103872](https://github.com/openclaw/openclaw/pull/103872) `feat(skills): preview proposals before approval` | **OPEN** | XL | Skill Workshop 新增只读 `review` 动作，支持完整规范预览与统一 Diff，含分页/版本绑定/完整性校验 | 技能市场安全、供应链信任 |
| [#110954](https://github.com/openclaw/openclaw/pull/110954) `fix(discord): sustained gateway bursts stop growing memory` | **OPEN** | S | 修复 Discord Gateway 突发流量下无界内存队列泄漏，引入 120 eps 限流与 TTL 淘汰 | 网关可用性、内存稳定性 |
| [#109680](https://github.com/openclaw/openclaw/pull/109680) `fix(amazon-bedrock): keep blank credentials from overriding AWS auth` | **OPEN** | M | 防止空白凭证覆盖 AWS 默认凭证链，解决 Bedrock 认证静默失效 | 认证链路健壮性 |
| [#111122](https://github.com/openclaw/openclaw/pull/111122) `fix(sessions): manual compaction deletes transcript history while claiming it was archived` | **OPEN** | M | 修复 `sessions compact --max-lines` 静默丢失历史记录（实为删除非归档），关联存储翻转回归 #98236 | 会话数据完整性、用户信任 |

> **整体推进评估**：核心架构重构 进入实质落地期，通道层技术债偿还加速，安全/认证边界收敛明显。但 **XL 级 PR 仍多处于“需证明/待审”**，合并吞吐尚未形成常态化节奏。

---

## 4. 社区热点 —— 讨论最活跃的 5 个 Issue/PR

| # | 标题 | 评论 | 👍 | 状态 | 核心诉求 |
|---|------|------|----|------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows Clawdbot Apps** | 113 | 81 | OPEN | **强烈呼吁补齐桌面端原生应用**，功能对齐 macOS；已等待 200+ 天，阻碍企业内网/离线场景采纳 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | **Codex PreToolUse Hook 狂刷 CPU、阻塞 Gateway RPC** | 14 | 2 | OPEN | `openclaw-hooks relay` 短进程风暴导致 100%+ CPU，严重拖慢网关响应，需进程池化或异步化 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | **Masked Secrets：Agent 用 Key 不见 Key** | 13 | 4 | OPEN | 防止 `.env` 明文泄露 & Prompt Injection 窃密，期望运行时注入/加密存储/审计链路 |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | **Telegram Guest Bots & Bot-to-Bot 通信支持** | 11 | 8 | OPEN | 适配 Telegram 2026-05-07 新协议，解锁“临时会话/机器人协作”新交互范式 |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | **2026.7.1 升级后 Gateway 启动失败** | 7 | 2 | OPEN | 回归阻塞：`gateway did not start on 127.0.0.1`，涉及 systemd/Ollama/手动启动全场景，急需热修复 |

> **洞察**：Top 1（#75）以 **81 👍** 、**跨季度未决** 成为社区最大痛点；Top 2/5 均为 **P0 级回归/崩溃**，直接影响生产可用性；Top 3/4 反映 **安全边界与协议跟进** 的架构级诉求。

---

## 5. Bug 与稳定性 —— 按严重程度分层

| 严重度 | Issue | 现象 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 / Release Blocker** | [#108435](https://github.com/openclaw/openclaw/issues/108435) Gateway 启动失败 | `gateway did not start on 127.0.0.1`，systemd/Ollama/手动均复现 | — | **回归**，阻断所有新部署升级 |
| **P0 / Release Blocker** | [#109867](https://github.com/openclaw/openclaw/issues/109867) Beta.2 迁移建索引在加列前 | `doctor --fix` 卡死，SQLite `managed_outgoing_image_records.agent_id` 索引/列顺序反 | — | **数据迁移回归**，升级路径受阻 |
| **P0 / Crash Loop** | [#99910](https://github.com/openclaw/openclaw/issues/99910) Memory Dreaming 卡死主线程 10 min | 网关事件循环被独占，CLI/RPC/Channel 全挂，需看门狗 Kill | — | **可用性灾难**，2026.6.9 起复现 |
| **P1 / Crash Loop** | [#99263](https://github.com/openclaw/openclaw/issues/99263) Node 26 下 `ERR_INVALID_STATE` FileHandle GC 关闭 | 入站图片处理触发未捕获异常，进程退出 | — | **平台兼容性**，Node 26 强制 GC 语义变更 |
| **P1 / Data Loss** | [#96242](https://github.com/openclaw/openclaw/issues/96242) Telegram 多路径重复投递 | 同一条消息在 3+ 独立路径重复发送 | — | **消息去重缺失**，用户体验差 |
| **P1 / Behavior Bug** | [#108238](https://github.com/openclaw/openclaw/issues/108238) Context

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告 | 2026-07-19

---

## 1. 生态全景

当前生态呈现 **“头部强基建、腰部重稳定、长尾分化”** 的三层态势。  
**头部项目**（OpenClaw、ZeroClaw、IronClaw、CoPaw）正从“单机助手”向 **多租户网关、插件化运行时、远程编码云** 演进，架构重构与供应链安全投入达历史峰值；  
**腰部项目**（NanoBot、Hermes、PicoClaw、NanoClaw、Moltis）集中攻克 **上下文/记忆管理、跨平台兼容、多协议适配** 等生产级稳定性难题，交付节奏快、修复闭环强；  
**长尾项目** 则因维护带宽不足陷入停滞（NullClaw、TinyClaw、ZeptoClaw）或企业主导下社区响应滞后（LobsterAI）。  
**核心共识**：网关解耦、协议标准化（MCP/ACP）、WASM/OCI 插件生态、本地优先与混合部署已成必选项而非差异化卖点。

---

## 2. 各项目活跃度对比

| 项目 | 语言/栈 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | Go/TS | **390 更新 (249 新/活跃)** | **500 更新 (264 待合并)** | **v2026.7.2-beta.3** | 🔥 **高强度迭代** | 远程编码、Durable Core、技能市场、P0 阻塞回归 |
| **ZeroClaw** | Rust | **50 更新** | **50 更新 (3 合并)** | 无 | ⭐⭐⭐⭐⭐ **优** | 供应链安全(SLSA)、多渠道原生、WASM OCI化、P1 阻塞 |
| **IronClaw** | Rust | ~10 活跃 | **~30 合并/关闭** | 无 (PR #5598待定) | ⭐⭐⭐⭐ **高** | Reborn架构落地、Capability→Resolution、MCP明文凭据高危 |
| **CoPaw (QwenPaw)** | Rust/TS | **11 新/活跃** | **6 待合并** | 无 (v2.0.0.post3验证中) | 🟢 **高** | 发布后回归修复、环境隔离、沙箱治理、Windows兼容 |
| **NanoBot** | Python | **7 更新** | **30 更新 (16合并)** | 无 (积累待发布) | 🔥 **高** | 批量修复、上下文溢出防护、Win编码、GitStore、原子写入 |
| **Hermes Agent** | TS/Rust | **50 更新 (32关闭)** | **50 更新 (6合并)** | 无 | 🟢 **良性维护** | 网关死锁修复、会话持久化、多实例OAuth、桌面端渲染崩溃 |
| **PicoClaw** | Go | **4 更新** | **12 更新 (8合并)** | 无 | ✅ **中高** | OAuth重构、WhatsApp原生、Agent协作总线、ARMv7、Go漏洞修复 |
| **NanoClaw** | TS/Node | **18 更新** | **26 更新 (17关闭)** | 无 | 🟢 **高** | 版本冲刺清理、Webhook认证修复(GHSA)、WhatsApp适配、Setup UX重构 |
| **Moltis** | Rust | **0** | **3 更新 (2合并)** | 无 | 🟡 **低中稳健** | Slack API Base URL可配、ACP-only模式、zvec向量后端实验 |
| **LobsterAI** | TS/Go | **6 更新(均陈旧)** | **1 待合并, 2 Stale关闭** | **v2026.7.17** | 🟡 **中低** | 协作模式UI、部署持久化、皮肤、P0 Bug超100天未修、审查吞吐不足 |
| **NullClaw** | Zig | **1 (长期悬而未决)** | **0** | 无 | ⚠️ **需关注/停滞** | Android/Termux构建失败88天无修复、无维护者响应 |
| **TinyClaw / ZeptoClaw** | - | **0** | **0** | 无 | ❌ **无活动** | - |

> **数据说明**：OpenClaw 量级为数量级领先（Issue/PR 更新数含评论、审查等事件）；ZeroClaw、IronClaw、CoPaw 处于核心重构高峰；NanoBot、NanoClaw 展现极强的“当日修复、当日合并”工程纪律。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位与优势 | 差异化技术路线 | 社区规模对比 |
| :--- | :--- | :--- | :--- |
| **核心定位** | **生态“参考实现”与“云原生网关标杆”** | **Durable Core 架构**：显式解耦 Worker/Session/Gateway，原生支持多租户隔离、持久化执行、可观测仪表盘；**Remote Coding Sessions** 率先落地云端 Worker 与本地终端无缝衔接。 | **Issue/PR 活跃度为全生态之和的 3-5 倍**；XL 级架构 PR 并行推进（6连 Durable Core、Dashboard Domain），显示核心团队满编且工程纪律成熟。 |
| **技术护城河** | 1. **Skill Workshop 供应链信任体系**（预览审批、Diff 校验、版本绑定）<br>2. **原生自动化节点编排框架**<br>3. **Codex/Claude/OpenCode/Pi 多运行时会话互操作** | 对比 ZeroClaw/IronClaw 的 Rust 重安全内核，OpenClaw 选 Go+TS 平衡生态兼容与交付速度；对比 NanoBot/Hermes 的本地优先，OpenClaw 云原生基因更强。 | 外部贡献者数、讨论深度（如 #75 原生应用 113 条评论、81 👍）显著高于腰部项目，形成“用户即测试、社区即路线图”正循环。 |
| **风险点** | Beta 阶段 P0 回归频发（Gateway 启动失败、SQLite 迁移顺

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-19

> 数据来源：GitHub HKUDS/nanobot 过去 24 小时活动（Issues: 7, PRs: 30, Releases: 0）

---

## 1. 今日速览

- **活跃度评级：🔥 高** — 单日 30 条 PR 更新（14 待合并、16 已合并/关闭），形成「批量修复 + 基建加固」双轨并行态势。  
- **核心主题**：**上下文窗口溢出防护**、**Windows 编码兼容**、**GitStore 跨目录初始化**、**会话元数据遗留兼容**、**配置/定时任务/触发器的空值健壮性**、**原子写入落盘**、**WebUI 交互打磨**、**容器安全收敛**。  
- **交付节奏**：16 个 PR 当日合并/关闭，覆盖 P1 级回归修复 6 个、P2 级体验优化 4 个、文档/CI 3 个，显示维护团队具备「快速分拣 → 当日修复 → 回归测试」闭环能力。  
- **技术债清理**：`SessionManager._cache` 无界增长、Docker `SYS_ADMIN`/`unconfined`、原地写入 `config.json` 等长期隐患均在今日获得修复 PR 或已合并。  
- **社区信号**：Ollama 提示词前缀缓存（#4867）、WebUI 工作区作用域丢失（#4940）、Windows UTF-8 子进程解码（#4975）等真实用户痛点在 24 h 内均已有 Fix PR 挂载，响应极快。

---

## 2. 版本发布

**无新版本发布**。当前主分支累积大量 P1 修复与基建改进，建议下一周切 `v0.12.x` 或 `v0.13.0` 发布。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#4925](https://github.com/HKUDS/nanobot/pull/4925) | **Bug Fix (P1)** | 复用上下文总管在工具结果超限时自动截断并指引模型重试 | Agent 循环稳定性，解决 #2343 场景 |
| [#4979](https://github.com/HKUDS/nanobot/pull/4979) | **Regression Fix (P1)** | `GitStore` 暂存路径改为相对 workspace 解析，修复跨目录初始化失败 | 记忆/会话持久化，关闭 #4980 |
| [#4977](https://github.com/HKUDS/nanobot/pull/4977) | **Bug Fix (P1)** | `read_session_metadata/read_session_file` 增加 legacy 文件名回退 | WebUI 侧边栏 workspace_scope 重启丢失，修复 #4940 |
| [#4976](https://github.com/HKUDS/nanobot/pull/4976) | **Bug Fix (P2)** | `CliAppManager` 显式 `encoding='utf-8'` 解码子进程输出 | Windows 非 UTF-8 区域设置下 CLI 工具可用性，修复 #4975 |
| [#4984](https://github.com/HKUDS/nanobot/pull/4984) | **Infra (P1)** | `save_config` 经由 `_write_text_atomic` 原子写入 | 配置文件损坏风险归零 |
| [#4985/4983/4986](https://github.com/HKUDS/nanobot/pull/4985) | **Data Hardening (P1)** | Cron/Triggers/Config 加载时将 `null`/字符串 ms 字段强制转 `int`（默认 0） | 存储层脏数据导致的整体隔离/崩溃 |
| [#4981/4982](https://github.com/HKUDS/nanobot/pull/4981) | **Channel Hardening (P2)** | Telegram/Feishu markdown 分片在 `max_len<=0` 时直接返回原文，避免死循环 | 通道发送异常保护 |
| [#4978](https://github.com/HKUDS/nanobot/pull/4978) | **Resource Mgmt (P1)** | 关闭时终止活跃 exec-session 进程树，拒绝新会话 | 网关优雅下线、无孤儿进程 |
| [#4627/4626/4624/4621](https://github.com/HKUDS/nanobot/pull/4627) | **Memory/Subagent (Feature)** | 交付上下文保留、可选急切合并、子代理聚合结果模式、事实归档溯源 | 长期记忆质量与 Token 成本平衡 |
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | **Docs/CI (P2)** | 增加 Render 一键部署 Blueprint | 降低云端部署门槛 |
| [#4886](https://github.com/HKUDS/nanobot/issues/4886) | **Security (Closed)** | Docker Compose 移除 `SYS_ADMIN`/`apparmor=unconfined`/`seccomp=unconfined` | 容器攻击面收敛（已关闭，待对应 PR 合并） |
| [#4786](https://github.com/HKUDS/nanobot/issues/4786) | **Resource Leak (Closed)** | `SessionManager._cache` 引入 TTL/LRU 淘汰（已关闭，待对应 PR 合并） | 长运行网关内存泄漏缓解 |

> **进展小结**：今日合并 PR 覆盖 **Agent 核心循环、持久化层、跨平台兼容、通道韧性、资源管理、部署安全** 六大维度，项目整体向「生产级稳定性」再推进一大步。

---

## 4. 社区热点

| 对象 | 互动量 | 核心诉求 | 进展 |
|------|--------|----------|------|
| [#2343](https://github.com/HKUDS/nanobot/issues/2343) | 👍0 / 💬15 | `run_agent_loop` 未校验 `contextWindowTokens` 导致 32k 上下文溢出 | ✅ 已闭合，#4925 合并修复 |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | 👍0 / 💬5 | Ollama 每轮额外 60 s，因提示词前缀不固定导致缓存失效 | 🔄 讨论中，尚无 PR |
| [#4940](https://github.com/HKUDS/nanobot/issues/4940) | 👍0 / 💬1 | Legacy 文件名导致 `workspace_scope` 重启丢失 | ✅ #4977 已开 PR 修复 |
| [#4980](https://github.com/HKUDS/nanobot/issues/4980) | 👍0 / 💬0 | `GitStore` 跨工作目录初始化失败 | ✅ #4979 已开 PR 修复 |
| [#4975](https://github.com/HKUDS/nanobot/issues/4975) | 👍0 / 💬0 | Windows 非 UTF-8 Locale 下 CLI 子进程 UTF-8 输出解码报错 | ✅ #4976 已开 PR 修复 |

> **洞察**：用户痛点高度集中在 **「本地模型推理延迟」「跨平台编码」「会话/记忆持久化一致性」**，维护团队呈现「Issue 即 PR」的极速响应模式。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 现象 | Fix PR 状态 |
|--------|-------|------|-------------|
| **P0/Crash** | [#4980](https://github.com/HKUDS/nanobot/issues/4980) | `GitStore` 相对路径传给 Dulwich 导致初始化/自动提交失败 | [#4979](https://github.com/HKUDS/nanobot/pull/4979) Open |
| **P0/Crash** | [#4975](https://github.com/HKUDS/nanobot/issues/4975) | Windows CP936 下 `subprocess.run(text=True)` 解码 UTF-8 抛 `UnicodeDecodeError` | [#4976](https://github.com/HKUDS/nanobot/pull/4976) Open |
| **P1/数据丢失** | [#4940](https://github.com/HKUDS/nanobot/issues/4940) | Legacy 会话文件重启后 `workspace_scope` 静默丢失 | [#4977](https://github.com/HKUDS/nanobot/pull/4977) Open |
| **P1/死循环** | [#4981](https://github.com/HKUDS/nanobot/pull/4981) / [#4982](https://github.com/HKUDS/nanobot/pull/4982) | Telegram/Feishu 分片 `max_len<=0` 导致无限循环 | PR Open |
| **P1/类型崩溃** | [#4983](https://github.com/HKUDS/nanobot/pull/4983) / [#4985](https://github.com/HKUDS/nanobot/pull/4985) / [#4986](https://github.com/HKUDS/nanobot/pull/4986) | JSON `null`/字符串 ms 字段进 `int()` 抛 `TypeError` 触发存储隔离 | PR Open |
| **P1/配置损坏** | [#4984](https://github.com/HKUDS/nanobot/pull/4984) | 原地写入 `config.json` 崩溃中断留截断文件 | PR Open |
| **P2/资源泄漏** | [#4786](https://github.com/HKUDS/nanobot/issues/4786) | `SessionManager._cache` 无界增长 | Issue Closed，待 PR |
| **P2/安全** | [#4886](https://github.com/HKUDS/nanobot/issues/4886) | Docker Compose 特权过高 | Issue Closed，待 PR |

> **整体**：**零未修复 P0**，所有 P1 均在 24 h 内挂载 Fix PR，显示极强的稳定性保障能力。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 相关 PR/动向 | 入版本概率 |
|------|------|--------------|------------|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | 保持提示词精确前缀以启用 Ollama/KV 缓存 | 讨论中，涉及 `PromptTemplate` 与 `ChatHistory` 渲染管线 | 🟡 中（需权衡提示词注入灵活性） |
| [#4942](https://github.com/HKUDS/nanobot/pull/4942) | Agent 管理会话级 Local Trigger（创建/列出/启停/删除） | PR Open，含 `local_trigger` 工具 + 技能 + UI | 🟢 高（已实现完整交互闭环） |
| [#4854](https://github.com/HKUDS/nanobot/pull/4854) | Exec 可选 RTK 命令重写器（沙箱前重写） | PR Open，含配置 `tools.exec.rtk` | 🟡 中（需安全审计） |
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) | WebUI 统一单行活动语言，覆盖全部工具类型 | PR Open，重构前端渲染管线 | 🟢 高（纯前端体验提升） |
| [#4626](https://github.com/HKUDS/nanobot/pull/4626) | 可选急切记忆合并（Eager Consolidation） | 已合并，默认关闭 | 🟢 已入主分支 |
| [#4624](https://github.com/HKUDS/nanobot/pull/4624) | 子代理聚合结果模式 | 已合并 | 🟢 已入主分支 |

> **路线图推测**：下一版本（v0.13.x）大概率包含 **Local Trigger、WebUI 活动流、Eager Consolidation、Subagent Aggregated Mode** 四大用户可见特性，配套 **原子配置、空值硬化、跨平台编码、容器安全** 等基建加固。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点 | 正向反馈 | 典型引用 |
|------|------|----------|----------|
| **本地大模型** | Ollama 每轮 +60 s，32 GB VRAM 下不可用 | — | “totally unusable with Ollama and 32 GB of VRAM” (#4867) |
| **Windows 开发** | CLI 工具 UTF-8 输出在中文系统直接炸进程 | — | “UnicodeDecodeError in subprocess's reader thread” (#4975) |
| **多项目切换** | 重启后 WebUI 侧边栏项目路径丢失，需手动重选 | — | “workspace_scope metadata is silently lost after restarting” (#4940) |
| **长会话** | 上下文窗口溢出报 400，无自动截断机制 | — | “requested 36748 tokens … maximum context length is 32768” (#2343) |
| **生产部署** | Docker Compose 默认特权过高，合规审计不通过 | — | “grants SYS_ADMIN and disables both AppArmor and seccomp” (#4886) |
| **记忆演进** | 期望事实归档可溯源、可修正、去重 | Eager Consolidation / Provenance PR 已合并 | “skip duplicate facts and recognize corrections earlier” (#4621) |

> **关键洞察**：用户多为 **「自建网关 + 本地模型 + 多项目并行 + Windows/Linux 混合环境」** 的重度开发者，对 **延迟、编码、持久化一

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-19

---

## 1. 今日速览

**整体状态：高活跃度维护期，核心稳定性修复密集落地，多平台适配与架构重构并行推进。**  

- **Issues**：过去 24h 共 50 条更新（18 个新开/活跃，32 个关闭），关闭率 64%，显示维护团队正在集中清理积压缺陷。  
- **PRs**：50 条更新（44 个待合并，6 个已合并/关闭），合并的 6 个 PR 均为 **P1/P2 级修复**，覆盖 Telegram 网关死锁、会话持久化、语音消息去重、xAI OAuth 多实例冲突、Feishu 代理兼容、桌面端推理内容渲染崩溃等关键路径。  
- **无新版本发布**，但已合并修复将随下一次 `main` 分支构建交付。  
- **社区热点**集中在：Windows 桌面端启动崩溃（长期未决）、多模型视觉路由逻辑、MCP 工具注册恢复、配置热重载失效、技能索引自动化失效。  
- **项目健康度**：🟢 **良性**——核心回归已有修复入主干，大型架构 PR（单网关多 Agent、Slack 命名空间、技能 GC）正在评审，技术债偿还与功能演进并行。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 影响范围 | 核心变更 | 关联 Issue |
|----|------|----------|----------|------------|
| [#67241](https://github.com/NousResearch/hermes-agent/pull/67241) | **Bug Fix (P1)** | `comp/gateway`, `platform/telegram` | **Telegram 网关“沉默死锁”修复**：引入无因看门狗 + 有界排队，解决重连阶梯卡在中途导致进程存活但零消费、systemd `Restart=always` 不触发的根因。 | [#66377](https://github.com/NousResearch/hermes-agent/issues/66377) |
| [#67248](https://github.com/NousResearch/hermes-agent/pull/67248) / [#61519](https://github.com/NousResearch/hermes-agent/pull/61519) | **Bug Fix (P2)** | `comp/gateway`, `platform/telegram`, `tool/tts` | **语音中断去重**：统一 STT 判断谓词，跨路径缓存语音转录结果，消除中断场景下的重复转录。 | [#61455](https://github.com/NousResearch/hermes-agent/issues/61455) |
| [#66984](https://github.com/NousResearch/hermes-agent/pull/66984) / [#67240](https://github.com/NousResearch/hermes-agent/pull/67240) | **Bug Fix (P1)** | `comp/agent` | **会话持久化补全**：当轮次尾部为纯 `tool_calls` 行时，仍将 `final_response` 写入 transcript，修复 SQLite 耐久性回归。 | — |
| [#67243](https://github.com/NousResearch/hermes-agent/pull/67243) | **Feature / Security (P2)** | `comp/agent`, `comp/cli`, `provider/xai`, `area/auth` | **xAI OAuth 多实例共享存储**：引入可选规范化存储，解决单用刷新令牌导致的多 Profile 互踢 `invalid_grant` 问题。 | [#65394](https://github.com/NousResearch/hermes-agent/issues/65394) |
| [#67250](https://github.com/NousResearch/hermes-agent/pull/67250) | **Bug Fix (P2)** | `platform/feishu` | **Feishu WS 事件通道 SOCKS 代理兼容**：修复 Windows 系统代理含 SOCKS 条目时 `websockets>=14` 自动探测导致的全量消息丢失。 | [#67244](https://github.com/NousResearch/hermes-agent/issues/67244) |
| [#67251](https://github.com/NousResearch/hermes-agent/pull/67251) | **Bug Fix (P0)** | `comp/desktop` | **桌面端推理内容渲染崩溃 + Py39 兼容**：生产构建下 `ReasoningContent` 无限递归，加深度守卫与兼容性补丁。 | — |

> **进展小结**：6 个合并 PR 全部落在 **会话可靠性、网关存活、多实例隔离、跨平台兼容** 四大支柱，单日修复密度远超日均水平，说明 `main` 分支正在为下一版稳定发布扫清障碍。

---

## 4. 社区热点（评论/互动最多的 Issues & PRs）

| 排名 | Item | 状态 | 评论数 | 核心诉求 / 讨论焦点 |
|------|------|------|--------|---------------------|
| 1 | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | **CLOSED** | 10 | **Windows 11 桌面端启动即崩 (0x80000003)** —— 长期顽疾，涉及 Electron 40.9.3 / AMD Ryzen 7 9800X3D / RX 6800 XT，多次复现未根因，社区期待原生修复而非规避。 |
| 2 | [#66829](https://github.com/NousResearch/hermes-agent/issues/66829) | **OPEN** | 7 | **视觉模型路由逻辑错误**：配置了辅助视觉模型后，*即使主模型原生支持 vision* 也强制走辅助预处理，导致主模型仅收到文本描述。用户要求“能力感知路由”。 |
| 3 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **OPEN** | 6 | **技能索引自动化退化**：cron 任务 29.8h 未跑通（阈值 26h），文档站 `/docs/skills` 数据陈旧。暴露 CI 监控盲区。 |
| 4 | [#66950](https://github.com/NousResearch/hermes-agent/issues/66950) | **CLOSED** | 5 | **Identity/Memory 加载正常但规则执行概率性失效**：`SOUL.md` 等文件可读，但模型反复违规；默认 `soul-guard` 编辑保护形同虚设。触及 Agent 记忆与约束机制可信度。 |
| 5 | [#67233](https://github.com/NousResearch/hermes-agent/issues/67233) | **CLOSED** | 4 | **Telegram 网关无法发送图片给 LLM**：同模型在 openclaw 可用，Hermes 报缺 `vision_analyze` 或误判真伪。已由 #67241 等修复关联。 |
| 6 | [#67120](https://github.com/NousResearch/hermes-agent/issues/67120) | **OPEN** | 3 | **配置热重载失效**：`hermes update` 后，SSH/配置文件修改默认模型不再传播到活跃 Telegram 网关会话，需手动重启。会话状态隔离回归。 |
| 7 | [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) | **OPEN** | 3 | **MCP 停放服务器复活后工具未重注册**：重连成功但工具注册表未更新，导致工具永久消失。 |
| 8 | [#67242](https://github.com/NousResearch/hermes-agent/pull/67242) | **OPEN** | — | **技能元数据 + GC 路径**（大型特性 PR）：为 `SKILL.md` 增加 `created_at`/`updated_at`/`expires_at`/`ttl_days`，并提供归档过期技能的 GC 动作。引发“安全边界/兼容性/爆炸半径”三重扫帚标签，讨论激烈。 |

> **信号解读**：  
> - **Windows 桌面稳定性**（#38216、#66994、#67159）仍是用户痛点 TOP 1，且多为“安装/启动/渲染”链路，阻碍新用户留存。  
> - **多模型能力感知路由**（#66829、#66860）呼声高，暗示社区已大规模使用混合模型部署。  
> - **会话/网关状态一致性**（#67120、#67083、#66377）在近期更新后出现多起回归，需建立集成测试防护。  
> - **技能生态自动化**（#66616、#67242）正从“文档同步”向“生命周期治理”演进。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 状态 | 已有 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 (阻塞/崩溃)** | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) Windows 桌面启动崩溃 | CLOSED | 无（标记 `sweeper:risk-platform-windows`） | 根因未公开，疑似 Electron/原生模块交互，需原厂介入 |
| **P0** | [#67251](https://github.com/NousResearch/hermes-agent/pull/67251) 桌面端推理内容渲染无限递归 | **MERGED** | #67251 | 生产构建特有，已入主干 |
| **P1 (核心功能失效)** | [#66377](https://github.com/NousResearch/hermes-agent/issues/66377) Telegram 网关沉默死锁 | CLOSED | [#67241](https://github.com/NousResearch/hermes-agent/pull/67241) | 已修复并合并 |
| **P1** | [#66984](https://github.com/NousResearch/hermes-agent/issues/66984) / [#67240](https://github.com/NousResearch/hermes-agent/issues/67240) 会话持久化缺口 | CLOSED | [#66984](https://github.com/NousResearch/hermes-agent/pull/66984) / [#67240](https://github.com/NousResearch/hermes-agent/pull/67240) | 双 PR 同步修复，已合并 |
| **P2 (主要功能受损)** | [#66829](https://github.com/NousResearch/hermes-agent/issues/66829) 视觉路由强制走辅助模型 | OPEN | 无 | 需重构 `vision_router` 逻辑 |
| **P2** | [#67120](https://github.com/NousResearch/hermes-agent/issues/67120) 配置热重载不传播到网关 | OPEN | 无 | 涉及 `gateway.agent_executor_workers` 等运行时状态 |
| **P2** | [#67187](

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-19

> **数据来源**：GitHub `sipeed/picoclaw` 仓库近 24 小时动态（Issues、PRs、Releases）  
> **统计口径**：2026-07-18 00:00 – 2026-07-19 23:59 (UTC)

---

## 1. 今日速览

- **整体活跃度**：**中等偏高**。过去 24 小时共产生 **4 个 Issue 更新**（2 新开/2 关闭）与 **12 个 PR 更新**（4 待合并/8 合并或关闭），无新版本发布。  
- **核心动向**：维护团队集中处理 **技术债与稳定性修复**（OAuth 刷新、WhatsApp 存在性、Go 版本升级、依赖更新），并推进 **Agent 协作总线**、**模型回退链**、**ARMv7 构建** 等中型特性。  
- **社区信号**：两个 **Stale 标记** 的老旧 PR（#3202、#3248）被重新激活讨论，说明维护者正在清理积压；新开 Issue #3265（DeltaChat 通道误报）与 #3264（SplitMessage 死循环）暴露出边缘场景下的稳定性隐患。  
- **健康度评估**：✅ CI 通过率高（Dependabot PR 全部关闭合并）；⚠️ 仍有 4 个 OPEN PR 停留 > 10 天，建议安排 Code Review 窗口。  
- **下一步关注**：修复 #3264 死循环、合并 #3241/3242（OAuth/WhatsApp 修复）、推进 #2937 Agent 协作总线进入可测试状态。

---

## 2. 版本发布

> **今日无新版本发布**（最近一次 Release 仍为更早版本）。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 对项目推进度的影响 | 链接 |
|----|------|----------|-------------------|------|
| **#3241** | 🐞 Bug Fix / 安全 | **OAuth 刷新逻辑重构**：OpenAI 走 JSON、Google 保持 Form、去除固定 `scope`、引入 30 s 乐观锁防竞态。 | 解决 #3239 反馈的多提供商不兼容与并发竞争，消除生产环境鉴权失败隐患。**高优先级落地**。 | [#3241](https://github.com/sipeed/picoclaw/pull/3241) |
| **#3242** | ✨ Feature | **WhatsApp 原生通道实现 `TypingCapable`**：发送 `composing`/`paused` 存在性，长回复每 10 s 刷新。 | 闭环 #3240，显著提升 WhatsApp 场景用户体验，**首个原生通道支持打字指示**。 | [#3242](https://github.com/sipeed/picoclaw/pull/3242) |
| **#3248** | 🔧 Chore / 安全 | **Go 1.25.11 → 1.25.12**：修复 `crypto/tls` (GO-2026-5856) 与 `os` (GO-2026-4970) 两个 stdlib 漏洞。 | 消除 CI `govulncheck` 告警，保持供应链安全合规。 | [#3248](https://github.com/sipeed/picoclaw/pull/3248) |
| **#3200** | ✨ Feature | **Web UI 新增可配置默认模型回退链**：拖拽排序、持久化至后端 API。 | 完善模型管理体验，为多模型策略落地提供交互入口。 | [#3200](https://github.com/sipeed/picoclaw/pull/3200) |
| **#3165** | 🐞 Bug Fix | **OpenAI 兼容层恢复 Seed XML 工具调用**：解析 `<seed:tool_call>`、流式抑制泄露。 | 修复 Volcengine Doubao 等厂商非标准流式输出导致的工具调用丢失。 | [#3165](https://github.com/sipeed/picoclaw/pull/3165) |
| **#3225** | ✨ Feature | **Agent 运行时参数覆盖**：`max_tokens`、摘要阈值、分割标记可在 `agents.list` 单独配置。 | 为多租户/多场景部署提供精细化调参能力。 | [#3225](https://github.com/sipeed/picoclaw/pull/3225) |
| **#3208 / #3211** | 🔧 Dependabot | `mautrix` 0.27→0.28.1、`eslint` 10.4→10.6 | 例行依赖升级，零破坏性变更。 | [#3208](https://github.com/sipeed/picoclaw/pull/3208) · [#3211](https://github.com/sipeed/picoclaw/pull/3211) |
| **#2937** | 🚀 Major Feature | **Agent Collaboration Bus（内部协作总线）**：邮箱、线程、权限感知投递。 | **里程碑级 PR**，奠定多 Agent 编排基础设施，仍在审查中（Stale 标记已移除）。 | [#2937](https://github.com/sipeed/picoclaw/pull/2937) |

> **合计**：8 个 PR 合并/关闭，覆盖 **鉴权安全、通道体验、供应链安全、模型策略、工具调用兼容、Agent 运行时、多 Agent 协作** 七大领域，项目向「生产级多 Agent 网关」目标显著迈进。

---

## 4. 社区热点（讨论最活跃/反应最多）

| Item | 类型 | 评论/👍 | 核心诉求 | 分析 |
|------|------|---------|----------|------|
| **#3239** | Issue (CLOSED) | 1 评论 / 0 👍 | OAuth 刷新请求在多提供商下语义不兼容且存在竞态 | 已由 #3241 修复并关闭，社区关注度低但**生产影响面广**，建议在 Changelog 显性标注。 |
| **#3240** | Issue (CLOSED) | 1 评论 / 0 👍 | WhatsApp 原生通道缺乏「正在输入」反馈 | 已由 #3242 闭环，**用户体验痛点**得到快速响应。 |
| **#3265** | Issue (OPEN) | 0 评论 / 0 👍 | 未配置 DeltaChat 却报错 `unknown type deltachat` | **新开阻塞性 Bug**，Gateway 启动失败，需尽快确认是否为注册表初始化顺序问题。 |
| **#3264** | Issue (OPEN) | 0 评论 / 0 👍 | `SplitMessage` 遇超大 fenced-code info string 死循环 | **数据损坏/服务挂起风险**，虽无评论但严重度高，建议标 `bug`+`high-severity` 并指派修复。 |
| **#3202** | PR (OPEN, stale) | 评论数未披露 / 0 👍 | `NormalizeAgentID` 去除首尾下划线以符合正则契约 | 长期搁置的边界修正，**影响路由一致性**，建议本周合并。 |
| **#3248** | PR (OPEN, stale) | 评论数未披露 / 0 👍 | 升级 Go 修复 stdlib 漏洞 | 安全合规刚需，**CI 已通过**，可直接合并。 |

> **趋势**：社区讨论多集中于 **Stale 标记的老牌 PR** 与 **新开阻塞性 Issue**，反映维护者正在「清理积压 + 应急止血」双线并行。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 影响范围 | 是否已有 Fix PR | 链接 |
|--------|-------|------|----------|----------------|------|
| **🔴 Critical** | #3264 | `SplitMessage` 死循环导致协程泄漏/CPU 100% | 所有使用 Markdown 分片的通道（Telegram、Slack、Matrix 等） | ❌ 无 | [#3264](https://github.com/sipeed/picoclaw/issues/3264) |
| **🟠 High** | #3265 | Gateway 启动即崩溃：`channel deltachat has unknown type` | 任何未显式配置 DeltaChat 的部署 | ❌ 无 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) |
| **🟡 Medium** | #3239 | OAuth 刷新并发竞态 + OpenAI JSON 语义不匹配 | 多提供商混合部署、高并发鉴权场景 | ✅ #3241 (已合并) | [#3239](https://github.com/sipeed/picoclaw/issues/3239) |
| **🟢 Low** | #3202 | ID 归一化保留首尾 `_` 导致路由正则不匹配 | 自定义 Agent/Account ID 包含下划线的用户 | ❌ 无（PR 待审） | [#3202](https://github.com/sipeed/picoclaw/pull/3202) |

> **建议**：立即安排人员复现 #3264 与 #3265，若无现成 Fix 请在 24 h 内输出 Hotfix 分支。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/进展 | 纳入下一版本可能性 | 备注 |
|------|----------|--------------|-------------------|------|
| #3200 (PR) | Web UI 可视化配置模型默认回退链 | 已合并 | ✅ **已落地** | 为「模型网关」能力补齐关键交互 |
| #3225 (PR) | Agent 级运行时参数覆盖 | 已合并 | ✅ **已落地** | 多租户场景刚需 |
| #2937 (PR) | Agent Collaboration Bus（邮箱/线程/权限） | 审查中，Stale 移除 | 🟡 **大概率** | 架构级特性，需完整测试矩阵，预计 v0.12+ 合并 |
| #3193 (PR) | 新增 Simplex 通道类型 | OPEN > 20 天 | 🟡 **可能** | 依赖通道注册表重构，若 #2937 先行则顺带合并 |
| #3205 (PR) | 9router 兼容 + Linux ARMv7 构建目标 | OPEN > 15 天 | 🟢 **较大** | 边缘硬件支持，维护者近期活跃于 ARM 构建 |
| Issue 暂无 | 用户期望 **Discord/Slack 线程级上下文隔离** | 无对应 PR | ⚪ **远期** | 需配合 Collaboration Bus 设计 |

> **路线图推演**：v0.11 将聚焦 **稳定性收敛（#3264/3265）+ ARMv7 发布 + 回退链 UI**；v0.12 冲刺 **Agent Collaboration Bus** 与 **Simplex/9router** 通道生态。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点/场景 | 典型引述/推断 | 满意度倾向 |
|-----------|----------------|------------|
| **WhatsApp 回复无反馈** | “处理耗时几秒时用户以为机器人挂了” (#3240) | ❌ 不满 → ✅ #3242 已修 |
| **OAuth 刷新随机失败** | “OpenAI 报 400，Google 正常，高峰期更明显” (#3239) | ❌ 不满 → ✅ #3241 已修 |
| **网关莫名其妙不启动** | “明明没配 DeltaChat 却报错” (#3265) | ❌ 阻塞 → ⏳ 待修 |
| **长代码块发送卡死** | “粘贴大段 Markdown 后 Bot 无响应” (#3264 隐性) | ❌ 严重 → ⏳ 待修 |
| **ARM 设备无法直接跑** | “树莓派 3B+ 只能自己交叉编译” (#3205) | ⚠️ 期待 → 🟢 PR 推进中 |

> **整体情绪**：核心功能修复响应快（OAuth/WhatsApp 同日闭环），但 **边缘场景稳定性**（启动校验、分片算法）仍存信任赤字。

---

## 8. 待处理积压（> 14 天未响应的重要 Item）

| Item | 类型 | 停留天数 | 关键原因 | 建议动作 | 链接 |
|------|------|----------|----------|----------|------|
| **#3193** | PR (New Feature) | 22 天 | Simplex 通道新增，需通道注册表 Review | 指派通道维护者本周完成 Review/合并 | [#3193](https://github.com/sipeed/picoclaw/pull/3193) |
| **#3205** | PR (Feature + Build) | 17 天 | 9router 兼容 + ARMv7，硬件生态扩展 | CI 通过后合并，同步更新 Release Assets | [#3205](https://github.com/sipeed/picoclaw/pull/3205) |
| **#3202** | PR (Bug Fix) | 18 天 | ID 归一化边界修正，测试覆盖已补全 | **优先合并**，消除路由隐患 | [#3202](https://github.com/sipeed/picoclaw/pull/3202) |
| **#3248** | PR (Security) | 9 天 | Go 版本升级修复漏洞，CI 绿 | **立即合并**，安全合规零理由拖延 | [#3248](https://github.com/sipeed/picoclaw/pull/3248) |
| **#

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-19

> **数据基准**：GitHub API 数据快照（过去 24h Issues: 18 条，PRs: 26 条，Releases: 0 个）

---

## 1. 今日速览

*   **高强度收尾冲刺**：过去 24 小时内共关闭 **16 个 Issues** 与 **17 个 PRs**，呈现典型的“版本前清理积压”特征，核心维护者与机器人（如 `kenansun-dev-bot[bot]`）协同处理历史遗留工单。
*   **零新版本发布**：尽管合并活跃，但无 Release 产出，推测合并内容多为修复、工程化改进及安全补丁，积累至下一版本（可能为 v2.0.50+）统一发布。
*   **安全修复优先级最高**：PR #3065 修复循环回调 Webhook 认证缺失（GHSA-h9g4-589h-68xv），属 CWE-306 类漏洞，已开 PR 待合并，体现项目对供应链/本地提权风险的快速响应。
*   **WhatsApp 适配器持续迭代**：针对 `engage_mode=mention` 失效（#3085/#3087）、媒体下载失败静默丢包（#2894）、发送前校验缺失（#3086）三大痛点同步推进修复，适配器稳定性显著增强。
*   **架构债务偿还**：容器运行时源码同步机制（#2784）、会话解析锚定（#3078）、定时任务跨会话可见性（#3068）等核心基础设施问题获修复，技术债偿还力度大。

**活跃度评级**：🟢 **高**（合并/关闭比 1.06:1，核心模块并行推进，无阻塞性争议）

---

## 2. 版本发布

> **今日无新版本发布**。当前合并内容将汇入下一版本迭代，建议关注 `main` 分支 CHANGELOG 变更。

---

## 3. 项目进展：核心合并/关闭 PR 深度解析

| PR | 类型 | 核心变更 | 影响模块 | 进展意义 |
| :--- | :--- | :--- | :--- | :--- |
| **[#3077](https://github.com/nanocoai/nanoclaw/pull/3077)** | **Fix (Critical)** | 修复 `rate_limit_event` 误判：仅在 `status=rejected` 时终止，区分 `rate_limit` 与 `quota`；解决正常轮次被误报为配额错误导致健康检查失败。 | `src/claude.ts` (Agent Runner) | **高**：直接修复 #3016 导致的大量误报告警与健康检查误杀，恢复生产环境稳定性。 |
| **[#2496](https://github.com/nanocoai/nanoclaw/pull/2496)** | **Fix (Data Loss)** | `writeOutboundDirect` 以只读模式打开 DB 导致命令网关拒绝响应静默丢失（`SQLITE_READONLY`），改为写模式打开。 | `src/session-manager.ts` | **高**：修复命令管控反馈链路断裂，用户端将不再收不到拒绝通知。 |
| **[#3084](https://github.com/nanocoai/nanoclaw/pull/3084)** | **Chore (Test)** | 清理 `/clear-abort` 集成测试中的临时诊断代码（检查点日志、500ms 轮询），恢复 CI 时间预算真实性。 | `tests/integration` | **中**：消除测试脆弱性，防止误判合并阻塞。 |
| **[#2314](https://github.com/nanocoai/nanoclaw/pull/2314)** | **Fix (Docs/UX)** | iMessage 卡片跳转链接修正：`photon.im` (域名待售) → `photon.codes` (官网)。 | `setup/iMessage` | **低**：品牌信任度修复，避免用户跳转至垃圾页。 |
| **[#2702](https://github.com/nanocoai/nanoclaw/pull/2702)** | **Fix (Arch)** | Slack 适配器强制切换至 **Socket Mode**，移除对公网 Webhook URL 的强依赖，统一代码库部署模式。 | `src/channels/slack.ts` | **中**：降低非技术用户部署门槛，修复长期架构不一致问题。 |
| **[#2296, #2299, #2303, #2304, #2305](https://github.com/nanocoai/nanoclaw/pull/2296)** | **Feat/UX (Setup)** | Slack 安装向导 5 连击重构：分卡标识 Part 1/2、提示语言通俗化、Token 粘贴顺序对齐、成员 ID 回退查找、Stage 2 增加确认回退。 | `setup/slack` | **高**：系统性解决非技术用户在 Slack 接入流程 5 分钟+ 的流失痛点。 |
| **[#1267, #1212, #1185, #1100](https://github.com/nanocoai/nanoclaw/pull/1267)** | **Fix (Proxy)** | 凭证代理统一修复：保留 `ANTHROPIC_BASE_URL` 的 `pathname` 前缀（如 `/api/anthropic`），兼容 MiniMax/Z.ai 等第三方兼容层。 | `credential-proxy` | **中**：解决代理模式下 404 顽疾，统一合并 4 个重复 PR，治理碎片化贡献。 |

> **整体推进量**：核心修复 8 个，工程化/测试 3 个，Setup UX 5 个，代理兼容 4 个（去重后为 1 个实质修复）。**主线推进约 17 个实质变更**，聚焦稳定性与易用性。

---

## 4. 社区热点：高互动/高关注议题

| 对象 | 互动指标 | 核心诉求 | 分析 |
| :--- | :--- | :--- | :--- |
| **[Issue #3085](https://github.com/nanocoai/nanoclaw/issues/3085)**<br>WhatsApp `engage_mode=mention` 仅对自动完成生效，手输 `@name` 失效 | 💬 1 评论 / 👍 0 / **关联 PR #3087** | **一致性体验缺失**：用户期望手动输入 `@AgentName` 与点击提及胶囊等价触发，现状导致“累积模式”下消息被吞噬且无感知。 | **高频实战痛点**：群聊场景下用户多为手输，当前实现依赖 Baileys 解析的 `mentionedJid` 字段，手输文本不触发该字段填充。PR #3087 正通过正则兜底修复。 |
| **[Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016)**<br>所有 `rate_limit_event` 均记录为配额错误（含 `allowed` 状态） | 💬 3 评论 / 👍 0 / **已由 #3077 修复** | **观测噪音干扰**：一周 82 次误报污染日志与告警，掩盖真实配额耗尽信号。 | **已闭环**：SDK 遥测语义被误解，修复后仅 `rejected` 触发终止，`allowed` 仅作指标记录。 |
| **[Issue #2482 / #1981](https://github.com/nanocoai/nanoclaw/issues/2482)**<br>Setup 向导在 `su -` / SSH 无头环境误判 systemd 缺失 | 💬 3/1 评论 / 👍 0 | **环境检测鲁棒性**：`systemctl --user` 在非登录 Shell / 无 `XDG_RUNTIME_DIR` 时失效，导致回退到 `nohup` 降级方案。 | **长尾环境兼容**：影响 LXC/容器/SSH 部署场景，#2482 已关闭（可能合并修复），#1981 仍开放需回归验证。 |
| **[Issue #2395](https://github.com/nanocoai/nanoclaw/issues/2395)**<br>`ncl groups config` 缺失 `add-mount/remove-mount` 子命令 | 💬 1 评论 / 👍 **1** | **CLI 与 DB 迁移不同步**：容器配置从 FS 迁至 SQLite (`container_configs` 表) 后，CLI 未同步挂载管理能力。 | **运维工具链滞后**：👍 数虽少但直指生产运维缺口，需补齐 CRUD 完整性。 |

---

## 5. Bug 与稳定性：今日报告/修复矩阵

| 严重度 | Issue | 标题 | 状态 | 关联 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (安全)** | - | 循环回调 Webhook 缺认证 (GHSA-h9g4-589h-68xv) | **Open** | **[#3065](https://github.com/nanocoai/nanoclaw/pull/3065)** | CWE-306，同宿主机非特权进程可伪造动作，**建议尽快合并并回溯补丁**。 |
| **🟠 High (数据丢失)** | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) | `send_message` 去重在 60s 内静默丢弃响应 | **Closed** | 隐含于 #3077/会话锚定修复 | 双轮次 <60s 或流式中插消息导致响应丢包、客户端超时。 |
| **🟠 High (功能失效)** | [#2496](https://github.com/nanocoai/nanoclaw/issues/2496) | 命令网关拒绝响应静默失败 (Readonly DB) | **Closed** | **[#2496](https://github.com/nanocoai/nanoclaw/pull/2496)** | 已合并，写模式打开 DB 修复。 |
| **🟡 Medium (适配器)** | [#2894](https://github.com/nanocoai/nanoclaw/issues/2894) | WhatsApp 入站媒体 CDN 失败静默丢包 | **Closed** | 待追踪 | 缺失 `reuploadRequest` 重试兜底，媒体类消息体验断层。 |
| **🟡 Medium (适配器)** | [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) | WhatsApp 手输 `@mention` 不触发 | **Open** | **[#3087](https://github.com/nanocoai/nanoclaw/pull/3087)** | 正则兜底方案审查中。 |
| **🟡 Medium (适配器)** | [#3086](https://github.com/nanocoai/nanoclaw/issues/3086) | 发送前不校验接收者存在性 | **Closed** | **[#3086](https://github.com/nanocoai/nanoclaw/pull/3086)** | 已合并，发送前 `onWhatsApp` 校验 JID 有效性。 |
| **🟢 Low (工程化)** | [#2784](https://github.com/nanocoai/nanoclaw/issues/2784) | 容器运行时仅监听 `index.ts` 变更 | **Closed** | 待追踪 | 需监听 `ipc-mcp-stdio.ts` 等入口文件，防止热更新失效。 |
| **🟢 Low (观测)** | [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) | 正常轮次误报配额错误 | **Closed** | **[#3077](https://github.com/nanocoai/nanoclaw/pull/3077)** | 已合并，语义修正。 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 现有 PR/实现进度 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **[#1681](https://github.com/nanocoai/nanoclaw/issues/1681) / [#1679](https://github.com/nanocoai/nanoclaw/issues/1679)** | **关键词路由预选模型** (零成本，预 LLM 调用) | **Closed** (无关联 PR，可能已由其他机制替代或搁置) | 🟡 中 | 重复提交，需求真实（Code→Sonnet, Research→Gemini），但实现优先级低于稳定性。 |
| **[#2397](https://github.com/nanocoai/nanoclaw/issues/2397)** | **定时任务顶层 CLI** (`ncl task list/run/pause/cancel`) | **Closed** (无 PR) | 🟢 高 | 任务为一等公民却无 CLI，运维刚需，**极大概率纳入下版本**。 |
| **[#2395](https://github.com/nanocoai/nanoclaw/issues/2395)** | `ncl groups config add-mount/remove-mount` | **Closed** (无 PR) | 🟢 高 | 补齐 DB 迁移后的 CLI 功能对等，阻塞容器化运维。 |
| **[#2971](https://github.com/nanocoai/nanoclaw/pull/2971)** | **`ncc` 运维健康 CLI Skill** (Utility Skill) | **Open PR** | 🟢 高 | 已按规范提交 Skill，无源码改动，审查通过即可发布，**强信号**。 |
| **[#3068](https://github.com/nanocoai/nanoclaw/pull/3068)** | 定时任务跨会话可见性修复 | **Open PR** | 🟢 高 | 修复 #2992，核心逻辑修正，配合 CLI 发布。 |

---

## 7. 用户反馈摘要：真实痛点与场景

1.  **部署环境碎片化严重**：
    *   *Proxmox LXC / Debian 13 / `su -` / SSH 无头*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-07-19

---

## 1. 今日速览
- **整体活跃度：极低** —— 过去 24 小时无新增 PR、无版本发布，仅有 1 条长期悬而未决的 Issue（#868）在评论区维持低频讨论。
- **核心阻塞点：** Android/Termux (aarch64) 下 `zig build` 链接阶段失败，导致该平台用户无法从源码构建最新版本。
- **社区响应：** Issue #868 已跟踪 88 天（自 2026-04-23 创建），虽有 7 条评论但尚无维护者给出明确修复计划或 Workaround，反映维护带宽在移动端构建链上的不足。
- **代码库状态：** 无合并提交，主分支未见新进展；项目处于“维护期/缓慢迭代”阶段。
- **健康度评估：** ⚠️ **需关注** —— 单一平台构建阻塞未解，且缺乏 PR 流入，建议维护者优先排查 Zig 0.16.0 兼容性或文档化规避方案。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。最近发布版本为 `v2026.4.17`（Issue #868 所述环境版本）。

---

## 3. 项目进展
> 过去 24 小时 **无 PR 合并/关闭**，代码库无实质性前进。  
> 累计停滞天数：主分支近期无提交记录（依赖 Issue 侧写推测）。

---

## 4. 社区热点
| 排名 | Issue/PR | 标题 | 评论数 | 👍 | 最近更新 | 核心诉求 |
|------|----------|------|--------|-----|----------|----------|
| 1 | [#868](https://github.com/nullclaw/nullclaw/issues/868) | **[bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat** | 7 | 0 | 2026-07-18 | 用户在 Termux (Zig 0.16.0) 下构建遭遇 `AccessDenied` 链接错误，期望官方给出修复或交叉编译指引。 |

**分析：**  
- 该 Issue 为**唯一活跃讨论点**，跨度近 3 个月，评论多为用户补充环境细节、尝试不同 Zig 版本、尝试 `zig build --verbose` 排查。  
- 无维护者回复，说明该平台非优先级或缺乏 aarch64 Android 设备复现。  
- 潜在风险：Termux 用户群体虽小，但属“高粘性开发者”，长期不修可能流失种子用户。

---

## 5. Bug 与稳定性
| 严重度 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **High (阻塞构建)** | [#868](https://github.com/nullclaw/nullclaw/issues/868) | `error: failed to link temporary file into '.zig-cache/.../options.zig': AccessDenied` | Android/Termux aarch64 全版本 (Zig 0.16.0) | ❌ 无 |

**技术细节：**  
- 错误发生在链接临时文件阶段 (`linkat` 系统调用返回 `EACCES`)，疑似 Termux 沙箱权限限制或 Zig 0.16.0 临时文件路径处理回归。  
- 用户尝试 `zig 0.15.1`、`zig 0.17.0-dev` 均未成功，提示问题可能在 nullclaw 的 `build.zig` 对 Android target 的特殊处理上。

---

## 6. 功能请求与路线图信号
> 过去 24 小时无新增功能请求。  
> 结合 #868 讨论，**隐性需求**为：  
> 1. 提供 **预编译 aarch64-android 制品**（GitHub Releases）规避本地构建。  
> 2. 在 README/CI 中明确 **支持矩阵**（Zig 版本 × Target OS/Arch）。  
> 3. 若维护者无 Android 设备，考虑引入 **社区维护的交叉编译 CI**（如 `zig build --target aarch64-linux-android` 在 GitHub Actions 模拟器跑测）。

---

## 7. 用户反馈摘要
从 #868 评论提炼：
| 维度 | 代表性声音 |
|------|------------|
| **痛点** | “无法在手机上自建最新版，只能停留在旧二进制”；“Termux 环境下权限受限，无法手动修补链接步骤”。 |
| **使用场景** | 移动端离线开发、嵌入式设备调试、Termux 作为主力终端的极客用户。 |
| **满意度** | 对核心功能无抱怨，**仅因构建链断裂导致无法升级**；若提供预编译包将立即转为满意。 |
| **建议** | 多用户呼吁 “Release 页挂上 android-aarch64 tarball” 或 “文档补充 `zig build -Dtarget=aarch64-linux-android` 交叉编译示例”。 |

---

## 8. 待处理积压 ⚠️
| 条目 | 类型 | 搁置时长 | 优先级建议 | 备注 |
|------|------|----------|------------|------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | Bug (构建阻塞) | **88 天** | **P0** | 仅存活跃 Issue，建议本周内：<br>1. 复现或确认为 Zig/Termux 上游问题；<br>2. 给出 Workaround（交叉编译/降级 Zig/预编译包）；<br>3. 如无带宽，标记 `help wanted` 吸引社区贡献。 |

---

> **下一步行动建议**  
> 1. **维护者**：在 #868 置顶回复“当前状态/预计排期”，避免用户重复试错。  
> 2. **CI 侧**：在 `.github/workflows` 增加 `aarch64-linux-android` 目标的 `zig build --verify` 步骤，锁定最低兼容 Zig 版本。  
> 3. **Release 侧**：下次发布附带 `nullclaw-aarch64-android.tar.gz`，彻底解决移动端用户“可用性断层”。

---  
*数据来源：GitHub API（Issues/PRs/Releases），统计窗口 2026-07-18 00:00 – 23:59 UTC*  
*报告生成时间：2026-07-19 06:00 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-19

---

## 1. 今日速览
- **核心动态**：项目处于 **“Reborn” 架构重构的深度攻坚期**，过去 24 小时合并/关闭 30 个 PR，主力集中在能力系统重构（CapabilityOutcome → Resolution 映射、授权折叠 `authorize()`、调度器 `RuntimeLane` 闭包化）、部署模式数据化、Host API 词表落地等“架构简化”里程碑任务。  
- **里程碑事件**：Issue **#6143** 已关闭，**Reborn 正式晋升为规范 `ironclaw` CLI**，旧版 v1 隔离为 `ironclaw-v1`，标志着多年重写进入“推广与收尾”阶段。  
- **安全隐患**：新增 **#6247** 揭露 MCP Server Header 中的 Bearer Token 以明文写入设置表与备份，属 **高危凭据泄露**，尚无修复 PR。  
- **社区诉求**：繁体中文（zh-TW）本地化（#6158）、MCP 扩展管理 API 对齐（#6249）、凭据预检（#6248）均为用户真实痛点，但暂缺人力跟进。  
- **整体健康度**：⭐⭐⭐⭐☆（核心重构高质量推进，但安全债与长尾本地化/生态对齐积压）。

---

## 2. 版本发布
> 今日无新版本发布。  
> 进行中的发布 PR **#5598**（`ironclaw_common` 0.5.0 破坏性变更、`ironclaw_skills` 0.4.0 破坏性变更）仍处于 **Open** 状态，建议维护者优先审核合并以解除下游阻塞。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR（按架构影响力排序）

| PR | 标题 | 影响面 | 进展说明 |
|----|------|--------|----------|
| **#6143** ✅ | **Promote Reborn to canonical `ironclaw` CLI** | 全项目交付物、用户入口 | **里程碑完成**：Reborn 成为默认 `ironclaw` 二进制，v1 更名 `ironclaw-v1` 孤立维护。 |
| **#6240** ✅ | `RuntimeAdapter dyn` → `RuntimeLane` 闭包枚举 | 能力热路径、分发性能 | 消除 trait-object 分发与 HashMap 查找，热路径零成本抽象。 |
| **#6239** ✅ | Extract `authorize()` delegating scaffold | 安全核心、能力调用链 | 将预分发授权逻辑剥离为独立 `authorize()`，为后续 `Resolution` 替换 `CapabilityOutcome` 铺路。 |
| **#6241** ✅ | Route `resume/auth-resume/spawn` through `authorize()` fold | 所有能力入口一致性 | 完成 W1c 切片，三大入口全部走统一授权折叠。 |
| **#6242** ✅ | `CapabilityOutcome → Resolution` mapping in `ironclaw_turns` | 结果侧词表迁移 | 纯增量映射落地，**不改变运行时行为**，为后续生产/消费侧切换做准备。 |
| **#6243** ✅ | Persistent `GateRecordStore` for result collapse | 网关记录持久化、断点续跑 | 引入 `GateRecord`/`DenyRecord` 可序列化存储，支撑 `Resolution` 引用不丢数据。 |
| **#6237** ✅ | Host API result-record vocabulary (`GateRecord`/`DenyRecord`) | 模型可见内容契约 | 定义“从记录渲染”契约（§5.2.9），填补 G1–G5 信息缺口。 |
| **#6235** ✅ | Deployment mode as config data (`DeploymentConfig`) | 部署拓扑、本地/云端统一 | 消除 `LocalDev*` 类型族，部署模式降为配置数据，简化内核类型系统。 |
| **#6236** ✅ | `SafeSummary` single definition in `host_api` | 安全摘要、去重 | 删除 turns/memory_native 两处重复实现，统一委托 `host_api::SafeSummary`。 |
| **#6234** ✅ | Delete dead `trust_decision` field | 请求负载瘦身 | 移除每跳必拷贝的死字段，减少序列化开销。 |
| **#6233** ✅ | Activate `Authorized` seal + `RuntimeLane::from_runtime_kind` | 授权封印、车道工厂 | Slice C W1a 预备步骤，类型安全构造 `RuntimeLane`。 |
| **#6238** ✅ | Capability-DTO-collapse ratchet test | 反回滚测试基建 | 冻结镜像 DTO 允许列表，强制类型数“先增后减”校验。 |
| **#6176** 🔄 | CI: validate Reborn release binaries across 7 targets | 发布质量、多平台 | 仅编译校验的预检流水线已就绪，等待 #6160 合并后启用。 |
| **#6188** 🔄 | CI: make release workflow Reborn compile-only | 发布流水线瘦身 | 旧 `cargo-dist`/WASM 任务硬禁用，保留回滚通道。 |

> **小结**：核心重构已推进至 **“授权折叠全覆盖 + 结果词表映射落地 + 持久化记录就绪”** 阶段，距离删除 `CapabilityOutcome` 仅剩生产/消费侧切换（§5.3 Stage 2+）与测试收口。

---

## 4. 社区热点 —— 讨论最活跃的 Issues/PRs

| 对象 | 评论/互动 | 核心诉求 | 分析 |
|------|-----------|----------|------|
| **#6158** [Issue] | 💬 **2 条评论** | **繁体中文（zh-TW）本地化** | WebUI v2 仅内置 zh-CN，导致繁体用户回退到简体/英文。贡献者 `PeterDaveHello` 已提供翻译资源，**缺乏维护者审核合并**。建议纳入下一版本 WebUI 资源包。 |
| **#6247** [Issue] | 👀 0 评论但 **安全等级最高** | **MCP Header Bearer Token 明文存储** | 设置表、备份、导出均含明文凭据，违反最小权限与加密存储最佳实践。**需立即评估加密存储方案或引入 Secret Manager**。 |
| **#6244** [PR] | 📦 **XL 风险中等** | **Agent-market 部署分支：线程级 MCP 会话 + PATCH 端点** | 携带 `kirikov/ironclaw` 部署分支完整同步主干，**涉及 MCP 会话隔离、SEP-414 上下文传播、程序化配置** 等生产级特性，审阅负担大，建议拆分小 PR 渐进合并。 |
| **#6254** [PR] | 📝 **XL 文档/架构** | **`host_api::Resolution` 非失真化（§5.3 Stage 1）** | 核心贡献者 `ilblackdragon` 推进架构简化文档落地，**纯词表扩展，零行为变更**，审阅风险低。 |

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 现象 | 修复状态 | 建议 |
|--------|----------|------|----------|------|
| **🔴 Critical** | **#6247** | MCP `headers` 含 `Authorization: Bearer …` 明文写入 `mcp_servers` 设置行（未加密 DB）、备份、导出、Worker 挂载 | **无修复 PR** | 1. 引入 `SecretString` 类型标记敏感字段 2. 存储层加密（SQLCipher / 环境变量注入）3. 导出/备份时脱敏或排除。 |
| **🟡 Medium** | #6248 (设计阻塞) | 凭据预检需 `auth_resume` 设计定稿 | 阻塞于设计评审 | 优先完成 `auth_resume` RFC，解除依赖链。 |
| **🟢 Low** | #6211 (已合并) | `channels list`/`hooks list`/`logs` 伪造成功输出 | ✅ **已修复**：改返回明确 “not implemented” 错误 | 无残留风险。 |

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 关联 PR/进展 | 纳入下一版本可能性 |
|------|------|--------------|---------------------|
| **#6158** | zh-TW 繁体中文 | 无 PR，仅翻译资源就绪 | **高** —— 仅需 WebUI 资源合并，无核心代码改动。 |
| **#6249** | Reborn: MCP 扩展管理 API 对齐（install/activate/PATCH） | 无 PR，v1 已有同等端点 | **中** —— 需在 `ironclaw-reborn` 补充路由与权限模型，工程量可控。 |
| **#6248** | 凭据预检（调用 `has_account`） | 阻塞于 `auth_resume` 设计 | **低/中** —— 依赖设计定稿，若近期定稿则可赶上下个小版本。 |
| **#6244** | 线程级 MCP 会话 + PATCH 端点 | 大型 PR 审阅中 | **中** —— 若拆分为“会话隔离”+“PATCH 端点”两步，首部分可优先合并。 |
| **架构简化文档** | 交互式架构探测器 + `architecture-diagram` skill | **#6253** (docs only) | **高** —— 纯文档/工具链，零风险，助力新贡献者上手。 |

---

## 7. 用户反馈摘要

| 来源 | 痛点/场景 | 原始声音（意译） | 满意度信号 |
|------|-----------|------------------|------------|
| **#6158** | 繁体用户无法选择母语界面 | “浏览器语言为 zh-TW 时，WebUI 回退到 zh-CN 或 English，体验割裂” | ⭐⭐☆☆☆（基础 i18n 缺失） |
| **#6247** | 安全审计失败 | “MCP Token 以明文出现在设置导出/备份中，无法通过合规扫描” | ⭐☆☆☆☆（严重信任受损） |
| **#6249** | 独立二进制缺乏扩展管理 API | “v1 有 `/api/extensions/install` 等，Reborn 无对应端点，无法编程化部署 MCP” | ⭐⭐⭐☆☆（生态对齐缺口） |
| **#6143 (closed)** | CLI 二进制命名混淆 | “期待 `ironclaw` 直接指向 Reborn，避免用户跑错版本” | ⭐⭐⭐⭐⭐（已解决，用户预期兑现） |

---

## 8. 待处理积压 —— 需维护者介入的长期项

| 对象 | 停滞时长 | 关键阻塞 | 建议行动 |
|------|----------|----------|----------|
| **#6158** (Issue) | 3 天 | 无人审核翻译 PR | 指派 i18n 维护者或核心成员 **

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-19

---

## 1. 今日速览
- **整体状态**：项目处于**维护与迭代并行期**。昨日发布了 `2026.7.17` 版本，主要交付了协作模式错误 UI 增强、服务部署数据持久化及皮肤功能更新；主分支有 1 个修复类 PR 待合并（会话重命名失败反馈），2 个长期搁置的功能 PR 被关闭。
- **活跃度评估**：**中低**。过去 24 小时无 Issue 关闭，6 条 Issue 均为 3 个多月前创建的“陈旧”标签，仅近期被更新（可能为批量清理或回溯测试）；PR 合并数为 0，新增 Open PR 仅 1 个。社区讨论热度低，核心维护者精力似集中在内部版本发布而非社区响应。
- **核心风险**：多个高优先级 Bug（长图解析崩溃、模型 Token 计算异常、MCP 自定义失效）长期未修复，且缺乏明确排期 PR，可能影响生产环境用户信心。

---

## 2. 版本发布
### 🚀 LobsterAI 2026.7.17 (Released 2026-07-17)
> **Release 链接**：[GitHub Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.17) | **关联 PR**：#2348, #2349

| 变更类型 | 核心内容 | 影响范围 | 迁移/注意事项 |
| :--- | :--- | :--- | :--- |
| **Feat (Cowork)** | 结构化展示运行失败详情于错误 UI | 协作模式/前端渲染 | 无破坏性变更，提升调试体验 |
| **Feat (Deployment)** | 服务部署数据持久化 | 后端服务/数据层 | **需关注数据库迁移脚本**，升级前建议备份部署配置 |
| **Feat (Skin)** | 皮肤系统更新 (日志截断，详见 PR) | 前端主题/样式 | 可能涉及 CSS 变量变更，自定义主题开发者需适配 |

> ⚠️ **提示**：Release Note 显示 "feat(skin): a..." 疑似截断，建议查看完整 Commit Log 或 PR #2349 确认完整变更。

---

## 3. 项目进展
### ✅ 已关闭/合并 PR (2 个，均为 Stale 关闭)
| PR | 标题 | 状态 | 核心价值 | 合并/关闭时间 |
| :--- | :--- | :--- | :--- | :--- |
| **#1353** | `feat(agent): Agent 技能选择器新增全选和清除功能` | **CLOSED (Stale)** | 显著提升 Agent 配置交互效率，涉及 `AgentSkillSelector.tsx` 与 i18n | 2026-07-18 |
| **#1464** | `fix(im): 添加实例名与凭证 ID 重复校验 (钉钉/飞书/QQ)` | **CLOSED (Stale)** | 解决多实例管理核心数据完整性问题，防止消息重复处理 | 2026-07-18 |

> **进展分析**：两个高价值 PR 均因 **Stale（长期无响应）** 被机器人/维护者关闭，而非代码审查不通过。这表明 **代码审查吞吐量不足**，优秀社区贡献未能及时入库，需建立 SLA 机制或引入更多 Reviewer。

### 🔄 待合并 PR (1 个)
| PR | 标题 | 作者 | 关联 Issue | 审查状态 |
| :--- | :--- | :--- | :--- | :--- |
| **#2358** | `fix(cowork): 会话重命名失败时显示用户反馈` | wangxu-dev | **Fixes #670** | Open, 待 Review |

- **进度信号**：修复了一个存在已久的交互盲区（Issue #670 创建于早期），属于“小而美”的体验补全，建议**优先合并**以释放维护者信号。

---

## 4. 社区热点
> 今日无高评论/高反应新 Issue。以下为**近期被更新的陈旧 Issue**，反映长尾痛点：

| Issue | 标题 | 👍/💬 | 核心诉求 | 状态分析 |
| :--- | :--- | :--- | :--- | :--- |
| **[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)** | 自定义 Studio HTTP MCP 无法使用 | 1 / 1 | **集成生态断层**：OpenClaw 引擎未同步自定义 MCP 配置，仅支持 SSE 协议 | **严重**：阻碍企业私有化部署集成，无对应 Fix PR |
| **[#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)** | 上传 3M 长图解析导致页面崩溃/整体不可用 | 0 / 1 | **稳定性红线**：大文件/多模态处理链路崩溃，且污染全局状态 | **Critical**：生产环境阻断性 Bug，无 Fix PR |
| **[#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)** | 模型测试通过但提示“输入内容过长” (仅两字) | 0 / 1 | **Token 计算逻辑异常**：上下文窗口估算严重偏差 | **High**：核心对话功能不可用，无 Fix PR |
| **[#1307](https://github.com/netease-youdao/LobsterAI/issues/1307)** | 关闭编辑面板后无法编辑其他模型提供商配置 | 0 / 1 | **UI 状态机死锁**：面板状态未重置导致后续交互只读 | **Medium**：设置页核心交互受损，易复现 |

> **热点结论**：社区核心诉求集中在 **“基础设施稳定性”（多模态、MCP、模型配置）**，而非新功能。维护团队近期回复仅限于状态更新（添加 Stale 标签），缺乏技术排查回复。

---

## 5. Bug 与稳定性
按严重程度排序（结合用户影响面与恢复难度）：

| 严重级 | Issue | 现象 | 影响范围 | 是否有 Fix PR | 建议响应 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0 (阻断)** | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 3M 长图解析 -> 页面报错 -> 新任务持续报错 -> **整体不可用** | 多模态/文件上传/全局状态 | ❌ 无 | **立即排查**：上传管线、模型适配层、前端错误边界 |
| **P0 (阻断)** | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 两字输入提示“超出模型限制” | 核心对话/所有模型提供商 | ❌ 无 | **立即排查**：Token 估算算法、上下文窗口配置同步 |
| **P1 (严重)** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 自定义 HTTP MCP 在 OpenClaw 中不生效 | 插件生态/企业集成/自动化 | ❌ 无 | **本周内修复**：引擎配置热加载机制缺失 |
| **P2 (一般)** | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 切换模型提供商编辑面板变只读 | 设置页/模型管理 | ❌ 无 | **下个 Sprint**：React 状态重置逻辑修复 |
| **P3 (体验)** | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 定时任务删后历史标题显示异常 | 定时任务/历史审计 | ❌ 无 | 低优，数据关联查询修复 |

> ⚠️ **稳定性警示**：3 个 P0/P1 级 Bug **均超过 100 天未修复**，且无对应 WIP PR，建议建立 **“Bug Bash” 专项周** 或引入 **自动化回归测试** 覆盖上传/对话主链路。

---

## 6. 功能请求与路线图信号
| 需求来源 | 功能描述 | 社区呼声 | 现有 PR 支持 | 纳入下版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 代码块行号显示切换 (有/无语言标识) | 低 (0👍) | ❌ 无 PR | **中** | 纯前端增强，技术方案明确 (react-syntax-highlighter)，适合 Good First Issue |
| [#1353 (PR)](https://github.com/netease-youdao/LobsterAI/pull/1353) | Agent 技能选择器：全选/清除/计数 | 隐性需求 | ✅ **PR 就绪** | **高 (若重开)** | PR 质量高，仅因 Stale 关闭，**强烈建议维护者 Reopen/手动合并** |
| [#1464 (PR)](https://github.com/netease-youdao/LobsterAI/pull/1464) | IM 多实例重复校验 (名称/凭证) | 隐性需求 | ✅ **PR 就绪** | **高 (若重开)** | 数据完整性修复，**强烈建议合并** |
| Release 2026.7.17 | 皮肤系统迭代 | 内部驱动 | ✅ 已合并 | **已发布** | 持续进行中 |

> **路线图推断**：
> 1. **近期 (v2026.7.x)**：修复 P0 Bug (#1296, #1298)、合并 #2358、补齐 #1353/#1464 功能。
> 2. **中期**：MCP 协议全面兼容 (#1293)、多模态稳定性专项。
> 3. **长期**：代码块/Markdown 渲染增强 (#1302)、协作模式深化。

---

## 7. 用户反馈摘要
从 Issue 评论与截图中提炼的**真实用户画像与痛点**：

| 用户场景 | 典型反馈 | 情感倾向 | 关键洞察 |
| :--- | :--- | :--- | :--- |
| **企业私有化部署/集成开发** | “自定义 MCP 实际未在 OpenClaw 引擎里更新，导致无法被调用” (#1293) | 😤 **沮丧/阻断** | **引擎配置热刷新机制缺失**，是阻碍二次开发采纳的核心技术债。 |
| **多模态重度用户 (文档/长图分析)** | “上传 3M 长图... 页面直接报错，新开任务会一直报错，整体不可用了” (#1296) | 😡 **愤怒/不信任** | **错误边界失效**导致单点故障全局化，**数据恢复成本高** (需清理存储/重启)。 |
| **日常对话用户** | “模型测试连接可以通过，输入两个字的问题，页面直接提示输入内容过长” (#1298) | 😕 **困惑/不可用** | **Token 计算与模型元数据不同步**，基础功能质量不达标，严重损害“开箱即用”体验。 |
| **Agent/自动化构建者** | “选了多个技能后想重置选择，只能一个个手动取消，体验不佳” (#1353 PR 作者) | 😐 **忍耐/期待** | 高频配置操作缺乏批量交互，**效率工具自身效率低**。 |
| **IM 机器人运维者** | “系统允许创建同名实例... 相同 App ID 机器人可被添加多次，导致消息重复处理” (#1464 PR 作者) | 😨 **担忧/风险** | **缺乏唯一性约束**造成生产事故隐患，属于基础工程质量缺失。 |

> **满意度极性**：**负面反馈主导**（稳定性、核心功能失效），正向反馈仅见于已合并 Release 的功能点。用户对“修复周期长”表现出隐性流失风险。

---

## 8. 待处理积压 (Action Required)
> 以下项目**长期无响应且高价值/高风险**，建议维护者本周内决策：

| 优先级 | 项目 | 类型 | 停滞天数 | 建议动作 | 责任人建议 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔥 最高** | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | Bug (P0) | ~108 天 | **指派核心后端/前端排查**；若难复现，加装详细日志与错误上报 | @Core Backend / @Frontend Lead |
| **🔥 最高** | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Bug (P0) | ~108 天 | **复现 Token 计算逻辑**；对比模型配置 `max_tokens` 与前端估算算法 | @Model Adapter Owner |
| **🔥 高** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Bug (P1) | ~108 天 | **评估 OpenClaw 配置热加载架构**；短期提供重启 API

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-19

---

## 1. 今日速览
- **整体活跃度**：**低-中等**。过去 24 小时无 Issue 活动，但有 3 条 PR 更新，其中 2 个已合并/关闭，1 个处于开放审查状态，显示核心维护团队正在稳步推进代码集成。
- **核心动向**：项目重心在于**后端能力扩展**（向量数据库后端实验）与**集成配置灵活性提升**（Slack API Base URL 可配置、ACP-only 聊天模式支持）。
- **发布状态**：无新版本发布，当前变更累积在主分支，预计将汇入下一迭代版本。
- **社区互动**：所有 PR 评论数与 Reaction 数均为 0，表明变更为内部驱动或小范围技术调整，暂未引发广泛社区讨论。
- **健康度评估**：代码合并流程正常，无阻塞性 Bug 报告，项目处于健康的特性迭代期。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（2 个）

| PR | 标题 | 核心变更 | 影响范围 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#1159** | **feat(slack): support configurable API base URL** | 新增 `api_base_url` 配置项（默认 `https://slack.com/api`），覆盖 Slack Client 构建、Socket Mode 启动、Events API 认证、出站回复及原生流式传输全链路。同时在 Onboarding 与账号设置 UI 中新增对应字段。 | **集成扩展 / 企业级部署**<br>解决私有化部署 Slack / 代理环境下的连通性问题，降低企业接入门槛。 | [#1159](https://github.com/moltis-org/moltis/pull/1159) |
| **#1157** | **fix(web): support ACP-only chat setup** | 修复 Web 端 Onboarding 流程：当仅配置 ACP Agents 无 LLM 模型时，不再报错，改为展示已安装 ACP Agents 并允许继续；会话头部选择器筛选支持 ACP 的 External Agent，并自动选中；禁用底部模型选择器。 | **前端体验 / 协议兼容**<br>完善 ACP (Agent Client Protocol) 单独使用场景，修复阻断纯 Agent 模式交互的回归问题。 | [#1157](https://github.com/moltis-org/moltis/pull/1157) |

### 🔄 进行中的 PR（1 个）

| PR | 标题 | 核心变更 | 状态/风险 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#1158** | **feat(memory): add zvec vector database memory backend** | 引入基于 `zvec` + `redb` 的向量数据库 Memory Backend 实现，隐藏在 `zvec` Cargo feature 后（`full` profile 默认开启）。作者标注为实验性实现，配合独立部署的 llama-cpp embedding 服务使用。 | **Open / 实验性**<br>涉及存储层核心路径，需关注性能基准、数据迁移兼容性及 feature flag 管理策略。 | [#1158](https://github.com/moltis-org/moltis/pull/1158) |

---

## 4. 社区热点
> 过去 24 小时所有 PR/Issue 均无评论与 Reaction，**无明显社区热点讨论**。  
> 维护者建议：对 #1158 实验性 Backend 主动发起设计评审或性能测试邀请，提前收集反馈。

---

## 5. Bug 与稳定性
> 过去 24 小时**无新增 Bug Report 或崩溃报告**。  
> 已修复项：#1157 修复了 ACP-only 模式下的前端阻断性错误（属于功能回归修复）。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 关联 PR | 纳入下一版本可能性 | 分析 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #1159** | Slack API Base URL 可配置化 | #1159 (已合并) | **已纳入** | 典型企业级诉求（私有云/代理），实现完整且含 UI，已合入主分支。 |
| **PR #1157** | 纯 ACP Agent 模式下的 Onboarding & 交互流程完善 | #1157 (已合并) | **已纳入** | 协议生态建设关键补丁，修复了纯 Agent 场景下的用户流断点。 |
| **PR #1158** | 替代向量存储后端 | #1158 (Open) | **中等** | 实验性实现，依赖 `zvec` feature gate。若 CI 通过且基准测试达标，可能作为可选后端在下一版本暴露；若仍处探索期，可能再迭代 1-2 个周期。 |

---

## 7. 用户反馈摘要
> 过去 24 小时 **无 Issue 评论、无用户反馈数据**。  
> 当前反馈渠道静默，建议运营侧关注 Discord/论坛是否有隐性讨论，或近期发布版本后的用户采样调研。

---

## 8. 待处理积压提醒
> 数据范围仅覆盖过去 24 小时，**无法识别长期积压 Issue/PR**。  
> 建议维护者定期执行以下查询以发现滞留项：
> - `is:open is:pr sort:updated-asc` (最久未更新的开放 PR)
> - `is:open is:issue sort:updated-asc label:"bug" -label:"wontfix"` (最久未响应的 Bug)
> - `is:open is:issue reactions:>5 sort:updated-asc` (高呼声但久未处理的需求)

---

**下一期关注点**：#1158 `zvec` backend 的 Review 进展与基准数据；是否有新 Issue 反馈 Slack/ACP 配置变更的边缘情况。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-07-19

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库 | 统计窗口：2026-07-18 至 2026-07-19  
> **核心指标**：Issues 新开/活跃 11 个（关闭 0），PRs 待合并 6 个（合并/关闭 1），新版本 0 个

---

## 1. 今日速览
- **活跃度评级：🟢 高** —— 单日新增 11 个 Issue、6 个新 PR，且多为 **Bug 修复与关键回归问题**，显示社区在 v2.0.0.post3 发布后（Issue #6223）正处于高强度“验证-反馈-修复”循环中。
- **核心矛盾聚焦**：**会话阻塞回归（#6245）**、**文件名过长导致崩溃（#6246）**、**环境变量隔离缺失（#4641/#6251）**、**Embedding 维度配置未生效（#6242/#6243）**、**沙箱降级强制审批（#6250）** —— 均为生产环境阻断级或数据完整性风险。
- **响应速度**：社区贡献者（含首次贡献者）已在 24h 内针对 5 个核心 Bug 提交 Fix PR（#6247, #6248, #6243, #6251, #6238），维护者审核节奏将决定能否赶上下一个 patch 版本。
- **技术债信号**：Issue #6241 指出框架层缺乏“重复检测机制”，#6244 呼吁“项目级记忆隔离”，反映架构层面的扩展性诉求正在浮现。
- **Windows 兼容性**：#6239 报道 PATH 拼接丢失分号导致 npm 全局失效，提醒跨平台测试覆盖仍有盲区。

---

## 2. 版本发布
**无新版本发布**。当前最新稳定版为 `v2.0.0.post3`（Issue #6223 正在进行安装验证）。

---

## 3. 项目进展（已合并/关闭 PR）
| PR | 类型 | 核心变更 | 影响范围 |
|----|------|----------|----------|
| [#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071) | 🚀 Feature (Closed) | 引入 Mattermost 频道集成 | 通知/协作扩展，**非核心路径**，已关闭不再合并 |

> **整体推进**：今日**无核心修复类 PR 合并**，6 个关键 Fix PR 均处于 **Open/Review** 状态，项目实质性前进取决于未来 24-48h 审核吞吐。

---

## 4. 社区热点（高互动/高关注）
| Issue/PR | 评论/反应 | 核心诉求 | 分析 |
|----------|-----------|----------|------|
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | 💬 3 | **前端渲染泄露内存注释** (`<!-- ⟦ NEXT_RID...`) | 典型“模型输出/前端清洗”边界模糊，影响用户信任度，需在 Console 层做兜底 Sanitize。 |
| [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | 💬 2 | **Shell 超时导致会话永久阻塞（回归 #6056）** | **P0 级回归**，已有 Fix PR [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) 区分 `offload` 与 `cancel` 语义，急需合并。 |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | 💬 2 (长期) | **`env set` 运行时不生效，子进程不可见** | 存量痛点，配套 PR [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) 新增 `env get` / `--json`，解决脚本化场景。 |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | 💬 2 | **Embedding 维度配置未传给 OpenAI 兼容 API** | 首次贡献者 PR [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) 已补全 `use_dimensions` 开关，验证通过可直接合入。 |
| [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | 💬 1 | **`_saved_tool_refs` 触发 `File name too long` 崩溃** | 数据完整性风险，PR [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) 增加 `try/except` 兜底，低风险修复。 |

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 根因 | Fix PR 状态 |
|--------|-------|------|------|-------------|
| **🔴 Critical (P0)** | [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | Shell 命令超时 → 会话永久阻塞，需重启进程 | `cancel_event` 混淆“用户取消”与“截止卸载” | **[#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) Open** 已提交，语义区分修复 |
| **🔴 Critical (P0)** | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH 拼接丢 `;` → 子进程丢失 npm 全局 | 字符串拼接逻辑缺陷 | **无 PR**，需维护者优先排期 |
| **🟠 High** | [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | `recall_history` 崩溃 `OSError: [Errno 36]` | 正则提取超长路径 → `is_file()` 炸裂 | **[#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) Open** 捕获异常 |
| **🟠 High** | [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Embedding 维度设置不生效（OpenAI 兼容 API） | Console 缺 `use_dimensions` 开关，持久化 `false` | **[#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) Open** 首贡修复 |
| **🟡 Medium** | [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | 沙箱不可用时硬编码 `ASK` 审批，无配置跳过 | `resource_governor.py` 硬编码 `GovernanceAction.ASK` | **无 PR**，建议新增 `sandbox_fallback_approval` 配置 |
| **🟡 Medium** | [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | 聊天末尾渲染出内存注释标记 | 模型输出/前端清洗边界缺失 | **无 PR**，建议 Console 层增加 Sanitize 步骤 |
| **🟢 Low** | [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | 源码启动 TUI 卡在 `warming` | 环境/依赖初始化竞态 | **无 PR**，需复现定位 |

---

## 6. 功能请求与路线图信号
| 需求 | Issue | 社区呼声 | 纳入下版本可能性 | 备注 |
|------|-------|----------|------------------|------|
| **脚本化环境变量读取** (`env get` / `env list --json`) | [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | ⭐⭐⭐ (长期) | **极高** | PR [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) 已就绪，解除 CI/CD 与脚本集成阻碍 |
| **项目级记忆隔离** | [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244) | ⭐⭐ | 中 | 涉及存储层 Schema 变更，建议纳入 v2.1 规划而非 patch |
| **框架级重复检测/防死循环** | [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | ⭐⭐ | 中高 | 属架构增强，需设计 `RepetitionGuard` 中间件，非热修复 |
| **沙箱降级审批策略可配置** | [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | ⭐⭐ | 高 | 仅需新增配置项映射，PR 难度低，适合 v2.0.0.post4 |
| **Driver 并发初始化** | — | — | **已落地** | PR [#6238](https://github.com/agentscope-ai/QwenPaw/pull/6238) 提升多 MCP 启动性能，非功能性增强 |

---

## 7. 用户反馈摘要（真实痛点）
| 场景 | 原声痛点 | 频次/代表性 |
|------|----------|-------------|
| **长会话/高频 Shell** | “超时后整个会话卡死，只能重启进程，丢失上下文” (#6245) | 🔴 多用户确认回归 |
| **自动化脚本/管道** | “`env set` 后子进程读不到，文档没说要重启，坑了半天” (#4641) | 🟠 存量 Issue 持续顶帖 |
| **RAG/Embedding 微调** | “Console 填了 1024 维度，API 还是按默认 1536 跑，向量库报错” (#6242) | 🟠 首次贡献者直接给出修复 |
| **大仓库/巨型 Diff** | “搜历史炸了 `File name too long`，原来是 git diff 触发了正则” (#6246) | 🟡 边缘场景但数据破坏性强 |
| **Windows 开发机** | “PATH 里 npm global 路径被吃了，`npm -g ls` 空的” (#6239) | 🟡 单用户报告，但影响面广 |
| **沙箱受限环境** | “没有沙箱就弹审批，`approval_level: NONE` 又太宽，要个中间开关” (#6250) | 🟡 运维侧强诉求 |

---

## 8. 待处理积压（维护者关注清单）
| Item | 类型 | 滞留时长 | 风险 | 建议动作 |
|------|------|----------|------|----------|
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | Bug/Feature | **~2 个月** | 脚本化场景阻断，社区持续关注 | **合并 #6251**，同步更新文档与 CHANGELOG |
| [#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223) | Release Duty | 2 天 | v2.0.0.post3 安装验证未全绿 | 指派平台 Owner 补齐 Checkpoint，决定是否回滚/补丁 |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Bug (Windows) | 1 天 | 影响所有 Windows 开发者 | 指派 Windows 维护者，补充 PATH 拼接单测 |
| [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | Arch Improvement | 1 天 | 重复输出/死循环为模型无关通病 | 创建 Epic `RepetitionGuard`，纳入 v2.1 里程碑 |
| [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244) | Feature (Memory) | 1 天 | 记忆污染/检索噪声随会话增长放大 | 设计 `Project` 概念 RFC，征求社区意见 |

---

## 📌 给维护者的行动建议（Next 24h）
1. **优先审核/合并 P0 Fix PR**：`#6248` (会话阻塞)、`#6247` (崩溃兜底)、`#6243` (Embedding 生效)、`#6251` (脚本化 env) —— 可打包为 `v2.0.0.post4`。
2. **指派 Windows PATH 修复** (`#6239`) 给熟悉 `shell_utils` 的维护者，补充跨平台 CI。
3. **锁定 `#6223` 发布验证**：若平台检查点未全绿，评估是否回滚或热补丁。
4. **回应长期积压 `#4641`**：合并 `#6251` 并发布公告，消除社区“文档滞后”不信任感。
5. **将 `#6241`、`#6244` 转为 Epic/Design Doc**，避免在 Issue 碎片化讨论中丢失架构级诉求。

---

> **报告生成时间**：2026-07-19 06:00 UTC  
> **下一版本预测**：`v2.0.0.post4` 将在 48h 内切出，主打“稳定性回滚 + 脚本化环境变量 + Embedding 修复”。  
> **关注渠道**：GitHub Releases / `#release-duty` Issue / Discord `#changelog`。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-19

---

## 1. 今日速览

ZeroClaw 今日呈现**高强度研发迭代态势**，无新版本发布，但 Issue 与 PR 活跃度均达 50 条（过去 24h），显示社区处于密集的功能落地与架构重构期。核心动力集中在：**供应链安全与签名体系（SLSA/硬件 PGP）**、**多渠道原生化（GitHub/Discord/Slack/Telegram/Matrix/Lark）**、**网关解耦与 Agent 生命周期管理**、**Provider 兼容性增强（OpenRouter 回退、Hailo-Ollama、多模态媒体标记）**、以及 **WASM 插件生态的 OCI 化与加密状态持久化**。关闭的 11 个 Issue 与合并的 3 个 PR 表明维护团队正有序推进验收与质量门禁（CI 审计、注释扫描、翻译可复现）。整体健康度：**优** —— 活跃度高、RFC 讨论深入、修复与新功能并行，但存在多个高优先级 Bug（P1）阻塞用户核心流程，需重点跟进。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展（已合并/关闭的关键 PR 与 Issue）

| 类型 | 编号 | 标题/摘要 | 影响面 | 状态 |
|------|------|-----------|--------|------|
| **Issue 关闭** | #5862 | **Bug: Agent 不识别 `zeroclaw cron` 指令** | Agent/Tooling | ✅ Closed |
| **Issue 关闭** | #8177 | **RFC: 供应链签名 — 硬件 PGP、密闭构建、SLSA 来源** | CI/Security | ✅ Closed (Wontfix/归档) |
| **Issue 关闭** | #2079 | **Feature: 恢复 GitHub 作为原生 Channel** | Architecture/Channel | ✅ Closed (Accepted) |
| **Issue 关闭** | #6378 | **Feature: Discord 仅在指定频道响应** | Channel:Discord | ✅ Closed (Completed) |
| **Issue 关闭** | #6672 | **Bug: Xiaomi 思维模式下 `reasoning_content` 丢失** | Provider/Compatible | ✅ Closed |
| **Issue 关闭** | #8056 | **CI: 强制 PR 门禁 — cargo audit、lockfile 检查、npm 依赖审查** | CI/Security | ✅ Closed |
| **Issue 关闭** | #7248 | **Feature: 持久化缓存输入 Token 并计入成本核算** | Observability/Provider | ✅ Closed (Completed) |
| **Issue 关闭** | #5573 | **Feature: Channel 新增 SMTP 发邮件能力** | Channel:Email/Cron | ✅ Closed (Accepted) |
| **Issue 关闭** | #6517 | **Bug: 上下文溢出导致幻觉/话题漂移** | Memory/Runtime | ✅ Closed |
| **Issue 关闭** | #6558 | **Bug: Qwen Provider 405 Method Not Allowed** | Provider:Qwen | ✅ Closed |

> **进展评估**：今日关闭的 11 个 Issue 涵盖 **Agent 工具感知、多渠道原生化、Provider 兼容性、CI 安全门禁、成本观测、定时任务通知** 等核心场景，标志着多个长周期 RFC/Feature 进入验收交付阶段。合并的 3 个 PR（未在列表显示，但数据统计为 3）配合 CI 质量门禁落地，代码库稳定性基线进一步抬升。

---

## 4. 社区热点（高评论/高关注 Issue 与 PR）

| 编号 | 类型 | 评论数 | 核心诉求 | 关键信号 |
|------|------|--------|----------|----------|
| **#5862** | Issue | 14 | Agent 不知晓 `zeroclaw cron` 工具存在 | 文档/工具发现机制缺失，用户期望自然语言直达调度能力 |
| **#8177** | Issue | 12 | 供应链签名 RFC（硬件 PGP、SLSA） | 标记 `wontfix`，但讨论深度高，反映社区对 **软件供应链安全** 极高关注 |
| **#2079** | Issue | 9 | GitHub 原生 Channel 落地 | 已 Accepted，跨仓库事件驱动自动化需求强烈 |
| **#6378** | Issue | 8 | Discord `allowed_channels` 限制响应范围 | 与 Matrix/Nextcloud 对齐，多租户隔离刚需 |
| **#6055** | Issue | 7 | Slack 首次 @mention 回溯线程上下文 | 解决 `strict_mention_in_thread` 下的交互断层，In Progress |
| **#8424** | Issue | 7 | **RFC: 工作区相对禁止路径 + `.zeroclawignore`** | 安全边界从“工作区外”延伸至“工作区内敏感文件”，**Blocked/需作者行动** |
| **#9127** | Issue | 6 | **RFC: 抽象 `KeySource` Trait 分类主密钥来源** | 凭证管理体系深化，部署形态感知（硬件/KMS/文件），**高风险/高优** |
| **#8226** | Issue | 6 | Feature: 内置 Git 操作的类型化 Agent 身份 | 多租户下 Git 身份、Token 隔离，Accepted |
| **#6293** | Issue | 6 | **RFC: 气隙执行模式 + Unix Socket Companion Daemon** | 极致安全部署架构，**Blocked/高风险**，涉及 Enclave 支持 |
| **#6002** | Issue | 6 | Bug: Telegram 容器部署下“未明确寻址助手” | Stale/需作者行动，容器化部署痛点 |

> **热点洞察**：社区讨论聚焦于 **安全边界内收（工作区内禁止路径、密钥来源分类、气隙架构）**、**多渠道原生化收尾（GitHub/Discord/Slack/Telegram）**、**Agent 工具感知与上下文管理**。多个高风险 RFC 处于 `Blocked` 或 `Needs Author Action`，提示核心维护者决策带宽可能成为瓶颈。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | 编号 | 标题/现象 | 组件 | 是否有 Fix PR | 状态 |
|--------|------|-----------|------|---------------|------|
| **P1 (S1 - 工作流阻断)** | #8505 | Telegram Channel 无法配置，Bot 不回复 | Channel:Telegram/Runtime | ❌ 无 | Open (Accepted/Quickstart) |
| **P1 (S1 - 工作流阻断)** | #8559 | Web Dashboard 退出聊天窗口导致 Agent 停止工作 | Gateway/Web | ✅ #7759 (In Progress) | Open (In Progress) |
| **P1 (S1 - 工作流阻断)** | #6002 | 容器部署 + Telegram + llama.cpp：未明确寻址助手 | Runtime/Daemon | ❌ 无 | Open (Stale/Needs Author) |
| **P2 (S2 - 行为降级)** | #6517 | 上下文溢出导致幻觉/话题漂移 (Kimi/Discord) | Memory/Runtime | ❌ 无 | Closed |
| **P2 (S0 - 数据丢失/安全)** | #6672 | Xiaomi 思维模式 `reasoning_content` 丢失 | Provider/Compatible | ❌ 无 | Closed |
| **P2** | #6724 | 空凭证启用 Signal/Voice Channel 导致 Supervisor Crashloop | Channel/Daemon | ❌ 无 | Open (Accepted) |
| **P2** | #7911 | `install.sh` 在 Android/Termux 误选通用 Linux 二进制 | Scripts/Install | ❌ 无 | Open (Accepted/Quickstart) |
| **P2** | #9102 | 多模态非图像媒体标记未剥离导致 Provider 报错 | Provider/Multimodal | ✅ #9102 (Open) | Open |
| **P2** | #9113 | OpenAI/Compatible 流式客户端缺少 `read_timeout` | Provider/Streaming | ✅ #9113 (Open) | Open |
| **P3** | #6558 | Qwen Provider 405 Method Not Allowed | Provider:Qwen | ❌ 无 | Closed |

> **稳定性结论**：**P1 级阻断 Bug 仍有 3 个开放**，其中 #8505（Telegram 配置失效）与 #8559（Web 会话绑定生命周期）直接影响终端用户核心体验，**#7759 正在修复 #8559**；#6002 标记 Stale 需唤醒。**P2 级 Crashloop (#6724) 与安装脚本适配 (#7911) 属于“易发且高感知”问题，建议本周内纳入 Sprint 修复。**

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能/方向 | 成熟度 | 关联 PR/Issue | 可能纳入版本 |
|----------|-----------|--------|---------------|--------------|
| **Issue #8424 (RFC)** | 工作区内禁止路径模式 + `.zeroclawignore` | 设计中 (Blocked) | - | vNext (需解除 Block) |
| **Issue #9127 (RFC)** | `KeySource` Trait：主密钥来源/部署形态分类 | 设计中 (新建) | - | vNext (架构级) |
| **Issue #6293 (RFC)** | 气隙执行模式 + Companion Daemon (Enclave) | 设计中 (Blocked) | - | vNext+ (长周期) |
| **Issue #2079** | GitHub 原生 Channel | 已 Accepted | - | 近期版本 |
| **Issue #6055** | Slack 线程上下文回溯 | In Progress | - | 近期版本 |
| **Issue #8138** | OpenRouter `fallback_models` 数组支持 | Blocked | - | 近期版本 |
| **Issue #8600** | 多模型 Provider 下按会话轻松切换模型 | Accepted (Tracker) | - | 近期版本 |
| **Issue #7497 (RFC)** | WASM 插件 OCI Registry 存储/发现 (cosign/镜像索引) | 设计中 (Blocked) | - | vNext |
| **PR #8486 (XL)** | Gateway 新增 OpenAI Chat Completions 端点 | **Open, 大体量** | Closes #8550 | **极大概率下一版本** |
| **PR #8857 (XL)** | 插件作用域机密 + 加密状态持久化 | **Open, 大体量** | - | **极大概率下一版本** |
| **PR #9139 (XL)** | 插件持久化调度器 Outbox 基座 (复用 Cron SQLite) | **Open, 大体量** | - | **极大概率下一版本** |
| **PR #9142 (XL)** | 插件具名 TLS Profile 物化 | **Open, 大体量** | Stacked on #9137 | 近期版本 |
| **PR #9109 (XL)** | 原生 Hailo-Ollama Provider 支持 | **Open, 大体量** | - | 近期版本 |
| **PR #9090 (XL)** | 统一工具调用配对强制检查点 (Anthropic/Bedrock) | **Open, 大体量** | - | **极大概率下一版本 (稳定性)** |
| **PR #9026** | Gateway/ACP: `?agent=` 查询参数选择 Session Agent | Open | - | 近期版本 |
| **PR #7954** | ZeroCode Dashboard Agent 重命名流程 | Open | - | 近期版本 |
| **PR #8443** | Matrix 单消息进度草稿 + `stream_tool_arguments` | Open | - | 近期版本 |
| **PR #9110 (XS)** | Lark `verification_token` 常数时间比较 (时序攻击修复) | **Open, 安全修复** | - | **立即/热修复** |
| **PR #9131 (L)** | CI 注释卫生门禁语言感知化 (Python 扫描器) | Open | - | 近期版本 |

> **路线图判读**：
> - **必进下一版**：OpenAI Chat Completions 端点 (#8486)、插件三件套 (#8857, #9139, #9142)、工具调用配对修复 (#9090)、Lark 时序攻击修复 (#9110)。
> - **近期版本**：GitHub/Discord/Slack/Telegram 多渠道收尾、OpenRouter 回退、ACP 会话 Agent 选择、ZeroCode Dashboard 增强、Matrix 进度流、Hailo-Ollama Provider。
> - **架构级长周期**：工作区内安全边界 (#8424)、密钥来源抽象 (#9127)、气隙/Enclave (#6293)、WASM OCI 化 (#7497) —— 需核心维护者解除 Block 或推进 RFC 定稿。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点/诉求 | 代表性 Issue | 情绪倾向 |
|------|-----------|--------------|----------|
| **容器化部署 + Telegram + 本地 LLM** | 配置向导/Doctor 显示正常但 Bot 无响应；“未明确寻址助手”误判 | #8505, #6002 | 😤 挫败/阻断 |
| **Web Dashboard 长任务** | 关闭标签页/切换页面即中断 Agent 任务，无法后台运行 | #8559 | 😤 核心流程受阻 |
| **多渠道运维** | 需要 GitHub 原生 Channel 驱动 Issue/PR 自动化；Discord/Slack/Telegram/Matrix 需要细粒度权限与线程上下文 | #2079, #6378, #6055, #8445, #8443 | 😐 刚需/期待 |
| **Provider 兼容性** | OpenRouter 回退模型不可用；Xiaomi 思维模式丢失 reasoning；Qwen 405 报错；

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*