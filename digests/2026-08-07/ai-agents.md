# OpenClaw 生态日报 2026-08-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-07 02:21 UTC

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

# OpenClaw 项目日报 | 2026-08-07

---

## 1. 今日速览

OpenClaw 今日呈现**高并发维护态势**：过去 24 小时累计 1000 条 Issue/PR 更新（Issue 500 条，PR 500 条），其中 **430 个 Issue 处于活跃/新开状态**、**402 个 PR 待合并**，显示项目处于密集的迭代修复与功能落地期。无新版本发布，但合并/关闭 98 个 PR，说明主干持续吸收修复。核心关注点集中在 **模型调用稳定性、消息投递可靠性、会话状态/内存管理、跨平台兼容性、网关冷启动性能** 五大维度。社区高热度 Issue（如 #75 Linux/Windows 客户端缺失、#116277 DeepSeek 静默失败、#119087 网关冷启动回归）均已关闭或有明确 Fix PR，维护响应速度较快。

---

## 2. 版本发布

**今日无新版本发布**。当前最新稳定版仍为 `2026.7.x` 系列，beta 分支推进至 `2026.7.2-beta.7`。多个 PR（如 #120107、#120098）涉及发布流程与 Windows 诊断，预示下一版本（可能为 `2026.8.1`）将包含大量稳定性修复。

---

## 3. 项目进展

今日合并/关闭 **98 个 PR**，覆盖核心通道、Agent 运行时、内存/编译、UI、发布工程等模块。关键进展：

| PR | 类型 | 核心变更 | 影响面 |
|---|---|---|---|
| [#117456](https://github.com/openclaw/openclaw/pull/117456) | **Fix (LINE)** | 修复 LINE 通道消息动作/投递契约不一致，解决 quick reply、Flex、imagemap 等 7 类载荷竞争导致的静默丢消息 | 消息投递可靠性、兼容性 |
| [#117022](https://github.com/openclaw/openclaw/pull/117022) | **Fix (Telegram)** | 保留语音隐私降级可见文本：`VOICE_MESSAGES_FORBIDDEN` 时回退文本而非抛错丢包 | Telegram 通道可用性 |
| [#119169](https://github.com/openclaw/openclaw/pull/119169) | **Fix (Channels)** | 将 `adapter_returned_no_identity` 归类为“可能已送达”，避免重复投递或误判丢包 | 所有通道投递去重 |
| [#116253](https://github.com/openclaw/openclaw/pull/116253) | **Fix (Embedded Runner)** | 运行预算超时前刷新部分流式输出，防止有效文本被截断 | Agent 长轮次完整性 |
| [#119827](https://github.com/openclaw/openclaw/pull/119827) | **Fix (Channels)** | 入口声明候选列表拆分，规避 SQLite 绑定变量上限导致的入队永久卡死 | 高并发入口稳定性 |
| [#120108](https://github.com/openclaw/openclaw/pull/120108) | **Fix (Gateway/Agents)** | 防止合成子 Agent/生命周期轮次污染 Claude CLI 会话、修复幂等键丢失导致的重复/丢包 | 会话隔离、消息去重 |
| [#118680](https://github.com/openclaw/openclaw/pull/118680) | **Fix (Config)** | 放行 `ModelCompatConfig` 已声明的 6 项 OpenAI 兼容路由设置，解决配置被 Schema 拦截 | 模型兼容层可用性 |
| [#120020](https://github.com/openclaw/openclaw/pull/120020) | **Fix (Agent Core)** | 显式 `thinkingLevel: "off"` 透传至 OpenAI 兼容传输，避免默认 `high` 导致推理泄露 | 推理控制、成本 |
| [#107152](https://github.com/openclaw/openclaw/pull/107152) | **Fix (Memory Core)** | 召回内容剥离 QMD 传输元数据（`@@ -start,count @@` 行号包裹） | 记忆检索纯净度 |
| [#118831](https://github.com/openclaw/openclaw/pull/118831) | **Fix (macOS)** | 恢复 Settings 面板滚动：修复缓存 pane root 拦截滚动事件 | 桌面端体验 |
| [#119574](https://github.com/openclaw/openclaw/pull/119574) | **Feat (Web UI)** | 新增 Assistant 消息气泡表面偏好设置（浅色主题拷贝一致性） | WebChat 个性化 |
| [#120100](https://github.com/openclaw/openclaw/pull/120100) | **Fix (Diagnostics)** | CLI 模式保留累计 token 用量，修复 `openclaw.model.usage` 仅上报最后一次调用 | 可观测性、成本核算 |
| [#118430](https://github.com/openclaw/openclaw/pull/118430) | **Fix (Node CLI)** | `openclaw node install` 检测 systemd user lingering 并告警，防止登出后节点离线 | 自托管运维 |
| [#116462](https://github.com/openclaw/openclaw/pull/116462) | **Fix (Skills)** | 生命周期移除前解析 owner-qualified 引用，防止 scoped skill 歧义 | 技能市场治理 |
| [#119976](https://github.com/openclaw/openclaw/pull/119976) | **Fix (Nextcloud Talk)** | 发送/预检阶段脱敏上游错误体中的 Authorization 头，堵塞凭证回显 | 安全边界 |
| [#119874](https://github.com/openclaw/openclaw/pull/119874) | **Docs** | 明确 `exec timeout` 单位为秒，避免调用方误传毫秒导致超时失效 | 开发者体验 |

**整体推进度**：核心通道（LINE/Telegram/Feishu/Nextcloud Talk）投递链路显著硬化；Agent 运行时（嵌入式/子 Agent/编译/推理开关）修复了多个数据丢失与状态污染回归；发布工程补全 Windows 诊断与预发布插件对齐；内存/技能/配置层面完成若干长期技术债清理。

---

## 4. 社区热点

| Issue | 状态 | 评论/👍 | 核心诉求 | 分析 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **CLOSED** | 116 / 80 | **Linux/Windows 原生客户端缺失**——仅有 macOS/iOS/Android，呼吁对齐功能集 | 已关闭但 👍 极高，反映桌面端分发是长期痛点；可能转入 Electron/Tauri 重构或原生打包路线图 |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | **CLOSED** | 114 / 0 | **DeepSeek v4 Flash 静默失败**——无回复生成，回退通用兜底文案 | P1 级模型集成故障，已闭合，推测由 Provider 侧修复或 OpenClaw 侧超时/重试策略调整解决 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **OPEN** | 28 / 0 | **记忆信任标签（按来源分级）**——防止 Web 抓取/三方技能注入恶意指令污染长期记忆 | 安全架构级需求，涉及 `memory-core`、`lancedb`、编译管线，需 SDK 与运行时协同，暂无 PR |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | **OPEN** | 9 / 0 | **网关冷启动回归 2.5 倍**（1 vCPU 容器） | P1 回归，阻塞自托管扩缩容；关联 PR [#120098](https://github.com/openclaw/openclaw/pull/120098) 正补全 Windows 诊断，Linux 侧仍需火焰图定位 |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | **OPEN** | 6 / 0 | **Agent DB v14→v15 迁移失败**：`no such column: entry_valid` 导致网关拒启 | P0 级数据迁移阻断，影响存量用户升级；需 Alembic/手工补丁脚本，暂无 Fix PR |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | **OPEN** | 5 / 0 | **嵌入式 Agent `totalTokens` 虚高触发过早编译**（仅 4–8% 上下文）导致数据丢失 | P0 回归，直接造成上下文截断；关联编译触发逻辑，急需修复 |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | **OPEN** | 5 / 0 | **CLI 预算编译超时远低于 deadline（4.9s–50s）**，大会话 100% 失败陷入死亡螺旋 | 编译管线超时计算缺陷，叠加 #118772 形成双重打击 |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | **OPEN** | 8 / 0 | **Windows vitest teardown EBUSY**：`openclaw-agent.sqlite` 句柄未释放 | Windows CI 稳定性阻滞，需在测试夹具中显式关闭连接池 |
| [#88079](https://github.com/openclaw/openclaw/issues/88079) | **OPEN** | 7 / 1 | **WebChat 推理流不渲染**（Kimi Code/DeepSeek Reasoner），仅 MiniMax 正常 | 前端流式解析器对 `reasoning_content` 字段兼容缺失，影响推理模

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-08-07）

---

## 1. 生态全景

当前生态呈现**“头部集中化迭代、中腰差异化深耕、长尾项目自然沉淀”**的成熟态势。头部项目（OpenClaw、Hermes、IronClaw、ZeroClaw、CoPaw、NanoBot）日均百条级 Issue/PR 更新，核心精力已从功能堆砌转向**可靠性工程**（事务化升级、幂等投递、会话隔离）、**协议标准化**（MCP/A2A/AgentScope 对齐）与**可观测性基建**（Inspector、诊断流、Token 审计）。中腰项目在特定协议（QQ/Telegram/Matrix）、特定形态或隐私/安全细分领域构建护城河。长尾项目多因缺乏持续维护资源进入休眠。生态整体确立了 **“网关/运行时内核 + 多通道适配 + 技能/工具生态 + 桌面/客户端分发”** 的标准化分层架构。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | 合并/关闭 PR | 版本发布 | 健康度评估 | 核心标签 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | **98** | 无 (beta 推进) | ⭐⭐⭐⭐⭐ **超高并发维护** | 企业级网关、多通道、高可靠性 |
| **Hermes Agent** | 50 | 50 | ~10 | 无 (0.20.0 稳定) | ⭐⭐⭐⭐ **高活跃重构期** | 桌面优先、插件生态、神文件拆解 |
| **IronClaw** | 50 | 50 | ~10 | **v1.1.0 (昨日)** | ⭐⭐⭐⭐ **发布后稳定化** | MCP 生态、Inspector 可观测性、NearAI |
| **ZeroClaw** | 35 | 50 | 7 | 无 (0.8.3 稳定) | ⭐⭐⭐⭐ **高活跃治理期** | SOP 工作流、A2A 互操作、安全加固 |
| **CoPaw** | 34 | 50 | **29** | 无 (2.1.0b1) | ⭐⭐⭐⭐ **冲刺修复期** | AgentScope 对齐、Desktop Beta、上下文重构 |
| **NanoBot** | 10 | 17 | 5 | 无 | ⭐⭐⭐⭐ **高密度迭代** | 隐私优先、WebUI 打磨、会话隔离 |
| **NanoClaw** | - | - | **8** | 无 | ⭐⭐⭐ **聚焦核心修复** | 事务化升级、调度器自愈、技能治理 |
| **LobsterAI** | 2 (新) | 0 | 0 | 无 | ⚠️ **停滞/需关注** | 易用性痛点、PR 冲突积压、技术债 |
| **PicoClaw** | 0 | 2 | 1 | 无 | ⭐⭐ **低频维护** | QQ 协议、轻量级、嵌入式倾向 |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 0 | 无 | ☠️ **休眠/归档态** | - |

> **数据说明**：OpenClaw 量级为其他项目 10-50 倍，属于生态“核心基础设施”层级；Hermes/IronClaw/ZeroClaw/CoPaw 形成“第一梯队活跃阵营”；NanoClaw/PicoClaw 处于“专项攻坚/维护期”；LobsterAI 面临交付阻塞风险。

---

## 3. OpenClaw 在生态中的定位

### 核心优势
1.  **规模与吞吐量霸主**：日处理 1000+ 更新、400+ 活跃 Issue、400+ 待合并 PR，展示极强的社区吸附力与维护带宽，是生态事实上的**“标准库/参考实现”**。
2.  **工程质量体系最完善**：建立“五大维度”（模型稳定、投递可靠、状态管理、跨平台、冷启动）质量红线，PR 合并即附带回归修复（如 #117456 LINE 竞争修复、#119827 SQLite 绑定变量上限规避），工程成熟度远超同类。
3.  **全通道覆盖广度最广**：LINE/Telegram/Feishu/Nextcloud Talk/Matrix/Slack/Discord 等主流 IM 全覆盖，且深度解决各协议边缘案例（隐私降级、投递去重、凭证脱敏）。

### 技术路线差异
| 维度 | OpenClaw | 同类对比 (Hermes/IronClaw/ZeroClaw) |
| :--- | :--- | :--- |
| **架构定位** | **中心化智能网关**（Gateway-centric） | Hermes: 桌面原生 Agent；IronClaw: MCP 编排中心；ZeroClaw: SOP 工作流引擎 |
| **状态管理** | 强一致性会话/内存核心，嵌入式 Runner 预算控制 | Hermes: Scroll 协议统一上下文；ZeroClaw: 验证意图链 + 会话绑定 |
| **扩展机制** | Skill/Channel/Provider 三层插件，Schema 驱动配置 | IronClaw: MCP Server 注册；Hermes: 插件接口扩展中 |
| **部署形态** | 自托管网关 + 多端客户端 (macOS/iOS/Android，Win/Linux 缺失) | Hermes/CoPaw/NanoBot 强桌面端；IronClaw/ZeroClaw 服务端优先 |

### 社区规模对比
*   **OpenClaw** 单日活跃贡献者数量、Issue 讨论深度（如 #75 116 评论）、👍 数量级均为生态 **Top 1**，形成了“报告即修复、修复即合并”的高效闭环。
*   **Hermes/ZeroClaw/IronClaw** 依托学术/商业实体（Nous/NearAI/ZeroClaw Labs）拥有稳定核心团队，但社区广度不及 OpenClaw。
*   **CoPaw/NanoBot** 具备强学术背景，社区规模中等但粘性高。

---

## 4. 共同关注的技术方向（多项目共振信号）

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **🔒 会话隔离与安全边界** | **OpenClaw** (#120108 子 Agent 污染修复)、**NanoBot** (#5271 旧 Session 脏数据、#5270/5269 API Key 泄露)、**ZeroClaw** (#9737 Pipeline 绕过工具门控)、**CoPaw** (#6611 Scroll 统一上下文协议) | 从“进程级隔离”向“会话/子任务级强隔离”演进，凭证管理下沉至 Provider/Subprocess 边界。 |
| **📦 事务化/原子化运维操作** | **NanoClaw** (#3195 升级事务化)、**ZeroClaw** (SOP 执行审计 #9784)、**OpenClaw** (网关冷启动回归 #119087) | 解决“升级中途失败”、“长任务静默死锁”、“冷启动性能抖动”等生产级可用性痛点。 |
| **🔌 协议标准化与互操作** | **IronClaw** (MCP 任意注册、Inspector API)、**ZeroClaw** (A2A 出向客户端 RFC #9106)、**CoPaw** (AgentScope 2.0 对齐 #6611)、**Hermes** (插件接口稳定化 #64182) | **MCP 成事实标准**，A2A、AgentScope、ACP 形成多极竞争/共存，项目纷纷建设适配层与合规性测试。 |
| **🖥️ 桌面/客户端分发与体验** | **OpenClaw** (#75 Win/Linux 客户端缺失 80👍)、**Hermes** (#79407 面板缺失 P0、#80710 Win 更新损坏)、**CoPaw** (Desktop 2.1.0b1 崩溃修复)、**NanoBot** (WebUI 冷启动优化 #5262、动效打磨 #5267) | **Windows/Linux 原生支持成刚需**；Electron/Tauri/Wails 技术选型分化；大粘贴、编码兼容、动效细节成体验分水岭。 |
| **🧠 上下文/记忆工程化** | **OpenClaw** (#107152 记忆剥离元数据、#118772 Token 虚高触发编译)、**Hermes** (#78645 Context Compressor 神文件拆解)、**ZeroClaw** (#7100 模型能力配置 RFC)、**NanoBot** (#5231 梦境归档长期记忆) | 从“堆 Token”转向“压缩/召回/分级/信任标签”工程化，防止上下文污染与成本失控。 |
| **📊 可观测性与成本核算** | **OpenClaw** (#120100 CLI Token 累计)、**IronClaw** (Inspector 模型调用统计 #7277)、**NanoBot** (#5266 Token 审计日志)、**Hermes** (活动面板实时更新 #5701) | 统一埋点 `Provider.chat_with_retry`、实时诊断流、Token 归因到具体调用，满足企业级 FinOps 需求。 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 关键架构决策 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **多租户网关、企业级通道集成、高并发消息总线** | 企业 IT、自托管平台构建者、Bot 运营商 | Go/Rust 混合内核、SQLite 嵌入式存储、Schema 驱动配置、Embedded Runner 隔离 |
| **Hermes Agent** | **桌面原生自主 Agent、插件生态、代码/工具深度操作** | 开

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-07

> **数据来源**：GitHub API（HKUDS/nanobot），统计窗口：过去 24 小时  
> **报告生成时间**：2026-08-07 08:00 UTC

---

## 1. 今日速览

- **活跃度评级：🔥 高** —— 过去 24 小时合计 **27 条** Issue/PR 更新（Issue 10、PR 17），其中 **5 个 PR 已合并/关闭**，显示核心维护团队处于密集迭代期。
- **安全与稳定性为核心主线**：三个 P0/P1 级安全修复 PR（#5270、#5269、#5271）同步推进，解决 API Key 泄露、会话数据竞态等高风险问题。
- **多渠道体验持续打磨**：Matrix、Weixin、WebUI 终端等通道层均有功能增强或协议兼容性修复。
- **会话/内存架构重构进行中**：会话隔离（#5276、#5278）、临时会话（#5252）、归档机制（#5231）等 PR 表明长期记忆与上下文管理正在系统性升级。
- **零新版本发布**：当前处于功能冻结前的“修复-增强”并行阶段，预计下一个里程碑版本将打包本周累积的安全补丁与体验改进。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
|----|------|----------|------------------|
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | **Bug Fix / Channel** | Matrix `_on_room_invite` 发送非空 POST body，修复 Continuwuity 拒绝加入房间 | 消除 Matrix 通道在特定 HomeServer 上的**硬性可用性阻断** |
| [#5259](https://github.com/HKUDS/nanobot/pull/5259) | **Feature / WebUI** | 强制临时会话仅驻留内存，不落盘、不进入历史记录 | 交付“隐私优先”临时聊天模式的**核心合同**，配合 #5252 完成功能闭环 |
| [#5261](https://github.com/HKUDS/nanobot/pull/5261) | **Feature / WebUI** | 侧边栏会话拖拽排序、拖入 Composer 生成结构化提及 | 大幅提升 WebUI **多会话并行工作流**的交互效率，对齐 Codex/ChatGPT 体验 |
| [#5262](https://github.com/HKUDS/nanobot/pull/5262) | **Perf / WebUI** | 预压缩 gzip 资产、拆分懒加载 Chunk、移除共享运行时冗余 | **冷启动体积显著下降**，首屏加载性能迈入新台阶 |
| [#5267](https://github.com/HKUDS/nanobot/pull/5267) | **Polish / WebUI** | 统一过渡时长 220ms、锚定内容防抖、尊重 `prefers-reduced-motion` | 交互**动效质感专业化**，消除“完成态延迟感” |

> **整体进度判断**：核心安全修复（P0/P1）与用户可见的 WebUI 体验升级已落地，会话隔离与记忆归档等架构级 PR 仍在 Review，项目向 **vNext 稳定版** 推进约 **70%**（安全/体验层就绪，架构层待合并）。

---

## 4. 社区热点（高互动/高关注）

| 对象 | 互动指标 | 核心诉求分析 |
|------|----------|--------------|
| [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) | 💬 3 条评论，跨周持续更新 | **模型切换 UX 断层**：用户期望像 SaaS 产品一样在会话级即时切换模型，而非仅作 fallback；暴露当前“模型绑定在实例而非会话”的架构短板。 |
| [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290) | 💬 2 条评论，长期开放 | **Cron + Subagent 协作死锁**：子任务完成后主 Agent 无法收尾，阻断自动化工作流；属于**编排层状态机缺陷**，需优先修复。 |
| [PR #5270](https://github.com/HKUDS/nanobot/pull/5270) / [#5269](https://github.com/HKUDS/nanobot/pull/5269) | 同属 P1 安全修复，作者 LHMQ878 连续产出 | **凭据隔离共识**：社区对“进程级环境变量泄露”零容忍，推动将 Secret 管理下沉至 Provider/Subprocess 边界。 |
| [Issue #5278](https://github.com/HKUDS/nanobot/issues/5278) | 新开即引用 PR #713 回归分析 | **会话存储路径安全性**：工作区级隔离导致历史记录暴露在项目目录，引发供应链/共享仓库泄露风险；架构决策需权衡隔离与安全。 |

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 关联 Fix PR | 状态 |
|--------|-------|------|-------------|------|
| **P0 (数据竞态/丢失)** | [#5273](https://github.com/HKUDS/nanobot/issues/5273) | 会话保留裁剪误删 `_channel_delivery` 主动消息，导致 Cron/Job 通知丢失 | [#5272](https://github.com/HKUDS/nanobot/pull/5272) | **Open / 已有 PR** |
| **P0 (会话状态损坏)** | 隐含于 [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务持有旧 Session 引用，`/new` 导致覆盖保存脏数据 | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | **Open / 已有 PR** |
| **P1 (凭据泄露)** | 隐含于 [#5270](https://github.com/HKUDS/nanobot/pull/5270) / [#5269](https://github.com/HKUDS/nanobot/pull/5269) | CLI 子进程/Provider 初始化将 API Key 写入全局 `os.environ` | [#5270](https://github.com/HKUDS/nanobot/pull/5270)<br>[#5269](https://github.com/HKUDS/nanobot/pull/5269) | **Open / 已有 PR** |
| **P2 (功能缺失)** | [#5264](https://github.com/HKUDS/nanobot/issues/5264) | 历史消息接口不返回 media_root 外附件的签名 URL | [#5268](https://github.com/HKUDS/nanobot/pull/5268) | **Open / 已有 PR** |
| **P2 (协议不兼容)** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix 受邀加入房间失败 | [#5248](https://github.com/HKUDS/nanobot/pull/5248) | **Closed / 已合并** |
| **P2 (工具参数校验)** | 隐含于 [#5265](https://github.com/HKUDS/nanobot/pull/5265) | `NaN`/`Infinity` 穿透 JSON Schema 校验进入工具执行 | [#5265](https://github.com/HKUDS/nanobot/pull/5265) | **Open / 已有 PR** |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR/进展 | 纳入下一版本概率 |
|----------|----------|--------------|------------------|
| [Issue #5276](https://github.com/HKUDS/nanobot/issues/5276) | **会话级临时文件隔离**（技能演化共享 vs 隔离的可配置平衡） | 无直接 PR，但 #5278 讨论同一存储层 | 🟡 中（需设计 Flag/Strategy） |
| [Issue #5278](https://github.com/HKUDS/nanobot/issues/5278) | **会话历史移出工作区**（防止 `.git` 泄露、供应链污染） | 回溯 PR #713，可能需迁移脚本 | 🟢 高（安全优先，已有共识） |
| [Issue #5275](https://github.com/HKUDS/nanobot/issues/5275) / [#5274](https://github.com/HKUDS/nanobot/issues/5274) | **Matrix 线程/回复语义对齐 Discord/Slack** | 无 PR，属 Channel 层增强 | 🟡 中（多通道一致性建设） |
| [PR #5231](https://github.com/HKUDS/nanobot/pull/5231) | **空闲会话归档喂给 Dream（长期记忆）** | Open，含设计文档 | 🟢 高（Memory 系统关键拼图） |
| [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) | **集成 MST 元搜索 Provider** | Open，测试完备 | 🟢 高（搜索能力跃升，P1 优先级） |
| [PR #5253](https://github.com/HKUDS/nanobot/pull/5253) | **项目级共享交互式终端** | Open，冲突标记，依赖 PTY 基建 | 🟡 中（复杂度高，需解冲突） |

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点/场景 | 代表性声音 | 潜在影响 |
|-----------|------------|----------|
| **模型切换不直观** | “点击模型标签无反应，`/model` 命令似乎只改 fallback”（#5198） | 多模型协作场景下**认知负荷高**，阻碍“最佳模型选用”工作流 |
| **自动化流水线中断** | “Cron 触发子 Agent 后主流程卡死，日志显示无后续回复”（#4290） | **生产级定时任务不可用**，影响 CI/CD、定时巡检等刚需 |
| **Token 成本黑盒** | “2 小时静默烧百万 Token，无法定位哪个调用/哪个 Provider”（#5266） | 企业用户**成本可观测性缺失**，阻碍大规模落地 |
| **隐私/隔离焦虑** | “工作区目录下出现 `sessions/` 让人不敢提交 Git”（#5278） | **合规与安全红线**，可能导致团队禁用或自建 Fork |
| **临时会话真·临时** | “期望不落盘、不进历史、不进记忆，纯内存销毁”（#5259 评论隐含） | 满足**一次性敏感任务**（密钥处理、代码审计等）合规需求 |

---

## 8. 待处理积压（长期未响应/高价值）

| 对象 | 停滞时长 | 为何需关注 | 建议行动 |
|------|----------|------------|----------|
| [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290) | **58 天** | Cron+Subagent 死锁阻断自动化，属核心编排 Bug | 指派 Owner，拆解为“子任务完成事件回主循环”子任务，设为 **P0** |
| [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) | **7 天** | 会话级模型切换是多模型时代基础 UX，涉及 Session/Provider 解耦 | 引入 `Session.model_override` 字段，配合 WebUI 下拉即时生效 |
| [PR #5231](https://github.com/HKUDS/nanobot/pull/5231) | **4 天** | Dream 记忆管道缺口，长期空闲会话永不产生 `history.jsonl` | 加速 Review，纳入 vNext，解锁“长期记忆自动化” |
| [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) | **4 天** | 搜索质量短板，MST 聚合 + RRF 可显著提升检索召回 | 依赖 `mst-python` 稳定性确认，建议先合并至 `next` 分支灰度 |
| [Issue #5278](https://github.com/HKUDS/nanobot/issues/5278) | **0 天（新）** | 会话存储路径回归安全性，影响所有多租户/共享仓库场景 | 召集架构组紧急评估：迁移回 `~/.nanobot/sessions/` + 工作区软链接，或加密存储 |

---

### 📌 维护者行动清单（建议今日内）

1. **合并 P0/P1 安全修复**：`#5270`、`#5269`、`#5271`、`#5272` → 立即 CI 通过后合入 `main`，切 **Hotfix 标签**。
2. **解决 Cron 死锁 (#4290)**：指派核心编排工程师，本周内产出 Fix PR。
3. **会话存储路径决策 (#5278)**：召集 30 分钟架构会议，输出 ADR，避免后续迁移成本指数级上升。
4. **推进 Dream 归档 (#5231) 与 MST 搜索 (#5234)**：列入下一里程碑 `vNext` 必交付清单。
5. **Token 审计日志 (#5266)**：评估在 `Provider.chat_with_retry` 统一埋点

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-07

> **数据来源**：GitHub Issues/PR 过去 24 小时增量（Issues: 50 更新，PRs: 50 更新）  
> **统计口径**：2026-08-06 20:00 – 2026-08-07 20:00 (UTC)

---

## 1. 今日速览
- **活跃度极高**：单日 100 条 Issue/PR 更新，核心维护团队与社区贡献者并行推进 **“神文件拆解”重构史诗**、**Feishu/Lark 卡片交互修复**、**Desktop 端回归修复** 与 **MCP/Tooling 增强** 四大战线。
- **重构主线推进**：Epic #78647（拆解全库 20 个神文件）已拆出 6 个子 Issue（#78645, #78637, #78632, #78792, #79894 等），多个 PR（如 #79894）进入审核，架构治理进入“交付期”。
- **桌面端稳定性压力大**：0.20.0 回归导致底部操作面板缺失（#79407）、Windows 自更新损坏运行时（#80710）、SSH 版本检查误报（#74411）集中爆发，已有 3 个 Fix PR（含 #80713, #80699）提交。
- **安全加固持续**：两个安全类 Issue（#77484, #77162）暴露工具结果路径的敏感信息泄露风险，社区已给出复现与修复方向。
- **插件生态扩展**：Revelata deepKPI 金融技能集（#80592）、Laravel LSP（#75720）、MCP 确定性录制/回放（#80475）等 PR 丰富可选技能与开发工具体验。

---

## 2. 版本发布
> **今日无新版本发布**。当前最新稳定版仍为 `0.20.0`，主分支积累大量修复与重构，预计近期将切 `0.21.0-rc`。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 状态 | 核心变更 | 影响面 |
|----|------|----------|--------|
| **#80699** | ✅ CLOSED | 修复 Desktop 工具面板/浏览器/反应在远程/Cloud 网关消失问题（移除 `HERMES_DESKTOP=1` 硬编码门控） | Desktop、远程会话、Cloud 网关 |
| **#79868** | ✅ CLOSED | 修复 `launchd` plist 重载导致网关标签丢失、KeepAlive 失效 | macOS 网关部署稳定性 |
| **#80709** | ✅ CLOSED | 修复 `read_file` 在 UTF-8 截断处误判二进制（byte 1000 截断导致 U+FFFD） | 文件工具、跨平台编码兼容 |
| **#80717** | 🔄 OPEN | **移植自 kimi-code**：`read_file` 自动转码 UTF-16 → UTF-8（解决 Windows Notepad/PowerShell 重定向乱码） | 文件工具、Windows 体验 |
| **#80716** | 🔄 OPEN | **借鉴 ChatGPT Work**：>10k 字粘贴自动生成 `.txt` 附件芯片，避免作曲区洪水 | Desktop Composer UX |
| **#80714** | 🔄 OPEN | 修复零匹配探测隐藏路径（#80522），将探测到的文件路径直接返回模型 | 搜索工具、弱模型推理效率 |
| **#80444** | 🔄 OPEN | 网关入口重置继承的 `ContextVars`，防止并发消息跨会话污染 | 网关并发安全、会话隔离 |
| **#80712** | 🔄 OPEN | MCP 工具结果 `_meta` 透传模型（过滤协议保留键） | MCP 生态、结构化工具返回 |
| **#79894** | 🔄 OPEN | `kanban_db.py` 神文件切片 R2：事务原语提取至 `kanban_db_txn.py` | CLI 架构治理、神文件拆解进度 |

> **里程碑感知**：神文件拆解 Epic（#78647）已完成 **6/20** 子文件拆分计划，首批 PR 进入审核；Desktop 0.20.0 回归修复 **3/5** 关键问题已有 PR。

---

## 4. 社区热点（评论/互动 Top 5）

| # | 标题 | 评论 | 👍 | 核心诉求 | 关联 PR/动态 |
|---|------|------|----|----------|-------------|
| **#78647** | **Epic: Shard all 20 god files** | 53 | 0 | 全库架构治理：强制拆解 20 个 >5k 行神文件，建立“只拆不并”红线 | #78645, #78637, #78632, #78792, #79894 |
| **#64182** | **Plugin Interface Expansion Tracking** | 27 | 0 | 社区提案汇总：稳定插件接口、解除长期排队 PR 阻塞 | 多插件 PR 依赖此 Issue |
| **#78645** | **Shard `agent/context_compressor.py` (6,789 LOC)** | 19 | 0 | 核心 Agent 上下文压缩器拆解，关联记忆/摘要管线 | 待 PR |
| **#79407** | **[0.20.0 Regression] Desktop 底部操作面板完全缺失** | 8 | 0 | **P0 阻塞**：桌面端退化为只读查看器，Command Center/Gateway/Sub-agent 入口全无 | 急需 Fix PR |
| **#80424** | **Grok/xAI Feature Parity Campaign** | 9 | 0 | 对齐 xAI 官方平台（Function Calling、Reasoning、Imagine、Voice/TTS） | 规划中 |

> **洞察**：重构史诗（#78647）与桌面回归（#79407）构成“长期治理 vs 短期生存”双主线，社区关注度高度集中。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 影响范围 | 已有 Fix PR | 备注 |
|--------|-------|------|----------|-------------|------|
| **P0 阻塞** | **#79407** Desktop 底部面板缺失 | 0.20.0 升级后操作面板消失，App 退化为 viewer | Desktop 全平台 | ❌ 无 | 需立即回滚或热修复 |
| **P0 数据/安全** | **#80710** Windows 自更新损坏运行时 | 更新失败导致现有 Python 运行时损坏，无法启动 | Windows Desktop | ❌ 无 | 用户需手动重装 |
| **P1 回归** | **#79339** `MemoryProvider.sync_turn` 未被调用 | 0.20 后外部记忆后端静默停止接收轮次 | 记忆插件、长期会话 | ❌ 无 | 无报错、难排查 |
| **P1 兼容** | **#79628** `use_gateway: true` 丢弃有效直连凭证 | Gateway 未认证时拒绝回退直连凭证 | Web/TTS/Browser 工具 | ❌ 无 | 凭证管理回退逻辑缺失 |
| **P1 平台** | **#74411** SSH 版本检查参数顺序错误 | `python --version <script>` 误报版本、忽略 `remoteHermesPath` | Desktop SSH 模式、源码安装 | ❌ 无 | 误导用户升级 |
| **P2 崩溃** | **#80652** MCP stdio 桥 `args: null` 崩溃 | `TypeError: Value after * must be iterable` 导致连接循环 | MCP stdio 服务器 | ❌ 无 | 配置校验缺失 |
| **P2 功能** | **#7675 / #13924 / #25886 / #38305 / #10073** Feishu 卡片按钮失效 | 点击审批按钮返回 `code: 200340/220343`，需手工 `/approve` | Feishu/Lark 网关、命令审批 | ❌ 多 Issue 重复，PR #10256 未合并 | **长期遗留，跨 5 个 Issue** |
| **P2 会话** | **#80646** `agent_context` 硬编码 `"primary"` | 子代理/cron/flush 上下文跳过逻辑失效 | 记忆提供者、多上下文 | ❌ 无 | 合同字段成死代码 |
| **P3 体验** | **#80596** 学习图谱误标外部技能为 `learned` | `npx skills add` 安装的技能被标记已学习 | 技能商店、学习图谱 | ❌ 无 | 统计污染 |
| **P3 安全** | **#77484 / #77162** 工具结果/列表命令敏感信息泄露 | `process(list)` 原命令/输出未脱敏、工具结果直传模型 | 终端工具、审计日志 | ❌ 无 | 需统一脱敏管线 |

> **修复管线状态**：Desktop 端已有 3 个 Fix PR（`#80713`, `#80699`, `#80716`）；Feishu 卡片、MCP `args`、Memory `sync_turn` 等核心回归**尚无 PR**，建议维护者本周内指派。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 可能纳入版本 | 备注 |
|------|----------|--------|--------------|------|
| **Grok/xAI 全功能对齐** | #80424 (Meta Issue) | 规划期 | 0.22+ | 需拆解为 Function Calling、Reasoning、Imagine、Voice 等子任务 |
| **MCP 确定性录制/回放** | #80475 | PR Ready | 0.21 | 解决 `test_mcp_tool.py` 长期 Mock 痛点，CI 价值高 |
| **Revelata deepKPI 金融技能集** | #80592 | PR Ready | 0.21 (optional) | 命名空间 `optional-skills/finance/revelata-deepkpi`，无核心依赖 |
| **Laravel LSP 支持 `.blade.php`** | #75720 | PR Ready | 0.21 | 补全 PHP 生态，配合 intelephense |
| **Desktop 大粘贴自动转附件** | #80716 | PR Ready | 0.21 | 参考 ChatGPT Work UX，阈值 10k chars |
| **UTF-16 文件自动转码** | #80717 | PR Ready | 0.21 | 移植自 kimi-code，解决 Windows 原生编码痛点 |
| **Provider `auth_type=none` 支持** | #80633 | PR Ready | 0.21 | 免认证 Provider（拒绝 Authorization Header）兼容 |
| **Sidebar Pin 顺序持久化修复** | #80711 | PR Ready | 0.21 | 修复 5 个交织的 Pin 重排 Bug |
| **Cron 多 Profile `deliver_profile`** | #70849 | 讨论期 | 0.22+ | 多路复用网关定投场景 |

> **路线图推断**：0.21 将以 **“Desktop 稳定性 + 编码/工具链兼容 + 可选技能扩展”** 为主题；0.22 启动 **Grok/xAI 对齐** 与 **插件接口稳定化**。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点场景 | 代表性声音 | 频次/强度 |
|----------|------------|-----------|
| **Desktop 0.20.0 不可用** | “升级后底部面板全无，只能看不能操作，回滚 0.19.0 才能工作” (#79407) | ⭐⭐⭐⭐⭐ (多用户确认) |
| **Windows 更新自毁** | “更新失败后连原本能跑的版本也起不来，只能删重装” (#80710) | ⭐⭐⭐⭐ |
| **Feishu 审批按钮长期失效** | “半年了，点按钮全是 200340/220343，只能手敲 `/approve session`” (#13924, #25886, #38305) | ⭐⭐⭐⭐ (企业用户核心流程) |
| **记忆插件静默失效** | “升级 0.20 后外部记忆完全不写入，没报错也没日志，排查两天才发现 `sync_turn` 不调了” (#79339) | ⭐⭐⭐ |
| **神文件阅读/贡献门槛极高** | “`context_compressor.py` 6.7k 行、`kanban_db.py` 10k 行，想改个 Bug 先得花一天读架构” (#78645, #78632) | ⭐⭐⭐ (贡献者流失风险) |
| **MCP 配置 `args: null` 直接崩** | “YAML 不写 args 就炸，文档也没说必填，调试半天发现是 `*None`” (#80652) | ⭐⭐⭐ |
| **大文本粘贴体验差** | “贴个 50k 日志作曲区卡死，滚动都跟不上

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-07

---

### 1. 今日速览
- **整体活跃度：低** —— 过去 24 小时无新 Issue 产生，仅有 2 条 PR 更新（1 合并/关闭，1 待审核），无版本发布，项目处于**常规维护与功能迭代并行**的平稳期。
- **核心进展**：QQ 频道协议适配取得阶段性成果（#1349 已关闭合并），Web UI 模型管理能力增强（#3200 待评审），显示核心维护者正聚焦于**协议完善**与**模型调度体验优化**两大方向。
- **社区信号**：无新增用户反馈或 Bug 报告，现有 PR 讨论度均为 0（评论/Reaction 均为空），提示**外部贡献者参与度较低**，核心团队自驱为主。
- **健康度评估**：代码库持续推进，但缺乏外部 Issue 驱动的迭代闭环，建议关注 #3200 评审效率及长期积压 PR/issue 清理。

---

### 2. 版本发布
> 今日无新版本发布。

---

### 3. 项目进展
#### ✅ 已合并/关闭 PR
| PR | 标题 | 核心变更 | 对项目推进度 |
|----|------|----------|--------------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **feat(qq): support parsing and replying to more attachment types** | 1. 新增 QQ 频道 Emoji 结构体解析支持<br>2. 支持接收语音/图片/视频/文件四类富媒体消息<br>3. 支持本地资源上传后回复（语音/图片/视频/文件）<br>4. 回复策略优化：优先 Markdown，失败回退纯文本 | **高** —— 补全 QQ 频道协议栈在富媒体收发上的关键缺口，使 PicoClaw 在 QQ 生态的可用性显著提升，属于**协议完整性里程碑**式进展。 |

#### 🔄 待评审 PR
| PR | 标题 | 核心变更 | 潜在影响 |
|----|------|----------|----------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **feat(models): add configurable default fallback chain** | 1. Web UI 新增「默认回退链」配置页面<br>2. 后端 API 持久化完整回退链（默认模型 + 多级 fallback + 拖拽排序）<br>3. 运行时按链路顺序自动故障转移 | **中高** —— 解决多模型可用性痛点，提升生产环境鲁棒性；若评审通过将直接进入下一版本，建议优先分配 Reviewer。 |

---

### 4. 社区热点
> 过去 24 小时**无高讨论度 Issue/PR**（所有条目评论数 0、Reaction 0）。  
> - #1349 虽为重要功能，但创建于 3 月，历经 5 个月才合并，说明**大型协议类 PR 审核周期长**，建议后续拆分为小 PR 加速流转。  
> - #3200 创建于 7 月，已挂 37 天，当前无人评审，存在**评审瓶颈**风险。

---

### 5. Bug 与稳定性
> 今日**无新增 Bug 报告、崩溃或回归 Issue**。  
> - 无标签为 `bug`/`regression`/`crash` 的活跃 Issue。  
> - 无关联 Fix PR 产生。

---

### 6. 功能请求与路线图信号
| 来源 | 需求描述 | 关联 PR/进展 | 入版概率 |
|------|----------|--------------|----------|
| #3200 (PR) | **模型默认回退链可视化配置与持久化** | 已实现完整前后端，处于评审中 | **极高** —— 符合「增强模型调度鲁棒性」路线图，代码完备度高。 |
| #1349 (PR) | **QQ 频道全类型附件收发** | 已合并 | **已落地** —— 标志 QQ 协议支持进入成熟期。 |
| 隐性信号 | 无新 Issue 提出新功能，说明**用户侧需求收集渠道可能不畅**，或当前功能集基本满足核心用户。 | — | — |

---

### 7. 用户反馈摘要
> 过去 24 小时**无 Issue 评论、无 PR 评论、无 Reaction**，无法提炼直接用户痛点。  
> **侧写推测**：  
> - QQ 频道用户此前可能因不支持语音/视频/文件回复而受限，#1349 合并后该痛点已隐性解决。  
> - 多模型部署用户期望「一键配置故障转移」，#3200 正是响应此类隐性需求。

---

### 8. 待处理积压提醒
| 条目 | 状态 | 停滞时长 | 风险点 | 建议行动 |
|------|------|----------|--------|----------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | Open | 37 天 (创建 2026-07-01) | 核心功能 PR 长期无人评审，可能阻塞下一版本发布 | **指派 Reviewer**，本周内完成 Code Review 并决定合并/请求修改。 |
| 历史长期 Open Issues/PRs | 未在本数据集体现 | — | 可能存在其它陈旧 PR/Issue 未清理 | 执行 **「陈旧项清理」**：对 > 90 天无更新的 PR/Issue 打标签 `stale` 并决定关闭或重启。 |

---

**📌 维护者行动清单（优先级排序）**  
1. **Review & Merge #3200** —— 解除模型回退链功能阻塞。  
2. **发布 Changelog/版本** —— 将 #1349 等积累变更打包发版，闭环用户预期。  
3. **激活社区互动** —— 在 README/Discord/论坛发布「贡献指南」或「Good First Issue」，引导外部贡献。  
4. **定期清理 Stale 项** —— 设置 GitHub Actions 自动标记/关闭长期无响应项，保持仓库整洁。

---  
*报告生成时间：2026-08-07 00:00 UTC | 数据来源：GitHub REST API (sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-07

---

## 1. 今日速览
- **整体状态**：项目处于**高强度维护与架构重构并行期**，过去 24 小时无新版本发布，但合并/关闭了 8 个 PR，清理了大量技术债（调度器、Telegram 通道、技能系统、升级机制）。
- **活跃度评估**：**高**。核心团队（`glifocat`, `yairixStudio`, `zvi-fried` 等）主导了 6 个核心修复/重构 PR 的合并，社区贡献者（`winjer`, `manisrinivasan2k1`, `ump45nose` 等）推进了 6 个待审 PR，涵盖 CLI 增强、新技能引入、Telegram SDK 升级等。
- **核心看点**：
  1. **升级机制事务化**（PR #3195）针对 Issue #3194 提出的“升级中途失败导致数据不一致”风险给出核心修复。
  2. **技能生态清理**（PR #3172）移除依赖外部 SaaS 且未维护的 `qodo` 与 `Google MCP` 技能，解决 Issue #3171 隐患。
  3. **调度器健壮性跃升**：三个相关 PR（#2678, #2679, #2873）合并，实现失败任务重调度、用户感知通知、预检与凭证分离。

---

## 2. 版本发布
> **无新版本发布**。当前主分支累积了大量修复与重构，建议维护者评估是否切入 `vNext` 预发布分支。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 对项目推进的意义 |
| :--- | :--- | :--- | :--- |
| **[#3172](https://github.com/nanocoai/nanoclaw/pull/3172)** `chore(skills): remove stale qodo and Google MCP skills` | **重构/清理** | 移除两个依赖外部 SaaS 账号且无配置引导的内置技能 (`get-qodo-rules`, `qodo-pr-resolver`)，关联关闭 Issue #3171。 | **消除供应链风险与用户困惑**，精简内置技能列表，强制技能开发者遵循“开箱即用或明确配置文档”规范。 |
| **[#3195](https://github.com/nanocoai/nanoclaw/pull/3195)** `fix(update): make NanoClaw upgrades transactional` | **核心修复** | 将 `/update-nanoclaw` 升级流程改为事务化：先在临时目录验证，通过后原子切换；保护 SQLite、gitignored 配置、外部组件。 | **直接解决 Issue #3194 严重数据不一致隐患**，是生产环境可用性的关键里程碑。 |
| **[#2678](https://github.com/nanocoai/nanoclaw/pull/2678)** `fix(scheduling): re-arm recurrence when a run fails permanently` | **修复** | 调度器将 `getCompletedRecurring` 改为 `getFinishedRecurring`，永久失败的周期任务也能自动生成下一次执行。 | **修复调度器“失败即停摆”Bug**，保障长期运行任务的自愈能力。 |
| **[#2679](https://github.com/nanocoai/nanoclaw/pull/2679)** `fix(scheduling): surface permanently-failed scheduled tasks to the user` | **功能增强** | 新增 `notifyFailedTasks` sweep hook，将永久失败任务以通知形式推送给用户，而非仅记录日志。 | **提升可观测性**，用户无需查日志即可感知后台任务异常。 |
| **[#2873](https://github.com/nanocoai/nanoclaw/pull/2873)** `fix(skills): split pre-flight from credentials so /update-skills can refresh code` | **架构优化** | 将技能预检与凭校验分离，支持 `/update-skills` 仅拉取代码更新而不重跑凭证流程。 | **为技能热更新铺路**，解决技能迭代时的凭证冗余校验问题。 |
| **[#2644](https://github.com/nanocoai/nanoclaw/pull/2644)** `fix: detect reply-to-bot in Telegram extractReplyContext` | **修复** | Telegram 通道识别“回复 Bot 自身消息”，设置 `ReplyContext.isReplyToBot`。 | **修复上下文感知缺失**，为后续精准路由/回复奠基。 |
| **[#2643](https://github.com/nanocoai/nanoclaw/pull/2643)** `fix: engage pattern/mention wirings on direct address` | **修复** | 路由器 `evaluateEngage` 支持 `@mention`、DM、回复 Bot 作为直接触发条件，不再强依赖关键词匹配。 | **修复 Bot “装聋作哑” 问题**，显著提升交互自然度。 |
| **[#2591](https://github.com/nanocoai/nanoclaw/pull/2591)** `fix: namespace user IDs by channel-type prefix, not bare colon` | **重构** | 用户 ID 命名空间从裸 `:` 改为 `channel-type:` 前缀，避免跨通道 ID 冲突。 | **多通道架构基础设施修复**，消除潜在用户身份混淆风险。 |

> **合计**：8 个 PR 合并，**核心模块（升级、调度、技能、路由、多通道 ID）均有实质性推进**，技术债偿还比例高。

---

## 4. 社区热点（讨论活跃/高反应 Issues/PRs）

| 标的 | 状态 | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **[Issue #3194](https://github.com/nanocoai/nanoclaw/issues/3194)** `[bug] /update-nanoclaw can stamp success without a recoverable cutover` | **OPEN** | 👍 0 / 评论 0 (但关联核心团队 PR #3195) | **生产级可靠性诉求**：用户/维护者发现升级过程非原子，中途失败会导致代码新、数据旧、配置丢失的“不一致三态”。PR #3195 已给出修复方案，属**P0 级阻断性缺陷**。 |
| **[PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195)** `fix(update): make NanoClaw upgrades transactional` | **OPEN** | 核心团队 `core-team` 标签 | **架构级修复审查焦点**：涉及文件系统原子操作、数据库迁移回滚、外部组件幂等性，需充分测试后合并。 |
| **[PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)** `feat: add Tavily MCP tool skill` | **OPEN** | 新技能贡献 | **生态扩展诉求**：引入 Tavily 搜索 MCP 工具，属 Utility Skill，无源码改动，审查门槛低，社区期望快速合并丰富工具箱。 |
| **[PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149)** `fix(cli): add --rw flag to groups config add-mount` | **OPEN** | 社区贡献者 `winjer` | **CLI 易用性补全**：挂载配置缺少读写标志，阻碍开发容器持久化场景，属小体量高价值修复。 |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue/PR | 标题 | 状态 | 是否有 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0 (数据丢失/不一致)** | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) | `/update-nanoclaw` 升级非事务性，失败留脏状态 | **OPEN** | ✅ **[#3195](https://github.com/nanocoai/nanoclaw/pull/3195)** | 核心团队已提交修复，**需优先审查合并** |
| **P1 (功能失效)** | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | 两个 qodo 技能依赖未配置的外部 SaaS，拦截正常请求 | **CLOSED** | ✅ **[#3172](https://github.com/nanocoai/nanoclaw/pull/3172)** | 已通过移除技能彻底解决 |
| **P1 (调度器静默失败)** | 隐性 | 周期任务永久失败后不再重试、不通知用户 | **CLOSED** | ✅ **[#2678](https://github.com/nanocoai/nanoclaw/pull/2678)** + **[#2679](https://github.com/nanocoai/nanoclaw/pull/2679)** | 两个 PR 组合修复：重调度 + 用户通知 |
| **P2 (交互断层)** | 隐性 | Telegram 媒体消息无文本被丢弃；回复 Bot/mention 不触发路由 | **CLOSED** | ✅ **[#2213](https://github.com/nanocoai/nanoclaw/pull/2213)** + **[#2644](https://github.com/nanocoai/nanoclaw/pull/2644)** + **[#2643](https://github.com/nanocoai/nanoclaw/pull/2643)** | 通道层与路由层联合修复，显著提升 Telegram 体验 |
| **P3 (潜在冲突)** | 隐性 | 用户 ID 跨通道冲突风险 | **CLOSED** | ✅ **[#2591](https://github.com/nanocoai/nanoclaw/pull/2591)** | 命名空间重构预防性修复 |

> **稳定性趋势**：**显著向好**。今日合并的 8 个 PR 中 6 个直接修复 P0-P2 级缺陷，覆盖升级、调度、通道、路由、身份识别全链路。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR | 纳入下一版本可能性 | 理由 |
| :--- | :--- | :--- | :--- | :--- |
| **社区贡献** | **Tavily MCP 搜索工具技能** | [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | **极高 (🟢)** | Utility Skill 无侵入，符合技能扩展方向，CI 通过即可合并。 |
| **社区贡献** | **CLI 挂载 `--rw` 标志** | [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) | **高 (🟢)** | 单参数增补，满足开发容器写入需求，代码变更极小。 |
| **核心团队重构** | **技能自有能力的 Host Seams (宿主接缝)** | [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | **中高 (🟡)** | 架构级重构，为技能注入宿主能力（如 FS、网络、秘钥）铺路，需设计评审。 |
| **核心团队维护** | **Telegram Chat SDK 升级支持富媒体** | [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) | **高 (🟢)** | 适配上游 SDK 破坏性更新，修复富媒体渲染，属维护性刚需。 |
| **长期积压** | **原生凭证代理绕过 OneCLI 网关** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | **中 (🟡)** | 创建于 6 月，涉及 launchd/systemd 部署细节，测试复杂度高，优先级被近期 P0 顶替。 |

---

## 7. 用户反馈摘要（从 Issue 评论/描述提炼）

> *数据源仅含 Issue 描述，无评论内容，以下为基于描述的痛点画像：*

1. **升级焦虑** (Issue #3194)：**“我不敢在生产环境点更新按钮”** —— 用户/运维担心升级中途断电/报错导致实例处于“代码新、数据库旧、配置丢”的不可恢复状态。PR #3195 的事务化设计精准回应此痛点。
2. **开箱即用失效** (Issue #3171)：**“默认技能报错还拦截了我的正常请求”** —— 用户未配置 Qodo 账号，却因内置技能读取不存在的 `~/.qodo/config.json` 而报错，且干扰正常编码流程。移除技能（PR #3172）是果断止损。
3. **后台任务“黑洞”** (隐性，源自 PR #2678/2679)：**“定时任务挂了我也不知道，更不知道它会不会自动重试”** —— 调度器缺乏失败重调度与用户通知，导致业务任务静默死掉。两个 PR 补全了自愈与可观测闭环。
4. **Telegram 交互断层** (隐性，源自 PR #2213/2643/2644)：**“发图片没反应”、“@了 Bot 它不理我”、“回复 Bot 它当没看见”** —— 通道层丢弃纯媒体消息，路由层不识别 mention/reply 作为显式触发。修复后交互体验将接近商业级 Bot。

---

## 8. 待处理积压（长期未响应/高价值待审）

| 标的 | 创建时间 | 停滞天数 | 重要性 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **[PR #2705](https://github.com

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-07

---

## 1. 今日速览

- **版本里程碑**：昨日（08-06）发布 **v1.1.0**，为 1.0.0 以来首个稳定版，核心交付：任意托管 MCP 服务器注册、IronHub 深链安装、跨频道持久化文件附件、Slack 集成增强。
- **工程投入集中于「可观测性基建」**：4 个 XL 级 PR（[#7236](https://github.com/nearai/ironclaw/pull/7236)、[#7277](https://github.com/nearai/ironclaw/pull/7277)、[#7239](https://github.com/nearai/ironclaw/pull/7239)、[#7235](https://github.com/nearai/ironclaw/pull/7235)）同步推进 **Inspector 检查器**——调试面板壳、实时诊断流、Prompt 检查、模型调用统计，已合并 API 层（[#7235](https://github.com/nearai/ironclaw/pull/7235)），前端组件仍在审阅。
- **Bug 修复呈「集中爆发」态势**：过去 24h 关闭 23 个 Issue，多为 v1.1.0 RC 以来积压的 QA 回归（Slack 投递错人 [#5877](https://github.com/nearai/ironclaw/issues/5877)、Routine 租约过期 [#5456](https://github.com/nearai/ironclaw/issues/5456)、FTS 召回失效 [#7275](https://github.com/nearai/ironclaw/issues/7275) 等），修复 PR 已合入或待合并。
- **活跃度评分**：⭐⭐⭐⭐☆（Issues/PRs 各 50 条更新，核心维护者 BenKurrek、henrypark133、italic-jinxin 并行推进 3+ 条 XL 级 PR，发布后稳定化节奏明确）。
- **风险点**：Slack、GitHub、Telegram 等第三方集成仍有多个 P1/P2 缺陷未根治（[#5702](https://github.com/nearai/ironclaw/issues/5702)、[#5834](https://github.com/nearai/ironclaw/issues/5834)、[#3533](https://github.com/nearai/ironclaw/issues/3533)），且 Routine 调度栈「No thread attached」系统性失败（[#5836](https://github.com/nearai/ironclaw/issues/5836)）阻断自动化可靠性。

---

## 2. 版本发布

### `ironclaw-v1.1.0` (2026-08-06)
| 维度 | 详情 |
|------|------|
| **性质** | 稳定版（促进自 `1.1.0-rc.1` + 后续修复） |
| **Headline Features** | • 任意托管 MCP 服务器注册（Extension Reach）<br>• IronHub 深链一键安装<br>• 跨频道持久化文件附件<br>• Slack 集成增强（个人投递、规范化金丝雀） |
| **Breaking Changes** | 未在 Release Notes 明确列出；但 [#7253](https://github.com/nearai/ironclaw/pull/7253) 将自定义 MCP 注册改为「仅定义、不安装/激活」，可能影响依赖自动激活的现有工作流。 |
| **迁移建议** | 1. 检查现有 MCP 注册是否需显式安装步骤<br>2. Slack 个人投递目标若存 workspace 不匹配，升级后将拒绝投递（[#7300](https://github.com/nearai/ironclaw/pull/7300)）<br>3. Docker 部署需确保镜像含 `curl`（[#7303](https://github.com/nearai/ironclaw/pull/7303) 已修复健康检查） |
| **链接** | [Release 页面](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.1.0) |

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 规模/风险 | 核心推进 | 状态 |
|------|-----------|----------|------|
| [#7235](https://github.com/nearai/ironclaw/pull/7235) | XL / Low | **Operator Inspection API + 实时诊断流** —— 运算符专用端点（运行快照、Prompt 诊断、工具明细）、游标去重/重连/保活的 SSE 流。 | ✅ **Closed (Merged)** |
| [#7259](https://github.com/nearai/ironclaw/pull/7259) | XL / Low | **文档发布边界收口** —— 冻结 `.mintignore` + CI 门禁，内部文档迁移至 `docs/internal/`，彻底堵住隐藏页面泄露。 | ✅ **Closed (Merged)** |
| [#7303](https://github.com/nearai/ironclaw/pull/7303) | M / Low | **Docker 健康检查补 `curl`** —— 修复托管节点因缺 `curl` 导致健康检查失败、状态卡 `error` 的生产事故。 | ✅ **Closed (Merged)** |
| [#7289](https://github.com/nearai/ironclaw/pull/7289) | XL / Low | **FTS 查询清洗** —— 修复 [#7275](https://github.com/nearai/ironclaw/issues/7275) 生产环境自然语言召回失效，术语引用/保留字转义。 | ✅ **Closed (Merged)** |
| [#7305](https://github.com/nearai/ironclaw/pull/7305) | S / Low | **活动面板失败摘要柔和化** —— 把整行红色改为徽章，避免「已恢复成功的运行」看起来像顶级错误。 | ✅ **Closed (Merged)** |
| [#5504](https://github.com/nearai/ironclaw/issues/5504) / [#5557](https://github.com/nearai/ironclaw/issues/5557) / [#5704](https://github.com/nearai/ironclaw/issues/5704) / [#5705](https://github.com/nearai/ironclaw/issues/5705) / [#5706](https://github.com/nearai/ironclaw/issues/5706) / [#5838](https://github.com/nearai/ironclaw/issues/5838) / [#5877](https://github.com/nearai/ironclaw/issues/5877) | — | 7 个 QA Bug 统一关闭（Routine 创建挂起、Logs 深链双击、图片透明、终端图标无开关、侧边栏裸 UUID、上下文压缩误报、Slack 误投递）。 | ✅ **Issues Closed** |

> **整体进度**：Inspector 基建「后端已通、前端进行中」；v1.1.0 后稳定化修复 **~70% 关闭**，剩余高优缺陷集中在 Slack/GitHub 集成与 Routing 调度。

---

## 4. 社区热点（评论/互动最多）

| 对象 | 标题 | 评论 | 👍 | 核心诉求 |
|------|------|------|-----|----------|
| [Issue #5553](https://github.com/nearai/ironclaw/issues/5553) | 审批通知在历史中消失（闪现即逝/后续不显示） | 4 | 0 | **可观测性缺口**：用户无法追溯「网络能力审批」等关键决策点，影响合规与调试。 |
| [Issue #5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub Issue 搜索/创建返回 HTTP 403 | 4 | 0 | **集成失效**：已配置 GitHub 集成却不可用，阻断「Issue 驱动自动化」核心场景。 |
| [Issue #5522](https://github.com/nearai/ironclaw/issues/5522) | Reborn 读取 Slack DM 失败 → 无读能力 + capability_info 重试环 | 3 | 0 | **能力发现机制失灵**：Agent 陷入「缺能力→查能力→仍缺」死循环，需补齐 Slack 读能力或熔断。 |
| [Issue #5701](https://github.com/nearai/ironclaw/issues/5701) | 活动面板折叠工具细节、实时不更新 | 3 | 0 | **运行时可见性**：用户被迫等待运行结束才能看工具链路，严重降低可调试性。 |
| [Issue #5834](https://github.com/nearai/ironclaw/issues/5834) | 要求断开 Slack 被 Agent 拒绝，给出无关回复 | 3 | 0 | **意图识别偏移**：Agent 误解「断开连接」为「投递目标」，缺乏显式断开入口。 |
| [PR #7236](https://github.com/nearai/ironclaw/pull/7236) | Inspector：调试面板壳 + 实时诊断客户端 | — | 0 | **核心基建**：`debug=true` 可选激活，不影响正常体验；奠定可观测性统一入口。 |
| [PR #7277](https://github.com/nearai/ironclaw/pull/7277) | Inspector：模型调用统计（计数/延迟/Token/缓存/模型细分） | — | 0 | **成本与性能透明化**：并发/降级/失败调用均可归因到具体 Provider 模型。 |

> **信号**：社区讨论聚焦 **「看不见、调不了、信不准」**——通知丢失、面板不透明、集成 403、Agent 误解意图，均指向 **可观测性与集成可靠性** 两大痛点。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 现象 | 已有 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 (生产阻断)** | [#5836](https://github.com/nearai/ironclaw/issues/5836) | 定时 Routine 每跑必失败 `No thread attached`，成功率 0% | 无 | 系统性：调度器无法绑定会话线程，阻断所有自动化。 |
| **P0** | [#5456](https://github.com/nearai/ironclaw/issues/5456) | Runner 租约 90s 过期导致多工具 Routine 失败 | 无 | 需调整租约 TTL 或引入心跳续约。 |
| **P1** | [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub Issue Search/Create 403 | 无 | 认证/权限范围配置疑似缺失。 |
| **P1** | [#5508](https://github.com/nearai/ironclaw/issues/5508) | Slack 已连却提示「无投递目标」，旧 Routine 仍能投递 | [#7300](https://github.com/nearai/ironclaw/pull/7300) (Open) | 新旧配置不兼

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-07

---

## 1. 今日速览

- **整体活跃度：低-中等**。过去 24 小时无新版本发布，无 PR 合并，代码库处于**特性开发与维护积压并行**阶段。
- **社区声量集中在“易用性痛点”**：新增 2 条 Issue（输入框交互、模型 ID 兼容性）直指核心使用体验，且均为当日创建，反映用户对细节打磨的强烈诉求。
- **技术债显性化**：3 条长期搁置的 `stale` Issue/PR（Agent 文件强制生成、网关重启异常、Agent 管理交互优化）持续挂载，提示维护团队在遗留架构重构与新需求迭代间存在资源分配矛盾。
- **底层依赖争议浮现**：用户质疑 PowerShell 版本停留在 5.1，暴露跨平台 Shell 适配层的技术选型隐患。
- **项目健康度评级：⚠️ 需关注**——活跃 Issue 多为结构性体验问题，且核心 PR 长期未合并，建议建立“技术债偿还”里程碑。

---

## 2. 版本发布

> 过去 24 小时无新版本发布。最近版本为 `2026.8.5.0`（见 Issue #2443 引用）。

---

## 3. 项目进展

> **今日无 PR 合并/关闭**。两个待合并 PR 均处于 `stale` 状态，停留在 4 月初，主分支冲突未解决：

| PR | 标题 | 核心推进 | 阻塞点 | 链接 |
|----|------|----------|--------|------|
| #1197 | Agent 管理页面交互优化 | 缩短删除操作路径、侧边栏交互重构 | 与主分支存在冲突，需变基 | [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) |
| #1199 | feat(model): add context window and token settings | 模型级 `contextWindow`/`maxTokens` 配置持久化并接入请求链路 | 与主分支存在冲突，需变基 | [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) |

**进展判定**：核心体验优化（Agent 管理）与关键功能补全（模型上下文窗口配置）均卡在**合并冲突**环节，实际代码交付为零。建议维护者优先解冲突或指定 Code Owner 推进。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动指标 | 核心诉求 | 分析 |
|------|----------|----------|----------|------|
| 1 | **#2444 [功能请求] 输入框编辑模式** | 👍 0 / 评论 0（新建即热） | **长 Prompt 输入体验极差**：Shift+Enter 换行易误触发送，缺乏可视化编辑空间 | 直击高频交互路径，用户给出两套完整交互方案（全局切换/局部编辑模式），落地成本可控，建议纳入下版本。 |
| 2 | **#2443 [Bug] 模型 ID 含斜杠无法使用** | 👍 0 / 评论 0 | **SiliconFlow 等主流兼容厂商模型 ID 含 `/` 导致界面不可选** | 属于**兼容性阻断性 Bug**，影响所有 OpenAI 兼容服务商，修复优先级应高于新功能。 |
| 3 | **#1196 [stale] 强制生成 6 个系统文件污染工作目录** | 👍 0 / 评论 1 | 要求支持全局配置或隐藏目录存放，类似 Claude Code 机制 | 典型的**工作流污染**投诉，虽标记 stale 但痛点真实，涉及配置加载架构调整，工程量中等。 |
| 4 | **#1198 [stale] 网关重启进度条消失+模型不可用** | 👍 0 / 评论 1 | 重启状态不可见、浏览器服务检测误报 | 关联核心网关稳定性，需排查前端轮询与后端健康检查逻辑。 |
| 5 | **#2442 为什么内核仍用 PS 5.1 未升 PS 7.4** | 👍 0 / 评论 0 | 质疑跨平台 Shell 选型，担心脚本兼容性 | 非标准 Bug，但揭示**技术选型透明度不足**；Node.js `child_process` 默认行为导致，建议文档化或提供切换开关。 |

---

## 5. Bug 与稳定性

| 严重级 | Issue | 现象 | 影响面 | 是否有 Fix PR | 链接 |
|--------|-------|------|--------|---------------|------|
| **P0 阻断** | #2443 | 自定义 Provider 模型 ID 含 `/` 无法在下拉框选择 | 所有使用 SiliconFlow、DeepSeek 等斜杠 ID 厂商的用户 | 无 | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) |
| **P1 严重** | #1198 | 网关重启进度条丢失、浏览器服务误判不可用、后续对话全失败 | 依赖网关/浏览器自动化的用户 | 无 | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) |
| **P2 体验** | #2444 | 输入框换行/发送键位反模式，长文编辑易丢失 | 所有重度 Prompt 工程用户 | 无（仅设计建议） | [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) |
| **P3 环境** | #2442 | Windows 默认调用 PS 5.1，非用户可控 | 依赖 PS 7+ 特性脚本的用户 | 无（属架构决策） | [#2442](https://github.com/netease-youdao/LobsterAI/issues/2442) |

> **趋势提示**：P0 级 Bug #2443 为**今日新增**，且修复通常仅涉及字符串转义/路由匹配逻辑，建议立即安排热修复。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 复杂度 | 关联 PR/实现就绪度 | 入版概率 | 备注 |
|------|------|--------|-------------------|----------|------|
| **输入框编辑模式（Enter 换行/Ctrl+Enter 发送、展开编辑区、可选 WYSIWYG）** | #2444 | 低-中 | 无 PR | ⭐⭐⭐⭐⭐ | 用户给出完整交互规格，UI 组件级改动，极易落地。 |
| **模型级 `contextWindow` / `maxTokens` 配置持久化** | #1199 (PR) | 中 | **PR 已实现**但冲突未解 | ⭐⭐⭐⭐ | 核心缺失功能，PR 代码已完备，仅需解冲突合并。 |
| **Agent 系统文件全局化/隐藏目录化** | #1196 | 中 | 无 PR | ⭐⭐⭐ | 涉及配置加载器重构，需权衡向后兼容。 |
| **Agent 管理页交互优化（删除入口前置、侧边栏优化）** | #1197 (PR) | 低 | **PR 已实现**但冲突未解 | ⭐⭐⭐⭐ | 纯前端交互重构，无后端依赖。 |
| **网关重启状态可视化/健康检查增强** | #1198 | 中 | 无 PR | ⭐⭐ | 需前后端联调，优先级受限于核心稳定性。 |

**路线图建议**：下一版本（v2026.8.x）聚焦 **“交互修复 + 兼容性解封”**：合并 #1199、#1197，修复 #2443，实现 #2444 核心交互。

---

## 7. 用户反馈摘要

| 维度 | 代表性原声 | 情感倾向 | 洞察 |
|------|------------|----------|------|
| **工作流污染** | “每次选目录强建 6 个文件，删了还要重建，太乱了” (#1196) | 😤 强烈不满 | 用户期望 **零侵入式** 集成，类比 Claude Code 全局配置。 |
| **核心交互反人类** | “写长 Prompt 忘按 Shift 就发送了，编辑到一半全没了” (#2444) | 😫 挫败 | 输入框是**最高频触点**，当前键位映射违背直觉。 |
| **生态兼容受阻** | “SiliconFlow 模型 ID 带斜杠根本选不了，界面直接不可用” (#2443) | 😡 阻断 | OpenAI 兼容层未处理 URL 编码/路由分隔符冲突。 |
| **黑盒运行态** | “重启进度条消失了，也不知道状态，对话全挂了” (#1198) | 😰 焦虑 | 长耗时操作缺乏**可观测性**，错误恢复路径缺失。 |
| **技术选型不透明** | “为什么内核还在 PS 5.1，能不能升 PS 7.4？” (#2442) | 🤔 疑惑 | 底层 Shell 版本影响脚本生态，建议暴露配置或文档说明。 |

---

## 8. 待处理积压（需维护者立即关注）

| 项目 | 创建时间 | 停滞天数 | 优先级 | 建议行动 | 链接 |
|------|----------|----------|--------|----------|------|
| **PR #1199** 模型上下文/Token 配置 | 2026-04-01 | ~128 天 | **P0** | 指定人员解冲突合并，补全核心模型配置能力 | [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) |
| **PR #1197** Agent 管理交互优化 | 2026-04-01 | ~128 天 | **P1** | 解冲突合并，快速回报 UI 体验 | [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) |
| **Issue #1196** 强制生成系统文件 | 2026-04-01 | ~128 天 | **P1** | 纳入重构里程碑，设计全局/隐藏配置加载机制 | [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) |
| **Issue #1198** 网关重启异常 | 2026-04-01 | ~128 天 | **P1** | 补充前端轮询超时兜底、后端健康检查重试逻辑 | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) |
| **Issue #2443** 斜杠模型 ID 不可用 | 2026-08-06 | 1 天 | **P0 (热修复)** | 立即排查路由匹配/下拉框过滤逻辑，发布 Hotfix | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) |

---

> **日报生成时间**：2026-08-07 00:00 UTC  
> **数据来源**：GitHub API / 手工采集（Issues #1196, #1198, #2442-2444；PRs #1197, #1199）  
> **下一关注点**：#2443 热修复进展、两个 stale PR 冲突解决情况、#2444 交互方案技术评审结果。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目日报 | 2026-08-07

---

## 1. 今日速览
**项目整体状态：高活跃度、重稳定性、强兼容性迭代。** 过去 24 小时共产生 **34 条 Issue 更新**（新开/活跃 17，关闭 17）与 **50 条 PR 更新**（待合并 21，合并/关闭 29），**Issue 与 PR 闭合率均达 50% 以上**，呈现典型的“修复导向”冲刺态势。核心精力集中在 **AgentScope 2.0+ 兼容性适配、MCP 工具链稳定性治理、上下文/记忆架构重构、Desktop Beta (2.1.0b1) 关键崩溃修复** 及 **多渠道适配** 上。暂无新版本发布，当前主线正积累大量修复补丁，预示着下一个 Patch 或 Beta 版本将显著提升鲁棒性。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展：核心合并/关闭 PR 进展分析
今日合并/关闭 29 个 PR，推进了以下关键里程碑：

| 领域 | 代表性 PR | 核心推进内容 | 影响面 |
| :--- | :--- | :--- | :--- |
| **上下文/记忆架构统一** | [#6611](https://github.com/agentscope-ai/QwenPaw/pull/6611) (Closed) | **重大重构**：将 Scroll 收敛为唯一上下文协议，对齐 AgentScope 2.0 Agent 基类生命周期，消除 Native/Scroll 双轨制及自定义 ContextManager 带来的状态不一致风险。 | 核心框架稳定性、长会话可靠性 |
| **配置持久化健壮性** | [#6744](https://github.com/agentscope-ai/QwenPaw/pull/6744), [#6767](https://github.com/agentscope-ai/QwenPaw/pull/6767) | 解决共享文件系统（OSSFS/FUSE）下 `agent.json`/`access_control.json` 写入竞争与数据丢失问题，引入原子写入、设备/Inode 级缓存键、保留遗留字段。 | 容器化部署、多实例共享存储场景 |
| **Provider/工具调用修正** | [#6605](https://github.com/agentscope-ai/QwenPaw/pull/6605) (Closed) | 修复 Thinking/Tag 模式下工具调用解析：将提取的工具调用重水化为标准 `ToolCallBlock`，保留原始 JSON 参数，修复 ID 冲突与流式累积问题。 | 所有支持 Thinking 的模型调用链路 |
| **Desktop Beta 关键阻断修复** | [#6762](https://github.com/agentscope-ai/QwenPaw/pull/6762), [#6731](https://github.com/agentscope-ai/QwenPaw/pull/6731), [#6766](https://github.com/agentscope-ai/QwenPaw/pull/6766) | 修复：CodeMirror 长命令不换行溢出、Shell 命令 `sandbox_config` 导致的 dataclass `replace()` 崩溃、CI 桌面验证针对 Lexical 编辑器的定位失效。 | Desktop 2.1.0b1 可用性 |
| **Channel 适配增强** | [#6557](https://github.com/agentscope-ai/QwenPaw/pull/6557), [#6476](https://github.com/agentscope-ai/QwenPaw/pull/6476) | 修复 MCP 工具名以 `-` 开头导致 Kimi 等严格 API 400 错误；Matrix E2E 加密依赖 `olm`/`vodozemac` 安装链路梳理。 | 多模型兼容、Matrix 渠道生产可用性 |
| **工具限额交互修复** | [#6530](https://github.com/agentscope-ai/QwenPaw/pull/6530) (To-be-merged) | 修复 Console 中工具调用限额名称可编辑但失焦不生成、去重/校验缺失问题。 | Console 运维体验 |

> **整体进度判断**：核心架构对齐（Scroll/AgentScope 2.0）已落地，配置层、Provider 层、Desktop 客户端的“长尾崩溃”今日集中收敛，主线代码库健康度显著提升。

---

## 4. 社区热点：高讨论度 Issues 深度解析
以下 5 个 Issue 评论数最多，反映社区最迫切的痛点与关注焦点：

| Issue | 状态 | 评论 | 核心诉求与信号 |
| :--- | :--- | :---: | :--- |
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) **Channel 重试与健康检测** | **Closed** | 8 | **运维级诉求**：自建 Matrix 服务启动慢于 QwenPaw，导致频道连接失败且**无自动重试/健康检查**，需手动重保存恢复。揭示** Channel 生命周期管理缺失**（重试策略、熔断、探活）。 |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) **`spawn_subagent` 空 `batch` 误判为批处理** | **Closed** | 6 | **框架级 Bug**：Responses 兼容层返回空 `batch` 占位符，QwenPaw 误判为批处理模式导致单任务调用异常。反映** Provider 适配层对协议边界处理不严谨**。 |
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) **长会话空响应静默失败** | **Open** | 5 | **严重稳定性隐患**：长上下文窗口耗尽时模型返回空响应，QwenPaw **不报错、不中断、不重试**，导致会话“彻底失去响应”。用户呼吁框架层增加**空响应检测、上下文溢出预警、自动压缩/截断策略**。 |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/66

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-08-07

---

## 1. 今日速览
- **活跃度评估：高** —— 过去 24 小时内 Issues 更新 35 条（新开/活跃 24，关闭 11），PR 更新 50 条（待合并 43，已合并/关闭 7），无新版本发布。  
- 核心关注点集中在 **SOP 子系统稳定性**（默认目录未生效、校验失效、失败原因丢失）、**安全策略加固**（`forbidden_paths` 支持 glob、pipeline 绕过工具门控修复）、**RFC 流程精简** 以及 **Telegram/ZeroCode 交互体验** 优化。  
- 多个 **P1/P2 高风险 Issue** 在今日新开或推进，显示维护团队正集中攻坚 0.9.0 里程碑的阻断项。  
- PR 队列呈现“小步快跑”特征：安全修复、CI 收紧、文档修正类 PR 占多数，大型重构（如 WASM 超时、上下文压缩比例）仍在评审中。  
- 社区讨论热度集中在 **治理流程（Work Lanes/RFC 精简）**、**A2A 出向客户端** 与 **模型能力配置** 三大架构级 RFC，显示项目正从功能堆砌转向治理与互操作标准化。

---

## 2. 版本发布
> 今日无新版本发布。当前最新稳定版为 **0.8.3**，下一版本预计为 **0.9.0**（含认证、安全、网关破坏性变更，详见 Tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) **已合并** | 🔒 安全/运行时 | `execute_pipeline` 强制应用调用 Agent 的 `ToolAccessPolicy`，修复 “Confused Deputy” 漏洞（#7947） | 所有使用 pipeline 的自动化流程，安全等级提升至 S0 级修复 |
| [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) **已合并** | 🐛 Provider | 移除兼容层无条件剥离 `<?php ... ?>` 标签的逻辑，修复 MiniMax 等厂商推理内容被静默截断（#8615） | OpenAI-compatible 提供商用户，响应完整性恢复 |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) **已合并** | 🐛 Provider/Bedrock | 将 `nova-2-lite` 从 prompt caching 白名单移除，修复 400 `extraneous key cachePoint`（#8720） | Bedrock Nova 2 用户可正常长对话 |
| [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) **已关闭** | 🐛 Channel/Telegram | 截断 bot command 列表至 100 条上限，修复 `BOT_COMMANDS_TOO_MUCH` 导致菜单永不注册（#8950） | 大型技能/工具集的 Telegram 群组可用性恢复 |
| [#9659](https://github.com/zeroclaw-labs/zeroclaw/pull/9659) **已合并** | 📝 文档 | 仅在上下文明确为产品名时将 `Signal`、`Filesystem` 等词标记为受保护字面量，消除误报 | 文档构建通过率提升，减少误导性高亮 |
| [#9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) **已关闭** | ♻️ 重构/ZeroCode | 统一 slash-command 来源为 `zeroclaw-commands::BUILTIN_COMMANDS`，彻底解决 #9172 多源不一致 | ZeroCode 自动补全、解析、RPC 目录三位一体 |

> **整体推进度**：安全回归项（pipeline、Bedrock、Telegram）已落地；SOP 子系统仍有 4 个 P1/P2 待修 Issue（#9779、#9786、#9783、#9784）未见对应 PR，属当前最大技术债窗口。

---

## 4. 社区热点（评论/互动 TOP 5）

| # | 标题 | 评论 | 核心诉求 | 关联链接 |
|---|------|------|----------|----------|
| 1 | **RFC: Work Lanes, Board Automation, and Label Cleanup** | 19 | 建立可扩展的工作流泳道、自动看板流转与标签治理体系，解决维护者路由决策疲劳 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| 2 | **RFC: A2A outbound client (A2ATool)** | 11 | 让 ZeroClaw Agent 能主动调用外部 A2A 智能体，打通多智能体协作闭环 | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) |
| 3 | **Tracker: Maintainer decision queue for RFCs** | 11 | 集中追踪所有待决策 RFC/设计文档，避免隐性阻塞 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 4 | **RFC: Preserve Todo tracker configuration during ZeroCode ownership migration** | 11 | ZeroCode 所有权迁移时保留 Todo Tracker 配置，防止用户数据丢失 | [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) |
| 5 | **RFC: Provenance, conversation binding, and reply contract for internally initiated agent turns** | 10 | 定义内部发起轮次的溯源、会话绑定与回复契约，奠定 Cron/SOP 自主执行的安全基线 | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) |

> **趋势判读**：讨论从“单点功能”转向“治理基建”与“互操作协议”，维护者正显式构建决策队列（#8692）与流程精简 RFC（#9496），预示 0.9.0 后将进入更规范的演进节奏。

---

## 5. Bug 与稳定性（按严重度排序）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P1 / S0** | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) `execute_pipeline` 绕过 Agent 工具门控 | Confused Deputy，数据/安全风险 | ✅ **已合并 #9737** | 已修复，待回归验证 |
| **P1 / 高** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) `sops_dir` 文档默认值未被守护进程遵守 | SOP 子系统静默不加载，无报警 | ❌ 无 | 守护进程启动路径硬编码 `is_some()` 判断 |
| **P1 / 高** | [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) `SOP.toml` 未知字段被静默丢弃 | `sop list` 不显示、`sop validate` 报成功 | ❌ 无 | 需在加载期引入诊断上报 |
| **P1 / 高** | [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) 多步 SOP 中途标记失败无审计事件 | Agent 发现时运行已消失，排查极难 | ❌ 无 | 涉及 `sop_execute`/`sop_advance` 状态机 |
| **P2 / 高** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) `verifiable-intent` 校验链缺失 | 仅评估约束未验证凭证链，安全基线失效 | ❌ 无 | 需引入 `chain_verifier` 前置步骤 |
| **P2 / 高** | [#9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) `zeroclaw-gateway` clippy `-D warnings` 失败 | 测试助手被 `cfg(feature="channel-linq")` 隔离成死代码 | ❌ 无 | 一行修复：对齐 `cfg` 门控 |
| **P1 / 高** | [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) `cron update` 静默丢弃声明式作业 6 字段 | 用户改动无生效亦无报错 | ❌ 无 | 需在 `update_job` 显式拒绝或迁移 |
| **P2 / 中** | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) ZeroCode SIGTERM 留存 raw/mouse 模式 | 终端需 `reset` 恢复 | ❌ 无 | TUI 清理钩子缺失 |
| **P2 / 中** | [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) 短命守护进程 17h 后 CPU >100% | 重复数据库句柄、泄漏的 Telegram socket | ❌ 无 | 疑似连接池/句柄回收缺陷 |

> **关注建议**：SOP 子系统 4 连击（目录、校验、失败原因、审计）构成 **集群性风险**，建议本周内集中攻坚；`verifiable-intent` 链校验缺失属安全基线缺口，优先级应升至 P1。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/Issue | 纳入 0.9.0 概率 | 判断依据 |
|----------|----------|---------------|------------------|----------|
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) RFC | A2A 出向客户端（A2ATool） | 无 PR | 🟡 **中** | 已接受，风险高，需网关边界重构（#7432）配合 |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) RFC | 模型能力/上下文窗口逐模型配置 | 无 PR | 🟢 **高** | P1、需求明确，PR #9535（上下文压缩比例）已铺路 |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) RFC | WhatsApp `allowed_groups` 空列表=拒绝所有 | 无 PR | 🟢 **高** | P1、安全默认值修正，改动面窄 |
| [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) RFC | 精简 RFC 流程（讨论期、投票、指派） | 无 PR | 🟢 **高** | 维护者发起，治理债务清偿，阻塞决策吞吐 |
| [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) PR | 新增 Grok Build ACP Provider | **待合并** | 🟢 **高** | Distinguished Contributor 推进，ACP 生态补齐 |
| [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) PR | Eval 基线 + 回归门控 + 能力追踪 | **待合并** | 🟡 **中** | XL 体量，需 CI 资源评估，可能延至 0.9.1 |
| [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) PR | Telegram 群聊 `per_user_session` 开关 | **待合并** | 🟢 **高** | S 体量，解决真实协作痛点，低风险 |

> **路线图推断**：0.9.0 核心主线为 **Auth/Security/Gateway/Breaking**（Tracker #7432），上述功能中仅 **模型能力配置、WhatsApp 安全默认值、RFC 流程精简、Grok ACP、Telegram 会话隔离** 与主线强相关或体量可控，大概率入选；A2ATool、Eval 基线因体量/依赖可能滑入 0.9.1。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点场景 | 代表性声音 | 频次/强度 |
|----------|------------|-----------|
| **SOP “文档与实现背离”** | “Watch-loops 文档写得美好，实际 cron SOP 无 HTTP 能力、shell.exec/notify.channel 是占位符，根本跑不了监控循环” ([#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780)) | 🔥 高（新开即获赞/讨论） |
| **配置默认值“静默失效”** | “照着文档不写 `sops_dir`，守护进程启动后 SOP 系统根本不加载，日志零输出，排查半天发现是 `is_some()` 硬编码” ([#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)) | 🔥 高 |
| **验证工具“绿灯实为红灯”** | "`sop validate` 返回 success，`sop list` 却不见我的 SOP，原来是未知字段被吞了，连 warning 都没有” ([#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786)) | 🔥 高 |
| **Telegram 大群菜单消失** | “技能+工具>100 后 bot command 菜单彻底注册不上，用户只能记命令，体验断崖” ([#8950](https://

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*