# OpenClaw 生态日报 2026-04-04

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-04 00:10 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-04-04

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内产生 **500 条 Issues 更新**（380 新开/活跃，120 关闭）和 **500 条 PR 更新**（314 待合并，186 已合并/关闭），无新版本发布。社区聚焦**稳定性修复**与**企业级功能完善**，Matrix/Discord/WhatsApp 等渠道可靠性改进成为主线，同时 Agent 身份验证、MCP 协议支持等前沿需求持续升温。项目整体健康度良好，但 cron/heartbeat 子系统的近期回归问题需重点关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心改进 | 状态 |
|:---|:---|:---|:---|
| [#59515](https://github.com/openclaw/openclaw/pull/59515) | hclsys | **修复 heartbeat 会话键无限累加**：阻止 `:heartbeat` 后缀重复追加导致的 `agent:main:main:heartbeat:heartbeat...` 异常 | ✅ 已合并 |
| [#60124](https://github.com/openclaw/openclaw/pull/60124) | hclsys | **完善循环检测器**：为 `generic_repeat` 添加 `criticalThreshold` 检查，使重复工具调用可被阻断而非仅警告 | ✅ 已合并 |
| [#57190](https://github.com/openclaw/openclaw/pull/57190) | medusa527 | **持久化 fallback 模型覆盖**：跨 provider 故障转移前保存会话状态，避免 stale profile 问题 | ✅ 已合并 |
| [#60384](https://github.com/openclaw/openclaw/pull/60384) | sfuminya | **修复 Telegram 模型选择器**：比较完整 `provider/model` 路径而非仅 model ID，避免 `github-copilot/gpt-5.4` 与 `openai-codex/gpt-5.4` 误判 | ✅ 已合并 |
| [#47513](https://github.com/openclaw/openclaw/pull/47513) | jeffrey4341 | **WhatsApp 空闲会话保活**：停止将无入站消息的活跃连接误判为 stale socket | ✅ 已合并 |
| [#50591](https://github.com/openclaw/openclaw/pull/50591) | LynchXLQ | **WhatsApp 健康检查优化**：可配置 ping 机制减少重连期间消息丢失 | ✅ 已合并 |
| [#24540](https://github.com/openclaw/openclaw/pull/24540) | LynchXLQ | **WhatsApp 双向活动追踪**：出站消息也更新 `lastMessageAt`，防止纯推送场景误断连 | ✅ 已合并 |
| [#42885](https://github.com/openclaw/openclaw/pull/42885) | SmileLikeYe | **WhatsApp 死连接检测**：修复无消息接收时 watchdog 跳过重连的问题 | ✅ 已合并 |
| [#60588](https://github.com/openclaw/openclaw/pull/60588) | thiago95macedo | **Docker CLI 别名自动化**：WSL/Docker 环境自动配置 `openclaw` 快捷命令 | ✅ 已合并 |

**整体推进评估**：今日合并 PR 集中在**连接稳定性**（WhatsApp/Matrix）和**状态一致性**（heartbeat/cron）两大主题，显著提升了生产环境可靠性。WhatsApp 子系统完成系统性加固，从空闲保活到死连接检测形成完整闭环。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) | **118** | i18n 本地化支持 | 社区强烈需求 vs 维护者带宽不足的**经典张力**；用户已提交多语言 PR 但缺乏 review 资源，需建立社区本地化工作组 |
| [#75](https://github.com/openclaw/openclaw/issues/75) | **67** | Linux/Windows 原生 Clawdbot 应用 | 跨平台桌面客户端缺口，macOS/iOS/Android 已完成，**PC 端成为生态短板**；66 👍 反映企业用户部署需求 |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | **62** | 原生 Agent 身份与信任验证 | 企业级安全需求升温，提案结合 ERC-8004 + W3C DID/VC 标准，**标志着 OpenClaw 向可验证计算基础设施演进** |
| [#52885](https://github.com/openclaw/openclaw/issues/52885) | **44** | 微信插件与 2026.3.22+ 不兼容 | **中国生态关键阻断**：ESM 导入路径变更导致插件崩溃，影响大量国内用户；需紧急 backport 修复或发布迁移指南 |
| [#38902](https://github.com/openclaw/openclaw/issues/38902) | **21** | HTTP 422 "check open ai req parameter error" | 本地模型（QWEN/DeepSeek）部署场景的配置陷阱，文档与错误提示待优化 |

### 🔥 高价值 PR 预览

| PR | 亮点 | 潜在影响 |
|:---|:---|:---|
| [#60600](https://github.com/openclaw/openclaw/pull/60600) | Gemini API key 从 URL query 移至 header | **安全合规关键修复**，防止 key 泄露至代理/CDN 日志 |
| [#60590](https://github.com/openclaw/openclaw/pull/60590) | Plugin SDK 配置向导 TUI | **开发者体验重大提升**，降低插件接入门槛 |
| [#60519](https://github.com/openclaw/openclaw/pull/60519) | You.com 搜索插件 | 搜索生态扩展，对标 Tavily |

---

## 5. Bug 与稳定性

### 🚨 严重/高优先级

| Issue | 严重程度 | 描述 | 状态 |
|:---|:---|:---|:---|
| [#59827](https://github.com/openclaw/openclaw/issues/59827) | **回归** | **2026.4.1 工具调用失效**：所有 tool calls 显示为纯文本而非执行，核心功能断裂 | 🔴 无 fix PR |
| [#59678](https://github.com/openclaw/openclaw/issues/59678) | **回归** | **2026.4.1 cron 任务超时**：`agents.defaults.timeoutSeconds` 被忽略，66秒强制超时 | 🔴 无 fix PR |
| [#40082](https://github.com/openclaw/openclaw/issues/40082) | **回归** | Agent 接受任务但不执行，返回占位符回复，活动日志可见性不一致 | 🟡 PR #47994 相关 |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) | **稳定性** | Discord WebSocket 1005/1006 断连，resume 失败，指数退避无界增长 | 🟡 长期 issue |
| [#59098](https://github.com/openclaw/openclaw/issues/59098) | **兼容性** | Ollama (qwen2.5:1.5b) 超时，直连 Ollama 正常 | 🟡 待诊断 |

### ⚠️ 中等优先级

| Issue | 描述 | 关联 PR |
|:---|:---|:---|
| [#51056](https://github.com/openclaw/openclaw/issues/51056) | OpenRouter 401 Missing Authentication header | 无 |
| [#59826](https://github.com/openclaw/openclaw/issues/59826) | stepfun/step-3.5-flash thinking 内容泄露至频道 | 无 |
| [#53189](https://github.com/openclaw/openclaw/issues/53189) | `/status` 命令升级后仅显示 "Done" 无状态卡片 | 无 |
| [#52221](https://github.com/openclaw/openclaw/issues/52221) | Context monitor 永远显示 0%，contextTokens 硬编码 | 无 |

**关键预警**：**2026.4.1 版本存在两个核心回归**（工具调用失效 + cron 超时），建议用户暂缓升级或准备回滚方案。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---|
| [#29053](https://github.com/openclaw/openclaw/issues/29053) | **MCP Client 原生支持** | ⭐⭐⭐⭐⭐ | **15 👍**，PR #29793 已合并工作区锁，MCP 是 OpenClaw 工具生态的**战略必选项** |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | Agent 身份与信任验证 | ⭐⭐⭐⭐☆ | 企业安全合规刚需，标准成熟（DID/VC），需架构层面支持 |
| [#59510](https://github.com/openclaw/openclaw/issues/59510) | 简化 exec 审批流程 | ⭐⭐⭐⭐☆ | 用户体验痛点明确，PR 就绪度高 |
| [#54239](https://github.com/openclaw/openclaw/pull/54239) | cron/heartbeat preHook 前置检查 | ⭐⭐⭐⭐☆ | 边缘部署刚需，PR 已开 |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | Typecast TTS 提供商 | ⭐⭐⭐☆☆ | 亚洲语言/情感预设差异化能力 |

**下一版本预测**：MCP 原生支持、简化审批流程、preHook 机制大概率进入 2026.4.x；身份验证需更长设计周期。

---

## 7. 用户反馈摘要

### 💬 真实痛点

> *"The current exec command approval process is overly complicated, severely impacting usability"* — [#59510](https://github.com/openclaw/openclaw/issues/59510)

> *"Need to set `/approve xxx allow-always` for each individual command... Dozens of common commands"* — 同上

> *"Cron jobs that previously worked are now failing"* — [#59678](https://github.com/openclaw/openclaw/issues/59678)

> *"After upgrading to 2026.4.1, all tool calls are displayed as plain text"* — [#59827](https://github.com/openclaw/openclaw/issues/59827)

### ✅ 满意场景

- WhatsApp 稳定性近期明显改善（多 PR 合并）
- Docker/WSL 部署体验优化（[#60588](https://github.com/openclaw/openclaw/pull/60588)）

### ❌ 不满焦点

| 主题 | 表现 | 代表 Issue |
|:---|:---|:---|
| 版本回归测试不足 | 2026.4.1 连续严重 bug | #59827, #59678 |
| 本地模型支持文档 | QWEN/DeepSeek/Ollama 配置陷阱 | #38902, #59098 |
| 中国企业级需求响应 | 微信插件兼容性、钉钉/飞书支持 | #52885 |

---

## 8. 待处理积压

### ⏰ 长期未响应（>30天，高价值）

| Issue | 天数 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#27732](https://github.com/openclaw/openclaw/issues/27732) | 37天 | 本地模型性能优化，prefix caching 关键 | 标记 `good first issue`，吸引 MLX 社区贡献 |
| [#22085](https://github.com/openclaw/openclaw/issues/22085) | 43天 | `--session-id` 不创建隔离会话，CLI 语义混乱 | 文档澄清或修复，避免用户误解 |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | 42天 | Signal daemon 竞态条件，孤儿进程 | 稳定性风险，需核心开发者介入 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 35天 | `agentDir` bootstrap 文件被静默忽略 | 配置系统一致性 bug |

### 🔔 维护者特别提醒

- **#52885 微信插件兼容性**：中国用户核心入口，建议 48 小时内响应
- **#3460 i18n 本地化**：考虑建立社区本地化 SIG，分散维护压力
- **2026.4.1 回归问题**：建议紧急发布 2026.4.2 或撤回 2026.4.1

---

*日报生成时间：2026-04-04 | 数据来源：GitHub openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手开源生态横向分析报告 | 2026-04-04

---

## 1. 生态全景

个人 AI 助手开源生态呈现**"一超多强、垂直分化"**格局：OpenClaw 以日均 1000+ 代码变更维持绝对领先地位，但 NanoBot、CoPaw、LobsterAI 等第二梯队通过差异化定位（稳定性、企业集成、多模态）快速蚕食细分场景。整体技术焦点从"功能可用"向"生产就绪"跃迁——MCP 协议、身份验证、并发架构、安全沙箱成为共同演进方向。值得注意的是，Anthropic 等上游平台政策变化（OAuth 计费规则调整）正引发连锁反应，迫使项目重新评估合规与成本结构。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 (380新开/活跃, 120关闭) | 500 (314待合并, 186已合并/关闭) | 无 | 🟢 **极高活跃** — 吞吐量领先，但 2026.4.1 回归问题需警惕 |
| **NanoBot** | 14 | 111 (93待合并, 18已合并/关闭) | 无 | 🟢 **高活跃** — 稳定性口碑突出，国产模型接入积极 |
| **LobsterAI** | 38 (28活跃, 10关闭) | 50 (19待合并, 31已合并/关闭) | **2026.4.3 / 2026.4.1 / 2026.3.31** | 🟡 **高活跃但有风险** — 版本迭代快，4.1 网关循环重启为 P0 事故 |
| **CoPaw** | 50 (37活跃, 13关闭) | 33 (16待合并, 17已合并/关闭) | **v1.0.1 / v1.0.1-beta.2** | 🟢 **高活跃** — 版本发布稳健，安全事件 #2884 需关注 |
| **IronClaw** | 32 (29活跃) | 50 (40待合并) | 无 | 🟡 **高活跃但承压** — Bug Bash 暴露生产稳定性危机 |
| **PicoClaw** | 32 (21活跃, 11关闭) | 58 (19待合并, 39已合并/关闭) | **v0.2.5** | 🟢 **高活跃** — 嵌入式/ARM 定位清晰，#2307 RCE 漏洞需紧急响应 |
| **NanoClaw** | 6 | 27 (10待合并, 17已合并/关闭) | 无 | 🟢 **中高活跃** — Apple Container 生态深耕，Anthropic 政策冲击应对中 |
| **Moltis** | 6 (全部新开) | 3 (2待合并, 1关闭) | 无 | 🟡 **中等活跃** — 浏览器可视化 (#531) 和 Matrix (#500) 接近落地 |
| **ZeptoClaw** | — | 7 (5待合并, 6已合并/关闭) | 无 | 🟡 **中高活跃** — 依赖维护自动化高，功能 PR 积压待审 |
| **NullClaw** | 2 | 1 (已关闭无合并) | 无 | 🔴 **低活跃/维护模式** — 零代码合并，Docker 部署阻塞 |
| **EasyClaw** | 1 | 0 | 无 | 🔴 **极低活跃** — 近乎停滞，仅配置体验问题报告 |
| **TinyClaw** | 0 | 0 | 无 | ⚫ **无活动** |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | 表现 | 数据支撑 |
|:---|:---|:---|
| **绝对规模** | 社区吞吐量超第 2-5 名总和 | 500 Issues + 500 PRs / 24h |
| **企业功能深度** | Agent 身份验证、MCP 协议、多租户隔离领先 | #49971 (67评论), #29053 (MCP 15👍) |
| **渠道覆盖** | Matrix/Discord/WhatsApp/Telegram 全矩阵企业级可靠性 | 今日 9 个 WhatsApp 稳定性 PR 合并 |
| **生态标准** | 作为"核心参照"被竞品用户主动对比 | NanoBot #2774 用户反馈"完爆 OpenClaw" |

### 技术路线差异
| 对比项 | OpenClaw | 主要竞品 |
|:---|:---|:---|
| **架构哲学** | 模块化插件 + 企业级治理 | NanoBot: 一体化稳定性优先; PicoClaw: 嵌入式极简 |
| **安全模型** | ERC-8004 + W3C DID/VC 标准探索 (#49971) | 多数项目聚焦基础沙箱 (Landlock/Firejail) |
| **扩展机制** | Plugin SDK + MCP 双轨 | 单一工具注册表或硬编码 |
| **部署形态** | Docker/K8s 云原生优先 | PicoClaw: ARM/Termux 边缘; NanoClaw: Apple Container 原生 |

### 社区规模对比
- **贡献者基数**: OpenClaw 日均 50+ 独特贡献者 vs. NanoBot ~15 vs. 其他 <10
- **企业用户渗透**: OpenClaw #3460 i18n 需求反映跨国部署；IronClaw #902 Google OAuth 封锁事件显示其企业依赖度
- **负面信号**: 2026.4.1 版本连续严重回归 (#59827 工具调用失效, #59678 cron 超时)，版本测试流程承压

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与信号强度 |
|:---|:---|:---|
| **MCP 协议原生支持** | OpenClaw (#29053 ⭐⭐⭐⭐⭐), PicoClaw (#2308 已合并), IronClaw (MCP 工具生态) | 工具生态标准化，避免重复造轮子；OpenClaw 15👍 为今日最高功能请求 |
| **身份验证与信任** | OpenClaw (#49971 Agent 身份验证), NanoClaw (OAuth vs API Key 策略调整 #1224), IronClaw (安全事件日志 #1956) | 从"能跑"到"可信"，企业合规刚需 |
| **并发/非阻塞架构** | ZeptoClaw (#486 真并发请求), IronClaw (Routine 执行稳定性 #1996), CoPaw (空闲 CPU 100% #2888) | 长任务不阻塞交互，生产环境核心诉求 |
| **浏览器自动化可视化** | Moltis (#531 CDP 实时投屏), ZeptoClaw (#459 BrowserTool), CoPaw (browser_use 修复) | 降低调试门槛，提升多模态交互体验 |
| **上下文/记忆管理** | PicoClaw (#2285 Seahorse 记忆引擎), ZeptoClaw (#460 多层上下文压缩), OpenClaw (heartbeat 会话键修复 #59515) | 长对话稳定性，token 溢出防护 |
| **中国企业 IM 生态** | Moltis (#383 飞书/钉钉 ⭐⭐⭐⭐⭐), NanoBot (微信/飞书/QQ 持续优化), LobsterAI (飞书多机器人 #1458), CoPaw (QQ OneBot #2870) | 本土化部署刚需，网络代理与合规并行 (#548) |
| **安全沙箱加固** | PicoClaw (#2313 Agent Shield + #2307 RCE 漏洞), ZeptoClaw (#463 Landlock 修复), CoPaw (#2917 工具安全防护) | 权限边界清晰化，生产环境隔离 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 全功能企业平台、多租户、合规认证 | 跨国企业 IT 部门、SaaS 服务商 | 高度模块化，插件生态，K8s 原生 |
| **NanoBot** | 极致稳定性、国产模型生态 | Windows 长期运行个人用户、国内企业 | 一体化架构，QWEN/DeepSeek/MiMo 深度优化 |
| **LobsterAI** | 快速迭代、多供应商、IM 集成 | 追求功能前沿的中小团队、多模型策略用户 | 密集版本发布，Electron 桌面端，主题系统 |
| **CoPaw** | 多智能体协作、开发者体验 | AI 应用开发者、研究型用户 | AgentScope 学术背景，控制台优先，技能系统 |
| **IronClaw** | NEAR 生态整合、区块链工具链 | Web3/加密原生开发者、去中心化应用 | Rust 核心，NEAR Intents 基础设施定位 |
| **PicoClaw** | 嵌入式/ARM/边缘计算 | 树莓派/Termux 用户、IoT 开发者 | Go 语言，极简二进制，Android 原生支持 |
| **NanoClaw** | Apple Container/macOS 原生 | macOS 开发者、苹果生态深度用户 | Swift/Obj-C 桥接，OneCLI 工具链 |
| **Moltis** | 浏览器自动化、可视化交互 | 需要网页数据抓取/自动化的业务用户 | CDP 深度集成，实时投屏交互 |
| **ZeptoClaw** | 安全沙箱、轻量级研究助手 | 安全敏感场景、个人知识工作者 | Landlock 默认启用，多层防御设计 |
| **NullClaw/EasyClaw/TinyClaw** | — | — | 维护停滞或边缘化 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（功能扩张期）
| 项目 | 特征 | 关键指标 |
|:---|:---|:---|
| **OpenClaw** | 吞吐量最大，但质量波动 | 500 PRs/日，2026.4.1 回归事故 |
| **LobsterAI** | 版本发布最密集 | 3 版本/4 天，功能交付快于稳定性验证 |
| **IronClaw** | Bug Bash 驱动，生产问题暴露 | 11 个 bug_bash 标签 Issue，OAuth/Slack 危机 |
| **CoPaw** | 版本节奏稳健，安全事件应对 | v1.0.1 发布，#2884 安全调查进行中 |

### 🛡️ 质量巩固阶段（稳定性优先）
| 项目 | 特征 | 关键指标 |
|:---|:---|:---|
| **NanoBot** | 口碑驱动，"完爆 OpenClaw" 稳定性认证 | 用户主动竞品对比 #2774，低回归率 |
| **PicoClaw** | 安全架构重构，嵌入式场景深耕 | v0.2.5 发布，#2313 Agent Shield 推进 |
| **NanoClaw** | 平台特异性优化，政策响应敏捷 | Apple Container 网络修复 #1609，Anthropic 文档更新 #1620 |

### ⚠️ 转型/风险期
| 项目 | 特征 | 风险信号 |
|:---|:---|:---|
| **Moltis** | 企业功能接近落地，但治理透明度不足 | 40 待合并 PR，#545 版本周期询问无回应 |
| **ZeptoClaw** | 基础设施维护强，功能交付慢 | 6 个依赖 PR 批量合并，#459/#460 功能 PR 积压 7 天 |
| **NullClaw/EasyClaw** | 活跃度骤降，维护模式 | 零代码合并，核心 Issue 无响应 |

---

## 7. 值得关注的趋势信号

### 信号一：上游平台政策冲击波
> **来源**: NanoClaw #1224, #1608, #1620; 波及 OpenClaw 生态

Anthropic OAuth 计费规则变更（"third-party harnesses 走 extra usage"）迫使项目重新评估 Claude 集成策略。信号：**AI 助手项目需建立多提供商韧性，避免单一平台锁定**。

### 信号二：从"功能清单"到"生产契约"
> **来源**: 多项目并发架构请求 (#486, #1996, #2888), 安全事件 (#2884, #2307, #547)

用户诉求从"有没有"转向"稳不稳"——空闲 CPU 占用、长任务阻塞、数据安全事件成为核心痛点。信号：**2026 年 H2 竞争焦点将是可观测性、SLO 承诺、安全审计**。

### 信号三：中国企业市场成为必争之地
> **来源**: Moltis #383 (6👍), NanoBot 微信/飞书/QQ, LobsterAI 飞书多机器人, CoPaw QQ OneBot

飞书/钉钉支持请求为今日最高赞功能请求之一，网络代理配置 (#548) 与合规并行。信号：**本土化 IM 集成、企业微信生态、国产模型适配（QWEN/DeepSeek/MiMo）是差异化关键**。

### 信号四：MCP 协议成为事实标准
> **来源**: OpenClaw #29053 (15👍), PicoClaw #2308 已合并, IronClaw MCP 生态

社区从"自建工具注册表"向"MCP 兼容"快速收敛。信号：**工具生态互操作性将决定项目长期价值，孤立系统面临边缘化风险**。

### 信号五：可视化交互降低门槛
> **来源**: Moltis #531 (浏览器实时投屏), ZeptoClaw #459 (BrowserTool), 多项目 TUI 优化

浏览器自动化从"黑盒脚本"转向"可观测、可干预"的交互模式。信号：**多模态交互的调试体验将成为开发者工具核心竞争力**。

---

**报告生成**: 2026-04-04  
**分析范围**: 12 个活跃/半活跃开源项目  
**建议关注**: OpenClaw 2026.4.2 热修复进展、LobsterAI #1400 网关问题验证、Moltis 飞书支持路线图

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-04

---

## 1. 今日速览

NanoBot 今日展现**极高社区活跃度**，24小时内产生 **111 条 PR 更新**（93 条待合并）和 **14 条 Issues 更新**，是近期少有的活跃高峰。核心开发节奏稳健，18 条 PR 已合并/关闭，涵盖渠道增强、Provider 扩展、工具配置优化等关键领域。社区生态持续繁荣，第三方 WebUI 项目 [nanobot-webui](https://github.com/Good0007/nanobot-webui) 获得官方关注，同时用户主动对比竞品 OpenClaw 并给出高度稳定性评价。技术债务方面，内存固化、模型兼容性等历史问题仍有待解决，但整体项目健康度良好，向 v0.2.0 迈进的信号明确。

---

## 2. 版本发布

**无新版本发布**

> 当前最新版本仍为 v0.1.4.post6，社区对 v0.2.0 的期待持续升温。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（18 条）

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#2761](https://github.com/HKUDS/nanobot/pull/2761) | pikaxinge | **重试机制增强**：修复 `Retry-After` 头部被忽略的问题，现在尊重 Provider 返回的等待提示 | ⭐⭐⭐ 高：减少 API 限流导致的失败 |
| [#2743](https://github.com/HKUDS/nanobot/pull/2743) | Shiniese | **安全策略修复**：`restrict_to_workspace` 启用时支持访问 media 目录 | ⭐⭐⭐ 高：解决安全与功能的冲突 |
| [#2643](https://github.com/HKUDS/nanobot/pull/2643) | Shiniese | **Web 工具配置统一**：引入 `WebToolsConfig` 统一搜索配置，支持运行时禁用 Web 工具 | ⭐⭐⭐ 高：架构清理，提升可控性 |
| [#2770](https://github.com/HKUDS/nanobot/pull/2770) | LingaoM | **推理链支持**：OpenAI 兼容 Provider 支持 `reasoning_content` 提取（MiMo、DeepSeek-R1） | ⭐⭐⭐ 高：解锁推理模型完整能力 |
| [#2495](https://github.com/HKUDS/nanobot/pull/2495) | LingaoM | **新 Provider**：新增小米 MiMo LLM 支持 | ⭐⭐⭐ 高：国产模型生态扩展 |
| [#2646](https://github.com/HKUDS/nanobot/pull/2646) | cypggs | **微信渠道修复**：恢复输入状态指示器（typing indicator） | ⭐⭐ 中：用户体验提升 |
| [#2769](https://github.com/HKUDS/nanobot/pull/2769) | chengyongru | **渠道增强包**：Telegram 支持带 @bot 后缀的命令，QQ 渠道多项修复 | ⭐⭐⭐ 高：多平台稳定性提升 |
| [#2745](https://github.com/HKUDS/nanobot/pull/2745) | imfondof | **重启体验优化**：确保重启完成后才发送通知，避免用户困惑 | ⭐⭐ 中：运维体验 |
| [#2776](https://github.com/HKUDS/nanobot/pull/2776) | JiajunBernoulli | **飞书体验优化**：消息处理完成后自动移除 reaction 表情 | ⭐⭐ 中：响应 Issue #2750 |

**整体推进评估**：今日合并聚焦 **"稳定性 + 扩展性"** 双主线，推理链支持和国产模型接入标志着 NanoBot 正在从"功能可用"向"企业级可用"演进。

---

## 4. 社区热点

### 🔥 最活跃讨论

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#1922](https://github.com/HKUDS/nanobot/issues/1922) nanobot-webui 第三方管理面板 | **8 评论** | 社区生态里程碑：用户自发构建完整 WebUI，获 6 👍。诉求核心：官方是否考虑集成或官方化？ |
| 2 | [#2185](https://github.com/HKUDS/nanobot/issues/2185) Gemini-3-Flash 回归问题 | **6 评论** | 版本升级导致的模型兼容断裂，用户配置未变但行为异常，暴露版本兼容性测试缺口 |
| 3 | [#2774](https://github.com/HKUDS/nanobot/issues/2774) 与 OpenClaw 实测对比 | **4 评论** | **口碑型 Issue**：Windows 长期用户主动反馈 NanoBot"完爆 OpenClaw"，稳定性获实证认可 |
| 4 | [#2744](https://github.com/HKUDS/nanobot/issues/2744) LLM 请求被拦截 | **4 评论** | 已关闭，但反映安全策略与可用性的平衡难题 |

**背后诉求洞察**：
- **生态整合需求**：用户希望官方对优秀社区项目（如 webui）给予背书或集成
- **质量承诺需求**：版本升级不破坏现有配置是底线期望
- **竞品对比焦虑**：用户主动选择 NanoBot，需要稳定性保障来巩固决策

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | v0.1.4 → v0.1.4post5 升级后 Gemini-3-Flash-Preview 失效 | 🟡 Open | 无 |
| 🔴 **高** | [#2737](https://github.com/HKUDS/nanobot/issues/2737) | v0.1.4.post6 + MiniMax 内存固化致命错误 | 🟢 Closed | 疑似相关：[#2717](https://github.com/HKUDS/nanobot/pull/2717) 两阶段内存系统 |
| 🟡 **中** | [#2450](https://github.com/HKUDS/nanobot/issues/2450) | minimax-m2.7 通过 Ollama Cloud 第2+请求失败 | 🟡 Open | 无 |
| 🟡 **中** | [#2749](https://github.com/HKUDS/nanobot/issues/2749) | 美团 LongCat-Flash-Chat 工具调用格式异常输出 | 🟡 Open | 无 |
| 🟡 **中** | [#2775](https://github.com/HKUDS/nanobot/issues/2775) | 工具调用失效，仅输出文字不执行 | 🟡 Open | 无 |
| 🟡 **中** | [#2777](https://github.com/HKUDS/nanobot/issues/2777) | 自定义模型 reasoning_content 处理 Bug | 🟡 Open | [#2770](https://github.com/HKUDS/nanobot/pull/2770) 已部分解决 |
| 🟢 **低** | [#2696](https://github.com/HKUDS/nanobot/issues/2696) | 钉钉发送 HTML 文件报错 | 🟡 Open | 无 |

**稳定性评估**：MiniMax 相关 Issue 已关闭，但 Gemini 和美团模型的问题显示 **Provider 适配层** 仍是脆弱环节。建议加强回归测试矩阵。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 信号强度 | 可行性评估 |
|:---|:---|:---:|:---|
| **官方 WebUI 集成** | [#1922](https://github.com/HKUDS/nanobot/issues/1922) | ⭐⭐⭐⭐⭐ | 高：社区已实现，官方可考虑 fork 或合作 |
| **自定义/禁用 🐈 Emoji** | [#2747](https://github.com/HKUDS/nanobot/issues/2747) | ⭐⭐⭐⭐⭐ | 极高：单文件修改，good first issue |
| **飞书任务完成 Emoji 反馈** | [#2750](https://github.com/HKUDS/nanobot/issues/2750) | ⭐⭐⭐⭐⭐ | 极高：[#2776](https://github.com/HKUDS/nanobot/pull/2776) 已实现 |
| **Agent Skills 官方认证** | [#2782](https://github.com/HKUDS/nanobot/issues/2782) | ⭐⭐⭐⭐ | 高：生态品牌建设，维护者需主动申请 |
| **两阶段内存系统（Dream 固化）** | [#2717](https://github.com/HKUDS/nanobot/pull/2717) | ⭐⭐⭐⭐⭐ | 高：大型重构 PR 待 review |
| **GPT-SoVITS TTS 支持** | [#2771](https://github.com/HKUDS/nanobot/pull/2771) | ⭐⭐⭐⭐ | 中高：功能完整，需评估维护成本 |
| **Exec 工具内部 URL 配置** | [#2784](https://github.com/HKUDS/nanobot/pull/2784) | ⭐⭐⭐⭐ | 高：安全相关，测试完善 |
| **Jinja2 模板化响应** | [#2779](https://github.com/HKUDS/nanobot/pull/2779) | ⭐⭐⭐⭐ | 中高：架构级改动，需仔细 review |

**下一版本预测**：v0.1.5 或 v0.2.0 可能包含：Jinja2 模板系统、两阶段内存、TTS 支持、更多国产模型。

---

## 7. 用户反馈摘要

### ✅ 满意点
> *"nanobot 非常稳定，完爆 openclaw。openclaw 不知道重装多少次了，还中毒两次...而 nanobot 一如既往的稳定"* — [#2774](https://github.com/HKUDS/nanobot/issues/2774)

**关键洞察**：Windows 长期运行稳定性得到实证，这是 NanoBot 的核心竞争力。

### ❌ 痛点
| 痛点 | 来源 | 频率 |
|:---|:---|:---:|
| 版本升级破坏现有配置 | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | 偶发但致命 |
| 特定模型（MiniMax、美团、Gemini）兼容性问题 | 多 Issue | 持续 |
| 微信消息历史限制（10条） | [#2772](https://github.com/HKUDS/nanobot/issues/2772) | 功能限制 |
| 工具调用偶尔失效（仅输出文字） | [#2775](https://github.com/HKUDS/nanobot/issues/2775) | 偶发 |

### 🎯 使用场景
- **企业飞书部署**：任务完成状态反馈需求明确
- **Windows 个人助手**：长期运行、低维护成本是核心诉求
- **多模型切换**：国产模型（MiniMax、MiMo、美团）接入需求旺盛

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| Issue/PR | 创建时间 | 问题 | 风险 |
|:---|:---|:---|:---|
| [#1922](https://github.com/HKUDS/nanobot/issues/1922) | 2026-03-12 | WebUI 生态整合无官方回应 | 社区项目可能分叉或停滞 |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | 2026-03-17 | Gemini 回归问题 17 天未解决 | 影响 Google 模型用户信任 |
| [#2631](https://github.com/HKUDS/nanobot/pull/2631) | 2026-03-30 | Agent Loop NoneType 防御性修复 | 高价值修复，review 积压 |
| [#2717](https://github.com/HKUDS/nanobot/pull/2717) | 2026-04-01 | 两阶段内存系统大型重构 | 架构级改动，需优先 review |
| [#2331](https://github.com/HKUDS/nanobot/pull/2331) | 2026-03-21 | Discord bot mention 剥离 | 渠道稳定性，已积压 14 天 |

**建议行动**：
1. 优先 review [#2717](https://github.com/HKUDS/nanobot/pull/2717) 内存系统重构，解决 [#2737](https://github.com/HKUDS/nanobot/issues/2737) 类致命错误
2. 对 [#1922](https://github.com/HKUDS/nanobot/issues/1922) 给出官方态度，避免生态项目流失
3. 建立 Provider 兼容性回归测试，防止 [#2185](https://github.com/HKUDS/nanobot/issues/2185) 类问题复发

---

*日报生成时间：2026-04-04 | 数据来源：HKUDS/nanobot GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-04

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内产生 **32 条 Issues 更新**（21 活跃/新开，11 关闭）和 **58 条 PR 更新**（19 待合并，39 已合并/关闭），并发布 **v0.2.5 稳定版**及夜间构建。社区焦点集中在**安全加固**（多用户隔离、标准登录流程）、**模型路由优化**与**嵌入式场景适配**三大方向。值得注意的是，今日出现一则**高危安全报告**（RCE 漏洞），维护团队需优先响应。

---

## 2. 版本发布

### v0.2.5 稳定版发布
**发布时间**：2026-04-03  
**完整变更日志**：[v0.2.5 Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.5)

| 提交 | 变更内容 | 影响面 |
|:---|:---|:---|
| `849e37c` | 从 TZ 和 ZONEINFO 环境变量加载时区信息 | 部署配置 |
| `26fa98c` | 按 Matrix CommonMark 指南对齐渲染 | Markdown 输出 |
| `bae4342` | `read_file` 工具支持按行读取 | 工具功能增强 |
| `bb2eddc` | *(提交截断)* | - |

**破坏性变更**：未发现  
**迁移建议**：Docker 用户可更新镜像标签至 `v0.2.5`；使用时区功能的用户现可通过标准环境变量配置，无需手动修改配置。

### Nightly Build
- **版本**：`v0.2.4-nightly.20260403.f542c929`
- **状态**：自动化构建，可能不稳定，建议测试环境使用

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（39 项中的核心进展）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#2316](https://github.com/sipeed/picoclaw/pull/2316) | zeroznet | 修复 CLI 帮助横幅重复 `v` 前缀（`vv0.2.5` → `v0.2.5`） | 发布质量打磨 |
| [#2308](https://github.com/sipeed/picoclaw/pull/2308) | afjcjsbx | MCP 超大文本结果自动存储为 artifacts（默认阈值 16KB） | 解决大输出场景内存问题 |
| [#2138](https://github.com/sipeed/picoclaw/pull/2138) | stevef1uk | **Agent Shield 安全套件 + 多用户隔离 + Skills 锁定** | 架构级安全加固（后被 #2313 取代） |
| [#1813](https://github.com/sipeed/picoclaw/pull/1813) | securityguy | CLI 工具调用提取鲁棒性增强（支持格式化 JSON、混合响应） | 提升 CLI 提供商可靠性 |
| [#1812](https://github.com/sipeed/picoclaw/pull/1812) | securityguy | Claude CLI 通过 stdin 传递系统提示（替代 CLI 参数） | 解决长提示参数溢出 |
| [#1811](https://github.com/sipeed/picoclaw/pull/1811) | securityguy | Launcher 正确识别外部管理的 Gateway 状态 | 避免重复启动冲突 |
| [#1810](https://github.com/sipeed/picoclaw/pull/1810) | securityguy | Gemini CLI 识别为免凭证提供商 | 简化本地模型配置 |
| [#1789](https://github.com/sipeed/picoclaw/pull/1789) | neotty | 出站消息新增 `Final` 字段 | 协议扩展 |
| [#1775](https://github.com/sipeed/picoclaw/pull/1775) | marcelloh | 修复 `go:generate` 跨平台兼容性（Windows） | 开发者体验 |

**整体评估**：今日合并聚焦**稳定性修复**（CLI 提供商鲁棒性、Launcher 状态管理）与**安全架构升级**（Agent Shield 多用户隔离），为 v0.3.x 的安全基线奠定基础。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#295](https://github.com/sipeed/picoclaw/issues/295) 智能模型路由（成本与性能优化） | 9 | 根据任务复杂度自动选择模型（GPT-4o ↔ 轻量模型） | **成本敏感型用户的核心痛点**；与 #1581（OpenRouter 回退链失效）形成呼应，需架构级解决方案 |
| 2 | [#639](https://github.com/sipeed/picoclaw/issues/639) Discord 图片发送失败 **[已关闭]** | 9 | 实现与 OpenClaw 一致的 Discord 图片发送能力 | 通道功能对等性诉求；已关闭说明修复完成 |
| 3 | [#350](https://github.com/sipeed/picoclaw/issues/350) 交互式 CLI 向导（零配置上手） | 8 | 降低非技术用户/嵌入式设备部署门槛 | **用户增长关键路径**；与 #988（3月路线图 WebUI 优化）直接相关 |
| 4 | [#286](https://github.com/sipeed/picoclaw/issues/286) Android Termux 部署文档 | 7 | 移动端/ARM 边缘场景支持 | 嵌入式定位的延伸需求 |
| 5 | [#293](https://github.com/sipeed/picoclaw/issues/293) 自主浏览器操作 | 6 👍6 | 网页自动化能力（Playwright/Selenium 路径选择） | **高优先级功能**（👍 最多）；与 #348（通用附件支持）共同扩展多模态边界 |

### 待合并的热点 PR

| PR | 评论状态 | 核心创新 | 合并前景 |
|:---|:---|:---|:---|
| [#2317](https://github.com/sipeed/picoclaw/pull/2317) + [#2318](https://github.com/sipeed/picoclaw/pull/2318) | 配对 PR（前后端） | **标准 HTTP 登录流程替代日志 token 认证**，bcrypt 密码存储 | 🔥 **高优先级**；解决 #350 用户上手痛点 |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | 取代 #2138 | Agent Shield + 多用户隔离 + Skills 白名单 | 安全架构主干，需代码审查 |
| [#2285](https://github.com/sipeed/picoclaw/pull/2285) | 新提交 | **Seahorse 短期记忆引擎**（SQLite + DAG 摘要 + FTS5） | 实验性功能，可能进入 v0.3.x |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高危** | [#2307](https://github.com/sipeed/picoclaw/issues/2307) | **RCE 漏洞**：未认证 Web Launcher 可写入 `hooks.processes[*].command` 并通过重启执行任意命令 | **待修复**，无 PR |
| 🟡 中 | [#2236](https://github.com/sipeed/picoclaw/issues/2236) | Docker 修改 Web 监听端口后输入框禁用 | 待调查，可能与 #2314 相关 |
| 🟡 中 | [#2310](https://github.com/sipeed/picoclaw/issues/2310) | 历史会话记录丢失（仅保留最近1-2条） | 待修复，影响用户体验 |
| 🟡 中 | [#2302](https://github.com/sipeed/picoclaw/issues/2302) | Web UI 频繁要求重新认证（antigravity API PERMISSION_DENIED） | 待修复，与凭证持久化相关 |
| 🟢 低 | [#966](https://github.com/sipeed/picoclaw/issues/966) **[已关闭]** | Qwen 3.5 思考模型耗尽 token 返回空内容 | 已修复 |
| 🟢 低 | [#2072](https://github.com/sipeed/picoclaw/issues/2072) **[已关闭]** | Discord 配置保存时 "This field is required" 错误 | 已修复 |

**安全警报**：#2307 RCE 漏洞需立即响应，建议维护者：
1. 确认漏洞可利用性
2. 评估临时缓解措施（如强制认证）
3. 优先合并 #2317/#2318 的标准登录流程作为长期修复

---

## 6. 功能请求与路线图信号

### 用户提出的新需求

| Issue | 需求 | 与现有 PR 关联 | 纳入可能性 |
|:---|:---|:---|:---:|
| [#2303](https://github.com/sipeed/picoclaw/issues/2303) | Web UI 配额/速率限制感知（避免无限加载） | 无直接 PR | 中（#988 路线图提及） |
| [#2225](https://github.com/sipeed/picoclaw/issues/2225) | Ollama Cloud 凭证支持 | 无 | 高（提供商扩展模式成熟） |
| [#2315](https://github.com/sipeed/picoclaw/issues/2315) | 加入 Agent Skills 官方客户端列表 | 品牌/生态 | 低（非技术需求） |

### 路线图信号（来自 #988 March 2026 Week 2）

| 计划项 | 今日进展 | 状态 |
|:---|:---|:---:|
| WebUI 前端优化 | #2317/#2318 标准登录流程推进中 | 🟡 进行中 |
| 安全界面 | #2313 Agent Shield 安全套件 | 🟡 进行中 |
| 交互式 CLI 向导 | #350 活跃讨论，等待实现 | 🔴 未启动 |

---

## 7. 用户反馈摘要

### 真实痛点

> *"设置 picoclaw 需要手动创建 YAML/JSON 配置文件，对非技术用户或树莓派 Zero 新鲜部署来说摩擦太大"* —— [#350](https://github.com/sipeed/picoclaw/issues/350)

> *"Web UI 配置 Discord 时 token 已填写却提示 'This field is required'"* —— [#2072](https://github.com/sipeed/picoclaw/issues/2072)（已修复）

> *"飞书机器人经常不回复消息，后台显示网络断开，没有自动重连机制"* —— [#1767](https://github.com/sipeed/picoclaw/issues/1767)（已关闭）

### 使用场景洞察

| 场景 | 代表 Issue | 项目适配度 |
|:---|:---|:---:|
| **ARM 嵌入式/Termux** | #286, #1675, #2209 | 核心差异化优势，需持续投入 |
| **多模型成本优化** | #295, #1581 | 竞争必备功能，架构待完善 |
| **企业/团队多用户** | #2313, #2307 | 安全基线正在建立 |

### 满意度信号

- ✅ CLI 提供商鲁棒性系列修复（#1810-#1813）显示维护者对边缘场景的重视
- ✅ 快速响应：#639 Discord 图片问题 9 评论内关闭
- ⚠️ 担忧：#2307 RCE 漏洞暴露安全审计缺口

---

## 8. 待处理积压

### 长期活跃但未关闭的核心 Issue

| Issue | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---:|:---:|:---|:---|
| [#772](https://github.com/sipeed/picoclaw/issues/772) Agent 系统重构 | 2026-02-25 | 今日 | 架构复杂度高，依赖 #294 多代理框架 | 与 #2285 记忆引擎 PR 协同规划 |
| [#294](https://github.com/sipeed/picoclaw/issues/294) 多代理协作框架 | 2026-02-16 | 今日 | 基础设计待确认 | 需维护者 RFC 文档 |
| [#284](https://github.com/sipeed/picoclaw/issues/284) Swarm 模式 | 2026-02-16 | 今日 | 依赖 #294 | 标记为 #294 的子任务 |
| [#463](https://github.com/sipeed/picoclaw/issues/463) 螳螂虾 Logo 设计 | 2026-02-19 | 今日 | 社区创意征集 | 可设为 Good First Issue |

### 需要维护者关注的 PR

| PR | 等待时间 | 阻塞原因 |
|:---|:---:|:---|
| [#2143](https://github.com/sipeed/picoclaw/pull/2143) 跨提供商回退链修复 | 6 天 | 复杂逻辑审查 |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) Mattermost 通道支持 | 20 天 | 长期未响应，可能需重新基线 |
| [#2251](https://github.com/sipeed/picoclaw/pull/2251) Grafana Alertmanager 通道 | 3 天 | 新功能，需产品决策 |

---

**日报生成时间**：2026-04-04  
**数据来源**：GitHub API / sipeed/picoclaw  
**健康度评分**：🟢 活跃（高吞吐量）/ 🟡 安全债务（#2307 待处理）

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-04

## 1. 今日速览

今日 NanoClaw 展现出**极高开发活跃度**：24小时内 27 个 PR 更新（17 个已合并/关闭）、6 个 Issues 更新，核心团队持续高速迭代。项目焦点集中在 **Apple Container 生态完善**（macOS 原生容器支持）、**多通道能力扩展**（WhatsApp/Slack/Gmail/Telegram）以及 **Claude 认证体系重构**（OAuth 与 API Key 策略调整）。值得关注的是，Anthropic 政策变化（OAuth 计费规则调整）已引发社区紧急文档更新需求，同时 TOS 合规性讨论升温，项目正面临从"技术可行"向"合规可持续"的关键转型期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的核心 PR（17 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1615](https://github.com/qwibitai/nanoclaw/pull/1615) | iamtheshadowmaster | **WhatsApp + Slack 双通道正式合并**，Emoji 状态反应机制 | 多通道战略里程碑，企业级 IM 覆盖完成 |
| [#1613](https://github.com/qwibitai/nanoclaw/pull/1613) | alecburrett | **Telegram Bot Pool 群聊支持** + **Gmail 通道集成** | 实现"多 Agent 同群对话"与邮件工作流闭环 |
| [#1614](https://github.com/qwibitai/nanoclaw/pull/1614) | DorianZheng | SDK API 暴露 `containerConfig` 与 `mountAllowlist` | 开发者体验重大提升，容器配置可编程 |
| [#1611](https://github.com/qwibitai/nanoclaw/pull/1611) | DorianZheng | **按组模型/凭证配置**（3 级回退机制） | 解决多租户核心痛点，为商业化铺路 |
| [#1610](https://github.com/qwibitai/nanoclaw/pull/1610) | gavrielc | Apple Container 迁移指南 + Pino 日志破坏性变更文档 | 降低 macOS 用户迁移摩擦 |
| [#1609](https://github.com/qwibitai/nanoclaw/pull/1609) | gavrielc | Apple Container 冷启动网络修复（`CREDENTIAL_PROXY_HOST` 强制要求） | 根治 `EADDRNOTAVAIL` 崩溃循环 |
| [#1523](https://github.com/qwibitai/nanoclaw/pull/1523) | gavrielc | Apple Container 网关自动检测（`bridge100`/`bridge0`） | 网络层稳定性基石 |
| [#1231](https://github.com/qwibitai/nanoclaw/pull/1231) | ahassa5 | **5 项安全加固**：命令注入修复、只读 Agent 源码、代理绑定、远程控制认证、最小任务间隔 | 安全审计闭环，生产环境就绪 |
| [#868](https://github.com/qwibitai/nanoclaw/pull/868) | k-fls | 按组凭证管理 Skill（配合 #869 Issue 关闭） | 多租户认证基础设施落地 |

**整体迈进评估**：今日合并内容覆盖**基础设施层**（Apple Container 网络/安全）、**平台层**（SDK API 扩展）、**应用层**（4 大新通道），形成完整的"macOS 原生容器 + 全渠道覆盖 + 多租户隔离"产品矩阵，技术债务清理与功能扩张并行，项目成熟度显著提升。

---

## 4. 社区热点

### 高关注度议题

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#1224](https://github.com/qwibitai/nanoclaw/issues/1224) Revisiting TOS Compliance: Replacing Agent SDK with Claude Code CLI | 👍 **6** / 评论 1 / 高优先级标记 | **战略级焦虑**：Anthropic 政策变化后，社区担忧 Agent SDK 订阅模式的合规风险，要求官方明确迁移至 Claude Code CLI 路线图。诉求本质是"风险可预期性"——企业用户需要官方背书的技术选型 |
| [#1608](https://github.com/qwibitai/nanoclaw/issues/1608) Claude setup-token / OAuth setup is confusing and undocumented | 新开 / 评论 1 | ** onboarding 摩擦**：OneCLI 自动注入 `ANTHROPIC_API_KEY=placeholder` 导致 OAuth 凭证冲突，文档缺失使切换路径不透明。反映"默认配置陷阱"伤害用户体验 |
| [#1620](https://github.com/qwibitai/nanoclaw/issues/1620) OAuth token auth now bills as extra usage — docs should recommend API keys | 新开 / 评论 0 | **成本突变响应**：Anthropic 政策变更（第三方 harness 走 extra usage）要求紧急文档更新，用户需要明确的成本优化指引 |

**热点背后信号**：Anthropic 平台政策变化正在形成**外部冲击波**，社区从"功能可用"转向"成本可控 + 合规安全"，项目文档与默认配置策略需快速响应。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | Apple Container 冷启动时 credential proxy 绑定失败 (`EADDRNOTAVAIL`) | **已修复** | [#1609](https://github.com/qwibitai/nanoclaw/pull/1609) |
| 🔴 **高** | 命令注入漏洞（`exec`/`execSync` 直接拼接容器名） | **已修复** | [#1231](https://github.com/qwibitai/nanoclaw/pull/1231) |
| 🟡 **中** | 任务调度器错误使用 `chat_jid` 而非目标组 `JID` 占槽，导致错误组阻塞 | **待合并** | [#1617](https://github.com/qwibitai/nanoclaw/pull/1617) |
| 🟡 **中** | `process.cwd()` 路径解析脆弱性（依赖启动工作目录） | **待合并** | [#1612](https://github.com/qwibitai/nanoclaw/pull/1612) |
| 🟢 **低** | Claw CLI 未正确调用 OneCLI（用户收到 `/login` 提示） | **待诊断** | 无（[#1599](https://github.com/qwibitai/nanoclaw/issues/1599) 新开） |

**稳定性评估**：核心安全漏洞与 Apple Container 启动故障已快速闭环，剩余待合并修复针对边界场景，整体风险可控。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性评估 | 纳入预测 |
|:---|:---|:---|:---|
| **可配置工具注册表**（替换硬编码 `allowedTools`） | [#1619](https://github.com/qwibitai/nanoclaw/pull/1619) OPEN | 高（代码简化方向，符合架构演进） | **下一版本高概率** |
| **Agent Skills 官方客户端列表认证** | [#1618](https://github.com/qwibitai/nanoclaw/issues/1618) OPEN | 高（纯品牌/文档工作） | **近期完成** |
| **新建会话功能**（`Feature create new session`） | [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) OPEN（3/21 起） | 中（需评估与现有会话管理冲突） | 需维护者评审 |
| **类通道的插件系统** | [#1387](https://github.com/qwibitai/nanoclaw/pull/1387) OPEN（3/24 起） | 中（架构扩展，长期价值高） | 路线图候选 |

**路线图信号**：项目正从"通道扩展"向"可扩展架构"转型——工具注册表与插件系统预示**第三方开发者生态**将成为下一阶段重点。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 原声引用 | 根因归类 |
|:---|:---|:---|
| **认证切换困惑** | "Switching from API key to OAuth auth is not documented and has several non-obvious pitfalls" | 文档/默认配置 |
| **成本不可预期** | "third-party harnesses connected to a user's Claude account will now draw from extra usage" | 外部平台政策变化 |
| **CLI 工具链断裂** | "when I try to use the claw cli from the skill, I get a message from Claude to run the /login command" | 工具集成完整性 |
| **Apple Container 设置复杂度** | 多个 PR 提及 "first-time setup" "cold boot" 问题 | 平台特异性适配 |

### 满意度信号
- 多通道扩展（WhatsApp/Slack/Telegram/Gmail）获得积极采纳
- SDK API 扩展（`containerConfig`）反映开发者需求被倾听

---

## 8. 待处理积压

| 项目 | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) Feature create new session | 2026-03-21（14天）| OPEN，无近期活动 | 会话管理是核心 UX，长期悬置可能阻塞相关功能迭代 |
| [#1387](https://github.com/qwibitai/nanoclaw/pull/1387) Plugin system analogous to channels | 2026-03-24（11天）| OPEN，无近期活动 | 架构级 PR，需维护者明确设计方向 |
| [#1224](https://github.com/qwibitai/nanoclaw/issues/1224) TOS Compliance 讨论 | 2026-03-18（17天）| 高优先级标记，👍 6 | **战略风险**：合规性焦虑若长期无官方回应，可能引发企业用户流失 |

**维护者行动建议**：优先回应 #1224 以稳定企业用户预期，对 #1311/#1387 给出明确评审时间线或关闭理由。

---

*日报生成时间：2026-04-04 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-04

---

## 1. 今日速览

NullClaw 今日活跃度**偏低**，社区活动以 Issue 报告为主。过去 24 小时内新增 2 条 Issue（均处于开放状态）、1 条 PR 被关闭但无合并记录，无新版本发布。整体呈现"维护模式"特征：核心开发停滞，用户侧以生态对接诉求和 Docker 部署问题为主。项目健康度需关注 PR 关闭原因及 Issue 响应时效。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 分析 |
|:---|:---|:---|
| [#733 casual refractor bud](https://github.com/nullclaw/nullclaw/pull/733) | **已关闭** | 由 Toast552 于 3 月 27 日创建，今日关闭。标题显示为"casual refactor"（非正式重构），但无详细描述、无评论记录、无代码审查痕迹。**关闭原因不明**——可能为作者主动放弃、维护者拒绝或清理过期 PR。 |

**进展评估**：⚠️ **零实质性代码合并**。该 PR 的关闭未带来任何功能推进，反而引发对项目代码审查流程透明度的疑问。

---

## 4. 社区热点

| 热度 | Issue/PR | 分析 |
|:---|:---|:---|
| 🔥 生态对接诉求 | [#764 Add NullClaw logo to official Agent Skills client list](https://github.com/nullclaw/nullclaw/issues/764) | **战略级信号**。用户 jonathanhefner 主动推动 NullClaw 加入 [agentskills.io](https://agentskills.io/) 官方客户端列表，反映社区对 NullClaw 作为 Agent 基础设施的认可，同时暴露项目官方在生态建设上的被动性——需外部用户提醒才考虑品牌曝光。 |
| 🔧 部署阻塞 | [#763 [bug] docker agent onboard interactive issue step 8](https://github.com/nullclaw/nullclaw/issues/763) | **关键路径故障**。Docker 初始化流程在第 8 步（Workspace 路径配置）出现 `KeyWriteFailed` 错误，直接影响新用户 onboarding 体验。 |

**背后诉求**：
- #764：用户希望 NullClaw 在 Agent Skills 生态中获得官方认可，暗示项目当前市场 visibility 不足
- #763：Docker 作为主流部署方式，交互式配置流程的健壮性是用户采纳的核心门槛

---

## 5. Bug 与稳定性

| 严重度 | Issue | 详情 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | [#763](https://github.com/nullclaw/nullclaw/issues/763) | Docker agent 初始化 `KeyWriteFailed`：工作空间路径写入失败，阻塞全新部署 | ❌ 无 |
| 🟡 中 | #733 关闭无说明 | 代码贡献流程不透明，潜在打击外部贡献者积极性 | N/A |

**风险评估**：Docker onboarding 故障属于**首次用户体验（FTUE）关键路径缺陷**，若 48 小时内无响应，将直接导致新用户流失。

---

## 6. 功能请求与路线图信号

| 类型 | 内容 | 纳入可能性 |
|:---|:---|:---|
| 生态集成 | #764 Agent Skills 官方认证 | **高** — 零代码成本，纯品牌运营动作，建议维护者 24 小时内响应 |
| 基础设施 | 无新功能 PR 或 RFC | — |

**路线图判断**：项目当前无可见的功能迭代方向，建议关注是否有隐藏的 maintainer 讨论渠道（Discord/论坛）。

---

## 7. 用户反馈摘要

| 维度 | 提炼 |
|:---|:---|
| **痛点** | Docker 部署流程"第 8 步必崩"，路径权限/密钥写入逻辑存在缺陷 |
| **场景** | 用户尝试通过 `docker compose` 快速启动本地 agent，期望"一键可用" |
| **满意度** | 生态建设获用户主动背书（#764），但技术稳定性信心受损（#763） |
| **隐含诉求** | 需要更清晰的部署文档、非交互式配置选项（如环境变量预设）、更快的 Issue 响应 |

---

## 8. 待处理积压

| 风险项 | 状态 | 建议动作 |
|:---|:---|:---|
| #764 生态认证请求 | ⏰ **0 天未响应** | 维护者应确认是否提交申请，预计 5 分钟决策成本 |
| #763 Docker 崩溃 | ⏰ **0 天未响应** | 需复现并标记 `priority: high`，建议 24 小时内首次响应 |
| #733 关闭原因 | ❓ **不透明** | 建议补充关闭说明（如"superseded by #xxx"或"stale"），维护贡献者信任 |

---

**数据口径**：统计周期 2026-04-03 00:00 UTC 至 2026-04-04 00:00 UTC  
**项目地址**：https://github.com/nullclaw/nullclaw

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-04

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，24小时内 Issues 更新 32 条（活跃 29 条）、PR 更新 50 条（待合并 40 条），无新版本发布。核心团队正全力冲刺 **v2-architecture 稳定性与 TUI 体验**，同时社区 Bug Bash 活动集中暴露了 Google OAuth、Slack 集成、Routine 执行等生产环境问题。值得关注的是，**3 条高优先级 Issue 已有关闭 PR**（#1986, #1984, #1979），显示团队响应速度较快，但待合并 PR 积压达 40 条，合并队列压力显著。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#1986](https://github.com/nearai/ironclaw/pull/1986) | serrrfirat | **[codex] 重新触发待审批事件** - 修复经典线程中用户发送跟进消息时审批门控不重新弹出的问题，新增回归测试覆盖 | #1985 |
| [#1984](https://github.com/nearai/ironclaw/pull/1984) | serrrfirat | **[codex] 线程切换时恢复 TUI 审批模态框** - 解决历史记录加载时 `pending_approval` 被清空导致的审批状态丢失 | #1983 |
| [#1979](https://github.com/nearai/ironclaw/pull/1979) | Evrard-Nil | **发布 ironclaw-worker 镜像** - 从 Dockerfile.worker 构建并推送 `nearaidev/ironclaw-worker`，完善 CI/CD 基础设施 | - |
| [#1990](https://github.com/nearai/ironclaw/pull/1990) | j-bloggs | ~~[CLOSED 重复]~~ 与 #1991 内容重复，已关闭 | - |

### 关键进展评估

- **TUI 可靠性大幅提升**：serrrfirat 连续关闭 2 个审批状态管理相关的核心 Bug，解决了 v2 引擎中用户体验的阻塞性问题
- **基础设施完善**：worker 镜像独立发布，为多云部署和沙箱隔离奠定基础
- **技术债务清理**：PR #1991 修复自修复系统误处理内置工具的问题，减少 LLM token 浪费

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|
| [#902](https://github.com/nearai/ironclaw/issues/902) | 5 | **Google OAuth 被 Google 拦截** - 企业用户无法通过 Google Suite 工具认证，要求提供可选的 GWS fallback provider | 🔥 **长期未决**（3月10日创建） |
| [#1633](https://github.com/nearai/ironclaw/issues/1633) | 3 | ~~飞书通道 `on_respond` 失败~~ - **已关闭**，`app_id` 配置问题 | ✅ Closed |
| [#846](https://github.com/nearai/ironclaw/issues/846) | 3 | **`onboard` 数据库保存失败但主程序启动成功** - 初始化流程与迁移逻辑不一致，造成用户困惑 | Open |
| [#1985](https://github.com/nearai/ironclaw/issues/1985) | 1 | 待审批跟进消息不重新触发审批门控 - **已有 fix PR #1986** | ✅ 已修复 |
| [#1983](https://github.com/nearai/ironclaw/issues/1983) | 1 | TUI 线程恢复时不重新加载审批模态框 - **已有 fix PR #1984** | ✅ 已修复 |

### 热点分析

- **#902 Google OAuth 封锁** 是今日最突出的**生态兼容危机**：Google 安全策略将 IronClaw 标记为"未合规应用"，直接影响 Gmail/Calendar 工具链的可用性。社区诉求从单纯修复转向**要求官方提供替代认证方案**（GWS fallback），显示企业对 Google 生态依赖的深度。
- **#846 初始化流程缺陷** 反映新项目 onboarding 体验的粗糙：数据库错误与成功启动的矛盾状态，可能流失早期用户。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue | 描述 | Fix PR | 备注 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#1994](https://github.com/nearai/ironclaw/issues/1994) | **LLM provider 返回 502 Bad Gateway** - 生产环境聊天中断 | 无 | 连续 3 次复现，影响核心功能 |
| 🔴 **Critical** | [#1996](https://github.com/nearai/ironclaw/issues/1996) | **Routine 执行时工具被禁用** - "Task Cannot Complete — Tools Disabled" | 无 | PROD 环境，自动化工作流完全失效 |
| 🔴 **Critical** | [#1945](https://github.com/nearai/ironclaw/issues/1945) | **Mission `threads_today` 计数器永不重置** - 日预算永久耗尽 | 无 | V2 引擎设计缺陷 |
| 🟠 **High** | [#1992](https://github.com/nearai/ironclaw/issues/1992) | Google OAuth 400 "Access blocked: Authorization Error" | 无 | Bug Bash 集中报告，与 #902 同源 |
| 🟠 **High** | [#1998](https://github.com/nearai/ironclaw/issues/1998) | **Slack 连接流程完全损坏** - 令牌配置后无响应 | 无 | 多配置问题交织 |
| 🟠 **High** | [#1995](https://github.com/nearai/ironclaw/issues/1995) | Routine 向 Telegram 发送原始工具输出而非可读消息 | 无 | 用户体验严重受损 |
| 🟠 **High** | [#1993](https://github.com/nearai/ironclaw/issues/1993) | **Agent 虚假报告任务完成** - 实际未执行 | 无 | 与 502 错误恢复相关 |
| 🟡 **Medium** | [#1999](https://github.com/nearai/ironclaw/issues/1999) | Skill 名称含空格时安装失败 | 无 | 验证规则与 Skillhub 发布不一致 |
| 🟡 **Medium** | [#2001](https://github.com/nearai/ironclaw/issues/2001) | Gmail OAuth 链接首次请求不生成 | 无 | 交互流程问题 |
| 🟡 **Medium** | [#1987](https://github.com/nearai/ironclaw/issues/1987) | `create_job` 接受已禁用的 `claude_code` 模式 | 无 | 配置与 schema 不同步 |

### 稳定性评估

- **生产环境告警**：502 错误、Routine 工具禁用、Mission 计数器泄漏构成**三重稳定性危机**，建议暂停 PROD 新功能发布
- **OAuth 生态崩塌**：Google + Slack 两大集成渠道同时出现认证/连接故障，外部工具生态可用性堪忧

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 请求内容 | 技术可行性 | 路线图信号 |
|:---|:---|:---|:---|
| [#2002](https://github.com/nearai/ironclaw/issues/2002) | **Preflight HTTP 回调钩子** - 允许外部服务在工具执行前审批/拦截 | 高（基于现有 `HookError::Rejected` 扩展） | 🔜 可能纳入下一版本，企业安全刚需 |
| [#2000](https://github.com/nearai/ironclaw/issues/2000) | **添加 solver-relay-v2.chaindefuser.com 到出网白名单** | 高（配置变更） | 🔜 NEAR AI Cloud 生态扩展，优先级高 |
| [#1980](https://github.com/nearai/ironclaw/issues/1980) | **加入 Agent Skills 官方客户端列表** | 高（品牌/marketing） | 📋 待维护者决策 |
| [#1894](https://github.com/nearai/ironclaw/issues/1894) | **统一 Workspace VFS** - 合并文件系统、DB、远程存储为挂载抽象 | 高（架构级） | 🗺️ **v2-architecture 核心方向**，已有 PR #1764 相关 |
| [#1956](https://github.com/nearai/ironclaw/issues/1956) | **安全事件日志与自动威胁响应** | 中（需设计 incident 系统） | 🗺️ 企业安全路线图，长期规划 |
| [#1968](https://github.com/nearai/ironclaw/issues/1968) | **Web Admin 模块重构** | 中（代码组织） | 📋 技术债务，PR #1963 后续 |

### 关键信号

- **企业安全与合规**成为显性需求：preflight 钩子、事件日志、威胁响应均指向 B2B 场景
- **NEAR 生态深度整合**：solver-relay 白名单请求显示 IronClaw 作为 NEAR Intents 基础设施的定位强化

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **"我按照文档操作，但完全没用"** | #1998 Slack 连接失败 | 配置流程混乱，Agent 状态反馈矛盾，用户无法自助诊断 |
| **"Google 说你们不安全"** | #902, #1992 | 企业用户无法向安全团队解释为何被 Google 拦截，缺乏官方 workaround |
| **"自动化完全不可靠"** | #1996, #1995, #1994 | Routine/Mission 生产环境故障率高，输出质量差，502 错误频发 |
| **"初始化像碰运气"** | #846 | `onboard` 失败与成功启动并存，用户不确定系统是否就绪 |

### 满意点

- **响应速度**：#1985, #1983 等 TUI 问题 24 小时内即有 fix PR
- **功能丰富度**：Abound demo (#1764)、Aliyun 支持 (#1446) 显示多场景覆盖能力

### 关键洞察

> 用户正在从"早期尝鲜者"向"生产依赖者"转变，对**稳定性、可观测性、企业集成**的期望急剧上升，但当前版本在 OAuth 生态、Routine 可靠性、错误处理等基础能力上存在明显 gap。

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 问题 | 风险 |
|:---|:---|:---|:---|
| [#902](https://github.com/nearai/ironclaw/issues/902) | 2026-03-10 (25天) | Google OAuth 被拦截，无官方解决方案 | 🔴 **阻断企业采用** |
| [#846](https://github.com/nearai/ironclaw/issues/846) | 2026-03-10 (25天) | 初始化流程数据库错误 | 🟡 新用户流失 |
| [#1271](https://github.com/nearai/ironclaw/issues/1271) | 2026-03-17 (18天) | ~~飞书组件构建失败~~ | ✅ 已关闭 |

### 高价值待合并 PR（超过 10 天）

| PR | 创建时间 | 内容 | 阻塞风险 |
|:---|:---|:---|:---|
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | 2026-03-30 (5天) | Abound demo - Responses API、凭证注入、skills | 高（XL 规模，多 scope 冲突） |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | 2026-03-20 (15天) | 阿里云 Coding Plan 支持 | 中（新贡献者，需 review 周期） |
| [#1435](https://github.com/nearai/ironclaw/pull/1435) | 2026-03-19 (16天) | pdf-extract → pdf_oxide 替换 | 低（性能优化，非阻塞） |
| [#1594](https://github.com/nearai/ironclaw/pull/1594) | 2026-03-23 (12天) | CLAWHUB_ENABLED 标志 | 低（配置功能） |

### 维护者行动建议

1. **紧急**：为 #902 制定 Google OAuth 官方解决方案（应用审核或 fallback 方案）
2. **本周**：合并 #1764 或拆分以降低发布风险
3. **流程**：建立 Bug Bash 问题分级响应机制，当前 11 个 bug_bash 标签 Issue 无统一跟踪

---

*日报生成时间：2026-04-04 | 数据来源：IronClaw GitHub 仓库*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-04

## 1. 今日速览

LobsterAI 今日社区活跃度极高，过去24小时内产生 **38 条 Issues 更新**（28条活跃/新开，10条关闭）和 **50 条 PR 更新**（19条待合并，31条已合并/关闭），并密集发布 **3 个版本**（2026.3.31 → 2026.4.1 → 2026.4.3）。项目处于快速迭代期，功能交付节奏紧凑，但 **4.1 版本出现严重稳定性回归**——网关循环重启问题已导致部分用户生产环境瘫痪，成为当前最高优先级事项。社区反馈集中在技能系统、定时任务、国际化和 UI 适配四大领域。

---

## 2. 版本发布

### 🚨 LobsterAI 2026.4.3（最新）
**发布日期**: 2026-04-03  
**GitHub**: [Release 2026.4.3](https://github.com/netease-youdao/LobsterAI/releases)

| 变更类型 | 内容 | 作者 |
|---------|------|------|
| **feat** | 🎸 支持将会话记录导出为 Markdown/JSON，便于二次编辑或程序化处理 | @Angus2333 |
| **feat** | IM 多机器人支持 | @liugang519 |
| **fix** | 从上下文溢出 400 错误中恢复：通过重建 session 解决 | - |

**迁移注意**: 会话导出功能为新增能力，无破坏性变更。

---

### LobsterAI 2026.4.1
**发布日期**: 2026-04-03  
**GitHub**: [Release 2026.4.1](https://github.com/netease-youdao/LobsterAI/releases)

| 变更类型 | 内容 | 作者 |
|---------|------|------|
| **fix** | OpenClaw 沙盒模式限制为企业配置可用 | @winsan-zhang |
| **fix** | 自动执行模式下沙盒模式默认关闭 | @liuzhq1986 |

**⚠️ 已知问题**: 该版本引入**严重回归**——[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) 报告网关反复启动失败、无限循环重启，已导致用户生产环境瘫痪。

---

### LobsterAI 2026.3.31
**发布日期**: 2026-03-31  
**GitHub**: [Release 2026.3.31](https://github.com/netease-youdao/LobsterAI/releases)

| 变更类型 | 内容 | 作者 |
|---------|------|------|
| **feat** | 多自定义模型供应商支持——同时接入多个自定义模型供应商 | @nmgwddj, @btc69m979y-dotcom |
| **feat** | 12 主题系统，基于 CSS 变量架构 | - |

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（31 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#1461](https://github.com/netease-youdao/LobsterAI/pull/1461) | @liuzhq1986 | **2026.4.1 最终发布** | 跨 8 个领域（renderer/build/docs/main/openclaw/skills/cowork/im）+ Windows 平台的正式版本交付 |
| [#1458](https://github.com/netease-youdao/LobsterAI/pull/1458) | @nmgwddj | 修复飞书多机器人定时任务投递失败 | 解决 `LarkClient[default]: appId and appSecret are required` 错误，打通企业 IM 场景关键链路 |
| [#1457](https://github.com/netease-youdao/LobsterAI/pull/1457) | @winsan-zhang | 修复 QQ 机器人插件 ID 不一致导致的网关无限重启 | **直接关联 #1400 根因**，消除 `syncOpenClawConfig()` 误检测配置差异问题 |
| [#1460](https://github.com/netease-youdao/LobsterAI/pull/1460) | @nmgwddj | 定时任务支持按机器人筛选会话 | 重构 announce 投递归一化逻辑，消除代码重复，为复杂企业场景铺路 |
| [#1168](https://github.com/netease-youdao/LobsterAI/pull/1168) | @Noodles006 | 修复窄窗口下输入区域底部被截断 | 改善多技能徽标换行时的布局适配 |
| [#759](https://github.com/netease-youdao/LobsterAI/pull/759) | @swuzjb | 为 `handleContinueSession` 添加重复提交保护 | 补齐与 `handleStartSession` 一致的防抖机制，消除快速双击导致的重复消息 |
| [#731](https://github.com/netease-youdao/LobsterAI/pull/731) | @noransu | 模型提供商添加官网链接和 API Key 获取引导 | 显著降低新用户配置门槛，改善首次体验 |

**整体进展评估**: 今日合并 PR 覆盖**稳定性修复**（网关重启、重复提交、IM 投递）、**体验优化**（窗口适配、配置引导）和**企业功能**（多机器人、定时任务筛选），项目在企业级部署场景的能力显著增强。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) **4.1版本严重bug，网关反复启动失败** | 5 | **生产环境瘫痪**，用户已提供联系方式紧急求助 | 🔴 OPEN，疑似已有修复 PR #1457 |
| 2 | [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) **2026.03.30版本-ubuntu构建启动失败** | 4 | Linux 桌面端打包后白屏，阻断 Linux 用户 | 🔴 OPEN |
| 3 | [#1299](https://github.com/netease-youdao/LobsterAI/issues/1299) LLM judge cache 伪 LRU 问题 | 2 | 缓存淘汰策略与文档不符，影响性能 | 🟢 CLOSED |
| 4 | [#1444](https://github.com/netease-youdao/LobsterAI/issues/1444) 服务条款说明文字有问题 | 1 | 法律文案错误，影响品牌专业度 | 🟢 CLOSED |
| 5 | [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) 有计划支持新版本的 openclaw 吗？ | 1 | 依赖升级兼容性，用户尝试后报错 | 🔴 OPEN |

**热点分析**: 
- **#1400** 的爆发反映版本发布后的回归测试缺口，用户情绪激烈（"彻底瘫痪"），需紧急补丁
- **#1418** 与 **#1400** 共同指向**构建/部署稳定性**为当前质量短板
- **#1443** 显示下游依赖（OpenClaw）的版本同步策略需明确沟通

---

## 5. Bug 与稳定性

### 🔴 P0 - 严重（生产影响）

| Issue | 描述 | 影响范围 | Fix PR |
|:---|:---|:---|:---|
| [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) | 4.1 版本网关无限循环重启 | 所有升级用户，已致瘫痪 | [#1457](https://github.com/netease-youdao/LobsterAI/pull/1457) 已合并，待验证 |
| [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) | Ubuntu 构建后白屏 | Linux 桌面用户 | 🔍 待调查 |

### 🟡 P1 - 高（功能受损）

| Issue | 描述 | Fix PR |
|:---|:---|:---|
| [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416) | 概览页切换英文后 UI 布局错乱，文本数字重叠 | - |
| [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414) | 概览页"总会话数"始终显示为 0 | - |
| [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411) | 概览页时间筛选器点击无响应 | - |
| [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | 技能已停用，对话中仍然可以调用 | - |
| [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) | Agent 技能对话后不展示，切换后重新展示 | - |

### 🟢 P2 - 中（体验瑕疵）

| Issue | 描述 | Fix PR |
|:---|:---|:---|
| [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) / [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) | 快捷键重复无校验 | **PR #1456 已提交待合并** |
| [#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) / [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) | 技能重复导入无校验 | **PR #1445 已提交待合并** |
| [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) / [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) | 定时任务不重复模式清空日期后无响应 | **PR #1454 已提交待合并** |
| [#1435](https://github.com/netease-youdao/LobsterAI/issues/1435) | Agent 名称过长超出弹框 | - |
| [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422) | MCP 服务名称较长时删除弹框展示不友好 | - |

---

## 6. 功能请求与路线图信号

### 用户明确提出的功能需求

| Issue | 需求 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| [#582](https://github.com/netease-youdao/LobsterAI/issues/582) | 各模型 Token 用量统计与查看 | 已有关闭 PR，可能已部分实现 | ⭐⭐⭐⭐ |
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | OpenClaw 新版本适配 | 依赖外部项目，需协调 | ⭐⭐⭐ |
| [#588](https://github.com/netease-youdao/LobsterAI/issues/588) | 图片输入配置路径优化（当前过于隐晦） | 体验优化类，易实现 | ⭐⭐⭐⭐⭐ |

### 已提交待合并的功能 PR（路线图前瞻）

| PR | 功能 | 作者 | 状态 |
|:---|:---|:---|:---|
| [#1306](https://github.com/netease-youdao/LobsterAI/pull/1306) | **CodeMirror 6 重写代码块**——语法高亮、搜索、放大查看 | @swuzjb | 🟡 OPEN，重大体验升级 |
| [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) | 技能 hover 时展示完整描述 Tooltip | @noransu | 🟡 OPEN，解决技能描述截断痛点 |

---

## 7. 用户反馈摘要

### 💔 核心痛点

| 反馈来源 | 痛点 | 场景 |
|:---|:---|:---|
| #1400 | 升级后生产环境完全不可用 | 企业用户从 3.30 升级至 4.1，业务中断 |
| #1418 | Linux 构建流程复杂且结果白屏 | 开发者尝试自行构建桌面端 |
| #588 | 图片输入配置"藏得太深" | 新用户配置多模态能力时迷失 |
| #1382 | 导出日志的红色提示像失败 | 视觉反馈与语义不符造成困惑 |
| #1394 | 不重复定时任务执行后自动删除 | 用户期望保留任务以便复用 |

### ✅ 满意点

- **多供应商支持**（2026.3.31）获认可，企业用户可灵活切换模型
- **会话导出功能**（2026.4.3）满足二次加工需求

### 📊 使用场景洞察

- **企业 IM 集成**：飞书、QQ 机器人配置为高频场景，但配置复杂度高
- **定时任务**：跨天触发、多机器人筛选为真实业务需求
- **技能管理**：技能重复、停用后仍调用等问题反映权限/生命周期管理不完善

---

## 8. 待处理积压

### ⚠️ 需维护者关注的重要事项

| 类型 | 项目 | 创建时间 | 风险 | 建议行动 |
|:---|:---|:---:|:---|:---|
| Issue | [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) 网关循环重启 | 2026-04-03 | **品牌声誉受损，用户流失** | 紧急发布 2026.4.4 热修复，主动通知 #1400 用户验证 |
| Issue | [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) Ubuntu 白屏 | 2026-04-03 | Linux 生态支持缺失 | 指派专人复现，补充 Linux CI 构建测试 |
| PR | [#1306](https://github.com/netease-youdao/LobsterAI/pull/1306) CodeMirror 6 代码块 | 2026-04-02 | 重大功能长期挂起 | 评估合并风险，优先 Code Review |
| 依赖 | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281), [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283), [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) 等 Dependabot PRs | 2026-04-02 | Electron/Vite/React/Tailwind 大版本升级积压 | 制定依赖升级策略，避免安全漏洞 |

---

## 附录：关键链接汇总

| 资源 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/netease-youdao/LobsterAI |
| 最新 Release | https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.3 |
| 紧急 Issue #1400 | https://github.com/netease-youdao/LobsterAI/issues/1400 |
| 修复 PR #1457 | https://github.com/netease-youdao/LobsterAI/pull/1457 |

---

*本日报基于 2026-04-04 的 GitHub 公开数据生成，数据截止时间为报告生成时刻。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-04

---

## 1. 今日速览

Moltis 今日活跃度**中等偏上**，过去24小时内社区共产生 **6 条活跃 Issues**（全部为新开/更新，无关闭）和 **3 条 PR 动态**（2 条待合并、1 条关闭）。核心信号显示：企业集成需求持续升温（飞书/钉钉支持呼声高涨），开发者体验成为焦点（代理配置、浏览器可视化交互），同时安全架构出现值得警惕的设计缺陷。Matrix 集成与浏览器实时交互两大功能进入代码审查阶段，预计将在近期版本落地。

---

## 2. 版本发布

**无新版本发布**

> 最新 Issue #545 直接询问版本发布周期，反映社区对发布节奏的关注。建议维护者考虑建立公开的 Roadmap 或发布日历。

---

## 3. 项目进展

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#541 - Firecrawl 网页抓取与搜索集成](https://github.com/moltis-org/moltis/pull/541) | **已关闭** | 功能完整实现（含 `firecrawl_scrape` 独立工具 + `web_search` 备选提供商），但今日被关闭。需关注关闭原因——是合并至其他分支、功能重构，还是策略调整？ |
| [#500 - Matrix 频道集成](https://github.com/moltis-org/moltis/pull/500) | 待合并 | 从 #331 独立拆分，基于官方 `matrix-sdk 0.16` 实现 DM/群聊、OTP 门控、流式编辑、反应等完整功能。企业即时通讯矩阵进一步扩展 |
| [#531 - 浏览器交互式可视化 UI](https://github.com/moltis-org/moltis/pull/531) | 待合并 | **重大体验升级**：CDP 实时投屏、鼠标/键盘/滚动交互、会话历史回放、代理级 Cookie 隔离。将显著降低浏览器自动化的调试门槛 |

**整体推进评估**：浏览器可视化（#531）和 Matrix 支持（#500）两大功能接近就绪，标志着 Moltis 在**多模态交互能力**和**企业通讯覆盖**上迈出关键一步。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#383 - 飞书/钉钉支持](https://github.com/moltis-org/moltis/issues/383) | 👍×6, 💬×3, 更新于今日 | **中国企业市场刚需**。memwey 今日追加评论推动进展，6 个赞显示需求真实且迫切。与现有 Slack/Discord/Matrix 覆盖形成互补，是国际化与本地化平衡的关键战役 |
| 2 | [#548 - 应用/频道级代理支持](https://github.com/moltis-org/moltis/issues/548) | 💬×1, 今日新建 | 企业网络环境下的**部署刚需**——不同频道走不同代理、应用级代理隔离。与 #383 飞书需求形成场景关联（中国企业常见网络架构） |
| 3 | [#545 - 版本发布周期询问](https://github.com/moltis-org/moltis/issues/545) | 今日新建 | 社区对**发布透明度**的诉求，反映项目治理层面的信息缺口 |

**趋势洞察**：今日 3 条最热议题均指向**企业级部署场景**（中国 IM 生态、网络代理策略、版本稳定性预期），暗示 Moltis 正在从开发者工具向**企业生产力平台**演进。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#547 - Hook 熔断机制可被恶意利用绕过安全钩子](https://github.com/moltis-org/moltis/issues/547) | 攻击者可通过故意返回 exit 1 触发熔断，**禁用安全钩子**。属于设计层面的安全架构缺陷 | 🆕 今日新建，无修复 PR |
| 🟡 中 | [#549 - macOS 桌面版 Codex OAuth 流程失效](https://github.com/moltis-org/moltis/issues/549) | 桌面应用无法完成 OAuth 授权，阻断 Codex 功能使用。影响 macOS 用户核心体验 | 🆕 今日新建，无修复 PR |

> **安全提醒**：#547 的熔断绕过风险需要架构层面评估，建议优先响应。该问题可能存在于其他 hook 类型中，需系统性审计。

---

## 6. 功能请求与路线图信号

| Issue | 功能方向 | 纳入可能性评估 |
|:---|:---|:---|
| [#383 - 飞书/钉钉](https://github.com/moltis-org/moltis/issues/383) | 中国企业 IM 生态 | ⭐⭐⭐⭐⭐ 高优先级，社区投票强，Matrix PR (#500) 证明频道扩展模式成熟 |
| [#548 - 代理配置](https://github.com/moltis-org/moltis/issues/548) | 企业网络基础设施 | ⭐⭐⭐⭐☆ 与飞书场景强绑定，实现复杂度中等 |
| [#546 - 速率感知执行 & "等待而非降级"模式](https://github.com/moltis-org/moltis/issues/546) | 成本优化与可靠性 | ⭐⭐⭐⭐☆ 企业级成本控制刚需，技术方案清晰 |
| [#545 - 版本发布节奏](https://github.com/moltis-org/moltis/issues/545) | 项目治理 | ⭐⭐⭐☆☆ 流程改进，低技术成本高收益 |

**下一版本信号**：Matrix (#500) + 浏览器可视化 (#531) 已代码就绪，预计构成 **v0.x** 的核心发布内容。飞书支持 (#383) 和代理配置 (#548) 可能紧随其后。

---

## 7. 用户反馈摘要

| 维度 | 提炼内容 |
|:---|:---|
| **痛点** | 企业网络环境下的代理配置缺失（#548）；中国本土 IM 工具支持空白（#383）；桌面端 OAuth 体验断裂（#549） |
| **场景** | 企业用户需要：① 飞书/钉钉内嵌 AI 助手 ② 多层级代理策略满足合规要求 ③ 浏览器自动化可视化调试 |
| **期望** | 更透明的发布节奏（#545）、更稳健的安全钩子机制（#547）、成本可控的速率管理（#546） |
| **满意度暗示** | 浏览器可视化功能（#531）和 Firecrawl 集成（#541）显示项目功能广度获认可；但企业级稳定性与治理透明度仍有提升空间 |

---

## 8. 待处理积压

> 基于当前数据，以下议题需维护者关注：

| Issue/PR | 创建时间 | 风险说明 |
|:---|:---|:---|
| [#383 - 飞书/钉钉支持](https://github.com/moltis-org/moltis/issues/383) | 2026-03-10（25天前） | 高赞企业需求，长期无官方响应，存在社区流失风险 |
| [#547 - 安全钩子绕过](https://github.com/moltis-org/moltis/issues/547) | 今日 | 架构级安全问题，需尽快评估影响范围 |
| [#541 - Firecrawl 集成](https://github.com/moltis-org/moltis/pull/541) | 2026-04-01 | 功能完整却被关闭，需澄清状态避免贡献者困惑 |

---

*日报生成时间：2026-04-04 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-04

---

## 1. 今日速览

CoPaw 今日呈现**高度活跃**态势，24小时内产生 **50 条 Issues 更新**（37 新开/活跃，13 关闭）和 **33 条 PR 更新**（16 待合并，17 已合并/关闭），并发布 **2 个新版本**。社区讨论热度显著，单条 Issue 最高评论数达 27 条，反映出用户对数据安全和系统稳定性的强烈关注。核心进展包括智谱模型接入、视频分析能力扩展、QQ 富媒体支持增强，以及多个关键 Bug 修复。项目整体健康度良好，但需警惕一起疑似严重安全事件的调查进展。

---

## 2. 版本发布

### v1.0.1 (正式版)
| 属性 | 内容 |
|:---|:---|
| **发布时间** | 2026-04-03 |
| **关键更新** | • **智谱模型接入**：内置 Zhipu AI 模型支持 ([#2858](https://github.com/agentscope-ai/CoPaw/pull/2858))<br>• **视频分析能力**：多模态模型扩展支持视频文件自动提取与分析 |
| **破坏性变更** | 无 |
| **迁移建议** | 可直接升级，建议验证本地模型配置兼容性 |

### v1.0.1-beta.2 (预发布)
| 属性 | 内容 |
|:---|:---|
| **发布时间** | 2026-04-03 |
| **关键更新** | • 控制台优化：优先聊天会话置顶 ([#2864](https://github.com/agentscope-ai/CoPaw/pull/2864))<br>• 修复 `browser_use` 工具空闲看门狗自取消问题 ([#2843](https://github.com/agentscope-ai/CoPaw/pull/2843))<br>• 智谱模型提供者补充支持 |
| **适用场景** | 需要提前体验会话管理优化的用户 |

---

## 3. 项目进展

### 已合并/关闭的关键 PR（17 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2918](https://github.com/agentscope-ai/CoPaw/pull/2918) | xieyxclack | 更新 1.0.1 发布说明 | 版本文档完善 |
| [#2917](https://github.com/agentscope-ai/CoPaw/pull/2917) | xieyxclack | 增强工具安全防护 | **安全加固** |
| [#2870](https://github.com/agentscope-ai/CoPaw/pull/2870) | solarhell | 新增 OneBot v11 渠道（NapCat/QQ 集成） | **生态扩展：QQ 机器人支持** |
| [#2861](https://github.com/agentscope-ai/CoPaw/pull/2861) | rikey123 | Windows 浏览器启动修复（--no-sandbox/--disable-gpu） | **Windows 兼容性** |
| [#402](https://github.com/agentscope-ai/CoPaw/pull/402) | luixiao0 | 修复媒体路径 URL 格式、Markdown 渲染、视觉模型支持 | **Telegram 渠道稳定** |
| [#149](https://github.com/agentscope-ai/CoPaw/pull/149) | luixiao0 | VLM 与媒体预处理能力合入主线 | **多模态架构升级** |
| [#2847](https://github.com/agentscope-ai/CoPaw/pull/2847) | fancyboi999 | 修复会话标题重命名被覆盖问题 | 用户体验修复 |
| [#2905](https://github.com/agentscope-ai/CoPaw/pull/2905) | pan-x-c | 修复命令运行器路径问题 | 后端稳定性 |
| [#2889](https://github.com/agentscope-ai/CoPaw/pull/2889) | pan-x-c | 支持 CoPaw Local 更新、修复解析错误 | **本地模型管理** |
| [#2892](https://github.com/agentscope-ai/CoPaw/pull/2892) | qbc2016 | 支持为每个模型修改生成参数 | **模型调优灵活性** |

**整体推进评估**：今日合并 PR 覆盖**安全加固、渠道扩展（QQ/OneBot）、多模态能力、Windows 兼容、本地模型管理**五大方向，项目向生产级稳定性迈出关键一步。

---

## 4. 社区热点

### 🔥 最高热度：疑似安全事件（27 评论）
| Issue | [#2884](https://github.com/agentscope-ai/CoPaw/issues/2884) |
|:---|:---|
| **标题** | [Question] Ubuntu 22.04 安装 CoPaw 后个人目录内容几乎被清空 |
| **作者** | baodachuan |
| **核心诉求** | 用户怀疑 CoPaw 存在漏洞导致系统被入侵，个人文件和软件被删除 |
| **社区反应** | 高度恐慌，需官方紧急回应 |
| **分析** | 此 Issue 反映用户对 AI 助手**权限边界和数据安全**的深层担忧，无论最终调查结果如何，都需加强沙箱机制和权限审计文档 |

### ⚡ 技术热点：空闲 CPU 100% 占用（6 评论）
| Issue | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) |
|:---|:---|
| **标题** | [Bug] High CPU usage / power consumption - when idle |
| **作者** | snimavat |
| **根因** | AnyIO 取消处理中的忙轮询循环 |
| **影响** | 笔记本续航、服务器资源浪费 |
| **状态** | 待修复，无关联 PR |

### 💬 功能体验：多智能体交互缺陷（6 评论）
| Issue | [#2814](https://github.com/agentscope-ai/CoPaw/issues/2814) |
|:---|:---|
| **标题** | [Bug] Multi-agent chat history is empty for running callee agent |
| **核心问题** | 多智能体对话中，被调用 Agent 的聊天页面显示空历史 |
| **诉求** | 实时同步跨 Agent 的会话状态 |

### 🎯 交互优化：Approve 操作按钮化（6 评论，2 👍）
| Issue | [#2720](https://github.com/agentscope-ai/CoPaw/issues/2720) |
|:---|:---|
| **标题** | [Feature] 建议将"/Approve"操作改为按钮形式 |
| **洞察** | 用户期望**降低命令行交互门槛**，提升控制台直观性 |

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-紧急** | [#2884](https://github.com/agentscope-ai/CoPaw/issues/2884) | 疑似安全漏洞导致用户数据丢失 | 调查中 | 无 |
| 🔴 **P0-紧急** | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) | 空闲时 100% CPU 占用（AnyIO 忙循环） | 开放 | 无 |
| 🟡 **P1-高** | [#2831](https://github.com/agentscope-ai/CoPaw/issues/2831) | Web 控制台 `write_file` 失败无法停止 | 开放 | 无 |
| 🟡 **P1-高** | [#2814](https://github.com/agentscope-ai/CoPaw/issues/2814) | 多智能体聊天历史同步失败 | 开放 | 无 |
| 🟡 **P1-高** | [#2871](https://github.com/agentscope-ai/CoPaw/issues/2871) | 会话切换按钮在正常浏览器宽度下不可见 | 开放 | 无 |
| 🟡 **P1-高** | [#2887](https://github.com/agentscope-ai/CoPaw/issues/2887) | 控制台修改 SKILL.md 会删除文件夹其他文件 | **已关闭** | [#2847](https://github.com/agentscope-ai/CoPaw/pull/2847) |
| 🟢 **P2-中** | [#2881](https://github.com/agentscope-ai/CoPaw/issues/2881) | CoPaw Local 安装 llama.cpp 403 Forbidden | **已关闭** | [#2889](https://github.com/agentscope-ai/CoPaw/pull/2889) |
| 🟢 **P2-中** | [#2854](https://github.com/agentscope-ai/CoPaw/issues/2854) | QA-Agent 删除本地模型后启动失败 | **已关闭** | [#2889](https://github.com/agentscope-ai/CoPaw/pull/2889) |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 热度 | 可行性评估 | 路线图信号 |
|:---|:---|:---|:---|:---|
| **专家召唤模式**（WorkBuddy 式） | [#2883](https://github.com/agentscope-ai/CoPaw/issues/2883) | 3 评论 | ⭐⭐⭐⭐⭐ 高 | 与 [#2904](https://github.com/agentscope-ai/CoPaw/pull/2904) Plan 模式 PR 方向一致，可能合并 |
| **技能调用显式选项**（非随机） | [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902) | 2 评论 | ⭐⭐⭐⭐⭐ 高 | 生产应用核心需求，优先级高 |
| **LSP 支持 + 回退模型 + Telegram 换模型** | [#2912](https://github.com/agentscope-ai/CoPaw/issues/2912) | 2 评论 | ⭐⭐⭐⭐☆ 中高 | LSP 与 [#149](https://github.com/agentscope-ai/CoPaw/pull/149) VLM 能力结合，技术储备已具备 |
| **主题与自定义颜色** | [#2869](https://github.com/agentscope-ai/CoPaw/issues/2869) | 3 评论 | ⭐⭐⭐☆☆ 中 | UI 增强，社区贡献友好 |
| **默认智能体名称编辑/删除** | [#2866](https://github.com/agentscope-ai/CoPaw/issues/2866) | 3 评论 | ⭐⭐⭐⭐⭐ 高 | 体验优化，实现简单 |
| **附件大小限制提升（>10MB）** | [#2880](https://github.com/agentscope-ai/CoPaw/issues/2880) | 3 评论 | ⭐⭐⭐⭐☆ 中高 | 电子书场景刚需，配置层调整 |
| **多渠道共享会话** | [#2899](https://github.com/agentscope-ai/CoPaw/issues/2899) | 2 评论 | ⭐⭐⭐☆☆ 中 | 架构改动较大，需设计评审 |
| **任务状态查询/防重复/队列 API** | [#2894](https://github.com/agentscope-ai/CoPaw/issues/2894) | 3 评论 | ⭐⭐⭐⭐⭐ 高 | 企业级功能，与 [#2216](https://github.com/agentscope-ai/CoPaw/issues/2216) 技能追踪相关 |

---

## 7. 用户反馈摘要

### 😊 满意点
- **多模态能力扩展**：视频分析功能获认可，v1.0.1 版本发布节奏稳定
- **渠道生态丰富**：QQ、飞书、Telegram、OneBot 等多渠道支持逐步完善
- **本地模型管理**：CoPaw Local 更新功能解决 llama.cpp 维护痛点

### 😤 痛点与摩擦
| 痛点 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **安全感缺失** | "要疯！！不知道是被黑了还是 CoPaw 改的" | [#2884](https://github.com/agentscope-ai/CoPaw/issues/2884) |
| **技能调用黑盒** | "同样的任务，每次调用哪个技能随机性很大" | [#2902](https://github.com/agentscope-ai/CoPaw/issues/2902) |
| **交互效率低** | "文字输/Approve 不够直观，要按钮" | [#2720](https://github.com/agentscope-ai/CoPaw/issues/2720) |
| **状态不透明** | "怎么查 Agent 当前任务状态？任务完成了没？" | [#2894](https://github.com/agentscope-ai/CoPaw/issues/2894) |
| **飞书体验不一致** | "群聊引用文件无法识别，私聊可以" | [#2852](https://github.com/agentscope-ai/CoPaw/issues/2852) |

### 🎯 使用场景洞察
- **企业知识管理**：电子书上传（>10MB）、多 Agent 协作分析文档
- **开发辅助**：需要 LSP 支持实现代码智能补全、错误检测
- **跨平台工作流**：同一项目在 A 软件讨论、B 软件传文件，需会话共享

---

## 8. 待处理积压

### ⏳ 长期开放的重要 Issue/PR

| 条目 | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) OpenRouter 提供者增强 | 2026-03-10 | 2026-04-04 | 模型过滤逻辑评审中 | 维护者代码评审，合并至 v1.0.2 |
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) MiniMax OAuth 认证 | 2026-03-28 | 2026-04-03 | Device Code Flow 实现复杂度 | 分阶段合并，先支持 PKCE |
| [#2216](https://github.com/agentscope-ai/CoPaw/issues/2216) 技能执行追踪 | 2026-03-24 | 2026-04-03 | 架构设计待确认 | 与 [#2894](https://github.com/agentscope-ai/CoPaw/issues/2894) 任务状态需求合并设计 |
| [#2764](https://github.com/agentscope-ai/CoPaw/pull/2764) Fork 最新提交 | 2026-04-01 | 2026-04-03 | 描述缺失，意图不明 | 要求作者补充 PR 描述或关闭 |
| [#2837](https://github.com/agentscope-ai/CoPaw/pull/2837) 技能池分类标签 | 2026-04-02 | 2026-04-03 | 与 [#2901](https://github.com/agentscope-ai/CoPaw/pull/2901) 重复 | 协调两位作者合并方案 |

---

**报告生成时间**：2026-04-04  
**数据来源**：GitHub API /agentscope-ai/CoPaw  
**下次建议关注**：#2884 安全事件调查结论、#2888 CPU 占用修复 PR、v1.0.2 路线图发布

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-04

## 1. 今日速览

ZeptoClaw 今日保持**中高活跃度**，24小时内处理 **7 个 PR**（含 6 个依赖更新批量合并），剩余 **5 个功能 PR 待审**，无新版本发布。核心进展集中在**安全沙箱修复**（Landlock 工作区访问）和**通信稳定性**（Telegram 消息分块）。社区出现一项**架构级功能请求**（真并发/非阻塞设计），涉及核心运行时重构，值得维护者关注。整体项目健康度良好，依赖维护自动化程度高，但功能 PR 积压需要核心维护者 review 推进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#463](https://github.com/qhkm/zeptoclaw/pull/463) | stuartbowness | **修复 Landlock 沙箱工作区访问** | 解决安全沙箱启用后工作目录不可用的关键 bug，使 `runtime_type: "landlock"` 真正可用 |
| [#470](https://github.com/qhkm/zeptoclaw/pull/470)-[#475](https://github.com/qhkm/zeptoclaw/pull/475) | dependabot[bot] | 6 项依赖更新（GitHub Actions、Astro Starlight、Vite、TypeScript ESLint、TailwindCSS） | 保持工具链安全与最新，无功能变更 |

**整体进展评估**：今日合并以**基础设施维护**为主，核心功能 PR 尚未进入主线。Landlock 修复是重要稳定性里程碑，但浏览器自动化、上下文压缩等用户-facing 功能仍在 review 队列。

---

## 4. 社区热点

### 最受关注议题

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#486](https://github.com/qhkm/zeptoclaw/issues/486) **真并发/非阻塞设计** | 新开 Issue，引用 Spacebot 架构 | **架构级痛点**：用户明确反馈"长任务阻塞响应"是生产环境瓶颈，建议参考 [spacedriveapp/spacebot](https://github.com/spacedriveapp/spacebot) 的并发模型。作者自认 scope 为 Large，无实现意愿 → **需要维护者判断是否纳入路线图** |
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) **BrowserTool 浏览器自动化** | 待审 PR，创建 7 天 | 高价值功能：集成 agent-browser + Lightpanda/Chrome 双引擎，含 SSRF 防护。Split from #410 说明经过迭代，技术方案成熟，**review 优先级高** |
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) **多层上下文压缩** | 待审 PR，创建 7 天 | 解决 token 溢出崩溃的生产级问题，"defense-in-depth" 设计替代原有单遍方案，**稳定性关键改进** |

**社区信号**：用户从"能用"向"好用、可生产"过渡，关注并发架构和长对话稳定性。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | Telegram 长消息静默失败（>4096 字符无分块，错误不返回用户） | [#456](https://github.com/qhkm/zeptoclaw/issues/456) 已关闭 | ✅ [#462](https://github.com/qhkm/zeptoclaw/pull/462) **待审** — 实现消息分块 + 纯文本 fallback |
| 🟡 **中** | Landlock 沙箱工作区访问失效 | 已修复 | ✅ [#463](https://github.com/qhkm/zeptoclaw/pull/463) 已合并 |
| 🟡 **中** | Vendor 前缀模型路由错误（如 `google/gemini-3-flash-preview` 未走 OpenRouter） | 待修复 | 🔄 [#468](https://github.com/qhkm/zeptoclaw/pull/468) **待审** |
| 🟢 **低** | 自定义工具 CLI 包装器参数转义问题 | 待修复 | 🔄 [#467](https://github.com/qhkm/zeptoclaw/pull/467) **待审** |

**风险评估**：Telegram 消息失败是用户体验关键 bug，#462 需优先 review 合并。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 可行性判断 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **真并发/非阻塞架构** | [#486](https://github.com/qhkm/zeptoclaw/issues/486) | 作者评估为 Large scope，需新子系统 | 中 — 需维护者确认优先级，可能进入 v0.x 或 v1.0 规划 |
| 浏览器自动化工具 | [#459](https://github.com/qhkm/zeptoclaw/pull/459) | PR 已就绪，技术方案完整 | **高** — 预计近期合并 |
| 智能上下文压缩 | [#460](https://github.com/qhkm/zeptoclaw/pull/460) | PR 已就绪，解决生产痛点 | **高** — 预计近期合并 |

**路线图建议**：并发架构请求 (#486) 反映社区从 demo 向 production 转型的需求，建议维护者公开回应是否纳入 Q2/Q3 规划。

---

## 7. 用户反馈摘要

> 从 Issues/PRs 提炼的真实场景与痛点

| 场景 | 痛点 | 满意度 |
|:---|:---|:---|
| Telegram 日常交互 | 长回复（研究类任务）导致 bot 完全静默，用户无从知晓是否处理中 | ❌ 低 — 已修复待发布 |
| 安全敏感部署 | 启用 Landlock 后功能失效，沙箱与可用性不可兼得 | ⚠️ 中 — 刚修复，需验证 |
| 长对话会话 | Token 溢出导致崩溃，对话历史丢失 | ⚠️ 中 — 有 PR 待审 |
| 多模型配置 | Vendor 前缀模型路由混乱，配置体验不一致 | ⚠️ 中 — 有 PR 待审 |
| 工具生态扩展 | 需要浏览器自动化做深度研究任务 | ✅ 高 — 功能即将落地 |

**关键洞察**：用户正在将 ZeptoClaw 用于**开放式研究任务**（如"找出 Rust 社区最有观点的开发者"），这对上下文长度、响应稳定性、工具丰富度提出更高要求。

---

## 8. 待处理积压

### 需维护者关注的高价值 PR（>7天未合并）

| PR | 创建时间 | 价值 | 阻塞风险 |
|:---|:---|:---|:---|
| [#459](https://github.com/qhkm/zeptoclaw/pull/459) BrowserTool | 7 天 | 高 — 扩展工具生态核心 | 作者已 split from #410，反复迭代后可能流失贡献意愿 |
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) 上下文压缩 | 7 天 | 高 — 生产稳定性关键 | 长对话崩溃是用户流失主因之一 |
| [#462](https://github.com/qhkm/zeptoclaw/pull/462) Telegram 修复 | 6 天 | 高 — 用户体验关键 bug | Issue 已关闭但 fix 未合并，存在状态不一致 |

### 需回应的架构议题

- [#486](https://github.com/qhkm/zeptoclaw/issues/486) 真并发设计 — **建议 7 天内维护者回应是否纳入路线图**

---

**日报生成时间**：2026-04-04  
**数据范围**：过去 24 小时 GitHub 活动  
**项目地址**：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 | 2026-04-04

---

## 1. 今日速览

EasyClaw 项目今日活跃度**极低**，过去24小时内仅产生 **1 条 Issue 更新**，无 PR 活动及版本发布。社区互动近乎停滞，项目处于维护期的静默状态。新出现的 Issue 指向用户体验层面的配置管理问题，虽非核心功能故障，但反映出发布流程中的体验细节待优化。整体健康度评估：**平稳但缺乏推进动能**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并或关闭的 Pull Requests**

代码层面零进展，主干代码无变动。

---

## 4. 社区热点

| 项目 | 详情 |
|:---|:---|
| **Issue #31** | [更新后每次都弹出更新日志，且无法识别系统来源](https://github.com/gaoyangz77/rivonclaw/issues/31) |
| 作者 | reshabar |
| 状态 | 🔴 Open，0 评论，0 👍 |
| 核心诉求 | 更新日志弹窗的持久化状态未正确保存 + 多系统（macOS/Windows/Linux）日志识别混乱 |

**分析**：该 Issue 触及 AI 助手类工具的典型痛点——**跨平台发布后的配置迁移与状态持久化**。用户截图显示全屏弹窗干扰工作流，"不知道哪个系统的更新日志"暗示 EasyClaw 可能采用统一更新通道但缺乏平台标识。此问题虽非致命，但高频干扰会显著降低用户留存。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue | Fix PR | 备注 |
|:---|:---|:---|:---|:---|
| 🟡 中等 | 更新日志弹窗状态未持久化，每次启动重复弹出 | [#31](https://github.com/gaoyangz77/rivonclaw/issues/31) | 无 | 疑似配置存储或版本标记逻辑缺陷 |

**暂无高严重性 Bug 报告**，项目稳定性表面良好。

---

## 6. 功能请求与路线图信号

**今日无新功能请求**

Issue #31 隐含的需求信号：
- **配置管理增强**：需要更精细的"首次启动检测"与"更新标记持久化"机制
- **多平台差异化**：更新日志需标注目标平台，或按平台分流发布说明

若维护者计划下一版本，建议优先处理状态管理基础设施。

---

## 7. 用户反馈摘要

| 维度 | 内容 |
|:---|:---|
| **痛点** | 重复弹窗打断工作流；更新信息与实际运行平台不匹配造成困惑 |
| **使用场景** | 日常自动更新后的启动场景 |
| **情绪信号** | 截图配文简洁但含无奈感，未使用强烈负面词汇，属"忍耐阈值内"抱怨 |

> *"问题是更新日志还不知道是那个系统的更新日志"* —— 反映跨平台项目常见的信息架构模糊问题

---

## 8. 待处理积压

| Issue | 创建时间 | 最后更新 | 天数 | 建议动作 |
|:---|:---|:---|:---|:---|
| #31 | 2026-04-03 | 2026-04-03 | 1 | 🆕 新提交，需维护者确认复现并分配优先级 |

**历史积压扫描**：因数据仅覆盖24小时，无法评估长期未响应事项。建议维护者关注：
- 是否存在未关闭的旧版本更新相关问题
- 配置/状态管理模块的测试覆盖率

---

## 附录：数据溯源

- 项目地址：`github.com/gaoyangz77/easyclaw`
- Issue #31 实际位于关联仓库 `gaoyangz77/rivonclaw`（疑似核心组件或历史仓库）
- 数据采集周期：2026-04-03 至 2026-04-04 UTC

---

*日报生成时间：2026-04-04 | 数据来源：GitHub API 及公开 Issue 信息*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*