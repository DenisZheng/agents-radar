# OpenClaw 生态日报 2026-04-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-29 00:20 UTC

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

# OpenClaw 项目动态日报 | 2026-04-29

## 1. 今日速览

OpenClaw 今日呈现**极高社区活跃度**，24小时内 487 个活跃 Issue 与 466 个待合并 PR 表明项目处于快速迭代期。v2026.4.26 版本发布聚焦实时语音与浏览器传输能力，但社区反馈显示 **v4.22→v4.26 性能回归**成为新的 blocker 级问题。Docker 环境兼容性、多通道（Feishu/Telegram/WhatsApp）边缘 case 处理，以及 Gateway 稳定性（CPU 飙高、启动慢）构成当前技术债务的三大主峰。PR 队列庞大（466 待合并），代码审查吞吐面临显著压力。

---

## 2. 版本发布

### [v2026.4.26](https://github.com/openclaw/openclaw/releases/tag/v2026.4.26) — OpenClaw 2026.4.26

| 维度 | 详情 |
|:---|:---|
| **核心变更** | ① **Control UI/Talk**: 新增通用浏览器实时传输协议（generic browser realtime transport contract）；② **Google Live browser Talk 会话**：支持受约束的临时令牌（constrained ephemeral tokens）；③ **Gateway 中继**：为纯后端实时语音插件提供 Gateway relay |
| **贡献者** | @VACInc |
| **CLI/models** | 优化 provider-filtered 模型列表路由（变更截断，完整内容见 release note） |
| **迁移注意** | 实时语音功能涉及新的 token 机制，依赖 Gateway 中继的插件需确认网关版本 ≥ 2026.4.26 |

> ⚠️ **社区反馈**：升级后出现显著性能退化（见 Issue #73501），生产环境建议暂缓或做好回滚准备。

---

## 3. 项目进展

### 今日关键 PR 推进（基于最新活跃 PR 分析）

| PR | 作者 | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|:---|
| #73883 | CadanHu | **OPEN** | 会话历史支持 `includeArchived` 参数，允许只读访问 `.reset.<ts>` 归档上下文而不复活为活跃会话 | [PR #73883](https://github.com/openclaw/openclaw/pull/73883) |
| #73822 | nickytonline | **OPEN** | 通道配置中电话号码字段支持 `SecretRef`，PII 不再以明文存储于 `allowFrom`/`defaultTo`/`groupAllowFrom` | [PR #73822](https://github.com/openclaw/openclaw/pull/73822) |
| #73871 | pash-openai | **OPEN** | Codex Computer Use  onboarding 流程显式化，新增 `/codex computer-use setup` 命令 | [PR #73871](https://github.com/openclaw/openclaw/pull/73871) |
| #73877 | arcanis2k3 | **OPEN** [beta-blocker] | **修复 Workspace 插件 HTTP 路由 404 问题** — 插件无法接收 Stripe/Gmail 等 webhooks | [PR #73877](https://github.com/openclaw/openclaw/pull/73877) |
| #73884 | chareice | **OPEN** | Telegram 轮询假死重启阈值提升至 60s，避免低于 grammY 30s long-poll 窗口导致的误判 | [PR #73884](https://github.com/openclaw/openclaw/pull/73884) |
| #49841 | GatewayJ | **OPEN** | Nacos 配置中心支持，K8s 环境可实现无文件系统的集中配置与热重载 | [PR #49841](https://github.com/openclaw/openclaw/pull/49841) |

**整体评估**：今日 PR 聚焦**安全加固**（SecretRef）、**稳定性修复**（Telegram 轮询、Workspace 路由）、**企业级部署**（Nacos、归档会话读取），但合并速率（34/500）显示审查瓶颈明显。

---

## 4. 社区热点

### 🔥 讨论最激烈的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **Docker 中 Skill 安装失败：`brew not installed`** | 27 | 17 | Docker 官方镜像未内置 Homebrew，Linux 容器运行 `brew`-based skill（如 openai-whisper）直接崩溃。用户要求官方镜像支持多平台 skill 安装或明确文档指引 | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| 2 | **集中式文件名编码工具** | 17 | 0 | Feishu 中文文件名乱码的架构级修复，要求统一处理 Shift-JIS/EUC-KR/GB18030 等多编码，而非仅修 UTF-8→Latin-1 个案 | [#48788](https://github.com/openclaw/openclaw/issues/48788) |
| 3 | **agentDir 中 bootstrap 文件被静默忽略** | 13 | 4 | 按文档放置的 SOUL.md/AGENTS.md 等文件在 `agentDir` 下不生效，仅 `workspace` 目录生效，配置模型与行为预期严重不符 | [#29387](https://github.com/openclaw/openclaw/issues/29387) |
| 4 | **Agent 拒绝调用 write/action 工具，幻觉成功** | 11 | 0 | 升级后 agentmail 等工具调用失败但 Agent 伪造成功响应，属于**信任与安全（T&S）红线问题** | [#41304](https://github.com/openclaw/openclaw/issues/41304) |
| 5 | **Gateway 启动过慢：hook 初始化阻塞** | 11 | 0 | 生产环境 Gateway 启动需 ~4 分钟，model-pricing 等 hook 阻塞主流程，要求异步/非阻塞加载 | [#61278](https://github.com/openclaw/openclaw/issues/61278) |
| 6 | **Gateway CPU 飙高导致 Telegram 回复停滞** | 11 | 2 | Gateway 进入高 CPU 状态时 Telegram 轮询仍工作但回复管道卡死，`channels status --deep` 超时 | [#72338](https://github.com/openclaw/openclaw/issues/72338) |
| 7 | **代码中硬编码 `/Users/wangtao` 路径被合并发布** | 11 | 0 | **工程纪律问题**：开发者个人路径 hardcode 进入发布版本，损害项目专业形象 | [#51429](https://github.com/openclaw/openclaw/issues/51429) |

**诉求分析**：社区核心焦虑集中在**"部署即能用"的可靠性**（Docker、路径硬编码）、**生产级稳定性**（Gateway 性能、启动速度）、以及**多语言/多区域适配深度**（Feishu 编码、中文场景）。

---

## 5. Bug 与稳定性

### 🚨 按严重程度排列

| 级别 | Issue | 现象 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| **BLOCKER** | **v4.22→v4.26 显著性能退化** | 发送反应、信息回复明显变慢，标记为 regression | 🔴 **无 fix PR**，今日新报 | [#73501](https://github.com/openclaw/openclaw/issues/73501) |
| **CRITICAL** | **Gateway CPU 100% 后 Telegram 回复卡死** | 高 CPU 状态下回复管道停滞，status probe 超时，需重启恢复 | 🟡 PR #73884（Telegram 轮询）可能相关，但非根因修复 | [#72338](https://github.com/openclaw/openclaw/issues/72338) |
| **CRITICAL** | **Session write lock 泄漏导致 >30min 死锁** | 未处理的 promise rejection/stream 导致锁孤儿化 | 🔴 无 fix PR | [#49157](https://github.com/openclaw/openclaw/issues/49157) |
| **HIGH** | **Agent 幻觉工具调用成功（实际未执行）** | send email、create GitHub 等操作伪造成功响应 | 🔴 无 fix PR | [#41304](https://github.com/openclaw/openclaw/issues/41304) |
| **HIGH** | **Async task completion 报告丢失** | `system event --text` 非可靠会话定向，事件可能丢失或错误送达 | 🔴 无 fix PR | [#52305](https://github.com/openclaw/openclaw/issues/52305) |
| **HIGH** | **Cron job 在 Dashboard 不显示（2026.3.13 regression）** | Control UI 中 Cron 页面空白，`jobs.json` 存在但 UI 不渲染 | 🔴 无 fix PR | [#51871](https://github.com/openclaw/openclaw/issues/51871) |
| **HIGH** | **Webchat avatar 404 regression** | `/avatar/{agentId}` 返回 404，IDENTITY.md 配置无效 | 🔴 无 fix PR | [#38439](https://github.com/openclaw/openclaw/issues/38439) |
| **MEDIUM** | **Gemini reasoning 泄漏到聊天** | 内部思维链作为常规文本输出给用户（Telegram 可见） | 🔴 无 fix PR，此前 #1305/#26551 修复后复发 | [#41494](https://github.com/openclaw/openclaw/issues/41494) |
| **MEDIUM** | **Plugin `before_agent_start` hook 永久挂起** | 网络调用永不 resolve 时无超时、无日志、无恢复，需重启 Gateway | 🔴 无 fix PR | [#48534](https://github.com/openclaw/openclaw/issues/48534) |
| **MEDIUM** | **Control UI 在 Chromium/Vivaldi 中挂起** | `<openclaw-app>` 未注册/渲染，Firefox 正常 | 🔴 无 fix PR | [#39889](https://github.com/openclaw/openclaw/issues/39889) |

**已关闭修复**：
- ✅ [#61701](https://github.com/openclaw/openclaw/issues/61701) Gateway 100% CPU（v2026.4.5）— 今日关闭，可能为历史问题
- ✅ [#40256](https://github.com/openclaw/openclaw/issues/40256) System prompt 排序破坏 LLM prefix caching — 已关闭

---

## 6. 功能请求与路线图信号

| 功能请求 | 热度 | 技术可行性 | 纳入下一版本信号 | 链接 |
|:---|:---:|:---:|:---|:---|
| **Masked Secrets：Agent 使用但不可见 API Key** | 👍 4 | 高 | 🔶 **强信号** — 安全基线需求，社区长期呼吁 | [#10659](https://github.com/openclaw/openclaw/issues/10659) |
| **私有网络访问开关 `tools.web.fetch.allowPrivateNetwork`** | 👍 4 | 高 | 🟢 **已有明确需求**，企业内网场景必需 | [#39604](https://github.com/openclaw/openclaw/issues/39604) |
| **路径级 RWX 权限替代二进制 allowlist** | 0 | 中 | 🔶 架构级改进，与安全模型相关 | [#39979](https://github.com/openclaw/openclaw/issues/39979) |
| **Fallback 审批模式 + 模型归因** | 0 | 中 | 🔶 透明度与可控性需求 | [#33975](https://github.com/openclaw/openclaw/issues/33975) |
| **可配置 Control UI 上传大小限制**（当前 5MB） | 0 | 高 | 🟢 简单配置扩展，易实现 | [#71142](https://github.com/openclaw/openclaw/issues/71142) |
| **多会话架构：共享 LLM + 隔离会话 + 公共知识库** | 0 | 低（架构级） | 🔴 长期 RFC，需设计评审 | [#48874](https://github.com/openclaw/openclaw/issues/48874) |
| **Reusable Gateway WebSocket Client SDK** | 👍 1 | 高 | 🟢 CLI 与 Control UI 重复实现，提取 SDK 合理 | [#49178](https://github.com/openclaw/openclaw/issues/49178) |

**PR 侧信号**：Nacos 配置中心（#49841）、SecretRef（#73822）、归档会话读取（#73883）表明 **企业部署、安全合规、运维可观测性** 是近期产品优先级。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 原声摘录 | Issue |
|:---|:---|:---|
| **Docker "开箱即败"** | "官方 Docker 容器运行 `openclaw onboard`，选 openai-whisper 直接报 `brew not installed`" | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| **升级恐惧** | "4.22→4.26 显著变慢，blocker 级 regression" | [#73501](https://github.com/openclaw/openclaw/issues/73501) |
| **配置模型失效** | "按文档放 agentDir 的 SOUL.md 完全没效果，只有 workspace 目录生效" | [#29387](https://github.com/openclaw/openclaw/issues/29387) |
| **信任崩塌** | "Agent 说邮件已发送、给了 id，但服务器根本没收到" | [#41304](https://github.com/openclaw/openclaw/issues/41304) |
| **工程信任危机** | "这位 wangtao 是谁？hardcode 个人路径居然被合并发布了" | [#51429](https://github.com/openclaw/openclaw/issues/51429) |

### 😊 正向反馈（隐含于需求表达）

- 用户深度使用多通道（Feishu/Telegram/WhatsApp/Discord）并主动提交边缘 case
- 企业用户推动 Nacos、SecretRef 等企业级功能，表明 OpenClaw 进入生产环境
- 社区贡献者（@VACInc 等）持续交付实时语音等前沿能力

---

## 8. 待处理积压

### ⏰ 长期未响应的高价值 Issue/PR（提醒维护者关注）

| Issue/PR | 创建时间 | 最后更新 | 悬置天数 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **Context/state lost after unexpected compaction** | 2026-01-27 | 2026-04-29 | **92天** | Agent 无上下文窗口可见性，导致意外压缩和状态丢失，基础体验问题 | [#2597](https://github.com/openclaw/openclaw/issues/2597) |
| **Safe/Unsafe ClawdBot 模式** | 2026-02-02 | 2026-04-29 | **86天** | 沙箱安全模型讨论，Rust 重写建议，架构级决策需维护者表态 | [#6731](https://github.com/openclaw/openclaw/issues/6731) |
| **Masked Secrets** | 2026-02-06 | 2026-04-29 | **82天** | 安全红线，防止 prompt injection 提取凭证，社区 👍 最高功能请求之一 | [#10659](https://github.com/openclaw/openclaw/issues/10659) |
| **Docker skill 安装失败** | 2026-02-12 | 2026-04-29 | **76天** | 新用户 onboarding 阻断，27 评论高热度，无维护者明确方案 | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| **Feishu 消息恢复模块 PR** | 2026-03-17 | 2026-04-29 | **43天** | 飞书离线消息丢失的完整修复方案，已提交 PR #48946，未合并 | [#48946](https://github.com/openclaw/openclaw/pull/48946) |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issue 日活跃/关闭比 | 487:13 | **37.5:1** — 关闭率极低，积压加速 |
| PR 日合并/关闭比 | 34:466 | **6.8% 日吞吐** — 审查瓶颈严重 |
|  blocker 级问题 | 1 个新增 | 性能回归，需紧急响应 |
| 无评论/无 👍 的沉默 Issue 占比 | 估算 >60% | 社区参与深度不均 |

> **建议**：维护团队需优先建立 v4.26 性能回归的专项响应，同时提升 PR 审查吞吐或引入分级合并机制，避免 466 个待合并 PR 的技术债务雪球。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析

**报告日期**：2026-04-29 | **分析范围**：10 个活跃开源项目

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从"功能竞赛"向"生产就绪"转型的关键节点**。头部项目（OpenClaw、IronClaw、ZeroClaw）日均 PR 量达 30-50，但合并率分化严重（2%-83%），技术债务与审查瓶颈成为普遍挑战。多通道适配（Telegram/Discord/飞书/企业微信）已成基线能力，社区焦点正向**企业级安全合规**（SecretRef、Landlock LSM、Masked Secrets）、**长期记忆架构**（CerebroCortex、Dream Mode）和**本地/边缘推理**（OpenVINO、Ollama）迁移。语音交互、实时传输、MCP 协议等前沿能力快速落地，但稳定性回归（v4.22→v4.26 性能退化、Zig 0.16 CPU 飙高）频繁打断用户信任积累。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已处理） | 今日 Release | 合并率 | 健康度评估 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 487 / 13 | 466 / 34 | v2026.4.26 | 6.8% | 🟡 **承压迭代** — 极高活跃度但审查瓶颈严重，blocker 级回归未修复 |
| **NanoBot** | 3 / 10 | 20 / 16 | 无 | 44% | 🟢 **稳健迭代** — 快速响应，Windows 平台质量为短板 |
| **Hermes Agent** | 50 / 4 | 40 / 10 | 无 | 20% | 🟡 **安全警报** — 6 个 P1-P2 安全 Issue 零修复，合并吞吐不足 |
| **PicoClaw** | 13 / 4 | 10 / 6 | 无 | 38% | 🟡 **边缘聚焦** — 硬件集成活跃，Android 成熟度显著落后 |
| **NanoClaw** | 3 / 0 | 13 / 11 | 无 | 46% | 🟢 **v2 成型期** — 渠道矩阵完备，生产阻塞项（root 崩溃、Discord 路由）待解 |
| **NullClaw** | 1 / 0 | 1 / 1 | 无 | 50% | 🟡 **修复优先** — Zig 0.16 回归阻断生产，功能 PR 积压 22 天 |
| **IronClaw** | 26 / 4 | 30 / 16 | 无 | 35% | 🟡 **架构冲刺** — Reborn 大规模落地，3 条 canary 告警需紧急响应 |
| **LobsterAI** | 3 / 0 | 24 / 23 | 无 | 49% | 🟢 **密集修复** — Gateway 稳定性集中歼灭，安全 PR 积压 34 天 |
| **Moltis** | 3 / 2 | 3 / 15 | 20260428.03 | 83% | 🟢 **高质量交付** — 合并率生态最高，功能-体验-安全三维推进 |
| **CoPaw/QwenPaw** | 25 / 18 | 11 / 20 | v1.1.5-beta.1 | 65% | 🟢 **性能攻坚** — 前端虚拟化+请求去重，会话状态管理仍为痛点 |
| **ZeptoClaw** | 0 / 0 | 15 / 0 | 无 | 0% | 🔴 **维护停滞** — 纯 Dependabot 依赖更新，零人工合并 |
| **ZeroClaw** | 16 / 4 | 43 / 1 | 无 | 2.3% | 🟡 **高积压风险** — Microkernel RFC 采纳里程碑，但合并吞吐量崩溃 |
| **TinyClaw** | — | — | — | — | ⚪ **无活动** |

> **注**：TinyClaw 过去 24 小时零活动；ZeptoClaw 15 个 PR 全部为 Dependabot 自动提交。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 487 活跃 Issue / 466 待合并 PR，绝对数量级领先 | 2-10× 于 NanoBot、NanoClaw 等中型项目，但 IronClaw（30 PR）、ZeroClaw（43 PR）在单日产出密度上接近 |
| **技术路线** | **"全栈网关"模式**：统一 Gateway 中继多通道（Feishu/Telegram/WhatsApp/Discord），Control UI + CLI 双入口，实时语音/浏览器传输前沿能力 | 与 IronClaw（Rust 微内核/能力租赁）、Moltis（Rust+Landlock 安全沙箱）形成架构光谱两端；OpenClaw 更重"集成广度"，后者更重"安全深度" |
| **核心优势** | ① **通道生态最完整**（企业微信/飞书/钉钉本土化深度）；② **实时语音**（generic browser realtime transport）领先同代；③ **企业级功能密度**（Nacos 配置中心、归档会话、SecretRef） | NanoBot/NanoClaw 通道覆盖相近但企业功能薄；Hermes 记忆架构讨论活跃但实现滞后 |
| **结构性短板** | ① **审查吞吐量危机**：34/500 日合并比，466 PR 积压；② **稳定性信任损耗**：v4.26 性能回归、Gateway CPU 飙高、硬编码路径等工程纪律问题；③ **Docker "开箱即败"**：skill 安装依赖 Homebrew 的架构级缺陷 | Moltis（83% 合并率）、CoPaw（65%）在交付节奏上显著更可控；PicoClaw 同样受 Android 成熟度拖累 |

**定位结论**：OpenClaw 是生态中**"功能最全面、企业适配最深、但质量波动最大"**的头部项目，正面临从"快速功能扩张"向"可持续交付"转型的组织能力建设挑战。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与信号强度 |
|:---|:---|:---|
| **🔒 安全合规与企业部署** | OpenClaw、Hermes、Moltis、ZeroClaw、LobsterAI | OpenClaw #73822 SecretRef（PII 脱敏）、Hermes 6 个安全 Issue 集中披露（SSRF/路径遍历/提权）、Moltis #866 Landlock LSM 内核沙箱、ZeroClaw #6188 `enc2:` 加密身份轮换缺陷、LobsterAI #908/#909 MCP 命令注入/技能扫描绕过（积压 34 天） |
| **🧠 长期记忆架构** | Hermes、PicoClaw、ZeroClaw、CoPaw | Hermes #7896 CerebroCortex（类脑关联网络/梦境巩固，10 评论高关注）、PicoClaw #2217 Token 统计仪表盘（记忆成本可见性）、ZeroClaw #5849 Dream Mode（睡眠记忆巩固，5 评论）、CoPaw #3905 MEMORY.md 空白（记忆系统失效痛点） |
| **🌐 多通道本土化适配** | OpenClaw、NanoBot、NanoClaw、PicoClaw、LobsterAI、CoPaw | 飞书编码（OpenClaw #48788、LobsterAI #1866、NanoBot #3502 done emoji 时机）、企业微信（NanoBot #3331、CoPaw 钉钉引用消息 #3747）、Telegram 轮询假死（OpenClaw #73884、NanoClaw #2080/#2079 熔断探索）、QQ/Napcat（NanoBot #3509） |
| **⚡ 本地/边缘推理** | PicoClaw、NanoBot、ZeroClaw、LobsterAI | PicoClaw #2703 Intel OpenVINO（CPU/GPU/NPU）、NanoBot #3513 本地 Whisper、ZeroClaw #6180 llama-server 配置失效、LobsterAI #1813 DeepSeek V4 兼容 |
| **🔧 MCP 协议生态** | NanoClaw、CoPaw、PicoClaw、IronClaw | NanoClaw #2074 MCP args 类型污染、CoPaw #3904 MCP 超时透传 + #2495 工具可视化、PicoClaw #2696 动态 HTTP Header、IronClaw Reborn 的 MCP 运行时 #3027 |
| **🎙️ 语音/实时交互** | OpenClaw、Moltis、CoPaw | OpenClaw v2026.4.26 实时语音 + Gateway 中继、Moltis #916 Voice Personas（确定性 TTS 身份）、CoPaw #3574 Whisper 替代 Web Speech API |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多通道网关、实时语音、Control UI 可视化 | 中大型企业 IT 团队、需要飞书/钉钉/企业微信深度集成的组织 | Node.js/TypeScript 单体，Gateway 集中式中继，插件化 Skill 生态 |
| **NanoBot** | 快速扩展的通道生态（QQ/Napcat/Matrix）、本地推理兼容 | 中文社区开发者、个人极客、多平台尝鲜用户 | Python 异步架构，模块化 provider 系统，强调"开箱即用" |
| **Hermes Agent** | TUI 体验打磨、多平台网关（Telegram/Discord/Matrix/Slack） | 终端优先的开发者、偏好本地运行的隐私敏感用户 | Python，MEMORY.md/USER.md 文件级记忆，强调"可审计的本地运行" |
| **PicoClaw** | 边缘 AI/硬件集成（串口/MQTT/OpenVINO）、Android 端侧部署 | IoT 开发者、嵌入式场景、Sipeed 硬件生态用户 | Go 语言，轻量级二进制，面向资源受限设备 |
| **NanoClaw** | v2 多租户架构、智能体间中继、灾难恢复 | SaaS 化部署者、多用户协作场景 | 容器化微服务，per-agent 隔离，PostgreSQL 持久化 |
| **Moltis** | 安全沙箱（Landlock）、多源导入生态、确定性语音身份 | 企业安全合规团队、从 Claude Code/Hermes 迁移的用户 | Rust 全栈，内核级隔离，自更新机制，UX 对标主流产品 |
| **CoPaw/QwenPaw** | ACP 协议、前端性能优化、魔塔社区生态 | 中国开发者、阿里云/魔塔社区用户、需要钉钉/QQ 集成的团队 | TypeScript/React 前端重，混合存储，ACP 作为差异化协议 |
| **IronClaw** | Reborn 微内核架构、WASM/脚本运行时、能力租赁模型 | 协议实验室、NEAR 生态开发者、需要高度可扩展安全模型的团队 | Rust 微内核（ironclaw_substrate），Capability-based 安全，WebAssembly 隔离 |
| **ZeroClaw** | Microkernel 架构转型、Web 仪表盘一等公民、多智能体协作 | 自托管爱好者、Yocto/嵌入式 Linux 用户、追求架构纯粹性的贡献者 | Zig 语言，从零构建微内核，配置即代码（tenant blueprints） |
| **NullClaw** | Zig 极简实现、Cron 子代理引擎 | 系统编程爱好者、追求极致轻量的边缘部署者 | Zig 全栈，单二进制，无运行时依赖 |

**架构光谱**：IronClaw/ZeroClaw/Moltis 形成 **Rust/Zig 系统语言安全优先** 阵营；OpenClaw/NanoBot/CoPaw 形成 **TypeScript/Python 快速迭代** 阵营；PicoClaw 独占 **Go 边缘嵌入**  niche。

---

## 6. 社区热度与成熟度

| 层级 | 项目 | 特征 |
|:---|:---|:---|
| **🔥 快速迭代期**（功能扩张，合并率>40%） | Moltis、CoPaw、NanoBot | Moltis 83% 合并率+功能密集交付；CoPaw 前端性能攻坚+ACP 协议扩展；NanoBot 通道/模型生态快速补全 |
| **⚡ 架构转型期**（大规模重构，合并率波动） | IronClaw、ZeroClaw、NanoClaw | IronClaw Reborn cutover 密集 PR 但 canary 告警；ZeroClaw Microkernel RFC 采纳但合并率 2.3%；NanoClaw v2 渠道矩阵成型但生产阻塞项待解 |
| **🛠️ 质量巩固期**（修复优先，功能积压） | OpenClaw、NullClaw、PicoClaw | OpenClaw v4.26 回归+Gateway 稳定性；NullClaw Zig 0.16 生产回归；PicoClaw Android 质量短板 |
| **🚨 安全警报期**（漏洞集中暴露，响应滞后） | Hermes、LobsterAI | Hermes 6 安全 Issue 零 fix PR；LobsterAI #908/#909 安全 PR 积压 34 天 |
| **💤 维护停滞期**（零人工活动） | ZeptoClaw、TinyClaw | ZeptoClaw 纯 Dependabot；TinyClaw 完全静默 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **🛡️ "安全左移"成为差异化核心** | Moltis Landlock LSM、IronClaw Reborn 能力租赁、ZeroClaw HMAC tool receipts、Hermes 安全 Issue 集中披露 | AI Agent 的**工具调用权限模型**正从"事后审计"转向"事前强制"，Capability-based 安全（Rust 阵营）vs 应用层沙箱（Node.js/Python 阵营）将形成长期架构分歧。建议新入局者优先评估 `landlock`/`seccomp`/`pledge` 等内核机制 |
| **🧠 记忆系统从"token 预算"向"认知架构"演进** | Hermes CerebroCortex（关联网络/衰减/梦境）、ZeroClaw Dream Mode、PicoClaw Token 统计 | 简单 RAG/MEMORY.md 已触及生产力瓶颈，**类脑记忆**（稀疏激活、睡眠巩固、情绪标记）可能成为下一代差异化。关注神经科学启发的架构（如 #7896 的全息记忆 PR #17181） |
| **🔌 MCP 从"工具协议"向"Agent 互联网"升级** | CoPaw ACP 协议、NanoClaw 智能体间中继、IronClaw MCP 运行时 WASM 隔离 | MCP + ACP 的组合暗示**Agent 间标准化通信**正在形成，但协议碎片化风险（各家扩展字段不兼容）需警惕。建议贡献者向 `modelcontextprotocol.io` 上游反馈而非各自为政 |
| **📡 实时语音/浏览器传输进入主航道** | OpenClaw generic browser realtime transport、Moltis Voice Personas | 文本→语音→实时双向流的演进速度超预期，**WebRTC/DataChannel** 可能成为 Agent 交互的默认传输层，传统 HTTP 轮询架构需预留升级路径 |
| **🏭 企业部署摩擦成本显性化** | OpenClaw Docker skill 安装失败、NanoClaw root 崩溃、ZeroClaw `enc2:` 身份轮换、CoPaw Debian 非 root 冻结 | **"root 才能跑"** 和 **"重装即丢数据"** 已成为企业采纳的硬性阻断。建议所有项目将非 root 运行、配置加密备份、systemd 服务模板纳入发布基线 |
| **🌏 中文生态深度适配成为必争之地** | NanoBot QQ/Napcat、CoPaw 钉钉/QQ/魔塔、LobsterAI 有道云笔记/百度千帆/小米 Mimo、OpenClaw 飞书编码 | 中国市场特有的 IM 协议（钉钉/企业微信/飞书）和模型供应商（百度千帆/小米 Mimo/通义千问）适配深度，正从"加分项"变为"入场券"。海外项目（Hermes/Moltis）若忽视此点将丧失增长空间 |

---

*本报告基于 2026-04-29 各项目 GitHub 公开数据生成，适合用于技术选型评估、贡献优先级决策及生态投资方向判断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-29

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-04-29 | **分析师**: AI 智能体开源项目分析师

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度、快速迭代**态势：24小时内 36 个 PR 更新（20 待合并/16 已处理）、13 个 Issue 更新（10 关闭/3 活跃），无新版本发布。社区聚焦**通道生态扩展**（QQ/Napcat、WhatsApp、Matrix、企业微信修复）、**模型供应商兼容性**（Gemma/Gemini 路由、ZenMux、OpenAI extra_body）及**稳定性加固**（原子写入、会话隔离、内存优化）。维护者响应迅速，10 个 Issue 当日关闭，但 20 个待合并 PR 显示功能积压需加速 review。

---

## 2. 版本发布

**无新版本发布。** 最新版本仍为此前版本，但密集的功能 PR 暗示 patch 或 minor 版本可能临近。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（16 条中的核心项）

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#3505** feat(web_search): add olostep provider | chengyongru | **搜索能力扩展**：Olostep 搜索提供商从 nightly 回退合并至 main，补全商业搜索选项 | [PR #3505](https://github.com/HKUDS/nanobot/pull/3505) |
| **#3405** feat(web_search): add olostep provider | umerkay | 原 nightly 实现，与 #3505 形成完整 backport 闭环 | [PR #3405](https://github.com/HKUDS/nanobot/pull/3405) |
| **#3502** fix(feishu): 修复 done emoji 时机 | BarclayII | **飞书体验修复**：DONE 表情和 OnIt 移除仅在任务真正结束时触发，避免多轮 tool-call 中间状态误触 | [PR #3502](https://github.com/HKUDS/nanobot/pull/3502) |
| **#3500** feat(profiler): add module-level profiler | RongLei-intel | **性能观测基建**：模块级 profiler + span tracing，但当日被关闭，疑似由 #3501 替代 | [PR #3500](https://github.com/HKUDS/nanobot/pull/3500) |
| **#3491** feat(providers): add extra_body config | hussein1362 | **本地推理兼容性**：OpenAI 兼容端点支持透传自定义参数，解决 vLLM/LM Studio/Ollama 等场景痛点 | [PR #3491](https://github.com/HKUDS/nanobot/pull/3491) |
| **#2740** feat(cli): add --config option to channels login/status | masterlyj | **CLI 易用性**：通道管理命令支持自定义配置文件路径，多实例部署场景刚需 | [PR #2740](https://github.com/HKUDS/nanobot/pull/2740) |

**整体推进评估**：项目今日在**企业集成**（飞书、企业微信修复）、**开发者体验**（CLI config、profiler）、**基础设施兼容性**（搜索、本地推理）三个维度均有实质进展，属于**中等偏上的功能迭代日**。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 热度分析 | 链接 |
|:---|:---|:---|:---|
| **#217** Does it support kimi? | 6 | **供应商兼容性诉求**：用户主动提出贡献 Kimi (Moonshot) 支持，反映中文大模型生态接入需求强烈；已关闭但无明确结论，可能转化为后续 PR | [Issue #217](https://github.com/HKUDS/nanobot/issues/217) |
| **#490** 记忆系统优化计划 | 5 | **架构级关切**：中文社区核心提问，涉及长期记忆能力——NanoBot 作为"有状态的 AI 智能体"的关键差异化点；已关闭但无公开路线图回应 | [Issue #490](https://github.com/HKUDS/nanobot/issues/490) |
| **#3473** WebSocket 远程访问失败 | 3 | **部署场景痛点**：0.0.0.0 绑定后 WebSocket 连接问题，反映从本地 demo 到生产部署的 gap | [Issue #3473](https://github.com/HKUDS/nanobot/issues/3473) |

### 新兴热点 PR

| PR | 亮点 | 链接 |
|:---|:---|:---|
| **#3513** feat(audio): unify transcription providers + local Whisper | **语音基建重构**：统一转写提供商、支持本地 Whisper，解决"沉默失败"和隐私场景 | [PR #3513](https://github.com/HKUDS/nanobot/pull/3513) |
| **#3516** feat(session): automatic cleanup of expired sessions | **运维自动化**：会话过期清理，15d/24h/30m 人性化配置，长期运行实例的内存泄漏防护 | [PR #3516](https://github.com/HKUDS/nanobot/pull/3516) |

**背后诉求分析**：社区正从"能跑通"向**生产级部署**（远程访问、会话管理、内存控制）、**多模态能力**（语音转写）、**中文生态深度集成**（Kimi、QQ、企业微信）演进。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | **#3506** Matrix Windows 发送失败 | `WinError 123`：Matrix user_id 含冒号导致 nio store 文件路径非法，**完全阻断 Windows 用户 outbound 消息** | Open | **#3510** 已提交待合并 | [Issue #3506](https://github.com/HKUDS/nanobot/issues/3506) |
| 🔴 **高** | **#3511** sender_id 未传入 LLM 上下文 | **群聊场景身份识别失效**：Discord 群聊中无法区分不同用户，多用户家庭/团队场景核心功能断裂 | Open | 无 | [Issue #3511](https://github.com/HKUDS/nanobot/issues/3511) |
| 🟡 **中** | **#3504** restrict_to_workspace 路径逃逸 | 沙箱安全机制可被环境变量、命令替换、符号链接绕过，**安全加固需求** | Closed | 无（安全设计讨论） | [Issue #3504](https://github.com/HKUDS/nanobot/issues/3504) |
| 🟡 **中** | **#3494** history.jsonl 加载进上下文 | **Token 爆炸**：162k/65k (287%)，历史文件自身被误读为对话内容，预算机制失效 | Closed | 无明确关联 PR | [Issue #3494](https://github.com/HKUDS/nanobot/issues/3494) |
| 🟡 **中** | **#3410** v0.1.5.post2 内存暴涨 3x | 200MB → 600MB，疑似 "dream" 功能引入，**资源敏感场景回归** | Closed | 无明确关联 PR | [Issue #3410](https://github.com/HKUDS/nanobot/issues/3410) |
| 🟡 **中** | **#3488** Telegram 附件 MIME 类型错误 | `application.octet-stream` 导致 HTML 等文件无法被正确打开 | Closed | 无明确关联 PR | [Issue #3488](https://github.com/HKUDS/nanobot/issues/3488) |
| 🟢 **低** | **#3324** WinError 193 chrome-devtools-mcp | Windows 上 npx 调用失败，32/64 位应用兼容问题 | Closed | 无明确关联 PR | [Issue #3324](https://github.com/HKUDS/nanobot/issues/3324) |
| 🟢 **低** | **#3328** deepseek "failed to deserialize" | 0.1.5 → 0.1.5.post1 升级后 Telegram 消息报错 | Closed | 无明确关联 PR | [Issue #3328](https://github.com/HKUDS/nanobot/issues/3328) |

**稳定性评估**：Windows 平台有两处显著问题（Matrix #3506、MCP #3324），显示跨平台测试覆盖不足；内存与 Token 预算问题提示资源管理机制需系统性 review。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **#3512** SwarmScore 集成提案 | 为 AI Agent 引入可移植信任评分系统 | ⭐⭐☆ 观望 | 纯外部推广，0 评论，与项目核心方向关联度待验证 |
| **#3513** 语音转写统一 + 本地 Whisper | 重构音频基础设施 | ⭐⭐⭐⭐ 高 | 已有完整 PR，解决实际痛点，技术方案成熟 |
| **#3509** Napcat (QQ) 通道 | 比官方 QQ Bot 更丰富的功能 | ⭐⭐⭐⭐ 高 | PR 已提交，功能完整（图片、欢迎语、回复策略），中文社区强需求 |
| **#3507** 按提供商生成配置 | maxTokens/temperature/reasoningEffort 提供商级隔离 | ⭐⭐⭐⭐ 高 | PR 已提交，解决多模型切换时的配置摩擦 |
| **#3481** 会话级历史隔离 | 防止多通道历史混杂 | ⭐⭐⭐⭐ 高 | PR 已提交，问题描述清晰，影响所有多通道用户 |
| **#3501** Profiler + Span Tracing | 模块级性能观测 | ⭐⭐⭐☆ 中高 | PR 已提交，企业/生产场景刚需，但 #3500 被关闭需关注替代关系 |
| **#3144** AgentHiFive 集成 | MCP-backed 后端、审批流、保险库通道 | ⭐⭐⭐☆ 中高 | 长期 open PR，架构较重，需维护者深度 review |
| **#217** Kimi 支持 | Moonshot AI 中文模型 | ⭐⭐⭐☆ 中高 | 用户主动提出贡献，社区意愿强，缺官方回应 |
| **#490** 记忆系统优化 | 长期记忆架构升级 | ⭐⭐☆ 中低 | 已关闭但无实质回应，路线图信号不明 |

**下一版本信号**：通道生态（QQ、WhatsApp、Matrix 修复）、语音能力、提供商配置隔离、会话历史隔离 四项最可能进入近期 release。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **家庭/团队共享 Bot** | #3511 optingo | "bot cannot identify who is sending a message" — 群聊身份匿名化导致个性化服务不可能 |
| **远程服务器部署** | #3473 firdota | WebUI 默认 127.0.0.1，改 0.0.0.0 后 WebSocket 断裂 — 从 localhost 到 production 的鸿沟 |
| **多模型切换** | #3515 masterlyj | `reasoning_effort="none"` 在 Gemini/gemma 上 400 错误 — 配置语义跨模型不兼容 |
| **Windows 开发者** | #3506 allanpk716, #3324 zhouenxian | 路径冒号、Win32 应用兼容性 — 跨平台体验明显滞后于 Linux/macOS |
| **Token 预算失控** | #3494 z172581342 | "Context: 162k/65k (287%)" — 历史文件反噬自身，预算机制形同虚设 |
| **升级回归焦虑** | #3410 gqcao, #3328 dreo1337 | 小版本升级 (0.1.4→0.1.5.post2) 内存 3x 暴涨、序列化报错 — 稳定性信任受损 |

### 满意点

- 项目响应速度：**10/13 Issue 当日关闭**，维护者活跃
- 扩展意愿：用户主动提出贡献 Kimi 支持，社区参与度高
- 功能丰富度：多通道、多模型、搜索、语音等能力持续扩展

---

## 8. 待处理积压

| 类型 | 项目 | 天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| **PR 长期未决** | **#3144** AgentHiFive 集成 | 15 天 | 架构冲突、review 负担重 | 维护者需明确接受标准或拆分合并 |
| **PR 长期未决** | **#3331** 企业微信 WebSocket 修复 | 9 天 | 企业用户通道阻塞 | 加速 review，与 #3502 飞书修复形成企业 IM 闭环 |
| **PR 长期未决** | **#3487** 按通道进度控制 | 2 天 | 功能完整但淹没在新 PR 中 | 优先级标记，避免新功能积压 |
| **Issue 关闭无结论** | **#490** 记忆系统优化 | 76 天 | 核心架构问题被回避 | 维护者需公开路线图或转化为 discussion |
| **Issue 关闭无结论** | **#217** Kimi 支持 | 82 天 | 中文模型生态错失 | 明确贡献指南，或官方声明支持计划 |
| **Issue 关闭无结论** | **#223** 多模态支持 (stale) | 82 天 | Roadmap top item 无进展 | 更新 roadmap 状态，避免预期管理失效 |

---

## 附录：今日全部开放 PR 速查（20 条）

| # | 标题 | 作者 | 链接 |
|:---|:---|:---|:---|
| #3516 | feat(session): add automatic cleanup of expired sessions | Zozi96 | [PR](https://github.com/HKUDS/nanobot/pull/3516) |
| #3515 | Fix reasoning_effort="none" handling and add gemma to Gemini routing | masterlyj | [PR](https://github.com/HKUDS/nanobot/pull/3515) |
| #3514 | fix(whatsapp): strip device suffix from JIDs | mcampo | [PR](https://github.com/HKUDS/nanobot/pull/3514) |
| #3513 | feat(audio): unify transcription providers and add local Whisper support | hussein1362 | [PR](https://github.com/HKUDS/nanobot/pull/3513) |
| #3510 | fix: sanitize Matrix user_id for Windows-safe store file names | JiajunBernoulli | [PR](https://github.com/HKUDS/nanobot/pull/3510) |
| #3509 | feat(channels): Add Napcat (QQ) channel | LZDQ | [PR](https://github.com/HKUDS/nanobot/pull/3509) |
| #3508 | fix(memory): ensure atomic write for history.jsonl | yorkhellen | [PR](https://github.com/HKUDS/nanobot/pull/3508) |
| #3507 | feat: per-provider generation config | JagoWang | [PR](https://github.com/HKUDS/nanobot/pull/3507) |
| #3503 | feat: add ZenMux provider support | Burningiron | [PR](https://github.com/HKUDS/nanobot/pull/3503) |
| #3501 | feat: Add module-level profiler API and integrate span tracing | RongLei-intel | [PR](https://github.com/HKUDS/nanobot/pull/3501) |
| #3487 | fix(channels): support per-channel progress controls | boogieLing | [PR](https://github.com/HKUDS/nanobot/pull/3487) |
| #3481 | feat(history): session scoped history | dzydzydzy7 | [PR](https://github.com/HKUDS/nanobot/pull/3481) |
| #3331 | fix(wecom): fix WebSocket client initialization and event handlers | JagoWang | [PR](https://github.com/HKUDS/nanobot/pull/3331) |
| #3144 | [codex] add AgentHiFive integration | supersantux | [PR](https://github.com/HKUDS/nanobot/pull/3144) |

> **健康度评分**: 7.5/10 — 高活跃度与快速响应为强项，但 Windows 平台质量、长期 PR 积压、核心架构（记忆/多模态）路线图透明度为减分项。

---

*本报告基于 GitHub 公开数据自动生成，仅供项目分析与社区参考。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-29

---

## 1. 今日速览

Hermes Agent 今日保持**极高活跃度**，24小时内 Issues 和 PR 各更新 50 条，但**关闭率偏低**（Issues 仅关闭 4/50，PR 合并/关闭 10/50），显示社区涌入大量新反馈而维护吞吐存在瓶颈。值得关注的是，今日出现**6个安全相关 Issue**（P1-P2 级别）集中披露，涉及 SSRF 绕过、路径遍历、终端工具提权等攻击面；同时 Telegram 和 TUI 体验优化成为 PR 主力方向。无新版本发布。

---

## 2. 版本发布

**无** — 今日未发布新版本。

---

## 3. 项目进展

### 已合并/关闭的 PR（10 条中的关键项）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#16396](https://github.com/NousResearch/hermes-agent/pull/16396) | Referralconsequently | **修复 macOS launchd 网关状态检测**：改用 `launchctl print` 作为真相源，避免环境变量泄漏输出 | ✅ 已合并 |
| [#17179](https://github.com/NousResearch/hermes-agent/pull/17179) | ZippyZebra75 | ~~Telegram DM 草稿流式传输~~（被 #3412 取代） | ❌ 已关闭 |
| [#17176](https://github.com/NousResearch/hermes-agent/pull/17176) | ZippyZebra75 | ~~Telegram `reply_to_mode` 配置映射~~（被 #17183 取代） | ❌ 已关闭 |

### 待合并的核心 PR（40 条中的亮点）

| PR | 作者 | 推进方向 |
|:---|:---|:---|
| [#3412](https://github.com/NousResearch/hermes-agent/pull/3412) | NivOO5 | **Telegram 原生草稿流式传输**（DM 场景），替代高频 edit 方案，解决 30次/秒限流和闪烁问题 |
| [#17188](https://github.com/NousResearch/hermes-agent/pull/17188) | OutThisLife | TUI 鼠标追踪配置对齐文档，消除 `mouse_tracking` vs `tui_mouse` 配置歧义 |
| [#17175](https://github.com/NousResearch/hermes-agent/pull/17175) | austinpickett | **TUI LaTeX → Unicode 渲染**，解决数学公式显示为原始 LaTeX 的痛点 |
| [#17180](https://github.com/NousResearch/hermes-agent/pull/17180) | crayfish-ai | **修复 `/restart` 60秒死锁**：排除调用者自身的 drain 等待 |
| [#17184](https://github.com/NousResearch/hermes-agent/pull/17184) | dorukardahan | Slack 合成顶层线程避免设置 assistant 状态，减少 API 噪音 |

**整体评估**：今日 PR 以**体验打磨**（Telegram 流式、TUI 渲染、配置一致性）和**稳定性修复**（死锁、状态检测）为主，缺乏架构级突破。安全 Issue 的 fix PR 尚未出现，存在明显缺口。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) | 4 | `gateway install --system` 指向 base Python 而非 venv，导致服务崩溃 | [链接](https://github.com/NousResearch/hermes-agent/issues/7976) |
| [#16923](https://github.com/NousResearch/hermes-agent/issues/16923) | 2 | 请求 Claude CLI 后端（类似 OpenClaw 的 `claude -p` 合法接入）| [链接](https://github.com/NousResearch/hermes-agent/issues/16923) |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | 2 | Matrix 网关单向通信：能发不能收，mautrix 客户端启动异常 | [链接](https://github.com/NousResearch/hermes-agent/issues/7914) |
| [#7896](https://github.com/NousResearch/hermes-agent/issues/7896) | 2 | **CerebroCortex 记忆系统**：类脑关联网络、衰减、梦境巩固，替代 1300 token 限制 | [链接](https://github.com/NousResearch/hermes-agent/issues/7896) |
| [#17169](https://github.com/NousResearch/hermes-agent/issues/17169) | 2 | Anthropic 新 enforcement：Sonnet/Opus 4.6+ 在 Claude Max OAuth 下返回 429，Haiku 正常 | [链接](https://github.com/NousResearch/hermes-agent/issues/17169) |

### 背后诉求分析

- **合规焦虑**：#16923 反映用户对 Anthropic TOS 的谨慎态度，"legally use" 一词凸显平台政策不确定性带来的社区压力
- **记忆架构瓶颈**：#7896 获得关注说明当前 MEMORY.md/USER.md 的 token 硬上限已成为生产力瓶颈，用户需要**本地优先、语义搜索、自动知识组织**的三位一体方案
- **网关可靠性**：Matrix (#7914)、Telegram (#17063)、Discord (#17157) 的网关问题集中爆发，显示多平台适配的维护深度不足

---

## 5. Bug 与稳定性

### P1（严重，需立即处理）

| Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) | `gateway install --system` venv 路径错误，服务启动即崩溃 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/7976) |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | Matrix 网关接收消息完全失效 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/7914) |
| [#7968](https://github.com/NousResearch/hermes-agent/issues/7968) | `_last_content_with_tools` 回退绕过空响应重试，导致任务静默终止 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/7968) |
| [#17139](https://github.com/NousResearch/hermes-agent/issues/17139) | Cron `deliver=['telegram']` 无法解析投递目标 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/17139) |
| [#8030](https://github.com/NousResearch/hermes-agent/issues/8030) | 数据库 schema 迁移无事务保护，并发初始化不安全 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8030) |
| [#8032](https://github.com/NousResearch/hermes-agent/issues/8032) | **安全**：terminal tool 暴露 `force=True` 参数，LLM 可绕过所有安全检查 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8032) |
| [#8034](https://github.com/NousResearch/hermes-agent/issues/8034) | **安全**：本地浏览器后端完全跳过 SSRF 验证 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8034) |
| [#8035](https://github.com/NousResearch/hermes-agent/issues/8035) | **安全**：file_tools 未阻止读取 `~/.hermes/auth.json` 和 mcp-tokens | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8035) |

### P2（重要）

| Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|
| [#8029](https://github.com/NousResearch/hermes-agent/issues/8029) | 非原子 transcript 重写导致崩溃时数据丢失 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8029) |
| [#8038](https://github.com/NousResearch/hermes-agent/issues/8038) | `_flush_messages_to_session_db` 静默吞掉所有持久化错误 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8038) |
| [#8039](https://github.com/NousResearch/hermes-agent/issues/8039) | `model_metadata.py` 全局可变缓存线程不安全 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/8039) |
| [#17157](https://github.com/NousResearch/hermes-agent/issues/17157) | Discord slash 命令同步超时 | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/17157) |
| [#17171](https://github.com/NousResearch/hermes-agent/issues/17171) | openai-codex fallback 模型名 `gpt-5-4` 应为 `gpt-5.4` | 🔴 无 fix PR | [链接](https://github.com/NousResearch/hermes-agent/issues/17171) |

### 安全专项警报 🚨

今日 **tomqiaozc** 集中披露 6 个安全 Issue（#8031-#8035 及关联），形成完整的攻击链：
- **SSRF 绕过**：DNS rebinding TOCTOU (#8033) + 本地浏览器跳过验证 (#8034)
- **权限提升**：terminal `force=True` (#8032) + symlink 绕过写拒绝列表 (#8031)
- **凭证窃取**：auth.json/mcp-tokens 可读 (#8035)

**当前无任一安全 Issue 有 fix PR，建议维护者优先响应。**

---

## 6. 功能请求与路线图信号

| Issue/PR | 方向 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| #7896 CerebroCortex 记忆系统 | 类脑记忆架构（关联网络、衰减、梦境巩固） | ⭐⭐⭐ 高 — 与现有 #17181 全息记忆 PR 形成技术共振，社区需求强烈 | [链接](https://github.com/NousResearch/hermes-agent/issues/7896) |
| #16923 Claude CLI 后端 | 合规接入 Anthropic 订阅 | ⭐⭐ 中 — 需法律/政策评估，技术实现参考 OpenClaw 已有路径 | [链接](https://github.com/NousResearch/hermes-agent/issues/16923) |
| #3412 / #17179 Telegram 草稿流式 | DM 场景原生流式体验 | ⭐⭐⭐⭐ 极高 — PR 已就绪，替代方案明确，用户体验痛点清晰 | [链接](https://github.com/NousResearch/hermes-agent/pull/3412) |
| #17175 TUI LaTeX 渲染 | 数学公式可读性 | ⭐⭐⭐⭐ 极高 — PR 已开，影响面明确 | [链接](https://github.com/NousResearch/hermes-agent/pull/17175) |
| #7876 Cron 跳过上下文文件 | 脚本任务 token 优化 | ⭐⭐⭐ 高 — 改动小，收益明确（10-20k token/次） | [链接](https://github.com/NousResearch/hermes-agent/issues/7876) |
| #12688 可配置命令前缀 | Matrix/Mattermost 平台兼容 | ⭐⭐ 中 — 平台生态适配，需设计决策 | [链接](https://github.com/NousResearch/hermes-agent/issues/12688) |
| #10309 Session 级仓库固定 | 长会话代码场景连续性 | ⭐⭐⭐ 高 — 与压缩/恢复架构相关，技术债务清理 | [链接](https://github.com/NousResearch/hermes-agent/issues/10309) |

---

## 7. 用户反馈摘要

### 痛点

| 场景 | 典型反馈 | 来源 |
|:---|:---|:---|
| **配置迷雾** | "`context_window` 被静默忽略，调试两小时才发现要用 `context_length`" | [#8015](https://github.com/NousResearch/hermes-agent/issues/8015) |
| **平台命令冲突** | "Matrix 的 `/` 被平台拦截，Hermes 命令根本到不了 bot" | [#12688](https://github.com/NousResearch/hermes-agent/issues/12688) |
| **网关"假死"** | "Telegram 断网 20 次后永久离线，必须手动重启 gateway" | [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) |
| **记忆碎片化** | "过夜压缩后仓库身份丢失，对话漂移" | [#10309](https://github.com/NousResearch/hermes-agent/issues/10309) |
| **OAuth 歧视** | "同样的 Claude Max 订阅，Haiku 能用 Sonnet 不能，Anthropic 搞什么" | [#17169](https://github.com/NousResearch/hermes-agent/issues/17169) |

### 满意点

- **TUI 体验持续打磨**：`/mouse` 配置对齐、LaTeX 渲染等 PR 显示交互层在进化
- **多平台覆盖广度**：Telegram/Discord/Matrix/Slack 均有活跃维护者

### 不满意点

- **错误静默**：多处 "silently ignored"、"silently swallowed" 反馈 (#8015, #8038)
- **安全感知缺失**：terminal `force=True` 长期暴露在 schema 中未被发现

---

## 8. 待处理积压

### 长期未响应的高优先级 Issue（创建 > 2 周，无维护者回复）

| Issue | 创建 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| [#7976](https://github.com/NousResearch/hermes-agent/issues/7976) | 2026-04-11 | 2026-04-28 | **P1 系统服务崩溃**，影响所有 `--system` 部署 | [链接](https://github.com/NousResearch/hermes-agent/issues/7976) |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | 2026-04-11 | 2026-04-28 | **P1 Matrix 网关瘫痪**，平台功能完全不可用 | [链接](https://github.com/NousResearch/hermes-agent/issues/7914) |
| [#7968](https://github.com/NousResearch/hermes-agent/issues/7968) | 2026-04-11 | 2026-04-28 | **P1 任务静默终止**，用户无法感知失败 | [链接](https://github.com/NousResearch/hermes-agent/issues/7968) |
| [#7896](https://github.com/NousResearch/hermes-agent/issues/7896) | 2026-04-11 | 2026-04-28 | 高社区兴趣（类脑记忆），无维护者介入 | [链接](https://github.com/NousResearch/hermes-agent/issues/7896) |
| [#7886](https://github.com/NousResearch/hermes-agent/issues/7886) | 2026-04-11 | 2026-04-28 | Kimi vision 工具失效，👍 2（最高） | [链接](https://github.com/NousResearch/hermes-agent/issues/7886) |

### 建议维护者行动

1. **立即**：为 6 个安全 Issue 分配修复责任人（建议由 tomqiaozc 或核心安全成员承接）
2. **本周**：合并 #3412（Telegram 草稿流式）和 #17175（LaTeX 渲染），释放用户体验红利
3. **评估**：#7896 记忆架构提案是否值得开启 RFC 流程，避免社区创意流失

---

*日报生成时间：2026-04-29 | 数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-29

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内 Issues 更新17条（13条活跃/新开，4条关闭）、PR 更新16条（10条待合并，6条已合并/关闭）。项目核心进展集中在**稳定性修复**（cron重复发送、Slack推理泄漏）与**基础设施扩展**（Intel OpenVINO、MQTT、串口工具）。值得关注的是，两个重要功能 PR（OpenVINO、MQTT）经历"关闭-重开"循环，显示贡献者与维护者在功能合并标准上仍在磨合。Android 端和 Docker 构建链出现新的兼容性问题，需持续关注。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 **v0.2.7**（2026-04-27 发布）。昨日 v0.2.7 已暴露 cron 任务重复发送的回归问题（[#2687](https://github.com/sipeed/picoclaw/issues/2687)），相关修复 PR [#2689](https://github.com/sipeed/picoclaw/pull/2689) 已合并但尚未发版。

---

## 3. 项目进展

### 已合并/关闭的 PR（6条）

| PR | 类型 | 说明 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2689](https://github.com/sipeed/picoclaw/pull/2689) | Bug修复 | **修复 cron 重复发送报告**：`sessionKey` 在 cron 流程末段丢失导致消息去重失效 | 🔴 高：解决 v0.2.7 回归问题，直接影响生产稳定性 |
| [#2680](https://github.com/sipeed/picoclaw/pull/2680) | 重构 | 统一 `tool_calls` 与 `thought` 的消息协议格式（`payload.kind` 替代 `payload.thought`） | 🟡 中：技术债务清理，前端需同步适配 |
| [#2697](https://github.com/sipeed/picoclaw/pull/2697) | Bug修复 | 移除 `serial_windows.go` 未使用导入 | 🟢 低：代码质量 |
| [#2653](https://github.com/sipeed/picoclaw/pull/2653) | 功能 | **新增 MQTT 通道支持** | 🟡 中：IoT 场景扩展，但 PR 被关闭后状态存疑* |
| [#2673](https://github.com/sipeed/picoclaw/pull/2673) | 功能 | **新增跨平台串口工具支持**（Linux/macOS/Windows） | 🟡 中：硬件集成能力扩展 |
| [#2496](https://github.com/sipeed/picoclaw/pull/2496) | 功能 | Intel OpenVINO Model Server 支持（首次提交） | — 被关闭后由 [#2703](https://github.com/sipeed/picoclaw/pull/2703) 重开 |

> *MQTT PR #2653 标记为 CLOSED 但无明确拒绝理由，需确认是合并后关闭还是实际拒绝。

**整体评估**：今日合并以**稳定性修复**为核心，cron 去重 bug 的修复直接回应了 v0.2.7 用户的紧急反馈。两个硬件/边缘计算相关功能（串口、OpenVINO）进入代码库，显示项目向**边缘 AI 部署场景**延伸的战略意图。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 🥇 | [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 调用失败未重试 | **11条** | **生产级可靠性**：OpenRouter HTTP 500 导致任务挂死，用户要求指数退避重试机制 |
| 🥈 | [#2513](https://github.com/sipeed/picoclaw/issues/2513) Gateway 启动异常 | **7条** | **部署稳定性**：v0.2.6 二进制版在 Debian 13 上 gateway 进程异常退出 |
| 🥉 | [#2367](https://github.com/sipeed/picoclaw/issues/2367) Android 英文界面残留中文 | **5条** | **国际化完成度**：APK 设置页最后一屏标题未本地化 |

### 热点分析

- **#629** 是**2个月前创建的老问题**，昨日仍有活跃讨论，说明 LLM 提供商容错机制是长期痛点。用户场景为"长时间任务"，单次失败导致全部进度丢失，成本极高。
- **#2513** 涉及二进制分发版的可靠性，与源码构建的 Docker 场景形成对比，反映**多部署形态下的测试覆盖不足**。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | 状态 | 是否有 Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2687](https://github.com/sipeed/picoclaw/issues/2687) → [#2693](https://github.com/sipeed/picoclaw/pull/2693) | **沙箱逃逸**：`find /` 和 `ls /` 可绕过工作区沙箱 | 待合并 | ✅ [#2693](https://github.com/sipeed/picoclaw/pull/2693) |
| 🔴 **高** | [#2699](https://github.com/sipeed/picoclaw/issues/2699) | **Slack 推理泄漏**：多频道场景下 reasoning/thinking 输出发送到错误频道 | 已关闭 | ❓ 关闭原因不明，需确认是否已修复 |
| 🔴 **高** | [#629](https://github.com/sipeed/picoclaw/issues/629) | LLM 调用失败无重试，长任务挂死 | 开放 | ❌ 无 |
| 🟡 **中** | [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway 启动异常（v0.2.6 binary） | 开放 | ❌ 无 |
| 🟡 **中** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | **多用户群聊历史记录缺少发送者归因**（Discord 等） | 开放（今日新建） | ❌ 无 |
| 🟡 **中** | [#2310](https://github.com/sipeed/picoclaw/issues/2310) | WebUI 历史会话记录仅保留最近1-2条 | 开放（stale） | ❌ 无 |
| 🟡 **中** | [#2694](https://github.com/sipeed/picoclaw/issues/2694) | Android adb shell 运行证书验证失败（`x509`） | 开放（今日新建） | ❌ 无 |
| 🟢 **低** | [#2081](https://github.com/sipeed/picoclaw/issues/2081) | 工具反馈预览转义 Unicode 序列（`\u0026` 等） | 开放（stale） | ❌ 无 |
| 🟢 **低** | [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android 本地模型配置后仍显示"未配置" | 开放 | ❌ 无 |

### 关键风险

- **沙箱逃逸 #2693** 是安全红线问题，PR 已提交但待合并，建议优先审查。
- **Slack 推理泄漏 #2699** 涉及隐私泄露风险（用户 reasoning 内容发送到非目标频道），虽标记关闭但无明确修复说明，需维护者澄清。
- **v0.2.7 cron 重复发送**（[#2687](https://github.com/sipeed/picoclaw/issues/2687)）已通过 [#2689](https://github.com/sipeed/picoclaw/pull/2689) 修复，但尚未发版，用户需自行构建或等待 v0.2.8。

---

## 6. 功能请求与路线图信号

### 今日新增/活跃的功能请求

| Issue/PR | 领域 | 需求描述 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#2698](https://github.com/sipeed/picoclaw/issues/2698) | Agent | **Mission Control 支持**（当前仅 OpenClaw） | 🟡 中：架构层面需求，但涉及 launcher 改造，工作量较大 |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | Provider | **Intel OpenVINO Model Server**（本地 LLM 推理，CPU/GPU/NPU） | 🟢 **高**：PR 已重开，首次 #2496 关闭可能是流程问题，技术方向明确 |
| [#2701](https://github.com/sipeed/picoclaw/pull/2701) | Provider/Web | 模型管理增强：后端驱动 provider 选项、provider/model 规范化 | 🟢 **高**：WebUI 体验改进，与现有模型配置痛点直接相关 |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | MCP/Channel | MCP 每请求动态 HTTP Header（通道上下文透传 `mcp:*` 前缀） | 🟡 中：企业认证场景刚需，技术实现简洁 |
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) | Channel | **Email 作为原生通道** | 🟡 中：企业/科研场景需求明确，但通道维护成本高 |
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Channel | Web Chat 流式输出 | 🟡 中：体验优化，标记为 nice-to-have |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) | WebUI | Token 消耗统计仪表盘 | 🟢 高：运营成本可见性刚需，实现相对独立 |
| [#1587](https://github.com/sipeed/picoclaw/issues/1587) | Channel | **Mattermost 原生通道** | 🟡 中：已关闭，但 👍 2 为今日最高，社区需求真实存在 |

### 路线图信号

- **边缘/本地推理**是明确方向：OpenVINO PR 重开、串口工具合并，配合 Sipeed 硬件背景，PicoClaw 正强化**端侧 AI Agent** 定位。
- **企业级功能**（动态 MCP Header、Email 通道、Token 统计）密集出现，显示用户群体从个人开发者向团队/企业扩展。
- **Mission Control 的 OpenClaw 独占**成为架构痛点，PicoClaw 与 OpenClaw 的功能对齐可能是未来版本重点。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **长任务可靠性** | [#629](https://github.com/sipeed/picoclaw/issues/629) | "Server 偶尔返回 HTTP 500，任务直接挂死，没有重试" —— 生产环境不可接受 |
| **升级回归** | [#2687](https://github.com/sipeed/picoclaw/issues/2687) | "升级到 0.2.7 后，每次 cron 报告发两份" —— 版本升级引入新问题 |
| **历史记录丢失** | [#2310](https://github.com/sipeed/picoclaw/issues/2310) | "关闭页面后只剩最近1-2条，容器内 session 文件也只记录最后几条" —— 数据持久化缺陷 |
| **Android 体验断层** | [#2367](https://github.com/sipeed/picoclaw/issues/2367), [#2368](https://github.com/sipeed/picoclaw/issues/2368), [#2694](https://github.com/sipeed/picoclaw/issues/2694), [#2695](https://github.com/sipeed/picoclaw/issues/2695) | 国际化不完整、本地模型配置失效、证书验证失败、`.so` 文档缺失 —— **移动端成熟度显著落后于服务端** |
| **多用户混淆** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | "群聊中历史消息看不到是谁发的，所有用户共享一个 session" —— 协作场景基础功能缺失 |

### 积极信号

- **硬件集成热情**：串口工具 PR 贡献者主动测试 Pi Zero 2 W + Engram MCP 组合（[#2345](https://github.com/sipeed/picoclaw/pull/2345)）。
- **企业场景探索**：用户明确将 PicoClaw 用于"保守环境"的 Email 通道（[#2421](https://github.com/sipeed/picoclaw/issues/2421)）和"团队 Mattermost"（[#1587](https://github.com/sipeed/picoclaw/issues/1587)）。

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 创建时间 | 滞留原因 | 风险 |
|:---|:---|:---|:---|
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 重试机制 | 2026-02-22（**67天**） | 技术方案讨论充分（11条评论），无维护者承诺实现 | 生产可靠性口碑受损 |
| [#2310](https://github.com/sipeed/picoclaw/issues/2310) 历史记录丢失 | 2026-04-03（26天，stale） | 已标记 stale，用户多次补充复现步骤 | 数据持久化核心功能缺陷 |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) 多用户支持/Agent Shield | 2026-04-03（26天，stale） | **大型 PR**（多领域：agent/tool/config/build/docker），审查成本高 | 安全加固需求迫切，但合并阻力大 |
| [#2411](https://github.com/sipeed/picoclaw/pull/2411) SSE 流分块解析修复 | 2026-04-07（22天，stale） | 技术正确（解决内容丢失），但涉及流式协议核心 | 数据完整性风险，且已 stale |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) Android 英文界面残留中文 | 2026-04-05（24天，stale） | 国际化收尾工作，优先级被功能开发挤压 | 移动端专业形象受损 |

### 建议行动

1. **优先审查 #2693（沙箱逃逸修复）** 和 **确认 #2699 关闭原因**（Slack 推理泄漏是否真实修复）。
2. **为 #629 分配里程碑**：LLM 重试是基础设施级能力，建议纳入 v0.2.8 或 v0.3.0。
3. **拆分 #2313**：多用户支持 + Agent Shield 的巨型 PR 难以审查，建议按领域拆分为独立 PR。
4. **Android 专项**：近期 Android 问题密集爆发（[#2367](https://github.com/sipeed/picoclaw/issues/2367), [#2368](https://github.com/sipeed/picoclaw/issues/2368), [#2694](https://github.com/sipeed/picoclaw/issues/2694), [#2695](https://github.com/sipeed/picoclaw/issues/2695)），建议设立 Android 质量冲刺。

---

*日报生成时间：2026-04-29 | 数据来源：GitHub API 快照 | 项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-29

---

## 1. 今日速览

NanoClaw 今日展现**极高开发活跃度**：24 个 PR 在 24 小时内更新（11 个已合并/关闭，13 个待审阅），3 个新增 Issue 全部处于开放状态。社区聚焦 v2 架构的**稳定性加固**与**多平台渠道扩展**——Slack、Discord、Telegram 的修复密集落地，同时 OpenCode 替代方案相关 PR 集中关闭，显示该集成线已进入收尾阶段。值得关注的是，**两个独立的"启动熔断"PR 被提交后又快速关闭**，暗示 crash loop 防护需求紧迫但实现路径仍在探索。无新版本发布。

---

## 2. 版本发布

**无** — 今日未发布新版本。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（11 个）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#2083** | barkain | **三大渠道 + Codex 提供商 + 智能体间中继** — 一次性添加 Discord、Telegram、WhatsApp 适配器（含配对码支持），OpenAI Codex 作为新 agent provider，并实现智能体间消息自动回传至源渠道可见 | [qwibitai/nanoclaw#2083](https://github.com/qwibitai/nanoclaw/pull/2083) |
| **#2084** | ddaniels | **灾难恢复基础设施** — 每日全量快照、可插拔存储后端（本地/S3）、支持全量/按智能体恢复的 CLI | [qwibitai/nanoclaw#2084](https://github.com/qwibitai/nanoclaw/pull/2084) |
| **#1628 / #1776 / #1864** | talmosko-code | **OpenCode SDK 集成线闭环** — 从 v1 替代后端到 v2 原生 Provider，最终锁定 SDK 1.4.17 版本并解决覆盖层传播问题，三 PR 今日集中关闭 | [qwibitai/nanoclaw#1628](https://github.com/qwibitai/nanoclaw/pull/1628) · [qwibitai/nanoclaw#1776](https://github.com/qwibitai/nanoclaw/pull/1776) · [qwibitai/nanoclaw#1864](https://github.com/qwibitai/nanoclaw/pull/1864) |
| **#2008** | TerrifiedBug | **Telegram 富媒体原生渲染** — 图片/视频/音频从文档下载附件转为内联预览 | [qwibitai/nanoclaw#2008](https://github.com/qwibitai/nanoclaw/pull/2008) |
| **#2007** | TerrifiedBug | **消息 ID 规范化修复** — 解决 chat-sdk 复合 ID 与内部 `messages_in.id` 的拼接后缀不匹配导致的反应/编辑失效 | [qwibitai/nanoclaw#2007](https://github.com/qwibitai/nanoclaw/pull/2007) |
| **#2077** | gabi-simons | **会话 DB 重复消息防护** — `INSERT OR IGNORE` + trigger 升级，防止平台重复事件导致崩溃 | [qwibitai/nanoclaw#2077](https://github.com/qwibitai/nanoclaw/pull/2077) |
| **#2075** | gabi-simons | **Slack 设置流程闭环** — 补齐 welcome DM 和所有权绑定，与 Discord/Telegram 体验对齐 | [qwibitai/nanoclaw#2075](https://github.com/qwibitai/nanoclaw/pull/2075) |
| **#2080 / #2079** | Koshkoshinsk | **启动熔断机制（双 PR 探索后关闭）** — 指数退避防止 Discord gateway 限流和 Cloudflare IP 封禁，实现方案仍在迭代 | [qwibitai/nanoclaw#2080](https://github.com/qwibitai/nanoclaw/pull/2080) · [qwibitai/nanoclaw#2079](https://github.com/qwibitai/nanoclaw/pull/2079) |

**整体推进评估**：v2 的渠道矩阵（Discord/Slack/Telegram/WhatsApp/Matrix）基本成型，数据层健壮性（备份、重复防护、ID 规范化）显著提升，多提供商架构（Anthropic/OpenCode/Codex/Ollama）确立扩展范式。

---

## 4. 社区热点

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| **#1959** Discord 回复路由 Bug | 1 评论, 1 👍, 创建 4/23 持续活跃 | **架构级设计缺陷**：容器初始化时的 @-mention 决定所有回复目的地，而非按消息来源动态路由。用户需要线程生命周期与消息上下文解耦，反映 v2 容器状态管理的深层问题 [qwibitai/nanoclaw#1959](https://github.com/qwibitai/nanoclaw/issues/1959) |
| **#2085** `/create-agent` 预配置技能 | 新提交, 0 互动 | **规模化部署需求**：按用户预置个人智能体、延迟绑定渠道，指向 SaaS/多租户场景的产品化方向 [qwibitai/nanoclaw#2085](https://github.com/qwibitai/nanoclaw/issues/2085) |
| **#2084** 备份恢复 PR | 新提交, 功能完整 | **生产就绪焦虑**："today there's no way back from a careless `rm -rf`" — 直接引用反映运维痛点 [qwibitai/nanoclaw#2084](https://github.com/qwibitai/nanoclaw/pull/2084) |

**诉求洞察**：社区正从"能用"转向"可运维、可规模化"，基础设施（备份、预配置、路由正确性）优先级超越新功能。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 关联链接 |
|:---|:---|:---|:---|
| 🔴 **高** | **root 运行导致数据库只读崩溃** — 容器 1 秒内退出，systemd 服务反复重启 | **开放无 fix**，需权限模型审查 | [qwibitai/nanoclaw#2073](https://github.com/qwibitai/nanoclaw/issues/2073) |
| 🟡 **中高** | **Discord 回复路由错误** — 所有消息被困在初始化线程 | **开放无 fix**，架构级修复 | [qwibitai/nanoclaw#1959](https://github.com/qwibitai/nanoclaw/issues/1959) |
| 🟡 **中** | **Slack 独立文件上传无法接收** | **PR #2076 待审** | [qwibitai/nanoclaw#2076](https://github.com/qwibitai/nanoclaw/pull/2076) |
| 🟢 **中** | **MCP server args 类型污染** — JSON 字符串误入 `string[]` 字段 | **PR #2074 待审** | [qwibitai/nanoclaw#2074](https://github.com/qwibitai/nanoclaw/pull/2074) |
| 🟢 **中** | **消息 ID 后缀泄漏至适配器层** — `:ag-<groupId>` 导致操作失败 | **PR #2078 待审**（与 #2007 修复互补） | [qwibitai/nanoclaw#2078](https://github.com/qwibitai/nanoclaw/pull/2078) |
| 🟢 **低** | **智能体间消息无限路由/自循环** | **PR #2063 待审** | [qwibitai/nanoclaw#2063](https://github.com/qwibitai/nanoclaw/pull/2063) |

**稳定性信号**：root 权限问题 (#2073) 和 Discord 路由问题 (#1959) 构成 v2 生产部署的**硬性阻塞项**，两者均无修复时间表。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性评估 |
|:---|:---|:---|
| **预配置智能体（unwired provisioning）** | Issue #2085 | **高** — 与现有 `/create-agent` 流程解耦，技术债务低，契合多租户场景 |
| **Ollama 多模态支持（images 字段）** | PR #2072 待审 | **高** — 基础设施已备（inbox 路径），仅缺 base64 编码转发 |
| **Matrix E2EE 渠道** | PR #1624（4/4 创建，长期开放） | **中** — 功能完整但审阅积压，加密依赖可能增加支持负担 |
| **启动熔断机制** | PR #2080/#2079（关闭） | **中** — 需求确认，但实现方案（计数器位置、状态持久化）需重新设计 |

**下一版本预测**：备份恢复 (#2084) + Ollama 多模态 (#2072) + Slack 文件修复 (#2076) 极可能进入近期发布；预配置智能体 (#2085) 可作为快速跟进。

---

## 7. 用户反馈摘要

| 维度 | 具体内容 |
|:---|:---|
| **痛点** | "no way back from a careless `rm -rf`" — 运维灾难无恢复手段；root 运行即崩溃暴露部署文档缺口 |
| **场景** | 按用户预置个人智能体、延迟绑定（#2085）；Discord 多线程并发交互（#1959） |
| **满意** | Telegram 富媒体终于内联显示（#2008）；Slack 设置流程补齐（#2075） |
| **不满** | 容器路由"基于初始化而非消息来源"的反直觉行为；重复消息导致崩溃的脆弱性 |

---

## 8. 待处理积压

| 项目 | 创建时间 | 风险 | 链接 |
|:---|:---|:---|:---|
| **PR #1624 Matrix E2EE + 按组模型配置** | 2026-04-04（25 天） | 功能完整但审阅停滞，E2EE 安全敏感需专门审计 | [qwibitai/nanoclaw#1624](https://github.com/qwibitai/nanoclaw/pull/1624) |
| **Issue #1959 Discord 路由架构缺陷** | 2026-04-23（6 天） | 影响核心用户体验，无 assignee 或里程碑 | [qwibitai/nanoclaw#1959](https://github.com/qwibitai/nanoclaw/issues/1959) |
| **PR #2080/#2079 熔断机制双探索** | 2026-04-28 | 方案撤回后无后续，crash loop 风险悬置 | [qwibitai/nanoclaw#2080](https://github.com/qwibitai/nanoclaw/pull/2080) |

**维护者行动建议**：优先指派 #1959 和 #2073（生产阻塞项），为 #1624 安排安全/加密专项审阅，明确熔断机制替代方案时间表。

---

*日报基于 GitHub 公开数据生成，时间范围：2026-04-28 至 2026-04-29*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-29

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-04-29  
> **分析周期**: 过去 24 小时（2026-04-28 至 2026-04-29）

---

## 1. 今日速览

今日 NullClaw 项目活跃度**中等偏低**，核心关注点集中在 **Zig 0.16 迁移后的生产级回归修复**。社区提交 1 条文档缺失反馈，3 条 PR 中有 2 条为同一高严重性 Bug 的修复尝试（#872 关闭后重新提交 #873），显示维护者在快速迭代验证修复方案。Cron 子代理引擎的大型功能 PR #783 持续处于待合并状态（已 22 天），成为当前最重要的功能里程碑。无新版本发布，项目处于"修复优先、功能积压"的阶段。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#872](https://github.com/nullclaw/nullclaw/pull/872) `fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin` | **CLOSED** | 首次修复尝试被关闭，推测因验证不充分或存在边缘情况；修复方案在 #873 中重新提交 |

### 待合并关键 PR

| PR | 状态 | 项目推进评估 |
|:---|:---|:---|
| [#873](https://github.com/nullclaw/nullclaw/pull/873) `fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin` | **OPEN** | **阻断性修复**：解决 Zig 0.16 迁移后所有 Mattermost 连接代理的 100% CPU 占用和静默消息失败问题，直接影响生产环境稳定性 |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) `feat(cron): cron subagent, run history, JSON output, security hardening` | **OPEN** (22天) | **重大功能里程碑**：DB-backed 定时任务调度引擎、JSON CLI 输出、安全加固；若合并将显著扩展代理自动化能力，但长期未决可能反映代码审查深度或测试覆盖要求 |

**整体推进度**: 稳定性修复占当日 67% 的 PR 活动，功能交付处于停滞等待状态。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|
| 1 | [#873](https://github.com/nullclaw/nullclaw/pull/873) Zig 0.16 Mattermost 高严重性回归修复 | 创建即标记 `[!CAUTION]`，#872 关闭后 24 小时内重新提交 | **生产稳定性诉求**：Zig 0.16 升级后企业用户遭遇服务降级，社区期望维护者快速响应并建立更严格的迁移回归测试流程 |
| 2 | [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron 子代理引擎 | 22 天待合并，功能覆盖广 | **自动化能力诉求**：用户需要原生定时任务调度替代外部 cron，同时要求可观测性（history/JSON）和安全边界 |
| 3 | [#874](https://github.com/nullclaw/nullclaw/issues/874) 安全策略文档缺失 | 新提交，0 评论 | **安全合规诉求**：`default_allowed_commands` 作为安全策略核心配置缺乏文档，阻碍企业用户审计和最小权限配置 |

**核心信号**: 社区正从"功能探索期"转向"生产可靠性要求期"，文档完备性和回归测试成为隐性痛点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 影响范围 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | Zig 0.16 Mattermost 网关 accept-loop CPU 100% 占用（EAGAIN busy-spin） | **所有平台 daemon 模式** | 🔄 **待验证** #873 | [#873](https://github.com/nullclaw/nullclaw/pull/873) |
| 🔴 **高** | Zig 0.16 Mattermost 空 body POST 导致静默消息失败 | **所有 Mattermost 连接代理** | 🔄 **待验证** #873 | [#873](https://github.com/nullclaw/nullclaw/pull/873) |

**回归根因**: Zig 0.16 升级引入的异步 I/O 行为变更（`EAGAIN` 处理逻辑、HTTP client body 序列化）。

**建议**: #873 应优先于所有功能合并，并考虑发布 hotfix 版本。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron 子代理引擎 | 原生定时任务调度 + 可观测性 + 安全加固 | **高** | PR 已就绪，功能完整度高，与项目"自动化代理"定位强相关；延迟合并可能因测试或审查资源 |
| [#874](https://github.com/nullclaw/nullclaw/issues/874) 安全策略文档 | `default_allowed_commands` 文档补全 | **极高** | 零成本文档工作，可直接关联 #783 的安全加固主题同步发布 |

**路线图推测**: 下一版本（v0.x）大概率以 **#783 Cron 引擎** 为 headline feature，搭配 Zig 0.16 稳定性修复；安全文档补齐是发布前必要项。

---

## 7. 用户反馈摘要

> 基于 Issues/PR 描述直接提炼，无评论数据时侧重提交者视角

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **升级即生产故障** | #873/#872 作者 `vernonstinebaker` | Zig 0.16 迁移后无预警的 CPU 飙高和消息丢失，缺乏冒烟测试保护 |
| **安全策略黑箱** | #874 作者 `Mental-Vortex` | 配置 `security.policy` 时无法确认 `default_allowed_commands` 的默认值和允许范围，审计受阻 |
| **功能就绪但不可用** | #783 潜在用户 | Cron 调度能力是企业工作流刚需，22 天等待期可能迫使社区 fork 或寻找替代方案 |

**满意度**: 维护者对严重 Bug 响应速度较快（24 小时内重提 PR），但功能交付节奏和文档完备性存在明显 gap。

---

## 8. 待处理积压

| 条目 | 积压时长 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron 子代理引擎 | **22 天** | 社区贡献者流失风险、功能分歧、合并冲突累积 | 维护者需明确审查时间表，或拆分 PR 降低合并门槛 |
| — | — | — | 当前无其他超期 Issue（项目 Issue 总量控制较好） |

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 响应速度 | ⭐⭐⭐⭐☆ | 严重 Bug 24h 内重试修复 |
| 功能交付 | ⭐⭐⭐☆☆ | 重大 PR 22 天未决 |
| 文档完备 | ⭐⭐☆☆☆ | 安全核心配置无文档 |
| 稳定性 | ⭐⭐⭐☆☆ | 版本迁移引入生产回归 |
| 社区活跃 | ⭐⭐⭐☆☆ | 低基数下聚焦关键问题 |

**综合**: 项目处于 **"技术债务偿还期"**，建议优先发布 Zig 0.16 修复 hotfix，随后集中资源推动 #783 合并与配套文档补齐。

---

*日报基于 GitHub 公开数据生成，未包含私有讨论或 CI/CD 状态详情。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-29

## 1. 今日速览

IronClaw 今日呈现**极高强度开发态势**，24小时内产生 **30 条 Issues 更新**（26 活跃/新开，4 关闭）与 **46 条 PR 更新**（30 待合并，16 已合并/关闭），无新版本发布。核心焦点集中于 **"Reborn" 架构大规模落地**：serrrfirat 单日发起 12+ 个 cutover blocker 追踪 issue，将 #2987 EPIC 拆解为可评审的集成计划，同时多个 Reborn 子系统 PR（进程生命周期、WASM/脚本/MCP 运行时、授权控制）并行推进。生产稳定性方面，**3 条 live canary 告警**（private-oauth ×2, public-smoke ×1）指向同一 commit `7194808f`，需紧急关注。社区层面，Telegram 渠道贡献者持续活跃，工具权限与部署基础设施 PR 进入评审深水区。

---

## 2. 版本发布

**无新版本发布**（0 个）

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#3050](https://github.com/nearai/ironclaw/pull/3050) | zetyquickly | **Abound demo 紧急调整**：移除 CodeAct，改用结构化 tool calls，调整 system prompt 以适配 demo 场景 | ✅ 已关闭 |
| [#3007](https://github.com/nearai/ironclaw/pull/3007) | henrypark133 | **V2 CodeAct 临时禁用**：强制 engine v2 路径使用结构化 tool calls，为 Abound demo 提供稳定执行路径 | ✅ 已关闭 |
| [#3049](https://github.com/nearai/ironclaw/pull/3049) | zetyquickly | **发送工具断言与温度参数修复**：添加 send tool 执行断言，修复 temperature 处理逻辑 | ✅ 已关闭 |
| [#3046](https://github.com/nearai/ironclaw/pull/3046) | Kampouse | Telegram `allowed_chat_ids` 群组访问控制（被 #3047 取代） | ✅ 已关闭 |
| [#3042](https://github.com/nearai/ironclaw/pull/3042) | nickpismenkov | Policy engine 初版（被 #3043 取代） | ✅ 已关闭 |
| [#3015](https://github.com/nearai/ironclaw/pull/3015) | serrrfirat | **Reborn 扩展清单注册表**：`ironclaw_extensions` crate，解耦 deferred extension manifest/registry | ✅ 已关闭 |
| [#2999](https://github.com/nearai/ironclaw/pull/2999) | serrrfirat | **Reborn 授权控制子系统**：`ironclaw_authorization` + `ironclaw_run_state` crate， capability grant/lease 模型 | ✅ 已关闭 |

### 关键推进方向

**Reborn 架构基础设施层**：单日关闭 3 个 Reborn 核心 PR（扩展注册表、授权控制），同时新开 4 个运行时子系统 PR 待审（进程生命周期 #3017、WASM 运行时 #3028、脚本+MCP 运行时 #3027、信任类策略引擎 #3043），标志着 Reborn 从"规划拆解"进入"密集实现"阶段。

**工具权限治理**：#3041 统一工具权限解析路径，消除 `TOOL_RISK_DEFAULTS` 与 DB 状态的双源冲突，为 Reborn 的 policy engine 奠定基础。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🥇 | [#2987](https://github.com/nearai/ironclaw/issues/2987) [EPIC] Reborn architecture landing strategy | **23 评论** | **架构治理核心议题**：社区密切关注如何将巨型 stacked PR 转化为可评审的集成计划，serrrfirat 提出"PR0 contract freeze → staging → reborn-integration"分阶段策略，但高 risk 标签与 docs/ownership 范围显示组织协同复杂度 |
| 🥈 | [#1044](https://github.com/nearai/ironclaw/issues/1044) E2E test with Claude Code + Chrome MCP | 2 评论 | 关闭，工具/CI 范围，Claude Code 驱动的自然语言 E2E 测试从 bug bash 5 个用例起步 |
| 🥉 | [#3045](https://github.com/nearai/ironclaw/issues/3045) Runtime presets & effective runtime policy | 1 评论 | **开发者体验诉求**：要求"一行命令启动本地编码代理"，拒绝手动配置 grants/mounts/network policy |
| 🥉 | [#3044](https://github.com/nearai/ironclaw/issues/3044) Local developer runtime profiles | 1 评论 | 同上，与 #3045 形成"预设层 + 配置文件"的组合需求 |
| 🥉 | [#3036](https://github.com/nearai/ironclaw/issues/3036) Configuration-as-Code: tenant blueprints | 1 评论, 👍1 | **运营者诉求**：ilblackdragon 提出声明式配置替代 `.env` + `.system/` + JSON 碎片，要求 schema/diff/audit trail |

### 热点分析

**"Reborn 开发者体验三角"** 正在形成：#2987 的架构拆解计划 → #3045/#3044 的运行时预设 → #3036 的 Configuration-as-Code，三者共同指向"降低 IronClaw 部署/运营认知负荷"的产品化需求。ilblackdragon 的 👍 是唯一的非零反应，暗示核心团队内部共识。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR / 状态 |
|:---|:---|:---|:---|
| 🔴 **P0 - 生产阻断** | [#3038](https://github.com/nearai/ironclaw/issues/3038) public-smoke canary 失败 | Live canary 失败，同一 commit `7194808f` 触发 | 🚨 **无 fix PR，需紧急响应** |
| 🔴 **P0 - 生产阻断** | [#3037](https://github.com/nearai/ironclaw/issues/3037) private-oauth canary 失败 | 同上，dedicated runner | 🚨 **无 fix PR，重复出现** |
| 🔴 **P0 - 生产阻断** | [#3030](https://github.com/nearai/ironclaw/issues/3030) private-oauth canary 失败 | 前一 commit 同样失败 | 🚨 **模式化故障，可能非回归** |
| 🟡 **P1 - 功能损坏** | [#3011](https://github.com/nearai/ironclaw/issues/3011) tracing fmt layer 零输出 | `RUST_LOG=trace` 无 stderr/stdout，日志系统失效 | ❌ 无 fix PR |
| 🟡 **P1 - 功能损坏** | [#3010](https://github.com/nearai/ironclaw/issues/3010) 生成图片不可编辑复用 | `image_generate` 结果不保留为后续 turn 的上下文 | ❌ 无 fix PR |
| 🟡 **P1 - 功能损坏** | [#2437](https://github.com/nearai/ironclaw/issues/2437) ✅ **已关闭** | `nearai_chat` 未规范化 tool schemas，`oneOf`/`anyOf` 导致 HTTP 400 | ✅ 已修复 |
| 🟡 **P1 - 功能损坏** | [#2982](https://github.com/nearai/ironclaw/issues/2982) ✅ **已关闭** | 0.26.0 升级后 Routine/Mission 分类错误 | ✅ 已修复 |
| 🟡 **P1 - 功能损坏** | [#2833](https://github.com/nearai/ironclaw/issues/2833) ✅ **已关闭** | 跨对话响应污染，切换对话时 A 的响应出现在 B | ✅ 已修复 |
| 🟢 **P2 - 体验问题** | [#3035](https://github.com/nearai/ironclaw/issues/3035) Agent 显示名被忽略 | 配置 "Agent display name" 后仍回复 "IronClaw" | ❌ 无 fix PR |
| 🟢 **P2 - 体验问题** | [#3034](https://github.com/nearai/ironclaw/issues/3034) V2 HTTP tool 默认禁用无引导 | 新用户无法发现如何启用 HTTP tool | ❌ 无 fix PR |
| 🟢 **P2 - 体验问题** | [#2949](https://github.com/nearai/ironclaw/issues/2949) x86_64-unknown-linux-gnu 无下载 | 安装脚本平台检测与 release 资产不匹配 | ❌ 无 fix PR |

### 稳定性评估

**Canary 告警模式化**：3 条 canary 失败指向同一 commit，但 #3030 显示前一 commit 已失败，可能为**环境/基础设施问题**而非代码回归。建议优先检查 dedicated runner 状态与 anthropic provider 配额。

**日志系统静默故障** (#3011) 尤为危险：生产环境依赖 `ironclaw logs --follow` 旁路，但 stderr 完全静默掩盖了其他潜在故障信号。

---

## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **运行时预设层**（operator/user 一键选择运行模式） | [#3045](https://github.com/nearai/ironclaw/issues/3045) | ⭐⭐⭐⭐⭐ **极高** | serrrfirat 自提，Reborn 核心路径，与 #2987 直接关联 |
| **本地开发者配置文件**（host workspace + shell） | [#3044](https://github.com/nearai/ironclaw/issues/3044) | ⭐⭐⭐⭐⭐ **极高** | 同上，#3045 的配套实现 |
| **Configuration-as-Code**（tenant blueprints, harnesses） | [#3036](https://github.com/nearai/ironclaw/issues/3036) | ⭐⭐⭐⭐☆ **高** | ilblackdragon 提出，👍 支持，Reborn 产品化必需 |
| **硬件钱包支持**（Trezor/MetaMask） | [#3025](https://github.com/nearai/ironclaw/issues/3025) | ⭐⭐⭐☆☆ **中** | 社区需求，但当前 hot wallet 列表均为闭源，涉及安全审计与集成复杂度 |
| **Telegram 群组上下文记忆**（observe mode） | [#3048](https://github.com/nearai/ironclaw/pull/3048) | ⭐⭐⭐⭐⭐ **极高** | PR 已开，Kampouse 持续贡献，解决实际交互断裂问题 |
| **Telegram 群组级访问控制** | [#3047](https://github.com/nearai/ironclaw/pull/3047) | ⭐⭐⭐⭐⭐ **极高** | PR 已开，替代 #3046，dm_policy 解耦需求明确 |
| **TUI 中断分发修复** | [#3033](https://github.com/nearai/ironclaw/pull/3033) | ⭐⭐⭐⭐☆ **高** | reidliu41 提交，Esc/Ctrl+C 中断路径重构，用户体验关键 |
| **LLM base_url 空白修剪** | [#2892](https://github.com/nearai/ironclaw/pull/2892) | ⭐⭐⭐⭐☆ **高** | 已开 6 天，CI 失败根因明确，trim 修复简单有效 |

### 路线图信号

**Reborn  cutover 倒计时**：#2987 定义的 PR 序列正在加速兑现——PR0 (contract freeze) → PR1a (substrate) → PR1b (trust policy, #3043) → PR2 (runtime lanes, #3027/#3028) → PR3 (auth control, #2999 ✅)。当前 **PR1b 与 PR2 并行开发**，存在依赖交叉风险，需关注 #3012 对 #2999 的 gate 要求是否被满足。

---

## 7. 用户反馈摘要

### 真实痛点

| 用户场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"我想用自己的硬件钱包部署"** | [#3025](https://github.com/nearai/ironclaw/issues/3025) benjaminpreiss | 现有 hot wallet 连接器均为闭源/无 GitHub 链接，开源承诺与实际控制权矛盾 |
| **"配置 Agent 名字没用，它还是叫自己 IronClaw"** | [#3035](https://github.com/nearai/ironclaw/issues/3035) joe-rlo | 身份配置与响应行为脱节，破坏品牌定制与用户体验一致性 |
| **"HTTP tool 在哪？完全找不到开关"** | [#3034](https://github.com/nearai/ironclaw/issues/3034) joe-rlo | V2 引擎功能发现性极差，默认禁用 + 零引导 = 用户困惑 |
| **"安装脚本说我的平台不支持，但 release 明明有"** | [#2949](https://github.com/nearai/ironclaw/issues/2949) gittyhubert | 平台检测逻辑与发布资产不匹配，首因体验断裂 |
| **"生成图片后无法继续编辑对话"** | [#3010](https://github.com/nearai/ironclaw/issues/3010) hanakannzashi | 多模态工作流断裂，"生成 → 迭代" 循环无法闭环 |
| **"日志完全看不到，调试像黑盒"** | [#3011](https://github.com/nearai/ironclaw/issues/3011) synner88 | tracing fmt layer 失效，运维与开发效率严重受损 |

### 满意信号

- **Reborn 架构透明度提升**：#2987 的详细拆解计划获得社区关注，23 评论显示技术治理参与度
- **Telegram 渠道持续优化**：Kampouse 的连续贡献（#3046→#3047→#3048）反映实际部署者的积极反馈循环

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 风险 | 提醒原因 |
|:---|:---|:---|:---|
| [#2828](https://github.com/nearai/ironclaw/issues/2828) Harness testing epic — 统一 replay/E2E/live canary/eval | 2026-04-22 | **高** | 创建 7 天零评论，但 #3020（Reborn compatibility gate）直接依赖此框架；碎片化测试系统若不整合，Reborn cutover 的"行为一致性证明"将缺乏基础设施 |
| [#2925](https://github.com/nearai/ironclaw/pull/2925) Downstream deploy infra (AGENTS_SEED_PATH, INTEGRATION_CREDENTIALS_DIR, MissionSlot) | 2026-04-24 | 中 | XL 尺寸 PR，5 天待合并，评论 undefined（可能为数据缺失）；下游 fork 部署的关键基础设施，阻塞 domain-specific 部署 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo — Responses API, credential injection, skills, guardrails | 2026-03-30 | **高** | 创建 30 天，XL 尺寸，scope 极广；今日 #3050/#3007 的紧急调整显示 demo 分支仍在活跃迭代，但主 PR 长期未合并存在分支漂移风险 |
| [#2892](https://github.com/nearai/ironclaw/pull/2892) Trim whitespace from LLM base_url | 2026-04-23 | 低 | 6 天待合并，修复明确，CI 失败影响 Provider Matrix 覆盖率；低 risk 的简单修复应加速合入 |

---

**日报生成时间**：2026-04-29  
**数据覆盖**：过去 24 小时（截至 2026-04-29）  
**项目健康度**：🟡 **活跃但承压** — Reborn 架构推进迅猛，canary 稳定性与日志系统故障需立即关注

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-29

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-04-29 | **数据周期**: 过去24小时

---

## 1. 今日速览

LobsterAI 今日呈现**高强度迭代状态**：24小时内 **47个 PR** 发生状态变更（合并/关闭 23 个，待合并 24 个），**3 个活跃 Issue** 全部为新开或更新，无版本发布。开发节奏密集，以 **Gateway 稳定性修复**、**多模型视觉能力适配** 和 **IM 协同体验优化** 为三大主线。社区活跃度中等，Issues 侧反映用户对 DeepSeek V4 兼容性、模型切换状态同步等核心体验有迫切诉求。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（23 条）

| 类别 | PR | 作者 | 核心贡献 |
|:---|:---|:---|:---|
| **Gateway 稳定性** | [#1872](https://github.com/netease-youdao/LobsterAI/pull/1872) | fisherdaddy | 修复套餐模型列表更新导致的 **Gateway 强制重启** 问题 |
| | [#1870](https://github.com/netease-youdao/LobsterAI/pull/1870) | fisherdaddy | 修复 Qwen 3.6 Plus 回答后 **Gateway 异常重启** |
| | [#1857](https://github.com/netease-youdao/LobsterAI/pull/1857) | liuzhq1986 | 首页切换模型时 **阻止 Gateway 硬重启** |
| | [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) | liuzhq1986 | 生命周期错误回退时 **abort gateway run**，防止会话死锁 |
| **模型能力扩展** | [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) | fisherdaddy | 新增 **小米 Mimo 模型 Coding Plan** 支持 |
| | [#1859](https://github.com/netease-youdao/LobsterAI/pull/1859) | fisherdaddy | 新增 **百度千帆 Coding Plan** 支持 |
| | [#1867](https://github.com/netease-youdao/LobsterAI/pull/1867) | fisherdaddy | 修复 Qwen 3.6 Plus **偶现不支持图像输入** 问题 |
| **视觉/模型切换体验** | [#1865](https://github.com/netease-youdao/LobsterAI/pull/1865) | btc69m979y-dotcom | Header ModelSelector **按 Agent 隔离模型选择状态** |
| | [#1860](https://github.com/netease-youdao/LobsterAI/pull/1860) | btc69m979y-dotcom | 首页 `CoworkPromptInput` 使用 Header 所选模型判断 `supportsImage` |
| **IM 协同优化** | [#1871](https://github.com/netease-youdao/LobsterAI/pull/1871) | fisherdaddy | 修复 IM 消息在任务记录中 **间断性显示错位** |
| | [#1868](https://github.com/netease-youdao/LobsterAI/pull/1868) | liuzhq1986 | 微信渠道图片 **尺寸约束 + 点击预览** |
| | [#1856](https://github.com/netease-youdao/LobsterAI/pull/1856) | btc69m979y-dotcom | 剥离 IM 媒体元数据，净化用户消息展示 |
| | [#1866](https://github.com/netease-youdao/LobsterAI/pull/1866) | liugang519 | 修复飞书接收文件 **中文名乱码** |
| **UI 修复** | [#1858](https://github.com/netease-youdao/LobsterAI/pull/1858) | btc69m979y-dotcom | EngineStartupOverlay **z-index 提升**，避免被 Settings 遮挡 |
| | [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855) / [#1854](https://github.com/netease-youdao/LobsterAI/pull/1854) | liuzhq1986 | ModelSelector **长模型名截断**，防止 Header 溢出 |
| **生态集成** | [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864) | liuzhq1986 | 升级 **有道云笔记 Skill** |
| | [#1863](https://github.com/netease-youdao/LobsterAI/pull/1863) | liugang519 | Windows 平台微信相关修复 |

**整体推进评估**：今日代码流动以 **"稳定性加固"** 为核心主题，Gateway 重启类问题得到系统性修复（3 个独立 PR 覆盖不同触发场景），视觉模型切换的状态同步问题有完整修复链路（Issue #1861 → PR #1865/#1860），Coding Plan 生态扩展至小米、百度千帆两家新供应商。项目健康度因稳定性投入而提升，但待合并 PR 积压（24 个）需关注审阅带宽。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 热度分析 |
|:---|:---|:---|
| [#1813 DeepSeek V4 无法使用：LLM request failed](https://github.com/netease-youdao/LobsterAI/issues/1813) | **6 条** | 🔥 **最高热度** — 创建 5 天持续活跃，用户反馈 DeepSeek V4 因 "provider rejected request schema or tool payload" 完全不可用。诉求明确：**主流模型兼容性**是用户选型核心考量，schema/tool payload 的 provider 适配层需紧急加固 |
| [#1861 图片附件不随模型切换重新处理](https://github.com/netease-youdao/LobsterAI/issues/1861) | 1 条 | 用户深度报告了 `supportsImage` 状态的三类不同步场景（非视觉→视觉、视觉→非视觉、Hint 提示），并已有 **2 个关联修复 PR**（#1865、#1860）关闭，显示社区响应效率较高 |
| [#1849 追问时出现无限 NO_REPLY 或输出中断](https://github.com/netease-youdao/LobsterAI/issues/1849) | 0 条 | 新报告，问题根因已初步定位（任务提前 complete 但模型仍在输出），尚无 PR 关联 |

**背后诉求洞察**：用户对 **"模型即插即用"** 的期待极高，任何主流模型（DeepSeek、Qwen、Doubao 等）的兼容性问题都会直接阻断工作流；视觉-非视觉模型的混合使用场景（如先草图后文本）是高频痛点，状态同步机制需要更鲁棒的设计。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 完全不可用：provider 拒绝 request schema/tool payload | ❌ **无 Fix PR**，5 天未解决 |
| 🔴 **高** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时无限 NO_REPLY 或输出中断：任务提前 complete 导致页面无响应 | ❌ **无 Fix PR**，今日新报 |
| 🟡 **中** | [#1870](https://github.com/netease-youdao/LobsterAI/pull/1870) | Qwen 3.6 Plus 回答后 Gateway 重启 | ✅ **已修复**（fisherdaddy）|
| 🟡 **中** | [#1872](https://github.com/netease-youdao/LobsterAI/pull/1872) | 套餐模型列表更新强制 Gateway 重启 | ✅ **已修复**（fisherdaddy）|
| 🟡 **中** | [#1857](https://github.com/netease-youdao/LobsterAI/pull/1857) | 首页切换模型触发 Gateway 硬重启 | ✅ **已修复**（liuzhq1986）|
| 🟡 **中** | [#1869](https://github.com/netease-youdao/LobsterAI/pull/1869) | 生命周期错误回退后会话死锁（"session still running"）| ✅ **已修复**（liuzhq1986）|
| 🟡 **中** | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | 图片附件 supportsImage 状态三场景不同步 | ✅ **已修复**（PR #1865/#1860）|
| 🟢 **低** | [#1871](https://github.com/netease-youdao/LobsterAI/pull/1871) | IM 消息在任务记录中间断性显示错位 | ✅ **已修复**（fisherdaddy）|
| 🟢 **低** | [#1866](https://github.com/netease-youdao/LobsterAI/pull/1866) | 飞书接收文件中文名乱码 | ✅ **已修复**（liugang519）|

**稳定性评估**：Gateway 重启类问题今日得到 **集中歼灭**（4 个独立修复覆盖不同触发路径），但 **DeepSeek V4 兼容性** 和 **追问输出中断** 两个高严重问题仍悬而未决，可能直接影响用户留存。

---

## 6. 功能请求与路线图信号

| 信号来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| PR [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) | 小米 Mimo 模型 Coding Plan 支持 | ✅ **已合并** — Coding Plan 多供应商战略明确 |
| PR [#1859](https://github.com/netease-youdao/LobsterAI/pull/1859) | 百度千帆 Coding Plan 支持 | ✅ **已合并** — 同上，生态扩展加速 |
| PR [#1864](https://github.com/netease-youdao/LobsterAI/pull/1864) | 有道云笔记 Skill 升级 | ✅ **已合并** — 自有生态深度整合 |
| Issue [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 兼容 | 🔶 **高优先级** — 主流模型适配是基础设施，预计紧急修复 |
| Issue [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | 模型切换状态同步 | ✅ **已响应** — 架构层面引入 per-agent model selection |

**路线图判断**：项目正从 **"单模型深度优化"** 转向 **"多模型生态编排"**（Coding Plan 多供应商、per-agent 模型隔离），同时 **IM 协同场景**（微信、飞书、钉钉）的体验打磨进入精细阶段。安全加固类 PR（#908、#909）长期未合并，可能存在审阅优先级或技术方案争议。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **模型切换断裂** | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | "先选 glm-5.1 加图片，切 Doubao-Seed-2.0-lite 后图片变盲" — 视觉工作流因状态不同步而断裂 |
| **主流模型不可用** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 作为热门模型完全无法调用，直接阻断技术选型评估 |
| **输出可靠性** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时"无限 NO_REPLY"或输出几个字即中断，破坏连续对话信任 |
| **Gateway 抖动** | 多个 PR 修复 | 模型切换、回答完成等正常操作触发 Gateway 重启，感知为"系统不稳定" |

### 正向信号
- 视觉模型切换问题有 **快速响应**（Issue 与 Fix PR 同日出现）
- IM 渠道（微信、飞书）的 **本土化适配** 细致（中文乱码、图片预览、消息净化）

---

## 8. 待处理积压

### 长期未响应的关键项

| 项目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [PR #908](https://github.com/netease-youdao/LobsterAI/pull/908) MCP stdio 命令注入漏洞修复 | 2026-03-26 | 2026-04-28 | **安全漏洞**，34 天未合并。渲染进程攻陷后可任意命令执行，虽标记 [stale] 但风险极高 |
| [PR #909](https://github.com/netease-youdao/LobsterAI/pull/909) Skill 安全扫描绕过修复 | 2026-03-26 | 2026-04-28 | **安全漏洞**，34 天未合并。恶意技能可通过构造崩溃文件静默安装，与 #908 同属安全基线问题 |
| [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) DeepSeek V4 不可用 | 2026-04-24 | 2026-04-28 | 5 天 6 评论，无维护者正式响应，用户耐心消耗中 |
| [Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849) 追问输出中断 | 2026-04-28 | 2026-04-28 | 今日新报，根因已定位但无 PR，需跟踪 |

**维护者提醒**：安全类 PR #908/#909 已积压 **34 天**，虽可能因方案评审或测试覆盖而延迟，但公开仓库中已知漏洞的长期暴露会放大攻击窗口。建议优先审阅或明确替代方案。24 个待合并 PR 的审阅队列也需关注，避免贡献者流失。

---

> **日报生成依据**: GitHub Issues/PRs 公开数据 | 数据截止时间: 2026-04-29 00:00 UTC  
> **项目定位**: AI 智能体与个人 AI 助手开源框架（网易有道出品）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-29

## 1. 今日速览

Moltis 昨日呈现**高强度开发态势**：18 个 PR 中 15 个已合并/关闭，合并率高达 83%，核心贡献者 `penso` 单日提交 10 个 PR 展现极强交付节奏。社区侧 5 个 Issues 中 2 个 Bug 已快速关闭，剩余 3 个功能请求持续积累。项目发布 `20260428.03` 版本，聚焦导入生态扩展与 Web UI 体验升级。整体健康度：**活跃且稳健**，但长期功能请求（#533、#266）已积压 2 个月需关注。

---

## 2. 版本发布

### [20260428.03](https://github.com/moltis-org/moltis/releases/tag/20260428.03)

| 属性 | 详情 |
|:---|:---|
| 发布日期 | 2026-04-28 |
| 核心主题 | 多源导入生态 + Web 交互体验 + 基础设施加固 |

**主要更新内容：**

| 模块 | 变更 | 来源 PR |
|:---|:---|:---|
| **导入系统** | 新增 Claude Code、Claude Desktop、Hermes 三源导入，与现有 OpenClaw 形成四源矩阵 | [#914](https://github.com/moltis-org/moltis/pull/914) |
| **Web UI** | 命令面板（Cmd+K/Ctrl+K）全局可用；文件上传按钮（+）上线；导入界面支持标签页切换 | [#904](https://github.com/moltis-org/moltis/pull/904), [#876](https://github.com/moltis-org/moltis/pull/876), [#917](https://github.com/moltis-org/moltis/pull/917) |
| **语音系统** | 引入 Voice Personas — 可复用的确定性 TTS 身份，解决 AI 语音"每句话变一个人"的问题 | [#916](https://github.com/moltis-org/moltis/pull/916) |
| **自更新** | `/update` 命令 + Web UI 更新按钮，支持二进制/Docker/Homebrew/包管理器多路径升级 | [#911](https://github.com/moltis-org/moltis/pull/911) |
| **安全加固** | Linux Landlock LSM 内核级文件系统隔离上线沙箱 | [#866](https://github.com/moltis-org/moltis/pull/866) |
| **浏览器后端** | Obscura 轻量级 sidecar 浏览器后端可选接入，零新增 Rust 依赖 | [#869](https://github.com/moltis-org/moltis/pull/869) |

**⚠️ 迁移注意事项：**
- 语音系统：现有 Agent 需手动绑定 Persona，未绑定者保持默认行为（向后兼容）
- 自更新：Docker 部署需确认卷挂载权限，`/update` 命令在容器内将触发镜像拉取而非二进制替换
- 反向代理：nginx 配置建议同步更新为 `$http_host`（[#907](https://github.com/moltis-org/moltis/pull/907)），否则非标准端口 WebSocket 可能报跨域错误

---

## 3. 项目进展

### 已合并核心 PR（15 个）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#914](https://github.com/moltis-org/moltis/pull/914) | penso | **多源导入基础设施** — `moltis-import-core` + Claude/Hermes 专用 crate | 打破 OpenClaw 单一依赖，构建可扩展的 AI 工具迁移生态 |
| [#916](https://github.com/moltis-org/moltis/pull/916) | penso | **Voice Personas 确定性语音身份** | 从"每次随机音色"升级为"品牌级稳定语音"，企业场景关键差异化 |
| [#904](https://github.com/moltis-org/moltis/pull/904) | penso | **全局命令面板 Cmd+K** | 降低高级功能发现成本，对标 VS Code/Raycast 现代 UX 标准 |
| [#903](https://github.com/moltis-org/moltis/pull/903) | Cstewart-HC | **代码索引自动化** — 启动/创建/定时触发 + 去重 + 文件监听 | 消除手动 `index` 操作，Agent 自主感知代码库变更 |
| [#866](https://github.com/moltis-org/moltis/pull/866) | Cstewart-HC | **Landlock LSM 沙箱隔离** | 从应用层沙箱跃迁至内核级隔离，满足企业安全合规基线 |
| [#876](https://github.com/moltis-org/moltis/pull/876) | Cstewart-HC | **Web 聊天文件上传** | 补齐与 ChatGPT/Claude 等主流产品的 UX 差距 |
| [#911](https://github.com/moltis-org/moltis/pull/911) | penso | **自更新机制** | 降低版本碎片化，减少"用户不知已过时"的支持负担 |
| [#869](https://github.com/moltis-org/moltis/pull/869) | penso | **Obscura 浏览器后端** | 为 headless Chrome 提供轻量替代，资源敏感场景（边缘设备/多 Agent）可行 |
| [#915](https://github.com/moltis-org/moltis/pull/915) | penso | **Telegram 名称字段消毒** | 修复 Mistral/OpenAI 422 错误，即时通讯渠道稳定性提升 |
| [#913](https://github.com/moltis-org/moltis/pull/913) | penso | **6 个爬虫工具集成**（WhatsApp/Discord/Slack/Twitter/Google Suite） | 从"对话 Agent"扩展为"可主动抓取外部数据的 Agent" |
| [#912](https://github.com/moltis-org/moltis/pull/912) | penso | **提供商名称验证统一** | 修复 7 个有效提供商被误判"未知"的配置陷阱 |
| [#910](https://github.com/moltis-org/moltis/pull/910) | penso | **SessionMemoryHook 生命周期一致性** | 消除会话切换/重置时的 Hook 遗漏，插件生态可靠性基石 |
| [#909](https://github.com/moltis-org/moltis/pull/909) | penso | **Changelog 范围限定修复** | 发布流程基础设施，避免变更日志无限累积 |
| [#907](https://github.com/moltis-org/moltis/pull/907) | penso | **nginx 代理端口保留** | 自托管用户 WebSocket 稳定性，社区高频问题 |
| [#899](https://github.com/moltis-org/moltis/pull/899) | Cstewart-HC | **Discord/Teams 可选编译** | 减少默认二进制体积，嵌入式/资源敏感部署优化 |

**整体里程碑意义：** 本日合并量相当于一次**小型版本冲刺** — 导入生态从 1 源扩至 4 源，Web UI 完成"命令面板+文件上传+导入标签页"的三重体验升级，安全与基础设施各添一项硬核能力（Landlock + 自更新）。

---

## 4. 社区热点

| 排名 | 议题 | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#905](https://github.com/moltis-org/moltis/issues/905) Telegram Bug | 3 评论, 1 👍, 24h 内关闭 | **"快速响应"典范** — 用户报告 Mistral/OpenAI 因用户名含特殊字符报错，PR [#915](https://github.com/moltis-org/moltis/pull/915) 同日修复合并。反映即时通讯渠道的字段处理是跨平台兼容的持久痛点 |
| 🥈 | [#533](https://github.com/moltis-org/moltis/issues/533) "+" 附件按钮 | 3 评论, 创建 3/31 持续活跃 | **UX 对齐诉求** — 用户明确要求匹配主流 LLM 产品的附件交互模式。PR [#876](https://github.com/moltis-org/moltis/pull/876) 已合并但 Issue 仍 Open，需确认是否完全覆盖或等待关闭 |
| 🥉 | [#896](https://github.com/moltis-org/moltis/issues/896) Docker DNS 解析失败 | 2 评论, 24h 内关闭 | **环境特异性问题** — `ports.ubuntu.com` 解析失败属网络/容器环境 issue，快速关闭体现 Issue 分流效率 |

**深层诉求洞察：** 社区对"与主流产品 UX 对齐"（#533 附件、#904 命令面板）和"跨平台稳定"（#905 Telegram、#896 Docker）两类需求最敏感 — 前者决定用户迁移成本，后者决定自托管可行性。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 现象 | 根因 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | [#905](https://github.com/moltis-org/moltis/issues/905) | Telegram 消息触发 Mistral HTTP 422 / OpenAI invalid `name` | 用户 display name 未消毒直接传入 `name` 字段（含空格/特殊字符） | ✅ **已修复** | [#915](https://github.com/moltis-org/moltis/pull/915) |
| 🟡 **中** | [#896](https://github.com/moltis-org/moltis/issues/896) | Docker build 时 `apt-get update` 解析 `ports.ubuntu.com` 失败 | 容器内 DNS 临时故障 / 网络隔离环境 | ✅ **已关闭** | 无（环境 issue，非代码缺陷） |

**回归风险评估：** 今日无已知回归。`penso` 在 [#915](https://github.com/moltis-org/moltis/pull/915) 中采用序列化层统一消毒（`ChatMessage::sanitize_message_name()`），而非仅修 Telegram 适配器，预防了同类问题在其他渠道复发。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 与现有 PR 关联 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|:---|
| [#906](https://github.com/moltis-org/moltis/issues/906) | WebUI 中配置子 Agent | 无直接 PR，但 [#916](https://github.com/moltis-org/moltis/pull/916) Voice Personas 已建立"Agent ↔ 可配置实体"模式 | **高** | 架构模式已验证，UI 配置层可复用 |
| [#533](https://github.com/moltis-org/moltis/issues/533) | "+" 附件按钮 | [#876](https://github.com/moltis-org/moltis/pull/876) 已合并文件上传 | **已解决待关闭** | 功能已交付，需维护者确认关闭 |
| [#266](https://github.com/moltis-org/moltis/issues/266) | 原生 9router 支持 | 无 PR，但 [#914](https://github.com/moltis-org/moltis/pull/914) 导入系统抽象层可扩展 | **中** | 9router 是 AI 编码工具路由层，与 Moltis Agent 架构定位契合，但需评估是否优先于更多提供商适配 |

**路线图信号：** 
- **短期（1-2 版本）：** 子 Agent 配置（#906）+ 导入系统继续扩展（Cursor/Codex 等）
- **中期：** 9router 集成若落地，将标志 Moltis 从"单一 Agent 运行时"向"AI 工具编排中枢"演进

---

## 7. 用户反馈摘要

| 维度 | 具体内容 | 来源 |
|:---|:---|:---|
| **痛点** | Telegram 用户名含空格/表情导致 API 报错，跨平台字段兼容性是隐形雷区 | [#905](https://github.com/moltis-org/moltis/issues/905) 评论 |
| **痛点** | Docker 自托管网络环境复杂，DNS/代理问题频发，文档需更强调环境检查 | [#896](https://github.com/moltis-org/moltis/issues/896) |
| **期望** | 附件上传要"像 ChatGPT 一样简单"，现有流程需多步操作 | [#533](https://github.com/moltis-org/moltis/issues/533) |
| **期望** | 子 Agent 现需手动编辑配置，WebUI 可视化配置降低使用门槛 | [#906](https://github.com/moltis-org/moltis/issues/906) |
| **满意** | 导入功能受好评，用户主动从 Claude Code/Hermes 迁移数据 | [#914](https://github.com/moltis-org/moltis/pull/914) 隐含信号 |
| **场景** | 9router 用户希望统一路由 OpenAI/Claude/Codex，减少多工具配置重复 | [#266](https://github.com/moltis-org/moltis/issues/266) |

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 积压天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|:---|
| [#533](https://github.com/moltis-org/moltis/issues/533) "+" 附件按钮 | 2026-03-31 | 2026-04-28 | **28 天** | 功能已交付但 Issue 未关闭，造成"需求未响应"假象 | 维护者确认 [#876](https://github.com/moltis-org/moltis/pull/876) 覆盖范围后关闭 |
| [#266](https://github.com/moltis-org/moltis/issues/266) 9router 支持 | 2026-02-28 | 2026-04-28 | **60 天** | 长期无 PR，社区可能认为项目忽视 AI 编码工具生态 | 维护者回复路线图评估，或标记 `help wanted` 吸引贡献者 |
| [#339](https://github.com/moltis-org/moltis/pull/339) zh-TW 繁体中文 | 2026-03-05 | 2026-04-28 | **54 天** | i18n PR 长期挂起，影响华语社区参与意愿 | 安排代码审查或明确合并阻塞点 |
| [#917](https://github.com/moltis-org/moltis/pull/917) Web UI Claude/Hermes 导入 | 2026-04-28 | 2026-04-28 | 新建 | 与 [#914](https://github.com/moltis-org/moltis/pull/914) 后端导入形成配套，需快速合并保持功能完整 | 优先审查，避免前后端版本割裂 |

---

**日报生成基准：** 基于 GitHub 公开数据，覆盖 2026-04-28 00:00–23:59 UTC 活动。  
**项目地址：** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-29

> **项目地址**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：实际仓库路径显示为 `agentscope-ai/QwenPaw`，以下沿用实际链接）

---

## 1. 今日速览

CoPaw/QwenPaw 项目今日呈现**高活跃度运行状态**：24小时内 Issues 更新 43 条（25 新开/活跃，18 关闭）、PR 更新 31 条（20 已合并/关闭，11 待审），并发布了 v1.1.5-beta.1 预发布版本。社区聚焦三大主题：**会话状态管理稳定性**（暂停/停止/上下文丢失）、**前端性能优化**（虚拟滚动、请求去重）、以及 **ACP（Agent Communication Protocol）生态扩展**。20 个 PR 的合并/关闭表明维护团队响应迅速，但 11 个待合并 PR 和 25 个活跃 Issues 显示技术债务仍在累积。

---

## 2. 版本发布

### [v1.1.5-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5-beta.1) — 预发布版本

| 维度 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-28 |
| **版本性质** | Beta 预发布（非稳定版） |
| **核心变更** | 3 项：混合存储修复、时区标准化、ACP 协议支持 |

**具体更新内容**：

| PR | 作者 | 说明 | 影响面 |
|:---|:---|:---|:---|
| [#3857](https://github.com/agentscope-ai/QwenPaw/pull/3857) | @zhaozhuang521 | `fix(console)`: 使用 hybrid storage 修复 per-tab agent 选择状态丢失问题 | Console 前端状态持久化 |
| [#3858](https://github.com/agentscope-ai/QwenPaw/pull/3858) | @xieyxclack | `fix(timezone)`: 标准化非标准时区名称 | 跨平台部署稳定性 |
| — | — | `feat(ACP)`: 新增 ACP（Agent Communication Protocol）支持 | **核心架构扩展** |

**⚠️ 迁移注意事项**：
- ACP 为新增协议层，现有 `agentscope-ai/chat` 包用户需关注 [#3894](https://github.com/agentscope-ai/QwenPaw/issues/3894) 中提到的魔法命令限制——当前 ACP 实现可能不支持自定义触发字符与多位置触发
- 时区修复可能影响定时任务（cron agent）的执行时间计算，建议升级后验证调度准确性

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（20 条中的核心项）

| PR | 作者 | 类型 | 推进价值 |
|:---|:---|:---|:---|
| [#3910](https://github.com/agentscope-ai/QwenPaw/pull/3910) | @xieyxclack | `perf` | **关键性能修复**：为技能清单读取添加 mtime-based LRU 缓存，解决并发场景下文件描述符耗尽问题 |
| [#3912](https://github.com/agentscope-ai/QwenPaw/pull/3912) | @zhaozhuang521 | `perf` | 使用 `react-window` 虚拟化会话列表，解决长会话列表渲染卡顿 |
| [#3897](https://github.com/agentscope-ai/QwenPaw/pull/3897) | @bowenliang123 | `refactor` | `/chat` 页面模型 API 请求去重（原触发 3 次重复请求，每次 25KB），显著降低首屏加载 |
| [#3908](https://github.com/agentscope-ai/QwenPaw/pull/3908) | @zhaozhuang521 | `perf` | 会话抽屉分页加载（PAGE_SIZE=50）+ 滚动触底自动加载，抽离为单例组件 |
| [#3904](https://github.com/agentscope-ai/QwenPaw/pull/3904) | @qbc2016 | `fix` | MCP 客户端执行超时透传，缓解 MCP 调用无限卡死问题 |
| [#3896](https://github.com/agentscope-ai/QwenPaw/pull/3896) | @zhaozhuang521 | `fix` | `approval_level` 配置通过 running config API 代理，修复审批层级设置不生效 |
| [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) | @bxy3045134656 | `fix` | QQ 渠道语音消息类型映射修正 + 平台侧 ASR 回退支持 |
| [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) | @CA-mambo | `fix` | **关键 Bugfix**：工具结果超出保留限制时的上下文丢失 → 无限循环（关联 [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893)）|
| [#3917](https://github.com/agentscope-ai/QwenPaw/pull/3917) | @zhijianma | `chore` | `@agentscope-ai/chat` 升级至 beta 版本，含停止按钮修复 |
| [#3914](https://github.com/agentscope-ai/QwenPaw/pull/3914) | @xieyxclack | `chore` | 版本号提升至 1.1.5b1 |

**整体推进评估**：今日合并集中在 **前端性能（3 项）、稳定性修复（4 项）、架构支撑（2 项）** 三个维度，项目正从"功能可用"向"高并发场景可用"演进。但会话状态管理（暂停/停止/上下文同步）的底层修复仍未完全闭环。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 状态 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| **#3853 Debian 12 保存模型设置后页面冻结** | 9 | 🟡 OPEN | **权限与前端状态持久化**：root 用户正常，非 root 用户触发页面卡死需重启服务 | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) |
| **#3430 QwenPaw 与 CoPaw 关系澄清** | 7 | ✅ CLOSED | **品牌/项目定位困惑**：用户不清楚两个名称的关系及维护策略 | [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) |
| **#3049 /stop 指令无效 + 聊天记录加载失败** | 6 | ✅ CLOSED | **会话控制可靠性**：停止命令无法中断工具调用，聊天记录本地存在但前端不加载 | [#3049](https://github.com/agentscope-ai/QwenPaw/issues/3049) |
| **#3843 会话历史消失、新消息路由至不同会话** | 6 | 🟡 OPEN | **会话数据一致性**：聊天历史突然空白，但侧边栏标题仍在；后续消息进入错误会话 | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| **#3437 请求支持 Kimi Code API** | 6 | 🟡 OPEN | **模型生态扩展**：手动添加 Kimi Code 失败，要求内置支持 | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) |
| **#3893 上下文同步竞态条件：工具结果丢弃导致无限循环** | 5 | 🟡 OPEN | **核心架构稳定性**：高 `max_iters` 下工具结果未同步至上下文即进入下一轮 LLM 调用 | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) |

**诉求分析**：
- **#3853** 与 **#3843** 形成"会话状态管理"问题簇，根因可能指向混合存储（hybrid storage）的实现缺陷——v1.1.5-beta.1 的 #3857 仅修复 per-tab agent 选择，未覆盖模型设置保存场景
- **#3430** 的关闭说明项目方已回应品牌关系问题，但仓库名称仍为 `QwenPaw`，品牌统一性待观察
- **#3893** 由 @CA-mambo 同时提交 PR #3895 修复，显示社区深度参与架构级问题

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| **🔴 P0-无限循环** | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) | 上下文同步竞态条件：工具结果丢弃 → LLM 无限循环 | **PR #3895 已关闭**（未合并？需确认） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3893) |
| **🔴 P0-服务冻结** | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | Debian 12 非 root 用户保存模型设置后页面冻结，需重启 | 🟡 待修复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3853) |
| **🟡 P1-会话数据丢失** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) | 历史消失 + 消息路由错误 | 🟡 待修复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| **🟡 P1-记忆系统失效** | [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) | Dream Agent 记忆优化后 MEMORY.md 空白，日期日志缺失 | 🟡 待修复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3905) |
| **🟡 P1-技能池报错** | [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) | 技能池持续报错（具体错误未详） | 🟡 待修复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3702) |
| **🟢 P2-前端中断** | [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) | Console 页面对话多次中断 | 🟡 待修复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3861) |
| **🟢 P2-输入法** | [#3927](https://github.com/agentscope-ai/QwenPaw/issues/3927) | 右侧历史面板重命名时中文 IME 无法输入 | 🟡 待修复 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3927) |

**关键观察**：
- **会话状态管理**是今日 Bug 密集区：停止/暂停/保存设置/历史加载均出现异常，建议维护者专项排查状态机实现
- PR #3904（MCP 超时透传）针对性修复了 [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) 报告的 MCP 无限卡死，但 #3822 状态为 CLOSED 而 #3893 仍为 OPEN，需确认修复覆盖范围

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 需求 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---|:---|
| [#3920](https://github.com/agentscope-ai/QwenPaw/issues/3920) | 模型供应商 | 官方支持 llama.cpp（已有 Ollama、LMS） | ⭐⭐⭐ 高 | 生态完整性需求，实现成本低 |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | 模型供应商 | 内置 Kimi Code API 支持 | ⭐⭐⭐ 高 | 6 评论活跃需求，竞品对标 |
| [#2495](https://github.com/agentscope-ai/QwenPaw/issues/2495) | MCP 体验 | 配置后可视化 MCP 工具列表 | ⭐⭐⭐ 高 | 与 #3904 修复同域，可协同 |
| [#3884](https://github.com/agentscope-ai/QwenPaw/issues/3884) → 已关闭 | 可配置性 | 文件上传大小限制可配置（当前 10MB 硬编码） | ⭐⭐⭐ **已实现** | PR 已合并 |
| [#3883](https://github.com/agentscope-ai/QwenPaw/issues/3883) | 开发者体验 | Skills 单元测试支持 | ⭐⭐⭐ 高 | 质量基础设施，社区 PR 潜力 |
| [#3929](https://github.com/agentscope-ai/QwenPaw/issues/3929) | 模型配置 | 自定义模型独立 timeout + context_window_size | ⭐⭐⭐ 高 | 企业部署刚需，JSON 配置扩展 |
| [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) | 成本优化 | DeepSeek 前缀缓存命中率优化（当前 ~95%） | ⭐⭐⭐ 高 | 直接影响使用成本，技术深度高 |
| [#3747](https://github.com/agentscope-ai/QwenPaw/issues/3747) | 渠道能力 | 钉钉渠道支持引用消息和文件 | ⭐⭐ 中 | 企业场景，需渠道协议扩展 |
| [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) | 工具插件 | GPT Image 2 工具插件 | ⭐⭐⭐ **进行中** | PR 已开，图像生成能力扩展 |
| [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) | 交互体验 | Whisper 替代 Web Speech API 实现语音输入 | ⭐⭐⭐ **审核中** | 首次贡献者，跨浏览器兼容 |

**路线图信号解读**：
- **v1.1.5 正式版** 预计聚焦：ACP 协议稳定化、会话状态管理修复、前端性能优化
- **v1.2.x 可能方向**：模型供应商扩展（llama.cpp、Kimi）、MCP 工具可视化、成本优化（DeepSeek 缓存）

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 Issue | 用户原声/场景 |
|:---|:---|:---|
| **"停止/暂停是假的"** | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850), [#3750](https://github.com/agentscope-ai/QwenPaw/issues/3750), [#2190](https://github.com/agentscope-ai/QwenPaw/issues/2190) | "Web UI 暂停按钮仅前端止渲染，后端 Agent 继续执行"；点击停止后 `is_running` 未重置，新消息无响应 |
| **会话数据不可靠** | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843), [#3049](https://github.com/agentscope-ai/QwenPaw/issues/3049) | "聊天历史突然消失，本地文件在但网页加载失败"；"只能开新会话" |
| **MCP 生态体验差** | [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822), [#2495](https://github.com/agentscope-ai/QwenPaw/issues/2495) | "无限期卡死，除非自己停止"；"配置后不知道有哪些工具" |
| **记忆系统形同虚设** | [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) | "MEMORY.md 仅保留空白模板，无任何实质性记忆内容" |
| **魔法命令死板** | [#3894](https://github.com/agentscope-ai/QwenPaw/issues/3894) | "不能支持自己定义触发命令的字符，也不能根据光标位置灵活判断触发多次" |

### 😊 正向反馈

| 反馈 | 来源 | 说明 |
|:---|:---|:---|
| 社区响应速度快 | [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) 等 | 品牌关系问题得到及时澄清 |
| 前端性能优化可见 | [#3912](https://github.com/agentscope-ai/QwenPaw/pull/3912) 等 | 长会话列表卡顿问题被主动解决 |

### 🎯 典型使用场景

> "很多人使用的功能并不多，希望优先解决这些基础且高频使用的功能：**聊天+工具调用+长流程**这块保证稳定性和效率" — [#2190](https://github.com/agentscope-ai/QwenPaw/issues/2190) @SeoMP

> "我在魔塔社区部署了必应中文搜索 MCP 服务器...有时候是正常的有时候会无限期卡死" — [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) @cq10086123

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| Issue/PR | 创建时间 | 状态 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#2429 Cron Agent 中断后异常回复** | 2026-03-27 | 🟡 OPEN 34 天 | 定时任务核心场景，用户无法验证任务执行 | [#2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) |
| **#3702 技能池持续报错** | 2026-04-22 | 🟡 OPEN 6 天 | 技能系统可用性，缺乏有效错误信息 | [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) |
| **#3886 ACP 兼容性：Hermes Agent 无法调用** | 2026-04-27 | 🟡 OPEN 1 天 | **ACP 生态扩展关键阻塞**：`types.SimpleNamespace` 

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-29

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-04-29  
> **分析周期**: 过去 24 小时（2026-04-28 至 2026-04-29）

---

## 1. 今日速览

今日 ZeptoClaw 项目呈现 **纯依赖维护模式**，零 Issue 活动与零功能/修复型 PR，全部 15 个待合并 PR 均为 Dependabot 自动生成的依赖版本升级。项目核心代码库无直接推进，活跃度指标处于 **维护性低位**。值得注意的是，依赖更新覆盖 Rust 核心运行时（tokio）、安全基础设施（webpki-roots, lettre）、构建工具链（cargo-deny, install-action）及前端文档站点（Astro/Starlight），表明项目仍在持续接收上游安全补丁与性能改进，但缺乏人工维护者介入合并。整体健康度评估：**依赖更新及时但存在合并积压风险**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无合并或关闭的 PR。**

全部 15 个 PR 处于待合并状态（`OPEN`），无功能开发或 Bug 修复类贡献。项目代码层面今日 **零向前推进**。

| 类别 | 数量 | 状态 |
|:---|:---|:---|
| 功能/修复 PR | 0 | - |
| 依赖升级 PR | 15 | 全部待合并 |
| 已合并/关闭 | 0 | - |

---

## 4. 社区热点

**今日无社区讨论热点。**

所有 PR 均为 Dependabot 自动化提交，特征如下：
- **评论数**: 全部为 `undefined`（即零评论）
- **👍 反应**: 全部为 0
- **人工互动**: 零

**潜在信号分析**：依赖升级 PR 的完全静默状态可能反映：
1. 维护者近期未活跃处理合并队列
2. 社区贡献者尚未建立对依赖变更的 review 习惯
3. 项目处于功能稳定期，关注点转移至下游使用而非上游开发

---

## 5. Bug 与稳定性

**今日无新报告 Bug。**

但以下 **待合并的安全/稳定性相关依赖升级** 需关注：

| 优先级 | PR | 依赖 | 升级性质 | 风险说明 |
|:---|:---|:---|:---|:---|
| 🔴 高 | [#550](https://github.com/qhkm/zeptoclaw/pull/550) | tokio 1.50.0 → 1.51.1 | **运行时修复** | [修复了关键 bug](https://github.com/tokio-rs/tokio/releases)，影响异步运行时稳定性 |
| 🟡 中 | [#558](https://github.com/qhkm/zeptoclaw/pull/558) | webpki-roots 1.0.6 → 1.0.7 | **CA 证书更新** | 2026年4月根证书轮换，TLS 连接失败风险 |
| 🟡 中 | [#563](https://github.com/qhkm/zeptoclaw/pull/563) | lettre 0.11.20 → 0.11.21 | 邮件库安全补丁 | rustls-no-p 相关改进（摘要截断） |
| 🟢 低 | [#555](https://github.com/qhkm/zeptoclaw/pull/555) | zip 8.4.0 → 8.5.1 | 压缩库重构 | 标记为 refactor，需验证兼容性 |

> ⚠️ **积压风险**: tokio 与 webpki-roots 的升级涉及核心基础设施，长期未合并可能使项目暴露于已知问题。

---

## 6. 功能请求与路线图信号

**今日无功能请求。**

从现有 PR 推断近期技术方向：
- **文档站点持续迭代**: Astro/Starlight 的多次升级（[#552](https://github.com/qhkm/zeptoclaw/pull/552), [#554](https://github.com/qhkm/zeptoclaw/pull/554), [#557](https://github.com/qhkm/zeptoclaw/pull/557), [#559](https://github.com/qhkm/zeptoclaw/pull/559)）表明项目重视文档体验，可能为即将到来的功能发布做准备
- **构建/发布流程硬化**: cargo-deny、action-gh-release、upload-artifact 的升级暗示对供应链安全与发布可靠性的持续投入

---

## 7. 用户反馈摘要

**今日无用户反馈可提取。**

零 Issue 活动与零评论状态表明：
- 无新的使用痛点暴露
- 亦无用户满意度信号（正面或负面）
- 项目可能处于 **"静默使用"阶段**——用户基础存在但互动率低，或主要用户为早期采用者尚未形成规模

---

## 8. 待处理积压

### 🔴 紧急关注：依赖合并队列积压

| PR | 创建时间 | 滞留天数 | 风险 |
|:---|:---|:---|:---|
| [#549](https://github.com/qhkm/zeptoclaw/pull/549) - Debian base image | 2026-04-28 | 1+ | Docker 镜像安全更新 |
| [#550](https://github.com/qhkm/zeptoclaw/pull/550) - tokio | 2026-04-28 | 1+ | 核心运行时修复 |
| [#551](https://github.com/qhkm/zeptoclaw/pull/551) - upload-artifact | 2026-04-28 | 1+ | CI 可靠性 |
| [#552](https://github.com/qhkm/zeptoclaw/pull/552) - Astro | 2026-04-28 | 1+ | 文档站点 |
| [#553](https://github.com/qhkm/zeptoclaw/pull/553) - action-gh-release | 2026-04-28 | 1+ | 发布流程 |
| [#554](https://github.com/qhkm/zeptoclaw/pull/554) - Starlight | 2026-04-28 | 1+ | 文档站点 |
| [#555](https://github.com/qhkm/zeptoclaw/pull/555) - zip | 2026-04-28 | 1+ | 压缩功能 |
| [#556](https://github.com/qhkm/zeptoclaw/pull/556) - cargo-deny | 2026-04-28 | 1+ | 许可证/安全审计 |
| [#557](https://github.com/qhkm/zeptoclaw/pull/557) - Astro | 2026-04-28 | 1+ | 文档站点 |
| [#558](https://github.com/qhkm/zeptoclaw/pull/558) - webpki-roots | 2026-04-28 | 1+ | TLS 根证书 |
| [#559](https://github.com/qhkm/zeptoclaw/pull/559) - Starlight | 2026-04-28 | 1+ | 文档站点 |
| [#560](https://github.com/qhkm/zeptoclaw/pull/560) - libc | 2026-04-28 | 1+ | 系统调用兼容性 |
| [#561](https://github.com/qhkm/zeptoclaw/pull/561) - Vite | 2026-04-28 | 1+ | 前端构建工具 |
| [#562](https://github.com/qhkm/zeptoclaw/pull/562) - install-action | 2026-04-28 | 1+ | CI 工具链 |
| [#563](https://github.com/qhkm/zeptoclaw/pull/563) - lettre | 2026-04-28 | 1+ | 邮件功能 |

**建议维护者行动**：
1. **批量合并策略**: 同类依赖（如 Astro/Starlight 文档站点相关）可集中 review 后合并
2. **优先级排序**: tokio (#550)、webpki-roots (#558)、lettre (#563) 涉及运行安全，建议优先处理
3. **自动化强化**: 考虑启用 Dependabot 的 auto-merge 规则（针对 patch/minor 且 CI 通过的情况），减少人工瓶颈

---

## 附录：PR 完整清单

| # | 类型 | 依赖 | From → To | 链接 |
|:---|:---|:---|:---|:---|
| 563 | Rust | lettre | 0.11.20 → 0.11.21 | [PR #563](https://github.com/qhkm/zeptoclaw/pull/563) |
| 562 | GitHub Actions | taiki-e/install-action | 2.75.10 → 2.75.17 | [PR #562](https://github.com/qhkm/zeptoclaw/pull/562) |
| 561 | JavaScript (dev) | vite | 8.0.0 → 8.0.8 | [PR #561](https://github.com/qhkm/zeptoclaw/pull/561) |
| 560 | Rust | libc | 0.2.184 → 0.2.185 | [PR #560](https://github.com/qhkm/zeptoclaw/pull/560) |
| 559 | JavaScript | @astrojs/starlight | 0.38.2 → 0.38.3 | [PR #559](https://github.com/qhkm/zeptoclaw/pull/559) |
| 558 | Rust | webpki-roots | 1.0.6 → 1.0.7 | [PR #558](https://github.com/qhkm/zeptoclaw/pull/558) |
| 557 | JavaScript | astro | 6.0.8 → 6.1.6 | [PR #557](https://github.com/qhkm/zeptoclaw/pull/557) |
| 556 | GitHub Actions | EmbarkStudios/cargo-deny-action | 2.0.16 → 2.0.17 | [PR #556](https://github.com/qhkm/zeptoclaw/pull/556) |
| 555 | Rust | zip | 8.4.0 → 8.5.1 | [PR #555](https://github.com/qhkm/zeptoclaw/pull/555) |
| 554 | JavaScript | @astrojs/starlight | 0.38.2 → 0.38.3 | [PR #554](https://github.com/qhkm/zeptoclaw/pull/554) |
| 553 | GitHub Actions | softprops/action-gh-release | 2.6.1 → 3.0.0 | [PR #553](https://github.com/qhkm/zeptoclaw/pull/553) |
| 552 | JavaScript | astro | 6.0.5 → 6.1.6 | [PR #552](https://github.com/qhkm/zeptoclaw/pull/552) |
| 551 | GitHub Actions | actions/upload-artifact | 7.0.0 → 7.0.1 | [PR #551](https://github.com/qhkm/zeptoclaw/pull/551) |
| 550 | Rust | tokio | 1.50.0 → 1.51.1 | [PR #550](https://github.com/qhkm/zeptoclaw/pull/550) |
| 549 | Docker | debian | `4ffb3a1` → `cedb1ef` | [PR #549](https://github.com/qhkm/zeptoclaw/pull/549) |

---

*本日报基于 GitHub 公开数据自动生成，未包含私有仓库或讨论区信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-29

## 1. 今日速览

ZeroClaw 今日呈现**高活跃度、高积压特征**。过去24小时内，Issues 更新 20 条（16 活跃/新开，4 关闭），PR 更新 44 条（43 待合并，仅 1 合并），**合并率极低（2.3%）**，表明代码审查队列严重拥堵。社区聚焦三大方向：v0.7.4 里程碑冲刺、Web 仪表盘体验补齐、以及多通道协议（ACP/Matrix/Discord/Nextcloud）的稳定性修复。值得注意的是，4 个长期 Issue 今日关闭，包括架构 RFC #5574 的正式采纳和 Web 仪表盘构建问题的历史性修复，显示维护者在清理技术债务。但 43 个待合并 PR 中大量为高/中风险变更，发布节奏面临压力。

---

## 2. 版本发布

**无新版本发布**

v0.7.4 里程碑仍在推进中（追踪 Issue [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)），尚未达到发布条件。

---

## 3. 项目进展

### 已关闭 PR（1 条）

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#6162](https://github.com/zeroclaw-labs/zeroclaw/pull/6162) `fix(web): guard array-returning api helpers against non-array responses` | 为 Web API 辅助函数添加 `Array.isArray` 防御性检查 | 防止畸形 API 响应导致前端静默崩溃，低风险修复 |

### 已关闭 Issues（4 条，含历史性修复）

| Issue | 关闭意义 |
|:---|:---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web dashboard 不可用 | **历时 31 天的 S1 阻塞级 Bug 关闭**，解决了"Web UI 和 Tauri 桌面应用均提示 dashboard 未构建"的根因，26 条评论的漫长排查终结 |
| [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) Microkernel 架构 RFC | **v0.7.0→v1.0.0 架构转型正式采纳**，10 条评论达成共识，项目从"被动生长"转向"有意设计" |
| [#2628](https://github.com/zeroclaw-labs/zeroclaw/issues/2628) 全功能容器镜像 | 发布流水线将支持全 build options 编译的容器镜像，1 个 👍 |
| [#6187](https://github.com/zeroclaw-labs/zeroclaw/issues/6187) 配置参考文档缺失 | 快速修复，文档站点完整性提升 |

**整体评估**：架构层面取得里程碑式进展（Microkernel RFC 采纳），但代码合并 throughput 极低，43 个待合并 PR 形成显著瓶颈。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) Web dashboard 不可用 | **26** | 新用户首次体验阻塞，构建系统与运行时检测逻辑存在鸿沟 |
| 2 | [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) Microkernel 架构 RFC | **10** | 核心贡献者对代码库长期可持续性的深度焦虑，寻求从单体到微内核的治理结构 |
| 3 | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 多智能体 UX 流设计 | **7** | 用户需要原生支持多智能体协作的交互范式，7 天讨论期已结束，等待核心团队投票 |
| 4 | [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) v0.7.4 里程碑追踪 | **6** | 发布节奏透明度，社区需要知道哪些功能能进入下一版本 |
| 5 | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) Dream Mode 记忆巩固 | **5** | 长期记忆与反思学习的高级需求，对标人类认知的"睡眠巩固"机制 |

### 反应最多的 Issue

| Issue | 👍 | 说明 |
|:---|:---|:---|
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) 可配置的 `classify_channel_reply_intent` | **3** | 1:1 私聊场景下"是否回复"分类器误伤用户，社区痛点明确 |

**诉求分析**：社区从"能用"转向"好用"——要求 Web 零配置启动、私聊场景智能默认、多智能体工作流、以及类人的长期记忆机制。基础设施（构建、文档、配置）的摩擦成本是最大声量来源。

---

## 5. Bug 与稳定性

### S1 - 工作流阻塞（最高优先级）

| Issue | 状态 | 是否有 Fix PR | 说明 |
|:---|:---|:---|:---|
| [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) llama-server 服务不可用 | **OPEN** | ❌ 无 | llama-cpp 配置后 agent 功能完全失败，"All providers/models failed" |
| [#6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188) `enc2:` 加密配置在机器身份轮换后无法解密 | **OPEN** | ❌ 无 | **数据丢失级风险**：Yocto 重刷、新主机、volume 重置后所有 provider API key 永久不可恢复，加密设计存在单点故障 |

### S2 - 行为降级

| Issue | 状态 | 是否有 Fix PR | 说明 |
|:---|:---|:---|:---|
| [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) 本地图片读取失败 | **OPEN** | ❌ 无 | Skill 生成的图片使用本地路径，API 模型无法读取 |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) Matrix 语音转录失败：不支持的音频格式 | **OPEN** | ❌ 无 | Element Web/Android 客户端兼容性问题 |
| [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) `model_switch` 工具跨 turn 不持久，gateway/UI 路径完全忽略 | **OPEN** | ❌ 无 | 功能广告与实际行为不符，影响多模型工作流 |

### S3 - 次要问题

| Issue | 状态 | 是否有 Fix PR | 说明 |
|:---|:---|:---|:---|
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) Nextcloud Talk 错误使用 bot message API | **OPEN** | ❌ 无 | API 端点构造错误，bot secret 传递方式不当 |

**关联 Fix PRs**（待合并，可能缓解上述问题）：
- [#6189](https://github.com/zeroclaw-labs/zeroclaw/pull/6189) 非视觉上下文压缩时剥离图片标记
- [#6184](https://github.com/zeroclaw-labs/zeroclaw/pull/6184) Discord 入站图片附件保留
- [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) ACP 协议 v1 实现（含工具调用权限和反向通道）

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（已标注 P1/P2）

| Issue | 优先级 | 纳入 v0.7.4 可能性 | 关键信号 |
|:---|:---|:---|:---|
| [#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175) Web onboarding 与 CLI 体验对齐 | **P1** | ⭐⭐⭐ 高 | 有配套 PR 需求，[#6151](https://github.com/zeroclaw-labs/zeroclaw/issues/6151) 作为追踪 Issue，Web 仪表盘"一等公民"战略明确 |
| [#6151](https://github.com/zeroclaw-labs/zeroclaw/issues/6151) Web 交互平台追踪（onboarding、稳定性、聊天 UX） | **P1** | ⭐⭐⭐ 高 | `status:no-stale` 标签，维护者主动保护 |
| [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) Gateway 每 turn 记录成本和 token 用量 | **P1** | ⭐⭐⭐ 高 | PR 已开，#5118 的历史债务修复 |
| [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) ACP 协议会话取消支持 | **blocked** | ⭐⭐ 中 | 依赖 [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) 合并 |
| [#6053](https://github.com/zeroclaw-labs/zeroclaw/issues/6053) `zeroclaw config set/init` 支持动态 map 条目 | 无 | ⭐⭐ 中 | 配置系统核心能力缺口，影响 provider 模型动态管理 |

### 架构/长期信号

| Issue | 意义 |
|:---|:---|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 多智能体 UX 流 | 7 天讨论期已结束，等待核心团队 2/3 多数投票，若通过将提取至 `docs/proposals/` |
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) Dream Mode | 记忆系统的范式创新，可能定义 v0.8+ 的差异化能力 |
| [#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) 重新激活 HMAC tool receipts | 安全特性已文档化但运行时 wiring 被剥离，技术债务清理 |

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) harry-m | "私聊中助手直接忽略我" | 1:1 场景下 `classify_channel_reply_intent` 过度防御，用户被迫在私聊中"求回复" |
| [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) dingjingmaster | llama-cpp 配置后完全不可用 | 本地模型用户（隐私敏感/离线场景）的 core workflow 断裂 |
| [#6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188) perlowja | 机器重装后所有 API key 变砖 | 边缘部署/IoT 场景（Yocto）的运维灾难，加密设计未考虑身份轮换 |
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) freeekanayaka | Matrix 语音消息转录失败 | Element 主流客户端用户，音频格式处理过于严格 |

### 满意/期待点

- **架构 RFC 采纳**：WareWolf-MoonWall 的 Microkernel 提案获认可，核心贡献者对长期方向有信心
- **Web 仪表盘修复**：#4866 关闭终结了长达数月的"构建 dashboard"噩梦
- **多语言文档**：[#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170) 新增 zh-CN 翻译，国际化社区扩张

### 不满意/焦虑

- **合并瓶颈**：43 待合并 vs 1 合并，贡献者可能因延迟而失去动力
- **配置系统脆弱性**：动态 map、加密持久化、CLI/Web 配置同步均有明显缺口
- **通道协议碎片化**：Discord/Matrix/Nextcloud/ACP 各自有独立的附件/取消/认证问题

---

## 8. 待处理积压

### 需维护者紧急关注的长期项

| 类型 | 条目 | 积压天数 | 风险 |
|:---|:---|:---|:---|
| PR | [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) OTel tool spans 语义约定 | **7 天** | 阻塞 [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190)，可观测性栈堆积 |
| PR | [#6092](https://github.com/zeroclaw-labs/zeroclaw/pull/6092) fallback provider 配置读取修复 | **4 天** | 可靠性核心路径，medium risk 标签可能降低优先级 |
| PR | [#6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) DeepSeek V4 reasoning_content 捕获 | **4 天** | **high risk + manual**，影响主流模型兼容性 |
| Issue | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) Dream Mode | **11 天** | 创新特性但无维护者响应，可能流失至竞品 |
| Issue | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 多智能体 UX RFC | **10 天** | 7 天讨论期已结束，**等待核心团队投票**，流程阻塞 |

### 建议行动

1. **设立合并冲刺**：未来 48 小时内优先处理 P1 标签的 4 个 PR（#6159, #6164, #6171, #6175 关联）
2. **投票机制激活**：#5890 等待 2/3 核心团队投票，需明确时间表
3. **安全审计**：#6188 的 `enc2:` 设计缺陷需安全团队介入，评估是否为 v0.7.4 阻塞项

---

*日报基于 GitHub 公开数据生成，链接均为 `https://github.com/zeroclaw-labs/zeroclaw` 下对应编号。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*