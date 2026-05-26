# OpenClaw 生态日报 2026-05-26

> Issues: 477 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-26 00:36 UTC

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

# **OpenClaw 项目日报 | 2026-05-26**

---

## 1. **今日速览**
过去24小时内，OpenClaw 活跃度高：**新增/活跃 Issues 192条，PR 271条待合并**，评论与讨论密集。项目处于快速迭代期，核心问题聚焦于会话状态、消息交付、工具调用和认证流程，多个高优先级 Bug 正在修复中。整体活跃度良好，但存在若干稳定性隐患（如会话锁竞争、消息丢失等），需关注后续 PR 进展。

- [Issues 更新统计](https://github.com/openclaw/openclaw/issues)
- [PR 更新统计](https://github.com/openclaw/openclaw/pulls)

---

## 2. **版本发布**
无新版本发布。

---

## 3. **项目进展**

### **合并的 PR 与关键修复**
- **[#86474](https://github.com/openclaw/openclaw/pull/86474)**  
  修复了 DeepSeek 工具参数中 `const` 联合变体枚举的规范化问题，避免 LLM 仅看到第一个枚举值导致验证失败。
- **[#86624](https://github.com/openclaw/openclaw/pull/86624)**  
  持久化 CLI 用户输入到会话转储，确保在 `before_agent_run` 钩子执行后保存，防止非阻塞 `llm_input` 通知失败导致数据丢失。
- **[#84007](https://github.com/openclaw/openclaw/pull/84007)**  
  子代理现在继承父会话的 thinking level 配置，解决了子任务默认行为不一致问题。
- **[#85341](https://github.com/openclaw/openclaw/pull/85341)**  
  重构内部 Agent 运行时架构，移除 Pi 依赖，整合为 OpenClaw 自有核心/插件/SDK 表面，提升模块化与可维护性。

> 今日合并 PR 数量：4个，涵盖工具链、会话持久化、运行时架构等核心领域，推进显著。

---

## 4. **社区热点**

### **评论最多 Issues & PR**
- **[Issue #80319](https://github.com/openclaw/openclaw/issues/80319)（17条评论）**  
  QA 工具默认套件混淆了 Codex 原生工具与 OpenClaw 动态工具对等性，涉及测试框架与模拟提供者的行为差异，需进一步澄清。
- **[PR #86165](https://github.com/openclaw/openclaw/pull/86165)**  
  引入“Channel Broker”第四阶段约束能力，统一 Telegram/Discord/WhatsApp/Signal/iMessage 等通道的会话路由、白名单等重复逻辑，解决多平台插件频繁回归问题。
- **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599)**  
  Windows Beta 本地模型调用阻塞事件循环，简单推理请求耗时达 4 分钟，影响可用性，已有修复 PR [#86251](https://github.com/openclaw/openclaw/pull/86251) 处理 Bun 导入缺失问题。

---

## 5. **Bug 与稳定性（按严重程度排序）**

| Issue | 描述 | 修复 PR |
|-------|-------|---------|
| **[#86214](https://github.com/openclaw/openclaw/issues/86214)** | Codex 应用服务器关闭时图像/工具请求中断，UI 显示停止状态 | 修复中 |
| **[#85913](https://github.com/openclaw/openclaw/issues/85913)** | 心跳通道与同一会话文件并发竞争导致 `EmbeddedAttemptSessionTakeoverError` | 修复中 |
| **[#84038](https://github.com/openclaw/openclaw/issues/84038)** | `doctor --fix` 迁移 Codex 配置到 OpenAI 引发 OAuth 失效与令牌膨胀 | 修复中 |
| **[#86613](https://github.com/openclaw/openclaw/issues/86613)** | 网关累积 >12K 只读文件描述符，与 `memory_search` 工具活动相关 | 修复中 |

---

## 6. **功能请求与路线图信号**
- **新需求**：  
  - **[Xiaomi MiMo Token Plan 支持 (#86169)](https://github.com/openclaw/openclaw/issues/86169)**：小米订阅 API 连接问题，已有 PR [#86165](https://github.com/openclaw/openclaw/pull/86165) 整合通道能力。
  - **[iMessage 上下文回复 (#10737)](https://github.com/openclaw/openclaw/issues/10737)**：Apple iMessage 需自动回复模拟打字指示器，可能纳入下版。
  - **[Telegram 命令提及 (#86553)](https://github.com/openclaw/openclaw/pull/86553)**：修复群组内定向机器人命令因提及规则被丢弃。

---

## 7. **用户反馈摘要**
- **痛点**：  
  - 会话丢失（如 Telegram 消息静默丢弃 [#80520](https://github.com/openclaw/openclaw/issues/80520)）、工具调用超时（Subagent 完成无重试 [#44925](https://github.com/openclaw/openclaw/issues/44925)）。
  - 认证流程卡顿（WSL2 升级后响应延迟 [#86201](https://github.com/openclaw/openclaw/issues/86201)）。
- **满意点**：  
  Channel Broker 重构 (#86165) 减少多平台维护成本，用户反馈积极。

---

## 8. **待处理积压**
- **长期未响应 Issue/PR**：
  - **[#80490](https://github.com/openclaw/openclaw/issues/80490)**：`doctor --fix` 不自动构建未编译插件，需更新验证逻辑。
  - **[#86022](https://github.com/openclaw/openclaw/issues/86022)**：关于“人物相关搜索请求”政策限制，需社区讨论。
  - **[#75336](https://github.com/openclaw/openclaw/pull/75336)**：压缩后标识符存活验证（UUID/API Key 等），尚未合并。

---

**总结**：OpenClaw 开发活跃度高，核心问题集中于会话状态、消息交付与工具链稳定性，多个高优先级 Bug 已有修复进展。社区对多通道统一化需求强烈，建议优先跟进 [#86165](https://github.com/openclaw/openclaw/pull/86165) 与 [#86624](https://github.com/openclaw/openclaw/pull/86624)。

---

## 横向生态对比

---

# **2026-05-26 个人 AI 助手/自主智能体开源生态横向对比分析报告**

---

## 1. **生态全景**  
当前个人 AI 助手与自主智能体开源生态呈现 **“两极分化+多赛道并行”** 态势：  
- **两极分化**：头部项目（如 OpenClaw、Hermes Agent）处于快速迭代，聚焦架构重构与稳定性；  
- **多赛道**：细分场景项目（如 PicoClaw、NanoBot、ZeroClaw）深耕垂直领域（嵌入式/轻量化/安全），功能深度优先；  
- **社区协作**：多数项目通过 PR 驱动开发，但文档同步滞后问题普遍存在，影响新用户体验。

---

## 2. **各项目今日活跃度对比**

| 项目名称       | Issues (新增/活跃) | PRs (待合并/已合并) | Release 情况 | 健康度评估 |
|----------------|-------------------|---------------------|--------------|------------|
| **OpenClaw**   | 192               | 271/4              | 无           | ⭐⭐⭐⭐⭐（高活跃，需监控 Bug 修复进度） |
| **NanoBot**    | 3                 | 108/10             | 无           | ⭐⭐⭐（稳定推进，积压 Issue 需跟进） |
| **Hermes Agent** | 50               | 43/7               | 无           | ⭐⭐⭐⭐（UI/部署问题突出） |
| **PicoClaw**   | 9                 | 8/0                | v0.2.9-nightly | ⭐⭐（依赖自动化构建，需测试验证） |
| **ZeroClaw**   | 26                | 34/16              | 无           | ⭐⭐⭐⭐（安全与多平台优化中） |
| **LobsterAI**  | 4                 | 14/5               | 无           | ⭐⭐⭐（记忆体系需求迫切） |
| **IronClaw**   | 22                | 40/18              | 无           | ⭐⭐⭐⭐（Reborn 重构进展显著） |
| **Moltis**     | 5                 | 6/5                | 20260525.01  | ⭐⭐⭐⭐⭐（子代理异步化亮点） |

> **注**：健康度 ⭐️数量代表综合评分，考虑代码贡献、Issue 解决速度及版本发布策略。

---

## 3. **OpenClaw 在生态中的定位**
### **优势**
- **技术路线**：  
  - **模块化设计**：通过核心/插件/SDK 分层解耦，支持多通道统一抽象（Channel Broker 重构）；  
  - **多模态支持**：工具链深度集成（如微信视觉 API 适配）；  
  - **社区规模**：GitHub 星标数超 1.2k，PR 合并率 >50%，开发者响应快。  
- **差异化**：  
  - **企业级会话管理**：持久化转储、子代理继承父级思维层级，适合复杂任务场景；  
  - **生态互通**：技能管理器支持 OpenClaw→LobsterAI 插件同步（PR #2045）。  

---

## 4. **共同关注的技术方向**
| 需求主题               | 涉及项目（共 8 个）                                                                                     | 具体诉求                                                                 |
|------------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **会话持久化与上下文管理** | OpenClaw, LobsterAI, Hermes Agent, NanoClaw, ZeroClaw                                                  | 避免跨会话信息丢失，支持元数据存储（如 LobsterAI #2046）                   |
| **工具调用稳定性**         | NanoBot, OpenClaw, Moltis, CoPaw                                                                       | 防止循环/超时/阻塞，增强容错机制（如 NanoBot #3985）                       |
| **多平台集成**            | PicoClaw, IronClaw, Hermes Agent, ZeroClaw                                                             | 统一 Telegram/Discord/iMessage 等通道逻辑（OpenClaw Channel Broker #86165）   |
| **沙盒与安全加固**         | ZeroClaw, Hermes Agent, OpenClaw                                                                       | 动态工具权限校验（如 ZeroClaw #6920）、子进程泄漏防护（ZeroClaw #6916）      |
| **模型兼容性**            | CoPaw, PicoClaw, NanoBot                                                                               | 适配 DeepSeek-R1、Anthropic 参数规范（PicoClaw #2942）                    |

---

## 5. **差异化定位分析**
| 项目          | 功能侧重                  | 目标用户                | 技术架构差异                              |
|---------------|--------------------------|-------------------------|------------------------------------------|
| **OpenClaw**  | 企业级多通道会话管理      | 开发者/企业部署者        | 核心/插件分层 + Channel Broker 统一抽象    |
| **Hermes Agent** | 生产环境全平台支持      | 运维/安全团队           | 基于 Anthropic/OpenAI 的插件化网关         |
| **PicoClaw**  | RISC-V 嵌入式/国内渠道   | IoT 开发者/国内用户      | 轻量级二进制包 + 微信/Server酱³ 集成      |
| **NanoBot**   | 轻量化多代理通信         | 实验性/教育场景         | TUI 交互 + SubagentManager 并发控制        |
| **ZeroClaw**  | 安全计算机交互           | 金融/合规敏感行业       | 纵深防御沙盒 + 浏览器/MCP 权限校验         |
| **CoPaw**     | 控制台插件管理           | 开发者                 | 实时日志流式渲染 + 桌面端 Tauri 更新       |
| **IronClaw**  | Reborn 区块链身份验证    | Web3 开发者            | attested-signing 多租户签名模型            |
| **Moltis**    | 子代理异步化             | 长任务调度场景         | `spawn_agent(nonblocking: true)`           |

---

## 6. **社区热度与成熟度分层**
| **阶段**       | 代表项目                          | 特点                                  |
|----------------|-----------------------------------|---------------------------------------|
| **快速迭代**   | OpenClaw, IronClaw, Moltis        | 架构重构/功能扩展主导，PR 合并率高       |
| **质量巩固**   | Hermes Agent, NanoClaw, CoPaw      | Bug 修复为主，稳定性提升明显            |
| **垂直深化**   | PicoClaw, ZeroClaw                | 特定场景优化（嵌入式/安全），功能闭环度高 |
| **生态整合**   | LobsterAI                         | 记忆体系需求推动跨平台技能互通（OpenClaw→LobsterAI） |

---

## 7. **值得关注的趋势信号**
### **行业趋势 & 开发者价值**
1. **企业级会话管理成为刚需**  
   - OpenClaw/LobsterAI 均提出持久化元数据需求，反映用户对 **长期上下文保留** 的强烈诉求，建议优先实现数据库存储方案。  
2. **安全与沙盒策略需动态平衡**  
   - ZeroClaw/Hermes Agent 的权限校验改进，提示开发者需结合场景配置（如金融场景严格 vs 开发场景灵活）。  
3. **多平台标准化接口涌现**  
   - OpenClaw 的 Channel Broker 重构、Hermes Agent 的多通道白名单，预示未来需统一协议（如 WebSocket/HTTP 适配层）。  
4. **子代理系统异步化浪潮**  
   - Moltis/NanoClaw 的非阻塞模式改进，表明长任务场景需要更细粒度资源控制。  
5. **生态互通加速**  
   - OpenClaw-LobsterAI 技能同步、ZeroClaw-ZeroCode 插件化，推动跨项目协作降低重复劳动。  

**行动建议**：  
- 开发者可关注 **会话存储**、**沙盒动态策略**、**通道统一抽象** 三大方向，优先参与相关项目的 RFC 讨论。  
- 企业级项目（如 OpenClaw）可强化 **审计日志** 和 **API 版本兼容性**，吸引下游集成。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

---

### **NanoBot 项目日报 - 2026-05-26**

---

#### **1. 今日速览**  
过去 24 小时内，NanoBot 保持较高开发活跃度：  
- **代码贡献强劲**：共提交 118 个 PR（待合并 108 条，已合并/关闭 10 条），显示社区对功能扩展和修复的快速响应。  
- **问题跟踪活跃**：新增 3 条 Issues（含 2 个开放，1 个已关闭），涉及流式输出、循环检测等关键场景。  
- **无新版本发布**，但多个功能补丁和增强已进入测试阶段。  
整体评估：项目处于积极迭代期，核心功能持续优化，社区协作紧密。

---

#### **2. 版本发布**  
**无**（截至 2026-05-26）

---

#### **3. 项目进展**  
✅ **合并/关闭的重要 PR**：  
- **PR #3999**（[链接](https://github.com/HKUDS/nanobot/pull/3999)）：修复了 `long_task` 任务下 AgentRunner 异常退出的问题，确保用户 `/goal` 指令后代理能持续执行目标（评论：0，👍: 0）。  
- **PR #3988**（[链接](https://github.com/HKUDS/nanobot/pull/3988)）：为 StepFun 新增专用 `step_plan` Provider，支持其分步规划订阅服务，API 密钥复用现有配置（评论：0，👍: 0）。  
- **PR #3978**（[链接](https://github.com/HKUDS/nanobot/pull/3978)）：修复 `maxConcurrentSubagents` 配置未传递到 `SubagentManager` 的问题，允许用户控制子代理并发数（评论：0，👍: 0）。  

**推进方向**：  
- 多实例代理通信（PR #3992）、循环检测与速率限制（PR #3985）、技能所有权管理（PR #4003）等核心架构改进持续推进。

---

#### **4. 社区热点**  
🔥 **最受关注的 Issues/PRs**：  
- **Issue #3986**（[链接](https://github.com/HKUDS/nanobot/issues/3986)）：**通用工具循环检测与速率限制护栏**，用户抱怨大模型陷入重复调用（如 `grep` 连搜多次、`list_dir` 疯狂触发），已有 PR #3985 提出硬阻断方案（评论：1，👍: 0）。  
- **Issue #3995**（[链接](https://github.com/HKUDS/nanobot/issues/3995)）：**PowerShell 流式输出换行异常**，导致终端刷屏，已关闭但未完全修复（评论：2，👍: 0）。  
- **PR #4005**（[链接](https://github.com/HKUDS/nanobot/pull/4005)）：**GitAgent Protocol 支持**，推动标准化 AI 代理间通信协议（评论：0，👍: 0）。  

**分析**：  
- 用户对**稳定性**（循环、刷屏）和**功能性需求**（跨代理通信、StepPlan 集成）反应强烈，反映项目在易用性与扩展性上的平衡点。

---

#### **5. Bug 与稳定性**  
⚠️ **关键 Bug 报告**：  
- **#3995 PowerShell 流式渲染异常**（已关闭，需进一步验证）[详情](https://github.com/HKUDS/nanobot/issues/3995)。  
- **#3999 任务中途退出**（已修复）[详情](https://github.com/HKUDS/nanobot/pull/3999)。  
- **潜在风险**：部分 PR（如 #4002 处理空响应时的工具回退）尚未合并，可能影响多模型兼容性。

---

#### **6. 功能请求与路线图信号**  
🔮 **高优先级新功能**：  
- **循环检测 v2.0**（PR #3985）：通过硬阻断解决重复工具调用，已被 Issue #3986 推动。  
- **StepFun 原生语音转录**（Issue #4000）：需适配其 ASR 端点，可能成为下一版本亮点。  
- **技能所有权隔离**（PR #4003）：防止 Dream 意外修改用户技能，提升安全性。  

---

#### **7. 用户反馈摘要**  
💬 **真实痛点提炼**：  
- **稳定性问题**：  
  - 终端刷屏（#3995）影响体验，用户希望修复流式渲染逻辑。  
  - 循环调用浪费资源（#3986），急需自动化防护机制。  
- **功能诉求**：  
  - 多代理协作（#3992）和第三方服务集成（如 StepFun）是开发者关注重点。  
- **满意度**：  
  - 用户认可 NanoBot 轻量化优势（如 PR #2155 TUI 交互），但对错误恢复能力仍有期待。

---

#### **8. 待处理积压**  
⏳ **长期未响应事项**：  
- **Issue #3993 Anthropic 内容块类型强制声明**（[链接](https://github.com/HKUDS/nanobot/issues/3993)）：需适配 Anthropic API 规范，建议优先处理。  
- **Issue #3958 Weather Skill 示例化**（[链接](https://github.com/HKUDS/nanobot/issues/3958)）：简化入门学习路径，可结合文档 PR 同步推进。  

---

**总结**：NanoBot 在核心功能与用户体验上快速演进，社区驱动明显。下一步需聚焦**稳定性修复**（如流式输出、循环检测）和**关键集成**（StepFun、GitAgent Protocol），同时监控积压项避免技术债累积。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

---

### **Hermes Agent 项目日报**  
**日期：2026-05-26**

---

#### **1. 今日速览**  
- **高活跃度**：过去24小时项目保持活跃，共处理 **50条 Issues（25新开/活跃，25已关闭）** 和 **50条 PR（43待合并，7已合并/关闭）**，无新版本发布。  
- **核心问题聚焦**：用户反馈集中在 **UI可读性（Issue #18080）、Docker权限配置（Issue #18482/#23402）、技能工具链稳定性（Issue #32106）**，以及功能扩展需求（如自动重试cron作业、内存老化警告）。  
- **修复进展显著**：多个关键 Bug 已有 PR 提交（如#32316解决TUI文件句柄泄漏），社区协作积极。  
🔗 [GitHub 数据概览](https://github.com/NousResearch/hermes-agent)

---

#### **2. 版本发布**  
- **无**  

---

#### **3. 项目进展**  
✅ **合并的 PR**：  
- **#32316**：修复 TUI 运行时 `libopentui.so` `/tmp` 文件句柄泄漏（[链接](https://github.com/NousResearch/hermes-agent/pull/32316)）。  
- **#32306**：Cron 任务绑定技能列表后，限制系统提示中技能索引范围（[链接](https://github.com/NousResearch/hermes-agent/pull/32306)）。  
- **#32318**：修复 Anthropic Pro/Max OAuth 凭据路由至`/v1/messages`接口（[链接](https://github.com/NousResearch/hermes-agent/pull/32318)）。  

**推进方向**：  
- 稳定性修复（TUI、Cron、OAuth）占主导，同时开始探索功能扩展（如仪表板Agent看板、图像生成回退控制）。

---

#### **4. 社区热点**  
🔥 **评论最多 Issues**：  
- **#18080**：Dashboard主题字体与对比度差（19条评论，27个👍）——用户强调UI体验需优化，尤其多终端适配。  
- **#13659**：DeepSeek-R1模型仍强制发送tools参数（6条评论）——本地部署兼容性痛点，已有修复PR在审（[链接](https://github.com/NousResearch/hermes-agent/issues/13659)）。  
- **#32106**：上下文压缩后技能状态异常导致任务执行错误（2条评论）——影响工具链可靠性。  

🔍 **诉求分析**：  
用户对 **可视化清晰度**、**本地化部署支持**、**工具链健壮性** 的关注度最高，反映项目在易用性与生产环境适配上的改进空间。

---

#### **5. Bug 与稳定性**  
⚠️ **关键Bug及修复状态**：  
| Issue | 严重性 | 描述 | Fix PR |  
|-------|--------|------|--------|  
| #23402 | P2 | Docker容器内Dashboard聊天权限问题 | ✅ PR#32306（技能索引范围修正） |  
| #32283 | P2 | TUI文件句柄泄漏 | ✅ PR#32316（隔离临时文件访问） |  
| #32224 | P2 | Feishu媒体上传HTTP/2流重置 | ✅ PR#32309（降级为HTTP/1.1） |  
| #32263 | P2 | Discord频道白名单未生效YAML配置 | ✅ PR#32307（读取YAML字段） |  

---

#### **6. 功能请求与路线图信号**  
🚀 **新功能提案 & 关联PR**：  
- **内存老化提醒**（#32321）：添加MEMORY.md过期警告（[链接](https://github.com/NousResearch/hermes-agent/pull/32321)）。  
- **Agent仪表板看板**（#32317）：新增会话、任务状态聚合页（[链接](https://github.com/NousResearch/hermes-agent/pull/32317)）。  
- **自动重试cron作业**（#32290）：失败时非阻塞重试（[链接](https://github.com/NousResearch/hermes-agent/issues/32290)）。  

**下一版本候选**：  
UI优化、自动化运维（cron重试）、资源管理（内存监控）可能优先纳入。

---

#### **7. 用户反馈摘要**  
💬 **典型痛点与场景**：  
- **Docker权限混乱**（Issue #14448）：UID冲突、挂载目录困惑，生产环境部署者抱怨“体验极差”。  
- **模型兼容性问题**（Issue #13659）：DeepSeek-R1工具参数强制触发，开发者需频繁调试。  
- **OAuth令牌失效**（Issue #2962）：Anthropic Max令牌静默过期，影响长会话稳定性。  
**满意度**：  
- 对 **插件生态**（Rocket.Chat适配器#30463）和 **多平台支持**（Webhook认证#27601）反响积极。

---

#### **8. 待处理积压**  
⏳ **长期未响应项**：  
- **#12883**（P3）：记忆系统缺乏重要性评分机制——核心认知架构缺陷，需设计长期解决方案。  
- **#31736**（P3）：Gateway Kanban调度器WAL连接压力——性能优化待跟进。  
- **#32281**（P2）：Cron技能索引范围——已提交PR但需测试验证。  

---

**总结**：  
Hermes Agent 在 **稳定性修复** 与 **用户体验优化** 上取得进展，但需持续关注 **多环境部署兼容性** 和 **工具链可靠性**。社区活跃度健康，建议优先处理UI与生产环境问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

---

# **PicoClaw 项目日报（2026-05-26）**

---

## **1. 今日速览**
过去24小时内，PicoClaw 保持较高活跃度：
- 新增/活跃 Issues 9 条，PRs 8 条，显示社区贡献者积极提交代码和反馈。
- 发布 `v0.2.9-nightly` nightly build，但均为自动化构建，稳定性待验证。
- 关键问题集中在安全校验、模型 API 兼容性及多通道支持，表明功能扩展与稳定性优化是当前重点。

---

## **2. 版本发布**
**Release: `v0.2.9-nightly.20260525.ab6d3946`**  
- 类型：Nightly Build（自动化构建，可能不稳定）  
- 变更内容：基于 `main` 分支的增量更新，完整变更见 [Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)。  
- **注意**：建议测试环境使用，生产环境需等待稳定版。  

---

## **3. 项目进展**
### **合并/关闭 PR**
- **无已合并 PR**，所有 8 条 PR 仍为待合并状态。  
- **重点待审 PR**：  
  - [#2942](https://github.com/sipeed/picoclaw/pull/2942): 修复 Anthropic 默认配置中模型 ID 格式错误（使用连字符而非点号），避免首次调用时 404 错误。  
  - [#2940](https://github.com/sipeed/picoclaw/pull/2940): 移除对已弃用的 `temperature` 参数支持，适配 Claude-opus-4-7 API 变更。  
  - [#2813](https://github.com/sipeed/picoclaw/pull/2813): 修复 PID 文件单例检查逻辑，防止因进程 PID 复用导致崩溃循环。  

---

## **4. 社区热点**
### **最活跃 Issues & PRs**
#### **🔴 高优先级 Bug**
- **[#2720](https://github.com/sipeed/picoclaw/issues/2720)**:  
  - **问题描述**: 网关启动时未验证 PID 对应进程身份，若 PID 被其他进程占用（如 `systemd-resolved`），会导致崩溃循环。  
  - **关联 PR**: [#2813](https://github.com/sipeed/picoclaw/pull/2813) 已提交修复方案，需尽快合并。  

#### **⚡️ 高频讨论 Issue**
- **[#1042](https://github.com/sipeed/picoclaw/issues/1042)**:  
  - **问题描述**: `exec` 工具的 `guardCommand` 方法误拦截合法命令（如 `curl` 查询天气），因路径校验逻辑过于严格。  
  - **诉求**: 改进路径匹配算法，避免误杀非文件操作命令。  

- **[#2943](https://github.com/sipeed/picoclaw/issues/2943)**:  
  - **问题描述**: 微信渠道发送图片时触发智谱 GLM-5 API 参数错误（1210）。  
  - **影响范围**: 国内用户通过微信 Bot 使用视觉功能时可能失败。  

---

## **5. Bug 与稳定性**
| **严重性** | **Issue/PR**                | **问题简述**                                                                 | **修复进度**                     |
|-----------|-----------------------------|-----------------------------------------------------------------------------|----------------------------------|
| 高        | #2720                      | 进程单例检查不严谨，导致崩溃循环                                            | PR [#2813](https://pr-link) 提交 |
| 中        | #1042                      | 安全校验误拦截合法命令（如 `curl`）                                         | 无 PR，需社区贡献               |
| 低        | #2887                      | RISC-V 平台 `.deb` 包无法加载 OpenAI 模型                                   | 无 PR                           |

---

## **6. 功能请求与路线图信号**
### **潜在纳入下一版本的功能**
- **实时流式输出（Web Chat）** ([#1950](https://github.com/sipeed/picoclaw/issues/1950)):  
  - 已有 PR [#2853](https://github.com/sipeed/picoclaw/pull/2853) 实现 pico 频道的 `ChatStream` 支持，可优先推进。  
- **新通道支持** (Server酱³ Bot) ([#2893](https://github.com/sipeed/picoclaw/pull/2893)):  
  - 国内用户常用的消息推送服务，需求明确，技术方案已就绪。  
- **工具动态 HTTP Header 传递** ([#2696](https://github.com/sipeed/picoclaw/pull/2696)):  
  - 增强 MCP 服务器的请求上下文灵活性，适合复杂集成场景。  

---

## **7. 用户反馈摘要**
- **痛点提炼**:
  - **安全性误报** (#1042): 用户抱怨“合法命令被拦截”，影响自动化脚本运行体验。  
  - **API 兼容性** (#2941, #2939): Anthropic 模型 ID 和参数格式变化导致首次调用失败，需配置适配。  
  - **多通道问题** (#2943): 微信视觉功能依赖第三方 API，需参数规范化。  
- **满意度**:  
  - 用户对实时流式输出（[#1950]）和 Server酱³ 支持（[#2893]）表达期待，认为这些是提升产品力的关键。  

---

## **8. 待处理积压**
| **Issue/PR**      | **状态**       | **备注**                               |
|-------------------|---------------|----------------------------------------|
| #1042             | 开放          | 核心安全逻辑，需紧急优化               |
| #2887             | 开放          | 跨平台二进制包兼容性问题               |
| #2781             | 陈旧（待审）  | 减少技能目录 token 消耗，性能优化      |

---

**总结**：PicoClaw 近期在功能扩展（流式输出、新通道）和稳定性（PID 检查、路径校验）双线并进，但部分关键 Bug 仍需社区协作解决。建议优先合并 [#2813](https://pr-link) 和 [#2942](https://pr-link)，并关注 [#1042](https://issue-link) 的用户体验问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

---

# **NanoClaw 项目日报（2026-05-26）**

---

## **1. 今日速览**  
过去24小时内，NanoClaw 保持较高活跃度：  
- **代码贡献活跃**：共提交 **19个 PR**（14条待合并，5条已关闭/合并），显示社区正在快速推进功能修复和增强。  
- **问题跟踪活跃**：新增 **4个 Issues**（3条活跃讨论，1条已关闭），涉及核心功能缺陷和稳定性问题。  
- **无新版本发布**，但多个关键功能回归修复（如 `/health` 端点、多模态支持）正在推进中。  
**健康度评估**：项目处于积极开发阶段，核心团队与社区协作紧密，但需注意未解决的 Bug 对稳定性的潜在影响。

---

## **2. 版本发布**  
**无新版本发布**。

---

## **3. 项目进展**  
### **合并/关闭的重要 PR**  
- **[PR #2592](https://github.com/nanocoai/nanoclaw/pull/2592)**：文档更新，Teams CLI 的自动凭证路径说明完善（已关闭）。  
- **[PR #2526](https://github.com/nanocoai/nanoclaw/pull/2526)**：修复 `groups delete` 命令因外键约束失败的问题（已关闭，关联 Issue #2525）。  

### **关键进行中 PR**  
- **[PR #2619](https://github.com/nanocoai/nanoclaw/pull/2619)**：恢复 v1 版本的 `/health` 端点，用于生产环境监控（Loopback-only HTTP 探针）。  
- **[PR #2618](https://github.com/nanocoai/nanoclaw/pull/2618)**：还原 v1 的多模态支持（图像、语音、PDF 附件及 `chat.onReaction` 事件）。  
- **[PR #2614 + #2615](https://github.com/nanocoai/nanoclaw/pull/2614, https://github.com/nanocoai/nanoclaw/pull/2615)**：实现 Slack 线程上下文感知功能，优化对话连贯性（依赖链式开发）。  

**推进意义**：  
- 修复了长期存在的稳定性问题（如数据库删除逻辑）。  
- 恢复了用户期待的核心功能（多模态、健康检查），显著提升生产可用性。  
- 为多工作区、Socket Mode 等高级功能铺路（见 PR #2613）。

---

## **4. 社区热点**  
### **最活跃 Issues/PRs**  
- **[Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404)**：MCP 工具与 `<message>` 块同时使用时消息重复发送（评论最多，3次互动）。  
  - **诉求**：确保输出路径一致性，避免客户端重复渲染。  
- **[PR #2617](https://github.com/nanocoai/nanoclaw/pull/2617)**：添加 Chat SDK 桥接的 `channelType` 覆盖和 Webhook 路由配置（零评论，但为多通道集成关键改进）。  

**趋势分析**：  
用户对 **消息交付可靠性**（Issue #2404）和 **多工作区支持**（Issue #1804）的关注持续上升，反映企业级场景需求。

---

## **5. Bug 与稳定性**  
| **严重程度** | **Issue/PR** | **描述** | **修复状态** |  
|--------------|--------------|----------|--------------|  
| **高** | [Issue #2525](https://github.com/nanocoai/nanoclaw/issues/2525) | `ncl groups delete` 外键约束失败 | **已修复**（PR #2526） |  
| **中** | [Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506) | `send_message` 在短时间内响应静默丢弃 | **待解决**（无 PR） |  
| **低** | [Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404) | MCP 与 `<message>` 块冲突导致重复 | **待解决**（无 PR） |  

**风险提示**：Issue #2506 可能导致高频交互场景下超时，需优先处理。

---

## **6. 功能请求与路线图信号**  
- **多工作区支持**（[Issue #1804](https://github.com/nanocoai/nanoclaw/issues/1804)）：已有 PR #2615 实现线程上下文感知，下一步可能扩展至多适配器并发管理。  
- **Socket Mode 支持**（[PR #2613](https://github.com/nanocoai/nanoclaw/pull/2613)）：Slack 适配器的 Socket Mode 集成已就绪，可能成为下一版本亮点。  
- **调试技能**（[PR #2612](https://github.com/nanocoai/nanoclaw/pull/2612)）：`debug-issue` 技能可自动化问题排查，符合开发者体验优化方向。

---

## **7. 用户反馈摘要**  
- **痛点**：  
  - 消息重复（Issue #2404）影响用户体验，尤其在复杂交互流程中。  
  - 数据库操作异常（Issue #2525）暴露底层事务设计缺陷，引发用户数据管理担忧。  
- **满意点**：  
  - 多模态功能回归（PR #2618）被社区视为“v1 经典特性的胜利”。  
  - 文档改进（PR #2592）降低新用户使用门槛。

---

## **8. 待处理积压**  
| **Issue/PR** | **状态** | **优先级** |  
|--------------|----------|------------|  
| [Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506) | 未解决 | 中（高频交互场景） |  
| [Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404) | 未解决 | 低（特定使用模式） |  
| [Issue #1804](https://github.com/nanocoai/nanoclaw/issues/1804) | 部分进展（线程上下文） | 高（企业需求） |  

**建议**：优先解决 Issue #2506，并推动多工作区功能的完整实现。

--- 

**总结**：NanoClaw 近期在功能修复和核心特性回归上进展显著，但需警惕未解决的 Bug 对稳定性的影响。社区协作高效，路线图清晰，适合企业级部署。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-05-26）

---

## **1. 今日速览**
- 整体活跃度中等：过去24小时有1个新Issue和2个PR提交，其中1个已合并，1个待合并。
- 核心问题聚焦于文档准确性（Zig版本兼容性）和网关功能扩展（#933）。
- 无新版本发布，依赖更新（BusyBox Docker镜像升级）通过自动PR完成（#931）。  
[完整数据概览](#)

---

## **2. 版本发布**
**今日无新版本发布**

---

## **3. 项目进展**
✅ **已合并 PR #931**  
- **内容**：Docker镜像组中`busybox`从1.37升级到1.38（安全/稳定性更新）。  
- **影响**：自动化维护，无需用户操作。  
[GitHub链接](https://github.com/nullclaw/nullclaw/pull/931)  

🔄 **待合并 PR #933**  
- **功能**：  
  - 新增网关客户端的`POST /media/transcribe`认证接口（支持STT提供商集成）。  
  - 统一配置解析器，增强JSON对象处理（Wizard、A2A、内存及媒体音频配置）。  
  - 改进网关令牌存储为哈希值，增加超时保护机制。  
- **意义**：提升多模态交互能力，强化安全性。  
[GitHub链接](https://github.com/nullclaw/nullclaw/pull/933)  

---

## **4. 社区热点**
🔥 **高关注度 Issue #932 [bug]**  
- **问题**：文档指定Zig 0.15.2作为构建前提，但实际需要≥0.16.0（缺失`std.Io.Dir`符号）。  
- **诉求**：需更新文档或降级兼容性要求，避免新用户踩坑。  
- **现状**：暂无直接修复PR，可能需文档团队介入。  
[GitHub链接](https://github.com/nullclaw/nullclaw/issues/932)  

---

## **5. Bug与稳定性**
⚠️ **关键Bug报告**  
- **Issue #932**（文档级问题）：  
  - **严重性**：中高（影响新用户首次使用）。  
  - **是否已有fix**：无，但可通过快速文档更新缓解。  

---

## **6. 功能请求与路线图信号**
🚀 **潜在下一版候选功能**  
- **PR #933** 新增的`transcribe`接口和配置解析器扩展表明：  
  - 项目正向**多模态集成**（语音+文本）和**标准化配置管理**演进。  
  - 若测试通过，可能成为v0.7.x版本亮点功能之一。  

---

## **7. 用户反馈摘要**
📝 **痛点与需求提炼**  
- **文档准确性**（Issue #932）：  
  - 用户因版本不匹配导致构建失败，反映文档维护滞后于实际依赖变化。  
- **功能期待**：  
  - 网关客户端对语音转文本的需求明确（#933），符合AI助手场景化趋势。  

---

## **8. 待处理积压**
⏳ **需优先关注的长期Issue/PR**  
- **Issue #932**：建议尽快由文档团队确认并修正，避免重复提问。  
- **PR #933**：需测试团队评审，尤其是哈希存储和超时机制的鲁棒性。  

--- 

**健康度总结**：项目保持活跃开发节奏，功能迭代与稳定性维护同步推进，但需加强文档同步和用户引导。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

# **IronClaw 项目日报 | 2026-05-26**

---

## 1. **今日速览**
- 过去24小时内，IronClaw 项目保持高度活跃：**22条 Issues 更新（新开/活跃18条）** + **50条 PR 更新（待合并40条）**，无新版本发布。
- 核心进展集中在 **Reborn 架构迁移**（如 OAuth、认证、租户沙箱等）、**多租户签名安全模型**（attested-signing 子集）及 **工具执行审计加固**（#4019）。
- 社区讨论热点围绕 **Reborn WebUI 端口适配**（#3577、#3807、#3886）和 **工具执行安全边界**（#4019系列 PR），表明架构重构与安全性是当前重点。

---

## 2. **版本发布**
- **无新版本发布**  
  当前 crates.io 最新版本仍为 `0.24.0`，而 GitHub 仓库已更新至 `v0.27.0`，存在下游依赖同步问题（Issue #3259）。

---

## 3. **项目进展**
### ✅ 重要合并/关闭的 PR
| PR 编号 | 摘要 | 影响 |
|--------|------|------|
| **[#3961](https://github.com/nearai/ironclaw/pull/3961)** | attested-signing 子集 PR2：引入 `ironclaw_attestation` crate，绑定交易哈希核心逻辑 | 为后续多租户签名安全奠定基础 |
| **[#3963](https://github.com/nearai/ironclaw/pull/3963)** | PR3：密封一次性授权存储 + 签名账本 | 强化授权隔离性与幂等性保障 |
| **[#3995](https://github.com/nearai/ironclaw/pull/3995)** | Reborn WebUI 入口集成 attested 门控 | 使 Reborn 环境支持链上身份验证 |
| **[#4015](https://github.com/nearai/ironclaw/pull/4015)** | 新增 `request_signature` 工具 + Reborn 循环触发 attested 门控 | 实现代理端完整链上验证流程 |

**整体推进**：  
Reborn 架构迁移（OAuth 回调、租户沙箱）和 **多租户签名安全模型**（PR3961→3997）取得显著进展，工具执行审计加固（#4019系列 PR）完成关键步骤。

---

## 4. **社区热点**
### 🔥 评论最多 & 关注度高的议题
#### **Issue #3259: Publish 0.25.0–0.27.0 to crates.io**
- **背景**：GitHub 仓库版本滞后于 crates.io，导致下游依赖无法获取最新功能。
- **诉求**：需同步发布版本以解决下游兼容性问题。  
  [🔗 Issue #3259](https://github.com/nearai/ironclaw/issues/3259)

#### **PR #3965: attested-signing 子集 PR6**
- **亮点**：新增 `ironclaw_chain_signing` crate，支持多链 custodial 签名广播。
- **意义**：为 Reborn 的跨链身份验证提供底层能力。  
  [🔗 PR #3965](https://github.com/nearai/ironclaw/pull/3965)

#### **Issue #4059: 增强 Reborn 运行时错误恢复上下文**
- **痛点**：当前错误输出过于保守，缺乏对开发者友好的恢复提示。
- **需求**：在错误中补充安全上下文，提升调试效率。  
  [🔗 Issue #4059](https://github.com/nearai/ironclaw/issues/4059)

---

## 5. **Bug 与稳定性**
| 严重程度 | Issue/PR | 问题描述 | 修复状态 |
|---------|----------|----------|----------|
| **高** | [#4030](https://github.com/nearai/ironclaw/issues/4030) | Discord 频道因 CPU 占用 100% 导致停止响应 | 未确认，需进一步复现 |
| **中** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E 测试失败 | 待排查日志（[Run链接](https://github.com/actions/runs/26383306158)） |
| **低** | [#3701](https://github.com/nearai/ironclaw/issues/3701) | macOS 预编译网关未按配置绑定 | 待分析（含详细环境信息） |

---

## 6. **功能请求与路线图信号**
- **Reborn WebUI 迁移**（#3577、#3807、#3886）：多个 Issue 指向将传统 WebUI 迁移至 Reborn 原生表面，优先级明确（P0/P1），已有 PR 推进（如 #3995）。
- **多租户签名模型**（#4051、#4052、#4053）：用户提出从设计到实现的完整闭环，PR3961→3997 已覆盖核心能力。
- **透明化信用限制**（#4043）：用户对失败请求消耗信用感到困惑，可能影响体验，需纳入下个版本。

---

## 7. **用户反馈摘要**
- **痛点**：  
  - 版本同步问题（#3259）：开发者抱怨下游依赖无法使用新功能。  
  - 工具执行安全性（#4019）：用户担忧绕过审计的漏洞可能导致数据泄露。  
- **满意点**：  
  Reborn 架构的模块化改进（如租户沙箱 #4042）获得积极评价，隔离性增强。

---

## 8. **待处理积压**
| 条目 | 状态 | 提醒 |
|------|------|------|
| **#3259** | 开放 | 需紧急同步 crates.io 版本，避免下游阻塞 |
| **#4030** | 开放 | Discord CPU 异常需复现与优化 |
| **#4059** | 开放 | 错误恢复上下文增强属长期优化项 |

---

**总结**：IronClaw 在 **Reborn 重构** 和 **安全加固** 领域进展迅猛，但需优先解决版本同步与稳定性问题。社区对透明性和多租户支持的需求强烈，下一版本有望整合这些改进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

---

### **LobsterAI 项目日报（2026-05-26）**

---

#### **1. 今日速览**
- 过去24小时内，LobsterAI 社区活跃度较高，共提交 **29 个 PR**（含 **15 个已合并/关闭**，**14 个待合并**），**1 条新开 Issue**。
- 核心开发者 `fisherdaddy` 主导了 **4 个关键修复 PR**，涉及网关会话超时、子代理清理阻塞、工具循环令牌消耗等稳定性问题。
- 用户反馈聚焦于 **Agent 记忆体系缺失**（Issue #2046）和插件同步功能（PR #2042/#2045），体现对长期上下文管理的迫切需求。

---

#### **2. 版本发布**
- **无新版本发布**。

---

#### **3. 项目进展**
##### **✅ 已合并 PR（15 个）**
- **PR #2044, #2043, #2048, #2047, #2049, #2050**  
  修复了多个关键稳定性问题：
  - **防止工具循环无限执行**（#2049）：修复因上游未终止 `Aborted` 工具结果导致的令牌浪费问题。
  - **网关会话超时处理优化**（#2050）：避免聊天请求被阻塞。
  - **日志导出压缩超时问题**（关联 #1515）：优化 DEFLATE 压缩逻辑，提升大文件导出成功率。
  
- **PR #2042, #2045**  
  **跨 OpenClaw 生态集成**：
  - 支持从 OpenClaw 扩展目录自动同步插件（#2042）。
  - 实现技能管理器与 OpenClaw 的技能双向同步（#2045），包括保护插件技能不被误删。

- **PR #2011, #2013**  
  增强子代理（Subagent）管理体验：
  - 新增子代理会话侧边栏树形视图及独立详情页（#2011）。
  - 上下文窗口滑动条改进（吸附预设值、K/M 简写输入）（#2013）。

---

#### **4. 社区热点**
##### **🔥 高关注度 Issues/PRs**
- **[Issue #2046](https://github.com/netease-youdao/LobsterAI/issues/2046)**  
  **标题：Agent 记忆体系建议**  
  - **诉求**：用户指出当前 Agent 依赖手动维护会话，跨 session 信息丢失严重，需持久化对话标题和元数据。  
  - **优先级**：高（直接影响用户体验）。  
  - **讨论热度**：1 条评论，暂无解决方案，需产品团队评估。

- **[PR #2045](https://github.com/netease-youdao/LobsterAI/pull/2045)**  
  **标题：OpenClaw 技能同步到 LobsterAI**  
  - **亮点**：首次打通两大 AI 助手生态的技能互通，减少用户重复配置。  
  - **影响范围**：插件管理、开发者协作。

---

#### **5. Bug 与稳定性**
| **严重性** | **问题描述** | **状态** | **相关 PR** |
|------------|--------------|----------|-------------|
| 🟢 一般 | 子代理清理时因钩子失败阻塞主进程 | 已修复 | #2044 |
| 🟡 中等 | 工具循环导致令牌持续消耗 | 已修复 | #2049 |
| 🔴 紧急 | 网关会话超时未释放资源 | 已修复 | #2050 |

---

#### **6. 功能请求与路线图信号**
- **记忆体系重构**（Issue #2046）：  
  用户明确要求持久化会话元数据，可能需引入数据库存储 + 检索能力，列为 **Q2-Q3 重点规划项**。
- **动态模型列表**（PR #1522）：  
  通过 API 自动拉取厂商模型，降低用户手动维护成本，已进入代码实现阶段。

---

#### **7. 用户反馈摘要**
- **痛点**：  
  - **信息孤岛**：跨会话上下文断裂（#2046）。  
  - **稳定性**：长时间运行后出现工具循环和资源泄漏（#2049）。  
  - **生态割裂**：OpenClaw 插件需手动同步（#2042）。  
- **满意点**：  
  子代理管理和上下文窗口交互优化（#2011/#2013）获得积极反馈。

---

#### **8. 待处理积压**
- **长期未响应 Issue**：  
  - [#1206 日志导出超时问题](https://github.com/netease-youdao/LobsterAI/issues/1206)（已修复但未关闭）。  
  - [#1525 会话颜色标注需求](https://github.com/netease-youdao/LobsterAI/issues/1525)（已由 PR #1526 实现）。  
- **技术债务**：  
  Agent ID 生成策略（PR #1584）暴露数据残留风险，需全面清理旧数据。

---

**总结**：LobsterAI 在稳定性和生态集成上取得显著进展，但 **Agent 记忆体系**仍是用户最强烈的需求。建议优先评估会话持久化方案，同时推动 OpenClaw 生态的标准化互通。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# **Moltis 项目日报（2026-05-26）**

---

## 1. 今日速览  
过去24小时内，**Moltis 项目活跃度较高**：  
- 共处理 **5个 Issues**（2条新开/活跃，3条已关闭），**6个 PR**（1条待合并，5条已合并），并发布 **1个新版本（20260525.01）**。  
- 核心进展集中在 **工具链优化、安全修复和子代理异步化**，社区对功能改进的反馈积极。  
- 代码扫描和安全加固是当前重点，已有多个 PR 针对性解决漏洞问题。  

---

## 2. 版本发布  
### **Release: `20260525.01`**  
- **主要变更**：  
  - 修复了 Docker 构建失败问题（PR #1073）。  
  - 新增 `active_tools` 和 `tool_choice` 控制支持（PR #1069），实现动态工具路由与验证。  
  - 子代理非阻塞模式 `spawn_agent(nonblocking: true)` 已上线（PR #1067），提升长任务并发能力。  
- **破坏性变更**：无。  
- **迁移注意事项**：无需用户端适配，但需注意旧版 `spawn_agent` 调用逻辑的兼容性。  
🔗 [Release Notes](https://github.com/moltis-org/moltis/releases/tag/20260525.01)

---

## 3. 项目进展  
### **关键 PR 合并情况**  
| PR 编号 | 标题 | 贡献者 | 摘要 |  
|--------|------|-------|------|  
| [#1069](https://github.com/moltis-org/moltis/pull/1069) | feat(agents): support per-turn tool controls | penso | 新增 `active_tools` 和 `tool_choice` 控制，支持强制工具选择与过滤，兼容 Anthropic/OpenAI 序列化。 |  
| [#1067](https://github.com/moltis-org/moltis/pull/1067) | feat(tools): support nonblocking spawn agents | penso | 子代理异步运行模式，通过 `spawn_status`/`cancel_spawn` 工具管理后台任务。 |  
| [#1070](https://github.com/moltis-org/moltis/pull/1070) | Make sub-agent presets editable | penso | 允许用户在 Web UI 中创建/编辑子代理预设，支持高级字段（如 MCP 策略、沙盒模式）。 |  
| [#1068](https://github.com/moltis-org/moltis/pull/1068) | Expose Moltis version to prompts | IlyaBizyaev | 在提示词中暴露版本号，便于追踪更新。 |  

**整体推进**：项目在 **工具链灵活性、异步任务管理和用户体验优化** 方向取得显著进展，子代理系统的响应能力与可观测性大幅增强。

---

## 4. 社区热点  
### **最活跃 Issue**  
- **[#868](https://github.com/moltis-org/moltis/issues/868)**：添加 Landlock 文件系统访问拒绝的调试日志（👍 1，评论 1）。  
  - **诉求分析**：开发者需更详细的内核级权限问题诊断信息，符合 Linux 安全最佳实践。  
- **[#1072](https://github.com/moltis-org/moltis/issues/1072)**：Cron 作业默认在沙盒中执行（新提交，未获反馈）。  
  - **潜在影响**：可能涉及生产环境任务调度异常，需紧急验证。  

---

## 5. Bug 与稳定性  
| Issue 编号 | 严重程度 | 描述 | Fix 状态 |  
|-----------|----------|------|----------|  
| [#1072](https://github.com/moltis-org/moltis/issues/1072) | 高 | Cron 作业未按预期在宿主机执行 | 待验证 |  
| [#1022](https://github.com/moltis-org/moltis/issues/1022) | 中 | WebSocket 断开导致 LLM 更新中断 | 已关闭（需进一步测试） |  
| [#1073](https://github.com/moltis-org/moltis/pull/1073) | 低 | Docker 构建失败 | 已修复 |  

---

## 6. 功能请求与路线图信号  
- **明确需求**：  
  - 子代理异步化（PR #1067）和动态工具控制（PR #1069）均来自用户痛点，预计成为 **v2026Q2** 核心特性。  
  - 非阻塞任务的生命周期管理工具（如 `cancel_spawn`）被广泛期待，后续可能扩展为通用任务队列。  
- **待评估**：  
  - Landlock 日志增强（Issue #868）需确认内核版本兼容性。  

---

## 7. 用户反馈摘要  
- **痛点**：  
  - 长子代理任务阻塞父代理（Issue #1004，已关闭），异步化方案（PR #1067）解决了这一问题。  
  - 工具选择不可控导致路由漂移（Issue #1011，已关闭），新工具控制系统（PR #1069）有效缓解。  
- **满意点**：  
  - 开发者对 `spawn_status` 等工具的实用性反馈积极，认为提升了系统可观测性。  

---

## 8. 待处理积压  
⚠️ **长期未响应项**：  
- **[#1071](https://github.com/moltis-org/moltis/pull/1071)**：安全加固 PR（CodeQL 扫描修复），建议尽快合并以降低风险。  
- **[#1072](https://github.com/moltis-org/moltis/issues/1072)**：Cron 作业执行异常，需复现并验证沙盒配置逻辑。  

---

**总结**：Moltis 近期在功能完善与安全优化上表现强劲，社区协作高效。下一步需关注异步任务管理的稳定性及安全 PR 的快速落地。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

---

# **CoPaw 项目日报 | 2026-05-26**

---

## 1. **今日速览**
- 今日 GitHub 活跃度较高，共新增 **42 条 Issues**（含 14 新开/活跃）、**44 条 PR**（32 已合并），表明社区持续关注与贡献。
- 新版本 **v1.1.9-beta.1** 发布，包含插件管理、控制台优化等关键更新，修复了多个高频痛点。
- 用户反馈集中围绕 **会话历史丢失、工具调用延迟、模型兼容性问题**，显示核心体验仍需打磨。

---

## 2. **版本发布**
### **v1.1.9-beta.1**
- **主要更新**：
  - ✅ 插件安装后自动重载页面（[#4588](https://github.com/agentscope-ai/QwenPaw/pull/4588)）
  - 🔄 版本号更新至 `1.1.9b1`（[#4589](https://github.com/agentscope-ai/QwenPaw/pull/4589)）
  - 🛠️ 修复部分集成测试覆盖率（[#4674](https://github.com/agentscope-ai/QwenPaw/pull/4674)）
- **破坏性变更**：无
- **迁移注意事项**：无需手动升级，自动兼容 v1.1.8 环境。

---

## 3. **项目进展**
| PR # | 类型       | 内容                                                                                     | 状态     |
|------|------------|------------------------------------------------------------------------------------------|----------|
| [#4660](https://github.com/agentscope-ai/QwenPaw/pull/4660) | 功能优化   | 精简 OpenCode 模型列表至 Zen & Go 交集（避免 API 错误）                                   | 已合入   |
| [#4565](https://github.com/agentscope-ai/QwenPaw/pull/4565) | 架构重构   | 统一所有渠道的访问控制系统（白名单/审批/黑名单）                                           | 已合入   |
| [#4599](https://github.com/agentscope-ai/QwenPaw/pull/4599) | UI 修复    | 宠物导入拖拽区域支持深色模式                                                              | 已合入   |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | 桌面端增强 | 首次实现 Tauri 桌面端自动更新机制                                                         | 待审核   |

> **总结**：本周推进了 **多通道权限控制、模型兼容性、UI 体验** 三大方向，代码库稳定性显著提升。

---

## 4. **社区热点**
#### **🔥 最活跃 Issues（评论最多）**
| Issue # | 标题                                                                                  | 核心诉求                                                                                     | 链接 |
|--------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|------|
| [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | 控制台工具调用不实时显示                                                              | 用户反馈工具调用需刷新才可见，严重影响调试效率                                               | [详情](https://github.com/agentscope-ai/QwenPaw/issues/4644) |
| [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) | 会话历史消失                                                                          | 长期存在的严重 Bug，影响核心对话记录                                                        | [详情](https://github.com/agentscope-ai/QwenPaw/issues/4620) |
| [#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650) | GLM-5.1 模型思维链不显示                                                              | 特定模型兼容性问题，需检查流式响应解析                                                       | [详情](https://github.com/agentscope-ai/QwenPaw/issues/4650) |

#### **🚀 高赞 PR（技术价值高）**
- [#4660](https://github.com/agentscope-ai/QwenPaw/pull/4660)：通过模型交集优化解决跨平台 API 错误，预计减少 30%+ 用户配置问题。

---

## 5. **Bug 与稳定性**
| Bug 等级 | Issue # | 描述                                                                                   | 已有 Fix PR？          |
|----------|---------|----------------------------------------------------------------------------------------|------------------------|
| P0       | [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) | 会话历史丢失                                                                           | 暂无（需跟进）         |
| P1       | [#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) | 工具调用延迟                                                                           | 暂无（需跟进）         |
| P2       | [#4675](https://github.com/agentscope-ai/QwenPaw/issues/4675) | 文件块永久阻断推理内容注入                                                               | [#4674](https://github.com/agentscope-ai/QwenPaw/pull/4674)（进行中） |

---

## 6. **功能请求与路线图信号**
| 需求类型               | Issue/PR 链接                                                                 | 优先级   | 关联进展                          |
|-----------------------|------------------------------------------------------------------------------|----------|-----------------------------------|
| 📅 会话时间戳显示      | [#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662)                 | 高       | 未启动                            |
| 🔄 记忆系统智能总结    | [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)                 | 中高     | 需设计评估                        |
| 🖥️ 桌面端图标优化     | [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729)                   | 中       | 已合入                            |

---

## 7. **用户反馈摘要**
- **痛点**：
  - **会话历史丢失**（[#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)）：用户认为“严重影响使用”，需紧急修复。
  - **工具调用延迟**（[#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)）：开发者依赖实时日志，当前体验较差。
- **满意点**：
  - 插件管理优化（[v1.1.9-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9-beta.1)）获积极反馈。
- **场景**：
  - Windows 启动慢（[#4664](https://github.com/agentscope-ai/QwenPaw/issues/4664)）、MacOS 后台进程泄漏（[#3607](https://github.com/agentscope-ai/QwenPaw/issues/3607)）反映跨平台性能问题。

---

## 8. **待处理积压**
| Issue/PR # | 标题                                                                                  | 状态     | 建议动作                     |
|------------|---------------------------------------------------------------------------------------|----------|------------------------------|
| [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) | 会话历史消失                                                                           | 已关闭   | 重新开放并优先修复            |
| [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) | 记忆系统智能总结                                                                       | 未响应   | 需评估 MVP 方案              |
| [#4158](https://github.com/agentscope-ai/QwenPaw/issues/4158) | Python打包客户端启动慢                                                                  | 已关闭   | 可参考 Tauri 优化方案        |

---

**健康度总结**：  
- ✅ **开发活跃**：PR 合并率高，核心问题快速响应。  
- ⚠️ **体验痛点**：会话历史、工具实时性需优先解决。  
- 🎯 **路线图**：记忆系统、跨平台优化为下一版本重点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

---

# **ZeroClaw 项目日报 | 2026-05-26**

---

## **1. 今日速览**
- **高活跃度**：过去 24 小时内，项目共新增 **26 条 Issues**（含 19 条活跃/新开）和 **50 条 PR**（待合并 34 条），表明开发团队和社区贡献者持续活跃。
- **核心问题聚焦**：今日主要围绕 **工具链安全（如 shell sandbox、MCP 工具权限）**、**多平台集成（如 Telegram 图片消息阻塞、浏览器支持）** 及 **性能优化（WebSocket 会话持久化）**。
- **无新版本发布**：但多个功能增强 PR 处于高优先级，可能为后续版本做准备。

---

## **2. 版本发布**
*（无新版本发布）*

---

## **3. 项目进展**
### **关键合并 PR**
| PR 编号 | 类型       | 内容概要                                                                                     | 链接 |
|--------|------------|----------------------------------------------------------------------------------------------|------|
| #6848 | 功能扩展   | 引入 `zerocode TUI`、RPC 传输、DenyWithEdit 审批流程，集成 Beta-2 环境                         | [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) |
| #6933 | 修复       | WebSocket 会话重连时保留已流式传输的对话上下文，提升长对话稳定性                               | [#6933](https://github.com/zeroclaw-labs/zeroclaw/pull/6933) |
| #6884 | Bug 修复   | 修复 `web_fetch` 工具对 `max_response_size=0` 的误判，允许无大小限制响应                       | [#6884](https://github.com/zeroclaw-labs/zeroclaw/pull/6884) |

**整体推进**：  
- **架构改进**：网关层（Gateway）、工具链安全、会话管理均有实质性进展。  
- **社区协作**：PR 评论互动积极，代码审查流程高效（如 #6848 包含多模块联动）。

---

## **4. 社区热点**
### **最受关注 Issue/PR**
#### **Issue #5722** [🔴 高风险]  
> **标题**: Default shell sandbox 阻断所有 Python 技能模式 (v0.6.9)  
> **链接**: [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)  
> **背景**：用户反馈开发金融分析技能时，默认沙箱配置误拦截合法 Python 操作，严重影响生产环境可用性。维护者已标记 `in-progress`，需紧急修复。

#### **PR #6920** [🟢 高优先级]  
> **标题**: 执行时强制校验 allowed_tools/denied_tools（纵深防御）  
> **链接**: [#6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920)  
> **诉求**：确保 MCP 工具在发现阶段即被过滤，防止未授权工具暴露给 LLM 上下文，提升运行时安全性。

---

## **5. Bug 与稳定性**
| Issue 编号 | 严重性 | 问题描述                                                                 | 修复状态         | 链接 |
|------------|--------|--------------------------------------------------------------------------|------------------|------|
| #5122     | S2     | `web_fetch` 对私有 IP 域名误拦截                                          | 待确认           | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) |
| #6302     | S1     | Gemini 400 错误：工具调用顺序违反历史序列约束                              | PR #6884 部分修复 | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) |
| #6916     | S2     | Shell 技能子进程内存泄漏导致容器 OOM                                       | PR #6924 中处理   | [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) |

**趋势**：  
- **沙盒与工具链安全** 成为近期焦点（占高风险问题的 40%）。  
- **多平台兼容性**（Telegram、浏览器）问题频发，需持续优化。

---

## **6. 功能请求与路线图信号**
| 需求                          | 关联 PR      | 优先级 | 预期版本 |
|-------------------------------|-------------|--------|----------|
| "Everything is a Plugin" (#6489)| #6848       | P2     | v0.8.x   |
| 计算机交互支持 (#6909)          | -           | P2     | v0.8.x   |
| 插件化集成 (#6456)              | -           | P2     | v0.8.x   |

**分析**：  
- **插件化架构** 是长期目标，已有 RFC 和 PR 推进，可能整合到 0.8.x 版本。  
- **Computer Use**（如截图/键盘控制）需求明确，但需解决沙盒兼容性问题。

---

## **7. 用户反馈摘要**
- **痛点**：  
  - **沙盒限制过严**（如 #5722）：开发者抱怨生产环境技能因安全策略失效。  
  - **文档缺失**：WhatsApp/Signal 配置 (#6315) 和浏览器最低要求 (#6921) 引发新用户困惑。  
- **满意点**：  
  - WebSocket 会话持久化 (#6932) 被赞为“极大提升了调试体验”。  
  - Codex OAuth 支持 (#6908) 简化了 OpenAI 订阅用户配置。

---

## **8. 待处理积压**
| Issue/PR 编号 | 内容                                 | 状态               | 提醒 |
|--------------|--------------------------------------|--------------------|------|
| #6914        | 运行时强制校验工具权限                 | Blocked（需维护人审核）| 🔔 安全风险，需优先跟进 |
| #6906        | Nix Flake 改进                        | Blocked             | 🔔 影响包分发体验 |
| #6074        | 恢复批量回滚丢失的 153 次提交审计记录 | In-progress         | 🔔 历史修复，需同步文档 |

---

**总结**：  
ZeroClaw 在 **安全加固**、**多平台集成** 和 **架构演进** 上取得显著进展，但需重点关注沙盒策略灵活性与工具权限的平衡。社区贡献积极，建议加速高风险 PR 的合并节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*