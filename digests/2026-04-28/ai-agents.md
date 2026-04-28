# OpenClaw 生态日报 2026-04-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-28 00:30 UTC

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

**OpenClaw 项目动态日报 - 2026年4月28日**

---

### 1. 今日速览

过去24小时，OpenClaw 社区活跃度极高，Issues 和 PR 各更新500条，显示出强劲的开发者参与度。新版本 v2026.4.25 正式发布，重点升级了语音回复（TTS）系统，新增多家主流语音提供商支持。与此同时，多个关键回归问题被报告，主要集中在网关稳定性与 Windows UI 体验上，表明近期迭代节奏较快但质量需持续关注。整体项目健康度良好，维护响应迅速，社区反馈活跃且具建设性。

---

### 2. 版本发布

**v2026.4.25: OpenClaw 2026.4.25**  
本次发布的核心亮点是语音回复功能的全面升级：
- 引入 `/tts latest` 命令以使用最新 TTS 模型；
- 提供聊天作用域内的自动 TTS 控制、人格化设置、以及按代理/账户级别的覆盖规则；
- 新增对 Azure Speech、Xiaomi、Local CLI、Inworld、Volcengine 和 ElevenLabs v3 等语音提供商的完整支持。

> 💡 **迁移提示**：若此前配置了自定义 TTS 提供者，建议检查其 API 密钥格式是否兼容新版本的 SecretRef 机制。部分旧参数可能已弃用，请参考 [官方文档](https://github.com/openclaw/openclaw/blob/main/docs/tts.md) 更新配置。

---

### 3. 项目进展

本周期内共合并/关闭 PR 172 项，其中高影响力变更包括：

- **[#73111] 修复 TTS 密钥泄露风险**：确保 `messages.tts.providers` 中的 SecretRef 在传递给语音服务前被正确剥离，避免敏感信息意外暴露（由 @omarshahine 提交）。
- **[#73038] 新增 DeepInfra 语音/文本提供商插件**：扩展多模态 AI 模型接入能力，支持动态模型发现与 OpenAI 兼容接口（由 @steipete 提交）。
- **[#72548] 开放 SecretRef 插件化架构**：允许第三方通过插件 SDK 集成 GCP Secret Manager、Vault 等企业级密钥管理系统（重大基础设施改进）。
- **[#72442] 统一 Codex 应用路径逻辑**：修正 Codex 应用在普通对话场景下的回复路由错误，提升一致性（由 @pashpashpash 提交）。

这些变更显著增强了系统的安全性、可扩展性和跨环境部署能力。

---

### 4. 社区热点

最活跃的议题集中于 **网关连接异常** 与 **Windows 客户端渲染缺陷**：

- **Issue #72846**（评论10）：用户反馈网关 sidecar 启动延迟再次出现（此前已在 v2026.4.8 修复），影响实时通信体验。已有初步分析指向 WebSocket 握手阶段资源竞争。
- **Issue #67035**（评论13）：Windows 用户普遍反映 v2026.4.14 后输入框内容丢失、流式回复闪烁或空白，疑似前端状态管理缺陷。
- **PR #73108**（durable work orchestration）虽评论数少，但获多名核心贡献者点赞，被视为下一代任务编排的关键基础。

此外，**A2A (Agent-to-Agent) 协议支持**（Issue #6842）持续升温，已有 RFC 进入设计阶段，预计将成为生态互操作性的突破点。

---

### 5. Bug 与稳定性

#### 高优先级问题（需立即处理）

| Issue | 描述 | 状态 | 相关 PR |
|-------|------|------|--------|
| [#72699] | 网关在 v2026.4.24 启动后陷入崩溃循环（D 状态，CPU 85%+） | 已关闭 | — |
| [#71761] | 所有渠道消息被重复注入 agent context，导致双倍 token 消耗 | 已关闭 | — |
| [#72846] | 网关 sidecar 启动阻塞 ~3分钟，回归问题 | 开放 | 待排查 |

#### 中优先级问题

- **#68735**: LLM 请求因 schema/tool payload 被拒失败（GitHub Copilot/GPT-5-mini）
- **#67035**: Windows 客户端输入吞没、流式回复不可见
- **#57099**: 显式配置 Ollama API 提供者时报“未注册”错误

> ✅ 多数问题已有临时规避方案或社区提供的补丁。例如，对于 #72699，用户可通过降级至 v2026.4.23 缓解。

---

### 6. 功能请求与路线图信号

- **Per-agent cost budget enforcement** (#42475)：企业级成本控制需求明确，已有技术讨论但未进入开发队列。
- **MathJax/LaTeX 支持 Control UI** (#42840)：教育/科研用户强烈需求，UI 团队已标记为“高价值”。
- **Scoped mention pattern policy** (#70864)：近期 PR 已落地，表明社区正推动更精细的交互策略治理。
- **DeepInfra / xAI Realtime Voice Agent 插件**：显示 OpenClaw 正在积极拥抱前沿模型生态，未来版本将持续丰富 provider 矩阵。

结合近期 PR 趋势，**安全加固**（SecretRef 隔离）、**多模态扩展**（TTS + A2A）、**企业级运维支持**（cost budget, secret mgmt）将成为下一阶段重点方向。

---

### 7. 用户反馈摘要

- **正面反馈**：
  > “Azure Speech 和 ElevenLabs v3 的支持太及时了！我们的客服机器人终于能用人声交互。” —— @leonchui（TTS 升级受益者）
  
- **负面痛点**：
  > “每次升级都会破坏 gateway 配置，doctor 脚本也不够智能……” —— 多位 Docker/Kubernetes 用户抱怨部署复杂度上升。
  > “Windows 版连基本的打字都卡，根本没法日常使用。” —— #67035 高频抱怨

用户普遍肯定新功能广度，但对 **向后兼容性** 和 **跨平台一致性** 提出更高要求。

---

### 8. 待处理积压

以下 Issue 长期无实质性进展，建议维护者优先介入：

- **[#29387] Bootstrap files ignored in agentDir**：自2026-02起，影响本地技能加载完整性（评论13，👍4）
- **[#41304] Agent refuses to invoke write tools (hallucinates success)**：行为型 bug，可能导致误操作（评论10）
- **[#41366] Durable natural-language rule learning**：复杂但具战略价值，适合纳入 roadmap 中期规划

---

*数据来源：[openclaw/openclaw GitHub Repository](https://github.com/openclaw/openclaw)*  
*本报告基于截至 2026-04-28 00:00 UTC 的数据生成*

---

## 横向生态对比

好的，作为专注于 AI 智能体开源生态的技术分析师，我将基于您提供的数据生成一份横向对比分析报告。

---

### **AI 智能体与个人 AI 助手开源生态横向对比分析报告 (2026-04-28)**

**1. 生态全景**

个人 AI 助手与自主智能体开源生态在 2026-04-28 呈现出高度活跃但发展不均衡的态势。OpenClaw 作为核心参照项目，其强劲的开发节奏和广泛的功能覆盖引领着整体方向。与此同时，多个项目如 NanoBot、Hermes Agent 和 IronClaw 也在快速迭代，聚焦于架构升级、多通道集成和稳定性提升。然而，生态中也存在一些相对沉寂的项目（如 TinyClaw, ZeptoClaw, ZeroClaw），或正经历瓶颈期（如 LobsterAI 的 Electron 兼容性问题）。整体来看，该生态正从概念验证阶段向生产可用阶段演进，对安全性、稳定性和跨平台适配性的要求日益提高。

**2. 各项目活跃度对比**

| 项目名称     | Issues 数 (新增/活跃) | PR 数 (待合并/已合并) | Release 情况         | 健康度评估 |
| :----------- | :-------------------- | :------------------- | :------------------- | :--------- |
| **OpenClaw** | 500 (高)              | 500 (高)             | v2026.4.25 (TTS 升级) | 极佳       |
| NanoBot      | 17                    | 37                   | 无                   | 良好       |
| Hermes Agent | 100                   | 100                  | 无                   | 良好       |
| PicoClaw     | 109                   | 120                  | Nightly 构建         | 良好       |
| NanoClaw     | 44                    | 24                   | 无                   | 良好       |
| NullClaw     | 0                     | 0                    | 无                   | 停滞       |
| IronClaw     | 10                    | 33                   | 无                   | 良好       |
| LobsterAI    | 7                     | 38                   | v2026.4.25           | 一般       |
| TinyClaw     | 0                     | 0                    | 无                   | 停滞       |
| Moltis       | 5                     | 15                   | 无                   | 良好       |
| CoPaw        | 50                    | 43                   | 无                   | 良好       |
| ZeptoClaw    | 0                     | 0                    | 无                   | 停滞       |
| ZeroClaw     | 96                    | 50                   | 无 (v0.7.4 开发中)   | 良好       |

**3. OpenClaw 在生态中的定位**

*   **优势**: OpenClaw 无疑是当前生态中最成熟、功能最全面且社区规模最大的项目。其在语音交互（TTS/ASR）、企业级密钥管理（SecretRef 插件化）、多模态模型支持以及 A2A 协议设计方面均处于领先地位，为其他项目提供了重要的参考和借鉴。
*   **技术路线差异**: 与其他项目相比，OpenClaw 更强调“全栈式”解决方案，不仅关注核心推理引擎，还深度集成通信网关、Web UI 和丰富的第三方服务适配器。其技术路线倾向于通过统一的抽象层（如 provider 接口、SecretRef）来最大化灵活性和可扩展性。
*   **社区规模对比**: OpenClaw 的 Issue 和 PR 数量（各500条）远超其他项目，显示出其庞大的用户基础和高强度的开发者参与度，形成了显著的社区效应。

**4. 共同关注的技术方向**

*   **TTS/ASR 支持**: OpenClaw (Issue #1648)、PicoClaw (Issue #1648) 均报告了对 TTS/ASR 支持的强烈需求，已有相关 PR 在推进。这表明语音交互已成为智能体能力扩展的关键一环。
*   **会话历史持久化与隔离**: NanoBot (PR #3459)、IronClaw (Issue #2833)、CoPaw (Issue #3843) 都涉及会话历史的处理，包括回放约束、防止上下文漂移、解决历史丢失问题，反映了用户对长期对话连贯性和多会话管理能力的核心诉求。
*   **多通道/平台集成与健壮性**: Hermes Agent (Issue #7734 Feishu)、NanoBot (PR #3397 Discord)、ZeroClaw (PR #6130 WeChat) 等多个项目都在积极完善对不同通讯渠道的支持，并致力于解决特定平台的集成Bug（如授权、消息路由、附件支持），以满足多样化的部署场景。
*   **安全加固与配置管理**: OpenClaw (PR #73111 SecretRef 修复)、Moltis (PR #894 Hook 熔断测试)、IronClaw (Reborn 架构) 等项目都显示出对系统安全性和配置一致性的高度重视，包括密钥泄露防护、API 调用审计和错误处理机制。
*   **企业级特性**: OpenClaw (Per-agent cost budget, SecretRef 插件)、IronClaw (Reborn 架构、Aliyun 支持)、ZeroClaw (ACP 协议、成本追踪) 等项目的动态表明，企业级成本控制、多云支持和标准化协议（如 ACP）是推动项目向生产环境迁移的重要驱动力。

**5. 差异化定位分析**

*   **OpenClaw**: 定位为功能最全、社区最强的“全能型”AI智能体框架，目标用户包括个人开发者、研究机构和寻求一体化解决方案的企业。其技术架构以高度模块化和可扩展性为核心。
*   **NanoBot**: 更侧重于轻量级、易集成的多通道代理，适合希望在 Slack/Discord 等平台快速部署自动化任务的用户。其优势在于灵活的会话管理和对多种 LLM 提供商的兼容性。
*   **Hermes Agent**: 强调强大的本地处理能力、CLI/TUI 交互体验和复杂任务编排（如 ReAct 循环），目标用户偏向于需要精细控制本地计算资源和技术能力较强的开发者。
*   **PicoClaw**: 作为 Sipeed 的定制版本，可能在硬件优化或特定应用场景上有侧重，但从社区讨论看，其对 Web UI 和 TTS/ASR 的关注也体现了通用智能体的趋势。
*   **NanoClaw**: 专注于 v2 架构的稳定性优化和容器运行时安全，目标用户可能是对生产环境部署有高要求的团队，强调系统的可靠性和可维护性。
*   **IronClaw**: 正处于 Reborn 架构重构的关键时期，目标是实现更高的模块化、解耦和更专业的企业级运维支持，适合有复杂部署和维护需求的大型组织。
*   **LobsterAI**: 依赖 Electron 桌面应用，可能在特定桌面集成场景下有优势，但其底层技术栈的局限性（如启动慢、打包不稳定）也带来了挑战。
*   **Moltis**: 定位为轻量、现代化的 AI 助手，强调代码索引自动化和多通道可选化，适合希望在本地代码库基础上构建智能开发助手的用户。
*   **CoPaw**: 聚焦于多智能体协作与复杂任务流程管理，提供了丰富的钩子（Hook）和事件系统，适合需要构建复杂 Agent 工作流的场景。
*   **ZeroClaw**: 强调多通道集成（WeChat, Matrix）、生产环境稳定性（Cron, Daemon）和企业级特性（ACP 协议、成本追踪），目标用户可能是对中文市场和私有化部署有需求的组织。

**6. 社区热度与成熟度**

*   **快速迭代阶段**: OpenClaw、NanoBot、Hermes Agent、IronClaw、ZeroClaw 等项目表现出极高的活跃度和频繁的代码提交，正处于快速功能扩展和问题修复的阶段。
*   **质量巩固阶段**: NanoClaw、Moltis、CoPaw 等项目虽然也在持续更新，但更侧重于现有功能的稳定性优化、Bug 修复和架构梳理，体现出从快速迭代向稳定版本过渡的趋势。
*   **相对沉寂/瓶颈期**: LobsterAI 因 Electron 兼容性问题而进展缓慢，TinyClaw 和 ZeptoClaw 则在过去24小时内无活动，可能面临资源、方向或优先级的问题。

**7. 值得关注的趋势信号**

*   **从“概念验证”到“生产就绪”**: 几乎所有活跃项目都在积极解决稳定性、安全性和跨平台一致性问题，表明整个生态正在向生产环境迁移。企业级的成本控制、密钥管理和可观测性（如 OTel GenAI 支持）成为标配。
*   **语音交互成为新焦点**: TTS/ASR 支持的需求（OpenClaw, PicoClaw）预示着下一代人机交互方式正在被广泛采纳，智能体将不再局限于文本输入输出。
*   **多智能体协作与复杂工作流**: CoPaw 的实时进度观察钩子和 IronClaw 的 Reborn 架构都指向了多智能体协同执行复杂任务的未来方向，这是提升 AI 助手实用性的关键。
*   **标准化与互操作性**: OpenClaw 的 A2A 协议和 ZeroClaw 的 ACP 协议探索，以及 Moltis 对多通道可选化的推动，都表明社区正在努力建立标准化的接口和协议，以促进不同智能体之间的互操作性和生态整合。
*   **对底层技术栈的反思**: LobsterAI 的 Electron 瓶颈和 Hermes Agent 的 Docker-out-of-Docker 问题，提醒开发者需要仔细评估技术选型，以确保最终产品的性能、稳定性和用户体验。

**对 AI 智能体开发者的参考价值**:

对于 AI 智能体开发者而言，当前生态提供了丰富的选择。选择项目时，应优先考虑其活跃度和社区支持、是否满足特定功能需求（如 TTS/ASR、多通道支持、多智能体协作），以及其技术路线是否符合自身项目的长期发展方向。同时，密切关注生态中涌现的标准化协议（如 A2A, ACP）将有助于构建更具扩展性和互操作性的应用。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-04-28）**

---

### 1. **今日速览**  
过去24小时，NanoBot 保持高度活跃状态：共处理 17 条 Issue 更新与 37 条 PR 动态，其中 12 个 Issue 已关闭、21 个 PR 完成合并，整体开发节奏稳健。新增功能聚焦于多通道支持扩展（如 SimpleX）、模型容灾切换及会话历史优化，同时修复了 DeepSeek API 兼容性与 Telegram 附件类型等关键问题。社区反馈积极，尤其在模型异常处理和自动化上下文连续性方面需求显著上升。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  

#### **重要 PR 合并/推进**
- **[#3459] feat(session): enforce replay/file-cap invariants for history lifecycle**  
  强化了会话回放与文件保留的约束机制，防止上下文漂移与磁盘无限增长，提升长期任务稳定性。  
  → 链接: https://github.com/HKUDS/nanobot/pull/3459

- **[#3460] feat(long-task): add LongTaskTool for multi-step agent tasks**  
  引入 `LongTaskTool`，将长时任务拆解为可序列化的子代理步骤，增强复杂任务的自主执行能力。  
  → 链接: https://github.com/HKUDS/nanobot/pull/3460

- **[#3397] fix(discord): full thread support with session isolation and allowlist enforcement**  
  完善 Discord 线程支持，实现会话隔离与白名单控制，解决此前线程内消息无法正确路由的问题。  
  → 链接: https://github.com/HKUDS/nanobot/pull/3397

- **[#3478] fix(provider): bound OpenAI-compatible request timeouts**  
  为 OpenAI 兼容提供程序添加显式超时控制，避免大上下文请求阻塞达 10 分钟的问题。  
  → 链接: https://github.com/HKUDS/nanobot/pull/3478

> 这些变更显著提升了系统的健壮性与多平台适配能力，尤其在长任务处理与跨通道通信方面取得突破。

---

### 4. **社区热点**  

#### **高关注度 Issue / PR**
- **[#3376] Support Model Auto-Failover (Provider/Model Failover)**  
  用户强烈呼吁支持跨提供商自动故障转移，以应对单点服务中断。已有 11 条评论，反映当前多 provider 配置下仍存在单点失效风险。  
  → 链接: https://github.com/HKUDS/nanobot/issues/3376

- **[#3292] Session-Level Focus Tool: Persistent Task Awareness Across Interruptions**  
  提出“会话级焦点工具”概念，使代理能在被打断后恢复主任务注意力，类似人类“任务看板”心智模型。获 3 条评论，体现用户对深度工作流支持的期待。  
  → 链接: https://github.com/HKUDS/nanobot/issues/3292

- **[#3489] fix(channels): send telegram attachments with named file path**  
  针对 Telegram 文档发送 MIME 类型为 `application.octet-stream` 的问题提交修复，直接影响用户体验。  
  → 链接: https://github.com/HKUDS/nanobot/pull/3489

> 核心诉求集中于 **容错性增强**、**会话状态持久化** 与 **跨平台媒体支持优化**，预示下一阶段开发重点。

---

### 5. **Bug 与稳定性**  

| 严重程度 | Issue # | 描述 | 状态 |
|--------|--------|------|------|
| 高 | #3473 | WebUI 绑定 0.0.0.0 后 WebSocket 连接失败 | 开放中 |
| 中 | #3488 | Telegram 附件 MIME 类型错误导致无法预览 | 有修复 PR (#3489) |
| 中 | #3469 | DeepSeek-v4 系列模型返回空白回复且缺失 `reasoning_content` | 已关闭（需进一步验证） |
| 低 | #3435 | WeCom 渠道媒体文件上传失败 | 已关闭 |

> 主要问题涉及网络边界访问（WebUI）、厂商 API 兼容性（DeepSeek）及第三方渠道集成（Telegram/WeCom），建议优先处理 #3473 与 #3488 的用户体验影响。

---

### 6. **功能请求与路线图信号**  

- **模型异常自动切换（#3376）**：虽暂无直接 PR，但结合近期对 provider 层超时与重试机制的强化（如 #3478），表明架构正朝容灾方向演进。
- **会话级历史隔离（#3481）**：用户明确要求区分不同聊天 ID 的历史记录，该 PR 已进入开发阶段，有望解决多会话混叠问题。
- **Hugging Face 推理支持（#3490）** 与 **SimpleX 通道（#3486）**：扩展 LLM 供应商生态与新兴通讯协议，体现对去中心化与开源基础设施的重视。

> 综合判断：未来版本可能围绕 **“可靠的多 provider 运行”** 和 **“细粒度会话管理”** 两大主线展开。

---

### 7. **用户反馈摘要**  

- **正面评价**：  
  - 用户称赞 NanoBot 在 Slack/Discord 异步场景下的流畅表现（#1181 获 9 赞）。  
  - 对 `/history` 命令（#3466）表示实用，便于审查对话上下文。

- **主要痛点**：  
  - “Agent 无法在循环中被中途引导方向”（#2915），暴露 ReAct 循环缺乏外部干预钩子；  
  - “HEARTBEAT.md 不维护会话上下文”（#3484），导致定时任务丢失上下文；  
  - “DeepSeek 新模型参数格式变更引发兼容断裂”（#3469, #3474），凸显上游 API 变动对下游影响较大。

---

### 8. **待处理积压**  

- **[#3376] Provider/Model Failover**：自 4 月 22 日提出，持续 5 天未获回应，属高优先级功能请求，建议纳入本周技术规划。  
- **[#3270] Configurable Compaction Ratio**：关于记忆压缩策略的可配置性讨论，虽已关闭，但反映用户对可靠性指标的深层关注，可归档为设计参考。  
- **[#1181] Steering Loop Architecture**：双层架构提案，获 9 赞，虽非紧急，但代表长期演进方向，建议评估可行性。

> 建议维护团队优先响应 #3376 与 #3473，以提升社区信任度。

--- 

**数据驱动结论**：NanoBot 正处于快速迭代期，工程健康度良好，新功能拓展积极，但需加强跨厂商 API 兼容性与会话状态管理能力以支撑更复杂的生产场景。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为一名 AI 智能体与个人 AI 助手领域的开源项目分析师，我将根据您提供的 GitHub 数据，为 Hermes Agent 生成一份结构清晰的项目动态日报。

---

### **Hermes Agent 项目动态日报**
**日期：2026年4月28日**

#### **1. 今日速览**

过去24小时内，Hermes Agent 项目保持了高度活跃的社区参与度，共产生了100条 Issues/PR更新，显示出开发者与用户社区的持续关注。项目在网关适配、CLI工具链和内存管理等方面均有新的进展。同时，多个关键Bug正在被积极修复，整体开发势头强劲。

#### **2. 版本发布**

**无新版本发布。**

#### **3. 项目进展**

今日合并/关闭的重要 PR 对项目功能进行了多项关键推进：

*   **PR #16741 (Port Kilo#9448: roll up subagent costs into parent session total)**: 此PR解决了子代理成本计算的一个关键问题，现在父会话的总成本将包含子代理的开销，确保了成本统计的准确性。这是对复杂代理架构支持的重要一步。[查看链接](https://github.com/NousResearch/hermes-agent/pull/16741)
*   **PR #16737 (fix(compression): retry transient transport errors before fallback marker)**: 此PR增强了上下文压缩功能的健壮性，在遇到短暂的传输错误时进行重试，而不是直接降级到备用标记，提高了系统在高负载或网络不稳定环境下的稳定性。[查看链接](https://github.com/NousResearch/hermes-agent/pull/16737)

#### **4. 社区热点**

今日讨论最活跃的问题反映了用户对特定平台集成和核心功能的期待与反馈：

*   **[Issue #7734] Feishu插件的两个关键问题**: 此Issue获得了最多的关注（11条评论），主要集中在使用Feishu时的授权卡按钮点击错误和消息回复逻辑混乱上。这表明Feishu作为中国本土主流通讯工具，其深度集成是用户的核心诉求，亟待解决。[查看链接](https://github.com/NousResearch/hermes-agent/issues/7734)
*   **[Issue #16102 & PR #16100] Kanban多配置协作看板**: 一个新特性请求（RFC）引发了热烈讨论（6条评论），提议引入一个持久的、支持多配置文件的Kanban板，用于任务协作。相关的PR #16100已经提交，并附有详细的设计规范，表明该功能即将进入实现阶段。[查看链接](https://github.com/NousResearch/hermes-agent/issues/16102) / [查看PR](https://github.com/NousResearch/hermes-agent/pull/16100)
*   **[Issue #8883] Hermes WebUI简体中文汉化版**: 一位用户分享了其完成的WebUI中文本地化版本（100%完成度），获得了6个点赞，显示出中文社区对更友好界面的强烈需求和对本地贡献的认可。[查看链接](https://github.com/NousResearch/hermes-agent/issues/8883)

#### **5. Bug 与稳定性**

今日报告的Bug涵盖了从高优先级的功能故障到中等级的配置问题，维护团队已针对部分问题提交了修复方案：

*   **P1级 - 自定义提供者配置被忽略 (Issue #8919)**: 当使用自定义OpenAI兼容端点时，配置未被正确应用，且网关未访问正确的base URL。这是一个高优先级的配置可靠性问题。[查看链接](https://github.com/NousResearch/hermes-agent/issues/8919)
*   **P2级 - Ollama云端模型工具调用失败 (Issue #8965)**: 使用Ollama云端模型（如deepseek-v3.2:cloud）时，工具调用以原始XML形式输出而非执行，影响了自动化功能。[查看链接](https://github.com/NousResearch/hermes-agent/issues/8965)
*   **P2级 - Cron任务租户Key回退导致线程命名空间混乱 (Issue #8907)**: Cron任务的租户Key回退机制存在缺陷，导致同一聊天频道下的不同线程共享了相同的命名空间，破坏了隔离性。[查看链接](https://github.com/NousResearch/hermes-agent/issues/8907)
*   **P2级 - MiniMax视觉分析工具失效 (Issue #8911)**: 使用MiniMax提供商时，视觉分析工具无法识别图像，返回“未检测到图像”的错误信息。[查看链接](https://github.com/NousResearch/hermes-agent/issues/8911)
*   **P2级 - Docker-out-of-Docker环境代码执行失败 (Issue #16703)**: 在Docker-out-of-Docker（DooD）环境中，`execute_code`工具因Docker命令可用但`docker version`检查失败而报错，影响了容器化部署的用户体验。[查看链接](https://github.com/NousResearch/hermes-agent/issues/16703)

#### **6. 功能请求与路线图信号**

用户提出的新功能和改进请求，为项目下一版本的路线图提供了明确方向：

*   **Web UI仪表盘 (Issue #8945)**: 用户提议为网关添加一个内置的Web控制面板和仪表盘，以便在不启动独立服务器的情况下监控和管理网关状态。[查看链接](https://github.com/NousResearch/hermes-agent/issues/8945)
*   **Tailscale集成 (Issue #8951)**: 请求通过Tailscale Serve/Funnel功能实现远程安全的网关访问，提升部署灵活性。[查看链接](https://github.com/NousResearch/hermes-agent/issues/8951)
*   **更多消息渠道支持 (Issue #8950)**: 提议添加IRC, Google Chat, LINE, Nostr, Twitch, QQBot等消息渠道的支持，以满足更广泛的用户需求。[查看链接](https://github.com/NousResearch/hermes-agent/issues/8950)
*   **Gemini Flex推理层支持 (Issue #12700)**: 请求支持Gemini的Flex Inference服务层，以降低Cron任务和后台子代理的运行成本。[查看链接](https://github.com/NousResearch/hermes-agent/issues/12700)
*   **无限上下文缓冲区 (Issue #16742)**: 一个高级功能请求，建议利用大上下文模型作为持久化的上下文缓冲区，通过`delegate_task`来优化主会话的性能。[查看链接](https://github.com/NousResearch/hermes-agent/issues/16742)

#### **7. 用户反馈摘要**

从今日Issues中提取的用户痛点主要集中在以下几个方面：

*   **平台集成深度不足**: 用户期望像Slack, Feishu, Weixin这样的主流平台能提供更稳定、功能更丰富的集成体验，例如Weixin的账号限制问题和Slack的静默禁用问题。
*   **配置管理与迁移复杂性**: 用户在迁移OpenClaw配置、处理非UTF-8编码文件以及配置自定义提供者时遇到了困难，暴露出配置系统的鲁棒性和易用性有待加强。
*   **CLI/TUI交互体验待优化**: 包括代码块缺乏语法高亮、终端超时配置不匹配、Ctrl+W快捷键行为不合理等问题，影响了命令行用户的操作效率。
*   **内存和存储管理**: 用户报告了默认内存限制过小、Hindsight-client在NixOS上的安装问题以及符号链接文件原子写入被替换的问题，这些都指向了底层存储和内存管理模块的稳定性需要改进。
*   **Docker化部署支持**: 在Docker-out-of-Docker环境中，以及使用systemd进行系统级安装时遇到的兼容性问题，表明容器化部署的文档和支持仍需完善。

#### **8. 待处理积压**

长期未响应的重要 Issue 提醒维护者关注：

*   **[Issue #7734] Feishu插件的两个关键问题**: 自2026-04-11创建以来，已有一周多的时间，且评论数最多，是社区非常关注的热点问题。[查看链接](https://github.com/NousResearch/hermes-agent/issues/7734)
*   **[Issue #5320] 提升内存限制和显示使用压力**: 自2026-04-05创建，已近一个月，涉及核心内存管理机制，影响用户体验。[查看链接](https://github.com/NousResearch/hermes-agent/issues/5320)

---

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 PicoClaw 项目分析师，我将根据提供的 GitHub 数据生成一份结构清晰的 2026-04-28 项目动态日报。

---

### **PicoClaw 项目动态日报 (2026-04-28)**

**今日速览**
过去24小时，PicoClaw 项目保持高度活跃，共处理了109个Issue和120个Pull Request（PR），显示出强劲的开发势头。社区讨论集中在新功能请求（如TTS/ASR支持、Web流式输出）和关键Bug修复上。项目发布了一个Nightly构建版本，标志着持续集成流程的稳定性。整体来看，项目在功能扩展和问题解决方面都取得了显著进展。

**版本发布**
今日发布了一个新的 Nightly 构建版本：`v0.2.7-nightly.20260427.39dec354`。
*   **更新内容**: 此构建包含了自 `v0.2.7` 以来的所有最新更改。
*   **破坏性变更**: 由于这是Nightly版本，可能不稳定，建议谨慎使用。
*   **迁移注意事项**: 用户如需体验最新特性，可下载此版本进行测试。
*   **完整更新日志**: [https://github.com/sipeed/picoclaw/compare/v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)

**项目进展**
今日合并/关闭的重要 PR 较少，但多个长期活跃的 PR 仍在积极推进中，主要集中在核心功能和稳定性提升：
*   **#2587 (Streaming Web Chat UX)**: 这是一个关键的增强型 PR，旨在实现端到端的 Web 聊天流式体验并优化前端渲染/滚动行为，极大提升了用户体验。
*   **#2372 (Config & Provider Bug Fixes)**: 此 PR 集中修复了多个配置和提供者相关的严重 Bug，包括 API Key 丢失、模型查找失败等问题，显著提高了系统的稳定性和可靠性。
*   **#2336 (Thinking Level Fix)**: 修复了当 agent 的主要模型通过模型引用而非 `model_name` 别名配置时，`thinking_level` 初始化错误的问题。
*   **#2333 (Structured Context Compression)**: 引入了一个迭代摘要算法，用于结构化上下文压缩，有助于提升 Agent 的记忆能力和效率。
*   **#2603 (FreeRide Tool)**: 实现了 FreeRide 工具，提供自动化 OpenRouter 模型轮换和故障转移管理功能，增强了模型的可用性。

**社区热点**
*   **TTS/ASR 支持 (#1648)**: 这是评论最多的 Issue，热度极高。用户强烈要求为 PicoClaw 添加灵活的音文交互能力，并已有相关 PR #1642 待整合。这反映了社区对语音功能集成的迫切需求。
    *   [https://github.com/sipeed/picoclaw/issues/1648](https://github.com/sipeed/picoclaw/issues/1648)
*   **OpenAI Compat Provider 授权头问题 (#2578)**: 一个关键的 Bug，指出 `openai_compat` 提供商在 v0.2.6 版本中从未发送 `Authorization` header，导致所有基于 HTTP 的模型认证失败。此问题已标记为 stale，但仍引起广泛讨论。
    *   [https://github.com/sipeed/picoclaw/issues/2578](https://github.com/sipeed/picoclaw/issues/2578)
*   **LM Studio Easy Connect (#28)**: 一个长期存在的增强请求，希望简化与 LM Studio 的连接。这表明用户希望在本地模型部署方面有更便捷的集成方式。
    *   [https://github.com/sipeed/picoclaw/issues/28](https://github.com/sipeed/picoclaw/issues/28)

**Bug 与稳定性**
今日报告的 Bug 数量较多，主要集中在配置、提供者兼容性和特定渠道问题上：
*   **Groq API 兼容性错误 (#748, CLOSED)**: Groq API 的 tool call 格式不兼容问题已被关闭，表明该问题已得到解决。
*   **Android 应用模型未配置 (#2368, OPEN)**: 用户在 Android 应用中添加模型后仍显示“not configured”，无法选择，严重影响移动端体验，急需修复。
*   **Cron deliver=false 任务静默丢弃 LLM 响应 (#1058, CLOSED)**: 此 Bug 已关闭，意味着当 cron 任务设置了 `deliver=false` 时，LLM 的响应不再被静默丢弃，用户将能收到输出。
*   **Docker Web 页面输入框禁用 (#2236, CLOSED)**: Docker 部署时修改 Web 监听端口导致 Web 页面无法发送消息的问题已被关闭。
*   **Windows QQ 渠道不可用 (#2080, CLOSED)**: Windows 系统下无法使用 QQ 渠道的问题已解决。

**功能请求与路线图信号**
*   **TTS/ASR 支持 (#1648)**: 强烈的社区呼声，已有 PR #1642 支持类似功能，预计将成为下一版本的重点功能。
*   **Web 流式输出 (#1950)**: 已有 PR #2587 在推进，这将显著改善 Web UI 的用户体验。
*   **OTel GenAI 支持 (#1731)**: 企业级可观测性标准的需求，表明项目正朝着更专业和可维护的方向发展。
*   **Authula 集成 (#1067)**: 用户身份验证和授权的需求，强调了安全性的重要性。
*   **Seahorse 记忆系统 (#1919, CLOSED)**: 生物启发式记忆系统，虽然已关闭，但其概念可能仍会影响未来的架构设计。

**用户反馈摘要**
*   **痛点**: 用户对模型提供者兼容性（如 Groq、LongCat）的 Bug 反应强烈，尤其是在配置和 API 调用层面。Android 客户端的体验问题也引起了关注。
*   **使用场景**: 用户在多平台（Windows, Linux, Android）、多渠道（Telegram, Discord, WhatsApp, QQ）部署 PicoClaw，并期望其能稳定地执行复杂任务（如长任务、cron 作业）。
*   **满意度**: 对新增的功能（如会话管理命令 `/status`, `/compact`, `/new`）表示欢迎。对已解决的 Bug（如 cron 任务响应问题、QQ 渠道问题）给予正面反馈。

**待处理积压**
*   **#1648 TTS/ASR 支持**: 尽管热度高且有相关 PR，但尚未完全整合到网关中，需要更多关注和推动。
*   **#2578 openai_compat provider 授权头问题**: 虽然标记为 stale，但其影响重大，仍需进一步调查和修复。
*   **#629 长任务无重试机制**: 对于长时间运行的任务，服务器偶尔返回 HTTP 500，任务会挂起而不重试。此问题长期存在，影响系统健壮性。
*   **#618 自我升级支持**: 用户希望能够通过官方渠道进行程序自我升级，以便及时获取新特性和安全补丁，这对于项目的长期维护和分发至关重要。

---

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 - 2026-04-28**

---

### 1. **今日速览**  
NanoClaw 在过去24小时内保持高度活跃状态，共处理 **44 条 Issues/PRs**（新开+活跃12条，关闭8条；待合并12条，已合并/关闭12条）。项目整体进展稳健，重点集中在 v2 架构稳定性优化、多通道适配器完善及容器运行时安全加固。无新版本发布，但多个关键修复已合并至主干。

---

### 2. **版本发布**  
*暂无新版本发布*

---

### 3. **项目进展**  
本周期内 **12 个 PR 被成功合并或关闭**，主要方向包括：
- **v2 调度系统修复**：PR #1997 修复了 host sweep 因时区问题导致容器过早终止的问题；PR #1845 统一了数据库时间戳格式为 ISO 8601，提升跨平台一致性。
- **Telegram 适配器增强**：PR #2049 正式引入 Telegram 通道适配器，支持配对机制与 Markdown 安全转义，填补核心通信链路空白。
- **安装流程稳定性**：系列 PR（#2052–#2057）系统性解决了 LXC 环境兼容性及 systemd 安装卡死问题，显著提升首次部署成功率。
- **Signal 附件支持**：PR #2040 实现对 Signal 出站文件传输的原生支持，扩展了富媒体交互能力。

> ✅ 表明项目正稳步推进 v2 架构落地与生产环境鲁棒性建设。

---

### 4. **社区热点**  
最活跃的议题为 **#2029 [OPEN] Add configurable container resource limits**（3条评论），反映用户对容器隔离安全的强烈诉求——当前缺乏内存/CPU/PID 限制易引发宿主资源耗尽风险。该 Issue 虽未关联 PR，但已被标记为高优先级，预计将在下一版本中纳入核心功能。

另两个值得关注的高互动议题：
- **#2065 [CLOSED] feat(telegram): expose reply-to context to the agent**：虽已关闭，但揭示出跨消息上下文传递的技术瓶颈，可能催生后续“会话记忆链”设计。
- **#2048 [OPEN] Bug: `install_packages` approval triggers infinite a2a self-routing loop**：获 👍1 并被用户确认已修复，说明社区对闭环反馈响应迅速，信任度较高。

---

### 5. **Bug 与稳定性**  
| 严重等级 | Issue/PR | 问题描述 | 状态 |
|--------|--------|--------|------|
| ⚠️ High | #2041 Emoji shortcode normalization | Slack 短代码无法映射到 Unicode，导致 Telegram 表情反应失效 | 开放，需实现映射表 |
| ⚠️ High | #2042 Fix add_reaction | 3段式 platformId 解析错误致群聊中 add_reaction 静默失败 | 开放，已有诊断结论 |
| ⚠️ Medium | #2044 v2 Discord URL handling | `<URL>` 被误转为 `[URL](URL)` 破坏预览抑制语义 | 开放，影响用户体验 |
| ✅ Fixed | #2061 Scheduler: completed tasks linger | 一次性任务完成后无限滞留任务列表 | 已关闭（Apr 27） |

> 多数问题已有明确技术归因，部分已提交对应 PR（如 #2042、#2043），修复进度良好。

---

### 6. **功能请求与路线图信号**  
- **模型与 API 开放性**：Issue #1930 明确要求支持第三方 LLM 与 API 通道，虽表述简略但呼应行业趋势，结合近期 PR 中对容器配置灵活性的改进（如 #2029），推测将在 v2.1 中作为扩展点开放。
- **Google Chat 集成缺失**：Issue #2058 指出 setup 流程未包含 Google Chat 选项，而同期 Telegram 适配器刚上线，显示团队正加速覆盖主流 IM 平台，Google Chat 有望列入 Q3 规划。
- **资源限制与沙箱化**：Issue #2029 + PR #2060（Docker Sandbox 就绪）形成完整技术栈闭环，预示未来将推出轻量级沙箱运行模式，强化企业级部署能力。

---

### 7. **用户反馈摘要**  
- **痛点集中点**：  
  - “attachments not visible post-migration”（#2047）：迁移后文件挂载路径不一致，暴露自动化部署脚本缺陷。  
  - “self-modifying agent breaks on args stringify”（#2051）：自修改工具写入非法 JSON 结构，需加强配置校验。  
- **满意度亮点**：  
  - 用户 luis-agm 在 #2048 中明确表示“issue was indeed fixed”，肯定团队响应效率；  
  - 对 OneCLI 标识符兼容性问题（#2046）提出精准修复建议（`.replace(/_/g, '-')`），体现深度使用者参与度。

---

### 8. **待处理积压**  
- **#2029 Add configurable container resource limits**：持续活跃超2天，涉及核心运行时安全，建议优先分配开发资源。  
- **#1930 支持其他模型及第三方API通道**：自 4月23日提出至今无实质性动作，需评估战略价值并回复 roadmap。  
- **#2067 v2 scheduled tasks session-bound cross-thread blindness**：新提出的线程安全问题，可能影响 v2 多会话并发稳定性，需尽快验证。

--- 

*数据来源：GitHub qwibitai/nanoclaw，统计区间：2026-04-27 00:00 至 2026-04-28 23:59 UTC*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-04-28）**

---

### 1. **今日速览**
过去24小时，IronClaw 保持高活跃度：共处理33条PR更新（7条合并/关闭，26条待合并），新增10条Issue。核心团队持续推进Reborn架构落地，同时依赖项升级与CI稳定性问题引发关注。整体开发节奏稳健，但生产环境Canary测试连续失败需警惕。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
- **关键合并PR**：
  - [#2994](https://github.com/nearai/ironclaw/pull/2994)：修复V2引擎中`tool_info`工具信息检索逻辑，确保本地Action能正确暴露元数据，避免因全局注册缺失导致的运行时错误。
  - [#2989](https://github.com/nearai/ironclaw/pull/2989)：解决每日预算计数器未按本地时区重置的问题，提升定时任务可靠性。
  - [#2983](https://github.com/nearai/ironclaw/pull/2983)：建立Reborn架构“合同冻结”评审包，为后续分阶段集成提供结构化文档支持。

- **重要功能推进**：
  - Reborn架构首个子模块[#2988](https://github.com/nearai/ironclaw/pull/2988)（host API、资源管理、架构基础crate）已提交，标志正式进入模块化拆分阶段。
  - Aliyun Coding Plan支持[#1446](https://github.com/nearai/ironclaw/pull/1446)持续集成中，扩展多LLM提供商生态。

---

### 4. **社区热点**
- **最高关注度Issue**：[#2987](https://github.com/nearai/ironclaw/issues/2987)（7条评论）  
  聚焦如何拆解巨型堆叠PR以降低Reborn集成风险，体现社区对代码审查可维护性的强烈诉求。
- **高频讨论PR**：[#2993](https://github.com/nearai/ironclaw/pull/2993)、[#2996](https://github.com/nearai/ironclaw/pull/2996)、[#2999](https://github.com/nearai/ironclaw/pull/2999)  
  分别引入事件审计、文件系统、授权控制等Reborn子模块，开发者积极反馈接口设计合理性。

---

### 5. **Bug与稳定性**
| 严重等级 | Issue/PR | 问题描述 | 状态 |
|--------|--------|--------|------|
| High   | [#2887](https://github.com/nearai/ironclaw/issues/2887) | Google OAuth CI Canary因Headless Chrome被识别为Bot而中断 | 无活跃Fix PR |
| Medium | [#2991](https://github.com/nearai/ironclaw/issues/2991) | V2审批流提示模糊、路由混乱，强制串行执行 | 新报告，暂无响应 |
| Medium | [#2833](https://github.com/nearai/ironclaw/issues/2833) | 跨对话上下文污染，导致任务结果错乱 | 旧Issue，最后更新于今日 |
| Low    | [#2977](https://github.com/nearai/ironclaw/issues/2977) | OpenAI兼容Provider Canary失败 | 自动化Issue，需排查CI环境 |

> ⚠️ **稳定性警报**：今日连续3个Canary Lane（provider-matrix、public-smoke、private-oauth）失败，可能影响部署流水线可信度。

---

### 6. **功能请求与路线图信号**
- **用户明确需求**：
  - [Issue #1697](https://github.com/nearai/ironclaw/issues/1697)：请求Codex模型接入指南，当前CLI无法识别Codex作为基础模型。
- **路线图佐证**：
  - Reborn相关PR密集发布（#2987→#2988→#2993→#2996→#2999），证实架构重构已进入执行期。
  - 外部工具注册接口[#2871](https://github.com/nearai/ironclaw/pull/2871)和部署配置[#2925](https://github.com/nearai/ironclaw/pull/2925)表明项目正强化下游分叉能力。

---

### 7. **用户反馈摘要**
- **正面反馈**：  
  Aliyun支持（PR #1446）获开发者欢迎，尤其赞赏其HTTP/1.1兼容性设计；Reborn模块解耦策略获技术团队肯定。
- **痛点集中**：
  - 缺乏数据库选型说明（PR #2948被提及时反映“libSQL路径是唯一提及”的困惑）；
  - Codex模型配置文档缺失（Issue #1697）；
  - 生产环境升级后出现Routine/Mission分类错乱（Issue #2982）。

---

### 8. **待处理积压**
- **[#2887](https://github.com/nearai/ironclaw/issues/2887)**：Google OAuth CI问题自4月23日提出，近5天无实质性进展，影响自动化测试完整性；
- **[#1697](https://github.com/nearai/ironclaw/issues/1697)**：Codex使用问题超一个月未获响应，可能阻碍新用户采用；
- **[#2833](https://github.com/nearai/ironclaw/issues/2833)**：上下文污染问题虽非新发，但持续存在且无修复计划。

> 建议优先级处理：Google OAuth CI阻塞 > Codex文档补全 > 上下文隔离机制优化。

--- 

**数据来源**：GitHub API @ 2026-04-28 00:00 UTC

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-04-28）**

---

### 1. **今日速览**

LobsterAI 在 2026-04-27 表现出较高的开发活跃度，共处理 38 个 PR 更新与 7 个 Issue 动态。项目发布了一个新版本（v2026.4.25），主要修复编辑工具输入格式及内存搜索嵌入配置问题。整体代码质量与安全加固持续推进，多个涉及模型管理、会话持久化、日志脱敏的修复已合并，显著提升了系统稳定性与用户体验。

---

### 2. **版本发布**

**[LobsterAI v2026.4.25](https://github.com/netease-youdao/LobsterAI/releases/tag/v2026.4.25) (2026-04-25)**  
本次更新聚焦于功能完善与错误修复：
- **fix(cowork)**：恢复 DiffView 对 edit tool 中 `edits-array` 输入格式的支持（PR #1814）；
- **feat(settings)**：新增嵌入配置选项以支持内存搜索功能优化。

无破坏性变更或迁移注意事项。

---

### 3. **项目进展**

过去24小时共合并/关闭 **24 个 PR**，其中关键进展包括：

| PR # | 类型 | 描述 | 影响范围 |
|------|------|------|----------|
| [#1847](https://github.com/netease-youdao/LobsterAI/pull/1847) | fix | 修复自定义模型供应商使用 DeepSeek V4 的问题 | 模型调用 |
| [#1845](https://github.com/netease-youdao/LobsterAI/pull/1845) | fix | 防止 session modelOverride 被模型规范化重写 | Cowork / Agent |
| [#1844](https://github.com/netease-youdao/LobsterAI/pull/1844) | fix | 敏感键日志脱敏并提取通用 sanitizeForLog 工具 | 安全 / 日志 |
| [#1839](https://github.com/netease-youdao/LobsterAI/pull/1839) | fix | 同步多账户 OpenClaw 配置 | Enterprise |
| [#1843](https://github.com/netease-youdao/LobsterAI/pull/1843) | fix | 新会话持久化 model override | Session 隔离 |

这些合集体现了对 **模型兼容性、会话一致性、企业级部署及安全性** 的持续强化，尤其在高并发多模型场景下的健壮性提升明显。

---

### 4. **社区热点**

- **[Issue #1836](https://github.com/netease-youdao/LobsterAI/issues/1836)**：用户反馈界面设计“过于简陋”，建议重新美化以提升体验。此为当日新增 Issue，获 1 条评论，反映视觉交互亟待升级。
- **[PR #1527](https://github.com/netease-youdao/LobsterAI/pull/1527)**：邮件连接失败时新增 AI 诊断按钮，允许用户一键提交错误日志供 AI 分析。该 PR 虽非当日最新，但仍在活跃审查中，体现社区对智能排障功能的强烈需求。
- **[Issue #73 & #100]**：长期未解决的启动与打包报错问题持续引发关注，显示 Electron 构建流程仍存在环境兼容性问题。

---

### 5. **Bug 与稳定性**

#### 高优先级 Bug（需紧急响应）：
- **[Issue #73](https://github.com/netease-youdao/LobsterAI/issues/73)**：启动时报 404 错误，疑似路径解析异常。尚无有效解决方案。
- **[Issue #100](https://github.com/netease-youdao/LobsterAI/issues/100)**：macOS DMG 打包失败，提示入口文件缺失。可能与 Electron Builder 配置漂移有关。

#### 中优先级 Bug（已有修复 PR）：
- **[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)**：DeepSeek V4 模型请求 schema 被拒绝。对应 PR #1847 已合并，预计下个版本生效。
- **[Issue #955](https://github.com/netease-youdao/LobsterAI/issues/955)**：私有部署模型无法调用 Skill。虽已关闭，但类似问题可能复现。

> ✅ 所有当前活跃 Bug 均有对应技术 PR 在途或已解决，表明团队具备快速响应能力。

---

### 6. **功能请求与路线图信号**

- **UI/UX 重构需求上升**：#1836 明确提出界面美化诉求，结合近期多个表单必填标记优化（PR #1511），表明用户对交互一致性与视觉体验关注度提高。
- **智能诊断能力扩展**：邮件连接诊断（PR #1527）、安全日志脱敏（PR #1844）等模块均引入 AI 辅助决策机制，暗示未来将深化“自主运维 + AI 解释”能力。
- **Cron 调度支持**：PR #1519 新增 Cron 表达式支持定时任务，标志工作流自动化向专业调度器演进。

---

### 7. **用户反馈摘要**

- **正面反馈**：Cowork 模式下多模型并行会话稳定性显著改善（感谢 liuzhq1986 等贡献者）；
- **负面痛点**：
  - Windows 平台启动超时频发，依赖 Electron 生态导致调试困难；
  - macOS 安装包构建不稳定，影响企业分发部署；
  - 模型选择器在私有部署场景下易出现 stale reference，需更清晰的状态提示。

用户普遍认可核心功能（如技能调用、多端协作），但对底层技术栈（Electron）带来的体验损耗表示无奈。

---

### 8. **待处理积压**

- **[Issue #73](https://github.com/netease-youdao/LobsterAI/issues/73)**：自 2026-02-24 起持续未决，影响新用户上手，建议指派资深前端开发者排查 CLI 加载路径；
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**：Dependabot 发起的 Electron 依赖升级已搁置近一月，存在潜在安全风险，建议本周内 review 合并；
- **[Issue #17](https://github.com/netease-youdao/LobsterAI/issues/17)**：start dead loop 问题长期存在，可能与 punycode 弃用警告相关，需深入 Node.js 运行时兼容性分析。

---

*数据源：GitHub API @ 2026-04-28 | 分析师：AI 智能体与个人 AI 助手领域开源项目分析师*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-04-28）**

---

### 1. **今日速览**  
过去24小时，Moltis 项目保持高活跃度：共处理 **5 个 Issue**（1 新开/活跃，4 已关闭）和 **15 个 PR**（3 待合并，12 已合并/关闭），无新版本发布。核心开发集中在代码索引自动化、多通道可选化及 Web UI 功能增强三大方向。社区反馈积极，Bug 修复与架构优化并行推进，整体项目健康度良好。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
今日共合并 **12 个 PR**，显著推进以下方向：

- **代码索引自动化**（PR #900, #901, #902 被合并为 #903）：实现 `IndexJobManager` 与文件监听机制，支持启动时、会话创建后自动触发索引，避免手动操作，提升开发体验。
- **主代理架构简化**（PR #898）：将“主代理”从特殊逻辑转为普通数据库记录，统一所有代理的模型/提供者路由能力，响应 Issue #774 需求。
- **Web UI 交互优化**（PR #892）：恢复会话名称显示与内联重命名功能，修复了因 #886 引入的 UI 回归问题。
- **安全加固与测试覆盖**（PR #894）：针对 Hook 电路断路器添加回归测试，确保返回 `Block` 的安全钩子不会误触发熔断，巩固系统稳定性。
- **构建流程清理**（PR #895）：停止提交前端生成资源，改用编译期检查 + 统一脚本（`just`/`scripts/build-web-assets.sh`），减少仓库冗余并提升可维护性。
- **通道模块化**（PR #890/#889/#891 合并为 #899）：Telegram 通道已标记为可选；Discord 与 MS Teams 亦跟进此模式，未来用户可按需启用以减少二进制体积。

> 这些变更标志着 Moltis 正从功能完备转向轻量化、易用性与可维护性并重的新阶段。

---

### 4. **社区热点**  
最活跃的议题是 **#896**（Docker 构建 DNS 解析失败），反映容器化部署场景下的基础设施依赖问题。尽管仅1条评论，但问题明确指向 Ubuntu 软件源不可达，影响新用户快速上手。

其余 Issue 均为已关闭状态，表明社区对历史问题响应迅速。目前无高热度争议性讨论。

---

### 5. **Bug 与稳定性**  
今日报告 **1 个新 Bug**（#896）：Docker 构建期间 `apt-get update` 无法解析 `ports.ubuntu.com`，属网络环境问题，非代码缺陷。已有潜在缓解方案建议（如更换镜像源），暂无关联 Fix PR。

此前报告的 **4 个 Bug**（含 #547、#317、#888）均已通过 PR 修复：
- #547（Hook 熔断误判）→ PR #894 已合入回归测试；
- #888（会话名丢失）→ PR #892 已恢复 UI 功能；
- #317（Jinja 异常）→ 未直接关联 PR，但可能随架构重构间接解决。

整体稳定性持续改善。

---

### 6. **功能请求与路线图信号**  
- **#774（简化主代理架构）** 已由 PR #898 完全实现，标志该长期需求落地。
- **#899（多通道可选化）** 延续自 Telegram 的先例，预示未来所有集成渠道（如 Slack、Email）均可能支持 opt-out 构建，降低入门门槛。
- **#903（自动代码索引）** 作为核心生产力工具升级，暗示下一版本将重点优化 AI 助手对本地代码的理解效率。
- **#904（命令面板 Cmd+K）** 提供全局快捷操作入口，符合现代编辑器交互范式，可能成为 Web UI 标准配置。

---

### 7. **用户反馈摘要**  
- **痛点**：Docker 环境网络隔离导致依赖安装失败（#896），暴露了跨平台部署文档不足的问题。
- **满意度**：用户对会话重命名功能恢复（#888）表示认可；自动索引（#903）被期待已久，尤其适合大型项目用户。
- **使用场景**：多数反馈来自开发者本地调试与团队内部部署场景，强调轻量、可定制、无侵入式集成。

---

### 8. **待处理积压**  
- **#896**（Docker 构建 DNS 失败）：虽为环境问题，但建议补充部署文档中镜像源切换指南以预防同类问题。
- **#774** 与 **#547** 等历史 Issue 已闭环，无需额外关注。
- **PR #903 / #899 / #904** 仍为 Open 状态，等待审核。其中 #903（代码索引）和 #899（通道可选）涉及核心架构变更，需重点关注合并质量。

--- 

> 数据来源：[moltis-org/moltis](https://github.com/moltis-org/moltis) | 统计时间：2026-04-27 至 2026-04-28

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-04-28）**

---

### 1. **今日速览**  
过去24小时 CoPaw 社区活跃度较高，共处理 Issue 50 条、PR 43 条，其中 Issues 新增/活跃与关闭各半，PR 待合并与已合并数量接近，显示项目处于稳定迭代期。无新版本发布，但多个关键 Bug 和体验优化 PR 已进入待合并状态，整体进展平稳。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  

#### 合并/关闭的重要 PR（精选）：
- **[PR #3879] chore(version): bumping version to 1.1.4.post3**  
  版本号升级至 `1.1.4.post3`，为后续修复补丁做准备。  
  🔗 [agentscope-ai/QwenPaw#3879](https://github.com/agentscope-ai/QwenPaw/pull/3879)

- **[PR #3877] fix(ci): correct integration test directory path in tests.yml**  
  修复了 CI 集成测试路径错误，提升自动化测试可靠性。  
  🔗 [agentscope-ai/QwenPaw#3877](https://github.com/agentscope-ai/QwenPaw/pull/3877)

- **[PR #3872] fix(qq): reconnect on recoverable websocket socket aborts**  
  解决 QQ 频道因可恢复的 WebSocket 中断导致线程崩溃的问题，增强通道稳定性。  
  🔗 [agentscope-ai/QwenPaw#3872](https://github.com/agentscope-ai/QwenPaw/pull/3872)

- **[PR #3834] fix(config): inherit acp in fallback agent profile**  
  修复 fallback agent 配置中缺失 `acp` 字段的问题，避免默认使用 `opencode` 造成行为不一致。  
  🔗 [agentscope-ai/QwenPaw#3834](https://github.com/agentscope-ai/QwenPaw/pull/3834)

这些 PR 主要集中在配置一致性、通道健壮性和 CI/CD 流程优化，表明项目正加强基础架构稳定性。

---

### 4. **社区热点**  

#### 高互动 Issue / PR（评论 ≥5）：
- **[Issue #3430] QwenPaw和CoPaw关系是啥？以后是一起维护吗？**  
  用户对 QwenPaw 与 CoPaw 的关系存在困惑，反映生态命名混乱问题。  
  🔗 [agentscope-ai/QwenPaw#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430)

- **[Issue #3869] 提供 channel 侧高危命令批准能力**  
  用户强烈呼吁在非 Web UI 渠道（如命令行或微信）支持安全审批机制，否则“channel 功能形同虚设”。  
  🔗 [agentscope-ai/QwenPaw#3869](https://github.com/agentscope-ai/QwenPaw/issues/3869)

- **[PR #3889] feat: live inter-agent task progress via ProgressObservingHook**  
  引入实时任务进度观察钩子，支持多智能体协同时的状态追踪，属重要功能推进。  
  🔗 [agentscope-ai/QwenPaw#3889](https://github.com/agentscope-ai/QwenPaw/pull/3889)

- **[Issue #3843] Session history disappears and new messages routed to different session**  
  会话历史丢失问题严重影响用户体验，需优先排查存储逻辑。  
  🔗 [agentscope-ai/QwenPaw#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)

> **分析**：社区关注点集中在 **多通道安全控制**、**会话持久化** 和 **多智能体协作透明度**，反映出用户在生产部署中对稳定性和可观测性的高要求。

---

### 5. **Bug 与稳定性**  

按严重程度排序：

| 等级 | Issue | 描述 | 是否有 Fix PR |
|------|-------|------|----------------|
| ⚠️ High | [#3843] Session history lost | 会话历史突然消失，新消息误入其他会话 | 暂无 |
| ⚠️ High | [#3854] chromadb Rust binding segfault | ChromaDB 绑定引发段错误，进程被杀 | 无（新报告） |
| ⚠️ Medium | [#3850] Pause button ineffective | Web UI 暂停仅前端停止，后端仍运行 | 无 |
| ⚠️ Medium | [#3824] Config lost after restart | 重启后 agent 配置（如计划模式）丢失 | ✅ PR #3834 部分相关 |

> **说明**：`chromadb` 段错误影响 Linux 环境，可能涉及依赖版本兼容；配置丢失问题在 Docker 部署场景频发，需检查持久化策略。

---

### 6. **功能请求与路线图信号**  

- **Proactive 消息跨渠道发送**（[#3804]）  
  用户希望主动消息能发送至飞书、钉钉等渠道而非仅限 Console，已有 PR 讨论实现可能性，预计纳入近期规划。

- **Token 消耗实时显示**（[#3366]）  
  成本透明化需求强烈，参考 HermES Agent 设计，UI 增加 Token 使用条和预算预警，具备可行性高。

- **Apple Silicon 原生支持 browser_use**（[#2655]）  
  性能优化诉求，Playwright 应默认下载 ARM64 版 Chromium，技术方案明确，待资源投入。

- **火山 Coding Plan 默认支持**（[#3753]）  
  用户期待扩展模型提供商支持，当前已有 GitHub Copilot 请求（[#406]），火山引擎跟进可能性大。

---

### 7. **用户反馈摘要**  

- **痛点集中点**：
  - 配置不持久（尤其 Docker 环境）
  - Web UI 响应慢、卡顿（Windows 客户端）
  - 多工具调用时消息截断（微信渠道）
  - MCP 服务偶发卡死导致会话阻塞

- **满意之处**：
  - 快速响应复杂问题（如 #3705 诊断代理取消原因）
  - 社区文档逐步完善（安装脚本、部署指南）

- **典型场景**：
  - 用户通过 cron 执行带时间变量的 git 命令被安全规则误拦
  - 开发者使用 opencode 作为外部代理时遭遇间歇性取消
  - 管理员需在无公网访问环境下远程审批高危操作

---

### 8. **待处理积压**  

| Issue/PR | 问题类型 | 时长 | 建议行动 |
|--------|--------|------|--------|
| [#3430] QwenPaw vs CoPaw 关系澄清 | 文档/品牌 | >2 周 | 发布官方说明公告 |
| [#2655] Apple Silicon browser_use 支持 | 功能请求 | >6 周 | 评估 Playwright 配置修改难度 |
| [#406] 支持 GitHub Copilot | 功能请求 | >3 月 | 检查 OpenClaw 实现参考 |
| [#3366] Token 实时显示 | 功能请求 | >2 月 | 纳入 v1.2.0 规划 |

> **提醒**：长期未闭环的功能请求易造成社区误解，建议定期更新路线图或发布 FAQ。

--- 

**总结**：CoPaw 项目今日维持健康迭代节奏，重点修复配置持久化、通道稳定性及多智能体协作能力。社区对安全与可观测性需求显著上升，建议下一版本聚焦 **会话管理**、**跨渠道安全审批** 和 **Token 成本控制** 三大方向。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报（2026-04-28）**

---

### 1. **今日速览**  
过去24小时，ZeroClaw 社区活跃度显著：共处理 **96 条 Issues/PRs**（Issues: +39 活跃 / -7 关闭；PRs: +38 待合并 / +12 已合并），无新版本发布。核心团队持续推进 v0.7.4 里程碑工作，重点修复 provider、gateway 和配置系统稳定性问题。整体开发节奏稳定，安全与维护类更新占比上升。

---

### 2. **版本发布**  
无新版本发布。v0.7.4 仍处于功能集成阶段（见 Issue #5877）。

---

### 3. **项目进展**  
**已合并 PR 亮点：**
- **#6062**: 重构工具验证错误处理，从字符串硬编码转向类型化枚举，提升代码可维护性 [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6062)
- **#6082**: 在 cron 和 daemon 中补全 memory context 闭合标签，避免模型解析混乱 [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6082)
- **#6098**: 删除 zeroclaw-runtime 中死代码 tracker.rs，减少编译冗余 [🔗](https://github.com/zeroclaw-labs/zeroclaw/pull/6098)

**关键功能推进：**
- ACP 协议 v1 实现完成（PR #6167），恢复与 Nori 等外部系统的兼容性
- WeChat iLink Bot 通道恢复并新增支持（PR #6130 & #6166）
- 成本追踪与 token 使用记录在 gateway 中常态化（PR #6159）

项目正向多通道集成与稳定性方向稳步迈进。

---

### 4. **社区热点**  
**高关注度 Issue：**
- **[Bug] default_model issue on fresh install** (#6123)：新用户首次安装后无法加载默认模型，影响 LXC 容器部署场景，14 条评论反映 workflow 阻塞，属 S1 严重级别 [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)
- **v0.7.4 milestone tracking** (#5877)：持续跟踪该版本进度，含技能去标识化、批量字段迁移等关键任务，6 条评论体现社区对发布节奏的关注 [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)
- **CPU spikes when typing into agent chat** (#5125)：Firefox 下输入时 CPU 多核满载，S0 数据/安全风险，虽存在较久但近期仍活跃 [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/5125)

诉求集中于 **新用户体验优化** 与 **生产环境稳定性**，尤其关注配置一致性与资源效率。

---

### 5. **Bug 与稳定性**  
按严重程度排序：

| 等级 | Issue | 描述 | Fix PR |
|------|-------|------|--------|
| **S1** | #6123 (fresh install default_model) | 新安装无法启动 agent，workflow 阻塞 | 无 |
| **S1** | #5600 (kimi-code streaming error) | Kimi API 返回 reasoning_content 缺失错误 | 无 |
| **S1** | #4878 (E2EE recovery broken) | 加密房间密钥未恢复，导致 DMs 不可用 | 无（长期积压） |
| **S2** | #5244 (Dashboard crash on v0.6.8) | Channels 标签页崩溃，Overview 渲染失败 | 无 |
| **S2** | #6096 (install.sh 缺失 web dashboard) | 预构建安装不提取前端资源 | **#6154** (已提交) |

> ✅ **已有修复进展**：#6154 将解决安装脚本遗漏 web UI 的问题。

---

### 6. **功能请求与路线图信号**  
用户提出以下潜在新功能：
- **schema v3 批量迁移** (#5947)：统一处理配置字段变更，减少升级中断——标记为 merge blocker，表明即将进入发布周期
- **hybrid skills + WASM tools** (#6140)：支持技能插件同时包含 SKILL.md 与 WASM 模块，提升扩展灵活性
- **快速记忆清除命令** (#6150)：为 Telegram/Discord 添加 `/clear` 原生指令，改善交互体验
- **手动触发 cron 任务** (#6164)：通过 WebUI 执行定时任务，增强运维便利性

结合现有 PR 可见，下一版本（v0.7.4）将重点强化 **配置管理、通道集成、技能生态** 三大方向。

---

### 7. **用户反馈摘要**  
- **痛点集中点**：
  - 配置文档过时（#6149）：本地测试指南中的 config.toml 示例与实际键名不符，误导用户
  - 安装流程断裂：install.sh 不提取 web dashboard（#6096），导致 gateway 启动失败
  - 内存与上下文管理不便：缺乏一键清除或历史会话恢复机制（#6145, #6150）
- **积极信号**：
  - 用户对 ACP 协议支持表示欢迎，认为有助于生态互操作
  - 多语言文档同步（含中文）获认可，国际化进展受好评

总体反馈偏建设性，聚焦于降低上手门槛与提升可靠性。

---

### 8. **待处理积压**  
- **#4878**: E2EE 恢复失效问题自 3 月起报告，S1 级阻塞，涉及 Matrix 加密通信核心功能，需优先处理
- **#5947**: schema v3 迁移为 v0.7.4 关键路径，但 checklist 中多项 pending，可能延迟发布
- **#5835**: cancel_tokens 内存泄漏风险（网关会话废弃后未清理），虽非崩溃但影响长期运行稳定性

建议维护者优先评估 #4878 与 #5947，防止进一步阻塞下游交付。

--- 

*数据来源：[zeroclaw-labs/zeroclaw GitHub 仓库](https://github.com/zeroclaw-labs/zeroclaw)*  
*分析师：AI 智能体与个人 AI 助手领域开源项目分析师*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*