# OpenClaw 生态日报 2026-05-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-22 00:36 UTC

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

**OpenClaw 项目动态日报（2026-05-22）**

---

### 1. **今日速览**

OpenClaw 在过去24小时内保持高度活跃，共处理 **500条 Issues** 和 **500条 PRs**，其中新增与活跃 Issue 达475条，关闭25条；待合并 PR 达456条，已合并/关闭44条。项目发布 **2个新版本**（v2026.5.20 及 beta 版），主要聚焦于技能加载机制优化与 Discord 语音会话增强。整体社区参与度高，技术讨论深入，维护响应及时，项目健康度良好。

---

### 2. **版本发布**

#### **v2026.5.20**
- **核心变更**：
  - **Exec Approvals**：移除旧版 `cat SKILL.md && printf ... && <skill-wrapper>` 兼容路径，强制要求技能文件必须通过 `read` 工具加载，仅真实可执行技能被自动允许运行。此举显著提升安全性与可审计性。
  - **Discord**：支持语音会话跟随配置的 Discord 用户进入语音频道，提升多用户协作体验。
- **破坏性变更**：旧技能加载方式失效，需迁移至标准 `read` + exec 模式。
- **迁移建议**：所有自定义技能需更新为使用 `read` 工具读取 `.md` 说明文件，并确保可执行脚本符合新安全策略。

> 🔗 [Release v2026.5.20](https://github.com/openclaw/openclaw/releases/tag/v2026.5.20)

#### **v2026.5.20-beta.2**
- 包含相同变更，用于测试环境验证。

---

### 3. **项目进展**

今日合并/关闭的重要 PR 较少，但出现多个关键自动化修复与基础设施升级：

- **#85135**（ClawSweeper 自动合并）：修复了子代理 spawn 终端成功状态未保留的问题，提升任务完成通知可靠性。
- **#85136**：新增 Mantis PR Desktop Lease Workflow，支持维护者手动触发 Crabbox 资源预留，优化 CI/CD 稳定性。
- **#84950**：强化 npm shrinkwrap 发布流程，确保所有依赖精确锁定，减少构建不一致风险。

这些改进增强了系统的自动化能力、部署一致性与维护效率，推动项目向更稳定、可扩展方向演进。

---

### 4. **社区热点**

本周最活跃的议题集中在 **跨平台客户端缺失**、**Android APK 分发** 与 **安全权限模型**：

- **#75**（Linux/Windows Apps）：用户强烈呼吁推出 Linux 和 Windows 应用，类比 macOS/iOS 功能集。已有105条评论，75个点赞，反映生态扩展迫切需求。
- **#9443**（Prebuilt Android APK）：请求提供预编译 APK 而非仅源码，便于非开发者用户快速部署。评论24条，获1赞，体现移动端易用性痛点。
- **#6731** 与 **#10659**：均涉及“安全 ClawdBot”机制——前者提议 Rust 重写+沙箱隔离，后者主张“掩码密钥”系统防止凭证泄露。两者均获高关注，显示用户对核心运行时安全的高度敏感。

此外，**#84880**（subagent thinking 配置仍被拒绝）虽为新开 Issue，但直指近期修复不彻底问题，引发社区对回归测试覆盖的担忧。

> 📌 [Issue #75](https://github.com/openclaw/openclaw/issues/75) | [Issue #9443](https://github.com/openclaw/openclaw/issues/9443) | [Issue #6731](https://github.com/openclaw/openclaw/issues/6731)

---

### 5. **Bug 与稳定性**

#### 高危 Bug（P1）
- **#84059**（已关闭）：嵌入式会话因文件锁释放导致状态冲突。已在 v2026.5.18 后复现，影响所有嵌入运行。已有 PR 闭环。
- **#62505**：编码代理在 v2026.4.2 后无法完成任务（回归问题）。持续活跃中，尚无合并 fix。
- **#83796**（已关闭）：Codex 运行时绕过 Docker 沙箱，导致容器逃逸风险。属严重安全回归，已在次日修复。

#### 中危 Bug（P2）
- **#31583**：`exec` 工具未继承 `skills.entries.*.env` 变量，阻碍密钥注入。回归问题，有 linked PR 但待审。
- **#63101**：Feishu 渠道配置校验失败，升级后无法重启网关。需 schema 适配，已有 PR 提交。

> ⚠️ 共识别 **6个 P1/P2 Bug**，其中 **2个已关闭**，其余处于开发或评审阶段。

---

### 6. **功能请求与路线图信号**

用户明确提出以下高价值功能需求，且部分已有实现推进：

| 需求方向 | 代表 Issue | 相关 PR | 纳入可能性 |
|--------|----------|--------|-----------|
| **多租户 RBAC** | #60127 | 无 | 高（企业级需求） |
| **AWS/Vault 密钥管理** | #13610 | 无 | 中高 |
| **Slack Block Kit 支持** | #12602 | 无 | 中（生态集成） |
| **Cron 直接 Exec 模式** | #18160 | 无 | 高（性能关键） |
| **会话快照 /session save** | #13700 | 无 | 中 |

特别值得注意的是 **#22438**（分层引导文件加载）已提出完整设计，旨在节省 LLM token 开销，契合当前成本优化趋势。

---

### 7. **用户反馈摘要**

- **正面反馈**：
  - 新版 Discord 语音跟随功能获认可（“终于可以多人协作了！”）。
  - 技能加载机制简化被视作“重大安全进步”，尤其感谢移除隐蔽兼容路径。

- **负面反馈**：
  - 升级后配置兼容性问题频发（Feishu、Telegram 多账号等），用户抱怨文档不足。
  - 缺乏 Windows/Linux 原生应用成为主要使用障碍，移动端体验断层明显。
  - 密钥明文存储问题长期未解，企业用户表示“不敢上生产”。

> 💬 用户普遍期望 OpenClaw 从“实验性 AI 框架”转向“企业级可信平台”。

---

### 8. **待处理积压**

- **#75**（Linux/Windows 应用）：自 2026-01-01 提出，超4个月未获响应，属战略级缺失。
- **#6731**（安全 ClawdBot）：2026-02-02 提出，涉及架构级变更，长期待产品决策。
- **#22438**（分层引导加载）：2026-02-21 提出，设计完整但未分配负责人。

建议维护者优先评估 **#75** 与 **#6731** 的可行性，避免社区流失。

--- 

✅ **总结**：今日 OpenClaw 在安全加固、自动化流程与多平台支持上稳步推进，社区活跃度高但对企业级需求响应滞后。建议下一阶段聚焦 **多租户支持**、**密钥管理系统** 与 **跨平台客户端发布**，以提升产品成熟度。

---

## 横向生态对比

好的，以下是根据您提供的各项目动态生成的横向对比分析报告：

---

### **个人 AI 助手/自主智能体开源生态横向对比分析报告 (2026-05-22)**

**1. 生态全景**

当前个人 AI 助手/自主智能体开源生态正处于快速演进与分化阶段。核心项目如 OpenClaw 和 NanoBot 在功能完善与安全加固上持续深耕，而新兴力量如 ZeroClaw 则通过架构革新（如多代理运行时）开辟新方向。社区普遍关注企业级需求（多租户、密钥管理）与跨平台体验（TUI、移动端支持）。安全、稳定性及部署灵活性成为驱动迭代的关键因素，预示着生态正从实验性向生产就绪过渡。

**2. 各项目活跃度对比**

| 项目名称 | Issues 数 | PR 数 | Release 情况 | 健康度评估 |
| :------- | :-------- | :---- | :----------- | :--------- |
| OpenClaw | 500 | 500 | v2026.5.20, beta | 极高活跃，高度响应 |
| NanoBot  | 31 | 31  | 无 | 高活跃，稳健迭代 |
| Hermes Agent | 50 | 50  | 无 | 极高活跃，修复密集 |
| PicoClaw | 7 | 10 | Nightly build | 稳定活跃，功能增强 |
| NanoClaw | 3 | 11 | 无 | 高活跃，关键能力推进 |
| NullClaw | 0 | 2  | 无 | 低调稳健，基础设施扩展 |
| IronClaw | 25 | 47 | 无 | 高度活跃，Reborn架构迁移 |
| LobsterAI | 0 | 11 | 无 | 中等活跃，UI/UX优化 |
| TinyClaw | 0 | 0  | 无 | 暂无活动 |
| Moltis    | 6  | 5  | 无 | 较高活跃，Docker支持增强 |
| CoPaw     | 26 | 29 | 无 | 极高活跃，功能演进稳健 |
| ZeptoClaw | 0 | 0  | 无 | 暂无活动 |
| ZeroClaw  | 21 | 50 | v0.8.0-beta-1 | 极高活跃，架构升级 |

**3. OpenClaw 在生态中的定位**

*   **优势**: OpenClaw 作为核心参照项目，拥有最高的社区活跃度（500 Issues/PRs）和维护响应速度，技术讨论深入。其强化的安全性（Exec Approvals）和多用户协作体验（Discord语音跟随）使其在企业级应用和复杂场景下具备显著优势。
*   **技术路线差异**: OpenClaw 强调“安全即默认”的架构设计，通过移除旧版兼容路径强制技能加载机制标准化，这与许多项目仍在探索灵活性的做法形成鲜明对比。其在多代理、多租户等高级特性上的推进也相对领先。
*   **社区规模对比**: OpenClaw 的社区参与度远超其他项目，Issue #75（Linux/Windows Apps）的高关注度即是明证，反映出其广泛的开发者基础和影响力。

**4. 共同关注的技术方向**

*   **安全与权限模型**:
    *   **诉求**: 防止凭证泄露、容器逃逸风险、沙箱隔离、细粒度权限控制（RBAC）。
    *   **涉及项目**: OpenClaw (#6731, #10659), Hermes Agent (#30100-#30103), IronClaw (Reborn架构下的安全框架)。
*   **多模态与第三方集成**:
    *   **诉求**: 支持图像生成、视频处理、Web搜索等高级AI能力；扩展对主流商业API（Claude, Kimi, Novita, Skywork, NEAR AI Cloud等）的深度整合。
    *   **涉及项目**: NanoBot (#3954, #3946), PicoClaw (#2917), NanoClaw (#2532, #2474), Moltis (#1031), CoPaw (WeChat iLink增强, DingTalk修复)。
*   **跨平台客户端与用户体验**:
    *   **诉求**: 推出原生桌面应用（Linux/Windows）、优化TUI、增强WebUI的可访问性与性能、改善长文本输出截断问题。
    *   **涉及项目**: OpenClaw (#75), Hermes Agent (#18080, #7237), LobsterAI (UI重构, 国际化修复), ZeroClaw (TUI建设)。
*   **任务调度与自动化**:
    *   **诉求**: 提供结构化、持久化、可监控的后台任务执行能力，支持Cron、子代理等。
    *   **涉及项目**: NullClaw (Cron子代理引擎), IronClaw (Reborn架构下的Mission系统), LobsterAI (定时任务通知)。

**5. 差异化定位分析**

| 项目名称 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :------- | :------- | :------- | :--------------- |
| **OpenClaw** | 企业级安全、多用户协作、技能生态 | 企业开发者、高级用户、技能创作者 | 强化安全策略、标准技能加载、高度自动化 |
| **NanoBot** | WebUI优化、多模态、IM集成 | 普通开发者、IM重度用户 | 前端体验优先、MECE记忆优化、快速兼容性修复 |
| **Hermes Agent** | TUI、Gateway平台集成、Slack深度定制 | CLI/TUI爱好者、Slack重度用户 | Termux/Android优化、Slack线程逻辑细化 |
| **ZeroClaw** | 多代理主机、TUI、文件上传协议 | 高级用户、无头服务器部署者 | 多代理运行时、终端界面建设 |
| **IronClaw** | Reborn架构迁移、多云LLM支持、成本预算 | 云原生开发者、企业级用户 | Reborn经济模型、MCP凭证路由、成本配额 |
| **CoPaw** | 技能市场、聊天草稿、通道稳定性 | 多Agent开发者、IM重度用户 | 异步技能市场、httpx重构、通道特定修复 |
| **NullClaw** | 任务调度、去中心化AI生态接入 | 需要复杂调度的开发者 | Cron子代理引擎、NEAR AI Cloud集成 |
| **NanoClaw** | Signal认证、Codex全栈支持、Veo视频 | Signal/Codex重度用户、视频处理需求 | Edna视频流水线、纯Codex模式 |
| **PicoClaw** | 多Agent策略控制、消息一致性 | 多Agent协作场景 | AGENT.md策略过滤、working_summary工具 |
| **Moltis** | Docker部署优化、Twilio电话集成 | Docker/Kubernetes用户、电话集成需求 | 沙箱路径自动检测、Twilio分派 |
| **LobsterAI** | UI/UX细节打磨、国际化、Cowork会话 | 注重交互体验的用户 | IM机器人管理UI重构、Cowork通知 |

**6. 社区热度与成熟度**

*   **快速迭代阶段**: OpenClaw、Hermes Agent、ZeroClaw、IronClaw、CoPaw 表现出极高的社区热度和迭代速度，涉及大量Bug修复、新功能探索和架构升级，处于积极演进期。
*   **质量巩固阶段**: NanoBot、PicoClaw、NanoClaw 在保持高活跃度的同时，更注重稳定性和核心能力的深化，Bug修复迅速，功能请求有序推进，显示出较强的工程成熟度。
*   **稳健发展/特定领域聚焦**: NullClaw、Moltis 虽活跃度相对较低，但聚焦于特定基础设施扩展（任务调度、多云LLM支持、Docker优化），展现出稳定的发展方向。LobsterAI 则专注于UI/UX的细节打磨，属于渐进式优化。

**7. 值得关注的趋势信号**

*   **从单体到分布式/多代理**: ZeroClaw 的多代理主机架构和 NullClaw 的 Cron 子代理引擎是重要信号，表明用户对更复杂的代理协作和任务调度有强烈需求，未来可能出现更多类似架构的探索。
*   **安全与合规成为标配**: OpenClaw 的安全加固和 Hermes Agent 的沙箱逃逸风险修复凸显了安全在企业级应用中的核心地位，未来几乎所有项目都需将安全设计置于首位。
*   **无缝多模态体验**: NanoBot 和 NanoClaw 对图像、视频生成能力的集成，以及 Moltis 对 Twilio 电话集成的探索，预示着AI智能体将从纯文本交互迈向融合语音、图像、视频的全方位人机交互时代。
*   **企业级功能下沉**: IronClaw 的成本预算系统和 OpenClaw 的多租户RBAC需求，表明企业级功能（如资源管理、成本控制）正在从商业产品向开源生态渗透，为开发者提供了更接近生产环境的工具。
*   **部署友好性持续优化**: Moltis 对 Docker 部署的专门优化、Hermes Agent 的 Termux 启动速度提升，以及 CoPaw 的 WeChat iLink 通道稳定性修复，均反映了开发者对降低部署门槛、提升运行稳定性有着持续且强烈的诉求。

**对 AI 智能体开发者的参考价值**:

1.  **优先关注安全与架构设计**: 借鉴 OpenClaw 和 IronClaw 的经验，将安全性和可扩展性纳入项目初期设计。
2.  **拥抱多模态与第三方集成**: 考虑如何将图像、音频、视频处理能力以及主流商业API集成纳入产品路线图，以提升竞争力。
3.  **重视用户体验与部署体验**: 投入资源优化CLI/TUI、WebUI的交互流畅度，并确保在各种部署环境（特别是容器化）下的稳定性和易用性。
4.  **规划长期维护与社区建设**: OpenClaw 和 Hermes Agent 的高活跃度表明，一个健康的社区和及时的响应是项目成功的关键。
5.  **探索差异化定位**: 参考各项目定位，明确自身项目的核心价值主张，避免在通用功能上过度竞争。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-05-22）**

---

### 1. **今日速览**
过去24小时内，NanoBot 社区活跃度较高，共处理了31条 Pull Request 和9条 Issue，其中8个问题已解决，表明维护响应速度较快。新增功能主要集中在 WebUI 优化、多模态支持及 LLM 提供商扩展。整体项目处于积极迭代状态，用户反馈集中于用户体验一致性与配置灵活性。

---

### 2. **版本发布**
无新版本发布（Releases 数量为0），当前最新稳定版仍为 `0.1.5.post3.2026.05.13`。

---

### 3. **项目进展**

#### ✅ 重要合并 PR
- **#3940**：修复 Kimi 系列模型在 Moonshot API 上因同时传递 `reasoning_effort` 和 `thinking` 参数导致的请求失败问题。此修复解决了特定大语言模型兼容性问题，提升了与 Kimi K2.5/K2.6 的互操作性。
- **#3944**：修复 WebUI 会话刷新时新对话被意外关闭的问题（对应 Issue #3884），增强前端会话稳定性。
- **#3684**：改进微信通道的消息容错机制，防止因轮询异常或令牌过期导致的消息静默丢失，显著提升 IM 集成可靠性。
- **#3927**：新增 Novita AI 作为内置 OpenAI 兼容提供商，扩展了低成本推理服务的接入选项。
- **#3916**：集成 Skywork AI 为第一级支持的大模型平台，自动出现在 WebUI 设置中，丰富用户可选生态。

#### 🚧 进行中关键开发
- **#3952**：重构长期记忆系统（Dream + Consolidator），引入 MECE（Mutually Exclusive, Collectively Exhaustive）原则优化记忆组织与去重逻辑，目标是解决重复膨胀与信息归属模糊问题。
- **#3954 / #3946**：分别添加对 OpenAI/Codex 和 Ollama 的原生图像生成支持，补全多模态能力短板。
- **#3936**：实现 xAI Grok 通过 OAuth 登录流程，无需手动配置 API Key，提升第三方身份验证体验。

---

### 4. **社区热点**

- **#3885**（Enhancement）：多位用户呼吁为 Dream 记忆任务添加全局开关配置，避免即使禁用 memory 技能仍自动注册 cron 作业，影响资源使用。该诉求反映用户对后台任务可控性的强烈需求。
- **#3876**（WebUI 可访问性）：嵌入式 WebUI 默认仅允许 localhost 访问，阻碍 Docker 外部调用。虽已关闭但关联 PR 将推动绑定地址配置化，预计下周上线。
- **#3945**（Bug）：WebUI 中出现 `tool_call_id` 重复赋值错误，属前端状态管理缺陷，已快速定位并提交补丁（#3944 相关）。

> 📌 链接汇总：  
> [Issue #3885](https://github.com/HKUDS/nanobot/issues/3885) · [PR #3953](https://github.com/HKUDS/nanobot/pull/3953) · [PR #3954](https://github.com/HKUDS/nanobot/pull/3954)

---

### 5. **Bug 与稳定性**

| 严重程度 | Issue / PR | 问题描述 | 状态 |
|--------|-----------|--------|------|
| ⚠️ 高 | #3884 | WebUI 首响后会话自动关闭 | ✅ 已由 #3944 修复 |
| ⚠️ 高 | #3931 | `restrictToWorkspace=true` 阻止外部 HTTP 请求 | ✅ 已识别，待后续安全策略调整 |
| 🟡 中 | #3945 | WebUI 工具调用 ID 重复 | ✅ 已提交修复 |
| 🟡 中 | #3939 | Moonshot API 拒绝双参数请求 | ✅ 已由 #3940 修复 |

> 注：所有高危 Bug 均已获得代码级修复，未发现生产环境崩溃报告。

---

### 6. **功能请求与路线图信号**

- **Dream 任务可配置开关**（#3885 & #3948）：两个独立 Issue 均指向同一痛点——Dream 记忆任务难以完全禁用。结合现有 PR 趋势，很可能在 v0.2.0 中通过 `agents.defaults.dream.enabled` 字段实现。
- **WebUI 跨容器访问支持**（#3876）：反映容器化部署场景下的网络暴露需求，预计将通过配置文件开放绑定地址选择。
- **多模态图像生成统一接口**（#3954 + #3946）：表明项目正加速向“全栈 AI Agent”演进，图像理解与生成将成为核心能力之一。
- **技能路由优化**（#3865）：提出基于 BM25 的技能自动筛选机制，旨在降低系统提示词长度，预示未来将向轻量化、智能调度方向发展。

---

### 7. **用户反馈摘要**

- **正面反馈**：
  - 多数用户对快速修复 Kimi/Moonshot 兼容性表示认可；
  - WebUI 侧边栏性能优化（#3953）获开发者好评，尤其赞赏分批渲染设计。
  
- **负面痛点**：
  - Dream 记忆系统“不可控”、“费 token”、“重复生成”成为高频抱怨；
  - 文档缺失（如 Xiaomi MiMo 配置）影响新用户上手；
  - 容器内外网络隔离限制实际部署灵活性。

---

### 8. **待处理积压**

- **Issue #3931**（restrictToWorkspace 阻塞外部请求）：虽已关闭，但根本原因尚未彻底解决，建议跟踪后续安全策略迭代。
- **PR #3865**（BM25 技能路由）：创新性高，可能显著提升系统效率，但目前无明确排期，需评估优先级。
- **长期未回复 Issue**：截至今日，近两周内 Issue 平均响应时间 <24 小时，无严重积压。

---

**总结**：NanoBot 今日展现稳健的工程节奏，在稳定性、多模态支持和开发者体验方面持续深化。用户最迫切的需求集中在 **配置自由度** 与 **部署灵活性** 上，后续版本应优先回应这些声音。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目日报 - 2026年5月22日**

---

### 1. **今日速览**

过去24小时，Hermes Agent 社区活跃度极高，共处理 50 条 Issues 和 50 条 Pull Requests。项目整体状态健康，开发节奏稳定，重点集中在 TUI、Gateway 平台集成与安全性加固。无新版本发布，但修复与功能迭代持续进行，社区反馈响应及时。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

**合并/关闭的重要 PR：**

- **[PR #30088](https://github.com/NousResearch/hermes-agent/pull/30088)**：为 Slack 平台新增细粒度线程回复控制，区分 DM 与频道场景，提升用户体验。
- **[PR #30087](https://github.com/NousResearch/hermes-agent/pull/30087)**：修复 Slack DM 流式消息最终发送失败的问题，确保消息完整送达。
- **[PR #30086](https://github.com/NousResearch/hermes-agent/pull/30086)**：默认关闭 Slack 平台的网关重启通知，减少多用户环境下的信息噪音。
- **[PR #29438](https://github.com/NousResearch/hermes-agent/pull/29438)**（已合并）：优化 Termux/Android 下非 TUI CLI 的冷启动性能，显著提升低端设备响应速度。
- **[PR #27501](https://github.com/NousResearch/hermes-agent/pull/27501)**：移除 Dockerfile 中不支持的 VOLUME 指令，增强容器构建兼容性。

这些改进表明项目在平台稳定性、用户体验与跨平台支持方面持续推进。

---

### 4. **社区热点**

- **[Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080)**（15条评论，24👍）：用户强烈呼吁改进 Dashboard 主题设计，指出字体选择、对比度不足影响可读性，属高优先级 UX 需求。
- **[Issue #24360](https://github.com/NousResearch/hermes-agent/issues/24360)**（7评论）：Homebrew 安装版本缺失内置技能目录，反映包管理器与源码版一致性需加强。
- **[Issue #30095](https://github.com/NousResearch/hermes-agent/issues/30100~#30103)** 系列（Moonshot Kimi 工具类型错误 + 多个高危安全漏洞）：集中暴露模型提供商适配缺陷与沙箱逃逸风险，引发对生产环境安全的关注。

---

### 5. **Bug 与稳定性**

按严重程度排序：

1. **P1 - [Issue #30095](https://github.com/NousResearch/hermes-agent/issues/30095)**：Kimi K2.6 模型调用含联合类型的工具时崩溃（`TypeError: unhashable type 'list'`），影响关键推理能力。已有初步诊断但未修复。
2. **P1 - [Issue #14036](https://github.com/NousResearch/hermes-agent/issues/14036)**：TUI 模式下使用 byterover 内存后端频繁退出（SIGPIPE 风暴），会话中断不可恢复。暂无有效补丁。
3. **P2 - [Issue #30091](https://github.com/NousResearch/hermes-agent/issues/30091)**：Slack 共享线程中 bot-to-bot 消息被静默丢弃，即使配置允许所有 bots。
4. **P2 - [Issue #30023](https://github.com/NousResearch/hermes-agent/issues/30023)**：Kanban 看板横向溢出，无法查看完整任务列。
5. **P2 - [Issue #30092](https://github.com/NousResearch/hermes-agent/issues/30092)**：macOS Terminal.app 因 OSC 11 查询泄露导致输入污染，属终端兼容性问题。

> ✅ **已有 Fix PR 的问题**：  
> - [Issue #24170](https://github.com/NousResearch/hermes-agent/issues/24170)（computer_use 5 bug）→ 已合并为 [PR #30126](https://github.com/NousResearch/hermes-agent/pull/30126) 等，正在合并流程中。

---

### 6. **功能请求与路线图信号**

- **多模态图像生成支持**：[Issue #29999](https://github.com/NousResearch/hermes-agent/issues/29999) 提出扩展 `image_gen` 工具以支持参考图片 URL，适配 UNI 1.1 等模型，预示下一代图像生成能力将纳入生态。
- **Claude 订阅 OAuth 集成**：[Issue #25267](https://github.com/NousResearch/hermes-agent/issues/25267) 请求 Claude Agent SDK 级订阅认证，避免重复计费，显示对主流商业 API 的深度整合意愿。
- **Telegram Business Mode**：[PR #30055](https://github.com/NousResearch/hermes-agent/pull/30055) 实现“观察-审批”式客服机器人模式，瞄准企业级应用场景，标志 Gateway 平台向生产力工具演进。

---

### 7. **用户反馈摘要**

- **正面反馈**：Termux 启动速度优化获认可（#29438）；Slack 线程逻辑细化被赞“终于考虑实际使用场景”。
- **负面痛点**：
  - 长文本输出频繁截断（#7237），严重影响 CLI 和网关交互体验；
  - Homebrew 技能缺失（#24360）暴露分发渠道不一致；
  - 安全漏洞集中爆发（#30100–#30103）引发对默认配置的担忧；
  - TUI 剪贴板、粘贴功能失效（#24860, #30083）阻碍日常操作效率。

---

### 8. **待处理积压**

- **[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237)**：自 2026年4月10日提交，持续 42 天，涉及核心输出截断问题，影响广泛但未获根本解决。
- **[Issue #11693](https://github.com/NousResearch/hermes-agent/issues/11665)**：关联 memory 工具配置忽略问题，PR 已存在但尚未合并，需推动审查。
- **[Issue #28818](https://github.com/NousResearch/hermes-agent/issues/28818)**：Kanban scratch 目录误删风险，影响工作流安全，需优先级评估。

> ⚠️ **建议维护者优先处理**：长期未回应的高影响力 Bug 和安全议题可能影响用户信任。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

PicoClaw 项目在 2026-05-22 保持稳定活跃的发展节奏，过去 24 小时内处理了 7 个问题关闭和 10 个 PR 合并，同时发布了新的 nightly build v0.2.8-nightly.20260521.33f9d638。社区贡献者持续推动功能增强与依赖升级，整体开发活跃度较高，但部分 Issue 存在 stale 标记需关注。

### 版本发布
今日发布了一个 Nightly Build：v0.2.8-nightly.20260521.33f9d638。此版本为自动构建，可能不稳定，建议谨慎使用。完整变更日志可参考：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)。

### 项目进展
- **PR #2838**：支持 AGENT.md 中 frontmatter 工具策略过滤（allow/deny），统一内置工具、MCP 工具及服务器发现的政策控制逻辑。
- **PR #2779**：为 Telegram 论坛主题添加 `group_trigger` 覆盖配置，允许按主题定制触发模式。
- **PR #2778**：新增 `working_summary` 工具反馈样式，实时展示任务执行进度。
- **PR #2777/#2776/#2772**：修复定时任务反馈干扰聊天、Telegram 回复丢失话题等通信稳定性问题。
- **PR #2917**：新增 NEAR AI Cloud 作为官方 LLM 提供方，完善多模型生态接入能力。
- **Dependabot 批量依赖更新**：涵盖 React、shadcn、TanStack 路由查询库及多个 Go SDK 升级，提升前端安全与维护性。

这些合并的 PR 显著增强了多 Agent 架构下的策略控制、消息一致性、第三方集成及系统健壮性，项目正向更成熟的生产就绪方向演进。

### 社区热点
- **Issue #2775**（子 Agent 角色混淆）：引发对多 Agent 上下文隔离机制的深入讨论，已有相关策略 PR 正在推进解决方案。
- **Issue #2916**（性能优化）：提出 CPU/内存/IO 综合优化方案，虽刚发起但已获初步技术探讨。
- **PR #2838**（工具策略过滤器）：获得积极回应，用户期待通过声明式配置实现细粒度权限管理。
- **FUNDING.yml 请求**（Issue #2912）：反映社区希望建立可持续的资金支持通道，体现项目影响力上升。

### Bug 与稳定性
| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 高 | #2795 | 历史对话仅保留最后一条用户消息 | ✅ 已关闭 |
| 中 | #2787 | 会话消息无独立时间戳，依赖 session.updated | ✅ 已关闭 |
| 中 | #2798 | PDF 流数据导致 Telegram Bot 会话中断 | ✅ 已关闭 |
| 低 | #629 | LLM 调用失败后未重试 | ✅ 已关闭 |

上述 Bug 均已在当日关闭，表明核心通信与数据持久化路径已得到修复。

### 功能请求与路线图信号
- **GPT4Free 原生支持**（#2901）：被标记为 feature request，虽未合并但有潜在实现意愿，契合轻量化部署趋势。
- **NEAR AI Cloud 支持**（PR #2917）：已合并，显示项目正积极扩展 OpenAI 兼容协议覆盖范围。
- **FUNDING.yml**（#2912）：非技术需求但具战略意义，预示社区商业化探索意愿增强。
- **请求 Dockerfile**（PR #2812）：虽被关闭，但反映出容器化部署是常见痛点。

### 用户反馈摘要
- 多位用户指出多 Agent 环境下角色定义混乱（#2775），期望每个子 Agent 加载专属系统提示。
- Telegram 用户在 PDF 附件场景下遇到会话断裂（#2798），影响工作流连续性。
- 历史消息截断问题（#2795）暴露会话压缩机制与 UI 展示逻辑不匹配，用户期望“查看时仍见全貌”。
- 时间戳缺失（#2787）导致调试困难，尤其在多用户协作场景中难以追溯事件顺序。

### 待处理积压
- **Issue #2916**（CPU/Memory/IO 优化）：虽新创建但涉及系统级改进，建议评估其优先级。
- **PR #2662**（统一供应商文档表）：长期未处理，可能影响新手上手体验，建议尽快合并。
- **Issue #629**（LLM 失败重试）：创建于 2026-02-22，历时近三月才解决，暴露出异步错误处理流程响应延迟。

> 📊 健康度指标：开发活跃度 ★★★★☆｜社区响应速度 ★★★☆☆｜代码稳定性 ★★★★☆｜新功能推进 ★★★★★

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 - 2026-05-22**

### 1. 今日速览
NanoClaw 在过去24小时内保持较高开发活跃度，共新增3个Issue和11个PR，其中9个PR待合并。项目重点推进了Signal认证修复、Codex全栈支持和Veo 3.1视频功能等核心能力。整体状态健康，维护者响应及时，多个关键问题已有对应修复方案。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日共关闭2个PR：
- **PR #2576**（已合并）：修复了SDK模式下用户无法看到agent中间思考过程的问题，解决了ea21e58引入的回归问题，提升了交互体验。
- **PR #2577**（已合并）：优化了deshi的channelContext注入机制，从session_routing自动获取上下文信息，简化了MCP tool参数传递。

### 4. 社区热点
最活跃的讨论集中在Signal相关问题上：
- **Issue #2581** 和 **PR #2584**：关于signal-cli 0.13+ JSON字段名变更导致"no linked account"误报的问题，已有直接修复方案。
- **Issue #2582**：signal-auth在daemon持有配置文件锁时死锁的问题，反映出现有同步机制的局限性。
这些Issue都来自同一作者snymanpaul，显示其对Signal集成深度参与和关注。

### 5. Bug与稳定性
**高优先级**：
- **Issue #2583**: `restartService`使用'launchctl kickstart -k'在plist未加载时静默失败 - [链接](https://github.com/qwibitai/nanoclaw/issues/2583)
- **Issue #2582**: signal-auth在signal-cli daemon持有配置文件锁时死锁 - [链接](https://github.com/qwibitai/nanoclaw/issues/2582)

**中优先级**：
- **Issue #2581**: signal-cli 0.13+ JSON字段名从'account'变为'number'导致认证检测失败 - [链接](https://github.com/qwibitai/nanoclaw/issues/2581)，已有**PR #2584**修复。

### 6. 功能请求与路线图信号
从活跃PR可见以下方向：
- **Veo 3.1视频能力**：**PR #2532**实现完整的Edna视频生成与处理流水线，支持Slack交付 - [链接](https://github.com/qwibitai/nanoclaw/pull/2532)
- **多AI编码CLI支持**：**PR #2474**允许setup流程选择Claude Code或Codex作为AI编码工具 - [链接](https://github.com/qwibitai/nanoclaw/pull/2474)
- **纯Codex安装模式**：**PR #2580**实现完全基于Codex的NanoClaw部署，包括凭证管理和技能目录支持 - [链接](https://github.com/qwibitai/nanoclaw/pull/2580)
- **LiteLLM集成**：**PR #2490**添加对LiteLLM提供商的支持 - [链接](https://github.com/qwibitai/nanoclaw/pull/2490)

### 7. 用户反馈摘要
- Signal集成用户报告0.13+版本兼容性问题，影响现有部署的认证流程
- WhatsApp用户遇到401登出后凭证残留问题，导致重启后重复认证尝试
- SDK模式用户反馈中间思考过程被意外抑制，影响调试体验
- 社区对多AI编码CLI选择和统一技能目录架构表现出强烈需求

### 8. 待处理积压
- **PR #2532**（Edna Veo 3.1）：创建时间较长(5天前)，涉及复杂视频处理逻辑，需更多审查时间
- **PR #2361**（Codex合约收紧）：自5月9日提出，涉及底层架构调整，需要仔细评估影响范围
- **PR #2337**（非Claude技能目录）：同样较老(5月7日)，但近期仍有更新，表明持续投入
- **Issue #2583**：launchctl服务重启可靠性问题，可能影响生产环境部署稳定性

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-05-22）**

---

### 1. **今日速览**  
过去24小时内，NullClaw 项目整体处于低活跃状态：无新 Issue 提交，仅新增2个待合并的 Pull Request，分别为 Cron 子代理功能增强与 NEAR AI Cloud 提供商集成。项目当前无新版本发布，维护节奏平稳，重点聚焦于基础设施扩展与多模型生态接入。社区讨论热度较低，暂无高互动内容。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
- **PR #783**: 作者 yanggf8 提交了一个关于 **Cron 子代理引擎**的重大功能更新，包含数据库支持的调度器（`cron_runs` 历史表、`cron_run_queue` worker、原子化 tick/入队/完成机制）、支持技能/代理/Shell 类型作业、时区偏移配置、投递路由及操作员告警等特性。该 PR 还引入 JSON 格式的 CLI 输出支持（如 `cron list --json`），显著提升可观测性与自动化兼容性。此功能将极大增强 NullClaw 的任务调度能力，为长期运行任务提供可靠基础。  
- **PR #922**: 作者 PierreLeGuen 新增对 **NEAR AI Cloud** 作为 OpenAI 兼容提供者的支持，涵盖 API 密钥管理、端点配置（`https://cloud-api.near.ai/v1`）、模型列表解析及文档集成。此举进一步扩展了 NullClaw 的多云 LLM 接入能力，强化其在去中心化 AI 生态中的定位。

> GitHub 链接: [PR #783](https://github.com/nullclaw/nullclaw/pull/783), [PR #922](https://github.com/nullclaw/nullclaw/pull/922)

---

### 4. **社区热点**  
今日无活跃 Issue 或高评论数 PR。两个新提交的 PR 均无评论或点赞，表明当前阶段仍处于开发推进期，尚未引发广泛讨论。建议后续关注这两个 PR 在合并前的审查反馈。

---

### 5. **Bug 与稳定性**  
未发现新的 Bug 报告或崩溃问题。项目运行状态稳定，无紧急修复需求。

---

### 6. **功能请求与路线图信号**  
用户通过 PR #783 和 PR #922 体现出以下潜在路线图方向：
- **增强型任务调度系统**：用户对结构化、持久化、可监控的后台任务执行有明确需求，尤其适用于 Agent 生命周期管理和自动化流水线。
- **多云/多协议 LLM 支持**：持续扩展非主流但具战略意义（如去中心化、隐私优先）的 AI 平台，反映 NullClaw 向“AI 基础设施中立”演进的趋势。

这些 PR 若被采纳，将成为未来版本的核心功能模块。

---

### 7. **用户反馈摘要**  
暂无来自 Issue 的评论数据可供分析。当前新功能以开发者驱动为主，缺乏终端用户直接反馈。建议项目方在相关 PR 合并后主动收集测试者体验，特别是在 Cron 调度复杂性和 NEAR AI 集成易用性方面。

---

### 8. **待处理积压**  
- **PR #783**（创建于 2026-04-07，最后更新 2026-05-21）：已超4周未获合并，虽技术复杂度较高，但涉及核心调度能力，建议维护者优先审查并推动合并流程。
- **PR #922**（创建于 2026-05-21）：刚提交，需进入常规代码审查队列。

> GitHub 链接: [PR #783](https://github.com/nullclaw/nullclaw/pull/783)

--- 

**总结**：NullClaw 今日保持低调但稳健的开发节奏，两项关键功能 PR 有望显著提升其调度能力与 AI 生态适配广度。建议重点关注 #783 的合并进度，并适时启动用户场景验证以指导后续迭代。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-05-22）**

---

### 1. **今日速览**

IronClaw 在今日保持高度活跃的开发节奏，共处理 25 条 Issues（14 新开/活跃，11 关闭）和 47 条 PR（26 待合并，21 已合并/关闭），无新版本发布。核心焦点集中在 **Reborn 架构迁移** 的持续推进，特别是技能系统、HTTP 出口治理及成本预算框架的建设。整体社区参与度稳定，技术讨论深入，未见重大稳定性告警。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

本周期重点推进了多个 Reborn 关键模块的落地：

- **PR #3852** 修复了 `before-inbound policy` 调用中的超时与日志泄露问题，完善了 WebUI Beta 的安全边界（[链接](https://github.com/nearai/ironclaw/pull/3852)）。
- **PR #3848 & #3850** 完成技能包适配到 Reborn 运行时上下文的集成，支持按作用域读取 `/skills` 目录内容，并保留元数据可见性控制（[PR #3848](https://github.com/nearai/ironclaw/pull/3848), [PR #3850](https://github.com/nearai/ironclaw/pull/3850)）。
- **PR #3841** 引入基于成本的预算管理系统，实现从租户到任务的 USD 级资源配额分配机制，标志着 Reborn 经济模型初步成型（[链接](https://github.com/nearai/ironclaw/pull/3841)）。
- **PR #3831** 完成 staged secret egress 框架的生产化对接，MCP 凭证仅路由至 `tools/call` 通道，提升安全性（[链接](https://github.com/nearai/ironclaw/pull/3831)）。

这些变更强化了 Reborn 在权限、资源管理与扩展性方面的能力，为后续产品适配器上线奠定基础。

---

### 4. **社区热点**

最活跃的议题围绕 **Reborn 技能系统** 展开：

- **Issue #3085**（[链接](https://github.com/nearai/ironclaw/issues/3085)）提出统一 WASM/Script/MCP 的 HTTP 出口路径，已有 PR #3841 提供成本层支持，预计将加速实施。
- **Issue #3811** 和 **#3812** 分别推进 OAuth 回调与产品认证组合的 Reborn-native 实现，反映社区对身份流本地化的强烈需求。
- **Issue #3846** 关于 Mission 通知渠道继承来源的问题引发关注，提示当前 WebUI 在多通道场景下的行为一致性不足。

此外，**Issue #3259** 持续呼吁将 crates.io 更新至 v0.27.0 以上以解决 wasmtime CVE 依赖锁定，虽未获直接响应，但凸显生态兼容性的重要性。

---

### 5. **Bug 与稳定性**

发现以下稳定性问题：

- **Issue #3447**：Nightly E2E 测试失败（[链接](https://github.com/nearai/ironclaw/issues/3447)），可能与数据库迁移或环境配置漂移有关，尚无修复 PR。
- **Issue #3839**：Failed Mission 页面的 Retry 按钮实际调用失败接口，返回 `fired: false`，疑似前端状态同步错误（[链接](https://github.com/nearai/ironclaw/issues/3839)）。
- **Issue #3821**：`Thread::restore_from_messages` 丢弃非用户触发的 assistant 消息，导致上下文注入中断（[链接](https://github.com/nearai/ironclaw/issues/3821)）。

以上问题均处于开放状态，暂无对应 fix PR 提交。

---

### 6. **功能请求与路线图信号**

用户明确提出的新需求包括：

- **Issue #3840**：建议优化 WebUI 中频道标签的视觉呈现，增加图标与色彩区分（如 WeChat 用绿色），提升可扫描性（[链接](https://github.com/nearai/ironclaw/issues/3840)）。
- **Issue #1519**：Routine 通知应嵌入用户聊天线程而非独立对话，增强上下文连续性（[链接](https://github.com/nearai/ironclaw/issues/1519)）。
- **Issue #3857**：提议添加 Slack ProductAdapter MVP，支持预配置凭证与异步消息路由（[链接](https://github.com/nearai/ironclaw/issues/3857)）。

结合近期 PR 可见，**多通道适配** 与 **用户体验一致性** 正成为下一阶段重点方向。

---

### 7. **用户反馈摘要**

- 用户对 **Mission 重试机制失效**（#3839）表示困惑，认为 UI 反馈与后端行为不一致。
- 多名用户指出 WebUI 频道标识缺乏直观区分（#3840），尤其在同时管理 Telegram、WeChat 等多平台时易混淆。
- 开发者赞赏 Reborn 技能系统的模块化设计（如 PR #3861），但期待更清晰的文档说明（见 #3860 相关讨论）。

总体满意度中等偏上，核心痛点集中于 **操作可见性** 与 **跨平台体验割裂**。

---

### 8. **待处理积压**

需关注以下长期未闭环的重要 Issue：

- **Issue #3259**（crates.io 版本滞后）：已存在近 20 天，影响下游依赖更新，建议优先协调发布。
- **Issue #1519**（Routine 通知上下文缺失）：自 3 月起持续活跃，涉及核心消息流逻辑，亟需优先级评估。
- **Issue #3447**（E2E 持续失败）：若属基础设施问题，可能阻碍自动化质量门禁，需排查根因。

建议维护团队在 Sprint 规划中纳入至少两项处理。

--- 

*数据来源：GitHub nearai/ironclaw，统计时间窗口：2026-05-21 00:00 UTC 至 2026-05-22 00:00 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

LobsterAI 项目 2026-05-22 动态日报

今日速览
- 过去24小时项目活跃度中等，共处理11个PR（9待合并，2已合并/关闭），无新Issue。
- 重点进展包括UI重构、国际化修复、Cowork会话通知与标签系统优化，以及设置面板稳定性改进。
- 整体代码质量稳定，主要聚焦功能增强与用户体验细节打磨，暂无重大破坏性变更。

版本发布
- 今日无新版本发布。

项目进展
- PR #2025: refactor(im): redesign im bot management UI
  作者 fisherdaddy | 2026-05-21
  链接 https://github.com/netease-youdao/LobsterAI/pull/2025
  简要：已完成IM机器人管理界面重构，提升交互一致性。

- PR #2024: optimize: optimize gateway restart in settings
  作者 fisherdaddy | 2026-05-21
  链接 https://github.com/netease-youdao/LobsterAI/pull/2024
  简要：优化设置面板中网关重启逻辑，减少卡顿与异常等待。

社区热点
- PR #1536: feat(cowork): Cowork会话完成/失败时发送系统通知
  作者 iroving | 2026-04-07
  链接 https://github.com/netease-youdao/LobsterAI/pull/1536
  简要：实现任务完成/失败的系统级原生通知，解决用户切换窗口后无法感知状态的问题。诉求明确，实现完整。

- PR #1543: fix(i18n): hardcoded Chinese strings in approval dialogs break English mode
  作者 xuzx-code | 2026-04-07
  链接 https://github.com/netease-youdao/LobsterAI/pull/1543
  简要：修复审批对话框在英文模式下仍显示中文的问题，体现多语言支持的重要性。

Bug与稳定性
- PR #1544: fix(settings): cancel GitHub Copilot OAuth polling on Settings unmount
  作者 stone333 | 2026-04-07
  链接 https://github.com/netease-youdao/LobsterAI/pull/1544
  简要：修复Settings卸载时Copilot OAuth轮询未终止的问题，避免后台阻塞。严重程度中等，已有修复。

- PR #1547: fix(scheduledTask): 修复定时任务通知渠道选择后无法改回"不通知"
  作者 gongzhi-netease | 2026-04-07
  链接 https://github.com/netease-youdao/LobsterAI/pull/1547
  简要：修复通知渠道选择后无法改回“不通知”的问题，提升配置灵活性。

功能请求与路线图信号
- PR #1538: feat(cowork): 为AI回复消息添加收藏/书签功能
  作者 MaoQianTu | 2026-04-07
  链接 https://github.com/netease-youdao/LobsterAI/pull/1538
  简要：实现AI回复消息的收藏功能，便于用户在长对话中快速定位重要信息。

- PR #1542: feat(cowork): 会话标签分类系统，支持自定义标签和筛选过滤
  作者 MaoQianTu | 2026-04-07
  链接 https://github.com/netease-youdao/LobsterAI/pull/1542
  简要：引入会话标签系统，支持自定义标签与筛选，提升会话组织能力。

- PR #1546: feat(engine-overlay): 引擎启动超时后显示取消启动和查看日志按钮
  作者 0xFLX | 2026-04-07
  链接 https://github.com/netease-youdao/LobsterAI/pull/1546
  简要：在引擎启动超时后提供取消与日志查看选项，改善启动失败时的用户体验。

用户反馈摘要
- 用户对Cowork会话的状态感知需求强烈，尤其在多窗口操作场景下缺乏通知提醒，导致任务完成状态难以察觉。
- 多语言用户在英文模式下遇到硬编码中文提示的问题，影响专业性与可用性。
- 设置面板中的OAuth流程在关闭时未能正确清理资源，引发后台阻塞问题，用户希望有明确的清理机制。

待处理积压
- PR #1536、#1538、#1542、#1543、#1544、#1545、#1546、#1547 均为自2026-04-07起长期待合并PR，涉及功能与修复均已成熟，建议尽快评审合并以避免技术债累积。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Moltis 项目在 2026-05-22 展现出较高的社区活跃度，过去 24 小时内新增 6 个活跃 Issue 和 5 个 PR（4 个待合并），主要集中在 Docker 部署环境下的功能增强与稳定性修复。核心贡献者持续推动关键模块优化，如沙箱路径自动检测、Twilio 语音分派等，同时引入 NEAR AI Cloud 作为新 OpenAI 兼容提供商。整体进展积极，暂无重大版本发布，但多个 Bug 和增强请求反映用户对生产环境支持的需求迫切。

---

### 3. **项目进展**

- **[PR #1005](https://github.com/moltis-org/moltis/pull/1005)** 已关闭：为 OpenAI Codex 提供程序添加了 `reasoning_effort` 支持，确保在克隆实例中正确传递该参数并在 Responses API 请求中序列化。此变更增强了 Codex 模型的推理能力一致性，尤其适用于 GPT-5 相关场景。

---

### 4. **社区热点**

- **[Issue #977](https://github.com/moltis-org/moltis/issues/977)**（4 条评论）：用户在 Docker/LXC 环境中报告浏览器沙箱创建失败，涉及挂载权限和数据路径问题。此 Issue 被多次更新，显示社区对此类部署场景的重视。
- **[PR #1035](https://github.com/moltis-org/moltis/pull/1035)**：针对 Issue #977 提出的沙箱路径自动检测机制，实现容器内外数据卷的智能识别，显著提升 Docker 部署下的兼容性。

---

### 5. **Bug 与稳定性**

| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#977](https://github.com/moltis-org/moltis/issues/977) | High | Browser sandbox fails in Docker due to mount permission issues | [PR #1035](https://github.com/moltis-org/moltis/pull/1035) |
| [#1037](https://github.com/moltis-org/moltis/issues/1037) | Medium | `send_image` and `send_document` fail in Docker setup | None yet |
| [#1032](https://github.com/moltis-org/moltis/issues/1032) | Medium | Twilio phone calls: agent greets but doesn't respond to user input | None yet |
| [#1030](https://github.com/moltis-org/moltis/issues/1030) | Low | OpenAI TTS requires `response_format=opus`, incompatible with Speaches | None yet |

> **说明**：Issue #977 已有对应 PR #1035 正在处理中；其余 Bug 尚无明确修复方案。

---

### 6. **功能请求与路线图信号**

- **[Issue #1029](https://github.com/moltis-org/moltis/issues/1029)**：建议在 `crates/voice/src/tts/piper.rs` 中内建 Piper TTS 音频转换逻辑，减少外部依赖调用开销。
- **[Issue #1036](https://github.com/moltis-org/moltis/issues/1036)**：请求 Web UI 支持任意入站文件附件上传，提升交互灵活性。
- **[PR #1031](https://github.com/moltis-org/moltis/pull/1031)**：新增 NEAR AI Cloud 作为 OpenAI 兼容 provider，表明项目正扩展多模态 AI 服务商集成。

> 这些需求均指向 **增强本地化处理能力** 和 **提升用户体验完整性**，可能与未来版本中的“轻量化部署”或“Web UI 功能完备化”方向一致。

---

### 7. **用户反馈摘要**

- 多名用户强调 **Docker/Kubernetes 部署体验亟需优化**，特别是文件读写权限、沙箱隔离和网络连通性（#977, #1037）。
- 电话集成（Twilio）方面，有用户指出 **语音识别后无响应** 的问题，怀疑是事件分派逻辑缺陷（#1032）。
- 对于 TTS 模块，用户希望更灵活地支持多种输出格式（#1030），避免强制使用 opus。
- 新功能请求普遍体现对 **降低运维复杂度** 和 **增加自定义能力** 的期待，如禁用 vault encryption、支持自定义附件等。

---

### 8. **待处理积压**

- **Issue #977**（自 2026-05-06 起）：尽管已有 PR #1035 提交，但仍处于 Open 状态，建议尽快合并并验证修复效果，以避免影响更多 Docker 用户。
- 无其他长期未决的重要 Issue 或 PR 需紧急关注。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的项目分析师，以下是根据您提供的 GitHub 数据生成的 CoPaw 项目动态日报。

---

### **CoPaw 项目动态日报 (2026-05-22)**

**项目健康度评估：活跃度高，修复密集，功能演进稳健**

---

#### **1. 今日速览**

过去24小时，CoPaw 项目活跃度极高。社区共产生了 26 条 Issues 更新和 29 条 Pull Request 更新，显示出开发者与用户在积极互动。项目整体状态稳定，重点集中在对现有功能的深度优化、关键 Bug 的修复以及对新特性的探索上，暂无新版本发布。

#### **2. 版本发布**

无新版本发布。

#### **3. 项目进展**

本周期内，项目推进了多项重要改进。核心亮点包括：
*   **技能市场与技能中心重构** (`PR #4518`): 引入了统一的异步技能市场（Skill Market），支持多提供商搜索、分页加载和队列式安装。同时，技能中心客户端已从阻塞的 `http.client` / `urllib` 重构为高效的 `httpx`，提升了性能和可维护性。
*   **聊天草稿持久化** (`PR #4520`, `PR #4598`): 解决了用户在不同页面间切换时聊天输入框内容丢失的问题。通过在组件卸载时保存草稿到 `localStorage`，在组件挂载后恢复草稿，显著提升了用户体验。
*   **WeChat iLink 通道增强**:
    *   **消息去重与重试机制修复** (`PR #4576`): 修复了 iLink API 重复投递消息导致去重失效和 `ret=-2` 无限重试的问题，增强了消息处理的可靠性。
    *   **发送失败报告** (`PR #4597`): `/api/messages/send` 端点现在能正确报告 WeChat 消息的发送失败情况，避免了“虚假成功”的误导。
    *   **API 初始化消息失败处理** (`PR #4603`): 增加了对 headless browser 启动的警告信息，帮助用户了解潜在风险。
*   **DingTalk 通道修复**:
    *   **中文文件名解码** (`PR #4600`): 修复了 DingTalk 频道发送文件时，中文文件名被错误编码的问题。
*   **测试与构建**:
    *   **MCP 测试修复** (`PR #4609`): 修复了 `test_mcp.py` 中的测试问题，确保了自动化测试的稳定性。
    *   **回滚自动初始化配置** (`PR #4608`): 回滚了关于 `QWENPAW_AUTO_INITIALIZATION` 的配置变更，以解决潜在的启动问题。

这些进展表明项目在提升稳定性、用户体验和内部架构方面取得了实质性进展。

#### **4. 社区热点**

今日讨论最活跃的 Issue 是 **#4559: [bug] [Bug]: 超过40多个agent后 页面访问明显变慢**。该 Issue 详细描述了在拥有大量 Agent 实例时，WebUI 性能显著下降的问题，并附有性能分析截图，反映出社区对大规模部署下性能优化的强烈诉求。

另一个热点是 **#4556: [bug] [Bug]: Voice transcription uses browser native Speech API instead of configured Whisper provider**，它揭示了一个重要的不一致性：尽管用户已配置了 Whisper 后端，但语音转录仍使用浏览器原生 API，导致功能不匹配。这引出了对统一、可配置的语音处理流程的广泛需求。

此外，**#4611: [question] [Question]: ACP session does not auto-close after task completion, causes duplicate session conflict on next start** 也引发了讨论，用户希望 ACP 会话能在任务完成后自动关闭，以避免资源冲突。

#### **5. Bug 与稳定性**

本周期报告了多项 Bug，按严重程度排列如下：

1.  **高优先级**: **#4559**: Agent 数量过多导致 WebUI 卡顿。此问题直接影响用户体验和可用性，且已有相关性能分析报告，亟需优化。
2.  **高优先级**: **#4556**: 语音转录未使用配置的 Whisper 提供者。此问题导致用户无法使用其期望的后端，破坏了配置的一致性。
3.  **中优先级**: **#4612**: WeChat 通道 `send_file_to_user` 图片发送不稳定。虽然工具显示成功，但实际送达不可靠，影响核心文件共享功能。
4.  **中优先级**: **#4585**: 自研插件在企业微信通道中未自动发现。这限制了插件生态系统的跨平台一致性。
5.  **中优先级**: **#4604**: 钉钉 API 接口消息无法发送到钉钉，仅输出到控制台。此问题阻碍了通过 API 集成钉钉的能力。
6.  **中优先级**: **#4605**: Gemini/Gemma 模型 `max_tokens` 参数验证错误。特定于模型的兼容性问题，影响部分用户。
7.  **中优先级**: **#4586**: DingTalk 频道中文文件名重编码。影响文件传输的可用性和美观性。
8.  **低优先级**: **#4408**: 建议工作目录文件统一存放。此为 UI/UX 层面的优化建议。

**已有 Fix PR 的问题**:
*   `#4572`: 飞书 CardKit 流式输出失效 (由 `sequence` 初始值应为 1 而非 0 引起) - `PR #4576` 已修复。
*   `#4546`: WeChat iLink Channel 消息去重失效及 `ret=-2` 无限重试 - `PR #4576` 已修复。

#### **6. 功能请求与路线图信号**

社区提出了多项有价值的功能请求，预示着项目的演进方向：

*   **#4551: Lossless Context Compression**: 请求实现基于 DAG 的无损上下文压缩，以解决当前滑动窗口压缩导致的细节丢失问题，这对于长期对话至关重要。
*   **#4613: Plugin agent hook support**: 请求提供 `register_agent_hook` 支持，允许插件更深层次地干预 Agent 行为。这表明社区希望插件系统更加灵活和强大。
*   **#4584: Enhance browser automation stability**: 建议优先使用 Playwright 替代现有的浏览器自动化方案，以提升定时任务的稳定性。这是一个明确的架构升级信号。
*   **#4521**: HTTP API 发送 WeChat 消息无响应: 用户希望通过 HTTP API 触发 WeChat 消息发送，但消息未送达，这表明需要更深入地调查 API 与 WeChat 通道之间的集成问题。

#### **7. 用户反馈摘要**

*   **痛点**: 用户普遍反映在多 Agent 场景下性能下降（#4559）、语音转录配置未生效（#4556）、文件发送不稳定（#4612）、特定模型参数错误（#4605）等问题，影响了核心功能的可靠性和预期体验。
*   **满意之处**: 用户对聊天草稿持久化（#4520）的解决方案表示欢迎，认为这是显著的 UX 改进。对 WeChat 通道的消息去重和重试机制修复（#4576）也表达了认可。
*   **不满意之处**: 对 WeChat iLink 通道的定时任务推送失败、图片发送不稳定等问题感到困扰。对钉钉 API 发送失败、中文文件名重编码等 Bug 表示不满。

#### **8. 待处理积压**

*   **#3054: onebot频道定时任务无法发送到群**: 这是一个长期存在的 Issue（自 2026-04-08 起），涉及 OneBot 频道的定时任务消息发送问题，需要维护者关注并优先解决。
*   **#4408: 建议工作目录的默认文件统一放到一个文件夹下面**: 这是一个持续提出的 UX 优化建议，建议维护者在后续版本中考虑实现，以提升项目的整洁度和可维护性。
*   **#3813: feat: add tauri 2.x desktop app support**: 这是一个长期处于“Under Review”状态的 PR，旨在添加 Tauri 2.x 桌面应用支持，标志着项目向更现代的桌面应用架构演进。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

2026-05-22 ZeroClaw 项目动态日报

今日速览
项目活跃度极高，过去24小时新增21个Issue和50个PR，其中45个待合并。v0.8.0-beta-1正式发布，标志着ZeroClaw从单代理守护进程演进为真正的多代理主机，支持多个命名代理并行运行。核心团队围绕TUI（终端用户界面）建设展开大规模工作，同时积极扩展集成（如Slack、Signal、Jira）并修复关键Bug。项目整体健康度良好，处于快速迭代和架构升级阶段。

版本发布
v0.8.0-beta-1
本次发布最重要的变化是架构转型：ZeroClaw现在是一个多代理主机，一个安装实例可同时运行多个独立的代理。每个代理拥有各自的身份、工作空间、内存、模型提供商、频道和安全配置，并能相互通信。此版本标志着从单一守护进程到多代理系统的重大演进。

项目进展
PR #6398 (singlerider): 合并了“feat!: multi-agent runtime and schema V3”。这是实现多代理架构的关键里程碑，使系统能够管理多个独立的代理实例。

PR #6773 (mn13): 添加了“feat(tools): add file_upload tool for HTTP multipart uploads”。这个功能允许代理通过HTTP工具上传文件，而无需先将文件内容加载到LLM上下文中，提升了代理处理文件的效率。

社区热点
Issue #6059 (Incompatible with DeepSeek-V4 API format): 这是一个高优先级Bug报告，影响DeepSeek-V4-Pro和V4-Flash API的使用。用户遇到了与API格式不兼容的问题，可能与思维模式有关。已有12条评论和4个赞，表明该问题受到了广泛关注。

Issue #6826 (ZeroClaw TUI): 这是一个关于开发终端用户界面的Tracker Issue。它概述了需要创建一个独立于Web仪表板的终端界面，作为高级用户、无头服务器和封闭环境部署的主要操作界面。这反映了用户对更灵活、轻量级交互方式的需求。

Bug与稳定性
Issue #6059 (High Risk, Bug): Incompatible with DeepSeek-V4 API format。此Bug阻止了使用DeepSeek-V4-Pro和V4-Flash API，严重影响了工作流程。尚无公开PR提及修复。

Issue #6841 (High Risk, Bug): [multimodal] vision_provider silently ignored — inbound images routed to providers.fallback instead。此Bug导致视觉提供者被忽略，图像被路由到回退提供者，阻止了工作流程。尚无公开PR提及修复。

Issue #6844 (High Risk, Bug): slack bot_token needs to be in the configuration and cannot be supplied by environment variable。此Bug阻止了Slack集成，因为bot_token无法通过环境变量提供。尚无公开PR提及修复。

Issue #6836 (Medium Risk, Bug): setup.bat --minimal produces ~26 MB build instead of ~6 MB on Windows。此Bug导致Windows上的最小构建大小异常，影响了用户体验。尚无公开PR提及修复。

功能请求与路线图信号
Issue #6819 (Feature): File/attachment upload protocol。此功能请求允许客户端向守护进程发送二进制文件内容，例如上传文件或附加图片，以克服NDJSON框架的文本限制。这暗示了增强代理文件处理能力的需求。

Issue #6827 (Feature): Support jina.ai as web_search provider。此功能请求添加jina.ai作为web_search提供者，因其出色的免费层级。这表明了用户对多样化且成本效益高的外部服务集成的需求。

Issue #6253 (Feature): Track: zeroclaw skills support and UX (v0.7.6)。这是一个协调器Tracker，旨在改进CLI、loader、audit、install路径、沙箱、测试工具和技能创作工具的zeroclaw技能支持和UX。这突显了用户对更强大和更易于使用的技能系统的重要关注。

用户反馈摘要
用户痛点：
DeepSeek API不兼容（Issue #6059）：用户报告在使用DeepSeek API时遇到问题，特别是与思维模式相关的错误，表明现有实现可能未正确处理新API格式或特定功能。
Slack bot_token配置问题（Issue #6844）：用户发现Slack bot_token无法通过环境变量设置，只能在配置文件中指定，这可能被视为一个不便之处，尤其是在自动化或容器化部署场景中。
视觉提供者被忽略（Issue #6841）：用户报告在配置了视觉提供者时，图像被错误地路由到回退提供者，这表明配置文件解析或提供者选择逻辑中存在缺陷。
最小Windows构建大小问题（Issue #6836）：用户在使用setup.bat --minimal时遇到构建大小异常，这表明文档或实际构建优化可能存在差异。
使用场景：
多代理协作（Issue #6059, #6841）：用户希望使用DeepSeek等高级模型进行复杂的多代理任务，这需要稳定和兼容的API支持。
终端界面需求（Issue #6826）：用户寻求一个强大的终端界面，以便在无图形界面的环境中与ZeroClaw交互，这表明了对灵活性和可访问性的需求。
技能系统扩展（Issue #6253）：用户期望一个更强大和更易于使用的技能系统，以扩展代理的能力，这反映了用户对定制化和多功能性的渴望。
满意/不满意的地方：
对TUI开发的兴趣（Issue #6826）：用户积极讨论和提出关于TUI的需求，显示出对该项目未来功能的热情和支持。
对jina.ai集成的期待（Issue #6827）：用户主动提议添加新的web_search提供商，表明他们愿意参与生态系统的扩展和改进。

待处理积压
Issue #6059 (Incompatible with DeepSeek-V4 API format): 这是一个高优先级的Bug，自2026-04-24创建以来，已有12条评论和4个赞，但尚未有公开的PR来解决。这表明维护者可能需要关注此问题，因为它影响了用户的工作流程。

Issue #6841 ([multimodal] vision_provider silently ignored): 这是一个高优先级的Bug，自2026-05-21创建以来，尚无评论或PR提及。这表明该问题可能刚刚被发现，但需要尽快解决以确保用户满意度。

Issue #6844 (slack bot_token needs to be in the configuration): 这是一个高优先级的Bug，自2026-05-21创建以来，尚无评论或PR提及。这表明该问题可能刚刚被发现，但需要尽快解决以确保Slack集成的正常工作。

Issue #6836 (setup.bat --minimal produces large build): 这是一个中等风险的Bug，自2026-05-21创建以来，尚无评论或PR提及。这表明该问题可能刚刚被发现，但需要尽快解决以提高用户体验。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*