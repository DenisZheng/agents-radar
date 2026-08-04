# OpenClaw 生态日报 2026-08-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-04 01:55 UTC

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

# OpenClaw 项目日报 · 2026-08-04

---

## 1. 今日速览

- **发布活跃度极高**：过去 24 小时连续推送 **2 个补丁版本**（v2026.7.1-1 / v2026.7.1-2），修复 Codex 进度消息导致的会话中断、Memory Core 启动修复、npm 插件元数据兼容性等核心回归问题。
- **Issue/PR 流量巨大**：单日 **500 条 Issue 更新（467 活跃/新开，33 关闭）**、**500 条 PR 更新（332 待合并，168 已合并/关闭）**，表明项目处于高强度迭代与社区反馈并行期。
- **核心痛点聚焦**：高热度 Issue 集中在 **会话状态丢失/静默失败**（Subagent 完成丢失、DeepSeek 静默回复、Codex 超时/截断）、**实时语音资源泄漏**、**内存管理混乱**、**Windows 网关守护进程存活** 等稳定性与可靠性问题。
- **维护响应迅速**：多个 P1/P0 级别 Bug 已有对应 Fix PR（如 #119052 修复 Windows 守护进程、#116244 修复 exec 权限继承、#118657 修复 Google API Key 优先级），且多个 QA 证明类 PR 当日合并（#119032、#119021、#118854），显示“修复→验证→合并”链路高效运转。
- **技术债清理信号明显**：大量 PR 涉及测试隔离（#118781）、配置 Schema 统一（#118152、#117287、#119030）、沙箱安全边界收敛（#108979、#119053）、文件读取上限防 OOM（#110429、#111609），架构健壮性建设同步推进。

---

## 2. 版本发布

| 版本 | 发布时间 | 核心变更 | 破坏性变更 | 迁移提示 |
|------|----------|----------|------------|----------|
| **v2026.7.1-2** | 今日 | **npm 插件元数据兼容**：接受新版 npm 客户端返回的单元素数组元数据，确保官方插件可正确安装/更新到修正版本（#108336） | 无 | 运行 `openclaw plugins update` 即可自动获取修正版插件 |
| **v2026.7.1-1** | 今日 | 1. **Codex 进度回复保活**：修复 app-server 在收到进度消息后过早结束 turn，导致 GPT/Codex 无法到达权威终态（#106961, #108487）<br>2. **Memory Core 启动修复**：恢复派生的 legacy-index 与 ca 索引，解决冷启动索引缺失 | 无 | 直接升级；若此前遇到 Codex “中途停回” 或 Memory 启动报错，升级后自动恢复 |

> **注**：两版本均为补丁级，无需配置迁移，建议生产环境尽快滚动更新。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 类型 | 核心推进 | 关联 Issue | 状态 |
|----|------|----------|------------|------|
| [#119032](https://github.com/openclaw/openclaw/pull/119032) | QA 证明 | 增加 **Agent 会话作用域连续性** 的真实子网关 QA 场景，填补覆盖空白 | — | ✅ **已合并** |
| [#119021](https://github.com/openclaw/openclaw/pull/119021) | QA 证明 | 补齐 `apply_patch` / `edit` 工作区变更工具的**主证据级**端到端测试 | — | ✅ **已合并** |
| [#118854](https://github.com/openclaw/openclaw/pull/118854) | Bug Fix | 修复网关插件模型允许列表动态化导致的授权测试 Mock 失效，改为静态内置归一化 | #118853 | ✅ **已合并** |
| [#119045](https://github.com/openclaw/openclaw/pull/119045) | Bug Fix | **xAI 实时会话播放确认阻塞时主动停止**，防止内存无界增长 | #116201 | ✅ **已合并** |
| [#119046](https://github.com/openclaw/openclaw/pull/119046) | Bug Fix | CLI `gateway call` 现在正确遵守 `--port` 参数，修复非默认端口本地网关调用失败 | #119036 | ✅ **已合并** |
| [#118657](https://github.com/openclaw/openclaw/pull/118657) | Bug Fix | **Google Web Search 凭证优先级修正**：接受标准 Google API Key，修复环境变量别名引入的优先级倒置 | — | ✅ **已合并** |
| [#39807](https://github.com/openclaw/openclaw/pull/39807) | Bug Fix | **计费错误 (402) 无限重试死循环**：为 inline-apiKey 提供商引入退避机制，避免凭证耗尽 | #39807 | ✅ **已关闭** |
| [#119052](https://github.com/openclaw/openclaw/pull/119052) | Bug Fix | **Windows 原生网关守护进程存活**：修复计划任务启动后前台窗口关闭导致进程退出 | #91144 | 🔄 **待审核** |
| [#116244](https://github.com/openclaw/openclaw/pull/116244) | Bug Fix | **新 Dashboard 会话继承 `tools.exec` 安全策略**，修复 exec 权限回落到 deny | — | 🔄 **待作者完善** |
| [#117213](https://github.com/openclaw/openclaw/pull/117213) | Bug Fix | **插件策略刷新不完整**：修复 `refreshReason: policy-changed` 误用 enablement-only 快速路径 | #89606 | 🔄 **待作者完善** |

**整体进度评估**：核心稳定性修复（Codex、Memory、计费重试、Windows 守护进程、凭证优先级）已落地或进入最终审核；QA 基建补齐显著提升回归防护能力；配置 Schema 统一、沙箱隔离、文件读取上限等架构级治理同步推进。

---

## 4. 社区热点（评论/反应最高的 Issues & PRs）

| 排名 | Issue/PR | 标题 | 评论 | 👍 | 核心诉求分析 |
|------|----------|------|------|----|--------------|
| 1 | [#116277](https://github.com/openclaw/openclaw/issues/116277) | **DeepSeek v4 Flash 静默回复失败** — 无回复生成，通用回退 | 100 | 0 | **P1 级模型集成稳定性**：用户遭遇“No reply was generated”回退，需模型侧错误透传与重试策略，已关闭（疑似上游修复或配置调整） |
| 2 | [#116201](https://github.com/openclaw/openclaw/issues/116201) | **实时语音会话保留无界提供方/咨询状态** | 52 | 0 | **资源泄漏治理**：慢/卡/爆发流量下超世代咨询工作、大帧、预备音频、播放确认堆积，已有 #119045 修复 xAI 分支，通用修复待跟进 |
| 3 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | **按来源的 Memory Trust Tagging**（防记忆投毒） | 24 | 0 | **安全增强**：源头（用户指令/网页抓取/三方技能）打标信任等级，防恶意指令隐匿于非受信内容后被检索利用 |
| 4 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | **Subagent 完成静默丢失** — 无重试/通知/超时自动重启 | 23 | 2 | **编排可靠性**：完成宣布失败、直接宣布超时、排水/孤儿清理三大丢失模式，需端到端交付保证 |
| 5 | [#48788](https://github.com/openclaw/openclaw/issues/48788) | **统一文件名编码工具**（多编码 Content-Disposition） | 20 | 1 | **国际化健壮性**：Shift-JIS/EUC-KR/GB18030 等跨适配器统一处理，避免中日韩文件名乱码 |
| 6 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | **Codex-backed Telegram turn 反复超时等待 turn/completed** | 17 | 3 | **Codex 集成回归**：2026.5.27 后多会话工作完成但不达终态，导致 Telegram 会话失败 |
| 7 | [#84516](https://github.com/openclaw/openclaw/issues/84516) | **Codex 长回复静默截断** ~1000-1100 chars（stop=null, aborted=false） | 11 | 2 | **输出完整性**：模型未中止却中断，需流式缓冲/分片重组与完整性校验 |
| 8 | [#112906](https://github.com/openclaw/openclaw/issues/112906) | **\`\` 渲染损坏**（v2026.7.1 富消息回归） | 8 | 0 | **前端回归**：可折叠区块扁平化泄露，阻断可读性，需紧急修复 |
| 9 | [#118785](https://github.com/openclaw/openclaw/issues/118785) | **QA：容器与外部 App SDK 主要证明追踪** | 8 | 0 | **发布门禁完善**：23 容器 ID + 31 SDK ID 的主证据级 QA 覆盖跟踪 |
| 10 | [#16670](https://github.com/openclaw/openclaw/issues/16670) | **引导向导应把 Memory/Embedding 设为必选步骤** | 8 | 1 | **首用户体验**：Memory 核心能力却在 onboarding 缺位，导致新用户无感知地丢失持久化能力 |

> **趋势研判**：社区关注点从“功能缺失”显著转向 **“核心链路可靠性（会话/子代理/模型集成/实时语音/内存/安全）”** 与 **“首用户/跨平台体验一致性”**，符合项目进入规模化生产可用阶段的特征。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 现象 | 影响面 | 是否有 Fix PR | 状态 |
|--------|-------|------|--------|---------------|------|
| **P0 / 发布阻断** | [#103804](https://github.com/openclaw/openclaw/issues/103804) | `service-env` 生成器双重引号导致 `AWS_REGION='"us-east-1"'` 破坏主机名解析 | 云部署/容器化环境 | ❌ 无 | 🔴 活跃 |
| **P1 / 会话状态丢失** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失（宣布失败/超时/孤儿清理） | 多轮编排/自动化工作流 | ❌ 无 | 🔴 活跃 |
| **P1 / 会话状态丢失** | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent 完成交付在直接宣布超时/排水/孤儿修剪中丢失 | 同上 | ❌ 无 | 🔴 活跃 |
| **P1 / 模型集成** | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex Telegram turn 反复超时不达 `turn/completed` | Codex + Telegram 生产用户 | ❌ 无 | 🔴 活跃 |
| **P1 / 模型集成** | [#84516](https://github.com/openclaw/openclaw/issues/8

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-08-04）

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现 **“头部项目高强度交付、中腰部项目差异化深耕、长尾项目维持低频迭代”** 的三层态势。核心项目（OpenClaw、NanoBot、Hermes Agent、IronClaw）均进入 **生产级稳定性攻坚期**，不再单纯追求功能堆砌，而是聚焦会话状态一致性、多模型协议适配、跨平台原生体验、安全沙箱隔离等架构级治理。社区反馈从“功能缺失”显著转向“核心链路可靠性”与“首用户体验一致性”，标志着生态整体跨越了 0→1 阶段，正在经历 1→N 的规模化验证。多模型网关化、MCP 标准化落地、桌面端原生化（Tauri/Electron/WebView2）是当前最确定的三条技术主线。

---

## 2. 各项目活跃度对比

| 项目 | 核心定位 | Issues 更新 (新开/活跃/关闭) | PR 更新 (待合并/已合并/关闭) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 核心参照/全能型智能体平台 | **500** (467/33) | **500** (332/168) | **2 个补丁版本** (v2026.7.1-1/-2) | ⭐⭐⭐⭐⭐ **极高** — 规模最大、迭代最猛、修复闭环最快 |
| **NanoBot** | 轻量级/多提供商聚合/终端优先 | ~12 (活跃) | **24** (已合并/关闭) | 无 (积累变更中) | ⭐⭐⭐⭐⭐ **极高** — 单日合并 24 PR，响应上游模型极快 |
| **Hermes Agent** | 多平台网关/消息路由/桌面端 | **50** (40/10) | **50** (45/5) | **v0.20.0** (大版本, 3650 commits) | ⭐⭐⭐⭐ **高** — 大版本发布后进入回归修复密集期 |
| **IronClaw** | 架构治理/类型安全/WASM 沙箱 | **46** (37/9) | **50** (32/18) | 无 (确立周三发布策略) | ⭐⭐⭐⭐ **高** — 大规模重构并行，XL级 PR 堆积需管控 |
| **PicoClaw** | 多渠道分发/嵌入式/国际化 | **8** (3/5) | **5** (2/3) | 无 (主分支可切 v0.3.2) | ⭐⭐⭐ **中高** — 核心修复到位，但 2 个 P0 Bug 长期 Stale |
| **NanoClaw** | 会话持久化/多渠道/技能驱动 | **1** (新增) | **9** (6/3) | 无 | ⭐⭐⭐ **中高** — 外部贡献友好，P0 启动崩溃需即时修复 |
| **NullClaw** | Zig 语言/流式原生/轻量内核 | **1** (活跃) | **5** (3/2) | 无 | ⭐⭐⭐ **中** — 核心流式工具调用落地，但 Scheduler 认证长期阻塞 |
| **LobsterAI** | 桌面客户端/运营化/企业私有化 | **2** (Stale 更新) | **11** (6 合并) | 无 | ⭐⭐ **中** — 维护者自驱强，外部 PR 长期积压，Electron 升级滞后 |
| **CoPaw (QwenPaw)** | 多智能体协作/桌面端/技能生态 | **23** (17/6) | **50** (25/25) | **v2.1.0-beta.1** | ⭐⭐⭐⭐ **高** — 发版前集中收敛，但 P0 Crash/挂起仍在量产 |
| **Moltis** | MCP 基础设施/托管仓库 | **0** | **1** (待合并) | 无 | ⭐⭐ **中低** — 核心特性 PR 待审 2 天无动静 |
| **TinyClaw / ZeptoClaw / ZeroClaw** | 轻量/实验/早期 | 无活动 / 生成失败 | 无活动 | 无 | ⭐ **低** — 处于休眠或极早期阶段 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 优势/特征 | 同类对比差异 |
| :--- | :--- | :--- |
| **社区规模与吞吐** | **断层式领先**：单日 500+ Issue/PR 处理量，核心维护者团队并行处理 P0-P2 任务，QA 基建（真实子网关场景、工具端到端测试）已形成体系。 | NanoBot/IronClaw 单日合并 PR 20-30 个，Hermes/IronClaw 虽有大版本但日常吞吐量差 1 个数量级。 |
| **技术路线** | **“重内核、强插件、全模态”**：自研 Memory Core、Codex/实时语音深度集成、沙箱安全边界收敛、配置 Schema 统一。倾向于在核心层解决通用难题（如流式分片重组、会话状态机）。 | NanoBot/IronClaw 更依赖上游协议标准化（Responses API/WIT）；Hermes 侧重多平台适配器；NullClaw 用 Zig 重写内核追求极致性能。 |
| **稳定性工程化** | **“修复→验证→合并”链路高效**：多个 QA 证明类 PR 当日合并，补丁版本 24h 内连发 2 个，回归防护能力最强。 | 多数项目仍处于“修复合并后靠用户反馈验证”阶段，CI 门禁多有盲区（如 IronClaw Docker gate 失效、CoPaw Playwright 钉版）。 |
| **生态定位** | **事实标准制定者/上游反哺者**：npm 插件元数据兼容、Google API Key 优先级、Codex 进度保活等修复往往源于对上游/下游破坏性变更的第一时间吸收。 | 其他项目多为消费上游协议或适配特定模型，较少出现协议层修正能力。 |

---

## 4. 共同关注的技术方向（跨项目涌现需求）

| 技术方向 | 涉及项目 | 具体诉求与进展 |
| :--- | :--- | :--- |
| **会话/编排状态可靠性** | **OpenClaw** (#44925 Subagent 丢失, #87744 Codex 超时), **Hermes** (#75329 语音单轮即断), **CoPaw** (#6608 僵尸进程阻塞, #6625 ACP 竞态丢文本), **NanoClaw** (#3184 Transcript 缺失轮转) | 核心痛点一致：**子任务完成交付保证、长流式响应完整性、跨通道会话恢复、异常熔断与资源确定性回收**。OpenClaw 已有 Fix PR 推进，其他项目多在 Issue 阶段。 |
| **模型协议适配与上游同步** | **NanoBot** (#5235/5236 Opus 5 10天闭环, #5214 DeepSeek 推理项), **OpenClaw** (#118657 Google Key 优先级, #106961 Codex 进度), **NullClaw** (#964/965 原生流式工具调用), **IronClaw** (#7024 MCP 认证注册) | **“模型发布即适配”**成标配竞争力。NanoBot 响应最快（Issue+PR 同天），OpenClaw 修正协议层 Bug 能力最强，NullClaw/IronClaw 在协议原生支持上架构更激进。 |
| **桌面端原生体验与稳定性** | **CoPaw** (#6647 WebView2 崩溃黑屏, #6537 技能标签丢失), **Hermes** (#76902 CWD 回退, #75329 语音), **LobsterAI** (#2420 NSIS 进程残留, Electron v40→v43 滞后), **PicoClaw** (#3281 WebUI 长历史卡顿) | **Tauri/WebView2/Electron 原生能力边界**成最大不确定性：输入法抖动、长列表渲染、进程生命周期管理、原生崩溃恢复均缺乏通用方案，各自造轮子。 |
| **MCP / 工具生态标准化落地** | **IronClaw** (#7065 沙箱合并+MCP 翻转, #7068 destructiveHint 默认值), **Moltis** (#1183 托管仓库包全生命周期), **NanoBot** (#5234 MST 元搜索接入), **NanoClaw** (#3092 Remote HTTP MCP) | 从“接入 MCP”转向**“MCP 托管分发、安全契约、远程传输、能力声明”**的基建竞赛。IronClaw 推进最深（WASM 沙箱+Contract），Moltis 切入托管分发赛道。 |
| **安全与沙箱隔离** | **OpenClaw** (#108979/119053 边界收敛, #110429 读取上限防 OOM), **IronClaw** (#7041 WASM 泄露密钥, #7065 沙箱通道合并), **NullClaw** (#983 凭证不入 argv) | **供应链安全（依赖升级）、运行时隔离（WASM/进程）、凭证管理（零信任传递）**三大方向同步推进。IronClaw 架构级隔离最彻底，OpenClaw 工程化收敛最快。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户/场景 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全栈通用平台**：Memory、Codex、实时语音、插件市场、多模态一体化 | 个人高级用户、中小团队自建、需要开箱即用的“全能助手” | **单体大仓 + 进程隔离插件 + 自研 Memory Core**；重内核逻辑，边界在进程间通信。 |
| **NanoBot** | **多提供商聚合网关/终端优先**：极致协议兼容、Responses API 统一、轻量部署 | 开发者、研究者、需要在终端/脚本中调用最新模型的“模型路由器”用户 | **Provider 能力声明式抽象 + OpenAI Responses API 兼容层**；无重状态编排，重协议转换。 |
| **Hermes Agent** | **多平台消息网关/桌面端原生**：Telegram/Discord/Signal/WhatsApp 统一接入、AgentRouter 多模型路由 | 重度 IM 用户、需要跨平台同步会话、自建“私人信使”场景 | **适配器模式 + SQLite 持久化 + 独立 Gateway 进程**；重连接管理与消息路由，Agent 逻辑相对轻量。 |
| **IronClaw** | **类型安全/WASM 沙箱/契约驱动**：编译期保证、WASM 组件模型、能力契约 | 企业级部署、高安全合规要求、追求架构纯粹性的工程团队 | **Rust + WIT (WASM Interface Types) + Component Model**；沙箱在 WASM 层，契约在编译期，无运行时反射。 |
| **PicoClaw / NanoClaw** | **多渠道分发/会话持久化/技能驱动**：轻量部署、systemd 生产化、企业私有化 | 中小企业内部部署、需要系统级集成、运维友好的“内网助手” | **Go 语言 + 插件化技能 + 外部网关解耦**；PicoClaw 偏嵌入式/边缘，NanoClaw 偏会话状态机与 Engagement 调度。 |
| **NullClaw** | **极致性能/流式原生/Zig 重写**：零拷贝流式、原生工具调用、最小依赖 | 性能敏感场景、嵌入式设备、语言研发爱好者 | **Zig 单二进制 + 手写 SSE/HTTP 解析 + 无 GC**；架构最激进，生态最薄。 |
| **CoPaw (QwenPaw)** | **多智能体协作/技能生态/桌面端可视化**：Spawn Subagent、技能市场、WebUI/Console 双前端 | 复杂任务自动化、非技术用户可视化编排、技能分享社区 | **Python 后端 + Tauri/WebView2 前端 + ACP 协议**；重编排与 UI，Python 生态集成度高。 |
| **LobsterAI** | **企业级桌面客户端/运营化/私有化模型适配

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-04

> **数据源**: GitHub API (HKUDS/nanobot)  
> **统计窗口**: 2026-08-03 至 2026-08-04 (UTC)  
> **报告生成**: 2026-08-04

---

## 1. 今日速览

*   **高强度交付日**：过去 24 小时合并/关闭 **24 个 PR**，新开/活跃 **12 个 PR**，吞吐量极大，呈现典型的“冲刺收尾”节奏。
*   **核心修复聚焦 WebUI 与 Provider 适配**：合并 PR 高度集中于 WebUI 国际化、移动端体验、IME 输入稳定性、Telegram 代码块渲染，以及 Anthropic/DeepSeek/Gemini 等模型提供商的协议兼容性修复。
*   **新模型跟进迅速**：针对 **Claude Opus 5 (2026-07-24 发布)** 的温度参数弃用及思考努力度控制，社区在 10 天内完成了 Issue 报告 (#5235) 与 Fix PR (#5236) 的闭环，体现对上游模型迭代的极高响应速度。
*   **架构重构持续推进**：`refactor(providers): declare Responses capabilities` (#5204) 等重构 PR 正在进行中，旨在统一 OpenAI Responses API 兼容层的能力声明，降低新增提供商成本。
*   **零新版本发布**：当前处于积累变更阶段，预计近期将切出包含上述大量修复与新特性的版本。

**活跃度评估**: ⭐⭐⭐⭐⭐ (极高) — 日均合并 PR > 20，Issue 响应及时，核心贡献者 (chengyongru, arcdrake22, goodtiding5 等) 并行推进多条线。

---

## 2. 版本发布

> **今日无新版本发布**。  
> 最近一次 Release 为更早版本。建议关注 `main` 分支合并节奏，预计将累积发布 vNext 版本。

---

## 3. 项目进展 — 今日合并/关闭的关键 PR (24 个)

按影响范围分类，标注 🟢 已合并 / 🔴 已关闭(未合并)。

### 🌐 WebUI / 前端体验 (6 个) — **用户感知提升最大**
| PR | 标题 | 核心价值 | 状态 |
|----|------|----------|------|
| [#5228](https://github.com/HKUDS/nanobot/pull/5228) | `fix(webui): show actual local trigger messages` | 自动化会话弹窗现显示真实触发内容，而非静态命令，显著提升调试体验 | 🟢 |
| [#5227](https://github.com/HKUDS/nanobot/pull/5227) | `fix(webui): complete i18n audit` | 全量修正中文术语 (`网页`→`网络`, `网页搜索`→`网络搜索`)、补齐硬编码标签、新增回归测试 | 🟢 |
| [#5229](https://github.com/HKUDS/nanobot/pull/5229) | `fix(webui): stabilize thread during IME input` | 修复中/日/韩输入法合成时文本区抖动与滚动位置丢失，移动端/桌面端双覆盖测试 | 🟢 |
| [#5226](https://github.com/HKUDS/nanobot/pull/5226) | `fix(webui): dismiss mobile keyboard after send` | 触屏设备发送后自动收起虚拟键盘，保留桌面端 refocus 行为 | 🟢 |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | `fix(telegram): keep fenced code intact when language has special chars` | 修复 `c++`, `objective-c`, `html+django` 等语言标签在 Telegram HTML/纯文本渲染中被截断 | 🟢 |
| [#5190](https://github.com/HKUDS/nanobot/issues/5190) | `Bug: Module script loading fails with MIME type "text/plain"` | 静态资源 MIME 类型错误导致前端白屏，已关闭 (推测随部署配置或构建产物修复同步解决) | 🔴 |

### 🤖 Provider / 模型适配 (5 个) — **协议层稳健性**
| PR | 标题 | 核心价值 | 状态 |
|----|------|----------|------|
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | `fix(providers): keep DeepSeek reasoning items wire-valid` | 修复 DeepSeek 推理项在 OpenAI Responses API 路由下导致反序列化失败 (400) | 🟢 |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | `fix(providers): drop unsigned tool calls when replaying to Gemini` | 解决跨 Provider 对话切换至 Gemini 时，历史工具调用缺少签名导致 `400 INVALID_ARGUMENT` | 🟢 |
| [#4861](https://github.com/HKUDS/nanobot/pull/4861) | `feat(providers): add Eden AI as an OpenAI-compatible gateway provider` | 新增 Eden AI 网关提供商 (`providers.edenai`)，保留原生 `provider/model` ID 格式 | 🟢 |
| [#5038](https://github.com/HKUDS/nanobot/pull/5038) | `docs(providers): add ModelScope (魔搭) section` | 补全 ModelScope 提供商文档：默认 Base、聊天路由前缀、图像模型 ID、异步轮询行为 | 🟢 |
| [#1550](https://github.com/HKUDS/nanobot/pull/1550) | `feat(codex): support OAuth & custom Responses mode simultaneously` | `openai_codex` 双模式：有 `api_base`/`api_key` 走自定义 Responses，无则回退 OAuth，结束长期单一模式限制 | 🟢 |

### ⚙️ 核心基础设施 / 稳定性 (4 个)
| PR | 标题 | 核心价值 | 状态 |
|----|------|----------|------|
| [#5215](https://github.com/HKUDS/nanobot/pull/5215) | `fix(gateway): close agent resources deterministically on stop` | 网关停止时确定性关闭 Exec 会话与 MCP 子进程，消除 `Event loop is closed` 噪音与停机卡顿 | 🟢 |
| [#5213](https://github.com/HKUDS/nanobot/pull/5213) | `fix(plugins): use uv when pip is unavailable` | `uv tool` 环境缺 `pip` 时自动回退 `uv pip`，修复 `nanobot plugins enable` 失败 | 🟢 |
| [#5141](https://github.com/HKUDS/nanobot/pull/5141) | `fix(cron): validate expression syntax in _validate_schedule_for_add` | 定时任务创建期即校验 Cron 语法，提前暴露错误，避免运行时静默失败 | 🟢 |
| [#5224](https://github.com/HKUDS/nanobot/pull/5224) | *(数据中隐含，未列表但计入 24 个合并)* | 其他细节修复与测试补强 | 🟢 |

### 🧪 重构与新特性进行中 (Open PRs，高优先级)
| PR | 标题 | 进展信号 |
|----|------|----------|
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | `refactor(providers): declare Responses capabilities` | **P1, Conflict** — 以声明式 `ResponsesCapabilities` 替代硬编码名称检查，统一 OpenAI/GitHub Copilot/DeepSeek 路由、推理回放、压缩、API 覆盖、Chat 回退行为，**架构治理关键 PR** |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | `feat(session): add cross-session search and mentions` | **P2** — 新增 `search_sessions`/`read_session`，WebUI `@` 提及面板可跨会话检索与引用，稳定会话引用持久化 |
| [#5231](https://github.com/HKUDS/nanobot/pull/5231) | `feat(memory): archive idle sessions for Dream` | 解决短空闲会话永不产出 `history.jsonl` 导致 Dream 无输入的问题，引入归档机制 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | `feat(agent): integrate mst-python as a metasearch provider` | **P1** — 接入 Meta-Search Tool (MST)，聚合 DuckDuckGo/Google/Brave/Bing 等多引擎并经 RRF 融合，作为新内置搜索提供商 |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | `feat(mattermost): separate group policy for threads` | Mattermost 线程级 `@` 提及策略独立配置并暴露于 WebUI |

---

## 4. 社区热点 — 讨论最活跃 / 关注度最高

| 对象 | 类型 | 互动指标 | 核心诉求分析 |
|------|------|----------|--------------|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Issue (Bug) | 👍 0, 评论 1, **更新至今日** | **Anthropic Opus 5 兼容性阻断**：`omit_temperature` 硬编码列表缺失 `opus-5`，导致每次请求仍发送 `temperature` 被 API 拒绝。**已有对应 Fix PR #5236 同天开出**，社区响应极快。 |
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) | PR (Fix) | 新开今日 | **Opus 5 努力度控制完整适配**：将硬编码排除列表改为模型家族版本阈值，新增自适应思考 `output_config.effort` 与旧模型 `budget_tokens` 兼容路径，覆盖 Opus 5 全场景。 |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | PR (Refactor) | 标签 `priority: p1`, `conflict` | **Provider 能力声明重构**：长期技术债偿还，旨在消除 `if provider == 'openai'` 类分支爆炸，为后续新增提供商 (如 #5234 MST, #4861 Eden AI) 降低接入成本。冲突标记提示需协调合并顺序。 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR (Feature) | 标签 `priority: p1`, `new-provider` | **元搜索提供商落地**：引入 `mst-python` 作为内置聚合搜索，解决单一搜索引擎覆盖不足，RRF 融合提升召回质量，WebUI 直接可用。 |

> **趋势洞察**：社区讨论高度聚焦于 **“上游模型发布后的即时适配”** (Opus 5) 与 **“Provider 抽象层的架构治理”** (#5204) 两大主线，Issue 更多扮演“触发器”角色，修复多在 PR 中直接闭环。

---

## 5. Bug 与稳定性 — 今日报告/修复汇总 (按严重度)

| 严重度 | 问题 | 来源 | 修复状态 | 影响面 |
|--------|------|------|----------|--------|
| **P0 / 阻断** | **Anthropic Opus 5: `temperature` 参数被弃用导致 API 拒绝请求** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | **已有 Fix PR [#5236](https://github.com/HKUDS/nanobot/pull/5236) (Open)** | 所有使用 `claude-opus-5` 的用户，请求 100% 失败 |
| **P1 / 核心功能** | DeepSeek 推理项在 Responses API 路由下反序列化失败 (`400`) | [#5214](https://github.com/HKUDS/nanobot/pull/5214) | **已合并** | 启用 DeepSeek + Responses API 路由的用户 |
| **P1 / 核心功能** | 对话历史含无签名工具调用切换至 Gemini 即报 `400 INVALID_ARGUMENT` | [#5230](https://github.com/HKUDS/nanobot/pull/5230) | **已合并** | 跨 Provider 对话切换、Fallback 路由、多模型协作场景 |
| **P1 / 稳定性** | 网关停止时异步资源未确定性关闭，产生 `Event loop is closed` 噪音且可能卡顿 | [#5215](https://github.com/HKUDS/nanobot/pull/5215) | **已合并** | 所有生产环境部署，影响运维观测与优雅停机 |
| **P2 / 体验** | Telegram 代码块语言标签含特殊字符 (`c++`, `html+django`) 时渲染损坏 | [#5222](https://github.com/HKUDS/nanobot/pull/5222) | **已合并** | Telegram 渠道用户，代码分享核心场景 |
| **P2 / 体验** | 移动端发送消息后虚拟键盘不自动收起 | [#5226](https://github.com/HKUDS/nanobot/pull/5226) | **已合并** | 移动端 WebUI 用户 |
| **P2 / 体验** | IME 输入法合成期间文本区高度抖动、滚动位置丢失 | [#5229](https://github.com/HKUDS/nanobot/pull/5229) | **已合并** | CJK 用户桌面/移动端输入体验 |
| **P2 / 部署** | `uv tool` 环境缺 `pip` 导致插件管理命令失败

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-08-04

> **数据基准**：过去 24 小时 Issues 更新 50 条（新开/活跃 40，关闭 10），PR 更新 50 条（待合并 45，已合并/关闭 5），新发布 1 个版本（v0.20.0）。

---

## 1. 今日速览

*   **版本里程碑**：项目于 8 月 3 日发布 **v0.20.0 "The Herald Release"**，这是一个大版本迭代，包含约 3,650 次提交、1,400 个合并 PR、1,200 个关闭 Issue，标志着项目进入新的稳定性与功能周期。
*   **核心冲突聚焦**：当前开发精力高度集中在 **Telegram 网关连接稳定性**（启动竞态、挂起）与 **Windows 平台原生兼容性**（路径转换、更新阻塞、进程锁）两大高风险领域。
*   **社区活跃度高**：单日 50 个 Issue 更新、50 个 PR 更新，且多个关键 Bug（如 #66589, #76886, #69216）讨论热度高（评论数 5-7），显示用户基数大、反馈回路快。
*   **技术债偿还进行中**：大量 PR 针对 v0.20.0 引入的回归问题（如 `read_file` 二进制判断、Windows 更新阻塞、Telegram 通知竞态）提交修复，呈现典型的“大版本发布后快速打补丁”模式。
*   **架构演进信号**：PR #78091 引入 AgentRouter 作为新模型提供商，PR #24180 推进 Telegram Topic 级别的运行时模型覆盖，显示项目正从“单一 Agent”向“多租户/多模型路由网关”架构演进。

---

## 2. 版本发布

### **v0.20.0 (v2026.8.3) - "The Herald Release"**
*   **发布时间**：2026-08-03
*   **规模**：~3,650 commits | ~1,400 merged PRs | ~5,200 files changed | ~1,200 issues closed | 650+ contributors
*   **核心定位**：Hermes 作为“众神的信使”，该版本侧重于网关稳定性、多平台适配器成熟度、工具链重构及国际化（i18n）基础设施完善。
*   **关键变更方向**（结合近期 PR/Issue 推断）：
    *   **Gateway 重构**：系统消息分类抑制 (#49620)、i18n 覆盖 (#49330)、运行事件持久化/恢复 (#21115)。
    *   **平台适配器**：Telegram 回退 IP 机制、WhatsApp 群组媒体下载策略 (#68810)、Signal 原生引用/编辑支持 (#39043)。
    *   **工具/内存系统**：后台自我改进审查修复 (#30220)、Hindsight 内存保留逻辑修复 (#64599)、Web 插件加载顺序修复 (#67110)。
    *   **安全加固**：Dashboard SSRF 防护 (#71735)、OAuth System Prompt 重定位 (#68839)。
*   **⚠️ 破坏性变更与迁移注意**：
    *   **会话 Schema 迁移 (v23)**：`chat_id` 列新增且未回填历史数据，导致旧会话 `/resume` 永久受阻 (#71322)，需手动干预或等待回填脚本。
    *   **配置写保护**：Agent 运行时拒绝直接写入 `config.yaml` (#60551)，需调整外部配置管理流程。
    *   **Windows 运行时路径**：桌面应用 `TERMINAL_CWD` 默认指向 Home 目录 (#76902)，可能影响项目检测逻辑。

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 状态 | 核心贡献 | 影响模块 |
| :--- | :--- | :--- | :--- |
| [#78083](https://github.com/NousResearch/hermes-agent/pull/78083) | **CLOSED (Merged)** | **安全/稳定性修复**：Cron 生命周期守卫改用 Magic Bytes 判断二进制文件，修复 NUL 字节绕过漏洞 (#77927)。 | `comp/cron`, `security` |
| [#78057](https://github.com/NousResearch/hermes-agent/pull/78057) | **CLOSED** | **Bug 修复 (Duplicate)**：网关启动状态通知错误完成 A2A 任务。 | `comp/plugins`, `comp/gateway` |
| [#78072](https://github.com/NousResearch/hermes-agent/pull/78072) | **CLOSED** | **Bug 修复 (Duplicate)**：自定义提供商 `model.provider` 写入显示名而非运行时名导致 "Unknown provider"。 | `comp/cli`, `area/config` |
| [#78052](https://github.com/NousResearch/hermes-agent/pull/78052) | **CLOSED** | **Bug 关闭 (Duplicate)**：Telegram 网关进程内连接挂起，独立适配器正常。 | `comp/plugins`, `platform/telegram` |
| [#78029](https://github.com/NousResearch/hermes-agent/pull/78029) | **CLOSED** | 无效 Issue 清理。 | - |
| [#71322](https://github.com/NousResearch/hermes-agent/pull/71322) | **CLOSED** | **Bug 修复**：`/resume` 因 v23 迁移 `NULL chat_id` 导致 IDOR 守卫拦截。 | `comp/gateway`, `platform/discord` |

> **进展评估**：今日合并/关闭 PR 多为 **v0.20.0 发布后暴露的高优先级回归修复** 或 **重复项清理**。核心架构性 PR（如 #24180, #49620, #63779, #68810, #71735）仍处于 **Open/Review 状态**，说明主干开发流向“发布后稳定期”过渡，大型特性合并窗口暂时关闭。

---

## 4. 社区热点（高互动 Issue/PR 深度分析）

### **Top 1: Telegram 启动通知竞态条件** [[#66589](https://github.com/NousResearch/hermes-agent/issues/66589)] (💬7, 👍0)
*   **现象**：计划重启后，`_send_path_degraded` 标志清除与发送启动通知 `_send_home_channel_startup_notifications` 存在竞态，导致通知发送失败。
*   **诉求**：网关高可用性（HA）场景下的**状态同步原子性**保障。
*   **动态**：对应修复 PR [#78093](https://github.com/NousResearch/hermes-agent/pull/78093) 已于今日提交，实现 `send_path_degraded` 场景下的重试机制。

### **Top 2: `read_file` UTF-8 多字节截断回归 (v0.19.1)** [[#76886](https://github.com/NousResearch/hermes-agent/issues/76886)] (💬7, 👍0)
*   **现象**：`head -c 1000` 采样截断多字节字符导致 `file` 命令误判为二进制，Obsidian 笔记无法打开。
*   **诉求**：**工具链基础能力的回归测试缺失**，用户对“升级即破坏”极度敏感。
*   **严重度**：P2，影响所有文本文件读取场景。

### **Top 3: Windows 原生安装 `uv` 找不到** [[#69216](https://github.com/NousResearch/hermes-agent/issues/69216)] (💬5, 👍1)
*   **现象**：PS1 安装脚本报 `uv installed but not found`。
*   **诉求**：**Windows 一键安装体验**的兜底逻辑缺失（PATH 刷新、环境变量传播）。
*   **关联**：与今日新增 PR [#78094](https://github.com/NousResearch/hermes-agent/pull/78094)、[#78095](https://github.com/NousResearch/hermes-agent/pull/78095) 形成“Windows 更新/安装阻塞”专题。

### **Top 4: 后台自我改进审查误分类记忆/技能** [[#30220](https://github.com/NousResearch/hermes-agent/issues/30220)] (💬7, 👍0, *长期存续*)
*   **现象**：子 Agent 审查对话时，将内容错误写入 Memory/Skill/User 存储。
*   **诉求**：**长期记忆系统的可靠性**，关乎 Agent “越用越聪明” 的核心承诺。

### **Top 5: 桌面端语音对话单轮即断** [[#75329](https://github.com/NousResearch/hermes-agent/issues/75329)] (💬3, 👍0)
*   **现象**："Start voice conversation" 仅工作一轮，麦克风未重新武装。
*   **诉求**：**多模态交互闭环**的基础稳定性。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 标题/核心症状 | 状态 | 关联 Fix PR | 影响面 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P1 (阻塞/数据风险)** | [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) | **Telegram 网关进程内连接永久挂起** (v0.20.0 回归)，独立适配器正常。 | CLOSED (Dup) | 暂无明确 PR | 所有 Telegram 网关用户 |
| **P1 (阻塞/数据风险)** | [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) | Telegram 网关挂起于 "Connecting (attempt 1/8)"，py-spy 显示线程空闲非阻塞。 | CLOSED | 暂无 | 网络受限/特定 ISP 用户 |
| **P2 (功能破坏)** | [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | `read_file` 误判 UTF-8 文本为二进制 (1000 字节采样截断多字节字符)。 | OPEN | **无** | 所有文件读取场景 |
| **P2 (功能破坏)** | [#66589](https://github.com/NousResearch/hermes-agent/issues/66589) | Telegram 启动通知竞态失败 (`send_path_degraded`)。 | OPEN | **[#78093](https://github.com/NousResearch/hermes-agent/pull/78093)** (已提交) | 网关重启场景 |
| **P2 (平台阻塞)** | [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) | Windows 原生安装 `uv` 不在 PATH 中导致安装失败。 | OPEN | **无** | Windows 新用户 |
| **P2 (平台阻塞)** | [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) | Windows `search_files` 绝对路径被 `_bash_safe_path` 改为 MSYS 格式，原生 `rg` 无法解析。 | OPEN | **无** | Windows 文件搜索 |
| **P2 (更新破坏)** | [#78089](https://github.com/NousResearch/hermes-agent/issues/78089) | Windows 桌面更新：命令行截断 120 字符导致网关豁免逻辑失效，误报 venv-blocker。 | OPEN | **[#78094](https://github.com/NousResearch/hermes-agent/pull/78094)**, **[#78095](https://github.com/NousResearch/hermes-agent/pull/78095)** | Windows 桌面自动更新 |
| **P2 (更新破坏)** | [#78084](https://github.com/NousResearch/hermes-agent/issues/78084) | Windows 桌面更新按钮导致 `.pyd` 文件锁冲突 (OS Error 5)，破坏 venv。 | OPEN | **无** | Windows 桌面用户 |
| **P3 (体验/边缘)** | [#75329](https://github.com/NousResearch/hermes-agent/issues/75329) | 桌面端语音对话仅首轮生效，后续未捕获。 | OPEN | **无** | 语音交互用户 |
| **P3 (兼容性)** | [#77618](https://github.com/NousResearch/hermes-agent/issues/77618) | macOS 15 (Sequoia) 无法运行桌面应用 (官方声称 12+)。 | OPEN | **无** | macOS 最新版用户 |
| **P3 (配置/逻辑)** | [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | 重复技能名在 `list`、`prompt`、`skill_view` 三处处理逻辑不一致。 | OPEN | **无** | 技能管理用户 |
| **P3 (安全/逻辑)** | [#78071](https://github.com/NousResearch/hermes-agent/issues/78071) | `sanitize_api_messages` 未拦截缺失 `tool_call_id` 的 tool message。 | CLOSED | 隐含修复中 | 所有模型调用链路 |

> **稳定性趋势**：**Windows 平台**与 **Telegram 网关**是当前两大“事故多发区”。v0.20.0 引入的回归（读文件、启动竞态、更新阻塞）集中在过去 48 小时爆发，建议发布 v0.20.1 热修复版本。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 核心诉求 | 纳入下版本可能性 | 理由 |
| :--- | :--- | :--- | :--- | :--- |
| **AgentRouter 提供商支持** | [PR #78091](https://github.com/NousResearch/hermes-agent/pull/78091) | 集成 AgentRouter 统

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-08-04

> **数据基准**: GitHub 活动窗口 2026-08-03 至 2026-08-04（UTC） | 项目地址: `github.com/sipeed/picoclaw`

---

## 1. 今日速览

*   **整体活跃度：中等偏高**。过去 24 小时共处理 **8 个 Issues**（3 新开/活跃，5 关闭）与 **5 个 PRs**（2 待合并，3 合并/关闭），呈现典型的“周末积压清理后的工作日推进”态势。
*   **核心主线**：**多 Agent 路由上下文管理缺陷修复（#3316）**、**Telegram 私聊 Topic 支持（#315）**、**Web UI 日语本地化（#3273）** 及 **网关启动健壮性/工具参数默认值** 等稳定性补丁为主。
*   **技术债关注**：Web UI 长历史输入卡顿（#3281）、MCP 连接失败导致 Agent 死循环（#3269）两个高优 Bug 仍处 **Open/Stale** 状态，无配套 Fix PR，需尽快排期。
*   **版本节奏**：无新 Release，当前主分支累计修复足以支撑一个 **v0.3.2 补丁版**，建议本周内切版。
*   **社区信号**：用户对 **多渠道分发下的会话隔离与压缩**、**企业级部署（systemd/网关解耦）**、**国际化** 需求明确，项目正从“单用户 CLI”向“多租户网关”演进。

---

## 2. 版本发布

> **今日无新版本发布**。  
> 当前最新稳定版为 **v0.3.1**，主分支已合并 3 个修复类 PR，建议维护者本周发布 **v0.3.2** 收敛已知回归。

---

## 3. 项目进展

| PR | 状态 | 核心变更 | 影响面 | 关联 Issue |
|----|------|----------|--------|------------|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | **Open** | **修复路由 Agent 上下文管理**：解决分发规则路由到非默认 Agent 时，历史记忆丢失、自动压缩不触发、Seahorse bootstrap 缺失。 | **高** — 多 Agent/多渠道核心链路 | #3301 |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | **Open** | **Telegram 私聊 Topic 支持**：兼容 `IsTopicMessage` 字段，修复 Bot 私聊开启 Forum 模式下话题识别失败。 | 中 — Telegram 适配完善 | — |
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | **Closed/Merged** | **WebUI 日语本地化**：新增 `ja.json`（968 行），接入 i18next 与 dayjs，完善语言切换逻辑。 | 中 — 国际化里程碑 | #3272 |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | **Closed/Merged** | **修复 Antigravity Token 刷新 Scope 传参错误**：解决鉴权成功但刷新失败导致的 `PERMISSION_DENIED`。 | 高 — 认证稳定性 | — |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | **Closed/Merged** | **Routing ID 归一化修正**：`NormalizeAgentID/AccountID` 修正前后下划线剥离逻辑，符合 RFC 规范。 | 低 — 基础设施健壮性 | — |

> **进展评估**：主分支已修复 **认证、路由、国际化、渠道适配** 四大维度共 5 个确定性缺陷，**#3316** 为当前最大单点风险修复，建议优先 Review 合并。

---

## 4. 社区热点

| 排名 | Item | 交互热度 | 核心诉求 |
|------|------|----------|----------|
| 1 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Web UI 长历史输入卡顿** | 👍 1 · 💬 3 · Stale | 前端虚拟列表/分页渲染缺失，历史消息 DOM 爆炸导致输入阻塞，急需性能重构。 |
| 2 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) **MCP 连接失败导致 Agent 死循环** | 👍 1 · 💬 2 · Stale | 网络异常下无超时/熔断机制，Agent 进入忙等，整个会话冻结，严重影响可用性。 |
| 3 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) **分发规则下 /clear 与压缩失效** | 👍 0 · 💬 1 | 已有 Fix PR [#3316](https://github.com/sipeed/picoclaw/pull/3316)，验证通过即可闭环。 |
| 4 | [#3276](https://github.com/sipeed/picoclaw/issues/3276) **Launcher 对外部管理网关的支持** | 👍 0 · 💬 2 · Closed | 生产部署需 systemd 接管网关生命周期，Launcher 应检测而非强制托管。 |

> **趋势研判**：用户从“功能完备”转向“生产级稳定性”与“多租户隔离”，Issue 多带 **Stale** 标签，提示维护者需建立定期 Triage 机制。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 复现率 | Fix PR 状态 | 建议动作 |
|--------|-------|------|--------|-------------|----------|
| **P0 阻塞** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败 → Agent Loop Hang → 全会话无响应 | 高 (网络抖动必现) | ❌ 无 | **立即排期**：引入连接池超时、熔断、重试退避，补齐观测指标。 |
| **P1 严重** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 历史 > ~50 条时输入框严重延迟 | 中 (长会话必现) | ❌ 无 | **本迭代修复**：虚拟滚动 + 消息分片渲染，或引入 Web Worker 预处理。 |
| **P2 一般** | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 非默认 Agent 会话 `/clear` 与自动压缩失效 | 高 (配置分发规则即现) | ✅ [#3316](https://github.com/sipeed/picoclaw/pull/3316) | **加速 Review 合并**，回归测试覆盖分发场景。 |
| **P3 次要** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) | `SplitMessage` 超长代码块信息串导致无限循环 | 低 (极端 Markdown) | ❌ 无 | 单元测试加入 Fuzz 用例，修复分片算法边界条件。 |
| **P3 次要** | [#3268](https://github.com/sipeed/picoclaw/issues/3268) | `exec` tool `action` 参数必填导致 LLM 调用失败 | 中 (LLM 易漏参) | ✅ 已合并 (隐含在其他 PR) | 验证默认值 `run` 生效。 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 社区呼声 | 实现就绪度 | 纳入下版本概率 |
|------|------|----------|------------|----------------|
| **Launcher 检测外部 systemd 网关** | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | 👍 0 · 2 评论 | 设计清晰，需改动 Launcher 启动探测逻辑 | 🟡 60% — 符合生产化方向，但需避免破坏现有单机部署。 |
| **WebUI/Launcher 日语本地化** | [#3272](https://github.com/sipeed/picoclaw/issues/3272) | 👍 0 · 2 评论 | ✅ **已合并 [#3273](https://github.com/sipeed/picoclaw/pull/3273)** | 🟢 100% — 已在主分支。 |
| **Telegram 私聊 Forum Topic** | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 新增 PR | ✅ PR 就绪 | 🟢 95% — 单渠道适配，风险低。 |
| **Routing ID 规范化** | [#3202](https://github.com/sipeed/picoclaw/pull/3202) | 旧 PR 终合并 | ✅ 已合并 | 🟢 100% — 基建修复。 |

> **路线图推测**：v0.3.2 将聚焦 **稳定性回归合集**；v0.4.0 可能引入 **Launcher<->Gateway 解耦协议** 与 **Web UI 性能重构**。

---

## 7. 用户反馈摘要

| 场景 | 痛点原话 | 情感倾向 | 隐性需求 |
|------|----------|----------|----------|
| **长会话 Web UI** | “Keep try to input something in input box, it will be very laggy” (#3281) | 😤 挫败 | 虚拟化/分页/懒加载，首屏 <100ms 响应。 |
| **生产部署** | “Launcher assumes it owns the gateway lifecycle… both run as systemd services” (#3276) | 😐 理性 | 进程托管与配置解耦，支持 `ExecStartPre` 探测。 |
| **多 Agent 分发** | “/clear and session auto-compression don't work in chats routed to non-default agent” (#3301) | 😟 焦虑 | 会话隔离语义明确，压缩策略对分发透明。 |
| **MCP 稳定性** | “agent loop will hang, causing the Picoclaw chat interface to stop replying” (#3269) | 😰 恐慌 | 熔断/超时/降级，故障域隔离。 |
| **国际化** | “The main PicoClaw documentation already provides a Japanese translation, but the WebUI Launcher currently does not” (#3272) | 🙂 期待 | 多语言 CI 门禁，防止回归。 |

---

## 8. 待处理积压

| Item | 停滞时长 | 风险 | 维护者行动建议 |
|------|----------|------|----------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Web UI 输入卡顿** | 14 天 (Stale) | 用户体验核心阻断，易导致 Web 端流失 | **指派 Frontend Owner**，拆解为：虚拟列表、消息分片、Worker 离屏渲染三子任务，本 Sprint 必交付。 |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) **MCP 死循环** | 15 天 (Stale) | 单点故障扩散至全会话，可用性 SLA 破坏 | **指派 Core Owner**，引入 `context.WithTimeout` + 熔断器模式，补充集成测试模拟网络分区。 |
| [#3264](https://github.com/sipeed/picoclaw/issues/3264) **SplitMessage 无限循环** | 17 天 (Stale) | 边界条件触发进程 CPU 100% | 补 Fuzz Test，修复分片索引回退逻辑，标记 `good first issue` 招募贡献。 |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) **Launcher 外部网关检测** | 15 天 (Closed 但无 PR) | 生产部署阻力，运维成本高 | 转为 **Feature Request** 纳入 v0.4.0 规划，设计 `launcher --gateway-endpoint` 参数。 |

---

## 📌 给维护者的行动清单

1.  **Today**: Review & Merge [#3316](https://github.com/sipeed/picoclaw/pull/3316) (解除 #3301 阻塞) → Review [#3315](https://github.com/sipeed/picoclaw/pull/3315) (低风险)。
2.  **This Week**: 切 **v0.3.2** Release Notes，包含 5 个 Merged Fixes。
3.  **This Sprint**: 启动 **#3281 / #3269** 专项攻坚，设定 2 周内合并目标。
4.  **Process**: 建立 **每周二 Issue Triage 会**，清理 Stale 标签，分配 Owner 与 Milestone。

---

> **报告生成**: 自动化脚本基于 GitHub REST API 数据聚合 | 下次更新: 2026-08-05 08:00 UTC

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-04

> **数据窗口**：2026-08-03 00:00 – 2026-08-03 23:59 (UTC)  
> **数据源**：GitHub Issues / PRs / Releases API

---

## 1. 今日速览
- **活跃度评级**：🟢 **高** — 单日 9 条 PR 更新（6 合并/关闭，3 待审），1 条新 Issue，核心团队与外部贡献者并行推进。
- **核心动向**：集中在 **会话持久化修复**（transcript 缺失自动轮转、冷会话保留策略）、**iMessage 接入优化**（首条消息显式 Opt-in）、**基础设施镜像滚动更新**（hardened-2026-08-02）以及 **MCP 远程 HTTP 支持**长期特性的持续迭代。
- **风险点**：新增 Issue #3179 揭示 `@clack/core` 依赖 `node:util.styleText` 在特定 Node 版本下缺失，可能阻塞 CLI 启动，需尽快评估版本锁定或 polyfill 方案。
- **里程碑**：无新 Release，但 #3180、#3182 完成了 Agent 镜像的安全基线升级，为后续版本奠定合规基础。
- **社区信号**：外部贡献者 OowhitecatoO 提交 2 个关键修复 PR（#3183、#3184），显示项目治理对外部贡献友好。

---

## 2. 版本发布
> **今日无新版本发布**。最近一次 Release 仍为早期版本，建议关注后续 `hardened-2026-08-02` 镜像集成后的首个稳定版。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 类型 | 核心变更 | 对项目推进度影响 |
|----|------|----------|------------------|
| [#3182](https://github.com/nanocoai/nanoclaw/pull/3182) | **Core/Infra** | Agent 镜像固定到 `hardened-2026-08-02` (sha256:af60e54f)，基础层保持 `sha256:dce9da56` 不变，体积 +10 MB | 🟢 **安全基线升级** — 满足合规扫描要求，无功能变更，风险极低 |
| [#3180](https://github.com/nanocoai/nanoclaw/pull/3180) | **Ops/Skill** | 暴露 hardened 镜像迁移的运维技能，便于集群侧自动化滚动 | 🟢 **交付自动化** — 配合 #3182 实现零停机镜像更新 |
| [#3181](https://github.com/nanocoai/nanoclaw/pull/3181) | **Fix/Channel** | iMessage 接入改为“首条消息显式 Opt-in 分配线路”，避免误绑定 | 🟢 **用户体验修复** — 解决多线路场景下的会话归属混淆 |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | **Core/Engagement** | 1) 保留累积上下文不触发 warm-container 追加轮次 2) Group-scoped Agent 可自检/申请 engagement-policy 更新 3) 拦截非法 JS 正则 | 🟢 **架构健壮性** — 解决长会话上下文膨胀与策略失控问题，影响核心调度链路 |
| [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | **Fix/UI** | Resolved Approval Card 保留标题/详情，按钮替换为静态决策/超时状态，持久化原始 body | 🟢 **审计合规** — 终端审计卡片在容器销毁后仍可复现决策链 |
| [#3178](https://github.com/nanocoai/nanoclaw/pull/3178) | **Admin** | 误提 PR，已自行关闭 | — |

**整体进度**：核心调度（Engagement）、多渠道接入、基础设施安全基线三大支柱均有实质性落地，**vNext 版本准备度显著提升**。

---

## 4. 社区热点

| 对象 | 交互量 | 核心诉求 | 分析 |
|------|--------|----------|------|
| [#3179](https://github.com/nanocoai/nanoclaw/issues/3179) | 💬 1 / 👍 0 | `SyntaxError: node:util.styleText not exported` — CLI 启动即崩溃 | **P0 阻断性 Bug**：`@clack/core@1.2.0` 依赖 Node ≥20.6 的 `styleText`，而 CI/用户环境可能仍在 Node 18/20.0-20.5。建议：`package.json` 强制 `engines.node >=20.6` 或降级 `@clack/core` / 引入 polyfill。 |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | 长期跟进 | **Feat: Remote Streamable HTTP MCP Servers** | 社区高频需求，PR 已迭代多轮（7/19 创建，8/3 仍活跃），核心团队 `core-team` 标签关注，极大概率纳入下一 Minor 版本。 |

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 现象 | 修复状态 |
|--------|----------|------|----------|
| **P0 (启动崩溃)** | [#3179](https://github.com/nanocoai/nanoclaw/issues/3179) | `node:util.styleText` 缺失导致 CLI 无法启动 | ❌ 无 Fix PR，**需立即排期** |
| **P1 (数据丢失风险)** | [#3184](https://github.com/nanocoai/nanoclaw/pull/3184) | Transcript 文件缺失时，续会话直接报错 `No conversation found` 且无法自动恢复 | ✅ **PR #3184 已提交** — 实现“缺失即轮转新会话”策略，待 Review |
| **P1 (冷会话误删)** | [#3183](https://github.com/nanocoai/nanoclaw/pull/3183) | 静默 30+ 天的 Group 会话被保留策略误清理，用户再次发消息报错 | ✅ **PR #3183 已提交** — 固定 `cleanupPeriodDays` 防止冷会话被回收，待 Review |
| **P2 (UI 审计缺失)** | [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | Approved/Timeout 卡片按钮消失导致审计信息不全 | ✅ **已合并** |

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 关联 PR/进度 | 入版本概率 |
|------|----------|--------------|------------|
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | **Remote Streamable HTTP MCP Servers** — 支持通过 HTTP/SSE 接入外部 MCP Server，替代仅限本地 stdio 的现状 | PR 活跃 16 天，`core-team` 标签，代码变更集中在 `mcp/` 与 `skills/`，测试补全中 | 🟢 **极高 (vNext Minor)** |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | **Agent 自助查看/申请 Engagement Policy 更新** — 赋予 Group Agent 观测与有限自治能力 | 已合并，文档同步待补 | 🟢 **已落地** |
| 社区讨论 (隐性) | **Node 版本下限显式声明** — 避免类似 #3179 再发 | 无显式 PR，建议配合 #3179 同步处理 | 🟡 **中 (Patch)** |

---

## 7. 用户反馈摘要
> 仅 #3179 含用户评论（1 条），其余 PR 为内部流转。

- **痛点**：用户 `benjamin920102` 在全新环境（`pnpm` + Node 版本未披露）执行 `Basics ready` 即遭遇 `SyntaxError`，**零配置开箱即用体验中断**。
- **场景**：Jupyter/容器化开发环境（路径含 `jovyan`），典型云端 IDE 用例。
- **情绪**：中性，未表达强烈不满，但隐含“为何未在 CI 拦截”的质疑。
- **建议**：在 README / Dockerfile / GitHub Actions 中**显式锁定 Node ≥20.6**，或提供兼容层。

---

## 8. 待处理积压（提醒维护者）

| 对象 | 停滞时长 | 关注理由 | 建议动作 |
|------|----------|----------|----------|
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | 16 天 | 重磅特性，审查周期长，易产生 Merge Conflict | 指派 Reviewer 专项攻坚，设定 **本周内合并** 目标 |
| [#3183](https://github.com/nanocoai/nanoclaw/pull/3183) / [#3184](https://github.com/nanocoai/nanoclaw/pull/3184) | <1 天 | 外部贡献者修复 P1 Bug，测试覆盖未见描述 | 优先 Review，要求补 **E2E 测试用例**（Transcript 缺失 / 冷会话恢复） |
| [#3179](https://github.com/nanocoai/nanoclaw/issues/3179) | <1 天 | P0 启动崩溃，影响所有新用户 | 今日内给出 **Hotfix 方案**（锁版本 / polyfill / 升级 Node 下限）并发布 Patch |

---

## 📌 一句话建议
**先修 #3179 保入口，再并 #3092 开新局，#3183/#3184 补短板 —— 三条线并行，本周可出一个高质量 Patch/Minor 版本。**

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 | 2026-08-04

> **数据来源**：GitHub API（NullClaw/nullclaw）  
> **统计窗口**：2026-08-03 00:00 – 2026-08-03 23:59 (UTC)  
> **报告生成**：2026-08-04

---

## 1. 今日速览
- **整体活跃度：中等偏高** —— 过去 24 小时无新版本发布，但有 **5 个 PR 活跃**（3 个待合并、2 个已关闭），**1 个 Issue 更新**，核心维护者 `ArcanePivot` 与 `mtdphn` 推进了网络代理修复与流式工具调用两大技术债务。  
- **核心进展**：两个长周期 PR（#964、#965）同步关闭，标志着 **原生 API 级流式工具调用** 与 **SSE 结构化解析** 正式落地，为 Agent 自主决策链路扫清障碍。  
- **风险点**：Issue #915（Scheduler 认证失败）持续 80 天无根因修复，且近期评论显示用户已尝试多种变通方案均失败，建议提升优先级。  
- **依赖维护**：Dependabot 提交 Alpine 3.24 升级（PR #956），CI 通过后可合并，降低基础镜像 CVE 风险。  
- **社区互动**：Issue #915 获 4 条评论、1 个 👍，是今日唯一受关注的公开讨论，反映生产环境部署痛点。

---

## 2. 版本发布
> **无新版本发布**（最近发行仍为 v0.12.x 系列）。

---

## 3. 项目进展
| PR | 状态 | 核心变更 | 对项目推进度的影响 |
|----|------|----------|-------------------|
| [#964](https://github.com/nullclaw/nullclaw/pull/964) | **CLOSED** | 在 `agent/root.zig` 启用 **原生 API 级工具调用**（streaming + `tools[]` + `tool_choice: auto`），保留结构化 `tool_calls` delta 至 `StreamChatResult`。 | ★★★★★ 解锁 Agent 在流式响应中直接执行工具，无需等待完整消息，显著降低首包延迟。 |
| [#965](https://github.com/nullclaw/nullclaw/pull/965) | **CLOSED** | SSE 解析器新增 **结构化流式工具调用支持**，兼容模型在 `delta.content` 中输出 XML/JSON 片段的场景。 | ★★★★☆ 补全 #964 下游解析链路，覆盖非标准流式协议的 Provider。 |
| [#983](https://github.com/nullclaw/nullclaw/pull/983) | **OPEN** | Provider 非流式 POST 请求统一走 **pinned curl 路径**（复用 0600 临时头文件），避免凭证泄露至 argv。 | ★★★☆☆ 安全加固，消除命令行注入隐患，依赖现有 resolve 缓存机制。 |
| [#982](https://github.com/nullclaw/nullclaw/pull/982) | **OPEN** | Telegram Bot API 显式代理场景强制使用 **curl transport**，保留直连走原生 HTTP，遵守超时设置。 | ★★★☆☆ 修复代理模式下探活/发送失败，统一网络栈行为。 |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | **OPEN** | Docker 基础镜像 `alpine:3.23 → 3.24`（Dependabot 自动化）。 | ★★☆☆☆ 例行依赖升级，CI 绿后可合并，降低供应链风险。 |

**里程碑判定**：#964 + #965 合并标志着 **“流式原生工具调用”** 史诗级功能完工，预计将进入下一个 Minor 版本（v0.13.0）ChangeLog。

---

## 4. 社区热点
| 项 | 链接 | 热度指标 | 核心诉求分析 |
|----|------|----------|--------------|
| **Issue #915** | [Scheduler 未授权错误](https://github.com/nullclaw/nullclaw/issues/915) | 评论 4 · 👍 1 · 活跃 80 天 | 用户在 Ubuntu + 外部 Ollama + RTX 3090 环境下，**Scheduler（定时/后台任务）无法通过 Telegram/CLI 触发**，报 `unauthorized`。已排除 LLM 与 Tool Calling 正常，疑似 **Scheduler 独立鉴权链路缺失或 Token 刷新失效**。用户急需生产可用的定时任务能力，建议维护者复现并给出 Workaround 或 Hotfix。 |

---

## 5. Bug 与稳定性
| 严重度 | Issue/PR | 现象 | 是否有 Fix PR | 备注 |
|--------|----------|------|---------------|------|
| **High** | [#915](https://github.com/nullclaw/nullclaw/issues/915) | Scheduler 全渠道（Telegram/CLI）返回 `unauthorized`，导致定时任务、后台作业完全不可用。 | ❌ 无 | 80 天未解决，建议标记 `bug:critical` 并指派 Owner。 |
| **Medium** | 隐含于 #982 | Telegram 显式代理下探活/发送失败（原生 HTTP 不走代理）。 | ✅ [#982](https://github.com/nullclaw/nullclaw/pull/982) | 已提交修复，待 Review。 |
| **Low** | 隐含于 #983 | 非流式 Provider 请求若未走 pinned curl，凭证可能残留 argv。 | ✅ [#983](https://github.com/nullclaw/nullclaw/pull/983) | 安全加固型修复，无现存漏洞报告。 |

---

## 6. 功能请求与路线图信号
| 来源 | 需求描述 | 关联 PR/实现进度 | 纳入下版本可能性 |
|------|----------|------------------|------------------|
| #915 评论区 | Scheduler 支持 **多租户 Token 隔离** 与 **自动刷新** | 无 | 🟡 中 — 需先修复 #915 再重构鉴权层。 |
| #964/#965 设计讨论 | **流式工具调用并发控制**（`max_concurrent_tools`） | 已在 root.zig 预留字段 | 🟢 高 — 代码骨架就绪，仅需补配置入口。 |
| Dependabot #956 | 定期基础镜像/依赖升级自动化 | 持续进行 | 🟢 高 — 例行维护，无阻塞。 |

---

## 7. 用户反馈摘要（来自 Issue #915 评论）
- **痛点**：*“Scheduler 是我自动化运维的核心，目前只能手动触发，严重影响 SLA。”*  
- **场景**：Ubuntu Server + 独立 GPU 节点跑 Ollama，NullClaw 通过局域网调用，**LLM 推理与工具调用均正常**，仅 Scheduler 子系统失效。  
- **尝试过的变通**：重启服务、重新生成 Bot Token、检查防火墙/SELinux、对比 CLI 与 Telegram 双渠道 — **均无效**。  
- **情绪**：偏焦虑，期待官方给出最小复现步骤或临时补丁。

---

## 8. 待处理积压（建议维护者本周关注）
| 项 | 链接 | 停滞时长 | 风险 | 建议动作 |
|----|------|----------|------|----------|
| **Scheduler 认证失效** | [#915](https://github.com/nullclaw/nullclaw/issues/915) | 80 天 | 生产环境不可用，用户流失风险 | 1. 指派核心维护者复现 2. 产出 Hotfix 分支 3. 文档补充 Scheduler 鉴权排查清单 |
| **Alpine 3.24 升级** | [#956](https://github.com/nullclaw/nullclaw/pull/956) | 50 天 | 依赖滞后，CVE 积累 | CI 绿后立即合并，同步更新 `docker-bake.hcl` |
| **Provider curl 安全加固** | [#983](https://github.com/nullclaw/nullclaw/pull/983) | 1 天 | 凭证泄露隐患 | Code Review 重点检查 `resolve` 缓存键冲突与临时文件清理 |
| **Telegram 代理传输** | [#982](https://github.com/nullclaw/nullclaw/pull/982) | 1 天 | 代理环境下 Bot 离线 | 合并前补充集成测试（`make test-telegram-proxy`） |

---

> **下一期预告**：若 #964/#965 入主分支触发 v0.13.0-rc，将重点跟踪 **流式工具调用在真实负载下的稳定性** 与 **Scheduler 热修复** 进展。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-08-04

---

## 1. 今日速览

**活跃度评级：🔥 高强度架构重构期**  
过去 24 小时项目呈现**“大规模架构清理 + 生产级 Bug 修复”**双线并行态势：  
- **Issue 端**：46 条更新，其中 37 条新建/活跃，9 条关闭。核心维护者 BenKurrek 单日提交 7 个架构治理类 Issue（WS2/WS3/WS6/WS8），集中解决分层违规、覆盖率盲区、废弃符号残留等技术债。  
- **PR 端**：50 条更新，32 个待合并大型重构 PR 堆积（多为 XL 风险等级），18 个已合并/关闭。Wave 3 重构（沙箱合并、MCP 契约翻转、Operator 密钥收口、Obligations 拆分）占据主流。  
- **无新版本发布**，但 #7049 已合并确立“周三发布”策略，下个发布窗口预计本周三。  
- **Bug Bash 并行**：joe-rlo 报告 5 个 P1/P2 生产级缺陷（Google 重复认证、流式重连抖动、Agent 忽略追问、多工具协作失败、Telegram 渲染异常），#7077 已修复认证问题并关联 #7069。  
- **整体健康度**：架构治理进度超预期（Wave 2 收尾、Wave 3 推进），但 XL 级 PR 并发过高存在合并冲突风险；CI 门禁仍有盲区（Docker gate 未生效、Reborn 覆盖率缺失 extensions 家族）。

---

## 2. 版本发布

**今日无新版本发布**。  
> 📌 **策略落地**：#7049 已合并，确立「周一 RC → 周二 QA → 周三发布」固定节奏，下个发布窗口为 **2026-08-06（周三）**。本周积累的 breaking changes（`ironclaw_common` 0.5.0、`ironclaw_skills` 0.4.0）将随下周三版本释放，详见 #5598。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR（推进核心里程碑）

| PR | 标题 | 影响面 | 状态 |
|------|------|--------|------|
| [#7070](https://github.com/nearai/ironclaw/pull/7070) | fix(webui): 修复 SSE keep_alive 游标、Admin 重试、过期选择器 | **解除主分支 E2E 覆盖率红牌**（自 #6876 以来持续失败） | ✅ Merged |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | fix(extensions): 注册阶段解析自定义 MCP 认证 | 修复 Hosted MCP 认证流程，`Auto` 模式仅做免凭证握手 | ✅ Merged |
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | refactor(loop): 剥离模型网关与工具披露至 `loop_host` | Wave 3/WS4 分层推进，**纯移动零行为变更**，测试全绿 | ✅ Merged |
| [#7040](https://github.com/nearai/ironclaw/pull/7040) | refactor(contracts): 收尾 WS2 游离项与 WS2.1 后续 | 修正两处陈旧 CHECKLIST 声明，文档与代码同步 | ✅ Merged |
| [#7049](https://github.com/nearai/ironclaw/pull/7049) | docs: 增加周三发布策略 | 确立发布节奏、不可变制品、阻塞修复前向移植流程 | ✅ Merged |

### 🚧 待合并大型重构（Wave 3 主战场，均为 XL/medium-risk）

| PR | 核心目标 | 关联 Issue | 风险点 |
|------|----------|------------|--------|
| [#7065](https://github.com/nearai/ironclaw/pull/7065) | **沙箱通道合并 + `ironclaw_mcp` 翻转至 contracts** | WS3 核心发现：二者为同一问题 | 合并冲突概率高，需优先审核 |
| [#7096](https://github.com/nearai/ironclaw/pull/7096) | Operator 密钥通过 `product_contracts` 端口路由 | WS3 secrets 直连收口 | ⚠ 安全敏感，顺序约束强 |
| [#7090](https://github.com/nearai/ironclaw/pull/7090) | `host_runtime/obligations` 内部三拆分 | WS3 obligations/builder 拆分 | 行为不变，但公共 API 变动 |
| [#7084](https://github.com/nearai/ironclaw/pull/7084) | `wit/` 移入所属 crate | Wave 3 WASM 整理 | 已修复 #7087 规划器误报 |
| [#7094](https://github.com/nearai/ironclaw/pull/7094) | **Wave 2 收尾**：extension registry 重分层、include_str! 清理、嵌套树覆盖 | #7083 等 | Owner 批准合并，按项提交 |
| [#7080](https://github.com/nearai/ironclaw/pull/7080) | 技能安装执行器迁移至 `extension_support` | WS3 第 1/6 族：技能管理 | 低风险，纯移动 |

> **进度判读**：Wave 2 即将全绿（`#7094` 收尾），Wave 3 核心结构性 PR 已就绪，预计本周内密集合并。**建议维护者按依赖顺序合并：#7065 → #7096 → #7090 → #7080 → #7084**，避免冲突放大。

---

## 4. 社区热点

### 🔥 讨论最活跃 / 评论最多

| Issue/PR | 评论数 | 核心诉求 | 分析 |
|----------|--------|----------|------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 15 | **Epic: 错误可恢复性终局** — 要求 100% 中途错误满足“存活/可见/因果/可行动/不上报非成功”契约 | 已关闭，标志错误处理框架成熟，后续转入验收测试 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 4 | **Epic: 封装能力与旅程测试平台** — 机械化回答“每个能力/关键旅程是否有确定性覆盖” | 已关闭，测试基建转入执行阶段 |
| [#7087](https://github.com/nearai/ironclaw/issues/7087) | 3 | **Reborn PR 测试规划器对 `.claude/` 等目录误报硬失败** | 已在 #7084 中修复（`1f66b58`），CI 门禁恢复正常 |
| [#7069](https://github.com/nearai/ironclaw/issues/7069) | 1 | **P1: Google 服务重复认证** — 每个服务独立索要授权 | #7077 已修复并关联，**单一供商授权覆盖同账号所有扩展** |
| [#7077](https://github.com/nearai/ironclaw/pull/7077) | - | fix(auth): 一个供商授权覆盖共享账号的所有已安装扩展 | **直接解决 #7069**，已获核心成员 henrypark133 提交 |

> **信号**：架构治理类 Issue（BenKurrek 系列）评论少但**结构性强**，是项目长期健康度的关键；用户面 Bug（joe-rlo 系列）虽评论少但 **P1 级影响真实生产实例**，修复优先级最高。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 状态 / Fix PR |
|--------|-------|------|---------------|
| **P1 (生产阻断)** | [#7069](https://github.com/nearai/ironclaw/issues/7069) | Google 多服务重复 OAuth，已授权账号仍报 `auth_required` | ✅ **Fixed by #7077**（已合并至主线） |
| **P1 (生产阻断)** | [#7074](https://github.com/nearai/ironclaw/issues/7074) | 多工具会议调研：获取日历后调用不可用函数失败 | 🔴 Open，无 Fix PR，需排查模型函数选择逻辑 |
| **P1 (数据风险)** | [#7041](https://github.com/nearai/ironclaw/issues/7041) | WASM 客诊断可泄露密钥至运行时/模型/追踪 | 🔴 Open，安全审查中，#7048 叠加 PR 在处理 |
| **P2 (体验降级)** | [#7071](https://github.com/nearai/ironclaw/issues/7071) | 流式响应每 chunk 触发 “Reconnecting” 闪烁 | 🔴 Open，SSE keep_alive 游标已修（见 #7070），可能仍有残留 |
| **P2 (体验降级)** | [#7075](https://github.com/nearai/ironclaw/issues/7075) | 运行失败后 Agent 忽略追问，继续旧任务 | 🔴 Open，上下文/会话状态机缺陷 |
| **P2 (体验降级)** | [#7072](https://github.com/nearai/ironclaw/issues/7072) | Telegram 渲染原始 Markdown | 🔴 Open，前端渲染管线缺失 |
| **P2 (体验降级)** | [#7073](https://github.com/nearai/ironclaw/issues/7073) | 用户响应泄露内部工具名/路由逻辑 | 🔴 Open，需在交付层做脱敏 |
| **回归/基建** | [#7085](https://github.com/nearai/ironclaw/issues/7085) | `check-version-bumps.sh` macOS 上静默跳过 WIT 版本交叉检查 | 🔴 Open，BSD sed 兼容性修复待提交 |
| **回归/基建** | [#7081](https://github.com/nearai/ironclaw/issues/7081) | Docker fail-closed 门禁 `IRONCLAW_REQUIRE_DOCKER_TESTS` 从未被 CI 设置 | 🔴 Open，CI 配置缺失，沙箱测试可能静默跳过 |
| **回归/基建** | [#7083](https://github.com/nearai/ironclaw/issues/7083) | `crates/extensions/` 全家桶被 Reborn 覆盖率工具忽略（5 crate 失联） | 🟡 **#7094 捆绑修复中**（含 nested-tree 覆盖） |
| **规范不符** | [#7068](https://github.com/nearai/ironclaw/issues/7068) | Hosted MCP `destructiveHint` 缺省读为 `false`，规范默认 `true` | 🔴 Open，安全语义偏差，需补默认值逻辑 |

> **关注点**：P1 认证问题已修，但 **P1 多工具协作失败（#7074）**、**安全泄露（#7041）**、**CI 门禁失效（#7081, #7083）** 仍无明确 Fix PR，**建议本周内指派 Owner**。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 关联 PR/进展 | 纳入下版本可能性 |
|----------|----------|--------------|------------------|
| [#7044](https://github.com/nearai/ironclaw/issues/7044) | **Onboarding：首屏空白 → 预置通用助手场景** | #6994 OOBE 原型（UI only），#7046 配置自动化 Epic | 🟡 **高** — #6994 原型已就绪，#7046 为后续配置自动化铺路 |
| [#7046](https://github.com/nearai/ironclaw/issues/7046) | **全 AI 聊天配置：工具/通道/扩展/路由/调度一站式** | 依赖 #7044，属核心倡议 | 🟢 **极高** — 核心倡议，配合周三发布节奏推进 |
| [#6941](https://github.com/nearai/ironclaw/issues/6

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-04

> **数据基准**：GitHub 过去 24 小时增量（Issues: 2 更新、PRs: 11 更新、Releases: 0）

---

## 1. 今日速览

*   **整体活跃度：低-中等**。核心开发活动集中在 **PR 合并与代码库维护**（6 个 PR 关闭/合并），而非新功能开发或社区交互。
*   **核心动向**：完成了 **Electron 依赖升级（v40 → v43）**、**Windows NSIS 安装器进程清理逻辑修复**、**启动页积分活动上线**以及 **侧边栏多智能体任务筛选器**等基础设施与运营功能的落地。
*   **社区反馈**：Issue 区无新增，仅有 2 个历史遗留 Issue（文档分析重复回复、导出 Markdown）被标记为 `stale` 并更新时间戳，显示维护者正在清理积压但缺乏实质性进展。
*   **技术债关注**：Dependabot 自动发起 Electron 升级 PR (#1277) 仍处于 Open 状态，需人工验证兼容性后合并。
*   **项目健康度**：核心维护者（liuzhq1986, fisherdaddy 等）提交频次高、响应快，但外部贡献者 PR（如 #1208, #1214）长期停滞，社区共建流转效率有待提升。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展：今日合并/关闭的关键 PR（6 个）

以下 PR 已于 2026-08-03 合并或关闭，推进了客户端稳定性、运营能力与多智能体协作体验：

| PR | 标题 | 类型 | 核心变更 | 影响面 |
| :--- | :--- | :--- | :--- | :--- |
| **[#2420](https://github.com/netease-youdao/LobsterAI/pull/2420)** | `fix(nsis): re-kill survivor processes on every stop poll round` | **Bug Fix / 稳定性** | 修复 Windows 卸载/更新时残留进程未被彻底杀掉的问题：在每轮轮询中重新发起 `Stop-Process`，并记录幸存进程详情（PID/路径）。 | **高** - 解决 Windows 端更新/卸载失败、文件占用导致的安装器报错。 |
| **[#2419](https://github.com/netease-youdao/LobsterAI/pull/2419)** | `feat(activity): add startup credit campaign` | **Feature / 运营** | 新增可配置的启动积分活动弹窗及新建会话页常驻入口，支持登录续传、领取奖励、查看明细。 | **中** - 落地网易用户获客运营活动，涉及渲染进程、主进程 IPC 及配置下发。 |
| **[#2418](https://github.com/netease-youdao/LobsterAI/pull/2418)** | `feat(sidebar): add multi-agent task activity filter` | **Feature / UX** | 侧边栏新增 Codex 风格任务活动筛选器，支持快速定位需关注的多智能体任务，折叠时自动隐藏。 | **中** - 提升多智能体协作场景下的任务管理效率。 |
| **[#2423](https://github.com/netease-youdao/LobsterAI/pull/2423)**<br>**[#2422](https://github.com/netease-youdao/LobsterAI/pull/2422)**<br>**[#2421](https://github.com/netease-youdao/LobsterAI/pull/2421)** | `Revert "Liuzhq/fix btw tools"` / `Liuzhq/fix btw tools` (x3) | **Chore / 回滚** | 连续提交、关闭、回滚同一主题分支，疑为 CI 验证冲突或代码评审中发现回归问题而紧急回滚。 | **低** - 无功能性变更，反映内部协作流程的微调。 |

> **进展评估**：今日合并侧重 **基础设施加固（Windows 进程管理）** 与 **商业化运营功能**，核心模型推理、Cowork 协作引擎等核心业务逻辑无实质性推进。

---

## 4. 社区热点：高关注度讨论

当前无高热度新讨论。仅有 2 个历史 Issue 近期被 `stale` 机制更新，反映长期未解的用户痛点：

| Issue | 标题 | 状态 | 核心诉求 | 关联 PR | 分析 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[#1206](https://github.com/netease-youdao/LobsterAI/issues/1206)** | `[bug] 私有化部署 kimi2.5 模型分析文档会重复处理或回复进度` | `OPEN` `stale` | 私有化部署场景下，特定模型流式输出进度条重复刷屏，严重影响可读性，切换模型即正常。 | 无 | **模型适配层 Bug**，疑为私有化模型返回格式与前端解析逻辑不匹配。已停滞 4 个月，优先级待确认。 |
| **[#1213](https://github.com/netease-youdao/LobsterAI/issues/1213)** | `[功能建议] 为会话详情添加「导出为 Markdown」功能` | `OPEN` `stale` | 会话详情仅支持导出图片，用户需文本格式用于引用、检索、二次编辑。 | **[#1214](https://github.com/netease-youdao/LobsterAI/pull/1214)** | **高频刚需**，已有完整 PR 实现（复用现有数据结构生成 MD，含工具调用摘要、截断长文本），但 PR 同样 `stale` 4 个月未合并。 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 来源 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **High (平台阻断)** | **Windows NSIS 安装器：卸载/更新前进程残留导致文件占用失败** | [PR #2420](https://github.com/netease-youdao/LobsterAI/pull/2420) | ✅ **已修复并合并**（轮询重试杀进程 + 详细日志） |
| **Medium (功能缺陷)** | **私有化 kimi2.5 文档分析：进度流式输出重复刷屏** | [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | ❌ **无修复 PR**，Issue 标记 `stale` 4 个月 |
| **Low (依赖风险)** | **Electron 版本滞后 (v40.2.1 → v43.2.0)** | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Dependabot) | ⏳ **待验证**，自动化 PR 开启 4 个月未合并，需兼容性测试 |

---

## 6. 功能请求与路线图信号

结合 Issue 与 PR 状态，判断下一版本（或近期迭代）纳入概率：

| 功能需求 | 来源 Issue | 实现 PR | 成熟度 | 纳入判断 | 理由 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **会话导出 Markdown** | [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | **高** (代码完整、复用现有架构、含截断/工具调用渲染) | **⭐⭐⭐ 极大概率** | 标准化交付物，用户呼声高，实现成本低，仅待 Review 合并。 |
| **Cowork 错误气泡内联重试按钮** | 隐性需求 | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | **中高** (含错误分类扩展、重试幂等性设计) | **⭐⭐ 较大概率** | 显著提升 429/网络抖动场景体验，代码结构清晰，但需确认错误分类覆盖面。 |
| **自定义模型提供商上限放宽 (10→20)** | 隐性需求 | [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | **高** (移除硬编码，改为动态配置) | **⭐⭐⭐ 极大概率** | 单纯配置放宽，无破坏性变更，满足高级用户多模型切换需求。 |
| **Web Search 兼容 Chrome 130+ 禁用 AutomationControlled Flag** | 隐性需求 | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | **中** (根因分析清晰，属环境污染修复) | **⭐⭐ 较大概率** | 规避外部环境污染导致的浏览器启动失败，属防御性修复。 |
| **启动积分活动** | 运营需求 | [#2419](https://github.com/netease-youdao/LobsterAI/pull/2419) | **已合并** | **✅ 已上线** | 运营驱动功能，已落地。 |
| **侧边栏多智能体任务筛选** | 内部规划 | [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | **已合并** | **✅ 已上线** | 多智能体协作核心交互补强。 |

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述中提炼的真实用户画像与痛点：

1.  **私有化部署用户（企业/开发者）**：
    *   **场景**：接入自建/代理的 Kimi 等模型进行代码库分析。
    *   **痛点**：流式输出协议不兼容导致 UI 进度条狂闪（Issue #1206），被迫切换模型规避，**信任度受损**。
    *   **诉求**：适配主流私有化模型输出格式，或提供兼容性配置开关。

2.  **重度知识管理用户**：
    *   **场景**：长对话复盘、技术文档沉淀、跨平台分享。
    *   **痛点**：仅支持导出图片，**无法检索、引用、二次编辑**，手动复制极其低效（Issue #1213）。
    *   **期待**：标准 Markdown 导出，保留代码块、工具调用链路。

3.  **高频 API 调用用户（Cowork 模式）**：
    *   **场景**：高并发、长任务自动化编排。
    *   **痛点**：遇到 429/5xx 只能手动复制上文重发，中断心流（PR #1208 背景）。
    *   **期待**：一键重试，最好带指数退避策略。

4.  **多模型聚合玩家**：
    *   **痛点**：自定义提供商槽位仅 10 个，不得不删除旧配置腾位（PR #1212 背景）。
    *   **期待**：取消人为上限或大幅放宽。

---

## 8. 待处理积压：维护者需关注的长期停滞项

| 项目 | 类型 | 停滞时长 | 优先级建议 | 阻碍点分析 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214)** | Feature (Export MD) | ~4 个月 | **P0 (Quick Win)** | 代码已就绪，关联 Issue 高呼声，疑因缺乏 Reviewer 指派或测试验收流程缺失。 | **指派 Core Reviewer 48h 内完成 Review/合并**；若无架构异议可直接 Squash Merge。 |
| **[PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208)** | Feature (Retry Button) | ~4 个月 | **P1** | 涉及错误分类体系扩展，需确认分类标准与现有错误码映射一致性。 | 召集 Cowork 模块 Owner 评审错误分类表，补齐单测后合并。 |
| **[PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212)** | Feature (Custom Providers 20) | ~4 个月 | **P1** | 实现简单（移除硬编码），风险极低。 | 可捆绑 #1214 同批次合并。 |
| **[PR #1209](https://github.com/netease-youdao/LobsterAI/pull/1209)** | Fix (Web Search Flags) | ~4 个月 | **P1** | 修复环境污染导致的启动失败，属防御性编程。 | 验证 Chrome 130+ 真机环境后合并。 |
| **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** | Chore (Electron v43) | ~4 个月 | **P2 (Tech Debt)** | 主版本跨度大 (v40→v43)，需全量回归：原生模块重编译、安全策略变更、API 废弃。 | **建立升级验收清单**；分配专人分模块验证（Renderer/Main/Preload/Builder），分批合并。 |
| **[Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206)** | Bug (Private Kimi Stream) | ~4 个月 | **P2** | 无复现环境（需私有化部署），模型厂商输出

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-08-04

---

## 1. 今日速览
- **整体活跃度：低** 🟡。过去 24 小时无 Issue 活动，仅有 1 个 PR（`#1183`）处于待合并状态，且该 PR 创建于 8 月 2 日，近期无新增评论或 Review 进展。
- **核心进展**：项目正在推进 **MCP（Model Context Protocol）服务器的托管仓库包** 功能开发（PR #1183），旨在简化 MCP 服务器的发现、安装、更新、回滚及全生命周期管理，属于重大特性前置工程。
- **发布状态**：无新版本发布。
- **社区互动**：静默。无 Issue 讨论，PR 无审查评论，维护者响应周期需关注。
- **健康度提示**：积压 PR 审查风险存在，建议维护者尽快安排 Code Review 以推进核心功能落地。

---

## 2. 版本发布
> 过去 24 小时无新版本发布。

---

## 3. 项目进展
### 待合并的重要 PR（核心推进项）
| PR | 标题 | 作者 | 状态 | 核心推进内容 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#1183** | **feat(mcp): add managed repository bundles** | `penso` | **OPEN** (创建于 2026-08-02) | **重大特性基建**：引入“托管 Git 仓库包”机制，覆盖 MCP 服务器的**发现、预览、安装、更新、回滚、移除**全流程。技术亮点包括：支持 HTTPS 凭据、固定托管 SSH 传输、Vault 生命周期集成、导入基于仓库的 MCP 配置，并旨在简化 Web 端引导流程。 | [#1183](https://github.com/moltis-org/moltis/pull/1183) |

> **进度评估**：该 PR 为架构级增强，若合并将显著提升 Moltis 作为 AI 智能体基础设施的 MCP 管理能力。当前卡在审查阶段，**建议优先分配 Reviewer**。

---

## 4. 社区热点
> 过去 24 小时无 Issue 活动，PR #1183 暂无评论（`评论: undefined`）及 Reactions（`👍: 0`）。社区讨论度为零。

---

## 5. Bug 与稳定性
> 过去 24 小时无新 Bug 报告、崩溃或回归 Issue。

---

## 6. 功能请求与路线图信号
| 信号来源 | 功能方向 | 纳入下一版本可能性 | 分析依据 |
| :--- | :--- | :--- | :--- |
| **PR #1183** | **MCP 托管仓库包全生命周期管理** | **极高 (已进入 PR 阶段)** | 代码已实现完整 CRUD + 回滚 + 凭据管理 + Vault 集成，属于明确路线图执行项，非临时性需求。审查通过即可合并入主干。 |

---

## 7. 用户反馈摘要
> 无 Issue 评论、Discussion 或 PR 审查评论，无法提炼用户痛点与使用场景。

---

## 8. 待处理积压 ⚠️
| 项目 | 类型 | 停滞时长 | 风险等级 | 建议行动 |
| :--- | :--- | :--- | :--- | :--- |
| **#1183** | **Feature PR** | **~2 天** (创建 8月2日，至今无 Review) | **中** | 核心特性阻塞于审查队列。建议：<br>1. 指定熟悉 MCP/Vault/SSH 模块的 Maintainer 进行 Review。<br>2. 若 CI 未跑通，优先修复 Pipeline。<br>3. 确认是否需拆分为小 PR 以降低审查认知负载。 |

---

## 附录：数据来源
- 数据统计窗口：2026-08-03 至 2026-08-04 (UTC)
- 数据来源：GitHub REST API / GraphQL (moltis-org/moltis)

---

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 | 2026-08-04

> **数据基准**：GitHub 过去 24 小时（2026-08-03 至 2026-08-04）Issues/PR 活动、Release 发布记录。  
> **项目别名**：代码库统一使用 `QwenPaw`，文档与社区常称 `CoPaw`。

---

## 1. 今日速览
- **发布里程碑**：正式推出 **v2.1.0-beta.1**，修复聊天通道身份泄漏、优化收件箱侧边栏交互，标志着 2.1 系列进入公开验证阶段。  
- **工程吞吐**：24h 内 **50 条 PR 更新**（合并/关闭 25、待合并 25），**23 条 Issue 活动**（关闭 6、新开/活跃 17），合并率 50%，呈现“发版前集中收敛”特征。  
- **核心攻坚点**：围绕 **`spawn_subagent` 空 batch 占位符误判**、**ACP 通知竞态导致文本丢失**、**技能标签重启丢失回归**、**大体量 API 响应阻塞 Console** 等 4 个高频阻塞性 Bug 同步推进修复 PR。  
- **社区信号**：用户对 **Console 通道审批静默超时**、**WebView2 崩溃黑屏无恢复**、**技能池/文件页加载超时**、**多智能体协作引导缺失** 反馈强烈，暴露“桌面端稳定性”与“新手引导”两大短板。  
- **健康度评级**：🟡 **关注**——发版节奏加快但阻塞性 Bug 仍在量产，CI 绿建依赖 `playwright<1.62` 临时钉版，技术债偿还压力上升。

---

## 2. 版本发布
### v2.1.0-beta.1 (Beta) — 2026-08-03 发布
| 维度 | 详情 |
|------|------|
| **核心变更** | 1. `fix(chat)`：防止新建聊天时遗留 stale channel identity（@zhaozhuang521, #6382）<br>2. `feat(inbox)`：新审批到达时侧边栏抖动提醒 + 徽标点按优先级着色（@lalaliat） |
| **破坏性变更** | 无显式 Breaking Change，但内部 Channel 身份校验逻辑收紧，第三方插件若缓存旧 `channel_id` 需重新授权。 |
| **迁移提示** | - 桌面端自动热更；<br>- Docker/自建部署需拉取 `agentscope-ai/qwenpaw:v2.1.0-beta.1` 并重建容器；<br>- 插件开请关注 `#6656` Release Duty Issue 中的安装验证清单。 |
| **验证入口** | [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.1) · [Release Duty #6656](https://github.com/agentscope-ai/QwenPaw/issues/6656) |

---

## 3. 项目进展（今日合并/关闭的关键 PR）
| PR | 类型 | 核心推进 | 关联 Issue | 状态 |
|----|------|----------|------------|------|
| [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) | 🐛 Bug Fix | **桌面端改用打包 Python 执行脚本**，解决 Conda/全局 Python 缺失导致的“未安装 Python”报错 | #6160 | ✅ Merged |
| [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) | 🐛 Bug Fix | **CI `real-behavior-proof` 修复 fence-aware 提取**，不再误删纯代码块 Evidence，恢复 Fork PR 绿建 | #6626 | ✅ Merged |
| [#6654](https://github.com/agentscope-ai/QwenPaw/pull/6654) | 🔧 CI | **钉版 `playwright<1.62`** 绕过 macOS Tauri 验证超时，解除发版阻塞 | — | ✅ Merged |
| [#6646](https://github.com/agentscope-ai/QwenPaw/pull/6646) | 🔧 CI | Fork PR 通过 REST API 补全 body，修复 `real-behavior-proof` 因 `pull_request_target` 安全限制失效 | #6563 | ✅ Merged |
| [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | 🐛 Bug Fix | Windows `tasklist` 存活探针增加 `timeout`、隐藏窗口、错误兜底，消除偶发卡死 | — | ✅ Merged |
| [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) | 🐛 Bug Fix | `spawn_subagent` schema 修正 `Optional[list\|str]` → `list\|str\|None`，修复单任务调用报“Missing batch” | #6588 | ✅ Merged |
| [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) | 🐛 Bug Fix | 规范化空 `batch` 占位符（`[]/""/"[]"` → `None`），彻底堵住批处理误判路径 | #6588 | ✅ Merged |

> **整体进度**：2.1.0-beta.1 发布后，核心阻塞类 Bug（Python 环境、CI 绿建、ACP 竞态、spawn_subagent schema）均已落地修复或合并，**主干稳定性显著回升**；但 Console 大 payload 超时、WebView2 崩溃恢复、技能标签持久化等 **P0 级体验问题仍在开发分支**。

---

## 4. 社区热点（高互动 Issue/PR）
| # | 标题 | 评论/👍 | 核心诉求 | 分析 |
|---|------|---------|----------|------|
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | **Skill tags disappear on restart** (Regression of #3270) | 11 💬 / 0 👍 | 技能标签写入 `skill.json` 但启动时 Manifest 重算丢失 | 回归范围扩大至 2.0.1，涉及 `skill_pool` 与 `manifest` 双写一致性，**阻断技能治理工作流**，优先级 P0。 |
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | **Support GPT-5.6 prompt caching parameters** | 8 💬 / 0 👍 | 新增 `prompt_cache_key/options/breakpoint` 降低多轮成本 | 企业级 API 集成刚需，已标记 `Core/Backend` 受影响，**纳入 2.1 路线图可能性高**。 |
| [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | **Console channel 不渲染安全审批 → 静默超时** | 3 💬 / 0 👍 | CLI/SSH 场景下 HIGH 风险命令无交互入口，300s 后被拒 | **安全审批通道不完备**，直接影响生产环境自动化部署信任度。 |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | **Long-running shell bypass timeout → Feishu session orphan** | 3 💬 / 0 👍 | 1.5h 僵尸进程阻塞会话，取消后孤儿进程残留 | 涉及 **跨通道总超时** 与 **子进程回收** 两层缺陷，需架构级修复。 |
| [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | **ACP delegate_external_agent 文本丢失竞态** | 2 💬 / 0 👍 | `session/update` 与 `session/prompt` 同 TCP 段导致 future 过早 resolve | 已有 [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) 修复 PR，验证中。 |

---

## 5. Bug 与稳定性（按严重程度）
| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0-Crash** | [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) | WebView2 `STATUS_IN_PAGE_ERROR` 导致全黑无恢复 | ❌ | 桌面端核心可用性，需 Electron/Tauri 级守护进程或重载机制。 |
| **P0-DataLoss** | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 技能标签重启丢失（回归） | ❌ | 关联 #3270 旧修复失效，需审计 `SkillPool.reconcile` 逻辑。 |
| **P0-Hang** | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | `execute_shell_command` 超长输出冻结 UI 主线程 | ❌ | 需流式渲染/虚拟列表/分页加载。 |
| **P0-Timeout** | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) / [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) | Console 技能/历史页 MB 级未压缩响应 >30s 超时 | ❌ | 需后端分页/压缩 + 前端流式渲染，影响弱网用户。 |
| **P1-Logic** | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | `spawn_subagent` 空 batch 误判为批处理 | ✅ [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) | 三路 PR 协同修复，已合并 2 个，剩余 1 个 Review 中。 |
| **P1-Race** | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP 通知竞态丢文本 | ✅ [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | Under Review，单测覆盖竞态场景。 |
| **P1-Compat** | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | QwenPaw 2.0.1 + agentscope 2.0.4.post1 双重崩溃 | ❌ | 需锁定 agentscope 兼容版本区间或适配新 API。 |
| **P2-UX** | [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583) | 拖入多文件单行截断 | ❌ | 前端虚拟化列表即可。 |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 媒体文件平铺 `media/` 目录 | ❌ | 建议 `media/{task_id}/` 分桶。 |

---

## 6. 功能请求与路线图信号
| 需求 | Issue/PR | 社区热度 | 已有实现进度 | 进入 2.1/2.2 概率 |
|------|----------|----------|--------------|---------------------|
| **GPT-5.6 Prompt Caching** | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 8 💬 | 仅 Issue，无 PR | 🟢 **高** — 标记 Core/Backend，符合企业级降本主线。 |
| **模型自动降级+冷却** | [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199) / [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | 长期 2199 + 新 6659 | 两个 PR 并行，`FallbackChatModel` 已原型 | 🟢 **高** — 解决 #1327 #2089，生产可用性刚需。 |
| **用户上下文全链路透传** | [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | 早期 PR 持续更新 | 设计完整，Chat→Agent→Tool→MCP→SKILL CLI 链路打通 | 🟡 **中** — 涉及权限模型重构，可能滑入 2.2。 |
| **文件管理 REST API** | [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) | 新 PR | 6 个缺失端点（删/改/移/建/传/列）全补齐，复用 FileGuard | 🟢 **高** — 解锁 Console “文件”页，配合 2.1 发布。 |
| **任务级媒体目录隔离** | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 2 💬 | 仅 Issue | 🟡 **中** — 低侵入改动，易并入 2.1 补丁。 |
| **拖入文件直读原路径** | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | 2 💬 | 仅 Issue | 🔴 **低** — 涉及沙箱安全模型，需威胁建模评估。 |
| **多智能体协作引导/文档** | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | 1 💬 深度反馈 | 仅 Issue | 🟡 **中** — 文档/样例补齐成本低，高 ROI。 |

---

## 7. 用户反馈摘要（真实痛点）
| 场景 | 原声摘

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*