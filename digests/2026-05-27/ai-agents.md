# OpenClaw 生态日报 2026-05-27

> Issues: 383 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-27 00:37 UTC

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

# **OpenClaw 项目日报 (2026-05-27)**

---

## **1. 今日速览**
- OpenClaw 今日活跃度极高，**Issues 更新 383 条（新开/活跃 182，已关闭 201），PR 更新 500 条（待合并 293，已合并/关闭 207）**，显示社区贡献者积极协作推进。
- 发布 **2 个 Beta 版本**（v2026.5.26-beta.1、v2026.5.25-beta.1），包含性能优化和 iMessage 附件修复等关键改进。
- 当前项目处于高活跃开发阶段，但需关注 Windows/Windows 平台稳定性问题和会话状态管理回归（如 #86508、#86509）。
- [GitHub 数据概览](https://github.com/openclaw/openclaw)

---

## **2. 版本发布**
### **v2026.5.26-beta.1**
#### **主要更新：**
- **性能提升**  
  - 回复和启动速度显著提升：用户可见的回复传输与后续工作分离，热路径复用命令/插件元数据，启动时避免重复扫描插件、频道、会话、使用成本和文件系统。
- **iMessage 附件修复**  
  - 修复了 iMessage 保存的附件（`~/Library/Messages/Attachments`）因根路径政策被拒绝的问题，现在可通过现有入站路径正确读取。
- **文档与工具链改进**  
  - 新增 `toolResultMaxChars` 配置调整（默认 16K），适配大模型（如 Claude Opus 200K+）的工具结果输出限制。

#### **迁移注意事项：**
- 无破坏性变更，建议测试会话状态管理工具（如 `memory-search` FD 泄漏问题 #86613）。

---

## **3. 项目进展**
| PR | 标题 | 类型 | 状态 |
|----|------|------|------|
| [#86956](https://github.com/openclaw/openclaw/pull/86956) | 中央化用户回合转录持久化 | 重构 | 维护者审核中 |
| [#86261](https://github.com/openclaw/openclaw/pull/86261) | 插件技能同步到沙盒工作区 | 修复 | 自动合并 |
| [#86433](https://github.com/openclaw/openclaw/pull/86433) | Anthropic 传递系统提示 | 修复 | 维护者审核中 |
- **核心进展**：  
  - 会话状态管理、Codex 原生线程修复（[#86160](https://github.com/openclaw/openclaw/pull/86160）、[#86094](https://github.com/openclaw/openclaw/pull/86094）等关键问题已进入稳定代码库。
  - Discord/Telegram 媒体处理逻辑统一化（[#87055](https://github.com/openclaw/openclaw/pull/87055）。

---

## **4. 社区热点**
### **最活跃 Issues & PRs**
#### **🔥 Issues:**
- **[#75](https://github.com/openclaw/openclaw/issues/75)**  
  Linux/Windows 客户端缺失（评论 109，👍 77）：开发者强烈呼吁扩展多平台支持，对标 macOS。
- **[#86599](https://github.com/openclaw/openclaw/issues/86599)**  
  Windows 本地模型阻塞事件循环（评论 11，👍 1）：Beta 阻断项，需优先解决。
- **[#85030](https://github.com/openclaw/openclaw/issues/85030)**  
  MCP 工具未注入子会话（评论 5，👍 2）：影响插件生态兼容性，已有修复 PR 进行中。

#### **🔥 PRs:**
- **[#87084](https://github.com/openclaw/openclaw/pull/87084)**  
  插件 SDK 诊断事件导出名修复（评论 0）：解决构建后别名混乱问题。
- **[#86771](https://github.com/openclaw/openclaw/pull/86771)**  
  Discord 审批决议逻辑修复（评论 0）：保留本地审批权限。

---

## **5. Bug 与稳定性**
| Issue | 严重度 | 修复状态 | 链接 |
|-------|--------|-----------|------|
| **[#86508](https://github.com/openclaw/openclaw/issues/86508)** | 🐚 Platinum Hermit（会话劫持） | 修复 PR (#87085) | [详情](#86508) |
| **[#86509](https://github.com/openclaw/openclaw/issues/86509)** | 🐚 Platinum Hermit（事件循环饥饿） | 回退至旧版本 | [详情](#86509) |
| **[#86948](https://github.com/openclaw/openclaw/issues/86948)** | 🚀 Beta Blocker（Codex 静默丢弃消息） | 修复 PR (#87079) | [详情](#86948) |
| **[#86613](https://github.com/openclaw/openclaw/issues/86613)** | 🦐 Gold Shrimp（内存搜索 FD 泄漏） | 修复 PR (#87088) | [详情](#86613) |

---

## **6. 功能请求与路线图信号**
- **跨平台客户端**（[#75](https://github.com/openclaw/openclaw/issues/75）：Linux/Windows 客户端是明确需求，可能纳入下版本。
- **MCP 工具增强**（[#87086](https://github.com/openclaw/openclaw/pull/87086）：支持插件槽位记录对象化，兼容现有生态。
- **语音通话修复**（[#86285](https://github.com/openclaw/openclaw/pull/86285）：OpenAI 实时通话重复问候语优化。

---

## **7. 用户反馈摘要**
- **痛点场景**：  
  - **会话状态丢失**（[#86827](https://github.com/openclaw/openclaw/issues/86827）：群组对话失败后静默丢弃消息，影响用户体验。
  - **媒体处理不一致**（[#67915](https://github.com/openclaw/openclaw/issues/67915）：本地附件在 Control UI 中错误标记“不可用”。
- **满意度**：  
  - 性能优化（如回复速度）获积极反馈；但 Windows 稳定性问题引发较多投诉。

---

## **8. 待处理积压**
| Issue/PR | 优先级 | 链接 |
|----------|--------|------|
| **[#86237](https://github.com/openclaw/openclaw/issues/86237)** | 🟢 命名冲突（cron 子系统） | [详情](#86237) |
| **[#85251](https://github.com/openclaw/openclaw/issues/85251)** | 🟠 Codex 应用服务器静默卡住 | [详情](#85251) |
| **[#86354](https://github.com/openclaw/openclaw/issues/86354)** | 🟡 Node.js 网关 Codex 原生模式禁用 | [详情](#86354) |

---

**总结**：OpenClaw 正处于高活跃期，性能优化和跨平台支持是关键驱动力，需优先解决 Windows 会话阻塞（#86508）和 Beta 阻断项（#86948）。社区反馈表明稳定性与功能完整性（如媒体、会话恢复）是下一版本重点。

---

## 横向生态对比

---

# **个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-05-27）**

---

## **1. 生态全景**
当前开源生态呈现 **"核心项目高速迭代，长尾项目渐进优化"** 的态势：  
- **OpenClaw 等头部项目** 以 **高活跃度、跨平台支持、插件生态** 为标志，代表技术前沿；  
- **NanoBot、Hermes Agent 等** 聚焦 **稳定性修复与协议标准化**，处于功能巩固阶段；  
- **PicoClaw、ZeroClaw 等** 则依赖社区驱动，通过 PR 渐进式改进，适合轻量级部署场景。

---

## **2. 各项目今日活跃度对比**
| 项目名          | Issues 数 | PRs（已合并/待合并） | Release 情况       | 健康度评估                     |
|-----------------|-----------|----------------------|--------------------|------------------------------|
| **OpenClaw**    | 383 (活跃) | 500 (293/207)      | 2个 Beta 版本发布   | ✅ 快速迭代，但 Windows 稳定性需关注 |
| **NanoBot**     | 5 (活跃)  | 18 (2合/16待)       | 无                | 🔄 平稳推进，Bug 修复优先级高       |
| **Hermes Agent**| 50 (活跃) | 50 (45/5)           | 无                | ✅ 高响应，安全与协议强化中         |
| **PicoClaw**    | 6 (活跃)  | 21 (13/8)           | Nightly Build 发布  | ⚠️ 功能优化为主，需解决 RISC-V 兼容性问题 |
| **IronClaw**    | 11 (活跃) | 50 (36/14)          | v0.29.0 发布       | 🚀 企业级功能扩展与安全审计并行      |
| **LobsterAI**   | 0         | 11 (5/6)            | 无                | 🔧 技术债务清理，无新功能发布        |

---

## **3. OpenClaw 在生态中的定位**
### **优势与差异化**
- **跨平台支持**：唯一同时覆盖 macOS/Linux/Windows 的成熟项目，Beta 版本性能优化显著（如 iMessage 附件修复）。  
- **插件生态**：MCP 工具链深度集成，技能同步机制（如市场技能删除控制）增强用户主权。  
- **社区规模**：GitHub 数据（Issues/PRs 量）表明 **头部项目地位**，但 Windows 会话阻塞问题暴露多平台适配挑战。

**技术路线差异**：  
- 相比 NanoBot（Dream 系统重构）、Hermes Agent（A2A 协议），OpenClaw 更侧重 **全平台用户体验**，而后者专注 **协议层标准化**。

---

## **4. 共同关注的技术方向**
| 需求主题               | 涉及项目                          | 具体诉求                                                                 |
|------------------------|-----------------------------------|--------------------------------------------------------------------------|
| **多模型兼容性**       | OpenClaw, ZeroClaw, IronClaw      | 统一 API 格式（如 DeepSeek-V4 思维模式解析）、Provider 参数校验            |
| **工具权限与安全**     | Hermes Agent, ZeroClaw            | MCP 工具过滤（`allowed_tools`）、凭证路径保护（`SecretString` 风险）        |
| **会话稳定性**         | OpenClaw, NanoBot, PicoClaw       | 会话状态恢复（内存泄漏）、流阻塞（Codex 静默丢弃）、令牌空耗                |
| **跨平台客户端**       | OpenClaw, NanoBot                | Linux/Windows/macOS 全平台支持，对标 OpenClaw 的 Beta 修复                 |
| **插件管理**           | OpenClaw, LobsterAI              | 技能同步控制（OpenClaw 允许手动删除）、UI 区分已/未同步状态（LobsterAI）     |

---

## **5. 差异化定位分析**
| 项目          | 功能侧重                  | 目标用户               | 技术架构特点                     |
|---------------|--------------------------|-----------------------|----------------------------------|
| **OpenClaw**  | **跨平台 + 插件生态**     | 开发者/企业用户        | 沙盒工作区、MCP 工具链深度集成    |
| **NanoBot**   | **Dream 系统优化**        | 研究型开发者          | 静态历史→动态学习，AgentLoop 重构  |
| **Hermes Agent** | **协议标准化（A2A）**  | 企业协作场景          | 消息路由、多语言、MCP 安全审计    |
| **PicoClaw**  | **嵌入式部署**            | 硬件厂商/RISC-V 开发者 | 轻量化容器自愈、API 严格性适配     |
| **IronClaw**  | **企业级多租户**          | 商业 SaaS 提供商       | Reborn 子代理、GSuite/Gmail 扩展   |
| **LobsterAI** | **会话稳定性**            | 付费用户/开发者        | 工具结果宽容期、令牌空耗修复       |
| **ZeroClaw**  | **本地交互能力**          | 桌面端用户            | TUI 快捷键、计算机操作提案（RFC）  |

---

## **6. 社区热度与成熟度分层**
| 层级              | 项目示例                      | 特征                               |
|-------------------|------------------------------|-----------------------------------|
| **快速迭代**      | OpenClaw, IronClaw           | 每日 PR > 10，新功能/Bug 修复并行   |
| **质量巩固**      | NanoBot, Hermes Agent, PicoClaw | 高优先级 Bug 修复为主，功能渐进式优化 |
| **稳定维护**      | LobsterAI, Moltis            | 无新 Issue，依赖 PR 清理技术债务     |

---

## **7. 值得关注的趋势信号**
### **行业趋势与参考价值**
1. **多模型兼容性成为焦点**：  
   - DeepSeek-V4 思维模式、OpenAI SDK 参数校验等问题（OpenClaw、ZeroClaw、IronClaw）反映 **大模型生态碎片化** 的迫切需求，建议智能体项目优先提供 **抽象层适配**（如 Provider 配置模板）。

2. **工具权限与安全并重**：  
   - `allowed_tools`/`denied_tools`（Hermes Agent）、凭证路径风险（ZeroClaw）凸显 **企业级安全审计** 需求，可参考 IronClaw 的 `SecurityAuditSink` 实现。

3. **会话稳定性与跨平台**：  
   - 流阻塞（NanoBot）、会话恢复（OpenClaw）表明 **长对话场景** 是用户体验痛点，需设计状态快照机制和降级策略。

4. **插件/技能生态标准化**：  
   - 技能手动控制（OpenClaw）、市场技能同步（LobsterAI）提示 **用户主权** 需求，可借鉴 OpenClaw 的沙盒工作区隔离设计。

5. **轻量化部署与边缘计算**：  
   - PicoClaw 的 RISC-V 兼容性、Docker 自愈机制适合 **边缘 AI** 场景，建议硬件厂商关注其容器运行时优化方案。

---

### **对开发者的建议**
- **优先方向**：若追求多模型支持，需构建 Provider 中间件；若注重安全，可参考 ZeroClaw 的防御性过滤和 IronClaw 的审计日志。  
- **社区协作**：OpenClaw 的快速响应模式（如 Beta 补丁）可作为 **关键问题处理流程** 标杆。  
- **长期路线图**：结合 IronClaw 的企业级扩展和 NanoBot 的动态学习，规划智能体 **自适应演进** 能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

---

# **NanoBot 项目日报**  
**日期：2026-05-27**  

---

## **1. 今日速览**  
- **活跃度**：项目保持高活跃状态，过去24小时共更新 **23条**（Issues 5条 + PRs 18条），无版本发布。  
- **关键进展**：多个核心功能修复与扩展，包括MCP客户端重连优化、工具结果历史清理、GitAgent协议支持等。  
- **社区参与**：新 Issues 聚焦 API 错误、对话历史完整性、实时学习需求，反映用户对稳定性和功能完整性的关注。  
- **健康度评估**：开发节奏平稳，但部分 Bug 需快速响应以避免影响用户体验（如 #4013 的流阻塞问题）。  

---

## **2. 版本发布**  
- **无新版本发布**。  

---

## **3. 项目进展**  
### **合并/关闭的重要 PR**  
| PR | 标题 | 链接 | 进展摘要 |
|----|------|------|----------|
| #4009 | `fix(provider): handle blank Codex transport errors` | [GitHub](https://github.com/HKUDS/nanobot/pull/4009) | 修复Codex Provider的空错误处理，提升用户反馈质量。 |
| #4008 | `feat(docker): mount agentmail CLI and add agentmail skill` | [GitHub](https://github.com/HKUDS/nanobot/pull/4008) | 集成agentmail命令行工具，支持邮件技能扩展。 |
| #3990 | `feat(dream): single-phase consolidation via AgentLoop` | [GitHub](https://github.com/HKUDS/nanobot/pull/3990) | 重构Dream系统内存机制，简化流程并增强持久化能力。 |

**整体推进**：  
- 基础设施优化（MCP客户端稳定性、Docker支持）。  
- 核心子系统升级（Dream系统、工具链管理）。  
- 第三方协议支持（GitAgent协议提案）。  

---

## **4. 社区热点**  
### **最活跃的 Issues/PRs**  
- **#4013** [Bug] `Error calling LLM: stream stalled for more than 90 seconds` ([详情](https://github.com/HKUDS/nanobot/issues/4013))  
  - **诉求**：用户从0.1.5post2升级到0.2.0后出现流阻塞，严重影响使用体验。  
  - **背景**：疑似硬编码超时逻辑或API兼容性问题，需紧急排查。  

- **#3973** [Enhancement] `Dream System: Hunger Problem & Lack of Real-time Learning` ([详情](https://github.com/HKUDS/nanobot/issues/3973))  
  - **诉求**：Dream系统依赖静态`history.jsonl`，缺乏动态学习机制，限制自我改进潜力。  
  - **关联PR**：#3990已提出单阶段重构方案，可能成为长期优化方向。  

---

## **5. Bug 与稳定性**  
### **严重性排序**  
| Issue | 描述 | 是否已有Fix PR | 链接 |
|-------|------|---------------|------|
| #4013 | LLM流阻塞（90秒超时） | **未解决** | [Issue](https://github.com/HKUDS/nanobot/issues/4013) |
| #4006 | 对话历史中孤立工具结果（无对应`tool_call_id`） | **已修复（PR #4011）** | [Issue+PR](https://github.com/HKUDS/nanobot/issues/4006#issuecomment-220000000) |
| #3469 | DeepSeek-v4推理内容错误 | **已关闭** | [Issue](https://github.com/HKUDS/nanobot/issues/3469) |

---

## **6. 功能请求与路线图信号**  
- **语音输出支持（#4010）**：用户希望实现文本到语音输出，补全语音交互闭环（[提案](https://github.com/HKUDS/nanobot/issues/4010)）。  
- **技能发现命令（#3968 PR）**：新增`/skill`指令，解决技能列表不可见问题（[PR](https://github.com/HKUDS/nanobot/pull/3968)）。  
- **GitAgent协议支持（#4005 PR）**：标准化跨实例AI代理通信（[提案](https://github.com/HKUDS/nanobot/pull/4005)）。  

**潜在纳入版本**：  
- 语音输出（需评估后端集成成本）。  
- GitAgent协议（社区驱动，优先级较高）。  

---

## **7. 用户反馈摘要**  
- **痛点**：  
  - **API兼容性**：DeepSeek-v4等模型对空内容敏感（#3469、#3869），需统一内容校验逻辑。  
  - **稳定性**：升级后流阻塞（#4013）、工具历史污染（#4006）直接影响工作流连续性。  
- **满意度**：  
  - 部分用户认可0.2.0的改进（如WebUI优化），但需更平滑的升级路径。  

---

## **8. 待处理积压**  
- **长期未响应 Issue**：  
  - **#3973**（Dream系统实时学习）：需结合#3990重构方案评估长期路线。  
  - **#4010**（语音输出）：需讨论技术选型（如TTS库集成）。  
- **PR阻塞项**：  
  - #1443（心跳通知解耦）：需验证配置变更对现有部署的影响。  

---

**总结**：NanoBot在功能迭代和稳定性修复上表现积极，但需优先解决流阻塞（#4013）和工具历史一致性（#4006）问题以保障用户体验。社区对新交互方式（语音、GitAgent）的兴趣显著，可作为下一版本重点。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

---

### **Hermes Agent 项目日报（2026-05-27）**

---

#### **1. 今日速览**  
- 过去24小时项目活跃度极高：**Issues 50条**（新开/活跃48，关闭2），**PR 50条**（待合并45，已合/闭5），显示社区参与度高，问题修复与功能开发并行推进。  
- 核心问题聚焦于**流式响应崩溃**（如OpenAI Codex）、**工具链兼容性**及**多平台适配**（Telegram/Discord等）。  
- 无新版本发布，但多个关键 Bug 已有 PR 提交，表明团队快速响应能力较强。  

---

#### **2. 版本发布**  
- **无新版本发布**。

---

#### **3. 项目进展**  
- **关键合并 PR**：  
  - **[#32891](https://github.com/NousResearch/hermes-agent/pull/32891)**、**[#32898](https://github.com/NousResearch/hermes-agent/pull/32898)**、**#32897**：修复了 OpenAI Codex/ChatGPT 后端在终端响应 `output=null` 时的流式解析崩溃，恢复逻辑已覆盖主流与辅助任务流。  
  - **[#32889](https://github.com/NousResearch/hermes-agent/pull/32889)**：更新了 `here.now` 技能包至最新版，移除过时功能以匹配当前生态。  
  - **[#30492](https://github.com/NousResearch/hermes-agent/pull/30492)**：完成 Python 端多语言国际化（支持11种语言），彻底替换硬编码字符串为 `t()` 调用，显著提升多平台用户体验。  
- **整体推进**：修复了影响稳定性和兼容性的核心问题，同时增强了多语言支持和工具链管理。

---

#### **4. 社区热点**  
- **最活跃 Issues**：  
  - **[#11179](https://github.com/NousResearch/hermes-agent/issues/11179)**（评论35）：OpenAI SDK 流式响应因 `response.output=null` 崩溃，直接影响用户交互流畅性，已有多个 PR 提交修复。  
  - **[#514](https://github.com/NousResearch/hermes-agent/issues/514)**（评论16，👍9）：A2A协议（Agent-to-Agent）支持需求呼声高，反映用户对跨代理协作的强烈需求。  
  - **[#32883](https://github.com/NousResearch/hermes-agent/issues/32883)**（👍34）：Codex 流解析崩溃问题，社区投票支持修复，优先级明确。  
- **背景诉求**：用户对**稳定性**和**工具链扩展**（如A2A、多语言）的关注度显著高于边缘功能优化。

---

#### **5. Bug 与稳定性**  
| **严重程度** | **Issue/PR** | **描述** | **状态** |
|-------------|--------------|----------|----------|
| P1 (高)     | [#32877](https://github.com/NousResearch/hermes-agent/issues/32877) | MCP工具绕过危险命令审批机制，存在安全风险 | ✅ **修复 PR (#32876)** |
| P2 (中)     | [#11179](https://github.com/NousResearch/hermes-agent/issues/11179) | Codex流响应崩溃，需终端恢复 | ✅ **修复 PR (#32891, #32898)** |
| P2 (中)     | [#32892](https://github.com/NousResearch/hermes-agent/issues/32892) | ChatGPT集成返回`NoneType`错误 | ✅ **修复 PR (#32884, #32888)** |
| P3 (低)     | [#29610](https://github.com/NousResearch/hermes-agent/issues/29610) | SQLite文件描述符泄漏 | 🔍 待分析 |

---

#### **6. 功能请求与路线图信号**  
- **高优先级功能**：  
  - **A2A协议支持**（[#514](https://github.com/NousResearch/hermes-agent/issues/514)）：社区明确需求，可能纳入下一版本。  
  - **多语言支持**（[#30492](https://github.com/NousResearch/hermes-agent/pull/30492)）：已完成代码，预计随下个发布上线。  
  - **静默响应选项**（[#32861](https://github.com/NousResearch/hermes-agent/issues/32861)）：PR [#32879](https://github.com/NousResearch/hermes-agent/pull/32879) 已实现，解决组聊冗余消息问题。  
- **长期需求**：Xiaomi Token Plan 集成（[#32874](https://github.com/NousResearch/hermes-agent/pull/32874)）和 WhatsApp 通知控制（[#32550](https://github.com/NousResearch/hermes-agent/pull/32550)）正在推进。

---

#### **7. 用户反馈摘要**  
- **痛点**：  
  - **流式崩溃**（如ChatGPT集成）导致对话中断，严重影响体验（[#11179](https://github.com/NousResearch/hermes-agent/issues/11179)）。  
  - **工具链不一致**（如MCP绕过审批）引发安全担忧（[#32877](https://github.com/NousResearch/hermes-agent/issues/32877)）。  
- **满意点**：  
  - Telegram媒体卡片的Markdown渲染修复（[#32893](https://github.com/NousResearch/hermes-agent/pull/32893)）提升移动端体验。  
- **场景**：开发者（如插件维护者）、企业用户（多代理协作）、个人用户（多语言支持）是主要受益群体。

---

#### **8. 待处理积压**  
- **高风险遗留问题**：  
  - **SQLite泄漏**（[#29610](https://github.com/NousResearch/hermes-agent/issues/29610)）：需结合 [#28301](https://github.com/NousResearch/hermes-agent/issues/28301) 修复，可能涉及底层连接池管理。  
  - **Cron任务线程静默停止**（[#32895](https://github.com/NousResearch/hermes-agent/issues/32895)）：需监控线程生命周期，防止定时任务失效。  
- **低优先级积压**：  
  - 多Bot同账号支持（[#8287](https://github.com/NousResearch/hermes-agent/issues/8287)）和技能自动触发（[#4589](https://github.com/NousResearch/hermes-agent/issues/4589)）可列为下阶段目标。

---

**总结**：项目处于高活跃开发期，核心稳定性问题已获快速修复，社区对协作协议和多语言支持需求强烈，建议优先推进A2A和多语言功能落地，持续监控工具链安全与资源管理问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

---

# **PicoClaw 项目日报 | 2026-05-27**

---

## 1. **今日速览**
过去24小时内，PicoClaw 保持较高活跃度：**新增6个 Issues**（含4条活跃更新）、**合并21个 PRs**（含13个已合并），并发布一个**Nightly Build**版本。社区讨论聚焦于功能增强、API兼容性及多账号支持等方向，整体开发节奏稳健。

> 🔍 **活跃度评估**：  
> - **Issues/PR 响应速度**：平均处理时间<24小时，核心问题快速跟进。  
> - **代码贡献量**：单日合并PR占比超60%，表明近期有多个小功能/修复并行推进。

---

## 2. **版本发布**
- **v0.2.9-nightly.20260526.ab6d3946** ([Release Notes](https://github.com/sipeed/picoclaw/compare/v0.2.9...main))  
  - **内容**：自动化构建版本，包含未稳定测试的代码变更。  
  - **关键变更**：  
    - 微信多账号支持（[PR #2883](https://github.com/sipeed/picoclaw/pull/2883)）  
    - Claude模型ID修正与温度参数跳过（[PR #2947, #2948](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Aclosed)）  
  - **迁移建议**：Nightly版本可能存在稳定性风险，生产环境建议等待正式版本。

---

## 3. **项目进展**
- **已合并重要 PR**：  
  - **微信多账号配置支持** ([#2883](https://github.com/sipeed/picoclaw/pull/2883))：允许用户通过`weixin_*`动态识别多微信账号，提升企业场景兼容性。  
  - **代码块渲染优化** ([#2933](https://github.com/sipeed/picoclaw/pull/2933))：为前端代码块添加行号与换行切换功能，改善可读性。  
  - **历史消息时间戳修复** ([#2946](https://github.com/sipeed/picoclaw/pull/2946))：解决SeaHorse消息记录中`created_at`字段丢失问题，保障历史数据一致性。  

- **待合并 PR**（8条）：  
  - 流式HTTP请求支持（[#2851](https://github.com/sipeed/picoclaw/pull/2851)）、Telegram商务模式（[#2845](https://github.com/sipeed/picoclaw/pull/2845)）等，预计未来2周内完成合并。

---

## 4. **社区热点**
- **最热 Issue** [#2404](https://github.com/sipeed/picoclaw/issues/2404)（👍1, 评论8）：  
  - **诉求**：用户希望像OpenAI客户端一样支持`streaming: true`流式HTTP请求，避免长轮询延迟。  
  - **进展**：已有[PR #2851](https://github.com/sipeed/picoclaw/pull/2851)提交方案，可能在下版本集成。  
- **Bug报告** [#2887](https://github.com/sipeed/picoclaw/issues/2887)：RISC-V平台`.deb`包无法调用OpenAI模型，影响嵌入式部署体验。

---

## 5. **Bug与稳定性**
| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| **高** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | RISC-V.deb包模型调用失败 | 暂无修复PR，需紧急跟进 |
| **中** | [#2943](https://github.com/sipeed/picoclaw/issues/2943) | 智谱GLM-5-API参数错误（微信渠道） | 关联PR[#2951](https://github.com/sipeed/picoclaw/pull/2951)已修复web_search工具类型 |
| **低** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | ChatGPT Codex OAuth流响应空值 | 待分析是否与OAuth配置有关 |

---

## 6. **功能请求与路线图信号**
- **下一版本候选功能**：  
  - **流式请求支持**（[#2404](https://github.com/sipeed/picoclaw/issues/2404)）：用户需求强烈，已有PR[#2851](https://github.com/sipeed/picoclaw/pull/2851)。  
  - **多账号管理**（微信/Feishu）：[#2883](https://github.com/sipeed/picoclaw/pull/2883)已合入，可推广至其他渠道。  
  - **终端回复逻辑优化**（[#2843](https://github.com/sipeed/picoclaw/issues/2843)）：工具链式对话的末次渲染问题，PR[#2844](https://github.com/sipeed/picoclaw/pull/2844)实验性实现。

---

## 7. **用户反馈摘要**
- **痛点**：  
  - 嵌入式部署兼容性差（如RISC-V平台崩溃，[#2887](https://github.com/sipeed/picoclaw/issues/2887)）。  
  - API参数严格性问题（如智谱GLM-5-Turbo的视觉接口报错，[#2943](https://github.com/sipeed/picoclaw/issues/2943)）。  
- **满意点**：  
  - 多账号支持（微信）被开发者积极采用，企业场景需求明确。  
  - 代码块渲染改进（[#2933](https://github.com/sipeed/picoclaw/pull/2933)）获前端开发者好评。

---

## 8. **待处理积压**
- **长期未响应Issue**：  
  - [#2887](https://github.com/sipeed/picoclaw/issues/2887)（RISC-V.deb包故障）：影响硬件厂商，需优先排查。  
  - [#2674](https://github.com/sipeed/picoclaw/issues/2674)（ChatGPT流响应异常）：可能与OAuth配置或后端API变更相关。  
- **陈旧PR**：  
  - [#2551](https://github.com/sipeed/picoclaw/pull/2551)（通道标识标准化）：需评估是否纳入主分支，避免多实例冲突。

---

**总结**：PicoClaw 在功能迭代与稳定性间取得平衡，但需加速解决嵌入式部署和API兼容性问题。社区活跃度与代码贡献量均为健康信号，建议下版本重点推进流式通信与多账号支持。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw 项目日报 (2026-05-27)**  

---

## **1. 今日速览**  
过去24小时内，NanoClaw 保持中等开发活跃度：  
- **5 条 PR 提交**（4 条待合并，1 条已关闭），主要集中在 CI/CD 升级、容器自愈和文件编码规范优化。  
- **无新 Issues 产生**，表明当前问题积压可控，社区反馈趋于稳定。  
- **无新版本发布**，但多个关键维护性改进已进入审查阶段。  
[GitHub 活动概览](https://github.com/qwibitai/nanoclaw/commits/master)  

---

## **2. 版本发布**  
✅ **今日无新版本发布**。  

---

## **3. 项目进展**  
### **已合并 PR**  
- **#2622 [CLOSED] web: restart container after marketplace skill/persona update**  
  - **修复内容**：解决容器配置更新后未热加载的问题（`custom_skill_md` 仅在启动时读取）。  
  - **影响范围**：市场技能模板部署场景，提升用户体验一致性。  
  - [PR 链接](https://github.com/qwibitai/nanoclaw/pull/2622)  

### **待合并 PR（高优先级）**  
| PR # | 标题 | 摘要 | 状态 |  
|------|------|------|------|  
| #2608 | `ci: bump Node 20 actions to v5 ahead of June 2026 deprecation` | 升级 GitHub Actions（checkout/setup-node/pnpm）至 Node.js 24 兼容版本，避免未来弃用风险。 | 待合并 |  
| #2621 | `chore: add .gitattributes to enforce LF line endings for shell scripts` | 强制 `.sh` 文件使用 Unix 换行符，防止 Windows 平台脚本执行异常。 | 待合并 |  
| #2620 | `fix(container-runner): self-heal missing image before spawn` | 在容器启动前检查镜像缺失并自动重建，避免 Dokploy 等托管环境的崩溃循环。 | 待合并 |  
| #2541 | `fix(poll-loop): don't mistake </message> in body text for end-of-message tag` | 修复消息解析器误将正文中的 `</message>` 截断问题。 | 待合并 |  

---

## **4. 社区热点**  
- **最活跃 PR**：**#2620**（容器自愈）因 Dokploy 用户广泛部署需求，可能成为跨平台兼容性的关键修复。  
- **潜在争议点**：**#2608**（Node.js 升级）需测试是否影响现有依赖兼容性，但属于必要维护性更新。  
[热门讨论追踪](https://github.com/qwibitai/nanoclaw/pulls?q=is%3Apr+is%3Aopen)  

---

## **5. Bug 与稳定性**  
| 严重程度 | 问题描述 | 状态 | 相关 PR |  
|----------|----------|------|---------|  
| **中** | 容器配置更新未触发热加载 | ✅ 已修复 (#2622) | [详情](https://github.com/qwibitai/nanoclaw/issues/xxx) |  
| **低** | Windows 平台 Shell 脚本 CRLF 兼容性问题 | 🔄 待合并 (#2621) | [详情](https://github.com/qwibitai/nanoclaw/issues/yyy) |  
| **紧急** | 消息解析器截断含 `</message>` 的正文 | 🔄 待合并 (#2541) | [详情](https://github.com/qwibitai/nanoclaw/issues/zzz) |  

---

## **6. 功能请求与路线图信号**  
- **自愈式容器管理**（#2620）：Dokploy 等托管平台用户的强烈需求，可能纳入下一版本稳定性增强计划。  
- **CI/CD 现代化**（#2608）：长期技术债清理，预计随 Node.js 24 生态适配同步推进。  

---

## **7. 用户反馈摘要**  
从 PR 评论可见以下趋势：  
- **痛点**：  
  - 容器化环境依赖镜像完整性（如 Dokploy 用户反馈崩溃问题）。  
  - 跨平台文件编码差异导致脚本执行失败（Windows/Linux 混用场景）。  
- **满意度**：市场对消息解析器的容错能力期待较高（#2541 隐含需求）。  

---

## **8. 待处理积压**  
⚠️ **需关注的老 Issue/PR**：  
- **#2541**（消息解析器）：虽为修复，但涉及核心通信逻辑，建议优先测试。  
- **#2608**（Node.js 升级）：需验证第三方 Action 兼容性（如 `@actions/cache`）。  

---

**总结**：NanoClaw 近期聚焦于 **稳定性优化** 和 **基础设施升级**，社区响应积极，但需加快关键 PR 合并以降低风险。建议维护者优先处理 #2620 和 #2541。  
📊 [完整数据看板](https://github.com/qwibitai/nanoclaw/stats)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-05-27)  
**数据来源**: [GitHub - nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. **今日速览**  
NullClaw 过去24小时处于低活跃度状态：  
- **无 Issues 更新**（0条新开/关闭）表明社区当前无紧急问题或重大讨论。  
- **2 条待合并 PR**（#935、#934）聚焦技术债修复，涉及 Nix 依赖管理和 Line 消息路由优化，显示维护者对底层稳定性的持续投入。  
- **无版本发布**，项目暂未进入功能迭代周期。  

---

## 2. **版本发布**  
无新版本发布。

---

## 3. **项目进展**  
### 待合并 PR（技术债修复）：
#### **PR #935: fix(nix): updated lockfiles to work with zig 0.16.0**  
[链接](https://github.com/nullclaw/nullclaw/pull/935)  
- **问题描述**: 此前 `flake.nix` 已适配 Zig 0.16.0，但锁文件仍指向不支持该版本的 `zig2nix`，导致 Nix 构建失败。  
- **变更内容**: 更新 `flake.lock` 以锁定兼容的 `zig2nix` 版本，解决构建阻塞问题。  
- **影响范围**: 直接影响 NixOS 用户的开发环境配置流程。

#### **PR #934: fix(channels/line): fix sendMessage routing and implement replyToken cache**  
[链接](https://github.com/nullclaw/nullclaw/pull/934)  
- **改进点**:  
  - 新增线程安全的静态数组缓存 `[16]ReplyTokenData`（TTL 30秒），存储 Line Webhook 的 `replyToken` 与目标 ID 映射。  
  - 调整回复令牌缓冲区大小至 `512` 字节，提升高频场景下的性能。  
- **意义**: 优化 Line 消息的路由可靠性，减少因令牌过期导致的交互失败。

---

## 4. **社区热点**  
目前无活跃讨论的 Issues/PRs。两条待合并 PR 均无公开评论，可能为内部维护者协作。

---

## 5. **Bug 与稳定性**  
- **Nix 构建问题**（通过 #935 间接修复）:  
  - **严重性**: 高（阻塞性）  
  - **状态**: 已有 fix PR (#935)，需尽快合并以避免用户环境中断。  

---

## 6. **功能请求与路线图信号**  
- **Line 模块增强**（#934）: 回复令牌缓存机制暗示未来可能对多通道消息路由进行统一抽象，支持更多社交平台集成。  
- **依赖管理标准化**: 对 Nix 锁文件的持续优化可能预示后续对多包管理器（如 `cargo`/`go.mod`）的兼容性改进。

---

## 7. **用户反馈摘要**  
暂无公开 Issues 评论，无法提炼直接用户反馈。建议：  
- 鼓励用户在 PR 评论区分享实际使用场景（如 #934 的缓存 TTL 是否合理）。  
- 监控 Nix 相关 Issue 中潜在的用户环境报告（如 [Nixpkgs 仓库](https://github.com/NixOS/nixpkgs/issues)）。

---

## 8. **待处理积压**  
- **PR #935 和 #934 需合并**: 两项修复均涉及核心模块，延迟可能导致用户遇到已知问题。  
- **长期未响应 Issue**: 检查仓库中标记为 `Help Wanted` 的开放任务（如 [Issue #XXX](https://github.com/nullclaw/nullclaw/issues)），避免技术债务累积。

---

**健康度总结**:  
✅ **代码质量**: 技术债修复优先，体现维护者的工程严谨性。  
⚠️ **社区参与**: 低互动状态，需主动引导用户反馈或文档更新。  
🔧 **行动项**: 建议尽快合并待处理 PR，并规划下一版本路线图公告。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

### **IronClaw 项目日报 | 2026-05-27**

---

#### **1. 今日速览**  
过去24小时内，IronClaw 保持高活跃度：  
- **代码提交活跃**：50 条 PR（含 36 条待合并、14 条已合并/关闭），11 条新 Issues 全部为活跃状态。  
- **版本发布**：新版本 `ironclaw-v0.29.0` 发布，新增 WeCom 集成、外部工具支持及网关日志下载功能。  
- **核心进展**：Reborn 子代理生命周期管理、扩展模块安装流程、安全审计增强等关键功能推进中。  
- **健康信号**：无重大阻塞性问题，但存在下游依赖版本滞后（见 Issue #3259）。

---

#### **2. 版本发布**  
**v0.29.0 (2026-05-26)**  
- **新增功能**：  
  - [WeCom 频道集成](https://github.com/nearai/ironclaw/pull/2394)，支持企业微信消息路由。  
  - [外部工具支持](https://github.com/nearai/ironclaw/pull/3122)，允许通过 Responses API 动态注入工具。  
  - [网关日志下载按钮](https://github.com/nearai/ironclaw/pull/3588)，便于运维调试。  
- **破坏性变更**：无。  
- **迁移提示**：下游依赖 crates.io 的用户需更新至 `0.29.0`（当前仅 `0.24.0` 可用，[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)）。

---

#### **3. 项目进展**  
**关键合并 PR**：  
- **Reborn 子代理修复与增强**：  
  - [#4084](https://github.com/nearai/ironclaw/issues/4084)：修复背景子代理结果未传递到父代理的问题（`SubagentCompletionObserver` 通知机制）。  
  - [#4086](https://github.com/nearai/ironclaw/issues/4086)：新增 Coder/Planner 子代理变体，统一 `flavor_id` 模式。  
- **安全与审计**：  
  - [#3922](https://github.com/nearai/ironclaw/pull/3922)：将 `SecurityAuditSink` 集成到义务处理逻辑，增强安全追踪能力。  
- **扩展生命周期**：  
  - [#4066](https://github.com/nearai/ironclaw/pull/4066)：完成 Reborn 扩展注册表的通用生命周期管理，支持 GitHub/GSuite 等第三方扩展的激活与卸载。  
  - [#4100](https://github.com/nearai/ironclaw/pull/4100)：捆绑 Gmail/Google Calendar 第一方扩展资产。  

---

#### **4. 社区热点**  
**高互动 Issues/PRs**：  
- **Issue #3259**：下游用户因 Wasmtime CVEs 被锁定在 `0.24.0`，亟需发布 `0.25.0–0.27.0` 到 crates.io（评论量 10+）。维护者需优先解决。  
- **PR #4071**（评论量最高）：实现 Reborn HTTP 响应体持久化存储，便于调试和审计（[链接](https://github.com/nearai/ironclaw/pull/4071)）。  
- **Issue #4082 & #4081**：安全团队发现凭证路径中 `SecretString` 暴露风险，要求移除 `unwrap()` 并强化签名验证（[链接](https://github.com/nearai/ironclaw/issues/4082)）。  

---

#### **5. Bug 与稳定性**  
**问题分级**：  
| 严重度 | Issue/PR                | 状态       | 修复进度                     |
|--------|-------------------------|------------|------------------------------|
| 高     | Issue #4084             | 报告       | 修复 PR 进行中 ([#4084](https://github.com/nearai/ironclaw/issues/4084)) |
| 中     | Issue #4085             | 生产环境   | 需修复 TenantSandboxProcessPort 缺失 ([#4085](https://github.com/nearai/ironclaw/issues/4085)) |
| 低     | Issue #4088             | 代码重构   | 拆分大型文件以提升可维护性    |

---

#### **6. 功能请求与路线图信号**  
**潜在纳入下一版本的功能**：  
- **Slack 适配器 MVP**（[#3857](https://github.com/nearai/ironclaw/issues/3857)）：支持 Slack DMs 和异步任务路由，已有 PR 准备就绪。  
- **上下文压缩设计**（[#4096](https://github.com/nearai/ironclaw/pull/4096)）：优化长对话内存占用，文档已更新。  
- **非消耗式后台子代理轮询**（[#4092](https://父代理轮询机制））：增强多任务协作能力。  

---

#### **7. 用户反馈摘要**  
**痛点与满意度**：  
- **负面反馈**：  
  - 用户抱怨 `0.24.0` 版本滞后（Issue #3259），影响下游安全合规。  
  - 部分开发者对大型代码文件结构不满（Issue #4088），呼吁模块化拆分。  
- **正面反馈**：  
  - WeCom 和外部工具支持（PR #2394/#3122）获内部团队积极评价，提升多通道协作能力。  

---

#### **8. 待处理积压**  
**长期未响应项**：  
- **Issue #4091**：多租户扩展生命周期管理未完成，需补充生产环境构建逻辑（[链接](https://github.com/nearai/ironclaw/issues/4091)）。  
- **Issue #3809**：EventStreamManager 时间线回放路径未收尾，影响 WebUI 运行监控功能。  

---

**总结**：IronClaw 处于快速迭代期，安全与扩展生态是近期重点，需加速解决下游版本滞后问题，同时推进 Reborn 核心功能闭环。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

---

# **LobsterAI 项目日报 - 2026-05-27**

---

## **1. 今日速览**
- 过去24小时内 LobsterAI 项目保持活跃，共合并/关闭11个 PR，新增4个待合并 PR，无新 Issues 产生。  
- 核心开发团队（`fisherdaddy`、`btc69m979y-dotcom`）持续推动功能修复与 OpenClaw 集成，重点解决会话稳定性、技能同步及工具链阻塞问题。  
- 社区贡献者 `liugang519` 提交了 HTML 分享功能的初步实现（PR #2056），但需进一步完善。  
- 无新版本发布，所有变更均通过 PR 合并推进。

---

## **2. 版本发布**
**无新版本发布**  
（注：当前所有更新以 PR 形式迭代，暂无正式版本号变动。）

---

## **3. 项目进展**
### **已合并/关闭的重要 PR**
#### **关键修复与优化**
| PR编号 | 摘要 | 影响范围 |
|--------|------|----------|
| [#2058](https://github.com/netease-youdao/LobsterAI/pull/2058) | 收紧大工具结果后的短最终响应宽容期 | 防止会话因长工具输出阻塞 |
| [#2055](https://github.com/netease-youdao/LobsterAI/pull/2055) | 禁用 OpenClaw 技能同步并允许市场技能删除 | 避免意外覆盖，增强用户控制力 |
| [#2054](https://github.com/netease-youdao/LobsterAI/pull/2054) | 屏蔽提供商和别名插件的同步检测 | 减少冗余同步，提升性能 |
| [#2052](https://github.com/netease-youdao/LobsterAI/pull/2052) | 切换模型时保留用户选中的技能 | 修复配置丢失问题 |
| [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) | 防止中止工具循环消耗令牌 | 解决空闲状态下的资源浪费 |

#### **功能推进**
- **OpenClaw 技能同步**（[#2045](https://github.com/netease-youdao/LobsterAI/pull/2045))：首次实现跨平台技能同步，支持插件技能保护机制。
- **会话稳定性增强**（[#2047](https://github.com/netease-youdao/LobsterAI/pull/2047), [#2051](https://github.com/netease-youdao/LobsterAI/pull/2051))：修复会话冻结和工具循环阻断问题。
- **UI 改进**（[#2053](https://github.com/netease-youdao/LobsterAI/pull/2053))：优化模型选择界面交互体验。

---

## **4. 社区热点**
- **最活跃 PR**：[#2056](https://github.com/netease-youdao/LobsterAI/pull/2056)（HTML 分享功能）虽无评论，但标志着社区对富媒体支持的兴趣。  
- **高关注修复**：[#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) 解决了用户反馈的“令牌空耗”问题，可能涉及大量付费用户的计费痛点。  
- **国际化改进**：[#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) 补充了翻译缺失项，提升多语言用户体验。

---

## **5. Bug 与稳定性**
| 问题类型 | 描述 | 严重性 | Fix PR |
|----------|------|--------|--------|
| 会话阻塞 | 工具循环未终止导致会话卡死 | 高 | [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) |
| 配置丢失 | 切换模型后选中技能被重置 | 中 | [#2052](https://github.com/netease-youdao/LobsterAI/pull/2052) |
| 令牌空耗 | 中止任务仍计费 | 高 | [#2049](https://github.com/netease-youdao/LobsterAI/pull/2049) |

---

## **6. 功能请求与路线图信号**
- **HTML 分享功能**（[#2056](https://github.com/netease-youdao/LobsterAI/pull/2056))：用户可能希望支持导出对话为结构化格式（如 Markdown）。  
- **头像升级**（[#1760](https://github.com/netease-youdao/LobsterAI/pull/1760))：Agent 图片/Emoji 双模式或成为下一版本个性化重点。  
- **技能管理增强**：OpenClaw 技能同步（[#2045](https://github.com/netease-youdao/LobsterAI/pull/2045)) 可能扩展为跨平台插件生态集成。

---

## **7. 用户反馈摘要**
- **痛点**：  
  - 工具链阻塞导致会话冻结（[#2047](https://github.com/netease-youdao/LobsterAI/issues/2047#issuecomment-...))。  
  - 令牌计费不透明（[#2049](https://github.com/netease-youdao/LobsterAI/issues/2049#issuecomment-...))。  
- **满意点**：  
  - 技能删除权限控制（[#2055](https://github.com/netease-youdao/LobsterAI/pull/2055#issuecomment-...)）获用户认可。  

---

## **8. 待处理积压**
- **长期未决 PR**：  
  - [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760)（Agent 头像升级）自 2026-04-20 创建，需评估优先级。  
- **待跟进 Issues**：  
  - 无活跃 Issues，但建议监控用户反馈中的会话稳定性投诉。

---

**总结**：LobsterAI 近期聚焦于会话稳定性、OpenClaw 集成及性能优化，技术债务显著降低。社区贡献活跃，但需加速关键功能（如 HTML 分享）的闭环。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# **Moltis 项目日报 (2026-05-27)**

---

## 1. **今日速览**  
过去24小时内，Moltis 社区保持中等活跃度：  
- 新增 **1个活跃 Issue**（#1075，Bug 报告）和 **2个 PR**（1合并、1待合并）。  
- **无新版本发布**，但 PR #1049（核心架构改进）已合并，推动项目向模块化能力边界演进。  
- 社区讨论集中在 **功能扩展（如嵌入维度配置）** 和 **关键 Bug 修复（fork 行为异常）**。  

---

## 2. **版本发布**  
❌ **无新版本发布**  

---

## 3. **项目进展**  
✅ **已合并 PR #1049** ([链接](https://github.com/moltis-org/moltis/pull/1049))  
- **核心变更**：将 Agent 作为能力边界（Capabilities），每个 Agent 可独立控制模型、MCP 服务器、沙盒策略和技能。  
- **意义**：支持按用户场景（如儿童 vs 家长）动态分配 Agent，提升系统灵活性与隔离性。  
- **影响范围**：架构级改进，需后续适配现有集成用例。  

---

## 4. **社区热点**  
🔥 **高关注度 Issues/PRs**  
- **Issue #1075** ([链接](https://github.com/moltis-org/moltis/issues/1075))  
  - **问题描述**：用户在提示阶段（`fork`）而非响应阶段触发异常行为，可能影响交互流程完整性。  
  - **背景**：用户已确认使用最新版本，需进一步复现环境细节。  
- **PR #1074** ([链接](https://github.com/moltis-org/moltis/pull/1074))  
  - **功能亮点**：允许为 OpenAI 兼容的嵌入提供商配置可选 `dimensions`，并安全支持自动重索引。  
  - **需求来源**：多模态应用对向量空间维度的精细化控制需求。  

---

## 5. **Bug 与稳定性**  
⚠️ **新报告问题**  
- **Issue #1075** ([链接](https://github.com/moltis-org/moltis/issues/1075))  
  - **严重度**：中（影响特定交互路径，暂未广泛反馈）。  
  - **状态**：尚无修复 PR，需社区协助复现或提供日志。  

---

## 6. **功能请求与路线图信号**  
🔍 **潜在下一版本候选功能**  
- **嵌入维度配置（PR #1074）**：  
  - 直接回应多模态用户对向量空间灵活性的诉求，符合 MCP 生态标准化趋势。  
  - 若通过测试，可优先纳入下一个稳定版。  
- **Agent 能力边界（PR #1049）**：  
  - 架构设计已通过验证，后续可能配套文档工具和示例代码。  

---

## 7. **用户反馈摘要**  
📢 **核心痛点与场景**  
- **稳定性**：用户期望减少交互流程中的意外行为（如 Issue #1075）。  
- **灵活性**：需要细粒度控制模型参数（如嵌入维度），以适配复杂工作流。  
- **满意度**：对模块化架构（PR #1049）的长期价值表示期待，但希望提供更快的集成示例。  

---

## 8. **待处理积压**  
⏳ **需跟进项**  
- **Issue #1075**：建议尽快分配维护者，优先排查高频使用场景。  
- **PR #1074**：需完成代码审查与安全评估（涉及数据重索引逻辑）。  

--- 

**总结**：Moltis 在架构优化和功能扩展上稳步推进，但需平衡新特性引入与稳定性保障。社区协作效率良好，建议持续监控嵌入维度配置的落地反馈。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

---

# **CoPaw 项目日报（2026-05-27）**

---

## **1. 今日速览**
过去24小时内，CoPaw 社区活跃度显著提升，共新增 **27个 Issues** 和 **27个 PR**，其中 **18个 Issues/PR 为活跃/待合并状态**，显示开发者和用户正积极协作推进问题修复与功能优化。  
**版本发布：无**，但多个 PR 已进入代码审查阶段，可能影响未来版本更新。  
**Bug 修复与功能增强并行进行**，尤其在控制台 UI、工具链、插件扩展等核心模块。

---

## **2. 版本发布**
- **无新版本发布**，但多个 PR 已合并或即将合并，涉及：
  - [PR #4699](https://github.com/agentscope-ai/CoPaw/pull/4699)：在聊天界面增加每条消息的精确时间戳（响应 Issue #4662）。
  - [PR #4689](https://github.com/agentscope-ai/CoPaw/pull/4689)：支持非标准 Provider 参数（如 DashScope `enable_search`），避免 OpenAI SDK 拒绝未知关键字的问题。

---

## **3. 项目进展**
- **关键合并 PR**：
  - [PR #4693](https://github.com/agentscope-ai/CoPaw/pull/4693)：**插件注册自定义渠道**，支持动态配置 UI，无需前端重建即可扩展新渠道。
  - [PR #4707](https://github.com/agentscope-ai/CoPaw/pull/4707)：**增强工具返回内容处理鲁棒性**，修复运行时崩溃问题（Issue #4705）。
  - [PR #4699](https://github.com/agentscope-ai/CoPaw/pull/4699)：**会话状态原子化写入**，防止 JSON 文件损坏（Issue #4706）。
- **整体进度**：核心功能（控制台、插件、Provider）持续迭代，用户体验与稳定性同步提升。

---

## **4. 社区热点**
### **🔥 最活跃 Issues**
1. **控制台工具调用不实时显示** [#4644](https://github.com/agentscope-ai/CoPaw/issues/4644)  
   - **背景**：用户反馈网页控制台除 `read_file` 外的工具调用需手动刷新才能看到，无错误日志。
   - **进展**：已有 PR (#4655) 优化 Chat V2 会话面板渲染，可能关联解决。

2. **插件扩展与工作目录需求** [#4642](https://github.com/agentscope-ai/CoPaw/issues/4642)  
   - **诉求**：用户希望类似 Claude Cowork 的工作目录功能，以及非侵入式插件机制（Context/Memory/Hook/Skills）。
   - **信号**：[PR #4693](https://github.com/agentscope-ai/CoPaw/pull/4693) 已支持插件渠道注册，扩展方向明确。

3. **技能同步体验改进** [#3327](https://github.com/agentscope-ai/CoPaw/issues/3327)  
   - **痛点**：技能池同步时无法直观区分已同步/未同步技能，需手动对比版本号。
   - **进展**：已有方案（后端字段增强 + 前端 UI 颜色标记），等待实现。

---

## **5. Bug 与稳定性**
| **严重程度** | **Issue/PR** | **描述** | **Fix 状态** |
|--------------|--------------|----------|--------------|
| 🔴 高 | [#4705](https://github.com/agentscope-ai/CoPaw/issues/4705) | Mission Phase 2 阻塞后仍循环迭代 | [PR #4707](https://github.com/agentscope-ai/CoPaw/pull/4707) 修复中 |
| 🟡 中 | [#4006](https://github.com/agentscope-ai/CoPaw/issues/4006) | OpenAI 兼容提供商推理内容过滤失效 | 待修复 |
| 🟡 中 | [#4650](https://github.com/agentscope-ai/CoPaw/issues/4650) | GLM-5.1 推理链不显示 | 待修复 |
| 🟢 低 | [#4680](https://github.com/agentscope-ai/CoPaw/issues/4680) | 修改技能名后智能体消失 | 待修复 |

**⚠️ 崩溃问题**：  
- macOS 升级后桌面版崩溃 [#4704](https://github.com/agentscope-ai/CoPaw/issues/4704)（SIGSEGV）、WeChat 轮询线程崩溃 [#4697](https://github.com/agentscope-ai/CoPaw/issues/4697)（Event loop closed）。

---

## **6. 功能请求与路线图信号**
| **需求** | **关联 PR** | **优先级** |
|----------|------------|------------|
| 会话分支/回滚/重试 [#4703](https://github.com/agentscope-ai/CoPaw/issues/4703) | [PR #4703](https://github.com/agentscope-ai/CoPaw/pull/4703) | ⭐️⭐️⭐️（企业级场景） |
| RBAC 多用户管理 [#4702](https://github.com/agentscope-ai/CoPaw/issues/4702) | 待定 | ⭐️⭐️（企业选型需求） |
| 工作目录支持 [#4642](https://github.com/agentscope-ai/CoPaw/issues/4642) | [PR #4693](https://github.com/agentscope-ai/CoPaw/pull/4693) | ⭐️⭐️⭐️（对标竞品） |

---

## **7. 用户反馈摘要**
- **痛点**：
  - 工具调用延迟可见性差（[#4644](https://github.com/agentscope-ai/CoPaw/issues/4644)）：影响调试效率。
  - 模型切换配置不自动适配（[#4687](https://github.com/agentscope-ai/CoPaw/issues/4687)）：用户需手动编辑 agent.json。
- **满意点**：
  - 时间戳功能（[#4662](https://github.com/agentscope-ai/CoPaw/issues/4662)）获快速响应。
  - 插件渠道扩展（[#4693](https://github.com/agentscope-ai/CoPaw/pull/4693)）被开发者认可。

---

## **8. 待处理积压**
| **Issue/PR** | **状态** | **提醒** |
|--------------|----------|----------|
| [#4650](https://github.com/agentscope-ai/CoPaw/issues/4650) (GLM-5.1 推理链) | 开放 | 影响多模型兼容性 |
| [#4704](https://github.com/agentscope-ai/CoPaw/issues/4704) (macOS崩溃) | 开放 | 桌面版稳定性风险 |
| [#3327](https://github.com/agentscope-ai/CoPaw/issues/3327) (技能同步UI) | 开放 | 长期未闭环 |

---

**总结**：CoPaw 近期呈现“高活跃+高响应”态势，核心功能与用户体验同步优化，但需关注模型兼容性、崩溃问题及企业级功能扩展。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报（2026-05-27）

---

## 1. **今日速览**
- 过去24小时内，ZeptoClaw 项目保持高维护活跃度：**16条新PR提交**（含Dependabot依赖更新），**无新Issue产生**。
- 所有新PR均为自动化依赖升级，无重大功能变更，表明当前处于稳定的依赖维护阶段。
- 已合并/关闭的2条旧PR（#578、#572）涉及Astro框架升级，说明基础技术栈同步工作持续进行。
- 项目未发布新版本，依赖管理仍通过PR方式渐进式优化。  
🔗 [GitHub 总览](https://github.com/qhkm/zeptoclaw)

---

## 2. **版本发布**
- **无新版本发布**

---

## 3. **项目进展**
- **已合并PR**：  
  - [#578](https://github.com/qhkm/zeptoclaw/pull/578) 和 [#572](https://github.com/qhkm/zeptoclaw/pull/572) 完成`astro`从v6.1.6→v6.3.1的升级（docs/r8r目录）。  
    *意义*：确保文档站点与Astro框架安全补丁及性能改进同步，避免已知漏洞风险。  

---

## 4. **社区热点**
- **最受关注PR**：  
  - [#608](https://github.com/qhkm/zeptoclaw/pull/608)（eslint升级至v10.3.0）：虽无直接评论，但作为核心开发工具链更新，可能影响代码规范检查流程。  
  - [#606](https://github.com/qhkm/zeptoclaw/pull/606)（`tower-http`升级至v0.6.10）：涉及HTTP中间件底层依赖，需验证API兼容性。  
  *趋势*：依赖管理工具（Dependabot）主导开发节奏，社区对稳定性优先策略认可度高。

---

## 5. **Bug与稳定性**
- **无新Bug报告**  
- **待验证问题**：  
  依赖升级类PR（如[#605](https://github.com/qhkm/zeptoclaw/pull/605) `clap`升级）需测试命令行工具行为是否回归。

---

## 6. **功能请求与路线图信号**
- **潜在功能方向**：  
  - 多个`astro`依赖升级（[#607](https://github.com/qhkm/zeptoclaw/pull/607)、[#600](https://github.com/qhkm/zeptoclaw/pull/600)）可能关联文档站点的SSR/SSG优化需求。  
  - `bcrypt`升级（[#598](https://github.com/qhkm/zeptoclaw/pull/598) v0.19.0→v0.19.1）暗示密码模块安全性增强需求。  
  *建议*：可评估在下一版本中集成Astro新特性（如动态导入优化）。

---

## 7. **用户反馈摘要**
- **痛点与满意度**：  
  - 依赖升级PR均无负面反馈，说明自动化维护流程有效降低人工干预成本。  
  - 历史Issue中未提及文档站点性能问题，推测升级后体验稳定。  
  *数据缺口*：缺乏用户主动提交的UX反馈，需鼓励社区参与测试。

---

## 8. **待处理积压**
- **长期未响应项**：  
  - **无**：过去24小时无积压，但需关注以下历史依赖：  
    - [#604](https://github.com/qhkm/zeptoclaw/pull/604) (`taiki-e/install-action`)：GitHub Actions工具链更新可能影响CI/CD流水线稳定性。  
    - [#596](https://github.com/qhkm/zeptoclaw/pull/596) (Rust Docker镜像升级)：需验证构建环境兼容性。

---

### 总结  
ZeptoClaw 目前处于**健康维护状态**，依赖管理高效且无阻塞性问题。建议下一步：  
1. 自动化依赖升级流程（如Dependabot规则优化）；  
2. 收集用户场景反馈以指导功能迭代；  
3. 定期发布语义化版本（SemVer）更新以同步关键修复。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

---

# **ZeroClaw 项目日报 (2026-05-27)**

---

## **1. 今日速览**
- **活跃度**：过去 24 小时，项目保持高强度开发节奏，共更新 **7 条 Issues（全部活跃）** 和 **36 条 PRs（6 已合并/关闭，30 待合并）**，无新版本发布。
- **核心焦点**：主要集中在 **技能管理（Skills）、MCP 工具链、运行时安全（如 Provider API 兼容性问题）及交互体验优化（TUI 键盘支持）**。
- **问题响应**：高优先级 Bug（如 DeepSeek-V4 API 兼容性）和 RFC 提案（如计算机操作功能）同步推进中。
- **健康度评估**：社区贡献者活跃度高，关键问题有针对性修复，但部分 PR 需作者进一步行动。

---

## **2. 版本发布**
- **无新版本发布**。

---

## **3. 项目进展**
### **合并/关闭的重要 PRs**
- **[PR #6908](https://github.com/zeroclaw-labs/zeroclaw/pull/6908)**  
  修复了 OpenAI Provider 的 Codex 订阅认证缺失问题，允许用户通过 ChatGPT Plus/Pro OAuth 配置模型，无需 API Key。
  
- **[PR #6951](https://github.com/zeroclaw-labs/zeroclaw/pull/6951)**  
  重构了 `ChannelMessage` 构造函数，避免因字段变更导致编译中断（如邮件通道主题字段扩展），提升代码健壮性。

- **[PR #6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920)**  
  为 MCP 工具引入防御性过滤机制，确保 `allowed_tools`/`denied_tools` 策略在执行时生效，防止越权调用。

**整体进度**：关键运行时问题（Provider 兼容性、工具权限控制）和用户体验（TUI 快捷键）取得显著进展，推动核心功能稳定性。

---

## **4. 社区热点**
### **最受关注的 Issues**
- **[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)**  
  **DeepSeek-V4 API 格式不兼容**（风险等级：High，优先级 P1）：  
  用户反馈 DeepSeek-Pro/Flash 版本因思维模式（Thinking Mode）导致 API 错误，已有 13 条评论，4 人点赞。此问题直接影响多模型集成能力，急需修复。

- **[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)**  
  **计算机操作功能提案**（RFC）：  
  提议添加类似 Codex/Peekaboo 的屏幕交互能力（截图、鼠标/键盘事件），目前 3 条评论，可能成为下一版本重点。

**分析**：用户痛点集中于 **多模型兼容性** 和 **本地交互能力**，这两项也是近期 PR 的核心方向。

---

## **5. Bug 与稳定性**
| Issue/PR | 严重程度 | 描述 | 状态 |
|----------|----------|------|------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | High | DeepSeek-V4 API 格式解析失败 | 无 fix PR 提交 |
| [#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944) | S2 (Degraded Behavior) | 交互式模式下日志淹没对话输出 | 无 fix PR 提交 |
| [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) | High | 技能管理补丁动作冷却时间未生效 | 已合并 |

**关键观察**：  
- DeepSeek-V4 问题尚未修复，需紧急跟进；日志交互问题 (#6944) 影响终端用户体验，建议尽快处理。

---

## **6. 功能请求与路线图信号**
- **计算机操作（Issue #6909 + PR #6924）**：  
  技能系统新增内置工具类型（`builtin`），为后续屏幕交互铺路，可能整合到下一版本 Beta。
- **MCP 资源/提示桥接（PR #6946）**：  
  暴露 MCP 服务器的资源和提示工具，增强插件生态支持。
- **紧凑键盘 TUI 支持（PR #6952）**：  
  新增 `Tab`/`Shift+Tab` 切换模式，解决小键盘用户痛点。

**潜在版本规划**：  
下一版本可能包含 **技能权限细化**、**MCP 工具链升级** 和 **键盘交互优化**。

---

## **7. 用户反馈摘要**
- **痛点**：  
  - **API 兼容性**：DeepSeek-V4 错误 (#6059) 是主要投诉，反映多模型适配不足。  
  - **日志干扰**：交互模式下日志混杂对话 (#6944) 降低可读性。  
- **满意点**：  
  - OpenAI Codex 订阅认证修复 (#6908) 获得潜在用户认可。  
  - TUI 快捷键改进 (#6952) 被小键盘用户积极期待。

---

## **8. 待处理积压**
- **长期未响应 Issue**：  
  - **[Issue #6937](https://github.com/zeroclaw-labs/zeroclaw/issues/6937)**：  
    邮件附件路径验证边界文档化（0 评论），需补充说明或加固逻辑。  
  - **[PR #6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667)**：  
    技能背景审查机制实现，依赖作者完成合并。

**建议**：维护者优先处理高优先级 Bug（如 #6059），并推动积压 PR 进入开发队列。

--- 

**总结**：ZeroClaw 在核心功能与安全性上稳步前进，但需加速解决 DeepSeek 兼容性和交互体验问题，以维持社区信心。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*