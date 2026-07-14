# OpenClaw 生态日报 2026-07-03

> Issues: 195 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-03 01:51 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 OpenClaw 项目 2026-07-03 的 GitHub 数据生成的日报。

---

# OpenClaw 项目动态日报 | 2026-07-03

## 1. 今日速览

今日项目活跃度极高，共处理了 195 条 Issue 和 500 条 Pull Request，社区参与非常积极。虽然合并/关闭的 PR 数量（64）相对待合并数量（436）较少，但 Issue 关闭率（37%）可观，显示出维护团队在处理积压问题上的持续投入。新发布的 `v2026.7.1-beta.1` 版本来带了重要的 **GPT-5.6 支持**和外部工具挂载功能，展示了项目紧跟前沿模型生态的能力。然而，多个 **P1** 级别的回归问题（特别是在会话稳定性、消息传递和认证方面）仍然悬而未决，是当前项目健康度的主要风险点。

## 2. 版本发布

**新版本: [v2026.7.1-beta.1](https://github.com/openclaw/openclaw/releases/v2026.7.1-beta.1)**

-   **主要内容**：
    -   **OpenAI GPT-5.6 支持**：OpenClaw 现在已全面支持 GPT-5.6 系列模型，包括目录、能力和运行时选择路径。（PR [#98333](https://github.com/openclaw/openclaw/pull/98333)）
    -   **外部工具挂载**：新增 `openclaw attach` 命令，允许将外部测试工具挂载到现有的 Gateway 会话中。
    -   **其他**：修复了若干稳定性问题。

-   **破坏性变更/迁移注意事项**：发布说明未提及明确的破坏性变更。建议升级前详细阅读完整的 Release Notes。

## 3. 项目进展

过去24小时内，项目在多个方向有重要进步：

-   **框架与数据层重构**：PR [#98236](https://github.com/openclaw/openclaw/pull/98236) 是一个里程碑式的重构，旨在将会话和转录存储从 JSONL 文件切换为 **SQLite**。虽然尚未合并（标记为 `[do not merge]`），但此举将显著提升大规模使用的性能和数据完整性。
-   **新增通道与能力**：PR [#95738](https://github.com/openclaw/openclaw/pull/95738) 为 **Signal** 通道新增了目标别名功能，提升了多目标消息路由的易用性。
-   **提升稳定性**：PR [#99187](https://github.com/openclaw/openclaw/pull/99187) 修复了 Node.js 升级后嵌入式工作进程（worker）无法启动的问题，这对长期运行的服务至关重要。
-   **安全加固**：PR [#43469](https://github.com/openclaw/openclaw/pull/43469) 扩展了 Markdown 技能定义（`SKILL.md`）的安全扫描，以防范注入威胁，增强了 Agent 生态的安全性。

## 4. 社区热点

今日最受关注的议题集中在**会话状态损坏**和**严重的回归问题**上。

-   **Issue [#25592](https://github.com/openclaw/openclaw/issues/25592)**（评论33条）：议题讨论的核心是 **“工具调用间的文本泄漏到消息通道”**。用户强烈要求区分 Agent 内部处理日志与最终输出，这是影响所有消息通道（Slack, iMessage等）的严重 UX 问题。
-   **Issue [#88312](https://github.com/openclaw/openclaw/issues/88312)**（评论19条）：报告了一个 **Codex 应用服务器端“回合完成”停滞问题**的回归。该问题在 `2026.5.27` 版本重现，严重影响依赖官方 Chat 平台的用户，社区呼声很高。
-   **Issue [#92201](https://github.com/openclaw/openclaw/issues/92201)**（评论18条）：报告了 **Anthropic 模型流式推理签名**在重放时可能失效的问题，且当前的错误恢复机制无法正确处理，导致会话卡死。这暴露了高级模型集成中的边缘情况处理不足。

**分析**：社区的注意力高度集中在**会话可靠性**和**消息传递的保真度**上。用户不仅要求功能正常，更要求 Agent 的行为透明、可预测，不泄漏内部杂乱信息，尤其是在多人协作的聊天场景中。

## 5. Bug 与稳定性

-   **关键 (P1) 未修复 Bug**：
    -   **会话/消息丢失**：
        -   [#88312](https://github.com/openclaw/openclaw/issues/88312) [回归] Codex 应用服务器回合完成停滞。
        -   [#87744](https://github.com/openclaw/openclaw/issues/87744) [回归] Telegram 回合超时，不返回最终答案。
        -   [#92433](https://github.com/openclaw/openclaw/issues/92433) 子Agent完成消息在特定流程中被静默丢弃。
        -   [#70024](https://github.com/openclaw/openclaw/issues/70024) 通道停止超时导致通道永久死亡。
    -   **安全/认证**：
        -   [#99253](https://github.com/openclaw/openclaw/issues/99253) Agent 自我伪造用户输入并回答，此安全问题严重，需紧急评估影响范围。
        -   [#99120](https://github.com/openclaw/openclaw/issues/99120) OpenAI OAuth 刷新存在“假正常”状态，导致回落至无效凭证。
    -   **其他**：
        -   [#97983](https://github.com/openclaw/openclaw/issues/97983) iOS/WebChat 消息发送后无法触发 Assistant 回复。
        -   [#99071](https://github.com/openclaw/openclaw/issues/99071) Codex 插件发现过程导致过度磁盘 I/O。

-   **已关闭 (CLOSED) 的 Bug**：
    -   [#98672](https://github.com/openclaw/openclaw/issues/98672) 会话持续中断问题（已关闭，推测通过 `v2026.7.1-beta.1` 修复）。
    -   [#99168](https://github.com/openclaw/openclaw/issues/99168) 大工具输出可能毒化后续结果显示（已关闭）。
    -   [#99186](https://github.com/openclaw/openclaw/issues/99186) 含西里尔字母的工具结果渲染为图片附件（已关闭，修复很快）。

## 6. 功能请求与路线图信号

-   **多Agent协作增强**：Issue [#35203](https://github.com/openclaw/openclaw/issues/35203) 提出了一个全面的多Agent协作方案，包括**能力画像、共享黑板、分层内存和Token治理**。该请求虽为P2，但获得9条评论，且涉及核心架构，表明社区对更高级的多Agent协作有强烈需求。
-   **UI/UX 改进**：
    -   Issue [#75947](https://github.com/openclaw/openclaw/issues/75947) 请求基于可用性标准对整个 UI 进行**质量更新**。PR [#98868](https://github.com/openclaw/openclaw/pull/98868) 正在进行 iOS 的引导流程重构，可视为对此类需求的回应。
    -   Issue [#77165](https://github.com/openclaw/openclaw/issues/77165) 建议自动生成 AI 会议**标题**以替代截取首条消息，这是一个提升用户日常体验的小而精的需求。
-   **新的能力**：
    -   Issue [#32530](https://github.com/openclaw/openclaw/issues/32530) 请求**从外部工作空间自动发现Agent配置**，取消手动注册，这有助于更好的 DevOps 集成。
    -   PR [#40311](https://github.com/openclaw/openclaw/pull/40311) 正在开发 **Brave Goggles** 支持，这将显著提升 Web 搜索的自定义性和精确度。

## 7. 用户反馈摘要

-   **核心诉求**：用户最强烈的呼声是 **“不要再把我的内部日志发到群里了”**（Issue [#25592](https://github.com/openclaw/openclaw/issues/25592)）。这不仅是 Bug，更是影响产品专业度的体验鸿沟。
-   **满意度信号**：尽管存在回归问题，但用户对 `memory-lancedb` 等依赖冲突的修复（Issue [#90295](https://github.com/openclaw/openclaw/issues/90295)）和通用工具问题的快速关闭（如 [#99186](https://github.com/openclaw/openclaw/issues/99186)）持肯定态度。`v2026.7.1-beta.1` 对 GPT-5.6 的及时支持也获得了积极评价（Thanks @steipete-oai）。
-   **痛点识别**：多个 P1 回归问题集中爆发，特别是与 **Codex 和 OAuth** 相关的崩溃和认证失效，表明版本升级的兼容性测试需要加强。此外，针对中文（Cyrillic/UTF-8）内容的渲染问题（Issue [#99186](https://github.com/openclaw/openclaw/issues/99186)）和 iOS 的隐私权限问题（Issue [#99046](https://github.com/openclaw/openclaw/issues/99046)）表明国际化与平台适配仍有改善空间。
-   **使用场景**：涵盖 Slack/Telegram/Discord 等多通道协作、嵌入式 Agent 集成、通过 Codex/OpenAI 使用官方客户端、以及利用 cron 进行自动化任务等典型场景。

## 8. 待处理积压

-   **长期未响应的重要议题**：
    -   [#11623](https://github.com/openclaw/openclaw/issues/11623) (P3)：提议为 macOS 添加“浮动 Agent 气泡”功能。该请求创建于 2月，虽评级较低，但反映了对更原生、更直观桌面交互的长期需求。
    -   [#81084](https://github.com/openclaw/openclaw/issues/81084) (P2)：请求为 Microsoft Teams 通道添加“退出每线程会话”的选项。P2 级别且已标记为 `stale`，可能需要维护者确认是否纳入路线图。
-   **阻塞性待审 PR**：
    -   [#43951](https://github.com/openclaw/openclaw/pull/43951) (P1, gateway)：修复 Hooks Agent 的 `accountId` 归一化问题。这是一个 P1 级别的 PR，但其状态长时间停留在 `needs-real-behavior-proof`，影响关键 Hook 功能。
    -   [#41067](https://github.com/openclaw/openclaw/pull/41067) (P1, gateway)：修复面板聊天在重连时的恢复问题。同为 P1 级，也处于等待验证状态，可能影响到一大波 WebUI 用户。
-   **AI 助手分析师评论**：以上多个 P1 级别的 PR 和 Issue 长期处于“等待验证/等待决策”状态，形成项目稳定的主要“减压阀”缺口。建议维护团队优先为该类议题分配资源，加速验证与决策流程。

---

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域开源项目资深技术分析师，基于您提供的2026-07-03各项目动态，以下是为技术决策者和开发者撰写的横向对比分析报告。

---

## AI智能体开源生态横向分析报告 | 2026-07-03

### 1. 生态全景

今日，个人AI助手/自主智能体开源生态呈现出 **“核心繁荣，竞争加剧，稳定为王”** 的显著态势。一方面，以OpenClaw、IronClaw、NanoBot为代表的头部项目社区活跃度极高，技术迭代迅猛，正从基础功能构建向深度优化与生态扩展迈进。另一方面，社区反馈高度聚焦于**会话可靠性、消息保真度、工具调用稳定性以及跨平台兼容性**。ChatGPT、Claude、CoPilot等主流模型的集成已成为所有项目的“标配”，竞争焦点已转向**深度集成质量、安全性与用户控制权**。整个生态正从“能跑就行”的功能落地期，过渡到 **“好用、可信、可定制”** 的精细化打磨阶段。

### 2. 各项目活跃度对比

| 项目 | 今日新Issues | 今日PR活动 | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **195** | **500** | **v2026.7.1-beta.1** | ⚠️ 高活跃，但P1回归问题积压 | 密集迭代，稳定性承压 |
| **NanoBot** | **98** | **63** | - | ✅ 健康，主动修复冲刺 | 系统性修复已知问题 |
| **Hermes Agent** | **50** | **50** | - | ⚠️ 高活跃，Bug与功能请求混杂 | 高密度Bug修复与打磨 |
| **PicoClaw** | 2 | 25 | - | ⚠️ 低新增，高合并，但有两个严重Bug | 依赖升级与代码清理，风险潜伏 |
| **NanoClaw** | 4 | 14 | - | ✅ 健康，功能收尾中 | 功能整合与稳定性转向 |
| **NullClaw** | 0 | 0 | - | 🟢 休眠 | 无活动 |
| **IronClaw** | **23** | **50** | - | ⚠️ 极高活跃，Bug密集 | Reborn架构密集打磨 |
| **LobsterAI** | 5 | 8 | - | ✅ 活跃，Bug修复导向 | 高强度维护与修复 |
| **TinyClaw** | 0 | 0 | - | 🟢 休眠 | 无活动 |
| **Moltis** | 0 | 3 | - | ✅ 低活跃，但关键修复已合并 | 平静期，针对性修复 |
| **CoPaw** | 5 | **27** | **v2.0.0-beta.2** | ⚠️ 新旧版本问题交织，阵痛期 | 版本迭代阵痛，功能与Bug并进 |
| **ZeptoClaw** | 0 | 0 | - | 🟢 休眠 | 无活动 |
| **ZeroClaw** | **37** | **50** | - | ⚠️ 极高活跃，Bug积压严重 | 高风险重构与开发并行 |

**活跃度分层**：
- **极高活跃 (核心角逐)**：OpenClaw, NanoBot, IronClaw, ZeroClaw
- **高活跃 (快速迭代)**：Hermes Agent, CoPaw
- **中等活跃 (稳定维护)**：PicoClaw, NanoClaw, LobsterAI, Moltis
- **低活跃/休眠**：NullClaw, TinyClaw, ZeptoClaw

### 3. OpenClaw 在生态中的定位

OpenClaw 凭借其庞大的Issue/PR数量、快速跟进前沿模型（GPT-5.6）、以及对社区需求的积极响应，稳居生态的**核心参照点**地位。
- **优势**：社区规模最大、活动最密集、对新模型和新功能（如外部工具挂载）的响应速度最快，是生态创新的风向标。
- **定位差异**：与专注于单一场景或特定优化的项目（如LobsterAI侧重系统级稳定性、NanoBot侧重全面修复）相比，OpenClaw更像一个**通用、全能的AI助手平台**，追求功能的广度与深度。其 **SQLite重构（#98236）** 和**多Agent协作方案（#35203）** 等宏大构想，体现了引领架构演进的雄心。
- **风险点**：今日多个P1级回归问题（会话丢失、认证失效）的集中爆发，暴露了其快速迭代带来的**稳定性风险**。

### 4. 共同关注的技术方向

今日，多个项目不约而同地指向了以下核心诉求，成为生态共性痛点：

1.  **会话可靠性：** 用户强烈要求Agent行为透明、不泄露内部信息。
    - *涉及项目*: **OpenClaw (#25592)**、**NanoBot (#4076)**、**Hermes Agent (#36934)**、**IronClaw (#5522)**。
    - *具体诉求*：工具调用日志与最终输出分离；Agent 内部思考不应泄漏到聊天通道；/steer等人工干预指令不被安全策略误判。

2.  **工具调用稳定性与权限控制：** 工具使用是Agent能力的核心，但也是Bug和安全漏洞的重灾区。
    - *涉及项目*: **NanoBot (#4076, #4668)**、**OpenClaw (#25592)**、**ZeroClaw (#8193)**、**IronClaw (#5552)**。
    *   *具体诉求*：MCP工具在TUI和API间发现不一致；工具调用的安全注单和权限隔离；工具调用失败后的明确错误提示。

3.  **跨平台兼容性与平台适配：** Agent需要稳定运行在各种操作系统和IM平台上。
    - *涉及项目*: **NanoBot (#4511, #4544)**、**ZeroClaw (#8627, #7462)**、**CoPaw (#5696, #5709)**、**Hermes Agent (#52914)**。
    *   *具体诉求*：Windows系统下进程管理与命令解释器不一致；WhatsApp/Telegram/飞书/QQ等IM平台集成中的各类Bug和兼容性问题。

4.  **AI模型的信任与幻觉问题：** 即使是最先进的模型，也会犯错，用户希望Agent能承认错误而不是“言之凿凿”地误导。
    - *涉及项目*: **IronClaw (#5558)**、**OpenClaw (#92201)**。
    *   *具体诉求*：Vision模型接受用户的错误纠正而不重新分析；模型流式推理在重放时的签名失效。

### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | IronClaw | CoPaw | ZeroClaw | PicoClaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **核心定位** | 全能型AI助手平台 | 开发驱动的智能体工具链 | 企业级可编程工作流引擎 | 基于CoPilot的轻量级Agent | 社区驱动的通用代理框架 | 极简/嵌入门户 |
| **功能侧重** | 多通道、多模型、工具生态 | 工具调用、安全、平台兼容 | Reborn架构、企业级OAuth、Slack集成 | CLI、Cron Job、Skills编排 | 统一记忆、MCP工具、Git集成 | 依赖升级、代码清理、Delta Chat |
| **目标用户** | 追求前沿功能的开发者与社区 | 注重安全与平台稳定性的开发者 | 需要复杂工作流和认证的企业用户 | 喜欢CoPilot生态的轻量级用户 | 寻求高度可控和自定义的开发者 | 低资源或嵌入式集成场景 |
| **技术路线** | 积极拥抱新模型、重构存储层 | 基于「修复冲刺」解决已知问题 | 围绕「Reborn」进行架构重构 | 紧密跟随CoPilot/Copilot更新 | 重构核心基础设施 | 通过依赖更新保持兼容性 |
| **社区规模** | 很大 | 大 | 大 | 中 | 中 | 小 |

**小结**：OpenClaw与IronClaw是当前生态的双雄，一个追求功能广度，一个追求企业级深度。NanoBot是扎实的“修理工”，CoPaw则是特定生态的“轻骑兵”。ZeroClaw体现了社区对协议和底层重构的强烈兴趣。

### 6. 社区热度与成熟度

- **快速迭代（高活跃、功能与Bug并行）**：**OpenClaw、IronClaw、ZeroClaw**。这三个项目Issue和PR数量极高，社区讨论热烈，但稳定性波动较大，适合愿意尝鲜的早期采用者。
- **质量巩固（高活跃、系统性修复）**：**NanoBot、LobsterAI、CoPaw**。这些项目今日表现出极强的“修复”意图，通过高质量的批量PR解决已知问题，是追求稳定性的用户首选。
- **维护成型（专注特定方向）**：**PicoClaw、NanoClaw、Moltis**。这些项目活动量虽不及头部，但方向明确（如升级依赖、功能收尾、修复单一Bug），整体健康度较高。
- **低维护/休眠**：**NullClaw、TinyClaw、ZeptoClaw**。这些项目当日无活动，可能处于稳定期或维护期。

### 7. 值得关注的趋势信号

1.  **从「功能」到「可信」的范式转变**：用户不再满足于Agent“能做什么”，而是开始追问“它怎么做的”以及“它会不会犯错”。**内部日志泄漏**、**指令误判**、**模型幻觉**等问题成为社区讨论焦点，表明用户对Agent的**透明度和可解释性**提出了更高要求。对于开发者，这意味着需要在Agent行为审计、用户反馈机制和模型调用策略上进行更深度的投入。

2.  **对「MCP」和「工具生态」的终极渴望与阵痛**：多个项目（ZeroClaw, OpenClaw, PicoClaw）在MCP（Model Context Protocol）的支持上遇到可见性问题。这表明，虽然MCP作为标准协议被广泛接受，但**从“协议兼容”到“体验流畅”** 之间仍有巨大的鸿沟。开发者需要关注的不是实现MCP，而是**让MCP工具在各种客户端（TUI、API、Dashboard）中保持一致、可发现、可调试**。

3.  **「跨平台兼容性」成为硬门槛**：NanoBot在Windows上的问题、ZeroClaw在Windows上的74个测试失败、CoPaw在飞书/QQ上的Bug，共同指向了一个事实：**个人AI助手的价值与它的平台覆盖能力直接正相关**。单平台项目将越来越难以生存，而支持良好的多平台（特别是Windows、macOS和主流IM）将成为项目脱颖而出的关键壁垒。

4.  **安全与隐私不再是「可选项」**：从NanoBot强制API Key（#4669）、OpenClaw的Agent自我伪造回答（#99253）、到ZeroClaw的WSL OOM（#5542），安全风险日益凸显。用户和贡献者不仅关注外部攻击，也极度关**注Agent的内部权限失控和恶意行为**。项目在初期就应建立强制认证、权限最小化和行为审计的“安全三原则”。

5.  **企业级功能正在成为“新标配”**：IronClaw在OAuth、Slack集成方面的进展，以及ZeroClaw/NanoClaw对Agent模板、环境变量、凭证管理的支持，表明**企业级SSO、多租户、DevOps友好性**正从“高级特性”向下渗透为“通用能力”。对于有志于商业化的项目，这是必须补齐的功课。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，以下是针对 NanoBot 项目在 2026年7月3日 的动态日报。

---

## NanoBot 项目日报 (2026-07-03)

### 1. 今日速览

今日 NanoBot 项目社区异常活跃，共同标帜着一次“修复冲刺”。过去24小时内，项目共处理了 **98 条 Issue** 和 **63 条 PR**，其中核心维护者 @hamb1y 主导并提交了 **10 个修复 PR**，形成了一个高质量的“批量修复”浪潮。这表明项目正在系统性地解决一批已被验证的 Bug 和安全隐患。社区讨论热度极高，主要集中在工具调用的稳定性、跨平台兼容性（特别是 Windows 环境）以及新平台（如 Mattermost、OpenCode）的集成上。整体来看，项目处于一个“高压修复 + 功能扩展并行”的攻坚阶段，健康度良好但压力较大。

### 2. 版本发布

本周无新版本发布。

### 3. 项目进展

今日项目进展显著，核心贡献者 @hamb1y 提交了多个高优先级修复，并由 @goodtiding5 和 @Yuxin-Lou 等贡献者协助，构成了一轮全面的稳定性和安全性更新。

**核心推进/合并的 PR (今日新增，待评审):**

*   **安全性 & 数据隔离：**
    *   **[PR #4668]** `fix: enforce message outbound policy`: 为 `message` 工具补充了出站授权，防止了跨聊天/频道发送消息的权限滥用和任意文件路径读取问题。 *(关联 Issue #4076)*
    *   **[PR #4669]** `fix: require api key for serve`: 强制要求 API 服务器启动时配置 API Key，防止未授权访问。 *(关联 Issue #4078)*
    *   **[PR #4667]** `fix: protect user skills from dream writes`: 为 Dream（记忆管理）功能增加了保护机制，防止其未经标识就修改用户自定义的技能文件。 *(关联 Issue #4075)*
*   **平台兼容性与稳定性：**
    *   **[PR #4687]** `fix(providers): update Anthropic default model to claude-sonnet-4-6`: 更新了默认模型，确保新用户开箱即用最佳模型。
    *   **[PR #4685]** `fix: omit temperature for sonnet 5`: 修复了 Anthropic 的 `claude-sonnet-5` 模型因 `temperature` 参数被拒绝而报错的问题。 *(关联 Issue #4683)*
    *   **[PR #4662]** `fix: normalize text tool call markup`: 修复了部分 OpenAI 兼容提供商返回文本格式工具调用时无法被正确解析和执行的问题。 *(关联 Issue #4061)*
    *   **[PR #4661]** `fix: separate file edit progress ids`: 优化了文件编辑操作的流式进度反馈，避免了事件标识冲突。
    *   **[PR #4659]** `fix: isolate matrix stream buffers`: 修复了 Matrix 频道中多个流式回复可能互相干扰的问题。
*   **功能与架构改进：**
    *   **[PR #4686]** `feat: support canonical opencode provider`: 新增了对 `OpenCode Zen` 标准的官方支持，扩大了模型生态的兼容性。
    *   **[PR #4670]** `refactor: make retention planning explicit`: 重构了历史会话压缩逻辑，使其更清晰可控。

这些 PR 共同将项目从“处理零散Bug”推进到了“系统性解决已知问题”的阶段，项目稳定性有望大幅提升。

### 4. 社区热点

今日社区讨论焦点主要集中在以下几个高互动量 Issue 上，反映出用户对**工具调用稳定性**、**聊天体验流畅度**和**数据管理**的强烈需求。

1.  **[Issue #4657]** `Nanobot Radar Finding`: 这是一个由维护者发起的“雷达”追踪 Issue，用于汇总所有已确认但尚未被修复的真实 Bug。高达 **5 条评论** 显示了社区对透明化项目Bug列表的欢迎和积极参与。
2.  **[Issue #3344]** `DingTalk Group Can not Seed file to Nanobot Agent`: **5条评论**。钉钉用户持续关注的文件发送问题。其核心痛点在于文件上传和@机器人的消息是分开的，导致机器人无法关联文件，这是平台集成中一个典型的实现差异问题。
3.  **[Issue #4683]** `temperature parameter not omitted for claude-sonnet-5 (causes 400 error)`: **2条评论，1个👍**。虽然刚提出，但迅速获得一个高优先级修复 PR [#4685]，说明这是影响用户即时使用的严重问题。用户 @jmffraiz 发现了特定模型与新 API 的不兼容性，问题解决速度很快。
4.  **[Issue #4010]** `Feature proposal: text-to-speech / voice output support`: **3条评论，2个👍**。虽然评论数不是最高，但获得的 👍 最多，表明“语音输出”功能是社区一个广泛且被压抑的强需求，希望补上语音交互的“最后一公里”。

### 5. Bug 与稳定性

今日报告了大量 Bug，按严重程度排列如下：

**严重 (Crash / 数据丢失 / 安全):**
*   **[Issue #4652]** `Nanobot process crashes directly when MCP tool call exception`: MCP 工具调用异常直接导致进程崩溃。**已有修复 PR [#4666]**。
*   **[Issue #4076]** `Security: message tool lacks outbound recipient authorization...`: 邮件工具存在严重安全漏洞，可向未授权目标发送消息和读取任意文件。**已有修复 PR [#4668]**。
*   **[Issue #4683]** `temperature parameter not omitted for claude-sonnet-5 (causes 400 invalid_request_error)`: 新模型请求失败，导致用户完全无法使用。**已有修复 PR [#4685]**。

**中等 (功能异常 / 体验差):**
*   **[Issue #4061]** `Bug: OpenAI-compatible text-format tool calls are not parsed...`: 部分主流模型无法正确使用工具。**已有修复 PR [#4662]**。
*   **[Issue #4511]** `[bug] Windows 系统下，gateway 命令行选项 --background 的问题`: Windows 后台进程管理和日志记录不一致。
*   **[Issue #4544]** `[bug] [Windows] exec uses cmd.exe for single-line...`: Windows 环境中，单行和多行命令解释器不一致，导致跨平台脚本难以编写。
*   **[Issue #4082]** `Bug: cron jobs reuse fixed cron:{job.id} session context across runs`: 定时任务运行时状态未隔离，导致上下文污染。
*   **[Issue #3626]** `Telegram long polling silently hangs`: 长时间静默后，Telegram机器人“假死”，不再接收消息。
*   **[Issue #2829]** `Ollama tool calling broken`: 特定 Ollama 模型工具调用完全失效。
*   **[Issue #2954]** `Email checking and handling not working consistently`: 邮件功能运行时好时坏，不可靠。
*   **[Issue #3166]** `Feishu channel doesn't show progress notifications...`: 飞书频道缺少关键的进度通知，用户体验割裂。

**低等 (误导 / 文档 / 建议):**
*   No critical low severity issues reported today.

### 6. 功能请求与路线图信号

今日社区提出的新功能请求，结合已有 PR，反映了以下发展方向：

*   **模型 & 平台生态扩展：**
    *   **[Issue #4604]** `[feature request] Anthropic OAuth`: 期望支持 Anthropic OAuth 登录，无需 API Key。**已有实现 PR [#4632]**，大概率将进入下一版本。
    *   **[PR #4459]** `feat: add Mattermost channel support`: 新增 Mattermost 频道集成，**正在开发中**，符合向企业级通讯平台扩展的战略。
    *   **[Issue #2231]** `[feature request] Feature request: Plugin system...`: 用户期望有类似 Copilot 的插件系统，这是项目走向平台化的核心需求。
    *   **[Issue #3436]** `[enhancement] Call external agent`: 期望 Nanobot 能调用外部 Agent 框架（如 opencode），这与 PR [#4686] 添加的 OpenCode 支持方向一致。
*   **交互体验增强：**
    *   **[Issue #4010]** `Feature proposal: text-to-speech / voice output support`: 呼声很高的语音输出功能，是完善语音交互闭环的关键。
    *   **[Issue #4419]** `Feature: Automatic reasoning effort escalation...`: 期望根据不同任务复杂度自动调整模型“思考深度”，优化成本与性能。
    *   **[Issue #4253]** `[enhancement] support overriding model per conversation`: 用户希望能在不同聊天中切换不同的模型预设，以应对不同场景（如隐私vs速度）。
*   **功能深化：**
    *   **[Issue #2937]** `[Feature] Embedding-based context compression...`: 社区对更智能的上下文管理需求，超过当前基于 Token 预算的简单裁剪。
    *   **[Issue #3257]** `Pipeline latency metrics for voice interactions...`: 高级用户希望对复杂的语音交互流程进行性能监控。

### 7. 用户反馈摘要

从今日的讨论中，可以提炼出真实用户的典型痛点和使用场景：

*   **痛点：** 功能“时好时坏”，不可靠。如 Email 检查不稳定、Telegram 长轮询“假死”、Ollama 工具调用完全失效，严重影响了用户将 Nanobot 作为“核心助手”的信任度。
*   **痛点：** 多平台差异化实现导致的挫败感。钉钉文件上传、飞书进度通知的缺失、Windows 系统下 shell 行为的不一致，让需要跨平台或特定平台深度使用的用户感到困扰。
*   **场景：** “隐私与效率”之间的权衡。用户 @rombert 在 Issue #4253 中提到，希望能在聊天中动态切换“快速但非私密”的 OpenRouter 模型和“私密但慢”的本地模型，这是个人 AI 助手落地的典型场景。
*   **满意点：** 项目维护者响应迅速。例如 #4683 从提出到获得修复 PR 的时间非常短，社区对这种“快速反应”表示认可。大量批量修复 PR 的提交也显示出项目团队的积极性。

### 8. 待处理积压

以下是一些长期未得到响应或解决的重要项目，需要维护者关注：

*   **高优先级 (影响广泛或严重):**
    *   **[Issue #2829]** `Ollama tool calling broken` (更新于2026-04-05): 该问题已存在3个月，且是核心功能（工具调用）的严重Bug，影响所有使用特定 Ollama 模型的用户。需要明确给出调查进度或临时解决方案。
    *   **[Issue #2836]** `Add support for separate workspace per WhatsApp chat_id...` (更新于2026-07-02): 涉及 WhatsApp 用户数据隔离和隐私的核心设计问题，已有成熟讨论但无明确方案的 PR 关联。
    *   **[Issue #3626]** `Telegram long polling silently hangs` (更新于2026-07-02): 类似问题，严重影响了 Telegram 用户的机器人可用性。
*   **中优先级 (功能完善/特性请求):**
    *   **[Issue #2231]** `Feature request: Plugin system for agent extensibility` (更新于2026-07-02): 这是社区呼声较高的长期功能需求，已累积大量讨论，建议维护者进行 RFC (Request for Comments) 讨论。
    *   **[Issue #3344]** `DingTalk Group Can not Seed file to Nanobot Agent` (更新于2026-07-02): 此问题已存在两个半月，涉及到企业用户高频使用的钉钉集成，建议给出官方的临时解决方案或开发计划。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的Hermes Agent GitHub数据，我已为您生成了2026-07-03的项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-07-03

## 1. 今日速览

项目今日活跃度极高，Issues 和 PRs 更新均达 **50 条**，显示了社区高度的参与度和项目密集的维护节奏。今日核心动态集中在两个方面：一是修复了大量并发、线程安全和数据校验类的底层稳定性 Bug（主要集中在 `comp/agent` 和 `comp/gateway` 模块）；二是社区反馈热度持续，多个高赞功能请求（如桌面客户端瘦身）和复杂 Bug（如QQ机器人无限重连）讨论深入。值得一提的是，有 **27 个 PR 被合并/关闭**，但其中绝大部分是由贡献者 `wesleysimplicio` 提交的已关闭旧 PR，这暗示项目可能正在进行批量补丁清理或回归测试。整体来看，项目处于 **高密度的 Bug 修复和稳定性加固** 阶段。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有 **27 个 PR 被合并或关闭**，主要聚焦于提升核心模块的健壮性与修复边缘情况。虽然大部分 PR 由 `wesleysimplicio` 提交，但覆盖范围广泛，体现了项目在多个技术栈上的精细化打磨：

- **核心Agent稳定性**：
    - **PR #24734** (已关闭): 修复了 OpenRouter 客户端的 TOCTOU 竞态条件，通过加锁确保并发安全。
    - **PR #24618** (已关闭): 修复了 `hermes_state` 中 `get_last_init_error()` 的线程安全问题，补齐了锁机制。
    - **PR #22624**  (已关闭): 修复了 Qwen 等供应商因系统消息位置不对导致的模板渲染崩溃问题。
- **Gateway & 消息传递**：
    - **PR #25757** (已关闭): 修复了飞书（Feishu）合并转发消息的解析问题，支持更多负载格式。
    - **PR #22391** (已关闭): 优化了 Gateway 在 systemd 下的优雅退出逻辑，避免重复实例导致的混乱。
- **工具与插件健壮性**：
    - **PR #22746** (已关闭) & **PR #22741** (已关闭): 增加了对 API 返回的非数值型成本的保护性转换，防止因异常数据崩溃。
    - **PR #24558** (已关闭): 为 `holographic` 记忆插件增加了对中文(中日韩)等非ASCII字符的实体识别支持，显著改善了非英语用户的记忆检索效果。
    - **PR #22670** (已关闭): 为终端工具增加 `foreground sleep > 30s` 的限制，防止过长命令阻塞Agent。
- **桌面应用与UI**：
    - **PR #57443** (已关闭): 新增了桌面应用覆盖层（Overlay）的内页宽度限制（75rem），提升了宽屏下的可读性。

**项目健康度评估**：大量针对并发、数据校验和特定平台适配的 Bug 修复被合并，表明项目正向着更稳定、更成熟的方向迈进。尤其对非英语用户（CJK）的支持优化，是提升全球用户体感的重要一步。

## 4. 社区热点

今日社区讨论高度聚焦于**用户体验的冲突与阻塞问题**。

- **`/steer` 指令误触发注入防御 (Issue #36934)**:
    - **诉求**: 用户在执行工具调用(`/steer`)时，合法的操作指令被模型误判为“提示注入”，导致正常交互中断。
    - **热度**: 8条评论。这是一个硬核技术问题，反映了模型安全策略与用户功能之间的**根本性矛盾**。解决方案需要在安全性（防止注入）与可用性（用户能自由干预）之间找到精确平衡。此类问题解决的好坏，将直接决定高阶用户对Agent自主性与可控性的满意度。

- **QQBot 无限重连循环 (Issue #52914)**:
    - **诉求**: 最新版更新后，QQ机器人网关因参数缺失陷入无限重连，无法使用。
    - **热度**: 12条评论，最高评论数。这是一个**阻塞性 Bug**，直接导致平台功能瘫痪。高评论数表明该问题影响面广，社区用户反应强烈，急需修复。

- **桌面客户端不得不是“胖客户端” (Issue #38602)**:
    - **诉求**: 用户希望桌面应用能作为纯“瘦客户端”运行，连接远程Hermes实例，而非本地必须启动完整运行时。
    - **热度**: 8条评论，**37个👍**。这是社区**需求最强烈的功能请求**。它反映了用户对云端部署、多设备协同和资源受限环境（如低配笔记本）下使用的真实需求，是项目从单机应用走向服务化架构的关键信号。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

| 严重程度 | Issue 编号 | 标题摘要 | 状态 | Fix PR |
| :--- | :--- | :--- | :--- | :--- |
| **P1 (严重)** | **#36934** | `/steer` 指令被误判为提示注入 | 开放中 | 暂无 |
| **P2 (高)** | **#52914** | QQBot 网关无限重试循环 | 开放中 | 暂无 |
| **P2 (高)** | **#56704** | `computer_use` 在 Linux/WSL 下因 `int(None)` 崩溃 | 开放中 | 暂无 |
| **P2 (高)** | **#53449** | Telegram 短消息在某些情况下重复发送 | 开放中 | 暂无 |
| **P2 (高)** | **#53773** | TUI WebSocket 因长时间 `delegate_task` 断开 | 已关闭 | 暂无 |
| **P3 (中)** | **#53049** | 桌面左侧菜单高CPU持续刷新 | 开放中 | 暂无 |
| **P3 (中)** | **#47368** | 桌面端“删除 profile”功能失败，profile 会重新出现 | 开放中 | 暂无 |
| **P3 (中)** | **#57381** | `hermes-setup` 在 Python 3.14 上因 `distutils` 被移除而崩溃 | 开放中 | 暂无 |
| **P3 (中)** | **#57355** | MCP 服务器子进程在重试时产生僵尸进程 | 开放中 | 暂无 |

- **严重性总结**: 今日未出现 **P0 (紧急，影响全系统)** 的Bug。但 **P1/P2** 级别的Bug数量较多，且直接关联核心功能（QQBot、模型注入防御、计算机控制），需要重点关注。`computer_use` 在 WSL 上的崩溃问题 (#56704) 对开发者友好度影响较大。
- **值得关注**：`desktop` 模块频繁出现 UI 相关 Bug（#47368, #53049），作为用户主要交互界面，这些稳定性问题应优先处理。

## 6. 功能请求与路线图信号

今日用户提出的功能需求反映了三个主要方向：

- **客户端架构解耦**：
    - **#38602** (Desktop瘦客户端): 呼声最高，这表明用户期望有一整套“服务端+远程客户端”的部署模式。若采纳，将是架构上的重大升级。
    - **#56687** (支持 Vertex 提供商 & Service Account JSON 上传): 这是对企业级用户需求的响应，表明项目正在吸引企业用户，需要提供更专业、更便捷的认证配置方式。
- **控制与定制化**：
    - **#32474** (`/queue cancel` 命令): 反映用户在与Agent交互时，需要更精细的“用户控制权”，尤其是在Agent处理任务时，能即时取消当前操作或清空待处理队列。
    - **#13490** (可配置 TUI 状态栏): 对个性化UI的需求，适合高级用户和主题制作者。
- **安全与集成**：
    - **#23944** (通用 OAuth Broker): 解决多实例下刷新令牌冲突的技术难题，是提升认证系统健壮性和可扩展性的高级需求。
    - **#3630** (高级安全Secrets管理第四阶段): 路线图中长期规划的一部分，但社区仍有讨论，说明了对企业级安全特性的持续关注。

**预测**：**#38602** (瘦客户端) 和 **#32474** (任务队列控制) 最有可能被纳入下一个版本的特性清单，它们直接解决了用户的真实痛点。

## 7. 用户反馈摘要

- **正向反馈**：
    - 对于 **支持 GCP Vertex 提供商** (#56687) 的评价是“a massive and excellent update!”，表明企业级功能和提供商扩展受到欢迎。
- **负面与痛点**：
    - **桌面端体验不佳**: “Delete profile” 功能失败(#47368)和菜单高CPU刷新(#53049)严重影响了桌面端的基本使用体验。
    - **模型交互冲突**: `/steer` 功能被误报为注入 (#36934) 和 `Litellm` 上下文窗口检测失败 (#8465) 是用户使用高级 Agent 功能时遇到的直接障碍。
    - **平台适配不完善**: QQBot (#52914) 和 Telegram (#53449, #48811) 的各类问题表明，多平台网关的稳定性和功能完整性仍有提升空间。
- **典型使用场景**：用户 `diegohb` 请求瘦客户端，揭示了“在公司电脑上远程连接到家中强大服务器运行 Hermes”的典型场景。用户 `jplorandi` 在Python 3.14 上的报错，代表了“尝鲜者”和“开发者”群体在更新环境时遇到的兼容性问题。

## 8. 待处理积压

以下为长期未关闭或最近活跃但尚未解决的重要问题，建议维护者关注：

1.  **#38602** [Feature]: Desktop Client-Only Installation (2026-06-04创建)
    - **高赞 (37👍)** 且近期仍在讨论，应明确是否纳入短期路线图，或给与反馈。
2.  **#36934** [Bug]: `/steer` flagged as prompt injection (2026-06-01创建)
    - **P1 严重性** 且涉及安全与功能的核心冲突，长期未解决，可能影响所有使用 `/steer` 的用户。
3.  **#8465** [Feature]: Proper Litellm support (2026-04-12创建)
    - 已开设近3个月，关系到使用自定义模型和代理的用户的体验，体现了项目对外部模型生态系统集成的支持程度。
4.  **#23944** [Feature]: Proposal: generic OAuth broker credential source (2026-05-11创建)
    - 一个设计良好的架构提案，如果能得到维护团队的认可和指导，可以推动项目认证能力的进化。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-07-03

## 1. 今日速览

过去24小时内，PicoClaw 项目整体呈现 **高合并活跃度、低新增问题** 的状态。虽然仅新增 2 个 Issue，但 PR 活动极为密集（共 25 条），其中 14 个 PR 已合并/关闭，11 个仍待合并。这主要得益于 Dependabot 自动依赖更新批量触发的合流，以及几个积压的 stale 功能/修复 PR 被最终关闭。风险方面，v2→v3 配置迁移故障与 Matrix sync 无限期掉线两个关键 Bug 昨日被用户报告，尚无对应的修复 PR。项目无新版本发布。

## 2. 版本发布

**无新版本发布。**

## 3. 项目进展

今日项目向前推进主要体现在 **基础设施依赖升级** 和 **历史 PR 清理** 两方面：

### 3.1 功能/修复 PR 最终合并（stale 清理）
- **#3063** [CLOSED] feat: add deltachat gateway — 经过近一个月的 Open 状态，该新增 Delta Chat 网关功能的 PR 最终被关闭（具体是被合并还是被放弃需进一步确认）。([链接](https://github.com/sipeed/picoclaw/pull/3063))
- **#3160** [CLOSED] fix(auth): reject cross-site launcher setup requests — 增加了浏览器来源检查，防止跨站请求劫持密码设置流程，提升了安全性。([链接](https://github.com/sipeed/picoclaw/pull/3160))
- **#3161** [CLOSED] fix(exec): keep deny patterns active for custom allow rules — 修正了 Allow 规则完全绕过 Deny 模式的逻辑缺陷。([链接](https://github.com/sipeed/picoclaw/pull/3161))
- **#3158** [CLOSED] test: cover sandbox fs Windows path handling — 增加了对 Windows 路径处理回归测试。([链接](https://github.com/sipeed/picoclaw/pull/3158))

### 3.2 依赖升级（Dependabot）
有 12 个 Dependabot PR 被标记为 Closed（已合并），涉及 `eslint`、`shadcn`、`typescript-eslint`、`@vitejs/plugin-react`、`react-i18next`、`golang.org/x/crypto`、`anthropic-sdk-go` 等前后端依赖。其中 copilot-sdk 从 0.2.0 升级至 1.0.x 版本（#3177 已合并，#3207 仍 Open），这是值得关注的 Major 级别跳转。

## 4. 社区热点

今日社区讨论偏冷，**所有 Issue 与 PR 的评论数均为 0**，没有出现高辩论度的讨论。不过，以下两个方向的关注度值得注意：

- **#3206** v2→v3 config migration fails — 这是新鲜发布的 Bug，涉及“即使是全新安装也会失败”的严重用户体验问题，虽无评论但潜在影响面较大。([链接](https://github.com/sipeed/picoclaw/issues/3206))
- **#3203** Matrix sync loop 无重连逻辑 — 属于长期运行的静默崩溃隐患，对使用 Matrix 通道的用户影响较大。([链接](https://github.com/sipeed/picoclaw/issues/3203))

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 严重 | [#3206](https://github.com/sipeed/picoclaw/issues/3206) | v2→v3 迁移失败，`build_info`、`session.dm_scope` 被误判为未知字段，影响所有使用 config 的命令（`status` 等），即使全新安装也触发。 | ❌ 无 |
| 🟠 高危 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` 长轮询在断网/服务器重启后永久死亡，无自动重连，且因主进程存活避开了 systemd 重启逻辑。用户需手动重启整个 PicoClaw。 | ❌ 无 |
| 🟡 中危 | [#3171](https://github.com/sipeed/picoclaw/pull/3171) (PR 状态 OPEN) | LINE 通道 `Send` 方法缺少 `sync.Map` 类型断言 `ok` check，可能导致类型不匹配时 panic。已有 PR 但尚未合并。 | ✅ 有 PR 待合入 |

## 6. 功能请求与路线图信号

- **Delta Chat 网关**（#3063）：功能已实现并合并，可能成为下一版本的亮点。
- **Copilot SDK 升级**（#3207 OPEN）：依赖从 `0.2.0` 跳升至 `1.0.5`，这通常带来 API 破坏性变更。维护者需评估是否影响现有 Copilot 集成逻辑。
- **Mautrix Go SDK 升级**（#3208 OPEN）：`maunium.net/go/mautrix` 从 v0.27.0 升至 v0.28.1。此升级对于修复 #3203 Matrix 断线问题可能有间接帮助（新的 SDK 可能内置了重连机制）。

## 7. 用户反馈摘要

由于今日所有 Issue/PR 评论数均为 0，暂无直接的用户反馈。但从 Issue 描述可提炼出以下痛点：

- **v2→v3 迁移的兼容性灾难**（#3206）：用户反馈称“即使是全新安装最新版本 v0.2.9，也会触发 config 加载失败”。这暗示可能是 v0.2.9 发行版本身附带了不兼容的默认配置文件或迁移逻辑缺陷，而非用户手动修改导致。
- **Matrix 通道的静默死亡**（#3203）：用户特别指出“主进程存活、systemd 不重启”的机制使得该 Bug 难以被自动化监控发现，只能靠人工检查同步状态，属于运维噩梦。

## 8. 待处理积压

以下为长期未合并/未响应的 PR 及 Issue，建议维护者本周内关注：

| 项目 | 类型 | 创建/最近更新 | 描述 | 建议行动 |
|---|---|---|---|---|
| [#3165](https://github.com/sipeed/picoclaw/pull/3165) | PR (Open, stale) | 2026-06-24 | 修复 OpenAI 兼容接口中 Seed XML 工具调用恢复 | 已标记 stale 10 天，维护者需决定合入或关闭。 |
| [#3171](https://github.com/sipeed/picoclaw/pull/3171) | PR (Open, stale) | 2026-06-25 | LINE 通道 panic 风险修复 | 已标记 stale 8 天，与昨日 Bug 部分相关，建议优先合并。 |
| [#3207](https://github.com/sipeed/picoclaw/pull/3207) | PR (Open) | 2026-07-02 | Copilot SDK 大版本升级 | 需人工审查是否存在破坏性变更，与已合并的 #3177 冲突。 |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Issue (Open) | 2026-07-02 | Matrix sync 无重连逻辑 | 严重 Bug，建议尽快指派修复。 |

---

**总结：** 项目今日健康度整体较高（PR 合并活跃），但存在两个严重认知的近期 Bug 且无对应修复 PR，维护者应优先处理 #3206 与 #3203。此外，大量依赖自动更新（尤其是 copilot-sdk 大版本）需人工审查以避免引入兼容性问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-07-03

## 1. 今日速览

- **项目活跃度：高**。过去24小时内共有4个新Issue和14个PR更新，社区贡献继续保持强劲。
- **WhatsApp双通道重大Bug集中爆发**：#2912和#2911两个高优先级Bug揭示了NanoClaw在WhatsApp适配器架构上的根本设计缺陷，涉及用户ID不一致和适配器注册冲突，严重影响多通道部署的稳定性。
- **修复与清理齐头并进**：针对核心指令、容器运行时、调度系统等多个模块的PR正在队列中等待合并（12个待合并），显示了项目从功能推进向稳定性打磨的转向。
- **Agent模板功能进入收尾**：#2909和#2908两个PR正在进行最后的拼图，使Agent模板能在Codex provider中完整工作，标志着该功能的端到端完善进入最后阶段。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

### 今日合并/关闭的重要PR

- **#2771 `perf(container): configurable --shm-size (default 1g) + --init for agent containers`**（已合并）
  - **贡献者**：ankushchadha
  - **影响**：解决了Chromium在Docker容器中因默认`/dev/shm`只有64MB而崩溃的问题。新增`--shm-size`配置（默认1g）和`--init`参数，显著提升含Headless Chrome的Agent容器稳定性。
  - **里程碑意义**：这是对容器基础设施的关键加固，直接影响所有使用`agent-browser`的生产部署。

- **#2890 `feat(templates): local template loader, ncl --template, and docs`**（已关闭）
  - **贡献者**：amit-shafnir
  - **内容**：Agent模板功能的本地加载器及`ncl groups create --template`命令行接口，为后续的模板设置流程（#2909）和Codex支持（#2908）铺平道路。
  - **状态说明**：作为#2909的依赖PR，关闭意味着第一部成功落地。

**推动方向**：项目正在完成从“功能开发”到“功能整合+稳定性”的切换。Agent模板系列（#2890→#2909→#2908）将在未来几天内形成完整的端到端体验。

## 4. 社区热点

### 最受关注Issue

**#2911 `WhatsApp Cloud adapter collides with native WhatsApp in the adapter registry (no instance key)`**
- 作者：glifocat | 👍: 0 | 评论: 0 — 本日0回复，但严重性最高
- **诉求**：WhatsApp Cloud和原生Baileys通道共用`whatsapp`注册键，导致二者同时安装时一个会被静默禁用，消息被错误路由。
- **背后的设计问题**：暴露了`@chat-adapter/whatsapp`库硬编码`name = "whatsapp"`带来的扩展性缺陷。这不仅是Bug，更是适配器注册机制的设计漏洞。
- **已有Fix PR**：#2913（glifocat同日提交），将WhatsApp Cloud注册键改为`whatsapp-cloud`。

**#2912 `WhatsApp user ids diverge between Baileys and Cloud paths (JID vs bare wa_id) — roles/membership don't carry across`**
- 作者：glifocat | 评论: 0
- **关联问题**：即使#2911的注册冲突修复后，同一个用户通过不同WhatsApp通道获得的用户ID（JID vs 裸wa_id）不一致，导致权限和成员资格无法跨通道同步。
- **影响范围**：企业用户如果混用两个WhatsApp通道，群组角色管理将完全失效。

### 长时间等待PR

- **#2725 `Add web-search-plus skill`**（10天前创建，2天前更新）
  - 讨论热度高但迟迟未合并，可能涉及代码审查的细节点。

## 5. Bug 与稳定性

### 优先级排序

| 严重性 | Issue | 摘要 | 状态 |
|--------|-------|------|------|
| **High** | #2911 | WhatsApp Cloud与原生通道适配器键冲突 | 已有Fix PR (#2913) |
| **Medium** | #2912 | 两WhatsApp路径用户ID不一致，角色/成员资格不跨路径 | 暂无Fix PR |
| Low | #2916 | 测试/垃圾Issue（“hi there”） | 无 |

### 分析

- **#2911–#2912的连锁反应**：两个Bug本质上属于同一类——WhatsApp双通道架构设计的先天缺陷。目前#2911的Fix PR已出，但#2912（用户ID不一致）才是真正影响业务连续性的问题，需要更根本的用户标识规范方案。
- **没有今日报告的崩溃或回归Bug**，显示核心系统稳定性尚可。

## 6. 功能请求与路线图信号

### 可能进入下一版本的功能

- **Agent模板功能**（#2908、#2909）：今日PR密集，且#2890已合并，预示着`ncl --template`和模版化Agent创建将在下一个发布版本中完整可用。
- **实例级默认Agent Provider**（#2906）：Koshkoshinsk提交的新功能，允许在`.env`中设置`DEFAULT_AGENT_PROVIDER`，避免为每个群组重复配置。这是一个与运维体验密切相关的小而美特性，合并可能较大。
- **Web搜索扩展技能**（#2725）：已有完整的代码和文档，等待审查，若纳入将增强Agent的多源信息获取能力。

### 用户需求信号

- **容器基础设施配置**已通过#2771得到满足，可以预期用户对容器资源的细粒度控制需求仍在增长。
- **WhatsApp双通道问题**本质上是用户对“多Provider无感切换”的需求——当用户希望在一个实例上同时运行两种通道时，系统应该自动处理ID映射和能力归一化。

## 7. 用户反馈摘要

### 真实用户痛点

- **WhatsApp通道不可混用**（来自#2911、#2912）：任何尝试同时集成短信助手（Baileys）和WhatsApp Cloud API的用户都会遭遇配置冲突和权限异常。这直接影响了企业的多通道部署计划。
- **`CLAUDE.md`被host删除**（#2823的Fix PR）：用户报告host启动时会删除`groups/global/CLAUDE.md`，导致自定义指令丢失。Cutsnake01的PR是修复这个问题，但至今未合并。
- **定时任务循环重复**（#2915的Fix PR）：调度系统中的`handleRecurrence`方法在存在已完成的重复任务时，会为每一行生成下一次执行，导致重复任务爆炸。Shufel83的PR给出了去重方案。

### 满意/不满意点

- **容器性能提升获正面反馈**：#2771的合并在社区中受到关注，这个针对Chromium容器优化的PR解决了长期存在的随机崩溃问题。
- **模板功能受期待但等待时间长**：#2890、#2909、#2908系列PR从6月30日推进至今仍然有依赖未解决，用户功能预期的明确却带来了等待的不耐烦。

## 8. 待处理积压

### 需维护者关注的长期开放PR/Issue

| 类型 | 编号 | 摘要 | 未响应时间 | 紧急度 |
|------|------|------|------------|--------|
| **PR** | #2823 | `fix: remove groups/global/CLAUDE.md (host deletes it on every startup)` | 13天（6月20日创建） | **高**：直接影响所有用户的系统级指令持久化 |
| **PR** | #2824 | `fix: drop stale "Global Memory" instruction from main seed prompt` | 13天 | 中：seed提示中的过时指令不会造成功能失败，但会干扰LLM |
| **PR** | #2725 | `Add web-search-plus skill (multi-provider web search + extraction)` | 23天（6月10日创建） | 中：代码完整，等待审查 |
| **PR** | #2689 | `fix(signal): DM platform ID consistency, isMention, and ask_question/approval delivery` | 29天 | **高**：Signal通道的DM功能核心修复，涉及消息丢失和数据一致性问题 |
| **Issue** | #2912 | WhatsApp用户ID不一致 | 0天 | 高：新报告，暂无Fix PR |

### 提醒

- **Critical Path**：#2909和#2908作为Agent模板功能的最后两环，建议尽快合并以避免功能分散、增加后期冲突风险。
- **Signal通道PR积压严重**：#2689自6月4日提交，已近一个月无人处理。Signal是NanoClaw的主力渠道之一，该PR修复了DM无响应和平台ID不一致的关键Bug，应优先审查。
- **WhatsApp双Bug**建议合并处理：将#2911的Fix PR（#2913）和#2912的修复方案同步推进，避免“修了一半”的状态。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于 IronClaw 项目 2026-07-02 至 2026-07-03 数据生成的动态日报。

---

# IronClaw 项目日报 | 2026-07-03

## 1. 今日速览

今日 IronClaw 项目活动度极高，是近期最为繁忙的一天之一。**24小时内共有 23 条 Issue 更新和 50 条 PR 更新**，其中大部分为高优先级 Bug 报告和新功能的合并/提交。项目主要精力集中在“Reborn”分支的稳定性修复和功能补齐上，特别是 OAuth 集成、工具安装与凭证管理、以及 Slack 集成等关键基础设施。社区活跃度显著提升，QA（质量保证）团队和核心贡献者提交了大量的 Bug 与功能请求，项目正经历一**轮密集的迭代与打磨期**。

## 2. 版本发布

**无新版本发布。** 注意到存在一个积压的 PR `#5311` 尝试进行版本发布（涉及多个包的版本号更新），但尚未合并。

## 3. 项目进展

今日合并/关闭了 21 条 PR，标志着多项关键功能和修复的落地，项目正稳步向更完善的 Reborn 架构迈进。

- **核心基础设施增强：**
    - **[CLOSED] #5502**: **Slack 个人 OAuth** 功能合并。将 Slack 集成从手动粘贴令牌升级为**浏览器 OAuth 流程**，极大提升了用户体验和安全性。
    - **[CLOSED] #5501**: **修复响应泄露问题**。在 OAuth 令牌交换中跳过响应清理，确保凭证交换路径的正确性和安全性。
    - **[CLOSED] #5573**: 修复了与 Exa MCP 服务器的 SSE（Server-Sent Events）初始化解析问题，保证了上游搜索服务的稳定接入。

- **测试与代码质量：**
    - **[CLOSED] #5548, #5547**: 新增了针对 **Turn事件、附件读取、Skill、持久化、错误处理**等多个关键模块的单元/集成测试覆盖，增强了系统可靠性。
    - **[CLOSED] #5559**: 新增了架构检查脚本，用于在预提交阶段自动发现代码异味，提升了代码库的健康度。
    - **[OPEN] #5567**: 成功合并了一个大型重构 PR，**移除了6个冗余特质，统一了6个DTO集群**，净减少176行代码，降低了代码复杂度。

- **功能开发推进：**
    - **[OPEN] #5576**: 提起了合并 Slack 个人 OAuth 及 **将凭证管理迁移到 UI** 的超大型 PR，涉及数据库迁移和多个模块，是当前的核心工作之一。
    - **[OPEN] #5575**: 修复了 OpenAI Codex 提供者中未能正确处理 `event:` 行的 SSE 解析问题，增强了与 OpenAI API 的兼容性。
    - **[OPEN] #5574**: 提交了优化 “Reborn” 版本推理成本的性能优化 PR，通过**脚本优先执行和较小的输出上限**来减少模型调用步骤。

## 4. 社区热点

今日社区热点主要围绕**Slack 集成体验**和**AI的幻觉与错误处理**。

1.  **Slack 集成问题**: **#5522** 和 **#5508** 引发了社区关注。
    - **#5522**: 报告了“Reborn”例程在需要读取 Slack DM 时因缺少读取能力而失败。这暴露了 agent 能力描述与实际可用工具之间的脱节问题。
    - **#5508**: 报告了即使 Slack 连接正常，创建新例程时也提示“未找到 Slack 交付目标”的 Bug。
    - **诉求**: 社区强烈希望 Slack 功能（尤其是授权、DM读取、消息推送）能够稳定、一致地工作，这是其作为个人 AI 助手的关键场景。

2.  **Vision 模型幻觉**: **#5558** 报告了一个典型的 AI 幻觉问题：Vision 模型错误识别图片内容，并轻易接受用户的错误纠正，而不重新分析图片。
    - **诉求**: 用户对 AI 助手“言之凿凿”但输出错误的行为感到担忧。此 Issue 代表了对模型**推理可靠性、事实校验机制**的根本性需求。

## 5. Bug 与稳定性

今日报告的 Bug 密集且严重，主要集中在 “Reborn” 分支和 WebUI 前端。

**严重级别: P0/P1**
- **#5571** `[CLOSED]`: **Web 搜索因上游 IP 限流而失败，错误信息不完整导致整个对话中断。** (已合并修复 PR #5573)
- **#5522** `[OPEN]`: **“Reborn”例程因无法读取 Slack DM 而失败。** 这是一个功能缺失导致的崩溃级 Bug。
- **#5504** `[OPEN]`: **创建例程（Routine）时，UI 无限挂起，无反馈无错误。**
- **#5459** `[OPEN]`: **可配置技能和工具（核心功能缺失）。** 相关的 PR #5525、#5513、#5499 正在推进中。

**严重级别: P2**
- **#5552** `[OPEN]`: **多次工具调用失败后，错误信息过于笼统（“invalid result”），无法定位问题。**
- **#5509** `[OPEN]`: **聊天创建延迟与历史记录累积成正比。** (前端性能问题)
- **#5555** `[OPEN]`: **WebUI 布局问题：终端浮动按钮与聊天输入框重叠。**
- **#5551** `[OPEN]`: **自动化例程向 Slack 推送中间进度消息，而非最终结果。**
- **#5558** `[OPEN]`: **Vision模型幻觉，接受错误的用户反馈。**
- **#5554** `[OPEN]`: **移动端聊天布局因内容过长而水平溢出。**

**严重级别: P3及系统问题**
- **#5557** `[OPEN]`: **日志深度链接需要点击两次才能加载。**
- **#5556** `[OPEN]`: **侧边栏在离开页面后仍高亮之前的聊天。**
- **#5530** `[CLOSED]`: **基于条件的技能自动激活功能在“Reborn”路径中完全死掉。** (代码路径未连通)
- **#5572** `[OPEN]`: **HookedLoopCheckpointPort 未转发所有检查点事件，导致启用钩子的对话在检查点阶段失败。**
- **#5527** `[OPEN]**: **幂等性写入和读取作用域不匹配，导致生产环境下重放功能失效。**

## 6. 功能请求与路线图信号

本期功能请求非常密集，且有大量 PR 在积极跟进，明确指出了下一版本的开发方向。

1.  **可配置技能与工具 (Configurable Skills and Tools - #5459):** 这是今日最核心的功能请求。用户希望管理员或普通用户能**安装、激活 WASM 工具和技能**，并控制其可见范围（公共/私有）。相关的 PR #5513（管理员UI凭证管理）、#5499（从ZIP安装 + 环境变量凭证）、#5525（普通用户的私有工具安装）正在将这一蓝图变为现实，预计会成为下一版本的核心特性。

2.  **OAuth 与认证增强 (#5570):** 要求为每个 PR 预览提供稳定的 OAuth 回调 URL，以支持 Google SSO 的测试。这表明项目正在完善其 CI/CD 流程和对企业级 SSO 的支持。

3.  **Trace Commons 实例级追踪 (#5280):** 一个大型 PR，旨在引入**全实例范围的追踪注册、用户贡献者档案和追踪审查功能**。这标志着 IronClaw 正在构建其**可观测性**和**协作**相关的高级功能。

4.  **UI 与设计系统 (#5565, #5563):** 两个由新贡献者提交的 XL 级 PR，分别引入了**全新 Onboarding/NUX 体验**和**设计系统 Token 化**。这表明项目开始重视**用户引导**和**UI 一致性**，为未来的 AI 自主实现 UI 改进铺路。

## 7. 用户反馈摘要

综合 Issue 评论，用户（主要是 QA 团队和早期采用者）的反馈如下：

- **满意度场景**：
    - 项目**非常活跃**，PR 和 Issue 响应速度快，这给社区带来了信心。
    - **UI/UX 设计改进（如新的 Automations 页面）** 得到初步认可，被认为更清晰、更易用。

- **痛点与不满**：
    - **“Reborn”分支仍不稳定**，存在大量导致对话中断、创建任务卡死、错误信息不明确等问题，这是当前最大的用户痛点。
    - **Slack 集成体验割裂**。即使连接了 Slack，在创建自动化流程时仍会遇到“找不到目标”或推送错误内容（如推送中间步骤而非最终结果）的问题，使用户困惑。
    - **AI 模型的可信度问题**。Vision 模型的幻觉和对错误反馈的轻易妥协，动摇了用户对 AI 分析能力的信任。
    - **性能问题**。随着聊天历史增长，UI 响应变慢，影响了日常使用体验。

## 8. 待处理积压

以下 Issue 和 PR 长期未关闭或未得到维护者响应，需要关注：

- **关键 Issue**：
    - **#4108** `[OPEN]`: **Nightly E2E 测试失败。** 自 2026年5月27日至今持续失败，状态已是一月有余。这表明 E2E 测试框架或核心 codebase 可能存在需优先解决的根本性问题。

- **待合并 PR**：
    - **#5280** `[OPEN]`: **Trace Commons (大型功能)**。提出了 16 天，涉及众多模块协作和数据库迁移，是里程碑级别的功能。建议核心团队评估其合并优先级和潜在冲突。
    - **#5084** `[OPEN]`: **Redesign the automations page (UI 重构)**。提出了 15 天，功能已完成但尚未合并。鉴于 UI 类问题（如 #5555, #5554）开始被密集报告，此 PR 可能包含相应修复，建议尽快评审合并。
    - **#5576** `[OPEN]`: **Slack 个人 OAuth (新版组合)**。今日最新提交，但涉及 DB 迁移和多模块改动，风险较高。需要维护者仔细审查，确保其与已有的 #5502 等集成不冲突。

---
**分析师总结**: IronClaw 项目正处于 **“Reborn”架构快速迭代并解决关键稳定性问题的关键阶段**。社区和 QA 团队发现并报告了大量问题，同时核心团队通过海量的 PR 积极回应，项目整体方向正确。当前最大的风险在于 **“Reborn”分支的前端和后端 Bug 密集度**，这将直接影响用户对新一代版本的信心。建议项目组集中资源，优先解决 P0/P1 级的崩溃和功能性 Bug（如 #5522, #5504），并在下一个版本发布前，重点解决 Nightly E2E 测试长期失败的问题 (#4108)。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是为您生成的 LobsterAI 项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-07-03

## 1. 今日速览

过去24小时内，项目活跃度显著提升，共处理5个新Issues和8个新PR，其中7个PR已合并/关闭。值得注意的是，所有新Issues均为三个月前创建并已标记为“stale”，但近期获得了更新，这表明用户对旧有问题的持续关注。PR方面，项目团队围绕引擎启动体验优化、定时任务和设置页面Bug修复以及文档更新进行了大量工作，显示出项目正朝着提升用户界面稳定性和系统健壮性的方向稳步推进。整体来看，项目处于高强度的维护和修复周期中。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭了7个PR，覆盖了体验优化、Bug修复和文档更新，展现了项目多维度的进步。

- **引擎启动体验优化**：
    - **[PR #2259]** 与 **[PR #2257]** 由 `fisherdaddy` 提交，优化了引擎启动失败时的覆盖层显示，并将启动画面统一为连续界面，消除了之前“旋转光标”到“引擎启动覆盖层”之间的切换闪烁，提升了启动过程的流畅感和专业性。
- **核心功能Bug修复**：
    - **[PR #2256]**（待合并）与 **[PR #2255]**（已关闭）针对性地修复了定时任务“不通知”选项无效的问题。根因在于OpenClaw网关的 `cron.update` patch-merge逻辑无法清除已存在的 `delivery` 字段，此修复直接触及了任务执行的配置核心。
    - **[PR #2252]** 修复了删除当前使用的自定义模型提供者时导致设置页面白屏的严重问题。该问题的根本原因是 `confirmDeleteCustomProvider` 异步操作中的竞态条件。
- **文档与模型兼容性**：
    - **[PR #2258]** 修复了DeepSeek在长会话中Prompt缓存不稳定的问题，通过禁用对实时提示路径的聚合工具结果重写，保持了历史会话的字节稳定性，这对高频使用DeepSeek模型的用户至关重要。
    - **[PR #2254]** 与 **[PR #2253]** 更新了主页面图片和README文件，持续改善项目文档质量。

## 4. 社区热点

近期社区讨论主要集中在**页面核心** 的稳定性和逻辑一致性上。虽然今日暂无新的高活跃度议题，但以下标为“stale”的Issue在昨天获得更新，反映了用户持续关注的痛点：

- **[Issue #1354: 让龙虾帮忙启动pageant后电脑蓝屏](https://github.com/netease-youdao/LobsterAI/issues/1354)**：该问题报告了一个严重程度极高的系统级崩溃（蓝屏），已获得2条评论。尽管创建于4月，但仍在持续发酵，是社区中最受关注的高压问题之一。
- **[Issue #1358: 定时任务点击之后没有任何交互](https://github.com/netease-youdao/LobsterAI/issues/1358)**：用户对定时任务UI的反馈非常直接——“不知道任务有没有启动”。这反映了用户对操作反馈和系统状态可见性的核心诉求。巧合的是，今天的 **[PR #2255/2256]** 恰好解决了定时任务逻辑，这表明项目团队的修复方向与社区热点高度吻合。

## 5. Bug 与稳定性

今日报告的5个Issues均为历史遗留问题，但更新后仍待解决，按严重程度排列如下：

1.  **系统崩溃**：
    - **[Issue #1354]**：执行“启动pageant”指令后偶发蓝屏。这是当前项目中严重级别最高的问题，涉及系统内核交互，风险极高。尚无fix PR。
2.  **功能逻辑Bug**：
    - **[Issue #1357]**：“帮我开启pageant”回答已启动但实际未启动（必现）。与 #1354 联动，表明系统在识别和调用pageant相关功能时存在根本性缺陷。
    - **[Issue #1359]**：删除的任务在重启龙虾后再次出现。数据持久化与状态管理存在冲突，导致“僵尸任务”问题，严重影响用户信任。
    - **[Issue #1360]**：Agent自定义创建未做重名验证。这是一个明显的产品细节缺失，虽不致命，但会造成用户困惑和数据管理混乱。
3.  **UX体验问题**：
    - **[Issue #1358]**：定时任务点击后无交互反馈，无法确认启动状态。

## 6. 功能请求与路线图信号

今日新增Issues中没有涉及新的功能请求，主要集中于Bug报告。然而，从今日合并的PR中可以看出项目未来的优化方向：

- **UI/UX 一致性**：[PR #2257] 的连续启动画面与 [PR #2256] 对定时任务通知的修复，共同指向了提升界面反馈、减少用户困惑的持续努力。
- **模型生态兼容性**：[PR #2258] 对DeepSeek Prompt缓存的稳定性优化，表明项目非常重视对新兴、流行模型的深度适配和性能优化，这很可能成为未来版本的重点工作之一。
- **开发者体验优化**：[PR #2254/2253] 频繁更新文档，显示了项目团队对降低新用户和贡献者上手门槛的重视。

## 7. 用户反馈摘要

从今日更新的Issues评论中，可以提炼出以下用户痛点：

- **“黑盒”操作**：用户在操作核心功能（如定时任务 [#1358](https://github.com/netease-youdao/LobsterAI/issues/1358)）后无法获得明确反馈，感觉像在“盲操”，信任度大打折扣。
- **不一致的承诺**：系统“回答已启动”与实际状态不符（如pageant [#1357](https://github.com/netease-youdao/LobsterAI/issues/1357)），用户发现被“欺骗”后产生强烈不满。
- **持久化焦虑**：手动删除的操作被系统“铭记并复活”（如任务 [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)），用户对本地数据的控制权产生质疑，担心数据残留或状态错乱。

这些反馈共同指向一个核心诉求：**系统应当可预判、可信任、可控制**。

## 8. 待处理积压

以下为已进入“stale”状态但尚未解决的高风险/高影响Issue，需重点关注：

1.  **[Issue #1354: 蓝屏问题](https://github.com/netease-youdao/LobsterAI/issues/1354)** - **严重**。创建于2026-04-02，已停滞3个月。作为最严重的系统稳定性问题，其长期未解决将极大损害项目声誉，建议团队尽快成立专项调查。
2.  **[Issue #1359: 删除任务复活问题](https://github.com/netease-youdao/LobsterAI/issues/1359)** - **中高**。数据状态错误，严重影响用户对本地数据管理功能的信任。已有对应修复PR（[#2256](https://github.com/netease-youdao/LobsterAI/pull/2256)）在待合并状态，应尽快推进合并和发布。
3.  **[Issue #1360: Agent重名问题](https://github.com/netease-youdao/LobsterAI/issues/1360)** - **低**。虽然影响较小，但作为显而易见的产品缺陷，修复成本低，应尽早解决以避免引入更多后续问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 Moltis 项目 GitHub 数据生成的 2026-07-03 项目动态日报。

---

## Moltis 项目动态日报 | 2026-07-03

### 1. 今日速览

今日项目整体活跃度**中等偏低**。过去24小时内无新 Issue 提交，也无新版本发布，表明社区反馈和开发节奏处于相对平静期。但 Pull Request (PR) 活动较为集中，共有3条更新，其中 **2个待合并的增强功能** 和 **1个已合并的修复** 是今日的核心进展。项目维护者正在积极处理 WhatsApp 集成相关的技术债，并开始拓展 LLM 供应商生态。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日项目核心进展主要体现在 **WhatsApp 集成的稳定性修复** 和 **LLM 服务商生态扩展** 两个方向。

- **关键问题修复：WhatsApp 回复投递失败（已合并）**
  - **PR #1116**：成功修复了在 WhatsApp 隐私模式下，`@lid` 聊天中回复消息被静默丢弃的问题。根本原因是 LID（Low-level ID）寻址与推送通知（PN）所需的 JID（Jabber ID）之间存在映射缺失。该修复通过重写 JID 解决了这一问题，确保了即使在隐私对话中，回复也能成功投递。
  - **推进意义**：解决了核心通信链路上一个严重影响用户体验的 Bug，提升了 WhatsApp 集成的可靠性。
  - **链接**: [moltis-org/moltis PR #1116](https://github.com/moltis-org/moltis/pull/1116)

### 4. 社区热点

今日社区讨论热度不高，暂无评论或高反应度的 Issue/PR。这可能是因为当天提交的 PR 技术性较强，社区用户尚处于理解和评估阶段。

- **值得关注的 PR**:
  - **PR #1144** `feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6`：该 PR 旨在升级底层 WhatsApp 库，以支持 LID 原生寻址。这不仅是简单的版本升级，更是应对 WhatsApp 平台本身演进的必要技术跟进。虽然无评论，但任何对 WhatsApp 功能的依赖者都应关注。
    - **链接**: [moltis-org/moltis PR #1144](https://github.com/moltis-org/moltis/pull/1144)
  - **PR #1143** `Add Requesty as an OpenAI-compatible provider`：该 PR 希望将 `Requesty` 加入作为新的 LLM 服务商。这反映了社区对降低供应商锁定、增加灵活性的持续需求。
    - **链接**: [moltis-org/moltis PR #1143](https://github.com/moltis-org/moltis/pull/1143)

### 5. Bug 与稳定性

过去24小时内未报告新的 Bug。昨日已合并的 **PR #1116** 解决了一个关于 WhatsApp 回复投递失败 (Silent Drop) 的严重 Bug，已显著改善此方面的稳定性。

### 6. 功能请求与路线图信号

- **WhatsApp 深度集成**: **PR #1144** 请求升级 `whatsapp-rust` 库版本，以支持更底层的 LID 寻址。这预示着项目正在积极跟进 WhatsApp 协议的底层变更，是维持长期兼容性的关键举措，强烈暗示将在未来版本中全面拥抱 LID 架构。
- **LLM 供应商多元化**: **PR #1143** 提议加入 `Requesty` 作为新的 OpenAI 兼容提供商。这表明社区和开发者认为目前的 `OpenRouter` 配置方式可以很方便地复用，用户希望获得更多样化的 LLM 路由选择，以寻求成本、性能和可用性的平衡。该 PR 很可能被采纳并纳入下一个版本。

### 7. 用户反馈摘要

今日无新的用户评论或反馈。从已合并的 **PR #1116** 的摘要中可以推断出用户的核心痛点：
- **痛点**: 在 WhatsApp 隐私设置下，AI 助手的回复“静默丢失”，用户既收不到消息，也看不到投递回执，导致通信完全断裂且难以排查。这直接影响了用户对 AI 助手可靠性的信任。
- **满意点**: 该问题被成功定位并修复，解决了用户端一个非常让人困惑和沮丧的体验。

### 8. 待处理积压

- **PR #1144** (`feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6`): 这是一个新开的、尚未被合并的 PR。它将为 WhatsApp 集成带来重要的底层架构升级。**提醒维护者**：鉴于该 PR 涉及外部依赖的重大变更和核心功能，建议尽快安排代码审查和测试，以避免与未来微信平台的变更产生冲突。
    - **链接**: [moltis-org/moltis PR #1144](https://github.com/moltis-org/moltis/pull/1144)
- **PR #1143** (`Add Requesty as an OpenAI-compatible provider`): 同样为待合并状态。虽然实现逻辑清晰，但引入新的外部依赖需要评估潜在的安全风险和后期维护成本。
    - **链接**: [moltis-org/moltis PR #1143](https://github.com/moltis-org/moltis/pull/1143)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 CoPaw (QwenPaw) GitHub 数据生成的 2026-07-03 项目动态日报。

---

# CoPaw (QwenPaw) 项目动态日报 | 2026-07-03

## 1. 今日速览

今日项目社区活动异常活跃，尤其在**问题 (Issue) 反馈**和**代码合并 (PR)** 两方面达到了近期高峰。**v2.0.0-beta.2 版本**的发布是今日最重大的事件，标志着项目向 2.0 正式版迈出了坚实一步。社区反馈呈现出新旧版本问题交织的特点：既有针对 v1.1.x 稳定版的**内存泄漏**、**飞书/QQ 通道 Bug**等严重问题，也有大量关于 v2.0.0 新版本**上下文管理**、**模型切换**等高级功能的讨论与 Bug 报告，显示出社区对新功能的尝鲜热情以及版本迭代带来的阵痛。代码贡献方面，今有大量修复性 PR 被提出，涉及**安全硬编码**、**上下文截断**等多个关键领域，项目维护与社区协作进入密集期。

## 2. 版本发布

- **v2.0.0-beta.2 (Beta 版)**
  - **链接**: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.2
  - **核心内容**: 此版本为 QwenPaw 2.0.0 的第二个 Beta 版本，处于**积极开发阶段**。
  - **更新亮点**: 主要更新集中在 CLI 能力上，新增了 `cron up` 相关功能。
  - **⚠️ 重要警示**:
    - **非生产环境版本**: 此版本**不推荐**用于生产环境，仅面向开发者和早期采用者。
    - **可能包含** **Breaking Changes**: 升级至该版本可能导致现有配置或功能不兼容，请业务系统谨慎评估。
    - **数据安全与回滚**: 升级前请务必备份相关数据（如 `~/.qwenpaw` 目录），并制定详细的回滚计划。

## 3. 项目进展

今日共有 **27 个 PR 被合并/关闭**，显著推进了项目的稳定性和安全性。

- **安全与配置强化 (Security & Config)**
  - **PR #5745** (已合并): 修复了对话 JSONL/导出文件中的密钥硬编码问题，实现了关键凭证的脱敏存储 [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5745)。
  - **PR #5740** (已合并): 支持 `agent.json` 等配置文件中使用 `${ENV_VAR}` 环境变量引用，增强了部署灵活性 [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5740)。

- **核心功能修复 (Core Fixes)**
  - **PR #5287** (已合并): 修复了上下文压缩 (compaction) 因摘要超出 schema 最大长度而崩溃的问题 [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5287)。
  - **PR #5533** (已合并): 优化了媒体能力降级逻辑，避免将模型的内容安全审核错误误判为媒体处理能力不足 [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5533)。

- **UI/UX 与稳定性提升**
  - **PR #5620** (已合并): 改进了 Agent 管理页面的表格样式，自动换行显示描述，提升可读性 [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5620)。
  - **PR #5738** (已合并): 增强了认证模块的限流策略，增加了多维度防护，提升系统安全性 [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5738)。
  - **PR #5743** (已合并): 修复了 macOS 上 CI 构建失败的问题，解决了 `extra_flags` 在 bash 3.2 下的兼容性问题，保障了桌面端构建的稳定性 [PR链接](https://github.com/agentscope-ai/QwenPaw/pull/5743)。

**总结**: 项目在修复旧版本 Bug、增强配置安全性以及打磨 UI 细节方面取得了明确进展。特别是针对安全存储和上下文压缩的修复，直接回应了社区近期的痛点。

## 4. 社区热点

今日社区讨论的焦点集中在**安全机制**和**新版本 (v2.0.0) 的稳定性**上。

- **#5705 [Feature] 密钥脱敏与安全存储**: 获得 6 条评论。
  - 链接: https://github.com/agentscope-ai/QwenPaw/issues/5705
  - **核心诉求**: 用户深入源码，系统性地提出了 QwenPaw 当前安全机制的几处缺口，包括 agent.json 环境变量引用不完整、对话日志未脱敏等。这引发了社区对数据安全的高度关注。**后续反应**：该 Issue 提出的问题已通过 PR #5741 得到部分解决。

- **#5746 [Bug] 2.0 beta：scroll 上下文压缩错误折叠**: 获得 2 条评论。
  - 链接: https://github.com/agentscope-ai/QwenPaw/issues/5746
  - **核心诉求**: 用户在 v2.0.0b2 版本中遇到严重上下文错乱，Agent 在进行心跳任务时，因上下文压缩错误地折叠了当前任务，导致 Agent 回复了历史旧消息而非当前内容。这暴露了 v2.0.0 新上下文管理策略的缺陷，引发了早期用户的共鸣。**后续反应**：已有对应修复 PR #5747 被提交。

## 5. Bug 与稳定性

以下为今日报告的 Bug，按严重性排列：

- **严重: 功能中断、数据风险**
  1. **#5720 [Bug] v1.1.12.post2 内存泄漏**: 进程运行 1 小时后内存从 150MB 膨胀至 580MB，最终被系统杀死。用户分析认为与异步任务和 HTTP 会话泄漏有关。 **严重程度: 高** | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5720)
  2. **#5746 [Bug] v2.0.0b2 上下文压缩错误**: 当前任务被错误折叠，导致模型回复历史消息。 **严重程度: 高** | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5746) (已有修复 PR #5747)
  3. **#5748 [Bug] Agent 因工具调用失败永久挂起**: 消费者线程阻塞，typing 指示器不停止。 **严重程度: 高** | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5748) (已有修复 PR #5749)

- **中-重度: 渠道功能受损**
  4. **#5709 [Bug] 飞书通道硬丢弃 Bot 消息**: 多 Agent 协作场景下无法接收来自其他 Bot 的 @消息。 **严重程度: 中** | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5709)
  5. **#5696 [Bug] QQ 频道 (频道) WebSocket 重连后 `self._http` 变为 None**: 导致获取访问令牌失败，所有功能中断。 **严重程度: 中** | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5696)
  6. **#5708 [Bug] 飞书交互式卡片消息不解析**: Agent 无法读取卡片内用户填写的文本内容。 **严重程度: 中** | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5708)

- **低-中度: 性能/体验问题**
  7. **#5725 [Question] Console 流式输出卡顿**: 浏览器在流式输出期间明显卡顿。 **严重程度: 低** | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5725)
  8. **#5676 [Bug] v2.0.0b2 系统提示中未列出可用 Skills**: 影响 Agent 按提示使用技能。 **严重程度: 低** | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5676)

## 6. 功能请求与路线图信号

今日的 Feature Request 指向了几个明确的方向，部分已有对应 PR 跟进，显示其很可能被纳入下一版规划。

- **🔜 安全与配置 (已被纳入)**
  - **#5705 密钥脱敏**: 已由 PR #5741 实现。
  - **#5737 增强 CLI 能力**: 用户希望在非图形化场景下更方便地操作和管理 Skills。尚未有直接 PR，但 v2.0.0-beta.2 已开始加强 CLI，此需求得到回应的概率较高。

- **🔜 功能弹性与自动化 (有 PR 跟进)**
  - **#5718 自动切换模型**: 用户希望 Agent 能在模型配额不足时自动切换，实现全闭环运行。**对应 PR #5597** 已实现 LLM 模型回退 (fallback) 支持，该功能很可能在 v2.0.0 中正式推出。
  - **#5615 视觉回退 (Vision Fallback)**: 已由 PR #5726 实现。

- **💡 体验优化 (有 PR 跟进)**
  - **#5712 消息文本选择和自动复制**: 该需求非常具体。**对应 PR #5739** 已经提交，计划在 Console 中实现该功能。

## 7. 用户反馈摘要

- **痛点聚焦**:
  - **版本迭代的阵痛**: 尝试 v2.0.0 Beta 版的用户遇到了上下文管理、功能执行等新鲜 Bug (如 #5746, #5748)，表现出“又爱又恨”的态度。
  - **渠道接入体验差**: 飞书和 QQ 通道的多个 Bug (如 #5708, #5709, #5721) 严重影响了多 Agent 协作和特定场景下的使用体验。用户需要频繁切换通道或面临功能失效。
  - **核心性能问题未决**: 内存泄漏 (#5720) 和浏览器卡顿 (#5725) 是比较影响日常使用体验的性能问题，特别是内存泄漏可能导致数据丢失。
  - **配置与文档不清晰**: 有用户反馈“关闭所有工具审批后仍弹出窗口” (#5703)，表明配置逻辑或文档对用户存在误导。另外，系统提示未列出可用 Skills 也表明文档或 Agent 配置逻辑待完善 (#5676)。

- **使用场景**:
  - **日常助手**: 版本更新追踪、任务协作。
  - **多 Agent 协作**: 在飞书、QQ 等 IM 频道中进行多 Agent 群聊，对消息准确性和 Agent 感知能力要求高。
  - **高级工作流**: 利用 Cron Job、Skill 编排等实现自动化任务 (如心跳检测、信息聚合)。

## 8. 待处理积压

以下为值得维护者重点关注的、开放时间较长或具有重要意义的 Issue/PR。

- **关键问题**
  - **#5273 [Open] QwenPaw v2.0.0 Pre-release Bug & Issue Tracker**: 这是跟踪 v2.0.0 系列预发布版本所有问题的“总入口”，更新于昨日但仍有大量关联问题未关闭，是关注 2.0 稳定性的核心线索。 [链接](https://github.com/agentscope-ai/QwenPaw/issues/5273)
  - **#4795 [Closed] 向量索引无限膨胀**: 虽然已关闭，但内存泄漏根因（ChromaDB `link_lists`）可能仍是 #5720 (新报告的内存泄漏) 的潜在原因之一，建议在复现 #5720 时重点排查 [链接](https://github.com/agentscope-ai/QwenPaw/issues/4795)。

- **待复核的修复 PR**
  - **#5747 [Open] 保护当前 active turn 不被 scroll 上下文压缩**: 直接修复了今日的重要 Bug #5746，建议优先审核并合并。 [链接](https://github.com/agentscope-ai/QwenPaw/pull/5747)
  - **#5749 [Open] 修复 Agent 挂死**: 修复了 #5748 中提到的严重问题，同样建议优先处理。 [链接](https://github.com/agentscope-ai/QwenPaw/pull/5749)

- **功能类**
  - **#5597 [Open] 全局和按 Agent 的 LLM 模型回退**: 这是 2.0 的重要 Feature PR，但已开放 4 天，持续更新中。主分支大概率会集成此功能，维护者应持续跟进其审核状态。 [链接](https://github.com/agentscope-ai/QwenPaw/pull/5597)
  - **#5692 [Open] 为搜索结果添加 Reranker**: 内存检索是 Agent 的核心能力，为其添加重排序功能是重要改进，该 PR 状态为 “Under Review”，值得关注。 [链接](https://github.com/agentscope-ai/QwenPaw/pull/5692)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的ZeroClaw GitHub数据，为您生成2026年7月3日的项目动态日报。

---

## ZeroClaw 项目动态日报 | 2026-07-03

**数据采集时间范围：** 2026-07-02 至 2026-07-03

### 1. 今日速览

ZeroClaw 项目在过去24小时内保持高度活跃。社区提交了37条Issue和50条PR，其中不乏**高风险**的Bug报告和**大规模**的特性PR。核心开发团队同时推进多项关键基础设施的重构，包括统一记忆系统、Git渠道集成以及OpenAI兼容性适配。虽然今日无新版本发布，但大量“待合并”PR（31条）的积压和多个紧急Bug被标记为“S1-工作流阻塞”，表明项目正处于密集的开发和修复周期。总体而言，项目**活跃度极高**，但稳定性和版本发布节奏可能面临挑战。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日合并/关闭了19条PR，重要进展包括：

- **MCP工具仪表盘修复**：PR [#8305](https://github.com/zeroclaw-labs/zeroclaw/pull/8305) 已合并，修复了配置的MCP服务器在Dashboard工具页面不显示的问题。这直接解决了用户反馈的可见性差距。
- **安全修补**：PR [#8547](https://github.com/zeroclaw-labs/zeroclaw/pull/8547)（进行中）通过移除`rag-pdf`特性来消除一个已知的RUSTSEC安全漏洞（`ttf-parser`），同时清理了审计清单，展示了积极的依赖风险管理。
- **平台兼容性**：PR [#8604](https://github.com/zeroclaw-labs/zeroclaw/pull/8604)（进行中）开始着手修复Windows平台的构建问题，通过静态链接MSVC CRT来确保二进制文件的自包含性，这是解决Windows上74个测试失败问题（#7462）的一部分。
- **技能系统改进**：PR [#8616](https://github.com/zeroclaw-labs/zeroclaw/pull/8616)（进行中）修复了技能前置标志`always: true`在紧凑提示模式下失效的问题，确保关键指令不会被遗漏。

**项目整体向前迈进：** 项目正在积极解决用户可见的Bug（如MCP工具显示问题）、加固安全防线、并开始解决跨平台兼容性问题。

### 4. 社区热点

本周最受关注的Issue和PR反映了社区在**工具体验**和**架构演进**方面的核心诉求：

- **Bug讨论焦点：#8193 - MCP工具在TUI中缺失**（14条评论）
  - **链接：** [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)
  - **诉求分析：** 此Issue是当前社区的痛点核心。核心问题在于Gateway API和ZeroCode TUI之间的工具发现不一致。用户期望的“即插即用”体验被打断，导致工作流完全阻塞（S1级）。关联的PR [#8305](https://github.com/zeroclaw-labs/zeroclaw/pull/8305)的合并表明开发团队已认识到此问题的严重性并正在解决，但其配套的Dashboard修复（#8302）仍在讨论中。
- **治理讨论焦点：#6808 - 工作流与标签清理RFC**（13条评论）
  - **链接：** [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
  - **诉求分析：** 这是一个涉及项目治理的RFC，旨在优化工作流、看板自动化和标签体系。长评论数表明核心维护者和贡献者对规范开发流程、减少维护负担有强烈共识。这是项目走向成熟的标志性讨论。

### 5. Bug 与稳定性

今日报告的Bug涉及多个关键领域，需优先关注：

**严重等级: S0 - 数据丢失/安全风险**
- **#5542 (WSL2 连续OOM)**：运行时守护进程在WSL2中持续内存溢出，已被标记为 `status:no-stale`，说明长期未解决，风险极高。目前**尚无直接fix PR**。
  - [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)

**严重等级: S1 - 工作流阻塞**
- **#8193 (MCP工具在TUI中缺失)**：如上文所述，工作流完全阻塞。关联PR [#8305](https://github.com/zeroclaw-labs/zeroclaw/pull/8305) 已合并，但根治可能还需要更多测试。
- **#8632 (源码安装失败)**：由于构建顺序问题，在包含`embedded-web`功能时编译失败。**尚无fix PR**。
  - [Issue #8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632)
- **#8627 (WhatsApp Web设备链接中断)**：由于WhatsApp引入了新的身份验证机制，设备链接流程被阻断。**尚无fix PR**。
  - [Issue #8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)

**严重等级: S2 - 行为降级**
- **#7462 (Windows 74个测试失败)**：跨平台兼容性问题严重。关联PR [#8604](https://github.com/zeroclaw-labs/zeroclaw/pull/8604) 开始解决MSVC运行时问题，但距离完全修复还有距离。
- **#8631 (无头SOP步骤未执行即标记完成)**：虚假的审计轨迹可能导致严重的操作流程问题。
- **#8615 (兼容提供者静默删除内容)**：无提示地删除响应内容，严重损害可靠性。
- **#8334（skills命令指向错误的安装路径）**：技能模块的CLI命令在多代理模式下完全失效。

**Bug总结：** 项目当前稳定性面临挑战，主要集中在**跨平台兼容**（Windows, WSL2）、**关键协议集成**（MCP, WhatsApp）和**核心运行时**（OOM）三个方面。虽然已有部分修复PR在推进，但总体Bug积压压力较大。

### 6. 功能请求与路线图信号

社区对新功能的渴望集中在**易用性**和**生态集成**方面，多个请求指向可能的下一版本候选特性：

- **OpenAI兼容端点**：两个高度相关的Issue/PR（#8550, #8603）建议增加一个与OpenAI兼容的Chat Completions API端点。这被视为接入Open WebUI、LobeChat等主流生态的关键桥梁。鉴于有专门RFC(#8603)提出，**极有可能被纳入v0.9.0规划**。
  - [Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)
  - [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)
- **增强文件读取工具**：Issue #8602提议增强`file_read`工具，增加默认行数限制、编码检测等能力，向Claude Code等成熟工具看齐。这体现了对**开发体验**的精细化打磨，属于小而美的增强。
- **多模型提供者的快速模型切换**：Issue #8600希望在已配置的提供商（如OpenRouter）下，轻松切换其支持的不同模型。这直接提升了用户的**使用便捷性**。

**路线图信号：** 从`v0.9.0`的追踪Issue (#7432) 和当前讨论来看，**安全加固**、**Gateway边界**、**多智能体通信（A2A）** 和**工具策略**是下一版本的核心方向。OpenAI兼容端点也强烈符合其生态拓展战略。

### 7. 用户反馈摘要

从Issue和PR的讨论中，可以提炼出以下用户痛点：

- **“模棱两可的可见性”**：用户对MCP工具在Gateway和TUI间不一致的状态感到困惑（#8193, #8302）。“既然Gateway能看见，为什么我的TUI用不了？”是普遍心声。这意味着**系统状态对不同终端用户的不透明性**是用户体验的主要障碍。
- **“开箱即用”的期望落空**：Windows用户（#7462）和WSL2用户（#5542）期待项目能提供与Linux同等水平的体验，但目前跨平台支持是短板。多代理环境中 `skills` 命令的失灵（#8334）也表明某些核心功能在复杂部署下无法正常工作。
- **对安全性的担忧**：用户不仅担心外部攻击（#8044 模型覆盖权限），也担心Agent误操作（#8424 `.ignore`文件机制）。这反映了用户对Agent自治行为的**不信任感**，迫切需要更精细的权限控制和沙箱机制。

### 8. 待处理积压

以下为长期未解决但仍具高影响力的积压项，需引起维护者关注：

- **#5542 (WSL2 OOM连续崩溃)**：自4月9日创建，严重等级S0，已被标记为`status:no-stale`以防被机器人关闭。这是运行时稳定性的头号杀手，急需确认是否已有社区或内部复现方案。
  - [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)
- **#6250 (API认证中间件)**：自5月1日创建，F级以上安全特性，要求将分散的认证逻辑统一为路由层中间件。虽已被接受(`status:accepted`)，但进展缓慢，可能成为后续安全漏洞的温床。
  - [Issue #6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250)
- **#8226 (Agent自定义环境变量)**：自6月23日创建，风险高，状态为`status:blocked`。此功能是实现多租户和MCP实例安全隔离的核心前提，其阻塞状态将拖累其他相关PR（如Git渠道集成的安全要求）。
  - [Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*