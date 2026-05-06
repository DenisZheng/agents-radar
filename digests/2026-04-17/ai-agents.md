# OpenClaw 生态日报 2026-04-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-17 00:15 UTC

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

# OpenClaw 项目动态日报 | 2026-04-17

---

## 1. 今日速览

OpenClaw 社区在过去 24 小时展现出极高活跃度：Issues 与 PR 各更新 500 条，形成 1:1 的活跃比例，说明项目处于**密集迭代期**。v2026.4.15 正式版与 beta.2 同日发布，核心围绕 Anthropic Claude Opus 4.7 升级与 Google Gemini TTS 新增能力。与此同时，onboarding 流程的 `Cannot read properties of undefined (reading 'trim')` 崩溃成为今日最集中的稳定性火点，已有多条相关 Issue 和修复 PR 在 24 小时内快速关闭，显示维护团队响应迅速。Windows 原生支持、Memory v2、SiliconFlow 接入等中长期功能也在并行推进。

---

## 2. 版本发布

### v2026.4.15 & v2026.4.15-beta.2
- **发布链接**：https://github.com/openclaw/openclaw/releases/tag/v2026.4.15

| 变更项 | 说明 | 迁移注意 |
|:---|:---|:---|
| **Anthropic/models** | 默认选型、`opus` 别名、Claude CLI 默认值及 bundled image understanding 全部指向 **Claude Opus 4.7** | 若之前锁定 `opus` 别名，模型行为可能因 4.7 版本升级而略有变化；建议验证 vision 任务输出一致性 |
| **Google/TTS** | bundled `google` 插件新增 **Gemini text-to-speech** 支持，含 provider 注册、音色选择、WAV 输出 | 无需额外安装插件，但需确保已配置 Google API key；TTS 请求将走 Gemini 新端点 |

> **破坏性变更**：无明确 breaking change 声明，但 Claude Opus 4.7 的 adaptive thinking 映射（见 PR #67814）可能在后续补丁中微调。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#67821** `fix(onboard): preserve existing gateway auth token during re-onboard` | BKF-Gitty | 修复 `openclaw onboard --non-interactive` 无条件刷新 gateway auth token 导致所有活跃会话被踢出的问题 | https://github.com/openclaw/openclaw/pull/67821 |
| **#67814** `feat(agents): add adaptive thinking support for Claude Opus 4.7` | Patrick-Erichsen | 为 Opus 4.7 引入 adaptive thinking 支持，统一 `anthropic-transport-stream` 与 `anthropic-vertex-stream` 的映射逻辑 | https://github.com/openclaw/openclaw/pull/67814 |
| **#67754** `feat: add EMBEDDING_MODEL env for custom voyage models` | kilo5-eng | 允许通过环境变量自定义 Voyage embedding 模型 | https://github.com/openclaw/openclaw/pull/67754 |
| **#39361** `[codex] BlueBubbles: force private API for Tahoe text sends` | liulingfei-1 | BlueBubbles 通道在 Private API 可用时强制走该路径，提升 iMessage 可靠性 | https://github.com/openclaw/openclaw/pull/39361 |
| **#42382** `fix(bluebubbles): handle null text in debounce flush` | ahua2020qq | 修复 attachment-only 消息中 `text: null` 导致的 `.trim()` 崩溃 | https://github.com/openclaw/openclaw/pull/42382 |
| **#43961** `fix(gateway): SIGKILL stale process when graceful shutdown times out` | happydog-intj | gateway 重启时若 10s SIGTERM 未结束旧进程，则强制 SIGKILL，避免端口冲突 | https://github.com/openclaw/openclaw/pull/43961 |
| **#66108/66120** BlueBubbles Node 24+ 兼容与附件事件修复 | coletebou | 解决 Node 24+ 下 undici 版本不匹配导致的附件下载失败；接受 `updated-message` 事件以补全附件 | https://github.com/openclaw/openclaw/pull/66108<br>https://github.com/openclaw/openclaw/pull/66120 |

**整体判断**：今日合并 PR 覆盖 **onboarding 稳定性、核心模型升级、通道可靠性、gateway 生命周期管理** 四大领域，项目在技术债务清理与版本能力扩展上同步前进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 状态 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| **#3460** Internationalization (i18n) & Localization Support | **120** | CLOSED | 社区对多语言支持热情高涨，但维护团队明确声明**当前无足够人力支持多语言**，已关闭集中讨论 | https://github.com/openclaw/openclaw/issues/3460 |
| **#75** Linux/Windows Clawdbot Apps | **82** | OPEN | 跨平台桌面应用缺口（已有 macOS/iOS/Android），**Windows/Linux 用户呼声强烈**，👍 68 | https://github.com/openclaw/openclaw/issues/75 |
| **#26322** OAuth token refresh race condition | **21** | OPEN | 多 Agent 共享 OAuth profile 时的并发刷新竞争，导致 `refresh_token_reused` 误触发 failover | https://github.com/openclaw/openclaw/issues/26322 |
| **#53959** openai-codex/gpt-5.3-codex 工具执行回归 | **19** | OPEN | 2026.3.23-2 升级后 codex 模型完全不调用工具（exec/MCP/搜索），影响核心 Agent 能力 | https://github.com/openclaw/openclaw/issues/53959 |
| **#67291 / #67353 / #67684 / #67076 / #67347** onboarding `trim` 崩溃 | **15-14-7-6-8** | 多数 CLOSED | 新用户安装/升级后 onboarding 流程崩溃，**直接影响首用户体验** | https://github.com/openclaw/openclaw/issues/67291<br>https://github.com/openclaw/openclaw/issues/67353 等 |

**诉求分析**：
- **平台覆盖**：Issue #75 的高赞说明 Windows/Linux 桌面端是社区最大未满足需求，PR #66898（Windows Native Wrapper）正对此响应。
- **稳定性焦虑**：onboarding 崩溃在 24 小时内涌现 5+ 条重复 Issue，反映新版本推送后的**首用户漏斗风险**。
- **企业/多 Agent 场景**：OAuth race condition (#26322) 和工具执行失效 (#53959) 指向**生产级部署的可靠性瓶颈**。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 现象 | 状态 | 修复 PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | **#67291 / #67353 / #67684** | onboarding `Cannot read properties of undefined (reading 'trim')` 崩溃，阻断新用户首次配置 | **多数已关闭** | PR #67821（auth token 修复）、PR #67130（bundled setup plugin meta 修复） |
| 🔴 **P0** | **#53959** | openai-codex/gpt-5.3-codex 升级后**完全不执行任何工具**，核心 Agent 能力瘫痪 | OPEN | 暂无明确 PR |
| 🟠 **P1** | **#66633** | 2026.4.12→2026.4.14 升级后 openai-codex 遭遇 Cloudflare 403 挑战页，**所有请求失败** | OPEN | 暂无 |
| 🟠 **P1** | **#67035** | Windows 2026.4.14 聊天 UI 严重回归：输入被吞、流式回复不可见、打字指示器闪烁 | OPEN | 暂无 |
| 🟠 **P1** | **#26322** | OAuth token refresh race condition 导致误 failover | OPEN | 暂无 |
| 🟡 **P2** | **#66207** | Control UI 聊天消息发送后闪烁消失 1-2 秒再出现 | CLOSED | 已修复 |
| 🟡 **P2** | **#67261** | Venice 模型响应缺少 `id/status` 导致崩溃 `Cannot read properties of undefined (reading 'id')` | CLOSED | 已修复 |
| 🟡 **P2** | **#51085** | STT 麦克风按钮被 Permissions-Policy header 静默拦截 | OPEN | 暂无 |
| 🟡 **P2** | **#67288** | amazon-bedrock-mantle 每次请求都运行 IAM discovery，缺少 `config.discovery.enabled` 开关 | OPEN | 暂无 |

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Memory v2（语义记忆+遗忘曲线）** | PR #67836（Memory v2 foundation — sidecar, ingest, rerank） | ⭐⭐⭐⭐⭐ 高 | 已有 XL 规模 PR，全部默认关闭，说明正在**谨慎落地基础设施** |
| **Windows 原生客户端** | PR #66898（Windows Native Wrapper & Hardened Installer）+ Issue #75 | ⭐⭐⭐⭐⭐ 高 | 社区呼声最高（82 评论/68 👍），PR 规模 XL 且正在推进 |
| **SiliconFlow 接入** | PR #63836（add SiliconFlow model provider） | ⭐⭐⭐⭐☆ 中高 | 国产模型生态需求，PR 已开多日，持续更新 |
| **Agent-to-Agent 消息总线** | Issue #52290 | ⭐⭐⭐☆☆ 中等 | 有社区插件原型，但官方尚未回应 |
| **认知记忆层（Cognitive Memory Layer）** | Issue #52532 | ⭐⭐⭐☆☆ 中等 | 概念宏大，与 Memory v2 部分重叠，可能部分吸收 |
| **动态模型发现（OpenRouter+）** | Issue #10687 | ⭐⭐⭐⭐☆ 中高 | GitHub Copilot 自动发现 PR #58675 已开，模式可复用 |
| **Gemini Context Caching** | Issue #51372 | ⭐⭐⭐⭐☆ 中高 | 已有关闭 Issue，Anthropic 已有 `cacheRetention`，Google 侧大概率跟进 |
| **Typecast TTS（情感预设+亚洲语言）** | PR #10356 | ⭐⭐⭐☆☆ 中等 | 长期 OPEN， niche 需求 |

---

## 7. 用户反馈摘要

### 真实痛点
- **"安装即崩溃"**：多位用户在执行 `curl -fsSL https://openclaw.ai/install.sh | bash` 后，onboarding 阶段即遭遇 `trim` 崩溃，**首用户体验受损严重**（#67291, #67347, #67684）。
- **"升级后一切坏了"**：2026.4.14 被多次点名，Windows UI 回归、Cloudflare 403、context engine 错误集中爆发，**版本质量信任度出现波动**（#66633, #66601, #67035）。
- **"工具不执行"**：codex 模型在 2026.3.23-2 后"只说不做"，对依赖 Agent 自动化的用户是**功能性阻断**（#53959）。
- **"Windows 二等公民"**：Linux/Windows 桌面应用长期缺失，用户被迫使用 CLI 或 web UI（#75）。

### 满意/正面反馈
- **快速响应**：onboarding 崩溃 Issue 多在 24 小时内被关闭，用户认可维护团队修复速度。
- **新模型及时跟进**：Claude Opus 4.7 和 Gemini TTS 的快速集成，让前沿模型用户感到"跟得上节奏"。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#75** Linux/Windows Clawdbot Apps | 2026-01-01 | 2026-04-16 | 高赞长期 OPEN，平台公平性议题 | https://github.com/openclaw/openclaw/issues/75 |
| **#10687** 动态模型发现 | 2026-02-06 | 2026-04-16 | 模型生态快速迭代，静态目录策略日益吃力 | https://github.com/openclaw/openclaw/issues/10687 |
| **#26322** OAuth token refresh race condition | 2026-02-25 | 2026-04-16 | 生产多 Agent 共享 auth 的核心可靠性缺陷 | https://github.com/openclaw/openclaw/issues/26322 |
| **#53959** codex 工具执行完全失效 | 2026-03-24 | 2026-04-16 | 核心模型能力回归，影响付费/生产用户 | https://github.com/openclaw/openclaw/issues/53959 |
| **#51085** STT 麦克风被 Permissions-Policy 拦截 | 2026-03-20 | 2026-04-16 | 功能已开发但被安全策略静默禁用，"半成品"体验 | https://github.com/openclaw/openclaw/issues/51085 |
| **#51873** Context caching 几乎不工作 | 2026-03-21 | 2026-04-16 | 成本优化核心能力长期失效 | https://github.com/openclaw/openclaw/issues/51873 |

---

**日报结语**：OpenClaw 在 2026-04-17 处于"高速发布+高频救火"的双轨状态。v2026.4.15 带来了 Anthropic 与 Google 的头部能力升级，但 2026.4.14 引入的 onboarding/UI/网络层回归需要维护团队在接下来的 48 小时内继续收敛。Windows 原生支持与 Memory v2 是中长期最值得关注的结构性进展。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-04-17

---

## 1. 生态全景

个人 AI 助手开源生态在 2026 年 Q2 呈现**"头部领跑、腰部混战、长尾分化"**格局。OpenClaw 以单日 500 Issues + 500 PR 的吞吐量稳居绝对核心，定义着品类迭代节奏；NanoBot、Hermes Agent、IronClaw、ZeroClaw 等第二梯队围绕企业通道、订阅商业化、微内核架构展开差异化竞争；Moltis、CoPaw/QwenPaw 以高修复闭环效率和技术栈独特性（Rust、Python/AgentScope）快速崛起；而 LobsterAI、PicoClaw、NanoClaw 等体量较小，或处于内部修稳期，或依赖少数核心贡献者驱动。整体技术焦点已从"模型接入"转向**多通道编排、记忆系统升级、工具网关商业化、以及架构层面的安全与可观测性**。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Release | 健康度评估 |
|:---|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.15 + beta.2 | 🔥 极高活跃，密集迭代但伴随 onboarding/UI 回归风险 |
| **NanoBot** | 13 (9 活跃/4 关闭) | 56 (31 已合并) | 无 | ⚡ 高活跃，合并率高，25 条待审需关注带宽 |
| **Hermes Agent** | 50 (40 活跃/10 关闭) | 50 (16 已合并) | **v0.10.0** | ⚡ 高活跃，发布节奏稳健，Matrix/Discord 稳定性待收敛 |
| **IronClaw** | 50 (45 活跃/5 关闭) | 50 (9 已合并) | 无 | ⚡ 高活跃，staging 冲刺期，41 条 PR 积压较高 |
| **CoPaw/QwenPaw** | 50 | 50 | **v1.1.2-beta.2** | ⚡ 高活跃，功能与稳定性并行，品牌迁移有摩擦 |
| **ZeroClaw** | 40 | 50 | 无 | ⚡ 高活跃，v0.7.0 发布前夜，CI/CD 阻塞需紧急处理 |
| **Moltis** | 10 (7 关闭) | 18 (13 已合并) | **20260416.02** | ✅ 高能量输出，当日闭环率 70%+，仅 1 个回归待修 |
| **PicoClaw** | 12 (10 活跃/2 关闭) | 27 (9 已合并) | Nightly | ⚠️ 中高活跃，WhatsApp 通道出现 2 个高严重静默失败 |
| **NanoClaw** | 3 | 17 (6 已合并) | 无 | ⚠️ 中等活跃，待审队列膨胀，实质性合并偏少 |
| **NullClaw** | 12 (11 关闭) | 11 (8 已合并) | 无 | ✅ 维护效率极高，Zig 0.16 迁移完成，缺陷滞留极低 |
| **LobsterAI** | 0 | 8 (6 已合并) | 无 | ⚠️ 中等活跃，外部贡献响应慢（#438 stale） |
| **TinyClaw** | 0 | 0 | 无 | 😴 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 😴 无活动 |

---

## 3. OpenClaw 在生态中的定位

### 优势
- **规模碾压**：单日 500 Issues + 500 PR，社区体量是第二名 10 倍以上，拥有最完整的通道矩阵（BlueBubbles、Slack、Discord、Teams、钉钉、飞书等）和最快的头部模型跟进速度（Claude Opus 4.7、Gemini TTS 当日集成）。
- **生态位中心**：LobsterAI 直接内置 OpenClaw 升级（#1702 `release/2026.04.14`），ZeroClaw 被明确描述为"从 OpenClaw 迁移"的替代方案，说明 OpenClaw 已成为品类**事实标准与迁移参照系**。

### 技术路线差异
- **全栈一体化** vs. **模块化/微内核**：OpenClaw 坚持单仓库、全功能集成（bundled plugins、gateway、桌面端）；而 ZeroClaw 正激进转向微内核（#5574），Moltis 以 Rust crate 拆分推进，NanoClaw 则走"技能即插件"的轻量扩展路线。
- **闭源商业化配套**：OpenClaw 的 `openclaw onboard`、gateway auth、context caching 等能力暗示其背后有官方云服务支撑；Hermes Agent 则通过 **Nous Portal 订阅制工具网关**（v0.10.0）走更明确的 2C 商业化路径。

### 社区规模对比
| 维度 | OpenClaw | 最接近竞品 |
|:---|:---|:---|
| 单日 Issues | 500 | ~50 (Hermes/IronClaw/CoPaw/ZeroClaw) |
| 单日 PRs | 500 | ~50 (NanoBot 56，但体量差距近 9x) |
| 通道覆盖 | 10+ 原生 | 3-5 个为主 |
| 模型跟进延迟 | 0-1 天 | 3-14 天 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|:---|:---|:---|
| **Windows 原生客户端/体验** | OpenClaw (#75, 82 评论/68👍), NullClaw (#5562), Moltis (#744), NanoBot | Windows 用户长期"二等公民"，桌面端缺失或 shell 闪窗、构建失败 |
| **Matrix 企业/隐私通道** | Hermes Agent (#73, #8174, #11238), ZeroClaw (#4657), NanoClaw (#1624), IronClaw (#2019) | E2EE、自动接受邀请、密钥备份是企业部署硬性门槛 |
| **记忆系统升级** | OpenClaw (Memory v2 PR #67836), NanoBot (#3227, #1256 mem0), CoPaw (#3500 可扩展记忆), Moltis | 从 `history.jsonl` 文本注入转向结构化、分层、检索增强的长期记忆 |
| **工具网关 / MCP 生态** | Hermes Agent (v0.10.0 订阅网关), OpenClaw (MCP + codex 工具回归 #53959), Moltis (#743 MCP schema), CoPaw (#3460 MCP 参数), PicoClaw (#2546 MCP OAuth) | 工具发现、schema 兼容性、零配置调用、OAuth 授权成为核心战场 |
| **循环检测与熔断** | NanoBot (#3220 工具循环, #3215 SMTP 自回复), Hermes Agent (#11171 Google 无限重试), IronClaw (#2541 空转) | Agent 失控循环（无限工具调用、自回复、空转）是生产级可靠性公敌 |
| **语音/多模态输入** | CoPaw (#3449 SIP 语音, #3509 多模态), Hermes Agent (#7641 原生多模态), OpenClaw (Gemini TTS) | 从"文本聊天"向"全渠道、原生多模态"演进 |
| **onboarding / 认证体验** | OpenClaw (trim 崩溃 #67291), ZeroClaw (Copilot #4851), PicoClaw (--no-browser #2533), Hermes Agent (Gemini OAuth #10779) | 新用户首配流程、headless 环境、OAuth PKCE 是共同痛点 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全功能个人 AI 助手，最强通道与模型覆盖 | 个人极客、小型团队、多平台重度用户 | TypeScript/Node 单仓库，bundled plugin 体系，官方云服务深度集成 |
| **NanoBot** | 企业 IM 通道 + 开发者友好 API | 企业开发者、需要 Slack/Teams/Discord 集成的团队 | Python，OpenAI 兼容 API，强调可配置性与调试基础设施 |
| **Hermes Agent** | 订阅制工具网关 + 多平台消息机器人 | Nous Portal 订阅者、追求零配置工具调用的用户 | Python/TypeScript 混合，商业化工具层与身份系统打通 |
| **IronClaw** | 企业级 routine/扩展编排 + 安全网关 | 大型企业、需要 Google/Slack 扩展集成的组织 | 重度 staging 驱动，Engine v2 安全架构，WASM 扩展运行时 |
| **Moltis** | 开发者优先的 Rust Agent 框架，内置代码索引 | Rust 开发者、追求性能与自托管的技术用户 | Rust 全栈，crate 模块化，QMD/Code Index 内置 RAG，Nix 支持 |
| **CoPaw/QwenPaw** | 中文友好 + 多通道 + ACP 协议生态 | 中国开发者、AgentScope 生态用户 | Python/AgentScope，Qwen 模型深度优化，向 IDE 集成（ACP）延伸 |
| **ZeroClaw** | 微内核架构转型的下一代 OpenClaw 替代 | 从 OpenClaw 迁移、重视架构可持续性的用户 | Rust，微内核拆分（v0.7.0→v1.0.0），Tauri 桌面端 |
| **NullClaw** | 极简、安全、Zig 原生 | Zig 爱好者、追求极小依赖的攻击面敏感用户 | Zig 0.16，Docker/firejail/bwrap 沙箱原生，SysVinit 支持 |
| **PicoClaw** | 轻量 WhatsApp 优先 + 本地模型友好 | WhatsApp 重度用户、LM Studio 本地模型玩家 | 更轻量，WhatsApp native 通道，本地部署导向 |
| **LobsterAI** | 网易有道内部产品化封装 | 有道生态用户、企业微信场景 | 基于 OpenClaw 的二次封装，企业微信、MCP 页面修复为主 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（高活跃 + 功能扩张）
| 项目 | 特征 |
|:---|:---|
| **OpenClaw** | 头部模型/能力当日跟进，但伴随版本质量波动（onboarding/UI 回归） |
| **Hermes Agent** | v0.10.0 商业化里程碑，Gemini OAuth 与 Discord 语音修复密集落地 |
| **CoPaw/QwenPaw** | ACP 服务器、Signal/WhatsApp/SIP 语音、可扩展记忆三线并进 |
| **IronClaw** | Staging 冲刺，routine/扩展/WASM 通道高频率迭代，但 PR 积压严重 |
| **ZeroClaw** | v0.7.0 发布前夜，微内核拆分引发 CI/CD 重构阵痛 |

### 质量巩固阶段（高修复闭环 + 架构升级）
| 项目 | 特征 |
|:---|:---|
| **Moltis** | 单日 7 个 Bug 中 6 个当日闭环，Code Index 四段式 PR 栈稳步推进 |
| **NullClaw** | Zig 0.16 迁移完成，12 个 Issues 关闭 11 个，沙箱/历史记录/路由全面修稳 |
| **NanoBot** | 31 个 PR 合并，MSTeams/SSE 流式 API 落地，但需消化 25 条待审 |

### 边缘/停滞风险（活跃度低或响应慢）
| 项目 | 特征 |
|:---|:---|
| **PicoClaw** | WhatsApp 高严重 Bug 有本地补丁但未提交 PR，2 个月 LM Studio 请求无官方回应 |
| **NanoClaw** | 当日仅 1 个安全修复实质合并，大量架构 PR 悬于评审 |
| **LobsterAI** | 0 Issue 活动，外部 Provider PR #438 stale 近一个月 |
| **TinyClaw / ZeptoClaw** | 完全无活动 |

---

## 7. 值得关注的趋势信号

### 信号 1：工具调用从"能跑"进入"可靠调用"深水区
- **数据**：OpenClaw #53959（codex 完全不执行工具）、IronClaw #2491（Engine v2 绕过 secret 扫描）、Moltis #747/#743（MCP schema 清理）、NanoBot #3220（空 tool_calls 无限循环）。
- **趋势**：工具数量膨胀后，schema 兼容性、调用意愿、循环检测、安全扫描成为新的工程高地。开发者应优先投资**工具注册表的版本治理**和**调用链的可观测性**。

### 信号 2：记忆系统正在经历第一代架构替换
- **数据**：OpenClaw Memory v2（sidecar + ingest + rerank）、NanoBot #3227（`history.jsonl` 细节保留吃力）、CoPaw #3500（mem0/Zep/LangMem 插件化）、NanoClaw #1256（mem0 图记忆）。
- **趋势**：基于文本截断/压缩的朴素记忆方案在大项目场景中触及天花板，**向量检索 + 图关系 + 遗忘曲线**的结构化记忆将成为下一代标配。

### 信号 3：商业化路径分化——订阅工具网关 vs. 开放协议
- **数据**：Hermes Agent v0.10.0 将搜索/图像/TTS 打包为 Nous Portal 订阅权益；CoPaw #3487 推进 ACP 服务器协议开放；OpenClaw 维持官方云服务深度集成。
- **趋势**：个人 AI 助手赛道出现 **"苹果式封闭生态"（Hermes）、"安卓式开放协议"（CoPaw/ACP）、"SaaS 一体化"（OpenClaw）** 三种商业模式并行。开发者需根据用户付费意愿与生态锁定容忍度选择站队。

### 信号 4：微内核/模块化架构从"理念"变为"生存策略"
- **数据**：ZeroClaw #5574 微内核转型（已合并 #5559），Moltis 以 crate 拆分推进 Code Index，NanoClaw 的"7 层能力扩张"（事件总线、执行器池、信任引擎）。
- **趋势**：功能膨胀后的单仓库架构面临编译时间、测试覆盖、贡献者 onboarding 三重压力。**运行时插件化 + 编译时 crate 隔离** 将成为中大型 Agent 项目的标准演进路径。

### 信号 5：企业通道的"隐私优先"与"国产化"成为硬需求
- **数据**：Matrix 在 Hermes（#73, 9👍）、ZeroClaw（#4657, 12 评论）、NanoClaw（#1624）同步推进；NapCat/QQ（ZeroClaw #2503）、企业微信（CoPaw #2757, NanoBot #2373 MiniMax）反复出现。
- **趋势**：欧美市场由 Matrix/E2EE 驱动隐私合规，中国市场由企业微信/QQ/钉钉驱动本地化部署。**区域化 IM 通道适配能力** 将是全球化 Agent 项目的必备能力矩阵。

---

*报告生成时间：2026-04-17 | 分析基于各项目 GitHub 公开动态数据*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-17

---

## 1. 今日速览

NanoBot 今日维持**极高开发活跃度**：24 小时内 Issues 更新 13 条（9 开/活跃，4 关闭），PR 更新高达 **56 条**（25 待审，31 已合并/关闭），社区贡献者与核心维护者均处于密集迭代状态。项目在无新版本发布的情况下，通过大量代码合并持续推进功能扩展（MSTeams 通道、SSE 流式 API、WebSocket 工具化）与稳定性修复（内存兼容性、工具注册缓存、跨通道会话持久化）。整体健康度良好，但待审 PR 积压 25 条，需关注审阅带宽。

---

## 2. 版本发布

**无今日新版本发布。**

---

## 3. 项目进展

今日共有 **31 条 PR 已合并/关闭**，以下为代表性进展：

| PR | 作者 | 核心贡献 |
|:---|:---|:---|
| [#3197](https://github.com/HKUDS/nanobot/pull/3197) | chengyongru | **Microsoft Teams 通道正式上线** — 支持 DM 文本收发、会话引用、@提及、文件附件与自适应卡片，补齐企业 IM 生态关键一环。 |
| [#3222](https://github.com/HKUDS/nanobot/pull/3222) | wanghesong2019 | **API 层 SSE 流式输出支持** — `/v1/chat/completions` 的 `stream=true` 正式可用，对接 OpenAI 兼容客户端体验大幅提升。 |
| [#3219](https://github.com/HKUDS/nanobot/pull/3219) | subalkum | **修复 Cron 任务会话隔离问题** — 定时任务消息现在写入目标用户的真实会话，支持后续追问与修正，解决长期存在的上下文断裂。 |
| [#3210](https://github.com/HKUDS/nanobot/pull/3210) | chengyongru | **工具定义缓存优化** — `ToolRegistry.get_definitions()` 在工具集不变时跳过重复排序，每轮 LLM 调用开销降低，利好 prompt cache 命中率。 |
| [#3177](https://github.com/HKUDS/nanobot/pull/3177) | chengyongru | **MyTool 运行时自检工具** — 代理可在运行中查询/设置自身状态（模型、迭代数、token 用量等），为调试与动态调参提供基础设施。 |
| [#3175](https://github.com/HKUDS/nanobot/pull/3175) | tycoi2005 | **动态 LLM Provider 支持** — 配置即可加载非内置 Provider，降低 fork 成本；同时修复 cron 测试套件的导入错误。 |
| [#3171](https://github.com/HKUDS/nanobot/pull/3171) | Lbin91 | **Discord 频道白名单过滤** — `allowChannels` 配置项落地，满足多频道场景下的精细化运营需求。 |

**整体判断**：今日合并内容覆盖**新通道、API 能力、性能优化、调试基础设施、测试修复**五大方向，项目在企业级部署与开发者体验上均有实质性迈进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 状态 | 评论 | 热点分析 |
|:---|:---|:---|:---|
| [#3190](https://github.com/HKUDS/nanobot/issues/3190) | **CLOSED** | 7 | **v0.1.5 → v0.1.5.post1 升级后崩溃**，用户怀疑 memory 不兼容。维护者快速响应并关闭，显示版本迁移文档与兼容性测试仍需加强。 |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | **CLOSED** | 6 | **LLM messages 参数非法错误高频出现**，与 token 压缩轮次相关。已关闭，但"频率挺高"的反馈提示错误处理与日志可读性仍有优化空间。 |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | OPEN | 5 | **用户系统性建议合集** — 涵盖状态可见性（status 显示 task 数）、超时配置、Provider fallback、多 custom provider 等。反映核心诉求：**降低"黑盒感"、提升可配置性**。 |

### 高价值新开 Issue

| Issue | 状态 | 👍 | 核心诉求 |
|:---|:---|:---|:---|
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) | OPEN | 1 | **长期/大型项目场景下记忆系统局限性** — 用户高度认可代码质量，但指出 `history.jsonl` + `MEMORY.md` 的整块文本注入模式在细节保留上吃力。这是**架构级反馈**，与 [#3212](https://github.com/HKUDS/nanobot/pull/3212)（Git 基于的 memory staleness 注解）方向相关，值得纳入路线图深度讨论。 |

---

## 5. Bug 与稳定性

按严重程度降序排列：

| 优先级 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-已修复** | [#3190](https://github.com/HKUDS/nanobot/issues/3190) | 小版本升级导致服务不可用（memory/schema 兼容性问题） | **已关闭**，需确认是否有 regression test |
| 🔴 **P0-有 PR** | [#3220](https://github.com/HKUDS/nanobot/issues/3220) / [#3225](https://github.com/HKUDS/nanobot/pull/3225) | **非合规 API Gateway 注入空 tool_calls 导致无限循环** — 架构级稳定性风险 | PR [#3225](https://github.com/HKUDS/nanobot/pull/3225) 待审 |
| 🟡 **P1-有 PR** | [#3213](https://github.com/HKUDS/nanobot/issues/3213) / [#3226](https://github.com/HKUDS/nanobot/pull/3226) | `GroqTranscriptionProvider` 完全忽略 `config.json` 中的 `apiBase`，仅读环境变量 | PR [#3226](https://github.com/HKUDS/nanobot/pull/3226) 待审（同时修复 OpenAI transcription 的 `api_base` 对称问题） |
| 🟡 **P1-待处理** | [#3215](https://github.com/HKUDS/nanobot/issues/3215) | **SMTP 自邮导致无限回复循环** — 自己发邮件给自己，代理会回复数千封 | **无 PR**，需紧急设计去重/循环检测机制 |
| 🟡 **P1-待处理** | [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Gemini provider "Multiple authentication credentials received" 错误 | **无 PR**，可能与 provider 层密钥传递逻辑有关 |
| 🟡 **P1-待处理** | [#2373](https://github.com/HKUDS/nanobot/issues/2373) | MiniMax API 返回 "invalid function arguments json string" | 长期未关闭，企业微信场景，评论 4 条 |
| 🟢 **P2-已关闭** | [#3143](https://github.com/HKUDS/nanobot/issues/3143) | messages 参数非法（token 压缩触发） | 已关闭 |

**稳定性信号**：今日出现两起**无限循环类 Bug**（#3220 工具调用循环、#3215 邮件自回复循环），建议维护者将"循环检测与熔断"纳入近期设计审查。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 相关 PR | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | LLM request timeout 可配置、Provider fallback、多 custom provider | [#3205](https://github.com/HKUDS/nanobot/pull/3205)（Responses API 熔断器）、[#3175](https://github.com/HKUDS/nanobot/pull/3175)（动态 provider） | **高** — 基础设施已动工 |
| [#3217](https://github.com/HKUDS/nanobot/issues/3217) | Discord 允许响应其他 bot 消息 | 无 | **中** — 单点配置改动，社区需求明确 |
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) | 长期项目记忆系统改进（结构化/分层/检索增强） | [#3212](https://github.com/HKUDS/nanobot/pull/3212)（Git-based staleness） | **中-高** — 架构级需求，PR 已探索方向 |
| [#3224](https://github.com/HKUDS/nanobot/pull/3224) | 追加式会话 transcript 日志（JSONL）与工具结果可控包含 | — | **高** — PR 已提交，审计与可观测性刚需 |
| [#3223](https://github.com/HKUDS/nanobot/pull/3223) | `spawn_status`、`spawn_cancel` 及 spawn 参数扩展 | — | **高** — 子代理管理能力是 nightly 重点 |
| [#3221](https://github.com/HKUDS/nanobot/pull/3221) | `nanobot auth` 命令（OAuth Device Flow）+ gateway provider 注册 | — | **高** — 官方云服务接入的前置基础设施 |
| [#3156](https://github.com/HKUDS/nanobot/pull/3156) | Heartbeat 两阶段模型覆盖（evalModelOverride / execModelOverride） | — | **高** — 成本优化与企业部署刚需 |

---

## 7. 用户反馈摘要

### 真实痛点
- **"黑盒感"强**：[#3107](https://github.com/HKUDS/nanobot/issues/3107) 用户直言 nanobot 当前状态不可见，status 不显示 task 数、retry 终止无提示。
- **升级兼容性惊吓**：[#3190](https://github.com/HKUDS/nanobot/issues/3190) 小版本升级即崩溃，用户对 memory 兼容性产生不信任。
- **配置与文档缺口**：[#3213](https://github.com/HKUDS/nanobot/issues/3213)、[#3185](https://github.com/HKUDS/nanobot/issues/3185) 反映自定义 endpoint（Groq、LM Studio）配置路径不一致或缺失。
- **记忆天花板**：[#3227](https://github.com/HKUDS/nanobot/issues/3227) 长期用户认可代码"整洁、轻巧、容易上手"，但明确指出现有记忆系统在大项目中"细节保留吃力"。

### 满意之处
- 代码质量与学习价值获得高度认可（[#3227](https://github.com/HKUDS/nanobot/issues/3227)："探索起来是一种享受"）。
- 社区响应速度快，[#3190](https://github.com/HKUDS/nanobot/issues/3190)、[#3143](https://github.com/HKUDS/nanobot/issues/3143) 均在 1-2 天内关闭。

---

## 8. 待处理积压

以下 Issue/PR 已长期活跃或具有架构重要性，建议维护者优先审阅：

| 类型 | 链接 | 创建时间 | 核心关注点 |
|:---|:---|:---|:---|
| Issue | [#2373](https://github.com/HKUDS/nanobot/issues/2373) | 2026-03-23 | MiniMax API 兼容性错误，企业微信场景，24 天内未关闭 |
| Issue | [#2220](https://github.com/HKUDS/nanobot/issues/2220) | 2026-03-18 | `ContextVar` 提案提升 async 安全性，29 天，技术债务类 |
| PR | [#2526](https://github.com/HKUDS/nanobot/pull/2526) | 2026-03-26 | `/stop` 取消任务时会话消息丢失修复，21 天待审，用户体验关键 |
| PR | [#2397](https://github.com/HKUDS/nanobot/pull/2397) | 2026-03-26 | Cron `name` 参数与 playbook 支持，24 天待审，工作流可读性提升 |

---

*日报基于 HKUDS/nanobot GitHub 公开数据生成，所有链接可直接访问。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-17

---

## 1. 今日速览

Hermes Agent 今日保持极高活跃度，24小时内 **50 条 Issues 更新**（40 活跃/新开，10 关闭）、**50 条 PR 更新**（34 待合并，16 已合并/关闭），并发布了 **v0.10.0 "Tool Gateway"** 重大版本。社区讨论集中在 Matrix 网关修复、新消息平台接入（Teams/Rocket Chat）、Discord 语音/Slash 命令稳定性，以及工具网关商业化扩展。项目整体健康度良好，发布节奏稳健，但 Matrix 迁移后的加密通信和邀请自动加入问题仍需持续关注。

---

## 2. 版本发布

### [v0.10.0 (v2026.4.16) — The Tool Gateway Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.16)

| 属性 | 内容 |
|:---|:---|
| 发布日期 | 2026-04-16 |
| 版本号 | v0.10.0 |
| 核心主题 | 工具网关商业化与零配置工具调用 |

**更新内容：**
- **付费 Nous Portal 订阅者** 现可直接通过既有订阅使用 **Web 搜索、图像生成、文本转语音（TTS）和浏览器自动化**，无需额外配置任何 API Key。
- 这是 Hermes Agent 从"开源 CLI 工具"向"订阅制 AI 助手平台"演进的关键里程碑，工具层与身份/计费系统深度打通。

**破坏性变更 & 迁移注意事项：**
- 未观察到明确的破坏性 API 变更；现有自托管用户不受影响。
- 使用 Nous Portal 订阅的用户需升级至 v0.10.0 以解锁工具网关；此前通过手动 API Key 配置的工具调用路径仍保留。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#11283** — fix(discord): strip RTP padding before DAVE/Opus decode | teknium1 (salvage of #11272 by malaiwah) | 修复 Discord 语音接收路径忽略 RTP padding 的问题，解决语音频道" deaf "或 STT 空结果的长期 bug。已 cherry-pick 并保留原作者署名。 | [PR #11283](https://github.com/NousResearch/hermes-agent/pull/11283) |
| **#10779** — feat(auth): add Google Gemini CLI OAuth PKCE provider integration | newarthur | 新增 `google-gemini-cli` 认证 provider，支持 OAuth PKCE 免 API Key 登录，与 #10176、#6745 形成 Gemini OAuth 生态闭环。 | [PR #10779](https://github.com/NousResearch/hermes-agent/pull/10779) |
| **#10176** — feat(gemini): add Google OAuth provider with PKCE authorization flow | sliverp | 为 Gemini provider 增加标准 OAuth PKCE 授权码流程，与 #10779 的 CLI 版本互补。 | [PR #10176](https://github.com/NousResearch/hermes-agent/pull/10176) |
| **#6745** — feat: add gemini-cli OAuth provider | Protect | 早期 Gemini CLI OAuth provider，被后续 PR 覆盖/整合关闭。 | [PR #6745](https://github.com/NousResearch/hermes-agent/pull/6745) |
| **#11272** — fix(discord): strip RTP padding before DAVE/Opus decode | malaiwah | 原始修复 PR，被 #11283 salvage 合并。 | [PR #11272](https://github.com/NousResearch/hermes-agent/pull/11272) |

**整体推进评估：** 今日核心进展在 **语音稳定性**（Discord RTP padding 修复）和 **认证体验**（Gemini OAuth 三连发），为 v0.10.x 的"零配置"体验补齐了第三方模型接入的认证基础设施。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 👍 | 热度原因分析 | 链接 |
|:---|:---:|:---:|:---|:---|
| **#73** Matrix Protocol Support for Messaging Gateway | 9 | 9 | **历史最热的平台接入请求**。用户强烈希望原生支持 Matrix（隐私、自托管），与今日 Matrix 网关 bug 频发形成呼应——社区既有需求旺盛，又有质量焦虑。 | [Issue #73](https://github.com/NousResearch/hermes-agent/issues/73) |
| **#3725** [Feature]: Rocket Chat support | 3 | 1 | 企业/团队用户希望扩展 B2B 消息平台覆盖，与 Teams、钉钉、飞书等现有适配形成对比。 | [Issue #3725](https://github.com/NousResearch/hermes-agent/issues/3725) |
| **#10880** /model switch does not call load_from_disk — memory snapshot stays stale until compression | 2 | 0 | 已关闭。`/model` 切换后内存状态不刷新，影响多模型会话的可靠性，修复后关闭。 | [Issue #10880](https://github.com/NousResearch/hermes-agent/issues/10880) |
| **#8174** Switch to mautrix-python breaks matrix gateway integration for encrypted communication #3 | 2 | 3 | **Matrix 迁移 regression**。`matrix-nio` → `mautrix-python` 迁移后加密房间/DM 损坏，已关闭说明今日有集中修复。 | [Issue #8174](https://github.com/NousResearch/hermes-agent/issues/8174) |
| **#10817** macOS launchd can re-poison TERMINAL_CWD and load repo AGENTS.md | 2 | 0 | macOS 官方支持的网关模式下，launchd 会错误加载 Hermes 自身仓库的 AGENTS.md（~10k 浪费 token），已关闭。 | [Issue #10817](https://github.com/NousResearch/hermes-agent/issues/10817) |
| **#9512** [Feature]: Microsoft Teams gateway / messaging platform support | 2 | 0 | 企业协作平台接入请求，与 Rocket Chat 共同反映 B2B 场景扩张诉求。 | [Issue #9512](https://github.com/NousResearch/hermes-agent/issues/9512) |
| **#9782** [Setup]: nix-darwin / darwinModules support | 2 | 0 | Nix 生态 macOS 用户无法使用现有 NixOS 模块，反映开发者工具链覆盖缺口。 | [Issue #9782](https://github.com/NousResearch/hermes-agent/issues/9782) |
| **#10259** Discord slash command sync fails with error 50035 when /skill group exceeds 8KB payload limit | 2 | 3 | **高影响稳定性问题**。80+ 默认技能导致 `/skill` slash 命令序列化后超 Discord ~8KB 限制，400 Bad Request，高赞说明影响面广。 | [Issue #10259](https://github.com/NousResearch/hermes-agent/issues/10259) |

**背后诉求分析：** 社区核心焦虑是 **"平台适配广度 vs. 网关稳定性深度"**——一方面迫切要求 Matrix/Teams/Rocket Chat 等企业/隐私友好平台；另一方面 Matrix 迁移后的加密故障、Discord 的语音/Slash 命令问题，让用户对"新平台上线速度"产生质量担忧。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | **#11249** | `APIConnectionError: Connection error.` — `_create_openai_client()` 中 dict mutation 导致 httpx.Client 被主客户端和请求客户端共享，**所有 API 调用在首次成功后失败**。 | 开放 | 无 | [Issue #11249](https://github.com/NousResearch/hermes-agent/issues/11249) |
| 🔴 **高** | **#11258** | Gateway 自重启/更新时以 `draining` 状态干净退出，但 systemd `Restart=on-failure` 不触发重启，**所有消息平台永久掉线**。 | 开放 | 无 | [Issue #11258](https://github.com/NousResearch/hermes-agent/issues/11258) |
| 🟡 **中高** | **#10259** | Discord `/skill` slash 命令因 80+ 技能超 8KB payload 限制，同步失败。 | 开放 | 无 | [Issue #10259](https://github.com/NousResearch/hermes-agent/issues/10259) |
| 🟡 **中** | **#11238** | Matrix bot 在 v0.9.0 后不再自动接受邀请，与 #10725 修复相关但可能未完全覆盖。 | 开放 | #10725（已合并，但 #11238 仍开放，可能 regression） | [Issue #11238](https://github.com/NousResearch/hermes-agent/issues/11238) |
| 🟡 **中** | **#11284** | QQbot 图片处理被 `url_safety` 拦截，腾讯 CDN 域名因本地代理 IP 被标记为私有地址。 | 开放 | 无 | [Issue #11284](https://github.com/NousResearch/hermes-agent/issues/11284) |
| 🟡 **中** | **#11171** | Google 模型上，缺失工具的委托任务导致无限重试循环。 | 开放 | 无 | [Issue #11171](https://github.com/NousResearch/hermes-agent/issues/11171) |
| 🟡 **中** | **#11233** | 错误分类器在 API 返回 dict 类型 `message` 时崩溃 `AttributeError`。 | 开放 | 无 | [Issue #11233](https://github.com/NousResearch/hermes-agent/issues/11233) |
| 🟢 **低** | **#11201** | `maybe_auto_title` 在第二次交换时仍触发，违反"仅在首次交换后生成标题"的约定。 | 开放 | 无 | [Issue #11201](https://github.com/NousResearch/hermes-agent/issues/11201) |
| 🟢 **低** | **#11197** | `install.sh` 需要 `xz-utils` 但未检查，缺失时静默失败。 | 开放 | 无 | [Issue #11197](https://github.com/NousResearch/hermes-agent/issues/11197) |

**已修复并关闭的 Bug：**
- #10880（/model 内存状态不刷新）、#8174（Matrix 加密损坏）、#10817（macOS AGENTS.md 污染）、#11137（claude-opus-4-7 thinking.type 不支持）、#11267/#11283（Discord RTP padding）

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 纳入下一版本可能性 | 判断依据 | 链接 |
|:---|:---|:---|:---|:---|
| **#9512** Microsoft Teams 支持 | 消息网关 | ⭐⭐⭐ 中 | 企业需求明确，与现有 Slack/Discord/钉钉/飞书模式一致，实现成本可控。 | [Issue #9512](https://github.com/NousResearch/hermes-agent/issues/9512) |
| **#3725** Rocket Chat 支持 | 消息网关 | ⭐⭐⭐ 中 | 用户标记为"小范围（单文件 <50 行）"，社区 PR 门槛低。 | [Issue #3725](https://github.com/NousResearch/hermes-agent/issues/3725) |
| **#10918** Google Gemini TTS provider | TTS 扩展 | ⭐⭐⭐⭐ 较高 | 已有关闭的 feature issue，且 Gemini 生态今日有 #10779/#10176 认证层推进，TTS 工具层扩展顺理成章。 | [Issue #10918](https://github.com/NousResearch/hermes-agent/issues/10918) |
| **#7641** Native multimodal input instead of vision_analyze tool | 多模态架构 | ⭐⭐⭐⭐ 较高 | **高赞（4）+ 中文社区强需求**。Kimi K2.5 等模型已支持原生多模态，当前 `vision_analyze` 工具调用模式被批评为"低效（5-10s 延迟）"。可能触发架构重构。 | [Issue #7641](https://github.com/NousResearch/hermes-agent/issues/7641) |
| **#11243** Native reasoning_effort support for Mistral AI | 模型能力适配 | ⭐⭐⭐ 中 | 针对 Mistral 自定义 provider 的根级字段注入，范围小但需维护模型家族映射表。 | [Issue #11243](https://github.com/NousResearch/hermes-agent/issues/11243) |
| **#11248** pod-hop handoff — /hop command | 有状态网关 | ⭐⭐⭐ 中 | 解决 Kubernetes/stateless 部署的上下文丢失问题，云原生场景日益重要，但涉及会话存储架构变更。 | [Issue #11248](https://github.com/NousResearch/hermes-agent/issues/11248) |
| **#4692** Feat/ink refactor | React/Ink TUI | ⭐⭐⭐⭐ 较高 | **大型开放 PR**，全新终端 UI（React/Ink 前端 + Python 后端 + JSON-RPC），若合并将是 v0.11 级别的体验升级。 | [PR #4692](https://github.com/NousResearch/hermes-agent/pull/4692) |

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 Issue | 场景 |
|:---|:---|:---|
| **Matrix 加密和邀请机制脆弱** | #8174, #11238, #10094, #10725 | 自托管/隐私优先用户将 Matrix 作为核心消息平台，迁移 `mautrix-python` 后加密房间损坏、邀请不自动接受，导致 bot 完全不可用。 |
| **Discord 规模化后频繁撞墙** | #10259, #11267 | 技能数量增长（80+）导致 slash 命令超 Discord 限制；语音频道 RTP padding 处理遗漏。反映"功能丰富度"与"平台 API 约束"的张力。 |
| **多模型切换体验不一致** | #10880, #4289, #11286 | CLI 有 `--model` 但交互聊天缺少 `/model`；切换后内存状态不刷新；OpenCode 中 `/model` 切换 Anthropic 路由模型时 URL 拼接错误。 |
| **安装和部署的隐性依赖** | #11197, #9782, #11258 | `install.sh` 缺 `xz-utils`；NixOS 模块不支持 nix-darwin；systemd 部署下网关自重启后永不再生。 |
| **中国企业用户的特殊适配** | #11284, #7641 | QQbot 图片被 url_safety 拦截腾讯 CDN；Kimi 多模态输入被强制走工具调用，延迟高。 |

### 满意点
- v0.10.0 的 **零 API Key 工具网关** 获得积极反响，降低新手门槛。
- Gemini OAuth 认证流的推进（#10176, #10779）被认可为"终于不用复制粘贴 API Key 了"。

---

## 8. 待处理积压

### 长期未响应但高价值的事项

| Issue/PR | 创建时间 | 最后更新 | 积压原因 | 建议行动 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#73** Matrix Protocol Support | 2026-02-26 | 2026-04-16 | **历时 50 天，9 评论 9 赞**，是平台接入类最热请求。虽有 Matrix 网关存在，但"原生支持"与当前 bug 频发的适配层形成落差。 | 维护者应明确 Matrix 路线图：是投资原生重构，还是修复现有适配层后归档此请求。 | [Issue #73](https://github.com/NousResearch/hermes-agent/issues/73) |
| **#4289** Add /model slash command to CLI chat | 2026-03-31 | 2026-04-16 | 创建 17 天，仅 1 评论。与今日多个 `/model` 相关 bug（#10880, #11286）形成关联，但功能请求本身被忽视。 | 与 bug 修复同步评估，低实现成本，高用户体验收益。 | [Issue #4289](https://github.com/NousResearch/hermes-agent/issues/4289) |
| **#4692** Feat/ink refactor | 2026-04-03 | 2026-04-16 | 大型 TUI 重构 PR，开放 14 天，评论数为 undefined（可能无活跃审查）。架构变动大，需核心维护者投入审查资源。 | 建议设定审查截止日期或拆分里程碑，避免长期悬置导致代码漂移。 | [PR #4692](https://github.com/NousResearch/hermes-agent/pull/4692) |
| **#7785** fix: MatrixAdapter respects proxy configuration | 2026-04-11 | 2026-04-17 | 开放 6 天，Matrix 代理支持 PR，与当前 Matrix 稳定性热点直接相关，但尚未合并。 | 加速审查，可一并解决企业/防火墙后 Matrix 部署问题。 | [PR #7785](https://github.com/NousResearch/hermes-agent/pull/7785) |

---

*日报生成时间：2026-04-17 | 数据来源：NousResearch/hermes-agent GitHub 公开数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-17

---

## 1. 今日速览

PicoClaw 今日呈现**高活跃度**态势：24小时内 Issues 更新 12 条（10 活跃/2 关闭）、PR 更新 27 条（18 待合并/9 已合并关闭），并推送 1 个 Nightly 构建。社区讨论集中在 **WhatsApp Native 通道稳定性**、**OAuth 认证体验缺陷** 以及 **网络错误降级策略** 三大主题。代码层面，依赖更新密集涌入（10+ Dependabot PRs），同时有 4 个功能/修复 PR 成功合入主分支，整体项目健康度良好，但认证与通道层的边缘场景仍需持续打磨。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.6-nightly.20260416.f32b303d
- **发布时间**：2026-04-16
- **性质**：自动化构建，**可能不稳定**
- **变更范围**：包含自 `v0.2.6` 至 `main` 分支的全部提交
- **迁移注意**：作为 nightly 版本，不建议用于生产环境；如需验证最新修复（如 cron 会话隔离、网络错误降级），可在测试环境试用
- **完整 Changelog**：[compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

---

## 3. 项目进展

今日共有 **4 个重要 PR 合并/关闭**，推动项目在稳定性、并发能力和运维体验上取得实质进展：

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#2547](https://github.com/sipeed/picoclaw/pull/2547) | lc6464 | 新增 `network` 级别的故障转移分类，TLS/连接错误等网络层失败现在会正确触发 provider fallback，而非直接终止调用链 | **已合并** |
| [#2503](https://github.com/sipeed/picoclaw/pull/2503) | cytown | Agent Loop 重构以支持**并行处理**用户消息，并同步更新文档 | **已关闭/合并** |
| [#2474](https://github.com/sipeed/picoclaw/pull/2474) | srcrs | 修复 cron 任务会话复用问题：每次执行现在使用独立会话键 `cron-{jobID}-{timestamp}`，避免历史记录污染 | **已合并** |
| [#2500](https://github.com/sipeed/picoclaw/pull/2500) | cytown | 清理 platform-token 相关的无用后端输出，减少日志噪音 | **已关闭/合并** |

**进展评估**：网络降级与 cron 隔离是生产环境的常见痛点，今日合并的修复直接提升了系统可靠性；Agent Loop 的并行化则为高并发场景打下基础。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | **14 条评论** | 持续 2 个月的功能请求，反映**本地 LLM 集成**的强烈需求。作者明确表示技术能力不足，呼吁社区贡献，体现了 PicoClaw 在降低本地模型接入门槛方面的用户期望 |
| 2 | [#1249](https://github.com/sipeed/picoclaw/issues/1249) SKILL.md 未自动注入上下文 | 3 条评论 | 已关闭。核心诉求是"提及 skill 即自动激活"，属于**技能系统易用性**的关键设计问题 |
| 3 | [#2548](https://github.com/sipeed/picoclaw/issues/2548) Multiple authentication credentials received | 2 条评论 | 配置 Gemini provider 时触发认证冲突，暴露多凭证合并逻辑的边界缺陷 |

**诉求总结**：社区最强烈的呼声是**更简单的本地模型对接**（LM Studio）和**更智能的技能上下文管理**。

---

## 5. Bug 与稳定性

今日新增/活跃的 Bug 按严重程度排列如下：

| 严重程度 | Issue | 描述 | 已有 Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | [#2540](https://github.com/sipeed/picoclaw/issues/2540) | `whatsapp_native` 在 LID 迁移账户上**静默丢弃所有消息**，`allow_from` 格式匹配失效 + 设备索引漂移；日志默认无 INFO 输出，极难排查 | ❌ 无 |
| 🔴 **高** | [#2541](https://github.com/sipeed/picoclaw/issues/2541) | `whatsapp_native` 的 `group_trigger.mention_only` 因**四个复合缺陷**完全失效；作者称已有本地补丁 | ❌ 无（但作者有 patch，可快速跟进） |
| 🟡 **中** | [#2550](https://github.com/sipeed/picoclaw/issues/2550) | `picoclaw auth login --provider google-antigravity` **不刷新 token 过期时间**，仅浏览器 OAuth 才有效 | ✅ [#2549](https://github.com/sipeed/picoclaw/pull/2549) 添加 `--no-browser` 选项，可能相关但需确认是否覆盖此 bug |
| 🟡 **中** | [#2548](https://github.com/sipeed/picoclaw/issues/2548) | 配置中同时存在 `api_key` 和 provider 级凭证时触发 "Multiple authentication credentials received" | ❌ 无 |
| 🟡 **中** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | `picoclaw gateway` 启动异常，进程短暂存在后消失（Debian 13 + digntalk） | ❌ 无 |
| 🟡 **中** | [#2302](https://github.com/sipeed/picoclaw/issues/2302) | Web UI 频繁要求重新认证 Credentials（antigravity API `PERMISSION_DENIED`），会话持久化异常 | ❌ 无 |
| 🟢 **低** | [#2538](https://github.com/sipeed/picoclaw/issues/2538) | 网络错误（TLS/连接）未触发 fallback 重试，直接失败 | ✅ **已修复**（[#2547](https://github.com/sipeed/picoclaw/pull/2547) 已合并） |

**稳定性警示**：`whatsapp_native` 通道今日曝出 **2 个高严重性静默失败问题**，且均涉及消息丢失或触发器失效，建议维护者优先审查 aporb 提交的本地补丁并尽快发版修复。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 为 MCP 服务器支持 **OAuth 2.1 + PKCE**，并支持从 Dashboard 通过 URL 添加 | ⭐⭐⭐ 高 | 与 Claude.ai "Add connector" 对齐，是生态扩展的关键 UX；无 PR 但需求清晰 |
| [#2533](https://github.com/sipeed/picoclaw/issues/2533) | `picoclaw auth login` 增加 **`--no-browser`** 标志 | ⭐⭐⭐⭐ 很高 | 已有 PR [#2549](https://github.com/sipeed/picoclaw/pull/2549) 实现，待合并 |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | 集成 **Authula** 实现认证/授权层 | ⭐⭐ 中 | 架构级改动，3 月提出后讨论不多，但安全是长期刚需 |
| [#28](https://github.com/sipeed/picoclaw/issues/28) | **LM Studio Easy Connect** | ⭐⭐⭐ 高 | 社区呼声强、评论活跃，但缺乏 PR；若维护者重视本地模型生态，很可能被纳入 |
| [#2563](https://github.com/sipeed/picoclaw/pull/2563) | Web 通道支持**前端直接下载文件附件** | ⭐⭐⭐⭐ 很高 | PR 已开，端到端实现完整，合并前景明确 |

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的真实用户声音：

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"LM Studio 就在手边，但我接不进去"** — 希望有零代码/低代码的本地模型接入方式 | [#28](https://github.com/sipeed/picoclaw/issues/28) | 😩 挫败 |
| **"auth login 总是弹浏览器，我在 headless/远程环境里没法用"** | [#2533](https://github.com/sipeed/picoclaw/issues/2533) | 😤 困扰 |
| **"WhatsApp 消息被静默吃掉，查了一整天日志才发现是 LID 格式问题"** | [#2540](https://github.com/sipeed/picoclaw/issues/2540) | 😠 愤怒 |
| **"SKILL.md 写了，但模型根本不知道，得手动塞上下文"** | [#1249](https://github.com/sipeed/picoclaw/issues/1249) | 😕 困惑 |
| **"PicoClaw 完全没有认证层，VPS 上跑等于裸奔"** | [#1067](https://github.com/sipeed/picoclaw/issues/1067) | 😰 担忧 |
| **"网络一抖就全崩，不会自动换模型"** | [#2538](https://github.com/sipeed/picoclaw/issues/2538) | 😤 不满 → **已修复** ✅ |

**满意度亮点**：网络错误 fallback 修复及时回应了用户对"鲁棒性"的期待；文件下载和 `--no-browser` 的 PR 也显示开发侧对运维场景的关注。

---

## 8. 待处理积压

以下 Issue/PR 长期活跃或已具备修复条件，建议维护者重点关注：

| 项目 | 创建时间 | 状态 | 提醒原因 |
|:---|:---|:---|:---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | 2026-02-11 | Open, 14 评论 | **2 个月**无官方回应，本地 LLM 集成是社区高频诉求 |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | 2026-03-04 | Open, 2 评论 | 安全认证架构级 Issue，1.5 个月无进展，生产部署受阻 |
| [#2302](https://github.com/sipeed/picoclaw/issues/2302) | 2026-04-03 | Open, 1 评论 | antigravity 认证频繁失效，影响 Web UI 日常可用性 |
| [#2540](https://github.com/sipeed/picoclaw/issues/2540) + [#2541](https://github.com/sipeed/picoclaw/issues/2541) | 2026-04-16 | Open | aporb 已有本地补丁，建议尽快联系提交 PR，避免 WhatsApp 通道信誉持续受损 |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | 2026-04-02 | Open | 修复 `SecureString` 反射 panic 的 PR 已挂起 **14 天**，属于明确的崩溃修复，合并不应再拖 |

---

*日报基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-17

---

## 1. 今日速览

NanoClaw 过去 24 小时呈现**高活跃度开发态势**：PR 流水线异常繁忙，共 17 条 PR 更新（11 条待合并，6 条已合并/关闭），但 Issues 侧相对平静，仅 3 条新开/活跃。今日核心特征是**技能生态（Skills）爆发**与**架构层扩张并行**——多个贡献者同时推进 API 服务器、MCP 工具、记忆图谱等扩展能力，同时 topcoder1 主导的"7 层能力扩张"与 Telegram 代理式 UX 重设计进入密集迭代期。不过，同一 `add-api-server` 技能出现 4 次重复/关闭 PR，反映贡献者在提交流程上存在一定摩擦。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的 PR（6 条）

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#1793](https://github.com/qwibitai/nanoclaw/pull/1793) | topcoder1 | **信任网关安全加固**：为 `readBody()` 增加 1MB 请求体上限，防止 DoS 攻击，返回 413 状态码。 |
| [#1794](https://github.com/qwibitai/nanoclaw/pull/1794) | topcoder1 | 关闭，与 #1793/#1795 同属"7 层扩张"系列，疑似范围拆分后的清理。 |
| [#1786](https://github.com/qwibitai/nanoclaw/pull/1786) | topcoder1 | 同上，14 项剩余路线图规格的实现 PR，因拆分或重构需求关闭。 |
| [#1799](https://github.com/qwibitai/nanoclaw/pull/1799) | robbyczgw-cla | `add-api-server` 技能的重复提交，关闭。 |
| [#1798](https://github.com/qwibitai/nanoclaw/pull/1799) | robbyczgw-cla | 同上，关闭。 |
| [#1797](https://github.com/qwibitai/nanoclaw/pull/1797) | robbyczgw-cla | 同上，关闭。 |

**整体推进评估**：今日实质性合并仅 **#1793 安全修复** 一项，其余关闭多为重复 PR 或范围调整。项目"向前迈进"主要体现在**待审队列膨胀**（11 条 Open PR），而非当日落地。架构扩张（7 层能力、Mission Control 2.0、Matrix 通道）处于**临门一脚的评审阶段**。

---

## 4. 社区热点

### 最活跃讨论区

| 排名 | Issue/PR | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🥇 | [#1804](https://github.com/qwibitai/nanoclaw/issues/1804) | 1 条评论 | **Slack 多工作区支持**：v2 的通道注册表以 `channelType` 为 key，导致第二个 Slack adapter 会覆盖第一个。这是企业/团队部署场景的核心阻塞，直接影响 NanoClaw 作为多租户服务的能力。 |
| 🥈 | [#1805](https://github.com/qwibitai/nanoclaw/issues/1805) | 新提交，0 评论 | **Telegram 长时处理无状态反馈**：11 分钟代理处理期间用户看不到任何 typing indicator，造成"假死"体验。这与同日提交的 PR #1801（Telegram 代理式 UX 重设计）形成精准呼应，说明 UX 团队已感知该痛点。 |
| 🥉 | [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) | 长期 Open（3/19 创建，昨日更新） | **mem0 图记忆技能**：利用现有 Qdrant + Neo4j 零新增容器部署，社区对"持久记忆"需求强烈，该 PR 可能是记忆层标准化的关键基础设施。 |

**背后诉求总结**：社区正从"能跑通单通道"向**多租户、可感知、有记忆**的生产级代理平台演进。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1805](https://github.com/qwibitai/nanoclaw/issues/1805) | Telegram 长时代理处理无 typing indicator，用户感知为冻结/崩溃 | **疑似相关**：[#1801](https://github.com/qwibitai/nanoclaw/pull/1801) 代理式 UX 重设计（待审），但未明确提及 typing indicator |
| 🟡 **中** | [#1803](https://github.com/qwibitai/nanoclaw/issues/1803) | `src/ipc.ts` 权限边界（~79-94 行）**零测试覆盖**，存在跨组消息注入风险 | **无 Fix PR** |
| 🟢 **低** | [#1793](https://github.com/qwibitai/nanoclaw/pull/1793)（已合并） | Trust Gateway `readBody()` 无界读取，存在 DoS 风险 | **已修复** |

**稳定性健康度**：当日无崩溃或数据丢失报告，但 IPC 安全测试缺口和 Telegram UX 假死问题提示**生产可靠性仍需补课**。

---

## 6. 功能请求与路线图信号

### 用户/贡献者提出的新功能需求

| 来源 | 功能 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| [#1804](https://github.com/qwibitai/nanoclaw/issues/1804) | Slack 多工作区并发支持 | **高** | 架构变更明确（通道注册表 key 从 `channelType` 改为实例标识），已有上下文讨论，属于 v2 通道层的自然演进 |
| [#1805](https://github.com/qwibitai/nanoclaw/issues/1805) | Telegram typing indicator / 状态反馈 | **高** | 与 #1801 代理式 UX 重设计高度共振，极可能随该 PR 或快速 follow-up 解决 |
| [#1803](https://github.com/qwibitai/nanoclaw/issues/1803) | IPC 授权边界单元测试 | **中** | 纯技术债，非用户可见功能，但安全风险明确，维护者可能优先处理 |
| PR [#1800](https://github.com/qwibitai/nanoclaw/pull/1800) | `add-api-server` — OpenAI 兼容 HTTP 端点 | **高** | 作者 robbyczgw-cla 当日 4 次提交最终保留 #1800，说明已修正流程，技能生态是项目明确方向 |
| PR [#1802](https://github.com/qwibitai/nanoclaw/pull/1802) | Atomic Chat MCP 工具技能 | **中高** | 与现有 `ollama-tool` 技能模式一致，技术路径清晰 |
| PR [#1795](https://github.com/qwibitai/nanoclaw/pull/1795) | 7 层能力扩张（事件总线、执行器池、信任引擎等） | **高** | topcoder1 连续多日迭代，已关闭范围过大的 #1786/#1794，保留精简版 #1795，进入评审节奏 |
| PR [#1796](https://github.com/qwibitai/nanoclaw/pull/1796) | Mission Control 2.0.0 重设计 | **中** | 涉及三仓库架构的桥接优先编排，范围宏大，评审周期可能较长 |
| PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | Matrix 通道（含 E2EE） | **中高** | 4/4 创建，昨日仍有更新，代码风格对齐 Telegram 通道，实现完整，待最终合并 |

---

## 7. 用户反馈摘要

### 真实痛点

> *"During @pomoclaw_bot's first live walk-through... the agent was processing for **11 minutes** with zero visible status on Telegram. From the owner's perspective, the bot had silently frozen — no error, no spinner, nothing."*
> — [#1805](https://github.com/qwibitai/nanoclaw/issues/1805) ythx-101

**痛点提炼**：
- **长时代理任务的"黑洞体验"**：用户需要可见的状态反馈（typing indicator、进度消息或心跳），否则默认判定为故障。
- **多工作区部署的架构天花板**：Slack 单实例限制（#1804）说明早期设计偏向个人/单团队场景，与企业扩展需求存在落差。
- **技能提交的流程摩擦**：同一贡献者 `add-api-server` 4 次 PR 才保留正确版本，暗示新贡献者在 CI/提交规范上可能缺乏清晰指引。

### 满意/期待信号
- **零新增容器的 mem0 图记忆**（#1256）和**复用现有基础设施**的设计思路获得社区隐性认可（无反对评论，长期保持 Open 并更新）。
- **OpenAI 兼容 API 技能**（#1800）反映用户希望 NanoClaw 代理能被外部生态系统无缝调用，而非封闭在聊天界面内。

---

## 8. 待处理积压

### 需要维护者重点关注

| PR/Issue | 创建时间 | 滞留原因 | 行动建议 |
|:---|:---|:---|:---|
| [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) | 2026-03-19（**29 天**） | 长期待审，涉及 Qdrant + Neo4j + mem0 三大外部依赖的集成评审 | 指定内存/基础设施模块的代码所有者加速 review |
| [#886](https://github.com/qwibitai/nanoclaw/pull/886) | 2026-03-09（**39 天**） | "Needs Review" 状态，AI 代理群新闻简报技能，范围较大（4 个并行研究代理 + MD5 去重） | 要求作者拆分为更小单元，或安排架构 review |
| [#1803](https://github.com/qwibitai/nanoclaw/issues/1803) | 2026-04-16 | 新提交，但涉及 IPC 安全边界这一关键特权门 | 标记 `security` 标签，优先分配测试覆盖 PR |

---

**报告生成时间**：2026-04-17  
**数据来源**：qwibitai/nanoclaw GitHub 公开活动流

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-17

---

## 1. 今日速览

NullClaw 今日展现出极高的维护活跃度：24 小时内 **12 个 Issues 关闭、11 个 PR 合并/关闭**，仅余 1 个新 Issue 和 3 个待合并 PR 处于开放状态。核心团队（尤其 `manelsen`）主导了一波密集的 Bug 修复潮，集中解决了 **Docker 沙箱挂载、Linux 原生 shell 执行、SQLite 历史记录丢失、OTEL 端点约束、Responses API 兼容性** 等关键稳定性问题。同时项目正式完成 **Zig 0.16 迁移**，标志着技术栈进入新阶段。无新版本发布。

---

## 2. 版本发布

**无今日发布。**

---

## 3. 项目进展

### 核心基础设施升级
| PR | 说明 | 链接 |
|:---|:---|:---|
| #823 | **Migrate project to Zig 0.16** — 完成从 Zig 0.15.x 到 0.16.0 的全面迁移，重构兼容层为 `shared`/`fs`/`net` 模块化结构，更新 WebSocket 集成以适配新 stdlib API。这是项目底层架构的重要里程碑。 | [PR #823](https://github.com/nullclaw/nullclaw/pull/823) |

### 安全与沙箱修复
| PR | 说明 | 链接 |
|:---|:---|:---|
| #801 | **修复 Docker 沙箱空挂载参数问题** — 通过工厂方法统一初始化 `mount_arg_buf`，一次性关闭 #799/#779/#784 三个关联 Issue，解决了大量用户报告的 `invalid empty volume spec` 错误。 | [PR #801](https://github.com/nullclaw/nullclaw/pull/801) |
| #805 | **Linux 沙箱自动检测安全性加固** — `firejail`/`bubblewrap` 不再仅凭 `--version` 输出判断可用性，而是要求实际能成功运行沙箱命令，修复了 #791 的物理 Linux shell 无法执行问题。 | [PR #805](https://github.com/nullclaw/nullclaw/pull/805) |
| #807 | **Web 配对令牌过期与 SSRF 防护加固** — 为配对令牌添加过期机制，收紧 provider/browser 边界，通过共享安全解析助手降低 DNS rebinding 风险。 | [PR #807](https://github.com/nullclaw/nullclaw/pull/807) |

### 代理与会话修复
| PR | 说明 | 链接 |
|:---|:---|:---|
| #804 | **修复未绑定会话错误路由到首个子代理的问题** — 恢复文档约定：无匹配绑定时应落到 `main` 代理，而非继承首个子代理的 system prompt。关闭 #793。 | [PR #804](https://github.com/nullclaw/nullclaw/pull/804) |
| #802 | **修复 SQLite 历史记录为空的问题** — CLI 对话回合现在正确持久化到 session store，关闭 #797。 | [PR #802](https://github.com/nullclaw/nullclaw/pull/802) |
| #824 | **修复历史压缩中的 UTF-8 截断问题** — 将 `truncateUtf8` 应用到 6 处原先的字节级截断点，避免多字节字符损坏。 | [PR #824](https://github.com/nullclaw/nullclaw/pull/824) |

### 提供商与 API 兼容性
| PR | 说明 | 链接 |
|:---|:---|:---|
| #790 | **修复 Responses API 工具 schema 格式和 null 错误分类** — 将嵌套 `{"type":"function",...}` 格式扁平化为 Responses API 所需格式，关闭 #773。 | [PR #790](https://github.com/nullclaw/nullclaw/pull/790) |
| #806 | **自定义 OpenAI 兼容 provider 404 时自动回退到 responses** — 在 `chatImpl` 路径复用端点回退决策，关闭 #766。 | [PR #806](https://github.com/nullclaw/nullclaw/pull/806) |

### 可观测性与配置
| PR | 说明 | 链接 |
|:---|:---|:---|
| #803 | **允许 OTEL 使用本地容器主机名** — 在保持远程 HTTPS 强制策略的同时，放行 `otel`、`host.containers.internal` 等本地主机名，修复 #800 的回归。 | [PR #803](https://github.com/nullclaw/nullclaw/pull/803) |

### 系统服务支持
| PR | 说明 | 链接 |
|:---|:---|:---|
| #810 | **为 Linux 添加 SysVinit 回退支持** — 当 systemd 和 OpenRC 均不可用时，自动生成 LSB 兼容 init 脚本。 | [PR #810](https://github.com/nullclaw/nullclaw/pull/810) |

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 分析 |
|:---|:---|:---|:---|
| 1 | **Issue #793** — System Prompt 错误继承首个子代理内容 | 3 条评论 | [Issue #793](https://github.com/nullclaw/nullclaw/issues/793) | 这是多代理配置的核心语义 bug，直接影响 `agents.list` 的使用预期。用户 `lestan` 的反馈推动了路由逻辑的修正，说明社区对复杂代理编排的需求正在增长。 |
| 2 | **Issue #791** — Shell 无法在物理 Linux 上运行 | 3 条评论 | [Issue #791](https://github.com/nullclaw/nullclaw/issues/791) | 物理机/Linux 服务器部署场景的关键痛点，反映了"自动检测"逻辑过度依赖容器化假设的问题。修复后提升了裸机适用性。 |
| 3 | **Issue #820 / #821** — Debian 安装文档与版本号显示 | 各 3 条评论 | [Issue #820](https://github.com/nullclaw/nullclaw/issues/820) / [Issue #821](https://github.com/nullclaw/nullclaw/issues/821) | 用户 `eabase` 连续提出源安装体验问题（Zig 依赖、版本号显示为 `dev`），指向从源码构建 NullClaw 的入门门槛仍然较高，文档和构建元数据需要更多关爱。 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Docker 沙箱 `invalid empty volume spec` 导致所有工具无法执行 | 已关闭 | #801 | [#799](https://github.com/nullclaw/nullclaw/issues/799) / [#779](https://github.com/nullclaw/nullclaw/issues/779) / [#784](https://github.com/nullclaw/nullclaw/issues/784) |
| 🔴 **高** | Shell 在物理 Linux 上完全无法运行（native runtime） | 已关闭 | #805 | [#791](https://github.com/nullclaw/nullclaw/issues/791) |
| 🟡 **中** | SQLite 后端历史记录丢失（CLI 对话未持久化） | 已关闭 | #802 | [#797](https://github.com/nullclaw/nullclaw/issues/797) |
| 🟡 **中** | System Prompt 被首个子代理污染 | 已关闭 | #804 | [#793](https://github.com/nullclaw/nullclaw/issues/793) |
| 🟡 **中** | OTEL 端点强制 HTTPS 破坏本地容器网络配置 | 已关闭 | #803 | [#800](https://github.com/nullclaw/nullclaw/issues/800) |
| 🟡 **中** | Responses API 工具 schema 格式错误 | 已关闭 | #790 | [#773](https://github.com/nullclaw/nullclaw/issues/773) |
| 🟡 **中** | 自定义 OpenAI 兼容 provider 404 未回退 responses | 已关闭 | #806 | [#766](https://github.com/nullclaw/nullclaw/issues/766) |
| 🟢 **低** | `nullclaw version` 源安装显示 `dev` | 已关闭 | 无明确 PR | [#821](https://github.com/nullclaw/nullclaw/issues/821) |

> **健康度评估**：今日关闭的 12 个 Issues 中，8 个为实质性 bug 修复，且全部有对应 PR。项目处于**高强度维护、低缺陷滞留**的健康状态。

---

## 6. 功能请求与路线图信号

| 来源 | 需求描述 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| **PR #829** | 新增管理员导向的 `config show --json`、`config get <path> --json`、`models summary --json` CLI，为 nullhub 等下游工具提供机器可读接口 | **高** — 已开放，需求明确且与生态扩展直接相关 | [PR #829](https://github.com/nullclaw/nullclaw/pull/829) |
| **PR #783** | Cron 子代理引擎：DB  backed 调度器、运行历史、JSON 输出、安全加固 | **高** — 功能完整且覆盖企业自动化场景，但体积较大，可能需要分阶段 review | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) |
| **Issue #826** | 文档请求：如何在 Tailscale 环境下使用 nullclaw gateway | **中** — 属于网络/部署文档缺口，尚未有 PR | [Issue #826](https://github.com/nullclaw/nullclaw/issues/826) |

---

## 7. 用户反馈摘要

### 痛点
- **容器化假设过强**：裸机/物理 Linux 用户频繁遭遇 shell 无法执行、Docker 错误提示等问题，说明 NullClaw 的 runtime 自动检测对非容器环境不够友好。
- **源码构建门槛**：Debian 用户需要自行安装 Zig，且构建后版本号显示为 `dev`，缺乏对源安装用户的反馈闭环。
- **网络/代理场景文档不足**：Tailscale + gateway 的组合使用出现 `NotImplemented` 错误，VPN/内网穿透场景的文档和错误处理有待完善。

### 满意点
- **维护响应极快**：大量 Issue 在提出后 1-7 天内即被修复并关闭，社区对核心团队效率认可度高。
- **多代理功能受关注**：用户开始深入使用 `agents.list` 等高级配置，表明产品能力正在向复杂场景渗透。

---

## 8. 待处理积压

| 条目 | 开放时长 | 状态 | 提醒 | 链接 |
|:---|:---|:---|:---|:---|
| **PR #783** — Cron 子代理引擎 | ~10 天 | 待合并 | 功能体积大、价值高，建议维护者优先安排 review 或拆分合并，避免长期挂起导致冲突。 | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) |
| **PR #828** — `doctor` CLI-only channel 诊断信息澄清 | 1 天 | 待合并 | 小而精的修复，建议快速合并。 | [PR #828](https://github.com/nullclaw/nullclaw/pull/828) |
| **PR #829** — 管理员 config/models CLI | 1 天 | 待合并 | 与 nullhub 生态强相关，建议尽快 review 以解锁下游集成。 | [PR #829](https://github.com/nullclaw/nullclaw/pull/829) |
| **Issue #826** — Tailscale gateway 文档 | 1 天 | 开放 | 网络部署场景的新文档需求，尚无 PR 响应。 | [Issue #826](https://github.com/nullclaw/nullclaw/issues/826) |

---

*日报基于 NullClaw GitHub 公开数据生成，日期：2026-04-17*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-04-17

> **项目**: nearai/ironclaw  
> **日期**: 2026-04-17  
> **分析周期**: 过去 24 小时

---

## 1. 今日速览

IronClaw 在过去 24 小时内保持**极高活跃度**：Issues 更新 50 条（45 条新开/活跃，5 条关闭），PR 更新 50 条（41 条待合并，9 条已合并/关闭），无新版本发布。社区正处于**密集 Bug Bash 与 Staging 冲刺阶段**——大量 QA 反馈涌入，同时核心团队在高速迭代修复网关状态、引擎安全、WASM 通道生命周期等关键路径。整体健康度良好，但待合并 PR 积压较高（41 条），需关注 review 带宽。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#2515** | henrypark133 | **统一网关 onboarding、认证门控与配对流程** — 整合聊天与设置/设置流程，修复信任边界回归问题，消除过时的 auth/secret 状态泄漏 | [PR #2515](https://github.com/nearai/ironclaw/pull/2515) |
| **#2512** | henrypark133 | **修复 Slack Relay OAuth 回调状态查找** — 规范 relay OAuth nonce 存储作用域，支持 canonical 与 legacy relay secret key | [PR #2512](https://github.com/nearai/ironclaw/pull/2512) |
| **#2552** | zetyquickly | **通知与汇率工具增强** — 为 `notification_send` 添加 `thread_id`，为分析工具添加 `effective_rate`，为 wire execute 补充错误码 | [PR #2552](https://github.com/nearai/ironclaw/pull/2552) |
| **#2551** | henrypark133 | **修复网关中 routine 设置恢复状态** — 新增 TurnFlowController 拥有的 resume 状态，解决 gate-backed routine 设置流程的 UI 状态不一致 | [PR #2551](https://github.com/nearai/ironclaw/pull/2551) |

**整体推进评估**：核心团队在**网关可靠性、OAuth 安全、引擎 v2 安全加固**三个主线上取得实质性进展。Slack 集成与 routine 交互的稳定性显著提升，但 staging 自动晋升 PR（#2553、#2554）显示 CI/CD 管道仍在高频率运转，说明代码变更速率极快。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#2229** Google Sheets OAuth blocked: Error 400 invalid_request | **9 条** | QA 在 Bug Bash 中发现 Google Sheets 扩展的 OAuth 授权流程完全阻断，需紧急修复 Google Suite 集成 | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) |
| **#2411** Telegram bot token save action does nothing | 1 条 | Telegram 通道配置中保存 bot token 无响应，通道配置 UX 存在明显断裂 | [Issue #2411](https://github.com/nearai/ironclaw/issues/2411) |
| **#2491** Engine V2 bypasses inbound secret scanning | 1 条 | **安全红线问题** — Engine V2 跳过 `scan_inbound_for_secrets()`，用户粘贴的 API key/token 直接送达 LLM 并被持久化 | [Issue #2491](https://github.com/nearai/ironclaw/issues/2491) |

**热点分析**：社区最强烈的诉求集中在**"扩展集成可用性"**（Google/Slack/Telegram）与**"引擎 v2 安全基线"**两大主题。Google Sheets OAuth 问题评论数遥遥领先，说明该集成是用户高频场景；而 Engine V2 秘密扫描绕过是安全层面的核心焦虑，已有对应修复 PR #2494 待合并。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| **P1 / 安全** | **#2491** | Engine V2 绕过入站秘密扫描，token 直达 LLM | **PR #2494 待合并** | [Issue #2491](https://github.com/nearai/ironclaw/issues/2491) |
| **P1** | **#2410** | Dashboard 循环刷新导致内容不断被清空 | 待修复 | [Issue #2410](https://github.com/nearai/ironclaw/issues/2410) |
| **P1** | **#1998** | Slack connect flow 完全损坏，bot 无响应 | 待修复（PR #2512 已合并，可能部分缓解） | [Issue #1998](https://github.com/nearai/ironclaw/issues/1998) |
| **P1** | **#1997** | IronClaw Slack App 未上架 marketplace，用户需自行创建 app | 待修复 | [Issue #1997](https://github.com/nearai/ironclaw/issues/1997) |
| **P2** | **#2229** | Google Sheets OAuth Error 400 | 待修复 | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) |
| **P2** | **#2285** | 页面刷新后聊天消息消失，但 bot 后台仍在处理 | 待修复 | [Issue #2285](https://github.com/nearai/ironclaw/issues/2285) |
| **P2** | **#2541** | Agent 内容摘要任务不调用工具，空转 3-5 分钟后返回通用回复 | 待修复 | [Issue #2541](https://github.com/nearai/ironclaw/issues/2541) |
| **P3** | **#2413** | 日志中频繁出现 HTTP 400 / 'Provider failed' 瞬态错误 | 待修复 | [Issue #2413](https://github.com/nearai/ironclaw/issues/2413) |
| **P3** | **#2412** | 'Potential secret leak detected' 警告淹没服务器日志 | 待修复 | [Issue #2412](https://github.com/nearai/ironclaw/issues/2412) |
| **P3** | **#2404** | 标签切换触发完整聊天刷新（PR #2415 已提交） | **PR #2415 待合并** | [Issue #2404](https://github.com/nearai/ironclaw/issues/2404) |

**新增 WASM 通道稳定性问题**（henrypark133 同日集中创建）：
- **#2556** WASM 通道在启动时自动运行已安装但未激活的通道
- **#2557** WASM 通道在认证缺失/被拒绝时无限重连
- **#2558** WASM 通道 hook 注册绑定在启动发现而非激活生命周期
- **#2559** 多租户模式下扩展 API 的每次请求通道认证与配对扫描成本过高

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| **PR #2019** | 原生 Matrix 通道支持（E2EE、房间邀请处理、持久化 thread ID） | 高 — 功能完整，已开发数月，社区对去中心化通道有长期需求 |
| **PR #1764** | Abound demo — Responses API、凭证注入、skills、guardrails | 高 — 与 v2-architecture 绑定，是商业化集成的重要展示 |
| **PR #2168** | 基于路径的凭证匹配（per-endpoint auth） | 高 — 安全架构关键能力，已有实际用例 |
| **PR #2539** | Engine V2 "执行义务" — 强制模型在明确用户指令下尝试工具调用 | 中高 — 直接解决模型虚假能力拒绝问题，提升 agent 可靠性 |
| **PR #2549** | `mission_get` action — 让 LLM 检索 mission 结果与状态 | 中高 — 填补 engine v2 中 routine/mission 结果查询缺口 |
| **PR #2550** | 新增 skills 贡献指南 + "investigate" skill 模板 | 中 — 生态建设信号，表明团队正在降低外部贡献门槛 |
| **Issue #1325** / **#1324** / **#1322** | Routines Web UI 一阶创建/编辑流、可读性摘要、CLI 与后端能力对齐 | 中 — 多次更新，属于中长期 UX 债务，尚未见对应 PR |
| **Issue #1338** / **#1337** / **#1334** / **#1331** / **#1330** / **#1332** | Tool schema discovery 系列增强（MCP/WASM/builtin） | 中 — 标注为 `on hold`，是 v2 工具生态的基础设施建设，可能分批落地 |

---

## 7. 用户反馈摘要

### 真实痛点

> **"扩展集成配置即黑洞"**
> - Google Sheets OAuth 报错 400，Slack 配置后 bot 不响应，Telegram token 保存无反馈 — 用户在三类主流扩展上均遭遇**配置-验证闭环断裂**。
> - [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) | [Issue #1998](https://github.com/nearai/ironclaw/issues/1998) | [Issue #2411](https://github.com/nearai/ironclaw/issues/2411)

> **"Web 网关状态极不稳定"**
> - Dashboard 循环刷新、聊天消息刷新丢失、标签切换触发全量重载 — 用户在 staging 上的**核心交互信任感受损**。
> - [Issue #2410](https://github.com/nearai/ironclaw/issues/2410) | [Issue #2285](https://github.com/nearai/ironclaw/issues/2285) | [Issue #2404](https://github.com/nearai/ironclaw/issues/2404)

> **"Agent 不执行、不遵守指令"**
> - 要求摘要内容时不调用工具空转数分钟；要求每次请求都告警时仅在失败时告警；要求定时发送时立即发送 — **指令遵循与工具调用意愿**是反复出现的可靠性问题。
> - [Issue #2541](https://github.com/nearai/ironclaw/issues/2541) | [Issue #2282](https://github.com/nearai/ironclaw/issues/2282) | [Issue #2281](https://github.com/nearai/ironclaw/issues/2281)

> **"安全与日志噪音"**
> - 秘密泄漏警告淹没日志（#2412），同时引擎 v2 又存在秘密扫描 bypass（#2491）—— 安全机制既**过度告警**又**存在盲区**。
> - [Issue #2412](https://github.com/nearai/ironclaw/issues/2412) | [Issue #2491](https://github.com/nearai/ironclaw/issues/2491)

---

## 8. 待处理积压

### 需维护者关注的高价值/高年龄事项

| 类型 | 编号 | 标题 | 创建时间 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **PR** | **#1446** | feat: add Aliyun Coding Plan support | 2026-03-20（28天）| 低，但**超大范围**（XL） | [PR #1446](https://github.com/nearai/ironclaw/pull/1446) |
| **PR** | **#2019** | feat: native Matrix channel | 2026-04-04（13天）| 高，XL | [PR #2019](https://github.com/nearai/ironclaw/pull/2019) |
| **PR** | **#2168** | feat(credentials): path-based credential matching | 2026-04-08（9天）| 高 | [PR #2168](https://github.com/nearai/ironclaw/pull/2168) |
| **Issue** | **#1338** | Tool schema discovery: extension workflow sequencing | 2026-03-18（30天）| on hold | [Issue #1338](https://github.com/nearai/ironclaw/issues/1338) |
| **Issue** | **#1337** | Tool schema discovery: MCP and WASM on-demand discovery | 2026-03-18（30天）| on hold | [Issue #1337](https://github.com/nearai/ironclaw/issues/1337) |
| **Issue** | **#1325** | Routines UX: first-class create/edit flows | 2026-03-17（31天）| 长期 UX 债务 | [Issue #1325](https://github.com/nearai/ironclaw/issues/1325) |

**提醒**：Aliyun 支持与 Matrix 通道是两个重要的**生态扩展 PR**，已分别等待 28 天和 13 天，建议核心团队分配 review 资源以避免贡献者流失。Tool schema discovery 系列 Issue 虽标记 `on hold`，但它们是 engine v2 工具生态的**基础设施债务**，持续堆积将影响后续 MCP/WASM 扩展的开发者体验。

---

*日报完*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-17

---

## 1. 今日速览

LobsterAI 今日保持中等活跃度，过去24小时内 **8 条 PR 更新、0 条 Issue 更新、0 个新版本发布**。代码流动以修复和内部合作为主：6 条 PR 已合并/关闭，2 条仍处于待合并状态。值得关注的是，团队今日集中处理了多条 `cowork`、`openclaw`、`main` 相关模块的修复，并合并了一条较大的 release 分支（`release/2026.04.14`），显示产品正在向新的 release 周期推进。社区侧无新增 Issue 和讨论，外部贡献者活跃度较低。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 6 条 PR 覆盖了核心功能修复、基础设施统一和 release 合并，项目整体在稳定性与协作体验上向前推进：

| PR | 作者 | 核心进展 |
|:---|:---|:---|
| [#1706](https://github.com/netease-youdao/LobsterAI/pull/1706) | liuzhq1986 | **更新检测增强**：为更新检查请求追加 `uuid` 和 `userId` 查询参数，便于更精准的版本推送与灰度分析。 |
| [#1704](https://github.com/netease-youdao/LobsterAI/pull/1704) | nmgwddj | **Cowork 会话稳定性**：修复了 `HEARTBEAT_OK` 心跳回包泄漏到会话流中的问题，提升 OpenClaw 后台通信的干净度。 |
| [#1705](https://github.com/netease-youdao/LobsterAI/pull/1705) | nmgwddj | **主进程电源管理统一**：将分散的 `powerSaveBlocker` 逻辑统一为 `prevent-app-suspension`，消除重复生命周期管理。 |
| [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670) | liugang519 | **企业微信集成增强**：支持多机器人配置，并修复定时任务通知在企业微信场景下的失败 bug。 |
| [#1703](https://github.com/netease-youdao/LobsterAI/pull/1703) | liuzhq1986 | **MCP 页面热修复**：恢复 merge 冲突时误删的图标组件 import，避免 `McpManager` 页面崩溃。 |
| [#1702](https://github.com/netease-youdao/LobsterAI/pull/1702) | nmgwddj | **Release 分支合并**：将 `release/2026.04.14` 合并入主线，涉及 renderer / docs / main / cowork 多模块升级。 |

**整体判断**：今日代码流以“修稳补漏 + release 并线”为特征，无重大新功能亮相，但为即将到来的版本发布扫清了多个稳定性障碍。

---

## 4. 社区热点

今日无新增 Issue，PR 评论区亦无公开评论（所有 PR 的 `评论: undefined`）。因此**不存在传统意义上的社区热点讨论**。

相对最值得关注的待审 PR：
- [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) — 修复切换 Agent 时主页输入框草稿未清空的交互 bug，直接影响多 Agent 用户的日常使用体验。
- [#438](https://github.com/netease-youdao/LobsterAI/pull/438) — 外部贡献者 `xinrui-z` 于 2026-03-16 提交的 AIHubMix Provider 支持，已标记为 `stale`，近一个月无更新。

**背后诉求分析**：外部贡献者希望 LobsterAI 支持更多模型提供商（AIHubMix），但长期缺乏维护者反馈，可能打击第三方贡献积极性。

---

## 5. Bug 与稳定性

按严重程度排列今日已修复或待修复的问题：

| 严重程度 | 问题 | 状态 | 相关 PR |
|:---|:---|:---|:---|
| 🔴 **高** | `McpManager` 页面因图标 import 缺失而**崩溃** | **已修复**（已合并） | [#1703](https://github.com/netease-youdao/LobsterAI/pull/1703) |
| 🟡 **中** | 切换 Agent 时主页输入框**草稿残留**（文字+附件未清空） | **待合并** | [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) |
| 🟡 **中** | Cowork 会话中 **HEARTBEAT_OK 心跳回包泄漏**，污染对话流 | **已修复**（已合并） | [#1704](https://github.com/netease-youdao/LobsterAI/pull/1704) |
| 🟢 **低** | 企业微信**定时任务通知失败** | **已修复**（已合并） | [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670) |
| 🟢 **低** | 主进程 `powerSaveBlocker` 类型与逻辑重复 | **已修复**（已合并） | [#1705](https://github.com/netease-youdao/LobsterAI/pull/1705) |

---

## 6. 功能请求与路线图信号

今日无新增功能请求 Issue。从现有 PR 中可提取以下路线图信号：

| 信号来源 | 内容 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#1706](https://github.com/netease-youdao/LobsterAI/pull/1706) | 更新检查请求带用户标识（uuid/userId） | **高** — 已合并，属于发布基础设施 |
| [#1670](https://github.com/netease-youdao/LobsterAI/pull/1670) | 企业微信多机器人支持 | **高** — 已合并，B 端集成能力持续扩展 |
| [#438](https://github.com/netease-youdao/LobsterAI/pull/438) | 新增 AIHubMix Provider | **低/不确定** — 外部 PR 已 stale，需维护者介入决策 |
| [#1702](https://github.com/netease-youdao/LobsterAI/pull/1702) | OpenClaw 升级（release/2026.04.14） | **高** — 已合并，是近期版本的核心升级内容 |

---

## 7. 用户反馈摘要

今日无新增 Issue 及评论，无法从公开数据中提炼新的用户痛点或使用场景。

**历史遗留信号**（来自 [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) 的问题描述）：
> 多 Agent 用户在主页输入草稿后切换 Agent，期望获得“干净的新会话上下文”，但实际遭遇草稿残留。这反映出 **Agent 隔离性** 在 UX 层面仍有细节待完善 —— 技术实现上共享 Redux key `__home__` 的设计与用户对“每个 Agent 独立主页”的心理模型存在偏差。

---

## 8. 待处理积压

以下 Issue/PR 需要维护者关注，避免长期悬置：

| 项目 | 创建时间 | 最后更新 | 状态 | 风险提示 |
|:---|:---|:---|:---|:---|
| [#438](https://github.com/netease-youdao/LobsterAI/pull/438) Feat/add aihubmix provider | 2026-03-16 | 2026-04-16 | `OPEN` + `stale` | 外部贡献的 Provider 扩展，已超一个月未合并或关闭。若项目计划丰富模型生态，建议尽快 review 或给出反馈；若不符合 roadmap，也应明确关闭并说明原因，以维护社区贡献氛围。 |
| [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) fix(cowork): 切换 Agent 时自动清空主页输入框内容 | 2026-04-16 | 2026-04-16 | `OPEN` | 虽刚创建，但属于直接影响多 Agent 用户体验的交互修复，建议优先 review 合并。 |

---

*日报生成时间：2026-04-17 | 数据来源：netease-youdao/LobsterAI GitHub 公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-04-17

## 1. 今日速览

Moltis 昨日展现出极高的开发活跃度，24 小时内 **18 个 PR** 更新（13 条已合并/关闭）、**10 个 Issues** 流转（7 条关闭），并发布了一个新版本。核心贡献者 `penso` 单日密集输出 7 个修复 PR，主导了提供商兼容性、工具链 schema 清理、Nostr 稳定性等关键问题；`Cstewart-HC` 则推进了代码索引（code-index）四段式 PR 栈和上下文窗口配置重构。社区侧新报 Bug 3 个（含 1 个回归），功能请求 2 个，整体项目健康度良好，修复闭环效率极高。

---

## 2. 版本发布

### `20260416.02` 已发布
- **发布时间**：2026-04-16
- **发布标签**：[moltis-org/moltis/releases/tag/20260416.02](https://github.com/moltis-org/moltis/releases/tag/20260416.02)

> 注：GitHub Release 页面未提供详细 Changelog。结合同日合并的 PR 推断，该版本 likely 包含以下关键变更：
> - 提供商 schema 清理与修复（PR #751、#746、#740）
> - Grok 3/4 推理能力检测（PR #741）
> - Windows 节点 rustls CryptoProvider 修复（PR #749）
> - Nostr 通道 panic 修复（PR #742）
> - 可配置上下文窗口 + 最旧优先工具结果压缩（PR #737）
> 
> **建议**：生产环境用户升级前验证 OpenRouter/Gemini、Grok、Nostr 相关工作流；Docker-in-Docker 用户确认沙箱挂载行为（Issue #102 已修复，需确认是否进版）。

---

## 3. 项目进展

### 核心功能推进

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#753](https://github.com/moltis-org/moltis/pull/753) → [#754](https://github.com/moltis-org/moltis/pull/754) → [#755](https://github.com/moltis-org/moltis/pull/755) → [#756](https://github.com/moltis-org/moltis/pull/756) | Cstewart-HC | **OPEN** (4-PR 栈) | **代码索引系统（Code Index）从零到完整集成**：crate 脚手架 → 编排器/搜索/工具/增量同步 → Gateway 接入/QMD 后端 → SQLite+FTS5 内置后端与 Clippy 清理。这是 Moltis 向“自带代码理解与检索”迈出的标志性一步，完成后将显著降低对外部 RAG 依赖。 |
| [#737](https://github.com/moltis-org/moltis/pull/737) | Cstewart-HC | **MERGED** | **上下文窗口可配置 + 工具结果压缩策略重构**：合并替代了 #723/#726/#727，解决长循环中 agent 上下文被错误压缩的致命问题，支持按模型覆盖 context window。 |
| [#745](https://github.com/moltis-org/moltis/pull/745) | tbaumann | **OPEN** | **Nix Flake 支持**：提供 `nix run github:moltis-org/moltis` 一键运行，NixOS 生态集成迈出关键一步。同日关闭了旧 PR #469。 |

### 关键修复（penso 单日 7 PR）

| PR | 修复问题 | 对应 Issue |
|:---|:---|:---|
| [#751](https://github.com/moltis-org/moltis/pull/751) | 清理工具 schema 中孤立的 `required` 字段，解决 Gemini via OpenRouter 严格校验失败 | [#747](https://github.com/moltis-org/moltis/issues/747) |
| [#750](https://github.com/moltis-org/moltis/pull/750) | 聊天工具栏新增 reasoning effort 切换（Off/Low/Medium/High） | [#739](https://github.com/moltis-org/moltis/issues/739) |
| [#749](https://github.com/moltis-org/moltis/pull/749) | Windows 节点 `wss://` 连接前安装 rustls CryptoProvider | [#744](https://github.com/moltis-org/moltis/issues/744) |
| [#746](https://github.com/moltis-org/moltis/pull/746) | MCP 工具 schema 清理不受 JSON Schema draft 版本限制 | [#743](https://github.com/moltis-org/moltis/issues/743) |
| [#742](https://github.com/moltis-org/moltis/pull/742) | Nostr 通道将 `tokio::sync::RwLock` 替换为 `std::sync::RwLock` 消除 panic | [#736](https://github.com/moltis-org/moltis/issues/736) |
| [#741](https://github.com/moltis-org/moltis/pull/741) | 检测 Grok 3/4 为支持推理的模型 | [#738](https://github.com/moltis-org/moltis/issues/738) |
| [#740](https://github.com/moltis-org/moltis/pull/740) | 恢复被 schema 规范化剥离的 `type` 注解，修复 Fireworks AI 兼容性 | — |

**整体评估**：项目昨日在 **Agent 核心能力（上下文管理）、开发者体验（代码索引、Nix）、多提供商兼容性（Gemini/Grok/Fireworks/Windows/Nostr）** 三条主线上同时推进，属于高能量输出日。

---

## 4. 社区热点

### 讨论最活跃

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#102](https://github.com/moltis-org/moltis/issues/102) Docker-in-Docker sandbox mounts container-internal path instead of host path | **4** | 历时 2 个月的老 Bug 昨日关闭。这是 Docker 化部署 Moltis 的经典陷阱——沙箱容器挂载路径在 DinD 场景下发生“路径命名空间穿透失败”。修复涉及 `crates/tools/src/sandbox.rs` 的路径解析逻辑，对 CI/CD 和自托管用户至关重要。 |
| 2 | [#747](https://github.com/moltis-org/moltis/issues/747) openrouter + gemini: `required[0]` property is not defined | **2** | 快速修复-关闭的典范。Gemini 通过 OpenRouter 时对工具 schema 的严格校验导致请求 400，反映了 Moltis 在“schema 规范化 ↔ 提供商兼容性”之间的张力。 |
| 3 | [#533](https://github.com/moltis-org/moltis/issues/533) `+` button for adding message attachments | **2** | 功能请求，关注 UI/UX 细节。用户希望在聊天界面有更直观的方式添加附件，目前可能依赖拖拽或菜单路径。 |

### 反应最多
- [#102](https://github.com/moltis-org/moltis/issues/102) 👍 × 5，为昨日所有 Issues/PRs 中最高，说明 DinD 路径问题确实困扰了不少用户。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 标题 | 状态 | Fix PR | 分析 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | [#757](https://github.com/moltis-org/moltis/issues/757) | Fix in #706 breaks Podman on Ubuntu 24.04/26.04 | **OPEN** | **无** | **回归 Bug**。此前修复 #706 的改动与 Podman 在 Ubuntu 新版上的行为冲突，导致容器运行时损坏。这是昨日唯一尚未关闭的新报 Bug，需优先关注。 |
| 🟡 **中** | [#747](https://github.com/moltis-org/moltis/issues/747) | openrouter + gemini: `required[0]` property is not defined | **CLOSED** | [#751](https://github.com/moltis-org/moltis/pull/751) | 导致 Gemini 模型完全不可用，修复已合并。 |
| 🟡 **中** | [#744](https://github.com/moltis-org/moltis/issues/744) | Windows Node Call `CryptoProvider::install_default()` | **CLOSED** | [#749](https://github.com/moltis-org/moltis/pull/749) | Windows 节点 `wss://` 前台运行 panic，影响 Windows 自托管用户。 |
| 🟡 **中** | [#743](https://github.com/moltis-org/moltis/issues/743) | MCP tool schema sanitization (#698) does not apply to draft-07 | **CLOSED** | [#746](https://github.com/moltis-org/moltis/pull/746) | Attio MCP 工具仍被 OpenAI 拒绝，schema 清理有漏网之鱼。 |
| 🟡 **中** | [#736](https://github.com/moltis-org/moltis/issues/736) | Moltis panics when trying to create Nostr channel | **CLOSED** | [#742](https://github.com/moltis-org/moltis/pull/742) | 异步锁在同步 trait 方法中调用导致 panic，属于并发模型设计缺陷。 |
| 🟡 **中** | [#738](https://github.com/moltis-org/moltis/issues/738) | Grok 4.20 via openrouter does not use reasoning | **CLOSED** | [#741](https://github.com/moltis-org/moltis/pull/741) | 模型能力检测缺失，非崩溃但影响核心功能体验。 |
| 🟢 **低** | [#102](https://github.com/moltis-org/moltis/issues/102) | Docker-in-Docker sandbox mounts container-internal path | **CLOSED** | 未明确标注 | DinD 路径映射错误，沙箱工作区为空，影响容器化部署。 |

> **稳定性信号**：昨日 7 个 Bug 中 6 个已当日闭环，仅 [#757](https://github.com/moltis-org/moltis/issues/757) Podman 回归悬而未决。修复密度高，但需警惕 #706 的修复引入平台级回归——建议回顾该 PR 的测试覆盖。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 类型 | 纳入可能性分析 |
|:---|:---|:---|:---|
| [#533](https://github.com/moltis-org/moltis/issues/533) | `+` button for adding message attachments | UI/UX 增强 | **中高**。纯前端改动，Scope 小，社区有需求，无技术阻碍。 |
| [#748](https://github.com/moltis-org/moltis/issues/748) | easy way to "retry" a prompt on error | 交互优化 | **高**。vvuk 提出，属于高频痛点（模型超时/限流后需手动复制重发）。若已有 chat 状态管理基础设施，实现成本低，预计下一两个迭代内可见。 |
| [#739](https://github.com/moltis-org/moltis/issues/739) | Let configure Openrouter provider Reasoning Effort | 提供商配置 | **已实现**（PR [#750](https://github.com/moltis-org/moltis/pull/750) 已合并）。 |

**路线图信号**：
- **Code Index 系统**（#753-#756）是近期最大功能块，完成后 Moltis 将具备“内置代码理解与检索”能力，可能替代或补充现有 QMD 外部后端。
- **Nix 支持**（#745）进入第二轮尝试，若合并将显著拓宽开发者获取渠道。
- **上下文窗口可配置 + 智能压缩**（#737）已落地，说明团队正在严肃对待长会话 agent 的可靠性。

---

## 7. 用户反馈摘要

从 Issues 中提炼的真实声音：

| 痛点/场景 | 来源 | 核心反馈 |
|:---|:---|:---|
| **Docker 部署路径黑洞** | [#102](https://github.com/moltis-org/moltis/issues/102) | “Moltis 在 Docker 里运行，沙箱工作区是空的”——容器化部署用户被 DinD 路径映射问题困扰长达两个月，说明文档或部署指南需加强此场景覆盖。 |
| **Gemini/OpenRouter 兼容性焦虑** | [#747](https://github.com/moltis-org/moltis/issues/747) | 工具 schema 严格校验失败导致模型完全不可用，用户对“Moltis 声称支持 Gemini 但实际报错”感到挫败。 |
| **Windows 二等公民感** | [#744](https://github.com/moltis-org/moltis/issues/744) | Windows 节点运行即 panic，反映跨平台测试覆盖仍有缺口。 |
| **MCP 生态摩擦** | [#743](https://github.com/moltis-org/moltis/issues/743) | Attio 等 MCP 工具 schema 因 draft-07 未被清理而被 OpenAI 拒绝，用户期望“Moltis 对 MCP 工具做无损兼容”。 |
| **错误后重发成本高** | [#748](https://github.com/moltis-org/moltis/issues/748) | 模型调用失败后没有 retry 按钮，必须手动复制提示词重新发起，长提示场景尤其痛苦。 |
| **附件添加不直观** | [#533](https://github.com/moltis-org/moltis/issues/533) | 聊天界面缺少显式的 `+` 按钮添加附件，新用户 discoverability 差。 |

---

## 8. 待处理积压

### 需维护者关注

| 类型 | 条目 | 创建时间 | 状态 | 提醒原因 |
|:---|:---|:---|:---|:---|
| **Bug 回归** | [#757](https://github.com/moltis-org/moltis/issues/757) Fix in #706 breaks Podman on Ubuntu 24.04/26.04 | 2026-04-16 | **OPEN，0 评论** | 唯一未修复的新报 Bug，且为**回归**，可能波及更多 Linux 容器运行时用户。建议今日内分配 owner。 |
| **功能请求** | [#533](https://github.com/moltis-org/moltis/issues/533) `+` button for adding message attachments | 2026-03-31 | **OPEN，17 天** | UI 小需求，社区有真实反馈，长期悬置易积累“响应慢”印象。 |
| **PR 栈** | [#753](https://github.com/moltis-org/moltis/pull/753) → [#756](https://github.com/moltis-org/moltis/pull/756) | 2026-04-16 | **OPEN** | 4-PR 栈体量大，需 reviewer 预留整块时间。建议维护者明确 review 时间表，避免作者士气消耗。 |
| **Nix PR** | [#745](https://github.com/moltis-org/moltis/pull/745) | 2026-04-16 | **OPEN** | 替代了已关闭的 #469，社区对 Nix 支持有持续兴趣，建议给出合并条件或反馈。 |

---

*日报生成时间：2026-04-17 · 数据来源：moltis-org/moltis GitHub 公开活动流*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-17

---

## 1. 今日速览

CoPaw 社区今日维持**高活跃度**：24 小时内 Issues 与 PR 各更新 50 条，形成近 1:1 的吞吐比例，社区治理节奏健康。项目发布 **v1.1.2-beta.2** 补丁版本，重点修复后台任务取消导致的稳定性问题。功能侧进展显著：Signal / WhatsApp / SIP 语音三大新通道同日推进，ACP（Agent Communication Protocol）服务器与可扩展记忆后端进入代码评审阶段。Bug 报告集中在 WebUI 工具页 500 错误、会话页面假死、模型调用兼容性三类，其中 2 项已有对应修复 PR。整体而言，项目处于**快速迭代期**，基础设施（通道协议、记忆系统、调试工具）与用户体验并行升级。

---

## 2. 版本发布

### v1.1.2-beta.2
**发布链接：** [agentscope-ai/QwenPaw/releases/tag/v1.1.2-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.2-beta.2)

| 维度 | 内容 |
|:---|:---|
| **核心修复** | 修复 `AgentApp` 分派请求未注册到 `TaskTracker` 导致的后台任务被取消问题（[#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305)） |
| **版本升级** | 版本号提升至 `1.1.2b2`（[#3454](https://github.com/agentscope-ai/QwenPaw/pull/3454)） |
| **破坏性变更** | 无 |
| **迁移注意** | 从 `1.1.1.post1` 热更新即可；若使用自定义 `TaskTracker` 扩展，建议验证后台长任务是否稳定 |

> 该版本属于稳定性补丁，未引入新 API，推荐所有 `1.1.x` 用户升级。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #3305 | @ekzhu | 修复 `AgentApp` 后台任务取消 —— v1.1.2-beta.2 的核心内容 | [PR #3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) |
| #3454 | @xieyxclack | 版本号 bump 至 `1.1.2b2` | [PR #3454](https://github.com/agentscope-ai/QwenPaw/pull/3454) |
| #2994 | @joe2643 | 热重载时保留通道连接，避免 WhatsApp/Signal/Telegram 断线 | [PR #2994](https://github.com/agentscope-ai/QwenPaw/pull/2994) |
| #2995 | @joe2643 | WhatsApp / Signal 支持引用触发消息回复 | [PR #2995](https://github.com/agentscope-ai/QwenPaw/pull/2995) |
| #2962 | @joe2643 | 关闭旧版 WhatsApp 通道 PR（被 #3498 取代） | [PR #2962](https://github.com/agentscope-ai/QwenPaw/pull/2962) |
| #3438 | @jilin6627-spec | 完成 vLLM `tool_choice="auto"` 兼容性修复 | [PR #3438](https://github.com/agentscope-ai/QwenPaw/pull/3438) |
| #3494 | @pan-x-c | 为免费模型添加使用警告（已关闭） | [PR #3494](https://github.com/agentscope-ai/QwenPaw/pull/3494) |

### 整体推进评估

- **稳定性基建**：后台任务生命周期 + 热重载通道保活两项合并，显著降低长会话与多通道部署的掉线风险。
- **通道生态**：WhatsApp / Signal / SIP 语音三条线同步推进，CoPaw 正从"即时消息"向"全渠道通信"扩展。
- **模型兼容**：vLLM 工具调用修复落地，本地模型部署体验改善。
- **ACP 协议**：PR #3487 进入评审，若合并将打通 IDE（Zed、OpenCode 等）生态。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | #3309 更新到 1.1.0 后对 qwenpaw 和 copaw 的疑问 | **11** | **品牌/CLI 迁移混乱**是最大痛点。用户反馈 PATH 需手动添加、两个 CLI 命令并存、配置目录仍留在 `.copaw/` 下。说明从 `CoPaw` 到 `QwenPaw` 的品牌重命名尚未完成无缝迁移，文档与安装脚本需补齐。 | [Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) |
| 2 | #1563 `write_file` 写入大段内容时被截断 | **6** | 33KB 文件仅写入 19%，且模型反复遗漏 `file_path` 参数。属于**工具可靠性与参数校验**的老问题，持续影响代码生成类工作流。 | [Issue #1563](https://github.com/agentscope-ai/QwenPaw/issues/1563) |
| 3 | #3011 长任务执行时中途静默停止 | **6** | 使用 `qwen3 coder plus` 时 100% 复现，前后端无报错。今日已关闭，推测随 v1.1.2-beta.2 的任务跟踪修复一并解决。 | [Issue #3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) |
| 4 | #3462 `AGENT_UNKNOWN_ERROR` 报错 | **5** | 今日新建当日关闭，响应速度快，体现社区对崩溃类问题的优先级处理。 | [Issue #3462](https://github.com/agentscope-ai/QwenPaw/issues/3462) |
| 5 | #2757 企业微信频道频繁断开 | **5** | 配置心跳后仍掉线，需重新保存参数恢复。指向通道层的**连接保活机制**存在缺陷，可能与 access_token 刷新或网络切换有关。 | [Issue #2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) |

### 高关注度 PR

| PR | 说明 | 链接 |
|:---|:---|:---|
| #3509 | 首次贡献者提交**多模态消息**（图片/文件）支持，覆盖 Base64/URL/本地路径 | [PR #3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) |
| #3449 | **SIP 语音通道**：pyVoIP/LiveKit 双模式 + 流式 STT/TTS，OpenTask 路线图中任务 #15 | [PR #3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) |
| #3487 | **ACP 服务器**：将 QwenPaw 暴露为 ACP Server，IDE 集成关键一步 | [PR #3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) |

---

## 5. Bug 与稳定性

按**严重程度**排列，标注修复状态：

| 严重度 | Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | #3506 | `/api/console/chat` 崩溃：`AgentRequest` 无 `channel` 属性 | **待修复** | [Issue #3506](https://github.com/agentscope-ai/QwenPaw/issues/3506) |
| 🔴 **高** | #3481 / #3497 | 内置工具 `icon=null` 导致 `/api/tools` 返回 500，WebUI"工具"页加载失败 | **PR #3497 已提交** | [Issue #3481](https://github.com/agentscope-ai/QwenPaw/issues/3481) / [PR #3497](https://github.com/agentscope-ai/QwenPaw/pull/3497) |
| 🔴 **高** | #3468 | Console 会话页面频繁假死，刷新后才显示内容 | **待修复** | [Issue #3468](https://github.com/agentscope-ai/QwenPaw/issues/3468) |
| 🟡 **中** | #3489 | Anthropic-compatible API 400 错误：消息格式含 `None` / 空文本 / 错误 `tool_use_id` | **待修复** | [Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) |
| 🟡 **中** | #3477 | Qwen 模型输出 XML 格式，QwenPaw 只接收 JSON，导致本地模型报错 | **当日关闭** | [Issue #3477](https://github.com/agentscope-ai/QwenPaw/issues/3477) |
| 🟡 **中** | #3435 | 下载文件时 URL 路径重复（`/api/files/preview` 出现两次） | **待修复** | [Issue #3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) |
| 🟡 **中** | #3504 | 技能列表视图：点击启用/禁用按钮误触发查看详情 | **待修复** | [Issue #3504](https://github.com/agentscope-ai/QwenPaw/issues/3504) |
| 🟢 **低** | #3484 | `/skills` 搜索栏 UI 异常显示下拉列表 | **待修复** | [Issue #3484](https://github.com/agentscope-ai/QwenPaw/issues/3484) |
| 🟢 **低** | #3460 | `chat_with_agent` MCP 工具参数 schema 与实际校验不一致 | **当日关闭** | [Issue #3460](https://github.com/agentscope-ai/QwenPaw/issues/3460) |

> **稳定性信号**：v1.1.2-beta.2 修复了后台任务取消这一"静默停止"根因，但 WebUI 前端仍有 3 个交互/崩溃类 Bug 待处理，建议优先合并 #3497。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能

| Issue/PR | 诉求 | 纳入下一版本可能性 | 链接 |
|:---|:---|:---:|:---|
| #3224 CoPaw Agent Teams | "自然语言驱动的自进化多智能体协作团队"——用户希望从手动创建工作区升级到自然语言创建团队 | ⭐⭐⭐ 高，与 #2904 Plan mode、#3487 ACP 共同指向"高级编排" | [Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) |
| #3470 类似 Hermes Agent 的自我进化 | 询问是否有自我进化研发计划 | ⭐⭐⭐ 高，与 #3224 同主题，官方尚未明确回应 | [Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) |
| #3437 支持 Kimi Code API | 用户手动添加失败，希望内置支持 | ⭐⭐ 中，属于模型 provider 扩展 | [Issue #3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) |
| #3439 管理台查看分级日志 | 按 agent 和 log level 过滤日志 | ⭐⭐⭐ 高，PR #3064 调试页已合并，可在此基础上迭代 | [Issue #3439](https://github.com/agentscope-ai/QwenPaw/issues/3439) |
| #3503 技能批量启用/禁用 | 前端批量操作功能缺失 | ⭐⭐ 中，纯前端增强 | [Issue #3503](https://github.com/agentscope-ai/QwenPaw/issues/3503) |
| #3507 QwenPaw Local 卸载功能 | llama.cpp 部署失败率高，希望一键卸载 | ⭐⭐ 中，本地模型 UX 优化 | [Issue #3507](https://github.com/agentscope-ai/QwenPaw/issues/3507) |

### 已进入代码评审的重量级功能 PR

| PR | 功能 | 链接 |
|:---|:---|:---|
| #3500 | **可扩展记忆后端**：从硬编码 ReMeLight 重构为插件架构，支持 mem0 / Zep / LangMem | [PR #3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) |
| #3487 | **ACP 服务器**：`qwenpaw acp` 命令暴露完整 Workspace | [PR #3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) |
| #2904 | **Plan mode**：集成 `PlanNotebook` 的多步计划模式 | [PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) |
| #3508 | **Signal 通道**：基于 `signal-cli` 子进程 | [PR #3508](https://github.com/agentscope-ai/QwenPaw/pull/3508) |
| #3498 | **WhatsApp 通道**：基于 `neonize-qwenpaw` 重新提交 | [PR #3498](https://github.com/agentscope-ai/QwenPaw/pull/3498) |

> **路线图判断**：下一版本（v1.2.0 或 v1.1.2 正式版）极可能包含 **ACP 服务器 + Signal/WhatsApp 双通道 + 可扩展记忆后端**，形成"更开放、更多端、更持久"的三大支柱。

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 典型反馈 | 来源 |
|:---|:---|:---|
| **品牌迁移混乱** | "qwenpaw 命令 not found"、"copaw app 和 qwenpaw app 同时存在"、"配置还在 .copaw 目录" | #3309 |
| **工具不可靠** | `write_file` 写大文件截断、反复漏传 `file_path` | #1563 |
| **本地模型部署困难** | llama.cpp 不一定能运行，排查复杂，想卸载重装 | #3507 |
| **记忆不跨会话** | 已告知使用 MCP 服务、已记录解决方案，新对话仍重复犯错 | #3453 |
| **前端交互瑕疵** | 会话页面假死、技能按钮误触、搜索栏 UI 异常 | #3468, #3504, #3484 |

### 满意/期待点

- **多通道扩展受关注**：用户主动期待更多通道（Signal、SIP 语音）。
- **社区响应速度快**：#3462、#3477、#3490 等当日关闭，用户获得感强。
- **自我进化/团队协作为高频期待**：#3224、#3470 反映用户对"从单 agent 到多 agent 自主协作"的明确需求。

---

## 8. 待处理积压

以下 Issue/PR 已持续活跃但尚未关闭，建议维护者优先关注：

| 条目 | 创建时间 | 当前状态 | 提醒原因 | 链接 |
|:---|:---:|:---|:---|:---|
| #3309 qwenpaw/copaw 迁移疑问 | 2026-04-13 | 开放，11 评论 | **品牌重命名**的最高频用户障碍，需官方给出迁移指南或统一 CLI | [Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) |
| #1563 `write_file` 大文件截断 | 2026-03-16 | 开放，6 评论 | 3 周未修复，直接影响代码生成核心工作流 | [Issue #1563](https://github.com/agentscope-ai/QwenPaw/issues/1563) |
| #2757 企业微信频繁断开 | 2026-04-01 | 开放，5 评论 | 企业用户通道稳定性问题，心跳机制失效根因待查 | [Issue #2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) |
| #2904 Plan mode | 2026-04-03 | 评审中，2 周+ | 路线图级功能，评审周期较长，建议加速或拆分合并 | [PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) |
| #3449 SIP 语音通道 | 2026-04-15 | 评审中 | 体积大、涉及 LiveKit/pyVoIP/STT/TTS，建议分阶段合并降低风险 | [PR #3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) |

---

*日报基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 · 2026-04-17

---

## 1. 今日速览

ZeroClaw 今日维持**高活跃度**，24 小时内 Issues 更新 40 条、PR 更新 50 条，社区讨论密集。项目正处于 **v0.7.0 发布前夜**：发布准备 PR #5805 已提交，同时微内核拆分（#5559）引发的 CI/CD 与 crates.io 发布链断裂问题（#5811、#5812）成为紧急阻塞项。治理层面，WareWolf-MoonWall 主导的 6 篇架构/工程/文化 RFC 持续发酵，标志着项目从快速生长向**有意图架构（Intentional Architecture）**转型。整体健康度良好，但发布管道与工程基础设施是近期最大风险点。

---

## 2. 版本发布

**无新版本发布。**

v0.7.0 发布准备 PR [#5805](https://github.com/zeroclaw-labs/zeroclaw/pull/5805) 已提交，包含 changelog、版本号升级及 Hugging Face / LM Studio 集成的文档修正，但尚未合并。

---

## 3. 项目进展

### 已合并/关闭的重要 PR & Issues

| 项 | 类型 | 进展说明 |
|:---|:---|:---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Bug 修复 | **Web Dashboard 不可用问题关闭**。长期存在的构建/运行时 dashboard 加载失败（S1 阻塞级）已解决，用户不再需要通过手动 `cd web && npm ci && npm run build` 绕过。 |
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 功能推进 | **Matrix 通道摩擦点追踪关闭**。E2EE OTK 重试循环、密钥备份等 6 项子问题全部完成，Matrix 通道可用性显著提升。 |
| [#4363](https://github.com/zeroclaw-labs/zeroclaw/issues/4363) | 治理改进 | **"推送 fixup 到贡献者分支"规范落地**。配合 PR [#5791](https://github.com/zeroclaw-labs/zeroclaw/pull/5791) 的文档补充，社区协作流程更加友好。 |
| [#2555](https://github.com/zeroclaw-labs/zeroclaw/issues/2555) | 功能推进 | **Azure OpenAI 自定义 provider 认证支持**。通过 `auth_header` 配置解决 Azure 的 `api-key` 头与 `api-version` 查询参数问题。 |
| [#5541](https://github.com/zeroclaw-labs/zeroclaw/issues/5541) | Bug 修复 | **Dockerfile.debian 本地构建修复**。3 个阻塞本地构建的 bug 已解决。 |
| [#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562) | Bug 修复 | **Windows shell 命令闪 cmd 窗口问题修复**。后台执行时不再弹出控制台窗口。 |
| [#5798](https://github.com/zeroclaw-labs/zeroclaw/issues/5798) | Bug 修复 | **Webhook 独立通道启动修复**。此前 webhook 作为唯一配置通道时无法启动的 bug 已解决。 |
| [#5784](https://github.com/zeroclaw-labs/zeroclaw/issues/5784) | Bug 修复 | **Matrix 媒体下载失败回退逻辑统一**。非图片类媒体失败时返回一致的错误标记字符串。 |
| [#5755](https://github.com/zeroclaw-labs/zeroclaw/issues/5755) | Bug 修复 | **Prometheus backend 识别失败修复**。 |
| [#5716](https://github.com/zeroclaw-labs/zeroclaw/pull/5716) | 可观测性 | **OTEL span 父子关系修复**。此前所有 span 均为独立根节点，现已建立正确的 parent-child 层级。 |

**整体判断**：今日关闭项覆盖了 **dashboard 可用性、Matrix 稳定性、Windows 体验、容器构建、可观测性基础** 等多个维度，项目质量底座明显加固。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🥇 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web dashboard is still not available | 14 | **新用户入门阻塞**。Tauri 桌面端与 Web UI 同时报错，影响第一印象，社区迫切要求开箱即用。 |
| 🥈 | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) Matrix channel: friction tracker | 12 | **企业/隐私敏感用户对 Matrix E2EE 的强需求**。OTK、密钥备份、设备验证等是企业部署的硬性门槛。 |
| 🥉 | [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) RFC: Intentional Architecture — ZeroClaw Microkernel Transition | 8 | **核心贡献者对技术债务的集体焦虑**。v0.7.0 → v1.0.0 的微内核转型是项目长期健康的赌注，讨论集中在模块边界、crate 拆分策略与迁移节奏。 |
| 4 | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) configure GitHub copilot as provider | 7 | **GitHub Copilot 生态接入需求旺盛**。`zeroclaw onboard` 未暴露 Copilot 选项，用户被迫手动编辑 `config.toml`， onboarding 体验断裂。 |
| 5 | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) where is napcat channel | 6 | **中国/QQ 生态用户需求**。NapCat（OneBot 11）通道缺失，用户从 OpenClaw 迁移时功能对不齐。 |

### 热点分析

- **入门体验** 与 **生态覆盖**（Copilot、NapCat、Matrix）是用户增长的双刃剑：做好则破圈，缺失则流失。
- **架构 RFC 系列** 获得核心开发者高度参与，说明社区共识正在从"功能冲刺"转向"可持续工程"。

---

## 5. Bug 与稳定性

按严重程度排列，标注 fix PR 状态：

| 严重度 | Issue/PR | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **S0** | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | **上下文泄漏**：Discord 聊天上下文泄露到 schedule 执行中，存在数据边界突破与安全风险 | ❌ 无 fix PR |
| **S0** | [#3508](https://github.com/zeroclaw-labs/zeroclaw/issues/3508) | Web Dashboard not loading（历史 issue，今日关闭） | ✅ 已关闭 |
| **S1** | [#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685) | **CLI channel factory 未注册**，`zeroclaw agent` 模式崩溃 | ❌ 无 fix PR |
| **S1** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard / Tauri 桌面端不可用（今日关闭） | ✅ 已关闭 |
| **S2** | [#5360](https://github.com/zeroclaw-labs/zeroclaw/issues/5360) | `codex_cli` 工具向 Codex CLI v0.118.0 传递不支持的 `-q` 参数 | ❌ 无 fix PR |
| **S2** | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | GitHub Copilot 无法在 onboarding 中选择 | ❌ 无 fix PR |
| **S2** | [#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562) | Windows shell 执行闪 cmd 窗口（今日关闭） | ✅ 已关闭 |
| **S2** | [#5755](https://github.com/zeroclaw-labs/zeroclaw/issues/5755) | Prometheus backend 识别失败（今日关闭） | ✅ 已关闭 |
| **CI/发布阻塞** | [#5811](https://github.com/zeroclaw-labs/zeroclaw/issues/5811) | 微内核拆分后 root crate `cargo publish` 失败，v0.7.0 发布管道断裂 | 🔄 [#5812](https://github.com/zeroclaw-labs/zeroclaw/pull/5812) 已提交，待合并 |

### 今日新增/活跃的 Bugfix PR

| PR | 说明 | 风险 |
|:---|:---|:---|
| [#5777](https://github.com/zeroclaw-labs/zeroclaw/pull/5777) | 修复流式 `reasoning_content` 在 `AssistantToolCalls` 上丢失 | high |
| [#5790](https://github.com/zeroclaw-labs/zeroclaw/pull/5790) | Telegram 通道增加 inline_keyboard 工具审批交互 | high |
| [#5793](https://github.com/zeroclaw-labs/zeroclaw/pull/5793) | 修复 webhook `tokens_used` 始终为 null | high |
| [#5794](https://github.com/zeroclaw-labs/zeroclaw/pull/5794) | 修复非代理 WebSocket 路径中缓冲区丢失 | medium |
| [#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796) | 过滤 channel 响应中的 XML `tool_result` 块 | medium |
| [#5804](https://github.com/zeroclaw-labs/zeroclaw/pull/5804) | 补全所有 agent session 类型的 OTEL trace 管道 | high |
| [#5806](https://github.com/zeroclaw-labs/zeroclaw/pull/5806) | 仅对 Z.AI provider 发送 `tool_stream`，避免 litellm 400 错误 | low |

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) 微内核架构转型 | 核心架构重构 | **高（已部分落地）** | #5559 已合并，#5805 发布准备中 |
| [#5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579) CI/CD 与发布自动化 | 工程基础设施 | **高** | #5812 直接响应，v0.7.0 发布必需 |
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) 替换 TOML i18n 为 Mozilla Fluent | 国际化引擎替换 | 中 | 有明确方案，但涉及大量字符串迁移，可能 v0.8.0 |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) NapCat / OneBot 11 通道 | 中国 IM 生态支持 | 中 | 需求明确，但无 PR，需评估维护成本 |
| [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) Mattermost oncall 模式 | 企业协作场景 | 中 | 有 OpenClaw 先例，技术路径清晰 |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) Webhook transforms | 通用 Webhook 适配 | 低-中 | 需求合理但设计空间大，长期 stale |
| [#5105](https://github.com/zeroclaw-labs/zeroclaw/pull/5105) Anthropic 兼容端点 onboarding | 提升 onboarding 覆盖 | **高** | PR 已开，与 #4851 Copilot 需求同属 onboarding 改进 |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) TOTP 门控 shell 命令（phase 1） | 安全加固 | **高** | 安全相关，PR 已开且关联 #3767 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实声音：

### 😤 痛点
- **"Web dashboard not available" 反复折磨新用户**：[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) 中多名用户表示该问题"跨多个版本持续存在"，严重损害第一印象。
- **onboarding 生态覆盖不足**：Copilot、Anthropic、Azure OpenAI 等主流/半主流端点配置困难，用户被迫手动编辑 TOML（[#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)、[#5105](https://github.com/zeroclaw-labs/zeroclaw/pull/5105)）。
- **Windows 体验粗糙**：shell 执行闪黑窗、Tauri 构建问题反复出现（[#5562](https://github.com/zeroclaw-labs/zeroclaw/issues/5562)）。
- **文档与安装脚本脱节**：30+ 翻译文档引用已移除的 `install.sh` 参数（[#5679](https://github.com/zeroclaw-labs/zeroclaw/issues/5679)）。

### 😊 满意/期待
- **Matrix E2EE 修复后用户积极反馈**：[#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) 的逐项完成让企业用户看到隐私部署希望。
- **架构 RFC 获得核心用户认可**：WareWolf-MoonWall 的系列文档被评论为"项目需要的清醒剂"，长期贡献者愿意跟随 v0.7.0 → v1.0.0 的转型节奏。

### 🎯 典型使用场景
- **多通道企业部署**：Discord/Telegram + Webhook + Matrix 混合使用，对通道隔离（[#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)）和可观测性（[#5804](https://github.com/zeroclaw-labs/zeroclaw/pull/5804)）要求极高。
- **国产化/区域化 IM 接入**：QQ（NapCat/OneBot）是中国用户的硬需求（[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)）。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或存在风险，建议维护者优先关注：

| 项 | 创建时间 | 状态 | 风险说明 |
|:---|:---|:---|:---|
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) NapCat 通道 | 2026-03-02 | stale | 区域用户流失风险，需明确"接受社区 PR"或"列入路线图" |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) Webhook transforms | 2026-03-02 | stale | 通用 Webhook 可用性瓶颈，设计回应后可转 RFC |
| [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) Mattermost oncall 模式 | 2026-03-10 | in-progress | 有 👍2，企业用户明确需求，建议分配 reviewer |
| [#5086](https://github.com/zeroclaw-labs/zeroclaw/pull/5086) aarch64 运行时架构检测 | 2026-03-29 | open | 边缘设备（Raspberry Pi）部署阻塞，技术方案清晰，缺 review |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) 上下文泄漏 | 2026-04-06 | open, S0 | **数据安全级 bug**，无 fix PR，需立即分配核心开发者 |
| [#5811](https://github.com/zeroclaw-labs/zeroclaw/issues/5811) + [#5812](https://github.com/zeroclaw-labs/zeroclaw/pull/5812) 发布管道断裂 | 2026-04-16 | open | **v0.7.0 发布阻塞**，PR 已提交建议加速 review 合并 |

---

*日报生成时间：2026-04-17*  
*数据来源：zeroclaw-labs/zeroclaw GitHub 公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*