# OpenClaw 生态日报 2026-04-15

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-15 00:27 UTC

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

2026-04-15 OpenClaw 项目动态日报
今日速览
- 项目活跃度极高：过去24小时产生500条Issues更新（新开/活跃415，已关闭85）和500条PR更新（待合并309，已合并/关闭191），表明社区参与度和开发迭代速度处于高位。
- 新版本发布稳定：v2026.4.14及其beta版本均已发布，主要聚焦GPT-5系列模型优化、频道提供商问题修复及核心代码性能重构，整体质量提升明显。
- 社区讨论热烈：多个长期悬而未决的问题获得新进展或用户持续反馈，尤其在身份验证、内存泄漏、插件兼容性方面引发广泛讨论。

版本发布
- v2026.4.14: openclaw 2026.4.14
  OpenClaw `2026.4.14` 是一个广泛的品质发布，专注于模型提供商，并对 GPT-5 系列和频道提供商问题进行显式改进。此外，我们通过重构底层核心代码库来提高整体性能。
- v2026.4.14-beta.1: openclaw 2026.4.14-beta.1
  此版本主要修复了 Telegram 论坛主题名称在代理上下文、提示元数据和插件钩子元数据中的显示问题，并替换了 marked.js 为 markdown-it 以防止恶意构造的 Markdown 攻击。

项目进展
- PR #66877: Telegram/documents: sanitize binary payloads to prevent prompt input inflation
  该 PR 解决了 Telegram 上传 .epub/.mobi 文件可能泄露原始二进制内容到提示上下文的问题，增强了安全性。
- PR #66882: fix(wizard): guard text-input prompts against undefined clack results
  此 PR 修复了在 onboarding 过程中因 @clack/prompts 返回 undefined 导致的 TypeError 崩溃问题，提升了配置向导的稳定性。
- PR #66613: fix(gateway): fail loud on all attachment parse failures
  该 PR 修复了 gateway 在处理附件解析失败时静默丢弃的问题，现在会明确报告错误，便于排查。

社区热点
- Issue #49971 [OPEN] RFC: Native Agent Identity & Trust Verification for OpenClaw
  作者 MoltyCel 提出的关于原生代理身份与信任验证的建议引发了 86 条评论，显示出社区对安全性和身份验证机制的强烈关注。
- Issue #66674 [OPEN] [bug] [Bug]: openai-codex/gpt-5.4 direct CLI infer returns HTML rawError but surfaces as "DNS lookup failed" on 2026.4.14
  用户 firstyanko 报告在升级到 2026.4.14 后，openai-codex/gpt-5.4 直接 CLI 推断失败，原始错误为 HTML 但 OpenClaw 显示为 DNS 查找失败，已有 6 条评论和 3 个点赞。
- Issue #63510 [OPEN] 2026.4.9: completion cache generation crashes on missing qa/scenarios/index.md
  用户 jarvisclawdio 报告在更新到 2026.4.9 后，completion cache 生成崩溃，缺少 qa/scenarios/index.md 文件，已有 10 条评论和 10 个点赞。

Bug 与稳定性
- Issue #45064 [OPEN] [bug, bug:crash] [Bug]: 2026.3.12 Memory Leak - OOM on basic commands (gateway status, doctor)
  用户 binbin1213 报告在升级到 2026.3.12 后，OpenClaw 在基本命令上出现 JavaScript heap out of memory 导致崩溃，已有 29 条评论。
- Issue #53959 [OPEN] [bug, regression] [Bug]: openai-codex/gpt-5.3-codex does not execute any tools (exec, MCP, web search) after update to 2026.3.23-2
  用户 molt-jafg 报告在更新到 2026.3.23-2 后，openai-codex/gpt-5.3-codex 停止执行任何工具，已有 17 条评论和 3 个点赞。
- Issue #66601 [OPEN] OpenClaw v2026.4.14 causes repeated context engine errors and breaks usability
  用户 lamkan0210 报告在升级到 OpenClaw v2026.4.14 后，出现重复的运行时错误，系统变得无法使用，已有 7 条评论。

功能请求与路线图信号
- Issue #66474 [OPEN] [Feature]: Support Agent Discovery Protocol (/.well-known/agent-discovery.json)
  用户 walkojas-boop 提议支持 Agent Discovery Protocol，以便代理能够自动发现域内服务，已有 5 条评论。
- Issue #45740 [OPEN] gh-issues skill: untrusted issue body injected directly into sub-agent prompt
  用户 zients 指出 gh-issues 技能直接将未经信任的 GitHub issue 主体注入子代理提示中，存在安全风险，已有 10 条评论。

用户反馈摘要
- 用户普遍反映在升级到最新版本后出现了各种回归问题，尤其是在工具执行、内存管理和配置向导方面。
- 对于新功能的需求主要集中在代理发现协议的支持以及对敏感数据的脱敏处理，显示出用户对安全性和易用性的高度关注。
- 部分用户对新版本的性能提升表示满意，但也有用户抱怨某些功能在新版本中不如预期。

待处理积压
- Issue #31708 [OPEN] [bug, stale, bug:behavior] [Bug]: 5x API costs due to ineffective prompt caching (Re-file of #23715)
  此问题自 2026-03-02 提出以来，一直未得到有效解决，涉及 API 成本高昂的问题，需要重点关注。
- Issue #34400 [OPEN] [stale] Feature: memory_search should support recursive subdirectory search (memory/**/*.md)
  此功能请求自 2026-03-04 提出，希望 memory_search 支持递归子目录搜索，目前仍处于悬而未决状态。

---

## 横向生态对比

好的，作为专注于 AI 智能体生态的分析师，我将基于您提供的数据生成一份横向对比分析报告。

---

## 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-04-15)

### 1. **生态全景**

当前个人 AI 助手与自主智能体开源生态呈现出“一超多强”的格局，OpenClaw 凭借其强大的功能、广泛的集成和社区规模持续领跑。与此同时，NanoBot、Moltis 等项目在特定领域（如多模态、Rust 后端）展现出强劲活力，而新兴项目如 CoPaw、QwenPaw 则代表了从单体向分布式、企业级架构演进的趋势。整个生态正经历从单一 LLM 助手向多功能、可扩展、高可靠的智能体平台快速迭代，社区普遍关注稳定性、多模型支持和易用性提升。

### 2. **各项目活跃度对比**

| 项目名称 | Issues 数 | PR 数 | Release 情况 | 健康度评估 |
| :------- | :-------- | :---- | :----------- | :--------- |
| OpenClaw | 500 | 500 | v2026.4.14, v2026.4.14-beta.1 | 极高活跃，高质量迭代 |
| NanoBot | 41 | 65 | v0.1.5.post1 | 高度活跃，功能快速推进 |
| PicoClaw | 8 | 30 | Nightly Build v0.2.6-nightly.20260414 | 稳定开发，WebUI 为重点 |
| NanoClaw | 0 | 21 (15 merged) | 无新版本 | 高效协作，架构升级中 |
| NullClaw | 5 | 5 | 无新版本 | 稳步优化，功能落地 |
| IronClaw | 50 | 50 | 无新版本 | 高度活跃，集成与修复并重 |
| LobsterAI | 24 (13 merged) | 2 | 无新版本 | 性能与体验优化为主 |
| TinyClaw | 0 | 0 | 无活动 | 静默期 |
| Moltis | 12 (9 closed) | 13 (8 merged) | 20260414.02, 20260413.06 | 高度活跃，安全与维护性强 |
| CoPaw/QwenPaw | 46 | 46 | v1.1.1, v1.1.1-beta.2 | 极高活跃，版本迁移与功能探索 |
| ZeptoClaw | 1 | 0 | 无新版本 | 自动化维护，架构讨论热 |
| EasyClaw | 0 | 0 | v1.7.10 (文档更新) | 低活跃，维护阶段 |

**健康度评估说明：**
*   **极高活跃：** 每日 Issue/PR 数量均超过 40，且有稳定发布节奏，社区参与度高，问题解决速度快。
*   **高度活跃：** 每日 Issue/PR 数量在 10-40 之间，有明确的功能或架构改进方向，社区反馈积极。
*   **稳定开发/稳步优化：** 开发节奏稳健，重点在于修复已知问题、优化现有功能和用户体验，或有明确的路线图指引。
*   **高效协作/自动化维护：** 工程实践成熟，依赖项管理、CI/CD 完善，但新功能开发可能处于规划或探索阶段。
*   **静默期/低活跃：** 无明显新动态，可能处于版本间准备期、维护阶段或发展缓慢。

### 3. **OpenClaw 在生态中的定位**

*   **优势：** OpenClaw 无疑是生态中的核心参照和领导者。其优势体现在：
    1.  **社区规模与影响力：** Issue 和 PR 数量均为今日最高，表明其拥有最庞大的用户和开发者基础。
    2.  **功能广度与深度：** 支持 GPT-5 系列等前沿模型，覆盖 Telegram、Slack 等多种通信渠道，并提供丰富的技能系统。
    3.  **企业级特性：** 对身份验证、信任验证、安全性（如防止 prompt 注入攻击）的关注，使其更适合企业级部署。
    4.  **成熟度：** 长期悬而未决的问题较少，版本发布稳定，整体质量提升明显。
*   **技术路线差异：** OpenClaw 采用 Node.js 生态，构建了一个庞大而复杂的技能系统和网关架构，强调灵活性和可扩展性。相比之下，Moltis 采用 Rust，更注重性能和安全性；NanoBot 则聚焦于轻量化和自我管理能力。
*   **社区规模对比：** OpenClaw 的社区规模远超其他项目。例如，其 Issue #49971 引发了 86 条评论，而其他项目的热门 Issue 评论数多在个位数或十几位。这表明 OpenClaw 在吸引和维持社区参与方面具有显著优势。

### 4. **共同关注的技术方向**

多个项目共同涌现出以下需求，反映了行业趋势：
*   **多模型支持与互操作性：** 不仅是 OpenAI，还包括本地 Ollama、Google Gemini、Anthropic、阿里云等各类 LLM 提供商的支持（OpenClaw #66474, NanoClaw #1774, Moltis #521, IronClaw #80）。
*   **Agent 发现与身份验证：** OpenClaw 的 Issue #49971 提出原生 Agent Identity & Trust Verification，CoPaw 的用户也期望更安全的代理交互方式，这指向了智能体生态中信任和安全机制的标准化需求。
*   **工具链与 MCP 兼容性：** 各项目中频繁出现关于 MCP（Model Context Protocol）工具兼容性的 Bug 报告和改进请求（OpenClaw #45740, Moltis #716, LobsterAI #1662），表明 MCP 已成为智能体调用外部工具和服务的关键协议，但其标准化和兼容性仍需完善。
*   **持久化记忆能力：** NanoClaw 的 /add-mem0-graph skill 提案，PicoClaw 提及集成外部记忆系统，都指向了 AI 助手向“持续学习个体”演进的趋势，长期记忆是其迈向真正自主智能体的关键一步。
*   **WebUI 与可视化体验：** PicoClaw 的 Issue #806 明确提出 WebUI 支持，CoPaw 的用户也希望 Agent 统计面板、文件操作回滚等功能，反映出非技术用户和开发者 alike 对降低使用门槛、提升交互直观性的强烈诉求。

### 5. **差异化定位分析**

| 项目名称 | 功能侧重 | 目标用户 | 技术架构 |
| :------- | :------- | :------- | :------- |
| **OpenClaw** | 全能型 AI 助手，技能丰富，企业级集成 | 广泛用户群体，企业开发者，高级用户 | Node.js, 复杂技能系统 |
| **NanoBot** | 轻量级、自管理、多通道集成 | 开发者，希望快速部署和定制的用户 | Python, 模块化设计 |
| **PicoClaw** | 嵌入式/边缘设备 AI，Agent 系统 | IoT 开发者，硬件爱好者 | C/C++, 资源受限环境优化 |
| **NanoClaw** | WhatsApp 深度集成，多模态，事件驱动架构 | WhatsApp 重度用户，开发者 | JavaScript/TypeScript, 容器化 |
| **NullClaw** | 简洁 CLI/GUI，企业级功能（cron, 微信） | 企业 IT 人员，CLI 偏好者 | Go, 注重稳定性和配置管理 |
| **IronClaw** | Web 网关集成，多 LLM 支持，沙箱安全 | Web 应用开发者，企业级部署 | TypeScript/JavaScript, Docker 沙箱 |
| **LobsterAI** | OpenClaw 封装，企业级 UI/UX 优化 | 企业终端用户，希望简化 OpenClaw 使用的团队 | Electron, OpenClaw Runtime |
| **TinyClaw** | 极简主义，核心功能 | 追求极简的开发者或用户 | 未知，静默期 |
| **Moltis** | 高性能后端，Rust 生态，安全沙箱 | 对性能和安全性要求高的开发者 | Rust, 沙箱隔离 |
| **CoPaw/QwenPaw** | 多 Agent 协同，Mission Mode，企业级控制台 | 企业级 AI 解决方案提供者，复杂任务场景 | 未知，正在向 QwenPaw 迁移 |
| **ZeptoClaw** | 轻量级，并发优化 | 追求极致轻量和响应的开发者 | 未知，架构讨论中 |
| **EasyClaw** | macOS 友好，文档与支持 | macOS 用户，非技术用户 | RivonClaw (基于 OpenClaw) |

### 6. **社区热度与成熟度**

*   **快速迭代阶段：** OpenClaw、NanoBot、IronClaw、Moltis、CoPaw/QwenPaw 均表现出极高的社区热度，Issue 和 PR 数量众多，Bug 修复和功能开发并行，处于快速迭代和演进阶段。这些项目通常有明确的功能路线图，并且社区反馈能迅速影响开发优先级。
*   **质量巩固阶段：** PicoClaw、NullClaw、LobsterAI 则更侧重于已有功能的优化、用户体验的打磨以及关键 Bug 的修复，迭代速度相对平稳。它们可能已经度过了最活跃的功能探索期，现在更注重稳定性和产品化。
*   **维护/静默阶段：** TinyClaw 和 EasyClaw 目前处于相对较低的活动状态，前者可能是功能开发放缓或进入维护期，后者则更像是针对特定平台（macOS）的维护和支持项目。

### 7. **值得关注的趋势信号**

*   **从单一助手到分布式智能体平台：** CoPaw 的 Mission Mode 和 NanoClaw 的事件驱动架构重构是这一趋势的典型代表。未来的 AI 应用将不再是单个代理，而是由多个协作代理组成的复杂系统，CoPaw 的“多 Agent 路由”、“全局会话”等需求正是对此的呼应。
*   **开放生态与互操作性成为核心竞争力：** 多项目对多模型提供商、MCP 协议的支持，以及对 Agent Discovery Protocol 的呼吁（OpenClaw #66474），表明构建开放、可扩展的生态比封闭的专有方案更具吸引力。开发者需要能够轻松接入不同 LLM、工具和服务的平台。
*   **安全性与身份验证机制日益重要：** OpenClaw 对原生 Agent 身份与信任验证的关注，以及 Moltis 对沙箱元数据隔离的强化，反映出随着 AI 智能体自主性增强，如何确保其行为可控、可信、不泄露敏感信息将成为关键挑战。
*   **企业级功能需求显性化：** cron 任务、定时任务统计、Docker 镜像、企业微信集成等功能在各项目中均有体现（NullClaw, IronClaw, CoPaw, LobsterAI），说明开源 AI 助手正在从个人玩具向生产就绪的企业级工具演进，满足组织内部的自动化、协作和合规需求。
*   **用户体验（UX）优化永无止境：** 无论是 WebUI 的可用性（PicoClaw #806）、错误提示的清晰度（NullClaw #815）、安装包大小优化（LobsterAI #1685）还是无障碍访问支持（LobsterAI #1682），都显示出开发者对用户友好度的持续追求。降低上手门槛、提升交互流畅性是保持项目生命力的根本。

**对 AI 智能体开发者的参考价值：**
1.  **选择合适的技术栈：** 根据项目目标和资源，Node.js（OpenClaw）适合快速构建复杂应用，Rust（Moltis）适合高性能和安全性要求高的场景，Go（NullClaw）适合简洁高效的工具。
2.  **拥抱开放生态：** 优先支持多模型、MCP 等开放标准，有助于扩大项目的适用范围和用户群。
3.  **重视安全与身份：** 在设计初期就考虑智能体的身份验证和行为边界，避免未来成为安全隐患。
4.  **关注企业级特性：** 如果目标是商业化或企业内部部署，cron、任务调度、容器化、审计日志等企业级功能是不可或缺的。
5.  **持续优化用户体验：** 即使是命令行工具，清晰的错误信息、合理的默认值和良好的文档也是成功的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 - 2026年4月15日**

---

### 1. **今日速览**
NanoBot 在2026-04-15保持高度活跃状态，过去24小时内处理了65个PR和41个Issue，合并37个PR并关闭28个Issue。项目于今日发布v0.1.5.post1版本，标志着系统在自我管理方面的重大进展，新增80个PR合并和25名新贡献者。整体社区参与度较高，功能迭代与问题修复并行推进。

---

### 2. **版本发布**
**v0.1.5.post1 正式发布**  
本次更新聚焦于系统的自管理能力，核心改进包括自动上下文压缩机制，防止因Token超限导致请求失败。该功能在达到阈值时自动触发压缩，提升系统鲁棒性。无破坏性变更，但建议用户检查本地配置是否启用相关压缩策略以确保最佳性能。[Release Link](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post1)

---

### 3. **项目进展**
- **PR #3149**: 在`/status`命令中显示当前活跃任务数量（如“⚡ Tasks: 3 active”），增强用户监控能力。
- **PR #3150**: 添加LLM请求重试终止通知，避免静默失败，提升交互透明度。
- **PR #3153 & #3154**: 分别修复了通道配置字典解析错误和工具参数标准化问题，改善对严格提供商（如OpenRouter）的兼容性。
- **PR #3155**: 为钉钉（DingTalk）通道引入HTTP操作超时机制，防止无限等待。
- **PR #2938**: 支持API端文件上传（Base64与multipart/form-data），扩展视觉与文档处理能力。
这些进展显著增强了系统的可用性、可观测性与跨平台稳定性。

---

### 4. **社区热点**
- **Issue #1300**: Matrix通道无法启动，持续被关注（9条评论），反映第三方集成体验待优化。
- **Issue #3095**: 请求支持Anthropic API的自定义端点配置，显示用户对非标准LLM服务的适配需求上升。
- **PR #3030**: Web App与Mobile API提案获广泛期待，预计将推动多端协同生态发展。
- **Issue #2505**: 自定义provider缺失extraHeaders支持，引发关于灵活性的讨论。
上述议题集中体现开发者对**开放集成能力**与**企业级定制支持**的强烈诉求。

---

### 5. **Bug 与稳定性**
| 严重程度 | Issue/PR编号 | 问题描述 | 状态 |
|--------|-------------|--------|------|
| 高     | #2760 (CLOSED) | 重试放大风险：应用层与SDK层双重重试导致上游负载激增 | 已修复 |
| 高     | #2570 (OPEN)   | Ollama本地模型连接失败，网关未监听端口18790 | 进行中 |
| 中     | #2828 (CLOSED) | DuckDuckGo搜索致系统挂起 | 已解决 |
| 中     | #3143 (OPEN)   | LLM返回非法messages参数错误，频率升高 | 待排查 |

其中#2570影响本地部署体验，需优先跟进；其余高危问题均已闭环。

---

### 6. **功能请求与路线图信号**
- **定时任务静默模式** (#3066, CLOSED): 用户希望cron任务不反馈结果，已纳入实现。
- **模型分阶段重载** (#3156): 心跳机制支持评估/执行双模型切换，预示架构向精细化资源调度演进。
- **跨通道消息持久化** (#3145): 确保消息工具发送的内容被正确记录，强化会话连续性。
- **AgentHiFive集成试点** (#3144): 探索通过外部代理增强MCP工具安全访问，或为未来插件体系铺垫。
多项请求与PR表明下一版本将加强**自动化运维**与**多模态交互一致性**。

---

### 7. **用户反馈摘要**
- **正面反馈**: 中文Windows安装教程（#2714）获点赞，显示社区对新手的支持有效；v0.1.5.post1的自动压缩广受好评。
- **负面痛点**: 
  - 钉钉/Matrix等通道稳定性不足，频繁断连或超时；
  - 缺乏任务状态可视化，用户难以判断bot是否卡死；
  - 自定义provider配置复杂，尤其涉及headers与认证时出错率高；
  - 定时任务结果干扰对话流，期望更细粒度控制。
用户普遍呼吁提升**透明性**与**配置灵活性**。

---

### 8. **待处理积压**
- **长期未决 Issue #1300**: Matrix通道问题自2026-02-27提出，持续21天未彻底解决，影响部分企业通信场景，建议分配专项资源处理。
- **PR #2521 (SelfTool)**: 自进化工具框架已开发近一月，虽功能完整但尚未合并，可能涉及安全风险审查，需维护者明确决策路径。
- **Issue #2505**: 自定义header缺失问题存在近两个月，阻碍API网关扩展，建议结合#3095统一规划custom provider增强方案。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报（2026-04-15）**

---

### 1. **今日速览**
过去24小时，PicoClaw 项目保持高度活跃状态：共处理 Issue 更新 8 条、PR 30 条，并发布一次 nightly build。社区贡献者持续修复关键 bug 并推进 Web UI 与 Agent 系统优化，整体开发节奏稳健。项目在稳定性与用户体验方面均有显著进展。

---

### 2. **版本发布**

#### 🚀 Nightly Build: `v0.2.6-nightly.20260414.f82fe5a2`
- **类型**：自动化构建，非稳定版本
- **更新范围**：基于 `main` 分支的最新提交（对比 v0.2.6）
- **注意**：此版本为每日夜间构建，可能包含未充分测试的变更，建议用于测试环境或开发用途。

> Full Changelog: [https://github.com/sipeed/picoclaw/compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

---

### 3. **项目进展**

#### ✅ 已合并/关闭的重要 PR

| PR # | 标题 | 类型 | 说明 |
|------|------|------|------|
| #2523 | feat(web): show disabled chat reasons in composer | Enhancement | 改进 WebUI 中聊天禁用时的用户提示，提升可解释性 |
| #2514 | feat(launcher): add host overrides for launcher and gateway | Bug Fix / Enhancement | 支持 launcher/gateway 绑定指定主机地址，解决 OpenWrt 双栈绑定问题（#2488） |
| #2521 | chore: update WeChat QR code image | Chore | 更新微信二维码图片资源 |
| #2518 | docs: update wechat qrcode | Documentation | 文档更新，同步微信联系方式 |
| #2516 | chore(ci): disable scheduled sync-rebase trigger | CI | 取消定时 rebase 触发器，避免自动合并干扰 |

这些 PR 表明项目在 **网络配置兼容性**、**WebUI 交互体验** 和 **CI/CD 流程治理** 方面有实质性优化。

---

### 4. **社区热点**

#### 🔥 讨论最活跃的 Issue / PR

##### 🔹 Issue #806: Add webUI support (Refactoring now)
- **热度**：8👍 + 8 条评论
- **核心诉求**：推动专用 WebUI 开发以降低新手使用门槛
- **背景**：当前 TUI 对非技术用户不友好，亟需浏览器端入口
- **关联 PR**：多个 WebUI 相关 PR（如 #2523、#2430）正围绕该需求展开实现

> [Issue #806](https://github.com/sipeed/picoclaw/issues/806)

##### 🔹 PR #2525: fix(agent): recover after image-input-unsupported failures
- **影响**：解决图像输入不支持模型导致的会话“卡死”问题
- **意义**：提升 Agent 系统的健壮性与容错能力
- **技术亮点**：清理持久化历史中的无效图像消息，防止后续文本失败

> [PR #2525](https://github.com/sipeed/picoclaw/pull/2525)

---

### 5. **Bug 与稳定性**

按严重程度排序：

| 等级 | Issue / PR | 问题描述 | 是否有 Fix |
|------|-----------|----------|------------|
| ⚠️ High | #2468: Scheduled Task Fails to Execute | Cron 任务因权限限制无法执行 | ✅ 已有 PR #2474 修复 |
| ⚠️ High | #2488: TCP connections fail on OpenWrt 23.05 (ARM64) | Gateway/launcher 监听但不接受连接 | ✅ 已有 PR #2514 修复 |
| ⚠️ Medium | #2513: gateway start abnormal | 网关启动异常，进程存在但无响应 | 待跟进 |
| ⚠️ Medium | #2519: Force setting workspace to default directory | 工具频繁访问非工作区路径导致安全风险 | 建议纳入配置策略 |

> 关键修复：Cron 任务与会话隔离（PR #2474）、OpenWrt 绑定问题（PR #2514）已上线。

---

### 6. **功能请求与路线图信号**

| 请求来源 | 功能方向 | 是否已有进展 |
|---------|--------|-------------|
| #806 (Feature) | WebUI 重构与正式支持 | ✅ 多项 WebUI UX 改进 PR 进行中 |
| #2515 (Feature) | 集成 mem0/supermemory 等外部记忆系统 | ⏳ 提出但未分配 |
| #2148 (Roadmap) | Agent Discovery → Delegation Phase 2 | ⏳ 规划阶段，等待实现 |

**趋势判断**：  
项目正加速向 **多模态 Agent 架构** 和 **低代码/可视化交互** 演进。WebUI 作为战略重点已被多次提及，预计将在下个版本中逐步落地。

---

### 7. **用户反馈摘要**

从 Issues 中提取的真实痛点：

- **非技术用户使用障碍**：“WebUI 输入框被禁用，完全无法对话”（#2354）
- **Cron 可靠性不足**：“定时任务静默失败，错过重要提醒”（#2468）
- **安全边界模糊**：“工具不断尝试读写 `/tmp` 等非工作区路径”（#2519）
- **跨平台兼容性差**：OpenWrt ARM64 上网络通信异常（#2488）

**满意度观察**：  
开发者响应迅速，多数问题在 1–3 天内获得修复 PR；用户对 Agent 功能的期待较高，但对稳定性仍有顾虑。

---

### 8. **待处理积压**

| ID | 类型 | 创建时间 | 状态 | 风险等级 | 备注 |
|----|------|----------|------|----------|------|
| #806 | Feature | 2026-02-26 | OPEN | High | 长期未闭环，涉及核心 UX 升级 |
| #2148 | Roadmap | 2026-03-29 | OPEN | Medium | Agent 体系第二阶段，需明确优先级 |
| #2354 | Bug | 2026-04-05 | CLOSED | Low | 虽已关闭，但反映 WebUI 基础功能缺陷 |

> 建议维护者优先评估 #806 的可行性路径，避免愿景与交付脱节。

--- 

*数据来源：GitHub API · 统计周期：2026-04-14 00:00 ~ 2026-04-14 23:59 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026-04-15）**

---

### 1. **今日速览**  
过去24小时内，NanoClaw 项目整体保持高活跃度，共处理了 **21 个 Pull Request**，其中 **15 条已合并/关闭，6 条待合并**，显示出高效的协作节奏。核心方向聚焦于 **构建系统迁移（npm → pnpm）、多模型支持（OpenAI兼容 API）、事件驱动架构升级及容器化配置优化**。无新版本发布，但多个重要功能迭代正在并行推进，项目处于快速演进阶段。

---

### 2. **版本发布**  
*无新版本发布*

---

### 3. **项目进展**  

#### **已合并/关闭的重要 PR**
| PR # | 类型 | 贡献者 | 摘要 |
|------|------|--------|------|
| [#1775](https://github.com/qwibitai/nanoclaw/pull/1775) | Sync Fork | golddavid | 同步上游仓库分支，维护代码一致性 |
| [#772](https://github.com/qwibitai/nanoclaw/pull/772) | Skill | glifocat | 新增 `pdf-reader` 技能：支持 WhatsApp PDF 附件解析与嵌入引用 |
| [#840](https://github.com/qwibitai/nanoclaw/pull/840) | Fix | glifocat | 修复 IPC-only 消息模式下任务容器未及时关闭的问题 |
| [#770](https://github.com/qwibitai/nanoclaw/pull/770) | Skill | glifocat | 添加图像识别技能，增强 WhatsApp 消息中图片理解能力 |
| [#756](https://github.com/qwibitai/nanoclaw/pull/756) | Fix | glifocat | 注册时自动在群组目录生成 CLAUDE.md 模板文件 |
| [#754](https://github.com/qwibitai/nanoclaw/pull/754) | Fix | glifocat | 全局更新所有群组 CLAUDE.md 中的助手名称 |
| [#751](https://github.com/qwibitai/nanoclaw/pull/751) | Fix | glifocat | 修复私信注册场景下的 JID 错误问题 |
| [#745](https://github.com/qwibitai/nanoclaw/pull/745) | Fix | glifocat | 配对码认证时写入本地文件供即时访问 |
| [#708](https://github.com/qwibitai/nanoclaw/pull/708) | Feature | glifocat | 新增 `update_task` 工具，支持任务原地修改 |
| [#1595](https://github.com/qwibitai/nanoclaw/pull/1595) | Doc | glifocat | 引入 Contributor Covenant 行为准则 |
| [#1388](https://github.com/qwibitai/nanoclaw/pull/1388) | Docs | glifocat | 更新文档并链接至官方 docs.nanoclaw.dev 门户 |
| [#962](https://github.com/qwibitai/nanoclaw/pull/962) | Fix | glifocat | 将 .env 中的 MCP 环境变量透传给容器 |
| [#1773](https://github.com/qwibitai/nanoclaw/pull/1773) | Fix | cmhenry | 实现“陈旧会话自愈”机制，提升稳定性 |
| [#1770](https://github.com/qwibitai/nanoclaw/pull/1770) | Fix | meeech | 使 setup.sh 在沙盒环境中安全运行（使用本地 npm 缓存） |

> **关键进展总结**：  
> - **基础设施现代化**：通过 [#1771] 完成从 npm 到 pnpm 的迁移准备，优化依赖管理与构建性能。  
> - **多模态能力扩展**：PDF 阅读、图像理解等 WhatsApp 相关技能持续落地，强化终端用户交互体验。  
> - **运行时可靠性增强**：会话自愈、容器生命周期管理、MCP 配置透传等修复显著提升系统健壮性。

---

### 4. **社区热点**  

目前尚无活跃 Issue 或高互动 PR（评论数均为 `undefined`），所有 PR 均于创建当日更新，表明讨论集中在技术实现层面，尚未进入深度社区反馈阶段。但以下 **开放 PR** 值得关注其潜在影响力：

- **[#1772] Event-Driven Architecture Expansion** ([链接](https://github.com/qwibitai/nanoclaw/pull/1772))：提出将 NanoClaw 升级为事件驱动的多层运行时架构，引入 Executor Pool、Typed Events、Agent Lifecycle Management 等六大能力层，标志着项目从单体助手向分布式智能体平台跃迁的关键一步。
- **[#1774] OpenAI Model Support + Token Tracking** ([链接](https://github.com/qwibitai/nanoclaw/pull/1774))：允许绕过 Claude Agent SDK 直接调用 OpenAI 兼容 API（包括本地 Ollama），降低推理成本并支持 GPT-5.4 nano/mini 等新型号，满足用户对低成本高性能 LLM 的需求。
- **[#1256] /add-mem0-graph Persistent Memory Skill** ([链接](https://github.com/qwibitai/nanoclaw/pull/1256))：集成 mem0 库，结合 Qdrant + Neo4j 实现图增强持久记忆，零额外容器开销，为长期记忆智能体打下基础。

> 这些提案共同指向 **开放生态兼容性、成本效率与认知持久性** 三大未来方向。

---

### 5. **Bug 与稳定性**  

过去24小时未报告新的生产环境 Bug 或崩溃问题。已关闭的修复类 PR 主要集中于：
- 容器生命周期控制（[#840], [#1773]）
- 认证流程缺陷（[#751], [#745]）
- 配置透传遗漏（[#962]）

当前系统稳定性良好，无高危漏洞或回归风险。

---

### 6. **功能请求与路线图信号**  

从近期高频提交可见以下功能优先级：
- **多模型统一接入层**：[#1774] 和 [#1776]（OpenCode Provider）表明团队正构建抽象化的 AgentProvider 接口，支持 OpenAI、Claude、本地 Ollama、OpenCode 等多种后端。
- **事件驱动架构重构**：[#1772] 是明确的技术路线升级信号，预计将影响任务调度、消息路由、状态管理等核心模块。
- **持久化与记忆能力**：[#1256] 提出通过 mem0 集成实现结构化长期记忆，呼应 AI 助手向“持续学习个体”演进的趋势。

> 推测下一版本重点将围绕 **多模型互操作、事件总线重构、记忆增强** 展开。

---

### 7. **用户反馈摘要**  

由于 Issues 数量为零且 PR 评论数据缺失，无法提取典型用户反馈。但从近期技能开发（如 PDF 阅读器、图像 Vision）可推断：
- **积极方面**：用户对 WhatsApp 集成深度功能（如附件解析、视觉理解）表示欢迎，体现移动端场景适配价值。
- **隐忧点**：部分用户可能面临复杂部署环境下的配置问题（如 MCP 变量透传失败），需更完善的沙盒/云部署指南。

建议后续加强用户场景调研，尤其在 **本地部署、混合云、低资源环境** 中的可用性反馈收集。

---

### 8. **待处理积压**  

暂无长期未响应的高优先级 Issue。但以下 **开放 PR** 建议加速审查以释放技术债务：

- **[#1771] Migrate v2 from npm to pnpm**：涉及包管理器切换，影响 CI/CD 与开发者体验，应尽早合并。
- **[#1772] Event-Driven Architecture**：技术跨度大，建议组织内部评审并拆分任务。
- **[#1256] /add-mem0-graph skill**：若 mem0 生态成熟，此技能具备成为核心竞争力的潜力，需评估实现完整性。

---

**结论**：NanoClaw 今日展现出强劲的工程推进力，聚焦架构升级与生态扩展，无重大负面信号。建议维护者优先处理高价值开放 PR，并筹备即将到来的 v2 版本发布。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-04-15）**

---

### 1. **今日速览**
过去24小时，NullClaw 社区活跃度保持稳定，共处理 5 个 Issue 和 5 个 Pull Request。项目在功能增强与稳定性修复方面均有推进，尤其体现在 Web 搜索、子代理调度及微信登录集成等关键模块。暂无新版本发布，开发重心集中于问题修复与新特性落地。整体项目健康度良好，维护响应及时。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日无已合并或关闭的 Pull Requests，所有 PR 仍处于待合并状态。最新提交的 PR 集中在以下方向：
- **cron 子代理引擎**（PR #783）：引入基于数据库的定时任务调度系统，支持历史记录、JSON 输出与安全加固，显著提升自动化能力。
- **微信扫码登录支持**（PR #818）：新增 Weixin 通道集成，实现终端二维码生成与交互式登录流程，满足企业级社交账号接入需求。
- **Web 搜索配置指引优化**（PR #815）：当搜索提供方未配置时，提供更清晰的错误提示与设置指导，降低用户上手门槛。
- **命名子代理生命周期修复**（PR #814）：解决 Provider 对象生命周期管理缺陷，提升 CLI 命令稳定性。
- **模型目录刷新预算调整**（PR #813）：避免因输出截断导致的索引获取失败，增强 onboard 流程可靠性。

这些改进表明项目正稳步向更健壮、易用、多场景适配的方向演进。

> 🔗 [查看所有 PRs](https://github.com/nullclaw/nullclaw/pulls)

---

### 4. **社区热点**
今日最活跃的议题为 **#812 HTTP 请求功能失效**，用户反馈互联网搜索功能无法正常工作，尽管尝试了多种示例仍无果，引发对兼容性与配置正确性的关注。该问题尚未关联到具体 PR，但已有两条评论讨论潜在原因。

另一热点是 **#449 Docker Hub 官方镜像请求**，用户呼吁提供标准化的容器化部署方案，包括 docker-compose 模板。此需求持续发酵，反映社区对生产友好型交付方式的强烈期待。

此外，**PR #818（WeChat 登录）** 虽刚提交，但因直接回应 Issue #816 和 #817 中的功能诉求，获得潜在用户高度关注，成为今日最受期待的新特性之一。

> 💬 [查看活跃 Issue #812](https://github.com/nullclaw/nullclaw/issues/812)  
> 🐳 [查看 Docker 镜像请求 #449](https://github.com/nullclaw/nullclaw/issues/449)  
> 📦 [查看 WeChat PR #818](https://github.com/nullclaw/nullclaw/pull/818)

---

### 5. **Bug 与稳定性**
- **Issue #812**: HTTP 请求功能异常，影响互联网搜索能力。目前尚无明确复现路径或根本原因定位，但已标记为 `bug`，优先级中等。
- **PR #815 与 #814** 针对此前存在的 Web 搜索配置缺失和子代理内存管理问题提供了修复，预计将缓解相关运行时错误。

当前无高危崩溃报告，稳定性维护工作持续推进中。

---

### 6. **功能请求与路线图信号**
- **Docker 官方镜像发布**（#449）成为长期呼声，结合当前容器化趋势，极有可能纳入 Q2 发布计划。
- **WeChat 扫码登录**（#816/#817）已由 PR #818 实现，标志该项目正式进入多平台身份认证生态布局阶段。
- **Zig 语言支持咨询**（#820）显示用户对扩展语言栈的兴趣，可能预示未来对 Zig 编译目标的实验性支持规划。

上述需求均得到积极工程响应，表明路线图正在向“降低部署成本”、“增强社交集成”与“提升可观测性”三大方向倾斜。

---

### 7. **用户反馈摘要**
- 用户对 NullClaw 的组织结构和模块化设计表示认可（如提及“very organized”），但在实际使用中发现配置复杂度较高，特别是 Web 搜索依赖外部服务配置。
- 多位用户希望提供更清晰的错误提示和引导文档，尤其在首次部署时。
- 微信登录功能的提出，反映部分用户在企业内网环境中难以使用传统 OAuth 流程的需求，凸显本地化身份方案的重要性。

总体满意度中等偏上，痛点集中于入门门槛与边缘场景支持不足。

---

### 8. **待处理积压**
- **Issue #449（Docker Hub 镜像）**：自 2026-03-12 提出，持续无官方响应。建议维护者评估容器化交付可行性并制定 roadmap。
- **Issue #812（HTTP 请求失效）**：创建时间较短（4月13日），但已引发社区关注，需尽快排查并确认是否为新引入回归问题。

建议优先安排一次专项排查，并考虑设立“新手友好”标签以改善新用户体验。

---

*数据更新时间：2026-04-15 | 来源：GitHub API / 人工整理*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-04-15）**

---

### 1. **今日速览**
IronClaw 在 2026-04-15 保持高度活跃的开发节奏，过去 24 小时内处理了 50 条 Issue 更新与 50 条 PR 动态。项目重点推进通道集成、安全加固及多 LLM 支持等核心能力，同时持续修复生产环境中的稳定性问题。整体状态健康，CI/CD 自动化流程运行正常，无新版本发布。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日共合并/关闭 14 个 Pull Requests，主要进展包括：
- **PR #2434**（已合并）：修复了用户消息在 Web 网关中因异步持久化而丢失的问题，直接关联 Issue #2409，显著提升聊天体验一致性。[链接](https://github.com/nearai/ironclaw/pull/2434)
- **PR #2475**（已合并）：新增 E2E Playwright 测试，验证消息跨页面重载持久化，增强前端可靠性保障。[链接](https://github.com/nearai/ironclaw/pull/2475)
- **PR #2473**（已合并）：修正 Slack OAuth 回调失败问题，统一 nonce 存储的 owner_id 类型，解决认证流程中断缺陷。[链接](https://github.com/nearai/ironclaw/pull/2473)
- **PR #2467**（已合并）：优化 Docker 沙箱检测逻辑，优先尝试 socket 连接而非仅依赖 CLI 二进制存在性，提升容器内部署兼容性。[链接](https://github.com/nearai/ironclaw/pull/2467)

此外，多个 staging-promotion PR（如 #2479、#2478、#2476、#2472）完成自动构建流水线推送，表明主干功能稳定且具备部署条件。

---

### 4. **社区热点**
最活跃的 Issue 集中于集成平台认证机制缺陷：
- **Issue #2229**：Google Sheets OAuth 授权返回 `Error 400 invalid_request`，影响扩展生态可用性，获 7 条评论讨论。[链接](https://github.com/nearai/ironclaw/issues/2229)
- **Issue #2230**：Twitter/X MCP 连接需手动提取浏览器 Cookie，缺乏标准化接入方式，反映第三方渠道集成体验碎片化。[链接](https://github.com/nearai/ironclaw/issues/2230)

PR 方面，**PR #1446**（Aliyun Coding Plan 支持）虽创建较早但持续获得关注，体现中国开发者对本土 AI 服务的需求增长。[链接](https://github.com/nearai/ironclaw/pull/1446)

---

### 5. **Bug 与稳定性**
报告 7 个高优先级 Bug，均源自 staging 环境 QA 测试：
- **P0**：
  - #2409：Web UI 聊天内容消失（已有 fix PR #2434）
  - #2411：Telegram 令牌保存无效（已有 fix PR #2432）
  - #2276：Orchestrator 因 payload 过大崩溃于 nearai_chat（待分析根因）
- **P2**：
  - #2281：定时任务未按预定时间触发（影响调度准确性）
  - #2405/#2410：网关路由错误导致界面循环刷新（Web 通道异常）

所有 P0 问题均已提交对应修复 PR，预计明日进入 staging 验证阶段。

---

### 6. **功能请求与路线图信号**
长期开放的功能需求显示明确演进方向：
- **Multi-provider LLM 支持**（#80）持续被引用，Ollama/Bedrock/Gemini 列为 P2-P3，近期 Aliyun 支持（#1446）印证多厂商战略落地。
- **Agent 高级特性**（#84）：多智能体路由、全局会话等需求推动架构升级，相关并行消息处理 PR（#2429）已合并。
- **插件注册机制**（#101, #120）：Git-based registry 与 OpenClaw 生态对齐，简化技能系统信任模型。

这些信号表明项目正从单一 LLM 绑定向开放、可扩展的智能体平台演进。

---

### 7. **用户反馈摘要**
真实痛点集中在 **集成易用性** 与 **上下文一致性**：
- 用户抱怨“Slack/Telegram 配置后仍无响应”（#1998），揭示文档缺失与错误提示模糊；
- Telegram 内存访问失效（#2259）反映跨端状态同步机制薄弱；
- 多位 QA 人员指出 OAuth 流程阻断日常使用（#2229, #2230），亟需自动化凭证管理方案。

正面反馈较少，主要来自 CI 改进带来的部署信心提升。

---

### 8. **待处理积压**
以下 Issue 超期未闭环，需维护者优先介入：
- **Issue #1997**：Slack App 不可用，阻碍新用户接入（创建于 2026-04-03，超 11 天）[链接](https://github.com/nearai/ironclaw/issues/1997)
- **Issue #76**：Discord 集成完成但无后续更新（创建于 2026-02-14，超 59 天）[链接](https://github.com/nearai/ironclaw/issues/76)

建议分配至下轮 sprint 进行用户体验闭环。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报 - 2026年4月15日**

---

### 1. **今日速览**
LobsterAI 项目在2026年4月14日保持较高活跃度，共处理24个PR（13个已合并）和2个新Issue。团队重点优化了构建性能、UI/UX体验及OpenClaw运行时效率，同时推进了企业级功能集成。整体代码贡献稳定，无新版本发布。

---

### 2. **版本发布**
*无新版本发布*

---

### 3. **项目进展**
- **[CLOSED] #1677**: 优化 OpenClaw gateway 启动速度，修复macOS打包签名问题，冷启动时间从~51s降至~35s。
- **[CLOSED] #1676**: 升级 OpenClaw runtime 至 v2026.4.8，完善会话保活策略并支持Windows网关启动修复。
- **[CLOSED] #1673**: 移除冗余配置检查，显著提升Windows启动性能。
- **[CLOSED] #1672**: 合并社区PR #1356，解决国际化设置页颜色主题名称未翻译的问题。
- **[CLOSED] #1674**: 合并社区PR #1379，统一MCP卡片描述Tooltip为ClampedText组件，改善视觉一致性。

> ✅ 关键进展：构建与运行时性能优化持续推进，用户体验相关Bug集中修复。

---

### 4. **社区热点**
- **#1685 [OPEN]** 减少OpenClaw运行时包体积，移除重复payload与无用依赖，预计节省显著空间。  
  [netease-youdao/LobsterAI PR #1685](https://github.com/netease-youdao/LobsterAI/pull/1685)
- **#1682 [OPEN]** 新增Cowork AI回复朗读功能，基于Web Speech API实现零依赖语音合成。  
  [netease-youdao/LobsterAI PR #1682](https://github.com/netease-youdao/LobsterAI/pull/1682)

> 📌 用户关注点集中于**安装包大小优化**与**无障碍访问支持**（如TTS），反映对轻量化与易用性的双重诉求。

---

### 5. **Bug 与稳定性**
| Issue | 严重程度 | 状态 | 关联PR |
|------|--------|------|-------|
| #1671 `md转word中断提示sse response finish reason: full` | 中 | 新开 | 无 |
| #1662 `非SSE的MCP引擎无法使用` | 高 | 新开 | 无 |

> ⚠️ 两个Issue均无直接Fix PR，需优先排查SSE流控制与MCP协议兼容性逻辑。

---

### 6. **功能请求与路线图信号**
- **多机器人支持（企微）**：PR #1670 提出为企业微信集成多机器人能力，标志平台向企业级协作场景扩展。
- **定时任务统计面板**：PR #1679 新增执行历史数据可视化，预示未来将加强运维监控能力。
- **Agent独立工作目录**：PR #1668 允许每个Agent配置专属工作路径，提升多任务隔离性，符合高级用户定制需求。

> 🔮 下一版本可能聚焦：**企业集成深化**、**任务管理增强**、**运行时轻量化**。

---

### 7. **用户反馈摘要**
- **负面反馈**：
  - 用户报告`md→word`转换中途失败且无明确错误提示（#1671），影响文档导出流程。
  - 非SSE MCP引擎失效（#1662），导致部分第三方工具链断裂。
- **正面反馈**：
  - 朗读功能获积极预期，尤其适合视障或通勤场景用户。
  - 包体积优化被开发者广泛认可，期待后续持续精简。

---

### 8. **待处理积压**
- **#1662 非SSE MCP引擎失效**：自4月14日提出至今无进展，涉及核心通信层兼容性问题，建议指派资深后端开发介入。
- **#1671 md转word异常**：日志显示OpenClaw运行时错误，需结合运行时调试工具定位SSE流处理缺陷。

> ⏳ 维护建议：建立“核心协议兼容性”专项看板，避免类似MCP/SSE问题长期滞留。

--- 

*数据来源：GitHub LobsterAI Repository (2026-04-15 00:00 UTC+8)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 - 2026年4月15日**

---

### 1. **今日速览**
过去24小时，Moltis 项目保持高度活跃状态：共处理了12条 Issues（9个已关闭）和13条 Pull Requests（8个已合并），并发布了两个新版本（20260414.02 和 20260413.06）。社区反馈集中在 Bug 修复与功能增强，尤其是与 MCP、OpenAI/Gemini 集成及安全性相关的改进。整体项目健康度良好，维护响应迅速。

---

### 2. **版本发布**

#### **20260414.02**
- **发布时间**：2026-04-14
- **更新内容**：包含多项关键修复，主要涉及 Slack TLS 支持、WhatsApp 消息解析升级、Docker 容器内 `/proc` 和 `/sys` 元数据隔离等。
- **破坏性变更**：无重大 API 或配置变更。
- **迁移说明**：无需用户操作，建议通过 `moltis upgrade` 获取最新二进制。

#### **20260413.06**
- **发布时间**：2026-04-13
- **更新内容**：聚焦于 GraphQL sessionKey 强制校验、rand crate 升级至 v0.10 以改善随机数生成性能与安全性。
- **迁移说明**：仅需重新构建或拉取镜像即可生效。

> 📌 所有发布均通过自动化 CI/CD 流程完成，未发现已知回归问题。

---

### 3. **项目进展**

今日共 **8 个 PR 被合并**，涵盖以下核心方向：

| PR # | 类型 | 贡献者 | 主要内容 |
|------|------|--------|---------|
| [#708](https://github.com/moltis-org/moltis/pull/708) | fix(graphql) | penso | 强制 sessionKey 为所有聊天操作必填参数，提升多会话隔离安全性 |
| [#707](https://github.com/moltis-org/moltis/pull/707) | fix(slack) | penso | 升级 slack-morphism 至 2.20，启用 TLS 支持，修复 socket mode 连接失败问题 |
| [#706](https://github.com/moltis-org/moltis/pull/706) | fix(sandbox) | penso | 在 Docker/Podman 沙箱中屏蔽 `/proc` 和 `/sys` 敏感元数据，防止信息泄露 |
| [#704](https://github.com/moltis-org/moltis/pull/704) | chore(deps) | dependabot[bot] | 将 rand 从 0.9.2 升级至 0.10.0，提升加密安全性和随机性质量 |
| [#521](https://github.com/moltis-org/moltis/pull/521) | feat(providers) | fortunto2 | 新增 openai-oxide 作为替代 OpenAI 提供者，支持 Chat Completions 和 Responses API |
| [#488](https://github.com/moltis-org/moltis/pull/488) | chore(deps) | fortunto2 | 升级 reqwest 至 0.13，为 openai-oxide 依赖铺路 |
| [#469](https://github.com/moltis-org/moltis/pull/469) | feat(nix) | jmikedupont2 | 添加 Nix Flake 构建支持，实现可复现 Rust 包构建与环境管理 |

这些合并显著增强了系统的**安全性、兼容性、可扩展性**，并推进了对现代 AI 提供商（如 Google/Gemini via OpenRouter）的更好支持。

---

### 4. **社区热点**

最活跃的 Issue 集中在 **MCP 工具兼容性与 OpenAI/Gemini 集成问题**：

- **[#716 开放 BUG]**：用户报告使用 Google/Gemini 通过 OpenRouter 时出现 `"property is not defined"` 错误，源于 tool schema 中数组类型不被支持。此问题已触发两个快速修复 PR（[#717](https://github.com/moltis-org/moltis/pull/717), [#719](https://github.com/moltis-org/moltis/pull/719)），表明社区对多 LLM 平台适配高度关注。
- **[#694 已关闭]**：类似地，Attio MCP 工具的 `not keyword` 缺失导致 schema 被拒绝，同样由上述 PR 修复。
- **[#711 开放]**：请求在 Matrix 中集成 OpenID 认证，反映身份验证需求的增长。

> 🔥 **趋势判断**：用户对跨平台 LLM 支持（尤其是非 OpenAI 生态）和身份认证机制的需求正在上升。

---

### 5. **Bug 与稳定性**

| 严重等级 | Issue # | 问题描述 | 修复状态 |
|----------|--------|---------|----------|
| 高 | [#716](https://github.com/moltis-org/moltis/issues/716) | Google/Gemini via OpenRouter 因 tool schema 类型数组报错 | ✅ 已有 PR #717/#719 待合并 |
| 中 | [#712](https://github.com/moltis-org/moltis/issues/712) | MCP 功能异常 | ⚠️ 新报，尚无 PR |
| 低 | [#705](https://github.com/moltis-org/moltis/issues/705) | Docker 容器暴露 `/proc`/`/sys` 元数据 | ✅ 已由 PR #706 修复 |
| 低 | [#407](https://github.com/moltis-org/moltis/issues/407) | Network-filter Proxy 启动后失效 | ✅ 长期问题已解决（PR #706 间接修复） |

> 💡 **总结**：当前主要风险点为 **MCP 与多提供商 schema 兼容性**，已在开发中；其余均为历史遗留或边缘场景问题。

---

### 6. **功能请求与路线图信号**

用户提出的重要新功能包括：

- **[#713] Pass Telegram username to LLM**：希望将 Telegram 用户名注入上下文，用于个性化交互。
- **[#563] Allow PDF processing**：支持上传和处理 PDF 文件（此前已有提案，今日仍在跟进）。
- **[#711] OpenID in Matrix**：企业级身份认证需求显性化。

结合现有 PR，可见下一版本可能重点推进：
- **多模态输入支持**（PDF/图像）
- **增强的身份与上下文感知能力**
- **更广泛的 LLM 提供商互操作性**

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - “MCP 工具在 Attio 上完全不可用”（[#694]）
  - “Slack socket mode 因 TLS 不支持而中断”（[#543]）
  - “Docker 容器泄露主机信息”（[#705]）

- **满意之处**：
  - “Nix 构建支持极大简化了部署”（[#469] 评论）
  - “openai-oxide 提供了更轻量的 OpenAI 替代方案”（[#521] 反馈）

- **使用场景**：
  - 企业环境中使用 Matrix + OpenID 进行安全通信
  - 开发者希望在本地运行 Google Gemini 模型而不依赖 OpenAI 接口

---

### 8. **待处理积压**

| Issue/PR # | 状态 | 问题简述 | 建议行动 |
|------------|------|---------|---------|
| [#712] | 开放 | MCP 功能异常 | 需排查是否与 schema 解析相关，关联 #716 |
| [#711] | 开放 | OpenID in Matrix | 评估 OAuth2/OpenID Connect 集成成本 |
| [#563] | 已关闭 | PDF 支持 | 虽已关闭，但无后续 PR，建议跟踪文档更新情况 |

> 🔔 **提醒维护者**：关注 MCP 生态兼容性问题（特别是非标准 schema 工具），避免成为未来集成障碍。

--- 

*数据来源：GitHub API · 统计周期：2026-04-14T00:00:00Z 至 2026-04-15T00:00:00Z*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，遵照您的要求，以下是根据提供的 GitHub 数据生成的 CoPaw 项目动态日报。

---

### **CoPaw 项目动态日报 (2026-04-15)**

**项目健康度评估：活跃度高**

过去24小时，项目整体活跃度非常高，Issues 和 PR 更新数量均为46条，表明社区和开发团队都非常活跃。项目正处于一个快速迭代和功能完善的阶段，特别是在版本迁移、用户体验优化和新功能探索方面取得了显著进展。

---

#### **1. 今日速览**

CoPaw 项目今日活跃度极高，共处理了46个 Issues 和46个 Pull Requests，并有2个新版本发布。项目正在进行从 CoPaw 到 QwenPaw 的平滑升级，同时重点优化了控制台的用户体验，并引入了 Agent 统计等新功能。社区对版本迁移、大模型管理、以及工具链的稳定性提出了许多有价值的反馈和改进建议。

---

#### **2. 版本发布**

**v1.1.1 发布**

*   **更新内容：**
    *   新增内置 OpenRouter 提供商，支持模型发现、系列浏览及按模态和价格过滤。
    *   新增内置 OpenAI 兼容的 OpenCode 提供商。
*   **破坏性变更：** 无明确提及。
*   **迁移注意事项：** 用户无需进行特殊操作，新版本的安装会自动完成。

**v1.1.1-beta.2 发布**

*   **更新内容：**
    *   主要进行了版本号更新和后台管理界面的优化。

---

#### **3. 项目进展**

今日合并/关闭的重要 PR 主要集中在以下几个方面，显著提升了项目的稳定性和功能性：

*   **修复多代理环境下的飞书通道 WebSocket 崩溃问题：** (#3331) 此问题在运行多个代理时会导致 `cross-loop RuntimeError` 崩溃。该 PR 已成功合并，将极大提升多代理场景下的系统稳定性。
*   **修复定时任务创建失败的问题：** (#3379) 此 PR 解决了控制台创建定时任务时出现的 422 错误，确保了定时任务功能的可用性。
*   **解决 vLLM 兼容性问题：** (#3295) 此 PR 修复了与未启用 `--enable-auto-tool-choice` 参数的 vLLM 部署的兼容性问题，避免了 400 错误，扩大了本地大模型支持的范围。
*   **新增 Agent 命令行工具和本地模板：** (#3385) 此 PR 引入了新的 CLI 接口和 Agent 初始化模板，为开发者提供了更灵活的 Agent 定制和启动能力。
*   **新增 Mission Mode（任务模式）：** (#3364) 此 PR 实现了一个用于复杂、长时间运行任务的自主迭代代理系统，是项目在高级 Agent 应用方向上的重要探索。

---

#### **4. 社区热点**

今日最活跃的讨论集中在版本迁移、大模型管理和用户界面优化上。

*   **[🐾 Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291):** 这是今日评论最多的 Issue，有56条评论。它提供了一个开放的贡献任务列表，欢迎社区成员认领任务。这反映了社区高涨的参与意愿和项目清晰的协作流程。
*   **[CoPaw怎么平滑升级到QwenPaw](https://github.com/agentscope-ai/QwenPaw/issues/3288):** 此 Issue 有32条评论，是用户最关心的痛点之一。用户希望在升级过程中能保留原有的 agent、配置和记忆数据，避免数据丢失和重复配置。
*   **[关于更新的建议和/approve的更改建议，模型切换建议等](https://github.com/agentscope-ai/QwenPaw/issues/2301):** 此 Issue 有9条评论，汇集了大量来自用户的增强请求，包括一键更新、/approve 按钮化、自动模型切换、内置自我反思、移动端同步等，是了解未来用户需求的重要窗口。

---

#### **5. Bug 与稳定性**

今日报告的 Bug 涵盖了客户端、服务器端和第三方集成等多个层面。

*   **高优先级：**
    *   **[QwenPaw 升级后 WORKING_DIR 仍指向旧目录](https://github.com/agentscope-ai/QwenPaw/issues/3356):** 用户在升级 QwenPaw 后，程序本体安装到了 `.qwenpaw` 目录，但数据仍然写入旧的 `.copaw` 目录。这是一个直接影响用户体验和数据一致性的严重问题。目前尚无公开的 fix PR。
    *   **[Windows版本安装的弹窗告警](https://github.com/agentscope-ai/QwenPaw/issues/3314):** Windows 安装包缺乏签名，导致安全告警。这影响了首次安装的用户体验，降低了信任感。目前尚无公开的 fix PR。
*   **中优先级：**
    *   **[WeChat channel - messages truncated when tool output is followed by text](https://github.com/agentscope-ai/QwenPaw/issues/3369):** 在微信通道中，如果工具的输出后面紧跟着文本，则只有工具输出部分会显示，后续文本会被截断。这是一个影响消息完整性和沟通效率的 Bug。
    *   **[本地大模型管理状态及数量识别不准确，且无法删减已配置的大模型](https://github.com/agentscope-ai/QwenPaw/issues/3342):** Ollama 服务或模型被删除后，QwenPaw 仍然显示模型可用，且无法在界面上删除这些无效模型。这会导致用户困惑和潜在的配置错误。

---

#### **6. 功能请求与路线图信号**

从今日的数据可以看出，用户对以下功能的需求非常强烈，且已有相关 PR 正在推进，预示着这些功能将被纳入下一版本。

*   **Agent 统计与分析：** (#3365) 一个全新的 **Agent Statistics** 页面正在开发中，提供会话、消息、Token 使用量、LLM/Tool/Skill 调用次数的趋势图表。这满足了用户对 Agent 使用情况进行分析和监控的需求。
*   **Mission Mode（任务模式）：** (#3364) 此 PR 实现了一个自主迭代代理系统，用于处理复杂的、长期运行的任务。这表明项目正在向构建更强大的、可自主工作的智能体迈进。
*   **技能系统优化：** (#2657, #3270) 用户强烈希望技能可以设置为“公共”或“特定代理共享”，并且技能标签可以复用。这指向了对技能系统进行更深层次的结构化改造。
*   **文件操作回滚：** (#2590) 用户可以撤销由代理进行的文件或工作区更改，包括恢复误删的文件。这是一个针对开发者工作流的强大需求，旨在提高容错率。
*   **在线图像/视频查看：** (#3329) `view_image` 和 `view_video` 工具需要支持直接查看网络资源，而不是先下载。这将大大提升处理网络内容的能力。

---

#### **7. 用户反馈摘要**

*   **痛点：**
    *   **版本迁移混乱：** 用户普遍反映从 CoPaw 升级到 QwenPaw 的过程不顺畅，新旧版本共存导致混淆，数据和配置迁移困难。
    *   **大模型管理不便：** 本地大模型的状态识别不准确，无法正确删除无效模型，且缺少一键更新功能。
    *   **UI/UX 卡顿与细节问题：** 超多轮对话后页面滚动卡顿；Token 列表需要手动滚动到底部查看最新记录；安装包安全告警影响体验。
    *   **工具链不完善：** 微信通道的消息截断问题；`execute_shell_command` 在某些环境下执行命令失败。
*   **满意/不满意的地方：**
    *   **满意点：** 社区对开放任务和贡献机制表示欢迎（Issue #2291）。
    *   **不满意点：** 用户对新版本导致的老版本失效、界面空白、功能报错等问题感到不满。

---

#### **8. 待处理积压**

*   **[🐾 Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291):** 这是一个长期开放的 Issue，列出了许多等待实现的“Open Task”。尽管有维护者 @cuiyuebing 跟进，但仍有很多任务处于“Not Started”状态。维护者需持续鼓励社区认领任务，以加速项目进展。
*   **[Skill Management Improvements](https://github.com/agentscope-ai/QwenPaw/issues/2657) & [Skill tags cannot be reused across skills](https://github.com/agentscope-ai/QwenPaw/issues/3270):** 这两个 Issue 都指向了技能管理的混乱和标签系统的缺陷。虽然 Issue #2657 已被标记为已完成，但其核心诉求（技能可见性分级、标签复用）仍未被解决。这可能是另一个需要优先处理的长期积压问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的数据，生成一份结构清晰的 ZeptoClaw 项目日报。

---

## ZeptoClaw 项目动态日报 (2026-04-15)

### 1. 今日速览
ZeptoClaw 项目在2026年4月14日表现出高度的自动化维护活跃度，主要体现在大量依赖项更新上。社区中关于核心架构并发性改进的讨论持续活跃，但尚无新功能或重大修复被合并。整体项目状态稳定，维护工作持续推进。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日无重要 PR 合并或关闭。所有提交的 PR 均为依赖项升级，旨在提升项目的安全性和稳定性。

### 4. 社区热点
**Issue #486: [feat] true concurrent/non blocking design**
*   **链接:** [qhkm/zeptoclaw Issue #486](https://github.com/qhkm/zeptoclaw/issues/486)
*   **分析:** 此 Issue 是今日社区讨论的核心焦点。作者提出了一个关于实现真正并发/非阻塞设计的需求，以解决代理在执行长时间任务时无法响应用户的问题。该需求被评估为“大型”（Large），涉及新的子系统和多个模块，表明这是一个架构层面的重大改进。尽管作者表示无意自行实现，但该 Issue 的存在强烈暗示了社区对提升系统响应能力和用户体验的迫切需求，是未来路线图的重要信号。

### 5. Bug 与稳定性
未报告新的 Bug、崩溃或回归问题。项目整体运行稳定。

### 6. 功能请求与路线图信号
**Issue #486: [feat] true concurrent/non blocking design**
*   **链接:** [qhkm/zeptoclaw Issue #486](https://github.com/qhkm/zeptoclaw/issues/486)
*   **分析:** 此 Issue 提出的“真正并发/非阻塞设计”是一个关键的功能请求。它直接回应了当前系统在处理长时间任务时的局限性，旨在提升系统的响应速度和用户体验。鉴于其被评估为“大型”（Large）且涉及新子系统，这很可能是 ZeptoClaw 项目下一阶段开发的核心方向之一。

### 7. 用户反馈摘要
**Issue #486: [feat] true concurrent/non blocking design**
*   **链接:** [qhkm/zeptoclaw Issue #486](https://github.com/qhkm/zeptoclaw/issues/486)
*   **反馈提炼:**
    *   **痛点:** 当前代理在执行长任务时会阻塞用户界面，导致用户无法及时获得响应。
    *   **使用场景:** 用户在等待代理完成复杂或耗时的操作（如数据分析、模型训练等）时，希望系统能保持交互能力。
    *   **满意/不满意:** 用户明确表达了对于现有“阻塞式”行为的不满，并期望一个更现代、响应式的解决方案。

### 8. 待处理积压
**Issue #486: [feat] true concurrent/non blocking design**
*   **链接:** [qhkm/zeptoclaw Issue #486](https://github.com/qhkm/zeptoclaw/issues/486)
*   **提醒:** 这是一个长期未响应的重要 Issue，已被标记为“大型”（Large）工作量，且已存在2条评论。作为维护者，应关注此 Issue 的讨论进展，并考虑是否指派团队成员进行深入探讨或规划实施路径，以避免其在社区中失去热度或演变为负面反馈。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

**EasyClaw 项目动态日报（2026-04-15）**

---

### 1. **今日速览**  
EasyClaw 在 2026-04-15 保持低活跃状态，未产生新的 Issue 或 Pull Request。当日唯一显著动态为发布新版本 **v1.7.10 (RivonClaw v1.7.10)**，主要聚焦于 macOS Gatekeeper 兼容性说明更新，属于文档类维护性发布。整体社区互动处于静默期，无紧急问题待处理。

---

### 2. **版本发布**  
**RivonClaw v1.7.10** 发布  
本次更新主要为安装指引优化，针对 macOS 用户常见的“应用已损坏”提示提供明确解决方案，强调该现象由系统安全机制引起而非文件异常。此版本未引入代码变更，属纯文档/说明补充性质，不影响现有功能或使用逻辑。  
🔗 [Release v1.7.10](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.10)

---

### 3. **项目进展**  
今日无合并或关闭的 Pull Requests，项目在功能开发层面暂无实质性推进。近期迭代节奏趋于平稳，重心可能转向稳定性维护与用户体验细节完善。

---

### 4. **社区热点**  
当前无活跃 Issue 或 PR，社区讨论处于沉寂状态。历史高频议题（如 macOS 签名问题）已在本次版本中通过文档澄清，短期内预计不会引发新讨论潮。

---

### 5. **Bug 与稳定性**  
未报告新的 Bug、崩溃或回归问题。macOS Gatekeeper 相关反馈已通过 v1.7.10 的安装说明予以覆盖，无需代码级修复。

---

### 6. **功能请求与路线图信号**  
无新功能请求提交。鉴于近期更新集中于文档与兼容性说明，推测项目当前阶段更关注核心功能稳定性而非扩展新能力，下一版本大概率仍为维护型迭代。

---

### 7. **用户反馈摘要**  
从本次 Release 的更新内容可推断：部分 macOS 用户对 Gatekeeper 拦截行为感到困惑，误判应用安全性。维护者及时响应并提供了清晰指引，体现对非技术用户使用体验的关注。正面反馈体现在问题被快速归类为预期行为，而非缺陷。

---

### 8. **待处理积压**  
经核查，目前无长期未响应的重要 Issue 或 PR。项目维护响应速度良好，所有已知问题均在合理周期内闭环。建议持续监控未来版本中是否出现跨平台兼容性或性能优化类议题以评估发展方向。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*