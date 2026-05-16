# OpenClaw 生态日报 2026-05-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-16 00:31 UTC

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

**OpenClaw 项目动态日报（2026-05-16）**

---

### 1. **今日速览**
OpenClaw 在 2026-05-16 保持高度活跃状态，过去24小时内共产生 500 条 Issues 和 PR 更新，其中 454 条为新开或活跃的社区讨论。项目发布了 v2026.5.14-beta.2 版本，重点增强通道与代理配置能力。整体生态反馈积极，但存在多起因近期版本升级引发的回归性问题需持续修复。

---

### 2. **版本发布**

#### **v2026.5.14-beta.2**
- **发布时间**：2026-05-14
- **核心变更**：
  - **Channels/SDK**: 新增标准化命令转向（command turn）构造机制，并暴露插件入站上下文中的命令-转向辅助函数，提升跨通道交互一致性。
  - **Agents/config**: 支持按代理独立覆盖 `contextInjection`、`bootstrapMaxChars` 和 `bootstrapTotalMaxChars` 引导配置文件，同时实现继承逻辑优化，增强细粒度控制能力。

> 该版本为 Beta 阶段功能迭代，建议测试用户在沙箱环境验证配置兼容性。无重大破坏性变更，但部分旧版自定义插件可能需要适配新命令格式。

---

### 3. **项目进展**

今日未出现已合并的重大 PR，但多个关键修复正在推进中：

- **[PR #82369] Recover stale embedded tool calls during gateway diagnostics**  
  目标恢复因诊断检测超时而阻塞的嵌入式工具调用，避免网关重启无限等待。此修复将提升系统鲁棒性，尤其针对长时间运行的任务场景（[链接](https://github.com/openclaw/openclaw/pull/82369)）。

- **[PR #82298] Fix Telegram stop lane and gateway session aborts**  
  解决 Telegram 会话终止时未能正确中断活跃运行的问题，防止消息乱序或重复投递至错误会话（[链接](https://github.com/openclaw/openclaw/pull/82298)）。

- **[PR #77505] Render HTML assistant responses in sandboxed iframe (Web UI)**  
  允许 Web Control UI 安全渲染助手返回的完整 HTML 内容，改善可视化体验（[链接](https://github.com/openclaw/openclaw/pull/77505)）。

当前主干分支处于稳定开发节奏，重点聚焦于通道可靠性、UI 可用性及 Codex 后端集成优化。

---

### 4. **社区热点**

以下 Issue 在今日获得最多关注，反映用户核心诉求：

- **[#78308] Channel-mediated approval for MCP tool calls**  
  请求引入类似 shell-exec 的通道中介审批流程，用于 MCP 工具调用授权。已有 10 条评论，体现对安全可控外部操作的高需求（[链接](https://github.com/openclaw/openclaw/issues/78308)）。

- **[#82037] MacOS 26.5 update causes WebSocket connection failures**  
  用户报告从 v5.7 升级至 v5.12 后，Web/App 客户端连接网关失败并报“wrong protocol”错误。此为典型回归问题，影响 macOS 用户群（[链接](https://github.com/openclaw/openclaw/issues/82037)）。

- **[#79794] Discord gateway READY event never fires after v5.7**  
  升级后 Discord 机器人虽在线，却无法接收频道消息，根因疑似事件流初始化缺陷（[链接](https://github.com/openclaw/openclaw/issues/79794)）。

这些议题集中暴露了跨通道一致性和平台特定回归的痛点，社区期待官方提供快速热修复。

---

### 5. **Bug 与稳定性**

按严重程度排序的关键 Bug 汇总如下：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| High   | [#82037](https://github.com/openclaw/openclaw/issues/82037) | macOS 升级导致 WebSocket 协议错误 | 否 |
| High   | [#79794](https://github.com/openclaw/openclaw/issues/79794) | Discord 就绪事件未触发，消息丢失 | 是（#82298 相关） |
| Medium | [#81955](https://github.com/openclaw/openclaw/issues/81955) | 更新后 Agent 丢失 persona（注入失效） | 是（#82365 涉及快照刷新） |
| Medium | [#82254](https://github.com/openclaw/openclaw/issues/82254) | Web UI 升级后回复异常显示 "NO!" | 已关闭 |

此外，Telegram、Slack、Feishu 等多通道均报告交付失败或路由错误，表明近期版本存在广泛回归风险。建议受影响用户回滚至 v2026.5.7 临时规避。

---

### 6. **功能请求与路线图信号**

- **[#78308] MCP 工具调用审批机制**：用户强烈要求将现有 `/approve <id>` 管道扩展至 MCP，以支持敏感操作授权，暗示未来可能纳入安全策略框架。
- **[#79458] Slash command i18n 支持**：中文用户呼吁本地化命令描述，反映全球化部署需求。
- **[#77202] Signal 通道工具进度实时展示**：提议使用编辑-free 模式推送工具调用进度，填补 Signal 通道静默期空白，与 Telegram 现有能力对齐。

结合活跃 PR（如 #77505 的 HTML 渲染），可见下一版本将强化 Web UI 表现力与国际化支持。

---

### 7. **用户反馈摘要**

- **正面反馈**：Realtime Talk 功能获认可，低延迟体验被赞“ genuinely useful”。
- **主要不满**：
  - 升级后多通道（Discord/Telegram/Slack）服务降级，信任受损；
  - 配置热重载失败导致会话中断（#81982）；
  - Web UI CSP 阻止 Zod 执行，影响调试（#78362）。

用户普遍期望更透明的版本迁移指南与更稳健的回滚机制。

---

### 8. **待处理积压**

- **[#77320] Slack final replies silently dropped under visibleReplies="message_tool"**  
  自 5.3 起持续 11 天未解决，影响生产环境关键工作流。
- **[#36614] per-channel-peer 路由污染主会话**  
  自 2026-03-05 提出，涉及核心会话隔离机制，长期悬而未决。
- **[#77467] MiniMax OAuth 无法自动刷新**  
  自 5.4 提出，OAuth 生命周期管理缺失，阻碍企业级部署。

以上 Issue 建议维护者优先介入，避免技术债务累积。

--- 

*数据来源：GitHub openclaw/openclaw，统计周期：2026-05-15 00:00 ~ 2026-05-16 23:59 UTC*

---

## 横向生态对比

好的，作为资深技术分析师，我将基于您提供的详细数据，为您生成这份关于个人 AI 助手/自主智能体开源生态的横向对比分析报告。

---

## **个人 AI 智能体开源生态横向对比分析报告 (2026-05-16)**

### **1. 生态全景**

个人 AI 助手与自主智能体开源生态在 2026 年中呈现出**高度活跃、竞争分化、快速演进**的整体态势。一方面，OpenClaw、NanoBot、Hermes Agent 等头部项目持续迭代，功能日益强大，社区规模庞大；另一方面，PicoClaw、NanoClaw、IronClaw 等项目则通过差异化定位（如嵌入式支持、多智能体网络、企业级生产化）开辟细分市场。整个生态正从早期的概念验证阶段，加速向**企业级部署、多模态交互、安全可控**的关键能力迈进，但同时也暴露出**跨平台一致性、配置复杂性、生产环境稳定性**等共性挑战。

### **2. 各项目活跃度对比**

| 项目名称       | Issues 数 | PR 数 | Release 情况                     | 健康度评估 |
| :------------- | :-------- | :---- | :------------------------------- | :--------- |
| **OpenClaw**   | 454 (新/活跃) | 500 | v2026.5.14-beta.2 (Beta)         | ⭐⭐⭐⭐☆ (高度活跃，但有回归性问题) |
| **NanoBot**    | 80 (58更新, 53关闭) | 22 (17合并) | 无                               | ⭐⭐⭐⭐⭐ (极高活跃度，高效协作) |
| **Hermes Agent** | 50        | 50    | 无                               | ⭐⭐⭐⭐ (稳定贡献，聚焦生产稳定性) |
| **PicoClaw**   | 11        | 35    | Nightly Build v0.2.8-nightly.20260515.794eb04f | ⭐⭐⭐⭐ (高活跃度，自动化构建) |
| **NanoClaw**   | 50 (45关闭) | 50 (44合并) | v2.0.63 (首个正式Release)        | ⭐⭐⭐⭐⭐ (极强维护节奏，发布规范化) |
| **NullClaw**   | 2 (新开)  | 0     | 无                               | ⭐⭐ (低活跃度，平稳维护) |
| **IronClaw**   | 17        | 50 (28合并) | v0.28.2                          | ⭐⭐⭐⭐☆ (显著提升，Reborn生产化推进) |
| **LobsterAI**  | 1 (新)    | 36 (33合并) | 无                               | ⭐⭐⭐⭐ (稳健进展，UI/UX优化为主) |
| **TinyClaw**   | 0         | 0     | 无                               | ⭐ (无活动) |
| **Moltis**     | 4 (关闭)  | 7 (7合并)| 无                               | ⭐⭐⭐⭐ (活跃开发，依赖更新密集) |
| **CoPaw**      | 24        | 50 (部分合并) | 无                               | ⭐⭐⭐⭐ (较高活跃度，多通道支持优化) |
| **ZeptoClaw**  | 0         | 0     | 无                               | ⭐ (无活动) |
| **ZeroClaw**   | 22 (13新/活跃, 9关闭) | 50 (6合并) | 无                               | ⭐⭐⭐⭐ (高度活跃，SOP子系统问题突出) |

### **3. OpenClaw 在生态中的定位**

*   **优势**: OpenClaw 作为核心参照项目，其优势在于**庞大的社区规模、广泛的通道集成、强大的功能覆盖**（Channels/SDK, Agents/config, Web UI）以及**持续的 Beta 版本迭代**。它代表了个人 AI 助手领域的“主流”技术路线和最佳实践。
*   **技术路线差异**: OpenClaw 更侧重于提供一套完整的、开箱即用的 AI 代理框架，强调**跨通道交互一致性、细粒度配置控制**和**丰富的插件生态**。相较之下，NanoClaw 强调“小核心，大生态”和“Agent Network”，Hermes Agent 专注于 CLI 和技能系统，IronClaw 则致力于企业级 Reborn 架构和生产就绪度。
*   **社区规模对比**: OpenClaw 无疑拥有最大的社区基数和最活跃的讨论，Issue 和 PR 数量远超其他项目。NanoClaw 和 Hermes Agent 紧随其后，显示出强劲的开发活力。

### **4. 共同关注的技术方向**

*   **安全与权限控制**:
    *   **OpenClaw**: #78308 (Channel-mediated approval for MCP tool calls)
    *   **NanoBot**: #2172 (Support secret reference instead of storing secrets in plaintext), #3789 (Feishu: confine downloaded media filenames)
    *   **Hermes Agent**: #25833 (Self-created skills lack mechanism-level guarantees)
    *   **PicoClaw**: #1042 (exec tool path check logic), #2879 (load_image tool configuration)
    *   **NanoClaw**: #635 (WhatsApp auth files insecure permissions)
    *   **IronClaw**: #3692 (Identity context strategy), #3689 (Event hooks DoS budget)
    *   **CoPaw**: #4409 (backup import restore trust controls)
    *   **ZeroClaw**: #6678 (Skill工具命名违反 Anthropic API 规范), #5833 (SessionResetTool权限过大)
    *   *诉求*: 普遍需求引入更精细化的审批流程、密钥管理、沙箱隔离、API合规性检查，以提升整体安全性。

*   **多模态与跨平台体验**:
    *   **OpenClaw**: #77505 (Render HTML assistant responses in sandboxed iframe)
    *   **NanoBot**: #3752 (clear media_paths after voice transcription), #3764 (support UNC paths in Windows)
    *   **PicoClaw**: #2874 (fix Pico attachment image media loss)
    *   **Hermes Agent**: #26596 (Gateway mode ignores SOUL.md)
    *   **CoPaw**: #1516 (AudioContent not supported in Telegram channel)
    *   **ZeroClaw**: #6525 (Matrix频道根时间线消息线程问题)
    *   *诉求*: 改善文件预览、多媒体处理、跨平台兼容性，尤其是在 Web UI、移动端和不同操作系统上的表现。

*   **LLM 提供商兼容性与模型路由**:
    *   **OpenClaw**: #82037 (MacOS WebSocket failures), #79794 (Discord READY event)
    *   **NanoBot**: #3793 (stabilize prompt cache key for codex)
    *   **Hermes Agent**: #17212 / #15700 / #17825 (DeepSeek reasoning_content 400 error), #26664 (xAI OAuth entitlement-403 loop)
    *   **PicoClaw**: #2706 (DeepSeek v4 thinking model)
    *   **NanoClaw**: #80 (Support runtimes and providers other than Claude/Anthropic), #954 (Fix OpenRouter non-Anthropic model routing)
    *   **IronClaw**: #3673 (openai_compatible provider drops reasoning_content)
    *   **LobsterAI**: #1988 (阿里百炼 qwen3.6-plus 被强制替换)
    *   **CoPaw**: #4387 (allow custom base URL for Anthropic provider)
    *   **ZeroClaw**: #6672 (reasoning_content未透传给Xiaomi thinking模型)
    *   *诉求*: 解决特定平台/模型的兼容性问题，增强对多种 LLM 提供商的灵活支持，避免厂商锁定，确保推理内容正确传递。

*   **配置管理与用户体验**:
    *   **OpenClaw**: Agents/config 独立覆盖, #79458 (Slash command i18n)
    *   **NanoBot**: #3402 (Replace JSON with TOML for config files)
    *   **Hermes Agent**: Per-job timezone for cron schedules, Docker Compose内联模型配置
    *   **PicoClaw**: #28 (LM Studio便捷接入方式)
    *   **NanoClaw**: #384 (skill marketplace/registry), #2490 (LiteLLM provider support)
    *   **IronClaw**: crates.io版本滞后影响依赖更新
    *   **CoPaw**: #4406 (内置插件可发现性), #4432 (定时任务上下文清理开关)
    *   **ZeroClaw**: #6367 (暴露构建时版本号)
    *   *诉求*: 简化配置流程，提升配置文件可读性和易用性，增强国际化支持，提供更好的开发者工具和可观测性。

### **5. 差异化定位分析**

| 项目名称       | 功能侧重                             | 目标用户                         | 技术架构关键差异                                 |
| :------------- | :----------------------------------- | :------------------------------- | :----------------------------------------------- |
| **OpenClaw**   | 全能型 AI 代理框架，多通道集成       | 广泛开发者，寻求一站式解决方案 | 模块化 Channels/SDK, 细粒度代理配置              |
| **NanoBot**    | 文档完善，功能增强，Bug修复          | 注重文档和稳定性的开发者         | 高效的 CI/CD, 丰富的工具链                       |
| **Hermes Agent**| CLI 驱动，技能系统，生产环境稳定性   | 偏好命令行操作和深度定制的用户   | 强 CLI, 技能为中心的架构                         |
| **PicoClaw**   | 轻量级，嵌入式支持，安全加固         | 资源受限环境，注重安全性的用户   | 路径检查, 可配置的 exec 工具, 文档现代化         |
| **NanoClaw**   | “小核心，大生态”，多智能体网络       | 探索高级 AI 协同工作模式的用户   | Agent Network, LiteLLM 支持, 健康监控            |
| **NullClaw**   | 特定场景优化，低活跃度               | 特定 Telegram 使用场景           | 专注 Telegram 消息上下文                       |
| **IronClaw**   | 企业级生产化，Reborn 运行时          | 企业级部署，追求生产就绪度       | Reborn 架构, WebUI Beta, 扩展安全加固            |
| **LobsterAI**  | UI/UX 优化，IM 集成完善                | 注重交互体验和即时通讯集成的用户 | IM 渠道独立模型配置, 多租户运营                  |
| **TinyClaw**   | 无                                   | 无                               | 无                                               |
| **Moltis**     | 远程访问，TLS 配置，Proxmox 集成     | 服务器管理，虚拟化环境           | NetBird/Cloudflare Tunnel, Astro 文档站          |
| **CoPaw**      | 多智能体协作，插件系统，企业级支持   | 企业用户，多智能体应用场景       | 多 Agent 通信, 插件市场机制, 链路追踪支持        |
| **ZeptoClaw**  | 无                                   | 无                               | 无                                               |
| **ZeroClaw**   | SOP 引擎，技能管理，生产环境可观测性 | 需要标准化流程和可靠性的用户     | SOP 子系统, 多智能体 Runtime, Schema V3 升级     |

### **6. 社区热度与成熟度**

*   **快速迭代阶段 (High Iteration)**:
    *   **NanoClaw**: 极强的代码更新频率和首个正式 Release，显示出极高的成熟度和维护节奏。
    *   **NanoBot**: 极高的 Issue/PR 处理效率，表明项目处于快速功能迭代和功能完善的阶段。
    *   **OpenClaw**: 虽然 Issue 数量巨大，但其活跃的社区和持续的 Beta 版本迭代表明其仍在快速演进中。
    *   **IronClaw**: Reborn 生产化路径的快速推进，WebUI Beta 的实现，显示出企业级功能的快速落地。
    *   **ZeroClaw**: 高度活跃，但 SOP 子系统的实现缺口提示其在某些核心功能上仍需巩固。
*   **质量巩固阶段 (Quality Consolidation)**:
    *   **Hermes Agent**: 聚焦于修复和稳定性优化，而非大规模新功能，显示出项目已进入成熟期的质量维护阶段。
    *   **PicoClaw**: 自动化构建和 Nightly 版本的发布，表明项目在持续改进的同时，也注重测试和稳定性。
    *   **CoPaw**: 在安全性、第三方集成灵活性和用户体验方面持续深化，显示出对质量的重视。
    *   **LobsterAI**: 重点集中在 UI/UX 优化和安全加固，而非激进的功能扩展，体现出对产品质量的打磨。
*   **平稳维护阶段 (Steady Maintenance)**:
    *   **NullClaw**: 低活跃度，仅处理少量 Issue，适合对稳定性要求高但对新功能需求不迫切的用户。
    *   **Moltis**: 依赖更新和文档迁移，表明项目在基础架构和文档上进行维护性工作。
    *   **ZeptoClaw & TinyClaw**: 无活动，可能处于休眠或暂停状态。

### **7. 值得关注的趋势信号**

1.  **企业级生产化成为焦点**: IronClaw 的 Reborn 架构和 ZeroClaw 的 SOP 引擎都明确指向了企业级部署的可观测性、可靠性和标准化操作流程的需求。这表明 AI 智能体正在从个人生产力工具向企业核心业务组件过渡。
2.  **多模态与跨平台体验精细化**: 多个项目都在努力解决特定平台（如 Telegram、Discord、钉钉）的消息处理、多媒体支持和跨平台一致性，反映出用户对无缝、自然的多模态交互体验的期待日益增长。
3.  **安全策略与权限控制精细化**: 从 OpenClaw 的 MCP 工具调用审批到 CoPaw 的备份签名验证，再到 ZeroClaw 的技能命名规范，安全不再是附加功能，而是贯穿于所有设计决策的核心考量。
4.  **LLM 提供商兼容性与抗厂商锁定**: NanoClaw、IronClaw、CoPaw 等项目都在积极支持 LiteLLM 和自定义端点，而 LobsterAI 的问题也揭示了厂商绑定的风险。这预示着未来 AI 应用将更加注重 LLM 的灵活选择和抽象层建设。
5.  **技能/插件生态系统的重要性**: NanoClaw 的“Agent Network”和 CoPaw 的“内置插件可发现性”都指向了构建围绕核心平台的技能/插件生态系统，以满足多样化的垂直场景需求。
6.  **CLI 与 GUI 并重**: Hermes Agent 的强大 CLI 与 IronClaw、LobsterAI 的 WebUI 优化并行发展，满足不同用户群体的偏好，强调了工具链的多样性和灵活性。

**对 AI 智能体开发者的参考价值**:
*   **优先关注生产就绪度**: 如果您的目标是企业级部署，IronClaw 和 ZeroClaw 的 Reborn/SOP 架构值得深入研究。
*   **强化安全设计**: 在设计之初就应考虑细粒度的权限控制、密钥管理和沙箱机制，以避免后期重构。
*   **拥抱多模态与跨平台**: 投入资源解决特定平台的消息处理和跨平台一致性问题，可以显著提升用户体验。
*   **构建灵活的 LLM 抽象层**: 支持多种 LLM 提供商和自定义端点是保持长期竞争力的关键。
*   **投资于技能/插件生态**: 围绕您的核心平台构建可扩展的技能/插件体系，是吸引和留住用户的重要策略。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报 - 2026年5月16日**

---

### 1. **今日速览**
NanoBot 项目在 2026-05-16 表现出高度活跃的开发状态。过去24小时内，共处理了 80 条 Issues（58 条更新，53 条已关闭）和 22 条 PRs（17 条已合并/关闭），显示出社区贡献者和维护者的高效协作。尽管暂无新版本发布，但项目整体进展迅速，特别是在文档完善、功能增强和 Bug 修复方面。活跃度评估为“高”，表明项目正处于快速迭代阶段。

---

### 2. **版本发布**
*无新版本发布*

---

### 3. **项目进展**
**今日合并/关闭的重要 PR：**
*   **#3782 [CLOSED]** `fix(webui): remove eager markdown preload` (yorkhellen) - 优化了 WebUI 启动性能，移除了不必要的 Markdown 预加载，解决了 #3746。
*   **#3788 [CLOSED]** `feat(goal): /goal command & long-running tasks (long_task)` (Re-bin) - 引入了会话级持续目标状态功能，支持 `/goal` 命令和长任务管理，显著增强了 Agent 的自主性。
*   **#3373 [CLOSED]** `feat: add gateway lifecycle notification hooks (on_start/on_stop)` (JiajunBernoulli) - 实现了 Gateway 生命周期通知钩子，当 Gateway 以 systemd 服务运行时，用户可感知其启动和停止状态，解决了 #3279。
*   **#3793 [CLOSED]** `fix(codex): stabilize prompt cache key` (boogieLing) - 修复了 `openai_codex` 使用不稳定 prompt cache key 的问题，提升了缓存效率，解决了 #2440。
*   **#3844 [CLOSED]** `perf(agent): append runtime context after user content for cache stability` (chengyongru) - 调整了运行时上下文的位置，提升了 KV 缓存命中率。
*   **#3841 [CLOSED]** `refactor(tools): remove GlobTool` (chengyongru) - 移除了冗余的 `GlobTool`，简化了工具系统。
*   **#3752 [CLOSED]** `fix: clear media_paths after successful voice transcription` (tamvicky) - 修复了 WhatsApp 语音消息转录后媒体路径残留的问题。
*   **#3764 [CLOSED]** `fix(shell): support UNC paths in Windows path extraction` (JiajunBernoulli) - 增强了 shell 工具对 Windows UNC 路径的支持。
*   **#3774 [CLOSED]** `feat(pairing): chat-native DM sender approval` (chengyongru) - 添加了聊天原生私信发送者审批流程，提升了私聊安全性。
*   **#3789 [CLOSED]** `fix(feishu): confine downloaded media filenames` (Hinotoi-agent) - 加固了 Feishu/Lark 媒体文件下载，防止路径注入攻击。

**项目整体迈进：**
今日项目在多个关键领域取得了实质性进展，特别是 WebUI 性能优化、Agent 长任务能力增强、Gateway 生命周期管理、安全加固以及代码重构等方面。这些改进显著提升了用户体验、系统稳定性和安全性，为 NanoBot 的广泛应用奠定了更坚实的基础。

---

### 4. **社区热点**
**讨论最活跃的 Issue/PRs：**
*   **#3790 [OPEN] [bug] WebUI会话-打印内容显示错乱** (kxsk-git) - 此 Bug 报告了 WebUI 会话内容打印后显示错乱的问题，需要刷新页面恢复，且评论数高达 9。这表明该问题对用户体验影响较大，是社区当前关注的重点。
*   **#3402 [CLOSED] [enhancement] Replace JSON with TOML for configuration files** (cschur) - 此 Issue 提出将配置文件从 JSON 迁移到 TOML，以提升可读性和编辑便利性，同样有 9 条评论。虽然已关闭，但其讨论热度反映了用户对配置友好性的持续关注。
*   **#2172 [OPEN] [good first issue, feature request] [Feature/Security] Support secret reference instead of storing secrets in plaintext** (EvanNotFound) - 此功能请求强调了当前配置中明文存储密钥的安全风险，并提出从文件或命令动态获取密钥的方案，评论数为 4。这揭示了用户对安全实践的强烈需求。
*   **#3848 [CLOSED] [bug] webui render bug** (chengyongru) - 一个关于 WebUI 渲染 Bug 的报告，附有图片证据。
*   **#3279 [CLOSED] Feature Request: Gateway lifecycle notifications (on_start / on_stop)** (piliplaker) - 此 Feature Request 提出了 Gateway 生命周期通知的需求，以便更好地监控服务状态，评论数 1。
*   **#2440 [CLOSED] Bug: openai_codex uses a per-turn prompt hash as prompt_cache_key instead of a stable conversation key** (ronny-rentner) - 此 Bug 报告了 `openai_codex` 的缓存键不稳定问题，评论数 1。
*   **#3840 [CLOSED] [question, valid] fix(web): back off Brave search rate limits** (boogieLing) - 此 PR 解决了 Brave 搜索 API 的速率限制问题，评论数未明确，但 PR 本身较为重要。

**背后诉求分析：**
社区热点主要集中在 **WebUI 显示问题**、**配置文件易用性与安全性**、**Gateway 状态监控** 以及 **特定 API 的稳定性** 上。用户普遍希望 NanoBot 提供更稳定、更安全、更易用且功能更强大的体验，特别是在核心交互界面和底层架构的健壮性方面。

---

### 5. **Bug 与稳定性**
**今日报告的 Bug 及严重程度：**
1.  **#3790 [OPEN] [bug] WebUI会话-打印内容显示错乱** (kxsk-git)
    *   **描述：** 更新源码后 WebUI 会话内容打印显示错乱，需刷新页面恢复。
    *   **严重程度：** 高 - 直接影响核心用户界面体验。
    *   **是否有 Fix PR：** 无，Issue 仍为 OPEN。
    *   **链接：** [HKUDS/nanobot Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)

2.  **#3848 [CLOSED] [bug] webui render bug** (chengyongru)
    *   **描述：** WebUI 渲染 Bug，附有图片。
    *   **严重程度：** 中 - 具体影响需进一步确认，但已关闭。
    *   **是否有 Fix PR：** 无直接关联 PR，Issue 已关闭。
    *   **链接：** [HKUDS/nanobot Issue #3848](https://github.com/HKUDS/nanobot/issues/3848)

**总结：**
今日报告了一个高严重性的 WebUI 显示 Bug (#3790)，尚未有对应的修复 PR。此外，其他 Bug 如 Brave 搜索速率限制问题(#3840)已有修复 PR 合并。项目整体稳定性在提升，但仍需关注高优先级 Bug 的修复进度。

---

### 6. **功能请求与路线图信号**
**用户提出的新功能需求：**
*   **#2172 [OPEN] [good first issue, feature request] [Feature/Security] Support secret reference instead of storing secrets in plaintext** (EvanNotFound) - 此请求明确提出了解决配置中密钥明文存储问题的需求，并建议通过文件或命令动态获取密钥，体现了对安全性的高度重视。
*   **#3402 [CLOSED] [enhancement] Replace JSON with TOML for configuration files** (cschur) - 此请求提议将配置文件格式从 JSON 改为 TOML，以提升配置文件的易读性和编辑便利性，反映了用户对开发体验优化的追求。
*   **#3279 [CLOSED] Feature Request: Gateway lifecycle notifications (on_start / on_stop)** (piliplaker) - 此请求要求增加 Gateway 的生命周期通知功能，以便在作为后台服务运行时感知其状态，体现了用户对系统可观测性的需求。

**可能被纳入下一版本的信号：**
*   **#2172** 的安全特性（密钥引用机制）因其对安全性的重要性，极有可能被纳入下一个主要或次要版本。
*   **#3402** 的配置文件格式迁移，如果社区反馈积极，也可能在下个版本中实现，尤其是在新版本发布时。
*   **#3279** 的生命周期通知功能已在 #3373 和 #3792 中得到实现，表明该需求已被采纳并正在推进。

---

### 7. **用户反馈摘要**
*   **痛点/不满意：**
    *   **WebUI 显示问题：** 用户 kxsk-git 反映 WebUI 会话内容打印后显示错乱，严重影响用户体验，急需修复。
    *   **密钥安全性：** 用户 EvanNotFound 强烈指出配置文件 `config.json` 中明文存储密钥存在安全风险，呼吁引入更安全的密钥引用机制，避免成为“OpenClaw 式安全 nightmare”。
    *   **API 速率限制：** 用户 boogieLing 提到 Brave 搜索 API 的速率限制问题，导致搜索功能不稳定。
    *   **配置文件易用性：** 用户 cschur 认为 JSON 配置文件对于人工编辑不够友好，建议迁移到 TOML。
    *   **Gateway 状态监控：** 用户 piliplaker 表示当 Gateway 作为 systemd 服务运行时，无法感知其启动/停止状态，缺乏生命周期通知，影响运维体验。
*   **满意/赞赏：**
    *   用户 piliplaker 对 #3279 的解决方案（Gateway 生命周期通知）表示赞赏，评论中有一个 👍。
    *   社区对 #3782 的性能优化表示认可，解决了 WebUI 启动时的资源占用问题。
    *   用户 JiajunBernoulli 对 #3764 的 Windows UNC 路径支持表示满意，解决了跨平台兼容性问题。

---

### 8. **待处理积压**
**长期未响应的重要 Issue 或 PR：**
*   **#3790 [OPEN] [bug] WebUI会话-打印内容显示错乱** (kxsk-git) - 自 2026-05-14 创建，已过去超过 1 天，仍无进展，且评论数为 9，表明社区对此问题关注度较高。这是一个高优先级的 Bug，亟需维护者响应并提供解决方案。
*   **#2172 [OPEN] [good first issue, feature request] [Feature/Security] Support secret reference instead of storing secrets in plaintext** (EvanNotFound) - 自 2026-03-17 创建，已过去超过 2 个月，仍标记为 OPEN，评论数为 4。这是一个重要的安全增强功能请求，长期未得到解决，可能影响用户信任和安全性。
*   **#3402 [CLOSED] [enhancement] Replace JSON with TOML for configuration files** (cschur) - 虽然此 Issue 已关闭，但其讨论热度（9 条评论）和重要性表明，配置文件格式的改进仍是社区关注的焦点，可能在未来的版本规划中重新考虑。

**提醒：**
维护团队应优先关注 #3790 和 #2172，尽快给出回应或解决方案。对于 #3402，可以考虑在未来的版本计划中将其重新提上日程。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026-05-16）**

---

### 1. **今日速览**  
Hermes Agent 在过去24小时内保持高度活跃状态，共处理 **50条 Issue 更新** 和 **50条 PR 更新**，显示出稳定的社区贡献与开发节奏。无新版本发布，但修复类 PR 占比显著（如 DeepSeek API、xAI OAuth、Kanban 诊断等），表明团队正聚焦于生产环境稳定性优化。整体活跃度处于健康水平，核心模块（Agent、Gateway、CLI）均有进展。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  

#### 合并/关闭的重要 PR：
- **[#26664] fix(xai-oauth): break entitlement-403 credential-refresh loop, bump grok-4.3 context to 1M**  
  解决了 xAI OAuth 用户在未订阅 SuperGrok 时陷入 403 错误循环的问题，并修正了 `grok-4.3` 模型上下文长度误报为 256k 的问题（实为 1M）。此修复直接提升了 xAI 用户的可用性与体验。[链接](https://github.com/NousResearch/hermes-agent/pull/26664)

- **[#26660] fix(agent): load tool schemas before mutating state in add_provider() (#9948)**  
  确保在注册外部 provider 前完成 schema 加载，避免异常导致内存管理器状态不一致。此为关键稳定性修复。[链接](https://github.com/NousResearch/hermes-agent/pull/26660)

- **[#26616] fix(process_registry): poll() must not mark completion as consumed (#10156)**  
  修复了 `poll()` 操作误标记任务完成的问题，防止重复通知和资源泄漏。该问题影响网关对子进程的管理准确性。[链接](https://github.com/NousResearch/hermes-agent/pull/26616)

- **[#26661] fix(kanban): --severity filter uses >= comparison per documented behavior**  
  修正了 `hermes kanban diagnostics --severity warning` 仅匹配“等于”而非“大于等于”的 bug，使监控脚本行为符合文档承诺。[链接](https://github.com/NousResearch/hermes-agent/pull/26661)

这些进展表明项目在身份认证、进程管理、配置解析及诊断工具等基础能力上持续加固。

---

### 4. **社区热点**  

#### 最活跃 Issue：
- **[#25833] Self-created skills lack mechanism-level guarantees for correctness and execution consistency**  
  用户指出自动创建的技能缺乏运行时正确性保障机制，提出需引入沙箱或形式化验证思路。该问题获 4 条评论，反映技能系统作为核心创新点的可靠性焦虑。[链接](https://github.com/NousResearch/hermes-agent/issues/25833)

- **[#5563] [Critical UX] Memory persistence, token waste from session replay, state.db corruption, and environment hallucination**  
  生产用户报告内存持久化导致会话回放浪费 token、数据库损坏等问题，虽获高赞（👍1），但尚未有明确解决方案。凸显大规模部署下的资源与一致性挑战。[链接](https://github.com/NousResearch/hermes-agent/issues/5563)

- **[#26596] Gateway mode ignores SOUL.md and agent.personalities — DEFAULT_AGENT_IDENTITY always used**  
  网关模式下无法加载个性化配置文件（SOUL.md 或 personality 字段），导致多实例场景下人格混乱。此问题影响 Docker 部署用户。[链接](https://github.com/NousResearch/hermes-agent/issues/26596)

#### 热门功能请求：
- **[#416] Skill Validation & Linting — Automated Quality Checks on Skill Create/Edit**  
  要求增加 YAML/代码语法检查、依赖验证等功能，防止无效技能进入生产环境。已有 PR 讨论实现路径，预计将纳入近期迭代。[链接](https://github.com/NousResearch/hermes-agent/issues/416)

---

### 5. **Bug 与稳定性**  

按严重程度排序：

| 等级 | Issue | 描述 | 是否已 Fix |
|------|-------|------|-----------|
| P1 | [#5563] Memory persistence corruption | 会话分裂导致数据库损坏、token 浪费 | ❌ 无公开 PR |
| P1 | [#17063] Gateway reconnect watcher stops after 20 retries | Telegram 等平台长期断线后永久失效 | ✅ 已关闭（[#1594]）|
| P1 | [#20470] Telegram DM topic binding not refreshed after session split | 会话压缩后话题绑定丢失，引发死循环 | ❌ 待处理 |
| P2 | [#17212 / #15700 / #17825] DeepSeek reasoning_content 400 error | 多轮对话中 reasoning_content 丢失导致 API 报错 | ✅ 已关闭（[#17212]）|
| P2 | [#26651] Gateway restart deadlocks on zombie-held scoped lock | 僵尸进程持有锁导致重启阻塞 | ❌ 新报告 |

> 注：DeepSeek 相关问题集中爆发于近期，显示第三方推理模型集成仍是高风险点。

---

### 6. **功能请求与路线图信号**  

- **Per-job timezone for cron schedules** ([#26549])  
  用户强烈要求 cron 任务支持独立时区配置，当前依赖全局 HERMES_TIMEZONE，无法满足跨国团队协作需求。

- **Stage-Level Tool Whitelist** ([#26524])  
  提出在 LLM 调用前通过钩子动态限制可用工具，以减少决策疲劳。RFC 阶段，可能用于复杂代理工作流场景。

- **Docker Compose 内联模型配置** ([#12188])  
  希望 `hermes model` 设置可通过环境变量注入，提升容器化部署便利性。

以上三项均涉及配置灵活性与用户体验优化，符合 Hermes 向企业级部署演进的方向。

---

### 7. **用户反馈摘要**  

- **正面评价**：  
  > “Hermes 是我用过的最强 CLI AI Agent，技能系统、持久记忆、会话搜索令人惊艳。” —— [@JuanDragin](https://github.com/NousResearch/hermes-agent/issues/5563)  
  用户对代理架构整体设计给予高度认可。

- **主要痛点**：  
  - 生产环境中内存与状态管理不可靠（会话分裂、DB 损坏）  
  - 第三方 API（DeepSeek/xAI）适配不完善，错误提示不友好  
  - 多平台（Telegram/Feishu/Mattermost）的身份识别与上下文维护缺失  
  - Docker 部署时配置复杂度偏高  

---

### 8. **待处理积压**  

- **[#5563] Critical UX: Memory persistence issues**  
  创建于 2026-04-06，累计 3 评论，涉及生产级使用崩溃风险。建议优先评估是否需引入事务性写入或快照隔离机制。

- **[#20470] Telegram DM topic binding not refreshed**  
  会话压缩后的绑定同步逻辑缺陷，可能导致消息路由错误。需审查 `session_store` 与 `telegram_dm_topic_bindings` 的联动机制。

- **[#17063] Gateway reconnect watcher stops after 20 retries**  
  虽已关闭，但相关讨论暗示更深层的重试策略需重构，避免硬编码阈值。

---

**总结**：今日 Hermes Agent 聚焦于修复关键稳定性问题（尤其是 xAI 与 DeepSeek 集成），同时社区持续推动技能可靠性与多平台支持改进。项目处于积极演进阶段，但生产环境下的状态一致性问题仍需高度重视。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

PicoClaw 项目今日（2026-05-16）整体活跃度较高，过去24小时内共处理了35个PR和11个Issue，其中包括一个Nightly版本发布。社区讨论集中在工具配置、矩阵通道过滤及执行安全等核心功能上。项目在安全加固、配置可管理性和多模态支持方面持续推进。

### 版本发布
今日发布的 Nightly Build v0.2.8-nightly.20260515.794eb04f 主要包含对 exec 工具路径检查逻辑的修复、load_image 工具配置的显式支持以及 OpenAI兼容提供者中 reasoning_content 处理的对齐优化。此版本为自动化构建，可能存在不稳定情况，建议开发者谨慎使用。完整变更日志请参考：https://github.com/sipeed/picoclaw/compare/v0.2.8...main

### 项目进展
今日合并的重要 PR 包括：
- **#2862**：修复了 MiMo 模型在多轮对话中 thinking mode 失败的问题，通过统一 DeepSeek 的推理内容回放机制提升兼容性。
- **#2874**：解决了 Pico 附件中图片媒体跨客户端丢失的问题，增强了多媒体消息传递的完整性。
- **#2811**：引入基于 Docker 的集成测试框架并增强 MCP 传输配置，显著提升了测试覆盖与部署灵活性。
- **#2766**：同步所有文档至 V3 配置文件格式，确保文档与代码结构一致，降低配置错误风险。
这些更新表明项目在稳定性、测试能力和配置一致性方面取得实质性进展。

### 社区热点
当前最活跃的 Issue 是 #28 请求 LM Studio 的便捷接入方式，已有19条评论和2个赞，反映出用户对轻量级本地 AI 服务集成的强烈需求。其次是 #1042，描述 exec 工具在 `restrict_to_workspace=true` 时误判相对路径为越权路径，引发“Command blocked”错误，该问题已有多个评论且关联 PR #2814 正在修复中。此外，#2785 提及飞书通知中心仅显示首个工具调用信息，影响用户体验，暂无公开解决方案。

### Bug 与稳定性
今日新报告的严重 Bug 包括：
- **#2878**：`load_image` 工具无法在 config.json 中配置启用，导致用户无法按需控制该工具加载，已有 PR #2879 提交修复。
- **#2817**：Groq Whisper 语音转录成功但文本未传递给 LLM，模型收到 `[voice]` 占位符而非实际转录内容，可能影响语音交互功能。
- **#2815** & **#2816**：Matrix 通道的 `allow_from` 过滤器失效且 sender identity 未被注入上下文，影响消息路由与权限控制，相关修复 PR #2827 已提交。
以上 Bug 均处于开放状态，部分已有对应 PR 待合并。

### 功能请求与路线图信号
用户持续提出对非破坏性会话重置（#2820）、Android 标签页数据访问恢复（#2744）以及 LM Studio 原生支持（#28）的需求。结合近期 PR 如 #2879（load_image 可配置化）和 #2877（Tirith 预执行扫描），可见项目正强化安全策略与用户可控性，未来版本有望增强本地模型生态整合与执行沙箱防护能力。

### 用户反馈摘要
多位用户指出当前 Matrix 和 Telegram 频道在话题/线程上下文中回复行为异常，例如飞书通知遗漏后续工具调用、Matrix 发送者身份缺失等，暴露出多平台消息上下文保持机制的不足。另有用户反馈 Android v0.2.8 下无法从标签页读取数据，提示配置或运行时兼容性问题。总体而言，用户对跨平台一致性与细粒度配置控制有较高期待。

### 待处理积压
长期未响应的关键 Issue 包括：
- **#28**（自2026-02-11）：请求 LM Studio 快速连接支持，虽受关注但尚无实质进展。
- **#2706**（DeepSeek v4 thinking model）已于今日关闭，但其技术复杂性暗示类似推理模型支持将成为持续挑战。
维护者可考虑设立专项任务跟踪第三方模型集成与跨平台通知优化工作流。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 (2026-05-16)**

**1. 今日速览**
NanoClaw 项目在 2026-05-16 展现出高度活跃的维护节奏。过去24小时内，项目处理了 50 条 Issues（45 条已关闭）和 50 条 PRs（44 条已合并/关闭），显示出强大的问题解决能力和代码更新频率。发布了一个新的稳定版本 v2.0.63，标志着项目发布流程的规范化开始，整体活跃度评估为极高。

**2. 版本发布**
*   **v2.0.63:** 这是 NanoClaw 首个正式发布的 GitHub Release。从 v2.0.63 开始，项目承诺在 `main` 分支上每次 `package.json` 版本升级时都会手动发布一个 GitHub Release，尽管可能存在发布延迟。此前仅创建标签而没有正式的发布，这影响了版本管理的清晰度。此变更旨在提高项目的可追踪性和发布透明度。
    *   **链接:** [v2.0.63 Release](https://github.com/qwibitai/nanoclaw/releases/tag/v2.0.63)

**3. 项目进展**
过去一天，项目合并或关闭了多个重要 Pull Requests，推动了核心功能的完善和架构的优化：
*   **PR #2498 (Open):** 添加了主机侧静默失败检测和操作员警报功能，通过健康监控模块提升系统可靠性，并集成 macOS Keychain 中的 OAuth token刷新。
    *   **链接:** [feat(health-monitor)](https://github.com/qwibitai/nanoclaw/pull/2498)
*   **PR #2500 (Open):** 引入 `/add-early-compact-nudge` 特性技能，用于在上下文达到自动压缩上限的某个比例时，主动向活跃 SDK 查询推送 `<system-reminder>`，以优化长对话的上下文管理。
    *   **链接:** [feat: add /add-early-compact-nudge feature skill](https://github.com/qwibitai/nanoclaw/pull/2500)
*   **PR #2497 (Open):** 提出了 "Agent Network" 功能，旨在构建多智能体协作网络，允许不同智能体之间的交互和信息传递。
    *   **链接:** [Feature/agent network](https://github.com/qwibitai/nanoclaw/pull/2497)
*   **PR #2496 (Open):** 修复了 `writeOutboundDirect()` 函数中数据库写入权限问题，解决了命令网关拒绝响应无法传递给用户的 Bug。
    *   **链接:** [fix: open outbound DB with write access in writeOutboundDirect](https://github.com/qwibitai/nanoclaw/pull/2496)
*   **PR #2494 (Open):** 修复了 `setup/service.ts` 中对 systemd 用户会话的检测问题，使其能够正确识别 `su -` 等非 pam_systemd 会话环境。
    *   **链接:** [fix(setup): re-probe systemd user session with derived env on su- entry](https://github.com/qwibitai/nanoclaw/pull/2494)
*   **PR #2490 (Open):** 添加了对 LiteLLM 提供商的支持，扩展了 LLM 后端的兼容性。
    *   **链接:** [Feat/add litellm provider](https://github.com/qwibitai/nanoclaw/pull/2490)
*   **PR #2502 (Closed):** 为 v2.0.63 版本添加了 CHANGELOG 条目和 RELEASING.md 文档，规范了发布流程。
    *   **链接:** [docs: add v2.0.63 CHANGELOG entry and RELEASING.md](https://github.com/qwibitai/nanoclaw/pull/2502)
*   **PR #2493 (Closed):** 修复了服务名称问题，确保每个安装实例使用唯一的 slug，避免了 v1 服务名的冲突。
    *   **链接:** [fix(cli,skills): use per-install slug for service names](https://github.com/qwibitai/nanoclaw/pull/2493)
*   **PR #2489 (Closed):** 对齐了 `add-gmail-tool` 和 `add-gcal-tool` 技能与 v2 架构。
    *   **链接:** [docs(skill): align add-gmail-tool/add-gcal-tool with v2 architecture](https://github.com/qwibitai/nanoclaw/pull/2489)
*   **PR #2498 (Closed):** 改进了会话卡死和运行器转轮的可靠性，确保消息被正确摄入和处理。
    *   **链接:** [Improve reliability for stuck sessions and runner turns](https://github.com/qwibitai/nanoclaw/pull/2498)
*   **PR #954 (Closed):** 修复了 OpenRouter 非 Anthropic 模型路由在 Anthropic SDK 代理流中的问题。
    *   **链接:** [Fix OpenRouter non-Anthropic model routing in Anthropic SDK proxy flow](https://github.com/qwibitai/nanoclaw/pull/954)
*   **PR #956 (Closed):** 在设置阶段添加了快速 LLM 凭据健全性检查，以便更早地发现无效配置。
    *   **链接:** [Add fast LLM credential sanity checks to setup and verify](https://github.com/qwibitai/nanoclaw/pull/956)

这些进展表明项目正在积极增强其核心功能、稳定性和可扩展性，特别是在多智能体协作、健康监控、LLM 提供商支持和系统稳定性方面。

**4. 社区热点**
*   **Issue #80 (Closed):** 讨论了支持除 Claude/Anthropic 之外的运行时和提供商（如 opencode, codex, gemini 等）的需求。用户 jchadwick 担心 Anthropic 的服务限制会影响 NanoClaw 的使用，希望项目能增加对其他 LLM 提供商的灵活性。
    *   **链接:** [Support runtimes and providers other than Claude/Anthropic](https://github.com/qwibitai/nanoclaw/issues/80)
*   **Issue #384 (Closed):** 提出了 NanoClaw 需要一个技能市场/注册表的想法。longregen 强调了 NanoClaw 的核心理念——“小核心，大生态”的安全优势，并建议通过技能注册表来管理第三方技能，进一步增强其模块化设计。
    *   **链接:** [Nanoclaw needs a skill marketplace/registry](https://github.com/qwibitai/nanoclaw/issues/384)
*   **Issue #957 (Closed):** 建议将 Podman 作为 Docker 的替代方案在文档中进行说明。fuyb 认为这对于 macOS 和 Linux 用户来说是一个有用的选项。
    *   **链接:** [Suggest supporting Podman as an alternative to Docker](https://github.com/qwibitai/nanoclaw/issues/957)
*   **PR #2497 (Open):** "Agent Network" 功能提案，允许不同智能体之间进行交互和信息共享。这是一个前瞻性的功能，旨在构建更复杂的多智能体系统，反映了社区对高级 AI 协同工作的兴趣。
    *   **链接:** [Feature/agent network](https://github.com/qwibitai/nanoclaw/pull/2497)

这些热点反映了社区对项目未来发展方向、灵活性和可扩展性的高度关注，以及对更强大、更稳定系统的持续需求。

**5. Bug 与稳定性**
*   **Issue #730 (Closed):** **高优先级 Bug:** `CLAUDE_CODE_OAUTH_TOKEN` 在 `.env` 文件中过期，导致容器每天早上都失败。这是一个严重影响用户体验的问题，需要尽快修复。
    *   **链接:** [Bug: CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 each morning](https://github.com/qwibitai/nanoclaw/issues/730)
*   **Issue #595 (Closed):** **关键优先级 Bug:** 运行约 40 小时后出现 JavaScript 堆内存溢出 (OOM) 崩溃，幽灵 socket 在重连时累积。这是一个严重的稳定性问题，影响长时间运行的部署。
    *   **链接:** [Bug: OOM crash after ~40h — ghost sockets accumulate on reconnect](https://github.com/qwibitai/nanoclaw/issues/595)
*   **Issue #635 (Closed):** **高优先级 Bug:** WhatsApp 认证文件创建时权限不安全 (644 而非 600)，暴露敏感会话凭据给其他用户。这是一个潜在的安全风险，需要立即修复。
    *   **链接:** [Security: WhatsApp auth files created with insecure permissions (644 instead of 600)](https://github.com/qwibitai/nanoclaw/issues/635)
*   **Issue #233 (Closed):** **高优先级 Bug:** IPC 消息在查询结果后被管道传输到活动容器时会丢失。这影响了用户与容器的后续交互。
    *   **链接:** [IPC messages dropped when piped to active container after query result](https://github.com/qwibitai/nanoclaw/issues/233)
*   **Issue #553 (Closed):** **中等优先级 Bug:** WhatsApp 连接恢复后容器执行失败。这表明连接管理在某些场景下存在问题。
    *   **链接:** [Container execution fails after WhatsApp connection recovery](https://github.com/qwibitai/nanoclaw/issues/553)
*   **Issue #414 (Closed):** **中等优先级 Bug:** Linux 上检测到过时的 docker group 但未修复，导致服务启动失败。
    *   **链接:** [Linux: stale docker group detected but not remediated, service starts and fails](https://github.com/qwibitai/nanoclaw/issues/414)

这些问题中，部分已有相关的修复 PR 被合并或提出（如 #595 有 #2498 的健康监控，#233 有 #2498 的可靠性改进，#635 有安全修复 PR 提及），但 #730 和 #635 的高优先级 Bug 仍需关注其修复状态。

**6. 功能请求与路线图信号**
*   **Issue #80 (Closed):** 支持多 LLM 提供商的需求，虽然已关闭，但其诉求仍在社区中引起共鸣，可能预示着未来对 LLM 抽象层的增强。
*   **Issue #384 (Closed):** 技能市场/注册表的提议，直接指向了项目模块化、可扩展的未来方向，是长期路线图的重要信号。
*   **PR #2497 (Open):** "Agent Network" 功能的提出，是社区对高级 AI 协同工作模式的探索，很可能成为下一个版本的核心特性。
*   **PR #2490 (Open):** 对 LiteLLM 提供商的支持，表明项目正致力于扩大其 LLM 生态系统的兼容性和灵活性，这是当前 AI 开发的重要趋势。
*   **Issue #342 (Closed):** 支持第三方 Anthropic-compatible API 环境变量的需求，同样指向了对多 LLM 提供商的支持。
*   **Issue #398 (Closed):** 关于 WebFetch 和 WebSearch 工具的可调节性，体现了用户对安全和权限控制的日益增长的关注。

这些功能请求和 PR 强烈暗示了 NanoClaw 未来的发展重心将放在：多 LLM 提供商支持、技能生态系统的扩展（如技能市场）、高级 AI 协同工作模式（如 Agent Network）以及更深层次的系统安全性与稳定性优化。

**7. 用户反馈摘要**
*   **痛点：** 用户普遍反映 OAuth Token 过期（#730）、Docker 组过时（#414）、容器 OOM 崩溃（#595）、认证文件权限不安全（#635）等问题严重影响了部署和使用的稳定性与安全性。
*   **使用场景：** 用户主要将其部署为后台服务（systemd/launchd），用于自动化任务、消息处理和与 AI 助手交互。
*   **满意之处：** 用户普遍赞赏 NanoClaw 的设计理念（如“小核心，大生态”）、其相对于 Claude Code 的安全优势（#664）、以及其在特定场景下的强大能力。
*   **不满意之处：** 安装过程被认为较为复杂（#439）、缺乏 npm 包（#347）、以及某些 Bug 导致的体验中断。

**8. 待处理积压**
*   **Issue #80 (Closed):** 虽然已关闭，但其关于支持多 LLM 提供商的重要性仍值得后续版本考虑。
*   **Issue #384 (Closed):** 技能市场/注册表的提议，作为项目长期发展的关键功能，应被纳入路线图并持续跟踪。
*   **PR #2497 (Open):** "Agent Network" 功能，作为社区提出的具有前瞻性的高级特性，需要维护者投入资源进行评估和开发。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-05-16）**

---

### 1. **今日速览**  
过去24小时内，NullClaw 项目保持低活跃度，共新增2条 Issue，无 Pull Request 更新或版本发布。整体社区互动平稳，暂无重大进展或紧急问题。两个新 Issue 分别聚焦 Telegram 消息上下文增强与调度器权限异常，反映用户在使用中遇到的具体功能限制和稳定性挑战。项目当前处于稳定维护阶段，无明显开发冲刺迹象。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
无合并或关闭的 Pull Request，项目在功能推进方面暂无显著进展。

---

### 4. **社区热点**  
今日最活跃的 Issue 为 #916，用户 weissfl 提出希望在 Telegram 集成中完整提取 `reply_to_message` 文本内容，以支持更丰富的对话上下文理解。该请求虽评论数为0，但涉及核心交互体验优化，可能影响未来消息处理逻辑。另一 Issue #915 描述调度器在未授权场景下的异常行为，虽同样无讨论，但暴露了权限控制机制的潜在缺陷，值得关注。两者均体现用户对精细化交互与系统健壮性的期待。  
- [Issue #916](https://github.com/nullclaw/nullclaw/issues/916)  
- [Issue #915](https://github.com/nullclaw/nullclaw/issues/915)

---

### 5. **Bug 与稳定性**  
**高优先级 Bug**：#915 报告调度器在未授权情况下无法正常工作，影响任务执行流程。此问题已在 Ubuntu + Ollama + qwen3.6:27b 环境下复现，可能与权限验证机制或环境配置有关。尚无 fix PR 提交，需尽快排查。  
- [Issue #915](https://github.com/nullclaw/nullclaw/issues/915)

---

### 6. **功能请求与路线图信号**  
Issue #916 明确建议将 Telegram 回复消息的完整文本纳入 inbound context，这不仅是功能增强，也暗示项目正朝着提升多轮对话理解能力演进。若实现，可显著改善群聊中 bot 的响应智能性。结合近期无相关 PR 动向，该需求短期内落地可能性较低，但仍可作为下一版本 UX 优化的参考方向。

---

### 7. **用户反馈摘要**  
- **痛点**：用户期望 Telegram 集成能充分利用 Bot API 提供的完整上下文信息（如被回复消息原文），目前仅用于判断是否回应，功能利用不充分。  
- **使用场景**：在群组聊天中，用户常通过 @bot 或直接回复 bot 消息发起交互，缺乏原文提取导致 bot 难以精准理解意图。  
- **满意度**：调度器基础功能正常，但权限控制逻辑存在盲区，影响高级功能可用性，引发轻微挫败感。

---

### 8. **待处理积压**  
暂无长期未响应的关键 Issue 或 PR。所有 Issue 均在创建当日完成首次更新，表明维护者响应及时。建议持续关注 #915 的进展，因其涉及核心调度逻辑，若延迟修复可能影响部署用户。

---  
*数据基于 GitHub API 抓取于 2026-05-16，来源：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-05-16）**

---

### 1. **今日速览**

过去24小时，IronClaw 项目活跃度显著提升：共处理 50 条 PR 更新与 17 条 Issue 动态，其中 28 个 PR 已成功合并，表明开发节奏稳健。新版本 v0.28.2 发布修复了工具安装与 LLM 配置问题，同时围绕 Reborn 生产就绪路径推进多项关键架构升级。整体状态健康，核心功能迭代与稳定性维护并行推进。

---

### 2. **版本发布**

**ironclaw-v0.28.2** 已于 2026-05-14 发布。  
本次更新聚焦于扩展生态修复与 LLM 抽象层优化：

- **Fixed**: 恢复聊天驱动的工具安装流程（`tool_install`），修复双重调用漏洞，并解决自动批准机制的潜在风险（[#3559](https://github.com/nearai/ironclaw/pull/3559)）。
- **Changed**: 将 LLM 提供商的认证、模型获取及嵌入配置封装至统一接口（facade）背后，降低外部耦合（[#3416](https://github.com/nearai/ironclaw/pull/3416)）。

> 无破坏性变更或强制迁移要求，建议下游用户同步升级以获取安全修复与架构清晰度提升。

---

### 3. **项目进展**

本周期共 **28 个 PR 被合并**，涵盖 Reborn 生产化、WebUI Beta 实现及基础设施加固：

- **#3650**（已合并）：集成 WS-9 至 WS-15 六个宿主端口工作流分支，为 Reborn 计划运行时提供完整基础能力支持。
- **#3651 / #3652**（已合并）：完成默认计划驱动注册与实时运行时组合，标志 Reborn 架构主干成型。
- **#3684 / #3685 / #3686**（已合并）：实现从持久化状态读取运行取消信号，确保生产环境中任务可安全终止。
- **#3695**（开放中）：确立 `ironclaw_reborn_composition` 为官方组合根，并发布首个可运行的 `ironclaw-reborn` 二进制文件，迈出产品级部署第一步。

这些进展表明项目正加速向“可生产”阶段过渡，Reborn 模块已完成从实验到主干的实质性切割。

---

### 4. **社区热点**

当前最受关注的问题集中在新版发布延迟（#3259）与 WebUI Beta 快速落地（#3611, #3625–#3627）：

- **#3259**（4条评论）：用户因 crates.io 未同步 0.25.0–0.27.0 版本，被迫锁定存在 CVE 风险的 wasmtime 28.x 依赖。反映 Rust 生态分发协同滞后对安全的影响。
- **#3611 / #3625–#3627**（P0 优先级标签）：由 serrrfirat 主导的 WebChat v2 原生路由实现获得持续跟进，体现社区对前端集成体验的高度期待。
- **#3679**（大型重构 PR）：统一文件系统分派机制跨消费 crate，虽技术复杂度高但被视为降低长期维护成本的关键一步。

诉求本质是：**提升发布透明度 + 加快前端交付速度 + 强化内部架构一致性**。

---

### 5. **Bug 与稳定性**

发现 3 个需紧急关注的问题：

| Issue | 严重程度 | 描述 | 状态 |
|-------|----------|------|------|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | ⚠️ Medium | Nightly E2E 测试失败（features 子集） | 无活跃 fix |
| [#3675](https://github.com/nearai/ironclaw/issues/3675) | 🟡 Low | TUI 无法正确渲染 Markdown 表格 | 无 fix PR |
| [#3673](https://github.com/nearai/ironclaw/issues/3673) | 🟠 High | openai_compatible provider 丢弃 reasoning_content，导致 DeepSeek v4-pro 多轮工具调用中断 | 无 fix PR |

其中 #3673 直接影响主流推理模型兼容性，建议优先排查 openai_compatible 序列化逻辑。

---

### 6. **功能请求与路线图信号**

多个 Issue 显示用户对以下方向有明确需求：

- **身份上下文策略化**（#3692）：希望将个人身份与心跳提示纳入可管控的 prompt 策略，呼应企业级安全审计需求。
- **事件钩子防护**（#3689）：要求为第三方扩展钩子设置 DoS 预算，暴露当前 Installed-tier hooks 存在资源滥用风险。
- **WebUI 幂等性**（#3694）：客户端重复提交防重放机制，预示即将进入 beta 测试阶段。

结合现有 PR 可见，**Reborn 生产网关 + WebUI Beta + 扩展安全加固**将成为 Q2 核心交付主题。

---

### 7. **用户反馈摘要**

从 Issue 评论中提取真实使用场景：

- **负面反馈**：本地部署时 DeepSeek 多轮工具调用因 reasoning_content 丢失而失败，挫伤开发者对新模型支持的信心。
- **正面认可**：Reborn 架构解耦使自定义运行时接入更清晰，尤其赞赏 #3695 提供的可运行二进制作为 MVP 验证。
- **隐性痛点**：Markdown 表格在 TUI 中乱码影响日志可读性，虽非阻塞但降低调试效率。

总体情绪偏积极，但对生产就绪度仍有疑虑。

---

### 8. **待处理积压**

- **#3259**（创建于 2026-05-05）：crates.io 版本滞后超10天，阻碍下游依赖更新与安全修复传播，属**高优先级待办**。
- **#3447**（创建于 2026-05-10）：E2E 测试已失败6天，可能影响 CI 可信度，需尽快定位 flaky test 或环境依赖问题。
- **#3673**（创建于 2026-05-15）：高影响 Bug 尚无响应，建议 assign 给 openai_compatible 模块负责人。

> 以上三项若未在48小时内响应，可能引发社区对维护响应力的质疑。

--- 

*数据来源：GitHub API @ 2026-05-16T00:00:00Z*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-05-16）**

---

### 1. **今日速览**
LobsterAI 在 2026-05-16 保持较高开发活跃度，过去 24 小时内共合并 33 个 PR 并完成 1 个 Issue 的初步报告。项目整体进展稳健，重点集中在 UI/UX 优化、安全加固与性能提升三大方向。暂无新版本发布，但多项关键修复已合并至主分支。

> [GitHub Repository](https://github.com/netease-youdao/LobsterAI)

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日共处理 **36 个 PR**，其中 **33 项已合并**，**3 项待合并**。主要推进方向包括：

- **UI 交互增强**：新增 PPT 预览多标签页支持（#1989）、宽屏缩略图栏优化（#1990），显著提升文件预览体验；
- **IM 集成完善**：为 Telegram/Discord/QQ/POPO 添加 pairing code 输入框（#1987），解决 dmPolicy=pairing 下的审批阻塞问题；
- **会话稳定性修复**：修正 managed session 同步过程中因前缀裁剪导致的文本损坏（#1986）；
- **安全机制升级**：新增 nsp-clawguard 热开关配置（#1962），强化本地安全监控能力；
- **构建与文档清理**：移除遗留 URL 和过时文档（#1967），降低维护负担。

> 代表性合并 PR：[#1989](https://github.com/netease-youdao/LobsterAI/pull/1989), [#1987](https://github.com/netease-youdao/LobsterAI/pull/1987), [#1986](https://github.com/netease-youdao/LobsterAI/pull/1986)

---

### 4. **社区热点**
今日最活跃的 Issue 为 #1988：用户反馈在 LobsterAI v2.x 更新后，调用阿里百炼的 `qwen3.6-plus` 模型时系统强制切换至网易自有模型并提示“无额度”，即使修改配置文件亦无效。该问题影响 Coding Plan 功能可用性，疑似存在厂商绑定逻辑错误。

此 Issue 虽仅含 1 条评论，但涉及核心模型调用链路，且附带日志与截图证据，表明问题真实存在。目前尚无对应 Fix PR，需开发团队介入排查模型路由逻辑。

> [Issue #1988](https://github.com/netease-youdao/LobsterAI/issues/1988)

---

### 5. **Bug 与稳定性**
| 问题类型 | 严重程度 | 描述 | 状态 |
|--------|--------|------|------|
| 模型调用异常 | 高 | 阿里百炼 qwen3.6-plus 被强制替换为网易自有模型，配置失效 | 已报告（#1988），无 Fix PR |

其余今日提交的问题多为边缘场景或历史遗留项，均已由近期 PR 覆盖。例如：executionMode 配置不生效（#807）、重复 skill 安装（#827）等已在 3 月下旬完成修复并合并。

---

### 6. **功能请求与路线图信号**
用户持续推动以下方向的功能演进：

- **IM 渠道独立模型配置**（#838）：已合并，支持按平台指定模型，体现多租户运营需求；
- **MCP 批量导入优化**（#835）：JSON 粘贴模式上线，提升第三方工具集成效率；
- **技能管理增强**（#1185）：开放技能文件夹路径，方便开发者调试；
- **流式渲染性能**（#1186）：通过 memoization 优化大幅减少重渲染次数，预示未来将聚焦响应流畅性指标。

当前 PR #1985 提出“思考级别控制”（Thinking Level Control），允许用户在 Off/Minimal/High 等多档调节 AI 推理深度，结合已有 i18n 与 DB 迁移支持，具备纳入下一版本的潜力。

> [PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985)

---

### 7. **用户反馈摘要**
- **痛点**：模型厂商绑定导致第三方服务不可用，尤其在企业级客户使用阿里百炼时影响显著；
- **满意点**：PPT/Word 预览体验大幅改善，多标签页设计获积极评价；
- **期待**：希望保留更多模型选择自由，避免厂商锁定；同时对 IM Bot 的细粒度配置表示认可。

---

### 8. **待处理积压**
- **Issue #1988**（模型调用异常）：创建于昨日，尚未分配负责人，需优先处理以避免用户流失；
- **Issue #806 / #807**（性能瓶颈与配置失效）：虽已提交修复 PR，但截至今日仍标记为 stale，建议重新激活审查；
- **PR #1985**（Thinking Level 控制）：已开放超过 24 小时，处于待合并状态，需主程确认是否接受新交互范式。

> 建议本周内安排一次技术评审，集中处理上述积压项。

--- 

*数据截止：2026-05-16 18:00 UTC+8*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 - 2026年5月16日**

---

### 1. **今日速览**
过去24小时 Moltis 项目保持活跃开发节奏，共合并7个PR并完成4个Issue闭环，整体进展稳健。核心贡献者持续推动远程访问、TLS配置及Proxmox集成优化，同时通过依赖更新维护系统安全。项目未发布新版本，但功能迭代密集，社区反馈响应及时。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
**关键合并PR：**
- **[#987: Replace docs deployment with Astro site](https://github.com/moltis-org/moltis/pull/987)**  
  完成文档站点全面迁移至 Astro 框架，保留原有 Markdown 内容结构与 `.html` URL，显著提升文档可维护性与用户体验（含侧边栏导航、主题切换、搜索等增强功能）。
- **[#1002: feat(remote-access): add NetBird and Cloudflare Tunnel support](https://github.com/moltis-org/moltis/pull/1002) (OPEN)**  
  新增对 NetBird 私有网状网络与 Cloudflare Tunnel 的支持，涵盖配置管理、CLI 命令、REST API 路由及 WebAuthn 集成，强化零信任远程接入能力。
- **[#1000: feat(tls): support public IP SAN for generated certs](https://github.com/moltis-org/moltis/pull/1000)**  
  允许在自动生成的 TLS 证书中显式添加公网 IP 作为 Subject Alternative Name (SAN)，解决此前仅 localhost 有效的限制问题。
- **[#997: fix(install): tolerate missing Proxmox CA cert](https://github.com/moltis-org/moltis/pull/997)**  
  修复 Proxmox LXC 容器创建过程中因缺失 CA 证书导致的安装失败，提升部署鲁棒性。

---

### 4. **社区热点**
当前最活跃的讨论聚焦于 **#1002（NetBird & Cloudflare Tunnel 支持）**，虽暂无评论，但该 PR 由核心维护者 `penso` 提交，技术实现完整，标志项目正加速扩展企业级远程访问方案。其次为 **#987（Astro 文档站上线）**，虽已合并，但其带来的 UX 改进将持续吸引新用户关注。

---

### 5. **Bug 与稳定性**
今日共关闭4个 Bug Issue，均已有对应修复 PR 合并：
- **#996**: TLS 证书仅 localhost 生效 → 由 #1000 修复  
- **#994**: 聊天界面水平滚动条重现 → 由 #998 修复  
- **#993**: Proxmox 脚本第91行 LXC 创建失败 → 由 #997 修复  
- **#995**: portal-tunnel 中继通道需求 → 转为已实现功能（隐含于 #1002 相关逻辑）  

所有问题均为中低严重级别，无崩溃或安全漏洞报告。

---

### 6. **功能请求与路线图信号**
用户明确提出 **“Integration of `portal-tunnel` as a trustless relay channel” (#995)**，虽已标记为增强请求，但结合 #1002 对 NetBird/Cloudflare 隧道的深度集成，可推断该项目正将去中心化中继通道纳入长期架构规划，有望在下一版本中落地。

---

### 7. **用户反馈摘要**
- **痛点集中点**：  
  - TLS 证书域名/IP 绑定限制影响生产环境部署（#996）  
  - UI 布局缺陷导致移动端体验不佳（#994）  
  - Proxmox 自动化脚本容错机制不足（#993）  
- **正面信号**：用户对文档现代化（Astro 迁移）表示期待；对 OAuth 客户端密钥支持（#1001）反映实际需求强烈。

---

### 8. **待处理积压**
- **#1002** 为唯一开放的重要 PR，涉及两项关键技术集成，建议优先审核合并以释放远程访问能力升级。  
- 其余 Issue 均已闭环，无长期悬而未决的高优先级问题。

--- 

*数据来源：[moltis-org/moltis GitHub Repository](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-05-16）**

---

### 1. **今日速览**

过去24小时，CoPaw 社区保持较高活跃度，共处理 Issues 24 条、PRs 50 条，无新版本发布。项目整体处于稳定迭代阶段，重点围绕安全性增强、多通道支持优化及用户体验改进展开。社区反馈集中于身份混淆、定时任务上下文残留等关键问题，已有相关修复 PR 进入审查流程。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

今日合并/关闭的重要 PR 包括：

- **[PR #4427] Fix(WeCom): suppress duplicate "Thinking…" placeholder on rapid messages**  
  修复了企业微信群发消息过快时重复显示“🤔 Thinking…”的问题，提升前端交互一致性。  
  [agentscope-ai/QwenPaw PR #4427](https://github.com/agentscope-ai/QwenPaw/pull/4427)

- **[PR #4423] fix(plugin): resolve CloudPaw plugin issues and enhance Alibaba Cloud Skills remote hosting integration**  
  解决了 CloudPaw 插件导入错误，并增强了阿里云技能远程托管能力，支持更稳定的 A2A 调用。  
  [agentscope-ai/QwenPaw PR #4423](https://github.com/agentscope-ai/QwenPaw/pull/4423)

- **[PR #4409] Fix(backup): backup import restore trust controls**  
  强化了备份文件的签名验证机制，防止恶意备份注入，提升系统安全性。  
  [agentscope-ai/QwenPaw PR #4409](https://github.com/agentscope-ai/QwenPaw/pull/4409)

- **[PR #4387] feat(providers): allow custom base URL for Anthropic provider**  
  解除 Anthropic 提供商对固定 API 地址的锁定，允许用户自定义兼容端点（如代理或自建服务）。  
  [agentscope-ai/QwenPaw PR #4387](https://github.com/agentscope-ai/QwenPaw/pull/4387)

上述进展表明项目在安全性、第三方集成灵活性和用户体验方面持续深化。

---

### 4. **社区热点**

最活跃的 Issue 为：

- **[Issue #4299] write_file() 死循环报错**（7 条评论）  
  用户报告长文本输出时出现参数缺失错误，疑似工具调用逻辑缺陷。该问题影响文件操作稳定性，暂无公开 fix PR，需进一步排查。  
  [agentscope-ai/QwenPaw Issue #4299](https://github.com/agentscope-ai/QwenPaw/issues/4299)

- **[Issue #3957] Agent workspace 切换导致身份混淆**（已关闭，8 条评论）  
  主控 Agent 在多 Agent 通信中误切 workspace，引发严重身份错乱。此高危问题已被标记为已解决，推测有相关 PR 合并。  
  [agentscope-ai/QwenPaw Issue #3957](https://github.com/agentscope-ai/QwenPaw/issues/3957)

- **[PR #4407] feat(skills): add worldcup match companion skill**（新贡献者友好，足球助手功能）  
  引入世界杯赛事助手技能，支持赛程查询、比分推送等功能，体现社区扩展意愿。  
  [agentscope-ai/QwenPaw PR #4407](https://github.com/agentscope-ai/QwenPaw/pull/4407)

反映出用户对 **多智能体协作稳定性**、**长文本处理可靠性** 和 **垂直场景技能拓展** 的高关注度。

---

### 5. **Bug 与稳定性**

按严重程度排序的关键 Bug：

| 问题描述 | 严重性 | 状态 | 关联 PR |
|--------|------|------|-------|
| `write_file()` 参数缺失导致输出中断 | 高 | 开放 | 暂无 |
| Telegram 语音消息不支持 `AudioContent` | 中高 | 开放 | 暂无 |
| MiMo 思考模式 + 工具调用返回 400 | 高 | 已关（#4314） | 推测有修复 |
| 钉钉群聊引用消息无法读取 | 中 | 已关（#3109） | 可能已合并 |

> **结论**：存在若干影响核心功能的 Bug，其中部分已在近期 PR 中修复，但仍有用户报告新问题，建议加强回归测试覆盖。

---

### 6. **功能请求与路线图信号**

高频功能需求包括：

- **MCP 工具命名冲突隔离**（#4428）：多个同类型 MCP Server 注册同名工具导致失效，需前缀隔离。已有 PR 提交解决方案，预计纳入下一版本。
- **定时任务上下文清理开关**（#4432）：针对 #4162 提出“Clear Before Run”选项，防止历史会话污染自动化流程，体现对可靠性的重视。
- **内置插件可发现性**（#4406）：用户希望像技能一样浏览/安装 `/plugins/` 中的官方插件，暗示未来将构建插件市场机制。
- **链路追踪支持**（#4114）：明确询问是否计划实现 tracing 机制，反映生产环境可观测性需求增长。

这些请求均指向 **企业级部署支持** 和 **开发者体验优化** 方向。

---

### 7. **用户反馈摘要**

从 Issue 评论提炼真实痛点：

- **负面反馈集中点**：
  - 升级需卸载重装导致配置丢失担忧（#4430）
  - macOS 图标异常（#4412）
  - 企业微信单会话控制困难（#4116）
- **正面认可点**：
  - 多通道（钉钉/企业微信）支持逐步完善
  - Anthropic 提供商灵活性提升获赞
  - 安全加固措施（如备份签名）被肯定

用户普遍期待 **平滑升级路径** 和 **跨平台一致性**。

---

### 8. **待处理积压**

以下 Issue/PR 需维护者关注：

- **[Issue #1516] AudioContent not supported in Telegram channel**（创建于 2026-03-15，7 评论）  
  超期未处理，涉及主流通讯渠道音频处理能力。  
  [agentscope-ai/QwenPaw Issue #1516](https://github.com/agentscope-ai/QwenPaw/issues/1516)

- **[Issue #2751] Anthropic API 请求失败：content.type 'file' 不被支持**（创建于 2026-04-01）  
  文件发送后 LLM 交互失败，影响关键工作流。  
  [agentscope-ai/QwenPaw Issue #2751](https://github.com/agentscope-ai/QwenPaw/issues/2751)

建议优先分配资源处理此类长期悬而未决的高影响问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报（2026-05-16）**

---

### 1. **今日速览**

过去24小时，ZeroClaw 项目保持高度活跃状态：共处理 22 条 Issues（13 新开/活跃，9 已关闭）和 50 条 PR（44 待合并，6 已合并/关闭），无新版本发布。整体活跃度处于高位，重点集中在 SOP 引擎一致性、技能管理稳定性及安全策略完善三大方向。项目维护者响应及时，多个高风险 Bug 已进入修复流程。

---

### 2. **版本发布**

**无新版本发布**

---

### 3. **项目进展**

今日共 **6 个 PR 被合并或关闭**，其中显著推进的功能包括：

- **#6525**: 修复了 Matrix 频道中根时间线消息错误触发线程的问题，提升多平台消息结构一致性。
- **#6367**: 在 `/api/status` 中暴露构建时版本号，并在 Web UI 侧边栏显示，增强运维可观测性。
- **#6657**: CI 依赖扫描失败问题已被标记为“in-progress”，涉及 TLS 验证配置，预计近期修复。
- **#6400**: Docker bind mount 导致预构建仪表盘被覆盖的问题已确认并进入修复阶段。
- **#6402**: Bash 补全无限递归问题由 @Nillth 提交，已在 #6402 中详细描述，等待修复 PR。

此外，大版本 **v0.8.0（PR #6398）** 仍处于增量评审阶段，涵盖 Multi-Agent Runtime 与 Schema V3 重大升级，但尚未合并，需进一步社区反馈。

> 🔗 [查看所有合并 PR](https://github.com/zeroclaw-labs/zeroclaw/pulls?page=1&q=is%3Apr+is%3Amerged+updated%3A2026-05-16)

---

### 4. **社区热点**

最活跃的议题集中于 **SOP（Standard Operating Procedure）子系统的一致性与可见性问题**，尤其是以下 Issue：

- **[#6689] Production SOP audit is silently no-op**  
  用户报告 `sop_run_*` / `sop_step_*` 内存键从未写入，违背文档承诺的审计日志持久化机制。该问题由 @JordanTheJet 于今日发现并提交，引发对生产环境可靠性的关注。
  
- **[#6687] Two independent SopEngine instances per daemon**  
  MQTT 启动的 SOP 运行无法通过 `sop_status` 查询，因两个 `SopEngine` 实例完全隔离。此问题直接影响自动化 SOP 的可监控性。

- **[#6686] SOP cron triggers have no production caller**  
  尽管支持 Cron 触发器，但 `check_sop_cron_triggers` 函数无实际调用方，形同虚设。

这三者共同指向 **SOP 子系统在生产环境中的“文档承诺 vs 实现差距”**，反映用户对标准化操作流程可靠性的强烈需求。

> 💬 相关讨论热度高，且均无回复，需核心维护者优先介入。

---

### 5. **Bug 与稳定性**

按严重程度排序的重要 Bug：

| Issue | 严重度 | 类型 | 状态 | Fix PR |
|------|--------|------|------|--------|
| [#6681] `zeroclaw skills install clawhub:*` panics | S1 (workflow blocked) | 运行时崩溃 | OPEN | PR #6682（已提交） |
| [#6678] Skill工具命名违反 Anthropic API 规范 | S1 | API合规 | OPEN | 暂无 |
| [#6672] reasoning_content 未透传给 Xiaomi thinking 模型 | S0 (数据丢失风险) | LLM输出缺失 | OPEN | 暂无 |
| [#6654] Cron 只读查询仍触发写路径 | S3 (轻微问题) | 数据库性能 | CLOSED | 无（已关闭） |
| [#6402] Bash 补全无限递归 | S2 (行为退化) | CLI体验 | OPEN | 无 |

✅ **已有 Fix 的 Bug**：  
- **#6681** 已由 @abhinavmathur-atlan 在 PR #6682 中修复，将阻塞请求移至异步运行时，避免 tokio 冲突。

⚠️ **待修复高危问题**：  
- **#6678**：技能名称拼接方式违反正则 `^[a-zA-Z0-9_-]{1,128}$`，导致 Anthropic API 拒绝请求。
- **#6672**：小米推理模型启用思考模式时，`reasoning_content` 未被传递至后续轮次，造成信息断裂。

---

### 6. **功能请求与路线图信号**

关键新功能需求浮出水面：

- **[#6522] Web chat — tool approval UI for supervised-mode**  
  后端已实现 WebSocket 审批协议，但前端未处理 `approval_request` 帧。用户强烈期望图形化审批界面以支持人工监督敏感操作。

- **[#5316] SearXNG 搜索支持 + DuckDuckGo CAPTCHA 检测**  
  提议集成隐私搜索引擎并增强反机器人检测能力，体现用户对去中心化、抗审查搜索的需求。

- **[#6398] v0.8.0: Multi-Agent Runtime and Schema V3**  
  该 PR 明确规划下一版本核心架构升级，包括：多智能体上下文隔离、新配置 schema、跨通道会话持久化等。虽未合并，但已锁定为 v0.8.0 主线。

- **[#6253] zeroclaw skills UX 统一跟踪**  
  协调技能加载、安装、审计、测试的全链路 UX 改进，预示 v0.7.6 将重点优化开发者体验。

这些需求表明项目正从单机代理向多智能体协同、企业级可观测、开发者友好演进。

---

### 7. **用户反馈摘要**

从 Issues 中提取的真实用户痛点：

- **运维场景**：  
  > “我们在 Docker 部署中发现 `/zeroclaw-data` 挂载覆盖了内置仪表盘，必须手动恢复。”（#6400）  
  → 反映容器化部署中配置与构建产物混淆的风险。

- **安全焦虑**：  
  > “任何拥有 SessionResetTool 的 agent 都能删除他人会话，这违背最小权限原则。”（#5833）  
  → 强调细粒度访问控制的重要性。

- **国际化缺失**：  
  > “`skills install` 输出的 tier banner 是硬编码英文，不符合本地化要求。”（#6670）  
  → 用户明确要求支持 Fluent 国际化。

- **调试困难**：  
  > “SOP cron 触发后完全看不到执行状态，就像石头沉入海底。”（#6686 评论）  
  → 凸显 SOP 可观测性不足对运维的打击。

总体满意度偏低，尤其在 **可靠性、透明度和文档一致性** 方面存在普遍不满。

---

### 8. **待处理积压**

以下 Issue/PR 长期缺乏维护者回应，需特别关注：

| ID | 标题 | 天数未动 | 优先级 | 建议行动 |
|----|------|----------|--------|----------|
| [#5779] gated_commands TOTP gate | 31 天 | P2 | 审查是否可行，若不可行则关闭或提供替代方案 |
| [#5316] SearXNG support | 41 天 | P2 | 评估第三方依赖引入成本 |
| [#6074] Audit 153 lost commits | 22 天 | P2 | 恢复历史提交或归档说明 |
| [#6253] Skills UX tracker | 15 天 | P1 | 应尽快分配负责人启动 v0.7.6 规划 |

尤其 **#5779** 涉及核心安全特性，建议本周内给出明确结论。

---

**总结**：今日 ZeroClaw 在稳定性与安全加固上进展显著，但 SOP 子系统暴露出严重实现缺口；社区对多模态支持、国际化和企业级可观测需求迫切。维护团队需在下一周内优先处理 SOP 一致性与技能安装崩溃问题，以避免用户流失。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*