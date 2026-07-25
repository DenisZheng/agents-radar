# OpenClaw 生态日报 2026-07-25

> Issues: 463 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-25 02:04 UTC

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

# OpenClaw 项目日报 · 2026-07-25

---

## 1. 今日速览

OpenClaw 今日呈现**高强度维护迭代态势**：过去 24 小时累计 **963 条 Issue/PR 更新**（Issue 463 条、PR 500 条），其中 **297 个 PR 已合并/关闭**，显示核心维护团队正集中精力清理积压、修复稳定性缺陷与推进小版本迭代。**零新版本发布**说明当前处于积累变更、准备下一轮发布的窗口期。社区讨论聚焦于 **会话状态恢复、上下文压缩超时、多模态/流式渲染回归、代理认证刷新、跨通道消息丢失** 等核心可靠性痛点。整体健康度：**活跃度极高、修复导向明显、技术债偿还中**。

---

## 2. 版本发布

**今日无新版本发布**。最近一次稳定版为 `2026.7.1`（见 #107220），近期有多个 `2026.7.x-beta` 预发布。下一版本预计将包含大量修复型 PR（见第 3 节）。

---

## 3. 项目进展：今日合并/关闭的重要 PR

| PR | 类型 | 核心变更 | 影响面 | 关联 Issue |
|----|------|----------|--------|------------|
| [#113450](https://github.com/openclaw/openclaw/pull/113450) | **feat/ui** | Control UI 系统通知行现渲染为 Markdown，修复斜体/代码块裸露问题 | Web UI、用户体验 | #112938 |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) | **fix/crash-loop** | 修复 2026.7.1 网关启动崩溃循环：legacy memory sidecar `meta`/`chunks` 冲突不再视为致命，与 `files` 冲突统一自动修复 | 网关启动、存储迁移 | #107220 (Issue 已关闭) |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | **feat/arch** | “Everything is a cron” 架构重构：心跳、监视器、定时自动化统一为 cron 作业，HEARTBEAT.md 迁移至作业记录 | 核心调度、可扩展性 | #110950 (Issue 已关闭) |
| [#113395](https://github.com/openclaw/openclaw/pull/113395) | **fix/auth** | Anthropic OAuth Token 在过期前 5 分钟窗口内主动刷新，解决预过期窗口静默失效 | 认证、长时会话 | #103846 |
| [#112416](https://github.com/openclaw/openclaw/pull/112416) | **fix/compaction** | Safeguard 模式压缩时注入 agent 的 `streamFn`，修复 OpenRouter 等供应商流式中断 | 上下文压缩、流式输出 | — |
| [#113162](https://github.com/openclaw/openclaw/pull/113162) | **fix/mcp** | 兼容 JSON Schema 2020-12 `oneOf` 根类型的 MCP 工具定义，不再直接拒绝 | MCP 生态兼容性 | — |
| [#112464](https://github.com/openclaw/openclaw/pull/112464) | **fix/media** | Windows 路径含空格时 `MEDIA:<path>` 不再拆分为多项，修复媒体发送失败 | 跨平台、媒体传输 | — |
| [#113164](https://github.com/openclaw/openclaw/pull/113164) / [#113168](https://github.com/openclaw/openclaw/pull/113168) | **fix/text** | 推理标签自闭合/代码块反引号匹配逻辑修正，防止可见文本被误吞或推理标签泄露 | 消息渲染、推理内容隔离 | #112906 |
| [#112631](https://github.com/openclaw/openclaw/pull/112631) | **fix/cli** | `openclaw uninstall` 现同步清理 Shell 补全代码块（bash/zsh/fish/PowerShell） | 卸载体验、环境卫生 | #112625 |
| [#112452](https://github.com/openclaw/openclaw/pull/112452) | **fix/hooks** | Gmail Watcher 关闭时递归杀死 `gog` 进程树，避免凭据助手等子进程残留 | 资源清理、后台任务 | #106612 |
| [#112717](https://github.com/openclaw/openclaw/pull/112717) | **fix/gateway** | 关闭时不再对 exec/file 类 SecretRef 误报 “unresolved” 警告 | 运维噪音、密钥管理 | #112681 |
| [#113096](https://github.com/openclaw/openclaw/pull/113096) | **fix/configure** | 配置向导探测网关时忽略空 `OPENCLAW_GATEWAY_TOKEN/PASSWORD` 环境变量，改读配置文件 | 首次配置、容器部署 | — |
| [#112851](https://github.com/openclaw/openclaw/pull/112851) / [#112844](https://github.com/openclaw/openclaw/pull/112844) / [#112905](https://github.com/openclaw/openclaw/pull/112905) | **fix/proxy** | Venice / Kilocode / OpenRouter 模型发现现遵循 `HTTPS_PROXY/HTTP_PROXY`，代理环境不再静默回退静态目录 | 企业网络、模型发现 | — |
| [#113106](https://github.com/openclaw/openclaw/pull/113106) / [#113109](https://github.com/openclaw/openclaw/pull/113109) | **fix/tts** | Xiaomi / Volcengine TTS 拒绝非法 Base64 音频载荷，避免静默解码产生损坏音频 | 多模态、音频质量 | — |
| [#113176](https://github.com/openclaw/openclaw/pull/113176) | **fix/googlechat** | `NO_PROXY=""` 不再覆盖小写 `no_proxy`，Google Chat 认证代理旁路恢复生效 | 企业代理、Google Chat | — |
| [#110397](https://github.com/openclaw/openclaw/pull/110397) | **fix/gateway** | 配置热重载合并写入时保留 `restart intent`，避免重启意图丢失 | 网关可用性、滚动更新 | #105623 |
| [#103148](https://github.com/openclaw/openclaw/pull/103148) | **fix/sessions** | 严格校验 `parentSessionKey` 所有权，防止跨插件会话越权读取/派生 | 安全边界、多租户 | — |
| [#95333](https://github.com/openclaw/openclaw/pull/95333) | **fix/contract** | 引入可信入站装饰契约，消费方可无伪造风险地去重/摘要 | 会话导入、UI 渲染、审计 | #95279 |
| [#113419](https://github.com/openclaw/openclaw/pull/113419) | **feat/channel** | 新增 **Buzz** 原生通道插件，支持在现有网关接入 Buzz 房间 | 生态扩展、新通道 | — |

**进展评估**：今日合并 PR 以 **修复类（~70%）** 为主，覆盖崩溃恢复、认证刷新、代理兼容、流式渲染、跨平台路径、资源清理、安全边界等关键路径；新增 **Buzz 通道** 与 **cron 统一架构** 两项结构性功能。项目在 “稳定性 → 可用性 → 扩展性” 三层均有实质推进。

---

## 4. 社区热点：讨论最活跃的 Issues（按评论数 & 👍）

| Issue | 状态 | 评论 | 👍 | 核心诉求 | 关联 PR/进展 |
|-------|------|------|----|----------|--------------|
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | OPEN | 16 | 1 | **会话第 2 条消息失败**：“reply session initialization conflicted”，跨通道、位置相关 | 无直接 PR，疑与会话恢复/锁竞争相关 |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | OPEN | 14 | 2 | **Active Memory + Codex 路径**导致长延迟、Hook 超时、启动中止、事件循环卡顿 | 需产品决策、维护者审查，标记 🦞 diamond lobster |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | OPEN | 14 | 2 | **原生 Anthropic 路径**：历史 `thinking` 块重放导致长工具链永久报错 `Invalid signature` | #92231 部分修复，但 #94536 指出第二例仍失败 |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | OPEN | 13 | 3 | **180s 压缩超时**为整条管道单一墙钟，无部分进度复用，合法长压缩每轮必失败 | P1、🦞 diamond lobster，需维护者决策 |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | OPEN | 10 | 2 | **上下文膨胀**：Bootstrap 文件每轮重复注入，浪费 20-30% Token | 长期 P2，🦞 diamond lobster，无 PR |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | OPEN | 10 | 4 | **文件系统沙箱配置** `tools.fileAccess` 需求，安全合规刚需 | 需安全审查、产品决策，🦞 diamond lobster |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | OPEN | 10 | 

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-07-25）

---

## 1. 生态全景

当前生态呈现**“头部项目深度巩固、腰部项目差异化突围、长尾项目低频维护”**的三层结构。OpenClaw、NanoBot、Hermes Agent、LobsterAI、IronClaw 等头部项目日均 PR 合并数超 15 个，集中攻坚**稳定性（会话恢复、流式渲染、跨平台编码）、安全加固（签名、IPC 隔离、依赖漏洞）、企业级就绪（多租户、审计、代理兼容）**，技术债偿还比例高达 70% 以上。腰部项目（PicoClaw、ZeptoClaw、Moltis、CoPaw）聚焦**通道能力补齐（Telegram/QQ/Slack/Zalo 流式、富交互）、垂直场景深耕（PawApp 插件 UI、Slack Block Kit、Computer Use）**。整体生态已从“功能竞赛”转入**“生产可用性、安全合规、多模态交互体验”**的质量决战期，版本发布节奏放缓但单版本含金量显著提升。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 (新/关) | PR 活动 (开/合并/关) | Release 今日 | 核心动作关键词 | 健康度评估 |
|------|---------------------|----------------------|--------------|----------------|------------|
| **OpenClaw** | 463 / ~297 (含合并) | 500 / 297 合并 | 无 (积累期) | 崩溃修复、认证刷新、代理兼容、cron 架构统一、Buzz 通道 | 🟢 **极高活跃·修复导向·技术债偿还中** |
| **NanoBot** | 2 / ~20 | ~20 / 20 合并 | **v0.3.0 RC** (0.2.2→0.3.0) | Subagent 内联、WebUI 首屏重构、SVG 品牌化、Ollama KV Cache 修复 | 🟢 **发布冲刺期·架构解耦与体验打磨并行** |
| **Hermes Agent** | 50 / 18 | 50 / 8 合并 | 无 (v0.19.0 后补丁期) | Windows 编码/签名/数据库损坏修复、TTS 队列、Gateway 重连 | 🟡 **高并发维护·Windows 兼容性硬仗·数据安全隐患** |
| **LobsterAI** | 19 / ~43 | ~43 合并 | **v2026.7.23** 已发 | Windows 签名/自愈、Cowork 诊断导出、Scheduled Task 路由、安全审计三件套 | 🟢 **版本刚发·安全债高优先·Stale 积压需清理** |
| **IronClaw** | 32 (26新) / 6 | 50 / 19 合并 | 无 (v1.0.0-rc.8) | Reborn 架构重构、能力诊断、WebUI 代码分割、Bug Bash 暴露 P1 交付缺陷 | 🟢 **v1 冲刺·架构级 Epic 推进·集成通道稳定性待补** |
| **PicoClaw** | 3 (1新/2关) / 2关 | 8 / 7 合并 | 无 | i18n 补全、MQTT TLS/OAuth 安全、字符串性能优化、Discord/QQ 流式、前端 CPU 修复 | 🟢 **维护冲刺·安全性能双管齐下·前端回归阻断级** |
| **NanoClaw** | 0 / 0 | 7 (6开/1关) | 无 | Agent Runner 静默修复、OpenCode 兼容、Group 时区、MCP 上报、模板上下文 | 🟢 **核心团队主导·企业级就绪·积压 PR 审查吞吐待提升** |
| **CoPaw (QwenPaw)** | 50 (28新/22关) | 36 (22开/14合) | **v2.0.1 稳定版** + beta.3 | PawApp 平台(SDK+看板)、Scroll 分阶段压缩、Zalo 渠道、Tools Batch 编排 | 🟢 **生态跃迁期·性能回归/隐私泄露为 P0 坑位** |
| **ZeptoClaw** | 2 / 0 | 2 (1合/1审) | 无 | Telegram 流式编辑、子进程密钥清洗/树回收、依赖漏洞清零 | 🟡 **核心团队内推·安全基线硬指标·外部可见度低** |
| **Moltis** | 0 / 0 | 2 (开) / 0 合 | 无 | Slack 确认反应/Block Kit/重连监管/提前 ACK 修复 (堆叠 PR) | 🟡 **单人核心开发·功能攻坚期·社区参与度近零** |
| **NullClaw / TinyClaw** | 无活动 | 无活动 | 无 | — | ⚪ **休眠/低频维护** |
| **ZeroClaw** | 数据获取失败 | — | — | — | ❓ **状态未知** |

> **指标说明**：OpenClaw/NanoBot/Hermes 数据含 Issue/PR 评论更新；其余多为实质开关合并数。健康度综合考量“合并率、关键路径覆盖、发布节奏、社区响应”。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类头部对比 (NanoBot/IronClaw/LobsterAI) | 定位结论 |
|------|----------|---------------------------------------------|----------|
| **社区规模** | 日均 963 条更新、297 合并 PR，**量级碾压** (第二名 NanoBot ~20 合并) | NanoBot/IronClaw/LobsterAI 合并数在 15-43 区间 | **绝对核心枢纽**，承担生态基础设施（网关、会话、通道抽象）演进重任 |
| **技术路线** | **“网关中心 + 插件化通道 + 会话即数据库”**重架构 (cron 统一、Everything is a job) | NanoBot：Agent Loop + Provider 抽象 + WebUI 优先；IronClaw：Actor/Extension Host + Reborn 存储分层；LobsterAI：Electron + OpenClaw 内核 + IM 深度集成 | **最激进的平台化架构**，牺牲短期易用性换取长期可扩展性与多租户隔离 |
| **优势领域** | 通道生态广度 (Buzz 新增)、会话状态恢复工程化、上下文压缩管线、企业代理/认证合规、跨平台路径修复 | NanoBot：移动端 WebUI/本地模型性能；IronClaw：错误可恢复性契约/测试平台；LobsterAI：企业 IM/协作/Windows 分发 | **基建完备度最高**，是下游发行版（LobsterAI、PicoClaw 等）的上游稳定源 |
| **劣势/风险** | 架构复杂度导致回归风险高 (会话冲突、压缩超时)、文档滞后、贡献者门槛极高 | 同类项目各有短板，但单体复杂度相对可控 | **需警惕“内核过重”拖累创新速度**，模块化解耦 (如 cron 统一) 方向正确但落地周期长 |

---

## 4. 共同关注的技术方向 (跨项目高频诉求)

| 技术方向 | 涉及项目 (具体 Issue/PR) | 核心诉求细节 |
|----------|---------------------------|--------------|
| **会话/状态持久化与恢复** | **OpenClaw** (#102020 冲突、#94228 thinking 重放)、**Hermes** (#68474 state.db 零填充、#70586 重打开失败)、**NanoBot** (#4064 Pending Context 丢失)、**CoPaw** (#6323 Scroll 分阶段压缩、#5980 SSH 离线缺失) | 解决跨重启、跨设备、跨通道的会话一致性；压缩管线需支持增量/检查点/部分复用，避免 180s 墙钟超时 (OpenClaw #92043) |
| **流式渲染与多模态保真** | **OpenClaw** (#112416 streamFn 注入、#113164 推理标签)、**NanoBot** (#5073 多模态工具输出保留、#4696 打字机动画)、**PicoClaw** (#323 Discord 分片、#3201 QQ 流式缺口)、**ZeptoClaw** (#648 Telegram 渐进编辑)、**CoPaw** (#6407 ReAct tool_result 污染) | 统一“流式事件总线”抽象；Provider 层保留 image/file block 避免 Base64 序列化损耗；前端渲染需支持增量/回压/Markdown 修复 |
| **Windows/跨平台生产就绪** | **Hermes** (7+ 编码/签名/路径/Smart App Control Issue)、**LobsterAI** (#2327 签名、#2326 自愈、#2017 cfmind 缺失)、**PicoClaw** (#3247 Windows 路径空格)、**ZeptoClaw** (#645 子进程树回收 Docker) | 代码签名流水线、UTF-8/BOM 显式处理、安装器自愈、进程树管理、杀毒软件兼容 —— **已成硬性发布门槛** |
| **安全加固与供应链** | **LobsterAI** (#1831 日志脱敏、#1832 IPC 越权、#1833 openExternal 白名单)、**ZeptoClaw** (#646 quick-xml/lopdf CVE、#645 密钥清洗)、**PicoClaw** (#3246 MQTT TLS/OAuth)、**OpenClaw** (#103148 parentSessionKey 校验) | 运行时最小权限、敏感数据全链路脱敏、依赖漏洞零容忍、插件/子进程隔离 —— **合规驱动成主流** |
| **企业级通道与集成** | **IronClaw** (Slack/Telegram/Sheets P1 Bug Bash)、**LobsterAI** (WeCom/钉钉/微信 Scheduled Task)、**PicoClaw** (QQ/Telegram/Discord 对齐)、**NanoBot** (Zalo/Weixin 微信流式)、**CoPaw** (Zalo Bot)、**Moltis** (Slack Block Kit/重连) | 从“能连通”到“可观测、可重试、富交互 (Block Kit/Modal)、多租户隔离”；OAuth/重定向 URI 托管化配置成共性痛点 |
| **Agent 编排与子任务** | **NanoBot** (#5074 Subagent wait=true、#5075 授权策略)、**OpenClaw** (cron 统一心跳/监视器)、**CoPaw** (#5698 Tools Batch 编排、#6459 SQLite 持久化)、**IronClaw** (#6530 预终止警告轮次) | 标准化“Spawn/Wait/Authorize/Checkpoint”原语；长任务需可中断/可恢复/可审计；并发预算与工具预算显式化 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户/场景 | 架构关键差异 | 典型护城河 |
|------|----------|---------------|--------------|------------|
| **OpenClaw** | **通用 AI 基础设施内核** | 平台方、二次开发者、企业私有化部署 | 网关中心化、会话即 KV 存储、插件化通道/工具/模型、cron 统一调度 | 通道广度最大、协议兼容最深、上游标准制定者 |
| **NanoBot** | **极致本地体验的桌面/移动端 Assistant** | 个人开发者、本地模型爱好者、移动端重度用户 | Agent Loop 核心、Provider 统一抽象、WebUI 单页应用优先、SVG 资产零依赖 | 移动端交互打磨、Ollama/KV Cache 性能调优、PawApp 式插件 UI 探索 |
| **Hermes Agent** | **语音优先、桌面原生的自主智能体** | 语音交互场景、Windows 桌面用户、TTS/STT 集成需求 | TTS/Pipeline 深度定制、Gateway 热插拔、Skills Hub 生态 | 同步 TTS 批量播放、流式 PCM 对齐、语音交互延迟优化 |
| **IronClaw** | **可验证、可恢复的企业级 Agent Runtime** | 企业自动化、合规要求高、需审计追溯场景 | Actor 模型 + Extension Host、Reborn 存储分层、Hermetic Testing Platform、ModelDiagnostic 契约 | 错误可恢复性契约、能力覆盖率语义化测试、Skill 自我进化架构 |
| **LobsterAI** | **企业 IM 深度融合的协作型 AI 助手** | 企业内部部署、钉钉/飞书/企微/微信生态、协作办公 | Electron + OpenClaw 内核、Cowork 多用户会话、Scheduled Task 定时引

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-07-25

> 数据范围：2026-07-24 至 2026-07-25（UTC） | 来源：GitHub HKUDS/nanobot

---

## 1. 今日速览

*   **极高活跃度，冲刺 v0.3.0 发布**：过去 24 小时合并/关闭 **20 个 PR**，新开/活跃 **2 个 Issue**，呈现典型的**发布前冻结与收尾阶段**特征。
*   **核心里程碑**：`#5081` 准备发布 **v0.3.0**（版本号从 0.2.2 跳升至 0.3.0），标志着架构重构与 WebUI 交互体验大版本迭代落地。
*   **架构解耦与体验打磨并行**：合并 PR 涵盖 **Agent 核心逻辑重构**（Subagent 内联咨询、授权任务传递、多模态工具输出保留）、**WebUI 首次启动体验重构**（桌面安装器直达 WebUI、预设切换交互、响应式布局）、**品牌资产矢量化（SVG）** 及 **Provider 层稳定性修复**（Ollama 缓存前缀、xAI Search 活动呈现、Weixin 流式传输）。
*   **技术债清理果断**：撤销了过时的 Pending Message 上下文修复 (`#5072` Revert `#4665`)，将遗留迁移 TODO 显式锚定至 v0.2.4 (`#5053`)，展现良好的发布工程纪律。
*   **社区反馈聚焦性能与易用性**：关闭的高热 Issue `#4867` 确认解决 Ollama 本地推理“每轮额外 60s” 的性能痛点；`#4637` 修复 Telegram 长消息分片渲染缺陷。

---

## 2. 版本发布

**🚀 v0.3.0 发布候选 (Release Candidate) - PR `#5081`**

*   **版本跨度**：`0.2.2` → `0.3.0` (Minor 版本跃升，暗示含破坏性变更或重大特性集)
*   **核心变更摘要**：
    *   **WebUI 入口重构**：桌面安装器默认启动 WebUI 设置向导，而非终端向导（保留 TTY/Headless 兼容）。
    *   **Composer 交互升级**：模型预设长按垂直拖拽切换，修复移动端遮挡与布局压缩问题。
    *   **Agent 行为策略调整**：明确“用户明确请求即授权执行”，仅对不可逆操作保留确认；引入 Subagent 内联咨询 (`wait=true`)。
    *   **多模态工具输出保真**：Provider 层保留图片/文件 Block，避免 Base64 序列化为无效 JSON 文本。
    *   **品牌资产全面矢量化**：README、WebUI Sidebar、Favicon 统一使用 SVG Logo。
    *   **流式 Markdown 渲染体验**：引入 rAF 调度器、打字机动画、代码块平滑显现 (`#4696` 仍在审核中，但属于同期体验提升线)。
*   **⚠️ 破坏性变更与迁移提示**：
    *   移除遗留 `maxMessages` 配置兼容层、旧版 Channel 入口点警告（锚定至 v0.2.4 清理，`#5053`）。
    *   撤销基于旧架构的 Pending Message Runtime Context 修复 (`#5072`)，依赖该行为的自定义扩展需适配新 `RuntimeContextProvider`。
    *   默认不再向模型暴露 Channel/Chat ID/Sender ID 信封（`f75d3519`），仅保留 Goal/CLI App/MCP 可选上下文。

---

## 3. 项目进展：今日合并/关闭的关键 PR (20 个)

| 领域 | PR | 标题 | 核心推进内容 | 影响面 |
| :--- | :--- | :--- | :--- | :--- |
| **Release** | [#5081](https://github.com/HKUDS/nanobot/pull/5081) | **chore(release): prepare v0.3.0** | 版本号跃升，Composer Badge 自适应宽度，预设切换器保留。 | 全局 |
| **Agent Core** | [#5074](https://github.com/HKUDS/nanobot/pull/5074) | **feat(agent): support inline subagent consultation** | `spawn` 工具新增 `wait` 参数，支持同步等待子 Agent 结果，计入并发限制。 | **核心架构/编排** |
| | [#5075](https://github.com/HKUDS/nanobot/pull/5075) | **feat(agent): carry authorized tasks through verification** | 明确授权语义：编码/产出类任务直通执行验证，仅不可逆操作需确认。 | **Agent 策略/交互** |
| | [#5073](https://github.com/HKUDS/nanobot/pull/5073) | **fix(providers): preserve multimodal tool outputs** | OpenAI Responses 转换时保留 `image`/`file` Block，修复 Base64 序列化丢失。 | **Provider/多模态** |
| | [#5049](https://github.com/HKUDS/nanobot/pull/5049) | **fix(agent): deliver non-streamed finalization responses** | 修复非流式模式下最终响应被错误抑制的回归问题 (`#2365` 遗留逻辑)。 | **稳定性/回归修复** |
| **WebUI / UX** | [#5078](https://github.com/HKUDS/nanobot/pull/5078) | **feat: launch first-time setup in webui** | **重大交互变更**：桌面安装器直达 WebUI 设置页，Gateway 保持 Setup 模式直到配置模型。 | **首用户体验/分发** |
| | [#5077](https://github.com/HKUDS/nanobot/pull/5077) | **feat(webui): switch model presets from the composer** | Composer 显示预设标签，支持长按拖拽循环切换，移动端 Dock 式交互。 | **核心交互/移动端** |
| | [#5060](https://github.com/HKUDS/nanobot/pull/5060) | **fix(webui): polish responsive layouts and settings search** | 移动端 Settings 抽屉化，问候语/Composer 单行压缩，语义保留。 | **响应式/无障碍** |
| | [#5031](https://github.com/HKUDS/nanobot/pull/5031) | **fix(webui): avoid mobile welcome composer overlap** | Welcome 页 Grid 分行，软键盘弹出时允许滚动，回归测试覆盖。 | **移动端体验** |
| | [#5071](https://github.com/HKUDS/nanobot/pull/5071) | **fix(webui): show quoted context after follow-up send** | 引用上下文专用 Marker 渲染，区分手动 `>` 与选中引用，校验载荷大小。 | **交互细节** |
| | [#4963](https://github.com/HKUDS/nanobot/pull/4963) | **feat(webui): polish agent output and app discovery** | 统一 Activity Language（推理/工具/文件/记忆/MCP/子Agent等），Streamdown 渲染修复部分 Markdown。 | **可观测性/日志** |
| | [#5076](https://github.com/HKUDS/nanobot/pull/5076) | **fix(webui): honor custom gateway port with Vite** | Vite Dev 模式下正确代理自定义端口 WebSocket，回归测试。 | **开发体验/配置** |
| **Brand/Assets** | [#5080](https://github.com/HKUDS/nanobot/pull/5080) / [#5079](https://github.com/HKUDS/nanobot/pull/5079) | **feat(brand): migrate README and WebUI assets to SVG** | 移除 PNG Cover/Logo，全链路 SVG（~5KB），无字体依赖，Favicon 复用。 | **品牌/性能/维护** |
| **Channels/Providers** | [#4567](https://github.com/HKUDS/nanobot/pull/4567) | **fix(weixin): stream LLM calls + buffer reply delivery** | 修复 `WeixinConfig` 缺失 `streaming` 字段导致强制非流式，规避上游 Relay 丢 `tool_use` 字段 Bug。 | **微信渠道/稳定性** |
| | [#5050](https://github.com/HKUDS/nanobot/pull/5050) | **feat(xai): surface hosted X Search activity** | xAI `x_search` 生命周期事件结构化透出，WebUI 渲染 `Searching X / Searched X` 活动。 | **Provider 生态/可观测** |
| **Chore/Deps** | [#5053](https://github.com/HKUDS/nanobot/pull/5053) | **chore: pin migration TODOs to v0.2.4** | 显式锚定遗留清理截止版本，避免 v0.2.3 提前移除兼容层。 | **发布工程/向后兼容** |
| | [#5072](https://github.com/HKUDS/nanobot/pull/5072) | **Revert "fix: preserve pending message runtime context"** | 撤销 `#4665`（基于预 `RuntimeContextProvider` 架构），避免引入陈旧逻辑。 | **架构整洁度** |
| | [#4637](https://github.com/HKUDS/nanobot/issues/4637) | **CLOSED: Telegram long message splits render fix** | 修复 Markdown 长消息分片发送时，非最后分片渲染失败问题。 | **Telegram 渠道** |

> **整体进度评估**：v0.3.0 核心功能冻结，**Agent 编排能力（Subagent/授权策略）、WebUI 首屏与移动端体验、Provider 多模态保真、品牌资产现代化** 四大支柱全部落地。剩余 `#4696` (流式 Markdown 动画) 为体验锦上添花项，不阻塞发布。

---

## 4. 社区热点

| 排名 | Item | 类型 | 互动量 | 核心诉求分析 | 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Issue (Enhancement) | **23 评论** 🔥 | **Ollama 本地推理性能灾难**：每轮额外 60s 延迟导致 32GB 显存下不可用。根因：Prompt Prefix 未保持精确导致 KV Cache Miss。用户极度渴望本地模型“极速体验”。 | **CLOSED** (已修复合并，极大缓解社区痛点) |
| **2** | [#4064](https://github.com/HKUDS/nanobot/issues/4064) | Issue (Bug) | **1 👍, 1 评论** | **Pending Message 上下文丢失**：中途排队消息注入时缺失 Sender/Channel/Chat Runtime Context，导致下游逻辑（如权限、路由）失效。关联 `#5072` Revert，说明修复方案随架构重构作废，需基于新 `RuntimeContextProvider` 重做。 | **OPEN** (高优先级架构债) |
| **3** | [#4858](https://github.com/HKUDS/nanobot/issues/4858) | Issue (Refactor, P2) | **2 评论** | **MCP 生命周期耦合 AgentLoop**：`_mcp_servers` 等状态泄露至核心循环，阻碍动态 Tool Provider 抽象化。维护者 `chengyongru` 主导，属于架构治理主动项。 | **OPEN** (进行中/规划中) |
| **4** | [#4696](https://github.com/HKUDS/nanobot/pull/4696) | PR (Feature) | 长期更新 | **WebUI 流式 Markdown “打字机” 体验**：rAF 调度、回压追赶、标点停顿、左→右尾部动画。代表团队对“流式感知质量”极致追求。 | **OPEN** (Review 中，v0.3.0 后可能合并) |
| **5** | [#4383](https://github.com/HKUDS/nanobot/pull/4383) | PR (Enhancement) | 长期更新 | **Globalping MCP Preset**：引入全球分布式网络测量能力（Ping/Traceroute/DNS/HTTP）。扩展 Agent “联网工具箱”边界。 | **OPEN** (冲突标记，需 Rebase/解决冲突) |

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 标题 | 根因/现象 | 修复状态 | 关联 PR |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (性能/可用性)** | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Ollama 每轮 +60s 延迟 | Prompt Prefix 变动导致 KV Cache 失效 | ✅ **已修复并关闭** | 隐含在 v0.3.0 变更中 |
| ** **🔴 Critical (回归/功能缺失)** | [#5049](https://github.com/HKUDS/nanobot/pull/5049) | 非流式最终响应未投递 | 流式抑制逻辑错误套用至非流式分支 | ✅ **已修复合并** | `#5049` |
| **🟠 High (渠道功能破坏)** | [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram 长消息分片渲染失败 | 分片发送时非尾分片 Markdown 解析/渲染中断 | ✅ **已修复关闭** | 隐含修复 |
| **🟠 High

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-25

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时内 Issues 与 PR 各更新 50 条，呈现「高并发维护」态势。Issue 关闭率 36%（18/50），PR 合并/关闭率 16%（8/50），说明团队正集中清理积压缺陷而非推新功能。  
- **Windows 兼容性成核心战场**：Top 30 Issues 中 ≥10 条直接涉及 Windows 平台（编码、签名、安装、路径、Smart App Control），且多为 P1/P2 严重级，反映桌面端在中文/非英语环境下的生产可用性仍存缺口。  
- **编码/UTF-8 问题集中爆发**：`memory_tool`、`skills_hub`、`.env`、配置读取、cron stdout 等 7 处独立代码路径同现「未显式指定 encoding 或未处理 BOM」缺陷，提示需建立统一文件读写规范与 CI 守门。  
- **会话/状态持久化风险上升**：`state.db` 被零填充（#68474）、`async_delegation_complete` 导致会话无法重打开（#70586）、steer 元数据丢失（#61013）等问题指向会话生命周期管理的脆弱性。  
- **零新版本发布**：当前处于 v0.19.0 后的补丁密集期，预计近期将切 v0.19.1 或 v0.20.0-rc。

---

## 2. 版本发布

> 今日无新 Release。最近一次发布为 v0.19.0（未在数据中给出确切时间），当前主分支累积 8 个已合并 PR 与 18 个已关闭 Issue，具备小版本发布条件。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心变更 | 影响面 |
|----|------|----------|--------|
| [#70535](https://github.com/NousResearch/hermes-agent/pull/70535) | **Bug Fix (TTS)** | 同步 TTS 提供商改走整段批量播放路径，避免句级暂停 | CLI 语音输出流畅度 |
| [#70601](https://github.com/NousResearch/hermes-agent/pull/70601) | **Bug Fix (TTS)** | 引入单工作线程队列串行化批量 TTS 播放，消除音频重叠 | 语音输出稳定性 |
| [#70851](https://github.com/NousResearch/hermes-agent/pull/70851) | **Bug Fix (TTS)** | 流式 PCM 块携带剩余字节对齐到 int16 帧边界，修复 `numpy.frombuffer` 报错 | OpenAI PCM 流式 TTS 可用性 |
| [#70497](https://github.com/NousResearch/hermes-agent/pull/70497) | **Bug Fix (CLI)** | 禁用 Token 流式时才注入 TTS 句子回调，防止重复渲染 | CLI 显示一致性 |
| [#71134](https://github.com/NousResearch/hermes-agent/pull/71134) | **Bug Fix (Gateway)** | 平台致命错误重试队列入队前移至 `disconnect()` 之前，防适配器丢失 | 网关平台自动重连可靠性 |
| [#71133](https://github.com/NousResearch/hermes-agent/pull/71133) | **Bug Fix (Gateway)** | 外层 busy-slot 释放按 run-generation 守卫，修复 `/stop` 后紧跟消息导致的槽位泄漏 | 会话并发控制正确性 |
| [#71123](https://github.com/NousResearch/hermes-agent/pull/71123) | **Bug Fix (Sessions)** | `sessions export --delete-after-verified` 先导出并校验所有 delegate 子会话，再级联删除 | 数据完整性，防误删子会话 |
| [#71128](https://github.com/NousResearch/hermes-agent/pull/71128) | **Bug Fix (Billing)** | 无定价模型的 `estimated_cost_usd` 写 `NULL` 而非 `0`，区分「零成本」与「未知成本」 | 计费报表准确性 |

> **整体推进度**：8 个 PR 全为缺陷修复，覆盖 TTS、Gateway、Session、Billing、Config 四大子系统，显著降低回归风险，但功能增量为零。

---

## 4. 社区热点（评论/反应最多的 Issues/PRs）

| # | 标题 | 评论 | 👍 | 核心诉求 |
|---|------|------|----|----------|
| [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) | Desktop boot fails when platform adapter import or MCP registration exceeds the 15s readiness timeout | 6 | 0 | **桌面端启动超时硬编码 15s**，MCP/平台适配器多时必现，需可配置或异步化 |
| [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) | Windows bootstrap installer produces unsigned Hermes.exe blocked by Smart App Control | 5 | 1 | **安装后可执行文件未签名**，Win11 SAC 拦截，阻断企业/个人用户开箱即用 |
| [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | state.db zeroed (95MB of null bytes) during desktop update to v0.19.0 on Windows | 5 | 0 | **升级过程破坏 SQLite 数据库**，导致会话历史全丢，P1 级数据丢失风险 |
| [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) | Feature: MCP Smart Loading — Lazy Connection, Tool Budget, Per-Session Scoping | 4 | 0 | 启动时连接**所有**启用 MCP 服务器导致启动慢、工具爆炸，需懒加载/预算/会话级作用域 |
| [#69230](https://github.com/NousResearch/hermes-agent/issues/69230) | Desktop app: Remote gateway reachability check fails despite server being healthy | 3 | 0 | 桌面端可达性探测误报，可能涉及证书验证/代理/网络栈差异 |
| [#68369](https://github.com/NousResearch/hermes-agent/issues/68369) | `hermes skills check` crashes on Chinese Windows — HubLockFile.load() bare read_text() decodes UTF-8 as GBK | 3 | 0 | **中文 Windows 默认编码 GBK 导致 UTF-8 文件读取崩溃**，典型编码未显式指定 |
| [#10878](https://github.com/NousResearch/hermes-agent/issues/10878) | memory_tool _read_file does not strip BOM — invisible \ufeff enters system prompt | 3 | 0 | BOM 字符污染系统提示词，影响模型行为 |
| [#71026](https://github.com/NousResearch/hermes-agent/issues/71026) | `/insights` crashes with TypeError: unsupported operand type(s) for -: 'str' and 'int' | 3 | 0 | 计费统计中字符串与整数相减，数据清洗缺失 |

> **信号聚合**：Windows 兼容性、编码规范、启动性能、数据安全是社区当前最痛点；MCP 懒加载（[#66473](https://github.com/NousResearch/hermes-agent/issues/66473)）与 Microsoft AGT 治理集成（[#69128](https://github.com/NousResearch/hermes-agent/issues/69128)）为高呼声功能方向。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 数据丢失** | [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | Windows 升级 v0.19.0 导致 `state.db` 全零 | ❌ | 需紧急复现并加入升级前自动备份/校验 |
| **P0 启动阻塞** | [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) | 桌面端 15s 就绪超时硬编码，MCP 多必失败 | ❌ | 延长或可配置，或改为异步就绪+进度 UI |
| **P0 分发受阻** | [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) | 安装后 `Hermes.exe` 无签名，Win11 SAC 拦截 | ❌ | 需在 CI 引入代码签名流水线（EV 证书） |
| **P1 崩溃** | [#68369](https://github.com/NousResearch/hermes-agent/issues/68369) | 中文 Windows `skills check` UnicodeDecodeError | ❌ | `HubLockFile.load()` 需显式 `encoding="utf-8"` |
| **P1 崩溃** | [#69559](https://github.com/NousResearch/hermes-agent/issues/69559) | Agent 在工具调用后无限挂起（多 Provider 复现） | ❌ | 需最小复现脚本与超时/看门狗机制 |
| **P1 逻辑错** | [#71026](https://github.com/NousResearch/hermes-agent/issues/71026) | `/insights` 字符串减整数 TypeError | ❌ | `insights.py:_compute_model_breakdown` 需类型收敛 |
| **P2 编码污染** | [#10878](https://github.com/NousResearch/hermes-agent/issues/10878) | `memory_tool` 未剥离 BOM，污染系统提示词 | ❌ | 统一在读入层 `lstrip('\ufeff')` |
| **P2 编码崩溃** | [#10879](https://github.com/NousResearch/hermes-agent/issues/10879) | 非 UTF-8 `MEMORY.md` 导致 UnicodeDecodeError 且静默禁用记忆 | ❌ | `errors="replace"` + 记录警告 |
| **P2 编码崩溃** | [#38119](https://github.com/NousResearch/hermes-agent/issues/38119) | Copilot ACP fs read/write 缺显式 UTF-8 | ❌ | 补 `encoding="utf-8"` |
| **P2 配置丢失** | [#65123](https://github.com/NousResearch/hermes-agent/issues/65123) | `.env` 带 BOM 导致首个键静默丢失 | ❌ | `python-dotenv` 升级或预处理 BOM |
| **P2 文件显示异常** | [#49451](https://github.com/NousResearch/hermes-agent/issues/49451) | `read_file` 结尾换行产生幽灵空行 | ❌ | 输出去尾逻辑修正 |
| **P2 Cron 静默丢包** | [#42384](https://github.com/NousResearch/hermes-agent/issues/42384) | Windows `pythonw` + emoji stdout 全丢 | ❌ | 强制 UTF-8 编码捕获或改用 `subprocess.PIPE` 显式解码 |
| **P2 Cron 乱码** | [#42785](https://github.com/NousResearch/hermes-agent/issues/42785) | Windows 默认 cp1252 解码非 ASCII 输出 | ❌ | 同上，显式 `encoding="utf-8"` |
| **P3 会话重打开失败** | [#70586](https://github.com/NousResearch/hermes-agent/issues/70586) | `async_delegation_complete` 消息导致会话区域空白 | ✅ [#71123](https://github.com/NousResearch/hermes-agent/pull/71123) 间接相关 | 需专项修复渲染器 TypeError |
| **P3 会话导出漏删** | — | `export --delete-after-verified` 未校验子会话即级联删 | ✅ [#71123](https://github.com/NousResearch/hermes-agent/pull/71123) | 已修复待合并 |
| **P3 计费统计歧义** | — | 无定价模型成本写 0 而非 NULL | ✅ [#71128](https://github.com/NousResearch/hermes-agent/pull/71128) | 已修复待合并 |

> **修复覆盖率**：15 个高优 Bug 中仅 3 个已有 PR（均为今日新开），其余 12 个仍处裸奔状态，建议本周内建立「编码规范扫描」「Windows 兼容性矩阵」「升级数据保护」三条专项清单。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 社区热度 | 现有 PR/设计 | 入版可能性 |
|------|-------|----------|--------------|------------|
| **MCP Smart Loading**（懒连接、工具预算、会话级作用域） | [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) | 4 评论，关联 3 个前置 Issue | 无 PR，仅伞 Issue | **高** — 启动性能痛点明确，架构

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-25

---

## 1. 今日速览
- **活跃度评估：高** —— 过去 24 小时共产生 **8 个 PR 更新**（7 合并/关闭，1 待合并）与 **3 个 Issue 更新**（2 关闭，1 新开），呈现典型的“维护冲刺”特征：集中修复旧债、合并性能优化与安全加固 PR，同时快速响应新报告的前端高 CPU 占用问题。
- **核心动向**：无新版本发布；主线集中在 **国际化补全（zh-TW/捷克语）**、**安全加固（MQTT TLS/OAuth）**、**性能优化（字符串拼接/逃逸）** 以及 **Discord/QQ 流式输出** 等通道能力补齐。
- **风险点**：新开 Issue #3292 指出聊天输入框聚焦时 CPU 占用异常高，已有对应修复 PR #3293 但尚未合并，需尽快评审上线以避免用户体验劣化。
- **社区健康度**：Stale 机制有效清理了多个长期悬挂 PR/Issue，维护者响应及时；但仍有 1 个长期开放的 zh-TW 翻译 PR（#3261）等待合并，建议纳入下一版本。

---

## 2. 版本发布
> 今日无新版本发布。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 类型 | 核心变更 | 对项目推进度的影响 |
|----|------|----------|-------------------|
| [#3246](https://github.com/sipeed/picoclaw/pull/3246) | 🔒 安全/稳健性 | **MQTT 默认开启 TLS 证书验证**、**OAuth 超时保护**、**搜索读取上限** | 修复生产环境潜在中间人攻击与资源耗尽风险，属**高优先级安全债务清偿** |
| [#3245](https://github.com/sipeed/picoclaw/pull/3245) | ⚡ 性能 | `escapeXML` 从 3 次 `ReplaceAll` 降为单次 `strings.NewReplacer` | 技能加载路径分配减少 ~60%，属**微优化但覆盖面广** |
| [#3244](https://github.com/sipeed/picoclaw/pull/3244) | ⚡ 性能 | Seahorse 摘要 XML 组装同理优化，5→1 次遍历 | 长上下文压缩路径内存峰值显著下降 |
| [#3243](https://github.com/sipeed/picoclaw/pull/3243) | ⚡ 性能 | 压缩辅助函数改用 `strings.Builder` 消除 O(n²) 拼接 | 解决长会话压缩时 CPU/内存指数级增长，**关键性能修复** |
| [#323](https://github.com/sipeed/picoclaw/pull/323) | 🐞 Bug/功能 | Discord 消息按符文长度分片 + 维持 Typing 状态 | 修复 400 报错并提升交互感知，补齐 Discord 通道生产可用性 |
| [#3247](https://github.com/sipeed/picoclaw/pull/3247) | 🌐 i18n | 补全捷克语代码块换行开关翻译 | 完善非主流语言覆盖，降低国际化缺口 |
| [#3293](https://github.com/sipeed/picoclaw/pull/3293) | 🐞 Bug | **聊天输入框聚焦高 CPU 修复**（对应 #3292） | **待合并**；若评审通过将直接消除当前最痛点的前端性能回归 |

> **整体进度判断**：本轮合并 PR 以“还债+强基”为主，核心链路（技能、压缩、MQTT、Discord）稳健性显著提升；若 #3293 今日合并，前端高 CPU 问题将在数小时内得到缓解，项目整体向 **v0.3.2 维护版** 迈进约 70%。

---

## 4. 社区热点 — 讨论最活跃/关注度最高

| 排名 | 对象 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| 1 | [Issue #2796](https://github.com/sipeed/picoclaw/issues/2796) | 💬 7 条评论、👍 0、标签 `stale`/`BUG` | **历史消息不完整展示**：用户期望 UI 侧完整保留多轮用户消息，而非仅显示最后一条；实为“模型侧压缩策略泄露到视图层”的架构边界模糊问题。 |
| 2 | [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201) | 💬 4 条评论、👍 0、标签 `stale`/`Feature` | **QQ 频道流式输出**：仅 Telegram/WebSocket 实现 `StreamingCapable`，QQ 用户需求明确，属通道能力对齐的**功能缺口**。 |
| 3 | [Issue #3292](https://github.com/sipeed/picoclaw/issues/3292) | 💬 0、👍 0、新开 | **输入框聚焦输入框 CPU 飙高**：可复现、环境具体（Firefox/Linux）、已有修复 PR，属**阻断级前端回归**，虽评论少但影响面广。 |

> **信号汇总**：社区核心关注点集中在 **“历史完整性”**、**“多通道流式一致性”** 与 **“前端性能基线”** 三大维度，折射出用户从“能用”向“好用/专业级”演进的预期跃迁。

---

## 5. Bug 与稳定性 — 今日报告/修复汇总（按严重度）

| 严重度 | Issue | 状态 | 关联 Fix PR | 备注 |
|--------|-------|------|-------------|------|
| **P0 阻断** | [#3292 聊天输入框聚焦 CPU 过高](https://github.com/sipeed/picoclaw/issues/3292) | Open | [#3293](https://github.com/sipeed/picoclaw/pull/3293) (Open) | 影响所有 Web 前端用户，Firefox/Linux 复现率 100%，建议 **今日内合并热修复** |
| P1 严重 | [#2796 历史多轮用户消息仅显示最后一条](https://github.com/sipeed/picoclaw/issues/2796) | Closed (stale) | 无 | 因 stale 关闭，但根因未解；若用户复现率上升需重开并修复视图层渲染逻辑 |
| P2 一般 | [#3201 QQ 通道缺失流式输出](https://github.com/sipeed/picoclaw/issues/3201) | Closed (stale) | 无 | 标记 stale 关闭，但属功能缺口而非回归；建议转入 Roadmap 而非彻底搁置 |
| P3 低 | 无新崩溃/回归报告 | — | — | 近期合并 PR 多为防御性加固，稳定性基线上抬 |

---

## 6. 功能请求与路线图信号

| 需求来源 | 需求描述 | 现有 PR 支持度 | 纳入下一版本概率 | 备注 |
|----------|----------|----------------|------------------|------|
| [#3201](https://github.com/sipeed/picoclaw/issues/3201) | QQ 频道流式输出 | 无对应 PR | 🟡 中（需实现 `StreamingCapable`） | 与 Telegram/WebSocket 对齐，工程量可控，建议 v0.3.2/0.4.0 纳入 |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | 新增 zh-TW 语系与繁体术语 | **PR 已开放，待合并** | 🟢 **高** | 仅缺维护者审核，文案完整，极易合并 |
| [#3247](https://github.com/sipeed/picoclaw/pull/3247) | 捷克语代码块换行翻译 | **已合并** | ✅ 已入主线 | 长尾语言补全示范 |
| 隐性需求 | Discord 消息分片/Typing 状态 | [#323](https://github.com/sipeed/picoclaw/pull/323) **已合并** | ✅ 已入主线 | 通道专业度提升典范 |

> **路线图推测**：v0.3.2 将聚焦 **“前端性能修复（#3293）+ 国际化补全（#3261/#3247）+ 通道稳健性（#323/#3246）”**；QQ 流式输出大概率滑入 v0.4.0 里程碑。

---

## 7. 用户反馈摘要 — 从评论中提炼的真实痛点

| 痛点场景 | 代表性引用/现象 | 频次/广度 | 满意度倾向 |
|----------|----------------|-----------|------------|
| **历史上下文不完整** | “消息压缩应仅针对模型，用户视角应完整”（#2796） | 多用户赞同、长期存在 | ❌ 不满 —— 视为架构分层缺失 |
| **通道体验不一致** | “Telegram 有流式，QQ 却要等完整回复”（#3201） | QQ 重度用户群体 | ❌ 不满 —— 期望平权 |
| **前端性能劣化** | “输入框一聚焦风扇狂转，CPU 100%”（#3292） | 新报告、可复现度高 | ❌ 严重不满 —— 影响日常可用性 |
| **国际化细节缺失** | “繁体中文术语不统一、捷克语缺键”（#3261/#3247） | 非英语母语贡献者 | 🟡 中性偏正 —— 愿贡献 PR 补全 |
| **Discord 易用性提升** | “长消息报错、无 Typing 状态让人困惑”（#323 解决前） | Discord 运维者 | ✅ 满意度回升 —— 合并后验证通过 |

---

## 8. 待处理积压 — 长期未响应的重要项（维护者关注清单）

| 对象 | 类型 | 滞留时长 | 优先级 | 建议动作 |
|------|------|----------|--------|----------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | PR (i18n: zh-TW) | 9 天（含 stale 标记） | 🟢 高 | **立即 Review & Merge** —— 仅文案变更，零风险，完善繁体体验 |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) | Issue (历史消息不全) | 79 天（已 stale 关闭） | 🟡 中 | **重新开放并指派** —— 若用户再报，需从视图层彻底解耦压缩逻辑 |
| [#3201](https://github.com/sipeed/picoclaw/issues/3201) | Issue (QQ 流式) | 24 天（已 stale 关闭） | 🟡 中 | **转入 Roadmap / Good First Issue** —— 明确里程碑，避免再次 stale |
| [#3293](https://github.com/sipeed/picoclaw/pull/3293) | PR (输入框 CPU 修复) | 0 天（今日新建） | 🔴 **最高** | **今日内 Code Review + CI 通过即合并** —— 阻断级回归，需最快交付 |

---

> **备注**：本报告基于 2026-07-25 00:00–23:59 UTC 的 GitHub 公开数据自动汇总，人工校验后输出。链接均指向对应 GitHub 实体，便利维护者直接跳转处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-07-25

> **数据来源**: GitHub API (nanocoai/nanoclaw)  
> **统计窗口**: 2026-07-24 00:00 - 2026-07-24 23:59 (UTC)  
> **报告生成**: 2026-07-25

---

## 1. 今日速览
- **活跃度评估**: **中高**。过去 24 小时无 Issue 更新，但有 **7 个 PR 活动**（6 个待合并，1 个关闭），核心团队成员（`glifocat`, `amit-shafnir`, `Koshkoshinsk`）高频提交修复与新特性，显示项目处于活跃迭代期。
- **核心动向**: 重点围绕 **Agent Runner 静默交付修复**、**OpenCode 兼容性与内存对齐**、**Agent Group 时区覆盖**、**Chat 打字指示器持久化**、**MCP 服务器不可用上报** 以及 **模板上下文预置** 展开。
- **风险提示**: 无新版本发布，积压 PR 多为核心模块修复，需关注审查吞吐率，避免合并延迟导致主分支稳定性风险。
- **社区互动**: 所有 PR 评论数为 `undefined`（可能为 0 或数据未抓取），缺乏公开讨论痕迹，建议引入自动化审查机制提升透明度。
- **整体健康度**: **良好**。核心团队主导开发，修复类 PR 占比高（5/6），技术债偿还与稳定性提升并行。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
> 今日合并/关闭的重要 PR 及推进的功能/修复。

| PR | 标题 | 状态 | 核心变更 | 影响模块 | 链接 |
|----|------|------|----------|----------|------|
| #3123 | Pacific changes. Wrong PR. | **CLOSED** | 作者标记为错误提交，已关闭无实际合并。 | - | [#3123](https://github.com/nanocoai/nanoclaw/pull/3123) |

**进展总结**: 今日无实质性合并入主分支的 PR。6 个 Open PR 均处于审查/待合并状态，涵盖 **核心运行时修复**、**集成兼容**、**多租户时区支持**、**UI 交互优化**、**可观测性增强** 与 **模板引擎修正**，预计合并后将显著提升稳定性与企业级部署能力。

---

## 4. 社区热点
> 今日讨论最活跃、反应最多的 PR（按更新时间、作者权重、涉及模块核心度综合判断）。

| 排名 | PR | 热点分析 | 核心诉求 | 链接 |
|------|----|----------|----------|------|
| 1 | **#3122** | **核心团队主导，跨天更新**，涉及 OpenCode 主分支兼容、自定义端点传输、内存对齐三大项，属基础设施级重构。 | 保证与上游 OpenCode 同步，解决自托管/私有化部署的传输与状态一致性痛点。 | [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) |
| 2 | **#3126** | **核心团队修复**，针对 Agent Runner “nudged turn 空转仍交付静默” 的边缘案例，直接影响 Agent 可靠性。 | 消除无效轮次干扰，提升对话流转的正确性与用户体验。 | [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) |
| 3 | **#3125** | **新特性**：Agent Group 级 IANA 时区覆盖，含迁移脚本 (020) 与审批闸，面向多区域部署企业客户。 | 支持跨时区团队协作，满足合规与本地化调度需求。 | [#3125](https://github.com/nanocoai/nanoclaw/pull/3125) |
| 4 | **#3093** | **核心团队修复**，Chat 打字指示器在处理轮次期间保持激活，改善长任务等待时的感知延迟。 | 提升交互响应感，减少用户因“静默”产生的不确定性。 | [#3093](https://github.com/nanocoai/nanoclaw/pull/3093) |
| 5 | **#3124** | **社区贡献**，上报不可用 MCP 服务器，增强工具链可观测性。 | 运维层面快速定位下游服务异常，降低 MTTR。 | [#3124](https://github.com/nanocoai/nanoclaw/pull/3124) |
| 6 | **#3090** | **核心团队修复**，模板引擎预置所有顶层 Context Markdown，修正上下文缺失导致的渲染异常。 | 保证模板渲染完整性，避免提示词注入不全。 | [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) |

---

## 5. Bug 与稳定性
> 今日报告的 Bug/回归问题（均来自 Fix 类 PR，无独立 Issue），按严重程度排序。

| 严重度 | PR | 问题描述 | 修复状态 | 影响范围 | 链接 |
|--------|----|----------|----------|----------|------|
| **High** | #3126 | Agent Runner 在 nudged chat turn 保持裸露时仍交付静默消息，导致对话历史污染与下游逻辑误判。 | **Open (Fix PR 就绪)** | `agent-runner` 核心流程，所有对话场景 | [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) |
| **High** | #3122 | OpenCode 主分支兼容性断裂、自定义端点传输异常、内存状态不一致，阻断私有化部署与版本升级。 | **Open (Fix PR 就绪)** | `opencode` 集成层、自托管部署 | [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) |
| **Medium** | #3093 | 长耗时处理轮次中打字指示器过早熄灭，用户感知为“卡死”。 | **Open (Fix PR 就绪)** | `chat` UI 交互层 | [#3093](https://github.com/nanocoai/nanoclaw/pull/3093) |
| **Medium** | #3124 | MCP 服务器不可用时缺乏显式上报，导致工具调用静默失败难以排查。 | **Open (Fix PR 就绪)** | `mcp` 工具链可观测性 | [#3124](https://github.com/nanocoai/nanoclaw/pull/3124) |
| **Low** | #3090 | 模板渲染未预置顶层 Context Markdown，导致部分变量缺失、提示词不完整。 | **Open (Fix PR 就绪)** | `templates` 引擎 | [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) |

---

## 6. 功能请求与路线图信号
> 结合 Open PR 与提交模式，推测下一版本 (vNext) 可能纳入的特性。

| 信号来源 | 功能/需求 | 纳入可能性 | 理由 | 相关 PR |
|----------|-----------|------------|------|---------|
| #3125 (核心团队) | **Agent Group 级 IANA 时区覆盖** | ⭐⭐⭐⭐⭐ **极高** | 含迁移脚本、CLI、审批闸，实现完备，符合企业级多租户路线图。 | [#3125](https://github.com/nanocoai/nanoclaw/pull/3125) |
| #3122 (核心团队) | **OpenCode 自定义端点传输 & 内存对齐** | ⭐⭐⭐⭐ **高** | 解决私有化部署核心堵点，配合上游同步节奏，属基建必选项。 | [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) |
| #3124 (社区) | **MCP 服务器健康上报/熔断** | ⭐⭐⭐ **中** | 可观测性增强项，符合运维成熟度曲线，但需配合告警体系落地。 | [#3124](https://github.com/nanocoai/nanoclaw/pull/3124) |
| #3093/3090 (核心团队) | **Chat 交互细节打磨 & 模板引擎健壮性** | ⭐⭐⭐⭐ **高** | 属于“纸割”级体验优化，积少成多决定留存，核心团队持续投入。 | [#3093](https://github.com/nanocoai/nanoclaw/pull/3093), [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) |

**路线图推测**: 下一版本将以 **“企业级就绪”** 为主题：多时区治理、上游兼容基建、可观测性补全、核心交互兜底。

---

## 7. 用户反馈摘要
> 过去 24 小时无新 Issue 评论，无法直接提炼用户痛点。  
> **侧写参考** (基于近期 Fix PR 隐含的用户场景)：
- **私有化部署用户**: 受阻于 OpenCode 版本漂移与自定义端点不通（#3122），强烈诉求“开箱即用的兼容层”。
- **多区域运维团队**: 需要 Group 级时区隔离以满足合规与排班（#3125），现状依赖全局配置导致冲突。
- **前线开发者**: 遭遇 Agent 静默污染历史（#3126）、长任务无反馈（#3093）、模板变量缺失（#3090），影响调试效率与信任度。
- **SRE/平台工程**: MCP 故障静默失败（#3124），缺乏统一健康视图，MTTR 偏高。

---

## 8. 待处理积压
> 长期未响应/更新的重要 PR（按更新时间倒序，> 3 天未动态），提醒维护者关注。

| PR | 标题 | 停滞天数 | 潜在风险 | 建议动作 | 链接 |
|----|------|----------|----------|----------|------|
| #3093 | fix(chat): keep typing active for processing turns | **6 天** | 交互体验修复延迟合并，用户持续遭遇“假死”感知。 | 指派 Reviewer，优先合并至 `main`。 | [#3093](https://github.com/nanocoai/nanoclaw/pull/3093) |
| #3090 | fix(templates): prepend all top-level context Markdown | **6 天** | 模板渲染缺陷可能导致生产环境 Prompt 注入失败。 | 同 #3093，核心团队成员提交，应加速审查。 | [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) |

**其余 4 个 Open PR** 均为 **今日/昨日创建**（#3122, #3124, #3125, #3126），处于正常审查窗口内，暂不列入积压。

---

## 📌 维护者行动清单 (Action Items)
1. **加速审查 #3093 / #3090** — 两个 6 天前的核心修复 PR，直接关联用户感知稳定性。
2. **合并 #3122 / #3126** — 基础设施兼容性与核心运行时正确性，阻塞私有化部署与 Agent 可靠性。
3. **评估 #3125 迁移脚本** — 涉及 DB 迁移 (020) 与审批闸，需确认回滚策略与灰度发布计划。
4. **引入 PR 自动化提醒** — 针对 > 3 天无 Review 动态的 PR 触发 Slack/GitHub Notification，降低积压风险。
5. **补充 Issue 活跃度数据** — 当前评论数 `undefined`，建议核对 GitHub API 权限或 Webhook 配置，确保社区脉搏可观测。

---

*报告自动生成，数据截至 2026-07-24 23:59 UTC。如有遗漏或异议，请以 GitHub 实时数据为准。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-25

---

## 1. 今日速览

IronClaw 今日处于 **v1.0.0 发布前的高强度冲刺期**。过去 24 小时共产生 **32 个 Issue 更新**（26 个新建/活跃、6 个关闭）与 **50 个 PR 更新**（31 个待合并、19 个已合并/关闭），无新版本发布。核心动力集中在三条主线：**Reborn 架构的核心模块重构**（Extension Host、Process Journal、Capability Diagnostics）、**v1 发布清单的收尾修复**（Slack/Telegram/OAuth/CLI 可用性）以及 **WebUI 性能与体验的系统性优化**（代码分割、压缩缓存、渲染性能）。社区活跃度极高，核心维护者与贡献者并行推进 10+ 个 XL 级 PR，项目整体呈现“攻坚克难、多线并进”的健康状态。

---

## 2. 版本发布

> 今日无新版本发布。当前最新预发布版本为 `1.0.0-rc.8`（见 Issue #6651）。

---

## 3. 项目进展

| PR | 标题 | 状态 | 影响面 | 关键进展 |
|----|------|------|--------|----------|
| [#6663](https://github.com/nearai/ironclaw/pull/6663) | Default cargo run to WebUI serve | ✅ **已合并** | DX/CLI | 统一入口体验：`cargo run` 直接启动 WebUI，`ironclaw` 无参数默认 `serve`，修复 CI 中 WebUI 构建回退逻辑。 |
| [#6664](https://github.com/nearai/ironclaw/pull/6664) | test(e2e): count capability coverage per outcome | ✅ **已合并** | 测试/质量 | 修正能力覆盖率统计逻辑：按“结果”而非“能力”计数，消除虚假 100% 覆盖率，配合 #6524 Epic 推进。 |
| [#6637](https://github.com/nearai/ironclaw/pull/6637) | Document Reborn storage landscape | ✅ **已合并** | 架构/文档 | 梳理文件系统/关系型/追加日志/遗留存储权威，提出混合目标模型与 ER 图，为后续迁移奠基。 |
| [#6656](https://github.com/nearai/ironclaw/issues/6656) | Disable upgrade for pre-v1.0.0 | ✅ **Issue 已关闭** | 发布/安全 | 防止用户在无迁移路径下升级，已在托管环境生效。 |
| [#6616](https://github.com/nearai/ironclaw/pull/6616) | Shrink composition extension host | 🔄 **审查中 (XL)** | 核心架构 | 将通用 Extension Host 行为下沉至 `ironclaw_extension_host`，退役产品级 Facade，减少耦合。 |
| [#6659](https://github.com/nearai/ironclaw/pull/6659) | test(trace): bind replay results by exact tool call | 🔄 **审查中 (XL)** | 评测/复现 | 引入 `tool_call_id + JSON Pointer` 精确绑定回放结果，修复录制/回放匹配不准问题。 |
| [#6665](https://github.com/nearai/ironclaw/pull/6665) | fix: make capability failure diagnostics actionable | 🔄 **审查中 (XL)** | 可靠性/模型可见性 | 引入 `ModelDiagnostic` 契约（4KB 上限、秘钥清洗、注入围栏），让模型直接看到可执行的失败诊断。 |
| [#6530](https://github.com/nearai/ironclaw/pull/6530) | feat(reborn): add bounded pre-termination warning turns | 🔄 **审查中 (XL)** | 运行时/人机交互 | 首次 `NoProgressDetected`/`IterationLimit` 转为带检查点的警告轮次，防止重启/审批丢失警告。 |
| [#6655](https://github.com/nearai/ironclaw/pull/6655) | Normalize filesystem-backed extension state records | 🔄 **审查中 (XL)** | 扩展/持久化 | 将 Manifest/安装核心/成员/凭据/健康规范化为类型化 FS 记录，保留兼容视图。 |
| [#6531](https://github.com/nearai/ironclaw/pull/6531) | fix(extensions): apply admin OAuth config at runtime | 🔄 **审查中 (XL)** | 扩展/认证 | 从租户级 Admin 配置原子化解析 OAuth 凭据组，移除废弃 `[channel.*]` 配置，失败即关闭。 |

> **合并/关闭统计**：19 个 PR 已合并/关闭，其中 3 个为核心基建（CLI 入口、测试统计、存储文档），其余多为依赖更新、小修复与文档同步。项目在“发布阻断项”清单上稳步推进。

---

## 4. 社区热点

| Issue/PR | 评论/互动 | 核心诉求 | 分析 |
|----------|-----------|----------|------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) **EPIC: error-recoverability endgame** | 5 💬 | 建立“每个运行时错误均可恢复”的契约：运行存活、模型可见、携带原因与修复建议、模型获得行动机会、不上报非成功状态。 | 架构级 Epic，关联 #6665 PR，体现项目对 **Agent 自主纠错能力** 的极致追求，是 Reborn 核心差异化能力。 |
| [#6544](https://github.com/nearai/ironclaw/issues/6544) **No UI/CLI to configure Slack OAuth Redirect URI** | 4 💬 | 托管环境中 Slack `personal` OAuth 重定向 URI 无法持久化，导致 503。 | **v1 发布阻断项**，已关闭，修复已合并。反映“托管环境配置管理”仍有补全空间。 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) **EPIC: Hermetic capability & journey testing platform** | 3 💬 | 机械化回答“每个能力/关键旅程是否有确定性覆盖”，统一 recorded-fixture 与 Emulate 体系。 | 配合 #6664 合并，测试基建正从“覆盖率数字”转向“语义覆盖率”。 |
| [#6645](https://github.com/nearai/ironclaw/issues/6645) **Slack send_message 报成功实未送达** | 0 💬 (新建) | P1 Bug：工具返回成功但 DM 未送达，活动日志显示 `outbound_delivery_timeout`。 | **Bug Bash 首日高优缺陷**，涉及 Slack 交付链路可靠性，需尽快定位。 |
| [#6643](https://github.com/nearai/ironclaw/issues/6643) **Telegram 配对后消息不处理** | 0 💬 (新建) | P1 Bug：配对成功后后续消息进入“黑洞”，无响应无状态。 | 同上，Telegram 通道交付链路存在系统性问题。 |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) **feat(webui): design system tokens + /playground** | 长期活跃 | 设计系统落地，支持 AI 自主实现小改进，文档先行。 | 设计领导力驱动的前端治理，WebUI v2 关键基建。 |

> **热点洞察**：核心维护者（serrrfirat, ilblackdragon, BenKurrek, zmanian）主导架构级 Epic 与 XL PR；QA/用户（joe-rlo, ksmit323）集中在 7/24 提交 **Bug Bash** 批量反馈，暴露 Slack/Telegram/Google Sheets 等集成通道的交付可靠性与 UI 实时性问题。

---

## 5. Bug 与稳定性

| 严重级 | Issue | 现象 | 影响范围 | 是否有 Fix PR |
|--------|-------|------|----------|---------------|
| **P1** | [#6645](https://github.com/nearai/ironclaw/issues/6645) | Slack `send_message` 返回成功但 DM 未送达 | 托管/自托管 Slack 交付 | ❌ 无 |
| **P1** | [#6644](https://github.com/nearai/ironclaw/issues/6644) | Telegram 回复错位，关联错误的用户消息 | Telegram 通道 | ❌ 无 |
| **P1** | [#6643](https://github.com/nearai/ironclaw/issues/6643) | Telegram 配对后消息不处理（黑洞） | Telegram 通道 | ❌ 无 |
| **P1** | [#6646](https://github.com/nearai/ironclaw/issues/6646) | Agent 忽略 Google Sheets 写入，仅汇总邮箱 | Google Sheets 技能 | ❌ 无 |
| **P2** | [#6649](https://github.com/nearai/ironclaw/issues/6649) | 工具活动面板在助手响应**后**才渲染，无法实时跟踪 | WebUI 实时性 | ❌ 无 |
| **P2** | [#6648](https://github.com/nearai/ironclaw/issues/6648) | 工具失败消息重复且措辞不一 | WebUI 错误展示 | ❌ 无 |
| **P2** | [#6622](https://github.com/nearai/ironclaw/issues/6622) | 自动化列表切换筛选时全量 Skeleton 闪烁 | WebUI 交互体验 | ❌ 无 |
| **P2** | [#6621](https://github.com/nearai/ironclaw/issues/6621) | 扩展配置模态框不捕获/恢复键盘焦点 | WebUI 无障碍 | ❌ 无 |
| **P2** | [#6623](https://github.com/nearai/ironclaw/issues/6623) | Chat 失败消息硬编码英文，忽略应用语言 | i18n 回归 | ❌ 无 |
| **P3** | [#6651](https://github.com/nearai/ironclaw/issues/6651) | Agent 回答后 UI 重复显示用户原问题文本 | WebUI 会话渲染 | ❌ 无 |
| **P3** | [#6650](https://github.com/nearai/ironclaw/issues/6650) | Agent 编造 AQI 数据（混合/缓存网页源） | 模型幻觉/工具验证 | ❌ 无 |
| **P3** | [#6642](https://github.com/nearai/ironclaw/issues/6642) | `ironclaw models list` 显示陈旧 provider/model；config.toml 优先级注释与代码行为相反 | CLI/配置一致性 | ❌ 无 |

> **稳定性判读**：今日新增 12 个 Bug（含 4 个 P1），均来自 **Bug Bash** 集中测试，集中在 **外部通道交付（Slack/Telegram/Sheets）**、**WebUI 实时渲染与交互细节**、**配置一致性** 三大类。目前**均无对应 Fix PR**，建议维护者在下一个 Sprint 优先处理 P1 交付链路，避免 v1 发布带缺陷上线。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心需求 | 关联 PR/Epic | 入版本可能性 |
|----------|----------|--------------|--------------|
| [#6641](https://github.com/nearai/ironclaw/issues/6641) | **Skill Self-Creation**：Agent 将硬任务经验蒸馏为可复用 Skill，支持运行时发现/验证/热更换 | 遵循 #6481 架构模式 | 🟡 **中** — 设计文档阶段，属于 v1 后演进 |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | **Reliable Skill Discovery/Routing/Activation** — 修正诊断：主路径缺失关键词/正则自动激活 | Epic 级，P1 建议 | 🟢 **高** — 核心能力，已有 PR 铺垫 |
| [#6628](https://github.com/nearai/iron

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-07-25

---

## 1. 今日速览

**整体状态：高强度迭代期，核心基建与安全加固并行，版本发布节奏加快。**  
- 过去 24 小时合并/关闭 **43 个 PR**，新开/活跃 **19 个 Issue**，呈现典型的“发版后清理积压 + 重构攻坚”特征。  
- 核心精力集中在 **Windows 签名/安装器自愈**、**Cowork 协作会话渲染与诊断导出**、**Scheduled Task 定时任务路由修复**、**安全审计（日志脱敏、IPC 越权、shell.openExternal 白名单）**、**OpenClaw 插件路径保留** 等基建与稳定性议题。  
- 新版本 `2026.7.23` 已发布，包含 AI Skin 流程优化、Cowork 多注释附件、Wind 渠道入口等特性。  
- 社区积压 Issue 多为长期未决的架构级痛点（DeepSeek V4 兼容、IM 微信验证码、Write Tool 失败、本地构建登录受阻），维护者响应优先级倾向于“可快速落地的修复”而非“需上游配合的重构”。  
- **健康度评分：🟢 良** — 合并率极高（86%），但 Stale Issue 占比高（19/19 均标记 stale），技术债清理滞后于功能迭代。

---

## 2. 版本发布

### LobsterAI 2026.7.23 (Released 2026-07-23)
| 变更类型 | 内容 | PR / 作者 | 影响范围 |
|----------|------|-----------|----------|
| **feat(skin)** | 优化 AI Skin 创建流程 | [#2361](https://github.com/netease-youdao/LobsterAI/pull/2361) @btc69m979y-dotcom | 前端交互、Skin 素材管线 |
| **feat(cowork)** | 支持浏览器多注释附件 | [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366) @liugang519 | Cowork 协作、附件渲染 |
| **feat(build)** | 新增 Wind 显式渠道入口 | 未给出 PR 号 | 打包分发、多渠道发布 |

> **迁移提示**：无破坏性变更。Wind 渠道用户需重新下载对应安装包；Skin 旧版素材兼容。

---

## 3. 项目进展（今日合并/关闭的重点 PR）

| PR | 标题 | 类型 | 核心改动 | 关联模块 |
|----|------|------|----------|----------|
| [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) | fix(build): sign Windows app binary through internal signing service | **构建/安全** | 修复 electron-builder 仅签名 NSIS 外壳、内部 `LobsterAI.exe` 裸奔导致杀毒软件拦截安装；引入 `win-sign.cjs` 全二进制签名 | `build`, `platform:windows` |
| [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) | fix(installer): self-heal interrupted win-resources.tar extraction | **安装器/稳定性** | NSIS 安装器优先调用系统 `tar.exe`，失败回退 electron 解压器并加 10 分钟看门狗，解决杀毒软件冻结导致 `cfmind` 目录为空且无法自愈 | `build`, `platform:windows` |
| [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) | fix: serialize concurrent browser launch/search to stop Chrome leaks | **稳定性/资源** | 串行化浏览器启动/搜索调用，修复并发导致的 Chrome 进程泄漏 | `build`, `main`, `openclaw`, `skills` |
| [#2264](https://github.com/netease-youdao/LobsterAI/pull/2264) | fix(cowork): improve large session rendering and diagnostics export | **性能/可观测性** | 折叠工具结果格式化 64K→16K 并 memoize；新增 **Share > Export as > Diagnostics package**（含元数据、原始消息、工具调用树） | `renderer`, `main`, `cowork` |
| [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) | fix(cowork): sync subagent child tool history | **功能修复** | 统一子 Agent 网关历史解析器，修复子会话页面工具调用/结果缺失，兜底合成孤儿工具结果 | `main` |
| [#2261](https://github.com/netease-youdao/LobsterAI/pull/2261) | fix(cowork): repair subagent panel timestamps | **UI 修复** | 移除原生 hover tooltip、别名持久化时间戳、防御无效时间戳格式化 | `renderer`, `main`, `cowork` |
| [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) | fix(scheduled-task): repair IM group task routing | **IM/定时任务** | 按绑定 Agent 过滤群目标、归一化遗留 announce job、保留原生 delivery target 与大小写 | `renderer`, `docs`, `main`, `openclaw` |
| [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314) | fix(scheduled-task): preserve WeCom/DingTalk group ID casing | **IM/兼容性** | 从 gateway session origin 恢复群 ID 大小写，兼容历史全小写任务，修复钉钉连接器吞掉失败导致误报 `delivered=true` | `docs`, `main` |
| [#2231](https://github.com/netease-youdao/LobsterAI/pull/2231) | fix(scheduled-task): restore gateway-backed run history | **定时任务** | 确保 IPC 初始化前完成 gateway client 就绪，双键（sessionId/sessionKey）回溯历史 | `renderer`, `main` |
| [#2309](https://github.com/netease-youdao/LobsterAI/pull/2309) | fix(build): keep null-byte stripping ES2020-compatible | **构建兼容** | `String.replaceAll` → 全局正则，修复旧 Node 版本编译报错 | `build` |

> **进展小结**：本周核心里程碑——**Windows 分发链路闭环（签名+自愈）**、**Cowork 大会话性能与可观测性**、**Scheduled Task 企业级 IM 路由修正**——已全部落地，技术债偿还比例显著提升。

---

## 4. 社区热点（高互动/高关注 Issue & PR）

| 对象 | 标题 | 互动 | 核心诉求 | 状态/进展 |
|------|------|------|----------|-----------|
| [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 无法使用：provider rejected the request schema or tool payload | 💬7 | 模型适配破坏性变更，阻塞 DeepSeek 用户 | **Open/Stale** 无 PR，需上游 schema 对齐 |
| [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时无限 NO_REPLY 或输出几字即断流 | 💬3 | 流式响应中断，任务被误判 complete | **Open/Stale** 疑似 SSE 处理竞态 |
| [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | IM 微信接口扫码后无法输入验证码 | 💬3 | 微信新版要求 OpenClaw 端输入 6 位码，客户端缺输入框 | **Open/Stale** 需前端补齐验证码 UI |
| [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) | Write tool execution always fail | 💬2 | 核心工具链失效，严重影响 Agent 自主编码 | **Open/Stale** 无复现日志，优先级高 |
| [#1836](https://github.com/netease-youdao/LobsterAI/issues/1836) | 整体界面建议专业设计重构 | 💬2 | UI/UX 竞品差距大，用户体验痛点 | **Open/Stale** 非功能性，资源受限 |
| [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) | fix(security): 脱敏主进程与 IM 模块敏感日志 | — | Bearer token、API Key、authCode 明文落盘 | **Open/Stale** 安全审计核心 PR，待审 |
| [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) | fix(security): 限制 store:* IPC 越权访问 | — | 渲染进程可任意读写 `auth_tokens`/`github_copilot_github_token` | **Open/Stale** 高危，需尽快合并 |
| [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) | fix(security): shell.openExternal 增加 scheme 白名单 | — | 防止 `file:`/`javascript:`/`data:` 等危险 scheme 执行 | **Open/Stale** 防御纵深 |
| [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) | feat: support kimi k3 | — | 新模型接入，扩大模型生态 | **Open** 最新 PR，待 CI |

> **信号分析**：安全类 PR（#1831-1833）虽标记 Stale 但属**高危漏洞修复**，社区无显性讨论实为“默认高优先级”；模型适配类 Issue（#1813, #1988）反映**上游 schema 变更跟进滞后**；IM 微信验证码（#1878）为**阻塞性交互缺陷**，建议本周内发专项修复版。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **🔴 Critical** | [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) (PR) | IPC 越权读写敏感 Token，可导致账号劫持 | ✅ PR 就绪 | **建议立即合并并回滚发布** |
| **🔴 Critical** | [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) (PR) | 日志明文记录 Bearer token、API Key、authCode | ✅ PR 就绪 | 配合 #1832 统一发布 |
| **🔴 Critical** | [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) (PR) | `shell.openExternal` 无 scheme 白名单，RCE 面 | ✅ PR 就绪 | 同上 |
| **🟠 High** | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) | Write/Edit Tool 持续失败 | ❌ 无 | 核心编码能力受损，需复现日志 |
| **🟠 High** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 schema 拒绝 | ❌ 无 | 主流模型不可用，影响面广 |
| **🟠 High** | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | 微信配置验证码无输入框 | ❌ 无 | IM 入口阻断 |
| **🟡 Medium** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问流式中断/NO_REPLY | ❌ 无 | 疑似 SSE 竞态 |
| **🟡 Medium** | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | 阿里百炼 qwen3.6-plus 被强制走网易额度 | ❌ 无 | 模型路由逻辑缺陷 |
| **🟡 Medium** | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) | 桌面端 AI engine connection lost | ❌ 无 | 仅桌面端复现，IM Bot 正常 |
| **🟡 Medium** | [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) | 本地运行登录/建任务失败，提示 cfmind 缺失 | ❌ 无 | 构建文档/脚本缺失 |
| **🟢 Low** | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | 虚拟滚动 + Mermaid 超长元素滚动异常 | ❌ 无 | UI 细节，已定位根因 |

> **修复建议**：将 #1831-1833 打包为 **Security Patch 2026.7.25** 紧急发布；其余 High 级 Bug 指派给对应模块 Owner，本周内给出复现/修复计划。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 相关 PR/进展 | 入版本可能性 |
|----------|----------|--------------|--------------|
| [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) | 支持 Kimi K3 | PR 已开，CI 跑通即可合并 | **✅ 极高**（下一版本） |
| [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193) | 接入 LiteLLM 网关（统一 100+ 模型） | PR Open，复用现有 OpenAI 兼容层 | **✅ 高**（无新依赖，战略

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-25

---

## 1. 今日速览
**项目整体处于低频社区互动、高频核心开发迭代并行状态。** 过去 24 小时无 Issue 活动、无版本发布、无 PR 合入，但核心维护者 `penso` 连续提交了两个关联性极强的大型功能 PR（#1165、#1166），聚焦于 **Slack 集成的深度增强**（确认反应、Block Kit、重连监管、提前确认 Bug 修复）。这表明项目正处于 **“功能攻坚期”**，主干开发集中在单一核心贡献者手中，社区外部参与度极低，项目健康度取决于核心团队的持续推进能力。

---

## 2. 版本发布
**今日无新版本发布。**

---

## 3. 项目进展
**今日无 PR 合并/关闭，主干代码库未发生变更。**  
两个处于 **Open** 状态的 PR 形成堆叠依赖关系，代表了下一个里程碑的主要增量：

| PR | 标题 | 状态 | 核心推进内容 | 依赖关系 |
|----|------|------|--------------|----------|
| [#1165](https://github.com/moltis-org/moltis/pull/1165) | `feat(slack): acknowledge messages with reactions and add reaction triggers` | Open | • 引入 Slack **确认反应**，解决无 typing indicator 的用户感知盲区<br>• 新增 **入站反应触发器**，支持以表情符号驱动工作流<br>• 修复线程回复中 **错误消息投递** 的确认 Bug | 基础 PR |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | `feat(slack): phase reactions, reconnect supervision, Block Kit, and a premature-ack bugfix` | Open | • 分阶段反应机制优化 UX<br>• **重连监管** 增强运行时鲁棒性<br>• 引入 **Block Kit** 支持富交互 UI<br>• 修复 `chat.send` **提前确认** 导致的竞态条件（火并即忘模式下 Agent 尚未启动即返回 ack） | 依赖 #1165 (`third-effect` 分支) |

**整体进度评估**：Slack 集成正从 “可用” 向 “生产级可观测/可交互/高可用” 跨越，两个 PR 合入后将显著提升企业级采用门槛。

---

## 4. 社区热点
**过去 24 小时无 Issue 评论、无 PR 评论、无 Reaction 数据，社区讨论热度为 0。**  
仅有的两个 PR 均为内部堆叠开发，暂未引入外部 Review 或讨论。建议维护者在 PR 描述中补充 **测试计划 / 回滚策略 / 破坏性变更标记**，以降低后续 Review 门槛并吸引社区参与。

---

## 5. Bug 与稳定性
| 严重程度 | 来源 | 现象 | 修复状态 | 关联 PR |
|----------|------|------|----------|---------|
| **High** | PR #1166 描述 | `chat.send` 采用 fire-and-forget 模式时，**Agent 运行尚未启动即返回 ack**，导致下游感知与实际执行不同步 | **已有修复代码在 #1166 中** | [#1166](https://github.com/moltis-org/moltis/pull/1166) |
| **Medium** | PR #1165 描述 | 线程回复场景下出现 **错误消息投递** | **已有修复代码在 #1165 中** | [#1165](https://github.com/moltis-org/moltis/pull/1165) |

**无新增 Issue 报告的崩溃/回归**。上述两个 Bug 均在本轮重构中被主动发现并修复，属于 “开发期自查” 而非 “生产事故”。

---

## 6. 功能请求与路线图信号
**显性信号**：Slack 集成正按 **“确认感知 → 交互触发 → 富 UI → 运行时治理”** 四阶段演进，当前 PR 覆盖全部阶段。  
**隐性信号**：
- **Block Kit 支持** 落地后，后续极大概率会出现 “Slack Workflow / Modal / App Home” 等高级交互需求。
- **Reconnect Supervision** 引入说明运行时层面正在补齐 **Actor 模型监管树** 能力，可能向其他 Adapter（Discord、Mattermost、Teams）复用。
- 无外部 Issue 提出新需求，**路线图完全由核心团队内驱**。

**预判下一版本 (v0.x / v1.0 预发布) 将包含**：上述两个 PR 全部内容 + 可能的文档/示例更新。

---

## 7. 用户反馈摘要
**过去 24 小时无用户反馈数据（Issue 评论、Discussion、Survey 等均为空）。**  
长期来看，Slack 集成的 “无 typing indicator”、“线程消息错乱” 是用户最直观痛点，本轮 PR 精准回应了这两点。

---

## 8. 待处理积压
> **注意**：数据源仅提供 “过去 24 小时” 快照，无法直接识别长期积压。建议维护者定期运行以下 GitHub Search 查询并纳入例会：
- `is:pr is:open sort:updated-asc` → 关注 **超过 14 天无更新** 的 PR
- `is:issue is:open sort:updated-asc label:bug` → 关注 **超过 30 天无响应** 的 Bug
- `is:issue is:open -label:triaged` → 未分类 Issue 堆积

**当前视野内无积压风险**，但两个 Open PR 已处于 **“等待 Review/合并”** 状态，建议在 **48 小时内** 安排 Code Review 并合入，避免分支漂移增加冲突成本。

---

### 📌 关键链接汇总
- PR #1165（基础 Slack 增强）：https://github.com/moltis-org/moltis/pull/1165  
- PR #1166（进阶 Slack 增强 + 严重 Bug 修复）：https://github.com/moltis-org/moltis/pull/1166  
- 项目主页：https://github.com/moltis-org/moltis  

---  
*报告生成时间：2026-07-25 06:00 UTC | 数据窗口：2026-07-24 00:00 – 2026-07-25 00:00 UTC*  
*下一份日报建议关注：#1165/#1166 合并情况、是否切 Tag 发布预览版、外部贡献者是否介入 Review*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-07-25

> **数据来源**：GitHub `agentscope-ai/QwenPaw` 仓库近 24 小时动态  
> **统计口径**：Issues 50 条（新开/活跃 28，关闭 22），PRs 36 条（待合并 22，合并/关闭 14），Releases 2 个

---

## 1. 今日速览

- **版本里程碑**：正式发布 **v2.0.1**，核心亮点是推出 **PawApp 平台**（SDK + 内置看板应用），标志着插件生态从“工具调用”向“富交互 UI”跨越；同步推出 v2.0.1-beta.3 修复控制台 SSE 解析性能抖动。
- **活跃度评级**：**高**。单日 50 条 Issue 更新、36 条 PR 活动，且新增 Issue 多为 v2.0 回归反馈与深度功能诉求，社区已从“尝鲜期”进入“生产落地打磨期”。
- **核心张力**：**性能回归**（#6307 固定 +2s 延迟）、**隐私隔离缺失**（#6461 多智能体数据泄露）、**MCP 生态不稳**（#6405、#2999）构成当前三大阻碍生产可用性的核心痛点。
- **修复交付**：14 个 PR 合并/关闭，涵盖 Scroll 上下文压缩重构（#6323）、Zalo 渠道接入（#6118）、工具批处理适配 Agentscope 2.0（#5698）等基建级改进。
- **路线图信号**：Hazemaan 连开 11 个 “Close-and-review-later” 增强 Issue（#6441-#6451），系统性勾勒“浏览器内集成、会话级参数、多模态原生、懒加载启动、并行子 Agent、MCP 开箱即用”等 v2.1+ 方向。

---

## 2. 版本发布

| 版本 | 类型 | 核心变更 | 破坏性变更 / 迁移提示 |
|------|------|----------|------------------------|
| **v2.0.1** | 稳定版 | ✨ **PawApp Platform**：提供 SDK 与内置 Kanban 看板应用，插件可构建富交互 UI（看板、表单、图表等）<br>🔧 基础设施完善 | 无破坏性变更。旧插件兼容，但建议迁移至 PawApp SDK 以获得更好集成体验。 |
| **v2.0.1-beta.3** | 预览版 | ⚡ `perf(console)`：稳定 `chatOptions` memo，减少 SSE 重复解析（@zhaozhuang521）<br>🏷️ 版本号推进至 v2.0.1 | 仅性能优化，无配置迁移。建议生产环境等待稳定版发布。 |

> **链接**：[v2.0.1 Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1) | [v2.0.1-beta.3 Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.3)

---

## 3. 项目进展（已合并/关闭的关键 PR）

| PR | 状态 | 核心推进 | 对项目整体进度的贡献 |
|----|------|----------|----------------------|
| [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) `feat(scroll): staged compaction & durable task continuity` | **Merged** | 重构 Scroll 上下文管理：引入分阶段压缩管线，`history.db` 为单一真相源，Headline/摘要/驱逐索引提供任务连续性，**解决长会话上下文爆炸与状态丢失**。 | ⭐⭐⭐⭐⭐ 核心基建落地，为长任务、多轮交互提供可靠骨架。 |
| [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) `feat(channels): add Zalo Bot channel` | **Merged** | 新增越南主流 IM Zalo Bot 渠道，采用长轮询免 Webhook，**拓展东南亚用户触达**。 | ⭐⭐⭐ 渠道生态 +1，降低私有化部署门槛。 |
| [#5698](https://github.com/agentscope-ai/QwenPaw/pull/5698) `feat(tools): adapt run_tool_batch to agentscope 2.0` | **Merged** | `run_tool_batch` 适配 Agentscope 2.0，新增控制流原语（条件、循环、并行），**复杂多步工作流编排能力质变**。 | ⭐⭐⭐⭐ Agent 编程模型成熟度关键跃升。 |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) `feat(memory): reranker for reme0.4` | **Closed** (未合入) | 为 ReMe 0.4 增加重排阶段，提升检索精度。 | ⭐⭐ 记忆检索增强，但暂未合入主干，需跟进。 |

> **其他进行中重磅 PR**：[#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) SQLite 持久化加固、[#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) QwenPaw Creator 视频创作插件、[#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) Codex/Qoder/MCP 第三方 Agent 集成、[#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) 原生桌面 GUI 自动化（Computer Use）。

---

## 4. 社区热点（高互动 Issue/PR 分析）

| 排名 | Issue/PR | 评论/互动 | 核心诉求 | 维护者响应现状 |
|------|----------|-----------|----------|----------------|
| 1 | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) `v2.0.0 Missing: SSH Offline, Profiles 404` | 7 💬 | **v1→v2 关键功能缺失**：SSH 离线模式、Profile 页面 404，阻断生产迁移。 | 🟡 打开 13 天，暂无里程碑/指派，建议进 v2.0.2 必修清单。 |
| 2 | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) `Perf: +2s fixed overhead per reply vs v1.x` | 7 💬 | **架构级性能回归**：每轮对话固定 +2s，与模型延迟无关，疑为请求链路重构引入。 | 🟡 已定性为 Performance，无 PR 关联，需性能剖析定位。 |
| 3 | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) `Agent isolation/privacy leak` **(New Today)** | 1 💬 / 👍 0 | **严重隐私漏洞**：多智能体共享会话上下文，群聊用户可读取/操作私聊智能体记忆与设置。 | 🔴 **P0 阻塞级**，需立即评估隔离架构（Workspace/Session/Context 边界）。 |
| 4 | [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) `ReAct context mixes tool_result into assistant → 400` | 2 💬 | **OpenAI 兼容性断裂**：工具结果被合并进 assistant 消息，导致 API 校验失败。 | 🟡 有关联修复 PR [#6409](https://github.com/agentscope-ai/QwenPaw/pull/6409) (Ready for Merge)。 |
| 5 | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) `MCP tool notfound after v2 upgrade` | 3 💬 | **MCP 命名空间解析失效**：`[mcp-key]__[tool_name]` 无法路由。 | 🟡 疑似注册表/路由重构副作用，需核对 [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) 关联。 |

>

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 | 2026-07-25

---

## 1. 今日速览
- **活跃度评级**：**中高** —— 核心维护者 `qhkm` 在 24 小时内推进了 1 个重构型 PR（`#645`）与 1 个用户可见特性 PR（`#648`），并同步处理了 CI 基线修复 Issue（`#646`）。
- **代码交付**：合并 1 个 PR（`#648`），1 个 PR 处于审查中（`#645`）；无新 Release。
- **技术债与安全**：`#646` 显式记录了 Rust 1.97.1 升级带来的 5 处 Clippy 新警告及 2 个已知漏洞依赖（`quick-xml 0.39.2`、`lopdf 0.40.0`），已纳入 P1-critical 修复计划。
- **核心进展**：Telegram 网关实现了**流式响应逐步编辑**能力（`#648`），显著提升长回答交互体验；子进程运行时完成了**密钥清洗与超时进程树回收**（`#645`），消除凭据泄露与僵尸进程风险。
- **社区互动**：Issue 评论数极低（仅 `#646` 有 2 条内部讨论），外部贡献者参与度为 0，项目呈现典型“核心团队内推”模式。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 对项目推进度的影响 |
|----|------|----------|---------------------|
| [#648](https://github.com/qhkm/zeptoclaw/pull/648) `feat(telegram): stream gateway responses` | **已合并** | • 新增 channel-neutral 的累积出站流阶段抽象<br>• Telegram 网关复用 provider `StreamEvent`，按受控频率渐进编辑单条消息<br>• 保留 forum-topic / reply 路由、UTF-16 安全分片、HTML 最终渲染、长响应续传<br>• 预览编辑失败后自动降级 | ⭐⭐⭐ **用户体验里程碑** —— 首次在网关层实现真正的“打字机效果”，消除长回答等待焦虑，为后续多渠道流式复用奠定架构基础。 |
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) `fix(runtime): scrub subprocess secrets and reap timed-out process trees` | **审查中** | • 子进程不再继承完整环境变量，改为显式允许列表注入，阻断 provider keys 等机密泄露<br>• 超时时改用进程组/会话终止并回收后代进程，修复 Docker 容器残留问题<br>• 新增集成测试覆盖密钥清洗与树回收场景 | ⭐⭐⭐ **安全与稳定性硬指标** —— 直接修复供应链攻击面与资源泄漏，属于生产就绪前的必修课。 |

---

## 4. 社区热点

| 对象 | 热度指标 | 核心诉求分析 |
|------|----------|--------------|
| [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) `chore(ci): restore Clippy and cargo-deny checks` | 💬 2 条评论（均为维护者自问自答）<br>👍 0 | **技术债显性化**：Rust 1.97.1 引入的 5 个 Clippy 新 lint 与 2 个 cargo-deny 拦截的已知 CVE 依赖，阻塞 CI 绿色基线。维护者已拆解为 3 个子任务并关联到 `#645` 审查流程，显示“零警告、零漏洞”质量红线不可妥协。 |
| [Issue #647](https://github.com/qhkm/zeptoclaw/issues/647) `feat(telegram): stream agent responses` | 💬 0 评论<br>👍 0 | **特性落地确认单**：作为 `#648` 的设计文档同步创建，标记 `P2-high` 并在合并后即时关闭，体现“Issue 驱动 PR、PR 合并即关 Issue”的严格流程纪律。 |

> **结论**：社区热度完全集中在核心维护者自驱的工程治理上，无外部用户提问或争议，说明项目处于**内部高强度迭代、对外低可见度**阶段。

---

## 5. Bug 与稳定性

| 严重度 | 来源 | 现象 | 是否已有 Fix PR | 备注 |
|--------|------|------|-----------------|------|
| **Critical (P1)** | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | `quick-xml 0.39.2` (CVE-2024-XXXXX) 与 `lopdf 0.40.0` 含已知漏洞，`cargo-deny` 导致 CI 失败 | ❌ 无独立 PR，计划在 `#645` 审查窗口同步升级依赖 | 需尽快锁定安全版本并回归测试 XML/PDF 解析路径 |
| **High** | [#645](https://github.com/qhkm/zeptoclaw/pull/645) | 子进程继承完整环境变量导致 provider keys 泄露风险；超时未回收进程树造成 Docker 僵尸容器 | ✅ `#645` 已包含完整修复与测试 | 审查通过后将彻底解决 |
| **Medium** | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | Rust 1.97.1 新增 5 处 Clippy 警告（channel/provider/binary-plugin） | ❌ 待处理 | 属于代码整洁度债务，不影响运行时正确性 |

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 落地概率（下一版本） | 依据 |
|----------|----------|----------------------|------|
| [#647/#648](https://github.com/qhkm/zeptoclaw/issues/647) | **Telegram 流式响应逐步编辑** | ✅ **已合并** | 核心维护者自提自审，P2-high 优先级，架构已就绪 |
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | **子进程密钥隔离与资源回收** | ✅ **极高** | 安全硬指标，已有完整实现与测试，仅待 CI 绿灯 |
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) | **依赖漏洞清零与 Clippy 零警告** | ⚠️ **中高** | P1-critical 标签，但需协调依赖升级破坏性变更，可能拆分多个 PR 渐进修复 |

> **路线图推断**：下一版本（或下一批次合并）将聚焦 **“安全基线修复 + 流式交互完善”**，暂无新领域功能扩展迹象。

---

## 7. 用户反馈摘要
> 过去 24 小时 **无外部用户评论**，所有讨论均为维护者内部技术对齐。  
> 由此侧写：
- **使用场景**：核心团队正在为生产环境做“安全加固（`#645`/`#646`）”与“交互体验打磨（`#648`）”的最后冲刺。
- **痛点**：Rust 工具链快速演进带来的持续合规成本（Clippy / cargo-deny 基线漂移）。
- **满意度**：无法从数据中观测，但维护者对“零警告、零漏洞、流式首屏”的执着暗示对交付质量有极高自设标准。

---

## 8. 待处理积压提醒

| 对象 | 停滞时长 | 关注理由 | 建议行动 |
|------|----------|----------|----------|
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | ~1 天（Open） | 安全修复主干 PR，CI 因 `#646` 依赖漏洞报红，导致合并受阻 | 1️⃣ 优先在 `#645` 或配套 PR 中升级 `quick-xml`/`lopdf` 至安全版本<br>2️⃣ 同步修复 5 处 Clippy 警告，恢复 CI 绿色<br>3️⃣ 审查通过后立即合并，解除运行时安全隐患 |
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) | ~2 天（Open） | P1-critical 基线阻断项，若拖延将累积更多工具链漂移 | 拆解为 2–3 个小 PR 并行推进，避免长分支合并冲突 |

---

> **下一观测点（2026-07-26）**：关注 `#645` CI 修复进度、依赖升级是否引入破坏性变更、以及是否有新 Issue 从外部用户浮现（标志着对外可见度提升）。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*