# OpenClaw 生态日报 2026-04-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-27 00:27 UTC

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

**OpenClaw 项目动态日报（2026-04-27）**

---

### 1. **今日速览**  
过去24小时，OpenClaw 保持高度活跃状态：共处理 500 条 Issues 和 500 条 PRs，发布 4 个 beta 版本。社区参与度显著，新增 Issue 与活跃讨论数量远超关闭量，表明用户持续投入测试新功能。整体开发节奏稳健，重点聚焦于语音回复（TTS）增强、系统稳定性修复及多平台适配优化。

---

### 2. **版本发布**  
本日发布 **v2026.4.25-beta.4 至 v2026.4.25-beta.1** 四个连续小版本更新，均为同一核心功能迭代的一部分：

- **语音回复全面升级**：
  - 新增 `/tts latest` 命令启用最新 TTS 引擎；
  - 支持聊天作用域内自动 TTS 控制、个性化音色（personas）；
  - 提供 per-agent / per-account 的 TTS 覆盖规则；
  - 新增对 Azure Speech、Xiaomi、Local CLI、Inworld、Volcengine、ElevenLabs v3 等主流 TTS 提供商的支持。
- **破坏性变更**：无明确 breaking change 声明，但建议用户在升级后验证自定义 TTS 配置是否兼容新接口。
- **迁移提示**：若使用旧版 TTS 参数或自研插件，需参考 [官方文档](https://github.com/openclaw/openclaw/blob/main/docs/tts-upgrade-guide.md) 进行适配。

> 所有版本均标记为 `beta`，适用于尝鲜用户，生产环境请谨慎评估。

---

### 3. **项目进展**  
今日关键合并/关闭 PR 包括：

- **#72435**：修复紧凑会话转录轮转逻辑，避免数据丢失（XL, maintainer）✅ *已合并*
- **#43961**：解决网关优雅重启超时后残留进程问题（XL, gateway）✅ *已合并*
- **#71678**：修复 memory-core 插件嵌入失败问题（L, agents）✅ *已合并*
- **#71651**：修复 cron 任务 reload 后 nextRun 未刷新 bug（M, docs）✅ *已合并*

上述修复强化了系统可靠性，尤其针对长期运行中的状态一致性与资源清理机制。此外，多个小型重构（如 #71653、#71633）优化了热路径性能与跨平台体验。

---

### 4. **社区热点**  
最活跃的议题集中在前端交互、权限控制与平台兼容性：

- **#39889**：Control UI 在 Chromium/Vivaldi 中卡死（评论数 8）  
  用户报告即使后端正常响应，前端 `<openclaw-app>` 组件无法渲染，Firefox 正常。疑似 Web Components 注册异常。
- **#31583**：`exec` 工具不继承 `skills.entries.*.env` 变量（评论数 11）  
  暴露安全与环境隔离漏洞，影响 secrets 注入流程。已有回归标签，暂无 fix PR。
- **#25592**：工具调用间文本泄漏到消息通道（评论数 22）  
  内部处理日志被误发至 Slack/iMessage，严重影响 UX。开发者正调查路由逻辑缺陷。

这些议题反映出用户对**界面稳定性**与**权限边界清晰性**的高要求。

---

### 5. **Bug 与稳定性**  
严重 Bug 按优先级排序：

| Issue | 类型 | 描述 | 状态 |
|-------|------|------|------|
| #72366 | Crash | mDNS 插件导致网关启动崩溃循环 | 新开（2026-04-26）|
| #31331 | Behavior | Docker 沙箱无法挂载 workspace | 活跃（评论 8）|
| #32473 | Regression | Control UI 需 HTTPS/localhost 安全上下文 | 活跃（👍4）|
| #40540 | Windows EBUSY | `openclaw update` 自更新失败 | 活跃（评论 8）|

- **#72366** 为今日新发现 Beta 阻塞问题，已关联 bonjour 插件，暂无 fix PR。
- **#31331** 已有 PR #71964 尝试修复 Linux PATH 污染，待合并。

其余问题多为平台特定行为异常，部分已有候选修复（如 #71619 针对 Linux PATH）。

---

### 6. **功能请求与路线图信号**  
高频需求体现未来方向：

- **TTS 生态扩展**：多个 PR（如 #10356）与 Issue 推动新提供商接入，预示 OpenClaw 将构建统一语音层抽象。
- **细粒度权限模型**：#39979 提议路径级 RWX 权限替代二进制白名单，呼应 Unix DAC 理念，可能纳入下一版安全架构。
- **内存搜索递归化**：#34400 要求支持 `memory/**/*.md`，反映用户积累大量结构化记忆文件后的检索痛点。
- **成本管控机制**：#38248 提出每小时支出上限，应对 failover 导致的意外高费用，显示商业化考量升温。

结合近期 TTS 密集发布，**语音交互能力将成为 2026 Q2 核心卖点**。

---

### 7. **用户反馈摘要**  
真实使用场景揭示深层诉求：

- **满意点**：TTS 升级获广泛好评，@leonchui 等人贡献的新提供商显著提升多语言支持能力。
- **不满点**：
  - “Active Memory 直接聊天时卡顿 30 秒”（#65309）——影响实时性；
  - “Cron 编辑后下次运行时间不准”（#27996）——调度信任度受损；
  - “Docker 内无法访问宿主机 workspace”（#31331）——容器化部署障碍。

用户普遍期望**更透明的状态反馈**与**更强的跨平台一致性**。

---

### 8. **待处理积压**  
需维护者优先关注的长期议题：

- **#65824**：Meta 请求合集（11 项平台 gap），创建于 2026-04-13，持续活跃（评论 10），含完整 workaround 脚本，具高参考价值。
- **#17311**：SecretsProvider 扩展（env/keyring/1Password），自 2026-02-15 未更新，涉及核心安全模块演进。
- **#22438**：分层引导文件加载，减少 token 浪费，影响大规模工作流效率。

建议在下周排期中安排专项处理。

--- 

*数据来源：[GitHub openclaw/openclaw](https://github.com/openclaw/openclaw)，统计时间：2026-04-27 00:00–24:00 UTC*

---

## 横向生态对比

好的，作为一名资深技术分析师，我将为您生成这份横向对比分析报告。

---

### **AI 智能体与个人 AI 助手开源生态横向对比分析报告 (2026-04-27)**

#### **1. 生态全景**

当前，个人 AI 助手与自主智能体开源生态正处于一个**高度活跃、竞争与分化并存**的阶段。头部项目如 OpenClaw 和 Hermes Agent 展现出强大的社区活力和技术演进能力，持续在语音交互、多平台适配及系统稳定性上发力。与此同时，新项目（如 PicoClaw, NanoClaw）通过聚焦特定场景（嵌入式、企业部署）或提供差异化体验（WebUI, MCP集成）切入市场。整个生态呈现出从“功能实现”向“生产就绪”和“垂直场景深化”过渡的趋势，开发者对跨平台一致性、权限边界清晰性和细粒度资源管控的需求日益凸显。

#### **2. 各项目活跃度对比**

| 项目名称      | Issues 数 | PRs 数 | Releases        | 健康度评估         |
| :------------ | :-------- | :----- | :-------------- | :----------------- |
| **OpenClaw**  | 500       | 500    | 4x Beta 版本     | ⭐⭐⭐⭐⭐ (极高活跃度) |
| **NanoBot**   | 5         | 124    | 无              | ⭐⭐⭐⭐ (高活跃度)    |
| **Hermes**    | 50        | 50     | 无              | ⭐⭐⭐⭐ (高活跃度)    |
| **PicoClaw**  | 6         | 10     | v0.2.7-nightly  | ⭐⭐⭐ (快速迭代)     |
| **NanoClaw**  | 25        | 7      | 无              | ⭐⭐⭐⭐ (稳定迭代)    |
| **NullClaw**  | 1         | 0      | 无              | ⭐⭐ (轻度维护)      |
| **IronClaw**  | 5         | 12     | 无              | ⭐⭐⭐⭐ (稳定迭代)    |
| **LobsterAI** | 4         | 0      | 无              | ⭐⭐ (维护模式)      |
| **TinyClaw**  | 0         | 0      | 无              | ⭐ (无活动)         |
| **Moltis**    | 6         | 10     | v20260426.05    | ⭐⭐⭐⭐ (积极迭代)    |
| **CoPaw**     | 11        | 6      | 无              | ⭐⭐⭐ (稳定迭代)    |
| **ZeptoClaw** | 0         | 0      | 无              | ⭐ (无活动)         |
| **ZeroClaw**  | 50        | 50     | 无              | ⭐⭐⭐⭐ (高活跃度)    |

#### **3. OpenClaw 在生态中的定位**

*   **优势**:
    *   **绝对领导者**: 作为核心参照项目，其 Issue 和 PR 数量远超其他项目，体现了其在社区中的标杆地位和广泛影响力。
    *   **功能广度与深度**: 在语音交互（TTS）、系统稳定性、多平台适配等关键领域持续投入，形成了深厚的技术积累。
    *   **社区参与度高**: Issue 与活跃讨论数量远超关闭量，表明用户持续投入测试新功能，形成了良好的反馈闭环。
*   **技术路线差异**:
    *   OpenClaw 更侧重于构建一个**通用、强大且可扩展的底层框架**，其功能迭代覆盖了从 TTS、网关管理到内存搜索等多个层面，旨在为各种 AI 智能体提供坚实的基础。
*   **社区规模对比**:
    *   OpenClaw 的社区规模明显大于其他项目，这从其庞大的 Issue 和 PR 数量以及活跃的讨论中可以得到印证。它为整个生态设定了基准和方向。

#### **4. 共同关注的技术方向**

*   **多平台/多渠道通信集成**:
    *   **诉求**: 支持更多企业级通信平台（WeCom, Telegram, Matrix, Slack, Signal等），并解决文件上传、线程消息路由、E2EE恢复等具体问题。
    *   **涉及项目**: NanoBot (#3435, #3464), Hermes (#15936, #16077, #4878), ZeroClaw (#4878), CoPaw (#3845, #3837), IronClaw (#2971, #1120)。
*   **模型提供者（Provider）兼容性与标准化**:
    *   **诉求**: 支持更多大模型提供商（DeepSeek, MiniMax, AWS Bedrock, Ollama等），修复 API 格式不兼容问题（如 DeepSeek-V4, Ollama tool_count），并统一处理非字符串内容字段。
    *   **涉及项目**: Hermes (#15936, #16027, #8694), ZeroClaw (#6059, #5459, #5962), NanoBot (#3458)。
*   **系统稳定性与可靠性**:
    *   **诉求**: 修复导致崩溃、CPU 占用过高、日志未正确附加等问题，提升长期运行的系统健壮性。
    *   **涉及项目**: OpenClaw (#72366, #8404), NullClaw (#870), Hermes (#8404, #16257)。
*   **Web UI 体验优化**:
    *   **诉求**: 改善 Web 界面的可用性、可访问性，例如将状态徽章移至显眼位置、修复代码块背景色、支持视频预览、增强会话管理、提供 Token 使用统计等。
    *   **涉及项目**: Moltis (#886, #887, #867), NanoBot (#3430, #3454), NanoClaw (#2037, #2035)。
*   **安全与权限控制**:
    *   **诉求**: 加强技能导入时的安全检查、配置持久化、环境变量隔离、路径守卫等，防止安全漏洞和意外行为。
    *   **涉及项目**: PicoClaw (#1042), Moltis (#882, #885), OpenClaw (#31583), CoPaw (#3817)。

#### **5. 差异化定位分析**

| 项目名称      | 功能侧重                     | 目标用户                         | 技术架构关键差异                  |
| :------------ | :--------------------------- | :------------------------------- | :-------------------------------- |
| **OpenClaw**  | 通用 AI 智能体框架，功能全面 | 追求强大、可扩展性的开发者和企业 | 庞大、复杂的单体/模块化架构        |
| **NanoBot**   | 轻量级、快速部署             | 希望快速搭建聊天机器人的用户     | 简洁、灵活的插件化架构             |
| **Hermes**    | 多平台集成、生产就绪         | 需要稳定、多通道接入的企业用户   | 强调 Gateway 稳定性和事件驱动      |
| **PicoClaw**  | 嵌入式、边缘计算             | IoT、硬件爱好者                  | 轻量化、资源占用低                 |
| **NanoClaw**  | 容器化部署、企业级功能       | DevOps、企业开发者               | 基于 Docker、注重安装与部署流程    |
| **NullClaw**  | 极简主义、基础功能           | 追求简单、无需复杂配置的普通用户 | 最小化设计，功能精简               |
| **IronClaw**  | 基础设施、CI/CD 优化         | 云原生、DevOps 团队              | 强依赖 Railway、关注构建与部署效率 |
| **LobsterAI** | 模型集成、API 调用           | 自定义 API 场景的开发者          | 以模型调用为核心，功能较为单一     |
| **Moltis**    | 技能管理、Web UI 体验        | 重视技能扩展和界面交互的用户     | 强调技能生态和前端现代化           |
| **CoPaw**     | 多模型支持、Web UI 交互      | 需要多模型选择和良好 Web 体验的用户 | 支持多种 LLM 提供商和桌面应用       |
| **ZeroClaw**  | 插件生态、Matrix E2EE        | 注重插件扩展和安全通信的用户     | 强大的插件系统和原生 Matrix 支持   |

#### **6. 社区热度与成熟度**

*   **快速迭代阶段**:
    *   **OpenClaw**: 极高的 Issue/PR 数量，持续发布 Beta 版本，显示出极强的开发动力和社区活力。
    *   **NanoBot & Hermes**: 高活跃度，多个关键功能正在推进，Bug 修复频繁，处于积极演进期。
    *   **PicoClaw & ZeroClaw**: 快速迭代，Nightly 版本更新频繁，功能模块（如事件系统、插件技能）在不断完善。
*   **质量巩固阶段**:
    *   **Moltis**: 发布了新版本，重点在于安全和稳定性修复，社区对快速修复表示赞赏，但也在寻求更多功能增强。
    *   **NanoClaw & IronClaw**: 虽然活跃度不如前者，但持续进行功能增强和稳定性改进，显示出稳健的发展态势。
*   **维护模式/轻度维护**:
    *   **NullClaw & LobsterAI**: 活动较少，Issue 多为长期悬而未决的问题，项目整体处于维护状态，新功能推进缓慢。
    *   **TinyClaw & ZeptoClaw**: 暂无活动，可能处于休眠或停滞状态。

#### **7. 值得关注的趋势信号**

*   **语音交互成为标配**: OpenClaw 的 TTS 全面升级是显著信号，预示着语音回复能力将成为 AI 助手的核心竞争力之一，其他项目虽未直接提及，但未来很可能跟进。
*   **企业级集成需求旺盛**: WeCom、Matrix、Telegram 等企业级通信平台的集成需求频繁出现，表明开发者正致力于将 AI 助手嵌入到企业的现有工作流中。
*   **安全与权限边界日益重要**: 从技能导入安全、环境变量隔离到路径守卫，各项目的 Bug 和 Feature Request 都反映出用户对系统安全性和权限控制的强烈诉求，这是迈向生产环境的关键。
*   **Web UI 体验精细化**: 不仅仅是功能的实现，Web UI 的细节优化（如状态徽章位置、代码块高亮、Token 统计）被高度重视，说明用户体验已成为产品成功的关键因素。
*   **模型提供商生态的繁荣与适配挑战**: 对 DeepSeek、Ollama、AWS Bedrock 等多样化模型提供商的支持需求激增，同时也带来了 API 兼容性、工具调用等适配上的挑战，标准化和抽象层（如 Provider 接口）的重要性凸显。
*   **从“功能实现”到“生产就绪”**: 用户反馈中频繁提到稳定性、配置持久化、跨平台一致性问题，表明社区正在从尝鲜转向实际生产部署，对可靠性和易用性提出了更高要求。

**对 AI 智能体开发者的参考价值**:

对于 AI 智能体开发者而言，这份报告提供了宝贵的市场洞察：
1.  **选择合适的项目**: 根据自身需求（如是否需要嵌入式、企业级通信、WebUI、插件系统）选择合适的开源项目进行参考或贡献。
2.  **把握技术趋势**: 重点关注语音交互、多平台集成、安全与权限、Web UI 体验等方向，这些将是未来 AI 智能体的重要竞争力。
3.  **关注生态成熟度**: 评估项目的活跃度和成熟度，避免陷入长期维护或无活动的“僵尸”项目。
4.  **贡献价值**: 针对报告中提到的共性问题和趋势，积极贡献解决方案或新特性，可以在社区中获得认可并建立个人影响力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-04-27）**

---

### 1. **今日速览**
过去24小时内，NanoBot 项目保持高度活跃状态：共处理 **124 条 PR 更新**（含 104 个待合并提交），同时有 **5 个新 Issue 被提出**。开发节奏显著加快，尤其在会话管理、多 Agent 协作与 WebUI 体验优化方面进展密集。尽管未发布新版本，但代码库稳定性持续加固，多个关键 Bug 得到修复。

---

### 2. **版本发布**
无新版本发布（Releases 为空）。

---

### 3. **项目进展**
今日共有 **6 个 PR 被合并或关闭**，涵盖以下核心方向：

- **会话上下文增强**：PR #3463 和 #3462 分别修复了模型上下文中时间戳暴露不全的问题，并强化了 Slack 线程上下文保留机制，提升了多轮对话的一致性体验。
- **WebUI 媒体渲染支持**：PR #3430 正式合并，新增视频附件的浏览器内嵌播放能力，解决了此前仅图片可预览的问题。
- **Agent 路由逻辑优化**：PR #3465 正在处理子代理在多线程场景下的消息路由归属问题，旨在确保线程内回复能正确返回原始会话线程而非频道级会话。
- **DeepSeek 兼容性修复**：PR #3458 已合并，统一处理非字符串内容字段，避免 DeepSeek API 请求失败。
- **WebUI 交互升级**：PR #3454 合并后，用户可通过点击卡片选择 `ask_user` 响应，且模型设置页面独立化，提升配置便捷性。

> ✅ 整体来看，项目在**会话生命周期管理、跨渠道一致性、前端交互体验**三大方向持续推进，技术债清理效果明显。

---

### 4. **社区热点**
今日最活跃的讨论集中于 **WeCom 文件上传失败**（Issue #3435）与 **子代理线程路由错乱**（Issue #3464）：

- **#3435 [Bug] WeCom 渠道媒体文件上传失败**  
  用户报告当 Bot 尝试发送本地存在的图片时，收到 `[file upload failed: xxxxxx]` 错误。该问题影响企业级微信集成场景，已有开发者标记为“高优先级”。目前尚无对应 PR，需排查 WeCom SDK 的异步文件流处理逻辑。  
  🔗 https://github.com/HKUDS/nanobot/issues/3435

- **#3464 [Bug] Subagent 线程回调路由错误**  
  当使用 Slack 等支持线程回复的平台（`reply_in_thread: true`）时，子代理完成后的通知会错发到主会话而非原线程，破坏用户体验连贯性。此问题由社区成员 mt-huerta 发现，并立即推动 PR #3465 进入 review 阶段，显示社区对线程行为的高度关注。  
  🔗 https://github.com/HKUDS/nanobot/issues/3464

此外，**/history 与 /clear 命令**（PR #3466、#3467）引发广泛关注，因其填补了用户基础交互能力的空白，被评价为“实用小功能，大价值”（👍 虽暂未显式计数，但评论活跃度极高）。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键 Bug 如下：

| Issue | 描述 | 状态 | 相关 PR |
|------|------|------|--------|
| #3455 | OpenAI 兼容 Provider 默认超时为 600s，可能导致 LLM 请求卡死 10 分钟 | 开放 | ❌ 无 |
| #3435 | WeCom 媒体文件上传失败 | 开放 | ❌ 无 |
| #3464 | 子代理线程路由错误 | 开放 | ✅ PR #3465 进行中 |

> ⚠️ **最高风险项**：PR #3455 指出的超时缺陷可能阻塞整个 Agent 循环，建议尽快合并其修复方案。WeCom 文件上传问题亦需优先处理，因涉及主流企业通信场景。

---

### 6. **功能请求与路线图信号**
用户明确提出的需求正快速转化为实现：

- **按渠道细粒度控制 sendProgress/sendToolHints**（Issue #3452）  
  用户希望不同平台（如 Slack vs Telegram）可独立配置进度提示策略。该需求被标记为“good first issue”，表明维护者有意将其纳入短期迭代。结合近期对多通道配置的重视（如 PR #3462 强化 Slack 线程元数据），此功能极可能在下一版本中落地。

- **创建新实例的技能支持**（PR #3457）  
  内置 `create-instance` 技能允许现有 Bot 主动生成新实例，体现 NanoBot 向“自生长型 AI 系统”演进的趋势。配合 WebUI 远程后端（PR #3456），预示未来可能支持零配置部署与自动化运维。

---

### 7. **用户反馈摘要**
从 Issue 中提取的真实痛点包括：

- **企业集成痛点**：WeCom 文件上传失败严重影响企业内部机器人可用性，用户强调“已在 Workspace 存在图片，却收不到”，反映本地资源路径与云端上传机制脱节。
- **交互透明性不足**：用户对 `/help` 冗长输出表示疲惫，PR #3451 提出的 `/ping` 轻量健康检查获得广泛认可，说明“即时反馈”优于“完整文档”。
- **线程体验割裂**：Slack 用户在多线程协作中遭遇消息错位，凸显当前线程上下文绑定逻辑不健全，亟需强化。

总体满意度中等偏上，但对生产环境稳定性（如超时、文件上传）容忍度极低。

---

### 8. **待处理积压**
需警惕以下长期未决项：

- **Issue #3435（WeCom 文件上传）**：创建于 2026-04-25，距今超 2 天，无响应记录，涉及核心通信能力，建议指派专项负责人。
- **Issue #3455（OpenAI 超时缺陷）**：虽技术清晰，但缺乏对应 PR，可能因优先级争议被搁置，应评估是否纳入热修复清单。

> 📌 **行动建议**：维护团队应在本周内对上述两项进行明确响应，避免社区信心流失。

--- 

*数据来源：GitHub API @ HKUDS/nanobot (截至 2026-04-27)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026-04-27）**

---

### 1. **今日速览**
过去24小时内，Hermes Agent 社区活跃度较高，共产生50条 Issue 更新与50条 PR 动态，表明开发与维护团队持续响应社区需求。项目整体运行稳定，无新版本发布，但多个关键 Bug 修复与功能增强正在推进中。GitHub 数据反映出用户对多平台集成、配置灵活性及跨平台兼容性有强烈诉求，尤其在 Telegram、Signal 及 Linux 环境适配方面。

---

### 2. **版本发布**
**无新版本发布**

---

### 3. **项目进展**
今日共处理 **7 个合并或关闭的 PR**，主要集中在网关稳定性、Telegram 平台支持及配置系统优化：

- **[PR #16261](https://github.com/NousResearch/hermes-agent/pull/16261)**：为 Telegram 长回复流引入“最终完成时间戳”机制，解决流式消息编辑时时间显示不准确问题，提升用户体验一致性。
- **[PR #16256](https://github.com/NousResearch/hermes-agent/pull/16256)**：修复 auxiliary client 中 `api_mode` 在显式 base URL 路径下被忽略的问题，并恢复 `key_env` 配置解析，解决自定义提供商认证失败问题（对应 Issue #16254）。
- **[PR #9620](https://github.com/NousResearch/hermes-agent/pull/9620)**：修正 `uv.lock` 中 `web` extra 暴露不全问题，确保依赖管理更可靠，避免静默丢失 web 组件。
- **[PR #14982](https://github.com/NousResearch/hermes-agent/pull/14982)**：实现网关重启时自动恢复进行中会话的功能，提升服务连续性。
- **[PR #15122](https://github.com/NousResearch/hermes-agent/pull/15122)**：过滤非数字 Telegram reply ID，防止因自动恢复机制误用导致消息错乱。

这些改进显著增强了系统的健壮性与跨平台可用性，尤其在复杂消息流和边缘场景下的表现得到优化。

---

### 4. **社区热点**
今日最活跃的议题集中在 **API 兼容性与多模型支持** 上：

- **[Issue #15936](https://github.com/NousResearch/hermes-agent/issues/15936)**：用户请求原生支持 DeepSeek V4 系列模型，强调其百万上下文与推理能力对工程场景的重要性，反映国内开发者对高性能国产模型的迫切需求。
- **[Issue #16120](https://github.com/NousResearch/hermes-agent/issues/16120)**：MiniMax China API 在 `hermes doctor` 检查时报 404，实则为正常行为（该端点不支持 `/v1/models`），暴露出健康检测逻辑需适配不同厂商 API 规范。
- **[Issue #16077](https://github.com/NousResearch/hermes-agent/issues/16077)**：提出引入“Curator”后台技能维护任务，用于自动监控 agent 生成技能的使用情况，获得 3 个点赞，显示社区对自动化技能治理的关注。

此外，[PR #16227](https://github.com/NousResearch/hermes-agent/pull/16227) 提出的“通过单一管理器调度多 Telegram 机器人集群”引发关注，体现用户对高级编排能力的期待。

---

### 5. **Bug 与稳定性**
按严重程度排序的重要 Bug：

| 问题 | 描述 | 状态 | 关联 PR |
|------|------|------|--------|
| **#8404** CLI 模式下 gateway.log 未正确附加 | 日志初始化顺序错误导致 gateway 启动后无法写入日志文件 | OPEN | — |
| **#16027** image_generate 工具因插件发现时机被永久排除 | session 初始化时插件未加载，导致图像生成功能不可用 | OPEN | — |
| **#9721** 无法为自定义 provider 设置 HTTP headers | Cloudflare WAF 拦截因缺少 User-Agent，但 config.yaml 不支持 headers 配置 | OPEN | — |
| **#16257** google_api.py 在 Python 3.9 崩溃 | 缺少 `from __future__ import annotations`，使用 PEP 604 语法不兼容 | OPEN | 待提交 |

其中，**#16257** 已有初步修复思路，其余高优先级 Bug 暂无对应 PR，需尽快介入。

---

### 6. **功能请求与路线图信号**
用户明确提出多项值得纳入路线图的特性：

- **AWS Bedrock 原生支持**（[#8694](https://github.com/NousResearch/hermes-agent/issues/8694)）：请求添加 SigV4 认证支持，替代当前通过 OpenRouter 间接调用。
- **Web Dashboard 中文本地化**（[#9626](https://github.com/NousResearch/hermes-agent/issues/9626)）：针对中文用户的 i18n 需求，已有界面现代化基础，下一步应考虑国际化扩展。
- **Gateway 事件幂等性与 stale response 抑制**（[#16108](https://github.com/NousResearch/hermes-agent/issues/16108)）：来自高频消息平台用户的深度建议，指向下一代 Gateway 架构演进方向。

结合活跃 PR（如 profiles 管理页面 [#16058]），可预见下一版本将加强配置管理与多租户支持。

---

### 7. **用户反馈摘要**
从 Issue 评论中提取的真实反馈包括：

- **正面**：Web Dashboard 被赞“极大提升管理效率”（[#9626]），尤其适合非技术用户使用；gateway 重启恢复功能（[#14982]）获肯定。
- **负面**：CLI 在浅色终端背景完全不可读（[#4807]）遭强烈吐槽，影响基本可用性；Claude 订阅额度提示误导用户重复充值（[#6475]）造成信任损耗。
- **场景痛点**：WSL2 环境下 vision_analyze 频繁超时（[#8120]）；root 用户运行 browser automation 缺乏沙盒支持（[#15765]）。

用户普遍期望 Hermes 向“生产就绪”迈进，尤其在稳定性、文档完整性和跨平台体验上。

---

### 8. **待处理积压**
以下 Issue/PR 超过两周未获维护者明确回应，需优先关注：

- **[Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475)**：Claude 订阅额度异常提示问题（创建于 2026-04-09，最后更新 2026-04-26，27条评论），影响付费用户正常使用。
- **[Issue #8404](https://github.com/NousResearch/hermes-agent/issues/8404)**：gateway.log 未附加问题（创建于 2026-04-12），涉及核心日志机制缺陷。
- **[PR #9629](https://github.com/NousResearch/hermes-agent/pull/9629)**：systemd Python 路径回退修复（创建于 2026-04-14），虽已更新但未获 review，可能阻碍 Linux 部署。

建议维护者在近期集中处理此类长期悬置项，以维持社区信任。

--- 

*数据来源：GitHub API · 统计周期：2026-04-26 00:00 至 2026-04-27 23:59 UTC*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 - 2026年4月27日**

---

### 1. **今日速览**

过去24小时内，PicoClaw 社区保持活跃，共产生6条 Issue 更新和10条 PR 动态，其中发布了 nightly 版本 v0.2.7-nightly.20260426.77be169d。项目整体处于快速迭代阶段，重点围绕 ChatGPT OAuth 支持、MCP 工具兼容性、配置体验优化及运行时事件系统展开。开发者贡献积极，用户反馈集中于功能增强与稳定性提升。

---

### 2. **版本发布**

- **Nightly Build**:  
  [v0.2.7-nightly.20260426.77be169d](https://github.com/sipeed/picoclaw/releases/tag/nightly)  
  本次 nightly 构建为自动化生成，可能包含不稳定变更。主要更新范围从 `v0.2.7` 到 `main` 分支，具体差异见[完整日志](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)。建议用户在测试环境中使用，生产环境请谨慎评估。

---

### 3. **项目进展**

#### 已合并 PR（无）
#### 新关闭 PR
- **[#2672] feat(pico): add structured tool call support to web chat**  
  此 PR 已关闭，此前添加了结构化的 `tool_calls` 支持，并优化了 Web 前端中工具调用信息的展示方式，保留细节并支持折叠显示。为后续 Agent 与 Channel 层级的工具交互打下基础。  
  链接：https://github.com/sipeed/picoclaw/pull/2672

#### 重要开放 PR 推进情况
- **[#2679] fix: enable ChatGPT subscription (OAuth) in picoclaw**  
  正在修复 OpenAI Codex OAuth 模式下 ChatGPT Plus 订阅用户的空响应问题，通过统一使用 `chatgpt.com/backend-api/codex` 端点并正确处理流式 `response.output_text.delta` 实现。该修复将显著提升高级用户使用体验。  
  链接：https://github.com/sipeed/picoclaw/pull/2679

- **[#2681] fix(mcp): sanitize MCP tool schemas for Gemini function calling**  
  针对 Gemini 模型因复杂 JSON Schema 导致的 HTTP 400 崩溃问题，引入共享 schema 清洗器，标准化参数结构以兼容函数调用接口。预计解决多平台 AI 后端集成痛点。  
  链接：https://github.com/sipeed/picoclaw/pull/2681

- **[#2677] Feat/runtime events**  
  新建 `pkg/events` 包，构建统一运行时事件基础设施，迁移 Agent 可观测性机制，支持事件过滤、订阅、背压策略等。标志着监控与调试体系迈向模块化架构。  
  链接：https://github.com/sipeed/picoclaw/pull/2677

---

### 4. **社区热点**

- **[#295] Intelligent Model Routing for Cost & Performance Optimization**  
  自2月起持续活跃，累计10条评论，提出通过智能路由机制根据任务复杂度选择不同成本/性能比的 LLM，避免对简单请求过度消耗 GPT-4o 等高阶模型资源。反映用户对长期经济性与效率优化的强烈诉求。  
  链接：https://github.com/sipeed/picoclaw/issues/295

- **[#1042] exec工具的guardCommand方法问题**  
  用户报告当启用 `restrict_to_workspace=true` 时，`exec` 工具错误拦截合法命令（如天气查询中的 `curl wttr.in/Beijing?T`），误判为路径逃逸。暴露出安全策略过于僵化，影响技能生态实用性。已有5条讨论，亟需精细化路径解析逻辑。  
  链接：https://github.com/sipeed/picoclaw/issues/1042

- **[#2676] add Exa search provider**  
  新提议集成 Exa 搜索服务作为补充检索源，关联 PR #997（已关闭）。提问者询问原 PR 关闭原因，暗示社区对多样化搜索提供商有持续需求，尤其在中文语境下本地化搜索能力薄弱。  
  链接：https://github.com/sipeed/picoclaw/issues/2676

---

### 5. **Bug 与稳定性**

| 严重程度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 中 | [#1042] | `exec` 工具的安全守卫误判相对路径，阻止合法外部调用 | 开放，无修复 PR |
| 低 | [#2628] (CLOSED) | v0.2.7 中“Thinking”提示无法关闭 | 已关闭，推测在 nightly 中修复 |

> 注：[#2628] 虽已关闭，但其反映的配置项命名不一致问题可能仍存在于其他类似设置中，需警惕回归。

---

### 6. **功能请求与路线图信号**

- **Model Routing 功能**（Issue #295）虽未进入当前 Sprint，但作为高优先级 roadmap 议题，结合近期对多 Provider 适配的投入（如 ChatGPT OAuth、Gemini MCP 支持），预示未来将强化智能调度能力。
- **Exa Search Provider**（Issue #2676）表明社区希望扩展搜索能力边界，尤其针对非 Google/Bing 类服务。若 PR #997 实现质量高，有望在下一版本中重新提交。
- **Raspberry Pi Zero 2W 支持**（Issue #2675）提出硬件适配需求，虽属边缘设备，但体现嵌入式场景拓展意图，可能与 Docker Compose 优化（PR #2239）形成协同。

---

### 7. **用户反馈摘要**

- **满意点**：  
  - 用户对夜间构建频繁更新表示认可，认为功能迭代迅速；  
  - 对结构化 `tool_calls` 支持（PR #2672）给予正面预期，期待提升交互透明度。

- **不满点**：  
  - 安全策略过于严格导致实用功能被阻断（Issue #1042）；  
  - 配置项命名混乱（如 `showThoughtsAtom` 重复定义）影响开发体验（PR #2663 提及）；  
  - ChatGPT OAuth 下出现空响应（Issue #2674），影响付费用户正常使用。

---

### 8. **待处理积压**

- **[#1042] exec工具路径守卫问题**：创建超两个月，涉及核心工具安全性与可用性平衡，建议优先安排代码审查并制定精细化路径解析方案。  
  链接：https://github.com/sipeed/picoclaw/issues/1042

- **[#295] 智能模型路由**：作为战略级 Feature Request，需评估技术可行性并规划 MVP 范围，建议召开专项会议明确优先级。  
  链接：https://github.com/sipeed/picoclaw/issues/295

- **[#2239] Docker Compose with privileged**：创建于4月初，仅一次 commit，涉及容器权限配置优化，可能影响部署安全性，需确认是否仍需维护。  
  链接：https://github.com/sipeed/picoclaw/pull/2239

---

**总结**：PicoClaw 今日呈现稳健发展态势，技术债逐步清理，关键模块（如事件系统、OAuth 支持）持续加固。建议重点关注安全策略灵活性提升与多厂商 AI 服务兼容性完善，以进一步增强产品竞争力与用户满意度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 - 2026-04-27**

---

### 1. 今日速览

NanoClaw 在过去24小时内表现出较高的开发活跃度，共处理了25个 Pull Request（PR）更新和7个 Issue。项目整体进展顺利，多个关键功能正在推进中，包括容器资源限制配置、OneCLI远程支持以及Matrix E2EE通道集成。尽管暂无新版本发布，但社区反馈和问题讨论活跃，表明产品处于快速迭代阶段。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

本日内共有 **10个PR被合并或关闭**，涵盖以下重要进展：

- **feat(web): new-agent wizard — create agent groups end-to-end (closes #1)**  
  实现了从Web UI直接创建代理组的端到端流程，无需依赖Claude Code，是“轻松端到端工作”的核心功能之一。  
  🔗 [PR #2037](https://github.com/qwibitai/nanoclaw/pull/2037)

- **feat(setup): advanced settings flow with remote OneCLI support**  
  新增高级设置流，支持用户在安装过程中选择连接远程OneCLI网关，提升部署灵活性。  
  🔗 [PR #2035](https://github.com/qwibitai/nanoclaw/pull/2035)

- **fix(v2): findSessionByAgentGroup prefers most-recently-active session**  
  修复了在多会话场景下，代理间回复可能错乱的问题，确保消息路由到正确的会话上下文。  
  🔗 [PR #2034](https://github.com/qwibitai/nanoclaw/pull/2034)

- **chore: rename NanoClaw to Argus**  
  完成项目名称全量替换，涉及代码、配置文件、容器镜像及环境变量等942处变更，标志着品牌重塑正式落地。  
  🔗 [PR #1738](https://github.com/qwibitai/nanoclaw/pull/1738)

此外，多个稳定性修复也被纳入主干，如工具调用心跳维持、MCP权限动态构建等。

---

### 4. 社区热点

本周最活跃的Issue集中在 **OneCLI安装失败** 和 **域名重定向需求** 上：

- **#2039 / #2038**: 请求将 `pantalaimon.ai` 指向新的Beta注册流程，反映产品即将进入公开测试阶段，需完善前端入口。  
  🔗 [Issue #2039](https://github.com/qwibitai/nanoclaw/issues/2039) | [Issue #2038](https://github.com/qwibitai/nanoclaw/issues/2038)

- **#1973**: v2安装脚本因PATH未传递导致`onecli not found`错误，暴露出子进程环境隔离问题，已有初步分析但未解决。  
  🔗 [Issue #1973](https://github.com/qwibitai/nanoclaw/issues/1973)

这些议题显示出用户对部署体验和产品发布节奏的高度关注。

---

### 5. Bug 与稳定性

以下为今日报告的主要Bug，按严重程度排序：

| Issue ID | 问题描述 | 严重性 | 是否已有Fix PR |
|--------|---------|------|--------------|
| #1973  | v2安装时PATH未传递至bash子进程，导致`onecli not found` | 高 | 否 |
| #2026  | OneCLI.dev返回521错误，影响安装流程 | 高 | 否 |
| #2025  | `nanoclaw.sh`在需要sudo密码时挂起 | 中高 | 否 |
| #2032  | 计划任务绕过wakeAgent检查机制 | 中 | 有（PR #2033已提交） |

其中，#2032已由作者提交PR #2033进行修复，其余高危问题尚无对应补丁。

---

### 6. 功能请求与路线图信号

用户持续推动以下方向的功能增强：

- **容器资源限制控制** (#2029)：允许通过配置限制CPU、内存、PID数量，防止单个代理耗尽主机资源。
- **Matrix E2EE支持** (#1624)：已实现完整集成，预计将成为下一个版本重点推广的新通道类型。
- **跨版本迁移工具** (#1931)：v1→v2自动化迁移实验性实现，显示项目正加强向后兼容性保障。

结合近期PR趋势，下一版本大概率将聚焦于 **稳定性加固、多通道扩展及企业级安全特性**。

---

### 7. 用户反馈摘要

从Issues中提取的关键用户声音如下：

- **痛点集中**：  
  “每次新装Linux都卡在PATH问题”“sudo弹窗导致脚本挂死”，说明基础安装流程仍需优化用户体验。
  
- **使用场景明确**：  
  多数反馈来自Debian/Ubuntu服务器环境，暗示目标用户为企业开发者或DevOps团队。

- **期待方向**：  
  用户强烈希望获得更细粒度的容器管控能力（如资源限制），以及对非主流消息平台（如Matrix）的原生支持。

---

### 8. 待处理积压

以下长期未响应的重要Issue值得关注：

- **#1973**（7天+）：核心安装路径问题，影响大量新用户部署，建议优先安排修复。
- **#1624**（23天）：Matrix E2EE功能已接近完成，可考虑加速合并以丰富通信选项。
- **#1290**（48天）：Docker入口点预校验缺失，可能导致冷启动异常，属潜在稳定性风险。

建议维护者优先处理#1973并评估#1624的合并时机。

--- 

*数据截止：2026-04-27 | 数据来源：[NanoClaw GitHub](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-04-27）**

---

### 1. 今日速览  
过去24小时 NullClaw 社区活跃度较低，仅新增1条活跃 Issue，无新 PR 或版本发布。整体项目运行平稳，但 WSL2 环境下出现高 CPU 占用问题引发关注。维护者响应速度正常，暂无紧急修复动作。GitHub 活动指标显示当前处于轻度维护周期。

---

### 2. 版本发布  
无新版本发布。

---

### 3. 项目进展  
过去24小时内无 Pull Request 合并或关闭，项目功能开发处于静默期。近期最后一次合并 PR 为 #865（优化日志输出），发布于4月24日。当前迭代重点仍在稳定性与兼容性提升阶段。

---

### 4. 社区热点  
**Issue #870：Gateway accept4 busy loop (100% CPU) on WSL2**  
- **链接**: [github.com/nullclaw/nullclaw/issues/870](https://github.com/nullclaw/nullclaw/issues/870)  
- **热度指标**: 1条评论，创建于2天前  
- **分析**: 用户报告在 WSL2 环境中 `nullclaw gateway` 启动后持续消耗单线程 100% CPU，尽管 Telegram 机器人功能正常。该问题暴露了 Linux socket 处理层在 Windows 子系统中的兼容性问题，可能涉及 epoll/kqueue 与 accept4 调用的适配缺陷。虽非功能性阻断，但对 Windows 用户构成显著体验障碍。

---

### 5. Bug 与稳定性  
| 严重等级 | Issue ID | 问题描述 | 状态 |
|--------|--------|--------|------|
| 中 | #870 | WSL2 下 gateway 线程持续占用 100% CPU | 开放中，无 fix PR |

此 Bug 影响特定部署环境（WSL2 + Linux x86_64），需排查 socket 监听逻辑是否因系统调用差异陷入忙等待循环。尚无官方修复提交，建议维护者评估是否需要引入平台条件编译或回退机制。

---

### 6. 功能请求与路线图信号  
暂无新功能请求。Issue #870 隐含对跨平台稳定性的强烈诉求，可能推动后续版本中增加 WSL2 兼容性测试或自动降级策略。结合近期无重大架构变更，推测下一版本（如 2026.5.x）将继续聚焦于边缘场景稳定性而非功能扩展。

---

### 7. 用户反馈摘要  
从 Issue #870 评论中提取关键反馈：  
- **痛点**: WSL2 环境下资源浪费严重，影响本地开发与 CI/CD 效率  
- **使用场景**: 开发者使用 Windows 主机通过 WSL2 运行 NullClaw Gateway 对接 Telegram Bot  
- **满意度**: 功能可用但性能不可接受，用户对跨平台一致性期待较高  
- **建议**: 期望提供明确的 WSL2 支持声明或临时规避方案  

---

### 8. 待处理积压  
**长期未决 Issue**: #870（已开放 2 天）  
- 虽非阻塞性问题，但在特定用户群体中造成困扰  
- 建议维护者在下个维护窗口安排初步复现与根因分析  
- 可考虑添加 `wsl` 标签并关联相关文档更新  

---  
*数据截止：2026-04-27 | 生成时间：UTC 00:00*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

2026-04-27 IronClaw 项目日报

今日速览
今日 IronClaw 项目活跃度保持稳定，共产生5条 Issues 和12条 Pull Requests。核心工作聚焦于依赖更新、CI/CD 优化以及功能增强。整体状态良好，但存在若干生产环境失败的 Canary 测试需关注。项目在基础设施和安全方面有显著进展。

版本发布
今日无新版本发布。

项目进展
PR #2969 (feat(reborn): clean up runtime authority boundaries) 已合并，推进了运行时权限边界的重构，提升了安全性。PR #2964 (merge upstream changes from 0.26.0) 已关闭，完成了上游变更的合并，为后续版本升级做准备。PR #2970 (chore: build Railway from source) 正在推进，将 Railway 构建方式改为从源代码构建，减少对 GHCR 的依赖。

社区热点
Issue #2965 (feat: split into core and vector db) 提出希望支持 Aurora DSQL，以降低运行成本。PR #1120 (feat(prismer): add Prismer Cloud IM WASM channel) 添加了 Prismer Cloud IM 作为 WASM 通道，支持双模式通信。这些议题反映了用户对成本优化和新通信渠道的需求。

Bug 与稳定性
Issue #2968, #2967, #2966 报告了 Live canary 测试失败，涉及 provider-matrix 和 private-oauth，需进一步调查原因。Issue #2963 指出 Docker Hub 镜像缺失，影响用户部署。目前尚无针对这些问题的 fix PR。

功能请求与路线图信号
用户希望支持 Aurora DSQL 作为数据库选项（Issue #2965），这可能在下一版本中实现。PR #1120 添加了新通信渠道，表明项目正积极扩展集成能力。

用户反馈摘要
用户关注成本优化，如 Issue #2965 提到的 Aurora DSQL 支持。同时，Docker Hub 镜像问题（Issue #2963）影响了部署体验，需尽快解决。

待处理积压
Issue #2963 (Docker Hub image missing) 和 PR #1120 (Prismer Cloud IM WASM channel) 需维护者优先处理，以提升用户体验和项目完整性。

链接汇总:
- [nearai/ironclaw Issue #2968](https://github.com/nearai/ironclaw/issues/2968)
- [nearai/ironclaw Issue #2967](https://github.com/nearai/ironclaw/issues/2967)
- [nearai/ironclaw Issue #2966](https://github.com/nearai/ironclaw/issues/2966)
- [nearai/ironclaw Issue #2965](https://github.com/nearai/ironclaw/issues/2965)
- [nearai/ironclaw Issue #2963](https://github.com/nearai/ironclaw/issues/2963)
- [nearai/ironclaw PR #2973](https://github.com/nearai/ironclaw/pull/2973)
- [nearai/ironclaw PR #2972](https://github.com/nearai/ironclaw/pull/2972)
- [nearai/ironclaw PR #2593](https://github.com/nearai/ironclaw/pull/2593)
- [nearai/ironclaw PR #2971](https://github.com/nearai/ironclaw/pull/2971)
- [nearai/ironclaw PR #2970](https://github.com/nearai/ironclaw/pull/2970)
- [nearai/ironclaw PR #2969](https://github.com/nearai/ironclaw/pull/2969)
- [nearai/ironclaw PR #1120](https://github.com/nearai/ironclaw/pull/1120)
- [nearai/ironclaw PR #1941](https://github.com/nearai/ironclaw/pull/1941)
- [nearai/ironclaw PR #2684](https://github.com/nearai/ironclaw/pull/2684)
- [nearai/ironclaw PR #2961](https://github.com/nearai/ironclaw/pull/2961)
- [nearai/ironclaw PR #2960](https://github.com/nearai/ironclaw/pull/2960)
- [nearai/ironclaw PR #2964](https://github.com/nearai/ironclaw/pull/2964)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-04-27）**

---

### 1. **今日速览**
过去24小时内，LobsterAI 项目共更新 4 条 Issue，无新 PR 或版本发布。整体活跃度较低，主要问题集中在模型上下文长度限制、本地路径配置异常及日志调试支持缺失。所有 Issue 均标记为 `stale`，反映社区近期互动趋于沉寂。项目当前处于维护模式，暂无新功能推进迹象。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
过去24小时无合并或关闭的 Pull Request，项目未推进任何功能迭代或修复。

---

### 4. **社区热点**
本周最活跃的 Issue 为 #88（👍: 3），用户强烈建议增加 **Token 使用统计仪表盘** 和 **详细日志输出机制**，以提升自定义 API 场景下的可观测性与调试效率。该诉求源于多个用户在使用非标准接口时遭遇错误但缺乏诊断信息。其次，Issue #60 因涉及 DeepSeek 模型超 Context Length 报错引发关注，凸显大模型集成中输入控制的重要性。

> 🔗 [Issue #88](https://github.com/netease-youdao/LobsterAI/issues/88)  
> 🔗 [Issue #60](https://github.com/netease-youdao/LobsterAI/issues/60)

---

### 5. **Bug 与稳定性**
- **高优先级**：  
  - **Context Length 溢出错误（#60）**：调用 DeepSeek 等大模型时，消息总 token 数超过模型限制（如 131072），导致 API 返回 400 错误。此问题影响正常对话流程，需前端或中间层加入 token 计数与截断逻辑。  
    ✅ *已有讨论但未提交 Fix PR*

- **中优先级**：  
  - **Windows 安装路径混乱（#40）**：指定 D 盘安装后，程序仍向 C 盘写入文件，且 Agent 无法正确识别 Skills 目录，疑似工作目录硬编码或路径解析缺陷。  
    ⚠️ *无解决方案*

- **低优先级**：  
  - **微信公众号内容访问失败（#52）**：用户截图显示接口返回空内容或超时，可能与微信平台策略变更或认证失效相关。  
    ❓ *原因待排查*

---

### 6. **功能请求与路线图信号**
用户明确提出两项关键增强需求：
1. **Token 使用统计可视化**（#88）：建议集成轻量级仪表盘，实时展示各模型调用的 token 消耗，便于成本监控与优化。
2. **结构化日志系统**（#88）：支持按级别（INFO/WARN/ERROR）输出交互细节，尤其针对第三方 API 调用失败场景。

目前无相关功能开发计划，但此类反馈可作为未来版本规划参考，尤其在企业级部署场景中具备较高价值。

---

### 7. **用户反馈摘要**
- **痛点集中点**：  
  - 对外部模型（如 DeepSeek）缺乏透明化 token 管理，用户难以预估超限风险。
  - Windows 环境下安装路径控制不可靠，存在“静默回退到系统盘”行为。
  - 自定义 API 接入困难，错误信息模糊，缺乏日志支持导致调试周期长。

- **满意之处**：  
  用户对 Issue #88 提出的功能建议获得 3 个点赞，表明其意见被认可；部分用户肯定项目基础架构可用性，尤其在技能扩展方面表现灵活。

---

### 8. **待处理积压**
以下 Issue 已超过两个月未获响应，需重点关注：
- **#60**: Context Length 问题持续活跃（最后评论于 4 月 26 日），影响模型兼容性。  
- **#40**: 路径配置缺陷阻碍 Windows 用户正常使用，属体验级阻塞问题。  
- **#52 & #88**: 虽非紧急 bug，但涉及核心可观测性能力，延迟响应可能降低用户信任度。

建议维护者优先评估 #40 和 #60 的技术可行性，并在下个维护周期内给出明确回复或 roadmap 说明。

--- 

*数据源：GitHub LobsterAI Repository (2026-04-27)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

2026-04-27 Moltis 项目动态日报

今日速览
过去 24 小时，Moltis 社区活跃且高效：6 条 Issues（2 新开/活跃，4 已关闭）和 10 条 PR（2 待合并，8 已合并/关闭）的更新节奏表明项目处于积极迭代阶段。一个新版本于昨日发布，结合多个安全、稳定性和 UI 体验的修复与增强，整体健康度良好。社区对技能导入安全和语音 API 密钥存储等议题保持高度关注，相关修复已快速落地。

版本发布
20260426.05
该版本聚焦安全与体验优化，未引入破坏性变更。主要更新包括：语音 API 密钥从明文配置文件迁移至加密凭证存储、本地 LLM 模型支持按需加载以节省内存、技能导入时禁用自动信任所有技能以加强安全检查、聊天状态徽章移至可见工具栏行、代码块高亮背景一致性修复、以及捆绑技能禁用配置逻辑完善。用户无需额外操作即可享受更安全、流畅的使用体验。

项目进展
今日合并/关闭的重要 PR 包括：
- #885 修复语音 API 密钥明文存储问题，将密钥迁移至加密 KeyStore，并引入异步 Vault 集成。
- #883 修复技能仓库安装时的路径解析错误，确保非标准格式仓库的技能正确识别。
- #882 停止 Web UI 导入技能时自动启用所有技能，防止绕过安全检查。
- #886 将聊天状态徽章（如沙箱、MCP 等）移出“更多”模态框，置于显眼工具栏，提升可访问性。
- #879 修复代码块在响应流结束后背景变白的问题，保持深色主题一致性。
这些改进显著提升了安全性、可用性和系统稳定性。

社区热点
当前最活跃的议题是 #888（session 名称不可见/不可编辑）和 #887（支持 PREAMBLE.md 作为模板变量）。#888 源于 #886 的 UI 调整，用户反馈关键会话信息被隐藏，影响工作流；维护者已意识到此副作用，可能需后续补充入口。#887 提出利用现有模板机制支持 PREAMBLE.md，为 prompt 配置提供灵活扩展，体现用户对结构化、可复用配置的持续诉求。

Bug 与稳定性
今日报告的关键 Bug 包括：
- #880（已修复）：技能导入时路径解析失败，导致读取技能时报错；PR #883 已解决。
- #875（已修复）：Web UI 无法禁用捆绑技能；PR #877 和 #878 已修复配置与前端显示不一致问题。
- #881（已修复）：技能仓库导入默认信任所有技能，存在安全风险；PR #882 已禁止自动启用。
- #867（已修复）：语音 API 密钥明文存储于 moltis.toml；PR #885 已迁移至加密凭证存储。
所有高严重性 Bug 均已有对应修复 PR，项目安全性得到加强。

功能请求与路线图信号
用户明确提出的功能需求包括：
- #887 支持 PREAMBLE.md 作为 prompt 模板变量，反映对结构化、可复用 agent 配置的强烈需求。
- #876 添加文件上传按钮，匹配主流 LLM 平台 UX，提升交互便利性。
- #339 增加 zh-TW 本地化支持，显示国际化路线图正在推进。
这些请求与现有模板机制和 UI 现代化方向一致，极有可能纳入近期版本。

用户反馈摘要
用户普遍赞赏快速修复安全漏洞（如技能导入和密钥存储），但也指出 #886 改动导致会话名称丢失，影响工作效率，希望未来能提供更灵活的视图切换选项。部分用户期待更细粒度的权限控制和模板扩展能力，反映出对生产化、企业级使用的深入需求。

待处理积压
长期未响应的重要 Issue/PR 包括：
- #339（zh-TW 本地化）：自 2026-03-05 起开放，尚未合并，建议优先处理以提升东亚用户可用性。
- #876（文件上传按钮）：已开放近一周，目前处于待合并状态，可能需进一步测试或 UX 评审。
建议维护者优先推动这两个功能，以改善用户体验和社区包容性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-04-27）**

---

### 1. **今日速览**  
过去24小时内，CoPaw 社区活跃度较高，共新增11条 Issue 和6个待合并 PR，主要集中在渠道稳定性、模型兼容性与 Web UI 交互问题。无新版本发布，但多个 PR 正在推进关键功能增强与 Bug 修复。整体项目处于稳定迭代期，用户反馈聚焦于生产环境中的配置持久化与消息路由异常。

---

### 2. **版本发布**  
*无新版本发布*

---

### 3. **项目进展**  
今日无已合并 PR，但有6个新提交的 PR 正在审核中：

- **[PR #3848](https://github.com/agentscope-ai/QwenPaw/pull/3848)**: 强化上下文压缩的回退处理机制，防止 LLM 摘要失败导致历史记录丢失，提升长期对话稳定性。
- **[PR #3846](https://github.com/agentscope-ai/QwenPaw/pull/3846)**: 新增对 GitHub Copilot 模型提供商的支持，扩展多平台 AI 接入能力。
- **[PR #3845](https://github.com/agentscope-ai/QwenPaw/pull/3845)**: 修复 QQ 渠道音频消息类型错误，并添加自动语音转文本功能。
- **[PR #3839](https://github.com/agentscope-ai/QwenPaw/pull/3839)**: 重构 XiaoYi A2A 协议实现，优化 WebSocket 连接管理与消息分离逻辑。
- **[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)**: 引入 Tauri 2.x 桌面应用支持，替代旧版 Electrobun 架构。
- **[PR #3733](https://github.com/agentscope-ai/QwenPaw/pull/3733)**: 增强微信渠道日志输出，便于运维人员追踪消息是否成功送达。

这些 PR 体现了项目在**跨平台支持、通道健壮性、用户体验一致性**方面的持续投入。

---

### 4. **社区热点**  
最活跃的 Issue 为 **[#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)**（向量模型配置无法持久化），已有4条评论，反映自托管用户在容器重启后频繁遭遇配置重置问题，严重影响部署体验。其次，**#3843**（会话历史消失）和**#3852**（标签页间对话混乱）均获2条评论，凸显 Web UI 的多实例状态管理缺陷，可能影响企业级多用户协作场景。

---

### 5. **Bug 与稳定性**  
按严重程度排序如下：

| Issue | 描述 | 状态 | 关联 PR |
|------|------|------|--------|
| [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) | 向量模型配置在 Docker 重启后失效 | 🔴 未解决 | ❌ |
| [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 会话历史突然清空，消息跳转至其他会话 | 🔴 未解决 | ❌ |
| [#3852](https://github.com/agentscope-ai/QwenPaw/issues/3852) | 多标签页切换导致对话上下文错乱 | 🔴 未解决 | ❌ |
| [#3851](https://github.com/agentscope-ai/QwenPaw/issues/3851) | DeepSeek thinking 模式引发 MODEL_EXECUTION_FAILED | 🟡 部分缓解 | ✅ (需验证) |
| [#3849](https://github.com/agentscope-ai/QwenPaw/issues/3849) | 控制台回复中途无故消失 | 🟡 未解决 | ❌ |
| [#3847](https://github.com/agentscope-ai/QwenPaw/issues/3847) | `qwenpaw mission` 命令返回 405 + TypeError | 🟡 未解决 | ❌ |

其中，[#3851] 涉及 DeepSeek API 协议适配问题，已有初步理解但未形成修复方案；其余均为高优先级稳定性问题，暂无对应 fix PR。

---

### 6. **功能请求与路线图信号**  
- **[#3844](https://github.com/agentscope-ai/QwenPaw/issues/3844)** 提出“注册 Provider 后自动列出并选择模型”的需求，避免手动逐一注册，显著降低使用门槛——该诉求与当前多模型生态扩展趋势一致，且 **[PR #3846]** 已实现类似自动化逻辑（GitHub Copilot 即自动发现模型），预示未来可能推广至所有 OpenAI 兼容接口。
- 微信渠道的消息截断问题（[#3837]）推动了对“消息聚合发送”机制的需求，可能与 PR #3733 的日志增强协同优化消息流控制。

---

### 7. **用户反馈摘要**  
- **痛点集中点**：  
  - Docker 部署用户抱怨配置非持久化（[#3817]）；  
  - 多任务并行用户遭遇会话混淆（[#3852]）；  
  - 企业用户依赖微信/QQ 等私有渠道，但消息完整性受损（[#3837], [#3840]）。  
- **满意点**：  
  - 社区快速响应新渠道支持（如 XiaoYi 修复见 PR #3839）；  
  - 开源模式下新功能迭代迅速（如 Tauri 2.x 支持）。

---

### 8. **待处理积压**  
- **[Issue #1426](https://github.com/agentscope-ai/QwenPaw/issues/1426)**（Matrix 通道接收失效）：创建于 2026-03-13，最后更新于今日，历时超40天仍未关闭，属长期悬而未决问题，建议优先排查 WebSocket 心跳机制与消息轮询逻辑。  
- 多个高星或无响应 Issue 涉及核心通道稳定性，需警惕技术债务积累风险。

--- 

📌 *数据来源：GitHub API / CoPaw Repository (agentscope-ai/QwenPaw)*  
📅 *报告日期：2026-04-27*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报（2026-04-27）**

---

### 1. **今日速览**
过去24小时，ZeroClaw 社区保持高度活跃，共产生 **50条 Issue 更新** 和 **50条 PR 活动**，整体活跃度处于高位。核心开发聚焦于 Matrix 通信层重构、提供者（Provider）兼容性修复及工具链优化，多个高优先级 Bug 正在推进中。项目未发布新版本，但技术债务清理和功能增强持续推进，生态扩展初见成效。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日关键合并与关闭的 PR 包括：

- **PR #6137**: 修复了 Windows 环境下 `setup.bat` 中的整数溢出、转义错误和标签解析问题，解决了 S1 级安装阻塞问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6137)
- **PR #6144**: 针对 Bedrock Opus 4.7 模型移除不兼容的 temperature 参数，避免 API 调用失败。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6144)
- **PR #6124**: 修正文档站点头部链接指向主仓库而非维护者 fork，提升用户体验一致性。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6124)
- **PR #6141**: 新增插件技能能力支持，允许纯 Markdown 技能包部署，降低第三方开发者门槛。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6141)

此外，**PR #6112** 开启了对 Matrix 通信层的重大重写（基于 matrix-rust-sdk 0.16），标志着底层协议栈升级进入实施阶段，预计将显著提升稳定性和 E2EE 支持。

---

### 4. **社区热点**
最活跃的议题集中于 **多模型提供商兼容性与工具调用机制**：

- **Issue #6059**: DeepSeek-V4 API 格式不兼容导致流式推理失败，影响用户接入主流国产大模型。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
- **Issue #5459 / #5962**: Ollama 提供者硬编码 `tool_count=0`，彻底阻断本地模型工具调用能力，引发强烈不满（👍4次）。已有开发者提交初步修复方向。[链接1](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | [链接2](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)
- **Issue #4878**: Matrix E2EE 恢复流程缺失房间密钥下载，导致加密会话在重置后永久不可用，属 S1 级严重缺陷。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/4878)

另有多项关于 **配置持久化**（如 fallback provider 设置丢失）、**Web UI 编辑错位** 等体验细节问题被高频提及。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键 Bug：

| Issue # | 类型 | 严重度 | 状态 | 相关 PR |
|--------|------|--------|------|--------|
| #6059 | Provider (DeepSeek) | S2 | OPEN | 无 |
| #5941 | Runtime (daemon) | S1 | OPEN | 无 |
| #4842 | Update (aarch64) | S1 | OPEN | 无 |
| #5600 | Provider (Kimi) | S1 | IN-PROGRESS | 无 |
| #6123 | Config (default_model) | S1 | OPEN | 无 |

其中，**Ollama 工具调用失效** (#5459, #5962) 和 **Matrix E2EE 恢复失败** (#4878) 为持续存在的 S1 问题，尚无正式修复 PR，需重点关注。

---

### 6. **功能请求与路线图信号**
用户明确提出以下方向需求，并与当前开发趋势吻合：

- **Webhook 支持 Agent 模式全链路触发** (#3542)：已有 PR #6129 引入工厂自动化角色管理，暗示系统架构向可编程工作流演进。
- **可配置的 reply-intent 预检机制** (#5674, #6067)：社区强烈要求在小模型快速判断 + 超时控制上实现灵活配置，已有 in-progress PR 跟进。
- **插件环境变量白名单** (#5919)：安全加固需求，结合 Phase 2 D2 插件生态扩展，体现对 WASM 运行时安全的重视。

这些诉求表明项目正从“基础 LLM 代理”向“可定制、安全、可扩展的智能体平台”升级。

---

### 7. **用户反馈摘要**
- **痛点集中点**：
  - 本地模型（Ollama、Llama.cpp）工具调用完全失效，挫败本地部署用户。
  - aarch64 设备更新机制返回错误架构二进制，阻碍边缘设备使用。
  - Web UI 配置文件编辑器光标定位不准，影响高级用户操作。
- **正面反馈**：
  - 文档贡献者赞扬新发布的《项目开发指南》提供清晰结构指引。
  - 部分用户肯定插件系统开放性和技能注册机制设计前瞻性。

---

### 8. **待处理积压**
以下为长期未响应的重要 Issue，建议优先介入：

- **#4878**: Matrix E2EE 恢复缺失房间密钥下载（创建于 2026-03-28，评论4，S1）——影响加密通信核心功能。
- **#5459**: Ollama tool_count 硬编码为 0（创建于 2026-04-07，评论4，👍4）——社区期待修复意愿强烈。
- **#4842**: aarch64 架构更新错误（创建于 2026-03-27，评论6）——涉及跨平台兼容性基础。

以上三项均超过两周未获实质性进展或修复方案。

--- 

*数据来源：GitHub @zeroclaw-labs/zeroclaw，截至 2026-04-27 18:00 UTC*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*