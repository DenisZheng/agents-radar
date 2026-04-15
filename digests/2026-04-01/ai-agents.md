# OpenClaw 生态日报 2026-04-01

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-01 00:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-04-01

---

## 1. 今日速览

OpenClaw 今日呈现**高强度迭代态势**：24小时内 Issues 与 PR 各更新 500 条，活跃 Issue 占比 78.8%（394/500），待合并 PR 达 335 条，显示社区贡献活跃但代码审查压力较大。v2026.3.31 正式版与 beta 版同步发布，包含重大破坏性变更（Nodes/exec 重构）。核心团队正集中火力修复 ACP 运行时稳定性、Kimi 集成缺陷及网关会话管理问题，但用户反馈显示近期版本回归问题频发，稳定性信任度承压。

---

## 2. 版本发布

### v2026.3.31 正式版 & v2026.3.31-beta.1
- **发布时间**：2026-03-31
- **完整变更日志**：[v2026.3.31](https://github.com/openclaw/openclaw/releases/tag/v2026.3.31) | [v2026.3.31-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.31-beta.1)

#### ⚠️ 破坏性变更（Breaking Changes）

| 变更项 | 影响范围 | 迁移操作 |
|--------|---------|---------|
| **Nodes/exec 重构** | CLI `nodes.run` 命令、Agent `nodes` 工具 | 所有节点 shell 执行统一改为 `exec host=node`；节点专属功能（媒体/位置/通知）改用 `nodes invoke` 或专用 action |
| **Plugin SDK 废弃** | 插件开发者 | SDK 部分接口标记为 deprecated，需关注后续迁移指南 |

**迁移注意事项**：  
- 现有使用 `nodes.run` 的脚本和工作流将**直接失效**，需全局替换为 `exec host=node` 语法
- 依赖节点级媒体/位置/通知功能的 Agent 配置需迁移至 `nodes invoke` 模式
- 建议升级前运行 `openclaw doctor --backup` 保存现有节点配置

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#58610](https://github.com/openclaw/openclaw/pull/58610) | zssggle-rgb | ACP 运行时加固：Codex/Gemini 启动竞争修复、跨 Agent ACP 工作区继承、结构化错误输出 | ✅ 已合并 |
| [#58400](https://github.com/openclaw/openclaw/pull/58400) | gumadeiras | **架构重构**：引导会话语法迁移至插件自有会话键表面，解耦核心与频道插件 | ✅ 已合并 |
| [#57741](https://github.com/openclaw/openclaw/pull/57741) | nimbleenigma | Edit 工具标准 `edits[]` 数组格式支持，兼容旧版单编辑模式 | ✅ 已合并 |
| [#51583](https://github.com/openclaw/openclaw/pull/51583) | kagura-agent | 修复 `message_sent` 插件钩子全频道触发问题 | ✅ 已合并 |
| [#55290](https://github.com/openclaw/openclaw/pull/55290) | Luckymingxuan | Ollama 模型选择器热修复，直接显示可用模型 | ✅ 已合并 |
| [#52095](https://github.com/openclaw/openclaw/pull/52095) | frank7402 | BlueBubbles webhook 404 修复 | ✅ 已合并 |
| [#49236](https://github.com/openclaw/openclaw/pull/49236) | rubensandrade-sketch | Google Chat webhook 404 修复 | ✅ 已合并 |
| [#55668](https://github.com/openclaw/openclaw/pull/55668) | BenSHPD | 子 Agent 目标模型覆盖修复 | ✅ 已合并 |

**整体推进评估**：  
- **架构层面**：完成核心-插件边界重构，为长期可扩展性奠定基础
- **稳定性层面**：ACP 运行时、webhook 路由、消息钩子三大痛点得到集中修复
- **开发者体验**：Ollama  onboarding、Edit 工具格式、Skill 打包等细节优化

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 🥇 | #3460 i18n & 本地化支持 | **117 评论** | 全球用户强烈需求多语言支持，但团队明确表态**当前无资源支持**，社区出现自发 PR 潮 | [#3460](https://github.com/openclaw/openclaw/issues/3460) |
| 🥈 | #75 Linux/Windows Clawdbot 应用 | **61 评论**, 66 👍 | 跨平台桌面应用缺口，macOS/iOS/Android 已覆盖，Linux/Windows 用户呼吁功能对等 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 🥉 | #44851 Kimi web_search 401 认证错误 | **35 评论** | 国内用户高频使用的 Kimi 搜索集成故障，Chat API 正常但搜索工具失效 | [#44851](https://github.com/openclaw/openclaw/issues/44851) |
| 4 | #45064 v2026.3.12 内存泄漏 OOM | **27 评论** | 基础命令（gateway status, doctor）触发堆内存溢出，CLI 完全不可用 | [#45064](https://github.com/openclaw/openclaw/issues/45064) |
| 5 | #49971 Agent 身份与信任验证 RFC | **26 评论** | 企业级安全需求：基于 ERC-8004/DID/VC 的原生 Agent 身份体系提案 | [#49971](https://github.com/openclaw/openclaw/issues/49971) |

**热点分析**：  
- **国际化张力**：#3460 的高评论数反映全球增长野心与工程现实的冲突，需决策是否接受社区共维护模式
- **平台公平性质疑**：#75 持续 3 个月高活跃，Linux/Windows 用户感到被边缘化
- **国内生态适配**：Kimi 相关 Issue 集群（#44851, #57551, #58422）显示国内模型集成质量参差

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃** | [#45064](https://github.com/openclaw/openclaw/issues/45064) | v2026.3.12 基础命令 OOM，CLI 完全瘫痪 | 开放 | 无明确 PR |
| 🔴 **P0-数据丢失** | [#58409](https://github.com/openclaw/openclaw/issues/58409) | 心跳系统静默重置会话导致用户数据丢失 | **已修复** | [#58605](https://github.com/openclaw/openclaw/pull/58605) |
| 🔴 **P0-资金损失** | [#57551](https://github.com/openclaw/openclaw/issues/57551) | Kimi 无限递归重试耗尽模型 Token | 开放 | [#58422](https://github.com/openclaw/openclaw/pull/58422) 部分修复 |
| 🟡 **P1-回归** | [#57898](https://github.com/openclaw/openclaw/issues/57898) | 用户情绪爆发："ARE YOU GOING TO FRIGGING KEEP BREAKING THIS THING" — 工具使用反复失效 | 开放 | 无 |
| 🟡 **P1-功能失效** | [#56948](https://github.com/openclaw/openclaw/issues/56948) | v2026.3.28 `browser start` 命令消失 | 开放 | 无 |
| 🟡 **P1-集成故障** | [#58249](https://github.com/openclaw/openclaw/issues/58249) | Teams webhook 401，publicUrl 移除破坏 JWT 验证 | 开放 | 无 |
| 🟡 **P1-认证** | [#26322](https://github.com/openclaw/openclaw/issues/26322) | OAuth token 刷新竞争条件导致误故障转移 | 开放 | 无 |
| 🟢 **P2-体验** | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏至消息频道 | 开放 | 无 |

**稳定性健康度评估**：⚠️ **承压**  
- 3 月版本密集发布引入回归问题，用户信任度下降（#57898 情绪化反馈）
- 核心团队响应迅速（#58409 当日修复），但积压的 Kimi/Teams/浏览器问题影响主流场景

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本的需求

| 需求 | Issue/PR | 信号强度 | 判断依据 |
|:---|:---|:---|:---|
| **Serper.dev 搜索提供商** | [#20562](https://github.com/openclaw/openclaw/issues/20562) + [#56511](https://github.com/openclaw/openclaw/pull/56511) | ⭐⭐⭐⭐⭐ | PR 已开放，Brave 免费 tier 取消后用户急需替代方案 |
| **Mistral Voxtral TTS** | [#58607](https://github.com/openclaw/openclaw/pull/58607) | ⭐⭐⭐⭐⭐ | PR 今日新建，复用现有 Mistral 配置，低摩擦集成 |
| **OpenAI Realtime API 语音模式** | [#43501](https://github.com/openclaw/openclaw/pull/43501) | ⭐⭐⭐⭐☆ | XL 级 PR 持续迭代，200-400ms 延迟是重大体验升级 |
| **会话语义压缩** | [#52422](https://github.com/openclaw/openclaw/pull/52422) | ⭐⭐⭐⭐☆ | XL 级 PR，替代转录修剪，解决长会话上下文管理 |
| **原生 Agent 身份验证** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | ⭐⭐⭐☆☆ | 企业级 RFC，需架构委员会评审，长期路线图 |
| **Gmail Hook 系统提示支持** | [#57791](https://github.com/openclaw/openclaw/issues/57791) | ⭐⭐⭐☆☆ | 轻量模型处理邮件的刚需，实现成本低 |

**路线图信号**：  
- **搜索层多元化**：Serper 加入后将形成 Brave/Perplexity/Serper 三足鼎立，降低单一供应商风险
- **语音交互升级**：Voxtral TTS + Realtime API 双轨推进，语音场景竞争力提升
- **企业安全**：Agent 身份 RFC 显示 B 端需求上升，可能催生 OpenClaw Enterprise 产品线

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论提炼）

> *"Every version breaks something. I spend more time fixing my setup than using the product."*  
> — #57898 用户 paciox，反映版本稳定性焦虑

> *"Kimi web_search burned through my entire monthly token budget in one recursive loop."*  
> — #57551 用户 xinxi053，模型集成缺陷造成直接经济损失

> *"We have 50+ agents running on Linux servers. The lack of desktop app is not the issue, but the CLI memory leaks are killing our automation."*  
> — #45064 隐含场景，企业自动化部署受阻

> *"The i18n PRs are piling up but no maintainer review. Feels like a bottleneck, not a rejection."*  
> — #3460 评论，社区贡献意愿与维护带宽错配

### 满意点
- ACP 架构的灵活性（"equivalent manual acpx session works" — #44198）
- 团队对关键 Bug 的快速响应（#58409 当日修复）

### 不满意点
- 版本发布节奏与稳定性平衡（"frigging keep breaking"）
- 平台功能不对等（Linux/Windows 持续缺位）
- 配置迁移文档不足（Breaking changes 缺乏详细指南）

---

## 8. 待处理积压

### 长期未响应的重要事项

| Issue | 天数 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) i18n 支持 | **63 天** | 社区 PR 堆积，国际增长受阻 | 决策：接受社区共维护模式或明确拒绝 |
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 应用 | **90 天** | 平台公平性质疑，竞品可乘之机 | 发布技术路线图或寻求社区移植 |
| [#26422](https://github.com/openclaw/openclaw/issues/26422) `message_sending` 钩子死代码 | **35 天** | 插件生态扩展性受损 | 标记 `good first issue` 或快速修复 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) AgentDir 引导文件被忽略 | **32 天** | 多 Agent 工作流配置困惑 | 文档修复或行为对齐 |
| [#24173](https://github.com/openclaw/openclaw/issues/24173) 网关重启丢失会话上下文 | **37 天** | 数据持久性承诺未兑现 | 与 #58409 关联，评估统一修复 |

---

**日报生成时间**：2026-04-01  
**数据来源**：OpenClaw GitHub 公开 API  
**下次更新**：2026-04-02

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告 | 2026-04-01

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从功能竞赛向质量巩固的关键转折**。头部项目（OpenClaw、IronClaw、CoPaw）日均处理 50+ Issues/PR，显示极高迭代强度；但稳定性投诉同步激增——"版本发布即回归"成为共性痛点。MCP（Model Context Protocol）集成、多通道扩展（微信/钉钉/飞书/WhatsApp/Signal）、企业级安全（OIDC/沙箱/PII 脱敏）构成三大技术主航道。与此同时，**记忆系统重构**（两阶段固化、向量数据库迁移）和**异步任务管理**正从边缘需求演变为架构核心。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | 版本发布 | 健康度评估 | 关键信号 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500（活跃 394） | 500（待审 335） | v2026.3.31 + beta | ⚠️ **高压运转** | 破坏性变更（Nodes/exec 重构）+ 稳定性信任危机 |
| **NanoBot** | 13（活跃 8） | 124（待审 99） | 无 | ⚠️ **审阅瓶颈** | 99 PR 积压，记忆系统重构待验证 |
| **PicoClaw** | 17（关闭 9） | 47（处理率 53%） | v0.2.4-nightly | ✅ **质量打磨期** | Signal 渠道落地，v0.2.4 冻结 |
| **NanoClaw** | 5（活跃） | 27（待审 20） | 无 | ⚠️ **审阅滞后** | SSL 证书 4 天未修，MCP 技能爆发但积压 |
| **NullClaw** | 1（活跃） | 7（待审 6） | 无 | ✅ **稳健维护** | Zig 语言安全基线，企业网络适配 |
| **IronClaw** | 50（活跃 34） | 50（待审 35） | v0.24.0 | ✅ **高活跃健康** | CI 自动化审查效率极高，8 问题当日闭环 |
| **LobsterAI** | 29（活跃 23） | 50（合并 26） | v2026.03.31 | ⚠️ **迭代阵痛** | 强制沙箱争议 + 网关重启危机 |
| **TinyClaw** | 1 | 0 | 无 | 🔴 **近乎停滞** | 单 Issue 零互动，维护模式 |
| **Moltis** | 3（活跃 1） | 10（合并 5） | 无 | ✅ **高效推进** | 企业通道（Teams/Matrix）+ 浏览器实时画面 |
| **CoPaw** | 50（活跃 40） | 50（合并 41） | v1.0.0.post2 | ⚠️ **热修复冲刺** | 1.0 稳定性危机，微信/本地模型痛点集中 |
| **ZeptoClaw** | 1 | 0（7 待审依赖升级） | 无 | 🔴 **维护停滞** | 核心架构债务（CLI 工具注册表）无响应 |
| **EasyClaw** | 0 | 0 | 无 | 🔴 **无活动** | — |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | 表现 | 对比参照 |
|:---|:---|:---|
| **社区规模** | 24h 1000 条更新（Issues+PR） | 超第二名 CoPaw/IronClaw 20 倍 |
| **架构前瞻性** | ACP（Agent Communication Protocol）运行时、跨 Agent 工作区继承 | IronClaw 的 Gate 架构、NanoClaw 的 RingClaw 桥接尚处追赶 |
| **工具生态深度** | Nodes/exec 重构统一 shell 执行抽象 | PicoClaw/CoPaw 仍分散于多命令 |
| **国际化张力** | #3460 i18n 117 评论，社区 PR 潮自发形成 | 其他项目多仅文档翻译 |

### 技术路线差异
- **vs IronClaw**：OpenClaw 重**协议标准化**（ACP），IronClaw 重**安全执行**（TOCTOU 根治、WalletConnect 异步审批）
- **vs CoPaw**：OpenClaw 侧**开发者/自动化场景**（CLI 优先），CoPaw 侧**终端用户/办公场景**（Web UI + IM 集成）
- **vs Moltis**：OpenClaw 追求**功能完备性**，Moltis 聚焦**自托管极简体验**（ngrok 零配置、聊天即配置）

### 关键短板
- **稳定性信任度**：#57898 "ARE YOU GOING TO FRIGGING KEEP BREAKING THIS THING" 情绪化反馈，版本发布节奏与质量平衡失控
- **平台公平性**：Linux/Windows 桌面应用缺位 90 天（#75），企业自动化场景受阻

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **MCP 集成爆发** | NanoClaw（3 技能 PR 积压）、Moltis、CoPaw | Home Assistant/Tailscale/Unraid 等基础设施即插即用 | ⭐⭐⭐⭐⭐ |
| **记忆系统重构** | NanoBot（两阶段 MemoryStore + Dream）、NanoClaw（向量 DB 迁移 #1356）、CoPaw（reme-ai 升级） | 解决长会话膨胀、本地模型固化失败、Token 浪费 | ⭐⭐⭐⭐⭐ |
| **多通道 IM 扩展** | OpenClaw（Kimi/Teams webhook）、PicoClaw（Signal）、CoPaw（微信完善）、Moltis（Teams/Matrix）、IronClaw（Slack Socket Mode） | 企业微信/钉钉/飞书/WhatsApp 生产级稳定性 | ⭐⭐⭐⭐☆ |
| **企业安全基线** | IronClaw（OIDC/TOCTOU）、NanoClaw（PII 扩展至 PDF/图片）、NullClaw（HTTPS OTLP 默认）、LobsterAI（强制沙箱争议） | 身份联邦、数据脱敏、执行隔离合规 | ⭐⭐⭐⭐☆ |
| **异步任务管理** | NanoClaw（`/tasks` `/taskstop`）、IronClaw（WalletConnect 审批）、CoPaw（任务中断卡住 #230） | 长任务可观测、人机分离审批、停止按钮有效 | ⭐⭐⭐⭐☆ |
| **语音交互升级** | OpenClaw（Realtime API 200-400ms 延迟）、NanoBot（微信 TTS）、IronClaw（Telegram sendVoice） | 低延迟语音对话、TTS 多提供商 | ⭐⭐⭐☆☆ |
| **搜索层多元化** | OpenClaw（Serper.dev 替代 Brave）、PicoClaw（Serp API）、CoPaw（WebSearch 默认化 #2607） | 规避供应商锁定，降低 API 成本 | ⭐⭐⭐⭐☆ |

---

## 5. 差异化定位分析

| 项目 | 核心用户画像 | 技术架构特征 | 关键差异化功能 |
|:---|:---|:---|:---|
| **OpenClaw** | 开发者、DevOps、自动化工程师 | Rust/TypeScript，ACP 协议中心化，Nodes 执行抽象 | 跨 Agent 工作区继承、结构化错误输出、最强 CLI 生态 |
| **IronClaw** | Web3/加密原生用户、高安全需求企业 | Rust/Zig，Gate 安全架构，NEAR 生态深度集成 | WalletConnect 异步审批、TOCTOU 根治、CI 自动化审查 |
| **CoPaw** | 中国本土企业、办公自动化场景 | Python，AgentScope 底座，IM 通道密集 | 微信/钉钉/飞书深度适配、CoPaw-Flash 轻量部署、中文优先 |
| **Moltis** | 自托管爱好者、隐私敏感用户 | Elixir，实时 WebSocket，浏览器 CDP 深度集成 | ngrok 零配置、聊天即配置（`update_channel_settings`）、实时画面干预 |
| **NanoBot** | 学术/研究场景、混合云+本地部署 | Python，两阶段记忆系统，Provider 成本追踪 | 记忆固化可靠性、用户级成本归因、小智语音网关 IoT |
| **PicoClaw** | 边缘设备/嵌入式（Raspberry Pi/Termux） | Go，单二进制，Launcher 模式 | 极致轻量、Signal 隐私渠道、定时任务防滥用保护 |
| **LobsterAI** | 视觉个性化追求者、主题爱好者 | TypeScript/Electron，CSS 变量主题系统 | 12 套主题、Emoji 图标选择器、Diff 可视化 |
| **NanoClaw** | 合规敏感行业（医疗）、MCP 早期采用者 | TypeScript，PII 主机端脱敏，HTTP 桥接 | PDF/图片 PII 保护、GitHub 渠道自动化工作流 |
| **NullClaw** | Zig 语言爱好者、极简安全追求者 | Zig，无运行时依赖，HTTPS 默认 | 遥测安全基线、HTTP 代理企业适配 |
| **ZeptoClaw/TinyClaw/EasyClaw** | — | — | **边缘化/停滞**，不构成有效竞争 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（日均 50+ 更新）
| 项目 | 阶段特征 | 核心风险 |
|:---|:---|:---|
| **OpenClaw** | 功能爆发 + 架构重构并行 | 稳定性信任崩塌、审阅队列 335 PR 积压 |
| **IronClaw** | 安全架构升级 + v2 引擎落地 | XL PR 积压（#1557 v2 引擎 10 天未合） |
| **CoPaw** | 1.0 发布后热修复冲刺 | 微信渠道不完善、本地模型资源敏感 |

### 🛠️ 质量巩固阶段（日均 10-50 更新，聚焦打磨）
| 项目 | 阶段特征 | 关键任务 |
|:---|:---|:---|
| **PicoClaw** | v0.2.4 冻结，Signal 渠道落地 | 安全漏洞 #2234 评估、CLI 结构化 UI |
| **NanoBot** | 记忆系统重构验证期 | 99 PR 审阅队列治理、Copilot 登录回归修复 |
| **Moltis** | 企业通道扩展 + 浏览器可视化 | Matrix E2EE sqlx 依赖解阻塞 |
| **NanoClaw** | MCP 技能生态爆发 | SSL 证书运维 SLA、技能审核流水线建立 |

### ⚠️ 维护/停滞阶段（日均 <10 更新）
| 项目 | 状态 | 关键观察 |
|:---|:---|:---|
| **NullClaw** | 稳健维护 | 安全基线提升为主，功能迭代保守 |
| **LobsterAI** | 迭代阵痛 | 强制沙箱争议需产品决策回应 |
| **ZeptoClaw** | 核心停滞 | CLI 工具注册表债务 #465 无响应 |
| **TinyClaw/EasyClaw** | 边缘化 | 无有效社区活动 |

---

## 7. 值得关注的趋势信号

### 信号一：从"功能可用"到"生产就绪"的硬性门槛
> **证据**：NanoClaw #1503 SSL 证书 4 天未修引发品牌信任危机；CoPaw #230 任务卡住被标记生产阻塞；IronClaw #1846 UI 升级导致数据丢失警告。

**对开发者的价值**：个人 AI 助手框架的竞争维度正从**功能清单**转向**运维 SLA**——证书管理、零停机升级、诊断工具（`doctor` 命令标准化）成为差异化关键。

### 信号二：MCP 作为"技能即基础设施"的标准化层
> **证据**：NanoClaw 3 个 MCP 技能 PR（Home Assistant/Tailscale/Unraid）积压 10-14 天；Moltis 浏览器实时画面 #531 与 MCP 工具发现直接相关。

**对开发者的价值**：MCP 正在复制 Docker 生态的路径——**技能市场**（Skill Marketplace）将成下一个平台化战场，早期建立审核流水线的项目（如 NanoClaw 需建立的"技能快速通道"）将获得生态定义权。

### 信号三：记忆系统的"云-边"分层架构成为共识
> **证据**：NanoBot 两阶段 MemoryStore（云模型膨胀→本地模型固化失败）、NanoClaw #1356 向量数据库迁移、CoPaw reme-ai 升级。

**对开发者的价值**：纯文本记忆已触及天花板，**语义压缩**（OpenClaw #52422）和**分层固化**（热数据/温数据/冷数据）是长会话 Agent 的必备架构，本地模型部署场景尤为关键。

### 信号四："强制安全" vs "用户自主"的产品哲学冲突
> **证据**：LobsterAI #1179 强制沙箱引发用户强烈反弹（"找不到关的按钮"）；IronClaw OIDC 可选启用获平稳接受；NullClaw HTTPS 默认无争议。

**对开发者的价值**：安全功能的**默认启用策略**需匹配用户心智模型——基础设施层（网络传输）可强制，应用层（执行沙箱）需保留逃逸舱口，否则触发"后门"猜疑（#1173）。

### 信号五：异步任务管理的人机协作范式
> **证据**：IronClaw #1739 WalletConnect 审批（Agent 声明→人工确认→Agent 不可见）、NanoClaw `/tasks` `/taskstop` 命令链、CoPaw 任务中断卡住痛点。

**对开发者的价值**：长任务 Agent 的**可中断性**和**可观测性**是信任基础，"停止按钮有效"应成为基础质量指标，而非高级功能。

---

**报告生成时间**：2026-04-01  
**数据来源**：各项目 GitHub 公开活动  
**分析师**：AI 智能体开源生态技术分析师

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-01

## 1. 今日速览

NanoBot 今日保持**高度活跃**的开发节奏，24小时内处理 **124 个 PR**（待合并 99 个，已合并/关闭 25 个）和 **13 个 Issues**（活跃 8 个，关闭 5 个）。项目正处于**密集迭代期**：Agent 核心架构迎来重大重构（两阶段记忆系统、工具编排策略优化），多通道生态快速扩展（Twilio WhatsApp、小智语音网关、飞书国际版），同时安全加固与稳定性修复并行推进。值得注意的是，**99 个待合并 PR** 显示社区贡献汹涌，维护者需关注合并队列压力。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2688](https://github.com/HKUDS/nanobot/pull/2688) | caitengwei | **微信 TTS 语音消息**（CosyVoice 集成） | 补齐微信通道多模态能力，支持语音触发关键词 |
| [#2282](https://github.com/HKUDS/nanobot/pull/2282) | Jarxi | **Provider 用户追踪字段** | 实现按用户成本归因，企业级部署必备 |
| [#2649](https://github.com/HKUDS/nanobot/pull/2649) | chengyongru | **两阶段记忆系统重构**（MemoryStore + Dream 固化） | 架构级升级：JSONL 游标追踪替代纯文本，解决 [#1174](https://github.com/HKUDS/nanobot/issues/1174) 记忆固化失败问题 |
| [#2676](https://github.com/HKUDS/nanobot/pull/2676) | chengyongru | **修复 flaky 测试**（会话序列化测试） | CI 稳定性提升，移除 asyncio.Event 死锁风险 |
| [#2683](https://github.com/HKUDS/nanobot/pull/2683) | yorkhellen | **ExecTool 根目录路径拦截** | 安全加固，修复 [#2671](https://github.com/HKUDS/nanobot/issues/2671) |
| [#2651](https://github.com/HKUDS/nanobot/issues/2651) | circuitsenatortrench | **MCP SSE Accept 头修复** | 兼容 Z.ai MCP 服务器，已关闭 |

**整体推进评估**：今日合并覆盖 **Agent 核心架构**（记忆系统）、**安全加固**（路径隔离）、**企业功能**（成本追踪）、**通道扩展**（微信 TTS），项目在技术深度和场景广度上均有显著进展。

---

## 4. 社区热点

### 高关注度议题

| 议题 | 类型 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#2573](https://github.com/HKUDS/nanobot/issues/2573) GitHub Copilot 登录失败 | Issue | 👍 8 | **litellm→OpenAI 迁移回归**：OAuth 设备流授权头格式错误，影响 v0.1.4.post6 用户，需紧急修复 |
| [#1174](https://github.com/HKUDS/nanobot/issues/1174) 记忆固化耗时/失败 | Issue | 👍 2, 评论 4 | **本地模型用户痛点**：云模型(GLM-4.7)记忆膨胀后，本地模型无法完成固化，阻塞新会话创建。PR [#2649](https://github.com/HKUDS/nanobot/pull/2649) 已重构架构，待验证解决 |
| [#2584](https://github.com/HKUDS/nanobot/pull/2584) 小智语音网关支持 | PR | 高复杂度 | **IoT/硬件生态扩展**：ESP32 设备 WebSocket 网关 + Opus 音频 + MCP 工具管理，瞄准智能家居场景 |
| [#2684](https://github.com/HKUDS/nanobot/pull/2684) 命令包装器沙箱支持 | PR | 安全关键 | **企业安全需求**：通过 `commandWrapper` 配置实现 Docker/gVisor 沙箱，满足生产环境隔离要求 |

**社区信号**：企业级部署需求（安全隔离、成本追踪、日志轮转）与消费级体验优化（语音交互、记忆可靠性）形成双轮驱动。

---

## 5. Bug 与稳定性

| 严重程度 | 议题 | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2573](https://github.com/HKUDS/nanobot/issues/2573) GitHub Copilot 登录失败 | Open | v0.1.4.post6 全量用户 | ❌ 无 |
| 🟡 **中** | [#2669](https://github.com/HKUDS/nanobot/issues/2669) SSRF 误拦截 Tailscale CGNAT | Open | 企业 VPN/Overlay 网络用户 | ❌ 无 |
| 🟡 **中** | [#2660](https://github.com/HKUDS/nanobot/issues/2660) `restrictToWorkspace` 阻断频道文件读取 | Open | 钉钉/飞书等频道用户 | ❌ 无 |
| 🟢 **低** | [#2680](https://github.com/HKUDS/nanobot/issues/2680) 定时任务 name 与 message 冗余合并 | Open | 定时任务用户 | ❌ 无 |
| ✅ **已修复** | [#2671](https://github.com/HKUDS/nanobot/issues/2671) ExecTool 根目录路径未拦截 | Closed | Windows 工作区隔离 | [#2683](https://github.com/HKUDS/nanobot/pull/2683) |
| ✅ **已修复** | [#2651](https://github.com/HKUDS/nanobot/issues/2651) MCP SSE 缺失 Accept 头 | Closed | Z.ai MCP 服务器用户 | 已合并 |

**稳定性评估**：litellm→OpenAI 迁移引入的回归问题（#2573）是当前最大风险，建议优先处理；SSRF 策略需要可配置白名单机制以平衡安全与可用性。

---

## 6. 功能请求与路线图信号

| 议题/PR | 需求描述 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2662](https://github.com/HKUDS/nanobot/issues/2662) Azure OpenAI 迁移至 Responses API | OpenAI 推荐新 API，支持服务端推理存储 | ⭐⭐⭐⭐⭐ | 官方推荐，已有 PR 依赖链，架构演进方向 |
| [#2685](https://github.com/HKUDS/nanobot/issues/2685) Gateway 日志轮转支持 | 生产环境服务化必备 | ⭐⭐⭐⭐⭐ | 企业部署基础能力，社区反复诉求 |
| [#2684](https://github.com/HKUDS/nanobot/pull/2684) 命令包装器沙箱 | Docker/gVisor 隔离执行 | ⭐⭐⭐⭐⭐ | 安全关键，PR 已提交，企业刚需 |
| [#2584](https://github.com/HKUDS/nanobot/pull/2584) 小智语音网关 | ESP32 IoT 生态 | ⭐⭐⭐⭐☆ | 硬件生态扩展，复杂度较高需评审 |
| [#2682](https://github.com/HKUDS/nanobot/pull/2682) Twilio WhatsApp 通道 | 官方 API 替代 Baileys | ⭐⭐⭐⭐☆ | 纯 Python 实现，无 Node 依赖，稳定性优于桥接方案 |
| [#2677-2681](https://github.com/HKUDS/nanobot/pull/2677) Agent 任务生命周期管理 | `/tasks` `/taskstop` 等命令 | ⭐⭐⭐⭐☆ | 长任务可观测性，PR 链式依赖，体验优化 |
| [#2561](https://github.com/HKUDS/nanobot/pull/2561) QQ 即时确认消息 | 解决 40-90 秒无反馈问题 | ⭐⭐⭐☆☆ | 体验优化，API 限制下的折中方案 |

**路线图预测**：下一版本（v0.1.5） likely 聚焦 **Agent 可靠性**（记忆系统、任务管理）+ **企业就绪**（日志、沙箱、成本追踪）+ **通道扩展**（WhatsApp、语音）。

---

## 7. 用户反馈摘要

### 真实痛点

> *"使用云模型(GLM-4.7)一段时间后，本地模型根本无法完成记忆固化，一直失败，无法开始新会话"* — [#1174](https://github.com/HKUDS/nanobot/issues/1174) Rose22

**解读**：混合部署场景（云+本地）下的记忆系统瓶颈，PR [#2649](https://github.com/HKUDS/nanobot/pull/2649) 的两阶段架构针对性解决。

> *"OAuth 登录报错：Authorization header is badly formatted"* — [#2573](https://github.com/HKUDS/nanobot/issues/2573) cheanus

**解读**：核心依赖迁移（litellm→OpenAI）的回归测试覆盖不足，需建立 provider 认证自动化测试矩阵。

> *"nanobot gateway 输出到控制台，没有日志，希望自动按天轮转"* — [#2685](https://github.com/HKUDS/nanobot/issues/2685) longdafeng

**解读**：从开发工具向生产服务转型的典型需求，基础设施可观测性缺口。

### 满意场景

- 微信 TTS 语音交互（[#2688](https://github.com/HKUDS/nanobot/pull/2688)）——多模态体验提升
- Twilio WhatsApp 纯 Python 实现（[#2682](https://github.com/HKUDS/nanobot/pull/2682)）——摆脱 Node.js 桥接依赖

---

## 8. 待处理积压

| 议题/PR | 创建时间 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|
| [#1174](https://github.com/HKUDS/nanobot/issues/1174) 记忆固化失败 | 2026-02-25 | **35 天** | 高影响功能缺陷，虽有架构重构 PR，但用户验证不足 |
| [#1164](https://github.com/HKUDS/nanobot/pull/1164) 越南语 README | 2026-02-25 | **35 天** | 国际化贡献，低技术风险，可快速合并 |
| [#1896](https://github.com/HKUDS/nanobot/pull/1896) 可配置输出截断 | 2026-03-11 | **21 天** | 用户体验优化，环境变量方案成熟，待评审 |
| [#2282](https://github.com/HKUDS/nanobot/pull/2282) 用户追踪字段 | 2026-03-20 | **12 天** | ✅ 今日已合并 |

**维护者行动建议**：
1. **紧急**：验证 [#2649](https://github.com/HKUDS/nanobot/pull/2649) 对 [#1174](https://github.com/HKUDS/nanobot/issues/1174) 的修复效果，关闭 35 天积压
2. **本周**：处理 [#2573](https://github.com/HKUDS/nanobot/issues/2573) Copilot 登录回归，影响面大
3. **流程**：建立 **99 个待合并 PR** 的优先级队列，避免贡献者流失

---

*日报生成时间：2026-04-01 | 数据来源：HKUDS/nanobot GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-01

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内处理 **47 个 PR 合并/关闭**（53% 处理率）和 **17 个 Issue 关闭**（53% 解决率），社区贡献持续强劲。核心进展集中在**多提供商模型路由修复**、**Signal 渠道正式接入**、**CLI 体验升级**三大方向。WebUI 相关 Issue 激增，反映用户基数扩大后的体验打磨需求。项目发布 **v0.2.4-nightly.20260331** 夜间构建，为即将发布的 v0.2.4 稳定版做最后准备。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.4-nightly.20260331.4d348247

| 属性 | 内容 |
|:---|:---|
| **版本类型** | 自动化夜间构建（可能不稳定） |
| **基于分支** | `main` |
| **完整变更** | [Compare v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main) |

> ⚠️ **使用建议**：此为 CI 自动构建，建议测试环境验证，生产环境等待 v0.2.4 正式版。

**v0.2.4 预期亮点**（基于近期合并）：
- Signal 消息渠道正式支持（PR #630）
- 跨提供商模型回退链修复（PR #2143）
- 定时任务最小间隔保护（PR #1656）
- Gemini CLI 提供商接入（PR #1633）

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#630](https://github.com/sipeed/picoclaw/pull/630) | achton | **Signal 渠道支持**（通过 signal-cli） | 填补隐私敏感用户的消息渠道缺口，实现端到端加密 |
| [#2143](https://github.com/sipeed/picoclaw/pull/2143) | corevibe555 | **修复跨提供商模型回退** | 解决 `model_fallbacks` 跨不同提供商时 API 指向错误的严重问题 |
| [#1656](https://github.com/sipeed/picoclaw/pull/1656) | fernandostahelin | **定时任务最小间隔限制** | 防止 LLM 误配置导致 API 滥用和 Token 浪费 |
| [#1633](https://github.com/sipeed/picoclaw/pull/1633) | securityguy | **Gemini CLI 提供商** | 统一 CLI 提供商家族（claude-cli/codex-cli/gemini-cli） |
| [#1631](https://github.com/sipeed/picoclaw/pull/1631) | suboss87 | **执行工具符号链接逃逸修复** | 安全加固：防止 `restrictToWorkspace` 被符号链接绕过 |
| [#2221](https://github.com/sipeed/picoclaw/pull/2221) | Alexandersfg4 | **Telegram MarkdownV2 文档** | 改善渠道配置文档覆盖 |
| [#2226](https://github.com/sipeed/picoclaw/pull/2226) | lc6464 | **模型可用性状态优化** | WebUI 模型状态显示更精确，保留 API Key 预览 |
| [#2102](https://github.com/sipeed/picoclaw/pull/2102) | stevef1uk | **项目隔离加固** | 多租户场景安全性提升 |

**整体进展评估**：今日合并聚焦**稳定性**（3 个安全/修复类）和**生态扩展**（2 个新渠道/提供商），v0.2.4 功能集已冻结，进入质量打磨阶段。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#1737](https://github.com/sipeed/picoclaw/issues/1737) Launcher WebSocket 端口文档缺失 | 7 | **文档完整性** | 已关闭。用户反复遇到 Web UI 输入框禁用问题，根源是端口 18800 未文档化。反映快速迭代中配置文档滞后于代码。 |
| 2 | [#39](https://github.com/sipeed/picoclaw/issues/39) `picoclaw doctor` 诊断命令 | 6 | **运维体验** | 已关闭。社区强烈需求一站式健康检查工具，类似 OpenClaw 的 doctor 系统。配置验证、提供商健康、系统状态是三大痛点。 |
| 3 | [#2202](https://github.com/sipeed/picoclaw/issues/2202) CLI 结构化终端 UI | 6 | **开发者体验** | 开放中。用户希望现代 CLI 的盒式布局、列对齐输出，同时保持管道友好。已有对应 PR #2229 同日提交。 |
| 4 | [#2179](https://github.com/sipeed/picoclaw/issues/2179) 登录页面配对 Commit 6ea364e | 5 | **认证体验** | 开放中。用户指出认证提交缺少配套 UI，导致功能断裂。反映功能拆分交付的协调问题。 |
| 5 | [#2233](https://github.com/sipeed/picoclaw/issues/2233) 标准化入站上下文与路由解耦 | 4 | **架构演进** | 开放中。核心贡献者提出的技术债清理，涉及 channel/agent/session 的紧耦合重构，影响长期可维护性。 |

### 👍 反应最多的 Issue

| Issue | 👍 | 信号 |
|:---|:---:|:---|
| [#2208](https://github.com/sipeed/picoclaw/issues/2208) 废弃 TUI 迁移至 CLI | 4 | **强烈共识**：社区认可 TUI 维护负担过重，支持资源向 WebUI/CLI 集中 |
| [#2213](https://github.com/sipeed/picoclaw/issues/2213) WebUI 无法连接自启动 Gateway | 2 | **阻塞性问题**：Launcher 模式的自举故障影响新手体验 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2213](https://github.com/sipeed/picoclaw/issues/2213) | 开放 | WebUI Launcher 模式无法连接自启动 Gateway（`PICOCLAW_LAUNCHER_TOKEN` 场景） | 无 |
| 🔴 **高** | [#2234](https://github.com/sipeed/picoclaw/issues/2234) | 开放 | **安全漏洞**：HistoryFile 硬编码至 `os.TempDir()`，存在符号链接攻击和信息泄露风险 | 无 |
| 🟡 **中** | [#2212](https://github.com/sipeed/picoclaw/issues/2212) | 已关闭 | API Key 已配置但 WebUI 显示未配置 | #2226 相关 |
| 🟡 **中** | [#1650](https://github.com/sipeed/picoclaw/issues/1650) | 已关闭 | 服务无限重启（Feishu + Volcengine 场景） | 已修复 |
| 🟡 **中** | [#1634](https://github.com/sipeed/picoclaw/issues/1634) | 已关闭 | 多 Agent 共享 Provider 实例，导致模型选择失效 | #2098 |
| 🟢 **低** | [#1624](https://github.com/sipeed/picoclaw/issues/1624) | 已关闭 | Anthropic 模型 ID 点号未归一化为破折号 | 已修复 |
| 🟢 **低** | [#1578](https://github.com/sipeed/picoclaw/issues/1578) | 已关闭 | `image_model` 配置未生效，图片始终路由至主模型 | 已修复 |

**稳定性评估**：今日关闭 7 个 Bug 中的 5 个，修复率 71%。但 **#2213** 和 **#2234** 两个开放问题分别影响用户体验和安全性，建议优先处理。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---:|:---|
| [#2202](https://github.com/sipeed/picoclaw/issues/2202) / [#2229](https://github.com/sipeed/picoclaw/pull/2229) CLI 结构化 UI | 体验 | **高** | PR 已同日提交，作者响应迅速，v0.2.5 可能纳入 |
| [#2208](https://github.com/sipeed/picoclaw/issues/2208) 废弃 TUI | 路线图 | **高** | 4 👍 强烈共识，维护者已标记 `status: discussion` |
| [#2179](https://github.com/sipeed/picoclaw/issues/2179) 登录页面 | 认证 | **中** | 功能配套需求，取决于 #2179 相关提交者跟进 |
| [#2230](https://github.com/sipeed/picoclaw/issues/2230) Venice AI 提供商 | 提供商 | **中** | 隐私叙事契合项目定位，但需评估维护成本 |
| [#2232](https://github.com/sipeed/picoclaw/issues/2232) Serp API 搜索 | 工具 | **中** | Brave 收费后的替代方案，社区工具生态扩展 |
| [#2217](https://github.com/sipeed/picoclaw/issues/2217) Token 消耗仪表盘 | WebUI | **低-中** | 企业/重度用户需求，需评估优先级 |
| [#2216](https://github.com/sipeed/picoclaw/issues/2216) 思考内容展示 | WebUI | **低-中** | 模型能力跟随需求，依赖 UI 设计资源 |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API 迁移 | 架构 | **低** | 技术债类大改动，需 RFC 阶段充分讨论 |

---

## 7. 用户反馈摘要

### 😊 满意点
- **Signal 渠道**：隐私敏感用户终于获得端到端加密选项（PR #630 合并反馈）
- **跨提供商回退修复**："终于可以 Anthropic → OpenAI 自动切换了"（#2143 关联 Issue）
- **定时任务保护**：防止 LLM "发疯" 调度浪费 Token（#1656）

### 😤 痛点
- **WebUI 配置同步问题**："Key 明明在 `.security.yaml` 里，UI 却显示未配置"（#2212）
- **文档滞后**："端口 18800 找了我两天"（#1737）
- **架构 32 位限制**："飞书不支持 armv7，被迫换设备"（#407）
- **模型热加载缺失**："新增模型必须重启 gateway"（#1493）

### 💡 使用场景洞察
- **边缘部署**：Raspberry Pi、Termux、Lichee RV 等 ARM/嵌入式场景需求突出（#407, #2209, #2181）
- **多 Agent 隔离**：用户尝试为不同任务配置不同模型，但遭遇 Provider 共享问题（#1634）
- **企业运维**：需要 doctor 工具、Token 仪表盘、审计日志（#39, #2217）

---

## 8. 待处理积压

### ⏰ 需维护者关注

| Issue/PR | 创建时间 | 阻塞原因 | 建议动作 |
|:---|:---|:---|:---|
| [#2234](https://github.com/sipeed/picoclaw/issues/2234) 安全漏洞 | 今日 | 新报告，无响应 | 24h 内评估，考虑 v0.2.4 阻塞 |
| [#2213](https://github.com/sipeed/picoclaw/issues/2213) Launcher 自举故障 | 今日 | 新报告，高 👍 | 复现确认，关联 Gateway 启动逻辑 |
| [#2233](https://github.com/sipeed/picoclaw/issues/2233) 架构重构 RFC | 今日 | 技术债，需设计 | 标记 `status: rfc`，安排架构 review |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) Responses API 迁移 | 2天 | 影响面大，待决策 | 创建 tracking issue，分阶段评估 |
| [#2208](https://github.com/sipeed/picoclaw/issues/2208) TUI 废弃 | 今日 | 需正式决策 | 7 天讨论期后维护者决议 |

### 📊 积压健康度
- **0-3 天新 Issue**：8 个（正常流动）
- **>7 天无响应**：0 个（响应及时）
- **有 PR 待合并**：39 个（需 review 资源）

---

*日报生成时间：2026-04-01 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-01

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度开发态势**：24小时内产生 **27 个 PR 更新**（7 个已合并/关闭，20 个待审）和 **5 个活跃 Issue**，无新版本发布。核心趋势显示团队正密集推进**稳定性加固**（Slack 线程批处理、容器队列管理、渠道连接韧性）与**安全增强**（PII 保护扩展、命令注入防护），同时社区贡献的**MCP 集成技能**（Home Assistant、Tailscale、Unraid）持续涌入。PR 合并率约 26%，存在明显审阅积压，需关注维护带宽。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1569](https://github.com/qwibitai/nanoclaw/pull/1569) | blissito | **安全+稳定性三合一**：命令注入防护、会话错误自动恢复、单字符 `.env` 解析修复 | 消除高危安全漏洞，提升生产环境容错能力 |
| [#1564](https://github.com/qwibitai/nanoclaw/pull/1564) | soramameen | **GitHub 渠道上线**：Webhook 触发 → 自动 clone/branch/实现/PR 完整工作流 | 打通"需求→代码"闭环，标志 NanoClaw 向自主开发代理演进 |
| [#1563](https://github.com/qwibitai/nanoclaw/pull/1563) | simonstudios | **PII 保护扩展至 PDF/图片**：主机端提取+脱敏，容器零接触原始内容 | 合规性关键里程碑，为多模态场景铺平道路 |
| [#1560](https://github.com/qwibitai/nanoclaw/pull/1560) | raye-deng | **RingClaw HTTP 桥接**：同步 HTTP API（端口3929）供外部系统集成 | 生态互操作性突破，降低第三方接入门槛 |
| [#1341](https://github.com/qwibitai/nanoclaw/pull/1341) | burk80 | **用户级系统提示层**：`system-prompt.md` 全局注入所有代理调用 | 赋予终端用户核心行为定制权，无需改代码 |
| [#1002](https://github.com/qwibitai/nanoclaw/pull/1002) | sigmabot-coder | **Telegram 消息去重**：修复调度器与 IPC 双路径重复发送 | 消除消息骚扰，提升用户体验一致性 |

**整体迈进评估**：今日合并内容覆盖**安全基线、多模态隐私、渠道生态、用户定制**四大战略方向，项目成熟度显著提升。GitHub 渠道的落地尤为关键，标志着从"对话代理"向"执行代理"的能力跃迁。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求分析 |
|:---|:---|:---:|:---|
| 🔥 | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) SSL 证书失效 | **7 条** | **基础设施信任危机**：`nanoclaw.dev` 官网证书过期 4 天未修复，直接影响新用户第一印象与文档可信度。诉求：运维响应 SLA 机制 |
| 🥈 | [#1211](https://github.com/qwibitai/nanoclaw/issues/1211) `/new` 会话重置命令 | **3 条** | **成本控制刚需**：用户明确抱怨"token waste"，长会话历史导致费用累积。关联 PR [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) 已提交待审，社区期待快速合并 |
| 🥉 | [#1424](https://github.com/qwibitai/nanoclaw/issues/1424) Fork 安全加固 | **3 条** | **企业合规焦虑**：医疗场景用户担忧公共 Fork 暴露敏感配置，需官方提供私有化部署安全指南 |

**深层信号**：社区已从"功能尝鲜"阶段进入**生产就绪**诉求期——证书、成本、合规成为高频词，项目需建立企业级支持体系。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#1568](https://github.com/qwibitai/nanoclaw/issues/1568) | **Slack 多线程消息丢失**：不同线程消息被错误批处理，仅最后线程获回复 | 🆕 **今日新报，无 fix PR** |
| 🔴 **高** | [#1567](https://github.com/qwibitai/nanoclaw/pull/1567) | **任务容器阻塞用户消息**：调度任务完成后容器空闲等待，期间用户消息被错误排队 | 🛠️ **PR 待审**（iuliandita 今日提交） |
| 🟡 **中** | [#1566](https://github.com/qwibitai/nanoclaw/pull/1566) | **渠道连接失败导致服务崩溃**：网络瞬断引发全服务宕机，无自动恢复 | 🛠️ **PR 待审**（iuliandita 今日提交） |
| 🟡 **中** | [#1220](https://github.com/qwibitai/nanoclaw/pull/1220) | **Git 内存不足崩溃**：大仓库操作触发 SIGBUS | 🛠️ **PR 待审**（13 天无更新） |
| 🟡 **中** | [#1219](https://github.com/qwibitai/nanoclaw/pull/1219) | **SDK 中断被误判为致命错误**：AbortController 触发进程退出 | 🛠️ **PR 待审**（13 天无更新） |

**稳定性评估**：今日暴露的 **Slack 线程批处理 Bug**（#1568）是核心回归风险，影响多线程场景下的可靠性承诺。iuliandita 双 PR（#1566/#1567）针对连接韧性与队列管理，建议优先审阅。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 实现可能性 | 纳入版本预测 |
|:---|:---|:---|:---|
| [#1211](https://github.com/qwibitai/nanoclaw/issues/1211) + [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) | 会话重置 `/new` 命令 | ⭐⭐⭐⭐⭐ PR 已就绪 | **下一版本** |
| [#1356](https://github.com/qwibitai/nanoclaw/issues/1356) | 代理内存系统重构（向量数据库迁移） | ⭐⭐⭐⭐ 研究深入，5 👍 支持 | **v2.x 架构升级** |
| [#1424](https://github.com/qwibitai/nanoclaw/issues/1424) | Fork 私有化/安全加固指南 | ⭐⭐⭐ 需文档+工具链 | **文档站更新** |
| [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) | UnraidClaw MCP 集成 | ⭐⭐⭐⭐⭐ 技能 PR 待审 | **技能市场** |
| [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) | Home Assistant MCP 集成 | ⭐⭐⭐⭐⭐ 技能 PR 待审 | **技能市场** |
| [#1260](https://github.com/qwibitai/nanoclaw/pull/1260) | Tailscale MCP 集成 | ⭐⭐⭐⭐⭐ 技能 PR 待审 | **技能市场** |
| [#1565](https://github.com/qwibitai/nanoclaw/pull/1565) | 技能持久化存储 `SKILL_DATA_DIR` | ⭐⭐⭐⭐⭐ PR 今日提交 | **下一版本** |

**路线图信号**：MCP 技能生态呈**爆发式增长**（3 个基础设施类技能待审），建议建立**技能审核流水线**避免积压。内存系统重构（#1356）是当前技术债务中最具战略性的议题。

---

## 7. 用户反馈摘要

### 真实痛点
> *"token waste — every new task carries full conversation history"* — [#1211](https://github.com/qwibitai/nanoclaw/issues/1211)  
> **场景**：长周期项目运行，历史上下文持续累积导致 API 费用失控

> *"The fork is public and can not be made private... health care system"* — [#1424](https://github.com/qwibitai/nanoclaw/issues/1424)  
> **场景**：医疗合规场景，公共 Fork 暴露配置风险，需私有化部署指南

> *"nanoclaw.dev has an invalid ssl cert right now"* — [#1503](https://github.com/qwibitai/nanoclaw/issues/1503)  
> **场景**：新用户评估阶段，证书过期直接损害信任

### 满意之处
- GitHub 渠道自动化工作流（#1564）获期待，"quest" 隐喻降低认知门槛
- PII 保护扩展（#1563）体现隐私优先设计哲学

### 不满之处
- 基础设施运维响应慢（证书 4 天未修）
- PR 审阅周期不透明（多个技能 PR 积压 10+ 天）

---

## 8. 待处理积压

| 类型 | 条目 | 停滞时间 | 风险/建议 |
|:---|:---|:---:|:---|
| **Issue** | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) SSL 证书 | 4 天 | 🔴 **品牌信任危机**，建议 24h 内修复或启用备用域名 |
| **PR** | [#744](https://github.com/qwibitai/nanoclaw/pull/744) S3 存储技能 | 26 天 | 🟡 标记为 Blocked，需维护者澄清阻塞原因 |
| **PR** | [#1220](https://github.com/qwibitai/nanoclaw/pull/1220) Git 内存修复 | 13 天 | 🟡 生产稳定性相关，建议优先审阅 |
| **PR** | [#1219](https://github.com/qwibitai/nanoclaw/pull/1219) SDK 中断处理 | 13 天 | 🟡 与 #1219 同属 agent-runner 可靠性，可批量审阅 |
| **PR** | [#1188](https://github.com/qwibitai/nanoclaw/pull/1188) / [#1327](https://github.com/qwibitai/nanoclaw/pull/1327) / [#1260](https://github.com/qwibitai/nanoclaw/pull/1260) MCP 技能三件套 | 10-14 天 | 🟡 建议建立"技能快速通道"标签，与核心代码变更分流 |

---

**数据截止**：2026-04-01 00:00 UTC  
**报告生成**：AI 智能体与个人 AI 助手领域开源项目分析师

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-01

---

## 1. 今日速览

NullClaw 今日保持**高活跃开发状态**，24小时内产生 **7 个 PR**（6 个待审、1 个关闭）和 **1 个活跃 Issue**。核心贡献者 `manelsen` 单日提交 5 个 PR，主导了配置解析修复、可观测性安全加固、代码重构及测试覆盖提升。项目呈现**密集迭代特征**，但 Issues 响应相对滞后——#721 配置解析 Bug 已存在 6 天，虽有关联修复 PR #728 待审，尚未正式关闭。整体健康度：**开发活跃，Issue 闭环需加强**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#753](https://github.com/nullclaw/nullclaw/pull/753) → [#754](https://github.com/nullclaw/nullclaw/pull/754) | 关闭 → 重开 | 错误文本谓词重构 | 代码质量：将 `isRateLimitedText` 等工具函数提取至独立 `text_helpers.zig` 模块，消除 `error_classify.zig` 与 `reliable.zig` 的重复代码（125行→88行精简版） |
| [#752](https://github.com/nullclaw/nullclaw/pull/752) | 待合并 | OTLP 端点默认 HTTPS | **安全基线提升**：遥测数据（trace ID、用户ID、操作名）默认加密传输，符合 AGENTS.md 安全优先原则 |
| [#751](https://github.com/nullclaw/nullclaw/pull/751) | 待合并 | Sandbox 接口测试覆盖 | 消除零测试盲区：`NoopSandbox` 及接口边界条件获 8 个单元测试保护 |
| [#756](https://github.com/nullclaw/nullclaw/pull/756) | 待合并 | 容器环境 onboarding 修复 | 用户体验：交互式初始化尊重 `NULLCLAW_HOME`/`NULLCLAW_WORKSPACE` 环境变量，解决 #747 回归问题 |
| [#755](https://github.com/nullclaw/nullclaw/pull/755) | 待合并 | HTTP 代理环境变量支持 | 企业/网络受限场景：`std.http.Client` 支持 `http_proxy`/`https_proxy`，与 curl 行为对齐 |
| [#728](https://github.com/nullclaw/nullclaw/pull/728) | 待合并 | 自定义 Provider 主模型解析修复 | **关键 Bug 修复**：解决 Cloudflare AI 等长路径 API endpoint 的配置解析失败（关联 #721） |

**整体迈进**：今日 PR 集群覆盖**安全加固、测试债务偿还、配置鲁棒性、企业网络适配**四大维度，项目成熟度显著提升。

---

## 4. 社区热点

| 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#721](https://github.com/nullclaw/nullclaw/issues/721) [bug] Configure api url in config file parse error | 👍 0, 💬 1, 存活 6 天 | **真实痛点**：用户尝试配置 Cloudflare AI Gateway 等长路径自定义 Provider 时遭遇解析失败。配置语法 `custom:https://...` 与嵌套 `base_url` 的交互逻辑存在歧义。用户需清晰的**复杂 URL 配置文档**及**验证工具**。 |
| [#755](https://github.com/nullclaw/nullclaw/pull/755) HTTP 代理支持 | 企业场景刚需 | 代理支持是**中国大陆及企业防火墙环境**的准入门槛，PR 作者 `juvenn` 提供了可验证的测试命令，降低审查成本。 |

**信号**：社区需求从"基础功能可用"转向**企业级部署适配**（代理、HTTPS 默认、容器环境）。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | 自定义 Provider 配置解析失败（Cloudflare AI 等长路径 URL） | 待验证关闭 | [#728](https://github.com/nullclaw/nullclaw/pull/728) 待审 |
| 🟡 **中** | 容器环境 onboarding 路径默认值错误 | 已修复待合并 | [#756](https://github.com/nullclaw/nullclaw/pull/756) 待审 |

**风险评估**：#721 若 #728 合并不及时，可能持续影响新用户接入 Cloudflare/自建网关场景。建议优先审查。

---

## 6. 功能请求与路线图信号

| 需求类型 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| HTTP/HTTPS 代理原生支持 | PR #755 | **高** | 已实现，待合并；符合企业合规趋势 |
| 遥测安全默认（HTTPS OTLP） | PR #752 | **高** | 已作为安全基线实现，AGENTS.md 明确 mandate |
| 复杂 Provider URL 配置验证 | Issue #721 衍生 | 中 | 需配套 CLI 验证工具或文档，暂无独立 PR |
| 容器/CI 环境体验优化 | PR #756 | **高** | 回归测试已覆盖，维护者反馈积极 |

**下一版本信号**：安全加固（HTTPS 默认）+ 企业网络适配（代理）+ 配置鲁棒性构成 v0.x 版本核心主题。

---

## 7. 用户反馈摘要

> **痛点提炼**（来自 #721）：
> - **配置语法困惑**：`custom:` 前缀与完整 URL 的拼接逻辑不透明
> - **错误反馈不足**：解析失败时未指明是 URL 格式问题还是 Provider 未识别
> - **文档缺口**：Cloudflare AI Gateway、Azure OpenAI 等复杂端点缺乏配置示例

> **满意点**：
> - 项目响应企业需求速度快（代理 PR 24 小时内提交）
> - 安全优先设计获认可（HTTPS 默认 PR）

---

## 8. 待处理积压

| 条目 | 天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#721](https://github.com/nullclaw/nullclaw/issues/721) | 6 天 | 用户配置阻塞，关联 PR #728 待审 | **优先合并 #728**，关闭 Issue 并补充 Cloudflare 配置示例至文档 |
| #728 本身 | 5 天 | 修复 PR 滞留，可能因审查队列拥堵 | 维护者分配审查人，或批量合并今日 `manelsen` PR 集群 |

**维护者提醒**：今日 `manelsen` 贡献的 5 个 PR 存在逻辑关联（#753/754 为同一重构的迭代），建议集中审查以避免上下文切换成本。

---

*日报生成时间：2026-04-01 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-01

---

## 1. 今日速览

IronClaw 昨日保持**极高活跃度**：50 条 Issues 更新（34 活跃/新开，16 关闭）、50 条 PR 更新（35 待合并，15 已合并/关闭），并发布 **v0.24.0** 版本。社区焦点集中在**安全架构重构**（跨通道授权、TOCTOU 竞态修复）、**执行引擎 v2 架构**的渐进式落地，以及**多通道配置系统**的扩展性改进。CI 自动化审查持续高强度运转，单日自动生成 8 条安全/架构问题并全部闭环。项目整体健康度良好，但 XL 级 PR 积压（4 个）需关注合并节奏。

---

## 2. 版本发布

### [ironclaw-v0.24.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.24.0) | 2026-03-31

| 类别 | 内容 |
|:---|:---|
| **新增功能** | ① **OIDC JWT 认证**（[#1463](https://github.com/nearai/ironclaw/pull/1463)）：支持反向代理部署场景的标准化身份验证<br>② **Web UI 自定义 LLM Provider**（[#1340](https://github.com/nearai/ironclaw/pull/1340)）：用户可通过界面直接配置非默认模型提供商<br>③ **递归 Bundle 指令**（skills 模块）：技能包支持嵌套引用 |
| **破坏性变更** | 无明确 Breaking Change；OIDC 功能为可选启用，不影响现有部署 |
| **迁移注意事项** | 反向代理用户需配置 `OIDC_ISSUER_URL` 和 `OIDC_CLIENT_ID`；Web UI 自定义 Provider 需配合 `LLM_ALLOW_LOCAL_NETWORK`（见 PR [#1696](https://github.com/nearai/ironclaw/pull/1696)）以支持局域网端点 |

> ⚠️ **重要提醒**：Issue [#1846](https://github.com/nearai/ironclaw/issues/1846) 报告通过 UI 的"升级实例"按钮会导致**数据回滚和数据丢失**（从 v0.24.0 回退至 v0.21.0）。**建议通过 SSH 终端执行升级，而非 Web UI**。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（15 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1590](https://github.com/nearai/ironclaw/pull/1590) | zmanian | **阻断跨通道授权线程劫持**（CRITICAL 安全修复） | 消除 100% 置信度的授权绕过漏洞，为异步交易审批系统奠定基础 |
| [#1845](https://github.com/nearai/ironclaw/pull/1845) | PierreLeGuen | **修复 Slack 异步消息路由**（DM → 正确频道） | 解决 [#1839](https://github.com/nearai/ironclaw/issues/1839) 报告的配对死锁问题，提升企业 Slack 部署体验 |
| [#1314](https://github.com/nearai/ironclaw/pull/1314) | TheWolfOfWalmart | **Telegram 语音消息支持**（sendVoice/OGG/Opus） | 解锁 TTS 语音回复能力（前置依赖 #90），多通道体验对齐 |
| [#1824](https://github.com/nearai/ironclaw/pull/1824) | hanakannzashi | WhatsApp 锁文件清理 | 基础设施健康度维护 |

**架构级进展**：执行引擎 v2（[#1557](https://github.com/nearai/ironclaw/pull/1557)）和统一配置系统（[#1722](https://github.com/nearai/ironclaw/pull/1722)）持续迭代，虽未合并但已进入深度 review 阶段，预计构成 v0.25.0 的核心底座。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| # | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| [#1739](https://github.com/nearai/ironclaw/issues/1739) | Async transaction approval system with WalletConnect | 4 | **高价值交易的人机分离审批**：Agent 声明意图 → 工具模拟 → 安全通道人工确认 → Agent 不可见审批过程 | 🔥 **OPEN**，架构设计阶段 |
| [#1510](https://github.com/nearai/ironclaw/issues/1510) | Gemini function call 缺少 thought_signature | 3 | Google Gemini 3.1 Flash Lite 工具调用兼容性修复 | ✅ **CLOSED** |
| [#1251](https://github.com/nearai/ironclaw/issues/1251) | 通道特定配置映射缺乏扩展性 | 2 | 架构债务：Channel 配置硬编码，阻碍新通道接入 | 🔥 **OPEN**，CI 自动生成 |
| [#1249](https://github.com/nearai/ironclaw/issues/1249) | Telegram 业务逻辑膨胀 ExtensionManager | 2 | 架构清洁度：通道特定逻辑污染核心扩展管理器 | 🔥 **OPEN** |
| [#1248](https://github.com/nearai/ironclaw/issues/1248) | 硬编码通道逻辑违反 CLAUDE.md 架构 | 2 | 最高优先级架构债务（置信度 95%） | 🔥 **OPEN** |

**热点分析**：社区核心诉求呈现**"安全优先、架构还债"**双轨特征。WalletConnect 异步审批（#1739）代表用户对企业级安全场景的强烈需求；而 CI 自动生成的 3 条架构问题（#1248-1251）反映维护团队正通过自动化手段系统性治理技术债务。

---

## 5. Bug 与稳定性

### 今日报告/处理的 Bug（按严重程度）

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| **CRITICAL** | [#1832](https://github.com/nearai/ironclaw/issues/1832) | 工作目录劫持漏洞：`ensure_worker_image()` Dockerfile 搜索路径可被污染 | [#1830](https://github.com/nearai/ironclaw/pull/1830) | ✅ **CLOSED** |
| **CRITICAL** | [#1486](https://github.com/nearai/ironclaw/issues/1486) | TOCTOU 竞态：审批线程解析的时间差攻击 | [#1818](https://github.com/nearai/ironclaw/pull/1818) | ✅ **CLOSED**（统一 Gate 架构根治） |
| **HIGH** | [#1833](https://github.com/nearai/ironclaw/issues/1833)-[#1837](https://github.com/nearai/ironclaw/issues/1837) | Docker 构建/拉取超时、僵尸进程泄漏、stderr 缓冲区溢出等 5 项 | [#1830](https://github.com/nearai/ironclaw/pull/1830) | ✅ **CLOSED** |
| **HIGH** | [#1249](https://github.com/nearai/ironclaw/issues/1249)-[#1251](https://github.com/nearai/ironclaw/issues/1251) | 架构债务：通道逻辑硬编码、扩展性不足 | 待规划 | 🔥 **OPEN** |
| **MEDIUM** | [#1827](https://github.com/nearai/ironclaw/issues/1827) | Ollama 嵌入错误：HTTP 400 Bad Request | 无 | 🔥 **OPEN** |
| **MEDIUM** | [#1825](https://github.com/nearai/ironclaw/issues/1825) | `ironclaw doctor` 误报 NEAR AI 会话状态 | 无 | 🔥 **OPEN** |
| **MEDIUM** | [#1842](https://github.com/nearai/ironclaw/issues/1842) | Anthropic 429 限流未重试，直接暴露为不可恢复错误 | 无 | 🔥 **OPEN** |

**稳定性信号**：CI 自动化审查效率极高——昨日生成的 8 条安全/稳定性问题（#1832-1838）**全部当日闭环**。但用户报告的新问题（Ollama 嵌入、doctor 误报、Anthropic 限流）显示边缘场景覆盖仍需加强。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 可行性评估 | 版本信号 |
|:---|:---|:---|:---|
| **WalletConnect 异步交易审批** | [#1739](https://github.com/nearai/ironclaw/issues/1739) | ⭐⭐⭐⭐⭐ 高可行性 | **v0.25.0 核心候选**：与 [#1818](https://github.com/nearai/ironclaw/pull/1818) Gate 架构、[#1557](https://github.com/nearai/ironclaw/pull/1557) v2 引擎直接协同 |
| **UI 凭证可见性** | [#1823](https://github.com/nearai/ironclaw/issues/1823) | ⭐⭐⭐⭐☆ 中-高 | 体验优化，可能快速落地 |
| **Slack Socket Mode** | [#1549](https://github.com/nearai/ironclaw/pull/1549) | ⭐⭐⭐⭐⭐ 已在 PR | **v0.25.0 大概率纳入**，解决 NAT/防火墙场景 |
| **生产级编码工具集** | [#1841](https://github.com/nearai/ironclaw/pull/1841) | ⭐⭐⭐⭐⭐ 已在 PR | **v0.25.0 核心功能**：Glob/Grep/FileUndo 工具 + 文件历史 |
| **直接 OAuth 登录** | [#1798](https://github.com/nearai/ironclaw/pull/1798) | ⭐⭐⭐⭐⭐ 已在 PR | **v0.25.0 大概率纳入**：Google/GitHub/Apple/NEAR 钱包 |
| **线程管理 CLI** | [#1774](https://github.com/nearai/ironclaw/pull/1774) | ⭐⭐⭐⭐☆ 已在 PR | 体验完善，`/thread list/new` 补全 |
| **Anthropic 429 智能重试** | [#1842](https://github.com/nearai/ironclaw/issues/1842) | ⭐⭐⭐⭐☆ 中 | 需与 [#1471](https://github.com/nearai/ironclaw/pull/1471) 的 Routine 重试机制对齐 |

**路线图判断**：v0.25.0 将聚焦**"安全执行 + 开发者体验 + 身份体系"**三大主题。WalletConnect 审批（#1739）与 v2 引擎（#1557）、Gate 架构（#1818）形成完整故事线，建议维护者优先推进这三项的集成测试。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **升级数据丢失** | [#1846](https://github.com/nearai/ironclaw/issues/1846) | UI "升级实例"按钮导致版本回滚+数据丢失，**用户明确警告"不要在 UI 升级"** |
| **凭证管理黑盒** | [#1823](https://github.com/nearai/ironclaw/issues/1823) | "Secret management is hard!" 无法查看可用凭证范围，调试困难 |
| **Slack 配对死锁** | [#1839](https://github.com/nearai/ironclaw/issues/1839) | 激活后无可见代码、无下一步操作指引，用户陷入"配置完成但无法使用"状态 |
| **Ollama 嵌入独占故障** | [#1827](https://github.com/nearai/ironclaw/issues/1827) | "ironclaw is the only software that I have troubles with embeddings" |
| **诊断工具误报** | [#1825](https://github.com/nearai/ironclaw/issues/1825) | `doctor` 命令在 DNS 解析失败时误报 NEAR AI 会话错误，混淆真实问题 |

### 满意点

- CI 自动化审查被隐含认可（无用户抱怨误报，问题当日闭环）
- v0.24.0 的 OIDC 和自定义 Provider 配置满足企业部署需求

---

## 8. 待处理积压

### 长期未响应的高价值项

| Issue/PR | 创建时间 | 积压天数 | 风险/提醒 |
|:---|:---|:---:|:---|
| [#1557](https://github.com/nearai/ironclaw/pull/1557) v2 执行引擎 | 2026-03-22 | 10 | **XL 级核心架构**，10 天未合并，阻塞依赖它的 WalletConnect 审批（#1739） |
| [#1722](https://github.com/nearai/ironclaw/pull/1722) 统一配置系统 | 2026-03-28 | 4 | XL 级，与 v2 引擎配置层冲突风险，需协调合并顺序 |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) 阿里云 Coding Plan | 2026-03-20 | 12 | **最长积压 XL PR**，国际化/多云战略相关，需 review 资源投入 |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) 通道级 MCP/工具过滤 | 2026-03-18 | 14 | 架构债务治理的关键依赖，与 #1248-1251 直接相关 |
| [#1503](https://github.com/nearai/ironclaw/issues/1503) Google Slides 集成失败 | 2026-03-20 | 12 | 企业集成场景，0 评论无响应，可能损害商业用户信心 |

**维护者行动建议**：
1. **本周优先**：协调 #1557 与 #1722 的合并节奏，避免配置层冲突
2. **资源分配**：为 #1446 分配国际化场景 reviewer，或明确路线图优先级
3. **体验债务**：#1503 和 #1839 代表企业集成摩擦，建议设立"通道稳定性"专项

---

*日报生成时间：2026-04-01 | 数据来源：IronClaw GitHub 公开活动*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-01

## 1. 今日速览

LobsterAI 昨日（2026-03-31）迎来**高强度开发日**：50 个 PR 更新（26 条已合并/关闭）、29 个 Issues 更新（23 条活跃/新开）。团队发布 **v2026.03.31** 版本，同步推进 12 套主题系统、多自定义模型提供商、Emoji 图标选择器等用户体验升级。社区活跃度极高，但伴随版本发布出现**强制沙箱模式争议**和**网关重启**等稳定性投诉，需关注用户反馈与快速修复。

---

## 2. 版本发布

### v2026.03.31 已发布
- **发布 PR**: [#1178](https://github.com/netease-youdao/LobsterAI/pull/1178)
- **核心变更**:
  - 12 套主题皮肤系统正式上线（基于 CSS 变量架构）
  - 多自定义模型提供商支持（`custom_0`, `custom_1`... 自动递增）
  - Agent Emoji 图标选择器替代纯文本输入
  - 快捷键录制组件替换手动输入
  - Edit/MultiEdit 工具 Diff 可视化对比视图

- **⚠️ 破坏性变更与争议**:
  - **强制沙箱模式**: 用户反馈 [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) 显示 v3.31 默认强制启用沙箱且无关闭入口，需手动回滚 v3.30
  - **企业配置移除后沙箱残留**: [#1172](https://github.com/netease-youdao/LobsterAI/pull/1172) 修复企业套餐移除后 `executionMode` 仍卡在 `sandbox` 的问题

---

## 3. 项目进展

### 已合并/关闭的关键 PR（26 条）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#938](https://github.com/netease-youdao/LobsterAI/pull/938) | HyperClockUp | **12 主题系统** - CSS 变量 + data-theme 架构，330+ Tailwind 类迁移 | - |
| [#786](https://github.com/netease-youdao/LobsterAI/pull/786) | Housum | **多自定义提供商** - 支持 `custom_N` 命名与自定义显示名称 | [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) |
| [#1033](https://github.com/netease-youdao/LobsterAI/pull/1033) | swuzjb | **Emoji 图标选择器** - 9 分类 330+ 候选，解决纯文本输入痛点 | [#1022](https://github.com/netease-youdao/LobsterAI/issues/1022) |
| [#919](https://github.com/netease-youdao/LobsterAI/pull/919) | Angus2333 | **Diff 可视化** - Edit/MultiEdit 工具调用 GitHub PR 风格对比视图 | - |
| [#845](https://github.com/netease-youdao/LobsterAI/pull/845) | jezhee | **快捷键录制** - 键盘直接录制替代手动输入字符串 | - |
| [#1164](https://github.com/netease-youdao/LobsterAI/pull/1164) | wulei05 | **记忆持久化强制约束** - 要求模型必须调用 write 工具后才可口头确认记忆 | - |
| [#1167](https://github.com/netease-youdao/LobsterAI/pull/1167) | btc69m979y-dotcom | **网关重启循环修复** - `qwen` → `qwen-portal` 规范 ID 映射 | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) |
| [#1170](https://github.com/netease-youdao/LobsterAI/pull/1170) | btc69m979y-dotcom | **主题迁移修复** - 修正 Tailwind 透明度后缀合并错误 | - |
| [#1177](https://github.com/netease-youdao/LobsterAI/pull/1177) | liuzhq1986 | **深色模式适配** - 技能标签、卡片边框、工具调用信息 UI 修复 | - |

**整体评估**: 项目向"视觉个性化 + 交互直觉化 + 企业级稳定性"三大方向显著推进，主题系统和多提供商架构为长期扩展奠定基础。

---

## 4. 社区热点

### 高讨论度议题

| Issue/PR | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) 强制沙箱怎么关？ | 创建当日即活跃，用户情绪强烈 | **自主权诉求**: 用户反感"强制"设计，要求可配置开关；夜间自动更新触发负面体验 |
| [#1104](https://github.com/netease-youdao/LobsterAI/issues/1104) 界面设计走偏了！ | 创建+关闭同日，设计争议 | **信息架构焦虑**: Agent 配置分散在"设置"和"我的 Agent"两处，用户认知负荷高；呼吁参考 CogV1 以 Agent 为中心的设计 |
| [#1033](https://github.com/netease-youdao/LobsterAI/pull/1033) Emoji 图标选择器 | 功能落地快（Issue #1022 3月30日→PR 3月31日关闭） | **体验细节打磨**: 纯文本输入 → 可视化选择，降低创建 Agent 门槛 |
| [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) 增加多个自定义模型提供商 | 与 PR #786 同日闭环 | **供应商锁定规避**: 用户需要并行管理新旧自定义提供商，避免迁移断档 |

**趋势洞察**: 社区对"强制行为"敏感度极高（沙箱、自动更新），设计一致性诉求强烈，同时积极拥抱体验优化功能。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改 Agent 图标触发**网关反复重启** | 已修复 | [#1167](https://github.com/netease-youdao/LobsterAI/pull/1167) 已合并 |
| 🔴 **Critical** | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 卸载后程序仍可运行，用户质疑安全后门 | 待处理 | 无 |
| 🔴 **Critical** | [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | `CoworkRunner` 无重入保护，并发调用导致流式消息损坏 | 待处理 | 无 |
| 🟠 **High** | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) | IM 消息并发处理导致重复会话创建和消息丢失 | 待处理 | 无 |
| 🟠 **High** | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) | 定时任务 `pollOnce()` 无重入保护，幽灵事件持续发送 | 待处理 | 无 |
| 🟠 **High** | [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) | 钉钉定时任务 IM 通知路由因 `conversationId` 前缀无法送达 | 待处理 | 无 |
| 🟡 **Medium** | [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Prefetch 异步回调不校验 `turnToken`，可能跨轮次污染 | 待处理 | 无 |
| 🟡 **Medium** | [#1097](https://github.com/netease-youdao/LobsterAI/issues/1097) | 设置-关于导出日志报错 `reply was never sent` | 待处理 | 无 |
| 🟡 **Medium** | [#1152](https://github.com/netease-youdao/LobsterAI/issues/1152) | v2026.3.30 corp 邮箱 IMAP 连接失败（同事可成功） | 待处理 | 无 |
| 🟡 **Medium** | [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) | 已关闭退出登录，安装新版本仍提示"无法关闭" | 待处理 | 无 |
| 🟢 **Low** | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) | 表格 Table 顶部/底部不明意义留白 | 待处理 | 无 |
| 🟢 **Low** | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | 新建重名 Agent 后任务记录未同步，需切换刷新 | 待处理 | [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) 待合并 |

**稳定性评估**: 并发控制（重入保护）是今日 Bug 集群的核心主题，涉及 `CoworkRunner`、`CronJobService`、`IMCoworkHandler` 三大模块，建议优先集中修复。

---

## 6. 功能请求与路线图信号

| Issue | 需求描述 | 可行性评估 | 路线图信号 |
|:---|:---|:---|:---|
| [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) 多自定义模型提供商 | 支持配置多个自定义提供商 | ✅ **已落地** - PR #786 已合并 | v2026.03.31 已实现 |
| [#782](https://github.com/netease-youdao/LobsterAI/issues/782) Windows 卸载反馈收集 | 卸载时弹出反馈页面收集流失原因 | 🟡 中等 - 需设计+隐私评审 | 用户留存分析基础设施 |
| [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120) 会话出错一键 Retry | `error` 状态会话底部显示重试按钮 | 🟢 高 - 纯前端改动，`continueSession` 复用 | 下一版本候选 |
| [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117) 工具权限弹窗键盘快捷键 | Enter 确认 / Escape 拒绝，危险操作防误触 | 🟢 高 - 无障碍与效率双收益 | 下一版本候选 |
| [#831](https://github.com/netease-youdao/LobsterAI/issues/831) 支持 Gemini 中转模型 | 自定义 baseURL 的 Gemini 代理支持 | 🟡 中等 - URL 拼接逻辑需调整 | 与 #1151 技术债务相关 |
| [#199](https://github.com/netease-youdao/LobsterAI/issues/199) 定时任务指定模型 & 多 Agent | 不同定时任务用不同模型，多 Agent 协作 | 🟡 中等 - 架构影响较大 | 长期路线图 |

**预测**: 键盘快捷键 (#1117) 和 Retry 重试 (#1120) 极可能进入下一迭代，两者均直击高频交互痛点且实现成本低。

---

## 7. 用户反馈摘要

### 痛点聚类

| 类别 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **强制行为反感** | "半夜更新了3.31要强制沙箱了吗. 找不到关的按钮" "你们是不是在用户电脑上偷偷留后门" | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) |
| **配置分散困惑** | "针对单个agent的配置有两个地方...让人迷惑" "建议参照Copaw 1.0.0以agent为主" | [#1104](https://github.com/netease-youdao/LobsterAI/issues/1104) |
| **稳定性信任危机** | "修改了自建agent的图标，触发网关反复重启" "卸载之后，打开的lobsterai窗口依然可运行" | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) |
| **模型兼容性** | "最新版不支持custom自定义的gemini中转模型" "千问的模型...最近两三个版本不行" | [#831](https://github.com/netease-youdao/LobsterAI/issues/831) [#1080](https://github.com/netease-youdao/LobsterAI/issues/1080) |

### 满意点
- Emoji 图标选择器"终于不用输文字了"（#1022 → #1033 快速响应）
- 多自定义提供商"弃用旧的保留新的"场景被满足（#1174 → #786）

---

## 8. 待处理积压

### 需维护者关注的高价值/高风险项

| Issue/PR | 创建时间 | 积压风险 | 行动建议 |
|:---|:---|:---|:---|
| [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) 卸载后程序可运行 | 2026-03-31 | 🔴 **极高** - 安全性质疑，舆情风险 | 24h 内技术响应，解释进程残留机制或确认 Bug |
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) CoworkRunner 并发重入 | 2026-03-31 | 🔴 **极高** - 核心会话引擎 | 纳入下一 Sprint，同步审查 #1107 #1099 同类问题 |
| [#831](https://github.com/netease-youdao/LobsterAI/issues/831) Gemini 中转支持 | 2026-03-25 | 🟡 高 - 7天未响应，与 #1151 相关 | 评估 #1151 URL 拼接修复是否覆盖此场景 |
| [#782](https://github.com/netease-youdao/LobsterAI/issues/782) 卸载反馈收集 | 2026-03-25 | 🟡 中 - 产品需求，技术实现待启动 | 产品-设计-开发三方对齐优先级 |
| [#761](https://github.com/netease-youdao/LobsterAI/issues/761) 网页/APP 积分显示不一致 | 2026-03-24 | 🟢 中 - 已关闭但需验证 | 确认修复是否覆盖多端同步逻辑 |

---

**报告生成时间**: 2026-04-01  
**数据来源**: GitHub API / netease-youdao/LobsterAI  
**分析师**: AI 开源项目分析师

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 | 2026-04-01

> **项目**: TinyClaw (github.com/TinyAGI/tinyclaw)  
> **报告日期**: 2026-04-01  
> **分析周期**: 过去24小时

---

## 1. 今日速览

TinyClaw 今日活跃度处于**极低水平**。过去24小时内仅产生1条 Issue 更新，无 PR 活动及版本发布，社区贡献节奏明显放缓。唯一的新 Issue 聚焦于网络绑定限制问题，反映出用户在部署场景下的实际需求。整体而言，项目处于维护期状态，核心开发活动暂停，建议关注者评估社区响应速度与长期维护承诺。

| 指标 | 数值 | 状态 |
|:---|:---|:---|
| Issues 更新 | 1 | ⚠️ 偏低 |
| PR 更新 | 0 | 🔴 无活动 |
| 版本发布 | 0 | — |
| 社区评论互动 | 0 | 🔴 静默 |

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并/关闭的 Pull Requests**

代码层面无实质性推进。建议维护者审视：
- 现有功能分支的合并策略
- 社区贡献者的 PR 审核响应周期

---

## 4. 社区热点

### #271 [Feature]: Can only bind to localhost?
- **链接**: https://github.com/TinyAGI/tinyclaw/issues/271
- **作者**: @mlmr-coder
- **状态**: 🟢 Open | 创建: 2026-03-31
- **互动**: 0 评论 | 0 👍

**诉求分析**:
该 Issue 以极简方式提出网络绑定限制问题，标题与正文重复显示"Can only bind to localhost?"。核心诉求指向 **Agent 执行组件的网络可访问性配置**——用户可能希望：
1. 在容器/云环境中部署时绑定 `0.0.0.0` 或特定接口
2. 实现多机分布式 Agent 协作
3. 通过外部网络访问本地运行的 TinyClaw 服务

**信号强度**: ⚠️ 中等 — 部署灵活性是 AI Agent 框架的关键竞争力，但 Issue 描述过于简略，缺乏具体场景说明。

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 |
|:---|:---|:---|
| 🔴 Critical | 0 | — |
| 🟠 High | 0 | — |
| 🟡 Medium | 0 | — |
| 🟢 Low/待确认 | 1 | #271 可能涉及配置限制而非 Bug |

**注**: #271 目前归类为 `enhancement` 而非 `bug`，需维护者确认是否为设计限制或配置缺失。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 纳入可能性 | 关键障碍 |
|:---|:---|:---|:---|
| #271 网络绑定配置 | 部署/运维增强 | ⭐⭐⭐ 中高 | 需澄清需求范围；实现复杂度低 |

**技术判断**:
- 若仅为配置项扩展（如 `--host` 参数），可快速实现
- 若涉及安全模型重构（localhost 绑定可能是安全设计），需架构评估
- **建议维护者回应**: 确认当前行为是否为 intentional security default

---

## 7. 用户反馈摘要

基于 #271 的有限信息：

| 维度 | 观察 |
|:---|:---|
| **痛点** | 部署场景受限，无法从外部网络访问服务 |
| **使用场景推测** | 远程开发、Docker 部署、团队协作环境 |
| **满意度信号** | 无明确表达（Issue 过于简略） |
| **改进期望** | 可配置的网络绑定地址 |

**数据局限**: 缺乏评论互动，无法提取深度用户洞察。建议维护者通过 Issue 模板引导用户补充：
- 具体部署环境（OS/容器/云平台）
- 尝试过的配置方式
- 安全顾虑与期望的认证机制

---

## 8. 待处理积压

### 需关注项

| Issue | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| #271 | 2026-03-31 | 0 评论，无维护者回应 | 🟡 新 Issue，但社区完全静默 |

### 系统性观察

- **Issue 响应 SLA**: 项目过去24小时无维护者活动，需关注长期响应能力
- **PR 积压风险**: 当前无待合并 PR，但历史 PR 关闭率、合并周期需持续监控
- **社区健康度**: 单 Issue 零互动模式，可能反映用户基数小或反馈渠道不畅

---

## 附录：原始数据溯源

| 数据项 | 来源链接 |
|:---|:---|
| Issue #271 | https://github.com/TinyAGI/tinyclaw/issues/271 |
| 项目主页 | https://github.com/TinyAGI/tinyclaw |

---

*本报告基于公开 GitHub 数据生成，不构成投资或使用建议。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-04-01

---

## 1. 今日速览

Moltis 今日呈现**高强度开发态势**，24小时内10个PR进出（5合5待审），核心贡献者 `penso` 主导了绝大多数工作。项目聚焦于**三大战略方向**：企业级通道扩展（Microsoft Teams、Matrix）、浏览器自动化能力升级（实时画面、交互控制）、以及开发者体验优化（ngrok内网穿透、GPG签名）。社区活跃度健康，但新Issue仅1条，显示当前开发节奏以内部推进为主，外部用户反馈窗口相对平静。无新版本发布，预计功能积累中。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的5个PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#527](https://github.com/moltis-org/moltis/pull/527) | penso | **解除频道会话重命名限制** | 直接响应社区Issue #523，消除Discord/Teams等频道会话的UX摩擦，提升多租户场景可管理性 |
| [#528](https://github.com/moltis-org/moltis/pull/528) | penso | **新增`update_channel_settings`聊天工具** | 首次实现**自然语言配置管理**，用户无需接触原始配置文件即可安全修改通道设置，降低运维门槛 |
| [#524](https://github.com/moltis-org/moltis/pull/524) | howyay → 关闭 | Matrix通道插件（初始实现） | 功能被 [#500](https://github.com/moltis-org/moltis/pull/500) 取代，但验证了技术路径；暴露sqlx 0.9依赖阻塞问题 |
| [#525](https://github.com/moltis-org/moltis/pull/525) | penso | **发布产物GPG签名** | 安全基建升级，YubiKey驻留密钥提供**个人身份背书**，与Sigstore无密钥签名形成双重保障 |
| [#526](https://github.com/moltis-org/moltis/pull/526) | penso | **OpenClaw Meetup演示文稿** | 社区建设资产，标准化项目对外叙事（起源、安全立场、路线图） |

**整体评估**：今日合并内容覆盖**UX优化、安全加固、开发者工具、社区运营**四个维度，项目成熟度指标显著提升。特别是#528的"聊天即配置"模式，标志着Moltis向**自托管AI助手降低运维复杂度**的战略目标迈出关键一步。

---

## 4. 社区热点

| 排名 | 条目 | 互动数据 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 | [#351](https://github.com/moltis-org/moltis/issues/351) Docker socket使用文档澄清 | 5评论，0点赞，24天周期 | **文档债务典型案例**。用户`DanTup`在Docker沙箱执行场景遇到困惑，维护者响应及时但周期较长。反映**安全敏感功能（Docker socket挂载）的文档覆盖不足**，新用户 onboarding 存在摩擦 |
| 2 | [#523](https://github.com/moltis-org/moltis/issues/523) 频道会话重命名 | 1评论，0点赞，1天快速关闭 | **需求-实现闭环典范**。用户提出→24小时内PR合并→Issue关闭，显示核心团队对UX细节的高度响应 |
| 3 | [#533](https://github.com/moltis-org/moltis/issues/533) 消息附件"+"按钮 | 0评论，新开 | **移动端/现代聊天UX诉求**。用户期望类Discord/Slack的附件添加体验，当前Web UI可能依赖拖放或菜单操作，效率较低 |

**深层信号**：社区诉求正从"功能有无"转向**"体验精细度"**（重命名、附件按钮）和**"安全可理解性"**（Docker文档），预示项目进入** polish 阶段**。

---

## 5. Bug 与稳定性

**今日无新报告Bug、崩溃或回归问题**

| 历史技术债务 | 状态 | 风险等级 |
|:---|:---|:---|
| [#524](https://github.com/moltis-org/moltis/pull/524) / [#500](https://github.com/moltis-org/moltis/pull/500) sqlx 0.9 依赖阻塞 Matrix E2EE | **待解决** | 🔶 中等 |
| 详情：`matrix-sdk-sqlite` 与 `libsqlite3-sys` 版本冲突，需上游放宽依赖范围 | 有临时验证方案，无正式fix | 影响Matrix端到端加密功能交付 |

---

## 6. 功能请求与路线图信号

### 用户提出的新需求
| Issue | 需求 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#533](https://github.com/moltis-org/moltis/issues/533) 附件"+"按钮 | Web UI附件上传体验优化 | ⭐⭐⭐⭐ 高 | 与#531（浏览器实时画面）、#532（DevTools集成）同属**Web UI现代化**主题，可能打包为Q2前端迭代 |
| [#523](https://github.com/moltis-org/moltis/issues/523) 频道会话重命名 | ✅ 已实现 | - | #527已合并 |

### 待审PR中的路线图信号
| PR | 功能 | 战略意义 | 预计纳入版本 |
|:---|:---|:---|:---|
| [#500](https://github.com/moltis-org/moltis/pull/500) Matrix通道 | 去中心化通信协议支持 | **开源社区基础设施兼容性**，对标Element X体验 | v0.x（待sqlx解决） |
| [#529](https://github.com/moltis-org/moltis/pull/529) Microsoft Teams | 企业级SaaS集成 | **B2B商业化关键路径**，JWT验证+重试机制显示生产就绪设计 | v0.x 近期 |
| [#530](https://github.com/moltis-org/moltis/pull/530) ngrok内网穿透 | 零配置公网暴露 | **开发者体验杀手级功能**，消除自托管网络配置门槛 | v0.x 近期 |
| [#531](https://github.com/moltis-org/moltis/pull/531) 浏览器实时画面+交互 | CDP screencast + 输入控制 | **AI Agent核心能力**，从"告诉AI做什么"到"看着AI做并干预" | v0.x 近期 |
| [#532](https://github.com/moltis-org/moltis/pull/532) `live_url` + 会话追踪 | 人工接管沙箱浏览器 | **人机协作安全网**，满足合规审计和异常处理场景 | v0.x 近期 |

**路线图推断**：Moltis正构建**"通道无处不在 + 浏览器可视可控 + 零配置部署"**的三位一体体验，目标成为**最易用的自托管AI Agent平台**。

---

## 7. 用户反馈摘要

> 基于Issue评论和PR描述的痛点/场景提炼

| 维度 | 具体反馈 | 来源 |
|:---|:---|:---|
| **痛点** | Docker socket沙箱执行的文档"Unclear or confusing"，安全边界理解困难 | [#351](https://github.com/moltis-org/moltis/issues/351) |
| **痛点** | 频道绑定的会话无法重命名，多Discord服务器场景管理混乱 | [#523](https://github.com/moltis-org/moltis/issues/523) |
| **场景** | 需要"拖放或点击按钮"快速添加附件，当前流程打断聊天节奏 | [#533](https://github.com/moltis-org/moltis/issues/533) |
| **满意** | 配置可通过聊天工具安全修改，无需暴露原始配置 | [#528](https://github.com/moltis-org/moltis/pull/528) 设计意图 |
| **期待** | Matrix E2EE支持（被sqlx阻塞），去中心化团队需要端到端加密 | [#524](https://github.com/moltis-org/moltis/pull/524) 讨论 |

---

## 8. 待处理积压

| 条目 | 创建时间 | 状态 | 提醒原因 |
|:---|:---|:---|:---|
| [#500](https://github.com/moltis-org/moltis/pull/500) Matrix通道 | 2026-03-28 | 🔄 待审4天 | **协议生态完整性**关键PR，被sqlx依赖阻塞，需维护者决策：是否接受临时方案或等待上游？ |
| [#351](https://github.com/moltis-org/moltis/issues/351) Docker文档 | 2026-03-07 | ✅ 已关闭 | 虽关闭，但24天周期提示**文档响应SLA**可优化；建议建立安全功能文档的快速评审通道 |

---

*日报生成时间：2026-04-01*  
*数据来源：github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-01

## 1. 今日速览

CoPaw 项目在 2026-03-31 展现出**极高活跃度**：24 小时内 50 条 Issues 更新（40 条新开/活跃，10 条关闭）、50 条 PR 更新（41 条已合并/关闭，9 条待审），并连发 **v1.0.0.post1** 和 **v1.0.0.post2** 两个热修复版本。社区围绕 1.0 正式版的稳定性问题展开密集反馈，核心团队快速响应修复，项目处于**高迭代、高修复**的冲刺状态。微信渠道、本地模型、控制台 UI 成为今日技术焦点。

---

## 2. 版本发布

### v1.0.0.post2（最新）
| 属性 | 内容 |
|:---|:---|
| 发布时间 | 2026-03-31 |
| 类型 | 热修复 + 功能增强 |
| 关键变更 | • **feat**: Console MCP 支持（`Feat/console mcp` by @zhaozhuang52）<br>• **style**: 网站列表标记可见性优化（更柔和的颜色）<br>• **chore**: 版本号升级 |

### v1.0.0.post1
| 属性 | 内容 |
|:---|:---|
| 发布时间 | 2026-03-31 |
| 类型 | 热修复 |
| 关键变更 | • **feat**: Console 消息功能增强<br>• **fix**: 消息相关 bug 修复 |

**迁移注意事项**：连续两个 post 版本表明 v1.0.0 存在紧急修复需求，建议所有 1.0.0 用户立即升级至 post2。MCP 功能为新引入，需关注与现有工作流的兼容性。

---

## 3. 项目进展

### 今日已合并/关闭的核心 PR（41 条中的关键项）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#2692](https://github.com/agentscope-ai/CoPaw/pull/2692) | qzcpl | 标准化输出块结构，修复文件块处理 | **稳定性基石**：解决文件输出混乱问题 |
| [#2687](https://github.com/agentscope-ai/CoPaw/pull/2687) [#2686](https://github.com/agentscope-ai/CoPaw/pull/2686) [#2659](https://github.com/agentscope-ai/CoPaw/pull/2659) | Leirunlin | 技能列表优化：减少 reconcile 调用、修复内置→工作区覆盖逻辑、添加刷新按钮 | **性能提升**：显著降低 Skill 管理开销 |
| [#2688](https://github.com/agentscope-ai/CoPaw/pull/2688) | pan-x-c | 模型下载前检查仓库，更新 CoPaw Flash 文档 | **用户体验**：避免无效下载，完善部署指南 |
| [#2654](https://github.com/agentscope-ai/CoPaw/pull/2654) | jinliyl | 升级 reme-ai 至 0.3.1.8，支持 compact 额外指令 | **记忆系统**：为长期记忆功能铺路 |
| [#2673](https://github.com/agentscope-ai/CoPaw/pull/2673) | bowenliang123 | 语言选项排序优化（中文优先级提升） | **本土化**：反映中文用户占比 |
| [#2676](https://github.com/agentscope-ai/CoPaw/pull/2676) | xieyxclack | 异步工具状态样式修复 | **UI 一致性** |
| [#2662](https://github.com/agentscope-ai/CoPaw/pull/2662) | zhaozhuang521 | 本地功能硬编码英文国际化 | **国际化完善** |
| [#2661](https://github.com/agentscope-ai/CoPaw/pull/2661) | pan-x-c | CoPaw-Flash 部署 FAQ 改进 | **文档体验** |
| [#2645](https://github.com/agentscope-ai/CoPaw/pull/2645) | yuluo1007 | 网站 UI 重大优化 | **品牌门面** |

**整体推进评估**：今日合并集中在 **稳定性修复（40%）**、**性能优化（25%）**、**国际化与文档（20%）**、**新功能基建（15%）**，项目正从"功能发布期"进入"质量打磨期"。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) Help Wanted: Open Tasks | **40** | 任务认领与贡献引导 | 社区贡献者活跃，需更好的任务分发机制 |
| 2 | [#230](https://github.com/agentscope-ai/CoPaw/issues/230) 经常卡住 | **17** | 工具执行（SSH）卡死 + 停止按钮无效 | **核心稳定性痛点**，生产环境阻塞问题 |
| 3 | [#2642](https://github.com/agentscope-ai/CoPaw/issues/2642) 钉钉机器人生成 PPT 后崩溃 | **12** | 多平台接入后文件生成导致全局错误 | 文件处理与消息队列的耦合缺陷 |
| 4 | [#2613](https://github.com/agentscope-ai/CoPaw/issues/2613) 1.0 版本新安装无法使用模型 | **11** | 模型接入配置问题 | 1.0 安装体验存在断裂 |
| 5 | [#2663](https://github.com/agentscope-ai/CoPaw/issues/2663) 任务中断卡住 + 设置不持久化 | **6** | 深色模式/语言设置重启失效 | 状态持久化架构问题 |

### 待审高价值 PR
- [#2501](https://github.com/agentscope-ai/CoPaw/pull/2501) 飞书打字机流式卡片（增强 IM 体验）
- [#2695](https://github.com/agentscope-ai/CoPaw/pull/2695) 智能体拖拽排序持久化
- [#2694](https://github.com/agentscope-ai/CoPaw/pull/2694) 手动 compact 额外指令支持

---

## 5. Bug 与稳定性

### 🚨 严重级别（P0-P1）

| Issue | 症状 | 影响范围 | 状态 |
|:---|:---|:---|:---|
| [#230](https://github.com/agentscope-ai/CoPaw/issues/230) | 工具执行（SSH）卡死，停止按钮无效 | 所有工具调用场景 | **已关闭** - 需验证修复效果 |
| [#2642](https://github.com/agentscope-ai/CoPaw/issues/2642) | 生成 PPT 后机器人全局崩溃，需删会话恢复 | 钉钉/QQ/微信等全渠道 | **开放**，无 fix PR |
| [#2613](https://github.com/agentscope-ai/CoPaw/issues/2613) | 1.0 新安装模型无法使用，traceback 报错 | 新用户 onboarding | **开放**，需配置诊断 |
| [#2660](https://github.com/agentscope-ai/CoPaw/issues/2660) | `AGENT_ERROR: Task has been cancelled!` 异常 | Win11 + Python 3.12 | **开放** |
| [#2669](https://github.com/agentscope-ai/CoPaw/issues/2669) | CoPaw Local 模型退出后 llmap.app 未释放内存 | 本地模型用户 | **已关闭** |

### ⚠️ 中等级别（P2）

| Issue | 症状 | 状态 |
|:---|:---|:---|
| [#2658](https://github.com/agentscope-ai/CoPaw/issues/2658) | 1.0 更新后版本号未变，智能体全部禁用 405 错误 | **已关闭** |
| [#2653](https://github.com/agentscope-ai/CoPaw/issues/2653) | 切换智能体后工作区栏目加载失败 | **已关闭** |
| [#2646](https://github.com/agentscope-ai/CoPaw/issues/2646) | `async_execution` 参数不支持导致工具注册失败 | **已关闭** |
| [#2644](https://github.com/agentscope-ai/CoPaw/issues/2644) | 切换模型 zero-downtime reload 后钉钉 stream 线程未停止，CPU 飙升 | **开放** |
| [#2628](https://github.com/agentscope-ai/CoPaw/issues/2628) | SQLite3 版本不兼容导致启动失败（Alibaba Cloud Linux） | **开放** |
| [#2691](https://github.com/agentscope-ai/CoPaw/issues/2691) | CoPaw Local 模型下载失败 | **开放** |

**稳定性健康度评估**：🔶 **中等风险** - 1.0 版本存在多个阻塞性 bug，核心团队修复响应快，但文件处理、本地模型、多线程管理三个领域需持续关注。

---

## 6. 功能请求与路线图信号

### 已提出且可能纳入下一版本的需求

| Issue/PR | 需求 | 已有 PR？ | 纳入可能性 |
|:---|:---|:---:|:---:|
| [#2590](https://github.com/agentscope-ai/CoPaw/issues/2590) | 文件操作回滚（误删恢复） | ❌ | ⭐⭐⭐⭐ 高 - 已认领 Task 6 |
| [#2307](https://github.com/agentscope-ai/CoPaw/issues/2307) | ADBPG 长期记忆管理器 | ❌ | ⭐⭐⭐⭐ 高 - 架构已就绪 |
| [#2548](https://github.com/agentscope-ai/CoPaw/issues/2548) | 任务执行中消息插入（全双工通信） | ❌ | ⭐⭐⭐⭐ 高 - 体验核心 |
| [#2621](https://github.com/agentscope-ai/CoPaw/issues/2621) | Session 启动钩子与内存管理 | ❌ | ⭐⭐⭐ 中 |
| [#2607](https://github.com/agentscope-ai/CoPaw/issues/2607) | WebSearch 默认化，browser_use 可选 | ❌ | ⭐⭐⭐⭐ 高 - 资源优化刚需 |
| [#2089](https://github.com/agentscope-ai/CoPaw/issues/2089) | 主模型受限时的 fallback 备用模型 | ❌ | ⭐⭐⭐⭐ 高 - 可靠性刚需 |
| [#2699](https://github.com/agentscope-ai/CoPaw/issues/2699) | 环境变量配置支持（COPAW_BASE_PATH 等） | ❌ | ⭐⭐⭐ 中 |
| [#2579](https://github.com/agentscope-ai/CoPaw/issues/2579) | IM 群中停止特定任务 | ❌ | ⭐⭐⭐ 中 |

**路线图信号**：v1.1 可能聚焦 **可靠性增强（fallback、回滚）**、**资源优化（轻量级搜索）**、**企业级记忆（ADBPG）** 三大主题。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 反馈来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#230](https://github.com/agentscope-ai/CoPaw/issues/230), [#2663](https://github.com/agentscope-ai/CoPaw/issues/2663) | **任务卡住无法停止** | 生产环境 SSH 长命令执行 |
| [#2674](https://github.com/agentscope-ai/CoPaw/issues/2674) | 微信功能不完善：无输入提示、无法加群、UI 不同步、电脑版无机器人 | 微信渠道生产部署 |
| [#2663](https://github.com/agentscope-ai/CoPaw/issues/2663) | **设置不持久化**（语言/主题重启恢复默认） | 日常使用体验断裂 |
| [#2642](https://github.com/agentscope-ai/CoPaw/issues/2642) | 文件生成后全局崩溃 | 办公自动化场景 |
| [#2677](https://github.com/agentscope-ai/CoPaw/issues/2677) | 对 AI 生成代码的贡献者存在偏见 | 社区包容性担忧 |

### 😊 满意点

- 快速版本迭代（post1/post2 连发）体现团队响应速度
- 中文优先级提升（语言排序）反映本土化重视
- 开放任务列表（#2291）降低贡献门槛

### 💡 典型使用场景

> "接入钉钉/QQ/微信做 PPT 文件生成" — 企业办公自动化
> "2GB RAM VPS 部署，browser_use 导致崩溃" — 轻量级服务器资源敏感场景
> "完全依赖 codex/claudecode 开发" — AI 辅助编程新范式

---

## 8. 待处理积压

### ⚠️ 需维护者关注的重要事项

| Issue/PR | 问题 | 滞留时间 | 风险 |
|:---|:---|:---:|:---|
| [#1192](https://github.com/agentscope-ai/CoPaw/pull/1192) | OpenRouter provider 支持（含模型过滤） | ~21 天 | 第三方生态扩展受阻 |
| [#2506](https://github.com/agentscope-ai/CoPaw/pull/2506) | 11 个渠道的契约测试基础设施 | ~2 天 | 质量保障基建，建议优先 |
| [#2498](https://github.com/agentscope-ai/CoPaw/pull/2498) | 智能体创建时语言选择修复 | ~2 天 | 国际化体验 |
| [#2501](https://github.com/agentscope-ai/CoPaw/pull/2501) | 飞书打字机流式卡片 | ~2 天 | IM 体验竞争力 |
| [#2636](https://github.com/agentscope-ai/CoPaw/issues/2636) | 文件预览 API 任意文件读取安全漏洞 | 1 天 | **安全风险**，需评估 |
| [#2664](https://github.com/agentscope-ai/CoPaw/issues/2664) | Intel Mac 支持询问 | 1 天 | 硬件兼容性覆盖 |

---

**日报生成时间**：2026-04-01  
**数据来源**：GitHub API / agentscope-ai/CoPaw  
**健康度评分**：⭐⭐⭐⭐☆（4/5）- 高活跃、快响应，稳定性需持续打磨

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-01

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **定位**: AI 智能体与个人 AI 助手开源框架  
> **报告日期**: 2026-04-01

---

## 1. 今日速览

今日 ZeptoClaw 项目呈现**低活跃、维护性更新为主**的状态。过去24小时内无新版本发布，无 PR 合并，核心开发工作处于停滞。社区唯一活跃讨论聚焦于 CLI 工具列表的架构缺陷——该 Issue 揭示了运行时注册表与静态代码的脱节问题，可能影响插件生态扩展。7 条待合并 PR 全部为 Dependabot 自动生成的依赖升级，涵盖前端构建工具（Tailwind CSS、Vite）、TypeScript 生态及 CI/CD 流水线，属于常规安全维护而非功能迭代。整体健康度评估：**维护模式运行中，核心功能开发需关注**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无合并 PR，无功能推进**

| 指标 | 数值 | 状态 |
|:---|:---|:---|
| 已合并 PR | 0 | ⚠️ 停滞 |
| 关闭 PR | 0 | - |
| 功能型 PR | 0 | - |
| 依赖升级 PR | 7（待审） | 🔄 积压 |

**分析**：全部 7 条 PR 为自动化依赖更新，涉及：
- 前端面板：`tailwindcss` 4.2.1→4.2.2、`typescript-eslint` 8.56.1→8.57.1、`@vitejs/plugin-react` 5.1.4→5.2.0
- 文档站点：`@astrojs/starlight` 0.37.7→0.38.1（两处）
- CI/CD：`softprops/action-gh-release` 2.5.0→2.6.1、`actions/download-artifact` 8.0.0→8.0.1

**项目进展评估**：零代码贡献日。核心架构问题（见下方 RFC）虽有社区反馈，但无对应 PR 响应，技术债务持续累积。

---

## 4. 社区热点

### 🔥 唯一活跃讨论：CLI 工具列表架构缺陷

| 项目 | 内容 |
|:---|:---|
| **Issue** | [#465 rfc(cli): tools list should use runtime registry instead of hardcoded array](https://github.com/qhkm/zeptoclaw/issues/465) |
| **作者** | @stuartbowness |
| **创建/更新** | 2026-03-29 / 2026-03-31 |
| **评论数** | 2 |
| **核心诉求** | 将 `zeptoclaw tools list` 从硬编码的 33 个 `ToolInfo` 静态数组迁移至运行时 `ToolRegistry` |

**技术影响分析**：
| 当前问题 | 后果 |
|:---|:---|
| 静态数组与运行时注册表脱节 | 自定义工具、插件、MCP 工具对用户不可见 |
| 工具元数据维护负担 | 新增工具需同步修改两处代码 |
| 可扩展性瓶颈 | 阻碍第三方工具生态集成 |

**社区信号**：该 RFC 直指框架可扩展性的核心设计缺陷，评论显示维护者已介入讨论，但尚未形成实施计划。此 Issue 的解决优先级应标记为 **P1**。

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告**

| 类型 | 数量 | 详情 |
|:---|:---|:---|
| 崩溃/严重 Bug | 0 | - |
| 回归问题 | 0 | - |
| 性能问题 | 0 | - |
| 架构债务 | 1 | #465（CLI 工具列表设计缺陷）|

> 注：#465 归类为架构设计缺陷而非运行时 Bug，但影响用户体验（工具发现功能失效）。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 可行性评估 | 版本预测 |
|:---|:---|:---|:---|
| [#465](https://github.com/qhkm/zeptoclaw/issues/465) | 运行时工具注册表集成 | ⭐⭐⭐⭐⭐ 高 | v0.x 补丁版 |
| 隐含需求 | MCP 工具可见性支持 | ⭐⭐⭐⭐☆ 中高 | 需依赖 #465 |
| 隐含需求 | 插件化工具生态 | ⭐⭐⭐⭐☆ 中高 | 长期路线图 |

**关键洞察**：该 RFC 实际上是一个**阻塞性需求**——若不解决，MCP（Model Context Protocol）集成等高级功能将无法通过 CLI 暴露给用户。建议维护者优先合并相关 PR 或提供实施指导。

---

## 7. 用户反馈摘要

基于 [#465](https://github.com/qhkm/zeptoclaw/issues/465) 讨论提炼：

| 维度 | 反馈内容 |
|:---|:---|
| **痛点** | "Custom tools, plugins, composed tools, and MCP tools are invisible to the user" — 工具发现机制与运行时实际能力严重不符 |
| **使用场景** | 开发者通过 CLI 探索可用工具时，无法看到动态加载的扩展能力 |
| **期望** | 单一事实来源（Single Source of Truth）：CLI 应直接查询 `ToolRegistry` 而非维护独立列表 |
| **满意度** | 框架核心能力（工具系统）受设计债务拖累，影响专业开发者体验 |

---

## 8. 待处理积压

### 🔴 高优先级待审 PR（7 条全部积压）

| PR | 类型 | 创建时间 | 风险 |
|:---|:---|:---|:---|
| [#475](https://github.com/qhkm/zeptoclaw/pull/475) | Tailwind CSS 升级 | 2026-03-31 | 低（补丁版本） |
| [#474](https://github.com/qhkm/zeptoclaw/pull/474) | TypeScript ESLint 升级 | 2026-03-31 | 低 |
| [#473](https://github.com/qhkm/zeptoclaw/pull/473) | Vite React 插件升级 | 2026-03-31 | 中（minor 版本，需验证） |
| [#472](https://github.com/qhkm/zeptoclaw/pull/472) | Starlight 文档升级 | 2026-03-31 | 中 |
| [#471](https://github.com/qhkm/zeptoclaw/pull/471) | Starlight 文档升级（r8r） | 2026-03-31 | 中 |
| [#470](https://github.com/qhkm/zeptoclaw/pull/470) | GitHub Release Action 升级 | 2026-03-31 | 低 |
| [#469](https://github.com/qhkm/zeptoclaw/pull/469) | Artifact Download Action 升级 | 2026-03-31 | 低 |

**维护建议**：
1. **批量处理依赖 PR**：建议配置 Dependabot auto-merge 策略，减少人工审查负担
2. **优先响应 #465**：该 RFC 已获 2 轮评论互动，需维护者明确技术方案或标记 `good first issue` 吸引贡献者

---

## 健康度仪表盘

| 指标 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | 🟡 2/5 | 零功能代码提交 |
| 社区响应度 | 🟡 3/5 | RFC 有互动但无结论 |
| 依赖维护 | 🟢 4/5 | 自动更新及时，但积压待审 |
| 架构健康 | 🔴 2/5 | 核心子系统存在设计债务 |
| 整体状态 | 🟡 **维护模式** | 建议关注核心贡献者时间投入 |

---

*本报告基于 GitHub 公开数据生成，如需深度分析特定模块，请联系项目维护者。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*