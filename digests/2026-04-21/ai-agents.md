# OpenClaw 生态日报 2026-04-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-21 00:26 UTC

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

**OpenClaw 项目动态日报（2026-04-21）**

---

### 1. **今日速览**

OpenClaw 在 2026-04-21 保持高度活跃状态，过去24小时内处理了500条 Issues 和 500条 PR 更新，显示出社区贡献者持续高强度参与。项目整体运行平稳，无新版本发布，但修复类 PR 占比显著，表明团队正聚焦于稳定性与用户体验优化。新增 Issue 数量略高于关闭数（314 vs 186），反映问题排查仍在进行中，但合并 PR 达160个，说明开发节奏稳健。

---

### 2. **版本发布**

**无新版本发布**。当前最新稳定版仍为 2026.4.15，自上周起未推出正式 Release。

---

### 3. **项目进展**

今日合并的重要 PR 包括：
- **PR #43961**（已合并）：修复了 `restartLaunchAgent()` 在优雅关闭超时后未能 SIGKILL 残留进程的问题（#43960），提升 macOS 网关重启可靠性。
- **PR #57737**（已合并）：将 Telegram 轮询 stall 检测阈值从 90秒提升至 300秒，避免 LLM 响应期间误判导致不必要的重启（#57660）。
- **PR #68721**（已合并）：调整 Codex app-server 默认审批策略为 `on-request`，增强安全性，防止命令执行绕过人工确认。
- **PR #43392**（已合并）：解决 WebSocket 升级过程中的竞态条件，消除 1006 异常断开错误。

这些合并表明核心网关稳定性、插件安全性和跨平台兼容性得到系统性加固。

---

### 4. **社区热点**

最活跃的 Issue 为：
- **[Issue #75]** Linux/Windows Clawdbot Apps 缺失请求（👍71，评论88）：用户强烈呼吁支持 Linux 和 Windows 原生桌面应用，类比现有 macOS/iOS/Android 实现。该需求长期存在，是生态扩展的关键缺口。
- **[Issue #37623]** openai-codex/gpt-5.4 配置显示但运行时不可用（👍7，评论16）：暴露模型注册机制与运行时支持脱节问题，影响可信度。
- **[Issue #68944]** CLI 命令卡在 WebSocket 握手阶段：新反馈指出 v2026.4.15 出现 CLI 连接阻塞，疑似回归，需紧急排查。

相关 PR 如 #69479 正尝试分离插件运行时依赖以提升 CLI 响应速度，间接回应此类性能诉求。

---

### 5. **Bug 与稳定性**

按严重性排序的关键 Bug：

| 排名 | Issue # | 描述 | 严重性 | 是否已有 Fix |
|------|--------|------|--------|--------------|
| 1 | #65603 | Azure Foundry GPT 模型无法使用 reasoning 或 tool calling（回归） | 高 | ✅（#68310 等正在修复） |
| 2 | #68944 | CLI 命令在 v2026.4.15 卡死在 WebSocket 握手 | 高 | ⚠️ 待处理 |
| 3 | #68735 | GitHub Copilot gpt-5-mini 后续请求失败（回归） | 中 | ⚠️ 待处理 |
| 4 | #65093 | Chrome CDP 端口在 macOS 上不可达（v2026.4.11） | 中 | ✅（已关闭） |
| 5 | #35805 | 缺乏治理文件漂移检测，导致静默协调失败 | 中 | ⚠️ 长期未决 |

已有多个 PR（如 #69310、#69444）着手改善媒体失败提示和推理内容提取，提升错误可见性。

---

### 6. **功能请求与路线图信号**

- **[Feature Request #34097]** 提出原生 MCP 协议集成需求，反映 Claude Desktop/Cursor 等工具链趋势，可能预示未来扩展方向。
- **[Enhancement #6731]** 建议用 Rust 重写以引入沙箱安全模式，虽激进但契合“safe/unsafe”设计理念，可能影响架构演进决策。
- **[PR #10356]** 新增 Typecast TTS 提供商，支持情感预设与亚洲语言，显示语音能力正在多元化扩展。

结合近期 PR 对 Gemini TTS audioProfile（#69321）、SearXNG JSON 配置提示（#65592）的支持，表明项目正向易用性与多模态体验深化。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - 跨平台一致性差：Linux/Windows 客户端缺失引发广泛不满（#75）。
  - 配置复杂易出错：OAuth token 持久化失败（#52037）、Cron 任务延迟（#34744）等问题频发。
  - 媒体处理不可靠：Telegram 重复消息、Feishu 流卡片截断、浏览器 CDP 失联均影响关键场景。
- **满意之处**：
  - Web UI 交互流畅，滚动控制优化 PR 获积极关注（#69499、#69504）。
  - 内存管理扩展（memory-core）状态可视化改进受认可（#67910）。

---

### 8. **待处理积压**

以下 Issue 需维护者优先关注：

- **[#75] Linux/Windows Clawdbot Apps**：超5个月未解决，涉及平台覆盖率战略，建议列入 Q2 roadmap。
- **[#37623] gpt-5.4 虚假支持**：误导用户，应尽快修复或标注“实验性”状态。
- **[#35805] 治理文件漂移检测缺失**：长期静默风险，建议结合 heartbeat 机制加入健康检查。
- **[#34097] 原生 MCP 支持**：虽非紧急，但可作为长期技术债跟踪，评估社区 MCP 工具使用率。

---

**数据来源**：GitHub.com [@openclaw/openclaw](https://github.com/openclaw/openclaw)  
**生成时间**：2026-04-21

---

## 横向生态对比

好的，作为一位资深技术分析师，我将为您生成这份横向对比分析报告。

---

### **个人 AI 智能体开源生态横向对比分析报告 (2026-04-21)**

#### **1. 生态全景**

当前个人 AI 助手/自主智能体开源生态正处于从概念验证向生产可用快速演进的关键阶段。核心项目普遍聚焦于提升系统稳定性、安全性和跨平台兼容性，同时积极扩展多模态交互与外部工具集成能力（MCP）。社区活跃度分化明显，部分项目通过架构升级（如微内核化、WASM支持）引领技术前沿，而另一些则致力于打磨用户体验与文档完善。整体来看，生态正朝着更模块化、更安全可靠、更易集成的方向发展，为开发者提供了丰富的选择。

#### **2. 各项目活跃度对比**

| 项目名称 | Issues 数 (新增) | PR 数 (处理) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 314 (新增) | 500 (更新) | 无新版本 | **极高活跃，高贡献密度** |
| NanoBot | 12 (更新) | 51 (更新) | 无新版本 | **稳定迭代，聚焦优化** |
| Hermes Agent | 50 (更新) | 50 (更新) | 无新版本 | **高活跃开发，功能扩展** |
| PicoClaw | 13 (新增) | 114 (更新) | Nightly v0.2.6 | **快速演进，高密度PR** |
| NanoClaw | 1 (新增) | 25 (更新) | 无新版本 | **稳健交付，功能扩展** |
| NullClaw | 1 (新增) | 3 (待合并) | 无新版本 | **专注稳定性修复** |
| IronClaw | 41 (活跃) | 50 (更新) | 无新版本 | **Engine V2 质量改进** |
| LobsterAI | 1 (新增) | 50 (更新) | 无新版本 | **高效开发，UI/UX优化** |
| TinyClaw | 0 | 1 (合并) | 无新版本 | **低强度运维** |
| Moltis | 9 (更新) | 17 (更新) | v20260420.02 | **高质量合并，版本发布** |
| CoPaw | 42 (更新) | 50 (更新) | `v1.1.3-beta.1` | **功能快速迭代，问题修复** |
| ZeptoClaw | 0 | 0 | 无活动 | **暂无动态** |
| ZeroClaw | 44 (更新) | 50 (更新) | 无新版本 | **微内核落地，S1级修复** |

**健康度评估说明**：
*   **极高活跃，高贡献密度**：OpenClaw 以每日500条Issues和PR的处理量，展现了无与伦比的社区活力和开发密度。
*   **稳定迭代，聚焦优化**：NanoBot 和 NanoClaw 等保持稳定节奏，侧重于性能和安全性的持续优化。
*   **快速演进，高密度PR**：PicoClaw 的114个PR在24小时内更新，显示出极高的开发推进速度。
*   **专注稳定性修复**：NullClaw 和 TinyClaw 专注于解决现有Bug，维护系统稳定。
*   **功能快速迭代，问题修复**：CoPaw 和 LobsterAI 在功能增强和问题修复上并行推进，版本更新频繁。
*   **微内核落地，S1级修复**：ZeroClaw 处于架构转型关键期，对严重问题反应迅速。

#### **3. OpenClaw 在生态中的定位**

*   **优势**：
    *   **生态参照点**：作为“核心参照”，OpenClaw 无疑是生态中最具影响力的项目之一，其庞大的用户基础和活跃的社区为其他项目提供了重要的借鉴和集成目标。
    *   **全面性**：覆盖 macOS、iOS、Android、Linux、Windows 等多个平台，提供网关、CLI、Web UI等多种接入方式，功能模块齐全。
    *   **企业级特性**：强调安全性（审批策略、OAuth）、稳定性（优雅关闭、竞态条件修复）和治理能力（文件漂移检测），适合复杂生产环境。
*   **技术路线差异**：
    *   OpenClaw 更偏向于构建一个**全能型、企业级**的个人智能体平台，注重多通道集成、安全管控和跨平台一致性。
    *   相比之下，Hermes Agent 更强调**高级认知能力**（如长期记忆 `hermes_mem`）和多模态交互（原生 Gemini STT）。
    *   Moltis 则突出**自进化代理循环**和沙箱技能库，定位为更智能的自主系统。
    *   ZeroClaw 正在转向**微内核架构**，追求极致的模块化和可扩展性。
*   **社区规模对比**：
    *   OpenClaw 的 Issue 和 PR 数量远超其他项目，表明其拥有**最大的社区规模和最强的贡献者参与度**。

#### **4. 共同关注的技术方向**

*   **MCP (Model Context Protocol) 深度集成**：
    *   **诉求**：几乎所有项目都在积极引入或增强对 MCP 的支持（OpenClaw `#34097`, NanoBot 多个 PR, Hermes Agent 社区热点, PicoClaw `#2600`, NanoClaw 技能生态, IronClaw PR #2699, CoPaw ACP Integration PR #3589）。这表明 MCP 已成为连接 AI 智能体与外部工具和服务的标准协议，是提升智能体功能性和互操作性的关键。
*   **多模态交互与模型支持**：
    *   **诉求**：扩展对视觉、语音等输入输出的支持（OpenClaw Typecast TTS `#10356`, Hermes Agent 原生 Gemini STT `#13174`, Moltis Web UI Markdown `#808`）以及增加对主流大模型提供商和新型模型（如 Kimi K2.6 `#809`）的兼容性，以满足用户对多样化交互方式和更强推理能力的需求。
*   **稳定性与错误处理**：
    *   **诉求**：修复各类 Bug，特别是网关稳定性（OpenClaw WebSocket 竞态条件 `#43392`, NullClaw CPU 满载 `#851`）、认证流程（PicoClaw OAuth 丢失作用域 `#2163`）和跨平台兼容性（NanoBot Windows DevTools `#3324`），确保系统在真实场景下的可靠运行。
*   **安全性与治理**：
    *   **诉求**：增强安全措施（CoPaw Shell Evasion Guard `#3400`, ZeroClaw Shell 命令过滤 `#5773`）、配置漂移检测（OpenClaw `#35805`）和权限管理（IronClaw 密钥绑定 `#2754`），以应对日益复杂的攻击面和治理挑战。

#### **5. 差异化定位分析**

| 项目名称 | 功能侧重 | 目标用户 | 技术架构 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型平台**，强调企业级网关、多通道集成、跨平台一致性、安全与治理。 | **企业用户、重度个人用户、系统集成商**，需要强大且可信的个人智能体中枢。 | **成熟的多层架构**，涵盖网关、CLI、Web UI、移动端等，模块化程度高。 |
| **NanoBot** | **轻量级、高性能**，聚焦消息总线优化、内存泄漏防护、插件安全，以及企业级可控性（人工接管）。 | **开发者、小型团队**，寻求灵活、高效的本地或私有部署 AI 助手。 | **精简高效的内核设计**，注重运行时性能和资源管理。 |
| **Hermes Agent** | **高级认知与多模态**，探索长期记忆 (`hermes_mem`)、原生 Google 提供商支持、CLI 交互体验。 | **AI 研究者、对高级智能体功能感兴趣的开发者**，追求超越基础通信的智能交互。 | **模块化架构**，允许逐步引入高级功能如记忆系统和多模态处理。 |
| **PicoClaw** | **嵌入式与边缘计算**，支持 Raspberry Pi 等低功耗设备，强调第三方提供商兼容性和多通道（LINE, QQ）。 | **物联网开发者、边缘计算爱好者、特定行业应用开发者**。 | **资源感知设计**，针对嵌入式系统进行优化。 |
| **NanoClaw** | **技能驱动、多云集成**，通过丰富的技能库（Ollama, Signal v2, Home Assistant）实现自动化工作流。 | **自动化爱好者、智能家居用户、DevOps 工程师**，希望通过技能扩展实现复杂任务。 | **高度插件化**，技能作为核心抽象，支持快速集成。 |
| **NullClaw** | **极简主义、边缘设备专用**，专注于网关的稳定性和边缘设备的兼容性（RTC-less 硬件）。 | **树莓派等边缘计算用户、嵌入式 Linux 开发者**。 | **极简内核**，专注于网关的核心功能，避免臃肿。 |
| **IronClaw** | **企业级 Engine V2**，强调数据迁移、密钥自助管理、MCP 服务器规范化。 | **需要企业级 AI 代理平台的企业**，注重生态兼容性和内部管理工具。 | **Engine V2 架构**，可能基于 OpenClaw/Hermes 进行二次封装和增强。 |
| **LobsterAI** | **多平台 IM 集成**，专注于钉钉、Popo 等中国本土 IM 平台的连接器优化和安装程序改进。 | **中国本土企业、IM 重度用户**。 | **连接器-centric 设计**，针对不同 IM 平台定制适配器。 |
| **TinyClaw** | **配置一致性与稳定性**，修复配置忽略问题，提升系统可预测性。 | **希望获得稳定、可预测行为的个人用户**。 | **简洁明了**，专注于核心心跳和配置逻辑。 |
| **Moltis** | **自进化代理、沙箱技能**，提供预打包技能库、自进化循环机制、Node.js LTS 沙箱。 | **寻求高级自主代理能力的开发者、AI 应用构建者**。 | **沙箱化技能执行环境**，支持 Node.js 脚本和自进化逻辑。 |
| **CoPaw** | **Agent 智能与协作**，引入 Plan 模式、语义技能路由、多 Agent 管理、ACP 集成、备份恢复。 | **希望构建复杂 Agent 工作流和协作系统的开发者**。 | **多 Agent 框架**，强调 Agent 间的交互和协作。 |
| **ZeroClaw** | **微内核、自治智能体**，探索 WASM 插件、Dream Mode（周期性内存整合）、多后端存储。 | **前沿 AI 探索者、追求极致模块化与自治性的开发者**。 | **微内核架构**，核心极小，功能通过插件和扩展实现。 |

#### **6. 社区热度与成熟度**

*   **快速迭代阶段**：
    *   **OpenClaw**、**PicoClaw**、**CoPaw**、**ZeroClaw**：这些项目 Issue 和 PR 数量庞大，功能更新频繁，Bug 修复速度快，处于高速发展期。
    *   **Hermes Agent**、**Moltis**：同样具有高活跃度，正在积极引入新功能和技术前沿探索。
*   **质量巩固阶段**：
    *   **NanoBot**、**NanoClaw**、**NullClaw**、**TinyClaw**：这些项目的开发重点更多放在性能优化、稳定性修复和安全性加固上，体现出对产品质量的重视。
    *   **IronClaw**：虽然活跃，但主要围绕 Engine V2 的质量改进和测试套件建设，属于内部架构升级阶段。
    *   **LobsterAI**：高效开发，但社区讨论较少，更偏向内部迭代。
*   **生态影响者**：OpenClaw 和 Hermes Agent 凭借其庞大的社区和广泛的功能，对整个生态的发展方向和集成标准产生了深远影响。

#### **7. 值得关注的趋势信号**

*   **MCP 将成为通用协议**：几乎所有项目都积极拥抱 MCP，预示着它将是未来 AI 智能体连接外部世界的标准桥梁，开发者应优先掌握。
*   **从“能做事”到“会思考”**：除了基础的通信和任务执行，项目如 Hermes Agent (`hermes_mem`)、Moltis (自进化循环)、CoPaw (Plan 模式)、ZeroClaw (Dream Mode) 都在探索如何让 AI 智能体具备更高级的认知能力，如长期记忆、自主规划和反思学习。这是下一代智能体的核心。
*   **安全治理不可忽视**：Shell 逃逸防护、OAuth 流程加固、配置漂移检测等安全议题频繁出现，表明随着智能体能力的增强，其面临的安全风险也在增大，安全将成为标配。
*   **边缘与嵌入式场景升温**：PicoClaw (Raspberry Pi)、NullClaw (边缘设备)、ZeroClaw (ARM64) 等项目显示，将 AI 智能体部署到本地边缘设备的需求正在增长，这有助于保护隐私和降低延迟。
*   **企业级特性需求明确**：密钥自助管理、数据迁移工具、审计日志、审批流程等企业级功能在 IronClaw、OpenClaw 等项目中均有体现，说明市场对生产级 AI 智能体平台的需求日益强烈。

**对 AI 智能体开发者的参考价值**：
1.  **选择合适的技术栈**：根据你的应用场景（企业级、边缘计算、高级智能体）选择合适的开源项目作为基础。
2.  **关注 MCP 生态**：深入学习和集成 MCP，这将极大拓展你的 AI 智能体的功能和互操作性。
3.  **重视安全与治理**：在设计阶段就考虑安全措施，并实现必要的治理机制，以应对潜在风险。
4.  **探索高级智能体能力**：如果你希望构建更智能的 Agent，可以参考 Hermes Agent、Moltis、CoPaw、ZeroClaw 等项目在记忆、规划、自进化方面的探索。
5.  **参与社区贡献**：OpenClaw 等项目的巨大社区规模意味着有更多的机会获得帮助、反馈和贡献代码，加速你的开发进程。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-04-21）**

---

### 1. **今日速览**
过去24小时，NanoBot 社区活跃度显著上升，共处理51条 Pull Request（PR）和12条 Issue，其中7个问题已关闭、7个PR待合并。项目在性能优化与稳定性修复方面持续推进，尤其在消息总线队列管理和内存泄漏防护上取得关键进展。整体开发节奏稳健，无重大版本发布，但技术债清理和用户体验增强成为当前重点方向。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**

**关键合并/关闭 PR：**
- **#3180**：修复 MessageBus 队列无界增长问题，为 inbound/outbound 队列添加默认容量限制（100），防止内存耗尽；outbound 保持非阻塞以确保用户回复不丢失。[PR链接](https://github.com/HKUDS/nanobot/pull/3180)
- **#3181**：实现历史记录写入批处理机制，将多次 `append_history` 合并为单次 `writelines()` 调用，显著提升 I/O 效率。[PR链接](https://github.com/HKUDS/nanobot/pull/3181)
- **#3299**：修复 `/stop` 命令导致当前对话上下文完全丢失的问题，保留部分中间结果供后续继续执行。[PR链接](https://github.com/HKUDS/nanobot/pull/3299)
- **#3240**：强化 #2989 安全防护，防止通过 shell 扩展绕过对敏感文件（如 `history.jsonl`）的访问限制。[PR链接](https://github.com/HKUDS/nanobot/pull/3240)

这些改进共同提升了系统在高负载下的可靠性、安全性及响应速度。

---

### 4. **社区热点**

**最活跃议题：**
- **#2389 [OPEN]**：用户提议将 OpenWebUI 作为官方支持渠道。该请求虽创建于3月23日，但在4月20日更新，反映社区对统一前端接入平台的强烈需求。[Issue链接](https://github.com/HKUDS/nanobot/issues/2389)
- **#3326 [CLOSED]**：建议增加 MCP root-level 通知订阅能力（如 `notifications/scheduled-reminder`），属于功能增强类提案。[Issue链接](https://github.com/HKUDS/nanobot/issues/3326)
- **#3322 [OPEN]**：提出“人工接管”机制，允许用户主动暂停 bot 并转接真人客服，尤其针对 WhatsApp 等商业场景。[Issue链接](https://github.com/HKUDS/nanobot/issues/3322)

背后诉求集中在**多平台集成扩展性**与**生产环境可控性**，显示 NanoBot 正从实验性 AI Agent 向企业级部署演进。

---

### 5. **Bug 与稳定性**

| 严重程度 | Issue 编号 | 问题描述 | 是否已有 Fix |
|--------|------------|----------|--------------|
| 高     | #3324      | Windows 下集成 chrome-devtools-mcp 报错 `WinError 193: %1 is not a valid Win32 application` | 否（新提报） |
| 中     | #3328      | DeepSeek 模型返回反序列化失败错误（deserialize error） | 否（新提报） |
| 中     | #3315      | Telegram 通道因单条消息过长导致发送失败 | 已关闭（可能修复中） |
| 低     | #3073      | Agent 陷入无限读取 `history.jsonl` 的循环 | 已关闭 |

其中 #3324 和 #3328 涉及跨平台兼容性与模型接口变更，需优先排查；#3315 和 #3073 表明历史记录处理逻辑仍存在边界条件缺陷。

---

### 6. **功能请求与路线图信号**

- **MCP 深度集成**：多个 PR（如 #3303、#3338）聚焦 MCP 工具重试机制、状态管理、图像内容支持，预示下一阶段将强化与外部智能体生态的连接能力。
- **行为学习与反馈闭环**：PR #3339 引入《行为学习指南》，鼓励基于 workspace 和 Dream 实现持久化策略调整，虽非核心代码改动，但为未来“学习型 agent”打下基础。
- **人工干预机制**：Issue #3322 和 PR #3299 共同指向对 `/bot on/off` 或手动挂起的支持，可能成为 v0.2.0 的核心特性之一。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - Windows 用户遭遇原生二进制兼容性问题（#3324）；
  - 多轮对话中 `/stop` 后丢失进度严重影响调试体验（#2966）；
  - QQ 渠道缺乏流式传输易触发风控（#3333）；
  - 长消息在 Telegram 被截断（#3315）。

- **积极反馈**：
  - 用户对性能优化 PR（如批处理、缓存）给予认可；
  - 社区赞赏对安全漏洞的快速响应（#3240）；
  - 期待 OpenWebUI 等通用前端集成以提升易用性。

---

### 8. **待处理积压**

- **#2389**（OpenWebUI 支持）：创建超30天，持续获得关注，建议评估技术可行性并给出 roadmap 说明。
- **#2921**（MS Teams 重启通知配置冗余）：暴露文档与实现在不一致，可能影响配置管理清晰度。
- **#2966**（/stop 上下文丢失）：已于昨日由 #3299 修复，但需验证回归测试覆盖。

建议维护团队优先响应高关注度 Issue，避免社区热情流失。

--- 

*数据来源：GitHub HKUDS/nanobot，统计周期：2026-04-20 至 2026-04-21*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026-04-21）**

---

### 1. **今日速览**

过去24小时内，Hermes Agent 社区活跃度显著提升，共产生50条 Issue 更新与50条 PR 动态。项目整体处于高活跃开发状态，新增功能、平台适配与稳定性修复并行推进。尽管无新版本发布，但多个关键模块（如 TUI、网关 API、OAuth 流程）持续迭代优化。

---

### 2. **版本发布**

**无新版本发布**。当前最新 Release 仍为历史版本，暂无重大功能更新或破坏性变更发布。

---

### 3. **项目进展**

本周期合并/关闭的重要 PR 聚焦于内存架构设计、TUI 稳定性及跨平台兼容性增强：

- **[PR #13119] 修复 Anthropic 流式传输中断后的格式错乱问题**  
  当 `_interruptible_streaming_api_call` 在 Anthropic 模式下失败时，此前返回的占位符使用 OpenAI 格式，导致验证错误。该 PR 统一使用 `api_mode` 对应的响应格式，确保消息一致性。  
  ✅ 已合并 | [链接](https://github.com/NousResearch/hermes-agent/pull/13119)

- **[PR #13173] 修复网关重启时的僵尸任务问题**  
  移除 `_run_restart` 任务对 `_background_tasks` 的错误注册，避免其在清理过程中被意外取消，防止重启后残留未释放资源。  
  ✅ 已合并 | [链接](https://github.com/NousResearch/hermes-agent/pull/13173)

- **[PR #13174] 引入原生 Gemini 多模态 STT 支持**  
  新增 `gemini-native-transcription` 提供者，利用 Gemini 的跨模态能力实现高质量语音转文本，区别于传统 Whisper 方案，支持 Auditory Scene Analysis。  
  🚧 待合并 | [链接](https://github.com/NousResearch/hermes-agent/pull/13174)

- **[PR #11685 / #13236] `hermes_mem` 设计与原型文档发布**  
  发布首个 `hermes_mem` 操作内存子系统设计方案，包含 SQLite + FTS5 索引草案、插件接口规范及 MVP 实施路线图，标志长期记忆功能正式启动规划。  
  🚧 待合并 | [链接](https://github.com/NousResearch/hermes-agent/pull/13236)

这些进展表明项目正从基础通信层向高级认知能力（如持久化记忆、多模态交互）演进，架构逐步模块化。

---

### 4. **社区热点**

最活跃的议题围绕 **外部内存扩展（Mempalace）** 与 **原生 Google 提供商支持**：

- **[Issue #6323] Add mempalace for external memory support**  
  获 21 个点赞，用户强烈呼吁集成 mempalace 实现跨会话结构化记忆，以支持长上下文任务。提案引用其 GitHub 仓库，并强调“超越上下文窗口”的能力价值。  
  🔗 [链接](https://github.com/NousResearch/hermes-agent/issues/6323)

- **[Issue #12639] Support for Native Google / Vertex AI Provider**  
  因 OpenRouter 频繁触发 402 计费错误，用户请求绕过中间层直连 Google 官方 API，减少延迟与限制风险。已有 2 人赞同，反映主流用户对去中心化路由依赖的不满。  
  🔗 [链接](https://github.com/NousResearch/hermes-agent/issues/12639)

此外，CLI 用户体验改进（如 Shift+Enter 换行）也获关注，显示社区重视交互流畅度。

---

### 5. **Bug 与稳定性**

严重 Bug 主要集中在 API 兼容性与配置解析层面，多数已有对应修复 PR：

| 严重等级 | Issue 描述 | 是否修复 |
|--------|------------|---------|
| ⚠️ High | StepFun JSON 截断导致无效 payload（#12242） | ✅ 已关闭，关联 PR #13119 间接解决 |
| ⚠️ High | OAuth PKCE 路径不匹配 RFC 8707（#10271） | ❌ 开放中，需 MCP SDK 协同调整 |
| ⚠️ High | Telegram username 输入引发 ValueError（#13206） | ✅ 有 PR #13206 待处理 |
| ⚠️ Medium | iCloud Drive 文件读取阻塞系统提示构建（#10047） | ❌ 开放中，需异步 I/O 优化 |

特别值得注意的是 **工具调用无限循环崩溃问题（#13208）**，报告称 Hermes 在简单语法错误下反复重试超 90 次，暴露缺乏失败检测机制，属高危稳定性漏洞，尚无 PR 回应。

---

### 6. **功能请求与路线图信号**

用户明确提出以下功能需求，结合现有 PR 判断其纳入可能性：

- **外部结构化记忆系统**（#6323 + PR #13236）：已通过 `hermes_mem` 设计文档确认优先级，预计纳入 v0.10.0 里程碑。
- **原生 Google/Vertex AI 支持**（#12639）：技术可行性强，但需评估密钥管理复杂度，可能作为可选模块发布。
- **Windows WSL 自动启动脚本**（PR #13179）：填补部署空白，预计近期合并以提升新手体验。
- **Webhook 第一类能力曝光**（#13201）：已有代码基础，将升级为官方文档与 CLI 命令，强化事件驱动架构。

---

### 7. **用户反馈摘要**

真实痛点集中在 **配置复杂性** 与 **跨平台一致性**：

- NeuTTS 安装失败（#3002）：用户抱怨虚拟环境中 pip 缺失，反映环境初始化脚本不完善。
- Docker Compose 模型配置困难（#12188）：缺乏文档说明如何内联设置模型参数，需增强 compose 模板示例。
- Telegram 群组会话分裂（#13195）：非预期 `message_thread_id` 导致逻辑混乱，影响团队协作体验。
- Slack Block Kit 不支持表格（#8552）：旧版 mrkdwn 限制富文本表达，阻碍复杂通知展示。

正面反馈则认可 TUI 颜色可配置性改进（#11300）及网关健康检查增强（#9751）。

---

### 8. **待处理积压**

以下重要 Issue 长期未获响应，建议维护者优先处理：

- **[Issue #10271] OAuth 2.1 PKCE 路径不匹配**：自 4 月 15 日提交，涉及 RFC 合规性，影响安全敏感场景。
- **[Issue #13208] 工具调用无限循环崩溃**：高危生产环境问题，无进展记录，需紧急排查。
- **[Issue #6323] Mempalace 集成**：虽热度高，但核心开发者尚未明确时间表，可能影响社区信心。

---

📌 **总结**：Hermes Agent 正处于功能扩展与稳定性加固的关键阶段。社区对高级能力（如持久记忆、原生提供商）期待强烈，同时亟需解决跨平台配置与异常鲁棒性问题。维护者应重点关注 OAuth 合规、TUI 内存泄漏及无限重试等高危项。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 - 2026年4月21日**

---

### 1. **今日速览**

过去24小时，PicoClaw 社区活跃度显著提升，共新增13个 Issues 与114个 Pull Requests，其中待合并 PR 达106条，显示开发团队正在高强度推进功能迭代。同时发布了一个 nightly 版本（v0.2.6-nightly.20260420.6126ede9），表明项目处于快速演进阶段。整体来看，项目在稳定性、多通道支持及第三方提供商兼容性方面持续优化，但部分关键 Bug 仍待解决。

---

### 2. **版本发布**

今日发布 **nightly 版本：v0.2.6-nightly.20260420.6126ede9**  
此为自动化构建的夜间快照，可能包含未充分测试的功能变更，建议生产环境谨慎使用。

主要更新内容见完整日志：  
🔗 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

该版本未报告重大破坏性变更，但基于 Issue #2578 和 #2597 反馈，可能存在授权头丢失与模型名大小写敏感问题，需用户注意配置一致性。

---

### 3. **项目进展**

本周重要合并/关闭 PR 包括：

- **PR #2343**: 修复 Antigravity 提供商无法访问 Gemini 3.1 系列模型的问题，通过升级客户端版本至 v1.25.0，显著扩展了对 Google Cloud Code Assist 新模型的支持。  
  ✅ 已合并 | 🔗 [sipeed/picoclaw/pull/2343](https://github.com/sipeed/picoclaw/pull/2343)

- **PR #2163**: 解决 Google Antigravity OAuth token refresh 过程中丢失作用域（scopes）的问题，提升认证流程可靠性。  
  ⏳ 开放中，高关注度 | 🔗 [sipeed/picoclaw/pull/2163](https://github.com/sipeed/picoclaw/pull/2163)

- **PR #2413**: 将 LINE 频道从自研 HTTP/HMAC 实现迁移至官方 SDK v8，降低维护成本并增强安全性。  
  ⏳ 开放中，代码质量高 | 🔗 [sipeed/picoclaw/pull/2413](https://github.com/sipeed/picoclaw/pull/2413)

此外，多个长期活跃 PR 如 QQ 连接稳定性优化（#1780）、MCP 管理器重构（#1666）仍在持续集成中，体现架构级改进方向。

---

### 4. **社区热点**

当前最受关注议题为 **#2578** —— OpenAI Compatible 提供商在 v0.2.6 中完全缺失 `Authorization` header，导致所有 API 调用失败。此问题影响广泛，已有11条评论，涉及多种部署方式（Docker、二进制包等）。开发者确认系配置读取逻辑缺陷所致，亟需热修复。

另一热点是 **#2421**：用户强烈呼吁增加原生邮件（Email）通道支持，尤其适用于企业级或封闭网络环境。该请求获得持续关注，虽暂无直接 PR，但反映社区对通信渠道多样化的迫切需求。

此外，**PR #2313**（Multi-User Support & Security Hardening）因引入“Agent Shield”安全套件引发热议，被视为未来版本的核心路线图信号。

---

### 5. **Bug 与稳定性**

按严重程度排序的关键 Bug：

| 优先级 | Issue # | 问题描述 | 状态 |
|--------|---------|----------|------|
| ⚠️ High | #2578 | OpenAI Compatible 无 Authorization Header | 未修复，影响广泛 |
| ⚠️ High | #2597 | 网关启动失败（模型名含大写字母） | ✅ 已关闭（同问题 PR #2596 合并） |
| ⚠️ High | #2584 | DeepSeek 返回 401 认证错误 | ✅ 已关闭（推测由 #2578 连带修复） |
| 🟡 Medium | #2598 | Web UI 在 v0.2.6 升级后无法正常加载 | 开放中，需前端排查 |
| 🟡 Medium | #2368 | Android 端模型显示“未配置”但实际已设密钥 | 开放中，UI/配置同步问题 |

已有相关修复 PR 提交（如 #2596 针对大写模型名），表明核心问题正在处理中。

---

### 6. **功能请求与路线图信号**

- **邮件通道支持**（#2421）：用户明确要求添加 Email 作为原生通道，适用于无即时通讯工具的企业场景。暂无直接实现 PR，但技术可行性高，预计纳入 v0.3.0。
- **多用户隔离与安全加固**（#2313）：集成 Agent Shield 方案，支持技能白名单、环境变量过滤等，标志项目向生产级 AI 代理平台演进。
- **MCP 工具标准化**（#2600）：提出 MCP 参数应为 `null` 而非缺失字段，推动接口规范统一，有助于生态扩展。

---

### 7. **用户反馈摘要**

- **痛点集中点**：  
  - 配置不一致导致 API 密钥失效（#2578, #2368）  
  - 多语言界面本地化不彻底（#2367，标题残留中文）  
  - 升级后 Web UI 兼容性断裂（#2598）  

- **积极反馈**：  
  - 赞赏 LINE SDK 迁移提升稳定性（#2413）  
  - 认可 Antigravity 新模型支持扩展（#2343）  

- **典型使用场景**：  
  - Raspberry Pi Zero W + Ollama 本地推理  
  - 企业内网部署 via Docker，依赖邮件通知  
  - Telegram/DingTalk 多通道协同工作流  

---

### 8. **待处理积压**

以下 Issue / PR 需维护者优先响应：

- **#2578**: 高优先级 Bug，影响所有 OpenAI Compatible 用户，超过一周未获官方回应。建议指派核心 contributor 紧急排查。  
  🔗 [sipeed/picoclaw/issues/2578](https://github.com/sipeed/picoclaw/issues/2578)

- **#1780**: QQ 通道稳定性增强 PR，历时超两个月，涉及复杂重连机制，需定期 review 进度。  
  🔗 [sipeed/picoclaw/pull/1780](https://github.com/sipeed/picoclaw/pull/1780)

- **#2313**: 安全加固大工程，若持续推进，可能定义 v0.3.0 核心特性，建议列入 roadmap 规划。  
  🔗 [sipeed/picoclaw/pull/2313](https://github.com/sipeed/picoclaw/pull/2313)

---

**总结**：PicoClaw 正处于功能丰富化与架构稳定化并行期，社区参与度高，但需警惕关键 Bug 响应延迟风险。建议团队聚焦 #2578 修复，并加速 #2313 集成以巩固长期竞争力。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 - 2026年4月21日**

---

### 1. **今日速览**
过去24小时内，NanoClaw 保持了较高的开发活跃度，共处理了25个PR更新（8个已合并/关闭），显示出团队持续交付能力。同时新增1条Issue反馈，主要集中在配置生效问题。整体项目状态健康，功能扩展稳步推进，尤其在多通道集成和MCP技能生态建设方面进展显著。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
本周期内共合并或关闭8个重要PR：

- **[feat(providers): add codex provider via app-server JSON-RPC](https://github.com/qwibitai/nanoclaw/pull/1843)**  
  引入Codex作为独立AgentProvider，支持完整代理循环、会话恢复、流式输出及MCP集成，显著增强多模型支持能力。

- **[feat: add /add-ollama-provider skill and docs/ollama.md](https://github.com/qwibitai/nanoclaw/pull/1859)**  
  新增Ollama本地推理后端接入技能，允许将任意代理组路由至本地模型，提升私有部署灵活性。

- **[docs(add-opencode): pin SDK/CLI to 1.4.17...] (https://github.com/qwibitai/nanoclaw/pull/1864)**  
  修复因opencode-cli升级导致的会话API不兼容问题，确保版本一致性，避免运行时崩溃。

- **[Move engagement policy to router, add unknown-channel registration flow] (https://github.com/qwibitai/nanoclaw/pull/1877)**  
  重构频道准入逻辑并实现未知频道注册审批流程，改善新渠道接入体验与安全性。

- **[chore: ignore .env* variants] (https://github.com/qwibitai/nanoclaw/pull/1873)**  
  防止敏感环境变量文件被误提交，加强代码仓库安全规范。

- **[Land v1→v2 action-items (5 implementation items)] (https://github.com/qwibitai/nanoclaw/pull/1869)**  
  完成从v1到v2的关键技术债务清理，包括删除废弃常量、重现代码格式化策略等，为后续迭代奠定基础。

这些合并动作表明项目正稳步向模块化、多协议兼容方向演进，同时注重稳定性与维护性优化。

---

### 4. **社区热点**
今日最活跃的议题为 **#1870 [OPEN] ASSISTANT_NAME not applied when channel skills register groups**（[链接](https://github.com/qwibitai/nanoclaw/issues/1870)），用户报告在`.env`中设置`ASSISTANT_NAME`后，机器人仍自称为默认名称“Andy”。该问题暴露出跨技能通道传递助理名称参数机制缺失，影响用户体验一致性。目前尚无公开PR直接回应此Bug，但相关讨论提示需强化配置项透传能力。

此外，多个新PR如Signal v2适配、Home Assistant MCP集成等获得关注，反映社区对丰富通信渠道与智能家居控制的需求旺盛。

---

### 5. **Bug与稳定性**
- **#1870**: `ASSISTANT_NAME`未正确应用 → 高优先级，影响核心身份标识功能，暂无修复PR。
- 其余已关闭PR均涉及文档修正、依赖管理或配置规范化，无严重生产级崩溃报告。

---

### 6. **功能请求与路线图信号**
近期PR集中体现以下趋势：
- **多平台消息通道扩展**：Signal v2、Matrix E2EE、Telegram等均已进入开发阶段（PR #1875, #1624），预示下一版本将大幅提升跨平台互通能力。
- **本地化AI推理支持**：Ollama、Whisper语音识别等技能上线，推动边缘计算与隐私优先场景落地。
- **MCP技能生态加速建设**：Tailscale、UnraidClaw、Vikunja等工具链集成密集出现（PR #1260, #1188, #1742），强化自动化运维与工作流整合定位。

结合当前PR节奏，预计Q2将发布v2.x正式版，重点覆盖异构通道统一管理和技能商店化部署。

---

### 7. **用户反馈摘要**
主要痛点集中在：
- **配置同步不一致**：用户期望全局设置能自动应用于所有子组（如助理名称、模型选择），但目前存在割裂现象（见Issue #1870）。
- **错误信息模糊**：文件挂载路径错误提示不够直观，需引导用户操作（PR #1817已部分解决）。
- **凭证初始化时机不当**：空容器启动导致残留状态，重启后异常（PR #1290已修复）。

正面反馈则体现在对新技能（如Vikunja任务管理）的快速响应，显示社区高度认可其开放架构。

---

### 8. **待处理积压**
- **#1870**（ASSISTANT_NAME bug）：创建于2026-04-20，尚未分配维护者，建议优先处理以维持配置系统可信度。
- **#1327**（Home Assistant MCP）：自3月22日提出，仍在等待审查，属高价值IoT集成需求。
- **#1090**（.claude.json写权限问题）：虽已活跃超一月，但最新更新于4月20日，建议加速合并以防回归。

--- 

*数据来源：GitHub API · 分析时间：2026-04-21*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-04-21）**

---

### 1. **今日速览**

过去24小时内，NullClaw 项目保持中等活跃度，共新增3个待合并 Pull Request 和1个活跃 Issue。核心焦点集中在网关模块的稳定性优化与兼容性修复，反映出团队正积极应对 Zig 0.16 迁移后暴露的性能问题。整体开发节奏稳健，无重大版本发布，但关键路径上的 Bug 修复进展迅速。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

截至今日，**无新合并或关闭的 PR**。当前有3个 Open PR 处于待审状态，均围绕网关稳定性和系统兼容性展开：

- **PR #858**（jmylchreest）：针对 Zig 0.16 迁移后 HTTP 网关 `/health` 和 `/ready` 端点在高负载下失效的问题，提出使用 POSIX `read/write` 替代原有实现作为临时解决方案。
- **PR #853**（manelsen）：直接响应 Issue #851，为 `accept4()` 循环引入带边界限制的退避机制，防止因 EAGAIN 导致的 CPU 空转。
- **PR #856**（mark-os）：增强 SysVinit 服务脚本对 RTC-less 硬件（如 PogoPlug V4）的适配能力，提升冷启动可靠性。

这些 PR 虽未合并，但已体现社区对生产环境稳定性的高度关注。

---

### 4. **社区热点**

最活跃的议题是 **Issue #851**（[链接](https://github.com/nullclaw/nullclaw/issues/851)），自 2026-04-19 创建以来已有2条评论，描述在 Raspberry Pi 5 上运行 gateway 时出现单核 CPU 100% 占用问题。该问题已被 **PR #853** 明确引用并修复，表明开发者快速响应了真实用户场景中的性能退化问题。此外，**PR #858** 虽评论数为空，但其标题提及“hang observed in the HTTP gateway accept path”，暗示其与 Issue #851 可能存在关联，值得进一步交叉验证。

---

### 5. **Bug 与稳定性**

| 严重程度 | Issue / PR | 描述 | 是否已有 fix |
|--------|------------|------|--------------|
| High   | Issue #851 ([链接](https://github.com/nullclaw/nullclaw/issues/851)) | Gateway 在空闲状态下因 `accept4()` 返回 EAGAIN 陷入忙等待，导致单核 CPU 满载 | ✅ 已由 PR #853 修复（待合并） |
| Medium | PR #858 ([链接](https://github.com/nullclaw/nullclaw/pull/858)) | Zig 0.16 升级后，网关健康检查接口在高并发下无响应，引发 Kubernetes 容器重启 | ⚠️ 提出临时 workaround，非根本解决 |

此 Bug 直接影响边缘设备（如树莓派、PogoPlug）的生产部署稳定性，属高优先级问题。

---

### 6. **功能请求与路线图信号**

暂无显式新功能请求。但从现有 PR 可推断以下方向：

- **增强边缘设备支持**：PR #856 针对 RTC-less 硬件优化服务初始化流程，显示项目正扩展对低功耗嵌入式设备的覆盖。
- **网关容错能力提升**：多个 PR 聚焦于网络层错误处理（如退避策略、POSIX 回退），暗示未来版本可能强化网关在弱网或不稳定环境下的鲁棒性。

这些变化虽非全新功能，但属于关键基础设施加固，可能成为下一版本（如 v1.5.x）的重点交付项。

---

### 7. **用户反馈摘要**

从 Issue #851 可见，真实用户（Trez-zerT）在使用 Raspberry Pi 5 运行 NullClaw gateway 时遭遇严重性能异常，通过 `strace` 定位到 `accept4()` 系统调用频繁触发 EAGAIN。该用户未发表评论，但问题描述清晰、复现条件具体（Debian 13 aarch64），体现出良好的故障排查习惯。结合 PR #853 的快速响应，说明社区对边缘计算场景的实际痛点有较强感知。

---

### 8. **待处理积压**

目前暂无长期未处理的重大 Issue 或 PR。所有活跃问题均已获得维护者回应，且存在对应的修复方案。建议持续监控以下两项：

- **PR #853**：虽逻辑完整，但未获 review 批准，需尽快完成代码审查与测试验证。
- **Zig 0.16 兼容性影响范围评估**：除 PR #858 外，是否还有其他模块受迁移影响？建议发起专项审计。

---

**数据依据**：GitHub API 抓取于 2026-04-21 00:00 UTC+8  
**分析员**：AI 智能体（开源项目分析师）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-04-21)**

---

### 1. 今日速览
IronClaw 项目在 2026-04-21 日保持高度活跃。过去 24 小时内，共处理了 50 条 Issues（新开/活跃 41，已关闭 9）和 50 条 PRs（待合并 35，已合并/关闭 15），显示出强劲的开发节奏和社区反馈循环。核心贡献者持续推动 Engine V2 的质量改进、Web UI 的稳定性修复以及 MCP 工具链的增强。项目整体处于积极迭代阶段，无新版本发布，但功能演进显著。

---

### 2. 版本发布
无新版本发布。

---

### 3. 项目进展
今日合并/关闭的重要 PR 较少，主要进展体现在新提交的 PR 中：
*   **PR #2728**: 添加了 `ironclaw migrate` CLI 工具，支持从 OpenClaw 和 Hermes 迁移数据，这是 Engine V2 生态扩展的重要一步。
*   **PR #2754**: 引入了用户自助服务密钥管理界面，并持久化密钥绑定审批，增强了安全性和用户体验。
*   **PR #2757**: 修复了 Engine V2 中扁平化工具调用的恢复问题，提升了 LLM 集成的可靠性。
*   **PR #2699**: 修复了 MCP 服务器名称规范化、UTF-8 截断以及授权头设置时的认证跳过问题，解决了多个相关 Issue。
这些提交共同推进了项目的可维护性、安全性、用户体验和 Engine V2 的健壮性，表明项目正在稳步向前发展。

---

### 4. 社区热点
*   **Issue #2229**: Google Sheets OAuth 被阻止的问题引发了关注，涉及错误 400 invalid_request，影响了 Google Suite 扩展的功能。
*   **Issue #2285**: Web UI 聊天消息在页面刷新后消失，而后台仍在处理，这影响了用户体验和状态持久化。
*   **Issue #2731**: Telegram 消息渲染为独立的 Engine 会话而非统一线程，这是一个新提出的 QA Bug，反映了集成复杂性的挑战。
*   **PR #2728**: 新增的 `ironclaw migrate` CLI 工具获得了关注，因为它标志着对 OpenClaw 和 Hermes 生态的兼容性支持。
*   **PR #2754**: 用户自助密钥管理的引入是社区期待已久的特性，解决了多账户凭证管理的痛点。
这些讨论凸显了社区对集成稳定性、用户体验一致性及工具链灵活性的高度关注。

---

### 5. Bug 与稳定性
按严重程度排列的 Bug 报告：
*   **(P1) Issue #2731**: Telegram 消息渲染问题，可能导致用户混淆和对话断裂。**已有相关 PR #2699 在修复 MCP 相关问题，可能间接影响此 Bug。**
*   **(P1) Issue #2732**: Assistant 建议使用 Brave Search API 而非内部 NEAR 搜索，这可能影响搜索效率和成本。**暂无直接 fix PR。**
*   **(P2) Issue #2229**: Google Sheets OAuth 被阻止，直接影响扩展功能。**暂无直接 fix PR。**
*   **(P2) Issue #2285**: Web UI 聊天消息消失，影响用户体验。**暂无直接 fix PR。**
*   **(P2) Issue #2543**: Linear MCP 授权在 OAuth 设置后未被识别，影响工具可用性。**暂无直接 fix PR。**

---

### 6. 功能请求与路线图信号
*   **Issue #2642**: 请求支持每个服务的多个账户凭证配置文件，这暗示了未来扩展多租户和多身份验证场景的需求。
*   **Issue #2721, #2722, #2723**: 关于 Engine V2 质量里程碑和评估套件的创建，表明项目正在为 Engine V2 的稳定性和性能设定明确的路线图。
*   **PR #2728**: 迁移 CLI 的添加，强烈表明项目正致力于扩大其生态系统兼容性和用户基础。
*   **PR #2754**: 用户自助密钥管理，是提升安全性和用户体验的关键功能，预示着未来将更强调用户自主权。

---

### 7. 用户反馈摘要
*   **痛点**: 用户普遍抱怨集成（如 Google Sheets、Linear、Telegram）的认证和状态管理问题，导致功能不可用或体验不一致。Web UI 的布局和文件显示问题也频繁出现，影响了使用效率。
*   **满意之处**: 用户对引入新的 CLI 工具（如 `migrate`）表示欢迎，认为这提高了工具的灵活性和可移植性。对 Engine V2 的持续改进和测试套件建设也给予了正面评价。
*   **不满意之处**: 用户对某些 Bug 修复的延迟表示担忧，尤其是那些影响核心功能的 Bug。例如，Google Sheets OAuth 问题和 Telegram 消息渲染问题已经存在一段时间，仍未完全解决。

---

### 8. 待处理积压
*   **Issue #2229 (Google Sheets OAuth 被阻止)**: 自 2026-04-10 创建，更新于 2026-04-20，评论 10 条。这是一个高优先级且长期未解决的问题，影响了 Google Suite 扩展的功能。
*   **Issue #2285 (Web UI 聊天消息消失)**: 自 2026-04-10 创建，更新于 2026-04-20，评论 7 条。此问题影响用户体验和状态持久化，需要尽快解决。
*   **Issue #1537 (WASM 凭据注入失败)**: 自 2026-03-21 创建，更新于 2026-04-20，评论 4 条。这是一个关键的基础设施问题，影响了 WASM 工具和通道的安全性。
*   **Issue #2437 (nearai_chat 不标准化工具模式)**: 自 2026-04-14 创建，更新于 2026-04-20，评论 1 条。此问题影响与提供者的集成，可能导致 API 调用失败。
*   **Issue #2580 (Telegram 消息声称已发送但未送达)**: 自 2026-04-17 创建，更新于 2026-04-20，评论 1 条。虽然已关闭，但相关 Bug Bash 活动表明此类问题仍需关注。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-04-21）**

---

### 1. **今日速览**
过去24小时内，LobsterAI 项目保持高度活跃状态，共处理 **50 条 Pull Request**（28 个已合并/关闭，22 个待合并），新增 **1 个 Issue**。开发重点集中在 UI 体验优化、依赖项升级及核心功能稳定性修复上。整体项目健康度良好，迭代节奏稳定。

---

### 2. **版本发布**
无新版本发布（Releases 数量为 0）。

---

### 3. **项目进展**
今日共有 **28 个 PR 被合并或关闭**，涵盖多个关键模块：

- **[PR #1768] [CLOSED]**：修复了 IM 同步问题，提升了消息传递的可靠性。
- **[PR #1762] [CLOSED]**：支持 Popo 云文档与群历史消息获取，增强了协作场景的数据接入能力。
- **[PR #1761] [CLOSED]**：在钉钉连接器中引入二维码扫描配置 Bot 功能，提升初始化便捷性。
- **[PR #1759] [CLOSED]**：Windows 安装程序升级时保留用户自建技能，避免数据丢失。
- **[PR #1754] [CLOSED]**：分离手动更新流程与自动预下载逻辑，改善用户体验。

这些合并表明项目正稳步推进多平台集成、用户体验一致性及系统健壮性建设。

---

### 4. **社区热点**
当前暂无高互动（评论 >0）的 Issues 或 PRs。所有条目评论数均为 `undefined` 或 0，显示社区讨论活跃度较低，但新功能提案仍在持续提交。

最活跃的新建 Issue 为 **[#1751]**：用户反馈定时任务通知文案显示异常，疑似界面渲染错误（附截图）。该问题可能影响用户提醒体验，需前端团队关注。

> 链接：[netease-youdao/LobsterAI Issue #1751](https://github.com/netease-youdao/LobsterAI/issues/1751)

---

### 5. **Bug 与稳定性**
今日报告的主要 Bug 包括：

- **[Issue #1751]**：定时任务通知文案错乱，**未关联 Fix PR**，需排查渲染层逻辑。
- **[PR #1756]**：停止会话后爬虫任务仍继续执行，**已提交修复方案**（定位到 `openclawRuntimeAdapter.ts` 中的异步清理缺陷），待合并验证。
- **[PR #1758 & #1757]**：钉钉相关配置路径错配问题，**均已关闭**，表明核心集成链路趋于稳定。

总体来看，Bug 数量较少且大部分已有响应，稳定性表现良好。

---

### 6. **功能请求与路线图信号**
- **[PR #544]**（长期开放）：提议添加 Agent 人设选择功能（如技术专家、虚拟女友等），提供角色化交互选项。虽尚未合并，但反映出用户对个性化 AI 助手的需求增长。
- **[PR #1760]**：支持图片 Avatar 替代纯 Emoji，增强 Agent 视觉识别能力，体现对多模态表达能力的重视。

结合近期 PR 趋势，下一版本可能强化 **Agent 个性化配置** 与 **跨平台消息接入**（Popo/DingTalk）两大方向。

---

### 7. **用户反馈摘要**
从 Issue #1751 可见，用户对 **通知文案准确性** 有明确诉求，尤其在自动化任务场景下，UI 展示与实际行为一致性至关重要。此外，多个 PR 提及“保持原有使用习惯”，说明易用性与渐进式升级是设计核心原则。

---

### 8. **待处理积压**
- **[PR #544]**（创建于 2026-03-20，状态仍为 OPEN）：Agent 人设选择功能，已停滞超20天，建议维护者优先评估可行性。
- 若干依赖升级 PR（如 Vite、React）由 Dependabot 自动生成，通常无需人工干预，但需注意合并时机以防构建中断。

---

**总结**：LobsterAI 今日处于高效开发周期中，聚焦于用户体验打磨与技术栈现代化。社区反馈集中于细节体验，整体发展稳健，建议关注长期未决的功能提案与潜在的通知渲染 bug。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

**TinyClaw 项目动态日报（2026-04-21）**

---

### 1. **今日速览**  
过去24小时内，TinyClaw 项目整体活跃度较低。共处理了1个合并的 Pull Request，未收到新的 Issues 或 PRs。无新版本发布，社区讨论暂不活跃。项目维护节奏平稳，处于常规更新阶段。

---

### 2. **版本发布**  
*无新版本发布*

---

### 3. **项目进展**  
✅ **PR #276 [CLOSED]**：修复心跳配置忽略问题  
- **作者**：ZVNC28  
- **时间线**：创建于 2026-04-10，于 2026-04-20 合并  
- **内容摘要**：此前 `settings.json` 中顶层的 `heartbeat.enabled=false` 设置被忽略，导致即使全局禁用心跳，系统仍会无条件启动 `startHeartbeat()`。该 PR 修复了此逻辑漏洞，确保顶层配置优先级高于默认行为。  
- **影响模块**：`packages/main/src/index.ts:272` 及 `Settings` 类型定义  
- **链接**：[TinyAGI/tinyagi PR #276](https://github.com/TinyAGI/tinyagi/pull/276)

> ✅ 本次合并没有引入破坏性变更，属于稳定性修复，提升配置系统的可靠性。

---

### 4. **社区热点**  
*过去24小时无新 Issue 或活跃讨论，社区热度低*

---

### 5. **Bug 与稳定性**  
🔧 **已修复 Bug**：心跳服务无视全局关闭设置  
- **严重程度**：中（影响配置灵活性，但不导致崩溃或服务中断）  
- **状态**：已于 PR #276 修复并合并  
- **复现场景**：用户在 `settings.json` 设置 `{ "heartbeat": { "enabled": false } }` 后仍观察到心跳进程运行  

---

### 6. **功能请求与路线图信号**  
*当前无明确新功能请求。近期 PR 显示开发团队正聚焦于配置系统的一致性与稳定性优化，可能为后续扩展多环境支持或动态配置加载做准备。*

---

### 7. **用户反馈摘要**  
暂无当日用户评论或反馈。结合历史数据，类似配置覆盖问题曾引起部分用户困惑，表明用户对“声明式配置”的信任度较高，但对实现细节透明度有期待。

---

### 8. **待处理积压**  
⚠️ **长期 Issue 提醒**：  
- 建议关注是否有长期未响应的 Issues（如超过30天），尤其是涉及核心功能或安全性的问题。目前无公开积压记录，但可定期扫描以预防风险。

--- 

📌 **总结**：  
今日 TinyClaw 维持低强度运维节奏，重点修复了配置层级的逻辑一致性，增强了系统可预测性。项目健康度良好，暂无紧急事项需干预。建议持续监控配置相关 Issue 及测试覆盖率变化。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-04-21）**

---

### 1. 今日速览

过去24小时内，Moltis 项目活跃度较高，共处理了 **9 个 Issue** 和 **17 个 Pull Request**，其中 **12 个 PR 已合并、9 个 Issue 已关闭**，整体维护节奏稳定。核心贡献者 *penso* 主导了多项关键修复与功能增强，涵盖沙箱环境、模型支持、文档自动化及多通道命令统一。此外，新版本 `20260420.02` 发布，标志着近期开发成果的一次重要集成。

---

### 2. 版本发布

#### 📦 v20260420.02

- **发布时间**: 2026-04-20  
- **更新内容概要**:
  - 新增 Kimi K2.6 模型支持至 Moonshot 和 Kimi Code 提供商（[PR #809](https://github.com/moltis-org/moltis/pull/809)）
  - 沙箱容器升级 Node.js 至 LTS 22（[PR #807](https://github.com/moltis-org/moltis/pull/807)）
  - Slack 命令路径解析修复，避免双斜杠错误（[PR #804](https://github.com/moltis-org/moltis/pull/804)）
  - Podman 镜像存储验证逻辑加固（[PR #811](https://github.com/moltis-org/moltis/pull/811)）
  - Web UI 支持 Markdown 渲染为 HTML（[PR #808](https://github.com/moltis-org/moltis/pull/808)）
  - Gemini 的 `thought_signature` 字段往返保真机制完善（[PR #795](https://github.com/moltis-org/moltis/pull/795)）

> ⚠️ **破坏性变更提示**: 无已知破坏性 API 或配置变更，但部分沙箱行为因 Node.js 版本升级可能影响依赖旧版本的脚本。

---

### 3. 项目进展

本次合并的核心 PR 显著提升了系统的健壮性与用户体验：

- **[feat(skills): bundle 101 default skills with category UI and format fallback](https://github.com/moltis-org/moltis/pull/797)**  
  引入预打包技能库，支持分类展示与降级格式兼容，极大降低了新用户上手门槛。

- **[feat: self-improving agent loop — skills, memory lifecycle, deployment](https://github.com/moltis-org/moltis/pull/803)**  
  实现“自进化”代理循环机制，包含技能自动生成、记忆生命周期管理及部署优化，标志着 Moltis 向更智能自主系统迈出关键一步。

- **[fix(providers): disable strict tools for Fireworks Kimi router](https://github.com/moltis-org/moltis/pull/812)**  
  解决使用 Fireworks Kimi K2.5 Turbo 时返回 HTTP 400 的问题，扩展了高能力模型的支持边界。

这些进展共同推动了 Moltis 在**可观测性、多模型兼容性、开发者体验**三个维度的实质性进步。

---

### 4. 社区热点

最活跃议题集中于**文档清晰度**与**多平台集成稳定性**：

- **[Docs]: Clarify heartbeat/cron behavior with multi-agent workspaces (#769)](https://github.com/moltis-org/moltis/issues/769)**  
  用户反馈心跳机制在多智能体工作区中的行为未明确定义，涉及会话历史访问权限等关键细节。该 Issue 虽已关闭，但评论达5条，显示社区对系统透明度的强烈需求。

- **[Bug]: Can't add SSE MCP (#278)](https://github.com/moltis-org/moltis/issues/278)**  
  自3月起报告的问题，终于于今日修复（通过 [PR #805](https://github.com/moltis-org/moltis/pull/805) 实现遗留 SSE 传输支持），反映旧协议兼容性的长期痛点。

- **[Bug]: Function call missing thought_signature in functionCall when using Google models (#375)](https://github.com/moltis-org/moltis/issues/375)**  
  获3个点赞，说明 Gemini 用户对推理痕迹保留有高度期待，此次修复增强了模型输出可追溯性。

---

### 5. Bug 与稳定性

按严重程度排序的关键问题：

| Issue | 描述 | 状态 | 关联 PR |
|------|------|------|--------|
| [#810](https://github.com/moltis-org/moltis/issues/810) | Fireworks Kimi K2.5 Turbo 返回 400 错误 | 已关闭 | ✅ #812 |
| [#796](https://github.com/moltis-org/moltis/issues/796) | Podman 构建后镜像未入库导致沙箱失败 | 已关闭 | ✅ #811 |
| [#798](https://github.com/moltis-org/moltis/issues/798) | Slack 斜杠命令报“unknown command” | 已关闭 | ✅ #804 |
| [#793](https://github.com/moltis-org/moltis/issues/793) | OpenRouter + Google AI Studio 组合引发 HTTP 400 | 已关闭 | ⚠️ 待定位 |

所有高优先级 Bug 均已获得对应修复 PR，系统稳定性持续改善。

---

### 6. 功能请求与路线图信号

用户明确提出的新需求包括：

- **[enhancement] Abort current operation from Telegram & fallback models (#788)**  
  请求允许从 Telegram 中断长时间运行的操作，并引入备用模型回退策略。此需求虽未直接关联近期 PR，但体现了对交互可控性与容错机制的重视，可能与未来“自进化循环”模块协同演进。

- **Nix Flake 支持（#745）**  
  开源构建方案提案，已在待合并队列中停留近一周，反映社区对标准化部署流程的迫切需求，有望纳入下一版本以扩大生态覆盖。

---

### 7. 用户反馈摘要

- **正面反馈**：  
  用户对 Kimi K2.6 等新模型支持表示欢迎，尤其认可其在代码基准测试中的表现；Markdown 渲染提升聊天可读性获积极评价。

- **负面反馈**：  
  - Slack 命令路径解析错误暴露了跨渠道输入规范化不足；
  - Podman 沙箱镜像丢失问题困扰 Debian 13 用户；
  - 多 Agent 场景下心跳机制不透明导致调试困难。

总体情绪偏向建设性，多数问题可通过文档补充或配置调整缓解。

---

### 8. 待处理积压

- **[Feature Request] Nix Flake Support (#745)**  
  创建于 2026-04-16，尚未合并，涉及标准化开发与部署流程，建议优先处理以提升可复现性。

- **Issue #278 (SSE MCP)** 虽已修复，但其根源——对非标准 MCP 协议的兼容性设计缺失——仍需长期关注。

建议维护团队在下一周期评估 Nix Flake 与 MCP 通用传输层抽象的可行性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 CoPaw 项目的分析师，我将为您生成一份结构清晰的项目动态日报。

---

### **CoPaw 项目动态日报 (2026-04-21)**

#### **1. 今日速览**

CoPaw 项目在 2026-04-21 保持了高度活跃的开发状态。过去24小时内，社区贡献了42条 Issues 更新和50条 PR 更新，显示出强劲的社区参与度。团队发布了一个新的预发布版本 `v1.1.3-beta.1`，标志着一个重要版本的开发接近尾声。整体来看，项目正处于功能快速迭代和问题积极修复的健康发展轨道上。

**GitHub 链接:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

#### **2. 版本发布**

*   **新版本发布：** `v1.1.3-beta.1`
    *   **更新内容：**
        1.  版本号更新（`chore(version): bumping version to 1.1.3b1`）。
        2.  控制台/插件系统增强（`Console/plugin`）。
        3.  插件系统文档完善与增强（`enhance(plugins): enhance console plugin system and add docs`）。
    *   **破坏性变更：** 无。
    *   **迁移注意事项：** 由于是 beta 版本，建议测试用户重点关注新功能的使用体验和新文档的指引。正式版发布前可能会有进一步的调整。

#### **3. 项目进展**

今日合并/关闭的重要 PR 表明项目在多个关键领域取得了实质性进展：

*   **PR #3622 [CLOSED] fix: fix macos desktop build:** 解决了 macOS 桌面版的构建问题，提升了跨平台兼容性。
*   **PR #3614 [CLOSED] fix(DingTalk): bot_prefix not applied to normal webhook replies:** 修复了钉钉频道中机器人前缀未正确应用的问题，改善了用户体验。
*   **PR #3616 [CLOSED] fix (console): fix search in the skill page:** 修复了技能页面搜索功能的 bug，提升了控制台的用户交互体验。
*   **PR #3620 [CLOSED] chore(version): bumping version to 1.1.3b2:** 版本号更新为 `1.1.3b2`，紧随 `v1.1.3-beta.1` 之后，表明开发节奏紧密。
*   **PR #3400 [CLOSED] feat(security): add shell evasion guard:** 引入了一个重要的安全特性，通过 `ShellEvasionGuardian` 来防御常见的 shell 逃逸模式，增强了核心工具的安全性。
*   **PR #1598 [CLOSED] fix:(multi agent):build heartbeat by agent:** 修复了多代理场景下的心跳构建问题，提升了系统的稳定性和可靠性。
*   **PR #3534 [CLOSED] feat(backup): support backup and restore:** 实现了完整的备份和恢复系统，为用户数据提供了重要的安全保障。
*   **PR #2950 [CLOSED] fix(windows): suppress CMD console window when executing shell commands:** 解决了 Windows 平台下执行 shell 命令时 CMD 窗口弹出干扰用户的问题，优化了桌面端体验。

这些进展表明项目在稳定性、安全性、用户体验和功能完整性方面都向前迈出了坚实的一步。

#### **4. 社区热点**

以下 Issues/PRs 反映了社区当前最关注的方向和诉求：

*   **[Issue #2291] Help Wanted: Open Tasks — Come Contribute!:** 这是一个开放任务列表，鼓励社区成员认领并贡献代码。它显示了项目对社区驱动的开发的重视，以及维护者希望将特定任务分配给贡献者的意图。优先级从 P0 到 P2，为不同能力的贡献者提供了机会。
*   **[Issue #3356] QwenPaw 升级后 WORKING_DIR 仍指向旧目录:** 用户报告了安装路径和数据存储路径不一致的问题。这表明用户在升级过程中遇到了配置迁移或数据隔离方面的困惑，可能影响使用体验。
*   **[Issue #3002] CoPaw 不兼容 OpenAI Responses API 格式:** 用户在使用 Azure OpenAI 代理网关时遇到了 API 兼容性问题，返回 400 错误。这反映了对企业级 AI 网关集成的需求和挑战。
*   **[PR #3630] test(agents): unit tests for hooks / memory / utils:** 这是一个积极的信号，表明项目正在加强其单元测试覆盖范围，以提升代码质量和可维护性。
*   **[PR #3117] Feat/semantic skill routing:** 此 PR 旨在实现基于语义的技能路由，以减少上下文 token 消耗。这反映了社区对提升大模型应用效率的强烈需求，尤其是在处理大量技能时。
*   **[PR #3548] feat(memory): rebuild memory & context:** 重构长期记忆模块以支持更灵活的接口和后端切换，同时保持向后兼容性。这表明项目正在积极优化核心的 Agent 能力组件。
*   **[PR #2904] Add plan mode:** 引入 Plan 模式，允许 Agent 生成结构化计划。这直接响应了用户对 Agent 自主规划和分解复杂任务的需求。

#### **5. Bug 与稳定性**

今日报告的 Bug 主要集中在以下几个方面，按严重程度排列：

1.  **高优先级：**
    *   **[Issue #3356] QwenPaw 升级后 WORKING_DIR 仍指向旧目录:** 影响数据一致性和升级体验。
    *   **[Issue #3582] Localhost auth bypass is broken:** 安全问题，本地认证绕过失效可能导致未授权访问。
    *   **[Issue #3573] cron 任务 channel=weixin 执行时报 KeyError:** 定时任务功能出现致命错误，影响自动化流程。
    *   **[Issue #3598] two system folders: .copaw and .qwenpaw:** 数据冗余和潜在的管理混乱问题。

2.  **中优先级：**
    *   **[Issue #2953] wrong info after copaw app start:** 启动信息显示异常，可能是日志或状态管理问题。
    *   **[Issue #3211] llama.cpp server fails to start in official Docker image:** Docker 镜像中的兼容性问题，影响容器化部署。
    *   **[Issue #3564] 在经常中途中断了。:** 模糊描述，但表明存在不稳定性。
    *   **[Issue #3628] 企业微信通道 截图文件见pdf文档:** 特定于企业微信的图片识别问题。
    *   **[Issue #3613] 用 send_file_to_user 技能发送文件后，接口报错:** 特定技能调用后的二次调用失败，可能涉及工具返回结构处理。

3.  **低优先级：**
    *   其余 Issues 多为特定环境下的问题或功能增强请求。

**是否有对应的 Fix PR:**
*   Issue #3582 (Localhost auth bypass) 和 Issue #3573 (cron weixin KeyError) 目前尚无公开的 Fix PR，需要重点关注。
*   Issue #3598 (.copaw/.qwenpaw 文件夹问题) 同样暂无 Fix PR。

#### **6. 功能请求与路线图信号**

用户提出的新功能需求和已有 PR 表明了下个版本的重点方向：

*   **多模态与模型支持：**
    *   **[Issue #3624] MiniMax 模型不支持多模态/视觉功能:** 用户对主流多模态模型的支持有明确需求。
    *   **[Issue #2405] CoPaw是否支持调用OpenRouter上的小米Mimo模型免费一周的API？** 和 **[Issue #2029] 内置openrouter:** 反映了用户对更多免费或低成本模型提供商的支持期望，尤其是 OpenRouter。

*   **Agent 智能与进化：**
    *   **[Issue #3516] 未来是否会引入Hermes 理念，来促使 QwenPaw的智能体自动进化？:** 这是一个前瞻性的功能请求，探讨了 Agent 自主进化的可能性。

*   **用户体验与界面优化：**
    *   **[Issue #3627] 前端能不能学下claude code 那种样子:** 希望提升前端 UI/UX 设计，使其更具现代感和高级感。
    *   **[Issue #3048] Cron Job ID field should be optional/hidden in create form:** 希望简化 Cron Job 创建表单，减少用户困惑。
    *   **[Issue #3586] 定时任务可否不用/approve:** 希望自动化定时任务的审批流程，提升效率。

*   **核心功能增强：**
    *   **[Issue #3593] Make execute_shell_command timeout configurable:** 希望在 agent.json 中配置 shell 命令超时时间，增加灵活性。
    *   **[Issue #3586] 定时任务可否不用/approve:** 希望自动化定时任务的审批流程，提升效率。
    *   **[Issue #3623] 任务移交，双方会话记录，保持会话上下交互反馈。:** 提出了在多智能体协作场景中，需要一个有效的会话间反馈机制。

*   **已有 PR 的信号：**
    *   **Plan Mode (PR #2904):** 引入了结构化任务规划能力，是 Agent 智能性的重要体现。
    *   **Semantic Skill Routing (PR #3117):** 旨在提升技能管理的效率和上下文相关性。
    *   **Per-Agent Model Assignment (PR #3599):** 允许为每个 Agent 单独配置模型，提升了配置的灵活性和个性化。
    *   **ACP Integration (PR #3589):** 集成 ACP 协议，扩展了与外部 Agent 协作的能力。

#### **7. 用户反馈摘要**

从 Issues 评论中，我们可以提炼出以下真实用户痛点和使用场景：

*   **痛点：**
    *   **升级与数据迁移：** 用户在升级 QwenPaw 后，发现新旧配置文件并存（`.copaw` 和 `.qwenpaw`），导致数据冗余和管理混乱，且新安装的数据并未写入预期目录。这凸显了升级路径和数据隔离策略的不足。
    *   **特定渠道的兼容性问题：** 企业微信（WeCom）的某些功能（如群聊消息识别、图片格式识别）存在问题，表明特定渠道的适配仍需完善。
    *   **Docker 镜像的依赖问题：** 官方 Docker 镜像中的 `llama.cpp` 服务因 `GLIBC` 版本不匹配而启动失败，影响了容器化部署的便利性。
    *   **工具调用后的二次调用崩溃：** 使用 `send_file_to_user` 等技能后，后续与 API 的交互出现错误，提示工具返回结构问题，说明工具返回数据的处理逻辑存在缺陷。
    *   **认证与安全：** Localhost 认证绕过失效是一个严重的安全问题，影响了本地开发体验。
    *   **UI/UX 细节：** 用户希望前端界面更加现代化，Cron Job 创建表单过于复杂，以及希望移除不必要的审批步骤。

*   **满意/不满意的地方：**
    *   **满意：** 部分用户对项目提供的“Help Wanted”任务感兴趣，愿意参与贡献。
    *   **不满意：** 用户对频繁的崩溃、不兼容的 API、复杂的配置流程和缺乏现代化的界面设计表示不满。

#### **8. 待处理积压**

以下是需要维护者特别关注的长期未响应的重要 Issue 或 PR：

*   **[Issue #2291] Help Wanted: Open Tasks — Come Contribute! (P0-P2):** 尽管是鼓励贡献的帖子，但维护者需要定期检查和分配这些任务，以确保项目进度和社区活力。
*   **[Issue #3356] QwenPaw 升级后 WORKING_DIR 仍指向旧目录:** 这是一个严重影响用户体验的问题，需要尽快解决并提供清晰的升级指引。
*   **[Issue #3002] CoPaw 不兼容 OpenAI Responses API 格式:** 企业级用户的痛点，需要评估并优先处理。
*   **[Issue #3211] llama.cpp server fails to start in official Docker image:** Docker 镜像的稳定性至关重要，此问题需尽快修复。
*   **[Issue #3582] Localhost auth bypass is broken:** 安全问题，必须立即响应并修复。
*   **[Issue #3573] cron 任务 channel=weixin 执行时报 KeyError:** 影响自动化功能的核心问题。
*   **[Issue #3598] two system folders: .copaw and .qwenpaw:** 数据一致性问题，需要提供迁移方案。
*   **[PR #3117] Feat/semantic skill routing (Under Review, need discussions):** 一个具有潜力的功能，但需要更多讨论来确定实现细节和优先级。
*   **[PR #3548] feat(memory): rebuild memory & context (Under Review):** 核心模块的重构，需要仔细评估和测试。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报 - 2026年4月21日**

---

### 1. **今日速览**
过去24小时内，ZeroClaw 项目保持高度活跃，共产生94条 Issue/PR 更新（44 Issues + 50 PRs），其中21个 Issues 和 21个 PRs 已完成闭环。核心焦点集中在微内核架构落地后的稳定性修复、配置系统增强及 Web UI 体验优化。整体开发节奏稳健，无明显阻塞性问题爆发。

---

### 2. **版本发布**
无新版本发布。当前最新稳定版为 v0.7.3，紧急修复了标签构建问题；v0.7.4 里程碑跟踪中（[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)），预计将包含多项关键修复与功能迭代。

---

### 3. **项目进展**
- **合并/关闭重要 PR**：
  - [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774)（已合并）：修复了网关路径下技能工具未注册的问题，解决了 S1 级工作流阻断 Bug，确保 Agent 能正确识别技能定义的工具。
  - [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773)（已合并）：强化 shell 命令安全过滤，即使允许所有命令（`*`）且禁用高风险检测，仍阻止反引号等危险语法，提升安全性。
  - [#5926](https://github.com/zeroclaw-labs/zeroclaw/pull/5926)（待审）：合并 CI 流程标准化工作，新增 `push: master` 触发器并取消重复任务，改善主干提交可见性。
- **推进方向**：微内核架构（v1.0.0）相关 RFC 基本完成（如工程基建、文档标准等），进入实施阶段；WASM 插件桥接（Phase 2 D2）持续推进。

---

### 4. **社区热点**
- **最高活跃度 Issue**：
  - [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)（“提供全功能 Docker 镜像”）：用户请求预编译包含所有特性（如 WhatsApp）的镜像以降低入门门槛，获 👍3，反映非技术用户对简化部署的强烈需求。
  - [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)（“Dream Mode — 周期性内存整合”）：提出空闲时自动进行记忆 consolidation 与反思学习，属前瞻性功能构想，体现社区对智能体长期记忆机制的探索兴趣。
- **高讨论度 PR**：
  - [#5950](https://github.com/zeroclaw-labs/zeroclaw/pull/5950)：开放 `Vec<String>` 类型配置字段支持，解决 `config get/set/list` 无法操作数组型设置的问题，获得广泛认可（👍0 但评论明确）。

---

### 5. **Bug 与稳定性**
按严重程度排序：
| 严重等级 | Issue # | 问题描述 | 状态 |
|--------|--------|--------|------|
| S1 | [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) | Web 仪表盘不可用，提示需手动构建前端 | 已修复（关联 PR 待追踪） |
| S1 | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | aarch64 架构下 update 下载错误二进制文件 | 开放中，暂无 fix PR |
| S1 | [#5949](https://github.com/zeroclaw-labs/zeroclaw/issues/5949) | ACP 模式不遵循 prompt spec，导致 agentic.nvim 报错 | 新报告，S1 |
| S2 | [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) | UI 中无法添加 cron 任务 | 开放中 |
| S3 | [#5536](https://github.com/zeroclaw-labs/zeroclaw/issues/5536) | 嵌入搜索结果得分显示未乘以 100（0–1.0 显示为 %） | 已修复 |

> 注：[#5811](https://github.com/zeroclaw-labs/zeroclaw/issues/5811)（根 crate 发布失败）因微内核拆分已定位，修复中。

---

### 6. **功能请求与路线图信号**
- **短期重点**：
  - 配置系统扩展（[#5950]）：支持复杂数据结构配置，预示未来将增强 CLI 与 API 的配置管理能力。
  - 多后端存储支持（[#5946]）：PostgreSQL 内存后端上线，标志持久化能力升级，可能纳入 v0.7.4。
- **长期愿景**：
  - “Dream Mode”（[#5849]）虽为提案，但与微内核的自治目标一致，或成为 v1.0 后版本的核心特性之一。
  - WASM 插件安全加固（[#5919][#5918]）显示对沙箱环境的深度投入，符合云原生 AI 代理趋势。

---

### 7. **用户反馈摘要**
- **痛点集中**：
  - **新手友好性不足**：Docker 镜像缺失、Web 仪表盘需手动构建（[#5348][#3642]）显著增加非技术用户使用门槛。
  - **平台兼容性**：ARM64（树莓派）架构支持不完善，影响边缘设备部署场景。
  - **配置复杂性**：`Vec<String>` 字段无法通过 CLI 操作，暴露配置抽象层缺陷。
- **积极信号**：
  - 用户对技能反射生成（[#5874]）、Webhook 重试机制（[#5838]）等功能表现出高度期待，认为能提升生产环境可靠性。

---

### 8. **待处理积压**
- **长期未决 Issue**：
  - [#4022](https://github.com/zeroclaw-labs/zeroclaw/issues/4022)（skills install from clawhub 失效）：自 3 月 20 日上报，涉及 Git 技能源安装失败，影响生态集成，建议优先排查网络或鉴权逻辑。
  - [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815)（Provider 忽略 llamacpp 对象）：自 4 月 17 日报告，影响模型配置灵活性，需验证 schema 变更兼容性。
- **需维护者介入 PR**：
  - [#5099](https://github.com/zeroclaw-labs/zeroclaw/pull/5099)（WhatsApp 特性标志接线）：标记 `needs-author-action`，作者需确认 cross-platform-build-manual.yml 是否遗漏 `--features whatsapp-web`。

--- 

**数据总结**：项目处于高速演进期，架构转型基本就绪，社区关注点正从基础可用性转向高级自治能力。建议下一阶段聚焦 ARM 支持、配置易用性及 Web UI 完善，以加速 v1.0 发布。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*