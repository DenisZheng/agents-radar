# OpenClaw 生态日报 2026-04-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-20 00:14 UTC

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

# OpenClaw 项目动态日报 | 2026-04-20

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内 Issues 与 PR 各更新 500 条，社区讨论密度显著。项目连发两个 beta 版本（v2026.4.19-beta.1/2），聚焦 Agent 通道隔离与流式请求修复。PR 队列中 294 条待合并，合并/关闭 206 条，**待处理比例偏高（58.8%）**，需关注 review 瓶颈。社区核心诉求集中在**多平台原生应用缺失**（Linux/Windows）、**内容泄漏问题**（工具调用间文本、推理内容外泄至聊天通道）以及**身份信任基础设施**三大方向。

---

## 2. 版本发布

### v2026.4.19-beta.2
- **核心修复**：OpenAI 兼容后端的流式用量上报 ([#68746](https://github.com/openclaw/openclaw/pull/68746))
  - 强制发送 `stream_options.include_usage`，解决本地/自定义 OpenAI 兼容后端显示 0% 用量的长期问题
  - 贡献者：@kagura-agent
- **架构修复**：嵌套 Agent 工作区作用域隔离
  - 限制嵌套 agent 的工作边界，防止子任务污染父级上下文

### v2026.4.19-beta.1
- **关键安全修复**：跨 Agent 子代理派生的通道账户隔离 ([#67508](https://github.com/openclaw/openclaw/pull/67508))
  - 子会话不再继承调用者账户，修复共享房间/工作区/多账户场景下的权限泄漏
  - 路由逻辑：cross-agent subagent spawns → target agent's bound channel account，保留 peer 及 workspace/role-scoped 绑定

**迁移注意**：多账户部署者需验证子代理的通道权限配置，beta.1 的账户隔离变更可能影响依赖旧继承行为的自动化流程。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 领域 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| #43961 | Gateway | **生产级稳定性**：SIGKILL 兜底终止僵死进程，修复 graceful shutdown 超时后端口占用导致的重启失败 | [PR](https://github.com/openclaw/openclaw/pull/43961) |
| #47863 | Gateway | **API 现代化**：新增 HTTP REST 端点替代 WebSocket JSON-RPC，状态查询从 30-40s 冷启动降至毫秒级 | [PR](https://github.com/openclaw/openclaw/pull/47863) |
| #65986 | Web UI + Gateway | **数据完整性**：删除 Agent 时级联清理孤立会话，防止 `sessions_send` 指向已删除 Agent 的非法状态 | [PR](https://github.com/openclaw/openclaw/pull/65986) |
| #41035/#39481/#39464 | Slack | **生态兼容性三连击**：修复 Slack url_verification 签名验证冲突，支持 Events API 初始配置的无签名挑战 | [PR#41035](https://github.com/openclaw/openclaw/pull/41035) [PR#39481](https://github.com/openclaw/openclaw/pull/39481) [PR#39464](https://github.com/openclaw/openclaw/pull/39464) |
| #68726 | Agents | **可观测性**：子代理错误负载补充 role、session key、timing，支撑父级重试决策 | [PR](https://github.com/openclaw/openclaw/pull/68726) |

**整体推进评估**：今日合并聚焦**基础设施韧性**（进程生命周期、API 性能、数据一致性），Agent 核心架构的嵌套作用域隔离进入 beta，为后续多 Agent 协作场景奠定安全基础。

---

## 4. 社区热点

### 最高讨论 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| #1 | **RFC: Native Agent Identity & Trust Verification** | 99 | **去中心化身份基础设施**：MolTrust 提出基于 ERC-8004/W3C DID/VC 的 Agent 原生身份验证框架，意图将 OpenClaw 定位为可信 Agent 网络的基础设施层 | [#49971](https://github.com/openclaw/openclaw/issues/49971) |
| #2 | **Linux/Windows Clawdbot Apps** | 86 / 👍68 | **平台公平性**：macOS/iOS/Android 已有原生应用，Linux/Windows 用户长期被排除在"一等公民"之外，68 赞显示广泛需求 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| #3 | Discord WebSocket 断连与无界退避 | 22 | **可靠性工程**：1005/1006 断连后 resume 失败，指数退避无上限导致 30+ 分钟离线，DM 静默丢失 | [#13688](https://github.com/openclaw/openclaw/issues/13688) |

**诉求分析**：社区正从"功能可用"向**可信、公平、可靠**演进——身份 RFC 代表生态治理诉求，跨平台应用代表用户增长诉求，WebSocket 可靠性代表企业级部署诉求。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 现象 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-阻塞** | [#62335](https://github.com/openclaw/openclaw/issues/62335) CLI 命令无限挂起，Ctrl+C 无法中断 | `devices list`/`pairing list`/`onboard` 等核心命令在 2026.4.5 后僵死，需强制终止 | **OPEN**，10 评论 | ❌ 无 |
| 🔴 **P0-数据丢失** | [#13688](https://github.com/openclaw/openclaw/issues/13688) Discord 断连无界退避 | 30+ 分钟离线，DM 静默丢失 | CLOSED | 已修复（历史） |
| 🟡 **P1-回归** | [#67936](https://github.com/openclaw/openclaw/issues/67936) Matrix 通道 2026.04.15 后无法启动 | `Cannot find package 'openclaw'` 导入错误 | **OPEN**，6 评论 | ❌ 无 |
| 🟡 **P1-内容泄漏** | [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用间文本泄漏至消息通道 | 内部处理文本（错误处理、执行确认）被用户可见 | **OPEN**，21 评论 | [#68986](https://github.com/openclaw/openclaw/pull/68986) 进行中 |
| 🟡 **P1-内容泄漏** | [#41494](https://github.com/openclaw/openclaw/issues/41494) Gemini 推理内容泄漏 | 思维链作为常规文本输出到 Telegram | **OPEN**，8 评论 | [#68986](https://github.com/openclaw/openclaw/pull/68986) 可能覆盖 |
| 🟡 **P1-回归** | [#42446](https://github.com/openclaw/openclaw/issues/42446) 内部工具调用输出泄漏至聊天 | `minimax:tool` 等原始内容暴露 | **OPEN**，6 评论 / 👍4 | ❌ 无 |
| 🟢 **P2** | [#67366](https://github.com/openclaw/openclaw/issues/67366) Onboard 替换 Telegram token 时 TypeError | `Cannot read properties of undefined` | **OPEN**，6 评论 | ❌ 无 |
| 🟢 **P2** | [#67414](https://github.com/openclaw/openclaw/issues/67414) Control UI 粘贴图片空白预览 + 历史重复处理 | 粘贴截图无缩略图，每次加载历史重新处理图片 | **OPEN**，5 评论 | ❌ 无 |

**关键信号**：**内容泄漏类 bug 呈集群爆发**（#25592, #41494, #42446, #26466 等），PR #68986 "normalize visible model output before delivery" 试图系统性解决，但范围是否足够覆盖所有泄漏路径需验证。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Linux 原生 GTK 应用** | PR [#59859](https://github.com/openclaw/openclaw/pull/59859) XL 级 PR 已开 | ⭐⭐⭐⭐⭐ **高** | 直接回应 #75（68 赞），代码已就绪，待 review |
| **GitHub Copilot SDK 后端** | PR [#69116](https://github.com/openclaw/openclaw/pull/69116) | ⭐⭐⭐⭐⭐ **高** | 零 API key 使用 Copilot 订阅，降低新用户门槛，opt-in 设计安全 |
| **WebChat 多 Agent 切换** | Issue [#45086](https://github.com/openclaw/openclaw/issues/45086) + PR [#68926](https://github.com/openclaw/openclaw/pull/68926) | ⭐⭐⭐⭐⭐ **高** | UI PR 已同步提交，功能-实现配对推进 |
| **Google Chat 会话线程绑定** | PR [#68967](https://github.com/openclaw/openclaw/pull/68967) | ⭐⭐⭐⭐ **较高** | 解决多话题会话污染，用户体验痛点明确 |
| **Agent 身份验证框架** | Issue [#49971](https://github.com/openclaw/openclaw/issues/49971) | ⭐⭐⭐ **中** | 战略级但工程量大，需评估与现有 auth 体系的整合成本 |
| **Agent 控制的 Compaction** | Issue [#28845](https://github.com/openclaw/openclaw/issues/28845) | ⭐⭐⭐ **中** | 性能优化方向，但涉及核心架构变更，短期可能搁置 |
| **Prompt hooks 动态缩小工具面** | PR [#68734](https://github.com/openclaw/openclaw/pull/68734) | ⭐⭐⭐⭐ **较高** | 插件生态关键能力，解决 `before_prompt_build` 时 tools 为空的设计缺陷 |

---

## 7. 用户反馈摘要

### 痛点聚类

| 场景 | 典型反馈 | 来源 |
|:---|:---|:---|
| **企业部署摩擦** | "Slack DM 回复丢失""Discord 断连后无界退避""Matrix 升级后完全不可用" | #7663, #13688, #67936 |
| **隐私/专业性感知** | "工具调用间的处理文本出现在 Slack 里，用户看到内部错误和确认信息，非常不专业" | #25592 |
| **平台不平等** | "我们有 macOS/iOS/Android，Linux/Windows 没有，功能要对等" | #75 |
| **调试困难** | "CLI 命令挂死没有输出，Ctrl+C 没用，只能杀进程" | #62335 |
| **配置复杂** | "exec secret provider 在 onboard 时崩溃""重复 plugin id 警告" | #37303, #37548, #20478 |

### 满意点
- **嵌套 Agent 账户隔离**（beta.1）：多账户用户认可安全修复方向
- **REST API 替代 WebSocket**：状态查询性能提升显著 (#47863)

---

## 8. 待处理积压

### 需维护者优先关注

| Issue/PR | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 应用 | ~110 天 | 平台增长天花板 | PR #59859（Linux GTK）已就绪，需加速 review；Windows 方案待规划 |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent 身份 RFC | ~33 天 | 生态话语权 | 需核心维护者回应技术可行性，建议 2 周内给出初步评估 |
| [#62335](https://github.com/openclaw/openclaw/issues/62335) CLI 无限挂起 | ~13 天 | **核心功能不可用** | 标记为 release blocker，需立即分配 |
| [#43767](https://github.com/openclaw/openclaw/issues/43767) Heartbeat 忽略 lightContext | ~38 天 | 资源泄漏 | 与 #65161 心跳模式问题关联，建议合并分析 |
| [#63732](https://github.com/openclaw/openclaw/issues/63732) daily atHour reset 失效 | ~11 天 | 会话无界增长 → 性能衰减 | 已定位到 `updatedAt` 写入问题，需修复 PR |

### PR Review 瓶颈
- 294 条待合并 PR 中，[#59859](https://github.com/openclaw/openclaw/pull/59859)（Linux 应用，XL 级）和 [#69116](https://github.com/openclaw/openclaw/pull/69116)（Copilot SDK，XL 级）为**用户增长关键路径**，建议优先分配 review 资源。

---

*日报基于 openclaw/openclaw 公开 GitHub 数据生成 | 2026-04-20*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**分析日期：2026-04-20 | 数据覆盖：过去24小时**

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能竞赛"向"生产就绪"的关键转型**：头部项目（OpenClaw、ZeroClaw）日均 Issues+PR 突破 500+ 条，社区焦点从"能否运行"转向**安全隔离、多租户治理、边缘设备稳定性**等企业级诉求。Rust/Zig 等系统语言项目（ZeroClaw、NullClaw）与 Node/Python 项目（NanoBot、CoPaw）形成**性能-开发效率光谱**，而 OpenClaw 凭借多平台覆盖和 Agent 身份基础设施尝试定义行业标准。整体呈现**"基础设施层收敛、应用层分化"**态势——共识向并发架构、WASM 沙箱、流式传输集中，差异化体现在渠道覆盖广度与目标部署场景。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 待合并 PR | 版本发布 | 健康度评估 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500+ | 500+ (206 合并/关闭, 294 待合并) | 294 (58.8%) | v2026.4.19-beta.1/2 | ⚠️ **高活跃-高积压**：review 瓶颈显著，内容泄漏类 bug 集群爆发 |
| **NanoBot** | 12 (7 活跃/5 关闭) | 160 (27 合并/关闭, 133 待合并) | 133 | 无 | ⚠️ **安全驱动**：8 个安全 PR 待审，生产就绪转型中 |
| **Hermes Agent** | 50 (42 活跃, 8 关闭) | 50 (19 合并/关闭, 31 待合并) | 31 | 无 | ✅ **质量巩固期**：终端稳定性系统性闭环，凭证安全落地 |
| **PicoClaw** | 12 (10 活跃, 2 关闭) | 9 (1 关闭, 8 待合并) | 8 | v0.2.6-nightly | 🔴 **高积压-低吞吐**：认证层 P0 bug 未修，维护者响应 >15 天 |
| **NanoClaw** | 3 (1 新开, 2 关闭) | 15 (4 关闭, 11 待合并) | 11 | 无 | ✅ **架构迁移期**：v1→v2 路线图进入执行，headless 模式验证 |
| **NullClaw** | 7 (6 开放, 1 关闭) | 12 (0 合并, 12 待合并) | 12 | 无 | ⚠️ **零合并率**：核心开发者 11 PR 提交但 review 阻塞，并发架构待审 |
| **IronClaw** | 11 (6 活跃, 5 关闭) | 50 (18 合并/关闭, 32 待合并) | 32 | 无 | ✅ **能力跃升前夜**：Engine v2 功能骨架完成，WASM 安全漏洞需紧急响应 |
| **LobsterAI** | 4 (2 活跃, 2 关闭) | 9 (0 合并, 9 待合并) | 9 (7 标记 stale) | 无 | 🔴 **停滞风险**：32 天 PR 积压，OpenAI 兼容性阻断未修 |
| **TinyClaw** | 2 (2 待响应) | 0 | 0 | 无 | 🔴 **活跃度危机**：24h 零 PR，核心功能损坏无响应 |
| **Moltis** | 2 (2 开放) | 5 (4 合并, 1 待合并) | 1 | 无 | ✅ **高效吞吐**：TypeScript 迁移完成，工程债务清偿节奏佳 |
| **CoPaw** | 21 (17 活跃, 4 关闭) | 14 (0 合并, 14 待合并) | 14 | 无 (v1.1.2 最新) | ⚠️ **v1.2 冲刺期**：14 PR 零合并，LLM 路由旗舰特性待集成 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ **休眠/观察期** |
| **ZeroClaw** | 49 (45 活跃, 4 关闭) | 33 (9 合并, 24 待合并) | 24 | **v0.7.3 稳定版** | ⚠️ **架构重构阵痛**：workspace 拆分落地，S0 安全 bug 待修，review 瓶颈 |

> **关键指标**：OpenClaw 以 1000+ 日更条目独占规模第一梯队；ZeroClaw、CoPaw、NanoBot 构成第二梯队（50-200 条）；LobsterAI、TinyClaw 处于**维护者带宽危机**。

---

## 3. OpenClaw 在生态中的定位

### 规模与影响力
| 维度 | OpenClaw | 对比项 |
|:---|:---|:---|
| **日活数据量** | Issues 500+ / PR 500+ | ZeroClaw 82, NanoBot 172, Hermes 100 |
| **平台覆盖** | macOS/iOS/Android 原生 + Linux/Windows 缺失 | ZeroClaw 跨平台 CLI，CoPaw 桌面+Web，NanoBot 侧重 Telegram |
| **版本节奏** | 双 beta/日 | ZeroClaw v0.7.3（月级），Moltis 无发布 |

### 技术路线差异
| 特征 | OpenClaw | 竞品对比 |
|:---|:---|:---|
| **Agent 架构** | 嵌套 Agent + 通道账户隔离（beta.1 落地） | ZeroClaw 微内核转型中（RFC accepted），NanoBot 单 Agent 流式 |
| **身份基础设施** | **ERC-8004/W3C DID/VC 原生身份 RFC**（#49971, 99 评论） | 全生态唯一提出去中心化 Agent 身份标准 |
| **API 设计** | WebSocket JSON-RPC → HTTP REST 迁移（#47863, 30-40s→毫秒级） | IronClaw 保留 WebSocket，NullClaw 纯 HTTP |
| **内容安全** | "normalize visible model output"系统性修复（PR #68986） | Hermes 凭证脱敏（#12734），NanoBot SSRF 加固（8 PR） |

### 核心优势
- **生态位最高**：唯一同时覆盖"个人助手（Clawdbot App）+ 企业网关（Slack/Discord/Matrix/Telegram）+ 身份标准"三层
- **社区治理最成熟**：RFC 驱动（#49971）、beta 频道、迁移警告机制（beta.1 账户隔离变更通知）
- **性能优化最激进**：状态查询从 30-40s 冷启动降至毫秒级，级联删除保证数据完整性

### 相对短板
- **跨平台公平性**：Linux/Windows 原生应用缺失（#75, 68 赞, 110 天未决），被 ZeroClaw CLI、CoPaw 桌面端反超
- **Review 瓶颈**：58.8% 待合并比例全生态最高，可能拖累安全修复速度

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与进展 | 紧迫度 |
|:---|:---|:---|:---:|
| **并发/非阻塞交互架构** | NullClaw (#845-#855), OpenClaw (流式请求修复), ZeroClaw (#5890 多代理 UX) | 单 turn 阻塞 → 会话级抢占/多 turn 并发；NullClaw 11 PR 系统工程，OpenClaw 嵌套 Agent 作用域隔离 | 🔥🔥🔥 |
| **内容泄漏防护** | OpenClaw (#25592/#41494/#42446), Hermes (#12734 凭证脱敏), NanoBot (SSRF 8 PR) | 工具调用间文本、推理内容、凭证值外泄至用户可见通道；OpenClaw PR #68986 试图系统性解决 | 🔥🔥🔥 |
| **安全沙箱与隔离** | ZeroClaw (WASM Extism #5913, Docker 沙箱), IronClaw (WASM URL 泄漏 #2676), NanoBot (shell 注入 #3240/#3252) | 从"提示词约束"转向"技术隔离"：WASM 运行时、进程级 cgroup、命令预扫描 | 🔥🔥🔥 |
| **多租户/多账户** | OpenClaw (通道账户隔离 beta.1), PicoClaw (#2313 多用户 + Agent Shield), NanoBot (#3309 per-chat policy) | 共享工作区/多群场景下的权限边界、配置隔离、成本归因 | 🔥🔥🔥 |
| **本地/边缘模型支持** | Hermes (#4983 Gemini 原生, #6839 懒加载 Schema), ZeroClaw (#5815 llamacpp, #4704 树莓派), PicoClaw (#2583 Ollama) | 降低云端 token 依赖，3.5k-5k token 工具开销优化，8GB RAM 可运行 | 🔥🔥 |
| **可观测性与成本透明** | NanoBot (#3257 语音延迟指标, #3107 status/timeout), OpenClaw (流式用量上报 #68746), ZeroClaw (#3563 上下文用量) | 端到端延迟追踪、token 消耗实时可见、任务状态黑盒消除 | 🔥🔥 |
| **流式传输与消息分块** | CoPaw (#3552 SSE Unicode 崩溃, #3553 修复), NanoBot (#3311 Telegram 流式分块), PicoClaw (#2587 Web 流式) | 长消息截断、特殊字符中断、实时打字指示器 | 🔥🔥 |
| **热重载/动态配置** | IronClaw (#1350 LLM provider 热重载), CoPaw (#3575 Agent 热重载), ZeroClaw (实时配置迁移) | 无需重启切换模型、更新技能、变更路由策略 | 🔥🔥 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 | 生态策略 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 多平台原生应用 + 企业网关 + Agent 身份标准 | 个人极客 → 企业 IT（Slack/Discord 部署） | TypeScript/Node，WebSocket→REST 迁移，嵌套 Agent 树 | **标准制定者**：DID/VC 身份框架意图定义行业协议 |
| **ZeroClaw** | Rust CLI + WASM 插件 + 微内核转型 | 开发者/自托管者（FINOS 合规金融场景） | Rust/Cargo workspace，WASM Extism 沙箱，Docker 可选 | **性能-安全极客**：单二进制、零依赖、memcg 检测 |
| **NanoBot** | Telegram 优先 + 语音全链路 + 安全加固 | Telegram 重度用户/客服自动化 | Python，插件化技能，流式语音处理 | **渠道深耕**：Telegram 体验最完整（打字状态、内联键盘、话题支持） |
| **Hermes Agent** | 终端可靠性 + 技能生态（89+ skills）+ 多模型路由 | 开发者/自动化工程师（CLI 重度） | Python，bash 进程生命周期管理，技能市场 | **工具调用专家**：像素艺术、视频叠加等创意技能差异化 |
| **CoPaw** | 桌面端（Electron/Tauri）+ LLM 路由 UI + 国产渠道 | 中文用户/Windows 桌面用户 | TypeScript/React，Vitest 测试基建，SSE 流式 | **本土化体验**：微信渠道、国内网络适配（fonts.googleapis 替换） |
| **NullClaw** | Zig 单二进制 + 并发路由 + Tailscale 原生集成 | 边缘设备/IoT（树莓派）、网络安全从业者 | Zig，零依赖，入站路由器纯函数设计 | **极简主义**：A2A 协议、REST Admin API <30KB |
| **IronClaw** | Engine v2 任务自检索 + 浏览器自动化（CDP）+ 记忆纪律 | 研究型用户/长期任务追踪 | Rust，CognitiveGuardian 主动压缩，chromiumoxide | **认知架构前沿**：agent 自管理、AX-tree 网页交互 |
| **Moltis** | 搜索聚合（Jina/Brave/Perplexity）+ 文档工程自动化 | 信息检索重度用户/知识工作者 | Rust/TypeScript，thiserror 错误处理，Doc Rotisserie | **搜索中枢**：多供应商搜索后端统一 |
| **PicoClaw** | 硬件绑定（Sipeed）+ 成本优化（FreeRide 故障转移） | 嵌入式开发者/预算敏感用户 | 未明确，夜间构建自动化 | **硬件-成本优化**：OpenRouter 免费模型池动态轮换 |
| **NanoClaw** | 无头部署 + 容器环境变量注入 + Anthropic 生态 | DevOps/自托管基础设施 | 未明确，v1→v2 架构迁移中 | **部署自动化**：CLI 种子命令、headless 验证 |
| **LobsterAI** | 网易内部 IM（POPO）+ Skill 市场 | 网易生态用户/中文企业 | 未明确 | **组织绑定**：内部渠道优先，国际化/暗黑模式补全 |
| **TinyClaw** | （当前停滞）基础 Telegram + SQLite | 早期尝试者 | Node/better-sqlite3 | **待观察**：安装体验断裂，维护者缺位 |

---

## 6. 社区热度与成熟度分层

### 快速迭代阶段（日均 100+ 更新，功能扩张）
| 项目 | 核心特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 双 beta/日，嵌套 Agent 隔离、身份 RFC | Review 瓶颈导致 294 PR 积压，内容泄漏集群 |
| **ZeroClaw** | v0.7.3 workspace 重构落地，WASM 桥接，CI 治理 | S0 安全 bug 未修，24 PR 待合并，"vibe-coded workflow"技术债 |
| **CoPaw** | v1.2.0 冲刺，LLM 路由端到端，14 PR 待审 | 零合并率阻塞旗舰特性，微信渠道 P0 无响应 |

### 质量巩固阶段（日均 50-100 更新，债务清偿）
| 项目 | 核心特征 | 关键动作 |
|:---|:---|:---|
| **NanoBot** | 8 安全 PR 系统性加固，Telegram 稳定性三连击 | 需加速 security review，释放生产就绪信号 |
| **Hermes Agent** | 终端进程管理闭环（#8340→#12723），凭证脱敏，Google GenAI 原生 | 懒加载 Schema（#6839）待核心团队设计确认 |
| **IronClaw** | Engine v2 功能骨架完成，CognitiveGuardian 落地，Slack 线程记忆 | WASM URL 泄漏（#2676）需紧急修复，浏览器工具链待实现 |

### 转型/重构阶段（架构升级，短期活跃度波动）
| 项目 | 核心特征 | 关键瓶颈 |
|:---|:---|:---|
| **NanoClaw** | v1→v2 迁移启动，headless 验证完成 | 安全策略引擎（#1605）18 天未合并，贡献者疲劳风险 |
| **NullClaw** | 并发路由 11 PR 系统工程，Tailscale 集成 | **零合并率**，review 带宽完全阻塞 |
| **Moltis** | TypeScript 迁移完成，thiserror 重构，Jina.ai 接入 | Google 模型适配盲区（#375, 41 天未修） |

### 停滞/危机阶段（维护者带宽不足，贡献者流失风险）
| 项目 | 核心症状 | 紧急度 |
|:---|:---|:---:|
| **PicoClaw** | 认证层 P0 bug（#2578）32 天未修，维护者响应 >15 天，7 stale PR | 🔴 高 |
| **LobsterAI** | 9 PR 零合并，OpenAI 兼容性阻断（#515）32 天，OAuth2 缺失 | 🔴 高 |
| **TinyClaw** | 24h 零 PR，核心功能损坏（#279）零响应，安装体验断裂 | 🔴 极高 |
| **ZeptoClaw** | 完全无活动 | ⚪ 观察 |

---

## 7. 值得关注的趋势信号

### 信号一：从"Prompt 工程"到"基础设施工程"——安全成为第一性原理
> **数据支撑**：NanoBot 单日 8 安全 PR（SSRF/shell 注入/DNS fail-open）、ZeroClaw WASM 沙箱 + CI action-pinning、OpenClaw 嵌套 Agent 账户隔离、Hermes 凭证脱敏跨压缩轮次

**行业含义**：Agent 获得工具调用能力后，攻击面从"模型幻觉"扩展到"系统命令执行、网络请求、凭证泄漏"。2026 年 Q2 起，**无沙箱不生产**成为默认预期，WASM/Seccomp/cgroup 等技术从"高级选项"变为"基础配置"。

**开发者行动**：优先集成预执行命令扫描（如 NanoBot #2414 Tirith）、网络层 SSRF 防护、凭证内存脱敏，而非依赖提示词约束。

---

### 信号二：多 Agent 协作从"演示特性"到"架构刚需"
> **数据支撑**：OpenClaw 嵌套 Agent 工作区隔离（beta.1）、ZeroClaw #2767 Multi-Agent Routing（7 赞, stale）、NullClaw 子代理结果回传（#849/#854）、IronClaw `mission_get` 自检索

**行业含义**：单 Agent 上下文窗口瓶颈（即使 200K token）推动任务分解，但**子 Agent 的权限边界、结果回传、生命周期管理**成为新复杂度。OpenClaw 的"通道账户隔离"和 NullClaw 的"入站路由器"代表两种架构哲学：树形嵌套 vs 平面路由。

**开发者行动**：设计 Agent 协议时，优先定义**spawn/return 契约**（权限继承规则、结果序列化格式

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-20

---

## 1. 今日速览

NanoBot 今日保持**极高开发活跃度**，24小时内 PR 更新达 **160 条**（133 待合并/27 已合并关闭），Issues 更新 12 条（7 活跃/5 关闭）。核心看点：**安全加固成为主旋律**——mohamed-elkholy95 单日提交 8 个安全相关 PR，覆盖 SSRF 防护、shell 命令注入、DNS 失败处理等关键路径；**Telegram 渠道持续迭代**，3 个 PR 并行解决消息长度溢出、流式分块、内联键盘等体验问题。社区诉求集中在**可观测性**（延迟指标、重试提示）和**多租户配置**（per-chat 策略、provider fallback）。无新版本发布。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR（27 条中的关键项）

| PR | 作者 | 内容 | 影响 |
|:---|:---|:---|:---|
| [#2625](https://github.com/HKUDS/nanobot/pull/2625) | ravs-cyberrock | HTTP 健康检查端点（gateway 端口） | 生产部署可观测性基础能力 |
| [#1273](https://github.com/HKUDS/nanobot/pull/1273) | gthieleb | Telegram 内联键盘（多选题场景） | 关闭 #708，交互体验升级 |
| ~~[#3318](https://github.com/HKUDS/nanobot/issues/3318)~~ | w2kr1stn | `claude_session` 工具重构（Container-default + todAi MCP 集成） | **Clean Break 无向后兼容**，需关注迁移文档 |

**整体推进评估**：安全基建（8 PR）+ 渠道稳定性（3 PR）+ 可观测性（2 PR）三线并进，项目正从"功能丰富"转向"生产就绪"阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | DeepSeek API 不支持 | 6 | **国产模型适配痛点**：用户尝试配置 DeepSeek v3.2 失败，配置文档/兼容性待完善 | [#3300](https://github.com/HKUDS/nanobot/issues/3300) |
| 2 | 综合建议（status/timeout/fallback/多 provider） | 6 | **可观测性与韧性**：7 条建议中 3 条已勾选，剩余 4 条（`-model` 传参、timeout 配置、provider fallback、多 custom provider）为高频刚需 | [#3107](https://github.com/HKUDS/nanobot/issues/3107) |
| 3 | Gemini provider API key 错误 | 5 | **多凭证冲突**：Google 认证层对"多凭证同时存在"报错，需明确优先级策略 | [#3206](https://github.com/HKUDS/nanobot/issues/3206) |
| 4 | ContextVar 提案（task-local 工具路由） | 5 | **异步安全架构**：jr551 推动的并发上下文隔离方案，触及核心 agent loop 设计 | [#2220](https://github.com/HKUDS/nanobot/issues/2220) |
| 5 | summary 注入策略请教 | 4 | **内存压缩机制透明化**：开发者对 `maybe_consolidate_by_tokens` vs `AutoCompact._archive` 的行为差异困惑 | [#3274](https://github.com/HKUDS/nanobot/issues/3274) |

**诉求分析**：社区从"能用"转向"好用"——要求**配置灵活性**（模型选择、timeout、fallback）、**运行透明性**（status、重试提示、延迟指标）、**多租户隔离**（per-chat 策略）。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Telegram 消息过长导致 BadRequest（流式消息单条超 4096 字符） | **今日新报** | [#3311](https://github.com/HKUDS/nanobot/pull/3311) 流式分块 + [#3316](https://github.com/HKUDS/nanobot/pull/3316) markdown→HTML 长度计算修复 | [#3315](https://github.com/HKUDS/nanobot/issues/3315) |
| 🔴 **高** | Shell 命令 SSRF：非 http 协议绕过（`file://`, `gopher://`） | 待合并 | [#3252](https://github.com/HKUDS/nanobot/pull/3252) | — |
| 🔴 **高** | Shell 命令注入：`history.jsonl` / `.dream_cursor` 保护被 bash 扩展绕过 | 待合并 | [#3240](https://github.com/HKUDS/nanobot/pull/3240) 加固 + [#3255](https://github.com/HKUDS/nanobot/pull/3255) 文件系统层强制 | — |
| 🟡 **中** | DNS 解析失败时 SSRF 校验"fail-open"（返回 True） | 待合并 | [#3235](https://github.com/HKUDS/nanobot/pull/3235) | — |
| 🟡 **中** | 邮件自回复死循环（IMAP 收取自己发送的 SMTP 邮件） | 待合并 | [#3234](https://github.com/HKUDS/nanobot/pull/3234) | — |
| 🟡 **中** | Whisper 瞬态故障（502/503）吞错误返回空字符串 | 待合并 | [#3253](https://github.com/HKUDS/nanobot/pull/3253) 指数退避重试 | — |
| 🟢 **低** | UI 输出冗余转义序列（`?25l` + 旋转进度条重复） | **已关闭** | — | [#3265](https://github.com/HKUDS/nanobot/issues/3265) |

**安全债务警示**：mohamed-elkholy95 的 8 个 PR 形成**系统性安全加固**，但大量"待合并"状态表明 review 瓶颈明显。

---

## 6. 功能请求与路线图信号

| 功能请求 | 提出者 | 相关 PR | 纳入可能性 | 链接 |
|:---|:---|:---|:---|:---|
| **语音交互全链路延迟指标**（STT→LLM→TTS） | gregoryschlepper | #3204 ProfilingHook（迭代级计时）部分相关 | ⭐⭐⭐ 高：性能优化是生产就绪关键，#3204 已铺路 | [#3257](https://github.com/HKUDS/nanobot/issues/3257) |
| **Plugin 系统**（Copilot CLI / Claude Code 式扩展） | andrader | 无 | ⭐⭐ 中：架构级变更，需 RFC 深入讨论 | [#2231](https://github.com/HKUDS/nanobot/issues/2231) |
| **Silent/quiet retry 模式**（减少用户侧错误噪音） | iwandepe | 无 | ⭐⭐⭐ 高：UX 痛点明确，实现成本低 | [#3246](https://github.com/HKUDS/nanobot/issues/3246) |
| **Per-chat group policy 覆盖**（Telegram 多群不同行为） | splanes | 无 | ⭐⭐⭐ 高：与 #2255 topic 支持互补，多租户刚需 | [#3309](https://github.com/HKUDS/nanobot/issues/3309) |
| **Provider fallback + 多 custom provider 配置** | aiguozhi123456 | 无 | ⭐⭐⭐ 高：韧性基础设施，与 #3107 绑定 | [#3107](https://github.com/HKUDS/nanobot/issues/3107) |
| **Cron edit 动作 + 完整消息展示** | flobo3 | #2217 待合并 | ⭐⭐⭐ 高：PR 已存在，review 即可 | [#2217](https://github.com/HKUDS/nanobot/pull/2217) |
| **Whisper STT language 参数** | flobo3 | #3116 待合并 | ⭐⭐⭐ 高：小功能，PR 就绪 | [#3116](https://github.com/HKUDS/nanobot/pull/3116) |

**路线图信号**：短期（1-2 周）聚焦 **Telegram 稳定性 + 安全合并 + 可观测性**；中期关注 **多租户配置体系**（provider fallback、per-chat policy、多 custom provider）。

---

## 7. 用户反馈摘要

### 真实痛点

> *"Nanobot 当前状态黑盒"* —— aiguozhi123456，要求 status 显示 task 数、重试终止提示、timeout 可配置（[#3107](https://github.com/HKUDS/nanobot/issues/3107)）

> *"End-to-end latency 35-60 秒，但 journal 只在进程边界记时间戳，无法定位瓶颈"* —— gregoryschlepper，语音场景生产部署受阻（[#3257](https://github.com/HKUDS/nanobot/issues/3257)）

> *"模型流式输出太多时，bot 尝试单条发送导致报错"* —— alexcmx，Telegram 消息长度硬限制触发（[#3315](https://github.com/HKUDS/nanobot/issues/3315)）

> *"DeepSeek 官方 API 怎么配都不行"* —— Frame-lix，国产模型文档/兼容性缺口（[#3300](https://github.com/HKUDS/nanobot/issues/3300)）

### 满意点

- 社区响应速度较快（#3300 DeepSeek 问题当日创建当日关闭）
- 安全加固积极（mohamed-elkholy95 系列 PR 获快速迭代）

### 不满意点

- **配置灵活性不足**：启动参数不支持 `-model`、timeout 不可配、provider 无法 fallback
- **错误处理噪音**：重试过程全量暴露给用户（[#3246](https://github.com/HKUDS/nanobot/issues/3246)）
- **多租户隔离缺失**：单 workspace 策略强制所有 Telegram 群行为一致（[#3309](https://github.com/HKUDS/nanobot/issues/3309)）

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 最后更新 | 风险 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| **架构提案** | ContextVar for task-local tool routing | 2026-03-18 | 2026-04-19 | ⚠️ 核心并发安全，长期无 maintainer 回应可能失活 | [#2220](https://github.com/HKUDS/nanobot/issues/2220) |
| **功能请求** | Plugin 系统（agent 可扩展性） | 2026-03-18 | 2026-04-19 | ⚠️ 高价值但架构重，需明确是否纳入路线图 | [#2231](https://github.com/HKUDS/nanobot/issues/2231) |
| **PR 待合并** | Tirith 预执行命令扫描（Rust 安全工具集成） | 2026-03-23 | 2026-04-19 | ⚠️ 创新安全方案，但引入外部依赖需评估 | [#2414](https://github.com/HKUDS/nanobot/pull/2414) |
| **PR 待合并** | Telegram topic 支持（chat_id 格式解析） | 2026-03-19 | 2026-04-19 | ⚠️ 社区刚需，与 #3309 per-chat policy 协同价值高 | [#2255](https://github.com/HKUDS/nanobot/pull/2255) |
| **PR 待合并** | Cron edit 动作 + 完整消息展示 | 2026-03-18 | 2026-04-19 | ⚠️ 功能完整，review 瓶颈 | [#2217](https://github.com/HKUDS/nanobot/pull/2217) |

**维护者行动建议**：
1. **优先 review 安全 PR 队列**（mohamed-elkholy95 的 8 个 PR 存在依赖关系，建议按 #3235 → #3240 → #3252 → #3255 顺序）
2. **回应 #2220 ContextVar 提案**：明确 async-safety 改进是否纳入 nightly
3. **#2414 Tirith 集成**：评估 Rust 工具链依赖对构建流程的影响

---

*日报生成时间：2026-04-20 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-20

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**：24小时内 **50 条 Issues**（42 活跃/新开，8 关闭）与 **50 条 PR**（31 待合并，19 已合并/关闭）双线并行，无新版本发布。项目处于**密集迭代期**，核心聚焦三大方向：**终端稳定性加固**（背景进程/子shell泄漏修复）、**安全与隐私**（凭证脱敏、Docker权限隔离），以及**多平台适配**（Google GenAI原生支持、Gemini Flex层级）。社区对生产环境可靠性诉求强烈，多个长期痛点（如Matrix E2EE、Claude订阅鉴权）今日获得闭环。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（19 条中的核心项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#12734](https://github.com/NousResearch/hermes-agent/pull/12734) | teknium1 | **安全修复**：上下文压缩管道脱敏凭证类值，防止 `env` 输出、`.env` 读取、`curl -v` 等泄露进入摘要并跨压缩轮次残留 | — |
| [#12733](https://github.com/NousResearch/hermes-agent/pull/12733) | kagura-agent | **Docker 修复**：entrypoint 以 root 运行，使 `HERMES_UID`/`HERMES_GID` 重映射生效 | #12696 |
| [#12732](https://github.com/NousResearch/hermes-agent/pull/12732) | teknium1 | **架构清理**：移除 `smart_model_routing` 特性（自动路由简单请求至廉价模型），简化路由逻辑；`/fast` 管道保留但不再走 `choose_cheap_model` | — |
| [#12729](https://github.com/NousResearch/hermes-agent/pull/12729) | jerome-benoit | **Skill 修复**：`google-workspace/setup.py` 在 `hermes_constants` 不可用时优雅降级 | #12722 |
| [#12728](https://github.com/NousResearch/hermes-agent/pull/12728) | teknium1 | **文档补全**：Discord 自由响应频道跳过自动线程化的行为正式文档化 | — |
| [#12725](https://github.com/NousResearch/hermes-agent/pull/12725) | teknium1 | **技能增强**：`pixel-art` 从 2 预设扩展至 **14 硬件精确调色板**，新增程序化视频叠加管道 | — |
| [#12724](https://github.com/NousResearch/hermes-agent/pull/12724) | teknium1 | **终端稳定性**：修复 bash `A && B &` 子shell泄漏（salvage #12207），防止长期进程产生孤儿 bash 进程 | #8340 后续 |
| [#12207](https://github.com/NousResearch/hermes-agent/pull/12207) | handsdiff | 同上（原始实现） | — |
| [#12032](https://github.com/NousResearch/hermes-agent/pull/12032) | mark-ramsell | **终端修复**：`LocalEnvironment` 中收割后台子进程，解决 `python3 -m http.server &` 等命令的残留进程问题 | — |
| [#12723](https://github.com/NousResearch/hermes-agent/pull/12723) | teknium1 | **终端防护**：前台模式拒绝长期服务器/监控命令及 shell 后台包装器（`nohup`/`disown`/`setsid`/`&`），引导使用 `background=true` | #10810 salvage |
| [#10810](https://github.com/NousResearch/hermes-agent/pull/10810) | etherman-os | 同上（原始实现） | — |

**整体推进评估**：今日合并的 PR 标志着 Hermes 在**终端可靠性**领域完成系统性加固——从"允许后台但防止挂起"（#8340）到"主动拒绝危险前台模式"（#12723），再到"子进程生命周期管理"（#12032/#12724），形成完整闭环。同时，**凭证安全**（#12734）和 **Docker 生产部署**（#12733）的修复直接回应企业级部署诉求。

---

## 4. 社区热点

### 讨论最活跃的 Issues/PRs

| 排名 | Issue/PR | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#4983](https://github.com/NousResearch/hermes-agent/issues/4983) Native Google GenAI Provider for Gemini Models | 12 | 2 | **原生 Gemini 支持**：绕过 OpenAI 兼容层的脆弱工具调用，直接对接 Google GenAI SDK，支持 `gemini-3.1-pro-preview` |
| 2 | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) Anthropic Claude subscription auth returns 'You're out of extra usage' | 12 | 14 | **订阅鉴权稳定性**：Claude 订阅用户在重启/重登后仍被误判额度耗尽，影响付费用户体验（高 👍 反映广泛性） |
| 3 | [#6174](https://github.com/NousResearch/hermes-agent/issues/6174) Matrix E2EE device verification fails | 5 | 2 | **加密通讯可靠性**：Matrix 端到端加密场景下设备验证（SAS）无响应，导致所有加密消息解密失败 |
| 4 | [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) Telegram stale adapter busy lock | 5 | 0 | **网关状态一致性**：Telegram 平台适配器与网关运行器状态分裂，用户消息被反复"中断"却无法 `/stop` |
| 5 | [#2761](https://github.com/NousResearch/hermes-agent/issues/2761) `hermes tools disable memory` 无效 | 4 | 0 | **CLI 配置可靠性**：工具禁用命令表面成功实际未生效，配置持久化机制存疑 |

**诉求分析**：社区核心矛盾从"功能有无"转向**"生产可用性"**——付费 API 的鉴权稳定性、加密通讯的可靠性、网关状态的一致性，均是企业/重度用户 blocker 级别问题。#4983 和 #6475 的高互动显示多模型支持策略与商业 API 集成质量是竞争焦点。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#12731](https://github.com/NousResearch/hermes-agent/issues/12731) | **会话压缩损坏 tool_call 参数**：JSON 被截断至 214 字符，导致后续请求全部失败 | ❌ 无 PR |
| 🔴 **高** | [#12395](https://github.com/NousResearch/hermes-agent/issues/12395) | **QQBot 消息推送失败后的 token 耗尽循环**：失败后反复调用大模型，造成费用失控 | ❌ 无 PR |
| 🔴 **高** | [#12638](https://github.com/NousResearch/hermes-agent/issues/12638) | **Vision 路由丢失命名自定义提供商**：`custom:morecode-openai` 被归一化为裸 `custom`，错路由至默认端点 | ❌ 无 PR |
| 🟡 **中** | [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) | Telegram 适配器 busy lock 分裂状态 | ❌ 无 PR |
| 🟡 **中** | [#9125](https://github.com/NousResearch/hermes-agent/issues/9125) | `kimi-coding` auxiliary 调用 400 错误：温度参数仅允许为 1 | ❌ 无 PR |
| 🟡 **中** | [#12641](https://github.com/NousResearch/hermes-agent/issues/12641) | CLI 状态栏空闲时重复换行而非原地更新 | ❌ 无 PR |
| 🟡 **中** | [#12689](https://github.com/NousResearch/hermes-agent/issues/12689) | `file_tools.py` 忽略 `TERMINAL_CWD`，`-w` 工作树隔离失效 | ✅ [#12721](https://github.com/NousResearch/hermes-agent/pull/12721) 待合并 |
| 🟡 **中** | [#12722](https://github.com/NousResearch/hermes-agent/issues/12722) | `google-workspace` skill `setup.py` 依赖 `hermes_constants` + 缺失 Google API 依赖 | ✅ [#12729](https://github.com/NousResearch/hermes-agent/pull/12729) 已合并 |
| 🟡 **中** | [#12727](https://github.com/NousResearch/hermes-agent/issues/12727) | Bedrock inference profile ID 被 `normalize_model_name()` 破坏（点号转连字符） | ❌ 无 PR |
| 🟡 **中** | [#12544](https://github.com/NousResearch/hermes-agent/issues/12544) | Webhook 无效签名消耗认证速率限制桶，可导致合法请求 429 | ❌ 无 PR |
| 🟢 **低** | [#12706](https://github.com/NousResearch/hermes-agent/issues/12706) | `httpx` `verify=<str>` DeprecationWarning | ❌ 无 PR |
| 🟢 **低** | [#12703](https://github.com/NousResearch/hermes-agent/issues/12703) | Ollama cloud providers 400 Bad Request（HTML 响应解析失败） | ❌ 无 PR |
| 🟢 **低** | [#12696](https://github.com/NousResearch/hermes-agent/issues/12696) | `HERMES_UID`/`HERMES_GID` 在 Docker 中未生效 | ✅ [#12733](https://github.com/NousResearch/hermes-agent/pull/12733) 已合并 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 纳入可能性评估 | 关键信号 |
|:---|:---|:---|:---|
| [#12730](https://github.com/NousResearch/hermes-agent/pull/12730) **已提交 PR** | `claude-mem` 内存提供商插件 | 🔥 **高** | 社区贡献，已附架构图，对接本地 worker |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | Gemini `service_tier: "flex"` 支持（50% 成本降低） | 🔥 **高** | 直接匹配 Hermes 的 `cron`/后台子代理场景，成本敏感用户强需求 |
| [#12213](https://github.com/NousResearch/hermes-agent/issues/12213) | `compress_context` 作为原生 Tool（非仅 slash 命令） | 🔥 **高** | 技能系统（SKILL.md）生态扩展的关键 enabler |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | 懒加载工具 Schema（两阶段注入） | 🔥 **高** | 本地模型用户强诉求（90k+ context 场景），token 开销从 3.5k-5k 降至按需 |
| [#12655](https://github.com/NousResearch/hermes-agent/pull/12655) **已提交 PR** | `picker_providers` 配置过滤 `/model` 提供商列表 | 🔥 **高** | 自定义端点用户痛点，配置即解决 |
| [#1501](https://github.com/NousResearch/hermes-agent/issues/1501) | Langfuse 追踪子代理与网关会话 | 🟡 **中** | 生产可观测性需求，但需评估追踪系统选型 |
| [#11425](https://github.com/NousResearch/hermes-agent/issues/11425) | Skills 生命周期管理（使用追踪、过期检测、自动清理） | 🟡 **中** | 89+ skills 用户的组织痛点，但涉及数据模型变更 |
| [#11115](https://github.com/NousResearch/hermes-agent/issues/11115) | 精简默认工具暴露 + 懒加载非核心发现 | 🟡 **中** | 与 #6839 方向一致，但需架构层面统一设计 |
| [#12340](https://github.com/NousResearch/hermes-agent/issues/12340) | 可配置自动 skill-save（硬编码审查提示破坏本地 LLM） | 🟡 **中** | 本地模型高频场景，但涉及默认行为变更 |
| [#12708](https://github.com/NousResearch/hermes-agent/pull/12708) **已提交 PR** | Discord `create_thread` REST 工具 | 🟡 **中** | 平台能力补全，独立可 review |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **"我花了钱但 Hermes 说我没额度"** | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | Claude 订阅鉴权状态与 Anthropic 服务端不同步，重启/重登均无效，用户被迫反复付费或切换模型 |
| **"QQBot 失败一次，token 烧了我一个月预算"** | [#12395](https://github.com/NousResearch/hermes-agent/issues/12395) | 平台适配器故障后的重试/降级策略缺失，形成费用失控的级联故障 |
| **"Matrix 加密完全不能用"** | [#6174](https://github.com/NousResearch/hermes-agent/issues/6174) | E2EE 是 Matrix 核心卖点，设备验证无响应 = 该适配器对隐私场景零价值 |
| **"50 个工具每次全发，本地模型直接爆炸"** | [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | 工具 Schema 全量注入的设计假设（云端大模型便宜 token）与本地模型经济性的根本冲突 |
| **"技能装了就忘，越积越乱"** | [#11425](https://github.com/NousResearch/hermes-agent/issues/11425) | 无使用统计、无过期提醒、无清理机制，技能系统从"能力扩展"变成"技术债" |

### 满意点

- **终端后台进程管理今日系统性改善**：#8340 → #12207/#12724 → #12723 的递进修复获得用户认可，长期悬置的"命令挂起"问题闭环
- **Google GenAI 原生支持终获合并**（#4983 关闭）：Gemini 用户不再需要"脆弱的 OpenAI 兼容层绕道"

---

## 8. 待处理积压

### 需维护者关注的高价值/长期 Issue

| Issue | 创建日期 | 最后更新 | 状态 | 提醒原因 |
|:---|:---|:---|:---|:---|
| [#2761](https://github.com/NousResearch/hermes-agent/issues/2761) `hermes tools disable memory` 无效 | 2026-03-24 | **今日** | 开放 | **28 天未解决**，CLI 配置可靠性基础功能，影响所有工具管理操作 |
| [#1501](https://github.com/NousResearch/hermes-agent/issues/1501) Langfuse 追踪 | 2026-03-16 | 今日 | 开放 | **35 天**，生产可观测性是 B 级用户采购决策关键，社区有明确 PR 意愿信号 |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) 懒加载工具 Schema | 2026-04-09 | 今日 | 开放 | 本地模型生态扩张的**架构瓶颈**，3.5k-5k token 开销有量化影响，需核心团队设计确认 |
| [#160](https://github.com/NousResearch/hermes-agent/issues/160) Telegram 语音消息重复附加 | 2026-02-27 | 今日 | **刚关闭** | 历时 **52 天** 关闭，但根因（会话状态管理）可能与其他平台问题同源，建议复盘 |
| [#4983](https://github.com/NousResearch/hermes-agent/issues/4983) Google GenAI Provider | 2026-04-04 | 昨日 | **刚关闭** | 历时 **16 天** 完成，但评论中提及的"工具调用脆弱性"是否完全解决需验证 |

---

*日报生成时间：2026-04-20 | 数据来源：NousResearch/hermes-agent GitHub 公开活动*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-20

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内产生 **12 条 Issues 更新**（10 活跃/新开，2 关闭）和 **9 条 PR 更新**（8 待合并，1 关闭），并推送了 **v0.2.6-nightly** 夜间构建。社区焦点集中在**认证安全**（OpenAI 兼容层 API Key 静默丢弃、DeepSeek 401 错误）、**架构现代化**（Provider 层重构、Agent 流水线拆分）以及**多平台稳定性**（Android 启动崩溃）。值得注意的是，stevef1uk 同日提交并关闭了一个 FreeRide 故障转移 PR 后迅速重新提交（#2591），显示功能迭代节奏紧凑。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.6-nightly.20260419.6126ede9

| 属性 | 详情 |
|:---|:---|
| 标签 | `nightly` |
| 构建时间 | 2026-04-19 |
| 提交哈希 | `6126ede9` |
| 完整变更日志 | [compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) |

**⚠️ 重要提示**：此为自动化构建，**可能不稳定**，建议仅用于测试环境。

**潜在风险**：当前 `main` 分支包含未发布的 Provider 认证相关代码变更，与 Issue #2578 报告的 `openai_compat` 层 API Key 丢失问题可能存在关联——建议夜间构建使用者验证认证配置是否正常工作。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#2588](https://github.com/sipeed/picoclaw/pull/2588) | stevef1uk | **CLOSED**（同日重提为 #2591） | FreeRide 智能模型故障转移系统初版 + Provider/Tool 架构现代化 |

**推进分析**：stevef1uk 关闭 #2588 后于同日重新提交 [#2591](https://github.com/sipeed/picoclaw/pull/2591)，推测为针对代码审查的快速迭代。该功能引入**动态模型池轮换**（主要基于 OpenRouter 免费模型），对降低运营成本、提升服务可用性具有战略意义。结合 #2313 的"Agent Shield"安全套件，项目正从单一模型调用向**弹性、安全的多租户 Agent 平台**演进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API 迁移 | **7 评论** | 技术债务清理：将 Chat Completions API 迁移至 OpenAI 官方推荐的 Responses API |
| 2 | [#2583](https://github.com/sipeed/picoclaw/issues/2583) Ollama + qwen3.5/gemma4 兼容性 | 2 评论 | **已关闭**——本地模型生态兼容性 |
| 3 | [#2578](https://github.com/sipeed/picoclaw/issues/2578) `openai_compat` 认证头丢失 | 2 评论 | **安全/可用性阻断**：v0.2.6 所有配置源的 API Key 被静默丢弃 |

**诉求深度分析**：
- **#2171** 反映社区对 OpenAI 生态**前瞻性适配**的期待，作者 kunalk16 已完成端点兼容性检查（To-Do 已勾），但 20 天未获维护者明确回应，存在贡献者流失风险
- **#2578** 与 **#2584**（DeepSeek 401）形成**认证层系统性问题**的共振信号，可能影响 v0.2.6 的生产可用性评级

### 🔥 同日高频提交者

**stevef1uk**：单日 2 PR（#2588/#2591），聚焦**企业级功能**（多用户、安全加固、成本优化），显示该项目正吸引 B 端场景贡献者。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 状态 | 是否有 Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 P0 | [#2578](https://github.com/sipeed/picoclaw/issues/2578) `openai_compat` 认证头完全丢失 | **阻断性** | 开放 | ❌ **无** | 所有 HTTP-based 模型（OpenAI 兼容层全灭） |
| 🔴 P0 | [#2590](https://github.com/sipeed/picoclaw/issues/2590) Android 应用服务启动崩溃 | **阻断性** | 开放（当日新报） | ❌ **无** | Android 终端用户 |
| 🟡 P1 | [#2584](https://github.com/sipeed/picoclaw/issues/2584) DeepSeek 401 "Authentication Fails (governor)" | **高** | 开放 | ❌ **无** | DeepSeek 用户 |
| 🟡 P1 | [#2237](https://github.com/sipeed/picoclaw/issues/2237) 飞书问答接入 newapi 异常 | **高** | 开放 | ❌ **无** | 企业 IM 集成场景 |
| 🟡 P1 | [#2310](https://github.com/sipeed/picoclaw/issues/2310) WebUI 历史会话记录严重截断 | **高** | 开放 | ❌ **无** | WebUI 用户体验 |
| 🟢 P2 | [#2583](https://github.com/sipeed/picoclaw/issues/2583) Ollama + qwen3.5/gemma4 空响应 | **中** | ✅ **已关闭** | 未明确 | 本地模型用户 |

**关键洞察**：
- **#2578** 的"静默丢弃"特性极具破坏性——用户配置看似正常但实际无认证，调试成本极高。该 Issue 已获 2 条技术确认评论，需维护者**立即响应**
- **#2590** Android 崩溃涉及原生库加载路径问题（`libpicoclaw.so` 执行权限），可能需 NDK 构建流程调整
- **认证层双 Bug**（#2578 + #2584）暗示 v0.2.6 的凭证管道存在架构级缺陷，建议启动专项审计

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2591](https://github.com/sipeed/picoclaw/pull/2591) FreeRide 模型故障转移 | 成本优化/高可用 | ⭐⭐⭐⭐⭐ **极高** | 已快速迭代重提，作者 stevef1uk 持续投入 |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) 多用户支持 + Agent Shield | 企业安全/多租户 | ⭐⭐⭐⭐⭐ **极高** | 4 月 3 日开放至今，跨 5 个 domain 标签，架构影响深远 |
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) Web 聊天流式传输 + 滚动 UX | 交互体验 | ⭐⭐⭐⭐☆ **高** | 当日新提，端到端实现完整，符合前端现代化趋势 |
| [#2585](https://github.com/sipeed/picoclaw/pull/2585) Agent Looper 重构 Phase 2 | 架构健康 | ⭐⭐⭐⭐☆ **高** | 1500 行单体拆分，sky5454 持续重构投入 |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API | 技术债务 | ⭐⭐⭐☆☆ **中** | 有明确实现路径，但需维护者确认方向 |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) Token 消耗统计仪表板 | 可观测性 | ⭐⭐⭐☆☆ **中** | WebUI 配套需求，依赖前端资源 |
| [#2216](https://github.com/sipeed/picoclaw/issues/2216) 模型思考内容展示 | 交互体验 | ⭐⭐⭐☆☆ **中** | 与 #2587 流式传输可能存在实现协同 |
| [#2261](https://github.com/sipeed/picoclaw/issues/2261) Zalo Chat 频道支持 | 地域扩展 | ⭐⭐☆☆☆ **低** | 参考实现存在，但维护者未回应 |
| [#2321](https://github.com/sipeed/picoclaw/issues/2321) Provider 级模型配置重构 | 配置体验 | ⭐⭐⭐⭐☆ **高** | 用户痛点明确，与 #2585 架构重构方向一致 |

**路线图信号**：项目正从"功能堆叠"转向**平台化建设**——安全加固（#2313）、成本优化（#2591）、架构解耦（#2585）三线并进，预示 **v0.3.x** 可能定位为企业就绪版本。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型表述 |
|:---|:---|:---|
| **认证配置"黑箱化"** | #2578 | "API key 被静默丢弃，需拦截原始 HTTP 请求才能发现" |
| **历史记录不可靠** | #2310 | "关闭页面后只剩最近一两条，容器内 session 文件同样截断" |
| **跨平台稳定性差** | #2590 | "Android 点击启动直接崩溃，原生库路径错误" |
| **本地模型兼容滞后** | #2583 | "qwen3.5/gemma4 返回空响应，litellm 却正常输出" |

### 😊 积极信号

- **企业场景吸引力**：stevef1uk 连续贡献安全与成本优化功能，表明项目已进入**B 端采用者视野**
- **社区自组织**：kunalk16、sky5454 等贡献者主动推进重构（#2586 函数去重、#2585 Agent 拆分），代码质量意识提升

### 🎯 使用场景演变

从早期"个人 AI 助手"向**"团队级 Agent 平台"**迁移——多用户、Token 审计、模型故障转移等需求均指向组织级部署。

---

## 8. 待处理积压

### ⚠️ 需维护者紧急关注

| Issue/PR | 创建时间 | 最后更新 | 风险描述 |
|:---|:---|:---|:---|
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API | 2026-03-30 | 2026-04-19 | **21 天无维护者回应**，贡献者已完成前期调研，可能流失 |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) 多用户 + Agent Shield | 2026-04-03 | 2026-04-19 | **17 天开放**，跨 5 domain 的重大架构变更，需设计评审 |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) Token 统计仪表板 | 2026-03-31 | 2026-04-19 | **20 天无回应**，WebUI 体验短板 |
| [#2216](https://github.com/sipeed/picoclaw/issues/2216) 思考内容展示 | 2026-03-31 | 2026-04-19 | **20 天无回应**，与 #2587 PR 存在协同可能 |
| [#2261](https://github.com/sipeed/picoclaw/issues/2261) Zalo 频道 | 2026-04-02 | 2026-04-19 | **18 天无回应**，东南亚市场扩展机会 |
| [#2321](https://github.com/sipeed/picoclaw/issues/2321) Provider 级配置 | 2026-04-04 | 2026-04-19 | **16 天无回应**，与活跃重构方向高度契合 |

### 📊 健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issue 平均响应时间 | >15 天（估算） | ⚠️ **偏慢**，存在贡献者流失风险 |
| PR 合并速率 | 1/9（今日） | ⚠️ **瓶颈**，#2313 等重大项目变更积压 |
| 社区自驱动比例 | 高（重构、功能自发推进） | ✅ **积极信号** |
| 阻断性 Bug 未修复数 | 2（#2578, #2590） | 🔴 **紧急** |

---

**日报生成时间**：2026-04-20  
**数据截止**：2026-04-19 24:00 UTC  
**项目地址**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-20

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> **分析日期**: 2026-04-20（覆盖 2026-04-19 活动）  
> **项目定位**: AI 智能体与个人 AI 助手开源框架

---

## 1. 今日速览

NanoClaw 昨日保持**高活跃度**，24 小时内产生 **15 个 PR**（11 待合并、4 已关闭）和 **3 个 Issue**（1 新开、2 关闭）。社区聚焦三大主线：**无头部署模式落地**（nu-gui 分支完成部署验证）、**容器环境变量注入能力**（新 Issue #1867 提出）、以及 **v1→v2 架构迁移**（PR #1869 系统推进）。值得注意的是，Web 通道功能出现"快速迭代-关闭-重开"模式（PR #1862 关闭后 #1863 以更精简架构重新提交），显示贡献者在积极回应代码审查反馈。无新版本发布。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#1862 → #1863** | VivianBalakrishnan | **Web 通道从 PWA 降级为纯浏览器门户**：PR #1862（SSE + PWA）关闭后，#1863 以"零依赖"架构重新提交，移除 SSE 和 Service Worker，改为简单轮询。反映维护者对复杂度的严格把控，功能方向保留但实现大幅简化 | [PR #1862](https://github.com/qwibitai/nanoclaw/pull/1862) · [PR #1863](https://github.com/qwibitai/nanoclaw/pull/1863) |
| **#1861 / #1860** | pentop | **Telegram 打字指示器心跳修复**：重复 PR（内容相同），关闭 #1860 保留 #1861。解决 >5s 长任务时用户感知"卡死"问题，4s 心跳机制提升 UX。关联 Issue #1805 | [PR #1861](https://github.com/qwibitai/nanoclaw/pull/1861) |
| **#1856** | topcoder1 | **Gmail 归档命令修复**：`archive all` 聊天命令从"本地预解决"改为"先 Gmail 后本地"，消除 split-brain 状态。涉及 `executeAssistantCommand` 异步重构和 `gmailOps` 依赖注入 | [PR #1856](https://github.com/qwibitai/nanoclaw/pull/1856) |

### 📌 架构演进里程碑：v1→v2 迁移启动

**PR #1869**（gavrielc）系统实施 v1→v2 五个既定动作项：
- 删除死配置常量（`POLL_INTERVAL` 等，-6 LOC）
- 时区与格式化重建（v1 解析逻辑迁移）
- 其余三项待展开

这是**官方路线图首次进入代码实施阶段**，标志项目从"规划共识"转向"执行落地"。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 1 | **PR #1869** v1→v2 迁移 | 路线图级 PR，作者为核心维护者 gavrielc | 社区长期等待的架构债务清理，"五个动作项"模式降低审查风险，每 commit 独立可回滚 |
| 🔥 2 | **PR #1868** 主机环境变量转发白名单 | 安全敏感设计，解决"凭证注入"痛点 | 与 #1867（ContainerConfig `env` 字段）形成**互补方案**：PR #1868 走"主机 secrets 代理"路径，Issue #1867 走"集成方显式声明"路径，两条路线待维护者裁决 |
| 🔥 3 | **PR #1843** Codex 提供商 | 4 月 18 日创建，昨日更新，技术深度最高 | **"非 Claude 规划器"的 agent 循环**——社区对模型供应商锁定的焦虑显性化，Codex via app-server 提供 OpenAI 生态完整替代方案 |

**深层信号**：环境变量/凭证注入议题同日出现 **3 个独立提交**（PR #1868、Issue #1867、PR #1859 的 Ollama 集成也涉及 `blockedHosts` 网络隔离），表明**多模型部署场景下的配置管理已成瓶颈**。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🟡 **中** | Telegram 长任务"假死"（打字指示器 5s 超时） | **已修复** | #1861 | [Issue #1805](https://github.com/qwibitai/nanoclaw/issues/1805) · [PR #1861](https://github.com/qwibitai/nanoclaw/pull/1861) |
| 🟡 **中** | `archive all` 命令本地-远程状态不一致（split-brain） | **已修复** | #1856 | [PR #1856](https://github.com/qwibitai/nanoclaw/pull/1856) |
| 🔵 **低** | opencode SDK 静默升级破坏（1.4.17 → 1.14.x 的 UUID → `ses_` 前缀变更） | **文档规避** | #1864（pin 版本） | [PR #1864](https://github.com/qwibitai/nanoclaw/pull/1864) |

> **风险评估**：无崩溃级或数据丢失级 Bug。PR #1864 揭示的**上游 SDK 破坏性变更**（语义版本号跳跃 1.4→1.14）值得建立依赖锁定机制，当前仅文档级 pin 可能不足。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **ContainerConfig 自定义环境变量** | Issue #1867（dimatosj） | ⭐⭐⭐⭐⭐ **高** | 与 PR #1868 形成"问题-方案"对，且 #1868 作者 fmguerreiro 近日密集贡献（3 PR），维护者信任度高 |
| **用户可见的终止流（stop/cancel/abort）** | PR #1858（fmguerreiro） | ⭐⭐⭐⭐⭐ **高** | 明确标注为"primary use case"，多小时任务无终止是核心痛点，设计完整（`isStopIntent()` + 全渠道检测） |
| **Ollama 本地模型支持** | PR #1859（wilderfield） | ⭐⭐⭐⭐☆ **中高** | 技能级贡献（`/add-ollama-provider`），非核心代码变更，审查门槛低；契合多模型趋势 |
| **Web 浏览器通道** | PR #1863（VivianBalakrishnan） | ⭐⭐⭐⭐☆ **中高** | 已关闭 #1862 后快速迭代，显示作者响应力；"零依赖"卖点降低合并阻力 |
| **安全策略引擎** | PR #1605（ebenezer-isaac） | ⭐⭐⭐☆☆ **中** | 4 月 2 日创建，昨日更新， superseded #1360 后 rebased，"确定性代码而非 prompt-based"设计获 gavrielc 反馈，但 18 天未合并暗示审查严格 |
| **OpenAI 模型支持 + Token 追踪** | PR #1774（markstrefford） | ⭐⭐⭐☆☆ **中** | 4 月 14 日创建，技术范围大（替代 runner + AGENT.md + stats API），6 天未合并可能因测试覆盖要求 |

---

## 7. 用户反馈摘要

> 基于 Issue/PR 描述中的场景推断

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **"部署 NanoClaw 到新主机需要手撸 SQL 插入 ScheduledTask"** | PR #1857 | 运维自动化缺失，CLI 种子命令需求迫切 |
| **"第三方凭证（Notion/GitHub）无安全注入路径"** | PR #1868 | 企业/自托管场景下，Anthropic API 代理模型不足覆盖全生态 |
| **"多小时任务只能 SSH 进主机杀进程"** | PR #1858 | 长运行 agent 的核心 UX 缺口 |
| **"fork 同步上游后 headless 模式才能部署"** | Issue #1865-1866 | 分支管理工具链成熟度影响生产部署节奏 |

**满意度信号**：nu-gui 完成 headless 模式在 `burg-optiplex` 的部署（Issue #1866 关闭），验证"与 OpenClaw 并列运行的三系统 agent 平台"架构可行。

---

## 8. 待处理积压

| 条目 | 创建日期 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| **PR #1605** 安全策略引擎 | 2026-04-02 | 2026-04-19 | ⚠️ **高** — 18 天待合并，rebased 一次，涉及核心安全架构 | gavrielc 需明确反馈：是设计待调整还是测试待补充？避免贡献者疲劳 |
| **PR #1774** OpenAI 支持 | 2026-04-14 | 2026-04-19 | ⚠️ **中** — 6 天，范围过大可能需拆分 | 建议拆分为 "OpenAI runner" + "token tracking" + "stats API" 三个独立 PR |
| **PR #1843** Codex 提供商 | 2026-04-18 | 2026-04-19 | ⚠️ **中** — 技术复杂度高（JSON-RPC 全功能代理） | 需核心维护者评估与现有 Anthropic SDK 抽象层的兼容性 |

---

## 附录：快速链接

| 分类 | 链接 |
|:---|:---|
| 今日全部 PR | [#1869](https://github.com/qwibitai/nanoclaw/pull/1869) · [#1868](https://github.com/qwibitai/nanoclaw/pull/1868) · [#1864](https://github.com/qwibitai/nanoclaw/pull/1864) · [#1863](https://github.com/qwibitai/nanoclaw/pull/1863) · [#1862](https://github.com/qwibitai/nanoclaw/pull/1862) · [#1861](https://github.com/qwibitai/nanoclaw/pull/1861) · [#1860](https://github.com/qwibitai/nanoclaw/pull/1860) · [#1859](https://github.com/qwibitai/nanoclaw/pull/1859) · [#1858](https://github.com/qwibitai/nanoclaw/pull/1858) · [#1857](https://github.com/qwibitai/nanoclaw/pull/1857) · [#1856](https://github.com/qwibitai/nanoclaw/pull/1856) · [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) · [#1843](https://github.com/qwibitai/nanoclaw/pull/1843) · [#1774](https://github.com/qwibitai/nanoclaw/pull/1774) · [#1605](https://github.com/qwibitai/nanoclaw/pull/1605) |
| 今日全部 Issues | [#1867](https://github.com/qwibitai/nanoclaw/issues/1867) · [#1866](https://github.com/qwibitai/nanoclaw/issues/1866) · [#1865](https://github.com/qwibitai/nanoclaw/issues/1865) |

---

*本日报基于 GitHub 公开数据自动生成，未包含私有仓库或线下讨论信息。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-20

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-04-20（数据截止：过去24小时）  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

今日 NullClaw 项目呈现**高强度开发活跃状态**：核心贡献者 `manelsen` 单日提交 **11 个 PR**，形成完整的"入站路由基础设施 → 各 shell 接入 → 并发优化 → 关联 Bug 修复"技术闭环，显示项目正从单线程串行架构向**并发/非阻塞交互架构**演进。Issues 侧 7 条更新中 6 条仍开放，社区持续报告 gateway CPU 空转、子代理结果回传、Tailscale 集成等生产环境问题。PR 待合并积压达 12 条，**零合并率**提示代码审查或 CI 可能成为瓶颈，需关注合并吞吐量是否匹配开发速度。

---

## 2. 版本发布

**无新版本发布**

最新 Release 暂无更新。当前版本号显示问题（[#821](https://github.com/nullclaw/nullclaw/issues/821) 报告的 `"dev"` 字符串问题）虽已关闭，但可能仍影响从源码安装用户的版本识别。

---

## 3. 项目进展

**今日合并/关闭 PR：0 条 | 待合并：12 条**

尽管无合并，但 `manelsen` 的 11 个 PR 构成了**系统性架构升级**，整体推进可分为四层：

| 层级 | PR | 核心进展 |
|:---|:---|:---|
| **基础设施** | [#845](https://github.com/nullclaw/nullclaw/pull/845) | 入站路由器与中途注入基础设施（`inbound_router.zig`），纯函数式路由核心，无 I/O 依赖 |
| **Shell 接入** | [#846](https://github.com/nullclaw/nullclaw/pull/846) [#847](https://github.com/nullclaw/nullclaw/pull/847) [#848](https://github.com/nullclaw/nullclaw/pull/848) | Telegram/Max 频道循环、Gateway HTTP 层、Daemon 总线消息分别接入路由 |
| **并发优化** | [#855](https://github.com/nullclaw/nullclaw/pull/855) | 会话级抢占：新消息到达时中断运行中的 turn，启用入站并发 |
| **关联修复** | [#853](https://github.com/nullclaw/nullclaw/pull/853) [#854](https://github.com/nullclaw/nullclaw/pull/854) [#852](https://github.com/nullclaw/nullclaw/pull/852) [#843](https://github.com/nullclaw/nullclaw/pull/843) | Gateway CPU 空转、子代理结果回传、Memory 归档质量、Onboard 崩溃修复 |

**里程碑意义**：[#845](https://github.com/nullclaw/nullclaw/pull/845) 是 #832（并发/非阻塞交互）的第一部分，标志着 NullClaw 从"单 turn 阻塞"向"多 turn 抢占式并发"的范式转变，对 AI 助手实时响应能力有关键影响。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动量 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 **#1** | [#826](https://github.com/nullclaw/nullclaw/issues/826) Tailscale Gateway 使用文档 | 9 评论 | **企业/自托管用户核心诉求**：用户 `eabase` 在 Debian VPS 上通过 Tailscale 部署时遭遇 `NotImplemented` 错误，反映 VPN/overlay 网络场景下的 gateway tunnel 支持缺口。该 Issue 直接催生了 [#850](https://github.com/nullclaw/nullclaw/pull/850)（加密 Tailscale auth_key 支持），显示"问题驱动开发"的高效响应 |
| 🔥 **#2** | [#821](https://github.com/nullclaw/nullclaw/issues/821) 版本号显示为 "dev" | 4 评论 | **开发者体验痛点**：源码安装无法识别版本，影响问题报告和调试。已关闭但无关联 PR，可能为直接 commit 修复 |
| 🔥 **#3** | [#354](https://github.com/nullclaw/nullclaw/issues/354) Homebrew 升级后服务失效 | 3 评论 | **macOS 用户长期痛点**：LaunchAgent plist 硬编码版本化 Cellar 路径，Homebrew 升级后路径失效。3 月创建至今未解决，影响包管理用户的升级体验 |

**深层诉求**：社区正在从"能运行"向"生产级部署"演进——Tailscale 集成、Homebrew 服务持久化、版本可观测性均为运维层面的刚需。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#851](https://github.com/nullclaw/nullclaw/issues/851) | 新报 | **Gateway CPU 100% 空转**：Raspberry Pi 5 上 `accept4()` 返回 `EAGAIN` 时无退避，busy-loop 耗尽单核。边缘设备部署的致命问题 | ✅ [#853](https://github.com/nullclaw/nullclaw/pull/853) 已提交，待合并 |
| 🔴 **高** | [#849](https://github.com/nullclaw/nullclaw/issues/849) | 新报 | **子代理结果丢失**：`spawn` 工具能创建子代理并执行任务（如创建文件），但结果无法回传至父代理，阻断多代理协作工作流 | ✅ [#854](https://github.com/nullclaw/nullclaw/pull/854) 已提交，待合并 |
| 🟡 **中** | [#408](https://github.com/nullclaw/nullclaw/issues/408) | 活跃 | **Tool call JSON 解析错误**：LLM 生成正确 JSON 时，`:` 被误解析为工具名。影响与 LM Studio 等本地模型的兼容性 | ⏳ 无 Fix PR |
| 🟡 **中** | [#665](https://github.com/nullclaw/nullclaw/issues/665) | 活跃 | **`error.NoResponseContent`**：Windows 预编译二进制运行 `agent info(memory)` 时触发，可能与内存后端初始化或模型响应空内容有关 | ⏳ 无 Fix PR |
| 🟢 **低** | [#354](https://github.com/nullclaw/nullclaw/issues/354) | 长期 | Homebrew 升级后 LaunchAgent 路径失效（见上） | ⏳ 无 Fix PR |

**稳定性评估**：今日 2 个高严重度 Bug 均有对应 Fix PR，响应速度优秀；但 [#408](https://github.com/nullclaw/nullclaw/issues/408) 解析层错误和 [#665](https://github.com/nullclaw/nullclaw/issues/665) 运行时错误缺乏修复进展，可能反映调试复现难度。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) + [#850](https://github.com/nullclaw/nullclaw/pull/850) | **Tailscale 原生集成**（加密 auth_key、自动 `tailscale up`） | ⭐⭐⭐⭐⭐ 极高 | PR 已提交，直接响应社区 Issue，预计下一版本包含 |
| [#845](https://github.com/nullclaw/nullclaw/pull/845)~[#848](https://github.com/nullclaw/nullclaw/pull/848) + [#855](https://github.com/nullclaw/nullclaw/pull/855) | **并发交互架构**（入站路由、会话抢占、非阻塞注入） | ⭐⭐⭐⭐⭐ 极高 | 11 个 PR 的系统工程，核心路线图 #832 的第一阶段 |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | **REST Admin API**（运行时状态、配置读取、模型列表、Cron 管理） | ⭐⭐⭐⭐☆ 高 | 4 月 5 日提交，持续更新，零依赖设计（<30KB），适合轻量客户端生态 |
| [#844](https://github.com/nullclaw/nullclaw/pull/844) | **A2A 协议进度流**（工具调用进度提示转发） | ⭐⭐⭐⭐☆ 高 | 跟随现有 `stream_callback` 模式，符合 Agent2Agent 协议趋势 |
| [#852](https://github.com/nullclaw/nullclaw/pull/852) | **Memory 归档质量提升**（会话作用域保持、向量检索分区对齐） | ⭐⭐⭐⭐☆ 高 | 无关联 Issue，主动优化，改善 RAG 质量 |

**路线图信号**：项目正沿三条主线推进——**网络层扩展**（Tailscale）、**架构升级**（并发路由）、**生态集成**（A2A/Admin API）。Zig 单二进制、零依赖的设计哲学保持一贯。

---

## 7. 用户反馈摘要

### 😫 痛点
- **部署运维复杂**：Tailscale 集成无文档、Homebrew 升级即失效、Docker 环境下 onboard 因目录权限崩溃（[#843](https://github.com/nullclaw/nullclaw/pull/843) 修复）
- **边缘设备性能**：Raspberry Pi 5 上 CPU 空转，显示资源受限场景的测试覆盖不足
- **版本可观测性**：源码安装无法确认版本，增加问题报告摩擦
- **多代理协作断裂**：子代理结果回传失败，"能执行但无法沟通"

### 😊 满意/期待
- **响应速度**：核心开发者对生产问题（CPU 空转、子代理）24 小时内提交修复
- **架构前瞻性**：并发路由设计被社区期待解决"消息排队时无响应"的交互瓶颈
- **安全设计**：Tailscale auth_key 走 secrets 管道加密，符合自托管用户的安全预期

### 🎯 典型使用场景
> "Debian VPS + Tailscale 内网穿透" — 自托管、安全优先的技术用户  
> "Raspberry Pi 5 作为边缘网关" — 低功耗硬件爱好者/IoT 场景  
> "Homebrew macOS 开发环境" — 开发者日常工具链

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) Homebrew 服务失效 | 2026-03-07 | 2026-04-19 | **43 天** | macOS 主流安装渠道，影响用户留存；有明确根因分析（硬编码 Cellar 路径），修复方案清晰但未实施 |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) Tool call JSON 解析错误 | 2026-03-10 | 2026-04-19 | **40 天** | 与 LM Studio 兼容性相关，本地模型生态增长中；有日志证据但无修复 PR |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) NoResponseContent 错误 | 2026-03-21 | 2026-04-19 | **29 天** | Windows 预编译二进制用户，可能涉及跨平台差异；错误信息模糊，需更多复现信息 |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) REST Admin API | 2026-04-05 | 2026-04-19 | **15 天** | 功能完整度高但待合并，可能因 #845~#855 的架构变动需要 rebase |

**维护者行动建议**：
1. **优先合并 #853/#854**：修复今日高严重度 Bug，阻断生产环境损害
2. **分配 #354 修复**：Homebrew 路径模板化（`$(brew --prefix)`）或动态解析，低 effort 高 impact
3. **请求 #408/#665 复现信息**：添加 `needs-repro` 标签，7 日内无响应可考虑关闭或降级

---

> **健康度评分**: ⭐⭐⭐⭐☆ (4/5)  
> **优势**: 核心开发活跃、架构演进清晰、Bug 响应极速  
> **风险**: PR 合并吞吐量瓶颈、长期 Issue 积压、边缘场景测试覆盖不足

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-20

> **项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw) | **日期**: 2026-04-20 | **数据周期**: 过去24小时（2026-04-19）

---

## 1. 今日速览

IronClaw 今日呈现**高强度迭代态势**：50个PR更新（32个待合并）、11个Issue更新（6个活跃/新开），核心团队（ilblackdragon、serrrfirat）主导引擎v2收尾与网关设计系统重构。Engine v2进入"清理战场"阶段，[PR #2669](https://github.com/nearai/ironclaw/issues/2669)专门追踪合并后遗留的review follow-ups；同时网关侧启动视觉语言体系重建，[PR #2695](https://github.com/nearai/ironclaw/pull/2695)和[PR #2689](https://github.com/nearai/ironclaw/pull/2689)形成设计系统双轨推进。安全层面暴露一个**高危WASM URL泄漏扫描漏洞**（[Issue #2676](https://github.com/nearai/ironclaw/issues/2676)），需紧急关注。CI自动化流水线今日产生4条staging promotion PR，显示发布节奏紧凑。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2549](https://github.com/nearai/ironclaw/pull/2549) | serrrfirat | 新增 `mission_get` action，支持LLM检索任务结果、状态、方法历史和线程输出；兼容v1的 `routine_history` 别名 | **Engine v2 核心能力补全**：解决"研究结果是什么"类查询的agent自检索能力，消除v1→v2迁移的功能断层 |
| [#2694](https://github.com/nearai/ironclaw/pull/2694) | serrrfirat | 文档澄清：Engine v2为opt-in，需 `ENGINE_V2=true` 启动；补充README、.env.example、架构文档 | **降低采纳门槛**：明确opt-in机制，减少用户误配置和预期落差 |
| [#1019](https://github.com/nearai/ironclaw/pull/1019) | joe-rlo | 新增 `CognitiveGuardian` 模块（706行），主动式记忆纪律层：在上下文压力强制压缩前，提示agent检查点工作和搜索记忆 | **Agent智能度跃升**：从被动响应转向 proactive self-management，长期看可能降低token浪费和任务丢失率 |
| [#936](https://github.com/nearai/ironclaw/pull/936) | G7CNF | 本地 `open_file` 工作流：持久化/可撤销审批、本地文本预览、与现有 `open` 工具解耦 | **本地体验闭环**：解决"打开文件→总结内容"的 fragile re-routing 问题，安全模型（可撤销审批）成熟 |
| [#2576](https://github.com/nearai/ironclaw/pull/2576) | serrrfirat | 修复Claude Code Review评论目标：从已合并源PR转向正确的staging promotion PR | **CI可靠性**：避免review noise污染历史PR，维护代码审查可追溯性 |
| [#1540](https://github.com/nearai/ironclaw/pull/1540) | G7CNF | Slack线程回复记忆：bot加入线程后，后续回复无需重新@提及 | **Slack UX质变**：解决[#1404](https://github.com/nearai/ironclaw/issues/1404)长期痛点，企业场景适用性大幅提升 |

**整体评估**：Engine v2功能骨架基本完成（`mission_get`补全最后一块拼图），正从"功能开发"转向"稳定化+体验打磨"；网关侧启动设计系统重构，预示前端将进入视觉统一期。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#2360](https://github.com/nearai/ironclaw/issues/2360) 内置浏览器工具（chromiumoxide CDP + AX-tree） | 2评论 | **战略性基础设施**：解决JS渲染页面交互盲区，依赖#2357-2359形成完整浏览器服务栈。ilblackdragon亲自提出，已规划父子依赖关系，预计近期进入实现 |
| 🥈 | [#2599](https://github.com/nearai/ironclaw/issues/2599) 网关功能边界与crate护栏 | 2评论，1👍 | **架构治理信号**：henrypark133提出的epic级重构，回应网关代码膨胀问题。分阶段执行（先所有权边界→再CI护栏→最后E2E），反映团队对技术债务的主动管理 |
| 🥉 | [#1350](https://github.com/nearai/ironclaw/issues/1350) LLM provider热重载 | 2评论，2👍 | **UX打磨完成**：今日关闭，说明核心配置动态化能力已落地，用户无需重启即可切换模型 |

**社区诉求洞察**：开发者对"agent能操作真实Web界面"（#2360）和"项目结构可维护"（#2599）有强烈期待，前者关乎能力边界扩展，后者关乎长期贡献者体验。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高危** | [#2676](https://github.com/nearai/ironclaw/issues/2676) | WASM URL泄漏扫描在post-injection URL上执行，channel和tool路径均遗漏原始URL扫描 | **OPEN，无fix PR** | ❌ 无 |
| 🟡 中危 | [#2697](https://github.com/nearai/ironclaw/issues/2697) | Agent报告当前时间错误（~11分钟滞后），导致`delay_minutes`定时任务误触发 | **OPEN，今日新报** | ❌ 无 |
| 🟡 中危 | [#2624](https://github.com/nearai/ironclaw/issues/2624) | Telegram E2E激活失败，bot token验证401 | **CLOSED** | ✅ 已通过其他修复 |
| 🟢 低危 | [#1947](https://github.com/nearai/ironclaw/issues/1947) | CLI MCP test-server工具描述截断在多字节UTF-8处panic | **CLOSED** | ✅ 已修复 |
| 🟢 低危 | [#1840](https://github.com/nearai/ironclaw/issues/1840) | `--cli-only`仍启动webhook服务器且忽略HTTP_HOST/PORT配置 | **CLOSED** | ✅ 已修复 |

**安全警报**：[#2676](https://github.com/nearai/ironclaw/issues/2676) 是今日唯一高危项，属于#1377/#791的回归——头部泄漏扫描已修复，但URL扫描顺序错误。ilblackdragon标注为`risk: high`，涉及WASM沙箱边界完整性，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 与现有PR关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **内置浏览器工具**（CDP驱动、AX-tree元素引用） | [Issue #2360](https://github.com/nearai/ironclaw/issues/2360) | 依赖PR #2357-2359（浏览器服务、profile store、identity model） | ⭐⭐⭐⭐⭐ **极高**：基础设施已规划，ilblackdragon主导，预计Q2实现 |
| **CLI/TUI secrets管理工具** | [Issue #2600](https://github.com/nearai/ironclaw/issues/2600) | 无直接关联PR | ⭐⭐⭐⭐ **高**：ek775反映新用户入门痛点，文档缺失+认证模式漂移，属于开发者体验关键路径 |
| **Engine v2完整沙箱**（Phase 8+） | [Issue #2667](https://github.com/nearai/ironclaw/issues/2667) | 基于已合并#2211（Phases 1-7） | ⭐⭐⭐⭐⭐ **极高**：跟踪issue已创建，Docker per-project沙箱已运行，剩余工作为扩展覆盖 |
| **网关设计系统视觉语言** | [PR #2695](https://github.com/nearai/ironclaw/pull/2695) + [PR #2689](https://github.com/nearai/ironclaw/pull/2689) | 依赖#2683（gateway静态资源拆分） | ⭐⭐⭐⭐⭐ **极高**：已进active开发，Defuse OmniSwap调色板锚定，语义化type classes、可折叠推理卡片等交互组件已设计 |

**路线图信号**：Engine v2从"功能建设"转入"稳定化+沙箱硬化"，网关进入"视觉重构期"，工具层向"浏览器自动化"扩展——三线并行，项目处于**能力跃升前夜**。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [Issue #2600](https://github.com/nearai/ironclaw/issues/2600) | **Secrets管理不透明**：认证模式随时间漂移，文档缺失，新用户难以入门 | "getting started with ironclaw"时的服务认证配置 |
| [Issue #2697](https://github.com/nearai/ironclaw/issues/2697) | **时间敏感功能不可靠**：提醒/闹钟类routine因时间偏差误触发或延迟 | 依赖`delay_minutes`的定时任务场景 |
| [Issue #1840](https://github.com/nearai/ironclaw/issues/1840)（已修复） | **CLI-only模式行为违背预期**：静默启动webhook，安全暴露风险 | 服务器/headless部署场景 |

### 积极反馈

- **热重载落地受认可**：[Issue #1350](https://github.com/nearai/ironclaw/issues/1350)关闭，2👍反映"无需重启切换模型"是高频需求
- **Slack线程体验改善**：[PR #1540](https://github.com/nearai/ironclaw/pull/1540)解决企业场景下的自然对话流，减少@mention噪音

---

## 8. 待处理积压

| 风险等级 | PR/Issue | 积压时长 | 关键阻塞 | 建议行动 |
|:---|:---|:---|:---|:---|
| 🔴 | [PR #2367](https://github.com/nearai/ironclaw/pull/2367) XL级auth流收紧+live canary统一 | **8天**（4/12创建） | 评论数undefined（可能为数据缺失，但XL规模+多scope暗示review复杂度高） | 评估是否可以拆分：auth所有权迁移、URL边缘case修复、MCP分区可独立review |
| 🔴 | [PR #1446](https://github.com/nearai/ironclaw/pull/1446) XL级阿里云Coding Plan支持 | **31天**（3/20创建） | 多scope（agent/channel/tool/db/llm等16个）、DB migration、新contributor | 需要核心维护者介入，可能因scope过大导致review资源不足；建议分阶段merge |
| 🟡 | [PR #1549](https://github.com/nearai/ironclaw/pull/1549) Slack Socket Mode | **29天**（3/21创建） | XL规模、WASM通道零改动承诺需仔细验证 | NAT-friendly是企业部署刚需，建议排期review |
| 🟡 | [Issue #2360](https://github.com/nearai/ironclaw/issues/2360) 浏览器工具 | **8天** | 3个子依赖issue（#2357-2359）待完成 | 确认依赖链进度，避免设计漂移 |

---

> **日报生成时间**: 2026-04-20 00:00 UTC  
> **数据置信度**: 基于GitHub公开API数据，PR评论数为展示样本（top 20 by comments），实际活跃度可能更高

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-20

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-04-20（统计周期：过去24小时）

---

## 1. 今日速览

LobsterAI 今日社区活跃度**中等偏低**，核心特征是"**高积压、低吞吐**"：9 条 PR 全部处于待合并状态（含 7 条标记为 `stale`），无新代码合入主分支；Issues 侧以关闭历史问题为主，实际新增活跃讨论仅 2 条。项目维护节奏明显放缓，3 月中下旬提交的批量 PR（国际化修复、Skill 扩展、API 兼容性等）已形成**显著合并积压**，需关注维护者响应能力是否匹配社区贡献速度。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无 PR 合并或关闭**，项目代码层面**零推进**。

值得关注的是，7 条 `stale` PR 于今日被统一更新（推测为 bot 批量刷新或作者同步操作），但均未进入合并流程：

| PR | 方向 | 价值 | 积压天数 |
|:---|:---|:---|:---|
| [#428](https://github.com/netease-youdao/LobsterAI/pull/428) | LM Studio 模型接入 | 扩展本地模型生态 | 36 天 |
| [#515](https://github.com/netease-youdao/LobsterAI/pull/515) | OpenAI `max_completion_tokens` 兼容性修复 | **阻断性**：新模型无法调用 | 32 天 |
| [#517](https://github.com/netease-youdao/LobsterAI/pull/517) | 定时任务 `nan:nan` 修复 | 数据完整性 | 32 天 |
| [#518](https://github.com/netease-youdao/LobsterAI/pull/518) | 中文路径乱码修复 | 国际化基础体验 | 32 天 |
| [#535](https://github.com/netease-youdao/LobsterAI/pull/535) | OpenClaw 网关国际化 | 企业部署体验 | 32 天 |
| [#536](https://github.com/netease-youdao/LobsterAI/pull/536) | 暗黑模式 + i18n 补全 | UI 一致性 | 32 天 |
| [#537](https://github.com/netease-youdao/LobsterAI/pull/537) | GitHub Profile Skill | 开发者工作流扩展 | 32 天 |
| [#538](https://github.com/netease-youdao/LobsterAI/pull/538) | 二维码生成 Skill | 实用工具扩展 | 32 天 |
| [#550](https://github.com/netease-youdao/LobsterAI/pull/550) | POPO Webhook URL 一键复制 | IM 配置效率 | 31 天 |

**评估**：[#515](https://github.com/netease-youdao/LobsterAI/pull/515) 为**高优先级阻断性修复**（OpenAI 新模型 API 不兼容），积压超 1 个月将直接影响用户核心功能。

---

## 4. 社区热点

### 最活跃 Issue：[#1743](https://github.com/netease-youdao/LobsterAI/issues/1743) — 升级后 Telegram exec 路由冲突（已关闭）

- **评论数**: 2 | **作者自定位根因**: `exec` 路由冲突 + `sandbox mode: off` 配置失效
- **核心诉求**: 升级路径的**配置迁移可靠性**。用户从旧版本升级后，执行模式配置未正确继承，导致 Agent 调用与实际环境状态不一致。
- **信号**: 关闭速度较快（当日创建当日关闭），说明维护者对**升级回归问题**响应敏感，但缺乏自动化迁移机制。

### 最活跃开放 Issue：[#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) — Bug report（无有效内容）

- **评论数**: 2 | **状态**: 附件上传失败（`Failed to upload`）
- **核心问题**: 用户尝试提交 `.docx` 技术支持函但上传失败，反映 **Issue 模板/提交渠道对非技术用户不友好**。需引导用户使用 Markdown 直接描述或提供替代提交入口。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | [#1743](https://github.com/netease-youdao/LobsterAI/issues/1743) | **升级回归**：Telegram exec 调用 sandbox/local 模式冲突，导致所有执行失败 | ✅ 已关闭 | 未关联 PR，作者自行定位 |
| 🟡 **P1** | [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) | **Deepin Linux 登录失败**：OAuth 回调后网络错误，浏览器端正常 | ✅ 已关闭 | 未关联 PR，4.13 版本未修复 |
| 🟡 **P1** | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | **Outlook OAuth2 认证缺失**：应用密码被禁用，无法连接邮箱 | 🟠 开放 | 无 |
| 🟢 **P2** | [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) | 空内容 Bug 报告（附件上传失败） | 🟠 开放 | 无 |

**关键风险**：
- **[#1745](https://github.com/netease-youdao/LobsterAI/issues/1745)** 揭示**企业邮箱集成缺口**：微软已全面禁用基础认证，LobsterAI 若不支持 OAuth2/Modern Auth，将丧失 Outlook/Exchange Online 用户群体。此为**竞品差异化关键点**。
- **[#515](https://github.com/netease-youdao/LobsterAI/pull/515)** 虽为 PR，但直接修复 **OpenAI API 兼容性阻断**，积压状态等同于生产环境隐患。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 与现有 PR 关联 | 纳入可能性 |
|:---|:---|:---|:---|
| [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | Outlook OAuth2 支持 | 无直接关联 | **高** — 合规刚需，需新建 PR |
| 社区贡献 | GitHub Profile Skill ([#537](https://github.com/netease-youdao/LobsterAI/pull/537)) | 已有完整实现 | **高** — 代码就绪，仅需合并 |
| 社区贡献 | 二维码生成 Skill ([#538](https://github.com/netease-youdao/LobsterAI/pull/538)) | 已有完整实现 | **高** — 18 测试用例覆盖 |
| 社区贡献 | LM Studio 本地模型接入 ([#428](https://github.com/netease-youdao/LobsterAI/pull/428)) | 已有完整实现 | **中** — 需 review 资源 |
| 社区贡献 | POPO Webhook 体验优化 ([#550](https://github.com/netease-youdao/LobsterAI/pull/550)) | 已有完整实现 | **中** — 网易内部 IM，优先级受组织影响 |

**路线图推断**：项目正处于 **"Skill 生态扩展期"**（2 个新 Skill PR 待合并）与 **"企业功能补全期"**（OAuth、国际化、暗黑模式）的叠加阶段，但合并瓶颈可能延缓版本发布节奏。

---

## 7. 用户反馈摘要

### 🔴 核心痛点

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **升级体验脆弱** | [#1743](https://github.com/netease-youdao/LobsterAI/issues/1743) | 跨版本配置未自动迁移，exec 模式冲突导致功能完全不可用 |
| **Linux 桌面兼容性差** | [#1687](https://github.com/netease-youdao/LobsterAI/issues/1687) | Deepin V25 登录流程异常，OAuth 回调与浏览器环境耦合问题 |
| **企业认证滞后** | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | 微软生态用户被挡在门外，"不知道怎么办才好"体现无助感 |
| **Issue 提交门槛** | [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) | 非技术用户尝试用 `.docx` 报告问题，流程设计未覆盖该群体 |

### 🟢 积极信号

- 用户 **bjsswy** 在 [#1743](https://github.com/netease-youdao/LobsterAI/issues/1743) 中展现了**深度自定位能力**，提供稳定复现步骤、版本号、日志摘录，反映核心用户群体技术素养高，可降低维护者诊断成本。

---

## 8. 待处理积压

### ⚠️ 高优先级提醒

| 类型 | 编号 | 问题 | 积压时间 | 风险 |
|:---|:---|:---|:---|:---|
| **PR** | [#515](https://github.com/netease-youdao/LobsterAI/pull/515) | OpenAI 新模型 API 不兼容修复 | 32 天 | **生产环境阻断** |
| **PR** | [#518](https://github.com/netease-youdao/LobsterAI/pull/518) | 中文路径乱码（API 创建定时任务） | 32 天 | 国际化基础体验 |
| **PR** | [#428](https://github.com/netease-youdao/LobsterAI/pull/428) | LM Studio 本地模型接入 | 36 天 | 本地 AI 生态竞争 |
| **Issue** | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | Outlook OAuth2 支持请求 | 1 天（新）| 企业用户流失风险 |

### 建议维护者行动

1. **紧急合并 [#515](https://github.com/netease-youdao/LobsterAI/pull/515)**：OpenAI 兼容性修复不应再拖延
2. **批量 review 3/19 PR 批次**：7 条 `stale` PR 已构成"合并债务"，建议集中 review 窗口或分配二级维护者
3. **创建 OAuth2 路线图 Issue**：响应 [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745)，明确微软/谷歌邮箱认证支持时间表

---

> **健康度评分**: 🟡 **C+**  
> 社区贡献活跃（9 PR 待合并），但维护吞吐严重不匹配，核心修复长期积压，存在"贡献者流失"与"用户阻断"双重风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报 | 2026-04-20

> **项目**: TinyAGI/tinyagi (TinyClaw) | **日期**: 2026-04-20 | **分析周期**: 过去24小时

---

## 1. 今日速览

今日 TinyClaw 项目活跃度较低，社区贡献处于停滞状态。过去24小时内仅新增2条 Bug 报告 Issue，无 PR 活动、无版本发布、无评论互动。两名新 Issue 均由同一用户 `debamitro` 提交，分别涉及 Telegram 核心功能损坏和原生模块构建问题，目前均处于待响应状态。项目维护团队尚未对今日新增问题作出回应，整体健康度需关注响应延迟风险。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并/关闭的 Pull Requests**

项目代码层面今日零进展，无功能推进或修复落地。主干代码未发生变更。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动量 | 核心诉求分析 |
|:---|:---|:---|:---|
| #1 | [#279 Telegram channel setup 功能损坏](https://github.com/TinyAGI/tinyagi/issues/279) | 0 评论, 0 👍 | **核心功能阻断**：用户期望通过 CLI 命令 `telegram channel setup` 完成频道初始化，但系统返回 `Unknown messaging command: setup`，表明命令注册或路由逻辑存在缺陷。该问题直接影响 Telegram 集成能力的首次使用体验，属于 onboarding 路径上的关键断点。 |
| #2 | [#278 better-sqlite3 需手动重建](https://github.com/TinyAGI/tinyagi/issues/278) | 0 评论, 0 👍 | **安装体验摩擦**：原生 Node 模块 `better-sqlite3` 在全新安装后仍需手动执行 `npm rebuild`，指向预构建二进制分发或 `postinstall` 脚本配置不完善。虽存在 workaround，但增加了新用户流失风险。 |

> **共性信号**：两 Issue 均出自同一用户，且集中于**安装配置阶段**的体验问题，反映项目当前在"首次运行成功"（Time-to-First-Success）指标上存在系统性短板。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 组件 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **High** | Telegram channel setup 返回未知命令错误 | 待响应 | Telegram 集成 | ❌ 无 fix PR | [#279](https://github.com/TinyAGI/tinyagi/issues/279) |
| 🟡 **Medium** | better-sqlite3 全新安装后需手动重建 | 待响应 | 依赖管理/安装流程 | ❌ 无 fix PR | [#278](https://github.com/TinyAGI/tinyagi/issues/278) |

**风险评估**：
- **#279 High 级别 Bug**：直接影响核心功能可用性，且用户明确标注"no workaround"，意味着 Telegram 频道功能当前完全不可用。若该功能为项目差异化卖点，需 P0 级响应。
- **#278 Medium 级别 Bug**：虽可通过 `npm rebuild` 绕过，但暴露了跨平台分发策略的脆弱性，尤其对 Windows/macOS 预构建支持不足的场景。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求（Feature Request）**

现有 Issue 均为 Bug 报告，未体现用户对新能力的需求。但以下技术债务值得纳入下一版本规划：

| 潜在改进方向 | 关联 Issue | 优先级推断 |
|:---|:---|:---|
| CLI 命令注册与验证机制重构 | #279 | **高** - 需审计所有 messaging 子命令的注册逻辑 |
| 原生依赖预构建分发优化（可考虑 `prebuildify` 或 `node-gyp-build`） | #278 | **中** - 提升跨平台安装成功率 |

---

## 7. 用户反馈摘要

> 基于 Issue 描述提炼的真实用户声音

| 痛点 | 来源 | 场景推断 |
|:---|:---|:---|
| **"按照文档执行命令却得到 Unknown command"** | #279 | 用户尝试按预期流程配置 Telegram 机器人，遭遇命令未注册问题，信任受损 |
| **"全新安装后仍需手动修复依赖"** | #278 | 用户期望 `npm install` 后开箱即用，实际需深入 Node 原生模块知识排查 |

**满意度信号**：无正面反馈；两 Issue 均为负面体验报告，且零评论互动表明用户可能处于"报告后等待"或"已放弃"状态。

---

## 8. 待处理积压

| Issue | 创建时间 | 当前状态 | 提醒原因 |
|:---|:---|:---|:---|
| [#279 [Bug]: channel setup not working](https://github.com/TinyAGI/tinyagi/issues/279) | 2026-04-19 | 🔴 **0 响应** | **High  severity + 核心功能 + 无 workaround**，已超24小时无维护者介入 |
| [#278 [Bug]: better-sqlite3 still needs to be rebuilt](https://github.com/TinyAGI/tinyagi/issues/278) | 2026-04-19 | 🔴 **0 响应** | 影响新用户首次安装体验，累积将扩大支持负担 |

> **维护者行动建议**：建议优先确认 #279 的复现范围（是否所有 Telegram 命令均受影响或仅 `setup`），并评估是否需要 hotfix 版本；#278 可同步检查 `better-sqlite3` 版本锁定策略及 `optionalDependencies` 配置。

---

## 附录：项目健康度仪表盘

| 指标 | 数值 | 趋势 |
|:---|:---|:---|
| 日新增 Issue | 2 | ⚠️ 需关注（均为 Bug）|
| 日关闭 Issue | 0 | → 持平 |
| 日新增 PR | 0 | → 持平 |
| 日合并 PR | 0 | → 持平 |
| 维护者响应中位时间 | **>24h（当前）** | 🔴 恶化 |
| 社区评论互动 | 0 | → 冷淡 |

---

*本日报基于 GitHub 公开数据自动生成，如需深度分析特定 Issue 的技术细节或历史趋势，可进一步提供补充数据。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-20

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis) | **日期**: 2026-04-20 | **分析周期**: 过去24小时

---

## 1. 今日速览

Moltis 今日呈现**高代码合并活跃度、低社区讨论热度**的特征。过去24小时内 4/5 的 PR 完成合并/关闭，显示核心开发节奏紧凑，但 Issues 区仅新增 1 条且零评论互动，社区参与偏冷。值得关注的是 TypeScript UI 迁移与错误处理重构两大工程债务同步推进，而文档维护已启动自动化流水线（"Doc Rotisserie"）。整体健康度：**开发活跃，社区待温**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR（4条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#775](https://github.com/moltis-org/moltis/pull/775) | penso | **Web UI 全面 TypeScript 迁移**：142 个 TS/TSX 文件（~49K LoC），JS+HTM → TypeScript+JSX(Preact)+Vite | 前端技术栈现代化完成，消除无类型系统的维护风险，为后续 UI 功能扩展奠定工程基础 |
| [#513](https://github.com/moltis-org/moltis/pull/513) | leszek3737 | **新增 Jina.ai 搜索提供商**：与 Brave、Perplexity 并列成为第三搜索后端，支持 `gl`/`hl` 地域语言参数 | 搜索基础设施多元化，降低对单一供应商依赖；DuckDuckGo 降级错误信息同步优化 |
| [#787](https://github.com/moltis-org/moltis/pull/787) | Cstewart-HC | **文档自动修复 Batch 2**：4 份文档审计，`session-state.md` 操作数修正、`slack.md` 补全覆盖配置等 | 文档与源码一致性提升，自动化维护流程（"Doc Rotisserie"）验证可行 |
| [#792](https://github.com/moltis-org/moltis/pull/792) | penso | **8 个库 crate 错误类型重构**：auth/caldav/httpd/mcp-agent-bridge/memory/node-host/qmd/skills 引入 `thiserror` 替代纯 `anyhow` | 可恢复错误处理能力建设，API 错误可匹配性提升，Rust 工程化成熟度跃升 |

**整体里程碑判断**：今日合并覆盖前端架构、搜索基础设施、文档工程、Rust 核心质量四大维度，属于**多线程技术债务清偿日**。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#375](https://github.com/moltis-org/moltis/issues/375) Google 模型 function call 缺失 `thought_signature` | 👍×3, 评论×1, 持续活跃41天 | **多模型兼容性的深层痛点**：Google Gemini 系列模型的思维链签名在工具调用场景丢失，影响可观测性与调试。用户 andr-uv 长期跟进未获修复，反映 Google 模型适配优先级不足 |
| 2 | [#793](https://github.com/moltis-org/moltis/issues/793) OpenRouter + Google AI Studio 400 错误 | 新建无互动 | **供应链交叉兼容问题**：OpenRouter 聚合层与 Google 直连 Provider 的参数转换存在断裂，属于新兴集成模式的首发 Bug |

**信号提取**：Google 模型生态（Gemini/AI Studio）的适配质量成为用户流失风险点，两条 Issue 均指向该供应商，但维护者响应缺位。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#375](https://github.com/moltis-org/moltis/issues/375) | 开放41天 | Google 模型 function call 丢失 `thought_signature`，影响生产环境调试与审计追踪 | **无** |
| 🟡 **中** | [#793](https://github.com/moltis-org/moltis/issues/793) | 开放1天 | OpenRouter + Google AI Studio 组合触发 HTTP 400，阻塞特定供应商配置路径 | **无** |

**风险评估**：两条 Bug 均涉及 Google 模型供应链，形成**系统性适配盲区**。400 错误通常源于请求体 schema 不匹配，可能与 #375 的根因（Google 特有字段处理）存在关联，建议合并调查。

---

## 6. 功能请求与路线图信号

**今日无显性功能请求 Issue**，但从已合并 PR 可逆向推断路线图优先级：

| 已落地能力 | 下一版本可能性 | 用户侧需求匹配度 |
|:---|:---|:---|
| Jina.ai 搜索（#513） | ⭐⭐⭐ 已发布 | 搜索供应商自由度 ↑ |
| TypeScript UI（#775） | ⭐⭐⭐ 架构完成 | 前端贡献者门槛 ↓，长期生态利好 |
| `thiserror` 重构（#792） | ⭐⭐⭐ 质量基建 | 企业级错误处理需求 |

**缺失信号**：无用户主动提出的 Agent 协议扩展、MCP 增强、多模态支持等前沿需求进入今日视野，路线图透明度有限。

---

## 7. 用户反馈摘要

> 基于 Issue 原文与互动模式提炼

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **Google 模型二等公民感** | #375, #793 | 企业用户混合调用 OpenAI/Google 模型时，Google 路径频繁遭遇字段缺失/请求失败，被迫维护两套集成逻辑 |
| **调试黑箱** | #375 | `thought_signature` 缺失导致无法追溯模型决策链，合规审计受阻 |
| **供应商锁定焦虑** | #513 的反向印证 | Jina.ai 加入虽缓解搜索层锁定，但模型层 Google 问题未解，整体供应商多元化承诺未完全兑现 |

**满意度盲区**：无正面反馈 Issue，社区情绪偏向**问题报告驱动**，缺乏成功案例或性能赞誉的公开表达。

---

## 8. 待处理积压

| 条目 | 积压时长 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#375](https://github.com/moltis-org/moltis/issues/375) | **41天** | 最长活跃 Bug，👍×3 显示多用户受影响，可能发酵为"Google 不支持"的负面认知 | 指派模型适配负责人，关联 #793 统一排查 Google Provider 的请求序列化层 |
| [#783](https://github.com/moltis-org/moltis/pull/783) | 2天开放 | 文档修复 Batch 1，与已合并的 #787 构成系列工作，悬置会导致 Rotisserie 节奏断裂 | 优先审阅合并，保持自动化文档维护的示范效应 |

---

**日报生成时间**: 2026-04-20 | **数据置信度**: 基于 GitHub 公开 API 数据，评论数为 `undefined` 的条目可能存在数据抓取异常，建议人工复核 PR 讨论区。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-20

> **项目**: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
> **统计周期**: 2026-04-19 至 2026-04-20  
> **数据分析师**: AI 开源项目分析师

---

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，24小时内产生 **21 条 Issues 更新**（17 条新开/活跃，4 条关闭）和 **14 条待合并 PR**，零合并记录表明代码审查队列存在积压。社区贡献显著：首次贡献者提交占比达 **35.7%**（5/14 PR），涵盖 Telegram 打字状态保持、Whisper 语音输入、SSE 崩溃修复等实用功能。核心开发线聚焦于 **LLM 路由运行时落地**（PR #3452/#3550/#3575 形成完整链路）和 **前端测试基建**（Vitest 引入）。稳定性方面，YAML 解析崩溃、Unicode surrogate 序列化失败、Windows 全角标点文件名处理等 3 个高影响 Bug 已有 PR 修复待审，但微信渠道 cron 任务 KeyError 和 localhost 认证绕过失效尚无对应修复。

---

## 2. 版本发布

**无新版本发布。** 最新版本仍为 v1.1.2（2026-04-17 前后发布）。

---

## 3. 项目进展

| PR | 状态 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| #3452 + #3550 + #3575 | 均 OPEN，形成依赖链 | **LLM 路由功能端到端落地**：配置 UI → 运行时 scope-first 模型选择 → 全局变更后 agent 热重载，构成 v1.2.0 核心能力 | [PR #3452](https://github.com/agentscope-ai/QwenPaw/pull/3452), [PR #3550](https://github.com/agentscope-ai/QwenPaw/pull/3550), [PR #3575](https://github.com/agentscope-ai/QwenPaw/pull/3575) |
| #3559 | OPEN | **前端测试基建突破**：引入 Vitest，以 Chat 页为试点建立单元/组件测试规范，填补长期测试空白 | [PR #3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) |
| #3558 | OPEN | **内置技能国际化**：7 个内置技能拆分 EN/ZH 双语目录，为全球化部署铺垫 | [PR #3558](https://github.com/agentscope-ai/QwenPaw/pull/3558) |
| #3579 | OPEN | **Agent 级模型绑定 UI**：设置页支持为每个 Agent 独立指定 LLM，与路由功能形成互补 | [PR #3579](https://github.com/agentscope-ai/QwenPaw/pull/3579) |

> **整体评估**: 项目处于 **v1.2.0 功能冻结前的密集开发期**，LLM 路由作为旗舰特性进入最后集成阶段，但 14 PR 零合并提示 **review 带宽瓶颈**。

---

## 4. 社区热点

| 排名 | 议题 | 评论数 | 热度分析 | 链接 |
|:---|:---|:---|:---|:---|
| 🔥1 | #3568 Skill 无效 YAML 导致 QwenPaw 完全崩溃 | 3 | **系统性韧性缺陷**：单个技能配置错误导致整个系统无响应，用户诉求从"修复解析"升级为"错误隔离机制" | [Issue #3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) |
| 🔥2 | #3573 微信渠道 cron 任务 KeyError | 3 | **渠道生态碎片化**：weixin 渠道在创建时存在但执行时"消失"，暴露渠道注册与运行时加载的不一致 | [Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) |
| 🔥3 | #3552 Console SSE Unicode surrogate 崩溃 | 3 | **前端健壮性**：半 emoji 序列导致流式输出中断，影响用户体验的"死亡字符"问题 | [Issue #3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) |

**背后诉求洞察**：
- **#3568** 反映用户对"插件化架构容错性"的期待——技能市场扩展必须以沙箱隔离为前提
- **#3573** 揭示渠道系统的"配置-运行时"双轨制设计债务，weixin 作为国产渠道代表，其稳定性直接影响国内用户采纳

---

## 5. Bug 与稳定性

| 严重等级 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-系统崩溃** | #3568 | 无效 YAML Skill 导致 QwenPaw 完全无响应 | **#3583** | [PR 待审](https://github.com/agentscope-ai/QwenPaw/pull/3583) |
| 🔴 **P0-功能阻断** | #3573 | 微信 cron 任务执行时 KeyError('channel not found') | 无 | ❌ 待修复 |
| 🟡 **P1-功能异常** | #3552 | Console SSE 序列化 Unicode surrogate 崩溃 | **#3553** | [PR 待审](https://github.com/agentscope-ai/QwenPaw/pull/3553) |
| 🟡 **P1-认证失效** | #3582 | localhost/127.0.0.1 认证绕过失效（文档承诺 vs 实际 401） | 无 | ❌ 待修复 |
| 🟡 **P1-文件传输** | #3580/#3581 | Windows 全角标点文件名导致 ValueError | 无（#3581 已关闭但 #3580 仍开，疑似重复） | ⚠️ 需确认 |
| 🟢 **P2-UI 异常** | #3546 | 深色模式侧边栏文字重叠 | 无 | ❌ 待修复 |
| 🟢 **P2-运行异常** | #3578 | 启动后白屏（Windows Desktop） | 无 | ❌ 待诊断 |

> **风险评估**: 2 个 P0 级问题中仅 1 个有修复 PR；#3573 微信渠道问题无响应，可能影响国内用户留存。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 与现有 PR 关联 | 纳入 v1.2 概率 | 链接 |
|:---|:---|:---|:---|:---|
| **上下文用量可视化** | #3563 | 无 | ⭐⭐⭐ 中 | [Issue #3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) |
| **代码块折叠** | #3572 | 无 | ⭐⭐⭐⭐ 高（前端小改动，社区呼声） | [Issue #3572](https://github.com/agentscope-ai/QwenPaw/issues/3572) |
| **顶栏隐藏/精简** | #3571 | 无 | ⭐⭐⭐ 中 | [Issue #3571](https://github.com/agentscope-ai/QwenPaw/issues/3571) |
| **聊天历史分页** | #3570 | 无 | ⭐⭐⭐⭐ 高（性能问题明确） | [Issue #3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) |
| **定时任务执行记录+编辑** | #3569 | 无 | ⭐⭐⭐ 中 | [Issue #3569](https://github.com/agentscope-ai/QwenPaw/issues/3569) |
| **Telegram 工具调用时保持 typing** | #1874 → **#3585** | ✅ PR 已提交 | ⭐⭐⭐⭐⭐ **已锁定** | [PR #3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) |
| **Whisper 替代 Web Speech API** | **#3574** | ✅ PR 已提交 | ⭐⭐⭐⭐⭐ **已锁定** | [PR #3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) |
| **AgentMemory 后端选项** | **#3565** | ✅ PR 已提交 | ⭐⭐⭐⭐ 高（架构级扩展） | [PR #3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) |
| **会话列表直达对话** | #3378 | 无 | ⭐⭐⭐ 中（长期未响应） | [Issue #3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) |

**路线图信号**: v1.2.0 明确聚焦 **LLM 路由 + Agent 级模型配置**，而社区正推动 **交互体验优化**（typing 状态、语音输入、代码折叠）和 **记忆架构升级**（AgentMemory），后者可能成为 v1.3.0 主线。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型表述 |
|:---|:---|:---|
| **国内网络环境适配** | #3576 | "WebUI 避免使用 fonts.googleapis.com，国内访问困难" |
| **Windows 路径/编码问题** | #3580/#3581/#3578 | 全角标点文件名报错、启动白屏 |
| **调试黑盒** | #3563 | "不知道何时该用 compact，需要上下文用量可见" |
| **历史记录管理困难** | #3378/#3570 | "找对话要复制标题搜索，聊天多了加载慢" |

### 😊 满意/期待点

| 反馈 | 来源 |
|:---|:---|
| 首次贡献者友好（5 个 first-time-contributor PR 被快速响应） | #3585, #3574, #3553, #3565 |
| 多模态能力扩展（OpenRouter 多模态探测、view_image 工具） | #3584, #3566 |
| 本地模型支持持续优化（llama.cpp 工具调用流解析） | #3560 |

### 🎯 使用场景洞察

- **企业/团队部署**: #3576 国内网络、#3573 微信渠道、#3582 localhost 认证 → 私有化部署体验待完善
- **开发者/极客**: #3577 browser_visible 依赖询问、#3568 YAML 配置 → 技能开发文档和容错需加强
- **高频对话用户**: #3570 分页、#3571 顶栏精简、#3572 代码折叠 → 前端性能与信息密度优化空间

---

## 8. 待处理积压

| 类型 | 条目 | 滞留时间 | 风险说明 | 链接 |
|:---|:---|:---|:---|:---|
| **长期 Issue** | #3378 会话列表直达对话 | **36 天** | 高频使用痛点，无响应导致用户流失 | [Issue #3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) |
| **长期 PR** | #2432 聊天历史显示发送者+时间戳 | **24 天** | 与 #3570 分页需求相关，可能需合并设计 | [PR #2432](https://github.com/agentscope-ai/QwenPaw/pull/2432) |
| **重复/关联 Issue** | #3580 vs #3581 全角标点文件名 | 同日 | #3581 已关闭但 #3580 仍开，需确认是否完全解决 | [Issue #3580](https://github.com/agentscope-ai/QwenPaw/issues/3580), [Issue #3581](https://github.com/agentscope-ai/QwenPaw/issues/3581) |
| **无响应 P0** | #3573 微信 cron KeyError | 1 天 | 国产渠道核心功能，24小时无 PR 响应 | [Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) |
| **无响应 P1** | #3582 localhost 认证绕过失效 | 1 天 | 文档与实现不一致，影响开发体验 | [Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) |

> **维护者行动建议**: 
> 1. 优先 review #3583/#3553 两个 P0 fix PR，释放稳定性风险
> 2. 指定微信渠道维护者响应 #3573，或更新文档声明 weixin cron 暂不支持
> 3. 对 #3378 给出路线图回应（接受/排期/需要设计），避免社区挫败感

---

**日报生成时间**: 2026-04-20  
**数据置信度**: 基于 GitHub 公开 API 数据，PR 评论数标记为 `undefined` 表示数据未返回或为零

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-20

---

## 1. 今日速览

ZeroClaw 今日呈现**高活跃度、结构性转型期**特征：24小时内49条Issues更新（45条活跃/新开，仅4条关闭）、33条PR更新（24条待合并），显示社区参与热情高涨但维护吞吐存在瓶颈。项目正处于**v0.7.x重大架构重构**的关键阶段——v0.7.3正式版发布标志着"史上最大规模代码库拆分"（Cargo workspace化）落地，同时v0.7.4里程碑已启动，聚焦CI/CD治理与技能体系完善。核心贡献者Jason Perlow（InvestorClaw作者）持续高频输出，围绕runtime.native模式、Docker沙箱、memcg检测等生产级场景提交多组PR，反映企业用户正深度接入。风险点在于：高优先级安全/运行时Bug（#5719、#5722、#5813）与大量待合并PR形成积压，需关注维护者review带宽。

---

## 2. 版本发布

### [v0.7.3](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.3)（稳定版）
| 属性 | 内容 |
|:---|:---|
| **升级跨度** | v0.6.9 → v0.7.3 |
| **核心变更** | 史上最大规模结构性重构：完整迁移至Cargo workspace多crate架构；全新配置schema上线，支持实时迁移 |
| **破坏性变更** | 配置schema版本升级（旧版配置需迁移）；llamacpp配置层级调整（见#5815） |
| **迁移注意** | 需关注`[providers.models.llamacpp]`配置路径变更——此前顶层`default_model`写法在schema v2后失效 |

### [v0.7.3-beta.1051](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.3-beta.1051)（预发布）
- 无独立changelog，作为v0.7.3的先行验证版本

> ⚠️ **紧急发布背景**：v0.7.2因"broken tags blowout"（标签损坏爆炸）跳号，v0.7.3为紧急替补版本（见[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)）

---

## 3. 项目进展

### 已合并/关闭的关键PR（9条中的核心项）

| PR | 作者 | 贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#5893](https://github.com/zeroclaw-labs/zeroclaw/pull/5893) | WareWolf-MoonWall | 版本号提升至0.7.3，更新CHANGELOG | **v0.7.3发布收尾**，完成Deployment章节与Bug Fix记录 |
| [#5913](https://github.com/zeroclaw-labs/zeroclaw/pull/5913) | JordanTheJet | Extism WASM执行桥接（Phase 2 D2） | **插件架构里程碑**：WASM插件从占位符变为可执行，开启第三方扩展生态 |
| [#5876](https://github.com/zeroclaw-labs/zeroclaw/issues/5876) | WareWolf-MoonWall | CI action-pinning强制检查 | **供应链安全**：落实#5579 RFC的Phase 1交付物，防止未固定版本Action导致的供应链攻击 |
| [#5898](https://github.com/zeroclaw-labs/zeroclaw/pull/5898) | perlowja | Python技能快速入门文档 | **降低技能开发门槛**，覆盖native执行与自定义镜像两种模式 |
| [#5914](https://github.com/zeroclaw-labs/zeroclaw/pull/5914) | WareWolf-MoonWall | 移除docs-quality CI门禁 | **解除v0.7.4流水线阻塞**：3个PR因markdownlint检查卡住，临时解耦以加速交付 |
| [#5901](https://github.com/zeroclaw-labs/zeroclaw/pull/5901) | dshivendra | BitChat BLE mesh + WiFi Direct离线通信 | **关闭**（未合并）：探索性P2P通信架构，可能为未来离线场景储备技术 |

**整体迈进评估**：v0.7.3架构重构为v1.0微内核目标奠基；WASM桥接与CI治理并行推进，显示"功能扩展"与"工程成熟度"双线并进。但24条待合并PR提示review瓶颈可能拖累v0.7.4节奏。

---

## 4. 社区热点

### 讨论最活跃的Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 深层分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web dashboard不可用 | **17** | 构建流程复杂、文档与实际脱节 | **长期顽疾**：用户反复遇到`cd web && npm ci && npm run build`提示，跨版本未根治；反映前端构建与Rust核心分发未一体化，对非Rust开发者极不友好 |
| 2 | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) runtime.kind="native"未绕过Docker | **10** | 显式配置被沙箱自动检测覆盖 | **意图表达与自动魔法冲突**：用户明确声明native执行，系统仍"智能"选择Docker，破坏可预测性。perlowja作为FINOS项目作者，代表企业级合规场景对"显式优于隐式"的强烈需求 |
| 3 | [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) 微内核架构转型RFC | **8** | 从反应式增长转向有意架构 | **项目哲学级讨论**：WareWolf-MoonWall系列RFC的核心，定义v0.7→v1.0的演化路径，获accepted状态表明核心团队共识形成 |
| 4 | [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) PYTHONPATH内联环境变量语法失效 | **6** | shell tool解析器不支持标准shell语法 | **POSIX兼容性缺口**：`VAR=val command`是shell标准写法，ZeroClaw解析器未正确处理，阻碍现有脚本迁移 |
| 5 | [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) Telegram语音消息转录 | **6** | 对标OpenClaw功能补齐 | **跨实现竞争压力**：明确提及"drop-in alternative"，用户在不同语言实现间功能对标，生态位争夺白热化 |

### 高反应Issues
- [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) Multi-Agent Routing（👍7）：**历史最久高票需求**（3月4日创建，status:stale），7个赞显示社区对OpenClaw多代理模式的强烈向往，但长期无进展可能流失潜在用户。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Feishu `mention_only`失效，非提及消息触发响应 | Open | ❌ 无 |
| **S0** | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | 聊天上下文泄漏至定时任务，影响调度执行隔离性 | Open, needs-repro | ❌ 无 |
| **S1 - 工作流阻塞** | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | `runtime.kind="native"`被Docker覆盖 | Open, needs-repro | ✅ [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904) |
| **S1** | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | llamacpp配置对象被忽略，默认值强制生效 | Open | ❌ 无 |
| **S1** | [#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) | Compaction孤立`tool_result`块，Anthropic API 400错误，会话损坏 | Open | ❌ 无 |
| **S2 - 行为降级** | [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) | PYTHONPATH内联语法失效 | Open, needs-repro | ✅ [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) |
| **S2** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | 记忆过度强调，系统提示优先级失衡 | Open | ❌ 无 |
| **S2** | [#5897](https://github.com/zeroclaw-labs/zeroclaw/issues/5897) | Telegram照片流非视觉模型前发送图像标记，双重失败 | Open | ❌ 无 |
| **S2** | [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio子进程随心跳泄漏，每tick一个孤儿进程 | Open | ❌ 无 |

**风险评估**：S0级安全问题（Feishu越权响应、上下文隔离失效）无fix PR，存在实际部署风险；S1级中perlowja密集提交3个关联PR（#5904/#5905/#5906），显示企业用户"自产自修"的紧迫性。

---

## 6. 功能请求与路线图信号

### 高概率纳入v0.7.4+的功能（已有PR支撑）

| 功能 | 来源 | 信号强度 | 关键PR/Issue |
|:---|:---|:---:|:---|
| **原生OAuth登录扩展**（Ollama Cloud/z.ai/Kimi/MiniMax） | #5601 | ⭐⭐⭐⭐⭐ | 已有👍1，需求明确，与现有OpenAI/Google OAuth模式对齐 |
| **Telegram语音转录** | #5509 | ⭐⭐⭐⭐⭐ | OpenClaw已实现，功能对标压力；PR#5691同步更新bot命令 |
| **Mattermost WebSocket多频道支持** | #5902 | ⭐⭐⭐⭐☆ | PR已提交，企业IM集成刚需 |
| **OpenShift/K8s部署清单** | #5880 | ⭐⭐⭐⭐☆ | PR已提交，v0.7.3 CHANGELOG已收录 |
| **review-session技能** | #5910 | ⭐⭐⭐⭐☆ | PR待合并，替代github-pr-review，FND-005反馈分类体系 |
| **changelog生成技能** | #5819 | ⭐⭐⭐⭐☆ | PR待合并，被docs-quality门禁阻塞（#5914已解耦） |

### 中长期架构信号（RFC阶段）

| RFC | 状态 | 目标版本 |
|:---|:---|:---|
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) 微内核架构 | accepted | v1.0.0 |
| [#5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579) CI/CD自动化 | accepted | v0.7.0→v1.0.0 |
| [#5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653) 代码健康与错误纪律 | accepted | v0.7.0→ |
| [#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577) 项目治理 | accepted | v0.7.0→ |
| [#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576) 文档标准与i18n | accepted | v0.7.0→ |
| [#5615](https://github.com/zeroclaw-labs/zeroclaw/issues/5615) 贡献文化 | accepted | v0.7.0→ |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 多代理UX流 | Draft, 7天讨论中 | 待投票 |

---

## 7. 用户反馈摘要

### 真实痛点

| 用户/场景 | 痛点 | 来源 |
|:---|:---|:---|
| **perlowja/InvestorClaw**（FINOS合规金融技能） | Docker沙箱与native执行意图冲突；workspace路径在沙箱内不可达；memcg静默失效 | #5719, #5720, #5722, #5895, #5903-#5906 |
| **databillm**（定时任务用户） | 记忆权重过高污染cron执行；聊天上下文泄漏至调度任务 | #5844, #5415 |
| **hsuenaga**（llamacpp自托管用户） | schema v2后配置层级变更无迁移警告，旧配置静默失效 | #5815 |
| **loveholly**（前端使用者） | Web dashboard构建流程反复失败，跨版本未解决 | #4866 |
| **Yum-King/NiuBlibing**（Linux/Android网络场景） | 需要`tcp_user_timeout`控制，默认30s不可调 | #5851 |
| **sudomove**（树莓派部署者） | 8GB RAM仍因`lto="fat"` OOM，文档声称<$10硬件运行与实际编译体验矛盾 | #4704 |

### 满意点
- v0.7.3 workspace拆分获认可（"largest structural overhaul"）
- 技能体系（.claude/skills/）逐步成型，降低贡献门槛
- perlowja文档贡献（#5898）获 maintainer 邀请式接纳

### 不满意/摩擦点
- **"vibe-coded workflows"泛滥**：#5915直指5个自动运行的workflow"从未有意设计，已造成或可能造成危害"，反映AI辅助编码后的技术债务
- **CI门禁过度阻塞**：docs-quality检查卡住3个PR，被迫解耦
- **配置迁移缺乏工具**：schema变更靠人工发现，无自动检测/警告

---

## 8. 待处理积压

### 需维护者紧急关注的长期项

| Issue/PR | 创建时间 | 当前状态 | 风险 |
|:---|:---|:---|:---|
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) Multi-Agent Routing | 2026-03-04 | **stale**, 👍7, 无 maintainer 回应 | **最高票功能请求**，OpenClaw已支持，ZeroClaw长期缺失导致用户流失 |
| [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) 树莓Pi部署指南 | 2026-03-25 | in-progress, 👍3 | 文档与实际编译体验脱节，损害"轻量运行"品牌承诺 |
| [#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) GitHub集成工具 | 2026-03-23 | help wanted, 无PR | 基础生态位空缺，用户被迫手动配置 |
| [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) `send_channel_message`工具 | 2026-03-29 | in-progress | 直接用户触达能力缺失，工作流绕路 |
| [#5372](https://github.com/zeroclaw-labs/zeroclaw/pull/5372) 截断超大memory API负载 | 2026-04-06 | **needs-author-action** | dashboard性能问题，作者未响应 |
| [#5592](https://github.com/zeroclaw-labs/zeroclaw/pull/5592) Docker.debian构建修复 | 2026-04-10 | **needs-author-action** | 构建管道破损，影响Debian系分发 |
| [#5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623) OpenRouter extra_body透传 | 2026-04-11 | **needs-author-action** | 高级用户定制需求，作者未跟进 |

### 维护者行动建议
1. **优先review perlowja三连PR**（#5904/#5905/#5906）：企业用户自修，快速合并可释放其后续贡献带宽
2. **决策#2767多代理状态**：要么纳入v0.7.4里程碑分配资源，要么明确声明v1.0后实现，管理社区预期
3. **清理needs-author-action积压**：4个PR超一周无响应，需作者ping或关闭释放队列
4. **关注S0级安全Issue**：#5672/#5415无fix PR，存在实际运行风险

---

*日报生成时间：2026-04-20 | 数据来源：ZeroClaw GitHub 公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*