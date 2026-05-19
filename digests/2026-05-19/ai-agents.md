# OpenClaw 生态日报 2026-05-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-19 00:37 UTC

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

**OpenClaw 项目动态日报 - 2026年5月19日**

---

### **1. 今日速览**
- OpenClaw 在 2026-05-19 表现出极高活跃度，过去24小时内 Issues 与 PRs 均有500条更新，表明开发社区持续高度参与。
- 共发布 5 个新版本（含 beta），重点聚焦于依赖项升级、Node.js 支持提升至 v22.19 及内部工具链优化。
- 整体项目状态健康，自动化合并流程（ClawSweeper）高效运作，多个低风险修复已自动推进至待审核队列。

---

### **2. 版本发布**

#### **v2026.5.19-beta.1**  
- **更新内容**：
  - Agents: 明确修复应默认采用“清洁的有界重构、精简内部逻辑、显式插件SDK/API弃用路径”。
  - Dependencies: 升级 `@openclaw/proxyline` 至 0.3.3。
  - Dependencies: 更新 Pi 包至 0.75.1，并提升 Node.js 最低支持版本至 v22.19。
- **迁移提示**：用户需确保本地环境满足 Node.js >=22.19，否则可能出现兼容性问题。Pi 相关模块建议同步更新至 0.75.1 以避免潜在运行时错误。

> [Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.1)

---

### **3. 项目进展**

今日重要合并/关闭 PR：

- **#83823**（已合并）：修复技能快照在监听根目录变更时不刷新的问题，提升技能热重载可靠性。
- **#83825**（已合并）：Web UI 删除确认弹窗位置优化，防止滚动容器遮挡。
- **#83824**：新增个人代理场景测试用例，强化对虚假进度声明的检测能力。
- **#83807**：Codex 插件绑定恢复机制增强，解决插件应用缺失时的诊断失败问题。

以上改进显著提升了系统稳定性与用户体验一致性。

---

### **4. 社区热点**

当前最活跃议题集中在以下领域：

- **#50090**（Community Skill Development & ClawHub）  
  呼吁建立开放技能生态体系，提出“写 `SKILL.md` → 发布至 ClawHub → 全局可安装”的愿景，但指出当前落地差距较大，亟需标准化流程与安全审查机制。

- **#45740**（gh-issues skill 注入未过滤 Issue 正文）  
  揭示安全风险：子代理提示中直接嵌入原始 GitHub Issue 内容，可能导致提示注入或敏感信息泄露。已有 12 条评论讨论缓解方案。

- **#51429**（硬编码工作路径 `/Users/wangtao` 被合入）  
  引发对代码审查严格性的质疑，暴露配置硬编码问题，影响多用户部署安全性。

> 链接汇总：[#50090](https://github.com/openclaw/openclaw/issues/50090) | [#45740](https://github.com/openclaw/openclaw/issues/45740) | [#51429](https://github.com/openclaw/openclaw/issues/51429)

---

### **5. Bug 与稳定性**

按严重程度排序的关键问题：

| 优先级 | Issue # | 问题描述 | 是否已有 Fix PR |
|--------|---------|----------|------------------|
| P1     | #51871  | Cron 任务在 Control UI 不显示（回归） | ✅ PR #83637 进行中 |
| P1     | #51593  | WhatsApp 群组中使用 moonshot/kimi-k2.5 触发 HTTP 400“重复 tool call ID” | ❌ 无 |
| P1     | #44905  | Discord 泄露内部 tool-call traces（如 `NO_REPLY`, `to=functions.memory_search`） | ✅ 关联 PR 待审 |
| P2     | #48183  | Feishu 插件监控状态清理不全，httpServers Map 内存泄漏 | ✅ PR #83637 涉及修复 |
| P2     | #45765  | 设置 `OPENCLAW_HOME=~/.openclaw` 导致嵌套目录写入 | ✅ 有回归测试覆盖 |

> 注：P1 问题需优先处理，尤其涉及安全（#44905）与数据丢失（#51871）。

---

### **6. 功能请求与路线图信号**

高频功能诉求反映如下方向：

- **技能生态系统建设**（#50090）：推动第三方技能标准化发布流程，可能纳入下一版本社区支持计划。
- **模型级成本预算控制**（#42475）：网关层实现 per-agent 费用上限，已有原型讨论，预计 Q3 规划。
- **技能优先级配置**（#50199）：解决技能冲突选择问题，PR #52457 已开启相关实现。
- **安全扫描集成**（#45031）：提议对接 AgentShield 进行技能安装前检查，属高风险需求，优先级高。

---

### **7. 用户反馈摘要**

从活跃 Issue 中提取的真实痛点：

- **配置复杂性**：多名用户抱怨环境变量（如 `OPENCLAW_CONFIG_DIR` 含空格报错）增加部署难度（#44599, #45765）。
- **UI 不一致性**：Control UI 工具卡片默认折叠行为与 `verboseDefault=full` 设置不符（#49944）。
- **多语言支持不足**：文件名编码问题长期存在，仅部分解决 UTF-8/Latin-1 场景（#48788）。
- **文档滞后**：Heartbeat IsolatedSessions 特性已在代码实现但未更新至文档（#48920）。

满意点包括：Docker 构建参数灵活性提升（`OPENCLAW_IMAGE_APT_PACKAGES`）、CLI 工具提示增强（#83785）。

---

### **8. 待处理积压**

需维护者特别关注的长期悬置项：

- **#43367**（Multi-agent orchestration instability）：自 3 月起报告并发 agent 添加/配置覆盖、会话锁失败等问题，影响生产稳定性，至今未闭环。
- **#43747**（Memory management chaos）：多名用户反映记忆管理方式不一致（SQLite vs 其他存储），疑似回归，缺乏统一治理策略。
- **#48874**（Multi-Session Architecture RFC）：提出共享 LLM + 隔离会话 + 公共知识库的新架构设想，具前瞻性，等待产品决策。

> 建议本周会议优先评审上述三项，避免技术债累积。

--- 

**数据来源**：[GitHub openclaw/openclaw](https://github.com/openclaw/openclaw)  
**分析师**：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，我将基于您提供的数据生成一份横向对比分析报告。

---

### **AI 智能体与个人 AI 助手开源生态横评报告 (2026-05-19)**

**核心发现：**
*   **两极分化加剧：** 生态内部发展不均衡，OpenClaw、NanoBot、ZeroClaw 等头部项目活跃度极高，而 TinyClaw、ZeptoClaw 等项目则相对沉寂。
*   **安全与稳定性为首要议题：** 各项目的核心进展和 Bug 修复均聚焦于提升系统稳定性、安全性和跨平台兼容性，反映出开发者对生产环境可用性的高度关注。
*   **技能生态系统建设成共识：** 尽管实现路径各异，但“技能”（Skills）或“插件”（Plugins）的标准化、生态化已成为多个项目的共同路线图信号，是未来竞争的关键领域。
*   **垂直场景深耕与通用平台并存：** 既有像 NanoBot 这样专注于特定通信渠道的项目，也有像 OpenClaw 这样试图构建通用智能体框架的平台，满足不同层次用户需求。

---

#### **1. 生态全景**

当前个人 AI 助手/自主智能体开源生态正处于高速发展与激烈竞争的阶段。一方面，以 OpenClaw 为代表的核心项目展现出极高的活跃度和社区参与度，持续进行架构优化和功能迭代；另一方面，NanoBot、IronClaw、CoPaw 等项目也各自在特定领域（如多模态支持、WebUI 体验、企业部署）取得显著进展。整体来看，生态正从早期的概念验证向生产就绪过渡，开发者普遍将系统稳定性、安全机制和多平台集成视为当前最重要的技术攻坚方向。技能生态的构建和开放成为推动生态繁荣的共同愿景，预示着未来的竞争焦点将从单一功能转向平台生态的全面性。

#### **2. 各项目活跃度对比**

| 项目名称      | Issues 数 (24h) | PRs 数 (24h) | Releases (24h) | 健康度评估                     |
| :------------ | :-------------- | :----------- | :------------- | :----------------------------- |
| **OpenClaw**  | 500+            | 500+         | 5 (含 beta)    | **极高活跃，核心参照，自动化高效** |
| **NanoBot**   | 7               | 21           | 无             | **高活跃，稳定迭代，生产化推进** |
| **Hermes Agent**| 50              | 50           | 无             | **高活跃，响应迅速，Bug 闭环快** |
| **PicoClaw**  | 8               | 26           | Nightly Build  | **高活跃，快速响应，社区讨论热** |
| **NanoClaw**  | 4               | 36           | v2.0.64        | **高活跃，关键修复，安全加固**   |
| **NullClaw**  | 1               | 1            | 无             | **低活跃，平稳运行，细节优化**   |
| **IronClaw**  | 36              | 48           | 无             | **极高活跃，Reborn 模块深化**    |
| **LobsterAI** | 0               | 18 (12 merged)| v2026.5.18     | **高活跃，交付导向，UI 优化**    |
| **Moltis**    | 8               | 8            | v20260518.01   | **高活跃，Bug 闭环快，钩子修复**  |
| **CoPaw**     | 31              | 22           | v1.1.8-beta.1  | **高活跃，并发修复，WeChat 关注**|
| **ZeroClaw**  | 76              | 50 (8 merged)| 无             | **极高活跃，基础设施优化**       |
| **TinyClaw**  | 0               | 0            | 无             | **无活动**                      |
| **ZeptoClaw** | 0               | 0            | 无             | **无活动**                      |

#### **3. OpenClaw 在生态中的定位**

**优势：**
*   **核心参照与事实标准：** 作为最活跃的项目，其 Issue、PR 数量和发布频率远超其他项目，成为社区讨论和技术演进的风向标。
*   **高度自动化与工程严谨性：** ClawSweeper 等工具的引入，实现了低风险修复的快速合并，体现了极高的工程成熟度。
*   **全面的依赖升级与兼容性保障：** 频繁且彻底的依赖项升级（如 Node.js v22.19），确保项目与现代技术栈同步，降低长期维护成本。
*   **广泛的议题覆盖：** 从技能生态、安全风险到 UI 优化，几乎涵盖了个人 AI 助手开发的全生命周期。

**技术路线差异：**
*   **深度定制与广度扩展并重：** OpenClaw 不仅关注核心框架的稳定性，更在技能生态、安全审计、模型级成本控制等上层建筑上进行探索，试图构建一个完整的智能体开发与应用平台。
*   **社区驱动 vs. 企业级驱动：** 虽然 Hermes Agent 和 IronClaw 也很活跃，但 OpenClaw 的议题来源更多元，既包含社区提出的开放技能生态愿景，也直面如 GitHub Issue 注入等安全风险，体现出更强的社区包容性和开放性。

**社区规模对比：**
*   **绝对领先：** OpenClaw 的社区规模在数量和质量上均显著高于其他项目。其 Issue 和 PR 的绝对数量是 NanoBot 或 Hermes Agent 的数十倍，表明拥有庞大的用户基础和贡献者网络。

#### **4. 共同关注的技术方向**

*   **技能/插件生态系统标准化：** (OpenClaw #50090, PicoClaw, ZeroClaw #6253)
    *   **诉求：** 建立统一的技能描述规范（如 `SKILL.md`）、发布流程（如 ClawHub）、安装机制和安全性审查，降低第三方开发门槛，丰富平台能力。
*   **系统稳定性与错误恢复：**
    *   **Cron 任务显示/执行问题：** (OpenClaw #51871, ZeroClaw #6739)
    *   **工具调用循环崩溃：** (NanoBot #3901, Moltis #1013)
    *   **钩子系统可靠性：** (Moltis #1012, #1013)
    *   **诉求：** 提升核心调度器、定时任务和异步操作的健壮性，提供清晰的错误提示和优雅的降级策略。
*   **跨平台兼容性与部署便利性：**
    *   **Windows DNS 解析：** (NullClaw #920)
    *   **Docker/WebUI 远程访问：** (NanoBot #3873, #3891, CoPaw)
    *   **Flatpak 安装支持：** (CoPaw #4486)
    *   **诉求：** 解决特定操作系统环境下的网络、沙箱和安全限制，提供多样化的部署选项。
*   **安全机制强化：**
    *   **提示注入防护：** (OpenClaw #45740)
    *   **凭证管理与暴露：** (OpenClaw #51429, Hermes Agent #15895, IronClaw #3753)
    *   **配置硬编码问题：** (OpenClaw #51429)
    *   **诉求：** 构建纵深防御体系，保护用户数据和防止恶意代码执行。

#### **5. 差异化定位分析**

| 项目名称      | 功能侧重                     | 目标用户                         | 技术架构                     |
| :------------ | :--------------------------- | :------------------------------- | :--------------------------- |
| **OpenClaw**  | 通用智能体框架、技能生态       | 开发者、企业用户、生态构建者     | 高度模块化、Node.js 后端     |
| **NanoBot**   | WebUI、多模态支持、生产部署    | 开发者、终端用户                 | Docker、Electron、多 Provider|
| **Hermes Agent**| LLM 代理、Web Portal、性能优化 | 个人用户、开发者                 | Python、Web 前端             |
| **PicoClaw**  | 轻量级、AI 内存系统、通知集成  | 个人用户、小型团队               | Rust/C? (Nightly Build)      |
| **NanoClaw**  | 消息路由、Webhook、多代理通信  | 企业用户、系统集成商             | Go?                          |
| **IronClaw**  | Reborn 身份策略、嵌入服务      | 企业用户、需要细粒度控制的用户   | Rust、Crate 化架构          |
| **CoPaw**     | 多通道消息、计划模式、CLI      | 开发者、B 端用户                 | Python                       |
| **ZeroClaw**  | ACP 协议、技能管理、全球化     | 开发者、企业用户                 | ?                            |
| **Moltis**    | 沙箱执行、钩子系统、内存管理   | 开发者、对安全性要求高的用户     | Go                           |

#### **6. 社区热度与成熟度**

*   **快速迭代阶段 (High Velocity Iteration):**
    *   **OpenClaw:** 持续高频发布，议题广泛，自动化流程完善，处于功能快速扩充和生态构建期。
    *   **NanoBot & Hermes Agent:** 响应迅速，Bug 修复及时，功能持续增强，产品化路径清晰。
    *   **IronClaw & ZeroClaw:** 极高活跃度，核心模块（Reborn, ACP）深度开发，基础设施优化并行，处于产品重大版本前夜。
*   **质量巩固阶段 (Quality Consolidation):**
    *   **NanoClaw & CoPaw:** 虽有高活跃度，但重点偏向关键 Bug 修复、安全加固和用户体验微调，显示出对稳定性的高度重视。
    *   **Moltis:** 快速闭环 Bug，优化核心执行逻辑，强调稳定性和可观测性。
*   **相对沉寂/探索阶段:**
    *   **NullClaw:** 低活跃度，聚焦于细节优化和问题修复，发展节奏较为平稳。
    *   **TinyClaw, ZeptoClaw:** 无近期活动，可能处于开发停滞或战略调整期。

#### **7. 值得关注的趋势信号**

*   **技能即服务的时代来临：** OpenClaw 的 `SKILL.md` 愿景、PicoClaw 和 ZeroClaw 的技能生态改进请求，都指向一个明确的趋势——未来的 AI 智能体平台将是“乐高式”的，核心框架提供基础能力，而丰富的、标准化的技能库将成为吸引用户和构建生态的核心竞争力。
*   **从“可用”到“可靠”的进化：** 所有项目都在积极解决 Cron、定时任务、工具调用循环、钩子失效等问题。这不仅仅是 Bug 修复，更是开发者对 AI 智能体在生产环境中“可靠运行”这一核心诉求的直接回应。
*   **安全与合规成为标配：** 提示注入、凭证泄露、配置硬编码等问题被反复提及并修复，表明安全不再是附加特性，而是构建可信 AI 系统的基石。
*   **多模态与多通道融合：** NanoBot 对图像生成 Provider 的支持、Hermes Agent 的性能优化、CoPaw 的计划模式，都显示出 AI 智能体正在超越文本交互，向更丰富的多模态输入输出和更广泛的通信渠道（微信、飞书、Telegram等）拓展。
*   **云原生与本地部署的平衡：** 容器化部署（Docker）、沙箱技术（Moltis, NanoBot）、Flatpak 支持等，反映了开发者既需要云平台带来的便利，也重视本地部署和数据主权的需求。

**对 AI 智能体开发者的参考价值：**
*   **选择框架时：** 优先考虑那些在技能生态、安全机制、跨平台兼容性方面有明确规划和快速响应能力的框架（如 OpenClaw）。
*   **开发技能时：** 关注社区对技能标准化格式的讨论，提前准备适配主流平台的技能模板。
*   **部署应用时：** 重视项目的生产环境稳定性记录，特别是 Cron 任务、长会话管理等关键功能的表现。
*   **贡献代码时：** 针对高频 Bug 和痛点（如特定操作系统的兼容性问题、安全漏洞）的贡献更容易获得社区认可。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-05-19）**

---

### 1. **今日速览**
过去24小时内，NanoBot 社区保持高度活跃：共处理 Issue 更新 7 条、PR 更新 21 条，无新版本发布。整体开发节奏稳定，重点集中在 WebUI 远程部署支持、图像生成 Provider 扩展及 Agent 执行流程重构。项目活跃度处于健康水平，核心功能迭代持续推进。

---

### 2. **版本发布**
暂无新版本发布。

---

### 3. **项目进展**
本周期（24小时）共有 **10 个 PR 被合并或关闭**，其中重点贡献包括：
- **#3890**: 新增 CLI 模型预设向导功能，提升新用户上手体验；
- **#3899**: 在 WebUI 中引入实时文件编辑活动追踪，增强工具调用可视化能力；
- **#3879 / #3886**: 分别集成 MiniMax 和 Google Gemini 的图像生成接口，显著扩展多模态支持；
- **#3875**: 完善 Docker 部署文档，修复 bwrap 沙箱与 WebUI 访问的配置缺失问题。

上述变更强化了跨平台部署能力、多模态支持边界以及开发者交互体验，标志着系统在生产化部署与生态兼容性方面取得实质性进展。

---

### 4. **社区热点**
本周最受关注的功能需求是 **WebUI 远程部署支持**：
- **Issue #3873**（已关闭）指出 Docker 环境下 `/webui/bootstrap` 仅允许 localhost 请求，阻碍容器化部署；
- 对应 **PR #3891** 提出通过 `bootstrap_allow_from` 配置 CIDR/IP 白名单，实现安全可控的远程访问；
- 另有 **PR #3904** 进一步将“localhost 检查”设为可配置项，避免误拦截合法反向代理流量。

该议题反映用户亟需解决容器化场景下的 WebUI 可访问性问题，当前已有完整解决方案并即将落地。

---

### 5. **Bug 与稳定性**
共发现 **2 个关键 Bug**，均涉及核心交互链路：

| Issue | 严重性 | 描述 | 状态 | Fix PR |
|-------|--------|------|------|--------|
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) | 高 | 微信登录因客户端版本过低失败 | OPEN | 无 |
| [#3901](https://github.com/HKUDS/nanobot/issues/3901) | 中 | X API 任务陷入工具调用循环，超时崩溃 | OPEN | 无 |

此外，图像生成模块存在 **隐式 MIME 类型硬编码问题**（[#3903](https://github.com/HKUDS/nanobot/issues/3903)），已由 **PR #3893** 提出重构方案，正在评估中。建议优先处理微信登录兼容性与 X 任务调度逻辑缺陷。

---

### 6. **功能请求与路线图信号**
用户明确提出的长期需求包括：
- **持久化记忆控制**：[#3885](https://github.com/HKUDS/nanobot/issues/3885) 要求 Dream 系统作业支持全局开关，避免资源浪费；
- **危险命令授权机制**：[#3887](https://github.com/HKUDS/nanobot/issues/3887) 提议在安全策略中增加白名单授权能力；
- **技能加载保护**：[#3847](https://github.com/HKUDS/nanobot/pull/3847) 已通过 skill_load 工具防止 multi-turn 对话中技能内容丢失。

结合近期 Provider 注册机制重构（#3893），可见项目正朝着 **模块化、可扩展、细粒度可控** 方向演进，下一版本有望纳入上述安全与配置优化特性。

---

### 7. **用户反馈摘要**
- **正面反馈**：用户对 Mnemon 记忆集成表示欢迎（[#3888](https://github.com/HKUDS/nanobot/issues/3888)），认可其对会话连续性的改进；
- **主要痛点**：
  - 容器化部署中 WebUI 不可达（多条评论提及 403 / CORS 错误）；
  - 图像生成接口缺乏 MIME 检测导致图片无法渲染；
  - X 自动化任务易陷入无限重试循环，影响稳定性。

用户普遍期望 NanoBot 在易用性（尤其非本地环境）与健壮性（异常恢复机制）上持续优化。

---

### 8. **待处理积压**
以下 Issue/PR 已超过 5 天未获响应，建议维护者优先跟进：

- **#3863**（微信登录 Bug）：高优先级，影响部分用户核心使用场景；
- **#3901**（X 任务循环崩溃）：中等优先级，需排查工具调用终止条件；
- **#3568**（Manifest LLM Router 支持）：自 4 月 30 日提交，涉及新 Provider 架构，可能阻塞相关功能上线。

---

*数据来源：GitHub HKUDS/nanobot @ 2026-05-19 12:00 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026-05-19）**

---

### 1. **今日速览**
过去24小时，Hermes Agent 社区活跃度较高，共处理 Issue 更新 50 条、PR 更新 50 条，无新版本发布。项目整体运行稳定，但存在多个关键 Bug 和用户体验问题亟待修复。开发者响应迅速，多个高优先级问题已提交修复 PR。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日无新合并或关闭的 PR。当前活跃 PR 主要集中在：
- **#28268**：修复 `conversation_loop.py` 中 `_pool_may_recover_from_rate_limit` NameError 错误（关联 Issue #27370），预计将提升 agent 稳定性；
- **#28267**：修复 web portal 中“Change Model”模态框被侧边栏遮挡的问题（关联 Issue #28103），改善用户界面体验；
- **#28265**：引入 speculative context precompression 功能，优化大上下文处理性能。

这些 PR 显示团队正聚焦于核心 agent 流程稳定性、UI/UX 完善及性能增强。

---

### 4. **社区热点**
- **Issue #15895**（Google Gemini CLI 429 错误）：尽管配额充足仍报错，用户反馈强烈（13 条评论，👍3），反映 OAuth 与 API key 双路径认证机制存在不一致性，影响生产环境使用。[查看](https://github.com/NousResearch/hermes-agent/issues/15895)
- **Issue #524**（Agent Migration System）：长期需求呼声高（评论+4），提议首次安装时自动导入 Claude Code、Cursor 等工具配置，显著降低迁移成本。[查看](https://github.com/NousResearch/hermes-agent/issues/524)
- **PR #28268**（修复 NameError）虽无评论，但因关联 P1 Bug 且由内部贡献者提交，被视为高风险快速修复案例。

---

### 5. **Bug 与稳定性**
按严重程度排序：

| 等级 | Issue | 描述 | 状态 |
|------|-------|------|------|
| P1 | [#27370](https://github.com/NousResearch/hermes-agent/issues/27370) | `conversation_loop.py` 调用未定义函数导致崩溃 | ✅ 已提交修复 PR #28268 |
| P1 | [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) | Anthropic 流处理误建 OpenAI 客户端致 15 分钟挂起 | ❌ 暂无 PR |
| P1 | [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) | vision fallback_chain 参数传递错误致静默失败 | ❌ 暂无 PR |
| P2 | [#28103](https://github.com/NousResearch/hermes-agent/issues/28103) | Teal Large 主题下模态框渲染异常 | ✅ 已提交修复 PR #28267 |

其余 Bug 多为平台适配或配置问题，部分已有初步修复方向。

---

### 6. **功能请求与路线图信号**
- **Agent Migration System**（#524）：跨工具链设置迁移需求明确，结合近期 OAuth/auth 相关 Bug 频发，此功能可能纳入 v0.15.0 以提升新用户体验；
- **Speculative Context Precompression**（PR #28265）：主动优化长上下文处理能力，暗示未来版本将加强本地 LLM 支持；
- **Hermes Doctor CLI 命令**（#28223）：诊断工具诉求集中，反映当前日志可见性差，可能作为 v0.14.x 热修复或 v0.15.0 标配。

---

### 7. **用户反馈摘要**
- **痛点**：OAuth 刷新失败、跨平台认证不一致、Windows/macOS 安装脚本缺陷（#28141）；
- **场景**：企业用户使用 WhatsApp/Telegram 群组时需支持“无回复”操作（#28208），避免误发诊断信息；
- **满意点**：Kanban 生命周期钩子（PR #26416）获得开发社区积极评价，体现插件体系扩展性良好；
- **不满点**：TUI 会话泄漏、单次查询未释放资源（#27029, #28255），影响长时间部署可靠性。

---

### 8. **待处理积压**
- **Issue #15895**（4 月 26 日）：Gemini CLI 429 错误持续超 20 天未闭环，涉及核心提供商兼容性，建议优先分配资源验证 OAuth 令牌刷新逻辑；
- **Issue #7746**（4 月 11 日）：Qwen OAuth JSON 解析失败，影响国产模型生态接入，需排查凭证格式差异；
- **PR #26012**（Cron 结构化工单元数据暴露）：虽已更新，但未合并，可能阻碍插件适配器深度集成 cron 任务上下文。

---

*数据来源：GitHub NousResearch/hermes-agent，统计时间：2026-05-19 00:00–24:00 UTC*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

PicoClaw 项目在 2026-05-19 表现出较高的活跃度，过去24小时内处理了26个PR和8个Issue，并发布了最新的 nightly build。社区对新功能的讨论持续活跃，特别是在多通道支持和AI代理内存系统方面。

**版本发布**
- **Nightly Build v0.2.8-nightly.20260518**：这是一个自动化构建版本，可能不稳定。用户应谨慎使用。[查看完整更新日志](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

**项目进展**
- PR #2895: 修复了Seahorse中FreshTail预算超限的问题，确保了上下文预算的正确执行。
- PR #2892: 实现了配置驱动的提供程序流式传输，支持模型端和通道端的双重选择加入。
- PR #2893: 添加了Server酱³ Bot通道支持，增强了通知服务的多样性。
- PR #2885: 将SiliconFlow添加为第一类OpenAI兼容提供程序，提升了模型的兼容性。
- PR #2882: 为聊天代码块添加了独立的复制和折叠控制，改善了用户界面体验。

**社区热点**
- Issue #2894 和 PR #2895: 用户报告了Seahorse Assembler FreshTail预算问题，开发者已迅速响应并提交了修复PR。
- Issue #2874 和 PR #2885: 关于SiliconFlow提供商支持的请求得到了社区的积极响应，并被快速实现。

**Bug 与稳定性**
- Bug #2887: .deb版本在RISC-V上无法与OpenAI模型正常工作，已提交但未修复。
- Bug #2894: Seahorse Assembler FreshTail绕过预算限制，已由PR #2895修复。

**功能请求与路线图信号**
- Feature #2843: 提出为“steering-heavy turns”添加same-agent final turn render功能，已有相关PR #2844在开发中。
- Feature #2884: 请求添加SiliconFlow提供商支持，已由PR #2885实现。

**用户反馈摘要**
- 用户对Seahorse内存系统的改进表示赞赏，但也指出了一些预算管理上的bug。
- 社区对于增加更多通知渠道（如Telegram Business模式和Server酱³ Bot）的需求强烈，显示出对多渠道集成的兴趣。

**待处理积压**
- Issue #2674: Codex OAuth的空助理响应问题已经存在较长时间，需要进一步调查和解决。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026-05-19）**

---

### 1. **今日速览**  
NanoClaw 在昨日保持高度活跃的开发节奏，共提交 **36 个 PR** 和更新 **4 个 Issue**，其中包含一个重要安全修复和多个关键功能增强。项目整体处于稳定迭代阶段，重点围绕 webhook 安全性、数据库一致性及多平台集成展开。新版本 v2.0.64 发布修复了目的地审批流程中的会话状态同步问题，显著提升消息投递可靠性。

---

### 2. **版本发布**  

#### **v2.0.64 正式发布**  
**更新内容：**  
- 修复 `ncl destinations add/remove` 命令在通过审批流后无法立即被接收方识别的问题。此前已批准的 destination 未正确投影到目标代理的本地会话状态中，导致新添加的目的地在调用 `send_message` 时静默失败并返回 `unknown destination` 错误。  
- 此次更新解决了跨代理通信的关键一致性缺陷，提升了多节点部署环境下的操作体验。

**影响范围：**  
无破坏性变更，属于向后兼容的功能修复。建议所有用户升级以避免目的地管理异常。

> 📦 [Release v2.0.64](https://github.com/qwibitai/nanoclaw/releases/tag/v2.0.64)

---

### 3. **项目进展**  

#### **合并/关闭的重要 PR**  
| PR # | 标题 | 类型 | 说明 |
|------|------|------|------|
| #2547 | fix(webhook-server): default-bind to loopback instead of 0.0.0.0 | 安全修复 | 将 webhook 服务器默认绑定至 `127.0.0.1`，防止默认暴露端口至局域网，提升部署安全性。 |
| #2536 | docs(changelog): add v2.0.64 entry | 文档更新 | 补充 changelog 条目，明确记录 v2.0.64 对用户可见的改进。 |
| #2375 | fix(sessions): exclude per-thread sessions from agent-shared lookup | Bug 修复 | 解决混合会话类型导致的误路由问题，避免 GitHub PR 线程消息被错误分发至共享通道。 |

**推进方向：** 安全加固、配置灵活性增强、会话隔离机制完善。

---

### 4. **社区热点**  

#### **高关注度 Issue**  
- **#1503**: nanoclaw.dev SSL 证书失效问题持续引发关注（19 条评论），反映用户对生产环境可用性的担忧。当前尚未提供临时解决方案。  
- **#1984**: 请求支持自定义 OpenAI 兼容端点（如 Codex / OpenCode），已有 6 条评论，体现社区对灵活 LLM 提供商集成的强烈需求。  
- **#2535**: WhatsApp 群组消息因 LID 加密不同步显示为“Waiting for this message”，虽为新报告问题，但涉及核心消息处理链路，可能快速进入修复队列。

> 🔗 [Issue #1503](https://github.com/nanocoai/nanoclaw/issues/1503) | [Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984) | [Issue #2535](https://github.com/nanocoai/nanoclaw/issues/2535)

---

### 5. **Bug 与稳定性**  

| 严重等级 | Issue/PR | 描述 | 状态 |
|----------|--------|------|------|
| 🟠 中等 | #2533 (CLOSED) | 服务重启后 session.container_status 未同步更新 | ✅ 已修复 |
| 🟠 中等 | #2535 (OPEN) | WhatsApp 群组消息因 LID 加密问题无法被解析 | ⏳ 等待分析 |
| 🔵 低 | #2541 (OPEN) | 消息体中误判 `</message>` 结尾标签 | 🚧 有 fix PR 待合并 |

**关键修复进展：**  
容器状态一致性（#2533）已通过代码逻辑优化解决，避免后续运维误判。

---

### 6. **功能请求与路线图信号**  

- **ACP Client Protocol 支持** (#2542)：新增 `acp-client` 代理提供者，允许 NanoClaw 驱动外部遵循 JSON-RPC 2.0 的 AI 智能体，标志项目向开放代理生态拓展。
- **Telegram 反应与回调支持** (#2544)：扩展 Telegram 适配器以支持 `message_reaction` 和 `callback_query`，提升交互丰富度。
- **Poll-loop 精细化控制** (#2406, #2405)：引入 per-message reasoning effort 路由机制，实现轻量响应与深度推理的动态分配，预示将向复杂工作流场景演进。

> 这些 PR 表明下一版本可能聚焦于 **多模态交互增强** 与 **异构代理协同能力**。

---

### 7. **用户反馈摘要**  

- **痛点集中点：**  
  - SSL 证书失效直接影响开发者访问文档和 API 网关，需尽快修复或公告临时方案。
  - WhatsApp 群组成员无法触发 Bot 响应，严重影响实际应用场景落地。
  - 新建 Agent Group 后无法删除（外键约束失败），暴露 CLI 工具链健壮性不足。

- **正面反馈：**  
  多数贡献者认可项目对安全细节的关注（如 CSPRNG 替换 Math.random），以及配置可定制化（WEBHOOK_PORT 等）。

---

### 8. **待处理积压**  

| 类型 | ID | 标题 | 停滞时长 | 建议行动 |
|------|----|------|---------|----------|
| Issue | #1984 | 支持非官方 OpenAI 兼容端点 | ~25 天 | 评估技术可行性，规划实验性支持路径 |
| PR | #2406 | Poll-loop 按消息粒度路由 effort | 10 天 | 已进入 review，接近合并 |
| Issue | #1503 | SSL 证书失效 | ~52 天 | 紧急协调基础设施团队修复 |

> ⚠️ 建议维护者优先处理 #1503 和 #1984，以维持社区信任与功能开放性承诺。

--- 

**总结：** NanoClaw 昨日展现出稳健的技术演进节奏，尤其在安全与配置灵活性方面取得实质进展。社区对新集成（如 ACP、Telegram 增强）表现出高度兴趣，而现有生产环境问题需及时闭环。项目整体健康度良好，具备持续交付高质量版本的能力。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报（2026-05-19）**

---

### 1. **今日速览**  
过去24小时内，NullClaw 项目保持低活跃度状态，共产生1条新 Issue 和1个待合并 PR。整体进展平稳，无版本发布或重大变更。社区关注点集中于 FTS5 内存召回机制的可配置性与 Windows 网络兼容性修复，反映出用户对系统灵活性和跨平台稳定性的持续需求。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
- **PR #920**: `fix(net): fix Windows DNS resolution for non-localhost hostnames`  
  - 作者：chenhlSH  
  - 状态：待合并  
  - 内容：修复了 Windows 平台上非 localhost 主机名解析失败的问题，此前所有非 localhost 地址均返回 UnknownHostName，导致连接远程 LLM 提供者时触发 error.HostResolutionFailed。此问题严重影响 Windows 用户的生产环境可用性。  
  - 贡献价值：显著提升 Windows 平台的网络可靠性与用户体验。[查看 PR](https://github.com/nullclaw/nullclaw/pull/920)

该项目在跨平台兼容性和网络层稳定性方面取得关键进展，为后续多平台部署铺平道路。

---

### 4. **社区热点**  
- **Issue #919**: [Feature Request] Allow disabling automatic memory recall (FTS5) per-message  
  - 作者：weissfl  
  - 诉求：当前 `enrichMessageWithRuntime()` 函数对所有传入消息强制启用 FTS5 + BM25 全文搜索与上下文召回，参数硬编码且不可配置。用户请求提供禁用该行为或按消息粒度控制的机制。  
  - 背景：默认召回限制（5条）、上下文字节上限（4KB）等设置缺乏灵活性，可能影响性能或干扰特定场景下的交互流。  
  - 社区影响：虽暂无评论或点赞，但作为功能增强类 Issue，可能反映部分高级用户对“零侵入式智能”的偏好。[查看详情](https://github.com/nullclaw/nullclaw/issues/919)

该议题揭示了 NullClaw 在“智能增强 vs. 用户控制”之间的设计张力，未来版本需权衡自动化体验与可配置性。

---

### 5. **Bug 与稳定性**  
- **Bug 报告（Windows 平台 DNS 解析失效）**  
  - 问题描述：在 Windows 系统下，任何非 localhost 的主机名均无法解析，导致连接外部 LLM 服务失败。  
  - 严重程度：高（影响核心功能可用性）  
  - 状态：已有修复方案（PR #920），等待审查合并  
  - 根本原因：net.zig 中未正确处理 Windows 的 getaddrinfo 返回逻辑  

此 Bug 已在今日得到针对性修复，预计将随下次提交合并上线，有效提升 Windows 用户的使用保障。

---

### 6. **功能请求与路线图信号**  
- **Issue #919 提出“细粒度召回控制”需求**，建议允许开发者或用户按消息禁用自动记忆检索。  
  - 潜在实现路径：引入 per-message flag 或全局配置开关，结合 FTS5 引擎的可插拔设计。  
  - 关联性：与项目“轻量级 AI 助手”定位一致，强调可控性与资源效率。  
  - 路线图信号：表明 NullClaw 正探索从“全量智能”向“按需激活”演进，符合现代边缘 AI 应用趋势。

该请求若被采纳，将成为项目架构灵活性的重要里程碑。

---

### 7. **用户反馈摘要**  
- 用户 weissfl 指出：“当前自动召回机制是‘黑盒式’运行，缺乏透明度与控制权，尤其在需要精确对话管理的场景中造成干扰。”  
- 痛点集中在：  
  - 无法关闭内存增强功能  
  - 参数不可调（如召回条数、上下文大小）  
  - 对性能敏感场景（如高频短会话）不友好  
- 隐含诉求：希望 NullClaw 在保持智能优势的同时，提供更贴近开发者的可编程接口。

反馈体现用户对“可解释AI”与“用户主权”的日益重视。

---

### 8. **待处理积压**  
经核查，当前无长期未响应的重要 Issue 或 PR。所有活跃条目均在24小时内创建，维护响应及时，项目健康度良好。

--- 

📌 *数据来源：GitHub API | 生成时间：2026-05-19*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-05-19）**

---

### 1. **今日速览**
过去24小时内，IronClaw 项目保持高度活跃状态，共处理了36条 Issue 更新和48条 PR 更新，无新版本发布。核心贡献者持续推动 Reborn 功能模块的深化开发，重点集中在身份上下文策略、嵌入服务重构及生产环境运行时集成。社区反馈中暴露若干嵌入配置与错误提示的 UX 问题，已触发针对性修复 PR。整体开发节奏稳健，Reborn 产品化路径持续推进。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
**合并/关闭的重要 PR：**
- **PR #3721**：实现“基于运行配置文件的个人上下文策略门控”，为 Reborn 引入细粒度 `personal_context_policy`，支持按 run profile 控制 USER.md 等身份文件的访问权限，显著增强安全边界。
- **PR #3739**：将嵌入功能（OpenAI/NearAI/Ollama/Bedrock）提取至独立 crate `ironclaw_embeddings`，提升模块化与可维护性，同时暴露多个嵌入相关 bug，推动后续快速迭代。
- **PR #3764 / #3361**：依赖项批量升级，涵盖 agent-client-protocol、tokio 生态及 postgres-types 等关键库，修复潜在 CVE 并提升兼容性。
- **PR #3682**：修复 canary 测试流水线误报问题，准确统计测试执行结果，强化 CI 可靠性。
- **PR #3765 / #3766 / #3767**：完善安全层建设，新增 `AuthorizedDispatchRequest` 类型保障能力调度授权，`NoExposureGuard` 提供边界文本检查，并保留文件系统错误类型信息以支持精准诊断。

这些进展表明项目在架构解耦、安全性加固和生产就绪度方面持续迈进。

---

### 4. **社区热点**
- **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**：用户反映 crates.io 上仅发布至 v0.24.0，导致下游因 wasmtime 28.x CVE 被锁定旧版本。该问题自5月初提出，持续获得关注，虽未闭环但已推动内部协调发布流程优化。
- **[PR #3739](https://github.com/nearai/ironclaw/pull/3739)**：提取嵌入服务为独立 crate 引发连锁反应，暴露出多个嵌入配置逻辑缺陷（如 Bedrock 忽略模型设置、未知 provider 路由到 OpenAI），成为今日最高频讨论的技术焦点。
- **[Issue #3607](https://github.com/nearai/ironclaw/issues/3607)**：Reborn WebUI Beta 主跟踪 issue，定义 WebChat v2 产品边界与发布路径，本周仍保持活跃规划，体现团队对 Reborn 产品化的坚定投入。

---

### 5. **Bug 与稳定性**
按严重程度排序：
1. **[#3750] Bedrock embeddings ignore DB/TOML model setting**（高）：违反配置优先级规则，直接导致生产环境模型选择失效。
2. **[#3754] OpenAI embeddings double-up /v1 when base_url ends with /v1**（中）：URL 拼接错误，影响自定义端点用户。
3. **[#3753] ironclaw doctor: Bedrock falls through to OPENAI_API_KEY check**（中）：凭证验证逻辑错误，误导用户。
4. **[#3751] Unknown embedding provider names silently route to OpenAI**（中）：静默降级行为易引发调试困难。
5. **[#3729] tool_install failure shown as success after page refresh**（低）：前端状态同步缺陷，用户体验受损。

以上问题均在 **PR #3739** 审查过程中被发现，并已有明确修复方向，预计将在近期合并。

---

### 6. **功能请求与路线图信号**
- **[#3763] Per-user / per-tenant tool enable/disable in web UI**：明确提出细粒度工具权限管理能力需求，符合多租户场景趋势，虽标记 P2，但技术基础已在 PR #1378（路由过滤）中铺垫。
- **[#3762] Editing AGENTS.md in UI not updating system prompt**：揭示身份文件热重载机制缺失，与 Reborn 上下文策略演进强相关，可能纳入下一版本优先级调整。
- **[#3692] Reborn: add policy-gated personal identity and heartbeat prompt context**：长期任务，本周推进身份策略门控落地，显示 Reborn 身份治理路线图正逐步兑现。

结合当前 PR 活动，预计下一版本将强化身份、嵌入与多通道适配能力。

---

### 7. **用户反馈摘要**
- **痛点集中点**：
  - 嵌入服务配置混乱，尤其跨提供商（Bedrock/OpenAI）时缺乏清晰指引；
  - UI 状态不一致（tool_install 成功/失败显示错乱）；
  - AGENTS.md 编辑后系统 prompt 不更新，造成“配置无效”误解。
- **正面信号**：
  - 用户对 Reborn WebUI Beta 架构透明度表示认可（[Issue #3607](https://github.com/nearai/ironclaw/issues/3607) 获积极跟进）；
  - 依赖项升级及时，缓解安全顾虑。

---

### 8. **待处理积压**
- **[Issue #3259] Publish releases beyond v0.24.0 to crates.io**：已超两周未解决，影响下游集成，建议优先安排发布流程自动化或手动补发。
- **[Issue #3068] Preserve brokered HTTP credential injection for Reborn cutover**：作为 Reborn 上线关键阻塞项，自4月底提出，虽持续有进展但未闭环，需明确排期。
- **[Issue #3622 / #3620] Reborn: verify tool result completion evidence & convert tool calls**：涉及工具结果可信性与输出格式转换，技术复杂度高，建议分配专项资源攻坚。

--- 

*数据来源：GitHub nearai/ironclaw 仓库，截至 2026-05-19 24h 窗口。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-05-19）**

---

### 1. 今日速览

LobsterAI 在 2026-05-18 表现出较高的开发活跃度，共完成 18 个 Pull Request，其中 12 个已合并，涵盖功能增强、UI 优化与依赖升级。当日发布新版本 `2026.5.18`，标志着一个完整迭代周期的结束。整体 Issue 活动为零，表明当前焦点集中于代码交付而非问题修复或需求讨论，项目处于稳定推进阶段。

---

### 2. 版本发布

**LobsterAI v2026.5.18**  
本次发布包含多项用户体验改进与底层兼容性修复。主要特性包括：
- **新增按模型独立配置上下文窗口（Context Window）的功能**，支持非线性刻度调节，上限扩展至 2M tokens，提升大模型适配灵活性；
- **重构模型设置界面布局**，改为水平结构并增加字段提示，增强可读性；
- **修复非 ASCII MCP 服务器名称在 OpenClaw 中的哈希兼容性问题**，确保中文/日文字符名可被正确识别；
- **优化 Markdown 预览资源路径解析机制**，解决本地图片相对路径显示异常问题。

> ⚠️ **注意**：部分 UI 元素样式微调可能影响主题一致性（如模态框遮罩范围变化），建议测试者关注视觉回归。无破坏性 API 变更，无需强制迁移。

---

### 3. 项目进展

今日共处理 18 个 PR，其中 12 个已完成合并，重点推进方向如下：

- **核心功能增强**：PR #2001 实现“按模型独立设置上下文窗口”，是本次发布的核心功能之一，显著提升多模型场景下的配置自由度。
- **UI/UX 精细化打磨**：PR #2004 将模型设置模块拆分为独立组件，提升代码可维护性；PR #2005 将 DREAMING 开关统一为标准滑动控件，强化交互一致性；PR #2007 恢复新建任务页背景色，修复主题错位问题。
- **依赖安全与维护**：PR #1277 升级 Electron 相关依赖至 42.x 系列，提升桌面端运行稳定性；PR #2003 升级 moltbot-popo 插件至 2.1.8，保障 IM 通道消息正常收发。
- **底层兼容性修复**：PR #2006 解决 OpenClaw 对含非 ASCII 字符的 MCP 服务器名称无法识别的问题，通过 MD5 哈希生成稳定别名。

整体来看，团队正稳步推进产品体验优化与架构解耦，无明显技术债务堆积。

---

### 4. 社区热点

截至今日，Issues 无新增或活跃讨论，PR 中亦未出现高互动（评论 ≥1 或 👍 ≥1）条目。所有 PR 均为自动化工具（如 dependabot）或由内部开发者提交，缺乏外部用户直接反馈。推测当前社区参与度仍较低，或聚焦于企业级内部使用，尚未形成公开生态互动高峰。

---

### 5. Bug 与稳定性

当日无新报告 Bug 或崩溃事件。但 PR #2002 提及的 **Markdown 预览本地资源路径解析失败** 问题已通过修复合并，此前可能存在用户在使用本地图片时遇到显示异常的情况。此外，PR #2007 修复了因类名误改导致的背景色不一致问题，属轻度 UI 回归，已闭环。

目前无高危或阻塞性问题待处理。

---

### 6. 功能请求与路线图信号

虽无新 Issues 提出明确功能诉求，但从近期 PR 可见以下趋势：
- **会话管理增强**：多个 stale PR（如 #752 /compact 命令、#755 导出为 Markdown/JSON）持续更新，表明“历史记录归档”与“协作流程压缩”是潜在路线图重点；
- **性能优化持续投入**：#749 提议对 Cowork 组件进行 memoization 优化，#811 已实现 O(n)→O(1) 消息查找加速，反映团队重视大规模会话下的渲染性能；
- **国际化与多平台适配**：PR #755 已集成导出功能的 i18n 翻译，暗示未来可能加强多语言支持。

综合判断，下一版本有望纳入会话压缩、导出能力及进一步优化渲染效率。

---

### 7. 用户反馈摘要

由于 Issues 完全沉寂，暂无直接用户评论可提取。但从 PR 描述中可间接感知：
- 用户对 **模型设置混乱** 和 **DREAMING 开关样式不统一** 存在隐性不满，驱动了 UI 重构；
- 对 **MCP 服务器命名兼容性** 和 **Markdown 图片加载失败** 等细节问题敏感，说明终端用户在真实场景中频繁使用这些功能；
- 整体反馈偏技术向，未体现情感化表达，符合 B 端工具型产品的典型特征。

建议后续建立轻量反馈通道（如嵌入式问卷）以捕捉一线体验痛点。

---

### 8. 待处理积压

重点关注以下长期未决（创建于 3 月底，最后更新于 5 月 18 日）且标记为 `[stale]` 的 PR：

- **PR #748**：重构平台配置处理器为工厂模式，减少重复代码，提升可维护性。  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/748)
- **PR #749**：为 Cowork 流式组件添加 React.memo 优化，防止冗余重渲染。  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/749)
- **PR #752**：实现 `/compact` 命令与自动压缩机制，优化长会话内存占用。  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/752)
- **PR #755**：支持聊天记录导出为 Markdown 与 JSON，便于归档分享。  
  [链接](https://github.com/netease-youdao/LobsterAI/pull/755)

这些 PR 均具明确价值但长期停滞，建议维护者优先评审合并，避免技术债累积。

--- 

*数据来源：GitHub @netease-youdao/LobsterAI (2026-05-18)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报（2026-05-19）**

---

### 1. **今日速览**

Moltis 在 2026-05-18 表现出高活跃度：共处理 8 个 Issue 与 8 个 PR，其中 7 个 Bug 被及时关闭并对应快速修复。新版本发布稳定，关键安全/配置类问题得到闭环。社区反馈集中在执行环境、钩子机制与内存管理三大方向，整体维护响应迅速，项目健康度良好。

---

### 2. **版本发布**

**v20260518.01**  
本次发布聚焦于稳定性与安全性补丁，无破坏性变更。主要更新包括：  
- 修复 `slacrawl` Go 模块路径不一致问题（#1021）  
- 优化 heredoc 危险命令扫描逻辑，避免误报（#1019）  
- 恢复 `BeforeAgentStart` 钩子调度（#1017）  
- 支持 `<thought>` 推理标签解析（#1016）  
- 防止 Coqui TTS 默认值在启动时被清除（#1015）  
无需迁移操作，建议用户升级以获取完整修复。  
[Release Link](https://github.com/moltis-org/moltis/releases/tag/20260518.01)

---

### 3. **项目进展**

今日合并的 PR 全面覆盖近期高频 Bug 场景：

| PR | 类型 | 贡献者 | 核心改进 |
|----|------|--------|----------|
| #1021 | fix(sandbox) | penso | 修正 `slacrawl` 嵌入路径，确保技能安装一致性 |
| #1019 | fix(tools) | penso | 修复 heredoc 体内误判为危险命令的问题 |
| #1018 | fix(agents) | penso | 使 `BeforeLLMCall` 钩子的 payload 修改生效 |
| #1017 | fix(agents) | penso | 恢复 `BeforeAgentStart` 钩子调用，修复 April 重构导致的丢失 |
| #1016 | fix(providers) | penso | 新增对 `<thought>...</thought>` 推理标签的支持 |
| #1015 | fix(config) | penso | 阻止启动时自动清理显式默认值（如 Coqui TTS） |

所有 Bug 均有对应 PR 在当日合并，修复周期极短，体现工程响应效率。

---

### 4. **社区热点**

当前最活跃议题集中于 **钩子系统可靠性** 与 **执行环境安全性**：

- **Issue #1012 / #1013**：用户报告关键生命周期钩子失效（`BeforeAgentStart` 未触发，`BeforeLLMCall.modify` 被静默丢弃），直接影响自定义中间件开发。此问题由同一作者 `dmitriikeler` 提交，并在当日通过 PR #1017 和 #1018 修复，显示社区对可观测性与扩展性高度敏感。
- **Issue #1014**：危险命令正则表达式在 heredoc 中误报，影响脚本编写体验。PR #1019 已合并，表明社区重视沙箱安全边界。

链接汇总：  
[#1012](https://github.com/moltis-org/moltis/issues/1012) · [#1013](https://github.com/moltis-org/moltis/issues/1013) · [#1014](https://github.com/moltis-org/moltis/issues/1014)

---

### 5. **Bug 与稳定性**

按严重程度排序的关键 Bug：

| Issue | 描述 | 严重性 | 状态 | 对应 PR |
|------|------|--------|------|---------|
| #1012 | `BeforeAgentStart` 钩子永不触发 | 高（破坏扩展能力） | ✅ Closed | #1017 |
| #1013 | `BeforeLLMCall.modify` 修改被丢弃 | 高（功能不可用） | ✅ Closed | #1018 |
| #1014 | DANGEROUS_PATTERN_DEFS 在 heredoc 中误报 | 中（干扰合法操作） | ✅ Closed | #1019 |
| #1006 | Coqui TTS 默认值在 auto-compact 后消失 | 中（配置丢失） | ✅ Closed | #1015 |
| #1007 | Gemma-4-31b-it 的 `<thought>` 未被识别为推理块 | 中（输出异常） | ✅ Closed | #1016 |
| #1020 | Docker 沙箱镜像预构建失败 | 高（部署障碍） | ✅ Closed | #1021 |

全部问题均在 24 小时内闭环，无遗留高危漏洞。

---

### 6. **功能请求与路线图信号**

新提出的长期需求：

- **Issue #1011**：提议实现 per-turn `tool_choice` 与 `active_tools` 过滤机制，以增强小模型路由鲁棒性。该需求来自生产环境反馈，强调“漂移抵抗”（drift-resistant routing），暗示未来可能引入动态工具调度策略。虽尚未有实现 PR，但语言模型分层部署趋势明显，值得关注。

链接：[#1011](https://github.com/moltis-org/moltis/issues/1011)

此外，两个开放 PR 显示内存系统正在演进：

- **PR #1010**：允许 `memory_save/delete` 写入嵌套子目录及集合感知路径，适配 QMD 后端灵活性。
- **PR #1009**：改进 `run_with_timeout` 的进程终止行为，防止 QMD 子进程泄漏。

二者均指向 **内存管理与异步资源回收** 成为下一阶段重点。

---

### 7. **用户反馈摘要**

从 Issue 内容提炼真实痛点：

- **配置持久性问题**：用户抱怨 Coqui TTS 设置（如本地 HTTP 地址）在启动后被清除，影响离线语音合成部署（#1006）。
- **钩子文档与实践不符**：官方文档称 `BeforeLLMCall` 支持修改载荷，实际却静默忽略，导致开发者困惑（#1013）。
- **安全扫描过度敏感**：heredoc 内的 heredoc 体内容被当作危险命令处理，阻碍复杂脚本编写（#1014）。
- **推理输出格式混乱**：Gemma 系列模型的 `<thought>` 标签未被正确剥离，导致文本与语音输出混杂（#1007）。

总体情绪偏负面但建设性强，用户期望更高一致性与文档准确性。

---

### 8. **待处理积压**

目前无明显长期积压项。但需注意：

- **Issue #858**（Heartbeat 循环重放）创建于 2026-04-24，虽已关闭，但其涉及核心调度逻辑，建议后续增加压力测试用例以防回归。

其余 Issue 均在 1–2 天内处理完毕，维护团队响应高效。

--- 

*数据来源：GitHub API · moltis-org/moltis · 2026-05-19*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是基于 GitHub 数据的 CoPaw（agentscope-ai/CoPaw）项目于 **2026-05-19** 的项目动态日报，由 AI 智能体分析师生成：

---

### 1. **今日速览**

过去 24 小时内，CoPaw 项目保持较高活跃度，共产生 **31 条 Issue 更新** 与 **22 条 PR 活动**，并发布了一个测试版本 `v1.1.8-beta.1`。社区参与度良好，多个高优先级 Bug 被修复，同时新增多项功能优化与插件生态扩展。整体项目处于稳定迭代期，用户反馈集中于模型兼容性、WeChat 通道稳定性及 UI 交互体验。

---

### 2. **版本发布**

#### 📦 Release: `v1.1.8-beta.1`

- **发布时间**：2026-05-18  
- **主要更新内容**：
  - 版本号升级至 `v1.1.8b1`（自动化脚本触发）。
  - 增强计划模式（plan mode）对用户消息的确认机制，提升多轮任务连贯性。
  - 修复浏览器工具实现中的潜在异常处理问题（#4346, #4198, #4347）。

> ⚠️ **注意**：此为预发布版本，建议开发者用于测试新功能，生产环境请继续使用 v1.1.7 或更早稳定版。

---

### 3. **项目进展**

#### ✅ 合并 / 关闭的重要 PR

| PR # | 标题 | 贡献者 | 影响 |
|------|------|--------|------|
| [#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) | Fix: 替换全局 LLM 限流器为按模型实例隔离 | @rayrayraykk | 解决“聊天无响应”问题（#4469），显著提升并发稳定性 |
| [#4488](https://github.com/agentscope-ai/QwenPaw/pull/4488) | Fix: 升级 chat 组件修复 SSE 连接泄漏 | @zhijianma | 解决页面切换后流中断问题，改善前端性能 |
| [#4476](https://github.com/agentscope-ai/QwenPaw/pull/4476) | Fix: 增加 per-model token usage 聚合 | @zhijianma | 完善计费与监控能力 |
| [#4492](https://github.com/agentscope-ai/QwenPaw/pull/4492) | Fix: OpenAIProvider 连接测试携带 extra_headers | @Andrai985 | 支持第三方 API 自定义鉴权头 |

> 🔍 **关键进展**：核心通信层（SSE、LLM 调度、Provider 鉴权）稳定性大幅提升，为多租户与企业部署打下基础。

---

### 4. **社区热点**

#### 🔥 讨论最活跃 Issues

1. **[#2291] Help Wanted: Open Tasks — Come Contribute!**  
   - **评论数**: 62 | **状态**: OPEN  
   - **诉求**: 公开任务看板，鼓励社区认领开发任务（P0–P2），推动插件生态建设。  
   - [查看链接](https://github.com/agentscope-ai/QwenPaw/issues/2291)

2. **[#4469] 聊天窗口无响应，持续显示“三个点”**  
   - **评论数**: 17 | **状态**: CLOSED（已由 #4487 修复）  
   - **背景**: 多用户报告 WeChat/Docker 环境下 LLM 调用阻塞，怀疑与限流器设计缺陷有关。  
   - [原始 Issue](https://github.com/agentscope-ai/QwenPaw/issues/4469)

3. **[#4477] WeChat iLink 定时任务因 context_token 过期失败**  
   - **评论数**: 7 | **状态**: OPEN  
   - **痛点**: 缓存 token 失效后无重试机制，文件推送静默失败。需紧急优化错误恢复逻辑。  
   - [查看详情](https://github.com/agentscope-ai/QwenPaw/issues/4477)

> 💡 **趋势观察**：用户高度关注 **跨平台消息通道可靠性**（尤其微信）和 **长会话上下文管理**，反映产品在 B 端集成场景下的关键瓶颈。

---

### 5. **Bug 与稳定性**

#### ❗ 严重问题排序（含修复状态）

| 问题描述 | Issue # | 严重程度 | 是否已修复 |
|----------|--------|----------|------------|
| WeChat 定时任务因 token 过期失败且无重试 | #4477 | 🔴 High | ❌ 待处理 |
| 插件工具函数未注入 Agent Toolkit | #4485 | 🟠 Medium | ❌ 待处理 |
| AGENTS.md 加载内置模板而非实际文件 | #4496 | 🟠 Medium | ❌ 待处理 |
| 流式输出中途卡顿，UI 误报“你打断了我” | #4494 | 🟠 Medium | ❌ 待处理 |
| GBK 编码导致 Windows 控制台乱码 | #4481 | 🟢 Low | ⚠️ 已有补丁但未系统化 |

> 🛠️ **建议行动**：优先处理 #4477（影响企业用户自动化流程），其次 #4485（阻碍插件生态发展）。

---

### 6. **功能请求与路线图信号**

#### 🚀 新功能需求汇总

- **会话管理增强**（来自 @hyper0x）：
  - 支持删除单条对话（#4437）
  - 支持会话拆分与转移（#4436）
  - 显示对话轮次与 Token 估算（#4435）
  - ▶️ **关联 PR 活跃**：暂无直接对应 PR，但符合下一版本 UX 优化方向。

- **CLI 现代化**（来自 @Eggiverse）：
  - 提议用 `typer` 替代 `click` 以支持类型注解与高亮（#4472）
  - ▶️ **可行性高**，预计纳入 v1.2.0。

- **Flatpak 安装支持**（来自 @guidryheal-create）：
  - 请求官方 Flatpak 包，便于 Linux 发行版集成（#4486）
  - ▶️ 属基础设施需求，可长期规划。

---

### 7. **用户反馈摘要**

- **正面反馈**：
  - 新版限流器显著缓解了高并发下的“三点击 spinner”问题（用户 @linllyw）。
  - 插件系统灵活性获认可，尤其自定义工具注入机制。

- **负面痛点**：
  - Windows + GBK 环境普遍存在编码错误，修复零散（#4481）。
  - DeepSeek V4 Flash 的 `<think>` 标签解析不稳定（#4051），影响推理可见性。
  - 飞书/WeChat 等通道在跨天会话中易断连，缺乏优雅降级策略。

> 📌 **核心诉求**：提升 **跨平台消息通道鲁棒性**、**完善 Windows 中文支持**、**强化会话上下文可视化与管理**。

---

### 8. **待处理积压**

#### ⚠️ 长期未决重要项

| Issue/PR | 状态 | 最后更新 | 风险提示 |
|---------|------|----------|----------|
| [#2291] 开放任务认领 | OPEN (3月) | 2026-05-18 | 社区协作停滞，可能影响版本交付节奏 |
| [#4477] WeChat cron 失败 | OPEN (1天) | 2026-05-18 | 高优先级，涉及企业用户 SLA |
| [#4485] 插件函数未注入 | OPEN (1天) | 2026-05-18 | 阻碍插件生态健康度 |
| [#4494] 流式中断误报 | OPEN (1天) | 2026-05-18 | 用户体验降级明显 |

> 🔔 **提醒维护团队**：建议本周内分配资源处理上述三项（#4477, #4485, #4494），避免问题累积。

---

**数据源**：GitHub Repository `agentscope-ai/QwenPaw`（2026-05-18 至 2026-05-19）  
**分析师**：AI Project Health Monitor v1.0

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报（2026-05-19）**

---

### 1. **今日速览**  
过去24小时，ZeroClaw 项目活跃度显著提升：共处理 76 条 Issues/PRs 更新，其中 Issue 活跃度高（新开+活跃占 58%），PR 合并率达 16%（8/50），显示社区贡献与核心开发并行推进。尽管无新版本发布，但多个高风险功能模块（如 ACP 持久化、Cron 修复）进入关键阶段，项目整体处于快速迭代期。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
今日合并的重要 PR 包括：
- **#6758**：拆分 MiniMax 提供者为中国/国际双入口，解决用户配置混淆问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6758)
- **#6750**：修复 Windows 权限快照 TTL 过短导致的频繁 PowerShell 调用。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6750)
- **#6749**：扩展跨平台构建矩阵覆盖范围，提升手动构建可靠性。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6749)

这些合入表明项目在**基础设施稳定性**和**多地域支持**方面持续优化。

---

### 4. **社区热点**  
最活跃的 Issue 为 **#6756**（模型列表失败于 custom provider），反映用户对自定义 API 集成体验的强烈关注。其次，**#6754**（ACP 桥接配对机制缺陷）引发对安全配对流程的讨论，已有 PR #6649 提出持久化会话方案。此外，**#6253** 作为 v0.7.6 技能生态 UX 改进的追踪器，获社区广泛响应，凸显用户对技能管理工具链完整性的期待。

> 🔗 相关讨论：[#6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756) | [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) | [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)

---

### 5. **Bug 与稳定性**  
按严重性排序的关键问题：
- **S2 - 降级行为**：
  - **#6756**：`models list` 无法读取存储的 `api_key`，即使 onboarding 成功（[详情](https://github.com/zeroclaw-labs/zeroclaw/issues/6756)）
  - **#6643**：GLM-5.1 的 "Thoughts" 字段泄露至最终回复（[详情](https://github.com/zeroclaw-labs/zeroclaw/issues/6643)）
- **S1 - 工作流阻塞**：
  - **#6681**：`skills install clawhub:*` 因阻塞 HTTP 请求导致 tokio panic（[详情](https://github.com/zeroclaw-labs/zeroclaw/issues/6681)）

目前尚无针对 #6756 和 #6643 的公开 fix PR，需维护者优先介入。

---

### 6. **功能请求与路线图信号**  
高频需求集中于以下方向：
- **技能生态增强**：#6253 提出统一 CLI/Loader/Audit 路径的 UX 改进，配合 PR #6684（技能管理冷却期逻辑）和 #6611（文件轮转 crate），预示 v0.7.6 将强化技能开发体验。
- **多模态工具支持**：#5745 呼吁 PDF 处理能力，虽未关联 PR，但同类工具（如 home_assistant、philips_hue）密集上线，显示“智能家居+文档”双轨战略。
- **全球化与合规**：MiniMax 中国/国际分流（#6758）及 Tavily 实现（#6245）反映区域化部署诉求。

---

### 7. **用户反馈摘要**  
- **痛点**：FreeBSD 用户抱怨缺乏预编译二进制（#1924 已关闭，但未提解决方案）；Docker 文档缺失导致部署失败（#6760）。
- **满意点**：Jira 集成（#6481）获开发者好评，称其“精准满足自动化工作流需求”。
- **场景洞察**：企业用户强调 cron 时区一致性（#6739）和 ACP 会话持久化（#6754）对生产环境的重要性；家庭用户则更关注 8Sleep/Hue 等生活场景工具。

---

### 8. **待处理积压**  
- **#6074**（高优先级）：批量回退丢失 153 个 commits，需审计恢复内容并制定提交保护策略。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
- **#6396 关联 CI 故障**：PR title 验证工作流自合并后从未运行（#6751），暴露 CI 配置脆弱性，需紧急排查。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6751)
- **长期悬置技能问题**：#5972 衍生出的字段校验机制（#6128/#6210）虽闭环，但技能元数据 schema 松散问题仍未根治。

--- 

*数据来源：GitHub API @ 2026-05-19T00:00:00Z | 分析师：AI 智能体 & 个人 AI 助手领域开源项目研究员*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*