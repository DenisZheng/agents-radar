# OpenClaw 生态日报 2026-07-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-29 02:00 UTC

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

# OpenClaw 项目日报 | 2026-07-29

---

## 1. 今日速览

**整体状态：高强度迭代期，核心稳定性与架构重构并行推进。**  
过去 24 小时，项目发布 **v2026.7.2-beta.5**，重点强化状态安全与崩溃恢复机制；合并/关闭 PR **266 个**，新增/活跃 Issue **228 个**，呈现“修复回归、清理技术债、补全基础设施”三大主线。社区高呼声聚焦于 **Linux/Windows 原生客户端缺失（#75）**、**网关内存泄漏 OOM（#91588）**、**会话状态一致性与消息丢失** 等生产级阻塞问题。维护者正通过大规模重构（#115483 移除重复运行时路径）和破坏性变更（#114388 移除全局默认 Agent）夯实架构基础，短期内版本波动性将维持高位。

---

## 2. 版本发布

### **v2026.7.2-beta.5** (2026-07-29)
> **核心主题：State Safety & Recovery（状态安全与恢复）**

| 变更点 | 说明 | 影响面 |
|--------|------|--------|
| **Quarantine Store（隔离存储）** | 持久化数据写入隔离区，主数据库损坏时数据可存活 | 数据耐久性 ✅ 无破坏性变更 |
| **Crash-recoverable SQLite Snapshots** | SQLite 快照支持崩溃恢复，防止写入中途断电/崩溃导致损坏 | 会话/上下文持久化 ✅ |
| **Crash-durable Filesystem Publication** | 文件系统发布原子化，避免部分写入导致不一致状态 | 插件/技能/配置分发 ✅ |
| **Schema-upgrade Data-loss Rejection** | 升级时若检测到数据丢失风险自动拒绝迁移，强制人工介入 | 版本升级安全性 ⚠️ **运维需关注：自动升级可能被阻断** |
| **Rollback-writer Snapshot Recovery** | 回滚写入器可从快照恢复，支持灾难级回滚 | 灾难恢复 RPO/RTO 优化 ✅ |

**迁移注意事项**：  
- 升级前务必备份 `~/.openclaw/` 目录；  
- 若部署自动化升级管道，需增加“升级被拒绝”告警与人工审批流程；  
- 该版本为 **Beta**，生产环境建议观望稳定版（参考社区呼声 #73537 *production-readiness stability label*）。

🔗 [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.5) | 关联 PR：#1（占位符，实际变更分散在多个 PR）

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR（推进度：架构清理 > 稳定性修复 > 新功能）

| PR | 类型 | 核心推进 | 状态 | 关联 Issue |
|----|------|----------|------|------------|
| [#114388](https://github.com/openclaw/openclaw/pull/114388) | **Breaking Refactor** | 移除存储的全局默认 Agent，强制“单 Agent 或显式归属”，修复跨渠道/定时任务/会话的隐式归属 Bug（约占 #112678 落地发现的一半） | `CLOSED` `XL` `P2` | #112678, #113637 |
| [#114439](https://github.com/openclaw/openclaw/pull/114439) | **Bug Fix** | 修复跨 Agent 切换会话时，选中 Agent、Gateway 会话、全局观察者、重连状态不同步导致的“陈旧 Agent 芯片/面板” | `CLOSED` `XL` `P1` | #109087, #112516, #109214, #112852 |
| [#114441](https://github.com/openclaw/openclaw/pull/114441) | **Bug Fix** | 修复 Cron 任务完成却卡在 `running` 状态、保留预留槽、延迟一次性删除、丢失运行历史（同批次慢任务阻塞快任务） | `CLOSED` `L` `P1` | #100471, #81572 |
| [#114443](https://github.com/openclaw/openclaw/pull/114443) | **Bug Fix** | TUI 共享会话同步与流式边界修复：其它客户端发送的消息实时可见、修复持久化竞态导致的可见响应丢失、误刷新 | `CLOSED` `L` `P2` | #38829 |
| [#113368](https://github.com/openclaw/openclaw/pull/113368) | **Reliability** | Telegram 隔离轮询：仅在持久化落盘后持久化 `update_offset`，避免崩溃窗口期导致 Telegram 停止重投递 | `CLOSED` `S` `P1` | #113315 |
| [#114442](https://github.com/openclaw/openclaw/pull/114442) | **Bug Fix** | OpenAI 设备码授权：仅对瞬态传输错误重试，避免 DNS/挂起导致整个 15 分钟 OAuth 流程中止 | `CLOSED` `S` | #114086 |
| [#114400](https://github.com/openclaw/openclaw/pull/114400) | **Release Engineering** | 发布后验证新增“检测 npm install 后缺失的捆绑 Provider 清单”，防止损坏的 Ollama/LM Studio 安装包逃逸发布闸门 | `CLOSED` `S` `P2` | — |
| [#114429](https://github.com/openclaw/openclaw/pull/114429) | **QA Infra** | 强化 Mantis Telegram 桌面验证 harness：缺失工具链时快速失败、移除易漂移的启动后配置重写 | `CLOSED` `L` | #114125 |

### 🚧 进行中/待评审的大型 PR（下一步里程碑关键）

| PR | 标签 | 说明 |
|----|------|------|
| [#115483](https://github.com/openclaw/openclaw/pull/115483) | `refactor` `XL` `maintainer` | **今日新开**：移除重复运行时路径、废弃转录读取器、重复 Provider/渠道初始化、深层聊天组件——**代码库瘦身与可维护性核心重构** |
| [#95847](https://github.com/openclaw/openclaw/pull/95847) | `fix` `

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-07-29

---

## 1. 生态全景

**整体态势：高强度并行迭代，架构重构与生产级稳定性攻坚同步推进，呈现“百花齐放、分层竞争”格局。**  
头部项目（OpenClaw、Hermes Agent、IronClaw、ZeroClaw）日均 PR/Issue 破百，已进入**核心架构重构期**（运行时解耦、状态安全、权限模型、插件化）；腰部项目（NanoBot、PicoClaw、NanoClaw、Moltis、LobsterAI）聚焦**跨平台兼容性、多模态原生支持、企业级特性（RBAC、审计、可观测性）**；尾部项目（ZeptoClaw、NullClaw、TinyClaw）处于维护/休眠状态。生态呈现**“重状态、重安全、重互操作、重工程化”**四大共性技术方向，标志着从“原型验证”向“生产交付”全面跨越。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 阶段标签 |
|------|--------------|-----------|---------|------------|----------|
| **OpenClaw** | 228 新增/活跃 | 266 合并/关闭 | v2026.7.2-beta.5 | ⭐⭐⭐⭐⭐ **极高** | 核心重构冲刺期 |
| **Hermes Agent** | 50 (36新/14闭) | 50 (36待/14闭) | 无 | ⭐⭐⭐⭐ **高** | 语音/多端稳定性攻坚期 |
| **IronClaw** | 50 (34新/16闭) | 50 (35待/15闭) | 无 | ⭐⭐⭐⭐ **高** | Epic收尾+Reborn架构落地期 |
| **ZeroClaw** | 49 (42新/7闭) | 50 (49待/1闭) | 无 | ⭐⭐⭐⭐ **高** | 安全/运行时/插件化RFC密集决策期 |
| **NanoBot** | 7 活动 | 37 (19待/18闭) | 无 | ⭐⭐⭐⭐ **高** | 密集修复+新功能并行冲刺期 |
| **PicoClaw** | 4 | 10 (7待/3闭) | 无 | ⭐⭐⭐ **中高** | 核心模块攻坚+技术债清理期 |
| **NanoClaw** | 1 更新 | 11 (7待/4闭) | 无 | ⭐⭐⭐ **中高** | 容器/配置/升级安全交付密集期 |
| **Moltis** | 1 关闭 | 8 (6待/2闭) | 无 | ⭐⭐⭐ **中高** | 大型特性并行开发期 (ACP/权限/可观测性) |
| **LobsterAI** | 4 新增 | 5 合并 | 无 | ⭐⭐⭐ **中高** | 安全加固+跨平台Shell兼容阻断期 |
| **ZeptoClaw** | 0 | 2 (Dependabot) | 无 | ⭐ **低** | 维护模式/疑似休眠 |
| **NullClaw** | 0 | 0 | 无 | ⭐ **低** | 无活动 |
| **TinyClaw** | 0 | 0 | 无 | ⭐ **低** | 无活动 |
| **CoPaw** | 数据获取失败 | - | - | - | - |

> **注**：OpenClaw 以量级优势领跑；头部 4 项目形成“第一梯队”；腰部 5 项目形成“第二梯队”；尾部 3 项目处于边缘化风险。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 定位 | 差异化对比 |
|------|---------------|------------|
| **技术路线** | **“重状态、重安全、重运行时”** —— 自研 SQLite 快照/隔离存储/回滚写入器，构建**崩溃可恢复的状态机内核**；强制 Schema 升级拒绝数据丢失。 | 同类多依赖外部 DB/Event Sourcing（IronClaw 用 PostgreSQL+Event Log，ZeroClaw 用 WASM 插件化状态），OpenClaw 选择**内嵌轻量级持久层自给自足**，部署门槛最低。 |
| **架构演进** | **大刀阔斧破坏性重构**：移除全局默认 Agent（#114388）、合并重复运行时路径（#115483）、强制单 Agent 显式归属。 | Hermes/IronClaw/ZeroClaw 均在“适配器/传输层解耦”做文章，OpenClaw 直接**重写核心归属模型**，激进度最高。 |
| **社区规模** | 日均 200+ Issue/PR 吞吐，Beta 版本仍获大量生产级反馈（#75 Linux/Win 原生客户端、#91588 网关 OOM）。 | 头部项目中唯一**以“桌面端原生客户端缺失”作为头号呼声**，说明其用户基数向 C 端/个人开发者倾斜最重。 |
| **生态角色** | **事实标杆/参考实现** —— 其他项目（PicoClaw、NanoClaw、LobsterAI）显式依赖或对齐其运行时/协议。 | 类似 Linux 内核在发行版中的位置：上游核心稳定性直接决定下游发行版质量。 |

---

## 4. 共同关注的技术方向（多项目共振信号）

| 技术方向 | 涉及项目 | 具体诉求/动作 |
|----------|----------|---------------|
| **状态持久化与崩溃恢复** | **OpenClaw** (核心)、**ZeroClaw** (SOP 引擎容错)、**IronClaw** (会话历史规范化)、**NanoBot** (内存归档容错) | 从“能跑”转向“断电不丢、升级不炸、回滚可控”；SQLite WAL/快照/隔离存储成标配。 |
| **运行时/传输层解耦与插件化** | **ZeroClaw** (WASM 运行时插件、ACP 传输适配器)、**IronClaw** (通道入口统一、IronHub 安装流)、**Moltis** (ACP Agent 暴露)、**PicoClaw** (vodozemac 替代 libolm) | **“运行时即平台”**：核心只做调度/状态/安全，渠道/工具/模型/加密全插件化，WASM 成首选沙箱。 |
| **企业级权限与多租户 (RBAC/ABAC)** | **Hermes Agent** (Gateway RBAC #527)、**IronClaw** (四层策略优先级 #6512、凭证绑定 #6509)、**Moltis** (Operators 列表 #1170)、**ZeroClaw** (KeySource trait #9127) | 从“单用户全权限”向“Owner/Admin/User/Guest + 资源级授权 + 审计日志”演进，成商业化前置条件。 |
| **跨平台原生体验 (Linux/Windows/macOS/Android)** | **OpenClaw** (#75 原生客户端呼声最高)、**Hermes** (Desktop TTS/Profile 同步)、**PicoClaw** (Android 服务启动失败 #3182)、**LobsterAI** (Windows exec Shell 兼容 #2396 P0)、**NanoClaw** (容器 `--init` #3060) | **桌面端原生、移动端后台长驻、Shell 跨平台兼容**成三大硬仗；WebView/Tauri/Wails 成主流选型。 |
| **可观测性与成本控制** | **Moltis** (Langfuse/OTLP/用户反馈 #1174)、**NanoBot** (Token 消耗过高 #1332、有界缓冲 #5150)、**PicoClaw** (Prompt Cache 统计 #3251)、**ZeroClaw** (高熵检测误伤) | **Token 可视化、推理链路追踪、缓存命中率、用户满意度闭环**成 LLMOps 基建标配。 |
| **模型上下文/记忆管理** | **OpenClaw** (会话状态一致性)、**Hermes** (Qwen 1M 误判 131K #69881)、**NanoBot** (会话合并丢媒体 #5118)、**Moltis** (Cron 归档显示 #1172) | 长上下文模型普及倒逼**压缩策略、分层记忆、媒体引用持久化**工程化。 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|------|--------------|--------------|------------------|
| **OpenClaw** | **个人知识助手、本地优先、状态安全** | 个人开发者、高级用户、隐私敏感型团队 | 单二进制 + SQLite 嵌入式状态机，无外部依赖，极致部署简易性 |
| **Hermes Agent** | **语音交互、多端同步、桌面原生** | 重度语音用户、多设备流转场景、CLI/TUI 爱好者 | Rust 核心 + TS 前端，TTS/STT 管线深度自研，Desktop/CLI 双端一致性优先 |
| **IronClaw** | **企业级扩展平台、多租户治理、Slack/Telegram 原生** | 企业 IT、SaaS 厂商、需要品牌化 Bot 的团队 | 微服务化倾向：PostgreSQL + Event Sourcing + gRPC 内部总线，Extension Registry 核心资产 |
| **ZeroClaw** | **安全合规、插件化内核、ACP 标准对齐** | 高安全要求组织、插件生态建设者、标准化推动者 | WASM 插件沙箱 + KeySource 抽象 + ACP 原生实现，安全边界下沉到运行时 |
| **NanoBot** | **轻量级、WebUI 技能市场、多渠道 (LINE/WhatsApp)** | 独立开发者、中小团队、快速交付场景 | Python 异步核心，Provider/Extension 统一抽象，WebUI 运营化能力强 |
| **PicoClaw** | **即时通讯桥接 (飞书/钉钉/微信)、端到端加密** | 企业内网部署、IM 重度集成场景、合规导向团队 | Go 核心 + Matrix/OLM 加密，专注“桥接”而非“Agent 智能”，vodozemac 迁移为安全红线 |
| **NanoClaw** | **容器化编排、多模型高可用、升级安全** | 云原生部署、多模型供应商管理、运维导向团队 | 容器运行时为一等公民，双引擎配额回落、升级审计/冒烟测试为核心竞争力 |
| **Moltis** | **ACP 协议原生、可观测性基建、PWA 移动端** | Agent 评测参与者、可观测性重度用户、移动端优先团队 | ACP stdio 传输 + Langfuse/OTLP 双后端 + Terminal-Bench 集成，面向“Agent 即标准服务” |
| **LobsterAI** | **桌面端安全分发、托管运行时治理、协作侧聊** | 企业桌面标准化部署、合规审计敏感、需要人工介入协作的团队 | Electron + OpenClaw 托管运行时，安装器安全链 (拒绝重定向)、`/btw` 隔离侧聊创新交互 |
| **ZeptoClaw/NullClaw/TinyClaw** | - | - | 处于边缘/休眠，定位模糊 |

---

## 6. 社区热度与成熟度分层

| 分层 | 项目 | 特征 | 典型信号 |
|------|------|------|----------|
| **第一梯队：核心基建重构期** | OpenClaw, Hermes, IronClaw, ZeroClaw | 日均 50+ PR/Issue，RFC 密集，破坏性变更常态化，核心维护者全职投入 | OpenClaw 266 PR/天；ZeroClaw 4 个 RFC/天；IronClaw 13 子 Issue/天收尾 Epic |
| **第二梯队：功能交付冲刺期** | NanoBot, PicoClaw, NanoClaw, Moltis, LobsterAI | 日均 10-40 PR，修复闭环 <24h，大型特性 PR 并行，向生产级交付收敛 | NanoBot 80% PR 为 P1 修复；Moltis 6 大型特性 PR 并行；LobsterAI 5/6 PR 为安全/架构类 |
| **第三梯队：维护/观望期** | ZeptoClaw, NullClaw, TinyClaw | 仅 Dependabot/零活动，无人工代码提交，文档/官网可能滞后 | ZeptoClaw 仅 2 个 Dependabot PR，#613 关闭未合并暗示流程断裂 |

**成熟度判断**：
- **生产就绪度最高**：NanoClaw（升级审计/冒烟测试/双引擎回落已生产跑 3 周）、OpenClaw（状态安全机制最完善）、IronClaw（发布门禁/关键旅程目录已建立）。
- **架构风险最高**：ZeroClaw（4 个高风险 RFC 同步决策）、OpenClaw（破坏性重构进行中）、Hermes（多平台 TTS/Profile 同步仍有阻断 Bug）。

---

## 7. 值得关注的趋势信

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-29

---

## 1. 今日速览

- **活跃度评级：高** —— 过去 24 小时内共有 **37 条 PR 更新**（19 待合并、18 已合并/关闭）与 **7 条 Issue 活动**，呈现典型的“密集修复 + 新功能并行”冲刺态势。
- **核心主题：** 修复会话合并丢失媒体路径（`#5118`/`#5139`）、配对存储空指针（`#5155`）、Responses API 解析健壮性（`#5154`）、内存归档容错（`#5153`）等 **P1 级回归修复** 集中落地；同时推进 **WebUI 技能市场（#5116）**、**统一扩展平台（#5098）**、**LINE 通道（#5115）** 等大型特性。
- **CI/工程效能：** 两个 CI 稳定性 PR（#5145、#5144）已合并，显著降低误报率并加快流水线。
- **社区信号：** 仍有长期 Issue（`#5` uv 安装、`#1332` Token 消耗）被标记为 stale/closed，但新增的多 Agent 协作提案（`#5000`）与 MCP SDK v2 迁移跟踪（`#5138`）指明下一阶段架构演进方向。
- **整体健康度：** 修复闭环快（多数 Bug 当日即有 Fix PR），技术债偿还与特性开发并行，项目处于 **高质量迭代期**。

---

## 2. 版本发布

> **今日无新版本发布。**

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响范围 |
|----|------|----------|----------|
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | CI/CD, Performance | 替换易超时的 exec-session 测试为 stdin 握手就绪检测；批量 pip 解析依赖，串行兜底。 | **CI 稳定性↑、耗时↓**，消除冲锁性失败。 |
| [#5144](https://github.com/HKUDS/nanobot/pull/5144) | CI/CD | PR 路径检测改用 three-dot range（对比 HEAD SHA），排除并发 base 更新干扰。 | **误触发 CI ↓**，仅变更相关路径才跑测试。 |
| [#5143](https://github.com/HKUDS/nanobot/pull/5143) | WebUI, Fix | 推理/工具抽屉动画与 running drawer 对齐 600ms ease-out，尊重 `prefers-reduced-motion`。 | **交互体验↑**，动画一致性修复。 |
| [#5142](https://github.com/HKUDS/nanobot/pull/5142) | WebUI, Fix | 恢复会话直接定位最新消息，取消可见滚动动画；保留手动滚动平滑。 | **历史会话加载体验↑**，消除“跳动”感。 |
| [#5110](https://github.com/HKUDS/nanobot/pull/5110) | Config, Feature | `nanobot status` 新增离线就绪检查（环境变量、模型解析、Provider 连通性）；CLI/SDK 统一字段级诊断。 | **上手门槛↓、运维可见性↑**，错误定位从“报错堆栈”变为“可执行建议”。 |
| [#5155](https://github.com/HKUDS/nanobot/pull/5155) | Regression, Fix | `pairing.get_approved` 容错 `approved: null`，避免 `AttributeError`。 | **配对流程鲁棒性↑**，修复生产环境崩溃。 |
| [#5154](https://github.com/HKUDS/nanobot/pull/5154) | Provider, Fix | Responses API 解析器兼容 primitive/非 dict 输出项，修复 `vars(item)` TypeError。 | **多模型兼容性↑**，防止流式解析中断。 |
| [#5153](https://github.com/HKUDS/nanobot/pull/5153) | Memory, Fix | `_format_messages` 兼容非字符串/缺失 timestamp 与 role，修复归档回落路径。 | **会话持久化可靠性↑**，避免历史损坏。 |
| [#5147](https://github.com/HKUDS/nanobot/pull/5147) | Regression, Fix | 瞬态 `pairing.json` 读失败不再清空已批准列表；写入失败改为报错而非持久化空视图。 | **数据安全性↑**，防止误踢合法设备。 |
| [#5146](https://github.com/HKUDS/nanobot/pull/5146) | WebUI, Fix | 校验 token-usage 日键格式，单个脏键不再导致 `/api/settings` 整体 500。 | **WebUI 可用性↑**，隔离脏数据影响面。 |

> **小结：** 10 个已合并 PR 中 8 个为 **P1 回归修复/稳定性**，2 个为 **CI/体验打磨**；“修补漏洞”占比 80%，体现维护者对生产可用性的高优先级把控。

---

## 4. 社区热点（高互动 Issues/PRs）

| 编号 | 标题 | 互动 | 核心诉求 | 分析 |
|------|------|------|----------|------|
| [#5](https://github.com/HKUDS/nanobot/issues/5) | uv install 指引 | 👍 3 / 评论 7 | 官方文档增加 `uv` 安装示例，提升速度与稳定性。 | **开发者体验诉求**；`uv` 已成 Python 生态主流，文档滞后易劝退新贡献者。虽标记 Closed，建议在 CONTRIBUTING/Readme 补齐。 |
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | 多 Agent 协作演进提案 | 评论 5 | 将当前“后台任务委派”升级为持久身份、共享状态、协调编排的真 Multi-Agent 系统。 | **架构级讨论**；对齐 `#5152`（子任务部分完成元数据）等 PR 可见雏形，后续里程碑大概率纳入。 |
| [#1332](https://github.com/HKUDS/nanobot/issues/1332) | Token 消耗过高（hello 5k+） | 评论 4 | 单次对话上下文膨胀导致成本失控。 | **成本敏感用户痛点**；已标记 stale/closed，但未给出优化方案。结合 `#5150`（会话输出有界缓冲）与 `#5139`（媒体路径保留减少重传）可部分缓解，仍需显式上下文裁剪策略。 |
| [#5118](https://github.com/HKUDS/nanobot/issues/5118) / [#5139](https://github.com/HKUDS/nanobot/pull/5139) | 会话合并丢失 `media[]` 路径 | 评论 2 / PR 关联 | 仅存 `media[]` 的上传文件在归档后不可恢复。 | **数据完整性 Bug**；已有 Fix PR `#5139` 待合并，优先级 P1，影响所有多模态通道。 |
| [#5138](https://github.com/HKUDS/nanobot/issues/5138) | MCP SDK v2 迁移跟踪 | 评论 1 | stdio 关闭时 `cancel-scope` 报错 + stdout 协议污染。 | **基础设施升级阻滞**；阻碍 MCP 生态对齐，需专项 Sprint 解决。 |

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 状态 | 关联 Fix PR | 说明 |
|--------|-------|------|-------------|------|
| **P0 - 数据丢失** | [#5118](https://github.com/HKUDS/nanobot/issues/5118) 会话合并丢媒体路径 | Open | [#5139](https://github.com/HKUDS/nanobot/pull/5139) | 归档后文件不可恢复，影响所有上传文件场景。 |
| **P0 - 崩溃** | [#5155](https://github.com/HKUDS/nanobot/issues/5155) `pairing.json` `approved: null` 导致 `AttributeError` | Open (PR Ready) | [#5155](https://github.com/HKUDS/nanobot/pull/5155) | 生产环境配对流程完全阻断。 |
| **P1 - 解析失败** | [#5154](https://github.com/HKUDS/nanobot/issues/5154) Responses API 遇 primitive 输出抛 `TypeError` | Open (PR Ready) | [#5154](https://github.com/HKUDS/nanobot/pull/5154) | 多模型流式输出兼容性缺陷。 |
| **P1 - 归档损坏** | [#5153](https://github.com/HKUDS/nanobot/issues/5153) 非字符串 timestamp/缺 role 导致格式化异常 | Open (PR Ready) | [#5153](https://github.com/HKUDS/nanobot/pull/5153) | 历史回落路径数据质量问题。 |
| **P1 - 会话泄漏** | [#5151](https://github.com/HKUDS/nanobot/pull/5151) `AgentLoop._session_locks` 强引用致内存泄漏 | Open (PR Ready) | [#5151](https://github.com/HKUDS/nanobot/pull/5151) | 长运行进程会话锁无限累积。 |
| **P1 - 输出无界** | [#5150](https://github.com/HKUDS/nanobot/pull/5150) Exec 会话 stdout/stderr 无上限缓冲 | Open (PR Ready) | [#5150](https://github.com/HKUDS/nanobot/pull/5150) | 长命令输出 OOM 风险。 |
| **P1 - 配对数据清洗** | [#5147](https://github.com/HKUDS/nanobot/pull/5147) 瞬态读失败清空已批准列表 | **Merged** | [#5147](https://github.com/HKUDS/nanobot/pull/5147) | 已修复，回滚风险消除。 |
| **P1 - WebUI 500** | [#5146](https://github.com/HKUDS/nanobot/pull/5146) 脏 token-usage key 导致设置页全挂 | **Merged** | [#5146](https://github.com/HKUDS/nanobot/pull/5146) | 已修复，隔离脏数据。 |
| **P2 - 功能缺失** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp 不发音频 | Open | — | 仅收不发，`ffmpeg` 警告提示编码链路问题。 |
| **P2 - 逻辑误判** | [#5133](https://github.com/HKUDS/nanobot/issues/5133) `finish_reason=length` + tool_calls + 空内容被误判为 empty-retry | Open | — | 导致不必要的重试与 token 浪费。 |

> **趋势：** 今日新增 6 个 P0/P1 Bug，**均已有对应 Fix PR 进入审查**，修复闭环 ≤ 24h，稳定性治理节奏健康。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/进展 | 入版本概率 |
|----------|----------|--------------|------------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | 多 Agent 协作：持久身份、共享状态、编排层 | `#5152`（子任务剩余计数元数据）已为协调层铺垫 | **高** — 架构演进核心，预计 v0.12+ 里程碑 |
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | 统一 Python 扩展平台（填补 Skills/Apps/MCP 能力缺口） | PR 冲突标记，需解耦注册表 | **中高** — 解锁生态可编程性，优先级 P1 |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | WebUI 技能市场：Discover 视图、一键安装、历史火花线 | 功能完整，测试就绪 | **高** — 用户可见价值大，近期 Release 必含 |
| [#5115](https://github.com/HKUDS/nanobot/pull/5115) | LINE Messaging API 通道（日/台/泰/印主流） | Webhook + HMAC + 允许列表已实现 | **高** — 通道矩阵补齐，商业化关键 |
| [#5148](https://github.com/HKUDS/nanobot/pull/5148) | 图像感知 Model Presets（三态 `supportsImageInput`） | 迁移 legacy 配置，重建 fallback 链 | **中** — 多模态统一配置前置依赖 |
| [#5131](https://github.com/HKUDS/nanobot/pull/5131) | 稳定资源路径别名（`<config>/resources/<view-id>/`） | 冲突标记，涉及全链路路径解析 | **中** — 兼容性风险大，需充分测试 |
| [#5138](https://github.com/HKUDS/nanobot/issues/5138) | MCP SDK v2 迁移（解决 stdio 关闭报错） | 仅跟踪 Issue，无 PR | **中** — 阻塞 MCP 生态同步，需专项投入 |



</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-29

---

## 1. 今日速览

- **整体活跃度极高**：过去 24 小时共计 **100 条** 更新（50 Issues + 50 PRs），其中新开/活跃 Issue 36 条、关闭 14 条；待合并 PR 36 条、已合并/关闭 14 条。无新版本发布。
- **核心主题聚焦**：TTS/语音模块的跨平台兼容性修复、Profile 配置作用域修正、Gateway 权限模型重构（RBAC）、工具调用稳定性提升、以及 Desktop 远程连接的会话/配置同步问题。
- **社区参与度**：Top Issue `#527`（Gateway RBAC）累计 17 条评论、10 个 👍，显示社区对多租户权限模型的强烈诉求；多个长期 Bug（如 `#8993` 工具调用幻觉、`#5214` 配置写入异常）持续获得关注。
- **代码库健康度**：PR 质量参差不齐，既有针对性修复（如 `#48826` Piper TTS 路径解析），也有大型特性分支（`#65982` Claude Agent SDK Provider、`#56023` Photon iMessage 本地模式），审查负载较重。
- **风险点**：多个 PR 标记 `sweeper:risk-*` 标签（安全边界、消息投递、兼容性、Windows 平台），提示合并前需充分回归测试。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR 与 Issue

| PR / Issue | 类型 | 核心变更 | 影响范围 |
|------------|------|----------|----------|
| [#73770](https://github.com/NousResearch/hermes-agent/pull/73770) | `fmt(js)` | `npm run fix` 自动格式化修复 | 代码风格统一，无功能变更 |
| [#46135](https://github.com/NousResearch/hermes-agent/issues/46135) | Bug 修复 | Desktop 远程 TTS 音频显示为 0 秒/损坏 | TTS/Streaming/Desktop |
| [#45506](https://github.com/NousResearch/hermes-agent/issues/45506) | Bug 修复 | Desktop 语音模式错误使用默认 Profile 的 TTS 配置 | Profiles/TTS/Desktop |
| [#67545](https://github.com/NousResearch/hermes-agent/issues/67545) | Bug 修复 | CLI 连续语音模式下 Ctrl+B 热键在转录/推理阶段失效 | CLI/Voice/TTs |
| [#64057](https://github.com/NousResearch/hermes-agent/issues/64057) | Bug 修复 | TTS 语音选择忽略全局与 Profile 配置不匹配 | Desktop/Config/Profiles/Windows |
| [#8098](https://github.com/NousResearch/hermes-agent/issues/8098) | Bug/Perf | 本地 faster-whisper 首次拉取模型时 CLI 静默卡在 `Transcribing...` | CLI/STT/Install |
| [#38831](https://github.com/NousResearch/hermes-agent/issues/38831) | Bug 修复 | CLI 下 Agent 调用 `text_to_speech` 工具生成音频但不自动播放 | CLI/TTS |
| [#21088](https://github.com/NousResearch/hermes-agent/issues/21088) | Bug 修复 | Python 3.14+ `_voice_process_recording` 中 `finally` 块 `return` 触发 SyntaxWarning | CLI/Voice |
| [#56427](https://github.com/NousResearch/hermes-agent/issues/56427) | Bug 修复 | Gateway 视频/截图缓存目录无清理机制，磁盘泄漏 | Gateway/Cache |
| [#66788](https://github.com/NousResearch/hermes-agent/issues/66788) | Test 改进 | Gateway 测试套件产生真实副作用（触发 TTS、启动 Chrome） | Test/Gateway/TTS/Browser |

> **进展评估**：今日合并/关闭的 14 条 PR/Issue 中，**9 条直接修复用户可见的 TTS/Voice/Profile/缓存 Bug**，其余为代码规范与测试隔离改进。语音/音频管线在 Desktop 与 CLI 双端的稳定性显著推进。

---

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 评论/👍 | 核心诉求分析 |
|------|----------|------|---------|--------------|
| 1 | [#527](https://github.com/NousResearch/hermes-agent/issues/527) | **Gateway Permission Tiers — RBAC (Owner/Admin/User/Guest)** | 17 💬 / 10 👍 | **最高呼声特性**：现有二元授权（全量/全无）无法满足多用户、多团队部署；需细粒度命令/工具/终端权限控制。标签 `needs-decision`、`sweeper:risk-security-boundary` 表明架构决策与安全审查并行。 |
| 2 | [#71527](https://github.com/NousResearch/hermes-agent/issues/71527) | **Desktop 未将活跃 Profile 作为 `?profile=` 传给 `/api/ws`** | 7 💬 | **远程多 Profile 会话断层**：本地 localStorage 记录了 Profile，但 WebSocket 握手未携带，导致后端无法按 Profile 隔离上下文/配置。阻断多账号/多人格切换体验。 |
| 3 | [#47191](https://github.com/NousResearch/hermes-agent/issues/47191) | **Discord 目标完成原生通知（从 TUI 触发）** | 5 💬 | **平台原生集成缺口**：用户期望 Goal 完成自动推送到 Discord Home Channel，而非依赖 Cron 变通。涉及 Gateway→Discord 事件总线与 TUI 状态机联动。 |
| 4 | [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) | **v0.8.0 工具调用不稳定/频繁幻觉/空响应（web_search、FireCrawl）** | 4 💬 / 3 👍 | **核心 Agent 可靠性回归**：工具调用失败、生成非法调用（`todo:list` 等）、空响应，严重影响生产可用性。标签 `needs-repro` 表明需最小复现。 |
| 5 | [#62975](https://github.com/NousResearch/hermes-agent/issues/62975) | **Podman 安装时 Node sidecar (NPM) 权限报错** | 4 💬 | **容器化部署兼容性**：非 Docker 运行时（Podman/SELinux）下权限模型差异导致安装失败，影响企业/安全强化环境采用。 |

---

## 5. Bug 与稳定性

### 🔴 Critical / High（已有 Fix PR 或明确复现路径）

| Issue | 严重度 | 现象 | 关联 PR/状态 |
|-------|--------|------|--------------|
| [#73297](https://github.com/NousResearch/hermes-agent/issues/73297) | **High** | `/reset` 后内存回滚：FTS 写入未刷盘即会话失效，加载过期 MEMORY.md | 无 PR，标签 `sweeper:risk-session-state` `needs-repro` |
| [#73388](https://github.com/NousResearch/hermes-agent/issues/73388) | **High** | Agent 对非 deferred MCP 工具仍走 `tool_search/describe/call` 重试链路，不直接调用 | 无 PR |
| [#69881](https://github.com/NousResearch/hermes-agent/issues/69881) | **High** | Qwen 1M 上下文模型被误判为 131K，触发过早压缩 | 无 PR，标签 `sweeper:risk-compatibility` |
| [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) | **High** | 工具调用幻觉/空响应（web_search、FireCrawl 为重灾区） | 无 PR，`needs-repro` |
| [#5214](https://github.com/NousResearch/hermes-agent/issues/5214) | **High** | `config.yaml` 只读/挂载/无效 YAML 导致崩溃、静默失败、误报空配置 | 无 PR |

### 🟡 Medium（已有 Fix PR 待合并）

| Issue | 现象 | 关联 PR |
|-------|------|---------|
| [#48826](https://github.com/NousResearch/hermes-agent/pull/48826) | Piper TTS：裸 `.onnx` 文件名 + `voices_dir` 导致解析回退到下载器失败 | **#48826 (Open)** |
| [#6742](https://github.com/NousResearch/hermes-agent/pull/6742) | MCP `_extract_attachments()` 单 token 正则截断含空格/引号的 MEDIA 路径 | **#6742 (Open)** |
| [#18195](https://github.com/NousResearch/hermes-agent/pull/18195) | Gateway `exec` 类型 `quick_commands` 忽略用户传参 | **#18195 (Open)** |
| [#26637](https://github.com/NousResearch/hermes-agent/pull/26637) | Gateway 多线程下 `_RUNTIME_MAIN_PROVIDER/MODULE` 全局变量竞态 | **#26637 (Open, duplicate)** |
| [#39381](https://github.com/NousResearch/hermes-agent/pull/39381) | s6 重启留存 `down` 标记导致 Gateway 无法拉起 | **#39381 (Open)** |

### 🟢 Low / Cosmetic

- `#21088` Python 3.14 `finally` 中 `return` 警告（已关闭）
- `#66788` 测试副作用（已关闭）
- `#56427` 视频/截图缓存无清理（已关闭，需同步实现清理任务）

---

## 6. 功能请求与路线图信号

| 特性需求 | 来源 Issue/PR | 成熟度 | 纳入下版本可能性 | 备注 |
|----------|---------------|--------|------------------|------|
| **Gateway RBAC (Owner/Admin/User/Guest)** | [#527](https://github.com/NousResearch/hermes-agent/issues/527) | 设计阶段，`needs-decision` | ★★☆☆☆ | 涉及认证/授权核心模型、安全边界，需 RFC 与威胁建模，短期内难合并主干 |
| **Photon 本地 iMessage 模式** | [#56023](https://github.com/NousResearch/hermes-agent/pull/56023) | PR 开发中，含 `sweeper:risk-*` 多标签 | ★★★☆☆ | 免凭证本地模式，保留云托管为默认；需 macOS 签名账号权限，平台风险较高 |
| **Claude Agent SDK Provider (订阅 OAuth、fail-closed)** | [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | 大型 PR (19 commits)，依赖 `#65978` | ★★★☆☆ | 官方 SDK 集成，计费风险需 `sweeper:risk-security-boundary` 审查，可能作为实验性 Provider 先行 |
| **可选逐轮瀑布追踪 (`agent.turn_trace`)** | [#65329](https://github.com/NousResearch/hermes-agent/pull/65329) | 重提 PR，配置化而非环境变量 | ★★★★☆ | 可观测性增强，配置开关 `opt-in`，风险可控，极大概率进下版本 |
| **Discord Markdown 表格渲染为 Box-drawing 围栏表** | [#64301](https://github.com/NousResearch/hermes-agent/pull/64301) | PR 开发中 | ★★★★☆ | 纯适配层改动，用户体验提升明显，无破坏性变更 |
| **Webhook 终端投递元数据标准化** | [#73559](https://github.com/NousResearch/hermes-agent/pull/73559) | PR 新开，`needs-decision` | ★★★☆☆ | 面向集成方的契约稳定化，需确定版本化 envelope 格式 |
| **本地 STT Provider (`local_server` HTTP 桥接)** | [#62866](https://github.com/NousResearch/hermes-agent/pull/62866) | PR 开发中 | ★★★★☆ | 填补自托管 STT 接入空白，配置简单，兼容性风险低 |
|

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-29

> **数据基准**：过去 24 小时 GitHub 活动（Issues: 4, PRs: 10, Releases: 0）  
> **项目地址**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

*   **活跃度评估：中高**。虽然无新版本发布，但 PR 活跃度极高（10 条更新，7 待合并），且集中在核心功能模块，显示项目处于密集迭代期。
*   **核心进展方向**：重点攻坚 **认证体系健壮性**（OAuth 回调）、**多模态消息原生支持**（飞书音视频）、**LLM 提供商能力补全**（Anthropic Prompt Caching、Exa 搜索）及 **Agent 模型解析逻辑修复**。
*   **技术债清理**：正在推进废弃加密库 `libolm` 向 `vodozemac` 迁移（Issue #3088），并修复 DingTalk 预览异常、Android 服务启动失败等平台适配问题。
*   **社区响应**：Issue #3088（加密库迁移）讨论度最高（10 条评论，2 👍），显示社区对安全合规的高度关注；新增 Bug #3300（工具集缺失导致死锁）虽无评论但阻塞用户核心流程，需优先处理。
*   **积压风险**：1 个长期搁置 PR（#1951，安装脚本迁移）超 4 月未合并；多个 "stale" 标签 PR/Issue 需清理或推进。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展：今日合并/关闭的重要 PR（3 个）

| PR | 标题 | 类型 | 核心变更与影响 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#3256** | `fix(feishu): send audio and video with native message types` | **功能增强/修复** | **飞书适配里程碑**。修复音视频消息仅作为附件下载、无法原生播放的问题。上传阶段已区分 `opus`/`mp4`，发送阶段现映射为原生消息类型，显著提升飞书端用户体验。 | [#3256](https://github.com/sipeed/picoclaw/pull/3256) |
| **#3254** | `fix(agent): prefer verbatim model matches over provider-alias splits` | **核心修复** | **模型路由逻辑修正**。解决 `lookupModelConfigByRef` 优先匹配错误导致的模型别名冲突（如 `provider:model` 被错误拆分匹配），保障模型引用解析的确定性。 | [#3254](https://github.com/sipeed/picoclaw/pull/3254) |
| **#3228** | `fix(anthropic-messages): send SystemParts as system blocks with cache_control` | **功能增强** | **解锁 Anthropic Prompt Caching**。将扁平化的系统消息还原为结构化 `system blocks` 并支持 `cache_control`，使 `anthropic_messages` 提供商能利用缓存降低成本/延迟。 | [#3228](https://github.com/sipeed/picoclaw/pull/3228) |

> **进展小结**：今日合并 PR 均为高质量修复/增强，覆盖 **即时通讯适配、Agent 核心路由、LLM 成本优化** 三大支柱场景，项目工程质量稳步提升。

---

## 4. 社区热点：讨论最活跃的 Issues/PRs

| 标的 | 标题 | 热度指标 | 核心诉求分析 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue #3088** | `[Feature] use vodozemac instead of libolm` | **💬 10 评论 · 👍 2** <br> *标签: help wanted, priority: high, stale* | **安全合规刚需**。`libolm` 已停维且存在安全隐患，社区强烈要求迁移至官方替代库 `vodozemac`。建议**编译期可选依赖**以平滑过渡。涉及加密核心链路，测试负担重，急需维护者/贡献者主导攻坚。 | [#3088](https://github.com/sipeed/picoclaw/issues/3088) |
| **Issue #3182** | `[BUG] Android version` | **💬 5 评论** <br> *标签: stale* | **移动端可用性阻塞**。服务无法启动、路径设置不可变、权限虽全但仍受限。附带日志/截图，复现信息完整。涉及 Android 生命周期、存储权限（SAF）、前台服务机制，需原生开发介入。 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) |
| **PR #3280** | `fix(auth): make browser OAuth login survive real-world callback conditions` | **更新频繁 (7/21-7/28)** | **认证体系工程化**。解决无头/远程环境下 OAuth 回调失败、授权码一次性失效导致流程重启的 4 个独立根因。关乎所有依赖 OAuth 的部署场景（服务端、CI、容器），工程价值极高。 | [#3280](https://github.com/sipeed/picoclaw/pull/3280) |

---

## 5. Bug 与稳定性：今日报告/更新的缺陷

| 严重程度 | Issue | 现象 | 影响范围 | 是否有 Fix PR | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (阻塞)** | **#3300** 工具集缺失 `read_file` 导致每次对话死锁 | 强制 AI 读取 `RULES.md` 但工具不存在，导致 Agent 陷入无限等待/报错循环，完全阻断对话流程。 | 所有依赖工具调用读取外部规则的用户（最佳实践场景）。 | **无** (刚创建，未见关联 PR) | [#3300](https://github.com/sipeed/picoclaw/issues/3300) |
| **🟠 High (功能缺失)** | **#3182** Android 服务启动失败/路径不可配 | 应用无法作为服务运行，且内部存储路径硬编码/不可变，导致数据持久化与后台运行双失败。 | Android 全平台用户。 | 无 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) |
| **🟡 Medium (体验缺陷)** | **#3255** 钉钉会话列表预览固定显示 "PicoClaw" | 仅影响会话列表预览，聊天内内容正常。属于 `SimpleReplyMarkdown` 标题字段映射错误。 | 钉钉渠道用户（运营/客服场景高频）。 | **已修复关闭** (推测由近期 PR 解决，Issue 已 Closed) | [#3255](https://github.com/sipeed/picoclaw/issues/3255) |

> **稳定性建议**：**#3300 属 P0 级阻塞**，建议立即补充 `read_file` 工具或提供变通方案（如内联规则），避免用户生产环境故障。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 关联 PR/进展 | 纳入下一版本概率 | 分析 |
| :--- | :--- | :--- | :--- | :--- |
| **Issue #3088** | **迁移至 `vodozemac` (替代 `libolm`)** | 无 PR，仅讨论 | ⭐⭐⭐⭐ (高) | `priority: high` + `help wanted` + 安全合规红线。虽标 `stale` 但近期仍有更新，极大概率列入近期里程碑。 |
| **PR #3299** | **新增 Exa 原生网页搜索 Provider** | **OPEN** (7/26 创建) | ⭐⭐⭐⭐⭐ (极高) | 代码完整，含配置、认证、高亮、时间范围过滤。补全 `tools.web` 生态，符合 "工具即插即用" 方向。 |
| **PR #3251** | **Anthropic 统计 Prompt Cache Token 用量** | **OPEN** (7/12 创建) | ⭐⭐⭐⭐ (高) | 配合 #3228 (已合并) 闭环：有缓存写入需有度量观测。运维强需求。 |
| **PR #3200** | **Web UI 可配置模型默认降级链** | **OPEN** (7/1 创建) | ⭐⭐⭐ (中) | 涉及前后端联动、持久化 API，改动面较广，处于早期讨论/迭代中 (更新至 7/28)。 |
| **PR #3279** | **修复 Seahorse 摘要泄露 Tool Call 格式** | **OPEN** (7/21 创建) | ⭐⭐⭐⭐ (高) | 数据清洗类 Bug，影响上下文纯净度，修复范围局限 (`partsToReadableContent`)，易合入。 |

---

## 7. 用户反馈摘要：真实痛点与场景

1.  **规则管理外部化是刚需** (Issue #3300)：
    *   *场景*：团队协作维护 `RULES.md`，期望 Agent 自动加载而非硬编码 System Prompt。
    *   *痛点*：现有工具链不支持 `read_file`，导致“强制读取指令”变成死锁指令。**暴露了 Tool Calling 生态的不完整性**。
2.  **Android 非标准环境适配差** (Issue #3182)：
    *   *场景*：Termux/原生 Android 部署，需后台长驻服务、自定义数据目录。
    *   *痛点*：权限申请、存储访问框架 (SAF)、前台服务通知三大件缺一不可，当前实现均不达标。**移动端属于"二等公民"**。
3.  **OAuth 登录在生产环境极其脆弱** (PR #3280 背景)：
    *   *场景*：Headless 服务器、Docker、SSH 隧道、反向代理下完成浏览器授权码流。
    *   *痛点*：回调 URL 匹配严格、State 校验超时、端口冲突、授权码一次性导致重试即失效。**开箱即用的认证体验亟待工程化打磨**。
4.  **多平台消息原生渲染一致性** (PR #3256, Issue #3255)：
    *   *诉求*：飞书/钉钉/微信等渠道，音视频/卡片/Markdown 必须走原生 API 而非通用文件/文本降级。**企业级集成的专业度体现在细节原生支持上**。

---

## 8. 待处理积压：长期未响应的重要项

| 标的 | 标题 | 停滞时长 | 关键阻碍 | 维护者行动建议 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PR #1951** | `chore: move installation scripts from docs repo to here` | **> 4 个月** (创建 3/24) | 跨仓库协作依赖 (关联 `picoclaw_docs#14`)，可能涉及 CI/CD 流水线调整、脚本路径重构。 | **拆解任务**：先合并脚本迁移，CI 适配后置；或指定 Owner 推动跨仓库同步合并。 | [#1951](https://github.com/sipeed/picoclaw/pull/1951) |
| **Issue #3088** | `use vodozemac instead of libolm` | **~1.5 个月** (创建 6/9) | 涉及核心加密依赖替换，需 FFI/绑定重写、安全审计、跨平台编译验证，工作量大且风险高。 | **设立 Milestone** (如 v0.12.0)，招募/指派安全/基础设施方向 Contributor，拆解为：1. 可选特性 2. 默认开启 3. 移除 libolm。 | [#3088](https://github.com/sipeed/picoclaw/issues/3088) |
| **Issue #3182** | `Android version` BUG | **~1 个月** (创建 6/26) | 缺乏 Android 原生开发维护者，涉及 JNI/GoMobile/Flutter/原生 Service 等技术栈选型不确定。 | **明确技术栈方向**（是维护现有 GoMobile 还是迁移 Flutter/Fyne），发布 "Good First Issue" 招募移动端贡献者。 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) |
| **PR #3280 / #3279 / #3251 / #3299 / #3200** | **5 个 OPEN PR 均打 `stale` 标签** | **1-4 周** | 审阅带宽不足；部分 PR 涉及跨模块 (Auth, Seahorse, Providers, Web UI) 需多维度 Review。 | **建立 PR 分流机制**：按模块指定 Reviewer；对 `stale` 标签设自动清理规则（如 14 天无响应自动提醒/关闭）；优先合并 #3280 (Auth 核心) 和 #3299 (新 Provider)。 | 见上文链接 |

---

**报告生成时间**：2026-07-29 08:00 (UTC+8)  
**下一建议关注点**：#33

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-07-29

---

## 1. 今日速览

- **整体活跃度：高** —— 过去 24 小时内 **11 个 PR** 推进（4 个已合并/关闭，7 个待审核），仅 1 个 Issue 更新，呈现典型的“代码交付密集、需求讨论相对平静”冲刺期特征。
- **交付重心**：集中在**容器运行时稳健性**（`--init` 僵尸进程回收）、**配置系统一致性**（`WEBHOOK_PORT`/`WEBHOOK_HOST` 环境变量生效顺序）、**数据库迁移补全**（wiring destination 回填）以及**开发工具链修复**（过期测试脚本、更新脚本合并审计）。
- **战略信号**：#3057 “双引擎配额回落（Claude→Codex）”已在生产环境运行三周，标志着 NanoClaw 正式具备**多模型供应商高可用切换能力**；#1350 “GitHub Copilot SDK 接入”获 8 👍，社区对第三方模型后端的需求强烈。
- **技术债偿还**：4 个已合并 PR 修复的均为“历史遗留/架构漂移”问题，显示核心团队正系统性清理技术债，为后续大特性（如技能市场、多租户）铺路。
- **风险提示**：7 个待审 PR 中 5 个为 `Fix` 类，若审核滞后可能累积成回归风险；建议今日内完成至少 3 个核心修复的合并。

---

## 2. 版本发布

> **今日无新版本发布**。最近一次 Release 仍为早期版本，建议关注 `main` 分支合并节奏，若本周内累计合并 ≥ 10 个 PR，可考虑切 `v0.12.0` 预发布。

---

## 3. 项目进展

| PR | 类型 | 核心变更 | 对项目推进度的影响 |
|----|------|----------|-------------------|
| **#3060** ✅ **CLOSED** | **Fix (Container Runtime)** | 在 `buildContainerArgs` 中注入 `--init`，修复 PID 1 僵尸进程未回收导致的容器资源泄漏；同步修正文档中错误的 PID 1 说明。 | **高** —— 直接提升容器编排层的生产级稳定性，消除长时间运行 Agent 容器的内存/句柄泄漏隐患。 |
| **#1255** ✅ **CLOSED** | **Feature (Model Provider)** | 新增 MiniMax OAuth (Coding Plan) 作为模型后端，含 PKCE S256 设备码流程、自动刷新、登录脚本。 | **中高** —— 打破“仅支持 Anthropic Claude”的单一后端局面，为多模型路由奠定提供商抽象基础。 |
| **#2197** ✅ **CLOSED** | **Fix (Update Mechanism)** | 修复 `/update-nanoclaw` 技能在定制 Fork 上合并上游时，因自动合并退化为单亲提交导致历史篡改/代码静默丢失。 | **高** —— 保障下游定制部署的升级安全性，解决“升级后功能消失”的灾难性场景。 |
| **#1136** ✅ **CLOSED** | **Feature/Operational (Update Safety)** | 为 `/update-nanoclaw` 增加“自动合并审计”+“容器冒烟测试”双重守门，捕获无冲突标记的代码删除。 | **高** —— 将升级流程从“信任 Git 自动合并”转为“可验证、可回滚”，大幅降低运维事故率。 |

> **合计**：4 个已合并 PR 覆盖 **运行时、模型多元化、升级安全** 三大核心支柱，项目工程成熟度显著跃升。

---

## 4. 社区热点

| 对象 | 热度指标 | 核心诉求 | 分析 |
|------|----------|----------|------|
| **Issue #1350** | 👍 8 · 评论 3 · 更新 2026-07-29 | **原生接入 GitHub Copilot SDK**，作为 Claude 之外的第二大“零配置”模型后端（GPT-4.1 等）。 | 社区强烈期望**厂商中立**的模型接入；Copilot SDK 拥有企业级合规与海量开发者基数，纳入后可大幅降低准入门槛。建议纳入 `v0.13.0` 路线图。 |
| **PR #3057** | 👍 0 · 评论 0 · 创建 2026-07-15 | **双引擎配额自动回落**（Claude 配额耗尽 → 无感切换 Codex），含主动预警、切换摘要、按 Agent Group 配置。 | 已在 WhatsApp 生产环境跑 3 周，**工程就绪度极高**；虽无公开讨论，但属核心团队战略级 PR，审核优先级应置顶。 |
| **PR #3143** | 👍 0 · 评论 0 · 创建 2026-07-27 | **保留已决审批卡片内容**（标题/详情/决策人/超时态），而非直接丢弃。 | 改进审计追溯体验，符合企业合规需求；属 UI/UX 细节打磨，建议快速合并。 |

---

## 5. Bug 与稳定性

| 严重度 | 问题来源 | 现象 | 已有 Fix PR | 状态 |
|--------|----------|------|-------------|------|
| **P0 (生产阻断)** | #3060 (已合并) | 容器 PID 1 非 init 进程 → 僵尸进程累积 → 宿主机资源耗尽 | #3060 ✅ | **已修复并合并** |
| **P1 (功能缺失)** | #2901 (关联 #3148) | `WEBHOOK_PORT` 环境变量被忽略，强制绑定 3000 端口 | #3148 (OPEN) | **待审核合并** |
| **P1 (数据不一致)** | #3145 (OPEN) | 既有 messaging-group wiring 缺失 `destination` 字段，导致路由失败 | #3145 (OPEN) | **待审核合并** |
| **P2 (开发体验)** | #3146 (OPEN) | `scripts/test-v2-host.ts` 等开发脚本因架构迁移失效，CI 未覆盖 | #3146 (OPEN) | **待审核合并** |
| **P2 (上下文泄漏)** | #3147 (OPEN) | Agent Runner 目标回复上下文未隔离，可能跨会话污染 | #3147 (OPEN) | **待审核合并** |

> **建议**：今日内优先合并 #3148、#3145、#3147 三个 P1/P2 Fix，彻底清除已知回归。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 关联 PR/进展 | 入版概率 (下一版) | 备注 |
|------|------|--------------|-------------------|------|
| **Issue #1350** | GitHub Copilot SDK 原生后端 | 无 PR，仅讨论 | ⭐⭐⭐⭐☆ (80%) | 高呼声 + 架构已支持多 Provider (MiniMax PR 证明)，只需实现 `CopilotProvider` 适配器。 |
| **PR #3057** | 双引擎配额回落 (Claude→Codex) | 完整分支已生产验证 | ⭐⭐⭐⭐⭐ (95%) | 核心团队主导，生产实证，仅待 Code Review 通过即可合并。 |
| **PR #3144** | `WEBHOOK_HOST` 可配置绑定地址 | OPEN | ⭐⭐⭐⭐☆ (85%) | 单行改动，零破坏性，符合 12-factor，极大概率合并。 |
| **PR #1255** (已合并) | MiniMax OAuth Provider | ✅ Merged | — | 已落地，后续可复用其 OAuth/PKCE 基础设施快速接入 Copilot/OpenRouter 等。 |

> **路线图推测**：`v0.12.x` 将聚焦 **多模型高可用（配额回落+多 Provider）**、**生产级运维强化（升级审计+冒烟测试+配置一致性）**；`v0.13.0` 大概率以 **Copilot SDK 接入** 为标志性特性。

---

## 7. 用户反馈摘要

> 仅 Issue #1350 有评论，提炼如下：

| 用户场景 | 痛点/期望 | 原话意译 |
|----------|-----------|----------|
| **企业内网/合规环境** | 无法使用 Anthropic API（数据出境/采购限制），但已采购 GitHub Copilot Enterprise。 | “We already pay for Copilot seats; adding it as a backend would let us run agents without new vendor approval.” |
| **成本敏感型团队** | Claude 按 Token 计费，Copilot 订阅制边际成本为零。 | “Flat-rate Copilot is way cheaper for high-volume agent loops.” |
| **多云策略** | 避免单点依赖单一模型供应商。 | “Provider diversity is a hard requirement for our SLA.” |
| **开发者体验** | 期望零配置（OAuth 设备码）像 MiniMax PR 那样开箱即用。 | “Make it `nanoclaw login copilot` and done.” |

> **共性结论**：用户不关心模型细节，**关心“能不能用现有企业订阅、不用改代码、不用新申请 Key”**。

---

## 8. 待处理积压

| 对象 | 停滞时长 | 重要性 | 阻塞点 | 维护者行动建议 |
|------|----------|--------|--------|----------------|
| **PR #3057** (Dual-engine quota fallback) | 14 天 | **P0 战略级** | 代码量大 (多文件迁移+配置+测试)，审核负担重 | 指派 2 位 Core Reviewer 分模块并行 Review；设定 **本周五前合并** 截止日。 |
| **Issue #1350** (Copilot SDK) | 129 天 (创建) / 今日更新 | **P1 社区高呼声** | 无人认领实现 | 在 `#contributors` 频道发布 “Good First Issue + 架构指导文档”，招募社区贡献者。 |
| **PR #1255** (MiniMax OAuth) | 133 天 | 已合并 | — | 已解决，可归档。 |
| **PR #2197 / #1136** (Update-nanoclaw 安全) | 88/135 天 | **P0 运维安全** | 已合并 | 已解决，建议在 Release Note 显著标注升级安全改进。 |
| **PR #3146** (Dev scripts rot) | 1 天 | P2 技术债 | 无人跑脚本发现 | 纳入 CI `dev-script-check` job，防止再次腐烂。 |

---

### 📎 关键链接速查
- **Issue #1350**: https://github.com/nanocoai/nanoclaw/issues/1350  
- **PR #3057 (双引擎回落)**: https://github.com/nanocoai/nanoclaw/pull/3057  
- **PR #3060 (容器 --init)**: https://github.com/nanocoai/nanoclaw/pull/3060  
- **PR #3148 (WEBHOOK_PORT)**: https://github.com/nanocoai/nanoclaw/pull/3148  
- **PR #3145 (Destination 回填)**: https://github.com/nanocoai/nanoclaw/pull/3145  
- **PR #3147 (回复上下文隔离)**: https://github.com/nanocoai/nanoclaw/pull/3147  
- **PR #3144 (WEBHOOK_HOST)**: https://github.com/nanocoai/nanoclaw/pull/3144  
- **PR #3143 (审批卡片保留)**: https://github.com/nanocoai/nanoclaw/pull/3143  
- **PR #3146 (开发脚本修复)**: https://github.com/nanocoai/nanoclaw/pull/3146  

---

**报告生成时间**：2026-07-29 08:00 UTC  
**下一版预测**：若 #3057、#3148、#3145、#3147 本周内合并，`v0.12.0-rc.1` 可于 2026-08-05 前后切枝。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-07-29

---

## 1. 今日速览
IronClaw 今日呈现**高强度并行推进**态势：50 条 Issue 更新（34 活跃/新开、16 关闭）、50 条 PR 更新（35 待合并、15 已合并/关闭），**零版本发布**。核心动作集中在三大主线：  
- **Epic 收尾**：BenKurrek 主导的 5 个父 Epic（#6487、#6486、#6485、#6484、#6483）下的 13 个子 Issue 全部关闭，完成关键用户旅程编目、扩展策略治理、租户发布 API、凭证绑定、会话历史规范化、消息操作标准化、Telegram 生命周期门禁等核心产品面。  
- **Reborn 架构落地**：#6816（通道入口统一、命令清单准入）已合并；#6754/#6780（IronHub 安装流移植）、#6831（标准化消息框架）、#6745（技能可用性修复）、#6691（组装器重构 9k+ 行减少）、#6696（生命周期状态折叠至进程日志、含 DB 迁移）等多个 XL 级 PR 同步推进。  
- **基础设施硬化**：#6817 修复文件系统 TOCTOU 4 处逃逸；#6824/#6826 修正模型阶段失败分类导致的静默重试与速率限制误判；#6832 将恢复预算从 stage 级提升至 run 级；#6740/#6746 推进沙箱 TLS 终止与 Docker 传输切片。  
整体健康度：**架构债偿还与产品面收敛同步进行，但 P1 级实例不稳定（#6805）与多项用户感知缺陷（Notion/Slack 安装、自动化不可见）并存，需警惕发布阻断风险。**

---

## 2. 版本发布
**今日无新版本发布**。  
⚠️ **关注进行中发布 PR**：#5598（`ironclaw_common` 0.4.2→0.5.0 破坏性变更、`ironclaw_skills` 0.3.0→0.4.0 破坏性变更）自 7/3 开启至今持续更新，CI 门禁与变更日志尚在完善，建议优先评估对下游 crate 的迁移影响。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR 与 Issue
| 编号 | 标题 | 类型 | 影响面 | 链接 |
|------|------|------|--------|------|
| #6816 | `fix(channels): centralize ingress and scope manifest commands` | PR (XL, **已合并**) | Slack/Telegram/未来通道统一入口、鉴权/审批/命令分类、清单允许列表、迁移脚本 | [#6816](https://github.com/nearai/ironclaw/pull/6816) |
| #6518 | `Enforce release gates and publish critical-journey health` | Issue (**已关闭**) | 发布门禁：旅程失败分级阻断 merge/promote/release、聚合 CI/浏览器/金丝雀结果 | [#6518](https://github.com/nearai/ironclaw/issues/6518) |
| #6517 | `Map critical journeys to evidence tiers and close coverage gaps` | Issue (**已关闭**) | 为每条关键旅程分配最小充分证据层（单元/契约/集成/记录固定/浏览器 E2E/金丝雀） | [#6517](https://github.com/nearai/ironclaw/issues/6517) |
| #6516 | `Define canonical critical user journey catalog and ownership` | Issue (**已关闭**) | 权威旅程目录：首跑/聊天工具/记忆/扩展生命周期/认证恢复/Slack/Telegram/附件等 | [#6516](https://github.com/nearai/ironclaw/issues/6516) |
| #6512 | `Define effective extension policy precedence and locked-user UX` | Issue (**已关闭**) | 系统/租户/工作区/用户四层策略优先级确定性解析与用户可见解释 | [#6512](https://github.com/nearai/ironclaw/issues/6512) |
| #6511 | `Build tenant extension publication and governance API/UI` | Issue (**已关闭**) | 租户管理员完整发布/治理面：发布/安装/配置/启用/更新/回滚/撤销/审计 | [#6511](https://github.com/nearai/ironclaw/issues/6511) |
| #6509 | `Bind per-user credentials to tenant-managed extension configuration` | Issue (**已关闭**) | 管理员共享集成定义 + 用户隔离凭证模型 | [#6509](https://github.com/nearai/ironclaw/issues/6509) |
| #6508 | `Synchronize provider events and canonical conversation history` | Issue (**已关闭**) | 频道源/WebUI 源活动投影至单一权威时间线 | [#6508](https://github.com/nearai/ironclaw/issues/6508) |
| #6507 | `Surface channel provenance and external thread context in WebUI` | Issue (**已关闭**) | WebUI 直观展示频道类型/账户/外部会话/线程上下文 | [#6507](https://github.com/nearai/ironclaw/issues/6507) |
| #6506 | `Define canonical external-conversation binding contract` | Issue (**已关闭**) | 外部频道会话与规范线程的持久类型化关系模型 | [#6506](https://github.com/nearai/ironclaw/issues/6506) |
| #6502 | `Migrate Slack messaging tools to shared operation profiles` | Issue (**已关闭**) | Slack 成为首个完整实现共享消息操作层的提供方 | [#6502](https://github.com/nearai/ironclaw/issues/6502) |
| #6501 | `Add manifest opt-in and conformance for messaging operations` | Issue (**已关闭**) | 清单声明实现的消息画像，宿主校验与模型可见面合并 | [#6501](

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-29

> 数据统计窗口：2026-07-28 00:00 - 23:59 (UTC)  
> 数据来源：netease-youdao/LobsterAI GitHub 仓库

---

## 1. 今日速览

**项目整体处于高强度内部迭代与基础设施稳固期**。过去 24 小时 **无新版本发布**，但合并了 **5 个 PR**，主要集中在 **Windows 安装器安全加固、OpenClaw 运行时安全契约、渲染器 UI 细节调整、Skills 备份恢复逻辑修复** 以及 **新增 `/btw` 隔离侧聊功能**。Issue 端新增 4 条，其中 **#2396 指向 Windows 下 exec 工具默认 Shell 兼容性导致的静默失败**，为高优先级阻断性 Bug；**#2401 涉及 Anthropic Skill 商用授权合规咨询**，反映社区对生态合规的关注。项目活跃度高，核心维护者 `fisherdaddy` 主导了当日大部分关键合并，代码库向“生产就绪”与“跨平台稳健”方向推进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展 | 合并/关闭的关键 PR (5 个)

| PR | 类型 | 核心变更 | 对项目推进的意义 |
| :--- | :--- | :--- | :--- |
| **[#2402](https://github.com/netease-youdao/LobsterAI/pull/2402)** `fix(update)` | **安全/安装器** | **拒绝 Windows 安装程序重定向，不再盲目信任 `response.url`**。修复潜在的中间人劫持或下载劫持风险。 | **关键安全加固**。保障用户下载安装包的供应链安全，符合桌面端应用分发最佳实践。 |
| **[#2400](https://github.com/netease-youdao/LobsterAI/pull/2400)** `fix(openclaw)` | **架构/运行时安全** | **强制运行时/配置安全契约门控**：引入 `runtime-build-info` 校验，防止未托管的 OpenClaw 运行时绕过 LobsterAI 安全策略运行；移除 `prompt-exposure-budget` 终端类型。 | **核心架构治理**。确保“托管运行时”与“安全策略”强绑定，杜绝 Token 滥用与非受控执行，为多租户/企业级部署奠基。 |
| **[#2398](https://github.com/netease-youdao/LobsterAI/pull/2398)** `fix(installer)` | **Windows/安装器** | **依据 PowerShell 助手退出码判定 Skills 备份结果**，修复因 `nsExec::ExecToStack` 保留尾随 CRLF 导致的“空备份被误判为成功”，进而触发虚假的 `degraded install` 降级提示。 | **安装器稳健性提升**。消除 Windows 迁移/升级场景下的误报，提升用户信任度。 |
| **[#2399](https://github.com/netease-youdao/LobsterAI/pull/2399)** `feat(renderer)` | **UI/体验** | **测试模式外隐藏 "Sites" 导航入口**。 | **产品化收敛**。清理内部/调试入口，减少干扰，规范发行版界面。 |
| **[#2397](https://github.com/netease-youdao/LobsterAI/pull/2397)** `feat(cowork)` | **核心功能** | **新增隔离式 `/btw` 侧聊面板**：支持拖拽、八向缩放、独立历史/上下文、通过 OpenClaw Utility Stream 路由。 | **协作范式创新**。引入“旁路对话”机制，不污染主会话上下文，显著提升复杂任务中的分支探索与人工介入效率。 |

> **进度评估**：今日合并 PR 质量极高，覆盖 **安全、架构治理、跨平台稳健性、核心交互创新** 四大维度，项目从“功能堆砌”向“工程成熟度”跨越明显。

---

## 4. 社区热点 | 高互动 Issues/PRs

| 对象 | 标题 | 互动 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **[Issue #2401](https://github.com/netease-youdao/LobsterAI/issues/2401)** | `skill技能` - 询问 PDF/Docs/PPTX 技能是否基于 Anthropic 官方实现及商用授权 | 💬 1 评论 | **合规/法务关切**。开发者/企业用户在集成前需确认技能来源（是否 Anthropic 官方 `computer-use-demo` 衍生）及 License 兼容性（MIT vs 商用限制）。**建议官方在 README/SKILLS.md 明确标注来源与 License**。 |
| **[Issue #1236](https://github.com/netease-youdao/LobsterAI/issues/1236)** | `[bug] 插件 ID 不匹配警告` (Stale, 今日更新) | 💬 1 评论 | **工程卫生/启动噪音**。`mcp-bridge` 配置 entry key 与 manifest ID 不一致，导致每次 Gateway 启动报警。虽不阻断功能，但污染日志，影响运维排查。已挂 `stale` 标签 4 个月，**建议纳入 #2400 类契约校验自动修复或文档化配置规范**。 |
| **[PR #1233](https://github.com/netease-youdao/LobsterAI/pull/1233)** | `feat(model): 为模型提供商添加官网链接和 API Key 获取引导` (Stale, OPEN) | 长期挂起 | **开发者体验 (DX)**。降低新用户接入各大模型商门槛。代码已就绪 (基于 #731 修复)，**为何迟迟未合？** 疑似被大重构分支阻塞或评审优先级低。 |

---

## 5. Bug 与稳定性 | 今日新报告/更新

| 严重度 | Issue | 现象 & 影响 | 状态 | 关联 Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (阻断/数据风险)** | **[#2396](https://github.com/netease-youdao/LobsterAI/issues/2396)** `exec` 工具默认 Shell Wrapper = PowerShell 5.1 | **Windows 11 上 AI 调用 `grep`、`node -e`、含特殊字符内联脚本静默失败**。根因：默认绑定 legacy PS 5.1，不支持类 Unix 命令语法、参数转义机制差异大。导致 Agent 在 Windows 上“看似执行实则无输出/报错”，严重破坏跨平台一致性。 | **OPEN** (0 评论) | **无** (急需指派) |
| **🟡 Major (功能缺陷)** | **[#2071](https://github.com/netease-youdao/LobsterAI/issues/2071)** 创建定时任务错误 (Stale, 今日更新) | UI 创建定时任务报错 (附截图)，版本 2026.5.27。 | **OPEN** | 无 |
| **🟢 Minor (工程噪音)** | **[#1236](https://github.com/netease-youdao/LobsterAI/issues/1236)** 插件 ID 不匹配警告 | 启动日志污染，运维干扰。 | **OPEN (Stale)** | 无 |

> **稳定性洞察**：**#2396 是当前跨平台可用性的最大短板**。Windows 占桌面端绝对份额，`exec` 为 Agent 核心工具，默认 Shell 不兼容 POSIX 命令属于**架构层缺陷**，建议：1) 默认检测 `pwsh` (PS 7+) 或 `git-bash`/`wsl` 作为 wrapper；2) 提供 `shell:` 参数显式指定；3) 在文档/设置中显式警示。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 信号强度 | 入版本概率判断 |
| :--- | :--- | :--- | :--- |
| **[#2397 (Merged)](https://github.com/netease-youdao/LobsterAI/pull/2397)** | `/btw` 隔离侧聊面板 | **极强** (已合并) | ✅ **已在主分支**，下一版本确定包含。 |
| **[#1233 (Open)](https://github.com/netease-youdao/LobsterAI/pull/1233)** | 模型提供商官网链接 & API Key 引导 | **中** (代码就绪，挂起 4 月) | ⚠️ **50%**。若近期无大重构冲突，建议直接合入提升 DX。 |
| **[#2401 (Issue)](https://github.com/netease-youdao/LobsterAI/issues/2401)** | 明确 Skill 来源与商用 License | **弱** (单一咨询) | 📝 **文档任务**。不涉及代码变更，建议本周更新 `SKILLS.md` / `LICENSES.md`。 |
| **隐性需求 (来自 #2396)** | Windows 原生 Shell 兼容层 / 跨平台命令抽象 | **强** (阻断性 Bug 暴露) | 🚧 **架构级任务**。可能催生 `exec` 工具重构或 `shell-abstraction` 模块，纳入下一大版本 (v2026.08+)。 |

---

## 7. 用户反馈摘要 | 真实痛点与场景

1.  **Windows 原生开发体验断层** (#2396)：
    *   **场景**：用户在 Windows 11 上让 Agent 执行 `grep -r "pattern" .` 或 `node -e "console.log(1)"`。
    *   **痛点**：命令“静默失败”，无报错、无输出、无异常抛出。用户误以为 Agent 逻辑有问题，实为 Shell 兼容性。
    *   **呼声**：期望“开箱即用”的跨平台命令执行，或至少明确报错提示“当前 Shell 不支持该语法，请切换至 pwsh/bash”。

2.  **合规焦虑阻碍企业采纳** (#2401)：
    *   **场景**：团队评估 LobsterAI 用于生产环境文档处理 (PDF/PPTX)。
    *   **痛点**：不确定内置 Skill 是否源自 Anthropic `computer-use-demo` (有商用限制条款)，法律合规审查卡住。
    *   **呼声**：官方给出明确的 **Software Bill of Materials (SBOM)** 或至少 `THIRD_PARTY_NOTICES` 文件。

3.  **安装/升级过程的“误报焦虑”** (#2398 修复前)：
    *   用户看到 `degraded install: legacy-restore-backup-missing` 误以为数据丢失/安装损坏，实际只是备份逻辑判定bug。修复后此类噪音消除。

---

## 8. 待处理积压 | 长期未响应的重要项 (维护者关注清单)

| 对象 | 标题 | 滞留时长 | 优先级 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **[PR #1233](https://github.com/netease-youdao/LobsterAI/pull/1233)** | `feat(model): 为模型提供商添加官网链接和 API Key 获取引导` | **~120 天** (2026-04-01 创建) | **High (DX/首屏体验)** | **Code Review 通过即合并**。代码成熟 (修复了 #731 审查意见)，无架构冲突。若被大重构阻塞，请标记 `blocked` 并关联 Issue。 |
| **[Issue #1236](https://github.com/netease-youdao/LobsterAI/issues/1236)** | `[bug] 插件 ID 不匹配警告` | **~120 天** | **Medium (工程质量/日志卫生)** | 1) 修正默认配置模板中 `mcp-bridge` 的 entry key；2) 或在 Gateway 启动时自动修正并提示一次；3) 关闭 Issue。 |
| **[Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071)** | `创建定时任务错误` | **~60 天** | **Medium (核心功能)** | 需复现截图场景，定位是前端校验、后端 API 还是调度器 Bug。指派 Owner 排查。 |
| **[Issue #2396](https://github.com/netease-youdao/LobsterAI/issues/2396)** | `exec 工具 Windows 默认 Shell 导致静默失败` | **0 天 (新)** | **Critical (P0 阻断)** | **立即指派核心维护者**。建议 48h 内出 Hotfix 或 Workaround 文档，避免 Windows 用户大规模流失/负面反馈。 |

---

## 📊 核心指标仪表盘 (24h)

| 指标 | 数值 | 趋势/备注 |
| :--- | :--- | :--- |
| **Issue 净增** | +4 | 全为 Open，0 Closed，积压压力增大 |
| **PR 合并率** | 83% (5/6) | 极高，核心维护者高效推进 |
| **关键 Bug (P0) 新增** | **1** (#2396) | **需立即响应** |
| **Stale 项激活** | 2 (#1236, #2071) | 老问题被重新关注，但无实质进展 |
| **安全/架构类 PR 占比** | 60% (3/5 merged) | 技术债偿还与治理投入显著 |

---

> **分析师建议**：
> 1.  **今日最高优先级**：组织 **#2396 紧急修复**（Hotfix 分支或配置默认值变更），并同步更新 Windows 版发行说明。
> 2.  **本周清理目标**：合并 **#1233** (快速胜利)，修复 **#1236** (配

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-29

> **数据来源**: GitHub API (moltis-org/moltis)  
> **统计窗口**: 2026-07-28 至 2026-07-29 (UTC)  
> **报告生成**: 2026-07-29

---

## 1. 今日速览

- **整体活跃度**: **高**。过去 24 小时内无新版本发布，但代码库呈现高频迭代态势：共 **8 个 PR 活跃**（其中 6 个待合并，2 个已关闭/合并），**1 个 Issue 关闭**。
- **核心动向**: 维护团队正集中精力推进 **Slack 集成增强**（消息确认反应、Block Kit、重连监管）、**ACP 协议标准化接入**（作为 Agent 暴露）、**权限模型重构**（Operators 列表隔离特权）、**可观测性基建**（Langfuse/OTLP/用户反馈）以及 **PWA 推送可靠性** 等核心基础设施建设。
- **交付质量**: 2 个 PR 已关闭（`#1172` 修复 Cron 归档显示 Bug、`#1171` UI 重构移动 ACP 选择器），均附带回归测试或验证步骤，显示良好的工程纪律。
- **风险提示**: 当前 6 个大型特性 PR 并行开发（`#1166`, `#1170`, `#1169`, `#1174`, `#1173`, `#1175`），涉及面广（Slack, ACP, Auth, Telemetry, PWA, CLI），合并顺序与冲突解决需统筹规划，避免主分支不稳定。
- **社区互动**: 当前数据窗口内 Issue/PR 评论数均为 0 或未披露，社区讨论主要集中在代码审查层面，外部用户反馈渠道相对静默。

---

## 2. 版本发布

**无新版本发布**。当前主分支积累了多项重大特性，预计将汇聚至下一个 Minor 或 Patch 版本发布。

---

## 3. 项目进展：已合并/关闭的重要 PR

以下 PR 于过去 24 小时内关闭，标志着对应任务交付完成：

| PR | 标题 | 类型 | 核心变更 | 验证/测试 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#1172** | `fix(web): hide archived cron sessions by default` | **Bug Fix / UX** | 将共享的“归档会话偏好设置”应用到 Cron 标签页，默认隐藏归档的 Cron 运行记录；保留“显示归档会话”开关。 | 新增 Playwright 回归测试：覆盖隐藏、显示、再次隐藏归档 Cron 会话的完整交互流程。 | [#1172](https://github.com/moltis-org/moltis/pull/1172) |
| **#1171** | `Move ACP selection into the chat model picker` | **Refactor / UX** | 将已安装的 ACP 客户端移入编辑器模型选择器（与提供商模型并列）；移除历史遗留的顶部 ACP 选择器及冗余的“Built-in LLM agent”选项。 | 保留会话级绑定、ACP 独占自动绑定、不可用客户端处理及推理控制逻辑。 | [#1171](https://github.com/moltis-org/moltis/pull/1171) |

**进展评估**: 两个关闭 PR 均聚焦 **UI/UX 一致性与 Bug 修复**，`#1172` 直接解决了 Issue `#1111`（Cron 归档无可见效果），`#1171` 简化了模型/Agent 选择入口，降低用户认知负荷。项目在“收尾已知问题、打磨交互细节”上取得实质进展。

---

## 4. 社区热点：待合并大型 PR 群（代替传统热点讨论）

因当前窗口无高评论 Issue/PR，核心热点集中于 **6 个并行开发的大型特性 PR**。这些 PR 体现了项目近期最核心的技术投入方向，值得重点跟踪 Review 进度：

| PR | 标题 | 核心领域 | 关键技术点 | 状态/风险 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#1166** | `feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit` | **Slack Bot** | 基于 `#1165` 确认反应；解决无 Typing Indicator 场景下的“已收到”信号可靠性；引入阶段反馈、Block Kit 渲染、重连监管。 | **Open**, 更新于今天。依赖 `#1165` 已合并，范围大，需重点测试队列/取消/投递失败场景。 | [#1166](https://github.com/moltis-org/moltis/pull/1166) |
| **#1170** | `fix(channels): gate /sh and privileged tools behind a per-account operators list` | **Security / AuthZ** | **权限模型重构**：将“访问控制”与“特权控制”解耦，引入显式账户级 `operators` 列表；跨命令、回调、队列重放、聊天执行、外部调用全链路强制执行。 | **Open**, 更新于今天。**安全敏感变更**，需彻底审计所有入口点，防止提权绕过。 | [#1170](https://github.com/moltis-org/moltis/pull/1170) |
| **#1169** | `feat(acp): expose Moltis as an ACP agent over stdio` | **ACP / Interop** | 通过 `moltis acp` 默认开启命令暴露为 ACP Agent (stdio)；路由至可取消的 `LiveChatService`；强制会话隔离、有界帧/提示/历史/输出/并发、最终文本完整对齐、确定性拆解。 | **Open**, 更新于今天。**标准化互操作关键里程碑**，复杂度高，需验证与现有 Chat Service 共存无副作用。 | [#1169](https://github.com/moltis-org/moltis/pull/1169) |
| **#1174** | `Add instrumentation and feedback collection infrastructure` | **Observability** | 后端中立的 Agent 埋点；Langfuse v4 导出；OTLP 操作后端；用户反应反馈收集。记录不可变的仅完成轮次与观测，支持流式/非流式对齐、提供商故障转移归因、缓存感知 Token 用量、推理过程、工具调用。 | **Open**, 更新于今天。**可观测性基建**，影响面广，需确认无性能回归、PII 泄露风险。 | [#1174](https://github.com/moltis-org/moltis/pull/1174) |
| **#1173** | `feat(pwa): make push notifications reliable and non-disruptive` | **PWA / Mobile** | 同一聊天新消息重新提醒不丢失早期计数；通用隐私安全标题；剥离正文富文本；维护应用级去重键；跨标签/设备可靠送达。 | **Open**, 更新于昨天。PWA 推送是移动端留存关键，需实机多设备验证。 | [#1173](https://github.com/moltis-org/moltis/pull/1173) |
| **#1175** | `feat(ctl): add Terminal-Bench chat runner` | **CLI / Eval** | 新增 `moltis-ctl chat` / `chat-history` (认证网关 RPC)；Harbor/Terminal-Bench 安装式 Agent 包装器，任务级会话隔离；文档与 Shell 契约测试。 | **Open**, 创建于昨天。面向 **Agent 评测/基准测试** 场景，扩发生态能力。 | [#1175](https://github.com/moltis-org/moltis/pull/1175) |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 标题 | 状态 | 修复 PR | 影响分析 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Low (UI/功能缺失)** | **Issue #1111** | `[Bug]: Archiving a cron session has no visible effect` | **CLOSED** (2026-07-28) | **PR #1172** (已合并) | 用户归档 Cron 会话后 UI 未刷新/隐藏，导致困惑。已通过默认隐藏归档会话并提供显示开关修复，附带 E2E 测试。 |
| **Potential (Security)** | **PR #1170** | `fix(channels): gate /sh and privileged tools behind a per-account operators list` | **OPEN** (Review中) | **即是修复** | 非 Bug 修复，而是**主动安全加固**。修复前：通过访问白名单的频道发送者可触及特权命令/宿主工具。修复后：引入 `operators` 显式特权列表，纵深防御。需高优审计。 |
| **Potential (Regression)** | **PR #1166 / #1169 / #1174** | 大型重构/新功能引入 | **OPEN** | N/A | 并行合并风险：Slack 重连逻辑、ACP stdio 协议实现、全链路埋点插桩均可能引入回归。建议合并前跑完整集成测试套件。 |

**总结**: 当前无未修复的高严重级 Bug。唯一已知 Bug (`#1111`) 已修复并验证。主要风险源于大型特性合并带来的潜在回归。

---

## 6. 功能请求与路线图信号

结合待合并 PR 与已关闭 PR，推测 **下一版本 (v0.x / v1.0 预备版) 核心交付主题**：

1.  **ACP 协议原生支持** (`#1169`, `#1171`)：**确定性信号**。Moltis 正式成为标准 ACP Agent，且 UI 入口统一至模型选择器，表明 **ACP 为战略级互操作协议**，将作为核心卖点发布。
2.  **企业级权限与安全** (`#1170`)：**确定性信号**。显式 Operators 列表、关闭“访问即特权”漏洞，指向 **多租户/团队协作/生产环境部署** 场景硬性需求。
3.  **生产级 Slack Bot 体验** (`#1166`)：**高概率**。Block Kit、阶段反馈、重连监管解决了 Slack 无 Typing Indicator 的根本交互痛点，面向团队协作核心场景。
4.  **全链路可观测性与用户反馈闭环** (`#1174`)：**高概率**。Langfuse/OTLP 双后端、缓存感知 Token 统计、用户 Reaction 反馈，构建 **LLMOps 基建**，支撑模型迭代与成本控制。
5.  **移动端/PWA 生产可用性** (`#1173`)：**中高概率**。推送可靠性、隐私合规、跨设备去重，补全移动端体验短板。
6.  **Agent 评测生态接入** (`#1175`)：**探索性信号**。Terminal-Bench runner 显示项目向 **Agent 评测基础设施** 延伸，可能作为 `moltis-ctl` 子命令长期维护。

**路线图判断**: 下一版本将是一个 **“生产就绪”里程碑版本**，核心看点：ACP Agent、企业级权限、Slack 生产级体验、可观测性基建。

---

## 7. 用户反馈摘要

**数据局限**: 当前 24 小时窗口内，Issue `#1111` 无评论，PR 均无评论数据（`undefined`），无法直接提炼用户原声。

**间接推导痛点** (基于已修复 Issue 与 PR 动机)：
- **Cron 任务管理混乱** (`#1111` → `#1172`)：用户期望归档后“眼不见心不烦”，且需随时可恢复查看，符合标准归档交互心智模型。
- **Slack 交互盲区** (`#1166` 动机)：“发完消息石沉大海”、不知道 Bot 是否收到、是否在思考、是否失败，严重破坏信任感。
- **权限失控焦虑** (`#1170` 动机)：管理员担心普通成员误触发 `/sh` 等破坏性命令，或通过 Webhook/外部调用越权。
- **模型/Agent 选择碎片化** (`#1171`)：用户需在同一入口完成“选模型、选 ACP Agent、选内置 Agent”，减少上下文切换。
- **可观测性盲区** (`#1174`)：开发者无法追踪 Agent 实际 Token 消耗、推理链路、工具调用成败、用户满意度（Reaction），无法做数据驱动迭代。

---

## 8. 待处理积压：需维护者关注的长期项

基于历史数据模式（非当前 24h 产生），提醒以下潜在积压风险：

| 类别 | 潜在风险点 | 建议行动 |
| :--- | :--- | :--- |
| **PR 合并队列管理** | 6 个大型 PR (`#1166`, `#1170`, `#1169`, `#1174`, `#1173`, `#1175`) 并行，涉及核心模块重叠度高。 | **建立合并优先级与顺序**：建议 `#1170` (安全) → `#1169` (ACP 核心) → `#1166` (Slack) → `#1174` (Observability) → `#1173` (PWA) → `#1175` (CLI)。强制要求 Rebase 主分支并跑全量 CI 

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-07-29

---

## 1. 今日速览
- **整体活跃度：极低（维护模式）**。过去 24 小时无人工 Issue 活动，无新版本发布，仅有 Dependabot 自动化依赖更新 PR。
- **核心动态**：两条 Docker 基础镜像 Rust 版本升级 PR（#613 已关闭，#649 待合并），均为自动化工程维护，无功能性代码变更。
- **社区互动**：零评论、零 Reaction，Issue 列表静默，显示社区反馈回路当前处于休眠状态。
- **项目健康度**：CI/CD 依赖链维护正常（Dependabot 运作良好），但缺乏主动功能迭代与人工代码审查信号，需警惕“僵尸项目”风险。

---

## 2. 版本发布
**无新版本发布**。

---

## 3. 项目进展
| PR | 状态 | 类型 | 核心变更 | 对项目推进度 |
|----|------|------|----------|--------------|
| [#613](https://github.com/qhkm/zeptoclaw/pull/613) | **CLOSED** | 依赖更新 | `rust:1.95-slim-trixie` → `1.96-slim-trixie` | ✅ 已完成基础镜像小版本跟进，但未合并入主分支（直接关闭） |
| [#649](https://github.com/qhkm/zeptoclaw/pull/649) | **OPEN** | 依赖更新 | `rust:1.95-slim-trixie` → `1.97-slim-trixie` | ⏳ 待审查/合并，跳跃两个小版本，建议确认 CI 通过后合并 |

> **进展评估**：项目实质代码库零推进。两条 PR 均为 Dependabot 自动生成，#613 被直接关闭而非合并，暗示维护者可能未关注自动化 PR 流程，或已手动在别处更新了 Dockerfile。

---

## 4. 社区热点
**无活跃讨论**。  
- 过去 24h 无 Issue 创建/更新，PR 评论数均为 0，Reaction 为 0。  
- 仅有的两条 PR 均为机器人提交，无人工介入讨论。

---

## 5. Bug 与稳定性
**无新增 Bug 报告、崩溃或回归 Issue**。  
- 当前 Issue 列表为空，无法评估现存缺陷状态。  
- 建议：若项目处于生产使用中，需主动巡检错误追踪系统（如 Sentry）而非仅依赖 GitHub Issues。

---

## 6. 功能请求与路线图信号
**无新增功能需求**。  
- 无 Feature Request 类 Issue，无 RFC/Design PR。  
- 仅有的依赖更新 PR（#649）若合并，仅代表工具链跟进至 Rust 1.97，非功能路线图推进。

---

## 7. 用户反馈摘要
**无用户反馈数据**。  
- 过去 24h 无 Issue 评论，无 Discussion，无 Security Advisory 讨论。  
- 无法提炼痛点、场景或满意度信息。

---

## 8. 待处理积压 ⚠️
| 对象 | 链接 | 滞留时长 | 风险提示 | 建议动作 |
|------|------|----------|----------|----------|
| **PR #649** | [chore(deps): bump rust to 1.97-slim-trixie](https://github.com/qhkm/zeptoclaw/pull/649) | 1 天 (创建于 2026-07-28) | 依赖更新滞留可能阻断后续 Dependabot PR；Rust 1.97 可能包含安全修复 | **高优先级**：运行完整 CI 测试，通过后立即合并；若不再维护 Docker 镜像，请关闭并配置 Dependabot `allow: []` 忽略 |
| **Dependabot 配置** | `.github/dependabot.yml` (推测路径) | 长期 | #613 被关闭而非合并，提示自动化流程与人工流程脱节 | 审查 dependabot.yml：确认 `target-branch`、`reviewers`、`schedule` 正确；决定是否保留 Docker 生态更新 |
| **项目治理信号** | 全量仓库 | 数月 | 连续多日零人工提交、零 Issue 响应，可能处于弃维状态 | 维护者需在 README/主页明确标注维护状态（Active / Maintenance / Archived），避免用户误判 |

---

### 📌 给维护者的行动清单
1. **今日必做**：审查并合并 #649（或显式关闭并说明理由）。
2. **本周建做**：检查 CI 状态徽章是否显示“passing”；若失败，修复构建。
3. **本月必做**：在 README 顶部添加 `MAINTAINERS.md` 链接或显式声明项目生命周期阶段。

> **数据来源**：GitHub REST API / GraphQL 聚合（2026-07-28 00:00 – 2026-07-29 00:00 UTC）  
> **报告生成时间**：2026-07-29 06:00 UTC

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 | 2026-07-29

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时累计 49 条 Issue 更新（42 个新开/活跃、7 个关闭）与 50 条 PR 更新（49 个待合并、1 个已合并/关闭），无新版本发布，呈现典型的「重构与稳定性攻坚」冲刺期特征。  
- **核心关注点聚焦三大领域**：(1) **安全与凭证架构重构**（KeySource trait、OAuth 迁移、高熵检测误伤）；(2) **运行时稳定性**（配置并发写入、SOP 引擎容错、技能审查崩溃、CI 易失性测试）；(3) **插件化与架构解耦**（WASM 运行时插件、ACP 传输适配器、Slack/Telegram 渠道生命周期可观测性）。  
- **RFC 密集产出**：单日涌现 4 个高优先级 RFC（#9127、#9487、#9488、#9397），均标记 `risk:high` 且需维护者评审，显示架构决策进入密集决策窗口。  
- **CI/基建债务偿还**：Scoop 发布流水线规范化（#9466）、npm 审计告警（#9383）、插件单测缺失（#9462）、释放态度态测试模块（#9471）等 PR 并行推进。  
- **社区协作模式成熟**：Issue 与 PR 均采用「Drafted with Codex/Claude + 人工 Sponsor」协作模式，决策留痕完整，`needs-maintainer-review` 标签使用规范。

---

## 2. 版本发布

> 今日无新版本发布。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR 与 Issue

| 编号 | 标题 | 类型 | 影响面 | 备注 |
|------|------|------|--------|------|
| #9357 | **CLOSED** `cargo test -p zeroclaw-runtime --lib` 易失性测试导致全局互斥锁中毒 | Bug/CI | 测试稳定性 | 19/20 次失败，已修复并关闭 |
| #9474 | **CLOSED** `auth profile store` 无法加载——`model_provider` 字段重命名缺失迁移 | Bug/Security/CLI | 认证流程阻断 (S1) | 已提供迁移路径并关闭 |
| #9471 | **CLOSED** 退休休眠的 `zeroclaw_root_crate` cron 测试模块 | Task/Tests | 代码清理 | 迁移 2 个仍编译通过的测试，删除其余 |
| #9380 | **CLOSED** WASM `wit/v0` 厂商副本漂移仅在注册期失败，无前置检测 | Bug/Runtime/WASM | 插件兼容性 | 已加入注册前校验 |
| #9178 | **CLOSED** ACP `embeddedContext` + `deliver_file` (URI in tool result) | Feature/Channel/ACP | 文件传递能力 | 已合并入主分支 |

> **整体推进度评估**：核心阻断性 Bug（认证、测试易失性、WASM 注册）已清零；架构级 RFC 进入评审期；大体量重构 PR（#9319 工具注册表封装、#8985 Slack 生命周期、#9205 SOP 入口适配器）均处于 `needs-author-action` 状态，预计下周进入合并窗口。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 核心诉求 | 关联标签 |
|------|----------|--------|----------|----------|
| 1 | **#9127** [RFC] 抽象 `KeySource` trait——按来源/部署形态分类主密钥材料 | 8 | 统一密钥来源抽象，支撑 HSM/KMS/本地文件等多形态部署，解决 93 个 `#[secret]` 字段与 59 个 `#[credential_class]` 的耦合 | `config, security:secrets, priority:p2, risk:high, type:rfc` |
| 2 | **#6157** [Bug] Nextcloud Talk 使用错误的 Bot Message API | 6 | URL 构造错误导致消息发送失败，需修正为正确的 OCS API 端点 | `channel, security, priority:p2, risk:high` |
| 3 | **#8654** `skill-review` 分叉 panic (slice 越界) → Daemon SIGSEGV | 5 | 工具密集型轮次后，后台技能审查协程越界崩溃导致整个 Agent 进程退出 (exit 139) | `agent, runtime, skills, priority:p1, risk:high` |
| 4 | **#8850** 将可选渠道/工具从编译期 feature flag 迁移至 WASM 运行时插件 | 4 | 缩减默认二进制体积，实现免重编译扩展；`zeroclaw-plugins` 仓库配套建设 | `enhancement, runtime:wasm, domain:architecture, risk:high, type:tracker` |
| 5 | **#9487** [RFC] Runtime 拥有会话生命周期，WS/Web/Channel/ACP 降为传输适配器 | 3 | 统一会话模型，解耦传输层，支撑多端一致性 | `agent, gateway, runtime, channel:acp, risk:high, type:rfc` |
| 6 | **#9488** [RFC] Web Chat 与 Channel 统一附件架构 | 3 | 解决附件在不同入口 (Web/Channel/ACP) 的不一致处理 | `channel, gateway, tool, risk:high, type:rfc` |

> **趋势洞察**：安全/架构类 RFC 占据讨论高地，且均由资深贡献者 (REL-mame, NiuBlibing, belumume) 发起，显示核心维护团队正在主导顶层设计重构。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 已有 Fix PR | 关键信息 |
|--------|-------|------|-------------|----------|
| **S1 阻断** | #9474 `auth` 子命令全面失效——`model_provider` 迁移缺失 | ✅ **CLOSED** | 隐含在关闭操作中 | 预重命名存储使用 `"provider"`，新版要求 `"model_provider"`，无迁移代码导致全量失效 |
| **S1 阻断** | #9492 `auth refresh` 死胡同——外部客户端轮转共享 OpenAI-Codex refresh token | 🟢 **OPEN** | 无 | OAuth refresh token 单次使用且轮转，ZeroClaw 存储快照失效，Codex CLI 同步冲突 |
| **P1 高危** | #8654 `skill-review` fork panic → SIGSEGV | 🟢 **OPEN** | 无 | `skills/review.rs:159` slice 越界，`panic=abort` 导致 Pod 崩溃，工具密集轮次后触发 |
| **P1 高危** | #9284 配置刷新竞态覆盖并发写入 | 🟢 **OPEN** | 无 | `RpcDispatcher::flush_config` 三步操作非原子，读锁克隆→await→写入窗口存在竞态 |
| **P1 高危** | #9401 沙箱包装器未保留 `Command::current_dir` | 🟢 **OPEN** | **#9401** (PR) | Seatbelt/Firejail/Bubblewrap 重建 shell 命令时丢失工作目录，已含 macOS 实测回归用例 |
| **S2 降级** | #9357 `cargo test -p zeroclaw-runtime --lib` 易失性测试 (19/20 失败) | ✅ **CLOSED** | 隐含修复 | 全局互斥锁中毒导致后续测试连锁失败 |
| **S2 降级** | #6724 空凭证启用 Signal/Voice Call 导致 Supervisor crashloop | 🟢 **OPEN** | 无 | 仪表盘添加渠道块但未填凭证 (`enabled=false`)，编排器启动→发现无启用项→退出→Supervisor 2 秒重启循环 |
| **S2 降级** | #9380 WASM `wit/v0` 厂商副本漂移仅注册期失败 | ✅ **CLOSED** | 隐含修复 | 无发布制品依赖，enum 新增 case 导致旧副本构建的插件注册失败 |
| **S2 降级** | #8758 上下文耗尽后 Agent 返回 idle 无终态状态 | 🟢 **OPEN** | 无 | 长任务读取源码时上下文压力导致停滞，用户无明确终止理由 |
| **S3 次要** | #9462 `zeroclaw-plugins` 单测被 `plugins-wasmtime` feature 门控，CI 从未运行 | 🟢 **OPEN** | 无 | 组件实例化代码与 lib 单测均被 feature gate 隔离，CI 矩阵缺失该 feature |

> **修复覆盖率**：10 个高优 Bug 中，3 个已关闭 (#9357, #9474, #9380)，1 个有 PR (#9401)，6 个仍无 Fix PR —— **建议优先排期 #8654、#9284、#9492、#6724**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 关联 PR/进展 | 纳入下一版本概率 | 备注 |
|------|------|--------------|------------------|------|
| **KeySource trait 抽象** | #9127 (RFC) | 无 PR，`in-progress` | 🟡 中 | 需维护者评审，涉及 93 处 secret 与 59 处 credential_class，迁移成本高 |
| **Runtime 会话所有权 + 传输适配器** | #9487 (RFC) | 无 PR，`needs-author-action` | 🟡 中 | 架构级变更，配合 #9488 附件统一，可能拆分多个 PR 渐进落地 |
| **WASM 运行时插件化渠道/工具** | #8850 (Tracker) | 无 PR，`in-progress` | 🟢 高 | 已有 `zeroclaw-plugins` 仓库，PR #9319 (工具注册表封装) 为前置重构 |
| **Slack Agent 生命周期可见性** | #8985 (PR, XL) | **#8985** 已开 18 天 | 🟢 高 | 6 种类型化状态，保留 `ProgressEvent` 权威性，配套 #8969 线程上下文注水 |
| **SOP 认证算子取消** | #9476 (PR, L) | **#9476** 新开 | 🟢 高 | 填补运行中 SOP 无取消路径的空白，Web Dashboard 已有列表/查看能力 |
| **ZeroCode 修饰键语义解耦** | #9171 (Feature) | 无 PR，`accepted` | 🟡 中 | 修饰键语义与按键字符解耦，macOS Command/Control 映射逻辑外置 |
| **ACP `resource.blob` + `deliver_file`** | #9178 (Feature) | ✅ **已合并** | ✅ 已入 | 会话提示接受 blob，工具结果返回稳定 URI，支撑引用 |
| **MCP `tools/call` 图像内容块接入视觉管线** | #9521 (Feature, 新) | 无 PR，新开 | 🟡 中 | 将 `type:image` (base64+mimeType) 映射为真实图像 part，避免 JSON 文本倾倒 |

> **路线图信号**：**插件化 (WASM) + 会话统一 + 可观测性** 构成下

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*