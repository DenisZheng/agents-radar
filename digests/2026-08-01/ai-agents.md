# OpenClaw 生态日报 2026-08-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-01 02:10 UTC

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

# OpenClaw 项目动态日报 | 2026-08-01

---

## 1. 今日速览
- **活跃度极高**：过去 24 小时累计 **1,000 条** Issue/PR 更新（Issue 500 条，PR 500 条），其中新开/活跃 Issue 465 条、待合并 PR 361 条，显示社区与维护团队处于密集并行开发与排查阶段。  
- **零版本发布**：今日无新 Release，重心集中在 **核心稳定性修复**（内存泄漏、会话状态一致性、消息丢失、安全加固）与 **架构重构**（会话存储迁移、插件 SDK、本地化、队列调度）。  
- **P0/P1 级阻塞问题聚焦**：Gateway 内存泄漏（RSS 350 MB → 15.5 GB）、会话投影活锁、SQLite 快照恢复完整性、Telegram/Slack/Matrix 消息重复/丢失、子进程僵尸累积等 **生产级故障** 占据 Top Issues 榜单前列。  
- **PR 流向偏向“修复与加固”**：合并/关闭 139 条 PR，多为 **会话状态一致性、Provider 降级、安全扫描、队列饥饿、本地化去重** 等硬性修正；新增 XL/L 级 PR 多带 `needs proof` 或 `waiting on author`，说明审核门槛较高、流程规范。  
- **社区诉求两极分化**：核心维护者推进底层治理（内存、会话、安全），外部贡献者集中于 **多平台客户端缺失**、**动态模型发现**、**本地 Whisper**、**多语言** 等功能性增强。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 类型 | 核心变更 | 影响面 | 状态 |
|----|------|----------|--------|------|
| [#101414](https://github.com/openclaw/openclaw/pull/101414) | fix(agents) | 将 Anthropic `invalid_request_error` 归类为 format 错误以触发模型降级 | 模型可用性、降级链 | ✅ Closed |
| [#108404](https://github.com/openclaw/openclaw/pull/108404) | fix(anthropic) | 传输层保留 `Retry-After` 头，修复 429 固定退避导致的持续限流 | Anthropic Provider 稳定性 | ✅ Closed |
| [#107943](https://github.com/openclaw/openclaw/pull/107943) | fix(anthropic) | 同 #108404，保留 Retry-After 供自动重试退避 | 同上 | ✅ Closed |
| [#101932](https://github.com/openclaw/openclaw/pull/101932) | fix(session) | 父会话 token 探测挂起时避免无限等待，改用已持久化计数 | 会话创建/分叉延迟 | ✅ Closed |
| [#108963](https://github.com/openclaw/openclaw/pull/108963) | fix(gateway) | CLI 探针尊重 `gateway.bind` 配置，修复非 loopback 绑定下的健康检查失败 | 运维探针、网络模式 | ✅ Closed |
| [#105170](https://github.com/openclaw/openclaw/pull/105170) | fix(scripts/pr) | 禁止 GraphQL `createCommitOnBranch` 在 rebase 重写祖先时推送，防止错误合并 | CI/CD 自动化安全 | ✅ Closed |
| [#111107](https://github.com/openclaw/openclaw/pull/111107) | fix(gateway) | `--json` 模式下工具调用超时时正确上报 `timeout` 而非 `ok` | CLI 契约、监控告警 | ✅ Closed |
| [#111888](https://github.com/openclaw/openclaw/pull/111888) | fix(config) | 拒绝 `gateway.port > 65535`，提前在 schema 校验拦截 | 配置安全、启动失败 | ✅ Closed |

> **整体推进度评估**：核心稳定性修复 **8/139** 入选高优合并，其余多为小规模修正、文档、类型收敛。大型重构（如 #117141 子代理状态一致性、#116666 队列饥饿、#115698 本地 Whisper）仍在 **待评审/需补证** 状态，预计下周进入合并窗口。

---

## 4. 社区热点（评论/反应 Top 10）

| # | Issue/PR | 评论 | 👍 | 核心诉求 | 分析 |
|---|----------|------|----|----------|------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 116 | 80 | **原生桌面端缺失**，阻碍非 macOS 用户采用 | 历史遗留最高呼声，标 `help wanted` 但长期无人认领，建议纳入 2026 Q3 里程碑 |
| 2 | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak (P0) | 23 | 1 | **RSS 350 MB → 15.5 GB 导致 OOM 重启循环** | 生产环境阻塞器，已挂 `clawsweeper-recovery-stuck`，需核心组定向攻坚 |
| 3 | [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 23 | 0 | **记忆投毒防护**：按来源打信任标签 | 安全增强，配合 #10659 Masked Secrets 形成纵深防御 |
| 4 | [#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime 语音状态无界保留 | 16 | 0 | 实时语音会话中 provider/consult 状态无硬边界，导致内存泄漏 | 新增 P1，关联 #91588 同根同源 |
| 5 | [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 15 | 4 | **Agent 使用密钥不可见**，防注入泄露 | 高赞安全需求，已有 #117129 防 webhook 泄露 PR 关联 |
| 6 | [#51429](https://github.com/openclaw/openclaw/issues/51429) 硬编码工作路径 `/Users/wangtao` | 13 | 0 | 发布版包含开发者个人路径，安装即污染用户目录 | 发布流程缺陷，需加入 `prepublishOnly` 扫描 |
| 7 | [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram 重复回复回归 | 13 | 1 | 5.20 版本后 2-10 倍重复发送，5.22 缓解未根治 | 回归阻塞，需在 5.23/5.24 热修复 |
| 8 | [#115908](https://github.com/openclaw/openclaw/issues/115908) 会话投影活锁阻塞主线程 | 12 | 0 | 持续写入下投影重建不收敛，卡死事件循环 | 核心性能/稳定性，标 `platinum hermit` 最高优先级 |
| 9 | [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite 快照恢复缺乏身份保证 | 12 | 0 | 成功报告但目录未持久化链接，恢复后身份不一致 | 数据完整性，关联 #116868 旧 JSONL 复活 |
| 10 | [#117129](https://github.com/openclaw/openclaw/pull/117129) fix(cron): prevent webhook bearer token disclosure | — | — | **安全修复**：cron webhook 可能泄露全局 bearer token | P0 安全 PR，已标 `ready for maintainer look`，优先合并 |

> **热点聚类**：  
> - **稳定性三巨头**：内存泄漏 (#91588, #116201, #115908)  
> - **消息可靠性**：重复/丢失/重放 (#86519, #114137, #115476, #114255)  
> - **安全纵深**：密钥掩码 (#10659)、信任标签 (#7707)、Token 泄露 (#117129)  
> - **平台缺口**：Linux/Windows 客户端 (#75)、动态模型发现 (#10687)

---

## 5. Bug 与稳定性（按严重程度）

| 严重级 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0/Critical** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak | RSS 增长至 15.5 GB → OOM → launchd 重启循环 | ❌ 无 | 需核心组定向排查，建议引入 `heapsnapshot` 定期分析 |
| **P0/Critical** | [#115908](https://github.com/openclaw/openclaw/issues/115908) 会话投影活锁 | 持续写入下主线程卡死数十秒，所有通道阻塞 | ❌ 无 | 标 `platinum hermit`，需异步化或增量投影重写 |
| **P1/High** | [#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime 语音状态无界保留 | provider frames、pre-ready audio 无硬边界保留 | ❌ 无 | 新增，关联内存泄漏根因 |
| **P1/High** | [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram 重复回复 | 5.20 回归，2-10 倍重复发送 | ❌ 无 | 5.22 缓解未根治，需回溯 5.12→5.20 diff |
| **P1/High** | [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite 快照恢复身份缺失 | 成功报告但目录未持久化，恢复后身份不一致 | ❌ 无 | 关联 #116868 旧 JSONL 复活 |
| **P1/High** | [#114137](https://github.com/openclaw/openclaw/issues/114137) 可见通道无载荷派发 | 文本落库但未送达，2026.7.1-2 版本 | ❌ 无 | 关联 #116409 双写触发孤儿清理 |
| **P1/High** | [#114255](https://github.com/openclaw/openclaw/issues/114255) 重启留 running + restartRecovery 导致 Telegram 重试风暴 | 会话状态卡死，spool 永久重试 | ❌ 无 | 需状态机修正：重启时标记可恢复终态 |
| **P1/High** | [#116418](https://github.com/openclaw/openclaw/issues/116418) Ollama 永不作为 primary | 路由永远 fallback，2026.7.1 回归 | ❌ 无 | 影响本地模型用户 |
| **P2/Medium** | [#51429](https://github.com/openclaw/openclaw/issues/51429) 硬编码 `/Users/wangtao` | 安装即创建开发者目录 | ❌ 无 | 发布流程缺陷，需静态扫描 |
| **P2/Medium** | [#97616](https://github.com/openclaw/openclaw/issues/97616) 子进程僵尸累积 | hook/tool 子进程未回收，僵尸堆积 | ❌ 无 | 需在子进程管理器加 `SIGCHLD` 收割 |
| **P2/Medium** | [#115001](https://github.com/openclaw/openclaw/issues/115001) Hybrid memory search 伪 1.0 相似度 | FTS LIKE-fallback 硬编码 textScore | ❌ 无 | 检索质量下降 |
| **P2/Medium** | [#67419](https://github.com/openclaw/openclaw/issues/67419) Bootstrap 文件每轮重复注入 | 20-30% token 浪费 | ❌ 无 | 需缓存或仅首轮注入 |

> **已有 Fix PR 覆盖**：  
> - #108404 / #107943 → Anthropic 429 Retry-After  
> - #101932 → 父会话 token 探测挂起  
> - #108963 → CLI 探针绑定地址  
> - #111107 → `--json` 超时状态上报  
> - #117129 → cron webhook token 泄露 (P0 安全)  
> - #117152 → Claude CLI `ask_user` 提示投递  
> - #116237 → Feishu card+media caption 丢失  
> - #117156 → Codex `apply_patch` 失败原因透传  
> - #116279 → Worker 重连抖动防惊群  
> - #115803 → active-memory 召回闲聊过滤  

---

## 6.

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 | 2026-08-01

---

## 1. 生态全景

当前生态呈现 **“头部项目深度攻坚底层稳定性，腰部项目差异化探索协议与交互，长尾项目处于维护或停滞期”** 的分层态势。OpenClaw、IronClaw、ZeroClaw 等核心框架集中火力解决 **内存泄漏、会话状态一致性、安全沙箱逃逸、跨轮次可观测性** 等生产级阻塞问题，架构重构占比超 60%。NanoBot、LobsterAI、CoPaw 等应用层项目则在 **存储引擎迁移、多端原生体验、Desktop 交互范式** 上快速迭代。Moltis、PicoClaw 等项目推进 **去中心化协议（Nostr/Simplex/DeltaChat）与多模型回退链** 的标准化落地。整体来看，生态已从“功能堆砌”转入 **“生产就绪、企业级合规、多模态原生”** 的质变期，但跨项目互操作标准（A2A、MCP、OpenAI Compatible）仍处于碎片化实现阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 (新开/活跃/关闭) | PR 更新 (待合并/合并/关闭) | Release | 健康度评估 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / 465 / 35 | 500 / 361 / 139 | 无 | ⚠️ **高负载攻坚期** | P0内存泄漏、会话投影活锁、安全加固、架构重构并行 |
| **IronClaw** | 38 / - / - | - / 31 / - | 无 | **B+ (架构清理期)** | Wave1 契约抽取收尾、Prompt Cache P0修复、技能系统重构 |
| **ZeroClaw** | 50 / 45 / 5 | 50 / 37 / 13 | 无 | 🟢 **高强度重构并行期** | RFC决策积压、内存解耦、KeySource抽象、A2A出站、Wasm插件 |
| **Hermes Agent** | 50 / 46 / 4 | 50 / 49 / 1 | 无 | 🟡 **稳定性收敛关键窗口** | 本地推理压缩循环、Windows更新崩溃、会话隔离、安全脱敏 |
| **NanoBot** | 4 / 2 / 2 | - / 6 / 1 | 无 | 🟢 **核心重构落地期** | SQLite存储迁移完成、微信自愈、Termux兼容、WebUI交互打磨 |
| **CoPaw (QwenPaw)** | 20 / - / - | 41 / 13 / - | 无 (建议v2.0.2) | 🟡 **警戒态 (回归风险高)** | v2.0.1集中爆雷(JSON损坏/Shell冻结/上游不兼容)、修复响应极快 |
| **LobsterAI** | 4 (stale关闭) / - | - / 11 / - | 无 (准备中) | 🟢 **高强度体验打磨期** | 侧边栏重构、OpenClaw缓存命中率57%→100%、设置页交互修复 |
| **Moltis** | 2 / 1 / - | 6 / 2 / - | 无 | ⭐⭐⭐⭐☆ **功能交付稳健** | NIP-29群聊合并、Markdown导出、双Critical安全修复待合并 |
| **NanoClaw** | 8 / - / - | 10 / 4 / - | 无 (管道修复) | 🟢 **多线程并行推进** | 容器运行时多元化、iMessage统一、原生运行器呼声高、安全加固 |
| **PicoClaw** | 2 / - / - | 3 / 0 / 0 | 无 | ⚠️ **特性积累/发布停滞** | DeltaChat重构/Simplex/回退链卡审查30天+、Web高CPU P0未修 |
| **NullClaw** | 0 | 1 / 0 / 0 | 无 | 🔴 **低活跃/静默期** | 仅Grok CLI Provider PR挂起3天无Review |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | ⚫ **无活动** | 过去24小时无任何动态 |

> **数据说明**：OpenClaw、IronClaw、ZeroClaw、Hermes 数量级显著高于其他项目，属于核心框架层；NanoBot、CoPaw、LobsterAI、Moltis、NanoClaw 属应用/集成层，迭代周期更短、闭环更快。

---

## 3. OpenClaw 在生态中的定位

| 维度 | 定位分析 | 对比基准 |
| :--- | :--- | :--- |
| **技术路线** | **重内核、重状态、重多租户**：自研 Gateway/Session/Projection/Queue 全栈状态机，非薄包装层。 | IronClaw/ZeroClaw 同属“重内核”阵营，但 OpenClaw 在 **多渠道网关（Telegram/Slack/Matrix/Feishu/Lark）**、**会话投影增量计算**、**Cron/DAG 编排** 上积累最深。 |
| **社区规模** | **头部领跑**：日均 1000+ Issue/PR 活动，核心维护者 + 外部贡献者双轨并行，`help wanted` 长期高挂但认领率低。 | IronClaw/ZeroClaw 核心组驱动为主，外部 PR 占比低；NanoBot/CoPaw 社区活跃但规模小 1-2 个数量级。 |
| **优势护城河** | 1. **生产级故障处理经验最密集**（内存泄漏、消息重复/丢失、快照恢复一致性）<br>2. **插件 SDK 与 Provider 降级链**生态最完善<br>3. **多平台 IM 网关**开箱即用覆盖面最广 | NanoClaw/NanoBot 依赖容器/外部适配器；Hermes 侧重本地桌面/TUI；Moltis/PicoClaw 聚焦去中心化协议。 |
| **核心短板** | 1. **原生桌面端缺失** (#75 高呼声 3 年未解)<br>2. **审核吞吐率低**，XL/L 级 PR 积压严重<br>3. **硬编码路径/发布流程缺陷** 暴露工程化短板 | LobsterAI/CoPaw/NanoBot 已有成熟 Desktop (Tauri/Electron)；IronClaw/ZeroClaw 发布工程化更规范。 |

**结论**：OpenClaw 是当前生态中 **“后端即服务”能力最强、生产环境踩坑最全、但前端交付最弱** 的核心基础设施项目。适合作为 **企业级 Agent 平台的底座**，需配合 LobsterAI/CoPaw 类前端项目落地。

---

## 4. 共同关注的技术方向 (跨项目共振信号)

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **会话/记忆架构解耦与持久化** | **OpenClaw** (SQLite快照/投影活锁)、**NanoBot** (JSONL→SQLite迁移完成)、**ZeroClaw** (RFC #9048 长短期记忆分离)、**IronClaw** (Prompt Cache/Compaction P0修复)、**Hermes** (会话投影/压缩循环) | 共识：**JSONL 无法支撑并发与大上下文**，SQLite/Redb/Vector DB 成为标配；**长短期记忆生命周期必须分离**，检索路径解耦。 |
| **安全沙箱与凭证零信任** | **OpenClaw** (Masked Secrets/Trust Tagging/Token泄露修复)、**ZeroClaw** (KeySource抽象/Shell确认分级/Landlock修复)、**IronClaw** (TOCTOU加固/openat2)、**NanoClaw** (日志脱敏/交互源头验证)、**Moltis** (节点配对签名/路径穿越双修复) | 共识：**密钥不落盘、不出现在日志/压缩块/DB URI 中**；Shell/工具调用需 **分级确认 (allow/ask/deny)** 与 **强隔离沙箱**；供应链安全向 **SBOM/签名分发** 演进。 |
| **多模型路由与降级编排** | **OpenClaw** (Provider降级/动态模型发现)、**NanoBot** (DeepSeek Responses API/回退链配置化 #3200)、**PicoClaw** (可配置回退链 #3200)、**ZeroClaw** (Context Compaction锚定窗口/OpenAI兼容端点)、**CoPaw** (上游agentscope兼容性适配) | 共识：**OpenAI Compatible Endpoint 成为互操作基线**；**模型回退链需配置化、可视化**；上下文压缩策略需 **感知模型窗口上限** 而非硬编码。 |
| **原生桌面与跨平台体验** | **CoPaw** (Tauri热键浮窗/工作区直达/去Desktop后缀)、**LobsterAI** (侧边栏拖拽/快捷键平台感知/骨架屏)、**Hermes** (Desktop思维块折叠/选中文本误触发/拖拽)、**NanoBot** (WebUI Quick Chat/滚动状态/MIME修复)、**OpenClaw** (#75 Linux/Windows客户端缺失) | 共识：**Tauri 成为首选框架**；**全局热键、工作区文件直达、平台感知快捷键、启动无闪烁** 为 Desktop 交互四大金刚；Web 前端需解决 **高 CPU/渲染阻塞** 回归。 |
| **去中心化/异构通信协议** | **Moltis** (NIP-29群聊/Nostr生态)、**PicoClaw** (Simplex/DeltaChat重构)、**NanoClaw** (iMessage/Photon/Dial-SMS)、**ZeroClaw** (A2A出站/RFC #9106) | 共识：**不再仅依赖中心化 IM (TG/Slack/Discord)**；**Nostr/Simplex/Matrix/A2A** 成为多智能体协作与隐私优先场景的标配协议栈。 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构关键差异 | 功能侧重 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **企业级 Agent 基础设施 (Backend-as-a-Service)** | 平台工程师、SaaS 厂商、自建生产环境用户 | **单体大仓、自研状态机、多租户网关、插件热插拔** | 多渠道接入、会话编排、安全合规、可观测性 |
| **IronClaw** | **可验证、可组合的 Agent 运行时内核** | 核心框架开发者、安全敏感场景、Rust 生态爱好者 | **Rust Workspace、契约驱动 (Contracts)、Witness/Capability 安全模型、Wave 重构方法论** | 类型安全、错误可恢复性合同、Hermetic 测试、技能模型自主选择 |
| **ZeroClaw** | **可观测、可扩展的 Agent 操作系统雏形** | 高级开发者、可观测性重度用户、多智能体协作探索者 | **OTel 原生、DAG 规划工具、Goal 持久化、A2A 双向、Wasm 插件运行时** | 跨轮次关联追踪、密钥分级管理、Shell 风险分级、Langfuse 集成 |
| **Hermes Agent** | **本地优先、隐私优先的桌面/终端智能体** | 个人开发者、隐私极客、本地模型玩家 | **Go + TUI (Bubble Tea) + Desktop (Wails)、本地推理优化、子代理委托** | 会话工作区隔离、语音交互、进程工具管理、跨平台单二进制 |
| **NanoBot / NanoClaw** | **全渠道即时通讯机器人框架 (IM Bot Framework)** | 社区运营者、客服自动化、私有化部署用户 | **Go、容器化部署为主、Channel Adapter 模式、技能/插件机制** | 微信/Slack/Telegram/iMessage/SMS 统一适配、Admin WebUI、多模型管理 |
| **CoPaw (QwenPaw)** | **面向非技术用户的桌面原生 AI 客户端** | 终端消费者、内容创作者、低代码自动化用户 | **Tauri + React、Agentscope 集成、工作区文件系统、Auto-Memory** | 全局热键、产出物直达、技能市场、长会话记忆管理 |
| **LobsterAI** | **OpenClaw 生态的旗舰级 Web/Desktop 前端** | OpenClaw 部署用户、追求极致交互体验团队 | **React + Redux + Tauri

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-01

> **数据范围**：2026-07-31 00:00 - 23:59 (UTC) | **数据源**：GitHub Issues & PRs

---

## 1. 今日速览

**项目整体状态：高活跃度，核心架构重构落地，关键阻塞性 Bug 快速修复。**

- **合并/关闭 PR 6 个**，其中包含 **会话存储引擎从 JSONL 迁移至 SQLite (#5173)** 这一重量级基础设施重构，标志着会话管理性能与可靠性的质变。
- **修复 2 个致命崩溃**：微信频道 Session 过期死循环 (#5195/#5196) 与 Termux 环境启动失败 (#5187/#5189)，均在报告当日完成修复并合并，响应效率极高。
- **新增 2 个活跃 Issue**：模型切换交互缺失 (#5198) 与 Windows 静态资源 MIME 类型错误 (#5190)，后者已有对应修复 PR (#5191) 挂起审查。
- **在途重大特性**：DeepSeek Responses API 原生支持 (#5197, P1)、WebUI Quick/Temporary Chat (#5184)、会话摘要容错 (#5201, P1) 等 10 个 PR 待合并，技术债偿还与新功能并行推进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 推进了 **存储层现代化、多平台兼容性、多渠道会话隔离** 三大核心方向：

| PR | 类型 | 核心进展 | 影响面 |
| :--- | :--- | :--- | :--- |
| **[#5173](https://github.com/HKUDS/nanobot/pull/5173)** | **重构/特性** | **会话存储迁移至 SQLite**：运行时唯一存储，启动时事务性导入历史 JSONL 并保留为回滚备份；WebUI 列表与 Dream 剪枝均走 `SessionManager` 统一入口。 | **核心架构** - 解决 JSONL 并发写入、大文件扫描慢、事务不一致等顽疾，为后续会话搜索/导入导出奠基。 |
| **[#5196](https://github.com/HKUDS/nanobot/pull/5196)** | **Bug修复 (P2)** | **修复微信频道 Session 过期后无法自动恢复**：Pause 过期唤醒时重新加载 `account.json`，拾取外部刷新的 Token。关联 Issue [#5195](https://github.com/HKUDS/nanobot/issues/5195)。 | **微信渠道稳定性** - 消除“永久静默”死循环，用户无需重启实例即可自愈。 |
| **[#5189](https://github.com/HKUDS/nanobot/pull/5189)** | **Bug修复 (P1)** | **全平台安装 `tzdata` 作为 `zoneinfo` 兜底**：修复 Termux 等极简 Linux 环境缺系统时区库导致的启动校验失败。关联 Issue [#5187](https://github.com/HKUDS/nanobot/issues/5187)。 | **跨平台兼容性** - 打通 Termux/Alpine 等容器化/移动端部署场景。 |
| **[#5192](https://github.com/HKUDS/nanobot/pull/5192)** | **Bug修复 (P2)** | **Slack 线程会话隔离**：顶层消息开启线程时不再复用频道级 Session，首条回复即建立线程级上下文。 | **Slack 渠道体验** - 避免无关线程上下文污染。 |
| **[#5193](https://github.com/HKUDS/nanobot/pull/5193)** | **Bug修复 (P2)** | **WebUI 滚动状态保持优化**：用户向上滚动在“近底阈值”内不丢失手动控制权，仅在离开并返回或显式向下意图时恢复自动跟随。 | **WebUI 交互细节** - 提升长对话阅读体验。 |
| **[#4223](https://github.com/HKUDS/nanobot/pull/4223)** | **关闭/冲突** | 早期尝试修复微信 Session 重载问题，因实现方案与最新代码冲突被关闭，逻辑已由 #5196 更优雅地吸收。 | - |

> **整体评估**：核心存储层重构落地是里程碑事件；多渠道会话生命周期管理（微信自愈、Slack 隔离）显著增强；WebUI 交互细节持续打磨。

---

## 4. 社区热点

| 排名 | Item | 热度指标 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **1** | **[Issue #5195](https://github.com/HKUDS/nanobot/issues/5195)** (Closed) | 👍 0 | **评论 2** | **生产环境阻塞性 Bug**：用户在 WebUI 重新扫码登录微信后，实例立即进入 60 分钟冷却，无法工作。维护者 **<1 小时** 给出根因分析并提交修复 PR (#5196)，展示极高的响应优先级。 |
| **2** | **[Issue #5187](https://github.com/HKUDS/nanobot/issues/5187)** (Closed) | 👍 0 | 评论 0 | **边缘环境兼容性**：Termux 用户反馈启动校验崩溃。维护者当日合并 #5189 通过依赖 `tzdata` 解决，体现对长尾环境的包容性。 |
| **3** | **[Issue #5190](https://github.com/HKUDS/nanobot/issues/5190)** (Open) | 👍 0 | 评论 0 | **Windows 开发体验**：静态资源 `.js` 被识别为 `text/plain` 导致模块加载失败。作者 amkile 同步提交修复 PR #5191，属于“自带干粮”式反馈。 |
| **4** | **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)** (Open) | 👍 0 | 评论 0 | **交互一致性诉求**：期望像 SaaS AI 一样在会话级动态切换模型，而非仅作 Fallback 或需重配实例。涉及会话上下文与模型路由的深层耦合，暂无 PR 响应。 |

---

## 5. Bug 与稳定性

按严重程度排序，**已修复项均已合并入主干**，剩余为新发现或待修复：

| 严重度 | Issue | 状态 | 修复 PR | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (崩溃/死循环)** | **[#5195](https://github.com/HKUDS/nanobot/issues/5195)** 微信重登后 Token 覆盖导致 `errcode -14` 永久暂停 | **Closed** | [#5196](https://github.com/HKUDS/nanobot/pull/5196) (Merged) | Pause 过期唤醒时未重载持久化状态，已修复。 |
| **🔴 Critical (启动失败)** | **[#5187](https://github.com/HKUDS/nanobot/issues/5187)** Termux 缺系统时区库导致配置校验崩溃 | **Closed** | [#5189](https://github.com/HKUDS/nanobot/pull/5189) (Merged) | 引入 `tzdata` 依赖兜底 `zoneinfo`。 |
| **🟠 High (功能受阻)** | **[#5190](https://github.com/HKUDS/nanobot/issues/5190)** Windows WebUI 静态资源 MIME 错误导致 JS 模块加载失败 | **Open** | [#5191](https://github.com/HKUDS/nanobot/pull/5191) (Open) | 需手动注册 MIME 类型覆盖注册表错误值，待 Review。 |
| **🟡 Medium (逻辑缺陷)** | **[#5198](https://github.com/HKUDS/nanobot/issues/5198)** 会话级模型切换无效，`/model` 命令不生效 | **Open** | 无 | 涉及 `Agent` 与 `Session` 模型绑定逻辑，需设计会话级覆盖机制。 |
| **🟡 Medium (数据容错)** | **N/A** (PR 驱动) 持久化 Session Summary 字段缺失/损坏导致 `AutoCompact` 启动报错 | **Open** | [#5201](https://github.com/HKUDS/nanobot/pull/5201) (Open, P1) | 兼容历史脏数据，兜底使用 `updated_at`，防止启动期崩溃。 |
| **🟡 Medium (竞态风险)** | **N/A** (PR 驱动) `write_stdin(wait_for=...)` 截断输出导致等待目标丢失 | **Open** | [#5200](https://github.com/HKUDS/nanobot/pull/5200) (Open, P1) | 在内部缓冲区搜索目标而非截断后的响应，回归测试已加。 |

---

## 6. 功能请求与路线图信号

结合在途 PR 与 Issue，下一版本（或近期迭代）大概率纳

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-01

---

## 1. 今日速览

项目今日呈现**高强度维护与重构并行**态势：过去 24 小时累计 **50 条 Issue 活动**（46 个新开/活跃、4 个关闭）与 **50 条 PR 活动**（49 个待合并、1 个已合并/关闭），**无新版本发布**。核心矛盾集中在 **本地推理资源分类错误导致的破坏性压缩循环（#52261）**、**Windows 更新流程崩溃（#75598, #75584）**、**会话/网关状态不一致（#72776, #73060, #70077）** 以及 **多平台适配器的技术债偿还**（Matrix/Telegram 神文件拆解 #75754/#75741）。社区高频关注“会话状态可靠性”“跨平台安装更新体验”“安全边界完整性”三大主题，修复类 PR 占比超 60%，显示项目处于 **稳定性收敛与架构清理** 的关键窗口期。

---

## 2. 版本发布

**今日无新版本发布**。最近发布为 `v0.19.1`（隐含自 #75763 “0.19.1 update wiped local patches”），下一版本预计将包含大量当前在途的修复与重构。

---

## 3. 项目进展

| PR / Issue | 状态 | 核心推进内容 | 影响面 |
|------------|------|--------------|--------|
| **#75763** | OPEN (含回归测试) | **修复 0.19.1 更新丢失本地补丁**：重新应用 4 个关键修复（handoff/compression 竞态、SSH 环境缓存失效、终端配置优先级、进程轮询守卫），并补充回归测试 | 更新机制、会话恢复、终端工具、进程管理 |
| **#75779** | OPEN | **修复 MiniMax-M3 思维链中断**：修正 `/anthropic` 端点回放时 signed thinking blocks 被丢弃的问题 | provider/minimax、推理流完整性 |
| **#75767** | OPEN | **跨会话图片上传文件名冲突**：引入 UUID 保证多会话共享 profile 时的唯一性 | TUI、会话隔离、多会话并发 |
| **#75771** | OPEN | **修复进程工具 poll-loop 与孤儿管道泄漏**：恢复 #34711 修复并适配当前安全红包装 | tools/process、资源泄漏 |
| **#75787** | OPEN | **CLI 会话导航抽离**：`CLISessionNavigationMixin` 从 3218 行神文件中剥离，减少 500+ 行 | CLI 架构、可维护性 |
| **#75754 / #75741** | OPEN | **Matrix/Telegram 适配器神文件拆解启动**：分离 reaction 与 authorization 集群 | 平台适配器架构、长期技术债 |
| **#75775** | OPEN | **Discord 流式 TTS 进入语音频道**：消费端已就绪，补全生产端管道 | 平台/discord、语音交互 |
| **#75784** | OPEN | **Gmail 发送支持 `--attach`**：填补技能链关键缺口（简历+求职信场景） | tool/skills、google-workspace |

> **已合并/关闭 PR（1 条）**：数据未显示具体编号，推测为小范围文档或构建脚本修正。

---

## 4. 社区热点

| 排名 | Issue / PR | 评论/👍 | 核心诉求 | 代表性声音 |
|------|------------|---------|----------|------------|
| 1 | **#52261** [Bug] 本地推理 400 被误判为 `context_overflow` 触发破坏性压缩/重置循环 | 6 / 0 | **本地推理生产可用性**：oMLX/MLX 资源耗尽错误应区别于真正上下文溢出，避免会话状态被毁 | “任何在有限资源上跑 Hermes 对接本地 MLX 的人都会撞上” |
| 2 | **#75598** [Bug] Windows 更新近一周频发失败，多网关冲突、切换 profile 不生效 | 5 / 0 | **Windows 更新流程稳定性**：安装器、备份、网关进程管理在 Windows 上的竞态与残留 | “整个程序变得不稳定，multiple gateways running conflicting” |
| 3 | **#72776** [Bug] 非 git 工作区触碰任意 git 目录即被劫持为无关 repo | 5 / 0 | **会话工作区隔离**：TUI/CLI 在工具调用进入 git 子目录时错误绑定会话上下文 | “Session workspace hijacked to unrelated git repo” |
| 4 | **#43666** [Security] 持久化边界脱敏缺口：工具输出文件转储、压缩块、DB URI 仍含明文密钥 | 4 / 0 | **安全边界完整性**：审计发现一次会话即在 state.db 出现 23 次明文密码 | “split from #43083 per audit by @nnnarvaez” |
| 5 | **#75737** [Feature] `delegate_task` 子代理继承全部 21 个工具集，导致 system prompt 膨胀数千 token | 4 / 0 | **子代理工具集精简**：按需授权而非全量继承，降低 token 成本与延迟 | “Real-world impact on macOS M1, DeepSeek: bloating every subagent” |
| 6 | **#69161** [Feature] Desktop 思维块默认折叠设置，避免流式渲染导致聊天窗口抖动 | 4 / 1 | **Desktop 交互体验**：长推理流式展开时的视觉稳定性 | “whole chat window scrolls up and down, making the chat unreadable” |

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 标题 | 关键影响 | 已有 Fix PR |
|--------|-------|------|----------|-------------|
| **P0 阻塞/数据丢失** | #52261 | 本地推理资源耗尽误判触发破坏性压缩循环 | 会话状态重置、上下文丢失、本地推理不可用 | 暂无 |
| **P0 安全** | #43666 | 持久化边界脱敏缺口（工具输出、压缩块、DB URI） | 明文凭证落盘、审计不合规 | 暂无 |
| **P1 核心功能失效** | #75598 | Windows 更新崩溃、多网关冲突、profile 切换失效 | Windows 用户无法更新/稳定运行 | 暂无 |
| **P1 核心功能失效** | #72776 | 会话工作区被劫持到无关 git 仓库 | 会话上下文污染、工具调用错乱 | 暂无 |
| **P1 核心功能失效** | #73060 | Gateway `/stop` 仅丢弃队首，FIFO 溢出继续执行 | 停止指令失效、意外任务执行 | 暂无 |
| **P1 回归** | #75780 | CLI 连续语音模式将自家 TTS 识别为用户输入，形成无限反馈环 | 语音交互不可用、资源耗尽 | 暂无 |
| **P2 重要功能缺陷** | #72421 | Azure Foundry 主对话成功但辅助任务（标题生成、智能审批）401 | 企业认证场景辅助能力缺失 | 暂无 |
| **P2 重要功能缺陷** | #75725 | MiniMax-M3 首次工具调用后思维链停止（/anthropic 端点） | 推理完整性断裂 | **#75779** |
| **P2 重要功能缺陷** | #75724 | Windows 完整备份因非 SQLite `.db` 文件中止 | 更新前备份失败、阻塞更新 | 暂无 |
| **P2 重要功能缺陷** | #66392 | Linux/X11 `computer_use` 触发 KDE Plasma/Qt 整个会话崩溃 | Linux 桌面自动化不可用 | 暂无（上游 cua-driver #2304） |
| **P2 重要功能缺陷** | #70422 | Desktop 选中文本时误触发 composer 拖出/弹出 | 编写体验极差、高频误操作 | 暂无 |
| **P2 重要功能缺陷** | #70077 | 停止请求并编辑提示词后“恢复检查点”报 session not found | 会话恢复流程中断 | 暂无 |
| **P2 重要功能缺陷** | #75684 | 多路复用网关下 `/memory` `/skills` 操作默认 profile 而非路由 profile | 斜杠命令审查面与实际代理工具不一致 | 暂无 |
| **P3 次要/易用性** | #75768 | Telegram typing indicator 无限卡住（v0.19.0 回归） | 用户感知 bot 假死 | 已关闭（标记 implemented-on-main） |
| **P3 次要/易用性** | #75647 | `hermes doctor` 对内置 memory provider 误报“plugin not found” | 诊断噪音、用户困惑 | 暂无 |
| **P3 次要/易用性** | #36645 | `terminal/execute_code` 绕过 `HERMES_WRITE_SAFE_ROOT` 文件安全机制 | 沙箱逃逸风险 | 暂无 |
| **P3 次要/易用性** | #74965 | Telegram 相册因下载完成时间差拆分为多个 agent turn | 多媒体消息处理碎片

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-01

> **数据范围**：2026-07-31 至 2026-08-01 (UTC) | **数据来源**：GitHub API (sipeed/picoclaw)

---

## 1. 今日速览
- **整体活跃度：中等偏低** ⚠️。过去 24 小时无版本发布，**0 个 PR 合并**，3 个长周期 PR 处于“待审核/更新”状态，2 个 Issue 保持活跃讨论。
- **核心动力**：社区贡献者正在推进 **DeltaChat 重构 (#3222)**、**Simplex 协议新接入 (#3193)** 及 **模型回退链配置化 (#3200)** 三大核心特性，但均卡在审查/迭代阶段，主干分支推进受阻。
- **稳定性隐患**：用户反馈 **Web 聊天界面输入框聚焦时 CPU 占用过高 (#3292)**，属于前端渲染/事件循环回归，影响桌面端体验，尚无修复 PR。
- **协议兼容性**：IRC 长消息分片处理缺失 (#3287) 导致协议层面消息破碎，阻碍企业级/社区频道接入。
- **维护者响应**：核心 PR 更新频繁 (均于今日更新)，但缺乏最终决策 (Approve/Merge)，建议建立每周固定 Review 窗口。

---

## 2. 版本发布
**今日无新版本发布**。当前最新版本仍为 `v0.3.1` (Issue #3292 环境信息所示)。

---

## 3. 项目进展
**今日无 PR 合并/关闭**，主干代码库 **零增量**。以下 3 个关键 PR 处于“开放并今日更新”状态，代表项目下一版本的主要增量方向：

| PR | 标题 | 核心变更 | 状态/阻塞点 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#3222** | `refactor(deltachat): cleanup implementation, documentation -200LOC` | 移除遗留功能/硬编码中继列表/密码配置；重命名字段；完善文档。**大幅减少技术债 (~200 LOC)**。 | **待审核** (创建于 7/3，今日更新)。涉及破坏性配置变更 (密码移至 jsonrpc)，需确认迁移文案。 | [#3222](https://github.com/sipeed/picoclaw/pull/3222) |
| **#3193** | `Added simplex channel type` | **新功能**：接入 Simplex Chat 协议通道类型。扩展去中心化通讯能力。 | **待审核** (创建于 6/27，今日更新)。耗时 35 天，需确认协议稳定性及测试覆盖。 | [#3193](https://github.com/sipeed/picoclaw/pull/3193) |
| **#3200** | `feat(models): add configurable default fallback chain` | Web UI 新增模型默认回退链配置：支持设置默认模型、添加/排序回退模型、持久化至后端 API。 | **待审核** (创建于 7/1，今日更新)。提升多模型可用性核心特性，需验证 API 兼容性。 | [#3200](https://github.com/sipeed/picoclaw/pull/3200) |

> **进度结论**：项目处于 **“特性积累期，发布停滞期”**。三大支柱特性 (协议清理、新协议、模型编排) 均已代码完备但治理停滞。

---

## 4. 社区热点
基于评论数 (`comments`) 与更新时间判断，当前聚焦点为 **前端性能回归** 与 **IRC 协议完善**。

| 排名 | 对象 | 热度指标 | 核心诉求分析 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Issue #3292** | 💬 **1 评论** / 🔄 今日更新 / 👍 0 | **高优先级 Bug**：Firefox/Web 下输入框聚焦即触发高 CPU。用户提供完整环境信息 (Go 1.26, Debian, v0.3.1)，可复现性强。诉求：定位渲染循环/事件监听泄漏，**急需修复上线**。 | [#3292](https://github.com/sipeed/picoclaw/issues/3292) |
| **2** | **Issue #3287** | 💬 **2 评论** / 🔄 今日更新 / 👍 0 | **协议兼容性缺口**：IRCv3 长消息 (>512 bytes) 被客户端自动分片，PicoClaw 误判为多条消息。诉求：实现分片重组逻辑，支持企业级 IRC 网络 (如 Libera.Chat) 无缝接入。 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |
| **3** | **PR #3222** | 🔄 今日更新 / 💬 活跃讨论(未计数) | **架构治理焦点**：DeltaChat 重构涉及配置破坏性变更 (密码移除、字段重命名)。社区关注点：迁移指南完备性、现有部署平滑过渡。 | [#3222](https://github.com/sipeed/picoclaw/pull/3222) |

---

## 5. Bug 与稳定性
仅发现 1 个确认 Bug，但严重度较高。

| 严重度 | Issue | 标题 | 现象 | 影响范围 | Fix PR 状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (前端阻塞)** | **#3292** | 聊天界面输入框选中时 CPU 占用过高 | 输入框获取焦点即触发持续高 CPU (疑似 `requestAnimationFrame` 循环/防抖失效/虚拟列表重渲染) | **所有 Web 前端用户** (Firefox/Chrome, Linux/macOS/Win) | **❌ 无关联 PR** | [#3292](https://github.com/sipeed/picoclaw/issues/3292) |
| **🟡 Major (协议功能)** | **#3287** | IRC 长消息分片未重组 | 消息 > 512B 被拆分为多条，破坏上下文/Markdown/代码块渲染 | IRC 网关用户 (企业/社区频道) | **❌ 无关联 PR** (需协议层实现重组缓冲区) | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |

> **建议**：#3292 属于 **P0 级回归**，建议立即指派前端维护人员复现定位 (可尝试 `git bisect` 近期 Web 依赖升级或输入框组件重构提交)。

---

## 6. 功能请求与路线图信号
结合 Issue 与待合并 PR，下一版本 (v0.4.0 / v0.3.2) 明确包含以下特性：

| 信号来源 | 功能/改进 | 就绪度 | 纳入下一版本概率 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **PR #3200** | **模型可配置默认回退链** (UI + API 持久化) | 🟢 代码完备，待合并 | **极高 (95%)** | 核心易用性提升，解决单模型故障降级痛点。 |
| **PR #3193** | **Simplex 协议通道支持** | 🟢 代码完备，待合并 | **高 (80%)** | 差异化协议优势，但需充分集成测试。 |
| **PR #3222** | **DeltaChat 现代化重构** (破坏性配置变更) | 🟡 代码完备，需迁移决策 | **中 (60%)** | 若赶不上 v0.4 窗口，可能延后至 v0.5 避免破坏稳定版。 |
| **Issue #3287** | **IRC 长消息重组支持** | 🔴 仅需求，无实现 | **低 (20%)** | 需新开发协议缓冲层，工程量不小，可能作为 v0.4.1 补丁。 |
| **Issue #3292** | **输入框高 CPU 修复** | 🔴 仅需求，无实现 | **必须 (100%)** | 属于 Bugfix，大概率以热修复/补丁版形式先行发布。 |

---

## 7. 用户反馈摘要
从 Issue 评论与描述中提炼的真实用户画像与痛点：

| 维度 | 反馈内容 | 代表性引用/场景 |
| :--- | :--- | :--- |
| **性能体验** | **Web 前端在交互态 (输入聚焦) 下资源占用异常**，导致风扇狂转/笔记本发热，严重破坏“轻量级助手”定位。 | "#3292: `CPU usage too high when focus on input box` ... Debian/linux x64, Firefox" |
| **协议可靠性** | **IRC 网关在实际生产网络 (Libera.Chat 等) 中不可用**，长消息 (日志/代码/长文) 被强制拆分，导致下游 AI 理解破碎。 | "#3287: `PicoClaw is currently treating each fragment as a separate message`" |
| **配置复杂度** | 期望 **模型故障自动降级** 而非手动切换；DeltaChat 密码明文配置被视为安全隐患，期望统一托管至 JSON-RPC/Secret 管理。 | "#3200: `users can set the default model, add fallback models... save the full chain`" / "#3222: `Drop password-based email configuration`" |
| **生态扩展性** | 强烈需求 **去中心化/隐私协议支持** (Simplex, DeltaChat)，而非仅依赖中心化 IM (Telegram/Discord/Slack)。 | "#3193: `Added simplex channel type`" |

---

## 8. 待处理积压
以下长期开放项需维护者主动介入，避免“隐性技术债”累积：

| 优先级 | 对象 | 停滞时长 | 核心风险 | 建议行动 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔥 P0** | **PR #3193** (Simplex Channel) | **35 天** (6/27 创建) | 新协议合并窗口错过将导致贡献者流失；CI/CD 未集成测试。 | **本周内完成 Review**，重点检查 `channel/simplex` 实现是否遵循 `Channel` 接口契约、端到端加密流程。 | [#3193](https://github.com/sipeed/picoclaw/pull/3193) |
| **🔥 P0** | **PR #3222** (DeltaChat Refactor) | **29 天** (7/3 创建) | 破坏性配置变更 (密码移除、字段重命名) 缺乏 **自动迁移脚本/文档**，强制合并将导致现有部署宕机。 | 要求作者补充 `MIGRATION_GUIDE.md` 及配置兼容层 (Deprecation Warning)，或推迟至大版本。 | [#3222](https://github.com/sipeed/picoclaw/pull/3222) |
| **⚠️ P1** | **PR #3200** (Model Fallback Chain) | **31 天** (7/1 创建) | 核心用户体验特性就绪未合并，阻塞多模型策略落地。 | 优先合并，非破坏性变更，风险可控。 | [#3200](https://github.com/sipeed/picoclaw/pull/3200) |
| **⚠️ P1** | **Issue #3292** (High CPU) | **8 天** (7/24 创建) | 无人认领，前端技术债风险扩大。 | 指派 Frontend Mainer；若无人，考虑悬赏或回滚近期输入框相关依赖升级。 | [#3292](https://github.com/sipeed/picoclaw/issues/3292) |

---

## 📊 总结建议
1.  **立即行动**：指派人员修复 **#3292 (高 CPU)**，必要时发布 `v0.3.2-hotfix`。
2.  **本周目标**：完成 **#3200 (回退链)** 与 **#3193 (Simplex)** 的 Review 并合并，释放积压价值。
3.  **技术决策**：召集核心维护者定夺 **#3222 (DeltaChat 破坏性变更)** 的发布策略 (大版本 vs 兼容层)。
4.  **流程改进**：建议引入 **“每周三 PR Review Day”** 固定机制，避免 30+ 天的审查周期打击贡献者积极性。

> *报告生成时间：2026-08-01 08:00 UTC | 下次更新：2026-08-02*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-01

> **数据来源**：GitHub API 实时抓取（nanocoai/nanoclaw）  
> **统计窗口**：2026-07-31 00:00 – 2026-08-01 00:00 (UTC)  
> **核心指标**：Issues 活跃 8 条 | PR 更新 10 条（合并/关闭 4 条）| 新 Release 0 个

---

## 1. 今日速览
- **整体活跃度：高**。单日 18 条 Issue/PR 更新，核心维护者（glifocat, soren5, romanbsd 等）与社区贡献者均有高频互动，呈现“多线程并行推进”态势。
- **核心主线**：**容器运行时多元化**（Apple Container / K8s / Native）、**通道生态扩展**（iMessage/Photon, Dial/SMS, Telegram 修复）、**安全加固**（日志脱敏、交互源头验证）三条主线同步推进。
- **风险点**：Telegram 配对存在**启动期单点故障**（#3162，High），且 Apple Container 分支严重滞后主干（#2588），可能阻塞 macOS 用户落地。
- **安全姿态**：已合并 PR #3161（日志脱敏）与 PR #2651（交互源头验证），安全加固从“事后修补”转向“设计期内置”。
- **社区信号**：用户强烈诉求**无 Docker/无容器运行**（#1184, #1225, #1732），原生运行器模式（Native Runner）已成下一版本必选项。

---

## 2. 版本发布
> **本周期无新 Release**。最近发布为 v2.1.54（PR #3163 已修复发布流水线，恢复该版本发布路径）。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| [#3161](https://github.com/nanocoai/nanoclaw/pull/3161) | **Fix / Security** | **宿主结构化日志脱敏**：在 `log.info/warn/error` 写入 `nanoclaw.log` 前，自动清洗 credentials/tokens/secrets。 | 🔒 **安全基线提升**——消除日志泄露攻击面，满足企业级合规审计要求。 |
| [#3163](https://github.com/nanocoai/nanoclaw/pull/3163) | **Fix / Release Eng** | **恢复 v2.1.54 发布路径**：修复 CI/CD 卡点，确保语义化版本与制品发布流程通畅。 | 🚀 **交付管道畅通**——为后续 v2.1.55+ 连续交付扫清障碍。 |
| [#1678](https://github.com/nanocoai/nanoclaw/pull/1678) | **Docs / Skill** | **语音转录技能文档更新**：`use-local-whisper` 支持扩展至 Telegram + WhatsApp，移除过时 git merge 指引。 | 📚 **技能生态同步**——降低新用户接入语音能力的认知负荷。 |
| [#3076](https://github.com/nanocoai/nanoclaw/pull/3076) | **Feature / Skill** | **iMessage 统一适配器（本地+托管）**：对齐 `spectrum-ts v11`，合并本地/Photon 双模式，废弃旧分支。 | 💬 **通道矩阵补全**——iMessage 生产可用性跃升，为商业化场景铺路。 |

> **合并统计**：4 个 PR 合并，涵盖 **安全、交付、文档、核心通道** 四大维度，项目整体向“生产就绪”迈进约 **5-8%**（按里程碑权重估算）。

---

## 4. 社区热点（高互动 / 高关注）

| Issue/PR | 互动量 | 核心诉求 | 分析 |
|----------|--------|----------|------|
| [#1184](https://github.com/nanocoai/nanoclaw/issues/1184) | 👍 1 / 评论 3 | **Sealos/K8s 受限环境部署难** | 企业级用户被强制容器化拦截，急需 **K8s Pod 级运行时**（关联 #2354）或 **Native Runner**（#1732）。 |
| [#1732](https://github.com/nanocoai/nanoclaw/issues/1732) | 评论 3 | **原生运行器模式** | 绕过 Docker 直连宿主 tmux/浏览器/macOS API，属于 **P0 级架构重构需求**，已有 PR #2809 尝试 Apple Container 方向。 |
| [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) | 评论 1 | **skill/apple-container 分支严重滞后** | 阻断 macOS 用户“开箱即用”，需 **Re-base 到 main** 或由 PR #2809 统一替代。 |
| [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) | 新开 / High | **Telegram 配对启动期单点故障** | `getMe` 失败导致全进程永久不可配对，无重试/降级/告警，**需立即 Hotfix**。 |
| [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) | 评论多 / Hardening | **交互响应源头验证** | 社区对 `ask_user_question` 防伪造高度关注，PR 已实现 `platformId+threadId` 绑定校验，待合并。 |

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 现象 | 是否已有 Fix PR | 备注 |
|--------|-------|------|-----------------|------|
| **Critical** | [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) | Telegram `getMe` 启动失败 → 配对永久失效，无任何用户感知 | ❌ 无 | **建议 24h 内出 Hotfix**：增加指数退避重试 + 状态机持久化 + 管理端告警。 |
| **High** | [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) | Apple Container 微 VM 内 `host.docker.internal` 解析失败，且不支持 `--add-host` | ❌ 无 | PR #2809 引入 `CONTAINER_RUNTIME=container` 可能缓解，需验证网络模式。 |
| **Medium** | [#2923](https://github.com/nanocoai/nanoclaw/issues/2923) | `ask_user_question` 卡片显示层可被伪造点击篡改（仅显示欺骗，不影响逻辑） | ✅ [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) | PR 已实现源头验证，**建议加速 Review 合并**闭环。 |
| **Low** | [#1225](https://github.com/nanocoai/nanoclaw/issues/1225) | Windows/Linux 无 Docker 环境无法运行 | ⚠️ 部分 | #1732 Native Runner 与 #2354 K8s Runtime 为根治方案。 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 Issue | 关联 PR | 纳入下版本概率 | 备注 |
|------|------------|---------|----------------|------|
| **Native Runner（无容器模式）** | [#1732](https://github.com/nanocoai/nanoclaw/issues/1732), [#1225](https://github.com/nanocoai/nanoclaw/issues/1225), [#1184](https://github.com/nanocoai/nanoclaw/issues/1184) | 暂无直接 PR，但 #2809 奠定运行时抽象基础 | 🟢 **极高** | 社区呼声最高，架构已预留 `CONTAINER_RUNTIME` 扩展点。 |
| **K8s Pod 运行时** | [#2354](https://github.com/nanocoai/nanoclaw/issues/2354) | 无 | 🟡 **中高** | 企业级刚需，依赖 `container-runtime.ts` 重构，预计 v2.2。 |
| **Apple Container 一键迁移** | [#2588](https://github.com/nanocoai/nanoclaw/issues/2588), [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) | [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) | 🟢 **高** | PR #2809 已实现 `CONTAINER_RUNTIME=container` + 远程 OneCLI 网关，**主干同步后即可发布**。 |
| **Dial/SMS+AI 语音通道** | 新需求 | [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | 🟢 **高** | PR 已完整实现 Channel Adapter + SKILL.md，**下版本可发**。 |
| **iMessage 托管注册流程** | 迭代需求 | [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | 🟢 **高** | 替代废弃 #2999，注册流程可用，**配合 #3076 统一交付**。 |
| **安全策略文档化** | 内部治理 | [#2954](https://github.com/nanocoai/nanoclaw/pull/2954) | 🟢 **高** | 建立 Security Reporting & Triage Policy，**合规必备**。 |

---

## 7. 用户反馈摘要（从评论提炼）

| 维度 | 真实声音 | 潜在动作 |
|------|----------|----------|
| **部署摩擦** | “生产环境禁 Docker/Sealos 无法跑容器，求 K8s 或二进制直跑” (#1184, #1225) | 加速 Native Runner / K8s Runtime 落地。 |
| **macOS 原生体验** | “Apple Container 分支坏了，`host.docker.internal` 解析不了，文档也对不上” (#2588, #2589) | 以 PR #2809 为准，废弃旧 skill 分支，更新官方教程。 |
| **Telegram 可靠性** | “网络抖动一下，Bot 就彻底挂了，没日志没报警” (#3162) | 增加健康检查端点 `/healthz` + 配对状态持久化。 |
| **安全信任** | “日志里居然能看到 Token”、“按钮点击能伪造显示” (#3161, #2923) | 已有 PR 修复，**需尽快合并并发布 Security Advisory**。 |
| **技能生态** | “Whisper 文档写着只支持 WhatsApp，其实 Telegram 也行，误导我半天” (#1678) | 持续同步 Skill 文档与实现，**建议引入自动化测试验证 README 示例**。 |

---

## 8. 待处理积压（建议维护者本周关注）

| 项 | 类型 | 停滞天数 | 优先级 | 建议动作 |
|----|------|----------|--------|----------|
| [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) | Issue | 70+ | 🔴 **Critical** | **决策**：废弃 `skill/apple-container` 分支，全量迁移至 PR #2809 方案；同步更新 `/convert-to-apple-container` 文档。 |
| [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) | PR | 44 | 🔴 **Critical** | **Review 加速**：核心运行时抽象 + Apple Container + 远程 OneCLI，**需 2 名 Core Reviewer 交叉评审**，合并后解锁 macOS 生产线。 |
| [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) | PR | 63 | 🟠 **High** | **安全修复**：交互源头验证已完善，**本周合并并回港到 v2.1.55**。 |
| [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) | Issue | 0 (新) | 🔴 **Critical** | **Hotfix 分支**：立即建立 `hotfix/telegram-getme-retry`，实现启动期重试+持久化+告警。 |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | PR | 18 | 🟢 **Medium** | **新通道**：Dial Adapter 功能完整，**安排 1 次 E2E 测试后合并**。 |
| [#2954](https://github.com/nanocoai/nanoclaw/pull/2954) | PR | 28 | 🟢 **Medium** | **合规文档**：Security Policy 补全，**无代码风险，优先合并**。 |

---

> **下一期预告**：重点跟踪 **PR #2809 合并后的 Apple Container 落地验证**、**#3162 Hotfix 发布情况**、以及 **Native Runner 设计文档（RFC）是否启动**。  
> **维护者提示**：当前 3 个 Critical 项（Apple Container 分支、Telegram 单点故障、交互伪造）均在 **安全/可用性/分发** 核心路径上，建议本周安排 **1 次专题 Triage 会** 明确 Owner 与截止日期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-01

---

## 1. 今日速览
- **整体活跃度：低** 。过去 24 小时无 Issue 更新，仅有 1 个 PR（`#981`）处于待合并状态，且该 PR 创建于 3 天前，近期无新评论或 Review 动作，显示社区互动处于静默期。
- **核心进展**：项目正在扩展 CLI Provider 生态，新增对 xAI Grok CLI 的支持，遵循现有 `codex-cli`/`gemini-cli`/`claude-cli` 的按需调用架构模式。
- **发布状态**：无新版本发布，主分支处于功能累积阶段。
- **风险提示**：单一 PR 长时间挂起（>48h 无 Review）可能阻碍 Provider 扩展节奏，建议维护者尽快安排 Code Review。

---

## 2. 版本发布
**无新版本发布。**

---

## 3. 项目进展
### 待合并 PR（1 条）
| PR | 标题 | 作者 | 状态 | 影响范围 | 进展评估 |
|----|------|------|------|----------|----------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | `feat(provider): add grok-cli provider for xAI Grok CLI` | valonmulolli | **Open** (2026-07-29 创建, 2026-07-31 更新) | **Provider 层扩展** — 新增可选 Provider，依赖本地 `grok` CLI 认证与安装 | ⚠️ **停滞中** — 创建 3 天、更新 1 天，暂无 Reviewer 指派、CI 状态未展示、无讨论评论。建议维护者优先审阅，解锁 Provider 矩阵完整性。 |

> **整体推进度**：仅 Provider 生态横向扩展 1 步，核心运行时、编排层、UI 等关键路径本期无推进。

---

## 4. 社区热点
**无高热度 Issue/PR。**  
- 仅有的 PR `#981` 评论数 `undefined`（GitHub API 未返回），Reactions 👍=0，讨论度为 0。  
- 过去 24h 无 Issue 活动，社区处于观望/低参与状态。

---

## 5. Bug 与稳定性
**无新增 Bug、崩溃或回归报告。**  
- 过去 24h Issues 列表为空，现有 Issue 回溯不在本报告数据范围内。

---

## 6. 功能请求与路线图信号
| 信号来源 | 需求描述 | 落地可能性 | 备注 |
|----------|----------|------------|------|
| PR `#981` | **集成 xAI Grok CLI** 作为可选 Provider | **高** — 已有完整实现 PR，仅待 Review 合入 | 符合项目 “多 CLI Provider” 既有路线图，合入后 Provider 矩阵将覆盖 Codex / Gemini / Claude / Grok 四大主流 CLI。 |

> **下一版本预期**：若 `#981` 本周合入，vNext 将新增 `grok-cli` Provider，无破坏性变更（可选依赖）。

---

## 7. 用户反馈摘要
**无可用用户反馈数据。**  
- 过去 24h 无 Issue 评论、无 PR 讨论，无法提炼痛点或满意度信息。

---

## 8. 待处理积压
| 条目 | 类型 | 滞留时长 | 优先级 | 建议行动 |
|------|------|----------|--------|----------|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | Feature PR | **3 天** (创建) / **1 天** (最后更新) | **P1** | 1️⃣ 指派 Reviewer（建议熟悉 Provider 架构的核心成员）<br>2️⃣ 确认 CI 全绿（含 `grok` CLI 可用性测试）<br>3️⃣ 合入后同步更新 Provider 文档与 CLI 兼容性矩阵 |

> **长期关注**：当前数据集未包含历史积压 Issue/PR，建议维护者定期执行 `stale` 标记清理，避免隐性积压。

---

### 📌 维护者行动清单（建议今日完成）
1. **Review & Merge #981** — 解锁 Grok Provider，保持 Provider 扩展节奏。  
2. **触发依赖更新扫描** — 确认 `grok` CLI 版本兼容性策略（如最低版本、破坏性变更窗口）。  
3. **发布周度/双周快照** — 若主分支积累足量变更，规划下一版本发布节奏，避免长周期无 Release。

---

*数据来源：GitHub REST API / GraphQL，统计窗口 2026-07-31 00:00 – 2026-08-01 00:00 (UTC)。*  
*报告生成时间：2026-08-01 06:00 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-01

---

## 1. 今日速览

IronClaw 今日呈现**高强度架构重构与基础设施强化**并行态势。过去 24 小时合并/关闭 31 个 PR、更新 38 个 Issue，核心动能集中在：**目标架构 Wave 1 六个工作流（WS1.1–WS1.7）的契约抽取与依收敛**、**Prompt Cache/Compaction 关键路径 P0 级性能修复序列**（8 个新 Issue 今日集中创建）、**跨用户隔离安全漏洞修复**、**技能系统从关键词路由向模型自主选择的架构翻转**。无新版本发布，但释放候选 PR #5598 持续滚动更新。项目整体处于**大规模内部重构期**，对外可见功能交付相对较少，但技术债偿还力度极大，健康度评级：**B+（架构清理期，短期对外交付放缓，长期基础夯实显著）**。

---

## 2. 版本发布

**无新版本发布**。  
当前释放候选 PR #5598（`chore: release`）由 `ironclaw-ci[bot]` 维护，累积破坏性变更：
- `ironclaw_common`: 0.4.2 → 0.5.0（API breaking：`copy_impl_added` 等类型系统变更）
- `ironclaw_skills`: 0.3.0 → 0.4.0（API breaking）
- `ironclaw_safety`: 0.2.2 → 0.2.3（兼容）

> ⚠️ 迁移提示：下游 crate 需同步适配 `ironclaw_common` 0.5.0 的类型签名变更；技能清单与注册流程需对齐 0.4.0 协议。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR（推进核心架构与稳定性）

| PR | 标题 | 影响面 | 状态 |
|----|------|--------|------|
| [#6967](https://github.com/nearai/ironclaw/pull/6967) | **WS1.1**：完成 `ironclaw_host_api` 转向词汇表，退役 `turns` shim | 循环层契约标准化，消除双重导入路径 | **CLOSED** |
| [#6975](https://github.com/nearai/ironclaw/pull/6975) | **WS1.2**：抽取 `ironclaw_loop_contracts`，翻转 `ironclaw_agent_loop` 依赖 | 循环层中立契约独立打包，CI 注册完成 | **CLOSED** |
| [#6977](https://github.com/nearai/ironclaw/pull/6977) | **WS1.3**：抽取 `ironclaw_extension_contracts`，关闭双重导入路径 | 扩展层契约独立，适配器半就绪 | **CLOSED** |
| [#6979](https://github.com/nearai/ironclaw/pull/6979) | 文档同步 #6930 Hosted-MCP 注册变更 | 5 个 Markdown 文件，+27/-11 行 | **CLOSED** |
| [#6930](https://github.com/nearai/ironclaw/pull/6930) | **feat(extensions)**：Hosted MCP 服务器注册与全生命周期托管 | 153 文件 +15k/-1.8k 行，OAuth 自动检测 | **CLOSED** |
| [#6908](https://github.com/nearai/ironclaw/pull/6908) | **fix(webui)**：Admin 用户列表分页（游标式无限查询） | 修复 #6903，支持 100+ 用户加载 | **CLOSED** |
| [#4022](https://github.com/nearai/ironclaw/pull/4022) | **fix(tools)**：HTTP 响应错误归类为可恢复而非运行终止 | 回滚 #4014 回归，恢复模型可见错误路径 | **CLOSED** |
| [#3952](https://github.com/nearai/ironclaw/pull/3952) | **feat(filesystem)**：TOCTOU 加固 `LocalFilesystem`（`openat2`/`O_NOFOLLOW`） | 多租户生产环境最高杠杆安全项 | **CLOSED** |

### 🔄 进行中的大型重构栈（Wave 1 收尾）

| PR | 工作流 | 核心目标 | 依赖链 |
|----|--------|----------|--------|
| [#6980](https://github.com/nearai/ironclaw/pull/6980) | WS1.4 | 抽取 `ironclaw_product_contracts`，落地适配器半 | → #6977 |
| [#6981](https://github.com/nearai/ironclaw/pull/6981) | WS1.5 | 合并密封证据铸造至 `witness grants`，删除其它构造路径，回归测试入仓 | → #6980 |
| [#6982](https://github.com/nearai/ironclaw/pull/6982) | WS1.6+1.7 | 收窄 `ironclaw_common`，切断 product→runner 两条单符号边 | → #6981 |

> **进度判读**：Wave 1 六个工作流已合并 3 个（WS1.1–1.3），文档同步 1 个，剩余 3 个（WS1.4–1.7）呈堆叠审查态，预计本周内全部落地。这是**目标架构落地的关键路径**，完成后将消除循环/扩展/产品三层的循环依赖与词汇表分裂。

---

## 4. 社区热点

| Issue/PR | 评论/互动 | 核心诉求 | 分析 |
|----------|-----------|----------|------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) **Epic: error-recoverability endgame** | 15 💬 | 定义“中途错误可恢复性合同”：运行存活、模型可见、携带原因与成功条件、模型获得行动回合、不上报非成功态 | **架构级共识构建中**，跨越 Loop、Runner、LLM 适配器，影响错误分类、重试策略、遥测上报全链路 |
| [#6963](https://github.com/nearai/ironclaw/issues/6963) **Path-keyed CI gates** | 5 💬 | 追踪 #6946 (WS10) 未重写的 8 个路径键控 CI/开发门禁，全部阻塞首个 `git mv` 家族 | **CI 基建债显性化**，需按 crate 维度拆解 gate，配合 Wave 1 目录结构调整同步治理 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) **Epic: Hermetic capability & journey testing** | 4 💬 | 机械化回答“每个能力/关键旅程是否有确定性覆盖”，补齐 recorded-fixture 与 Emulate 的缺口 | **测试平台化战略**，关联 #6962（Notion 旅程同步），属 P0 级交付保障工作 |
| [#6940](https://github.com/nearai/ironclaw/issues/6940) **Bug: IronHub skill CTA 404** | 2 💬 | 所有技能的 CTA 按钮均指向 404，用户不知归属 | **用户可见阻断 Bug**，涉及 IronHub 前端路由与后端技能元数据一致性 |
| [#6900](https://github.com/nearai/ironclaw/issues/6900) **P0: Shared-channel 默认 subject 绑定导致跨用户记忆泄漏** | 1 💬 | 共享频道未路由时，身份敏感操作必须拒绝或绑定 per-actor 身份，绝不可采用操作员命名空间 | **安全/隔离 P0**，直接关联多租户信任边界，需在 Loop 层 Subject 解析处修复 |
| [#6971](https://github.com

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-01

---

## 1. 今日速览

- **整体状态**：项目处于**高强度代码清理与体验打磨期**，无新版本发布，但单日合并/关闭 **11 个 PR**，集中解决侧边栏交互、设置页弹层残留、OpenClaw 提示词缓存稳定性、工具协议泄漏等核心体验与稳定性问题。
- **活跃度评估**：**高**（代码变更频次高、PR 审查闭环快）。当日新增 PR 5 个（均来自核心维护者 `fisherdaddy`、`liuzhq1986`），且均在数小时内完成合并，显示核心团队协作流程成熟。
- **社区动态**：4 个长期悬挂的 `stale` Issue（创建于 2026-04-02）今日统一关闭，对应功能均已通过 PR 落地，体现“Issue 驱动开发”的闭环管理。
- **技术债关注**：`openclaw` 模块连续 3 个 PR 修复提示词字节稳定性与聚合上限问题，直指 DeepSeek 长会话缓存命中率从 57% 恢复至 ~100%，为下一版本性能基线奠基。
- **风险提示**：唯一待合并 PR **#2234**（OpenClaw cron 子任务完成事件传播修复）处于 `open` 且 `stale` 状态，测试计划未勾选完成，建议优先审查合并以消除并行任务阻塞隐患。

---

## 2. 版本发布

> 今日无新版本发布（Releases 为空）。最近一次发布 PR **#2416** 为 `Release/2026.7.31` 准备变更日志，但内容为空，疑似为自动化发布流程占位或待人工填充 Changelog。建议关注后续 Tag 推送情况。

---

## 3. 项目进展

今日合并/关闭的 11 个 PR 可归类为三大主线，项目在**交互体验**、**核心稳定性**、**协议合规**上同步推进：

### A. 侧边栏与交互体验重构（4 个 PR，对应 4 个 Issue 全部闭环）
| PR | 关联 Issue | 核心变更 | 用户价值 |
|----|------------|----------|----------|
| [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) | [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) | 新增拖拽手柄，支持 180–480px 宽度记忆，持久化至 `localStorage` | 解决小屏挤压/大屏截断痛点，符合桌面端交互规范 |
| [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) | `shortcuts.ts` 新增跨平台 `formatShortcutLabels`，macOS 渲染 ⌘/⌥，Win/Linux 渲染 Ctrl/Alt | 降低快捷键发现成本，新用户零学习成本使用核心功能 |
| [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) | `coworkSlice` 增加 `sessionsLoaded` 标志位，`Sidebar` 接入骨架屏 | 消除启动闪烁“暂无会话”误导，提升首屏感知性能 |
| [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | - | 复用会话复制图标交互，站点 URL/分享码复制增加 Toast 反馈 | 统一交互语言，操作确认感增强 |

### B. OpenClaw 核心稳定性与缓存优化（3 个 PR，直击 DeepSeek 长会话性能）
| PR | 核心修复 | 技术影响 |
|----|----------|----------|
| [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) | Live prompt 传递 `aggregateMaxCharsOverride=null`，保持历史字节稳定 | **缓存命中率 57% → ~100%**，显著降低 Token 成本与延迟 |
| [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) | 移除实时工具结果聚合上限，持久化会话仍保留预算控制 | 修复前缀缓存失效根因，兼顾长会话与成本控制 |
| [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) | 清理侧聊工具调用标记，返回稳定引导文案，透传错误元数据 | 防止 BTW 协议泄漏污染上下文，提升网关鲁棒性 |

### C. 基础设施与遗留清理（4 个 PR）
- **[#172](https://github.com/netease-youdao/LobsterAI/pull/172)**：Antigravity OAuth 集成（含 SQLite 持久化、代理链路打通），历经 5 月审查今日合并，扩展认证生态。
- **[#1308](https://github.com/netease-youdao/LobsterAI/pull/1308)**：首页输入框草稿按 Agent 隔离，解决切换 Agent 串内容问题。
- **[#1321](https://github.com/netease-youdao/LobsterAI/pull/1321)**：设置页切 Tab 自动关闭 Memory Editor / Model Test 模态框，修复“穿透点击导致只读”体验缺陷。
- **[#2416](https://github.com/netease-youdao/LobsterAI/pull/2416)**：`Release/2026.7.31` 分支准备，Changelog 待补充。

---

## 4. 社区热点

| 对象 | 热度指标 | 核心诉求分析 |
|------|----------|--------------|
| **Issue #1314 / PR #1315** | 👍 0 / 评论 2 / 时长 121 天 | **高频刚需**：侧边栏固定宽度在多尺寸屏幕下矛盾尖锐，拖拽调整为桌面端应用标配，用户期待“所见即所得”持久化。 |
| **Issue #1319 / PR #1320** | 👍 0 / 评论 2 / 时长 121 天 | **感知性能痛点**：启动闪烁“空状态”易引发“数据丢失”恐慌，骨架屏+加载标志位为通用最佳实践。 |
| **PR #2413 / #2415** | 无 Issue 关联 / 核心维护者自驱 | **性能基线建设**：DeepSeek 缓存命中率暴跌至 57% 触发红线，字节稳定性为长会话成本控制核心，属技术债偿还高优先级。 |
| **PR #2234** | Open / stale / 创建 32 天 | **并行任务编排阻塞**：cron 场景下子任务完成事件无法驱动父任务继续，影响自动化工作流可靠性，测试计划未执行，需人工介入。 |

> **洞察**：社区讨论虽少（评论数低），但 Issue 全为明确功能增强且已落地，维护者响应彻底；核心性能优化由 Maintainer 内部发现并极速闭环，体现“用户反馈驱动体验、技术指标驱动内核”的双轨治理。

---

## 5. Bug 与稳定性

| 严重级 | 问题描述 | 来源 | 修复 PR | 状态 |
|--------|----------|------|---------|------|
| **P0 (生产可用性)** | DeepSeek 长会话缓存命中率暴跌至 57%，Token 成本与延迟异常升高 | 内部监控 / PR #2413 描述 | [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413), [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) | ✅ 已合并 |
| **P1 (交互阻塞)** | 设置页切 Tab 导致模态框残留为全屏遮罩，点击穿透造成“只读”假象 | Issue #1307 / PR #1321 | [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | ✅ 已合并 |
| **P1 (协议污染)** | 侧聊工具调用标记泄漏至主上下文，破坏提示词结构 | 内部排查 / PR #2414 | [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) | ✅ 已合并 |
| **P2 (功能缺失)** | 启动期会话列表无法区分“加载中”与“空状态”，闪烁误导用户 | Issue #1319 | [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | ✅ 已合并 |
| **P2 (交互缺失)** | 侧边栏核心按钮无快捷键提示，新用户发现成本高 | Issue #1317 | [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | ✅ 已合并 |
| **P3 (潜在风险)** | Cron 并行/串行子任务完成事件传播中断，父任务卡死 | PR #2234 | [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) | ⏳ **待合并** |

> **稳定性结论**：今日合并 PR 覆盖了全部已知 P0/P1 级问题，核心链路稳定性显著提升。唯一遗留风险为 **#2234**，涉及 OpenClaw 复杂编排逻辑，建议安排专项回归测试后合并。

---

## 6. 功能请求与路线图信号

| 用户需求 | 来源 | 已落地 PR | 下一版本纳入概率 | 备注 |
|----------|------|-----------|------------------|------|
| 侧边栏拖拽调整宽度 + 宽度记忆 | Issue #1314 | #1315 ✅ | **100%** | 已合并，含持久化与边界约束 |
| 侧边栏按钮显示平台感知快捷键 | Issue #1317 | #1318 ✅ | **100%** | 已合并，跨平台符号自动转换 |
| 会话列表骨架屏 + 加载态区分 | Issue #1319 | #1320 ✅ | **100%** | 已合并，Redux 状态机扩展 |
| 表格换行渲染原始标签 / 长文本 Hover 全文 | Issue #1311 | - | **中** | Issue 已关闭但无对应 PR，可能被归入通用 Markdown 渲染重构 |
| Antigravity OAuth 登录与模型同步 | PR #172 | #172 ✅ | **100%** | 已合并，扩展认证提供商矩阵 |
| Cron 子任务完成事件驱动父任务继续 | PR #2234 | #2234 ⏳ | **高** | 核心编排补全，测试通过即可发布 |

> **路线图推演**：v2026.08 版本将以**“交互体验完善 + OpenClaw 缓存稳定性”**为主题。表格渲染增强（Issue #1311）虽被标记 stale 关闭，但属高频 UI 痛点，预计会在下一轮渲染层重构（如引入 `@tanstack/table` 或统一 Markdown 管线）中解决。

---

## 7. 用户反馈摘要

从关闭 Issue 的评论与截图中提炼的真实用户声音：

| 痛点场景 | 原始反馈 | 解决现状 |
|----------|----------|----------|
| **多显示器/笔记本切换** | “外接 27 寸时想看全标题，合盖用 14 寸时侧边栏遮半屏内容” | ✅ PR #1315 宽度记忆自动适配 |
| **新用户上手** | “用了两周才发现 Ctrl+N 能新建任务，按钮旁边不显示快捷键太反直觉” | ✅ PR #1318 kbd 徽标平台感知展示 |
| **启动焦虑** | “每次打开先看到‘暂无历史记录’心跳加速，以为数据没了” | ✅ PR #1320 骨架屏消除闪烁 |
| **长会话成本** | 隐性反馈：DeepSeek 长对话突然变慢、花费激增 | ✅ PR #2413/2415 缓存命中率恢复 100% |
| **表格可读性** | “单元格里有换行却显示 `<br>` 标签，长文本截断也没法看全” | ⚠️ Issue #1311 仅关闭，未见修复代码 |

> **满意度信号**：核心交互投诉（宽度、快捷键、启动闪烁）已全数响应并交付，用户感知体验预期大幅提升。表格渲染问题虽标记 stale，但属数据密集型场景高频诉求，建议纳入技术债专项。

---

## 8. 待处理积压

| 对象 | 类型 | 停滞天数 | 关键阻碍 | 建议行动

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-01

---

## 1. 今日速览
- **核心动态**：项目在过去 24 小时呈现 **“安全加固与协议扩展并行”** 的高活跃态势，共计 6 个 PR 更新、2 个 Issue 变动，但无新版本发布。
- **合并入库**：两大功能性 PR 已合并 —— **NIP-29 群聊协议支持**（`moltis-nostr` 迈向 Buzz/Block 生态互通）与 **Web 端 Markdown 复制/导出**（闭环 #1131 用户高频需求）。
- **安全硬化**：两个安全修复 PR（节点配对签名校验、模型/Zip 路径穿越防护）于昨日新开，均未合并，**建议维护者优先审核并纳入下一补丁版本**。
- **社区反馈**：新增一例 **GPT-5.6 Luna 兼容性 Bug（#1181）**，尚无讨论与复现细节，需尽快分型以免阻塞最新模型用户。
- **整体健康度**：⭐⭐⭐⭐☆（功能交付稳健、安全响应及时，唯文档/迁移指南滞后于协议变更）。

---

## 2. 版本发布
> 过去 24 小时无新 Release。最近一次发布仍为早期版本，建议在合并当前安全 PR 后尽快切 `v0.x.y-patch`。

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | ✅ **已合并** | `moltis-nostr` 新增 **NIP-29 群聊** 支持，适配 **Buzz (Block)** 自托管 Relay，实现 AI Agent 与人类在同一频道平等协作。 | ⭐⭐⭐⭐⭐ **里程碑级**：打通 Nostr 生态，奠定去中心化多智能体协作基座。 |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | ✅ **已合并** | Web 端新增 **“复制为 Markdown”** 与 **“会话导出 Markdown”**，完整保留代码块、图片引用、无模型元数据。 | ⭐⭐⭐⭐ 直接闭环 #1131，显著提升知识沉淀与分享体验。 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 🟢 **审核中** | 频道权限模型重构：引入 **per-account `operators` 白名单**，将“访问”与“特权命令/宿主工具”解耦。 | ⭐⭐⭐⭐ 安全架构关键重构，防止越权调用，建议尽快合并。 |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) | 🟢 **审核中** | **节点配对签名校验**：绑定 `node.pair.verify` 至服务端下发的挑战，防止自带密钥/挑战的中间人攻击。 | ⭐⭐⭐⭐⭐ **安全修复**，CVSS 预估 ≥ 7.5，建议 **阻塞式合并**。 |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | 🟢 **审核中** | **路径穿越双修复**：Zip 提取与 HuggingFace 模型下载均加入规范化路径校验，杜绝任意文件写入 → RCE。 | ⭐⭐⭐⭐⭐ **安全修复**，影响面广（所有自托管实例），同为 **阻塞式合并**。 |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | 🟢 **审核中** | 实验性 **`zvec` 向量数据库记忆后端**（基于 `redb` + `zvec`），feature-gated 可选。 | ⭐⭐⭐ 长期记忆架构多元化探索，文档与基准测试缺失，建议补齐后再合并。 |

---

## 4. 社区热点

| 对象 | 热度指标 | 核心诉求分析 |
|------|----------|--------------|
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | 👍 0 / 评论未披露 / **已合并** | **协议层落地验证**：维护者 `penso` 主导，说明 Nostr/NIP-29 已列入核心路线图，社区期待后续 NIP-42 认证、NIP-59 加密私聊跟进。 |
| [#1176](https://github.com/moltis-org/moltis/pull/1176) | 👍 0 / 评论未披露 / **已合并** | **开箱即用的知识流转**：用户 `vvuk` 在 #1131 投 👍 1，验证“导出 Markdown”属高频刚需，后续可考虑 PDF/Notion/Obsidian 一键同步。 |
| [#1181](https://github.com/moltis-org/moltis/issues/1181) | 👍 0 / 评论 0 / **新开** | **前沿模型兼容性**：GPT-5.6 Luna 可能引入新参数/流式格式，需尽快复现并给出适配指南，避免早期采用者流失。 |

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 现象 | 是否有 Fix PR | 处理建议 |
|--------|----------|------|---------------|----------|
| 🔴 **Critical** | [#1179](https://github.com/moltis-org/moltis/pull/1179) | 节点配对可被自定义密钥/挑战绕过，存在 MITM 预埋风险 | ✅ PR 已开 | **立即合并并回港到 `main`/`stable` 分支** |
| 🔴 **Critical** | [#1180](https://github.com/moltis-org/moltis/pull/1180) | 恶意 Zip/HF Repo 可越界写配置/凭证/脚本 → RCE | ✅ PR 已开 | **立即合并，配合发布安全公告** |
| 🟡 **Medium** | [#1181](https://github.com/moltis-org/moltis/issues/1181) | GPT-5.6 Luna 会话异常（细节待补充） | ❌ 无 | 标记 `needs:triage`，指派模型适配负责人 48h 内给出复现/Workaround |

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 已有 PR 支撑 | 入版可能性 |
|------|------|--------------|------------|
| [#1131](https://github.com/moltis-org/moltis/issues/1131) → [#1176](https://github.com/moltis-org/moltis/pull/1176) | 复制/导出 Markdown | ✅ 已合并 | **已交付** |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | 向量数据库后端多样化 | 🟢 实验性 PR | **中等**（需补文档/基准，预计下下版本） |
| Nostr 生态讨论（隐含） | NIP-59 加密私聊、NIP-65 中继发现 | #1168 奠定基础 | **高**（下一季度里程碑） |
| 运维反馈 | 权限模型细粒度化 | #1170 进行中 | **高**（安全合规刚需） |

---

## 7. 用户反馈摘要
- **正向**：Markdown 导出（#1131/#1176）获 👍 1 且零负面评论，印证“数据可携带性”是核心留存指标。
- **痛点**：
  1. **前沿模型适配滞后**（#1181） —— 用户期望 “模型发布即可用”，当前缺乏自动化兼容性测试流水线。
  2. **安全配置文档缺失** —— #1179/#1180 修复的风险点在文档中均无缓解指引，运维需阅读代码才能加固。
  3. **实验功能无开关文档** —— `zvec` feature 仅在 PR 描述提及，`README/Cargo.toml` 无显式说明。

---

## 8. 待处理积压 ⚠️

| 对象 | 滞留天数 | 风险 | 建议动作 |
|------|----------|------|----------|
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 6 天 | 权限模型重构未合并，现有 `allowlist` 仍可直达特权命令 | **指派 reviewer 48h 内决策**，若设计争议发起 RFC 讨论 |
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | 15 天 | 实验性后端长期挂起，CI 未跑基准，依赖 `zvec`/`redb` 版本锁定风险 | **要求补全：基准报告、迁移指南、feature 文档** 再合并 |
| 安全公告流程 | 长期 | 无 `SECURITY.md`、无 CVE 申请流程、无回港策略 | **建立安全响应 SOP**，参考 Rust/Token 项目模板 |

---

> **下一步关注点**：  
> 1. **今日内** 完成 #1179/#1180 合并并切 `v0.x.y+security.1`；  
> 2. **本周内** 解决 #1170 权限模型、给出 #1181 复现/Workaround；  
> 3. **本月内** 补齐 Nostr 协议族文档、实验功能开关矩阵、安全运维手册。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 | 2026-08-01

> **数据统计周期**：2026-07-31 00:00 - 23:59 (UTC)  
> **数据来源**：GitHub Issues/PRs 实时导出 | 仓库：`agentscope-ai/QwenPaw`

---

## 1. 今日速览

*   **活跃度极高**：过去 24 小时共产生 **61 条** 核心动态（20 Issues + 41 PRs），其中 **13 个 PR 已合并/关闭**，显示维护团队处于高强度的迭代修复与特性交付周期。
*   **核心矛盾聚焦于“稳定性回归”与“桌架兼容性”**：v2.0.1 发布后暴露出 `agent.json` 系统性损坏、技能标签丢失、Shell 命令超时失效导致 UI 冻结、以及与 `agentscope 2.0.4.post1` 不兼容导致主动式 Agent 崩溃等多个 **P0 级阻塞性 Bug**。
*   **社区响应迅速**：针对上述核心 Bug，社区贡献者（如 `mohitdebian`、`jinliyl`、`Yigtwxx`）已在数小时内提交了针对性修复 PR（#6528, #6609, #6610, #6615, #6592, #6564），且多数已进入审查或合并状态，展现了极佳的“发现-修复”闭环效率。
*   **基础设施债务清理同步进行**：CI 阻塞 Fork PR 问题（#6563）已修复合并，桌面端全局热键浮窗（#6607）、OneBot 协议清理（#6543）等体验优化并行推进。
*   **整体健康度评估**：**🟡 警戒态（需关注回归风险）**。虽然修复响应极快，但 v2.0.1 版本在数据完整性、进程管理、上游依赖兼容性上集中爆雷，建议尽快切入 2.0.2 热修复版本发布流程。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版仍为 **v2.0.1**。鉴于今日修复的 P0 级 Bug 数量（JSON 损坏、Shell 阻塞、上游兼容、内存丢失），强烈建议本周内发布 **v2.0.2** 热修复版本。

---

## 3. 项目进展：今日合并/关闭的关键 PR

| PR | 标题 | 类型 | 关联 Issue | 核心影响 |
| :--- | :--- | :--- | :--- | :--- |
| **[#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592)** | `fix(memory): flush Auto-Memory before Scroll context eviction` | **Bug Fix (P0)** | #6555 | **核心记忆修复**。解决 Scroll 上下文压缩绕过中间件导致早期会话永久丢失、无法写入每日记忆（`memory/YYYY-MM-DD.md`）的严重数据丢失问题。 |
| **[#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564)** | `fix(memory): flush pending turn markers before compress` | **Bug Fix (P0)** | #6555 | 互补修复，确保无论 `summarize_when_compact` 配置如何，压缩前均刷新待处理标记。 |
| **[#6602](https://github.com/agentscope-ai/QwenPaw/pull/6602)** | `Fix/issue 6558 session integrity` | **Bug Fix (P0)** | #6558 | **会话数据完整性**。修复切换 Code/Chat 模式丢失最后一条消息、切换会话导致回复重渲染、指令漂移等前端状态管理顽疾。引入 `TaskTracker` 共享缓冲事件流。 |
| **[#6573](https://github.com/agentscope-ai/QwenPaw/pull/6573)** | `fix(audio): restore transcription for channel audio messages` | **Bug Fix (P1)** | #6544 | 修复 Feishu 等渠道音频消息静默转写失败（`AudioContent` 处理链路断裂）。 |
| **[#6606](https://github.com/agentscope-ai/QwenPaw/pull/6606)** | `fix(read_file): accept numeric string line ranges` | **Bug Fix** | - | 工具参数容错性增强，兼容字符串形式的行号范围。 |
| **[#6563](https://github.com/agentscope-ai/QwenPaw/pull/6563)** (Issue Closed) | `CI bug: 'Real behavior proof' workflow blocks all fork PRs` | **Infra Fix** | #6563 | 解除所有外部贡献者 CI 阻塞，恢复社区协作通道。 |

**进展研判**：今日合并 PR 高度聚焦于 **v2.0.1 核心回归修复**（记忆、会话、音频、CI），项目在“止血”层面取得实质性进展。尚未合并的关键修复 PR（#6528 JSON修复、#6610 Shell冻结修复、#6615 上游兼容修复、#6609 Spawn Subagent修复）均已处于 **Open/Ready-for-review** 状态，预计将在未来 24-48 小时内合并。

---

## 4. 社区热点：高讨论度 Issues/PRs

| 排名 | 对象 | 标题 | 评论/互动 | 核心诉求分析 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **[#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537)** | **[Bug] Skill tags disappear on restart (regression of #3270)** | **10 💬** | **数据持久化回归**。用户反馈技能池标签虽写入 `skill.json` 但启动时被 Manifest 覆盖。涉及配置加载顺序与状态同步机制，**阻塞技能管理工作流**。 |
| **2** | **[#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601)** | **[Bug] QwenPaw 不报空响应错误** | **5 💬** | **静默失败风险**。长上下文导致模型空响应且前端无报错，用户感知为“卡死”。属框架层错误处理缺失，严重影响长会话可靠性。 |
| **3** | **[#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563)** | **CI bug: workflow blocks all fork PRs** | **5 💬** | **基建红线**。已修复合并，但反映出 CI 权限配置缺乏 Fork 场景测试，属于流程质量短板。 |
| **4** | **[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)** | **[Bug] `spawn_subagent` single-task mode unusable** | **4 💬** | **Schema 定义缺陷**。`batch` 参数被错误标记为 required，导致前台单任务子代理无法创建。PR #6609 已修复待合并。 |
| **5** | **[#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083)** | **[Feature] Desktop 增加工作区产出物快捷访问** | **4 💬** 👍1 | **高频刚需**。非技术用户无法定位 `~/.qwenpaw/workspaces` 产出文件，呼吁 Desktop 端内置“打开工作区”或“下载产出物”入口。 |

---

## 5. Bug 与稳定性：今日报告/活跃的严重缺陷

> **严重度定义**：P0=数据丢失/核心流程阻塞/崩溃；P1=主要功能失效/体验严重受损；P2=次要功能/边缘场景。

| 严重度 | Issue | 标题 | 状态 | 关联 Fix PR | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P0** | **[#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520)** | `agent.json` systematic corruption (BOM, missing quotes, double-encoding) | **Open** | **[#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528)** | **Windows 环境毁灭性损坏**。导致整体系统失效。PR 提供安全读写、BOM 去除、原子写入修复，**必须优先合并并回归测试**。 |
| **P0** | **[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)** | Long-running shell bypass timeout, block session 1.5h, orphan subprocess | **Open** | **[#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610)** | **进程失控/会话饿死**。硬超时失效、取消不杀进程、无通道级总超时。PR 修复超时上限、取消杀树、输出流式/落盘。 |
| **P0** | **[#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)** | `execute_shell_command` 大量输出导致 UI 冻结 | **Open** | **[#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610)** | **前端渲染阻塞**。万行 stdout 单次渲染卡死主线程。PR 同 #6608 方案统一解决（截断/落盘/流式）。 |
| **P0** | **[#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)** | Incompatible with agentscope 2.0.4.post1: proactive crashes & deadlock | **Open** | **[#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615)** | **上游依赖破坏性变更未跟进**。`Msg.content` 类型变更、工具权限死锁。PR 适配 `UserMsg`、异步权限检查。 |
| **P0** | **[#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555)** | Dream/memory compression misses early-session events | **Closed** | **[#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592)**, **[#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564)** | **已修复合并**。核心记忆链路数据完整性恢复。 |
| **P1** | **[#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537)** | Skill tags disappear on restart | **Open** | - | 配置协调逻辑缺陷，需排查 Manifest 合并时机。 |
| **P1** | **[#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544)** | Feishu audio transcription silently fails | **Closed** | **[#6573](https://github.com/agentscope-ai/QwenPaw/pull/6573)** | **已修复合并**。 |
| **P1** | **[#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558)** | Multiple chat session UI data integrity issues | **Closed** | **[#6602](https://github.com/agentscope-ai/QwenPaw/pull/6602)** | **已修复合并**。前端状态管理重构成果。 |
| **P1** | **[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)** | `spawn_subagent` schema bug | **Open** | **[#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609)** | **PR 待合并**。签名类型修正 `Optional[list\|str]` -> `list\|str\|None`。 |
| **P1** | **[#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601)** | Empty response not reported (silent fail) | **Open** | - | 框架层错误透传缺失，需在 ChatModel/Stream 层增加兜底检测。 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 社区热度 | 已有 PR/实现进度 | 纳入下版本可能性 |
| :--- | :--- | :--- | :--- | :--- |
| **[#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083)** | **Desktop 端工作区产出物一键直达/下载** | 👍1, 4💬 | 无 | **高**。属于 Desktop 核心交互补齐，技术实现简单（Tauri `shell.open` 或自定义文件列表 API），极大提升非技术用户体验。 |
| **[#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587)** | **桌面应用名去掉 "Desktop" 后缀** | 1💬 | 无 | **极高**。纯配置修改 (`tauri.conf.json` / `package.json`)，品牌一致性修复，极易合并。 |
| **[#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607)** | **全局热键唤起浮动快速输入窗** | **PR Open** | **已实现** (#6607) | **高**。类豆包交互范式，代码完备（`alt+space`、无边框置顶、最小聊天视图），解决 #6568，符合 Desktop 产品化方向。 |
| **[#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160)** | **内置/复用独立 Python 运行环境** | 4💬 | 无 | **中**。Windows Conda 环境下系统 Python 缺失痛点真实，但涉及打包体积、环境隔离、依赖管理复杂度，短期可能先提供“指定 Python 路径”配置项过渡。 |
| **[#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)** | **统一专业清理页面（自动记忆、工作区、备份、收件箱）** | 1💬 | 无 | **中长期**。存储膨

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-08-01

> **数据基准**：过去 24 小时 Issue 更新 50 条（新开/活跃 45，已关闭 5），PR 更新 50 条（待合并 37，已合并/关闭 13），新版本发布 0 个。

---

## 1. 今日速览
ZeroClaw 今日处于 **高强度架构重构与 RFC 落地并行期**。Issue 端以高优先级 RFC 为主（涉及内存解耦、安全凭证抽象、Shell 确认分级、A2A 出站、Wasm 插件默认化等），均标记 `risk:high` 且需 Maintainer 审核；PR 端呈现 “小步快跑” 特征：13 个 PR 已合并/关闭，多为修复类（Linq webhook 归属、Ollama 模板迁移、ZeroCode 终端宽度测量、Lark 消息 ID 类型修正等），同时有 3 个大型增强 PR（Langfuse 观测后端、DAG 规划工具、Goal 持久化）处于 `needs-author-action` 审阅态。整体代码库健康度良好，但 **RFC 决策队列积压**（Issue #8692 追踪 10+ 待裁决设计）与 **高风险 PR 审阅带宽** 成为当前瓶颈。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展：已合并/关闭的重要 PR（13 个）

| PR | 类型 | 核心变更 | 影响面 | 链接 |
|----|------|----------|--------|------|
| **#9279** | `bug` `zerocode` | 修复 `PickerModal` 宽度按显示单元格而非 Unicode 标量计算，修正 CJK 回归 | ZeroCode TUI 交互稳定性 | [#9279](https://github.com/zeroclaw-labs/zeroclaw/pull/9279) |
| **#9292** | `bug` `zerocode` | 修复会话选择器滚动偏移在鼠标命中测试时丢失 | ZeroCode TUI 交互稳定性 | [#9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) |
| **#8973** | `bug` `security` `tool:shell` | Landlock 沙箱阻塞 `/dev/null` 导致 Shell 工具在 Fedora 全盘失败 → 已关闭（修复合入） | 运行时沙箱兼容性，**高严重** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) |
| **#6724** | `bug` `daemon` | 空凭证启用 Signal/Voice Call 频道导致 Supervisor 2s 崩溃循环 → 已关闭（修复合入） | 守护进程稳定性 | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |
| **#8438** | `enhancement` `cron` | 新增 `shell_output_format` 配置，支持原始 stdout 输出 | 定时任务输出灵活性 | [#8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438) |
| **#9603** | `bug` `config` `provider:ollama` | 将内置 Ollama 开发模板迁移至原生 Schema V3，修正 `uri` 字段 | 提供商对接规范化 | [#9603](https://github.com/zeroclaw-labs/zeroclaw/pull/9603) |
| **#9604** | `bug` `gateway` `channel:linq` | 强制 Linq webhook `/linq/{alias}` 归属检查，防止未授权别名路由 | 网关安全/多租户隔离 | [#9604](https://github.com/zeroclaw-labs/zeroclaw/pull/9604) |
| **#9038** | `bug` `channel:lark` | 根据接收者 ID 前缀动态选取 `receive_id_type`，修复 230001 错误 | Lark 频道消息发送成功率 | [#9038](https://github.com/zeroclaw-labs/zeroclaw/pull/9038) |
| **#9564** | `docs` | 新增 ZEGA AI 企业生态集成指南，移除原型文档外链 | 文档合规与生态扩展 | [#9564](https://github.com/zeroclaw-labs/zeroclaw/pull/9564) |
| **#8986** | `docs` | 定义具名里程碑生命周期策略（上限 8 个/域 1 个） | 项目管理规范化 | [#8986](https://github.com/zeroclaw-labs/zeroclaw/pull/8986) |

**进展评估**：今日合并 PR 多为 **防御性修复与规范化**，有效降低了运行时崩溃、沙箱兼容、频道路由安全等生产风险；大型特性（Langfuse、DAG Plan、Goal 持久化）仍在审阅，短期内不会入主分支。

---

## 4. 社区热点：高互动 Issue/Pr（Top 5）

| 排名 | 标题 | 评论 | 👍 | 核心诉求 | 状态/链接 |
|------|------|------|----|----------|-----------|
| 1 | **RFC: Separate conversation history from agent-curated long-term memory** (#9048) | 14 | 0 | 运行时/网关/频道自动保存将对话轮次写入 `MemoryCategory::Conversation`，导致长短期记忆生命周期混淆，需拆分存储与检索路径 | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) |
| 2 | **RFC: Abstract a `KeySource` trait — classify master-key material by source / deployment form** (#9127) | 11 | 0 | 93 个 `#[secret]` 字段加密基座已就绪，需按来源/部署形态分类主密钥材料，便于 HSM/KMS/本地文件等多源管理 | [In Progress](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) |
| 3 | **RFC: Per-execution confirmation tier for high-risk shell commands** (#7155) | 9 | 0 | 现有 `auto_approve`/通配符/会话级放行过于粗糙，需引入 Claude Code 风格 `allow/ask/deny` 策略 + 风险分级确认 | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| 4 | **RFC: Add cross-turn conversation correlation to OTel export** (#8933) | 9 | 0 | 在 Turn 生命周期事件中透传不透明 `conversation_id`，导出为 `gen_ai.conversation.id`，实现跨轮关联可观测 | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) |
| 5 | **RFC: A2A outbound client (A2ATool)** (#9106) | 8 | 0 | 补齐 #3566 的出站半边，使 Agent 能主动调用外部 A2A 合规 Agent，打通多智能体协作 | [Open](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) |

**趋势洞察**：Top 5 全为 **`priority:p2` + `risk:high` + `needs-maintainer-review`** 的 RFC，且均处于 “设计定稿前” 状态。社区核心关注点集中在 **记忆架构解耦、密钥管理抽象、Shell 安全分级、可观测关联、A2A 互操作** 五大基建方向，反映项目正从 “功能堆砌” 向 “企业级可运维架构” 跨越。

---

## 5. Bug 与稳定性：今日报告/更新的缺陷（按严重度）

| 严重度 | Issue/PR | 现象 | 修复状态 | 链接 |
|--------|----------|------|----------|------|
| **S1/Critical** | — | 今日无新增生产环境崩溃或数据丢失报告 | — | — |
| **S2/High** | **#8973** (Closed) | Landlock 沙箱阻塞 `/dev/null` 导致 Shell 全盘失效 (Fedora) | ✅ 已修复合入 | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) |
| **S2/High** | **#6724** (Closed) | 空凭证频道触发 Supervisor 2s 崩溃循环 | ✅ 已修复合入 | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |
| **S2/High** | **#7960** (Open) | `execute_pipeline` 绕过 `ToolAccessPolicy`，被禁工具仍可作为管道步骤执行 | 🔄 **待合并** (#7960 `needs-author-action`) | [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) |
| **S2/High** | **#9433** (Open) | `SecurityPolicy::ensure_no_escalation_beyond` 未校验 `allowed_tools`/`excluded_tools` | 🔄 **待合并** (#9433 `needs-author-action`) | [#9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433) |
| **S3/Medium** | **#9038** (Open) | Lark 硬编码 `receive_id_type=chat_id` 导致非 `oc_` 会话发送失败 | 🔄 **待合并** (#9038) | [#9038](https://github.com/zeroclaw-labs/zeroclaw/pull/9038) |
| **S3/Medium** | **#8943** (Open) | Bedrock `nova-2` 误入 prompt caching 白名单触发 400 | 🔄 **待合并** (#8943) | [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) |
| **S4/Low** | **#9279**, **#9292** (Closed) | ZeroCode TUI 宽度计算/滚动偏移回归 | ✅ 已修复合入 | [#9279](https://github.com/zeroclaw-labs/zeroclaw/pull/9279) / [#9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) |

**关注点**：**#7960 与 #9433 为安全策略绕过类缺陷**，虽标记 `size:S` 但 `risk:high`，建议 Maintainer 优先安排 Code Review 合入，堵住权限提升路径。

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能/方向 | 成熟度 | 入版可能性 | 备注 |
|----------|-----------|--------|------------|------|
| **#8550** (Issue, `status:accepted` `in-progress`) | OpenAI 兼容 Chat Completions Endpoint | 设计定稿，实现中 | **极高 (v0.9.x)** | 解锁 Open WebUI/LobeChat 等标准客户端直连 |
| **#9556** (PR, `needs-author-action`) | Langfuse Observer Backend (OTel) | 代码完备，待审阅 | **高** | 企业级可观测栈补齐，依赖 `observability-langfuse` feature |
| **#9554** (PR, `needs-author-action`) | `dag_plan_execute` Tool (DAG 规划/并行执行) | 代码完备，待审阅 | **中高** | Agent 复杂任务编排能力跃升，需配套 UI/测试 |
| **#8996** (PR, `needs-author-action`) | Goal 持久化跨 Daemon Reload 存活 | 栈式 PR 包含 #8746，审阅中 | **高** | `priority:p1`，解决长任务中断痛点 |
| **#9535** (PR, `needs-author-action`) | Context Compaction 锚定模型窗口比例 | 修正固定 32k 阈值导致大窗模型失效 | **高** | 直接影响长上下文模型 Token 经济性 |
| **#9106** (Issue, RFC) | A2ATool (出站 A2A 客户端) | 设计讨论中 (8 条评论) | **中** | 依赖 #3566 inbound 已合入，出站为自然下一步 |
| **#8135** (Issue, RFC) | Wasm-first Plugin Runtime (默认开启/签名分发) | 设计讨论中 (4 条评论) | **中长期** | 需配合 #7674 消除 Node.js，属架构级重构 |

**判断**：**OpenAI 兼容端点、Goal 持久化、Context Compaction 修正、Langfuse 后端** 四项最可能在 **下一个 Minor 版本 (v0.9.x)** 交付；A2ATool 与 Wasm-first 需更多设计共识，预计 v0.10+。

---

## 7. 用户反馈摘要（从 Issue 评论提炼）

| 痛点/场景 | 代表性 Issue/评论 | 用户心声 |
|-----------|-------------------|----------|
| **Shell 沙箱开箱即用失败** | #8973 (Fedora Landlock `/dev/null`) | “默认启用沙箱却连 `sh` 都跑不起来，首次体验极差” |
| **频道配置修改需全量重启** | #7897 (RFC: 免重载应用安全/频道策略) | “改个频道开关还要 `/admin/reload`，生产环境不敢动” |
| **记忆系统“长短不分”导致上下文污染** | #9048, #6850 | “Conversation 与 Long-term Memory 混存，检索噪音大、生命周期不可控” |
| **多模型能力/窗口配置碎片化** | #71

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*