# OpenClaw 生态日报 2026-05-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-21 00:38 UTC

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

**OpenClaw 项目动态日报 - 2026年5月21日**

---

### 1. **今日速览**

OpenClaw 在昨日（5月20日）表现出极高活跃度，Issues 和 PRs 均更新500条，显示社区持续贡献。发布3个新版本（含2个beta），重点增强 Discord 语音会话追踪与依赖升级。安全类 Issue 占比显著，反映用户日益关注凭证防护。整体项目处于高速迭代期，维护压力较大。

---

### 2. **版本发布**

#### v2026.5.20-beta.1
- **核心更新**：实现 Discord 语音会话跟随配置用户进入指定频道，支持多用户交接、有界协调及 DAVE 恢复机制（#84264）。
- **补充说明**：引入 `IDENTITY.md`/`USER.md` 边界文档支持，提升身份一致性。
- **迁移注意**：无破坏性变更，但建议测试 Discord 语音场景下的通道权限规则。

#### v2026.5.19 & v2026.5.19-alpha.1
- **关键改进**：
  - 明确修复策略应优先采用“有界重构”与插件 SDK/API 弃用路径（#Agents 方向）；
  - 升级 `@openclaw/proxyline` 至 0.3.3；
  - Pi 包升至 0.75.1，Node.js 最低支持版本提升至 22 LTS。
- **破坏性变更**：Node.js <22 环境将不再兼容，需提前升级运行时。

---

### 3. **项目进展**

#### 已合并/关闭的重要 PR
- **#84742**（自动合入）：`doctor` 工具新增警告逻辑，当沙箱隐藏 MCP 工具时提示用户，增强可观测性。
- **#84718**（自动合入）：检测并警告明文存储 API key 的 `openclaw.json` 配置，推动 Secrets Management 实践。
- **#84738**：停止向 `models.json` 写入明文 provider keys，从源头降低凭证泄露风险。
- **#84326**（进行中）：结构化 sandbox repair 检查流程，为后续自动化修复打下基础。

> ✅ 以上 PR 表明项目正加强安全性与诊断能力，尤其针对敏感信息暴露问题采取主动拦截措施。

---

### 4. **社区热点**

#### 高讨论度 Issues
| Issue | 主题 | 热度 | 诉求分析 |
|-------|------|------|--------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏到消息通道 | P1, 🦞 | 核心 UX 缺陷：内部处理输出误发至 Slack/iMessage，需隔离非最终响应内容 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 提供预编译 Android APK | P2, 🌊 | 移动端普及需求强烈，当前仅源码不利普通用户使用 |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) | API Key 保护路线图 | P2, 🦞 | 提出分层安全方案，涵盖 LLM 提示脱敏、运行时隔离等，具战略意义 |

> 💡 用户普遍期待 **更安全的秘密管理** 与 **跨平台部署便利性**，尤其是企业用户。

---

### 5. **Bug 与稳定性**

#### 严重 Bug（按优先级排序）
1. **[P1] #84059**：嵌入式运行时报 `EmbeddedAttemptSessionTakeoverError`，因 session 文件在锁释放期间被修改（#84059）→ **已有 fix PR #84250**
2. **[P1] #72808**：Slack 连接静默丢失，影响演示可靠性（#72808）→ 暂无公开修复
3. **[P1] #84038**：`doctor --fix` 错误迁移 Codex 配置导致令牌膨胀 3–4x（#84038）→ 暂无修复 PR
4. **[P2] #83744**（已关）：Discord progress 状态残留阻塞后续回复（#83744）→ 已由 #81226 修复

> ⚠️ 内存溢出（#57349）、Apple Silicon GPU 崩溃（#44202）等长期问题仍未闭环，需持续关注。

---

### 6. **功能请求与路线图信号**

#### 高频功能需求
- **Masked Secrets 系统**（#10659）：允许使用 API key 而不暴露值 → 多个 PR（如 #84738）正在推进凭证脱敏
- **Telegram Business Bot 支持**（#20786）→ 已有实现尝试（#84558）
- **AWS 部署指南**（#13597）：云原生部署需求上升，配合 CI/CD 趋势
- **Fallback Approval Mode**（#33975）：模型降级时的透明控制，体现对生产稳定性的重视

> 📌 结合 PR 活动可见，**安全与可观测性** 是下一阶段重点方向。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - 明文配置文件带来安全隐患（#11829, #13610）；
  - 子代理公告无法抑制（#8299）；
  - Control UI 重复显示消息（#71992）；
  - TTS 朗读表情符号体验差（#78172）。
- **满意场景**：
  - 自动更新机制初步可用（#12855 获 5👍）；
  - 原生 web_search 支持 xAI Grok（#17925 获 5👍）。

---

### 8. **待处理积压**

| Issue/PR | 描述 | 超期时间 | 建议行动 |
|---------|------|----------|--------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 文本泄漏（P1, 🦞） | 86天未解决 | 需分配核心开发者介入 |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) | 安全路线图 | 91天未决 | 应启动专项工作组 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | Safe/Unsafe ClawdBot 模式 | 97天 | 评估 Rust 重写可行性 |
| [#35241](https://github.com/openclaw/openclaw/pull/35241) | CLI --session-key 支持 | 67天未合并 | 属基础设施增强，宜加速推进 |

> 🔔 上述 Issue 均标记为 🦞 diamond lobster 或 P1，建议本周内安排维护者 Review。

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我将基于您提供的各项目动态摘要，为您生成一份横向对比分析报告。

---

## 个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-05-21)

### 1. **生态全景**

当前个人 AI 助手与自主智能体开源生态正处于高速发展期，呈现出多元化、模块化和专业化的趋势。核心项目如 OpenClaw 和 Hermes Agent 展现出强大的社区活力和迭代速度，而新兴或特定领域项目如 PicoClaw 和 IronClaw 则聚焦于特定场景（如边缘设备、企业级集成）。安全、可观测性、多平台集成和开放协议支持成为共同的技术焦点。整体来看，生态正从单一代理工具向模块化、可扩展的智能体开发平台演进，为开发者提供了更丰富的选择。

### 2. **各项目活跃度对比**

| 项目名称 | Issues 数 (今日) | PR 数 (今日) | Release 情况 | 健康度评估 |
| :------- | :-------------- | :----------- | :----------- | :--------- |
| OpenClaw | 500+ (Issues & PRs) | 3 (v2026.5.20-beta.1 等) | 3个新版本发布 | ⭐⭐⭐⭐☆ (高活跃，维护压力大) |
| NanoBot | 11 | 40 (13待合并) | 无 | ⭐⭐⭐⭐☆ (高活跃，架构优化中) |
| Hermes Agent | 50 (Issues & PRs) | 11 (10已合并) | 无 | ⭐⭐⭐⭐☆ (极高活跃，网关与平台集成焦点) |
| PicoClaw | 8 | 27 (11已合并) | Nightly Build | ⭐⭐⭐⭐☆ (高度活跃，安全与稳定性重点) |
| NanoClaw | 4 | 23 (6已合并) | 无 | ⭐⭐⭐⭐☆ (高活跃，WhatsApp集成与基础设施优化) |
| NullClaw | 0 | 2 (长期PR更新) | 无 | ⭐⭐⭐⭐ (稳定，基础设施改进) |
| IronClaw | 18 | 46 (3已合并) | 无 | ⭐⭐⭐⭐☆ (高度活跃，Reborn架构集成重点) |
| LobsterAI | 4 | 24 (7已合并) | 无 | ⭐⭐⭐⭐ (较高活跃，用户体验优化) |
| TinyClaw | 0 | 0 | 无 | ⭐⭐⭐ (静默) |
| Moltis | 3 | 3 (3已合并) | 无 | ⭐⭐⭐⭐ (稳健，功能增强) |
| CoPaw | 16 | 36 (17已合并) | v1.1.8.post1 | ⭐⭐⭐⭐☆ (高活跃，功能修复与新增) |
| ZeptoClaw | 0 | 1 (待合并) | 无 | ⭐⭐⭐⭐ (稳定，Bug修复) |
| ZeroClaw | 29 | 50 (47待合并) | 无 | ⭐⭐⭐⭐☆ (极高活跃，v0.8.0集成阶段) |

**健康度评估说明：**
*   **⭐⭐⭐⭐⭐**: 极高活跃，问题响应迅速，架构持续演进，社区反馈积极。
*   **⭐⭐⭐⭐☆**: 高活跃，有明确发展方向，Bug修复及时，但可能存在一定维护压力或特定挑战。
*   **⭐⭐⭐⭐**: 稳定活跃，注重质量与稳定性，或有阶段性重点。
*   **⭐⭐⭐**: 活跃度较低，可能处于维护模式或发展放缓阶段。

### 3. **OpenClaw 在生态中的定位**

*   **优势**:
    *   **核心参照**: 作为“核心参照”项目，其活跃度、功能广度和社区规模在生态中具有标杆地位。
    *   **功能广度**: 覆盖了 Discord、Slack 等多种通信渠道，以及 MCP 工具集成、安全策略等关键功能。
    *   **社区规模与影响力**: 极高的 Issue 和 PR 数量表明其拥有庞大的用户和贡献者基础，对生态有显著影响。
*   **技术路线差异**:
    *   **深度集成与安全性**: OpenClaw 表现出对深度平台集成（如 Discord 语音会话追踪）和安全防护（如 Secrets Management、明文 API key 警告）的高度重视，强调生产环境的安全性和可靠性。
    *   **结构化与诊断能力**: 引入了 `doctor` 工具来增强可观测性和诊断能力，并推动“有界重构”策略，显示出对系统健壮性和可维护性的关注。
*   **社区规模对比**:
    *   **OpenClaw** 无疑是生态中最活跃的之一，远超大多数其他项目（如 Moltis, NullClaw, ZeptoClaw）。NanoBot, Hermes Agent, IronClaw, ZeroClaw 与之接近，而其他项目则相对较小。

### 4. **共同关注的技术方向**

*   **安全与可观测性**:
    *   **OpenClaw**: 安全类 Issue 占比显著，`doctor` 工具增强可观测性，Secrets Management 实践。
    *   **Hermes Agent**: `hermes providers validate` 命令用于部署就绪性检查，增强安全性。
    *   **IronClaw**: Reborn 架构下 secrets 注入与 egress 路由验证，CI/CD 自动化提升可观测性。
    *   **PicoClaw**: 安全加固（恢复出厂设置、MCP 初始化失败非致命化）。
*   **多平台/多通道集成**:
    *   **NanoBot**: Signal 通道集成、xAI OAuth 支持。
    *   **OpenClaw**: Telegram Business Bot 支持、AWS 部署指南。
    *   **Hermes Agent**: 网关与 Discord、Slack、Telegram、Feishu 等平台集成讨论。
    *   **CoPaw**: WeChat iLink、飞书 CardKit 等特定平台适配。
*   **开放协议与标准支持**:
    *   **NanoClaw**: Agent Client Protocol (ACP) 客户端和服务端支持，IDE 集成。
    *   **LobsterAI**: 模型自定义参数透传，增强与 Claude 等推理型模型的兼容性。
    *   **ZeroClaw**: 技能系统演进，工具抽象化。
*   **用户体验与稳定性**:
    *   **OpenClaw**: 解决文本泄漏、Slack 连接静默丢失等 Bug，优化自动更新机制。
    *   **NanoBot**: WebUI 对话中断、exec 工具依赖管理问题。
    *   **Hermes Agent**: TUI 界面混乱、ANSI 转义序列泄漏等 Bug 修复。
    *   **IronClaw**: WebUI 迁移至原生 Reborn 表面，提升交互体验。
    *   **CoPaw**: 页面性能优化、定时任务推送失败修复。

### 5. **差异化定位分析**

*   **功能侧重**:
    *   **OpenClaw/Hermes Agent/IronClaw**: 更偏向于构建强大、安全、可观测的通用 AI 智能体平台，强调多平台集成、高级路由、生产级稳定性和企业级特性。
    *   **NanoBot/PicoClaw/NanoClaw**: 更注重特定通信渠道（如 WhatsApp, Signal）的深度集成、轻量级部署和快速上手，目标用户可能是希望快速搭建特定场景 AI 助手的个人或小团队。
    *   **NullClaw/Moltis/ZeptoClaw**: 更侧重于底层基础设施、内部调度系统、特定环境兼容性及核心功能的健壮性，适合需要高度定制化或特定后端支持的开发者。
    *   **LobsterAI/CoPaw**: 强调用户界面的友好性、多模态交互（如 Thinking Block 渲染）、特定工作流集成（如 IDE）和社区驱动的易用性改进。
    *   **TinyClaw**: 当前无活动，可能处于休眠或等待激活状态。
    *   **ZeroClaw**: 专注于多代理架构、配置系统的高级特性（如嵌套配置、动态映射），目标用户可能是需要复杂代理协作和精细配置管理的用户。
*   **目标用户**:
    *   **企业/高级开发者**: OpenClaw, Hermes Agent, IronClaw, ZeroClaw 更适合构建复杂、稳定的企业级 AI 解决方案。
    *   **个人/小型团队**: NanoBot, PicoClaw, NanoClaw, LobsterAI, CoPaw 可能更受希望快速原型开发或特定场景应用的个人和小团队欢迎。
    *   **特定需求开发者**: NullClaw, Moltis, ZeptoClaw 适合对底层技术有深入定制需求的开发者。
*   **技术架构**:
    *   **模块化与可扩展性**: Hermes Agent (网关组件), IronClaw (Reborn 架构), NanoClaw (ACP 协议), ZeroClaw (V3 多代理运行时) 都表现出强烈的模块化设计倾向，便于扩展新功能和集成。
    *   **生产就绪**: OpenClaw, Hermes Agent, IronClaw 都强调生产环境的安全性和稳定性，具备较强的容错和监控能力。
    *   **轻量化**: PicoClaw, NanoClaw 关注边缘设备和快速部署，体现出对资源消耗和启动时间的考量。
    *   **特定后端集成**: Moltis (QMD), NullClaw (Cron 子代理引擎), ZeptoClaw (特定提供商配置) 更侧重于与特定后端或环境的深度集成。

### 6. **社区热度与成熟度**

*   **快速迭代阶段 (High Iteration)**:
    *   **OpenClaw**: 极高的 Issue/PR 数量和版本发布频率，处于高速迭代期。
    *   **Hermes Agent**: 极高活跃度，网关与平台集成是主要焦点，迭代速度快。
    *   **IronClaw**: 高度活跃，Reborn 架构全面落地是关键，工程节奏紧凑。
    *   **ZeroClaw**: 极高活跃度，v0.8.0 集成阶段，大量 Bug 修复和功能推进。
    *   **NanoBot**: 高活跃度，架构持续优化，新功能模块并行推进。
    *   **CoPaw**: 高活跃度，功能修复与新增频繁。
*   **质量巩固阶段 (Quality Consolidation)**:
    *   **PicoClaw**: 高度活跃，但更侧重于安全加固和消息总线稳定性，显示出对质量的重视。
    *   **NanoClaw**: 高活跃度，重点在 WhatsApp 集成修复和容器安全加固，体现对稳定性和特定场景的深入打磨。
    *   **Moltis**: 稳健活跃，功能增强和 Bug 修复并行，注重稳定性和功能性。
    *   **LobsterAI**: 较高活跃度，重点在浏览器稳定性、模型参数透传及用户界面体验优化。
*   **稳定/维护阶段 (Stable/Maintenance)**:
    *   **NullClaw**: 低活跃度，长期 PR 更新，聚焦底层基础设施改进。
    *   **ZeptoClaw**: 相对平静，主要精力集中在修复潜在的配置问题。
    *   **TinyClaw**: 无活动，可能处于休眠或等待激活状态。

### 7. **值得关注的趋势信号**

*   **AI 智能体的生产化与专业化**: 越来越多的项目（OpenClaw, Hermes Agent, IronClaw, ZeroClaw）开始强调生产环境下的安全性、可观测性、稳定性和企业级特性，表明 AI 智能体正从实验性工具向实际生产力工具转变。
*   **多模态与深度平台集成**: 对特定平台（Discord, Slack, Telegram, WhatsApp, Feishu, Gmail, Calendar, Notion）的深度集成和原生体验优化成为普遍追求，反映出用户对 AI 助手能够无缝融入现有工作流程的需求日益增长。
*   **开放协议与生态互联**: ACP 协议的引入（NanoClaw）和模型自定义参数透传（LobsterAI）等趋势，显示出项目正努力打破封闭生态，促进不同 AI 代理之间的互操作性和协作能力，构建更开放的 AI 智能体网络。
*   **开发者体验与工具链完善**: 对 CI/CD 自动化（IronClaw `/benchmark` 指令）、IDE 集成（NanoClaw ACP 桥接）、文档本地化（NanoBot）和错误诊断工具（OpenClaw `doctor`）的关注，表明项目越来越重视提升开发者的使用效率和开发体验。
*   **安全成为核心考量**: 从明文 API key 警告（OpenClaw, Hermes Agent）到 Secrets Management 实践，再到生产环境中的安全策略（ZeroClaw），安全问题已成为所有项目的核心关注点，尤其是在涉及敏感数据和自动化流程的场景下。

**对 AI 智能体开发者的参考价值**:
对于 AI 智能体开发者而言，这些趋势意味着需要选择一个不仅功能强大，而且安全可靠、易于集成、并能适应未来发展的开源项目。关注那些在生产环境中被验证过的项目（如 OpenClaw, Hermes Agent），同时利用开放协议和标准（如 ACP）来实现与其他系统的灵活对接。此外，积极参与社区反馈，贡献代码，也是推动生态发展和解决自身需求的重要途径。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-05-21）**

---

### 1. **今日速览**

过去24小时，NanoBot 社区活跃度显著提升，共新增 Issue 11 条、Pull Request 40 条，其中待合并 PR 达 13 条。项目整体处于高开发节奏状态，多个新功能模块正在并行推进。Signal 通信通道集成、xAI OAuth 支持及危险命令确认机制等关键特性已进入代码审查阶段。尽管无新版本发布，但功能迭代密度较高，技术债清理与用户体验优化同步进行。

---

### 2. **版本发布**

**无新版本发布**。当前最新 Release 仍为历史版本，无重大 Breaking Change 或迁移需求。

---

### 3. **项目进展**

今日共 **27 个 PR 被合并或关闭**，涵盖基础设施重构、多语言文档完善、安全策略增强及 LLM 提供商扩展。

- **[#3852] feat(signal): add Signal channel support**  
  ✅ 已合并：实现基于 `signal-cli` 的端到端加密消息通道，支持私信与群组通信，引入身份白名单与富文本转换机制。该 PR 此前因实现路径争议一度停滞，最终由 chengyongru 提交稳定版本并完成审核。  
  🔗 [PR #3852](https://github.com/HKUDS/nanobot/pull/3852)

- **[#3930] docs(readme): add multi-language doc site links**  
  ✅ 已合并：在 README 顶部添加 10 种语言的官方文档入口（含中文简繁体），显著提升国际化可访问性。  
  🔗 [PR #3930](https://github.com/HKUDS/nanobot/pull/3930)

- **[#3179, #2813, #2787, #2801, #2852, #2932, #2981, #3026, #3224, #3286, #3748]**  
  上述一系列 PR 均已完成合并，主要涉及 WebSocket 会话管理、心跳服务抽象化、工具注册统一化、令牌使用追踪、消息去重及错误处理增强，体现了架构持续演进与稳定性提升。

总体来看，项目在 **通信能力扩展（Signal）、安全控制（exec 危险命令）、多提供商支持（Novita/xAI）及用户体验（WebUI 修复）** 四大方向取得实质性进展。

---

### 4. **社区热点**

最活跃的议题集中在 **多用户共享 Agent 的内存隔离问题** 和 **IMAP 安全登录兼容性**：

- **[#3744] session级别MEMORY功能请求**  
  作者 IamWWT 提出：当多个 IM 用户共用同一 Agent 实例时，`USER.md` 与 `MEMORY.md` 存在交叉污染风险。当前 `session/` 目录虽用于临时存储，但未提供命名空间隔离机制。该 Issue 获 4 条评论，反映企业级协作场景下的核心痛点。暂无对应 PR，但已有维护者标注“需纳入 v0.3.0 规划”。  
  🔗 [Issue #3744](https://github.com/HKUDS/nanobot/issues/3744)

- **[#1123] 163.com 邮箱 IMAP "SELECT Unsafe Login" 问题**  
  描述网易邮箱对第三方客户端的安全限制导致邮件接收失败。此问题已被复现并分析根本原因（缺少 ID 命令声明），社区期待官方提供适配方案。虽无直接 PR 响应，但已有开发者建议参考 RFC 扩展实现。  
  🔗 [Issue #1123](https://github.com/HKUDS/nanobot/issues/1123)

此外，**#49 Signal 通道功能请求** 持续获得关注（+5 👍），表明用户对高安全性通信渠道有明确需求，其关联 PR 已在近期上线。

---

### 5. **Bug 与稳定性**

共识别出 **5 个活跃 Bug 报告**，按严重程度排序如下：

| 编号 | 问题描述 | 影响范围 | 是否已有 Fix PR |
|------|--------|--------|----------------|
| #3934 | exec 工具无法通过 pip 安装 Python 第三方库（虚拟环境 PATH 优先级问题） | 脚本执行功能 | ❌ 无 |
| #3884 | WebUI 对话首次回复后自动关闭 | 用户界面体验 | ❌ 无 |
| #3931 | `restrictToWorkspace=true` 误拦截合法外部 HTTP 请求（如 curl） | 安全策略误判 | ❌ 无 |
| #3939 | Moonshot API 拒绝同时发送 `reasoning_effort` 与 `thinking` 参数 | Kimi K2.x 模型调用失败 | ✅ 已有 PR #3940 修复 |
| #3903 | MiniMax/AIHubMix 图像生成硬编码 PNG MIME 类型导致兼容性问题 | 图像输出异常 | ⚠️ 无 PR，但已定位问题点 |

其中，**#3939 已由 PR #3940 即时修复**，体现社区快速响应能力。其余 Bug 需后续排期处理。

---

### 6. **功能请求与路线图信号**

用户明确提出以下新功能需求，结合现有 PR 可见下一版本重点方向：

- **Ollama 图像生成支持** (#3941) → 已有 PR 提案，拟新增 `OllamaImageGenerationClient`
- **xAI Grok OAuth 登录** (#3936) → PR 已提交，支持无密钥 OAuth 流程
- **Signal 通道正式启用** (#49) → PR #3852 已合并，功能上线
- **群聊消息缓冲/防抖** (#3938) → 新 Issue，反映多人协作场景的消息风暴问题
- **多语言文档站导航** (#3930 已合并) → 国际化基础设施完成

综上，**v0.3.0 版本将重点覆盖：多 Provider 生态扩展（Novita/xAI/Ollama）、安全交互增强（exec 确认、API 合规）、多用户隔离支持**。

---

### 7. **用户反馈摘要**

从 Issue 评论中提取关键反馈：

- **正面反馈**：Signal 通道实现获赞（“终于有了真正安全的通信方式”）；OAuth 支持降低使用门槛；文档本地化提升易用性。
- **负面反馈**：
  - 多个用户抱怨 **exec 工具的依赖管理能力不足**，尤其在容器化部署中难以控制环境；
  - **WebUI 对话中断** 被多名企业用户标记为“阻塞级问题”；
  - **网易邮箱 IMAP 兼容性差** 引发对国产邮箱服务支持的广泛担忧；
  - **Kimi 系列模型调用失败** 暴露出不同厂商 API 规范差异大的现实挑战。

---

### 8. **待处理积压**

以下 Issue/PR 存在响应延迟，需维护者优先关注：

- **[#3744] session级别MEMORY功能请求**  
  自 5 月 11 日提出，已超 10 天未获实质性回应。涉及多用户并发核心逻辑，建议本周内给出技术评估。  
  🔗 [Issue #3744](https://github.com/HKUDS/nanobot/issues/3744)

- **[#3934] exec 工具无法安装第三方库**  
  发布于昨日，属高频使用场景故障，建议纳入本周热修复队列。  
  🔗 [Issue #3934](https://github.com/HKUDS/nanobot/issues/3934)

- **[#3884] WebUI 对话关闭**  
  影响用户体验闭环，建议联合前端团队排查 WebSocket 生命周期问题。  
  🔗 [Issue #3884](https://github.com/HKUDS/nanobot/issues/3884)

--- 

**项目健康度评估**：⭐⭐⭐⭐☆  
活跃度高，架构持续优化，社区诉求清晰，Bug 响应及时。建议加强多用户隔离与第三方集成稳定性保障。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为一位 AI 智能体与个人 AI 助手领域的开源项目分析师，我将根据您提供的 GitHub 数据，为您生成一份结构清晰的 Hermes Agent 项目动态日报。

---

## Hermes Agent 项目动态日报 (2026-05-21)

**项目健康度评估：** Hermes Agent 在今日展现出极高的社区活跃度，Issue 和 PR 更新数量均达到 50 条，表明核心开发者和贡献者正在积极地进行功能迭代和问题修复。整体趋势向好，但需关注一些高优先级 Bug 的解决进度。

### 1. 今日速览

*   **极高活跃度：** 过去 24 小时内，项目共产生了 50 条 Issue 更新（49 条新开/活跃，1 条关闭）和 50 条 Pull Request 更新（39 条待合并，11 条已合并/关闭），表明社区和核心团队都非常活跃。
*   **网关与平台焦点：** 多个新 Issue 和 PR 集中讨论了网关组件（gateway）及其与不同平台（如 Discord、Slack、Telegram、Feishu）的集成问题，包括功能增强和 Bug 修复。
*   **认证与安全改进：** 开发者持续优化认证流程，新增 `hermes providers validate` 命令，并修复了与 TUI 安全警告相关的环境变量处理问题。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日有 11 个 PR 被合并或关闭，主要集中在修复关键问题和增强现有功能。

*   **关键 Bug 修复：**
    *   **PR #29544:** 修复了导致生产环境中 kanban.db 文件损坏的 TLS 应用数据字节写入 FD 回收竞态条件问题（P1）。这是一个关键的稳定性修复。[链接](https://github.com/NousResearch/hermes-agent/pull/29544)
    *   **PR #29538:** 修复了 Slack 依赖项中 `aiohttp` 版本不一致的问题，确保 `hermes update` 不会降级该库。[链接](https://github.com/NousResearch/hermes-agent/pull/29538)
    *   **PR #29541:** 增强了 Slack 适配器，使其能从 Block Kit 内容中获取更多上下文信息。[链接](https://github.com/NousResearch/hermes-agent/pull/29541)
    *   **PR #23083:** 修复了 Discord 网关在断开连接时未能清理 typing indicator 任务的问题，提升了网关的稳定性和用户体验。[链接](https://github.com/NousResearch/hermes-agent/pull/23083)

*   **新功能与改进：**
    *   **PR #29540:** 引入了 `hermes providers validate` 命令，这是一个非常有价值的部署就绪性检查工具，用于验证提供者/模型在真实 Hermes 代理循环中的工作情况。[链接](https://github.com/NousResearch/hermes-agent/pull/29540)
    *   **PR #28937:** 为网关添加了带有文件存储支持的持久化 busy queue，使排队消息在网关重启后得以保留。[链接](https://github.com/NousResearch/hermes-agent/pull/28937)
    *   **PR #26051:** 改进了上下文压缩失败时的处理，确保在压缩失败时保留完整的对话历史记录，而不是丢弃中间部分。[链接](https://github.com/NousResearch/hermes-agent/pull/26051)

### 4. 社区热点

今日最活跃的 Issue 和 PR 反映了用户对高级路由、平台集成和认证体验的强烈需求。

*   **Issue #5143 - Multi-Role Auto-Routing via Gateway Hooks (v2):** 这是一个长期存在且备受关注的特性请求，旨在通过网关钩子实现多角色自动路由。其最新更新（v2）表明项目正在重新设计此功能以对齐 v0.14.0 架构，显示出对解决此前复杂问题的决心。[链接](https://github.com/NousResearch/hermes-agent/issues/5143)
*   **PR #29544 - fix(api-call): close FD-recycling race:** 这个 P1 级别的 PR 解决了可能导致严重数据损坏的生产环境问题，是今日最受关注的合并 PR，显示了项目对稳定性的重视。[链接](https://github.com/NousResearch/hermes-agent/pull/29544)
*   **Issue #21910 - rewind/edit-and-resubmit:** 用户 SaguaroDev 提出的类似 Claude Code 的“重写”功能，允许跳回到之前的用户消息并重试，获得了 4 个赞。这体现了用户对提升会话灵活性和错误恢复能力的期望。[链接](https://github.com/NousResearch/hermes-agent/issues/21910)
*   **Issue #29542 & #29539 - MiniMax 和 Anthropic API 模式问题:** 这两个新 Issue 都涉及特定提供商的集成 Bug，表明第三方 API 的变化对项目有直接影响，需要持续的关注和维护。[链接](https://github.com/NousResearch/hermes-agent/issues/29542), [链接](https://github.com/NousResearch/hermes-agent/issues/29539)

### 5. Bug 与稳定性

今日报告了几个重要的 Bug，其中部分已有对应的修复 PR。

*   **[P1] Automatic context compaction can hide or drop just-completed assistant response (#29522):** 一个严重的 Bug，自动上下文压缩可能导致刚刚完成的助手响应消失。这影响了用户体验和会话连续性。暂无公开 Fix PR。[链接](https://github.com/NousResearch/hermes-agent/issues/29522)
*   **[P1] fix(api-call): close FD-recycling race that wrote TLS bytes into kanban.db (#29544):** 一个 P1 级别的关键 Bug，TLS 应用数据字节错误地写入了无关的文件描述符，导致 kanban.db 状态损坏和数据丢失。此问题已有 Fix PR #29544，并于今日合并。[链接](https://github.com/NousResearch/hermes-agent/issues/29507), [Fix PR](https://github.com/NousResearch/hermes-agent/pull/29544)
*   **[P2] TUI input box gets flooded with ANSI escape sequences after gateway pipe break (#28419):** TUI 网关崩溃重启后，ANSI 转义序列泄漏到输入框，影响用户体验。此问题已有 4 条评论和讨论。暂无公开 Fix PR。[链接](https://github.com/NousResearch/hermes-agent/issues/28419)
*   **[P2] hermes doctor SSH check ignores configured SSH user/port/key (#29481):** `hermes doctor` 命令忽略了配置好的 SSH 用户、端口和密钥，导致误报。此问题已有 3 条评论。暂无公开 Fix PR。[链接](https://github.com/NousResearch/hermes-agent/issues/29481)
*   **[P2] xAI OAuth (xai-oauth) returns HTTP 403 for standard SuperGrok subscribers (#26847):** xAI OAuth 对标准 SuperGrok 订阅者返回 403 错误，尽管文档声称所有等级都支持。此问题已有 2 条评论和一个赞。暂无公开 Fix PR。[链接](https://github.com/NousResearch/hermes-agent/issues/26847)
*   **[P2] approval.py: gateway-mode auto-deny leaks DANGEROUS COMMAND warning text into agent's visible output (#29511):** 网关模式下，危险命令警告文本泄漏到代理的可视输出中，污染下游消费者。此问题已有 1 条评论。暂无公开 Fix PR。[链接](https://github.com/NousResearch/hermes-agent/issues/29511)

### 6. 功能请求与路线图信号

今日的功能请求主要集中在提升平台的交互能力、会话管理和用户自定义性上。

*   **Multi-Role Auto-Routing via Gateway Hooks (#5143):** 这是一个长期存在的、高优先级的特性请求，旨在让网关能够根据消息内容自动选择不同的 Hermes 配置文件。它代表了 Hermes Agent 向更智能、更灵活的多实例/多角色路由方向发展的明确路线图信号。
*   **Per-session working directory for gateway sessions (#29531):** 用户请求为网关会话设置独立的 working directory，这对于并发 API 驱动会话非常重要，可以避免全局工作目录带来的冲突。这表明项目正在考虑如何更好地支持多会话隔离和并行处理。
*   **Gateway: route chat/thread messages to Hermes profiles in a single gateway process (#29535):** 与 #5143 类似，此请求也指向了网关在多配置文件/多角色场景下的高级路由能力。它表明社区对在一个网关进程中管理多个独立代理实例的需求。
*   **Add explicit silent-skip delivery path for WhatsApp group messages (#18848):** 此请求针对 WhatsApp 平台，要求支持静默跳过某些消息的处理，以避免不必要的回复。这是对特定平台交互模式的深入优化，表明项目在努力适应不同社交平台的特性。
*   **Ability to toggle title generation (#29456):** 用户希望能够在本地模型场景下关闭自动标题生成功能，因为它会减慢对话速度。这反映了用户对性能优化和个性化配置的强烈需求。

### 7. 用户反馈摘要

从今日的 Issues 中可以提炼出以下真实用户痛点：

*   **平台集成复杂性：** 用户在配置和运行 Hermes 于不同平台（如 Discord, Slack, Telegram, Feishu）时遇到了各种 Bug 和问题，例如消息路由错误、Markdown 渲染问题、认证失败等，表明平台适配仍有一定挑战。
*   **认证与诊断问题：** `hermes doctor` 命令报告的假阳性/假阴性问题（如 SSH 检查忽略配置、Copilot 认证误报）让用户感到困惑，影响了初始设置的体验。
*   **会话管理与状态丢失：** 背景任务的持久化历史、多聊天部署的上下文隔离、以及特定提供商（xAI, DeepSeek）的认证令牌刷新问题，都揭示了会话状态管理的复杂性，尤其是在多用户或多任务场景下。
*   **安全与可定制性：** 用户提出了关于技能不可变性（immutable skills）和 per-task 模型覆盖的需求，这表明他们对代理行为的控制和安全性有更高的期望。
*   **性能与可用性：** 用户反馈了诸如 TUI 界面混乱、ANSI 转义序列泄漏、以及本地模型下标题生成速度慢等问题，这些都是直接影响用户体验和可用性的痛点。

### 8. 待处理积压

以下是长期未响应的重要 Issue，建议维护者关注：

*   **Issue #5143 - Multi-Role Auto-Routing via Gateway Hooks:** 这是一个长期存在且评论较多的特性请求，虽然已有 v2 提案，但仍需核心团队投入时间进行设计和实现。[链接](https://github.com/NousResearch/hermes-agent/issues/5143)
*   **Issue #28419 - TUI input box gets flooded with ANSI escape sequences after gateway pipe break:** 一个影响用户体验的 Bug，已有 4 条评论，但尚未有公开的修复方案。[链接](https://github.com/NousResearch/hermes-agent/issues/28419)
*   **Issue #21910 - rewind/edit-and-resubmit:** 一个受欢迎的特性请求，已有 4 个赞，但尚未有公开的进展或实现计划。[链接](https://github.com/NousResearch/hermes-agent/issues/21910)
*   **Issue #16946 - persistent history for background tasks:** 关于背景任务历史持久化的重要请求，已有 3 条评论，但解决方案可能较为复杂。[链接](https://github.com/NousResearch/hermes-agent/issues/16946)
*   **Issue #5358 - Gateway and CLI ignore model.provider config:** 一个关于配置优先级和一致性的 Bug，已有 2 条评论，影响用户对配置的信任。[链接](https://github.com/NousResearch/hermes-agent/issues/5358)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

PicoClaw 项目在 2026-05-21 保持高度活跃，过去 24 小时产生 27 个 PR 更新（11 个已合并）和 8 个 Issue 动态，日均提交量稳定。团队重点推进安全加固、消息总线稳定性及多通道适配，夜间构建 v0.2.8-nightly.20260520.639b3270 发布，整体开发节奏稳健。

今日无正式版本发布，仅有一次 Nightly Build 更新：v0.2.8-nightly.20260520.639b3270。此为自动化构建，可能不稳定，建议谨慎使用。完整变更日志见：https://github.com/sipeed/picoclaw/compare/v0.2.8...main

今日共关闭 1 个 Issue #2769（PicoClaw authentication fails with valid API keys），表明认证相关问题得到修复。同时有多个高影响力 PR 被合并或进入待合并队列：
- #2891（feat: add reset to factory defaults）：新增“恢复出厂设置”功能，支持备份配置并保留密钥，提升系统兼容性；
- #2725（fix(agent): make MCP initialization failure non-fatal）：MCP 初始化失败不再导致主循环崩溃，增强容错能力；
- #2768（retry transient LLM HTTP errors）：针对 OpenRouter/OpenAI 等提供商的瞬态 HTTP 错误增加重试机制；
- #2760（image_generate tool）：引入默认关闭的 image_generate 工具，支持通过 Provider 生成图像并返回媒体流。

今日最活跃的 Issue 是 #1950（Streaming Output for Web Chat），已有 9 条评论，用户强烈希望实现流式输出以提升 Web UI 体验。#2404（Add in config to send streaming HTTP request）也获 7 条评论，提出通过配置文件启用流式请求的需求。两者均涉及 Web 端与 LLM 后端间的实时通信优化。

严重 Bug #2720（Singleton PID check doesn't verify process identity）被标记为 stale，但反映关键稳定性问题：PID 文件复用可能导致网关误判运行中实例而拒绝启动。已有 PR #2813 提供解决方案，验证进程身份而非仅检查 PID 存在，预计将解决该问题。

#2625（Provide compiled builds with WhatsApp support）提出为 Raspberry Pi Zero 2 等轻量设备预编译含 WhatsApp 支持的版本，避免手动编译开销。此需求反映社区对边缘设备部署便利性的关注。#2855（Extend message tool to support media attachments）则推动消息工具统一支持富媒体，减少分步发送的复杂性。两者均指向 PicoClaw 在多通道场景下的交付体验优化。

用户反馈显示，主要痛点集中在认证失败（#2769 已关）、Web UI 无流式输出、以及轻量设备上的部署复杂度。正面反馈体现在对工厂重置、MCP 容错等新功能的认可。部分用户（如 #2625）指出缺乏开箱即用的 WhatsApp 支持影响快速迭代。

长期未响应的重要 Issue：#1950（Streaming Output for Web Chat）已近三个月，优先级低但社区持续关注；#2625（WhatsApp 预编译）自 4 月提出，尚未有实质性进展。维护者应考虑在下一个里程碑中纳入至少一项以维持社区信心。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026-05-21）**

---

### 1. **今日速览**
NanoClaw 在今日保持高活跃度，共处理 23 个新 Pull Requests 和 4 个 Issues 更新，其中 6 个 PR 已合并或关闭。项目重点推进 WhatsApp 集成修复、ACP 协议支持及容器安全加固，整体开发节奏稳健。无新版本发布，但多个关键功能分支正在积极迭代中。

---

### 2. **版本发布**
无新版本发布（Releases 为空），当前无重大版本更新计划或破坏性变更公告。

---

### 3. **项目进展**
今日共 **6 个 PR 被合并或关闭**，涵盖设置优化、WhatsApp 修复与安全性增强：

- **[#2057] Fix(setup): make systemd installable on LXC + centralize host restart**  
  ✅ 合并：解决了 LXC 环境下 systemd 安装失败问题，并统一了主机重启逻辑，提升部署兼容性。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2057)

- **[#2054] Fix(setup): prevent invisible-sudo hangs in spinner-driven setup**  
  ✅ 合并：修复了安装过程中因 sudo 提示不可见导致的卡死问题，改善用户体验。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2054)

- **[#2052] Fix(setup): auto-bootstrap local OneCLI admin for first install**  
  ✅ 合并：首次安装时自动完成 OneCLI 管理员认证，消除手动配置障碍。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2052)

- **[#2056] Fix(setup): detect LXC and quiet polkit linger noise**  
  ✅ 合并：增强 LXC 环境识别能力，屏蔽 polkit 日志干扰。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2056)

- **[#2143] Add admin cancel commands for active agent runs**  
  ✅ 合并：新增管理员可中断运行中代理任务的指令，提升运维可控性。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2143)

- **[#2565] Fix(whatsapp): detect group @-mentions via contextInfo.mentionedJid**  
  ✅ 合并：修复 WhatsApp 群组中 @mention 未被正确识别的问题，支持文档化 onboarding 流程。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2565)

这些合并表明团队持续优化基础设施稳定性、用户体验与安全边界。

---

### 4. **社区热点**
最活跃议题聚焦于 **WhatsApp 消息处理机制缺陷**：

- **[#2570] WhatsApp shared-number mode: @-mentioning the operator falsely triggers the agent**  
  用户报告在共享号码模式下，@human operator 的消息也会唤醒 AI 代理，违背预期行为。该问题影响多用户协作场景，已有开发者提交初步分析但未形成解决方案。  
  [链接](https://github.com/qwibitai/nanoclaw/issues/2570)

- **[#2569] add_reaction: schema expects shortcode names but handler passes raw emojis**  
  用户指出 `add_reaction` 工具接口要求传入短代码（如 `thumbs_up`），但实现直接传递原始表情符号，导致 WhatsApp 和 Discord 平台失效。此问题暴露 MCP 工具标准化不足。  
  [链接](https://github.com/qwibitai/nanoclaw/issues/2569)

热门 PR 集中在 **ACP 协议集成**：

- **[#2542] feat(providers): add ACP Client Protocol provider**  
  引入 Agent Client Protocol (ACP) 客户端支持，使 NanoClaw 可作为外部 AI 编码代理的编辑端。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2542)

- **[#2575] feat: add claw-acp — ACP server bridge for IDE integration**  
  提供 ACP 服务端桥接，支持 WebStorm AI Chat 等 IDE 直接调用 NanoClaw 作为后端代理。附带演示截图验证可行性。  
  [链接](https://github.com/qwibitai/nanoclaw/pull/2575)

反映出社区对 **IDE 深度集成** 和 **开放协议生态** 的强烈需求。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键 Bug：

| 问题 | 严重度 | 状态 | 备注 |
|------|--------|------|------|
| WhatsApp 群组 @mention 未设置 `isMention` | 高 | ✅ 已修复（#2565） | 阻塞文档化 onboarding 流程 |
| WhatsApp 共享号码模式下误触发代理 | 高 | 🔴 待解决（#2570） | 需审查 engage_mode 逻辑 |
| `add_reaction` 工具不兼容短代码规范 | 中高 | 🔴 待解决（#2569） | 影响跨平台消息反应功能 |
| rootless Podman 下容器写入失败 | 中 | 🟡 有 PR（#2572） | 涉及用户命名空间映射 |

所有高优先级问题均已进入开发流程，其中 WhatsApp 相关两个 Bug 分别由同一作者 glifocat 和 jonazri 提出并推动修复。

---

### 6. **功能请求与路线图信号**
用户明确请求以下方向的新能力：

- **ACP 协议双向通信支持**（#2542, #2575）：
  显示项目正从“封闭容器”向“开放代理网络”演进，未来可能支持多 AI 代理协作架构。

- **RTK 代理集成技能**（#2571）：
  通过 rtk CLI 代理降低 dev 命令 token 消耗 60–90%，暗示对本地开发效率优化的重视。

- **中央数据库插件化**（#1723）：
  SQLite + SeekDB 可选后端，为大规模部署铺路，可能预示 v2.1 的多租户或集群规划。

结合现有 PR 可见，下一版本将强化 **外部系统集成能力** 与 **资源效率管理**。

---

### 7. **用户反馈摘要**
从 Issue 评论中提取的真实痛点：

> “在群组中 @bot 却无法触发响应，完全破坏了自动化流程设计。” —— glifocat (#2560)  
> “我们希望 ACP 能像 VS Code Remote 一样无缝接入任何编辑器。” —— joka-7 (#2575 demo)

正面反馈集中于 **IDE 集成演示效果** 和 **安装流程简化**；负面情绪主要来自 **WhatsApp 行为不一致** 和 **工具 API 文档与实现脱节**。

用户普遍期望 NanoClaw 不仅作为后台代理，更成为可嵌入开发工作流的标准组件。

---

### 8. **待处理积压**
需维护者关注的长期议题：

- **[#2574] skill/apple-container branch is stale**  
  苹果容器技能分支落后 main 过多，存在合并冲突风险。若不及时同步，可能导致基础设施回滚。  
  [链接](https://github.com/qwibitai/nanoclaw/issues/2574)

- **[#1722] Feature Request: Pluggable Central DB**  
  虽已有 PR #1723 实现，但尚未合并或充分测试，建议加快评审进度以支撑后续扩展需求。  
  [链接](https://github.com/qwibitai/nanoclaw/issues/1722)

建议在下周优先处理 #2574 的分支同步，避免技术债务累积。

--- 

*数据截止时间：2026-05-21 00:00 UTC*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-05-21）**

---

### 1. **今日速览**  
过去24小时内，NullClaw 项目整体处于低活跃度状态：无新 Issues、无 Releases，但有两个长期开放的 Pull Request 在持续更新。社区贡献节奏平稳，未见紧急问题爆发，技术债清理与功能扩展并行推进中。项目维护者保持对关键功能的迭代关注，尤其聚焦于跨平台兼容性与内部调度系统的稳定性增强。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
今日无合并或关闭的 Pull Requests。两个活跃 PR 仍处于待合并状态：

- **PR #892**：为 Windows 平台的 `getAddressList` 功能添加回归测试套件（作者: fatihaziz），旨在防止未来因主机名解析失败导致聊天补全中断的问题。该 PR 已基于主分支修复（commit 973bfa4 等）进行验证，现进入测试覆盖强化阶段。
- **PR #783**：引入 Cron 子代理引擎，支持任务历史记录、JSON 输出格式及安全加固机制（作者: yanggf8）。此功能显著提升系统自动化调度能力，涵盖数据库持久化、时区偏移支持和告警路由等高级特性。

两项工作均体现项目向生产就绪方向演进的趋势，前者保障兼容性，后者增强运维能力。

---

### 4. **社区热点**  
当前无高互动讨论议题。两个开放 PR 均未收到评论或点赞反馈，表明相关变更仍处于技术实现阶段，尚未引发广泛用户关注。推测此类底层基础设施改进需等待集成至更高层模块后才会触发社区讨论。

---

### 5. **Bug 与稳定性**  
无新增 Bug 报告或崩溃日志。PR #892 所针对的 Windows `HostResolutionFailed` 问题已在主分支修复，当前任务仅为建立自动化测试防护网，属于预防性维护范畴。整体系统稳定性未受威胁。

---

### 6. **功能请求与路线图信号**  
PR #783 强烈暗示项目正加强 **自动化作业调度能力**，可能成为下一版本的重点交付方向。其提出的 Cron 子代理、JSON 输出和安全加固等功能，符合企业级用户对可观测性与可靠性的需求趋势。结合其创建时间（2026-04-07）与持续活跃状态，该特性有望在未来1–2个月内进入合并流程。

---

### 7. **用户反馈摘要**  
暂无直接来自 Issue 评论的用户声音。但 PR #892 提及的“Windows 环境下聊天补全因主机名解析失败而中断”问题，反映出部分用户在混合云或容器化部署场景中遭遇的网络层兼容痛点。维护团队已通过引入 `getAddressListWindows` 解析器解决，下一步将通过回归测试确保该场景不再复发。

---

### 8. **待处理积压**  
以下长期未响应的重要事项建议优先跟进：

- **PR #783**（Cron 子代理）：自 2026-04-07 创建，持续更新中，涉及核心调度架构升级，影响范围广，建议安排代码审查。  
  🔗 [https://github.com/nullclaw/nullclaw/pull/783](https://github.com/nullclaw/nullclaw/pull/783)

- **PR #892**（Windows 回归测试）：虽技术方案明确，但缺乏测试框架协同规划，可能需与 CI/CD 流水线整合讨论。  
  🔗 [https://github.com/nullclaw/nullclaw/pull/892](https://github.com/nullclaw/nullclaw/pull/892)

此外，Issue #890（已被 PR #892 引用）所描述的生产环境故障案例，建议归档并标记为“已缓解”，以完善问题生命周期管理。

--- 

*数据来源：GitHub API · 统计时间：2026-05-21 00:00–24:00 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报（2026-05-21）**

---

### 1. **今日速览**  
IronClaw 项目在昨日保持高度活跃状态，共产生 46 个 PR 更新（28 待合并）和 18 个 Issue 动态（16 条新开/活跃），无新版本发布。核心团队持续推进 Reborn 架构集成与生产级能力加固，重点覆盖 secrets 管理、WebUI 迁移、CI/CD 自动化及多通道适配。整体进展稳健，社区反馈集中于功能扩展与稳定性优化。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
昨日共关闭 3 个 PR，其中关键进展包括：

- **[PR #3808] CI: 添加 /benchmark 斜杠命令调度器**（已合并）  
  实现了通过评论 `/benchmark <suite>` 触发基准测试的能力，显著提升 CI 响应透明度和维护效率。该 PR 为后续自动化质量门禁打下基础。
  🔗 [nearai/ironclaw PR #3808](https://github.com/nearai/ironclaw/pull/3808)

- **[PR #3832] Reborn local-dev: 暴露 shell 内置能力**（已合并）  
  将 `builtin.shell` 纳入本地开发环境可见能力集，支持细粒度权限控制（如 SpawnProcess/ExecuteCode），同时限制非必要网络访问，增强安全边界。
  🔗 [nearai/ironclaw PR #3832](https://github.com/nearai/ironclaw/pull/3832)

- **[PR #3816] Shell 能力端口迁移至 Reborn 内置机制**（已合并）  
  完成 shell 执行逻辑从 v1 到 Reborn 宿主运行时的一体化迁移，统一解析、验证与进程调度路径，为后续 MCP 工具链接入铺平道路。
  🔗 [nearai/ironclaw PR #3816](https://github.com/nearai/ironclaw/pull/3816)

> ✅ **关键里程碑推进**：Reborn 架构下 secrets 注入、shell 内置化、CI 自动化三大支柱初步成型，支撑下一阶段产品级功能落地。

---

### 4. **社区热点**  
最活跃议题聚焦于 **Reborn 架构迁移** 与 **生产环境集成**：

- **[Issue #3803]** Lane 3: 完成 secrets/egress substrate 向生产工具组合的布线  
  作者 serrrfirat 提出需在 secret-store、authorized-dispatch、production-builder 合并后，实现 native/MCP 工具的 secrets 注入与 egress 路由验证，是当前 Reborn 集成主线任务之一。
  🔗 [nearai/ironclaw Issue #3803](https://github.com/nearai/ironclaw/issues/3803)

- **[Issue #3580]** WebUI/Web Gateway 迁移至原生 Reborn 表面  
  明确将 `GatewayChannel` 和前端路由重构纳入 Reborn 宿主所有权，推动统一交互体验。已有 PR #3815 开始落地网关组合逻辑。
  🔗 [nearai/ironclaw Issue #3580](https://github.com/nearai/ironclaw/issues/3580)

- **[PR #3815]** WebUI v2 网关组合实现  
  在 `ironclaw_reborn_composition` 中构建 Reborn 侧宿主认证与网关安全层，标志 WebChat v2 路径进入可运行阶段。
  🔗 [nearai/ironclaw PR #3815](https://github.com/nearai/ironclaw/pull/3815)

> 💬 **诉求分析**：社区强烈希望摆脱对 legacy 通道系统的依赖，建立统一的 Reborn-hosted 服务边界，以提升可观测性、安全性与扩展性。

---

### 5. **Bug 与稳定性**  
发现 1 个关键回归问题：

- **[Issue #3734]** v0.28.2 回归：推理提供者配置缺失 API Key 和“获取可用模型”控件  
  用户报告在非 TEE 模式下，设置页中相关 UI 元素消失，影响手动配置第三方 LLM 服务。此问题在 v0.28.1 正常，疑似 UI 组件未随依赖升级而正确渲染。
  🔗 [nearai/ironclaw Issue #3734](https://github.com/nearai/ironclaw/issues/3734)  
  ⚠️ **严重程度**：中（影响用户配置流程）  
  ❌ **暂无 fix PR**，需排查 UI 框架或表单绑定变更。

另有一项 E2E 失败记录（#3447），但属夜间定时任务波动，非持续性问题。

---

### 6. **功能请求与路线图信号**  
多个 Issue 反映未来重点方向：

- **[Issue #3094]** 增加审批/授权交互服务（ApprovalInteractionService / AuthInteractionService）  
  旨在桥接阻塞运行态与 UX 界面，实现用户决策闭环。此为 Reborn 身份流重构核心组件。
  🔗 [nearai/ironclaw Issue #3094](https://github.com/nearai/ironclaw/issues/3094)

- **[Issue #3281]** 添加 EventStreamManager 实现 durable projection fanout  
  支持 SSE/WebSocket/API 订阅的持久化事件流，是构建实时通知与监控体系的基础设施。
  🔗 [nearai/ironclaw Issue #3281](https://github.com/nearai/ironclaw/issues/3281)

- **[Issue #3829][#3805]** 实现 Google Calendar/Gmail 及 Notion MCP 能力路径  
  表明产品正加速集成主流办公生态，MCP 将成为标准工具接入范式。
  🔗 [Issue #3829](https://github.com/nearai/ironclaw/issues/3829), [#3805](https://github.com/nearai/ironclaw/issues/3805)

> 📌 **判断**：上述需求均已有对应 Lane 规划与 PR 准备，大概率纳入 Q3 发布周期。

---

### 7. **用户反馈摘要**  
- **痛点**：  
  - “Routine 通知被隔离到独立对话线程，无法融入主聊天流”（#1519）  
    用户期望通知能自然嵌入当前会话上下文，而非跳转新线程。

- **满意点**：  
  - CI 新增 `/benchmark` 指令获积极回应，维护者称赞其提升调试效率（#3836）。

- **使用场景**：  
  多数高级用例指向 **自动化工作流集成**（如 Notion、Google 日历联动）与 **细粒度权限控制**（subagent spawn 设计），显示目标用户群为企业级开发者。

---

### 8. **待处理积压**  
以下 Issue 超两周未获实质性响应，需关注：

- **[Issue #3734]** v0.28.2 配置控件缺失（创建于 5月17日，距今4天，但仍在 OPEN）  
  虽时间不长，但涉及用户体验断裂，建议优先定位。

- **[Issue #1519]** Routine 通知上下文割裂（创建于 3月21日，超60天）  
  长期悬而未决，可能影响 Routine 产品价值主张，建议评估优先级。

- **[Issue #3447]** Nightly E2E 持续失败（创建于 5月10日，已报失败1次）  
  若后续多次失败，需排查基础设施或测试稳定性。

---

**总结**：IronClaw 正处于 Reborn 架构全面落地的关键期，工程节奏紧凑，核心模块稳步推进。建议重点关注 secrets 集成、WebUI 迁移及遗留 Bug 修复，以保障生产可用性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-05-21）**

---

### 1. **今日速览**
- LobsterAI 在过去24小时内保持较高开发活跃度，共处理 24 条 PR（7 条已合并），Issue 更新 4 条（3 条新开/活跃，1 条关闭），无新版本发布。
- 核心模块如 renderer、main、openclaw、cowork 持续获得优化投入，重点提升浏览器稳定性、模型参数透传及用户界面体验。
- 社区反馈集中在环境配置冲突、登录失败及功能扩展需求，整体项目运行稳定但存在若干关键路径上的用户体验瓶颈。

---

### 2. **版本发布**
**无新版本发布**

---

### 3. **项目进展**
**今日合并的重要 PR：**

| PR # | 标题 | 贡献者 | 影响范围 |
|------|------|--------|----------|
| [2023](https://github.com/netease-youdao/LobsterAI/pull/2023) | feat: Improve stability and success rate of browser and webfetch | fisherdaddy | renderer, docs, main, openclaw |
| [2022](https://github.com/netease-youdao/LobsterAI/pull/2022) | fix(artifacts): 优化 HTML 预览与源码展示体验 | liugang519 | renderer, main, cowork, artifacts |
| [2021](https://github.com/netease-youdao/LobsterAI/pull/2021) | feat: support contextWindow for package models | btc69m979y-dotcom | main, openclaw |
| [2020](https://github.com/netease-youdao/LobsterAI/pull/2020) | fix: prevent small window on Windows with cross-DPI multi-monitor | btc69m979y-dotcom | main |
| [2019](https://github.com/netease-youdao/LobsterAI/pull/2019) | feat: model custom params + thinking block display | btc69m979y-dotcom | renderer, docs, main, openclaw, cowork |

> **关键进展总结**：  
> - 新增对套餐模型的 `contextWindow` 支持，增强大上下文处理能力；  
> - 实现模型自定义参数透传（如 `thinking`、`temperature`），提升与 Claude 等推理型模型的兼容性；  
> - 引入独立的 Thinking Block 流式渲染机制，改善复杂推理过程的可视化体验；  
> - 修复多显示器 DPI 不一致导致的窗口缩放异常（Windows 平台）；  
> - 优化 HTML/源码预览性能，支持懒加载与主题适配，减少卡顿。

---

### 4. **社区热点**
**讨论最活跃的 Issue / PR：**

- **[#1698](https://github.com/netease-youdao/LobsterAI/issues/1698)**：有道龙虾与智企帝王蟹共存时出现 gateway 端口冲突，**必现且无缓解方案**，引发用户对生产部署兼容性的担忧。
- **[#2017](https://github.com/netease-youdao/LobsterAI/issues/2017)**：本地运行无法登录、建任务，提示“未检测到内置 OpenClaw runtime”，反映新用户在首次构建流程中的卡点问题。
- **[PR #2019](https://github.com/netease-youdao/LobsterAI/pull/2019)**：因引入 Thinking Block 和自定义参数支持，受到开发者积极关注，被视为提升模型交互透明度的关键一步。

> **诉求分析**：社区当前最迫切的需求是**降低环境依赖复杂度**与**增强多实例共存稳定性**，同时期待更精细的模型控制能力。

---

### 5. **Bug 与稳定性**
**严重 Bug 报告（按优先级排序）：**

1. **Issue #1698**：有道龙虾与智企帝王蟹同时运行时 gateway 端口冲突，导致帝王蟹鉴权失败。  
   - **状态**：Open（无对应 Fix PR）  
   - **影响**：生产环境多租户部署不可行，需隔离或协调启动顺序。

2. **Issue #2017**：本地构建后仍提示“未检测到 OpenClaw runtime”，影响本地开发与测试。  
   - **状态**：Open（无 Fix PR）  
   - **根因**：打包前构建脚本未正确执行或路径识别错误。

3. **PR #1560**（已提但未合）：Agent 编辑后切换回原 Agent 界面失效，属 UI 状态管理 bug。  
   - **状态**：Open（建议纳入近期修复）

---

### 6. **功能请求与路线图信号**
**用户提出的功能需求：**

- **Issue #2016**：建议增加 OpenHuman 引擎支持，表明用户对多样化 LLM 后端集成的强烈需求。
- **PR #1573**：为 IM 渠道添加斜杠命令（如 `/status`, `/new`），显示 IM 交互轻量化趋势。
- **PR #1583**：添加“最近使用技能”标签页及频次统计，反映用户对技能使用洞察的重视。

> **路线图推断**：  
> 下一版本可能聚焦于 **IM 集成增强**、**技能可观测性** 与 **第三方引擎扩展**（如 OpenHuman），同时继续深化模型层控制能力。

---

### 7. **用户反馈摘要**
- **痛点**：  
  - 新用户普遍卡在“打包前构建脚本”环节（#2017）；  
  - 多产品共存时端口竞争问题严重影响部署灵活性（#1698）；  
  - 本地开发体验碎片化，缺乏清晰的环境诊断工具。

- **满意点**：  
  - Thinking Block 的引入被广泛认可，认为提升了 AI 行为透明度；  
  - 模型自定义参数透传机制灵活，满足高级用户调优需求。

---

### 8. **待处理积压**
**长期未响应的关键项：**

| 类型 | ID | 标题 | 最后更新 | 风险等级 |
|------|----|------|-----------|----------|
| Issue | #1698 | 有道龙虾与智企帝王蟹端口冲突 | 2026-05-20 | 高 |
| PR | #1548 | 为流式活动栏添加耗时计时器 | 2026-05-20 | 中 |
| PR | #1576 | 修复 SSE 流监听器竞态条件 | 2026-05-20 | 中高 |

> **建议行动**：  
> - 优先解决 #1698 的端口冲突问题，避免阻碍多实例部署场景；  
> - 评估 #1576 的技术债务，其静默数据丢失问题可能影响关键业务流程；  
> - 推动 #1548 进入 review，提升用户对流式操作的可感知性。

--- 

*数据来源：GitHub API @ netease-youdao/LobsterAI (截至 2026-05-21)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据提供的 GitHub 数据生成 Moltis 项目动态日报。

---

### Moltis 项目动态日报 (2026-05-21)

**今日速览**
Moltis 项目在2026年5月21日表现出稳健的活跃度和积极的开发进展。过去24小时内，共处理了3个新问题和3个合并的拉取请求，显示出高效的社区响应和开发迭代能力。核心团队持续修复关键 bug（如 QMD 子进程管理）并优化功能（如内存存储），同时用户对新功能（如 Google Antigravity SDK 支持、Agent 文档访问）的需求也推动了产品演进。整体来看，项目健康度良好，处于稳定发展轨道。

---

#### 1. 版本发布
无新版本发布。

---

#### 2. 项目进展
今日共合并/关闭了3个重要的 Pull Requests (PRs)：

*   **#1026 fix(vault): keep auth password changes in sync**: Penso 提交了一个关键修复，确保认证密码更改与 vault 密码轮换保持同步，并增加了对已密封 vault 的回归测试覆盖。这提升了 vault 安全机制的可靠性和健壮性。
*   **#1009 fix(qmd): kill child process when run_with_timeout expires**: Gmoigneu 修复了 `QmdManager::run_with_timeout` 方法中未正确终止子进程的问题，避免了资源泄漏。这是对 QMD 后端稳定性的重要改进。
*   **#1010 feat(memory): allow nested subfolders and collection-aware writes**: Gmoigneu 引入了一项重要新功能，允许 `memory_save` / `memory_delete` 操作使用嵌套子文件夹，并支持集合感知的写入。这使得内存存储的结构化组织更加灵活和强大，充分利用了 QMD 后端的目录布局能力。

这些 PR 的合并显著增强了项目的安全性、稳定性和功能性，为后续版本奠定了坚实的基础。

---

#### 3. 社区热点
今日最活跃的 Issue 是 #1028 [OPEN] [enhancement] [Feature]: Agent should have access to Moltis docs OOTB。IlyaBizyaev 提出希望 Agent 能开箱即用（OOTB）地访问 Moltis 文档。此 Issue 已有1条评论，表明社区成员对此功能的支持和期待。这反映了用户对提高 Agent 自主性和易用性的普遍诉求，可能预示着未来版本中会加强 Agent 的知识库集成。

---

#### 4. Bug 与稳定性
今日报告的 Bug 情况良好：

*   **#977 [CLOSED] [bug] Browser sandbox fails when Moltis runs in Docker**: TLA020 报告了在 Docker 环境中浏览器沙箱失败的问题。此问题已在今日通过合并的 PR 解决，表明维护团队能够及时响应并修复此类环境配置问题。

---

#### 5. 功能请求与路线图信号
今日有两个新的功能请求：

*   **#1028 [OPEN] [enhancement] [Feature]: Agent should have access to Moltis docs OOTB**: 此请求强烈暗示了未来版本中，Moltis 将致力于增强 Agent 的能力，使其能够更好地利用项目自身文档，这可能意味着知识库集成或内置帮助功能的开发。
*   **#1027 [OPEN] [enhancement] [Feature]: Support Google Antigravity SDK as provider**: BrandonStudio 提议支持 Google Antigravity SDK 作为提供者。这表明 Moltis 正在积极扩展其支持的 AI 模型提供商生态系统，以提供更多样化的选择。这两个请求都指向了项目未来的发展方向，即增强 Agent 功能和扩大集成范围。

---

#### 6. 用户反馈摘要
从今日 Issues 中提炼的用户反馈：

*   **TLA020 (#977)**: 用户在 Proxmox LXC 容器中使用 Docker 时遇到浏览器沙箱问题，这暴露了特定环境下的配置复杂性。
*   **IlyaBizyaev (#1028)**: 用户对 Agent 缺乏对 Moltis 文档的直接访问表示不满，认为这会限制其自主性。
*   **BrandonStudio (#1027)**: 用户希望增加 Google Antigravity SDK 支持，以满足其特定的 AI 需求。

---

#### 7. 待处理积压
当前数据中未显示长期未响应的重要 Issue 或 PR。所有今日更新的 Issue 和 PR 都已得到及时处理。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

2026-05-21 CoPaw 项目动态日报

今日速览
过去24小时 CoPaw 社区活跃度较高，新增 Issue 16条、活跃 Issue 16条、关闭 Issue 21条；新增 PR 36条、待合并 PR 19条、已合并/关闭 PR 17条。项目整体进展平稳，发布了 v1.1.8.post1 版本，主要修复了一些小问题和添加新功能。

版本发布
v1.1.8.post1：本次更新主要添加了 OpenCode Go 支持，修复了 WeChat iLink 推送失败、飞书 CardKit 流式输出失效等问题，并优化了宠物插件的 Windows 兼容性。具体变更请参考 Release 页面。

项目进展
PR #4564 (fix(qwenpaw-pet)): 修复了宠物插件在 Windows 下的兼容性问题，提升了用户体验。
PR #4574 (feat(file)): 规范化了文件名处理，提升了文件消息的处理能力。
PR #4576 (fix(WeChat)): 修复了 WeChat iLink 推送失败的问题，增强了系统的稳定性。
PR #4573 (fix(console)): 解决了控制台会话加载的无限循环问题，提升了用户体验。
PR #4563 (fix(backup)): 移除了备份主机网关，恢复了正常的认证中间件流程，解决了 Docker 部署的问题。
这些 PR 的合并和关闭表明项目正在稳步前进，解决了多个重要问题。

社区热点
Issue #4477 (Bug: WeChat iLink 微信定时任务推送失败)：此问题引发了较多讨论，用户反馈 WeChat iLink 在 context_token 过期时没有重试机制，导致定时任务推送失败。已有 PR #4576 针对此问题进行了修复。
Issue #4559 (超过40多个agent后 页面访问明显变慢)：用户报告在管理大量 agent 时，页面性能显著下降。此问题需要进一步分析和优化。
Issue #4539 (免费多模态路由：发图/视频/语音时自动切换视觉模型)：用户希望实现自动切换模型的功能，以提升使用体验。此需求已被记录，可能会在未来的版本中考虑实现。

Bug 与稳定性
WeChat iLink 推送失败（Issue #4477）：当 context_token 过期时，系统没有重试机制，导致推送失败。已有 PR #4576 正在修复此问题。
飞书 CardKit 流式输出失效（Issue #4572）：由于 sequence 初始值错误，导致流式输出无法正常工作。此问题已有 PR #4572 提出修复方案。
Pet 插件在 Windows 下对话导致进程关闭（Issue #4575）：开启宠物插件后，对话会导致主进程异常终止。已有 PR #4564 正在修复此问题。

功能请求与路线图信号
免费多模态路由（Issue #4539）：用户希望系统能根据发送的内容类型自动调用对应的模型，无需手动切换。此功能请求反映了用户对提升使用便捷性的需求，可能会在未来版本中加入。
Coding Mode（PR #4578）：引入了一个类似 VS Code 的内嵌 IDE，增强代理的编辑和管理能力。此功能的开发表明项目团队重视提升用户的开发体验。

用户反馈摘要
用户在升级至 1.1.7 后发现 AGENTS.md 加载的是默认模板而非实际文件内容（Issue #4496），这一问题已引起关注，预计会在后续版本中修复。此外，用户普遍反映在使用 WeChat iLink 和飞书时遇到的问题，显示出对这些通道的依赖和对稳定性的高要求。

待处理积压
Issue #3499 (超过40多个agent后 页面访问明显变慢)：此问题长期未解决，影响了用户体验，建议优先处理。
Issue #4477 (WeChat iLink 推送失败)：虽然已有修复 PR，但仍需验证和测试，确保问题彻底解决。
PR #3813 (add tauri 2.x desktop app support)：此 PR 涉及桌面应用的支持，虽然已有进展，但尚未完全合并，建议继续关注。

以上是 CoPaw 项目的今日动态，感谢所有贡献者的努力和社区的支持。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 GitHub 数据生成 ZeptoClaw 项目的动态日报。

---

### **ZeptoClaw 项目动态日报 (2026-05-21)**

**项目链接:** [https://github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

#### **1. 今日速览**

ZeptoClaw 项目在 2026-05-21 呈现出相对平静的开发节奏。过去24小时内，社区活跃度较低，未报告新的 Issues 或关闭任何 Issues。唯一的新进展是一个待合并的 Pull Request (PR #592)，旨在修复一个关键的配置错误。整体来看，项目处于稳定的维护阶段，没有大规模的功能迭代或紧急问题需要处理。

---

#### **2. 版本发布**

*   **无新版本发布。**

---

#### **3. 项目进展**

*   **合并/关闭的 PR:** 无
*   **重要进展:** 项目整体推进平稳，主要精力集中在修复潜在的配置问题，而非新增功能。

---

#### **4. 社区热点**

*   **PR #592: `fix(providers): keyword fallback must not claim unconfigured provider`**
    *   **链接:** [qhkm/zeptoclaw PR #592](https://github.com/qhkm/zeptoclaw/pull/592)
    *   **热度:** 当前为待合并状态，暂无评论或点赞。
    *   **诉求分析:** 此 PR 的提交反映了用户对配置一致性和系统稳定性的高度关注。核心诉求是确保 `infer_provider_name_for_model` 函数能够严格遵守用户的 `available_providers` 配置，避免将模型错误地分配给未配置的提供商。这直接关系到生产环境的可靠性和用户体验，尤其是在使用特定模型（如 NIM-served Photon）时。

---

#### **5. Bug 与稳定性**

*   **严重 Bug:** `infer_provider_name_for_model` 函数存在逻辑缺陷，导致其可能返回一个用户未配置的提供商名称。
    *   **影响场景:** 在生产环境中，当尝试使用某些模型 ID（例如 `openai/gpt-oss-120b`）时，系统会以 100% 的错误率失败，因为该模型被错误地分配到了一个未配置的提供商。
    *   **修复状态:** 已有一个 PR (#592) 正在解决此问题。该 PR 旨在修改 `infer_provider_name_for_model` 函数的最终 fallback 逻辑，确保其不会忽略 `available_providers` 配置。
    *   **严重程度:** 高，因为它影响了核心功能的正确性并可能导致服务中断。

---

#### **6. 功能请求与路线图信号**

*   **无新功能请求或明确的路线图信号。** 当前所有活动都集中在修复一个关键的配置 Bug，这表明项目团队可能在为未来的功能更新做准备或专注于提升现有功能的健壮性。

---

#### **7. 用户反馈摘要**

*   **核心痛点:** 用户对于 ZeptoClaw 的配置管理（特别是 `available_providers`）的准确性和可靠性有很高的期望。当前的 Bug 表明，在模型与提供商的映射过程中，配置未能得到严格执行，这直接导致了生产环境中的错误。
*   **使用场景:** 用户在部署和运行 ZeptoClaw 时，依赖其能够根据其配置文件正确路由到相应的提供商。错误的提供商分配会破坏这一流程。
*   **满意/不满意的地方:**
    *   **不满意:** 用户显然对当前配置 Bug 感到非常不满，因为它导致了生产环境中的 100% 错误率，严重影响服务的可用性。
    *   **满意:** 暂无正面反馈提及，但 PR 的快速提交和响应表明用户的问题得到了社区的重视。

---

#### **8. 待处理积压**

*   **PR #592:** 这是一个关键的 Bug 修复 PR，涉及核心功能的稳定性。建议尽快合并，以避免潜在的生产环境问题进一步恶化。
    *   **链接:** [qhkm/zeptoclaw PR #592](https://github.com/qhkm/zeptoclaw/pull/592)

---

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报（2026-05-21）**

---

### 1. **今日速览**
过去24小时内，ZeroClaw 项目活跃度显著提升：共处理 Issue 29条、PR 50条，其中待合并 PR 达47条，显示开发团队正加速推进 v0.8.0 集成阶段。尽管无新版本发布，但多个高优先级 Bug 修复和配置系统优化已获实质性进展。社区对多代理架构、MCP 工具链及安全策略的关注度持续上升，整体项目处于稳定迭代期。

---

### 2. **版本发布**
**无新版本发布**。当前主干分支仍处于 `integration/v0.8.0` 集成阶段，预计后续将发布 v0.8.0 候选版本。

---

### 3. **项目进展**
- **#6266（CLOSED）**：完成 V3 多代理运行时重构，实现 per-alias 工作空间隔离与资源共享机制，为 #6272 提供核心支撑。
- **#6375（CLOSED）**：重新引入 V3 环境变量覆盖机制，支持嵌套配置结构下的凭证与运行时参数注入，解决此前因扁平化设计导致的配置丢失问题。
- **#6270（CLOSED）**：扩展 `Configurable` 宏以支持 v3 嵌套配置形状，增强 onboarding 流程的兼容性与用户体验。
- **#6053（CLOSED）**：`zeroclaw config set/init` 现已支持动态映射字段（如 `providers.models.<name>`），提升配置灵活性。

上述变更标志着 v0.8.0 的核心配置体系基本就绪，为下一阶段功能发布奠定基础。

---

### 4. **社区热点**
- **Issue #6059**（DeepSeek-V4 API 不兼容）：用户报告 DeepSeek V4-Pro/Flash 在 thinking mode 下报错，涉及 provider 层协议适配问题（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)）。已有 11 条评论，反映主流推理模型集成稳定性亟待加强。
- **Issue #6699**（tool_filter_groups 对 MCP 工具失效）：暴露工具过滤逻辑在真实 MCP 场景下的缺陷，影响多工具协同能力（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)）。该问题被列为 P1，已有初步修复思路。
- **PR #6706**（WhatsApp 协议升级）：通过迁移至 `whatsapp-rust@0.6` 恢复协议兼容性，解决 Apr 2026 后连接中断问题（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6706)），获社区积极反馈。

---

### 5. **Bug 与稳定性**
#### 高风险（P1）
| Issue | 描述 | 状态 |
|-------|------|------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek V4 API 格式不兼容，导致推理失败 | 开放，无 PR |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | tool_filter_groups 对真实 MCP 工具无效 | 开放，无 PR |
| [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) | 多行 Heredocs 被 SecurityPolicy 错误拦截 | 开放，[#6816](https://github.com/zeroclaw-labs/zeroclaw/pull/6816) 已提交修复 |

#### 中风险（P2/P3）
- **[#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801)**：`purge_namespace` 误删 `category` 列而非 `namespace`，属 SQL 逻辑错误，已有 PR #6777 修复。
- **[#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722)**：`MemoryConfig.rerank_enabled` 等参数未实际生效，属配置漂移问题，标记为 accepted。

> ✅ 多数 Bug 已有对应修复 PR，整体稳定性可控。

---

### 6. **功能请求与路线图信号**
- **#6165**（偏好轻量 ZeroClaw）：提议将部分工具（如 GWS、Jira）抽象为技能而非硬编码，减少依赖膨胀（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)）。此诉求与技能系统演进方向一致，可能纳入 v0.9。
- **#6810**（用户级特性矩阵）：呼吁公开支持矩阵，明确各通道/工具/部署模式的支持状态（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6810)），预示即将发布官方文档增强计划。
- **#6807**（Telegram 自定义 WebAPI 端点）：允许绕过官方 API 使用第三方服务，体现对网络限制环境的适配需求。

---

### 7. **用户反馈摘要**
- **痛点**：
  - 多代理环境下配置复杂度高（#5890、#6272），需更清晰 UX 引导；
  - MCP 工具加载延迟与过滤失效影响效率（#6699）；
  - 安全策略过于严格阻碍自动化流程（#6771）。
- **满意度**：
  - 邮件通道 HTML 渲染与附件支持改进获正面反馈（PR #6512）；
  - 技能管理 API 上线（PR #6700）提升运维便利性。

---

### 8. **待处理积压**
- **Issue #6060**（1.0 重构追踪）：建议置顶长期目标，整合 94 个开放 Issue 与 286 个 PR 的状态（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6060)）。缺乏维护者响应，需优先处理以对齐路线图。
- **PR #6297**（交互事件暴露）：暴露 Signal/WhatsApp 轮询投票事件，但长期 pending author action（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6297)），影响多通道体验一致性。

> ⚠️ 建议本周聚焦清理上述两项积压项，确保 v0.8.0 发布节奏不受阻。

--- 

*数据基于 GitHub API 抓取，截止 2026-05-21 18:00 UTC+8*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*