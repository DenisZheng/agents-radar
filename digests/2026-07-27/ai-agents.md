# OpenClaw 生态日报 2026-07-27

> Issues: 348 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-27 02:22 UTC

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

# OpenClaw 项目日报 | 2026-07-27

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时内 Issues 更新 348 条（新开/活跃 241，已关闭 107），PR 更新 500 条（待合并 154，已合并/关闭 346），呈现典型的“维护冲刺”特征。
- **无新版本发布**：但今日有大量 PR 合并/关闭（346 条），多为核心维护者 `steipete` 与 `clawsweeper` 推动的重构、修复与 CI 改进，显示项目处于**稳定期向下一个小版本积累**阶段。
- **核心痛点聚焦**：高热度 Issue 集中在 **会话状态丢失/损坏**、**Codex/模型流式响应异常**、**Telegram/多渠道消息重复/丢失**、**内存/上下文压缩超时** 四大类，均为 P0/P1 级别，直接影响生产可用性。
- **社区参与度强**：Top Issue #75（Linux/Windows 原生 App）积累 115 条评论、80 👍，历时 200+ 天仍未排期，反映跨平台需求长期被低估。
- **技术债偿还进行中**：今日合并的 PR 多涉及会话存储性能（O(N²)→O(N)）、OpenAI 兼容层统一、配置写入原语拆分、插件安装失败闭环等基础设施治理，为后续功能迭代铺路。

---

## 2. 版本发布

> **无新版本发布**。当前最新稳定版为 `2026.7.2-beta.x` 系列，正式版预计在 P0/P1 阻塞问题（如 #102020、#113315、#113434）修复并回归通过后发布。

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#114237](https://github.com/openclaw/openclaw/pull/114237) | **性能/重构** | `sessions.list` 移除逐行全量 JSON 解析，ACA 元数据读取从 O(rows²) 降为 O(rows) | 网关启动/会话列表延迟、大规模部署内存占用 | **Open** (需 Proof) |
| [#114236](https://github.com/openclaw/openclaw/pull/114236) | **重构/兼容性** | 统一 OpenAI Chat Completions 兼容矩阵：合并 provider-owned 与 transport-endpoint 双份拷贝，消除字段漂移 | 所有 OpenAI/兼容模型调用一致性、工具调用/推理字段 | **Open** (需 Proof) |
| [#114230](https://github.com/openclaw/openclaw/pull/114230) | **测试/锁定** | 冻结两套私有 OpenAI Responses 流处理器的输出路由/推理覆盖/终止校验/流式清理差异 | 防止后续合并丢失流式细节，为统一处理器铺路 | **Closed** |
| [#114233](https://github.com/openclaw/openclaw/pull/114233) | **功能/UI** | Labs 面板补全：Tool Search、Lean Local Tools、Message Audit Metadata 实验门控入口 | 用户可在 UI 开启实验功能，避免手改配置 | **Closed** |
| [#114229](https://github.com/openclaw/openclaw/pull/114229) | **重构/会议** | Google Meet/Teams/Zoom 会议插件统一“可回话就绪”判定，消除重复/漂移逻辑 | 会议机器人实时转写/回话稳定性 | **Closed** |
| [#114225](https://github.com/openclaw/openclaw/pull/114225) | **CI/脚本** | `check:changed` 在 Blacksmith 不可用时回退本地执行，避免误报红 | 贡献者本地/远程 CI 一致性 | **Closed** |
| [#114228](https://github.com/openclaw/openclaw/pull/114228) | **重构/配置** | 拆分配置写入准备原语：merge-patch、path-mutation、changed-path、env-restore、error-format | 为配置写入意图重设计解耦，降低破坏性变更风险 | **Closed** |
| [#114231](https://github.com/openclaw/openclaw/pull/114231) | **重构/模型** | 澄清 `hasModelExtraParams` 语义：仅指“排除已知运行时控制后剩余的 provider 参数” | 修复 #107588 后的兜底路由判断 | **Closed** |
| [#113834](https://github.com/openclaw/openclaw/pull/113834) | **UI/修复** | 新建 worktree 会话创建期保持在 Coding 标签，避免跳闪至 Threads 再回跳 | Web UI 会话列表视觉稳定性 | **Closed** |
| [#112871](https://github.com/openclaw/openclaw/pull/112871) | **修复/启动** | 修复 Voice Wake 遗留 JSON 与规范化 SQLite 状态冲突导致的网关启动拒绝循环 | 网关冷启动可靠性（P1） | **Open** (Ready) |
| [#111365](https://github.com/openclaw/openclaw/pull/111365) | **修复/迁移** | `repairOpenClawStateDatabaseSchema()` 先跑加性列迁移再断言规范 Schema，修复 `agent_id` 列缺失导致 `doctor --fix` 失败 | 版本升级自动修复能力（P1） | **Open** (需 Proof) |
| [#87781](https://github.com/openclaw/openclaw/pull/87781) | **修复/Codex** | 原生 Codex 流式响应：仅以文档化 `turn/completed` 为终止信号，计入 `response.custom_tool_call_input.delta` 为活跃进度 | 解决长流式任务误判完成/超时（P1） | **Closed** |
| [#87254](https://github.com/openclaw/openclaw/pull/87254) | **修复/插件状态** | 插件行上限触发时仅驱逐当前命名空间旧行，Telegram 消息缓存命名空间保 3000 行，全局熔断线提至 6000 | 插件存储 OOM/数据丢失风险（P1） | **Closed** |

> **整体推进评估**：今日合并/关闭 **346 条 PR**，其中 **核心基础设施类 12 个**、**UI/体验类 3 个**、**CI/工程效能类 3 个**、**Bug 修复类 6 个**。项目显著推进了“会话存储性能”、“模型兼容层统一”、“配置写入解耦”、“插件状态熔断”、“版本升级自愈”五大技术债偿还主线，为下一版本稳定性奠定基础。

---

## 4. 社区热点：高互动 Issues 深度解析

| Issue | 评论/👍 | 核心诉求 | 当前阻塞点 | 关联 PR/进展 |
|-------|---------|----------|------------|--------------|
| **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** | 115 / 80 | 原生桌面端覆盖 macOS/iOS/Android 缺口，要求功能对标 macOS | 标签 `clawsweeper:needs-product-decision`、`clawsweeper:needs-maintainer-review` 长期未决，无明确 Owner | 无活跃 PR，需产品决策启动 |
| **[#99241 Tool 输出崩溃为图片占位符](https://github.com/openclaw/openclaw/issues/99241)** | 24 / 2 | 长任务/ANSI 重输出场景下，工具结果被折叠为 `(see

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告 | 2026-07-27

---

## 1. 生态全景

当前生态呈现**“头部深度巩固、腰部差异化突围、尾部自然淘汰”**的典型成熟期特征。核心项目（OpenClaw、ZeroClaw、Hermes、IronClaw、NanoBot、NanoClaw）集体进入**“稳定性冲刺期”**，将 70%+ 研发投入用于 P0/P1 级缺陷修复、技术债偿还（会话存储、配置体系、错误模型）、安全加固与跨平台 CI 补全，而非新功能堆砌。**“可生产可用”已取代“功能丰富”成为核心交付指标**。安全边界（SSRF、Key 泄露、沙箱逃逸）与多渠道消息可靠性（Telegram/Discord/WhatsApp/Voice）成为全生态共识的硬性门槛。LobsterAI、NullClaw 等下游/边缘项目因缺乏持续投入陷入维护停滞，生态集中度进一步提升。

---

## 2. 各项目活跃度对比

| 项目 | 核心语言 | Issues 更新量 | PR 活动量 | 合并/关闭 PR | 版本发布 | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | TypeScript/Go | **348** (高) | **500** (极高) | **346** | 无 (积累期) | ⭐⭐⭐⭐⭐ **标杆级** | 维护冲刺、技术债偿还、社区高热、跨平台缺口 |
| **ZeroClaw** | Rust | **50** (高) | **50** (高) | 2 | 无 (v0.8.4 预备) | ⭐⭐⭐⭐ **高活跃/高风险** | 并行攻坚、Windows全红、Landlock自锁、发布工程化 |
| **Hermes Agent** | Python/TS | **50** (高) | **50** (高) | 多 (含7个重构) | 无 (v0.19.0 预期) | ⭐⭐⭐⭐ **架构重构期** | Profile生命周期重构、多平台投递、i18n、Buzz集成 |
| **IronClaw** | Rust | 5 (中) | **18** (中高) | 多 (含Epic落地) | 无 (Release PR卡22天) | ⭐⭐⭐⭐ **核心契约落地期** | Reborn错误模型、MCP发现、沙箱凭证隔离、供应链 |
| **NanoBot** | Python | 3新/7闭 (中) | **24** 合并 (高) | **24** | 无 (建议切v0.2.3) | ⭐⭐⭐⭐ **修复密集期** | 安全加固、记忆推进、MCP Schema、移动端WebUI |
| **NanoClaw** | TypeScript | 2新 (中) | 8更新/2合并 (中) | 2 | 无 (vNext预热) | ⭐⭐⭐⭐ **破坏性变更收尾** | 显式目标迁移P0修复、WhatsApp共享号、Dial语音通道 |
| **PicoClaw** | Go | 1新/1闭 (低) | 7 Open/1合并 (中) | 1 | 无 | ⭐⭐⭐ **安全/生态扩展期** | Schema v4安全基线、Exa/AI Router Provider、Go 1.25 |
| **LobsterAI** | TypeScript | 1更新/1闭 (极低) | 8陈旧/1合并 (极低) | 1 | 无 (停滞) | ⭐⭐ **维护观察/准停摆** | P0网关重启118天、DiffView失效、Linux支持关闭 |
| **NullClaw** | Rust/Go | 1更新 (极低) | 0 | 0 | 无 | ⭐ **高风险停摆** | aarch64 SIGSEGV 11天无修复、单维护者响应缺失 |
| **TinyClaw / ZeptoClaw** | - | 0 | 0 | 0 | 无 | ☠️ **无活动** | - |
| **Moltis / CoPaw** | - | 数据获取失败 | - | - | - | ❓ **状态未知** | - |

> **注**：活跃度统计基于过去 24h GitHub 事件；健康度综合考量“核心缺陷修复率”、“发布节奏”、“社区响应时效”、“架构演进清晰度”。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 数据支撑 |
| :--- | :--- | :--- |
| **规模与吞吐** | **生态“核心内核”与“参照实现”**。单日 PR 处理量 (346) 为全生态之和的 **2.5倍**；Issue 交互深度 (Top Issue #75 115 评论) 远超其它。 | PR 合并数 346 vs ZeroClaw 2 / Hermes ~10 / NanoBot 24 |
| **技术路线差异** | **重网关、重多客户端、重存储层**。独创 ACA 会话存储引擎，解决 O(N²) 性能瓶颈；统一 OpenAI 兼容层吸收上游漂移；配置写入原语拆分支撑声明式管理。 | PR #114237 (存储性能)、#114236 (兼容层)、#114228 (配置原语) |
| **社区规模与治理** | **核心维护者 (steipete, clawsweeper) + 机器人 (clawsweeper) 双驱动**，形成“维护冲刺”固化节奏。长期高热 Issue (#75 原生桌面) 反映产品决策滞后于社区诉求。 | 348 Issue 更新，核心维护者主导合并，`clawsweeper` 标签体系完善 |
| **生态辐射** | **上游标准制定者**。LobsterAI 显式依赖其网关；NanoClaw/PicoClaw 在会话迁移、Provider 兼容层面隐性对齐。 | LobsterAI #1247/1243 直接操作 OpenClaw 网关/会话存储 |
| **短板** | **Linux/Windows 原生应用缺位** (Issue #75 200+天未排期)；**发布节奏被债务偿还绑架**，Beta 系列长期未转稳定版。 | #75 标签 `needs-product-decision`、`needs-maintainer-review` 长期挂起 |

---

## 4. 共同关注的技术方向（多项目共振信号）

| 技术方向 | 涉及项目 | 具体诉求与进展 | 信号强度 |
| :--- | :--- | :--- | :--- |
| **会话/状态持久化与迁移** | **OpenClaw, NanoBot, Hermes, NanoClaw, LobsterAI, ZeroClaw** | OpenClaw 存储 O(N²)→O(N)；NanoBot Dream 游标推进修复；Hermes Profile Clone/Backup 契约落地；NanoClaw 显式目标迁移 P0 修复；LobsterAI 会话存储迁移 PR；ZeroClaw pgvector panic。 | ⭐⭐⭐⭐⭐ **核心基建** |
| **安全边界硬化 (SSRF/Key泄露/沙箱)** | **NanoBot, ZeroClaw, PicoClaw, Hermes, IronClaw** | NanoBot 受限下载器 (DNS Pin/32MiB/重定向链)；ZeroClaw `image_gen` SSRF / Gemini Key泄露 / Landlock 自锁；PicoClaw Schema v4 隔离 system instruction；Hermes `.env sanitizer` 清理 `***` 占位符；IronClaw 沙箱凭证隔离/签名意图。 | ⭐⭐⭐⭐⭐ **生存门槛** |
| **多渠道消息可靠性与多模态** | **OpenClaw, NanoBot, Hermes, NanoClaw, ZeroClaw, PicoClaw** | OpenClaw Telegram 重复/丢失；NanoBot Channel 上下文保真/心跳

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-27

---

## 1. 今日速览

- **整体活跃度：高**。过去 24 小时合并/关闭 **24 个 PR**，关闭 **7 个 Issue**，新开 **3 个 Issue** 与 **5 个待合并 PR**，呈现典型的 “修复密集期” 特征——核心维护团队集中清理近期积累的回归与安全债务。
- **核心主题**：**安全加固（图片下载 SSRF 防护）**、**会话/心跳路由修复**、**Dream 记忆推进机制修复**、**MCP Schema 兼容性**、**WebUI 移动端布局**、**Channel 消息上下文保真** 六大方向并行推进。
- **代码健康度**：多个 PR 携带回归测试（`priority: p1` 标签覆盖率 100%），且修复多为 “最小必要变更 + 测试兜底”，技术债偿还质量较高。
- **社区信号**：新增 Issue #5102 暴露 WebUI Channel 下 Cron 推送状态与实际送达不一致的可靠性缺口；#1012（Subagent Profile）长期停滞，显示扩展性需求未被纳入近期迭代。
- **风险提示**：无新版本发布，但已合并 PR 涉及安全、消息不丢失、记忆推进等核心路径，**建议尽快切一条 `v0.2.3` 维护版** 以便下游用户拉取修复。

---

## 2. 版本发布

> **今日无新版本发布**。  
> 建议维护者基于 `main` 当前 HEAD 发布 `v0.2.3`（或 `v0.2.2-hotfix`），包含：安全修复 #5095/#5101、心跳路由 #4928、Dream 推进 #5054、长度恢复 #5056、MCP Schema #5057、消息上下文 #5084、配对/触发器空指针 #5087/#5088、Feishu 卡片兼容 #5089、WebUI 移动端 #5100 等关键修复。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 关联 Issue |
|----|------|----------|--------|------------|
| **#5095** | 🔒 Security P1 | 引入受限下载器：DNS Pin、32 MiB 上限、重定向链全链路私有/环回/元数据 IP 拦截、图片字节校验 | 所有 Provider 返回的图片 URL 下载链路 | — |
| **#5101** | 🔧 Provider P1 | 复用 Provider 配置的代理下载图片，保持 DNS Pin 与重定向校验 | 企业/受限网络环境下的图片获取 | — |
| **#4928** | 🐛 Channel P1 | 统一会话模式下持久化最后有效 `channel:chat_id`，心跳按该路由投递，拒绝 CLI/自动化覆盖 | `unifiedSession: true` 场景心跳丢失 | **#4924** |
| **#5054** | 🧠 Memory P1 | Dream 完成无 diff 批次也推进游标；不完整批次保持可重试；覆盖 21 条历史回归测试 | 长期运行实例的记忆梳理不饥饿 | **#5041** |
| **#5056** | 🤖 Agent P1 | `finish_reason=length` 恢复时累积连续片段、保留边界空白、锚定最后 64 字请求续写 | 长上下文生成被截断场景的完整性 | **#5051** |
| **#5057** | 🔌 MCP P1 | 将非 `#/$defs/` 的本地 `$ref` 规范化为 `#/$defs/`，兼容 Kimi/Moonshot 严格校验 | 接入任意 MCP Tool 均不再导致整模型不可用 | **#5040** |
| **#5084** | 💬 Channel P1 | 排队中转消息注入时解析可信元数据块与 `RuntimeContextProvider`，恢复 sender/channel/chat 运行时身份 | 中断恢复/并发场景下的消息上下文完整性 | **#4064** |
| **#5069** | 📱 Channel P1 | QR 连接轮询取消后忽略后续确认，防止凭证固化到已取消会话 | WeChat/Feishu 连接取消竞态 | — |
| **#5100** | 🌐 WebUI P1 | 消息区允许收缩、长 Markdown 不再撑宽移动端视口与输入框 | 移动端 WebUI 可用性 | — |
| **#4625** | ⚙️ Exec Enhancement | 新增 `tools.exec.sandbox.bwrap.extra_bind_roots` 可配置额外绑挂路径 | 需在沙箱暴露 `~/.local/bin` 等用户工具链 | **#4107** |
| **#5036** | ⚡ Perf Enhancement | `agent.idle_compaction_scan_interval` 可配，默认 60s → 可降频至 300s+，树莓派空闲 CPU 30-40% → <5% | 资源受限设备部署 | — |
| **#5087/5088/5089** | 🛠️ Robustness | `triggers.json/runHistory`、`pairing.json` approved/pending、Feishu 卡片 `multi_url` 空值容错 | 配置文件手工编辑/异常升级后的启动崩溃 | — |

**整体推进度评估**：**核心稳定性里程碑完成度 ~90%**（安全、记忆、会话、消息上下文、Provider 兼容均已落地测试），剩余主要为文档/扩展平台（#5098）与长期特性（#1012）。

---

## 4. 社区热点

| 排名 | Item | 互动/评论 | 核心诉求分析 |
|------|------|-----------|--------------|
| 1 | **#5102** [Bug] WebUI Channel Cron 推送 `lastStatus=ok` 实未送达 | 🆕 0 评论 / 刚创建 | **可观测性与可靠性缺口**：用户依赖 `jobs.json` 状态判定执行结果，但 WebSocket 离线时推送路径断裂却未回滚状态。需引入 “送达确认/重试/死信” 机制或至少将状态标记为 `delivered_failed`。 |
| 2 | **#4924** [Bug] `unifiedSession` 无会话时心跳选目标崩溃 | 4 评论 / 👍0 | **边界条件未覆盖**：启动即统一会话、零历史会话时 `_pick_heartbeat_target_from_sessions` 空指针。已由 #4928 修复并测试覆盖。 |
| 3 | **#1012** [Feature] Subagent Profile 可配置工具/技能 | 2 评论 / 👍0 / `stale` | **多专业化 Agent 编排需求**：用户期望 “研究型/编码型/审查型” 子 Agent 拥有独立模型、工具白名单、预装 Skill。当前架构仅支持同质化 Subagent，阻碍复杂工作流落地。 |
| 4 | **#4792** [Bug] `/stop` 丢弃待发队列导致永久消息丢失 | 2 评论 / 👍0 | **优雅停机语义缺失**：对比 `_dispatch` 的重发逻辑，`cmd_stop` 直接 `get_nowait()` 丢弃。需补全 “停机前排空并重发” 或 “持久化待发队列” 方案。 |
| 5 | **#5098** [PR] 统一扩展平台（冲突/文档/测试/P1） | 评论数未显示 / 👍0 | **治理层面的大型重构**：将 Native/Extension/Skill/OpenClaw 统一入 Catalog、事务化生命周期、同一控制面。冲突标签暗示需解决合并冲突后再评审。 |

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 状态 | 已有 Fix PR | 说明 |
|--------|-------|------|-------------|------|
| **P0 安全** | 图片 URL 下载 SSRF/私网穿透/元数据服务访问 | 🟢 已修复合并 | **#5095**, **#5101** | 受限下载器 + 代理复用，已加回归测试 |
| **P1 核心功能** | `unifiedSession` 启动零会话心跳崩溃 | 🟢 已修复合并 | **#4928** | 关闭 #4924 |
| **P1 核心功能** | Dream 无 diff 批次不推进游标导致历史饥饿 | 🟢 已修复合并 | **#5054** | 关闭 #5041，含 21 条历史回归测试 |
| **P1 核心功能** | 长度截断恢复丢失早期片段 | 🟢 已修复合并 | **#5056** | 关闭 #5051，累积片段+锚定续写 |
| **P1 兼容性** | MCP Tool 非标 `$ref` 导致严格 Provider 拒绝整模型 | 🟢 已修复合并 | **#5057** | 关闭 #5040，Schema 规范化 |
| **P1 消息可靠性** | 排队中转消息丢失运行时身份 | 🟢 已修复合并 | **#5084** | 关闭 #4064，元数据块解析 |
| **P1 消息可靠性** | `/stop` 静默丢弃待发队列 | 🔴 **Open** | 无 | #4792 需补 PR，建议复用 `_dispatch` 重发逻辑 |
| **P1 可观测性** | WebUI Cron `lastStatus=ok` 实未送达 | 🔴 **Open** | 无 | #5102 需引入送达确认/状态机修正 |
| **P2 稳健性** | 配置文件 `null` 字段导致启动崩溃 | 🟢 已修复合并 | **#5087**, **#5088**, **#5089** | 空值容错 + 单测 |
| **P2 易用性** | WebUI 移动端长消息撑宽布局 | 🟢 已修复合并 | **#5100** | Grid 收缩约束 + 回归测试 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入下一版本可能性 | 备注 |
|------|------|--------|-------------------|------|
| **Subagent Profile（异构子 Agent）** | #1012 | 设计阶段，`stale` 标签 | ⭐☆☆ 低 | 需核心 Loop 重构，短期内仅作设计讨论 |
| **统一扩展平台** | #5098 (PR) | 代码完备，冲突中 | ⭐⭐⭐ 高 | 解决冲突后极大概率进 `v0.3.0`，作为架构里程碑 |
| **bwrap 额外绑挂根目录** | #4107 → #4625 | 已合并 | ✅ 已入 `main` | 0.2.3 即可用 |
| **空闲压缩扫描间隔可配** | #5036 | 已合并 | ✅ 已入 `main` | 树莓派等边缘设备直接受益 |
| **Codex OAuth Quick Start** | #4939 | 已合并 | ✅ 已入 `main` | 降低新用户准入门槛 |
| **DingTalk 群专用/群回复@发送者** | #4446 | 已合并 | ✅ 已入 `main` | 企业 IM 场景增强 |

**判断**：下一版本（`v0.2.3`）将以 **稳定性/安全/兼容性修复** 为主；`v0.3.0` 以 **扩展平台 #5098** 为核心特性；Subagent Profile 需单独 Epic 规划。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 场景 | 痛点原声 | 满意/不满意 | 隐性需求 |
|------|----------|-------------|----------|
| **树莓派/边缘部署** | “空闲占用 30-40% CPU 核心” (#5036) | 👍 修复后验证 CPU <5% | 更多资源敏感配置项（GC 频率、事件轮询间隔） |
| **企业 IM 集成** | “DingTalk 私聊无法禁用、群回复找不到人” (#4446) | 👍 两项增强均已合并 | Feishu/WeCom 同等能力对齐 |
| **长上下文编码** | “模型截断后前半段代码丢了，修补提示词也没用” (#5051) | 👍 #5056 累积片段解决 | 显式 “继续生成” 命令/快捷键 |
| **MCP 生态接入** | “加个第三方 MCP Tool 就整模型报错，怀疑是 Schema” (#5040) | 👍 #5057 规范化修复 | Schema 兼容性矩阵文档、自动修复 CLI |
| **Cron 可靠性** | “Job 显示 ok 但我没收到推送，信不过状态” (#5102) | 👎 状态机不可信 | 送达回执/重试/告警 Webhook |
| **优雅停机** | “Ctrl+C 后用户消息凭空消失” (#4792) | 👎 无修复 | 持久化待发队列或停机前排空确认 |

---

## 8. 待处理积压（

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-27

---

## 1. 今日速览

Hermes Agent 今日呈现**高强度维护与重构并行**态势：过去 24 小时共 50 条 Issue 更新、50 条 PR 活动，**无新版本发布**。核心动力来自**配置/Profile 生命周期的大规模重构**（7 个关联 PR/Issue 同日创建并关闭）、**多平台消息投递可靠性修复**（Telegram/Discord/Feishu/LINE）、**安全边界加固**（API Key 泄露、MCP OAuth 作用域）、**桌面端性能与启动竞态修复**，以及**国际化框架落地**。社区高度关注 **Buzz 集成提案（#68871，15 评论/13 👍）** 与 **Telegram 大文件上传超时（#62936）**。整体健康度良好，核心维护者（teknium1 等）正系统性清理技术债，但长期积压的 **Windows 桌面 WebSocket 竞态（#72391）** 与 **MCP schema 重命名回归（#55081）** 仍待深度复现。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次 Release 为 `v0.18.2`（含 `cua-driver 0.8.3`），当前主分支累积大量修复与重构，预计近期将切 `v0.19.0` 或 `v0.18.3` 维护版。

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 类型 | 核心变更 | 影响面 |
|---|---|---|---|
| [#70646](https://github.com/NousResearch/hermes-agent/pull/70646) | **BugFix (P2)** | `multiplex_profiles: true` 下，cron ticker 现遍历所有已服务 profile 的 cron store，修复次级 profile 定时任务**静默不执行** | 网关多租户、定时任务 |
| [#70987](https://github.com/NousResearch/hermes-agent/pull/70987) | **BugFix (P1)** | 网关重连看门狗在致命错误后**自动重启**，混合可重试/不可重试启动失败不再杀进程 | 网关稳定性、消息投递 |
| [#70989](https://github.com/NousResearch/hermes-agent/pull/70989) | **BugFix (P2)** | cron 作业 workdir 改用 **per-session cwd** 而非全局 `os.chdir`，防止泄漏进 gateway session | 并发隔离、会话状态 |
| [#72170](https://github.com/NousResearch/hermes-agent/pull/72170) | **BugFix (P2)** | 合并 6 位贡献者修复：**全平台 MEDIA 文件可靠投递**（修正 regex 漏匹配、Discord 上传竞态、标点/内联代码变体） | Discord/Feishu/Telegram/LINE 附件 |
| [#71782](https://github.com/NousResearch/hermes-agent/pull/71782) | **BugFix (P3)** | OpenRouter 辅助调用携带 `session_id` sticky routing key，**复用主会话端点**，提升缓存命中 | 成本控制、Provider 路由 |
| [#67369](https://github.com/NousResearch/hermes-agent/pull/67369) | **BugFix (P0, Windows)** | Bootstrap 安装器**解码非 UTF-8 PowerShell 输出**，mutable install-script 缓存每次刷新，杜绝“Retry 循环中毒缓存” | Windows 安装成功率 |
| [#71104](https://github.com/NousResearch/hermes-agent/pull/71104) | **BugFix (P2, Windows)** | Desktop 启动探针改用轻量 `/api/health`，避免冷启动时 `/api/status` 触发完整网关加载导致**误杀重启** | 桌面端冷启动成功率 |
| [#67192](https://github.com/NousResearch/hermes-agent/pull/67192) | **BugFix (P2, 批量)** | 4 项配置修复合入：`.env` 引号/UTF-16、aux `key_env`、profile-aware system prompt、**`.env sanitizer` 清理 `KEY=***` 占位符（#12651）** | 配置加载、凭据安全 |
| [#72192](https://github.com/NousResearch/hermes-agent/pull/72192) | **Feature (P2)** | `hermes update` 后**自动重启** systemd 托管与手动启动的后端进程 | 运维体验、零停机更新 |
| [#72362](https://github.com/NousResearch/hermes-agent/pull/72362) | **Security/Deps** | CVE 精准锁定升级：`cryptography 48.0.1`、`starlette 1.3.1`、`python-multipart 0.0.32`，`uv.lock` 同步 | 供应链安全、依赖降级 |
| [#69796](https://github.com/NousResearch/hermes-agent/pull/69796) | **BugFix (P2)** | Desktop clarify 选择框**清洗脏数据**，防止“死按钮”渲染 | 桌面端交互稳定性 |
| [#65239](https://github.com/NousResearch/hermes-agent/pull/65239) | **BugFix (P3)** | 新会话后**强制重绘嵌入式 Dashboard TUI**，消除 xterm.js 残留单元格 | TUI 视觉一致性 |

> **重构里程碑**：[#72376–#72383](https://github.com/NousResearch/hermes-agent/issues/72376) 7 个 Issue/PR 同日创建并关闭，完成 **Profile Clone 与 Backup/Restore 领域拆分** 的 RFC、实现、测试矩阵、文档、CLI 命令迁移、Dashboard/Desktop 对齐——标志着配置生命周期治理进入**显式契约阶段**。

---

## 4. 社区热点：讨论最活跃的 Issue/PR

| 排名 | Issue/PR | 评论/👍 | 核心诉求 | 分析 |
|---|---|---|---|---|
| 1 | [#68871](https://github.com/NousResearch/hermes-agent/issues/68871) **Feature: Add messaging support for Buzz** | 15 💬 / 13 👍 | 集成 Block 开源的 **Buzz**（自托管人机共享工作空间）作为新消息适配器 | 高社区热度，符合“Agent-as-team-member”愿景；需评估 Buzz API 稳定性、认证模型、多租户映射 |
| 2 | [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) **Telegram >15 MB 上传超时** | 7 💬 | `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` 不生效，PTB `media_write_timeout` 未设置 | 痛点明确，影响大文件场景；PR 空窗期长，建议优先修复 |
| 3 | [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) **.env sanitizer 不清理 `KEY=***` 占位符** | 5 💬 | 文档承诺清理但实现缺失，导致 `***` 当真实凭据写入 | 已在 [#67192](https://github.com/NousResearch/hermes-agent/pull/67192) 修复并合入 |
| 4 | [#51184](https://github.com/NousResearch/hermes-agent/issues/51184) **LINE 适配器降级时 cron 误报投递成功** | 4 💬 | 仅检查 adapter 对象存在，未验证实际发送结果 | 需在 cron scheduler 增加健康检查回调 |
| 5 | [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) **Durable Feedback Routing** | 4 💬 | 期望将 memory/skill/session_search 串联为闭环学习流 | 长期愿景型需求，需拆解为可增量交付的子任务 |

> **PR 讨论热度**：大多 PR 评论显示 `undefined`（可能为内部审查或自动化合并），但 [#23243](https://github.com/NousResearch/hermes-agent/pull/23243) **i18n 共享框架**（TUI+Dashboard）与 [#71410](https://github.com/NousResearch/hermes-agent/pull/71410) **/model 别名切换不泄露前 provider API Key** 涉及跨组件契约，值得关注后续 review 讨论。

---

## 5. Bug 与稳定性：今日报告/活跃的缺陷（按严重度）

| 严重度 | Issue | 状态 | 是否有 Fix PR | 关键信息 |
|---|---|---|---|---|
| **P0** | [#67369](https://github.com/NousResearch/hermes-agent/pull/67369) Windows Bootstrap 解码/缓存中毒 | ✅ **已合并** | 是（自身） | 已解决，含 PR #67193 #67194 |
| **P1** | [#70987](https://github.com/NousResearch/hermes-agent/pull/70987) 网关重连看门狗卡死 | ✅ **已合并** | 是（自身） | 已解决 |
| **P2** | [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) Telegram 大文件上传超时 | 🟢 **Open** | 无 | 环境变量不生效，需修 PTB `HTTPXRequest.media_write_timeout` |
| **P2** | [#51184](https://github.com/NousResearch/hermes-agent/issues/51184) LINE 降级误报成功 | 🟢 **Open** | 无 | cron scheduler 需感知 adapter 健康态 |
| **P2** | [#30626](https://github.com/NousResearch/hermes-agent/issues/30626) `gateway run` 只读启动时 `active_profile`，忽略热切换 | 🟢 **Open** | 无 | 多 Profile 运维阻滞，v0.14.0 回归 |
| **P2** | [#42727](https://github.com/NousResearch/hermes-agent/issues/42727) Agent 自配置持久化 redacted 凭据导致网关断联 | 🟢 **Open** | 无 | 安全边界问题，需在工具输出/上下文中屏蔽占位符回写 |
| **P2** | [#37501](https://github.com/NousResearch/hermes-agent/issues/37501) `hermes mcp add` 仅保留最后一个 `--env` | 🟢 **Open** | 无 | CLI 参数解析缺陷，静默丢数据 |
| **P2** | [#72391](https://github.com/NousResearch/hermes-agent/issues/72391) Windows Desktop WebSocket ready 竞态（GIL 停顿） | 🟢 **Open** (新) | 无 | **今日新报**，需复现；Electron + `hermes serve`/TUI gateway |
| **P3** | [#61334](https://github.com/NousResearch/hermes-agent/issues/61334) `reasoning_effort: minimal/max` 静默回落到 `medium` | 🟢 **Open** | 无 | Anthropic 兼容提供商统一 thinking budget |
| **P3** | [#55081](https://github.com/NousResearch/hermes-agent/issues/55081) MCP schema `definitions` → `$defs` 重命名破坏参数名 | 🟢 **Open** | 无 | 影响所有 MCP 工具注册，长期回归 |
| **P3** | [#67165](https://github.com/NousResearch/hermes-agent/issues/67165) macOS `cua-driver` ScreenCaptureKit `display_count=0` | 🟢 **Open** | 无 | TCC 权限正常但捕获失败，macOS 26.5.2 专属 |
| **P3** | [#70650](https://github.com/NousResearch/hermes-agent/issues/70650) `/model` 解析冒号模型名失败（如 `ollama-remote:ornith:9b`） | 🟢 **Open** | 无 | `parse_model_input` 单分割冲突 |

> **已修复但需回归验证**：[#72170](https://github.com/NousResearch/hermes-agent/pull/72170) MEDIA 投递修复覆盖 6 平台变体，建议在下一版本前跑全平台集成测试。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 社区热度 | 已有 PR/实现进展 | 入版概率（主观） |
|---|---|---|---|---|
| **Buzz 适配器** | [#68871](https://github.com/NousResearch/hermes-agent/issues/68871) | ⭐⭐⭐⭐⭐ (13👍) | 无 | **高** — 战略对齐，Block 开源项目，适配器模式成熟 |
| **Profile Clone/Backup 显式契约** | [#72376–#72383](https://github.com/NousResearch/hermes-agent/issues/72376) | 内部驱动 | **已全合并** | **已落地** — 将随下一版本发布 |
| **i18n 共享框架 (TUI+Dashboard)** | [#23243](https://github.com/NousResearch/hermes-agent/pull/23243) | 内部驱动 | **Open PR** | **高** — 架构就绪，Desktop 中文翻译 [#72390](https://github.com/NousResearch/hermes-agent/pull/72390) 已跟进 |
| **Desktop Ctrl+F 全局查找** | [#46169](https://github.com/NousResearch/hermes-agent/issues/46169) | 3 👍 | 无 | **中** — UX 完善类，依赖 Electron/React 集成 |
| **Delegate Task 每调用 Model/Provider 覆盖** | [#72394](https://github.com/NousResearch

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-27

> **数据来源**：GitHub API / 仓库 `sipeed/picoclaw`  
> **统计窗口**：2026-07-26 00:00 – 2026-07-27 00:00 (UTC)  
> **维护者提示**：本期无新版本发布，核心精力集中在 **安全加固**、**Provider 生态扩展** 与 **消息分片稳定性** 三大方向，共有 7 个 PR 待审，建议优先处理安全类与阻塞类变更。

---

## 1. 今日速览
- **活跃度评级**：🟢 **中高** — 单日 7 个 PR 同时涌现，其中 2 个直指安全/稳定性核心路径，社区贡献者响应迅速。
- **Issue 动向**：新增 1 个功能请求（AI Router 预置），2 个旧 Issue 被标记 `stale` 但仍有讨论，1 个 Bug (`#3252`) 于今日关闭。
- **PR 流向**：6 个 Open PR 覆盖「新 Provider 接入」「Token 刷新修复」「Go 版本升级」「路由归一化」「安全边界加固」「SplitMessage 死循环修复」「i18n 补全」；1 个 Go 版本升级 PR (`#3248`) 已合并，完成标准库漏洞修复。
- **风险点**：`#3265` Gateway 启动报错疑似配置注册残留，`#3264`/`#3295` 涉及消息分片死循环，已有修复 PR 但未合并，建议尽快 CI 验证后入主干。

---

## 2. 版本发布
> **无新版本发布**  
> 最近一次发布仍为早期版本，建议在合并 `#3248` (Go 1.25.12)、`#3297` (安全加固)、`#3295` (分片修复) 后切一条 `v0.x.x` 维护版本。

---

## 3. 项目进展
| PR | 状态 | 核心变更 | 影响面 | 进度评估 |
|----|------|----------|--------|----------|
| [#3248](https://github.com/sipeed/picoclaw/pull/3248) | ✅ **Merged** | Go toolchain 1.25.11 → 1.25.12，修复 `crypto/tls` 与 `os` 两个标准库漏洞 | 供应链安全、CI 绿化 | **已落地**，风险清零 |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | 🟢 Open | 远程 prompt/exec 边界硬化：system instruction 隔离、exec 默认关闭、逐次审批、配置迁移至 schema v4 | **核心安全**、**破坏性配置变更** | **高优**，需充分测试后合并 |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | 🟢 Open | 修复 `SplitMessage` 在超长 fence info string 时的无限循环，引入有界原始分片回退 | 消息通道稳定性、Markdown 渲染 | **阻塞级 Bug 修复**，配套回归测试完备 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 🟢 Open | 新增 Exa 原生 Web Search Provider (`tools.web`)，支持 highlights/date-range/`X-Api-Key` 认证 | Provider 生态扩展、工具调用 | **功能增强**，文档与配置示例齐全 |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | 🟡 Open (stale) | 修复 Antigravity token 刷新时 scope 传递错误导致 403 | 认证流、特定 Provider | **针对性修复**，需确认 antigravity 用户量 |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | 🟡 Open (stale) | `NormalizeAgentID/AccountID` 去除首尾下划线，修正正则契约 | 路由层 ID 规范化 | **低风险重构**，长期搁置建议合并或关闭 |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | 🟢 Open | 补全捷克语代码块标签 i18n | 国际化体验 | **琐碎但完整**，可快速合并 |

**整体推进度**：核心安全/稳定性 PR (`#3297`、`#3295`) 已就绪，合并后可显著提升版本成熟度；新 Provider (`#3299`) 丰富生态；其余为技术债偿还。

---

## 4. 社区热点
| 排名 | Item | 互动指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | [Issue #3298](https://github.com/sipeed/picoclaw/issues/3298) *Feature: Add AI Router as OpenAI-compatible provider preset* | 👍 0 / 💬 0 (新建) | **官方预置 AI Router**，降低用户配置门槛，维护者愿自行贡献代码 |
| 2 | [Issue #3252](https://github.com/sipeed/picoclaw/issues/3252) *splitKnownProviderModel strips provider prefix incorrectly* | 👍 0 / 💬 2 | **Provider ID 解析逻辑缺陷**，已于今日关闭，推测通过 `#3202` 或内部重构修复 |
| 3 | [Issue #3265](https://github.com/sipeed/picoclaw/issues/3265) *Gateway startup fails with unknown deltachat channel* | 👍 0 / 💬 1 | **未配置 deltachat 却报错**，疑似默认注册表残留，需排查 `gateway.go` 初始化逻辑 |
| 4 | [Issue #3264](https://github.com/sipeed/picoclaw/issues/3264) *SplitMessage hangs on oversized fence header* | 👍 0 / 💬 1 | **Markdown 分片死循环**，已有对应修复 PR `#3295` |

> **洞察**：社区更关注 **Provider 体验开箱即用** 与 **核心通道稳定性**；安全类 PR 虽无外部讨论但属维护者主动修复，优先级应高于功能类。

---

## 5. Bug 与稳定性
| 严重级 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| 🔴 **Critical** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) | `SplitMessage` 遇超长 fence info string 无限循环，导致消息发送卡死 | [#3295](https://github.com/sipeed/picoclaw/pull/3295) | **有修复，待合并** |
| 🟠 **High** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Gateway 启动即报错 `unknown type deltachat`，阻断服务启动 | 无 | **需排查注册表初始化** |
| 🟡 **Medium** | [#3252](https://github.com/sipeed/picoclaw/issues/3252) | `splitKnownProviderModel` 误剥离 provider prefix | 可能随 `#3202` 修复 | **已关闭** |
| 🟢 **Low** | [#3267](https://github.com/sipeed/picoclaw/pull/3267) | Antigravity token 刷新 scope 错误导致 403 | [#3267](https://github.com/sipeed/picoclaw/pull/3267) | **有修复，标记 stale** |

> **建议**：优先合并 `#3295` 解除死循环隐患；`#3265` 需指派人复现并定位是否为配置迁移遗留问题。

---

## 6. 功能请求与路线图信号
| 需求 | 来源 | 可行性 | 可能纳入版本 |
|------|------|--------|--------------|
| **AI Router 预置 Provider** | [#3298](https://github.com/sipeed/picoclaw/issues/3298) (官方主动提交) | ⭐⭐⭐⭐⭐ 仅需在 `pkg/providers/presets` 增加预设配置 | **下一版本 (v0.x+1)** 极大概率合并 |
| **Exa Web Search 原生支持** | [#3299](https://github.com/sipeed/picoclaw/pull/3299) (社区完整实现) | ⭐⭐⭐⭐⭐ 代码完备、含配置文档 | **下一版本** 同步合并 |
| **配置 Schema v4 迁移** | [#3297](https://github.com/sipeed/picoclaw/pull/3297) (安全重构伴随) | ⭐⭐⭐ 需迁移脚本与文档 | **配合安全版本** 发布 |

> **路线图推测**：下一个里程碑将聚焦 **「安全基线 (Schema v4 + Go 1.25.12) + 通道稳定性 + Provider 生态扩充 (AI Router, Exa)」**，预计 1-2 周内切版本。

---

## 7. 用户反馈摘要
- **痛点 1**：Gateway 启动即报错 (`#3265`)，用户未显式启用 deltachat，疑似默认插件注册机制泄露，**「开箱即用」体验受损**。
- **痛点 2**：发送含长代码块标题的消息导致客户端/网关卡死 (`#3264`)，**Markdown 重度用户受影响面广**。
- **期望 1**：主流聚合网关 (AI Router) 能像 OpenAI 一样直接在下拉框选择 (`#3298`)，**降低配置认知负载**。
- **正面**：社区贡献者主动提交 Exa Provider (`#3299`)、捷克语 i18n (`#3296`)，**生态共建氛围良好**。

---

## 8. 待处理积压提醒
| Item | 停滞时长 | 风险 | 建议动作 |
|------|----------|------|----------|
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) `fix(routing): strip underscores` | **26 天** (Open) | 低，但阻断 ID 规范化完整性 | **Review & Merge** 或明确拒绝理由关闭 |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) `fix scope bug for antigravity token` | **8 天** (stale) | 中，影响 antigravity 付费用户 | 确认用户量，**若>0 则优先合并** |
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway deltachat 报错 | **8 天** (stale) | 高，阻断所有新用户首次启动 | **指派核心维护者复现**，修复后加入启动冒烟测试 |

---

> **下一步行动建议**  
> 1. **今日内**完成 `#3295`、`#3297` Code Review 并合并至 `main`；  
> 2. **明日**处理 `#3299`、`#3298` (预置) 合并，同步更新文档；  
> 3. **本周内**清理 `#3202`、`#3267` 积压，修复 `#3265` 启动阻塞；  
> 4. 打 Tag `v0.x.x-security-stable` 发布维护版本。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-07-27

> **数据范围**：2026-07-26 00:00 – 2026-07-26 23:59 (UTC)  
> **数据源**：GitHub REST API / GraphQL 聚合

---

## 1. 今日速览
- **整体活跃度：高** — 过去 24 小时内 **2 个新 Issue**、**8 个 PR 更新**（6 待合并、2 已合并/关闭），核心团队与社区贡献者并行推进“显式目标”破坏性变更后的稳定性修复、WhatsApp 共享号模式修正、时区覆盖功能及 OpenCode 兼容性等多条主线。
- **核心风险聚焦**：两个高优先级 Issue（#3140、#3136）均指向 **显式目标迁移后的消息静默丢失/路由错误**，属于 **P0 级回归**，已分别有对应修复 PR（#3139、#3126）在审。
- **交付节奏**：2 个 PR 今日合并（修复重复回复、时区覆盖），功能增量稳步入库；大型特性 PR（#3050 Dial 通道、#3122 OpenCode 兼容）持续迭代，预示下一版本将包含显著功能扩展。
- **社区互动**：Issue/PR 评论数均为 0，反应数（👍）为 0，说明讨论多集中在内部 Code Review，外部用户反馈尚未集中爆发。
- **版本发布**：无新 Release，当前主分支处于 **vNext 预热期**，建议关注下周是否切 RC。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|------|----------|------------------|
| [#3028](https://github.com/nanocoai/nanoclaw/pull/3028) | **已合并** | Fix | 捕获 `send_message` 的出站序列，避免最终摘要触发重复包装推送 | **消除用户可见的重复回复**，稳定性基线 +1 |
| [#3125](https://github.com/nanocoai/nanoclaw/pull/3125) | **已合并** | Feature (core-team) | 引入 `container_configs` 迁移 020，支持按 Agent Group 覆盖 IANA 时区 | **多租户/跨时区部署能力落地**，运维灵活度显著提升 |
| [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) | 审核中 | Fix (core-team) | 禁止投递空内容 / `<internal>` 思维链到用户侧 | 直接修复 **P0 静默丢失/脏数据风险**，配合 #3136 根因 |
| [#3139](https://github.com/nanocoai/nanoclaw/pull/3139) | 审核中 | Fix | WhatsApp 共享号模式：不再全量丢弃 `fromMe` 消息 | 解决 **所有者消息被误判为回环而丢弃** 的长期痛点 |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | 审核中 | Feature (core-team) | 暖容器上下文保留、Agent 自助检查/请求更新 engagement policy、全局任务组选择保护 | **Agent 自治能力增强**，为后续多 Agent 编排铺路 |
| [#3138](https://github.com/nanocoai/nanoclaw/pull/3138) | 审核中 | Fix (chat-sdk) | 附件无 `fetchData` 时回退 `fetch(url)` | 提升媒体下载鲁棒性，减少边缘情况下的发送失败 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 审核中 | Feature Skill | 新增 **Dial** 通道（向导/技能/模型全套） | **通道生态扩展**，标志着语音/电话集成正式进入主线 |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | 审核中 | Fix (core-team) | OpenCode main 分支兼容、自定义端点传输、内存对齐 | **LLM 运行时适配层跟上上游**，降低厂商锁定风险 |

**进展量化**：+2 Merged PRs（含 1 迁移）、6 Active PRs（含 3 core-team）、0 Stale PRs 新增。

---

## 4. 社区热点

| 排名 | 对象 | 热度指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | [Issue #3140](https://github.com/nanocoai/nanoclaw/issues/3140) | 新开即 P0、关联破坏性变更 | **显式目标迁移后，存量群聊所有回复静默丢失**，需紧急回滚或热修复 |
| 2 | [Issue #3136](https://github.com/nanocoai/nanoclaw/issues/3136) | 新开、技术细节极深 | `sendToDestination` 回退错误 `in_reply_to` 导致 **跨目标路由失败**，需核心路由层修正 |
| 3 | [PR #3139](https://github.com/nanocoai/nanoclaw/pull/3139) | 修复 WhatsApp 共享号痛点 | 社区长期反馈的“自己发的消息自己收不到”问题，属高频场景 |
| 4 | [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 持续 13 天迭代、评论最多 | **Dial 语音通道上线**，外部开发者关注度高，文档/示例完善度成关键 |

> **洞察**：热点高度集中在 **“破坏性变更后的存量数据兼容”** 与 **“新通道落地”** 两大主题，反映项目处于 **架构重构收尾期 → 生态扩张期** 的过渡关口。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 (数据丢失/静默失败)** | [#3140](https://github.com/nanocoai/nanoclaw/issues/3140) | 存量群聊升级后，Agent 回复全部被 poll-loop 丢弃，日志提示 `Unknown destination` | 暂无直接 PR，需 #3126/核心路由联合修复 | 🔴 Open |
| **P0 (路由错位)** | [#3136](https://github.com/nanocoai/nanoclaw/issues/3136) | 无入站历史的目标被盖上无关 `in_reply_to`，导致 a2a 返回路径断裂 | [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) (禁止投递 internal/silence) | 🟡 Review |
| **P1 (功能缺失)** | 隐性 | WhatsApp 共享号模式下，所有者发送的消息被 blanket-drop | [#3139](https://github.com/nanocoai/nanoclaw/pull/3139) | 🟡 Review |
| **P2 (边缘崩溃)** | 隐性 | 附件缺 `fetchData` 时 SDK 抛错而非回退 | [#3138](https://github.com/nanocoai/nanoclaw/pull/3138) | 🟡 Review |

**建议**：优先合并 #3126 与 #3139 进主分支并切 **Hotfix 版本**，再推进 #3140 根因彻查。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 已有 PR 支撑 | 纳入下版本概率 |
|----------|----------|--------------|----------------|
| [#3125](https://github.com/nanocoai/nanoclaw/pull/3125) (Merged) | **Agent Group 级时区覆盖** | ✅ 已合并 | 100% (已在主线) |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | **Dial 语音/电话通道** | ✅ PR 成熟度高 | 90% (需文档/测试补齐) |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | **Agent 自助查看/请求修改 engagement policy** | ✅ 核心团队推动 | 80% (配合多 Agent 编排) |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | **OpenCode 兼容 & 自定义端点** | ✅ 核心团队推动 | 85% (降低厂商锁定) |
| Issue 讨论 (隐性) | **迁移工具/校验脚本** (针对 explicit-destinations) | ❌ 无 PR | 60% (视 #3140 处理优先级) |

**路线图推测**：vNext 将以 **“稳定性修复包 + Dial 通道 + 时区/多租户增强 + OpenCode 适配”** 为主题；显式目标迁移工具若无专人认领，可能滑到 vNext+1。

---

## 7. 用户反馈摘要
> 今日 Issue/PR 评论区**零用户发声**，无法直接提炼痛点。  
> 结合 Issue 描述反推：**存量部署用户对破坏性变更迁移体验极差**（无预警、无工具、静默失败），WhatsApp 共享号用户长期遭遇“自己发消息自己收不到”的 **功能性缺陷**。建议维护者在下版本 Release Note 增加 **迁移检查清单** 与 **回滚指引**。

---

## 8. 待处理积压提醒

| 对象 | 停滞天数 | 风险 | 建议动作 |
|------|----------|------|----------|
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 13 天 | 大型 Feature PR 长期挂审，易产生合并冲突 | 指定 Reviewer 专项推进，拆分文档/测试为子 PR 并行 |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | 4 天 | 核心运行时适配，影响外部贡献者接入 | 核心团队本周内完成 Review，避免阻塞社区生态 |
| [#3140](https://github.com/nanocoai/nanoclaw/issues/3140) | 0 天 (新) | **P0 回归**，影响所有存量升级用户 | **今日内** 指派 Owner 产出 Hotfix 或回滚方案 |
| 无标签的“迁移工具”需求 | 隐性 | 缺失将导致用户流失 | 创建 Epic Issue，纳入下 Sprint 规划 |

---

**下一报告预告**：关注 #3140/#3136 修复合并情况、Hotfix 版本是否切发、Dial PR (#3050) 终局审核进度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-07-27

> **数据基准**：GitHub 官方 API / 页面抓取 | 统计窗口：2026-07-26 00:00 – 23:59 (UTC)  
> **项目地址**：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

- **整体活跃度：低**（仅 1 条 Issue 更新，0 PR，0 Release），代码库处于**维护观察期**，无新功能推进。
- **核心风险**：存在 **1 个阻塞性严重 Bug（Issue #976）**，导致 aarch64 平台下 Telegram 网关每条入站消息必现 SIGSEGV 崩溃，形成“重启-丢消息”死循环，已持续 11 天未修复。
- **社区响应**：Issue #976 有 3 条评论，但均为作者自述与排查日志，**暂无维护者介入或修复 PR**，项目稳定性处于高风险状态。
- **架构隐患**：问题指向线程栈大小配置（~512 KB）在 ARM64 下不足，属基础设施层缺陷，修复优先级应为 P0。
- **建议**：维护团队需立即分流资源复现并修复 #976，必要时回滚至 v2026.5.29 前版本或发布热补丁版本。

---

## 2. 版本发布

> **今日无新版本发布**。当前最新稳定版仍为 **v2026.5.29**（即触发崩溃的版本）。

---

## 3. 项目进展

> **今日无 PR 合并/关闭**，代码库无实质性前进。  
> **阻塞项**：Issue #976 未解决前，主分支在 aarch64 环境下**不可用于生产**。

---

## 4. 社区热点

| 排名 | 标题 & 链接 | 更新时间 | 评论/👍 | 核心诉求 |
|------|-------------|----------|---------|----------|
| 1 | **[#976 SIGSEGV on every inbound Telegram message — inbound worker thread spawned with a ~512 KB stack overflows](https://github.com/nullclaw/nullclaw/issues/976)** | 2026-07-26 | 3 / 0 | **生产环境完全不可用**：aarch64 Linux 下每条 Telegram 入站消息触发栈溢出崩溃，服务陷入 crash-loop，消息全部丢失。用户急需修复或规避方案。 |

**分析**：该 Issue 为当前社区**唯一**活跃讨论点，且直接关联核心链路可用性，维护者响应缺失超 24h，社区信心受损。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 现状 | 是否有 Fix PR |
|--------|-------|------|------|---------------|
| **P0 - Critical** | [#976](https://github.com/nullclaw/nullclaw/issues/976) | aarch64 下 Telegram 入站工作线程栈溢出导致 SIGSEGV | **Open / 无人认领** | ❌ 无 |
| **潜在风险** | — | 其它平台（x86_64, armv7）是否存在相似栈大小不足隐患 | 未验证 | — |

**关键技术细节（来自 Issue 描述）**：
- 崩溃位置：`inbound worker thread` 启动时栈大小约 **512 KB**。
- 触发条件：**每条**入站 Telegram 消息必现。
- 影响版本：**v2026.5.29**（当前最新版）。
- 环境：`aarch64 Linux`，systemd `Restart=always` 导致消息无限丢失。

---

## 6. 功能请求与路线图信号

> **今日无新功能请求**，亦无 PR 暗示路线图变动。  
> **隐性信号**：#976 暴露出“线程栈大小配置缺乏跨架构自测”，建议在下一版本（或热修复版）中引入：
> 1. **可配置线程栈大小** 参数（环境变量/配置文件）。
> 2. **CI 增加 aarch64 压力测试**，覆盖 Telegram 入站高并发场景。

---

## 7. 用户反馈摘要

**来源**：Issue #976 评论区（作者 wonhotoss 自述）

| 痛点 | 原话摘录 | 影响 |
|------|----------|------|
| **服务完全不可用** | “each message kills the process, it restarts, and the message is dropped, so the user never gets a reply” | 业务中断，消息 100% 丢失 |
| **无规避手段** | 未提供临时配置变通（如增大 ulimit -s 或调整线程属性） | 用户被迫停机或回滚 |
| **反馈周期长** | Issue 创建 11 天，更新 1 天前，**无维护者回复** | 信任度下降，考虑迁移替代方案 |

**满意度**：**极低**（核心功能在主流 ARM 服务器架构上失效且无人响应）。

---

## 8. 待处理积压（需维护者立即关注）

| 条目 | 类型 | 滞留时长 | 建议行动 |
|------|------|----------|----------|
| [#976](https://github.com/nullclaw/nullclaw/issues/976) | **Critical Bug** | 11 天（创建） / 1 天（最近更新） | **1. 立即指派 Owner 复现**  <br>**2. 若 24h 内无法合并 Fix，发布 v2026.5.29-hotfix.1 回滚或加大默认栈**  <br>**3. 在 README/部署文档增加 aarch64 已知限制警示** |
| 无其它长期积压 PR/Issue | — | — | 当前仅此一项阻塞性积压 |

---

### 📌 给维护团队的行动清单（Action Items）

1. **今日内** 在 #976 留言确认复现计划或临时缓解方案（如 `ulimit -s unlimited` 或 `pthread_attr_setstacksize`）。
2. **48h 内** 产出修复 PR（调整线程栈默认值至 ≥ 1 MB 或使其可配置）并合并至 `main`。
3. **发布** `v2026.7.27-hotfix` 或下一个稳定版，更新 `CHANGELOG` 标注 `Security/Stability Fix`。
4. **补齐 CI**：在 GitHub Actions / 自建 Runner 增加 `aarch64` 矩阵，跑 Telegram 入站压测。

---

*报告生成时间：2026-07-27 06:00 UTC*  
*下一份日报将关注 #976 修复进度及是否有新版本发布。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-27

---

## 1. 今日速览
**整体状态：高强度架构重构期，核心聚焦于“Reborn”错误恢复体系与 MCP 生态集成，伴随大规模依赖维护。**  
- **活跃度评估：⭐⭐⭐⭐⭐** —— 单日 18 条 PR 活动（12 待合并、6 已关闭）、5 条 Issue 更新，核心贡献者与 Dependabot 并行推进。  
- **关键信号**：  
  - **Epic #6284** 进入落地阶段，PR #6684 完成“五合一”失败词汇表重构，配合 #6677 合入的编译期一致性矩阵，标志着错误可恢复性契约从设计转入强制执行。  
  - **P2b MCP 发现机制** 经由 #6683 重新基于主干实现，彻底替代旧分支 #6365，纳入“每线程雇佣作用域”设计。  
  - **沙箱凭证隔离** (#6689) 与 **签名意图/密钥生命周期** (#6672) 两大安全基建并行推进，均为 XL 级变更。  
  - **严重用户阻断 Bug #6690**（积分耗尽导致聊天永久挂起）今日新报，暂无修复 PR，需优先响应。  
  - 依赖更新占比高（7 条 Dependabot PR），其中 #5664（GitHub Actions v4→v7 等 16 项）滞留 22 天，存在供应链风险。

---

## 2. 版本发布
**今日无新版本发布。**  
⚠️ **待发布积压**：#5598（`chore: release`）自 7 月 3 日开启至今未合并，拟发布：  
- `ironclaw_common` 0.4.2 → 0.5.0 (**Breaking**)  
- `ironclaw_skills` 0.3.0 → 0.4.0 (**Breaking**)  
- `ironclaw_safety` 0.2.2 → 0.2.3  
**迁移提示**：`failure` 类型实现变更、技能注册表 API 重构，下游需同步适配。建议维护者尽快评审合并以解除阻塞。

---

## 3. 项目进展 —— 今日合并/关闭的关键 PR
| PR | 类型 | 核心推进内容 | 对项目的增量价值 |
|----|------|--------------|------------------|
| [#6679](https://github.com/nearai/ironclaw/pull/6679) | **Refactor/Cleanup** | 结构化 Ratchet 硬化：用 `syn` 解析替代行扫描，修复多行 `cfg_attr`/`impl` 漏检；移除废弃 Gemini API。 | 提升编译期守门可靠性，清理技术债，为 #6284 词汇表重构铺路。 |
| [#6677](https://github.com/nearai/ironclaw/pull/6677) | **Test/Infra** | 引入 `RecoverabilityClass` 分类器（Retry/ModelVisible/Park/Terminal），对 7 个错误枚举实现无通配符全覆盖测试。 | **Epic #6284 项 7 落地**——将“可恢复性契约”从文档转为编译期/测试期强约束。 |
| [#5369](https://github.com/nearai/ironclaw/pull/5369) | **Bug Fix** | 抑制 Cranelift/Wasmtime 编译器调试日志洪水，扩展现有回归测试。 | 解决托管环境日志成本与可读性问题，生产稳定性改善。 |
| [#6365](https://github.com/nearai/ironclaw/pull/6365) | **Reference/Closed** | 旧分支 P2b MCP 发现参考实现关闭，**被 #6683 完全取代**。 | 确认技术方向收敛，避免分支分叉维护成本。 |
| [#6640](https://github.com/nearai/ironclaw/pull/6640) / [#4032](https://github.com/nearai/ironclaw/pull/4032) | **Deps** | 合并/关闭多批次依赖更新（`async-trait`, `thiserror`, `uuid`, `wit-*` 等）。 | 维持依赖新鲜度，消除已知 CVE 暴露窗口。 |

**整体推进度**：Reborn 核心架构（错误模型、沙箱、签名）三大支柱同步推进，**从“设计文档”进入“强约束实现”阶段**；MCP 生态能力完成主干回迁。

---

## 4. 社区热点 —— 高互动/高关注项
| 项 | 热度指标 | 核心诉求分析 |
|----|----------|--------------|
| **#6284 [EPIC] error-recoverability endgame** | 💬 8 条评论，跨 8 天持续更新 | **架构级共识构建**：核心团队在“错误必须可被模型看见、可决策、可恢复”契约细节上反复打磨（如“原因+成功条件”双载荷、非成功绝不上报），PR #6684/6677 为直接落地产物。 |
| **#6690 [BUG] 积分耗尽导致聊天永久 “thinking…”** | 🆕 今日新开，0 评论但 **严重级最高** | **用户感知断层**：无任何前端提示、无错误码、无降级路径，用户只能去仪表盘发现欠费。属于 **“静默失败” 典型反模式**，急需补充信用额度检查中间件 + 前端兜底态。 |
| **#6684 [PR] refactor(reborn): one failure vocabulary** | 👀 XL 级、核心贡献者主导、关联 Epic | **技术债偿还里程碑**：将 5 个重叠失败枚举折叠为 35 变体 `FailureKind` + 投影函数，修复 4 个误判终态 Bug。评审通过后将锁定错误模型 ABI。 |
| **#6683 [PR] P2b: per-user hosted-MCP discovery** | 👀 XL 级、新贡献者、Supersedes #6365 | **生态开放能力交付**：Worker Agent 按雇佣上下文动态获得连接器工具，配合 `ToolResolver` 无作用域设计，是“托管 Agent 即服务”关键解锁。 |

---

## 5. Bug 与稳定性 —— 按严重度排序
| 严重度 | Issue/PR | 现象 | 影响范围 | 修复状态 |
|--------|----------|------|----------|----------|
| **🔴 Critical** | [#6690](https://github.com/nearai/ironclaw/issues/6690) | 积分耗尽 → 聊天卡死 “thinking…” 无限等待，零反馈 | **所有 Web/CLI 终端用户**，信用制计费场景 100% 复现 | ❌ 无 PR，**建议立即派生 Hotfix 分支** |
| **🟠 High** | [#6652](https://github.com/nearai/ironclaw/pull/6652) (fix for #6575) | `systemd` `WorkingDirectory=` 被错误加引号 → `Loaded: bad-setting` → Linux `ironclaw onboard` 失败 | Linux 桌面/服务器部署用户 | ✅ PR 待合并（M 级，低风险） |
| **🟡 Medium** | [#536

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-27

> **数据来源**：GitHub API（netease-youdao/LobsterAI）  
> **统计窗口**：2026-07-26 00:00 – 2026-07-27 00:00 (UTC)  
> **报告生成**：2026-07-27

---

## 1. 今日速览
- **整体活跃度：低**（维护期特征）。过去 24 小时无新版本发布，仅有 2 条 Issue 活动（1 关闭、1 更新）与 8 条 PR 活动（均为 4 月初创建的“陈旧” PR 近期被刷新/标记 stale）。
- **核心动向**：PR 队列集中在 **OpenClaw 网关稳定性**、**Cowork DiffView 渲染修复**、**定时任务表单 UX 完善（防误删/自然语言）** 及 **i18n 补全**；Issue 端暴露 **Linux 版本呼声** 与 **qwen-portal-auth 插件导致网关频繁重启** 的严重稳定性隐患。
- **健康度信号**：高优先级 Bug (#1243) 尚无关联 Fix PR 进入合并流程；多个功能型 PR 停留在 `stale` 状态超 3 个月，审阅吞吐存在瓶颈。
- **社区互动**：Issue/PR 评论数极低（均 ≤2），缺乏外部贡献者参与讨论，项目呈“内部推进、外部静观”态势。

---

## 2. 版本发布
**无新版本发布**。当前最新版本为 `2026.4.1`（Issue #1243 环境信息中提及）。

---

## 3. 项目进展（已合并/关闭 PR）
| PR | 标题 | 类型 | 影响模块 | 进展评估 |
|----|------|------|----------|----------|
| [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) | **feat(ui): 为新建对话图标按钮添加悬停提示** | UX 微优化 | `CoworkView`、`CoworkSessionDetail`、`AgentsView`、`McpView` | ✅ **已合并**。侧边栏折叠时图标按钮补充 `title` 属性，消除“无标签图标”可用性缺陷，属低风险、高确定性的体验补丁。 |

> **整体推进度**：仅 1 个微型 UI PR 合并，核心功能/修复类 PR 均处于 `OPEN + stale` 状态，实质性里程碑推进为 **0**。

---

## 4. 社区热点
| 排名 | 对象 | 热度指标 | 核心诉求 |
|------|------|----------|----------|
| 1 | **Issue [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243)** | 更新最新（07-26）、评论 1、涉及核心网关稳定性 | **P0 级 Bug**：`qwen-portal-auth` 插件配置循环写入 → OpenClaw 网关每 5-20 分钟重启一次，严重影响 Windows 生产可用性。用户期望：配置稳定化、停止无故重启。 |
| 2 | **Issue [#273](https://github.com/netease-youdao/LobsterAI/issues/273)** | 创建早（03-05）、近期关闭、👍 0 | **平台扩展需求**：Ubuntu/Linux 原生版本。维护者以“暂无计划/资源不足”关闭，但反映跨平台需求长期存在。 |
| 3 | **PR [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247)** | `codex` 标签、关联模型切换恢复 | **架构级修复**：OpenClaw 模型/Provider 变更后的自动恢复机制、会话存储迁移。若合并将显著提升多模型切换鲁棒性。 |
| 4 | **PR [#1249](https://github.com/netease-youdao/LobsterAI/pull/1249)** | 修复 DiffView 核心渲染缺陷 | **开发体验阻断**：Claude SDK / OpenClaw 实际工具名（`str_replace_editor`、`file_editor` 等）未被识别导致 DiffView 失效，影响代码协作核心功能。 |

---

## 5. Bug 与稳定性
| 严重级 | Issue / PR | 标题 | 状态 | 关联 Fix PR | 备注 |
|--------|------------|------|------|-------------|------|
| **P0 - 阻断** | [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | qwen-portal-auth 插件配置循环写入导致网关频繁重启 | **OPEN** | **无** | 影响版本 `2026.4.1`，Windows 环境复现率高，无 Workaround，需紧急排期。 |
| **P1 - 严重** | [#1249](https://github.com/netease-youdao/LobsterAI/pull/1249) | DiffView 无法渲染（工具名匹配过窄） | **OPEN (stale)** | **本身即 Fix PR** | 已定位根因并给出补丁，覆盖 Claude SDK / OpenClaw 真实工具名，建议尽快 Review 合并。 |
| **P2 - 一般** | [#1257](https://github.com/netease-youdao/LobsterAI/pull/1257) | i18n 缺失 `edit`/`delete` 导致按钮显示 Key | **OPEN (stale)** | **本身即 Fix PR** | 低风险文案缺陷，补全 zh/en 即可。 |

> **稳定性结论**：当前主干版本存在 **网关频繁重启（P0）** 与 **核心 Diff 失效（P1）** 两大已知缺陷，均无对应 Fix 已合并，生产环境升级需谨慎。

---

## 6. 功能请求与路线图信号
| 需求来源 | 信号强度 | 可能纳入下一版本？ | 理由 |
|----------|----------|-------------------|------|
| **PR [#1256](https://github.com/netease-youdao/LobsterAI/pull/1256)** 定时任务自然语言调度 | 🔥 高（已实现 LLM 解析器、模式切换、编辑锁定） | **极大概率** | 功能完整度高，UI/交互细节打磨到位，仅待 Review。 |
| **PR [#1252](https://github.com/netease-youdao/LobsterAI/pull/1252)** / **[#1258](https://github.com/netease-youdao/LobsterAI/pull/1258)** 定时任务未保存确认弹窗 | 🔥 高（两份实现并存，含 a11y、dirty-check、双路径拦截） | **极大概率** | 重复实现说明需求真实，建议合并取长补短后统一入库。 |
| **PR [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247)** OpenClaw 模型切换恢复 & 会话迁移 | ⚡ 中高（架构级、涉及会话存储迁移） | **中等** | 变更面广，需充分回归测试，可能延后至大版本。 |
| **Issue [#273](https://github.com/netease-youdao/LobsterAI/issues/273)** Linux 原生版 | 🧊 低（已关闭） | **否** | 维护者明确表示暂不支持，短期无望。 |

---

## 7. 用户反馈摘要
- **痛点 1**：**网关不稳定**。“每 5-20 分钟弹窗‘AI 引擎正在启动网关…’，完全无法正常工作”（Issue #1243 复现步骤 3）。
- **痛点 2**：**代码协作无 Diff 可视化**。Cowork 模式下 Edit 工具仅显示原始 JSON，无法直观对比修改（PR #1249 描述）。
- **期望 1**：**跨平台支持**（Linux），虽被关闭但反映用户基数在扩大（Issue #273）。
- **期望 2**：**表单防误操作**。定时任务编辑投入大量精力后误点取消/返回导致数据丢失（PR #1252/1258 动机）。
- **满意点**：侧边栏折叠时图标悬停提示已修复（PR #1325），细节体验有响应。

---

## 8. 待处理积压（建议维护者本周关注）
| 对象 | 停滞时长 | 优先级 | 建议动作 |
|------|----------|--------|----------|
| **Issue [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243)** | 118 天（创建 04-01） | **P0** | 指派核心网关工程师复现 Root Cause，产出 Hotfix PR，标记 `bug`+`urgent`。 |
| **PR [#1249](https://github.com/netease-youdao/LobsterAI/pull/1249)** | 118 天 | **P1** | 安排 Code Review，确认工具名白名单完整性后合并，解锁 DiffView。 |
| **PR [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247)** | 118 天 | **P1** | 评估会话迁移脚本回滚风险，补充集成测试后合并。 |
| **PR [#1256](https://github.com/netease-youdao/LobsterAI/pull/1256)** / **[#1252](https://github.com/netease-youdao/LobsterAI/pull/1252)** / **[#1258](https://github.com/netease-youdao/LobsterAI/pull/1258)** | 118 天 | **P2** | 定时任务模块 3 个强相关 PR 建议打包 Review，合并统一交付。 |
| **PR [#1259](https://github.com/netease-youdao/LobsterAI/pull/1259)** | 118 天 | **P2** | OpenClaw 打包/依赖优化（stub 包、chalk patch、env 别名），属技术债偿还，可并行推进。 |

---

> **下一期预告**：若 #1243 无实质性进展，建议发布 `2026.4.2` 热修复版本；定时任务系列 PR 若本周合并，将构成下一 Minor 版本 (`2026.5.x`) 核心亮点。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-27

---

## 1. 今日速览
- **活跃度极高**：过去 24 小时内 **50 个 Issue** 与 **50 个 PR** 同时更新，且无 Issue 关闭、仅 2 个 PR 合并，呈现“并行攻坚、交付滞后”态势。  
- **核心矛盾**：Windows 测试全红（#7462，74 个失败）、Landlock 沙箱自锁（#9233 已合并）、MCP 僵尸进程（#8731）、Web 仪表盘会话中断（#8559）等 **P1/S1 级阻断性缺陷** 并存，CI 仅跑 Linux 导致跨平台回归长期未被发现（#7461）。  
- **安全债务集中爆发**：Gemini API Key 泄露（#9386）、`image_gen` SSRF（#8826）、Landlock 策略过严（#8973, #9114）、命令审计日志默认开启（#9410）等安全类 PR/Issue 占据高位，显示 v0.8.3 发布后安全加固进入“补课期”。  
- **交付管线整理中**：#9101 合并三套签名机制、#9376 准备 v0.8.4 发布（首次支持 `cargo install zeroclaw`）、#7108 优化 CI 关键路径，显示项目正从“功能堆砌”转向“工程化交付”。  
- **社区协作健康**：高评论 Issue/PR 均带有 `status:accepted` / `status:in-progress` 标签，维护者响应及时，但 `needs-author-action` 标签较多（如 #8826, #9193, #9197），提示贡献者回复跟进仍是瓶颈。

---

## 2. 版本发布
**无新版本发布**。  
但 **PR #9376**（`chore(release): cut v0.8.4`）已开启，包含：  
- 工作区重命名 `zeroclawlabs` → `zeroclaw`，支持 `cargo install zeroclaw`  
- 18 个 crate 发布至 crates.io，5 个保留内部  
- 移除废弃 crate、更新 changelog、修复发布流水线  
> 📌 **关注点**：该 PR 体量巨大（`size:XL`），合并后将标志 ZeroClaw 进入“可分发二进制”新阶段。

---

## 3. 项目进展（今日合并/关闭的关键 PR）
| PR | 标题 | 影响面 | 状态 |
|----|------|--------|------|
| **#9233** | `fix(runtime/security): Prevent landlock locks zeroclaw itself` | **Landlock 沙箱不再锁死自身守护进程**，解决首次 shell 调用后 daemon 被限制的致命缺陷 | ✅ **CLOSED (merged)** |
| **#9376** | `chore(release): cut v0.8.4` | 发布准备：crate 重命名、crates.io 发布、移除 5 个内部 crate | 🟡 **OPEN (审核中)** |

> **整体推进评估**：仅 1 个 P1 安全修复合并，其余 48 个 PR 均处审核/讨论中。v0.8.4 发布阻塞于 #9376 及其依赖 PR（如 #9101 签名合并、#9114 Landlock 策略放宽）。

---

## 4. 社区热点（评论/互动最集中的 Issue/PR）
| 对象 | 评论数 | 核心诉求 | 关联链接 |
|------|--------|----------|----------|
| **#7462** | 14 | **Windows CI 缺失导致 74 测试失败**（路径语义、编码、仅限 Unix 命令），要求在 CI 矩阵加入 Windows/macOS | [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **#9101** | 7 | **三套并行签名机制冗余**（cosign/artifact attestation/slsa-generator），要求合并为单一流水线、资产从 53 个降至 ~20 个 | [Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) |
| **#5514** | 6 | **Telegram 媒体组批量处理**：多图一次性发送导致多轮对话，期望合并为单次多模态轮次 | [Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) |
| **#6157** | 6 | **Nextcloud Talk 机器人 API 路径错误**，导致回复发送失败 | [Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) |
| **#8654** | 5 | **skill-review fork 数组越界引发 SIGSEGV**，工具密集型对话后 daemon 崩溃 | [Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |
| **#9234** | — | **Web 端推理内容渲染**：reasoning-only 轮次不再静默挂起 | [PR #9234](https://github.com/zeroclaw-labs/zeroclaw/pull/9234) |
| **#8826** | — | **image_gen 下载 URL SSRF 防护**：需作者修正 `needs-author-action` | [PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) |

> **热点洞察**：跨平台兼容性（#7462, #7461）、供应链安全（#9101, #8826）、多模态通道体验（#5514, #6157）是社区最关心的三大主题。

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 已有 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **S1 (工作流阻断)** | **#8559** | Web 仪表盘退出聊天窗口即中断 Agent 任务 | 无 | `status:in-progress` |
| **S1** | **#8560** | `browser_open`/TTS/ffmpeg 子进程无界等待导致 Agent 挂起 | 无 | `tool:mcp` 相关 |
| **S1** | **#9035** | Docker Compose 网关端口发布但仍绑定 loopback，连接拒绝 | 无 | `runtime/daemon` |
| **S1** | **#9085** | pgvector 启用时 `try_enable_pgvector` 嵌套 panic，网关/Agent 启动失败 | 无 | `memory:backend` |
| **S2 (功能降级)** | **#7462** | Windows 74 测试失败（路径、编码、仅限 Unix 命令） | 无 | 需 CI 矩阵扩展 (#7461) |
| **S2** | **#8973** | Landlock 禁止 `sh` 访问 `/dev/null`，shell 工具全军覆没 | **#9114** (审核中) | Fedora 复现 |
| **S2** | **#8731** | stdio MCP 服务器累积为僵尸进程 | 无 | `tool:mcp` |
| **S2** | **#9089** | Tool output 仅支持 `[IMAGE:]` 不支持 `[AUDIO:]` 标记 | 无 | `provider` 多模态 |
| **S2** | **#7911** | `install.sh` 在 Android/Termux 误装通用 Linux 二进制 | 无 | 安装脚本 |
| **S3 (轻微)** | **#5514** | Telegram 媒体组拆分多轮 | 无 | `channel:telegram` |
| **S3** | **#6157** | Nextcloud Talk 使用错误 Bot API | **#9181** (审核中) | `channel:nextcloud-talk` |
| **S3** | **#8810** | Telegram 文档示例错误 | 无 | 文档 |

> **趋势**：S1/S2 占比 70%+，且多为 **运行时/沙箱/通道** 核心路径缺陷，说明 v0.8.3 发布后“生产可用性”仍有显著缺口。

---

## 6. 功能请求与路线图信号
| 需求来源 | 核心诉求 | 纳入下一版本可能性 | 依据 |
|----------|----------|-------------------|------|
| **#7461** | CI 矩阵扩展至 Windows/macOS | ⭐⭐⭐⭐⭐ (极高) | 与 #7462 绑定，已获 `status:accepted`，基建优先级 P2 |
| **#9101** | 合并三套签名机制，减少发布资产 | ⭐⭐⭐⭐⭐ (极高) | `status:in-progress`，直接关联 v0.8.4 发布效率 |
| **#8409** | Cron shell 作业支持原始 stdout 输出 | ⭐⭐⭐ (中) | `status:accepted`，增强自动化脚本可用性 |
| **#7099** | `zeroclaw status` 输出接入 CLI i18n | ⭐⭐ (低) | P3，国际化长期债务 |
| **#8720** | Bedrock Nova 2 Lite 禁用 cachePoint 配置项 | ⭐⭐⭐ (中) | `r:support`，用户明确需求，配置层面易实现 |
| **#9385** | WhatsApp Web 实现 `request_approval` 交互式审批 | ⭐⭐⭐⭐ (高) | `feat(channels)` 已开 PR，关闭 #9366 |
| **#9424** | Reliable provider 拒绝空终端完成，修正推理轮次语义 | ⭐⭐⭐⭐ (高) | 今日新 PR，修正核心 Provider 行为 |

> **路线图推断**：v0.8.4 将聚焦 **“可发布、可跨平台、可安全”** 三大主题；v0.9 方向指向 **多模态通道完善（Telegram/WhatsApp/QQ）、Provider 运行时选项隔离（#7870）、观测性集成（#8337 Herdr）**。

---

## 7. 用户反馈摘要（从评论中提炼）
| 场景 | 痛点原话/意图 | 情绪倾向 |
|------|---------------|----------|
| **Windows 开发/自托管** | “CI 只跑 Linux，导致 Windows 上 74 个测试全红，路径、编码全挂了” (#7462) | 😡 **强烈不满** |
| **Web 仪表盘长任务** | “给 Agent 任务后关掉窗口，任务就停了，完全没法后台跑” (#8559) | 😡 **阻断流程** |
| **Telegram 多图转发** | “发两张图 Agent 回两条消息，体验极差，期望合成一轮多模态” (#5514) | 😐 **体验降级** |
| **Termux 移动端安装** | “install.sh 给我装了通用 Linux 二进制，根本跑不起来” (#7911) | 😕 **安装受阻** |
| **Landlock 沙箱** | “开启沙箱 shell 直接挂，连 `/dev/null` 都访问不到” (#8973) | 😡 **安全特性不可用** |
| **Nextcloud Talk 集成** | “文档里的 API 全是错的，根本发不出消息” (#6157, #8810) | 😕 **文档失信** |
| **配置秘钥粘贴** | “`zeroclaw config set` 粘贴 API Key 完全无回显，不知道输没输进去” (#7808) | 😐 **交互细节差** |
| **Gemini Key 泄露** | “报错里直接把 `?key=...` 发到聊天里了，吓死我了” (#9386) | 😱 **安全恐慌** |

> **共性**：**“文档/默认配置/跨平台/后台长任务”** 四大落差最直观地影响用户信任。

---

## 8. 待处理积压（长期未响应/高优先级未推进）
| 对象 | 停滞时长 | 标签 | 风险 | 建议动作 |
|------|----------|------|------|----------|
| **#7462** | 47 天 | `priority:p1, risk:high` | Windows 全平台不可用 | 指派专人推进 #7461 CI 矩阵，拆解 74 失败为子任务并行修复 |
| **#5514** | 110 天 | `priority:p2` | Telegram 核心体验缺陷 | 评估是否纳入 v0.8.4，否则明确延后至 v0.9 里程碑 |
| **#7828** | 40 天 | `type:tracker, priority:p2` | UTF-8 截断潜在 panic 面 | 分配代码审计任务，配合 `clippy::chars_next` 等 lint 全仓扫描 |
| **#7870** | 40 天 | `type:tracker, priority:p2` | Provider 运行时选项泄漏 | 设计统一 `ProviderRuntimeConfig` 解析入口，避免首个配置胜出 |
| **#7872** | 40 天 | `type:tracker, priority:p1` | QQ 群被动回复缺 `msg_id` | 结合 #9180 后续，补全协议字段 |
| **#8337** | 31 天 | `size:XL, risk:high` | Herdr 观测性集成巨 PR | 拆分为：核心上报 trait、CLI 适配、文档三小 PR 降低审核压力 |
| **

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*