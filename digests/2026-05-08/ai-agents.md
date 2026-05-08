# OpenClaw 生态日报 2026-05-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-08 00:32 UTC

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

**OpenClaw 项目动态日报 - 2026年5月8日**

---

### 1. **今日速览**  
过去24小时 OpenClaw 保持高活跃度，共处理 500 条 Issues 和 500 条 PRs，其中 286 条新/活跃 Issue、353 条待合并 PR。社区对 Android APK 发布、Slack Block Kit 支持等增强功能需求强烈，同时系统稳定性问题（如 Gateway 连接异常）引发关注。整体开发节奏稳定推进。

---

### 2. **版本发布**  
**v2026.5.7** 已于今日凌晨发布。主要修复包括：
- 重试 transient ClawHub CLI 依赖安装失败，提升插件发布鲁棒性；
- 当预览阶段某 cell 测试失败时，仍允许通过预览的插件继续发布；
- 发布后验证所有预期 ClawHub 包版本，加速维护发布恢复流程，降低版本漂移风险。  
> [Release #v2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)

---

### 3. **项目进展**  
关键 PR 推进如下：
- **#78595**: 将运行时状态重构为 SQLite 数据库，为后续分布式架构打下基础（XL 级变更）；
- **#78678**: 实现 `oc://` 工作区文件寻址体系，支持 md/jsonc/yaml 等多格式操作；
- **#78317**: iMessage 插件升级至私有 JSON-RPC API，支持打字指示器、表情回复等高级交互；
- **#78733**: Codex 原生插件应用支持启用，消除桥接层延迟与语义重复。  
> 多个核心模块进入深度重构阶段，尤其数据库抽象层建设显著。

---

### 4. **社区热点**  
最活跃的议题聚焦于平台扩展性与用户体验：
- **[Issue #9443]**: 请求提供预编译 Android APK 下载，避免用户自行构建复杂源码（24 条评论，👍1）；
- **[Issue #12602]**: 支持 Slack Block Kit 消息渲染，实现 CRM 摘要等富交互场景（13 条评论）；
- **[Issue #10659]**: 提出“掩码密钥”机制，防止代理在日志或提示中泄露 API Key（12 条评论，👍4）。  
这些诉求反映用户希望降低部署门槛并提升安全性。

---

### 5. **Bug 与稳定性**  
严重问题已闭环，部分回归问题需警惕：
- **高危**: [Issue #78407] 升级到 v2026.5.5 后，`openclaw doctor --fix` 错误地将 `openai-codex/*` 模型引用改写为 `openai/*`，导致 OAuth 用户被锁定 → **已关闭**，预计本周修复；
- **中危**: [Issue #78502] Google Gemini 3.1 Pro/2.5 Pro 在主会话中 hang/timeout，但在子代理正常 → **开放中**，暂无 PR；
- **低危**: [Issue #78262] Feishu 群组会话键首次消息用 `messageId` 后续用 `thread_id` 导致分裂 → **已关闭**，相关 PR #78261 已合并。

> 近期升级频繁引发插件兼容性问题（Weixin、Bedrock 等），建议用户暂缓非必要更新。

---

### 6. **功能请求与路线图信号**  
以下需求具备较高采纳可能性：
- **安全增强**: “掩码密钥”（#10659）、Denylist for exec-approvals（#6615）、AWS Secrets Manager 集成（#13610）；
- **运维工具**: 会话快照（#13700）、配置备份/恢复（#13616）、Per-hour spending ceiling（#38248）；
- **多模态交互**: Slack Block Kit（#12602）、Voice Call Vapi 支持（#13337）、Telegram 反应触发代理轮次（#64752）。  
结合当前 PR 趋势，安全与可观测性将成为下版本重点方向。

---

### 7. **用户反馈摘要**  
- **痛点**: 用户抱怨升级后自动运行 `doctor --fix` 造成生产环境中断（#78407）；
- **满意点**: 对 WebChat 响应持久化到会话日志的修复表示认可（#76804 获 👍5）；
- **期望场景**: 企业用户急需细粒度权限控制（如禁止特定命令执行）和成本熔断机制（#38248）；
- **使用障碍**: Discord/Telegram 图像存储为 base64 导致上下文溢出（#1210），影响长对话体验。

---

### 8. **待处理积压**  
以下 Issue 超过 60 天未获响应，建议优先处理：
- **[Issue #8719]**: 提议 OpenClaw Security Profile v1.1，涉及数据为中心的安全设计（6 条评论，👍3）；
- **[Issue #48874]**: 多会话架构 RFC：共享 LLM + 隔离会话 + 公共知识库（6 条评论）；
- **[Issue #13219]**: Per-model usage logging 用于成本追踪（5 条评论，👍1）。  
> 长期未决的安全与架构演进议题可能影响社区信任与贡献意愿。

--- 

*数据来源：GitHub API @ 2026-05-08T10:00:00Z | 分析师：AI 智能体助手领域开源项目观察员*

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，以下是基于您提供的数据生成的横向对比分析报告：

---

## AI 智能体开源生态横向对比分析报告 (2026-05-08)

### **1. 生态全景**

当前个人 AI 助手/自主智能体开源生态呈现高度活跃但分化明显的态势。核心项目如 OpenClaw、Hermes Agent 和 IronClaw 持续引领功能演进与架构升级，而新兴项目如 NanoBot 和 Moltis 则在特定领域（如多模态、去中心化）快速崛起。社区普遍关注稳定性、安全性和企业级功能，同时积极拥抱标准化协议（如 ACP、MCP）。整体而言，生态正从单一代理向多代理协同、平台化、可观测性增强的方向发展。

### **2. 各项目活跃度对比**

| 项目名称 | Issues 数 | PR 数 | Release 情况 | 健康度评估 |
| :------- | :-------- | :---- | :----------- | :--------- |
| **OpenClaw** | 286 | 353 | v2026.5.7 发布，修复关键 Bug | **⭐⭐⭐⭐⭐** (高活跃度，稳定迭代) |
| **NanoBot** | 9 | 27 | 无新版本 | **⭐⭐⭐⭐** (稳健开发，质量管控强) |
| **Hermes Agent** | 50 | 50 | v0.13.0 "Tenacity Release" 发布 | **⭐⭐⭐⭐⭐** (极高活跃度，重大更新) |
| **PicoClaw** | 36 | 50 | Nightly Build v0.2.8-nightly.20260507 | **⭐⭐⭐⭐** (聚焦稳定性与集成) |
| **NanoClaw** | 32 | 9 | 无新版本 | **⭐⭐⭐⭐** (A2A 路由优化，容器兼容) |
| **NullClaw** | 6 | 7 | 无新版本 | **⭐⭐⭐⭐** (文档完善，模块化增强) |
| **IronClaw** | 23 | 50 | v0.28.0 发布，Reborn 集成落地 | **⭐⭐⭐⭐⭐** (生产就绪，架构升级) |
| **LobsterAI** | 45 | 36 | v2026.5.7 发布 | **⭐⭐⭐⭐** (用户体验优化，会员系统) |
| **TinyClaw** | 0 | 0 | 无活动 | **⭐** (停滞) |
| **Moltis** | 4 | 10 | 20260507.04/.05 发布 | **⭐⭐⭐⭐** (语音与安全增强) |
| **CoPaw** | 50 | 33 | 无新版本 | **⭐⭐⭐⭐** (前端体验，技能管理) |
| **ZeptoClaw** | 0 | 0 | 无活动 | **⭐** (停滞) |
| **ZeroClaw** | 50 | 50 | 无新版本 | **⭐⭐** (问题集中爆发，需关注) |

### **3. OpenClaw 在生态中的定位**

*   **优势**: OpenClaw 作为核心参照，其高活跃度、稳定版本发布节奏以及 XL 级变更（如数据库重构）体现了其在架构演进上的领导力。社区对其 Android APK 发布、Slack Block Kit 支持等需求强烈，显示其在平台扩展性与用户体验上的领先地位。
*   **技术路线差异**: OpenClaw 强调分布式架构基础建设与运行时状态管理，与其他项目的单点或多通道代理模式形成对比。其 `oc://` 工作区寻址体系也展现了独特的多格式操作能力。
*   **社区规模对比**: OpenClaw 的 Issue 和 PR 数量远超其他项目（今日 500+），表明其拥有最大且最活跃的社区。相比之下，NanoBot、PicoClaw、Moltis 等项目社区规模较小，但同样保持良好活跃度。

### **4. 共同关注的技术方向**

*   **多代理架构与协作**: Hermes Agent (#7517)、OpenClaw (#78595)、NanoClaw (#2267, #2002) 均涉及原生或增强的多代理支持，反映用户对复杂工作流的需求。
*   **Web 搜索后端多样化**: Hermes Agent (#10644, #5941)、NullClaw (#871) 均提出添加 Brave Search 或 SearXNG 作为原生搜索后端，以满足不同用户对隐私和经济性的考量。
*   **安全与权限控制**: OpenClaw (#10659, #6615)、NanoClaw (#869)、IronClaw (#3382) 均提出“掩码密钥”、细粒度权限控制等需求，体现安全已成为核心关切。
*   **可观测性与运维工具**: OpenClaw (#13700, #13616)、IronClaw (#3067) 均提及会话快照、配置备份/恢复和集成测试套件，强调生产环境下的可管理性。
*   **跨平台兼容性**: PicoClaw (#2472)、LobsterAI (#1909, #1891)、NanoClaw (#2336, #2335) 均报告并修复了 Windows 路径、Docker 环境等问题，显示跨平台部署是共同挑战。

### **5. 差异化定位分析**

*   **功能侧重**:
    *   **OpenClaw & Hermes Agent**: 强调通用智能体框架，具备强大的工具调用、MCP 集成和多通道支持，适合构建复杂代理。
    *   **IronClaw**: 定位为生产级 Reborn 运行时，注重 WASM 沙箱、多租户隔离和企业级可靠性。
    *   **NanoBot & PicoClaw**: 更侧重于消息通道集成、语音处理及特定场景（如 WhatsApp Business API）的优化。
    *   **Moltis**: 独特的去中心化、Ed25519 身份验证和本地 Whisper 支持，瞄准隐私优先和自托管场景。
    *   **CoPaw**: 强调 Web UI 体验、技能管理和 CLI 工具，适合希望快速上手和自定义的用户。
*   **目标用户**:
    *   **OpenClaw, Hermes Agent, IronClaw**: 面向开发者、企业用户和技术爱好者，需要深度定制和高性能。
    *   **NanoBot, PicoClaw, LobsterAI**: 面向希望将 AI 集成到现有通信渠道（如 Telegram, WhatsApp）的个人用户或中小企业。
    *   **Moltis, NullClaw**: 面向注重隐私、安全和去中心化的技术用户。
*   **技术架构**:
    *   **OpenClaw**: SQLite 数据库抽象层、`oc://` 寻址体系，为分布式架构铺路。
    *   **Hermes Agent**: 多平台网关、MCP 处理器、Reborn 运行时。
    *   **IronClaw**: Rust/WASM 沙箱、Reborn 集成、crates 边界隔离。
    *   **NanoBot**: Python 异步、WebSocket、CLI 驱动。
    *   **Moltis**: Ed25519 身份、去中心化 onboarding、本地 Whisper。

### **6. 社区热度与成熟度**

*   **快速迭代阶段 (High Velocity)**: **OpenClaw**, **Hermes Agent**, **IronClaw**, **CoPaw**。这些项目发布频繁，Issue/PR 数量高，社区反馈迅速，功能持续丰富。
*   **质量巩固阶段 (Quality Consolidation)**: **NanoBot**, **PicoClaw**, **Moltis**。虽然活跃度不错，但更注重 Bug 修复、代码质量提升和特定功能的深化，发布节奏相对稳定。
*   **问题集中期 (Crisis Management)**: **ZeroClaw**。尽管活跃度高，但多个高优先级 Bug 和安全风险集中爆发，需要维护者紧急介入。
*   **停滞阶段 (Stagnant)**: **TinyClaw**, **ZeptoClaw**。无活动，可能面临被取代的风险。

### **7. 值得关注的趋势信号**

*   **从单代理到多代理生态系统的演进**: 这是最显著的趋势，多个项目（OpenClaw, Hermes Agent, NanoClaw）都在探索原生多代理支持，预示着未来 AI 智能体将更倾向于协同工作。
*   **安全成为核心设计原则**: “掩码密钥”、细粒度权限、TOTP 验证等需求的涌现，表明安全已超越附加功能，成为架构设计的基石。
*   **对标准化协议的追求**: ACP、MCP 协议的集成与讨论（NullClaw, Hermes Agent）反映了行业对统一交互标准的渴望，有助于降低开发门槛和促进生态互操作性。
*   **生产就绪与可观测性**: 企业用户的需求推动了对会话快照、配置备份、成本追踪和可观测性工具的开发，使得 AI 智能体平台更接近传统软件基础设施。
*   **桌面端独立化与系统集成**: ZeroClaw 和 CoPaw 对 Tauri 桌面应用和系统交互能力的追求，表明用户希望在脱离浏览器/网关的环境下获得更强大的本地 AI 体验。
*   **去中心化与隐私保护**: Moltis 的 Ed25519 身份和本地 Whisper 支持，代表了对抗中心化服务依赖和强化用户数据主权的重要方向。

**对 AI 智能体开发者的参考价值**:

1.  **拥抱多代理范式**: 如果您的项目旨在构建复杂的 AI 工作流，应优先考虑多代理架构和协作机制。
2.  **强化安全与合规**: 在设计之初就应将安全（身份认证、权限控制、数据加密）纳入核心架构，而非事后补救。
3.  **关注标准化接口**: 考虑采用或贡献于 ACP/MCP 等标准化协议，以增强与其他工具和平台的互操作性。
4.  **提升生产环境可用性**: 投入资源开发会话管理、日志轮转、配置备份、成本监控等企业级功能，以满足更广泛的用户需求。
5.  **探索去中心化与本地化**: 对于特定应用场景，探索去中心化身份、本地模型推理（如 Whisper）等技术，可以提供独特的价值主张。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-05-08）**

---

### 1. **今日速览**

NanoBot 在过去24小时内保持较高活跃度，共处理 **9 条 Issue** 更新与 **27 条 Pull Request** 动态，其中 6 个 Issue 已关闭、8 个 PR 完成合并，整体开发节奏稳健。社区持续关注 WebSocket 稳定性、多模态支持及配置灵活性，多个关键模块如 memory 归档与 token 估算得到优化。无新版本发布，但功能迭代集中在音频转录、会话持久化与通道兼容性增强方向。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

#### ✅ 重要合并 PR：
- **[PR #3660](https://github.com/HKUDS/nanobot/pull/3660)**：修复了 Dream 模式下光标恢复异常问题，确保 GitStore 中 memory/.dream_cursor 状态正确回滚，提升长对话连续性体验。
- **[PR #3677](https://github.com/HKUDS/nanobot/pull/3677)**：移除 HTTP 压缩以恢复真实的 SSE 流式传输，解决此前因 aiohttp 缓冲导致的消息延迟问题。
- **[PR #3672](https://github.com/HKUDS/nanobot/pull/3672)**：全面启用 Ruff F 规则检查并修复相关 lint 错误，显著提升代码质量与可维护性。
- **[PR #3688](https://github.com/HKUDS/nanobot/pull/3688)**：新增 `/sync-meta` 命令以同步 WhatsApp Business API 的 conversational automation 配置，解决命令未在客户端显示的问题。

这些变更增强了系统稳定性、开发者体验与跨平台一致性，尤其在消息流、记忆管理与 CI/CD 流程方面取得实质性进展。

---

### 4. **社区热点**

#### 🔥 高关注度 Issue / PR：
- **[Issue #3652](https://github.com/HKUDS/nanobot/issues/3652)**：用户请求禁用 Dream 模式，提出通过 `enabled` 标志实现配置控制，反映部分用户对“思考提示”功能的干扰敏感。
- **[PR #3513](https://github.com/HKUDS/nanobot/pull/3513)**：统一语音转写提供者架构并支持本地 Whisper 服务器，获得广泛关注，被视为提升离线可用性与隐私保护的关键一步。
- **[Issue #3674](https://github.com/HKUDS/nanobot/issues/3674)**：WebSocket 通道静默丢弃媒体附件，暴露了 inbound envelope 处理中的字段遗漏问题，引发对多模态支持完整性的讨论。

此类议题表明社区正推动 **细粒度控制能力** 和 **多模态鲁棒性** 作为下一阶段重点方向。

---

### 5. **Bug 与稳定性**

| 严重等级 | Issue/PR | 描述 | 状态 |
|--------|--------|------|------|
| ⚠️ 中等 | [Issue #3665](https://github.com/HKUDS/nanobot/issues/3665) | DeepSeek-v4-flash 在连续查询时报错：“reasoning_content must be passed back” | 已关闭，关联 PR 待验证 |
| ⚠️ 中等 | [Issue #3604](https://github.com/HKUDS/nanobot/issues/3604) | WhatsApp 语音消息无法下载解析 | 已关闭，需进一步测试确认 |
| 🔶 低 | [Issue #3683](https://github.com/HKUDS/nanobot/issues/3683) | Linux 部署下 Windows/Mac 浏览器访问 WebSocket 端口无认证界面 | 已关闭，可能与环境配置有关 |
| 🔶 低 | [Issue #3681](https://github.com/HKUDS/nanobot/issues/3681) | LLM 调用超时（300s），疑似网络或服务端问题 | 已关闭，非 nanobot 内部缺陷 |

> **注**：[#3683] 和 [#3681] 虽已关闭，但用户反馈仍指向边缘场景下的兼容性问题，建议纳入自动化测试覆盖范围。

---

### 6. **功能请求与路线图信号**

- **可配置 Bot 名称与图标** ([Issue #3650](https://github.com/HKUDS/nanobot/issues/3650))：用户希望在 agent 模式下自定义显示身份，已有明确实现方案，预计将快速落地。
- **禁用 Dream 模式开关** ([Issue #3652](https://github.com/HKUDS/nanobot/issues/3652))：体现对“AI 行为可见性”的控制需求，结合现有 config.json 扩展机制，具备高实施可行性。
- **SimpleX 渠道集成** ([PR #3486](https://github.com/HKUDS/nanobot/pull/3486))：通过 CLI 对接 SimpleX 协议，拓展去中心化通信场景，标志项目向多平台泛化演进。

以上需求均与核心配置文件（config.json）解耦设计一致，符合当前架构演进方向。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - WebSocket 在多端（尤其桌面浏览器）表现不一致，移动端正常而 PC 端缺失认证界面。
  - 长时间运行后出现 LLM 超时，用户怀疑是服务不稳定而非 nanobot 自身缺陷。
  - WhatsApp 语音消息处理失败，影响实际业务场景中的语音交互闭环。

- **正面反馈亮点**：
  - 对 PR #3677 修复 SSE 流实时性表示认可；
  - 赞赏 Dream 光标恢复机制的改进，认为提升了长对话连贯性。

---

### 8. **待处理积压**

- **[PR #3513](https://github.com/HKUDS/nanobot/pull/3513)**：音频转录统一框架 + 本地 Whisper 支持，创建超 7 天，评论数未明但技术价值高，建议优先 review 推进。
- **[PR #1443](https://github.com/HKUDS/nanobot/pull/1443)**：心跳推理与通知解耦，创建近 2 个月，涉及核心 agent 行为逻辑，需关注是否阻碍后续 heartbeat 优化。
- **[Issue #3674](https://github.com/HKUDS/nanobot/issues/3674)**：WebSocket 媒体字段丢失问题，暴露深层数据流断点，若不及时修复将影响多模态扩展计划。

建议维护者安排专项时间处理上述长期悬而未决的高影响力事项。

--- 

📊 **健康度概览**：项目处于稳定开发期，bug 响应及时，新功能提案活跃，CI/CD 质量管控强化，社区参与度良好。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 Hermes Agent 项目分析师，我将根据提供的 GitHub 数据为您生成一份结构清晰的项目动态日报。

---

### **Hermes Agent 项目日报 (2026-05-08)**

**项目健康度评估：** Hermes Agent 今日活跃度极高，Issue 和 PR 数量均为 50 条，表明社区参与度和开发迭代节奏强劲。新版本 v0.13.0 的发布标志着项目在持续演进中。整体来看，项目正处于一个功能丰富化与稳定性提升并重的阶段。

---

#### **1. 今日速览**

*   Hermes Agent 今日共处理了 50 条 Issue 更新和 50 条 PR 更新，显示出极高的社区活跃度和开发效率。
*   项目发布了 v0.13.0 "Tenacity Release"，带来了大量新功能并修复了众多问题。
*   社区讨论热点集中在多平台支持（Telegram, Feishu等）、MCP 工具集成、Web 搜索后端扩展以及模型切换等方面。

---

#### **2. 版本发布**

**Hermes Agent v0.13.0 (v2026.5.7) - The Tenacity Release**

*   **发布日期:** 2026年5月7日
*   **核心亮点:** 本次版本是自 v0.12.0 以来的一次重大更新，包含了 864 次提交、588 个合并的 PR、829 个文件变更以及 128,366 行代码插入。此版本旨在解决复杂系统设计和调试的挑战。

*   **破坏性变更/迁移注意事项:**
    *   本版本未提及具体的破坏性变更，但鉴于其庞大的代码量，建议用户在升级前仔细阅读完整的变更日志（Changelog）并进行充分测试。
    *   主要更新内容包括对本地 Ollama 端点超时问题的修复、MCP 工具响应中图像内容丢失及文本截断的修复、Eden AI 作为内置提供商的引入、SearXNG 环境配置文档的修正以及对 Feishu 提及回复的支持等。

---

#### **3. 项目进展**

*   **PR #21580: feat(context): add identifierPolicy and configurable compression limits**
    *   **贡献者:** crayfish-ai
    *   **状态:** 已合并
    *   **描述:** 引入了 `identifierPolicy` 和灵活的压缩限制。`_safe_truncate` 现在可以保护关键标识符（如文件路径、URL、变量名等），在截断时将其附加到标记中，从而保留重要上下文。
    *   **影响:** 显著提升了长上下文场景下的信息保留能力，尤其适用于需要精确引用或调试的场景，是 OpenClaw 设计理念的延续。
    *   [查看 PR](https://github.com/NousResearch/hermes-agent/pull/21580)

*   **PR #21578: fix(auth): send Nous refresh token via header**
    *   **贡献者:** shannonsands
    *   **状态:** 已合并
    *   **描述:** 修复了 OAuth 认证流程，确保 Nous Portal 的刷新令牌通过 HTTP 头部 (`x-nous-refresh-token`) 发送，而非表单体。这增强了安全性并符合预期行为。
    *   **影响:** 提高了认证系统的安全性和可靠性。
    *   [查看 PR](https://github.com/NousResearch/hermes-agent/pull/21578)

*   **PR #20710: P0 fixes: tool timeout, JSON deserialization, MCP handler change detection**
    *   **贡献者:** yhwl8888
    *   **状态:** 已合并
    *   **描述:** 此 PR 解决了三个关键的 P0 级别问题：1) 工具调用超时设置为 120 秒；2) 在 JSON 解析失败时保留原始数据；3) 改进了 MCP 处理器变更检测机制。
    *   **影响:** 这些修复直接提升了工具的健壮性、错误恢复能力以及在复杂环境下的稳定性，对生产部署至关重要。
    *   [查看 PR](https://github.com/NousResearch/hermes-agent/pull/20710)

---

#### **4. 社区热点**

*   **[Issue #7517] Feature Request: Native Multi-Agent Support**
    *   **作者:** SamMaxknow
    *   **热度:** 评论 8 👍 7
    *   **诉求:** 用户强烈呼吁添加原生多代理支持，允许单个网关进程服务于多个具有隔离会话、人格、记忆和工具配置的命名代理。这与 OpenClaw 的多代理架构类似。
    *   **分析:** 此请求反映了用户对更高级别抽象和复杂工作流的需求，是 Hermes Agent 向通用智能体操作系统演进的重要信号。已有多个相关讨论，表明这是一个长期且重要的路线图方向。
    *   [查看 Issue](https://github.com/NousResearch/hermes-agent/issues/7517)

*   **[Issue #10644] Feature: Add Brave Search as a native web search backend**
    *   **作者:** diego-anselmo
    *   **热度:** 评论 3 👍 22
    *   **诉求:** 提议将 Brave Search API 作为第一方网络搜索后端添加，因其免费额度大且性价比高。
    *   **分析:** 用户积极寻求更多、更经济的 Web 搜索选项，以增强 Hermes 的信息检索能力。该需求得到了广泛认可（22个赞），表明社区对多样化工具集成的兴趣浓厚。
    *   [查看 Issue](https://github.com/NousResearch/hermes-agent/issues/10644)

*   **[Issue #5941] Add Searxng as a default web search provider**
    *   **作者:** RoboRiley
    *   **热度:** 评论 2 👍 28
    *   **诉求:** 提议将 Searxng 作为默认网络搜索提供商添加到 Hermes 中，作为 Firecrawl、Tavily 等的替代方案。
    *   **分析:** 此请求同样聚焦于扩展 Web 搜索能力，Searxng 作为一个开源、可自托管的选择，受到了社区的广泛关注和支持。
    *   [查看 Issue](https://github.com/NousResearch/hermes-agent/issues/5941)

---

#### **5. Bug 与稳定性**

*   **P1 - Telegram Updater 在网络闪断后永久静默 (Issues #5729, #12607, #18086)**
    *   **严重性:** 高
    *   **描述:** Telegram 平台的 Updater 组件在经历单次网络波动后，会永久停止重连尝试，导致服务中断，直到手动重启网关。
    *   **状态:** 有相关修复 PR (#21548, #21561) 正在处理，旨在改进心跳检测和重连逻辑。
    *   [查看 Issue #5729](https://github.com/NousResearch/hermes-agent/issues/5729)
    *   [查看 Issue #12607](https://github.com/NousResearch/hermes-agent/issues/12607)
    *   [查看 Issue #18086](https://github.com/NousResearch/hermes-agent/issues/18086)

*   **P2 - Gateway 多平台 WebSocket 共享单一事件循环导致级联断开 (Issue #21026)**
    *   **严重性:** 中高
    *   **描述:** 当同时运行多个消息平台（如 WeCom + Feishu + QQBot）时，网关的 WebSocket 连接共享一个 Python asyncio 事件循环。当代理在处理消息（调用 LLM API、执行工具）时，其他平台的连接可能会被阻塞，导致级联断开。
    *   **状态:** 此问题已在今日提出，尚无公开修复 PR。
    *   [查看 Issue #21026](https://github.com/NousResearch/hermes-agent/issues/21026)

*   **P2 - 自定义提供者 `max_output_tokens` 在配置中被静默丢弃 (Issue #21498)**
    *   **严重性:** 中
    *   **描述:** 使用 `config.yaml` 中的自定义提供者时，`max_output_tokens` 键会被 `config.py` 中的配置归一化器静默丢弃，导致所有 API 调用都使用模型的默认最小值（例如 2048 个 token）。
    *   **状态:** 此问题已在今日提出，尚无公开修复 PR。
    *   [查看 Issue #21498](https://github.com/NousResearch/hermes-agent/issues/21498)

*   **P2 - Docker 沙箱从未接收到来自 `docker_forward_env` 的环境变量 (Issue #12534)**
    *   **严重性:** 中
    *   **描述:** 在 `docker` 终端后端，`terminal.docker_forward_env`（config.yaml）中列出的环境变量永远不会转发到沙箱容器中。依赖这些变量的 CLI（如 `vercel`, `firebase`, `gh` 等）即使凭据存在也会失败。
    *   **状态:** 此问题已在今日提出，尚无公开修复 PR。
    *   [查看 Issue #12534](https://github.com/NousResearch/hermes-agent/issues/12534)

---

#### **6. 功能请求与路线图信号**

*   **Native Multi-Agent Support (Issue #7517)**
    *   **信号强度:** ⭐⭐⭐⭐⭐
    *   **分析:** 这是最强烈的路线图信号之一。它要求 Hermes 从一个单代理框架转变为一个支持多代理协同工作的平台，类似于 OpenClaw。这不仅是一个功能请求，更是对 Hermes 未来定位的重大期待，预计将成为未来版本的核心开发方向。

*   **Per-Turn Model Escalation / Model Switching Tool (Issues #20249, #16525)**
    *   **信号强度:** ⭐⭐⭐⭐
    *   **分析:** 用户希望实现基于任务复杂度的模型自动切换或按需调用更强大的模型。这涉及到更精细的模型路由策略，是提升代理自主性和性能的关键功能。相关 PR 也显示了开发团队对此方向的关注。

*   **Brave Search & SearXNG Integration (Issues #10644, #5941)**
    *   **信号强度:** ⭐⭐⭐⭐
    *   **分析:** 社区对多样化、经济实惠的网络搜索后端有着明确需求。Brave Search 和 SearXNG 都是受欢迎的开源选择，它们的集成将丰富 Hermes 的信息获取渠道，满足用户对隐私和经济性的考量。

*   **Eden AI Provider Integration (PR #21573)**
    *   **信号强度:** ⭐⭐⭐
    *   **分析:** 虽然 Eden AI 作为新提供商已被合并到 PR 中，但其本身代表了用户希望接入“元网关”类服务的需求，即通过一个入口访问多种底层模型供应商。这表明 Hermes 正在努力扩大其模型生态兼容性。

---

#### **7. 用户反馈摘要**

*   **正面反馈:**
    *   用户对新版本 v0.13.0 的快速迭代和问题修复表示赞赏。
    *   社区对 Brave Search 和 SearXNG 等新 Web 搜索后端的支持呼声很高，认为它们是“最具可及性和成本效益”的选择。
    *   多代理支持的请求得到了广泛的“👍”，表明这是一个被高度期待的强大功能。

*   **负面反馈/痛点:**
    *   **上下文记忆问题:** 用户报告 Hermes Agent 无法正确读取和利用之前的对话上下文和记忆，导致回答不连贯。
    *   **多平台稳定性:** Telegram 和其他平台的连接问题（如级联断开、重连失败）是主要的痛点，影响了用户体验的连续性。
    *   **配置复杂性:** 自定义提供者的配置问题（如 `max_output_tokens` 被静默丢弃）以及 Docker 环境变量转发问题，揭示了配置管理的潜在缺陷，增加了上手难度。
    *   **终端交互:** TUI 在 Warp 终端中 Shift+Enter 和 Alt+Enter 的行为不符合预期，影响了多行输入的体验。

---

#### **8. 待处理积压**

*   **[Issue #7335] More than 1000 open issues**
    *   **描述:** 项目目前拥有超过 1000 个开放问题，用户询问如何控制这种增长。
    *   **状态:** 已于今日关闭。这可能意味着项目维护者已经制定或实施了相应的管理策略。
    *   **链接:** [NousResearch/hermes-agent Issue #7335](https://github.com/NousResearch/hermes-agent/issues/7335)

*   **[Issue #21563] MCP approvals subsystem lacks gateway IPC and is non-functional**
    *   **描述:** 此问题指出 MCP 批准子系统（`permissions_list_open` / `permissions_respond`）缺乏网关 IPC，因此无法正常工作。
    *   **状态:** 已于今日关闭，但其孪生问题 #21558 也同时关闭，说明这是一个系统性问题，可能已被彻底修复。
    *   **链接:** [NousResearch/hermes-agent Issue #21563](https://github.com/NousResearch/hermes-agent/issues/21563)

*   **[Issue #21558] MCP approvals subsystem lacks gateway IPC and is non-functional**
    *   **描述:** 此问题是 Issue #21563 的重复项。
    *   **状态:** 已于今日关闭。
    *   **链接:** [NousResearch/hermes-agent Issue #21558](https://github.com/NousResearch/hermes-agent/issues/21558)

---

**总结:** Hermes Agent 今日展现出强劲的发展势头，新版本发布和社区活跃度均处于高水平。开发重点在于解决稳定性问题（特别是多平台连接）、丰富工具链（Web 搜索、模型提供商）以及探索更高级的功能（多代理支持）。维护者需继续关注 P1/P2 级别的 Bug 修复进度，并积极规划长期功能路线图以满足社区的期望。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报（2026-05-08）**

---

### 1. **今日速览**  
过去24小时 PicoClaw 项目活跃度较高，共处理 36 条 Issue 更新与 50 条 PR 动态，新增 nightly build v0.2.8-nightly.20260507。社区持续聚焦于 LLM 调用稳定性、多通道消息路由及工具安全机制优化。整体开发节奏稳健，安全与维护性改进占主导。

---

### 2. **版本发布**  
**Nightly Build v0.2.8-nightly.20260507.788cda5c** 已发布，为自动化构建版本，建议谨慎使用。完整变更见：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)。本次未包含破坏性变更，主要为基础修复与配置增强。

---

### 3. **项目进展**  
今日合并/关闭的 PR 中，以下两项具有显著推进意义：
- **#2819: feat(cli): Add non-destructive /reset command for session history**  
  引入非破坏性的会话重置功能，保留历史上下文的同时支持新建独立会话，提升多任务协作体验。
- **#2504: fix(audio): copy Opus frame data in OGG decoder to prevent corruption**  
  修复了 Discord 语音传输中因帧数据复用导致的音频损坏问题，增强语音通道稳定性。

此外，多个基础设施类 PR 被合并，如 Go 工具链升级（#2821）、MCP 协议流化支持（#2811），体现对长期可维护性与生态集成的投入。

---

### 4. **社区热点**  
当前最受关注的问题集中在 **LLM 调用容错机制** 与 **多用户会话隔离**：
- **[Issue #629] LLM 调用失败无重试机制**（13 条评论）：用户反馈在 OpenRouter 等不稳定 API 下任务挂起，缺乏自动重试逻辑。该问题自 2026-02 提出，仍开放中，反映生产环境对鲁棒性的迫切需求。
- **[Issue #348] 通用附件支持**（3 条评论）：提议扩展 Telegram/Discord 等平台对文件、媒体的支持能力，属高优先级路线图项。
- **[PR #2791] Telegram 主题上下文保留**：实现回复时维持论坛话题元数据，获社区正向响应，解决跨线程消息错乱问题。

---

### 5. **Bug 与稳定性**  
按严重程度排序的重要 Bug：
| Issue | 类型 | 影响范围 | 是否修复 |
|-------|------|--------|----------|
| [#629] LLM 调用失败后无重试 | 提供者层 | 核心功能中断风险 | ❌ 未修复（长期开放） |
| [#1042] exec 工具路径检测误判 | 工具安全 | 命令执行阻断错误 | ✅ 有相关 PR #2814 待合入 |
| [#2468] 定时任务受限于内部频道 | Cron 调度 | 外部触发失效 | ✅ 已关闭（可能通过配置调整解决） |
| [#2472] Windows 路径分隔符兼容问题 | 跨平台 | 系统特定崩溃 | ✅ 已关闭（路径标准化处理） |

> 注：[#629] 为最突出稳定性隐患，建议纳入下个稳定版重点修复。

---

### 6. **功能请求与路线图信号**  
用户明确提出的功能方向包括：
- **LLM 账户堆叠（Account Stacking）**：[Issue #2408] 提议实现 API key 轮换以应对速率限制，已有设计讨论但未落地。
- **SMTP 邮件通知支持**：[Issue #2465] 用于定时任务结果推送，技术可行性强，预计近期进入开发队列。
- **飞书多应用实例支持**：[Issue #2493] 允许同一环境运行多个 Feishu Bot，避免单点配置冲突。

结合现有 PR 可见，团队正逐步响应这些高频需求，尤其在通道扩展与配置灵活性方面持续发力。

---

### 7. **用户反馈摘要**  
从活跃 Issue 中提取的真实痛点：
- **负面反馈集中点**：
  - LLM 服务波动导致任务卡死（#629）
  - 多消息并发时仅响应最后一条（#2447）
  - Web UI 频繁需重新认证（#2302）
- **正面认可**：
  - 非破坏性 `/reset` 命令设计获用户欢迎（#2819）
  - MCP 集成测试框架提升开发者信心（#2811）
- **典型场景**：企业客户依赖定时任务 + 邮件通知（#2465），个人开发者关注跨平台兼容性（#2472）。

---

### 8. **待处理积压**  
需维护者优先关注的长期开放项：
- **[Issue #629] LLM 调用无重试**：创建超3个月，影响生产可用性，建议分配资源解决。
- **[Issue #2171] 迁移至 OpenAI Responses API**：涉及重大架构调整，虽已有规划但进度缓慢。
- **[Issue #348] 通用附件支持**：优先级标记为 high，但缺乏具体排期，可能阻碍部分 IM 平台深度集成。

建议在下个迭代周期（v0.3.x）集中处理上述三项，以提升产品成熟度。

--- 

*数据来源：GitHub.com/sipeed/picoclaw (截至 2026-05-08)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026-05-08）**

---

### 1. **今日速览**
过去24小时，NanoClaw 保持高度活跃的开发节奏，共处理 32 个 PR 更新与 9 个 Issue 动态。项目在 A2A（Agent-to-Agent）路由稳定性、容器构建修复及多通道认证安全等方面取得关键进展。整体活跃度处于高位，维护响应及时，社区反馈集中于功能扩展与系统健壮性提升。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
本周重点推进了 **A2A 消息路由一致性** 和 **容器环境兼容性** 两大方向：

- **#2267** `fix(agent-to-agent): route a2a replies back to originating session`  
  修复了当目标代理组存在多个活跃会话时，回复错误地分发至最新会话的问题，显著改善多目的地群组的消息连贯性。
- **#2002** `fix(routing): origin-session threading for agent-to-agent replies`  
  进一步巩固线程隔离机制，确保跨代理通信中消息归属原始会话。
- **#2336** `fix(container): repair claude-code install for pnpm v11`  
  解决了因 pnpm 版本升级导致的 `claude` 二进制文件缺失问题，避免首次使用即报错“native binary not installed”。
- **#2335** `fix(container): pin pnpm to 10.33.0 to match host`  
  通过锁定 pnpm 版本，防止核心包管理器自动升级引发依赖解析异常。

上述变更标志着系统在复杂场景下的可靠性显著增强。

---

### 4. **社区热点**
当前最受关注的议题为 **#869 Per-group credential management and interactive reauth via channels**（高优先级增强请求），用户强烈呼吁实现按群组隔离 Claude API 凭证，以支持多团队/多身份共享部署场景。该需求已存在三个月，今日仍由 k-fls 提出，反映长期未满足的核心痛点。

另两个高热度议题围绕安全性展开：
- **#2341 / #2340** 关于 `/restart` 和 `/build` 命令应增加所有者角色校验（而非仅依赖主群组权限）；
- **#2342** 报告 connectivity watchdog 自5月1日起失效，影响 Docker 服务恢复能力。

这些议题均体现用户对权限控制与系统监控的深度关切。

> 🔗 [Issue #869](https://github.com/qwibitai/nanoclaw/issues/869) | [Issue #2341](https://github.com/qwibitai/nanoclaw/issues/2341)

---

### 5. **Bug 与稳定性**
当日共发现并关闭 **4 个 Bug**，其中最高优先级为 **A2A 路由错配** 问题：

| 严重程度 | Issue / PR | 描述 | 是否已修复 |
|--------|------------|------|-----------|
| High   | #2331 / #2332 | `findSessionByAgentGroup` 在多通道群组中错误路由 A2A 回复 | ✅ 已关闭（相关修复见 #2267, #2002） |
| Medium | #2342 | connectivity watchdog 进程自5月1日起停止运行 | ⚠️ 待处理（今日刚报出） |
| Low    | #2325 | SDK 自动压缩上下文后丢失 `<message to="...">` 指令提示 | ✅ 已关闭（修复见 #2327） |

此外，OAuth 凭证文件不可读事件（#2343）暴露出告警机制触发延迟问题，需优化阈值逻辑。

---

### 6. **功能请求与路线图信号**
用户明确提出以下新功能需求，具备较高采纳可能性：

- **按群组隔离凭证管理**（#869）：已有初步架构讨论，预计纳入 Q3 路线图；
- **Web UI 文件附件支持**（#2334）：轻量级前端扩展，技术风险低，可能随下一迭代发布；
- **AWS CLI 技能集成**（#2319）：已完成开发，即将合并，反映多云工具链整合趋势；
- **持久化语义记忆（mnemon）**（#2318）：高级认知能力扩展，标志项目向自主 Agent 演进。

结合近期 PR 密集上线技能类模块（如 onecli-gateway、add-aws、add-mnemon），表明项目正加速生态工具化布局。

---

### 7. **用户反馈摘要**
从 Issue 评论中提炼真实痛点：

- **多租户场景受阻**：企业用户无法区分不同部门 API 用量，导致配额冲突（源自 #869）；
- **新手引导卡点**：非技术用户在初始设置阶段缺乏退出选项，被迫中断安装（#2324 反馈）；
- **文档碎片化**：各技能 README 更新滞后，如 Gmail、Signal 等配置步骤不一致（#2320 指出）；
- **Telegram 文本渲染缺陷**：下划线 `_` 被误删破坏 URL（#2338），影响用户体验。

正面反馈集中在 **容器技能快速部署** 和 **A2A 路由改进后消息不乱序**。

---

### 8. **待处理积压**
以下重要 Issue 需关注：

- **#869 Per-group credential management**  
  创建时间：2026-03-09 | 状态：Open | 评论数：3 | 👍: 0  
  涉及核心权限模型重构，建议分配专项任务跟进设计。

- **#2342 Connectivity watchdog dead since May 1**  
  创建时间：2026-05-07 | 状态：Closed（但问题持续）  
  尽管标记关闭，实际服务仍未恢复，需运维介入重启或排查 launchd 配置。

> 🔗 [Backlog: Issue #869](https://github.com/qwibitai/nanoclaw/issues/869)

--- 

*数据来源：NanoClaw GitHub Repository @ qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-05-08）**

---

### 1. **今日速览**  
过去24小时内，NullClaw 社区保持活跃状态：共处理 6 条 Issue 更新（5 条新开/活跃，1 条关闭）和 7 条 PR 更新（5 条待合并，2 条已合并/关闭），无新版本发布。项目整体处于功能迭代与文档完善并行阶段，重点集中在 Lark 集成增强、构建兼容性及 ACP 协议支持等方向。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
- **[PR #790](https://github.com/nullclaw/nullclaw/pull/790)**（CLOSED）：修复了 OpenAI-compatible provider 在 `api_mode=responses` 模式下工具 schema 格式错误及空值处理异常问题，提升了 API 兼容性稳定性。  
- **[PR #893](https://github.com/nullclaw/nullclaw/pull/893)**（CLOSED）：成功集成了 `zig-qm-toolkit`，引入 hooks、agents、skills 及四级验证机制，扩展了项目模块化能力，同时避免了对现有 AGENTS.md 和 CLAUDE.md 的侵入性修改。  
- **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)**（OPEN）：推进 cron 子代理引擎开发，包含 DB 调度器、运行历史记录、JSON 输出和安全加固，显著增强自动化任务管理能力。

---

### 4. **社区热点**  
- **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871)**：用户 uMendex 指出 `web_search` 在低资源设备上因缺乏直接 DuckDuckGo 支持而实用性受限，呼吁原生优化或轻量 API 替代方案。该 Issue 获 7 条评论，反映核心功能在边缘场景下的适配短板。  
- **[PR #897](https://github.com/nullclaw/nullclaw/pull/897)**：针对 Issue #820 快速响应，新增 Debian 系统下 Zig 安装指南，填补文档空白，获积极反馈。  
- **[Issue #895 & #894](https://github.com/nullclaw/nullclaw/issues/895) / [PR #896](https://github.com/nullclaw/nullclaw/pull/896)**：围绕 Lark 频道行为配置展开，提出禁用打字占位符撤回、支持全群消息响应等功能需求，体现企业级协作场景下的精细化控制诉求。

---

### 5. **Bug 与稳定性**  
- **[Issue #871]**（严重）：`web_search` 在低资源设备不可用，影响基础功能落地，尚无公开修复计划。  
- **[PR #887](https://github.com/nullclaw/nullclaw/pull/887)**（OPEN）：正在解决 Zig v0.16 构建失败问题，覆盖 Windows 与 Linux 平台，预计提升跨平台编译稳定性。

---

### 6. **功能请求与路线图信号**  
- **Lark 行为可配置化**：多个 Issue/PR（#894, #895）集中提议开放 Lark 机器人响应策略配置，暗示未来可能推出统一通信渠道适配层。  
- **ACP 协议原生支持**：[PR #896](https://github.com/nullclaw/nullclaw/pull/896) 实现 Agent Client Protocol stdio JSON-RPC 适配器，标志项目向标准化 AI 交互协议靠拢，有望纳入下一版本核心特性。  
- **数据治理框架**：[PR #885](https://github.com/nullclaw/nullclaw/pull/885) 提出 NullClaw Data Governance Layer，契合开源安全趋势，可能成为企业版或高级模块的基础。

---

### 7. **用户反馈摘要**  
- **痛点**：  
  - Debian 用户抱怨 Zig 安装复杂，质疑是否必须依赖 Docker（#820）；  
  - 低配设备用户强调 `web_search` 功能“形同虚设”，缺乏轻量化实现；  
  - Lark 群组中仅 `@mention` 才触发回复，不符合团队协作习惯。  
- **满意点**：  
  - 文档改进（如 #897）获得即时采纳与感谢；  
  - 对非侵入式架构变更（如 #893）表示认可，维护现有工作流完整性。

---

### 8. **待处理积压**  
- **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871)**（创建于 2026-04-25）：关于 `web_search` 在低资源设备不可行的问题已讨论近两周，涉及核心功能可用性，需优先级评估或明确技术路线。  
- **[PR #885](https://github.com/nullclaw/nullclaw/pull/885)**（hackathon draft）：数据治理层设计完整但处于草案阶段，建议组织内部评审以决定是否投入生产级开发。

--- 

*数据来源：GitHub nullclaw/nullclaw，统计时间：2026-05-08 00:00–24:00 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-05-08）**

---

### 1. 今日速览

过去24小时内，IronClaw 保持高度活跃状态：提交50条PR更新（30条已合并），处理23个Issue（7条关闭），并发布v0.28.0版本。Reborn集成栈持续推进，重点聚焦于事件子系统稳定性、多通道认证恢复及数据库持久化增强。整体开发节奏稳健，社区反馈集中在Telegram/Gmail集成故障与LLM推理内容透传需求上。

---

### 2. 版本发布

**ironclaw-v0.28.0**（2026-05-07）  
本次发布核心为 **Reborn-integration substrate 正式落地主分支**，引入以下关键基础设施：
- `host foundation crates`、`capability host`、`runtime dispatcher`
- `process lifecycle`、`filesystem`、`secrets`、`network` 边界控制
- `extension manifest registry` 注册机制
- 新增 **WIT兼容的WASM工具链支持**（`wit-compatible WASM tool ru`）

此版本标志着 Reborn 运行时架构从实验性迁移至生产就绪阶段，所有核心宿主能力均已通过 crate 边界隔离，为后续垂直切片测试打下基础。建议升级用户验证扩展兼容性，尤其关注文件系统与网络策略变更。  
🔗 [Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.0)

---

### 3. 项目进展

#### 重要合并/关闭 PR：

- **#3381**：修复Telegram配对流程中的OAuth失败恢复机制，统一解决 #3317/#3319/#3320 三个P1级Bug，显著提升跨通道认证鲁棒性。
- **#3366**：实现暂停任务的自动恢复逻辑（#3166），当用户完成授权后任务自动继续执行，而非永久挂起。
- **#3376**：正式发布v0.28.0，同步更新 `ironclaw_common` 至0.4.1（API兼容变更）。
- **#3382**：强化AgentLoopHost facade接口安全性，采用有界引用替代裸指针，提升运行时契约稳定性。

上述进展推动 **Reborn事件子系统与多租户工作空间隔离** 进入关键实施阶段，同时夯实了长期运行任务的可靠性保障。

---

### 4. 社区热点

**最活跃议题**：  
**#3067** —— 提出构建Reborn垂直切片端到端集成测试套件的需求，已有28条评论，强调需通过公共入口点验证子strate完整性，而非仅依赖单元测试。该诉求反映社区对生产环境可靠性的迫切期待。  
🔗 [Issue #3067](https://github.com/nearai/ironclaw/issues/3067)

**高关注度PR**：  
**#3381** 虽无具体评论但集中修复了三个独立P1 Bug，体现用户在使用Telegram→Gmail OAuth链路时遭遇严重阻塞，凸显跨平台身份流转是当前体验短板。

---

### 5. Bug 与稳定性

按严重程度排序的关键问题：

| Issue | 描述 | 状态 | 相关Fix PR |
|------|------|------|------------|
| #3225 | Gemini API key模式下第二次LLM调用缺失thought_signature导致HTTP 400 | OPEN | ❌ 无 |
| #3319 / #3320 | Gmail认证失败后Telegram会话无法恢复 | OPEN | ✅ #3381 (已修复) |
| #3333 | Reborn生产级组件缺失真实实现，仍依赖内存模拟 | OPEN | 进行中 |

> **注意**：#3225 涉及Gemini模型特定参数传递缺陷，暂无公开修复方案，建议关注后续LLM适配层更新。

---

### 6. 功能请求与路线图信号

- **LLM推理内容透传**（#3327）：明确要求将 `reasoning_content` 等字段持久化并展示给用户，预示下一代AI可解释性将成为产品重点。
- **多Slack工作空间支持**（#3334）：提出单实例服务多租户场景，与现有“单实例多用户”设计形成互补，可能导向企业级部署路线图。
- **扩展生命周期UX迁移**（#3288等）：系列Issue表明正在系统性重构扩展管理界面，向类型化服务治理演进。

结合近期PR可见，**v0.29.0 预计将强化多租户隔离与LLM调试能力**。

---

### 7. 用户反馈摘要

- **痛点**：Telegram渠道在Gmail认证失败后会彻底卡死（#3320），用户体验断裂；
- **场景诉求**：希望看到模型内部思考过程（#3327），增强对复杂任务决策的信任；
- **满意度亮点**：v0.28.0发布后数据一致性恢复良好（#3274已关），说明升级流程总体稳定。

---

### 8. 待处理积压

- **#3022**：Reborn事件子strate集成测试阻塞项，超2周未推进，影响整体cutover进度。
- **#3259**：crates.io未同步v0.25–0.27，导致下游被锁定在旧版wasmtime存在CVE风险，需协调发布流程。
- **#3333**：Reborn生产组件审计发现多个“伪实现”，需明确交付时间表以避免技术债务累积。

建议优先响应 #3022 与 #3259，以释放下游生态与主干稳定性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-05-08）**

---

### 1. **今日速览**

LobsterAI 在过去24小时内保持高度活跃的开发节奏，共合并36个 Pull Request，发布新版本 v2026.5.7。项目整体处于稳定迭代期，重点聚焦于用户体验优化、跨平台兼容性及会员系统稳定性提升。尽管存在少量用户反馈的登录与配置问题，但社区响应及时，修复进展迅速。

---

### 2. **版本发布**

**LobsterAI v2026.5.7** 已于 2026-05-07 正式发布。本次更新主要包含两项核心改进：
- 提升 Windows 平台下技能删除的可靠性，并增强导入时的反馈机制；
- 升级有道云笔记（youdaonote）技能至 v1.0.8，优化第三方服务集成体验。

> 无破坏性变更或重大架构调整，无需强制迁移。[查看 Release](https://github.com/netease-youdao/LobsterAI/releases/tag/v2026.5.7)

---

### 3. **项目进展**

过去24小时共处理 **45 个 PR**，其中 **36 个已合并/关闭**，9 个待合并。关键进展包括：

- **会话分页加载机制落地**（PR #924 → #1907）：解决高并发会话下的内存溢出与渲染卡顿，显著提升大规模对话场景性能。
- **ESLint 全量修复完成**（PR #1498）：消除全部 165 个 lint error，代码质量达到零违规标准，为后续自动化流程奠定基础。
- **流式文本重复字符误吞问题修复**（PR #1908）：修正 token 分块边界处理逻辑，避免如 `.pptx` 被错误合并为 `.ptx` 的问题。
- **Windows 文件预览路径错误修复**（PR #1909）：解决 `file:///D:/path` 与 `D:\path` 路径解析不一致导致的 ENOENT 错误及卡片重复展示。
- **代理环境下 OpenAI 模型访问支持恢复**（PR #1818）：确保启用代理后仍能正常调用原厂 API，保障企业级部署可用性。

这些改进体现了项目在 **稳定性、可维护性、跨平台兼容性** 方面的持续投入。

---

### 4. **社区热点**

当前最活跃的 Issue 集中在 **IM机器人配置失败** 和 **会员登录异常**：

- **Issue #1878**：微信接口扫码后无法输入验证码，因客户端缺少验证码输入界面导致配置中断。已有2条评论讨论临时解决方案。[查看详情](https://github.com/netease-youdao/LobsterAI/issues/1878)
- **Issue #1903**：新上报的会员登录频繁失败问题，影响用户使用网易付费模型。开发者尚未介入，需紧急排查认证流程。[查看详情](https://github.com/netease-youdao/LobsterAI/issues/1903)

两议题均反映 **第三方身份验证流程集成不完善** 与 **会员体系健壮性不足** 的核心诉求，可能推动下一版本加强 OAuth/OIDC 支持与登录重试机制。

---

### 5. **Bug 与稳定性**

| 严重等级 | 问题描述 | 状态 |
|--------|--------|------|
| 高 | Windows 下技能删除失败（EPERM） | ✅ 已修复（PR #1891） |
| 中 | 流式输出中 `.pptx` 等扩展名被截断 | ✅ 已修复（PR #1908） |
| 中 | 代理环境下 OpenAI 模型不可达 | ✅ 已修复（PR #1818） |
| 低 | IM 机器人扫码后无验证码输入框 | 🔄 待开发介入（Issue #1878） |

所有已知 Bug 均有对应修复 PR 或已进入待合并队列，整体稳定性良好。

---

### 6. **功能请求与路线图信号**

用户明确提出的需求包括：
- **OAuth 登录支持 ChatGPT**（已实现在 PR #1830），预示身份认证体系将全面开放第三方集成；
- **Agent 独立工作目录**（PR #1904 已合并），支持多任务隔离运行，符合企业级定制需求；
- **小米 Mimo 模型 Coding Plan 支持**（PR #1862 已完成），表明厂商合作生态正在扩展。

结合近期高频关键词“分页”“代理”“OAuth”“独立目录”，下一版本（v2026.5.x）预计将进一步强化 **多租户支持** 与 **企业级部署能力**。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - 微信机器人配置流程缺乏前端交互闭环（用户无法完成扫码后操作）；
  - 会员登录失败导致付费模型不可用，挫伤高级功能使用意愿；
  - Windows 路径大小写敏感性问题影响技能管理体验。
  
- **积极反馈方向**：
  - 流式文本合并逻辑优化获技术用户认可；
  - ESLint 清理后代码可读性提升；
  - 分页加载显著改善大会话卡顿现象。

---

### 8. **待处理积压**

- **Issue #1878**（创建时间：2026-04-30）：IM 机器人验证码输入缺失问题，超过一周未获开发回应，建议优先处理以维持微信生态用户满意度。
- **PR #924 衍生分页机制**：虽已合入主干，但原始作者 @swuzjb 长期未参与后续维护，需确认是否有回归风险或性能瓶颈。

---

*数据来源：GitHub LobsterAI Repository（https://github.com/netease-youdao/LobsterAI）*  
*生成时间：2026-05-08*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-05-08）**

---

### 1. **今日速览**  
过去24小时，Moltis 社区活跃度中等，共处理 4 个 Issue 和 10 个 PR，其中 9 个已合并、1 个待合并。项目发布两个新版本（20260507.04 与 .05），涵盖语音识别增强、身份认证升级及浏览器沙箱修复等关键改进。整体开发节奏稳定，维护者响应迅速，无重大阻塞问题。

---

### 2. **版本发布**  
- **20260507.05**：聚焦语音模块扩展，新增 OpenAI Realtime 模型支持与本地 Whisper 集成（PR #984、#981）。
- **20260507.04**：引入 Ed25519 节点身份验证机制（TOFU 模型）并完善跨服务器 onboarding 协议文档（PR #979、#976）。  
> ⚠️ **注意**：Ed25519 身份系统为破坏性变更，需重新注册节点密钥；建议备份旧配置后再升级。详见 [Release Notes](https://github.com/moltis-org/moltis/releases/tag/20260507.05)。

---

### 3. **项目进展**  
- **语音能力强化**：合并 PR #984 与 #981，新增 `whisper-local` STT 提供商与 OpenAI 实时语音模型指导，显著提升隐私友好型部署选项（[链接](https://github.com/moltis-org/moltis/pull/981)）。
- **安全架构升级**：采用 Ed25519 挑战-响应机制替代 Token 认证（PR #979），实现去中心化节点互信（[链接](https://github.com/moltis-org/moltis/pull/979)）。
- **沙箱稳定性修复**：解决 Docker 环境下浏览器沙箱挂载失败问题（PR #980 → Issue #977）（[链接](https://github.com/moltis-org/moltis/pull/980)）。
- **工具调用诊断优化**：修复 malformed 参数被静默丢弃的问题（PR #983 → Issue #963），增强调试透明度（[链接](https://github.com/moltis-org/moltis/pull/983)）。

---

### 4. **社区热点**  
当前最活跃议题为 **#973：跨代理服务器身份互操作协议提案**（[链接](https://github.com/moltis-org/moltis/issues/973)）。用户呼吁建立标准化 onboarding 流程以支持多 Moltis 实例协作，反映对“个人智能体网络”愿景的期待。该 Issue 虽已关闭，但相关功能已通过 PR #979 和 #976 落地，表明社区需求正快速转化为技术实现。

---

### 5. **Bug 与稳定性**  
| 严重程度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 高 | #977 | Docker 中浏览器沙箱因路径解析失败无法启动 | ✅ 已由 PR #980 修复 |
| 中 | #963 | 空参或畸形工具调用被错误折叠为 `{}` | ✅ 已由 PR #983 修复 |

两项关键 Bug 均已在当日闭环，稳定性风险可控。

---

### 6. **功能请求与路线图信号**  
- **图像生成支持**：Issue #956 提出通过 Codex OAuth 接入 `gpt-image-2`，对应 PR #982 已合并，证实该功能将纳入近期迭代（[链接](https://github.com/moltis-org/moltis/pull/982)）。
- **电话通信集成**：PR #920 实现 Twilio 呼叫支持，结合语音增强趋势，预示 Moltis 正拓展多模态交互边界（[链接](https://github.com/moltis-org/moltis/pull/920)）。

---

### 7. **用户反馈摘要**  
- **痛点**：部分用户在 Docker/Kubernetes 部署时遭遇沙箱挂载异常（#977），影响生产环境可用性。
- **满意度**：对 Ed25519 去中心化身份方案表示认可，认为其优于传统集中式鉴权（#973 讨论）。
- **新诉求**：希望降低第三方依赖（如 OpenAI），推动本地 Whisper 成为默认选项（#981 隐含需求）。

---

### 8. **待处理积压**  
- **#920（Telephony Support）**：自 4 月 29 日提交，历时超 10 天完成审核，建议加快此类基础设施级功能的合并速度。
- **长期未回应 Issue**：无。所有 Issue 均在 24 小时内获得响应或关闭。

--- 

*数据来源：GitHub API / moltis-org/moltis (截至 2026-05-08)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 CoPaw 项目的分析师，我将根据您提供的数据生成一份结构清晰的今日项目动态日报。

---

## CoPaw 项目动态日报 (2026-05-08)

**1. 今日速览**

过去24小时，CoPaw 项目保持高活跃度，共处理了 50 条 Issues 和 33 条 Pull Requests (PRs)。社区讨论集中在模型支持、前端体验和稳定性优化上。整体来看，项目在稳步前进，开发者和用户反馈都非常积极。

**2. 版本发布**

无新版本发布。

**3. 项目进展**

今日合并/关闭的重要 PR 主要围绕功能增强和 Bug 修复展开，显著提升了用户体验和系统稳定性。

*   **技能管理增强:** PR #4091 为工作区技能板块添加了批量启用/禁用功能，解决了 Issue #3503，极大提高了技能管理的效率。
*   **控制台优化:** 多个 PR 对控制台进行了改进，包括 Token 使用量图表优化 (#4094)、语言切换逻辑和图标更新 (#4085)、会话列表样式和中文输入问题修复 (#3934, #3943)，以及代理审批级别的 API 透传 (#3896)，使界面更加友好和功能更完善。
*   **飞书集成改进:** PR #4055 和 #4098 致力于将飞书用户的显示昵称传递给 Agent 环境上下文，解决了 Issue #4050，增强了用户交互的自然性。
*   **文件预览与备份:** PR #4089 修复了文件预览路径中的冗余 URL 前缀剥离问题（相关 Issue #4047）。PR #4095 添加了 `qwenpaw backup` CLI 命令，为用户提供了无需打开控制台 UI 即可管理备份的途径。
*   **打包与日志:** PR #4093 修复了 Windows 环境下打包时的 `conda-pack` 冲突问题（相关 Issue #3988），PR #4076 则实现了跨平台的日志轮转功能，解决了日志无限增长的问题。

**4. 社区热点**

今日讨论最活跃的 Issue 反映了社区对平台核心能力扩展和易用性的高度关注。

*   **[OPEN] Discussion: Which Skills and MCPs Can Be Built-in? (Issue #280)**：这是一个长达两个多月的热门讨论，有 27 条评论。社区成员普遍认为预置流行的技能和 MCP 服务能显著提升开箱即用的体验，并建议社区投票决定首批内置项。这显示了用户对 CoPaw 生态扩展的强烈期待。[链接](https://github.com/agentscope-ai/QwenPaw/issues/280)
*   **[OPEN] Adding a model requires too many steps and clicks (Issue #4036)**：此 Issue 指出添加新模型的流程过于繁琐，需要多次点击和跳转。已有 PR #4030 提出增加 Vertex AI Gemini provider 的需求，这进一步凸显了用户对简化模型配置流程的迫切需求。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4036)

**5. Bug 与稳定性**

今日报告的 Bug 主要集中在特定模型和通道的兼容性问题，以及前端性能方面，部分已有修复方案。

*   **[CLOSED] [bug] 飞书消息处理没有去重机制 (Issue #1403)**：一个已解决的 Bug，报告了飞书通道的消息重复处理问题。这表明开发团队对渠道集成中的边缘情况保持了持续的关注和修复。[链接](https://github.com/agentscope-ai/QwenPaw/issues/1403)
*   **[OPEN] deepseek模型的think内容解析问题 (Issue #4051)** & **[OPEN] WeChat Channel Message Loss Under Normal Network Conditions (Issue #4056)**：这两个 Issue 分别报告了 DeepSeek 模型 `think` 标签解析问题和微信通道在正常网络条件下的消息丢失问题。它们是中等严重性 Bug，可能影响特定用户的使用体验。目前尚无关联的 fix PR，需开发团队介入调查。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4051), [链接](https://github.com/agentscope-ai/QwenPaw/issues/4056)
*   **[OPEN] 升级到1.1.5.post2，又出现记不住agent最后的会话，以及agent运行配置丢失的问题（docker部署）(Issue #4101)**：一个严重的回归问题，涉及 Agent 状态记忆和 Docker 部署下的配置丢失。这可能会严重影响生产环境的稳定性，需要紧急关注和修复。目前尚无关联的 fix PR。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4101)

**6. 功能请求与路线图信号**

用户提出的新功能需求和已有 PR 表明了下个版本的主要开发方向。

*   **模型与提供商支持：**
    *   **Vertex AI Gemini:** Issue #4030 明确提出添加 Vertex AI Gemini provider 的需求，以满足特定企业用户需求。
    *   **火山引擎 Coding Plan:** Issue #3753 询问何时新增火山引擎 coding plan 的默认支持，表明该模型的重要性。
*   **CLI 工具增强：**
    *   **Backup CLI:** PR #4095 直接响应了用户对命令行管理备份的需求，提供了更灵活的运维选项。
    *   **Skill Test CLI:** PR #3999 引入 `qwenpaw skills test` 命令，用于验证技能，这将提升技能开发的迭代效率。
*   **UI/UX 与性能优化：**
    *   **Web Console Upgrade:** Issue #2235 期望通过 Web 控制台进行升级，方便远程操作。
    *   **File Module Enhancement:** Issue #4087 和 PR #4089 共同指向了对 File 模块功能的加强，使其能处理更多类型的文件和提供更稳定的预览体验。
    *   **Conversation Sync & Voice Input:** Issue #4000 提出了微信对话与浏览器操作同步的需求，以及对网页版语音输入功能的期望。
    *   **MCP Client Timeout:** Issue #3997 要求允许配置 MCP Client 的 timeout，以应对复杂场景。

**7. 用户反馈摘要**

从 Issue 中提炼出的真实用户痛点主要集中在以下几个方面：

*   **长对话上下文处理能力不足：** 用户在进行复杂任务时，遇到长对话内容导致回复中断或停止的问题（Issue #4059），以及超长对话后页面滚动卡顿（Issue #3350）。这表明在处理大规模上下文时，系统的资源管理和前端渲染性能有待优化。
*   **文件附件时效性问题：** 聊天中的文件链接一天后过期，导致无法查看和下载，且前端缺乏明确提示（Issue #4047）。这影响了用户的历史记录查阅和数据持久性。
*   **Agent 会话管理与配置稳定性：** 用户报告 Agent 会遗忘之前的会话，以及升级后配置丢失的问题（Issue #4101, #3967），这直接关系到平台的核心功能和用户体验的可靠性。
*   **特定模型行为异常：** DeepSeek 模型的 `think` 内容未被正确解析（Issue #4051），以及 MiMo/DeepSeek 流式模型导致 ReAct loop 重复调用工具（Issue #4034），说明对新兴模型的支持和适配仍在进行中，存在一些细节问题。
*   **操作便捷性与流程优化：** 添加新模型步骤繁琐（Issue #4036），工作区配置与用户文件混淆（Issue #3967），以及希望有 Web 控制台的升级功能（Issue #2235）等，都体现了用户对提升操作效率和降低学习成本的诉求。

**8. 待处理积压**

以下 Issue 或 PR 需要维护者特别关注，因为它们长期未得到解决或回应。

*   **[OPEN] Discussion: Which Skills and MCPs Can Be Built-in? (Issue #280)**：这是一个高优先级、高影响力的长期讨论。虽然已有 27 条评论，但核心决策仍未作出。维护者应尽快组织社区投票或制定明确的内置策略，以避免挫伤用户积极性。[链接](https://github.com/agentscope-ai/QwenPaw/issues/280)
*   **[OPEN] deepseek模型的think内容解析问题 (Issue #4051)**：该 Issue 报告了一个影响特定用户的关键功能问题，且尚无关联的 fix PR。维护者应优先安排时间进行排查和修复。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4051)
*   **[OPEN] WeChat Channel Message Loss Under Normal Network Conditions (Issue #4056)**：同样是一个影响特定用户群的 Bug，需要及时调查原因并修复。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4056)
*   **[OPEN] 升级到1.1.5.post2，又出现记不住agent最后的会话，以及agent运行配置丢失的问题（docker部署）(Issue #4101)**：这是一个严重的回归问题，可能对生产环境造成严重影响，必须立即着手处理。[链接](https://github.com/agentscope-ai/QwenPaw/issues/4101)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，我将根据您提供的 GitHub 数据生成一份结构清晰的 ZeroClaw 项目动态日报。

---

### **ZeroClaw 项目动态日报 (2026-05-08)**

**项目状态：活跃开发中，问题集中爆发期**

#### **1. 今日速览**

过去24小时，ZeroClaw 项目活跃度极高，Issue 和 PR 更新量均达到50条，表明社区反馈和开发者贡献都非常活跃。核心功能如 WhatsApp Web 通道、Shell 工具、网关与数据库集成等关键模块面临多个高优先级 Bug 和安全风险。与此同时，围绕 macOS 桌面应用（Tauri）的增强功能和用户体验优化成为主要开发方向，多个相关 PR 正在推进。整体来看，项目处于一个快速迭代但问题集中的阶段。

#### **2. 版本发布**

无新版本发布。

#### **3. 项目进展**

*   **无合并/关闭的 PR**。所有 Pull Requests 均为 Open 状态，表明当前处于密集开发或审查阶段，尚未有代码合并到主分支。

#### **4. 社区热点**

今日讨论最活跃的 Issue 集中在以下几个方面：
*   **WhatsApp Web 通道失效 (#6246)**: 这是最突出的问题，自4月24日 WhatsApp 服务端协议变更后，消息流中断，影响严重（S1）且工作流受阻。
*   **Shell 工具权限问题 (#6434)**: 即使配置为完全权限，Shell 工具调用被拒绝，触及项目核心安全机制，引起高度关注。
*   **桌面应用功能增强 (#6465, #6329, #6339)**: 用户强烈希望桌面应用能独立运行、支持通用二进制构建和丰富的系统交互能力，这些 Issue 反映了用户对更强大本地体验的需求。

#### **5. Bug 与稳定性**

以下是按严重程度排列的高优先级 Bug：
1.  **[HIGH] WhatsApp Web 通道消息流中断 (#6246)**: 由于 WhatsApp 服务端协议变更导致。已有6条评论，暂无修复 PR。
2.  **[HIGH] Shell 工具在 `autonomy level = "full"` 下被拒绝 (#6434)**: 安全沙箱机制疑似存在缺陷。已有2条评论，暂无修复 PR。
3.  **[HIGH] 网关无法使用 PostgreSQL 数据库 (#6472)**: 运行时错误导致 panic。已有2条评论，暂无修复 PR。
4.  **[MEDIUM] ACP 会话中 `cwd` 变更导致技能文件读取失败 (#6516)**: 安全风险（S1），工作流受阻。已有2条评论，暂无修复 PR。
5.  **[MEDIUM] Telegram 渠道 Prompt Caching 不生效 (#6360)**: 性能退化问题。已有2条评论，暂无修复 PR。
6.  **[MEDIUM] Docker 镜像中 `/zeroclaw-data` 挂载覆盖预构建的 Web 面板 (#6400)**: 部署问题。已有1条评论，暂无修复 PR。
7.  **[MEDIUM] Google Workspace 工具在 Windows 上失败 (#6410)**: 跨平台兼容性问题。已有1条评论，暂无修复 PR。
8.  **[MEDIUM] Gemini CLI Provider 因参数语法过时而崩溃 (#6520)**: 新报告的 Provider 兼容性问题。暂无评论，暂无修复 PR。
9.  **[LOW] Bash 补全无限递归 (#6402)**: CLI 用户体验问题。已有1条评论，暂无修复 PR。

#### **6. 功能请求与路线图信号**

*   **桌面应用原生功能集成**: 多个 Issue (e.g., #6465, #6499, #6485) 和 PR (#6507, #6506, #5265) 强烈建议将聊天界面打包进 Tauri 桌面应用，并实现截图、AppleScript 调用、系统权限管理等能力，这标志着桌面端从“网关依赖”向“独立智能体”演进的战略方向。
*   **环境变量配置机制升级 (#6375)**: 提出 V3 版本的 env-var 重载机制，旨在解决 V1/V2 的模糊性问题，这表明项目在配置管理上正进行重要迭代。
*   **Provider 生态扩展 (#6518)**: 对 Kimi K2.5 等新 OpenAI-compatible 提供者的支持需求，显示项目希望扩大模型选择范围。
*   **Cron 任务优化 (#6510)**: 允许 Cron 仅发送最终结果，避免中间过程信息冗余，体现了对自动化任务精细控制的追求。

#### **7. 用户反馈摘要**

*   **痛点**: 用户对 WhatsApp Web 通道的稳定性极度不满，因其直接导致工作流中断。Shell 工具的权限问题也让高级用户感到困惑和安全担忧。桌面应用的“必须连接网关”模式被视为一个显著的体验障碍。
*   **使用场景**: 用户在多平台（Linux, macOS, Windows, Raspberry Pi）部署和使用 ZeroClaw，尤其关注其在 ACP 会话、远程 Provider 调用以及跨渠道（WhatsApp, Telegram, CLI）的稳定性。
*   **不满意点**: 文档错误（Docker 安装）、CI/CD 流程问题（缺少必要镜像）、以及一些 Provider（Llama.cpp, Gemini CLI）的配置和兼容性问题，反映出部分基础设施和周边生态的不成熟。
*   **满意点**: 用户对新提出的桌面应用功能增强（如菜单栏聊天、系统交互）表现出浓厚兴趣，认为这将极大提升产品的可用性和吸引力。

#### **8. 待处理积压**

*   **PR #4944 (refactor(tools): bundle wrapper migration)**: 这是一个大型重构 PR，旨在简化工具包装逻辑，但目前仍处于 Open 状态，需要作者继续推进。
*   **PR #5779 (feat(security): add gated_commands TOTP gate for shell tool)**: 一个重要的安全特性，用于在特定命令上启用 TOTP 验证，但目前也处于 Open 状态。
*   **Issue #6246 (WhatsApp Web channel bug)**: 这是一个长期未解决的问题，自4月30日报告以来，尽管问题严重，但尚无明确的解决方案或修复计划公布。维护者需优先处理此问题。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*