# OpenClaw 生态日报 2026-05-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-01 01:49 UTC

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

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将基于您提供的OpenClaw项目数据，生成一份2026-05-01的项目动态日报。

---

# OpenClaw 项目动态日报 | 2026-05-01

## 今日速览

今日OpenClaw项目社区活动异常活跃，共产生500条Issue和500条PR更新，开发与反馈循环密集。项目发布了5个新版本（均为v2026.4.29系列），主要聚焦消息与自动化系统的功能增强。然而，社区反馈揭示了数个严重的回归问题，尤其是在v2026.4.26版本中出现的网关CPU满载、启动挂起和插件超时等问题，表明近期更新在带来新功能的同时，也引入了不容忽视的稳定性风险。整体项目健康度呈现“高发展、高风险”的双重特征。

## 版本发布

项目今日发布了5个版本，均为`v2026.4.29`系列，包括一个正式版和四个beta版。鉴于更新内容高度一致，核心更新点如下：

*   **核心亮点**:
    *   **消息与自动化增强**: 引入了默认的“主动运行引导”（active-run steering）、“可见回复”（visible-reply）强制策略，即将推出的子代理（subagent）路由元数据，以及基于心跳（heartbeat）任务的可选跟进承诺机制。
*   **贡献者**: 感谢 `@vincentkoc`, `@scoootscooob`, `@samzong`, 和 `@vignesh07` 的贡献。

*   **迁移与兼容性注意事项**:
    *   鉴于社区反馈的大量问题集中在`v2026.4.26`及之后的版本（如`v2026.4.29`），建议用户升级前详细审查本次更新的完整变更日志。
    *   预计与`v2026.4.26`及`v2026.4.29-beta`系列版本兼容，但存在已知的插件内存超时、网关高CPU、启动挂起等问题，建议计划升级的用户谨慎操作或等待补丁发布。

## 项目进展

今日有20个PR被合并或关闭，标志着多个重要修复和功能推进。虽然总量不大，但质量较高，主要集中在解决社区痛点。

*   **关键合并/关闭**:
    *   **Discord频道稳定性增强** (`#75338`): PR `fix(discord): harden rate limit retries` 被合并。该PR增强了Discord REST API的速率限制重试机制，通过解析`Retry-After`头部等策略，提升了频道在高负载下的稳健性。
    *   **OpenAI-Codex提供商修复**: PR `[codex] Fix commitments extractor model selection` (`#75347`) 被合并。修复了Commitments提取器在选择模型时可能出错的问题，确保`openai-codex/gpt-5.5`等配置能被正确解析。
    *   **Heartbeat任务工具残留修复**: PR `fix: regression where commitment safety handling can disable tools for unrelated due heartbeat...` (`#75344`) 被合并（由ClawSweeper[bot]提出）。修复了Commitment安全处理逻辑导致的一个回归问题，该问题会错误地禁用无关Heartbeat任务中的工具。

## 社区热点

今日社区讨论的焦点集中在**高CPU占用**、**插件超时**和**启动挂起**等严重影响用户使用体验的回归问题上。

1.  **网关高CPU占用** (`#74328`): 获得3个👍、7条评论。用户报告从`v2026.4.22`升级至`v2026.4.26`后，网关主线程CPU占用率飙升至~100%，原因是`fs.stat`调用的“风暴”。**这是当前最严重的稳定性问题之一**。
    *   **链接**: [#74328](https://github.com/openclaw/openclaw/issues/74328)

2.  **网关启动挂起** (`#73303`): 获得2个👍、12条评论。用户反馈在macOS上重启Gateway时，新进程启动前会有长达3-4分钟的挂起现象。
    *   **链接**: [#73303](https://github.com/openclaw/openclaw/issues/73303)

3.  **Active Memory插件超时** (`#73306`): 获得2个👍、11条评论。用户反映从`v2026.4.25`起，Active Memory插件每次运行都会在15秒后超时，导致运行失败。这是一个反复出现的插件兼容性问题。
    *   **链接**: [#73306](https://github.com/openclaw/openclaw/issues/73306)

## Bug 与稳定性

今日报告的Bug数量众多，且多为回归问题，对系统稳定性冲击很大。

*   **严重**:
    *   **网关主线程CPU满载** (`#74328`): `v2026.4.26`的回归问题，导致服务无响应。**目前暂无明确的Fix PR。**
    *   **网关启动/操作挂起** (`#73303`, `#75330`): 在不同平台和操作中报告了网关挂起问题，严重影响可用性。
    *   **插件超时与启动失败** (`#74209`, `#75069`): `v2026.4.26`之后，多个默认插件（如`bonjour`）可能导致网关启动失败或主线程阻塞。

*   **中等**:
    *   **控制UI回复重复** (`#71992`): `v2026.4.21`的回归，Webchat中所有助手的回复会重复显示。
    *   **MCP服务器工具未暴露给模型** (`#74844`): 配置的MCP服务器工具无法在请求体`tools[]`中出现，导致模型无法调用。
    *   **`clearUnboundScopes`权限剥离** (`#51396`): 长期存在的权限问题，非本地token认证客户端的操作符范围被错误地剥离。
    *   **模型切换错误** (`#51205`, `#71932`): 子代理或特定模型（如`google/gemini-3.1-flash-lite-preview`）使用时出现404错误。

*   **轻微**:
    *   `openclaw doctor` 误报孤儿代理 (`#74313`)
    *   更新中导致的Telegram消息丢失 (`#71178`)
    *   `message_sent`钩子在Webchat和TUI中未触发 (`#70928`)

## 功能请求与路线图信号

社区对新功能的需求依然旺盛，主要集中在增强现有能力和提升企业级适用性上。

*   **高热度/高优先级信号**:
    *   **多槽位内存架构** (`#60572`): 该请求自4月初提出，获得3个👍。用户希望用多个特定用途的内存槽替代单一内存槽，以支持多种记忆提供者并行工作。这表明社区对Agent的长期记忆管理能力有更高要求。
    *   **YAML配置支持** (`#45758`): 受到1个👍，持续有讨论。要求支持YAML格式的配置文件，主要出于可读性和与DevOps工具链集成的考虑。
    *   **多Teams机器人支持** (`#71058`): 社区明确提出需要在单个Gateway上支持多个Azure/Teams Bot，这是企业级部署中非常典型的需求。

*   **可预见的发展方向**:
    *   **安全性与治理**: PR `feat: add reversible sensitive data sanitization layer (Security Guardrail)` (`#72733`) 引入了一个可逆的敏感数据清理层，旨在解决敏感信息泄露问题，预示着项目正在向企业级安全合规方向迈进。

## 用户反馈摘要

*   **核心痛点**:
    *   **更新引发的崩溃**: “你们能不能发一个不导致任何东西崩溃的版本？” (Issue `#48947`)。用户对频繁出现的回归问题感到沮丧。
    *   **性能下降**: “升级至2026.4.26后，Gateway在连接上停滞不前，不再响应” (Issue `#72208`)。高CPU和挂起问题严重干扰了用户日常工作流。
    *   **插件生态不稳定**: Active Memory插件的持续超时问题 (Issue `#73306`) 已经跨越多个版本，用户反复遇到相同问题，表明核心插件生态的测试和兼容性保障存在短板。

*   **积极反馈**:
    *   **新功能肯定**: 本次发布的`v2026.4.29`中关于消息和自动化系统的改进（如默认主动运行引导、可见回复强制策略），体现了对开发者体验和自动化流程控制的关注。
    *   **项目演进方向**: 社区对`Control UI`贡献槽位 (`#71736`) 和**敏感数据脱敏** (`#72733` PR) 等功能的讨论较为积极，表明用户期待OpenClaw在可扩展性和安全性上持续投入。

## 待处理积压

以下是一些长期存在或今日新提出的、需要维护者高度关注的未解决问题：

*   **高优先级的用户问题**:
    *   **Windows上`clearUnboundScopes`权限问题** (`#51396`): 自3月21日提出，导致非本地客户端无法使用`chat.send`等核心功能，至今未修复。
    *   **Sandbox僵尸进程累积** (`#68691`): 自4月18日提出，可能潜在地导致沙箱进程数超限，是一个资源泄露问题。

*   **长期未响应的功能请求**:
    *   **YAML配置支持** (`#45758`): 自3月14日提出，是提升用户体验的常见需求。
    *   **多Teams机器人支持** (`#71058`): 自4月24日提出，是企业级部署的关键需求。

*   **今日新提出的高关注度问题**:
    *   **`/v1/responses` API丢弃内置工具调用** (`#75074`): 用户指出当前API的设计使得无法进行工具调用的离线评估，限制了Agent的调试和测试能力。
    *   **`/think`命令在Control UI中崩溃** (`#52105`): 自3月22日提出的bug仍未解决。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域开源项目分析师，基于您提供的2026-05-01各项目动态数据，现生成一份横向对比分析报告。

---

## 个人AI智能体开源生态横向对比分析报告 (2026-05-01)

### 1. 生态全景

当前，个人AI智能体与自主AI助手开源生态正处于**大版本更迭前的密集修补与架构重构期**。一方面，以OpenClaw和ZeroClaw为代表的项目，在快速迭代功能后，正面临严重的**稳定性回归和安全性挑战**，尤其是在用户体验入口（Onboarding、网关核心）和关键生产流程（定时任务、工具调用）上暴露了诸多P1级阻塞问题。另一方面，以Hermes Agent和IronClaw为代表的项目，正全力投入**下一代架构（如“馆长”Release和“Reborn”架构）的研发**，展现了从“功能堆砌”向“架构治理”进化的明确信号。同时，NanoBot和Moltis等社区则围绕**用户体验精细化**（如UI打磨、配置文件格式）和**AGI Agent的自我认知、工具循环死锁等深层次交互痛点**展开讨论，标志着社区正从“能用”向“好用”和“可靠”转型。

### 2. 各项目活跃度对比

| 项目名称 | 今日Issues更新 | 今日PR更新 | 版本发布 | 健康度评估 | 核心阶段 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.4.29 (5个) | **高风险-积极应对** | 功能增强与Bug爆发期 |
| **NanoBot** | 15 | 27 | 无 | **良好** | 架构优化与稳定性打磨 |
| **Hermes Agent** | 50 | 50 | v0.12.0 | **优秀** | 快速迭代与功能里程碑 |
| **PicoClaw** | 37 | 38 | v0.2.8 | **良好** | 功能拓展与积压修复期 |
| **NanoClaw** | 5 (新) | 37 (合并) | 无 | **活跃-局部风险** | 高速产出与功能验证期 |
| **NullClaw** | 0 (新) | 9 (6合并) | 无 | **良好** | 迁移修复与深度功能开发 |
| **IronClaw** | 26 | 38 | 无 | **高强度-高风险** | 关键架构重构冲刺期 |
| **LobsterAI** | 1 (新) | 9 (合并) | 无 | **良好** | 稳定性与体验优化期 |
| **Moltis** | 6 (关闭) | 18 (合并) | v20260430.01 | **优秀** | 功能整合与体验提升期 |
| **CoPaw** | 13 (合并) | 13 (合并) | v1.1.5.post1 | **良好** | 安全与渠道稳定修复期 |
| **ZeroClaw** | 50 | 50 | 无 | **高风险-密集修补期** | 大版本前夕关键Bug清零 |
| **TinyClaw** | 0 | 0 | 无 | **休眠** | 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | **休眠** | 无活动 |

**结论**: **Hermes Agent** 和 **Moltis** 在当前周期内表现最为稳健，发布了具有里程碑意义的新版本。而 **OpenClaw** 和 **ZeroClaw** 虽然活跃度极高，但面临严重的稳定性风险，需警惕“高速开发”带来的负面效应。**IronClaw** 则处于最激进的重构阶段，前景广阔但风险并存。

### 3. OpenClaw 在生态中的定位

OpenClaw 作为报告中明确定义的**核心参照**项目，其社区活跃度（500 Issue/500 PR）远超其他任何项目，体现了其作为生态**基石或事实标准**的引领地位。

*   **与同类对比优势**:
    *   **体量与生态**：社区规模、Issue/PR流量、版本发布频率均领先，生态系统最庞大。
    *   **功能广度**：作为“核心参照”，在消息、自动化、内存架构（多槽位诉求）等核心Agent功能上拥有最广泛的社区需求和讨论。
    *   **用户粘性**：用户活跃度极高，对（如Windows `clearUnboundScopes` \#51396）长期Bug的持续追踪，显示其核心用户群的深度依赖。

*   **技术路线差异**:
    *   相较 **NanoBot** 和 **Hermes Agent**，OpenClaw并未像它们那样进行大规模的底层架构重构（如NanoBot的Hook系统、Hermes的“馆长”自主维护）。它的进化路径更偏向**社区驱动、功能堆叠与快速响应**，这导致了其兼容性和回归问题的集中爆发。
    *   与 **IronClaw** 的“Reborn”架构重造相比，OpenClaw更像是在庞大现有架构上进行持续改进，技术债务更明显。

*   **社区规模对比**:
    *   **流量层面**：OpenClaw的日流量（1000+条更新）是第二名 **Hermes Agent** / **ZeroClaw** (100条更新) 的10倍，具有绝对优势。
    *   **质量层面**：Hermes Agent 和 Moltis 的社区讨论更聚焦于**核心架构和设计**，而OpenClaw的社区则充满了大量**用户即时遭遇的Bug反馈和功能请求**。这说明OpenClaw的用户基础更广泛，但也更“草根”，问题更碎片化。

**定位总结**: OpenClaw是生态中**用户量最大、功能最杂、反馈最密集的“巨兽”**。它的健康度直接影响着整个生态的下限，其快速迭代和修复能力是其核心价值，但稳定性风险也是其最大软肋。它更像是一个“早期应用整合平台”，而非“前沿架构探索者”。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
| :--- | :--- | :--- |
| **稳定性与性能退化** | **OpenClaw, ZeroClaw, NanoClaw, NullClaw** | CPU满载、网关挂起、工具调用死循环、启动失败，大量回归问题集中在网关和核心调度层。 |
| **多Agent/多账号管理** | **OpenClaw, PicoClaw, Hermes Agent, ZeroClaw** | 多槽位内存、多账号API Key轮询、多Teams机器人支持、子Agent控制面板。 |
| **通道（Channel）的深度适配** | **NanoBot, PicoClaw, CoPaw, ZeroClaw, Moltis** | 飞书/WhatsApp/企业微信的稳定性、文件传输、流式输出、独立配置。 |
| **Agent自我认知与生态** | **NanoBot, ZeroClaw, IronClaw** | 必须让Agent知道它能用cron、fetc、memory等所有工具；工具/技能市场的规范化（如NullClaw的Skills RFC）。 |
| **企业级安全与治理** | **OpenClaw, PicoClaw, IronClaw** | 敏感数据脱敏（Security Guardrail）、工具审批绕过修复、OAuth支持、命令三级风险分类。 |
| **用户体验（UX）精细化** | **Hermes Agent, Moltis, CoPaw, ZeroClaw** | 前端UI卡顿、布局错乱、会话丢失、Onboarding引导失败、“讨论的最爱”等功能请求。 |

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键点 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型AI助手社区 | 最广泛用户（开发、普通用户） | 庞大现有架构，社区驱动，功能快速堆叠 |
| **Hermes Agent** | 自主进化、开发者友好 | 高级开发者、Agent构建者 | 推出“馆长（Curator）”自主维护能力，TUI体验极佳 |
| **IronClaw** | 下一代AI Agent基础平台 | 企业级开发者、架构师 | 进行中“Reborn”架构重构，统一运行时与策略引擎 |
| **NanoBot** | 超轻量、多平台消息Agent | 个人开发者、极客 | 强调“轻量级”，模块化，有潜力成为通用Agent框架 |
| **PicoClaw / NanoClaw**| 特定硬件或场景优化 | 嵌入式、边缘计算用户 | 强调轻量级（PicoClaw）、容器化与Host Sweep（NanoClaw） |
| **ZeroClaw** | 企业级Onboarding与体验 | 追求高效入门体验的团队 | 对Onboarding流程极致打磨，但当前状态不稳定 |
| **Moltis** | 生产环境就绪、UI优先 | 追求稳定、一体化体验的开发者 | 版本整合速度快，UI/UX修复迅速，企业级特性（沙箱）突出 |
| **LobsterAI / CoPaw** | 中国生态集成 | 中国市场用户 | 对微信、飞书、企业微信等中国平台的深入适配和修复 |

### 6. 社区热度与成熟度

*   **第一梯队（快速迭代，高活跃）**:
    *   **OpenClaw**: 社区热度最高，但处于“野蛮生长”阶段，问题与功能齐飞。
    *   **ZeroClaw、IronClaw**: 均处于架构重构或关键Bug清零的高强度冲刺期，反馈响应快但稳定性挑战大。

*   **第二梯队（稳定发展，质量巩固）**:
    *   **Hermes Agent**: 社区健康，迭代质量高，已发布里程碑版本，是项目的典范。
    *   **Moltis**: 进入稳定性与体验打磨的“收获期”，发布节奏稳，修复速度快。
    *   **NanoBot**: 从快功能迭代转向架构优化（Hook系统），社区讨论深度高，定位清晰。

*   **第三梯队（功能拓展，关注特定痛点）**:
    *   **PicoClaw, CoPaw, LobsterAI**: 活跃度良好，聚焦于中国市场渠道和特定场景的bug修复与功能增强。有大量积压PR需要维护者关注。

*   **休眠项目**:
    *   **TinyClaw, ZeptoClaw**: 24小时内无活动，活跃度为零。

### 7. 值得关注的趋势信号

1.  **“架构即战略”**：当项目成熟到一定程度，底层架构的重构（如IronClaw的“Reborn”和Hermes的“馆长”）成为决定未来竞争力的核心。纯功能堆叠的路线正在触及稳定性天花板。
2.  **Agent认知闭环是下一个瓶颈**：多个社区（NanoBot #660, ZeroClaw #5862）不约而同地反映出Agent对自身能力缺乏“元认知”是导致交互死锁和失败的核心原因。**未来Agent竞争点将从“它能做什么”转向“它知道自己能做什么并如何善用”。**
3.  **体验的“最后一公里”决定留存**：Onboarding（入门引导）和多平台UI的稳定性成为用户流失的高发区。ZeroClaw的S1级Bug集群和OpenClaw的用户抱怨“你们能不能发一个不导致任何东西崩溃的版本”都指向了这一点。
4.  **国产化生态需求强烈**：多个项目（PicoClaw, CoPaw, LobsterAI）深耕微信、飞书、企业微信、硅基流动等中国生态集成。这表明中国市场对AI Agent的本地化服务有巨大且未被满足的需求。
5.  **安全与治理不再是“锦上添花”**：OpenClaw和PicoClaw对敏感数据脱敏（#72733）、MCP OAuth的支持以及IronClaw对命令风险的三级分类，预示**企业级安全审计和可控性**正成为AGI智能体走向规模部署的必备特性。

**对开发者的建议**：
*   **选择项目**：追求稳定和一体化体验，关注 **Moltis**；追求前沿架构和自主能力，关注 **Hermes Agent** 和 **IronClaw**；若需要巨大生态和市场，**OpenClaw** 仍是首选但需接受稳定性风险。
*   **关注潜在趋势**：立即开始思考如何解决**Agent的元认知**问题（如工具注册、系统提示工程），这是未来2-3个版本内的关键优化点。
*   **避免踩坑**：升级版本前务必审查`CHANGELOG`并测试**核心通道（特别是中国渠道）、定时任务和工具调用循环**，因为这些是Bug高发区。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NanoBot项目GitHub数据，以下是为您生成的2026年5月1日项目动态日报。

---

### NanoBot 项目动态日报 | 2026-05-01

---

#### 1. 今日速览

今日，NanoBot 项目表现出较高的社区活跃度与密集的开发迭代节奏。过去24小时内，项目共处理了15条Issue和27个PR，显示出强大的社区参与度和维护团队的积极响应。值得注意的是，虽然无新版本发布，但多个旨在提升项目架构可扩展性（如Hook中心）、修复平台兼容性（Matrix/飞书）以及增强核心LLM交互鲁棒性（DeepSeek/OpenAI流）的关键PR被提出或合并，表明项目正从功能快速迭代转向架构优化与稳定性打磨阶段。社区反馈主要集中在“轻量级”宣传与实际依赖的矛盾、群聊体验以及工具循环稳定性等核心使用痛点上。

---

#### 2. 版本发布

**无**。在过去的24小时内，NanoBot 未有新版本发布。

---

#### 3. 项目进展

过去24小时内合并或关闭了9个PR，推进了多项重要修复与功能，项目在跨平台兼容性、核心交互稳定性及开发体验方面取得显著进展。

-   **跨平台兼容性：** 两个关于 `.gitattributes` (PR #3556) 和文档示例 (PR #3550) 的PR被合并，彻底解决了Windows平台上的CRLF问题及文档示例路径的跨平台问题，显著提升了非Linux用户的开发与使用体验。
-   **核心交互修复：** 针对Matrix channel在收到DeepSeek空`reasoning_content`块时发送空消息的BUG，PR #3562 和 #3565 被合并，修复了困扰用户的“垃圾消息”问题，提升了Chat体验。
-   **早期问题收尾：** 一些积压的Issue，如 #3533 (飞书群聊强制Thread) 和 #3506 (Matrix在Windows上因路径问题发送失败)，也在今日被关闭，表明社区与维护者正在积极清理旧债。

**项目整体向前迈进了一大步**：通过修复这些直接影响用户日常使用的关键BUG，NanoBot的稳定性和跨平台适用性得到了实质性增强。

---

#### 4. 社区热点

今日社区讨论最热烈的议题直指项目的核心定位与AI Agent的典型瓶颈。

-   **[Issue #660] “超轻量”标签与臃肿依赖的矛盾：** 该Issue获得5个👍和11条评论，讨论度最高。用户`besoeasy`指出项目声称“超轻量”，但Dockerfile同时依赖Python和Node.js，这与宣传相悖。这反映出社区对项目定位的敏感性和对构建包体积的关注。看似是一个技术吐槽，实则是对项目透明度的诉求。
    -   **链接:** [HKUDS/nanobot Issue #660](https://github.com/HKUDS/nanobot/issues/660)

-   **[Issue #2298] 打破无限工具调用循环：** 该Issue关注于本地/小模型使用时，AI Agent陷入重复调用同一工具的“死循环”问题。这是一个典型的Agent稳定性痛点，用户`alekwo`建议增加逻辑来监控和终止此类循环。该问题反映了社区对AI Agent生产环境可靠性的高要求。
    -   **链接:** [HKUDS/nanobot Issue #2298](https://github.com/HKUDS/nanobot/issues/2298)

-   **[Issue #3559] WebSocket无法替代Webhook进行主动消息投递：** 用户`ivelin`详细阐述了在多租户场景下，WebSocket通道无法满足Cron、心跳、Agent主动发消息等场景，强烈要求支持Webhook。这表明社区对项目在复杂企业级或自动化场景下的能力有更高期待。
    -   **链接:** [HKUDS/nanobot Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)

---

#### 5. Bug 与稳定性

今日报告了若干个重要Bug，按严重程度排列如下：

1.  **严重 - OpenAI兼容流式API过早关闭 (Issue #3551)**
    -   **现象**：使用`stream=true`并需要工具调用时，SSE流会过早终止，导致客户端无法获取完整响应。
    -   **状态**：已有修复PR **#3555** 被提交。
    -   **链接:** [HKUDS/nanobot Issue #3551](https://github.com/HKUDS/nanobot/issues/3551)

2.  **严重 - DeepSeek-V4推理内容错误在v0.1.5.post3版本上仍可复现 (Issue #3554)**
    -   **现象**：在Windows平台上，通过WebUI使用exec工具时，DeepSeek-V4 `reasoning_content must be passed back` 错误再次出现。
    -   **状态**：已有修复PR **#3560** 被提交。
    -   **链接:** [HKUDS/nanobot Issue #3554](https://github.com/HKUDS/nanobot/issues/3554)

3.  **中等 - Matrix频道启动时读取旧消息 (Issue #3553)**
    -   **现象**：每次重启或`/restart`后，Matrix Channel会重新处理之前的旧消息，造成消息重复和Agent行为异常。
    -   **状态**：**开放中**，尚未有修复PR。
    -   **链接:** [HKUDS/nanobot Issue #3553](https://github.com/HKUDS/nanobot/issues/3553)

4.  **中等 - 飞书群聊强制使用Thread (Issue #3533 & #3546)**
    -   **现象**：`reply_in_thread`在群聊中被强制为True，无视用户配置，导致用户体验不佳，并间接引发了“失忆”幻觉（Issue #3546）。
    -   **状态**：Issue #3533 **已关闭**，但核心问题在#3546中继续被讨论。
    -   **链接:** [HKUDS/nanobot Issue #3533](https://github.com/HKUDS/nanobot/issues/3533)

---

#### 6. 功能请求与路线图信号

用户提出的新功能需求显示出项目向更通用Agent框架演进的趋势。

-   **【高优先级信号】架构级钩子系统 (PR #3564):** PR #3564 提出了一个基于类型化事件的Hook中心系统，替代现有的AgentHook方法重写模式。这为开发者提供了强大的插件分发能力，是项目从“开箱即用工具”向“可扩展Agent框架”演进的关键一步。若合并，将对项目架构产生深远影响。
    -   **链接:** [HKUDS/nanobot PR #3564](https://github.com/HKUDS/nanobot/pull/3564)

-   **【潜在纳入】多Agent邮箱通道 (PR #3461):** 该PR提出了一种纯插件形式的、基于文件系统的邮箱通道，用于实现Agent间的通信。这是一个非常实用的功能，填补了Agent间协作的空白。
    -   **链接:** [HKUDS/nanobot PR #3461](https://github.com/HKUDS/nanobot/pull/3461)

-   **【潜在纳入】配置模型预设 (PR #3358):** 该PR希望引入`ModelPresetConfig`，允许用户快速切换包含模型、参数、提供商等在内的完整配置组合。这将大大简化用户在不同模型间切换的成本。
    -   **链接:** [HKUDS/nanobot PR #3358](https://github.com/HKUDS/nanobot/pull/3358)

-   **【用户呼声】支持Webhook进行主动消息投递 (Issue #3559):** 用户明确指出WebSocket无法满足特定场景的主动消息投递需求，强烈要求增加Webhook通道支持。这是来自企业级用户的真实痛点。
    -   **链接:** [HKUDS/nanobot Issue #3559](https://github.com/HKUDS/nanobot/issues/3559)

---

#### 7. 用户反馈摘要

从今日的Issues和PR评论中，可以提炼出以下用户真实反馈：

-   **“轻量级”宣传的信任危机**: 用户对 “ultra-lightweight” 的标签非常敏感，发现需要安装Node.js后，产生了被误导的感觉 (Issue #660)。**用户潜台词：** “请明确项目的技术栈和资源消耗，不要为了宣传而模糊其真实特性。”
-   **AI Agent的“失忆”与“失控”**: 用户反馈在关闭群聊Thread功能后，Agent无法理解对话上下文，如同“失忆” (Issue #3546)。同时，Agent陷入无限工具循环也是高频痛点 (Issue #2298)。**用户潜台词：** “AI Agent需要更智能的上下文管理和自我纠错机制，才能在实际使用中可靠。”
-   **企业级/自动化场景的缺失**: 用户明确表示WebSocket无法满足Cron、心跳等定时或事件驱动的主动消息投递场景 (Issue #3559)。**用户潜台词：** “我需要一个能主动发起交互的Agent，而不仅仅是被动响应。”
-   **对开源贡献的积极态度**: 用户 (`aliucrazy`) 表示愿意为Kimi的`codingplan`功能提交代码 (Issue #1007)。这表明社区中有能力的开发者乐于贡献，但也暗示项目在功能采纳上可能需要更清晰的引导。

---

#### 8. 待处理积压

-   **Issue #660 [OPEN] - 项目轻量级声明问题**: 自2026年2月14日创建以来，已存在超过2个月，积累了11条评论和5个赞。尽管争议性强，但未收到官方回应。**提醒维护者：** 此问题关乎信任，建议给出明确回应，或调整项目描述，或提供去除Node.js依赖的路线图。
    -   **链接:** [HKUDS/nanobot Issue #660](https://github.com/HKUDS/nanobot/issues/660)

-   **PR #1385 [OPEN] - 保留OpenRouter的reasoning_details**: 自2026年3月1日提出，已存在2个月。该PR修复了多轮工具调用场景下使用OpenRouter时，`reasoning_details`丢失导致模型混淆的关键问题。**提醒维护者：** 此PR对使用OpenRouter用户至关重要，建议优先审核合并。
    -   **链接:** [HKUDS/nanobot PR #1385](https://github.com/HKUDS/nanobot/pull/1385)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 Hermes Agent (github.com/nousresearch/hermes-agent) 的 GitHub 数据生成的 2026-05-01 项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-05-01

## 1. 今日速览

Hermes Agent 项目今日保持极高活跃度，代码库与社区均处于高速运转状态。**v0.12.0 (The Curator release)** 的发布是今日最大亮点，标志着代理具备自主维护能力的重大里程碑。社区反馈密集，共产生50条 Issue 和50个 PR，其中不乏高质量的功能请求和关键Bug报告。项目维护者响应迅速，大量高优先级 Bug 已有对应的修复 PR 或已关闭。整体项目健康度 **优秀**，正处于功能性和稳定性快速迭代的上升期。

## 2. 版本发布：v0.12.0 (The Curator Release)

**版本号**: Hermes Agent v0.12.0 (v2026.4.30)
**发布说明**: “The Curator release — Hermes Agent now maintains itself. An autonomous background...” (原描述中断，但核心含义明确)

| 指标 | 数据 |
| :--- | :--- |
| 里程碑 | 自 v0.11.0 已超过 6 周 |
| 提交数 | 1,096 commits |
| 合并 PR 数 | 550 |
| 变更文件数 | 1,270 files |
| 代码插入/删除 | +217,776 / - (数据未完整提供) |
| 社区贡献者 | 213 位（含共同作者） |

**更新内容推测**：此版本的核心主题为“馆长”，强调 Agent 的自主维护能力。结合近期 Issue 与 PR，可推断 v0.12.0 极有可能包含了：`gateway` 多平台稳定性提升、`cron` 定时任务机制增强、`memory` 与 `skills` 的自主管理能力初步落地。

**破坏性变更 / 迁移注意事项**：官方发布说明未明确列出。提醒用户需关注：
1.  `gateway` 相关配置（如 Telegram、Slack 平台）可能因新增权限验证（PR #18125）或线程管理逻辑（PR #5488）而产生行为变化。
2.  `skills` 系统可能新增了文件锁（PR #18150），多进程场景下需留意冲突。
3.  建议用户在升级前备份配置文件 (`~/.hermes/`) 并查阅完整的 `CHANGELOG.md`。

## 3. 项目进展

今日项目在多个关键方向取得突破性进展，尤其集中在 **安全性、稳定性与生产环境适配** 上。

*   **安全性加固**: [PR #18125](https://github.com/NousResearch/hermes-agent/pull/18125) (P0) 修复了 Discord 平台 slash 命令绕过白名单认证的严重漏洞，确保了平台集成的基本安全基线。
*   **核心稳定性修复**:
    *   [PR #18139](https://github.com/NousResearch/hermes-agent/pull/18139) (P1) 解决了 `reasoning models`可能返回“静默空响应”导致无输出的问题，是重要的鲁棒性提升。
    *   [PR #18149](https://github.com/NousResearch/hermes-agent/pull/18149) (P2) 修复了 ACP 功能忽略 `model.custom_provider` 配置的问题，保障了用户自定义模型路由的可靠性。
    *   [PR #18146](https://github.com/NousResearch/hermes-agent/pull/18146) (P2) 修复了 Email 网关解析 IMAP 响应时因非标准格式导致崩溃的问题。
*   **Agent 生态扩展**:
    *   [PR #17211](https://github.com/NousResearch/hermes-agent/pull/17211) (已合并) 新增了 `local_command` TTS 供应商，允许用户使用 Piper、Vox 等本地引擎，降低了语音输出功能的门-槛。
    *   [PR #18151](https://github.com/NousResearch/hermes-agent/pull/18151) (新增) 提出了成就系统的升级方案，包括过滤、CLI 交互和导出，增强了项目的游戏化激励反馈。

## 4. 社区热点

尽管 v0.12.0 是新 API 的焦点，但社区讨论热度最高的依然是来自 **iRonin** 的一系列 UX 增强提案。

*   #5504 [Open] [*feat: dual queue*](https://github.com/NousResearch/hermes-agent/issues/5504): 提出了“双队列”交互模式，区分`Alt+Enter`排队指令和`Enter`打断指令，反映了用户对更精细、更流畅的对话控制权的强烈需求。
*   #5513 [Open] [*feat: subagent control panel*](https://github.com/NousResearch/hermes-agent/issues/5513): 对 `delegate_task` 产生的子代理进行实时监控与管理的需求，显示了用户在处理复杂多步骤任务时，对于可见性与可控性的渴望。

**诉求分析**：这些提案并非修复Bug，而是对 TUI 交互范式的深度思考。这表明社区核心用户已从“能用”阶段，进入到追求“得心应手”的生产力工具体验阶段。

## 5. Bug 与稳定性

今日报告的 Bug 中，按严重程序排列如下：

*   **P0 (紧急)**:
    *   **Gateway Security Bypass**: #18125 (PR已提) - [Discord 网关 Slash 命令未授权]，影响所有 Discord 集成的安全性。
*   **P1 (严重)**:
    *   **Agent Silent Failure**: #18139 (PR已提) - [推理模型静默无响应]，导致 Agent 无日志、无输出的死锁状态。
    *   **Cron Job Skipping**: #5518 (无修复PR) - [定时任务静默跳过]，可能导-致关键任务未被定时触发。
*   **P2 (中等)**:
    *   **Email Fetch Crash**: #18106 (PR已提) - [IMAP 解析错误] ，影响邮件服务稳定性。
    *   **Slack Thread Leak**: #18101 (无修复PR) - [后台通知错发线程]，影响Slack协作体验。
    *   **Session Search Slowdown**: #16671 (无修复PR) - [会话搜索性能慢]，对长会话用户影响明显。
    *   **Sudo Detection False Negative**: #18110 (无修复PR) - [`hermes status` 对 `sudo` 状态误报]。
    *   **ACP Config Ignored**: #18149 (PR已提) - [ACP忽略自定义模型提供者配置]。
*   **P3 (低优先级)**:
    *   **Plugin Install Failure**: #5695 - [`/plugins install` 命令无反馈]。
    *   `hermes update` 时 Git 冲突处理问题 (PR #18145)。

## 6. 功能请求与路线图信号

*   **强信号 (可能纳入下版本)**:
    *   **Runtime Hooks 系统**: [#18148](https://github.com/NousResearch/hermes-agent/issues/18148) 提议增加 Python 级别的运行时 Hook（如 `transform_user_input`, `intercept_tool_call`），这为实现复杂的中间件、审计和自定义安全策略提供了基础。结合社区对控制权的需求，此功能被采纳的可能性很高。
    *   **MongoDB 内存提供者**: [#5495](https://github.com/NousResearch/hermes-agent/issues/5495) 获得1个 ❤️，是长期存在的 Feature Request，统一数据后端的呼声仍在持续。
*   **中等信号**:
    *   **自主进化引擎 (GASP Loop)**: [#18092](https://github.com/NousResearch/hermes-agent/issues/18092) 提出了一个宏大的“生产级自主进化引擎”设想，但过于复杂，短期内进入路线图的概率较低。
    *   **会话标题自动生成**: [#5715](https://github.com/NousResearch/hermes-agent/issues/5715) `/title` 命令无参时自动生成标题，一个提升易用性的小功能，可能很快被社区贡献者实现。

## 7. 用户反馈摘要

*   **痛点聚焦**:
    *   **性能**：用户 `kakarotto-baroko` 在 #16671 中反馈 `session_search` 在长会话中性能急剧下降，虽然其自称“非程序员”，但清晰地描述了“读并总结整个会话”的慢现象，影响已从可用性发展到了“劝退”。
    *   **配置复杂性**：用户 `krebbl` 在 #18140 中表示，通过 Dashboard UI 配置但无法使用 `Opencode Zen`，使用体验“费解”。这表明 UI 配置层与底层逻辑存在脱节。
    *   **文件传输**：用户 `Guerdal` 在 #5537 中反馈，通过 Email / Matrix 网关只能文字交流，无法发送文件，限制了网关作为远程工作通道的实用性。
*   **满意之处**：文中无直接表扬，但大量高质量的功能提案（如 iRonin 的一系列 TUI 增强）表明积极贡献者对项目框架的灵活性和潜力是认可的，他们正在为其添砖加瓦。

## 8. 待处理积压

以下 Issue/PR 长期未获官方回复或结合，存在被“遗忘”的风险，提醒维护者关注：

*   **#6122** [Open] [`Zsh completion script`](https://github.com/NousResearch/hermes-agent/issues/6122): 4条评论，创建于4月8日。一个很明确的 Bug，官方推荐的方式导致 Zsh 启动报错。已接近一个月无实质进展。
*   **#5687** [Open] [`Anthropic OAuth test`](https://github.com/NousResearch/hermes-agent/issues/5687): 2条评论，创建于4月7日。自动化测试 `getpass` 冲突，阻塞了 CI/CD 流程。
*   **#5544** [Open] [`Memory provider tools auto-injected`](https://github.com/NousResearch/hermes-agent/issues/5544): 3条评论，创建于4月6日。清楚地描述了即使 `platform_toolsets` 配置为空，memory 工具依然被加载的问题，导致本地模型性能损失高达10倍。这是配置系统的一个隐蔽 Bug。
*   **#5518** [Open] [`Recurring cron jobs silently skip`](https://github.com/NousResearch/hermes-agent/issues/5518): 0条评论，创建于4月6日。P1 严重程度，但至今无响应。这是定时任务功能的一个致命缺陷。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是为您生成的 PicoClaw 项目动态日报。

***

# PicoClaw 项目动态日报 | 2026-05-01

## 1. 今日速览

过去24小时内，PicoClaw 项目保持极高的社区活跃度，共产生 **37 条 Issue 更新** 和 **38 条 PR 更新**。官方发布了 **v0.2.8 正式版本**，核心功能是增强了 MCP（模型上下文协议）的 CLI 管理能力。社区讨论集中在对多账号管理与安全性的需求上，同时也有大量针对频道（如飞书、WhatsApp）和工具链的 Bug 报告及修复 PR。尽管积压了较多“陈旧”的 Issue，但整体项目推进速度依然强劲，呈现出健康的开发态势。

## 2. 版本发布

- **v0.2.8 (正式版)**
  - **链接**: [Release v0.2.8](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8)
  - **主要更新内容**:
    - **MCP 管理工具**: 新增了对 MCP 的 `show`, `add`, `list`, `remove`, `test`, `edit` 等 CLI 命令，用户现在可以通过命令行更便捷地管理和调试 MCP 连接。
    - **Bug 修复**: 修复了 MCP 在调用某些无参数工具时，由于发送 `null` 导致的兼容性问题。
    - **构建修复**: 修复了此前版本中的一个构建失败问题。
  - **破坏性变更**: 无。
  - **迁移注意事项**: 直接升级即可，新版本的 MCP 管理命令将为开发者提供极大便利。

## 3. 项目进展

在过去24小时内，共有 **6 个 PR 被合并/关闭**，标志着项目在多个方面取得了实质性进展：

- **频道拓展**: 新增了 `slack_webhook` 频道类型（PR #2719），这是一个**输出专用**频道，允许用户将 PicoClaw 的响应推送到 Slack，并支持 Block Kit 格式排版。
- **依赖更新**: 自动依赖机器人 `dependabot` 合并了多个依赖库的更新（如 PR #2736 #2735），保持了项目底层库的稳定性和安全性。
- **Bug 修复**: 合并了针对配置系统（config）中 `SecureString` 类型可能引发 panic 的修复（PR #2270），提升了配置处理的健壮性。
- **稳定性修复**: 推进了多项针对频道（飞书、Slack、Telegram）和工具链（exec、MCP）的长期 Bug 修复 PR，虽然这些 PR 尚未合并，但维护者的关注度和社区的修复意愿非常明确。

## 4. 社区热点

- **热点讨论 Issue: #2408 - LLM 账户堆叠/API Key 自动轮换**
  - **链接**: [Issue #2408](https://github.com/sipeed/picoclaw/issues/2408)
  - **分析**: 这是近期社区呼声最高的功能请求之一。用户希望提供多个 API Key，当遇到速率限制或配额用尽时，PicoClaw 能自动切换下一个 Key。这直接反映了用户在实际生产环境或高频使用场景下的痛点，即对单一账号的依赖和成本控制。该 Issue 拥有10条评论，足见其关注度。

- **热点讨论 Issue: #2225 - Ollama 云凭据支持**
  - **链接**: [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)
  - **分析**: 用户希望 PicoClaw 能支持 Ollama 云服务的认证凭据配置。这表明社区中不仅有针对商业 API 提供商（如 OpenAI）的需求，也有对开源模型托管服务（如 Ollama Cloud）的强烈接入意愿，反映了多元化模型使用的趋势。

- **热点 PR: #2313 - 多用户支持与安全加固**
  - **链接**: [PR #2313](https://github.com/sipeed/picoclaw/pull/2313)
  - **分析**: 这是一个重量级的 PR，旨在引入多用户支持、安全加固及技能白名单功能。尽管尚未合并，但它的存在本身就体现了社区对于将 PicoClaw 从个人工具推向更安全、更适于团队协作的平台的期望。

## 5. Bug 与稳定性

过去24小时报告了多个 Bug，按严重程度排列如下：

- **严重 - 功能阻断**:
  - **#2468 - 定时任务执行失败**: 提示 “scheduling command execution is restricted to internal channels”，表明定时任务功能存在部署或权限配置问题。目前暂无直接修复的 PR。
  - **#2483 - 启动网关按钮无效**: 用户报告界面上的“启动网关”按钮点击无反应，可能为前端或后端服务启动的严重 Bug。
- **中危 - 功能异常**:
  - **#2465 - 频道无邮件发送功能**: 用户希望添加 SMTP 发送邮件功能，用于定时任务结果通知。这既是一个功能请求，也反映了现有通知机制的缺失。
  - **#2377 - exec 工具输出危险控制字符**: `exec` 工具和日志可能输出原始 ANSI 控制字符，存在终端安全风险。社区已提交相关修复 PR（如 #2298）。
  - **#2482 - 开源模型 Tool Call 失败**: 使用 `mlx-lm` 等后端运行开源模型时，工具调用功能失效。这是一个影响广泛的问题，因为开源模型用户群体庞大。
- **低危 - 兼容性问题**:
  - **#2472 - `list_dir` 在 Windows 下路径错误**: 在 Windows 系统上，由于路径分隔符不兼容导致工具执行失败，对 Windows 用户造成了特定干扰。

## 6. 功能请求与路线图信号

- **高优先级信号**:
  - **LLM 账户堆叠 (API Key 轮换)**: Issue #2408 和多个相关讨论表明这将是下一个版本的潜在热点。它是提升服务可用性和成本效益的关键特性。
  - **MCP 服务器 OAuth 2.1 支持**: Issue #2546 提出在仪表盘页面通过粘贴 URL 的方式添加受 OAuth 保护的 MCP 服务器，降低非技术用户使用门槛，与 v0.2.8 发布的 MCP CLI 管理工具形成了有力互补。
- **中优先级信号**:
  - **飞书频道深度优化**: 用户强烈要求优化飞书频道以支持流式输出、显示模型/状态并借鉴飞书官方插件体验（Issue #2580）。这表明对中国市场的重视正在转化为具体的功能需求。
  - **记忆系统增强**: 用户提出接入 mem0, Supermemory 等第三方记忆提供商的方案（Issue #2515），以增强 PicoClaw 的长期上下文能力。
- **低优先级信号**:
  - **Raspberry Pi 版提供 WhatsApp 支持**: Issue #2625 提议为树莓派的编译版本默认包含 WhatsApp 支持，以满足低功耗设备用户的需求。

## 7. 用户反馈摘要

- **核心痛点**:
  - **多频道消息处理混乱**: 多位用户反馈在**飞书**和**多频道**场景下，连续发送的消息仅最后一条被处理，或消息会回显到其他频道（Issue #2447, #2446, #2464）。这严重影响了多任务并行和跨频道协作体验。
  - **配置与环境变量困惑**: `PICOCLAW_GATEWAY_TOKEN` 环境变量的实际作用范围与用户预期不符，导致频繁的 WebSocket 认证问题（Issue #2438）。
  - **飞书/QQ 频道复杂度**: 中国用户在使用飞书（Issue #2493）和QQ（Issue #2280）时遇到配置复杂、缺乏特定字段等问题，表明官方应加强对这些高频频道的文档和配置向导支持。
- **典型使用场景**:
  - **定时任务与通知**: 用户希望能使用定时频道执行周期性检查，并通过 SMTP 邮件将周报等结果发送至邮箱（Issue #2465）。
  - **安全部署**: 存在将 PicoClaw 部署在 Android TV 等低性能设备上作为工作节点的案例，体现了社区对轻量化和设备多样性的探索（PR #2462）。

## 8. 待处理积压

- **长期未响应的关键 Bug**:
  - **#1763 - aarch64 .deb 安装失败**: 这是一个持续了近两个月的包管理问题，影响 ARM 架构用户的安装体验。虽然关联PR已提交，但问题本身仍标记为开放。
  - **#2280 - 硅基流动 API 导致服务无法启动**: 与特定国内服务商（SiliconFlow）的兼容性问题，至今未解决，影响了部分用户的正常使用。
  - **#2302 - Web UI 需要频繁重新认证**: 用户反馈 Web UI 的凭据无法持久化，需频繁手动重新登录，严重影响使用体验。
- **长期未合并的修复 PR**:
  - **PR #2090, #2089**: 针对 Telegram 和 Slack 频道的流式输出和消息路由 Bug 修复，已提交超过一个月但仍在审查中。考虑到频道功能是核心体验，建议项目维护者加速审查和合并进程。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 NanoClaw (github.com/qwibitai/nanoclaw) GitHub 数据生成的 2026-05-01 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-05-01

## 1. 今日速览

项目今日活跃度极高，尤其在代码提交和合并方面表现突出。过去24小时内，共有 **37个PR被合并**，展示了项目团队高效的迭代节奏。同时，社区报告了 **5个新Issue**，主要集中在 **OpenCode Provider** 的功能性错误和 **Host Sweep** 的稳定性问题上，相关讨论热烈。虽然安全问题（Issues #458, #457）已于近期关闭，但其暴露的架构风险仍需关注。总体来看，项目正处于快速修复和新功能（如渠道增强、设置流程优化）并行推进的“高产出”阶段。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日项目合并了多项重要修复与功能，显著提升了系统稳定性和用户体验。以下是关键进展：

*   **安全性与稳定性加固：**
    *   **PR #2001** (CLOSED): 修复了容器控制的`outbox`路径可能导致宿主机文件被读取/删除的安全漏洞，强化了主机与容器的文件系统边界。
    *   **PR #2053** (CLOSED): 在PR #2001的基础上，对入站附件也应用了`outbox`路径限制，补全了安全策略。
    *   **PR #2114** (CLOSED): 修复了`poll-loop`中`pre-task scripts`仅对初始消息生效，而未对后续注入消息生效的bug，确保了任务调度逻辑的一致性。

*   **渠道与集成功能增强：**
    *   **PR #2040** (CLOSED): 为Signal原生适配器增加了出站附件支持，填补了功能空白。
    *   **PR #2107** (CLOSED): 为Slack和Telegram适配器实现了`resolveChannelName`方法，使渠道审批流程能显示真实的群组/频道名称。
    *   **PR #2105** (CLOSED): 重构了渠道审批流程，从单一的批准/忽略升级为支持Agent选择、自定义命名等多步交互，大幅提升了用户体验。

*   **设置流程（Setup）优化：**
    *   **PR #2055** (CLOSED): 修复了因`PATH`环境变量未正确传播导致`register-claude-token.sh`脚本失败的Bug（对应Issue #1973）。
    *   **PR #2155** (CLOSED): 增加了Linux环境下以root用户运行设置脚本的警示与引导流程，防止权限配置不当。
    *   **PR #2157** (CLOSED): 将设置中的环境变量配置从“一次性全部询问”改为“按步骤复用”，使配置过程更符合实际使用流程。
    *   **PR #2158, #2154, #2146** (CLOSED): 一系列针对设置界面UI/UX的优化，包括启动彩蛋、更友好的浏览器跳转提示等。

*   **其他修复：**
    *   **PR #2112** (CLOSED): 将Telegram渠道的`maxTextLength`配置与之前引入的文本分割器（splitter）进行了连接，解决了长消息被截断的问题。
    *   **PR #2142** (CLOSED): 修复了`schedule_task`在写入路由信息时的数据丢失问题。

## 4. 社区热点

今日社区讨论焦点集中在新生效的 **OpenCode Provider** 和 **Host Sweep** 机制上，表明新功能上线后引发了用户的高度关注和深度测试。

*   **OpenCode Provider 功能性问题（Issues #2150, #2148, #2149）**：
    这三条来自同一用户 (`glifocat`) 的Issue详细描述了OpenCode Provider的三个严重问题：
    *   **#2150**：上下文注入失败，导致Agent在“没有指令”的情况下运行。
    *   **#2148**：进程`SIGKILL`后未正确清理底层二进制文件，导致端口占用和容器不可用。
    *   **#2149**：硬编码的90秒超时对本地模型不友好，会静默中断推理。
    *   **分析**：用户`glifocat`进行了深入的代码审查，从`container/agent-runner/src/providers/opencode.ts`中精确定位了问题代码。这反映出社区中有相当一部分用户正在尝试或依赖OpenCode Provider，其稳定性和配置灵活性是目前的主要痛点。

*   **Host Sweep 的“死锁”循环（Issue #2147）**：
    *   **#2147**：深入分析了`host sweep`机制中的一个严重Bug：孤立的`processing_ack`记录会绕过`kill-ceiling`逻辑，导致重新生成的任务被立即`SIGKILL`，形成任务处理死锁，需要手动干预数据库才能恢复。
    *   **分析**：此Issue的标题明确指出“claim-stuck loop persists after #209061f”，表明这是一个对之前修复的回归或遗漏。这说明项目在处理高并发或复杂的竞争条件时，测试覆盖需要进一步加强。

## 5. Bug 与稳定性

今日报告的Bug集中在**OpenCode Provider（3个）** 和**Host Sweep机制（1个）**，严重程度普遍为 **High**。当前均无关联的Fix PR。

*   **[Critical/High] OpenCode Provider：进程泄漏与端口占用（#2148）**
    *   **描述**：`proc.kill('SIGKILL')`未杀死底层进程，导致端口4096被持续占用，容器不可用。
    *   **状态**：待处理。

*   **[High] OpenCode Provider：上下文丢失（#2150）**
    *   **描述**：`wrapPromptWithContext`向模型发送了字面量`@./...md`，导致`CLAUDE.md`等关键指令从未到达LLM，Agent在无指令状态下运行。
    *   **状态**：待处理。

*   **[High] Host Sweep：任务死锁循环（#2147）**
    *   **描述**：孤立的`processing_ack`记录导致任务重生成后被立即`SIGKILL`，形成死锁，需要手动DB修复。
    *   **状态**：待处理。

*   **[Medium] OpenCode Provider：硬编码超时（#2149）**
    *   **描述**：硬编码的90秒超时对于本地模型（推理速度慢）会造成静默中断。
    *   **状态**：待处理。

*   **[Medium] OneCLI标识符验证失败（#2159）**
    *   **描述**：`container-runner.ts`传递的Agent Group ID包含下划线，而OneCLI的创建API只允许`[a-z0-9-]`，导致HTTP 400错误。
    *   **状态**：待处理。

## 6. 功能请求与路线图信号

*   **即时需求：OpenCode Provider 稳定性与配置优化**：从#2148、#2149可以看出，社区强烈需要一个更稳定、可配置的OpenCode Provider。将硬编码的超时时间改为可配置项，并修复进程清理逻辑，应是下一个版本的优先事项。
*   **设置流程（Setup）全面重写**：今日合并了大量关于设置流程的PR（#2105, #2107, #2154, #2155, #2157, #2158等）。这表明项目正在对“首次使用体验”进行大刀阔斧的改进，以降低新用户的入门门槛。这很可能是一个持续的、高优先级的开发方向。
*   **决策桥接（Decision Bridge）**：PR #2141 (feat: dota-feishu decision bridge via IPC) 的合并，引入了通过IPC进行跨平台决策桥接的能力。这暗示项目未来可能支持更复杂的、需要AI进行判断的工作流自动化。

## 7. 用户反馈摘要

*   **正面反馈（隐含）**：PR #2114 (fix pre-task scripts) 和 #2112 (fix telegram splitter) 的合并，表明项目团队正在积极响应用户报告的、阻碍正常使用的功能性Bug。大量设置流程的PR也反映出开发团队正致力于解决新用户的困惑点。
*   **负面反馈/痛点**：
    *   **OpenCode Provider 体验不佳**：用户`glifocat`通过三条详细Issue，清晰地表达了OpenCode Provider当前版本“沉默地失败”且“资源管理不善”的现状。这很可能导致依赖此功能的用户感到挫败。
    *   **Host Sweep 机制不可靠**：Issue #2147描述了生产环境中任务处理全面停滞的严重事故，并需要“手动数据库编辑”才能恢复。这表明当前集群管理机制的容错性存在显著问题。

## 8. 待处理积压

*   **[Open] OpenCode Provider 相关问题集群 (#2150, #2148, #2149)**
    *   **链接**： [Issue #2150](https://github.com/qwibitai/nanoclaw/issues/2150), [Issue #2148](https://github.com/qwibitai/nanoclaw/issues/2148), [Issue #2149](https://github.com/qwibitai/nanoclaw/issues/2149)
    *   **分析**：这三个高优Bug均与近期合并的OpenCode Provider相关，目前仍未分配或标记为进行中。考虑到其“Agent无指令运行”和“容器不可用”的严重性，若项目依赖此Provider的用户较多，应尽快处理。建议优先级：**Critical**。

*   **[Open] Agent Group ID 验证失败 (#2159)**
    *   **链接**： [Issue #2159](https://github.com/qwibitai/nanoclaw/issues/2159)
    *   **分析**：这是一个由标识符格式不匹配导致的“新生”错误，会直接阻塞`ensureAgent`流程。虽然优先级未明确标为`Critical`，但它会阻止Agent的正确创建，严重程度高。建议优先级：**High**。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据您提供的 NullClaw 项目数据生成的 2026-05-01 项目动态日报。

---

# NullClaw 项目动态日报 | 2026-05-01

## 1. 今日速览

项目今日整体活跃度**较高**。虽然未开启新 Issue 也未发布新版本，但 Pull Request (PR) 活动频繁，共有9条 PR 更新，其中6条被合并或关闭，3条正处于公开审查状态。合并的 PR 主要集中在**功能特性开发**（如基于触发词的工具优先级、工具配置自定义）和**关键性 Bug 修复**（如 Zig 0.16 迁移导致的 Mattermost 消息发送失败和高 CPU 占用问题）。这表明项目在推进新功能的同时，正积极解决迁移遗留的稳定性问题，整体健康状况良好。

## 2. 版本发布

无。

## 3. 项目进展

今日合并/关闭了多个重要 PR，推动了项目的功能和稳定性向前迈进：

- **功能特性深化**：
    - `#836`、`#835`、`#834` 三个 PR 共同构建了一套**工具定制化框架**。这套框架允许用户通过配置文件精细地控制工具行为，包括：
        - **触发词优先级**：在 Agent 的推理循环中，当检测到用户输入中的特定词语时，自动向 LLM 注入优先级提示，使其优先调用特定工具。
        - **系统提示覆盖**：允许为特定工具自定义描述性提示。
        - **启用/禁用**：可灵活控制哪些工具可供 Agent 使用。
        - 这标志着 NullClaw 在 Agent 工具的**可控性和智能化**方面迈出了关键一步。
    - `#831` 完成了对 **Agent Skills RFC 0.2.0** 标准的支持，强化了网络 Skill 的发现、验证（SHA256）和安装流程，提升了生态兼容性和安全性。

- **稳定性与兼容性修复**：
    - `#878` 和 `#876` 分别修复了底层 `compat` 库中的关键问题，包括 POSIX 系统上 `thread.sleep` 不挂起线程和 HTTP/1.1 流读取阻塞的问题，对网络通信的健壮性至关重要。
    - `#873` 修复了 **Zig 0.16 迁移引发的两个高严重性回归问题**：Mattermost 网关线程的 100% CPU 占用和 Mattermost 消息静默发送失败。这两个问题的解决对生产环境的平稳运行意义重大。

## 4. 社区热点

今日最受关注的 PR 是 `#873` **fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin**，作者强调了这是一个 **高严重性回归**，影响了所有迁移到 Zig 0.16 的 Mattermost 连接的 Agent。

- **链接**: [https://github.com/nullclaw/nullclaw/pull/873](https://github.com/nullclaw/nullclaw/pull/873)
- **分析**: 该 PR 直接切中了社区用户可能遇到的两大痛点：**高 CPU 占用**和**消息发送失败**。这反映了在编程语言或依赖库重大升级时，回归问题对用户社区的巨大影响。用户的核心诉求是**生产环境的即时稳定性**。该 PR 在今日被合并，表明维护者对此类回归问题响应迅速，处理优先级很高。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在 Zig 0.16 迁移引入的兼容性问题，并已有相应的修复 PR。

- **高严重性**：
    - **修复** `#873`: Zig 0.16 导致 Mattermost 网关线程 **100% CPU 占用**及**静默消息发送失败**。 (已合并)
    - **修复** `#878`: `std_compat.thread.sleep()` 在 POSIX 上**不挂起 OS 线程**，导致网关线程忙等。(公开中)
    - **修复** `#877`: Mattermost 频道 `curlPost` 请求时，**没有将写入缓冲区刷入 body**，导致 POST 请求发送空内容。(公开中)

- **中严重性**：
    - **修复** `#876`: 网络流读取时使用 `readSliceShort` 导致 **HTTP/1.1 keep-alive 客户端阻塞**。(已合并)

- **待解决的安全增强**：
    - `#875` 是一个安全相关的 PR，引入了**三级风险分类**并增加了执行前缀剥离功能，旨在解决 `curl` 等网络工具被错误归类为高风险而无法使用的问题。这本身不是 Bug，但回应了用户的长期反馈（Issue #167），对提升 Agent 可控性和安全性有重要意义。(公开中)

## 6. 功能请求与路线图信号

- **强化 Agent 工具自主性**：PR `#836`、`#835`、`#834` 的合并，强烈暗示项目路线图正朝着**让 Agent 更智能地选择和使用工具**的方向发展。`基于触发词的工具优先级` 功能是一个明确的信号，表明项目开始探索如何将用户意图与工具调用更精准地匹配，这很可能会在下一个版本中成为核心能力。
- **安全与沙箱**：PR `#875` 提出了更精细的指令风险分类，这通常是构建更高级别 Agent 安全沙箱或权限模型的前置步骤。这可能是 `v0.3` 或后续版本的关键特性。

## 7. 用户反馈摘要

今日无直接的 Issue 评论数据，但从 PR 的摘要和问题描述中可以提炼出用户（在此场景下为贡献者）的反馈：

- **痛点清晰**：贡献者明确指出了从 Zig 0.16 迁移后遇到的“**100% CPU 使用率**”和“**静默消息失败**”问题，这些都是会严重影响生产环境的“硬伤”，用户对此容忍度极低。
- **使用场景**：Mattermost 作为团队协作平台，是 NullClaw Agent 的重要部署场景之一。用户（组织）可能依赖 Agent 在此平台上自动回复、执行任务。
- **满意点**：项目维护者对高优先级 Bug 的响应和修复速度值得肯定。`#873` 在报告两天内即被合并，这会给社区用户带来信心。

## 8. 待处理积压

### 公开 PR 等待审查与合并
- **`#878`**: [https://github.com/nullclaw/nullclaw/pull/878](https://github.com/nullclaw/nullclaw/pull/878)
  - **问题**: POSIX 下 `thread.sleep` 不挂起 OS 线程，导致 CPU 空转。
  - **状态**: 待合并。此问题与 `#873` 的高 CPU 问题类似，虽不在 Mattermost 场景下，但仍可能导致通用场景下不必要的资源消耗。建议优先处理。
- **`#877`**: [https://github.com/nullclaw/nullclaw/pull/877](https://github.com/nullclaw/nullclaw/pull/877)
  - **问题**: Mattermost 消息发送失败，与 `#873` 的部分问题相关但修复路径不同。
  - **状态**: 待合并。这是修复 Mattermost 集成完整性的重要一环。
- **`#875`**: [https://github.com/nullclaw/nullclaw/pull/875](https://github.com/nullclaw/nullclaw/pull/875)
  - **问题**: 安全增强，引入三级风险分类。
  - **状态**: 待合并。该功能回应了长期需求（Issue #167），可能涉及较多的讨论和设计评审。它是一项重要的功能改进，而非紧急 Bug 修复，因此在合并队列中优先级稍低可以理解，但仍需关注以避免长期搁置。

### 关键发现
当前待处理的积压主要集中在 **Zig 0.16 兼容性收尾工作** 和一个 **中等规模的安全优化** 上。项目维护者今日成功处理了最紧急的 `#873`，但无 #878 和 #877 的修复，Mattermost 集成仍不完整，通用底层库也有瑕疵。建议在下一个工作日内优先完成 `#878` 和 `#877` 的审查和合并，以彻底消除 Zig 0.16 迁移的隐患。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 IronClaw (github.com/nearai/ironclaw) 项目数据生成的日报。

---

# IronClaw 项目日报 (2026-05-01)

**分析师:** AI 智能体与个人 AI 助手领域开源项目分析师
**数据日期:** 2026-04-30 至 2026-05-01

---

### 1. 今日速览

项目今日处于 **高强度开发冲刺期**，核心团队正集中力量推进代号为 **“Reborn”** 的重大架构重构。过去24小时内，项目共处理了 26 条 Issue 和 38 个 PR，活跃度极高。尽管有两项线上金丝雀测试 (Canary) 出现失败，可能表明回归风险，但核心开发活动（特别是围绕 Reborn 服务层、HTTP 出口和 WASM 运行时的合并）依然在稳定推进，显示出项目在追求新架构落地上的强大执行力。`#2987` 作为 Reborn 的顶级跟踪 Issue，已累积 43 条评论，是整个社区关注的焦点。

### 2. 版本发布

无。

### 3. 项目进展

今天项目在 **Reborn 架构** 的核心支撑组件上取得了显著进展，多个关键 PR 被合并，从“设计阶段”迈向了“集成阶段”。

- **核心运行时服务图合并:** `serrrfirat` 提交的 PR #3126 (`feat(reborn): add host runtime services graph`) 已被合并，这为 Reborn 提供了一个具体的 `HostRuntimeServices` 图，将脚本、MCP、WASM 等不同运行时适配器串联在一起，是连接内核与上层应用的关键一步。
- **共享 HTTP 出口落地:** `zmamian` 贡献的 PR #3098 (`feat(reborn): add shared runtime HTTP egress`) 被合并。它为 WASM、脚本和 MCP 等能力运行时提供了一个统一的 HTTP 出口路径，取代了过去与具体工具绑定的逻辑，这有助于统一策略执行、安全审计和资源跟踪。
- **WASM 运行时路由至共享出口:** 作为 PR #3098 的后续，`serrrfirat` 提交的 PR #3123 (`feat(reborn): route WASM HTTP through shared egress`) 被合并，使 Reborn 的 WASM 运行时开始使用新的共享 HTTP 出口，标志着 Reborn 基础组件开始实际应用。
- **主机运行时合同门面建立:** `serrrfirat` 提交的 PR #3095 (`feat(reborn): add host runtime contract facade`) 被合并，为一个稳定的 `ironclaw_host_runtime` API 合同奠定了基础，便于上层模块（如 TurnCoordinator、AgentLoopHost）进行抽象开发。
- **生产环境就绪性提升:** `nickpismenkov` 提交的 PR #3119 (`fix: disable canary issues creation`) 被合并，修复了金丝雀测试失败时自动创建 Issue 的问题，可能是为了避免信息轰炸，属于运维流程优化。

**总结:** 项目在今天成功构建了 Reborn 架构的多个关键“骨架”和“血管”，即**核心服务图**、**统一HTTP出口**和**主机运行时门面**。这表明 Reborn 的内部基础设施正在快速完善，项目离实现其最终目标又迈进了一大步。

### 4. 社区热点

- **#2987 - [EPIC] Track Reborn architecture landing strategy and grouped PR plan:**
    - **热度:** 43 条评论，是所有 Issue 中讨论最活跃的。
    - **链接:** [Issue #2987](https://github.com/nearai/ironclaw/issues/2987)
    - **分析:** 作为 Reborn 架构的“总指挥” Issue，它持续吸引着所有相关开发者的关注。社区的核心诉求是理解这个庞大重构计划的着陆策略和分阶段PR计划。43条评论表明团队内部或社区正围绕如何平稳、有序地合并这个大功能进行着密集的协调和讨论。

- **#3103 - [QA] High ASCII TUI in new ironclaw does not display correctly.:**
    - **热度:** 7 条评论，在 QA 和 Bug 类 Issues 中讨论度较高。
    - **链接:** [Issue #3103](https://github.com/nearai/ironclaw/issues/3103)
    - **分析:** 一位用户报告新版本的TUI中，高 ASCII 字符显示不正确，影响用户体验。此 Issue 引起了开发者的注意，表明即使是面向开发者的工具，基础的终端渲染体验依然至关重要。这可能暗示 Reborn 重构过程中对终端输出模块的调整不够平滑，需要回归兼容性。

### 5. Bug 与稳定性

根据严重程度排列：

| 严重程度 | Issue / PR | 说明 | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | #3113, #3115, #3116 | 三项**线上金丝雀测试 (Canary)** 失败 (`provider-matrix`, `persona-rotating`, `public-smoke`)，均使用 Anthropic 提供者。这可能指向一个回归问题或环境问题。 | **未修复**。已创建 Issue 自动跟踪。 |
| **中** | #3133 | `Mission to send an email failed`。用户尝试发送邮件的任务因 Gmail 认证问题失败。 | **未修复**。可能涉及外部服务或配置。 |
| **中** | #3132 | `Mission creation fails`。创建任务时，参数 `cooldown_secs` 应为整数但接收到了字符串 `"120"`。这是一个类型处理错误。 | **未修复**。 |
| **低** | #3128 | `Connecting to Gmail gives 502`。用户通过聊天助手集成 Gmail 时，在认证回调时遇到 502 错误。 | **未修复**。用户已找到通过设置页面安装的临时解决方案。 |
| **低** | #3108 | `Web IDE-issued NEAR AI API keys return 401`。通过 Web IDE 生成的 API Key 在某些网关上返回 `Session not found` 错误。 | **未修复**。属于 API Key 生命周期或网关配置问题。 |

### 6. 功能请求与路线图信号

- **#3085 - Use shared Reborn runtime HTTP egress for WASM, Script, and MCP:**
    - **链接:** [Issue #3085](https://github.com/nearai/ironclaw/issues/3085)
    - **信号:** 该 Issue 描述了为 WASM、脚本和 MCP 等能力使用统一 HTTP 出口的目标。**今天 PR #3098 和 #3123 已经完成合并**，直接解决了此 Issue 的核心任务。这是一个强烈的路线图信号，表明 Reborn 对网络请求的统一管理和安全策略执行是首要任务。

- **#3069 - Ship Reborn as a separate ironclaw-reborn binary:**
    - **链接:** [Issue #3069](https://github.com/nearai/ironclaw/issues/3069)
    - **信号:** 计划将 Reborn 作为一个独立的二进制文件发布。这标志着一个明确的产品策略：在过渡期内，新旧版本将共存，以降低用户迁移风险。

- **#3127 - [Reborn] Design scalable capability permission UX and policy resolver:**
    - **链接:** [Issue #3127](https://github.com/nearai/ironclaw/issues/3127)
    - **信号:** 今天新开的 Issue，寻求设计一个可扩展的、面向最终用户的权限界面和策略解析器。这表明 Reborn 架构在考虑底层安全机制的同时，也开始着手解决用户如何直观地理解和配置这些权限。

### 7. 用户反馈摘要

- **开发者对 Reborn 寄予厚望:** 大量的 Issue 和 PR 都围绕 `[reborn]` 标签，表明核心用户和贡献者深度参与并认可这一架构升级方向。
- **稳定性是第一位的:** 尽管进展迅速，但多个 Canary 失败和 Gmail 等外部服务的集成问题表明，在快速迭代中，需要在新功能落地和系统稳定性之间找到平衡。用户对“工作流执行”、“工具集成”等核心场景的稳定性非常敏感。
- **TUI体验需关注:** `#3103` 关于 TUI 显示的反馈表明，命令行界面的用户体验是用户直接接触到的第一印象，任何降级都会迅速引发反馈。核心团队应确保新架构下的 TUI 不低于现有版本的质量。

### 8. 待处理积压

- **PR #1446 - feat: add Aliyun Coding Plan support:**
    - **创建时间:** 2026-03-20 (已逾 40 天)
    - **链接:** [PR #1446](https://github.com/nearai/ironclaw/pull/1446)
    - **状态:** 长期未合并。此 PR 旨在增加对阿里云的支持，具有显著的社区价值。由于项目正全力投入 Reborn 架构，可能导致此 PR 被搁置。建议维护者评估此 PR 与 Reborn 架构的兼容性，给出明确的合并计划或指导建议。

- **PR #1764 - feat: Abound demo — Responses API, credential injection, skills, guardrails:**
    - **创建时间:** 2026-03-30 (已逾 30 天)
    - **链接:** [PR #1764](https://github.com/nearai/ironclaw/pull/1764)
    - **状态:** 长期未合并。这是一个功能丰富、跨领域的大型 PR。其停滞状态同样可能是受 Reborn 重构优先级的影响。建议维护者说明该 PR 在当前架构下的状态，是等待 Reborn 落地后 rebase，还是其功能已被拆解到其他任务中。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是根据您提供的 LobsterAI GitHub 数据生成的 2026-05-01 项目动态日报。

---

# LobsterAI 项目动态日报 - 2026-05-01

## 1. 今日速览

项目今日活跃度较高，主要体现为大量 Pull Request (PR) 的合并与关闭。过去24小时内，共有9个PR被合并或关闭，涵盖了核心协作、安装器、UI/UX及技能系统等多个方面，显示出项目团队正在积极推进稳定性修复和功能优化。此外，有1个新的Issue被提出，涉及微信机器人配置体验问题。同时，仍有12个PR处于待合并状态，其中部分已持续超过一个月，需要团队关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日项目向前迈进了关键一步，合并了9个PR，主要集中在修复稳定性问题和优化用户体验。

- **核心协作 (Cowork) 稳定性**：
    - 修复了因LLM请求无限重试导致的会话死锁问题。当Gateway重试失败时，现在会主动中止会话，防止后续消息被拒绝。(PR [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869))
    - 修复了在主页切换模型时，导致Gateway硬重启的问题，提升了配置切换的流畅性。(PR [#1857](https://github.com/netease-youdao/LobsterAI/pull/1857))
    - 改进了`CoworkStore`的配置写入性能，通过事务批量处理更新，减少了SQL开销。(PR [#1869] 与 `fix(cowork): batch config writes in transaction` 相关，但该PR状态为OPEN)

- **UI/UX 优化**：
    - **微信渠道图片预览**：修复了微信渠道发送的Markdown图片显示过大的问题，并增加了图片点击预览功能，提升了IM渠道的图文交互体验。(PR [#1868](https://github.com/netease-youdao/LobsterAI/pull/1868))
    - **模型选择器**：修复了长模型名称导致Header区域溢出的问题，确保了下拉菜单的正常显示。(PR [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855))
    - **更新提示**：移除了安装更新时不准确的“自动重启”提示，避免用户产生困惑。(PR [#1829](https://github.com/netease-youdao/LobsterAI/pull/1829))

- **系统稳定性与工程化**：
    - **Windows 安装器**：修复了NSIS安装脚本中退出码检查的逻辑错误，并增强了诊断能力。(PR [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841))
    - **Windows 技能卸载**：修复了在Windows上删除技能目录前，未释放文件监控器（Watch）导致的错误。(PR [#1851](https://github.com/netease-youdao/LobsterAI/pull/1851))
    - **配置管理**：优化了`updateConfig`函数的读写逻辑，防止在初始化失败时用旧数据覆盖已存储的配置。(PR [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840))

## 4. 社区热点

今日社区中最受关注的问题主要是**微信机器人配置**相关的用户反馈。

- **热点 Issue**：[#1878 IM机器人 微信接口 配置扫码后无法输入验证码](https://github.com/netease-youdao/LobsterAI/issues/1878)
    - **诉求分析**：用户在使用IM机器人的微信接口时，遇到了配置流程中断的问题。最新的微信扫码后要求用户在客户端输入6位验证码，但LobsterAI客户端并未提供相应的输入界面，导致配置无法完成。这表明用户对端到端配置的完整性有较高需求，产品的交互流程需要紧跟上游平台（如微信）的变更。

## 5. Bug 与稳定性

今日报告的Bug数量较少，但存在一个严重的功能性Bug。

- **严重**：
    - **IM微信接口配置流程中断**：[Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) 描述了微信扫码配置时无法输入验证码的问题，导致该功能完全不可用。严重性高，影响了核心的IM机器人配置功能。**目前尚无关联的Fix PR，需紧急处理。**

- **中低（从已合并/关闭的PR推断）**：
    - 会话死锁：当LLM请求失败时，后续消息被“会话仍在运行”错误拒绝，已被PR #1869修复。
    - 模型切换时Gateway重启：影响日常切换模型的体验，已被PR #1857修复。
    - 长模型名溢出：影响UI美观和操作，已被PR #1855修复。

## 6. 功能请求与路线图信号

从今日的活跃PR中，可以观察到项目未来可能的发展方向：

- **技能与生态**：
    - **技能重复安装处理**：多个Open状态PR (#827, #836) 尝试通过基于`name`字段或文件指纹来防止技能重复安装，这暗示社区对技能管理有更高的要求，希望有更智能的安装体验。该功能可能会被纳入下一个小版本。
    - **MCP Server批量创建**：PR #835 提出了通过粘贴JSON配置（如Claude Desktop配置）来批量创建MCP Server，这前瞻性地满足了用户快速配置复杂MCP生态的需求。

- **安全与性能**：
    - **安全扫描与权限管理**：PR #842 提出了全新的安全环境扫描功能和系统权限管理，这预示着项目可能在考虑引入更完善的安全沙箱机制，以应对日益增长的安全需求。
    - **SQLite性能优化**：PR #830 建议通过调整SQLite参数来优化数据库性能，表明用户或开发者对应用启动和数据处理速度有更高期待。

## 7. 用户反馈摘要

从今日的Issue #1878中，可以提取出一条清晰的用户反馈：

- **核心痛点**：“配置微信机器人扫码后，需要在OpenClaw端输入验证码，但客户端没有这个输入界面，导致配置失败。” 这直接反映出产品交互设计未能适配微信最新的安全验证流程，用户体验因此受阻。

## 8. 待处理积压

项目中存在一批创建于2026年3月25日、仍未合并的PR，它们已标记为`[stale]`（过时/不活跃），急需维护者关注。

- **安全类**：
    - [#826](https://github.com/netease-youdao/LobsterAI/pull/826): 修复“打开外部链接”的URL协议验证。
    - [#828](https://github.com/netease-youdao/LobsterAI/pull/828): 防止`localfile://`协议处理器的路径遍历漏洞。

- **功能与性能类**：
    - [#827](https://github.com/netease-youdao/LobsterAI/pull/827) & [#836](https://github.com/netease-youdao/LobsterAI/pull/836): 防止重复安装技能。
    - [#830](https://github.com/netease-youdao/LobsterAI/pull/830): 优化SQLite数据库性能。
    - [#835](https://github.com/netease-youdao/LobsterAI/pull/835): 添加MCP Server JSON粘贴模式。
    - [#838](https://github.com/netease-youdao/LobsterAI/pull/838): IM机器人会话支持按渠道独立选择模型。
    - [#841](https://github.com/netease-youdao/LobsterAI/pull/841): 防止轮询周期重叠。
    - [#842](https://github.com/netease-youdao/LobsterAI/pull/842): 新增安全环境扫描功能。
    - [#847](https://github.com/netease-youdao/LobsterAI/pull/847): 修复Markdown渲染中`~`符号的解析问题。
    - [#848](https://github.com/netease-youdao/LobsterAI/pull/848): 批量处理协作配置写入。

**分析**：这批积压PR内容涉及安全修复、性能优化和重要功能（如IM渠道独立模型），它们长期未被合并，可能会延长用户所需的关键特性或安全风险的暴露窗口。建议项目维护者在本周内对这批PR进行Review和决策。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 Moltis 项目数据生成的 2026-05-01 项目动态日报。

---

## Moltis 项目动态日报 | 2026-05-01

### 1. 今日速览

今日项目活跃度**极高**，主要得益于一次大规模的功能合并与 bug 修复浪潮。过去24小时内，共有 **18 个 PR** 被合并/关闭，**6 个 Issue** 被关闭，展现了团队高效的交付能力。合并的 PR 覆盖了从核心网关、Web UI 到代码索引、沙箱（Sandbox）等关键模块，标志着项目正从功能开发阶段向稳定性和用户体验打磨阶段平稳过渡。同时，新出现的几个关于聊天界面布局滚动的 Bug 报告值得关注，可能暗示近期 UI 改动引入的回归问题。

### 2. 版本发布

- **新版本**: `20260430.01`
- **链接**: [GitHub Releases 页面](https://github.com/moltis-org/moltis/releases/tag/20260430.01)
- **更新内容**: 此版本整合了本次日报周期内合并的所有 PR，主要包括：
    - **新功能**: 新增 `DeepInfra` 提供商支持、深度的代码索引自动触发功能、会话标题自动生成、Web UI 消息操作栏（复制/重试/分叉）、以及“/btw”、“/fast”等 5 个新命令。
    - **稳定性修复**: 修复了 `SIGTERM` 信号处理、`system-notice` 文本溢出、复制按钮在 HTTP 下失效等问题。
    - **平台支持**: 引入了远程和多后端沙箱支持（Vercel, Daytona 等），增强了在云环境下的部署能力。
- **破坏性变更**: 本次发布未报告明显的破坏性变更。
- **迁移注意事项**: 强烈建议所有用户更新到此版本，以解决多个已知的稳定性问题，尤其是 Docker 环境的优雅关闭问题。无需执行特殊的迁移步骤。

### 3. 项目进展

项目在多个关键领域取得了显著进展：

- **核心能力强化**:
    - **代码索引**: 实现了 [PR #921](https://github.com/moltis-org/moltis/pull/921) 的代码索引自动触发功能，基于文件变化自动重索引，显著提升了对大型项目的理解和检索能力。
    - **沙箱平台**: [PR #942](https://github.com/moltis-org/moltis/pull/942) 引入了远程沙箱支持，使得 Moltis 可以在 Fly.io、Render 等无 Docker 或 Daemon 限制的云平台上安全执行代码。
    - **网关与体验**: [PR #926](https://github.com/moltis-org/moltis/pull/926) 和 [PR #933](https://github.com/moltis-org/moltis/pull/933) 增加了多个新命令（`/btw`, `/insights`, `/queue`）并实现了自动生成会话标题，极大丰富了用户交互和会话管理方式。

- **用户体验与 UI 升级**:
    - **Web UI**: 为助手回复添加了复制、重试和分叉操作栏 [PR #932](https://github.com/moltis-org/moltis/pull/932)，并提供了隐藏语音按钮的配置选项 [PR #943](https://github.com/moltis-org/moltis/pull/943)。
    - **修复与优化**: 修复了聊天滚动、system-notice 溢出、面板布局等问题，提升了界面稳定性。

- **生态集成**:
    - **提供商**: 新增了 `Zen (opencode.ai)` [PR #944](https://github.com/moltis-org/moltis/pull/944) 和 `DeepInfra` [PR #934](https://github.com/moltis-org/moltis/pull/934) 两个多模型代理提供商，扩展了用户的模型选择范围。
    - **SDK 基础**: 合并了 TS/Python/Go 等 SDK 的基础框架 [PR #288](https://github.com/moltis-org/moltis/pull/288)，为未来的第三方应用集成奠定了重要基础。

- **平台兼容性**: 修复了 HTTP 环境下剪贴板复制功能失效的问题 [PR #936](https://github.com/moltis-org/moltis/pull/936)，这对于大量自部署在局域网的用户至关重要。

### 4. 社区热点

今日讨论热度相对分散，但有两个 PR 由于涉及高价值功能扩展，吸引了社区关注：

- **[PR #942: feat(sandbox): remote & multi-backend sandbox support](https://github.com/moltis-org/moltis/pull/942)**
    - **背景**: 此 PR 旨在解决 Moltis 在云平台（如 DigitalOcean, Fly.io）因缺少 Docker Daemon 而无法使用沙箱功能的痛点。
    - **分析**: 该 PR 是当前最受关注的功能请求之一，信号强烈。它借鉴了 `sandcastle` 的架构，响应了社区对“一键式云部署”和“更灵活执行环境”的需求，一旦合并，将大幅提升 Moltis 在云端场景下的实用性和部署友好度。

- **[PR #944: feat(providers): add Zen (opencode.ai) multi-protocol provider](https://github.com/moltis-org/moltis/pull/944)**
    - **背景**: 新增 `Zen` 作为提供商，它提供统一的 API 来访问 GPT、Claude、Gemini 等多种模型。
    - **分析**: 用户对“一站式”模型访问和更灵活的计费方式有持续需求。添加该供应商不仅能降低用户管理多个 API Key 的复杂度，也反映了项目对开放生态系统和用户选择权的承诺。

### 5. Bug 与稳定性

今日新报告的 4 个 Open Issue 全部为 Bug，集中在聊天界面，显示存在回归问题。

- **严重**:
    - **[Bug] chat doesn't auto-scroll when at end** [Issue #946](https://github.com/moltis-org/moltis/issues/946) (由 `vvuk` 报告)
        - **严重性**: 高。该问题直接影响核心聊天体验，用户在消息流末尾可能无法自动看到新消息。
        - **关联**: 可能与修复 #922 的 [PR #925](https://github.com/moltis-org/moltis/pull/925) 相关，或引入了新的问题。暂无修复 PR。
    - **[Bug] chat layout seems broken -- too wide** [Issue #945](https://github.com/moltis-org/moltis/issues/945) (由 `vvuk` 报告)
        - **严重性**: 高。布局错乱严重影响可用性和视觉体验。暂无修复 PR。

- **中等**:
    - **[Bug] settings/terminal tmux error** [Issue #937](https://github.com/moltis-org/moltis/issues/937) (由 `gaarf` 报告)
        - **严重性**: 中。影响使用 tmux 环境的用户。暂无修复 PR。

- **较低 / 待观察**:
    - **[Bug]**: 标题为空 [Issue #947](https://github.com/moltis-org/moltis/issues/947) (由 `bashrusakh` 报告)
        - **严重性**: 低。信息不足，需要用户补充细节。

- **已修复亮点**: 值得称赞的是，团队非常高效地解决了之前报告的多个关键 Bug，如 `SIGTERM` 未处理 ([#939](https://github.com/moltis-org/moltis/issues/939))、system-notice 溢出 ([#938](https://github.com/moltis-org/moltis/issues/938))、模型发现超时 ([#919](https://github.com/moltis-org/moltis/issues/919)) 和 MCP OAuth 令牌过期 ([#927](https://github.com/moltis-org/moltis/issues/927))。

### 6. 功能请求与路线图信号

- **强信号 – 可能被纳入下个版本**:
    - **Native 9router support** [Issue #266](https://github.com/moltis-org/moltis/issues/266): 该请求已被关闭，但并未实现。从摘要分析，这更像是一个长期的功能路线图信号，其核心诉求是“通用 AI 代理/路由”。虽然本次未直接实现，但项目已通过新增 `Zen` [PR #944] 和 `DeepInfra` [PR #934] 等“多协议代理提供商”来间接满足了部分需求，预示着项目可能的演进方向是成为一个更强大的 AI 请求路由中间件。

- **弱信号 / 社区呼声**:
    - **无明确新功能请求**: 今日无新增的功能请求 Issue。社区当前更关注 UI 稳定性和体验打磨，如聊天滚动、布局问题。

### 7. 用户反馈摘要

今日社区的声音主要来自新汇报的 Bug，这些反馈直接反映了近期代码变更的影响：

- **用户 `vvuk`** 连续报告了 [Issue #946](https://github.com/moltis-org/moltis/issues/946) 和 [Issue #945](https://github.com/moltis-org/moltis/issues/945)，反馈了新版本中聊天面板的自动滚动和布局问题。这表明他是一位活跃的深度用户，对产品的细节体验非常敏感。
- **用户 `gaarf`** 反馈了 `system-notice` 样式问题 [Issue #938](https://github.com/moltis-org/moltis/issues/938)，该问题已在 [PR #941](https://github.com/moltis-org/moltis/pull/941) 中迅速修复。这说明社区反馈和开发修复之间的闭环非常高效。
- **用户 `faevourite`** 报告了 `SIGTERM` 信号问题 [Issue #939](https://github.com/moltis-org/moltis/issues/939)，该问题很快在 [PR #940](https://github.com/moltis-org/moltis/pull/940) 中被解决。这表明用户群体中有大量 Docker 部署场景，且对容器的优雅停机有明确要求。

### 8. 待处理积压

- **[OPEN] [PR #942](https://github.com/moltis-org/moltis/pull/942): feat(sandbox): remote & multi-backend sandbox support**
    - **创建时间**: 2026-04-30
    - **状态**: 待合并，尚无评论。
    - **备注**: 这是一项重大的基础设施改动，对云部署至关重要。鉴于其重要性，可能需要更广泛的 review 以确保架构的稳健性。建议维护者尽快推动此 PR 的审查进程。

- **[OPEN] [Issue #266](https://github.com/moltis-org/moltis/issues/266): Feature Request: Native 9router support**
    - **创建时间**: 2026-02-28
    - **状态**: 已关闭，但核心需求并未被明确接受或拒绝。
    - **备注**: 虽然项目通过添加 `Zen`、`DeepInfra` 等提供商向前迈了一步，但用户提出的“通用 AI 代理/路由”的宏愿仍未完全解决。建议维护者对此进行明确的路线图说明，或将其拆分为更具体、可执行的小任务。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，这是根据您提供的CoPaw项目数据生成的2026年5月1日项目动态日报。

---

# CoPaw 项目动态日报 | 2026年5月1日

**项目名称:** CoPaw (github.com/agentscope-ai/CoPaw)
**报告周期:** 2026年04月30日 - 2026年05月01日

### 1. 今日速览

今日CoPaw项目社区活跃度极高，24小时内处理了大量社区反馈。核心亮点包括：**快速迭代**发布v1.1.5.post1补丁版本，重点修复了**严重的安全漏洞（任意文件遍历）**以及企业微信（WeCom）和飞书（Feishu）通道的**稳定性与功能性Bug**。同时，社区对**前端UI/UX优化**、**会话管理**和**Agent工作区**设计的讨论热度不减。整体上看，项目维护者响应迅速，项目健康度良好，正处于积极解决用户痛点、夯实基础功能的阶段。

### 2. 版本发布

- **v1.1.5.post1 (立即发布）**
    - **更新内容**：
        - **安全修复**: 修复了Windows服务器上的任意文件遍历漏洞 (issue #3955）。
        - **功能增强**: 为飞书通道引入了`FeishuCardHandler`，并将工具防护（tool_guard）的审批流程从文本命令升级为**交互式按钮**，提升了易用性和用户体验。
    - **破坏性变更**: 无。
    - **迁移注意事项**: 建议所有用户尽快升级到此版本，尤其是Windows服务器用户，以修复安全漏洞。

### 3. 项目进展

今日共计合并/关闭了13个PR，项目在安全、稳定性、渠道适配和开发者体验方面取得了显著进展。

- **关键安全修复**:
    - `#3973`: [feat(app): prevent path traversal...] 由 `zhijianma` 合并，直接修复了issue #3955中的路径遍历漏洞，是本次版本发布的核心。
- **渠道稳定性与功能增强**:
    - `#3300` & `#3978`: 修复了企业微信通道因事件循环冲突导致的`RuntimeError`，解决了`send_file_to_user`等功能的频繁故障。
    - `#3950`: 修复了企业微信通道在长时间任务中因`stream_id`未及时刷新而导致的“Thinking...”卡死问题。
    - `#3963`: 修复了企业微信通道可能发生的双重重连和跨循环断线问题。
    - `#3948`: 为企业微信群聊增加了`share_session_in_group`配置开关，允许群内成员共享一个对话会话。
- **前端体验优化**:
    - `#3981`: 更新了前端`antd` v5组件库的过时API，清除了DevTools中的部分警告。
    - `#3960`: 修复了工具调用输入/输出块中代码过长导致溢出的问题。
    - `#3958` & `#3959` (首次贡献者): 修复了在Agent之间切换时聊天会话丢失，以及导航到其他页面再返回时聊天组件被卸载、任务中断的问题。这极大地提升了前台的“会话持久性”体验。
- **开发者与社区贡献**:
    - `#3989`: [first-time-contributor] 收到了新的“知识”功能贡献 (PR待审核)。

### 4. 社区热点

- **`#3955`: [Bug]: windows服务器任意文件遍历漏洞**
    - **热度**: 评论数最多(12), 已关闭。
    - **链接**: [Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)
    - **分析**: 这是一个严重的安全问题，社区用户发现了可以通过路径遍历访问服务器任意文件的漏洞。该问题在一天内被报告并火速得到修复（通过PR #3973和版本v1.1.5.post1），体现了项目对安全问题的极高重视和快速响应能力。
- **`#3853`: [Bug]: On Debian GNU/Linux 12, the page freezes...**
    - **热度**: 评论数10, 已关闭。
    - **链接**: [Issue #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853)
    - **分析**: 报告了在Debian系统上保存模型设置后页面卡死的严重问题。经过排查，问题可能与权限有关（`root`用户下正常），但最终被修复。这反映了跨平台兼容性仍是社区关注的重点。
- **`#3350`: [Question]: 页面进行超多轮对话后页面滚动变得特别卡**
    - **热度**: 评论数6, 未关闭。
    - **链接**: [Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350)
    - **分析**: 用户报告在超过200轮对话后页面滚动卡顿，这是大型语言模型应用中常见的前端性能瓶颈。用户的根本诉求是希望在进行长期项目迭代时，既不影响Agent的上下文理解，又能流畅操作界面。这指向了前端虚拟列表、延迟渲染或懒加载等优化方案。

### 5. Bug 与稳定性

| 严重程度 | Issue/PR | 标题 | 状态 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **严重** | #3971 | QwenPaw v1.1.4 Windows exe首次运行白屏 | **已关闭** | 已修复，影响7台内部测试机器，严重性高。 |
| **严重** | #3976 | 会话空闲清理机制错误取消正在运行的任務 | **未关闭** | 报告了一个关键性bug：会话管理器的清理机制会错误地终止正在进行的长时间任务，导致用户无法收到回复。需要优先关注。 |
| **高** | #3957 | Agent workspace switches incorrectly when receiving messages via channel | **未关闭** | 严重的身份混淆问题：当Agent通过渠道收到消息时，工作区被意外切换，导致Agent认为自己变成了其他Agent。 |
| **高** | #3980 | "Running Config" Settings Page Returns "Not Found" Error | **未关闭** | 后端API端点缺失，导致Web UI设置页面报错。 |
| **中** | #3937 | 企业微信通道，突然不生效了 | **已关闭** | 连接偶发性失活，需要重新保存频道才能恢复，属于稳定性问题。 |
| **中** | #3977 | 对话上下文没有记忆管理，使用到memory_search报错 | **未关闭** | 记忆管理功能存在缺陷，调用`memory_search`时因类型错误报错。 |

### 6. 功能请求与路线图信号

- **高优先级 - 会话与工作区管理**:
    - **工作区分离** (`#3967`): 用户强烈呼吁将Agent的核心配置文件与用户的日常工作文档分离，以防止普通用户误删关键配置文件。这反映了项目从开发者工具向更广泛用户群体推广的需求。
    - **Ralph Loop模式** (`#3972`, 已关闭): 用户提出增加`/ralph-loop`魔法指令，实现Agent对任务的自我循环执行，类似于“Oh My OpenAgent”的Ralph Loop概念。这表明社区希望Agent具备更强的自主任务完成能力。
- **中优先级 - 前端与体验**:
    - **文件预览增强** (`#3966`, 已关闭): 用户希望支持更多类型的文件预览，例如Agent生成的docx、pdf等，而不仅仅是记忆文件。
    - **Hermes Agent集成** (`#3516`): 用户询问是否会引入“Hermes”理念，让QwenPaw的Agent能够**自动进化**。这是一个关于Agent自我迭代和优化的前瞻性问题。

### 7. 用户反馈摘要

- **满意点**: 项目修复漏洞和稳定性问题的速度非常快，如安全漏洞（#3955）和WeCom通道问题 (PR #3948, #3950, #3963) 都获得了积极响应。
- **痛点**:
    - **渠道服务不稳定**: 企业微信渠道“经常断开”、“突然不生效”（#2757, #3937），需要反复重新保存配置，严重影响日常使用体验。
    - **页面性能与交互**: 长时间对话后页面卡顿（#3350），审批流程需要手动输入命令而非点击按钮（#2945），期望界面更宽屏以展示表格数据（#3146）。
    - **会话管理混乱**: Console Web端的聊天历史记录容易丢失（#2034），切换Agent或页面会打断进行中的任务（#3958, #3959），缺乏对系统指令和用户消息的清晰隔离（#3975）。
    - **新手入门门槛高**: Agent工作区与其他文件混杂，普通用户难以区分，容易误删关键配置（#3967）。

### 8. 待处理积压

- **`#3846`**: [feat(models): Support GitHub Copilot model provider] - **已开启3天，等待合并**。这是一个首次贡献者提交的、支持GitHub Copilot模型的PR。该项目有较高的社区呼声（关联issue #406）。维护者应尽快给予审核反馈，以避免打击社区贡献者的积极性。
    - 链接: [PR #3846](https://github.com/agentscope-ai/QwenPaw/pull/3846)
- **`#3861`**: [Bug]: console 页面对话，多次中断 - **已开启3天**。描述了Console界面对话多次中断的问题，影响基础使用。目前尚未分配或关联修复PR，需关注。
    - 链接: [Issue #3861](https://github.com/agentscope-ai/QwenPaw/issues/3861)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-01

## 1. 今日速览

ZeroClaw 项目今日维持**极高活跃度**，24小时内产生 50 条 Issue 和 50 条 PR 更新，核心开发团队与社区贡献者均保持高强度参与。主要焦点集中在：**Web UI 增强与 onboarding 体验修复**（#5999/#6179）、**Channels 多平台适配**（WhatsApp/Telegram/Slack 系列 bug 修复）、以及 **Schema v3 大规模配置迁移**（#5947）。值得注意的是，**P1 严重级别的 Bug 密集爆发**（至少 7 个），涉及 onboarding 死锁、Supervised 审批绕过、Infinite tool-call loop 等关键路径，可能对用户体验产生较大影响。新版本发行数依然为 0，表明项目正处于**大版本前夕的密集修补期**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

**今日无 PR 被合并/关闭**（所有 50 条 PR 更新均为 Open 状态的评论更新）。但梳理活跃 PR 可看出以下重要工作线正在推进：

| 关键 PR | 规模 | 风险 | 目前状态 | 涉及模块 |
|---------|------|------|----------|----------|
| [#6179 - Web 端配置 CRUD 端点](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | XL | high | 开放中 | gateway, web, CLI |
| [#6164 - cron WebUI 手动触发](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) | L | high | 开放中 | cron, gateway |
| [#6221 - Canvas Store 跨子系统共享](https://github.com/zeroclaw-labs/zeroclaw/pull/6221) | S | high | 开放中 | daemon, gateway, channels |
| [#6214 - HMAC Tool 收据激活](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) | S | medium | 开放中 | agent, config, security |
| [#6046 - `zeroclaw memory reindex` CLI](https://github.com/zeroclaw-labs/zeroclaw/pull/6046) | S | medium | 开放中 | memory, CLI |
| [#6203 - Raspberry Pi 部署指南](https://github.com/zeroclaw-labs/zeroclaw/pull/6203) | M | low | 开放中 | docs, hardware |

**项目向前迈进的信号：**
- #6179 引入 `/api/config/*` CRUD 端点，将为**Web 端实现与 CLI 相同的 onboarding 能力**铺平道路。
- #6221 修复了 `canvas` 工具只能从 Web 使用、无法从 Channel 使用的**关键体验割裂**。
- #6214 推进了 **HMAC 签名的工具调用收据机制**，增强安全性审计能力。

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 |
|-------|--------|----------|
| [#6123 - fresh install default_model 问题](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | 15 | **全新安装后 agent 启动失败**——Ollama 在另一容器时配置未正确初始化，workflow blocked (S1) |
| [#5890 - Multi-agent UX 设计 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | 7 | 7天讨论期已结束，等待**核心团队投票**——这是产品架构级的设计提案 |
| [#5947 - Schema v3 批量迁移](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | 6 | **Merge blocker**——所有检查项完成前不允许合入 master |
| [#6153 - Matrix 语音转文字失败](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | 6 | **Element 客户端语音消息无法转文字**——音频格式识别失败 |
| [#5862 - cron 自我认知缺失](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | 6 | **Agent 不知道它能创建 cron 任务**——这是基本的 Prompt/工具注册问题 |

### 分析
- **#6123** 的 15 条评论揭示了一个**新手入门的主要痛点**——多容器部署场景的 default_model 变量未正确绑定。这是 onboarding 流程的关键阻塞项。
- **#5890** 的 RFC 设计引发大量讨论，表明社区对**多智能体协作 UX** 有强烈期待。当前 Agent 还是单例模式，该 RFC 可能定义下一步架构方向。
- **#5862** 和 **#6153** 都涉及**Agent 的自我认知问题**——它不知道自身能力边界（cron、音频处理），这指向**工具注册和系统提示工程**的改进空间。

## 5. Bug 与稳定性

### P1 / S1 严重级别 Bug（Workflow Blocked）

| Issue | 模块 | 摘要 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | provider, onboard | Fresh install 时 default_model 未正确识别 | 无 |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | agent, runtime:android | **Infinite tool-call loop**——Termux/Android 上 Agent 反复调用同一工具不终止 | 无 |
| [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) | channel:slack | Slack bot_token 必须写在配置文件中，**不支持环境变量** | 无 |
| [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | channel:whatsapp, cron | Cron 任务无法通过 WhatsApp 投递 | 用户已给出修复方案 |
| [#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) | channel:whatsapp, tool:web_fetch | WhatsApp 中无法使用 web_fetch 工具 | 用户已给出修复方案 |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | gateway, security | WebSocket 绕过 ApprovalManager，**Supervised 模式工具审批不生效** | 无 |
| [#6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206) | config, onboard, provider | 自定义 OpenAI 兼容端点的 onboarding 流程**标签错误 + 未知属性** | 无 |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | onboard, provider:openai | 选择 OpenAI Codex 却提示输入 API Key（**误导性流程**）| 无 |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | skills | SkillForge 自动生成的 TOML 包含非 schema 字段 | 无 |

### S2 严重级别 Bug（Degraded）

| Issue | 摘要 |
|-------|------|
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | Matrix 语音转文字失败 |
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | DeepSeek 推理内容在多轮对话中丢失 |
| [#6229](https://github.com/zeroclaw-labs/zeroclaw/issues/6229) | Telegram mention_only=true 无法过滤媒体消息 |
| [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) | `status` 命令对命名实例总是报告 stopped |
| [#6039](https://github.com/zeroclaw-labs/zeroclaw/issues/6039) | Copilot 提供者无法处理 Discord 上传的图片 |

**总体评估：** P1 级别的 Bug 数量为近期最高，且集中在**onboarding 流程**（4个）和 **Channels 兼容性**（3个）上，表明这些是新用户接触最频繁、也是问题最集中的区域。Onboarding 的 Bug 可能导致新用户在首次使用时就放弃，建议优先处理。

## 6. 功能请求与路线图信号

### 可能纳入下一版本的功能

| 功能 | 对应 Issue/PR | 优先级 | 判断依据 |
|------|---------------|--------|----------|
| **Multi-agent UX 设计** | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC | 7天讨论期已结束，等待核心团队投票 |
| **Schema v3 批量迁移** | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | 最高 | Merge blocker，**所有后续 PR 依赖它** |
| **Web UI UX 改进** | [#5999](https://github.com/zeroclaw-labs/zeroclaw/issues/5999) + PR #6220/#6217 | P2 | 已有多项 PR 和 Issue 并行推进 |
| **Telegram 智能截断** | [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) | P2 | 清晰的 Markdown 结构保留方案，较易落地 |
| **Slack 线程上下文补全** | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | P2 | 已有 #5992 作为基础，社区需求明确 |
| **浏览器 Headed/Headless 配置** | [#6241](https://github.com/zeroclaw-labs/zeroclaw/issues/6241) | P2 | 用户主动提交，现成的问题定义 |
| **Node.js 版本固定** | [#6211](https://github.com/zeroclaw-labs/zeroclaw/issues/6211) | P2 | CI 基础设施改进，低风险高价值 |
| **博客 RSS 订阅** | [#6208](https://github.com/zeroclaw-labs/zeroclaw/issues/6208) | P2 | Good first issue，适合外部贡献者 |

### 有价值的长期信号
- **Groq 提供者的原生工具支持**（#5932）：当前全局禁用，需要 per-model 粒度控制——这是多提供者策略的通用架构需求。
- **Docs 网站重构**（#5994）：用户反映当前文档分散，新进用户 onboarding 困难。维护者已标记为 `needs-maintainer-review`。

## 7. 用户反馈摘要

### 正面反馈
- 多位用户为 Bug 提供了**开箱即用的修复代码**（#6224/#6223），表明社区参与度高、开发者友好。
- `zeroclaw doctor` / `self-test` 命令继续收获好评，但对通配符地址的展示仍让人困惑（#6219）。

### 负面痛点
- **"配置是最大的门槛"**：多位用户（#6123/#6120/#6206）使用 onboarding 工具时因配置变量未正确解析而直接阻塞，体验极差。
- **"Agent 不知道自己的能力"**（#5862）：用户要求设置 cron 任务时 Agent 拒绝，因为它不知道自身有 `zeroclaw cron` 能力。类似的问题在工具注册和系统提示一致性上反复出现。
- **"Telegram 分组里的误触发"**（#6229）：`mention_only=true` 对媒体消息无效，导致 bot 在不该回复时回复，打扰群组。
- **"命名实例的状态报告错误"**（#6227）：多实例部署场景下 `status` 命令总是报告 stopped，让运维人员产生困惑。

### 用户最希望解决的问题
1. **一次 onboarding 就成功**，而不是因配置问题卡住（S1 级别 3 个不同 onboarding 相关 Bug）
2. **Cron 任务 + WhatsApp** 等完整 workflow 能跑通
3. **Agent 能正确使用所有已注册的 tools/skills**，而不是说“我没有这个能力”

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 建时间 | 标签 | 为什么需要关注 |
|-------|--------|------|---------------|
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | 2026-04-23 | P1, needs-author-action | **Termux 无限 tool-call loop**——S1 阻塞但缺少用户进一步确认 |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | 2026-04-18 | r:needs-repro | Agent 不会用 cron——用户已提供明确用例，但未标记需重现 |
| [#5618](https://github.com/zeroclaw-labs/zeroclaw/issues/5618) | 2026-04-11 | P2, status:accepted | **DaemonSubsystems 重构**——已接受但无 PR 跟进，可能阻塞后续子系统架构 |
| [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) | 2026-04-22 | P2, needs-maintainer-review | **官方文档网站建设**——核心团队未表态是否有资源投入 |

### 长期未合并的关键 PR

| PR | 规模 | 风险 | 最后更新 | 阻塞原因 |
|----|------|------|----------|----------|
| [#5943](https://github.com/zeroclaw-labs/zeroclaw/pull/5943) | M | high | 2026-04-20 (11天) | **Inworld TTS/STT 提供者**——review 停滞 |
| [#5945](https://github.com/zeroclaw-labs/zeroclaw/pull/5945) | XS | medium | 2026-04-20 (11天) | **SSE 超时修复**——小的修复但长时间未合入 |
| [#6046](https://github.com/zeroclaw-labs/zeroclaw/pull/6046) | S | medium | 2026-04-23 (8天) | **memory reindex CLI**——已 Close #5646，等待 review |

**提醒维护者关注：**
- #6036 的 Android 无限循环 Bug 虽标记为 `needs-author-action`（用户未回应），但因涉及 Agent 执行路径的核心稳定性，即使无法复现也建议引入**工具调用次数上限保护**。
- #5943（Inworld TTS/STT）已开放 11 天，若 reviewer 资源紧张，建议至少给出一个状态更新以避免贡献者流失。
- 当前 P1 级别的 Bug 数量（7 个）已接近 3 月以来的峰值，建议进行一次**P1 Bug 清零 sprint**。

---

*数据采集时间：2026-05-01 01:00 UTC | 包含 50 条 Issue 和 50 条 PR 更新*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*