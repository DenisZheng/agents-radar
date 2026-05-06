# OpenClaw 生态日报 2026-04-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-25 00:15 UTC

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

# OpenClaw 项目动态日报 | 2026-04-25

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高收敛效率**的健康状态。24小时内 500 条 Issues 中 95.6%（478条）完成关闭，PR 合并/关闭率达 67.2%（336/500），显示维护团队具备极强的 issue 消化能力。核心版本 v2026.4.23 正式发布，聚焦**图像生成能力的 OAuth 化**——用户无需硬编码 API Key 即可调用 OpenAI GPT-Image-2 和 OpenRouter 图像服务。与此同时，Control UI 上下文显示准确性、Slack 消息排序、Telegram 媒体下载等长期痛点在今日集中修复，但 164 个待合并 PR 提示代码审查队列仍存在压力。

---

## 2. 版本发布

### v2026.4.23（稳定版）及 3 个 Beta 迭代
- **发布时间**：2026-04-23 至 2026-04-24
- **GitHub 链接**：[v2026.4.23](https://github.com/openclaw/openclaw/releases/tag/v2026.4.23) | [v2026.4.23-beta.6](https://github.com/openclaw/openclaw/releases/tag/v2026.4.23-beta.6) | [v2026.4.23-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.4.23-beta.5) | [v2026.4.23-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.4.23-beta.4)

| 变更项 | 详情 | 影响评估 |
|--------|------|---------|
| **OpenAI 图像生成 OAuth 化** | 通过 Codex OAuth 支持 `openai/gpt-image-2` 的图像生成与参考图编辑，**无需 `OPENAI_API_KEY`** | 🔴 **Breaking**：依赖环境变量部署的用户需迁移至 OAuth 流程 |
| **OpenRouter 图像生成** | 新增 `image_generate` 能力，支持参考图编辑 | 🟡 需注意 OpenRouter 账户权限配置 |

**迁移注意事项**：
- 使用 `OPENAI_API_KEY` 的 CI/CD 流水线需评估 Codex OAuth 的 token 刷新机制
- 自定义 provider 配置中若硬编码了图像模型 endpoint，可能被新路由覆盖

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（按影响面排序）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#71278](https://github.com/openclaw/openclaw/pull/71278) `refactor(pdf): move document extraction to plugin` | vincentkoc | **架构解耦**：PDF 提取从核心迁移至 `document-extract` 捆绑插件，建立通用文档提取契约 | — |
| [#45282](https://github.com/openclaw/openclaw/pull/45282) `fix(ui): add context-notice component` | haoruilee | **根治 Control UI 上下文显示乱象**：修复刷新时全屏警告、数值倒挂（550.4k/204.8k）、compaction 后统计不准等 4 个 issue | #45230, #45034, #45192, #45794 |
| [#71293](https://github.com/openclaw/openclaw/pull/71293) `fix(codex): emit app-server final chat events` | steipete | **Codex 运行时完整性**：替代 #70815 的兜底方案，确保 app-server 模式下发终端 agent-event 形状 | — |
| [#69134](https://github.com/openclaw/openclaw/pull/69134) `fix(slack): enforce maxRequestConcurrency=1` | ztexydt-cqh | **Slack 消息顺序保障**：将 WebClient 并发从 100 降至 1，根治快速发送时的乱序问题 | #69101 |
| [#71025](https://github.com/openclaw/openclaw/pull/71025) `fix(slack): resolve exec approval decisions` | marusan03 | **Slack 审批流修复**：交互按钮决策不再 30 分钟超时 | — |
| [#70564](https://github.com/openclaw/openclaw/pull/70564) `fix(telegram): pass modelNames to buildModelsKeyboard` | anisesg | **Telegram 模型选择器体验**：按钮路径显示配置别名而非原始 ID | — |
| [#71161](https://github.com/openclaw/openclaw/pull/71161) `fix(tools): reject model and thinking params on ACP runtime` | Jimmy-xuzimo | **ACP 运行时参数校验**：提前拦截不支持的参数，避免静默忽略导致的调试成本 | — |
| [#70916](https://github.com/openclaw/openclaw/pull/70916) `fix: merge configured mcp.servers into Claude CLI bundle config` | gm4xgvkx7g-droid | **MCP 配置继承**：用户注册的 `mcp.servers` 不再被 Claude CLI runner 静默丢弃 | #70909 |

**整体推进评估**：今日合并 PR 覆盖 **UI 准确性、多通道稳定性（Slack/Telegram）、架构插件化、AI 运行时完整性** 四大维度，项目质量基线显著提升。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#44714](https://github.com/openclaw/openclaw/issues/44714) `openclaw logs --follow` handshake timeout | 16 | **运维可观测性**：升级后日志流断裂，gateway 健康但 CLI 握手失败，反映本地回环网关的可靠性边界 |
| 2 | [#31486](https://github.com/openclaw/openclaw/issues/31486) image tool 不支持自定义 provider | 16 | **生态开放性**：用户配置的本地/私有图像模型无法被识别，插件化架构的覆盖盲区 |
| 3 | [#44755](https://github.com/openclaw/openclaw/issues/44755) `/compact` 选项导致 WebChat 白屏崩溃 | 14 | **UI 鲁棒性**：核心功能（上下文压缩）触发致命前端状态错误，用户无法自助恢复 |
| 4 | [#44184](https://github.com/openclaw/openclaw/issues/44184) Context usage 始终显示 0% | 13 | **信息准确性**：状态显示与实际严重脱节，用户无法判断会话压力 |
| 5 | [#45086](https://github.com/openclaw/openclaw/issues/45086) [Feature] WebChat UI 多 agent 切换 | 7 / 👍3 | **多租户需求**：用户配置 5 个 agent 但 UI 仅支持 main，Control UI 的功能瓶颈 |

**诉求洞察**：社区正从"能用"向"好用、可运维、多租户"演进，UI 状态准确性和多 agent 支持是下阶段体验竞争的关键。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#45057](https://github.com/openclaw/openclaw/issues/45057) | Gateway 启动崩溃：`ANTHROPIC_MODEL_ALIASES` 初始化前引用，所有 CLI 命令失效 | ✅ Closed | 已修复 |
| 🔴 **Critical** | [#44718](https://github.com/openclaw/openclaw/issues/44718) | 同上，配置加载失败导致全 CLI 瘫痪 | ✅ Closed | 已修复 |
| 🔴 **Critical** | [#43858](https://github.com/openclaw/openclaw/issues/43858) | Edit tool **静默清空文件至 0 字节**却报告成功，数据丢失风险 | ✅ Closed | 已修复 |
| 🟠 **High** | [#44122](https://github.com/openclaw/openclaw/issues/44122) | Sandbox FS Bridge v3.11 回归：含 python3 的镜像中 Write/Edit 必现 0 字节文件 | ✅ Closed | 已修复 |
| 🟠 **High** | [#44964](https://github.com/openclaw/openclaw/issues/44964) | Sandbox Write Tool 同样 0 字节问题，与 #44122 同源 | ✅ Closed | 已修复 |
| 🟠 **High** | [#45110](https://github.com/openclaw/openclaw/issues/45110) | Prompt cache 失效：前缀被篡改导致推理成本 **×1000**（每消息额外 40k tokens） | ✅ Closed | 已修复 |
| 🟠 **High** | [#45046](https://github.com/openclaw/openclaw/issues/45046) | Agent **模拟工具调用**而非真实执行，输出假 JSON 文本 | ✅ Closed | 待验证 |
| 🟡 **Medium** | [#45089](https://github.com/openclaw/openclaw/issues/45089) | Chat box GUI 视图异常（Chrome 145） | ✅ Closed | 已修复 |
| 🟡 **Medium** | [#44906](https://github.com/openclaw/openclaw/issues/44906) | 上下文限制警告图标 **占满全屏**阻塞聊天视图 | ✅ Closed | 已修复 |
| 🟡 **Medium** | [#44869](https://github.com/openclaw/openclaw/issues/44869) | Control UI 切换 main session 显示错误三角无输入框 | ✅ Closed | 已修复 |

**稳定性评估**：今日关闭的 478 个 issue 中，**数据丢失类（0 字节文件）和成本失控类（prompt cache）** 的集中修复显著降低生产风险。但 `ANTHROPIC_MODEL_ALIASES` 初始化顺序问题在 3 个月内重复出现两次（#44718 及 #45057），提示模块加载依赖的测试覆盖存在系统性缺口。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 热度 | 技术可行性 | 纳入下一版本概率 |
|:---|:---|:---|:---|:---|
| **WebChat 多 agent/会话切换器** | [#45086](https://github.com/openclaw/openclaw/issues/45086) | 👍3, 评论7 | 中（需重构 Control UI 路由） | **高** — 已有 PR #71297 修复相关上下文刷新 |
| **浏览器快照增强（脚本注入元素检测）** | PR [#67771](https://github.com/openclaw/openclaw/pull/67771) | — | 高（XL 规模，已关闭） | **中** — 架构已合并，待稳定后开放 |
| **Streaming STT + 并行 TTS 管线** | PR [#70380](https://github.com/openclaw/openclaw/pull/70380) | — | 高（Phase C 进行中） | **高** — 多模态流式是明确路线图 |
| **浏览器 Doctor 健康探针** | PR [#62948](https://github.com/openclaw/openclaw/pull/62948) + [#62936](https://github.com/openclaw/openclaw/pull/62936) | — | 高 | **高** — 诊断体验是近期重点 |
| **Mention 模式策略（全局/按 agent/按通道）** | PR [#70864](https://github.com/openclaw/openclaw/pull/70864) | — | 中（L 规模，跨 12 通道） | **中** — 设计复杂，需社区反馈 |
| **Google Tasks 文档补全** | PR [#70010](https://github.com/openclaw/openclaw/pull/70010) | — | 极高（XS 文档） | **已就绪** |

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论提炼）

| 场景 | 原声摘录 | 频率 |
|:---|:---|:---|
| **升级焦虑** | "After upgrading from 2026.3.11 to 2026.3.12, the gateway remains healthy... but `openclaw logs --follow` fails" | 🔴 高频 |
| **数据信任崩塌** | "Edit tool silently wipes file to 0 bytes while reporting success" — 用户无法验证工具实际效果 | 🔴 高频 |
| **成本黑洞** | "inference costs x1000... additional 40k computed tokens per message" — 生产环境财务风险 | 🟠 中频 |
| **UI 状态迷惑** | "Context usage always shows 0%... regardless of actual conversation length" — 用户失去会话控制感 | 🟠 中频 |
| **多 Agent 管理困境** | "I have configured 5 agents... WebChat UI only allows chatting with the main agent" | 🟡 新兴 |
| **本地化部署壁垒** | "Custom providers can't use OpenAI Responses API... blocks providers that only implement Responses" | 🟡 新兴 |

### 满意度信号
- ✅ v2026.4.23 的 OAuth 图像生成获隐性认可（无反对 issue）
- ✅ 维护团队响应速度极快（多数 issue 24h 内关闭）

---

## 8. 待处理积压

### 需维护者重点关注

| PR/Issue | 创建时间 | 状态 | 风险说明 |
|:---|:---|:---|:---|
| [#70864](https://github.com/openclaw/openclaw/pull/70864) Mention 模式策略 | 2026-04-24 | **OPEN** | 跨 12 通道的 XL 规模 PR，影响所有通道运行时，需架构审查 |
| [#70380](https://github.com/openclaw/openclaw/pull/70380) Streaming 多模态 Phase C | 2026-04-22 | **OPEN** | 依赖 Phase A/B 基础，延迟合并可能阻塞后续音频功能 |
| [#68744](https://github.com/openclaw/openclaw/pull/68744) WhatsApp `audioAsVoice` 修复 | 2026-04-19 | **OPEN** | L 规模，语音消息功能长期破损，用户多次提及 |
| [#64123](https://github.com/openclaw/openclaw/pull/64123) Browser AI snapshot 角色回退 | 2026-04-10 | **OPEN** | 影响浏览器自动化可靠性，与 #67771 增强快照存在设计冲突需协调 |
| [#62936](https://github.com/openclaw/openclaw/pull/62936) + [#62948](https://github.com/openclaw/openclaw/pull/62948) Browser Doctor | 2026-04-08 | **OPEN** | 诊断基础设施，用户支持成本可降低 |

**积压健康度**：164 个待合并 PR 中，上述 5 个具有**架构锁定或用户阻断**特性，建议优先审查。其余多为文档和小型修复，可批量处理。

---

*日报生成时间：2026-04-25 | 数据来源：GitHub API 快照 | 下次更新：2026-04-26*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**报告日期：2026-04-25 | 分析周期：过去24小时**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**"从功能扩张向生产就绪"的关键转折期**。头部项目（OpenClaw、CoPaw、ZeroClaw）日处理 50+ Issues/PR 的高强度迭代成为常态，但稳定性债务同步累积——v1.1.4 白屏回滚、金丝雀双失败、SSL 证书 27 天失效等事件表明**发布工程与运维成熟度滞后于代码产出速度**。多智能体架构、MCP 工具生态、国产模型适配（DeepSeek V4、Kimi K2.6）构成当前最密集的技术投资方向，而企业 IM 集成深度（钉钉、飞书、企业微信）正成为区分"玩具"与"生产工具"的核心战场。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃/关闭) | PRs (合并/关闭/待审) | 版本发布 | 健康度评估 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (478 关闭, 95.6% 收敛率) | 500 (336 合并/关闭, 164 待审) | v2026.4.23 稳定版 + 3 Beta | 🟢 **高效运转**：极高 issue 消化能力，但审查队列承压 |
| **NanoBot** | 16 (6 关闭, 10 活跃) | 41 (34 合并/关闭, 7 待审) | 无 | 🟢 **密集迭代**：死锁修复、Token 预算、视频支持全栈推进 |
| **Hermes Agent** | 50 (10 关闭, 40 活跃) | 50 (8 合并, 42 待审) | 无 | 🟡 **活跃但阻塞**：1:4 的关闭/新增比，审查瓶颈严重 |
| **PicoClaw** | 12 (4 关闭, 8 活跃) | 38 (19 合并, 19 待审) | v0.2.7-nightly | 🟢 **健康演进**：MCP CLI 里程碑、Windows 跨平台突破 |
| **NanoClaw** | 7 (1 关闭, 6 活跃) | 37 (26 合并, 11 待审) | v2.0 (4/22) | 🟡 **v2 磨合期**：安装路径 bug 集中爆发，SSL 信任危机 |
| **NullClaw** | 2 (1 关闭, 1 活跃) | 11 (0 合并, 11 待审) | 无 | 🔴 **单点风险**：100% PR 来自同一作者，零合并动作 |
| **IronClaw** | 16 (2 关闭, 14 活跃) | 50 (7 合并, 43 待审) | 无 | 🟡 **质量承压**：金丝雀双失败，TEE 回归集群，不建议发版 |
| **LobsterAI** | 3 (0 关闭, 3 活跃) | 42 (42 合并, **0 待审**) | 2026.4.24 | 🟢 **流水线极致**：100% PR 处理率，但社区外部贡献极少 |
| **TinyClaw** | — | — | — | ⚪ **休眠**：24h 零活动 |
| **Moltis** | 10 (7 关闭, 3 活跃) | 31 (29 合并, 2 待审) | 无 | 🟢 **高质量迭代**：Landlock 沙箱、分层配置架构级改进 |
| **CoPaw** | 50 (35 关闭, 15 活跃) | 50 (35 合并, 15 待审) | v1.1.4.post1 (紧急回滚) | 🟡 **阵痛期**：白屏事件暴露发布流程缺陷，MCP 假死待解 |
| **ZeptoClaw** | 1 (0 关闭, 1 活跃) | 1 (0 合并, 1 待审) | 无 | 🟢 **储备期**：架构验证阶段，无积压风险 |
| **ZeroClaw** | 50 (3 关闭, 47 活跃) | 50 (27 合并, 23 待审) | 无 (v0.6.9 管道修复中) | 🟡 **高流入低收敛**：6 个 S1 Bug 无 PR，沙箱策略伤害生态 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **Issue 收敛效率** | 95.6% 日关闭率，478/500 | 碾压级：ZeroClaw 6%、Hermes 20%、CoPaw 70% |
| **OAuth 生态整合** | 图像生成 OAuth 化（GPT-Image-2、OpenRouter） | 首家消除硬编码 API Key 的图像工作流 |
| **多通道稳定性** | Slack 消息排序、Telegram 媒体下载、审批流修复 | 企业 IM 场景修复密度最高 |
| **架构插件化** | PDF 提取迁移至 `document-extract` 捆绑插件 |  PicoClaw 跟进 MCP CLI，但 OpenClaw 更早建立通用契约 |

### 技术路线差异
- **vs. CoPaw**：OpenClaw 聚焦"通道-模型-工具"三角的**企业级可靠性**（消息顺序、审批超时、上下文压缩）；CoPaw 侧重新兴**多模态前端**（桌面端、CJK 记忆、语音工作流），但稳定性阵痛频繁
- **vs. ZeroClaw**：OpenClaw 采用**渐进式 OAuth/配置迁移**（Breaking 变更明确标注）；ZeroClaw 押注**Rust 内核+安全沙箱**，但 `git -C` 误杀等过度保守策略反噬开发者体验
- **vs. LobsterAI**：OpenClaw 是**真开源社区驱动**（164 待审 PR 反映外部贡献活跃）；LobsterAI 42/42 合并率背后是**内部团队主导**（@liuzhq1986、@liugang519 等网易员工），外部声音薄弱

### 社区规模
- **绝对量级**：500 Issues/PR 日更新 ≈ 2× CoPaw/ZeroClaw/Hermes，5× NanoBot/Moltis
- **审查瓶颈**：164 待审 PR 提示**规模红利下的质量管控挑战**，需区别于 LobsterAI 的"零积压流水线"（后者牺牲社区参与深度）

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **DeepSeek V4 适配** | OpenClaw, PicoClaw, CoPaw, LobsterAI | `reasoning_content` 历史记录 canonical 化、工具调用后崩溃、schema 拒绝 | 🔴 **紧急** |
| **MCP 工具生态** | OpenClaw, PicoClaw, Moltis, CoPaw | CLI 管理（PicoClaw #2641）、配置继承（OpenClaw #70916）、服务器管理技能（Moltis #840）、TaskGroup 假死（CoPaw #3640） | 🟡 **高** |
| **多智能体架构** | Hermes（PR #15422 编排）、ZeroClaw（RFC #5890）、PicoClaw（delegate #2531）、Moltis（预设子代理 #844） | 并行/顺序/DAG 编排、跨 Agent 任务委托、路由策略 | 🟡 **高** |
| **企业 IM 深度集成** | OpenClaw（Slack/Telegram）、NanoBot（Teams/钉钉）、CoPaw（钉钉）、Moltis（Discord）、ZeroClaw（QQ/企业微信待实现） | 线程回复、文件上传、隐私修复、Cron 分段、@提及解析 | 🟡 **高** |
| **配置系统重构** | NanoClaw（v2 分层）、Moltis（layered config #864）、ZeroClaw（环境变量统一 #6087）、IronClaw（优先级反转 #2946） | 从硬编码/单体文件 → 分层覆盖、环境变量优先、声明式配置 | 🟢 **中** |
| **安全沙箱精细化** | Moltis（Landlock #866）、ZeroClaw（策略误杀 #5722/#5809）、CoPaw（Windows 路径防护 #3781） | 内核级隔离 vs. 开发者体验平衡、参数级白名单（非命令级） | 🟢 **中** |
| **国际化/本地化** | ZeroClaw（Fluent #5788）、CoPaw（CJK 分词 #3811）、PicoClaw（zh-TW #339） | 文档多语言、东亚语言检索、界面本地化 | 🟢 **中** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多通道可靠性、OAuth 生态、上下文压缩 | 运维团队、多平台部署的 SaaS 开发者 | Node.js/TS 核心，插件化架构，CI/CD 成熟 |
| **NanoBot** | 7×24 无人值守稳定性、Token 预算、视频富媒体 | 边缘部署者、资源敏感型用户 | Python 核心，懒加载优化，多通道媒体体验 |
| **Hermes Agent** | 技能生命周期、Nix 声明式部署、外部记忆 | Nix 生态拥趸、技能平台开发者 | Rust/Nix 混合，89+ 技能生态，记忆预取 UX |
| **PicoClaw** | 嵌入式硬件网关（I2C/SPI/UART）、MCP 工具管理 | IoT 开发者、NAS 私有部署者 | Go 核心，跨平台（Windows 突破），轻量 sidecar |
| **NanoClaw** | v2 架构重写、多频道扩展、可观测性基建 | 早期采用者、headless VPS 部署者 | TS 核心，onecli 安装器，SQLite WAL 活动日志 |
| **Moltis** | 内核级安全隔离（Landlock）、分层配置、预设子代理 | 安全敏感企业、合规场景（金融） | Rust 核心，LSM 集成，AST 感知代码分片 |
| **CoPaw** | 桌面端体验、国产模型快速跟进、钉钉企业集成 | 中国开发者、企业 IM 机器人部署者 | Electron/Tauri 混合，Memory&Context 重构 |
| **ZeroClaw** | Rust 内核性能、安全沙箱、国际化基础设施 | 技术极客、多语言产品团队 | Rust 全栈，OpenTelemetry 可观测性，Fluent i18n |
| **LobsterAI** | 模型生态广度（Kimi/DeepSeek/LM Studio）、Cowork 协作界面 | 中国开发者、网易生态用户 | 内部团队主导，流水线极致，社区参与浅 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（功能扩张 > 质量巩固）

| 项目 | 特征 | 风险信号 |
|:---|:---|:---|
| **CoPaw** | v1.1.4 白屏回滚、MCP 假死、技能池报错 | 发布流程缺陷，前端工程化不足 |
| **NanoClaw** | v2.0 安装路径 bug 集群、SSL 证书 27 天 | 基础设施运维滞后于功能发布 |
| **IronClaw** | 金丝雀双失败、TEE 回归集群、43 PR 待审 | "合并速度 > 验证速度"的债务累积 |
| **Hermes Agent** | 42 待审 PR、TUI 内存泄漏 13GB、单贡献者四连发 | 审查管道容量不足，架构审查风险 |

### 质量巩固阶段（稳定性/架构债务清理）

| 项目 | 特征 | 正向信号 |
|:---|:---|:---|
| **OpenClaw** | 高收敛率下的审查队列、Breaking 变更明确标注 | OAuth 迁移文档化、长期痛点集中修复 |
| **Moltis** | Landlock 沙箱、分层配置、心跳竞态修复 | 安全-配置-集成清晰主线，当日 bug 当日修 |
| **NanoBot** | 死锁修复、Token 预算、内存优化 | 全栈改进覆盖核心到界面，生产就绪度提升 |
| **PicoClaw** | MCP CLI 里程碑、Windows 跨平台、安全加固 | "修桥铺路"型进展，根基稳固 |

### 储备/休眠阶段

| 项目 | 状态 | 观察要点 |
|:---|:---|:---|
| **ZeptoClaw** | 架构验证，飞书子进程 Worker 设计 | 需求验证不足风险，需 RFC 模板引入 |
| **NullClaw** | 11 PR 零合并，单点贡献依赖 | 巴士因子=1 的极端风险，交付瓶颈 |
| **TinyClaw** | 24h 零活动 | 项目存续性存疑 |

---

## 7. 值得关注的趋势信号

### 信号一：国产模型适配成为"入场券"而非差异化
> DeepSeek V4 系列在 **4 个项目同日出现兼容性问题**（OpenClaw OAuth 化、PicoClaw 历史记录错乱、CoPaw reasoning_content 缺失、LobsterAI schema 拒绝），反映国产模型迭代速度已超越开源项目的测试覆盖能力。**建议**：建立模型适配的自动化兼容性矩阵（如 IronClaw 的金丝雀机制，但需避免其当前的双失败困境）。

### 信号二：MCP 从"协议标准"转向"运维复杂度"
> PicoClaw 的 MCP CLI 管理工具（#2641）终结手动 JSON 编辑，Moltis 内置 MCP 服务器管理技能（#840），OpenClaw 修复配置继承丢弃问题（#70916）。信号表明 **MCP 生态进入"规模化运维"阶段**，工具数量膨胀带来的配置管理痛点将催生新一代 MCP 专用 DevOps 工具。

### 信号三：安全沙箱的"精度悖论"
> ZeroClaw `git -C` 误杀（#5809）、Moltis Landlock 调试日志诉求（#868）、CoPaw Windows 路径防护（#3781）共同揭示：**粗粒度安全策略正在系统性伤害开发者体验**。下一代沙箱需从"命令白名单"演进至"参数模式级语义分析"，否则企业合规场景的技能生态将面临枯萎。

### 信号四：多智能体架构的"协议碎片化"
> Hermes 编排插件（PR #15422）、ZeroClaw RFC #5890、PicoClaw delegate 工具（#2531）各自探索，但 **无跨项目协议共识**。A2A（Agent-to-Agent）协议（NullClaw #844 进度提示）尚未形成事实标准，存在 Google 主导规格 vs. 社区去中心化实现的张力。

### 信号五：企业 IM 集成的"深度壁垒"
> 钉钉文件上传（NanoBot #3344）、飞书长连接（ZeptoClaw #546）、企业微信待实现（ZeroClaw #3090）、Teams 线程修复（NanoBot #3432）显示：**简单 Webhook 已无法满足企业场景**，需要消息缓冲窗口、Cron 分段、隐私脱敏、本地路径隔离等深度适配。这将成为区分"个人玩具"与"企业平台"的核心护城河。

### 对开发者的行动建议
| 优先级 | 行动 |
|:---|:---|
| **立即** | 评估 DeepSeek V4 适配状态，冻结生产环境模型版本至验证通过 |
| **短期** | 投资 MCP 配置管理自动化，预判工具规模膨胀的运维成本 |
| **中期** | 参与 A2A 协议社区讨论，避免多智能体架构的 vendor lock-in |
| **长期** | 将企业 IM 深度集成纳入产品路线图核心，而非通道扩展的"最后一公里" |

---

*报告完成。如需特定项目的深度拆解或历史趋势对比，可进一步提供数据。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-25

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内处理 **41 个 PR**（合并/关闭 34 个，待审 7 个）和 **16 个 Issue**（关闭 6 个，新增/活跃 10 个）。项目处于**密集迭代期**，核心聚焦三大方向：**稳定性加固**（LLM 超时防护、内存优化）、**多通道体验升级**（Telegram/Teams/WebUI 视频与线程回复）、**基础设施现代化**（懒加载、Token 预算管理）。值得注意的是，今日无新版本发布，但多个高价值 PR 已就绪，预计近期将有版本集中释放。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔒 稳定性与可靠性

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#3428](https://github.com/HKUDS/nanobot/pull/3428) `fix(agent): add LLM request timeout to prevent session lock starvation` | 为 LLM 请求添加 wall-clock 超时保护，防止挂起请求永久持有会话锁 | **关键修复**：解决 Agent 死锁导致整个会话无响应的 P0 问题（对应 Issue #3424） |
| [#3427](https://github.com/HKUDS/nanobot/pull/3427) `Fix session replay token budgeting and cap session file growth; normalize DeepSeek content payloads` | Token 感知的历史记录裁剪 + 会话文件硬上限 + DeepSeek content 类型规范化 | 根治会话无限增长、DeepSeek 400 错误，生产环境稳定性大幅提升 |

### ⚡ 性能优化

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#3423](https://github.com/HKUDS/nanobot/pull/3423) `perf(document): lazy-import heavy document parsers` | 将 `pypdf`、`python-docx`、`openpyxl`、`python-pptx` 从模块级导入移至函数内 | **启动内存降低 ~25 MB**，解决 #3410 报告的 v0.1.5.post2 内存暴涨问题 |

### 📺 多通道媒体体验

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#3430](https://github.com/HKUDS/nanobot/pull/3430) `feat(webui): render video media attachments` | WebSocket 返回签名 `media_urls`，WebUI 支持视频内联播放 | WebUI 从纯文本跃升至富媒体交互 |
| [#3429](https://github.com/HKUDS/nanobot/pull/3429) `feat(channels): add video support for Telegram and WebSocket` | Telegram `send_video` 替代 `send_document`，支持流式播放；入站过滤扩展 VIDEO/VIDEO_NOTE/ANIMATION | Telegram 用户体验质变，视频从文件附件变为内联播放器 |
| [#3432](https://github.com/HKUDS/nanobot/pull/3432) `fix(msteams): send threaded replies via replyToId` | 修复 Teams 线程回复目标端点，清理过期 conversation refs | Microsoft Teams 企业场景可用性修复 |

### 🔧 基础设施与工程化

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#1403](https://github.com/HKUDS/nanobot/pull/1403) `security: deny by default in is_allowed for all channels` | 未配置 `allow_from` 时默认拒绝全部访问 | **安全加固**：消除"启用通道即暴露"的默认开放风险 |
| [#1272](https://github.com/HKUDS/nanobot/pull/1272) `Modernize engineering workflow: Ruff, Pre-commit, and Contributor Guidelines` | 引入 Ruff、Pre-commit、结构化贡献指南 | 长期代码健康度与社区协作效率提升 |

**整体评估**：今日合并的 PR 覆盖从核心引擎（Agent 超时、Token 预算）到用户界面（视频渲染）再到安全基线（默认拒绝）的全栈改进，项目在生产就绪度上迈出实质性步伐。

---

## 4. 社区热点

### 最热讨论：Provider 容灾能力缺失

| 项目 | 数据 |
|:---|:---|
| **Issue #3376** | [支持模型异常自动切换（Provider / Model Failover）](https://github.com/HKUDS/nanobot/issues/3376) |
| 作者 | @1723229 |
| 评论数 | **7**（今日最高）|
| 👍 | 1 |

**核心诉求**：用户已配置多 Provider 作为冗余，但 NanoBot 仅能在单 Provider 内重试，无法跨 Provider 故障转移。场景覆盖超时、429 限流、5xx 服务不可用等。

**信号解读**：这是**企业级部署的硬需求**。当前 Issue 无关联 PR，但 #3428 的 timeout 机制和 #3427 的多模型支持基础设施可能为后续 Failover 实现铺路。建议维护者回应路线图。

---

### 最受关注：CLI 自更新命令提案

| 项目 | 数据 |
|:---|:---|
| **Issue #3421** | [RFC: Should we add a `nanobot update` command?](https://github.com/HKUDS/nanobot/issues/3421) |
| 作者 | @chengyongru |
| 评论数 | 4 |
| 状态 | 开放，当日创建即获讨论 |

**核心诉求**：封装 `pip install --upgrade nanobot-ai` / `uv` 等命令，提供一键更新体验。

**信号解读**：反映项目迭代速度快、用户跟进成本高。与 #1272 的工程现代化方向一致，属于**开发者体验（DX）优化**，实现成本低、用户感知度高。

---

### 企业集成痛点：钉钉文件上传

| 项目 | 数据 |
|:---|:---|
| **Issue #3344** | [DingTalk Group Can not Seed file to Nanobot Agent](https://github.com/HKUDS/nanobot/issues/3344) |
| 作者 | @AIRobotZhang |
| 评论数 | 4 |
| 更新 | 今日活跃 |

**核心诉求**：钉钉群中文件上传和 @nanobot 分开发送，导致 Bot 无法关联文件与指令。

**信号解读**：中国企业用户高频场景，需钉钉侧消息合并机制或 Bot 侧消息缓冲窗口。与 Teams 修复 (#3432) 同属**企业 IM 适配深度**问题。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 死锁/无响应** | [#3424](https://github.com/HKUDS/nanobot/issues/3424) Agent loop deadlocks when LLM API call hangs | LLM 挂起导致整个 Agent 无响应，包括心跳和新消息 | **已关闭** | ✅ [#3428](https://github.com/HKUDS/nanobot/pull/3428) |
| 🔴 **P0 - 回归** | [#3426](https://github.com/HKUDS/nanobot/issues/3426) OpenAI Codex provider no longer streams `_progress` deltas | v0.1.4.post6 → v0.1.5.post2 进度流丢失，最终响应正常但无实时反馈 | **开放** | ❌ 无 |
| 🟡 **P1 - 内存暴涨** | [#3410](https://github.com/HKUDS/nanobot/issues/3410) Large RAM consumption in v0.1.5.post2 | v0.1.4 (~200MB) → v0.1.5.post2 (~600MB)，疑似 "dream" 功能引入 | **开放** | 🔄 [#3423](https://github.com/HKUDS/nanobot/pull/3423) 部分缓解（启动内存），运行时内存待查 |
| 🟡 **P1 - API 兼容性** | [#3417](https://github.com/HKUDS/nanobot/issues/3417) anthropic_provider hardcodes `temperature=1.0` — Claude Opus 4.7 rejects with 400 | 新模型已废弃 `temperature` 参数，硬编码导致 400 错误 | **已关闭** | ✅ 已修复（当日关闭）|
| 🟡 **P1 - 渲染不一致** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) Telegram not correctly rendering markdown reliably | v0.1.4.post6 后 Markdown 渲染时好时坏，非确定性 | **开放** | ❌ 无 |
| 🟢 **P2 - 工具调用错误** | [#3390](https://github.com/HKUDS/nanobot/issues/3390) Tool Call: "Sorry, I encountered an error." | clean workspace 后工具调用链断裂，后续所有调用失败 | **已关闭** | 未明确关联 PR |

**关键风险**：#3426 的 Codex 流式回归无 fix PR，影响实时编码体验；#2568 的 Telegram Markdown 非确定性问题长期悬置，损害用户信任。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 可行性评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) Provider/Model Failover | 跨 Provider 异常自动切换 | 中高。需重构 Provider 调度层，但 #3427 的多模型基础设施已铺垫 | ⭐⭐⭐⭐☆ **高** |
| [#3421](https://github.com/HKUDS/nanobot/issues/3421) `nanobot update` CLI | 一键自更新 | 高。纯 CLI 封装，无架构改动 | ⭐⭐⭐⭐⭐ **极高** |
| [#3309](https://github.com/HKUDS/nanobot/issues/3309) Per-chat group policy overrides for Telegram | 多群组的独立行为策略 | 中。需配置层级重构，与 #1435 多实例方向一致 | ⭐⭐⭐☆☆ |
| [#3433](https://github.com/HKUDS/nanobot/issues/3433) Prune stale MSTeams conversation refs | 自动清理过期 Teams 会话引用 | 高。#3432 已包含部分实现，可快速跟进 | ⭐⭐⭐⭐⭐ **极高** |
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) 微信对话最多返回10条消息 | 突破微信上下文长度限制 | 低。受限于微信协议/官方接口，非 NanoBot 可控 | ⭐⭐☆☆☆ |

---

## 7. 用户反馈摘要

### 😤 痛点

> *"I recently upgrade to the latest version... it states 'I am sorry, but I cannot fulfill this request as the skill-creator tool is not available'"*  
> — @stephenrt42, [#2049](https://github.com/HKUDS/nanobot/issues/2049)

**技能创建能力在版本升级中丢失**，功能回归或文档缺失导致用户困惑。关闭状态但无明确修复说明，需关注是否真正解决。

> *"Nanobot is moving fast — recent weeks have seen multiple patch rele..."*  
> — @chengyongru, [#3421](https://github.com/HKUDS/nanobot/issues/3421)

**版本迭代快 = 升级负担重**，用户明确呼吁官方封装更新流程。

> *"With v0.1.4 memory use stayed under ~200 MB... with v0.1.5.post2 it's around ~600 MB"*  
> — @gqcao, [#3410](https://github.com/HKUDS/nanobot/issues/3410)

**资源敏感型部署（边缘设备、多实例）受冲击**，"dream" 功能默认启用策略需审视。

### 😊 满意

> Telegram 视频从文件附件变为内联播放器，WebUI 支持视频渲染 — 媒体体验升级获直接收益。

### 🎯 场景洞察

- **企业多租户**：Teams 线程修复 (#3432)、钉钉文件 (#3344)、Telegram 分群策略 (#3309) 共同指向**同一 Bot 多工作区/多群组**的复杂部署场景
- **7×24 无人值守**：Failover (#3376) + 死锁修复 (#3424) + 超时防护 (#3428) = 用户对**连续性**的硬性要求

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#2568](https://github.com/HKUDS/nanobot/issues/2568) Telegram Markdown 渲染不稳定 | 2026-03-27 | **今日** | 近 1 个月无 fix，用户体验持续受损 | 分配专项排查，怀疑与解析器或 Telegram API 变更相关 |
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) 微信 10 条消息限制 | 2026-04-03 | **今日** | 中文用户高频场景，技术限制未明确沟通 | 维护者回应：确认是微信侧限制还是 NanoBot 分页逻辑，提供 workaround |
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) Provider Failover | 2026-04-22 | **今日** | 企业级需求，7 评论无维护者深度参与 | 路线图回应：是否纳入 v0.1.6？需社区设计评审 |
| [#3426](https://github.com/HKUDS/nanobot/issues/3426) Codex 流式回归 | **今日** | **今日** | 当日创建，零评论，无 PR | 紧急标记，关联 Provider 维护者，可能需回滚或热修复 |

---

**日报生成时间**：2026-04-25  
**数据来源**：HKUDS/nanobot GitHub 公开活动  
**健康度评分**：🟢🟢🟢🟡⚪ （7/10，活跃度高但回归问题需警惕）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-25

---

## 1. 今日速览

Hermes Agent 今日保持**极高活跃度**，24小时内 Issues 和 PR 各更新50条，形成1:4的关闭/合并与新增比例，显示社区提交旺盛但维护吞吐存在瓶颈。P1级Bug集中在**Nix构建系统**（npmDepsHash漂移）、**DeepSeek V4推理链**（reasoning_content传递）及**Slack/Telegram网关**（会话隔离、命令解析）三大领域。值得关注的是，同一贡献者（geminiyubing-jpg）单日提交4个大型功能PR（多智能体编排、自进化系统、VSCode扩展、飞书重构），引发代码审查负荷担忧。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已关闭 PR（8条中的关键项）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #15418 | teknium1 | **网关恢复跟随压缩续链**：`/resume <title>` 现在正确跟随 CLI 已实现的压缩子会话链，修复网关恢复后打开空父会话的问题 | [PR #15418](https://github.com/NousResearch/hermes-agent/pull/15418) |
| #15420 | briandevans | **Nix npmDepsHash 紧急修复**：同步 `ui-tui/` 和 `web/` 的 `fetchNpmDeps` 哈希，解除持续数日的 CI 阻塞（关联 #15244, #15272, #15314） | [PR #15420](https://github.com/NousResearch/hermes-agent/pull/15420) |

### 已关闭 Issues（10条中的关键项）

| Issue | 说明 | 链接 |
|:---|:---|:---|
| #13626 | **Google Workspace Skill Nix 兼容性修复**：Google API 依赖缺失 + pip 不可用问题已解决 | [Issue #13626](https://github.com/NousResearch/hermes-agent/issues/13626) |
| #14940 | **阿里云 Coding Plan 模型切换修复**：自动解析忽略用户配置的回归问题已关闭 | [Issue #14940](https://github.com/NousResearch/hermes-agent/issues/14940) |
| #15353 | **DeepSeek V4 reasoning_content 缺失导致400**：工具调用消息缺少推理内容的问题已修复 | [Issue #15353](https://github.com/NousResearch/hermes-agent/issues/15353) |
| #15236 | **压缩会话损坏 tool_calls JSON 砖化聊天**：上下文压缩后子会话包含截断 JSON 的严重问题已关闭 | [Issue #15236](https://github.com/NousResearch/hermes-agent/issues/15236) |
| #15218 | **中断轮次同步外部记忆**：外部记忆提供者现在跳过中断轮次，避免持久化不完整思考 | [Issue #15218](https://github.com/NousResearch/hermes-agent/issues/15218) |

**整体推进评估**：核心修复集中在**会话压缩可靠性**和**Nix构建稳定性**两个长期痛点，但42个待合并PR的积压表明审查管道需要扩容。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | #13626 [CLOSED] Google Workspace Skill Nix 不可用 | 4 | **Nix 生态完整性**：纯声明式环境无法运行动态依赖技能，要求官方提供 Nix 原生打包或文档化绕行方案 | [Issue #13626](https://github.com/NousResearch/hermes-agent/issues/13626) |
| 2 | #11425 Skills 生命周期管理 | 3 | **规模化治理**：89+技能无使用追踪、无过期检测，导致安装膨胀和性能衰减 | [Issue #11425](https://github.com/NousResearch/hermes-agent/issues/11425) |
| 3 | #411 迁移至 Google 官方 Workspace CLI (gws) | 3 | **上游对齐**：Google 官方 Rust CLI 自动覆盖全 API 表面，替代当前手动维护的 Python 封装 | [Issue #411](https://github.com/NousResearch/hermes-agent/issues/411) |
| 4 | #11524 "The AI That Remembers You" 官方定位提案 | 3 | **品牌叙事**：AIDA框架驱动的营销定位 RFC，试图为 Hermes 冲刺 100k stars 提供传播策略 | [Issue #11524](https://github.com/NousResearch/hermes-agent/issues/11524) |
| 5 | #15080 Claude Max 订阅 Anthropic 原生 400 错误 | 3 | **企业订阅兼容性**：OAuth token 有效但请求被拒，涉及订阅层级与 API 权限映射的模糊地带 | [Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) |

### 背后诉求分析

- **Nix 用户群体壮大**：#13626、#15314、#15420 形成连锁反应，表明 Nix 已成为核心用户的部署首选，但前端 Node 依赖的哈希漂移问题反复出现，指向 CI 阶段缺少 `prefetch-npm-deps` 的自动化校验。
- **营销与技术的张力**：#11524 以"AI为AI冲星"的元叙事引发关注，但零 👍 反应显示社区对技术项目过度营销化持保留态度。

---

## 5. Bug 与稳定性

### P1（严重，阻塞生产）

| Issue | 状态 | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #15314 | **OPEN** | `hermes-tui` npmDepsHash 过期，Nix 纯净构建失败 | #15420（已开，待合并） | [Issue #15314](https://github.com/NousResearch/hermes-agent/issues/15314) |
| #15213 | **OPEN** | DeepSeek V4 Pro `reasoning_content` 在 cron/辅助路径回传失败，HTTP 400 | 无 | [Issue #15213](https://github.com/NousResearch/hermes-agent/issues/15213) |
| #15141 | **OPEN** | **TUI 原生内存泄漏**：RSS 40分钟膨胀至 13+ GB（Node.js Ink 渲染器） | 无 | [Issue #15141](https://github.com/NousResearch/hermes-agent/issues/15141) |
| #15415 | **OPEN** | Telegram 群组 bot 菜单命令（`/cmd@botname`）被丢弃 | #15417（已开，待合并） | [Issue #15415](https://github.com/NousResearch/hermes-agent/issues/15415) |

### P2（高优先级）

| Issue | 状态 | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #15421 | **OPEN** | Slack 顶层消息创建隔离会话，`sessions.json` 压缩后不持久 | 无 | [Issue #15421](https://github.com/NousResearch/hermes-agent/issues/15421) |
| #14940 | **CLOSED** | 阿里云 Coding Plan 模型切换失败 | 已修复 | [Issue #14940](https://github.com/NousResearch/hermes-agent/issues/14940) |
| #11560 | **OPEN** | `hermes profile --clone-all` 递归符号链接导致 RecursionError | 无 | [Issue #11560](https://github.com/NousResearch/hermes-agent/issues/11560) |
| #11447 | **OPEN** | 企业微信图片解密失败 + 群@提及未剥离 | 无 | [Issue #11447](https://github.com/NousResearch/hermes-agent/issues/11447) |

### 关键稳定性信号

- **内存泄漏为新发严重问题**：#15141 的 TUI RSS 泄漏与 4月23-24 提交 `bd929ea5`、`67bfd4b8` 强相关，需紧急回滚或修复。
- **DeepSeek V4 推理链碎片化**：#15213 与已关闭的 #15353 是同一根因在不同路径的表现，说明 `reasoning_content` 复制逻辑在 cron/辅助分支存在遗漏。

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本（已有配套 PR 或强社区信号）

| 功能 | Issue/PR | 状态 | 纳入概率 | 链接 |
|:---|:---|:---|:---:|:---|
| **多智能体编排插件**（并行/顺序/MapReduce/DAG） | PR #15422 | 待合并 | ⭐⭐⭐⭐⭐ | [PR #15422](https://github.com/NousResearch/hermes-agent/pull/15422) |
| **自进化系统**（夜间反思+策略优化） | PR #15426 | 待合并 | ⭐⭐⭐⭐⭐ | [PR #15426](https://github.com/NousResearch/hermes-agent/pull/15426) |
| **VSCode 扩展**（内置聊天界面） | PR #15423 | 待合并 | ⭐⭐⭐⭐☆ | [PR #15423](https://github.com/NousResearch/hermes-agent/pull/15423) |
| **MiniMax OAuth PKCE 登录** | PR #15419 | 待合并 | ⭐⭐⭐⭐☆ | [PR #15419](https://github.com/NousResearch/hermes-agent/pull/15419) |
| **Telegram 通用内联键盘** | Issue #15311 | 开放 | ⭐⭐⭐☆☆ | [Issue #15311](https://github.com/NousResearch/hermes-agent/issues/15311) |
| **技能生命周期管理**（使用追踪/过期清理） | Issue #11425 | 开放（👍: 2） | ⭐⭐⭐☆☆ | [Issue #11425](https://github.com/NousResearch/hermes-agent/issues/11425) |

### 路线图观察

- **geminiyubing-jpg 的"四连发"** 显示外部贡献者试图一次性建立大型功能领地，但缺乏对应 Issue 的前期讨论，存在**架构审查风险**和**合并冲突概率**。
- **OpenCode Go 模型支持**（#13181，👍: 6）社区呼声最高但无配套 PR，是明确的贡献者机会窗口。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **Nix 用户构建挫败** | #15314, #13626, #15272 | "每次前端更新都破坏构建，CI 红几天才修" — 哈希漂移成为 Nix 用户体验的系统性障碍 |
| **Slack 企业部署会话丢失** | #15421 | 顶层消息隔离 + 压缩后 `sessions.json` 不持久，导致企业用户"每次对话都像第一次" |
| **DeepSeek 长程任务不可靠** | #15213 | 推理链在 cron 场景断裂，生产环境不敢启用 thinking 模式 |
| **技能安装后的"僵尸化"** | #11425 | 89+技能无淘汰机制，"安装时兴奋，三个月后忘记存在" |

### 满意度信号

- **Discord 端到端修复**（PR #15091）显示平台适配质量在提升，用户期待"像 Slack 一样稳定"。
- **外部记忆预取上下文预览**（PR #15412）的精细化 UX 设计获得隐性认可（无负面反馈）。

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 天数 | 风险 | 行动建议 | 链接 |
|:---|:---:|:---|:---|:---|
| #15141 TUI 内存泄漏 | 1 | **生产崩溃**，RSS 13GB+ | 立即审查 4/23-24 提交，考虑 hotfix 分支 | [Issue #15141](https://github.com/NousResearch/hermes-agent/issues/15141) |
| #15213 DeepSeek V4 cron 推理链断裂 | 1 | 与已关闭 #15353 同源，修复不完整 | 指派原修复者审查 cron 路径的 `_copy_reasoning_content_for_api` | [Issue #15213](https://github.com/NousResearch/hermes-agent/issues/15213) |
| #11425 技能生命周期管理 | 8 | 高 👍 (2)，长期无维护者响应 | 标记为 `help-wanted` 或纳入 v0.9.0 路线图 | [Issue #11425](https://github.com/NousResearch/hermes-agent/issues/11425) |
| #411 迁移 Google Workspace CLI | 51 | 技术债务，Google 官方工具已成熟 | 评估 gws 的 Rust 依赖与 Nix 兼容性后决策 | [Issue #411](https://github.com/NousResearch/hermes-agent/issues/411) |
| geminiyubing-jpg 四连发 PR | 1 | **审查负荷爆炸**，4600+行飞书重构 + 三个新插件 | 要求拆分 PR，补充架构设计文档和测试计划 | #15422, #15423, #15424, #15425 |

### 健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issues 关闭率 | 20% (10/50) | ⚠️ 偏低，新增远超解决 |
| PR 合并率 | 16% (8/50) | ⚠️ 严重偏低，审查瓶颈 |
| P1 Bug 平均响应 | <24h | ✅ 严重问题响应及时 |
| 单贡献者 PR 集中度 | 4/20 活跃 PR 来自同一新人 | ⚠️ 需引导协作规范 |

---

*日报生成时间：2026-04-25 | 数据来源：NousResearch/hermes-agent GitHub 公开活动*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-25

## 1. 今日速览

PicoClaw 今日呈现**高活跃度开发态势**：38 条 PR 更新（19 待合并/19 已处理）、12 条 Issues 更新（8 活跃/4 关闭），并发布 nightly 构建版本。项目核心聚焦于 **Agent 推理内容管理**、**MCP 工具生态完善**、**DeepSeek 提供商兼容性修复**三大方向。社区贡献者 `afjcjsbx`、`SiYue-ZO` 表现尤为活跃，单日提交多个关键修复。整体健康度良好，但 Windows 构建体验和移动端交互仍有优化空间。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.7-nightly.20260424.f4400472
- **发布时间**: 2026-04-24
- **类型**: 自动化构建（可能不稳定，建议谨慎使用）
- **变更范围**: [v0.2.7...main 完整对比](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)
- **注意事项**: 此为夜间自动构建，非稳定版本；生产环境建议等待正式 v0.2.7 发布

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2641](https://github.com/sipeed/picoclaw/pull/2641) | afjcjsbx | **MCP CLI 管理套件**：`picoclaw mcp` 命令组实现 CRUD 全生命周期管理 | **里程碑级**：终结手动编辑 JSON 配置的时代，大幅降低 MCP 工具接入门槛 |
| [#2487](https://github.com/sipeed/picoclaw/pull/2487) | SiYue-ZO | **Windows 构建流程修复**：移除 Unix-only 假设，修复 `make build` 跨平台兼容性 | 打通 Windows 开发者参与路径，回应社区长期诉求 |
| [#2256](https://github.com/sipeed/picoclaw/pull/2256) | mateea326 | **WebSocket 安全加固**：默认禁止空 AllowOrigins 的跨源请求，防范 CSWSH 攻击 | 安全基线提升，符合企业部署合规要求 |
| [#2573](https://github.com/sipeed/picoclaw/pull/2573) | shaun0927 | **web_search 路由隔离**：UI 语言变更不再污染全局后端路由决策 | 修复状态泄漏架构缺陷，提升多租户稳定性 |

**整体进展评估**: 今日合并聚焦**工具生态（MCP CLI）**、**跨平台支持（Windows）**、**安全加固**三大基础设施层，属于"修桥铺路"型进展，为后续功能爆发奠定根基。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#2448](https://github.com/sipeed/picoclaw/issues/2448) WebUI Chat 推理内容与回复合并暴露 | **3 评论** | **核心痛点**：Agent 内部思维链直接暴露给用户，严重损害产品化体验；已关闭但同类问题 [#2648](https://github.com/sipeed/picoclaw/issues/2648)、[#2650](https://github.com/sipeed/picoclaw/issues/2650) 仍在蔓延 |
| 2 | [#2376](https://github.com/sipeed/picoclaw/issues/2376) 禁用 Enter 键发送消息 | **3 评论** | 移动端（Android）输入体验诉求强烈，反映**跨平台交互设计滞后**于移动端使用场景 |
| 3 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) 流式 HTTP 请求配置支持 | **2 评论** | 企业级 LLM 集成需求，对标 OpenAI Python 客户端标准行为 |

**诉求洞察**: 社区正从"能用"向"好用"进化——**推理可见性控制**、**移动端体验**、**企业级流式接口**成为新分水岭。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2648](https://github.com/sipeed/picoclaw/issues/2648) | DeepSeek 历史记录中推理内容位置错乱导致 400 错误 | 🔄 [#2657](https://github.com/sipeed/picoclaw/pull/2657) 已提交，待合并 |
| 🔴 **高** | [#2650](https://github.com/sipeed/picoclaw/issues/2650) | DeepSeek-V4-Flash 开启推理时工具调用后崩溃 | 🔄 疑似同根问题，待 #2657 验证 |
| 🟡 **中** | [#2665](https://github.com/sipeed/picoclaw/issues/2665) | Anthropic 模型 ID 格式错误（点号 vs 短横线） | ❌ 暂无 PR，影响 Android 端 |
| 🟡 **中** | [#2616](https://github.com/sipeed/picoclaw/issues/2616) | DuckDuckGo 未启用时 web_search 工具未注册 | ✅ **已修复关闭** |
| 🟡 **中** | [#2572](https://github.com/sipeed/picoclaw/issues/2572) | UI 语言变更泄漏至后端 web_search 路由 | ✅ **已修复关闭** |
| 🟢 **低** | [#2448](https://github.com/sipeed/picoclaw/issues/2448) | WebUI 推理与回复内容合并显示 | ✅ **已修复关闭** |

**关键风险**: DeepSeek 推理模式下的**历史记录 canonical 化**是今日最紧迫的稳定性问题，[#2657](https://github.com/sipeed/picoclaw/pull/2657) 的合并进度直接影响中文社区核心用户体验。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 成熟度评估 | 纳入概率 |
|:---|:---|:---|:---|
| **串口工具支持（UART）** | [#2649](https://github.com/sipeed/picoclaw/issues/2649) | 高：已有 I2C/SPI 先例，嵌入式场景刚需 | ⭐⭐⭐⭐⭐ **极高** |
| **GitHub Copilot 提供商** | [#2652](https://github.com/sipeed/picoclaw/issues/2652) | 低：仅标题，无详细方案 | ⭐⭐⭐ 中等 |
| **MQTT 通道支持** | [#2653](https://github.com/sipeed/picoclaw/pull/2653) | 高：PR 已提交，IoT 场景明确 | ⭐⭐⭐⭐⭐ **极高** |
| **Prompt 分层机制** | [#2656](https://github.com/sipeed/picoclaw/pull/2656) | 高：架构级重构，内部结构化元数据 | ⭐⭐⭐⭐ 高（架构债务清理） |
| **跨 Agent 任务委托（delegate tool）** | [#2531](https://github.com/sipeed/picoclaw/pull/2531) | 高：Phase 2 计划 #2148 的 C 阶段 | ⭐⭐⭐⭐ 高（路线图内） |
| **流式 HTTP 配置** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 中：需求明确，实现方案简单 | ⭐⭐⭐⭐ 高 |
| **Enter 键行为可配置** | [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 中：移动端体验优化 | ⭐⭐⭐⭐ 高 |

**路线图信号**: 项目正从**单一聊天机器人**向**多 Agent 协作系统** + **嵌入式硬件网关**演进，Prompt 分层和 delegate 工具是架构升级的关键标志。

---

## 7. 用户反馈摘要

### 😤 核心痛点
- **推理内容"裸奔"**: "Agent 的内部思维直接贴在回复里，完全没法给最终用户看"（[#2448](https://github.com/sipeed/picoclaw/issues/2448)）
- **移动端输入灾难**: "Android 上按回车就发送，根本没法换行写长消息"（[#2376](https://github.com/sipeed/picoclaw/issues/2376)）
- **Windows 开发者被排斥**: "Makefile 全是 Unix 假设，Windows 根本编不过"（[#2651](https://github.com/sipeed/picoclaw/issues/2651) 关联 [#2487](https://github.com/sipeed/picoclaw/pull/2487)）

### 🎯 使用场景
- **NAS 私有部署**: Synology NAS + Docker 成为家庭/小团队部署主流（[#2448](https://github.com/sipeed/picoclaw/issues/2448)）
- **嵌入式硬件控制**: 用户明确需要 UART 与现有 I2C/SPI 工具互补（[#2649](https://github.com/sipeed/picoclaw/issues/2649)）
- **多模型混合策略**: DeepSeek 推理模型 + 工具调用成为高频组合（[#2650](https://github.com/sipeed/picoclaw/issues/2650)）

### ✅ 满意度信号
- MCP CLI 管理工具获期待：终结手动 JSON 编辑被多次呼吁
- 安全加固（CSWSH 修复）获认可：企业用户部署信心提升

---

## 8. 待处理积压

| 类型 | 编号 | 描述 | 滞留时间 | 风险提示 |
|:---|:---|:---|:---|:---|
| PR | [#1780](https://github.com/sipeed/picoclaw/pull/1780) | QQ 通道稳定性参数可配置 | **36 天** | 即时通讯场景核心体验，长期未合并导致 QQ 用户流失 |
| PR | [#2163](https://github.com/sipeed/picoclaw/pull/2163) | Google Antigravity OAuth scope 刷新保持 | **27 天** | 企业 Google Workspace 集成阻断性故障 |
| PR | [#2415](https://github.com/sipeed/picoclaw/pull/2415) | 配置错误诊断精确化（行列号定位） | **18 天** | 新手 onboarding 体验关键优化 |
| PR | [#2531](https://github.com/sipeed/picoclaw/pull/2531) | delegate 跨 Agent 任务委托工具 | **10 天** | Phase 2 路线图核心功能，需架构评审资源 |

**维护者行动建议**: [#1780](https://github.com/sipeed/picoclaw/pull/1780) 和 [#2163](https://github.com/sipeed/picoclaw/pull/2163) 已超 3 周无响应，建议优先分配 review 资源或明确关闭理由，避免贡献者流失。

---

> **数据来源**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub 公开数据  
> **报告生成**: 2026-04-25 | 覆盖周期: 2026-04-24 00:00 - 24:00 UTC

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-25

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> **日期**: 2026-04-25（数据截止：过去24小时）

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度、高修复压力**的双重特征。v2 架构（4月22日发布）正处于**关键磨合期**：社区密集报告了 7 个新增/活跃 Issue，其中 5 个直接关联 v2 安装与配置流程；PR 侧 37 条更新中 26 条已合并/关闭，显示维护团队响应迅速，但仍有 11 个 PR 待审，包括 2 个核心可观测性功能和 3 个自定义端点支持方案。SSL 证书问题持续 27 天未解决，成为品牌信任隐患。整体健康度：**功能迭代积极，稳定性债务累积，文档与基础设施需补课**。

---

## 2. 版本发布

**无新版本发布**。最新版本仍为 **v2.0**（2026-04-22），当前处于早期采用者验证阶段。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（26 条中的核心项）

| PR | 作者 | 贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#1965](https://github.com/qwibitai/nanoclaw/pull/1965) | danshapiro | **修复"幽灵回复"bug**：对话成功完成但用户看不到任何回复 | 消除核心 UX 断裂，提升用户信任 |
| [#1963](https://github.com/qwibitai/nanoclaw/pull/1963) | grtwrn | **修复频道注册双 bug**：`engage` 字段错误 + 原生 JID 前缀问题 | 解锁 `/manage-channels` 多频道扩展能力 |
| [#1967](https://github.com/qwibitai/nanoclaw/pull/1967) | IamAdamJowett | **双 correctness fix**：按 provider 的 continuation 路由 + agent-route 文件转发 | 为多 provider 架构奠定正确性基础 |
| [#1977](https://github.com/qwibitai/nanoclaw/pull/1977) | glifocat | **清理 pre-v2 残留文件**：删除过时的 `groups/*/CLAUDE.md` | 减少新用户认知负担 |
| [#1978-1980](https://github.com/qwibitai/nanoclaw/pull/1978) | glifocat | **文档三连击**：历史架构标注 + 术语刷新 + schema 更新 | 缓解 v2 文档滞后问题 |
| [#1991-1992](https://github.com/qwibitai/nanoclaw/pull/1991) | Jeffrey-Keyser | **工具调用日志（迭代关闭）**：从 IPC 方案演进为启动迁移方案 | 见 [#1990](https://github.com/qwibitai/nanoclaw/pull/1990) 最新 OPEN 版本 |

**整体评估**：今日合并聚焦 **"v2 稳定性补丁 + 可观测性基建 + 文档还债"** 三条主线，项目从"功能发布"向"生产就绪"过渡，但多频道架构和自定义端点支持仍处于 OPEN 状态，构成下一冲刺的关键路径。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) nanoclaw.dev SSL 证书失效 | **18 条** | **基础设施信任危机**。27 天未修复的证书问题直接阻断新用户首次体验，评论累积反映社区对项目运营专业度的焦虑。非技术复杂度问题，纯运维响应优先级判断 |
| 🔥2 | [#1984](https://github.com/qwibitai/nanoclaw/issues/1984) 自定义 OpenAI 兼容端点支持 | **3 条** | **企业/高级用户的核心诉求**：Codex + OpenCode 的文档声称支持 BYO 端点，但实际路由失败。TeeJS 同日提交 [#1994](https://github.com/qwibitai/nanoclaw/pull/1994) + [#1995](https://github.com/qwibitai/nanoclaw/pull/1995) 双 PR 响应，显示需求与供给紧密咬合 |
| 3 | [#414](https://github.com/qwibitai/nanoclaw/issues/414) Linux docker group 过期检测不修复 | **1 条** | 长期潜伏的安装体验问题，`checkDockerGroupStale()` 只警告不阻断，服务启动即失败。v2 安装量上升可能放大影响 |

**诉求提炼**：社区从"功能尝鲜"转向"生产部署"，对**安装鲁棒性、文档准确性、基础设施可靠性**的要求急剧提升。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1982](https://github.com/qwibitai/nanoclaw/issues/1982) | **v2 双频道重复回复**：配对第二个 Telegram 频道后，每条消息触发双回复 | OPEN，无评论 | ❌ 无 |
| 🔴 **高** | [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) | **systemd 误判缺失**：headless Linux SSH 会话中 `systemctl --user` 可用但 setup 报错 | OPEN，无评论 | ❌ 无 |
| 🟡 **中** | [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) | **`onecli` PATH 未传播**：bash 子进程继承父 shell PATH，找不到 `~/.local/bin/onecli` | OPEN，无评论 | ❌ 无 |
| 🟡 **中** | [#414](https://github.com/qwibitai/nanoclaw/issues/414) | **docker group 过期不修复**：检测后只警告，服务启动失败 | OPEN，2月创建 | ❌ 无 |
| 🟢 **低** | [#1971](https://github.com/qwibitai/nanoclaw/issues/1971) | **CLI-only 安装验证失败**：无消息频道凭证时 `setup/verify.ts` 误报失败 | ✅ CLOSED | 已修复 |

**回归风险**：[#1982](https://github.com/qwibitai/nanoclaw/issues/1982) + [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) 均为 **v2 新引入的安装/配置路径 bug**，且均由同一用户 `bromleymindfulness` 在 Hetzner Ubuntu 环境发现，提示 **headless VPS 场景测试覆盖不足**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入信号 |
|:---|:---|:---|:---|
| **自定义 OpenAI 兼容端点**（LiteLLM/llama.cpp/vLLM/本地代理） | [#1984](https://github.com/qwibitai/nanoclaw/issues/1984) Issue + [#1994](https://github.com/qwibitai/nanoclaw/pull/1994) [#1995](https://github.com/qwibitai/nanoclaw/pull/1995) PR | 🔶 **高** | TeeJS 双 PR 已提交，Codex 路由修复 + OpenCode npm/no-auth/env API key + `/add-local-llama` skill，预计 **v2.1 或 v2.0.x 补丁** 纳入 |
| **实时 Agent 活动可观测性**（CEO/ops 工具调用日志） | [#1986](https://github.com/qwibitai/nanoclaw/pull/1986) [#1985](https://github.com/qwibitai/nanoclaw/pull/1985) [#1990](https://github.com/qwibitai/nanoclaw/pull/1990) PR | 🔶 **高** | Jeffrey-Keyser 三连迭代（IPC → 启动迁移），SQLite WAL + `/activity` + `/topology` 命令，**核心基建，大概率合并** |
| **端到端 per-agent provider/model 配置** | [#1968](https://github.com/qwibitai/nanoclaw/pull/1968) PR | 🔶 **高** | IamAdamJowett 五 commit 链条，聊天驱动配置，依赖前文 correctness fix，**待审但架构价值明确** |
| **WhatsApp 文档附件 MIME 类型修复** | [#1988](https://github.com/qwibitai/nanoclaw/pull/1988) PR | 🟢 **中** | grtwrn 小修复，PDF/DOCX 等常见类型映射，**快速合并候选** |
| **构建工具缺失快速失败** | [#1987](https://github.com/qwibitai/nanoclaw/pull/1987) PR | 🟢 **中** | TeeJS 修复 `setup.sh` 顺序问题，`better-sqlite3` 编译失败前置检查，**安装体验优化** |

**路线图推断**：下一版本（v2.0.1 或 v2.1）将聚焦 **"本地模型友好 + 可观测性 + 安装鲁棒性"**，企业私有化部署和运维监控是明确方向。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"SSL 证书挂了 27 天，官网打不开"** | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) 评论 | 😤 挫败 → 质疑项目维护意愿 |
| **"v2 新鲜安装，配完 Telegram 就双回复，没法用"** | [#1982](https://github.com/qwibitai/nanoclaw/issues/1982) | 😤 阻塞性故障 |
| **"SSH 进 Hetzner，systemd 明明有却说没有"** | [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) | 😕 困惑，环境检测逻辑不透明 |
| **"文档说支持自定义端点，实际跑不通"** | [#1984](https://github.com/qwibitai/nanoclaw/issues/1984) | 😤 期望落差，文档与实现脱节 |
| **"按文档装 onecli，下一步就说找不到"** | [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) | 😤 安装流程断裂 |

### 满意点

- v2 架构重写获得认可（[#1989](https://github.com/qwibitai/nanoclaw/issues/1989) 主动升级 fork）
- 社区响应速度快：同日报告的问题有同日 PR（TeeJS、Jeffrey-Keyser）

### 关键洞察

> **"v2 功能设计吸引人，但安装路径的'最后一公里'体验正在消耗早期采用者耐心。"**

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后活动 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) SSL 证书失效 | 2026-03-28 | 2026-04-24 | 🔴 **品牌信任崩塌**，27天，18条评论 | **立即升级运维优先级**，非代码问题需项目 owner 决策 |
| [#414](https://github.com/qwibitai/nanoclaw/issues/414) docker group 过期 | 2026-02-23 | 2026-04-24 | 🟡 安装失败，2个月未修复 | 关联 v2 安装流，与 [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) 统筹修复 |
| [#1989](https://github.com/qwibitai/nanoclaw/issues/1989) v2 fork 升级验证 | 2026-04-24 | 当日 | 🟢 长期架构验证，无紧急性 | 标记 `help wanted`，吸引社区测试反馈 |
| [#1990](https://github.com/qwibitai/nanoclaw/pull/1990) 等 11 个 OPEN PR | 多数当日 | 当日 | 🟡 评审队列堆积 | 维护者需分配 review 带宽，避免贡献者流失 |

---

> **数据来源**: GitHub API / Issues / Pull Requests 公开数据  
> **分析模型**: NanoClaw 项目专用评估框架 v1.0

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-25

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-04-25  
> **分析窗口**: 过去24小时（2026-04-24）

---

## 1. 今日速览

NullClaw 今日呈现**高活跃开发、低社区互动**的典型特征。过去24小时内，11个PR全部处于待合并状态，无合并动作，表明维护者可能正在进行集中代码审查或等待批量合并窗口。Issue侧仅2条更新，其中一条历史Issue（#167）被关闭，一条新Bug（#851）获得持续讨论。整体而言，项目处于**功能密集开发期**，manelsen 单点贡献特征明显（11/11 PR来自同一作者），社区参与度（👍、评论数）偏低，健康度需关注多维护者参与度和代码审查吞吐量。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无 PR 合并或关闭**，11个待合并PR涵盖以下五大方向，显示项目正经历显著的功能扩张：

| 方向 | 相关 PR | 进展意义 |
|:---|:---|:---|
| **Agent 核心能力增强** | [#836](https://github.com/nullclaw/nullclaw/pull/836) 触发词工具优先级、[#841](https://github.com/nullclaw/nullclaw/pull/841) 启动时技能激活、[#844](https://github.com/nullclaw/nullclaw/pull/844) A2A流进度提示 | Agent的交互智能和可观测性大幅提升 |
| **配置系统重构** | [#834](https://github.com/nullclaw/nullclaw/pull/834) 工具定制Schema、[#835](https://github.com/nullclaw/nullclaw/pull/835) system_prompt覆盖、[#837](https://github.com/nullclaw/nullclaw/pull/837) 外部配置文件 | 从硬编码向声明式配置转型，降低运维成本 |
| **技能生态扩展** | [#840](https://github.com/nullclaw/nullclaw/pull/840) 嵌套技能目录发现、[#831](https://github.com/nullclaw/nullclaw/pull/831) RFC 0.2.0支持 | 技能组织方式更灵活，标准化程度提升 |
| **部署与运维** | [#842](https://github.com/nullclaw/nullclaw/pull/842) 工作目录覆盖、[#838](https://github.com/nullclaw/nullclaw/pull/838) Matrix E2EE代理 | 多实例部署和隐私合规能力增强 |
| **稳定性修复** | [#843](https://github.com/nullclaw/nullclaw/pull/843) 配置保存失败处理 | 解决Docker场景下的静默崩溃 |

> **评估**: 功能开发进度约 **75-80%**（PR就绪待合），但代码审查和合并进度为 **0%**，存在交付瓶颈风险。

---

## 4. 社区热点

### 🔥 最活跃讨论：Issue #167 — curl/wget 硬编码限制（已关闭）

- **链接**: [nullclaw/nullclaw#167](https://github.com/nullclaw/nullclaw/issues/167)
- **数据**: 8条评论，1个👍，跨2个月生命周期（2026-02-28 → 2026-04-24）
- **诉求分析**: 用户 lvai125 质疑 shell 工具中 curl/wget 的硬编码设计，反映**边缘网络环境**（受限shell、自定义下载工具）下的兼容性需求。该Issue的长期存活和最终关闭，暗示维护者可能已通过其他方式（如工具定制配置）间接回应，或判定为"设计如此"。

### 🔥 技术深度讨论：Issue #851 — Gateway CPU空转Bug

- **链接**: [nullclaw/nullclaw#851](https://github.com/nullclaw/nullclaw/issues/851)
- **数据**: 4条评论，创建后5天内持续更新
- **诉求分析**: Trez-zerT 在 Raspberry Pi 5 (ARM64) 上发现 `accept4()` 的 EAGAIN 忙等待问题，属于**嵌入式/边缘部署场景**的典型性能缺陷。该Issue暴露了 NullClaw 在资源受限设备上的优化不足，与项目"轻量Agent"定位存在张力。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| **🔴 高** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | Gateway 在 ARM64/嵌入式设备上空转消耗100% CPU | **无** | 开放，待诊断 |
| **🟡 中** | [#843](https://github.com/nullclaw/nullclaw/pull/843) | 交互式配置向导第8步因 `KeyWriteFailed` 静默崩溃（Docker场景） | [#843](https://github.com/nullclaw/nullclaw/pull/843) | **PR就绪待合并** |

**风险评估**: 
- #851 无关联Fix PR，且涉及底层网络I/O事件循环，可能影响所有Linux部署（不仅是ARM64）。建议优先分配维护者资源。
- #843 虽已有Fix，但11个PR零合并的状态延迟了稳定性修复的交付。

---

## 6. 功能请求与路线图信号

### 已编码就绪的高概率纳入功能（PR已提交）

| 功能 | PR | 纳入置信度 | 路线图信号 |
|:---|:---|:---|:---|
| 工具定制化配置体系 | [#834](https://github.com/nullclaw/nullclaw/pull/834), [#835](https://github.com/nullclaw/nullclaw/pull/835), [#837](https://github.com/nullclaw/nullclaw/pull/837) | **95%** | 构成完整配置层重构，极可能作为 v0.x 核心特性发布 |
| Agent触发词智能调度 | [#836](https://github.com/nullclaw/nullclaw/pull/836) | **90%** | 直接增强Agent核心交互能力，与项目定位强相关 |
| A2A协议进度可观测性 | [#844](https://github.com/nullclaw/nullclaw/pull/844) | **85%** | 符合A2A生态建设方向，但依赖外部协议演进 |
| Matrix E2EE端到端加密 | [#838](https://github.com/nullclaw/nullclaw/pull/838) | **80%** | 隐私合规刚需，但属特定协议适配 |

### 隐含的用户需求（从Issue反推）

- **网络工具可替换性**（#167）→ 工具定制化配置体系已部分回应
- **边缘设备性能优化**（#851）→ 尚未有明确路线图信号，可能需要异步I/O架构调整

---

## 7. 用户反馈摘要

### 痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#167](https://github.com/nullclaw/nullclaw/issues/167) | 硬编码工具限制灵活性 | 企业内网、安全加固环境无法使用标准curl/wget |
| [#851](https://github.com/nullclaw/nullclaw/issues/851) | 边缘设备CPU异常占用 | Raspberry Pi 5 作为轻量网关部署，资源敏感 |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | Docker部署配置向导崩溃 | 容器化运维场景，权限隔离导致密钥写入失败 |

### 使用场景洞察

- **嵌入式/IoT网关**: Trez-zerT 的Pi 5部署表明 NullClaw 正被用于**边缘AI Agent**场景，与云端Agent形成差异化
- **容器化多租户**: `--workspace` 和 Docker修复显示用户对**多实例隔离部署**有明确需求

### 满意度信号

- #167 获得1个👍后关闭，用户接受度中等
- 11个PR零👍，**社区反馈机制薄弱**，可能反映：早期功能预览阶段用户尚未试用，或核心用户群尚未形成

---

## 8. 待处理积压

### 紧急关注项

| 项目 | 创建时间 | 阻塞时长 | 风险 |
|:---|:---|:---|:---|
| [#851](https://github.com/nullclaw/nullclaw/issues/851) CPU忙等待Bug | 2026-04-19 | **6天** | 影响所有Linux部署，无Fix PR，可能恶化用户体验 |
| 11个待合并PR | 2026-04-18~19 | **6-7天** | 批量合并延迟导致功能交付停滞、稳定性修复无法上线 |

### 结构性风险

- **单点贡献依赖**: 11/11 PR来自 manelsen，项目存在**巴士因子=1**的极端风险
- **审查瓶颈**: 零合并动作暗示维护者带宽不足或合并标准未明确，建议：
  1. 建立PR分级机制（Bug修复优先合并）
  2. 引入自动化CI检查减少人工审查负担
  3. 培养第二维护者参与代码审查

---

> **日报生成依据**: GitHub Issues/PRs 元数据、时间戳、评论内容、作者分布、标签状态  
> **健康度评分**: ⭐⭐⭐☆☆ (3/5) — 开发活跃但交付阻塞，社区参与薄弱，稳定性问题待解

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-25

> **项目**: nearai/ironclaw | **观测周期**: 2026-04-24 00:00 - 2026-04-24 23:59 UTC  
> **数据标签**: 高活跃度 | 质量管控承压 | v2架构迁移关键期

---

## 1. 今日速览

IronClaw 今日呈现**极高开发活跃度**：24小时内 Issues 更新16条（14条新开/活跃）、PR 更新50条（43条待合并），但**零版本发布**显示团队处于密集集成期而非发布窗口。核心矛盾集中在三方面：LLM工具链模式规范化（#2950/#2951）、配置系统优先级反转（#2946）、以及 TEE 环境升级后的回归问题集群（#2938/#2939）。两个自动化金丝雀失败（#2929/#2930）表明主干稳定性存在风险，需警惕"合并速度>验证速度"的累积债务。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2463](https://github.com/nearai/ironclaw/pull/2463) | G7CNF | 为 `nearai_chat` 添加 `normalize_schema_strict()` 边界规范化 | **被 #2951 取代** — 工具链模式统一的前置探索，验证技术路径后由更大 PR 覆盖 |
| [#2890](https://github.com/nearai/ironclaw/pull/2890) | italic-jinxin | 放宽 `is_nearai_private_endpoint` 判定，支持区域子域名 | **修复设置页模型列表为空** — 关闭关联 Issue #2881，解决 NEAR AI 私有化部署的端点识别缺陷 |
| [#1988](https://github.com/nearai/ironclaw/pull/1988) | ztsalexey | 用 `str::floor_char_boundary()` 替代字节切片截断 MCP 工具描述 | **消除 UTF-8 多字节字符 panic** — 国际化场景稳定性提升 |
| [#2952](https://github.com/nearai/ironclaw/pull/2952) | zetyquickly | 移除 `mission_id`，增加金额上下限校验 | **金融工具安全加固** — 快速关闭的 XS 级修复，响应合规需求 |

**整体评估**: 今日合并以**缺陷修复和稳定性补丁**为主，无大型功能落地。v2架构迁移（#2868 engine-v2、#1764 Abound demo）仍在长线推进中，尚未进入合并阶段。

---

## 4. 社区热点

### 技术债务重构议题（零评论但高结构性价值）

| 议题/PR | 链接 | 核心诉求 | 背后信号 |
|:---|:---|:---|:---|
| **#2950** 拆分 provider-safe schema cleanup 与 strict optional-field rewriting | [Issue #2950](https://github.com/nearai/ironclaw/issues/2950) | 解耦 `normalize_schema_strict()` 的双重职责 | **架构腐化警报**: LLM适配层将"供应商兼容"与"严格模式"硬编码耦合，导致 NEAR AI/OpenAI/Codex 三方策略互相掣肘 |
| **#2900** 解耦 webhook 监听地址与 HTTP 通道启用 | [Issue #2900](https://github.com/nearai/ironclaw/issues/2900) | 分离 `HTTP_HOST/PORT` 的双重语义 | **配置系统债务**: 单一环境变量承担两个正交职责，阻碍多通道部署场景 |
| **#2951** [codex] fix llm tool schema shaping for near ai | [PR #2951](https://github.com/nearai/ironclaw/pull/2951) | 提取共享工具模式塑形，NEAR AI 采用 `FlattenOnly` 策略 | **供应商差异化策略落地**: 直接回应 #2950，是今日最大代码变更（XL级），决定 v2 工具链兼容性基线 |

> **分析**: 上述议题虽零评论，但构成**技术决策的隐性主战场**。henrypark133 同时发起 #2950 议题和 #2951 PR，显示核心维护者正在主动清理 LLM 抽象层的架构债务，这对支持多供应商（OpenAI/Codex/NEAR AI/Aliyun）的长期路线图至关重要。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 现象 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| **P0-回归** | [#2929](https://github.com/nearai/ironclaw/issues/2929) | 金丝雀 `public-smoke` 失败 (anthropic) | 主干发布阻塞 | ❌ 无 — 需立即调查 |
| **P0-回归** | [#2930](https://github.com/nearai/ironclaw/issues/2930) | 金丝雀 `provider-matrix` 失败 (openai-compatible) | 供应商兼容性验证失效 | ❌ 无 — 与 #2929 同批次提交 |
| **P1-配置破坏** | [#2946](https://github.com/nearai/ironclaw/issues/2946) | `llm_backend` 每次启动被数据库覆写为 `nearai` | 自托管用户配置失效 | ❌ 无 — 优先级配置逻辑反转 |
| **P1-TEE回归** | [#2938](https://github.com/nearai/ironclaw/issues/2938) | TEE 升级后 Routines 标签页消失 | railway-staging 用户 | ❌ 无 — 前端路由/权限问题 |
| **P1-TEE回归** | [#2939](https://github.com/nearai/ironclaw/issues/2939) | TEE 升级后 Telegram 机器人停止响应 | railway-staging 用户 | ❌ 无 — 通道激活状态丢失 |
| **P2-UX** | [#2945](https://github.com/nearai/ironclaw/issues/2945) | 一次性登录链接创建后立即返回 Unauthorized | hosted-staging 用户管理 | ❌ 无 — 认证时序/令牌问题 |
| **P2-UX** | [#2944](https://github.com/nearai/ironclaw/issues/2944) | 助手声称内容创建成功但提取/搜索步骤实际失败 | Agent 可靠性幻觉 | ❌ 无 — 错误传播链断裂 |
| **P2-UX** | [#2943](https://github.com/nearai/ironclaw/issues/2943) | 工具调用后响应需刷新页面才显示 | Chat UI 流式渲染中断 | ❌ 无 — WebSocket/事件推送 |
| **P2-UX** | [#2942](https://github.com/nearai/ironclaw/issues/2942) | Telegram 集成显示 MTProto 开发者配置而非用户友好流 | 集成体验门槛过高 | ❌ 无 — 产品设计债务 |
| **P2-安装** | [#2949](https://github.com/nearai/ironclaw/issues/2949) | 安装脚本报错平台 `x86_64-unknown-linux-gnu` 无下载 | Linux 用户入门阻塞 | ❌ 无 — 发布产物/脚本匹配问题 |

**关键洞察**: 
- **金丝雀双失败**（#2929/#2930）指向同一提交 `1a44a944`，表明 2026-04-24 的某批次变更破坏了基础 smoke 测试和供应商矩阵验证，需立即回滚或热修复。
- **TEE 升级回归集群**（#2938/#2939）与 PR #2927（"wire load_startup_active_channels for first-run fallback"）高度相关 — 该 PR 正试图修复通道激活状态丢失，但可能未覆盖 TEE 环境的持久化路径。

---

## 6. 功能请求与路线图信号

### 用户/贡献者提出的新方向

| 来源 | 内容 | 与现有 PR 的关联 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **#1344** [enhancement] 移动端布局重设计 | [Issue #1344](https://github.com/nearai/ironclaw/issues/1344) | 无活跃 PR，但 #2335 Cmd+K 命令面板（Phase 1 客户端）显示前端体验投资 | ⭐⭐⭐ 中 — 需专门设计迭代 |
| **#1741** [design] 内核/扩展架构 — 类 OS 最小内核 + DB 后端扩展状态 | [Issue #1741](https://github.com/nearai/ironclaw/issues/1741) | #2904 将 11 个 WASM API 代理工具替换为 skill-based HTTP 声明，是向该架构的过渡 | ⭐⭐⭐⭐⭐ **高** — 核心架构师 ilblackdragon 主导，v2 演进主线 |
| **#2904** Refactor: replace 11 WASM API-proxy tools with skill-based HTTP declarations | [PR #2904](https://github.com/nearai/ironclaw/pull/2904) | 直接实现 #1741 的"skill 替代编译时扩展"方向 | ⭐⭐⭐⭐⭐ **高** — XL 级 PR，待合并 |
| **#1446** 添加阿里云 Coding Plan 支持 | [PR #1446](https://github.com/nearai/ironclaw/pull/1446) | 独立供应商适配，与 #2951 工具链规范化并行 | ⭐⭐⭐ 中 — 需审查 HTTP/1.1 兼容性方案 |
| **#2728** Engine V2 migrate CLI for OpenClaw and Hermes | [PR #2728](https://github.com/nearai/ironclaw/pull/2728) | v2 迁移基础设施，gated behind `migrate` feature | ⭐⭐⭐⭐ 中高 — 生态迁移依赖 |

**路线图判断**: 团队正从"功能扩张期"转向"架构 consolidation 期"。#1741 提出的"OS-like kernel"愿景与 #2904 的技能化改造、#2868 的 engine-v2、#2951 的 LLM 工具链统一形成**连贯的技术叙事**，预计将在 0.26.0 或 v2.0 中集中释放。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 来源 | 情绪 | 核心诉求 |
|:---|:---|:---|:---|
| **自托管配置失效** | [#2946](https://github.com/nearai/ironclaw/issues/2946) | 😤 挫败 | "文档说的优先级顺序（DB > env > file > defaults）根本不工作" — **配置系统的可预测性**是运维信任基础 |
| **Linux 安装被拒之门外** | [#2949](https://github.com/nearai/ironclaw/issues/2949) | 😤 挫败 | 发布页明明有 Linux 构建，安装脚本却识别失败 — **发布工程与文档的一致性** |
| **TEE 升级 = 功能消失** | [#2938](https://github.com/nearai/ironclaw/issues/2938), [#2939](https://github.com/nearai/ironclaw/issues/2939) | 😰 焦虑 | 升级后既有工作流断裂，无迁移指南 — **升级路径的向后兼容承诺** |
| **助手"撒谎"** | [#2944](https://github.com/nearai/ironclaw/issues/2944) | 😠 不信任 | 失败步骤被包装为成功响应 — **Agent 透明度与错误诚实性** |
| **开发者配置吓跑普通用户** | [#2942](https://github.com/nearai/ironclaw/issues/2942) | 😵 困惑 | MTProto 术语对非技术用户是认知壁垒 — **集成体验的分层设计**（基础/高级模式）|
| **Rust 版本要求漂移** | [#2898](https://github.com/nearai/ironclaw/issues/2898) | 😤 挫败 | README 写 1.85，实际需 1.91 — **文档准确性**（已关闭但模式值得警惕）|

### 满意点
- 无直接表达，但 #2948 文档贡献者 Kampouse 指出"代码库有完整的数据库系统但零文档"，反向说明**技术实现质量高于文档覆盖**。

---

## 8. 待处理积压

### 需维护者关注的长尾事项

| 时长 | Issue/PR | 风险 | 建议动作 |
|:---|:---|:---|:---|
| **37天** | [#1344](https://github.com/nearai/ironclaw/issues/1344) 移动端重设计 | 移动端体验持续劣化，与竞品差距扩大 | 指派前端负责人评估与 #2335 命令面板的协同 |
| **26天** | [#1741](https://github.com/nearai/ironclaw/issues/1741) 内核/扩展架构设计 | 架构决策阻塞多个 XL 级 PR 的最终形态 | 由 ilblackdragon 发起 RFC 或架构评审会议 |
| **35天** | [#1435](https://github.com/nearai/ironclaw/pull/1435) pdf-extract → pdf_oxide 替换 | 依赖安全与性能提升，但 XL 级变更审查成本高 | 分配专项审查人，或拆分测试/核心逻辑 |
| **16天** | [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo | v2 架构的旗舰集成，高 risk 标签导致合并犹豫 | 明确 v2 分支合并窗口，或设立 feature flag 降级风险 |
| **20天** | [#1989](https://github.com/nearai/ironclaw/pull/1989) shell workdir 回退 | 边缘场景稳定性，已更新多次但未合并 | 小型修复，建议加速合并以减少 rebase 成本 |

---

## 健康度仪表盘

| 指标 | 状态 | 说明 |
|:---|:---|:---|
| **合并速率** | ⚠️ 偏高 | 50 PR / 24h，但 7 合并 vs 43 待审，审查队列积压 |
| **缺陷流入** | 🔴 警报 | 14 新 Issues，含 2 金丝雀失败 + 5 P1/P2 回归 |
| **社区贡献** | 🟢 健康 | 新贡献者 Kampouse、quchenyuan 活跃，文档/供应商适配多元 |
| **架构清晰度** | 🟡 改善中 | #2950/#2951/#2900 显示主动债务清理，但需时间验证 |
| **发布就绪度** | 🔴 阻塞 | 金丝雀失败 + TEE 回归，不建议近期发版 |

---

*日报生成时间: 2026-04-25 00:00 UTC | 数据来源: GitHub API 快照*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-25

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-04-25（覆盖 2026-04-24 活动）  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

LobsterAI 今日展现**极高开发活跃度**，24 小时内 42 个 PR 全部完成合并/关闭，零待合并积压，流水线运转极为高效。项目连续两日发布版本（4.23、4.24），重点围绕 **DeepSeek V4 系列模型接入**、**IM 多机器人生态扩展**（Telegram/Discord）及 **Cowork 协作界面优化**三大主线推进。社区侧出现 1 个紧急生产问题（DeepSeek V4 请求 schema 被拒），需关注是否与昨日新发布的模型支持 PR 相关。整体健康度：**开发侧优秀，社区响应待加强**（3 个活跃 Issue 均无官方回复）。

---

## 2. 版本发布

### [LobsterAI 2026.4.24](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.24) ⭐ 最新
| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-24 |
| **核心变更** | ① 新增 DeepSeek V4 系列模型支持（`deepseek-v4-flash`、`deepseek-v4-pro`）② 修复 Skills/MCP 搜索查询空白字符处理，新增清空按钮 |
| **关联 PR** | [#1812](https://github.com/netease-youdao/LobsterAI/pull/1812), [#1811](https://github.com/netease-youdao/LobsterAI/pull/1811) |
| **迁移注意** | 无破坏性变更；使用 DeepSeek V4 模型的用户需确认 API schema 兼容性（见下方 Bug 预警）|

### [LobsterAI 2026.4.23](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.23)
| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-23 |
| **核心变更** | ① 修复 UserProfile 字段及用户 ID 更新检查请求 ② 更新请求新增版本号字段 ③ 安装流程修复（摘要截断）|
| **关联 PR** | [#1784](https://github.com/netease-youdao/LobsterAI/pull/1784), [#1785](https://github.com/netease-youdao/LobsterAI/pull/1785) |

---

## 3. 项目进展

### 🔥 核心功能突破

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#1812** feat(providers): add kimi-k2.6, deepseek-v4-flash and deepseek-v4-pro | @liuzhq1986 | **模型生态重大扩展**：一次性接入 Kimi K2.6 及 DeepSeek V4 双版本，覆盖轻量（flash）与专业（pro）场景 | [PR #1812](https://github.com/netease-youdao/LobsterAI/pull/1812) |
| **#1810** feat(settings): add embedding configuration for memory search | @btc69m979y-dotcom | **记忆系统架构升级**：支持远程 Embedding 提供商（OpenAI/Gemini 等），解耦本地 GGUF 依赖，为 RAG 能力商业化铺路 | [PR #1810](https://github.com/netease-youdao/LobsterAI/pull/1810) |
| **#1792** Feat/im multi robots telegram + **#1794** discord支持多机器人 | @liugang519 | **IM 机器人平台化**：Telegram、Discord 双平台支持多机器人部署，从单实例走向多租户架构 | [PR #1792](https://github.com/netease-youdao/LobsterAI/pull/1792), [PR #1794](https://github.com/netease-youdao/LobsterAI/pull/1794) |
| **#1787** 模型配置支持 LM Studio | @liugang519 | **本地模型生态打通**：正式支持 LM Studio 本地模型接入，满足隐私敏感场景需求 | [PR #1787](https://github.com/netease-youdao/LobsterAI/pull/1787) |

### 🛠️ 稳定性与体验优化

| PR | 领域 | 关键修复 | 链接 |
|:---|:---|:---|:---|
| #1815 | Skills | 移除 `~/.claude/skills` 发现路径，消除"UI 显示但运行时找不到"的 skill 不一致错误 | [PR #1815](https://github.com/netease-youdao/LobsterAI/pull/1815) |
| #1814 | Cowork | 恢复 DiffView 对 edit tool `edits` 数组格式的渲染，修复协作编辑可视化回归 | [PR #1814](https://github.com/netease-youdao/LobsterAI/pull/1814) |
| #1803 | Gateway | 聊天发送 RPC 超时从 30s 提升至 90s，解决网关初始化延迟导致的假超时问题 | [PR #1803](https://github.com/netease-youdao/LobsterAI/pull/1803) |
| #1798 | Gateway | 取消 focus/blur 时自动重启网关，减少不必要连接中断 | [PR #1798](https://github.com/netease-youdao/LobsterAI/pull/1798) |
| #1793 | Update | 移除下载完成自动弹窗，改为角标静默通知，减少打断 | [PR #1793](https://github.com/netease-youdao/LobsterAI/pull/1793) |

### 📊 今日合并效率指标
- **PR 处理率**: 42/42 = **100%**（零积压）
- **跨领域协作**: 涉及 renderer(7)、main(6)、cowork(5)、openclaw(4)、im(3) 等 8 个模块
- **核心贡献者**: @liuzhq1986（10+ PR）、@liugang519（6+ PR）、@btc69m979y-dotcom（3 PR）

---

## 4. 社区热点

> 注：今日所有 PR 评论数均为 `undefined`（数据未采集或零评论），Issues 评论数均 ≤1，社区讨论深度有限。以下按**问题紧迫性**排序。

| 排名 | 条目 | 热度信号 | 诉求分析 | 链接 |
|:---|:---|:---|:---|:---|
| **1** | **#1813** DeepSeek V4 无法使用：LLM request failed | 🔴 **生产阻断** | **新发布模型与 schema 不兼容**：昨日刚发布 V4 支持，今日即出现 `provider rejected request schema or tool payload`，极可能是工具调用 payload 格式与 DeepSeek V4 API 要求不匹配。用户 @Sun-Ke 已提供截图，需紧急验证 | [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) |
| 2 | #38 [stale] 有没有节省 tokens 和请求数量的方法？ | 💬 2 月创建，昨日被顶起 | **成本优化诉求**：个人/小团队用户关注运行成本，可能因 Embedding 配置上线（#1810）重新激活讨论，建议官方提供 token 使用统计与预算控制功能 | [Issue #38](https://github.com/netease-youdao/LobsterAI/issues/38) |
| 3 | #41 [stale] playwright skill 错误 | 💬 2 月创建，昨日被顶起 | **文档与实现不一致**：`playwright-cli` vs `playwright-mcp` 的命名混乱，反映 skill 体系文档维护滞后于代码迭代 | [Issue #41](https://github.com/netease-youdao/LobsterAI/issues/41) |

---

## 5. Bug 与稳定性

| 严重等级 | 问题 | 状态 | 关联代码 | 修复进展 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-紧急** | **DeepSeek V4 请求被 provider 拒绝 schema/tool payload** | 新开，无官方响应 | 疑似 [#1812](https://github.com/netease-youdao/LobsterAI/pull/1812) 引入 | ❌ **无 fix PR**，需立即回滚或热修复 |
| 🟡 P2-中等 | playwright skill 文档与脚本名称不一致 | 闲置 2 个月 | skill 发现/文档体系 | ❌ 无 fix PR，#1815 仅修复路径不一致，未解决命名问题 |
| 🟢 P3-低 | （历史）ESLint 269 个问题 | 已关闭 | [#5](https://github.com/netease-youdao/LobsterAI/pull/5) | ✅ 已合并（2 月） |

### 稳定性改进（已落地）
- **#1803** 网关超时机制优化：解决 38s 延迟响应被误判超时的问题
- **#1798** 减少网关无意义重启：focus/blur 不再触发重启

---

## 6. 功能请求与路线图信号

| 用户需求信号 | 来源 | 与现有 PR 的关联 | 纳入可能性 |
|:---|:---|:---|:---|
| **Token 成本控制/预算管理** | #38 | Embedding 配置（#1810）已支持远程提供商选型，可扩展用量统计 | ⭐⭐⭐ 高：基础设施已具备 |
| **Playwright skill 文档统一** | #41 | #1815 修复了运行时路径，文档同步需跟进 | ⭐⭐⭐ 高：低 hanging fruit |
| **多机器人/多租户 IM 部署** | 无直接 Issue，PR 驱动 | #1792、#1794 已落地 Telegram/Discord | ✅ **已发布** |
| **LM Studio 本地模型** | 无直接 Issue，PR 驱动 | #1787 已落地 | ✅ **已发布** |
| **更宽的协作界面** | 无直接 Issue | #1799 已将内容区从 896px 扩至 1024px，#1816 统一输入框宽度 | ✅ **已发布** |

**下一版本预测信号**：Memory/Embedding 商业化配置（#1810）+ IM 平台扩展（Slack/企微？）+ 模型提供商持续扩容（Anthropic Claude 4？）

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issues）

| 痛点 | 场景 | 情绪 |
|:---|:---|:---|
| **"刚发布的模型立刻不能用"** | 生产环境接入 DeepSeek V4，遭遇 schema 拒绝 | 😤 **挫败/愤怒** — 版本发布质量管控质疑 |
| **"token 用不起"** | 个人开发者/小团队高频调用场景 | 😰 **焦虑** — 成本不透明，无预算工具 |
| **"文档跟代码对不上"** | 按文档配置 playwright-cli，实际要 playwright-mcp | 😵 **困惑** — 新手 onboarding 阻力 |

### 隐含满意度
- ✅ 界面响应式优化（#1799、#1816）体现对用户体验的持续投入
- ✅ IM 多机器人、LM Studio 支持显示对开发者生态的响应速度
- ⚠️ 但**零待合并 PR** 也可能暗示：社区外部贡献极少，主要依赖内部团队（@liuzhq1986、@liugang519 等网易员工），开源协作深度待观察

---

## 8. 待处理积压

| 条目 | 闲置时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| **#1813** DeepSeek V4 生产故障 | < 24h | 🔴 品牌信任受损，回滚压力 | **@liuzhq1986 优先响应**：确认 #1812 的 schema 兼容性测试覆盖范围，必要时发布 2026.4.24-hotfix |
| **#38** Token 节省方法 | 62 天 | 用户流失至竞品（Claude Code/Cursor 均有用量控制） | 产品团队评估：是否将 #1810 的 Embedding 配置扩展为完整用量中心 |
| **#41** Playwright 命名混乱 | 62 天 | 文档债累积，新手门槛 | 指派文档 PR：统一 `playwright-mcp` 命名，同步 README 与 skill 发现逻辑 |

---

## 附录：关键链接汇总

| 类型 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/netease-youdao/LobsterAI |
| 最新 Release | [2026.4.24](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.24) |
| 紧急 Issue | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) |
| 核心功能 PR | [#1812](https://github.com/netease-youdao/LobsterAI/pull/1812), [#1810](https://github.com/netease-youdao/LobsterAI/pull/1810), [#1792](https://github.com/netease-youdao/LobsterAI/pull/1792) |

---

> **日报生成说明**：基于 GitHub API 公开数据自动分析，未包含私有讨论或内部工单。建议维护团队关注 #1813 的 24 小时响应 SLA。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-25

## 1. 今日速览

Moltis 今日展现出**极高的开发活跃度**：31 个 PR 更新（29 个已合并/关闭）、10 个 Issues 更新（7 个关闭），无新版本发布。核心贡献者 `Cstewart-HC` 与 `penso` 主导了安全加固（Landlock 沙箱）、配置系统重构（分层配置）、Discord 集成增强等重大方向。项目正处于**密集迭代期**，重点聚焦安全性、可配置性与多平台兼容性，但需注意今日新暴露的 API 密钥明文存储安全问题（#867）及心跳循环 Bug（#858）的修复验证。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔒 安全架构：内核级沙箱落地
- **PR #866** [`feat: Landlock FS isolation for restricted-host sandbox`](https://github.com/moltis-org/moltis/pull/866)（待合并）— 引入 Linux Landlock LSM 内核级文件系统隔离，实现 `landlock.rs` 模块，支持优雅降级（旧内核/容器环境自动回退）。配套 Issue #868 请求增加调试日志以提升可观测性。
- **PR #863** [`fix(cron): add heartbeat wake cooldown to prevent exec re-fire loop`](https://github.com/moltis-org/moltis/pull/863)（已合并）— 修复心跳机制与 `exec` 工具执行的竞态条件，新增 `running_at_ms` 冷却期，解决 #858。

### ⚙️ 配置系统：从单体到分层
- **PR #864** [`feat(config): layered config with defaults.toml and override-only user config`](https://github.com/moltis-org/moltis/pull/864)（已合并）— 里程碑式重构：`moltis.toml` 变为纯覆盖配置，Moltis 自动生成 `defaults.toml`，大幅降低新用户配置门槛，解决长期配置碎片化问题。

### 🌐 平台集成：浏览器后端 + Discord 增强
- **PR #869** [`feat(browser): add Obscura as lightweight sidecar browser backend`](https://github.com/moltis-org/moltis/pull/869)（待合并）— 以 sidecar 模式集成 Obscura 浏览器，零新增 Rust 依赖，~30 行代码实现轻量级替代方案。
- **PR #865** [`feat(discord): channel name pattern filtering and per-pattern overrides`](https://github.com/moltis-org/moltis/pull/865)（已合并）— 支持 glob 模式匹配频道（如 `ticket-*`）、分类白名单及按模式覆盖模型/提示词配置。

### 🔧 基础设施与质量
| PR | 状态 | 说明 |
|:---|:---|:---|
| [#791](https://github.com/moltis-org/moltis/pull/791) `refactor(splitter): extract moltis-splitter crate` | 已合并 | AST 感知代码分片独立为 crate，支持 15 种语言 tree-sitter 语法 |
| [#840](https://github.com/moltis-org/moltis/pull/840) `feat(skills): MCP server management skill` | 已合并 | 内置 MCP 服务器管理技能，含安装后配置模板 |
| [#844](https://github.com/moltis-org/moltis/pull/844) `feat(config): add default sub-agent presets` | 已合并 | 7 种预设子代理（research/coder/reviewer/qa/ux/docs/coordinator）开箱即用 |
| [#862](https://github.com/moltis-org/moltis/pull/862) `fix(providers): strip null from enum arrays for Fireworks AI` | 已合并 | 修复 Fireworks AI 兼容性问题（#848） |
| [#861](https://github.com/moltis-org/moltis/pull/861) `fix(skills): materialize bundled skill scripts` | 已合并 | 解决内嵌技能脚本的文件系统路径失效问题 |
| [#745](https://github.com/moltis-org/moltis/pull/745) `Feature: Nix Flake` | 已合并 | 支持 `nix run github:moltis-org/moltis` 一键运行 |

**文档自动化**：4 批 AutoDoc PR（#783, #789, #799, #800, #802）全部合并，累计审计修复 50+ 文档，建立"文档旋转烤肉"（Doc Rotisserie）持续维护机制。

---

## 4. 社区热点

### 讨论最活跃：系统提示词时间上下文（18 条评论）
- **Issue #176** [`[Feature]: Add datetime to system prompt context`](https://github.com/moltis-org/moltis/issues/176)（已关闭）— 历时 2 个月的增强请求，最终落地。核心诉求：Agent 需要感知当前时间以正确处理相对时间表述（"明天"、"两小时后"）。高评论量反映社区对**时间感知 Agent** 的强需求，该功能已成为 Moltis 系统提示词的标准组成部分。

### 安全敏感：API 密钥明文存储（新暴露）
- **Issue #867** [`Voice provider API keys stored in plain text in moltis.toml`](https://github.com/moltis-org/moltis/issues/867)（开放，0 评论）— 尽管评论数为 0，但安全评级极高。ElevenLabs/OpenAI Whisper 等语音服务 API 密钥通过 `update_config` 直接写入明文 TOML，无加密、无密钥隔离、无环境变量支持。该 Issue 与今日合并的分层配置 PR #864 形成张力：新配置架构需紧急纳入密钥安全管理方案。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 说明 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#858](https://github.com/moltis-org/moltis/issues/858) Heartbeat re-fires in tight loop when agent uses exec during heartbeat turn | 新报告 | 心跳与 exec 回调竞态导致无限循环，可能耗尽 CPU/触发 API 限流 | ✅ [#863](https://github.com/moltis-org/moltis/pull/863) 已合并 |
| 🔴 **高** | [#867](https://github.com/moltis-org/moltis/issues/867) Voice provider API keys stored in plain text | 新报告 | 明文存储敏感凭证，违反安全最佳实践，存在泄露风险 | ❌ 无 |
| 🟡 **中** | [#848](https://github.com/moltis-org/moltis/issues/848) Fireworks Fire Pass: JSON Schema enum None not supported | 已关闭 | Fireworks AI 对 `null` enum 值的兼容性问题 | ✅ [#862](https://github.com/moltis-org/moltis/pull/862) 已合并 |
| 🟡 **中** | [#857](https://github.com/moltis-org/moltis/issues/857) Silent memory turn saves with wrong dates in filenames | 已关闭 | 静默记忆持久化时文件名日期格式错误 | ❌ 未标注 Fix PR，可能随其他变更间接修复 |
| 🟡 **中** | [#828](https://github.com/moltis-org/moltis/issues/828) Docker sandbox fails on WSL2 due to missing /sys/class/dmi | 已关闭 | WSL2 环境 DMI 信息缺失导致沙箱初始化失败 | ❌ 未标注 Fix PR |
| 🟢 **低** | [#776](https://github.com/moltis-org/moltis/issues/776) task_list.list 异常 | 已关闭 | 任务列表功能异常 | ❌ 未标注 Fix PR |
| 🟢 **低** | [#344](https://github.com/moltis-org/moltis/issues/344) UX for vault is sealed is bad | 已关闭 | Vault 密封状态用户体验不佳 | ❌ 未标注 Fix PR |

**稳定性评估**：今日合并的 #863 快速响应了高严重度竞态 Bug，显示维护团队对稳定性问题的响应能力。但 #867 安全 Issue 尚无修复计划，需紧急跟进。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Landlock 调试日志增强** | [#868](https://github.com/moltis-org/moltis/issues/868) | ⭐⭐⭐⭐⭐ 极高 | PR #866 作者同一人（Cstewart-HC），功能完整配套，预计快速合并 |
| **Landlock 内核级沙箱** | PR [#866](https://github.com/moltis-org/moltis/pull/866) | ⭐⭐⭐⭐⭐ 极高 | 待合并，是 #818 的延续，安全路线图核心 |
| **Obscura 轻量浏览器后端** | PR [#869](https://github.com/moltis-org/moltis/pull/869) | ⭐⭐⭐⭐☆ 高 | 待合并，sidecar 架构与项目轻量哲学一致，零依赖优势 |
| **聊天界面智能滚动** | [#824](https://github.com/moltis-org/moltis/issues/824) | ⭐⭐⭐⭐☆ 高 | 已关闭，UX 细节优化，实现成本低 |
| **系统提示词时间上下文** | [#176](https://github.com/moltis-org/moltis/issues/176) | ✅ 已完成 | 已关闭并落地 |
| **密钥安全存储（密钥链/环境变量）** | [#867](https://github.com/moltis-org/moltis/issues/867) | ⭐⭐⭐⭐☆ 高 | 安全合规刚需，但需架构决策（是否引入系统密钥链、是否支持外部密钥管理） |

**路线图信号**：安全隔离（Landlock）→ 配置分层 → 多平台浏览器后端 → 密钥安全管理，形成清晰的"安全-配置-集成"演进主线。

---

## 7. 用户反馈摘要

### 😊 满意点
- **配置简化**：分层配置（#864）和预设子代理（#844）显著降低新用户上手门槛
- **平台覆盖**：Nix Flake（#745）、zh-TW 本地化（#339）、Discord 增强（#865）显示多平台/多语言投入获认可
- **文档维护**：AutoDoc 机制（#783-#802）解决文档陈旧痛点，社区反馈积极

### 😤 痛点
- **安全焦虑**："我的 API 密钥写在明文文件里"（#867）— 企业用户/安全敏感用户的 adoption barrier
- **WSL 兼容性**：Docker 沙箱在 WSL2 环境反复出问题（#828），Windows 开发者体验受损
- **心跳机制不可预测**：exec 与 heartbeat 的交互导致"代理突然疯狂循环"（#858），调试困难
- **第三方提供商碎片化**：Fireworks、OpenAI、ElevenLabs 等各自有兼容性陷阱（#848），抽象层仍需打磨

### 💡 使用场景洞察
- **语音工作流兴起**：PTT/VAD（#303）、语音设置 + 语音 API 密钥 Issue（#867）集中出现，表明语音交互正从实验性功能转向生产使用
- **"静默记忆"模式**：#857 的"silent memory turn"术语显示用户在使用无需显式确认的自动记忆持久化，对可靠性要求极高

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| **PR #869** Obscura 浏览器后端 | 2026-04-24 | 2026-04-24 | 待合并，sidecar 架构的长期维护责任（Obscura 项目活跃度）需评估 |
| **PR #866** Landlock 沙箱 | 2026-04-24 | 2026-04-24 | 待合并，内核级功能需充分测试覆盖（容器环境、macOS 等无 Landlock 平台） |
| **Issue #868** Landlock 调试日志 | 2026-04-24 | 2026-04-24 | 开放，应与 #866 配套合并，避免功能不完整上线 |
| **Issue #867** API 密钥明文存储 | 2026-04-24 | 2026-04-24 | ⚠️ **需紧急响应**：安全 Issue 无评论、无 assignee、无修复计划，存在 CVE 风险 |
| **Issue #858** 心跳循环（Fix 已合并） | 2026-04-24 | 2026-04-24 | #863 已合并，需验证是否完全解决，建议 24h 内关闭 |

---

**项目健康度评分：B+**

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 开发活跃度 | A | 31 PR/10 Issue 日更新量，核心贡献者持续投入 |
| 响应速度 | A- | #858 当日报告当日修复，但 #867 尚无响应 |
| 安全态势 | B | Landlock 进展积极，但密钥管理暴露重大缺口 |
| 社区健康 | B+ | 讨论活跃，但高价值 Issue（#176）历时 2 个月略长 |
| 技术债务 | B | WSL 兼容、Provider 碎片化等重复问题需系统性解决 |

**明日关注**：#867 安全响应、#866/#869 合并进展、#858 修复验证关闭。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-25

> 项目地址：[github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/QwenPaw)（注：实际仓库名为 QwenPaw）

---

## 1. 今日速览

CoPaw 今日保持**极高活跃度**，24小时内 50 个 Issues 和 50 个 PR 产生更新，社区贡献节奏紧凑。项目刚发布 v1.1.4 及紧急修复版 v1.1.4.post1，但 **v1.1.4 桌面版出现大面积白屏回归问题**，已引发多起用户报告，维护团队当日即回滚 Vite 升级并推进 v1.1.5b1 版本迭代。核心进展集中在 DeepSeek v4 模型适配、钉钉通道隐私修复、CJK 记忆搜索优化及安全模块加固，整体项目处于**快速迭代伴随稳定性阵痛期**。

---

## 2. 版本发布

### v1.1.4 → v1.1.4.post1（紧急热修复）

| 版本 | 性质 | 关键变更 |
|:---|:---|:---|
| [v1.1.4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4) | 功能版本 | **Memory & Context 重构**：长期记忆模块支持可插拔后端、自动记忆摘要（每 N 轮对话）、自动记忆检索、全新上下文管理接口 ([#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)) |
| [v1.1.4.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4.post1) | 紧急回滚 | **回滚 Vite v6→v8 升级** ([#3712](https://github.com/agentscope-ai/QwenPaw/pull/3712))；新增 CJK 感知查询分词 ([#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)) |

**⚠️ 迁移注意事项：**
- **v1.1.4 桌面版存在严重白屏 Bug**（[Issue #3815](https://github.com/agentscope-ai/QwenPaw/issues/3815)、[Issue #3807](https://github.com/agentscope-ai/QwenPaw/issues/3807)），Windows 用户安装后前端页面无法加载，浏览器访问同样白屏
- 回滚原因：Vite 8 升级导致构建产物与现有 WebView2 运行时兼容性问题
- **建议 Windows 桌面用户暂留 v1.1.3post1**，等待 v1.1.5 正式版

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（35 条已合并/关闭）

| PR | 作者 | 贡献领域 | 项目推进价值 |
|:---|:---|:---|:---|
| [#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811) | @jinliyl | **CJK 记忆搜索** | 中文/日文/韩文查询按 1-gram 分词，解决东亚语言记忆检索精度问题 |
| [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) | @zhijianma | **构建回滚** | 紧急止损 v1.1.4 白屏问题，恢复桌面版可用性 |
| [#3797](https://github.com/agentscope-ai/QwenPaw/pull/3797) | @qbc2016 | **DeepSeek v4 模型支持** | 接入最新 DeepSeek v4 系列模型 |
| [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) | @qbc2016 | **DeepSeek reasoning_content 修复** | 修复多轮对话中 reasoning_content 未回传导致的 400 错误（关联 [Issue #3782](https://github.com/agentscope-ai/QwenPaw/issues/3782)） |
| [#3786](https://github.com/agentscope-ai/QwenPaw/pull/3786) | @qbc2016 | **Anthropic 格式兼容** | 阻止 fileblock 传入 Anthropic API，修复 [Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) |
| [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) | @hongxicheng | **钉钉隐私修复** | 移除消息中的本地文件路径暴露，修复 [Issue #3760](https://github.com/agentscope-ai/QwenPaw/issues/3760) |
| [#3778](https://github.com/agentscope-ai/QwenPaw/pull/3778) | @hongxicheng | **钉钉 Cron 消息类型** | 支持独立配置定时任务消息格式（markdown/card） |
| [#3781](https://github.com/agentscope-ai/QwenPaw/pull/3781) | @gnipping | **Windows 安全防护** | FilePathToolGuardian 支持 Windows 路径格式，修复 [Issue #3457](https://github.com/agentscope-ai/QwenPaw/issues/3457) |
| [#3766](https://github.com/agentscope-ai/QwenPaw/pull/3766) | @zhijianma | **异步 Token 用量记录** | 缓冲式异步记录，降低高频调用时的 I/O 阻塞 |
| [#3758](https://github.com/agentscope-ai/QwenPaw/pull/3758) | @YingchaoX | **工具图标兼容性** | 修复 legacy 配置中 `icon = null` 导致的 500 错误 |
| [#3803](https://github.com/agentscope-ai/QwenPaw/pull/3803) | @zhijianma | **版本迭代** | 推进至 v1.1.5b1，为正式修复版做准备 |

**整体迈进评估**：今日合并 PR 覆盖**模型适配层**（DeepSeek v4）、**通道层**（钉钉隐私+Cron）、**安全层**（Windows 路径防护）、**基础设施层**（构建系统、Token 记录），属于**全栈式推进**，但构建回滚事件表明前端工程化仍需更严谨的预发布验证。

---

## 4. 社区热点

### 最高讨论热度 Issue

| 排名 | Issue | 评论 | 状态 | 核心诉求 |
|:---|:---|:---:|:---|:---|
| 🔥1 | [#2291 Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291) | **60** | 🟢 OPEN | 社区贡献者招募与任务协调中枢，P0-P2 优先级任务分配 |
| 🔥2 | [#3753 火山 coding plan 默认支持](https://github.com/agentscope-ai/QwenPaw/issues/3753) | 7 | 🟢 OPEN | 用户迫切希望内置火山方舟 Coding Plan 模型支持，减少手动配置 |
| 🔥3 | [#3489 Anthropic API 400 错误](https://github.com/agentscope-ai/QwenPaw/issues/3489) | 5 | 🔴 CLOSED | 第三方 Claude 兼容服务商的消息格式兼容性 |
| 🔥4 | [#3742 钉钉超长内容分段推送](https://github.com/agentscope-ai/QwenPaw/issues/3742) | 5 | 🔴 CLOSED | 企业场景：Markdown 3500 字符限制 + Card 消息缺失 + Cron 分段机制 |
| 🔥5 | [#3640 MCP TaskGroup 假死](https://github.com/agentscope-ai/QwenPaw/issues/3640) | 5 | 🟢 OPEN | **关键稳定性问题**：MCP 客户端内部异常导致 Agent 无响应但不报错 |

**诉求分析**：
- **企业集成深度**：钉钉通道相关 Issue 密集（#3742、#3760、#3778），反映企业用户将 CoPaw 作为生产级 IM 机器人的需求
- **国产模型生态**：火山方舟、DeepSeek 相关 Issue/PR 占比显著，国内用户需要"开箱即用"的国产大模型支持
- **异步 Agent 架构**：[Issue #2225](https://github.com/agentscope-ai/QwenPaw/issues/2225)（3 评论，已关闭）提出的"异步并发 Agent 通信"是股票盯盘等实时场景的核心需求，虽关闭但未被充分满足

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-回归** | [#3815](https://github.com/agentscope-ai/QwenPaw/issues/3815) [#3807](https://github.com/agentscope-ai/QwenPaw/issues/3807) | **v1.1.4 桌面版白屏**（Windows 全量影响） | [#3812](https://github.com/agentscope-ai/QwenPaw/pull/3812) 回滚 Vite | ✅ 已修复，待发版 |
| 🔴 **P0-核心功能** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | **MCP 客户端 TaskGroup 异常致 Agent 假死**（钉钉/微信无响应，Console 正常） | 无 | ⏳ **待处理**，无响应 3 天 |
| 🟡 **P1-模型适配** | [#3782](https://github.com/agentscope-ai/QwenPaw/issues/3782) | DeepSeek v4-pro reasoning_content 未回传致 400 错误 | [#3794](https://github.com/agentscope-ai/QwenPaw/pull/3794) | ✅ 已修复 |
| 🟡 **P1-模型适配** | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | Anthropic 兼容 API 消息格式非法（None 值、fileblock） | [#3786](https://github.com/agentscope-ai/QwenPaw/pull/3786) | ✅ 已修复 |
| 🟡 **P1-安装体验** | [#3818](https://github.com/agentscope-ai/QwenPaw/issues/3818) | Linux 在线脚本安装后启动异常，聊天无响应 | 无 | ⏳ 新报告，待诊断 |
| 🟡 **P1-桌面体验** | [#3808](https://github.com/agentscope-ai/QwenPaw/issues/3808) | macOS 启用 MCP 后 Dock 图标变为 Python 3.10 | 无 | ⏳ 新报告 |
| 🟡 **P1-桌面体验** | [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) | macOS Desktop 聊天页 file:// 超链接无法打开本地文件 | 无 | ⏳ 新报告 |
| 🟢 **P2-功能缺陷** | [#3760](https://github.com/agentscope-ai/QwenPaw/issues/3760) | 钉钉发送 txt 文件名丢失+路径隐私泄露 | [#3790](https://github.com/agentscope-ai/QwenPaw/pull/3790) | ✅ 已修复 |
| 🟢 **P2-功能缺陷** | [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) | 技能池持续报错 | 无 | ⏳ 持续 2 天，缺乏诊断信息 |
| 🟢 **P2-平台兼容** | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) | Windows Desktop 启动挂起 "Waiting for HTTP ready..." | 无 | ⏳ 挂起 6 天，根因待确认 |

**稳定性健康度评估**：⚠️ **中等风险**。v1.1.4 白屏事件暴露发布流程缺陷；MCP 相关 Bug（#3640 假死、#3808 图标异常）呈聚集趋势，建议专项排查 MCP 客户端子系统。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **工作区沙箱机制**（类 Claude Code） | [#3814](https://github.com/agentscope-ai/QwenPaw/issues/3814) | 用户已自行实现简单版 | 🔮 **高** — 安全模块天然契合，社区有实现参考 |
| **Console 时间戳显示** | [#3774](https://github.com/agentscope-ai/QwenPaw/issues/3774) | PR [#3603](https://github.com/agentscope-ai/QwenPaw/pull/3603) 已提交 | 🔮 **极高** — PR 在审，SenderInfoCard 组件已实现 |
| **用户消息 Markdown 渲染** | [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 长期需求，2 评论 | 🔮 **中** — 前端改动，与 #3603 可合并考虑 |
| **右键上下文菜单**（桌面端+Web） | [#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) | 已关闭 | ❌ 当日关闭，可能因优先级或已有替代方案 |
| **异步并发 Agent 通信** | [#2225](https://github.com/agentscope-ai/QwenPaw/issues/2225) | 已关闭，但场景真实 | 🔮 **中** — 股票盯盘等实时场景刚需，需架构层面支持 |
| **语义化 Skill 路由** | [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | 首次贡献者，Under Review | 🔮 **中高** — 解决多 Skill 时长上下文膨胀问题，技术方案成熟 |
| **Tauri 桌面端替代 Electrobun** | [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | 首次贡献者，新提交 | 🔮 **观察** — 重大架构变更，需评估长期维护成本 |
| **Discord Cron 线程隔离** | [PR #3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) | Under Review | 🔮 **高** — 企业 Daily Digest 场景刚需 |

---

## 7. 用户反馈摘要

### 😤 痛点集中区

> **"安装即翻车"** — [#3818](https://github.com/agentscope-ai/QwenPaw/issues/3818)
> "正常走 Linux 在线脚本安装...qwenpaw app 启动...终端开始看到一堆 python 异常...输入的内容不见了，也没任何反应"

> **"升级即白屏"** — [#3815](https://github.com/agentscope-ai/QwenPaw/issues/3815)
> "从官网下载 v1.1.4 桌面版...窗口白屏...浏览器访问也是白屏...降级到 v1.1.3post1 正常"

> **"企业通道痛点连环套"** — [#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742)
> 钉钉 3500 字符 Markdown 失效、Card 消息未实现、Cron 无法分段推送

> **"Agent 假死无迹可寻"** — [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)
> "钉钉、微信发消息等没响应了...程序并没退出...重启后恢复正常"

### 😊 满意场景

- DeepSeek v4 快速适配（[#3797](https://github.com/agentscope-ai/QwenPaw/pull/3797)）：国产模型跟进及时
- 安全模块 Windows 支持补齐（[#3781](https://github.com/agentscope-ai/QwenPaw/pull/3781)）：企业部署障碍减少
- CJK 记忆搜索优化（[#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811)）：中文用户检索体验提升

### 📊 使用场景画像

| 场景 | 代表 Issue | 用户类型 |
|:---|:---|:---|
| 企业 IM 机器人（钉钉为主） | #3742, #3760, #3778 | 运维/开发者 |
| 金融实时盯盘（多 Agent 并发） | #2225 | 量化开发者 |
| 个人知识库/长期记忆 | #3811, #3817 | 个人高级用户 |
| 国产模型私有化部署 | #3775, #3753 | 企业 IT/开发者 |
| 跨平台桌面端日常使用 | #3815, #3808, #3816 | 普通用户 |

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| Issue/PR | 天数 | 风险 | 行动建议 |
|:---|:---:|:---|:---|
| [#3640 MCP TaskGroup 假死](https://github.com/agentscope-ai/QwenPaw/issues/3640) | 3 天 | **核心稳定性**，生产环境 Agent 无响应 | 指派核心开发者，复现并添加 TaskGroup 异常捕获与自愈机制 |
| [#3702 技能池持续报错](https://github.com/agentscope-ai/QwenPaw/issues/3702) | 2 天 | 用户无法提供有效日志，诊断阻塞 | 维护者主动要求 `qwenpaw --version` 输出及完整 traceback |
| [#3555 Windows Desktop 启动挂起](https://github.com/agentscope-ai/QwenPaw/issues/3555) | 6 天 | 与 #3815 白屏可能同源，根因分析未完成 | 结合 Vite 回滚事件，验证是否 HTTP 服务未就绪即被访问 |
| [#3817 向量模型配置重启失效](https://github.com/agentscope-ai/QwenPaw/issues/3817) | 0 天（新） | Docker 部署配置持久化缺陷 | 确认初始化逻辑覆盖时序，评估是否影响所有 Docker 用户 |
| [PR #3117 语义 Skill 路由](https://github.com/agentscope-ai/QwenPaw/pull/3117) | 17

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-25

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-04-25  
> **分析区间**: 过去 24 小时（2026-04-24 至 2026-04-25）

---

## 1. 今日速览

ZeptoClaw 今日维持**低活跃度**运行态势，社区贡献节奏平稳但未见突破。核心进展聚焦于基础设施层：一条新 Issue 提出飞书（Feishu/Lark）长连接与外部子进程 Worker 的集成架构方案，一条 CI 扩展 PR 持续迭代以覆盖更多可选集成特性。无版本发布，无 Issue 关闭，整体处于**技术储备与架构验证阶段**，尚未进入功能交付高峰期。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

| 项目 | 状态 | 说明 |
|:---|:---|:---|
| PR #544 | 🟡 **待合并** | CI 特性矩阵扩展，新增 `channel-email`、`google`、`provider-vertex`、`whatsapp-web` 四条可选集成路径的编译覆盖 |

**进展评估**: 该 PR 为纯工程基础设施改进，不直接交付用户可见功能，但**显著降低未来集成特性引入时的回归风险**。附带两个兼容性修复已"cherry-picked from production"，暗示生产环境已验证。合并后项目 CI 健壮性将提升一个台阶，为后续多通道、多提供商的并行开发奠定基础。

🔗 [PR #544: [codex] expand CI coverage for optional integration features](https://github.com/qhkm/zeptoclaw/pull/544)

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| #1 | Issue #546 | 0 评论 / 0 👍 | **架构设计级议题**，虽零互动但技术权重高 |

### Issue #546 深度解读: 飞书长连接 → Nanodio 子进程 Worker

**核心诉求**: 将 Nanodio（推测为项目内部 AI 推理/处理引擎）从**进程内嵌模式**解耦为**独立子进程 Worker**，通过飞书原生 Lark 通道的长连接进行消息转发。

**背后信号**:
- **稳定性隔离**: 子进程崩溃不影响 ZeptoClaw 主进程，符合"监督式"（supervised）设计哲学
- **资源弹性**: Nanodio 可能涉及重计算或 GPU 资源，独立进程便于独立扩缩容
- **部署灵活性**: "V1 local host path" 暗示未来可能有远程 host path（V2?），架构预留扩展点

**技术选型注意**: 使用 `feishu=true` 参数区分 Lark 国际版与飞书国内版，显示维护者对两者 API 差异有清醒认知。

🔗 [Issue #546: feat(channels): native Feishu long-connection to Nanodio subprocess worker](https://github.com/qhkm/zeptoclaw/issues/546)

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 详情 |
|:---|:---|:---|:---|
| 🔶 **中** | PR #544 附带修复 | 已有 fix，待合并 | 两个兼容性修复"already cherry-picked from production"——暗示生产环境曾遇问题，但已热修复 |

**风险评估**: 无新增 Bug 报告，无崩溃/回归 Issue。PR #544 的修复属于**预防性工程债务清理**，非紧急安全补丁。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| 飞书/ Lark 企业级集成 | Issue #546 | ⭐⭐⭐⭐☆ **高** | 作者为项目成员（CangWolf17），且标注 "V1" 暗示已纳入版本规划 |
| WhatsApp Web 集成 | PR #544 CI 矩阵 | ⭐⭐⭐⭐☆ **高** | 已进入 CI 编译覆盖，功能代码大概率已存在或即将合并 |
| Google / Vertex AI 提供商 | PR #544 CI 矩阵 | ⭐⭐⭐⭐☆ **高** | 同上，provider-vertex 指向 Google Cloud 企业级 AI 服务 |
| Email 通道 | PR #544 CI 矩阵 | ⭐⭐⭐☆☆ **中** | 通道层基础设施，依赖度较低但实现成本可控 |

**路线图推测**: ZeptoClaw 正从"单通道/单提供商"架构向**多通道（飞书、邮件、WhatsApp）、多模型提供商（Vertex 等）**的平台化方向演进，子进程 Worker 模式可能是统一各类后端能力的标准抽象。

---

## 7. 用户反馈摘要

> ⚠️ **数据局限说明**: 今日无用户评论数据（Issue #546 零评论，PR #544 评论数 undefined），以下为基于 Issue 内容的**需求侧推断**:

| 维度 | 观察 |
|:---|:---|
| **痛点假设** | 企业用户可能反馈 Nanodio 嵌入主进程导致: (1) 崩溃级联 (2) 内存/CPU 争用 (3) 升级需重启整个服务 |
| **场景诉求** | 飞书作为国内企业主流协作平台，需要**原生长连接**而非 Webhook 轮询的实时性 |
| **满意度盲区** | 缺乏用户直接声音，Issue 由核心开发者发起而非社区用户，可能存在**需求验证不足**风险 |

**建议**: 维护者可在 Issue #546 中补充 RFC 模板，邀请实际部署飞书的用户确认子进程模式是否满足其运维需求（如日志聚合、健康检查、IPC 性能基准）。

---

## 8. 待处理积压

| 条目 | 创建时间 | 滞留天数 | 提醒事项 |
|:---|:---|:---|:---|
| PR #544 | 2026-04-23 | 2 天 | CI 扩展 PR 已更新（最后活动 2026-04-24），建议优先审查合并以解锁后续集成特性开发 |

**健康度提示**: 当前积压极低（仅 1 PR 待合并），Issue/PR 比例 1:1，社区响应及时。**无长期悬置风险**。

---

## 附录: 今日数据看板

```
Issues:  1 新开/活跃 | 0 关闭 | 净增 +1
PRs:     1 待合并   | 0 合并/关闭
Releases: 0
评论活跃度: 低（总评论 0+undefined）
👍 互动: 0
```

---

*日报生成完毕。如需历史趋势对比或特定模块深度分析，请提供补充数据。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-25

---

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**，24小时内 Issues 和 PR 各更新 50 条，但**关闭率偏低**（Issues 仅关闭 3/50，PR 合并/关闭 27/50）。社区围绕**多智能体架构、国际化基础设施、渠道生态扩展**三大主题持续投入。值得关注的是，安全沙箱策略误杀合法命令（`git -C`）和 Ollama 超时截断等稳定性问题获得较多讨论，反映生产环境部署痛点正在浮现。无新版本发布。

---

## 2. 版本发布

**无新版本发布**（v0.6.9 仍为最新版本）

> 注：PR #5498 正在修复 v0.6.9 发布管道的 7 个下游失败任务， crates.io 同步和权限配置问题尚未完全解决。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#6027](https://github.com/zeroclaw-labs/zeroclaw/pull/6027) | david1gp | **启用 MiniMax 原生工具调用**，保留系统消息合并行为，补全提供商能力测试 | ✅ 关闭 |
| [#6020](https://github.com/zeroclaw-labs/zeroclaw/issues/6020) | justjuangui | Windows 开发环境 `cargo test` 失败问题获修复（关联 PR #6076） | ✅ 关闭 |
| [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) | singlerider | **HMAC 工具执行收据**用于幻觉检测，讨论后关闭（非实现竞争，反馈已收集） | ✅ 关闭 |
| [#5525](https://github.com/zeroclaw-labs/zeroclaw/pull/5525) | theonlyhennygod | Telegram 媒体组批处理（旧实现关闭，新实现 #6088 已开） | 🔄 迭代 |
| [#5310](https://github.com/zeroclaw-labs/zeroclaw/pull/5310) | theonlyhennygod | Slack 环境变量覆盖（旧实现关闭，扩展为 #6087 多渠道通用方案） | 🔄 迭代 |
| [#5546](https://github.com/zeroclaw-labs/zeroclaw/pull/5546) | theonlyhennygod | `allowed_path` 别名（旧实现关闭，精简为 #6086） | 🔄 迭代 |
| [#5548](https://github.com/zeroclaw-labs/zeroclaw/pull/5548) | theonlyhennygod | 会话 TTL 默认 168h（旧实现关闭，优化为 #6085） | 🔄 迭代 |

### 关键推进中的 PR

| PR | 作者 | 进展意义 |
|:---|:---|:---|
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | singlerider | **Mozilla Fluent 国际化管道 + mdBook 多语言文档重写** — XL 级基础设施投资，标志项目全球化准备 |
| [#6076](https://github.com/zeroclaw-labs/zeroclaw/pull/6076) | justjuangui | 修复 `rag-pdf` 功能端到端失效 + Windows 测试恢复 |
| [#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087) | theonlyhennygod | **统一环境变量覆盖**：Slack/Discord/Telegram 令牌支持 `ZEROCLAW_*` 前缀优先级 |
| [#6088](https://github.com/zeroclaw-labs/zeroclaw/pull/6088) | theonlyhennygod | Telegram 相册批处理重构，解决 N 次独立请求的性能灾难 |
| [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) | tidux | **ACP 渠道工具输出格式化修复**（高风险），解决事件传输结构错误 |
| [#5975](https://github.com/zeroclaw-labs/zeroclaw/pull/5975) | kmsquire | Gemini/OpenRouter 工具调用兼容性 + Google Workspace 模式澄清 |

**整体评估**：项目处于**"基础设施夯实期"**——国际化、配置 ergonomics、渠道可靠性等底层能力优先于新功能，v0.7.0 可能聚焦稳定性与可配置性。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | 阿里云百炼编码计划无法使用 | 9 | **国内云厂商适配缺口**：阿里云 Bailian 的 coding plan 功能集成受阻 | [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) |
| 2 | NapCat/OneBot 渠道缺失 | 8 | **QQ 生态接入需求**：用户期望 NapCat（QQ Bot 框架）或 OneBot 11 协议支持 | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) |
| 3 | 沙箱配置阻断 Python 技能模式 | 6 | **企业级安全与灵活性的平衡**：FINOS CDM 合规技能开发受阻 | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) |
| 4 | 连续助手消息重复（工具调用+叙述文本） | 6 | **多模态输出协议缺陷**：模型返回 reasoning + tool_calls 时消息结构崩溃 | [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) |
| 5 | Ollama 摘要 60s 超时截断 | 4 | **边缘算力适配**：小模型本地部署的性能容忍度不足 | [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) |

### 深度分析：热点背后的社区结构

- **中国企业用户群体显性化**：阿里云、智谱 GLM-5、Z.AI 等国内提供商相关 Issue 占比显著，但国际化基础设施（Fluent i18n）与本土适配存在资源竞争
- **"技能开发者"成为新兴用户画像**：[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) 作者明确标识 FINOS 合规场景，反映 ZeroClaw 正从个人助手向**企业技能平台**渗透
- **渠道碎片化痛点加剧**：QQ（NapCat/OneBot/iLink）、企业微信、WhatsApp 等渠道请求分散，缺乏统一协议抽象

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **S1 - 阻断工作流** | [#6051](https://github.com/zeroclaw-labs/zeroclaw/issues/6051) | 自检硬编码 `127.0.0.1`，忽略 `0.0.0.0` 配置 | ❌ 无 PR |
| **S1 - 阻断工作流** | [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) | `always_ask` 工具在非 CLI 渠道静默拒绝而非提示确认 | ❌ 无 PR，标记 in-progress |
| **S1 - 阻断工作流** | [#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) | zeroclaw-desktop 启动崩溃 "No provider set" | ❌ 无 PR |
| **S1 - 阻断工作流** | [#5941](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) | 自定义提供商工具调用 `call_id` 不匹配导致全失败 | ❌ 无 PR，in-progress |
| **S1 - 功能损坏** | [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636) | zai-cn + glm-5-turbo 上下文修剪后 invalid messages (1214) | ❌ 无 PR |
| **S1 - 阻断工作流** | [#5117](https://github.com/zeroclaw-labs/zeroclaw/issues/5117) | Mistral 工具调用 ID 格式不兼容 | ❌ 无 PR，in-progress |
| **S2 - 降级行为** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | 默认 shell 沙箱阻断所有现实 Python 技能模式 | ⚠️ 讨论中，涉及安全策略 RFC |
| **S2 - 降级行为** | [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | `git -C <path>` 被小写参数误杀为 `-c` | ❌ 无 PR，in-progress，good first issue |
| **S2 - 降级行为** | [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | 连续助手消息重复 | ❌ 无 PR |
| **S2 - 降级行为** | [#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285) | GLM-5 思考内容泄漏到最终消息 | ❌ 无 PR（旧 PR #5298 关闭，需新实现） |
| **S3 - 轻微** | [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) | Ollama 摘要 60s 超时 | ❌ 无 PR，PR #5752 可配置超时进行中 |
| **S3 - 轻微** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | ZeroClaw 不知自身支持 `zeroclaw cron` | ❌ 无 PR |

**稳定性健康度评估**：⚠️ **偏高风险**。6 个 S1 级别 Bug 中仅 2 个标记 in-progress，且均无明确 PR 关联。沙箱安全策略的过度保守正在系统性伤害技能生态。

---

## 6. 功能请求与路线图信号

### 高信号强度（已有 RFC 或 Tracker）

| 功能 | Issue | 状态 | 纳入可能性 |
|:---|:---|:---|:---|
| **多智能体 UX 流** | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC 讨论期（7天）进行中 | ⭐⭐⭐⭐⭐ 核心团队主导，有 Tracker [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) |
| **多智能体路由** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | 8👍，stale 标签 | ⭐⭐⭐⭐☆ 将被 #5890/5891 覆盖 |
| **提供商级模型回退链** | [#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) | 2 评论 | ⭐⭐⭐☆☆ 可靠性工程相关，需 RFC |

### 中等信号（具体场景驱动）

| 功能 | Issue | 场景 | 纳入可能性 |
|:---|:---|:---|:---|
| **企业微信 (Wecom) 渠道** | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | 企业 IM 接入 | ⭐⭐⭐⭐☆ 有 OpenClaw 参考实现 |
| **微信 iLink 渠道恢复** | [#5259](https://github.com/zeroclaw-labs/zeroclaw/issues/5259) | 已开发但被 revert | ⭐⭐⭐⭐☆ 技术债务回收 |
| **NapCat/OneBot 渠道** | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | QQ 生态 | ⭐⭐⭐☆☆ 需协议抽象决策 |
| **多提供商并发** | [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) | 本地多模型负载均衡 | ⭐⭐⭐☆☆ 与回退链设计耦合 |

### 基础设施投资（下一版本核心）

| PR | 投资方向 |
|:---|:---|
| [#5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) | 国际化（Fluent）+ 文档体系 |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | OpenTelemetry 可观测性（gen_ai.tool.* 语义约定） |
| [#6085](https://github.com/zeroclaw-labs/zeroclaw/pull/6085) + [#6086](https://github.com/zeroclaw-labs/zeroclaw/pull/6086) + [#6087](https://github.com/zeroclaw-labs/zeroclaw/pull/6087) | 配置 ergonomics 统一整治 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

> *"Command not allowed by security policy: git -C /some/workspace/path status --short"*  
> — [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)，Mohl

**沙箱策略的"假阳性"伤害**：安全策略的参数小写化和简单字符串匹配导致合法命令被误杀，开发者被迫降低安全等级或放弃功能。

> *"Using small models like `gemma4:e2b` with Ollama may take longer than just 60s per query... leading to a lost of context and a total degradation"*  
> — [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556)，josergc

**边缘算力的"二等公民"待遇**：硬编码超时假设高性能云端模型，忽视本地/边缘部署场景。

> *"Denied by user" instead of sending an in-channel Yes/No prompt*  
> — [#2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324)，danividalg

**渠道能力不一致**：CLI 与 Telegram/Discord 等渠道的行为分叉，"supervised" 自治模式名存实亡。

### 😊 满意场景

> *"I am developing InvestorClaw, a FINOS CDM 5.x-compliant portfolio analysis skill nearing public announcement"*  
> — [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)，perlowja

**企业合规场景的认可**：金融行业开发者选择 ZeroClaw 作为技能运行时，认可其架构方向。

### 🤔 认知落差

> *"zeroclaw says it does not have the tools to do this thing. It looks that the zeroclaw do not know it can use `zeroclaw cron`"*  
> — [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)，PeterlitsZo

**自我认知盲区**：Agent 对自身工具集的认知不完整，提示工程或工具描述需优化。

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue

| Issue | 创建 | 最后更新 | 天数 | 风险 |
|:---|:---|:---|:---|:---|
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) 多智能体路由 | 2026-03-04 | 2026-04-24 | 51 | **8👍 高需求**，stale 标签，将被新 RFC 覆盖但需明确迁移路径 |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) NapCat 渠道 | 2026-03-02 | 2026-04-24 | 53 | QQ 生态关键缺口，与 #5259 微信渠道形成"腾讯系"集体缺失 |
| [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059) 阿里云百炼 | 2026-03-09 | 2026-04-24 | 46 | 国内云适配代表，无维护者响应 |
| [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) 多提供商并发 | 2026-03-08 | 2026-04-24 | 47 | 与 #4647 回退链设计相关，需统一方案 |
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) 企业微信 | 2026-03-10 | 2026-04-24 | 45 | 企业场景关键渠道 |

### 🔔 维护者行动建议

1. **安全策略紧急评审**：#5722 + #5809 共同指向 shell 沙箱的过度保守，建议启动安全策略 RFC，区分"命令白名单"与"参数模式匹配"的精度
2. **S1 Bug 冲刺**：6 个 S1 中 4 个无 PR 关联，建议分配专项 owner
3. **渠道优先级声明**：QQ/微信/企业微信的"腾讯系"需求 vs. 国际化基础设施的资源竞争，需公开路线图对齐预期
4. **Stale 标签清理**：#2767 等 stale Issue 应在多智能体 RFC (#5890) 中明确继承或关闭决策

---

*日报生成时间：2026-04-25 | 数据来源：ZeroClaw GitHub 仓库公开数据*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*