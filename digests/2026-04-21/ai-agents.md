# OpenClaw 生态日报 2026-04-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-21 00:16 UTC

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

# OpenClaw 项目动态日报 | 2026-04-21

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**，24小时内 Issues 和 PR 各更新 500 条，社区参与密集。无新版本发布，开发重心集中于**稳定性修复与用户体验优化**——Web UI 滚动状态、媒体持久化、CLI 冷启动延迟等问题获得集中攻关。338 个待合并 PR 显示贡献者社区活跃，但合并速率（162/500）提示 review 带宽可能成为瓶颈。整体项目健康度良好，核心架构迭代与边缘场景打磨并行推进。

---

## 2. 版本发布

**无新版本发布**（0 releases）

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#43961](https://github.com/openclaw/openclaw/pull/43961) | happydog-intj | **网关稳定性**：SIGKILL 兜底终止僵死进程，解决 graceful shutdown 超时后端口占用导致重启失败 | #43960 |
| [#57737](https://github.com/openclaw/openclaw/pull/57737) | Vitalcheffe | **Telegram 可靠性**：轮询 stall 阈值 90s→300s，消除 LLM 处理期间的误重启 | #57660 |
| [#68721](https://github.com/openclaw/openclaw/pull/68721) | Lucenx9 | **安全默认**：Codex app-server 审批策略默认改为 `on-request`，阻断静默执行风险 | — |
| [#69072](https://github.com/openclaw/openclaw/pull/69072) | ayeshakhalid192007-dev | **Codex 会话修复**：释放 session lane 锁，解决单会话只能回复一次后冻结的阻塞问题 | — |
| [#68310](https://github.com/openclaw/openclaw/pull/68310) | Chased1k | **嵌入式运行器韧性**：为 `stopReason=error` 的空输出 turn 增加 3 次重试，覆盖非前沿模型 | — |
| [#43392](https://github.com/openclaw/openclaw/pull/43392) | dalefrieswthat | **WebSocket 可靠性**：修复 upgrade handler 竞态条件导致的 1006 异常关闭 | — |
| [#69477](https://github.com/openclaw/openclaw/pull/69477) | scoootscooob | **模型默认更新**：Moonshot 默认模型 Kimi K2.5→K2.6，跟进上游最新能力 | — |
| [#67280](https://github.com/openclaw/openclaw/pull/67280) | Sway-Chan | **ACP 会话持久化**：复用同 label 的现有 session key，避免重复生成 UUID 导致状态丢失 | — |

**整体推进评估**：今日合并 PR 聚焦**生产环境韧性**（进程生命周期、网络超时、会话状态）与**安全基线提升**，属于"修屋顶"式工程，为后续功能扩展夯实基础。

---

## 4. 社区热点

### 高讨论 Issues（评论数 Top）

| Issue | 评论 | 👍 | 核心诉求 | 状态 |
|:---|:---|:---|:---|:---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 88 | 71 | **跨平台原生应用**：macOS/iOS/Android 已有，Linux/Windows 长期缺失，企业部署受阻 | 🔥 OPEN |
| [#37757 IDENTITITY.md 拼写错误](https://github.com/openclaw/openclaw/issues/37757) | 26 | 0 | 系统提示中的 cosmetic bug，影响专业感 | OPEN stale |
| [#48205 Gateway 每~50分钟重启](https://github.com/openclaw/openclaw/issues/48205) | 21 | 0 | 生产环境稳定性，reason=none 无诊断信息 | ✅ CLOSED |
| [#34830 OpenRouter 401 认证头缺失](https://github.com/openclaw/openclaw/issues/34830) | 20 | 0 | 升级后的回归，阻断 API 调用 | ✅ CLOSED |
| [#37623 GPT-5.4 配置可见但运行失败](https://github.com/openclaw/openclaw/issues/37623) | 16 | 7 | **新模型支持滞后**：配置层与运行时脱节，用户被误导 | OPEN stale |

### 高反应 PRs/Issues

- **#75**（71 👍）持续领跑功能请求榜，反映**桌面端企业市场**的迫切需求
- **#37623**（7 👍）揭示"配置即支持"的 UX 陷阱，新模型接入流程需重构

**诉求分析**：社区核心矛盾在于**平台覆盖广度**（Linux/Windows 客户端）与**模型跟进速度**（GPT-5.4、Kimi K2.6）之间的资源竞争。企业用户要部署稳定性，先锋用户要最新模型能力，两者均需基础设施升级支撑。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| **P0-生产阻断** | [#48205](https://github.com/openclaw/openclaw/issues/48205) | Gateway 周期性重启（~50min），无错误原因 | 所有长期运行实例 | #43961（进程终止兜底） |
| **P0-生产阻断** | [#68944](https://github.com/openclaw/openclaw/issues/68944) | CLI WebSocket 握手挂起，所有需网关连接的命令失效 | 2026.4.15 用户 | 🚨 **无** |
| **P1-功能退化** | [#68735](https://github.com/openclaw/openclaw/issues/68735) | 2026.4.14→4.15 升级后 LLM 请求被拒（schema/tool payload） | github-copilot/gpt-5-mini 用户 | 🚨 **无** |
| **P1-功能退化** | [#65603](https://github.com/openclaw/openclaw/issues/65603) | Azure Foundry GPT 模型工具调用/推理能力失效 | Azure 企业用户 | 🚨 **无** |
| **P1-功能退化** | [#34830](https://github.com/openclaw/openclaw/issues/34830) | OpenRouter 401 认证头缺失（升级回归） | OpenRouter 用户 | ✅ 已关闭 |
| **P2-体验受损** | [#37757](https://github.com/openclaw/openclaw/issues/37757) | IDENTITITY.md 拼写错误 | 所有用户（cosmetic） | 🚨 **无** |
| **P2-体验受损** | [#52037](https://github.com/openclaw/openclaw/issues/52037) | OpenAI Codex OAuth token 刷新不落盘 | VPS/systemd 部署 | 🚨 **无** |

**关键风险**：#68944 和 #68735 为**昨日新增回归**，影响最新版本（2026.4.15），尚无对应 PR，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 热度 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **Linux/Windows 原生客户端** | [#75](https://github.com/openclaw/openclaw/issues/75) | 🔥 极高（88评论, 71👍） | 高——长期占位，需 Electron/Tauri 或原生框架决策 |
| **原生 MCP 服务器集成** | [#34097](https://github.com/openclaw/openclaw/issues/34097) | 中（6评论, 3👍） | 中高——生态标准，Cursor/Claude Desktop 已采纳，PR 未现 |
| **Safe/Unsafe ClawdBot 模式** | [#6731](https://github.com/openclaw/openclaw/issues/6731) | 中（9评论） | 低——涉及 Rust 重写，工程量大，属愿景级 |
| **Gemini TTS audioProfile** | [#69321](https://github.com/openclaw/openclaw/pull/69321) | PR 阶段 | **高**——PR 已开，XS 体量，预计快速合并 |
| **Typecast TTS 提供商** | [#10356](https://github.com/openclaw/openclaw/pull/10356) | PR 阶段（2月至今） | 中——L 体量，需 review 带宽 |
| **心跳模型 fallback 链** | [#69495](https://github.com/openclaw/openclaw/pull/69495) | PR 阶段 | **高**——M 体量，解决生产韧性，今日提交 |

**路线图信号**：今日 PR 显示团队正推进**TTS 生态扩展**（Gemini audioProfile、Typecast）与**运行时韧性**（heartbeat fallback、media 持久化），符合"先稳定后丰富"的迭代节奏。MCP 集成虽呼声存在，但尚未进入开发队列。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪 |
|:---|:---|:---|
| **"配置显示支持，实际运行失败"** — GPT-5.4 可配但不可用 | #37623 | 😤 挫败/被误导 |
| **"升级即 regression"** — 4.14→4.15 后 LLM 请求被拒 | #68735 | 😤 信任损耗 |
| **"VPS 部署 OAuth token 隔夜失效"** — 刷新不落盘需反复重授权 | #52037 | 😩 运维负担 |
| **"Docker + Sandbox 工作空间挂载断裂"** — 内部路径 vs 宿主机路径混淆 | #31331 | 🤯 配置复杂 |
| **"Discord /new 命令 3 秒超时"** — 交互设计未考虑冷启动延迟 | #58602 | 😤 体验断裂 |

### 满意点

- **多平台覆盖意愿强**：macOS/iOS/Android 已有，用户认可移动优先策略
- **TUI/Web UI 双通道**：终端用户与浏览器用户各得其所
- **模型生态广度**：OpenRouter、Anthropic、Azure、Kimi 等多提供商支持受认可

---

## 8. 待处理积压

### 长期未响应的高价值 Issue（stale 标签 + 高互动）

| Issue | 创建 | 最后更新 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#75 Linux/Windows 客户端](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-04-20 | 企业 adoption 瓶颈 | 维护者确认技术路线（Electron/Tauri/原生？） |
| [#37623 GPT-5.4 配置运行时脱节](https://github.com/openclaw/openclaw/issues/37623) | 2026-03-06 | 2026-04-20 | 新模型跟进信誉 | 配置验证层增加运行时存在性检查 |
| [#37834 Session context corruption 400 循环](https://github.com/openclaw/openclaw/issues/37834) | 2026-03-06 | 2026-04-20 | 长会话可靠性 | 会话状态机 review，abort 清理逻辑 |
| [#35807 PowerShell pipeline 变量损坏](https://github.com/openclaw/openclaw/issues/35807) | 2026-03-05 | 2026-04-20 | Windows 开发者体验 | Exec 工具转义逻辑审计 |
| [#34097 MCP 原生集成](https://github.com/openclaw/openclaw/issues/34097) | 2026-03-04 | 2026-04-20 | 生态兼容性 | 技术方案 RFC，评估与现有插件体系关系 |

### Review 带宽告警

- **338 个待合并 PR** 堆积，今日仅合并/关闭 162 个
- 多个 `size: XL` PR（#69479, #69483, #68612, #10356）需核心维护者深度 review

---

*日报基于 GitHub 公开数据生成，时间范围：2026-04-20 至 2026-04-21*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**报告日期：2026-04-21**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从原型验证向生产就绪"的关键跃迁期**：头部项目日均 PR 处理量突破 50 条，但 review 带宽瓶颈普遍显现；MCP（Model Context Protocol）成为事实上的工具集成标准，超 60% 活跃项目已纳入或正在接入；语音交互、多模态输入、长期记忆构成下一代差异化竞争焦点。与此同时，品牌迁移（CoPaw→QwenPaw）、Zig 语言激进升级（NullClaw）等事件揭示：生态成熟度提升伴随技术债务集中暴露，"稳定性优先"正取代"功能堆砌"成为社区共识。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 已合并/关闭 | 待合并 | Release | 健康度评估 |
|:---|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 更新 | 500 更新 | 162 | **338** ⚠️ | 0 | 🔶 极高活跃，review 瓶颈严重 |
| **NanoBot** | 12 (7 关闭) | 51 (30 合并) | 30 | 21 | 0 | 🟢 高吞吐，维护响应快 |
| **Hermes Agent** | 50 | 50 | 18 | 32 | 0 | 🟢 稳健推进，技术深度突出 |
| **PicoClaw** | 13 | 114 (仅 8 合并) | 8 | **106** 🔴 | 1 nightly | 🔴 高积压，认证层危机 |
| **NanoClaw** | 1 | 25 (8 合并) | 8 | 17 | 0 | 🟢 v2 收官，质量导向 |
| **NullClaw** | 3 活跃 | 3 (0 合并) | 0 | 3 | 0 | 🔴 Zig 0.16 迁移阵痛 |
| **IronClaw** | 50 | 50 (15 合并) | 15 | 35 | 0 | 🟢 Engine V2 冲刺，企业级聚焦 |
| **LobsterAI** | 1 | 50 (28 合并) | 28 | 22 | 0 | 🟢 网易有道背书，桌面体验深耕 |
| **TinyClaw** | 0 | 1 (1 关闭) | 1 | 0 | 0 | ⚪ 休眠维护态 |
| **Moltis** | 9 (9 关闭) | 12 (12 合并) | 12 | 5 | **1** ✅ | 🟢 工程效率标杆，Bug 当日清零 |
| **CoPaw/QwenPaw** | 42 (15 关闭) | 50 (33 合并) | 33 | 17 | 1 beta | 🔶 品牌迁移阵痛，社区活跃 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | ⚪ 无活动 |
| **ZeroClaw** | 46 (21 关闭) | 50 (21 合并) | 21 | 29 | 0 | 🟢 架构治理成熟，RFC 驱动 |

> **关键指标**：Moltis 实现 100% Issue 当日清零 + 100% PR 合并率；PicoClaw 待合并 PR 堆积 106 条为生态最高风险；OpenClaw 500 条 PR 更新但合并率仅 32%，review 危机显性化。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模定位** | 绝对龙头：500 Issues/500 PR 日更新量 = NanoBot × 10 | 体量远超同类，接近基础设施级项目 |
| **技术路线** | **"全渠道 + 多模型 + 内置沙箱"** 一体化架构，Codex/Moonshot/Kimi 等模型原生支持 | Hermes 侧重 TUI/隐私推理；ZeroClaw 走微内核插件化；NanoClaw 聚焦 Claude 生态 |
| **社区模式** | **贡献者众包型**：338 待合并 PR 显示参与门槛低、外部贡献活跃 | Moltis/IronClaw 为核心团队主导；LobsterAI 企业背书 |
| **核心优势** | ① 渠道覆盖最广（Telegram/Discord/Web/CLI 全矩阵）<br>② 模型生态最丰富（OpenRouter + 直连双模式）<br>③ 企业部署就绪（Codex app-server 审批策略、OAuth 集成） | 对比 Hermes 的记忆子系统、ZeroClaw 的 WASM 安全沙箱、NanoClaw 的 v2 架构解耦，OpenClaw 胜在**集成广度与开箱即用** |
| **相对短板** | Review 带宽不足（162/500 合并率）；Linux/Windows 桌面端长期缺失（#75 88 评论未决）；新模型"配置即支持"UX 陷阱（#37623） | Moltis 当日清零、NanoBot 30/51 合并率均优于 OpenClaw |

**生态位判定**：OpenClaw 是**"最大公约数"型基础设施**——非最技术前卫，但是最多场景覆盖、最易上手的默认选择，类似 Kubernetes 在容器编排中的位置。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与进展 |
|:---|:---|:---|
| **MCP 协议原生集成** | NanoBot ✅、NanoClaw ✅、Moltis ✅、Hermes (观望)、OpenClaw (部分) | NanoBot 已实现 ImageContent/按聊天隔离/连接容错；Moltis 补全 SSE 遗留传输；**OpenClaw 尚未原生支持**，#34097 仅 6 评论，存在生态位风险 |
| **长期记忆/跨会话状态** | Hermes (#6323, #13236)、ZeroClaw (#5849 Dream Mode)、OpenClaw (ACP 会话持久化 #67280) | Hermes 社区呼声最强烈（👍21）；ZeroClaw 提出"睡眠-反思"隐喻；OpenClaw 仅会话级持久化，无跨会话记忆架构 |
| **语音交互全链路** | ZeroClaw (全双工 PR #5942)、NanoClaw (Whisper 本地转录 #1876)、LobsterAI (TTS 扩展)、Moltis (voice 通道) | 从"文本 Bot"向"语音助手"跃迁明确；本地化（Whisper.cpp）vs 云端（Gemini STT）路线分化 |
| **生产环境韧性** | **全员重点** | OpenClaw (SIGKILL 兜底/重试机制)、NanoBot (模型 fallback/队列限界)、Hermes (TUI OOM)、ZeroClaw (SSRF 防护/环境变量隔离) |
| **企业安全与合规** | IronClaw (Secrets 自助 #2754)、ZeroClaw (WASM 插件 #5912)、NanoClaw (owner-approval #1877)、OpenClaw (Codex 审批策略 #68721) | 从"功能可用"到"审计可控"的需求升级，TEE/沙箱/审批链成为标配 |
| **品牌迁移/配置平滑升级** | CoPaw/QwenPaw (#3356)、NanoClaw (v1→v2 #1869) | 项目成熟期的共性阵痛，配置传播链路、数据迁移工具链成为隐性基础设施 |

---

## 5. 差异化定位分析

| 项目 | 核心用户画像 | 技术架构特征 | 功能侧重 | 关键差异化 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 开发者/技术团队、多平台部署需求者 | Node.js 单体，内置 gateway + Web UI | 全渠道聚合、多模型路由、Codex 集成 | **"最多连接"**：渠道×模型的组合爆炸覆盖 |
| **NanoBot** | 中文社区用户、IM 重度使用者、企业群管理员 | Python 异步，渠道适配器模式 | 飞书/微信/QQ/Teams 深度适配、MCP 多租户 | **"中国 IM 生态最优解"** |
| **Hermes Agent** | 隐私敏感用户、本地模型爱好者、Nix 用户 | Rust + Node.js 混合，TUI 优先 | 本地 llama.cpp、隐私推理（TDX）、记忆子系统 | **"隐私优先的极客工具"** |
| **Moltis** | 效率工具用户、技能市场消费者 | 日构建发布节奏，沙箱容器化 | 101 预置技能、自改进 Agent 循环、Kimi 快速跟进 | **"最快迭代+最低上手门槛"** |
| **ZeroClaw** | Rust 开发者、企业自托管、插件生态建设者 | 微内核 + WASM 插件（Extism）、schema 驱动 | 安全沙箱、语音全双工、Postgres 记忆后端 | **"架构最前卫的可扩展平台"** |
| **IronClaw** | NEAR 区块链生态用户、TEE 云服务使用者 | Engine V2 架构、WASM 运行时 | 链上技能注册（ClawHub）、TEE 凭证注入 | **"Web3 原生 AI 基础设施"** |
| **NanoClaw** | Claude 生态深度用户、Homelab/自托管爱好者 | v2 模块化：bridge/router/skill 分层 | Claude Code 无缝集成、本地 Ollama、Matrix E2EE | **"Claude 官方替代的最优自托管方案"** |
| **LobsterAI** | 网易有道内部用户、中文企业桌面场景 | Electron + React，SQLite 本地存储 | 钉钉/POPO 集成、定时任务、Agent 人设 | **"中文企业桌面端最成熟"** |
| **CoPaw/QwenPaw** | 阿里云生态用户、多智能体协作场景 | 插件系统 + Plan mode | 备份恢复、多智能体心跳、ACP SDK | **"阿里云系生态入口"** |

---

## 6. 社区热度与成熟度分层

```
【快速迭代期】日均 PR > 30，功能扩张为主
├── OpenClaw (500 PR/日，但 review 危机)
├── CoPaw/QwenPaw (50 PR，品牌迁移阵痛中)
└── IronClaw (50 PR，Engine V2 架构重构)

【质量巩固期】高合并率，稳定性优先
├── Moltis (100% 合并率，Bug 当日清零) ⭐ 标杆
├── NanoBot (59% 合并率，MCP/性能双轨)
└── ZeroClaw (42% 合并率，RFC 治理驱动)

【技术债务清理期】架构升级伴随回归
├── NanoClaw (v2 收官，配置传播盲区 #1870)
├── Hermes (记忆子系统建设，Zig 非相关)
└── NullClaw (Zig 0.16 迁移，网络 I/O 回归) 🔴

【休眠/维护期】
├── TinyClaw (1 PR/日，纯维护)
└── ZeptoClaw (零活动)

【企业背书期】
└── LobsterAI (网易有道，桌面体验深耕，合并率 56%)
```

**关键洞察**：Moltis 的"日构建 + 当日清零"模式证明**高频发布与高质量可兼得**；OpenClaw 的"高流量低合并率"揭示**规模扩张期的治理瓶颈**是生态共性挑战。

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的价值 |
|:---|:---|:---|
| **MCP 成为"USB-C"时刻** | NanoBot/Moltis/NanoClaw 全面接入，OpenClaw 滞后 | 工具集成标准统一降低生态碎片化，**未接入 MCP 的项目将面临兼容性边缘化** |
| **"配置即支持"UX 陷阱** | OpenClaw #37623 (GPT-5.4)、PicoClaw #2598 (WebUI 不显示) | 新模型/功能上线需**运行时验证层**，而非仅配置层声明，避免用户信任损耗 |
| **语音从"附加功能"变为"核心入口"** | ZeroClaw 全双工 PR、NanoClaw Whisper 本地方案、Gemini 原生 STT | **语音交互的延迟/打断/本地化**将成为下一轮体验竞争焦点，建议提前布局 VAD + 流式架构 |
| **"Agent 睡眠/反思"隐喻兴起** | ZeroClaw #5849 Dream Mode、Moltis 自改进循环 #803 | 用户不满足于"即时响应"，期望**持续学习、人格化的长期陪伴**，记忆系统需从"存储"升级为"整合" |
| **企业安全从"可选"变为"阻断"** | IronClaw Secrets 自助、ZeroClaw WASM 沙箱、OpenClaw 审批策略 | **SSRF/命令注入/环境变量泄露**成为生产部署红线，安全设计需前置到架构阶段 |
| **Review 带宽 = 项目天花板** | OpenClaw 338 待合并、PicoClaw 106 待合并 | 建议引入**合并队列自动化**（IronClaw #2719）、**PR 分级标签**、**核心团队 + 委托维护者**双层治理 |
| **ARM64/嵌入式成为新战场** | NullClaw Pi 5 问题、ZeroClaw aarch64 更新失败、PicoClaw RPi Zero W | **边缘 AI 部署**需求真实存在，但交叉编译测试矩阵投入不足，存在"先支持后修复"的技术债模式 |

---

*本报告基于 2026-04-21 各项目 GitHub 公开数据生成，适合用于技术选型、贡献策略制定及生态投资优先级评估。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-21

> 项目地址：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 数据周期：2026-04-20 至 2026-04-21

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度开发态势**：24 小时内 51 个 PR 更新（30 条已合并/关闭），12 个 Issues 更新（7 条关闭），代码吞吐量显著。核心进展集中在三方面：**Agent 性能与稳定性加固**（mohamed-elkholy95 的系列优化 PR 被拆分合并）、**MCP 生态完善**（ImageContent 支持、按聊天隔离、连接容错）、以及**用户体验修复**（/stop 保留上下文、Telegram 长消息截断）。社区对 OpenWebUI 官方集成、QQ 流式传输、人工接管机制等功能诉求持续发酵，但尚未进入开发排期。整体项目健康度良好，维护响应速度较快，但长期功能请求积压值得关注。

---

## 2. 版本发布

**无新版本发布**

> 最新版本仍为历史版本，今日未发布 Release。多个重要修复（如 `/stop` 上下文保留、Anthropic prefill 错误修复）已合并至主分支，建议关注后续补丁版本。

---

## 3. 项目进展

### 🔀 今日合并/关闭的重要 PR（精选 8 项）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#3299](https://github.com/HKUDS/nanobot/pull/3299) | hussein1362 | **`/stop` 保留部分上下文** — 修复 #2966，取消任务时保留已完成的工具结果和助手消息，避免用户完全重来 | ⭐⭐⭐ 高 — 解决核心 UX 痛点，减少用户挫败感 |
| [#3297](https://github.com/HKUDS/nanobot/pull/3297) | hussein1362 | **Anthropic 尾部助手消息剥离** — 防止会话历史以 assistant turn 结束时触发 400 prefill 错误 | ⭐⭐⭐ 高 — 消除 Anthropic  provider 的系统性崩溃 |
| [#2417](https://github.com/HKUDS/nanobot/pull/2417) | conversun | **模型故障自动转移** — 主模型耗尽重试后，按列表顺序尝试 fallback models（429/500/502/503 场景） | ⭐⭐⭐ 高 — 生产环境可靠性关键特性 |
| [#2523](https://github.com/HKUDS/nanobot/pull/2523) | conversun | **禁止向子代理委派 MCP 依赖任务** — SpawnTool 动态注入 MCP 工具名到描述，让 LLM 知悉子代理无 MCP 能力 | ⭐⭐⭐ 高 — 消除静默失败，提升调试效率 |
| [#2416](https://github.com/HKUDS/nanobot/pull/2416) | conversun | **MCP ImageContent 支持** — 正确处理 base64 编码图像（如登录 QR 码），替代之前的 `str(block)` 损坏输出 | ⭐⭐⭐ 高 — 解锁 MCP 图像类工具场景 |
| [#2424](https://github.com/HKUDS/nanobot/pull/2424) | conversun | **MCP 按聊天隔离 (`allowedChats`)** — 支持不同群组绑定不同 MCP 服务器实例（如多小红书账号） | ⭐⭐⭐ 高 — 多租户/多账号商业场景核心能力 |
| [#3240](https://github.com/HKUDS/nanobot/pull/3240) | mohamed-elkholy95 | **Shell 扩展绕过加固** — 修复 #2989 的 `_guard_command` 正则绕过（`$(echo tee)` 等技巧） | ⭐⭐⭐ 高 — 安全纵深防御 |
| [#3158](https://github.com/HKUDS/nanobot/pull/3158) 及拆分系列 | mohamed-elkholy95 | **Agent 性能全面优化** — 拆分为 #3180-#3184 后，队列限界、历史写入批处理、工具 schema 缓存、首 token 流式优先等已合并 | ⭐⭐⭐⭐⭐ 极高 — 约 6.6 万行代码级分析，系统性提升响应速度和正确性 |

**整体评估**：今日合并内容覆盖 **可靠性（fallback/容错）、安全性（命令注入加固）、性能（I/O 与流式优化）、MCP 生态成熟度** 四大战略方向，项目技术债显著降低，生产就绪度提升一个台阶。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#3143](https://github.com/HKUDS/nanobot/issues/3143) LLM `messages parameter is illegal` 错误 | **9 评论** | **高频生产故障** — 飞书渠道 Token 合并时触发 code 1214，tiktoken 计算 71835/65536 超限。用户反馈"出现频率挺高"，但今日已关闭，需确认是否彻底修复或仅为个案关闭 |
| 2 | [#3326](https://github.com/HKUDS/nanobot/issues/3326) MCP 根级通知支持 (scheduled-reminder) | **3 评论** | **架构扩展诉求** — 用户希望 NanoBot 作为 MCP 客户端接收服务器主动推送，而非仅轮询。涉及协议层扩展，今日已关闭，可能因范围过大或已有替代方案 |
| 3 | [#2389](https://github.com/HKUDS/nanobot/issues/2389) OpenWebUI 官方渠道支持 | **3 评论** | **生态位争夺** — 用户希望将 OpenWebUI 作为 NanoBot 的聊天前端，反映社区对"统一 AI 网关"定位的期待。创建于 3-23，持续活跃近一个月，显示需求韧性 |

**背后诉求洞察**：
- **#3143**：核心矛盾是 **Token 计算与渠道限制的动态适配** — 65536 限制与 tiktoken 预估的 gap 在合并轮次中放大
- **#2389**：NanoBot 作为"渠道聚合器"的品牌认知已形成，用户不愿在 OpenWebUI 和 NanoBot 之间二选一，而是希望** NanoBot 吞噬 OpenWebUI 的流量入口**

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3328](https://github.com/HKUDS/nanobot/issues/3328) | **OPEN** | **DeepSeek "failed to deserialize"** — 0.1.5→0.1.5.post1 升级后 Telegram 全量消息报错，回滚配置无效 | ❌ **无** — 今日新建，需紧急关注 |
| 🔴 **高** | [#3324](https://github.com/HKUDS/nanobot/issues/3324) | **OPEN** | **Windows WinError 193** — chrome-devtools-mcp 集成时 `npx` 命令被识别为无效 Win32 应用，疑似 Node 路径/架构问题 | ❌ **无** — 标记 `good first issue` |
| 🟡 **中** | [#2921](https://github.com/HKUDS/nanobot/issues/2921) | **OPEN** | **MS Teams 重启通知配置暴露但未实现** — `restart_notify_*` 字段存在但逻辑缺失，造成配置误导 | ❌ **无** — 创建于 4-8，已积压 12 天 |
| 🟡 **中** | [#3143](https://github.com/HKUDS/nanobot/issues/3143) | CLOSED | LLM messages 参数非法（Token 超限） | 未明确关联 PR |
| 🟢 **低** | [#3315](https://github.com/HKUDS/nanobot/issues/3315) | CLOSED | Telegram 消息过长导致发送失败 | ✅ 已修复 |
| 🟢 **低** | [#3073](https://github.com/HKUDS/nanobot/issues/3073) | CLOSED | Agent 在 history.jsonl 上无限 `read_file` 循环 | ✅ 已修复 |
| 🟢 **低** | [#3319](https://github.com/HKUDS/nanobot/issues/3319) | CLOSED | Cron job 工具提示泄漏到用户渠道 | ✅ 已修复（#3299 相关） |

**稳定性警报**：**#3328 DeepSeek 反序列化错误** 为今日新增回归，影响升级用户全量消息，建议维护者优先复现。Windows MCP 集成问题 (#3324) 阻碍开发者体验，但社区贡献者可介入。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 信号强度 | 纳入可能性分析 |
|:---|:---|:---|:---|
| **OpenWebUI 官方渠道** | [#2389](https://github.com/HKUDS/nanobot/issues/2389) | 🔶🔶🔶 强 | 中 — 架构上 NanoBot 是"渠道后端"，OpenWebUI 是"前端界面"，两者定位存在张力。若实现可能是适配器模式而非原生渠道 |
| **QQ 流式传输支持** | [#3333](https://github.com/HKUDS/nanobot/issues/3333) | 🔶🔶 中 | **高** — 已关闭但诉求明确（"容易被渠道封号"），QQ 渠道维护者可能快速跟进，技术实现成本较低 |
| **人工接管 / Bot 暂停机制** | [#3322](https://github.com/HKUDS/nanobot/issues/3322) | 🔶🔶 中 | 中 — WhatsApp 场景真实痛点（人工客服与 Bot 冲突），但涉及会话状态机改造，复杂度中等 |
| **MCP 根级通知接收** | [#3326](https://github.com/HKUDS/nanobot/issues/3326) | 🔶 弱 | 低 — 已关闭，可能超出当前 MCP 客户端设计范畴，需协议级支持 |

**路线图判断**：下一版本大概率聚焦 **MCP 生态完善**（conversun 系列 PR 已铺底）和 **性能稳定性**（mohamed-elkholy95 优化）。用户-facing 的新渠道/新交互模式可能暂缓。

---

## 7. 用户反馈摘要

### 😫 核心痛点

> *"目前这类错误出现的频率挺高的"* — [#3143](https://github.com/HKUDS/nanobot/issues/3143) 作者 bigsinger，LLM 参数非法错误

> *"有时候AI只是走了弯路，需要我们提供方向指示，这时候丢失整个回合的上下文，是一种严重的损失"* — [#2966](https://github.com/HKUDS/nanobot/issues/2966) 作者 Dasffafa，/stop 上下文丢失（**已修复** ✅）

> *"QQbot似乎全是非流式的，容易被渠道封号"* — [#3333](https://github.com/HKUDS/nanobot/issues/3333) 作者 Chincherry93，平台合规焦虑

> *"There is no reliable way to pause the bot for a specific conversation without interrupting the entire gateway"* — [#3322](https://github.com/HKUDS/nanobot/issues/3322) 作者 CHM5，人工客服混排困境

### 😊 积极反馈（隐含）

- `/stop` 保留上下文修复 (#3299) 被用户主动认领"我会尝试发一个pr修复这个bug"（#2966），显示社区参与意愿强
- mohamed-elkholy95 的巨型 PR #3158 被维护者耐心拆分审查，反映项目治理成熟

### 🎯 使用场景洞察

| 场景 | 来源 |
|:---|:---|
| **飞书企业群 + 大 Token 工作流** | #3143 |
| **WhatsApp 人工客服混排** | #3322 |
| **多小红书账号按群隔离** | #2424 |
| **Windows 本地 MCP 开发** | #3324 |
| **"谢谢"类反馈后的行为固化** | #3339（PR）|

---

## 8. 待处理积压

| 积压项 | 创建时间 | 最后更新 | 风险等级 | 提醒 |
|:---|:---|:---|:---|:---|
| [#2389](https://github.com/HKUDS/nanobot/issues/2389) OpenWebUI 官方渠道 | 2026-03-23 | 2026-04-20 | 🟡 中 | **29 天无结论**，社区反复询问，建议维护者明确拒绝或纳入 Backlog |
| [#2921](https://github.com/HKUDS/nanobot/issues/2921) MS Teams 重启通知配置暴露 | 2026-04-08 | 2026-04-20 | 🟡 中 | **12 天未响应**，配置与实现不一致是技术债，需清理字段或补全逻辑 |
| [#3202](https://github.com/HKUDS/nanobot/pull/3202) 入站队列限界（改进版） | 2026-04-16 | 2026-04-20 | 🟢 低 | 基于已关闭 #3180 的改进，待审查，关联核心稳定性 |
| [#3204](https://github.com/HKUDS/nanobot/pull/3204) ProfilingHook 可选计时 | 2026-04-16 | 2026-04-20 | 🟢 低 | 性能诊断基础设施，开发体验工具 |

**维护者行动建议**：优先响应 **#3328 DeepSeek 回归**（新建高优）和 **#2389 OpenWebUI 决策**（长期悬置消耗社区耐心）。

---

> 📊 **日报生成依据**：GitHub Issues/PR 元数据、标签、时间序列、评论情感及代码变更摘要。未包含私有讨论或 CI 状态细节。
> 
> 🔗 **项目主页**：[https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-21

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**：24小时内 50 个 Issues 和 50 个 PR 更新，社区讨论密度显著。核心进展集中在 **TUI 稳定性加固**（Node V8 OOM 修复）、**API 服务器并发安全**（幂等请求去重）、以及 **AI 基础设施扩展**（NEAR AI/Phala AI 隐私推理、Gemini 原生多模态 STT）。无新版本发布，但 18 个 PR 已合并/关闭，32 个待审阅，项目整体推进稳健，内存管理与并发安全成为近期技术债务清理重点。

---

## 2. 版本发布

**无新版本发布**（v0.9.0 仍为最新版本）

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#13231** | OutThisLife | **TUI 稳定性三重修复**：解决 Node V8 长时间会话 OOM、GatewayClient 内存泄漏、终端 resize 性能问题 | [PR #13231](https://github.com/NousResearch/hermes-agent/pull/13231) |
| **#13119** | pc418 | **Anthropic 流式中断修复**：流式失败时返回格式正确的 Anthropic-format stub，而非硬编码 OpenAI 格式 | [PR #13119](https://github.com/NousResearch/hermes-agent/pull/13119) |
| **#13233** | rodrigoeqnit | 重构 PR（已关闭，未合并） | [PR #13233](https://github.com/NousResearch/hermes-agent/pull/13233) |

### 待审阅的高价值 PR

| PR | 作者 | 技术方向 | 链接 |
|:---|:---|:---|:---|
| **#12201** | amiller | **NEAR AI + Phala AI 私有推理**：Intel TDX 远程证明 + E2EE，零信任云推理基础设施 | [PR #12201](https://github.com/NousResearch/hermes-agent/pull/12201) |
| **#13239** | Yukipukii1 | **API 服务器并发安全**：幂等键并发请求去重，防止重复执行 | [PR #13239](https://github.com/NousResearch/hermes-agent/pull/13239) |
| **#13174** | Twanislas | **Gemini 原生多模态 STT**：超越 Whisper 的听觉场景分析，支持非语音音频事件 | [PR #13174](https://github.com/NousResearch/hermes-agent/pull/13174) |
| **#13238** | teknium1 | **OpenRouter 模型过滤**：隐藏不支持 tool calling 的模型，减少运行时失败 | [PR #13238](https://github.com/NousResearch/hermes-agent/pull/13238) |
| **#13236** | rfpassos | **hermes_mem 内存子系统**：原生操作记忆设计文档 + SQLite/FTS5 草案 | [PR #13236](https://github.com/NousResearch/hermes-agent/pull/13236) |

**整体评估**：项目今日在**可靠性工程**（内存、并发、格式兼容性）和**AI 基础设施多元化**（隐私推理、多模态输入）两条主线同步推进，技术深度显著。

---

## 4. 社区热点

### 🔥 最高讨论热度

| Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#7893** [CLOSED] Gemini 原生 Provider 400 认证冲突 | **17** | 同时存在 `GEMINI_API_KEY` 和 Vertex AI 凭证导致"Multiple authentication credentials"错误，需明确凭证优先级 | [Issue #7893](https://github.com/NousResearch/hermes-agent/issues/7893) |
| **#6323** [OPEN] 集成 mempalace 外部记忆 | **11** / 👍21 | 社区强烈需求**持久化、可查询的跨会话记忆**，当前上下文窗口限制长程任务 | [Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323) |
| **#9782** [CLOSED] nix-darwin 支持 | **7** | macOS 用户群体扩大，Nix 生态覆盖需从 NixOS 扩展到 nix-darwin | [Issue #9782](https://github.com/NousResearch/hermes-agent/issues/9782) |
| **#12242** [CLOSED] StepFun API JSON 截断错误 | **7** | `context_compressor.py` 暴力截断破坏 JSON 结构，需**结构化截断**或**提前序列化校验** | [Issue #12242](https://github.com/NousResearch/hermes-agent/issues/12242) |

### 诉求分析

- **认证复杂性**（#7893, #12639）：Google/Vertex AI/OpenRouter 多层代理导致凭证冲突，用户呼吁**原生 Google Provider** 绕过中间商
- **记忆基础设施**（#6323, #13236）：社区已形成共识——Hermes 需要原生记忆子系统，mempalace 集成与 hermes_mem 自研两条路线并行
- **开发者体验**（#9782, #5346, #12894）：CLI/TUI/安装路径的摩擦成本持续被提及

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | **#13208** | **工具调用无限循环**：同一错误重复 90+ 次，无循环检测/退避机制 | OPEN, 0评论，需紧急响应 | ❌ 无 |
| 🟠 **High** | **#13164** [CLOSED] | 大工具结果耗尽 tail token 预算，对话消息被 summary 吞没 | CLOSED | #13164 自身 |
| 🟠 **High** | **#13121** | Gateway 重启丢失即时上下文：JSONL vs SQLite transcript 不一致 | OPEN | ❌ 无 |
| 🟡 **Medium** | **#12242** [CLOSED] | context_compressor 截断破坏 JSON 结构 | CLOSED | #12242 自身 |
| 🟡 **Medium** | **#12068** | llama.cpp 内存保存工具调用：未转义撇号导致 JSON 解析失败 | OPEN | ❌ 无 |
| 🟡 **Medium** | **#12952** | 自定义 keepalive transport 破坏 ChatGPT Codex 后端连接 | OPEN | ❌ 无 |
| 🟡 **Medium** | **#13206** | Webhook 投递崩溃：TELEGRAM_HOME_CHANNEL 为用户名时 int() 转换失败 | OPEN | ❌ 无 |
| 🟡 **Medium** | **#13195** | Telegram 群组 session 分裂：message_thread_id 误触发 | OPEN | ❌ 无 |
| 🟢 **Low** | **#13091** | `/v1/props` 应为 `GET /props`（llama.cpp 兼容） | OPEN | ❌ 无 |

**稳定性焦点**：今日合并的 #13231（TUI OOM）和 #13119（Anthropic stub 格式）直接回应了生产环境的可靠性痛点。但 **#13208 无限循环**作为新报告的 Critical 级问题，尚未获得社区关注，存在用户流失风险。

---

## 6. 功能请求与路线图信号

| 功能方向 | Issue/PR | 信号强度 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| **原生记忆子系统** | #6323 (mempalace) + #13236 (hermes_mem) | ⭐⭐⭐⭐⭐ | **高** — 设计文档已出，社区呼声强烈 |
| **原生 Google/Vertex AI Provider** | #12639 + #7893 | ⭐⭐⭐⭐⭐ | **高** — 绕过 OpenRouter 402/限流是刚需 |
| **隐私推理基础设施** | #12201 (NEAR AI + Phala TDX) | ⭐⭐⭐⭐☆ | 中高 — 技术前瞻性强，需评估维护成本 |
| **Gemini 多模态 STT** | #13174 | ⭐⭐⭐⭐☆ | 中高 — 差异化能力，依赖 Google 生态 |
| **Skills 生命周期管理** | #11425 | ⭐⭐⭐☆☆ | 中 — 长期运维需求，非阻塞 |
| **WhatsApp 群组行为控制** | #7992 [CLOSED] | ⭐⭐⭐☆☆ | 中 — 企业场景需求 |
| **Slack Block Kit 迁移** | #8552 | ⭐⭐☆☆☆ | 低-中 — 体验优化，非核心路径 |

**路线图推断**：记忆 + 原生 Google Provider 构成 v0.10.0 最可能的双核心；隐私推理（TDX）若合并将标志 Hermes 进入企业级安全赛道。

---

## 7. 用户反馈摘要

### 😤 痛点

> *"I frequently encounter HTTP 402 and API Rate Limits from OpenRouter... Hermes tries to use native tool calling which OpenRouter charges extra for"* — #12639
> 
> **中间商依赖税**：OpenRouter 对 tool calling 加价，用户被迫寻找原生 Provider 绕过。

> *"No module named pip"* — #3002
> 
> **安装脆弱性**：NeuTTS 等可选组件的 venv 初始化不可靠，阻断首次体验。

> *"iCloud Drive files are faulted in on demand... blocks the entire turn for tens of seconds"* — #10047
> 
> **云存储路径性能陷阱**：同步盘文件的按需拉取阻塞系统提示构建。

### 😊 满意

> *"WhatsApp onboarding well for direct messages"* — #7992
> 
> 即时通讯平台集成获认可，但群组场景仍需精细化控制。

### 💡 使用场景洞察

- **长程编程任务**（#6323）：用户需要跨会话的代码库理解连续性
- **多平台并发部署**（#9751, #10147）：Docker + cron + gateway 的混合部署模式成为常态，需要进程级协调
- **本地模型优先**（#12068, #13091）：llama.cpp 作为后端的使用比例上升，兼容性需求增长

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| **#3002** NeuTTS 安装失败 | 2026-03-25 | 2026-04-20 | 🔴 26天无关闭，阻断新用户 | 安装流程需重构 |
| **#6323** mempalace 集成 | 2026-04-08 | 2026-04-20 | 🟡 13天，但 #13236 已并行启动 | 需协调外部集成 vs 自研路线 |
| **#5346** Shift+Enter 换行 | 2026-04-05 | 2026-04-20 | 🟢 低优先级，但 👍7 显示 UX 债务 | 单行修复，可快速 wins |
| **#7446** 可配置心跳 | 2026-04-10 | 2026-04-21 | 🟡 11天，PR 待审 | 平台差异化控制需求明确 |
| **#11685** → **#13236** hermes_mem 文档 | 2026-04-17 | 2026-04-20 | 🟡 重复 PR，需合并或关闭旧版 | rfpassos 需清理 #11685 |

---

*日报基于 GitHub 公开数据生成，时间范围：2026-04-20 至 2026-04-21*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-21

## 1. 今日速览

PicoClaw 今日呈现**高活跃度、高积压**特征：24小时内PR更新达114条（106条待合并），Issues更新13条，社区参与热情显著。但**合并吞吐率极低**（仅8条PR关闭/合并），积压风险加剧。核心痛点集中在**Provider认证层**（OpenAI兼容、OAuth、DeepSeek等多处认证故障）和**Android端体验缺陷**。夜间构建版本 `v0.2.6-nightly.20260420.6126ede9` 已发布，但稳定性存疑。

---

## 2. 版本发布

### 🌙 Nightly Build: v0.2.6-nightly.20260420.6126ede9
| 属性 | 内容 |
|:---|:---|
| 发布日期 | 2026-04-20 |
| 构建类型 | 自动化夜间构建（可能不稳定） |
| 完整变更日志 | [compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) |

**⚠️ 迁移注意事项**
- 该构建明确标注 **"may be unstable, use with caution"**
- 包含 commit `6126ede9`，涉及 gateway 启动逻辑变更
- **已知兼容性问题**：大写字母模型标识符会导致 gateway 启动失败（见 Issue #2597，已于今日关闭）

---

## 3. 项目进展

### 今日合并/关闭的 PR（2条）

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#2343](https://github.com/sipeed/picoclaw/pull/2343) | manaporkun | **已关闭** | Antigravity provider 客户端版本升级至 1.25.0，解锁 gemini-3.1 系列模型访问权限 |
| （无明确合并PR，8条关闭/合并中仅 #2343 详情可见） | — | — | 其余7条未在展示列表中显式标注为 merged |

**整体推进评估**：今日实际功能交付有限。106条待合并PR形成严重瓶颈，涵盖安全加固（#2313 Agent Shield）、多用户支持、LINE/MQTT/Email渠道扩展等关键方向，但缺乏维护者审阅响应。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#2578](https://github.com/sipeed/picoclaw/issues/2578) `openai_compat` provider 静默丢弃 Authorization header | **11条** | **阻断性生产故障**：v0.2.6 核心认证逻辑回归，所有 OpenAI 兼容 API 完全不可用。用户已通过抓包确认根因，社区急需 hotfix |
| 2 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) Cron 定时任务触发 channel error | 4条 | **边缘场景稳定性**：Raspberry Pi Zero W + Telegram 场景下，高频定时任务导致渠道状态机异常，反映嵌入式/低功耗设备资源管理缺陷 |
| 3 | [#2367](https://github.com/sipeed/picoclaw/issues/2367) Android 英文界面残留中文 | 3条 | **国际化完成度**：最后一屏标题未翻译，细节体验受损 |
| 4 | [#2368](https://github.com/sipeed/picoclaw/issues/2368) Android 模型配置状态不同步 | 3条 | **配置持久化层缺陷**：Web端配置与App端状态不一致，"not configured" 提示误导用户 |
| 5 | [#2513](https://github.com/sipeed/picoclaw/issues/2513) Gateway 启动异常（DingTalk渠道） | 3条 | **渠道启动时序问题**：`-public` 模式下 gateway 进程异常退出 |

**诉求洞察**：Provider 认证层（#2578、#2584、#2602）形成**信任危机集群**，用户配置API key后仍持续失败，严重损害项目可靠性声誉。Android端（#2367/#2368）连续反馈表明移动端QA流程存在盲区。

---

## 5. Bug 与稳定性

### 🐛 今日报告 Bug（按严重程度排序）

| 严重等级 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P0-阻断** | [#2578](https://github.com/sipeed/picoclaw/issues/2578) | OPEN | `openai_compat` **完全丢弃 Authorization header**，所有 OpenAI 兼容服务不可用 | ❌ 无 |
| **P1-严重** | [#2602](https://github.com/sipeed/picoclaw/issues/2602) | OPEN | OAuth 认证双失败（OpenAI + Antigravity），"Authorization Error" | ❌ 无 |
| **P1-严重** | [#2598](https://github.com/sipeed/picoclaw/issues/2598) | OPEN | v0.2.4→v0.2.6 升级后 WebUI **完全无法显示** | ❌ 无 |
| **P1-严重** | [#2600](https://github.com/sipeed/picoclaw/issues/2600) | OPEN | MCP 调用发送 `arguments: null` 违反协议规范 | ❌ 无 |
| **P2-一般** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | OPEN | Cron 定时任务 channel error | ❌ 无 |
| **P2-一般** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | OPEN | Gateway 启动异常（DingTalk） | ❌ 无 |
| **P2-一般** | [#2471](https://github.com/sipeed/picoclaw/issues/2471) | OPEN | Docker GUI 连接失败 + NVIDIA AI / Gemini 模型配置问题 | ❌ 无 |
| **P2-一般** | [#2593](https://github.com/sipeed/picoclaw/issues/2593) | OPEN | 标签资源统计模糊匹配问题（中文描述，信息不完整） | ❌ 无 |
| **P2-一般** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | OPEN | Android 国际化残留 | ❌ 无 |
| **P2-一般** | [#2368](https://github.com/sipeed/picoclaw/issues/2368) | OPEN | Android 模型配置状态不同步 | ❌ 无 |

### ✅ 今日关闭 Bug（2条）

| Issue | 关闭方式 | 说明 |
|:---|:---|:---|
| [#2597](https://github.com/sipeed/picoclaw/issues/2597) | 快速修复 | 模型标识符大写字母导致 gateway 启动失败，**nightly 构建已修复** |
| [#2584](https://github.com/sipeed/picoclaw/issues/2584) | 已关闭 | DeepSeek 401 认证失败（与 #2578 可能同源） |

**稳定性评估**：🔴 **高风险**。v0.2.6 存在**认证层系统性回归**（#2578、#2584、#2602 可能共享根因），建议维护者立即启动 hotfix 分支。

---

## 6. 功能请求与路线图信号

### 📬 新功能需求

| Issue | 领域 | 纳入可能性评估 |
|:---|:---|:---|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) Email 原生渠道 | Channel | ⭐⭐⭐⭐⭐ **高**。企业/科研场景刚需，无现有PR但诉求清晰 |
| — | Multi-User | ⭐⭐⭐⭐⭐ **已存在PR** [#2313](https://github.com/sipeed/picoclaw/pull/2313)（Agent Shield + 多用户），但106条积压中审阅优先级不明 |

### 🔧 相关推进中 PR

| PR | 功能 | 状态 | 路线图相关性 |
|:---|:---|:---|:---|
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | LINE SDK v8 重构 | OPEN | 渠道稳定性标准化 |
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | QQ 连接稳定性可配置 | OPEN | 长连接渠道韧性 |
| [#1706](https://github.com/sipeed/picoclaw/pull/1706) | MQTT 渠道 + 健康检查 | OPEN | IoT/边缘场景扩展 |
| [#1657](https://github.com/sipeed/picoclaw/pull/1657) | HTTP 异步消息入口 | OPEN | 外部系统集成 |
| [#1124](https://github.com/sipeed/picoclaw/pull/1124) | Affine 工作空间集成 | OPEN | 知识管理生态 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 原声引用 | 根因归类 |
|:---|:---|:---|
| **认证完全失效** | "API key silently dropped from all config sources" | Provider 配置解析层回归 |
| **升级即损坏** | "After upgrading from 0.2.4 to 0.2.6, the web UI cannot display properly" | 前端/静态资源兼容性断裂 |
| **配置状态迷雾** | "not configured remains under the model and it cannot be selected" | 多端状态同步缺失 |
| **嵌入式设备脆弱** | "Rpi Zero W...channel error...every hour" | 资源受限环境缺乏优雅降级 |

### 👍 正向信号

- 用户积极进行**深度诊断**（#2578 作者自行抓包定位根因）
- 企业场景需求明确（Email渠道、Affine集成、Agent安全加固）
- 社区贡献活跃（114条PR更新证明外部参与度高）

---

## 8. 待处理积压

### ⏰ 长期未响应高价值 PR（需维护者介入）

| PR | 创建时间 | 滞留天数 | 风险说明 |
|:---|:---|:---|:---|
| [#500](https://github.com/sipeed/picoclaw/pull/500) | 2026-02-19 | **61天** | LINE SDK 重构，与 #2413 可能重复，需协调合并策略 |
| [#957](https://github.com/sipeed/picoclaw/pull/957) | 2026-03-01 | **51天** | 配置覆盖 bugfix，影响新用户体验 |
| [#1261](https://github.com/sipeed/picoclaw/pull/1261) | 2026-03-09 | **43天** | **安全紧急**：exec 工具环境变量泄露，标记 "urgent requirement" |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | 2026-04-03 | **18天** | 架构级安全加固 + 多用户，体积大需分段审阅 |

### 📌 维护者行动建议

1. **立即**：创建 `hotfix/v0.2.7` 分支，优先修复 #2578 认证头丢失（可能涉及 commit `51eecde` 的 HTTP client 变更）
2. **本周**：审阅 #1261 环境变量消毒（安全红线）
3. **本月**：建立 PR 分类标签体系，疏解106条待合并积压

---

*日报生成时间：2026-04-21 | 数据来源：GitHub API 快照 | 项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-21

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> **分析周期**: 2026-04-20 至 2026-04-21  
> **数据快照**: Issues +1/-0, PRs +17 待合并 / +8 已合并关闭, Releases 0

---

## 1. 今日速览

NanoClaw 今日保持**高强度开发节奏**，24 小时内 25 个 PR 有更新，8 个成功落地，17 个仍在 review 队列。社区重点围绕 **v2 架构收尾**（v1→v2 迁移 action items 清理）、**新渠道扩展**（Signal v2、语音转录）以及 **MCP 生态集成**（Home Assistant、Vikunja、Tailscale）三线并进。Issues 侧仅 1 个新 Bug 报告，整体稳定性信号良好，但 `ASSISTANT_NAME` 配置失效问题反映出 v2 多模块间的配置传播仍有盲区。

---

## 2. 版本发布

**无新版本发布。**  
当前版本线聚焦 v2 稳定化，[PR #1869](https://github.com/qwibitai/nanoclaw/pull/1869) 刚完成 v1→v2 的 5 项遗留 action items 清理，但尚未触发 release cut。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（8 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) | gavrielc | **Land v1→v2 action-items**：删除死配置常量、重建时区格式化、修复 `CLAUDE.md` 模板变量、统一 `shouldEngage` 逻辑、清理废弃类型 | v2 架构债务清偿里程碑，消除 5 项已知技术债 |
| [#1877](https://github.com/qwibitai/nanoclaw/pull/1877) | gavrielc | **Engagement policy 路由化 + 未知渠道注册流**：将 bridge/router 接缝重构为 flood gate + subscribe 信号，新增 owner-approval 机制 | 安全模型升级：未知渠道需人工审批，防止未授权接入 |
| [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) | chiptoe-svg | **Codex Provider via app-server JSON-RPC**：完整 agent loop，支持 session resume、streaming、MCP、native compaction | 首个非-Claude planner 的 provider 实现，架构解耦关键一步 |
| [#1859](https://github.com/qwibitai/nanoclaw/pull/1859) | wilderfield | **Ollama Provider 技能**：`/add-ollama-provider` 操作技能 + 文档，支持本地模型路由 | 私有化部署能力补齐，绕过 OneCLI 代理 |
| [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) | talmosko-code | **OpenCode 文档修复**：SDK/CLI 锁定 1.4.17，覆盖层传播步骤，环境变量说明 | 防止上游 breaking change 导致集成失效 |
| [#1873](https://github.com/qwibitai/nanoclaw/pull/1873) | ira-at-work | **忽略 `.env*` 变体**：防止 `.env.local` 等敏感文件误提交 | 安全基线加固 |
| [#1727](https://github.com/qwibitai/nanoclaw/pull/1727) | bitcryptic-gw | **原生凭证代理**：替代 OneCLI 网关的 Unraid 模板变量注入方案 | 容器化部署体验优化，保留向后兼容 |

**整体评估**：今日合并覆盖 **架构清理、安全加固、多 provider 扩展、私有化部署** 四大主题，v2 进入"功能完备 + 债务清偿"的收官阶段。

---

## 4. 社区热点

> 注：今日所有 PR 评论数均显示为 `undefined`，可能因 API 数据异常或项目未启用 discussion review。以下基于 PR 内容复杂度与更新频率判断热点。

| 热点 PR | 讨论焦点 | 背后诉求 |
|:---|:---|:---|
| [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) Codex Provider | **架构选择争议**：为何用 `app-server` 而非官方 `@openai/codex-sdk` | 社区关注供应商锁定风险，作者明确回应 SDK 存在 breaking API 重写（UUID → `ses_` 前缀），app-server 是稳定性优先的务实选择 |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix E2EE | **长期活跃的大型 PR**（3 月 4 日创建，持续更新至今日） | 企业/隐私敏感用户对去中心化、端到端加密渠道的强需求；per-group model/effort 配置反映多租户场景 |
| [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) Home Assistant MCP | IoT 智能家居集成 | 个人 AI 助手与家庭自动化系统的融合趋势，NanoClaw 作为"中控大脑"的定位验证 |
| [#1876](https://github.com/qwibitai/nanoclaw/pull/1876) 本地 Whisper 语音转录 | **离线能力 + 成本敏感**：`openai-whisper` vs `whisper.cpp` 双后端 | 用户拒绝持续 API 调用费用，要求完全本地化的语音交互能力；RHEL/Rocky 9 的 ffmpeg  workaround 显示企业 Linux 部署痛点 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔶 **中** | [#1870](https://github.com/qwibitai/nanoclaw/issues/1870) `ASSISTANT_NAME` 在 channel skills 注册 group 时未生效，bot 仍自称 "Andy" | **OPEN**，0 评论，待诊断 | **无** |
| 🔷 **低**（已修复）| `.env*` 变体文件可能误提交 | **CLOSED** via [#1873](https://github.com/qwibitai/nanoclaw/pull/1873) | ✅ [#1873](https://github.com/qwibitai/nanoclaw/pull/1873) |
| 🔷 **低**（已修复）| OpenCode SDK 1.14.x breaking change 导致集成失效 | **CLOSED** via [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) | ✅ [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) |

**#1870 深度分析**：  
根因 identified 为 **channel skills 未传递 `--assistant-name` 参数至 `register`**，导致 group 级别的 `CLAUDE.md` 模板渲染时使用硬编码默认值 "Andy"。该 Bug 揭示 v2 的配置传播链路存在断点：`.env` → 主进程 ✅，但 `.env` → channel skill → group overlay ❌。建议维护者优先处理，因直接影响品牌定制体验。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 PR/Issue | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| **Signal 原生渠道** | [#1875](https://github.com/qwibitai/nanoclaw/pull/1875) `/add-signal-v2` | 🔥 **高** | 今日新建，文档完备，覆盖注册/链接双模式，无代码依赖仅 skill |
| **语音消息转录** | [#1876](https://github.com/qwibitai/nanoclaw/pull/1876) Whisper 双后端 | 🔥 **高** | 渠道无关 skill，填补语音交互空白，本地优先符合社区价值观 |
| **YouTube 历史工具** | [#1872](https://github.com/qwibitai/nanoclaw/pull/1872) | ⚠️ **中** | 技术挑战大（YouTube 2016 年移除官方 API），采用隐私审查文件 + Data API 替代方案，合规风险待评估 |
| **Pre-commit 工程规范** | [#1874](https://github.com/qwibitai/nanoclaw/pull/1874) | ⚠️ **中** | 质量基础设施，但 `vitest` 全量跑可能拖慢提交体验，需权衡 |
| **Vikunja 任务管理** | [#1742](https://github.com/qwibitai/nanoclaw/pull/1742) | ✅ **已成熟** | 4 月 11 日创建，持续更新，功能完整待 merge |
| **Matrix E2EE** | [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | ⏳ **待收尾** | 大型 PR 已运行 1.5 月，可能因 scope 过大需拆分 |

---

## 7. 用户反馈摘要

> 从 Issues/PR 描述中提炼的真实使用场景与痛点

| 痛点/场景 | 来源 | 情感信号 |
|:---|:---|:---|
| **"Andy" 硬编码名称无法覆盖** — 品牌定制需求受阻 | [#1870](https://github.com/qwibitai/nanoclaw/issues/1870) | 😤 挫败 |
| **mount 路径错误提示模糊** — `/setup` 时 trial-and-error | [#1817](https://github.com/qwibitai/nanoclaw/pull/1817) | 😕 困惑 |
| **无凭证启动不 fail-fast** — 容器重启后 stale state 导致二次故障 | [#1290](https://github.com/qwibitai/nanoclaw/pull/1290) | 😤 挫败 |
| **`.claude.json` 只读挂载导致 EROFS 静默崩溃** — 代理未启动即退出 | [#1090](https://github.com/qwibitai/nanoclaw/pull/1090) | 😱 严重 |
| **RHEL/Rocky 9 上 ffmpeg 安装失败** — 企业 Linux 兼容性 | [#1876](https://github.com/qwibitai/nanoclaw/pull/1876) | 😕 困惑 |
| **OneCLI 代理复杂，求简化凭证注入** — Unraid 用户门槛 | [#1727](https://github.com/qwibitai/nanoclaw/pull/1727) | 😌 缓解（已解决）|
| **拒绝持续 API 费用，要求完全离线能力** — Ollama + Whisper 本地方案 | [#1859](https://github.com/qwibitai/nanoclaw/pull/1859), [#1876](https://github.com/qwibitai/nanoclaw/pull/1876) | 🙏 期待 |

---

## 8. 待处理积压

> 长期未响应、可能阻塞用户或存在 merge 风险的重要 PR

| PR | 创建日期 | 最后更新 | 积压风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [#1090](https://github.com/qwibitai/nanoclaw/pull/1090) `.claude.json` 可写挂载修复 | 2026-03-15 | 2026-04-20 | 🔴 **36 天**，EROFS 静默崩溃，用户难以诊断 | **紧急 review**：虽标记 "Needs Review"，但每日影响新用户启动成功率 |
| [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) UnraidClaw MCP | 2026-03-17 | 2026-04-20 | 🟡 **35 天**，NAS/Homelab 核心用户群 | 安排 maintainer 专项 review，或拆分 skill 部分先合 |
| [#1260](https://github.com/qwibitai/nanoclaw/pull/1260) Tailscale MCP | 2026-03-19 | 2026-04-20 | 🟡 **33 天**，零信任网络集成 | 与 [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix PR 协调，避免 MCP server 重复模式 |
| [#1290](https://github.com/qwibitai/nanoclaw/pull/1290) 凭证预检 fail-fast | 2026-03-20 | 2026-04-20 | 🟡 **32 天**，数据完整性风险 | 与 [#1873](https://github.com/qwibitai/nanoclaw/pull/1873) 环境变量清理协同 review |
| [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) Home Assistant MCP | 2026-03-22 | 2026-04-20 | 🟡 **30 天**，IoT 生态关键卡位 | 考虑与 [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) 统一 MCP skill 代码规范后批量 merge |

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 25 PR/日更新，8 合并且覆盖架构/安全/功能 |
| Issue 响应 | ⭐⭐⭐☆☆ | 仅 1 新 Issue 无评论，但历史 PR review 存在积压 |
| 社区参与 | ⭐⭐⭐⭐☆ | MCP/渠道/私有化三线并行，需求多样性高 |
| 稳定性 | ⭐⭐⭐⭐☆ | 无崩溃级 Bug，#1870 配置传播问题需关注 |
| 发布节奏 | ⭐⭐☆☆☆ | v2 收尾阶段但无 release，建议尽快 cut 稳定版 |

**综合建议**：优先合入 [#1090](https://github.com/qwibitai/nanoclaw/pull/1090) 修复启动崩溃，推动 [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) 类 v2 清理 PR 触发版本发布，建立 MCP skill 的标准化 review 通道以消化 30+ 天积压。

---

*日报基于 GitHub 公开数据生成，PR 评论数因 API 限制显示为 undefined，建议维护者检查 discussion 功能状态。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-21

**项目地址**: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 今日处于**高优先级修复冲刺期**。过去24小时社区活跃度中等（4条新活动），核心焦点集中在 **Zig 0.16 迁移后的网关稳定性危机**：Raspberry Pi 5 上的 CPU 空转问题（#851）已引发两条竞争性修复 PR，同时 HTTP 网关负载下挂起的新问题（#858）暴露了迁移后的深层网络 I/O 回归。SysVinit 脚本对无 RTC 嵌入式硬件的适配（#856）显示项目正在扩展边缘设备支持版图。三条 PR 均待合并，维护者面临协调合并策略的压力。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无已合并/关闭的 PR**，所有三条 PR 处于待审阅状态，项目代码层面**未产生实质性前进展**。

| PR | 状态 | 预期贡献 | 阻塞风险 |
|:---|:---|:---|:---|
| #858 | 🔴 待合并 | 修复 Zig 0.16 迁移后 HTTP 网关负载挂起（k8s 探针失效 → CrashLoopBackOff） | 与 #853 可能存在方案冲突 |
| #853 | 🔴 待合并 | 修复 #851 CPU 空转，引入 accept 错误退避机制 | 需维护者评估与 #858 的兼容性 |
| #856 | 🔴 待合并 | 扩展嵌入式支持：无 RTC 硬件（PogoPlug V4 ARMv5TE）的 SysVinit 可靠性 | 独立，可快速合并 |

**关键观察**：#858 与 #853 针对同一组件（gateway accept 路径）的不同症状，维护者需判断是独立合并还是整合为统一修复。当前缺乏合并活动，可能反映：
- 维护者对 Zig 0.16 网络栈变更的审阅谨慎性
- 或社区等待更多生产环境验证数据

---

## 4. 社区热点

### 🔥 最热讨论：Issue #851 — 嵌入式场景下的性能灾难

| 指标 | 数据 |
|:---|:---|
| **链接** | [nullclaw/nullclaw#851](https://github.com/nullclaw/nullclaw/issues/851) |
| **创建** | 2026-04-19 | **更新** | 2026-04-20 |
| **评论** | 2 | **👍** | 0 |

**核心诉求分析**：

| 维度 | 解读 |
|:---|:---|
| **用户画像** | Raspberry Pi 5 + Debian trixie aarch64 用户，边缘/IoT 部署场景 |
| **痛点本质** | `accept4()` 返回 `EAGAIN` 时未正确处理 → busy-loop → 100% CPU |
| **隐含期望** | NullClaw 作为"轻量网关"在资源受限设备上的可靠性承诺 |
| **社区响应速度** | ⚡ **24小时内出现两条修复 PR**（#853 直接引用 Fixes #851，#858 作为相关 workaround），响应效率极高 |

**深层信号**：两条 PR 作者（`manelsen`、`jmylchreest`）独立提交，暗示该问题可能在多个生产环境被独立发现，或社区内部存在非公开讨论渠道。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 来源 | 修复 PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0 - 生产崩溃** | HTTP 网关负载下挂起，k8s 探针超时 → CrashLoopBackOff | #858 | #858（自身） | 🟡 待合并 | **所有 k8s 部署**，Zig 0.16+ |
| 🟠 **P1 - 性能退化** | accept4() EAGAIN busy-loop，100% CPU 空转 | #851 | #853 | 🟡 待合并 | **类 Unix 嵌入式设备**（已确认 Pi 5） |
| 🟡 **P2 - 启动可靠性** | 无 RTC 硬件时间同步失败导致服务启动异常 | #856 | #856 | 🟡 待合并 | ARMv5TE 等老旧嵌入式硬件 |

**回归根因**：两条高优先级问题均指向 **Zig 0.16 迁移（`70d7f72`）后的网络 I/O 层变更**。`jmylchreest` 在 #858 中明确指认此为"targeted workaround"，暗示标准库或项目自身的 `Stream` 抽象在 0.16 下存在行为变更。

**维护者行动建议**：优先审阅 #858 与 #853 的兼容性，考虑发布 **hotfix 版本**而非等待功能累积。

---

## 6. 功能请求与路线图信号

**今日无显式功能请求（Feature Request）**。

但从 PR 内容可提取**隐式路线图信号**：

| 信号 | 来源 | 解读 |
|:---|:---|:---|
| **嵌入式/IoT 优先** | #856（PogoPlug V4 ARMv5TE 支持） | 项目正主动扩展至极低资源设备，可能对标 [Zig 语言本身的嵌入式野心](https://ziglang.org) |
| **云原生韧性** | #858（k8s 探针兼容性） | 虽为修复，但反映用户期望：NullClaw 作为网关需满足云原生基础设施的 SLO |
| **Zig 版本敏捷跟踪** | 0.16 迁移后的密集修复 | 项目采用激进语言版本策略，可能吸引早期 Zig 采用者，但增加稳定性风险 |

**下一版本预测**：若 #853/#858 合并，大概率触发 **v0.x.1 hotfix**；#856 可作为独立补丁或纳入同一版本。

---

## 7. 用户反馈摘要

从 Issues/PR 描述中提炼的真实用户场景：

| 用户 | 场景 | 痛点 | 满意度暗示 |
|:---|:---|:---|:---|
| **Trez-zerT** | Raspberry Pi 5 作为家庭/边缘网关 | "idle 时 100% CPU" — 基础功能正常但资源效率灾难 | 😞 对"轻量"承诺失望 |
| **jmylchreest** | k8s 生产集群网关 | 升级 Zig 0.16 后 **/health 探针失效 → 级联重启** | 😠 迁移风险未充分沟通 |
| **mark-os** | PogoPlug V4（ARMv5TE, 128MB RAM 级设备） | 无 RTC 导致 `insserv` 依赖解析失败，服务启动时序混乱 | 😐 对嵌入式支持"有但脆弱" |

**共性主题**：NullClaw 的**多目标平台承诺**（云原生 k8s ↔ 嵌入式 ARMv5）正在产生张力——同一套网络 I/O 抽象难以同时满足高并发云场景与资源受限边缘场景。

---

## 8. 待处理积压

**今日无超期未响应项**（所有活动均在 48 小时内），但需关注以下**结构性风险**：

| 风险项 | 说明 | 建议行动 |
|:---|:---|:---|
| **#858 vs #853 合并策略** | 两条 PR 修改同一组件，可能冲突或冗余 | 维护者应在 24h 内明确：合并顺序、是否需整合测试、是否引入统一 benchmark |
| **Zig 0.16 迁移回滚选项** | 若 #858/#853 未能根治，是否保留回滚至 0.15 的分支？ | 文档化迁移决策与风险评估 |
| **嵌入式测试矩阵缺口** | Pi 5（aarch64）与 PogoPlug（ARMv5TE）差异巨大，无统一 CI | 社区贡献硬件测试报告或寻求 [Linaro](https://www.linaro.org)/[Works on ARM](https://www.worksonarm.com) 资源 |

---

## 附录：快速链接

| 类型 | 链接 |
|:---|:---|
| Issue #851（CPU 空转） | https://github.com/nullclaw/nullclaw/issues/851 |
| PR #853（accept 退避修复） | https://github.com/nullclaw/nullclaw/pull/853 |
| PR #856（SysVinit RTC 修复） | https://github.com/nullclaw/nullclaw/pull/856 |
| PR #858（Stream I/O 修复） | https://github.com/nullclaw/nullclaw/pull/858 |

---

*日报生成时间：2026-04-21 | 数据来源：GitHub API 快照 | 下次更新：2026-04-22*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-21

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，24小时内 Issues 和 PR 各更新50条，活跃度极高。项目正处于 **v0.25.0 staging 冲刺阶段**，4月20日"Bug Bash"大规模质量活动产生大量新 Issue，同时 Engine V2 质量改进成为核心工程焦点。Web Gateway 和认证系统获得密集修复，但 Telegram 集成、Google Suite OAuth 等扩展功能存在明显稳定性债务。35个待合并 PR 显示代码流动迅速，但合并队列压力需要关注。

---

## 2. 版本发布

**无新版本发布**

> 当前版本仍为 **v0.25.0 (staging)**，处于迭代开发周期中。

---

## 3. 项目进展

### 已合并/关闭 PR（15条中的关键项）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #2632 | henrypark133 | **修复浏览器活动线程恢复逻辑** — 过滤外部渠道线程，防止 Telegram/WASM 线程错误恢复为浏览器聊天目标 | [PR #2632](https://github.com/nearai/ironclaw/pull/2632) |
| #2630 | henrypark133 | **修复 REPL 认证阻塞** — 当需要认证时解锁标准输入，解决粘贴 token 被拒绝的问题 | [PR #2630](https://github.com/nearai/ironclaw/pull/2630) |

### 重大推进中的开放 PR

| PR | 规模 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #2728 | XL | **Engine V2 迁移 CLI** — 为 OpenClaw 和 Hermes 提供官方 `ironclaw migrate` 命令，支持存量用户平滑升级 | [PR #2728](https://github.com/nearai/ironclaw/pull/2728) |
| #2727 | XL | **ClawHub 可控禁用** — `CLAWHUB_ENABLED` 标志允许企业/私有部署关闭公共技能注册表 | [PR #2727](https://github.com/nearai/ironclaw/pull/2727) |
| #2754 | XL | **用户自助 Secrets 管理** — 完整的 `/api/secrets` API + UI，支持持久化绑定审批与撤销，安全模型重大升级 | [PR #2754](https://github.com/nearai/ironclaw/pull/2754) |
| #2715 | XL | **设计系统视觉语言** — Lucide 图标替换 emoji，5 个新 CSS 组件文件，专业度提升 | [PR #2715](https://github.com/nearai/ironclaw/pull/2715) |
| #2761 | XL | **Engine V2 Milestone 0 评估套件** — 白盒+黑盒回归测试，可量化 V2 质量改进 | [PR #2761](https://github.com/nearai/ironclaw/pull/2761) |
| #2700 | L | **聊天标题可读化** — 用描述性标题替代十六进制哈希 ID，解决 #2237 长期痛点 | [PR #2700](https://github.com/nearai/ironclaw/pull/2700) |

**整体评估**：项目今日在 **Engine V2 质量基础设施**、**企业安全控制**、**用户体验精细化** 三个维度同步推进，技术债务清理与前瞻架构并重。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **Google Sheets OAuth 阻塞** #2229 | 10 | 扩展生态准入门槛：Google Workspace OAuth `invalid_request` 错误导致企业用户无法接入表格自动化 | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) |
| 2 | **聊天消息刷新丢失** #2285 | 7 | 状态持久性信任危机：页面刷新后消息消失但后台仍在处理，用户无法追踪异步任务状态 | [Issue #2285](https://github.com/nearai/ironclaw/issues/2285) |
| 3 | **WASM 凭证注入失败** #1537 | 4 | TEE 安全模型完整性：secrets 存储成功但运行时未注入，破坏可信执行环境承诺 | [Issue #1537](https://github.com/nearai/ironclaw/issues/1537) |
| 4 | **Telegram 会话碎片化** #2731 | 3 | 跨渠道体验一致性：Telegram 消息被拆分为独立 Engine 对话而非统一线程，上下文断裂 | [Issue #2731](https://github.com/nearai/ironclaw/issues/2731) |
| 5 | **Engine V2 质量里程碑** #2721 | 2 | 架构债务根治：单一 CodeAct/orchestrator 路径导致简单任务成本过高、终结逻辑薄弱 | [Issue #2721](https://github.com/nearai/ironclaw/issues/2721) |

**热点分析**：评论集中于 **OAuth/认证可靠性**（#2229, #1537）、**状态持久性**（#2285）、**跨渠道一致性**（#2731）三类，反映用户从"功能可用"向"生产可靠"的需求升级。

---

## 5. Bug 与稳定性

### P1（严重，阻塞核心流程）

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #2731 | Telegram 消息渲染为独立 Engine 对话，统一线程断裂 | 开放 | 无明确 PR | [Issue #2731](https://github.com/nearai/ironclaw/issues/2731) |
| #2732 | Assistant 推荐 Brave Search API 而非内部 NEAR 搜索，工具路由错误 | 开放 | 无明确 PR | [Issue #2732](https://github.com/nearai/ironclaw/issues/2732) |
| #2580 | Agent 声称 Telegram 消息已发送但实际未送达 **[已关闭]** | ✅ 已关闭 | #2580 相关修复已合并 | [Issue #2580](https://github.com/nearai/ironclaw/issues/2580) |
| #2581 | **链式思维泄露**：Agent 暴露内部推理而非最终响应 | 开放 | 无明确 PR | [Issue #2581](https://github.com/nearai/ironclaw/issues/2581) |
| #2584 | 内部系统文件在 App UI 可见，信息泄露风险 | 开放 | 无明确 PR | [Issue #2584](https://github.com/nearai/ironclaw/issues/2584) |

### P2（重要，影响体验）

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #2229 | Google Sheets OAuth `Error 400 invalid_request` | 开放 | #2367, #2746 可能相关 | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) |
| #2285 | 聊天消息刷新消失，后台处理不可见 | 开放 | 无明确 PR | [Issue #2285](https://github.com/nearai/ironclaw/issues/2285) |
| #2729 | Google Docs 工具连接后版本不匹配显示 | 开放 | 无明确 PR | [Issue #2729](https://github.com/nearai/ironclaw/issues/2729) |
| #2730 | Telegram 连接后重复确认消息+布局偏移 | 开放 | 无明确 PR | [Issue #2730](https://github.com/nearai/ironclaw/issues/2730) |
| #2543 | Linear MCP OAuth 授权后未识别 **[相关 PR #2367 进行中]** | 开放 | #2367 | [Issue #2543](https://github.com/nearai/ironclaw/issues/2543) |

### 基础设施/回归

| Issue | 描述 | 链接 |
|:---|:---|:---|
| #2437 | `nearai_chat` 未规范化工具 schema，含 `oneOf`/`anyOf` 时触发 HTTP 400 | [Issue #2437](https://github.com/nearai/ironclaw/issues/2437) |
| #2408 | 上下文长度溢出：输入超过 200K token 限制 | [Issue #2408](https://github.com/nearai/ironclaw/issues/2408) |
| #2633 | Gateway 代码提取 #2628 暴露的既有正确性/性能问题 | [Issue #2633](https://github.com/nearai/ironclaw/issues/2633) |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 信号强度 | 纳入可能性 | 链接 |
|:---|:---|:---|:---|:---|
| #2721 Engine V2 质量里程碑 | 架构重构 | ⭐⭐⭐⭐⭐ | **已纳入** — 子任务 #2722, #2723, #2725, PR #2761 已创建 | [Issue #2721](https://github.com/nearai/ironclaw/issues/2721) |
| #2642 多账户凭证配置 | 功能请求 | ⭐⭐⭐⭐☆ | 高 — 企业场景刚需，与 #2754 secrets 重构天然契合 | [Issue #2642](https://github.com/nearai/ironclaw/issues/2642) |
| #2719 迁移至 GitHub 原生合并队列 | 工程效率 | ⭐⭐⭐⭐☆ | 高 — 135k-LOC 批量 PR 不可持续，作者 serrrfirat 为核心维护者 | [Issue #2719](https://github.com/nearai/ironclaw/issues/2719) |
| #1378 按渠道过滤 MCP/内置工具 | 功能请求 | ⭐⭐⭐⭐☆ | 中 — XL 规模 PR 已开放 33 天，需 review 资源 | [PR #1378](https://github.com/nearai/ironclaw/pull/1378) |
| #2636 取消 skill 大小限制（当前 64KB） | 功能请求 | ⭐⭐⭐☆☆ | 中 — 作者质疑"无类似项目限制"，但需平衡安全/性能 | [Issue #2636](https://github.com/nearai/ironclaw/issues/2636) |

---

## 7. 用户反馈摘要

### 痛点（来自 Issues 直接引用与场景描述）

| 场景 | 用户原声/行为描述 | 来源 |
|:---|:---|:---|
| **OAuth 配置挫败** | "Google Sheets OAuth blocked: Error 400 invalid_request" — 企业用户无法完成基础集成 | #2229 |
| **状态不可追踪** | 消息刷新消失，"bot continues processing in background" — 异步任务黑盒化 | #2285 |
| **安全感知崩塌** | "secrets stored but never injected at runtime" — TEE 承诺未兑现 | #1537 |
| **跨渠道混乱** | Telegram 消息成"separate Engine conversations" — 多入口体验割裂 | #2731 |
| **工具路由误导** | Assistant 建议外部 Brave Search 而非内部能力 — 产品定位模糊 | #2732 |

### 满意度信号

- **#2735 已关闭**：Projects 页面 `web_search` 误报警告已修复，显示响应速度
- **#2754 自助 Secrets**：用户长期呼吁的"自己管理密钥"即将落地

### 部署场景洞察

- **hosted-staging ("crab shack")** 成为主要测试环境，QA 流程成熟（Bug Bash 4/17, 4/20）
- **NEAR AI Cloud TEE** 托管用户遭遇凭证注入问题，云服务可靠性受质疑

---

## 8. 待处理积压

### 长期未响应的高价值 Issue

| Issue | 创建日期 | 天数 | 风险 | 行动建议 | 链接 |
|:---|:---|:---|:---|:---|:---|
| #1537 WASM 凭证注入失败 | 2026-03-21 | **31天** | 🔴 高 — TEE 核心安全承诺 | 指派 TEE 专家诊断，与 #2754 secrets 重构联动 | [Issue #1537](https://github.com/nearai/ironclaw/issues/1537) |
| #1595 LLM 遗忘已激活 Telegram | 2026-03-23 | **29天** | 🟡 中 — 渠道状态同步 | 纳入 Engine V2 状态机改进 | [Issue #1595](https://github.com/nearai/ironclaw/issues/1595) |
| #1378 按渠道工具过滤 PR | 2026-03-18 | **34天** | 🟡 中 — 多渠道部署刚需 | 安排 XL PR 专项 review，或拆分合并 | [PR #1378](https://github.com/nearai/ironclaw/pull/1378) |
| #2437 工具 schema 规范化 | 2026-04-14 | **7天** | 🟡 中 — 兼容性阻塞 | 快速修复，影响 GitHub 等主流工具 | [Issue #2437](https://github.com/nearai/ironclaw/issues/2437) |

### 合并队列健康度

- **35 个待合并 PR** 中 6 个为 XL 规模，需关注：
  - #2719 提出的 GitHub 原生合并队列迁移建议值得认真考虑
  - 当前 `staging` → `main` 的 10 分钟批次推广机器人产生 135k-LOC 不可 review PR

---

## 附录：关键链接速查

| 类别 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/nearai/ironclaw |
| 今日 Bug Bash 标签 | `bug_bash_P1`, `bug_bash_P2` |
| Engine V2 里程碑 | Issue #2721, PR #2761 |
| 认证系统重构 | PR #2367, PR #2746 |
| Secrets 基础设施 | PR #2754, Issue #2642 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-21

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-04-21  
> **数据周期**: 过去24小时（2026-04-20 至 2026-04-21）

---

## 1. 今日速览

LobsterAI 今日呈现**高强度开发态势**，24小时内产生 **50 个 PR**（28 个已合并/关闭，22 个待审阅），远超同类开源项目日均水平，表明网易有道团队正处于密集迭代周期。Issue 侧相对平静，仅新增 1 条 UI 文案 Bug 报告。PR 构成显示**前端体验优化**（骨架屏、空状态）、**企业 IM 集成深化**（钉钉扫码、POPO 云文档）与**基础设施加固**（SQLite 自动备份、更新流分离）三线并进。依赖升级 PR 密集出现（Vite、React、Electron 等），需注意版本跳跃带来的兼容性风险。

---

## 2. 版本发布

**无新版本发布。** 今日未创建 Release Tag，最新版本仍为历史版本。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（8 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1752](https://github.com/netease-youdao/LobsterAI/pull/1752) | [nmgwddj](https://github.com/nmgwddj) | **SQLite 自动备份与恢复机制** | 数据可靠性里程碑：周期性健康快照 + 启动损坏检测 + 自动回滚，解决桌面端应用数据易损的行业痛点 |
| [#1754](https://github.com/netease-youdao/LobsterAI/pull/1754) | [nmgwddj](https://github.com/nmgwddj) | **手动更新与自动预下载分离** | 用户体验优化：消除"发现更新即后台下载"的侵略感，赋予用户明确控制权，跨会话持久化安装器元数据 |
| [#1759](https://github.com/netease-youdao/LobsterAI/pull/1759) | [liuzhq1986](https://github.com/liuzhq1986) | **Windows 覆盖升级保留用户自建 Skill** | 升级安全性关键修复：解决覆盖安装导致用户自定义技能丢失的数据迁移问题 |
| [#1758](https://github.com/netease-youdao/LobsterAI/pull/1758) | [btc69m979y-dotcom](https://github.com/btc69m979y-dotcom) | **OPENCLAW_HOME 路径对齐修复** | 运行时稳定性：修正执行审批配置文件路径错配，解决 `exec-approvals.json` 无法持久化的深层 Bug |
| [#1755](https://github.com/netease-youdao/LobsterAI/pull/1755) | [btc69m979y-dotcom](https://github.com/btc69m979y-dotcom) | **禁用内置 mcporter Skill** | 消除 MCP 集成混淆：标记为过渡方案，预示官方 MCP 架构将与 OpenClaw 内置实现彻底解耦 |
| [#1761](https://github.com/netease-youdao/LobsterAI/pull/1761) | [btc69m979y-dotcom](https://github.com/btc69m979y-dotcom) | **钉钉扫码配置机器人** | 企业 IM 集成深化：复用飞书扫码体验模式，降低钉钉企业用户部署门槛 |
| [#1757](https://github.com/netease-youdao/LobsterAI/pull/1757) | [liugang519](https://github.com/liugang519) | **钉钉 agentBinding 配置修复** | 钉钉集成配套修复，与 #1761 形成功能闭环 |
| [#1768](https://github.com/netease-youdao/LobsterAI/pull/1768) | [liugang519](https://github.com/liugang519) | **IM 同步问题修复** | 即时通讯数据一致性修复 |

**整体评估**：今日合并 PR 覆盖**数据持久化、升级安全、企业集成、运行时稳定**四大维度，项目成熟度向生产级桌面应用显著迈进。

---

## 4. 社区热点

> 注：所有 PR 评论数均为 `undefined`，表明项目可能未启用公开评论或数据获取受限。以下基于 PR 内容影响力与待审状态分析。

| 热点 | 类型 | 链接 | 背后诉求分析 |
|:---|:---|:---|:---|
| **Agent 图片头像支持** | 待合并 PR | [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) | 作者 [leedalei](https://github.com/leedalei) 明确提出"Emoji→图片"的渐进升级策略，反映多 Agent 场景下**视觉识别效率**成为痛点；保留 Emoji 轻量路径体现对现有用户习惯的尊重 |
| **协作初始化骨架屏** | 待合并 PR | [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) | 消除"白屏等待"焦虑，对标现代 SaaS 体验基准；与 #1770 空状态增强形成**加载-空态-内容**完整体验链路 |
| **Vite 5→8 大版本升级** | 待合并 PR | [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766) | 构建工具激进升级（跨度 3 个 major），反映技术债务清理决心，但需警惕插件生态兼容性风险 |
| **React 18→19 升级** | 待合并 PR | [#1764](https://github.com/netease-youdao/LobsterAI/pull/1764) | 同步 React 19.2.5（2026-04-08 发布），追赶并发特性与 Server Component 架构 |

**核心信号**：前端体验现代化（骨架屏、空状态、头像个性化）与底层技术栈激进升级并行，项目正处于"用户可见优化 + 架构换代"的双轨期。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | 停止会话后爬虫任务仍后台执行 | PR [#1756](https://github.com/netease-youdao/LobsterAI/pull/1756) | #1756（自身即为 fix） | **待合并** |
| 🔴 **高** | OPENCLAW_HOME 路径错配导致执行审批失效 | PR [#1758](https://github.com/netease-youdao/LobsterAI/pull/1758) | #1758 | ✅ 已合并 |
| 🟡 **中** | Windows 覆盖升级丢失用户自建 Skill | PR [#1759](https://github.com/netease-youdao/LobsterAI/pull/1759) | #1759 | ✅ 已合并 |
| 🟡 **中** | IM 消息同步异常 | PR [#1768](https://github.com/netease-youdao/LobsterAI/pull/1768) | #1768 | ✅ 已合并 |
| 🟢 **低** | 定时任务通知文案错误（"通知方式里文案不对"） | Issue [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | 无 | **待修复** |

**关键风险**：[#1756](https://github.com/netease-youdao/LobsterAI/pull/1756) 揭示的"停止按钮失效"问题涉及异步竞态条件（`chat.abort` fire-and-forget + 10 秒停止窗口期），该 PR 通过引入 `aborting` 状态锁和网关级 `kill` 指令解决，**建议优先审阅合并**。

---

## 6. 功能请求与路线图信号

| 需求信号 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Agent 人设/角色选择**（技术专家、虚拟女友等） | 待合并 PR [#544](https://github.com/netease-youdao/LobsterAI/pull/544)（2026-03-20 创建，今日更新） | ⭐⭐⭐ 高 |  stale 标签但今日有更新，社区呼声明确；与 #1760 头像个性化形成"角色化 Agent"产品方向 |
| **POPO 云文档 & 群历史消息获取** | 已关闭 PR [#1762](https://github.com/netease-youdao/LobsterAI/pull/1762) | ⭐⭐⭐ 高 | 企业生态整合战略级功能，虽关闭但方向已验证 |
| **图片头像支持** | 待合并 PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) | ⭐⭐⭐⭐ 极高 | 已提交 PR，技术实现完整，预计下一版本纳入 |
| **Skeleton 加载屏全量覆盖** | 待合并 PR [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) | ⭐⭐⭐⭐ 极高 | 体验一致性工程，与现有设计系统对齐 |

**路线图推测**：下一版本（预计 v2.x）将聚焦 **"个性化 Agent 2.0"**（头像+人设）与 **"企业协作深度集成"**（钉钉/POPO 文档/历史消息）双主题。

---

## 7. 用户反馈摘要

> 基于唯一活跃 Issue [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) 及 PR 描述反推

| 维度 | 具体内容 |
|:---|:---|
| **痛点** | 定时任务通知文案存在错别字/表述不当，影响专业感；用户上传截图但未附文字描述，反映 Issue 模板引导不足 |
| **场景** | 企业用户配置 LobsterAI 自动化工作流（如定时报表、定时提醒），对文案准确性敏感 |
| **满意度** | 功能可用（定时任务已运行），但细节打磨不足 |
| **不满意** | UI 文案 QA 流程存在漏洞，配置界面缺乏实时校验 |

**深层洞察**：项目功能迭代速度快于体验精细化，建议引入**文案国际化（i18n）审核机制**与**配置界面预览功能**。

---

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|:---|
| [#544](https://github.com/netease-youdao/LobsterAI/pull/544) Agent 人设选择 | PR | 2026-03-20 | 2026-04-20 | stale 标签，但今日有活动 | 维护者需明确决策：合并/关闭/要求重构；该功能与当前 Agent 头像 PR 存在产品协同 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 依赖升级组 | PR | 2026-04-02 | 2026-04-20 | Electron 40→41 跨越 major，影响打包与原生 API | 需验证 Windows/macOS 签名、自动更新器兼容性后再合并 |
| [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) 定时任务文案错误 | Issue | 2026-04-20 | 2026-04-20 | 低优先级但影响品牌感知 | 建议 24 小时内快速修复，标注 `good first issue` 吸引社区贡献 |

---

## 附录：数据总览

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 1（新开/活跃 1，关闭 0）|
| PRs 更新 | 50（待合并 22，已合并/关闭 28）|
| 版本发布 | 0 |
| 贡献者活跃数 | ≥ 9（含 dependabot）|

---

*本日报基于 GitHub 公开数据自动生成，PR 评论数据因 API 限制显示为 undefined，实际社区讨论活跃度可能高于表面数值。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报 | 2026-04-21

> 项目地址：[github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi) | 报告周期：2026-04-20 至 2026-04-21

---

## 1. 今日速览

TinyClaw 过去24小时呈现**极低活跃度**状态：无新增 Issues，仅 1 条 PR 关闭，无版本发布。该 PR 为配置层面的 Bug 修复，属于维护性更新而非功能迭代。整体社区参与度冷淡，项目处于**稳定维护期**而非活跃开发期。需关注核心贡献者是否持续投入，以及社区需求是否被及时响应。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### ✅ 已关闭 PR

| PR | 作者 | 类型 | 核心改进 |
|:---|:---|:---|:---|
| [#276](https://github.com/TinyAGI/tinyagi/pull/276) | [ZVNC28](https://github.com/ZVNC28) | Bug 修复 | 修复顶层 `heartbeat.enabled=false` 配置被静默忽略的问题 |

**技术细节**：此前 `settings.json` 中的顶层 `heartbeat.enabled` 标志仅声明在 `AgentConfig` 级别，导致 `packages/main/src/index.ts:272` 处无条件调用 `startHeartbeat()`。修复后，用户可通过顶层配置彻底禁用心跳机制，避免不必要的资源消耗或网络请求。

**项目推进评估**：⭐☆☆☆☆（1/5）— 纯维护性修复，未引入新能力，但提升了配置系统的**语义一致性**和**用户可控性**。

---

## 4. 社区热点

**无活跃讨论。** 过去24小时无评论、无反应（👍/👎 均为 0）。

唯一 PR #276 的 `undefined` 评论数表明该合并可能未经实质性代码审查讨论，直接由维护者合并。这反映出：
- 小型 PR 的审查流程可能较为宽松
- 或维护者认为该修复风险极低、无需社区评议

> 链接：[PR #276](https://github.com/TinyAGI/tinyagi/pull/276)

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🟡 中等 | 顶层 `heartbeat.enabled=false` 配置被静默忽略，导致心跳机制无法按预期关闭 | **已修复** | [#276](https://github.com/TinyAGI/tinyagi/pull/276)（已合并）|

**影响分析**：该 Bug 属于**配置语义漂移**（configuration semantic drift）— 文档/类型声明与用户实际可操作的配置层级不一致。虽未导致崩溃，但会造成：
- 用户困惑（"为何禁用后仍有心跳请求？"）
- 潜在的资源浪费或隐私泄露（不必要的网络活动）
- 调试时间损失

无其他新报告 Bug。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。**

基于现有 PR #276 的修复方向，可推测项目维护重点：
| 信号 | 解读 |
|:---|:---|
| 配置系统精细化 | 维护者关注多层级配置的**优先级解析**与**覆盖逻辑** |
| 心跳机制可观测性 | 可能为未来增强心跳监控、健康检查仪表盘铺路 |

**纳入下一版本可能性**：该修复本身已合并，若存在 vNext 规划，建议同步审查其他配置项是否存在类似"声明层级与实际生效层级不一致"的问题。

---

## 7. 用户反馈摘要

**今日无新增用户反馈**（0 Issues，PR #276 无评论）。

**历史推断痛点**（基于 #276 反推）：
- 用户期望通过单一顶层开关控制全局行为，而非逐 Agent 配置
- 配置系统的**静默失败模式**（silent failure）损害信任感
- 缺乏配置验证/警告机制，错误配置不被即时提示

---

## 8. 待处理积压

| 类型 | 数量 | 风险提示 |
|:---|:---|:---|
| 未处理 Issues（历史） | 未知* | 需维护者审查是否存在长期挂起的稳定性或安全相关 Issue |
| 待合并 PR | 0 | 当前无阻塞 |

> *注：输入数据仅含"过去24小时"增量，未提供历史积压总量。建议维护者关注：
> - 超过 30 天无响应的 Issue
> - 依赖更新/安全补丁类 PR 是否及时合并

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | 🟡 1/5 | 仅维护性修复 |
| 社区参与度 | 🔴 0/5 | 零新增交互 |
| 稳定性维护 | 🟢 3/5 | 配置 Bug 得以及时修复 |
| 版本迭代 | ⚪ — | 无发布计划可见 |
| **综合** | **🟡 1.5/5** | **休眠维护态，需注入新动力** |

---

*本报告基于公开 GitHub 数据生成，未包含私有讨论或外部沟通渠道信息。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-21

## 1. 今日速览

Moltis 今日展现**极高活跃度与工程效率**：24小时内完成 **9 个 Issue 关闭**（0 新开）、**12 个 PR 合并/关闭**（5 个待审），并发布 **20260420.02 版本**。核心贡献者 `penso` 主导了 11 个 PR，覆盖模型支持扩展、通道修复、沙箱改进、自改进 Agent 循环等关键领域。项目呈现**"密集修复+功能推进"双轨并行**态势，Bug 清零速度极快，但文档自动化 PR 积压需关注。

---

## 2. 版本发布

### [20260420.02](https://github.com/moltis-org/moltis/releases/tag/20260420.02)

| 属性 | 详情 |
|:---|:---|
| 发布日期 | 2026-04-20 |
| 版本号 | 20260420.02（日构建版本） |

**注**：数据未提供详细 Release Notes。基于同日合并 PR 推断，本版本可能包含：
- Kimi K2.6 模型支持（PR #809）
- Fireworks Kimi 路由 400 错误修复（PR #812）
- Podman 沙箱镜像导出修复（PR #811）
- Slack 斜杠命令修复（PR #804）
- SSE MCP 遗留传输支持（PR #805）
- 自改进 Agent 循环（PR #803）

**迁移建议**：使用 Fireworks/Kimi、Podman 后端、Slack 集成的用户建议升级；SSE MCP 用户可移除此前 workaround。

---

## 3. 项目进展

### 🔥 核心功能突破

| PR | 作者 | 进展 | 影响 |
|:---|:---|:---|:---|
| [#803](https://github.com/moltis-org/moltis/pull/803) | `penso` | **自改进 Agent 循环** — 技能自治创建、记忆生命周期管理、部署工作流 | ⭐⭐⭐ 架构级升级：Agent 从"被动执行"转向"主动进化" |
| [#797](https://github.com/moltis-org/moltis/pull/797) | `penso` | **101 个默认技能捆绑** + 分类 UI + 格式降级 | ⭐⭐⭐ 大幅降低新用户上手门槛 |
| [#809](https://github.com/moltis-org/moltis/pull/809) | `penso` | **Kimi K2.6 模型接入**（Moonshot + Kimi Code 双提供商） | 跟进 SOTA 模型，SWE-Bench Pro 58.6 基准 |

### 🔧 关键修复

| PR | 关联 Issue | 修复内容 |
|:---|:---|:---|
| [#812](https://github.com/moltis-org/moltis/pull/812) | [#810](https://github.com/moltis-org/moltis/issues/810) | Fireworks Kimi 路由禁用严格工具模式，解决 400 错误 |
| [#811](https://github.com/moltis-org/moltis/pull/811) | [#796](https://github.com/moltis-org/moltis/issues/796) | Podman BuildKit 构建后镜像未导入存储的兜底修复 |
| [#804](https://github.com/moltis-org/moltis/pull/804) | [#798](https://github.com/moltis-org/moltis/issues/798) | Slack 斜杠命令 `//new` 双斜杠解析错误 |
| [#805](https://github.com/moltis-org/moltis/pull/805) | [#278](https://github.com/moltis-org/moltis/issues/278) | SSE MCP 遗留传输协议支持（Baserow/NocoDB 兼容） |
| [#795](https://github.com/moltis-org/moltis/pull/795) | [#375](https://github.com/moltis-org/moltis/issues/375) | Gemini `thought_signature` 全链路透传 + 模式验证 |

### 🎨 体验优化

| PR | 内容 |
|:---|:---|
| [#808](https://github.com/moltis-org/moltis/pull/808) | 聊天消息 Markdown → HTML 渲染替换为 `marked` 库 |
| [#806](https://github.com/moltis-org/moltis/pull/806) | Web UI 新增 GitHub Issues/Discussions 链接与实时计数徽章 |
| [#807](https://github.com/moltis-org/moltis/pull/807) | 沙箱容器 Node.js 20 → 22 LTS 升级 |
| [#794](https://github.com/moltis-org/moltis/pull/794) | 16 个通道命令统一注册表，消除命令漂移 |

---

## 4. 社区热点

### 讨论最活跃：文档澄清请求

| 排名 | Issue/PR | 评论数 | 分析 |
|:---|:---|:---|:---|
| 🥇 | [#769](https://github.com/moltis-org/moltis/issues/769) [Docs] 心跳/Cron 多 Agent 工作空间行为 | **5 评论** | 核心架构认知缺口：用户困惑全局心跳与 `agents/<id>/` 上下文的隔离边界、会话历史可见性、任务调度归属。反映**多 Agent 编排文档滞后于实现**。 |
| 🥈 | [#776](https://github.com/moltis-org/moltis/issues/776) `task_list.list` Bug | **2 评论** | 功能回归，快速修复 |

**诉求洞察**：多 Agent 场景正从早期采用者向主流用户扩散，文档需明确：
- 心跳作用域（全局 vs 单 Agent）
- 会话隔离模型
- Cron 任务调度主体

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | 根因 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-已修复** | [#810](https://github.com/moltis-org/moltis/issues/810) Fireworks Kimi K2.5 Turbo 400 错误 | ✅ 关闭 | Moonshot 后端拒绝类型数组 + 强制 `additionalProperties` | [#812](https://github.com/moltis-org/moltis/pull/812) |
| 🔴 **P0-已修复** | [#796](https://github.com/moltis-org/moltis/issues/796) Podman 沙箱镜像未导出 | ✅ 关闭 | BuildKit 委托构建后镜像不在 Podman 存储 | [#811](https://github.com/moltis-org/moltis/pull/811) |
| 🟡 **P1-已修复** | [#798](https://github.com/moltis-org/moltis/issues/798) Slack 斜杠命令未知错误 | ✅ 关闭 | 网关未剥离前导 `/` 导致 `//new` 匹配失败 | [#804](https://github.com/moltis-org/moltis/pull/804) |
| 🟡 **P1-已修复** | [#793](https://github.com/moltis-org/moltis/issues/793) OpenRouter + Google AI Studio 400 | ✅ 关闭 | 提供商组合兼容性问题 | 未明确标注，推测同日修复 |
| 🟡 **P1-已修复** | [#375](https://github.com/moltis-org/moltis/issues/375) Gemini `thought_signature` 缺失 | ✅ 关闭 | 工具调用元数据未透传 | [#795](https://github.com/moltis-org/moltis/pull/795) |
| 🟢 **P2-已修复** | [#278](https://github.com/moltis-org/moltis/issues/278) SSE MCP 无法添加 | ✅ 关闭 | 仅支持 Streamable HTTP，缺遗留 SSE 协议 | [#805](https://github.com/moltis-org/moltis/pull/805) |
| 🟢 **P2-已修复** | [#776](https://github.com/moltis-org/moltis/issues/776) `task_list.list` 错误 | ✅ 关闭 | 功能回归 | 未明确标注 |

**稳定性评估**：🟢 **优秀** — 9/9 Issue 当日关闭，无遗留 Bug；修复响应时间中位数 < 1 天。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 纳入可能性 |
|:---|:---|:---|:---|
| **Telegram "中止"当前操作 + 降级模型** | [#788](https://github.com/moltis-org/moltis/issues/788) | ✅ 已关闭（未标注实现方式） | 高 — 已关闭但未关联 PR，可能隐含在 #803 自改进循环中 |
| **Nix Flake 支持** | [#745](https://github.com/moltis-org/moltis/pull/745) | 🟡 开放中（4天） | 中高 — Nix 社区需求明确，`tbaumann` 已提供完整实现，待维护者评审 |
| **文档批量自动更新** | [#799](https://github.com/moltis-org/moltis/pull/799)-[#802](https://github.com/moltis-org/moltis/pull/802) | 🟡 4个 PR 待合并 | 高 — AutoDoc 流水线产物，需批量合并策略 |

**路线图信号**：
- **自改进 Agent**（#803）可能是 v2026 Q2 核心叙事，对标 AutoGPT/BabyAGI 的"技能进化"能力
- **模型提供商扩张**：Kimi K2.6、Fireworks 路由优化显示对国产/第三方模型快速跟进策略
- **通道统一**：命令注册表抽象（#794）为后续 WhatsApp/Discord/Nostr 等新通道降低接入成本

---

## 7. 用户反馈摘要

### 😤 痛点
| 场景 | 来源 |
|:---|:---|
| "多 Agent 时完全不知道心跳是哪个 Agent 触发的，日志里一团糟" | [#769](https://github.com/moltis-org/moltis/issues/769) |
| "Podman rootless 环境下沙箱就是跑不起来，build 完找不到镜像" | [#796](https://github.com/moltis-org/moltis/issues/796) |
| "Slack 里输 `/new` 返回 unknown command，但 Telegram 同样的命令正常" | [#798](https://github.com/moltis-org/moltis/issues/798) |
| "Gemini 的 thinking 内容下次请求就丢了，function call 不完整" | [#375](https://github.com/moltis-org/moltis/issues/375) |

### 😊 满意/期待
| 反馈 | 隐含需求 |
|:---|:---|
| "Kimi K2.6 刚出就支持了，SWE-Bench 分数很高" | 对 SOTA 模型快速跟进的高度期待 |
| "101 个预置技能" | 降低 Prompt Engineering 负担 |
| "Markdown 终于正常渲染了" | 前端体验长期被忽视后的释放 |

---

## 8. 待处理积压

| 类型 | 项目 | 天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| 🟡 **文档 PR 积压** | [#799](https://github.com/moltis-org/moltis/pull/799) 批量 1 — core config, hooks, compaction | 1 | 低 — AutoDoc 流水线，可批量合并 | 维护者批量 review + 合并，或配置自动合并策略 |
| 🟡 **文档 PR 积压** | [#800](https://github.com/moltis-org/moltis/pull/800) 批量 2 — channels, discord, nostr, browser-automation | 1 | 低 | 同上 |
| 🟡 **文档 PR 积压** | [#801](https://github.com/moltis-org/moltis/pull/801) 批量 3 — tools-fs, whatsapp, authentication, session-branching | 1 | 低 | 同上 |
| 🟡 **文档 PR 积压** | [#802](https://github.com/moltis-org/moltis/pull/802) 批量 4 — voice, checkpoints, configuration-reference | 1 | 低 | 同上 |
| 🟠 **功能 PR 待审** | [#745](https://github.com/moltis-org/moltis/pull/745) Nix Flake | 4 | 中 — Nix 社区贡献者可能流失 | 指派 reviewer，或明确拒绝理由 |
| 🟠 **设计债务** | [#769](https://github.com/moltis-org/moltis/issues/769) 文档虽关闭，但多 Agent 架构认知模型未根本解决 | — | 中 — 类似问题将复发 | 创建跟踪 Issue 或 Architecture Decision Record (ADR) |

---

**项目健康度评分：A-**  
✅ 工程执行力极强（Bug 当日清零）  
✅ 功能迭代节奏快（自改进 Agent + 模型跟进）  
⚠️ 文档自动化流程需优化（4 个同质 PR 堆积）  
⚠️ 外部贡献者体验待改善（Nix PR 4 天无响应）

*日报生成时间：2026-04-21 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-21

> **项目**: CoPaw (github.com/agentscope-ai/CoPaw)  
> **数据周期**: 过去24小时（2026-04-20）  
> **分析师**: AI 智能体与开源项目分析师

---

## 1. 今日速览

CoPaw 项目今日呈现**高活跃度健康状态**：24小时内 Issues 更新 42 条（27 活跃/新开，15 关闭）、PR 更新 50 条（17 待合并，33 已合并/关闭），并发布 v1.1.3-beta.1 预发布版本。社区贡献势头强劲，首次贡献者 PR 占比显著，功能迭代聚焦**控制台体验优化**、**多智能体协作机制**与**跨平台稳定性**。值得注意的是，品牌迁移（CoPaw → QwenPaw）引发的配置兼容性问题成为用户集中反馈点，需维护团队重点关注迁移工具链的完善。

---

## 2. 版本发布

### v1.1.3-beta.1（预发布）
| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-20 |
| **发布者** | @xieyxclack |
| **变更类型** | 功能增强 + 基础设施 |

**核心变更**：
- **Console/Plugin 系统增强** ([#3357](https://github.com/agentscope-ai/QwenPaw/pull/3357), [#zhijianma](https://github.com/agentscope-ai/QwenPaw/pull/))：重构控制台插件架构，提升扩展性
- **文档补齐**：新增插件系统开发文档，降低第三方开发者接入门槛
- **版本号升级**：`1.1.3b1` 标记正式进入 1.1.3 迭代周期

**迁移注意事项**：
- 本次为 beta 预发布，建议生产环境用户等待正式版
- 插件系统 API 可能有后续调整，第三方插件开发者需关注后续 RC 版本

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（33 条中的关键项）

| PR | 作者 | 贡献类型 | 功能/修复说明 | 链接 |
|:---|:---|:---|:---|:---|
| #3585 | @pxdawn | 首次贡献者 | **Telegram 打字指示器持久化**：工具执行期间保持"正在输入"状态，解决用户反馈的长期体验痛点 | [PR #3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) |
| #3622 | @rayrayraykk | 维护者 | **macOS Desktop 构建修复**：解决桌面版白屏启动问题 | [PR #3622](https://github.com/agentscope-ai/QwenPaw/pull/3622) |
| #3620 | @xieyxclack | 维护者 | **版本升级至 1.1.3b2**：快速迭代修复 beta.1 问题 | [PR #3620](https://github.com/agentscope-ai/QwenPaw/pull/3620) |
| #3534 | @jinglinpeng | 功能贡献 | **备份与恢复系统**：完整数据快照与恢复机制，解决用户数据迁移焦虑 | [PR #3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) |
| #2950 | @octo-patch | Bug 修复 | **Windows 弹窗抑制**：shell 命令执行时阻止 CMD 窗口弹出，提升桌面体验 | [PR #2950](https://github.com/agentscope-ai/QwenPaw/pull/2950) |
| #3400 | @gnipping | 安全增强 | **ShellEvasionGuardian**：防命令注入/混淆的预执行检查层 | [PR #3400](https://github.com/agentscope-ai/QwenPaw/pull/3400) |
| #3616 | @zhaozhuang521 | Bug 修复 | **技能页搜索修复**：无标签技能导致搜索状态异常 | [PR #3616](https://github.com/agentscope-ai/QwenPaw/pull/3616) |
| #3614 | @hongxicheng | Bug 修复 | **钉钉 bot_prefix 应用修复**：webhook 普通回复未应用前缀 | [PR #3614](https://github.com/agentscope-ai/QwenPaw/pull/3614) |
| #1598 | @Nioolek | 首次贡献者 | **多智能体心跳构建修复**：解决启动报错 | [PR #1598](https://github.com/agentscope-ai/QwenPaw/pull/1598) |

**整体推进评估**：今日合并 PR 覆盖**稳定性（4 项）**、**安全性（1 项）**、**用户体验（3 项）**、**基础设施（2 项）**四大维度，项目正从"功能补全期"向"体验打磨期"过渡。备份系统与安全增强的合入标志着生产就绪度显著提升。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 热度分析 | 链接 |
|:---|:---|:---:|:---|:---|
| 🥇 | #2291 Help Wanted: Open Tasks — Come Contribute! | **58** | 官方任务看板，P0-P2 优先级任务开放认领，反映项目积极吸纳社区贡献的健康生态 | [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| 🥈 | #3356 WORKING_DIR 仍指向旧目录（.copaw vs .qwenpaw） | **20** | **品牌迁移的核心痛点**：用户全新安装后数据仍写入旧路径，配置隔离不彻底，已持续 6 天未获根本解决 | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| 🥉 | #2953 copaw app start 后显示错误信息 | **6** | 启动日志误报"Workspace stopped"，属于体验瑕疵类问题 | [Issue #2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) |
| 4 | #3582 Localhost auth bypass 失效（401 on 127.0.0.1） | **5** | 文档声明与实现不一致的安全相关 bug，影响本地开发体验 | [Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) |
| 5 | #3573 cron 任务 channel=weixin 报 KeyError | **4** | 微信渠道在定时任务场景下的注册缺失，渠道系统边界 case | [Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) |

**诉求分析**：社区核心焦虑集中在**品牌迁移的平滑性**（#3356, #3598）与**渠道系统稳定性**（微信/企业微信相关 issue 占比高）。用户期望官方提供明确的迁移指南与数据清理工具。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | #3356 | 品牌迁移后 WORKING_DIR 指向旧目录，数据隔离失效，可能导致配置污染 | **OPEN** | 无 | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| 🔴 **高** | #3568 | **Skill 无效 YAML 导致整个 QwenPaw 崩溃**（已关闭，需确认修复彻底性） | CLOSED | #? | [Issue #3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) |
| 🔴 **高** | #3578 | QwenPaw 无法运行，显示白板（桌面版启动失败） | CLOSED | #3622 | [Issue #3578](https://github.com/agentscope-ai/QwenPaw/issues/3578) |
| 🟡 **中** | #3582 | Localhost 认证绕过失效，与文档承诺矛盾 | OPEN | 无 | [Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) |
| 🟡 **中** | #3573 | Cron 微信渠道 KeyError，定时任务场景不可用 | OPEN | 无 | [Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) |
| 🟡 **中** | #3002 | 不兼容 OpenAI Responses API 格式（Azure OpenAI 代理网关 400 错误） | OPEN | 无 | [Issue #3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) |
| 🟡 **中** | #3597 | **梦境系统 Windows OSError(22)**，记忆优化功能完全不可用 | OPEN | 无 | [Issue #3597](https://github.com/agentscope-ai/QwenPaw/issues/3597) |
| 🟡 **中** | #3613 | send_file_to_user 后二次发送聊天记录导致 API 崩溃（火山方舟/Anthropic 协议） | OPEN | 无 | [Issue #3613](https://github.com/agentscope-ai/QwenPaw/issues/3613) |
| 🟢 **低** | #2953 | 启动信息误报 Workspace stopped | OPEN | 无 | [Issue #2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) |
| 🟢 **低** | #3600 | 前端图片短暂显示后 404 | CLOSED | 无 | [Issue #3600](https://github.com/agentscope-ai/QwenPaw/issues/3600) |

**稳定性评估**：🔴 **高风险项 3 个**（含 1 个已关闭需验证），🟡 **中风险 5 个**。品牌迁移相关 bug 具有**系统性风险**特征，建议维护团队设立专项修复窗口。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue | 需求 | 热度 | 与现有 PR 关联 | 纳入可能性 | 链接 |
|:---|:---|:---:|:---|:---|:---|
| #3516 | 引入 Hermes 理念实现智能体自动进化 | 2 评论 | 无 | 🔮 长期探索 | [Issue #3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) |
| #3593 | execute_shell_command 超时时间可配置（agent.json） | 2 评论 | 无 | ✅ **高**（配置层扩展，低风险） | [Issue #3593](https://github.com/agentscope-ai/QwenPaw/issues/3593) |
| #3586 | 定时任务免 /approve 确认 | 2 评论 | 无 | ⚠️ 需设计（安全 vs 便利权衡） | [Issue #3586](https://github.com/agentscope-ai/QwenPaw/issues/3586) |
| #3627 | 前端 UI 向 Claude Code 风格升级 | 1 评论 | 无 | 🔮 长期（视觉重构） | [Issue #3627](https://github.com/agentscope-ai/QwenPaw/issues/3627) |
| #3623 | 多智能体会话间反馈机制（任务移交保持上下文） | 1 评论 | #2904 Plan mode, #3629 Progress observing | ✅ **高**（与进行中 PR 方向一致） | [Issue #3623](https://github.com/agentscope-ai/QwenPaw/issues/3623) |
| #3621 | 企业微信群聊传递 sender_id 给 agent | 1 评论 | 无 | ⚠️ 中（渠道协议扩展） | [Issue #3621](https://github.com/agentscope-ai/QwenPaw/issues/3621) |

**路线图信号**：
- **Plan mode** (#2904) 与 **Progress observing hook** (#3629) 正在构建**多智能体协作基础设施**，与 #3623 的诉求高度契合
- **ACP 官方 SDK 接入** (#3589) 标志着外部智能体集成进入标准化阶段
- **备份系统** (#3534) 已合入，为后续**无缝迁移/升级**奠定基础

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 Issue | 典型引用/场景 |
|:---|:---|:---|
| **品牌迁移焦虑** | #3356, #3598 | "升级后两个系统文件夹同时生成新文件，如何彻底迁移到 .qwenpaw？" |
| **Windows 桌面版不稳定** | #3578, #3597, #2950 | 白屏启动、梦境系统 OSError、CMD 弹窗干扰 |
| **渠道适配碎片化** | #3573, #3621, #3628, #3523 | 微信/企业微信的群聊识别、图片处理、重复会话等问题集中爆发 |
| **配置持久化脆弱** | #2629, #3356 | 升级后 OpenRouter 等配置丢失，需重复配置 |
| **API 兼容性滞后** | #3002, #3613 | OpenAI Responses API、Anthropic 协议的文件返回结构等新格式支持不足 |

### 满意点
- 社区响应速度较快（#3585 Telegram 打字指示器从反馈到合并周期短）
- 任务看板机制透明（#2291 吸引持续贡献）
- 备份系统上线缓解数据安全焦虑

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 创建时间 | 积压天数 | 风险说明 | 链接 |
|:---|:---|:---:|:---|:---|
| #3356 WORKING_DIR 指向旧目录 | 2026-04-14 | **6 天** | 🔥 **品牌迁移核心阻塞**，已 20 评论，用户情绪累积 | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| #2904 Add plan mode | 2026-04-03 | **17 天** | 大型功能 PR，评论 undefined（可能缺乏评审资源），影响多智能体路线图 | [PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) |
| #3117 Semantic skill routing | 2026-04-08 | **12 天** | 标记 "need discussions"，可能因设计分歧停滞 | [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) |
| #3211 Docker 镜像 GLIBC 版本不匹配 | 2026-04-10 | **10 天** | 官方镜像可用性受损，影响本地模型部署 | [Issue #3211](https://github.com/agentscope-ai/QwenPaw/issues/3211) |
| #3002 OpenAI Responses API 不兼容 | 2026-04-07 | **13 天** | Azure OpenAI 企业用户阻塞，影响 B 端采用 | [Issue #3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) |

---

## 附录：数据健康度仪表盘

| 指标 | 数值 | 健康度 |
|:---|:---|:---:|
| 日 Issues 处理率 | 15/42 = 35.7% | 🟡 |
| 日 PR 合并率 | 33/50 = 66.0% | 🟢 |
| 首次贡献者 PR 占比 | 4/20 展示 PR = 20% | 🟢 |
| 高优先级 Bug 未修复 | 3 个（含 1 个已关闭待验证） | 🔴 |
| 平均 Issue 响应时间 | #3356 6 天未解决 | 🔴 |

> **综合评估**：项目处于**活跃迭代期**，社区贡献生态健康，但**品牌迁移的技术债务**与**渠道系统稳定性**构成当前最大风险敞口。建议维护团队设立 **v1.1.3 迁移专项**，集中解决 .copaw/.qwenpaw 双目录问题，并优先评审 #2904、#3117 等长期挂起的核心功能 PR。

---

*日报生成时间: 2026-04-21*  
*数据来源: GitHub API (agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-21

## 1. 今日速览

ZeroClaw 今日维持**高强度开发节奏**，24小时内 Issues 更新 46 条（25 活跃/新开，21 关闭）、PR 更新 50 条（29 待合并，21 已合并/关闭），无新版本发布。项目正处于 **v0.7.4 里程碑冲刺期**，核心工作围绕微内核架构落地（RFC #5574 Phase 2）、插件安全加固（WASM/SSRF/环境变量隔离）及配置系统 schema v3 迁移展开。社区治理层面，5 项架构/治理 RFC 全部获批，标志着项目从"反应式增长"转向"有意图架构"的成熟阶段。整体健康度：**活跃且方向明确，但待合并 PR 积压需关注**。

---

## 2. 版本发布

**无新版本发布**

v0.7.4 里程碑正在推进中（[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)），原 v0.7.2 因紧急修复标签问题跳至 v0.7.3，现重新编号为 v0.7.4。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目意义 |
|:---|:---|:---|:---|
| [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) | RyanHoldren | **修复 gateway 路径技能工具注册缺失** — `Agent::from_config` 补注册 `tools::register_skill_tools` 并应用 `non_cli_excluded_tools` 过滤 | 解决 S1 级阻塞问题（[#5850](https://github.com/zeroclaw-labs/zeroclaw/issues/5850)），Web UI 技能工具"Unknown tool"错误根因消除 |
| [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) | RyanHoldren | **修复 shell 守卫绕过漏洞** — 当 `allowed_commands=["*"]` 且 `block_high_risk_commands=false` 时，仍错误拦截反引号、`$()` 等 shell 扩展语法 | 安全策略一致性修复，消除配置组合下的意外行为 |
| [#5915](https://github.com/zeroclaw-labs/zeroclaw/issues/5915) | WareWolf-MoonWall | **清理 5 个"vibe-coded"自动化工作流** — 删除未经有意设计、可能造成伤害的自动运行工作流 | CI 治理里程碑，体现 RFC #5579"工程基础设施"的纪律性执行 |

### 架构 RFC 批量获批（治理层面重大进展）

WareWolf-MoonWall 主导的 5 项 RFC 于今日统一标记 `status:accepted`，构成 ZeroClaw **v0.7.0 → v1.0.0 的完整成熟度框架**：

| RFC | 主题 | 链接 |
|:---|:---|:---|
| #5574 | **微内核架构转型** — 从反应式代码库转向有意图架构 | [Issue #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) |
| #5579 | CI/CD 管道与发布自动化 | [Issue #5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579) |
| #5577 | 项目治理与团队协调 | [Issue #5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577) |
| #5576 | 文档标准与知识架构（含 i18n 策略） | [Issue #5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576) |
| #5653 | 代码健康、错误纪律与生产就绪标准 | [Issue #5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653) |
| #5615 | 贡献文化 — 人类协作、AI 伙伴关系与团队成长 | [Issue #5615](https://github.com/zeroclaw-labs/zeroclaw/issues/5615) |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **RFC: 微内核架构转型** | 9 | 社区对 v1.0.0 架构方向的深度参与，关注插件系统、WASM 边界、核心-外围分离 | [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) |
| 2 | **"完整" Docker 镜像需求** | 7 | 新用户/非技术用户的入门门槛 — 默认禁用 WhatsApp 等功能导致"编译即劝退" | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) |
| 3 | **Web dashboard 不可用** | 5 | 构建流程文档缺失，用户不知需手动 `cd web && npm ci && npm run build` | [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) |
| 4 | **v0.7.4 里程碑跟踪** | 5 | 发布节奏透明度，技能系统迭代（review-session skill 上线，github-pr-review skill 退役） | [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) |
| 5 | **Dream Mode — 周期性记忆整合** | 4 | AI 助手的"睡眠/反思"隐喻，长期记忆管理的用户期望 | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) |

### 热点分析

- **#3642 "完整 Docker 镜像"**（👍 3，最高投票）：反映项目**技术用户向大众用户扩展的瓶颈**。当前"低内存优先"的默认策略与"开箱即用"体验存在张力，需权衡镜像体积与功能完整性。
- **#5849 Dream Mode**：虽为 enhancement，但触及 AI 助手品类的**差异化体验设计** — 用户不满足于"即时响应"工具，期望持续学习、人格化的长期陪伴感。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **S1** | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Provider 忽略 `llamacpp` 配置对象，schema v2 后默认值强制覆盖 | **OPEN**，👍 2 | 待验证 |
| **S1** | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) | `No tool call found for function call output with call_id` — 工具调用链断裂 | **OPEN**，今日新建 | 无 |
| **S1** | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | `zeroclaw update` 在 aarch64/树莓派下载错误架构二进制（x86_64） | **OPEN**，3月至今 | 无 |
| **S2** | [#5948](https://github.com/zeroclaw-labs/zeroclaw/issues/5948) | ACP 模式非 JSON 日志导致 `agentic.nvim` 编辑器报错弹窗 | **OPEN**，今日新建 | 无 |
| **S2** | [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) | UI 添加 cron 被安全沙箱拦截，错误信息不透明 | **OPEN**，3月至今 | 无 |
| **S0** | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | `gateway.web_dist_dir` / `ZEROCLAW_WEB_DIST_DIR` 文档缺失 | **OPEN** | 无 |

### 已修复 S1 问题

- **[#5850](https://github.com/zeroclaw-labs/zeroclaw/issues/5850)** Skill 定义工具在 Web UI 返回"Unknown tool" → **已关闭**，修复 PR [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774)
- **[#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)** Web dashboard 构建流程问题 → **已关闭**（构建指令已提供）
- **[#5811](https://github.com/zeroclaw-labs/zeroclaw/issues/5811)** 微内核拆分后 `cargo publish` 失败 → **已关闭**

---

## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 纳入 v0.7.4 概率 | 判断依据 |
|:---|:---|:---:|:---|
| **全双工语音对话 + 打断支持** | [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) / PR [#5942](https://github.com/zeroclaw-labs/zeroclaw/pull/5942) | ⭐⭐⭐⭐⭐ **高** | PR 已开，`Vad` trait + `VoiceEvent` 协议 + `gateway-voice-duplex` feature flag 完整实现 |
| **WASM 插件执行桥（Extism）** | [#5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) | ⭐⭐⭐⭐⭐ **高** | Phase 2 D2 最后结构件，基础设施已就绪 |
| **插件 SSRF 防护** | [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) | ⭐⭐⭐⭐⭐ **高** | 安全基线要求，与 #5912 配套 |
| **插件环境变量读取白名单** | [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) | ⭐⭐⭐⭐⭐ **高** | 同上，安全加固三连 |
| **Postgres 记忆后端** | PR [#5946](https://github.com/zeroclaw-labs/zeroclaw/pull/5946) | ⭐⭐⭐⭐☆ | 可选 feature flag，风险低，但需维护者 review |
| **GeminiProvider SSE 流式** | PR [#5944](https://github.com/zeroclaw-labs/zeroclaw/pull/5944) | ⭐⭐⭐⭐☆ | 补全流式覆盖，技术债务清理 |
| **Schema v3 批量迁移** | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | ⭐⭐⭐⭐☆ | **合并阻塞器**，需所有 checklist 完成 |
| **onboard 向导重写（DRY/schema-driven）** | [#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) | ⭐⭐⭐☆☆ | 8,534 行单体 → 薄编排器，工程价值高但非阻塞 |
| **Mattermost 频道支持** | PR [#5902](https://github.com/zeroclaw-labs/zeroclaw/pull/5902) | ⭐⭐⭐☆☆ | 重新基于 workspace-split 后 master 应用，需 author action |
| **"完整" Docker 镜像** | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | ⭐⭐⭐☆☆ | 用户呼声高，但涉及发布策略决策 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **树莓派/ARM64 更新失败** | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | "Exec format error" — 架构检测缺失，边缘设备支持被视为二等公民 |
| **Web UI 技能工具不可用** | [#5850](https://github.com/zeroclaw-labs/zeroclaw/issues/5850) | 同一配置 CLI 正常、Web 异常，路径不一致导致信任损耗 |
| **Cron 添加被安全拦截且无解释** | [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) | "which restrictions are we talking about?" — 错误信息设计失败 |
| **Dashboard 构建步骤未文档化** | [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) | 运行即报错，用户需自行推断 `npm ci && npm run build` |
| **llamacpp 配置被静默忽略** | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Schema v2 迁移后行为变更无通知，" worked fine before" |

### 期望与赞赏

- **Dream Mode**（[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)）：用户主动提出"睡眠-反思"隐喻，认可 ZeroClaw 作为**长期陪伴型 AI** 的潜力定位
- **语音全双工**（[#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896)）：Tavina.ai 创始人直接贡献 PR，验证企业级语音场景需求

---

## 8. 待处理积压

### 需维护者紧急关注的长期 Issue

| Issue | 创建时间 | 停滞原因 | 行动建议 |
|:---|:---|:---|:---|
| [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) aarch64 更新下载错误架构 | 2026-03-27（25天） | 无 assignee，无修复 PR | 发布流程需增加 `target_arch` 检测逻辑，或提供 ARM64 独立发布通道 |
| [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) UI 添加 cron 被拦截 | 2026-03-27（25天） | 安全沙箱规则不透明 | 需产品决策：cron 是否默认允许？错误信息至少需说明具体限制 |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) 完整 Docker 镜像 | 2026-03-15（37天） | 涉及构建策略权衡 | 建议维护者明确回应：是否接受 `-full` 标签镜像？或改进 feature flag 文档 |

### 需 Author Action 的 PR 积压

| PR | 问题 | 风险 |
|:---|:---|:---|
| [#5099](https://github.com/zeroclaw-labs/zeroclaw/pull/5099) WhatsApp feature flag 修复 | `needs-author-action` 标签，3月至今 | 渠道功能持续不可用 |
| [#5580](https://github.com/zeroclaw-labs/zeroclaw/pull/5580) Dashboard `/api/channels` 端点 | `needs-author-action`，4月10日至今 | 前端 Channels tab 持续 404 |
| [#5859](https://github.com/zeroclaw-labs/zeroclaw/pull/5859) CODEOWNERS 更新 | 语法验证待确认 | 治理流程阻塞 |

---

*日报生成时间：2026-04-21 | 数据来源：ZeroClaw GitHub 仓库公开数据*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*