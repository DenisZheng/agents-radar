# OpenClaw 生态日报 2026-05-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-03 00:31 UTC

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

**OpenClaw 项目动态日报 - 2026-05-03**

---

### 1. 今日速览

过去24小时，OpenClaw 社区活跃度显著提升，Issues 与 PR 均更新500条，表明开发节奏加快。新版本 v2026.5.2 发布，重点优化插件管理与 Gateway 性能。整体项目处于高活跃开发期，用户反馈集中在性能回归与稳定性问题上。

---

### 2. 版本发布

#### **v2026.5.2**（发布于 2026-05-02）
**核心更新：**
- **外部插件管理增强**：支持诊断、安装/更新记录、依赖报告及元数据追踪；首次迁移至 npm-first 流程，并引入 beta 通道回退机制。
- **Gateway 与 Agent 热路径优化**：减少 CPU 占用，提升响应效率。
- 修复若干关键路径上的阻塞问题。

> ✅ **无破坏性变更**，建议所有用户升级以获取稳定性提升。

---

### 3. 项目进展

#### 重要合并 PR（示例）：
- **#76326**: 修复 `gpt-5.4-mini` 在 `/v1/chat/completions` 中因误传 `reasoning_effort` 导致的 400 错误（影响 Telegram 机器人回复）。
- **#62164**: 实现 `sessions.list` 结果缓存，显著降低 Gateway 负载，缓解事件循环压力。
- **#75078**: Feishu 插件修复音频文件因重复 `message_id` 被丢弃的问题。

#### 趋势分析：
开发者正集中解决 **v2026.4.29 版本引入的性能退化** 和 **多通道消息路由一致性** 问题。自动化工具 ClawSweeper 已协助处理多个低风险修复。

---

### 4. 社区热点

#### 讨论最活跃的 Issue：
| 排名 | Issue | 主题 | 评论数 | 链接 |
|------|-------|------|--------|------|
| 1 | #75999 | v4.29 导致 dispatch prep 阻塞事件循环达 73 秒 | 12 | [查看](https://github.com/openclaw/openclaw/issues/75999) |
| 2 | #75707 | Gateway 空闲时 CPU 满载（100–130%），疑似内存泄漏或调度异常 | 10 | [查看](https://github.com/openclaw/openclaw/issues/75707) |
| 3 | #12602 | Slack Block Kit 支持请求 | 13 | [查看](https://github.com/openclaw/openclaw/issues/12602) |

**诉求分析**：
- **性能敏感型用户**（如自建服务器、边缘设备）强烈抗议 v4.29 的 CPU 飙升问题，已有用户降级至旧版。
- **Slack 集成需求增长**，企业用户对富交互消息体支持呼声高，预计将进入路线图。

---

### 5. Bug 与稳定性

#### 严重程度排序：
1. **#75999**（高危）：v4.29 引入的同步 CPU 密集型任务阻塞事件循环，导致首次响应延迟达 5 分钟。
   - ✅ 已有 PR #76107 定位瓶颈（auth 6.2s + fixed overhead 16s）。
2. **#76174**（中高危）：`openai/*` 嵌入调用 hang 超时，直连 OpenAI API 正常。
   - 🔧 PR #76316/#76326 正在修复模型参数传递问题。
3. **#73424**（中危）：图像预处理工具报错“Failed to optimize image”，即使 VLM 模型可用。
4. **#39038**（中危）：Windows 11 24H2 上节点程序启动后卡在 PATH 信息，无法连接 Gateway。

> ⚠️ 共 8+ 个相关 Bug 报告，多数指向 v2026.4.29 后的性能/兼容性退化。

---

### 6. 功能请求与路线图信号

#### 高频功能需求：
- **Slack Block Kit 支持**（#12602）：评论 13 条，需求明确，技术可行性高。
- **Session 快照/保存/加载**（#13700）：开发者希望支持上下文检查点，利于 A/B 测试。
- **MathJax/LaTeX 渲染**（#42840）：教育/科研场景刚需，已有 4 人点赞。
- **Web Search 原生透传**（#17925）：对 ZAI/Gemini 提供商的支持请求，体现多云战略倾向。

**结论**：Slack 与数学公式支持最可能纳入 v2026.5.3；会话快照需评估存储成本。

---

### 7. 用户反馈摘要

- **正面反馈**：
  - 用户肯定 v2026.5.2 在插件管理上的改进，尤其赞赏 npm-first 迁移的平滑过渡。
  - Gateway 缓存优化（PR #62164）获运维团队认可，降低生产环境负载。
  
- **负面反馈**：
  - 多名用户抱怨 **v2026.4.29 升级后 WebUI 变慢甚至无响应**，部分被迫回滚。
  - WhatsApp/Telegram 在 WSL2 环境下不稳定（#73602, #41165），暴露跨平台兼容短板。
  - 缺少细粒度备份排除规则（#40786），导致含 node_modules 的大体积备份。

---

### 8. 待处理积压

| Issue/PR | 状态 | 描述 | 建议行动 |
|--------|------|------|----------|
| #13583 | OPEN | 强制预响应钩子（硬策略拦截） | 高优先级：安全/金融场景刚需，需架构评审 |
| #13616 | OPEN | 配置/会话历史备份工具 | 中优先级：可结合现有 backup CLI 扩展 |
| #29736 | OPEN | exec-approvals.json 忽略 state root 路径 | 维护者需确认是否为配置解析 bug |

> 💡 提醒维护团队关注长期未解决的配置一致性问题（如路径隔离、状态根遵循）。

--- 

**数据来源**：GitHub API · 时间范围：2026-05-02 00:00 ~ 2026-05-03 23:59 UTC  
**分析师备注**：项目健康度良好，但需警惕 v2026.4.29 系列版本引发的性能信任危机。建议发布 hotfix 或澄清 changelog。

---

## 横向生态对比

好的，作为一位资深技术分析师，我将基于您提供的数据生成一份横向对比分析报告。

---

## 个人 AI 智能体开源生态横向对比分析报告 (2026-05-03)

### 1. **生态全景**

个人 AI 助手与自主智能体开源生态在2026年5月展现出强劲的生命力与高度活跃的开发态势。核心项目如 OpenClaw 和 ZeroClaw 持续进行架构演进和功能增强，围绕多通道通信、跨平台部署和复杂任务处理展开竞争。与此同时，新兴项目如 IronClaw、Moltis 和 CoPaw 正通过引入创新架构（如 Reborn、沙箱隔离）和聚焦特定场景（如 DeFi、IoT）来寻求差异化定位。整体生态呈现出“百家争鸣”的格局，开发者与用户在稳定性、功能丰富度和易用性之间不断权衡，共同推动着该领域向前发展。

### 2. **各项目活跃度对比**

| 项目名称 | Issues 数 | PR 数 | Release 情况 | 健康度评估 |
| :------- | :-------- | :---- | :----------- | :--------- |
| **OpenClaw** | 500+ | 500+ | v2026.5.2 发布，v2026.4.29 引发性能问题 | **高活跃，需关注稳定性** |
| NanoBot | 4 | 20 | 无新版本 | **稳健迭代，解决生产痛点** |
| Hermes Agent | 50 | 50 | 无新版本 | **高度活跃，基础设施加固** |
| PicoClaw | 7 | 8 | v0.2.8-nightly 发布 | **功能扩展，API兼容性问题待解** |
| NanoClaw | 13 | 15 | 无新版本 | **数据库稳定性与跨平台支持关键** |
| NullClaw | 5 | 20 | 无新版本 | **高效推进，REST API与轻量化优化** |
| IronClaw | 16 | 47 | 无新版本 | **Reborn架构重构，功能密集落地** |
| LobsterAI | 0 | 4 | 无新版本 | **平稳演进，配置同步与渠道集成** |
| TinyClaw | 0 | 0 | 无新版本 | **暂无动态** |
| Moltis | 4 | 3 | 无新版本 | **国际化与云原生部署推进** |
| CoPaw | 14 | 6 | 无新版本 | **工具链完善，内存管理与多端同步** |
| ZeptoClaw | 0 | 0 | 无新版本 | **暂无动态** |
| ZeroClaw | 50 | 36 | 处于 v0.7.x 维护期，v0.8.0 集成阶段 | **高速迭代，配置升级与技能重构** |

### 3. **OpenClaw 在生态中的定位**

**优势：**
*   **社区规模与活跃度领先：** 今日 Issue 和 PR 数量均超过其他项目，表明其拥有最庞大的开发者和用户社区。
*   **功能广度与深度兼具：** 作为“核心参照”，其在插件管理、Gateway/Agent 性能优化、多通道支持（Telegram, WhatsApp, Feishu等）方面提供了全面的解决方案。
*   **企业级特性完备：** 支持会话缓存、外部插件诊断、依赖报告等，适合构建复杂的、可运维的企业级智能体应用。

**技术路线差异：**
*   **npm-first 流程与插件生态：** 迁移至 npm-first 并引入 beta 通道回退机制，显示出其对现代前端工程化和灵活插件管理的重视，这与其他一些项目可能采用的纯内部包管理机制形成对比。
*   **Gateway-Agent 分离架构：** 对 Gateway 和 Agent 的热路径优化，体现了其核心运行时的高性能设计，专注于减少 CPU 占用和提升响应效率。

**社区规模对比：**
*   **OpenClaw** 无疑是当前生态中社区规模最大、活跃度最高的项目，其 Issue 和 PR 数量远超其他项目，是事实上的行业标杆和社区中心。

### 4. **共同关注的技术方向**

*   **推理内容 (`reasoning_content`) 的兼容性与管理：**
    *   **涉及项目：** OpenClaw (#76326)、IronClaw (#3214/#3215)、ZeroClaw (#6269/#6285)、CoPaw (#4006)
    *   **具体诉求：** 多个项目都报告了针对 DeepSeek/V4、Gemini 3.x 等模型的 `reasoning_content` 在处理过程中丢失、被忽略或传递错误的问题。这表明随着更多大模型提供商引入“思考模式”，如何正确解析、存储和透传这部分内容成为了跨项目的通用挑战，亟需统一的标准和规范。

*   **多平台/多渠道通信的稳定性与一致性：**
    *   **涉及项目：** OpenClaw (#75078, #12602)、NanoBot (#3597, #3595)、Hermes Agent (#2991)、PicoClaw (#2421, #2546)、NanoClaw (#2200, #2199)、CoPaw (#4000)
    *   **具体诉求：** 用户对 Telegram、WhatsApp、Slack、Discord、Matrix 等平台的消息路由、身份解析（LID→phone JID）、连接初始化、超时控制以及在非主流系统（如 OpenRC, WSL2）下的表现提出了广泛关切。这反映了构建一个稳定、可靠且支持丰富通信渠道的智能体平台是当前的核心需求。

*   **跨平台部署与边缘设备支持：**
    *   **涉及项目：** OpenClaw (v4.29 性能退化影响自建服务器)、NullClaw (低资源设备痛点)、IronClaw (ARM64 Docker 镜像支持)、PicoClaw (xAI 兼容性)、NanoClaw (OpenRC 支持)、Moltis (多后端沙箱支持)
    *   **具体诉求：** 项目正致力于解决在不同操作系统（Windows, Linux, macOS）、不同硬件架构（ARM64）以及轻量级/边缘设备上的部署难题，包括 Docker 镜像构建、服务启动脚本优化、资源占用管理等，以扩大其适用边界。

*   **API 提供商的兼容性与健壮性：**
    *   **涉及项目：** NanoBot (#3585 小米MiMo推理控制)、Hermes Agent (#15895 Gemini 429错误)、PicoClaw (#2668 Gemini HTTP 400)、ZeroClaw (#6095 Bedrock温度参数弃用警告)
    *   **具体诉求：** 面对 OpenAI、DeepSeek、Gemini、Bedrock、小米 MiMo 等不同 API 的行为差异、配额限制、参数弃用等问题，项目需要持续进行适配和错误处理，以提升整体服务的鲁棒性和用户体验。

### 5. **差异化定位分析**

| 项目名称 | 功能侧重 | 目标用户 | 技术架构 |
| :------- | :------- | :------- | :------- |
| **OpenClaw** | 功能全面、企业级、高性能 | 大型团队、需要复杂插件和网关管理的用户 | Gateway-Agent 分离、npm-first 插件生态 |
| **NanoBot** | 稳定性、CLI友好、生产就绪 | 追求简洁、稳定、命令行操作的终端用户 | 基础代理架构，注重异常处理和内存管理 |
| **Hermes Agent** | 多模态交互、A2A协议、可扩展 | 希望构建复杂、可观测智能体的开发者 | 强调事件溯源、网关可靠性、TypeScript 类型安全 |
| **PicoClaw** | 轻量、快速迭代、特定场景 | 嵌入式、边缘计算或对特定AI提供商有强需求的用户 | 专注于特定硬件和通信渠道的快速集成 |
| **NanoClaw** | 多实例、数据库稳定、跨平台 | 需要在多种Linux发行版上部署多代理的用户 | 多实例管理、SQLite数据库操作优化 |
| **NullClaw** | 极简、RESTful、轻量化 | 追求极致轻量、易于远程管理的用户 | 内置 Zig 编译器、SysVinit/OpenRC 支持、HTTP/1.1 keep-alive |
| **IronClaw** | 下一代架构、DeFi自动化、音频管道 | 探索前沿应用场景、需要生产级部署的企业 | Reborn 架构重构、ARM64支持、NEAR Intents集成 |
| **LobsterAI** | 配置同步、渠道过滤、会话管理 | 需要精细控制通信渠道和内部代理可见性的用户 | 继承OpenClaw特性，侧重配置管理和渠道UI优化 |
| **TinyClaw** | - | - | - |
| **Moltis** | 沙箱隔离、分布式编排、信任机制 | 企业级Agent编排、多云部署场景 | 多后端沙箱(Vercel/Daytona/Firecracker)、国际化支持 |
| **CoPaw** | 技能模块、长期记忆、多端同步 | 需要丰富技能库和跨设备协同体验的用户 | 技能模块化、MemoryHook机制、CLI测试命令 |
| **ZeptoClaw** | - | - | - |
| **ZeroClaw** | 配置升级、技能生态、WASM支持 | 希望体验最新配置系统和技能生态的用户 | v3 schema、官方技能本地仓库、WASM插件支持 |

### 6. **社区热度与成熟度**

*   **快速迭代阶段：** OpenClaw, Hermes Agent, IronClaw, ZeroClaw, NullClaw
    *   这些项目日活跃度极高，Issue 和 PR 数量庞大，正在快速推进新功能、修复大量 Bug，并处于重大版本升级或架构重构的关键时期，代表了生态中最前沿的探索。
*   **质量巩固与生产优化阶段：** NanoBot, NanoClaw, Moltis
    *   这些项目虽然活跃度相对较低，但重点集中在解决实际生产环境中的痛点，如超时控制、路径解析、数据库稳定性、沙箱兼容性等，体现出对稳定性和可用性的高度重视。
*   **平稳演进阶段：** LobsterAI
    *   无明显的新增 Issue 和合并 PR，开发节奏平稳，主要集中在已有功能的维护和渐进式改进，社区互动较少，处于相对成熟的维护期。
*   **暂无动态：** TinyClaw, ZeptoClaw
    *   这两个项目在过去24小时内没有活动记录，可能处于开发停滞或维护状态。

### 7. **值得关注的趋势信号**

*   **推理内容的标准化与生态共建：** 多个项目同时面临 `reasoning_content` 的处理难题，预示着未来可能需要一个更广泛的社区共识或标准来解决这一跨项目兼容性问题，这对于整个 AI 智能体生态的互操作性至关重要。
*   **从单体到分布式的演进：** IronClaw 的 Reborn 架构、Moltis 的多后端沙箱支持、CoPaw 的 MCP client TaskGroup 问题，都反映出开发者正积极探索如何将 AI 智能体从单体应用向更复杂的分布式、可编排的系统演进。
*   **企业级身份与权限管理的迫切需求：** ZeroClaw 的 OAuth 扩展、Moltis 的 OIDC 注册流程优化、PicoClaw 的 OAuth 2.1 + PKCE 请求，以及 OpenClaw 的 Slack Block Kit 支持，共同指向了企业级应用中对于安全、灵活的认证和授权机制的强烈需求。
*   **轻量化与边缘计算的持续关注：** NullClaw 的极简设计和低资源设备痛点、PicoClaw 的特定场景优化、IronClaw 的 ARM64 支持，都表明轻量化和边缘计算是 AI 智能体落地的重要方向，尤其是在资源受限的环境中。
*   **对生产环境稳定性和可观测性的极致追求：** 几乎所有活跃项目都在报告各种生产环境下的 Bug，如超时、崩溃、日志缺失、内存泄漏等，并积极修复。同时，IronClaw 的 `ironclaw insights` 和 Hermes Agent 的事件投影服务，则体现了对系统可观测性和调试效率的重视，这是项目走向生产就绪的关键标志。

**对 AI 智能体开发者的参考价值：**
*   **选择技术栈时，应综合考虑功能需求、社区活力及自身团队能力。** OpenClaw 和 Hermes Agent 适合构建复杂、高性能的应用；NullClaw 和 NanoBot 更适合追求简洁、稳定和快速上手。
*   **重点关注推理内容的处理方案，** 避免陷入特定厂商的兼容性问题。
*   **投入精力解决多平台通信的稳定性，** 这是提升用户体验的核心。
*   **考虑采用或借鉴分布式、沙箱化架构，** 为未来的复杂应用场景做准备。
*   **重视生产环境的监控、日志和错误处理机制，** 确保服务的可靠性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报 - 2026年5月3日**

---

### 1. 今日速览

NanoBot 在过去24小时内保持活跃的开发节奏，共处理 **20条 PR**（8个已合并/关闭）和 **4个 Issues**（3个新开/活跃），整体贡献者参与度较高。项目在用户体验、安全性和多平台支持方面持续推进，无新版本发布。社区反馈聚焦于执行超时控制、推理模式配置及小米设备支持等核心功能改进。

---

### 2. 版本发布

**无新版本发布**

---

### 3. 项目进展

#### 重要合并 PR：
- **[#3594](https://github.com/HKUDS/nanobot/pull/3594)**: `fix: allow_patterns take priority over deny_patterns in ExecTool`  
  修复 `ExecTool` 中权限控制逻辑错误：此前 `deny_patterns` 优先于 `allow_patterns`，导致合法命令被意外拦截。此次修复确保白名单机制真正生效，提升安全性与可用性。
  
- **[#3414](https://github.com/HKUDS/nanobot/pull/3414)**: `fix(agent): cap recent history section in system prompt`  
  限制系统提示词中“Recent History”部分长度至32KB，防止历史消息累积导致上下文溢出，优化大会话下的性能表现。

- **[#3247](https://github.com/HKUDS/nanobot/pull/3247)**: `fix(memory): fall back to raw_archive on LLM error response`  
  当LLM调用失败（如返回529过载错误）时，回退至原始存档数据，避免会话中断，增强鲁棒性。

这些合并表明项目在**稳定性、内存管理与异常处理**方面持续加固基础架构。

---

### 4. 社区热点

- **Issue #3597**: [NanoBot confused and couldn't access workspace root](https://github.com/HKUDS/nanobot/issues/3597)  
  用户报告NanoBot无法正确访问其工作区根目录，导致文件保存失败。此问题反映出现有路径解析机制的局限性，可能影响自动化任务可靠性。暂无PR对应，需进一步调查。

- **PR #3589**: [feat(discord): interactive components (buttons, select menus, modals)](https://github.com/HKUDS/nanobot/pull/3589)  
  引入Discord富交互组件支持，扩展消息工具链能力。虽未获点赞或评论，但属平台集成关键一步，预计将提升用户交互体验。

- **Issue #3595 / PR #3596**: 关于 `exec` 工具超时硬编码限制的争议与改进  
  用户强烈呼吁解除600秒超时上限以支持长时间任务（如视频下载）。PR #3596提出分层超时模型，兼顾安全与灵活性，获得积极关注，体现社区对生产级可用性的重视。

---

### 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|--------|--------|------|-----|
| High   | [#3597](https://github.com/HKUDS/nanobot/issues/3597) | NanoBot无法访问workspace根目录，任务执行失败 | 开放，无修复PR |
| Medium | [#3585](https://github.com/HKUDS/nanobot/issues/3585) | `reasoning_effort: null` 未能禁用小米MiMo的推理模式 | **已修复** via [#3587](https://github.com/HKUDS/nanobot/pull/3587) |
| Low    | — | 其他问题均已被有效处理或属于边缘场景 |

> ✅ **关键结论**：小米设备上的推理控制缺陷已解决，但工作区路径解析问题仍存，建议纳入近期优先级。

---

### 6. 功能请求与路线图信号

- **支持小米设备模型**（[#3518](https://github.com/HKUDS/nanobot/issues/3518)）：虽已关闭，但关联PR #3587解决了其衍生问题，表明小米生态兼容性正在加强。
- **解除exec超时限制**（[#3595](https://github.com/HKUDS/nanobot/issues/3595) + [#3596](https://github.com/HKUDS/nanobot/pull/3596)）：明确进入开发流程，预计将成为v0.x后续版本的重点特性。
- **HookCenter插件系统**（[#3564](https://github.com/HKUDS/nanobot/pull/3564)）：构建类型化事件钩子系统，支持外部开发者分发插件，标志项目向可扩展架构演进。

这些动向显示NanoBot正从“通用AI代理”向“可定制、高可控、企业级部署”方向深化。

---

### 7. 用户反馈摘要

- **正面反馈**：  
  - 用户认可CLI改进（如Ctrl+C行为优化、子命令帮助提示），认为更符合终端习惯。
  - WhatsApp媒体收发支持（[#2010](https://github.com/HKUDS/nanobot/pull/2010)）获广泛欢迎，尤其对自动化内容创作场景有价值。

- **负面反馈**：  
  - 长时间任务因exec超时中断引发不满（“cut off time-lapse tasks”）。
  - 工作区权限混乱导致文件操作失败，影响可信度（“not enough reliable for my work”）。
  - 小米设备上推理控制不透明，违背文档承诺（“no way to explicitly disable reasoning”）。

整体情绪偏向建设性批评，反映用户对**稳定性、一致性与文档对齐度**的高度期待。

---

### 8. 待处理积压

- **Issue #3597**: Workspace根目录访问失败  
  创建时间：2026-05-02，无响应记录。涉及核心文件操作能力，可能影响多个下游用例，建议维护者优先介入。

- **长期PR #3564**: HookCenter系统  
  虽已提交近一周，尚未合并，可能处于审查阶段。作为未来插件生态基石，需跟踪进度以避免阻塞社区扩展意愿。

---

**总结**：  
NanoBot 今日展现稳健迭代态势，重点解决生产环境痛点（超时、路径、推理控制），同时布局长期扩展性（HookCenter、多模态支持）。建议关注工作区路径解析问题的快速闭环，并规划exec超时机制的正式发布节奏。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026-05-03）**

---

### 1. **今日速览**  
Hermes Agent 在 2026-05-03 保持高度活跃，过去 24 小时内处理了 50 条 Issues 和 50 条 PRs，显示出稳定的开发节奏。社区对新功能（如 A2A 协议支持、工具缓存）和稳定性问题（如内存崩溃、Docker 构建慢）的关注度持续上升。尽管无新版本发布，但多个关键 bug fix 已提交并待合并，项目整体健康度良好。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
今日未有关键功能合并或关闭的 PR，但多个重要修复正在推进中：
- **#19033** 修复网关重启后会话上下文丢失问题，避免用户对话中断（[链接](https://github.com/NousResearch/hermes-agent/pull/19033)）。
- **#2751, #2753, #2756** 批量修复工具模块中的异常处理和子进程泄漏问题，提升系统鲁棒性。
- **#19025** 解决 TypeScript 6.0.3 升级导致的构建失败，保障 CI/CD 流水线稳定运行。

这些进展表明项目正持续加固底层架构，尤其在网关可靠性和多进程资源管理方面取得实质性改进。

---

### 4. **社区热点**  
最活跃的 Issue 集中在 **A2A 协议集成**（#514），用户强烈呼吁支持 Agent-to-Agent 通信以扩展协作能力；其次是 **Gemini CLI 429 错误**（#15895），反映生产环境配额识别与实际 API 限制之间的不一致问题。此外，**WhatsApp LID 解析失败**（#2991）引发对跨平台身份验证一致性的广泛讨论。

热门 PR 包括 **#19032**（暴露图像路径供模型使用）和 **#19033**（恢复会话上下文），均获积极反馈，显示用户对无缝多模态交互和持久化体验的高期望。

> 🔗 [Issue #514: A2A Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514)  
> 🔗 [PR #19033: Resume Sessions After Crash](https://github.com/NousResearch/hermes-agent/pull/19033)

---

### 5. **Bug 与稳定性**  
今日报告的主要问题如下（按严重程度排序）：

| Issue | 类型 | 描述 | 状态 |
|-------|------|------|------|
| #15895 | P2 | Gemini CLI 返回 429 错误，尽管 gquota 显示充足 | 开放，无 Fix PR |
| #18875 | P3 | Hindsight 内存插件未安装时导致网关 Docker 无限重启 | 开放，存在重复 Issue #18876 |
| #19003 | P2 | 上下文压缩器忽略 reasoning field，影响思考模型摘要 | 开放，无 Fix PR |
| #3000 | P2 | macOS 下 install.sh 因 Python 路径含空格静默中止 | 开放，存在潜在风险 |

已有多个相关修复 PR 被提出（如 #2754、#2755、#2756），预计将在近期合并，显著改善系统稳定性。

---

### 6. **功能请求与路线图信号**  
- **A2A 协议支持**（#514）：作为开源标准，该需求获得 3 个点赞，且作者为外部贡献者，预示可能成为未来跨 agent 生态的关键入口。
- **工具结果缓存**（#2918）：针对 web_search 等只读工具的重复调用优化，已有原型讨论，结合近期性能议题热度，有望纳入 v0.12 版本。
- **预工具调用钩子（pre_tool_call rewrite）**（#18988）：引入类似 Claude Code 的权限控制机制，增强插件扩展性，已有初步实现提案。

这些请求均体现用户对“智能体自主性”和“执行效率”的双重追求，符合项目“Agent That Grows With You”的核心愿景。

---

### 7. **用户反馈摘要**  
- **痛点集中点**：  
  - 多平台（Telegram、WhatsApp）的身份解析不一致导致授权失败（#2991）。  
  - Docker 镜像构建耗时过长（#18966），尤其影响本地开发者快速迭代。  
  - 自定义 OpenAI 兼容端点（如 Volcengine ARK）配置失效（#17199）。  

- **满意之处**：  
  - 网关重启后会话恢复能力（PR #19033）获得用户正面测试反馈。  
  - 多模态图像处理路径透明化（PR #19032）被赞“终于能看到图片位置了”。

---

### 8. **待处理积压**  
- **#514 A2A 协议支持**：创建于 2026-03-06，已更新至今，评论达 10 条，是社区长期期待的功能，建议优先评估技术可行性。  
- **#18966 Docker 构建缓慢**：自 2026-05-02 提出，反映持续存在的性能瓶颈，需审查依赖管理和缓存策略。  
- **#17199 DeepSeek 自定义端点配置失效**：涉及 provider 逻辑重构，影响企业级部署场景，建议分配专项时间排查。

---

*数据来源：GitHub NousResearch/hermes-agent (截至 2026-05-03)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

PicoClaw 项目在2026年5月3日保持活跃的开发状态，共处理了7个新/活跃的Issue和8个PR更新，包括6个待合并和2个已关闭的PR。当日发布了一个夜间构建版本v0.2.8-nightly.20260502.6e1fab80，表明开发团队持续进行迭代和测试。整体来看，项目在功能增强和稳定性修复方面都有进展。

今日没有发布正式的新版本，仅有一个夜间构建版本。该版本为自动化构建，可能不稳定，建议使用时谨慎。完整更新日志链接为：https://github.com/sipeed/picoclaw/compare/v0.2.8...main

今日没有重要PR被合并或关闭，所有PR均为待合并状态。项目整体进展平稳，主要集中在Bug修复和功能增强上，例如修复了Telegram重复重试问题、xAI兼容性支持等。

今日最活跃的Issue是#2421，用户请求添加email作为原生通道，已有4条评论讨论。其次是#2546，关于支持OAuth 2.1 + PKCE for MCP服务器的请求，有3条评论。这两个Issue都反映了用户对扩展通信渠道的需求。

今日报告的Bug包括：#2720（高优先级）关于Singleton PID检查不验证进程身份的问题；#2668关于Gemini API返回HTTP 400错误的问题；#2665关于Anthropic模型ID格式错误的问题；#2749关于Bash评估相对路径为绝对路径的问题；#2745关于OpenRouter推理模型泄露思考内容的问题。其中#2750 PR已针对#2749提出修复方案。

今日的功能请求主要包括：添加email作为原生通道（#2421）、支持OAuth 2.1 + PKCE for MCP服务器（#2546）、添加xAI兼容性支持（#2260）。这些请求表明项目正在向更广泛的通信渠道和API提供商扩展，未来版本可能会纳入这些功能。

从用户反馈中可以看出，痛点主要集中在API兼容性问题（如Anthropic模型ID格式、Gemini复杂JSON schema支持）、推理模型输出控制（如OpenRouter推理泄露）以及路径处理逻辑（如Bash相对路径问题）。用户希望PicoClaw能够更好地支持各种AI提供商和通信渠道，提供更稳定的用户体验。

长期未响应的重要Issue包括：#2421（Add email as native channel，已开放4周）、#2546（Support OAuth 2.1 + PKCE，已开放约2周）。这些Issue需要维护者关注并及时回应，以推动项目功能的进一步完善。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 (2026-05-03)**

---

### 1. 今日速览
过去24小时，NanoClaw 项目保持较高活跃度，共处理13条 Issues 和15条 PRs。社区对数据库稳定性、跨平台兼容性和新功能集成的讨论尤为活跃。整体项目进展稳健，多个关键问题得到修复，但 OpenRC 系统支持仍面临挑战。

---

### 2. 版本发布
*无新版本发布*

---

### 3. 项目进展
**重要合并/关闭 PR：**
- **#2192 DeltaChat channel adapter** (Feature) - 新增对 DeltaChat 的通道适配器支持，扩展了 NanoClaw 的消息平台兼容性。[PR #2192](https://github.com/qwibitai/nanoclaw/pull/2192)
- **#2179 OneCLI agent identifier sanitization** (Fix) - 修复了因 Agent ID 中包含下划线导致 OneCLI 拒绝的问题。[PR #2179](https://github.com/qwibitai/nanoclaw/pull/2179)
- **#2181 poll-loop slash command fix** (Fix) - 解决了热容器上斜杠命令静默失效的问题。[PR #2181](https://github.com/qwibitai/nanoclaw/pull/2181)
- **#2183 host-sweep DB write fix** (Fix) - 修复了 `host-sweep` 中尝试写入只读数据库导致的崩溃问题。[PR #2183](https://github.com/qwibitai/nanoclaw/pull/2183)
- **#2190 Atom feed parsing fix** (Fix) - 修正了 Atom 订阅源中 link 元素解析错误，防止 poller 崩溃。[PR #2190](https://github.com/qwibitai/nanoclaw/pull/2190)
- **#1931 v1 to v2 migration flow** (Experimental Feature) - 提供了从 v1 到 v2 的迁移流程实验性支持。[PR #1931](https://github.com/qwibitai/nanoclaw/pull/1931)

这些 PR 的合并显著提升了系统的稳定性、跨平台兼容性和功能完整性，特别是在数据库操作、多平台消息集成和用户体验方面。

---

### 4. 社区热点
**最活跃的 Issue/PR：**
- **[#2188] "attempt to write a readonly database" crash** - 此问题在短时间内被报告两次（#2188, #2196），表明这是一个普遍且严重的问题。尽管已有一个 PR (#2183) 被合并来修复它，但其影响范围广，需要进一步验证。
- **[#2200] Telegram connection fails on OpenRC** & **[#2199] Docker failed to start in OpenRC** - 这两个 Issue 都聚焦于 OpenRC 系统下的服务启动和连接问题，反映了用户对非 systemd 系统支持的强烈需求。
- **[#2198] Show badge percentage** - 虽然优先级低，但这是一个具体的、可快速实现的用户体验改进请求，且有对应的 PR 正在处理。

**诉求分析：**
社区的主要诉求集中在以下几个方面：
1.  **跨平台支持：** 用户迫切需要 NanoClaw 在非主流 Linux 发行版（如 OpenRC）上稳定运行。
2.  **数据库稳定性：** 对 SQLite 数据库的读写权限管理提出了更严格的要求，避免因配置错误导致服务崩溃。
3.  **功能集成：** 对新通信渠道（DeltaChat, Matrix, Home Assistant）的支持呼声很高。
4.  **用户体验优化：** 对于徽章显示百分比、OneCLI ID 规范化等细节进行了优化，体现了对易用性的关注。

---

### 5. Bug 与稳定性
**严重 Bug (需优先处理)：**
1.  **[#2196] host-sweep: deleteOrphanProcessingClaims crashes with 'attempt to write a readonly database'** - 此问题已被 PR #2183 修复，并已成功合并。
2.  **[#2200] Telegram connection initialisation with OpenRC is failing** - 此问题尚无官方修复 PR，属于高优先级问题，影响了 OpenRC 用户的正常使用。
3.  **[#2199] installation script - Docker failed to start in OpenRC** - 同样，此问题尚无官方修复 PR，影响了 OpenRC 用户的初始安装流程。
4.  **[#2194] WhatsApp LID→phone JID mapping not persisted across restarts** - 此问题尚无官方修复 PR，可能导致 WhatsApp 路由失败。
5.  **[#2193] init-first-agent: native WhatsApp platform_id stored with channel prefix** - 此问题尚无官方修复 PR，可能导致 WhatsApp 消息路由失败。
6.  **[#2195] add-gmail-tool: no documentation or workaround for multi-account Gmail setups** - 此问题尚无官方修复 PR，但属于功能限制而非系统崩溃。
7.  **[#2191] migrate-v2.sh: misleading error when sqlite3 CLI not installed** - 此问题尚无官方修复 PR，可能导致用户在安装 `sqlite3` 时遇到误导性错误信息。

**Bug 趋势分析：**
过去24小时内报告的 Bug 主要集中在数据库操作（#2196, #2188）、OpenRC 系统兼容性（#2200, #2199）以及 WhatsApp 相关功能（#2194, #2193）。这表明项目在跨平台部署和特定消息平台适配方面仍需加强测试和维护。

---

### 6. 功能请求与路线图信号
**用户提出的新功能/改进：**
- **Matrix E2EE channel support (#1624)** - 这是一个长期存在的 PR，旨在添加对 Matrix 端到端加密频道的支持，并允许每个群组独立配置模型/努力级别。这表明社区对高级消息平台集成和多模型配置有强烈需求。
- **Home Assistant MCP integration skill (#1327)** - 另一个长期存在的 PR，添加了与 Home Assistant 的 REST API 集成，使容器代理能够查询和控制智能家居设备。这反映了用户对 IoT 集成和自动化场景构建的兴趣。
- **Webchat v1 skill (#2069)** - 此 PR 旨在添加一个 Webchat 技能，为用户提供基于网页的聊天界面。
- **DeltaChat channel adapter (#2192)** - 此功能已成功合并，表明 NanoClaw 团队正在积极扩展其支持的通信渠道。
- **Badge percentage display (#1017, #2198)** - 这是一个简单的用户体验改进，但表明用户对项目状态的可见性有需求。

**路线图信号：**
- **跨平台支持：** OpenRC 相关的 Bug 和 Issue 突显了 NanoClaw 团队未来可能需要投入资源来增强对非主流 Linux 发行版的支持。
- **多账户支持：** `#2195` 中的 Gmail 多账户问题表明，未来版本可能会考虑增加对多账户的支持或更完善的文档。
- **数据库优化：** 多次提及的数据库只读问题和性能优化（#2189）表明团队可能会在未来版本中重点关注数据库层的健壮性和效率。

---

### 7. 用户反馈摘要
**真实痛点：**
- **OpenRC 系统不兼容：** 多位用户（`markhawrylak`, `mshirel`）报告了在 OpenRC 系统上安装和运行 NanoClaw 时遇到的困难，包括 Docker 启动失败和 Telegram 连接初始化问题。这表明当前的安装脚本和服务管理主要针对 systemd 设计，对其他 init 系统支持不足。
- **Gmail 多账户支持缺失：** `mshirel` 明确指出，`add-gmail-tool` 技能仅支持单一 Gmail 账户，而许多用户拥有多个 Google 账户，缺乏文档或变通方案。
- **WhatsApp 消息路由失败：** `mshirel` 描述了 WhatsApp 的 LID 到 phone JID 映射在重启后丢失，以及平台 ID 存储格式错误导致的静默路由失败。这些问题直接影响核心功能的可用性。
- **误导性错误信息：** `Omee11` 发现 `migrate-v2.sh` 在缺少 `sqlite3` CLI 时会给出误导性的错误信息，增加了用户排查问题的难度。
- **Token 效率低下：** `mnolet` 提出了关于 token 效率低下的担忧，这可能影响代理性能和成本。
- **CLI 通道路由问题：** `alex-shepel` 报告了 `cli/local` 通道的路由查找失败问题。
- **CLAUDE.md 文件加载问题：** `tianglim` 指出了 `claude-md-compose.ts` 未能正确导入 `CLAUDE.local.md` 文件，导致群组记忆未被 SDK 加载。

**满意/不满意的地方：**
- **感谢与认可：** `mnolet` 在提出 Token 效率问题时，首先表达了对 NanoClaw 项目的赞赏，表明整体用户对项目是满意的。
- **积极反馈：** `mnolet` 还提到“really enjoying playing with it”，并愿意提交 PRs，显示出用户对项目的高度参与度。
- **具体改进建议：** `zhengmz` 提出的徽章百分比显示请求，是一个具体的、积极的反馈，希望能提升用户体验。
- **问题描述详细：** 多数 Issue 的描述都非常详细，包含了复现步骤、错误日志和期望行为，这有助于开发者快速定位和解决问题，也反映了用户社区的积极参与和专业性。

---

### 8. 待处理积压
**长期未响应的重要 Issue/PR：**
- **[#1624] feat: Matrix E2EE channel + per-group model/effort configuration** - 此 PR 自 2026-04-04 创建以来已有近一个月，仍在等待审核。这是一个重要的功能扩展，涉及 E2EE 和模型配置，需要维护者投入更多精力进行审查和测试。
- **[#1327] feat: add Home Assistant MCP integration skill** - 此 PR 自 2026-03-22 创建以来已有近两个月，仍在等待审核。同样，这是一个有价值的集成，需要维护者进行评估。
- **[#2069] [follows-guidelines] Skill/webchat v1** - 此 PR 自 2026-04-28 创建以来已有数日，仍在等待审核。虽然时间不长，但仍需关注。

**提醒维护者：**
- **Matrix 和 Home Assistant 集成 PRs (#1624, #1327)** 代表了社区对高级功能集成的强烈需求，建议优先安排审查。
- **OpenRC 相关 Issue (#2200, #2199)** 反映了用户在新平台上部署的迫切需求，建议尽快提供解决方案或至少给出明确的路线图。
- **WhatsApp 路由问题 (#2194, #2193)** 是核心功能的关键缺陷，需要尽快修复以确保用户体验。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报 - 2026年5月3日**

---

### 1. **今日速览**

过去24小时内，NullClaw 项目保持高活跃度，共处理了20条 PR（18个已合并/关闭）和5条 Issues（4个新开/活跃），显示出开发团队的高效推进与社区积极参与。整体项目健康度良好，关键基础设施与安全性问题得到快速响应。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

本日内成功合并或关闭了多个重要 Pull Requests，涵盖安全性增强、兼容性修复及 REST Admin API 功能扩展：

- **REST Admin API 完成整合**（PR #780、#771、#770）：新增配置管理、MCP 服务器监控、会话控制、内存与历史记录操作等能力，显著提升远程管理能力，适用于 CLI 仪表盘与移动端集成。
- **Zig 0.16 回归修复**（PR #873、#872）：解决 Mattermost 空体 POST 消息失败及网关线程 CPU 自旋问题，避免生产环境性能崩溃。
- **HTTP/1.1 keep-alive 支持优化**（PR #876）：通过替换 `readSliceShort` 为 `readVec`，解除客户端阻塞，提升长连接稳定性。
- **系统服务脚本加固**（PR #856）：针对 RTC-less 硬件优化 SysVinit/OpenRC 启动顺序，增强边缘设备可靠性。
- **Tailscale 加密密钥集成**（PR #850）：支持通过 secrets pipeline 安全注入 Tailscale auth key，提升隧道部署安全性。

这些更新标志着 NullClaw 在稳定性、可观测性与运维友好性方面迈出实质性步伐。

---

### 4. **社区热点**

当前最受关注的议题是 **#871**（web_search 在低资源设备上不实用），其核心诉求为缺乏对 DuckDuckGo 的直接支持，迫使依赖第三方 API 或 Docker 容器，影响轻量级部署场景。该 Issue 获 2 条评论，反映用户在嵌入式或低成本设备上的真实痛点。

此外，**#865**（CLI 方向键显示乱码）因涉及基础交互体验被频繁提及，虽仅 1 条评论但属高频使用路径中的明显缺陷。

> 链接：[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) | [Issue #865](https://github.com/nullclaw/nullclaw/issues/865)

---

### 5. **Bug 与稳定性**

今日报告的 Bug 中，以下三项值得关注：

| 严重程度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 高     | #871 | `web_search` 在低资源设备上因无原生 DuckDuckGo 支持而不可用 | 开放，无 fix PR |
| 中     | #865 | CLI 方向键输入显示 Ctrl 字符乱码 | 开放，无 fix PR |
| 中     | #866 | curl POST 请求即使列入白名单仍失败 | 开放，有 1 个👍，暂无修复 PR |

其中 #866 已获社区关注（👍1），建议优先排查权限逻辑或请求构造问题。其余两项尚无对应 PR 提交，需开发者介入验证。

---

### 6. **功能请求与路线图信号**

用户强烈呼吁 **内置 DuckDuckGo 搜索支持**（Issue #871），暗示下一版本可能考虑集成官方 API 或本地解析方案以摆脱 Docker 依赖。

同时，**#820**（如何在 Debian 安装 Zig）表明非容器化部署路径亟待完善，结合近期 PR 对系统服务的强化，推测未来将推出更清晰的“裸机安装指南”或预编译二进制分发策略。

---

### 7. **用户反馈摘要**

- **痛点**：  
  - 低资源设备难以运行 `web_search`，现有方案依赖外部 API 或 Docker，违背轻量化设计初衷。  
  - CLI 基础交互故障（方向键乱码）严重影响命令行用户体验。  
  - curl 工具即便在白名单中仍被拒绝执行，暴露权限校验逻辑漏洞。

- **满意点**：  
  - REST Admin API 的推出极大便利了远程管理与自动化运维。  
  - 对 Zig 0.16 迁移后回归问题的迅速响应体现工程严谨性。

---

### 8. **待处理积压**

- **Issue #871**（web_search 实用性不足）自 4 月 25 日提出，已超一周未获回应，涉及核心功能可用性，建议维护者评估技术可行性并规划 roadmap。  
- **Issue #820**（Debian Zig 安装指南）同样长期未闭环，影响 Linux 用户上手效率，宜补充文档或提供脚本支持。

> 链接：[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) | [Issue #820](https://github.com/nullclaw/nullclaw/issues/820)

--- 

*数据来源：GitHub nullclaw/nullclaw，统计周期：2026-05-02T00:00:00Z 至 2026-05-03T00:00:00Z*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-05-03）**

---

### 1. **今日速览**  
过去24小时内，IronClaw 社区保持高度活跃，共新增/活跃 Issue 16 条、PR 更新 47 条（待合并 41，已处理 6），无新版本发布。项目整体处于快速迭代阶段，重点围绕 Reborn 架构重构、音频管道集成及多平台支持展开。核心贡献者持续推动关键模块落地，同时新贡献者积极参与功能扩展与文档完善。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  

#### ✅ 重要合并 PR：
- **#3215**: 修复 Gemini 3.x 模型调用中 `thoughtSignature` 丢失问题（原 Issue #3214），此前两次修复未彻底解决根本原因。
- **#3208**: 实现 Docker 镜像支持 `linux/arm64` 架构，填补 Apple Silicon 和 Graviton 生态空白（对应 Issue #3168）。
- **#3217**: 修正官方 Docker Hub 镜像名称为 `nearaidev/ironclaw`，避免用户因名称错误导致拉取失败（Issue #2963）。

#### 🔄 重大功能推进：
- **Reborn 架构系列 PR 密集上线**：包括事件投影服务（#3212）、TurnRunner 执行模型定义（#3199）、持久化与锁机制设计（#3202）等，系统性构建下一代内核抽象层。
- CLI 工具链增强：新增 `ironclaw insights` 命令用于使用分析（#3177）、`backup --quick` 支持便携快照导出（#3178），形成完整迁移闭环。

> 📌 项目整体正向“生产就绪”方向加速演进，Reborn 子系统的契约级设计基本完成，进入实现验证阶段。

---

### 4. **社区热点**  

| 类型 | ID | 热度指标 | 核心诉求 |
|------|----|----------|--------|
| Issue | [#90](https://github.com/nearai/ironclaw/issues/90) | 更新活跃 (P1-P2) | 统一音频流水线（STT/TTS/语音笔记），支撑 WhatsApp 等渠道的富媒体交互 |
| PR   | [#3212](https://github.com/nearai/ironclaw/pull/3212) | 高关注度 | 引入事件投影服务，为 Reborn 提供去耦的事件溯源能力，支撑复杂工作流审计 |

> 💡 用户强烈期待跨平台音频处理能力以拓展商业场景，而事件投影机制被视为提升系统可观测性与调试效率的关键基础设施。

---

### 5. **Bug 与稳定性**  

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|---------|------|------|
| ⚠️ Medium | [#3214](https://github.com/nearai/ironclaw/issues/3214) | DeepSeek/Gemini 3.x 调用时 `thoughtSignature` 丢失 → HTTP 400 错误 | ✅ 已修复（#3215） |
| ⚠️ Medium | [#3011](https://github.com/nearai/ironclaw/issues/3011) | `ironclaw run` 不输出 stderr 日志 | ✅ 已修复（#3216） |
| ⚠️ Low | [#2344](https://github.com/nearai/ironclaw/issues/2344) | Web UI 加载时报 CSP / TypeError 错误 | 持续跟踪中 |

> 注：Web UI 控制台错误虽不影响核心功能，但影响用户体验可信度，需长期关注。

---

### 6. **功能请求与路线图信号**  

- **ARM64 支持**（#3168）：已由 #3208 实现，标志跨平台战略迈出实质性一步。
- **音频管道**（#90）：优先级 P1-P2，预计将作为后续版本的核心基础设施纳入发布计划。
- **NEAR Intents 交易代理**（#3218, #3207）：通过 Codex 驱动开发，显示产品团队正在探索 DeFi 自动化赛道，可能成为差异化功能点。
- **自动验证机制**（#3189）：提出 `autoverify` 技能 + `.ironclaw-verify.json` 配置体系，反映对 CI/CD 自治化的深度投入。

> 🚩 多个高价值功能正从需求向实现转化，路线图清晰度显著提升。

---

### 7. **用户反馈摘要**  

- **痛点集中点**：  
  - LLM 提供商对数字参数序列化为字符串的行为缺乏兼容处理（DeepSeek/Kimi 触发 guardrail 失败）→ 暴露 schema 严格校验与实际输入脱节问题。
  - Docker 镜像名误导导致新手部署失败（#2963）→ 文档准确性亟待加强。
  - Web UI 控制台错误频发 → 前端健壮性需提升。

- **正面反馈**：  
  - CLI 工具链持续增强获认可，`insights` 和 `backup` 命令被赞“实用且符合 Hermes 范式”。
  - ARM64 支持一经提出即快速响应，体现社区协作高效。

---

### 8. **待处理积压**  

| 类型 | ID | 年龄 | 风险提示 |
|------|----|------|--------|
| Issue | [#2344](https://github.com/nearai/ironclaw/issues/2344) | >3 周 | Web UI 稳定性问题长期存在但未闭环，影响生产环境部署信心 |
| Issue | [#90](https://github.com/nearai/ironclaw/issues/90) | >2.5 月 | 音频管道为跨功能依赖项，延迟可能阻塞渠道扩展进度 |

> ⏳ 建议优先安排 Web UI 错误排查冲刺，并明确音频管道交付时间轴以避免生态分裂。

--- 

*数据截止：2026-05-03 | 来源：[GitHub nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报**  
**日期：2026年5月3日**

---

### 1. **今日速览**  
过去24小时内，LobsterAI 项目整体活跃度较低，未出现新的 Issue 或已合并的 Pull Request（PR），但仍有 4 个 PR 处于待合并状态。项目维护者持续关注配置同步、渠道过滤及会话管理等方面的改进，反映出当前开发重点集中在稳定性优化与用户体验提升。无新版本发布，整体演进平稳。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
过去24小时无合并或关闭的 PR，但有以下 4 个重要 PR 仍处于开放待审状态，涉及核心功能修复与扩展：

- **[PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879)**：修复 OpenClawConfigSync 在同步配置时覆盖用户手动添加的插件路径问题，防止第三方社区插件（如 memory-lancedb-pro）被意外丢弃。
- **[PR #813](https://github.com/netease-youdao/LobsterAI/pull/813)**：为小米（xiaomi）渠道新增 MiMo V2 Pro 和 MiMo V2 Omni 模型支持，完善多模态能力覆盖。
- **[PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)**：隐藏 OpenClaw 内部主代理会话，避免其出现在用户可见的协作者（Cowork）列表中以减少混淆。
- **[PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191)**：修复定时任务中通知渠道过滤缺陷，统一显示 POPO、企业微信等已启用渠道，并优化渠道选择器 UI 体验。

这些 PR 共同推进了系统健壮性与终端用户体验，尤其在插件管理与多渠道通信方面取得实质性进展。

---

### 4. **社区热点**  
当前暂无活跃讨论（评论数为 `undefined` 或零反馈），所有待审 PR 均无新评论。表明社区参与度暂时偏低，可能处于开发周期中的相对静默期。建议后续通过 issue 模板引导用户反馈以增强互动。

---

### 5. **Bug 与稳定性**  
今日未报告新 Bug 或崩溃事件。但 **[PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879)** 针对一个潜在的高风险问题提出修复：OpenClaw 配置同步机制会覆盖用户手动添加的插件路径，可能导致关键社区插件失效——此为中等严重性 Bug，已有明确 fix PR 提交，等待审核。

---

### 6. **功能请求与路线图信号**  
用户通过 **[PR #813](https://github.com/netease-youdao/LobsterAI/pull/813)** 主动提交对小米 MiMo 平台新模型的支持需求，显示厂商生态集成正成为扩展方向之一。结合 **[PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191)** 对通知渠道透明化的改进，可推测下一阶段路线图将聚焦于：
- 多渠道消息系统的标准化与可视化；
- 第三方插件生态的兼容性保障；
- 主流大模型平台（如小米 MiMo）的快速接入能力。

---

### 7. **用户反馈摘要**  
暂无来自 Issue 评论的直接用户反馈（当前 Issues 数量为 0）。但从 PR 内容可推断真实使用场景：
- 用户依赖社区插件拓展功能（如 memory-lancedb-pro），对配置被重置感到不满；
- 普通用户在设置通知渠道时常遭遇“显示不全”或“技术编码难懂”的问题，影响操作效率；
- 内部代理会话误显暴露引发困惑，说明非技术用户对系统透明度的期待高于预期。

总体情绪偏中性，痛点集中于易用性与配置持久性。

---

### 8. **待处理积压**  
以下 PR 已存在较长时间且无近期活动，需维护者关注：

- **[PR #813](https://github.com/netease-youdao/LobsterAI/pull/813)**：创建于 2026-03-25，距今已超30天，涉及重要模型支持扩展，建议尽快评审；
- **[PR #1191](https://github.com/netease-youdao/LobsterAI/pull/1191)**：创建于 2026-04-01，持续约31天，关乎核心通知流程体验，优先级较高；
- **[PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)**：创建于 2026-04-01，近30天，虽标记为“stale”但仍具实际价值。

建议项目团队制定 PR 评审节奏，避免关键功能长期滞留。

--- 

*数据来源：GitHub Repository: netease-youdao/LobsterAI*  
*生成时间：2026-05-03*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报（2026-05-03）**

---

### 1. **今日速览**
Moltis 项目在 2026-05-03 保持中等活跃度，过去 24 小时内新增 4 个 Issue 和 3 个 PR，无新版本发布。社区持续关注功能增强与文档完善，同时出现一个关键 Bug 报告，涉及 DeepSeek 推理模式兼容性问题。核心贡献者 `penso` 持续推进沙箱与 Matrix 集成相关改进，整体开发节奏稳定。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**
- **PR #942**（Open）：引入多后端沙箱支持（Vercel、Daytona、Firecracker），解决云部署中 Docker-in-Docker 不可用的问题，显著提升跨平台兼容性。[链接](https://github.com/moltis-org/moltis/pull/942)
- **PR #957**（Open）：为 Matrix OIDC 注册流程添加调试日志并优化重定向 URI 去重逻辑，有助于诊断认证失败问题。[链接](https://github.com/moltis-org/moltis/pull/957)
- **PR #339**（Closed）：正式合并繁体中文（zh-TW）本地化支持，完善国际化能力。[链接](https://github.com/moltis-org/moltis/pull/339)

> ✅ 本周重点推进了运行时环境扩展与身份认证稳定性，国际化支持基本完成。

---

### 4. **社区热点**
- **Issue #959**：用户报告 DeepSeek 在“思考模式”下无法正确返回 `reasoning_content`，影响高级推理流程的完整性。该问题已被标记为 Bug，暂无解决方案。[链接](https://github.com/moltis-org/moltis/issues/959)
- **Issue #960**：提出引入 **SwarmScore**——一种可移植的 AI 代理信誉评分系统，旨在建立跨平台的信任机制，反映社区对 Agent 间协作可信度的需求增长。[链接](https://github.com/moltis-org/moltis/issues/960)

> 🔥 用户对开放生态下的信任建模表现出高度兴趣，SwarmScore 可能成为未来版本路线图的重要方向。

---

### 5. **Bug 与稳定性**
| 严重程度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| High   | [#959](https://github.com/moltis-org/moltis/issues/959) | DeepSeek 推理模式下 `reasoning_content` 未正确回传至 API | 未修复 |
| Medium | [#958](https://github.com/moltis-org/moltis/issues/958) | 本地 TTS 配置文档指向已归档仓库 | 待修复 |

> ⚠️ 当前最紧急的是 DeepSeek 集成 Bug，建议优先排查 OpenAI 兼容层中的响应解析逻辑。

---

### 6. **功能请求与路线图信号**
- **图像生成支持**（PR #956）：请求通过 OpenAI Codex OAuth 添加 `gpt-image-2` 模型支持，体现用户希望扩展多模态能力的强烈诉求。
- **SwarmScore 集成提案**（Issue #960）：提出构建可移植的 AI 代理信誉体系，虽非直接技术实现，但暗示未来版本可能加强 Agent 网络治理与互信机制。

> 📌 结合近期沙箱与多后端支持进展，Moltis 正从单体框架向分布式智能体平台演进，上述需求符合长期战略方向。

---

### 7. **用户反馈摘要**
- **痛点**：DeepSeek 推理内容丢失导致部分用户无法验证模型内部逻辑；本地语音合成文档过时造成新手配置困难。
- **满意点**：沙箱多后端支持获得开发者积极评价，认为其解决了 Fly.io、Render 等平台的部署瓶颈。
- **使用场景**：多数反馈来自企业级 Agent 编排场景，强调跨平台运行、安全隔离与多语言支持的重要性。

---

### 8. **待处理积压**
- **Issue #872**（关联 PR #957）：关于 Matrix OIDC `invalid_redirect_uri` 错误缺乏日志的问题，自 2025 年 Q4 提出，仍在等待详细诊断方案。建议维护者优先处理以提升身份认证体验。[链接](https://github.com/moltis-org/moltis/issues/872)
- **Feature Request Pool**：多个增强类 Issue（如 SwarmScore、图像生成）尚未分配负责人，需社区投票或 roadmap 明确优先级。

--- 

*数据来源：GitHub API · moltis-org/moltis · 2026-05-02T00:00:00Z 至 2026-05-03T23:59:59Z*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-05-03）**

---

### 1. **今日速览**
过去24小时内，CoPaw 项目保持高活跃度：共新增与活跃 Issues 14 条，开放 PR 6 条，无新发布版本。社区反馈集中于模型 fallback、对话记忆丢失及多端同步等核心功能痛点，同时涌现出多项由首次贡献者提交的国际化与基础工具增强类 PR。整体项目处于积极迭代状态，用户需求响应及时，但部分关键 Bug 仍需进一步修复。

---

### 2. **版本发布**
*无新版本发布*

---

### 3. **项目进展**
今日无已合并的 Pull Requests，所有6个PR仍处于开放状态：
- #3999：为技能模块添加 CLI 测试命令，提升开发者本地调试效率；
- #4009：新增巴西葡萄牙语本地化支持，拓展南美市场用户覆盖；
- #4007：修复两个长期遗留的内存管理问题（#3182, #3828），并引入 `MemoryHook` 实现长期记忆增强，显著提升系统稳定性；
- #4005：针对 WSL2 NAT 网络环境超时问题补充文档说明，降低新用户部署门槛；
- #3831 与 #3525：分别推进向量数据库连接测试和 Discord 线程隔离功能，强化多平台集成能力。

这些 PR 体现了项目在工具链完善、全球化支持和技术债清理方面的持续投入。

---

### 4. **社区热点**
最活跃的 Issue 为 **#3640**（MCP client TaskGroup 异常导致 Agent 假死），自4月21日提出以来持续引发关注，已有6条评论。该问题直接影响生产环境可用性，虽暂无直接 fix PR，但反映了 MCP 客户端在高负载下的资源调度隐患。

另一高频议题 **#1327**（自动模型降级链以应对限流）持续更新，用户强烈呼吁构建容错机制以保障服务连续性。此外，**#3991**（Ollama 上下文丢失）和 **#4000**（微信/浏览器不同步）也获得多次互动，凸显多通道协同体验是当前用户体验短板。

---

### 5. **Bug 与稳定性**
按严重程度排序的关键 Bug：

| Issue | 类型 | 描述 | 状态 |
|------|------|------|------|
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | High | MCP client 内部 TaskGroup 阻塞导致 Agent 无响应 | 未修复 |
| [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | Medium | MiniMax OpenAI 兼容接口未过滤推理内容 | 未修复 |
| [#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991) | Medium | Ollama 渠道无法携带对话历史 | 未修复 |

上述问题均未关联已提交的 fix PR。其中 #3640 影响范围广且复现路径清晰，建议优先排期处理。

---

### 6. **功能请求与路线图信号**
多个用户明确提出“模型回退”需求（#1327、#3789、#4011），构成明确的功能路线图信号。结合现有 PR #4007 对内存机制的改进，推测下一版本有望集成智能降级策略。此外：
- 可视化交互（#4002）和单条消息删除（#4001）反映用户对精细化 UI 控制的需求；
- 语音输入缺失（#4000）提示需明确功能边界或规划未来扩展。

---

### 7. **用户反馈摘要**
- **满意度**：CLI 技能测试（#3999）获开发者好评，认为提升了开发体验；巴西语本地化（#4009）受到国际社区欢迎。
- **不满意点**：
  - 微信与浏览器操作割裂，缺乏统一状态同步；
  - Ollama 本地模型上下文丢失，影响轻量化部署场景；
  - 缺乏官方测评接口，阻碍企业级生产落地决策。

---

### 8. **待处理积压**
- **[#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)**：高优先级 Bug，超10天未解决，涉及核心任务调度逻辑，亟需排查 TaskGroup 生命周期管理；
- **[#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327)**：长期未决功能请求，累计5条评论，建议纳入 v1.6 版本计划；
- **[#3831](https://github.com/agentscope-ai/QwenPaw/pull/3831)**：向量模型连接测试功能停滞近一周，可能需维护者介入推动。

--- 

*数据截止时间：2026-05-03 00:00 UTC*  
*报告生成：CoPaw 项目分析助手*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目动态日报（2026-05-03）**

---

### 1. **今日速览**

过去24小时，ZeroClaw 社区保持高度活跃：共处理 50 条 Issue 更新与 36 条 PR 动态，其中 29 个 PR 待合并，显示开发节奏紧凑。核心团队持续推进 v0.7.x 向 v0.8.0 的集成阶段，重点围绕配置架构升级（v3 schema）、多实例支持及推理内容兼容性修复。尽管无新版本发布，但多个关键 Bug 已在 master 分支获得修复，稳定性显著提升。

---

### 2. **版本发布**

**无新版本发布**。当前处于 v0.7.x 维护期，下一版本 v0.8.0 正通过 `integration` 分支进行集成测试，预计将包含重大配置变更（RFC #5890 v3 schema）、技能系统重构及首个 Breaking Change 支持。

---

### 3. **项目进展**

今日无新合并或关闭的高优先级 PR。但值得注意的是，多个针对高严重性问题的修复已提交至 master：

- **[PR #6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285)**：修复上下文压缩过程中丢失 `reasoning_content` 的问题（对应 Issue #6269），保障 DeepSeek/V4 等思考模型的多轮对话完整性。
- **[PR #6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284)**：完善 OpenAiCompatibleProvider 对 plain-text assistant messages 的 `reasoning_content` 保留机制（关联 Issue #6233）。
- **[PR #6287](https://github.com/zeroclaw-labs/zeroclaw/pull/6287)**：解决 Slack bot_token 必须显式配置导致的启动崩溃问题（Issue #6237/#5183），现支持从环境变量自动加载。

此外，[PR #6274](https://github.com/zeroclaw-labs/zeroclaw/pull/6274) 正推进将官方技能移至本地仓库统一管理，消除对外部技能镜像的依赖，为 v0.7.6 的技能 UX 改进奠定基础。

---

### 4. **社区热点**

最活跃的议题集中于 **推理内容兼容性与多实例配置管理**：

- **[#6269: Context compressor drops reasoning_content](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)**（2条评论）：用户报告在长对话触发自动压缩时，assistant 的 `reasoning_content` 被丢弃，影响 DeepSeek V4 等思考模式。该问题已快速响应并提交修复 PR (#6285)。
- **[#5722: Default shell sandbox blocks realistic Python skills](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)**（6条评论）：InvestorClaw 开发者反馈沙箱配置过于严格，阻碍复杂 Python 技能执行。此 Issue 标记为 P1 且状态为 in-progress，反映生产级技能生态的关键需求。
- **[#5878: v0.7.5 milestone tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/5878)**（3条评论）：定义自动化发布流程主题，强调从今往后所有 release 均为 intentional 且基于 CI/CD 驱动，标志项目成熟度提升。

---

### 5. **Bug 与稳定性**

按严重程度排序的关键 Bug：

| Issue | 严重度 | 描述 | 状态 |
|------|--------|------|------|
| [#6095](https://github.com/zeroclaw-labs/zeroclaw/issues/6095) | S1 | Bedrock Claude Opus-4-7 报错 "temperature is deprecated" | 未修复 |
| [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | S1 | Telegram 加密配置失效导致无响应 | in-progress |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | S0 | 多实例部署下硬编码路径引发数据风险 | 已接受，需迁移 |
| [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) | S1 | 自定义 provider 流式错误后进程挂起 | needs-repro |

已有对应修复 PR：
- [#6285](https://github.com/zeroclaw-labs/zeroclaw/pull/6285) → #6269
- [#6287](https://github.com/zeroclaw-labs/zeroclaw/pull/6287) → #6237/#5183
- [#6288](https://github.com/zeroclaw-labs/zeroclaw/pull/6288) → #6227 (systemd 单元名推导)

---

### 6. **功能请求与路线图信号**

用户强烈呼吁以下方向纳入下一版本：

- **Dream Mode & 长期记忆学习** ([#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849))：P1 优先级，提议空闲时段执行内存 consolidation 和 reflective learning，可能成为 AI Agent 核心差异化能力。
- **订阅制 OAuth 支持扩展** ([#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601))：覆盖 Ollama Cloud、z.ai、Kimi、MiniMax，增强企业级身份集成能力。
- **WASM 插件混合技能支持** ([#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140))：结合 agentskills.io 元数据与 WASM 工具，构建可复用技能生态。

同时，v0.7.6 规划明确包含技能 UX 统一、V3 配置宏支持、SwarmConfig 实现等结构性改进，表明项目正转向模块化与可扩展架构。

---

### 7. **用户反馈摘要**

- **痛点集中点**：
  - 多实例部署中配置文件路径硬编码严重限制灵活性（#5605, #6227）。
  - Telegram 媒体消息在 `mention_only=true` 下仍被响应（#6229），影响群组体验。
  - Slack 必须手动写入 token 否则崩溃（#6237），违背零配置理念。
- **满意点**：
  - 对 DeepSeek/V4 的 `reasoning_content` 支持迅速响应，体现技术敏锐度。
  - 技能安装流程简化获积极反馈（#6253 征集意见）。
- **使用场景洞察**：
  - 金融分析类应用（如 InvestorClaw）依赖定制化 Python 技能沙箱，推动安全策略迭代。
  - 企业用户倾向使用 WhatsApp / Matrix 等企业通信渠道，要求稳定接入与附件支持。

---

### 8. **待处理积压**

需维护者优先关注的长期议题：

- **[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)**：Shell 沙箱策略优化，影响高级技能可用性，超半月未闭环。
- **[#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)**：OAuth 扩展需求明确但缺乏 maintainer review 标签，可能阻塞云厂商集成进度。
- **[#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)**：虽为 P1，但涉及 AI 行为范式创新，建议纳入 v0.8.0+ 路线图评估。

--- 

*数据来源：GitHub API @ 2026-05-03 00:00 UTC*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*