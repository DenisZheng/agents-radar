# OpenClaw 生态日报 2026-06-03

> Issues: 454 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-03 00:47 UTC

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

# OpenClaw 项目动态日报 — 2026-06-03

---

## 1. 今日速览

OpenClaw 今日处于**高活跃、高压力**状态。过去 24 小时内 Issues 更新 454 条（新开/活跃 272，关闭 182），PR 更新 500 条（待合并 390，已合并/关闭 110），社区参与度极高。然而，**无新版本发布**，积压的待合并 PR 高达 390 条，显示维护者审查带宽严重不足。大量高优先级 Bug（P1/P1-regression）集中在 session-state 和 message-loss 两个影响域，多个版本回归问题仍未修复，项目整体处于"高吞吐、高债务"状态。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 110 条，以下为其中最重要的几项：

| PR | 状态 | 说明 |
|---|---|---|
| [#89601](https://github.com/openclaw/openclaw/pull/89601) | ✅ 已合并（automerge） | 修复 `hasPollCreationParams` 误判导致的消息发送阻塞——schema 填充的 poll 修饰符不再错误拦截普通 send |
| [#89640](https://github.com/openclaw/openclaw/pull/89640) | 🆕 待合并 | 修复 transcript mirror 失败导致 channel send 丢失（[#89626](https://github.com/openclaw/openclaw/issues/89626)），确保消息投递的持久性 |
| [#89644](https://github.com/openclaw/openclaw/pull

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**生成时间**: 2026-06-03 | **分析周期**: 过去 24 小时 | **数据来源**: 各项目 GitHub 仓库

---

## 1. 生态全景

2026年6月3日，个人AI助手/自主智能体开源生态处于**高活跃、高分化**的繁荣期。第一梯队的 OpenClaw、NanoBot、Hermes Agent 三个项目单日合计处理 Issue 更新超550条、PR 更新超610条，社区参与度极高，但也暴露出维护者审查带宽严重不足的通病。第二梯队的 IronClaw、ZeroClaw、CoPaw(QwenPaw) 项目在安全加固、模型兼容性、核心架构重构等深水区密集推进，多个项目处于关键版本发布前夜。从技术路线上看，生态已从早期"能不能用"进入"好不好用、安不安全"的质量竞争阶段——安全审计（IronClaw C1-C6、QwenPaw 6项安全Issue）、Provider 兼容性适配、上下文压缩与记忆检索成为最集中的技术攻坚方向。工具链层面，MCP 生态全面渗透至各主流项目，但连接稳定性、Provider碎片化、安全边界模糊仍是社区最集中的痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 | 一句话评价 |
|---|---|---|---|---|---|
| **OpenClaw** | 454 (↑272 ↓182) | 500 (⏳390 ✅110) | 无 | ⚠️ 高吞吐高债务 | 核心参照项目，积压390个PR，维护带宽不足 |
| **NanoBot** | 10 (↑7 ↓3) | 28 (⏳10 ✅18) | 无 | ✅ 健康 | 渠道扩展+WebUI修复双线并进，合并节奏快 |
| **Hermes Agent** | ~50 (↑45) | ~50 (⏳39) | 无 | ⚠️ 中等 | 桌面端稳定性+P1安全Bug待解 |
| **PicoClaw** | 3 (↑2 ↓1) | 14 (⏳9 ✅5) | Nightly | ✅ 较小活跃 | 智谱/WebSocket/goroutine泄露修复同日内闭环 |
| **NanoClaw** | 1 | 7 (⏳3 ✅4) | 无 | ⚠️ 中低活跃 | 安全修复+渠道扩展，社区互动偏弱 |
| **NullClaw** | 1 (Issue) | 1 (PR待审) | 无 | ✅ 低维护 | PII精度修复，低流量正常维护 |
| **IronClaw** | 29 (↑27 ↓2) | 50 (⏳19 ✅31) | 无 | ⚠️ 高活跃高负债 | Reborn子智能体安全审计(7个P2 Bug)集中爆发 |
| **LobsterAI** | 0 | 50 (⏳3 ✅47) | 无 | ✅ 高效集成 | 47个PR集中合并，MCP/安全/IM/Batch全面铺开 |
| **CoPaw (QwenPaw)** | 48 (↑26 ↓22) | 32 (⏳23 ✅9) | v1.1.11b1 bump | ⚠️ 中等 | 6项安全审计+AgentScope 2.0迁移，配置丢失回归待修 |
| **ZeroClaw** | 49 (↑34 ↓15) | 50 (⏳33 ✅17) | v0.8.0-beta-2 | ✅ 里程碑 | zerocode TUI+multi-agent runtime重大发布 |

> **Tier 1 (极高活跃)**: OpenClaw（454/500）
> **Tier 2 (高活跃)**: ZeroClaw（49/50）、CoPaw（48/32）、IronClaw（29/50）、NanoBot（10/28）
> **Tier 3 (中等活跃)**: PicoClaw（3/14）、NanoClaw（1/7）、Hermes Agent（~50/~50）
> **Tier 4 (低活跃)**: NullClaw（1/1）

---

## 3. OpenClaw 在生态中的定位

### 规模对比

OpenClaw 以单日 **454 条 Issue 更新、500 条 PR 更新**的吞吐量，遥遥领先于生态中所有其他项目。其 Issue 活跃度是第二名 ZeroClaw 的 9 倍以上，PR 活跃度是第二名 LobsterAI 的 10 倍。这种规模优势确立了 OpenClaw 作为**事实上的核心参照项目**地位。

### 优势与劣势分析

| 维度 | OpenClaw 现状 | 对比观察 |
|---|---|---|
| **社区规模** | 绝对领先，吸引了最多的贡献者和用户 | 但也导致维护者审查带宽严重不足（390个待合并PR） |
| **技术路线** | 全功能覆盖，从多渠道到session-state管理极其全面 | 全而不精，session-state / message-loss 等核心Bug为P1级且未修 |
| **质量信号** | —— | ZeroClaw的WASI插件化、QwenPaw的AgentScope 2.0架构迁移显示出更深层的架构思考 |
| **版本节奏** | 今日**无新版本发布** | ZeroClaw同日发布v0.8.0-beta-2重大版本，OpenClaw在版本交付上落后 |

### 关键差距

OpenClaw 当前最大的挑战是 **"高吞吐、高债务"的恶性循环**：390个积压PR意味着大量社区贡献被悬置，而P1/P1-regression级别的 session-state 和 message-loss Bug尚未解决。相比之下，NanoBot 以 1/50 的规模实现了更快的合并节奏和更高的维护响应率。对于潜在贡献者而言，NanoBot 的 PR review SLA 可能更有吸引力，而 OpenClaw 的规模则更适合寻求最大用户触达的项目集成方。

---

## 4. 共同关注的技术方向

以下技术需求在多个项目中同步涌现，代表行业共性挑战：

### 方向一：MCP 工具链稳定性与安全管理（涉及 6 个项目）

| 项目 | 具体诉求 |
|---|---|
| **NanoBot** | MCP 服务器连接随机断开（#4168），需要自动重连机制 |
| **NanoBot** | 子 Agent 无法继承 MCP 工具（#4166） |
| **LobsterAI** | MCP npx 启动路径解析优化，减少重复安装开销（PR #2091） |
| **IronClaw** | host-MCP 传输层修复 + Notion/GSuite OAuth 凭证复用（PR #4354） |
| **ZeroClaw** | Channel-served agents 绕过 per-agent tool allowlist（PR #7063，安全修复） |
| **CoPaw** | MCP 配置 API 验证异常返回错误码不当（#4913） |

**共识**: MCP 生态已进入从"能用"到"可靠用"的深水区，连接容错、安全边界、凭证管理是最紧迫的三个子方向。

### 方向二：Provider/模型兼容性适配（涉及 5 个项目）

| 项目 | 具体诉求 |
|---|---|
| **NanoBot** | 图片生成 API 的 `response_format` 参数不兼容（#4167） |
| **PicoClaw** | 智谱 GLM-5 errorCode 1210 未识别导致图片请求失败（#2943，已修） |
| **IronClaw** | Claude Opus 4.7/4.8 因 temperature 参数被拒（#4334） |
| **ZeroClaw** | DeepSeek-V4 thinking mode 格式不兼容（#6059）；Kimi-code streaming+tools 报错（#5600，2个月未修） |
| **CoPaw** | OpenAI SDK 拒绝非标参数（如 DashScope enable_search）（PR #4689） |

**共识**: 随着模型生态碎片化加剧，各 Provider 的 API 差异（参数弃用、thinking mode、工具调用格式）已成为最大的适配成本来源。

### 方向三：上下文压缩与记忆管理（涉及 4 个项目）

| 项目 | 具体诉求 |
|---|---|
| **Hermes Agent** | Per-model/per-provider 压缩阈值覆盖（#18733） |
| **Hermes Agent** | Router 场景下上下文压缩动态重预算（#37719） |
| **NanoBot** | 轻量级 RAG 记忆检索（PR #4109 已合并） |
| **CoPaw** | 无损上下文压缩 DAG-based Summarization（#4551） |
| **IronClaw** | 压缩摘要重试幂等性修复（PR #4370） |

**共识**: 1M+ 上下文窗口模型的普及使"一刀切"的压缩策略不再合理，按模型/场景精细化管理成为刚需。

### 方向四：安全加固（涉及 5 个项目）

| 项目 | 具体诉求 |
|---|---|
| **Hermes Agent** | API Server 中继未脱敏 Provider 错误（CVSS 7.1，#37733） |
| **IronClaw** | Reborn 子智能体安全审计系列（C1-C6，6个Issue） |
| **CoPaw** | 6项安全审计集中报告（未认证修改设置、ToolGuard绕过、路径遍历等） |
| **NanoClaw** | 容器 Dockerfile 命令注入防护（CWE-78，PR #2538） |
| **ZeroClaw** | Tool allowlist 绕过修复（PR #7063） |

**共识**: 安全已从"附加项"变为"必选项"，各项目的安全审计深度和响应速度将成为用户信任的关键分水岭。

### 方向五：多渠道/IM 生态扩展（涉及 5 个项目）

| 项目 | 具体诉求 |
|---|---|
| **NanoBot** | Napcat (QQ) 通道（PR #4146）、邮件附件支持（PR #4162） |
| **PicoClaw** | 微信渠道图片请求兼容性（#2943） |
| **CoPaw** | 微信/企业微信定时任务投递修复（PR #4883）、元宝频道 proto 文件缺失（PR #4899） |
| **IronClaw** | Slack Reborn 最终回复交付（PR #4321） |
| **LobsterAI** | IM Bot 管理 UI 重设计（PR #2025）、钉钉/飞书/QQ 多实例校验（PR #1464） |

**共识**: 国内 IM 生态（微信/QQ/钉钉/飞书）的适配需求持续旺盛，海外则聚焦 Slack/Telegram/Discord。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 | 关键差异点 |
|---|---|---|---|---|
| **OpenClaw** | 全功能个人AI助手平台 | 追求功能全面性的高级用户 | 全栈覆盖，session-state为核心 | 生态最大但债务最重 |
| **NanoBot** | 轻量级多渠道Agent框架 | 需要快速部署的开发者 | 渠道矩阵丰富，WebUI体验好 | 合并节奏最快，维护响应最积极 |
| **Hermes Agent** | 桌面端AI助手 | 需要本地桌面体验的用户 | Desktop+Gateway双进程架构 | 桌面端体验最完整，跨设备同步是最大痛点 |
| **PicoClaw** | 嵌入式/轻量Agent运行时 | 嵌入式设备/测试场景用户 | Go语言，WebSocket协议层 | 协议层设计最规范，goroutine泄露修复体现工程素养 |
| **NanoClaw** | 容器化Agent运行时 | 需要容器隔离部署的企业用户 | Docker容器+插件系统 | 安全加固（CWE-78）体现企业级安全意识 |
| **NullClaw** | PII脱敏专用工具 | 需要数据脱敏的用户 | Zig语言，正则引擎 | 专注PII脱敏单一领域，精度迭代 |
| **IronClaw** | 企业级多Agent运行时 | 企业/团队协作场景 | Reborn子系统+Loop架构 | 子智能体安全审计最系统（C1-C6），架构复杂度最高 |
| **LobsterAI** | 网易有道出品的全功能AI助手 | 国内用户，尤其教育/办公场景 | Electron桌面端+Cowork多Agent | 国内IM生态覆盖最全，安全监控插件化 |
| **CoPaw (QwenPaw)** | 阿里云Qwen生态Agent | Qwen模型用户 | AgentScope框架+Tauri桌面端 | AgentScope 2.0迁移是最大技术变量 |
| **ZeroClaw** | 终端原生Agent体验 | 开发者/终端用户 | Rust+TUI(zerocode)+WASI插件 | 终端体验最创新，WASI插件化面向未来 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代期（高活跃 + 新功能密集合并）

| 项目 | 特征 |
|---|---|
| **LobsterAI** | 47个PR集中合并，MCP/安全/IM/Cowork全面铺开，处于功能爆发期 |
| **ZeroClaw** | v0.8.0-beta-2里程碑发布（zerocode TUI + multi-agent runtime），架构升级期 |
| **CoPaw** | AgentScope 2.0迁移PR审核中，安全审计集中爆发，版本号已bump至v1.1.11b1 |
| **NanoBot** | 渠道扩展（QQ/邮件附件）+ RAG记忆检索 + WebUI修复，功能快速丰富 |

### 🔧 质量巩固期（高活跃 + 大量Bug修复/安全加固）

| 项目 | 特征 |
|---|---|
| **OpenClaw** | 390个PR积压，P1 Bug未修，处于"高吞吐、高债务"状态，急需质量冲刺 |
| **IronClaw** | 7个P2 Bug集中报告，Reborn子智能体安全审计（C1-C6）+ Loop架构审计（L1-L11），系统性质量加固 |
| **Hermes Agent** | 桌面端稳定性修复（fd泄漏、更新UI误导）+ P1安全Bug，可靠性提升期 |

### 📐 架构演进期（中等活跃 + 深层架构重构）

| 项目 | 特征 |
|---|---|
| **NanoClaw** | 插件系统落地（PR #1193积压2个月后合并）+ 容器安全修复，架构扩展期 |
| **PicoClaw** | WebSocket协议层完善（turn completion信号）+ streaming配置化，协议标准化期 |

### 💤 低维护/休眠期

| 项目 | 特征 |
|---|---|
| **NullClaw** | 单一PII精度修复，低流量正常维护 |
| **TinyClaw / Moltis / ZeptoClaw** | 过去24小时无活动 |

---

## 7. 值得关注的趋势信号

### 趋势一：MCP 生态从"接入"走向"治理"

MCP 已不再是差异化功能，而是各项目的**标配基础设施**。但今日数据显示，社区反馈已从"能不能连"转向"连了稳不稳、安不安全"。NanoBot 的随机断连、IronClaw 的 host-MCP 传输修复、ZeroClaw 的 tool allowlist 绕过，共同指向一个趋势：**MCP 治理层（连接池管理、安全策略、凭证隔离）将成为下一个技术竞争焦点**。

> **对开发者的建议**: 如果你的项目正在接入 MCP，不要只关注工具发现和调用，应提前设计连接容错、权限隔离和凭证管理方案。

### 趋势二：模型兼容性正在成为最大的隐性成本

今日至少 5 个项目报告了 Provider 兼容性问题，且 ZeroClaw 的 Kimi-code 问题已持续 2 个月未解决。随着模型发布节奏加快（Claude Opus 4.7/4.8 弃用 temperature、DeepSeek V4 引入 thinking mode、智谱 GLM-5 新错误码），**各 Provider 的 API 漂移速度已超过 Agent 框架的适配速度**。

> **对开发者的建议**: 在 Provider 适配层引入版本化参数映射和自动降级策略，避免硬编码参数导致模型升级即不可用。

### 趋势三：安全审计正在从"被动响应"转向"主动系统性审计"

IronClaw 的 C1-C6 子智能体安全审计、CoPaw 的 6 项安全 Issue 集中报告，都体现了**系统性安全审计**的趋势。这不再是"发现一个修一个"的模式，而是对攻击面的完整梳理。ZeroClaw 的 tool allowlist 绕过修复（高危 P1）也说明，Agent 的工具调用链路与安全策略的一致性验证是下一个安全深水区。

> **对开发者的建议**: 建立 Agent 安全审计清单（工具注入、路径遍历、凭证泄露、PII脱敏精度），在每次重大功能发布前执行系统性安全评估。

### 趋势四：终端/桌面体验正在成为差异化竞争新战场

ZeroClaw 的 zerocode TUI、Hermes Agent 的 Desktop+Gateway 双进程、CoPaw 的 Tauri 桌面端、LobsterAI 的 Electron 桌面端——**至少 4 个项目在同步投入桌面/终端体验**。这与早期 Agent 项目"重后端、轻前端"的倾向形成鲜明对比，说明社区已认识到**交互体验是用户留存的关键**。

> **对开发者的建议**: 如果你的 Agent 项目仍只有 CLI 或 Web 界面，考虑投入终端 TUI 或轻量桌面客户端的开发，这将成为用户选择的重要决策因素。

### 趋势五：多 Agent 协作从概念走向工程化落地

ZeroClaw 的 multi-agent runtime（v0.8.0-beta-2）、IronClaw 的 Reborn 子智能体安全审计（C1-C6）、LobsterAI 的 Cowork 多智能体批量删除（PR #2095）、NanoClaw 的运行时自循环防护（PR #2674）——**多 Agent 协作不再是 POC 阶段，而是进入了工程化、安全化、可运维化阶段**。

> **对开发者的建议**: 多 Agent 系统的核心挑战已从"能不能 spawn"转向"如何保证子 Agent 的安全隔离、生命周期管理和故障隔离"，建议参考 IronClaw 的 C1-C6 审计框架设计你的多 Agent 安全策略。

---

*本报告由 OWL 基于各项目 GitHub 公开数据自动生成，数据窗口为 2026-06-02 至 2026-06-03。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-06-03

---

## 1. 今日速览

过去24小时内 NanoBot 社区活跃度**极高**：共处理 **10 条 Issue 更新**（7 新开/活跃，3 关闭）和 **28 条 PR 更新**（10 待合并，18 已合并/关闭）。无新版本发布。项目今日的主要推力来自 WebUI 修复、邮件通道增强、MCP 安全加固和会话历史一致性修复，合并节奏快，维护者响应积极。整体健康度：**高活跃、高通勤率**。

---

## 2. 版本发布

无新版本发布，**省略本节**。

---

## 3. 项目进展

今日共有 **18 条 PR 合并或关闭**，以下列出对项目状态有实质推进的关键事项：

### 合并的重要 PR

| # | 标题 | 影响 |
|---|------|------|
| [PR #4146](https://github.com/HKUDS/nanobot/pull/4146) | **feat(channels): 新增 Napcat (QQ) 通道** | 扩展渠道矩阵，支持 OneBot v11 正向 WebSocket 私聊/群聊，填补国内 QQ 生态空白 |
| [PR #4162](https://github.com/HKUDS/nanobot/pull/4162) | **feat(email): 邮件通道支持文件附件** | 邮件通道可携带媒体文件，含数量/大小限制与优雅降级 |
| [PR #4155](https://github.com/HKUDS/nanobot/pull/4155) | **fix(runner): 防止 read_file 卸载循环** | 修复 `read_file` 工具结果被反复持久化-读取的死循环，直接修复 [Issue #4153](https://github.com/HKUDS/nanobot/issues/4153) |
| [PR #4109](https://github.com/HKUDS/nanobot/pull/4109) | **feat: 轻量级 RAG 记忆检索** | 引入本地 embedding 的 RAG 能力，为记忆检索提供语义搜索基础 |
| [PR #4151](https://github.com/HKUDS/nanobot/pull/4151) | **fix(webui): 侧边栏 Chats 组按最近活跃排序** | 修复非项目对话组始终沉底的问题 |
| [PR #4150](https://github.com/HKUDS/nanobot/pull/4150) | **fix(webui): 页面刷新后路由恢复** | 支持 hash 路由持久化，刷新后自动恢复活跃对话 |
| [PR #4149](https://github.com/HKUDS/nanobot/pull/4149) | **fix(webui): 回复复制降级方案** | 浏览器 Clipboard API 不可用时回退到 `execCommand("copy")` |
| [PR #4157](https://github.com/HKUDS/nanobot/pull/4157) | **fix(webui): 启动请求超时限制** | 防止 bootstrap 请求无限等待 |
| [PR #4115](https://github.com/HKUDS/nanobot/pull/4115) | **refactor: WebUI 网关依赖拆分** | 将 HTTP 路由从 WebSocketChannel 中解耦，架构更清晰 |
| [PR #3990](https://github.com/HKUDS/nanobot/pull/3990) | **refactor(dream): 简化 Dream 类为 cron + process_direct** | 用标准 agent loop 替代两阶段 Dream 类，降低复杂度 |

### 整体评估

项目在**渠道扩展**（QQ、邮件附件）、**WebUI 稳定性**（路由、排序、超时、复制）、**核心 runner 修复**（read_file 循环）和**架构重构**（Dream、WebUI 网关）四个维度同步推进。RAG 记忆检索的合并标志着项目开始向语义记忆方向演进。

---

## 4. 社区热点

### 🔥 Issue #4167 — 图片生成与 OpenAI 兼容 API 的 `response_format` 冲突
- **链接**: [HKUDS/nanobot#4167](https://github.com/HKUDS/nanobot/issues/4167)
- **状态**: OPEN | 评论: 2
- **核心诉求**: 使用 Agnes AI 等不兼容 `response_format` 参数的图片生成 API 时，`generate_image` 工具直接报错。用户希望工具能自动适配或跳过不支持的参数。
- **关联**: 与 [Issue #4132](https://github.com/HKUDS/nanobot/issues/4132)（支持自定义图片生成 Provider）形成呼应，共同指向图片生成模块的兼容性问题。

### 🔥 Issue #4006 — 对话历史中存在孤立的 tool result
- **链接**: [HKUDS/nanobot#4006](https://github.com/HKUDS/nanobot/issues/4006)
- **状态**: OPEN | 评论: 2
- **核心诉求**: PR #3984 修复了 `tool_call_id` 替换问题后，仍有 `role: "tool"` 消息找不到对应的 `tool_calls` 条目。这会导致严格校验的 API 拒绝请求，轨迹渲染器报错。
- **严重程度**: 高 — 影响与 OpenAI/Anthropic 规范严格兼容的 API 提供商。

### 🔥 Issue #4168 — MCP 服务器连接随机断开
- **链接**: [HKUDS/nanobot#4168](https://github.com/HKUDS/nanobot/issues/4168)
- **状态**: OPEN | 评论: 0
- **核心诉求**: streamable MCP 服务器在随机时间后报 `Session terminated`，重启 nanobot 可恢复。用户需要自动重连机制。
- **关联**: 与 [Issue #4166](https://github.com/HKUDS/nanobot/issues/4166)（子 agent 访问 MCP 服务）共同指向 MCP 连接管理的薄弱环节。

### 🔥 PR #4139 — 云平台部署层（HF Spaces & ModelScope）
- **链接**: [HKUDS/nanobot#4139](https://github.com/HKUDS/nanobot/pull/4139)
- **状态**: OPEN
- **核心诉求**: 提供 HuggingFace Spaces 和 ModelScope Studio 的一方部署支持，统一处理平台检测、数据路径、OAuth 认证、端口绑定等差异。新增 9 个文件 +851 行。
- **意义**: 大幅降低云端部署门槛，对社区推广有重要价值。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高 — 影响核心功能

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 对话历史中孤立 tool result 导致严格 API 拒绝请求 | OPEN | ❌ 无 |
| [#4153](https://github.com/HKUDS/nanobot/issues/4153) | `read_file` 无法恢复已持久化的工具结果 | **CLOSED** | ✅ [PR #4155](https://github.com/HKUDS/nanobot/pull/4155) 已合并 |
| [#4081](https://github.com/HKUDS/nanobot/issues/4081) | `MemoryStore.append_history` 并发写入产生重复 cursor | **CLOSED** | ✅ 已修复 |

### 🟡 中 — 影响特定场景

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| [#4167](https://github.com/HKUDS/nanobot/issues/4167) | 图片生成 API 不兼容 `response_format` 参数 | OPEN | ❌ 无 |
| [#4168](https://github.com/HKUDS/nanobot/issues/4168) | MCP 服务器连接随机断开 | OPEN | ❌ 无 |
| [#4158](https://github.com/HKUDS/nanobot/issues/4158) | WebUI CLI App 在 uv tool 下 pip 安装失败 | OPEN | ✅ [PR #4164](https://github.com/HKUDS/nanobot/pull/4164) 待合并 |

### 🟢 低 — 体验优化

| # | 问题 | 状态 | Fix PR |
|---|------|------|--------|
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Notion MCP 连接失败 | OPEN | ❌ 无（自 2 月 25 日未响应） |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 已有 PR | 信号强度 |
|------|------|---------|----------|
| 支持自定义图片生成 Provider（如 Agnes AI） | [#4132](https://github.com/HKUDS/nanobot/issues/4132) | 无 | 🟡 中 — 与 #4167 共同指向该方向 |
| 子 agent 访问 MCP 服务 | [#4166](https://github.com/HKUDS/nanobot/issues/4166) | 无 | 🟡 中 — 配置项级别改动 |
| 云平台部署层（HF Spaces / ModelScope） | — | [#4139](https://github.com/HKUDS/nanobot/pull/4139) OPEN | 🟢 强 — PR 已就绪 |
| 轻量级 RAG 记忆检索 | — | [#4115](https://github.com/HKUDS/nanobot/pull/4115) 已合并 | ✅ 已完成 |
| WebUI "Fork from here" 用户消息分叉 | — | [#4163](https://github.com/HKUDS/nanobot/pull/4163) OPEN | 🟢 强 — PR 已就绪 |

**判断**: 下一版本极可能包含云平台部署支持（PR #4139 体量已较大且结构完整）和 WebUI 分叉功能（PR #4163）。图片生成兼容性修复可能需要更多讨论以确定适配策略。

---

## 7. 用户反馈摘要

### 痛点

1. **MCP 生态脆弱**: 用户报告 Notion MCP 长期无法连接（[#1168](https://github.com/HKUDS/nanobot/issues/1168)，已超 3 个月），streamable MCP 随机断连（[#4168](https://github.com/HKUDS/nanobot/issues/4168)），子 agent 无法继承 MCP 工具（[#4166](https://github.com/HKUDS/nanobot/issues/4166)）。MCP 连接管理与容错是用户最集中的痛点。

2. **图片生成兼容性差**: 用户尝试接入 Agnes AI 等第三方图片生成服务时遭遇参数不兼容（[#4167](https://github.com/HKUDS/nanobot/issues/4167)），且缺乏自定义 Provider 配置能力（[#4132](https://github.com/HKUDS/nanobot/issues/4132)）。

3. **对话历史一致性**: 孤立 tool result 问题（[#4006](https://github.com/HKUDS/nanobot/issues/4006)）影响与严格 API 的兼容性，用户已追踪到 PR #3984 修复后仍存在残留问题。

4. **uv tool 安装体验**: 通过 `uv tool install` 安装后，WebUI 的 CLI App pip 安装路径找不到 pip 模块（[#4158](https://github.com/HKUDS/nanobot/issues/4158)），影响现代 Python 工具链用户。

### 满意点

- 邮件通道持续增强（附件支持合并），用户对渠道扩展反响积极。
- WebUI 修复节奏快（今日合并 5+ 个 WebUI PR），体验问题响应及时。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| # | 标题 | 创建日期 | 未响应天数 | 建议优先级 |
|---|------|----------|------------|------------|
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Nanobot 连接 Notion MCP 失败 | 2026-02-25 | **98 天** | 🔴 高 — 超 3 个月无回复，用户已验证 Claude 可正常连接，问题在 nanobot 侧 |
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 对话历史孤立 tool result | 2026-05-26 | **8 天** | 🔴 高 — 影响 API 兼容性，已有 2 条评论讨论 |
| [#4168](https://github.com/HKUDS/nanobot/issues/4168) | MCP 服务器随机断开 | 2026-06-02 | **1 天** | 🟡 中 — 新报告，但 MCP 连接稳定性是系统性问题 |
| [#4139](https://github.com/HKUDS/nanobot/pull/4139) | 云平台部署层 | 2026-06-01 | **2 天** | 🟡 中 — 大型 PR，需要 review 资源 |

---

> **日报生成时间**: 2026-06-03
> **数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库
> **分析周期**: 过去 24 小时

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-06-03

---

## 1. 今日速览

Hermes Agent 今日处于**高活跃维护期**：过去 24 小时内 Issues 与 PR 各更新约 50 条，其中 45 条 Issue 处于新开/活跃状态，39 条 PR 待合并。无新版本发布。项目今日明显聚焦于**桌面端稳定性修复**（macOS 安装/更新流程、Windows 安装权限、Gateway 可靠性）和**配置/架构类技术债务**（SessionDB 可插拔化、云同步、IPv6 双栈）。P1/P2 级 Bug 密度较高，社区对跨设备配置同步、模型压缩阈值精细化等需求持续升温。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的条目

| # | 类型 | 说明 |
|---|------|------|
| [#37011](https://github.com/NousResearch/hermes-agent/issues/37011) | Bug 已关闭 | **文件描述符泄漏**导致 Gateway 在约 12 小时后耗尽 fd 限制（2560），所有平台静默失败。根因是 adapter sqlite3 连接在重连失败后未关闭（v0.15.0/0.15.1 引入）。此 Issue 已关闭，表明对应的修复 PR 已合并。 |
| [#37522](https://github.com/NousResearch/hermes-agent/issues/37522) | Bug 已关闭 | **Desktop 更新后显示安装界面**误导用户以为是重装循环。Issue 已关闭，对应修复 PR 应已合并。 |
| [#35825](https://github.com/NousResearch/hermes-agent/issues/35825) | 已关闭（无效） | 测试 Issue，已标记无效关闭。 |
| [#36625](https://github.com/NousResearch/hermes-agent/issues/36625) | 已关闭（无效） | 测试 Issue，已标记无效关闭。 |
| [#36196](https://github.com/NousResearch/hermes-agent/issues/36196) | Feature 已关闭 | MiniMax M3 模型支持请求，已关闭（可能已有其他 PR 跟进或合并）。 |

**关键修复已落地的方向：**
1. **Gateway 长期运行稳定性** — 文件描述符泄漏问题的关闭意味着 v0.15.x 系列的一个重要可靠性隐患已修复，对部署为 launchd/systemd 服务的用户影响显著。
2. **桌面端更新体验** — Desktop 更新后 UI 误导问题已修复，改善 macOS 用户留存体验。

---

## 4. 社区热点

### 热度最高的 Issues

**[#20510](https://github.com/NousResearch/hermes-agent/issues/20510) — Cloud Sync for All Hermes Configurations（👍9，评论5条）**
这是今日反应最多的 Issue。用户希望在多设备间同步 `~/.hermes/` 下的所有配置、profile、skills、sessions 和 memory。👍 数最高（9），表明这是社区中广泛存在的真实痛点，尤其对在 PC 和笔记本间切换的用户。属于基础设施级需求，实现复杂度较高。

**[#23717](https://github.com/NousResearch/hermes-agent/issues/23717) — RFC: Pluggable SessionDB Provider — PostgreSQL, MySQL, and Beyond（评论4条）**
这是一个架构级别的 RFC。用户指出当前 SQLite state.db 在热更新时会出现竞争甚至损坏，提议将 SessionDB 抽象为可插拔 Provider。讨论涉及更新时的死锁风险，是企业级部署和多人协作场景的核心诉求。

**[#18733](https://github.com/NousResearch/hermes-agent/issues/18733) — Per-model/per-provider compression threshold overrides（评论5条，👍3）**
随着 1M+ 上下文窗口模型（DeepSeek V4 Flash、Gemini 2.5 Pro 等）的普及，单一全局 `compression.threshold` 已不满足需求。用户希望按模型/Provider 设置不同阈值。这是一个紧跟模型生态变化的合理诉求。

**[#36934](https://github.com/NousResearch/hermes-agent/issues/36934) — /steer 被高安全模型（Opus 4.8）标记为 prompt injection（评论3条）**
当工具批次运行中收到 `/steer` 指令时，Claude Opus 4.8 等模型将其误判为 prompt injection。这反映了 Hermes 工具通道交付机制与模型安全防御的冲突，随着模型安全等级提高可能越来越常见。

### 热度最高的 PR

**[#37734](https://github.com/NousResearch/hermes-agent/pull/37734) — Gateway 可靠性加固：流挂起看门狗、Telegram 轮询心跳、supervised tasks、launchd 重启节流**
综合性修复 PR，针对 Gateway 作为常驻服务时"进程活着但不干活"的多个故障模式。包含隔离的回归测试，属于高价值的维护性工作。

**[#37747](https://github.com/NousResearch/hermes-agent/pull/37747) — fix: 允许 Desktop WebSocket 在远程绑定的 Origin**
Hermes Desktop 连接绑定到 Tailscale/LAN IP 的远程 gateway 时因 Origin 校验失败而被拒绝，此 PR 修复了基础设施工件了 #37405。

**[#37548](https://github.com/NousResearch/hermes-agent/pull/37548) — fix: 尊重 model.context_length 配置**
修复了用户显式配置 `model.context_length` 时被忽略的问题（关联 Issue #8430），对精确控制上下文窗口的场景至关重要。

---

## 5. Bug 与稳定性

### P1（严重）

| Issue | 描述 | 修复状态 |
|-------|------|----------|
| [#37733](https://github.com/NousResearch/hermes-agent/issues/37733) | **[安全]** API Server 将未脱敏的 Provider 错误信息中继给已认证 HTTP 客户端（CVSS 7.1/10.0） | 🔴 无 PR |
| [#37677](https://github.com/NousResearch/hermes-agent/issues/37677) | **超大图片（>8000px）永久砖化对话线程** — 仅检查字节数未检查像素维度，导致进入历史后每个后续请求都失败 | 🌡️ 可能关联 PR（与 #25837 讨论相关，但未见明确修复 PR） |
| [#7725](https://github.com/NousResearch/hermes-agent/issues/7725) | **session_search 挂起 5+ 分钟** — 升级后超时/取消机制不生效 | 🔴 无修复 PR |

### P2（中高）

| Issue | 描述 | 修复状态 |
|-------|------|----------|
| [#37751](https://github.com/NousResearch/hermes-agent/issues/37751) | Desktop 与 Gateway 双写 config.yaml 冲突，导致模型切换失效（中文 Issue） | 🔴 无 PR |
| [#37743](https://github.com/NousResearch/hermes-agent/issues/37743) | Telegram `enabled_toolsets` 按 topic 配置被静默忽略 | 🔴 无 PR |
| [#37731](https://github.com/NousResearch/hermes-agent/issues/37731) | Windows 安装器因子进程持有文件导致"Access denied" | 🔴 无 PR |
| [#37689](https://github.com/NousResearch/hermes-agent/issues/37689) | 确定性失败任务被 recompute_ready 无限复活，绕过 failure_limit | 🔴 无 PR |
| [#37662](https://github.com/NousResearch/hermes-agent/issues/37662) | httpx/OpenAI SDK IPv6 挂起（缺少 happy-eyeballs） | 🔴 无 PR |
| [#37399](https://github.com/NousResearch/hermes-agent/issues/37399) | Desktop 远程模式在非 loopback 绑定时拒绝 Electron WebSocket Origin | 🟢 PR #37747 已开放，正在修复 |
| [#37609](https://github.com/NousResearch/hermes-agent/issues/37609) | Skills & Tools 切换静默失败（platform-restricted toolset） | 🔴 无 PR |
| [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) | /steer 被 Opus 4.8 误判 prompt injection | 🔴 无 PR |

### P3（一般）

| Issue | 描述 | 修复状态 |
|-------|------|----------|
| [#37718](https://github.com/NousResearch/hermes-agent/issues/37718) | macOS Desktop 语音聊天因 Helper/Setup 缺少麦克风授权而失败 | 🟢 PR #37745 已开放 |
| [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) | 桌面端聊天转录闪烁、滚动位置跳动（👍2） | 🔴 无 PR |

---

## 6. 功能请求与路线图信号

### 明确的功能请求

| Issue | 功能 | 信号强度 |
|-------|------|----------|
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | 多设备云同步配置（👍9，评论5） | 🔥🔥🔥 强烈需求 |
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | 可插拔 SessionDB Provider（PostgreSQL/MySQL） | 🔥🔥 企业级需求，RFC 级别 |
| [#18733](https://github.com/NousResearch/hermes-agent/issues/18733) | Per-model 压缩阈值覆盖（👍3，评论5） | 🔥 中短期可实现 |
| [#37709](https://github.com/NousResearch/hermes-agent/issues/37709) | Snap 打包（严格沙箱） | 🔥 Linux 用户分发需求 |
| [#37663](https://github.com/NousResearch/hermes-agent/issues/37663) | 桌面客户端连接已有 VPS 实例 | 🔥 远程工作流需求 |
| [#37719](https://github.com/NousResearch/hermes-agent/issues/37719) | Router 场景下的上下文压缩动态重预算 | 🔥 高级用户场景 |
| [#37744](https://github.com/NousResearch/hermes-agent/issues/37744) | SessionModelPool 集成进 async_call_llm | 🟡 架构改进，Noah Research 内部 |
| [#37746](https://github.com/NousResearch/hermes-agent/issues/37746) | 将 git 等依赖打包进 .hermes（参考 PR #37660 的 UV 思路） | 🟡 可移植性改进 |

### 判断

- **最可能进入下一版本的方向**：Desktop 安装/更新体验（已有多个活跃 PR）、`model.context_length` 修复（PR #37548 待合并）、Gateway 可靠性（PR #37734 待合并）。
- **中期架构方向**：可插拔 SessionDB 和云同步是社区呼声最高的基础设施需求，但实现复杂度高，可能以 RFC 形式推进。
- **模型生态适配**：Per-model 压缩阈值和 Router 动态重预算是随着 1M+ 上下文模型普及而日益紧迫的适配需求。

---

## 7. 用户反馈摘要

### 真实痛点

1. **跨设备工作流断裂**：用户在 PC 和笔记本间切换时，所有配置、会话、记忆都绑定在本地 `~/.hermes/`，无法同步。这是社区反应最强烈的需求（#20510，👍9）。

2. **桌面端体验不稳定**：
   - macOS 更新后显示安装界面，让用户误以为陷入重装循环（#37522，已修复）
   - Windows 安装器因文件锁定导致"Access denied"（#37731）
   - 聊天转录闪烁、滚动跳动（#37549）
   - 语音聊天因授权配置缺失直接失败（#37718，修复中）

3. **Gateway 长期运行不可靠**：文件描述符泄漏导致约 12 小时后所有平台静默失败（#37011，已修复），流挂起、Telegram 轮询中断等问题（#37734，修复中）。

4. **配置管理混乱**：Desktop UI 和 Gateway 双写 config.yaml 导致矛盾状态（#37751），Skills & Tools 切换静默失败（#37609）。

5. **模型生态适配滞后**：
   - 1M+ 上下文模型普及后，单一全局压缩阈值不再合理（#18733）
   - Router 场景下不同后端有不同上下文窗口，但压缩预算只算一次（#37719）
   - IPv6 双栈环境下 httpx 挂起（#37662）

### 满意信号

- 文件描述符泄漏（#37011）和 Desktop 更新 UI 问题（#37522）的快速关闭表明维护团队对高优先级 Bug 的响应速度较好。
- 多个 PR 包含回归测试（#37734、#37749），显示代码质量意识在提升。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于关键状态，建议维护者关注：

### 长期未响应的重要 Issue

| Issue | 创建日期 | 状态 | 说明 |
|-------|----------|------|------|
| [#7725](https://github.com/NousResearch/hermes-agent/issues/7725) | 2026-04-11 | P1 Bug，开放中 | session_search 挂起 5+ 分钟，已近 2 个月未解决 |
| [#13260](https://github.com/NousResearch/hermes-agent/issues/13260) | 2026-04-21 | Bug，开放中 | Gemini Code Assist HTTP 404，持续约 5 周 |
| [#8515](https://github.com/NousResearch/hermes-agent/issues/8515) | 2026-04-12 | P2 Bug，开放中 | Smart routing 丢弃 cheap_model 的 api_mode，约 7 周 |
| [#18158](https://github.com/NousResearch/hermes-agent/issues/18158) | 2026-05-01 | P2 Bug，开放中 | hermes doctor 在非交互环境下找不到 Node（mise/asdf/nvm），约 1 个月 |
| [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) | 2026-05-14 | P2 Bug，开放中 | vision_analyze 砖化会话（与 #37677 重复/关联），约 3 周 |

### 待合并的关键 PR

| PR | 创建日期 | 说明 |
|----|----------|------|
| [#37734](https://github.com/NousResearch/hermes-agent/pull/37734) | 2026-06-03 | Gateway 可靠性加固（P1 级别修复），含回归测试 |
| [#37747](https://github.com/NousResearch/hermes-agent/pull/37747) | 2026-06-03 | Desktop 远程连接 Origin 修复 |
| [#37548](https://github.com/NousResearch/hermes-agent/pull/37548) | 2026-06-02 | model.context_length 配置尊重 |
| [#17124](https://github.com/NousResearch/hermes-agent/pull/17124) | 2026-04-28 | Honcho fallback 修复，已开放超 1 个月 |

### 安全相关待处理

| Issue | 说明 |
|-------|------|
| [#37733](https://github.com/NousResearch/hermes-agent/issues/37733) | API Server 中继未脱敏 Provider 错误（CVSS 7.1），今日新报告，尚无修复 PR |

---

> **项目健康度评估**：Hermes Agent 今日处于**高活跃但高负债**状态。维护团队在桌面端和 Gateway 可靠性方面推进积极（多个 PR 当日开放），但 P1/P2 Bug 积压较多，安全类 Issue 响应需提速。社区对云同步和 SessionDB 可插拔化的需求强烈，建议以 RFC 形式正式纳入路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-06-03

---

## 1. 今日速览

今日 PicoClaw 开发活动高度活跃，共产生 **3 条 Issue 更新**（新开 2 / 关闭 1）、**14 条 PR 更新**（待合并 9 / 已合并/关闭 5），并推送了一个 **Nightly Build**。提交集中在几个核心开发者手中，多个 bug fix 在同日内完成从提 PR 到合并的全流程，迭代节奏紧凑。值得关注的事务：① 智谱 GLM-5 图片请求的参数错误已有针对性修复提案（#2989），并向路由和 session 管理等方向扩展；② WebSocket 协议层新增明确的 agent 处理完成信号（#2984），或影响 WebUI 及相关客户端。

---

## 2. 版本发布

| 版本 | 状态 | 说明 |
|------|------|------|
| `v0.2.9-nightly.20260602.426046fc` (nightly) | 自动化构建 | 不稳定版本，请谨慎使用； changelog 对比 `v0.2.9…main` |

*来源：Latest Release*

> 本次仅为 nightly 构建，尚无正式的稳定版更新记录。下一版本有望合并今日关闭的多个 bug fix，包括智谱错误码识别（#2989）、session goroutine leak 修复（#2986）和重试策略统一（#2991）。

---

## 3. 项目进展（今日合并 / 关闭的 PR）

今日 **5 条 PR 落地或被驳回**，可归纳为以下模块：

| # | 标题 | 类型 | 处理方式 |
|---|------|------|----------|
| [#2989](https://github.com/sipeed/picoclaw/pull/2989) | fix(providers): 识别智谱 error code 1210 | 🐞 Bug Fix | ✅ 合并 |
| [#2991](https://github.com/sipeed/picoclaw/pull/2991) | fix(agent): 统一重试瞬时 LLM HTTP 错误 | 🐞 Bug Fix | ✅ 合并 |
| [#2986](https://github.com/sipeed/picoclaw/pull/2986) | fix(tools): 为 SessionManager 增加 Stop() 防 goroutine 泄露 | 🐞 Bug Fix | ✅ 合并 |
| [#2993](https://github.com/sipeed/picoclaw/pull/2993) | docs(skill): 同名 skill PR | 📄 Docs | ❌ 关闭 |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | Docker Compose privileged 修改 | ✨ Enhancement | ❌ 已标记 stale 后关闭 |

**往前推进的关键点：**

1. **智谱兼容性与健壮性提升** — #2989 将 errorCode `1210` 纳入异常分类，修复了微信渠道图片请求直接失败、不触发回退的老问题（对应 Issue #2943）。
2. **瞬态错误重试策略统一** — #2991 改用 provider error classifier 替代分散的 timeout/network retry 分支，减少"没有备选模型时直接失败"的情况。
3. **SessionManager goroutine 泄露修复** — #2986 补上缺少 shutdown 机制的定时器 goroutine，在频繁创建/销毁 SessionManager 场景（如测试）下降低资源消耗。
4. **一处新 skill 文档提案快速关闭** — #2993 与 #2994 几乎同时出现， #2993 被关闭，说明社区自举文档存在多重/冗余提交，后续仅剩 #2994 继续维护者审阅。

---

## 4. 社区热点

### Issue #2404 — [Feature] 在配置中添加 streaming HTTP 请求支持 ✅ 仍在 Open

- **链接：** [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)
- **数据：** 创建 2026-04-07，最近更新 2026-06-02，**10 条评论**，👍 1
- **诉求分析：** 用户希望像 OpenAI Python SDK 客户端那样，在配置文件中设置 `"streaming": true` 即可向 LLM 后端发起 SSE/流式 HTTP，但目前项目仍需手动设置参数或未稳定支持。评论数量最多，说明该需求仍被持续讨论，属于最受关注的功能请求之一。

### Issue #2984 — Add explicit turn completion signal for Pico WebSocket clients ✅ 新提出

- **链接：** [Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)
- **数据：** 创建 2026-06-02，👍 1，评论数 0
- **诉求分析：** WebSocket 客户端（Web UI / 外部集成）无法确定性判断 agent 是否已完整处理完一条消息。现有事件（message.create/update, typing.start/stop）缺少明确的"turn completion"信号。这是协议层设计问题，若被采纳将影响所有 Pico Protocol 客户端。

### Issue #2943 — 微信渠道图片触发智谱 API error 1210 ✅ 已关闭

- **链接：** [Issue #2943](https://github.com/sipeed/picoclaw/issues/2943)
- **数据：** 创建 2026-05-25，更新 2026-06-02，评论数 1，👍 0
- **热点评述：** 该 Issue 直接推动了今日 PR #2989 的合并，修复速度快，属于"报告 → 定位 → 修复 → 合并"全流程效率较高的典型案例。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重级别 | Issue / PR | 问题简述 | Fix PR | 状态 | 备注 |
|----------|------------|----------|--------|------|------|
| 🔴 **高** | [#2943](https://github.com/sipeed/picoclaw/issues/2943) | 微信图片请求 + 智谱 GLM-5 → error code 1210 直接失败、不回退 | [#2989](https://github.com/sipeed/picoclaw/pull/2989) | ✅ 已合入 | 影响图片多模态功能可用性 |
| 🔴 **高** | — / #2991 (内部优化) | OpenRouter/OpenAI-compatible 500 响应在没有备选模型时直接 fail、不重试 | [#2991](https://github.com/sipeed/picoclaw/pull/2991) | ✅ 已合入 | 瞬态错误导致用户体验中断 |
| 🟡 **中** | — / #2986 | SessionManager 每次 New() 都启动无法退出的 goroutine，造成泄露 | [#2986](https://github.com/sipeed/picoclaw/pull/2986) | ✅ 已合入 | 长期运行或测试场景下资源泄漏 |
| 🟡 **中** | [#2958](https://github.com/sipeed/picoclaw/issues/2958) ↔ [#2987](https://github.com/sipeed/picoclaw/pull/2987) | Streaming 活跃或刚结束时 tool_calls 消息被误过滤 | PR #2987 | ⏳ 待合并 | 可能影响 tool-calling 使用流式输出的场景 |
| 🟡 **中** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) ↔ [#2988](https://github.com/sipeed/picoclaw/pull/2988) | /context 显示压缩阈值始终为 76800 tokens，忽略配置 summarize_token_percent | PR #2988 | ⏳ 待合并 | 可读性/配置预期不一致 |
| 🟡 **中** | [#2972](https://github.com/sipeed/picoclaw/issues/2972) ↔ [#2992](https://github.com/sipeed/picoclaw/pull/2992) | v0.2.9 升级后，新 Web UI 会话因 PromoteAliasHistory 导致历史消息污染新会话 | PR #2992 | ⏳ 待合并 | 影响升级后 Web UI 体验 |
| 🟡 **中** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) ↔ [#2990](https://github.com/sipeed/picoclaw/pull/2990) | Web UI 会话历史仅显示最后一条用户消息，而非完整对话 | PR #2990 | ⏳ 待合并 | 影响用户查阅历史对话 |
| 🟢 **低** | — / #2239 | Docker Compose privileged 修改建议 | — | ❌ 已 stale 关闭 | 需求未被采纳 |

---

## 6. 功能请求与路线图信号

| # | 需求 | 是否有 PR | 信号强度 | 预计纳入可能性 |
|---|------|-----------|----------|----------------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 配置项 streaming 支持 | 无直接 PR | ⭐⭐⭐⭐ | **高** — 通用诉求，评论多，未来版本很可能原生支持 |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) | WebSocket turn completion 信号 | 无直接 PR | ⭐⭐⭐ | **中高** — 协议层问题，涉及 Pico Protocol/Web UI 改造，多客户端受益 |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | picocaw-tracer 调试追踪可视化 UI | PR 已 stale | ⭐⭐⭐ | **中** — 已实现但 stale，需激活或重新审阅 |
| [#2994](https://github.com/sipeed/picoclaw/pull/2994) | Picoclaw-agent skill (自描述 agent skill) | PR 待审 | ⭐⭐ | **待定** — 文档类增强，合并门槛低但优先级未定 |

**观察：** 当前路线图信号集中在 **协议层完善（streaming、turn completion）**、**调试可观测性（tracer）** 和 **生态自描述（skill 文档）** 三个维度，说明项目正从"能用"阶段向流程标准化、可观测化和易用性方向演进。

---

## 7. 用户反馈摘要

以下从今日 Issues 及近期活跃议题中提炼真实痛点与场景：

### 🤕 痛点

1. **多厂商 API 兼容性碎片化**
   - 微信图片 → 智谱 GLM-5 报 errorCode `1210`，不被 error_classifier 识别，无回退机制 → 直接报错给用户。
   - `web_search_preview` 工具类型在部分 OpenAI-endpoint 不被支持（函数式 web_search 兼容性更好 → PR #2951 stale）。
   - Claude Opus 4.7 弃用 temperature 参数，旧配置会触发 400 → PR #2948 stale。

2. **WebSocket/WebUI 交互体验差**
   - 会话升级 v0.2.9 后新会话被老历史污染 (#2972)。
   - /context 显示与实际配置脱节 (#2968)。
   - 完整对话历史缺失，只剩最后一条用户消息 (#2796)。
   - 客户端无法确认 agent 何时完成一次完整响应 (#2984)。

3. **稳定性隐患**
   - goroutine 泄露（SessionManager 无 stop → 已修 #2986）。
   - 瞬态 500 错误直接 fail → 已修 #2991。

### 😊 满意信号

- 用户积极参与功能设计讨论（如 #2404 提出具体配置方案，并引用 Python SDK 等参考实现）。
- 新特性提案者不仅提 Issue，还各自附上了完整 PR，社区有一定自驱动性。

### 🏃 使用场景

- **微信 Bot + 智谱视觉模型**：企业/个人通过微信聊天触发 LLM 多模态理解（图片），需要多厂商 fallback。
- **WebUI 多轮对话**：大量历史记录依赖 Web UI 展示，会话管理稳定性直接影响体验。
- **嵌入式/测试环境**：频繁创建、销毁 SessionManager；goroutine 泄露在嵌入式设备上危害更大。

---

## 8. 待处理积压（提醒关注）

以下长期 stale 或关键但未被及时合入的 PR / Issue，建议维护者优先审阅：

| # | 要点 | 状态 | 建议 |
|---|------|------|------|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Streaming 配置支持，10 条评论 | Open, stale | 是否存在阻塞点？可关闭、认领或发布 plan RFC |
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) | web_search → function type 兼容性 | Open, stale | 通用 API 兼容修复，建议尽快决定取舍 |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) | Claude Opus 4.7 temperature 跳过 | Open, stale | 阻碍特定模型使用，可小修快速合入 |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) | picoclaw-tracer 调试 UI | Open, stale | 亮眼的独立二进制调试工具，可重启评审或拆分采纳 |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | Docker Compose privileged | Closed, stale | 已关闭但社区曾提出，建议说明不被采纳的理由 |

---

### 结论

今日 PicoClaw 处于**高活跃迭代期**：核心 bug（智谱兼容性、goroutine 泄露、瞬态重试）在同一天内完成从报告到合并的全链路。积压中的 stale PR 多涉及 provider-compatibility（Claude、OpenAI web_search），若逐一落地，下一稳定版的多模型兼容性将显著提升。WebSocket 协议层完善（#2984）和 streaming 配置化（#2404）是最值得持续跟踪的路线图信号——一旦落地，将大幅改善 WebUI/客户端集成体验。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**📅 日期：2026-06-03**
**📦 项目：NanoClaw (github.com/qwibitai/nanoclaw)**

---

## 1. 今日速览

NanoClaw 今日呈现**中低活跃度**状态。过去24小时新增 Issue 1 条，合并/关闭 4 个 PR，另有 3 个新 PR 处于待审查状态，无新版本发布。项目的核心开发力量集中在**运行时代码层面的修复与稳定性优化**（容器挂载、运行时消息标准化、Codex 兼容），功能侧也有渠道相关的小幅推进，但整体处于消化积压 PR 而非大规模冲刺的阶段。

| 指标 | 24h 数据 |
|------|---------|
| 新 Issue | 1 |
| PR 活跃 | 7（3 Open / 4 Closed） |
| 新版本 | 0 |
| 评论链 | 极低（多条 PR 评论数为 undefined） |

---

## 2. 版本发布

**无。** 本日无新版本发布。

> 最新 Release 为空，项目处于"代码流动中但未打 tag"的状态。

---

## 3. 项目进展

今日共有 **4 个 PR 被关闭**（merged 或 closed），覆盖安全修复、插件系统、渠道扩展和运行时消息标准化：

### 🔒 安全修复——容器命令注入防护
**PR #2538** **[CLOSED]** 作者: *sebastiondev*
> 为 `buildAgentGroupImage()` 增加输入验证，防止 CVE 类 OS 命令注入（CWE-78）通过精心构造的包名（`packageName`）传入 Dockerfile 模板。
> 🔗 [nanocoai/nanoclaw PR #2538]

**意义：** 这是今日最重要的修复——直接涉及容器逃逸风险，属于高优先级安全加固。

### 🔌 新特性——宿主机插件 Hook 系统落地
**PR #1193** **[CLOSED]** 作者: *cyber-rye*（创建于 03-17，今日终于关闭）
> 新增 `src/plugin-loader.ts`，扫描 `plugins/*/index.js`，在渠道连接后、消息循环前加载插件的 `onStartup(ctx)` / `onShutdown(ctx)` 钩子，插件可借此启动 HTTP 服务或长驻进程。
> 🔗 [nanocoai/nanoclaw PR #1193]

**意义：** 一个**两个月前就提出**的重要扩展能力终于落地。该 PR 的长期积压（已超 2 个月）说明流程存在瓶颈，今日关闭总算让生态扩展能力入仓。

### 🤖 运行时消息标准化 & 防自循环
**PR #2674** **[CLOSED]** 作者: *pinetreelic*
> - 将长时间运行的状态消息标准化为机械标签
> - 增加运行时状态元数据和内部渠道 guard，防止 agent→agent 自循环
> > 通过了 docker agent-runner 的类型检查和测试。
> 🔗 [nanocoai/nanoclaw PR #2674]

**意义：** 直接提升了多 agent / 多频道部署场景下的可靠性，属于"越跑越稳"类基础设施改进。

### 🧩 Feature SKILL——WebChat 渠道
**PR #2069** **[CLOSED]** 作者: *javexed*（创建于 04-28）
> 新增 WebChat 渠道集成（Feature Skill），附带完整 SKILL 文件。
> 🔗 [nanocoai/nanoclaw PR #2069]

**意义：** 扩展了 NanoClaw 的接入形态，对不想依赖 IM 类渠道的用户更友好；同样积压了一个多月。

### 📌 待审查 Open PR 速览
| # | 方向 | 作者 | 说明 |
|---|------|------|------|
| #2187 | 全渠道适配 | *alex-shepel* | CLI channel 平台 ID 命名规则豁免 |
| #2672 | Codex 兼容 | *apparentsoft* | MCP 联合结构 + 代理环境仅 HTTP 传输 |
| #2671 | Bug Fix | *Ari-CMC* | 挂载 inbound attachments 到 agent 容器 |

---

## 4. 社区热点

**本日 Issue 活跃度极低**——唯一新 Issue #2673 创建不到 24h，尚未有评论，本质是一个**嵌入式广告 / 无关内容**（描述是 PNG 教师在手机上查看成绩的图片生成 prompt），与项目核心价值无直接关联。维护者可能需要按 spam/ignore 处理。

PR 方面，今日被合并的 4 个 PR 都**评论数极低**（多处显示 undefined），说明社区反馈回路偏弱，更多是维护者独角戏式推进。

**值得关注的社区信号（反向）：**
- PR #1193 开的最早（03-17）但今天才关——说明部分 PR 长期无人 review，作者可能在反复等待反馈。
- 多个 PR 的 `👍` 数量均为 0——项目的社交互动度偏低，需要更多社区参与激励。

---

## 5. Bug 与稳定性

今日报告或修复的 Bug 按严重程度排序：

### 🔴 高危——命令注入（已修复）
**PR #2538** 已修复 CWE-78 容器 Dockerfile 命令注入漏洞，攻击向量：恶意包名 → Docker 构建参数注入。**状态：fixed & closed。**

### 🟡 中危——Agent 容器附件挂载缺失（有 PR，未合并）
**PR #2671 [Ari-CMC]** 发现 channel adapter 引用的附件目录并未实际挂载进 agent 容器，格式化器也会失败。
> **状态：Open，需 review。** 🔗 [nanocoai/nanoclaw PR #2671]

### 🟠 中危——Codex Provider 兼容 MCP 结构演进（有 PR，未合并）
**PR #2672 [apparentsoft]** Trunk `McpServerConfig` 已演进为 `stdio | http | sse` 联合类型，但 provider 分支仍沿用旧结构；同时修复代理后纯 HTTP 传输场景。
> **状态：Open，与 providers 分支强相关，需维护者确认分支策略。** 🔗 [nanocoai/nanoclaw PR #2672]

### 🟢 低危——运行时自循环（已修复）
PR #2674 已通过内部渠道 guard 解决。

### 🟢 低危——CLI 平台 ID 命名空间不一致（有 PR，未合并）
**PR #2187 [alex-shepel]** CLI 渠道的平台 ID 被不必要地命名空间化；起源于 Issue #2186。
> **状态：Open，逻辑简单，适合快速 review。** 🔗 [nanocoai/nanoclaw PR #2187]

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 方向 | 判断 |
|------|------|------|------|
| 插件系统落地 | PR #1193（closed） | 宿主机扩展生态 | ✅ 已入仓，下一版本必备能力 |
| WebChat 渠道 | PR #2069（closed） | 新接入渠道 | ✅ 已入仓，显著扩展部署场景 |
| 运行时状态标准化 | PR #2674（closed） | 多 Agent 稳定性 | ✅ 越跑越稳，趋势明显 |
| CLI ID 精简 | PR #2187 | 规范化修复 | 🟡 已在社区手排，合并阻力小 |
| HTTP-only MCP 传输 | PR #2672 | 代理/企业场景 | 🟡 取决于 `providers` 分支合并计划 |
| 附件卷挂载 | PR #2671 | 修复运行时断链 | 🟡 纯 bug fix，无争议 |

**路线图判断：** NanoClaw 正在从"能用"走向"好用"——近期的核心主题是**稳定性、安全性与生态可扩展性**（插件、多 CID provider、新社区）。下一版本很可能是一个 **0.x 稳定性大修版**，包装这些已 ready 但尚未 tag 的改进。

---

## 7. 用户反馈摘要

今日**没有**来自真实 Issue 评论的有效反馈（唯一 Issue #2673 高度疑似图片生成型无关内容），且所有已关闭 PR 的评论数均不可用。

从 PR 的 PR 描述中可间接推断的用户痛点：

| 痛点 | 证据 | 代表用户画像 |
|------|------|-------------|
| Agent 无法在运行时拿到附件 | PR #2671（目录未挂载） | 使用 IM 渠道、频繁传文件的用户 |
| 企业代理环境 SSE 被砍断 | PR #2672 | 企业 / VPN 环境下部署的用户 |
| 插件宿主无启动/停止钩子 | PR #1193（已合） | 想跑自定义服务的生态构建者 |
| 包名输入可构建非预期 Docker 命令 | PR #2538 | 安全审计者 / CISO |
| CLI 渠道命名空间处理不一致 | PR #2187 | CLI-only 部署的用户 |

⚠️ **注意：** 强烈建议维护者尽快 triage 掉 #2673（spam），以及考虑引导更多 reviewer 参与 PR review 来打破"独角戏+积压"循环。

---

## 8. 待处理积压（长期未响应）

| # | 类型 | 标题 | 作者 | 创建 | 等待天数 | 建议 |
|---|------|------|------|------|---------|------|
| #2187 | PR | CLI 命名空间 ID 豁免 | alex-shepel | 2026-05-02 | **32 天** | ✅ 简单修复，建议优先 review |
| #2672 | PR | Codex MCP 联合兼容 | apparentsoft | 2026-06-02 | 1 天 | ⚙️ 需确认 `providers` 分支策略 |
| #2671 | PR | Agent 容器附件挂载 | Ari-CMC | 2026-06-02 | 1 天 | ⚙️ 功能修复，无争议 |
| #2673 | Issue | Automated Student Grading System | smartgain2026 | 2026-06-02 | 1 天 | 🗑️ 疑似无关/spam，建议 close |

**维护者行动建议：**
1. **立即：** Close/triage spam-based Issue #2673。
2. **本周：** Review PR #2187（32 天积压）和 PR #2671（功能阻断）。
3. **内环：** 明确 `providers` 分支的合并意图，为 PR #2672 设置清晰的路障或时间线。
4. **流程：** 建立 review SLA（例如 7 天内至少 comment 或 approve/reject），避免未来再出现 >30 天无人响应的 PR。

---

*OWL 日报 · 数据来源：github.com/qwibitai/nanoclaw · 生成时间：2026-06-03*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-06-03

---

## 1. 今日速览

NullClaw 今日活跃度较低，过去 24 小时内新开 Issue 与待合并 PR 各 1 条，无新版本发布。社区动态集中在同一个用户（vernonstinebaker）报告了一条 Bug 并随即提了修复 PR，整体呈典型的"发现问题 → 快速跟进修复"节奏。项目持续处于正常维护状态，无积压风险。

---

## 2. 版本发布

无新版发布。

---

## 3. 项目进展

今日无 PR 合并或关闭。当前有一件待合并 PR：

| # | 状态 | 说明 |
|---|------|------|
| [#945](https://github.com/nullclaw/nullclaw/pull/945) | 🟡 OPEN | `fix(redaction): reject ISO date/time patterns as false-positive phone matches` — 为 `src/redaction.zig` 中的 `matchPhone` 函数新增 `isDateLike()` 守卫，排除 ISO 日期/时间格式被误识别为电话号码。待审查后合并。 |

> **评估**：该 PR 针对的是一个已知 Issue（见下节），合并后将提升 PII 脱敏模块的准确性，消除系统时间戳被错误遮盖的问题。

---

## 4. 社区热点

**Issue #944 — PII Redactor 将日期时间输出误判为电话号码**

- 🔗 [nullclaw/nullclaw#944](https://github.com/nullclaw/nullclaw/issues/944)
- 👍 0 · 评论 0
- **背景**：自 commit `41cdb493`（2026 年 5 月起）默认开启 `enable_pii_redaction`，系统在 Agent 执行 `date` 等命令时，将数字序列中的时间戳识别为电话号码并替换为占位符，导致输出不可读。
- **诉求**：用户希望脱敏引擎能够区分日期/时间格式与真实电话号码，避免命令输出被破坏。
- **社区响应**：同一作者随后提了 PR #945 进行修复，目前等待维护者审查合并。

> **分析**：此问题与系统提示中插入日期时间的方式直接相关——`appendDateTimeSection` 会输出 `YYYY-MM-DD hh:mm` 格式，其数字结构与电话号码高度相似。核心诉求是提升正则匹配的精度，而非关闭脱敏功能。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|----------|-------|------|--------|
| 🟡 中 | [#944](https://github.com/nullclaw/nullclaw/issues/944) | PII 脱敏器将 Agent 命令输出中的日期时间误当电话号码遮盖 | ✅ [#945](https://github.com/nullclaw/nullclaw/pull/945) 已开放待合并 |

> **评估**：此 bug 属于**误报 (false positive)**，不影响核心功能运行，但会导致 Agent 执行时间相关命令时输出异常，对用户调试和日志记录造成困扰。修复方案已明确，合并后将显著降低误报率。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。

当前活跃的开发方向可见于已提 PR：
- **脱敏引擎精度提升** — PR #945 表明团队正在迭代 PII 重写模块的规则引擎，后续可能继续扩展排除列表（如 IP 地址、UUID 等常见误报源）。

---

## 7. 用户反馈摘要

- **痛点**：启用 PII 脱敏后，Agent 执行系统命令（如 `date`）的输出被不当地遮盖，严重影响可读性和调试效率。
- **使用场景**：用户在 Agent 工作流中需要依赖命令原始输出进行判断或日志记录，但重写规则过于激进。
- **满意度**：Bug 报告措辞专业、附带 commit 编号和触发路径，且报告者自行提了修复 PR，体现了社区成员的积极贡献意愿。

---

## 8. 待处理积压

| 项目 | 状态 | 备注 |
|------|------|------|
| [#944](https://github.com/nullclaw/nullclaw/issues/944) Issue + [#945](https://github.com/nullclaw/nullclaw/pull/945) PR | 双双 OPEN | Bug 与修复均已提上，等待维护者审查合并。无长期积压风险。 |

> **提醒**：建议维护者尽快审查 PR #945，修复效果明确、变更范围小，合并后可同步关闭 Issue #944。

---

*数据来源：GitHub API · 报告生成时间：2026-06-03*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-06-03

---

## 1. 今日速览

IronClaw 今日处于**高活跃开发期**，过去 24 小时内共有 29 条 Issue 更新（27 新开/活跃，2 已关闭）和 50 条 PR 更新（19 待合并，31 已合并/关闭）。项目核心工作集中在 **Reborn 子系统的安全性加固（Reborn-subagent C1–C6）、Loop 架构分层修复（Reborn-loop L1–L11）、以及多 Provider OAuth 凭证链路的可靠性修复**。同时 QA 团队针对 Qwen3.6-35B 和 MiniMax-M2.7 两个模型集中报告了 7 个 P2 Bug，显示跨模型兼容性测试正在成为新的关注焦点。无新版本发布，项目仍处于快速迭代积累阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 质量高、覆盖面广，以下是关键进展：

### Reborn 多 Provider OAuth 链路打通（已合并）

过去 24 小时内，serrrfirat 连续合并了四个 PR，系统性修复了 Reborn 运行时中 Gmail、Google Calendar、Notion 三大集成的 OAuth 凭证问题：

- **[PR #4345 — Wire Notion DCR OAuth for Reborn WebUI](https://github.com/nearai/ironclaw/pull/4345)**：将 Notion DCR OAuth 接入 Reborn WebChat v2 服务组合，派生稳定的 loopback 回调地址，解决了 Notion 扩展在 WebUI 中无法完成认证的问题。
- **[PR #4346 — Fix Gmail OAuth auth gate requirements](https://github.com/nearai/ironclaw/pull/4346)**：修复认证失败后结构化凭证要求的传递链路，确保 Gmail 认证失败能正确映射为 Google OAuth 重定向而非静默报错。
- **[PR #4347 — Fix Reborn Gmail OAuth auth gate scopes](https://github.com/nearai/ironclaw/pull/4347)**：补充 Google Provider 的最小权限 scopes，对齐 Gmail 和 Calendar 的运行时凭证契约，使 auth gate 能启动正确的 OAuth 流程。
- **[PR #4337 — Fix Google OAuth prompts for runtime auth gates](https://github.com/nearai/ironclaw/pull/4337)**：新增静态 Google OAuth gate provider，支持从 TurnGateResume 直接创建/复用 OAuth 流，而非降级为手动 token 输入，同时修复了 PKCE 在 secret-store fallback 中的加载路径。

> **意义**：这四个 PR 一次性打通了 Gmail、Google Calendar、Notion 三套 OAuth 在 Reborn 运行时中的完整链路，是"Reborn 生产就绪"路线图上的关键里程碑。

### 可靠性与数据一致性修复（已合并）

- **[PR #4371 — Fix Codex ChatGPT Reborn empty responses](https://github.com/nearai/ironclaw/pull/4347)**：修复 Codex ChatGPT SSE 解析的边界条件（data-only type 事件、`[DONE]` 信号、`response.output_text.done` 等），恢复 `to=<tool>` 调用语法解析能力，解决 ChatGPT 在 Reborn 路径下返回空响应的问题。
- **[PR #4370 — Fix compaction summary retry idempotency](https://github.com/nearai/ironclaw/pull/4370)**：修复压缩摘要持久化成功后、`BeforeModel` 检查点写入失败场景下的重试幂等性问题（#4309）。
- **[PR #4357 — Fix local-dev Reborn memory mount](https://github.com/nearai/ironclaw/pull/4357)**：修复本地开发环境下 `/memory` 挂载问题，使 Reborn 内置 memory 工具拥有真正的结构化记录后端，消除 libSQL 缺失时的静默降级。
- **[PR #4374 — Accept memory_search query aliases](https://github.com/nearai/ironclaw/pull/4374)**：接受 `q`/`text`/`pattern` 等别名作为 `builtin.memory_search` 的查询参数，并使输入 schema 与运行时解析器对齐。

### Reborn 触发器能力（已合并）

- **[PR #4318 — Add trigger first-party capabilities](https://github.com/nearai/ironclaw/pull/4318)**：新增 `builtin.trigger_create` / `builtin.trigger_list` / `builtin.trigger_remove` 三个内置能力，建立 Reborn 调度触发器的第一方接口。

### 待合并的重要 PR

| PR | 作者 | 关键内容 |
|---|---|---|
| **[#4373](https://github.com/nearai/ironclaw/pull/4373)** | henrypark133 | 修复子智能体安全与能力门控（#4351），要求 safety context 贯穿 prompt 路径 |
| **[#4372](https://github.com/nearai/ironclaw/pull/4372)** | henrypark133 | HTTP 凭证载体的 zeroize-on-drop（#4222） |
| **[#4354](https://github.com/nearai/ironclaw/pull/4354)** | serrrfirat | 修复 hosted-MCP 传输 + Notion/GSuite OAuth 凭证复用 |
| **[#4321](https://github.com/nearai/ironclaw/pull/4321)** | danielwpz | Slack Reborn 最终回复交付 |
| **[#4375](https://github.com/nearai/ironclaw/pull/4375)** | henrypark133 | 触发器轮询生命周期接入运行时组合 |

---

## 4. 社区热点

### Reborn Subagent 安全加固系列（#4348–#4353）— 社区核心议题

今日由 **henrypark133** 一口气开出 6 个 Issue（C1–C6），构成迄今最完整的 Reborn 子智能体安全审计清单：

- **[#4348](https://github.com/nearai/ironclaw/issues/4348) C1**: 持久化门分辨率存储 + RestartReconciler 实现 + 墓碑路径
- **[#4349](https://github.com/nearai/ironclaw/issues/4349) C2**: SubagentCompletionObserver 精确一次交付 + 安全元数据恢复
- **[#4350](https://github.com/nearai/ironclaw/issues/4350) C3**: Spawn 补偿 + 父→子取消传播
- **[#4351](https://github.com/nearai/ironclaw/issues/4351) C4**: 能力表面 + 安全门控 — 失败闭合注入扫描、family-id-keyed 谓词
- **[#4352](https://github.com/nearai/ironclaw/issues/4352) C5**: 子智能体溯源写入审计信封和 effect kinds
- **[#4353](https://github.com/nearai/ironclaw/issues/4353) C6**: 卫生性改进 — 就绪检查准确性、驱逐可观测性、配置旋钮

> **分析**：这 6 个 Issue 系统性覆盖了子智能体生命周期从创建→执行→完成→补偿→审计→运维的完整路径。背后诉求是**将 Reborn 子智能体从"功能可用"提升至"生产级安全可靠"**。PR #4373（待合并）直接响应 C4，表明社区已快速跟进。

### Reborn Loop 架构修复系列（#4358–#4368）— L1–L11

同样是 henrypark133 开出的 11 个 Issue，从门回放验证（L1）到预算准确性（L7）、取消传播（L8）、压缩检查点（L9）、循环策略（L10）、架构卫生（L11）全面覆盖。

> **分析**：这是对 Reborn Loop 驱动器的**全深度分层审计**，背后诉求是消除所有"沉默绕过"路径。每个 Issue 都对应若干 production 级别的真实故障模式（如门控重放信任过期上下文、预算并发预留硬失败、取消仅合作式等），结构化地推进将使 Reborn Loop 从"基本工作"走向"可信任"。

### Claude Opus 4.7/4.8 不可用（#4334）— 兼容性痛点

- **[Issue #4334](https://github.com/nearai/ironclaw/issues/4334)**：IronClaw 始终发送 `temperature` 参数，而 Claude Opus 4.7/4.8 拒绝任何非默认的 `temperature`/`top_p`/`top_k`，导致每次请求返回 400 错误。

> **分析**：这是一个典型的**模型兼容性适配缺口**。随着 Anthropic 新模型发布，IronClaw 的请求参数构建逻辑需要支持按 model/provider 条件排除已废弃参数。此 Issue 目前尚无关联 fix PR，建议优先级提升。

---

## 5. Bug 与稳定性

按严重程度排列：

### P2 — QA Bug Bash 集中发现（7 个，均针对 Qwen3.6-35B-A3B-FP8 / MiniMax-M2.7）

| 问题 | Issue | 状态 | Fix PR |
|---|---|---|---|
| Agent 思维链暴露给用户并卡死 | [#4341](https://github.com/nearai/ironclaw/issues/4341) | OPEN | ❌ |
| Agent 将用户消息镜像为其回复 | [#4344](https://github.com/nearai/ironclaw/issues/4344) | OPEN | ❌ |
| MCP 集成因驱动失败不可用 | [#4343](https://github.com/nearai/ironclaw/issues/4343) | OPEN | ❌ |
| 认证 Modal 刷新后持续弹出并阻塞聊天 | [#4342](https://github.com/nearai/ironclaw/issues/4342) | OPEN | ❌ |
| 内容字段空校验错误阻止消息提交 | [#4340](https://github.com/nearai/ironclaw/issues/4340) | OPEN | ❌ |
| 有效能力 schema 被拒绝（InvalidInvocation） | [#4339](https://github.com/nearai/ironclaw/issues/4339) | OPEN（MiniMax-M2.7） | ❌ |
| 断开连接状态显示误导性执行驱动错误 | [#4338](https://github.com/nearai/ironclaw/issues/4338) | OPEN（MiniMax-M2.7） | ❌ |

> **注**：以上 7 个 Bug 均报告于 2026-06-02，来自同一轮 QA Bug Bash，标注 `bug_bash_P2`。尚未有 fix PR。

### 高影响兼容性问题

- **[#4334](https://github.com/nearai/ironclaw/issues/4334) Claude Opus 4.7/4.8 unusable**：所有请求因 temperature 参数被拒。**High Impact** — 完全不可用，尚无 Fix PR。

### 回归保障

- **[PR #4336](https://github.com/nearai/ironclaw/pull/4336)**（待合并）：修复 WebUI v2 pending 消息角色元数据丢失和按文本去重导致的乐观气泡错误匹配问题，覆盖 QA 报告的部分 UI 问题。

### CI/CD

- **[#4108](https://github.com/nearai/ironclaw/issues/4108)**：Nightly E2E 持续失败，最近一次失败于 2026-06-02 04:44 UTC，涉及 Full E2E / E2E (v2-engine) job。此 Issue 已存在 6 天，需排查测试框架或基础设施问题。

---

## 6. 功能请求与路线图信号

从今日活动可以提取以下路线图信号：

1. **Reborn 子智能体生产就绪**（高确定性）：C1–C6 安全审计 Issue + 对应 PR #4373 已在推进中，预计将成为下阶段合并重点。

2. **多 Provider OAuth 统一凭证管理**（高确定性）：今日已合并 4 个 OAuth 修复 PR，PR #4354（hosted MCP + Notion/GSuite 凭证复用）待合并。从趋势看，统一的第一方产品身份验证凭证管理是 Reborn 的核心基础设施方向。

3. **Slack Reborn 完整交互链路**（中确定性）：PR #4321（Slack Reborn final reply delivery）为 XL 规模、低风险，待合并。完成后 Slack 将成为 Reborn 首个完整支持异步最终回复交付的 channel adapter。

4. **WebUI v2 消息时序与稳定性**（中高确定性）：PR #4356（keep assistant replies last）和 PR #4336（pending message echo fix）均针对 WebUI v2 的消息渲染和时序问题，覆盖 QA 报告的部分 UI Bug。

5. **Tool Disable 精细化控制**（低确定性）：PR #3548（DISABLE_TOOLS_LIST）已开放超过 3 周仍待合并，scope 标注为 agent + security，但推进缓慢，可能需更大范围的设计讨论。

---

## 7. 用户反馈摘要

### 痛点

- **模型兼容性成为突出痛点**：Qwen3.6-35B 暴露思维链泄露、消息镜像、MCP 驱动失败等多重问题；MiniMax-M2.7 暴露工具 schema 校验过严、断连状态错误信息不准确。两者均反映 IronClaw 的**跨提供商适配层仍有较大差距**。
- **Claude Opus 4.7/4.8 完全不可用**（#4334）：Anthropic 用户无法使用 IronClaw 的最新 Claude 模型，这是直接影响付费用户的 blocking issue。
- **认证流程体验差**（#4342）：Auth Modal 在页面刷新后无法消除，完全阻塞聊天功能，属严重 UX 问题。

### 满意点

- Oh（反讽）— 从今日数据来看，项目没有收到正向反馈或用户感谢类 Issue。但社区贡献者的高密度技术 Issue 质量（henrypark133 系列的 C1–C6、L1–L11）表明**核心开发者对架构质量的关注度和投入非常高**，这是项目健康的积极信号。

### 使用场景

- Notion / GSuite 集成（通过 Reborn OAuth 链路）
- Slack 异步交互（final reply delivery）
- MCP 工具集成（Notion、GitHub extension）
- 多模型并行支持（Anthropic Claude Opus、Qwen3.6、MiniMax-M2.7）

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或推进缓慢，建议维护者关注：

| 条目 | 最后更新 | 持续时间 | 备注 |
|---|---|---|---|
| **[#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed** | 2026-06-02 | 6天+ | E2E 持续失败，阻塞发布信心 |
| **[#4334](https://github.com/nearai/ironclaw/issues/4334) Claude Opus 4.7 unusable** | 2026-06-02 | 1天 | 但堵塞 Anthropic 核心用户群，建议升级优先级 |
| **[#3548](https://github.com/nearai/ironclaw/pull/3548) DISABLE_TOOLS_LIST** | 2026-06-02 | 3周+ | XL PR，低风险，等待审议 |
| **[#3669](https://github.com/nearai/ironclaw/pull/3669) engine v2 channel-supplied ids** | 2026-06-02 | 3周 | XL PR，涉及 engine v2 core contract，需更多评审 |
| **[#3806](https://github.com/nearai/ironclaw/issues/3806) Lane 6: GitHub WASM** | 2026-06-02 | 2周 | Reborn 路线图中的 WASM tool 能力，前置依赖未就绪 |

---

*数据来源：GitHub nearai/ironclaw | 生成时间：2026-06-03 UTC*
*日报由 OWL 自动生成，基于过去 24 小时公开仓库数据。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-06-03

---

## 1. 今日速览

过去24小时内，LobsterAI **无新开 Issues、无新版本发布**，但 PR 通道极为活跃：共 **50 条 PR 更新**，其中 **47 条已合并/关闭**，仅 3 条仍处于开放状态。这表明项目正处于**高频集成冲刺期**——维护者集中消化积压 PR，功能迭代与缺陷修复正在快速落地。整体项目健康度评估：**活跃度高、提交周转快、合并响应迅速**。

---

## 2. 版本发布

过去24小时无新版本发布，省略。

---

## 3. 项目进展（今日合并/关闭重要 PR）

### 🔧 核心功能 feat / fix

| PR | 标签 | 内容摘要 |
|---|---|---|
| [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) | `renderer · docs · main` | **MCP 启动解析优化**：对 `npx` 类 stdio MCP 提前完成 npm 包解析与本地安装，将启动命令转换为稳定的 `node <absolute-bin-path>`；新增首次响应计时日志用于耗时诊断；支持解析失败后的自动重试恢复 |
| [#1962](https://github.com/netease-youdao/LobsterAI/pull/1962) | `renderer · main · openclaw · cowork` | **安全监控热切换**：新增 `nsp-clawguard` 插件及 `securityMonitorEnabled` 配置项，用户可在设置中实时开启/关闭安全监控 |
| [#2031](https://github.com/netease-youdao/LobsterAI/pull/2031) | `renderer · main · openclaw` | **修复浏览器配置失效**问题 |
| [#2023](https://github.com/netease-youdao/LobsterAI/pull/2023) | `renderer · docs · main · openclaw` | **提升 Browser/Webfetch 工具稳定性与成功率** |
| [#2024](https://github.com/netease-youdao/LobsterAI/pull/2024) | `renderer · docs · main · openclaw · im` | **优化设置变更时的 gateway 重启机制** |
| [#2015](https://github.com/netease-youdao/LobsterAI/pull/2015) | `renderer · docs · main · openclaw · cowork` | **处理 OpenClaw compaction 重试与 tool result 间隙**，增强上下文压缩可靠性 |
| [#2018](https://github.com/netease-youdao/LobsterAI/pull/2018) | `main · openclaw` | **修复 token 刷新时 gateway 不必要重启**的问题 |

### 🤖 Cowork / 多智能体

| PR | 内容摘要 |
|---|---|
| [#2095](https://github.com/netease-youdao/LobsterAI/pull/2095) | 支持 **subagent 批量删除**：侧栏多选 subagent 会话后通过子代理删除路径路由，gateway transcript 清理改为异步；限制并发与重试上限以避免 gateway 过载 |
| [#1985](https://github.com/netease-youdao/LobsterAI/pull/1985) | 新增 **ThinkingLevelSelector 下拉控件**（Off/Minimal/Low/Medium/High/Adaptive），完整的端到端集成（类型定义、DB 迁移、Redux、IPC、preload、运行时适配器、i18n）；支持会话级覆盖与全局默认值 |

### 🎨 渲染器 / UI / UX

| PR | 内容摘要 |
|---|---|
| [#2025](https://github.com/netease-youdao/LobsterAI/pull/2025) | **IM Bot 管理 UI 重新设计** |
| [#2028](https://github.com/netease-youdao/LobsterAI/pull/2028) | UI 更新（细节未展开） |
| [#2094](https://github.com/netease-youdao/LobsterAI/pull/2094) | **优化分享成功弹窗信息层级**，移除冗余状态标识，统一视觉层级 |
| [#2022](https://github.com/netease-youdao/LobsterAI/pull/2022) | **Artifacts HTML 预览优化**：源码预览懒加载适配明暗主题；预览前校验文件存在性；tab 宽度与加号按钮逻辑优化 |

### 🔌 插件 & IM & 语音

| PR | 内容摘要 |
|---|---|
| [#2096](https://github.com/netease-youdao/LobsterAI/pull/2096) | **隐藏内部 OpenClaw 插件**：从插件管理 UI 和 user_plugins 同步中过滤隐藏的插件 ID |
| [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) | **macOS 语音输入权限拒绝后显示 toast 提示**：主进程解析 osascript stderr 中的权限拒绝关键词，前端引导用户前往系统设置开启辅助功能权限 |
| [#2093](https://github.com/netease-youdao/LobsterAI/pull/2093) | **启用 MiniMax-M3 图像输入支持**：修复 MiniMax-M3 因硬编码 `supportsImage: false` 无法使用多模态输入的问题 |

### 📦 依赖 / 模型配置

| PR | 内容摘要 |
|---|---|
| [#388](https://github.com/netease-youdao/LobsterAI/pull/388) ⏳ OPEN | **升级 MiniMax 默认模型至 M3**：将 `MiniMax-M3` 设为默认，保留 `MiniMax-M2.7` 与 `MiniMax-M2.7-highspeed`，移除 `M2.5/M2.1/M2/M1` |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) ⏳ OPEN | Dependabot 自动将 electron 从 40.2.1 升级至 42.3.1，electron-builder 同步更新 |

### 📈 整体进步

今日项目在以下方向同时推进：
- **MCP 工具链**启动速度与稳定性大幅提升
- **安全监控**具备用户可控的热开关
- **Cowork 多智能体**批量删除与上下文压缩更稳
- **思考级别控制**全链路打通
- **IM 交互界面**完成一轮 UI 重设计
- **语音输入、Browser/Webfetch**等重要工具的可靠性被修复

---

## 4. 社区热点

过去24小时新 Issues 为 0，但以下 PR 因时序接近今日且处于开放状态，值得重点关注：

### 🔥 PR #388 — 升级 MiniMax 默认模型至 M3（仍开放）
- **链接**：[#388](https://github.com/netease-youdao/LobsterAI/pull/388)
- **作者**：octo-patch | 创建于 2026-03-12，持续更新到 2026-06-02
- **背景诉求**：随着 MiniMax 发布 M3 模型并原生支持图像输入（同日 #2093 已合并），用户希望以 M3 作为默认配置以获取更好的视觉理解能力。此 PR 同步清理了旧型号。该 PR 已开放近 3 个月，**可能因兼容性评估或版本节奏原因尚未合并**，维护者需确认是否入版。

### 🔥 PR #1464 — 钉钉/飞书/QQ 多实例重复校验（仍开放）
- **链接**：[#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)
- **作者**：gongzhi-netease | 创建于 2026-04-04
- **背景诉求**：在 IM 多实例场景下，缺少名称与凭证 ID 重复校验会导致消息冲突和用户困惑。该 PR 的开放也已近 2 个月，**存在积压风险**。

### 🔥 PR #1277 — Electron 版本升级（Dependabot）
- **链接**：[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)
- **背景诉求**：从 Electron 40.x 升级至 42.x，跨度大版本。通常需要充分回归测试方可合并，开放 2 个月属正常节奏，但**建议维护者明确评估时间表**。

---

## 5. Bug 与稳定性

过去24小时内无新开 Issue 或 Bug 报告。但从已合并的 PR 中可以识别出以下**已修复的关键缺陷**：

| 严重等级 | 问题描述 | 修复 PR | 状态 |
|---|---|---|---|
| 🔴 高 | MiniMax-M3 硬编码 `supportsImage: false` 导致多模态输入不可用 | [#2093](https://github.com/netease-youdao/LobsterAI/pull/2093) | ✅ 已修复 |
| 🟡 中 | macOS 语音输入权限拒绝后无任何反馈 | [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) | ✅ 已修复 |
| 🟡 中 | 设置变更触发 gateway 不必要的 token 刷新重启 | [#2018](https://github.com/netease-youdao/LobsterAI/pull/2018) | ✅ 已修复 |
| 🟡 中 | MCP `npx` 路径每次会话重复走慢路径 | [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) | ✅ 已修复 |
| 🟢 低 | 浏览器配置失效 | [#2031](https://github.com/netease-youdao/LobsterAI/pull/2031) | ✅ 已修复 |
| 🟢 低 | Artifacts 大文件源码预览卡顿、HTML 预览文件不存在时显示 Not Found | [#2022](https://github.com/netease-youdao/LobsterAI/pull/2022) | ✅ 已修复 |

**当前无已知未修复的严重 Bug。**

---

## 6. 功能请求与路线图信号

从近期 PR 趋势可判断以下方向正在被积极开发，**极有可能纳入下一版本**：

| 方向 | 信号来源 | 成熟度 |
|---|---|---|
| **MCP 工具链深度优化** | #2091（启动解析、计时日志、失败恢复） | ✅ 已合并，待发版 |
| **安全监控插件化** | #1962（nsp-clawguard 热切换） | ✅ 已合并，待发版 |
| **思考级别精细控制** | #1985（ThinkingLevelSelector 全链路） | ✅ 已合并，待发版 |
| **Cowork 多智能体管理增强** | #2095（批量删除、异步清理） | ✅ 已合并，待发版 |
| **IM Bot 管理 UI 重构** | #2025、#2028 | ✅ 已合并，待发版 |
| **MiniMax M3 默认化** | #388（开放中） | ⏳ 待合并 |
| **Electron 大版本升级** | #1277（开放中） | ⏳ 待评估 |

---

## 7. 用户反馈摘要

过去24小时无新 Issues，无法提取新的用户反馈。但从已合并 PR 的修复内容可反推近期用户痛点：

- **多模态输入体验**：用户期望 MiniMax-M3 支持图像输入，但硬编码配置导致功能不可用（#2093 修复）
- **macOS 语音输入**：权限被拒后缺乏引导，用户不知道如何恢复（#1952 修复）
- **MCP 启动慢**：每次会话重复走 npx 路径导致工具响应延迟（#2091 修复）
- **IM 多实例管理混乱**：同名实例和重复机器人导致消息冲突（#1464 待合并）
- **分享弹窗信息层级不清**：用户难以快速获取分享链接/码（#2094 修复）

---

## 8. 待处理积压

以下 PR 开放超过 1 个月，建议维护者关注：

| PR | 开放时长 | 内容 | 建议 |
|---|---|---|---|
| [#388](https://github.com/netease-youdao/LobsterAI/pull/388) | ~3 个月 | MiniMax 默认模型升级至 M3 | 确认兼容性后尽快合并或关闭 |
| [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) | ~2 个月 | 钉钉/飞书/QQ 多实例重复校验 | 评估优先级，避免长期积压 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | ~2 个月 | Electron 40→42 升级 | 制定回归测试计划，明确合并窗口 |

---

> **日报总结**：LobsterAI 今日处于高效集成期，47 条 PR 集中合并，覆盖 MCP 工具链、安全监控、Cowork 多智能体、IM 交互、语音输入、Browser 稳定性等多个核心方向。无新 Bug 报告，项目整体健康度良好。需关注 3 个长期开放 PR 的积压风险，建议在下一版本发布窗口前完成评估与决策。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目动态日报 — 2026-06-03

> **数据来源**: agentscope-ai/QwenPaw — 统计周期: 2026-06-02 至 2026 2026-06-03

---

## 1. 今日速览

QwenPaw 今日活跃度处于**高位**：Issues 更新 48 条（新开/活跃 26、关闭 22），PR 更新 32 条（待合并 23、已合并/关闭 9）。没有新版本正式发布，但已有一个 **v1.1.11b1 的 bump 提交**（PR #4907），表明团队正在为下一个 Patch/Beta 做准备。今天最值得关注的是**安全类 Issue 集中爆发了 6 项**（均由同一研究员 YLChen-007 提交），覆盖了设置接口未认证修改、ToolGuard 绕过、路径遍历、敏感信息泄露等多个攻击面，同时 GitHub 应已处理了大部分并快速关闭。此外，AgentScope 1.x → 2.0 的重大迁移已有对应的 PR #4846 推进中，是一个里程碑式的技术升级。

---

## 2. 版本发布

**无正式版本发布。**

- ⚠️ **预告**: PR [#4907](https://github.com/agentscope-ai/QwenPaw/pull/4907) 已合并，将版本号提升至 `v1.1.11b1`，预计近期将有 Beta 版发布。

---

## 3. 项目进展（今日合并 / 关闭的关键 PR）

| PR | 状态 | 说明 |
|---|---|---|
| **[#4907](https://github.com/agentscope-ai/QwenPaw/pull/4907)** | ✅ 已合并 | `chore(release): bump version to v1.1.11b1` — 为新版本发布铺路 |
| **[#4899](https://github.com/agentscope-ai/QwenPaw/pull/4909)** | ✅ 已合并 | `fix(yuanbao): include yuanbao proto JSON files in package-data` — 修复元宝频道 v1.1.10 打包缺失 proto 文件的问题（对应 Issue #4898） |
| **[#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883)** | ✅ 已合并 | `fix(channel): cron messages fail to deliver to wechat/wecom` — 修复定时任务消息无法投递到微信/企业微信的问题（对应 Issue #4878） |
| **[#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853)** | ✅ 已合并 | `fix(browser): kill entire process tree and clean lock files on Windows` — 修复 Windows 上浏览器进程残留及临时文件锁未清理的问题 |
| **[#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689)** | ✅ 已合并 | `feat(providers): route non-standard generate_kwargs into extra_body` — 解决 OpenAI SDK 拒绝非标参数（如 DashScope `enable_search`）的兼容性问题 |
| **[#1317](https://github.com/agentscope-ai/QwenPaw/pull/1317)** | ✅ 已合并 | `feat(console): add download status notifications for cloudflared` — 为 cloudflared 首次下载增加实时进度推送 |

**推进评估**: 今日合并的 PR 集中在**渠道稳定性**（微信/元宝频道）、**Windows 兼容性**、**Provider 兼容性**三个方向，说明团队正在密集修复 v1.1.8~v1.1.10 积累的回归问题。加上版本号已 bump，**v1.1.11 Beta 或 Patch 即将落地**。

---

## 4. 社区热点

### 🔥 Issue #4666 — 新建会话后 Models 配置页面丢失（👍 高关注）
- **链接**: [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)
- **评论数**: 6 | **状态**: OPEN
- **核心诉求**: v1.1.8.post1 中新建会话后模型配置全部丢失，配置页报 "Load failed"，需重启恢复。属于关键功能回归，严重影响多模型工作流。
- **响应**: 尚未有官方回复，仍处于开放状态。

### 🔥 Issue #4878 — 定时任务结果无法推送到微信（已定位根因）
- **链接**: [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)
- **评论数**: 5 | **状态**: CLOSED（由 PR #4883 修复）
- **根因**: 微信频道 `channel.py` 中 `to_handle_from_target` 逻辑异常，导致 openid 被错误替换为内部会话标识 `cat_monitor_cron_session`。

### 🔥 Security 系列 Issue — 6 项安全审计集中报告
- **链接**: [#4908](https://github.com/agentscope-ai/QwenPaw/issues/4908) · [#4909](https://github.com/agentscope-ai/QwenPaw/issues/4909) · [#4910](https://github.com/agentscope-ai/QwenPaw/issues/4910) · [#4911](https://github.com/agentscope-ai/QwenPaw/issues/4911) · [#4912](https://github.com/agentscope-ai/QwenPaw/issues/4912) · [#4913](https://github.com/agentscope-ai/QwenPaw/issues/4913) · [#4914](https://github.com/agentscope-ai/QwenPaw/issues/4914)
- **提交者**: YLChen-007（安全研究员）
- **状态**: 全部已关闭
- **覆盖攻击面**:
  - `PUT /api/settings/language` 未认证即可全局修改设置
  - ToolGuard 绕过（通过 `request_context` 禁用危险命令审批）
  - 路径遍历（`system_prompt_files` 可读取本地文件并外发至 LLM）
  - 工作区导出泄露渠道密钥（`client_secret` 明文包含在 `agent.json`）
  - Cron 时区参数导致 HTTP 500
  - MCP 配置 API 验证异常返回 500 而非 422
  - 畸形 `session_id` 导致会话创建持久失败
- **分析**: 这是一次系统性的安全审计，暴露了 API 层的认证和验证缺陷。大部分已快速关闭，说明团队响应迅速。建议关注是否有后续的安全加固 PR。

### 🔥 PR #4846 — AgentScope 2.0 迁移
- **链接**: [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)
- **状态**: OPEN / 审核中
- **意义**: 将后端从 AgentScope 1.x（`agentscope==1.0.20` + `agentscope-runtime==1.1.6`）迁移至 2.0.0，采用新架构、API 和运行时模型。这是一次**破坏性变更**，将影响所有下游扩展。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重级 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 P0 | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) | 新建会话后 Models 配置丢失，页面 "Load failed" | ❌ 尚无 |
| 🔴 P0 | [#4898](https://github.com/agentscope-ai/QwenPaw/issues/4898) | 元宝频道 proto 文件缺失导致认证无限重连 | ✅ #4899 已合并 |
| 🟠 P1 | [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | Cron 定时任务无法推送结果到微信 | ✅ #4883 已合并 |
| 🟠 P1 | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) | v1.1.9 频繁出现系统级 fallback "无法处理您的问题" | ❌ 尚无 |
| 🟠 P1 | [#4903](https://github.com/agentscope-ai/QwenPaw/issues/4903) | 切换会话时出现异常 loading 状态 | ❌ 尚无 |
| 🟠 P1 | [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) | 上传图片进入无限压缩循环导致幻觉 | ❌ 尚无 |
| 🟡 P2 | [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) | DeepSeek 多轮对话 reasoning_content 未回传导致 HTTP 500 | ❌ 已关闭但未看到具体修复说明 |
| 🟡 P2 | [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) | custom channel 每次保存设置后监听停止 | ❌ 已有根因分析，尚无修复 |
| 🟡 P2 | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | Windows 上 browser_use 启动失败（CDP 超时 + 浏览器闪退） | ❌ 尚无（#4853 修复了进程清理，未解决启动超时） |

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本的 Feature

| 需求 | Issue | 信号 |
|---|---|---|
| **AgentScope 2.0 迁移** | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) + PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) | PR 已存在，审核中 |
| **插件 Prompt Section Registry** | PR [#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) | 审核中，允许插件注入自定义系统提示段落 |
| **插件卸载钩子 + 校验修复** | PR [#4794](https://github.com/agentscope-ai/QwenPaw/pull/4794) | 审核中 |
| **多模型协作（spawn_subagent 按任务选模型）** | [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901) | 新 Issue，受 Claude Code Haiku/Opus 模式启发 |
| **工具定义按需加载减少 55-65% token 开销** | [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) | 有详细数据支撑 |
| **PRD 内置 CRUD 工具** | PR [#4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) | 新 PR，审核中 |
| **插件注册自定义频道（Schema 驱动配置 UI）** | PR [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) | 审核中，替代旧 `custom_channels/` 机制 |
| **Tauri 桌面自动更新** | PR [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | 审核中 |

### 值得关注的长线方向

- **无损上下文压缩（DAG-based Summarization）** [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) — 解决长期对话上下文丢失的根本问题
- **Agent 作用域 Web 登录账户** [#4859](https://github.com/agentscope-ai/QwenPaw/issues/4859) — 多 Agent 部署场景下的权限隔离需求

---

## 7. 用户反馈摘要

### 😤 痛点

1. **配置持久性差**: 多个 Issue（#4666 模型配置丢失、#4877 custom channel 保存后监听停止）显示配置管理是核心痛点，用户频繁需要重启恢复状态。
2. **Windows 体验不佳**: #4893（文件上传大小限制）、#4894（缺少多文件拖拽上传）、#4919（browser_use 启动失败）、#4853（进程残留）——Windows 用户在文件操作、浏览器集成方面遇到大量障碍。
3. **渠道可靠性**: 微信（#4878）、元宝（#4898）频道在定时任务和新版本中均出现问题，跨渠道消息投递稳定性是高频投诉区。
4. **v1.1.9 回归**: 系统级 fallback 频繁触发（#4837），升级后体验反而退化。
5. **左侧边栏过于复杂**: #4904 用户对比 Codex、Claude Desktop 等产品，建议简化 UI 层级。

### 😃 满意点

- 安全类 Issue 的**快速响应和关闭**表明安全修复流程高效
- AgentScope 2.0 迁移方向被社区视为**重大正面信号**（Issue #4727 获 2 个 👍）
- 社区贡献活跃：多个首次贡献者 PR（#4794、#4804、#4722、#4902、#4905）显示项目对外部开发者吸引力良好

---

## 8. 待处理积压（提醒维护者关注）

| Issue/PR | 创建日期 | 状态 | 建议处理优先级 |
|---|---|---|---|
| [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) — Models 配置丢失 | 05-25 | OPEN / 无回复 | 🔴 **紧急** — 关键功能阻塞，已存在 8 天 |
| [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) — v1.1.9 fallback 频繁 | 05-31 | OPEN / 无回复 | 🔴 **紧急** — 版本回归 |
| [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) — 无损上下文压缩 | 05-20 | OPEN / 无回复 | 🟡 **高** — 影响所有长期任务用户 |
| [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) — 工具按需加载 | 05-31 | OPEN / 无回复 | 🟡 **高** — token 成本优化重大 |
| [#4903](https://github.com/agentscope-ai/QwenPaw/issues/4903) — 切换会话 loading 异常 | 06-02 | OPEN / 新开 | 🟡 需排查 WebUI 前端状态管理 |
| [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) — 图片无限压缩循环 | 06-02 | OPEN / 新开 | 🟡 影响多模态场景 |
| [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) — 字体大小调节 | 05-09 | OPEN / 长期 | 🟢 UI 改进，不阻塞核心功能 |
| PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) — AgentScope 2.0 迁移 | 06-01 | 审核中 | 🔴 需尽快完成 Code Review |
| PR [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) — 插件自定义频道 | 05-26 | 审核中 | 🟡 替代旧机制，需加快推进 |

---

**项目健康度评分：⭐⭐⭐½（3.5/5）**

- ✅ **活跃度**: 极高，Issue/PR 吞吐量健康
- ✅ **安全性响应**: 快速，安全 Issue 当日关闭
- ⚠️ **回归修复**: v1.1.9 的 fallback 问题 (#4837) 和 Model 配置丢失 (#4666) 仍未处理
- ⚠️ **积压**: 多个 1~2 周以上的 P1 Issue 未获首次响应
- 🟡 **版本节奏**: 版本号已 bump 但正式版尚未发布，社区在等待修复落地

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 · 2026-06-03

---

## 1. 今日速览

ZeroClaw 今日处于高活跃状态：**49 条 Issues 更新**（新开/活跃 34 条，关闭 15 条）、**50 条 PR 更新**（待合并 33 条，合并/关闭 17 条），并发布了 **v0.8.0-beta-2** 这一里程碑版本。Issue/PR 流动率极高，显示社区参与度旺盛且维护团队响应积极。v0.8.0 进入 beta 第二阶段，贡献者正密集推进 docs、channels、providers、security 的适配与修复，多条推进中的 tracker（#7112、#6970）表明 v0.8.0 正式版已进入发布冲刺。积压的 OPEN Issue 数量仍然较大（多数为 4 月创建的老 bug），需要在正式版本发布前系统性清理。

---

## 2. 版本发布

### v0.8.0-beta-2 — 自 v0.7.5 以来的最大版本

**Release 链接：** [zeroclaw-labs/zeroclaw releases](https://github.com/zeroclaw-labs/zeroclaw/releases)

**核心亮点：zerocode — 全新终端 UI**
- 这是 `v0.8.0` 线的第二个 beta，**头条特性是 zerocode**：一款功能完整的终端 TUI，用户无需离开终端即可运行和管理 Agent。
- 围绕 zerocode，本次发布还搭载了 **multi-agent runtime**（多 Agent 运行时）。

**解读：** 这意味着 ZeroClaw 的产品形态正在从单一的 daemon/Gateway 后端，扩展出完整的本地终端操作体验。结合 Issue #6824（TUI Agent Chat tracker）和 #6821（crates/zeroclaw-tui → apps/zerocode 迁移），可以推断 zerocode 是 TUI 模块的独立化与品牌升级，具备流式输出、工具审批等完整交互能力。

**迁移/升级注意：**
- 尚未在 Release notes 中看到明确的破坏性变更说明，但 beta 系列意味着 API 和行为仍可能调整。建议下游用户在非生产环境中先行测试。
- 已有 Issue #7112 作为 v0.8.0 发布队列和 Stable-tier blocker 的追踪，可在该 issue 跟进正式发布进度。

---

## 3. 项目进展（过去 24h 合并/关闭的 PR）

| PR | 状态 | 说明 |
|---|---|---|
| **#7070** [CLOSED] | 合并 | **fix(channels): 将 Twitter/X channel 加入 default features** — 修复了预编译二进制缺失 Twitter 渠道的问题（对应 Issue #7069），涉及 `Cargo.toml` 中 default-channels feature bundle 的更新 |
| **#7063** (对应 Issue [CLOSED]) | 关闭 | **channel-served agents 绕过 per-agent tool allowlist** — 安全策略绕过漏洞被修复，`start_channels` 现在正确执行 `apply_policy_tool_filter`，高危 P1 安全修复 |
| **#7001** (对应 Issue [CLOSED]) | 关闭 | **TTS voice replies 解析错误 agent 的 tts_provider** — 多 Agent 配置下 TTS 静默失效的 bug 修复 |
| **#6977** (对应 Issue [CLOSED]) | 关闭/合并 | **对齐 http_request 与 web_fetch 的 private-host allowlist** — 安全一致性改进 |
| **#6821** (对应 Issue [CLOSED]) | 关闭/合并 | **crates/zeroclaw-tui → apps/zerocode 迁移** — 项目布局规范化，为 zerocode 发布铺路 |

**总结：** 今日合并/关闭的主要是 **安全修复**（tool allowlist 绕过、http_request allowlist 对齐）和 **项目架构整理**（TUI 迁移为 zerocode）。这表明 v0.8.0-beta-2 的发布做了扎实的收尾工作，安全性和代码组织都在同步提升。

---

## 4. 社区热点

### Issue #6059 — [Bug] 与 DeepSeek-V4 API 格式不兼容（💬 15 👍 4）
- **链接：** [zeroclaw-labs/zeroclaw Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
- **状态：** CLOSED（2026-06-02 更新）
- 关于 DeepSeek-V4-Pro/V4-Flash 的 thinking mode 导致的 API 兼容性问题，是近24h评论最活跃的 Issue。已关闭，说明修复已完成或已纳入计划。

### Issue #5600 — [Bug] Kimi-code provider 流式调用工具时 API 报错（💬 9 👍 1）
- **链接：** [zeroclaw-labs/zeroclaw Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)
- **状态：** OPEN（创建于 2026-04-10，已持续约 2 个月）
- `thinking is enabled but reasoning_content is missing in assistant tool_calls` 错误，影响用户将 Kimi 作为 provider 进行工具调用的核心 workflow。**S1 严重等级，工作流阻塞**，但至今未解决，是需要优先关注的老 bug。

### Issue #6391 — [Feature] Daemon 节点真正的心跳追踪（💬 4）
- **链接：** [zeroclaw-labs/zeroclaw Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)
- **状态：** OPEN，status: **blocked & accepted**
- 节点在 Dashboard 中只要注册就显示 Online，缺乏真实存活信号。这会随 multi-agent runtime 的引入变得越来越重要。当前 block 原因可能是依赖 PR 尚未就绪。

### Issue #7117 — [Feature] 各配置面的 UX 一致性
- **链接：** [zeroclaw-labs/zeroclaw Issue #7117](https://github.com/zeroclaw-labs/zeroclaw/issues/7117)
- 今日新开，瞄准 v0.8.0 的 配置体验整合。涵盖 CLI、Quickstart、zerocode、web gateway four 个 configuration surface。与 PR #7118（zerocode 导航修复）同日推出，说明正在系统性地打磨配置 UX。

### PR #7060 — 定义 WASI/WIT 插件接口文件
- **链接：** [zeroclaw-labs/zeroclaw PR #7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060)
- FND-001 §5.2 实现的第一步，定义 Tool、Channel、Memory 插件的 WIT 接口。规模和风险均标为 high，这是 ZeroClaw **插件化架构**的基础设施投资。

---

## 5. Bug 与稳定性

### 🔴 P1 / 高危

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| **#7068** | Telegram channel 将 Codex scratchpad/工具转储作为最终响应回复给用户 | OPEN | — |
| **#5600** | Kimi-code provider streaming + tool_calls 报 400 错误（S1 工作流阻塞） | OPEN，2个月 | — |
| **#7038** | `zeroclaw check` 11/11 WebSocket 401，尽管 auth profile 有效 | OPEN, needs-repro | — |

### 🟡 P2 / 中危

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| **#7089** | Windows shell host（cmd.exe vs PowerShell vs Git Bash）需评估可配置化 | OPEN | — |
| **#7005** | Quickstart CLI 仍有裸用户可见字符串（i18n 问题） | OPEN | — |
| **#5795** | XML tool_result tags 泄漏到 channel 响应中 | OPEN, in-progress | — |

### 🟢 已修复/关闭

| Issue | 描述 | 修复方式 |
|---|---|---|
| **#6059** | DeepSeek-V4 API 不兼容 | CLOSED（2026-06-02） |
| **#7069** | Twitter/X channel 在预编译二进制中不可用 | PR #7070 合并修复 |
| **#7063** | Channel-served agents 绕过 tool allowlist | CLOSED（安全修复） |
| **#7001** | TTS 多 Agent 配置下解析错误 agent 的 tts_provider | CLOSED |
| **#6975** | `zeroclaw onboard` 标记完成但未写入 config | CLOSED |
| **#6040** | `<think>` reasoning blocks 泄漏到 channel 回复 | CLOSED |

**稳定性评估：** 高危 bug 中 #5600 已持续 2 个月未解决，是 Kimi 用户的严重阻塞点。#7068（Telegram 泄漏内部转储）是新发现的安全相关 bug，需尽快跟进。整体来看，维护团队对中低危 bug 的修复节奏较快，但部分老的高优先级 provider 兼容性问题积压较久。

---

## 6. 功能请求与路线图信号

### 明确纳入 v0.8.0 路线（有活跃 PR 或 tracker）

| 方向 | 相关 Issue/PR | 信号强度 |
|---|---|---|
| **zerocode TUI** | #6824, #6821, #7118 | ✅ 已在 beta-2 发布 |
| **多 Agent 运行时** | #6390, #6391, #6293 | 🔄 部分 blocked，架构讨论中 |
| **安全策略一致性** | #6977, #6613, #7063 | ✅ 修复中/已修复 |
| **WASI 插件接口** | PR #7060 | 🔄 基础设施阶段 |
| **ACP 协议扩展** | #6820, PR #7036 | 🔄 部分已交付 |

### 社区呼声高但尚未排期

| Issue | 诉求 | 优先级信号 |
|---|---|---|
| **#6613** | 更强的 pairing code（默认 32 位字母数字，替代 6 位数字） | P1 accepted，安全增强 |
| **#6293** | 气隙执行模式 + unix socket companion daemon | RFC，blocked |
| **#5604** | Mattermost 私聊 bot 功能 | P2，社区需求 |
| **#7089** | Windows shell host 可配置化 | 新开，设计讨论阶段 |

**判断：** v0.8.0 正式版的核心 blocker 集中在 **config/runtime 正确性**（#7112 tracker）和 **provider 兼容性**。WASI 插件接口（PR #7060）是面向 v0.9 或更远未来的架构投资。安全增强（pairing code 强化、tool allowlist 修复）正在稳步推进。

---

## 7. 用户反馈摘要

**真实痛点：**

1. **Provider 兼容性碎片化** — DeepSeek-V4（#6059）、Kimi-code（#5600）均出现 API 格式不兼容，且 Kimi 的问题已阻塞用户 2 个月。用户在选择非 OpenAI 系 provider 时体验较差。

2. **安全顾虑突出** — 多个 Issue 涉及安全边界：tool allowlist 被绕过（#7063）、reasoning blocks 泄漏到外部 channel（#6040）、XML tool_result 泄漏（#5795）、pairing code 太弱（#6613）、Telegram 泄漏内部转储（#7068）。用户显然在生产环境中使用 ZeroClaw，对安全问题的敏感度很高。

3. **多 Agent 配置体验待提升** — TTS 在多 Agent 配置下静默失效（#7001）、onboard 向导标记完成但未写入配置（#6975），说明多 Agent 场景下的配置可靠性仍需打磨。

4. **Windows 支持** — #7089 提出 Windows shell host 的选择问题，说明有 Windows 用户群体在积极参与。

5. **文档与社区入口** — Discord 邀请链接过期（#7037）、文档 PO 文件包含 AI 生成的翻译（#7110），虽是小问题但影响社区第一印象。

**满意信号：**
- zerocode TUI 的推出（#6824）是用户期待已久的功能，beta-2 发布说明社区对终端交互的需求得到了响应。
- 安全类 bug 的修复节奏较快（#7063、#6977 均在近期关闭），用户对安全响应速度可能较为满意。

---

## 8. 待处理积压（需维护者关注）

### 长期未响应的高优先级 Issue

| Issue | 创建日期 | 等待时长 | 严重等级 | 说明 |
|---|---|---|---|---|
| **#5600** | 2026-04-10 | ~54 天 | **S1 P1** | Kimi-code streaming + tools 报错，工作流阻塞，9 条评论 |
| **#5795** | 2026-04-16 | ~48 天 | S2 | XML tool_result 泄漏到 channel，in-progress 但进展缓慢 |
| **#6074** | 2026-04-24 | ~40 天 | P2 | 153 个 commit 在 bulk revert 后需恢复，审计跟踪 |
| **#6390** | 2026-05-05 | ~29 天 | P2 | `zeroclaw node add <url>` CLI，blocked |
| **#6391** | 2026-05-05 | ~29 天 | P2 | 真正的心跳追踪，blocked |
| **#6293** | 2026-05-03 | ~31 天 | P2 | 气隙执行模式，RFC blocked |

### 长期 Open 的 PR

| PR | 创建日期 | 等待时长 | 说明 |
|---|---|---|---|
| **#5987** | 2026-04-22 | ~42 天 | Nix flake 支持，持续更新中 |
| **#6842** | 2026-05-21 | ~13 天 | NEAR AI Cloud provider |
| **#6982** | 2026-05-28 | ~6 天 | credential-shaped config 分类 |

**建议：**
- **#5600** 是 Kimi 用户的 S1 阻塞问题，已持续近两个月，强烈建议排入 v0.8.0 或 v0.8.1 的必须修复清单。
- **#6390 / #6391** 均与 multi-agent fleet 管理相关，与 v0.8.0 的 multi-agent runtime 主题高度相关，建议解除 block 并推进。
- **#6074**（153 commits 恢复审计）虽不直接影响功能，但涉及代码完整性和历史修复的回归风险，建议在 v0.8.0 发布前完成评估。

---

*数据来源：GitHub zeroclaw-labs/zeroclaw，统计窗口 2026-06-02 至 2026-06-03。由 OWL 自动生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*