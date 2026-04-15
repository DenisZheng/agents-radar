# OpenClaw 生态日报 2026-04-05

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-05 00:11 UTC

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

# OpenClaw 项目动态日报 | 2026-04-05

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**，24小时内产生 **500 条 Issues 更新**（新开/活跃 294，关闭 206）和 **500 条 PR 更新**（待合并 296，已合并/关闭 204），无新版本发布。社区聚焦于**执行安全简化**、**ACP（Agent Communication Protocol）子代理生态完善**、**本地化体验提升**三大主线。值得注意的是，多个长期存在的稳定性问题（Discord 语音、iMessage 循环、Cron 时区）仍在持续发酵，而 MCP 原生支持、国际化等战略级功能请求维持高热度但暂无官方承诺。

---

## 2. 版本发布

**无新版本发布**（v2026.4.1 仍为最新稳定版）

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#61088](https://github.com/openclaw/openclaw/pull/61088) | altaywtf | 修复 Telegram plugin-sdk 测试边界，稳定 agents 断言 | **测试基础设施加固**，为后续 Telegram 功能迭代扫清障碍 |
| [#54302](https://github.com/openclaw/openclaw/pull/54302) | jadewon | 识别裸 "new" 和 "reset" 作为会话命令（兼容 Slack 原生斜杠拦截） | **跨平台用户体验统一**，解决 Slack 用户无法重置会话的痛点 |
| [#59231](https://github.com/openclaw/openclaw/pull/59231) | alexanderkreidich | ACP 会话交还：新增 `close-self` CLI，自动检测运行时类型 | **子代理生态闭环**， specialist 代理可自然将控制权交还主代理 |
| [#59230](https://github.com/openclaw/openclaw/pull/59230) | alexanderkreidich | 向 ACP 任务字符串注入工作区引导文件（SOUL.md/AGENTS.md） | **代理身份一致性**，外部 harness 也能感知用户配置的人格 |
| [#57910](https://github.com/openclaw/openclaw/pull/57910) | alexanderkreidich | Telegram DM 对话交接：`--bind here` 与可撤销绑定 | **渠道能力补齐**，Telegram 成为 ACP 完全支持的渠道 |
| [#57732](https://github.com/openclaw/openclaw/pull/57732) | alexanderkreidich | 解析 agent profile 别名到 harness ID，继承 profile 工作目录 | **ACP 易用性关键修复**，别名配置不再崩溃 |
| [#61061](https://github.com/openclaw/openclaw/pull/61061) | altaywtf | 避免 Telegram 配置导入副作用 | **架构整洁度**，插件 SDK 导入时无副作用 |
| [#60394](https://github.com/openclaw/openclaw/pull/60394) | coder-zhuzm | Control UI Cron 刷新按钮专用加载样式 | **UI 反馈及时性**，减少用户困惑 |
| [#61021](https://github.com/openclaw/openclaw/pull/61021) | Albaloola | 可配置压缩阈值、技能缓存、子代理指导原则 | **内存管理可观测性**，为大规模长会话提供调参空间 |

**整体评估**：今日进展集中于 **ACP 子代理体系成熟化**（4个核心 PR）和 **开发者体验打磨**（测试、UI、配置）。alexanderkreidich 成为 ACP 方向核心贡献者，单日内完成会话交还、工作区注入、DM 绑定三大能力闭环。

---

## 4. 社区热点

### 高讨论 Issues（评论数 Top）

| Issue | 评论 | 核心诉求 | 背后信号 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n & Localization Support | **119** | 官方国际化路线图 | **全球化扩张准备**：社区已提交多语言 PR，但维护者明确"当前无带宽支持"，存在战略资源分配张力 |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | **70** / 👍67 | 跨平台桌面端覆盖 | **企业部署刚需**：macOS 独占策略正在流失 Windows/Linux 企业用户，67 赞为 enhancement 类最高 |
| [#44851](https://github.com/openclaw/openclaw/issues/44851) Kimi web_search 401 错误 | **36** | 工具认证与 Chat API 分离 | **国产模型集成深度**：Kimi 作为国产头部模型，其工具链稳定性直接影响国内用户采纳 |
| [#40631](https://github.com/openclaw/openclaw/issues/40631) 执行停滞：确认任务但无动作 | **18** | 执行状态机可靠性 | **生产环境致命伤**：月均 1-2 次的"假启动"bug 正在侵蚀用户信任 |
| [#59098](https://github.com/openclaw/openclaw/issues/59098) Ollama 嵌入代理超时 | **14** | 本地模型超时配置 | **边缘部署痛点**：硬编码 15s 超时与 [#34644](https://github.com/openclaw/openclaw/issues/34644) 形成呼应 |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) MCP Client 原生支持 | **14** / 👍16 | 行业标准协议对接 | **生态开放性博弈**：OpenClaw 自有工具系统 vs MCP 行业标准的路线选择 |

### 高反应 Issues（👍 数）

- **#75** (👍67) 跨平台桌面端 — 远超其他，显示平台覆盖是最大未满足需求
- **#29053** (👍16) MCP 原生支持 — 开发者生态扩张意愿强烈
- **#3460** (👍7) 国际化 — 需求存在但优先级认知分歧

---

## 5. Bug 与稳定性

### 严重级别：P0（生产阻断）

| Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | **OPEN** | `openai-codex/gpt-5.3-codex` 2026.3.23-2 后完全无法执行工具 | 无 |
| [#40631](https://github.com/openclaw/openclaw/issues/40631) | **OPEN** | 执行停滞：确认任务但无动作（月均 1-2 次） | 无 |
| [#41330](https://github.com/openclaw/openclaw/issues/41330) | **OPEN** | iMessage 循环：代理回复被重新摄入为入站消息 | 无 |

### 严重级别：P1（功能受损）

| Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#58941](https://github.com/openclaw/openclaw/issues/58941) | **OPEN** | Discord exec 审批 2026.3.31 回归失效（3.28 正常） | 无 |
| [#59330](https://github.com/openclaw/openclaw/issues/59330) | **OPEN** | Control UI Raw 模式永久禁用（2026.3.31 回归） | 无 |
| [#57250](https://github.com/openclaw/openclaw/issues/57250) | **CLOSED** | Cron Job 模型覆盖失效 | 已修复 |
| [#55304](https://github.com/openclaw/openclaw/issues/55304) | **OPEN** | Telegram 渠道网关重启后静默初始化失败 | 无 |
| [#57752](https://github.com/openclaw/openclaw/issues/57752) | **OPEN** | Kimi 2.5 模型"事件顺序意外"错误 | 无 |

### 严重级别：P2（体验降级）

| Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#59510](https://github.com/openclaw/openclaw/issues/59510) | **OPEN** | exec 审批流程过于繁琐 | 无（设计讨论中） |
| [#27843](https://github.com/openclaw/openclaw/issues/27843) | **OPEN** | 白名单命令含特殊字符仍触发审批 | 无 |
| [#52221](https://github.com/openclaw/openclaw/issues/52221) | **OPEN** | 上下文监控永久显示 0%（硬编码值） | 无 |
| [#26108](https://github.com/openclaw/openclaw/issues/26108) | **OPEN** | Discord 语音连接成功但无实时音频（#25861/#25909 修复后仍复现） | 无 |

**稳定性评估**：今日关闭 206 个 Issues 显示维护者清理力度强，但 **P0 级执行层 bug 无修复进展**，且 2026.3.31 版本引入多个回归（Discord 审批、Raw 模式）。建议暂缓推广 3.31 至生产环境。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或官方回应）

| 功能 | Issue/PR | 信号强度 | 判断依据 |
|:---|:---|:---|:---|
| **ACP 子代理生态完善** | #59231, #59230, #57910, #57732, #61081 | ⭐⭐⭐⭐⭐ | alexanderkreidich 连续 5 个 PR 形成完整闭环，今日 #61081 继续扩展 spawn 生命周期 |
| **可配置超时/压缩阈值** | #34644, #61021 | ⭐⭐⭐⭐☆ | #61021 已合并，硬编码值正在系统化移除 |
| **执行审批简化** | #59510, #27843, #50295 | ⭐⭐⭐☆☆ | 社区呼声高，但涉及安全架构，需设计评审 |

### 战略级请求（长期跟踪）

| 功能 | Issue | 社区热度 | 官方立场 | 纳入可能性 |
|:---|:---|:---|:---|:---|
| **MCP Client 原生支持** | #29053 | 👍16, 评论14 | 无回应 | 中 — 与自有工具系统存在架构冲突 |
| **国际化 (i18n)** | #3460 | 评论119 | "当前无带宽" | 低 — 资源约束明确 |
| **Linux/Windows 桌面端** | #75 | 👍67 | 标记 help wanted | 中 — 需社区贡献者主导 |
| **自适应分层记忆** | #59095 | 评论4 | 社区提案 | 中 — 与 #61021 方向契合，可能融合 |
| **Gemini 上下文缓存** | #51372 | 评论6 | 无回应 | 高 — 成本优化刚需，实现明确 |

---

## 7. 用户反馈摘要

### 真实痛点（直接引用）

> *"The current exec command approval process in OpenClaw v2026.4.1 is overly complicated, severely impacting usability and efficiency."* — #59510

> *"Need to set `/approve xxx allow-always` for each individual command... Dozens of common commands."* — #59510

> *"When upstream providers (Anthropic, OpenAI) experience latency spikes, the entire fallback chain times out because each provider gets only 15s."* — #34644

> *"Messages sent by the agent (replies) are being read back from the Messages database and treated as new inbound messages. This creates an infinite loop."* — #41330

### 满意点

- ACP 子代理体系："natural language delegation requires automatic routing and specialist handback" — 认可方向但要求完善
- 配置灵活性：#61021 的合并获得积极反响

### 不满意点

- **版本质量**：2026.3.31 多个回归问题（#58941, #59330）引发"降级恢复"行为
- **透明度**：i18n 等长期请求缺乏路线图沟通
- **本地模型体验**：Ollama 超时、上下文监控不准等问题显示边缘场景测试不足

---

## 8. 待处理积压

### 超过 60 天无官方回应的高价值 Issue

| Issue | 创建日期 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n | 2026-01-28 | 2026-04-04 | 全球化扩张受阻，社区 PR 可能分叉 |
| [#75](https://github.com/openclaw/openclaw/issues/75) 跨平台桌面端 | 2026-01-01 | 2026-04-04 | 企业市场流失，67 赞为最高 enhancement |
| [#26108](https://github.com/openclaw/openclaw/issues/26108) Discord 语音无音频 | 2026-02-25 | 2026-04-04 | 语音场景不可用，两次修复未解决 |
| [#29053](https://github.com/openclaw/openclaw/issues/29053) MCP 原生支持 | 2026-02-27 | 2026-04-04 | 行业标准脱节风险 |

### 需要维护者决策的悬停 PR

| PR | 状态 | 阻塞原因 |
|:---|:---|:---|
| [#29488](https://github.com/openclaw/openclaw/pull/29488) Discord/Windows 代理与临时目录修复 | OPEN (XL) | 跨平台兼容性复杂，需核心维护者 review |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) Typecast TTS 提供商 | OPEN (L) | 第三方服务集成，需产品决策 |
| [#41158](https://github.com/openclaw/openclaw/pull/41158) 全局速率限制重试 | OPEN (XL) | 架构影响大，需 failover 策略评审 |

---

**日报生成时间**：2026-04-05  
**数据来源**：GitHub openclaw/openclaw 公开 API  
**分析师**：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告
**分析日期**: 2026-04-05 | **数据来源**: GitHub 公开 API

---

## 1. 生态全景

个人 AI 助手开源生态正处于**协议标准分化与多模型解耦**的关键转折点。OpenClaw 凭借 500+ 日活 Issues/PR 维持绝对领导地位，但其 Anthropic 依赖正被 NanoClaw、IronClaw 等项目的"多模型引擎"战略挑战；MCP/ACP/A2A/AG-UI 等协议并存，尚无统一标准；边缘部署（PicoClaw）、企业安全（NanoClaw）、多 Agent 协作（LobsterAI/CoPaw）成为差异化突破口。整体呈现"一超多强、垂直深耕"格局，质量债务与功能扩张的张力普遍存在。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PR (24h) | Release | 健康度评估 | 阶段定位 |
|:---|:---:|:---:|:---:|:---|:---|
| **OpenClaw** | 500 (新开/活跃 294, 关闭 206) | 500 (待合并 296, 已合并 204) | 无 | 🟡 极高活跃但 P0 Bug 积压 | 功能扩张期，质量承压 |
| **NanoBot** | 15 (11 活跃/4 关闭) | 26 (14 待合并/12 已合并) | 无 | 🟢 稳定迭代，上下文管理债务 | 质量巩固期 |
| **PicoClaw** | 12 (9 新开/活跃) | 32 (28 待合并) | v0.2.5-nightly | 🟡 活跃但 High Bug 突增 | 快速迭代期，稳定性待验证 |
| **NanoClaw** | 4 活跃 | 20 (14 待审) | 无 | 🟡 高活跃，安全/多模型双主线 | 架构转型期（Claude 解耦） |
| **NullClaw** | 4 关闭, 4 新开 | 11 (1 待合并) | 无 | 🟢 维护响应快，技术债务低 | 健康收敛期 |
| **IronClaw** | 6 活跃 | 43 (31 待合并) | 无 | 🟡 高强度开发，Engine V2 风险 | 引擎重构期 |
| **LobsterAI** | 6 新开 | 15 (14 待审/1 关闭) | 无 | 🟢 UX 改进密集，社区贡献活跃 | 体验优化期 |
| **Moltis** | 6 新开 | 2 待合并 | 无 | 🟡 需求脉冲增长，交付滞后 | 需求收集期 |
| **CoPaw** | 22 (18 新开/活跃, 4 关闭) | 15 (7 待合并/8 已合并) | 无 (1.0.2b1 准备中) | 🟢 渠道扩展快，首次贡献者 4 人 | 生态扩张期 |
| **TinyClaw** | 无活动 | — | — | ⚪ 休眠 | — |
| **ZeptoClaw** | 无活动 | — | — | ⚪ 休眠 | — |
| **EasyClaw** | 无活动 | — | — | ⚪ 休眠 | — |

---

## 3. OpenClaw 在生态中的定位

### 优势
- **规模碾压**: 日活 1000+ 条 Issues/PR，相当于第 2-10 名总和的 3 倍，生态网络效应显著
- **ACP 协议主导**: 子代理生态 4 个核心 PR 同日闭环，alexanderkreidich 形成单一贡献者攻坚能力
- **渠道覆盖最全**: Telegram DM 绑定、Slack 斜杠命令等细节打磨领先

### 技术路线差异
| 维度 | OpenClaw | 竞品对比 |
|:---|:---|:---|
| **模型策略** | Claude/Anthropic 深度绑定 | NanoClaw/IronClaw 主动"Claude 解耦"，NanoBot 强调"供应商无关" |
| **协议立场** | 自有 ACP + 观望 MCP (#29053 无回应) | NullClaw 已支持 A2A，Moltis 推进 MCP，协议多元化 |
| **安全架构** | 执行审批流程繁琐 (#59510 痛点) | NanoClaw 确定性代码执行 (#1605)，IronClaw 沙箱隔离 (#678) |
| **部署形态** | macOS 桌面端独占 (#75 67👍 未满足) | PicoClaw 边缘设备优先，NanoBot Windows 稳定性口碑 |

### 社区规模对比
- **绝对数量**: OpenClaw 的 119 评论 i18n Issue、67👍 跨平台需求，均为生态最高
- **质量张力**: 关闭 206 Issues 显示维护力度，但 P0 执行层 Bug 无修复进展，用户信任侵蚀
- **替代威胁**: NanoBot #2774 用户直言"完爆 openclaw"，长期会话可靠性成为竞品突破口

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **多模型引擎/供应商解耦** | NanoClaw (#80, 56👍), IronClaw, NanoBot (#2343 上下文配置), Moltis (#552 多模型限制) | 规避 Anthropic 封禁风险，支持 Codex/Gemini/OpenRouter 等替代方案 | 🔴 极高 |
| **MCP/标准协议支持** | OpenClaw (#29053, 16👍), Moltis (#555), NullClaw (A2A 已支持), LobsterAI | 工具生态互操作性，避免供应商锁定 | 🟡 高 |
| **执行安全与沙箱隔离** | NanoClaw (#1630 只读挂载, #1629 公网加固), IronClaw (#678 沙箱), OpenClaw (#59510 审批简化) | 从"提示工程安全"转向"OS 级隔离" | 🟡 高 |
| **多 Agent 协作架构** | LobsterAI (#1462 "Agent 小组"), CoPaw (#2922 Agent Team), OpenClaw (ACP 子代理) | 从单 Agent 工具调用进化为团队编排 | 🟡 高 |
| **边缘/本地部署优化** | PicoClaw (Pi Zero 2W 验证), NanoBot (Ollama 超时 #34644), OpenClaw (i18n 资源约束) | 降低云依赖，隐私优先场景 | 🟢 中 |
| **会话/记忆可靠性** | IronClaw (#1937 结构化集合), NanoClaw (#1283 BM25+向量), OpenClaw (上下文压缩 #61021) | 长期会话不崩溃、记忆不碎片化 | 🟡 高 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构特点 |
|:---|:---|:---|:---|
| **OpenClaw** | ACP 子代理生态、跨渠道一致性 | 技术早期采用者、多平台重度用户 | TypeScript/Node，自有协议栈，macOS 优先 |
| **NanoBot** | 稳定性口碑、Windows 兼容、本地模型 | 企业桌面部署、长期会话用户 | Python，供应商无关设计，Jinja2 模板化 |
| **PicoClaw** | 边缘设备、硬件绑定、隐私通讯 (Signal) | IoT 开发者、隐私敏感用户 | 轻量级运行时，Engram MCP 内存优化 |
| **NanoClaw** | 安全加固、多模型迁移、Matrix 去中心化 | 企业合规、供应商风险规避者 | 容器化安全策略，确定性执行引擎 |
| **NullClaw** | 可观测性 (OTel)、协议网关 (A2A/AG-UI)、Zig 性能 | 平台集成商、性能敏感场景 | Zig 系统级语言，统一 ChannelRuntime |
| **IronClaw** | 个人 AI 闭环 (承诺追踪/Routine)、Workspace 实体 | 个人生产力用户、AI 原生工作流 | Rust，Engine V2 重构，SKILL.md 扩展哲学 |
| **LobsterAI** | UX 防丢失、IM 多实例、Skills 生态 | 中文办公场景、多机器人管理者 | Electron 桌面端，网易生态整合 |
| **CoPaw** | 渠道全覆盖 (QQ/WhatsApp/飞书)、多消息交互 | 中文开发者、IM 集成需求 | Python，AgentScope 基础，快速渠道适配 |
| **Moltis** | 模型管理 UX、桌面端体验 | 多模型尝鲜用户、配置敏感者 | 待观察，需求活跃但交付滞后 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（功能扩张 > 质量巩固）
| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 日活 1000+，ACP 生态闭环 | P0 Bug 无修复，3.31 版本回归 |
| **PicoClaw** | 认证层重构、多通道扩展 | 3 个 High Bug 突增，夜间构建不稳定 |
| **IronClaw** | Engine V2 重构、Workspace 实体 | 生产环境 Routine 故障，环境变量兼容断裂 |
| **NanoClaw** | 多模型引擎、安全加固双主线 | 文档滞后于 OAuth 变更，用户财务风险 |

### 🟢 质量巩固阶段（稳定性优先）
| 项目 | 特征 | 优势 |
|:---|:---|:---|
| **NanoBot** | 上下文管理债务暴露但标记 `good first issue` | 用户长期验证稳定性，Windows 口碑 |
| **NullClaw** | 11 PR 快速合并，技术债务低 | OTel 可观测性领先，维护响应快 |
| **LobsterAI** | UX 防丢失 5 PR 组合拳 | 社区贡献者 MaoQianTu 形成体系化输出 |

### ⚠️ 需求活跃但交付滞后
| 项目 | 瓶颈 | 建议 |
|:---|:---|:---|
| **Moltis** | 6 Issues 脉冲提交，0 合并 | 优先响应 bsarkisov 系列反馈，建立维护者 SLA |

### 😴 休眠项目
**TinyClaw, ZeptoClaw, EasyClaw** — 24h 无活动，需评估项目可持续性

---

## 7. 值得关注的趋势信号

### 信号一：从"模型绑定"到"供应商解耦"成为生存刚需
- **证据**: NanoClaw #80 (56👍) "Anthropic 已封禁 OpenClaw 用户订阅"，IronClaw/OpenClaw 用户同步遭遇 OAuth 计费变更
- **启示**: 智能体框架必须设计为"模型即插即用"，单一供应商依赖构成业务连续性风险

### 信号二：协议碎片化催生"协议网关"新架构层
- **证据**: NullClaw 同时支持 A2A 和 AG-UI 请求 (#768)，OpenClaw ACP 与 MCP 标准对峙 (#29053)，Moltis 推进 MCP (#555)
- **启示**: 框架需抽象协议适配层，避免被单一标准绑架；A2A 的企业级、MCP 的工具级、AG-UI 的前端级可能长期并存

### 信号三：执行安全从"提示工程"转向"OS 级隔离"
- **证据**: NanoClaw #1630 容器只读挂载、#1605 确定性代码执行；IronClaw #678 沙箱配置；OpenClaw #59510 审批流程被批"过于繁琐"
- **启示**: 生产环境部署需要可审计的安全策略，而非依赖 LLM 的"诚实性"

### 信号四："个人 AI 助手"向"团队编排平台"跃迁
- **证据**: LobsterAI #1462 "Agent 小组/房间"，CoPaw #2922 "Agent Team 协作"，IronClaw #1736 承诺追踪系统
- **启示**: 单 Agent 工具调用已 commoditized，多 Agent 状态共享、任务委托、冲突解决是下一差异化战场

### 信号五：边缘部署与隐私优先场景崛起
- **证据**: PicoClaw Pi Zero 2W 验证，Signal 集成诉求 (#41)，NanoBot Ollama 本地模型超时优化
- **启示**: 云依赖模型面临成本与合规双重压力，端侧智能体 + E2E 加密通讯成为细分蓝海

### 信号六：UX"防丢失"成为桌面端竞争焦点
- **证据**: LobsterAI 单日 5 个确认对话框 PR，CoPaw `[SPLIT]` 多消息分隔符
- **启示**: 智能体从"能跑"到"敢用"，需要系统性的用户操作保护机制，配置即代码与 UI 反馈的断层需弥合

---

**分析师结语**: 2026 年 Q2 的个人 AI 助手生态，正处于"规模领导者质量承压、垂直挑战者差异化突围"的窗口期。OpenClaw 的社区规模优势仍不可撼动，但其 Anthropic 依赖、macOS 独占、审批繁琐等结构性约束，为 NanoClaw（安全/多模型）、NanoBot（稳定/Windows）、IronClaw（个人 AI 闭环）等竞品创造了错位竞争空间。技术决策者应关注协议适配层设计与供应商解耦能力，避免被锁定于单一生态。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-05

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **15 条 Issues**（11 活跃/4 关闭）与 **26 条 PR**（14 待合并/12 已合并）。核心进展集中在**工具系统重构**（心跳工具、用户确认工具）、**多平台适配**（Telegram 线程模式、小智语音网关）及**提供商兼容性**（GPT-5 支持、降级切换）。社区反馈显示项目稳定性获认可（#2774），但上下文窗口管理、SSRF 策略过度限制等架构级问题持续引发讨论。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（12 条）

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#2788](https://github.com/HKUDS/nanobot/pull/2788) | friday-james | **GPT-5 模型家族支持**：适配 `max_completion_tokens` 参数，为推理模型智能跳过 `temperature` | 解锁最新 OpenAI 模型能力 |
| [#2786](https://github.com/HKUDS/nanobot/pull/2786) | LingaoM | **修复推理内容丢失**：恢复 `reasoning_content` 和 `extra_content` 字段（回归修复） | 解决自定义模型思考链显示问题 |
| [#2789](https://github.com/HKUDS/nanobot/pull/2789) | IlyaSemenov | **Telegram 线程 DM 修复**：流式回调复制元数据 | 配合 #2793 完善线程模式支持 |
| [#2779](https://github.com/HKUDS/nanobot/pull/2779) | JackLuguibin | **Jinja2 模板化**：代理响应与记忆整合全面模板化 | 提升可定制性，为国际化铺路 |
| [#2722](https://github.com/HKUDS/nanobot/pull/2722) | pikaxinge | **工具前缀缓存稳定化**：MCP 工具变动不再使缓存失效 | 显著降低 LLM 调用成本 |
| [#2780](https://github.com/HKUDS/nanobot/pull/2780) | JackLuguibin | **Tool 类重构**：简化类型处理与参数验证 | 代码可维护性提升 |
| [#2790](https://github.com/HKUDS/nanobot/pull/2790) → 关闭 | lzmjlrt | `ask_user` 工具初版（后由 #2791 替代） | 功能迭代 |
| [#2754](https://github.com/HKUDS/nanobot/pull/2754) → 关闭 | Re-bin | 内置 `grep`/`glob` 搜索工具 | 待重新评估后合并 |
| [#1700](https://github.com/HKUDS/nanobot/pull/1700) | Wenzhang-Chen | Docker 构建：SSH 依赖转 HTTPS | 改善 CI/CD 兼容性 |
| [#1164](https://github.com/HKUDS/nanobot/pull/1164) | thanhtantran | 越南语 README（长期开放） | 国际化社区建设 |

**整体推进评估**：今日合并聚焦**模型兼容性层**（GPT-5、推理字段修复）与**架构质量**（缓存、模板化、类型系统），为 v0.2.x 系列奠定稳定性基础。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issues

| Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---|:---|
| [#2343](https://github.com/HKUDS/nanobot/issues/2343) | **15 条** | `contextWindowTokens` 配置失效导致上下文溢出崩溃 | **架构债务暴露**：配置与实现脱节，需紧急修复 `run_agent_loop` 的 token 检查逻辑 |
| [#2760](https://github.com/HKUDS/nanobot/issues/2760) | **9 条** | 应用层+SDK 双重重试导致上游负载放大 3 倍 | **生产级可靠性**：重试策略需全局协调，避免级联故障 |
| [#2774](https://github.com/HKUDS/nanobot/issues/2774) | **5 条** | 与 OpenClaw 实测对比，稳定性获认可 | **品牌背书**：真实用户长期验证，可作为营销素材；Windows 平台稳定性成差异化优势 |

### 高价值反馈
- **#2774** 作者 `bigsinger` 明确指出："nanobot 非常稳定，完爆 openclaw... 已经养的很好用了"——反映**长期会话可靠性**是核心用户价值

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-崩溃** | [#2343](https://github.com/HKUDS/nanobot/issues/2343) | 上下文窗口配置失效导致请求 36748 tokens 触发 400 错误 | **无 fix PR**，标记 `good first issue` |
| 🔴 **P0-无限循环** | [#2797](https://github.com/HKUDS/nanobot/issues/2797) | 心跳任务完成后未标记完成，重复触发 | **无 fix PR**，与 #2801 相关 |
| 🟡 **P1-功能阻断** | [#2796](https://github.com/HKUDS/nanobot/issues/2796) | SSRF 防护阻断所有 localhost，破坏本地服务集成（PinchTab） | **有 PR #2784** 添加 `allowInternalUrls` 配置 |
| 🟡 **P1-回归** | [#2795](https://github.com/HKUDS/nanobot/issues/2795) | v0.1.4.post6 升级后 Telegram 暴露思考过程 | **无 fix PR**，配置迁移问题 |
| 🟡 **P1-安装失败** | [#2802](https://github.com/HKUDS/nanobot/issues/2802) | `python-olm` 构建失败阻断 Matrix E2E 功能 | **无 fix PR**，依赖链问题 |
| 🟢 **P2-已修复** | [#2777](https://github.com/HKUDS/nanobot/issues/2777) | 自定义模型 `reasoning_content` 未显示 | **已修复** by #2786 |
| 🟢 **P2-已修复** | [#2669](https://github.com/HKUDS/nanobot/issues/2669) | SSRF 误拦截 Tailscale CGNAT 地址 | **已关闭**，策略调整 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 可行性评估 | 纳入预测 |
|:---|:---|:---|:---|
| **统一跨平台会话** | [#2798](https://github.com/HKUDS/nanobot/issues/2798) | 架构改动中等，需抽象会话存储层 | ⭐⭐⭐ 高概率，契合多平台战略 |
| **专用视觉模型支持** | [#2339](https://github.com/HKUDS/nanobot/issues/2339) | 需拆分 provider 路径，影响核心架构 | ⭐⭐⭐ 高概率，多模态趋势明确 |
| **心跳与通知评估工具** | [#2801](https://github.com/HKUDS/nanobot/pull/2801) | PR 已提交，代码就绪 | ⭐⭐⭐⭐⭐ 下一版本 |
| **用户确认交互工具** | [#2791](https://github.com/HKUDS/nanobot/pull/2791) | PR 已提交，CLI 菜单交互完整 | ⭐⭐⭐⭐⭐ 下一版本 |
| **Crawl4AI 网页抓取** | [#2724](https://github.com/HKUDS/nanobot/pull/2724) | 依赖 Chromium，体积权衡 | ⭐⭐⭐ 可能作为可选组件 |
| **小智语音网关** | [#2584](https://github.com/HKUDS/nanobot/pull/2584) | ESP32 生态扩展，硬件绑定 | ⭐⭐⭐ IoT 场景专项 |
| **提供商降级切换** | [#2800](https://github.com/HKUDS/nanobot/pull/2800) | 解决 #2760 重试放大问题 | ⭐⭐⭐⭐ 可靠性专项 |
| **Exec 工具内部 URL 白名单** | [#2784](https://github.com/HKUDS/nanobot/pull/2784) | 直接回应 #2796 | ⭐⭐⭐⭐⭐ 紧急合并 |

---

## 7. 用户反馈摘要

### ✅ 满意点
> *"nanobot 非常稳定，完爆 openclaw... 已经养的很好用了"* —— [#2774](https://github.com/HKUDS/nanobot/issues/2774) `bigsinger`

- **Windows 平台稳定性** 成核心口碑
- **长期会话可养护性** 优于竞品

### ❌ 痛点
| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| 上下文窗口管理失效 | #2343 | 长会话必然崩溃，配置形同虚设 |
| 升级后行为变更（暴露思考）| #2795 | 版本兼容性缺乏迁移指南 |
| 本地开发受阻（SSRF）| #2796 | 无法连接 PinchTab 等本地自动化工具 |
| 安装依赖脆弱 | #2802 | Matrix E2E 功能因 `python-olm` 不可用 |

### 💡 隐含需求
- **可观测性**：用户需要理解"为什么 agent 不调用工具"（#2775 只输出文字）
- **配置即代码**：当前 JSON 配置与运行时行为存在断层

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| Issue/PR | 创建时间 | 问题 | 行动建议 |
|:---|:---|:---|:---|
| [#2343](https://github.com/HKUDS/nanobot/issues/2343) | 2026-03-22 (14天) | **核心架构缺陷**：token 窗口检查缺失 | 优先分配核心开发者，或提升 `good first issue` 指导粒度 |
| [#2638](https://github.com/HKUDS/nanobot/issues/2638) | 2026-03-30 (6天) | 记忆整合失败时会话无限增长 | 与 #2343 同源，需统一会话生命周期管理 |
| [#2584](https://github.com/HKUDS/nanobot/pull/2584) | 2026-03-28 (8天) | 小智语音网关大型 PR | 需硬件测试环境，建议拆分 MCP 工具与网关核心 |
| [#1164](https://github.com/HKUDS/nanobot/pull/1164) | 2026-02-25 (39天) | 越南语 README | 低优先级，可标记 `help wanted` |

---

**日报生成时间**：2026-04-05  
**数据基准**：GitHub API 24h 滚动窗口

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-05

## 1. 今日速览

PicoClaw 社区今日呈现**高度活跃状态**，24小时内产生 **12 条 Issues 更新**（9 条新开/活跃）和 **32 条 PR 更新**（28 条待合并），并推送了 **v0.2.5-nightly 版本**。核心开发重心集中在**认证安全架构升级**（标准 HTTP 登录流替代日志 Token）、**多通道扩展**（Teams、Grafana Alertmanager、Mattermost）以及**工具语义澄清**（JSON 转义问题）。社区对 Android 自动化和 Signal 集成的长期需求持续发酵，但高优先级 Bug 如 WebSocket 连接失败、模型回退失效等问题亟待修复。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.5-nightly.20260404.84e42d69

| 属性 | 详情 |
|:---|:---|
| **发布类型** | 自动化夜间构建 |
| **稳定性** | ⚠️ 不稳定，谨慎使用 |
| **完整变更** | [compare/v0.2.5...main](https://github.com/sipeed/picoclaw/compare/v0.2.5...main) |

> **迁移注意**：夜间构建包含未充分测试的认证流重构代码，生产环境建议等待正式版。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2320](https://github.com/sipeed/picoclaw/pull/2320) | lc6464 | 澄清 `write_file` 嵌套 JSON 转义语义，补充测试 | **工具层基础稳定性**：解决跨 Provider 的转义行为不一致问题 |
| [#2317](https://github.com/sipeed/picoclaw/pull/2317) + [#2318](https://github.com/sipeed/picoclaw/pull/2318) | sky5454 | 以标准 HTTP 登录流替代日志 Token 认证，bcrypt 密码存储 | **用户体验质变**：消除"翻日志找 Token"的反模式，为后续多用户架构奠基 |
| [#41](https://github.com/sipeed/picoclaw/issues/41) (Issue) | eti0 | Signal 通道集成方案确定 | **隐私合规**：响应社区对 E2E 加密通讯的强烈需求 |

**整体里程碑**：认证层完成从"开发者友好"到"用户友好"的关键转型；工具语义文档化降低跨 Provider 集成门槛。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#2236](https://github.com/sipeed/picoclaw/issues/2236) Docker 端口映射后 Web UI 输入框禁用 | **7 条** | **部署场景痛点**：用户修改默认端口 `18800→18811` 后前端逻辑断裂，暴露硬编码端口依赖问题 |
| 2 | [#41](https://github.com/sipeed/picoclaw/issues/41) Signal 通道集成 | **4 条** | **隐私优先用户诉求**：7 个 👍 印证社区对 Signal 的强需求，区别于 Telegram/WhatsApp 的差异化定位 |
| 3 | [#292](https://github.com/sipeed/picoclaw/issues/292) Android 设备自动化 | **4 条** | **边缘计算场景**：与 "Botdrop" 对标，瞄准移动端 AI Agent 蓝海 |

**背后诉求**：用户需要 PicoClaw 突破"服务器端 Agent"边界，向**移动端原生控制**和**隐私优先通讯**延伸。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 现象 | 修复状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2319](https://github.com/sipeed/picoclaw/issues/2319) | v0.2.5 WebSocket 连接失败 | ❌ 待修复 | 实时通讯通道全阻断 |
| 🔴 **High** | [#2334](https://github.com/sipeed/picoclaw/issues/2334) | 模型回退（fallback）失效 | ❌ 待修复 | 多 Provider 可靠性承诺落空 |
| 🔴 **High** | [#2342](https://github.com/sipeed/picoclaw/issues/2342) | Provider 400 错误（OpenAI/Groq/OpenRouter 全模型） | ❌ 待修复 | 核心推理能力不可用 |
| 🟡 **Medium** | [#2236](https://github.com/sipeed/picoclaw/issues/2236) | Docker 非标准端口部署 UI 异常 | ❌ 待修复 | 容器化生产部署受阻 |
| 🟡 **Medium** | [#2337](https://github.com/sipeed/picoclaw/issues/2337) | 工具转义语义描述 Provider 特异性过强 | 🟡 [#2338](https://github.com/sipeed/picoclaw/pull/2338) 待审 | 文档/集成准确性 |
| 🟢 **Low** | [#2335](https://github.com/sipeed/picoclaw/issues/2335) | Android 适配问题 | ❌ 待修复 | 移动端实验性支持 |

> **风险评估**：今日新增的 3 个 High 优先级 Bug 均涉及核心功能（连接、推理、容错），建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度信号 | 纳入 v0.3.0 概率 |
|:---|:---|:---|:---:|
| **Provider 级模型配置重构** | [#2321](https://github.com/sipeed/picoclaw/issues/2321) | 架构层面痛点，配置冗余 | **高** |
| **Mattermost 企业通道** | [#1586](https://github.com/sipeed/picoclaw/pull/1586) | PR 已开 20 天，持续更新 | **高** |
| **Grafana Alertmanager 集成** | [#2251](https://github.com/sipeed/picoclaw/pull/2251) | 可观测性场景，代码完整 | **中高** |
| **Microsoft Teams Webhook** | [#2244](https://github.com/sipeed/picoclaw/pull/2244) | 企业协作刚需，多目标支持 | **中高** |
| **Agent Shield 安全套件** | [#2313](https://github.com/sipeed/picoclaw/pull/2313), [#2327](https://github.com/sipeed/picoclaw/pull/2327) | 多 PR 协同，K3s 部署就绪 | **中**（需安全审计） |
| **结构化上下文压缩（6 阶段算法）** | [#2333](https://github.com/sipeed/picoclaw/pull/2333) | 实验性，与 [#2285](https://github.com/sipeed/picoclaw/pull/2285) LCM 竞争 | **中** |
| **Signal 通道** | [#41](https://github.com/sipeed/picoclaw/issues/41) | 方案确定，待正式 PR | **中** |
| **Android 自动化** | [#292](https://github.com/sipeed/picoclaw/issues/292) | 长期 Roadmap，技术挑战大 | **低-中** |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 场景 | 原声引用 | 根因 |
|:---|:---|:---|
| 认证体验反人类 | "Previously users had to find the one-time token from console logs" | 缺乏标准 Web 登录流（已修复） |
| Docker 部署脆弱 | "修改 web 监听端口，web 页面无法发送任何消息，输入框是禁用的" | 前端硬编码端口/路径假设 |
| 多 Provider 配置冗余 | "must repeatedly enter the same base_url and api_key" | 配置模型扁平化设计 |
| 工具行为不可预测 | "\n 被自动转换而非原样写入" | 转义语义未抽象 Provider 差异 |

### 😊 积极反馈

- **Engram MCP 集成** 在 Pi Zero 2 W 上验证成功，边缘设备内存方案可行 ([#2345](https://github.com/sipeed/picoclaw/pull/2345))
- 社区主动贡献安全加固方案（Agent Shield），体现项目生态健康度

---

## 8. 待处理积压

> 以下 Issue/PR 超过合理响应周期，建议维护者关注：

| 类型 | 编号 | 标题 | 等待天数 | 风险 |
|:---|:---|:---|:---:|:---|
| PR | [#1586](https://github.com/sipeed/picoclaw/pull/1586) | Mattermost 通道 + Gateway 稳定性加固 | **20 天** | 企业用户需求流失 |
| Issue | [#292](https://github.com/sipeed/picoclaw/issues/292) | Android 设备自动化 | **48 天** | 竞品（Botdrop）抢占窗口期 |
| PR | [#2215](https://github.com/sipeed/picoclaw/pull/2215) | Hooks respond 动作与文档 | **5 天** | 插件生态阻塞 |
| PR | [#2285](https://github.com/sipeed/picoclaw/pull/2285) | 短期记忆引擎（LCM）实现 | **3 天** | 与 [#2333](https://github.com/sipeed/picoclaw/pull/2333) 方案冲突需仲裁 |

---

**报告生成时间**：2026-04-05  
**数据来源**：GitHub API / sipeed/picoclaw  
**健康度评分**：🟢🟢🟢🟡⚪ (7/10，活跃但 Bug 积压需清理)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-05

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> **统计周期**: 过去24小时  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：20 个 PR 更新（14 个待审）、4 个 Issues 活跃，显示社区正围绕**多模型支持**与**平台安全加固**两大主线密集迭代。OpenAI Codex 与 OpenCode SDK 的替代引擎 PR 双双推进，直接回应用户对 Anthropic 供应商锁定的担忧。同时，3 个安全相关 PR（容器只读挂载、OneCLI 公网加固、安全策略引擎）表明项目正从功能扩展转向生产级可靠性建设。整体健康度良好，但 OAuth 计费变更引发的文档混乱需紧急关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 类型 | 进展意义 |
|:---|:---|:---|:---|
| [#1634](https://github.com/qwibitai/nanoclaw/pull/1634) `Skill/migrate nanoclaw` | gavrielc | 关闭 | 迁移工具技能，降低 OpenClaw 用户迁移门槛 |
| [#1633](https://github.com/qwibitai/nanoclaw/pull/1633) `Skill/migrate from openclaw` | gavrielc | 关闭 | 配套迁移技能，完善生态承接能力 |
| [#1632](https://github.com/qwibitai/nanoclaw/pull/1632) `auto-prune stale session artifacts` | gavrielc | 关闭 | **运维可靠性**：自动清理过期会话数据，解决磁盘膨胀问题 |
| [#821](https://github.com/qwibitai/nanoclaw/pull/821) `NapCat (QQ) channel` | FloatingDream528 | 关闭 | 关闭未合并，QQ 渠道集成仍需迭代 |
| [#1625](https://github.com/qwibitai/nanoclaw/pull/1625) `PlaceType/ActorRole 型` | shin902 | 关闭 | VRC-AI-Bot 类型系统移植，为 Discord 场景扩展奠基 |
| [#1622](https://github.com/qwibitai/nanoclaw/pull/1622) `Setup branch` | oferkirsh | 关闭 | 设置分支清理 |

**核心推进**：会话生命周期管理（#1632）进入主分支，标志着项目开始系统性解决长期运行的运维痛点。

---

## 4. 社区热点

### 🔥 最高关注度：多模型支持诉求

| 条目 | 数据 | 核心诉求 |
|:---|:---|:---|
| [#80](https://github.com/qwibitai/nanoclaw/issues/80) Support runtimes and providers other than Claude/Anthropic | **31 评论, 56 👍** | 供应商锁定风险：Anthropic 已封禁 OpenClaw 用户订阅，用户要求紧急支持 OpenCode、Codex、Gemini 等替代方案 |

**深度分析**：该 Issue 创建于 2 月初，昨日因 Anthropic 政策收紧（OAuth 计费变更）再度升温。用户 @jchadwick 明确指出"prudent to make this more flexible"，社区已形成**规避单点故障**的共识。配套 PR [#963](https://github.com/qwibitai/nanoclaw/pull/963)（OpenAI Codex）和 [#1628](https://github.com/qwibitai/nanoclaw/pull/1628)（OpenCode）今日同步活跃，显示维护者正在响应。

### 🔥 突发混乱：OAuth 认证文档黑洞

| 条目 | 数据 | 核心诉求 |
|:---|:---|:---|
| [#1608](https://github.com/qwibitai/nanoclaw/issues/1608) Claude setup-token / OAuth setup is confusing and undocumented | 2 评论, 0 👍 | 从 API Key 迁移到 OAuth 的文档缺失，OneCLI 注入 `ANTHROPIC_API_KEY=placeholder` 导致凭据复制失效 |

**关联冲击**：[#1620](https://github.com/qwibitai/nanoclaw/issues/1620) 披露 Anthropic 将第三方工具 OAuth 连接改为**额外计费**（extra usage），不再消耗订阅额度。用户要求文档明确推荐 API Key 方案，否则将面临意外账单。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | **容器内 agent-runner 源码可被恶意修改** — 容器以 `bypassPermissions` 运行，且 `/app/src` 挂载为读写，agent 可通过 bash 持久化修改宿主机代码 | [#1630](https://github.com/qwibitai/nanoclaw/pull/1630) 待审 | ✅ [#1630](https://github.com/qwibitai/nanoclaw/pull/1630) `mount agent-runner source read-only` |
| 🔴 **高** | **OneCLI 公网部署默认暴露高危端口** — Docker 绕过 UFW，PostgreSQL(5432)+gateway(10254/10255) 默认 `0.0.0.0` 监听，配合默认凭证 `onecli:onecli` 形成 RCE 风险 | [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) 待审 | ✅ [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) `harden OneCLI setup for public servers` |
| 🟡 **中** | **消息管道导致 30 分钟死锁** — 软繁忙模式下消息流入活跃查询的 `MessageStream` 时，SDK 等待流消息、宿主等待 `result: null` 空闲信号、查询等待 `runQuery()` 返回，形成循环依赖 | [#1623](https://github.com/qwibitai/nanoclaw/pull/1623) 待审 | ✅ [#1623](https://github.com/qwibitai/nanoclaw/pull/1623) `prevent 30-min deadlock` |
| 🟡 **中** | **定时任务调度 JID 错误** — 使用 `chat_jid`（结果投递地址）而非目标群组 `JID` 入队，导致任务路由异常 | [#1617](https://github.com/qwibitai/nanoclaw/pull/1617) 待审 | ✅ [#1617](https://github.com/qwibitai/nanoclaw/pull/1617) `enqueue under target group JID` |
| 🟡 **中** | **OpenRouter 非 Anthropic 模型路由失败** — Anthropic SDK 代理流中模型别名（如 `arcee-ai/trinity-large-preview:free`）处理异常，伴随无回复回归 | [#954](https://github.com/qwibitai/nanoclaw/pull/954) 待审（3月11日） | ✅ [#954](https://github.com/qwibitai/nanoclaw/pull/954) |

**安全态势**：今日 3 个高危安全 PR 集中出现，反映项目从原型向生产部署跃迁时的典型阵痛。建议维护者优先审查 #1629（公网暴露）和 #1630（代码篡改）。

---

## 6. 功能请求与路线图信号

| 功能方向 | 信号强度 | 相关 Issue/PR | 纳入可能性 |
|:---|:---|:---|:---|
| **多模型引擎架构** | ⭐⭐⭐⭐⭐ | #80, #963, #1628 | **极高** — Codex/OpenCode 双 PR 并行，#1628 采用 `containerConfig.agentRunner` 配置+全局 `.env` 回退的优雅设计 |
| **Matrix 去中心化通讯** | ⭐⭐⭐⭐☆ | [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | 高 — 完整 E2EE 实现，代码风格对齐 Telegram 渠道，仅待审 |
| **Signal 隐私通讯** | ⭐⭐⭐☆☆ | [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) | 中 — 3月16日提至今，需 signal-cli 外部依赖 |
| **Telegram 话题隔离** | ⭐⭐⭐⭐☆ | [#1626](https://github.com/qwibitai/nanoclaw/pull/1626) | 高 — 自动注册机制，今日新建 |
| **Sentry 错误追踪** | ⭐⭐⭐☆☆ | [#1631](https://github.com/qwibitai/nanoclaw/pull/1631) | 中 — IPC 集成技能，企业场景需求 |
| **Mattermost 企业协作** | ⭐⭐☆☆☆ | [#546](https://github.com/qwibitai/nanoclaw/pull/546) | 低 — 2月26日至今标记 Blocked |
| **安全策略引擎** | ⭐⭐⭐⭐☆ | [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) | 高 — 确定性代码执行（非提示工程），只读挂载+工具限制+用户门控 |
| **记忆系统升级** | ⭐⭐⭐☆☆ | [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) | 中 — BM25+向量混合检索，3月19日待审 |

**路线图判断**：下一版本核心将是 **"Claude 解耦 + 安全加固"**，多模型支持从"nice-to-have"变为"survival-critical"。

---

## 7. 用户反馈摘要

### 痛点提炼

| 来源 | 真实反馈 | 场景 |
|:---|:---|:---|
| #80 评论 | *"Anthropic is already shutting down peoples' subs for using them with OpenClaw"* | 生产环境供应商封禁，业务连续性受威胁 |
| #1608 | *"Switching from API key to OAuth auth is not documented and has several non-obvious pitfalls"* | 认证方式迁移的隐藏成本 |
| #1620 | *"users who followed the [OAuth] guide will now be billed extra usage instead of subscription allowance"* | 文档误导导致财务损失风险 |

### 满意度信号
- **架构认可**：#1628 的 `agentRunner` 配置设计获隐性认可（无反对评论）
- **技能生态**：迁移技能 #1633/#1634 快速关闭显示社区工具链趋于完善

### 不满意焦点
- **文档债务**：OAuth 相关文档滞后于产品变更至少 2 个迭代周期
- **计费透明度**：Anthropic 政策变更未通过项目渠道及时同步用户

---

## 8. 待处理积压

| 条目 | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#546](https://github.com/qwibitai/nanoclaw/pull/546) Mattermost channel | 2026-02-26 | **Blocked 38天** | 企业用户流失风险 |
| [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) Signal channel | 2026-03-16 | Needs Review 20天 | 隐私敏感用户群体 |
| [#1283](https://github.com/qwibitai/nanoclaw/pull/1283) memory-lancedb-pro | 2026-03-19 | Needs Review 17天 | 检索质量竞争劣势 |
| [#954](https://github.com/qwibitai/nanoclaw/pull/954) OpenRouter fix | 2026-03-11 | Needs Review 25天 | 多模型路由可靠性 |

**维护者行动建议**：  
- 🔴 优先：澄清 #546 Blocked 原因（架构冲突？资源不足？）  
- 🟡 次之：#954 与 #963/#1628 存在依赖关系，需协调合并顺序避免冲突

---

*日报生成时间: 2026-04-05*  
*数据截止时间: 2026-04-04 23:59 UTC*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-05

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-04-05  
> **分析师**: AI 智能体开源项目分析师

---

## 1. 今日速览

今日 NullClaw 项目呈现**高活跃度收尾状态**：过去 24 小时内 11 个 PR 完成合并/关闭，4 个 Issue 关闭，仅 1 个 PR 待合并。核心进展集中在 **OpenTelemetry 可观测性增强**（#693）、**沙箱安全隔离**（#678）以及 **Docker 环境兼容性修复**（#692）。社区新增 4 个开放 Issue，涉及 AG-UI 协议支持、Anthropic API 原生集成等前沿需求。项目整体健康度良好，维护响应迅速，但配置体验和第三方 API 适配仍是用户痛点。

---

## 2. 版本发布

**无新版本发布**

> 今日无 Release 更新。最新功能已通过主干合并，预计进入下一版本周期。

---

## 3. 项目进展

### 🔧 核心功能落地

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#693](https://github.com/nullclaw/nullclaw/pull/693) | @manelsen | **OTEL 可观测性重大增强**：实现渠道归属追踪（channel/bot_account）、委托调用链路追踪（delegation tracing）、技能加载耗时统计（skill load spans）。关闭关联 Issue #690。 |
| [#678](https://github.com/nullclaw/nullclaw/pull/678) | @shkarlsson | **沙箱安全隔离正式集成**：`security.sandbox` 配置项现实际控制 shell 命令的 OS 级隔离执行，支持 `sandbox_storage` 字段配置存储限制。 |
| [#686](https://github.com/nullclaw/nullclaw/pull/686) | @vernonstinebaker | **A2A 多模态端到端支持**：新增 `a2a.multi_modal` 配置，Agent Card 声明能力、inlineData 转发、vision probe 三合一实现图像输入支持。 |

### 🐛 关键 Bug 修复

| PR | 作者 | 修复内容 |
|:---|:---|:---|
| [#692](https://github.com/nullclaw/nullclaw/pull/692) | @realrubberduckdev | **Docker 兼容性修复**：`cron.zig` 现正确尊重 `NULLCLAW_HOME` 环境变量，解决容器内 `AccessDenied` 错误。关闭 #691。 |
| [#673](https://github.com/nullclaw/nullclaw/pull/673) | @manelsen | **交互式命令挂起修复**：shell 工具执行现应用配置超时，忽略子进程 stdin，防止 `htop`/`btop` 等 TUI 命令导致 gateway 僵死。关闭 #644。 |
| [#676](https://github.com/nullclaw/nullclaw/pull/676) | @manelsen | **"Wife-safe" 防抖机制**：Telegram/Discord/CLI 新增入站消息防抖（默认 3000ms），解决连续多条消息触发多次响应的问题。关闭 #618。 |

### ⚙️ 架构优化

| PR | 作者 | 改进内容 |
|:---|:---|:---|
| [#677](https://github.com/nullclaw/nullclaw/pull/677) | @manelsen | **通道启动统一化**：Telegram 与 Signal 启动流程重构至共享 `ChannelRuntime` 轮询循环，减少代码重复，为后续通道扩展奠基。 |
| [#687](https://github.com/nullclaw/nullclaw/pull/687) | @vernonstinebaker | **网关可配置化**：HTTP body 大小限制（默认 64KB）和请求超时现可通过 `gateway.max_body_size_bytes` / `gateway.request_timeout_seconds` 配置，无需重新编译。 |

**整体评估**：今日合并内容覆盖**可观测性、安全性、多模态、稳定性、开发者体验**五大维度，项目技术债务显著降低，架构向统一通道运行时演进。

---

## 4. 社区热点

### 高关注度议题

| Issue/PR | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#768](https://github.com/nullclaw/nullclaw/issues/768) AG-UI 协议原生支持 | 新开放，0 👍 | **前端集成生态扩张需求**：用户希望 NullClaw 原生支持 AG-UI（Agent-UI）SSE 流协议，对标 DataRobot、CopilotKit 等平台。诉求背后是 NullClaw 作为后端 agent 框架，需降低与现代化前端集成的门槛。与现有 `/a2a` 端点并列，显示社区对多协议网关的强烈需求。 |
| [#767](https://github.com/nullclaw/nullclaw/issues/767) Anthropic API 原生支持 | 新开放，0 👍 | **第三方 LLM 适配痛点**：用户无法使 TRANSLATOR Agent 配合原生 Anthropic API key 工作，持续返回空响应。反映文档缺失或配置路径不直观，Anthropic 作为主流提供商，原生支持优先级应提升。 |
| [#618](https://github.com/nullclaw/nullclaw/issues/618) [已关闭] | 1 评论，创意标题 | **真实场景驱动的产品优化**："wife safe solution" 标题引发共鸣，实际解决多消息连续发送场景下的用户体验问题，已快速落地为 #676。 |

**趋势判断**：社区正从"能用"向"好用、易集成"演进，前端协议适配（AG-UI/A2A）和多云 LLM 支持是下一竞争焦点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#765](https://github.com/nullclaw/nullclaw/issues/765) | **开放** | `onboard --interactive` 生成畸形 `config.json`（内容挤压、无换行），严重影响配置可读性和手动编辑 | ❌ 暂无 |
| 🟡 **中** | [#766](https://github.com/nullclaw/nullclaw/issues/766) | **开放** | 自定义 OpenAI-compatible provider 在 base_url 不支持 `/chat/completions` 时 404，缺乏优雅降级 | ❌ 暂无 |
| 🟢 **低** | [#691](https://github.com/nullclaw/nullclaw/issues/691) | ✅ **已修复** | `cron.zig` 硬编码路径导致 Docker `AccessDenied` | [#692](https://github.com/nullclaw/nullclaw/pull/692) |
| 🟢 **低** | [#644](https://github.com/nullclaw/nullclaw/issues/644) | ✅ **已修复** | 交互式命令（htop/btop）导致 gateway 僵死，需 `kill -9` | [#673](https://github.com/nullclaw/nullclaw/pull/673) |

**稳定性评估**：遗留僵死和权限问题已根治，但**配置生成质量**（#765）和**第三方 API 适配弹性**（#766）成为新的稳定性风险点，建议优先处理。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **AG-UI 协议原生端点** | [#768](https://github.com/nullclaw/nullclaw/issues/768) | 高（已有 `/a2a` 端点参考实现，SSE 流模式与现有架构兼容） | ⭐⭐⭐⭐☆ **高** |
| **Anthropic API 原生支持** | [#767](https://github.com/nullclaw/nullclaw/issues/767) | 高（provider 路由层已有自定义 URL 支持，需文档/配置优化） | ⭐⭐⭐⭐☆ **高** |
| **OpenTelemetry 增强** | [#690](https://github.com/nullclaw/nullclaw/issues/690) | 已完成 | ✅ **已交付** |
| **消息流防抖响应** | [#618](https://github.com/nullclaw/nullclaw/issues/618) | 已完成 | ✅ **已交付** |

**路线图信号**：
- **协议网关多元化**：A2A（已支持）→ AG-UI（请求中）→ 潜在 MCP（Model Context Protocol），NullClaw 正定位为"协议无关的 agent 后端"
- **观测性深化**：OTel 基础已夯实，下一步可能是结构化日志导出、成本追踪（token 用量计费）
- **多云 LLM 策略**：从"OpenAI-compatible 兼容层"向"原生一等公民提供商"演进

---

## 7. 用户反馈摘要

### 😤 痛点与摩擦

> *"I made one for my wife, but she sends like 4 messages at once... The bot reacts to each message individually"* — @ats-bcon, [#618](https://github.com/nullclaw/nullclaw/issues/618)

**真实场景**：终端用户（非技术背景）的自然交互习惯与 agent 的"逐条响应"设计冲突，已催生防抖功能。

> *"I cannot make it work to configure NC to work with a native Anthropic api_key... I always get 'Model returned an empty response'"* — @ats-bcon, [#767](https://github.com/nullclaw/nullclaw/issues/767)

**配置黑洞**：TRANSLATOR Agent 的 Anthropic 适配存在文档或代码路径问题，用户反复试错无果。

> *"the generated configuration file... has bad formatting — all content is squashed together"* — @dadapapapa, [#765](https://github.com/nullclaw/nullclaw/issues/765)

**开发者体验**：CLI 工具的输出质量影响第一印象，配置可读性是运维友好度的基础。

### ✅ 满意与认可

- Docker 环境修复（#692）响应迅速，从报告到合并约 2 周
- "Wife-safe" 等人性化功能标签显示社区氛围友好

---

## 8. 待处理积压

| 类型 | 条目 | 等待时间 | 风险说明 |
|:---|:---|:---|:---|
| **PR 待合并** | [#675](https://github.com/nullclaw/nullclaw/pull/675) gemini-cli ACP 握手对齐 | 14 天 | Gemini CLI 0.34 兼容性修复，影响 Google 系模型接入，建议尽快 review 避免协议漂移 |
| **Issue 无响应** | [#765](https://github.com/nullclaw/nullclaw/issues/765) 配置生成畸形 | 1 天（新） | 虽为新报告，但涉及核心 onboarding 流程，建议 48h 内响应 |
| **Issue 无响应** | [#766](https://github.com/nullclaw/nullclaw/issues/766) 自定义 provider 404 | 1 天（新） | 与 #767 可能相关，需评估是否为同一根因（provider 路由层） |

---

## 附录：快速链接

| 资源 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/nullclaw/nullclaw |
| 今日开放 Issues | [#768](https://github.com/nullclaw/nullclaw/issues/768), [#767](https://github.com/nullclaw/nullclaw/issues/767), [#766](https://github.com/nullclaw/nullclaw/issues/766), [#765](https://github.com/nullclaw/nullclaw/issues/765) |
| 待合并 PR | [#675](https://github.com/nullclaw/nullclaw/pull/675) |
| 关键已合并 PR | [#693](https://github.com/nullclaw/nullclaw/pull/693), [#678](https://github.com/nullclaw/nullclaw/pull/678), [#692](https://github.com/nullclaw/nullclaw/pull/692), [#673](https://github.com/nullclaw/nullclaw/pull/673) |

---

*本日报基于 GitHub 公开数据生成，如需深度分析特定技术决策或社区治理议题，请联系项目维护者。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-05

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**：24小时内 43 个 PR 更新（31 个待合并）、6 个 Issues 活跃，显示核心团队与社区贡献者处于密集迭代期。Engine V2 相关 Bug 成为焦点——`AGENT_AUTO_APPROVE_TOOLS` 环境变量失效问题已被定位到具体提交，同时生产环境的 Routine 工具禁用问题（#1996）暴露了新引擎的稳定性风险。值得关注的是，两名新贡献者（793383996、madschristensen99）同日提交多个 XL 级 PR，显示项目吸引力上升，但代码审查压力随之增加。整体健康度：**活跃但需关注 Engine V2 稳定性债务**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#2011](https://github.com/nearai/ironclaw/issues/2011) | serrrfirat | ✅ 已关闭 | **Engine V2 修复**：`mission_create` 动作表面暴露问题修复，关闭关联 Issue |
| [#1912](https://github.com/nearai/ironclaw/pull/1912) | hanakannzashi | ✅ 已关闭 | NEAR AI MCP 环境变量派生方案被 [#2009](https://github.com/nearai/ironclaw/pull/2009) 替代，演进为持久化 MCP 服务器启动方案 |
| [#2016](https://github.com/nearai/ironclaw/pull/2016) | madschristensen99 | ❌ 已关闭 | `proof_of_claw` ZK 证明模块被 [#2021](https://github.com/nearai/ironclaw/pull/2021) 取代，整合为 0G IronClaw 集成方案 |
| [#2020](https://github.com/nearai/ironclaw/pull/2020), [#2022](https://github.com/nearai/ironclaw/pull/2022) | 793383996 | ❌ 已关闭 | Agent/Workspace 并发一致性修复，经迭代后由 [#2024](https://github.com/nearai/ironclaw/pull/2024) 接替 |

**整体推进**：Engine V2 的动作暴露机制得到修复；MCP 集成从"运行时派生"升级为"启动时持久化"；ZK/可验证计算方向出现明确的技术选型收敛（转向 0G 集成）。Workspace 核心存储层的并发安全正在攻坚。

---

## 4. 社区热点

### 高讨论度议题

| 议题 | 类型 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#1738](https://github.com/nearai/ironclaw/pull/1738) Routine Agent Review | PR | XL 级，多 scope 覆盖 | **"Routine 结果如何回到 Agent 认知循环"**——这是个人 AI 助手的核心体验缺口。当前 Routine 执行是"黑盒"，用户希望 Agent 能主动感知任务完成状态并继续对话 |
| [#1937](https://github.com/nearai/ironclaw/pull/1937) Structured Collections | PR | XL 级，28 次测试部署验证 | **"让 Agent 拥有结构化记忆而非碎片化文档"**——"Add milk to grocery list" 场景的经典难题，社区用大量真实部署数据支撑需求紧迫性 |
| [#1736](https://github.com/nearai/ironclaw/pull/1736) Commitments System | PR | XL 级，纯 SKILL.md 实现 | **"承诺追踪作为个人 AI 的核心技能"**——9 个 SKILL 文件构建完整意图-承诺-提醒闭环，展示 IronClaw "技能即代码"哲学的实践深度 |
| [#1996](https://github.com/nearai/ironclaw/issues/1996) PROD Routine 工具禁用 | Issue | 生产故障标签 | **Engine V2 稳定性信任危机**——生产环境 Routine 执行时工具被静默禁用，直接影响用户任务完成率 |

**诉求洞察**：社区正从"工具调用框架"向"有记忆、有承诺、有闭环的个人 AI 助手"演进，但 Engine V2 的稳定性债务可能阻碍这一转型。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 生产故障** | [#1996](https://github.com/nearai/ironclaw/issues/1996) | PROD 环境 Routine 执行时工具被禁用，Agent 报告 "Tools Disabled" | 🟡 开放，待诊断 | 无 |
| 🔴 **P0 - 回归** | [#2010](https://github.com/nearai/ironclaw/issues/2010) | `AGENT_AUTO_APPROVE_TOOLS=true` 在 `ENGINE_V2=true` 时失效 | 🟡 已定位至 commit `4c9a985b` (#1557) | 无 |
| 🟡 **P1 - 安全** | [#1591](https://github.com/nearai/ironclaw/pull/1591) | 审批流程 TOCTOU 竞态条件 + 错误处理加固 | 🟡 PR 开放中 | #1591 |
| 🟡 **P1 - 数据一致性** | [#2024](https://github.com/nearai/ironclaw/pull/2024) | Workspace compaction 与 append 并发锁范围优化 | 🟡 新 PR，替代 #2020/#2022 | #2024 |

**风险评估**：Engine V2 的"工具禁用"和"自动审批失效"两大问题均指向**配置/权限系统在 V2 代码路径的覆盖不完整**。建议维护者优先审计 V2 与 V1 的环境变量兼容矩阵。

---

## 6. 功能请求与路线图信号

| Issue | 提议者 | 核心提案 | 路线图相关性 | 实现概率评估 |
|:---|:---|:---|:---|:---|
| [#2023](https://github.com/nearai/ironclaw/issues/2023) Kubernetes Runtime | craisis | Docker 沙箱替代方案，支持 K8s 原生隔离 | **高** - 企业部署刚需 | 中（需架构评审） |
| [#2018](https://github.com/nearai/ironclaw/issues/2018) DID-based A2A 编排 | salem221094 | 默认启用 Agent 间通信，WASM 隔离 + 去中心化身份 | **高** - 与 #1734 Workspace 共享、#1736 Commitments 形成协同 | 中高（技术方向契合） |
| [#2017](https://github.com/nearai/ironclaw/issues/2017) 确定性 SOP 引擎 | salem221094 | 结构化工作流的确定性执行引擎（审计/部署场景） | **中** - 与现有 Routine 系统存在功能重叠需厘清 | 中（需产品定义） |

**信号解读**：salem221094 连续提交的两个 Feature Request（#2017/#2018）显示**企业级 Agent 编排**正成为社区焦点——从"个人助手"向"团队/组织级 AI 工作流"跃迁。这与 #1734（Workspace 成员与跨空间共享）、#1736（承诺追踪）形成明确的产品演进向量。

---

## 7. 用户反馈摘要

> 提炼自 Issues 描述与评论

| 主题 | 用户原声/场景 | 痛点/满意度 |
|:---|:---|:---|
| **Engine V2 迁移摩擦** | "AGENT_AUTO_APPROVE_TOOLS=true is silently ignored" | 🔴 环境变量配置在 V2 失效，静默忽略比报错更危险 |
| **Routine 可靠性** | "routine run itself fails because tools are disabled" | 🔴 生产环境任务执行中断，直接影响用户信任 |
| **记忆碎片化** | "agent either creates a new document every time... or corrupts it" | 🔴 结构化数据管理是普遍痛点，#1937 的 28 次测试部署验证需求真实性 |
| **个人助理闭环** | "Add milk to the grocery list" → 需要承诺追踪 | 🟢 #1736 的纯 SKILL 实现展示框架扩展性，用户认可"无需改 Rust 代码"的设计哲学 |
| **企业部署障碍** | "Docker-in-Docker on Kubernetes is operationally fragile" | 🔴 云原生部署路径缺失，阻碍非桌面场景采用 |

---

## 8. 待处理积压

> 长期活跃但尚未合并的关键 PR，提醒维护者关注

| PR | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#1734](https://github.com/nearai/ironclaw/pull/1734) First-class Workspace Entities | 2026-03-29 (7天) | XL 级 + High Risk，涉及 DB 模式迁移与权限模型重构 | 需要核心维护者深度 review，与 #2018 DID-based 编排存在架构协同需对齐 |
| [#1666](https://github.com/nearai/ironclaw/pull/1666) WeChat Channel | 2026-03-26 (10天) | WIP 标签，WASM 渠道的实现复杂度 | 评估是否需拆分 QR 登录、消息收发等子模块逐步合并 |
| [#1819](https://github.com/nearai/ironclaw/pull/1819) Image Generation 修复 | 2026-03-31 (5天) | 涉及外部 API（NearAI STG）URL 规范化 | 快速 review 窗口，影响用户体验的直接修复 |
| [#1594](https://github.com/nearai/ironclaw/pull/1594) CLAWHUB_ENABLED 开关 | 2026-03-23 (13天) | 企业合规需求的配置灵活性 | 低风险，建议优先合并以减少企业部署阻力 |

---

*日报生成时间：2026-04-05 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-05

## 1. 今日速览

LobsterAI 今日呈现**高活跃度开发态势**：24小时内产生 **15 个 PR**（14 个待审、1 个已关闭）和 **6 个新 Issue**，全部来自社区贡献。核心亮点是 **MaoQianTu** 系统性提交了 5 个"防数据丢失"UX 修复（覆盖 Agent 创建、设置、MCP 配置、会话草稿等场景），形成完整的体验改进矩阵。同时 **kay0594** 聚焦 Skills 模块的稳定性修复，**linlihua** 处理定时任务幽灵会话等深层数据一致性问题。社区出现多 Agent 协作架构的功能请求，显示用户对高级编排能力的期待。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已关闭 PR
| PR | 作者 | 说明 |
|:---|:---|:---|
| [#797](https://github.com/netease-youdao/LobsterAI/pull/797) | noransu | **修复 OpenClaw 网关启动失败**：解决 `openclaw-weixin` 插件未安装时配置同步导致的无限重启循环，提升部署健壮性 |

### 待审核心 PR 进展方向

| 模块 | PR 数量 | 关键进展 |
|:---|:---|:---|
| **UX 防丢失体系** | 5 | MaoQianTu 构建完整确认对话框机制，覆盖 Agent/MCP/草稿三大场景 |
| **IM 多实例** | 1 | [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) 钉钉/飞书/QQ 重复校验，防止同名实例和机器人重复添加 |
| **Skills 体验** | 3 | 安装后刷新、重复文件夹拦截、滚动优化 |
| **定时任务** | 1 | [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) 修复删除后幽灵会话问题，补全数据清理链路 |
| **跨平台** | 1 | [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) macOS 快捷键显示 ⌘ 而非 Ctrl |

**整体评估**：项目今日在**数据一致性**（定时任务、IM 校验）和**用户体验防护**（防误操作）两个维度取得实质性进展。

---

## 4. 社区热点

### 最受关注 Issue
| Issue | 热度指标 | 核心诉求 |
|:---|:---|:---|
| [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | 1 评论，功能愿景型 | **多 Agent 协作架构**：用户明确对比阿里 HiClaw，提出"Agent 小组/房间"概念，要求 main agent 按需调度子 agent，并支持**单 Agent 绑定独立模型** |

**诉求分析**：该 Issue 反映社区对 LobsterAI 从"单 Agent 工具"向"多 Agent 编排平台"演进的期待。用户认可 4.3 版本"同 IM 渠道多实例"的实用性，但希望架构层面向 AutoGen/Multi-Agent 方向延伸。这是**路线图级信号**，建议维护者评估与现有 Cowork 模式的融合路径。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) | 会话切换时草稿因 300ms debounce 丢失 | [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476) | ✅ 已提交 |
| 🔴 **高** | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) | 重新编辑历史消息直接覆盖未发送内容 | [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477) | ✅ 已提交 |
| 🟡 **中** | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468)-[#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) | 3 个弹窗关闭无确认导致配置丢失（Agent 创建/设置/MCP） | [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473)-[#1475](https://github.com/netease-youdao/LobsterAI/pull/1475) | ✅ 已提交 |
| 🟡 **中** | [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)（关联） | 定时任务删除后重启出现幽灵会话 | [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | ⏳ 待审 |
| 🟢 **低** | [#886](https://github.com/netease-youdao/LobsterAI/issues/886)（关联） | CopyButton 组件卸载后定时器内存泄漏 | [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) | ⏳ 待审 |

**稳定性评估**：今日 Bug 报告高度集中在**"静默数据丢失"**场景，显示 UX 防护机制存在系统性缺口。好消息是**全部有配套 Fix PR**，MaoQianTu 的单日 5 PR 组合拳形成完整解决方案。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性信号 | 纳入预测 |
|:---|:---|:---|:---|
| **单 Agent 绑定独立模型** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | 4.3 已实现"同 IM 渠道多实例"，模型隔离是架构自然延伸 | 🔶 高概率（下一版本） |
| **Agent 小组/房间协作模式** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) | 需架构级设计，涉及调度器、状态共享、权限模型 | 🔷 中概率（需 RFC） |
| **MCP 服务器管理增强** | PR [#1466](https://github.com/netease-youdao/LobsterAI/pull/1466) | 滚动问题已修复，配置体验持续优化中 | ✅ 持续迭代 |

---

## 7. 用户反馈摘要

### 痛点（来自 Issue 描述）
- **"静默丢失"焦虑**：用户在 Agent/MCP/草稿场景多次遭遇配置消失，"没有任何确认提示"成为高频抱怨词
- **多实例管理混乱**：同名实例、重复机器人导致难以区分（正由 [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) 解决）
- **跨平台体验割裂**：macOS 用户看到 Ctrl 快捷键提示感到困惑（[#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) 修复中）

### 认可
- **4.3 多实例功能**被明确点赞为"很实用"
- **交互体验优于竞品**：用户主动对比阿里 HiClaw，认为 LobsterAI "交互体验确实更好"

### 使用场景洞察
- 用户正在将 LobsterAI 用于**生产级多机器人管理**（钉钉/飞书/QQ 多实例）
- 存在**复杂工作流编排需求**，期待从"工具集合"进化为"团队协作平台"

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 风险说明 |
|:---|:---|:---|:---|
| Issue | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) 多 Agent 协作 | 2026-04-04 | 路线图级需求，需官方回应避免用户流失至竞品 |
| PR | [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) 长标题截断 | 2026-04-04 | 简单 UI 修复，建议快速合并 |
| PR | [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) 定时任务幽灵会话 | 2026-04-04 | 数据一致性问题，影响用户信任度 |

**维护者行动建议**：今日 PR 积压 14 个，建议优先审核 MaoQianTu 的 5 个 UX 修复（已形成完整方案，合并后可显著提升体验评分），其次处理定时任务数据清理问题。

---

*日报生成时间：2026-04-05 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-05

## 1. 今日速览

Moltis 社区今日呈现**高活跃状态**，过去24小时内新增 **6 个 Issues** 和 **2 个 PR**，无关闭记录。值得关注的是，Issues 全部集中在 **4月4日** 密集提交，显示社区反馈呈现脉冲式增长。核心痛点集中在**模型配置管理**（多模型添加、自动检测）和**平台兼容性**（macOS OAuth、服务商可用性探测）两大领域。PR 方面，Streamable HTTP MCP 服务器支持和 Telegram 代理功能正在推进，但尚未进入合并阶段。整体项目处于**需求收集活跃、代码交付待加速**的阶段。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并/关闭的 PR**，2 个待合并 PR 处于开放状态：

| PR | 作者 | 功能 | 状态 |
|:---|:---|:---|:---|
| [#555](https://github.com/moltis-org/moltis/pull/555) | volfco | 新增 Streamable HTTP MCP 服务器支持 | 🟡 待合并 |
| [#550](https://github.com/moltis-org/moltis/pull/550) | BLumia | Telegram 频道级代理支持 | 🟡 待合并 |

**进展评估**：PR #555 关闭 [#294](https://github.com/moltis-org/moltis/issues/294)，标志着 MCP 协议支持的重要扩展；PR #550 响应社区代理需求。两者均处于代码审查阶段，尚未形成实际交付。

---

## 4. 社区热点

### 讨论活跃度排名

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 1 | [#549](https://github.com/moltis-org/moltis/issues/549) macOS OAuth 流程失败 | 1 | **平台原生体验**：桌面端用户无法完成 Codex 认证，阻断核心工作流 |
| 2 | [#554](https://github.com/moltis-org/moltis/issues/554) 服务商探测误报"不可用" | 1 | **可靠性信任**：API 密钥有效却被判定失效，损害用户信心 |

### 诉求分析
- **#549** 反映 macOS 桌面端与 Web 认证流程的架构差异，可能涉及 Electron/原生桥接问题
- **#554** 指向健康检查逻辑缺陷，"Service unavailable" 为模糊错误，需区分网络层/认证层/服务端故障

---

## 5. Bug 与稳定性

今日报告 **5 个 Bug**，按严重程度排序：

| 严重度 | Issue | 描述 | Fix PR |
|:---|:---|:---|:---:|
| 🔴 **高** | [#549](https://github.com/moltis-org/moltis/issues/549) | macOS 桌面端 OAuth 完全阻断 | 无 |
| 🔴 **高** | [#552](https://github.com/moltis-org/moltis/issues/552) | 单服务商多模型添加被强制限制为单选 | 无 |
| 🟡 **中** | [#554](https://github.com/moltis-org/moltis/issues/554) | 服务商探测误报不可用 | 无 |
| 🟡 **中** | [#551](https://github.com/moltis-org/moltis/issues/551) | "Detect all models" 实际仅探测已有模型，命名误导 | 无 |
| 🟡 **中** | [#556](https://github.com/moltis-org/moltis/issues/556) | Mistral/Qwen 视觉能力未被识别 | 无 |

**稳定性信号**：同一用户（bsarkisov）连续提交 4 个 Issues，集中在**模型管理 UX** 和**服务商集成**层面，提示该用户路径存在系统性摩擦。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 与现有 PR 关联 | 纳入可能性 |
|:---|:---|:---|:---:|
| [#553](https://github.com/moltis-org/moltis/issues/553) |  per-agent 回环/超时设置 | 无直接关联 | ⭐⭐⭐ 高 |
| [#550](https://github.com/moltis-org/moltis/pull/550) 已实现 | Telegram 频道级代理 | 已提交 PR | ⭐⭐⭐⭐⭐ 确定 |

**路线图判断**：
- **Agent 级网络配置**（#553）与现有代理 PR 形成互补，可能推动更细粒度的网络策略架构
- **视觉模型支持扩展**（#556）需更新模型能力矩阵，属低复杂度维护任务

---

## 7. 用户反馈摘要

### 核心痛点（来自 Issues 原文提炼）

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **"被迫选择单一模型"** | #552 | 用户期望同一服务商配置多个模型（如 GPT-4 + GPT-3.5），UI 强制单选 |
| **"Detect all models 名不副实"** | #551 | 功能预期为发现新模型，实际行为是验证已有配置，存在认知落差 |
| **OAuth 流程平台碎片化** | #549 | macOS 用户遭遇与 Web 端不一致的认证体验 |
| **视觉能力识别滞后** | #556 | 新模型已支持多模态，但 Moltis 未更新能力标记 |

### 满意度信号
- 用户主动勾选 "latest version" 比例高（5/6），显示用户群体更新意愿强
- 预检清单完成度高，社区 issue 质量良好

---

## 8. 待处理积压

**今日无长期未响应项**，但需关注以下**新提交高优先级项**的快速响应：

| Issue | 创建时间 | 风险 |
|:---|:---|:---|
| [#549](https://github.com/moltis-org/moltis/issues/549) macOS OAuth | 2026-04-03 | 平台核心功能阻断，已超 24 小时无维护者响应 |
| [#552](https://github.com/moltis-org/moltis/issues/552) 多模型限制 | 2026-04-04 | 同一用户高频反馈，可能引发更多 +1 |

**维护者行动建议**：优先响应 bsarkisov 的系列反馈，该用户展现出深度使用场景，其痛点可能代表更广泛的企业级用户需求。

---

*日报生成时间：2026-04-05 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-05

## 1. 今日速览

CoPaw 社区今日保持**高活跃度**，24小时内产生 **22 条 Issues 更新**（18 条新开/活跃，4 条关闭）和 **15 条 PR 更新**（7 条待合并，8 条已合并/关闭）。项目处于**密集迭代期**，核心团队与社区贡献者协同推进：一方面快速修复 CPU 空转、飞书换行渲染等关键 Bug；另一方面积极扩展渠道生态（WhatsApp、OneBot v11/QQ 集成）和交互体验优化。值得关注的是，今日有 **4 位首次贡献者**提交 PR 并被合并，社区参与门槛持续降低。整体健康度良好，但待合并 PR 积压需关注。

---

## 2. 版本发布

**无新版本发布**

今日无正式版本发布，但版本号 PR [#2942](https://github.com/agentscope-ai/CoPaw/pull/2942) 已合并，将版本提升至 **1.0.2b1**，预示补丁版本即将发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（8 条）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#2942](https://github.com/agentscope-ai/CoPaw/pull/2942) | zhijianma | 版本号提升至 1.0.2b1 | 为补丁版本发布做准备 |
| [#2938](https://github.com/agentscope-ai/CoPaw/pull/2938) | bowenliang123 | **限制模型发现功能仅对本地模型提供商可用** | 减少云提供商用户的误操作，提升 UX |
| [#2940](https://github.com/agentscope-ai/CoPaw/pull/2940) ⭐ | uiYzzi | **新增 `[SPLIT]` 消息分隔符支持**，允许单次响应发送多条独立消息 | 重大交互体验升级，回应社区高频诉求 |
| [#2870](https://github.com/agentscope-ai/CoPaw/pull/2870) ⭐ | solarhell | **新增 OneBot v11 渠道**，支持 NapCat/go-cqhttp/Lagrange QQ 集成 | 扩展中文 IM 生态，覆盖数亿 QQ 用户 |
| [#2889](https://github.com/agentscope-ai/CoPaw/pull/2889) | pan-x-c | CoPaw Local 页面支持更新 Llama.cpp；修复 `MAX_REPETITION_THRESHOLD=20000` 解析错误 | 本地模型用户体验关键修复 |
| [#2928](https://github.com/agentscope-ai/CoPaw/pull/2928) → 关闭 | joe2643 | WhatsApp 渠道（被 #2946 替代） | 代码审查迭代，质量把控 |
| [#2804](https://github.com/agentscope-ai/CoPaw/pull/2804) | ltzu929 | 修复定时任务表格深色模式渲染问题 | UI 细节打磨 |
| [#2920](https://github.com/agentscope-ai/CoPaw/pull/2920) | venturevd | 自动化修复 #2459（.gitignore） | 社区工具链探索 |

**今日里程碑**：渠道生态大幅扩展（QQ/OneBot 正式落地、WhatsApp 即将合并），多消息交互机制创新落地，本地模型工作流闭环完成。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 深度分析 |
|:---|:---|:---|:---|
| [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) **空闲时 CPU 占用 100%** | 7 | 修复 AnyIO 取消处理导致的忙等待循环 | **生产环境阻塞性问题**。用户发现事件循环在空闲时陷入 busy polling，单核满载。这是底层异步框架与 CoPaw 任务调度交互的深层 Bug，需核心团队介入 |
| [#2923](https://github.com/agentscope-ai/CoPaw/issues/2923) **飞书消息换行渲染错误** | 7 | 修复 `_collapse_embedded_newlines` 错误剥离换行符 | 作者已**修正根因分析**（从 `_build_post_content` 转向 `shell.py`），社区协作典范。PR [#2924](https://github.com/agentscope-ai/CoPaw/pull/2924) 已开待审 |

### 高参与度 PR

| PR | 状态 | 亮点 |
|:---|:---|:---|
| [#2946](https://github.com/agentscope-ai/CoPaw/pull/2946) WhatsApp 渠道 | 🟡 待合并 | 首次贡献者 joe2643 在 #2928 被关闭后**快速响应审查意见**，提交干净替代方案，展现社区成长健康度 |

**背后诉求洞察**：企业级部署稳定性（CPU 问题）、中文办公场景深度适配（飞书）、IM 渠道全覆盖（WhatsApp/QQ）是用户最迫切的三大需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) | 空闲时 100% CPU（AnyIO 忙循环） | 无 | **待修复，需紧急关注** |
| 🔴 **Critical** | [#2947](https://github.com/agentscope-ai/CoPaw/issues/2947) | Gemma4 模型陷入无限工具调用循环 | 无 | 待调查，可能为模型格式兼容性问题 |
| 🟡 **High** | [#2923](https://github.com/agentscope-ai/CoPaw/issues/2923) | 飞书消息换行丢失 | [#2924](https://github.com/agentscope-ai/CoPaw/pull/2924) | 待合并 |
| 🟡 **High** | [#2943](https://github.com/agentscope-ai/CoPaw/issues/2943) | `copaw init` 在 Windows Python 3.13 上挂起 | 无 | 安全警告提示后无响应，安装阻断 |
| 🟡 **High** | [#2934](https://github.com/agentscope-ai/CoPaw/issues/2934) | Browser use 进程泄漏（Chromium 未关闭） | 无 | 资源泄漏，长期运行风险 |
| 🟡 **High** | [#2930](https://github.com/agentscope-ai/CoPaw/issues/2930) | 本地模型工具调用解析失败 + 配置持久化丢失 | 无 | 本地模型用户核心痛点 |
| 🟢 **Medium** | [#2931](https://github.com/agentscope-ai/CoPaw/issues/2931) / [#2932](https://github.com/agentscope-ai/CoPaw/issues/2932) | 新建 Agent 技能配置全选 Bug | 无 | UI 状态管理问题，#2932 已关闭但 #2931 仍开 |
| 🟢 **Medium** | [#2948](https://github.com/agentscope-ai/CoPaw/issues/2948) | 音频生成后无下载按钮 | 无 | 功能缺失，体验断层 |

**已修复**：#2919（火山引擎自定义提供商 TypeError）、#2935（Docker LLM 连接问题）、#2932（技能全选 Bug，但 #2931 重复报告）

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 需求描述 | 纳入可能性 |
|:---|:---|:---|:---|
| [#2940](https://github.com/agentscope-ai/CoPaw/pull/2940) ✅ **已合并** | 交互创新 | `[SPLIT]` 多消息分隔符 | **1.0.2 已纳入** |
| [#2922](https://github.com/agentscope-ai/CoPaw/issues/2922) | 架构升级 | Claude Code 式 Agent Team 协作 | 高优先级，需架构设计 |
| [#2939](https://github.com/agentscope-ai/CoPaw/issues/2939) / [#2940](https://github.com/agentscope-ai/CoPaw/pull/2940) | 交互优化 | 多消息支持/消息分割 | **已实现** |
| [#2937](https://github.com/agentscope-ai/CoPaw/issues/2937) | 会话管理 | 多智能体协作同一会话窗口合并 | 中高，与 #2936 关联 |
| [#2936](https://github.com/agentscope-ai/CoPaw/issues/2936) | 会话管理 | 会话置顶功能 | 中，UX 优化 |
| [#2945](https://github.com/agentscope-ai/CoPaw/issues/2945) | 交互优化 | GUI 批准命令改为按钮（非输入） | 高，易实现 |
| [#2946](https://github.com/agentscope-ai/CoPaw/pull/2946) 🟡 | 渠道扩展 | WhatsApp 支持 | **即将合并** |
| [#2929](https://github.com/agentscope-ai/CoPaw/issues/2929) | 文件管理 | WebUI 类文件系统记忆文件夹 | 中，需产品设计 |
| [#2933](https://github.com/agentscope-ai/CoPaw/issues/2933) | 平台适配 | Windows 执行 shell 命令隐藏 CMD 窗口 | 中，Windows 用户体验 |

**路线图信号**：Agent Team 协作（#2922）是用户最期待的差异化功能，可能成为 1.1.x 的核心卖点；会话管理优化（合并窗口、置顶）形成需求集群，建议打包为"会话 2.0"迭代。

---

## 7. 用户反馈摘要

### 💬 真实痛点（来自 Issue 评论）

> *"现在多 agent 的互相交很生硬，存在信息不对称的情况，无法对其上下文"* — [#2922](https://github.com/agentscope-ai/CoPaw/issues/2922)

> *"现在必须得输入，而且经常输入无效，重复让我输入"* — [#2945](https://github.com/agentscope-ai/CoPaw/issues/2945) 关于批准命令输入

> *"同一智能体每次参与协作就会单独生成一个对话窗口，如果该智能体参与了10次协作，就会产生10个对话窗口"* — [#2937](https://github.com/agentscope-ai/CoPaw/issues/2937)

### ✅ 满意场景

- 飞书/钉钉渠道深度用户认可 CoPaw 的办公集成能力
- 本地模型支持（Llama.cpp/Ollama）被频繁使用
- 安装脚本 `install.sh` 降低入门门槛（但升级路径不清晰 [#2925](https://github.com/agentscope-ai/CoPaw/issues/2925)）

### ❌ 阻塞体验

| 场景 | 问题 | Issue |
|:---|:---|:---|
| Windows 初次安装 | `copaw init` 挂起无响应 | [#2943](https://github.com/agentscope-ai/CoPaw/issues/2943) |
| 第三方代理模型 | 连接测试失败但 `cc switch` 可用 | [#2941](https://github.com/agentscope-ai/CoPaw/issues/2941) |
| 生产部署 | 空闲 CPU 100% 无法长期运行 | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) |
| 配置管理 | `config.json` 重启后重置 | [#2930](https://github.com/agentscope-ai/CoPaw/issues/2930) |

---

## 8. 待处理积压

### 长期未响应的高价值 PR

| PR | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#2523](https://github.com/agentscope-ai/CoPaw/pull/2523) | 2026-03-30 (6天) | 待合并 | 跨平台一致性改进，低冲突风险 |
| [#2453](https://github.com/agentscope-ai/CoPaw/pull/2453) | 2026-03-28 (8天) | 待合并 | 心跳确认机制，稳定性相关 |
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) | 2026-03-28 (8天) | 待合并 | MiniMax OAuth 认证，渠道扩展 |
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | 2026-03-10 (26天) | 待合并 | OpenRouter 提供商，社区呼声高 |
| [#2432](https://github.com/agentscope-ai/CoPaw/pull/2432) | 2026-03-27 (9天) | 待合并 | 聊天历史显示优化，UX 改进 |

### 需维护者介入的 Issue

- [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) CPU 100% — 需核心团队诊断 AnyIO 事件循环
- [#2947](https://github.com/agentscope-ai/CoPaw/issues/2947) Gemma4 无限工具调用 — 需模型兼容性测试
- [#2941](https://github.com/agentscope-ai/CoPaw/issues/2941) 第三方代理连接测试失败 — 需明确诊断逻辑与 `cc switch` 的差异

---

**日报生成时间**：2026-04-05  
**数据来源**：GitHub API / agentscope-ai/CoPaw  
**下次建议关注**：1.0.2 正式版发布、WhatsApp PR 合并、CPU 占用问题修复进展

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*