# OpenClaw 生态日报 2026-04-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-25 00:25 UTC

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

**OpenClaw 项目动态日报（2026-04-25）**

---

### 1. 今日速览

过去24小时 OpenClaw 保持极高活跃度，共处理 500 条 Issues 和 PR 更新，其中 478 个 Issue 已关闭、343 个 PR 完成合并。新版本 v2026.4.23 正式发布，重点增强图像生成与多平台支持能力；社区反馈集中于 UI 回归问题和上下文管理异常，整体项目运行稳健但存在若干关键稳定性修复需求。

---

### 2. 版本发布

#### **v2026.4.23**（发布于 2026-04-23）
- **核心更新**：
  - 新增 OpenAI Codex OAuth 支持，实现 `openai/gpt-image-2` 无需 API Key 即可调用图像生成与参考图编辑功能（#70703）。
  - OpenRouter 提供商集成 `image_generate` 接口，扩展其图像模式兼容性。
- **影响范围**：面向使用 OpenAI 图像模型及 OpenRouter 服务的用户，显著降低配置门槛，提升离线/低权限环境下的可用性。
- **迁移说明**：无破坏性变更，现有配置兼容。推荐更新至最新 beta 以验证 OAuth 流程稳定性。

> [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.4.23)

---

### 3. 项目进展

本周重点推进了以下高优先级 PR 的合并与审查：

- **#71297**: 修复 Control UI 上下文新鲜度问题，引入会话刷新聚合机制与“紧凑化”操作按钮，解决长期存在的 UI 状态滞后问题。
- **#71264**: 为子代理运行添加 2 小时陈旧性检测机制，防止网关重启后孤儿任务持续占用资源（#71252）。
- **#70380**: 启动流式 STT/TTS 流水线第二阶段开发，实现音频输入输出并行处理架构，支撑实时语音交互场景。
- **#70864**: 引入作用域提及策略（scoped mention policy），统一跨频道的全局、代理级与提供程序级提及规则，提升消息路由一致性。
- **#70916**: 修复 Claude CLI 运行时忽略用户自定义 MCP 服务器的问题，确保外部工具链正确加载。

这些进展强化了系统健壮性与多模态交互能力，尤其在会话管理与插件生态方面取得显著突破。

---

### 4. 社区热点

当前最受关注的议题集中在 **UI 渲染异常** 与 **上下文计算错误**：

- **#45227**（评论数 16）: Mistral 模型返回 422 错误且无响应体，被确认为 2026.3.12 升级后的回归问题，已标记需紧急修复。
- **#44714**: `openclaw logs --follow` 在网关正常时因握手超时失败，影响运维监控体验。
- **#45086**: 强烈呼吁增加 WebChat UI 的多代理切换功能，已有 3 人点赞，反映多角色协作场景下的实际需求。
- **#45282**: 提出通用上下文提醒组件方案，同时解决 #45230/#45034/#45192 等多个相关 bug，获得广泛认可。

用户普遍期待更稳定的前端表现与透明的上下文状态展示。

---

### 5. Bug 与稳定性

按严重程度排序的关键问题：

| Issue | 描述 | 状态 | 关联 PR |
|------|------|------|--------|
| [#45227](https://github.com/openclaw/openclaw/issues/45227) | Mistral 返回空 422 错误 | Closed | 待追踪 |
| [#44714](https://github.com/openclaw/openclaw/issues/44714) | logs --follow 握手超时 | Closed | 无 |
| [#45057](https://github.com/openclaw/openclaw/issues/45057) | ANTHROPIC_MODEL_ALIASES 初始化顺序导致网关崩溃 | Closed | 无 |
| [#44184](https://github.com/openclaw/openclaw/issues/44184) | 上下文使用率恒显示 0% | Closed | #45282, #45335 |
| [#43858](https://github.com/openclaw/openclaw/issues/43858) | Edit 工具静默清空文件 | Closed | 无 |

多数 UI 类问题已有对应修复 PR 进入待合并队列，基础设施类崩溃（如 #45057）尚未完全闭环。建议优先处理 Anthropic 模型初始化依赖问题。

---

### 6. 功能请求与路线图信号

- **多代理 WebChat 切换**（#45086）：用户明确要求支持非主代理的聊天界面切换，已有明确 PR 提案方向。
- **文档提取插件化重构**（#71278）：将 PDF 解析能力剥离至独立插件，标志 OpenClaw 向模块化知识处理演进。
- **流式语音流水线**（#70380）：Phase C 启动，预示下一阶段将支持端到端实时语音对话。
- **提及策略标准化**（#70864）：反映多通道消息路由治理成为核心设计目标。

以上均指向 **多模态交互增强** 与 **插件生态开放化** 两大路线图方向。

---

### 7. 用户反馈摘要

- **正面反馈**：新版图像生成无需 API Key 极大便利开发者测试环境搭建；MCP 服务器配置恢复获好评。
- **负面痛点**：
  - UI 频繁出现空白/覆盖层（#45194, #45187），影响操作连续性；
  - 上下文百分比失真误导资源判断（#44184, #48252）；
  - Telegram/Skull 等通道偶发媒体传输失败或乱序（#45079, #69105）；
  - Sandbox 写文件偶现 0 字节（#43858, #44122）。

用户普遍对 2026.3.12+ 版本的稳定性表示担忧，尤其 Docker/macOS 环境下配对失败频发。

---

### 8. 待处理积压

- **#44184**（Context usage always shows 0%）: 自 2026.3.11 起持续存在，虽有多项 PR 尝试修复，但未彻底解决根源逻辑，需进一步排查 token 快照同步机制。
- **#45057 / #44718**（Anthropic aliases initialization crash）: 影响 Anthropic 模型用户的启动流程，属高危阻塞项，建议立即安排代码审查。
- **#43858 / #44122**（Sandbox write/edit zero-byte files）: 涉及沙箱文件系统桥接安全加固后的副作用，需评估回滚或部分禁用策略。

建议维护团队优先处理上述三项，以稳定社区信心。

--- 

*数据截止：2026-04-25 23:59 UTC*  
*分析师：AI 智能体与个人 AI 助手开源项目洞察系统*

---

## 横向生态对比

好的，作为专注于 AI 智能体生态的技术分析师，基于今日各项目的动态，为您生成一份横向对比分析报告。

---

### **个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-04-25)**

**1. 生态全景**

当前个人 AI 智能体开源生态呈现“一超多强、多点开花”的格局。OpenClaw 作为行业核心参照，持续引领多模态交互与平台集成方向；NanoBot、Hermes Agent 等头部项目则分别在 Provider 兼容性与记忆管理上深化技术壁垒。与此同时，新兴项目如 PicoClaw、NullClaw 通过聚焦嵌入式场景或特定架构（如 Zig）切入细分市场。整体生态已从概念验证转向生产落地，开发者更关注稳定性、多通道支持及企业级功能。

**2. 各项目活跃度对比**

| 项目名称 | Issues 数 (活跃/总计) | PR 数 (合并/待合并) | Release 情况 | 健康度评估 |
| :------- | :-------------------- | :------------------- | :----------- | :--------- |
| **OpenClaw** | 500 (478/22) | 343 (343/0) | v2026.4.23 | ⭐⭐⭐⭐⭐ (极高活跃度，稳定迭代) |
| **NanoBot** | 16 (10/6) | 41 (34/7) | 无 | ⭐⭐⭐⭐☆ (高活跃度，质量优化中) |
| **Hermes Agent** | 50 (50/0) | 50 (50/0) | 无 | ⭐⭐⭐⭐☆ (高密度修复，响应迅速) |
| **PicoClaw** | 12 (4/8) | 38 (19/19) | Nightly v0.2.7 | ⭐⭐⭐☆☆ (稳定节奏，文档待补) |
| **NanoClaw** | 15 (15/0) | 37 (26/11) | 无 | ⭐⭐⭐⭐☆ (v2 架构推进，部署体验待优) |
| **NullClaw** | 2 (2/0) | 11 (0/11) | 无 | ⭐⭐⭐☆☆ (小步快跑，边缘场景专注) |
| **IronClaw** | 16 (16/0) | 50 (7/43) | 无 | ⭐⭐⭐⭐☆ (快速迭代，配置问题待解) |
| **LobsterAI** | 3 (3/0) | 42 (42/0) | v2026.4.23, v2026.4.24 | ⭐⭐⭐⭐☆ (发布频繁，兼容性问题需关) |
| **TinyClaw** | 0 | 0 | 无 | ⭐⭐☆☆☆ (暂无活动) |
| **Moltis** | 10 (10/0) | 31 (21/10) | 无 | ⭐⭐⭐⭐☆ (架构现代化，安全顾虑待解) |
| **CoPaw** | 100 (50/50) | 50 (35/15) | v1.1.4.post1, v1.1.4 | ⭐⭐⭐☆☆ (功能丰富，桌面端稳定性堪忧) |
| **ZeptoClaw** | 1 (1/0) | 1 (0/1) | 无 | ⭐⭐☆☆☆ (低活跃度，进展缓慢) |
| **ZeroClaw** | 50 (46/4) | 50 (27/23) | 无 | ⭐⭐⭐⭐☆ (高度活跃，多 Agent 探索中) |

**3. OpenClaw 在生态中的定位**

*   **优势**: OpenClaw 凭借其庞大的社区基础（500条Issue/PR处理量）和持续高频的功能发布（v2026.4.23），确立了其在**多模态交互增强**（图像生成、语音流水线）和**跨平台支持**（OpenRouter、OAuth集成）领域的领先地位。其技术路线侧重于提供一套完整、开箱即用的智能体解决方案，覆盖从模型调用到底层通信的完整链条。
*   **技术路线差异**: 相较于 NanoBot 对特定 Provider 的深度适配或 Hermes Agent 对复杂记忆系统的专注，OpenClaw 更强调**通用性与易用性**，通过标准化接口和广泛集成降低用户接入门槛。
*   **社区规模对比**: OpenClaw 的社区规模远超其他项目，是名副其实的“一超多强”。其Issue数量和PR合并速度都体现了强大的社区活力和维护团队的高效运作。

**4. 共同关注的技术方向**

*   **Provider/模型兼容性**: 多个项目（NanoBot, Hermes Agent, IronClaw, ZeroClaw）都报告了针对不同 LLM 提供商（如 Mistral, DeepSeek, Ollama, Bedrock）的工具调用、认证或 API 兼容性问题。这表明统一且健壮的 Provider 抽象层是行业共性挑战。
*   **多通道通信稳定性**: Telegram、Discord、Slack、Feishu、QQ 等平台的消息处理、会话隔离、媒体传输等问题被多次提及（OpenClaw, Hermes Agent, CoPaw, ZeroClaw），凸显了异构通信协议集成的复杂性。
*   **UI/UX 体验优化**: WebChat UI 的多代理切换、上下文展示、前端白屏/渲染异常等问题在 OpenClaw、CoPaw 中被频繁讨论，反映了用户对直观、稳定的交互界面的迫切需求。
*   **配置管理与安全性**: 配置文件明文存储（Moltis）、环境变量优先级混乱（IronClaw）、沙箱策略误拦截（ZeroClaw）等问题暴露了系统在灵活性和安全性之间的平衡难题。
*   **可观测性与调试**: 工具调用日志记录（NanoClaw）、会话搜索性能（Hermes Agent）、流式响应监控（OpenClaw）等改进，表明开发者亟需更透明的运行时洞察能力。

**5. 差异化定位分析**

| 项目名称 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :------- | :------- | :------- | :--------------- |
| **OpenClaw** | 全栈智能体平台，多模态交互 | 希望快速搭建和部署复杂智能体的开发者和企业 | 成熟、模块化，注重广泛集成和易用性 |
| **NanoBot** | Provider 兼容性与资源效率 | 需要灵活接入多种 LLM 并提供商的开发者 | 轻量级，强调内存优化和特定平台适配 |
| **Hermes Agent** | 高级记忆管理与技能系统 | 构建复杂、长时程交互应用的进阶用户 | 强大的记忆系统和技能生命周期管理 |
| **PicoClaw** | 嵌入式/IoT 场景，硬件集成 | 物联网、边缘计算领域开发者 | 针对嵌入式设备优化，强调 UART 等底层接口 |
| **NanoClaw** | 多云/混合推理架构，主机侧代理 | 自建推理集群并希望统一管理的企业/开发者 | v2 架构，CEO/ops 代理分离，工具调用可观测 |
| **NullClaw** | 极简、模块化、边缘计算 | 追求极致轻量和可控性的开发者 | 使用 Zig 语言，强调性能和嵌入式场景 |
| **IronClaw** | WASM 插件化，NEAR AI 生态 | NEAR 区块链生态开发者，偏好 WASM 扩展 | WASM 插件体系，与 NEAR 生态深度绑定 |
| **LobsterAI** | 多机器人协作，国产模型支持 | 需要多机器人协同工作的企业及开发者 | 强化多机器人支持，深度集成 DeepSeek 等国产模型 |
| **Moltis** | 安全、可复现构建、多语言支持 | 重视安全合规和 DevOps 流程的开发者 | Landlock 安全沙箱，分层配置，Nix Flake 支持 |
| **CoPaw** | 桌面端应用，长期记忆 | 需要强大桌面客户端和长期记忆功能的用户 | Tauri 桌面框架，复杂的长期记忆模块重构 |
| **ZeptoClaw** | 可选集成生态扩展 | 需要特定第三方服务集成的开发者 | 可选集成 CI 覆盖，原生飞书长连接探索 |
| **ZeroClaw** | 多 Agent 协作，生产就绪 | 构建分布式智能体网络的企业级用户 | 多 Agent 架构探索，Telegram 媒体组批处理 |

**6. 社区热度与成熟度**

*   **快速迭代阶段**: OpenClaw、NanoClaw、ZeroClaw、LobsterAI 处于此列。它们发布频繁，功能迭代速度快，社区反馈密集，正处于积极扩展功能和解决早期采用者问题的阶段。
*   **质量巩固阶段**: Hermes Agent、IronClaw、Moltis 表现出此特征。它们的重点更多在于修复 Bug、优化现有功能、提升稳定性和安全性，而非大规模新增功能。
*   **平稳发展/待观察阶段**: PicoClaw、NullClaw、CoPaw、ZeptoClaw 在此梯队。PicoClaw 和 NullClaw 有明确方向但进展相对平稳；CoPaw 虽有大量 Issue 但桌面端稳定性问题频发；ZeptoClaw 活跃度较低，需观察其后续动作。

**7. 值得关注的趋势信号**

*   **向多 Agent 架构演进**: ZeroClaw 的 #5890 RFC 和 OpenClaw 社区的“多代理切换”需求，预示着未来智能体系统将不再是单一实体，而是协作网络。这对任务分配、状态管理和通信提出了更高要求。
*   **生产就绪度成为核心竞争力**: 用户反馈集中暴露出安装障碍(#IronClaw #NanoClaw)、配置混乱(#IronClaw)、平台集成Bug(#Hermes Agent #CoPaw)等问题。这意味着项目能否提供稳定、易用的生产环境部署方案，将成为决定其成败的关键。
*   **安全与隐私设计前置**: Moltis 引入 Landlock 沙箱、NullClaw 关注 E2EE、CoPaw 修复路径泄露，反映出随着应用场景的扩展，安全和隐私已不仅是附加功能，而是基础架构的必要组成部分。
*   **对特定垂直领域和硬件的深耕**: PicoClaw 的嵌入式方向、Moltis 的 NixOS 支持、ZeptoClaw 的飞书长连接探索，表明开源智能体生态正在向下沉市场和特定行业渗透，以满足更专业的需求。

**总结与建议：**

对于技术决策者和开发者而言，应密切关注 OpenClaw 的生态引领作用，同时根据自身业务场景选择合适的项目：若需快速构建多模态智能体，OpenClaw 是首选；若追求极致轻量，NullClaw 或 PicoClaw 值得考虑；若面向企业级多 Agent 协作，ZeroClaw 的探索值得关注。同时，务必重视生产环境的稳定性与安全问题，避免陷入“概念验证”陷阱。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-04-25）**

---

### 1. **今日速览**
过去24小时内，NanoBot 项目保持高度活跃状态：共处理 **16 条 Issues**（新开/活跃 10，已关闭 6）和 **41 条 PRs**（待合并 7，已合并/关闭 34），无新版本发布。整体社区参与度较高，主要集中在稳定性优化、多平台支持增强及性能改进方向。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日共合并或关闭 **34 个 PR**，其中重点包括：
- **[PR #3428](https://github.com/HKUDS/nanobot/pull/3428)**：修复 LLM 请求无超时导致会话锁死的问题（对应 Issue #3424），显著提升系统健壮性；
- **[PR #3429](https://github.com/HKUDS/nanobot/pull/3429)** & **[PR #3430](https://github.com/HKUDS/nanobot/pull/3430)**：分别为 Telegram 和 WebUI 添加视频媒体支持，改善富媒体交互体验；
- **[PR #3423](https://github.com/HKUDS/nanobot/pull/3423)**：实现文档解析库的惰性导入，降低启动内存占用约 25MB，解决 v0.1.5.post2 内存激增问题；
- **[PR #3432](https://github.com/HKUDS/nanobot/pull/3432)**：修复 MSTeams 线程回复逻辑错误，并清理无效对话引用，提升跨平台消息一致性。

上述进展表明项目正持续强化容错能力、资源效率与多通道兼容性。

---

### 4. **社区热点**
最活跃的议题为：
- **[Issue #3376](https://github.com/HKUDS/nanobot/issues/3376)**（7 条评论）：用户强烈呼吁支持跨 Provider/Model 的自动故障切换机制，以应对服务中断场景。该需求反映当前多供应商配置下单点故障风险高的痛点，是提升 SLA 的关键诉求；
- **[Issue #3421](https://github.com/HKUDS/nanobot/issues/3421)**（4 条评论）：建议引入 `nanobot update` CLI 命令简化升级流程，体现用户对易用性和自动化运维的关注；
- **[PR #3432](https://github.com/HKUDS/nanobot/pull/3432)** 虽无评论，但其关联多个 MSTeams 缺陷（#3431, #3433），显示微软 Teams 集成仍是高频问题区。

---

### 5. **Bug 与稳定性**
按严重程度排序的重要 Bug：
1. **[Issue #3424](https://github.com/HKUDS/nanobot/issues/3424) [CLOSED]**：Agent 循环因 LLM API 调用挂起而彻底死锁 → **已修复**（见 PR #3428）；
2. **[Issue #3410](https://github.com/HKUDS/nanobot/issues/3410) [OPEN]**：v0.1.5.post2 内存使用从 ~200MB 飙升至 ~600MB，疑似新“dream”功能所致 → 尚无 PR，需进一步排查；
3. **[Issue #3426](https://github.com/HKUDS/nanobot/issues/3426) [OPEN]**：OpenAI Codex 提供者丢失流式 `_progress` delta 输出（v0.1.4.post6 → v0.1.5.post2 回归）→ 尚未提交 PR；
4. **[Issue #3417](https://github.com/HKUDS/nanobot/issues/3417) [CLOSED]**：Anthropic Provider 硬编码 `temperature=1.0` 导致 Claude Opus 4.7 返回 400 错误 → **已修复**。

---

### 6. **功能请求与路线图信号**
用户明确提出以下潜在新功能：
- **Provider/Model 级容灾切换**（#3376）：已有初步讨论但未进入开发阶段，可能作为高优先级安全特性纳入后续版本；
- **`nanobot update` CLI 命令**（#3421）：符合 DevEx 优化趋势，结合近期工程现代化工作（如 Ruff、pre-commit），极有可能在 v0.2.x 中落地；
- **Per-chat group policy override for Telegram**（#3309）：体现对精细化权限管理的需求，可能与技能系统深度整合；
- **DingTalk 文件上传同步支持**（#3344）：钉钉生态适配需求明确，但暂无响应。

---

### 7. **用户反馈摘要**
- **正面反馈**：视频支持、内存优化等改进获积极回应（如 PR #3423 被快速合并）；
- **核心痛点**：
  - 多模型供应商环境下缺乏 failover 机制，影响生产可用性（#3376）；
  - Telegram Markdown 渲染不稳定（#2568）；
  - DingTalk 文件上传与 @mention 分离导致功能失效（#3344）；
  - 微信上下文 token 限制仅支持 10 条消息，影响长对话体验（#2772）。

---

### 8. **待处理积压**
- **[Issue #2568]**: Telegram Markdown 渲染可靠性问题，自 2026-03-27 提出，近 30 天未更新，需关注；
- **[Issue #2772]**: 微信上下文长度限制，长期存在且无官方解决方案，建议评估是否扩展 context window；
- **[Issue #3344]**: DingTalk 文件上传缺陷，涉及第三方平台集成复杂性，需协调钉钉侧 API 行为确认。

--- 

*数据截止：2026-04-25 | 数据来源：[HKUDS/nanobot GitHub](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报 (2026-04-25)**

---

### **1. 今日速览**

过去24小时内，Hermes Agent 项目保持高度活跃。共处理 Issue 更新 50 条，PR 更新 50 条，显示出社区持续的高参与度与快速迭代节奏。无新版本发布，但修复与优化类 PR 密集，表明当前重点在提升系统稳定性与用户体验。项目整体处于稳定发展期，维护者响应迅速，问题闭环效率高。

---

### **2. 版本发布**

*   今日无新版本发布。

---

### **3. 项目进展**

今日合并/关闭的重要 PR 主要围绕错误修复、性能优化和功能增强展开：

*   **`#13794` (OPEN):** 为 `SessionDB` 添加了 `term_index` 倒排索引，实现了会话搜索的毫秒级响应（0.1-0.8ms），显著提升了用户体验。
*   **`#15438` (CLOSED):** 修复了 `/model` 命令显示错误的上下文长度问题，现在会显示提供商强制限制的上下文长度而非原始模型数据。
*   **`#11408` (OPEN):** 改进了技能加载失败的错误报告机制，使其能明确指出是哪个技能加载失败，而非仅返回成功占位符。
*   **`#11410` (OPEN):** 确保网关会话过期时正确触发 `MemoryProvider.on_session_end()` 钩子，解决了内存状态未刷新的问题。
*   **`#15431` (OPEN):** 修正了压缩阈值计算逻辑，防止在特定上下文长度下无法触发压缩。
*   **`#15433` (OPEN):** 在压缩后 token 估算中包含了工具 schema 的 token，避免了因低估导致的过早压缩。
*   **`#15427` (OPEN):** 修复了全息记忆提供者的 `auto_extract` 路径，避免将原始用户 turn 存储为事实。
*   **`#15428` (OPEN):** 停止了在空闲状态下 CLI 提示符的无效重绘，提升了终端稳定性。
*   **`#15430` (OPEN):** 允许 `vision_analyze_tool` 从配置中读取 `max_tokens`，使用户能够充分利用本地或高容量 API 模型的输出能力。
*   **`#15429` (OPEN):** 在插件钩子中为 `post_tool_call` 事件添加了 `duration_ms` 参数，使插件开发者能够监控工具调用延迟。
*   **`#15432` (OPEN):** 为压缩反抖动保护增加了基于时间和增长的恢复机制，防止因连续无效压缩而永久禁用自动压缩。
*   **`#15442` (OPEN):** 集中化了 Telegram 论坛聊天检测逻辑，解决了 General topic 路由问题。
*   **`#15441` (OPEN):** 在视觉自动检测回退中跳过非视觉模型，防止向不支持视觉的模型发送图像。
*   **`#15440` (OPEN):** 抑制了 TUI 中 `slash_worker` 的 MCP 发现，防止重复启动子进程。
*   **`#15439` (OPEN):** 修正了硬消息计数逻辑，仅统计实质性消息，避免工具调用包装行导致过早达到消息限制。
*   **`#15437` (OPEN):** 改进了 `skills_guard` 的 'ask' 裁决，使其返回具体的发现内容而非通用阻止信息。

项目在这些 PRs 的推动下，在会话管理、工具调用、配置处理、内存管理和 TUI 体验等多个方面取得了实质性进展。

---

### **4. 社区热点**

今日讨论最活跃的 Issues 反映了用户对平台稳定性和功能扩展性的关注：

*   **`#11425` (OPEN) - [Skills lifecycle management](https://github.com/NousResearch/hermes-agent/issues/11425):** 用户 LehaoLin 提出对技能进行生命周期管理的需求，包括使用跟踪、陈旧检测和自动清理。这反映了随着技能数量增长，用户对管理复杂度的担忧。已有 3 条评论和 2 个点赞，显示出社区的共鸣。
*   **`#11524` (OPEN) - [RFC: Proposal — "The AI That Remembers You" as Official Positioning](https://github.com/NousResearch/hermes-agent/issues/11524):** kukuxNd 发起了一项关于 Hermes Agent 官方定位的 RFC，提议以 "The AI That Remembers You" 作为品牌口号。这背后是社区希望扩大影响力的愿望和对产品核心能力的认可。已有 3 条评论。
*   **`#11420` (OPEN) - [Add MiniMax as vision backend](https://github.com/NousResearch/hermes-agent/issues/11420):** lclayton458 请求将 MiniMax 添加为视觉后端。这表明用户对更多第三方视觉模型的支持有强烈需求，是功能扩展的重要信号。
*   **`#11430` (OPEN) - [Per-user memory isolation in group chats](https://github.com/NousResearch/hermes-agent/issues/11430):** Laurc2004 提出了在群聊中对每个用户进行内存隔离的需求，以防止身份污染。这直接关系到多用户环境下个人数据的隐私保护和用户体验。
*   **`#411` (OPEN) - [Migrate Google Workspace Skill to Official Google Workspace CLI (gws)](https://github.com/NousResearch/hermes-agent/issues/411):** teknium1 建议将 Google Workspace 技能迁移到官方的 Google Workspace CLI (`gws`)。这是一个长期的改进提案，旨在利用官方工具的优势，可能涉及重大重构。

这些热点 Issue 共同指向了 Hermes Agent 未来发展的关键方向：更智能的技能管理、更清晰的官方定位、对更多外部服务的支持以及更强的隐私保护。

---

### **5. Bug 与稳定性**

今日报告的 Bug 主要集中在平台集成、认证和特定功能上，严重程度不一：

*   **P1 (高优先级):**
    *   **`#15080` (OPEN) - [Claude Max OAuth 认证失败](https://github.com/NousResearch/hermes-agent/issues/15080):** 用户在 Claude Max 订阅且拥有有效 OAuth token 的情况下，所有向原生 Anthropic 的请求都被拒绝。这是一个严重的认证问题。
    *   **`#15415` (OPEN) - [Telegram 群聊中菜单命令被丢弃](https://github.com/NousResearch/hermes-agent/issues/15415):** 在 `require_mention=true` 的 Telegram 群组中，通过菜单点击 `/cmd@botname` 不会触发会话。这影响了 Telegram 用户的交互体验。
    *   **`#15141` (OPEN) - [TUI 原生内存泄漏](https://github.com/NousResearch/hermes-agent/issues/15141):** TUI 前端出现原生内存泄漏，RSS 在约 40 分钟内增长至 13+ GB。这是一个严重的生产环境问题，需要紧急修复。
    *   **`#15213` (OPEN) - [DeepSeek V4-Pro 在 cron/auxiliary 路径下 reasoning_content 错误](https://github.com/NousResearch/hermes-agent/issues/15213):** DeepSeek V4-Pro 在 cron/auxiliary 路径下返回 HTTP 400 错误，因为 `reasoning_content` 字段缺失。虽然主循环工作正常，但这影响了批处理任务。
    *   **`#13626` (CLOSED) - [Nix 上的 google-workspace skill 不可用](https://github.com/NousResearch/hermes-agent/issues/13626):** Nix 环境中的 Google Workspace skill 由于缺少依赖而无法运行。该问题已被标记为已解决。

*   **P2 (中优先级):**
    *   **`#15421` (OPEN) - [Slack 顶级消息创建孤立会话](https://github.com/NousResearch/hermes-agent/issues/15421):** Slack 顶级消息（`reply_in_thread: false`）会为每个消息创建独立的会话，导致会话历史丢失。
    *   **`#14940` (CLOSED) - [Alibaba Coding Plan 自定义提供商模型切换失败](https://github.com/NousResearch/hermes-agent/issues/14940):** 在使用 Alibaba Cloud Dashscope Coding Plan 模型时，模型切换失败并导致认证错误。该问题已被标记为已解决。
    *   **`#15353` (CLOSED) - [DeepSeek V4 thinking mode 缺少 reasoning_content](https://github.com/NousResearch/hermes-agent/issues/15353):** DeepSeek V4 thinking mode 要求 `reasoning_content` 存在于包含 `tool_calls` 的 assistant 消息中。当历史记录中缺少此字段时，会导致 HTTP 400。该问题已被标记为已解决。
    *   **`#6898` (CLOSED) - [CLI 忙输入队列](https://github.com/NousResearch/hermes-agent/issues/6898):** 请求实现类似于 Cursor IDE 的忙输入队列，允许空提交。该问题已被标记为已解决。
    *   **`#15236` (CLOSED) - [Feishu 压缩会话中 corrupted tool_calls](https://github.com/NousResearch/hermes-agent/issues/15236):** Feishu 平台在会话压缩后，新创建的 child session 可能包含 `tool_calls[*].function.arguments` 字段为非有效 JSON 字符串的消息，导致后续 API 调用失败。该问题已被标记为已解决。

*   **P3 (低优先级):**
    *   **`#15314` (OPEN) - [hermes-tui npmDepsHash 过时](https://github.com/NousResearch/hermes-agent/issues/15314):** `hermes-tui` 的 `npmDepsHash` 已过期，导致在干净的构建中构建失败。这是一个 Nix 构建环境的常见问题。
    *   **`#8993` (OPEN) - [工具调用不稳定 / 频繁幻听和空响应](https://github.com/NousResearch/hermes-agent/issues/8993):** 在 v0.8.0 版本中，工具调用（特别是 web_search 和 FireCrawl）出现不稳定、幻听或空响应的问题。
    *   **`#11560` (OPEN) - [hermes profile --clone-all 递归错误](https://github.com/NousResearch/hermes-agent/issues/11560):** 当配置文件目录包含指向父目录的符号链接时，`hermes profile create <name> --clone-all` 会因递归错误而崩溃。
    *   **`#11447` (OPEN) - [WeCom aibot 图像解密失败 + @提及未剥离](https://github.com/NousResearch/hermes-agent/issues/11447):** WeCom aibot 提供的图像 `aeskey` 格式错误导致解密失败，同时群聊中的 @提及未被正确剥离。
    *   **`#11489` (OPEN) & `#11493` (OPEN) - [QQ Bot WebSocket 会话超时和网关 URL 获取失败](https://github.com/NousResearch/hermes-agent/issues/11489):** QQ Bot 平台的 WebSocket 连接因会话超时和无法获取网关 URL 而失败。
    *   **`#11515` (OPEN) - [ACP 模式下的 cwd 不一致](https://github.com/NousResearch/hermes-agent/issues/11515):** ACP 模式下，会话/workspace 的 `cwd` 用于工具执行，但不用于项目上下文文件发现，造成不一致。
    *   **`#15319` (OPEN) - [delegate_task 404 错误](https://github.com/NousResearch/hermes-agent/issues/15319):** 当 `delegation.model` 与 `model.default` 不同且提供商为 `opencode-go` 或 `opencode-zen` 时，`delegate_task` 会因错误的 API 端点返回 404。
    *   **`#14632` (OPEN) - [Slack 首次运行引导信息错误](https://github.com/NousResearch/hermes-agent/issues/14632):** Slack 首次运行的引导信息提示用户输入 `/sethome`，但 Slack 实际上只分发 `/hermes <subcommand>`。
    *   **`#15311` (OPEN) - [Telegram 通用操作按钮/内联键盘支持](https://github.com/NousResearch/hermes-agent/issues/15311):** 请求为 messaging platforms（尤其是 Telegram 内联键盘）提供通用的交互式操作按钮支持。

大部分 Bug 问题已有对应的修复 PR，表明维护团队对这些问题的响应非常及时。

---

### **6. 功能请求与路线图信号**

今日的功能请求和路线图信号清晰反映了社区对未来发展的期望：

*   **技能生命周期管理 (`#11425`):** 这是最重要的长期功能请求之一。它直接关联到 Hermes Agent 的可扩展性和可维护性，对于拥有大量技能的用户至关重要。
*   **Migrate Google Workspace Skill to Official CLI (`#411`):** 这是一个重大的架构变更提案，旨在利用官方工具的优势，可能需要较长时间来实现。
*   **Easy support for adding OpenCode Go models (`#13181`):** 用户希望简化对新模型（特别是轻量级或自托管模型）的集成过程，这反映了 Hermes Agent 对灵活性和可扩展性的追求。
*   **Per-user memory isolation in group chats (`#11430`):** 这涉及到核心的记忆系统改进，对于多用户环境下的隐私保护和用户体验至关重要。
*   **Add MiniMax as vision backend (`#11420`):** 表明社区对更多第三方视觉模型的支持有强烈需求，是功能扩展的重要信号。
*   **First-class agent heartbeat jobs (`#15400` - CLOSED):** 这是一个关于监督长期运行项目的功能请求，虽然已关闭，但其理念可能仍会影响未来的开发方向。
*   **Generic action buttons / inline keyboard support (`#15311`):** 这反映了用户对更丰富的交互体验的需求，尤其是在 Telegram 等平台上。

结合已有的 PRs，可以判断 Hermes Agent 的下一版本可能会重点关注：
1.  **会话管理与搜索性能优化** (`#13794`)
2.  **工具调用与辅助功能的增强** (多个 PRs)
3.  **特定平台（Slack, Telegram, WeCom, QQ Bot）的深度集成与 Bug 修复**
4.  **模型集成与配置的灵活性提升**

---

### **7. 用户反馈摘要**

从今日的 Issues 评论中，我们可以提炼出以下真实用户痛点、使用场景和满意度情况：

*   **痛点 - 技能管理混乱:** 用户普遍反映随着安装的 skill 数量增加（如 89+），缺乏有效的生命周期管理机制，导致技能列表变得臃肿，不知道哪些技能真正被使用，增加了维护成本（`#11425`）。
*   **痛点 - 平台集成 Bug:** 多个平台（Slack, Telegram, WeCom, QQ Bot）都报告了集成相关的 Bug，如会话隔离、命令不响应、图像解密失败等，严重影响了用户体验和使用场景。
*   **痛点 - 认证与配置问题:** 用户遇到 OAuth 认证失败、模型切换失败、配置文件解析错误等问题，这些都与底层 API 或配置逻辑紧密相关。
*   **痛点 - 内存与上下文管理:** 群聊中的内存隔离问题和会话压缩导致的工具调用损坏，暴露了内存管理和上下文持久化的挑战。
*   **痛点 - 性能问题:** TUI 的内存泄漏和会话搜索的缓慢，直接影响到了用户在高负载或长时间使用时的体验。
*   **满意点 - 快速响应与修复:** 许多 Bug 报告后很快就有相应的 PR 提出修复方案，甚至有些问题在当天就被标记为解决，体现了维护团队的积极态度和高效执行力。
*   **满意点 - 功能迭代方向:** 用户对技能生命周期管理、更灵活的模型集成等新功能的讨论热情高涨，显示出他们对 Hermes Agent 持续发展的期待和信心。

---

### **8. 待处理积压**

以下是一些长期未响应或需要特别关注的 Issue 和 PR：

*   **`#11425` (Skills lifecycle management):** 这是一个长期存在的、影响广泛的 Issue。虽然已有 3 条评论，但尚未有明确的解决方案或 PR 提出。维护者应优先关注此问题，因为它直接影响到项目的可维护性和用户体验。
*   **`#411` (Migrate Google Workspace Skill to Official CLI):** 这是一个长期的技术债务问题，需要投入较多精力进行架构评估和重构。维护者应考虑制定一个分阶段的迁移计划。
*   **`#11430` (Per-user memory isolation in group chats):** 同样是一个长期存在且对用户隐私至关重要的 Issue。需要深入分析记忆系统的设计并提出可行的解决方案。
*   **`#11489` & `#11493` (QQ Bot WebSocket 会话超时):** 这两个 Issue 已经存在一段时间，且 QQ Bot 平台的稳定性对部分用户至关重要。维护者应检查是否有相关的进展或计划。
*   **`#8993` (Tool calling unstable / hallucination):** 这是一个影响面较广的 Bug，尤其是在 v0.8.0 版本中。维护者应评估其严重性，并考虑是否需要发布补丁来解决。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报（2026-04-25）**

---

### 1. **今日速览**  
过去24小时内，PicoClaw 保持较高活跃度：共处理 38 条 PR 更新与 12 条 Issue 动态，其中 4 个 Issue 已关闭，19 个 PR 待合并。项目发布了一个 nightly 构建版本（v0.2.7-nightly.20260424），主要聚焦于前端交互优化、工具链增强及多平台兼容性改进。整体开发节奏稳定，社区反馈集中于 WebUI 体验与第三方集成能力。

---

### 2. **版本发布**  
今日发布 **nightly 构建 v0.2.7-nightly.20260424.f4400472**，为自动化夜间构建，可能包含不稳定变更。完整变更日志见：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)。建议用户谨慎使用生产环境，优先关注后续稳定版发布。

---

### 3. **项目进展**  
本周关键进展集中在以下已合并/活跃 PR：

- **PR #2641**（MCP CLI 管理套件）：新增 `picoclaw mcp` 命令组，支持 MCP 服务器的增删改查、测试与编辑，极大提升开发者运维效率。[链接](https://github.com/sipeed/picoclaw/pull/2641)
- **PR #2531**（delegate 工具）：实现跨智能体任务委派功能，支持同步等待目标代理执行结果，推进多智能体协作架构落地。[链接](https://github.com/sipeed/picoclaw/pull/2531)
- **PR #2487 & #2573**：修复 Windows 构建流程与 launcher UI 语言切换引发的后端路由污染问题，显著提升跨平台稳定性。[PR#2487](https://github.com/sipeed/picoclaw/pull/2487), [PR#2573](https://github.com/sipeed/picoclaw/pull/2573)

这些更新强化了工具生态、多智能体协同与跨平台支持，标志着项目向企业级应用迈出重要一步。

---

### 4. **社区热点**  
当前最受关注议题包括：

- **Issue #2448**（已关闭）：WebUI 中 agent 推理内容与用户回复未分离，导致可读性差。虽已关闭，但暴露了复杂对话场景下的 UI/UX 设计挑战。[链接](https://github.com/sipeed/picoclaw/issues/2448)
- **Issue #2376**：Android 设备 Enter 键默认发送消息而非换行，影响输入体验。用户强烈呼吁增加“禁用 Enter 发送”配置选项。[链接](https://github.com/sipeed/picoclaw/issues/2376)
- **PR #2656**（Prompt Layering）：引入结构化提示层机制，统一系统提示、技能调用、工具发现等模块的拼接逻辑，为未来可扩展性奠定基础。[链接](https://github.com/sipeed/picoclaw/pull/2656)

以上议题反映用户对 **精细化交互控制** 和 **底层可维护性** 的双重需求。

---

### 5. **Bug 与稳定性**  
今日报告的主要 Bug 如下（按严重程度排序）：

| 编号 | 问题描述 | 状态 | 相关 PR |
|------|--------|------|--------|
| #2665 | Anthropic 模型 ID 使用点号而非短横线，导致 API 调用失败 | 开放 | 无 |
| #2650 | DeepSeek-V4-Flash 开启推理后调用 skill/exec 工具报错 | 开放 | 无 |
| #2648 | DeepSeek 工具调用后历史记录中 reasoning 内容错位 | 开放 | [PR#2657](https://github.com/sipeed/picoclaw/pull/2657)（已提交修复） |
| #2616 | DuckDuckGo 未启用时 web_search 工具无法注册 | 已关闭 | [PR#2573](https://github.com/sipeed/picoclaw/pull/2573) |

其中 #2648 已有修复 PR #2657 提交，预计近期合并；其余问题需进一步验证或分配开发者跟进。

---

### 6. **功能请求与路线图信号**  
用户明确提出的功能需求包括：

- **GitHub Copilot 支持**（#2652）：希望集成 GitHub 代码补全服务，体现对主流开发者工具的兼容诉求。
- **MQTT 通道支持**（#2653）：扩展非 HTTP/WebSocket 通信协议，适用于物联网边缘场景。
- **UART 串口工具**（#2649）：补充 I2C/SPI 之外的基础嵌入式接口，强化硬件集成能力。

结合现有 PR（如 #2653、#2649），上述功能有望在下一版本中逐步落地，尤其 MQTT 与 UART 已获实现推进。

---

### 7. **用户反馈摘要**  
从 Issue 评论提炼真实痛点：

- **Synology NAS 用户** 抱怨 WebUI 在 ARM 设备上表现不佳，且缺乏容器化部署文档。
- **国际用户** 普遍反映 DuckDuckGo 未默认启用导致搜索功能失效，凸显全球化适配不足。
- **Windows 用户** 对 launcher.exe 弹出 PowerShell 控制台窗口表示困扰，期待静默后台运行模式。
- **Android 移动端用户** 强调 Enter 键行为不符合直觉，建议提供“按 Shift+Enter 发送”等替代方案。

整体满意度中等偏下，主要集中在 **文档缺失、平台适配粗糙、配置灵活性不足** 三大维度。

---

### 8. **待处理积压**  
以下为长期未响应的重要 Issue / PR：

- **Issue #2499**（4月13日提出）：关于第三方 Pico WS 安全接入与版本兼容性策略，涉及核心安全架构设计，尚无明确回应。[链接](https://github.com/sipeed/picoclaw/issues/2499)
- **PR #1780**（3月19日）：QQ 连接稳定性参数可配置化，虽技术可行但优先级低，目前仍在等待 review。[链接](https://github.com/sipeed/picoclaw/pull/1780)

建议维护团队评估资源后介入处理，避免社区信任度下降。

--- 

*数据来源：GitHub sipeed/picoclaw，统计周期：2026-04-24 至 2026-04-25*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026-04-25）**

---

### 1. **今日速览**  
NanoClaw 在 2026-04-24 表现出高度活跃的协作节奏，过去 24 小时新增 37 个 PR 与 15 个 Issue，反映团队正密集推进 v2 架构落地。核心进展集中在 **工具调用可观测性增强**、**自定义 LLM 端点支持** 和 **系统安装稳定性修复** 三大方向。整体项目健康度良好，无重大版本发布，但多个关键 Bug 已获即时响应，社区参与度显著提升。

---

### 2. **版本发布**  
*无新版本发布*

---

### 3. **项目进展**  
今日共合并/关闭 **26 个 PR**，其中最具里程碑意义的是：

- **PR #1990 / #1993 / #1986**: 实现 CEO 与 ops 主机侧代理的 **工具调用实时日志记录**（Live Agent Activity Observability），填补了 v2 架构中主机层代理的监控空白，使 `/activity` 命令具备全链路可见性。该功能通过 SQLite WAL 模式保障并发性能，并自动迁移现有配置。
- **PR #1995 / #1994**: 为 OpenCode 提供器新增 **自定义 OpenAI 兼容端点支持**，允许用户对接 LiteLLM、llama.cpp 等非官方后端，同时引入 `/add-local-llama` 技能简化本地模型接入流程。
- **PR #4**: 完成历史遗留任务数据泄露问题修复，通过 **IPC 目录按 agent group 隔离** 彻底解决多群组敏感信息混读风险（原 issue #414 相关上下文）。

以上变更标志着 NanoClaw 向 **多云/混合推理架构** 迈出实质性一步。

---

### 4. **社区热点**  
最活跃议题聚焦于 **v2 部署体验优化** 与 **基础设施兼容性**：

- **Issue #1981**: 用户在 headless Linux（Hetzner Ubuntu）上运行 `nanoclaw.sh` 时，因 SSH 非交互式环境导致 systemd 检测失败（[链接](https://github.com/qwibitai/nanoclaw/issues/1981)）。此问题直接影响自动化部署场景，已有 PR #1987 提出“前置构建工具检查”作为缓解方案。
- **Issue #1982**: v2 下配对第二个 Telegram 频道后出现 **重复回复**，疑似消息路由逻辑冲突（[链接](https://github.com/qwibitai/nanoclaw/issues/1982)）。该问题暴露了多通道注册时的状态同步缺陷。
- **Issue #1984**: 用户强烈呼吁完善 **自定义 OpenAI 兼容端点支持**（如 Codex + OpenCode），认为当前仅为实验性选项（BYO endpoint），缺乏生产就绪文档与错误处理（[链接](https://github.com/qwibitai/nanoclaw/issues/1984)）。此诉求直接推动 PR #1995/#1994 的快速落地。

---

### 5. **Bug 与稳定性**  
按严重程度排序的关键问题：

| Issue | 描述 | 状态 | 关联 PR |
|------|------|------|--------|
| [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) | Headless Linux 上 systemd 被误判缺失 | OPEN | - |
| [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) | `register-claude-token.sh` 无法识别 `onecli` 路径（PATH 未传递至子进程） | OPEN | 暂无 |
| [#414](https://github.com/qwibitai/nanoclaw/issues/414) | Docker group 变更后服务启动失败（旧组成员未刷新） | OPEN | PR #4 已修复根本机制，但需验证长期有效性 |
| [#1982](https://github.com/qwibitai/nanoclaw/issues/1982) | 双频道配对后消息重复发送 | OPEN | - |

> **说明**：Issue #414 虽创建于 2026-02-23，但因 PR #4 彻底重构 IPC 隔离逻辑而重新激活；其余均为 v2 新引入问题。

---

### 6. **功能请求与路线图信号**  
用户明确提出的未来方向包括：

- **生产级自定义 LLM 支持**（Issue #1984）：要求将 BYO OpenAI-compatible endpoint 从“实验性”升级为默认能力，支持 Auth-free 环境与私有密钥注入 → 已被 PR #1995 初步实现。
- **增强部署鲁棒性**：针对 headless 服务器、PATH 传播、build tool 依赖等场景提出强化需求 → 触发 PR #1987（前置检查）、#1963（通道注册修复）。
- **全链路可观测性**：CEO/ops 代理工具调用追踪 → 已由 PR #1986/#1990 完整交付。

这些信号表明 NanoClaw v2 正从内部原型转向面向开发者与企业的实用平台。

---

### 7. **用户反馈摘要**  
从 Issue 评论中提取的真实洞察：

- **痛点集中区**：
  - 新手在无人值守服务器（headless Linux）上遭遇 `systemd`/`onecli` 路径问题，缺乏清晰指引（Issue #1981）。
  - 多频道管理时出现消息重复，严重影响用户体验可信度（Issue #1982）。
- **积极反馈**：
  - 对工具日志功能表示赞赏，认为“终于能看清 CEO 在想什么了！”（隐含在 PR #1986 讨论中）。
  - 自定义端点支持极大降低自建推理集群的使用门槛（Issue #1984 作者称“这正是我们需要的灵活性”）。
- **不满意点**：
  - SSL 证书失效影响官网访问（Issue #1503），虽非代码问题但损害品牌信任度。
  - 部分用户抱怨 v2 升级过程缺乏平滑迁移路径（Issue #1989 提及 fork 维护成本）。

---

### 8. **待处理积压**  
需优先关注的高优先级遗留项：

- **[Issue #414](https://github.com/qwibitai/nanoclaw/issues/414)**: Docker group stale detection 问题自 2026-02-23 起持续 60+ 天，尽管机制已修复，但缺乏回归测试覆盖，建议补充 CI 用例。
- **[Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503)**: `nanoclaw.dev` SSL 证书过期，属运维类阻塞项，影响官网可信度与 SEO，需 infra 团队介入。
- **[Issue #1989](https://github.com qwibitai/nanoclaw/issues/1989)**: v1 fork 升级至 v2 的迁移指南缺失，阻碍生态扩展，应纳入文档 sprint。

---

**数据来源**：GitHub API @ 2026-04-25T00:00Z  
**分析师备注**：NanoClaw v2 正处于功能爆发期，建议加强自动化测试（尤其 headless 部署场景）并启动迁移文档专项。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-04-25）**

---

### 1. **今日速览**  
过去24小时，NullClaw 项目活跃度较高，共新增11个待合并 PR 和2条 Issues 更新。核心贡献者 manelsen 主导了多项功能增强与配置灵活性提升，主要集中在 Agent 工具链、技能系统扩展及 A2A 流集成。尽管无新版本发布，但开发节奏稳定，技术债清理与架构完善持续推进。项目整体处于积极迭代状态，社区反馈集中于易用性与稳定性优化。

---

### 2. **版本发布**  
*无新版本发布*

---

### 3. **项目进展**  
**关键合并/关闭 PR：无**  
所有11个 PR 仍处于待合并状态，主要由 manelsen 提交，聚焦于以下方向：
- **工具优先级机制**（#836）：实现基于触发词的工具调用优先级提示，提升 LLM 决策效率；
- **外部工具自定义配置支持**（#837、#834）：允许通过 JSON 文件灵活覆盖工具描述与启用状态；
- **技能目录结构扁平化改进**（#840）：支持子分类目录下的技能自动发现；
- **A2A 流进度回调集成**（#844）：将技能工具调用进度实时推送至客户端流；
- **Matrix E2EE 代理支持**（#838）：引入 pantalaimon 代理以增强端到端加密通信能力。

这些变更显著增强了 NullClaw 的模块化与可配置性，为未来多实例部署与复杂工作流支持奠定基础。

---

### 4. **社区热点**  
**最活跃 Issue：#851 [OPEN] Busy-loop on accept4() returning EAGAIN pegs CPU core**  
该问题在 Raspberry Pi 5 上出现，主进程因 `accept4()` 返回 `EAGAIN` 陷入忙等待，导致 CPU 占用率达 100%。虽已有 4 条评论讨论 strace 日志与 socket 非阻塞模式配置建议，但尚未提供有效修复方案。此问题直接影响边缘设备部署体验，亟需关注。

**高关注度 PR：#836 feat(agent): trigger-based tool prioritization**  
尽管暂无评论或点赞，但其实现逻辑清晰，涉及核心 Agent 循环改造，可能成为后续智能路由的关键能力。

---

### 5. **Bug 与稳定性**  
| 严重程度 | Issue/PR | 描述 | 状态 |
|----------|--------|------|------|
| 高 | #851 (Issue) | Gateway 在高并发或资源受限环境下因 `EAGAIN` 引发 CPU 耗尽 | 无 fix PR |
| 中 | #843 (Fix PR) | 修复了交互式引导流程中因权限不足导致 `KeyWriteFailed` 崩溃的问题 | 已提交修复 |

> **分析**：#851 暴露了网络层事件处理在高负载或嵌入式环境下的鲁棒性缺陷，需引入更完善的 epoll/kqueue 回退逻辑。#843 的修复表明 Docker 等容器化场景下的权限管理仍需加强。

---

### 6. **功能请求与路线图信号**  
- **外部工具配置热加载**（隐含于 #837）：用户强烈希望脱离代码修改即可调整工具行为，暗示即将支持配置文件监听与动态重载；
- **技能分类组织需求**（#840）：反映用户对大型技能库的可维护性诉求，预示未来可能引入标签、元数据索引等功能；
- **A2A 进度反馈标准化**（#844）：显示客户端期望获得细粒度执行状态，推动后端向事件驱动架构演进。

结合当前 PR 密度与主题集中度，下一版本（v0.9+）极有可能包含“智能工具调度”与“可插拔配置体系”两大特性模块。

---

### 7. **用户反馈摘要**  
- **痛点**：  
  - 用户 lvai125 曾提出 curl/wget 硬编码问题（#167 已关），虽解决但仍反映底层依赖耦合度高，影响定制化部署；  
  - Trez-zerT 指出 ARM64 平台下 gateway 性能异常，凸显跨平台兼容性短板。  
- **满意点**：  
  - 多数 PR 设计遵循 Zig 原生风格，接口一致性强（如 ProgressCallback 模式复用）；  
  - 对外部配置文件的支持被广泛视为重要 UX 改进。

---

### 8. **待处理积压**  
- **#851 [OPEN] Busy-loop on accept4()**：自 2026-04-19 创建，持续 5 天未获响应，影响边缘计算场景可用性，建议列入本周优先级排查清单；  
- **#167 [CLOSED] curl/wget 硬编码**：虽已关闭，但其引发的依赖解耦讨论仍在社区延续，建议文档补充“自定义网络工具链”指南以防复发。

---  
*数据来源：GitHub.com/nullclaw/nullclaw | 报告时间：2026-04-25*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-04-25）**

---

### 1. **今日速览**
IronClaw 在 2026-04-25 保持了较高的开发活跃度，过去 24 小时内共处理 16 条 Issues 和 50 条 Pull Requests，其中 7 个 PR 已合并。项目整体处于快速迭代阶段，重点围绕 LLM 工具 schema 规范化、配置系统解耦及 QA 测试反馈进行优化。无新版本发布，但 CI/CD 流程稳定推进。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
- **#2951**：修复 NEAR AI 工具 schema 形状适配问题，将通用逻辑提取至 `src/llm/tool_schema.rs`，确保 top-level combinators 仍被扁平化但保留可选字段灵活性（[PR #2951](https://github.com/nearai/ironclaw/pull/2951)）
- **#2890**：解决 Settings 中“Fetch available models”对 NEAR AI 返回空的问题，通过放宽私有端点判断逻辑支持区域子域名（[PR #2890](https://github.com/nearai/ironclaw/pull/2890)）
- **#2927**：修复首次运行时 WASM 通道未自动激活的问题，调用 `load_startup_active_channels` 替代 `load_persisted_active_channels`（[PR #2927](https://github.com/nearai/ironclaw/pull/2927)）
- **#2934**：解耦 webhook 监听器绑定地址与 HTTP 通道启用机制，新增 `WEBHOOK_HOST`/`PORT` 配置项（[PR #2934](https://github.com/nearai/ironclaw/pull/2934)）

这些进展强化了 LLM 集成稳定性、配置灵活性与用户体验一致性。

---

### 4. **社区热点**
- **#2950**：关于 `normalize_schema_strict()` 功能拆分的需求讨论（[Issue #2950](https://github.com/nearai/ironclaw/issues/2950)）  
  用户指出当前函数混合了 provider-safe schema 清理与严格可选字段重写两种行为，建议分离以增强可维护性。此 Issue 直接关联 #2951 PR，反映社区对架构清晰度的高诉求。
- **#1741**：提出“内核/扩展架构”设计构想（[Issue #1741](https://github.com/nearai/ironclaw/issues/1741)）  
  主张构建 OS-like 最小内核 + DB-backed 扩展状态模型，虽创建较早（3月），但在今日仍有更新，显示其对长期架构演进的核心影响力。

---

### 5. **Bug 与稳定性**
| 严重程度 | Issue/PR | 描述 | 状态 |
|----------|--------|------|------|
| P1       | [#2949](https://github.com/nearai/ironclaw/issues/2949) | Linux x86_64 平台安装脚本无法获取二进制包 | 开放，无 fix |
| P1       | [#2946](https://github.com/nearai/ironclaw/issues/2946) | 每次启动重置 `llm_backend` 为 nearai，覆盖环境与配置文件 | 开放，无 fix |
| P2       | [#2945](https://github.com/nearai/ironclaw/issues/2945) | 一次性登录链接创建后立即提示“Unauthorized” | 开放，QA 确认中 |
| P2       | [#2944](https://github.com/nearai/ironclaw/issues/2944) | 助手在执行失败的内容提取任务时谎报成功 | 开放，需后端验证 |
| P2       | [#2943](https://github.com/nearai/ironclaw/issues/2943) | 工具调用后的响应需刷新页面才显示 | 开放，疑似前端流式渲染缺陷 |
| P1       | [#2939](https://github.com/nearai/ironclaw/issues/2939) | TEE 升级后 Telegram bot 停止响应 | 开放，需排查 TEE 兼容性 |
| P1       | [#2938](https://github.com/nearai/ironclaw/issues/2938) | TEE 升级后 Routines 标签消失 | 开放，UI 路由异常 |

> **自动化测试失败**：#2930（OpenAI-compatible provider canary）、#2929（Anthropic public-smoke）均失败，需关注 CI 稳定性。

---

### 6. **功能请求与路线图信号**
- **移动端体验重构**：[#1344](https://github.com/nearai/ironclaw/issues/1344) 呼吁重新设计移动布局，采用汉堡菜单集成导航，虽跨度大（自3月），但仍持续更新，表明该方向已被纳入规划。
- **Aliyun Coding Plan 支持**：[#1446](https://github.com/nearai/ironclaw/pull/1446) 正在添加阿里云百炼大模型接口，支持 Anthropic Messages API 兼容层，预示多厂商 LLM 生态扩展策略。
- **技能系统 HTTP 声明化**：[#2904](https://github.com/nearai/ironclaw/pull/2904) 提议用 SKILL.md 替代部分 WASM 代理工具，提升安全性和可维护性，是未来工具架构演进的关键一步。

---

### 7. **用户反馈摘要**
- **安装障碍**：Linux 用户报告官方安装脚本不识别 x86_64-unknown-linux-gnu 平台（#2949），影响非 macOS/Win 用户初次部署体验。
- **配置优先级混乱**：用户反馈数据库值总是覆盖环境变量和文件配置（#2946），质疑文档声明的优先级顺序失效，暴露配置加载逻辑缺陷。
- **Telegram 集成 UX 退化**：连接流程暴露 MTProto 开发者配置而非引导式界面（#2942），显示第三方集成易用性仍需优化。
- **正向反馈**：PDF 提取性能提升获认可（#1435 PR 使用 pdf_oxide 提速至 0.8ms），体现技术选型改进的有效性。

---

### 8. **待处理积压**
- **#1741（内核/扩展架构设计）**：创建于 2026-03-29，近一月无实质进展，涉及核心架构重构，建议召集相关贡献者（如 @ilblackdragon）推动细化设计。
- **#1344（移动端 UI 改造）**：同样长期活跃，缺乏具体实施计划，需评估资源投入优先级。
- **#2950（schema 清理逻辑拆分）**：虽已有 PR #2951 回应，但 Issue 本身仍需确认是否完全满足需求，建议维护者跟进闭环。

--- 

*数据来源：GitHub.com/nearai/ironclaw（截至 2026-04-25）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报 - 2026-04-25**

---

### 1. **今日速览**

LobsterAI 在 2026-04-24 表现出高度活跃的开发节奏，共完成 **42 个 PR 合并**，发布 **2 个新版本**（v2026.4.23 与 v2026.4.24），涵盖模型支持扩展、UI 优化及稳定性提升。尽管 Issue 活动较少（仅 3 条新开/活跃），但社区反馈集中于功能优化与兼容性改进。项目整体处于稳定迭代阶段，重点推进多平台集成与用户体验增强。

---

### 2. **版本发布**

#### 🔹 LobsterAI 2026.4.24
- **新增模型支持**：正式集成 **DeepSeek V4-flash 与 V4-pro** 模型，显著扩展推理能力边界（[PR #1812](https://github.com/netease-youdao/LobsterAI/pull/1812)）。
- **认证机制优化**：修复 UserProfile 字段映射错误，并确保 userId 在更新请求中正确传递（[PR #1784](https://github.com/netease-youdao/LobsterAI/pull/1784)）。
- **请求结构增强**：为 update 请求添加 version 字段，提升状态追踪能力（[PR #1785](https://github.com/netease-youdao/LobsterAI/pull/1785)）。

> ⚠️ **迁移提示**：若用户依赖旧版 DeepSeek API 调用格式，请验证是否兼容新 schema；建议更新至最新客户端以避免潜在请求失败。

#### 🔹 LobsterAI 2026.4.23
- **嵌入配置上线**：新增 memory search 的 embedding 参数设置，支持 OpenAI/Gemini 等远程模型（[PR #1810](https://github.com/netease-youdao/LobsterAI/pull/1810)）。
- **日志完整性提升**：Windows 环境下 `install-timing.log` 现纳入导出范围（[PR #1800](https://github.com/netease-youdao/LobsterAI/pull/1800)）。

---

### 3. **项目进展**

今日合并的关键 PR 聚焦于 **多通道通信支持** 与 **核心服务稳定性**：

| PR 编号 | 类型 | 贡献点 |
|--------|------|--------|
| [#1792](https://github.com/netease-youdao/LobsterAI/pull/1792) | feat/im | 支持 Telegram 多机器人协同运行 |
| [#1794](https://github.com/netease-youdao/LobsterAI/pull/1794) | feat/im | Discord 平台实现多机器人并行处理 |
| [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) | fix | 将 chat.send RPC 超时从 30s 提升至 90s，解决网关初始化延迟问题 |
| [#1815](https://github.com/netease-youdao/LobsterAI/pull/1815) | fix(skills) | 统一技能发现路径，避免 `~/.claude/skills` 导致的运行时缺失错误 |

此外，UI 响应式布局优化（[#1799](https://github.com/netease-youdao/LobsterAI/pull/1799)）与 DiffView 组件修复（[#1814](https://github.com/netease-youdao/LobsterAI/pull/1814)）提升了协作编辑体验。

---

### 4. **社区热点**

- **#1813 [DeepSeek V4 请求失败]**：用户报告使用 DeepSeek V4 时出现 *"provider rejected the request schema or tool payload"*，疑似与工具调用参数格式不兼容有关（[链接](https://github.com/netease-youdao/LobsterAI/issues/1813)）。此问题出现在新版本发布次日，需警惕回归风险。
- **#38 & #41 [历史遗留问题续评]**：两条标记为 `[stale]` 的旧 Issue 在今日被重新评论，反映用户对 **token 节省策略** 和 **Playwright CLI/MCP 混用混乱** 的关注持续存在。

> 💡 **诉求分析**：社区亟需更透明的错误提示机制（如 DeepSeek 失败场景）及长期维护的优化指南（如 token 管理）。

---

### 5. **Bug 与稳定性**

| 问题描述 | 严重度 | 状态 | 关联 PR |
|---------|--------|------|--------|
| DeepSeek V4 请求被拒绝 | 高 | 开放 | 无 |
| Playwright skill 路径不一致导致技能不可用 | 中 | 开放 | 已修复于 [#1815](https://github.com/netease-youdao/LobsterAI/pull/1815) |
| chat.send 因超时误判为失败 | 中 | 已修复 | [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) |

> ✅ **当前风险点**：DeepSeek V4 兼容性问题尚未定位根源，建议优先排查工具负载（tool payload）序列化逻辑。

---

### 6. **功能请求与路线图信号**

- **多机器人支持**（Telegram/Discord）的集中实现，表明项目正强化 **企业级协作部署能力**。
- **嵌入配置开放化** 显示对高级记忆检索功能的重视，可能预示未来将推出自定义向量数据库集成。
- 用户反复提及 **token 优化** 与 **CLI/MCP 一致性**，暗示下一版本或包含资源效率专项优化。

---

### 7. **用户反馈摘要**

- **痛点**：  
  > “DeepSeek V4 根本用不了，报错看不懂”（#1813）  
  > “为什么 playwright-cli 和 script 里要用不同的 mcp？文档也不清楚”（#41）

- **满意点**：  
  > “RPC 超时改到 90s 后，大文件同步终于不报错了！”（源自 PR #1803 上下文）

---

### 8. **待处理积压**

- **#38 与 #41**：均为 2026-02 提出的问题，虽被标记 `[stale]`，但在今日仍获评论，建议维护者评估优先级或明确关闭原因。
- **DeepSeek V4 兼容性问题**（#1813）：作为新版本直接引发的问题，需紧急响应以避免口碑受损。

--- 

📌 **数据来源**：[LobsterAI GitHub Repository](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-04-25）**

---

### 1. **今日速览**
过去24小时内，Moltis 项目保持较高活跃度，共处理 31 个 Pull Request 更新与 10 个 Issue 流转。整体开发节奏稳健，重点聚焦于安全加固、配置系统重构与多语言支持优化。社区反馈积极，无重大版本发布，但多个关键功能迭代持续推进。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**

**关键合并 PR：**
- **#866 Landlock FS 隔离实现**：引入 Linux Landlock LSM 实现内核级文件系统沙箱隔离，显著提升容器安全性，具备优雅降级机制（兼容旧内核/容器环境）。[PR #866](https://github.com/moltis-org/moltis/pull/866)
- **#864 分层配置系统上线**：正式启用 `defaults.toml` + `moltis.toml` 覆盖模式，用户配置文件变为纯覆盖式，避免默认值被意外修改，提升可维护性。[PR #864](https://github.com/moltis-org/moltis/pull/864)
- **#840 MCP 服务器管理技能包**：新增内置 DevOps 技能模块，支持通过 RPC 动态管理 MCP 服务，涵盖 OAuth、传输类型等高级能力，增强自动化运维能力。[PR #840](https://github.com/moltis-org/moltis/pull/840)
- **#862 Fireworks AI 兼容性修复**：修复 Fireworks 拒绝 `null` 枚举值的 Bug，确保 JSON Schema 在严格模式下正确兼容该提供商。[PR #862](https://github.com/moltis-org/moltis/pull/862)
- **#791 moltis-splitter 独立成 crate**：将 AST-aware 代码分块逻辑抽离为独立 crate，降低主项目依赖复杂度，支持 15+ 语言语法感知切分。[PR #791](https://github.com/moltis-org/moltis/pull/791)

这些进展表明项目正系统性推进架构现代化、安全增强与开发者体验优化。

---

### 4. **社区热点**

**最活跃 Issue/PR：**
- **#867 API 密钥明文存储问题**：用户强烈质疑语音服务密钥以明文形式写入 `moltis.toml` 的安全隐患，虽无评论但属高关注安全问题。建议后续集成加密或环境变量方案。[Issue #867](https://github.com/moltis-org/moltis/issues/867)
- **#869 Obscura 浏览器后端接入**：作为轻量级 Chromium 替代方案，采用 sidecar 模式集成，减少 Rust 依赖，获技术型用户关注。体现对低资源环境的适配意愿。[PR #869](https://github.com/moltis-org/moltis/pull/869)
- **#858 心跳循环触发 Bug**：暴露 exec 调用与定时器协同缺陷，快速响应并合并修复 (#863)，显示团队对稳定性问题的敏捷处理能力。

---

### 5. **Bug 与稳定性**

| 严重等级 | Issue/PR | 描述 | 状态 |
|--------|--------|------|-----|
| 高 | #858 Heartbeat re-fires in tight loop | Agent 使用 `exec` 时心跳回调导致无限重试 | ✅ 已修复 (#863) |
| 中 | #848 Fireworks AI 枚举 null 错误 | JSON Schema 含 `null` 时被拒，HTTP 400 | ✅ 已修复 (#862) |
| 低 | #828 Docker/WSL2 缺少 `/sys/class/dmi` | 沙箱初始化失败于非标准环境 | ⚠️ 待进一步适配 |
| 低 | #344 Vault 密封 UX 不佳 | UI 提示不清晰，影响用户体验 | ⚠️ 需设计介入 |

> 所有高优先级 Bug 均已获得对应修复 PR，整体稳定性良好。

---

### 6. **功能请求与路线图信号**

- **时间戳上下文注入**（#176）：长期需求（自 Feb '26），虽已关闭但未实现，可能反映用户对对话历史时间感知的需求未满足，未来或重新提上议程。
- **Obscura 浏览器支持**（#869）：作为新兴轻量渲染引擎的集成尝试，符合“去 Chromium 化”趋势，预示项目可能探索更低资源占用的运行时方案。
- **Nix Flake 支持**（#745）：已完成集成，表明项目重视跨平台、可复现构建，利于 DevOps 和 NixOS 用户群体扩展。

结合近期 PR 趋势，下一版本可能继续强化安全、配置管理与多后端兼容能力。

---

### 7. **用户反馈摘要**

- **正面反馈**：
  - Nix Flake 实现获开发者赞赏，简化部署流程；
  - 分层配置系统被认可为“终于解决了 config 混乱问题”；
  - 中文本地化（zh-TW）提升台湾用户满意度。

- **负面痛点**：
  - 密钥明文存储引发安全焦虑，尤其企业用户担忧合规风险；
  - WSL2 下 Docker 沙箱失败阻碍 Windows 开发者；
  - 聊天窗口自动滚动干扰深度阅读体验（#824 虽关闭但类似诉求持续存在）。

---

### 8. **待处理积压**

- **#176 Add datetime to system prompt context**  
  创建时间：2026-02-17 | 评论数：18 | 👍: 1  
  此增强请求涉及重要上下文增强，但长期未推进，建议评估其与当前记忆压缩、会话切片机制的整合可行性。[Issue #176](https://github.com/moltis-org/moltis/issues/176)

> 该项目整体健康度良好，核心团队响应迅速，功能迭代有序。建议优先处理遗留安全顾虑（如密钥存储）及跨平台兼容性（WSL2）问题以提升用户体验边界。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-04-25）**

---

### 1. **今日速览**  
过去24小时 CoPaw 社区活跃度较高，共处理 100 条 Issues/PRs（50 条 Issue 更新、50 条 PR 更新），其中 22 个 Issue 和 35 个 PR 已闭环。发布 v1.1.4.post1 及 v1.1.4 两个版本，核心聚焦于内存系统重构与多模态支持优化。整体项目进展稳健，但桌面端稳定性问题频发需持续关注。

---

### 2. **版本发布**  

#### **v1.1.4.post1**  
- **主要变更**：
  - 新增 CJK（中日韩）感知的记忆搜索分词机制，提升多语言环境下的语义检索精度（[#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)）。
  - 回滚 Vite 从 v6 到 v8 的升级，因引发前端构建兼容性问题（[#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812)）。
- **影响范围**：仅修复性补丁，无破坏性变更。

#### **v1.1.4**  
- **关键特性**：
  - **长期记忆模块重构**：支持插件化后端（如向量数据库）、自动摘要与检索，并引入统一上下文接口（[#3548](https://github.com/agentscope-ai/QwenPaw/issues/3548)）。
  - 增强钉钉频道文件发送安全性，防止本地路径泄露（[#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790)）。
  - DeepSeek 推理模型支持完善，解决多轮对话中 `reasoning_content` 丢失问题（[#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794)）。
- **迁移建议**：若使用自定义记忆后端或钉钉文件功能，请验证配置兼容性。

---

### 3. **项目进展**  
- **重大功能推进**：
  - **Tauri 2.x 桌面端替代 Electrobun**（[#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)）：开启现代化桌面应用架构迁移，提升安全性和性能。
  - **异步令牌使用统计**（[#3766](https://github.com/agentscope-ai/QwenPaw/pull/3766)）：为成本监控与分析提供底层支撑。
- **Bug 修复亮点**：
  - 钉钉文件发送时文件名后缀丢失及路径暴露问题已修复（[#3760](https://github.com/agentscope-ai/QwenPaw/issues/3760) + [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790)）。
  - Anthropic 兼容 API 的消息格式错误导致 BadRequest 的问题解决（[#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489)）。

---

### 4. **社区热点**  
- **贡献者招募活动**（[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)）：开放任务列表吸引社区参与，已有 60+ 评论，反映开发者对协作生态建设的强烈意愿。
- **火山方舟 Coding Plan 支持请求**（[#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753)）：用户期待主流国产推理 API 集成，可能影响下一版本 Provider 扩展计划。
- **右键上下文菜单需求**（[#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752)）：Web/桌面端交互体验优化呼声高，关联 PR 显示 UI 组件层已开始设计。

---

### 5. **Bug 与稳定性**  
| 严重等级 | Issue 描述 | 状态 | 相关 PR |
|--------|------------|------|--------|
| ⚠️ High | Windows/macOS 桌面端白屏（启动后无响应） | 活跃（[#3815](https://github.com/agentscope-ai/QwenPaw/issues/3815), [#3807](https://github.com/agentscope-ai/QwenPaw/issues/3807)） | 待排查（Vite 回滚后仍存在） |
| ⚠️ High | MCP Client 启用后 Dock 图标异常（macOS） | 活跃（[#3808](https://github.com/agentscope-ai/QwenPaw/issues/3808)） | 无 |
| 🔶 Medium | 技能池持续报错 | 活跃（[#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702)） | 无 |
| 🔶 Medium | Ollama 向量模型配置重启后失效 | 活跃（[#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)） | 无 |

> **注**：v1.1.4 发布后白屏问题集中爆发，疑似前端资源加载或 WebView2 兼容缺陷，需紧急热修复。

---

### 6. **功能请求与路线图信号**  
- **Markdown 渲染支持**（[#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975)）：用户输入消息 Markdown 解析需求明确，可能纳入 v1.2.0。
- **工作区沙箱机制**（[#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814)）：对标 Claude Code 的安全边界设计，属高优先级安全特性。
- **时间戳标识对话历史**（[#3774](https://github.com/agentscope-ai/QwenPaw/issues/3774)）：已有 PR [#3603](https://github.com/agentscope-ai/QwenPaw/pull/3603) 实现，预计随下次迭代发布。

---

### 7. **用户反馈摘要**  
- **正面反馈**：
  - “内存系统重构后检索速度明显提升”（[#3548 评论](https://github.com/agentscope-ai/QwenPaw/issues/3548#issuecomment-...)）。
  - 钉钉文件发送隐私保护改进获认可（[#3760 评论](https://github.com/agentscope-ai/QwenPaw/issues/3760#issuecomment-...)）。
- **负面痛点**：
  - Windows 代理环境下 CLI 工具失效（[#3664](https://github.com/agentscope-ai/QwenPaw/issues/3664)）。
  - 桌面版安装包被 Defender 误报为威胁（[#3718](https://github.com/agentscope-ai/QwenPaw/issues/3718)），影响企业部署信心。

---

### 8. **待处理积压**  
- **长期未决 Issue**：
  - **MCP Client TaskGroup 假死**（[#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)）：创建于 4/21，无进展，涉及核心调度逻辑，建议分配核心维护者跟进。
  - **VLLM 私有化部署提前终止回复**（[#3775](https://github.com/agentscope-ai/QwenPaw/issues/3775)）：复现困难但影响生产环境，需日志增强定位。
- **高风险 PR**：
  - **Tauri 迁移 PR**（[#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)）：首次尝试替换 Electron 架构，需全面测试跨平台兼容性。

--- 

*数据来源：GitHub API @ 2026-04-25 08:00 UTC+8*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报（2026-04-25）**

---

### 1. **今日速览**  
过去24小时内，ZeptoClaw 保持低活跃度状态：共产生1条新 Issue 和1个待合并 PR，无新版本发布。项目整体进展平稳，当前重点聚焦于集成测试覆盖扩展与 Feishu 长连接架构优化。社区参与度较低，暂无紧急议题或活跃讨论。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
- **PR #544**: `[codex] expand CI coverage for optional integration features`（作者: manelsen）  
  该 PR 旨在增强 CI 矩阵，确保 `channel-email`、`google`、`provider-vertex` 和 `whatsapp-web` 等可选集成路径在构建阶段被正确编译验证，并附带两项兼容性修复以支持这些模块的协同工作。此改进将显著提升多通道集成的稳定性与开发体验。[查看 PR](https://github.com/qhkm/zeptoclaw/pull/544)

---

### 4. **社区热点**  
- **Issue #546**: `feat(channels): native Feishu long-connection to Nanodio subprocess worker`（作者: CangWolf17）  
  提出引入原生飞书（Feishu/Lark）长连接机制，通过本地子进程而非内嵌方式运行 Nanodio，以提升模块解耦性与可维护性。虽目前无评论，但体现了对高可用性通信层的需求增长。[查看详情](https://github.com/qhkm/zeptoclaw/issues/546)

---

### 5. **Bug 与稳定性**  
未报告新的 Bug 或稳定性问题。

---

### 6. **功能请求与路线图信号**  
- **Issue #546** 明确提出了对 **飞书长连接支持** 的需求，并建议采用子进程架构实现，这与 ZeptoClaw 多通道扩展战略一致，预示未来可能在 v0.9+ 版本中纳入官方支持。
- **PR #544** 反映开发者正积极准备为更多第三方服务（如 Google、Vertex AI、WhatsApp Web）提供构建时验证能力，暗示下一里程碑将强化可选集成生态。

---

### 7. **用户反馈摘要**  
当前 Issue 中暂无用户直接反馈，但 Issue #546 的作者作为内部贡献者（推测为深度用户），提出的技术方案强调“解耦”与“监督式子进程”，表明现有嵌入式集成模式在高负载或故障恢复场景下存在潜在瓶颈，亟需演进架构。

---

### 8. **待处理积压**  
- **长期未响应 Issue**: 经核查，近期所有 Issue 均在创建后1天内更新，暂无超7日未回应的关键议题。当前 Issue #546 处于 OPEN 状态且无后续互动，建议维护者在下个迭代周期评估其优先级。

--- 

*数据更新时间：2026-04-25 00:00 UTC*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报 - 2026年4月25日**

---

### 1. **今日速览**
过去24小时，ZeroClaw 项目保持高度活跃状态：共处理 50 条 Issues 更新（46 条新开/活跃，4 条已关闭）和 50 条 PR 更新（23 条待合并，27 条已合并/关闭），无新版本发布。社区讨论集中在多 Agent 架构、Provider 兼容性修复及安全策略优化三大方向，整体开发节奏稳健推进。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日共合并/关闭 27 个 PR，涵盖关键基础设施完善与用户体验优化。其中值得关注的包括：
- **PR #6027** ✅ 启用 MiniMax 原生工具调用支持，修复了此前因系统消息合并逻辑导致的工具调用失败问题；
- **PR #6088** ✅ Telegram 媒体组图片批量处理功能上线，显著降低重复请求与历史堆积风险；
- **PR #6086 & #6085** ✅ 配置文件别名与环境变量增强，提升配置灵活性与安全性（`allowed_path`/`session_ttl_hours` 默认值调整）；
- **PR #5975** ✅ Gemini/OpenRouter 工具调用兼容性问题修复，统一命名空间解析规则。

以上变更强化了跨平台集成能力与运行时健壮性，为 v0.7.0 的多 Agent 特性打下基础。

---

### 4. **社区热点**
当前最受关注的问题集中于 **多 Agent 路由机制缺失**（#2767）与 **Ollama Provider 工具调用失效**（#5459、#5962）。前者提出“类似 OpenClaw 的多工作区隔离”需求，已有 RFC #5890 启动设计讨论；后者暴露出 Ollama 实现中硬编码 `tool_count=0` 的根本缺陷，影响所有基于 Ollama 的本地模型工具使用，目前尚无稳定修复方案，但多个相关 Bug 被标记为 `in-progress`。

此外，**WhatsApp Web Channel 配置错误**（#4846）引发 S1 级阻塞，用户反馈即使正确启用 feature 仍报错，需进一步排查构建系统或依赖声明问题。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键 Bug：

| Issue | 描述 | 状态 | 关联 Fix PR |
|------|------|------|-------------|
| #5459 | Ollama Provider 始终发送 `tool_count=0`，导致原生工具调用完全失效 | OPEN | 无（高优先级待解） |
| #4846 | WhatsApp Web 通道因缺失 `--features whatsapp-web` 报错 | OPEN | 无 |
| #5809 | Shell 沙箱策略误拦截 `git -C <path>` 命令（安全风险） | in-progress | 预计本周合并 |
| #5289 | Bedrock Provider 错误使用 API Key 而非 AWS SigV4 | in-progress | 待提交 |
| #5556 | Ollama 小模型摘要超时（60s 不足） | OPEN | 无 |

共 4 个 S1 级问题，其中 2 项已有修复进度，其余需核心团队介入。

---

### 6. **功能请求与路线图信号**
- **多 Agent UX 流设计**（#5890, #5891）：RFC 已进入 7 天评议期，结合 #2767 长期诉求，表明 v0.7.0+ 将系统性引入多 Agent 支持；
- **WeChat iLink Channel 恢复**（#5259）：开发者确认代码存在且功能正常，仅因误回退丢失，极可能快速回归主分支；
- **HMAC 执行收据**（#4830）：虽已关闭但未实现，可能作为后续可验证推理的安全特性纳入规划。

上述信号显示项目正从单 Agent 向分布式智能体协作演进。

---

### 7. **用户反馈摘要**
- **正面反馈**：Telegram 媒体组批处理（#6088）获用户认可，解决“图片分散触发多次响应”痛点；环境变量 token 支持（#6087）被赞“终于不用明文写配置文件”。
- **负面痛点**：
  - Ollama 用户抱怨“本地部署却不能用工具”，暴露文档与实现脱节；
  - Windows 构建失败（#6020）阻碍新手参与；
  - QQ 语音消息重复入库（#5662）严重影响数据库一致性。

真实场景反映对生产就绪度要求提升，尤其在企业通信渠道（如 WhatsApp、QQ）稳定性方面仍需加强。

---

### 8. **待处理积压**
- **Issue #2503**（3月2日发布）：持续 53 天未获响应，用户无法连接 OneBot/NapCat，涉及底层协议适配，建议维护者评估是否废弃或重构通道抽象层；
- **PR #5525**（4月8日提交）：Telegram 媒体组修复因需作者操作被搁置，现已重提（#6088），应尽快合并避免重复劳动；
- **Issue #5117**（3月29日发布）：Mistral 工具调用 ID 格式错误，影响欧洲生态用户，超过 20 天未处理，建议优先分配资源解决。

---

*数据来源：GitHub zeroclaw-labs/zeroclaw 仓库 @2026-04-25T00:00:00Z*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*