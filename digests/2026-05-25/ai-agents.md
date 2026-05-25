# OpenClaw 生态日报 2026-05-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-25 00:37 UTC

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

---

# OpenClaw 项目日报 (2026-05-25)

---

## **1. 今日速览**
OpenClaw 今日活跃度极高：过去24小时内 Issues/PRs 总数达 1,000+，其中 468 条活跃 Issue 和 395 待合并 PR，表明社区贡献者积极。  
**版本发布**：3 个新版本（v2026.5.24-beta.2），主要聚焦 iMessage 反应式审批、网关性能优化及代理配置改进。  
**稳定性**：报告 1 个严重级 Telegram Bug (#86184) 已确认，另有 5+ 关键级 Issues 被标记并关联到 PR 进行中。

---

## **2. 版本发布**
### **v2026.5.24-beta.2**
#### **主要变更**
- **[iMessage 反应式审批](#)**  
  - `👍`（Like tapback）自动解析为 `allow-once`，`👎` 为 `deny`；允许列表从 `channels.imessage.allowFrom` 读取，`/approve <id> allow-always` 仍手动触发。  
  - [GitHub 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.5.24-beta.2)
- **网关性能优化**  
  - 复用稳定通道目录读取，避免重复检查边界，旋转 CPU 基准测试配置防止累积偏差。  
  - [相关 PR](#)
- **代理与安全加固**  
  - 本地 Ollama 代理启用时绕过 SSRF 防御（如 #81249），新增 `NO_PROXY` 豁免逻辑。  
  - [相关 PR](#)

---

## **3. 项目进展**
#### **今日合并 PR**
| PR | 类型 | 关键修复/功能 |
|----|------|----------------|
| [#86135](https://github.com/openclaw/openclaw/pull/86135) | Docker 权限修复 | 修复 `/home/node/.config` 所有权问题 |
| [#85341](https://github.com/openclaw/openclaw/pull/85341) | 架构重构 | 移除 Pi 依赖，集成 OpenClaw 核心运行时 |
| [#85744](https://github.com/openclaw/openclaw/pull/85744) | 策略合规性 | 添加 ingress 通道访问控制策略 |

**推进亮点**：
- **Channel Broker 系列 PR**（Phase 1~4）：整合 Telegram/Discord/iMessage 等插件的会话路由、允许列表等通用逻辑，减少重复维护。
- **安全加固**：敏感数据脱敏层（[#72733](https://github.com/openclaw/openclaw/pull/72733)）支持本地模型智能过滤，云端仅见占位符 `[VAULT_N]`。

---

## **4. 社区热点**
#### **Top 热门 Issues**
| Issue | 热度 | 诉求分析 |
|-------|------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 106 评论 | **Linux/Windows 客户端缺失**，用户强烈要求跨平台部署（macOS/iOS/Android）。 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 13 评论 | **API Key 掩码需求**：防止工具调用时泄露密钥，已有 PR 中 (#84581) 剥离明文提供商密钥。 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) | 12 评论 | **Rust 沙盒化提案**：安全模式限制外部访问，已有架构重构 (#85341) 为底层支持。 |

**信号解读**：  
用户对**安全性**（密钥掩码、沙盒）和**跨平台兼容性**（Linux/Windows）需求显著，项目正在通过 Channel Broker 和安全策略层优先响应。

---

## **5. Bug 与稳定性**
#### **严重问题**
| Issue | 类型 | 影响 | 修复状态 |
|-------|------|------|----------|
| [#86184](https://github.com/openclaw/openclaw/issues/86184) | Telegram 消息丢失 | 工具回合后收到泛错误回退 | 🔍 调查中 |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | Codex 崩溃 | 图像请求中途断开 | ✅ [PR 进行中](https://github.com/openclaw/openclaw/pull/85958) |
| [#59330](https://github.com/openclaw/openclaw/issues/59330) | Control UI 配置异常 | Raw 模式永久禁用 | ✅ 修复 [#86060](https://github.com/openclaw/openclaw/pull/86060) |

**稳定性评分**：  
- 当前无公开崩溃，但存在多个高优先级回归问题，需关注 PR 合并进度。

---

## **6. 功能请求与路线图信号**
#### **高优先级需求**
| Issue | 关联 PR | 版本规划 |
|-------|----------|-----------|
| 预编译 APK ([#9443](https://github.com/openclaw/openclaw/issues/9443)) | 暂无 | 可能纳入 v2026.6.x  |
| Slack Block Kit ([#12602](https://github.com/openclaw/openclaw/issues/12602)) | 暂无 | 需评估 SDK 扩展 |
| 多轮会话 Webhook ([#11665](https://github.com/openclaw/openclaw/issues/11665)) | 暂无 | 依赖 Channel Broker 整合 |

**路线信号**：  
- **Channel Broker 系列**（Phase 1~4）正将分散的通道管理统一，预计下个版本可降低维护成本。

---

## **7. 用户反馈摘要**
#### **痛点与场景**
- **安全焦虑**：  
  - `#10659` 用户强调 API Key 掩码需求，现有方案通过 `normalizeThenSanitize()` 实现（[#84581](https://github.com/openclaw/openclaw/pull/84581)）。  
- **跨平台体验**：  
  - `#75` 反映 Linux/Windows 客户端缺失，用户期望类似 macOS/iOS 的功能集。  
- **消息可靠性**：  
  - `#86184` Telegram 消息丢失问题，影响生产环境监控。  

**满意点**：  
- iMessage 反应式审批（`👍`/`👎`）获得明确正向反馈（[#75](https://github.com/openclaw/openclaw/issues/75)）。

---

## **8. 待处理积压**
#### **长期未响应问题**
| Issue | 状态 | 提醒 |
|-------|------|------|
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | Agent 虚假承诺跟进 | 需验证是否与 #85341 架构改动相关 |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | Safeguard 忽略配置模型 | 可能受策略层更新影响 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | Exec 审批白名单 | 需结合 #86135 权限修复 |

**建议**：  
- 优先跟进 Channel Broker 整合（Phase 3）及安全策略层（Policy 合规性 PR）的关联问题。

---

**总结**：OpenClaw 在 **安全强化**（密钥掩码、沙盒）、**跨平台支持** 和 **性能优化**（网关）上进展迅猛，Channel Broker 架构重构是关键里程碑。社区对稳定性和功能扩展需求强烈，需加速关键 PR 合并。

---

## 横向生态对比

---

### **AI 智能体与个人 AI 助手开源生态横向对比分析报告（2026-05-25）**

---

#### **1. 生态全景**
当前 AI 智能体/个人 AI 助手开源生态呈现 **“多赛道并行，核心工具链与场景驱动”** 态势：  
- **技术路线分化明显**：从基础代理框架（如 OpenClaw、IronClaw）、垂直场景工具（如 NanoBot、NanoClaw）、轻量化方案（如 NullClaw、TinyClaw）到企业级平台（如 LobsterAI、ZeroClaw）。  
- **社区活跃度分层**：头部项目（OpenClaw、Hermes Agent）每日 PR/Issues 超千条，长尾项目（如 ZeptoClaw）则聚焦稳定性修复。  
- **共性痛点**：安全加固（密钥管理、沙盒）、跨平台支持（Linux/Windows）、工具链鲁棒性（循环检测、错误恢复）为全领域需求。

---

#### **2. 各项目今日活跃度对比**
| 项目名称           | Issues（活跃+新开） | PRs（待合并） | Release 情况 | 健康度评估                     |
|--------------------|---------------------|---------------|--------------|------------------------------|
| **OpenClaw**       | 468                | 395           | 3 Beta 发布  | ⭐⭐⭐⭐⭐ (高优先级修复密集) |
| Hermes Agent       | 32                 | 34            | 无           | ⭐⭐⭐ (关键 Bug 响应中)     |
| NanoBot            | 2                  | 11            | 无           | ⭐⭐ (功能迭代阶段)         |
| ZeroClaw           | 47                 | 46            | 无           | ⭐⭐⭐⭐ (架构优化为主)      |
| NanoClaw           | 1                  | 2             | 无           | ⭐ (问题修复优先)           |
| LobsterAI          | 0                  | 0             | 0            | ⭐⭐ (PR 主导)              |

---

#### **3. OpenClaw 在生态中的定位**
- **优势**：  
  - **全渠道覆盖**：iMessage/Telegram/Discord 等主流协议均内置插件，提供 **“一站式代理网关”** 能力。  
  - **社区规模**：Issues/PR 日均超800条，评论量高，开发者协作透明，用户反馈直接推动版本迭代。  
- **技术差异**：  
  - **Channel Broker 架构**：将分散的通道逻辑统一抽象，降低维护成本（如 Phase 3 整合中）。  
  - **安全与性能并重**：代理配置脱敏、Ollama 代理 SSRF 防御等设计被多个项目效仿。  
- **对标对比**：  
  - 较 IronClaw（侧重安全审计）、ZeroClaw（侧重多通道集成），OpenClaw 在 **生产级稳定性** 和 **用户参与度** 上领先。

---

#### **4. 共同关注的技术方向**
| **诉求类型**               | **涉及项目**                                                                 | **具体诉求**                                                                 |
|---------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **工具链鲁棒性**          | OpenClaw, NanoBot, Hermes Agent, ZeroClaw                                   | 工具调用循环检测、错误恢复、超时控制、速率限制                                 |
| **安全加固**              | OpenClaw, IronClaw, Moltis, NanoClaw, ZeroClaw                             | 密钥掩码、沙盒隔离、环境变量过滤、权限边界                                    |
| **跨平台支持**            | OpenClaw, NanoClaw                                                          | Linux/Windows/macOS 客户端缺失，部署兼容性                                    |
| **多代理协作**            | OpenClaw, NanoBot, ZeroClaw                                                 | 消息总线、会话中继、任务分叉                                                  |
| **模型适配**              | NanoBot, Hermes Agent, CoPaw                                                | Anthropic/Gemini 流式兼容、OpenAI 标准接口支持                                 |

---

#### **5. 差异化定位分析**
| **项目**       | **功能侧重**                          | **目标用户**               | **技术架构特点**                     |
|----------------|--------------------------------------|----------------------------|--------------------------------------|
| **OpenClaw**   | 全渠道代理网关 + 安全策略引擎         | 企业/开发者、自动化运维    | Channel Broker 抽象层 + 插件化运行时    |
| **Hermes Agent**| 多平台消息路由 + 长会话上下文管理     | 复杂场景（如客服/文档协作） | Telegram/DingTalk 智能提及 + Kanban DB |
| **NanoBot**    | 子代理采样温度控制 + 循环检测         | 脚本/任务自动化           | 轻量级 Agent 框架                    |
| **ZeroClaw**   | 联邦通信（Mastodon/Zulip） + 看板自动化 | 分布式团队/企业 IM        | 模块化渠道运行时 + 治理 RFC 提案        |
| **LobsterAI**  | 定时任务 + 多Agent 消息持久化         | 开发者/运维               | SQLite 事务优化 + 状态监控             |
| **NullClaw**   | HTTP 模块重构（Zig 标准库替代 curl）   | 基础设施开发者            | 语言原生网络栈 + 错误体系迁移          |

---

#### **6. 社区热度与成熟度分层**
- **快速迭代阶段**（⭐⭐⭐⭐）：  
  - **OpenClaw**：Beta 版本高频发布，PR 合并速度极快（日均1.5条）。  
  - **ZeroClaw**：RFC 提案活跃，多通道扩展（Twilio/SMS/Mastodon）需求强烈。  
- **质量巩固阶段**（⭐⭐）：  
  - **Hermes Agent**：关键 Bug（如 Telegram 消息丢失）需紧急跟进，但架构重构（Kanban DB）稳步推进。  
  - **NanoClaw/NanoBot**：功能完善为主，社区反馈较少，适合技术深度用户。  

---

#### **7. 值得关注的趋势信号**
- **安全即代码（SaC）**：OpenClaw 的代理配置脱敏、IronClaw 的审计漏斗、Moltis 的沙盒日志静默化，表明 **“安全配置可验证”** 是行业共识。  
- **多模态协作标准化**：ZeroClaw 的多渠道事件流（SSE/WebSocket）、OpenClaw 的 Channel Broker，推动 **“协议无关的消息路由”** 成为架构焦点。  
- **代理自治与管控**：NanoBot 的子代理行为同质化、Hermes Agent 的智能提及、OpenClaw 的 `allow-always` 白名单，反映用户对 **“灵活权限粒度”** 的需求升级。  
- **轻量化与可观测性**：NullClaw 的 HTTP 重构、LobsterAI 的会话续传错误处理，显示 **“基础设施级可靠性”** 是底层项目的核心指标。  

---

**总结建议**：  
- **开发者**：若追求全渠道代理，优先关注 OpenClaw；若需企业级安全，参考 IronClaw 审计模式。  
- **决策者**：安全加固（密钥/沙盒）和跨平台部署（OpenClaw vs NanoClaw）是落地瓶颈，需针对性选择。  
- **趋势价值**：生态正从“单体代理”向“模块化、安全、多通道”演进，技术栈需平衡性能与合规。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

---

### **NanoBot 项目日报 | 2026-05-25**

---

#### **1. 今日速览**
- NanoBot 今日活跃度较高，共更新 **4 Issues**（新开/活跃 2，关闭 2）和 **17 PR**（待合并 11，已合并/关闭 6），无新版本发布。
- 社区聚焦于**工具循环检测、子代理采样温度控制、Dream 系统优化**等核心功能改进，多个 PR 已进入测试或合并流程。
- 近期问题主要集中在**OpenAI 兼容 API 的稳定性**（如 `tool_call_id` 一致性）和**多代理协作通信**（PR #3992）。

---

#### **2. 版本发布**
- **无新发布**。

---

#### **3. 项目进展**
| PR 编号 | 状态   | 关键变更                                                                 | GitHub 链接                     |
|---------|--------|--------------------------------------------------------------------------|---------------------------------|
| #3985   | OPEN   | 新增「循环检测 & 速率限制硬阻断」功能，防止模型重复调用工具或超时请求       | [查看详情](https://github.com/HKUDS/nanobot/pull/3985) |
| #3992   | OPEN   | 实现跨实例多代理消息总线，支持代理间实时通信                               | [查看详情](https://github.com/HKUDS/nanobot/pull/3992) |
| #3984   | CLOSED | 修复 OpenAI 兼容 API 的 `tool_call_id` 不一致问题（Issue #3980）           | [查看详情](https://github.com/HKUDS/nanobot/pull/3984) |
| #3975   | CLOSED | 允许 `spawn` 工具为子代理指定独立采样温度，解决任务风格一致性问题（Issue #3969） | [查看详情](https://github.com/HKUDS/nanobot/pull/3975) |

---

#### **4. 社区热点**
- **最热 Issue：**  
  - [#3986: 通用工具级循环检测与速率限制护栏](https://github.com/HKUDS/nanobot/issues/3986)  
    - 用户反馈大模型频繁陷入重复调用（如 `grep` 相同参数多次）、短时高频请求（如 `list_dir` 重复输出），现有机制覆盖不足。
  - **关联 PR：** [#3985](https://github.com/HKUDS/nanobot/pull/3985) 已提出解决方案，计划通过硬阻断机制提升鲁棒性。
  
- **最热 PR：**  
  - [#3992: 多代理消息总线](https://github.com/HKUDS/nanobot/pull/3992)  
    - 需求来自复杂场景（如分布式任务拆分），用户希望代理间可异步通信，目前 PR 已完成并准备合并。

---

#### **5. Bug 与稳定性**
| Issue/PR 编号 | 问题描述                                                                 | 严重程度 | Fix PR 状态          |
|---------------|--------------------------------------------------------------------------|----------|---------------------|
| #3980         | OpenAI 兼容 API（如 GLM-4.7/Kimi 2.6）中 `tool_call_id` 与结果不匹配       | 中       | ✅ 已通过 PR #3984 修复 |
| #3969         | `spawn` 工具无法为子代理设置独立采样温度，导致所有代理风格一致              | 高       | ✅ 已通过 PR #3975 修复 |

---

#### **6. 功能请求与路线图信号**
- **高优先级候选：**  
  - **循环检测与限流（#3986 + #3985）**：用户强烈需求，预计下个版本加入核心逻辑。  
  - **多代理协作（#3992）**：长期规划中的分布式能力，可能成为 v2.0 标志特性。  
  - **Dream 系统重构（PR #3990）**：合并两阶段内存以提升学习效率，需进一步测试。

---

#### **7. 用户反馈摘要**
- **痛点：**  
  - **工具循环问题**（如重复调用、无结果仍继续）影响任务效率，尤其对自动化脚本场景。  
  - **子代理行为同质化**：同一批任务因固定采样温度难以适配不同需求（精确 vs 创意）。  
- **满意点：**  
  - OpenAI 兼容 API 的 `tool_call_id` 修复 (#3984) 获得快速响应，体现维护者对生态兼容性的重视。

---

#### **8. 待处理积压**
| Issue/PR 编号 | 状态   | 说明                                                                 |
|---------------|--------|----------------------------------------------------------------------|
| #3973         | OPEN   | Dream 系统的饥饿问题与实时学习缺失，需评估重构方案（关联 PR #3990）     |
| #3985         | OPEN   | 循环检测功能待测试，建议优先验证高并发场景下的稳定性                   |

---

**总结**：NanoBot 在核心功能（工具鲁棒性、多代理协作）上取得显著进展，社区反馈积极。建议重点关注循环检测功能的落地及 Dream 系统重构，同时持续监控 OpenAI 兼容 API 的生态适配问题。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

---

# Hermes Agent 项目日报 | 2026-05-25

---

## 1. 今日速览
Hermes Agent 在 2026-05-25 保持了高度活跃的开发与社区互动状态：**过去24小时共产生50个 Issues（32新开/活跃，18已关闭）和50个 PR（34待合并，16已合并/关闭），无新版本发布**。整体活跃度处于高峰，主要集中在 **Telegram网关稳定性、模型适配、Kanban任务管理** 三大领域，反映出用户在使用复杂场景（如多平台协作、长会话、自动化工作流）时对稳定性和功能完整性的强烈需求。

---

## 2. 版本发布  
*无新版本发布*

---

## 3. 项目进展
**关键 PR 推进情况**：
- **PR #31740** ([链接](https://github.com/nousresearch/hermes-agent/pull/31740))：修复 Kanban SQLite 的崩溃问题，引入文件锁机制和失败安全策略，显著提升多任务并发下的数据持久化可靠性。
- **PR #31734** ([链接](https://github.com/nousresearch/hermes-agent/pull/31734))：修复 `prefill_messages_file` 中嵌套系统消息导致 OpenAI 兼容网关请求结构异常的问题，确保严格提供商兼容性。
- **PR #29527** ([链接](https://github.com/nousresearch/hermes-agent/pull/29527))：恢复 Claude Code 独立支持（此前通过 Anthropic 别名实现），提供原生模型切换和 CLI 传输层，增强开发者生态集成能力。

**整体进度**：修复了多个关键路径上的稳定性问题（如网关、SQLite、消息处理），并推进了多平台适配器（Telegram/DingTalk）和功能扩展（如智能路由），为多模态协作场景打下基础。

---

## 4. 社区热点
**最活跃 Issues/PRs**：
- **Issue #29125** ([链接](https://github.com/nousresearch/hermes-agent/issues/29125))：24条评论，7赞，反映 **Claude CLI 集成失效** 问题，涉及 Anthropic 模型配置和令牌传递流程，是用户最广泛反馈的痛点之一。
- **PR #31713** ([链接](https://github.com/nousresearch/hermes-agent/pull/31713))：新增 Telegram 智能提及路由器，解决群聊中未明确提及时的消息路由问题，评论量虽低但需求明确。
- **Issue #31502** ([链接](https://github.com/nousresearch/hermes-agent/issues/31502))：3次报告 Kanban SQLite 数据库在快速任务创建下崩溃，影响核心任务管理功能。

**诉求分析**：用户迫切希望 **跨平台消息可靠性**（尤其 Telegram）、**长会话上下文管理**（如工具调用冗余）及 **自动化工作流**（Kanban 生命周期事件）。

---

## 5. Bug 与稳定性
**按严重度排序**：
| Issue ID | 描述 | 严重性 | Fix PR |
|----------|------|--------|--------|
| **#31110** ([链接](https://github.com/nousresearch/hermes-agent/issues/31110)) | Telegram `TimedOut` 崩溃整个网关（P1） | 高 | 暂无 |
| **#30959** ([链接](https://github.com/nousresearch/hermes-agent/issues/30959)) | 内部字段泄漏至严格提供商引发 HTTP 400 重试循环（P1） | 高 | 暂无 |
| **#31502** ([链接](https://github.com/nousresearch/hermes-agent/issues/31502)) | Kanban DB 在快速任务创建后损坏 | 中高 | PR #31740 修复中 |
| **#31109** ([链接](https://github.com/nousresearch/hermes-agent/issues/31109)) | Discord 插件禁用配置被忽略（P2） | 中 | 待定 |

---

## 6. 功能请求与路线图信号
**潜在纳入下一版本的功能**：
- **RFC #31392** ([链接](https://github.com/nousresearch/hermes-agent/issues/31392))：Agent 原生任务中继 + 自动分叉子代理 + 人工审批门控，已被 PR #31622（内存边界触发）和 PR #31729（Kanban 生命周期通知）部分响应，可能作为 **多代理协作增强** 主线。
- **Feature Request #31668** ([链接](https://github.com/nousresearch/hermes-agent/issues/31668))：Anthropic 超额使用问题，需优化令牌计算逻辑（关联 PR #28074）。
- **RFC #31727** ([链接](https://github.com/nousresearch/hermes-agent/issues/31727))：TUI 平滑滚动优化，改善用户体验。

---

## 7. 用户反馈摘要
**痛点提炼**：
- **稳定性**：Telegram 消息丢失（Issue #31165）、Discord 连接持续尝试（Issue #30736）、Kanban DB 损坏（Issue #31502）——表明用户对 **实时通信可靠性** 要求极高。
- **易用性**：`/resume` 命令因标题截断失效（Issue #14082）、工具密集型会话回顾混乱（Issue #4337）——需要更直观的上下文导航设计。
- **生态整合**：Claude Code 独立支持（PR #29527）反映用户对 **原生厂商适配** 的期待。

---

## 8. 待处理积压
**长期未响应项**：
- **Issue #7484** ([链接](https://github.com/nousresearch/hermes-agent/issues/7484))（P2）：Session ID 固定化漏洞，存在会话劫持风险，需尽快修复。
- **Issue #23724** ([链接](https://github.com/nousresearch/hermes-agent/issues/23724))（P3）：Hindsight 插件重复同步历史记录，影响文档存储效率，已有 PR 但未合并。
- **Issue #31666** ([链接](https://github.com/nousresearch/hermes-agent/issues/31666))（P2）：Codex Responses 适配器名称校验问题，需严格 OpenAPI 合规性。

---

**总结**：Hermes Agent 在复杂场景下的 **稳定性** 和 **功能扩展** 是近期焦点，建议优先处理高优先级 Bug（如 Telegram 崩溃），同时推进多代理协作路线图。社区活跃度良好，需持续关注用户反馈中的跨平台痛点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

---

# **PicoClaw 项目日报 | 2026-05-25**

---

## **1. 今日速览**
过去24小时内，PicoClaw 保持较高活跃度：  
- **代码贡献**：10个PR（8条待合并，2条已关闭），涉及核心功能改进、稳定性修复及多语言支持。  
- **社区互动**：4个Issue更新（含2条活跃讨论），重点关注工具安全策略和跨账号配置需求。  
- **版本发布**：发布`v0.2.9-nightly.20260524.d499cbec`夜间构建版，包含最新主干变更。  
整体状态：**开发推进顺利，社区参与度高，但部分关键Issue仍需跟进**。

---

## **2. 版本发布**
**Release: `nightly v0.2.9-nightly.20260524.d499cbec`**  
- **内容概要**：自动化构建，基于 `main` 分支的最近提交（[完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)）。  
- **注意事项**：  
  - 此版本为不稳定构建，建议测试环境使用。  
  - 无破坏性变更记录，但需关注后续合并至稳定分支的PR影响。

---

## **3. 项目进展**
### **已合并/关闭 PR**
- **#2759** [🔗](https://github.com/sipeed/picoclaw/pull/2759)  
  修复检索工具（`short_grep`/`short_expand`）默认会话范围问题，避免跨会话搜索导致的误匹配，提升数据隔离安全性。  
- **#2938** [🔗](https://github.com/sipeed/picoclaw/pull/2938)  
  修复Cron任务执行时缺失`"action": "run"`参数的回归问题，确保定时任务正常触发。  

### **待合并 PR 亮点**
- **#2937** [🔗](https://github.com/sipeed/picoclaw/pull/2937)  
  引入**Agent协作总线**（Mailboxes+线程隔离+权限控制），为多代理协作提供结构化通信框架，可能成为未来扩展基础。  
- **#2936** [🔗](https://github.com/sipeed/picoclaw/pull/2936)  
  修复技能依赖二进制检查缺陷（如`agent-browser`在低端设备上的兼容性问题），提升部署可靠性。  

---

## **4. 社区热点**
### **最热 Issue：**#28 (LM Studio 连接请求)** [🔗](https://github.com/sipeed/picclaw/issues/28)  
- **背景**：用户请求简化与本地大模型服务（如LM Studio）的集成流程，当前配置门槛较高。  
- **诉求信号**：  
  - 评论中强调“易用性”是核心痛点，尤其在Android端部署场景。  
  - 已有2人点赞，可能成为下一版本优先优化项。  

### **次热 Issue：**#1042 (exec工具路径拦截误判)** [🔗](https://github.com/sipeed/picclaw/issues/1042)  
- **问题**：`curl`等工具因路径正则匹配错误被安全策略拦截，实际无需路径操作。  
- **影响**：阻塞天气等基础功能，已有13条评论，急需修复。  

---

## **5. Bug 与稳定性**
| 严重程度 | Issue/PR | 描述 | 修复进度 |
|----------|---------|------|----------|
| 高       | #1042  | `exec.guardCommand`误判合法命令路径 | ✅ 需修复（未合并PR） |
| 中       | #2938  | Cron任务参数缺失导致静默失败 | ✅ 已合并 |
| 低       | #2936  | 技能依赖二进制未正确过滤 | ✅ 已合并 |

---

## **6. 功能请求与路线图信号**
- **微信多账号支持 (#2883)** [🔗](https://github.com/sipeed/picoclaw/pull/2883)  
  动态识别`weixin_*`配置键，允许管理多个微信账号，符合多设备用户需求。  
- **Agent协作总线 (#2937)** [🔗](https://github.com/sipeed/picoclaw/pull/2937)  
  可能推动多代理协作场景落地，需评估对现有架构的影响。  
- **繁体中文文档 (#2935)** [🔗](https://github.com/sipeed/picoclaw/pull/2935)  
  完善国际化支持，覆盖台湾地区用户。  

---

## **7. 用户反馈摘要**
- **痛点**：  
  - 工具链安全策略过于严格（如#1042），误伤高频命令。  
  - 本地模型集成体验复杂（#28），尤其对非技术用户不友好。  
- **满意点**：  
  - 多语言支持（如繁体中文PR）获得积极响应。  
  - 回归问题（Cron任务）快速修复，体现维护响应速度。  

---

## **8. 待处理积压**
- **#1042**：需紧急修复`exec.guardCommand`的正则逻辑，建议结合具体用例调整白名单规则。  
- **#28**：若资源允许，可优先实现LM Studio等服务的标准化插件接口，降低集成成本。  
- **长期PR**：  
  - **#2904/2906**（Agent循环重载与健康监控）：稳定性改进，需进一步测试验证。  

--- 

**总结**：PicoClaw 在功能扩展和稳定性上均有进展，但工具链安全与用户体验仍需持续优化。建议优先跟进高优先级Issue（如#1042），并规划下版本迭代方向（如多账号、协作总线）。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw 项目动态日报（2026-05-25）**

---

## 1. **今日速览**  
过去24小时内，NanoClaw 保持中等活跃度：  
- **1条新 Issue** 报告关键功能缺陷（`engage_mode='always'`消息静默丢弃）。  
- **3条 PR** 提交，其中1条已合并（新增管理员批量查询接口），2条待合并（平台ID优化、权限继承改进）。  
- **无新版本发布**，但社区贡献持续聚焦于核心功能与稳定性优化。  

> 📊 **健康度评估**：活跃度高，但需关注未合并PR的进度及新Issue的响应速度。

---

## 2. **版本发布**  
❌ 无新版本发布。

---

## 3. **项目进展**  
✅ **已合并 PR #2604** ([链接](https://github.com/qwibitai/nanoclaw/pull/2604))  
- **内容**：新增 `/admin/agent-activity` 批量端点，支持管理员快速获取用户代理的最后活动时间。  
- **意义**：显著提升后台管理效率，减少历史数据查询的延迟问题。  

🔄 **待合并 PR**：  
- **#2607** ([链接](https://github.com/qwibitai/nanoclaw/pull/2607))：修复入站消息动作使用原始平台ID，避免因内部复合ID无效导致的操作失败。  
- **#2605** ([链接](https://github.com/qwibitai/nanoclaw/pull/2605))：通过OneCLI继承父代理权限，增强多代理协作时的权限管理能力。  

---

## 4. **社区热点**  
🔥 **高关注度 Issue #2606** ([链接](https://github.com/qwibitai/nanoclaw/issues/2606))  
- **问题**：`engage_mode='always'`配置下消息被静默丢弃，因`evaluateEngage()`未正确处理该模式，导致无代理参与时逻辑失效。  
- **背景**：此问题可能影响依赖强制交互模式的场景（如实时客服系统），需紧急修复。  

---

## 5. **Bug 与稳定性**  
⚠️ **严重 Bug #2606**  
- **现象**：特定配置下消息完全丢失，无错误日志。  
- **状态**：尚无修复PR提交，需优先处理。  

---

## 6. **功能请求与路线图信号**  
🚀 **潜在下一版本候选功能**：  
- **权限继承 (#2605)**：多代理权限管理的标准化需求强烈，可能纳入后续版本。  
- **平台ID适配 (#2607)**：第三方平台兼容性改进，符合生态扩展趋势。  

---

## 7. **用户反馈摘要**  
💬 **痛点提炼**：  
- **静默丢弃问题 (#2606)**：开发者抱怨缺乏错误提示，调试困难（`no_agent_engaged`原因不透明）。  
- **管理效率 (#2604)**：管理员反馈逐条查询活动时间繁琐，批量接口是刚需。  

---

## 8. **待处理积压**  
⏳ **长期待办项**：  
- **Issue #2606**：需尽快分配修复，建议结合`engage_mode`逻辑审查。  
- **PR #2607/#2605**：建议维护者评估优先级，尤其#2607涉及跨平台兼容性。  

---

### **总结**  
NanoClaw 近期贡献质量较高，但需加快关键缺陷修复（如消息静默问题）和PR合并节奏。社区对管理工具和权限功能的期待明确，可据此规划下一版本重点方向。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-05-25）

---

## 1. **今日速览**
过去24小时内，NullClaw 保持中等活跃度：
- 新增1条活跃 Issue（功能请求），1条已合并 PR（代码重构）。
- 无新版本发布，但关键基础设施优化（HTTP 模块重构）完成。
- Issues/PRs 更新频率稳定，社区参与度良好，但核心功能改进仍需更多反馈。  
[GitHub 数据概览](https://github.com/nullclaw/nullclaw)

---

## 2. **版本发布**
**无新版本发布**。

---

## 3. **项目进展**
### ✅ 合并 PR #881: `refactor(http): remove runtime curl subprocesses`  
- **内容**：将依赖 `curl` 子进程的 Zig HTTP 实现替换为标准库 `std.http`，重构了以下模块：
  - 提供者（Providers）、频道（Channels）、网关（Gateway）、工具（Tools）、内存API、更新路径、语音和 SSE 接口。
  - 重命名相关错误类型（从 `Curl*` 到 `Http*`）。
- **意义**：显著提升性能并减少外部依赖，为后续模块化扩展奠定基础。  
[PR 链接](https://github.com/nullclaw/nullclaw/pull/881)

---

## 4. **社区热点**
### 🔥 活跃 Issue #919: [Feature] Allow disabling automatic memory recall (FTS5) per-message  
- **诉求**：用户希望能在每条消息中禁用硬编码的 FTS5/BM25 召回机制（如 `DEFAULT_RECALL_LIMIT=5` 等参数），以支持更灵活的上下文控制。  
- **现状**：Issue 创建于 2026-05-18，最近更新于 24小时前，已有1条评论但未获明确方案。  
- **信号**：反映用户对个性化记忆管理的强烈需求，可能影响多模态或低延迟场景的体验。  
[Issue 链接](https://github.com/nullclaw/nullclaw/issues/919)

---

## 5. **Bug 与稳定性**
**无新报告 Bug 或崩溃问题**。

---

## 6. **功能请求与路线图信号**
### 📌 高优先级待开发：
- **动态召回配置**（Issue #919）：允许用户按消息级别调整 FTS5/BM25 参数，可能成为 v1.2 核心功能。  
- **HTTP 模块优化**（PR #881）：已合并，下一步可探索 WebSocket 或 gRPC 集成。  

---

## 7. **用户反馈摘要**
- **痛点**：  
  - 当前自动召回机制缺乏灵活性，无法适应不同场景（如实时对话 vs 长文档分析）。  
  - 硬编码参数限制了高级用户的自定义能力。  
- **满意点**：  
  - HTTP 重构被认可（PR 虽未获点赞，但技术贡献明确）。  
- **不满意点**：  
  - Issue #919 暴露的“一刀切”设计可能影响专业用户的生产力。  

---

## 8. **待处理积压**
### ⏳ 长期未响应 Issue：
- **#919**（功能请求）：需尽快评估是否纳入短期路线图。建议维护者回复初步设计方向（如新增 API 参数或配置层）。  

---

**健康度总结**：  
- ✅ **技术债清理**：HTTP 重构显著提升架构健壮性。  
- ⚠️ **需求响应延迟**：关键功能（动态召回）需加速推进以避免用户流失。  
- 🔍 **社区活跃度**：Issue/PR 互动正常，但需引导用户提交更具体的测试用例或场景说明。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

# IronClaw 项目日报（2026-05-25）

---

## 1. **今日速览**
IronClaw 今日保持高强度开发节奏，**Issues 新增 22 条（活跃/新开 19 条），PR 提交 50 条（待合并 48 条）**，无新版本发布。核心团队正密集推进 Reborn 架构重构、工具执行安全加固及多通道适配工作，社区对工具链安全和认证交互的讨论尤为热烈。  
🔗 [GitHub 数据概览](https://github.com/nearai/ironclaw)

---

## 2. **版本发布**
* 无新版本发布。

---

## 3. **项目进展**
### ✅ 关键 PR 合并/关闭
- **[PR #4022]** 修复工具错误分类回归问题：HTTP 响应错误不再终止运行，改为模型可见的可恢复错误（[#4014](https://github.com/nearai/ironclaw/issues/4014) 相关）。  
  *影响范围*：工具链稳定性提升。  
- **[PR #4021]** 新增 CI 边界测试，强制工具执行必须通过审计漏斗 `ToolDispatcher::dispatch`，确保安全约束（[Issue #4019](https://github.com/nearai/ironclaw/issues/4019) 第一步）。  
- **[PR #3903]** 引入 `RuntimeCredentialTarget::PathPlaceholder` 并强化生产环境凭据边界，解决潜在泄漏风险（[Issue #3917](https://github.com/nearai/ironclaw/issues/3917)）。  
- **[PR #4004 & #4007]** 实现 Reborn 本地开发环境支持 HTTP 和持久化检查点存储，为多通道集成铺路。  

---

## 4. **社区热点**
### 🔥 高互动 Issues/PRs
| 编号 | 标题 | 链接 | 热度分析 |
|------|------|------|----------|
| **Issue #3259** | crates.io 发布滞后导致下游依赖锁定在 v0.24.0 | [详情](https://github.com/nearai/ironclaw/issues/3259) | **8 条评论**，涉及 CVE 漏洞（wasmtime 28.x），需紧急跟进版本同步。 |
| **PR #4022** | 工具错误恢复逻辑修复 | [详情](https://github.com/nearai/ironclaw/pull/4022) | 核心安全改进，评论量高反映工具链稳定性重要性。 |
| **Issue #1739** | 异步交易审批系统（WalletConnect） | [详情](https://nearai/ironclaw/issues/1739) | 用户明确需求，涉及金融场景安全交互。 |

---

## 5. **Bug 与稳定性**
### ⚠️ 今日报告的问题
| 严重性 | Issue/描述 | 状态 | 修复进度 |
|--------|------------|------|----------|
| **P0** | [Issue #3608](https://github.com/nearai/ironclaw/issues/3608) | 派发权限未密封，WebUI Beta 存在越权风险 | PR #3766 已修复（授权请求签名验证）。 |
| **P1** | [Issue #4017](https://github.com/nearai/ironclaw/issues/4017) | 交互式聊天绕过 `ToolDispatcher` 导致审计缺失 | 正在推进 PR #4019（CI 强制审计路径）。 |
| **P2** | [Issue #3917](https://github.com/nearai/ironclaw/issues/3917) | `PathPlaceholder` 凭据注入安全风险 | PR #3903 已引入生产环境边界控制。 |

---

## 6. **功能请求与路线图信号**
### 🎯 高优先级需求
- **异步审批系统（Issue #1739）**：结合 PR #4019（安全审计）和 Reborn 服务集成（PR #3889），可能纳入下个版本。  
- **Reborn WebChat v2 SSE（PR #4004）**：多通道事件流标准化，为配置即代码（Epic #3036）奠基。  
- **子进程 Agent 设计（Issue #3798 + PR #3814）**：复杂任务分解能力，长期路线图重点。

---

## 7. **用户反馈摘要**
### 💬 真实痛点提炼
- **依赖版本滞后**（Issue #3259）：下游开发者抱怨 crates.io 更新延迟，影响 CVE 修复。  
- **安全审计缺失**（Issue #4017）：用户强调交互式工具需严格记录，避免绕过关键流程。  
- **审批交互体验**（Issue #1739）：企业级用户对“人控+AI”混合操作有明确需求，尤其涉及金融交易场景。  
- **WebUI Beta 权限漏洞**（Issue #3608）：社区反馈产品层需最小权限原则。

---

## 8. **待处理积压**
### ⏳ 需关注的老问题
| Issue | 状态 | 风险提示 |
|-------|------|----------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 开放 | 依赖管理阻塞，CVE 修复依赖此问题。 |
| [#3962](https://github.com/nearai/ironclaw/issues/3962) | 开放 | Hook 框架完整性，影响运行时激活逻辑。 |
| [#3988](https://github.com/nearai/ironclaw/issues/3988) | 开放 | 适配器文件过大（>3k LOC），需拆分。 |

---

**总结**：IronClaw 在 Reborn 重构和安全加固上进展显著，但依赖管理和审计机制仍需加速。社区反馈显示用户对工具链安全性和企业级交互功能需求强烈，建议优先处理 P0/P1 级问题，同时规划下一版本的功能集成。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

---

### **LobsterAI 项目日报（2026-05-25）**

---

#### **1. 今日速览**  
过去24小时内，LobsterAI 项目保持高活跃开发节奏，共合并 **14个 PR**，涵盖核心功能修复、性能优化及稳定性改进，无新增 Issues。代码库整体处于快速迭代状态，未发现重大阻塞性问题。GitHub 活跃度良好，但缺乏用户反馈互动（评论数为0）。

---

#### **2. 版本发布**  
✅ **新版本发布：0个**  
当前暂无新版本发布，所有更新均通过 PR 合并实现。

---

#### **3. 项目进展**  
**关键 PR 合并清单（按优先级排序）：**  
| PR # | 类型       | 修复/功能描述                                                                                     | GitHub 链接 |
|------|------------|--------------------------------------------------------------------------------------------------|-------------|
| #1585 | Bugfix     | 阻止设置页输入框按 `Enter` 键意外保存并关闭页面                                                   | [详情](https://github.com/netease-youdao/LobsterAI/pull/1585) |
| #1588 | Bugfix     | 修复定时任务中错误提示“未配置 IM 通知通道”的逻辑缺陷                                               | [详情](https://github.com/netease-youdao/LobsterAI/pull/1588) |
| #1590 | Feature    | 支持 AI 回复期间连续发送消息（客户端队列机制）                                                     | [详情](https://github.com/netease-youdao/LobsterAI/pull/1590) |
| #1593 | Bugfix     | 移除 OpenClaw 配置中的废弃字段 `skipMissedJobs`                                                   | [详情](https://github.com/netease-youdao/LobsterAI/pull/1593) |
| #1594 | Bugfix     | 扩展搜索范围至所有 Agent 的消息内容，解决跨 Agent 会话不可见问题                                  | [详情](https://github.com/netease-youdao/LobsterAI/pull/1594) |
| #1595 | Bugfix     | 修复 SQLite 迁移标记的持久化逻辑，避免失败后误判已完成                                             | [详情](https://github.com/netease-youdao/LobsterAI/pull/1595) |
| #1598 | Bugfix     | 修正 `getConfig()` 中硬编码 `executionMode: 'local'` 问题                                         | [详情](https://github.com/netease-youdao/LobsterAI/pull/1598) |
| #1599 | Bugfix     | 修复权限响应广播到多个引擎的问题，防止会话复活异常                                                 | [详情](https://github.com/netease-youdao/LobsterAI/pull/1599) |
| #1600 | UX         | 修复定时任务保存后导航时的虚假脏状态警告                                                           | [详情](https://github.com/netease-youdao/LobsterAI/pull/1600) |
| #1601 | Bugfix     | 恢复网关重连后的会话停止冷却记录，防止意外复活                                                     | [详情](https://github.com/netease-youdao/LobsterAI/pull/1601) |
| #1602 | Bugfix     | 解决消息序列号并发竞争问题，确保原子性写入                                                         | [详情](https://github.com/netease-youdao/LobsterAI/pull/1602) |
| #1603 | Bugfix     | 修复会话续传重复错误消息及异常吞没问题                                                             | [详情](https://github.com/netease-youdao/LobsterAI/pull/1603) |
| #1606 | Security   | 将 NetEase Bee 密钥替换为环境变量占位符，提升配置安全性                                            | [详情](https://github.com/netease-youdao/LobsterAI/pull/1606) |
| #1607 | Performance| 为 Anthropic/Gemini 流式请求添加 SSE 行缓冲，避免数据分块解析失败                                 | [详情](https://github.com/netease-youdao/LobsterAI/pull/1607) |

---

#### **4. 社区热点**  
- **无显著讨论热点**：所有 PR 均未获得评论，表明开发者间协作高效，但外部社区参与度较低。  
- **潜在关注点**：PR #1590（AI 回复期间消息队列）和 #1606（密钥安全）可能涉及用户隐私与体验，建议后续补充文档说明。

---

#### **5. Bug 与稳定性**  
| 严重程度 | 问题描述                                                                                     | 修复情况               | 关联 PR |
|----------|----------------------------------------------------------------------------------------------|------------------------|---------|
| 🔴 高    | 定时任务错误提示“未配置 IM 通知通道”（逻辑缺陷）                                               | 已修复 (#1588)         | [详情]  |
| 🟡 中    | 设置页 `Enter` 键意外关闭页面（表单提交问题）                                                  | 已修复 (#1585)         | [详情]  |
| 🟡 中    | 会话续传时重复显示错误消息或静默吞没异常                                                       | 已修复 (#1603)         | [详情]  |
| 🟢 低    | 搜索功能跨 Agent 不可见、仅匹配标题（用户体验问题）                                            | 已修复 (#1594)         | [详情]  |

---

#### **6. 功能请求与路线图信号**  
- **已落地功能**：  
  - **消息队列机制**（#1590）：允许用户在 AI 回复期间继续输入，提升多轮对话流畅性。  
  - **SSE 流控优化**（#1607）：兼容 Anthropic/Gemini 的分块传输，减少内容丢失风险。  
- **待验证需求**：  
  - 密钥管理（#1606）可能推动后续 IM 频道统一的安全配置方案。

---

#### **7. 用户反馈摘要**  
- **痛点**：  
  - **表单交互问题**（如 #1585）：用户期望更自然的输入体验（如 `Enter` 键行为）。  
  - **通知准确性**（如 #1588）：定时任务提示文案需严格匹配实际配置状态。  
- **满意度**：  
  - 核心功能（如消息队列、搜索范围）的修复体现了对用户场景的深度适配。

---

#### **8. 待处理积压**  
- **长期未响应项**：  
  - **Stale 标签 PR**：多数 PR 已标记 `[stale]`，建议维护者优先清理过期标签，标注关闭原因（如“已通过”或“废弃”）。  
  - **遗留 Issue**：无开放 Issues，但需注意历史遗留问题（如数据库迁移逻辑的健壮性）。

---

**总结**：LobsterAI 近期聚焦于稳定性和核心体验优化，代码质量持续提升，但需加强外部社区沟通以获取更多真实反馈。建议后续通过文档或公告同步关键修复（如密钥安全、消息队列），增强透明度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

---

### **Moltis 项目日报 | 2026-05-25**

---

#### **1. 今日速览**
过去24小时内，Moltis 项目保持高度活跃：  
- **8个 Issues 关闭**（全部为新提交问题，无新增），涵盖功能增强、安全加固和前端优化。  
- **10个 PR 合并/关闭**，涉及核心架构改进、运行时限制、日志静默化、环境变量安全等关键修复。  
- **无新版本发布**，所有变更均通过 PR 快速迭代，未触发版本升级。  
整体评估：开发节奏紧凑，聚焦稳定性与用户体验优化，社区参与度高。

---

#### **2. 版本发布**
无新发布，跳过。

---

#### **3. 项目进展**
**合并的 PR 及贡献：**
- **[feat: agents as capability boundaries (#1049)](https://github.com/moltis-org/moltis/pull/1049)**  
  重构核心架构，将 `agents` 作为能力边界（如 MCP、沙盒、技能），支持按预设配置模型、服务器和安全策略，为多场景（如亲子对话）提供灵活分配方案。  
- **[feat(agents): support per-agent runtime limits (#1066)](https://github.com/moltis-org/moltis/pull/1066)**  
  新增每代理的 `timeout_secs` 和 `max_iterations` 运行时限制，覆盖直接聊天和子代理调用，提升可控性。  
- **[fix(sandbox): quiet image prebuild logs (#1065)](https://github.com/moltis-org/moltis/pull/1065)**  
  优化沙盒镜像预构建日志，启动时仅输出关键警告，避免冗余 Docker 构建信息干扰用户。  
- **[fix(web): show long model names in picker (#1060)](https://github.com/moltis-org/moltis/pull/1060)**  
  扩展模型选择器宽度，支持长版本 ID 显示并增加悬浮提示，改善移动端体验（关联 Issue #1052）。  

**进度总结**：本次迭代强化了模块化设计（Agent 边界）、安全性和可观测性，同时修复了多项 UI/UX 痛点，推动项目向企业级应用演进。

---

#### **4. 社区热点**
**最活跃的 Issues/PRs：**
- **[Sandbox image pre-build logs full Docker output to console (#1056)](https://github.com/moltis-org/moltis/issues/1056)**  
  用户抱怨沙盒构建日志冗长，影响控制台可读性，PR #1065 已解决（日志分级优化）。  
- **[Env vars from stdio MCP server config exposed via mcp_list (#1054)](https://github.com/moltis-org/moltis/issues/1054)**  
  安全漏洞：MCP 环境变量值意外泄露至 LLM，PR #1063 通过 `Secret<String>` 存储和过滤修复。  
- **[External agent picker shows disabled agents (#1057)](https://github.com/moltis-org/moltis/issues/1057)**  
  功能缺陷：当 `external_agents.enabled = false` 时仍显示代理选项，PR #1059 动态隐藏无效项。  

**分析**：用户对日志静默化和数据安全敏感度极高，反映 Moltis 正逐步满足生产级需求；UI 优化（如模型选择器）也体现对易用性的重视。

---

#### **5. Bug 与稳定性**
**严重度排序：**
1. **[OpenAI-compatible provider URL validation缺失 (#1051)](https://github.com/moltis-org/moltis/issues/1051) → [PR #1061](https://github.com/moltis-org/moltis/pull/1061)**  
  兼容端点未校验可能导致请求错误，现拒绝含 `/chat/completions` 等路径的 URL，并记录探测日志。  
2. **[自动会话标题生成失败 (#1053)](https://github.com/moltis-org/moltis/issues/1053) → [PR #1064](https://github.com/moltis-org/moltis/pull/1064)**  
  修复后失败会显式报错并回退到会话模型，而非静默返回 `null`。  
3. **[聊天工具栏水平滚动 (#1055)](https://github.com/moltis-org/moltis/issues/1055) → [PR #1062](https://github.com/moltis-org/moltis/pull/1062)**  
  约束工具栏宽度防止溢出，新增 Playwright 检测脚本确保回归测试覆盖。  

**状态**：所有已知 Bug 均有对应 PR 修复，代码健壮性显著提升。

---

#### **6. 功能请求与路线图信号**
**高优先级提案：**
- **Agent 能力边界 (#1049)** 已落地，未来可能扩展为“角色模板”系统，支持更细粒度权限控制。  
- **每代理运行时限制 (#1066)** 为后续资源配额管理（如并发数、内存占用）奠定基础。  
- **沙盒日志静默化 (#1065)** 符合 DevOps 最佳实践，可能推广到其他组件（如监控模块）。  

**潜在方向**：社区对安全（MCP 变量隔离）、模块化（Agent 预设）、可扩展性（外部代理开关）需求强烈，建议纳入下一版本规划。

---

#### **7. 用户反馈摘要**
**痛点提炼：**
- **日志过载**：沙盒构建日志冗长影响运维效率（Issue #1056）。  
- **安全风险**：MCP 配置信息暴露至 LLM，需严格环境变量管控（Issue #1054）。  
- **UI 体验**：长模型 ID 在移动端难以阅读，需自适应布局（Issue #1052）。  
- **功能可见性**：禁用选项仍出现在界面中，降低配置清晰度（Issue #1057）。  

**满意点**：快速响应速度（平均 1 天内关闭 Issues），修复方案技术严谨（如 Secret 类型使用）。

---

#### **8. 待处理积压**
**长期未响应项：**
- **[#553: 单 Agent 回环和超时设置](https://github.com/moltis-org/moltis/issues/553)**  
  提出于 2026-04-04，尚未开始开发，需评估实现复杂度（可能涉及底层调度器改造）。  

**提醒**：该功能可能影响 Agent 隔离性，建议优先评审需求并排期。

--- 

**数据截至：2026-05-25 24:00 UTC**  
**GitHub 总览链接**: [moltis-org/moltis](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

---

# **CoPaw 项目日报（2026-05-25）**

---

## **1. 今日速览**
- **活跃度**：过去24小时内项目保持较高活跃度，共收到 **14条 Issues**（11新开/活跃、3已关闭）和 **1条待合并 PR**，无新版本发布。
- **问题集中领域**：主要集中在 **UI显示异常**（如工具调用、思维链）、**任务调度与内存管理缺陷**，以及 **MCP OAuth 兼容性** 等核心功能问题。
- **社区参与度**：多条 Issue 已有较多评论，表明开发者与用户正积极讨论关键问题。

---

## **2. 版本发布**
- **无新版本发布**。当前稳定版本仍为 `v1.1.8.post1`。

---

## **3. 项目进展**
- **PR #4637 [feat(chat): add customizable slash command shortcut menu]**  
  允许用户在聊天输入框的 `/` 快捷菜单中自定义显示内置命令，通过齿轮图标设置面板配置。此改进旨在提升用户发现和使用隐藏功能的效率。  
  - [GitHub 链接](https://github.com/agentscope-ai/QwenPaw/pull/4637)

---

## **4. 社区热点**
### **🔥 最受关注 Issues**
#### **Issue #4644: Console UI: tool calls often not displayed until page refresh**  
- **核心问题**：控制台未实时显示除 `read_file` 外的工具调用，需手动刷新页面，且无错误日志。  
- **背景**：影响用户体验，尤其在调试时需频繁刷新页面。  
- **链接**: [Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)  

#### **Issue #4650: Reasoning chain not displayed for GLM-5.1 via OpenAI-compatible API**  
- **核心问题**：使用 OpenAI 兼容 API 调用 GLM-5.1 模型时，控制台完全不显示思维链内容，而其他模型正常。  
- **背景**：涉及多模型兼容性，可能需调整流式响应处理逻辑。  
- **链接**: [Issue #4650](https://github.com/agentscope-ai/QwenPaw/issues/4650)  

#### **Issue #4652: 记忆系统「只记录不学习」优化建议**  
- **诉求**：当前记忆系统缺乏总结、状态标记和关联能力，导致信息堆砌。提议增强「总结-关联-提醒」机制。  
- **链接**: [Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)  

---

## **5. Bug 与稳定性**
| **严重程度** | **Issue ID** | **问题描述** | **修复状态** |
|-------------|-------------|--------------|------------|
| 🔴 高优先级 | #4653 | 定时任务与用户消息共享 session，导致任务中断 | 待修复（无 PR） |
| 🟡 中优先级 | #4649 | Orphaned cron jobs 未清理，幽灵任务持续执行 | 待修复（无 PR） |
| 🟡 中优先级 | #4643 | MCP OAuth 不支持 `client_secret` 传输，影响部分服务连接 | 待修复（无 PR） |
| 🟢 低优先级 | #4646 | MCP schema sanitizer 误转换布尔值为对象 | 待修复（无 PR） |

---

## **6. 功能请求与路线图信号**
- **优先级高**：  
  - **自定义快捷菜单（PR #4637）**：用户可主动选择显示的内置命令，显著改善发现性。  
  - **会话自动总结（Issue #4639 已关闭）**：虽未合并，但提案清晰，未来可能实现。  
- **待评估**：  
  - **远程守护进程支持（Issue #4645）**：桌面应用连接后端服务，适合分布式场景。  
  - **令牌用量显示（Issue #4647）**：透明化成本监控，符合企业级需求。  

---

## **7. 用户反馈摘要**
- **痛点**：  
  - **UI 实时性差**（如工具调用、思维链显示），影响调试体验。  
  - **记忆系统利用率低**：用户希望从“信息堆砌”升级为“结构化知识库”。  
  - **多模型兼容性问题**：GLM-5.1 等特殊模型功能缺失。  
- **满意点**：  
  - 对技能更新功能（Issue #3290）已有明确需求，社区认可其价值。  

---

## **8. 待处理积压**
| **Issue/PR** | **状态** | **备注** |
|-------------|---------|---------|
| #4653 | 开放 | 需隔离定时任务 session，避免被用户消息中断。 |
| #4649 | 开放 | 需清理 APScheduler 残留任务，防止资源泄漏。 |
| #4643 | 开放 | 需扩展 OAuth 2.0 客户端支持 `client_secret`。 |

---

**健康度总结**：项目活跃度高，但存在多个影响核心体验的未修复 Bug（如 UI 实时性、任务调度）。建议优先处理高优先级 Issues，并规划下一版本功能路线图以响应用户提出的记忆系统和模型兼容性需求。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

---

# ZeroClaw 项目日报（2026-05-25）

---

## **1. 今日速览**
ZeroClaw 今日保持高度活跃，过去 24 小时内共更新 **50 Issues**（新开/活跃 47 条，已关闭 3 条）和 **50 PRs**（待合并 46 条，已合并 4 条），无新版本发布。  
社区围绕 **RFC 提案、MCP 工具链稳定性、多通道集成、安全沙箱配置** 展开密集讨论，核心开发团队正在推进关键修复和架构优化，整体项目处于高活跃、快速迭代状态。

---

## **2. 版本发布**
**无新版本发布**  
当前无版本更新，所有进展通过 PR 和 Issues 同步推进。

---

## **3. 项目进展**
### **已合并的 PR**（按重要性排序）：
- **[PR #6866](https://github.com/zeroclaw-labs/zeroclaw/pull/6866)**：支持选择性构建渠道功能，允许通过 `--no-default-features` 按需启用 `agent-runtime` 或特定渠道模块（如 Telegram/Discord）。显著提升定制化部署灵活性。  
- **[PR #6897](https://github.com/zeroclaw-labs/zeroclaw/pull/6897)**：修复 Cron 任务手动执行失败时持久化标记为“降级”（而非误报成功），增强运行时状态监控可靠性。  
- **[PR #6905](https://github.com/zeroclaw-labs/zeroclaw/pull/6905)**：隔离渠道运行时重载默认值，避免因上下文污染导致配置错误。  

**项目进度**：核心工具链、安全沙箱、多通道集成等关键模块持续优化，推动 0.8.x 稳定版功能收敛。

---

## **4. 社区热点**
### **评论最多 & 最活跃的议题**：
#### **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**
- **标题**：RFC: Work Lanes, Board Automation, and Label Cleanup  
- **热度**：6 条评论，涉及治理层架构改进（轻量级 PR 路由、看板自动化、标签清理）。  
- **诉求**：用户希望减少维护者手动管理负担，提出自动化工作流分层方案，可能影响后续 0.9.0 路线图。

#### **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)**
- **标题**：`tool_filter_groups` 对真实 MCP 工具无效 + 未与 `deferred_loading` 集成  
- **热度**：6 条评论，暴露 MCP 工具注册机制的严重缺陷，可能导致插件加载失败。  
- **背景**：用户报告在 `daemon` 模式下工具过滤器完全失效，需紧急修复以保障插件兼容性。

---

## **5. Bug 与稳定性**
| Issue | 严重性 | 是否已修复 | 链接 |
|-------|--------|------------|------|
| [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | 高 (S1) | ❌ | Gemini 400 错误：历史序列化违反不变量，需适配模型调用协议 |
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | 高 (S1) | ❌ | Cron 作业输出未路由至 Telegram 频道，阻断工作流 |
| [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | 中 (S2) | ✅ [PR #6902](https://github.com/zeroclaw-labs/zeroclaw/pull/6902) | 网关 PostgreSQL 连接崩溃，修复后绑定 `/lib64` 路径 |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | 高 (S1) | ❌ | `tool_search` 未在 `default_auto_approve` 中，导致非交互式模式阻塞 |

---

## **6. 功能请求与路线图信号**
### **高优先级需求**：
- **RFC 提案（#6808）**：工作流分层与看板自动化，可能成为 0.9.0 治理层重点。  
- **多通道扩展**：  
  - 新增 Mastodon（[PR #6898](https://github.com/zeroclaw-labs/zeroclaw/pull/6898）、Twilio SMS（[PR #6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427）、Rocket.Chat/Zulip（[PR #6435/6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6435/6437））—— 覆盖联邦社交、企业 IM 场景。  
- **安全与沙箱改进**：  
  - 可写路径与网络访问控制（[#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127）+ PR #6902）。

---

## **7. 用户反馈摘要**
- **痛点**：  
  - **MCP 工具链问题**：`tool_filter_groups` 失效（[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699）），用户抱怨“配置了过滤规则但工具仍全部加载”。  
  - **Cron 作业通知缺失**：Telegram 频道无法接收 Cron 结果（[#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647）），影响自动化流程闭环。  
- **满意点**：  
  - 用户认可 RFC 提案的透明性（[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808）），期待更多架构级改进。

---

## **8. 待处理积压**
| Issue/PR | 状态 | 风险等级 | 链接 |
|----------|------|----------|------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 未解决 | 高（批量回滚丢失 153 次提交） | 需恢复关键变更，涉及代码审计 |
| [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) | 未解决 | 中（内存检索未使用重排阈值） | 配置项未生效，影响性能优化 |
| [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) | 未解决 | 中（OpenAI 超时硬编码 120s） | 用户自定义超时被忽略 |

---

**总结**：ZeroClaw 今日展现高强度技术协作，聚焦 MCP 稳定性、多通道集成与安全沙箱，但需优先解决 [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) 等阻塞性问题，同时响应用户对联邦通信和自动化管理的迫切需求。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*