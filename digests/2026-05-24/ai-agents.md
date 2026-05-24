# OpenClaw 生态日报 2026-05-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-24 00:36 UTC

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

### **OpenClaw 项目日报（2026-05-24）**

---

#### **1. 今日速览**
OpenClaw 今日活跃度极高，**Issues 更新 500+**，**PR 更新 500+**，其中 311 PR 已合并，189 待合并。  
项目处于快速迭代期，社区反馈积极，尤其围绕多平台适配、会话稳定性、安全隔离等核心痛点展开讨论。  
GitHub Issues/PRs 数量表明：开发者和用户高度活跃，维护者需持续跟进关键问题。  
[GitHub 数据概览](https://github.com/openclaw/openclaw)

---

#### **2. 版本发布**
**v2026.5.22-beta.1** 发布，主要更新如下：
- **文档增强**：README 中补充了 Onboarding、Gateway 启动路径、WhatsApp QR/408恢复、cron 输出语言提示、技能高级特性、上游 403 故障排查与插件回退覆盖指导。  
- **修复信号**：部分用户反馈的 Gateway 配置警告重复问题、德语终端输入兼容性优化。  
[Release 详情](https://github.com/openclaw/openclaw/releases/tag/v2026.5.22-beta.1)  
*无破坏性变更，迁移无需特殊操作。*

---

#### **3. 项目进展**
**合并 PR 亮点**：
- **模型回退优化** (#75270)：防止模型切换后残留 fallback 状态，保障会话路由一致性。  
- **代理安全加固** (#82951)：调试代理中敏感头信息自动脱敏（如 `Authorization`）。  
- **子进程生命周期** (#84616)：添加 `.catch()` 处理，避免未捕获 Promise 导致崩溃。  
- **Telegram 消息实体保留** (#83873)：支持 Markdown 格式（如粗体、链接）在消息中持久化。  
[合并 PR 列表](https://github.com/openclaw/openclaw/pulls?page=1&q=is%3Apr+merged%3A2026-05-24)

---

#### **4. 社区热点**
**高评论 Issues 分析**：
- **[Linux/Windows 客户端缺失 (#75)**：评论 105 条，👍 77，用户强烈呼吁扩展 macOS 外平台支持，涉及多端生态完整性。  
- **工具调用泄露 (#25592)**：评论 26 条，Slack/iMessage 通道意外显示内部文本，影响 UX。  
- **沙盒文件只读 (#37634)**：评论 8 条，沙盒下 `/workspace` 挂载为只读，工具写入失败。  
[热门 Issues](https://github.com/openclaw/openclaw/issues?q=is:issue+is:open+sort:comments-desc&page=1)

---

#### **5. Bug 与稳定性**
**严重度排序**：
| Issue | 描述 | 严重性 | 修复状态 |
|-------|-------|--------|----------|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | SIGUSR1 重启时信号守护进程竞态条件，导致孤儿进程和发送失败 | 🦞钻石龙虾 | PR #85865（优雅升级） |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | 会话超时后重复发送相同消息，无恢复机制 | 🦞钻石龙虾 | 待修复 |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) | Webchat 头像接口返回 404，UI 显示缺失图标 | 🐚白金隐士 | 待修复 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子任务完成结果静默丢失，无通知/重试 | 🦞钻石龙虾 | 待修复 |

---

#### **6. 功能请求与路线图信号**
**高优先级需求**：
- **多端客户端 (#75)**：Linux/Windows 应用开发中，可能纳入下一大版本。  
- **会话快照 (#13700)**：保存/加载上下文，支持 A/B 测试，已有 PR #85817（Policy 插件增强）。  
- **成本预算控制 (#42475)**：按 Agent 设置每日限额，已提交 PR 但需验证。  
- **Telegram 商业支持 (#20786)**：评论 8 条，👍 6，可能优先集成。  
[功能提案](https://github.com/openclaw/openclaw/issues?q=is:issue+label%3Afeature+sort:stars-desc)

---

#### **7. 用户反馈摘要**
**痛点与满意度**：
- **负面体验**：  
  - 工具调用泄露至聊天频道（#25592、#44905），用户抱怨“内部日志暴露风险”。  
  - Docker 沙盒文件只读（#37634），自动化流程中断。  
- **正面改进**：  
  - 模型回退逻辑优化（#75270），减少用户手动干预。  
  - 德语终端支持（#83947），提升本地化体验。  

---

#### **8. 待处理积压**
**长期未响应项**：
- **会话状态管理 (#43747)**：评论 8 条，内存存储不一致，需统一方案。  
- **AWS 部署指南 (#13597)**：文档空白，影响云用户。  
- **Telegram 持久化组重试 (#85656)**：修复竞态条件，待合并。  
[积压清单](https://github.com/openclaw/openclaw/issues?q=is:issue+label%3Alongstanding)

--- 

**总结**：OpenClaw 处于高速迭代阶段，社区聚焦**稳定性**（会话、沙盒、多端）、**安全性**（工具泄露、凭证掩码）、**可扩展性**（Telegram、AWS）。建议优先合并模型回退、沙盒写入、商业 Telegram 支持，并加速会话/内存问题修复。

---

## 横向生态对比

---

# **个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-05-24）**

---

## **1. 生态全景**
当前个人 AI 助手和自主智能体开源生态呈现**两极分化+快速迭代**态势：  
- **快速迭代层**：OpenClaw、Hermes Agent、IronClaw、ZeroClaw 等项目处于核心功能攻坚期，聚焦模型兼容性、安全加固和架构优化；  
- **质量巩固层**：NanoBot、PicoClaw、NullClaw 等侧重稳定性修复和用户体验提升；  
- **社区驱动型**：如 NanoClaw、CoPaw 通过 PR 贡献吸引新开发者加入，形成良性循环。  

---

## **2. 各项目今日活跃度对比**

| **项目名**       | Issues (新增/活跃) | PRs (待合并) | Release | 健康度评估         |
|------------------|-------------------|--------------|---------|--------------------|
| OpenClaw         | 311              | 189          | Beta.1  | ⭐⭐⭐⭐⭐（高速迭代） |
| Hermes Agent     | 16               | 39           | 无      | ⭐⭐⭐⭐（核心攻坚）   |
| IronClaw         | 4                | 34           | 无      | ⭐⭐⭐⭐（架构优化）   |
| ZeroClaw         | 42               | 37           | 无      | ⭐⭐⭐⭐（功能突破）   |
| NanoBot          | 5                | 6            | v2026.5 | ⭐⭐（稳定为主）      |
| PicoClaw         | 6                | 4            | Nightly | ⭐⭐⭐（兼容优化）    |
| NullClaw         | 0                | 10           | 无      | ⭐⭐⭐（内部冲刺）    |
| LobsterAI        | 3                | 2            | 无      | ⭐（问题修复）       |

*注：健康度 ★越多代表开发/用户活跃度越高*

---

## **3. OpenClaw 在生态中的定位**
### **优势与差异化**
- **技术路线差异**：  
  - **多端适配优先**：相比同类项目（如 NanoBot 侧重子代理灵活性、Hermes Agent 聚焦模型兼容性），OpenClaw 强调**全平台会话一致性**（Linux/macOS/Wasm），尤其在沙盒文件系统和网关稳定性上投入显著。  
  - **安全与扩展性并重**：代理信号（如调试凭证掩码、模型回退逻辑）和插件生态（Telegram/WhatsApp 适配器）均领先于同类。  
- **社区规模**：  
  - Issues/PRs 数量远超其他项目（单日 820+ vs 最高 50），反映**开发者+用户双高参与**，但维护者需警惕长期积压风险（如 AWS 部署指南）。

---

## **4. 共同关注的技术方向**
| **需求**                | **涉及项目**                                                                 | **具体诉求**                                                                 |
|-------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| 模型兼容性             | OpenClaw, Hermes Agent, NanoClaw, ZeroClaw                                  | DeepSeek/Anthropic/Azure 等模型端到端支持，避免硬编码依赖                      |
| 安全加固               | OpenClaw, IronClaw, Moltis                                                  | 凭证脱敏、TOCTOU防护、HTTP 子进程重构                                        |
| 多端/多通道适配        | OpenClaw, PicoClaw, CoPaw                                                   | WhatsApp/Telegram/Discord 等渠道的协议一致性与错误处理                          |
| 内存与上下文管理       | LobsterAI, OpenClaw                                                         | 轨迹记忆跨场景学习、上下文预算溢出控制                                         |
| 插件化扩展             | NanoBot, CoPaw, ZeptoClaw                                                   | 非侵入式技能模块（如 `datapaw`）、MCP 集成能力                               |

---

## **5. 差异化定位分析**
| **项目名**       | **功能侧重**                     | **目标用户**               | **技术架构亮点**                          |
|------------------|----------------------------------|----------------------------|------------------------------------------|
| **OpenClaw**     | 全平台会话稳定性 + 沙盒隔离      | 企业/开发者（多端协作）     | 多平台适配、代理信号、插件生态            |
| **Hermes Agent** | Anthropic/Azure/OpenAI 三模型兼容 | 企业级模型集成者           | 统一抽象层、WebSocket 重试机制            |
| **IronClaw**     | 多租户 Hook 框架 + 持久化后端    | 云服务商/安全敏感场景      | TOCTOU防护、Postgres/libSQL 等价性验证     |
| **ZeroClaw**     | TUI Agent Chat + ACP 协议扩展     | 本地开发者/终端交互用户     | 流式响应渲染、工具调用增强                |
| **NanoBot**      | 子代理差异化配置 + 轻量级路由     | 实验性场景/资源受限环境    | BM25 技能路由、温度参数传递               |
| **LobsterAI**    | 记忆系统自演进 + 批量导出        | 科研/企业知识库场景        | MECE 长时记忆、会话归档                   |
| **ZeptoClaw**    | Agent 中间件 Pipeline 模块化      | 架构研究者/复杂工作流用户  | Phase 2b 布线、依赖升级自动化              |

---

## **6. 社区热度与成熟度分层**
#### **高速迭代阶段**
- **OpenClaw**：模型回退、沙盒写入、Telegram 商业支持等关键问题密集推进，但需平衡版本发布节奏。  
- **Hermes Agent**：Azure/Anthropic 流处理修复、SQLite 防撕裂写入等紧急 Bug 响应迅速。  
- **ZeroClaw**：TUI Agent Chat 和 ACP 协议为下一版本核心卖点，技术风险可控。  

#### **质量巩固阶段**
- **NanoBot/PicoClaw**：侧重子代理灵活性和多端适配，修复后性能显著提升。  
- **NullClaw/Moltis**：内部冲刺中，安全加固和钩子注册等基础问题已闭环。  
- **LobsterAI**：记忆系统瓶颈和 Schema 兼容性问题需战略级改进，短期补丁待评审。  

---

## **7. 值得关注的趋势信号**
### **行业趋势与开发者价值**
#### **1. 模型兼容性的「标准化」需求**
- **OpenClaw/Hermes Agent** 均出现对 Anthropic/Azure 等新型模型的端到端支持，反映厂商API碎片化问题亟待统一抽象层。  
- **参考建议**：开发者可借鉴 OpenClaw 的模型回退策略和 Hermes Agent 的 Provider 设计模式，降低多模型集成成本。

#### **2. 安全加固成为标配**
- **IronClaw/OpenClaw/Moltis** 均强化了凭证处理、TOCTOU防护，符合企业用户对「零信任」的要求。  
- **参考建议**：优先使用 `crypto` 原生方案（如 NanoClaw #2545）替代 `Math.random()`，并遵循 RUSTSEC 漏洞扫描流程。

#### **3. 多端/多通道的「协议一致性」**
- **OpenClaw/PicoClaw/CoPaw** 持续修复 WhatsApp/Telegram 等渠道的上下文保留和消息实体映射，体现生产环境痛点。  
- **参考建议**：采用 OpenClaw 的「沙盒文件系统」设计，结合 Hermes Agent 的 WebSocket 重试逻辑，构建高可用适配层。

#### **4. 内存效率与「长时记忆」**
- **LobsterAI/OpenClaw** 提出上下文预算溢出和 MECE 长时记忆问题，影响复杂工作流体验。  
- **参考建议**：借鉴 OpenClaw 的模型回退状态清理和 LobsterAI 的记忆 Schema 改造方案，优化资源利用率。

#### **5. 插件化与「生态扩展」**
- **NanoBot/CoPaw/ZeptoClaw** 推动非侵入式技能模块（如 `datapaw`、Middleware Pipeline），降低开发者门槛。  
- **参考建议**：采用 CoPaw 的 Context/Memory 插件架构，或 ZeptoClaw 的 Phase 2b 模块化设计，加速功能迭代。

---

**总结**：生态正从「单一模型/平台支持」转向「多模多端+安全+插件化」，OpenClaw 凭借全栈覆盖和活跃社区成为标杆，开发者可重点关注其技术路线（如沙盒隔离、代理信号）和社区协作模式，同时结合其他项目的差异化优势（如 NanoBot 的子代理温度控制、ZeroClaw 的 TUI 交互），构建更健壮的智能体系统。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

---

# **NanoBot 项目日报（2026-05-24）**

---

## **1. 今日速览**
- NanoBot 社区在过去24小时内保持较高活跃度，共更新 **8个 Issues**（含5条活跃/新开）、**10条 PR**（6条待合并）。  
- 无新版本发布，但关键功能改进（如 `spawn` 工具温度参数、Dream 系统优化）进入开发阶段。  
- 用户反馈集中在 **转录配置不透明性**（Issue #3637）、**子代理灵活性不足**（PR #3975）和 **内存冗余问题**（PR #3952）。  
- 健康度评估：⭐️ **良好**——核心问题响应迅速，新功能提案明确。

---

## **2. 版本发布**
- **无新版本发布**  

---

## **3. 项目进展**
### **✅ 已合并 PR**
- **[PR #3967](https://github.com/HKUDS/nanobot/pull/3967)**  
  - 修复 `exec` 工具的硬编码超时限制（原600秒上限），允许通过配置自定义超时（Issue #3595）。  
  - 同步修复 Groq 转录配置的透明性问题（Issue #3637），支持 Chat API 风格的 `apiBase` 字段。  
- **[PR #3971](https://github.com/HKUDS/nanobot/pull/3971)**  
  - 新增智谱（Zhipu AI）图像生成提供者，扩展多模型支持能力。  
- **[PR #3970](https://github.com/HKUDS/nanobot/pull/3970)**  
  - 集成 Azure Speech 语音转文本服务，支持 WhatsApp/Telegram 语音消息转录（需配置 `azureSpeech`）。  

### **🔜 待合并 PR**
- **[PR #3975](https://github.com/HKUDS/nanobot/pull/3975)**（关联 Issue #3969）  
  - 为 `spawn` 工具添加 `temperature` 参数，允许子代理独立设置采样温度（低精度任务/创意任务差异化处理）。  
- **[PR #3865](https://github.com/HKUDS/nanobot/pull/3865)**  
  - 引入轻量级 BM25 技能路由机制，减少系统提示词体积（预计节省60%+ tokens）。  

---

## **4. 社区热点**
### **🔥 高互动议题**
- **[Issue #3637](https://github.com/HKUDS/nanobot/issues/3637)**（Groq 转录配置问题）  
  - **背景**：用户误用 `apiBase` 字段导致无效配置，引发错误日志。  
  - **诉求**：明确区分不同转录提供者的配置规范（如 OpenAI vs Groq）。  
  - **进展**：已在 PR #3967 中修复，支持 Chat API 风格路径。  
- **[PR #3969](https://github.com/HKUDS/nanobot/issues/3969)**（子代理温度控制）  
  - **场景**：用户希望子代理能根据任务类型动态调整思维模式（如 JSON 解析用低温，文案生用高温）。  
  - **技术方案**：通过 `spawn(temperature=0.3)` 传递参数，无需修改主代理全局配置。  

---

## **5. Bug 与稳定性**
| **严重性** | **问题描述** | **状态** | **链接** |
|------------|--------------|----------|----------|
| 🟡 中等     | `exec` 工具超时限制硬编码（600秒） | **已修复 (#3967)** | [PR #3967](https://github.com/HKUDS/nanobot/pull/3967) |
| 🟢 低       | Groq 转录 `apiBase` 配置歧义 | **已修复 (#3967)** | [PR #3967](https://github.com/HKUDS/nanobot/pull/3967) |
| 🔴 高       | Dream 系统输入源单一导致上下文溢出（Issue #3047） | 未直接修复，但 PR #3952 优化记忆管理 | [Issue #3047](https://github.com/HKUDS/nanobot/issues/3047) |

---

## **6. 功能请求与路线图信号**
- **下一版本重点候选项**：  
  - **子代理温度定制化**（PR #3975）：差异化任务处理需求强烈，技术路径清晰。  
  - **技能路由优化**（PR #3865）：降低大语言模型负载，提升效率。  
  - **Azure 语音转录**（PR #3970）：多模态交互扩展，符合主流平台集成趋势。  
- **长期规划**：  
  - **MECE 长时记忆重构**（PR #3952）：解决冗余信息问题，需进一步用户测试。  

---

## **7. 用户反馈摘要**
- **痛点提炼**：  
  - **配置复杂性**：转录/工具链配置文档不足（Issue #3637、#3595）。  
  - **灵活性不足**：子代理行为无法按需调整（Issue #3969）。  
  - **内存效率**：重复历史数据占用资源（Issue #3047）。  
- **满意点**：  
  - Azure 语音转录的快速实现（PR #3970）获得潜在用户期待。  

---

## **8. 待处理积压**
| **Issue/PR** | **状态** | **建议动作** |
|--------------|----------|--------------|
| **[Issue #2182](https://github.com/HKUDS/nanobot/issues/2182)**（Hooks 功能） | 开放 | 评估优先级，可能需设计生命周期事件接口 |
| **[PR #1443](https://github.com/HKUDS/nanobot/pull/1443)**（心跳通知解耦） | 开放 | 检查是否可整合到 WebUI 配置 |
| **[Issue #3973](https://github.com/HKUDS/nanobot/issues/3973)**（饥饿问题） | 开放 | 结合 PR #3952 优化 Dream 实时学习机制 |

--- 

**总结**：NanoBot 近期聚焦于 **配置透明度**、**多模态支持** 和 **子代理灵活性**，社区响应积极，核心问题逐步闭环。建议优先推进温度参数和技能路由的合并，同时完善文档以减少配置歧义。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

---

# **Hermes Agent 项目日报（2026-05-24）**

---

## 1. 今日速览  
- **活跃度**：过去24小时共更新 **100条内容**（Issues/PRs），其中 Issues 新开/活跃44条、PR 待合并39条，表明社区开发讨论与代码贡献保持高度活跃。
- **核心问题聚焦**：主要集中在 **模型兼容性问题**（如 Anthropic/Azure OpenAI）、**插件系统缺陷**（如 Discord/Telegram适配器）、**配置与安装稳定性**（如 `install.sh`依赖缺失）。
- **修复进展**：多个关键Bug已有PR提交（如Azure非OpenAI模型支持、SQLite防撕裂写入），但尚未合并。

---

## 2. 版本发布  
❌ **无新版本发布**

---

## 3. 项目进展  
| PR | 类型 | 关键修复/功能 | GitHub链接 |
|----|------|---------------|-----------|
| #31210 | Bug | 修复 Azure AI Foundry 对非OpenAI模型（DeepSeek/Mistral等）的端到端支持 | [详情](https://github.com/NousResearch/hermes-agent/pull/31210) |
| #31211 | Bug | 解决 `.env`文件含空字节导致启动崩溃的问题 | [详情](https://github.com/NousResearch/hermes-agent/pull/31211) |
| #31214 | Feature | 优化多用户会话共享逻辑，减少Agent指令冗余 | [详情](https://github.com/NousResearch/hermes-agent/pull/31214) |
| #31215 | Feature | 新增 `secret-guard`插件，防止GitHub凭证泄露 | [详情](https://github.com/NousResearch/hermes-agent/pull/31215) |

---

## 4. 社区热点  
### **🔥 高评论Issue：Claude CLI集成故障**  
[#29125](https://github.com/NousResearch/hermes-agent/issues/29125)  
- **背景**：用户通过Claude CLI调用Hermes时无法工作，涉及Anthropic模型订阅与Token传递问题，累计19条评论，7人点赞。  
- **诉求**：需要明确错误原因并修复CLI环境下的模型初始化流程。  

### **📌 近期热议：Telegram/QQBot适配器问题**  
- [#31086](https://github.com/NousResearch/hermes-agent/issues/31086)：Telegram新话题被劫持至旧会话线程（1条评论）。  
- [#31101](https://github.com/NousResearch/hermes-agent/issues/31101)：QQBot重连失败后卡死（1条评论）。  
- **信号**：平台适配器的健壮性仍是用户痛点，需优先优化WebSocket重试机制。

---

## 5. Bug 与稳定性  
| Issue | 严重程度 | 描述 | 是否已有FixPR |
|-------|----------|------|--------------|
| [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) | P1 (阻塞级) | Anthropic流处理因客户端重建导致15分钟挂起 | ✅ PR #31210部分修复 |
| [#30445](https://github.com/NousResearch/hermes-agent/issues/30445) | P2 (高影响) | 多网关并发访问SQLite引发数据库损坏风险 | ✅ PR #31208中引入防撕裂写入 |
| [#31193](https://github.com/NousResearch/hermes-agent/issues/31193) | P2 (CPU占用) | QQBot重连循环导致100% CPU占用 | 🔄 待分析解决方案 |
| [#11197](https://github.com/NousResearch/hermes-agent/issues/11197) | P3 (安装问题) | `install.sh`未检测`xz-utils`导致解压失败 | 已反馈但未提PR |

---

## 6. 功能请求与路线图信号  
- **新增外部Vault支持**：[#22791](https://github.com/NousResearch/hermes-agent/issues/22791)提议集成Infisical（5人点赞），可能纳入Phase 4扩展计划。  
- **自定义技能子目录**：[#30999](https://github.com/NousResearch/hermes-agent/issues/30999)允许技能发现非默认子目录，已有PR #31215关联。  
- **Discord表情配置化**：[#31167](https://github.com/NousResearch/hermes-agent/issues/31167)支持动态替换处理状态表情符号。

---

## 7. 用户反馈摘要  
- **痛点**：  
  - **跨平台兼容性**：Azure OpenAI、Anthropic模型配置失败（[#25378](https://github.com/NousResearch/hermes-agent/issues/25378)）。  
  - **安装体验**：Linux环境依赖缺失导致静默失败（[#11197](https://github.com/NousResearch/hermes-agent/issues/11197)）。  
- **满意度**：  
  - 用户赞赏插件生态扩展（如LLM Wiki内存提供者PR #31201），但对TUI可访问性（a11y）提出改进建议（[#30793](https://github.com/NousResearch/hermes-agent/issues/30793)）。

---

## 8. 待处理积压  
- **长期未响应Issue**：  
  - [#27059](https://github.com/NousResearch/hermes-agent/issues/27059)：`session_search`硬编码超时参数，影响本地后端性能（4条评论，无PR）。  
  - [#18369](https://github.com/NousResearch/hermes-agent/issues/18369)：短会话用户自我改进机制失效（2条评论，无PR）。  
- **提醒**：维护者需关注此类影响核心功能的遗留问题。

--- 

**总结**：Hermes Agent在模型兼容性、插件生态和平台适配器方面持续活跃，但需加速关键Bug修复（如Azure/Anthropic流处理）和安装体验优化，以维持用户信任度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-05-24）

---

## 1. **今日速览**
PicoClaw 在24小时内保持活跃开发节奏，共提交 **9条 PR**、**6条 Issues**，并发布 **1个 Nightly Build（v0.2.9-nightly.20260523.f09a7d67）**。  
- **合并/关闭 PR** 数量占主导（6/9），表明近期以问题修复和稳定性优化为主；  
- **活跃 Issue** 聚焦于渠道功能（如微信多账号配置）、模型兼容性（DeepSeek 思考层映射）及权限错误；  
- **社区响应迅速**，高票需求（如邮件原生通道提案）已获进展，但部分边缘场景（Android 存储权限）仍需跟进。

---

## 2. **版本发布**
- **Nightly Build v0.2.9-nightly.20260523.f09a7d67**  
  基于 `main` 分支的最新自动化构建，可能包含未充分测试的变更。  
  **主要更新范围**：  
  - 微信多账号支持（PR #2883）  
  - DeepSeek 思考层字段映射（PR #2928）  
  - Discord 附件下载修复（PR #2931）  
  **迁移建议**：暂不建议生产环境直接使用，需观察后续稳定版发布。  
  [完整变更日志](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

---

## 3. **项目进展**
### **重要合并/关闭 PR**
| PR编号 | 标题 | 关键贡献 |
|--------|------|----------|
| [#2895](https://github.com/sipeed/picoclaw/pull/2895) | 修复 Seahorse 上下文预算溢出 | 解决 FreshTail 消息绕过预算限制的问题（Issue #2894），确保上下文窗口合规性 |
| [#2928](https://github.com/sipeed/picoclaw/pull/2928) | DeepSeek 思考层字段映射 | 将 `thinking_level` 与 DeepSeek 的 `thinking`/`reasoning_effort` 对齐，提升模型兼容性 |
| [#2931](https://github.com/sipeed/picoclaw/pull/2931) | Discord 非音频附件下载 | 修复 CDN URL 被丢弃问题，支持图片/文件附件处理 |

**推进方向**：  
✅ **稳定性优先**：修复了关键路径中的上下文预算漏洞（影响模型调用）；  
✅ **生态扩展**：增强对 DeepSeek 等新型模型的支持；  
✅ **体验优化**：前端代码块增加行号与换行控制（PR #2933）。

---

## 4. **社区热点**
### **最活跃 Issue**
- **[#2421: 添加电子邮件为原生渠道](https://github.com/sipeed/picoclaw/issues/2421)**  
  - **诉求**：满足企业/科研场景中依赖邮件通信的用户（👍 2，评论 7）；  
  - **进展**：提案已讨论，需设计协议适配方案（如 SMTP/Webhook 集成）。  

### **高优先级 Bug**
- **[#2742: v0.2.8 启动时无频道](https://github.com/sipeed/picoclaw/issues/2742)**  
  - **复现条件**：Ubuntu + Telegram 配置，Go 1.25.9；  
  - **状态**：暂无 fix PR，需排查初始化逻辑。  

---

## 5. **Bug 与稳定性**
| Issue/PR | 问题描述 | 严重程度 | 修复状态 |
|----------|----------|----------|----------|
| [#2894](https://github.com/sipeed/picoclaw/issues/2894) | FreshTail 绕过预算导致上下文超限 | 🔴 高危 | 已由 PR #2895 修复 |
| [#2880](https://github.com/sipeed/picoclaw/issues/2880) | Android 10 下存储权限失败 | 🟡 中危 | 待验证（需 MIUI 特定权限策略） |
| [#2931](https://github.com/sipeed/picoclaw/pull/2931) | Discord 附件处理缺陷 | 🟢 低危 | 已合并 |

---

## 6. **功能请求与路线图信号**
| 需求 | 关联 PR | 可能性评估 |
|------|---------|------------|
| 邮件原生通道 | 无提案 | 🔵 高优先级（已有用户投票） |
| 微信多账号配置 | PR #2883 | ✅ 已实现，需测试验证 |
| DeepSeek 兼容优化 | PR #2928 | ✅ 已合并 |

**下一版本重点**：  
- 邮件通道接口标准化（需 RFC 讨论）；  
- 移动端权限适配（尤其 Android 存储访问）。

---

## 7. **用户反馈摘要**
- **痛点**：  
  - **企业场景**：缺乏邮件支持（Issue #2421 高频提及）；  
  - **模型兼容性**：DeepSeek 需手动配置参数，降低易用性（Issue #2903）；  
  - **权限问题**：Android 设备存储权限异常（Issue #2880）。  
- **满意点**：  
  - Discord 修复（PR #2931）获得潜在用户认可；  
  - 夜间构建快速响应了紧急 Bug（如上下文预算）。

---

## 8. **待处理积压**
| Issue/PR | 状态 | 提醒 |
|----------|------|------|
| [#2742](https://github.com/sipeed/picoclaw/issues/2742) | 开放（15天未更新） | 需优先排查 Telegram 初始化流程 |
| [#2880](https://github.com/sipeed/picoclaw/issues/2880) | 开放（8天未更新） | 需 MIUI 开发者协助分析权限策略 |
| [#2834](https://github.com/sipeed/picoclaw/issues/2834) | 关闭（用户未解决） | 补充升级指南文档 |

---

**总结**：PicoClaw 近期在模型兼容性和核心稳定性上取得显著进展，但需加速解决企业级功能（邮件）和移动端适配问题。建议维护者重点关注 **邮件通道提案** 和 **Android 存储权限** 的闭环。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

---

# **NanoClaw 项目日报 | 2026-05-24**

---

## **1. 今日速览**
- NanoClaw 在过去 24 小时内保持较高活跃度：**4 个 Issues（新开/活跃 1，关闭 3）** 和 **17 个 PR（待合并 4，已合闭 13）**，无新版本发布。
- 核心问题集中在 WhatsApp 适配器兼容性、Agent SDK 构建错误及安全加固，多个 PR 已快速修复关键路径问题（如数据库崩溃、Keychain 安全）。
- 社区贡献者活跃，包括多位开发者提交功能性修复（如消息格式化、MCP 工具增强），表明项目处于积极迭代阶段。

---

## **2. 版本发布**
- **无新版本发布**。

---

## **3. 项目进展**
### **关键合并/关闭的 PR**
| PR 编号 | 类型       | 主要内容                                                                 | 影响范围                     |
|---------|------------|--------------------------------------------------------------------------|------------------------------|
| #2597   | 修复 (Fix) | 修复 macOS Docker Desktop 下 `inbound.db` 损坏导致的无限循环问题           | Agent Runner 稳定性          |
| #2595   | 修复 (Fix) | 支持 `CLAUDE_TRANSCRIPT_ROTATE_AGE_DAYS=0` 禁用自动续传                   | 会话管理                     |
| #2598   | 修复 (Fix) | 修复 `CLAUDE.local.md` 未加载问题，通过扩展 `settingSources` 解决         | 多组记忆系统                 |
| #2600   | 新增 (Feat)| 实现 WhatsApp 轮播式 MCP 工具（Carousel Tool）                           | WhatsApp 集成功能增强        |

**整体推进**：  
- 修复了多个阻塞性问题（如数据库崩溃、配置持久化），并增强了 WhatsApp 适配器的协议兼容性。
- 新增工具和技能模块（如轮播消息、本地记忆加载），提升 Agent 交互灵活性。

---

## **4. 社区热点**
### **最活跃的 Issue/PR**
#### **Issue #2603 [开放]**  
[链接](https://github.com/qwibitai/nanoclaw/issues/2603)  
**问题描述**：`skill/compact` 分支在合并到 v2 时，因引用废弃符号导致构建失败。  
**社区反馈**：用户报告该问题影响升级流程，需紧急处理。  
**关联 PR**：尚无直接修复，需开发团队跟进。  

#### **PR #2545 [安全修复]**  
[链接](https://github.com/qwibitai/nanoclaw/pull/2545)  
**内容**：用 `crypto.randomBytes()` 替代 `Math.random()` 生成审批卡片 ID，防止随机数预测漏洞。  
**意义**：强化安全基线，符合开源项目的最佳实践。

---

## **5. Bug 与稳定性**
| 严重性 | 问题描述                                                                 | 状态               | 修复 PR 编号 |
|--------|--------------------------------------------------------------------------|--------------------|--------------|
| 高     | WhatsApp LID→phone JID 映射重启后丢失，路由失败                          | 已关闭 (#2194)     | 待确认       |
| 中     | WhatsApp 平台 ID 存储带前缀，静默路由失败                                | 已关闭 (#2193)     | 待确认       |
| 高     | macOS Docker 桌面下 `inbound.db` 损坏导致 Agent Runner 卡死              | 已修复 (#2597)     | ✅           |
| 低     | `CLAUDE.md` 未自动加载本地文件（#2185）                                 | 已关闭             | 修复中 (#2598)|

---

## **6. 功能请求与路线图信号**
- **WhatsApp 协议兼容性**：多个 PR（如 #2554）聚焦 WhatsApp 适配器改进，未来可能推出完整 WhatsApp 支持方案。
- **自定义 OpenAI 兼容端点**：PR #1994 允许通过 `container.json` 切换后端，为本地化部署铺路。
- **MCP 工具扩展**：#2600 引入轮播消息工具，反映用户对富媒体交互的需求。

---

## **7. 用户反馈摘要**
- **痛点**：  
  - WhatsApp 相关配置易因重启失效（#2194/#2193），影响生产环境稳定性。  
  - 升级时分支合并冲突（#2603）阻碍用户迁移至 v2。  
- **满意点**：  
  - 社区响应迅速，如数据库崩溃（#2597）和 Keychain 安全（#2545）在 24 小时内修复。  
  - 新工具（如轮播消息）增强 Agent 交互体验。

---

## **8. 待处理积压**
- **长期未响应 Issue**：  
  - **#2603**（v2 升级构建失败）：需优先解决，影响用户体验。  
  - **#2194/2193**（WhatsApp 持久化问题）：需补充测试用例和文档说明。  
- **待合并 PR**：  
  - **#2346**（未知 slash 命令处理）：建议尽快合并以提升 Agent 容错性。

---

**总结**：NanoClaw 近期在核心稳定性和功能扩展上表现良好，但需注意 WhatsApp 适配器和升级流程的遗留问题。建议优先处理高优先级阻塞项（如 #2603），同时鼓励社区对复杂功能（如 WhatsApp 全栈支持）提供更多测试反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

---

# NullClaw 项目日报  
**日期：2026-05-24**

---

## 1. **今日速览**  
- **活跃度评估**：项目处于中等活跃状态，过去24小时内无 Issues 更新，但收到 **10 条待合并 PR**，显示开发团队正在密集推进功能修复和优化。  
- **核心方向**：主要集中在 Telegram 渠道功能完善（如回复消息上下文、子任务结果传递）、配置兼容性改进（允许数字用户 ID）以及安全性加固（HTTP 凭证处理）。  
- **测试覆盖**：新增多个测试用例（如 API 密钥环境隔离、macOS 路径安全），表明对稳定性和安全性的持续投入。  
- **社区互动**：PR 作者多为内部成员（`raskevichai`, `vernonstinebaker`），暂无外部开发者贡献，可能处于内部冲刺阶段。  

[GitHub 数据概览](https://github.com/nullclaw/nullclaw)

---

## 2. **版本发布**  
**无新版本发布**。

---

## 3. **项目进展**  
### 关键 PR 进展（共10条待合并）：
| # | 主题 | 链接 | 摘要 |
|----|----|----|----|
| **#930** | [feat(telegram): include reply_to_message text in inbound context](https://github.com/nullclaw/nullclaw/pull/930) | 解决 #916，修复 Telegram 回复消息中原始文本缺失问题，增强上下文感知能力。 |
| **#929** | [fix(tools/memory_list): default session_id to null so globals are visible](https://github.com/nullclaw/nullclaw/pull/929) | 解决 #917，确保全局内存条目（无 `session_id`）可被 `memory_list` 检索。 |
| **#928** | [fix(channels): deliver subagent results to telegram in polling mode](https://github.com/nullclaw/nullclaw/pull/928) | 解决 #918，修复 Telegram 轮询模式下子任务结果丢失问题。 |
| **#924** | [fix(config): tolerate numeric items in channel allow-lists](https://github.com/nullclaw/nullclaw/pull/924) | 解决 #869/#901，支持 Telegram 允许列表中的数字用户 ID（原生格式兼容）。 |
| **#927** | [test(compatible): suppress API error logs under zig test](https://github.com/nullclaw/nullclaw/pull/927) | 优化测试环境日志，避免 Zig 测试时误报 API 错误。 |
| **#925** | [fix(path-security): allow macOS workspace under /private/var/folders](https://github.com/nullclaw/nullclaw/pull/925) | 调整 macOS 路径安全策略，允许特定工作区目录。 |
| **#907** | [Security harden webhooks, HTTP secrets, and cron shell jobs](https://github.com/nullclaw/nullclaw/pull/907) | 移除 HTTP 路径中的 `curl` 子进程调用，强制显式通道信任机制（Telegram/Discord/LINE）。 |
| **#891** | [fix(providers): preserve curl probe transport failures](https://curl 传输错误保留在 OpenAI 兼容探测路径中。 |
| **#881** | [refactor(http): remove runtime curl subprocesses](https://github.com/nullclaw/nullclaw/pull/881) | 重构 HTTP 模块，用原生 Zig 标准库替代 `curl` 子进程，提升性能与安全性。 |

**整体推进**：  
- **功能完整性**：修复了多个关键用户体验问题（如 Telegram 上下文、全局内存可见性）。  
- **架构演进**：推动从 `curl` 子进程到原生 HTTP 的彻底迁移，减少安全风险和依赖。  
- **稳定性**：增强测试覆盖率和错误处理（如 API 密钥隔离、路径白名单）。

---

## 4. **社区热点**  
目前无公开评论或讨论最活跃的 Issues/PRs，所有 PR 均为内部提交且未获外部反馈。  
**潜在关注点**：  
- **PR #924** 涉及配置兼容性（数字用户 ID），可能是生产环境常见痛点，建议后续验证外部用户场景。  
- **PR #907** 的安全加固可能影响现有部署，需明确迁移指南。  

---

## 5. **Bug 与稳定性**  
- **已知问题**（已有修复 PR）：  
  - Telegram 子任务结果丢失 (#918) → [#928](https://github.com/nullclaw/nullclaw/pull/928)  
  - 全局内存不可见 (#917) → [#929](https://github.com/nullclaw/nullclaw/pull/929)  
  - 数字用户 ID 被忽略 (#869/#901) → [#924](https://github.com/nullclaw/nullclaw/pull/924)  
- **无新增崩溃报告**。

---

## 6. **功能请求与路线图信号**  
- **已响应需求**：  
  - 完整 Telegram 上下文支持 (#916 → #930)  
  - 多平台数字 ID 兼容性 (#869/#901 → #924)  
- **未来可能纳入**：  
  - 安全加固（如 PR #907 的 HTTP 凭证处理）可能成为长期重点。  
  - 原生 HTTP 重构 (#881) 为后续工具链扩展铺路。

---

## 7. **用户反馈摘要**  
- **痛点提炼**：  
  - **Telegram 功能缺失**：用户期望更完整的消息交互（如回复内容传递）。  
  - **配置灵活性不足**：数字 ID 默认被拒，影响自动化流程。  
  - **安全性担忧**：依赖 `curl` 子进程可能引发运维顾虑。  
- **满意度**：当前修复方向与用户反馈高度匹配（如 #916、#869）。  

---

## 8. **待处理积压**  
- **高优先级**：  
  - PR #930、#928 等关键功能修复需尽快合并并发布，避免影响下游用户。  
- **长期跟踪**：  
  - 安全相关变更（如 #907）需配套文档和迁移说明，降低升级成本。  
- **建议行动**：  
  - 安排外部用户测试验证 PR #924（数字 ID 兼容性）。  

---

**总结**：NullClaw 近期聚焦于核心渠道功能完善与安全架构升级，技术债务清理进度显著。建议加快 PR 合并节奏，并加强用户沟通以同步重大变更。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

# IronClaw 项目日报（2026-05-24）

---

## **1. 今日速览**
- **高活跃度**：过去 24 小时内项目提交 **50 个 PR**，新增/活跃 Issue **16 条**，无新版本发布，核心团队正集中推进安全加固与架构优化。
- **聚焦安全与架构**：多数 PR 涉及 Hook 框架激活、文件系统 TOCTOU 防护、持久化后端实现（Postgres/libSQL），以及认证通道的权限模型改进。
- **代码健康度良好**：待合并 PR 占 34/50，但均为非阻塞性修复或功能增强，未出现紧急阻塞问题。  
[GitHub 数据概览](https://github.com/nearai/ironclaw)

---

## **2. 版本发布**
- 无新版本发布。

---

## **3. 项目进展**
### ✅ **关键合并 PR**
- **[PR #3938](https://github.com/nearai/ironclaw/pull/3938)**:  
  激活 Hook 框架生产环境支持，默认关闭 (`HOOKS_ENABLED=OFF`)，为后续多租户安全审计和第三方扩展奠定基础。
- **[PR #3952](https://github.com/nearai/ironclaw/pull/3952)**:  
  通过 `openat2/O_NOFOLLOW` 实现文件系统 TOCTOU 防护，确保租户隔离边界无内核级竞态漏洞。
- **[PR #3937](https://github.com/nearai/ironclaw/pull/3937)**:  
  完成持久化后端（libSQL/Postgres）的跨行为一致性测试套件，验证三种 `PredicateStateBackend` 实现等价性。
- **[PR #3960](https://github.com/nearai/ironclaw/pull/3960)**:  
  新建 `SigningProvider` trait 抽象层，为可信签名通道（如 attested-signing）提供标准化接口。

---

## **4. 社区热点**
### **🔥 最活跃 Issues/PR**
#### **Issue #3564 [Security] Wallet signing requires an unforgeable user-authorization channel**
- **诉求**：要求将钱包签名从主机密钥迁移到用户授权通道，防止主机侧密钥伪造风险。  
- **关联 PR**：[#3960](https://github.com/nearai/ironclaw/issues/3564) 正在推进签名抽象层设计。  
- **优先级**：`security-review-required`，需尽快解决。

#### **PR #3931 [fix(hooks): close cross-tenant leakage + replay + provider spoofing in event-triggered](https://github.com/nearai/ironclaw/pull/3931)**
- **修复内容**：解决事件触发型 Hook 的跨租户数据泄露、回放攻击和提供者身份伪造问题，全 fail-closed 模式。
- **背景**：源自 Codex 安全评审（[评论链接](https://github.com/nearai/ironclaw/pull/3640#issuecomment-4525200884)）。

---

## **5. Bug 与稳定性**
| **Issue/PR** | **严重性** | **状态** |
|--------------|-----------|----------|
| [#3945](https://github.com/nearai/ironclaw/issues/3945) | 中 (macOS/Linux 安装脚本失效) | **已修复** ([PR #3955](https://github.com/nearai/ironclaw/pull/3955)) |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) | 低 (Nightly E2E 失败) | 需复现分析（无直接 fix PR） |

---

## **6. 功能请求与路线图信号**
- **API 规范提案**：  
  **[RFC #3953](https://github.com/nearai/ironclaw/issues/3953)** 提议用 OpenAPI/AsyncAPI 定义 Gateway、WebUI 等接口契约，提升可观测性与工具链集成。
- **预算控制**：  
  **[PR #3899](https://github.com/nearai/ironclaw/pull/3899)** 落地 Reborn 成本分片机制，支持按 tokens 计费（输入/输出）。

---

## **7. 用户反馈摘要**
- **痛点**：  
  - 安装脚本在 macOS/Linux 0.26+ 版本失效（[#3945](https://github.com/nearai/ironclaw/issues/3945)），影响新用户部署体验。  
  - 用户对 CLAUDE.md 命名混乱提出改进建议（[#3954](https://github.com/nearai/ironclaw/issues/3954)），希望统一文档规范。
- **满意点**：  
  - Hook 框架的持久化后端（Postgres/libSQL）通过严格测试，增强多租户数据隔离信心。

---

## **8. 待处理积压**
- **长期待决**：  
  - **[#3564](https://github.com/nearai/ironclaw/issues/3564)**（安全）：需重构签名授权模型，依赖 `SigningProvider` 抽象层（[#3960](https://github.com/nearai/ironclaw/pull/3960)）完成后跟进。  
  - **[#3915](https://github.com/nearai/ironclaw/issues/3915)**（安全）：默认无操作防护规则静默绕过问题，需全局检查。

---

**总结**：IronClaw 在安全加固与架构解耦方面取得显著进展，尤其 Hook 框架和文件系统防护为多租户场景打下坚实基础。需优先处理签名通道安全性和安装脚本回归问题以保障用户体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-05-24）

---

## **1. 今日速览**
LobsterAI 过去24小时保持中等活跃度，共新增3个 Issues 和2个待合并 PR，无版本发布。  
核心讨论集中在**记忆系统优化**（Issue #2041）、**OpenClaw 安全短板分析**（Issue #2040）及**Dreaming 开关兼容性修复**（Issue #2039）。  
功能开发端聚焦**批量会话导出**（PR #1529）和**多 Agent 任务归属支持**（PR #1530），但未合并。  

[GitHub 数据概览](https://github.com/netease-youdao/LobsterAI)

---

## **2. 版本发布**
**无新版本发布**。

---

## **3. 项目进展**
**待合并 PR：**
- **[PR #1529] 批量模式新增会话导出功能**  
  允许用户将选中会话导出为结构化 JSON 文件，包含完整元数据和消息历史。[详情链接](https://github.com/netease-youdao/LobsterAI/pull/1529)  
- **[PR #1530] 多 Agent 下定时任务归属选择器**  
  解决多 Agent 场景下任务归属不透明问题，提供可视化切换入口。[详情链接](https://github.com/netease-youdao/LobsterAI/pull/1530)  

*注：两 PR 均标记 `[stale]`，需社区或维护者跟进。*

---

## **4. 社区热点**
**最热 Issue：**
- **[Issue #2041] 最大的瓶颈不是进化算法，而是记忆系统**  
  作者 woxinsj 对比理想记忆框架与当前实现，指出轨迹记忆缺失和跨场景学习不足是技能自演进（`skill-self-evolver`）的主要瓶颈。[链接](https://github.com/netease-youdao/LobsterAI/issues/2041)  
  *诉求方向：需系统性升级记忆存储架构，可能涉及 `memory-core` Schema 改造。*

**次热 Issue：**
- **[Issue #2040] OpenClaw 的五大薄弱点**  
  深度分析安全漏洞、Token 成本失控等问题，被列为高优先级改进项。[链接](https://github.com/netease-youdao/LobsterAI/issues/2040)  
- **[Issue #2039] Dreaming 开关兼容性缺陷**  
  因上游 `memory-core` Schema 不支持 `dreaming` 属性导致配置丢失，需紧急修复。[链接](https://github.com/netease-youdao/LobsterAI/issues/2039)  

---

## **5. Bug 与稳定性**
**关键 Bug 报告：**
| Issue | 严重性 | 状态 | 描述 |
|-------|--------|------|------|
| #2039 | 🔴 高 | 待修复 | Dreaming 开关配置在 Gateway 重启后失效，需 Schema 兼容。[链接](https://github.com/netease-youdao/LobsterAI/issues/2039) |
| #2040 | 🔴 极高 | 待评估 | OpenClaw 存在恶意技能泛滥和安全漏洞风险，需紧急审计。[链接](https://github.com/netease-youdao/LobsterAI/issues/2040) |

---

## **6. 功能请求与路线图信号**
**潜在新功能候选：**
- **记忆系统重构**（关联 #2041）：引入声明式/结构化记忆存储，提升跨任务学习能力。  
- **多 Agent 任务管理**（关联 #1530）：增强任务归属可见性与灵活性，适配复杂协作场景。  
- **批量数据导出**（#1529）：满足用户对会话归档的需求，可能扩展为通用数据导出插件。  

---

## **7. 用户反馈摘要**
**痛点提炼：**
- **记忆系统碎片化**：用户反馈当前 `.learnings/` 和 `memory/` 目录缺乏统一结构，难以复用知识（#2041）。  
- **安全与成本压力**：恶意技能和高 Token 消耗被多次提及，需平衡开放性与可控性（#2040）。  
- **配置持久性问题**：Dreaming 开关等高级功能依赖临时配置，影响体验一致性（#2039）。  

**满意度亮点：**  
无明确正面反馈，但 PR #1529 和 #1530 显示用户对**批量操作**和**多 Agent 支持**有明确需求。

---

## **8. 待处理积压**
**长期未响应项：**
- **[PR #1529, #1530]** 已停滞超过1个月，需社区或维护者确认是否合并。  
- **[Issue #2040]** 涉及全栈安全整改，需制定优先级路线图。  
- **[Issue #2041]** 记忆系统重构属于战略级改进，需技术方案评审。  

---

### **总结建议**
1. **紧急修复**：优先解决 #2039 的 Schema 兼容性问题，避免 Dreaming 功能不可用。  
2. **安全攻坚**：启动 OpenClaw 漏洞扫描 (#2040)，建立恶意技能过滤机制。  
3. **内存规划**：针对记忆系统瓶颈 (#2041) 召开技术设计会议，评估短期补丁 vs 长期重构。  

[GitHub 主页](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

---

### **Moltis 项目日报（2026-05-24）**

---

#### **1. 今日速览**  
过去24小时内，Moltis 社区活跃度较高，共收到 **8条 Issues**（含5条新提交/活跃、3条已关闭）和 **4条 PR**（1条待合并、3条已合并）。  
- **核心进展**：修复了3个关键 Bug（Vault初始化、语法高亮、钩子配置注册），并完成了一项架构级功能提案（Agents作为能力边界）。  
- **社区响应**：近期 Issues 集中暴露安全性和稳定性问题（如环境变量泄露、配置验证缺失），需优先处理。  
[GitHub 数据概览](https://github.com/moltis-org/moltis)

---

#### **2. 版本发布**  
无新版本发布。

---

#### **3. 项目进展**  
✅ **已合并 PR 及影响**：  
- **PR #1048** [fix(gateway)](https://github.com/moltis-org/moltis/pull/1048)：修复 `moltis.toml` 中 `[hooks]` 配置未注册的问题，确保钩子运行时生效。  
- **PR #1050** [fix(vault)](https://github.com/moltis-org/moltis/pull/1050)：解决密码 Vault 初始化逻辑缺陷，支持现有密码认证场景的初始化。  
- **PR #1047** [fix(web)](https://github.com/moltis-org/moltis/pull/1047)：恢复浅色模式下的代码块语法高亮，提升可访问性。  

🔧 **待合并 PR**：  
- **PR #1049** [feat: agents as capability boundaries](https://github.com/moltis-org/moltis/pull/1049)：提出将 Agents 设为能力边界（控制模型、MCP服务器、沙盒策略等），为多租户场景设计基础架构。需进一步评审。

---

#### **4. 社区热点**  
🔥 **高频 Issues 分析**：  
- **Issue #1051** [OpenAI兼容 baseUrl 未校验](https://github.com/moltis-org/moltis/issues/1051)：用户反馈构造的 URL 失败时无日志记录，存在安全隐患。**诉求**：增强输入验证与错误追踪。  
- **Issue #1054** [环境变量通过 `mcp_list` 暴露给 LLM](https://github.com/moltis-org/moltis/issues/1054)：敏感信息泄露风险，属严重安全漏洞。**关联 PR**：暂无，需紧急修复。  

💬 **讨论热度**：  
- Issue #553 [Agent 回环与超时配置](https://github.com/moltis-org/moltis/issues/553)（0 赞但活跃）：用户希望细化 Agent 级容错配置，可能影响多 Agent 协作场景的可靠性。

---

#### **5. Bug 与稳定性**  
⚠️ **按优先级排序**：  
1. **安全相关**（Critical）：  
   - **Issue #1054**：LLM 暴露环境变量（需立即修复）。  
   - **Issue #1051**：OpenAI URL 构造缺陷（已通过 PR #1048 部分修复）。  
2. **功能缺陷**（High）：  
   - **Issue #1053**：会话标题生成失效（无 PR，需排查）。  
   - **Issue #1052**：模型版本选择器 UI 适配问题（UI 团队跟进）。  
3. **稳定性**（Medium）：  
   - **Issue #1046**：Vault 密码状态误报（PR #1050 已修复）。  

📌 **已修复**：钩子配置（#1024）、语法高亮（#1045）等问题。

---

#### **6. 功能请求与路线图信号**  
🚀 **潜在纳入下版的功能**：  
- **Agents 能力边界**（PR #1049）：多租户和权限隔离的关键需求，可能成为 v2.0 里程碑。  
- **Agent 级超时/回环配置**（Issue #553）：提升复杂工作流的鲁棒性。  
- **OpenAI API 严格校验**（Issue #1051）：安全合规性改进。  

📅 **路线图建议**：下一版本应优先解决安全漏洞，并推进 Agents 架构落地。

---

#### **7. 用户反馈摘要**  
📊 **痛点提炼**：  
- **安全性**：用户对敏感信息泄露（Issue #1054）极度不满，需紧急响应。  
- **体验优化**：UI 适配（Issue #1052）和浅色模式（Issue #1045）影响日常使用。  
- **稳定性**：Vault 初始化（Issue #1046）和钩子功能（Issue #1024）是生产环境关键依赖。  

👍 **满意度**：对快速修复（如 Vault 初始化）表示认可，但长期功能需求（如 Agents）仍需更多讨论。

---

#### **8. 待处理积压**  
⏳ **需关注的长期 Issue**：  
- **Issue #553**（Agent 配置）：虽无直接修复，但涉及架构设计，建议评估优先级。  
- **Issue #1053**（会话标题）：影响用户体验，需技术调研。  

🔔 **提醒**：维护者可结合 PR #1049 的架构提案，同步规划后续功能迭代。

--- 

**总结**：Moltis 近期聚焦安全与稳定性修复，社区反馈积极，但需加速响应安全漏洞并明确 Agents 路线图。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

---

### CoPaw 项目日报（2026-05-24）

---

#### **1. 今日速览**
- **活跃度**：过去24小时内项目保持较高活跃度，共更新11条 Issues 和2条 PR，无新版本发布。
- **问题聚焦**：主要围绕工具调用显示、移动端支持、MCP OAuth 兼容性、插件扩展及会话记忆等核心功能展开讨论。
- **贡献者参与**：新增2个首次贡献者的 PR（#4630、#4622），表明社区持续吸引新成员加入开发。
- **健康度评估**：整体进展平稳，但部分功能（如移动端、插件架构）仍需长期迭代。  
[GitHub 总览](https://github.com/agentscope-ai/CoPaw)

---

#### **2. 版本发布**
- **无新版本发布**

---

#### **3. 项目进展**
- **PR 合并状态**：所有 PR 均处于待合并状态：
  - **#4630**（MCP管理增强）：集成市场、健康检查与密钥验证，提升 MCP 生态管理能力。[链接](https://github.com/agentscope-ai/CoPaw/pull/4630)
  - **#4622**（数据分析插件）：新增含12项BI技能的 `datapaw` 插件，支持标准化插件架构。[链接](https://github.com/agentscope-ai/CoPaw/pull/4622)  
  *进展说明*：两项 PR 均为功能增强，推动插件化设计和 MCP 集成能力，但未完成代码审查。

---

#### **4. 社区热点**
- **最活跃 Issue**：**#4644**（控制台工具调用显示延迟）  
  用户反馈在 Web UI 中除 `read_file` 外的工具调用**不实时显示**，需手动刷新页面，且无错误日志。[链接](https://github.com/agentscope-ai/CoPaw/issues/4644)  
  *诉求分析*：影响用户体验的底层前端渲染问题，可能与事件监听或状态同步机制有关。
  
- **高频议题**：**#4635**（移动端适配需求）  
  现有控制台在移动端浏览器存在严重交互问题，虽支持 DingTalk/Feishu 等聊天渠道，但缺乏原生移动入口。[链接](https://github.com/agentscope-ai/CoPaw/issues/4635)  
  *背景*：用户期望统一移动端体验，需重构响应式UI设计。

---

#### **5. Bug 与稳定性**
- **关键 Bug**：
  - **#4265**（内存泄漏导致系统卡死）：读取对话日志时触发循环压缩，SSH 无法连接（已关闭）。[链接](https://github.com/agentscope-ai/CoPaw/issues/4265)  
    *修复状态*：已有解决方案，需进一步验证。
  - **#4643**（MCP OAuth 客户端密钥缺失）：OAuth 2.0 认证步骤未传递 `client_secret`，导致无法连接某些 MCP 服务器。[链接](https://github.com/agentscope-ai/CoPaw/issues/4643)  
    *风险等级*：中高，影响企业级集成场景。
  - **#4646**（MCP Schema 布尔值转换错误）：Schema 校验器将合法布尔值转为无效对象。[链接](https://github.com/agentscope-ai/CoPaw/issues/4646)  
    *影响范围*：可能破坏第三方工具兼容性。

---

#### **6. 功能请求与路线图信号**
- **高优先级需求**：
  - **自动会话总结（RFC #4640/#4639）**：提议通过钩子机制在会话结束时自动归档关键信息（如决策、代码变更）。[链接](https://github.com/agentscope-ai/CoPaw/issues/4640)
  - **移动端控制台入口（Issue #4635）**：需重构UI以适配移动端，可能涉及独立分支开发。
  - **插件扩展增强（Issue #4642）**：建议非侵入式插件架构（Context/Memory、Hook、Skills 等模块化）。[链接](https://github.com/agentscope-ai/CoPaw/issues/4642)
  - **Token 使用统计（Issue #4647）**：实时展示生成速度与消耗量，便于成本监控。[链接](https://github.com/agentscope-ai/CoPaw/issues/4647)

---

#### **7. 用户反馈摘要**
- **痛点提炼**：
  - **实时性不足**：工具调用显示延迟（#4644）、环境变量继承问题（#4641）直接影响调试效率。
  - **移动端缺失**：现有 Web UI 在手机上体验差，需替代方案（#4635）。
  - **记忆系统利用率低**：用户依赖手动提示记录关键信息（RFC #4639）。
  - **企业集成限制**：MCP OAuth 兼容性问题阻碍第三方服务接入（#4643）。
- **满意点**：插件化架构初见成效（#4622 新增 BI 插件），社区贡献积极性上升。

---

#### **8. 待处理积压**
- **长期未响应议题**：
  - **#4635（移动端适配）**：提出3天，需优先评估技术方案（如 PWA 或独立应用）。
  - **#4642（插件扩展）**：涉及架构级改造，需社区讨论设计模式。
  - **#4265（内存泄漏）**：虽已关闭，需确认修复是否彻底。

---

**总结**：CoPaw 近期聚焦插件生态与核心体验优化，但需加强移动端支持和底层稳定性。建议优先处理高并发场景的 Bug（如 #4265）及企业集成需求（MCP OAuth）。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

---

### **ZeptoClaw 项目日报（2026-05-24）**

---

#### **1. 今日速览**
- 过去24小时，ZeptoClaw 保持高活跃度：**3个 Issues 更新**（1条新增/活跃，2条关闭），**17个 PR 更新**（14个已合并/关闭，3条待合并）。  
- 核心进展集中在 **工具链优化**（如 `longterm_memory` 触发词引导）、**安全依赖更新**（RUSTSEC 漏洞修复）和 **文档对齐**（项目定位声明）。  
- 无版本发布，但依赖项（如 Tokio、Astro）通过 Dependabot 自动化升级，确保技术栈稳定性。  
- 整体状态：健康，开发节奏稳定，社区协作高效。  

---

#### **2. 版本发布**
- **无新版本发布**。  

---

#### **3. 项目进展**
##### **关键合并/关闭 PR**  
| PR 编号 | 摘要 | 影响范围 | 链接 |
|--------|------|----------|------|
| #583 | 关闭：Agent 中间件 Pipeline 的 Phase 2 布线（未完成，需重构） | 核心 Agent 架构 | [GitHub #583](https://github.com/qhkm/zeptoclaw/pull/583) |
| #591 | 关闭：Dependabot 升级 `taiki-e/install-action` | CI/CD 工具链 | [GitHub #591](https://github.com/qhkm/zeptoclaw/pull/591) |
| #571 | 关闭：为 `longterm_memory` 工具添加触发词引导 | 用户行为引导 | [GitHub #571](https://github.com/qhkm/zeptoclaw/pull/571) |
| #570 | 关闭：统一项目定位文档（README/Cargo 等） | 品牌一致性 | [GitHub #570](https://github.com/qhkm/zeptoclaw/pull/570) |

**进展总结**：  
- 完成工具链改进（如记忆工具触发词），降低用户学习成本；  
- 安全依赖升级（如 Tokio、Rustls）修复潜在漏洞；  
- 文档与宣传材料对齐，避免误导性声明。  

---

#### **4. 社区热点**
##### **最活跃 Issue**  
**#593: refactor(agent): Phase 2b — cut process_message over to middleware Pipeline** ([链接](https://github.com/qhkm/zeptoclaw/issues/593))  
- **诉求**：重构 Agent 消息处理流程，将 `process_message` 迁移至中间件 Pipeline（Phase 2b，延续 #399 计划）。  
- **背景**：Phase 1 (#564) 已完成框架设计，Phase 2 (#583) 因 scaffolding 未完整实现被关闭，现需继续推进。  

**分析**：  
- 反映开发者对模块化 Agent 架构的长期投入，是核心功能演进的关键节点。  

---

#### **5. Bug 与稳定性**
- **无严重 Bug 报告**。  
- **依赖项安全更新**（见 #594）：  
  - 因 RUSTSEC 零容忍策略，强制升级 `lettre` 和 `diesel` 以修复漏洞。[GitHub #594](https://github.com/qhkm/zeptoclaw/pull/594)  

---

#### **6. 功能请求与路线图信号**
- **近期可能纳入的功能**：  
  - **Middleware Pipeline 完整化**（#593）：Phase 2b 完成后将显著提升 Agent 可扩展性。  
  - **工具触发词标准化**（#571）：类似 Hermes Agent 的设计，可能推广到其他工具。  

---

#### **7. 用户反馈摘要**
- **痛点**：  
  - 用户对 `longterm_memory` 工具的使用场景不清晰（通过 #569/#571 解决后，反馈“引导更直观”）。  
  - 项目定位模糊（#565/#570 修正后，文档表述更聚焦“本地优先 AI 助手”）。  
- **满意点**：  
  - 自动化依赖升级（Dependabot）减少维护负担。  

---

#### **8. 待处理积压**
- **高风险积压**：  
  - **#593 (Phase 2b)**：Agent 架构重构需优先解决，否则可能阻塞后续功能开发。  
- **低风险积压**：  
  - 多个 Dependabot PR 已合并，无需额外关注。  

---

**总结**：ZeptoClaw 在技术债务清理、架构演进和社区沟通方面表现稳健，下一步重点推进 **Agent 中间件 Pipeline 重构**，同时持续保障安全性与文档一致性。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

---

# **ZeroClaw 项目日报 - 2026-05-24**

---

## 1. **今日速览**
- 过去24小时内，ZeroClaw 项目活跃度显著提升：**50条 Issues（新开/活跃42条）** + **50条 PR（待合并37条）**，表明社区开发者和用户持续投入。
- 无新版本发布，但多个关键 Bug 和功能改进正在推进，尤其是 **TUI Agent Chat** 和 **ACP协议扩展** 等核心功能进展显著。
- 评论最多的 Issue（[#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)）涉及 `show_tool_calls` 缺失问题，引发多次讨论，反映用户对工具调用功能的强需求。

---

## 2. **版本发布**
*无新版本发布*

---

## 3. **项目进展**
### **关键合并/关闭的 PR**
- **PR #6848**: [Integration/zeroclaw tui](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)  
  推进了 TUI Agent Chat 的集成，实现终端内交互式聊天界面，支持流式响应、工具调用和审批提示渲染，为 Web 端提供补充体验。
  
- **PR #6882**: [fix(runtime): sanitize compressor media markers before truncation](https://github.com/zeroclaw-labs/zeroclaw/pull/6882)  
  修复运行时压缩器在截断时未正确处理媒体标记的问题，确保转录完整性。

- **PR #6842**: [feat(providers): add NEAR AI Cloud provider](https://github.com/zeroclaw-labs/zeroclaw/pull/6842)  
  新增 NEAR AI Cloud 作为 OpenAI 兼容模型提供商，扩展了生态兼容性。

---

## 4. **社区热点**
### **最活跃 Issues**
#### [#6856: show_tool_calls is missing from [channel]](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)
- **痛点**：用户反馈 v3 版本中工具调用详情未在通道中显示，与 v2 行为不一致，影响调试和自动化流程。
- **诉求**：要求恢复类似 v2 的工具调用选项，需尽快修复。

#### [#6127: silent-fallback hardening in gateway](https://github.com/zeroclaw-labs/zeroclaw/issues/6127)
- **安全信号**：网关侧静默回退（silent-fallback）存在风险，需强化运行时和网关的凭证解析一致性，涉及多模块协同。

---

## 5. **Bug 与稳定性**
| **严重度** | **Issue** | **状态** | **关联 PR** |
|-----------|-----------|----------|-------------|
| S2 (退化行为) | [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) | 开放 | 待修复 |
| S1 (阻塞工作流) | [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862) | 开放 | 修复中 |
| S2 (退化行为) | [#6651](https://github.com/zeroclaw-labs/zeroclaw/issues/6651) | 已关闭 | 已解决（矩阵内存泄漏） |

---

## 6. **功能请求与路线图信号**
### **高优先级需求**
- **[Tracker]: TUI Agent Chat (#6824)**  
  结合 PR #6848，终端交互功能可能成为下一版本亮点，尤其适合本地开发者场景。
  
- **[Feature]: ACP协议扩展 (#6820)**  
  支持差异文件编辑和提案对抗，增强协作能力，符合多模态交互趋势。

- **[Feature]: 共享回复消息构造器 (#6883)**  
  重构消息发送逻辑，提升代码可维护性，长期优化方向。

---

## 7. **用户反馈摘要**
- **痛点**：  
  - 工具调用缺失（[#6856]）、配置项无效（[#6877: max_tool_iterations 作用异常）影响调试效率。  
  - 邮件通道默认主题和附件路径问题（[#6512]）导致用户体验割裂。
- **满意点**：  
  - 对新增渠道（如 WeCom AI Bot WebSocket [#6680]）和提供商（NEAR AI Cloud [#6842]）的快速迭代表示赞赏。

---

## 8. **待处理积压**
| **Issue/PR** | **类型** | **状态** | **建议** |
|-------------|---------|----------|---------|
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Channels supervisor crashloops | 阻塞 | 需优先修复配置错误时的优雅退出逻辑 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 批量回滚丢失提交 | 进行中 | 需审计并恢复关键变更 |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | 架构层依赖倒置 | 新提出 | 需评估对运行时的影响 |

---

**总结**：ZeroClaw 在核心功能（TUI/ACP协议）和安全（网关回退）上快速响应，但需关注工具调用等高频痛点。社区活跃度高，版本迭代节奏稳健，下一版本有望聚焦终端交互和多渠道增强。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*