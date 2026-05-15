# OpenClaw 生态日报 2026-05-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-15 00:33 UTC

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

**OpenClaw 项目动态日报（2026-05-15）**

---

### 1. **今日速览**
过去24小时，OpenClaw 社区活跃度极高，共产生 **500条 Issues** 更新与 **500条 PR** 动态，反映项目正处于高速迭代期。新版本发布聚焦于依赖解耦、国际化增强及安全策略升级，同时社区对跨平台支持（Linux/Windows）、多模态交互和运维稳定性提出强烈诉求。整体生态健康，但存在若干关键回归问题需优先处理。

---

### 2. **版本发布**
#### **v2026.5.14-beta.1**  
本次更新核心在于**依赖架构重构**：  
- 引入 `@openclaw/proxyline` 统一代理链路，废弃 `proxy-agent`、`https-proxy-agent` 等冗余依赖，降低维护成本。  
- Control UI 新增 `pnpm ui:i18n:report` 工具，自动生成硬编码文本的国际化覆盖报告与区域回退元数据，提升多语言支持透明度。  

> ⚠️ **迁移提示**：若项目直接引用上述被弃用包，建议通过 `pnpm add @openclaw/proxyline` 显式声明代理依赖。

其他两个历史版本（v2026.5.12 及 beta 系列）主要实现**按需安装能力**：将 WhatsApp、Slack、Amazon Bedrock 等 Provider 插件外置，避免核心运行时加载无关 SDK，显著减少默认安装体积。

---

### 3. **项目进展**
今日无新合并或关闭的重大 PR。当前活跃开发集中在以下方向：

- **安全策略体系化**（#80783, #80056, #81104）：构建模型、网络、MCP 合规性检查框架，强化运行时审计与凭证验证机制，预计为下一版 AAMA 阶段收尾奠定基础。
- **Telegram 稳定性修复**（#81964）：绑定发送客户端超时阈值，防止因默认 500s 超时而造成“假死”现象，已在最新提交中完成验证。
- **Control UI 国际化落地**（#81724）：完成简体中文对概览、会话、频道页面的本地化，体现全球化适配加速趋势。

整体代码演进稳健，重点向生产就绪的安全与可观测性倾斜。

---

### 4. **社区热点**
以下 Issue/PR 在今日获得最多关注，揭示用户核心关切：

| 类型 | 标题 | 链接 | 热度 |
|------|------|------|------|
| Issue | Linux/Windows Clawdbot Apps 缺失 | [#75](https://github.com/openclaw/openclaw/issues/75) | 104 评论，74 👍 |
| PR   | Feishu 消息转发保留发件人身份 | [#39001](https://github.com/openclaw/openclaw/pull/39001) | 6+ 评论 |

**诉求分析**：  
- **跨平台桌面端缺位**是最大痛点（Issue #75），用户对 macOS/iOs/Android 已有体验后，亟需 Linux/Windows 原生应用以覆盖全场景。  
- Feishu 插件改进（PR #39001）回应企业协作场景下“合并转发消息去匿名化”需求，体现插件生态对真实办公流程的深度适配意愿。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键问题：

1. **[高] Gateway 网关性能退化**（#73323）  
   - Windows 11 + Node 24 环境出现 pricing fetch 60s 超时、Telegram polling 停滞（127–266s）、RPC 延迟（8–83s）。  
   - 已确认跨版本回归（4.23/4.25/4.26），暂无有效 Fix PR。

2. **[中] Signal 守护进程 SIGUSR1 重启竞态条件**（#22676）  
   - 新旧实例端口争抢导致孤儿进程与发送失败。  
   - 尚无实质性修复，属长期悬而未决问题。

3. **[低] Docker 内技能安装因缺少 brew 失败**（#14593）  
   - 官方容器镜像未预装 Homebrew，影响 `openai-whisper` 等依赖 brew 的技能部署。  
   - 社区期待提供 Alpine/Debian 替代方案或容器定制指南。

> 注：#81966（Codex 迁移告警清理）、#81915（Ollama 工具支持修复）等为内部优化，未列入公开 Bug 列表。

---

### 6. **功能请求与路线图信号**
高频新功能需求预示下一版本可能纳入：

- **会话快照（Session Snapshots）**（#13700）：支持保存/加载上下文断点，便于 A/B 测试与错误回滚。
- **分层引导文件加载**（#22438）：按使用频率分级加载 workspace 文件，降低 token 浪费。
- **Telegram Business Bot 支持**（#20786）：扩展企业级通讯接入能力。
- **AWS Secrets Manager 集成**（#13610）：解决密钥明文存储风险，符合云原生安全趋势。

结合现有 Policy 类 PR（如 #80783），**安全与可配置性**将成为 2026Q2 核心主题。

---

### 7. **用户反馈摘要**
从 Issue 评论区提炼的真实声音：

- **满意点**：  
  - “按需安装真香！之前装完整个套件磁盘爆了，现在只跑 Slack 只要 200MB”（来自 v2026.5.12 用户）。  
  - Telegram 轮询更稳定，“连续一周没掉线了”。

- **不满点**：  
  - “Docker 部署连个 brew 都搞不定，文档能不能写清楚？”（#14593 高频抱怨）。  
  - Control UI 在非 HTTPS/localhost 环境下无法运行，“Hostinger VPS 用户集体踩雷”（#32473）。  
  - 子代理通知总是发到错误会话，“老板根本收不到任务完成提醒”（关联 #80242 讨论）。

---

### 8. **待处理积压**
需维护者重点关注的历史悬案：

- **#29387**：agentDir 内的引导文件被静默忽略，影响自定义 Agent 行为一致性，创建超2个月未响应。
- **#22676**：Signal 重启竞态问题自 2026-02-21 提出，涉及底层进程管理，技术复杂度高。
- **#75**：Linux/Windows 桌面端路线图模糊，社区多次追问进度，缺乏透明沟通。

建议在下周维护会议中分配资源攻坚上述问题。

--- 

*数据来源：GitHub openclaw/openclaw 仓库，统计时间：2026-05-15 00:00 UTC+8 至 23:59 UTC+8*

---

## 横向生态对比

好的，作为专注于 AI 智能体开源生态的分析师，我将为您生成一份基于上述动态的横向对比分析报告。

---

### **2026-05-15 AI 智能体与个人 AI 助手开源生态横向对比分析报告**

**分析员：AI 智能体与个人 AI 助手领域资深技术分析师**

#### **1. 生态全景**

截至2026年5月15日，个人 AI 助手与自主智能体开源生态呈现“**一超多强、多元分化**”的格局。OpenClaw 作为核心参照项目，凭借其庞大的社区基数（日均1000条Issue/PR）和高速迭代，持续引领技术演进方向，尤其在依赖解耦、安全策略和跨平台支持上投入巨大。NanoBot、Hermes Agent、ZeroClaw 等项目则围绕特定场景（如企业协作、终端体验、复杂工作流）展开差异化竞争，共同推动 Agent Loop、Hook 系统、MCP 集成等关键技术成为行业标配。整体生态健康，但面临生产环境稳定性、跨平台一致性及多模态交互深度等共性挑战。

#### **2. 各项目活跃度对比**

| 项目名称 | Issues (昨日) | PRs (昨日) | Release (昨日) | 健康度评估 |
| :------- | :------------ | :--------- | :------------- | :--------- |
| **OpenClaw** | 500 | 500 | v2026.5.14-beta.1 | ⭐⭐⭐⭐⭐ (极高活跃，高速迭代) |
| NanoBot | 45 | 45 | 无 | ⭐⭐⭐⭐☆ (高活跃，稳定推进) |
| Hermes Agent | 50 | 50 | 无 | ⭐⭐⭐⭐ (活跃，密集优化) |
| PicoClaw | 9 | 24 | Nightly Build v0.2.8-nightly.20260514 | ⭐⭐⭐ (较高活跃，功能增强) |
| LobsterAI | 0 | 27 | v2026.5.14 | ⭐⭐⭐⭐⭐ (高效交付，版本稳定) |
| IronClaw | 50 | 50 | 无 | ⭐⭐⭐⭐ (活跃，架构演进) |
| CoPaw | 50 | 50 | v1.1.7 | ⭐⭐⭐⭐ (活跃，发布频繁) |
| ZeroClaw | 23 | 50 | 无 | ⭐⭐⭐⭐ (高效修复，功能迭代) |
| Moltis | 2 | 0 | 无 | ⭐⭐ (低活跃，稳定维护) |

*注：NullClaw 和 TinyClaw 在过去24小时内无活动；ZeptoClaw 无数据报告。*

#### **3. OpenClaw 在生态中的定位**

OpenClaw 无疑是当前生态的“**绝对领导者**”。
*   **优势**：其庞大的社区规模（日均500 Issue/PR）确保了广泛的用户基础和问题覆盖，使其能够快速响应多样化的需求。项目在**依赖管理**（统一代理链路 `@openclaw/proxyline`）、**安全合规**（AAMA阶段收尾，Policy类PR）和**国际化**（Control UI i18n工具）方面的系统性投入，为整个行业树立了高标准。
*   **技术路线差异**：OpenClaw 更侧重于构建一个**企业级、可审计、高可用的通用型智能体平台**，强调生产环境的稳定性、安全性与可观测性。相比之下，NanoBot 更聚焦于**开发者体验和企业级 Agent 工具链**，Hermes Agent 则在**终端用户界面（TUI/CLI）一致性与跨平台网关兼容性**上深耕。
*   **社区规模对比**：OpenClaw 的社区活跃度远超其他项目（Issues/PR数量级差异显著），这为其带来了丰富的外部贡献和更快的迭代速度，形成了强大的网络效应。

#### **4. 共同关注的技术方向**

多个项目共同涌现出以下关键需求：
*   **Agent Loop & Hook 系统** (OpenClaw, NanoBot, Hermes Agent, IronClaw, ZeroClaw): 这些项目都在积极构建或完善 Agent 的核心执行框架，特别是围绕策略、执行器和运行时的设计（如IronClaw的`ironclaw_agent_loop` crate），以及可插拔的Hook机制，用于实现策略注入、安全检查等。这反映了市场对**模块化、可扩展的智能体架构**的普遍追求。
*   **多模态与跨渠道集成** (OpenClaw, NanoBot, Hermes Agent, PicoClaw, CoPaw, ZeroClaw): Telegram、Slack、Feishu、Discord等平台的精细化支持（如消息路由、身份识别、媒体处理）是高频议题。用户对**统一的消息抽象层和多通道无缝切换**有强烈诉求，以覆盖办公、通讯、客服等多样化场景。
*   **安全与可观测性** (OpenClaw, NanoBot, Hermes Agent, IronClaw, ZeroClaw): 从安全策略体系化（OpenClaw）、凭证验证、权限控制（NanoBot）、到OTel追踪精细化（ZeroClaw）和运行时预设与策略（IronClaw），安全已成为所有项目的核心考量。可观测性方面，日志、监控、链路追踪的需求日益凸显，以保障复杂Agent系统的稳定运行。
*   **生产环境稳定性与跨平台兼容性** (LobsterAI, Hermes Agent, PicoClaw, NanoBot): 容器化部署（Docker）、特定操作系统（macOS, Windows）下的路径、编码、命令兼容性问题频发，反映出开发者对**开箱即用的生产部署体验**的迫切需求。
*   **技能管理与插件生态** (OpenClaw, NanoBot, LobsterAI, Hermes Agent, PicoClaw, ZeroClaw): 无论是内置技能的热加载、评审机制（ZeroClaw的Hermes风格），还是外部插件的管理与持久化（LobsterAI），都指向一个**开放、灵活的技能扩展体系**，以提升Agent的适应性和功能性。

#### **5. 差异化定位分析**

| 项目名称 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :------- | :------- | :------- | :--------------- |
| **OpenClaw** | 企业级智能体平台、通用底座、生产就绪 | 大型企业、需要复杂工作流和高度定制化的组织 | **依赖解耦**、**安全合规**、**多模态交互**，强调稳定性和可审计性。 |
| **NanoBot** | 开发者友好、企业级Agent工具链、模型抽象 | 开发者、企业IT团队、注重开发效率和API一致性 | **模型路由**、**CLI工具链**（doctor/session）、**多Provider适配**（OpenCode Go），强调灵活性和可配置性。 |
| **Hermes Agent** | 终端用户体验（TUI/CLI）、跨平台一致性、多平台网关 | 终端用户、开发者、注重命令行交互效率 | **终端布局稳定性**、**Docker兼容性**、**Telegram流式输出**，强调原生体验和跨平台行为统一。 |
| **PicoClaw** | 轻量级、易上手、多Agent协作、嵌入式部署 | 个人用户、小型团队、寻求轻量化解决方案者 | **多Provider实例解耦**、**Web前端流式交互**、**Docker化部署支持**，强调易用性和可定制性。 |
| **LobsterAI** | 渲染优化、插件生态、OpenClaw集成、文件预览 | 开发者、内容创作者、需要丰富插件和多媒体支持的团队 | **MCP协议迁移至OpenClaw**、**文件类工件本地预览**、**跨平台兼容性修复**，强调生态整合与用户体验。 |
| **IronClaw** | Reborn架构落地、Agent Loop框架、Configuration-as-Code | 大型组织、需要高度自动化和可配置基础设施的团队 | **Reborn架构**、**ProductAdapter路径**、**声明式配置系统**，强调架构革新和自动化部署。 |
| **CoPaw** | 浏览器自动化、测试覆盖率、多通道兼容性 | 测试人员、自动化工程师、需要浏览器交互的场景 | **Browser Use — Batch Actions**、**Browser Use — File Download**、**单元测试覆盖率提升**，强调自动化能力与健壮性。 |
| **ZeroClaw** | Cron调度、技能管理、Telegram集成、安全依赖更新 | 运维人员、需要定时任务和技能管理的用户 | **cron调度**、**Hermes-style技能后台评审**、**OTel追踪**，强调任务自动化和可观测性。 |
| **Moltis** | 去中心化通信、TLS证书、信任less中继 | 对去中心化网络和隐私保护有特殊需求的研究者或组织 | **portal-tunnel集成**、**TLS证书生成**，强调去中心化与安全通信。 |

#### **6. 社区热度与成熟度**

*   **快速迭代阶段**：
    *   **OpenClaw**: 作为生态核心，其活跃度无与伦比，正处于高速迭代期，不断推出新功能并重构核心架构。
    *   **NanoBot**: 保持高活跃度，专注于功能增强和稳定性提升，显示出强劲的发展势头。
    *   **Hermes Agent**: 开发密集，重点解决终端体验和跨平台兼容性问题，处于积极优化阶段。
    *   **IronClaw**: 围绕“Reborn”架构进行大规模重构和集成，是架构演进的先锋。
    *   **CoPaw**: 发布频繁，功能迭代迅速，尤其在前端自动化方面有显著进展。
    *   **ZeroClaw**: 高效修复Bug并推进功能迭代，展现出良好的维护节奏。

*   **质量巩固阶段**：
    *   **LobsterAI**: 虽然活跃，但更侧重于现有功能的优化、文档完善和依赖升级，体现出对稳定性的重视。
    *   **PicoClaw**: 功能增强为主，同时面临会话一致性、多Agent管理等深层挑战，需要更多时间打磨。
    *   **Moltis**: 低活跃度，主要进行维护性工作，关注点较为集中且深入。

#### **7. 值得关注的趋势信号**

*   **Agent Loop 成为事实标准**：OpenClaw、IronClaw、ZeroClaw 等项目都在构建或强化自己的 Agent Loop 框架，这预示着未来智能体开发将更加模块化和标准化，策略、执行器、运行时的分离将成为主流。
*   **安全与企业级特性是硬通货**：从 OpenClaw 的安全策略体系化到 ZeroClaw 的 OTel 追踪精细化，再到 IronClaw 的 Configuration-as-Code，安全、合规、可审计、可观测性已成为所有项目不可忽视的核心竞争力，是企业采纳的关键驱动力。
*   **MCP 生态整合加速**：LobsterAI 明确宣布迁移至 OpenClaw 原生 MCP Client，这反映了 MCP（Model Context Protocol）正在成为连接 LLM 与外部工具/数据源的通用桥梁，未来将有更多项目跟进这一趋势。
*   **多模态交互的深度集成**：不仅仅是消息传递，而是包括文件预览、语音转录、浏览器操作等在内的完整多模态交互闭环（如 CoPaw 的 Browser Use、Hermes Agent 的 STT 集成），以满足用户在复杂场景下的需求。
*   **生产环境部署的易用性持续优化**：从 Docker 镜像的完善（PicoClaw、LobsterAI）、跨平台脚本适配（Hermes Agent）到安装脚本的改进（ZeroClaw），开发者正致力于降低智能体部署和维护的门槛。
*   **终端用户体验（TUI/CLI）的极致追求**：Hermes Agent 对终端布局稳定性、resize 处理的优化，表明即使在图形界面丰富的今天，命令行仍然是许多开发者和高级用户的首选交互方式，其一致性和稳定性至关重要。

**对 AI 智能体开发者的参考价值**：开发者应重点关注 Agent Loop 架构设计、MCP 生态集成、生产环境安全加固和可观测性建设。同时，根据自身应用场景选择合适的项目作为底座或参考，例如，若侧重终端交互，可学习 Hermes Agent；若侧重企业工作流，可深入研究 OpenClaw 或 IronClaw。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026-05-15）**

---

### 1. **今日速览**
过去24小时 NanoBot 社区活跃度较高，共产生 45 条 Issues/PR 更新，其中 Issue 活跃率与关闭率持平（各 11 条），PR 合并率为 29%（7/24）。核心贡献集中在飞书集成修复、WebUI 体验优化及安全增强三大方向。项目整体处于积极迭代阶段，无重大版本发布。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
今日关键合并 PR：
- **#3783 / #3784**：为 Web 工具添加 `ssl_verify` 配置项，解决企业代理环境下 SSL MITM 拦截导致的证书验证失败问题（已合并）。
- **#3786**：修复 Telegram 频道中语音转录配置未生效的问题，支持通过 `config.json` 正确传递转录参数（已合并）。
- **#3775**：注册飞书机器人成员变更事件的空操作处理器，消除“processor not found”错误日志（已合并）。
- **#3121**：实现基于 Hook 的模型路由机制，支持动态选择 LLM 实例，响应 Issue #3070 需求（已合并）。

重要开放 PR：
- **#3791**：新增 `plan` 工具，支持任务分解与进度跟踪，提升 Agent 长时任务管理能力；
- **#3788**：引入会话级目标状态持久化，对齐 `long_task` 功能并重构 WebUI 交互逻辑；
- **#3785**：集成 OpenCode Go 网关支持，统一接入 GLM/Kimi/DeepSeek 等多厂商模型（OpenAI + Anthropic 兼容接口）；
- **#3776 / #3777**：CLI 层新增 `doctor` 诊断命令与 session 管理功能（list/export/delete），显著提升运维体验。

> ✅ 表明项目正加速完善开发者工具链、增强多平台稳定性并扩展企业级部署能力。

---

### 4. **社区热点**
- **Issue #2880**（Bug）：用户反馈无论发送何消息均报错，但使用 nanobot agent 模式正常。该问题持续 48 天，已有 17 条评论，反映严重阻塞，可能涉及底层调用链路异常。
- **Issue #3787**（Feature）：飞书机器人被其他 Bot 艾特时报错，根本原因为事件处理程序缺失。相关 PR #3775 已合并，但用户仍报告异常（#3772），显示边缘场景处理仍需加固。
- **PR #3791** 获高度关注，提出“计划-执行-更新”闭环工具，支持复杂任务拆解，被视为提升 Agent 自主性的关键突破。

---

### 5. **Bug 与稳定性**
按严重程度排序：

| Issue | 描述 | 状态 | 关联 Fix |
|------|------|------|--------|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) | 任意消息均报错，影响正常使用 | OPEN | 无 |
| [#3754](https://github.com/HKUDS/nanobot/issues/3754) | DeepSeek V4 Flash 忽略外部文件内容，自行编造知识 | CLOSED | 无公开 Fix |
| [#3760](https://github.com/HKUDS/nanobot/issues/3760) | deepseek-v4-flash 的 reasoning_content 导致 400 错误 | CLOSED | 无 |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI 打印内容错乱，需刷新恢复 | OPEN | 无 |

> ⚠️ **高优先级**：Issue #2880 存在时间长且无有效解决方案，建议优先排查。其余 Bug 多为特定模型或环境触发的边缘情况。

---

### 6. **功能请求与路线图信号**
用户强烈诉求包括：
- **模型路由**（Issue #3070 → PR #3121 已实现）：支持按任务复杂度自动切换高性价比模型；
- **安全文件访问控制**（Issue #3780）：针对 Windows 无沙箱环境，需细化 workspace 权限与脚本审查机制；
- **对话历史洞察**（Issue #3731）：提供 `/insights` 命令追踪累计 token 消耗；
- **本地分词器支持**（Issue #3647）：避免网络依赖以提升启动效率。

结合近期 PR，**模型抽象层增强**（OpenCode Go）、**CLI 工具链完善**（doctor/session）、**Agent 长时任务能力**（plan/long_task）将成为下一版本重点方向。

---

### 7. **用户反馈摘要**
- **正面反馈**：
  - “nanobot doctor 非常实用，快速定位了 API key 路径问题。”（#3776）
  - “OpenCode Go 网关大幅简化了多模型管理。”（#3785）
- **负面痛点**：
  - “公司用 Windows 服务器无法启用沙箱，担心误删文件。”（#3780）
  - “飞书群聊中被其他 Bot 艾特就崩溃，严重影响协作流程。”（#3772）
  - “WebUI 渲染卡顿，尤其含代码块时明显。”（#3790）

> 反映出企业用户在安全与稳定性方面的刚性需求，以及跨平台一致性待加强。

---

### 8. **待处理积压**
- **Issue #2880**（48 天未关闭）：持续报错问题，影响基础可用性，需核心团队介入排查；
- **Issue #3780**（5 天前提交）：企业安全场景需求明确，但尚无对应 PR，可评估是否纳入安全增强路线；
- **PR #3791 / #3788**：虽已开启，但依赖关系复杂（如 #3779），需确保合并前测试充分。

---

**总结**：NanoBot 在保持高活跃度的同时，正稳步向企业级 Agent 平台演进。建议优先处理长期悬而未决的 Issue #2880，并加速推进安全与企业级特性落地。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026-05-15）**

---

### 1. **今日速览**

过去24小时内，Hermes Agent 社区活跃度显著上升，共产生 50 条 Issue 更新与 50 条 PR 动态，表明开发与维护工作进入密集阶段。核心焦点集中在终端用户界面（TUI/CLI）的稳定性优化、多平台网关（如 Discord、Telegram）的功能增强以及模型缓存策略的精细化调整。整体项目健康度良好，无重大版本发布，但多个关键 Bug 已提交修复方案，技术债清理持续推进。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

本周期共 **11 个 PR 被合并或关闭**，主要进展如下：

- **终端布局稳定性提升**：  
  PR #24164（已合并）实现了终端窗口 resize 时的平滑 reflow 功能，解决了历史遗留的 ghost lines 和重叠问题，与 Claude Code 体验对齐。
  
- **Docker 环境技能加载修复**：  
  PR #24099（已合并）修复了 Docker 部署中自定义技能文件无法访问的问题，确保 `skill_view` 命令在容器化环境下正常工作。

- **Web UI 构建兼容性改进**：  
  Issue #25073（已关闭）报告 Windows 下 `rm` 命令缺失导致构建失败，虽未直接合入 PR，但暴露了跨平台脚本适配需求，已有后续文档对齐动作（PR #26017）。

- **Telegram 流式输出回归修复**：  
  PR #25710（已合并）修复了 Telegram 流模式下 MarkdownV2 格式丢失的问题，恢复最终消息的完整渲染能力。

总体来看，团队正系统性解决终端渲染、部署兼容性与网关一致性三大支柱问题，项目架构趋于稳健。

---

### 4. **社区热点**

以下 Issue/PR 在本日获得最高关注：

#### Issue #18080：仪表盘主题可访问性改进请求  
作者 ogermer 指出当前主题（Midnight/Ember 等）仅变更配色，字体选择（尤其是衬线体+低对比度组合）严重影响可读性，呼吁引入符合 WCAG 标准的字体与对比度选项。该 Issue 获 17 个点赞，反映用户对长期使用舒适度的强烈诉求。  
🔗 [NousResearch/hermes-agent/issues/18080](https://github.com/NousResearch/hermes-agent/issues/18080)

#### PR #25981：CLI resize 后输入栏去重修复  
针对 CLI 终端 resize 导致的重复输入框叠加问题，提出“clear-and-replay”策略替代此前临时修补方案。此 PR 直接回应 Issue #19280 及多个同类报告，是终端用户体验优化的重要一步。  
🔗 [NousResearch/hermes-agent/pull/25981](https://github.com/NousResearch/hermes-agent/pull/25981)

#### Issue #26009：Discord clarify 工具无限等待缺陷  
新用户 Caixa-git 报告：当 agent 使用多选 clarify 时，Discord 频道持续显示 “Still working…” 直至超时，用户响应未被拦截。此问题影响多平台交互可靠性，已同步提交对应修复 PR #26008，优先级为 P1。  
🔗 [NousResearch/hermes-agent/issues/26009](https://github.com/NousResearch/hermes-agent/issues/26009)

这些热点集中体现了用户对**界面一致性、跨平台行为统一性及交互反馈即时性**的高标准要求。

---

### 5. **Bug 与稳定性**

按严重程度排序的关键 Bug 列表：

| Issue | 类型 | 严重度 | 描述 | 状态 |
|-------|------|--------|------|------|
| #15080 | Anthropic OAuth 认证失败 | P1 | 即使有效 token 也被拒绝，HTTP 400 | 开放，12 条评论 |
| #23496 | Headless Chrome 参数不匹配 | P1 | `AGENT_BROWSER_CHROME_FLAGS` ≠ `AGENT_BROWSER_ARGS` | 开放，2 评论 |
| #26009 | Discord clarify 无响应 | P1 | 用户输入被忽略，工具卡死 | 开放，新提，已配 PR #26008 |
| #25970 | Kimi 模型缓存策略遗漏 | P2 | Kimi K2.6 无法享受 OpenRouter 缓存 | 开放，1 评论 |
| #25710 | Telegram 流式格式丢失 | P1 | 最终消息未渲染 MarkdownV2 | **已关闭，PR 合并修复** |

> ✅ **已有修复 PR 覆盖情况**：#25710 已解决；#26009 有对应 PR #26008 待审；其余高优 Bug 尚缺解决方案。

---

### 6. **功能请求与路线图信号**

- **多机器人身份识别**（PR #26019）：建议在内嵌运行时信息中展示 profile 名称，便于区分不同用途的 bot（如 daily/knowledge/dev），预示未来将加强配置隔离与审计能力。
- **Cron 任务元数据透传**（Issue #26004 + PR #26012）：允许调度器向平台适配器传递 `job_id` 等信息，支持更精细的任务追踪与权限控制，可能推动企业级调度功能扩展。
- **STT 语音输入集成**（PR #26013）：新增 Web UI 麦克风输入支持，复用内置 Whisper 引擎，体现对无障碍与多模态交互的前瞻投入。
- **主题系统重构呼声**（Issue #18080）：虽未直接提议代码变更，但高票反馈暗示下一阶段可能启动 UI/UX 现代化改造。

---

### 7. **用户反馈摘要**

- **正面反馈**：  
  - 用户肯定 Docker 技能加载修复（PR #24099）；
  - 赞赏 Telegram 流式输出格式恢复（PR #25710）；
  - 认可终端 resize 性能优化方向（PR #24164）。

- **负面痛点**：
  - 终端 TUI/CLI 在 resize 时普遍存在视觉撕裂、空白行堆积、ANSI 格式丢失等问题，尤其影响 macOS/Ghostty/Zed 用户；
  - Windows 安装脚本依赖 Unix 命令（如 `rm`）导致构建失败；
  - Discord/Telegram 等平台缺乏原生按钮支持，clarify 流程依赖文本拦截，易出现竞态或超时；
  - 模型缓存策略不一致（如 Kimi 被排除）造成性能损失；
  - 安全扫描发现 14 项隐患（Issue #26010），涉及权限误设与路径遍历风险。

---

### 8. **待处理积压**

以下 Issue 超过两周未获实质性响应，需优先关注：

- **#15080**：Anthropic OAuth 认证失效，P1 级，影响 Claude Max 用户正常使用，12 条评论 pending 官方回复。  
- **#11692**：关于自进化代理的技能溯源治理问题，属长期架构挑战，需产品层面决策。  
- **#15290**：NAS Docker 权限配置难题，P2，涉及复杂存储挂载场景，缺乏通用解决方案。  
- **#12785**：第三方 API User-Agent 可配置化请求，影响 Cloudflare 屏蔽环境下的可用性。  

建议维护者优先评估 #15080 的技术可行性并给出时间承诺。

--- 

📊 **数据总结**：今日 Issue 活跃率 76%（38/50），PR 活跃率 78%（39/50），无新版本发布，Bug 修复节奏加快，社区对终端一致性与平台兼容性关注度持续提升。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报 - 2026年5月15日**

---

### 1. **今日速览**
- PicoClaw 在 2026-05-14 发布了新的 nightly build（v0.2.8-nightly.20260514），标志开发节奏稳定。
- 过去 24 小时内共收到 9 条 Issue 更新与 24 条 PR 更新，社区活跃度较高，主要集中在 Telegram 频道支持、多 Agent 架构优化及依赖项升级。
- 整体贡献以功能增强和稳定性修复为主，无重大破坏性变更。

---

### 2. **版本发布**

**Nightly Build v0.2.8-nightly.20260514.eb065307**  
此为自动化构建版本，适用于开发者测试最新功能。建议生产环境用户继续使用稳定分支。完整变更日志见：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

> 注：当前无正式发布版（non-nightly release），因此不展开详细说明迁移影响。

---

### 3. **项目进展**

本次共合并/关闭 **1 个 PR**，其余 23 个 PR 仍待处理：

- **[#2836]** PowerShell 安全绕过编码问题修复（Bug Fix）  
  修复了通过 `iex` 注入执行命令时的编码解析漏洞，提升安全性。  
  GitHub: [PR #2836](https://github.com/sipeed/picoclaw/pull/2836)

其余高优先级 PR 包括：
- Telegram 论坛主题消息路由优化（[#2772](https://github.com/sipeed/picoclaw/pull/2772)）
- Web 前端配置 V3 文档同步（[#2766](https://github.com/sipeed/picoclaw/pull/2766)）
- 多 Provider 实例解耦与通道识别标准化（[#2551](https://github.com/sipeed/picoclaw/pull/2551)）

这些工作持续推进了多平台集成能力与系统健壮性。

---

### 4. **社区热点**

最活跃议题集中在 **Telegram 多话题支持** 和 **多 Agent 角色隔离**：

- **#2775**: 子 Agent 继承根 Agent 的 AGENT.md 导致身份混淆  
  用户反馈在多 Agent 协作中，子 Agent（如 Planner、Builder）未能正确加载自身角色定义，而是共享父级身份。此问题已引起关注，但尚无解决方案。  
  GitHub: [Issue #2775](https://github.com/sipeed/picoclaw/issues/2775)

- **#2779 & #2772**: Telegram 论坛主题触发器与消息路由改进  
  多个 PR 正尝试解决 Telegram 群组内不同 topic 的消息归属与响应策略问题，反映用户对精细化对话管理的需求。  
  GitHub: [PR #2779](https://github.com/sipeed/picoclaw/pull/2779), [PR #2772](https://github.com/sipeed/picoclaw/pull/2772)

此外，**#629**（LLM 调用失败未重试）虽创建于2026-02-22，但在过去一天被重新激活并已有14条评论，显示该问题长期未解决，影响用户体验。

---

### 5. **Bug 与稳定性**

按严重程度排序的关键 Bug：

| 编号 | 问题描述 | 状态 | 是否有 Fix PR |
|------|--------|------|----------------|
| #2721 | Session history race condition 导致 Anthropic API 返回 400 错误（`tool_use_id` 冲突） | CLOSED (reopened) | 否（原 issue #704 已关闭但未验证修复） |
| #2798 | Telegram 接收 PDF 后流会话中断 | OPEN | 否 |
| #2795 | 历史对话仅保留最后一条用户消息 | OPEN | 否 |
| #2859 | Xiaomi MIMO 模型在多轮对话中出现 400 参数错误 | OPEN | 否 |

其中，**#2721** 虽标记为 CLOSED，但因问题复现且无明确修复记录，实际仍处于开放状态；**#2798** 和 **#2795** 涉及核心消息处理流程，需优先排查。

---

### 6. **功能请求与路线图信号**

用户明确提出以下新功能方向，结合现有 PR 可见其可能纳入近期开发计划：

- **精细化 Telegram 控制**：通过配置文件对特定 forum topic 设置 `mention_only` 或禁用自动响应（[#2779](https://github.com/sipeed/picoclaw/pull/2779)）
- **多 Agent 角色隔离机制**：避免子 Agent 身份混淆（[#2775](https://github.com/sipeed/picoclaw/issues/2775)）
- **Web 聊天流式交互优化**：提升前端实时性与滚动体验（[#2587](https://github.com/sipeed/picoclaw/pull/2587)）
- **Docker 化部署支持**：降低入门门槛（[#2812](https://github.com/sipeed/picoclaw/pull/2812)）

以上均体现项目向“易用性”与“可定制性”演进的趋势。

---

### 7. **用户反馈摘要**

从 Issues 中提取的真实使用场景与情绪：

- **正面反馈**：部分用户认可 PicoClaw 对 Lemonade Server 的良好支持，尤其在 Telegram 与 WeChat 渠道表现稳定。
- **负面痛点**：
  - 多用户共享对话 session 时缺乏历史消息发送者标注（#2702）
  - 子 Agent 行为不可控，影响任务拆解准确性（#2775）
  - Docker 部署缺失阻碍非技术用户使用（#2812）
  - 模型切换（如 Xiaomi MIMO）易引发参数错误，缺乏兼容性说明

多数不满集中于**会话管理透明度**与**多 Agent 协调机制**。

---

### 8. **待处理积压**

以下 Issue / PR 存在时间较长且无实质性进展，建议维护者优先响应：

- **#629**: LLM 调用失败后未自动重试（Open since Feb, 14 comments）  
  GitHub: [Issue #629](https://github.com/sipeed/picoclaw/issues/629)
  
- **#2775**: 子 Agent 角色混淆问题（Open since May 5, 2 comments）  
  GitHub: [Issue #2775](https://github.com/sipeed/picoclaw/issues/2775)

- **#2551**: 通道识别解耦重构（Open since Apr 16, 持续活跃）  
  GitHub: [PR #2551](https://github.com/sipeed/picoclaw/pull/2551)

这些问题涉及核心架构，长期搁置可能影响后续扩展。

--- 

**总结**：PicoClaw 在保持高频迭代的同时，面临会话一致性、多 Agent 管理与跨平台稳定性等关键挑战。社区期待更清晰的架构边界与用户体验优化。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

2026-05-15 NanoClaw 项目日报

今日速览
NanoClaw 今日活跃度较高，共处理 23 条 Issues/PR 更新，其中 PR 数量达 22 条（9 个待合并），显示团队正密集推进功能迭代。社区在 Slack 会话管理和 Codex 集成方面提出多项增强需求，同时发现了一个低优先级容器竞态问题。整体进展平稳，无新版本发布。

版本发布
今日无新版本发布。

项目进展
今日合并了 13 个 PR：
- 新增多个技能（如 copy-grader、linkedin-ads、social-listening、reddit、firecrawl、serper）并本地化 audit-website 为复合栈（Lighthouse+axe+linkinator）。
- 完善文档（docs/onecli-secrets.md）并修正内部标签说明。
- 改进容器构建（Lighthouse CLI）和 WhatsApp 错误提示。
- 推进 Slack 会话模式优化（per-thread 独立会话与 threadId 重写）。
- 增强 Codex 支持（persona/skills 同步）和 setup 流程分流至 Claude Code/Codex。
- 安全加固 agent 路由附件转发逻辑。
- 引入 CLI 模式替代 Agent SDK 以使用交互式配额。

这些变更显著扩展了技能生态与平台适配性，提升稳定性与安全性。

社区热点
- PR #2475 和 #2474 聚焦 Codex 与 Claude Code 的 persona/skill 统一及 setup 流程分流，评论数最多，反映用户希望无缝切换 LLM 提供商的需求。
- PR #2472/#2471 解决 Slack per-thread 模式下会话塌陷问题，获较多关注，因影响多线程场景体验。
- Issue #2466 报告 wakeContainer 并发时重复 spawn 容器，虽为低优先级 bug，但揭示脚本与主机 sweep 并发控制缺陷，需警惕。

Bug 与稳定性
- Issue #2466：Duplicate container spawn race on wakeContainer when script and host sweep run concurrently（Low, hardening）。
  - 严重程度：低。
  - 状态：Open，尚无 fix PR。
  - 描述：运行 inject-gamma-brief.ts 时，若主机服务正在运行，会导致两个 nanoclaw-v2-gamma-expert-* 容器相继启动，独立处理相同 brief，造成资源浪费与行为不一致。

功能请求与路线图信号
- 用户强烈要求 Codex 与 Claude Code 的技能/人设对齐（PR #2475），暗示未来将支持多 LLM 适配器，降低切换成本。
- Slack per-thread 会话独立化（PR #2472）和 WhatsApp 恢复指导优化（PR #2469）表明平台适配器正强化容错与 UX 一致性。
- CLI 模式配额（PR #2470）和 setup 分流（PR #2474）指向更灵活的运行时配置与自动化部署能力。

用户反馈摘要
- 正面：技能本地化与复合栈（audit-website）获得认可，认为“survives upstream removal”且“runs entirely on tooling we self-host”。
- 痛点：Slack per-thread 模式下多 DM 被折叠成单一会话；WhatsApp 解密失败提示误导；容器竞态导致重复处理。
- 满意度：多数新技能实现简洁高效，文档与 secrets 管理得到好评。

待处理积压
- Issue #2466（Duplicate container spawn race）已存在一天，无响应，建议尽快安排 review 或分配修复。
- PR #2476（feat/restart no nanoclaw）创建于昨日，未合并，可能关联重启策略优化，需跟进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，我将为您生成 IronClaw 项目的2026-05-15日报。

---

### **IronClaw 项目动态日报 (2026-05-15)**

**分析员：AI 智能体与个人 AI 助手领域开源项目分析师**

#### **1. 今日速览**

IronClaw 项目在2026年05月15日保持高度活跃的开发节奏，Issues 和 PRs 均有50条更新。项目核心驱动力依然是“Reborn”架构的落地与集成，围绕 Agent Loop 框架、Hook 系统、以及多通道（Channels）迁移展开了密集的前端设计与实现工作。整体状态健康，贡献者积极参与，社区讨论聚焦于架构细节和长期路线图。

#### **2. 版本发布**

*   无新版本发布。

#### **3. 项目进展**

过去24小时合并了6个PR，主要推进了 Reborn 架构下的多个关键模块。

*   **#3550 [CLOSED]** `arch(ws-0):` 此 PR 关闭，意味着 Reborn Agent Loop 的基础设施层已建立。它创建了 `ironclaw_agent_loop` crate，并在 `ironclaw_turns` 中添加了后续策略、执行器和运行时分支所需的最小主机/请求接口。这是整个 Reborn Agent Loop 框架的地基。[查看 PR](https://github.com/nearai/ironclaw/pull/3550)
*   **#3282 [CLOSED]** `[Reborn] Migrate browser chat routes onto the ProductAdapter path` 此 PR 关闭，标志着将 WebChat v2 浏览器界面迁移到 Reborn 新的 ProductAdapter 路径的工作完成。这是向统一、现代化的产品接口迈出的关键一步。[查看 Issue](https://github.com/nearai/ironclaw/issues/3282) | [查看 PR](https://github.com/nearai/ironclaw/pull/3282)
*   **#3624 [CLOSED]** `[Reborn WebUI Beta] Define WebUI inbound DTO contract` 此 PR 关闭，完成了 WebUI Beta 版本的前端数据契约定义，为后续的接口开发奠定了基础。[查看 Issue](https://github.com/nearai/ironclaw/issues/3624) | [查看 PR](https://github.com/nearai/ironclaw/pull/3624)

这些进展表明，项目正在按计划稳步推进 Reborn 架构的各个核心模块。

#### **4. 社区热点**

今日讨论最活跃的 Issues 依然紧密围绕 Reborn 架构的实施。

*   **[#2987: Track Reborn architecture landing strategy and grouped PR plan](https://github.com/nearai/ironclaw/issues/2987)** (评论44) 是本周的绝对焦点。该 Issue 旨在跟踪 Reborn 架构的落地战略，避免一个巨大的堆叠 PR，而是通过分组 PR 的方式逐步交付。它列出了详细的着陆形状和待办事项，是所有相关工作的总蓝图，因此吸引了最多的关注和评论。
*   **[#3607: [Reborn WebUI Beta] Owner-module tracker and release path](https://github.com/nearai/ironclaw/issues/3607)** (评论0) 虽然评论不多，但它是协调 WebUI-first Reborn beta 路径的总览 Issue，定义了工作优先级和发布路径，是团队内部的重要决策点。
*   **[#3577: Track Reborn ports for v1 channels](https://github.com/nearai/ironclaw/issues/3577)** (评论1) 及其子项如 [#3581: Port Telegram channel to Reborn ProductAdapter](https://github.com/nearai/ironclaw/issues/3581) 等，反映了社区对将现有 v1 通道（如 Telegram, WeChat, Slack）平滑迁移到 Reborn 架构的迫切需求。这背后的诉求是实现统一的通道管理，提升系统的可维护性和扩展性。

#### **5. Bug 与稳定性**

未发现新的、严重的 Bug 报告或崩溃问题。项目目前专注于架构演进和新功能开发，稳定性问题似乎得到了良好控制。

#### **6. 功能请求与路线图信号**

社区提出的新功能需求和路线图信号清晰指向 Reborn 架构的全面升级。

*   **Configuration-as-Code for IronClaw Reborn:** 在 Issue #3036 中，`ilblackdragon` 明确提出需要一个声明式的配置系统，允许操作员通过代码来定义 IronClaw 的租户蓝图和使用案例。这与 PR #3550 和一系列 Agent Loop 的架构工作相呼应，表明未来的系统将更加注重可配置性和自动化部署。
*   **First-Class Hook Support:** Issues #3523 和 #3524 提出为 Reborn 添加第一类钩子（hook）框架支持。结合近期一系列关于 Hook 的测试和设计文档 PR（如 #3633, #3634），这表明 Hook 系统将成为 Reborn 架构中一个核心的可插拔扩展机制，用于实现策略、安全检查和自定义逻辑。
*   **Runtime Presets and Policies:** Issue #3045 提出了创建可理解的运行时预设（runtime presets）的需求，以便操作员和用户可以选择预期的操作模式而无需手动调整底层权限和策略。这为 Reborn 提供了更友好的用户体验和更强的安全性。

#### **7. 用户反馈摘要**

从 Issues 的评论中可以提炼出以下真实用户痛点：

*   **v1 通道集成问题:** Issue #2902 报告了 Telegram 在 NEAR Foundation 实例上无法正常工作的问题。这反映了当前 v1 通道在实际生产环境中的兼容性和稳定性挑战，是迁移到 Reborn 的直接动因之一。
*   **配置复杂性:** Issue #3036 的用户明确指出，当前的配置方式（混合 `.env`, workspace docs, settings JSON 等）缺乏 Schema、Diff 能力和审计追踪，导致配置过程繁琐且容易出错。这凸显了对 Configuration-as-Code 解决方案的强烈需求。
*   **架构透明性与可预测性:** 多个 Issue（如 #3236, #3278）都在定义 Reborn 如何处理复杂的交互逻辑（如同线程跟进、任务协调），这背后是用户对系统行为透明度和可预测性的期望，希望了解底层是如何运作的。

#### **8. 待处理积压**

以下是一些长期未响应的重要 Issue，提醒维护者关注：

*   **[#2902: Telegram is not working for NEAR Foundation instance](https://github.com/nearai/ironclaw/issues/2902)** (创建于2026-04-23) 这是一个持续存在的、影响实际使用的 Bug。尽管有 Reborn 架构的宏大规划，但这个具体的生产环境问题需要被优先解决或至少得到一个明确的解释和修复计划，以避免用户流失。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026-05-15）**

---

### 1. **今日速览**
过去24小时，LobsterAI 呈现**高度活跃的开发节奏**：共合并27个 Pull Request，发布新版本 v2026.5.14，整体开发效率显著。无新 Issues 报告，表明当前版本稳定性良好。社区贡献集中在渲染优化、插件管理及 OpenClaw 集成增强等核心模块，技术债清理持续推进。项目健康度处于高位运行状态。

> GitHub 仓库链接：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

### 2. **版本发布**

#### 📦 **LobsterAI v2026.5.14** （2026-05-14）
本次发布为常规功能迭代与修复更新，无重大破坏性变更。主要更新如下：

- **OpenClaw 上下文压缩处理优化**（PR #1969）：提升长对话场景下的内存效率与响应速度。
- **插件管理系统升级**（PR #1963）：引入高级配置接口，支持更灵活的第三方插件加载与管理。
- **文件类工件预览增强**：新增本地 HTTP 服务器支持 HTML/Excel/PPTX 预览，解决外部资源加载失败及渲染异常问题（PR #1983, #1977）。
- **跨平台兼容性修复**：针对 macOS 插件 npm 安装路径缺失、Windows 中文系统下应用名乱码等问题进行修复（PR #1981, #1973）。
- **MCP 协议迁移至 OpenClaw 原生支持**（PR #1980）：移除自建 mcp-bridge，提升协议兼容性与维护性。

✅ **迁移建议**：用户无需主动操作；若使用自定义插件或 MCP 服务，请确保配置文件已更新至 `openclaw.json` 格式。

---

### 3. **项目进展**

今日共 **28 个 PR 被处理**，其中 **27 个合并，1 个待合并**，整体交付效率极高。关键进展包括：

| PR 编号 | 类型 | 贡献者 | 主要内容 |
|--------|------|--------|----------|
| #1984 | Release | fisherdaddy | 发布 v2026.5.13（含上下文压缩、插件管理、工件增强等） |
| #1977 / #1983 | Feature | liugang519 | 文件类工件（HTML/Excel/PPTX）本地 HTTP 预览服务上线 |
| #1980 | Refactor | btc69m979y-dotcom | 迁移至 OpenClaw 原生 MCP Client，简化架构 |
| #1982 / #1973 | Bug Fix | btc69m979y-dotcom | 修复 mid-turn artifact 误识别及 Windows 编码乱码 |
| #1981 | Bug Fix | btc69m979y-dotcom | 解决 macOS 下 npm 插件安装因 PATH 缺失导致的 ENOENT 错误 |

> ✅ **项目里程碑**：MCP 协议正式脱离自研桥接层，全面拥抱 OpenClaw 生态；插件持久化机制完成重构，避免升级丢失。

---

### 4. **社区热点**

尽管今日无活跃 Issue，但 **依赖项更新 PR #1765** 仍值得关注：

- **PR #1765**: `chore(deps): bump @headlessui/react from 1.7.19 to 2.2.10`
  - 由 Dependabot 自动发起，涉及 Headless UI 组件库大版本升级（跨越多个主版本）。
  - 虽未收到评论，但此类依赖升级通常伴随样式兼容性问题风险。
  - 建议团队在后续版本中加强前端回归测试覆盖。

> 🔗 链接：[PR #1765](https://github.com/netease-youdao/LobsterAI/pull/1765)

---

### 5. **Bug 与稳定性**

今日无新 Bug Report，但多个历史 PR 集中关闭，反映近期稳定性修复成效显著：

- **#852**: 窗口销毁后异步 IPC 调用导致崩溃 → ✅ 已修复（通过 sender 有效性校验）
- **#860**: JSON.parse 缺乏错误处理引发流中断 → ✅ 已修复（添加 try-catch 保护）
- **#1973**: Windows 中文环境下“打开方式”下拉菜单出现乱码 → ✅ 已修复（强制 PowerShell UTF-8 输出编码）

> 🛠️ **稳定性趋势**：近两周共处理 12+ 项崩溃与安全相关 Bug，主进程容错能力明显增强。

---

### 6. **功能请求与路线图信号**

结合近期 PR 可推断下一阶段重点方向：

- ✅ **MCP 生态整合加速**（PR #1980）
- ✅ **多格式会话导出支持**（PR #853：Markdown/JSON/JSONL）
- ⚠️ **安全环境扫描功能落地**（PR #842 已完成，等待测试验证）
- 🔜 **AI 工具调用标准化**（mid-turn artifact 检测优化暗示对 Agent 行为建模的重视）

> 💡 用户正期待更强大的协作 AI 工作流能力与开放插件生态。

---

### 7. **用户反馈摘要**

暂无直接用户 Issue 反馈，但从内部 PR 描述可见实际痛点：

- **macOS 用户**频繁遭遇 npm 插件安装失败（因 PATH 不完整），影响第三方技能扩展（PR #1981）。
- **中文 Windows 用户**反馈“打开工件”时应用名显示乱码（如 "Microsoft Word �j�"），严重影响体验（PR #1973）。
- 开发者关注 **artifact 路径解析准确性**，尤其工具输出中含空格路径易被截断（PR #1982）。

> 📌 维护团队对平台兼容性投入持续精力，尤其在非英语环境下的本地化问题。

---

### 8. **待处理积压**

- **长期 Stale PR #842（安全环境扫描）**：创建于 2026-03-25，最后更新于 2026-05-14（刚关闭），需跟进是否进入正式版本。
- **依赖项升级 PR #1765**：自 2026-04-20 提出，尚未合并，可能阻塞前端组件库更新。

> ⏳ 建议本周内完成 #1765 合并评估，并发布安全扫描功能说明文档。

--- 

*报告生成时间：2026-05-15 | 数据来源：GitHub API + LobsterAI 官方仓库*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报（2026-05-15）**

---

### 1. **今日速览**
Moltis 在 2026-05-15 表现出低活跃度，过去 24 小时内仅新增 2 个 Issue，无 Pull Request 或版本发布。项目整体处于稳定维护状态，暂无重大进展。社区反馈集中在证书生成逻辑与功能扩展需求，未出现紧急问题。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
过去 24 小时内无合并或关闭的 Pull Request，项目在功能开发或修复方面暂无实质性推进。

---

### 4. **社区热点**
今日最活跃议题为两个新提出的 Issue：
- **[#995] Integration of `portal-tunnel` as a trustless relay channel**  
  作者提出将 `portal-tunnel` 集成作为去中心化中继通道的需求，旨在提升通信安全性与去信任化能力。该请求反映用户对增强网络层安全架构的关注。  
  链接: https://github.com/moltis-org/moltis/issues/995

- **[#996] Generated TLS certificates only work for localhost, contrary to the docs**  
  用户报告生成的 TLS 证书仅适用于本地主机，与官方文档描述不符，可能影响生产环境部署体验。此问题虽暂无评论，但涉及核心安全功能，需优先验证。  
  链接: https://github.com/moltis-org/moltis/issues/996

两议题均无后续讨论，热度较低，但后者具潜在技术影响。

---

### 5. **Bug 与稳定性**
- **[#996]** 报告 TLS 证书生成范围受限问题，影响非本地部署场景，严重程度：中等。  
  当前状态：已提交 Issue，无对应 fix PR，需开发者确认是否为已知限制或文档错误。  
  链接: https://github.com/moltis-org/moltis/issues/996

该 Bug 若属实，可能误导用户在生产环境中误用自签名证书，存在安全风险。建议尽快核实并更新文档或提供配置选项。

---

### 6. **功能请求与路线图信号**
- **[#995]** 提议集成 `portal-tunnel` 实现无信任中继通道，体现用户对去中心化网络架构和隐私增强功能的持续关注。  
  尽管尚无相关 PR，但该需求与 Moltis 构建去中心化智能代理基础设施的定位高度契合，可能被纳入未来版本规划。  
  链接: https://github.com/moltis-org/moltis/issues/995

此请求可视为对项目长期路线图的积极信号，建议评估技术可行性与优先级。

---

### 7. **用户反馈摘要**
从今日 Issue 中提取以下关键反馈：
- **痛点**：TLS 证书生成行为与文档不一致，导致部署困惑，反映文档准确性与实际实现之间存在脱节。
- **使用场景**：用户尝试在生产环境中使用 Moltis 建立安全通信链路，期望开箱即用的证书机制支持远程访问。
- **满意度**：目前反馈较少，但用户对功能扩展（如去信任中继）表现出明确兴趣，说明核心架构具备良好延展性。

---

### 8. **待处理积压**
截至今日，未发现长期未响应的重要 Issue 或 PR。所有 Issue 均在创建当日完成首次标记，响应及时。建议持续监控 [#996] 的进展，防止其演变为长期悬而未决的技术债务。

--- 

*数据来源：GitHub API / moltis-org/moltis，统计时间：2026-05-15 00:00 UTC+8*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-05-15）**

---

### 1. **今日速览**

过去24小时，CoPaw 项目保持高度活跃，共处理 50 条 Issue 更新与 50 条 PR 动态，新增 v1.1.7 版本发布。社区在测试覆盖率提升、浏览器工具增强及多通道兼容性优化方面持续发力，整体开发节奏稳健。Bug 修复集中在 MiMo 模型集成、文件写入死循环和钉钉消息解析等高频场景。

---

### 2. **版本发布**

**v1.1.7 正式发布**  
本次更新聚焦于浏览器工具能力扩展，新增两项核心功能：
- **Browser Use — Batch Actions**：支持单次调用执行多个浏览器操作（导航、点击、输入、截图等），显著提升自动化流程效率（[#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139)）。
- **Browser Use — File Download**：允许通过点击页面元素触发文件下载，完善浏览器交互闭环。

> **迁移提示**：无破坏性变更，建议用户升级以启用新浏览器工具链。批量操作接口需配合新版 agent.json 配置使用。

---

### 3. **项目进展**

今日共合并/关闭 2 个 PR，重点推进以下方向：

| PR | 类型 | 贡献者 | 内容概要 | 链接 |
|----|------|--------|--------|------|
| #4389 | Fix | aqilaziz | 修复 `chats.json` 损坏导致 API 500 错误的问题，自动备份并恢复无效数据 | [#4389](https://github.com/agentscope-ai/QwenPaw/pull/4389) |
| #4388 | Fix | aqilaziz | 解决非控制台通道（如微信）最终回复丢失问题，规范化原始消息渲染 | [#4388](https://github.com/agentscope-ai/QwenPaw/pull/4388) |

此外，大量单元测试覆盖 PR 正在并行推进（如 #4393–#4407），系统性提升后端模块稳定性。

---

### 4. **社区热点**

- **Issue #4342**：本地模型与提供者模块测试覆盖率冲刺（Phase 5），获 11 条评论，反映开发者对质量保障的强烈诉求（[链接](https://github.com/agentscope-ai/QwenPaw/issues/4342)）。
- **PR #4407**：首次贡献者提交世界杯助手技能，展示社区对新技能生态的开放态度（[链接](https://github.com/agentscope-ai/QwenPaw/pull/4407)）。
- **Issue #2953**：长期存在的“启动后显示错误信息”问题仍在发酵，7 条评论表明用户体验一致性亟待解决（[链接](https://github.com/agentscope-ai/QwenPaw/issues/2953)）。

> **洞察**：用户对**测试完备性**与**生产环境鲁棒性**关注度极高，尤其在多 Agent 协作与跨平台部署场景下。

---

### 5. **Bug 与稳定性**

按严重程度排序的关键问题：

| Issue | 描述 | 状态 | 相关 PR | 链接 |
|------|------|------|--------|------|
| #4314 | MiMo 思考模式 + 工具调用在多轮对话中返回 400（缺失 reasoning_content） | Open | 待修复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4314) |
| #4299 | write_file() 长文本参数缺失导致死循环报错 | Open | 无 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4299) |
| #3957 | Agent 收到跨渠道消息后 workspace 身份错乱 | Open | 无 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3957) |
| #3854 | ChromaDB Rust 绑定引发 SIGSEGV 进程崩溃 | Open | 无 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3854) |

> **已缓解**：#4018（embedding 配置重置）、#4360（Ubuntu 26.04 CDP 超时）已关闭，表明近期对配置持久化与浏览器兼容性的改进见效。

---

### 6. **功能请求与路线图信号**

高频需求预示未来版本方向：

- **Auto-Memory 排除心跳/定时任务**（#3944）：用户希望系统自动对话不被纳入记忆，避免噪声干扰学习效果。
- **可配置 base path**（#1853）：反向代理环境下前端路由一致性需求强烈。
- **会话生命周期钩子**（#4249）：支持自定义初始化逻辑，利于个性化 Agent 部署。
- **All Chats 分页**（#3570）：大规模聊天历史下的性能瓶颈亟待解决。

结合当前 PR 可见，**测试基建强化**与**多通道体验优化**将成为下一阶段重点。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - 长文本输出时 `write_file()` 参数传递异常（#4299）；
  - WeChat 消息被错误路由至控制台（#3173）；
  - 钉钉引用消息无法读取（#3109）。
- **满意点**：
  - 浏览器批量操作大幅提升自动化效率；
  - 社区响应迅速，多数 Bug 在 24h 内获得初步反馈。
- **典型场景**：
  - 企业用户依赖钉钉/QQ 集成进行客服自动化；
  - 开发者频繁使用 `execute_shell_command` 与 `memory_search` 构建复杂工作流。

---

### 8. **待处理积压**

- **#2953**（自 04-05 起）：启动信息错误，影响新手上手，超 40 天未彻底解决；
- **#3854**（自 04-27 起）：ChromaDB 段错误导致进程级崩溃，需紧急加固或替换方案；
- **#3173**（自 04-09 起）：WeChat 路由错乱持续存在，涉及核心消息分发逻辑。

> **建议**：优先处理上述高影响、长周期 Issue，尤其关注进程崩溃类安全问题。

--- 

*数据来源：GitHub @agentscope-ai/QwenPaw，统计时间：2026-05-15 00:00–24:00 UTC*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报（2026-05-15）**

---

### 1. **今日速览**

过去24小时内，ZeroClaw 项目活跃度较高，共处理了 **23 条 Issues** 和 **50 条 PRs**，其中 7 个 PR 已合并或关闭，表明开发团队持续高效推进修复与功能迭代。项目整体处于稳定演进阶段，重点集中在 cron 调度、Telegram 集成、技能管理以及安全依赖更新等核心模块。无新版本发布，但多个高风险 Bug 已被标记为 `accepted` 或 `in-progress`，显示社区对关键问题的响应迅速。

---

### 2. **版本发布**

**无新版本发布**。项目目前仍处于 v0.7.x 迭代周期中，未检测到重大版本升级活动。

---

### 3. **项目进展**

#### 已合并/关闭的关键 PR：
- **#6594**: `feat(skills): background review fork (Hermes-style) + skill_manage tool`  
  ✅ 合并完成 — 实现了 Hermes 风格的后台技能评审机制，并引入 `skill_manage` 工具，填补了 #4619 的功能缺口，显著提升技能热加载与自动化改进能力。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6594)

- **#6286**: `fix(channels/telegram): apply mention_only gate to photo, document, and voice updates`  
  ✅ 合并完成 — 修复了 Telegram 频道下 `mention_only=true` 配置无法屏蔽媒体消息的问题，提升隐私控制精度。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/6286)

- **#5540**: `Harden memory recall and session resume`  
  ✅ 合并完成 — 强化了记忆回溯与会话恢复的健壮性，减少因历史数据异常导致的崩溃风险。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/5540)

这些合并表明项目在**技能系统稳定性**、**跨媒介交互一致性** 和 **内存管理可靠性** 方面取得实质性进展。

---

### 4. **社区热点**

最活跃的 Issue 包括：

- **#6647**: Cron job 输出未路由至配置的 Telegram 频道（S1 严重性）  
  用户报告 cron 任务结果仅出现在 Web 面板，而非预期的通知渠道，影响工作流闭环。已有 4 条评论，反映该问题在生产环境中造成流程阻塞。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)

- **#6659**: 缺乏将通知推送到网关会话的 API（P1，需维护者审核）  
  插件开发者提出对外部进程进行实时告警推送的需求，凸显 ZeroClaw 生态扩展性的开放接口缺口。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6659)

- **#6646**: 通过 Telegram 调用 `web_search_tool` / `web_fetch` 失效（v0.7.5）  
  用户在使用 LM Studio 兼容模型时，发现工具链在 Telegram 通道中断连，可能涉及 Provider 适配层缺陷。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)

这些问题集中体现了用户对 **端到端自动化流程完整性** 和 **多平台无缝集成** 的高期待。

---

### 5. **Bug 与稳定性**

| 严重等级 | Issue 编号 | 问题描述 | 状态 |
|--------|-----------|--------|------|
| S1     | #6647     | Cron 输出未送达配置渠道（Telegram） | accepted |
| S1     | #6269     | Context compressor 丢失 reasoning_content | in-progress |
| S2     | #6105     | Agent 执行 cron 时无上下文感知 | blocked |
| S2     | #6654     | Cron 只读查询误用写路径 | in-progress |
| S2     | #6651     | Matrix 频道 reload 泄露内存 | blocked |

已有对应 fix 的 PR：
- #6656 针对 #6654（优化 cron 事务写入）
- #6662 修复 lettre 依赖漏洞（RUSTSEC-2026-0141）

其余问题仍需进一步投入资源解决。

---

### 6. **功能请求与路线图信号**

用户明确提出以下增强需求：
- **OTel 追踪精细化**：#6641、#6642 建议将 LLM/tool/call spans 嵌套于单一流转 trace 下，支持 gen_ai 标准属性注入，预示可观测性将成为 v0.8 重点方向。
- **Telegram 流式进度反馈**：#6663 提议在 `stream_mode=partial` 下更新草稿消息以展示工具调用进度，提升用户体验连续性。
- **跨平台安装支持**：#6658 要求安装脚本支持 musl aarch64 Linux，反映边缘设备部署需求上升。

上述需求均带有 `status:accepted` 标签，极有可能纳入后续版本规划。

---

### 7. **用户反馈摘要**

- **痛点**：
  - Cron 任务结果“静默失败”，缺乏日志或通知，导致运维盲区（#6647）。
  - 技能管理工具仅识别 `SKILL.toml` 而忽略 `manifest.toml`，造成现有技能无法被正确管理（#6645）。
  - Matrix 频道频繁 reload 引发内存泄漏，影响长期运行稳定性（#6651）。

- **满意度亮点**：
  - 用户对 Hermes 风格后台技能评审机制表示认可，认为其提升了自主进化能力（PR #6594）。
  - 多附件 Telegram 消息合并为单次请求的处理方式获得正面评价（PR #6088）。

---

### 8. **待处理积压**

以下高优先级 Issue 长期未获响应，建议关注：

- **#6269**: Context compressor 丢失 reasoning_content（创建于 2026-05-02，仍 `in-progress`）  
  影响 DeepSeek 等推理密集型模型的历史一致性，需尽快闭环。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)

- **#6105**: Agent 无 cron 上下文（创建于 2026-04-25，`blocked`）  
  阻碍交互式提醒类 Agent 设计，涉及核心运行时逻辑重构。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)

- **#5122**: `allowed_private_hosts` 域名解析白名单失效（创建于 2026-03-29，`no-stale`）  
  安全策略存在误判，需验证 DNS 解析逻辑边界条件。
  [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5122)

---

**总结**：今日 ZeroClaw 展现出强劲的技术响应力，尤其在技能管理与依赖安全方面取得突破；同时暴露了 cron 路由、跨渠道一致性等关键场景的深层挑战。建议优先处理 S1 Bug 并加速 OTel 可观测性建设，以巩固其在复杂生产环境下的竞争力。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*