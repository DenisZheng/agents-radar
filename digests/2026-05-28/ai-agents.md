# OpenClaw 生态日报 2026-05-28

> Issues: 382 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-28 00:34 UTC

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

# **OpenClaw 项目日报 - 2026-05-28**

---

## 1. **今日速览**
- **高活跃度**：过去24小时，项目共更新 **382条 Issues（新增/活跃176条，关闭206条）和500条 PR（待合并270条，已合并230条），显示社区贡献者活跃度高。
- **版本发布**：发布两个稳定版 `v2026.5.26` 和 `beta.2`，重点优化了 Gateway 启动性能和回复机制，并修复了 Codex 工具链的若干关键问题。
- **稳定性**：尽管存在大量活跃讨论，但近期无严重崩溃或阻塞性缺陷报告，整体运行平稳。

[GitHub 数据概览](https://github.com/openclaw/openclaw)

---

## 2. **版本发布**
### **v2026.5.26**
- **核心改进**：
  - **Gateway 优化**：启动时避免重复扫描插件、频道、会话、成本警告等模块，减少缓存负载，提升回复可见性与后台任务分离。
  - **Codex 工具修复**：解决 OAuth 路由不一致和原生钩子间歇性不可用的问题。
  - **Telegram 插件修复**：修复插件状态行数硬限制导致的写入锁死问题。
- **破坏性变更**：无重大 API 变更，升级建议通过 `openclaw doctor --check` 检查兼容性。
- **迁移注意事项**：用户需确保环境变量 `OPENAI_API_KEY` 和 `OPENCLAW_VERSION` 正确配置。

[Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26)

---

## 3. **项目进展**
| PR # | 类型 | 内容 | 影响 |
|------|------|-------|-------|
| [PR #87458](https://github.com/openclaw/openclaw/pull/87458) | 性能优化 | 持久化技能提示为内容寻址 blob，减少磁盘冗余 | 提升会话加载与缓存克隆效率 |
| [PR #87463](https://github.com/openclaw/openclaw/pull/87463) | 会话修复 | 统一 OpenAI-Codex 会话路由标识符 | 修复 `doctor --fix` 误报问题 |
| [PR #87374](https://github.com/openclaw/openclaw/pull/87374) | 诊断清理 | 清除过期会话活动痕迹 | 解决 #87310 的会话残留 |

**总结**：本周推进了 **会话状态管理、插件状态存储、性能优化** 三大方向，显著提升了稳定性和资源利用率。

---

## 4. **社区热点**
### **🔥 最活跃 Issues/PRs**
#### **Issue #87395** ([链接](https://github.com/openclaw/openclaw/issues/87395))
- **描述**：原生钩子中继在 v2026.5.26 下间歇性失效，导致内存/文件系统工具阻塞。
- **诉求**：用户反馈工具链可靠性至关重要，尤其在自动化运维场景。
- **进展**：PR #87461 已提交修复，预计下周进入测试。

#### **PR #87455** ([链接](https://github.com/openclaw/openclaw/pull/87455))
- **AI 辅助修复**：修复消息工具仅回复被错误标记为私有最终文本的问题，确保消息可见性。

---

## 5. **Bug 与稳定性**
| Issue # | 问题 | 严重度 | 修复 PR |
|--------|-------|--------|---------|
| [#87317](https://github.com/openclaw/openclaw/issues/87317) | Codex 原生工具钩子不可用 | ⚠️ 阻塞工具链 | ✅ PR #87457 |
| [#86599](https://github.com/openclaw/openclaw/issues/86599) | Windows 本地模型调用阻塞事件循环 | ⚠️ Beta 阻断 | ✅ 进行中 |
| [#87331](https://github.com/openclaw/openclaw/issues/87331) | 升级后 Codex 工具 UUID 陈旧导致中断 | ❗️ 会话状态异常 | ✅ PR #87463 |

---

## 6. **功能请求与路线图信号**
| Issue # | 需求 | 关联 PR | 优先级 |
|--------|-------|---------|--------|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) | 无 AI 网关模式 | ✅ PR #87456（Codex OAuth） | 🟡 P2 |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) | 插件流程生命周期钩子 | ✅ 待评审 | 🟢 P1 |

**趋势**：用户对 **轻量化部署（无 AI）** 和 **插件可观测性** 需求明确，可能纳入 2026.6 版本。

---

## 7. **用户反馈摘要**
- **痛点**：
  - **Telegram 消息缓存锁死** (#87332)：因 `expires_at = NULL` 触发 1000 行硬限制，影响插件写入。
  - **Discord 工具警告吞噬有效回复** (#87451)：用户抱怨工具警告覆盖最终结果，影响调试体验。
- **满意点**：
  - Gateway 启动速度优化 (#v2026.5.26)：减少重复扫描，提升响应速度。

---

## 8. **待处理积压**
| Issue # | 状态 | 提醒 |
|--------|------|------|
| [#87177](https://github.com/openclaw/openclaw/issues/87177) | QQBot 消息重复 | 需验证 PR #87455 的跨渠道修复 |
| [#87016](https://github.com/openclaw/openclaw/issues/87016) | Discord 预检死锁 | 需补充重现步骤 |
| [#87237](https://github.com/openclaw/openclaw/issues/87237) | Zalo 引用元数据缺失 | 需测试 PR 87237 的上下文传递 |

---

**总结**：OpenClaw 在 **性能、稳定性、工具链可靠性** 上取得显著进展，但 **插件状态管理、跨渠道消息一致性** 仍需持续跟进。建议维护者优先处理 Telegram 和 Discord 相关阻塞性问题。

---

## 横向生态对比

---

### **个人 AI 助手/自主智能体开源生态全景分析**  
截至2026-05-28，生态呈现 **“核心工具链优化+多平台适配+插件化扩展”** 三大趋势：  
- **工具链可靠性**（如 OpenClaw、NanoClaw 的会话修复、工具调用问题）与 **跨平台兼容性**（PicoClaw 的 Android/NixOS 支持）是开发者痛点；  
- **插件/技能管理**（Hermes Agent 的多 Agent 隔离、LobsterAI 的 Kit 商店）和 **生态集成**（Moltis 的 Novita AI、ZeroClaw 的 DeepSeek 兼容）成为项目差异化焦点；  
- 社区反馈强烈指向 **生产环境稳定性**（如 NanoBot、NanoClaw 的调度问题）与 **多模型支持**（IronClaw 的 OAuth、CoPaw 的 GitLab 技能），推动技术栈多元化。  

---

#### **1. 各项目今日活跃度对比**
| 项目          | Issues (新增/活跃) | PRs (待合并/已合并) | Release | 健康度评估 |
|---------------|------------------|---------------------|----------|-------------|
| **OpenClaw**   | 176              | 270/230             | 2        | 🟢 快速迭代 |
| **NanoClaw**   | 4                | 5/4                 | -        | 🟠 质量巩固 |
| **Hermes Agent**| 48               | 44                  | -        | 🟢 快速迭代 |
| **PicoClaw**   | 1（Issue #2958）  | 5（含 TLS 修复）     | nightly  | 🟠 质量巩固 |
| **LobsterAI**  | 2（含登录超时）   | 18                  | v2026.5.27 | 🟢 快速迭代 |
| **ZeroClaw**   | 30（含 RFCs）     | 39（安全策略修复）   | -        | 🟡 快速迭代 |
| **CoPaw**      | 24（含桌面端问题）| 11（三面板 IDE）     | v1.1.9   | 🟢 快速迭代 |

*注：健康度分级 🟢=高活跃度, 🟡=中活跃度, 🟠=稳定性优先*

---

#### **2. OpenClaw 的生态定位**
- **优势**：  
  - **性能与工具链成熟度领先**：v2026.5.26 版本优化 Gateway 启动速度与 Codex 路由，修复 Telegram/Discord 关键阻塞性问题，适合企业级部署；  
  - **社区规模**：GitHub 星标数超 2k，Issues/PR 日均 300+，远超同类（如 NanoClaw 仅 9 PR/日）；  
  - **技术路线差异**：聚焦 **多平台插件架构**（支持 Telegram/Discord/QQBot），而 ZeroClaw 侧重安全与插件系统，Hermes Agent 强在多 Agent 场景。

---

#### **3. 共同关注的技术方向**
| 需求                | 涉及项目                                                                 | 具体诉求                                                                 |
|---------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **工具调用可靠性**   | OpenClaw, PicoClaw, NanoClaw                                             | 修复消息丢失、流控问题，确保长任务连续性                                   |
| **多模型/多提供商** | NanoClaw (#80), IronClaw (#80), Moltis (#451), ZeroClaw (#6059)           | 支持 Anthropic/Gemini/DeepSeek/Novita，避免供应商锁定                      |
| **跨平台兼容性**     | PicoClaw (Android 32位), NanoClaw (NixOS), CoPaw (Tauri 桌面)            | 覆盖边缘设备、Linux/Windows/macOS                                         |
| **插件/技能管理**    | Hermes Agent (多 Agent 隔离), LobsterAI (Kit 商店), ZeroClaw (插件统一化)    | 动态加载、版本控制、权限隔离                                              |
| **OAuth 与登录**    | IronClaw (GSuite), Moltis (Novita)                                        | 第三方登录稳定性，支持企业 SSO                                             |

---

#### **4. 差异化定位分析**
| 项目           | 功能侧重                     | 目标用户                | 技术架构亮点                          |
|----------------|-----------------------------|-------------------------|---------------------------------------|
| **OpenClaw**   | 高性能 Gateway + 多插件生态 | 企业开发者/运维团队      | 基于 Rust/Python，优化 Codex/Telegram 工具链 |
| **Hermes Agent** | 多 Agent 协同 + 安全隔离  | 复杂场景（客服/自动化）  | PostgreSQL Kanban 后端 + 多平台适配器    |
| **ZeroClaw**    | 安全策略 + 插件统一化       | 企业/安全敏感领域        | 防御性设计 + WASM 组件扩展             |
| **NanoClaw**    | 轻量化 + 多提供商支持       | 教育/中小企业           | Docker/NixOS 容器化配置                 |
| **CoPaw**       | 全链路 IDE + 桌面应用       | 开发者/技术团队         | Tauri 原生应用 + Web IDE 三面板协作      |

---

#### **5. 社区热度与成熟度分层**
- **快速迭代阶段**：  
  - **OpenClaw**, **Hermes Agent**, **LobsterAI**, **ZeroClaw**, **CoPaw**  
  *特征*：高频 Issue/PR，新功能发布，社区驱动创新。  
- **质量巩固阶段**：  
  - **PicoClaw**, **NanoClaw**  
  *特征*：聚焦 Bug 修复与兼容性，减少技术债。  
- **稳定期**：  
  - 无（当前生态均处于活跃开发中）。

---

#### **6. 行业趋势信号**
##### **关键洞察**
1. **生产级稳定性优先**：  
   - OpenClaw/PicoClaw 的会话/工具调用修复反映企业用户对 **长任务可靠性** 的需求，需优化流控与错误恢复机制。  
2. **多模型生态爆发**：  
   - Anthropic 政策变更后，NanoClaw (#80)、Moltis (#451)、ZeroClaw (#6059) 等项目的多提供商支持表明，**抗供应商锁定** 已成开源项目核心竞争力。  
3. **插件即服务（PaaS）**：  
   - Hermes Agent 的 Workspace 隔离、LobsterAI 的 Kit 商店、ZeroClaw 的插件统一化，显示 **技能模块化** 是下一代智能体的标配能力。  
4. **跨平台适配刚需**：  
   - PicoClaw（Android）、NanoClaw（NixOS）、CoPaw（Tauri）证明，**终端友好性** 直接影响开源工具采纳率。  
5. **安全与体验并重**：  
   - ZeroClaw 的 ToolAccessPolicy、IronClaw 的 OAuth 回调清理，体现 **企业级安全** 与 **用户引导** 的平衡。  

**对开发者的启示**：  
- 若项目需吸引企业用户，应强化 **稳定性报告**（如 OpenClaw 的崩溃监控）；  
- 若面向生态，优先设计 **插件市场**（如 LobsterAI）与 **多 Provider 抽象层**（如 Moltis）；  
- 跨平台开发需 **渐进式兼容**（如 PicoClaw 的 32位支持 vs 放弃策略）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

---

# **NanoBot 项目日报 - 2026-05-28**

---

## 1. **今日速览**
过去24小时内，NanoBot 保持较高开发活跃度：  
- **代码贡献**：22条 Pull Requests（16条待合并，6条已关闭/完成），涉及MCP工具管理、心跳服务重构、Codex流超时优化等关键改进。  
- **社区互动**：5条新 Issues（4条活跃+1条关闭），其中1条高赞 Issue 展示用户自研 WebUI 面板，引发广泛关注。  
- **稳定性**：无版本发布，但多个 PR 针对 MCP 重连、流超时等核心问题修复，增强鲁棒性。  
**评估**：项目处于功能迭代与稳定性优化并行阶段，社区参与度高。

---

## 2. **版本发布**
> 无新版本发布

---

## 3. **项目进展**
### ✅ **已完成/合并的 PR**  
| PR # | 摘要 | 影响 |
|------|------|------|
| [#4014](https://github.com/HKUDS/nanobot/pull/4014) | 支持 MCP `ToolListChangedNotification`，动态重载工具列表 | 提升 MCP 服务器热更新体验 |
| [#4012](https://github.com/HKUDS/nanobot/pull/4012) | 修复 MCP 重连逻辑，重置 `_mcp_connected` 标志 | 解决会话断开无法重连的关键缺陷 |
| [#4018](https://github.com/HKUDS/nanobot/pull/4018) | Codex 流超时支持环境变量 `NANOBOT_STREAM_IDLE_TIMEOUT_S` | 允许自定义流超时时间，适配不同 LLM 供应商 |

**推进方向**：  
- **MCP 生态强化**：动态工具管理、重连机制优化，为插件化架构铺路。  
- **用户体验**：WebUI 工作区权限控制（[#4007](https://github.com/HKUDS/nanobot/pull/4007)）和会话隔离（[#4016](https://github.com/HKUDS/nanobot/pull/4016)）提升多租户场景适用性。  

---

## 4. **社区热点**
### 🔥 **最活跃的 Issues/PRs**
#### **Issue #1922 [CLOSED] nanobot-webui 自托管面板**  
[GitHub链接](https://github.com/HKUDS/nanobot/issues/1922)  
- **亮点**：用户自研完整 Web 管理面板，获 10 赞，评论讨论功能扩展（如多用户、Cron 作业配置）。  
- **信号**：反映用户对可视化管理的强烈需求，可能推动官方集成或合作。  

#### **PR #4023 heartbeat 服务重构**  
[GitHub链接](https://github.com/HKUDS/nanobot/pull/4023)  
- **背景**：将独立心跳服务改为 cron 自动注册，降低运维复杂度。  
- **社区反馈**：开发者关注轻量化设计，契合 NanoBot “极简” 理念。  

---

## 5. **Bug 与稳定性**
### ⚠️ **报告的问题及修复状态**
| Issue # | 描述 | 严重度 | 修复 PR |
|---------|------|--------|---------|
| [#4013](https://github.com/HKUDS/nanobot/issues/4013) | LLM 流阻塞超 90 秒报错（v0.2.0 回归） | 中 | [#4020](https://github.com/HKUDS/nanobot/pull/4020) 已提交（可配置超时） |
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 会话历史残留孤儿工具结果 | 低 | [#4011](https://github.com/HKUDS/nanobot/pull/4011) 修复 |

**风险提示**：  
- v0.2.0 的流超时问题可能影响本地 LLM（如 Ollama）使用，需尽快通过 PR #4020 提供配置选项。

---

## 6. **功能请求与路线图信号**
### 🔮 **高优先级功能提案**
| Issue/PR | 诉求 | 关联进展 |
|----------|------|----------|
| [#3885](https://github.com/HKUDS/nanobot/issues/3885) | Dream 作业全局开关配置 | PR #3990 正重构单阶段流程，可能整合此配置 |
| [#4029](https://github.com/HKUDS/nanobot/issues/4029) | Dream 模型提供商覆盖支持 | 需评估模型动态加载可行性 |
| [#4022](https://github.com/HKUDS/nanobot/pull/4022) | 模块化系统提示 | 可提升多角色场景灵活性 |

**下一版本候选**：  
- **Dream 内存开关**（[#3885](https://github.com/HKUDS/nanobot/issues/3885) + [#3990](https://github.com/HKUDS/nanobot/pull/3990)）  
- **流超时自定义**（[#4013](https://github.com/HKUDS/nanobot/issues/4013) + [#4020](https://github.com/HKUDS/nanobot/pull/4020)）

---

## 7. **用户反馈摘要**
### 😊 **满意点**
- **WebUI 生态**：自研 `nanobot-webui` 展示强大扩展性（[#1922](https://github.com/HKUDS/nanobot/issues/1922)）。  
- **轻量化设计**：开发者赞赏 heartbeat 重构“减少冗余服务”（[#4023](https://github.com/HKUDS/nanobot/pull/4023)）。

### 👎 **痛点**
- **微信消息限制**：用户反馈微信对话仅返回 10 条消息（[#2772](https://github.com/HKUDS/nanobot/issues/2772)），需升级 API 调用策略。  
- **配置兼容性**：部分用户希望更直观的开关式配置（如 Dream 作业禁用）。

---

## 8. **待处理积压**
### ⏳ **长期未响应项**
| Issue/PR | 状态 | 建议 |
|----------|------|------|
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) | 开放 52 天 | 优先评估微信 API 升级方案 |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | 进行中 | 需跟进 Dream 架构重构进度 |

**提醒**：  
- 微信消息限制问题直接影响用户体验，建议结合 [#4029](https://github.com/HKUDS/nanobot/issues/4029) 的模型覆盖方案一并优化。

--- 

**总结**：NanoBot 在核心稳定性（MCP、流控）与用户体验（配置、可视化）双线并进，社区活跃度显著，需加速微信场景和 Dream 内存配置的落地。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

---

# **Hermes Agent 项目日报 | 2026-05-28**

---

## 1. **今日速览**
- Hermes Agent 过去 24 小时保持极高活跃度：**新增/活跃 Issues 48 条，PRs 待合并 44 条**，社区讨论热烈，主要集中在多 Agent 架构、内存隔离、Telegram 路由及技能管理等领域。
- 无新版本发布，但多个关键功能改进 PR 已合并（如 Slack Socket Mode 支持、多 Bot 网关路由），显著推进生产级能力。
- 用户反馈集中在 **安全性、多平台适配、持久化内存** 等痛点，显示项目正从实验性向企业级部署演进。

---

## 2. **版本发布**
> 无更新，详见下文合并 PR 进展。

---

## 3. **项目进展**
### ✅ **关键合并 PR**
| PR # | 标题 | 核心进展 |
|------|------|----------|
| [#20587](https://github.com/NousResearch/hermes-agent/pull/20587) | feat(slack): add multi-workspace Socket Mode | 支持 Slack 多工作空间 Socket Mode，提升多租户隔离能力 |
| [#29091](https://github.com/NousResearch/hermes-agent/pull/29091) | fix(auxiliary): honor vision fallback chain | 完善视觉模型回退链，避免因配置错误导致的静默失败 |
| [#17809](https://github.com/NousResearch/hermes-agent/pull/17809) | fix(agent): transport-layer hardening | 强化本地推理端口匹配和异常重试机制，提升稳定性 |

**整体推进方向**：  
- **多 Agent 与多平台**（Telegram/Slack/Matrix）的隔离与路由能力增强；  
- **安全与权限**（如 OAuth 工具链修复）；  
- **性能优化**（如 PostgreSQL Kanban 后端稳定化）。

---

## 4. **社区热点**
### 🔥 **高互动 Issues**
#### [#9514](https://github.com/NousResearch/hermes-agent/issues/9514)  
**议题**：`Single-Daemon Multi-Agent with Per-Topic Workspace & Memory Isolation`  
- **评论 11 条，👍 5**，反映用户对 **多 Agent 共享单进程** 的需求强烈。  
- 诉求：希望用单一 Gateway 运行多 Agent，每个 Topic/Thread 拥有独立工作区、内存和人格，减少资源占用。  
- 关联 PR：[#20587](https://github.com/NousResearch/hermes-agent/pull/20587) 已开始支持 Slack 多工作空间，类似逻辑可复用至此场景。

#### [#21574](https://github.com/NousResearch/hermes-agent/issues/21574)  
**议题**：`Per-user agent isolation and identity-based permission system`  
- **评论 8 条**，聚焦 **安全隔离**。  
- 痛点：同一账号下不同用户易受提示词注入攻击，需严格区分身份权限。  
- 信号：可能影响未来 `SOUL.md` 动态化（[#11919](https://github.com/NousResearch/hermes-agent/issues/11919)）和技能版本控制（[#28213](https://github.com/NousResearch/hermes-agent/issues/28213)）的优先级。

---

## 5. **Bug 与稳定性**
### ⚠️ **严重 Bug 列表**
| Issue # | 描述 | 状态 |
|--------|------|------|
| [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) | v0.13.0 后自定义模型配置丢失 | **P1**，已有 PR [#33542](https://github.com/NousResearch/hermes-agent/pull/33542) 尝试修复 Codex 默认模型 |
| [#33502](https://github.com/NousResearch/hermes-agent/issues/33502) | openai-codex 返回 HTTP None 崩溃 | **P3**，需验证是否与 [#33542](https://github.com/NousResearch/hermes-agent/pull/33542) 相关 |
| [#33488](https://github.com/NousResearch/hermes-agent/issues/33488) | kanban dispatch 未传递 max_in_progress 参数 | **P2**，待测试 |

**稳定性评估**：  
- 近期无大规模崩溃报告，但配置类问题（如模型丢失）需紧急跟进。

---

## 6. **功能请求与路线图信号**
### 🚀 **高优先级需求**
| 需求 | 关联 PR/Issue | 可能性 |
|------|----------------|--------|
| **多 Telegram Bot 网关路由** | [#10452](https://github.com/NousResearch/hermes-agent/issues/10452) | ✅ 已合并（如 Slack 多 workspace） |
| **持久化会话内存 + 跨会话检索** | [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) | 🟠 进行中（索引化内存架构 [#22612](https://github.com/NousResearch/hermes-agent/issues/22612)） |
| **动态模型路由（按任务复杂度）** | [#30652](https://github.com/NousResearch/hermes-agent/issues/30652) | 🔵 提案中（需成本权衡） |

**下一版本重点**：  
- 多 Agent 隔离（[#9514]）、权限系统（[#21574]）为 Q3 关键目标。

---

## 7. **用户反馈摘要**
- **满意点**：  
  - 多平台适配器（Slack Socket Mode、BlueBubbles 过滤）提升生产可用性。  
- **痛点**：  
  - 内存限制导致信息丢失（[#32064](https://github.com/NousResearch/hermes-agent/issues/32064)）；  
  - 技能文件无版本控制（[#20352](https://github.com/NousResearch/hermes-agent/issues/20352)）；  
  - 仪表板仅英文（[#9301](https://github.com/NousResearch/hermes-agent/issues/9301)）。  

**典型场景**：  
- 开发者希望 **Kanban 清理误删项目目录**（[#30151](https://github.com/NousResearch/hermes-agent/issues/30151)）——需增加回收站或确认步骤。

---

## 8. **待处理积压**
| Issue/PR | 状态 | 提醒 |
|---------|------|------|
| [#18092](https://github.com/NousResearch/hermes-agent/issues/18092) | 自演进引擎提案 | 技术债务，需评估与 [#11919](https://github.com/NousResearch/hermes-agent/issues/11919) 协同 |
| [#33314](https://github.com/NousResearch/hermes-agent/issues/33314) | 更新后技能漂移检测 | 用户主动需求，需结合 [#28213](https://github.com/NousResearch/hermes-agent/issues/28213) 实现 |

---

**总结**：Hermes Agent 处于快速迭代期，社区反馈推动多 Agent、安全、跨平台三大支柱，需在稳定性与功能扩展间平衡。建议优先跟进内存隔离（[#9514]）和权限系统（[#21574]）的落地进度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

---

# **PicoClaw 项目日报（2026-05-28）**

---

## **1. 今日速览**
- **活跃度**：项目保持较高活跃度，过去24小时内新增4个Issues、6个PR，其中1个已合并（含夜间构建发布）。  
- **核心进展**：重点修复了MQTLS安全配置问题、工具调用丢失问题（Issue #2958），并增强了频道动态头部支持（PR #2696）。  
- **社区参与**：开发者贡献积极，多个关键修复和功能增强进入代码审查阶段。  

---

## **2. 版本发布**
### **nightly: v0.2.9-nightly.20260527.28ec5793**  
- **更新内容**：基于`main`分支的自动化构建，包含未合并的代码变更。  
- **破坏性变更**：无公开记录，需测试验证稳定性。  
- **迁移建议**：生产环境建议使用稳定版，nightly build需谨慎测试。  
🔗 [Release Notes](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)  

---

## **3. 项目进展**
#### **合并/关闭的 PR**
- **[PR #2853] feat(pico): add ChatStream support for real-time token streaming**  
  作者: loafoe | 状态: 已合并  
  - 实现 pico 频道的实时流式响应支持，提升 WebSocket 客户端的交互体验。  
  - 关键点：引入 `streamer` 跟踪机制，集成 `ChatStream` API。  
  🔗 [PR链接](https://github.com/sipeed/picoclaw/pull/2853)  

#### **待审 PR**
- **PR #2899**: 修复 MQTT 通道 TLS 验证配置漏洞（默认禁用验证→可配置化）。  
- **PR #2696**: 支持 MCP 服务器请求级动态 HTTP 头部注入（通过 `context.Raw` 传递）。  
- **PR #2957**: 修复流式场景下工具调用消息丢失问题（Issue #2958）。  
- **PR #2955/2956**: 修复启动时 PID 文件校验和频道状态合并逻辑缺陷。  

---

## **4. 社区热点**
#### **最受关注的 Issues**
- **[Issue #2958]** [tool_calls messages dropped during consecutive requests via pico channel](https://github.com/sipeed/picoclaw/issues/2958)  
  - **诉求**：连续请求时工具调用消息被丢弃，影响多步任务执行。  
  - **关联 PR**：[#2957](https://github.com/sipeed/picoclaw/pull/2957) 已提交修复方案。  

- **[Issue #2954]** [不支持32位Android系统](https://github.com/sipeed/picoclaw/issues/2954)  
  - **痛点**：Android 兼容性缺失，可能影响移动端用户。  
  - **现状**：暂无修复计划，需评估架构适配成本。  

- **[Issue #2953]** [OpenAI OAuth 空响应问题](https://github.com/sipeed/picoclaw/issues/2953)  
  - **根因**：OAuth 流事件处理逻辑缺陷，导致模型返回空响应。  

---

## **5. Bug 与稳定性**
| **严重性** | **问题描述** | **修复状态** | **链接** |
|------------|--------------|--------------|----------|
| 高 | MQTT TLS 验证硬编码跳过（MITM风险） | PR #2899（进行中） | [#2899](https://github.com/sipeed/picoclaw/pull/2899) |
| 中 | 流式场景工具调用丢失 | PR #2957（进行中） | [#2957](https://github.com/sipeed/picoclaw/pull/2957) |
| 低 | Android 32位系统兼容性问题 | 无响应 | [#2954](https://github.com/sipeed/picoclaw/issues/2954) |

---

## **6. 功能请求与路线图信号**
#### **高优先级需求**
- **模型提供商管理优化**（Issue #2952）：  
  - 需求：模型列表一键添加、API 密钥复用、默认显示已保存提供商。  
  - **关联开发**：尚无直接 PR，UI 层需重构。  
- **MQTT 安全强化**（PR #2899）：  
  - 计划下一版本支持 TLS 配置自定义，平衡灵活性与安全性。  

---

## **7. 用户反馈摘要**
- **痛点**：  
  - 工具调用消息丢失（多步骤任务失败，需频繁重试）。  
  - Android 兼容性缺失，影响终端用户覆盖范围。  
- **满意点**：  
  - 夜间构建快速迭代，开发者对新功能（如流式传输）反馈积极。  

---

## **8. 待处理积压**
- **长期未响应 Issue**：  
  - [#2954](https://github.com/sipeed/picoclaw/issues/2954)（Android 32位支持）：需明确技术可行性。  
- **待合并关键 PR**：  
  - [#2955/2956]（PID 校验与频道状态）：涉及启动稳定性，需尽快审核。  

---

**总结**：PicoClaw 近期聚焦于流式交互安全和工具调用可靠性，社区活跃度高，但部分跨平台兼容性需求仍需投入。建议优先解决工具调用丢失和 TLS 加固问题，以提升核心用户体验。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw 项目日报（2026-05-28）**

---

## **1. 今日速览**  
- **活跃度中等**：过去24小时内，项目收到 **9条PR提交**（其中5条待合并，4条已关闭），**1条Issue关闭**，无新版本发布。  
- **核心问题推进**：多个PR针对跨平台兼容性、工具链稳定性及配置逻辑修复，显示团队在解决长期痛点（如NixOS支持、Teams文件上传）。  
- **社区参与度高**：高优先级Issue（#80）获60+赞同，反映用户对多模型/多提供商支持的强烈需求。  
- **积压清理**：部分低质量PR（如#2577/#2623）被快速关闭，保持代码库整洁。  

---

## **2. 版本发布**  
❌ **无新版本发布**  

---

## **3. 项目进展**  
✅ **关键PR合并与关闭**：  
1. **PR #5** [已关闭] - 修复跨组定时任务因`chat_jid`错误导致的调度失效问题（[链接](https://github.com/qwibitai/nanoclaw/pull/5)）。  
   - **影响范围**：提升多群组场景下任务调用的可靠性。  
2. **PR #2629** [已关闭] - 改进NixOS容器网络配置，改用`--network=host`和`127.0.0.1`网关，解决Docker内部解析失败问题（[链接](https://github.com/qwibitai/nanoclaw/pull/2629)）。  
   - **影响范围**：使NixOS用户无需额外配置即可运行容器化组件。  

🚧 **待合并PR（5条）**：  
- PR #2628: 修复`groups create`命令中`--id`参数被静默覆盖的问题（[链接](https://github.com/qwibitai/nanoclaw/pull/2628)）。  
- PR #2627: 统一MCP添加表情反应的短码与Unicode格式兼容性问题（[链接](https://github.com/qwibitai/nanoclaw/pull/2627)）。  
- PR #2626: 替换Signal服务重启时的静默失败为显式错误提示（[链接](https://github.com/qwibitai/nanoclaw/pull/2626)）。  
- PR #2625: 修正Teams机器人manifest的`supportsFiles: false`硬编码导致文件上传失效（[链接](https://github.com/qwibitai/nanoclaw/pull/2625)）。  
- PR #2624: 引入`McpServerConfig.disabledTools`以按服务器禁用特定工具（[链接](https://github.com/qwibitai/nanoclaw/pull/2624)）。  

---

## **4. 社区热点**  
🔥 **高关注度Issue**：  
- **Issue #80** [已关闭] [多提供商支持] ([链接](https://github.com/qwibitai/nanoclaw/issues/80))  
  - **背景**：Anthropic订阅政策变化导致用户使用受限，开发者提议支持OpenAI、Gemini等替代方案（Opencode等开源竞品）。  
  - **社区反应**：60+赞同，33条评论，用户强调**生态多样性**和**抗风险能力**。  
  - **现状**：需评估技术可行性（如抽象Provider层、适配不同API规范）。  

---

## **5. Bug 与稳定性**  
⚠️ **已知问题与修复进度**：  
| 严重性 | Issue/PR | 问题描述 | 修复状态 |  
|--------|----------|----------|----------|  
| 🔴 高 | PR #2625 | Teams文件上传功能因`supportsFiles: false`失效 | ✅ 修复中（待合入） |  
| 🟡 中 | PR #2627 | MCP表情反应短码与Unicode不兼容 | ✅ 修复中（待合入） |  
| 🟢 低 | PR #2626 | Signal服务重启静默失败 | ✅ 修复中（待合入） |  

---

## **6. 功能请求与路线图信号**  
📌 **潜在下一版本重点**：  
- **多模型/多提供商支持**（Issue #80）：需设计统一的Provider抽象层，兼容OpenAI、Gemini等。  
- **配置灵活性增强**（PR #2624）：允许动态禁用工具，提升插件化能力。  
- **跨平台兼容性优化**（PR #2629）：继续完善NixOS及其他发行版支持。  

---

## **7. 用户反馈摘要**  
💬 **核心痛点提炼**：  
- **稳定性**：跨组任务调度、Signal服务管理等问题影响生产环境可靠性。  
- **兼容性**：NixOS用户抱怨默认网络配置失效，需更透明错误提示（PR #2626）。  
- **生态依赖风险**：Anthropic政策变动引发对单一供应商的担忧（Issue #80）。  

---

## **8. 待处理积压**  
⏳ **需跟进事项**：  
- **Issue #80**：高优先级，需技术方案设计讨论。  
- **待合并PR（5条）**：建议优先处理Teams文件上传（#2625）和表情反应兼容性问题（#2627）。  
- **长期未响应PR #2628**：`--id`参数静默覆盖问题，可能影响用户自定义ID需求。  

--- 

**总结**：NanoClaw近期聚焦**稳定性修复**和**跨平台体验**，但**多生态支持**是下一阶段关键方向。维护者应优先处理社区高共识Issue（如#80）并加速PR合入流程。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# **NullClaw 项目日报 (2026-05-28)**

---

## **1. 今日速览**
过去24小时内，NullClaw 项目保持中等活跃度：  
- **Issues**：3条（2新开/活跃 + 1已关闭），主要集中在 Windows 兼容性和 OpenAI 兼容性问题。  
- **PRs**：4条（2待合并 + 2已关闭），涉及构建修复、线程睡眠逻辑优化和回归测试增强。  
- **无新版本发布**，但关键功能修复持续推进。  
整体健康度良好，社区贡献者积极解决问题（如 #890 的 Windows 网络问题）。

[GitHub Issues/PRs](https://github.com/nullclaw/nullclaw/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+sort%3Aupdated-desc)

---

## **2. 版本发布**
**无新版本发布**。

---

## **3. 项目进展**
### **已合并 PR**
- **[#892](https://github.com/nullclaw/nullclaw/pull/892) [CLOSED]** `test(compat/net): add Windows getAddressList regression tests`  
  - 针对 Issue #890 的 Windows `HostResolutionFailed` 问题，补充了本地 DNS 解析的回归测试，确保未来修复不会回退。  
  - 推动点：验证了 `getAddressListWindows` 运行时修复（commit dfc9f3b）的有效性。

- **[#891](https://github.com/nullclaw/nullclaw/pull/891) [CLOSED]** `fix(providers): preserve curl probe transport failures`  
  - 修复 OpenAI 兼容提供商的健康探测逻辑，避免将底层 Curl 错误（如 TLS、DNS 失败）掩盖为通用错误，提升调试效率。

### **待合并 PR**
- **[#887](https://github.com/nullclaw/nullclaw/pull/887) [OPEN]** Fix build with Zig v0.16 for Win/Linux  
  - 解决 Zig 编译器升级后的跨平台构建问题，需维护者确认兼容性。

- **[#878](https://github.com/nullclaw/nullclaw/pull/878) [OPEN]** `fix(compat): use nanosleep on POSIX in thread.sleep`  
  - 改进线程调度逻辑，避免 `std.Io.sleep()` 的协作式阻塞，可能提升多线程稳定性。

---

## **4. 社区热点**
### **最活跃 Issues**
- **[Issue #890](https://github.com/nullclaw/nullclaw/issues/890)**  
  - **问题**：Windows 下代理 HTTP 请求因 `HostResolutionFailed` 失败，即使使用字面 IP 地址（`curl` 路径有效）。  
  - **背景**：用户反馈网关日志显示 `error.AllProvidersFailed`，影响所有提供商调用。  
  - **关联 PR**：[#892](https://github.com/nullclaw/nullclaw/pull/892) 已补充测试，但需进一步验证修复。

- **[Issue #937](https://github.com/nullclaw/nullclaw/issues/937)**  
  - **诉求**：`compact_context` 标志在配置中声明但未实际生效，可能导致上下文压缩行为未按预期工作。  
  - **潜在影响**：若该功能本应支持，则属于重大缺失；否则仅为文档澄清需求。

- **[Issue #936](https://github.com/nullclaw/nullclaw/issues/936)**  
  - **问题**：自定义 OpenAI 兼容提供商被硬编码回退到 Anthropic 模型，而非查询 `/v1/models` 端点。  
  - **影响**：破坏灵活性，阻碍非 Anthropic 提供商的使用场景。

---

## **5. Bug 与稳定性**
| 严重性 | 问题 | 状态 | 链接 |
|--------|------|------|------|
| **高** | Windows 主机名解析失败 (#890) | 已测试修复（[#892](https://github.com/nullclaw/nullclaw/pull/892)) | [Issue #890](https://github.com/nullclaw/nullclaw/issues/890) |
| **中** | 自定义提供商模型回退 (#936) | 待修复 | [Issue #936](https://github.com/nullclaw/nullclaw/issues/936) |
| **低** | `compact_context` 未生效 (#937) | 待确认意图 | [Issue #937](https://github.com/nullclaw/nullclaw/issues/937) |

---

## **6. 功能请求与路线图信号**
- **优先级最高**：  
  - 修复 Windows 网络兼容性问题（#890）和自定义提供商支持（#936），直接影响核心功能可用性。  
- **长期需求**：  
  - 若 `compact_context` 是预期功能，需实现并文档化（#937）；否则标记为“废弃”。  

---

## **7. 用户反馈摘要**
- **痛点**：  
  - Windows 用户遇到不可预测的 `HostResolutionFailed`，需更清晰的错误提示（如区分 DNS 与连接超时）。  
  - 自定义提供商支持不足，限制多环境部署（如企业内网私有 LLM）。  
- **满意点**：  
  - 对 Curl 错误处理的改进（#891）获得潜在用户认可，因增强了可调试性。

---

## **8. 待处理积压**
- **高优先级**：  
  - [#887](https://github.com/nullclaw/nullclaw/pull/887)（Zig v0.16 构建问题）：需尽快合并以降低维护成本。  
- **需跟进**：  
  - [#936](https://github.com/nullclaw/nullclaw/issues/936)：建议提供临时解决方案（如配置开关禁用回退）。  

---

**总结**：NullClaw 近期聚焦于稳定性和跨平台兼容性，Windows 网络和自定义提供商问题是当前重点。社区响应积极，但需加速 PR 合并以减少技术债。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

### **IronClaw 项目日报 | 2026-05-28**

---

#### **1. 今日速览**  
- 过去24小时项目活跃度显著提升，共更新 **28条 Issues（新开/活跃23条）** 和 **50条 PRs**（待合并21条，已合并29条），无新版本发布。  
- 核心模块 `Reborn` 和 `M2-inbound-workflow`、`M5-events-streaming` 的架构改进占据主导，同时社区对 `GSuite OAuth`、`local-dev capability policy` 等功能的讨论热烈。  
- 稳定性方面，**Nightly E2E测试失败**（Issue #4108），需关注修复进度。

---

#### **2. 版本发布**  
❌ 今日无新版本发布。

---

#### **3. 项目进展**  
✅ **关键合并 PR**：  
- **#4111 [codex] Add GSuite OAuth backend**：实现 Google OAuth 后端，支持回调令牌交换与错误状态映射（[链接](https://github.com/nearai/ironclaw/pull/4111)）。  
- **#4127 [codex] Make local-dev capability policy declarative**：将本地开发权限策略移至 TOML 文件，提升可维护性（[链接](https://github.com/nearai/ironclaw/pull/4127)）。  
- **#4154 feat(shell) add saved output refs for Reborn shell**：优化 Shell 输出捕获机制，支持大文件流式处理（[链接](https://github.com/nearai/ironclaw/pull/4154)）。  

📈 **整体推进**：  
- Reborn 核心功能（如上下文压缩、OAuth 集成、工具链声明式配置）取得实质性进展，为后续生产环境部署铺平道路。

---

#### **4. 社区热点**  
🔥 **高互动 Issue/PR**：  
- **Issue #4115 [UI/UX Issues in Channel Removal Flow]**：移除按钮在微信端显示不直观，用户反馈强烈（[链接](https://github.com/nearai/ironclaw/issues/4115)）。  
- **PR #4144 [codex] Add config for regex skill activation**：新增正则表达式技能激活开关，平衡灵活性与安全性（[链接](https://github.com/nearai/ironclaw/pull/4144)）。  
- **Issue #4111** 因涉及 OAuth 全流程，评论量最多，反映用户对第三方登录稳定性的关注。

---

#### **5. Bug 与稳定性**  
⚠️ **关键问题**：  
1. **Nightly E2E 失败（Issue #4108）**：全链路测试失败，需排查引擎或集成层问题（[链接](https://github.com/nearai/ironclaw/issues/4108)）。  
   - 已有修复 PR 进行中（未合并）。  
2. **DeepSeek API 报错（Issue #3436）**：推理模式触发 400 错误，需验证 Provider 兼容性（[链接](https://github.com/nearai/ironclaw/issues/3436)）。  
3. **本地扩展目录校验缺陷（PR #4158）**：修复不完整本地包目录跳过逻辑（[链接](https://github.com/nearai/ironclaw/pull/4158)）。

---

#### **6. 功能请求与路线图信号**  
🔮 **潜在纳入下一版本的功能**：  
- **Declarative Reborn capability policy（Issue #4120）**：通过 TOML 管理权限策略，已合并至 PR #4127。  
- **Google OAuth refresh & account health（Issue #4113）**：需完善令牌刷新与账户健康检查，可能依赖 #4111 后续迭代。  
- **Regex skill activation（PR #4144）**：用户自定义技能规则需求明确，预计随下个版本发布。

---

#### **7. 用户反馈摘要**  
💬 **痛点与场景**：  
- **登录体验**：GSuite 登录流程复杂化（Issue #4112），用户对“浏览器跳转-回调”步骤提出简化建议。  
- **UI 可见性**：微信端删除按钮设计不佳（Issue #4115），影响操作流畅度。  
- **API 兼容性问题**：DeepSeek 推理模式报错（Issue #3436），开发者需验证多 Provider 适配性。  
- **本地开发效率**：`local-dev-yolo` 工具路径别名需求（PR #4156），提升调试便利性。

---

#### **8. 待处理积压**  
⏳ **长期待响应项**：  
- **OAuth 回调清理（Issue #4160）**：Google 令牌刷新逻辑需跟进（关联 PR #4111）。  
- **背景子代理交付（Issue #4147）**：设计可靠异步完成机制，当前存在竞态条件风险。  
- **WebChat v2 SSO 迁移（Issue #4116）**：需整合旧版 Google/GitHub/NEAR 登录到 Reborn 新架构。

---

**总结**：今日 IronClaw 在核心架构升级与生态工具链建设上表现强劲，但需优先解决 E2E 测试失败问题并持续优化第三方登录体验。社区对可维护性、权限管理和 UI/UX 的诉求清晰，建议下阶段聚焦生产环境适配与用户场景验证。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

---

### **LobsterAI 项目日报（2026-05-28）**

---

#### **1. 今日速览**
- LobsterAI 今日保持较高活跃度，共提交 **23 个 PR**（其中 **18 条待合并**）、**2 条 Issues 更新**，并发布 **1 个新版本（v2026.5.27）**。  
- 核心功能持续优化：包括媒体生成、协作会话（cowork）体验增强、定时任务模块升级等。  
- 社区反馈聚焦会员登录稳定性与长任务超时问题，需关注用户核心痛点修复进度。  

---

#### **2. 版本发布**
**LobsterAI v2026.5.27**  
🔹 **关键更新**：  
- **媒体生成支持**（feat: media generation support）：集成 Kling V3 视频生成能力，配额授权管理（#2064）。  
- **协作会话预览优化**：支持点击输入框中的图片附件直接预览大图（feat(cowork)）（#2061）。  
- **专家套件商店**：新增 Kit（专家套件）概念，实现多技能打包安装与对话上下文自动注入（#2060）。  
- **稳定性修复**：网关重启逻辑优化、禁用技能提示词同步问题修复等。  
⚠️ **迁移注意点**：无破坏性变更，建议用户更新至最新版本以享受新特性。

---

#### **3. 项目进展**
✅ **已合并 PR**：  
- **#2061** [点击预览图片附件](https://github.com/netease-youdao/LobsterAI/pull/2061)：提升协作会话中图片交互体验，复用现有 `ImagePreviewModal` 组件。  
- **#2063** [回复范围限制到当前回合](https://github.com/netease-youdao/LobsterAI/pull/2063)：修复跨回合消息路由问题，避免历史数据污染。  
- **#1499** [会话裁剪功能](https://github.com/netease-youdao/LobsterAI/pull/1499)：自动清理超长对话历史，适配模型上下文窗口限制。  

📈 **整体推进**：  
- 协作体验、媒体生成、工具集成（Kit/MCP）三大方向同步落地，代码库结构逐步规范化。

---

#### **4. 社区热点**
🔥 **高互动 Issues/PRs**：  
- **Issue #1903 [会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903)**（2条评论）：  
  付费用户反映登录成功率低，可能涉及身份验证服务或配额同步问题，需紧急排查。  
- **PR #2060 [专家套件商店](https://github.com/netease-youdao/LobsterAI/pull/2060)**：  
  评论量虽少但代表核心功能突破——将零散 Skill 整合为可安装的“套件”，提升插件化生态体验。  

---

#### **5. Bug 与稳定性**
🚨 **今日报告问题**（按严重程度排序）：  
1. **[Task timed out] 任务超时长**（Issue #2062）：  
   连续运行任务被强制终止，疑似资源分配或后台调度异常（尚无 fix PR）。  
2. **会员登录失败**（Issue #1903）：  
   影响付费用户使用，需优先验证认证流程（如 Token 刷新机制）。  

---

#### **6. 功能请求与路线图信号**
💡 **潜在纳入下一版本的功能**：  
- **会话裁剪自动化**（PR #1499）：已合并，后续需监控模型兼容性。  
- **专家套件生态**（PR #2060）：需补充文档与测试用例，推动插件市场建设。  
- **定时任务通知优化**（PR #1489/#1490）：本地 macOS 通知渠道改进，提升异步任务感知度。  

---

#### **7. 用户反馈摘要**
📌 **痛点提炼**：  
- **稳定性**：长任务中断（#2062）、会员登录不可靠（#1903）直接影响付费用户体验，需优先解决。  
- **功能需求**：用户对「套件化工具」和「可视化调试」（如 Test Task 按钮，#1486）呼声强烈。  
- **满意度**：媒体生成与协作交互改进（#2061）获积极反馈，证明技术方向正确。  

---

#### **8. 待处理积压**
⚠️ **长期未响应项**：  
- **Issue #1903**（2026-05-07创建）：  
  会员登录问题已两周未闭环，建议结合日志分析身份验证链路。  
- **PR #1501/#1505**（技能列表同步问题）：  
  虽标记为 stale，但涉及用户配置持久化，需尽快合并修复。  

--- 

**总结**：LobsterAI 在功能迭代与工程稳定性上表现活跃，但需加速响应关键业务问题（登录/任务），同时推动套件化生态落地。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# **Moltis 项目日报（2026-05-28）**

---

## **1. 今日速览**  
过去24小时内，Moltis 社区活跃度中等：  
- **新增 Issues 3 条**，包含功能请求、Bug 和商业合作咨询；  
- **合并 PR 2 个**，涉及嵌入维度配置和 Novita AI 集成，显著扩展了功能兼容性；  
- **无新版本发布**，但代码更新稳定推进。  
整体开发节奏正常，用户互动集中在技术细节与生态扩展需求上。

---

## **2. 版本发布**  
**无新版本发布**  

---

## **3. 项目进展**  
### **合并 PR 亮点**  
#### **PR #1074 (已合并)**  
- **功能**：为 OpenAI 兼容的嵌入提供商（如 OpenAI、Cohere）添加可配置的 `dimensions` 参数，支持动态调整维度时自动重建索引（通过 `reindex_on_dim_change` 控制）。  
- **意义**：解决了用户自定义嵌入模型时的灵活性问题，避免手动管理数据索引的复杂性。  
🔗 [GitHub Link](https://github.com/moltis-org/moltis/pull/1074)  

#### **PR #451 (已合并)**  
- **功能**：集成 Novita AI 作为 OpenAI 兼容提供商，支持 Kimi K2.5、DeepSeek-v3.2 和 GLM-5 等模型。  
- **意义**：丰富了多模型选择，开发者可通过环境变量或配置文件快速接入 Novita API。  
🔗 [GitHub Link](https://github.com/moltis-org/moltis/pull/451)  

---

## **4. 社区热点**  
### **Issue #235：Claude Code CLI 交互控制（最高热度）**  
- **背景**：当前框架在子进程调用 Claude Code 时会因非终端检测（`isatty()`）退出交互模式，阻碍多代理协同工作流。  
- **诉求**：需实现 PTY 终端模拟以保持交互性，可能需修改子进程通信逻辑。  
- **讨论**：已有 4 条评论，1 个点赞，用户期待长期解决方案。  
🔗 [GitHub Issue #235](https://github.com/moltis-org/moltis/issues/235)  

---

## **5. Bug 与稳定性**  
### **新报告问题**  
#### **Issue #1077：用户名称一致性校验错误**  
- **现象**：API 返回 `Error: invalid params, user name must be consistent (2013)`，可能源于身份验证逻辑缺陷。  
- **状态**：尚无修复 PR，需进一步复现和日志分析。  
🔗 [GitHub Issue #1077](https://github.com/moltis-org/moltis/issues/1077)  

---

## **6. 功能请求与路线图信号**  
- **Novita AI 集成（PR #451）**：反映用户对多模型支持的强烈需求，未来可能扩展至更多第三方 LLM 提供商。  
- **Claude Code 交互（Issue #235）**：若解决，将增强多代理协作能力，契合开源自治工具链趋势。  
- **嵌入维度动态化（PR #1074）**：为后续向量存储优化铺路，可能影响数据检索性能。  

---

## **7. 用户反馈摘要**  
- **痛点**：  
  - Claude Code 交互限制（Issue #235）直接影响自动化工作流效率；  
  - 嵌入配置灵活性不足（PR #1074 前反馈）曾引发手动管理负担。  
- **满意点**：  
  - Novita AI 快速响应集成（PR #451），展现对生态扩展的积极态度；  
  - 嵌入维度自动化（PR #1074）获开发者认可。  

---

## **8. 待处理积压**  
- **长期未响应 Issue**：  
  - **#235（Claude Code 交互）**：自 2026-02 提出，需评估底层架构改动成本；  
  - **#1077（用户名校验 Bug）**：需优先排查是否影响生产环境。  
- **建议行动**：维护者应分配资源审查高优先级阻塞性问题，并同步路线图更新。  

--- 

**总结**：Moltis 近期聚焦于生态扩展（Novita AI）和内部灵活性（嵌入维度），同时面临关键交互问题（Claude Code）和潜在 Bug 风险。建议平衡短期交付与长期架构优化。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

---

# **CoPaw 项目日报 | 2026-05-28**

---

## 1. **今日速览**
- CoPaw 在过去 24 小时内保持高活跃度，共处理 **40 条 Issues**（新开/活跃: 24，关闭: 16），提交 **26 条 PR**（待合并: 11，已合并: 15），并发布 **2 个新版本**（v1.1.9 正式版及 beta 分支）。
- 社区反馈集中围绕 **时间戳显示、会话恢复、文件下载、多用户管理、模型兼容性** 等核心体验问题，同时涌现大量新功能提案（如 GitLab 技能源、小米 MiMo Token Plan 集成）。
- 开发团队快速响应了多个关键 Bug，包括 Windows 子进程安全策略和 Markdown 渲染问题。

---

## 2. **版本发布**
### v1.1.9 正式版 ([Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9))
#### ✨ 主要更新：
- **新增 Tauri 桌面应用**（macOS & Windows）：支持原生桌面启动与外部链接打开 ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))  
- **Web IDE 三面板布局**：文件树、编辑器、终端协同工作 ([#4677](https://github.com/agentscope-ai/QwenPaw/pull/4677))  
- **增强工具卡片交互**：新增“一键全批准”功能，提升工具审批效率 ([#4701](https://github.com/agentscope-ai/QwenPaw/pull/4701))  

#### ⚠️ 破坏性变更：
- **Windows 子进程策略调整**：移除 `CREATE_NO_WINDOW` 标志以兼容杀毒软件检测（[#4724](https://github.com/agentscope-ai/QwenPaw/pull/4724)）。
- **Markdown 类型注册修复**：解决 Windows 下 SVG 图标渲染问题（[#4718](https://github.com/agentscope-ai/QwenPaw/pull/4718)）。

#### 🔄 迁移建议：
- 升级后需重新检查桌面端外部链接与下载权限配置。

---

## 3. **项目进展**
### ✅ 已合并重要 PR：
| PR 编号 | 内容 | 影响 |
|--------|------|------|
| [#4726](https://github.com/agentscope-ai/QwenPaw/pull/4726) | 完善 README 更新日志，版本号同步到 v1.1.9 | 文档规范化 |
| [#4720](https://github.com/agentscope-ai/QwenPaw/pull/4720) | 消息时间戳格式化 | 对话界面增强 |
| [#4696](https://github.com/agentscope-ai/QwenPaw/pull/4696) | 隐藏 Git 控制台窗口（Windows） | 编码模式稳定性提升 |

---

## 4. **社区热点**
### 🔥 评论最多 Issues：
- **[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)**（63 条评论）：  
  - **诉求**：开放任务列表，鼓励贡献者认领并更新状态，体现社区协作文化。
- **[#4680](https://github.com/agentscope-ai/QwenPaw/issues/4680)**（7 条评论）：  
  - **痛点**：修改技能名称后智能体丢失，需持久化机制改进。
- **[#4732](https://github.com/agentscope-ai/QwenPaw/issues/4732)**（2 条评论）：  
  - **场景**：历史对话排序混乱，需按时间倒序排列，优化常用入口可见性。

---

## 5. **Bug 与稳定性**
| 严重程度 | Issue | 当前状态 | 修复 PR |
|---------|-------|----------|---------|
| 🚨 崩溃 | [#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) (macOS 升级后 SIGSEGV) | 待确认 | 无 |
| 🟠 功能阻塞 | [#4714](https://github.com/agentscope-ai/QwenPaw/issues/4714) (Beta 1 版本任务队列中断) | 已报告 | 无 |
| 🔵 UI 异常 | [#4700](https://github.com/agentscope-ai/QwenPaw/issues/4700) (TabbedEditor 编译失败) | 修复中 | [PR #4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) |
| 🟢 小问题 | [#4731](https://github.com/agentscope-ai/QwenPaw/issues/4731) (浏览器启动失败) | 复现中 | 无 |

---

## 6. **功能请求与路线图信号**
| 需求 | 关联 PR | 优先级 |
|------|---------|--------|
| **GitLab 技能源支持** | [#4719](https://github.com/agentscope-ai/QwenPaw/pull/4719) | 高 |
| **小米 MiMo Token Plan 集成** | [#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) | 高 |
| **RBAC 多用户管理** | [#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702) | 中 |
| **Token 缓存命中率统计** | [#4721](https://github.com/agentscope-ai/QwenPaw/issues/4721) | 低 |

---

## 7. **用户反馈摘要**
- **正面反馈**：  
  - Tauri 桌面应用获得认可，解决了跨平台启动问题 ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))。  
  - “一键全批准”提升工具审批效率（[#4701](https://github.com/agentscope-ai/QwenPaw/pull/4701)）。
- **负面反馈**：  
  - **会话状态丢失**：重启后智能体与历史记录未保留（[#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733)）。  
  - **文件下载延迟**：UI 按钮响应滞后（[#4670](https://github.com/agentscope-ai/QwenPaw/issues/4670)）。  
  - **多用户管理缺失**：企业版需管理员角色控制（[#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702)）。

---

## 8. **待处理积压**
| Issue/PR | 状态 | 提醒 |
|---------|------|------|
| [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) | 定时任务僵尸进程未清理 | 需 APScheduler 内部状态修复 |
| [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) | MiniMax-M2.5 XML 格式兼容性问题 | 需模型输出标准化处理 |
| [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) | 记忆系统「只记录不学习」 | 需提炼逻辑与状态标记 |

--- 

**数据来源**：GitHub Issues/PRs（截至 2026-05-28 23:59 UTC+8）

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

---

# **ZeroClaw 项目日报（2026-05-28）**

---

## 1. 今日速览  
过去 24 小时内，ZeroClaw 项目保持高活跃度：  
- **Issues 更新**：30 条（20 活跃/新开，10 关闭），涉及 Bug、RFC 和增强功能，其中高风险问题占比 40%；  
- **PR 更新**：50 条（39 待合并，11 已合并），主要聚焦工具链修复与安全策略改进；  
- **无新版本发布**，但多个关键 PR 已进入代码审查阶段。  
**健康度评估**：社区参与度高，核心问题（如 DeepSeek API 兼容性、安全策略）正在积极处理，整体进展平稳。

---

## 2. 版本发布  
**无**  

---

## 3. 项目进展  
### ✅ 已合并的 PR 与重大修复  
- **[PR #6980](https://github.com/zeroclaw-labs/zeroclaw/pull/6980)**：修复 DeepSeek 原生工具请求中的 `reasoning_content` 字段丢失问题，确保兼容 API 格式。  
- **[PR #6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920)**：强化 `ToolAccessPolicy` 在工具执行时的防御性过滤，防止未授权工具调用。  
- **[PR #6960](https://github.com/zeroclaw-labs/zeroclaw/pull/6960)**：在 `process_message()` 路径中应用安全策略，覆盖所有内置工具。  
**推进量**：安全性和工具链稳定性显著提升，为 v0.8.1 铺平道路。

---

## 4. 社区热点  
### 🔥 最活跃 Issues  
**[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)**  
- **主题**：DeepSeek-V4 API 格式不兼容，导致推理模式报错，影响模型提供商集成。  
- **评论**：14 条，用户反馈强烈，需紧急修复。  
**[Issue #6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)**  
- **类型**：RFC 提案，讨论运行时凭证边界与隔离默认值，涉及安全与用户体验。  
- **信号**：社区对安全配置透明化需求明确，可能影响后续架构设计。

---

## 5. Bug 与稳定性  
### ⚠️ 高风险问题与修复状态  
| Issue | 严重性 | 组件 | 修复 PR |
|-------|--------|------|--------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | S2（降级行为） | provider (DeepSeek) | **PR #6980** 进行中 |
| [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) | S0（数据泄露风险） | config | 待处理 |
| [#6965](https://github.com/zeroclaw-labs/zeroclaw/issues/6965) | S1（阻塞流程） | runtime (canvas 工具) | 待处理 |
**注**：DeepSeek 兼容性问题已优先修复，其他问题需关注维护者响应速度。

---

## 6. 功能请求与路线图信号  
### 🔮 被纳入下一版本的可能性  
- **RFC #6489**：“Everything is a plugin” 统一插件目录（[Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)）：  
  - 当前分阶段整合渠道、AI 提供商与插件系统，技术债务清理优先级高。  
- **Tracker #6253**：技能支持与 UX 改进（[Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)）：  
  - CLI、加载器、沙箱等场景优化，v0.7.6 衍生需求。  
**结论**：插件统一化和技能体验是 v0.8.x 重点。

---

## 7. 用户反馈摘要  
### 💬 痛点与满意度  
- **DeepSeek 兼容性**：用户抱怨 API 格式不匹配（[#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)），影响生产环境集成。  
- **安全风险**：嵌套 secrets 未脱敏显示（[#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978)），引发安全团队关注。  
- **UI 体验**：WebSocket 聊天失败（[#6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976)）、日志输出混乱（[#6944](https://github.com/zeroclaw-labs/zeroclaw/issues/6944)）需前端优化。  
**满意点**：OAuth 认证修复（[#6908](https://github.com/zeroclaw-labs/zeroclaw/pull/6908)）获开发者认可。

---

## 8. 待处理积压  
### ⏳ 长期未响应项  
- **RFC #6943**：插件系统与 Extism 目标冲突（[Issue #6943](https://wasmtime.org/docs/components/host.html)），需架构决策。  
- **Bug #6964**：Windows 桌面构建资源重复错误（[Issue #6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964)），CI 阻塞需立即修复。  
- **RFC #6971**：安全 UX 提案（[Issue #6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)），涉及安全默认值，需社区投票。  

---

**总结**：ZeroClaw 在核心问题修复与安全加固上进展显著，但需警惕 DeepSeek 兼容性与 Windows 构建卡点。插件统一化与技能 UX 是未来重点方向。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*