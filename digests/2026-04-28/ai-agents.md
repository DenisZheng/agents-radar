# OpenClaw 生态日报 2026-04-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-28 00:19 UTC

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

# OpenClaw 项目动态日报 | 2026-04-28

---

## 1. 今日速览

OpenClaw 项目今日维持**极高活跃度**：24小时内 500 条 Issues 更新（332 活跃/新开，168 关闭）与 500 条 PR 更新（331 待合并，169 已合并/关闭），形成 1:1 的进出比，显示社区吞吐健康。v2026.4.25 版本于近日发布，带来大规模 TTS 基础设施升级，但**升级回归问题集中爆发**——过去24小时至少 5 个高热度 Issue 指向 4.24/4.25 版本的启动失败、网关崩溃、消息重复注入等问题，形成明显的"发布-修复"脉冲。Windows 平台与 macOS Intel 设备成为重灾区，社区修复响应迅速，当日已有多个针对性 PR 进入合并队列。

---

## 2. 版本发布

### v2026.4.25 — OpenClaw 2026.4.25

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-25 |
| **核心主题** | 语音回复全链路 TTS 重构 |
| **破坏性变更** | 无明确标注，但存在隐性回归风险（见下方） |

**主要更新内容：**

- **TTS 命令体系**：新增 `/tts latest` 命令，支持按最新标准快速触发语音合成
- **作用域控制**：引入 chat-scoped 自动 TTS 开关，实现对话级别的精细控制
- **人格化语音**：支持 per-agent / per-account 的 TTS 音色覆盖，允许为不同代理或账户配置独立语音人格
- **提供商大扩容**：新增 7 家 TTS 提供商支持——Azure Speech、Xiaomi、Local CLI、Inworld、Volcengine、ElevenLabs v3，以及现有提供商的覆盖增强

**迁移注意事项：**
- 升级后建议运行 `openclaw doctor` 验证网关状态，多名用户报告升级后网关不稳定（[#72526](https://github.com/openclaw/openclaw/issues/72526)、[#72848](https://github.com/openclaw/openclaw/issues/72848)）
- 若使用 Codex 集成，需关注 API key 隔离变更（PR [#73063](https://github.com/openclaw/openclaw/pull/73063) 已合并）
- 旧版 Intel Mac（2012 年设备）确认存在升级阻断，建议暂缓或停留在 v2026.4.23

**贡献者**：@leonchui, @zoujiejun, @solar2ain

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#73063](https://github.com/openclaw/openclaw/pull/73063) | @pashpashpash | **Codex 订阅运行环境隔离**：阻止 Codex app-server 子进程继承 Gateway 环境的 `OPENAI_API_KEY`，解决订阅登录与 API key 的权限冲突 | **高** — 修复多用户场景下的密钥泄露风险 |
| [#73038](https://github.com/openclaw/openclaw/pull/73038) | @steipete | **DeepInfra 提供商插件**：完整的动态模型发现 + 静态目录降级，覆盖 chat/model/routine 全合约 | **中高** — 扩展云端模型路由选项 |
| [#73093](https://github.com/openclaw/openclaw/pull/73093) | @sanctrl | **插件安装错误透明化**：将 `npm install failed:` 的空泛报错替换为完整 npm 错误输出（registry 4xx、ERESOLVE、网络超时等） | **中** — 显著改善开发者体验 |
| [#72287](https://github.com/openclaw/openclaw/pull/72287) | @100yenadmin | **通用插件宿主钩子合约**：SDK 级 host-hook 实现，覆盖 Gateway、runner、policy、scheduler 等 9 个核心接缝 | **高** — 为第三方工作流插件奠定基础设施 |
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | @happydog-intj | **网关 SIGKILL 兜底**：优雅关闭 10 秒超时后强制终止僵尸进程，解决端口占用导致的重启失败 | **中** — 提升运维可靠性 |
| [#57733](https://github.com/openclaw/openclaw/pull/57733) | @itilys | **非批量内存嵌入并发控制**：新增 `nonBatchConcurrency` 配置，缓解 Ollama 等本地提供商的并行超时风暴 | **中** — 改善本地部署稳定性 |
| [#72076](https://github.com/openclaw/openclaw/pull/72076) | @f-trycua | **Computer 插件（macOS 桌面自动化）**：基于 cua-driver 的 `computer` 工具，支持跨代理 harness 调用 | **高** — 开启 GUI 自动化新维度 |

**整体推进评估**：今日合并 PR 聚焦**基础设施加固**（密钥隔离、错误透明化、进程管理）与**生态扩展**（新提供商、插件 SDK、桌面自动化），属于"修屋顶+搭脚手架"的组合，为后续功能爆发储备能力。

---

## 4. 社区热点

### 🔥 讨论最激烈的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 状态 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#68735](https://github.com/openclaw/openclaw/issues/68735) — LLM 请求失败：提供商拒绝请求 schema 或 tool payload | 25 | 6 | **GitHub Copilot / GPT-5-mini 的 schema 兼容性**：2026.4.15 升级后首条消息正常、后续消息失败，要求修复工具调用序列化 | ✅ 已关闭 |
| 2 | [#29809](https://github.com/openclaw/openclaw/issues/29809) — origin not allowed（Control UI 跨域） | 15 | 6 | **FRP/反向代理场景下的 CORS 配置**：云服务器+端口转发部署时，`gateway.controlUi.allowedOrigins` 配置不生效或文档不清 | ✅ 已关闭 |
| 3 | [#29387](https://github.com/openclaw/openclaw/issues/29387) — agentDir 内 bootstrap 文件被静默忽略 | 13 | 4 | **多代理目录隔离**：`~/.openclaw/agents/{name}/agent/` 下的 SOUL.md 等文件不加载，强制共享 workspace 目录导致代理间污染 | ⏳ 开放 |
| 4 | [#67035](https://github.com/openclaw/openclaw/issues/67035) — Windows chat UI 严重回归：输入吞字、流式回复不可见、打字指示器闪烁 | 13 | 0 | **Windows 前端稳定性**：2026.4.14 后输入渲染与流式输出崩溃，影响基础可用性 | ⏳ 开放 |
| 5 | [#72846](https://github.com/openclaw/openclaw/issues/72846) — 频道 sidecar 启动再次阻塞 ~3 分钟（#63450 复发） | 10 | 3 | **回归防御机制失效**：v2026.4.25 复现已修复的网关启动延迟问题，且更严重（80-110s → ~3min） | ⏳ 开放，**当日新建** |

### 诉求分析

- **代理隔离需求强烈**：#29387 反映用户希望从"共享 workspace"模型转向"per-agent 自包含目录"，这是多代理生产部署的关键路径
- **Windows 体验债务累积**：#67035 与 #70857（session lock 191s）、#72208（4.24 全局安装卡死）形成 Windows 平台系统性问题簇，可能需专项治理
- **升级可靠性信任危机**：#72846 标记为"复发"，社区对回归测试覆盖率产生合理质疑

---

## 5. Bug 与稳定性

### 🚨 严重级别排序（P0-P2）

#### P0 — 阻断性：升级后完全不可用

| Issue | 平台/场景 | 症状 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#72848](https://github.com/openclaw/openclaw/issues/72848) | macOS Intel 2012 | 4.23→4.24/4.25 升级后网关超时，TUI 无法连接 | 无明确 PR | ⏳ 开放，当日关闭后重开？ |
| [#72699](https://github.com/openclaw/openclaw/issues/72699) | Linux x64 | v2026.4.24 网关崩溃循环，unhandled_rejection，D 状态 85%+ CPU | [#72526](https://github.com/openclaw/openclaw/issues/72526) 相关修复 | ✅ 已关闭（doctor fix + 重启 + bonjour 禁用） |
| [#71986](https://github.com/openclaw/openclaw/issues/71986) | VPS / GPT-5.5 high | 4.24 更新目录错误、doctor 失败、插件重复安装、网关崩溃 | 无 | ✅ 已关闭（可能为支持性关闭） |
| [#72208](https://github.com/openclaw/openclaw/issues/72208) | 全局 npm install | 4.24 升级后 LiteLLM/OpenRouter 定价获取超时导致启动卡死，Ctrl+C 无法退出 | 无 | ⏳ 开放 |

#### P1 — 高影响：功能损坏或性能严重下降

| Issue | 场景 | 症状 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#72846](https://github.com/openclaw/openclaw/issues/72846) | 网关启动 | 频道 sidecar 启动阻塞 ~3 分钟（#63450 复发） | 无 | ⏳ 开放，**当日新建** |
| [#71761](https://github.com/openclaw/openclaw/issues/71761) | 全渠道 | 4.24 后每条消息注入两次，双倍 token 消耗 | 已修复于 4.25？ | ✅ 已关闭 |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows Web UI | 输入吞字、流式回复不可见、打字指示器闪烁 | 无 | ⏳ 开放 |
| [#70857](https://github.com/openclaw/openclaw/issues/70857) | Windows | sessions.json.lock 持有 191s，启动与回复延迟 | 无 | ⏳ 开放 |
| [#61701](https://github.com/openclaw/openclaw/issues/61701) | Ubuntu 24.04 Docker | 4.5 升级后网关进程 100% CPU 不下降 | 无 | ⏳ 开放（历史遗留） |

#### P2 — 中等影响：特定场景受限

| Issue | 场景 | 症状 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#68735](https://github.com/openclaw/openclaw/issues/68735) | GitHub Copilot 提供商 | schema/tool payload 被拒绝 | 已修复 | ✅ 已关闭 |
| [#57099](https://github.com/openclaw/openclaw/issues/57099) | Ollama 显式配置 | "No API provider registered for api: ollama" | 已修复 | ✅ 已关闭 |
| [#32638](https://github.com/openclaw/openclaw/issues/32638) | Groq + reasoning 模型 | `reasoning_effort` 值不被接受（需 "none"/"default"） | 已修复 | ✅ 已关闭 |
| [#72386](https://github.com/openclaw/openclaw/issues/72386) | Telegram | 4.25-beta.4 runtime-context 消息被模型逐字复述到回复 | 已修复 | ✅ 已关闭 |

### 稳定性健康度评估

| 指标 | 评估 |
|:---|:---|
| 升级成功率 | ⚠️ **警示** — 4.24/4.25 连续版本出现多平台升级失败，形成"升级恐惧" |
| 回归复发率 | 🔴 **危险** — #72846 明确标记为已修复问题的复发，测试覆盖存在漏洞 |
| 修复响应速度 | 🟢 **良好** — 当日即有多个修复 PR 针对 4.24/4.25 问题 |
| 平台公平性 | 🔴 **失衡** — Windows 与旧 Intel Mac 问题密度显著高于 Linux/macOS Apple Silicon |

---

## 6. 功能请求与路线图信号

### 用户提出的高价值功能需求

| Issue | 需求 | 热度 | 与现有 PR 的关联 | 纳入可能性 |
|:---|:---|:---:|:---|:---|
| [#6842](https://github.com/openclaw/openclaw/issues/6842) | **A2A (Agent-to-Agent) 协议支持** | 👍 9 | PR [#72287](https://github.com/openclaw/openclaw/pull/72287) 通用插件宿主钩子为 A2A 奠定 SDK 基础；#28106 RFC 已关闭 | **高** — 基础设施就绪，2026 Q2-Q3 可期 |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` 私有网络访问开关 | 👍 4 | 无直接 PR，但安全策略相关 | **中高** — 企业部署刚需，实现成本低 |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) | SKILL.md frontmatter 支持 `model` 字段实现 per-skill 模型路由 | — | 无 | **中** — 与现有 agent/model 层级配置冲突需设计 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 网关级 per-agent 成本预算强制 | — | 无 | **中** — 与现有 `session-cost-usage.ts` 可衔接 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | Control UI MathJax/LaTeX 渲染 | 👍 3 | 无 | **低-中** — 前端增强，非核心路径 |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) | `message.send` schema 精简（poll/components/modal 过度暴露） | 👍 3 | 无 | **中高** — GPT 自动填充导致的运行时失败，修复紧迫 |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Control UI 可配置上传大小限制（当前硬编码 5MB） | — | 无 | **高** — 单点配置，用户痛点明确 |

### 路线图信号

- **语音/实时交互**：PR [#73032](https://github.com/openclaw/openclaw/pull/73032) xAI Realtime Voice Agent 接入 + v2026.4.25 TTS 大升级，显示"实时语音"成为战略方向
- **插件经济**：PR [#72287](https://github.com/openclaw/openclaw/pull/72287) 通用宿主钩子 + [#72548](https://github.com/openclaw/openclaw/pull/72548) SecretRef 插件化，OpenClaw 正从"配置驱动"转向"插件驱动"
- **桌面自动化**：PR [#72076](https://github.com/openclaw/openclaw/pull/72076) Computer 插件（cua-driver），与 Anthropic Computer Use 形成对标

---

## 7. 用户反馈摘要

### 💬 真实痛点（直接引用 Issue 评论提炼）

| 主题 | 用户原声 | 频率 |
|:---|:---|:---:|
| **升级恐惧** | *"2026.4.24 is a huge mess! ... reverted to 4.23; tried 4.25 today and same result; reverted to 4.23 again"* — @tess020126-cmyk | 🔥🔥🔥 |
| **Windows 二等公民** | *"After upgrading to OpenClaw 2026.4.14 on Windows, the chat experience regressed badly"* — @q7793527 | 🔥🔥🔥 |
| **诊断工具失效** | *"doctor fails, repeats install plugins, does nothing, gateway crashing"* — @jokedul | 🔥🔥 |
| **配置心智负担** | *"SearXNG ships with JSON format disabled by default, so the user has to manually go and search the docs"* — @evanpaul14 | 🔥🔥 |
| **代理间污染** | *"placing bootstrap .md files inside [agentDir] has no effect. Only files under the shared workspace directory are loaded"* — @tuna-chin | 🔥🔥 |
| **密钥管理焦虑** | *"openclaw gateway install --force resolves every SecretRef ... and writes the resolved values as plaintext"* — @beto-sudo | 🔥 |

### 😊 满意点

- TTS 多提供商支持获得明确致谢（@leonchui 等）
- 社区修复响应快，部分问题当日关闭（#72848 等）
- 插件 SDK 扩展性受期待（#6842 A2A 长期呼声）

### 😠 不满点

- **版本质量波动大**：4.24 被多名用户称为 "huge mess"
- **Windows 平台测试不足**：连续多个版本出现 UI 与启动问题
- **回归问题复发**：#63450 → #72846 的"修复-复发"循环打击信任

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue（>30 天，高价值/高影响）

| Issue | 年龄 | 核心问题 | 风险 | 建议行动 |
|:---|:---:|:---|:---|:---|
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | ~60 天 | agentDir bootstrap 隔离失效 | 多代理部署阻塞，用户被迫共享 workspace | 指派核心维护者评估目录加载优先级 |
| [#41494](https://github.com/openclaw/openclaw/issues/41494) | ~50 天 | Gemini reasoning 泄漏到聊天（#1305/#26551 复发） | 用户体验破坏，模型供应商兼容性 | 与 Google 提供商维护者同步修复状态 |
| [#41619](

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据基准：2026-04-28 | 分析周期：24小时滚动**

---

## 1. 生态全景

个人 AI 助手开源生态正经历**"从功能竞赛到质量巩固"**的关键转折。头部项目（OpenClaw、ZeroClaw）日均 Issues/PR 双双破百，但**升级回归、平台兼容性、配置系统可靠性**成为共性瓶颈。TTS/语音交互、MCP/插件化架构、多 Agent 协作（A2A）构成三大技术高地，而 Windows 平台测试不足、入门体验断裂、文档-实现断层则是普遍的质量洼地。国产模型适配（DeepSeek V4、Kimi、Qwen）已从差异化卖点变为准入门槛。

---

## 2. 各项目活跃度对比

| 项目 | Issues (开/关) | PR (待/合) | Release | 健康度 | 关键特征 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 332/168 | 331/169 | v2026.4.25 (4.25) | ⚠️ **活跃但承压** | 500/500 进出比健康，但 4.24/4.25 升级回归集中爆发，Windows/Intel Mac 成重灾区 |
| **ZeroClaw** | 39/7 | 38/12 | 无 (v0.7.4 冲刺中) | 🟡 **高活跃待释放** | 38 个待合并 PR 管道承压，S1 级新用户阻断 Bug 待解 |
| **PicoClaw** | 36/73 | 63/57 | Nightly (4.27) | ✅ **清理高效** | 73 Issues 关闭率领先，批量技术债务清理中，TTS/语音呼声最高 (23💬) |
| **NanoBot** | 12/17 | 16/21 | 无 (post3 预期) | ✅ **消化优于新增** | 21/37 PR 合并率 57%，"生产可靠性三支柱"（超时/流式/数据边界）闭环快 |
| **CoPaw/QwenPaw** | 25/25 | 18/25 | 无 (post3 即将) | 🟡 **补丁周期** | v1.1.4 配置回归集中修复，4 个 Critical/High Bug 开放，ChromaDB 崩溃待解 |
| **Hermes Agent** | 49/1 | 43/7 | 无 (v0.11.0) | 🔴 **活跃但消化不足** | 50/50 更新量高，但关闭率仅 8% (Issues) / 14% (PR)，P0 安全 PR #8876 滞留 15 天 |
| **IronClaw** | 9/1 | 26/6 | 无 | 🟡 **架构重构期** | Reborn 架构分片着陆，V2 引擎缺陷与 CI 三条金丝雀同时失败形成质量承压 |
| **LobsterAI** | 7 (估) | 38 (24h) | 2026.4.25 | ✅ **质量转向** | 63% 合并率，安全 PR 密集（4 条），但入门体验 Issue 长期 stale |
| **Moltis** | 4/1 | 3/12 | 无 | ✅ **响应极快** | UI 回归 24h 内修复，智能体架构简化落地，但同一功能 4 次重复 PR 反映审查效率 |
| **NanoClaw** | 12/8 | 12/12 | 无 (v2.0.x) | 🟡 **v2 架构债务暴露** | Telegram 适配器落地，但调度器会话隔离 (#2067) 与 A2A 无限循环 (#2048) 无 PR |
| **NullClaw** | 0 | 0 | — | ⚫ **休眠** | 24h 无活动 |
| **TinyClaw** | 0 | 0 | — | ⚫ **休眠** | 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | — | ⚫ **休眠** | 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模领导地位** | 24h 500 Issues + 500 PR，量级超第 2-5 名总和 | ZeroClaw (46+50)、PicoClaw (109+120) 为次梯队，但 PicoClaw 含大量清理关闭 |
| **技术路线** | **"配置驱动 → 插件驱动"** 转型中：通用宿主钩子 (#72287)、SecretRef 插件化、TTS 提供商大扩容 (7 家) | ZeroClaw 走 **MCP/Skills 轻量核心** 路线；Moltis 强调 **Rust 原生 + 模块化编译**；NanoBot 聚焦 **多通道企业 IM** |
| **生态扩展性** | 最成熟的插件 SDK（9 个核心接缝 host-hook）、Computer 插件（GUI 自动化对标 Anthropic） | Hermes Agent 的 Kanban 协作看板 (#16102) 是差异化创新，但合并缓慢 |
| **质量痛点** | **升级可靠性信任危机**：4.24 "huge mess"、4.25 复发 #63450→#72846，回归测试覆盖率受质疑 | ZeroClaw 有同类问题（schema v3 迁移 #5947）；NanoBot 修复响应更快（DeepSeek/Codex 24h 闭环） |
| **平台公平性** | **明显失衡**：Windows 前端回归 (#67035)、Intel Mac 升级阻断 (#72848) | 共性难题，但 LobsterAI、ZeroClaw 同样存在 Windows 专项问题 |

**核心结论**：OpenClaw 是生态**事实标准制定者**（最大社区、最完整插件体系、最激进的功能迭代），但正经历**"规模带来的质量惩罚"**——快速发布节奏与复杂多平台矩阵的测试覆盖之间存在结构性张力。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与信号强度 |
|:---|:---|:---|
| **TTS/语音交互全链路** | OpenClaw (v2026.4.25 7 家提供商)、PicoClaw (#1648, 23💬)、NanoClaw (#1326 跨通道语音转录) | OpenClaw 完成"提供商扩容"，PicoClaw 卡在"网关集成"，NanoClaw 实现"通道无关技能"——三阶段成熟度分层 |
| **MCP/插件化架构** | ZeroClaw (#6165 Skills 替代专用工具)、OpenClaw (#72287 通用宿主钩子)、NanoBot (MCP 能力名称清理 #3468) | 从"内置集成"向"标准协议插件"迁移是共识，但 Hermes Agent 的 `skills/` 架构与 ZeroClaw 的 MCP 优先路线存在设计竞争 |
| **多 Agent 协作 (A2A)** | OpenClaw (#6842, 👍9)、NanoClaw (#2048 A2A 自路由循环 Bug)、Moltis (#898 智能体架构简化) | 基础设施就绪（OpenClaw SDK 钩子），但运行时可靠性（NanoClaw 死循环）、架构认知负担（Moltis "主身份"简化）待解 |
| **国产模型适配 (DeepSeek/Kimi/Qwen)** | ZeroClaw (#5600 Kimi, #6107 DeepSeek V4)、NanoBot (#3474 DeepSeek v4)、LobsterAI (#1813 DeepSeek V4, #1847 修复)、CoPaw (QwenPaw 品牌) | 从"差异化支持"变为"准入门槛"，`reasoning_content` 格式、schema 兼容性、温度参数类型是共性技术点 |
| **配置系统可靠性** | Hermes Agent (config.yaml/环境变量/`/config` 三者不一致 #16723/#8919)、OpenClaw (升级后网关崩溃 #72526)、CoPaw (配置丢失 #3824) | "配置覆盖优先级"是系统性混乱根源，多项目需发布一致性规范 |
| **Windows 平台质量** | OpenClaw (#67035 UI 回归)、LobsterAI (#17 启动死循环)、ZeroClaw (#6123 fresh install 崩溃)、Hermes Agent (#8901 编码崩溃) | **生态级短板**，无项目建立可靠的 Windows CI 或专项测试矩阵 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全功能个人 AI 助手、TTS/语音、GUI 自动化、多提供商路由 | 技术极客、多平台用户 | Node.js/TypeScript 单体，配置→插件驱动转型 |
| **ZeroClaw** | 轻量自托管、成本透明、MCP/Skills 生态、Rust 性能 | Homelab 用户、成本敏感者 | Rust 原生，模块化编译（可选通道），SQLite + FTS |
| **NanoBot** | 企业 IM 集成（Slack/Discord/企微/QQ）、多通道并发 | 企业 IT 部署、团队协作 | Python，ReAct 循环，"生产可靠性三支柱" |
| **PicoClaw** | 边缘/嵌入式（Android）、生物启发记忆（Seahorse）、LangSmith 追踪 | 边缘 AI、可观测性需求者 | Go/Rust 混合？（Sipeed 硬件背景），轻量 Docker |
| **Hermes Agent** | 多 Agent 协作（Kanban）、子代理成本核算、长程记忆 | 多 Agent 工作流研究者 | Python，"主-从"代理层级，TUI 交互 |
| **LobsterAI** | Cowork 模式（DiffView）、安全合规、企业多账户 | 企业开发者、安全审计场景 | Electron 桌面应用，SQLite 持久化，NSIS 安装器 |
| **Moltis** | 极简智能体配置、Rust 安全、命令面板效率 | 专业开发者、Rust 生态 | Rust 全栈，模块化编译，Jinja 模板引擎 |
| **CoPaw/QwenPaw** | 通义千问生态、Qwen Code 集成、中文企业 IM | 阿里云用户、中文开发者 | Python，ACP 协议，Qwen 模型深度绑定 |
| **IronClaw** | NEAR 区块链集成、Reborn 架构现代化、V2 引擎 | Web3/区块链开发者 | Rust，分片架构重构，事件/审计底层 |
| **NanoClaw** | Docker 沙箱、A2A 路由、语音转录跨通道 | 容器化部署、安全隔离需求者 | TypeScript，v2 "每会话独立 DB" 架构 |

---

## 6. 社区热度与成熟度

```
【快速迭代阶段】特征：高 Issues/PR 流入，功能爆发，质量波动
├── OpenClaw —— 规模最大，"发布-修复"脉冲明显，v2026.4.25 TTS 重构后回归集中
├── ZeroClaw —— v0.7.4 冲刺，38 待合并 PR 管道承压，新用户 onboarding 断裂
├── CoPaw/QwenPaw —— v1.1.4 补丁周期，配置回归紧急修复，4 个 Critical Bug 开放
└── IronClaw —— Reborn 架构分片着陆，V2 引擎"边飞行边换引擎"

【质量巩固阶段】特征：关闭率 > 开启率，技术债务清理，稳定性优先
├── PicoClaw —— 73/109 Issues 关闭率 67%，批量 stale 清理，v0.2.7 质量提升
├── NanoBot —— 21/37 PR 合并率 57%，"消化优于新增"，企业可靠性三支柱闭环
├── Moltis —— 12/15 PR 合并率 80%，24h 回归修复，架构简化落地
└── LobsterAI —— 63% 合并率，安全 PR 密集，但从"功能堆砌"转向"质量加固"

【停滞/转型风险】特征：关闭率极低，核心维护者响应慢，社区焦虑
├── Hermes Agent —— 1/50 Issues 关闭率 2%，P0 安全 PR 滞留 15 天，飞书企业用户 17 天无响应
└── NanoClaw —— v2 架构缺陷暴露（调度器 #2067），A2A 无限循环无 PR，12/24 PR 合并但关键 Bug 未解

【休眠】
└── NullClaw, TinyClaw, ZeptoClaw —— 24h 零活动
```

---

## 7. 值得关注的趋势信号

| 趋势信号 | 证据链 | 对开发者的参考价值 |
|:---|:---|:---|
| **"升级恐惧"成为生态级用户流失因子** | OpenClaw 用户 *"reverted to 4.23; tried 4.25 same result; reverted again"*；ZeroClaw #5947 schema v3 "拒绝部分合并" | **建议**：建立蓝绿升级通道、自动回滚机制、版本锁定承诺（LTS 标签），将"升级可靠性"作为核心 KPI |
| **Windows 平台是开源 AI 助手的"质量洼地"** | 4 个项目同日出现 Windows 专项问题，无项目建立 Windows CI | **建议**：将 Windows 测试矩阵纳入 CI 强制门控，或明确文档声明"最佳 effort 支持"管理预期 |
| **"推理内容格式"成为国产模型适配的隐形门槛** | DeepSeek V4 `reasoning_content`、Kimi-code streaming 400、Qwen3 Skill 调用失败——均涉及非标准字段 | **建议**：建立 Provider 兼容性抽象层，将 `reasoning_content`、温度参数类型、schema 版本等封装为可配置适配器 |
| **从"多通道支持"转向"通道体验深度"** | NanoBot Discord 线程隔离、CoPaw QQ 语音类型映射、ZeroClaw Nextcloud Talk 超时——渠道实现从"有"到"好用" | **建议**：渠道适配器需投入 10x 于基础连接的工作量处理边缘情况（附件类型、回复上下文、反应表情） |
| **配置系统混乱是架构债务的集中暴露点** | Hermes Agent 三源不一致、OpenClaw 升级覆盖、CoPaw 刷新丢失——根因均为"优先级规则未文档化" | **建议**：采用单一配置源（如 SQLite + 内存缓存），或发布明确的覆盖优先级规范（环境变量 > 文件 > 默认值） |
| **"语音/实时"从差异化变为预期功能** | OpenClaw 7 家 TTS + xAI Realtime、PicoClaw 23💬 TTS/ASR、NanoClaw 跨通道语音转录 | **建议**：将语音交互纳入基础架构而非插件，考虑 WebRTC 实时会话作为下一代交互范式 |
| **安全合规从"事后修补"转向"设计内建"** | LobsterAI 4 条安全 PR 同日、ZeroClaw skill prompt 安全审计、OpenClaw Codex 密钥隔离 | **建议**：密钥管理、日志脱敏、IPC 权限、提示注入防护应作为 0.1 版本的基线能力，而非 1.0 后的补丁 |

---

**报告结论**：2026 年 Q2 的个人 AI 助手生态正处于**"规模扩张与质量巩固的十字路口"**。OpenClaw 凭借社区规模和技术广度维持领导地位，但升级可靠性信任危机为其打开竞争窗口；ZeroClaw、NanoBot、Moltis 以轻量架构和快速响应吸引特定用户群；而 Hermes Agent 的合并瓶颈与 NanoClaw 的 v2 架构债务则是"活跃但不可持续"的警示案例。对开发者而言，**"Windows 质量"、"配置可靠性"、"升级回滚"** 是超越功能竞赛的差异化战场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-28

---

## 1. 今日速览

NanoBot 今日呈现**高强度迭代态势**：24小时内 **37个PR**（21个已合并/关闭）与 **17个Issues**（12个已关闭）的双高吞吐量，表明社区与核心维护者协同活跃。项目重心集中在**Provider生态扩展**（Hugging Face、OpenCode Go、extra_body配置）、**通道稳定性修复**（Telegram附件类型、Discord线程隔离、企业微信媒体文件）及**核心运行时可靠性**（超时控制、历史记录作用域、心跳机制优化）。无新版本发布，但大量修复正快速合入主干，整体健康度良好，技术债务消化速度优于新增速度。

---

## 2. 版本发布

**无新版本发布**

今日未发布正式版本，但 21 个已合并 PR 包含多项值得关注的修复，建议关注后续 patch 版本（v0.1.5.post3 或 v0.1.6）的发布动态。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3478](https://github.com/HKUDS/nanobot/pull/3478) | boogieLing | **为 OpenAI-compatible Provider 设置显式请求超时**（默认600s→可控边界） | 解决生产环境 hung request 阻塞 agent loop 长达10分钟的致命问题，提升运行时可靠性 |
| [#3480](https://github.com/HKUDS/nanobot/pull/3480) / [#3479](https://github.com/HKUDS/nanobot/pull/3479) | boogieLing | **恢复 OpenAI Codex Provider 的流式进度增量** | 修复 v0.1.4.post6→v0.1.5.post2 的回归缺陷，用户重新获得实时执行反馈 |
| [#3458](https://github.com/HKUDS/nanobot/pull/3458) | boogieLing | **规范化 DeepSeek 非字符串 message content** | 解决 deepseek-v4 系列模型（deepseek-v4-pro/flash）的空白回复/API报错问题 |
| [#3397](https://github.com/HKUDS/nanobot/pull/3397) | Lbin91 | **Discord 完整线程支持：会话隔离 + 白名单强制** | 解除线程回复必须单独配置 allowChannels 的阻塞，企业级多线程场景可用性提升 |
| [#3459](https://github.com/HKUDS/nanobot/pull/3459) | boogieLing | **强化会话重放/文件上限不变式** | 防止上下文漂移与磁盘无限增长，长期运行稳定性基石 |
| [#3389](https://github.com/HKUDS/nanobot/pull/3389) | hussein1362 | **防止心跳内部推理泄露至用户通道** | 消除"HEARTBEAT.md内容被当作输出发给用户"的尴尬体验，输出质量关键修复 |
| [#3483](https://github.com/HKUDS/nanobot/pull/3483) | flyzstu | **文档：OpenCode Go Provider 配置说明** | 降低国产模型聚合网关（GLM/Kimi/DeepSeek/MiMo/Qwen/MiniMax）接入门槛 |

**整体迈进评估**：今日合并 PR 覆盖 **"生产可靠性三支柱"**——超时控制（#3478）、流式反馈（#3480）、数据边界（#3459），叠加多 Provider 兼容性修复，项目从"功能可用"向"企业可运维"显著跃迁。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#2133](https://github.com/HKUDS/nanobot/issues/2133) 任务执行期间用户消息入列机制 | 19 | 0 | **Agent 实时交互架构重构**：用户希望在长任务执行中无需 `/stop` 即可插入指令，当前单循环架构的根本性限制 |
| 2 | [#3376](https://github.com/HKUDS/nanobot/issues/3376) 模型异常自动切换（Failover） | 11 | 1 | **多 Provider 容灾**：配置多模型时单点故障导致任务中断，需跨 Provider 自动切换而非仅同 Provider 内重试 |
| 3 | [#3270](https://github.com/HKUDS/nanobot/issues/3270) 可配置压缩比率 | 5 | 0 | **Compaction 策略工程化**：反对将触发点暴露为配置项，主张"可靠性应由系统保证，非用户调参" |

### 深度分析

- **#2133 的结构性意义**：该 Issue 触及 NanoBot 核心架构——单层 ReAct 循环 vs 双层 Steering Loop（见 [#1181](https://github.com/HKUDS/nanobot/issues/1181)，👍9，已关闭）。用户提出的"agent 主动结束工具调用以接收输入"方案是短期补丁，但社区对**真正的并发/中断机制**需求明确。相关 PR [#3460](https://github.com/HKUDS/nanobot/pull/3460)（LongTaskTool 多步子代理）和 [#3481](https://github.com/HKUDS/nanobot/pull/3481)（会话级历史隔离）可视为向该方向的试探性演进。

- **#3376 的工程紧迫性**：多 Provider 配置已成主流使用模式，但"配了多个却只用一个"造成资源浪费与可用性陷阱。该 Issue 与今日合并的 Provider 修复（#3478超时、#3458 DeepSeek兼容）形成呼应——**Provider 生态越丰富，Failover 越必要**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#3474](https://github.com/HKUDS/nanobot/issues/3474) / [#3469](https://github.com/HKUDS/nanobot/issues/3469) | DeepSeek v4 系列模型空白回复 / `reasoning_content` 必传报错 | **已修复**（#3458 已合并） |
| 🔴 **高** | [#3426](https://github.com/HKUDS/nanobot/issues/3426) | OpenAI Codex Provider 流式进度回归（v0.1.4.post6→v0.1.5.post2） | **已修复**（#3480/#3479 已合并） |
| 🟡 **中** | [#3473](https://github.com/HKUDS/nanobot/issues/3473) | WebUI 远程访问 WebSocket 连接失败（0.0.0.0 绑定） | **待修复**（无关联 PR） |
| 🟡 **中** | [#3488](https://github.com/HKUDS/nanobot/issues/3488) | Telegram 附件以 `application.octet-stream` 发送，无法按类型打开 | **修复中**（PR #3489 已开） |
| 🟡 **中** | [#3464](https://github.com/HKUDS/nanobot/issues/3464) | 子代理通知从线程调用者错误路由至频道会话 | **已修复**（PR 未显式关联，但 Issue 已关闭） |
| 🟡 **中** | [#3468](https://github.com/HKUDS/nanobot/issues/3468) | MCP 能力名称未清理直接转发至模型工具 API | **已修复**（Issue 已关闭） |
| 🟢 **低** | [#3435](https://github.com/HKUDS/nanobot/issues/3435) | 企业微信（wecom）渠道媒体文件返回失败 | **已修复**（Issue 已关闭） |
| 🟢 **低** | [#3455](https://github.com/HKUDS/nanobot/issues/3455) | AsyncOpenAI 客户端无超时，大上下文请求 hung 600s | **已修复**（#3478 已合并） |

**稳定性态势**：DeepSeek v4 兼容性危机与 Codex 流式回归为今日两大紧急修复，响应速度优异（24小时内闭环）。WebUI 远程访问问题（#3473）尚无 PR，影响服务器部署场景，需关注。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 已有 PR / 信号 | 纳入下一版本可能性 |
|:---|:---|:---|:---:|
| **模型异常自动切换（Failover）** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | 无直接 PR；但 Provider 生态快速扩展（#3490 HuggingFace、#3491 extra_body）创造前提条件 | ⭐⭐⭐⭐☆ 高 |
| **会话级历史隔离** | [#3481](https://github.com/HKUDS/nanobot/pull/3481) | PR 已开，解决多会话历史混叠问题 | ⭐⭐⭐⭐⭐ 极高 |
| **LongTaskTool 多步代理任务** | [#3460](https://github.com/HKUDS/nanobot/pull/3460) | PR 已开，meta-ReAct 循环拆分长任务 | ⭐⭐⭐⭐☆ 高 |
| **Gateway 生命周期通知钩子** | [#3373](https://github.com/HKUDS/nanobot/pull/3373) | PR 已开（on_start/on_stop） | ⭐⭐⭐⭐☆ 高 |
| **SimpleX 消息通道** | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | PR 已开 | ⭐⭐⭐☆☆ 中 |
| **Olostep 搜索后端** | [#3405](https://github.com/HKUDS/nanobot/pull/3405) | PR 已开 | ⭐⭐⭐☆☆ 中 |
| **Automation with context（带上下文的自动化）** | [#3484](https://github.com/HKUDS/nanobot/issues/3484) | 无 PR；用户对 HEARTBEAT/cron 的期望落差 | ⭐⭐⭐☆☆ 中 |
| **Session-Level Focus Tool（任务锚定）** | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | 无 PR；与 #2133 架构问题相关 | ⭐⭐☆☆☆ 低-中 |

**路线图判断**：**会话隔离（#3481）+ 长任务工具（#3460）+ 网关钩子（#3373）** 形成"多会话、长运行、可观测"的能力三角，极可能打包进入下一版本。Failover（#3376）虽无 PR，但社区呼声强烈且技术前提成熟，预计短期内有核心贡献者认领。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"Agent 不听指挥"** | [#2915](https://github.com/HKUDS/nanobot/issues/2915), [#2133](https://github.com/HKUDS/nanobot/issues/2133) | 长任务执行中用户回复被忽略，必须用 `/stop` 打断，"像在和聋子对话" |
| **"配了多个模型却像只有一个"** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) | 多 Provider 配置的容灾价值未兑现，单点故障即中断 |
| **"历史像浆糊"** | [#3481](https://github.com/HKUDS/nanobot/pull/3481) 隐含反馈 | 多会话历史混叠导致上下文混乱，"Telegram 和 Slack 的对话互相渗透" |
| **"心跳像黑箱"** | [#3484](https://github.com/HKUDS/nanobot/issues/3484), [#3389](https://github.com/HKUDS/nanobot/pull/3389) 修复前 | HEARTBEAT.md 行为不符合直觉，自动化任务无法保持会话上下文 |
| **"国产模型接入坎坷"** | [#3474](https://github.com/HKUDS/nanobot/issues/3474), [#3469](https://github.com/HKUDS/nanobot/issues/3469) | DeepSeek 新版本 API 变更导致兼容性断裂，调试成本高 |

### 满意点

- **通道覆盖广度**：Slack/Discord/Telegram/企业微信/QQ 的多渠道支持获认可（相关 Issue 多为修复而非质疑架构）
- **响应速度**：核心维护者（boogieLing、hussein1362 等）24小时内闭环紧急问题的效率受社区肯定

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) Session-Level Focus Tool | 2026-04-19 | 2026-04-27 | 3条评论，0👍，但触及 Agent 核心智能层级；与 #2133/#1181 架构讨论形成链条，长期无响应将导致需求分散在多个碎片化 Issue 中 |
| [#3473](https://github.com/HKUDS/nanobot/issues/3473) WebUI 远程 WebSocket 失败 | 2026-04-27 | 2026-04-27 | **今日新增，已24小时无 PR**；影响服务器部署场景，0.0.0.0 绑定是常见需求，阻塞用户上手 |
| [#3484](https://github.com/HKUDS/nanobot/issues/3484) Automation with context | 2026-04-27 | 2026-04-27 | 0评论，但反映 HEARTBEAT 机制的设计-用户期望落差；若不及时澄清，将累积为文档/UX 债务 |

**维护者行动建议**：
- **优先**：为 #3473 分配前端/网络层贡献者，或提供临时 workaround 文档
- **本周**：对 #3292 做出路线图回应（接受/拒绝/需 RFC），避免架构讨论失焦
- **持续**：审视 HEARTBEAT.md 的设计文档，减少 #3484 类期望落差

---

*日报基于 GitHub 公开数据生成，时间窗口：2026-04-27 00:00 - 2026-04-27 23:59 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-28

## 1. 今日速览

Hermes Agent 今日呈现**极高活跃度**：24小时内 Issues 与 PR 各更新 50 条，但关闭率极低（Issues 仅关闭 1/50，PR 合并/关闭 7/50），显示社区讨论热烈但代码落地节奏偏慢。核心战场集中在**网关稳定性**（Slack/Discord/Feishu 多平台适配）、**配置系统可靠性**（自定义 provider、环境变量覆盖逻辑）以及**开发者体验**（TUI 交互、代码高亮、迁移工具）。值得注意的是，P0 级安全 PR #8876（智能审批防提示注入）仍在等待合并，安全债务累积。整体项目健康度：**活跃但消化能力不足，PR 积压风险上升**。

---

## 2. 版本发布

**无新版本发布**。最新版本仍为 v0.11.0（2026.4.23）。

---

## 3. 项目进展

### 已合并/关闭的 PR（7 条中的关键项）

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#16732](https://github.com/NousResearch/hermes-agent/pull/16732) | OutThisLife | **已合并** | TUI 文本选择功能上线：支持鼠标拖拽、Shift+方向键扩展、点击定位、右键粘贴，解决长期交互痛点 |
| [#16740](https://github.com/NousResearch/hermes-agent/pull/16740) | OutThisLife | **已关闭** | 上述 PR 的 Copilot 后续修复（零长度选区处理、Shift+Home 边界行为） |
| [#1](https://github.com/NousResearch/hermes-agent/pull/1) | hjc-puro | **已关闭** | 早期 Terminal tool 实验性 PR，今日清理归档 |

### 待合并的高价值 PR（43 条中的核心项）

| PR | 作者 | 优先级 | 推进价值 |
|:---|:---|:---|:---|
| [#16741](https://github.com/NousResearch/hermes-agent/pull/16741) | teknium1 | — | **成本核算准确性**：子代理费用汇总至父会话，解决 `delegate_task` 重度使用场景下的计费黑洞 |
| [#8876](https://github.com/NousResearch/hermes-agent/pull/8876) | Dusk1e | **P0** | **安全加固**：智能审批流程防提示注入，命令文本不再直接插值到用户消息 |
| [#16737](https://github.com/NousResearch/hermes-agent/pull/16737) | Tranquil-Flow | **P1** | **可靠性**：辅助压缩任务遇网络瞬断时重试，避免直接降级为标记占位 |
| [#16738](https://github.com/NousResearch/hermes-agent/pull/16738) | Tranquil-Flow | **P2** | **回归修复**：Slack 适配器因 `a01e767b` 提交导致静默失效的问题 |
| [#16736](https://github.com/NousResearch/hermes-agent/pull/16736) | Tranquil-Flow | **P2** | **体验优化**：飞书语音消息补充时长字段，恢复可播放气泡样式 |
| [#16739](https://github.com/NousResearch/hermes-agent/pull/16739) | Tranquil-Flow | **P2** | **性能**：Discord 斜杠命令同步超时按实际写入量动态缩放 |
| [#16722](https://github.com/NousResearch/hermes-agent/pull/16722) | FatPigeorz | **P2** | 功能对齐：Discord 严格提及模式匹配 Slack 行为 |

**整体迈进评估**：今日代码层面以"修复回归、补齐体验短板"为主，缺乏标志性功能交付。TUI 交互是少数亮点，但 P0 安全 PR 滞留显示合并门槛或审查资源不足。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) Feishu 插件双 Bug | **11 评论** | 企业用户刚需：授权卡片按钮报错 + 话题群消息隔离失效，直接影响生产环境可用性 |
| 🔥2 | [#16102](https://github.com/NousResearch/hermes-agent/issues/16102) Kanban 多角色协作看板 RFC | **6 评论** | 协作基础设施：teknium1 推动的跨 profile 持久化协作板，附带 [设计规格 PDF](https://github.com/NousResearch/hermes-agent/blob/feat/kanban-standing/docs/hermes-kanban-v1-spec.pdf)，试图定义 Agent 工作流新标准 |
| 🔥3 | [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) 内存限制自动扩容 | **5 评论** | 长会话场景瓶颈：`memory_char_limit` 默认 2200 字符（~800 tokens）过小，需自动感知压力并扩容 |

### 反应最多的 Issues/PRs

| 项目 | 👍 | 信号 |
|:---|:---|:---|
| [#8883](https://github.com/NousResearch/hermes-agent/issues/8883) WebUI 简体中文汉化 100% | **6** | 中文社区活跃，国际化/本地化需求明确，但属外围贡献未获官方整合 |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) Gemini Flex Inference 支持 | **2** | 成本敏感用户关注：利用 Gemini 的 `service_tier: "flex"` 降低 50% 后台任务开销 |
| [#8873](https://github.com/NousResearch/hermes-agent/issues/8873) NixOS hindsight-client 安装 | **1** | 小众平台支持债务，nix 用户群体被边缘化 |

**诉求分析**：企业集成（飞书/Slack/Discord）的稳定性 > 核心 Agent 能力扩展（内存/成本/协作）> 开发者体验（TUI/汉化/CLI）。社区呈现"用得多、踩坑多、修得慢"的焦虑。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **P1** | [#8965](https://github.com/NousResearch/hermes-agent/issues/8965) | Ollama 云模型工具调用渲染为原始 XML 而非执行 | ❌ 无 PR |
| **P1** | [#8919](https://github.com/NousResearch/hermes-agent/issues/8919) | 自定义 provider `base_url` 运行时完全失效 | ❌ 无 PR |
| **P2** | [#16719](https://github.com/NousResearch/hermes-agent/issues/16719) | ✅ **已关闭** — 辅助任务忽略自定义 `base_url`（#16738 修复相关） | ✅ [#16738](https://github.com/NousResearch/hermes-agent/pull/16738) |
| **P2** | [#8907](https://github.com/NousResearch/hermes-agent/issues/8907) | Cron `tenant_key` fallback 导致线程命名空间坍缩 | ❌ 无 PR |
| **P2** | [#9013](https://github.com/NousResearch/hermes-agent/issues/9013) | `gateway install --system` 错误使用系统 Python 而非 venv | ❌ 无 PR |
| **P2** | [#16703](https://github.com/NousResearch/hermes-agent/issues/16703) | Docker-out-of-Docker 场景 `execute_code` 失败 | ❌ 无 PR |
| **P2** | [#16682](https://github.com/NousResearch/hermes-agent/issues/16682) | ✅ **有 PR** — Slack 适配器因配置块静默禁用（`a01e767b` 回归） | ✅ [#16738](https://github.com/NousResearch/hermes-agent/pull/16738) |
| **P2** | [#16723](https://github.com/NousResearch/hermes-agent/issues/16723) | `/config` 显示的 `terminal.timeout` 与 `config.yaml` 及环境变量不一致 | ❌ 无 PR |
| **P3** | [#8911](https://github.com/NousResearch/hermes-agent/issues/8911) | MiniMax provider 视觉工具图片检测失败 | ❌ 无 PR |
| **P3** | [#8901](https://github.com/NousResearch/hermes-agent/issues/8901) | ✅ **有 PR** — OpenClaw 迁移 Windows 非 UTF-8 编码崩溃 | ✅ [#8898](https://github.com/NousResearch/hermes-agent/pull/8898) |
| **P3** | [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) | 飞书插件双 Bug（按钮报错 + 话题隔离） | ❌ 无 PR |

**稳定性评估**：P1 级 Bug 涉及核心工具执行与 provider 配置，无修复 PR 是重大风险。P2 级网关/部署问题密集，显示多平台适配的测试覆盖不足。今日唯一关闭的 Bug #16719 与 Slack 回归同属"配置覆盖优先级"类问题，暗示配置系统存在系统性混乱。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#16102](https://github.com/NousResearch/hermes-agent/issues/16102) Kanban 协作看板 + [#16100](https://github.com/NousResearch/hermes-agent/pull/16100) | 基础设施 | ⭐⭐⭐⭐ 高 | teknium1 核心贡献者推动，有完整设计规格 PR，符合多 Agent 协作趋势 |
| [#16742](https://github.com/NousResearch/hermes-agent/issues/16742) 无限上下文缓冲区 | 架构创新 | ⭐⭐⭐⭐ 高 | 利用 Gemini 1M tokens 作为外部记忆，与现有 `delegate_task` 机制天然契合 |
| [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) 内存限制自动扩容 | 性能优化 | ⭐⭐⭐☆ 中 | 痛点明确，但涉及默认值变更的向后兼容考量 |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) Gemini Flex Inference | 成本优化 | ⭐⭐⭐☆ 中 | 实现简单（透传 `service_tier` 参数），但需 provider 层抽象调整 |
| [#8945](https://github.com/NousResearch/hermes-agent/issues/8945) 网关 Web 控制面板 | 体验增强 | ⭐⭐☆☆ 低 | 对标 OpenClaw，但 Hermes 架构分离，需重大网关重构 |
| [#8951](https://github.com/NousResearch/hermes-agent/issues/8951) Tailscale Serve/Funnel | 网络接入 | ⭐⭐☆☆ 低 | 边缘需求，与现有网关端口暴露方案重叠 |
| [#8950](https://github.com/NousResearch/hermes-agent/issues/8950) 多消息通道（IRC/LINE/Nostr 等） | 生态扩展 | ⭐⭐☆☆ 低 | 对标 OpenClaw 清单式需求，维护负担重 |
| [#8882](https://github.com/NousResearch/hermes-agent/pull/8882) prd-hermes 自主开发循环 | 工作流 | ⭐⭐⭐☆ 中 | 技能系统扩展，但需评估与现有 `skills/` 架构的整合度 |
| [#11979](https://github.com/NousResearch/hermes-agent/pull/11979) Willow Kart 任务队列 | 工具生态 | ⭐⭐⭐☆ 中 | 沙箱执行安全增强，与现有 terminal 后端互补 |

**路线图信号**：项目正从"单 Agent 工具执行"向"多 Agent 协作 + 长程记忆管理"演进。Kanban + 无限上下文缓冲区 + 子代理成本汇总（#16741）构成清晰的"分布式 Agent 工作流"叙事。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---|
| **"飞书企业用户生产环境不可用"** — 授权卡片点击报错、话题群消息乱飞，被迫手动隔离 | [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) | 😤 极高 |
| **"配置系统不可信"** — `config.yaml`、环境变量、`/config` 命令三者显示不一致，调试成本极高 | [#16723](https://github.com/NousResearch/hermes-agent/issues/16723), [#8919](https://github.com/NousResearch/hermes-agent/issues/8919) | 😠 高 |
| **"长会话记忆断崖"** — 默认 2200 字符限制导致上下文突然断裂，无预警无自动扩容 | [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) | 😤 高 |
| **"Docker 部署陷阱密集"** — DooD 场景代码执行失败、TUI 包在 Docker 中未物化、系统 Python 路径错误 | [#16703](https://github.com/NousResearch/hermes-agent/issues/16703), [#16690](https://github.com/NousResearch/hermes-agent/pull/16690), [#9013](https://github.com/NousResearch/hermes-agent/issues/9013) | 😠 高 |
| **"Windows 二等公民"** — 迁移工具编码崩溃、测试基础设施缺失 | [#8901](https://github.com/NousResearch/hermes-agent/issues/8901), [#8894](https://github.com/NousResearch/hermes-agent/pull/8894) | 😕 中 |
| **"中文社区自力更生"** — 官方无汉化，用户自行完成 100% WebUI 简体中文适配 | [#8883](https://github.com/NousResearch/hermes-agent/issues/8883) | 😐 中（无奈） |

### 满意点

- TUI 文本选择功能（#16732）获认可，交互体验追赶现代终端应用
- 子代理成本汇总（#16741）解决长期计费不透明问题

---

## 8. 待处理积压

### 长期未响应的高价值 Issue/PR（创建 >14 天，今日仍无更新或评论）

| 项目 | 创建日期 | 滞留天数 | 风险说明 |
|:---|:---|:---|:---|
| [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) 飞书插件双 Bug | 2026-04-11 | **17 天** | 企业用户 blocker，11 评论无官方修复承诺，可能导致用户流失至 OpenClaw |
| [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) 内存限制自动扩容 | 2026-04-05 | **23 天** | 长会话体验核心瓶颈，5 评论无 maintainer 回应 |
| [#8876](https://github.com/NousResearch/hermes-agent/pull/8876) P0 安全加固 PR | 2026-04-13 | **15 天** | **安全债务**：提示注入漏洞存在已知攻击向量，PR 就绪但未合并 |
| [#8883](https://github.com/NousResearch/hermes-agent/issues/8883) WebUI 汉化 100% | 2026-04-13 | **15 天** | 国际化社区贡献，6 👍 无官方整合意向，挫伤外部贡献者积极性 |
| [#8894](https://github.com/NousResearch/hermes-agent/pull/8894) Windows 原生测试基础设施 | 2026-04-13 | **15 天** | 平台覆盖债务，影响 CI 可信度与 Windows 用户采纳 |

### 维护者行动建议

1. **紧急**：合并或审查 [#8876](https://github.com/NousResearch/hermes-agent/pull/8876)（P0 安全），公开披露漏洞修复计划
2. **本周**：指派飞书适配器维护者响应 [#7734](https://github.com/NousResearch/hermes-agent/issues/7734)，或发布临时 workaround
3. **本月**：决策 [#8883](https://github.com/NousResearch/hermes-agent/issues/8883) 汉化整合路径（官方 i18n 框架 vs. 社区 fork），避免重复劳动
4. **架构**：梳理配置系统优先级规则（文件 vs. 环境变量 vs. 运行时命令），发布一致性规范，根治 [#16723](https://github.com/NousResearch/hermes-agent/issues/16723)/[#8919](https://github.com/NousResearch/hermes-agent/issues/8919)/[#8907](https://github.com/NousResearch/hermes-agent/issues/8907) 同类问题

---

*日报生成时间：2026-04-28 | 数据来源：NousResearch/hermes-agent GitHub 公开数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-28

## 1. 今日速览

PicoClaw 今日保持**极高活跃度**：24小时内 Issues 更新 109 条（36 新开/活跃，73 关闭），PR 更新 120 条（63 待合并，57 已合并/关闭），社区清理效率显著。发布 1 个 Nightly 构建，项目处于 v0.2.7 迭代周期。核心战场集中在**Provider 兼容性修复**（OpenAI/Gemini/Groq 等）、**Web 聊天流式输出**体验优化，以及**多平台渠道扩展**（WhatsApp/Mattermost/飞书）。大量历史 Issue/PR 被批量关闭或标记 stale，维护团队正在积极缩减技术债务。

---

## 2. 版本发布

### [Nightly Build v0.2.7-nightly.20260427.39dec354](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-27 |
| **构建类型** | 自动化夜间构建（可能不稳定） |
| **完整变更日志** | [v0.2.7...main 对比](https://github.com/sipeed/picoclaw/compare/v0.2.7...main) |

> ⚠️ **注意事项**：此为自动化构建，建议测试环境使用，生产环境请等待正式版本。

---

## 3. 项目进展

### 今日关闭/合并的重要 Issues（代表功能落地）

| Issue | 类型 | 说明 | 链接 |
|:---|:---|:---|:---|
| #297 | 🎨 品牌设计 | **官方 Logo 设计完成** — 螳螂虾（Mantis Shrimp）主题视觉标识定稿，体现"小而强大"理念 | [sipeed/picoclaw#297](https://github.com/sipeed/picoclaw/issues/297) |
| #1919 | 🧠 记忆系统 | **Seahorse 生物启发式记忆系统** — 短期无损上下文压缩 + 长期记忆巩固，类似人类海马体机制 | [sipeed/picoclaw#1919](https://github.com/sipeed/picoclaw/issues/1919) |
| #2236 | 🐛 Docker 修复 | **自定义 Web 端口后输入框禁用问题** — Docker 端口映射场景下的前端状态修复 | [sipeed/picoclaw#2236](https://github.com/sipeed/picoclaw/issues/2236) |
| #748 | 🐛 Provider 修复 | **Groq API 工具调用格式兼容** — `<function=name{...}>` 非标准格式转换为 OpenAI 标准 tool_calls | [sipeed/picoclaw#748](https://github.com/sipeed/picoclaw/issues/748) |
| #2233 | 🔧 架构重构 | **入站上下文标准化与路由解耦** — 渠道语义、会话分配、代理事件、钩子机制全面解耦 | [sipeed/picoclaw#2233](https://github.com/sipeed/picoclaw/issues/2233) |
| #1058 | 🐛 Cron 修复 | **`deliver=false` 时 LLM 响应静默丢弃** — 定时任务输出无法到达渠道的根本修复 | [sipeed/picoclaw#1058](https://github.com/sipeed/picoclaw/issues/1058) |
| #2009 | ⚡ 交互增强 | **`/stop` 命令取消运行中任务** — 长任务用户可控中断机制 | [sipeed/picoclaw#2009](https://github.com/sipeed/picoclaw/issues/2009) |
| #2173 | 📊 可观测性 | **LangSmith 代理追踪集成** — 多步循环/工具调用链的结构化调试支持 | [sipeed/picoclaw#2173](https://github.com/sipeed/picoclaw/issues/2173) |
| #2137 | 💬 实时反馈 | **聊天中实时任务列表** — 通过消息编辑与反应工具展示多步骤任务进度 | [sipeed/picoclaw#2137](https://github.com/sipeed/picoclaw/issues/2137) |

**整体推进评估**：今日关闭 Issues 以 **Bug 修复（5项）** 和 **体验优化（4项）** 为主，核心架构（Seahorse 记忆、上下文标准化）取得实质性进展，v0.2.7 版本质量显著提升。

---

## 4. 社区热点

### 🔥 讨论最活跃的开放 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| #1 | **TTS/ASR 语音交互支持** | 23 💬 | 用户强烈需求语音输入输出能力，已有 PR #1642 但未接入网关，架构设计文档已出 | [sipeed/picoclaw#1648](https://github.com/sipeed/picoclaw/issues/1648) |
| #2 | **LM Studio 一键连接** | 16 💬 | 降低本地模型接入门槛，Android 部署场景尤其需要图形化配置 | [sipeed/picoclaw#28](https://github.com/sipeed/picoclaw/issues/28) |
| #3 | **OpenAI 兼容层静默丢弃 API Key** | 12 💬 | **严重安全/功能回归** — v0.2.6 所有配置源的 API key 均不发送，导致全部请求 401 | [sipeed/picoclaw#2578](https://github.com/sipeed/picoclaw/issues/2578) |
| #4 | **LLM 调用失败无重试机制** | 10 💬 | 长任务稳定性诉求，HTTP 500 时任务挂死而非优雅降级 | [sipeed/picoclaw#629](https://github.com/sipeed/picoclaw/issues/629) |
| #5 | **程序自升级支持** | 10 💬 | 嵌入式设备/边缘部署场景的持续交付需求，涉及多包管理器适配 | [sipeed/picoclaw#618](https://github.com/sipeed/picoclaw/issues/618) |

### 🔥 关键 PR 进展

| PR | 状态 | 意义 | 链接 |
|:---|:---|:---|:---|
| **#2681** MCP 工具 Schema 清洗（Gemini 兼容） | 🟡 Open | 解决 Gemini 模型 + MCP 工具时的 HTTP 400 崩溃，**阻塞生产使用** | [sipeed/picoclaw#2681](https://github.com/sipeed/picoclaw/pull/2681) |
| **#2587** Web 聊天流式输出 + 滚动 UX | 🟡 Open | **用户体验核心升级**，端到端流式响应，前端渲染重构 | [sipeed/picoclaw#2587](https://github.com/sipeed/picoclaw/pull/2587) |
| **#2603** FreeRide 自动模型轮换 | 🟡 Open | OpenRouter 免费模型自动切换与故障转移，降本增效工具 | [sipeed/picoclaw#2603](https://github.com/sipeed/picoclaw/pull/2603) |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 阻断** | #2578 | `openai_compat` provider **完全丢失 Authorization header**，所有 API key 配置方式均失效（v0.2.6 回归） | 🟡 PR #2372 部分修复中 | [sipeed/picoclaw#2578](https://github.com/sipeed/picoclaw/issues/2578) |
| 🔴 **P0 - 阻断** | #2681 (PR) | Gemini + MCP 复杂 JSON Schema 触发 HTTP 400 崩溃 | 🟡 待合并 | [sipeed/picoclaw#2681](https://github.com/sipeed/picoclaw/pull/2681) |
| 🟡 **P1 - 严重** | #2368 | Android App 模型配置后仍显示"未配置"，无法选择聊天 | 🔴 无已知 PR | [sipeed/picoclaw#2368](https://github.com/sipeed/picoclaw/issues/2368) |
| 🟡 **P1 - 严重** | #2046 | LongCat API 不触发工具调用，功能完全不可用 | 🔴 无已知 PR | [sipeed/picoclaw#2046](https://github.com/sipeed/picoclaw/issues/2046) |
| 🟡 **P1 - 严重** | #2371 (已关闭) | Agent loop 运行时 panic（`loop.go:2171`），多模型/多 provider 触发 | 🟢 已关闭 | [sipeed/picoclaw#2371](https://github.com/sipeed/picoclaw/issues/2371) |
| 🟢 **P2 - 一般** | #2080 | Windows QQ 渠道无法使用（平台兼容性问题） | 🟢 已关闭 | [sipeed/picoclaw#2080](https://github.com/sipeed/picoclaw/issues/2080) |
| 🟢 **P2 - 一般** | #2236 | Docker 自定义端口后 Web 输入框禁用 | 🟢 已关闭 | [sipeed/picoclaw#2236](https://github.com/sipeed/picoclaw/issues/2236) |

> **关键风险**：#2578 的 API key 丢失问题与 PR #2372 的修复范围需交叉验证，确保 `openai_compat` 全路径覆盖。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **语音交互（TTS/ASR）** | #1648 + PR #1642 | ⭐⭐⭐⭐⭐ **极高** | 架构设计文档已完成，社区呼声最高（23 评论），只差网关集成 |
| **Web 流式输出** | #1950 + PR #2587 | ⭐⭐⭐⭐⭐ **极高** | PR 已开且活跃更新，直接影响核心聊天体验 |
| **OpenAI Responses API 迁移** | #2171 | ⭐⭐⭐⭐☆ 高 | OpenAI 官方推荐路线，技术债务清理需求 |
| **OTel GenAI 可观测性** | #1731 | ⭐⭐⭐☆☆ 中 | 企业级需求明确，但优先级标记为 low |
| **Mattermost 渠道支持** | #1587 | ⭐⭐⭐☆☆ 中 | 团队场景需求，已有 2 👍，实现复杂度中等 |
| **自升级机制** | #618 | ⭐⭐⭐☆☆ 中 | 影响发布效率，但涉及多平台包管理器适配，工作量大 |
| **LM Studio 一键连接** | #28 | ⭐⭐☆☆☆ 低-中 | 降低门槛诉求强烈，但缺乏具体技术方案贡献 |
| **Seahorse 记忆系统** | #1919 | ⭐⭐⭐⭐⭐ **已落地** | 已关闭，进入主分支 |
| **LangSmith 追踪** | #2173 | ⭐⭐⭐⭐⭐ **已落地** | 已关闭，可观测性层就位 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型场景 |
|:---|:---|:---|
| **API 认证频繁失效** | #2578, #2286, #2334 | 配置迁移后 key 丢失、模型引用解析失败、fallback 链断裂 — **Provider 层可靠性是最大信任杀手** |
| **"黑盒"执行体验** | #571, #2137 | 工具执行时零反馈，用户不知道 agent 是死是活，长任务焦虑严重 |
| **Android 端配置困难** | #28, #2368 | 移动端模型配置 UI 状态不同步，本地模型接入门槛高 |
| **Docker/端口场景边缘问题** | #2236, #1708 | 非标准端口部署后前端状态异常，REST API 可用性文档与实际不符 |

### 😊 正向反馈

| 反馈 | 来源 |
|:---|:---|
| 记忆系统（Seahorse）设计获认可，生物启发架构有差异化 | #1919 |
| 实时任务进度展示（消息编辑+反应）提升掌控感 | #2137 |
| `/stop` 命令解决长任务失控焦虑 | #2009 |
| 飞书文件下载路径自定义改善企业合规 | #2030 |

### 📊 使用场景分布信号

- **企业/团队部署**：飞书、Mattermost、OpenIM 渠道需求集中
- **边缘/嵌入式**：Android、自升级、轻量级 Docker 诉求
- **成本敏感**：OpenRouter 免费模型轮换（FreeRide）、多 provider fallback
- **本地隐私**：LM Studio、Ollama 一键接入

---

## 8. 待处理积压

> 以下 Issue/PR 长期未响应或标记 stale，建议维护者优先审阅：

| 条目 | 停滞时间 | 风险/价值 | 行动建议 |
|:---|:---|:---|:---|
| **#2578** `openai_compat` API key 静默丢失 | ~10 天 | 🔴 **阻断性回归**，影响所有 HTTP provider | 与 PR #2372 联合验证，紧急合并或打补丁 |
| **#629** LLM 调用失败无重试 | ~2 个月 | 🟡 长任务稳定性核心诉求 | 评估是否纳入 agent loop 重构 |
| **#618** 自升级支持 | ~2 个月 | 🟡 影响发布节奏和安全补丁触达 | 拆分平台子任务，招募贡献者 |
| **#1648** TTS/ASR 支持 | ~1.5 个月 | 🟢 高价值功能，设计已完成 | 推动 PR #1642 网关集成评审 |
| **PR #2603** FreeRide 工具 | ~7 天 | 🟢 降本增效，代码已就绪 | 代码审查与合并 |
| **PR #2520** Cron 任务修复 | ~13 天 | 🟡 定时任务核心功能 | 测试覆盖确认后合并 |
| **PR #2491** 会话管理命令 | ~15 天 | 🟢 用户体验增强（/status, /compact, /new） | 交互设计评审 |

---

*日报生成时间：2026-04-28 | 数据来源：GitHub API 快照 | 项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-28

---

## 1. 今日速览

NanoClaw 今日保持**高活跃度**，24小时内 Issues 更新 20 条（12 开/活跃，8 关闭）、PR 更新 24 条（12 待合并，12 已合并/关闭），无新版本发布。社区聚焦 **v2 架构稳定性修复**与**多通道适配器完善**，Telegram、Signal、Discord 等通道 Bug 密集暴露，Docker 沙箱与系统部署体验成为基础设施重点。值得关注的是，调度器（Scheduler）在 v2 中出现**会话隔离设计缺陷**（#2067），可能影响多线程场景下的任务管理可靠性。

---

## 2. 版本发布

**无新版本发布**（最新版本仍为 v2.0.x，2026-04-22 发布）。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#1326](https://github.com/qwibitai/nanoclaw/pull/1326) | kky | **通道无关的语音转录技能**：新增 `src/transcription.ts`，支持 whisper.cpp 本地与 OpenAI Whisper API 双后端，任何通道可动态调用 | 已合并 |
| [#987](https://github.com/qwibitai/nanoclaw/pull/987) | daniil-lyalko | **会话大小轮转与临终内存刷新**：解决长运行实例 55MB/16K 行转录文件导致的 SDK 恢复失败与容器 25 秒退出问题 | 已合并 |
| [#2050](https://github.com/qwibitai/nanoclaw/pull/2050) | jsboige | **修复 RooSync 收件箱桥接**：恢复丢失的 TS 源文件，修复容器内 bot 身份识别，恢复 `@-mention` 唤醒端到端 | 已合并 |
| [#2049](https://github.com/qwibitai/nanoclaw/pull/2049) | mrakimide | **Telegram 通道适配器正式落地**：基于 `@chat-adapter/telegram` v4.26.0，实现配对流程防止未授权访问 | 已合并 |
| [#2059](https://github.com/qwibitai/nanoclaw/pull/2059) | underscorerootword | 运营/容器技能贡献（Claude/modest mahavira） | 已合并 |
| [#1997](https://github.com/qwibitai/nanoclaw/pull/1997) | dim0627 | **修复 SQLite UTC 解析**：解决非 UTC 主机上 60 秒内误杀新容器的致命循环 | 已合并 |
| [#1912](https://github.com/qwibitai/nanoclaw/pull/1912) | boskodev790 | 空容器 stdout 回退解析器修复 | 已合并 |
| [#1913](https://github.com/qwibitai/nanoclaw/pull/1913) | boskodev790 | `@Andy` 触发词随助手名变更重命名 | 已合并 |

**关键里程碑**：Telegram 适配器正式并入主线（#2049），语音转录成为首个**跨通道通用技能**（#1326），长会话稳定性获得系统性解决方案（#987）。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) 可配置容器资源限制（--memory, --cpus, --pids-limit） | 3 评论 | **生产安全刚需**：当前容器无资源上限，LLM 循环/工具递归/fork 炸弹可导致主机 OOM。社区明确呼吁将 Docker 资源约束暴露为配置项，直接关系到多租户场景的可行性 |
| 🔥2 | [#2065](https://github.com/qwibitai/nanoclaw/issues/2065) Telegram 回复上下文暴露给 Agent | 1 评论 | **交互体验优化**：用户回复特定消息时 Agent 无法感知 `reply_to_message`，导致对话断联。已关闭说明修复已落地 |
| 🔥3 | [#2061](https://github.com/qwibitai/nanoclaw/issues/2061) 一次性任务完成后永久滞留 | 1 评论 | **调度器资源泄漏**：`list_tasks` 中已完成任务无 GC，无人值守场景下内存膨胀。已关闭 |

**诉求洞察**：生产部署安全（资源隔离、任务 GC）> 通道交互精度（回复上下文、附件可见性）> 架构扩展性（多模型支持）。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重级别 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-崩溃/阻断** | [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) | `install_packages` 审批触发 **A2A 自路由无限循环**，阻断所有 Telegram 消息投递 | ❌ 无 PR，需紧急关注 |
| 🔴 **P0-架构缺陷** | [#2067](https://github.com/qwibitai/nanoclaw/issues/2067) | **v2 调度器会话绑定**：`list_tasks`/`cancel_task`/`update_task` 无法跨线程操作任务，多会话场景下任务管理失明 | ❌ 无 PR，设计层面需决策 |
| 🟡 **P1-功能损坏** | [#2051](https://github.com/qwibitai/nanoclaw/issues/2051) | `add_mcp_server` 将 `args` 数组序列化为字符串，破坏容器启动（Claude Code MCP 配置校验失败） | ❌ 无 PR |
| 🟡 **P1-功能损坏** | [#2047](https://github.com/qwibitai/nanoclaw/issues/2047) | 迁移后附件目录未挂载进容器，Agent 见路径不见文件 | ❌ 无 PR（但 #2053 涉及相关路径隔离） |
| 🟡 **P1-通道回归** | [#2044](https://github.com/qwibitai/nanoclaw/issues/2044) | Discord `<URL>` 被错误转为 `[URL](URL)`，URL 预览抑制失效 | ❌ 无 PR |
| 🟡 **P1-通道回归** | [#2043](https://github.com/qwibitai/nanoclaw/issues/2043) | Telegram HTML 输出过度转义 `&apos;` | ❌ 无 PR |
| 🟡 **P1-通道损坏** | [#2042](https://github.com/qwibitai/nanoclaw/issues/2042) | `add_reaction` 3 段式 platform ID 破坏 Telegram `setMessageReaction` | ❌ 无 PR |
| 🟢 **P2-体验瑕疵** | [#2046](https://github.com/qwibitai/nanoclaw/issues/2046) | OneCLI agent ID 下划线与连字符不兼容，容器 spawn 失败 | ❌ 无 PR（单字符修复，社区可快速贡献） |
| 🟢 **P2-体验瑕疵** | [#2058](https://github.com/qwibitai/nanoclaw/issues/2058) | Google Chat 缺失于 setup/auto.ts 通道选择器 | ❌ 无 PR |

**基础设施层风险**：PR [#2060](https://github.com/qwibitai/nanoclaw/pull/2060)（Docker Sandbox 就绪性）与 [#2063](https://github.com/qwibitai/nanoclaw/pull/2063)（A2A 路由自循环防护）正在审查中，有望缓解部分 P0/P1 问题。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **容器资源限制配置** | [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) | ⭐⭐⭐⭐⭐ 高 | 生产部署刚需，3 评论活跃讨论，实现路径清晰（Docker 参数透传） |
| **多模型/第三方 API 支持** | [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) | ⭐⭐⭐⭐☆ 中高 | 中文社区强烈诉求，v2 架构解耦为接入创造条件，需设计统一模型路由层 |
| **Signal 出站附件** | [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) | ⭐⭐⭐⭐⭐ 高 | PR 已提交，基于 signal-cli JSON-RPC 的 `attachments` 参数，技术方案成熟 |
| **Emoji 短码规范化** | [#2041](https://github.com/qwibitai/nanoclaw/issues/2041) | ⭐⭐⭐☆☆ 中 | Slack→Unicode 映射表维护成本，但影响跨通道反应一致性 |
| **Google Chat 支持** | [#2058](https://github.com/qwibitai/nanoclaw/issues/2058) | ⭐⭐⭐☆☆ 中 | 配置层缺失，适配器可能已存在仅需注册 |

**v2 架构债务信号**：#2067 暴露的调度器会话隔离问题，暗示 v2 的 "每会话独立 DB" 设计在全局任务视角下需要重新权衡——是引入全局任务索引，还是增强跨会话查询能力。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"装完包后 Telegram 彻底静默"** | [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) | 审批流程与 A2A 路由耦合产生死循环，用户完全失去对 Agent 的控制感 |
| **"迁移后图片发出去 Agent 说看不到"** | [#2047](https://github.com/qwibitai/nanoclaw/issues/2047) | 数据目录挂载遗漏，迁移体验断裂 |
| **"Agent 回复了别人 10 条前的消息，完全不知我在回哪条"** | [#2065](https://github.com/qwibitai/nanoclaw/issues/2065) | Telegram 回复上下文丢失，群聊场景可用性骤降 |
| **"跑了一周发现任务列表里有 300 个 completed"** | [#2061](https://github.com/qwibitai/nanoclaw/issues/2061) | 无自动清理，运维心智负担 |

### 积极反馈

- **"v2 解决了 v1 的会话膨胀问题"**（#1989 背景隐含）
- 语音转录双后端设计获认可（#1326），本地优先满足隐私敏感场景

---

## 8. 待处理积压

| 时长 | Issue/PR | 风险 | 建议行动 |
|:---|:---|:---|:---|
| **6 天** | [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) 支持其他模型及第三方 API | 中文用户流失风险，竞品（Dify、FastGPT）已广泛支持 | 维护者回应路线图，或标记 `good first issue` 引导社区贡献适配层 |
| **10 天** | [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) v2 时间戳 ISO 8601 规范化 | 数据格式不一致导致通道适配器解析失败，已 rebase 待审 | 优先合并，影响所有 v2 实例的数据完整性 |
| **6 天** | [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) 任务消息延迟到主循环 | 与 #2067 调度器缺陷可能相关，需评估是否解决同一问题 | 审查者协调与 #2067 的关系，避免重复或冲突修复 |
| **10 天** | [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) Signal 出站附件 | 功能完整度缺口，PR 已就绪 | 快速审查合并，补齐 Signal 适配器最后一块短板 |

---

**项目健康度评分：🟡 良好（7/10）**

- ✅ 合并效率高（12/24 PR 已关闭），Telegram 适配器、语音转录等核心功能落地
- ✅ 基础设施投入加大（Docker Sandbox、systemd/LXC 兼容）
- ⚠️ v2 架构缺陷开始暴露（调度器会话隔离 #2067），需设计层面快速响应
- 🔴 P0 Bug #2048（A2A 无限循环）无 PR 跟进，存在生产事故风险

---

*日报生成时间：2026-04-28 | 数据来源：qwibitai/nanoclaw GitHub*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-28

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，24小时内产生 **33 个 PR 更新**（26 个待合并）和 **10 个 Issues 更新**（9 个活跃），无新版本发布。核心焦点集中在 **Reborn 架构的分阶段落地**——团队正通过精细化的 PR 拆分策略（#2987 追踪）将巨型技术债转化为可审查的增量交付。与此同时，**V2 引擎的稳定性问题集中爆发**：审批流缺陷（#2991）、时区感知修复（#2989 已合并）、迁移回归（#2982）形成明显的质量承压面。CI 金丝雀三条链路同时告警（#2975-#2977），表明基础设施可靠性存在系统性风险。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2989](https://github.com/nearai/ironclaw/pull/2989) | ilblackdragon | **修复 mission 每日线程预算的时区感知问题** | 解决 V2 引擎关键功能缺陷——非 UTC 时区下 cron 任务可能"假死"17小时，直接影响全球部署可用性 |
| [#2988](https://github.com/nearai/ironclaw/pull/2988) | serrrfirat | **Reborn 基础 Host crates 落地** (`ironclaw_host_api`, `ironclaw_resources`, `ironclaw_architecture`) | 架构现代化里程碑：为后续所有 Reborn 切片奠定类型安全的基础抽象层 |
| [#2983](https://github.com/nearai/ironclaw/pull/2983) | serrrfirat | **Reborn 合约冻结审查包** | 建立可审计的架构决策记录（ADR）体系，降低大规模重构的认知负荷 |
| [#2994](https://github.com/nearai/ironclaw/pull/2994) | henrypark133 | **修复 v2 `tool_info` 动作清单查找** | 引擎原生动作（如 `mission_create`）现在能正确返回 schema，消除工具发现层的静默失败 |
| [#2978](https://github.com/nearai/ironclaw/pull/2978) | henrypark133 | **修复 bridge restart 审批下限** | 明确区分显式工具权限策略与未知工具回退，强化安全边界 |
| [#3002](https://github.com/nearai/ironclaw/pull/3002) | henrypark133 | 关闭（详情未明） | — |

**整体推进评估**：今日合并的 6 个 PR 中，**4 个直接修复 V2 引擎生产缺陷**，**2 个推进 Reborn 架构基础设施**。项目处于"边飞行边换引擎"的紧张节奏——稳定性修复与长期架构投资并行，但 V2 的 bug 密度表明该引擎尚未达到生产成熟。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | 议题 | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 | [#2987](https://github.com/nearai/ironclaw/issues/2987) Track Reborn architecture landing strategy and grouped PR plan | **7 评论** | **核心架构治理议题**。作者 serrrfirat 主动将"巨型堆叠 PR"重构为可审查的集成计划（PR0 合约冻结 → 创建 `reborn-integration` 分支 → 分组切片），反映了团队对代码审查质量的重视，也暴露出大规模重构的协作瓶颈 |
| 🥈 | [#2887](https://github.com/nearai/ironclaw/issues/2887) Auth Browser Consent canary fails — Google bot detection on CI runner | 1 评论 | 基础设施痛点：`handle_google_popup()` 的裸 `try/except: pass` 掩盖真实失败，技术债与外部依赖（Google 反爬策略）交织 |
| 🥉 | [#1697](https://github.com/nearai/ironclaw/issues/1697) how to use codex as base model? | 1 评论 | **用户入门体验缺陷**：用户已授权 Codex 但无法正确配置模型名称（尝试 "Plus"、"GPT-5.4 mini" 均失败），文档与 CLI 引导存在明显断层 |

**诉求洞察**：社区核心诉求集中在三方面——(1) 大型架构变更的可审查性（#2987）；(2) CI/测试基础设施的可靠性（#2887, #2975-#2977）；(3) 模型配置的用户体验（#1697）。

---

## 5. Bug 与稳定性

| 严重程度 | 议题 | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 生产阻断** | [#2991](https://github.com/nearai/ironclaw/issues/2991) | **OPEN** | V2 审批流崩溃：提示不清晰、路由错误、强制串行执行 | 无 |
| 🔴 **P0 - 生产阻断** | [#2982](https://github.com/nearai/ironclaw/issues/2982) | **OPEN** | 0.26.0 升级后 Routine/Mission 迁移错误：现有聊天被错误分类 | 无 |
| 🟡 **P1 - 功能降级** | [#1945](https://github.com/nearai/ironclaw/issues/1945) | ✅ CLOSED | V2 mission `threads_today` 计数器永不重置——每日预算永久耗尽 | [#2989](https://github.com/nearai/ironclaw/pull/2989) |
| 🟡 **P1 - 功能降级** | [#2833](https://github.com/nearai/ironclaw/issues/2833) | **OPEN** | 跨对话响应污染：切换对话时 A 的推理结果出现在 B 的视图中 | 无 |
| 🟡 **P1 - 基础设施** | [#2975](https://github.com/nearai/ironclaw/issues/2975) | **OPEN** | 金丝雀 `private-oauth` 链路失败 | 无 |
| 🟡 **P1 - 基础设施** | [#2976](https://github.com/nearai/ironclaw/issues/2976) | **OPEN** | 金丝雀 `public-smoke` 链路失败 (Anthropic) | 无 |
| 🟡 **P1 - 基础设施** | [#2977](https://github.com/nearai/ironclaw/issues/2977) | **OPEN** | 金丝雀 `provider-matrix` 链路失败 (openai-compatible) | 无 |
| 🟡 **P1 - 基础设施** | [#2887](https://github.com/nearai/ironclaw/issues/2887) | **OPEN** | Google OAuth 浏览器自动化被 CI 环境检测拦截 | 无 |

**稳定性健康度**：⚠️ **承压**。三条金丝雀同时失败（#2975-#2977）指向**同一 commit `7404e7d`**，存在明确的回归嫌疑。V2 引擎在审批流（#2991）和迁移逻辑（#2982）上的缺陷表明该版本尚未准备好广泛部署。

---

## 6. 功能请求与路线图信号

| 议题/PR | 类型 | 纳入可能性 | 分析 |
|:---|:---|:---|:---|
| [#2993](https://github.com/nearai/ironclaw/pull/2993) Reborn: durable event/audit substrate | 架构基础设施 | ⭐⭐⭐⭐⭐ **高** | 已按 #2987 计划拆分，是 Reborn 落地的关键路径，审查中 |
| [#2999](https://github.com/nearai/ironclaw/pull/2999) Reborn: auth control substrate | 架构基础设施 | ⭐⭐⭐⭐⭐ **高** | 含 DB 迁移，与 #2993 形成 Reborn 安全层核心 |
| [#2996](https://github.com/nearai/ironclaw/pull/2996) Reborn: filesystem substrate | 架构基础设施 | ⭐⭐⭐⭐⭐ **高** | #2993 的配对 PR，filesystem 与 events 分离审查 |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun Coding Plan support | 云提供商集成 | ⭐⭐⭐⭐☆ **中高** | 超大 PR（XL），覆盖 15+ 作用域，已开放 38 天，需核心维护者推动 |
| [#2925](https://github.com/nearai/ironclaw/pull/2925) Downstream deploy infra | 部署可扩展性 | ⭐⭐⭐⭐☆ **中高** | 明确"无用户可见工具"的设计，符合 Henry 的审查反馈，针对下游 fork 场景 |
| [#2871](https://github.com/nearai/ironclaw/pull/2871) ExternalToolRegistrar plugin seam | 扩展机制 | ⭐⭐⭐⭐☆ **中高** | 解决 `ironclaw-abound` 私有 fork 的痛点，插件化架构的关键拼图 |
| [#1697](https://github.com/nearai/ironclaw/issues/1697) Codex 模型配置支持 | 用户体验 | ⭐⭐⭐☆☆ **中** | 用户真实需求，但需明确 Codex 的产品定位（Plus/GPT-5.4 mini 的命名混乱） |

**路线图信号**：Reborn 架构的"分片着陆"策略已清晰成型——host 基础 → events/audit → filesystem → auth/control，预计将在 0.27.0 或 0.28.0 形成完整交付。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#1697](https://github.com/nearai/ironclaw/issues/1697) | **模型配置认知摩擦** | 用户已获授权却不知如何映射到 CLI 的模型名称字段，"Plus" 和 "GPT-5.4 mini" 的尝试显示产品命名与 API 标识存在断层 |
| [#2991](https://github.com/nearai/ironclaw/issues/2991) | **V2 审批流体验倒退** | Bug Bash 发现：提示模糊、路由错误、强制串行——从 V1 的流畅体验显著退化 |
| [#2982](https://github.com/nearai/ironclaw/issues/2982) | **升级迁移信任危机** | 0.24.0 → 0.26.0 后历史数据分类错误，"新聊天正常，旧聊天异常"的割裂感损害用户信任 |
| [#2833](https://github.com/nearai/ironclaw/issues/2833) | **多任务切换的不安全感** | 长推理任务进行中切换对话，结果"串台"——用户对系统的状态隔离能力产生怀疑 |

### 满意/不满意

- ✅ **满意**：Reborn 架构的透明化推进（#2987 的主动沟通）、问题修复的响应速度（#2989 当日合并）
- ❌ **不满意**：V2 引擎的"半成品"感（多个核心路径缺陷）、CI 稳定性的持续恶化（三条金丝雀同时失败）、升级迁移的可靠性承诺

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun Coding Plan support | 2026-03-20 | 2026-04-28 | ⚠️ **XL PR 腐烂风险** | 开放 **39 天**，39 个依赖更新已累积冲突风险，需核心维护者决策合并或拆分 |
| [#2874](https://github.com/nearai/ironclaw/pull/2874) Canary report | 2026-04-23 | 2026-04-27 | ⚠️ **金丝雀系统阻塞** | 与 #2975-#2977 的批量失败直接相关，需优先解决以恢复 CI 信号可信度 |
| [#2887](https://github.com/nearai/ironclaw/issues/2887) Google OAuth bot detection | 2026-04-23 | 2026-04-27 | ⚠️ **认证基础设施脆弱** | 裸 `try/except: pass` 是已知反模式，5 天无响应，建议分配所有者 |
| [#1697](https://github.com/nearai/ironclaw/issues/1697) Codex 模型配置 | 2026-03-27 | 2026-04-27 | ⚠️ **用户入门流失** | 开放 **32 天**，文档缺口直接影响新用户激活，建议快速文档修复或 CLI 引导增强 |

---

**日报生成时间**：2026-04-28  
**数据基准**：GitHub API 过去 24 小时活动  
**项目健康度评分**：🟡 **65/100** — 高活跃度与架构投资积极，但 V2 稳定性缺陷和 CI 回归构成显著下行风险

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-28

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **观测周期**: 2026-04-27 至 2026-04-28  
> **分析师**: AI 智能体与开源项目分析助手

---

## 1. 今日速览

LobsterAI 今日呈现**高强度迭代态势**：24小时内 38 个 PR 流转（63% 已合并/关闭），7 个 Issues 活跃，并发布 2026.4.25 版本。核心团队聚焦**三大攻坚方向**：(1) DeepSeek V4 等新兴模型的兼容性修复；(2) 启动超时、配置覆盖等 Windows 平台稳定性问题；(3) 安全加固——敏感日志脱敏与 IPC 权限管控。社区侧，长期存在的"无法使用""打包失败"等入门门槛问题仍未获官方响应，新旧 Issue 积压形成明显反差。

---

## 2. 版本发布

### [LobsterAI 2026.4.25](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.25) | 2026-04-25

| 维度 | 详情 |
|:---|:---|
| **类型** | 补丁版本（Bugfix + 功能增强） |
| **核心变更** | ① **Cowork 模式修复**：恢复 DiffView 对 edit tool 的 `edits-array` 输入格式支持（[PR #1814](https://github.com/netease-youdao/LobsterAI/pull/1814) by @btc69m979y-dotcom）；② **记忆搜索增强**：新增 embedding 配置项，支持自定义记忆检索的向量模型参数 |
| **破坏性变更** | 无 |
| **迁移注意** | 若此前在 Cowork 模式下遇到编辑工具渲染异常，升级后需重新触发会话以激活 DiffView |

> 该版本为 4 月第 4 个迭代版本，发布节奏保持双周频度。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（14 条核心）

| PR | 作者 | 领域 | 价值评估 |
|:---|:---|:---|:---|
| [#1847](https://github.com/netease-youdao/LobsterAI/pull/1847) | fisherdaddy | OpenClaw/模型 | ⭐⭐⭐ **关键修复**：自定义供应商使用 DeepSeek V4 的 schema 兼容问题，直接响应 [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) |
| [#1846](https://github.com/netease-youdao/LobsterAI/pull/1846) | liuzhq1986 | 启动/诊断 | ⭐⭐⭐ **稳定性**：Windows 启动超时从 5s 提升至 15s，新增渲染进程诊断日志通道，破解"启动死循环"黑盒 |
| [#1845](https://github.com/netease-youdao/LobsterAI/pull/1845) | liuzhq1986 | Cowork/模型 | ⭐⭐⭐ **架构修复**：阻止 `modelOverride` 被模型归一化逻辑覆盖，解决多会话模型漂移问题 |
| [#1844](https://github.com/netease-youdao/LobsterAI/pull/1844) | btc69m979y-dotcom | 安全/日志 | ⭐⭐⭐ **安全合规**：`api:fetch` headers 脱敏（`x-api-key`、`authorization`），密钥日志从 12 字符明文缩短为 `前3***尾2` |
| [#1843](https://github.com/netease-youdao/LobsterAI/pull/1843) | liuzhq1986 | Cowork/会话 | ⭐⭐ 会话级模型持久化写入 SQLite，根治并行会话共享模型缺陷 |
| [#1842](https://github.com/netease-youdao/LobsterAI/pull/1842) | liuzhq1986 | 模型解析 | ⭐⭐ 失效模型引用静默回退全局默认，避免单点模型错误阻塞全部会话 |
| [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841) | liuzhq1986 | Windows 安装 | ⭐⭐ NSIS 退出码检测改用数值比较（`IntCmp`），修复安装程序误判 |
| [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840) | liuzhq1986 | 配置系统 | ⭐⭐ `updateConfig` 改为读-改-写模式，防止默认配置覆盖用户自定义供应商 |
| [#1839](https://github.com/netease-youdao/LobsterAI/pull/1839) | winsan-zhang | 企业/多账户 | ⭐⭐ 多账户 OpenClaw 配置同步修复 |
| [#1838](https://github.com/netease-youdao/LobsterAI/pull/1838) | btc69m979y-dotcom | OpenClaw 配置 | ⭐⭐ 为 `openclaw.json` 写入 `meta` 时间戳，阻止健康监控误报产生大量 `.clobbered` 快照垃圾文件 |
| [#1837](https://github.com/netease-youdao/LobsterAI/pull/1837) | liugang519 | Gateway | ⭐ 网关重启统一 debug 日志 |
| [#1834](https://github.com/netease-youdao/LobsterAI/pull/1834) | btc69m979y-dotcom | 微信/OpenClaw | ⭐ 升级 `openclaw-weixin` 至 2.1.10，修复 derive prompt 死循环与重试守卫 |

**整体推进评估**：今日合并 PR 中，**模型兼容性（DeepSeek V4）、启动稳定性、配置持久化、安全日志**四大主题占据主导，显示项目从"功能堆砌"转向"质量加固"的成熟阶段。liuzhq1986 单日贡献 6 条高质量修复，为核心技术骨干。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 状态 | 评论 | 热度分析 |
|:---|:---|:---|:---|
| [#73 根本用不了](https://github.com/netease-youdao/LobsterAI/issues/73) | 🔴 OPEN, stale | 10 | **最长尾痛点**：2 月创建至今未获官方实质性回应，404 错误指向 Claude SDK 路径问题，用户已提供完整堆栈。反映**新手入门文档缺失 + 错误码可读性差**的系统性问题 |
| [#1813 DeepSeek V4 无法使用](https://github.com/netease-youdao/LobsterAI/issues/1813) | 🟡 OPEN | 3 | **新兴模型适配压力**：`provider rejected request schema or tool payload`，用户截图显示工具调用 schema 不兼容。已有 [PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847) 修复，待验证关闭 |
| [#100 为什么打包 dmg 报错](https://github.com/netease-youdao/LobsterAI/issues/100) | 🔴 OPEN, stale | 3 | **开发者体验**：Electron 打包路径配置错误，`dist-electron/main.js` 缺失。3 个月无回应，阻碍社区贡献者参与 |

**诉求洞察**：社区存在明显的**"两极分化"**——核心用户（企业/深度使用者）获得快速响应（DeepSeek V4 问题 3 天内出修复），而**入门用户、打包开发者、UI 反馈者**的声音长期沉没。Issue #1836 "界面太丑"虽仅 1 评论，但代表大众用户未被满足的审美需求。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-阻塞** | **DeepSeek V4 工具调用 schema 被拒** — 自定义供应商无法使用最新模型 | [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | **✅ 已修复** [PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847)，待发布 |
| 🔴 **P0-阻塞** | **"根本用不了" 404 错误** — Claude SDK 路径解析失败，用户完全无法启动 | [Issue #73](https://github.com/netease-youdao/LobsterAI/issues/73) | ❌ 无官方回应，stale 2 个月 |
| 🟡 **P1-严重** | **启动死循环** — `punycode` 废弃警告 + SkillServices 重复启动 | [Issue #17](https://github.com/netease-youdao/LobsterAI/issues/17) | 🔄 部分缓解：[PR #1846](https://github.com/netease-youdao/LobsterAI/pull/1846) 增加诊断超时，根因待查 |
| 🟡 **P1-严重** | **私有部署模型 Skill 调用失败** — Qwen3-30B-A3B 正常问答可用，工具调用报错 | [Issue #955](https://github.com/netease-youdao/LobsterAI/issues/955) | ✅ 已关闭（用户侧解决或绕过） |
| 🟡 **P1-严重** | **自定义模型无法调用** — 配置后无响应 | [Issue #106](https://github.com/netease-youdao/LobsterAI/issues/106) | ❌ stale，无回应 |
| 🟢 **P2-一般** | **配置覆盖** — `updateConfig` 用内存默认值覆盖用户自定义供应商 | [PR #1840](https://github.com/netease-youdao/LobsterAI/pull/1840) 修复 | ✅ 已修复 |
| 🟢 **P2-一般** | **敏感信息泄露** — 日志明文打印 API key、auth token | [PR #1844](https://github.com/netease-youdao/LobsterAI/pull/1844) 修复 | ✅ 已修复 |

**稳定性信号**：今日安全类 PR 密集（#1844, #1833, #1832, #1831），反映团队可能经历**安全审计或外部报告**，正主动加固。Windows 启动问题获系统性关注，但"完全无法使用"类入门故障仍被忽视。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性评估 | 纳入信号 |
|:---|:---|:---|:---|
| **界面重设计** — "过于丑了，用起来不舒服" | [Issue #1836](https://github.com/netease-youdao/LobsterAI/issues/1836) | 中 | ⭐⭐⭐ 已有 [PR #1511](https://github.com/netease-youdao/LobsterAI/pull/1511) 表单 UX 优化（必填标记）、[PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) Cron 调度表单优化，显示**渲染层体验正被系统性翻新**，全面 UI 改版或在下个 Q 路线图 |
| **自定义 Cron 定时任务** | [PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) | 高 | ⭐⭐⭐ 已开发完成，待合并，预计 2026.5.x 版本发布 |
| **邮件连接 AI 诊断** — 一键提交报错给 AI 排查 | [PR #1527](https://github.com/netease-youdao/LobsterAI/pull/1527) | 高 | ⭐⭐⭐ 功能完成度高，待合并 |
| **Embedding 配置自定义** | [Release 2026.4.25](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.25) | 已发布 | ✅ 已落地 |

**路线图推断**：短期（1-2 版本）聚焦 **Cowork 模式健壮性 + 安全合规 + 模型生态扩展**；中期（Q2-Q3）**UI/UX 翻新 + 定时任务自动化**是可见方向。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论与描述）

| 用户场景 | 痛点 | 情绪强度 |
|:---|:---|:---|
| **Windows 普通用户** | "根本用不了" — 下载安装后直接 404，无排查文档，10 条评论多为"+1 同问题" | 😤 高挫败感 |
| **macOS 开发者/贡献者** | "打包 dmg 报错" — 想参与开发被 Electron 构建配置卡住，3 个月无回应 | 😤 贡献流失 |
| **企业私有化部署者** | Qwen3-30B 正常问答可用，Skill 工具调用失败，对比 OpenClaw 正常，怀疑 LobsterAI 封装层问题 | 😐 功能可用性不信任 |
| **审美敏感用户** | "相比竞品过于丑" — 直接对比 Cherry Studio、Claude Desktop 等，影响日常使用意愿 | 😒 品牌贬损 |
| **安全审计者**（推断） | 日志明文打印密钥、IPC 无权限控制 — 今日 4 条安全 PR 或源于此 | 🔍 专业审视 |

### 满意点
- DeepSeek V4 问题响应迅速（3 天修复周期）
- Cowork 模式持续迭代（DiffView、模型持久化等）

---

## 8. 待处理积压

### 需维护者紧急关注的长期 Issue

| Issue | 创建时间 | 最后更新 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#73 根本用不了](https://github.com/netease-youdao/LobsterAI/issues/73) | 2026-02-24 | 2026-04-27 | 🔴 **用户流失/口碑崩塌** | 指派专人诊断，补充"首次启动故障排查"文档，或增加自动诊断工具 |
| [#100 打包 dmg 报错](https://github.com/netease-youdao/LobsterAI/issues/100) | 2026-02-25 | 2026-04-27 | 🟡 **贡献者流失** | 验证 electron-builder 配置，补充 CONTRIBUTING.md 构建章节 |
| [#17 启动死循环](https://github.com/netease-youdao/LobsterAI/issues/17) | 2026-02-20 | 2026-04-27 | 🟡 **稳定性口碑** | [PR #1846](https://github.com/netease-youdao/LobsterAI/pull/1846) 已增诊断，需根因修复后关闭 |
| [#106 自定义模型无法调用](https://github.com/netease-youdao/LobsterAI/issues/106) | 2026-02-25 | 2026-04-27 | 🟡 **模型生态扩展受阻** | 与 #1813 合并分析，验证模型配置解析链路 |

### 待合并的功能 PR（可能延期）

| PR | 等待时长 | 阻塞风险 |
|:---|:---|:---|
| [#1519 自定义 Cron 调度](https://github.com/netease-youdao/LobsterAI/pull/1519) | ~20 天 | 中 — 功能完整，可能等待 UI 审查 |
| [#1527 邮件 AI 诊断](https://github.com/netease-youdao/LobsterAI/pull/1527) | ~20 天 | 中 — 同理 |
| [#1277 Electron 依赖升级](https://github.com/netease-youdao/LobsterAI/pull/1277) | ~25 天 | 低 — Dependabot 常规升级，需回归测试 |

---

## 附录：数据仪表盘

```
活跃度指标          数值        趋势
─────────────────────────────────────────
Issues 日更新        7          ▲ 社区问题持续涌入
PR 日流转           38         ▲▲ 开发峰值
合并率              63%        ▲ 高效迭代
stale Issue 占比    57% (4/7)  ▼▼ 长期积压严重
安全相关 PR         4          ▲▲▲ 突发加固
```

> **健康度评分**: 🟡 **B+** — 技术迭代活跃，质量意识提升，但**社区运营与入门体验存在结构性短板**。

---

*日报生成时间: 2026-04-28*  
*数据来源: GitHub API / 项目公开仓库*  
*下次更新: 2026-04-29*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-28

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-04-28  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

Moltis 今日呈现**高强度开发态势**，24小时内 15 个 PR 流转（12 条已合并/关闭，3 条待审），5 个 Issues 更新（4 条关闭，1 条新报）。核心特征是**"快速迭代+即时修复"**——昨日引入的 UI 回归（#886 误删会话名称）在 24 小时内被定位并修复；同时社区正大规模推进**模块化编译**（Telegram/Discord/MS Teams 可选化）和**智能体架构简化**两大结构性改进。代码索引自动化成为今日最活跃的实验方向，同一功能连续 4 次 PR 尝试（#900-#903）显示开发者在快速迭代中寻求正确实现路径。整体健康度：**活跃且响应迅速，但需关注重复 PR 反映的代码审查效率**。

---

## 2. 版本发布

**无新版本发布**

今日未发布 Release。值得注意的是，PR [#895](https://github.com/moltis-org/moltis/pull/895) 移除了约 92K 行生成的前端资源文件并改为编译时构建，这一变更可能为即将到来的版本发布做仓库瘦身准备。

---

## 3. 项目进展

### 🔧 核心架构改进

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#898](https://github.com/moltis-org/moltis/pull/898) | penso | **智能体架构简化**：移除"主身份"概念，主智能体变为普通 DB 行，路由无处不在 | [#774](https://github.com/moltis-org/moltis/issues/774) |
| [#895](https://github.com/moltis-org/moltis/pull/895) | penso | **停止提交生成资源**：移除 92K 行 JS/CSS，改为 `build.rs` 编译时检查 + 统一构建脚本 | — |

### 🐛 关键 Bug 修复

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#892](https://github.com/moltis-org/moltis/pull/892) | penso | **UI 回归修复**：恢复 #886 误删的会话名称显示与重命名功能 | [#888](https://github.com/moltis-org/moltis/issues/888) |
| [#894](https://github.com/moltis-org/moltis/pull/894) | penso | **安全钩子加固**：证明 `Block` 动作不会触发熔断器，关闭安全绕过漏洞 | [#547](https://github.com/moltis-org/moltis/issues/547) |
| [#893](https://github.com/moltis-org/moltis/pull/893) | penso | **Matrix OIDC 修复**：反向代理场景下使用 `ApplicationType::Web` 替代 `Native` | [#872](https://github.com/moltis-org/moltis/discussions/872) |
| [#897](https://github.com/moltis-org/moltis/pull/897) | penso | **Skills UI 修复**：显示 RPC 错误详情，安装时自动信任技能 | — |

### 📦 模块化编译推进

| PR | 作者 | 说明 |
|:---|:---|:---|
| [#890](https://github.com/moltis-org/moltis/pull/890) / [#889](https://github.com/moltis-org/moltis/pull/889) / [#891](https://github.com/moltis-org/moltis/pull/891) | Cstewart-HC | Telegram 通道可选化（3 次尝试后合并） |
| [#899](https://github.com/moltis-org/moltis/pull/899) | Cstewart-HC | **待审**：Discord 与 MS Teams 通道可选化（延续 #891 模式）|

### 🚀 新功能实验

| PR | 作者 | 状态 | 说明 |
|:---|:---|:---|:---|
| [#903](https://github.com/moltis-org/moltis/pull/903) | Cstewart-HC | **待审** | 代码索引自动触发（去重+文件监视）— 第 4 次迭代 |
| [#904](https://github.com/moltis-org/moltis/pull/904) | penso | **待审** | 命令面板（Cmd+K/Ctrl+K），含会话搜索与导航快捷入口 |

**进展评估**：今日合并的 PR 覆盖了**架构债务清理、安全加固、第三方认证修复、构建系统现代化**四个维度，项目在技术债偿还和用户体验上均有实质性推进。智能体架构简化（#898）是长期路线图的关键里程碑。

---

## 4. 社区热点

### 最活跃讨论

| 排名 | 条目 | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🥇 | [#896](https://github.com/moltis-org/moltis/issues/896) Docker 构建 DNS 解析失败 | 1 评论，新报 | **开发者体验痛点**：容器构建时的网络可靠性问题，影响 CI/CD 和新贡献者 onboarding |
| 🥈 | [#774](https://github.com/moltis-org/moltis/issues/774) → [#898](https://github.com/moltis-org/moltis/pull/898) 智能体架构简化 | 1 评论，已关闭 | **架构设计共识**：社区长期抱怨"主智能体"概念晦涩，PR 实现后快速合并显示维护团队与用户需求高度一致 |
| 🥉 | [#317](https://github.com/moltis-org/moltis/issues/317) Jinja 模板系统消息位置错误 | 1 评论，已关闭 | **模板引擎边缘情况**：系统消息顺序约束导致渲染失败，属于深层的提示词工程基础设施问题 |

**诉求洞察**：今日社区焦点从"功能请求"转向"使用障碍"——DNS 构建失败、UI 元素消失、模板渲染错误均为**阻断性体验问题**，而非增量功能需求。这暗示项目用户基数可能正在扩大，从早期采纳者向更广泛开发者渗透。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#888](https://github.com/moltis-org/moltis/issues/888) 会话名称不可见/不可编辑（UI 回归） | ✅ 已关闭 | [#892](https://github.com/moltis-org/moltis/pull/892) | **所有 Web UI 用户** — 核心交互功能丧失 |
| 🔴 **高** | [#547](https://github.com/moltis-org/moltis/issues/547) 钩子熔断器可能禁用安全钩子 | ✅ 已关闭 | [#894](https://github.com/moltis-org/moltis/pull/894) | **安全关键** — 恶意/错误脚本可绕过安全策略 |
| 🟡 **中** | [#317](https://github.com/moltis-org/moltis/issues/317) Jinja 系统消息位置异常 | ✅ 已关闭 | 未明确关联 | 使用复杂模板的智能体配置场景 |
| 🟡 **中** | [#896](https://github.com/moltis-org/moltis/issues/896) Docker 构建 DNS 解析失败 | 🆕 开放 | 暂无 | 容器化部署/CI 环境 |
| 🟢 **低** | [#897](https://github.com/moltis-org/moltis/pull/897) Skills UI 显示 `[object Object]` | ✅ 已关闭 | [#897](https://github.com/moltis-org/moltis/pull/897) | 技能安装失败时的调试体验 |

**稳定性评估**：昨日引入的 UI 回归（#886→#888）在 24 小时内被修复，显示**回归响应能力优秀**；安全钩子熔断器问题（#547）获得专项回归测试，安全设计得到加固。唯一开放问题 #896 为环境相关网络问题，需进一步诊断是否为项目配置或上游基础设施问题。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#774](https://github.com/moltis-org/moltis/issues/774) / [#898](https://github.com/moltis-org/moltis/pull/898) | 简化主智能体架构 | ✅ **已纳入** | PR 已合并，架构债务清理完成 |
| [#903](https://github.com/moltis-org/moltis/pull/903) | 代码索引全自动触发 | 🔶 **高概率** | 4 次迭代显示强烈推进意愿，待审中 |
| [#899](https://github.com/moltis-org/moltis/pull/899) | Discord/MS Teams 可选编译 | 🔶 **高概率** | 延续已合并的 Telegram 模式，一致性设计 |
| [#904](https://github.com/moltis-org/moltis/pull/904) | 命令面板（Cmd+K） | 🔶 **高概率** | 现代 Web 应用标配，提升专业用户效率 |
| 隐含信号 | 更多通道可选化（Slack? WhatsApp?） | 🔷 **中等** | 模式已建立，扩展成本低 |

**路线图判断**：项目正沿三条主线演进：**（1）开发者体验**（模块化编译、构建优化）；**（2）智能体基础设施智能化**（自动索引、架构简化）；**（3）专业用户效率**（命令面板）。下一版本可能聚焦"零配置智能体"体验。

---

## 7. 用户反馈摘要

### 💬 真实痛点（来自 Issues）

> *"Docker build fails: 'Temporary failure resolving 'ports.ubuntu.com'"*  
> — [#896](https://github.com/moltis-org/moltis/issues/896) orangesoncom  
> **场景**：容器化部署/CI 环境  
> **不满**：网络基础设施依赖不可靠，构建不可复现

> *"session names are no longer visible or editable in the chat UI"*  
> — [#888](https://github.com/moltis-org/moltis/issues/888) Cstewart-HC  
> **场景**：日常会话管理  
> **不满**：UI 更新引入回归，核心功能意外丢失

> *"simplify primary agent/agents, make less clunky"*  
> — [#774](https://github.com/moltis-org/moltis/issues/774) vvuk  
> **场景**：多智能体配置  
> **不满**："主身份"概念抽象且与数据库模型不一致，增加认知负担

### ✅ 满意信号

- **快速修复**：UI 回归和安全问题均在 24 小时内响应
- **架构倾听**：#774 长期诉求终获实现，用户-维护者信任度高

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#903](https://github.com/moltis-org/moltis/pull/903) 代码索引自动触发 | 2026-04-27 | 2026-04-28 | 1 天 | **技术风险**：同一功能 4 次 PR（#900-#903），前 3 次均关闭，可能反映实现方案未定或审查标准波动。需关注是否形成"PR 疲劳" |
| [#899](https://github.com/moltis-org/moltis/pull/899) Discord/Teams 可选化 | 2026-04-27 | 2026-04-28 | 1 天 | 依赖 #891 模式验证，低风险但需及时合并保持节奏 |
| [#904](https://github.com/moltis-org/moltis/pull/904) 命令面板 | 2026-04-27 | 2026-04-27 | 1 天 | 新功能，需评估与现有导航的交互一致性 |

**维护者提醒**：#903 的连续关闭-重开模式建议引入 **Draft PR 机制** 或 **预审查沟通**，减少 CI 资源消耗和贡献者挫败感。当前无长期积压 Issue，项目整体处于健康流动状态。

---

*日报生成时间: 2026-04-28*  
*数据来源: GitHub API / 公开仓库活动*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-28

> **数据周期**：2026-04-27 至 2026-04-28（UTC+8）
> **项目地址**：https://github.com/agentscope-ai/CoPaw

---

## 1. 今日速览

CoPaw（含 QwenPaw 子项目）今日保持**高活跃度**：24 小时内 50 条 Issues 动态（25 开/活跃、25 关闭）与 43 条 PR 动态（18 待合并、25 已合并/关闭）形成健康的闭环周转。社区围绕 **v1.1.4 系列版本的稳定性修复**展开密集讨论，微信/QQ/飞书等渠道适配、上下文压缩安全机制、以及配置持久化成为三大焦点。值得注意的是，今日无新版本发布，但已有版本号升级 PR（#3879）合并至 post3，预示补丁版本即将推出。

---

## 2. 版本发布

**无新版本发布**

但需关注：PR [#3879](https://github.com/agentscope-ai/QwenPaw/pull/3879) `chore(version): bumping version to 1.1.4.post3` 已合并，预计近期将发布 v1.1.4.post3，主要修复 1.1.4 引入的配置丢失、飞书消息分段、页面冻结等回归问题。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（25 条）

| PR | 作者 | 核心贡献 | 影响面 |
|:---|:---|:---|:---|
| [#3879](https://github.com/agentscope-ai/QwenPaw/pull/3879) | xieyxclack | 版本号升级至 1.1.4.post3 | 全项目 |
| [#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874) | qbc2016 | **模型重试逻辑精细化** (`feat(model): refine retry logic`) | 核心稳定性 |
| [#3887](https://github.com/agentscope-ai/QwenPaw/pull/3887) | bxy3045134656 | **QQ 语音消息类型映射修复**：区分 `.amr/.silk/.slk` 语音与普通音频 | QQ 渠道 |
| [#3872](https://github.com/agentscope-ai/QwenPaw/pull/3872) | albert-zen | **QQ WebSocket 可恢复中断重连**：WinError 10053/10054/10060 不再致命 | QQ 渠道稳定性 |
| [#3881](https://github.com/agentscope-ai/QwenPaw/pull/3881) | yuluo1007 | 官网页脚新增微信入口与二维码 | 社区运营 |
| [#3880](https://github.com/agentscope-ai/QwenPaw/pull/3880) | hongxicheng | CLI 渠道列表中微信显示名规范化 | 用户体验 |
| [#3877](https://github.com/agentscope-ai/QwenPaw/pull/3877) | hongxicheng | CI 集成测试目录路径修正 | 工程效能 |
| [#3848](https://github.com/agentscope-ai/QwenPaw/pull/3848) | suntp | **上下文压缩安全回退机制**（关闭，内容并入 #3882） | 核心可靠性 |
| [#3834](https://github.com/agentscope-ai/QwenPaw/pull/3834) | shadowabi | fallback agent profile 继承 `acp` 字段，修复 `opencode` 命令解析 | ACP 配置 |
| [#3726](https://github.com/agentscope-ai/QwenPaw/pull/3726) | rayrayraykk | Revert "前端构建过期警告"（因误报率过高） | 开发者体验 |

**整体推进评估**：今日合并以**渠道稳定性修复**（QQ 语音/重连）和**核心可靠性增强**（模型重试、上下文压缩安全）为主轴，回应了 v1.1.4 发布后的用户反馈浪潮。项目处于"快速迭代修 bug"的补丁周期。

---

## 4. 社区热点

### 🔥 评论最多 Issues（Top 5）

| Issue | 评论 | 状态 | 核心诉求 |
|:---|:---|:---|:---|
| [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) 安全规则禁用后仍拦截命令 | 9 | **已关闭** | `TOOL_CMD_IFS_INJECTION` 规则状态同步 bug，涉及 cron 任务中的 `$(date)` 命令被误拦截 |
| [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) 火山 Coding Plan 默认支持时间 | 7 | 已关闭 | 企业用户等待火山引擎（Volcano Engine）官方 plan 模板 |
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) **QwenPaw 与 CoPaw 关系与维护策略** | 7 | **仍开放** | ⚠️ **长期未决的品牌/架构定位问题**，用户困惑项目分裂状态 |
| [#3705](https://github.com/agentscope-ai/QwenPaw/issues/3705) ACP coding agent 操作被随机取消 | 6 | 已关闭 | 外部 agent 委托机制的权限同步与诊断困难 |
| [#3716](https://github.com/agentscope-ai/QwenPaw/issues/3716) opencode 在 ACP 中不工作 | 6 | 已关闭 | ACP 与 opencode 1.14.20 的协议兼容性 |

### 🔥 讨论焦点分析

**#3430 品牌架构困惑**（[链接](https://github.com/agentscope-ai/QwenPaw/issues/3430)）是今日最具战略意义的开放 Issue。创建于 4-15，持续有更新，反映社区对 **CoPaw（开源框架）vs QwenPaw（通义千问商业发行版）** 双品牌并行、代码库关系、维护团队是否统一等根本问题的焦虑。该 Issue 缺乏官方核心维护者回应，存在社区信任损耗风险。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | **ChromaDB Rust binding SIGSEGV 段错误导致整个进程崩溃**，单会话 45+ 次，Linux/Python 3.13 | **开放** | ❌ 无 |
| 🔴 Critical | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) | **Web UI 暂停按钮仅前端生效，后端 Agent 继续执行**，暂停功能完全失效 | **开放** | ❌ 无 |
| 🟠 High | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 会话历史消失、新消息路由至不同会话，数据完整性风险 | **开放** | ❌ 无 |
| 🟠 High | [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | Agent 完成后进入无限 "Thinking" 状态，SSE 流未正确关闭 | **开放** | ❌ 无 |
| 🟠 High | [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) | MCP 服务器导致聊天端无限卡死，生命周期管理错误 | **开放** | ❌ 无 |
| 🟡 Medium | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Debian 12 保存模型设置后页面冻结，root/非 root 权限差异 | 已关闭 | 隐含于 post3 |
| 🟡 Medium | [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) | 切换按钮/刷新后配置信息全部丢失（agent 语言、plan 模式、LLM 配置） | 已关闭 | 隐含于 post3 |
| 🟡 Medium | [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | 长期记忆向量模型配置容器重启后重置为空字符串 | 已关闭 | 隐含于 post3 |
| 🟡 Medium | [#3862](https://github.com/agentscope-ai/QwenPaw/issues/3862) | 飞书对话"几个字几个字蹦"（流式输出异常） | 已关闭 | 隐含于 post3 |

**稳定性评估**：v1.1.4 引入的**配置持久化回归**（#3824, #3817, #3853）已通过 post 补丁集中修复，但**四个 Critical/High 级别开放 bug** 涉及进程崩溃、功能完全失效、数据完整性，需紧急响应。ChromaDB 段错误（#3854）因涉及上游 Rust 扩展，可能需要替换向量数据库或增加隔离机制。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869) | Feature | **Channel 侧高危命令批准能力**（魔法命令替代 Web 控制台） | ⭐⭐⭐⭐⭐ **高** — 直接回应 #3850 等渠道场景痛点，PR #3889 的 ProgressObservingHook 可能为其提供基础设施 |
| [#3804](https://github.com/agentscope-ai/QwenPaw/issues/3804) | Feature | Proactive 消息支持自定义频道（飞书/钉钉等） | ⭐⭐⭐⭐☆ 高 — 渠道扩展的自然延伸，与现有 Channels 架构对齐 |
| [#3366](https://github.com/agentscope-ai/QwenPaw/issues/3366) | Feature | Token 消耗实时显示（参考 HerMES Agent） | ⭐⭐⭐☆☆ 中 — 成本透明需求明确，但需 UI 改造 |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | Feature | browser_use 默认支持 Apple Silicon ARM 架构 | ⭐⭐⭐☆☆ 中 — Playwright 上游已有 ARM 支持，配置问题 |
| [#406](https://github.com/agentscope-ai/QwenPaw/issues/406) | Feature | 基于 GitHub Copilot 的模型能力 | ⭐⭐☆☆☆ 低 — 长期开放，涉及商业授权与 OpenClaw 竞争策略 |
| PR [#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889) | PR | **跨 Agent 任务进度实时观测**（ProgressObservingHook + check_agent_task detail） | ⭐⭐⭐⭐⭐ **高** — 多 Agent 编排的核心基础设施，今日新建 |
| PR [#3876](https://github.com/agentscope-ai/QwenPaw/pull/3876) | PR | 模型选择器重构：可搜索扁平列表 + 提供商分组 | ⭐⭐⭐⭐☆ 高 — UX 改进，Cherry Studio/OpenCode 主流设计 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 Issue | 用户原声提炼 |
|:---|:---|:---|
| **配置反复丢失** | #3824, #3817 | "关闭服务或者刷新页面后，配置丢失，严重bug" |
| **渠道功能残缺** | #3869, #3837, #3862 | "web端未提供响应式界面，移动端体验很差"；"channel 还有什么意义呢" |
| **暂停/停止机制失效** | #3850, #3871 | "暂停功能形同虚设"；"无限 Thinking，必须手动停止" |
| **MCP 稳定性差** | #3822 | "无限期卡死，聊天一直等待不了回复" |
| **向量数据库崩溃** | #3854 | "45+ 次 segfault，agent completely unusable" |

### 😊 正面反馈

- 一键安装脚本（`curl | bash`）过往体验良好，近期首次出错被迅速关注（#3749）
- 微信渠道基础能力已满足需求，用户主动对比 openclaw-weixin 并提出对齐方案（#2875）

### 🎯 典型使用场景

- **Cron + Git 自动化**：安全规则与定时任务的冲突（#3709）
- **多 Agent 编排**：QwenPaw 作为 orchestrator + Qwen Code 作为外部 agent（#3705）
- **企业 IM 集成**：飞书、钉钉、QQ 作为主要生产环境，对稳定性和响应式体验要求极高

---

## 8. 待处理积压

### ⚠️ 需维护者紧急关注

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) **QwenPaw/CoPaw 关系定位** | 2026-04-15 | 2026-04-27 | **13 天无官方回应**，品牌信任损耗，影响社区贡献决策 |
| [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) 访问页面时快时慢 | 2026-04-16 | 2026-04-27 | 12 天开放，性能根因未定位，影响核心体验 |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) Apple Silicon ARM 支持 | 2026-03-31 | 2026-04-27 | **28 天开放**，M 系列 Mac 用户增长受阻 |
| [#406](https://github.com/agentscope-ai/QwenPaw/issues/406) GitHub Copilot 模型支持 | 2026-03-03 | 2026-04-27 | **55 天开放**，竞品 OpenClaw 已支持，存在用户流失风险 |
| PR [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) 异步生成会话标题 | 2026-04-25 | 2026-04-27 | 2 天待合并，UX 改进，阻塞低 |

---

## 附录：关键链接汇总

| 类别 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/agentscope-ai/CoPaw |
| Issues 列表 | https://github.com/agentscope-ai/QwenPaw/issues |
| PR 列表 | https://github.com/agentscope-ai/QwenPaw/pulls |
| 今日最高优先级开放 Issue #3854 | https://github.com/agentscope-ai/QwenPaw/issues/3854 |
| 品牌定位待回应 Issue #3430 | https://github.com/agentscope-ai/QwenPaw/issues/3430 |

---

*日报生成时间：2026-04-28 | 数据来源：GitHub API 与公开仓库活动*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-28

## 1. 今日速览

ZeroClaw 昨日（2026-04-27）保持**高强度开发节奏**，24小时内 Issues 更新 46 条（39 活跃/新开，7 关闭）、PR 更新 50 条（38 待合并，12 已合并/关闭），无新版本发布。社区聚焦于**安装体验修复**（install.sh 缺失仪表盘）、**Provider 兼容性**（Anthropic/Kimi/DeepSeek 温度参数与推理内容格式）、**Nextcloud Talk 渠道修复**以及**v0.7.4 里程碑冲刺**。项目整体健康度良好，但存在多个 S1 级阻塞性 Bug 待解，PR 合并管道压力较大（38 个待合并 PR）。

---

## 2. 版本发布

**无新版本发布**

v0.7.4 里程碑仍在推进中（[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)），原计划 v0.7.2 因紧急 v0.7.3 发布（标签损坏问题）而重新编号。当前 Skills 模块仍有未完成的 deidentify pr-review-session 等任务待合并。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（12 条中的代表性进展）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154) | singlerider | **修复 install.sh 缺失 Web 仪表盘提取** — `install_prebuilt()` 现在从 release tarball 解压 `web/dist/` 到 `~/.local/share/zeroclaw/web/dist` | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) |
| [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | singlerider | **Gateway 成本与 Token 使用记录修复** — WebSocket done frame 携带 token usage，解决 `/api/cost` 返回零的问题 | [#5118](https://github.com/zeroclaw-labs/zeroclaw/issues/5118), [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) |
| [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) | singlerider | **DeepSeek V4 推理内容捕获** — streaming 响应中捕获 `reasoning_content`，避免 thinking-mode 下 follow-up 请求 400 错误 | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) 等 |
| [#6080](https://github.com/zeroclaw-labs/zeroclaw/pull/6080) | Audacity88 | **Webhook 端点启用 Tool 支持** — `/webhook` 现在使用完整的 agent/tool 执行循环，MCP tools 可通过 webhook 执行 | [#4893](https://github.com/zeroclaw-labs/zeroclaw/issues/4893) |
| [#6155](https://github.com/zeroclaw-labs/zeroclaw/pull/6155) | singlerider | **停止自动设置 fallback provider** — 移除 `ensure_fallback_provider()` 中静默写入 `providers.fallback = Some("default")` 的逻辑，避免配置污染 | — |
| [#6162](https://github.com/zeroclaw-labs/zeroclaw/pull/6162) | singlerider | **API 助手防御性编程** — 所有 array-returning helper 增加 `Array.isArray` 守卫，防止畸形响应导致静默失败 | — |
| [#6082](https://github.com/zeroclaw-labs/zeroclaw/pull/6082) | Audacity88 | **Memory 上下文闭合标签修复** — cron scheduler 和 daemon heartbeat 注入点补充 `[/Memory context]`，避免模型混淆上下文边界 | — |
| [#5983](https://github.com/zeroclaw-labs/zeroclaw/pull/5983) | xydigit-sj | **Dockerfile.debian 复制 web/dist** — Debian 变体镜像现在正确包含 Web 仪表盘 | — |
| [#5985](https://github.com/zeroclaw-labs/zeroclaw/pull/5985) | xydigit-sj | **SQLite FTS UPDATE 触发器** — `sessions_fts` 全文搜索索引新增 UPDATE 触发器，修复增量流式持久化后的索引陈旧问题 | [#5705](https://github.com/zeroclaw-labs/zeroclaw/issues/5705) |
| [#6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) | justjuangui | **清理死代码** — 删除 566 行未编译的孤儿文件 `tracker.rs` | — |
| [#6171](https://github.com/zeroclaw-labs/zeroclaw/pull/6171) | JordanTheJet | **xtask mdbook 自引用修复** — 解决 `mdbook` 二进制名与 xtask 冲突导致的递归自启动问题 | — |
| [#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170) | JordanTheJet | **i18n 文档同步** — 法/日/西翻译同步，新增简体中文 (zh-CN) | — |

**整体推进评估**：安装体验、成本可观测性、Provider 兼容性三大痛点取得实质性进展，v0.7.4 发布条件逐步成熟。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|:---|
| 1 | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) **fresh install default_model 错误** | 14 | **新用户 onboarding 阻断** — LXC 容器全新安装后 `zeroclaw agent` 直接崩溃，Ollama 远程配置场景下的默认模型解析失败 | 🔴 S1 开放 |
| 2 | [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) **v0.7.4 milestone tracking** | 6 | 社区对版本发布的进度透明需求，Skills 模块 deidentify 等任务待完成 | 🟡 开放 |
| 3 | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) **Kimi-code provider streaming 400 错误** | 6 | **国产模型兼容性** — `reasoning_content` 缺失导致工具调用流中断，与 DeepSeek 问题同源 | 🔴 S1 有 PR #6107 修复中 |
| 4 | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) **schema v3 批量迁移** | 6 | **配置稳定性** — 要求所有破坏性字段变更一次性协调迁移，拒绝部分合并 | 🟡 in-progress |
| 5 | [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) **重复 assistant messages** | 6 | 模型返回 narration + tool_calls 时的消息去重，已关闭 | ✅ 已关闭 |
| 6 | [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) **E2EE 恢复不下载 room keys** | 5 | **加密通道可靠性** — Matrix 加密 DM 在 store reset 后完全失效 | ✅ 已关闭 |

**诉求分析**：新用户留存（#6123）、国产模型支持（#5600）、配置升级安全（#5947）构成社区三大焦虑源。14 评论的 #6123 尤为突出，反映远程 Ollama 部署场景（LXC/Proxmox  homelab 用户）的文档与默认配置缺口。

---

## 5. Bug 与稳定性

### 按严重程度排列的活跃 Bug

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| **S1 - workflow blocked** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | fresh install `default_model` 崩溃 | 无明确 PR | 🔴 待修复 |
| **S1 - workflow blocked** | [#6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) | `config.toml` YOLO/本地测试示例与当前配置键不匹配 | 无 | 🔴 待修复 |
| **S1 - workflow blocked** | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | `zeroclaw self-test` 硬编码 127.0.0.1 忽略用户配置的 `0.0.0.0` | 无 | 🔴 待修复 |
| **S1** (原 S2, 可能升级) | [#6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147) | Anthropic `temperature: f64` 格式可能阻塞 opus-4-7 | 无 | 🟡 待验证 |
| **S2 - degraded** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi-code streaming tool calls 400 错误 | [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) | 🟢 有修复 PR |
| **S2 - degraded** | [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) | Dashboard Channels tab 崩溃 + Overview 渲染错误 (v0.6.8) | 无 | 🟡 in-progress |
| **S2 - degraded** | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) | `install.sh` 不提取 web dashboard | [#6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154) | 🟢 **已修复** |
| **S2 - degraded** | [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) | `/api/cost` 为零，无 usage 文件写入 | [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) | 🟢 有修复 PR |
| **S0 - data loss/security risk** | [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | Firefox 输入时 CPU 飙升（多核） | 无 | 🔴 待调查 |

**回归风险**：[#6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147) 与已关闭的 [#6146](https://github.com/zeroclaw-labs/zeroclaw/issues/6146) 是同一问题的重复，说明 Bedrock 修复 (#6095) 后，原生 Anthropic provider 的同类风险尚未完全排除。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) **"prefer lighter ZeroClaw"** — 用 Skills/MCP 替代专用工具代码（gws-cli, jira, github） | 架构重构 | ⭐⭐⭐⭐⭐ **高** | 与项目 MCP 优先战略一致，社区强烈认同 |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) **hybrid skills + WASM tools 插件** | 插件系统 | ⭐⭐⭐⭐⭐ **高** | 官方路线图明确，markdown-only skills 之后的自然延伸 |
| [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) **WebUI 手动触发 Cron** | 运维体验 | ⭐⭐⭐⭐⭐ **高** | PR 已开，功能完整，即将合并 |
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) **ACP protocol v1 实现** | 协议兼容 | ⭐⭐⭐⭐☆ **中高** | XL 级高风险 PR，Nori 外部消费者依赖 |
| [#6130](https://github.com/zeroclaw-labs/zeroclaw/pull/6130) / [#6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166) **WeChat iLink Bot 渠道恢复** | 渠道扩展 | ⭐⭐⭐⭐☆ **中高** | 从 bulk revert 恢复，两个竞争 PR 需协调 |
| [#6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150) **Telegram/Discord 快速 `/clear` 内存命令** | 渠道体验 | ⭐⭐⭐☆☆ **中** | good first issue，实现成本低 |
| [#6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145) **从 Memory 恢复聊天会话** | 数据恢复 | ⭐⭐⭐☆☆ **中** | 用户体验优化，技术可行性待评估 |
| [#6070](https://github.com/zeroclaw-labs/zeroclaw/issues/6070) **默认模型标注免费/付费** | onboarding | ⭐⭐⭐☆☆ **中** | OpenRouter `free` 标签缺失问题，影响成本敏感用户 |

**战略信号**：社区正推动 ZeroClaw 从"内置大量专用集成"向"轻量核心 + Skills/MCP/WASM 插件生态"转型，[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) 是这一方向的标志性诉求。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **Homelab/LXC 新用户** | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | "跟着文档走，第一步就崩溃" — 远程 Ollama 配置的默认模型解析假设与本地单机构建不同 |
| **成本敏感用户** | [#6070](https://github.com/zeroclaw-labs/zeroclaw/issues/6070) | "选模型时不知道哪个免费哪个烧钱" — OpenRouter 集成缺少 `free` 标签过滤 |
| **Docker/Debian 用户** | [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096), [#5983](https://github.com/zeroclaw-labs/zeroclaw/pull/5983) | "装完没有仪表盘" — 安装脚本和 Debian Dockerfile 的 web assets 遗漏 |
| **Matrix 加密用户** | [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) | "store reset 后加密房间全黑" — E2EE 恢复流程不完整 |
| **Nextcloud Talk 用户** | [#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156), [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | "5秒超时杀死本地慢模型" + "错误的 bot API 端点" — 渠道实现粗糙 |
| **Firefox 用户** | [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | "打字时 CPU 爆炸" — 前端输入处理性能问题 |

### 满意点

- 成本可观测性修复（[#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159)）被积极期待
- MCP/Webhook 工具支持扩展（[#6080](https://github.com/zeroclaw-labs/zeroclaw/pull/6080)）受自动化用户欢迎
- 文档国际化（[#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170)）降低中文社区门槛

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) **153 commits bulk revert 恢复审计** | 30+ 天 | **高** — 大量已审代码丢失，重复劳动 | 制定分批恢复计划，与 #6130 WeChat 恢复协调 |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) **schema v3 批量迁移** | 7 天 | **高** — 合并阻塞器 | 明确 checklist 完成时间表，协调相关 PR 合并窗口 |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) **cancel_tokens 内存泄漏** | 10 天 | **高** — 长期运行实例 OOM 风险 | 评估 #6167 ACP PR 是否涉及同类 session 生命周期问题 |
| [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) **skill prompt 安全审计扩展** | 2 天 | **中高** — 被 #5972 阻塞 | #5972 合并后立即激活 |
| [#6130](https://github.com/zeroclaw-labs/zeroclaw/pull/6130) vs [#6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166) **WeChat 渠道竞争 PR** | 1 天 | **中** — 重复工作 | 维护者需裁定合并哪一个，或协调合作 |

---

*日报生成时间：2026-04-28 | 数据来源：ZeroClaw GitHub 仓库公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*