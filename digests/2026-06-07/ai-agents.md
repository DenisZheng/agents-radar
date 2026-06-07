# OpenClaw 生态日报 2026-06-07

> Issues: 297 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-07 00:40 UTC

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

好的，这是根据您提供的数据生成的 OpenClaw 项目日报。

---

# OpenClaw 项目动态日报 (2026-06-07)

## 1. 今日速览

OpenClaw 项目今日继续保持极高的活跃度，社区贡献和迭代速度显著。过去24小时内，共处理了297条 Issues 更新（新开/活跃150条，关闭147条）和500条 Pull Request 更新（待合并407条，已合并/关闭93条），并有2个新版本发布。这表明项目正处于快速发展和维护阶段，社区参与度高，维护团队响应积极。

## 2. 版本发布

今日发布了两个新的 Beta 版本，主要集中在 Bug 修复和稳定性提升：

*   **v2026.6.5-beta.2**
    *   **Highlights:**
        *   **QQBot 修复:** 修复了 QQBot 在原生交付时泄露模型推理/思考脚手架（`<thinking>` 内容）的问题。 (#89913, #90132)
        *   **MCP 工具结果处理:** 改进了 MCP 工具结果对 `resource_link`, `resource`, `audio`, 损坏的图片以及未来可能出现的未知内容类型的处理。
*   **v2026.6.5-beta.1**
    *   **Highlights:**
        *   包含与 `v2026.6.5-beta.2` 相同的 QQBot 和 MCP 工具结果处理修复。

**迁移注意事项:** 这些是 Beta 版本，主要包含修复，没有提及重大破坏性变更。建议用户在测试环境中验证后再升级。

## 3. 项目进展

今日合并/关闭的93个 PR 中，一些重要的进展包括：

*   **ACPX 进程状态存储优化:** PR #91034 将 ACPX 网关实例 ID 和实时进程租约从旧文件迁移到 SQLite 支持的插件键值存储中，提升了数据管理的效率和可靠性。
*   **Parallel Search MCP 集成:** PR #90849 添加了免费的 Parallel Search MCP 作为零配置的默认 `web_search` 提供商，为用户提供更便捷的搜索能力。
*   **WebChat 图片读取修复:** PR #90964 修复了 `read` 工具无法读取 WebChat 上传图片的 `ENOENT` 错误，提升了 WebChat 用户体验。
*   **自动更新问题修复:** PR #83360 解决了在 systemd 下自动更新失败的问题，确保更新机制在更多环境下正常工作。
*   **Windows 聊天 UI 回归修复:** PR #67035 解决了 Windows 上聊天 UI 输入文本被吞没和流式回复不可见的严重回归问题。

这些合并的 PR 表明项目在提升核心功能稳定性、扩展集成能力和改善用户体验方面取得了显著进展。

## 4. 社区热点

今日讨论最活跃的 Issues 和 PR 反映了用户对稳定性、安全性和特定渠道功能的关注：

*   **OpenAI ChatGPT Responses 传输失败 (Issue #90083, 14评论):** 用户报告在升级到 2026.6.1 后，OpenAI/ChatGPT Responses 推理因 `invalid_provider_content_type` 错误而失败，影响 `gpt-5.4/gpt-5.5` 模型。这表明对新模型的支持可能存在兼容性问题。
*   **Windows 聊天 UI 回归 (Issue #67035, 14评论):** 这是一个长期存在的 P1 级 Bug，用户持续反馈在 Windows 上输入文本被吞没、流式回复不可见的问题，严重影响基本使用体验。
*   **Codex 应用服务器回归 (Issue #88312, 13评论):** 2026.5.27 版本引入的回归导致 Codex 应用服务器在多工具代理轮次中失败，提示 "Codex stopped before confirming the turn was complete"。
*   **飞书流式卡片异常 (Issue #88929, 11评论):** 飞书渠道在启用流式卡片渲染时，出现打字机效果异常和最终内容被截断的问题，影响飞书用户体验。
*   **Subagent 沙箱隔离问题 (Issue #69327, 5评论):** 用户报告子代理沙箱未正确传播 `sandbox.docker.env` 变量，并可能在重建后重用陈旧状态，涉及安全性和环境一致性。
*   **Agent 内部思考泄露 (Issue #64275, 5评论):** 这是一个 P1 级安全问题，OpenClaw 2026.4.9 版本暴露了代理的内部思考过程给用户。

**背后诉求:** 用户最关心的是核心功能的稳定性（尤其是 Windows 和特定渠道），对新模型和新功能的兼容性，以及代理行为的安全性和可预测性。

## 5. Bug 与稳定性

今日报告的 Bug 和回归问题按严重程度排列如下：

*   **P1 (严重/回归):**
    *   **OpenAI ChatGPT Responses 传输失败 (Issue #90083):** 影响 OpenAI 最新模型，可能导致核心功能不可用。
    *   **Windows 聊天 UI 回归 (Issue #67035):** 严重影响 Windows 用户基本体验。
    *   **Codex 应用服务器回归 (Issue #88312):** 导致 Codex 核心功能中断。
    *   **Cron 触发器污染全局运行时状态 (Issue #90991):** 导致系统级过载失败。
    *   **Subagent 公告压缩路由错误 (Issue #90925):** 影响 Codex/OAuth 场景下的子代理通信。
    *   **Kimi K2.6 `reasoning_content` 400 回归 (Issue #71491):** 长对话中上下文压缩后出现错误。
    *   **Agent 内部思考泄露 (Issue #64275):** 安全漏洞。
    *   **Gateway 挂起 (Issue #90886):** 当声明的提供商缺少凭据时，网关启动挂起。
    *   **Cron 运行失败通知误报 (Issue #90595):** 导致警报疲劳。
    *   **Bedrock `image` 工具认证失败 (Issue #72031):** 影响 AWS 用户。
    *   **MCP 回环范围安全 (PR #84017):** 潜在的安全边界问题。
*   **P2 (中等):**
    *   **飞书流式卡片异常 (Issue #88929):** 影响飞书用户体验。
    *   **WebChat 仪表盘冻结 (Issue #86811):** 工具调用时 WebChat 无响应。
    *   **`sessions_history` 返回重复消息 (Issue #85669):** 仪表盘显示重复消息。
    *   **Control UI 回复重复 (Issue #71992):** 聊天视图中助手回复出现两次。
    *   **`OPENCLAW_CONFIG_DIR` 无法包含空格 (Issue #44599):** 配置路径限制。
    *   **子代理沙箱隔离 (Issue #69327):** 环境变量传播问题。
    *   **`exec` 工具触发网关重启 (Issue #90428):** WSL2 环境问题。
    *   **Gateway 端断路器 (Issue #62615):** 防止不健康会话无限重试。
    *   **`sessions_send` 超时误报 (Issue #68065):** 影响代理间通信。
    *   **Cron 工具模式缺失字段 (Issue #64721):** 限制 Cron 功能。
    *   **默认沙箱镜像缺少 Python3 (Issue #57713):** 影响 `edit/write` 工具。
*   **P3 (低):**
    *   **本地模型提供商支持 (Issue #89265):** 功能请求。
    *   **WebChat TTS/STT 支持 (Issue #45508):** 功能请求。

**已有 Fix PR 的 Bug:**
*   #90083 (OpenAI ChatGPT Responses 传输失败): 暂无直接关联 PR，但 #90093 (相关 `invalid_encrypted_content` 错误) 有 PR #90994 (修复 Codex PreToolUse 传递)。
*   #67035 (Windows 聊天 UI 回归): 已关闭，可能已修复。
*   #88312 (Codex 应用服务器回归): 暂无直接关联 PR。
*   #88929 (飞书流式卡片异常): PR #89659 (修复飞书发送速率限制错误) 可能相关。
*   #86811 (WebChat 仪表盘冻结): 已关闭，可能已修复。
*   #85669 (`sessions_history` 返回重复消息): 已关闭，可能已修复。
*   #71992 (Control UI 回复重复): 已关闭，可能已修复。
*   #44599 (`OPENCLAW_CONFIG_DIR` 无法包含空格): 已关闭，可能已修复。
*   #64275 (Agent 内部思考泄露): 暂无直接关联 PR。
*   #90886 (Gateway 挂起): 暂无直接关联 PR。
*   #90925 (Subagent 公告压缩路由错误): PR #90994 (修复 Codex PreToolUse 传递) 可能相关。
*   #72031 (Bedrock `image` 工具认证失败): 暂无直接关联 PR。
*   #69327 (子代理沙箱隔离): 暂无直接关联 PR。
*   #90428 (`exec` 工具触发网关重启): 暂无直接关联 PR。
*   #62615 (Gateway 端断路器): 暂无直接关联 PR。
*   #68065 (`sessions_send` 超时误报): 暂无直接关联 PR。
*   #64721 (Cron 工具模式缺失字段): 暂无直接关联 PR。
*   #57713 (默认沙箱镜像缺少 Python3): 暂无直接关联 PR。

## 6. 功能请求与路线图信号

用户提出的新功能需求包括：

*   **主题会话族 (Issue #90916):** 为单个助手提供多个命名上下文通道，实现隔离的近期对话上下文和共享的持久记忆。
*   **本地模型提供商支持 (Issue #89265):** 将本地模型视为一等公民，降低 AI 成本。
*   **WebChat TTS/STT 支持 (Issue #45508):** 允许 WebChat 使用自托管的 TTS/STT 配置，而非浏览器内置 API。
*   **记忆/上下文改进 (Issue #11955):** 包括指标、全局语义搜索、对话链和重启时预加载。
*   **预压缩记忆刷新的有界/验证追加语义 (Issue #90354):** 为预压缩记忆刷新提供硬性防护。
*   **保证最后 N 条原始消息在代理上下文中 (Issue #58818):** 确保在压缩和会话重置后仍能保留最近的原始消息。
*   **模型回退的每候选重试计数 (Issue #59413):** 提高基于池/代理提供商的弹性。
*   **自托管 STT/TTS 提供商支持 (Issue #45508):** 允许 WebChat 使用自托管的 TTS/STT 配置。
*   **Gateway 端断路器 (Issue #62615):** 防止不健康会话无限重试。
*   **Cron 工具模式缺失字段 (Issue #64721):** 完善 Cron 工具的配置选项。

**可能被纳入下一版本的信号:**
*   **Parallel Search MCP (PR #90849):** 已合并，表明项目正在积极集成新的搜索能力。
*   **Runtime Self Context 配置和工具 (PR #90101):** 正在审查中，表明项目正在关注运行时元数据和可观测性。
*   **Claude Bridge 应用服务器扩展 (PR #86655):** 正在审查中，表明项目正在努力实现对 Anthropic 模型的一流支持。
*   **OpenRouter OAuth 登录 (PR #91031):** 正在审查中，表明项目正在扩展认证方式和提供商支持。

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点、使用场景、满意/不满意的地方：

*   **痛点:**
    *   **稳定性问题:** 多个回归问题（Windows UI、Codex、OpenAI 传输）严重影响用户信心和日常使用。
    *   **安全性担忧:** 代理内部思考泄露是用户高度关注的安全问题。
    *   **特定渠道体验:** 飞书和 QQBot 的特定问题（流式卡片、思考泄露）表明渠道集成需要更细致的测试和优化。
    *   **配置复杂性:** 如 `OPENCLAW_CONFIG_DIR` 无法包含空格，以及提供商凭据缺失导致网关挂起，都反映了配置过程的痛点。
    *   **长对话/上下文管理:** 多个 Issue 涉及长对话中的上下文压缩、消息丢失和重复，这是 AI 助手核心挑战。
*   **使用场景:**
    *   用户在 Windows 桌面、WSL2、Docker、Termux 等多种环境下部署 OpenClaw。
    *   广泛使用 OpenAI、Anthropic (Claude)、Google Vertex AI、MiniMax、Kimi、Bedrock 等多种模型提供商。
    *   通过 Telegram、Discord、Feishu、iMessage、WebChat 等多种渠道与代理交互。
    *   利用 Cron 工具进行定时任务，利用子代理进行复杂任务分解。
*   **满意/不满意:**
    *   **不满意:** 主要集中在上述痛点，尤其是影响核心功能稳定性和安全性的问题。
    *   **满意:** 尽管有 Bug，但用户持续提交 Issue 和 PR，表明他们对项目整体方向和功能集是认可的，并希望项目变得更好。高活跃度也意味着社区对项目有很高的期望。

## 8. 待处理积压

以下是一些长期未响应或需要维护者重点关注的重要 Issue 或 PR：

*   **Issue #67035 (Windows 聊天 UI 回归):** 尽管已关闭，但作为 P1 级问题，其根本原因和长期稳定性仍需关注。
*   **Issue #64275 (Agent 内部思考泄露):** P1 级安全问题，需要彻底解决。
*   **Issue #49603 (孤立的锁文件未清除):** P1 级，可能导致资源泄漏。
*   **Issue #43015 (`message.send` 模式过度暴露):** P1 级，影响 GPT 模型用户体验。
*   **Issue #58730 (`exec()` 沙箱隔离和工具权限模型):** P1 级安全功能请求，对提升代理安全性至关重要。
*   **Issue #58818 (保证最后 N 条原始消息):** P2 级，对用户体验和上下文连续性很重要。
*   **Issue #62615 (Gateway 端断路器):** P2 级，对系统稳定性和资源管理有益。
*   **PR #86655 (Claude Bridge 应用服务器扩展):** 重要的功能扩展，需要审查。
*   **PR #84017 (MCP 回环范围安全):** 重要的安全修复，需要审查。
*   **PR #90101 (Runtime Self Context 配置和工具):** 重要的可观测性功能，需要审查。

---

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-06-07 | 分析工具：OWL — ZOO Company**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**从"功能验证"向"生产就绪"快速过渡**的阶段。头部项目（OpenClaw、ZeroClaw、Hermes Agent）日处理 PR 数量已达 30-50 条级别，社区贡献者规模突破百人，表明开源协作已从个人兴趣驱动转向工程化协作。**插件化/WASM 扩展体系**成为各项目的共同战略方向——ZeroClaw 今日单日涌现 10+ 个插件 PR，OpenClaw 集成 Parallel Search MCP，NanoBot 新增 MCP 访问控制，生态正在从"单体智能体"向"可插拔工具平台"演进。**安全与沙箱隔离**成为跨项目的核心议题，多个项目集中暴露了工具权限粒度过粗、子代理隔离不彻底、路径策略误报等系统性缺陷，反映出社区对 Agent 安全边界的认知正在深化。与此同时，**渠道碎片化**仍是显著痛点——Windows 兼容性（OpenClaw、CoPaw）、飞书/钉钉等企业 IM（OpenClaw、Hermes Agent）、WhatsApp Bridge（NanoBot、PicoClaw）的稳定性问题反复出现，说明跨平台消息路由仍是工程难点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 版本发布 | 健康度 | 阶段判断 |
|---|---|---|---|---|---|
| **OpenClaw** | 297（150开/147关） | 500（407待/93合） | 2 个 Beta | ★★★★☆ 高活跃 | 快速迭代 + 稳定化并行 |
| **ZeroClaw** | 37（22开/15关） | 50（45待/5合） | 无 | ★★★★☆ 高活跃 | 密集开发期，插件生态爆发 |
| **Hermes Agent** | 50（48开/2关） | 50（46待/4合） | v0.16.0（6/5） | ★★★★☆ 高活跃 | 大版本后稳定化阶段 |
| **IronClaw** | 2 | 32（22待/10合） | 无 | ★★★☆☆ 良好 | Reborn 架构大规模落地 |
| **NanoBot** | 7（4开/3关） | 24（14待/10合） | 无 | ★★★★☆ 中高活跃 | 快速迭代期 |
| **NanoClaw** | 1 | 14（11待/3合） | 无 | ★★★☆☆ 良好 | 架构规范化阶段 |
| **PicoClaw** | 12（10开/2关） | 18（3待/15合） | Nightly | ★★★★☆ 健康 | 密集维护期 |
| **CoPaw** | 11（9开/2关） | 0 | 无 | ★★☆☆☆ 偏下 | 回归 Bug 积压，维护滞后 |
| **LobsterAI** | 6（存量更新） | 2（均关闭） | 无 | ★★☆☆☆ 中等偏低 | 低活跃，积压严重 |
| **Moltis** | 3（均新开） | 0 | 无 | ★★☆☆☆ 中等偏低 | 静默期 |
| **ZeptoClaw** | 2（1开/1关） | 1（待合并） | 无 | ★★★☆☆ 中等偏稳 | 工程基础设施精修 |
| **NullClaw** | 0 | 0 | — | — | 无活动 |
| **TinyClaw** | 0 | 0 | — | — | 无活动 |

> **数据洞察：** 活跃项目呈现明显的"头部集中"效应——OpenClaw 单项目占据了全生态约 40% 的 Issue 活动和 35% 的 PR 活动。ZeroClaw 和 Hermes Agent 构成第二梯队，日 PR 活动均在 50 条左右。其余项目活跃度差异较大，CoPaw 和 LobsterAI 存在明显的维护响应滞后问题。

---

## 3. OpenClaw 在生态中的定位

### 社区规模绝对领先

OpenClaw 的日 Issue 更新量（297 条）和 PR 更新量（500 条）均远超同类项目，达到第二名 ZeroClaw 的 **8 倍**和 **10 倍**。这种量级差异不仅体现在社区贡献者数量上，更反映在问题发现的广度和修复速度上——今日关闭 147 个 Issue、合并 93 个 PR 的吞吐量，说明其维护团队已具备类似中型开源组织的响应能力。

### 技术路线差异

| 维度 | OpenClaw | 同类项目对比 |
|---|---|---|
| **架构模式** | 单体 Gateway + 插件体系 | ZeroClaw 走 WASM 插件沙箱路线，IronClaw 走 Reborn 微内核路线 |
| **渠道覆盖** | 最全面（Telegram/Discord/Feishu/QQBot/iMessage/WebChat 等） | Hermes Agent 渠道相当但稳定性不足；NanoBot/NanoClaw 渠道较少 |
| **模型支持** | 最广（OpenAI/Anthropic/Google/Bedrock/MiniMax/Kimi/DeepSeek 等） | ZeroClaw 正在补齐 OAuth 订阅认证；Hermes Agent 新增 Cursor provider |
| **安全模型** | 全局 allow/deny + 沙箱 | ZeroClaw 推进 Skill 级权限；NanoBot 推进 MCP 访问控制；OpenClaw 安全粒度相对较粗 |
| **部署方式** | CLI/Docker/systemd/Nix | PicoClaw 专注边缘设备（Raspberry Pi）；NanoClaw 强调容器化 |

### 核心优势与短板

**优势：**
- **生态体量**：Issue/PR 吞吐量是第二名的 10 倍，意味着更快的 Bug 修复和功能迭代
- **渠道广度**：覆盖国内外主流 IM 平台，是企业级部署的首选
- **模型兼容性**：对国产模型（Kimi、MiniMax、DeepSeek）的支持领先于多数海外项目

**短板：**
- **Windows 体验**：多个 P1 级 Windows 回归 Bug 长期未解决（Issue #67035 等），而 ZeroClaw、Hermes Agent 在 Windows 上表现相对更好
- **安全粒度**：工具权限仍为全局标志，落后于 ZeroClaw 的 Skill 级权限和 NanoBot 的 MCP 访问控制
- **配置复杂度**：`OPENCLAW_CONFIG_DIR` 不支持空格、提供商凭据缺失导致网关挂起等体验问题，对非技术用户不够友好

---

## 4. 共同关注的技术方向

以下需求在**两个及以上项目**中同时出现，代表生态级共识：

### ① 安全沙箱与工具权限精细化（OpenClaw、ZeroClaw、NanoBot、PicoClaw）

| 项目 | 具体诉求 |
|---|---|
| ZeroClaw | Skill 级安全权限（#5775）、Agent 工具权限强制执行（#6914）、WASM 插件沙箱加固（#7335） |
| NanoBot | 按用户粒度的 MCP 访问控制（PR #2533）、ExecTool 符号链接逃逸防护（PR #4221） |
| OpenClaw | 子代理沙箱隔离（#69327）、exec 工具权限模型（#58730） |
| PicoClaw | AGENT.md frontmatter allow/deny 策略（PR #2838） |

**共识：** 从"全局开关"走向"按 Skill/用户/工具粒度的细粒度权限控制"是安全架构的必然演进方向。

### ② 上下文管理与压缩（OpenClaw、NanoBot、Hermes Agent、CoPaw）

| 项目 | 具体诉求 |
|---|---|
| NanoBot | max_messages 截断 + microcompact 持续破坏前缀缓存（#4222） |
| CoPaw | /compact 命令忽略模型 max_input_length，硬编码 128K（#4937） |
| OpenClaw | 预压缩记忆刷新的有界追加语义（#90354）、保证最后 N 条原始消息（#58818） |
| Hermes Agent | 压缩轮换会话时 flush cursor 未重置导致消息重复/丢失（#40806） |

**共识：** 上下文压缩是 AI 助手的核心挑战，当前各项目的实现普遍存在配置不生效、缓存失效、消息丢失等问题，需要更系统性的架构设计。

### ③ 多平台消息路由稳定性（OpenClaw、NanoBot、Hermes Agent、PicoClaw）

| 项目 | 问题 |
|---|---|
| OpenClaw | Windows QQ 通道 token 获取超时、飞书流式卡片异常 |
| NanoBot | WhatsApp Bridge 消息重复投递、重启后历史消息回放 |
| Hermes Agent | DingTalk 主动消息发送失败、Discord heartbeat 被 SQLite 阻塞 |
| PicoClaw | Windows QQ 通道连接失败 |

**共识：** 跨平台消息路由的可靠性是生产部署的前提，但各 IM 平台的 API 差异、WebSocket 长连接管理、流式渲染等工程难点导致稳定性问题反复出现。

### ④ 插件化/扩展体系（OpenClaw、ZeroClaw、NanoBot、NanoClaw）

| 项目 | 方向 |
|---|---|
| ZeroClaw | WASM 插件沙箱 + 远程注册表 + 命名空间隔离（10+ PR 集中推进） |
| OpenClaw | MCP 工具集成（Parallel Search MCP）、ACP 协议扩展 |
| NanoBot | MCP 访问控制、自定义 Provider 兼容性 |
| NanoClaw | 技能库可维护性框架（Skills conformance） |

**共识：** 从"内置功能"走向"可插插件生态"是平台化的必经之路，WASM 沙箱和 MCP 协议是两大技术路线。

### ⑤ 本地模型与自托管支持（OpenClaw、ZeroClaw、NanoBot、Hermes Agent）

| 项目 | 诉求 |
|---|---|
| ZeroClaw | Ollama Cloud/z.ai/Kimi/MiniMax 订阅原生 OAuth（#5601）、自托管插件群 |
| OpenClaw | 本地模型提供商支持（#89265） |
| NanoBot | 自定义 Provider 兼容性修复 |
| Hermes Agent | 本地 Ollama + Gemma4 音频透传（#40873） |

**共识：** 降低对云 API 的依赖、支持本地/自托管模型是隐私敏感用户和成本敏感用户的核心需求。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键词 | 差异化壁垒 |
|---|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手平台 | 技术型个人用户、小团队 | 单体 Gateway + 多渠道路由 + 插件体系 | 渠道覆盖最广、模型支持最全、社区体量最大 |
| **ZeroClaw** | 安全优先的 WASM 插件化 Agent 平台 | 安全敏感用户、企业开发者 | WASM 沙箱 + 微内核 + 远程插件注册表 | 安全模型最精细、插件生态最完整 |
| **Hermes Agent** | 多平台消息中枢 + 桌面端深度集成 | 多 IM 用户、桌面端重度用户 | Electron Dashboard + TUI + 多平台适配器 | 桌面端体验最丰富、macOS 集成最深 |
| **IronClaw** | Reborn 架构的 Rust Agent 框架 | Rust 开发者、架构导向用户 | Reborn 微内核 + ProductWorkflow + 效应系统 | 技术架构最前沿、类型系统最严格 |
| **NanoBot** | 轻量级多模型 Agent 框架 | 快速原型开发者、多模型路由需求 | 轻量内核 + Provider 抽象 + 桌面端外壳 | 启动快、配置轻、多模型路由灵活 |
| **NanoClaw** | 容器化 Agent 运行时 | DevOps 用户、容器化部署场景 | 容器运行时 + 技能库规范 + CLI 工具链 | 容器原生、技能可维护性框架 |
| **PicoClaw** | 边缘设备 Agent 框架 | 嵌入式/边缘开发者、Raspberry Pi 用户 | Go 编译 + 多架构二进制 + 低体积 | 二进制体积小（<7MB）、边缘设备优化 |
| **LobsterAI** | 确定性工作流 Agent | 企业自动化用户、任务编排需求 | 桌面客户端 + 定时任务 + 多 Agent 管理 | 确定性工作流（Lobster 风格）、批量操作 |
| **CoPaw** | 中文用户友好的 AI 助手 | 中文用户、企业微信生态 | Web UI + Coding Mode + 企业微信集成 | 中文本地化、Coding Mode |
| **ZeptoClaw** | 机器人/边缘场景 Agent | 机器人开发者、嵌入式 AI | Rust + 多架构 CI + 体积极致优化 | 体积极致约束（7MB 门禁）、机器人场景 |
| **Moltis** | 轻量 Cron + 通知 Agent | 定时任务用户、轻量部署 | Docker + Cron + 通知渠道 | 极简部署、Cron 核心场景 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：快速迭代期（日 PR > 30）

| 项目 | 日 PR 量 | 特征 |
|---|---|---|
| **OpenClaw** | 500 | 功能迭代与 Bug 修复并行，社区吞吐量最大 |
| **ZeroClaw** | 50 | 插件生态爆发式增长，安全架构快速收敛 |
| **Hermes Agent** | 50 | v0.16.0 大版本后密集稳定化补丁 |
| **IronClaw** | 32 | Reborn 架构核心路由层快速成型 |

**共同特征：** 维护团队响应速度快、PR 合并效率高、版本迭代节奏明确。社区贡献者规模大，已形成正向循环。

### 🔧 第二梯队：质量巩固期（日 PR 10-30）

| 项目 | 日 PR 量 | 特征 |
|---|---|---|
| **NanoBot** | 24 | 推理模型兼容性修复、上下文缓存优化 |
| **PicoClaw** | 18 | 防御性修复集中合并，goroutine 泄漏/panic 等深层问题 |
| **NanoClaw** | 14 | 架构规范化（技能可维护性框架）、渠道适配器修复 |

**共同特征：** 从"功能搭建"转向"稳定性治理"，防御性修复占比高，PR 积压量值得关注。

### 📌 第三梯队：维护响应期（日 PR < 10）

| 项目 | 日 PR 量 | 特征 |
|---|---|---|
| **CoPaw** | 0 | v1.1.10 回归 Bug 积压，维护响应滞后 |
| **LobsterAI** | 2 | 核心 Bug 停滞 60+ 天，社区信心下降 |
| **ZeptoClaw** | 1 | 工程基础设施精修，非功能开发 |
| **Moltis** | 0 | 静默期，用户反馈无维护者响应 |

**共同特征：** 维护者响应速度跟不上社区反馈节奏，存在 Issue/PR 长期未处理的风险，可能影响社区贡献信心。

---

## 7. 值得关注的趋势信号

### 趋势一：从"单体智能体"到"插件化平台"的架构范式转移

**信号强度：** ⭐⭐⭐⭐⭐

ZeroClaw 今日 10+ 个插件 PR 构成完整闭环（沙箱加固 → 命名空间隔离 → 签名验证 → 远程注册表 → 自托管工具群），OpenClaw 集成 Parallel Search MCP，NanoBot 新增 MCP 访问控制，NanoClaw 建立技能可维护性框架。**所有活跃项目都在构建插件/扩展体系**，标志着生态从"功能内置"向"平台化"的集体转型。

**对开发者的参考价值：** 如果你正在启动新的 Agent 项目，**插件系统应是一等公民架构**，而非事后补丁。WASM 沙箱（ZeroClaw）和 MCP 协议（OpenClaw/NanoBot）是当前两大主流技术路线。

### 趋势二：安全模型从"全局开关"走向"细粒度权限"

**信号强度：** ⭐⭐⭐⭐⭐

ZeroClaw 的 Skill 级权限（#5775）、NanoBot 的 MCP 访问控制（PR #2533）、PicoClaw 的 AGENT.md frontmatter 策略（PR #2838）、OpenClaw 的子代理沙箱隔离诉求（#69327）——**四个项目同时推进安全模型细化**，说明社区已达成共识：全局 `allow_scripts` 标志无法满足生产安全需求。

**对开发者的参考价值：** 安全权限模型应在设计初期就支持**按 Skill/工具/用户粒度**的细粒度控制，而非全局开关。事后修补的成本远高于前期设计。

### 趋势三：上下文管理成为核心架构挑战

**信号强度：** ⭐⭐⭐⭐

NanoBot 的前缀缓存被破坏（#4222）、CoPaw 的 /compact 命令硬编码 128K（#4937）、OpenClaw 的预压缩记忆刷新语义（#90354）、Hermes Agent 的压缩后消息重复（#40806）——**四个项目同时暴露上下文管理的深层缺陷**，且均涉及配置不生效或缓存失效等系统性问题。

**对开发者的参考价值：** 上下文压缩不是简单的"截断到 N 条消息"，需要综合考虑前缀缓存命中率、配置传播一致性、压缩后状态重置等问题。**建议将上下文管理作为独立架构模块设计**，而非散落在各功能中。

### 趋势四：自托管/隐私优先成为差异化竞争点

**信号强度：** ⭐⭐⭐⭐

ZeroClaw 的自托管插件群（ACE-Step 音乐生成、SD-WebUI 图像生成、Ollama Embed 本地嵌入、n8n 工作流）、OpenClaw 的本地模型支持诉求（#89265）、Hermes Agent 的本地 Ollama 场景（#40873）——**用户对"数据不出本地"的需求正在从边缘走向主流**。

**对开发者的参考价值：** 提供自托管选项（本地模型、本地工具、本地存储）不再是"锦上添花"，而是**吸引隐私敏感用户和企业的必要条件**。OAuth 订阅认证（ZeroClaw #5601）比静态 API Key 更能降低本地部署门槛。

### 趋势五：确定性工作流需求浮出水面

**信号强度：** ⭐⭐⭐

Hermes Agent 的 Issue #5354（👍8，最高赞功能请求）明确提出"为关键/重复任务提供不依赖 LLM 重规划的确定性执行路径"，LobsterAI 的核心定位就是确定性工作流引擎。**用户开始意识到纯自主推理的局限性**——对于 PR 监控、API 密钥轮换等重复任务，确定性执行能显著降低 token 成本和延迟。

**对开发者的参考价值：** 未来的 Agent 平台可能需要**混合执行模式**——自主推理（处理不确定性任务）+ 确定性工作流（处理重复性任务）。这将成为 Agent 架构的重要设计维度。

### 趋势六：国产模型适配成为社区刚需

**信号强度：** ⭐⭐⭐⭐

OpenClaw 对 Kimi K2.6 `reasoning_content` 的修复（#71491）、NanoBot 对 DeepSeek/Kimi 推理模型的兼容性修复（PR #4228）、ZeroClaw 对 z.ai/Kimi/MiniMax 的 OAuth 支持诉求（#5601）、PicoClaw 对 ModelScope DeepSeek 协议的支持（PR #1112）——**国产推理模型的适配需求在多个项目中高频出现**，且涉及流式响应解析、reasoning_content 字段处理、OAuth 认证等多个层面。

**对开发者的参考价值：** 如果你的项目面向中国市场或全球华人用户，**国产模型适配不是可选项而是必选项**。需要特别关注 `reasoning_content` 字段、流式响应格式、OAuth 认证流程等与国内模型 API 的兼容性。

---

> **总结：** 个人 AI 助手开源生态正在经历从"能用"到"好用"再到"安全可靠"的演进。OpenClaw 凭借社区体量和渠道广度保持领先，但 ZeroClaw 在安全架构和插件生态上的深度、Hermes Agent 在桌面端体验上的投入、IronClaw 在 Rust 架构上的探索，都在各自维度上推动着整个生态的技术边界。对于开发者而言，**插件化架构、细粒度安全模型、上下文管理、自托管支持**是四个最值得投入的技术方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-06-07 | 数据来源：HKUDS/nanobot**

---

## 1. 今日速览

过去 24 小时 NanoBot 社区活跃度处于**中高水平**：共产生 7 条 Issue 更新（4 新开/活跃、3 已关闭）和 24 条 PR 更新（14 待合并、10 已合并/关闭），无新版本发布。今日核心议题集中在**上下文缓存失效**、**自定义 Provider 兼容性**和**WhatsApp Bridge 稳定性**三个方向。值得注意的是，PR #4228 和 #4227 几乎同时针对同一 Bug（`reasoning_content` 空字符串被丢弃）提出修复，反映出该问题对使用 DeepSeek/Kimi 等推理模型的用户影响较大。整体来看，项目处于快速迭代期，社区贡献者活跃，但待合并 PR 积压量（14 条）值得维护者关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 10 个 PR 推进了以下关键功能与修复：

| PR | 状态 | 说明 |
|---|---|---|
| **#4228** — fix: preserve empty `reasoning_content` in streaming response parsing | 已关闭 | 修复自定义 Provider 在流式响应中将 `reasoning_content=""` 错误转为 `None` 的问题，影响 DeepSeek 等推理模型用户 |
| **#4209** — fix(providers): allow dropping default OpenAI image params via null `extraBody` | 已关闭 | 解决 OpenAI 兼容图片生成 API（如 Agnes AI）因不支持 `response_format` 参数而报错的问题（对应 Issue #4167） |
| **#4195** — feat(desktop): polish desktop shell and shared WebUI surfaces | 已关闭 | 为 nanobot 首个桌面端外壳做准备，同时改进共享的聊天/设置界面，新增文件预览、技能、自动化等 Gateway API |
| **#2968** — feat(memory): per-user memory isolation | 已关闭 | 新增 `agents.defaults.per_user_memory` 配置项，解决多用户部署下记忆文件互相污染的问题 |
| **#2555** — fix(whatsapp-bridge): close existing clients on new connection | 已关闭 | 修复重启后旧 WebSocket 未关闭导致消息重复投递的问题 |
| **#2533** — feat: per-MCP-server `allowFrom` access control | 已关闭 | 为 MCP 服务器增加按用户粒度的访问控制，限制敏感工具（数据库、私有 API）仅对指定用户可用 |
| **#2532** — feat(search): add Serper.dev as Google Search provider | 已关闭 | 新增 Serper.dev 作为网页搜索 Provider 选项 |
| **#2529** — fix(whatsapp-bridge): download audio messages for transcription | 已关闭 | 修复 WhatsApp 语音消息无法下载转录的问题 |
| **#2528** — fix(whatsapp-bridge): drop messages older than startup | 已关闭 | 修复重启后 WhatsApp Bridge 回放历史消息导致 Agent 重复响应的问题 |
| **#4211** — SDK leaves stdio MCP open → shutdown RuntimeError | 已关闭 | 修复 SDK 嵌入模式下 stdio MCP 服务器在解释器关闭时触发 cancel scope 错误 |

**关键进展总结：** 今日合并的 PR 显著增强了多用户部署安全性（记忆隔离 + MCP 访问控制）、WhatsApp Bridge 稳定性（3 个修复集中落地）、以及桌面端基础设施。自定义 Provider 和图片生成兼容性问题也得到了及时响应。

---

## 4. 社区热点

### 🔥 Issue #2573 — GitHub Copilot 登录失败（👍 9，评论 3）
- **链接：** https://github.com/HKUDS/nanobot/issues/2573
- **热度分析：** 这是今日点赞数最高的 Issue（9 👍），说明 GitHub Copilot OAuth 登录失败影响面较广。用户反馈在 v0.1.4.post6 版本中，`nanobot provider login github-copilot` 命令报 `Authorization header is badly formatted` 错误，怀疑是 litellm 被 OpenAI 替代后引入的回归 Bug。该 Issue 已关闭，但根因是否彻底修复尚需确认。

### 🔥 Issue #4222 — `max_messages` 截断与 microcompact 持续使前缀缓存失效
- **链接：** https://github.com/HKUDS/nanobot/issues/4222
- **热度分析：** 今日新开的 Bug 报告，直指上下文治理管道中的两个机制导致发送给 LLM 的消息前缀几乎每轮都在变化，从而**彻底破坏 prompt/prefix 缓存**。这对使用支持前缀缓存的 API（如 Anthropic Claude、OpenAI）的用户意味着**显著的成本浪费和延迟增加**。该问题尚无对应 PR，建议维护者优先关注。

### 🔥 PR #4228 & #4227 — 同时修复 `reasoning_content` 空字符串问题
- **链接：** https://github.com/HKUDS/nanobot/pull/4228 | https://github.com/HKUDS/nanobot/pull/4227
- **热度分析：** 两个 PR 在同一天针对 Issue #4105 提出修复，说明该问题对使用 DeepSeek、Kimi K2.5/K2.6 等推理模型的用户影响较大。PR #4228 已被合并关闭，#4227 仍开放中。

### 🔥 PR #4094 — Channel dispatch 持久化与流身份修复
- **链接：** https://github.com/HKUDS/nanobot/pull/4094
- **热度分析：** 修复了 3 个关联 Issue（#4062、#4063、#4064），涉及 WebSocket 消息持久化、断连客户端的消息重放、以及 ChannelManager 流 delta 合并中的 stream_id 问题。这是 channel 基础设施的重要稳定性改进。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高优先级

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| #4222 | `max_messages` 截断 + microcompact 持续破坏前缀缓存，导致 API 成本飙升 | **OPEN，无 PR** | ⚠️ 待修复 |
| #2573 | GitHub Copilot OAuth 登录报 `Authorization header is badly formatted` | **CLOSED** | 需确认是否彻底修复 |

### 🟡 中优先级

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| #4105 | 自定义 Provider 丢弃空字符串 `reasoning_content` | **OPEN** | ✅ PR #4228 已合并 |
| #4167 | 图片生成 API 不支持 `response_format` 参数时报错 | **CLOSED** | ✅ PR #4209 已合并 |
| #4211 | SDK 模式下 stdio MCP 在关闭时触发 cancel scope RuntimeError | **CLOSED** | 已修复 |

### 🟢 低优先级

| # | 问题 | 状态 | Fix PR |
|---|---|---|---|
| #4229 | `find_legal_message_start` 在孤立 tool 消息位于末尾时丢弃所有消息 | **OPEN** | 自提 PR #4229 待审 |
| #4219 | 修剪历史前未丢弃孤立 tool 结果 | **OPEN** | 自提 PR #4219 待审 |

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR | 纳入可能性 |
|---|---|---|---|
| **GitHub Copilot for Business / Enterprise 支持** | #4220 | 无 | 🟡 中等 — 企业用户需求明确，但需维护者评估 API 差异 |
| **WebUI Cron Job 管理界面** | #4218 | 无 | 🟡 中等 — CLI 已完备，WebUI 缺失属于体验补全 |
| **WhatsApp 转发消息检测 + 启动保护 + 联系人处理** | — | #4226 (OPEN) | 🟢 高 — PR 已提交，作者 franciscomaestre 今日活跃 |
| **Cron Job 静默模式 + `lock_recipient`** | — | #4225 (OPEN) | 🟢 高 — PR 已提交，解决后台监控任务误推送到用户频道的问题 |
| **AssemblyAI 转录 Provider** | — | #4224 (OPEN) | 🟢 高 — PR 已提交，扩展转录选项 |
| **ExecTool 相对符号链接工作区逃逸防护** | #4072 | #4221 (OPEN) | 🟢 高 — 安全相关，PR 已提交 |
| **微信 Session 过期后自动重载** | — | #4223 (OPEN) | 🟢 高 — 修复永久静默死循环，PR 已提交 |

**路线图判断：** 下一版本（推测 v0.1.5）可能重点包含：推理模型兼容性修复、上下文缓存优化、WhatsApp Bridge 稳定性增强、以及桌面端基础设施。企业支持（GitHub Enterprise）和 WebUI 完善属于中期规划。

---

## 7. 用户反馈摘要

**痛点：**
- **推理模型兼容性不足：** 多位用户反馈 DeepSeek、Kimi 等推理模型在自定义 Provider 模式下 `reasoning_content` 字段处理异常（#4105、#4228、#4227），说明 nanobot 在适配国产推理模型方面仍需加强测试覆盖。
- **前缀缓存被破坏：** Issue #4222 揭示了上下文治理管道中一个深层次架构问题——消息前缀频繁变化导致缓存命中率趋近于零，直接影响 API 成本和响应速度。
- **GitHub Copilot 登录体验差：** Issue #2573 获得 9 个点赞，是今日最受关注的痛点，OAuth 流程的回归 Bug 影响了大量用户。
- **WebUI 功能不完整：** Issue #4218 指出 WebUI 缺少 Cron Job 管理界面，用户被迫使用 CLI 或直接编辑配置文件，体验割裂。

**满意点：**
- WhatsApp Bridge 的多个稳定性修复（#2555、#2529、#2528）集中落地，说明维护者对生产环境反馈响应及时。
- 多用户部署场景下的安全增强（记忆隔离 #2968 + MCP 访问控制 #2533）获得社区认可。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者优先关注：

| # | 类型 | 标题 | 等待时间 | 建议 |
|---|---|---|---|---|
| **#4222** | Issue | `max_messages` 截断破坏前缀缓存 | 1 天（新开但影响严重） | 🔴 建议立即评估，可能影响所有用户 API 成本 |
| **#4094** | PR | Channel dispatch 持久化与流身份修复 | 9 天 | 涉及 3 个关联 Issue，建议尽快 review 合并 |
| **#4033** | PR | Chat sender identity context | 10 天 | 多用户频道区分说话人身份，功能完整但长期未合并 |
| **#4123** | PR | MCP SSRF 防护 | 7 天 | 安全相关，建议优先 review |
| **#4220** | Issue | GitHub Copilot Enterprise 支持 | 1 天 | 企业用户需求，建议回复评估计划 |
| **#4218** | Issue | WebUI Cron Job 管理 | 1 天 | 体验补全需求，可纳入下一版本规划 |

---

**日报生成时间：** 2026-06-07  
**数据来源：** HKUDS/nanobot GitHub Repository  
**分析工具：** OWL — ZOO Company

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-06-07

---

## 1. 今日速览

Hermes Agent 社区今日保持高活跃度：过去 24 小时内 Issues 更新 50 条（新开/活跃 48 条，关闭 2 条），PR 更新 50 条（待合并 46 条，已合并/关闭 4 条）。项目刚于 6 月 5 日发布 **v0.16.0 "The Surface Release"**，自 v0.15.2 以来累计 874 次提交、542 个合并 PR、关闭 399 个 Issue，社区贡献者达 170 人，显示出强劲的迭代节奏。今日社区讨论集中在 **DingTalk 主动消息推送修复、macOS 安装/启动问题、多平台消息路由安全** 等方向，同时涌现出一批针对 Discord、Slack、Telegram 等平台的 bug fix PR，说明项目正进入 v0.16.0 发布后的密集稳定化阶段。

---

## 2. 版本发布

### Hermes Agent v0.16.0 "The Surface Release"（2026.6.5）

| 维度 | 数据 |
|---|---|
| 版本号 | v0.16.0（tag: v2026.6.5） |
| 发布日期 | 2026-06-05 |
| 距上一版本 | v0.15.2 |
| 提交数 | 874 commits |
| 合并 PR | 542 |
| 变更文件 | 1,962 |
| 代码增量 | +205,216 / −46,217 |
| 关闭 Issue | 399（含 P0×2、P1×62、安全标签×16） |
| 社区贡献者 | 170 人（含 co-author） |

**关键信号：**
- 这是一个**大版本跨度**（0.15.2 → 0.16.0），涉及近 20 万行代码变更，建议用户升级前关注破坏性变更。
- 关闭了 2 个 P0 和 62 个 P1 级别 Issue，说明此版本集中解决了一批高优先级问题。
- 16 个安全标签 Issue 被关闭，表明团队在安全加固方面投入显著。
- 170 位社区贡献者参与，社区协作规模可观。

> ⚠️ 由于 Release Notes 被截断（"The Surface..."），完整的破坏性变更和迁移指南暂未获取，建议查阅 [GitHub Release 页面](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.5) 获取完整信息。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 状态 | 说明 |
|---|---|---|
| [#38255](https://github.com/NousResearch/hermes-agent/pull/38255) | ✅ 已合并 | **fix(install): 要求 Node >=20.19/22.12 用于桌面构建** — 修复了旧版 Node 导致桌面构建 exit code 1 的问题，明确最低版本要求 |
| [#35544](https://github.com/NousResearch/hermes-agent/pull/35544) | ✅ 已合并 | **fix(tui): 在恢复会话时显示子会话 transcript** — 修复了 TUI 历史会话选择器不显示含实际内容的子会话的问题 |
| [#40870](https://github.com/NousResearch/hermes-agent/pull/40870) | ✅ 已合并 | **feat(memory): Hindsight 写入镜像到 owned log** — 为 Hindsight 内存提供者添加 fail-closed owned-log 镜像，提升内存写入可靠性 |

### 今日活跃的重要待合并 PR

| PR | 方向 | 说明 |
|---|---|---|
| [#40882](https://github.com/NousResearch/hermes-agent/pull/40882) | 🔧 Bug Fix | **防止 model wizard 在添加新 provider 时覆盖 model.base_url** — 修复 #40862，添加确认提示 |
| [#40881](https://github.com/NousResearch/hermes-agent/pull/40881) | ✨ Feature | **每次 API 调用注入当前墙钟时间** — 解决长会话中系统提示时间戳冻结导致的时间感知漂移 |
| [#40876](https://github.com/NousResearch/hermes-agent/pull/40876) | ✨ Feature | **新增 Cursor provider 集成** — 将 Cursor 作为一等提供者接入，支持 Cursor Agent API |
| [#40817](https://github.com/NousResearch/hermes-agent/pull/40817) | ✨ Feature | **DingTalk 主动消息发送（OToMessage batchSend API）** — 修复 #40818，实现 cron 推送和跨平台 send_message |
| [#40806](https://github.com/NousResearch/hermes-agent/pull/40806) | 🔧 Bug Fix | **压缩轮换会话时重置 flush cursor** — P1 修复，防止上下文压缩后消息重复/丢失 |
| [#40886](https://github.com/NousResearch/hermes-agent/pull/40886) | 🔧 Bug Fix | **Camofox 遵守 browser.command_timeout 而非硬编码 30s** — 修复 #40843 |
| [#40883](https://github.com/NousResearch/hermes-agent/pull/40883) | 🔧 Bug Fix | **Slack: 通过 SLACK_ALLOW_BOTS 授权 app/webhook 消息** — 修复 Slack 应用消息被静默丢弃的问题 |
| [#40884](https://github.com/NousResearch/hermes-agent/pull/40884) | 🔧 Bug Fix | **Discord: 要求显式 bot mention** — 防止 reply metadata 中的 mention 触发 bot-to-bot 处理 |
| [#40879](https://github.com/NousResearch/hermes-agent/pull/40879) | 🔧 Bug Fix | **honcho: _resolve_peer_id 查询 user_peer_aliases** — 修复 #40874 |
| [#40878](https://github.com/NousResearch/hermes-agent/pull/40878) | 🔧 Bug Fix | **macOS: 探测 launchd domain** — 修复 #40831，gateway start/stop/status 在 macOS 上的 launchd 域探测逻辑 |

**项目整体评估：** 今日合并的 PR 覆盖了安装体验、TUI 会话恢复、内存可靠性三个维度；待合并队列中有多达 10+ 个高质量 fix/feature PR 处于 review 阶段，涵盖多平台消息路由（Discord/Slack/DingTalk/Telegram）、模型提供者管理、macOS 系统集等核心领域。项目在 v0.16.0 发布后正快速消化稳定化补丁，预计近期会有 v0.16.1 或类似补丁版本。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 👍 | 💬 | 摘要 |
|---|---|---|---|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | 8 | 8 | **确定性工作流引擎（Lobster 风格实现）** — 用户希望为关键/重复任务（如 PR 监控、API 密钥轮换）提供不依赖 LLM 重规划的确定性执行路径，降低 token 成本和延迟 |
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) | 2 | 4 | **用户工作区与知识库 — 持久化文档存储、搜索和 RAG 集成** — 当前文件上传仅进入 24 小时过期的临时缓存，缺乏组织和持久化能力 |
| [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | 0 | 3 | **Desktop Remote gateway 无法通过 WebSocket 连接** — /api/ws 始终被拒绝（4403），影响远程后端使用场景 |
| [#37661](https://github.com/NousResearch/hermes-agent/issues/37661) | 0 | 3 | **mem0-temporal-hygiene 插件** — 社区贡献者发布了解决 Mem0 OSS 时间盲区和冲突解决的插件 |
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | 0 | 3 | **web_tools.py 缺少 _ensure_plugins_discovered() 导致 web 工具静默失败** — 新安装后 web search/extract/crawl 无法开箱即用 |
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | 0 | 3 | **🌙 Dreaming — 自动后台记忆整合** — 受生物睡眠周期启发，在安静时段自动将短期对话记忆整合为长期记忆 |

### 分析

- **最高赞 Issue #5354**（👍8）代表了社区对"**降低 LLM 自主性、增强确定性**"的强烈需求。这与当前 AI Agent 领域"从纯自主推理向可预测工作流演进"的趋势一致。
- **Issue #531** 是长期存在的架构级诉求（创建于 3 月 6 日），涉及持久化知识库和 RAG，说明用户对 Hermes 的期望已从"对话助手"升级为"知识工作台"。
- **Issue #27683** 和 **#38412** 反映了**开箱即用体验**仍是痛点——web 工具初始化缺陷和 Desktop WebSocket 连接问题直接影响新用户上手。

---

## 5. Bug 与稳定性

### P0/P1 级问题

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 P1 | [#40695](https://github.com/NousResearch/hermes-agent/issues/40695) | **Discord gateway heartbeat 被同步 SQLite 轮询阻塞** — 长运行 Discord 网关间歇性报 heartbeat blocked >10s | ❌ 暂无 |
| 🔴 P1 | [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) | **NameError: 'RedactingFormatter' not defined 导致 gateway 启动崩溃** — 自 #7991 引入的回归，👍4 | ❌ 暂无（创建于 4 月 12 日，长期未修复） |
| 🔴 P1 | [#40863](https://github.com/NousResearch/hermes-agent/issues/40863) | **Telegram: 被移除用户可在 auth check 前注入 prompt** — 安全漏洞，已移除用户的消息仍被完整处理 | ❌ 暂无 |
| 🟡 P1 | [#40806](https://github.com/NousResearch/hermes-agent/issues/40806) | **压缩轮换会话时 flush cursor 未重置** — 可能导致消息重复/丢失 | ✅ [#40806 PR](https://github.com/NousResearch/hermes-agent/pull/40806) 待合并 |

### P2 级问题

| Issue | 描述 | Fix PR |
|---|---|---|
| [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | Desktop Remote gateway WebSocket 4403 | ❌ |
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | web_tools.py 插件未初始化导致 web 工具静默失败 | ❌ |
| [#40820](https://github.com/NousResearch/hermes-agent/issues/40820) | macOS 安装器在 home 目录路径含空格时失败 | ❌ |
| [#40818](https://github.com/NousResearch/hermes-agent/issues/40818) | DingTalk 主动消息发送始终失败 | ✅ [#40817](https://github.com/NousResearch/hermes-agent/pull/40817) 待合并 |
| [#32217](https://github.com/NousResearch/hermes-agent/issues/32217) | SSRF 检查在 NVIDIA OpenShell 沙箱中误拦截 web 工具 | ❌ |
| [#40840](https://github.com/NousResearch/hermes-agent/issues/40840) | Windows 上 tools wizard 向 .env 写入 ESC 字符导致 web_search 永久失败 | ❌ |
| [#40852](https://github.com/NousResearch/hermes-agent/issues/40852) | Discord /model 切换 provider 时验证逻辑错误 | ❌ |
| [#40862](https://github.com/NousResearch/hermes-agent/issues/40862) | model wizard 添加新 provider 时覆盖 model.base_url | ✅ [#40882](https://github.com/NousResearch/hermes-agent/pull/40882) 待合并 |
| [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) | Telegram context compaction 视觉上删除用户消息 — 极差 UX | ❌ |

### P3 级问题（部分列举）

| Issue | 描述 |
|---|---|
| [#40843](https://github.com/NousResearch/hermes-agent/issues/40843) | Camofox 硬编码 30s 超时，忽略 browser.command_timeout → ✅ [#40886](https://github.com/NousResearch/hermes-agent/pull/40886) |
| [#40874](https://github.com/NousResearch/hermes-agent/issues/40874) | honcho _resolve_peer_id 未查询 user_peer_aliases → ✅ [#40879](https://github.com/NousResearch/hermes-agent/pull/40879) |
| [#40855](https://github.com/NousResearch/hermes-agent/issues/40855) | Desktop 显示 voice.record_key 但未注册快捷键 |
| [#40854](https://github.com/NousResearch/hermes-agent/issues/40854) | TUI verbose 输出不可折叠，调试困难 |
| [#40885](https://github.com/NousResearch/hermes-agent/issues/40885) | Telegram 消息在 agent 处理期间视觉跳动 |
| [#40880](https://github.com/NousResearch/hermes-agent/issues/40880) | Dashboard 辅助模型槽忽略插件注册的 aux slots |

### 稳定性评估

- **最紧急：** [#8090](https://github.com/NousResearch/hermes-agent/issues/8090)（gateway 启动崩溃，已存在近 2 个月）和 [#40863](https://github.com/NousResearch/hermes-agent/issues/40863)（Telegram 安全漏洞）需要立即关注。
- **好消息：** 多个 P2 bug 已有对应 fix PR 在 review 中（DingTalk、Camofox、model wizard、honcho），显示社区响应速度较快。
- **回归风险：** v0.16.0 大规模变更后，[#40416](https://github.com/NousResearch/hermes-agent/issues/40416)（Telegram compaction UX）和 [#40885](https://github.com/NousResearch/hermes-agent/issues/40885)（Telegram 消息跳动）可能是新引入的回归。

---

## 6. 功能请求与路线图信号

### 新功能需求

| Issue | 方向 | 社区信号 | 实现可能性 |
|---|---|---|---|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) 👍8 | 确定性工作流引擎 | 高赞，解决实际生产痛点 | 🔶 中期 — 架构复杂度高，但需求明确 |
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) | 持久化知识库 + RAG | 长期存在，跨 messenger 平台通用 | 🔶 中期 — 需要存储层重构 |
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | Dreaming 自动记忆整合 | 创新功能，受 OpenClaw 启发 | 🔷 长期 — 概念验证阶段 |
| [#40873](https://github.com/NousResearch/hermes-agent/issues/40873) | OpenAI 兼容 API 音频透传 | 用户已有本地 Ollama + Gemma4 场景 | 🟢 短期 — 与现有 voice chat 功能互补 |
| [#40854](https://github.com/NousResearch/hermes-agent/issues/40854) | TUI 可折叠 verbose 输出 | 调试体验改善 | 🟢 短期 — UI 层改动，成本低 |
| [#40484](https://github.com/NousResearch/hermes-agent/issues/40484) | Desktop 文件树支持删除 | 基础 UX 缺失 | 🟢 短期 — 明确的 UI 增强 |
| [#40717](https://github.com/NousResearch/hermes-agent/issues/40717) | OpenRouter free 模型加入 picker | 小改动，用户需求明确 | 🟢 短期 — 配置列表扩展 |

### 已有 PR 推进的功能

| PR | 功能 | 状态 |
|---|---|---|
| [#40876](https://github.com/NousResearch/hermes-agent/pull/40876) | **Cursor provider 集成** | 待合并 — 扩展模型生态 |
| [#40881](https://github.com/NousResearch/hermes-agent/pull/40881) | **墙钟时间注入** | 待合并 — 改善长会话时间感知 |
| [#40814](https://github.com/NousResearch/hermes-agent/pull/40814) | **Hermes session presence 发现** | 待合并 — TUI 多会话管理 |
| [#40817](https://github.com/NousResearch/hermes-agent/pull/40817) | **DingTalk 主动消息** | 待合并 — 补全平台能力 |

**路线图判断：** 下一版本（v0.16.x）大概率聚焦于：① 多平台消息路由稳定性（Discord/Slack/DingTalk/Telegram）；② 模型提供者管理（Cursor 集成、wizard 修复）；③ macOS 桌面体验（launchd、安装器、路径空格）。确定性工作流引擎和持久化知识库属于更长期的战略方向。

---

## 7. 用户反馈摘要

### 🔴 痛点

1. **开箱即用体验不足：** 多个用户报告新安装后 web 工具静默失败（[#27683](https://github.com/NousResearch/hermes-agent/issues/27683)）、Windows 上 tools wizard 写入损坏配置（[#40840](https://github.com/NousResearch/hermes-agent/issues/40840)），说明初始化流程和跨平台兼容性仍需打磨。

2. **macOS 桌面体验碎片化：** 今日集中出现 macOS 相关问题——路径含空格导致安装失败（[#40820](https://github.com/NousResearch/hermes-agent/issues/40820)）、launchd 域探测错误（[#40831](https://github.com/NousResearch/hermes-agent/issues/40831)）、Dashboard 前端 404（[#39472](https://github.com/NousResearch/hermes-agent/issues/39472)），表明 macOS 桌面客户端是当前的薄弱环节。

3. **Telegram UX 退化：** 用户明确指出 context compaction 导致消息"视觉消失"（[#40416](https://github.com/NousResearch/hermes-agent/issues/40416)）是"terrible UX"，消息跳动（[#40885](https://github.com/NousResearch/hermes-agent/issues/40885)）也造成困扰。

4. **安全顾虑：** Telegram 被移除用户仍可注入 prompt（[#40863](https://github.com/NousResearch/hermes-agent/issues/40863)）是明确的安全漏洞，需要优先修复。

5. **长会话体验：** 系统提示时间戳冻结（[#40881 PR](https://github.com/NousResearch/hermes-agent/pull/40881) 要解决的问题）导致 agent 在跨天会话中说"早上好"实际上是下午 3 点。

### 🟢 满意点

- **社区贡献活跃：** 170 位贡献者参与 v0.16.0，社区自发开发插件（mem0-temporal-hygiene）、翻译文档（韩文 README）、修复多平台问题，生态健康。
- **响应速度：** 多个 bug 在报告当天或次日即有 fix PR 提交（Camofox timeout、model wizard、honcho peer aliases、DingTalk），显示社区维护者响应积极。
- **功能丰富度：** 用户对 Cursor 集成、音频透传、确定性工作流等高级功能的期待，说明 Hermes 已被用于复杂的生产场景。

### 📋 典型使用场景

- **本地 Ollama + 多模型路由**（Gemma4 音频输入、OpenRouter free 模型）
- **多平台消息中枢**（Discord/Slack/Telegram/DingTalk 同时接入）
- **长时间运行的监控/自动化任务**（cron + 主动消息推送）
- **桌面端深度用户**（macOS + Electron Dashboard + TUI）

---

## 8. 待处理积压

### ⚠️ 长期未响应的高优先级 Issue

| Issue | 创建日期 | 严重度 | 等待天数 | 说明 |
|---|---|---|---|---|
| [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) | 2026-04-12 | P1 | **56 天** | gateway 启动崩溃（NameError: RedactingFormatter），有 4 个赞，仍无修复 |
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) | 2026-03-06 | Feature | **93 天** | 持久化知识库，架构级需求，长期无进展 |
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | 2026-04-05 | Feature | **63 天** | 确定性工作流引擎，👍8 最高赞功能请求，无官方回应 |
| [#32217](https://github.com/NousResearch/hermes-agent/issues/32217) | 2026-05-25 | P2 | **13 天** | NVIDIA OpenShell 沙箱中 SSRF 检查误拦截 |

### 📦 积压 PR 风险

当前有 **46 个 PR 待合并**，其中多个是当天提交的高质量 fix。如果 review 速度跟不上，可能导致：
- 修复积压导致同一问题被重复报告
- 社区贡献者因 PR 长期未合并而流失
- v0.16.0 的稳定化补丁无法及时发布

### 💡 建议维护者优先处理

1. **🔴 立即：** [#8090](https://github.com/NousResearch/hermes-agent/issues/8090)（gateway 崩溃，56 天）和 [#40863](https://github.com/NousResearch/hermes-agent/issues/40863)（Telegram 安全漏洞）
2. **🟡 本周：** 合并已就绪的 fix PR（#40882、#40886、#40879、#40817、#40806），发布 v0.16.1 补丁
3. **🟢 本月：** 对 #5354 和 #531 给出官方路线图回应，即使暂不实现也应明确态度

---

> **日报生成时间：** 2026-06-07  
> **数据来源：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
> **项目健康度评分：** ★★★★☆（4/5）— 迭代活跃、社区健康，但积压的 P1 bug 和 macOS 体验问题拉低评分

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-06-07

---

## 1. 今日速览

PicoClaw 今日活跃度处于**高位**：过去 24 小时内 Issues 更新 12 条（10 条新开/活跃，2 条关闭），PR 更新 18 条（15 条已合并/关闭，3 条待合并），并发布了 nightly 构建版本。项目整体呈现**密集维护期**特征——大量防御性修复（nil guard、type assertion、goroutine leak）集中合并，同时社区涌现出一批以 `jcafeitosa` 为首的新系列 Issues（EXM/EX/RG 编号），疑似围绕**交易所交易基础设施**的新功能模块规划。Windows 平台 QQ 通道连接失败的 Bug 报告值得重点关注。

---

## 2. 版本发布

### Nightly Build — `v0.2.9-nightly.20260606.89ee8f1b`

- **类型**：自动化 nightly 构建，**非稳定版本**，请谨慎用于生产环境。
- **变更范围**：包含 `v0.2.9` 至今 `main` 分支的全部增量提交。
- **迁移注意事项**：无显式破坏性变更说明，但因涵盖大量防御性修复（见 §3），建议在 staging 环境充分测试后再升级。
- **链接**：[Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

---

## 3. 项目进展

今日合并/关闭的 PR 共 **15 条**，可归纳为以下几个方向：

### 🔧 防御性修复集中合并（chengzhichao-xydt 系列，6 条）

| PR | 内容摘要 |
|---|---|
| [#3014](https://github.com/sipeed/picoclaw/pull/3014) / [#3016](https://github.com/sipeed/picoclaw/pull/3016) | 修复 `Manager.Reload()` 中旧 `dispatchTask` context 未取消导致的 **goroutine 泄漏** |
| [#3021](https://github.com/sipeed/picoclaw/pull/3021) | 修复 `GetStartupInfo()` 返回空 map 时 nil agent 导致的 **panic** |
| [#3022](https://github.com/sipeed/picoclaw/pull/3022) | 为 `sync.Map` 的 `Load`/`LoadAndDelete` 添加 **ok 检查**，覆盖 Slack、Windows、飞书三个通道 |
| [#3023](https://github.com/sipeed/picoclaw/pull/3023) | 修复 updater 解压函数中 `Close()` 错误被静默忽略的问题（可能导致**文件损坏**） |
| [#3017](https://github.com/sipeed/picoclaw/pull/3017) | 修复 `encodeMediaFile` 中 base64 encoder 在 `io.Copy` 错误路径未关闭的问题 |
| [#3019](https://github.com/sipeed/picoclaw/pull/3019) | WhatsApp 通道 type-switch 优化 + config 敏感信息过滤 nil guard + `LastInsertId` 错误检查 |

> **评估**：这批修复质量较高，覆盖了 goroutine 泄漏、panic、静默数据损坏等**稳定性隐患**，显著提升了项目健壮性。

### 📋 其他重要合并

| PR | 内容摘要 |
|---|---|
| [#3020](https://github.com/sipeed/picoclaw/pull/3020) | Slack 工具反馈追踪与消息格式化改进 + 通道级路由过滤 |
| [#2965](https://github.com/sipeed/picoclaw/pull/2965) | 修复 `restrict_to_workspace` 开启时，exec 工具将 scheme-less URL（如 `wttr.in/Beijing`）误判为绝对路径的问题 |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) | `AGENT.md` frontmatter 支持 `allow`/`deny` 策略对象和 glob 模式过滤工具与 MCP 服务器 |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | 统一 providers 文档中的 vendors 表格，减少冗余信息 |
| [#3013](https://github.com/sipeed/picoclaw/pull/3013) | 移除 skill-creator 中不存在的 helper 脚本引用，替换为 PicoClaw 兼容的手动创建流程 |
| [#1112](https://github.com/sipeed/picoclaw/pull/1112) | 为 modelscope.cn 添加 `deepseek-ai/` 协议前缀支持 |
| [#2711](https://github.com/sipeed/picoclaw/pull/2711) | 修复前端复制按钮在 HTTP（非安全上下文）环境下的异常 |
| [#830](https://github.com/sipeed/picoclaw/pull/830) | 新增 Google Chat 通道支持 |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | 基础多智能体协作框架（Blackboard 共享上下文、agent handoff、发现工具）— WIP 阶段关闭 |

---

## 4. 社区热点

### 🔥 Issue #2625 — 请求提供含 WhatsApp 支持的预编译构建
- **链接**：[sipeed/picoclaw#2625](https://github.com/sipeed/picoclaw/issues/2625)
- **互动**：8 条评论，1 个 👍，已关闭（stale）
- **诉求分析**：用户在 Raspberry Pi Zero 2 上使用 PicoClaw + WhatsApp，但默认 arm64 构建未包含 WhatsApp 支持，导致每次更新后需自行编译，体验极差。这反映了**边缘设备用户对预编译多架构二进制**的强烈需求。该 Issue 因 stale 被关闭，但核心诉求未解决，可能需要在 CI/CD 流程中增加带 WhatsApp 支持的构建变体。

### 🔥 Issue #2929 — Agent-to-Agent 一等通信层
- **链接**：[sipeed/picoclaw#2929](https://github.com/sipeed/picoclaw/issues/2929)
- **互动**：3 条评论，2 个 👍，已关闭（stale）
- **诉求分析**：用户提出 PicoClaw 已支持多 agent 工作空间，但缺少对等的 agent 间通信层（peer-to-peer），现有 `spawn`/`subagent`/`delegate` 是单向调用模式。这与 PR #423（多智能体协作框架）方向一致，但后者仍处于 WIP 阶段已关闭。**多智能体协作**是社区明确的路线图方向，需要维护者重新激活相关讨论。

### 📌 新系列 Issues — 交易所交易基础设施（jcaefaitosa，8 条）
- **链接**：[#3024](https://github.com/sipeed/picoclaw/issues/3024) → [#3032](https://github.com/sipeed/picoclaw/issues/3032)
- **特点**：编号 EX-001~005 / EXM-001~003 / RG-001，均创建于 2026-06-06，遵循 SDD 规范，要求 TDD 开发
- **内容**：Exchange 接口定义、Binance REST/WebSocket 连接器、无锁 order book ring buffer、延迟基准测试、风险管理接口、ClawHub 消息类型、CLI 结构、CI/CD 流水线
- **分析**：这是一套**完整的加密货币交易所交易模块**规划，从底层接口到 CLI 到 CI/CD 一应俱全。如果被采纳，将标志着 PicoClaw 从纯 AI 助手向**交易智能体平台**扩展。但目前全部 Issue 零评论零互动，需观察维护者态度。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Bug | 状态 | Fix PR |
|---|---|---|
| **Windows QQ 通道 token 获取超时** — `picoclaw gateway` 在 Windows 上启动 QQ 通道时，从 `bots.qq.com` 获取 app access token 超时，Pico 通道正常 | [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) 新开，待处理 | ❌ 尚无 |
| **goroutine 泄漏** — `Manager.Reload()` 重加载通道时旧 dispatch goroutine 无限运行 | 已修复 | ✅ PR [#3014](https://github.com/sipeed/picoclaw/pull/3014) / [#3016](https://github.com/sipeed/picoclaw/pull/3016) 已合并 |

### 🟡 中优先级

| Bug | 状态 | Fix PR |
|---|---|---|
| **nil agent panic** — `GetStartupInfo()` 返回空 map 时 type assertion 崩溃 | 已修复 | ✅ PR [#3021](https://github.com/sipeed/picoclaw/pull/3021) 已合并 |
| **静默文件损坏** — updater 解压时 `Close()` 失败被忽略 | 已修复 | ✅ PR [#3023](https://github.com/sipeed/picoclaw/pull/3023) 已合并 |
| **exec 工具误拦截 scheme-less URL** — `restrict_to_workspace` 开启时 `curl wttr.in` 被误判为路径遍历 | 已修复 | ✅ PR [#2965](https://github.com/sipeed/picoclaw/pull/2965) 已合并 |

### 🟢 低优先级

| Bug | 状态 | Fix PR |
|---|---|---|
| **前端复制按钮 HTTP 环境异常** | 已修复 | ✅ PR [#2711](https://github.com/sipeed/picoclaw/pull/2711) 已合并 |
| **base64 encoder 错误路径未关闭** | 已修复 | ✅ PR [#3017](https://github.com/sipeed/picoclaw/pull/3017) 已合并 |

---

## 6. 功能请求与路线图信号

| 方向 | 信号强度 | 依据 |
|---|---|---|
| **交易所/交易智能体基础设施** | ⭐⭐⭐⭐⭐ | 8 条规划级 Issues 集中创建，含完整 SDD 规范，覆盖从接口到 CLI 到 CI/CD 的全栈设计 |
| **多智能体协作框架** | ⭐⭐⭐ | Issue #2929（2 👍）+ PR #423（WIP 关闭），社区需求明确但实现尚未落地 |
| **WhatsApp 预编译构建** | ⭐⭐⭐ | Issue #2625（8 评论，1 👍），边缘设备用户痛点，需 CI/CD 层面解决 |
| **Agent 工具策略精细化** | ⭐⭐ | PR #2838 已合并（frontmatter allow/deny），功能已在落地中 |
| **Slack 通道增强** | ⭐⭐ | PR #3020 已合并，持续迭代中 |
| **新通道支持** | ⭐ | Google Chat（PR #830）已合并；ModelScope DeepSeek 协议（PR #1112）已合并 |

**判断**：下一版本（v0.2.10 或 v0.3.0）大概率会包含交易所交易模块的初始实现（如果维护者认可该方向），以及多智能体通信层的重新激活。

---

## 7. 用户反馈摘要

### 😤 痛点

- **边缘设备更新困难**：Raspberry Pi Zero 2 用户因默认构建不含 WhatsApp 支持，每次更新需自行编译（Issue #2625）。这暴露了 PicoClaw 在**多架构预编译分发**上的不足。
- **Windows 平台体验差**：QQ 通道在 Windows 上完全无法启动（Issue #3015），而 Pico 通道正常，说明 QQ 通道的 token 获取流程可能存在平台兼容性问题。
- **Agent 间协作能力不足**：用户已尝试使用多 agent 工作空间，但缺少对等通信机制，只能依赖单向的 spawn/delegate（Issue #2929）。

### 😊 满意点

- **防御性修复响应迅速**：chengzhichao-xydt 系列 PR 在一天内集中合并，覆盖了 goroutine 泄漏、panic、静默数据损坏等深层问题，体现了维护者对**稳定性**的高度重视。
- **工具策略精细化**：PR #2838 合并后，用户可通过 `AGENT.md` frontmatter 使用 glob 模式精细控制工具权限，满足了高级用户的**安全策略**需求。

### 📋 使用场景

- **Raspberry Pi Zero 2 + WhatsApp**：边缘设备部署，资源受限环境
- **多 Agent 协作工作流**：需要 agent 间对等通信的复杂任务编排
- **加密货币交易智能体**：Binance 连接器 + 低延迟 order book + 风险管理（新兴场景）

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| 项目 | 类型 | 等待时间 | 建议行动 |
|---|---|---|---|
| **Issue #3015** — Windows QQ 通道连接失败 | Bug | 1 天（新开） | 高优先级排查，Windows 平台用户受影响 |
| **Issue #2625** — WhatsApp 预编译构建请求 | Feature | 45 天（stale 关闭） | 重新评估，考虑在 CI 中增加带 WhatsApp 的构建变体 |
| **Issue #2929** — Agent-to-Agent 通信层 | Feature | 15 天（stale 关闭） | 与 PR #423 关联，需明确路线图规划 |
| **PR #2935** — 繁体中文 (zh-TW) 本地化 | Docs | 13 天（stale） | 低优先级，但社区贡献者等待 review |
| **PR #3016** — goroutine 泄漏修复（重复 PR） | Bug Fix | 待合并 | 与 #3014 内容重复，需确认是否仍需合并 |
| **PR #3018** — type assertion + os.Getwd 错误处理 | Bug Fix | 待合并 | 防御性修复，建议尽快 review |
| **交易所模块规划 Issues** (#3024-#3032) | Feature | 1 天 | 8 条新 Issues 等待维护者回应，需确认是否纳入路线图 |

---

> **项目健康度评估**：🟢 **健康**。今日 PR 合并效率高，防御性修复密集落地，社区贡献活跃。主要风险点在于 Windows 平台兼容性（#3015）和交易所模块规划的方向性决策需要维护者尽快表态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-06-07

---

## 1. 今日速览

NanoClaw 今日活跃度**极高**，共处理 15 条更新（1 条 Issue + 14 条 PR），其中 11 条 PR 待合并、3 条已关闭，无新版本发布。项目正处于密集迭代期，贡献者集中在 **Slack 适配器架构迁移**（HTTP Webhook → Socket Mode）、**Signal 适配器 Bug 修复**、**技能库可维护性升级**以及 **CLI/容器运行器健壮性**四个方向。整体来看，项目健康度良好，社区贡献活跃，但积压 PR 数量偏高（多条超过 30 天），需要维护者加快 Review 节奏。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 3 条 PR 均具有实质推进意义：

| PR | 状态 | 核心贡献 |
|---|---|---|
| [#2698](https://github.com/nanocoai/nanoclaw/pull/2698) Skills conformance: exemplars + fleet retrofit | **CLOSED** | 对整个技能库进行"可升级性"改造——每个技能需符合统一模型（最小化侵入式集成、功能集成点测试、幂等删除 `REMOVE.md`、去除 `VERIFY.md`），不达标的技能将被退役或重写。这是项目长期可维护性的基础设施级工作。 |
| [#2696](https://github.com/nanocoai/nanoclaw/pull/2696) feat(add-dashboard): make the skill conformant | **CLOSED** | 作为技能可升级性模型的第一个范例（exemplar），在改造过程中发现了静默漂移：pusher 引用了 5 个已迁移到 `src/modules/` 的 DB 模块，导致新用户在当前版本下无法构建。修复导入路径并添加了进程内集成测试。 |
| [#2697](https://github.com/nanocoai/nanoclaw/pull/2697) feat(host): single-instance lock to prevent duplicate messages | **CLOSED** | 解决了一个影响用户体验的关键稳定性问题：当两个 host 进程同时运行（如手动 `pnpm run dev` 与服务并存），agent 会发送重复消息。通过引入单实例锁机制彻底消除此问题。 |

**整体评估：** 项目在技能架构规范化和核心稳定性两个维度同时推进，尤其是技能可维护性框架的建立，为后续社区贡献的质量控制奠定了基础。

---

## 4. 社区热点

今日所有 Issue 和 PR 评论数均为 0，尚未形成集中讨论。但以下 PR 因涉及面广、影响面大，值得重点关注：

- **[#2702](https://github.com/nanocoai/nanoclaw/pull/2702) fix(slack): switch adapter to Socket Mode** — 将 Slack 适配器从 HTTP Webhook 模式迁移到 Socket Mode，消除了对公网可达 URL 的依赖，大幅降低自托管用户的部署门槛。
- **[#2700](https://github.com/nanocoai/nanoclaw/pull/2700) fix(skill/add-slack): switch to Socket Mode setup** — 配套更新 `/add-slack` 技能文档，引导用户完成 Socket Mode 配置流程。
- **[#2698](https://github.com/nanocoai/nanoclaw/pull/2698) Skills conformance** — 技能库全面规范化改造，影响所有现有技能。

**背后诉求：** 社区对 **降低部署复杂度**（Socket Mode 消除公网 URL 需求）和 **技能生态长期可维护性**（统一规范防止漂移）有强烈需求。

---

## 5. Bug 与稳定性

### 严重（影响核心功能）

| 问题 | 来源 | 状态 |
|---|---|---|
| **Signal 适配器静默丢弃 DM 消息** — `isMention`/`isGroup` 未在 InboundMessage 上设置，导致路由器无法为 Signal DM 创建 `messaging_group` | [#2694](https://github.com/nanocoai/nanoclaw/pull/2694) | ✅ **已有 Fix PR**（OPEN，待合并） |
| **Signal 图片附件容器不可读** — Signal 适配器暴露的是宿主机路径，容器内无法访问 | [#2695](https://github.com/nanoclaw/nanoclaw/pull/2695) | ✅ **已有 Fix PR**（OPEN，待合并） |
| **双 host 进程导致重复消息** | — | ✅ **已修复并合并** [#2697](https://github.com/nanocoai/nanoclaw/pull/2697) |

### 中等（影响特定场景）

| 问题 | 来源 | 状态 |
|---|---|---|
| **`ncl groups restart --rebuild` 在空包配置时报错** — 当 `packages_apt` 和 `packages_npm` 均为空时，rebuild 命令失败并提示 "No packages to install"，而普通 restart 正常 | [#2701](https://github.com/nanocoai/nanoclaw/issues/2701) | ⚠️ **无 Fix PR** |
| **CLI 生成纯数字开头 UUID 导致 OneCLI 报错** — `crypto.randomUUID()` 生成的 ID 直接作为 agent 标识符传给 OneCLI，字母开头要求未满足 | [#2699](https://github.com/nanocoai/nanoclaw/pull/2699) | ✅ **已有 Fix PR**（OPEN，待合并） |

### 低（边缘场景）

| 问题 | 来源 | 状态 |
|---|---|---|
| **poll-loop 中 send_message 触发时重复文本** | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | ✅ Fix PR 存在（OPEN，已超 20 天） |
| **stale session 时错误信息直接展示给用户** | [#2184](https://github.com/nanocoai/nanoclaw/pull/2184) | ✅ Fix PR 存在（OPEN，已超 35 天） |
| **rootless Podman 用户映射问题** | [#2230](https://github.com/nanocoai/nanoclaw/pull/2230) | ✅ Fix PR 存在（OPEN，已超 34 天） |
| **mount 安全 allowlist 缺少 path 字段时崩溃** | [#2349](https://github.com/nanocoai/nanoclaw/pull/2349) | ✅ Fix PR 存在（OPEN，已超 30 天） |

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 判断 |
|---|---|---|
| **MCP 传输协议扩展** — 支持 HTTP 和 SSE 传输 | [#2208](https://github.com/nanocoai/nanoclaw/pull/2208) | PR 已存在但长期未合并（>35 天），说明维护者可能尚未排期，但需求明确 |
| **Google Contacts 集成** — 新增 `/add-google-contacts-tool` 技能 | [#2693](https://github.com/nanocoai/nanoclaw/pull/2693) | 作为 Gmail/GCalendar 工具的姊妹集成，符合项目扩展办公工具链的方向，合并概率较高 |
| **Slack Socket Mode 全面迁移** | [#2702](https://github.com/nanocoai/nanoclaw/pull/2702) + [#2700](https://github.com/nanocoai/nanoclaw/pull/2700) | 同一作者同日提交配套 PR，意图明确，预计近期合并 |
| **技能库可维护性框架** | [#2698](https://github.com/nanocoai/nanoclaw/pull/2698) | 已合并，将成为后续所有技能 PR 的准入标准 |

---

## 7. 用户反馈摘要

今日仅 1 条新 Issue，反馈内容具体且场景清晰：

- **用户痛点：** `ncl groups restart --rebuild` 在空包配置下报错 [#2701](https://github.com/nanocoai/nanoclaw/issues/2701)。用户明确指出"我使用的 group 没有任何特殊配置"，说明这是一个**默认路径下的回归 Bug**，影响所有不配置额外包的用户。用户期望的行为是"rebuild 应在无包配置时跳过包安装步骤"，这是一个合理的预期。

从 PR 描述中可提炼的间接用户反馈：
- **Signal 用户**遭遇 DM 消息丢失和图片无法查看的问题（[#2694](https://github.com/nanocoai/nanoclaw/pull/2694)、[#2695](https://github.com/nanocoai/nanoclaw/pull/2695)），说明 Signal 渠道的用户体验存在明显缺口。
- **自托管用户**因 Slack HTTP Webhook 需要公网 URL 而部署困难（[#2702](https://github.com/nanocoai/nanoclaw/pull/2702)），Socket Mode 迁移将直接解决此痛点。
- **开发者**在同时运行 dev 服务和服务实例时遭遇重复消息（[#2697](https://github.com/nanocoai/nanoclaw/pull/2697)），这是开发体验问题。

---

## 8. 待处理积压

以下 PR 已开放超过 30 天，均有实际修复价值，建议维护者尽快安排 Review：

| PR | 开放天数 | 内容 | 建议优先级 |
|---|---|---|---|
| [#2184](https://github.com/nanocoai/nanoclaw/pull/2184) | **35 天** | stale session 时错误信息直接展示给用户 | 🔴 高（影响用户体验） |
| [#2208](https://github.com/nanocoai/nanoclaw/pull/2208) | **34 天** | MCP HTTP/SSE 传输支持 | 🟡 中（功能扩展） |
| [#2230](https://github.com/nanocoai/nanoclaw/pull/2230) | **34 天** | rootless Podman 用户映射 | 🟡 中（平台兼容性） |
| [#2349](https://github.com/nanocoai/nanoclaw/pull/2349) | **30 天** | mount 安全 allowlist 容错 | 🟡 中（健壮性） |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | **20 天** | poll-loop 重复文本 | 🟢 低（边缘场景） |

**Issue 积压：** [#2701](https://github.com/nanocoai/nanoclaw/issues/2701) 目前无 Fix PR，建议确认后标记 `good first issue` 或直接修复。

---

> **日报总结：** NanoClaw 今日处于高产出迭代期，核心贡献集中在架构规范化（技能可维护性框架）和渠道适配器修复（Slack/Signal）。项目整体健康度良好，但积压 PR 的 Review 速度是主要瓶颈——5 条超过 30 天的 PR 均有实际价值，建议维护者在本周集中处理。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-07

---

## 1. 今日速览

IronClaw 今日活跃度**极高**：过去 24 小时内共处理 **32 个 PR**（22 个待合并，10 个已合并/关闭），Issue 更新 2 条。项目正处于 **Reborn 架构大规模落地阶段**，核心贡献者（serrrfirat、henrypark133、hanakannzashi）密集提交涵盖 Slack 路由、WebChat v2、OpenAI 兼容层、扩展生命周期 E2E 等关键路径的 PR。无新版本发布，但多个破坏性变更的 release PR（#3708）仍在开放中。Nightly E2E 持续失败（Issue #4108），是需重点关注的稳定性隐患。

---

## 2. 版本发布

**无新版本发布。**

⚠️ 注意：PR #3708 `[chore: release]` 仍处于 OPEN 状态，包含以下破坏性变更：
- `ironclaw_common`: 0.4.2 → **0.5.0**（⚠ API breaking changes）
- `ironclaw_skills`: 0.3.0 → **0.4.0**（⚠ API breaking changes）
- `ironclaw`: 0.24.0 → **0.29.1**

该 release PR 自 2026-05-16 创建至今已超 3 周，建议维护者尽快推进合并或明确阻塞原因。

---

## 3. 项目进展

今日合并/关闭的 PR 共 **10 个**，以下为最重要的几项：

| PR | 状态 | 说明 |
|---|---|---|
| **#4520** | ✅ 已合并 | CI 优化：将 Reborn-only PR 从 legacy 测试中隔离，改为动态发现 `reborn_*.rs` 目标，提升 CI 精准度和效率 |
| **#4509** | ✅ 已合并 | **Slack 频道主体路由**：为 product workflow 添加 conversation route keys，使共享路由可选择频道特定主体用户，Slack host-beta 频道路由配置完成 |
| **#4508** | ✅ 已合并 | **重复调用门控优化**：将重复能力调用签名从立即停止改为两阶段警告门控，持久化警告状态并在停止前向模型发送可见的循环控制警告 |
| **#4486 / #4485** | ✅ 已合并 | **子代理 + 压缩统一设计文档**：新增 `docs/reborn/2026-06-04-subagent-compaction-design.md`，定义 `PostCapabilityStage` 作为后能力/前提示接缝的唯一所有者 |

**整体推进评估：** Reborn 架构的核心路由层（Slack、WebChat v2、OpenAI 兼容）正在快速成型，CI/CD 基础设施同步优化。项目处于从"功能搭建"向"集成测试+稳定性"过渡的关键节点。

---

## 4. 社区热点

今日评论数均为 0（数据中 `undefined`），以下按**技术影响范围**排列最受关注的开放 PR：

| PR | 作者 | 摘要 |
|---|---|---|
| **#4489** | hanakannzashi | **OpenAI 兼容产品引用**：添加类型化不透明 OpenAI 兼容公共引用（`chatcmpl-*`、`resp_*`）及 actor 作用域内部映射，含幂等性重放/冲突处理 |
| **#4495** | hanakannzashi | **Chat Completions 路由至 ProductWorkflow**：将非流式 `POST /v1/chat/completions` 从 v1 网关/直接 LLM 代理迁移到 ProductWorkflow 支持的 Reborn API 切片 |
| **#4511** | henrypark133 | **出站偏好外观合约**：Phase 1 出站交付偏好合约，通过 `RebornServicesApi` 接线 `OutboundPreferencesProductFacade` |
| **#4186** | serrrfirat | **本地开发审批门控**：添加本地开发审批感知授权器，将效应性内置能力调度/生成调用转换为审批门控 |
| **#4523** | matiasbenary | **host_api 系统哨兵往返修复**：修复 `TenantId`/`UserId` 反序列化拒绝 `\x1fSYSTEM\x1f` 哨兵的问题，此前导致 LLM settings API 失败 |

**分析：** 社区核心诉求集中在三点：(1) **OpenAI 兼容性**——用户期望 IronClaw 能无缝替代/代理 OpenAI API；(2) **Reborn 路由基础设施**——多频道（Slack、WebChat、CLI）统一路由是架构演进的核心；(3) **本地开发体验**——审批门控和配置种子化反映开发者对本地调试便利性的强烈需求。

---

## 5. Bug 与稳定性

### 🔴 高优先级

**Issue #4108 — Nightly E2E 持续失败**
- 状态：OPEN，自 2026-05-27 起持续失败
- 失败任务：Full E2E / E2E (extensions)
- 链接：[nearai/ironclaw Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
- **影响：** 夜间端到端测试持续失败超过 10 天，意味着主分支可能存在未被发现的回归。这是当前项目健康的最大隐患。
- **已有 fix PR：** 未见直接关联的修复 PR。PR #4520（已合并）改进了 CI 范围判定，但非直接修复 E2E 失败根因。

### 🟡 中优先级

**PR #4523 — host_api 系统哨兵反序列化不对称**
- 状态：OPEN（新提交，2026-06-06）
- 问题：`TenantId`/`UserId` 序列化与反序列化路径验证不对称，导致 `ResourceScope::system()` 使用的 `\x1fSYSTEM\x1f` 哨兵被拒绝，LLM settings API（`/api/webchat/v2/llm/*`）返回 `service_unavailable`
- **已有 fix PR：** 即 #4523 本身，等待审查合并
- 链接：[nearai/ironclaw PR #4523](https://github.com/nearai/ironclaw/pull/4523)

### 🟢 低优先级

**Issue #3805 — Notion MCP 能力路径实现**
- 状态：CLOSED（2026-06-06 关闭）
- 摘要：作为 Reborn Lane 5 的一部分，实现 Notion 作为第一个可在能力目录中发现的具体 MCP 工具包
- 链接：[nearai/ironclaw Issue #3805](https://github.com/nearai/ironclaw/issues/3805)

---

## 6. 功能请求与路线图信号

从当前 PR 和 Issue 判断，以下功能极有可能纳入下一版本：

| 方向 | 信号 | 对应 PR/Issue |
|---|---|---|
| **OpenAI 完整兼容层** | 两个大型 PR（#4489、#4495）正在构建 OpenAI 兼容引用存储和 chat completions 路由 | #4489, #4495 |
| **Slack 频道管理** | Slack 路由（#4509 已合并）+ Slack 管理 wiring（#4510 开放）+ WebChat v2 线程删除（#4516） | #4510, #4516 |
| **出站交付偏好** | Phase 1 合约已提交（#4511），为多渠道消息投递偏好奠定基础 | #4511 |
| **扩展生命周期管理** | E2E 覆盖 PR（#4518）正在为扩展搜索/安装/激活/删除添加 QA 冒烟测试 | #4518 |
| **子代理与上下文压缩** | 设计文档已合并（#4486/#4485），`PostCapabilityStage` 架构已定义，实现 PR 预计近期出现 | #4486 |
| **Notion MCP 集成** | Issue #3805 已关闭，表明 Notion MCP 能力路径已实现或重新规划 | #3805 |

---

## 7. 用户反馈摘要

今日 Issue 和 PR 评论数均为 0，无直接用户评论可供分析。从 Issue/PR 标题和摘要中可间接推断：

- **痛点：** Nightly E2E 持续失败（#4108）反映自动化测试覆盖的脆弱性，可能影响开发者对主干稳定性的信心。
- **使用场景：** WebChat v2 会话能力端点（#4519）、线程删除（#4516）、Slack 频道路由（#4509/#4510）表明用户正在将 IronClaw 作为**多频道 AI 代理平台**使用，需要完整的会话管理和频道配置能力。
- **开发者体验：** 配置种子化（#4517）、本地开发审批门控（#4186）、CI 范围优化（#4520）显示核心团队在**刻意改善本地开发体验**，这是开源项目留存贡献者的关键。

---

## 8. 待处理积压

以下长期开放的 Issue/PR 需维护者关注：

| 项目 | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| **Issue #4108** — Nightly E2E failed | 2026-05-27 | OPEN (11天) | 夜间 E2E 持续失败超过 10 天，无修复 PR，**建议最高优先级排查** |
| **PR #3708** — chore: release | 2026-05-16 | OPEN (22天) | 包含 `ironclaw_common` 和 `ironclaw_skills` 的破坏性变更，阻塞 0.29.1 发布 |
| **PR #4002** — dependabot: bump actions (16 updates) | 2026-05-24 | OPEN (14天) | GitHub Actions 依赖批量升级，含 checkout v4→v6 大版本跳跃，需验证兼容性 |
| **PR #3981** — test: cover runtime HTTP redaction markers | 2026-05-24 | OPEN (14天) | 安全相关测试覆盖，涉及敏感头部分类 |
| **PR #4186** — Wire local-dev approval gates | 2026-05-28 | OPEN (10天) | 大型 PR，本地开发审批门控核心功能 |

---

> **项目健康度总评：** 🔶 **良好但需关注稳定性**
>
> - **开发活跃度：** 极高，Reborn 架构多线并进
> - **代码审查速度：** 较快，今日合并 10 个 PR
> - **稳定性风险：** ⚠️ Nightly E2E 持续失败超过 10 天，是最大隐患
> - **发布节奏：** ⚠️ Release PR 阻塞超 3 周，破坏性变更积压
> - **社区参与：** 核心贡献者活跃，但外部互动（评论/反应）偏低

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-06-07

---

## 1. 今日速览

过去 24 小时内，LobsterAI 项目活跃度处于**中等偏低**水平：共产生 6 条 Issue 更新（全部为存量 Issue 的新评论或状态变动，无新开 Issue）和 2 条 PR 更新（均已关闭/合并）。无新版本发布。整体来看，社区讨论集中在**用户体验缺陷（弹窗未保存确认、任务中断）和功能增强建议**上，维护者对积压 PR 进行了集中处理，但多个 stale Issue 仍未得到实质性响应。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日有 2 个 PR 完成合并/关闭，均涉及此前积压的功能开发：

| PR | 状态 | 核心内容 |
|---|---|---|
| [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) feat(cowork): 批量模式新增导出功能 | **已合并** | 在批量模式下新增导出按钮，支持将选中会话批量导出为结构化 JSON 文件。后端新增 `cowork:session:exportBatch` IPC 处理器，包含完整会话元数据和消息序列化。 |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) feat(scheduledTask): 多Agent状态下支持新建任务选择归属 Agent | **已合并** | 解决了定时任务归属 Agent 不透明的问题。当启用 Agent 数量 > 1 时，新建任务界面新增 Agent 选择器，默认选中 main Agent，用户可切换。 |

**评估：** 这两个 PR 均创建于 2026-04-07，历经近 2 个月后完成合并，说明维护者正在清理积压的功能分支。批量导出功能提升了数据可移植性，Agent 归属选择器则改善了多 Agent 场景下的可用性——两者都是对用户体验的实质性推进。

---

## 4. 社区热点

### 🔥 Issue [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) — 综合功能建议（今日新开）

**作者：** nbjoe | **评论：** 1 | **👍：** 0

这是今日唯一的新开 Issue，用户提出了三点建议：
1. **任务队列预输入**：借鉴 Workbuddy 的任务存储机制，在 Claw 运行当前任务时允许预输入后续任务，提升连续性。
2. **延长单次任务运行时长**：用户在进行数据获取脚本监控时遇到 `terminated` 提示，脚本仍在运行但监控已停止。
3. **技能界面 UI 调整**：在 2560×1600 全屏下双列展示不佳，建议改为三列。

**分析：** 该用户显然是一个重度使用者，涉及任务编排、长时间运行任务监控和高分辨率适配三个不同维度。其中第 2 点（任务超时中断）与 Issue [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) 和 [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) 形成呼应，说明**任务生命周期管理**是当前用户最集中的痛点。

### 📌 Issue [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) — 无缘无故中断进程（👍 1，今日有更新）

**作者：** xuzhiwu123 | **评论：** 1 | **👍：** 1

用户频繁遇到进程中断提示，质疑是客户端问题还是大模型问题。这是今日所有 Issue 中唯一获得 👍 的反应，说明该问题具有较广泛的影响面。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) | 任务显示完成但无返回结果 | 无 |
| 🔴 高 | [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) | 进程无缘无故中断 | 无 |
| 🟡 中 | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) | 创建 Agent 弹窗关闭时无未保存确认 | 无 |
| 🟡 中 | [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) | Agent 设置面板关闭时无未保存确认 | 无 |
| 🟡 中 | [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) | MCP 服务器配置弹窗关闭时无未保存确认 | 无 |

**关键发现：**
- **任务生命周期问题**（#1495、#1496）是影响用户核心工作流的严重 Bug，且均已被标记为 stale，说明长期未得到修复。
- **三个弹窗未保存确认 Bug**（#1468、#1469、#1470）由同一作者 MaoQianTu 在 4 月 4 日集中提交，模式高度一致——均涉及 Modal 关闭时缺少脏数据检测。值得注意的是，MaoQianTu 的 PR #1529 今日已被合并，说明该贡献者活跃但其提交的 Bug 报告仍未被处理。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 |
|---|---|---|
| 任务队列预输入（运行中可排队下一任务） | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 待评估 |
| 延长任务运行超时/支持长时间监控 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 待评估 |
| 技能界面三列布局适配高分屏 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 待评估 |
| 批量导出会话为 JSON | PR [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) | ✅ 已合并 |
| 定时任务归属 Agent 选择 | PR [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) | ✅ 已合并 |

**路线图判断：** 从 PR #1529 和 #1530 的合并来看，维护者近期在推进**数据导出**和**多 Agent 管理**两条线。Issue #2120 中提出的任务队列预输入和超时问题与当前路线图中"任务管理"方向高度契合，有较大概率被纳入下一版本规划。

---

## 7. 用户反馈摘要

**核心痛点：**
- **任务可靠性存疑**：多位用户反映任务状态异常——要么显示完成但无输出（#1496），要么进程莫名中断（#1495），要么监控提前终止（#2120）。这表明任务执行与状态同步机制存在系统性问题。
- **数据丢失焦虑**：三个弹窗未保存确认的 Bug（#1468、#1469、#1470）让用户在配置 Agent 和 MCP 服务器时缺乏安全感，尤其是涉及 API Key 等敏感配置时。
- **多 Agent 场景体验待完善**：用户已经在使用多 Agent 工作流，但归属不透明（已通过 PR #1530 改善），且需要更灵活的任务编排能力。

**使用场景画像：**
- 数据获取/爬虫脚本的长时间监控（#2120）
- 多 Agent 协作的复杂工作流（#2120、PR #1530）
- 批量会话管理与数据导出（PR #1529）

---

## 8. 待处理积压

以下 Issue 长期未获响应，建议维护者优先关注：

| Issue | 创建日期 | 停滞天数 | 优先级建议 |
|---|---|---|---|
| [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) 任务显示完成但无返回 | 2026-04-07 | 61 天 | 🔴 最高 — 核心功能异常 |
| [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) 进程无缘无故中断 | 2026-04-07 | 61 天 | 🔴 最高 — 核心功能异常 |
| [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) 创建Agent弹窗未保存确认 | 2026-04-04 | 64 天 | 🟡 高 — 用户体验 |
| [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) Agent设置面板未保存确认 | 2026-04-04 | 64 天 | 🟡 高 — 用户体验 |
| [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) MCP配置弹窗未保存确认 | 2026-04-04 | 64 天 | 🟡 高 — 用户体验 |

**特别提醒：** #1468、#1469、#1470 三个 Bug 模式完全一致（Modal 缺少脏数据检测），理论上可以用统一的 `useUnsavedChanges` hook 一次性修复三个问题，建议合并处理。#1495 和 #1496 涉及任务执行核心链路，已停滞超过 2 个月，建议尽快排查是客户端超时配置问题还是大模型流式返回异常。

---

*数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 报告生成时间：2026-06-07*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：2026-06-07 | 数据来源：github.com/moltis-org/moltis**

---

## 1. 今日速览

过去 24 小时内，Moltis 项目共产生 **3 条新 Issue**，无 PR 活动，无新版本发布。社区活跃度处于**低位**——全部 3 条 Issue 均于昨日（2026-06-06）集中创建，且截至报告时均处于 OPEN 状态，尚无维护者响应。项目当前无代码合并或版本推进，整体处于**静默期**，但用户侧的 bug 报告和功能诉求仍在持续输入，积压风险值得关注。

---

## 2. 版本发布

过去 24 小时内无新版本发布，本节省略。

---

## 3. 项目进展

过去 24 小时内无 PR 合并或关闭，项目代码层面无实质性推进。

---

## 4. 社区热点

今日 3 条 Issue 中，**Issue #1112** 是唯一已有评论互动的帖子（1 条评论），也是社区关注度相对最高的议题：

- **[#1112 [Bug] Disabling auth doesn't seem to disable auth (Docker)](https://github.com/moltis-org/moltis/issues/1112)** — 用户 `methompson` 报告在 Docker 环境下关闭认证（auth）后认证机制仍未失效。该问题直接关系到**部署安全性**，属于高优先级关注项。已有 1 条评论，说明至少一位社区成员正在跟进，但尚无维护者正式回应。

其余两条 Issue（#1111、#1110）目前评论数为 0，尚未引发讨论。

---

## 5. Bug 与稳定性

今日共报告 **2 条 Bug**，按严重程度排列：

| 严重程度 | Issue | 描述 | Fix PR |
|---------|-------|------|--------|
| 🔴 高 | [#1112 — Disabling auth doesn't seem to disable auth (Docker)](https://github.com/moltis-org/moltis/issues/1112) | Docker 部署下关闭认证无效，存在安全隐患 | ❌ 无 |
| 🟡 中 | [#1111 — Archiving a cron session has no visible effect](https://github.com/moltis-org/moltis/issues/1111) | 归档 cron 定时任务会话后无可见效果，影响任务管理体验 | ❌ 无 |

两条 Bug 均无关联 Fix PR，建议维护者优先排查 #1112，因其涉及安全配置失效。

---

## 6. 功能请求与路线图信号

今日新增 **1 条功能请求**：

- **[#1110 [Feature] A keyword to suppress cron job notifications, like NO_REPLY](https://github.com/moltis-org/moltis/issues/1110)** — 用户 `IlyaBizyaev` 提议为 cron 定时任务增加类似 `NO_REPLY` 的关键字，用于抑制任务完成后的通知推送。这反映出用户对**精细化通知控制**的需求，尤其适用于高频定时任务场景（避免通知轰炸）。

值得注意的是，同一用户 `IlyaBizyaev` 在同一天内同时提交了 Bug #1111 和功能请求 #1110，两条均围绕 **cron 任务管理**体验，说明该模块可能是当前用户痛点的集中区域。结合无活跃 PR 的现状，该功能短期内大概率不会进入下一版本，但可作为 cron 模块优化的信号纳入路线图考量。

---

## 7. 用户反馈摘要

从今日 Issue 中可提炼以下用户痛点与使用场景：

- **Docker 部署场景下的认证配置不可靠**（#1112）：用户在容器化环境中尝试关闭认证以简化部署，但配置未生效。这暗示 Moltis 的 auth 配置在 Docker 环境下可能存在环境变量覆盖或配置加载顺序的问题，影响开发/测试场景的易用性。
- **Cron 任务管理体验不完整**（#1111 + #1110）：归档操作无反馈、通知无法静默——两条 Issue 共同指向 cron 模块的**交互反馈机制**不足。用户期望更完善的任务生命周期管理，包括可视化的归档状态和灵活的通知策略。
- **用户主动搜索了已有 Issue 后才提交**：3 条 Issue 的 Preflight Checklist 均勾选了"已搜索现有 Issue"，说明社区 Issue 质量较高，重复报告率低。

---

## 8. 待处理积压

今日 3 条 Issue 均为昨日新创建，尚无长期积压。但需提醒维护者：

- **Issue #1112**（auth 配置失效）已有 1 条评论互动，社区期待维护者尽快确认或复现，避免用户因安全顾虑转向其他方案。
- **Issue #1111 与 #1110** 均来自同一用户 `IlyaBizyaev`，且均围绕 cron 模块。建议维护者评估是否可以将两条合并处理，作为 cron 模块体验优化的一部分统一规划。

---

> **项目健康度评估**：🟡 中等偏低。社区仍在活跃反馈问题，但维护者响应和代码推进均为零。若此状态持续超过一周，可能影响社区贡献信心。建议优先响应 #1112 安全相关 Bug，并对 cron 模块的集中反馈给出路线图层面的回应。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-06-07

> 数据来源：agentscope-ai/CoPaw | 统计窗口：过去 24 小时

---

## 1. 今日速览

过去 24 小时 CoPaw 共产生 **11 条 Issue 更新**（9 条新开/活跃，2 条已关闭），**无 PR 活动，无新版本发布**。项目处于高频 Bug 反馈期，社区活跃度中等偏高，但维护侧响应明显滞后——多数新 Issue 仅有 1 条评论或无评论。当前版本 **v1.1.10** 成为众矢之的，多个回归问题集中爆发。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为 v1.1.10。

---

## 3. 项目进展

**无 PR 合并或关闭。** 项目在过去 24 小时内无代码合并进展，开发推进速度为零。

---

## 4. 社区热点

### 🔥 Issue #4661 — 上下文压缩配置未生效（已关闭，6 条评论）
**链接：** https://github.com/agentscope-ai/CoPaw/issues/4661

用户 wxfvf 报告从 v1.1.7 升级至 v1.1.8post1 后，模型上下文长度从配置的 200K 被压缩为 131K，且在模型配置中单独设置 `max_input_length: 500K` 后依然无效。这是今日评论最多的 Issue，说明**上下文压缩配置失效是一个影响范围较广的痛点**。该 Issue 已被关闭，但关闭原因未在摘要中体现，需确认是否已修复或仅作信息归档。

### 🔥 Issue #4937 — `/compact` 命令忽略模型 max_input_length（5 条评论）
**链接：** https://github.com/agentscope-ai/CoPaw/issues/4937

与上条高度相关。用户 Timqt 在 v1.1.10 中为 MiniMax M3 配置了 512K 上下文，`/compact` 命令仍使用 128K 默认值触发压缩。**两条 Issue 共同指向上下文压缩模块存在系统性配置读取缺陷**，且该问题跨越多个版本未得到根本解决。

### Issue #4989 — v1.1.9/1.1.10 本地千问模型对话无响应（1 条评论）
**链接：** https://github.com/agentscope-ai/CoPaw/issues/4989

用户 Cancerhzc 报告使用 vLLM 本地部署的千问 3.6-27B 在 v1.1.9 和 v1.1.10 中对话页面持续加载无回复，而同样的配置在 v1.1.5.post2 中正常工作。**这是一个典型的版本回归问题**，暗示 v1.1.6~v1.1.10 之间对本地 OpenAI 兼容协议的处理逻辑发生了破坏性变更。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|--------|-------|------|------|--------|
| 🔴 高 | [#4989](https://github.com/agentscope-ai/CoPaw/issues/4989) | v1.1.9/1.1.10 本地模型对话无响应（版本回归） | OPEN | 无 |
| 🔴 高 | [#4987](https://github.com/agentscope-ai/CoPaw/issues/4987) | Coding Mode 下切换 Session 始终失败（v1.1.10 回归） | OPEN | 无 |
| 🟠 中高 | [#4937](https://github.com/agentscope-ai/CoPaw/issues/4937) | `/compact` 命令忽略模型 max_input_length，硬编码 128K | OPEN | 无 |
| 🟠 中高 | [#4661](https://github.com/agentscope-ai/CoPaw/issues/4661) | 上下文压缩配置不生效（跨版本遗留） | CLOSED | 未明确 |
| 🟡 中 | [#4990](https://github.com/agentscope-ai/CoPaw/issues/4990) | 企业微信关闭工具调用信息后返回错误提示 | OPEN | 无 |
| 🟡 中 | [#4988](https://github.com/agentscope-ai/CoPaw/issues/4988) | Session 文件名重复拼接导致 Windows MAX_PATH 溢出 | OPEN | 无 |
| 🟡 中 | [#4985](https://github.com/agentscope-ai/CoPaw/issues/4985) | 删除文件命令显示不换行，交互不友好 | OPEN | 无 |

**关键发现：** v1.1.10 存在至少 **2 个回归 Bug**（本地模型无响应、Coding Mode Session 切换失败），且均无修复 PR。上下文压缩配置问题跨越多个版本持续存在，说明该模块可能需要系统性重构而非局部修补。

---

## 6. 功能请求与路线图信号

| Issue | 诉求 | 信号强度 |
|-------|------|----------|
| [#4886](https://github.com/agentscope-ai/CoPaw/issues/4886) | 新增 MAX Messenger 频道支持（俄语区主流 IM） | ⭐⭐ 中 |
| [#4971](https://github.com/agentscope-ai/CoPaw/issues/4971) | 增加会话栏，支持一键切换会话 | ⭐⭐⭐ 高 |
| [#4986](https://github.com/agentscope-ai/CoPaw/issues/4986) | Shell 执行/写文件时增加实时输出反馈（参考 Cursor/WorkBuddy） | ⭐⭐⭐ 高 |

**分析：**
- **会话管理体验** 是用户最集中的诉求（#4971 + #4987），既有功能请求又有 Bug 报告，说明当前会话切换流程确实存在明显体验缺陷，极有可能在下一版本优先处理。
- **实时输出反馈**（#4986）与 Coding Mode 的 Session 切换失败（#4987）共同指向 Coding Mode 整体体验不足，建议作为专项优化方向。
- MAX Messenger 频道扩展属于增量功能，优先级可能较低，但反映了俄语区用户的增长潜力。

---

## 7. 用户反馈摘要

**痛点：**
- **版本升级风险高**：多位用户反馈 v1.1.8post1 → v1.1.10 多次升级后出现功能退化，升级路径缺乏平滑保障。
- **配置生效不可信**：上下文压缩配置（#4661、#4937）设置后不生效，且重启也无法解决，用户对配置系统的信任度下降。
- **本地模型兼容性倒退**：vLLM 部署的本地模型在旧版本可用、新版本不可用（#4989），严重影响依赖本地部署的用户群体。
- **交互反馈缺失**：Shell 执行无实时输出（#4986）、删除命令不换行（#4985），用户无法判断任务是否在进行中。

**满意点：**
- Issue #4984 用户确认 `/approval approve` 魔法命令满足需求后主动关闭 Issue，说明审批功能设计合理。

---

## 8. 待处理积压

以下 Issue 长期未获维护者响应，建议优先关注：

| Issue | 创建日期 | 等待天数 | 说明 |
|-------|----------|----------|------|
| [#4661](https://github.com/agentscope-ai/CoPaw/issues/4661) | 2026-05-25 | 13 天 | 上下文压缩配置失效，已关闭但修复方案不明 |
| [#4937](https://github.com/agentscope-ai/CoPaw/issues/4937) | 2026-06-03 | 4 天 | `/compact` 命令硬编码问题，与 #4661 同源 |
| [#4886](https://github.com/agentscope-ai/CoPaw/issues/4886) | 2026-06-02 | 5 天 | MAX Messenger 频道请求，无维护者回复 |

**特别提醒：** v1.1.10 的回归问题（#4989、#4987）均为 2026-06-06 当天报告，尚未满 24 小时，但考虑到其严重性（核心功能不可用），建议维护者 **48 小时内给出响应或回滚方案**。

---

> **项目健康度评估：🟡 中等偏下。** 社区反馈活跃但维护响应不足，v1.1.10 存在多个回归 Bug 且无修复 PR，上下文压缩模块存在跨版本系统性缺陷。建议优先处理回归问题并发布 v1.1.11 修复版本。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 · 2026-06-07

---

## 1. 今日速览

ZeptoClaw 今日整体处于**低活跃度的基础设施精修阶段**。过去24小时内共有 2 条 Issue 更新（1 开 1 闭）和 1 条 PR 持续开放中，无新版本发布。项目核心工作聚焦于 **CI/CD 流水线中二进制体积门禁（binary-size gate）的校准与收紧**——这是维护者 qhkm 连续数日推进的一条主线。当前没有用户端功能开发或 Bug 修复类活动，项目节奏偏向工程健康度治理。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已关闭 Issue

- **[#612 [CLOSED] chore(perf): audit ~800KB binary-size drift since 6.2MB low water mark, tighten gate to 7MB](https://github.com/qhkm/zeptoclaw/issues/612)**
  - 该 Issue 记录了自项目历史最低水位 6.2MB 以来，stripped release 二进制体积已漂移约 800KB 的审计结果。核心结论是：darwin-arm64 当前为 6.98MB（距 7MB 目标仅 21KB），而 Linux x86_64 通常更大。Issue 已关闭，说明审计结论已被采纳并转化为后续行动。

### 持续开放 PR

- **[#611 [OPEN] chore(ci): promote binary-size to PR gate at 7.5MB](https://github.com/qhkm/zeptoclaw/pull/611)**
  - 该 PR 将 `binary-size` 检查从"事后观察"提升为"PR 合并门禁"，去除了 `if:` 守卫使其在每个 PR 上运行，并将阈值设为 7.5MB。PR 自 6月1日 创建至今已近一周，仍处于开放状态，可能正在等待进一步讨论或调整阈值策略。

**整体判断：** 项目在 CI 质量门禁方向向前推进了一步（审计完成、门禁 PR 落地中），但 PR #611 尚未合并，说明团队对阈值设定仍有斟酌。

---

## 4. 社区热点

今日社区讨论集中于**二进制体积控制策略的分歧与对齐**，两条 Issue 构成了一组"问题发现 → 新方案提出"的连续叙事：

| 条目 | 热度信号 | 核心诉求 |
|------|---------|---------|
| [#629 [OPEN] chore(ci): add aarch64 binary-size gate at 7MB](https://github.com/qhkm/zeptoclaw/issues/629) | 今日新开 | 指出 PR #611 在 linux-x86_64 上设 11MB 门禁过于宽松（实际 ~10.5MB），而真正的"机器人护城河"（robot moat）是 **aarch64 目标**（Pi/Jetson/Apple Silicon），应单独为 aarch64 设 7MB 门禁 |
| [#612 [CLOSED]](https://github.com/qhkm/zeptoclaw/issues/612) | 今日关闭，1 条评论 | 完成了对二进制体积漂移的审计，为后续门禁阈值提供数据基础 |

**分析：** 底层诉求是**在不同目标架构上实施差异化的体积门禁策略**——x86_64 因编码/链接器现实允许更大体积，而 aarch64 才是嵌入式/边缘场景的关键目标，需要更严格的约束。这反映了 ZeptoClaw 作为面向机器人/边缘设备的 AI 智能体框架，对部署体积有明确的战略要求。

---

## 5. Bug 与稳定性

**今日无 Bug 报告、崩溃或回归问题。**

所有活跃 Issue 均为 `chore` 类型，属于工程基础设施优化，不涉及运行时缺陷。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**

从近期活动来看，项目路线图信号指向：

- **多架构差异化 CI 门禁**：Issue #629 明确提出为 aarch64 单独设置 7MB 门禁，这很可能催生一个新的 PR 来补充或替代 PR #611 中较为宽松的 x86_64 阈值。
- **二进制体积持续监控体系**：从审计（#612）→ 门禁 PR（#611）→ 架构差异化门禁（#629），一条完整的"度量 → 告警 → 分架构治理"链路正在成形。

---

## 7. 用户反馈摘要

**今日无外部用户反馈。**

所有 Issue 和 PR 均由维护者 qhkm 自行创建，属于内部工程驱动。评论数量极少（#612 有 1 条，#629 无评论），社区参与度较低。当前阶段项目治理高度集中于维护者一人。

---

## 8. 待处理积压

| 条目 | 状态 | 创建日期 | 等待天数 | 风险等级 | 说明 |
|------|------|---------|---------|---------|------|
| [#611 [OPEN] chore(ci): promote binary-size to PR gate at 7.5MB](https://github.com/qhkm/zeptoclaw/pull/611) | 待合并 | 2026-06-01 | **6 天** | 🟡 中等 | 已开放近一周未合并。Issue #629 的提出可能意味着该 PR 的阈值策略需要重新校准（x86_64 11MB → aarch64 7MB），建议在合并前确认是否需修订阈值或拆分为多架构门禁 |
| [#629 [OPEN] chore(ci): add aarch64 binary-size gate at 7MB](https://github.com/qhkm/zeptoclaw/issues/629) | 待处理 | 2026-06-06 | **1 天** | 🟢 低 | 今日新开，逻辑清晰，建议尽快产出对应 PR 以落实多架构门禁策略 |

**维护者关注建议：** PR #611 的合并决策可能需要与 Issue #629 的方案对齐——是直接在 #611 中修订阈值，还是先合并 #611 再跟进 #629 的补充 PR，建议尽快明确路径以避免 CI 配置长期悬空。

---

> **项目健康度总评：** 🟡 中等偏稳。无用户端事故，工程基础设施持续优化中，但 PR 积压和策略分歧需尽快收敛。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-06-07

---

## 1. 今日速览

ZeroClaw 今日处于**高活跃开发期**，过去 24 小时内 Issues 更新 37 条（新开/活跃 22 条，关闭 15 条），PR 更新 50 条（待合并 45 条，已合并/关闭 5 条），无新版本发布。项目当前处于 **v0.8.x 密集迭代阶段**，多个里程碑追踪器（v0.8.1、v0.8.2、v0.8.3）同日创建，显示维护者正在系统性地组织发布队列。今日合并的 5 个 PR 全部为高优先级 bug 修复，稳定性工作推进显著。值得注意的是，**插件生态**成为今日最突出的主题——单日涌现 10+ 个插件相关 PR，涵盖沙箱加固、远程注册表、命名空间隔离及多个自托管工具插件，表明 ZeroClaw 的 WASM 插件系统正从基础能力快速走向生产就绪。

---

## 2. 版本发布

**无新版本发布。**

当前最新稳定版本仍为上一发布周期版本，多个追踪器（[#7112 v0.8.0](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)、[#6970 v0.8.1](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)、[#7314 v0.8.2](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)、[#7320 v0.8.3](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)）显示项目正并行推进多个版本的发布准备工作。

---

## 3. 项目进展

今日合并/关闭的 5 个 PR 全部为高优先级修复，显著提升了系统稳定性：

| PR | 类型 | 说明 |
|---|---|---|
| [#7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334) | Bug Fix | **Telegram 零间隔流式编辑修复**：当 `draft_update_interval_ms` 配置为 0 时，Telegram 频道会疯狂发送编辑请求。此 PR 增加了下限钳位，复用默认间隔，并附带回归测试。 |
| [#7281](https://github.com/zeroclaw-labs/zeroclaw/pull/7281) | Bug Fix | **路径策略误报修复**：`forbidden_path_argument` 函数将 heredoc 体内的内容和非路径用途的 `~` 符号误判为路径参数，导致合法命令被错误拦截。修复后仅对实际 argv 路径参数执行检查。 |
| [#7297](https://github.com/zeroclaw-labs/zeroclaw/pull/7297) | Enhancement | **Webhook 多 Agent 路由**：`POST /webhook` 现在支持 `?agent=` 查询参数（兼容 `agentAlias` / `agent_alias`），与 `/ws/chat` 的查询字符串保持一致，使外部集成可将请求路由到指定 Agent。 |

**整体进展评估**：项目在安全加固（路径策略、沙箱隔离）、渠道稳定性（Telegram、Webhook）和插件系统成熟度三个维度同步推进。今日合并的 PR 虽数量不多，但全部为 S0-S2 级别的关键修复，质量较高。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

**[#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) — 为 Ollama Cloud、z.ai、Kimi、MiniMax 添加订阅原生 OAuth 支持**（7 条评论，👍1）

这是今日评论数最多的 Issue，也是社区长期关注的核心诉求。用户希望 ZeroClaw 能像已支持的三个提供商一样，通过 OAuth/登录流程而非静态 API Key 来认证这四个提供商的免费/付费订阅计划。该 Issue 自 4 月 10 日创建以来持续活跃，标记为 `status:blocked` 和 `status:accepted`，说明技术方案已认可但依赖条件尚未满足。背后反映的诉求是：**降低用户配置门槛，消除 API Key 管理负担**，对吸引非技术用户至关重要。

**[#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) — RFC：将翻译文件移至 git 子模块**（4 条评论）

提案将 Fluent `.ftl` 和 gettext `.po` 翻译文件从主仓库移入独立 git 子模块，使翻译变更历史与代码变更分离，减少主仓库噪音。这是国际化基础设施的架构优化讨论。

**[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — OIDC 认证提供商支持**（4 条评论，P1，目标 v0.9.0）

安全/架构级别的追踪 Issue，目标是实现可插拔的 OIDC 认证提供商机制。标记为 `status:accepted`，是 v0.9.0 的核心安全特性。

**[#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) — 清理主仓库不需要的分支**（4 条评论）

仓库已积累超过 200 个分支，大多数已合并到 master 但未被删除。这是维护者日常治理诉求。

### 🔥 最活跃的 PR 方向

**插件系统爆发式增长**：今日 PR 列表中，`theonlyhennygod` 一人提交了 10+ 个插件相关 PR，构成一个完整的插件生态推进链：

- **沙箱加固基础** [#7335](https://github.com/zeroclaw-labs/zeroclaw/pull/7335)：为 WASM 插件添加资源限制、SSRF 出口守卫、环境变量隔离
- **命名空间隔离** [#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337)：插件工具使用 `plugin__tool` 命名空间，避免与原生/MCP 工具冲突
- **签名验证** [#7336](https://github.com/zeroclaw-labs/zeroclaw/pull/7336)：默认 `signature_mode` 提升至 permissive 并暴露验证状态
- **远程注册表** [#7333](https://github.com/zeroclaw-labs/zeroclaw/pull/7333)：`zeroclaw plugin search` + 按名称安装，解决插件发现难题
- **自托管工具插件群**：ACE-Step 音乐生成 [#7313](https://github.com/zeroclaw-labs/zeroclaw/pull/7331)、n8n 工作流触发 [#7328](https://github.com/zeroclaw-labs/zeroclaw/pull/7328)、SD-WebUI 图像生成 [#7325](https://github.com/zeroclaw-labs/zeroclaw/pull/7325)、Ollama 本地嵌入 [#7324](https://github.com/zeroclaw-labs/zeroclaw/pull/7324)、Nominatim 地理编码 [#7327](https://github.com/zeroclaw-labs/zeroclaw/pull/7327)、LanguageTool 语法检查 [#7326](https://github.com/zeroclaw-labs/zeroclaw/pull/7326)、remove.bg 背景移除 [#7319](https://github.com/zeroclaw-labs/zeroclaw/pull/7319)

**Web 管理面板** [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7329)：新增 MCP、Skills、Plugins、Providers 四个一级管理标签页，使运维人员可通过 Web UI 管理整个堆栈，而非手动编辑配置文件。

---

## 5. Bug 与稳定性

### 🔴 S0/S1 — 严重/阻断级（已修复并关闭）

| Issue | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#7252](https://github.com/zeroclaw-labs/zeroclaw/issues/7252) | `session/kill` 后 ACP 会话可从持久化历史重新激活，存在数据丢失/安全风险 | ✅ 已关闭 | 已合并 |
| [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) | 嵌套 `#[secret]` 字段在 ObjectArray 属性显示中未脱敏，密钥泄露 | ✅ 已关闭 | 已合并 |
| [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) | Telegram 频道将 Codex 内部 scratchpad/工具转录作为最终响应发送给用户 | ✅ 已关闭 | 已合并 |
| [#6875](https://github.com/zeroclaw-labs/zeroclaw/issues/6875) | 工具调用解析器不支持 `<tool_calls>`（复数）标签，Llama 4 Scout 等模型静默失败 | ✅ 已关闭 | 已合并 |
| [#7332](https://github.com/zeroclaw-labs/zeroclaw/issues/7332) | Telegram 零间隔草稿更新导致编辑请求洪水 | ✅ 已关闭 | [#7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334) |
| [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) | Bedrock Qwen 集成在第二次提示时报"不支持的模型"错误 | 🆕 新开 | 待分配 |

### 🟡 S2 — 降级行为（已修复并关闭）

| Issue | 问题 | 状态 |
|---|---|---|
| [#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126) | Web UI "Clear all" 仅清除前端渲染消息，未清除后端会话历史 | ✅ 已关闭 |
| [#7156](https://github.com/zeroclaw-labs/zeroclaw/issues/7156) | 重载横幅持续显示 `gateway.paired_tokens (secret)` 漂移，永不消失 | ✅ 已关闭 |
| [#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151) | 可观测性 tool_call 遥测泄漏到聊天 WebSocket，渲染永久"unknown"工具卡片 | ✅ 已关闭 |
| [#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197) | Web 工具栏加载极慢，Windows 上弹出可见 cmd 窗口 | ✅ 已关闭 |
| [#7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) | 路径策略对 heredoc 命令数据中的 `~` 符号产生误报 | ✅ 已关闭 |

### 🟢 S3 — 轻微问题（已修复并关闭）

| Issue | 问题 | 状态 |
|---|---|---|
| [#7110](https://github.com/zeroclaw-labs/zeroclaw/issues/7110) | 文档 PO 目录包含生成的助手响应翻译 | ✅ 已关闭 |
| [#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) | zerocode Quickstart 硬编码 model-provider alias 为 `default`，与已有提供商冲突 | ✅ 已关闭 |

**稳定性评估**：今日关闭的 Bug 数量（15 条 Issues 关闭）显著高于新开数量，且涵盖多个 S0/S1 级别问题，项目稳定性正在快速收敛。唯一需要关注的是新开的 [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) Bedrock Qwen 二次提示阻断问题，尚无修复 PR。

---

## 6. 功能请求与路线图信号

### 近期可能纳入版本的功能

| 功能 | 相关 Issue | 相关 PR | 信号强度 |
|---|---|---|---|
| **WASM 插件沙箱加固** | [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) v0.8.2 追踪器 | [#7335](https://github.com/zeroclaw-labs/zeroclaw/pull/7335)、[#7336](https://github.com/zeroclaw-labs/zeroclaw/pull/7336)、[#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337) | 🟢 极高 — PR 已就绪，形成完整闭环 |
| **Web MCP/Skills/Plugins/Providers 管理面板** | [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) v0.8.3 追踪器 | [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229)、[#7235](https://github.com/zeroclaw-labs/zeroclaw/pull/7235) | 🟢 高 — 核心 PR 已开放评审 |
| **远程插件注册表** | [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) | [#7333](https://github.com/zeroclaw-labs/zeroclaw/pull/7333) | 🟢 高 — PR 已提交 |
| **Agent 工具权限强制执行** | [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) P1 | 无直接 PR | 🟡 中 — 需求明确但无实现 PR |
| **Skill 作用域工具临时提权** | [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) P2 | 无直接 PR | 🟡 中 — 已关闭但方案可能需迭代 |
| **Composio 动作级过滤** | [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) P2 | 无直接 PR | 🟡 中 |
| **Skill 级安全权限** | [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) P2 | 无直接 PR | 🟡 中 |
| **OIDC 认证提供商** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) P1，目标 v0.9.0 | 无直接 PR | 🟡 中 — 目标版本较远 |
| **订阅原生 OAuth（4 个提供商）** | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) P2 | 无直接 PR | 🟠 低 — 长期 blocked |
| **Cron 作业预检跳过门** | [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) P2 | 无直接 PR | 🟠 低 |
| **Nix flake 改进** | [#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) P2 | 无直接 PR | 🟠 低 |
| **Debian 容器镜像 CI/CD** | [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) P2 | 无直接 PR | 🟠 低 |

**路线图判断**：v0.8.2 将聚焦 WASM 插件系统成熟化（沙箱+命名空间+签名），v0.8.3 将聚焦 Web 管理面板完善。安全特性（OIDC、工具权限、Skill 权限）虽需求明确但实现 PR 尚未启动，可能排入 v0.9.0。

---

## 7. 用户反馈摘要

### 🔑 核心痛点

1. **安全沙箱"有名无实"**：多个 Issue（[#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)、[#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914)、[#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)、[#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)）集中反映 ZeroClaw 的安全模型粒度太粗——`allow_scripts` 和 `allowed_commands` 是全局标志，启用一个 Python 技能就等于为所有技能开放了相同权限。用户需要**按 Skill 粒度**的安全控制。

2. **提供商生态碎片化**：[#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) 的持续活跃（7 条评论，跨越近 2 个月）表明用户对**免 API Key 认证**的强烈需求。Ollama Cloud、智谱、月之暗面、MiniMax 等国内/自托管提供商的 OAuth 支持是降低使用门槛的关键。

3. **Web UI 体验问题集中爆发**：今日关闭的多个 S2 Bug（[#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126)、[#7156](https://github.com/zeroclaw-labs/zeroclaw/issues/7156)、[#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151)、[#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197)）全部涉及 Web 管理面板，说明前端与后端的状态同步、遥测隔离、加载性能等方面存在系统性问题。

4. **自托管/隐私优先需求强烈**：今日涌现的插件 PR 中，ACE-Step（自托管音乐生成）、SD-WebUI（本地图像生成）、Ollama Embed（本地嵌入）、n8n（自托管工作流）全部强调"self-hosted"和"own your stack"，反映 ZeroClaw 用户群体对**数据隐私和去云服务化**的高度重视。

### 😐 不满意

- [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) 用户报告 Bedrock Qwen 集成在第二次提示时直接阻断工作流，属于 S1 级别但尚无修复响应。
- [#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) 用户期望 Nix flake 暴露 `zeroclaw` 包而非仅工具链，当前实现"不是用户想要的"。

### 😊 满意信号

- 今日大量高优先级 Bug 被快速关闭，显示维护者响应速度良好。
- 插件系统的快速扩展（从沙箱加固到远程注册表到多个自托管工具）显示项目生态正在加速成熟。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获响应，建议维护者关注：

| 项目 | 类型 | 创建时间 | 状态 | 风险 |
|---|---|---|---|---|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) — 订阅原生 OAuth 支持 | Feature | 2026-04-10 | `status:blocked`，近 2 个月无进展 | 社区高关注（7 评论），持续 blocked 可能影响用户增长 |
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) — Skill 级安全权限 | Feature | 2026-04-15 | `status:blocked`，近 2 个月无进展 | 安全架构核心诉求，与多个相关 Issue 形成集群 |
| [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) — Debian 容器镜像 CI/CD | Feature | 2026-04-19 | `status:blocked`，近 2 个月无进展 | 影响部署体验和发行版用户 |
| [#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) — Nix flake 改进 | Feature | 2026-05-25 | `status:blocked`，2 周无进展 | Nix 社区用户阻塞 |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) — Cron 预检跳过门 | Feature | 2026-04-10 | `status:blocked`，近 2 个月无进展 | 自动化工作流核心需求 |
| [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) — Bedrock Qwen 二次提示阻断 | Bug | 2026-06-06 | 🆕 新开，无响应 | S1 阻断级别，影响 AWS Bedrock 用户 |
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) — Agent 工具权限强制执行 | Feature | 2026-05-25 | `status:blocked`，无实现 PR | P1 安全特性，需排期 |
| [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) — Web MCP/Skills/Plugins/Providers 面板 | PR | 2026-06-04 | 开放中，XL 规模 | 大型 PR，需及时评审避免积压 |

**积压健康度评估**：当前待合并 PR 达 45 个，其中多个为大型 PR（XL 规模），加上今日新增的 10+ 个插件 PR，评审压力显著增大。建议维护者按里程碑优先级分批处理，优先推进 v0.8.2 插件沙箱系列和 v0.8.3 Web 面板系列。长期 blocked 的 Issue 建议明确阻塞原因并更新状态，避免社区信心下降。

---

*数据来源：GitHub zeroclaw-labs/zeroclaw | 统计时间：2026-06-07 | 生成：OWL*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*