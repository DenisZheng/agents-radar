# OpenClaw 生态日报 2026-05-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-13 00:35 UTC

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

**OpenClaw 项目动态日报 (2026-05-13)**

---

### 1. **今日速览**

过去24小时，OpenClaw 社区活跃度极高，共处理了500条 Issues 和500条 PRs。项目在 Codex 运行时集成、多平台（Slack、Telegram、Discord）连接稳定性以及插件扩展性方面持续推进。三个新版本发布，表明团队正在积极迭代和修复关键问题。整体项目健康度良好，但需关注部分高优先级 Bug 的解决进度。

---

### 2. **版本发布**

今日发布了三个新版本，均为 beta 版本：

*   **v2026.5.12-beta.3**: 修复了 Codex harness 中 OpenAI auth-profile 媒体工具的可用性，以及 WhatsApp Baileys libsignal 依赖在 pnpm 11 下的安装问题。
    *   **链接:** [openclaw/openclaw Release v2026.5.12-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.3)
*   **v2026.5.12-beta.2**: 同 beta.3 版本。
    *   **链接:** [openclaw/openclaw Release v2026.5.12-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.2)
*   **v2026.5.12-beta.1**: 主要修复了 memory-wiki 插件的权限问题和构建元数据处理。
    *   **链接:** [openclaw/openclaw Release v2026.5.12-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.1)

**迁移注意事项:**
这些 beta 版本主要聚焦于修复和内部优化，未报告显著的破坏性变更。建议用户在测试环境中进行升级，并关注其特定插件和通道的配置是否受到影响。

---

### 3. **项目进展**

今日合并/关闭的重要 PR 展示了项目在多个关键领域的进步：

*   **Codex 运行时集成与可靠性:** 多个 Issue (#80319, #80171, #81114) 和 PR (#81227) 围绕 Codex 作为默认运行时的稳定性、QA 测试以及特定模型支持进行了讨论和修复。这表明 OpenClaw 正致力于将 Codex 深度集成并提升其可靠性。
*   **多平台连接与消息传递:** PRs (#81226, #81225, #62792) 针对 Discord、Telegram 和 Slack 的消息处理进行了改进，包括重连后消息补全、插件绑定主题消息路由以及文件访问修复，显著提升了跨平台通信的稳定性和用户体验。
*   **CLI 与配置增强:** PRs (#63050, #63061, #81219) 改进了认证流程、CLI 配置文件路径对齐以及迁移命令的日志抑制选项，使 CLI 工具更加健壮和用户友好。
*   **Agent 与技能系统:** PRs (#64281, #63330, #68734) 引入了会话委托工具、技能目录符号链接支持和钩子功能以动态限制工具集，增强了 Agent 的灵活性和可扩展性。
*   **错误处理与稳定性:** PRs (#62989, #63038) 改进了计划停滞失败关闭机制和 WhatsApp 消息刷新，提升了整体运行时稳定性。

这些进展表明 OpenClaw 正在积极完善其核心运行时、扩展性、CLI 工具和跨平台集成，为更复杂的代理工作流和部署场景打下坚实基础。

---

### 4. **社区热点**

今日最活跃的议题反映了用户对稳定性和新功能的持续关注：

*   **Codex-vs-Pi 运行时 QA 框架 (Issue #80171):** 这是最活跃的 Issue，涉及 OpenClaw 向 Codex 运行时过渡的 QA 测试框架。它讨论了 Codex-native 工具与 OpenClaw 动态工具的对齐，以及如何确保运行时一致性。这表明社区对 OpenClaw 核心运行机制的演进非常关心。
    *   **链接:** [openclaw/openclaw Issue #80171](https://github.com/openclaw/openclaw/issues/80171)
*   **Slack 连接丢失 (Issue #72808):** 用户报告 Slack 连接在长时间运行后突然断开且无恢复机制，引发了对长期稳定性的担忧。
    *   **链接:** [openclaw/openclaw Issue #72808](https://github.com/openclaw/openclaw/issues/72808)
*   **Configurable streaming watchdog timeout (Issue #68596):** 针对长推理模型（如 Kimi-K2.5, DeepSeek-R1）的流式输出超时问题，用户请求可配置的 watchdog 阈值，以提高使用体验。
    *   **链接:** [openclaw/openclaw Issue #68596](https://github.com/openclaw/openclaw/issues/68596)
*   **Plugin config 持久化 (Issue #72950):** 用户希望插件配置能通过环境变量或写覆盖路径修改，无需重建镜像，这对生产环境的灵活性至关重要。
    *   **链接:** [openclaw/openclaw Issue #72950](https://github.com/openclaw/openclaw/issues/72950)
*   **WhatsApp 群组自动回复静默抑制 (Issue #80669):** 尽管生成了回复，但 WhatsApp 群组中的自动回复并未送达，暴露了特定场景下的交付问题。
    *   **链接:** [openclaw/openclaw Issue #80669](https://github.com/openclaw/openclaw/issues/80669)

这些热点议题揭示了社区对 OpenClaw 核心运行时稳定性、跨平台一致性和开发者/用户友好性的高度关注。

---

### 5. **Bug 与稳定性**

今日报告的 Bug 主要集中在连接、消息传递和特定 API 问题上，部分已有修复 PR：

*   **[HIGH] Slack 连接丢失 (Issue #72808):** 连接在运行一段时间后丢失且无法恢复。**状态: OPEN**
*   **[HIGH] WhatsApp 群组自动回复静默抑制 (Issue #80669):** 生成的回复未送达群组。**状态: OPEN**
*   **[MEDIUM] Telegram DM 伪造静默回复 chatter (Issue #70628):** 在无可见响应时仍发送合成消息。**状态: OPEN**
*   **[MEDIUM] Discord slash-command-deploy 失败 (Issue #80437):** 原生 slash 命令部署失败。**状态: CLOSED** (有 PR 修复)
*   **[MEDIUM] WhatsApp listener 在 Windows 上反复断开连接 (Issue #70856):** 导致错过消息。**状态: CLOSED** (有 PR 修复)
*   **[MEDIUM] `openclaw update` 导致 Telegram 消息丢失 (Issue #71178):** 更新期间中断运行造成消息丢失。**状态: OPEN**
*   **[LOW] Control UI WebChat 重复显示助手回复 (Issue #71992):** 每条助手回复都显示两次。**状态: OPEN**
*   **[LOW] Image tool 缺少 sharp 依赖时的模糊错误 (Issue #73148):** 未提供清晰依赖缺失信息。**状态: OPEN**
*   **[LOW] thought_signature 400 regression (Issue #72879):** Google Generative AI API 400 错误回归。**状态: OPEN**
*   **[LOW] Safeguard compaction 忽略配置 model (Issue #57901):** 使用了 session model 而非配置的 compaction.model。**状态: OPEN**

---

### 6. **功能请求与路线图信号**

今日的功能请求和路线图信号强调了扩展性、自定义和特定平台的集成：

*   **Configurable streaming watchdog timeout (Issue #68596):** 用户强烈需求可配置的流式输出超时阈值，以适应不同模型的推理时间。这表明 OpenClaw 需要更精细的运行时调优能力。
*   **Plugin config 持久化 (Issue #72950):** 用户希望在不重建镜像的情况下动态修改插件配置，这指向了 OpenClaw 配置管理系统的现代化需求。
*   **Per-agent isolated browser instances with proxy support (Issue #37487):** 对于并发执行和严格隔离的需求，用户期望每个 Agent 拥有独立的浏览器实例和代理服务，这暗示了未来对更高级别资源隔离和并行处理能力的支持。
*   **MacOS Talk Mode OpenAI Realtime Path (Issue #71195):** 用户希望 Mac Talk Mode 能像 voice-call 插件一样集成 OpenAI Realtime API，以获得更低的延迟和更好的语音交互体验，这反映了 OpenClaw 在多模态和实时交互方面的演进方向。
*   **Skill author-defined setup hook (Issue #80213):** 允许技能作者定义安装/更新后的脚本，这极大地提升了技能的灵活性和自动化程度，是插件生态发展的重要一步。

结合已有 PR，可以预见 OpenClaw 下一版本可能会重点推进：
*   Codex 运行时深度集成与稳定性验证。
*   多平台消息传递的健壮性提升。
*   插件系统和 CLI 工具的易用性与灵活性增强。

---

### 7. **用户反馈摘要**

*   **痛点:** 用户普遍抱怨连接不稳定（Slack, WhatsApp），特定场景下消息无法送达（Telegram DM, WhatsApp 群组），以及缺乏细粒度配置控制（watchdog 超时，插件配置持久化）。
*   **使用场景:** 多 Agent 网关部署、跨团队协作（Slack, Discord, Telegram）、长推理模型调用、自动化技能安装与管理。
*   **满意点:** 社区对新功能请求的积极响应，以及已有 PR 对关键 Bug 的快速修复（如 Discord/Telegram/WhatsApp 相关）。
*   **不满意点:** 部分 Bug 修复后仍有回归（如 thought_signature 400），以及某些功能实现过于复杂或不直观（如 CLI 命令 hang，Control UI 重复渲染）。

---

### 8. **待处理积压**

*   **Session lane starvation (Issue #54488):** Followup drain 垄断 session lane，导致 inbound dispatch 阻塞 20-30 分钟。这是一个长期存在的性能瓶颈，需要架构级解决方案。
    *   **链接:** [openclaw/openclaw Issue #54488](https://github.com/openclaw/openclaw/issues/54488)
*   **Chrome extension browser relay removed (Issue #53599):** Chrome extension relay 被移除，且没有跨机器的替代方案，影响了托管提供商。这是一个影响面较广的回归问题。
    *   **链接:** [openclaw/openclaw Issue #53599](https://github.com/openclaw/openclaw/issues/53599)
*   **Safeguard compaction ignores model config (Issue #57901):** 自 2026.3.30 起存在，Safeguard 扩展忽略了 `compaction.model` 配置。
    *   **链接:** [openclaw/openclaw Issue #57901](https://github.com/openclaw/openclaw/issues/57901)
*   **Sandbox workspace read-only (Issue #37634):** 当 `workspaceAccess` 设置为 `"none"` 时，沙箱化的 `/workspace` 挂载为只读。
    *   **链接:** [openclaw/openclaw Issue #37634](https://github.com/openclaw/openclaw/issues/37634)
*   **Active-memory plugin 过载 multi-agent gateway (Issue #72015):** 启用 active-memory 插件会导致 multi-agent gateway 过载。
    *   **链接:** [openclaw/openclaw Issue #72015](https://github.com/openclaw/openclaw/issues/72015)

这些问题需要维护者投入更多精力来解决，以避免它们成为未来版本的重大障碍。

---

## 横向生态对比

好的，作为专注于个人 AI 助手/自主智能体开源生态的技术分析师，我将为您生成这份横向对比分析报告。

---

### **个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-05-13)**

**1. 生态全景**

当前个人 AI 助手/自主智能体开源生态正处于高速演进与分化阶段。核心项目如 OpenClaw 和 Hermes Agent 正积极构建健壮的运行时、多平台集成及企业级功能，而 NanoBot、PicoClaw 等则聚焦于特定场景（如轻量级部署、跨平台通信）的优化与扩展。社区普遍关注稳定性、安全性及开发者体验，同时涌现出对 MCP 生态集成、多模态能力和更精细运行时控制的强烈需求。整体趋势是从基础对话代理向具备复杂工具调用、长时记忆和多智能体协作能力的自主智能体发展。

**2. 各项目活跃度对比**

| 项目名称     | Issues 数 | PRs 数 | Release 情况                     | 健康度评估             |
| :----------- | :-------- | :----- | :------------------------------- | :--------------------- |
| **OpenClaw** | 500       | 500    | 3个 Beta 版本发布                | **极高活跃，稳定迭代** |
| **NanoBot**  | 8         | 18     | 无                               | **平稳推进，功能增强** |
| **Hermes**   | 100       | 100    | 无                               | **高度活跃，基础设施完善** |
| **PicoClaw** | 16        | 16     | Nightly Build v0.2.8-nightly.20260512 | **稳定维护，安全加固** |
| **NanoClaw** | 5         | 19     | 无                               | **积极迭代，集成扩展** |
| **NullClaw** | 1         | 2      | 无                               | **稳健更新，功能补全** |
| **IronClaw** | 29        | 50     | 无                               | **快速迭代，架构重构** |
| **LobsterAI**| 0         | 26     | 无                               | **稳定优化，体验提升** |
| **TinyClaw** | 0         | 0      | 无                               | **暂无活动**           |
| **Moltis**   | 1         | 0      | 无                               | **低活跃，UI 问题待解** |
| **CoPaw**    | N/A       | N/A    | 1个 Beta 版本发布                | **高度活跃，社区驱动** |
| **ZeptoClaw**| 0         | 3      | 无                               | **自动化维护，CI/CD 优化** |
| **ZeroClaw** | 10        | 50     | 无                               | **高活跃，可观测性增强** |

**3. OpenClaw 在生态中的定位**

*   **优势**: OpenClaw 无疑是生态中的领军者，以其极高的社区活跃度（Issues 和 PRs 数量远超其他项目）、强大的 Codex 运行时集成能力、广泛的插件系统以及深入的多平台连接支持，为复杂的生产环境部署提供了坚实基础。其技术路线侧重于构建一个高度可扩展、稳定且功能全面的通用代理框架。
*   **技术路线差异**: 与其他项目相比，OpenClaw 的“Codex 运行时”是其显著特色，旨在提供统一的模型推理接口；而 NanoBot、PicoClaw 等更注重特定部署场景或通信渠道的优化。OpenClaw 的 CLI 和配置管理也更为强大和灵活。
*   **社区规模对比**: OpenClaw 的社区规模和参与度（Issues/PRs 数量）明显领先，表明其拥有最广泛的用户基础和最强的开发者粘性，是生态中最具影响力的项目。

**4. 共同关注的技术方向**

*   **多平台消息传递与稳定性 (OpenClaw, Hermes, IronClaw, ZeroClaw)**:
    *   **诉求**: Slack/Telegram/Discord/WhatsApp 等渠道的连接稳定性、消息补全、重连机制、特定场景下的消息送达问题（如群组自动回复、DM 伪造）。
*   **运行时与模型集成 (OpenClaw, Hermes, IronClaw, ZeroClaw)**:
    *   **诉求**: Codex 运行时的深度集成与 QA 框架建立（OpenClaw）、模型上下文长度误判（Hermes）、模型切换与 fallback 机制（NanoBot, IronClaw）、模型提供商认证问题（OpenClaw, CoPaw）。
*   **Agent 工具与技能系统 (OpenClaw, NanoBot, IronClaw, ZeroClaw)**:
    *   **诉求**: 技能目录符号链接支持、动态工具集限制、会话委托工具、技能作者自定义钩子、工具链准确性（如文件读取、图片识别）、工具封装标准化（如 RateLimitedTool）。
*   **配置管理与持久化 (OpenClaw, Hermes, IronClaw, ZeroClaw)**:
    *   **诉求**: 插件配置持久化、运行时 watchdog 超时配置、CLI 配置文件路径对齐、迁移命令优化。
*   **可观测性与监控 (ZeroClaw)**:
    *   **诉求**: SSE /logs 流、健康心跳、运行时追踪、向量索引刷新。
*   **安全性与沙箱 (OpenClaw, PicoClaw)**:
    *   **诉求**: 沙箱绕过漏洞修复、权限问题、依赖安装问题。
*   **桌面客户端与本地部署 (CoPaw, LobsterAI)**:
    *   **诉求**: Tauri 2.x 支持、Electron 升级、打包稳定性、文件上传、本地路径处理。

**5. 差异化定位分析**

*   **OpenClaw**: **通用、强大、企业级**。定位为构建复杂、多 Agent 工作流的通用代理框架，强调稳定性、可扩展性和丰富的插件生态。目标用户是寻求构建生产级智能体应用的企业和高级开发者。
*   **NanoBot**: **轻量、易用、多平台通信**。专注于提供流畅的跨平台消息体验和灵活的模型配置，适合希望快速搭建多通道聊天机器人的用户。
*   **Hermes Agent**: **高性能、基础设施完善、企业级**。强调网关配置的可靠性、并发安全和多代理协作，适合需要高稳定性和企业级部署的场景。
*   **PicoClaw**: **嵌入式、安全、资源受限环境**。针对 Raspberry Pi 等嵌入式设备进行优化，强调安全性、资源效率和特定硬件的适配。
*   **NanoClaw**: **轻量级、集成化**。通过 OneCLI 等组件提供开箱即用的体验，注重 Webhook 集成和第三方服务（如 Google Drive）的快速接入。
*   **IronClaw**: **Reborn 架构、模块化、企业协作**。正在进行的 Reborn 架构重构使其在模块化设计和技能系统集成方面具有前瞻性，适合需要复杂 LLM 编排的场景。
*   **LobsterAI**: **桌面端、用户体验、多模态交互**。专注于桌面客户端的体验优化，强化语音输入、图像渲染和跨平台一致性，适合个人和团队使用。
*   **CoPaw/QwenPaw**: **多 Agent 协作、可视化、生态集成**。突出 DashScope 生态集成、Qwen 模型支持、多 Agent 协作技能以及强大的桌面客户端和可视化工具，适合中文 AI 应用和协作场景。
*   **ZeroClaw**: **可观测性、安全性、渠道扩展**。专注于运行时监控、安全加固（CA 证书、HTTPS）、以及新兴渠道（如 Home Assistant, Matrix）的支持，适合需要深度监控和安全保障的场景。
*   **ZeptoClaw**: **轻量级、CI/CD 优化**。主要精力放在自动化依赖管理和 CI/CD 流程的优化上，适合追求极简主义和持续集成的项目。

**6. 社区热度与成熟度**

*   **快速迭代阶段**:
    *   **OpenClaw**: 极高的 Issue/PR 活跃度，持续发布 Beta 版本，表明其处于快速迭代和功能完善阶段。
    *   **IronClaw**: 正在进行 Reborn 架构重构，大量 PR 合并，社区反馈集中，显示出强劲的开发势头。
    *   **ZeroClaw**: Issue 和 PR 活跃度均高，特别是在可观测性和安全性方面的快速进展。
    *   **CoPaw**: 社区高度活跃，Issue 和 PR 频繁互动，Beta 版本发布，新功能请求众多。
*   **质量巩固阶段**:
    *   **NanoBot**: 虽然活跃，但更多集中在 Bug 修复和功能增强，而非大规模架构变更，表明其在基础功能上趋于稳定。
    *   **Hermes Agent**: 基础设施类 PR 的持续合并，显示出对稳定性和可靠性的重视，进入质量巩固期。
    *   **PicoClaw**: 主要进行安全性和稳定性修复，以及特定功能的夜间构建，表明其在嵌入式场景下的成熟度提升。
*   **平稳维护阶段**:
    *   **LobsterAI**: 大量内部 PR 合并，专注于用户体验优化和 Bug 修复，无新版本发布，表明其在桌面端体验上已较为成熟。
    *   **NanoClaw**: 功能迭代和 Bug 修复并行，但节奏相对平稳。
    *   **NullClaw**: 功能点逐步补全，维护节奏稳健。
    *   **Moltis**: 仅一个 UI 问题待解，整体社区互动稀疏，处于平稳维护期。
    *   **ZeptoClaw**: 完全由自动化流程驱动，无社区直接互动，专注于 CI/CD 优化。
    *   **TinyClaw**: 暂无活动。

**7. 值得关注的趋势信号**

*   **MCP 生态的深度集成**: 多个项目（CoPaw, ZeroClaw, OpenClaw）都在积极讨论和实现 MCP（Model Context Protocol）相关的功能，如 OAuth 2.1 PKCE 支持、远程 MCP 服务器集成、MCP 调用容错机制。这表明 MCP 正成为智能体连接外部工具和服务的标准协议，对 AI 智能体开发者而言，理解和掌握 MCP 将是未来开发的关键。
*   **多模态能力的强化**: 从 OpenClaw 的 vision input 支持、PicoClaw 的 ClaudeCodeProvider 图像输入，到 CoPaw 的 Qwen-Image/Wan 2.7 工具，再到 LobsterAI 的图片剪贴板写入，多模态交互（文本、图像、音频）已成为智能体的标配能力。开发者需关注如何有效整合和处理各类媒体数据。
*   **运行时安全与可观测性**: ZeroClaw 的 SSE /logs 流、PrometheusObserver 等特性，以及 OpenClaw 的沙箱绕过修复，反映了社区对智能体运行时安全性和透明度的日益重视。对于生产环境部署，能够监控智能体行为、理解其决策过程至关重要。
*   **桌面客户端体验优化**: LobsterAI 和 CoPaw 都致力于提升桌面客户端的功能和稳定性（如 Electron 升级、Tauri 2.x 支持、文件上传、外部链接打开），表明桌面端仍是智能体应用的重要入口，良好的本地化体验不可或缺。
*   **企业级功能与协作**: Hermes Agent 的多代理协作、IronClaw 的 Reborn 架构重构、CoPaw 的多 Agent 协作技能，都指向了智能体在企业级场景中的应用，如团队协作、复杂任务分解等。这要求智能体具备更强的组织、协调和管理能力。

**总结**: 个人 AI 助手/自主智能体开源生态呈现出多元化、专业化的发展趋势。OpenClaw 凭借其强大的通用性和社区影响力引领潮流，而其他项目则在特定领域（如嵌入式、桌面端、多模态、企业级协作）深耕细作。MCP 集成、多模态能力、运行时安全与可观测性、桌面体验优化以及企业级功能将成为未来一段时间内的关键技术焦点，为 AI 智能体开发者提供了广阔的创新空间和应用场景。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-05-13）**

---

### 1. **今日速览**  
过去24小时，NanoBot 社区活跃度较高，共处理 8 条 Issue 更新与 18 条 PR 活动。项目整体进展平稳，重点围绕模型容错、多模态支持及用户体验优化展开。无新版本发布，但多个功能增强与稳定性修复已进入合并流程。

---

### 2. **版本发布**  
*无新版本发布*

---

### 3. **项目进展**  

#### ✅ 已合并/关闭的重要 PR：

- **[PR #3747] feat(feishu): add topic_isolation config switch**  
  ✅ 合并于 2026-05-12  
  为飞书群组聊天引入 `topic_isolation` 配置开关，允许用户控制是否按话题隔离会话，解决了多文件处理时话题自动分割导致上下文断裂的问题。  
  🔗 [HKUDS/nanobot#3747](https://github.com/HKUDS/nanobot/pull/3747)

- **[PR #3751] fix(wecom): preserve real filename from SDK (#3737)**  
  ✅ 合并于 2026-05-12  
  修复了企业微信文件上传时文件名被错误标记为 `"unknown"` 的问题，确保 LLM 能正确识别并处理用户发送的文件。  
  🔗 [HKUDS/nanobot#3751](https://github.com/HKUDS/nanobot/pull/3751)

- **[PR #3714] feat(config): add ModelPresetConfig and runtime preset switching**  
  ✅ 合并于 2026-05-12  
  引入命名式模型预设（Model Preset），支持运行时动态切换模型与提供商，提升配置灵活性与部署效率。  
  🔗 [HKUDS/nanobot#3714](https://github.com/HKUDS/nanobot/pull/3714)

- **[PR #3755] chore: remove dead code (vulture + coverage verified)**  
  ✅ 合并于 2026-05-12  
  通过静态分析与覆盖率验证移除 103 行死代码，改善可维护性。  
  🔗 [HKUDS/nanobot#3755](https://github.com/HKUDS/nanobot/pull/3755)

> **项目整体推进方向**：当前开发重心集中在 **多平台消息通道体验一致性**（WhatsApp/Telegram 消息反馈机制）、**模型容灾与降级策略**（fallback_models）、以及 **工具系统插件化重构**，标志着从“基础功能完备”向“生产级健壮性”演进。

---

### 4. **社区热点**  

| 类型 | Issue/PR | 热度指标 | 核心诉求 |
|------|--------|----------|---------|
| Issue | [#3744] session级别MEMORY功能请求 | 评论: 3 | 多用户共享 agent 时的记忆隔离问题，涉及 USER.md/MEMORY.md 的 session 级管理 |
| Issue | [#3689] 中断会话丢失聊天记录 | 评论: 2 | 希望打断长任务后仍能保留上下文，避免重复工作 |
| PR    | [#3460] feat(long-task): LongTaskTool 多步任务支持 | 持续活跃 | 提供结构化子任务拆解能力，适用于复杂推理或自动化流程 |

> **分析**：用户对 **会话持久性** 和 **长任务中断恢复** 的需求强烈，反映出 NanoBot 正被用于实际工作流场景，而非仅对话交互。同时，对模型切换与本地部署的支持（如 Atomic Chat）也成为新增长点。

---

### 5. **Bug 与稳定性**  

#### ⚠️ 高优先级 Bug：
- **[Issue #3753] deepseek-v4-flash: reasoning_content 导致 API 400 错误**  
  ❌ 尚未修复  
  使用 post3 版本时，自动注入 `reasoning_content` 字段触发 DeepSeek API 报错，需检测模型是否真正支持思考模式。

- **[Issue #3754] deepseek-v4-flash: model ignores external file content**  
  ❌ 尚未修复  
  小文件（如 JSON）未被正确读取，模型自行编造内容，影响工具链准确性。

- **[Issue #3760] deepseek-v4-flash + post3: 首轮即报 reasoning_content 400 错误**  
  ❌ 尚未修复  
  与 #3753 同因，首轮对话即失败，严重影响可用性。

> **已有应对措施**：暂无对应 fix PR，但社区建议临时切换至 `deepseek-chat` 或禁用 `thinking_style`。

---

### 6. **功能请求与路线图信号**  

| 需求来源 | 功能点 | 关联 PR/Issue | 纳入可能性 |
|--------|-------|--------------|-----------|
| 多用户协作 | Session 级 MEMORY 隔离 | #3744 | ⭐⭐⭐ (高) — 符合长期架构目标 |
| 模型稳定性 | `/model` 动态切换命令 | #3742 | ⭐⭐ (中) — 已有 fallback_models 基础 |
| 多模态体验 | WhatsApp 消息反应+打字指示器 | #3761 | ⭐⭐⭐ (高) — 已合并类似 Telegram 实现 |
| 本地部署 | Atomic Chat 支持 | #3750 | ⭐⭐⭐ (高) — 明确扩展 OpenAI 兼容生态 |

> **结论**：下一版本（v0.1.6）极可能包含 **模型故障转移机制**、**WhatsApp UX 对齐** 和 **Atomic Chat 集成**，而 **Session 记忆隔离** 将作为 v0.2.0 重点规划。

---

### 7. **用户反馈摘要**  

- **正面反馈**：  
  - “飞书 topic 隔离很实用，终于能批量处理文件了！”（来自 #3692 评论）  
  - “WebUI 现在默认新开聊天页，清爽多了。”（#3759 相关体验）

- **负面痛点**：  
  - “DeepSeek-V4-Flash 一用就崩，还不如用老模型。”（#3753, #3760）  
  - “打断测试任务后，机器人忘了到哪一步了，得重头来。”（#3689）  
  - “发语音消息，LLM 却回复‘无法解析音频’——其实已经转成文字了！”（#3752）

> **关键洞察**：用户对 **可靠性 > 新功能**，尤其在生产环境中，**断点续传** 和 **错误自愈** 比花哨特性更重要。

---

### 8. **待处理积压**  

- **[Issue #3689] 中断会话丢失聊天记录**  
  创建时间: 2026-05-08 | 最后更新: 2026-05-12 | 评论数: 2  
  虽未关闭，但已有 PR #3460（LongTaskTool）试图解决长任务管理，建议关联讨论。

- **[Issue #3744] session级别MEMORY功能请求**  
  创建时间: 2026-05-11 | 评论数: 3  
  涉及核心状态管理设计，需评估与现有 `session/` 目录机制的整合路径。

> **建议行动项**：  
> - 指派维护者跟进 DeepSeek V4 Flash 兼容性（#3753, #3754, #3760）  
> - 在 Roadmap 中明确 Session 内存隔离的时间线

--- 

📌 **数据来源**：GitHub @HKUDS/nanobot (截至 2026-05-13 UTC)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报 - 2026年5月13日**

---

### 1. **今日速览**
过去24小时，Hermes Agent 社区保持高度活跃，共处理 100 条 Issues 和 PR 更新（50 Issues + 50 PRs），其中 11 个 Issue 被关闭、18 个 PR 进入合并流程。项目整体进展平稳，重点集中在网关配置修复、并发安全优化及多平台支持增强。尽管无新版本发布，但多个关键 Bug 正在快速闭环，稳定性持续改善。

---

### 2. **版本发布**
*无新版本发布*

---

### 3. **项目进展**
- **PR #24658**（已合并）：修复 Tavily /crawl 端点缺少 `Authorization: Bearer` 头的认证问题，确保爬虫功能正常调用。
- **PR #24659**（已合并）：将 "whatsapp" 加入 `_HOME_TARGET_ENV_VARS`，解决 cron 任务无法正确加载环境变量的问题。
- **PR #24666**（待合并）：原子化 OpenRouter 预热的线程安全保护，防止重复启动元数据获取线程（#24651）。
- **PR #24667**（待合并）：强化 Telegram 授权机制，当 `TELEGRAM_ALLOWED_USERS` 为空时强制拒绝访问，并警告全开放模式的安全风险。

> ✅ 多个关键基础设施类 PR 已完成合并，显著提升网关安全性和配置可靠性。

---

### 4. **社区热点**
- **Issue #5941**：用户强烈呼吁集成 Searxng 作为默认搜索引擎，替代 Firecrawl/Tavily，获 28 个点赞，反映当前工具链对隐私友好型搜索的缺失。
- **Issue #15311** 与 **#14853**：围绕多代理协作与交互按钮支持展开讨论，Telegram/Discord 用户对“通用操作按钮”和“频道内历史共享”表现出极高需求（评论分别达 7 条）。
- **Issue #22714**：Matrix 网关缺乏细粒度消息路由能力，影响企业级部署中的 LLM 编排效率，被列为 P1 优先级。

> 💡 核心诉求集中于：**跨平台交互体验统一化**、**多智能体协同支持**、**开源搜索引擎集成**。

---

### 5. **Bug 与稳定性**
| 严重等级 | Issue/PR | 描述 | 状态 |
|--------|--------|------|------|
| P1     | [#24268](https://github.com/NousResearch/hermes-agent/issues/24268) | Kimi-K2.6 模型上下文长度误判为 32K（实际 256K） | ✅ 有 PR 待审（#17065 关联） |
| P1     | [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | Matrix 网关无法驱动下游 LLM 调度 | 🔄 开放中，需架构级调整 |
| P2     | [#24640](https://github.com/NousResearch/hermes-agent/issues/24640) | MiniMax 模型上下文自检错误 | ⚠️ 新报告，暂无 PR |
| P2     | [#24067](https://github.com/NousResearch/hermes-agent/issues/24067) | macOS PID 锁检测失效导致网关假死 | 🔧 PR #24661 已提交修复 |

> 🛠️ 主要风险点：**模型元数据处理逻辑缺陷**、**跨平台进程锁机制不完善**、**并发初始化竞争条件**。

---

### 6. **功能请求与路线图信号**
- **Groq 支持**（#24512）：用户明确要求添加 Groq 提供商，强调其低延迟与免费 tier 优势，可能纳入下一版本扩展计划。
- **Searxng 集成**（#5941）：虽非紧急，但高赞表明长期需求存在，结合当前 Web 工具模块重构趋势，有望在 Q3 实现。
- **持久化子代理**（#21303）：提出专业化子代理生命周期管理架构，属前瞻性设计，预计进入中长期路线图。

> 📌 维护者可评估将 Groq 支持列为下月优先级任务。

---

### 7. **用户反馈摘要**
- **正面反馈**：
  - 用户对快速响应的 Bug 修复表示认可（如 Tavily 认证问题当日解决）。
  - 多代理 Discord 场景的需求被认真对待，已有初步设计方案。
  
- **负面痛点**：
  - “hermes update 误删助手”（#24541）暴露 CLI 更新机制缺乏确认提示，引发数据丢失恐慌。
  - Telegram 回复主题帖失败（#24409）严重影响工作流连续性，用户抱怨“毫无预警”。
  - 文件操作不一致性（#24537）导致生产环境不可靠，亟需统一抽象层。

> 🗣️ 真实场景揭示：**CLI 操作安全性**、**跨平台消息上下文保持**、**文件系统一致性** 是当前三大用户体验瓶颈。

---

### 8. **待处理积压**
- **Issue #7237**（Response Truncation）：虽已关闭，但高频出现且影响 CLI/Gateway 核心路径，需警惕回归；建议纳入自动化测试覆盖。
- **Issue #13548**（ACP 安装问题）：自 4月21日起未获响应，涉及外部包管理冲突，影响新用户上手，需社区协助或文档补充。
- **PR #20047**（Dependabot 依赖升级）：Actions/checkout 从 v4 到 v6 的重大版本跃迁，虽为 chore 类，但涉及 CI/CD 安全基线，宜尽快合并。

> ⏳ 建议本周内优先处理 #13548 和 #20047，降低新手门槛并提升 CI 健壮性。

--- 

*数据来源：GitHub API · 统计时间：2026-05-13 00:00–24:00 UTC*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报（2026-05-13）**

---

### 1. **今日速览**

过去24小时内，PicoClaw 项目保持较高活跃度，共处理 16 条 Issues 和 16 条 PRs，其中包括一次 nightly 版本发布。社区在配置可靠性、安全沙箱路径枚举、网关 PID 检查逻辑等方面提出多项关键改进建议，反映出用户对生产环境稳定性和安全性日益增长的关注。整体项目健康度良好，核心维护流程运转正常。

---

### 2. **版本发布**

**Nightly Build v0.2.8-nightly.20260512.777269b4**  
本次 nightly 构建基于主分支最新提交，包含多项功能增强与 bug 修复。由于为自动构建，可能存在不稳定因素，建议开发者和高级用户用于测试而非生产部署。完整变更见：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

---

### 3. **项目进展**

- **PR #2857**: `feat(tools): show unified diff for edit_file edits`  
  文件编辑工具现返回统一差异视图（unified diff），提升 LLM 与人类用户的操作透明性，便于验证修改内容。
  
- **PR #2693**: `fix: block find / from bypassing workspace sandbox`  
  修复了 #2688 报告中发现的沙箱绕过漏洞，阻止 `find /` 等命令枚举系统根目录，强化了 Agent 运行环境的安全性。

- **PR #2813**: `fix(pid): verify gateway identity before blocking startup on stale PID`  
  针对 #2720 提出的 PID 复用导致启动失败问题，新增进程身份校验机制，防止误判导致服务崩溃循环。

以上三项均为近期高优先级安全/稳定性修复，已纳入当前迭代节奏。

---

### 4. **社区热点**

- **Issue #2720**: Singleton PID 检查未验证进程身份，陈旧 PID 可导致服务无法启动（高优先级 bug）  
  用户反馈在容器或嵌入式环境中，若 picoclaw 异常退出后 PID 被 systemd-resolved 等系统服务复用，将触发错误拒绝启动，严重影响可用性。该问题已有对应修复 PR #2813，正在等待审核合并。

- **Issue #2688**: `find /` 可绕过工作区沙箱限制，实现全路径枚举（安全风险）  
  尽管禁止直接读写外部路径，但 `find / -name ...` 仍有效，存在信息泄露隐患。相关修复 PR #2693 已提交，体现社区对安全边界的严格审视。

- **Issue #1950**: 请求支持 Web Chat 流式输出（Nice-to-Have 功能）  
  持续受到关注，虽优先级较低，但反映 Web UI 交互体验优化需求。暂无直接关联 PR，可能需后续规划。

---

### 5. **Bug 与稳定性**

| Issue ID | 严重程度 | 描述 | 状态 |
|--------|--------|------|-----|
| #2720 | 高 | PID 文件残留导致启动失败 | ✅ Fix in PR #2813 |
| #2688 | 中 | `find /` 绕过沙箱限制 | ✅ Fix in PR #2693 |
| #2742 | 中 | v0.2.8 启动后无可用 channel | 🔍 Open, 需排查配置加载逻辑 |
| #2513 | 低 | gateway 启动异常（已关闭，可能由上述 PID 问题引起） | ✅ Closed |

---

### 6. **功能请求与路线图信号**

- **MCP 服务器环境变量加密支持** (#2444)：提议通过 `.security.yml` 管理敏感信息，提升多实例部署安全性。虽未活跃更新，但属长期合理需求。

- **OpenVINO Model Server 集成** (#2703)：支持 Intel CPU/GPU/NPU 本地推理，瞄准边缘 AI 场景，体现硬件适配战略。

- **Gemini Web Search Provider** (#2763)：扩展搜索能力至 Google 生态，丰富工具链多样性。

- **会话管理命令 `/status`, `/compact`, `/new`** (#2491)：增强用户控制权与上下文管理灵活性，符合 Agent 交互演进趋势。

这些请求均指向“增强可控性”、“扩展硬件兼容性”和“深化工具集成”三大方向，预示下一版本可能聚焦于开发者体验与生产就绪特性。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - 配置文件格式迁移不直观（#2771）
  - 从源码构建后 launcher 缺失（#2753）——暴露文档或打包流程缺陷
  - 默认 build 缺少 WhatsApp 支持，影响 RPi Zero 用户使用（#2625）

- **满意点**：
  - 安全修复响应迅速（如 #2688、#2720）
  - 社区对复杂问题（如 PID 复用）有深入技术分析

- **使用场景洞察**：
  - 多数用户在 Raspberry Pi 及 Android ADB 环境下部署
  - 对混合云 LLM（OpenRouter + 自有模型）依赖较强

---

### 8. **待处理积压**

- **Issue #1950** (Streaming Output for Web Chat): 自 3 月提出以来持续活跃，但无实质性进展，可能需 roadmap 明确优先级。

- **PR #2491** (Session Management Commands): 创建于 4 月中旬，近一周无新评论，可能处于待审或等待资源投入状态。

建议维护团队定期检视此类长期未决项，避免形成技术债务。

--- 

*数据来源：GitHub sipeed/picoclaw @ 2026-05-13 00:00 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 (2026-05-13)**

---

### **今日速览**
过去24小时，NanoClaw 社区活跃度较高，共新增/活跃了5个 Issues，并有19条 PR 更新。整体来看，项目在积极迭代功能与修复问题，特别是在 OneCLI 安全配置、Webhook 通道以及聊天适配器等方面。暂无新版本发布。

---

### **版本发布**
无新版本发布。

---

### **项目进展**
今日合并/关闭的重要 PR：
- **[#2439] feat(webhook): webhook channel type — push-based inbound from Supabase, GitHub Actions, and other producers**：该PR 添加了 webhook 通道类型，支持从 Supabase、GitHub Actions 等外部服务接收数据，增强了项目的集成能力。
- **[#2422] feat(skills): add /add-google-auth foundation skill + diagnostic MCP tools**：该PR 添加了 Google Auth 基础技能及诊断工具，为后续的 Google 服务集成提供了基础设施。

---

### **社区热点**
今日讨论最活跃的 Issue 是 **[#2437] Any appetite for removing/improving the OneCLI dependency?**，作者 carderne 质疑 OneCLI 依赖与 NanoClaw 轻量级定位不符，并建议移除或改进。此Issue 反映出用户对 OneCLI 依赖的担忧，可能影响项目的轻量化特性。

---

### **Bug 与稳定性**
今日报告的 Bug 包括：
1. **[#2433] fix(setup/onecli): restrict OneCLI admin API and Postgres to loopback after install**（严重）: 在高优先级PR中，已提供解决方案，限制 OneCLI 的管理API和Postgres端口到本地回环，以增强安全性。
2. **[#2426] LLM cant see the image in discord**（中等）: 用户报告在Discord上发送图片时，LLM无法识别图片，仅看到 `[image: file.png]`。已有PR #2427 尝试修复此问题。
3. **[#2424] Container survives daemon restart with partial mount config (missing /workspace/agent bind)**（中等）: 容器在守护进程重启后出现部分挂载配置丢失的问题。已有PR #2432 提供CLI命令来管理挂载，但尚未完全解决。
4. **[#2423] Outbound delivery failures are silently swallowed — agent has no way to know a message was dropped**（中等）: 外发消息失败时，代理无法得知消息已被丢弃。此问题可能影响用户体验，但目前尚无直接的修复PR。

---

### **功能请求与路线图信号**
用户提出的新功能需求包括：
- **Webhooks 集成**：通过PR #2439，项目正在积极添加对 Webhooks 的支持，允许从Supabase、GitHub Actions等服务接收数据，表明项目正朝着更广泛的集成方向发展。
- **Google Drive 工具**：PR #2430 添加了 Google Drive 工具，通过OneCLI集成，显示出对更多第三方服务的支持需求。

---

### **用户反馈摘要**
用户反馈主要集中在以下几个方面：
- **OneCLI 依赖问题**：用户认为OneCLI依赖与NanoClaw的轻量化定位不符，希望能移除或改进。
- **Discord图片识别问题**：用户在Discord上发送图片时，LLM无法正确识别图片内容。
- **容器挂载配置问题**：容器在守护进程重启后可能出现部分挂载配置丢失的问题，影响容器的正常运行。

---

### **待处理积压**
长期未响应的重要 Issue 包括：
- **[#2437] Any appetite for removing/improving the OneCLI dependency?**：用户持续关注OneCLI依赖问题，维护者需要给出明确的回应和规划。
- **[#2423] Outbound delivery failures are silently swallowed — agent has no way to know a message was dropped**：此问题影响用户体验，需要尽快找到解决方案并发布修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-05-13）**

---

### 1. **今日速览**

过去24小时内，NullClaw 项目保持中等活跃度，共新增1条 Issue 与2条开放中的 Pull Request。无新版本发布，但有两个关键开发进展：一个关于网关同步 Webhook 功能的实现，另一个聚焦于 Discord 网关稳定性修复。整体维护节奏稳健，技术债务清理持续推进。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

**PR #912** — `feat(gateway): synchronous /webhook for paired-token workers`  
作者：Kures | 状态：Open  
该 PR 引入对配对令牌（paired-token）工作流的同步 Webhook 支持，旨在解决集成分析文档中标记为高优先级的“Worker Endpoint for nullboiler Dispatch”缺口（Gap 3）。此举将提升外部系统与 NullClaw 工作节点之间的实时通信能力，增强可观测性与控制粒度。

**PR #910** — `fix(discord,websocket): gateway stability — watchdog, backoff, interrupt-safe stop, TLS leak fix`  
作者：vernonstinebaker | 状态：Open  
此 PR 包含五项针对 Discord 网关稳定性的强化措施，已在 macOS arm64、Linux aarch64/riscv64 及 Android aarch64 平台完成 12 小时 soak 测试验证。修复了内存泄漏、异常中断处理和指数退避重连机制，显著提升多架构部署环境下的可靠性。

> 📌 注：目前尚无合并动作，两项 PR 均处于待审核阶段。

---

### 4. **社区热点**

**#913 [OPEN] a2a performance?**  
作者：jacktang | 创建于 2026-05-12  
用户询问 A2A（Agent-to-Agent）协议在 NullClaw 中的基准性能测试数据，并指出其原生消息响应速度优于当前 A2A 实现。该问题虽无评论或点赞，但反映了用户对性能透明度的期待及对现有 A2A 效率的潜在质疑。

👉 [GitHub Issue #913](https://github.com/nullclaw/nullclaw/issues/913)

---

### 5. **Bug 与稳定性**

暂无新报告的 Bug 或崩溃事件。  
PR #910 正积极应对 Discord 网关相关的稳定性问题（如 TLS 资源泄漏和中断处理不当），并已进行跨架构压力测试，表明团队对生产环境稳定性有高度关注。

---

### 6. **功能请求与路线图信号**

用户对 A2A 协议性能透明度的诉求（Issue #913）暗示未来可能需要：
- 发布 A2A 基准测试报告；
- 优化 A2A 实现以匹配原生消息性能。

同时，PR #912 明确指向 `docs/integration-analysis.md` 中列出的高优先级集成缺口，说明项目正在系统性补全对外协作接口，强化与 nullboiler 等组件的协同能力。

---

### 7. **用户反馈摘要**

- **痛点**：用户对 A2A 协议的实际性能缺乏量化认知，影响选型决策；
- **使用场景**：多节点异构部署（含 ARM/RISC-V/Android）环境下，需确保 WebSocket 和 Discord 网关长期稳定运行；
- **满意度**：现有原生消息机制表现良好，部分用户对其性能感到满意。

---

### 8. **待处理积压**

- **Issue #913**（a2a performance?）：虽仅一条 Issue，但若涉及核心协议性能透明度，建议维护者评估是否需要发布性能基准或优化文档；
- **PR #912 与 #910**：均为重要功能/修复，目前处于 Open 状态，需尽快安排 Code Review 以避免阻塞后续迭代。

--- 

*数据来源：[nullclaw/nullclaw GitHub Repository](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-05-13）**

---

### 1. **今日速览**
过去24小时内，IronClaw 项目活跃度较高，共处理 Issue 更新 29 条、PR 更新 50 条。核心开发团队持续推进 Reborn 架构集成工作，多个高优先级任务完成合并。社区反馈集中在 Telegram/Gmail 集成异常与 Web UI 功能缺失，需关注稳定性优化。整体项目处于快速迭代阶段，Reborn 相关进展显著。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
本周关键 PR 合并与推进情况如下：

- **#3476**：[Reborn] Wire SkillContextService into loop prompt path  
  将技能上下文服务正式接入 Reborn 循环提示路径，为模型推理提供结构化技能支持。
  ✅ 已合并，显著增强 Reborn 架构完整性。

- **#3493**：Fix Reborn memory error redaction and SQL replay cursors  
  修复了内存后端错误信息泄露及 SQL 回放游标停滞问题，提升生产环境安全性与可靠性。
  ✅ 已合并。

- **#3538**：feat(reborn): add first-party builtin tool capabilities  
  新增 echo、time、json 等内置工具能力，供 Reborn 内核直接调用。
  ✅ 已合并，支持更灵活的本地工具扩展。

此外，#3469（HostManagedModelGateway 预算与凭证测试完善）仍在进行中，预计将进一步巩固 Reborn 的安全边界。

---

### 4. **社区热点**
今日最活跃议题包括：

- **#3319 Gmail Authentication fails (400) when started from Telegram**  
  用户通过 Telegram 发起 Gmail 认证时持续失败，触发后续对话中断（#3320）。此问题已被标记为 `bug_bash_P1`，影响用户体验闭环。
  🔗 [Issue #3319](https://github.com/nearai/ironclaw/issues/3319)

- **#2283 Web UI does not support file uploads**  
  Web 界面无法上传文件，阻碍需要附件输入的任务流程。虽仅一条评论，但属基础功能缺口，长期未解。
  🔗 [Issue #2283](https://github.com/nearai/ironclaw/issues/2283)

- **#3500 Local web UI is undiscoverable through onboarding**  
  本地部署后用户无法感知 Web UI 可用性，导致功能发现困难。已有 PR #3510 针对性修复。
  🔗 [Issue #3500](https://github.com/nearai/ironclaw/issues/3500)

这些议题反映出用户对 **多通道无缝集成** 和 **本地开发体验优化** 的强烈需求。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键 Bug：

| 等级 | Issue | 描述 | 状态 |
|------|------|------|------|
| P1 | [#3319](https://github.com/nearai/ironclaw/issues/3319) | Gmail OAuth 400 错误导致 Telegram 会话中断 | 开放中 |
| P1 | [#3533](https://github.com/nearai/ironclaw/issues/3533) | Telegram v0.28.1 无法自动完成 UI 配对流程 | 开放中 |
| P2 | [#2991](https://github.com/nearai/ironclaw/issues/2991) | V2 审批流逻辑混乱，强制顺序执行 | 开放中 |
| P2 | [#2752](https://github.com/nearai/ironclaw/issues/2752) | `onboard` 命令在 provider 步骤报 DB 错误 | 开放中 |

其中 #3319 与 #3533 均涉及外部服务集成故障，暂无对应 fix PR。建议优先排查 OAuth 回调链路及 Telegram 状态机逻辑。

---

### 6. **功能请求与路线图信号**
近期 Issue 和 PR 透露出以下方向性信号：

- **Reborn 钩子框架深化**：#3523、#3524 提出第一类循环钩子支持，目标在不破坏安全边界的前提下实现行为拦截与注入。
- **技能包化设计**：#3537 提议将内存建模为用户态能力包，推动插件生态发展。
- **日志调试工具**：#3534 呼吁创建一键日志下载工具，反映生产排障效率痛点。
- **WeChat 文档补充**：#3515 明确要求添加 WeChat 通道使用指南，标志国际化支持进入交付节奏。

结合 PR #3544（Agent Loop Skeleton Framework 规范），可见 Reborn 正从“实验性重构”转向“生产就绪架构”。

---

### 7. **用户反馈摘要**
从 Issue 评论中提取真实场景洞察：

- **负面反馈**：多位用户抱怨 Gmail/Telegram 认证流程断裂后无法恢复对话（#3320），认为错误处理机制不友好。
- **正面认可**：部分开发者赞赏 Reborn 模块化设计，称其“终于有了清晰的运行时分层”（#3466 关联讨论）。
- **使用场景**：企业用户依赖本地部署 + Web UI 进行内网协作，但对本地网关默认关闭表示困惑（#3500）。

整体情绪偏谨慎乐观，技术复杂性上升的同时期待更稳定的集成体验。

---

### 8. **待处理积压**
需关注的高优先级遗留项：

- **#2283 Web UI 文件上传缺失**：自 4 月 10 日提出，至今无实质性进展，影响核心交互能力。
- **#2991 V2 审批流缺陷**：涉及新版引擎核心逻辑，若未修复可能阻碍 V2 全面上线。
- **#3447 Nightly E2E 持续失败**：自 5 月 10 日起 nightly 测试失败，需排查 CI 环境或引入回归测试。

建议分配资源优先解决上述三项，避免技术债累积。

--- 

*数据来源：GitHub nearai/ironclaw 仓库（截至 2026-05-13 00:00 UTC）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-05-13）**

---

### 1. **今日速览**
LobsterAI 在 2026-05-13 表现出较高的工程活跃度，过去 24 小时内共合并或关闭 **26 个 Pull Requests**，无新增 Issue。项目整体处于稳定迭代阶段，重点聚焦于用户体验优化、跨平台兼容性修复及 Electron 依赖升级。核心功能模块如语音输入、多 Agent 工作目录、IM 通信等持续获得增强与稳定性改进。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
过去一天内完成的关键 PR 主要围绕以下方向推进：

- **语音输入功能完善**（PR #1952, #1956, #1957）：针对 macOS 辅助权限拒绝问题引入 Toast 提示机制，并重构听写触发逻辑，提升跨 OS 一致性；
- **多 Agent 支持深化**（PR #1904）：每个 Agent 现在可拥有独立工作目录，显著提升任务隔离性与协作效率；
- **UI/UX 持续优化**（PR #1954, #1959, #1937）：统一模型选择、技能面板与输入框布局，改善交互流畅度；
- **跨平台路径处理修复**（PR #1955）：解决 Windows 下含中文路径无法打开 artifact 的问题；
- **Artifact 复制与渲染增强**（PR #1958）：支持 PNG/JPEG 图片剪贴板写入，修复 Mermaid 图表缩放滚动异常；
- **IM 通道稳定性提升**（PR #1960, #1936）：修复切换 Agent 时 IM 失效问题，修正聊天历史时间戳显示错误。

> ✅ 所有上述变更均已合并，无待处理破坏性变更。

---

### 4. **社区热点**
当前无活跃 Issue 讨论。PR 中最高关注度为自动化依赖更新（#1277），由 Dependabot 发起，涉及 Electron 从 v40.2.1 升级至 v42.0.1，虽长期存在但近期因安全策略调整被重新激活。该 PR 尚未合并，可能影响构建流程稳定性，需人工审核。其余 PR 均为内部开发闭环，无公开评论反馈。

---

### 5. **Bug 与稳定性**
今日修复的主要 Bug 包括：

| 严重程度 | 问题描述 | 对应 PR | 状态 |
|----------|--------|--------|------|
| 中 | macOS 语音输入权限拒绝后无用户提示 | #1952 | ✅ 已合并 |
| 中 | Windows 中文路径下“在浏览器中打开”失效 | #1955 | ✅ 已合并 |
| 低 | Mermaid 图表缩放后滚动定位错乱 | #1958 | ✅ 已合并 |
| 低 | 多 Agent 切换导致 IM 连接中断 | #1960 | ✅ 已合并 |

以上问题均已在当日完成修复并合并，未发现回归或新崩溃报告。

---

### 6. **功能请求与路线图信号**
尽管无显式功能请求 Issue，但从近期高频提交的 PR 可见以下趋势：
- **多模态交互强化**：语音输入、图像复制、Mermaid 渲染构成沉浸式工作流基础；
- **Agent 自治能力扩展**：独立工作目录、记忆 consolidation、定时任务调度（Dreaming）暗示向长期自主代理演进；
- **企业级协作支持**：IM 通道优化、技能系统升级（Youdao Note Skill v1.0.9）反映团队协同场景需求上升。

这些方向可能预示下一版本将加强“个人智能体+团队协作”双模式架构。

---

### 7. **用户反馈摘要**
目前无直接用户 Issue 反馈。但从工程侧主动提交的大量修复类 PR（如路径处理、权限提示、UI 一致化）反映出部分终端用户在跨平台使用中存在体验割裂感，尤其在非英文操作系统环境下。维护团队展现出快速响应机制，所有问题均在数日内闭环。

---

### 8. **待处理积压**
- **PR #1277**（Dependabot: bump electron group）：创建于 2026-04-02，最后更新于 2026-05-12，仍处于 OPEN 状态。涉及 Electron 主版本升级，需评估兼容性风险。建议尽快安排技术评审。
- 无长期悬置的重要 Issue。

--- 

*数据来源：GitHub @netease-youdao/LobsterAI (截至 2026-05-13)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-05-13）**

---

### 1. **今日速览**  
Moltis 在 2026-05-13 保持低活跃度状态，过去 24 小时内仅新增 1 条 Issue，无 Pull Request 更新或版本发布。项目整体处于稳定维护阶段，社区反馈集中于界面体验问题。当前 Issue 讨论热度较低，暂无紧急修复需求。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
过去 24 小时内未合并或关闭任何 Pull Request，项目功能开发处于暂停状态。近期无显著代码贡献或架构调整，建议关注后续 PR 提交以评估开发节奏恢复情况。

---

### 4. **社区热点**  
当前唯一活跃的 Issue 为 #994：用户报告聊天界面再次出现水平滚动条问题，疑似 UI 布局回归缺陷。该 Issue 创建于当日，尚无评论或开发者响应，热度较低。此问题可能影响移动端或窄屏用户的交互体验，需排查 CSS 或组件渲染逻辑是否发生意外变更。  
🔗 [Issue #994](https://github.com/moltis-org/moltis/issues/994)

---

### 5. **Bug 与稳定性**  
- **#994**: 聊天界面出现水平滚动条（严重程度：中），影响视觉一致性与用户体验。  
  - 状态：已报告，尚无 fix PR 或官方回复。  
  - 建议：检查最近一次部署中是否引入布局相关变更（如消息气泡宽度、容器 padding 等）。  
  - 链接：[moltis-org/moltis Issue #994](https://github.com/moltis-org/moltis/issues/994)

---

### 6. **功能请求与路线图信号**  
无新功能请求或路线图相关讨论。当前 Issue 聚焦于已有功能的回归问题，表明项目更关注稳定性而非扩展性增强。短期内无明显功能迭代信号。

---

### 7. **用户反馈摘要**  
用户 vvuk 在 #994 中强调使用最新版 Moltis 仍遭遇界面滚动问题，并已完成预检流程（如搜索重复 issue、确认版本等），说明问题具有持续性和非偶然性。反馈隐含对项目质量控制下降的担忧，尤其在长期维护后出现“倒退”现象。虽无详细会话上下文，但可推测其使用场景涉及多设备切换或响应式布局测试。

---

### 8. **待处理积压**  
目前暂无长期未响应的高优先级 Issue。但 #994 作为当日新提 Bug，若缺乏及时响应，可能积累用户不满情绪。建议维护者在下一个开发周期优先处理此类 UI 一致性缺陷，避免影响用户体验口碑。

--- 

📌 **总结**：Moltis 当前处于平稳运行期，社区互动稀疏，技术债清理需求浮现。建议加强自动化 UI 回归测试，并建立更及时的 Issue 响应机制以提升透明度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 CoPaw 项目的分析师，这是您要求的 2026-05-13 项目动态日报。

---

### **CoPaw 项目日报 (2026-05-13)**

**1. 今日速览**

CoPaw 项目在今日保持高度活跃状态，社区参与度强劲。核心团队成功发布了一个 Beta 版本 (v1.1.7-beta.1)，重点修复了 DashScope 提供商的配置读取问题。整体来看，项目在功能迭代、稳定性修复和文档完善方面都有积极的进展，Issue 和 PR 的活跃度均维持在较高水平。

**2. 版本发布**

*   **新版本发布:** v1.1.7-beta.1
    *   **更新内容:**
        *   `Fix(provider):` 修复了 VOLCENGINE Provider 中的模型问题。
        *   `chore(version):` 将版本号更新至 1.1.7b1。
        *   `fix(console):` 改进了 Plan Panel 中的文本对比度。
    *   **破坏性变更:** 无。
    *   **迁移注意事项:** 本次为 Beta 版本，主要面向内部测试和新功能尝鲜。建议用户关注后续稳定版发布。

**3. 项目进展**

*   **重要合并/关闭 PR:**
    *   **PR #4248 (已合并):** 添加了两个新的 DashScope 工具插件（Qwen-Image, Wan 2.7），并修复了前端工具配置界面的一些关键 Bug。这显著增强了 QwenPaw 的多模态和图像生成能力。
    *   **PR #4250 (已合并):** 重构了 agent_stats 模块，优化了会话文件处理流程，移除了未使用的代码。这有助于提升系统性能和可维护性。
    *   **PR #4197 (已合并):** 为 `delegate_external_agent` 工具添加了异步执行支持。这对于处理长时运行的外部 ACP 工作流至关重要，提升了系统的响应性和用户体验。
    *   **PR #2843 (已合并):** 修复了浏览器工具的空闲看门狗自取消 Bug，解决了浏览器进程在空闲超时后无法正确退出的问题，提升了资源管理的稳定性。
    *   **PR #4224 (待合并):** 这是一个针对 Issue #4220 的直接修复。该 PR 实现了在自动记忆摘要写入后刷新向量索引的功能，解决了新会话中 `memory_search` 无法检索到内容的问题。这是一个重要的 Bug 修复，预计将被快速合并。

**4. 社区热点**

*   **Issue #4159 (活跃):** 用户报告了 DashScope provider 配置正确但运行时 `api_key` 为空导致 401 错误的问题。这是一个高优先级 Bug，有 6 条评论，反映了用户对于配置可靠性的担忧。此问题与今日发布的 v1.1.7-beta.1 中的修复相关联，表明社区反馈正在驱动核心问题的解决。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4159)
*   **PR #4256 (待合并):** 提出为远程 MCP 服务器添加 OAuth 2.1 PKCE 支持。这是一个重要的安全增强，旨在解决现有认证机制在遇到 401 错误时的静默循环问题。[链接](https://github.com/agentscope-ai/QwenPaw/pull/4256)
*   **Issue #4220 (活跃):** 报告了 `auto_memory_interval` 写入记忆文件但不同步向量索引的问题，导致新会话的 `memory_search` 失效。这个问题有 4 条评论，是近期一个突出的功能性 Bug。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4220)

**5. Bug 与稳定性**

*   **严重 Bug:**
    *   **Issue #4227:** MCP 调用在目标返回 401 时会堵塞直到超时。这是一个严重的可靠性问题，影响了 MCP 功能的可用性。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4227)
    *   **Issue #4257:** 浏览器管理存在提前空闲超时、缺乏崩溃自愈机制和清理僵尸进程的问题。这会影响用户体验和系统稳定性。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4257)
*   **一般 Bug:**
    *   **Issue #4244:** `shell_evasion_checks.newlines=True` 会静默阻止多行命令，导致代理思维链混乱。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4244)
    *   **Issue #3816 / #4239:** macOS 和打包桌面客户端中无法通过点击聊天页面上的链接打开本地文件或外部链接。[链接](https://github.com/agentscope-ai/QwenPaw/issues/3816) [链接](https://github.com/agentscope-ai/QwenPaw/issues/4239)
    *   **Issue #4243:** 浏览器无法下载文件。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4243)

**6. 功能请求与路线图信号**

*   **MCP 生态集成:**
    *   **PR #4256 (OAuth 2.1 PKCE):** 强烈信号显示项目正在积极投资于 MCP 的安全认证层，以支持更广泛的远程 MCP 服务器。
    *   **Issue #4227 (MCP 401 处理):** 用户痛点直接推动了 PR #4256 的开发。
*   **桌面客户端体验优化:**
    *   **PR #3813 (Tauri 2.x 支持):** 项目正在积极升级其桌面应用框架，预示着对原生桌面体验的持续投入。
    *   **Issue #4230 (打包安装包失败):** 反映了当前桌面打包流程存在稳定性问题，需要关注。
*   **多 Agent 协作与工具:**
    *   **Issue #4211 (Align multi_agent_collaboration skill):** 用户希望将内置的多 Agent 协作技能与现有的 inter-agent 工具对齐，这表明社区对更一致和强大的协作功能有需求。
    *   **Issue #4251 (Matrix Team Room ack mirror loop):** 揭示了多 Agent 协作场景下的一个底层架构问题，需要运行时层面的生命周期保护。
*   **会话管理与 UI 增强:**
    *   **Issue #4258 (回滚按钮与合作日记模块):** 用户提出了更高级的会话管理和审计功能。
    *   **Issue #4249 (Add session lifecycle hooks):** 开发者希望获得更灵活的会话事件处理能力。
    *   **Issue #4237 (In-chat observability for shell commands):** 用户希望在聊天中实时观察和管理 shell 命令的执行，这提升了交互的透明度和控制力。

**7. 用户反馈摘要**

*   **正面反馈:** 社区对项目快速响应 Bug（如 Issue #4159）并发布修复版本表示认可。新功能如 Tauri 2.x 桌面支持 (PR #3813) 和 MCP 认证增强 (PR #4256) 获得了积极贡献者的支持。
*   **负面反馈/痛点:**
    *   **配置复杂性:** Issue #4159 和 #4183 反映了用户在模型配置和 API 调用设置上的挫败感。
    *   **性能问题:** Issue #3499 (访问页面慢) 和 Issue #4213 (网页对话内容分片传输卡死) 指出了系统在处理大消息或高并发时的性能瓶颈。
    *   **平台特定 Bug:** Issue #3816 (macOS 超链接) 和 Issue #4239 (桌面客户端外部链接) 表明跨平台兼容性仍需加强。
    *   **打包与部署:** Issue #4230 (打包安装包失败) 显示了桌面端分发流程的稳定性问题。

**8. 待处理积压**

*   **PR #3813 (Tauri 2.x 桌面应用支持):** 这是一个长期处于“Under Review”状态的 Pull Request。它代表了对桌面客户端的重大架构升级，但目前仍在等待合并，可能需要更多审查或解决潜在的兼容性问题。[链接](https://github.com/agentscope-ai/QwenPaw/pull/3813)
*   **Issue #4159 (DashScope provider api_key 为空):** 尽管已有修复版本，但此 Issue 仍然开放且有 6 条评论，表明问题可能仍未完全解决，或者用户需要进一步验证。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4159)

---

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报（2026-05-13）**

---

### 1. **今日速览**
过去24小时内，ZeptoClaw 项目整体处于低活跃状态，无新增 Issue 或活跃讨论。共处理 3 条 Pull Request：其中 1 条依赖更新 PR 已合并，2 条由 Dependabot 发起的新依赖升级请求待审核。项目当前维护节奏平稳，聚焦于自动化依赖管理和基础设施优化，未见重大功能进展或社区互动高峰。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
- **PR #574** 已成功合并，将 `taiki-e/install-action` 从 v2.75.17 升级至 v2.75.22，属于常规 CI/CD 工具链安全与维护性更新，提升 GitHub Actions 执行稳定性与兼容性。
- 另有两条依赖更新 PR（#586、#585）仍在待合并状态：
  - **PR #586**：继续升级 `taiki-e/install-action` 至 v2.75.29；
  - **PR #585**：更新 Docker 基础镜像中的 Debian 版本（从 `cedb1ef` 到 `109e2c6`），可能涉及发行版快照变更，需评估构建环境一致性。

这些更新表明项目正通过自动化手段持续优化开发体验与部署可靠性。

---

### 4. **社区热点**
今日无公开 Issues 或高互动 PR。所有活动均由 Dependabot 驱动，属于后台自动化流程，未引发用户反馈或技术讨论。社区参与度处于静默期，暂无热点议题。

---

### 5. **Bug 与稳定性**
未报告任何新 Bug、崩溃或回归问题。依赖项升级均为向后兼容型小版本迭代，风险可控，且已有历史合并记录支持其稳定性。

---

### 6. **功能请求与路线图信号**
目前无任何新功能请求或用户需求提交。所有活动集中于维护层面，暂未释放明确的功能演进信号。建议关注未来是否会有关于核心能力扩展（如多模态推理、轻量化部署等）的相关讨论。

---

### 7. **用户反馈摘要**
无直接用户评论或 Issue 反馈。项目当前缺乏公开的用户交互渠道，难以获取一线使用体验数据。间接观察显示，用户对现有 CI/CD 流程的稳定性较为认可，未提出明显痛点。

---

### 8. **待处理积压**
- **PR #586**：依赖升级请求（taiki-e/install-action → v2.75.29），创建于 2026-05-12，尚无审查者响应，建议维护者尽快 review 以同步最新安全补丁。
- **PR #585**：Docker 基础镜像更新，同样发布于昨日，需验证新 Debian 快照对构建产物的影响。

> 📌 提醒：两条 Dependabot PR 均需在 3–5 个工作日内完成审核，避免因依赖滞后导致后续集成冲突。

---

*数据来源：[ZeptoClaw GitHub Repository](https://github.com/qhkm/zeptoclaw)*  
*分析时间：2026-05-13*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

2026-05-13 ZeroClaw 项目动态日报

今日速览
过去24小时，ZeroClaw 活跃度高涨：Issues 更新10条（5新开/活跃，5已关闭），PRs 更新50条（32待合并，18已合并/关闭）。项目整体进展稳健，重点推进了运行时可观测性、多模态支持、渠道修复与工具扩展，无新版本发布。

版本发布
无新版本发布。

项目进展
今日合并/关闭的重要 PR 包括：
- #6553（L）修复 SSE /logs 流，添加 build-stamped 版本与健康心跳，提升远程/Docker 部署的监控能力。
- #5986（L）补充运行时追踪与 SSE 广播，完善 agent turn 生命周期可观测性。
- #6601（S）修复 Windows 下 gws PATH 解析问题，增强 Google Workspace 工具兼容性。
- #6600（S）信任系统 CA 根证书，改善 provider HTTPS 请求的安全性。
- #6599（S）启动时加载 workspace 配置，避免配置未就绪导致的运行时异常。
- #6597（S）修正 supports_vision() 判断逻辑，确保 vision 能力准确反映主提供者。
- #6596（M）共享 PrometheusObserver 实例，消除重复观测器造成的资源浪费。
- #6464（L）新增 home_assistant 工具，支持通过 REST API 控制 Home Assistant 设备。
- #6525（S）避免 Matrix 根消息自动开启线程，保留现有 m.thread 结构。
- #6432（S）并发 SQLite 模式迁移容错，提升多进程初始化场景下的稳定性。
- #6550（M）本地化运行时命令回复，统一 CLI 错误提示与国际化字符串。
- #6549（L）为 ClaudeCodeProvider 添加 vision input 支持，打通 inbound 图片与 LLM 交互。
- #5772（S）将 rate-limiting 委托给包装器，精简 search 工具的 guard 代码。
- #4947（S）对 search 工具应用 RateLimitedTool+PathGuardedTool 封装。
- #4954（S）在网络/skill 工具中统一 rate-limit 委托机制。
- #4953（XS）ClaudeCodeRunnerTool 移除内联 guard，改用 RateLimitedTool 包装。
- #4952（S）AI CLI 工具类统一 rate-limit 委派。
- #4949（S）cron 操作工具统一使用 RateLimitedTool 包装。
- #6422（M）改进 cron_add 参数校验错误信息，提升 plain string 输入时的可读性。

社区热点
今日讨论最活跃的 Issue 是 #3090（Wecom 渠道支持）：用户希望增加企业微信 WebSocket 和 webhook 模式，已有 4 条评论；#6074（audit: track 153 commits lost in bulk revert）引发对历史恢复与代码审计的关注，有 2 条评论；#6563（Comfy Cloud / ComfyUI 作为媒体提供者）提出将 ComfyUI 集成进 ZeroClaw 以支持视频生成，获 1 条评论。背后诉求集中在渠道扩展、媒体处理能力增强以及长期可维护性上。

Bug 与稳定性
今日报告的 Bug 包括：
- #6120（P1, S1）Onboarding 选择 Codex 时误用 OpenAI API key 流程，工作流被阻塞；尚无 fix PR。
- #6415（P2, S2）Telegram 渠道在 stream_mode = "partial" 下静默禁用 TTS，已有 #6432 部分缓解但无直接修复。
- #5453（P1, S2）WebSocket /ws/chat 无法处理 [IMAGE:] 标记，已有 #6549 提供 ClaudeCode vision 支持，可能间接缓解。
- #6556（P1, S2）Discord 渠道 inbound 图片未处理、非图片类型被丢弃、outbound 标记泄漏，尚无 fix PR。

功能请求与路线图信号
用户强烈要求 Wecom 渠道支持（#3090）、SearXNG 搜索集成（#5316）、ComfyUI/Comfy Cloud 媒体提供者（#6563）；近期 PR 表明项目正积极扩展渠道、增强搜索鲁棒性与多模态能力，这些请求极可能被纳入下一版本。

用户反馈摘要
痛点集中在 inbound 图片处理失败（Discord/Telegram/Matrix）、TTS 在 partial streaming 下失效、Codex onboarding 流程混淆、本地图像路径无法跨组件读取、cron 参数错误信息不友好；满意点体现在 observability 与 provider 安全加固、工具封装标准化、CLI 回复本地化。

待处理积压
- #3090（Wecom 支持）创建超60天，状态 accepted，需关注实现进度。
- #5316（SearXNG 与 web search robustness）创建超35天，needs-maintainer-review，建议尽快评估。
- #6074（audit: 153 commits lost）创建近20天，status no-stale，需维护者介入审计。
- #6563（ComfyUI 媒体提供者）创建4天，needs-maintainer-review，热度上升快，建议优先处理。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*