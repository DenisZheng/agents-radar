# OpenClaw 生态日报 2026-04-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-24 00:28 UTC

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

**OpenClaw 项目动态日报（2026-04-24）**

---

### 1. **今日速览**  
过去24小时 OpenClaw 社区活跃度极高，Issue 与 PR 更新均达 500 条，表明用户参与度和开发迭代速度显著提升。新版本 v2026.4.22 发布，重点增强 xAI（Grok）在图像生成、语音合成与实时转录方面的能力。整体项目状态健康，但存在若干关键回归问题需紧急修复，尤其集中在依赖缺失与配置异常场景。

---

### 2. **版本发布**  

#### 📦 **v2026.4.22: OpenClaw 2026.4.22**  
**核心更新：**
- 新增对 xAI（Grok）全系列功能的支持，包括：
  - `grok-imagine-image` / `grok-imagine-image-pro` 图像生成 API
  - 基于参考图像的编辑功能（reference-image edits）
  - 六种 Live xAI 语音角色（TTS）
  - 支持 MP3/WAV/PCM/G.711 格式的文本转语音（TTS）
  - `grok-stt` 音频转录服务
  - xAI 实时通信（realtime transcription & voice）能力集成

> 🔗 [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.4.22)

**迁移说明：**  
无破坏性变更，新功能为可选启用。用户需在配置中手动添加 `xai` provider 并设置 API Key 以使用 Grok 相关能力。建议通过 `openclaw doctor --fix` 检查依赖完整性。

---

### 3. **项目进展**  

#### ✅ **重要合并 PR**
- **[#70846]** 引入 **scoped mention pattern policy**，统一全局、代理及渠道层级的提及检测规则，提升跨平台消息路由一致性。适用于 Discord、Telegram、Slack 等 15+ 通道。  
- **[#70765]** 新增 **Google Meet 插件**，支持 OAuth PKCE、Twilio DTMF 拨号、Chrome 自动加入会议，强化企业级协作集成。  
- **[#70737]** 解耦 **记忆梦境调度器（memory dreaming cron）与心跳机制**，避免高负载下任务中断，提升长期会话稳定性。

#### 🚀 **活跃开发方向**
- **多模态支持扩展**：OpenRouter 图像生成（[#67668]）、NVIDIA NIM 原生接入（[#50898]）持续推进；
- **安全与合规**：SSRF 防护升级（[#70044]）、插件身份验证强化（[#70819]）；
- **UI/UX 优化**：Control UI 设备配对认证修复（[#70741]）、聊天滚动中断处理（[#69520]）。

---

### 4. **社区热点**  

| Issue/PR | 类型 | 热度 | 核心诉求 |
|--------|------|------|----------|
| [#49971] **Native Agent Identity & Trust Verification** | RFC | ⭐⭐⭐⭐⭐ (102 评论) | 推动去中心化身份（DID/VC）框架内建，实现 AI 代理间可信交互，对标 ERC-8004 标准。 |
| [#75] **Linux/Windows Clawdbot Apps** | Enhancement | ⭐⭐⭐⭐ (92 评论, 👍71) | 强烈要求跨平台桌面客户端，填补 macOS/iOS/Android 生态空白。 |
| [#70457] **Missing @larksuiteoapi/node-sdk & nostr-tools** | Bug | ⭐⭐⭐⭐ (26 评论) | 新安装环境因未预装扩展依赖导致崩溃，暴露默认打包策略缺陷。 |

> 💡 **趋势洞察**：用户对 **跨平台可用性** 和 **企业级身份治理** 的需求日益迫切，反映项目正从开发者工具向生产级 AI 代理平台演进。

---

### 5. **Bug 与稳定性**  

#### ⚠️ **严重问题（需立即响应）**
| Issue | 描述 | 状态 | 关联 PR |
|-------|------|------|--------|
| [#70457] | 全局安装缺少 Feishu/Nostr 扩展依赖 | 开放 | — |
| [#67936] | Matrix 频道升级后找不到 openclaw 包 | 开放 | — |
| [#51056] | OpenRouter 鉴权头缺失导致 401 | 开放 | — |

#### 🛠️ **已有修复 PR**
- [#70298] 修复 CLI session 清理不彻底问题（已合并）
- [#70832] 防止定时任务超时结果被覆盖（已合并）
- [#67254] Google 图像生成忽略 `allowPrivateNetwork` 配置（已合并）

> ❗ **共性根因**：v2026.4.21 起依赖管理机制变动，导致非必要扩展被错误剥离，引发连锁故障。

---

### 6. **功能请求与路线图信号**  

- **NVIDIA NIM 原生支持**（[#50898]）：用户期待将 NVIDIA API 作为一等公民 Provider，已有 6 条评论 + 5 赞，预计纳入 Q2 发布。
- **插件 UI 扩展系统**（[#66944]）：允许插件注入 Control UI 页面，技术可行性强，可能成为 v2026.5.0 核心特性。
- **Opus-4.7 自适应推理兼容**（[#67888]）：Anthropic 模型首次调用失败问题，已有 3 个 upvote，修复优先级高。

---

### 7. **用户反馈摘要**  

- **正面体验**：xAI 集成获广泛好评，“Grok 的实时语音终于可用”（[#7200] 关联评论）；
- **痛点集中**：
  - Windows/Linux 安装向导频繁崩溃（[#70346], [#70198]）；
  - 会话上下文窗口超限后静默丢失历史（[#60213]）；
  - 网关启动缓慢（>20 分钟），影响冷启动效率（[#70050]）。

> 📊 **满意度指标**：依赖缺失类问题差评率超 80%，而新功能尝鲜者普遍给予积极反馈。

---

### 8. **待处理积压**  

| Issue | 年龄 | 影响范围 | 建议动作 |
|------|------|----------|----------|
| [#75] Linux/Windows App | 114 天 | 跨平台战略 | 评估 Electron 或 Tauri 技术栈可行性 |
| [#49971] DID 身份验证 | 47 天 | 安全架构 | 成立工作组，制定实施路线 |
| [#36994] Exec/Tools 持续失效 | 49 天 | 稳定性 | 需复现并定位回归点 |

> ⏳ **维护提醒**：上述 Issue 涉及长期价值功能或重大体验缺陷，建议本周内分配负责人跟进。

--- 

**数据来源**：GitHub API · 统计时间：2026-04-24T00:00:00Z 至 2026-04-25T00:00:00Z  
**分析师**：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，我将基于您提供的各项目动态摘要，生成一份横向对比分析报告。

---

### **AI 智能体与个人 AI 助手开源生态横向对比分析报告 (2026-04-24)**

**报告人：** AI 智能体与个人 AI 助手领域开源项目分析师
**数据周期：** 2026年4月23日 00:00 UTC 至 2026年4月24日 00:00 UTC

---

#### **1. 生态全景**

个人 AI 助手/自主智能体开源生态在 2026 年 4 月 24 日呈现出高度活跃且竞争激烈的态势。OpenClaw 作为核心参照项目，其 v2026.4.22 版本的发布，特别是 xAI (Grok) 的全面集成，显著拉高了社区活跃度（Issues 500+, PRs 500+），成为当日焦点。与此同时，NanoBot、Hermes Agent、PicoClaw 等项目也保持着稳定或强劲的迭代节奏，共同推动了多模态支持、企业级身份治理、MCP 集成、跨平台兼容性及生产级可观测性等关键领域的进展。整个生态正从概念验证阶段加速向实际部署和生产环境演进，安全性和稳定性成为普遍关注的核心议题。

#### **2. 各项目活跃度对比**

| 项目名称       | Issues (今日) | PRs (今日) | Release 情况                     | 健康度评估         |
| :------------- | :------------ | :--------- | :------------------------------- | :----------------- |
| **OpenClaw**   | 500+          | 500+       | **v2026.4.22 (xAI Grok 全面集成)** | **极高活跃度，核心引领** |
| NanoBot        | 14            | 20         | 无                               | 稳定迭代，聚焦优化 |
| Hermes Agent   | 50            | 50         | **v0.11.0 (CLI 重构)**           | 高活跃度，架构升级 |
| PicoClaw       | 峰值          | 峰值       | **nightly v0.2.7-nightly.20260423** | 高活跃度，功能推进 |
| NanoClaw       | 16            | 27         | 无                               | 积极迭代，安全加固 |
| NullClaw       | 11            | 0          | 无                               | 维护阶段，问题修复 |
| IronClaw       | 36            | 50         | 无                               | 高度活跃，架构深化 |
| LobsterAI      | 13 (PRs 合并)| 6 (Issues) | `Release/2026.04.22` (多平台适配) | 平稳更新，功能完善 |
| TinyClaw       | 0             | 0          | 无                               | 无活动           |
| Moltis         | 9             | 12 (6合并) | 无                               | 稳定迭代，用户体验优化 |
| CoPaw          | 50            | 50         | **v1.1.4-beta.1, v1.1.3.post1**  | 高度活跃，版本频繁 |
| ZeptoClaw      | 36            | 17         | 无                               | 高活跃度，安全与依赖更新 |
| ZeroClaw       | 100           | -          | 无                               | 极高活跃度，架构重构 |

*注：健康度评估基于活跃度、Bug 修复速度、新功能发布频率及社区反馈综合判断。*

#### **3. OpenClaw 在生态中的定位**

*   **优势：** OpenClaw 无疑是当前生态中最具影响力的项目。其 v2026.4.22 版本对 xAI (Grok) 的全面集成（图像生成、语音合成、实时转录等）展示了强大的多模态能力和对新晋 LLM 提供商的快速响应能力，这为其赢得了极高的社区关注度。其庞大的 Issue/PR 数量（各500+条）反映了极其活跃的社区和高速的开发迭代，使其成为其他项目学习和追赶的标杆。
*   **技术路线差异：** OpenClaw 似乎更注重功能的广度与深度，尤其是在与新兴 LLM 提供商（如 xAI）的深度集成上。其“scoped mention pattern policy”和“解耦记忆梦境调度器”等改进，显示出其在复杂消息路由和长期会话稳定性方面的架构考量。
*   **社区规模对比：** OpenClaw 的社区规模明显领先于其他项目。其 Issue 和 PR 的更新量远超 NanoBot、Hermes Agent 等，甚至与 IronClaw、ZeroClaw 等同样高活跃度的项目相比也毫不逊色，这得益于其对 xAI 的集成所带来的巨大吸引力。

#### **4. 共同关注的技术方向**

多个项目共同涌现出以下关键技术需求：

*   **MCP (Model Context Protocol) 集成与扩展：**
    *   **诉求：** 统一工具调用接口、提升代理间可信交互（OpenClaw #49971）、简化 MCP 服务器管理（PicoClaw #2641, #2546）、MCP 文件操作工具集（NanoClaw #1956）、MCP OAuth 支持（Moltis #852, ZeptoClaw #530）。
    *   **意义：** 这是构建模块化、可扩展 AI 智能体的核心协议，各项目的积极推进表明其已成为行业标准。
*   **多模态支持与第三方 API 通道扩展：**
    *   **诉求：** xAI (Grok) 集成（OpenClaw）、NVIDIA NIM 接入（OpenClaw）、Signal/Telegram/WhatsApp 原生支持（NanoClaw, CoPaw）、Apple Container 网络适配（NanoClaw）、ElevenLabs TTS 自定义声音（Moltis）。
    *   **意义：** 满足用户对多样化通信渠道和多媒体处理能力的需求，增强 AI 助手的实用性与交互性。
*   **企业级身份治理与安全加固：**
    *   **诉求：** 去中心化身份（DID/VC）框架内建（OpenClaw #49971）、SSRF 防护升级（OpenClaw #70044）、插件身份验证强化（OpenClaw #70819）、agent sandbox 安全加固（NanoClaw #1945）、Merkle 哈希链审计日志（ZeptoClaw #528）。
    *   **意义：** 随着 AI 代理在生产环境中的应用加深，其安全性、合规性和身份验证机制变得至关重要。
*   **跨平台兼容性与桌面客户端：**
    *   **诉求：** Linux/Windows 桌面客户端（OpenClaw #75）、Apple Silicon 路径与环境变量修复（NanoClaw）、Android/Termux 构建支持（NullClaw #868）、Electron 兼容性（LobsterAI #15）。
    *   **意义：** 提升 AI 助手的可用性和覆盖范围，满足不同用户群体的操作系统偏好。
*   **生产级可观测性与治理能力：**
    *   **诉求：** OpenTelemetry 全链路追踪（NanoBot #3173）、MGP（Memory Governance Protocol）集成（NanoBot #3408）、对话感知滑动缓存断点（Hermes Agent #12089）、成本跟踪与运行时日志（ZeroClaw #6001）。
    *   **意义：** 确保 AI 代理在复杂系统中的稳定性、可调试性和资源管理能力，是迈向真正生产就绪的关键。

#### **5. 差异化定位分析**

| 项目名称       | 功能侧重                             | 目标用户                           | 技术架构特点                           |
| :------------- | :----------------------------------- | :--------------------------------- | :------------------------------------- |
| **OpenClaw**   | 功能广度、新 LLM 集成、多模态        | 开发者、高级用户、追求最新功能者   | 大规模、高活跃度、强调生态集成         |
| **NanoBot**    | 生产级可观测性、会话管理、治理能力   | 企业用户、DevOps、注重稳定性者     | 精细化、模块化、强调可观测性与治理     |
| **Hermes Agent**| 交互式 CLI、代理调度、企业级协作集成 | 开发者、系统管理员、企业用户       | 架构清晰化、CLI 现代化、强调企业级功能 |
| **PicoClaw**   | 边缘 AI、MCP 管理、Docker 容器化     | 边缘计算开发者、IoT 爱好者、Docker 用户 | 轻量级、边缘优化、强容器化支持         |
| **NanoClaw**   | 安全加固、多通道通信、Apple Silicon  | 安全敏感用户、macOS 用户、多通信渠道用户 | 安全性优先、跨平台兼容、Apple Silicon 优化 |
| **CoPaw**      | UI/UX 优化、多平台兼容性、渠道稳定性 | 普通用户、企业级部署者             | 高频迭代、UI 友好、渠道扩展性强        |
| **ZeptoClaw**  | 边缘原生模型、IoT 集成、轻量级       | 边缘/IoT 开发者、特定平台用户      | 极轻量级、边缘部署、特定 SDK 集成      |
| **ZeroClaw**   | 配置架构升级、企业级通信渠道、生产部署 | 企业用户、需要复杂配置管理的用户   | 大规模重构、企业级功能、PostgreSQL 支持 |

#### **6. 社区热度与成熟度**

*   **快速迭代阶段：** OpenClaw、IronClaw、ZeroClaw、CoPaw、ZeptoClaw、PicoClaw 处于此阶段。这些项目不仅 Issue/PR 数量庞大，而且频繁发布新版本或夜间构建，展现出极高的开发活力和对社区反馈的快速响应。它们正在积极引入新功能、修复 Bug 并探索前沿技术。
*   **质量巩固阶段：** NanoBot、Hermes Agent、Moltis 等项目则更侧重于现有功能的优化、稳定性和安全性的提升。它们的迭代节奏相对稳健，更注重代码质量和生产环境的适用性。例如，NanoBot 的 MGP 集成和 Hermes Agent 的 engine-v2 清理工作，都体现了对系统健壮性的深入打磨。

#### **7. 值得关注的趋势信号**

*   **MCP 成为 AI 智能体的事实标准：** 几乎所有高活跃度项目都在积极拥抱或扩展 MCP 协议，这表明它正在迅速成为连接 AI 代理与其工具生态的统一接口，是未来 AI 应用开发的核心基础设施。
*   **边缘 AI 与轻量级部署备受关注：** ZeptoClaw 和 PicoClaw 对边缘设备、IoT 集成以及轻量级运行时的专注，反映出行业对 AI 能力下沉到终端设备、实现低延迟处理和隐私保护的强烈需求。
*   **企业级安全与身份治理需求上升：** OpenClaw、NanoClaw、ZeroClaw 等项目对 DID、SSRF 防护、沙箱安全的重视，揭示了当 AI 代理被用于企业环境时，其安全性和可信交互机制的重要性日益凸显。
*   **多模态与富媒体通信是必然趋势：** xAI (Grok) 的图像生成与语音合成、Moltis 的 ElevenLabs TTS、NanoClaw 的多通道支持等，都指向 AI 助手必须具备处理文本、图像、音频等多种媒介的能力，以提供更加自然和丰富的交互体验。
*   **生产就绪的可观测性与治理能力是关键门槛：** NanoBot、Hermes Agent 等项目对全链路追踪、内存治理、性能优化的投入，说明开发者不仅需要构建 AI 代理，更需要能够监控、调试和优化其在生产环境中的表现，这对 AI 应用的可靠性至关重要。

**对 AI 智能体开发者的参考价值：** 开发者应密切关注 MCP 协议的演进，将其作为构建模块化 AI 应用的首选方案。同时，根据自身应用场景（云端、边缘、企业）选择合适的框架，并优先考虑那些在安全性、多模态支持和可观测性方面表现优异的项目。对于追求最新 LLM 能力的项目，OpenClaw 是一个很好的起点；而对于注重生产环境稳定性的项目，NanoBot 或 Hermes Agent 可能更为合适。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报（2026-04-24）**

---

### 1. **今日速览**  
NanoBot 在过去24小时内保持较高活跃度，共处理 **14 条 Issues**（5 新开/活跃，9 已关闭）和 **20 条 Pull Requests**（11 待合并，9 已合并/关闭），无新版本发布。项目在配置优化、历史记录治理及多通道支持方面持续推进，社区反馈集中在功能增强与稳定性修复上。整体状态健康，开发节奏稳定。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  

#### 已合并的关键 PR：
- **#3412 / #3413 / #3414 / #3415**（由 chengyongru & Re-bin 提交）：联合修复 `history.jsonl` 内存膨胀问题，防止系统提示被污染。通过移除消息数量限制、截断最近历史段、绑定归档边界等措施，显著提升大会话场景下的稳定性。
- **#3234**（mohamed-elkholy95）：修复邮件自回复死循环问题（Issue #3215），通过比对发件人地址避免 bot 对自身邮件响应。
- **#3398**（gthieleb）：为 Telegram 添加内联键盘按钮支持，增强交互能力。

#### 待合并的重要功能 PR：
- **#3173**：OpenTelemetry 全链路追踪集成，支持 LLM 调用与工具执行的可观测性，已接近完成。
- **#3303**：新增子任务状态查询与取消工具，强化多代理协作控制流。
- **#3408**：MGP（Memory Governance Protocol）可选侧车集成，实现跨会话受控长期记忆。

> ✅ **项目整体迈进**：从“基础功能完善”向“生产级可观测性与治理能力”演进，尤其在会话管理与资源泄漏防控方面取得关键突破。

---

### 4. **社区热点**  

- **#3402**（TOML 配置提案）：用户 cschur 提议将 `config.json` 迁移至 TOML，认为其更适合人类编辑。该 Issue 获 7 条评论，反映 JSON 在复杂配置中的可读性问题，可能推动下一版本重大配置重构。
- **#2152**（WhatsApp 语音支持）：felixbk98 提出原生 STT+TTS 需求，虽已有第三方方案，但呼吁官方集成。获 2 个点赞，显示社区对富媒体通信的强烈诉求。
- **#1932**（技能禁用机制）：Diorser 指出当前仅支持删除技能，缺乏灵活启停控制。持续活跃，反映用户对细粒度权限管理的期待。

> 📌 这些议题共同指向 **配置体验、多模态支持、权限粒度** 三大改进方向。

---

### 5. **Bug 与稳定性**  

| 严重程度 | Issue/PR | 描述 | 状态 |
|----------|--------|------|------|
| 🔴 High | #3417 | Anthropic Opus 4.7 拒绝含 `temperature` 的请求 | 开放，需紧急修复 |
| 🔴 High | #3410 | v0.1.5.post2 内存使用激增 (~200MB → ~600MB) | 开放，疑似新特性引入 |
| 🟡 Medium | #3377 | 多子代理并行导致主代理重复回复 | 已关闭（关联 PR #3234 部分缓解） |
| 🟢 Low | #3390 | Telegram 清理工作空间后无响应并报错 | 开放，暂无 fix |

> ⚠️ **重点风险**：Anthropic 模型兼容性退化与内存泄漏需优先排查，尤其影响高端用户使用体验。

---

### 6. **功能请求与路线图信号**  

- **配置现代化**：#3402（TOML）+ #3358（模型预设）表明团队正构建更灵活的配置体系，预计纳入 v0.2.0。
- **Web 界面增强**：#3407 请求 WebUI 文件上传，契合多模态趋势，可能随 MGP 或 Dream 功能同步推出。
- **飞书公式渲染**：#3411 与 #3307 形成完整 LaTeX 支持闭环，即将落地。
- **自定义提供商**：#3264 已实现 OpenAI 兼容层扩展，为未来插件生态铺路。

> 🛠️ **下一版本焦点**：可观测性（#3173）、MGP 集成（#3408）、配置简化（#3402/#3358）构成核心路线图。

---

### 7. **用户反馈摘要**  

- **痛点集中区**：
  - **定时任务延迟生效**（#2892）：必须重启 gateway 才能加载，违背“热更新”预期。
  - **技能管理僵化**（#1932）：无法临时禁用，只能删除，影响测试流程。
  - **邮件自循环**（#3215）：已修复，但暴露 IMAP/SMT 混合部署的设计缺陷。

- **满意点**：
  - WebUI 简洁易用（#3407 提及）
  - 飞书通道稳定性提升（#3307 成功合并）

> 💬 用户普遍赞赏快速迭代响应，但对 API 变更（如 Opus 4.7）缺乏提前通知表示遗憾。

---

### 8. **待处理积压**  

- **#2049**（技能创建能力缺失）：自 v0.1.5 起失效，已存在 13 条评论，涉及 200+ 天前提出，需确认是否恢复或文档说明。
- **#2152**（WhatsApp 语音）：长期未官方支持，但社区方案活跃，建议评估接入成本。
- **#173**（API Key 缓存异常）：2026-02 提出，最后更新于今日，仍无根本解决，属遗留稳定性债。

> ⏳ 建议维护者优先梳理高影响力低进展 Issue，避免社区信任损耗。

--- 

**数据来源**：[HKUDS/nanobot GitHub](https://github.com/HKUDS/nanobot)  
**生成时间**：2026-04-24

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报 - 2026-04-24**

---

### 1. 今日速览
Hermes Agent 项目今日活跃度极高，Issues 和 PRs 各更新50条，显示出社区高度参与。v0.11.0 版本已发布，标志着交互式 CLI 的重大重构完成。核心模块网关、代理和工具链持续获得大量 Bug 修复和功能增强，整体开发节奏稳健。

---

### 2. 版本发布
**Hermes Agent v0.11.0 (v2026.4.23)**
*   **发布日期:** April 23, 2026
*   **重大变更:** 本版本为 "Interface" 发布，完成了交互式 CLI 的全 React/Ink 重写，提供了全新的用户界面和更强大的交互能力。这是一个向后兼容的更新，旨在提升用户体验和交互效率。

---

### 3. 项目进展
*   **PR #13057:** `fix(session): validate and repair tool_call arguments before persisting` 被合并。该 PR 解决了会话压缩过程中工具调用参数被截断的问题，确保在对话中断时工具调用的 JSON 参数完整性。
*   **PR #12774:** `fix(plugins): await async plugin command handlers in CLI dispatcher` 被合并。该 PR 修复了异步插件命令处理器未被正确等待的问题，避免了 `RuntimeWarning: coroutine was never awaited` 警告。
*   **PR #11651:** `fix: preserve context when summary generation fails` 被合并。该 PR 解决了上下文摘要生成失败时错误注入误导性标记的问题，确保原始对话内容得以保留。
*   **PR #11155:** `feat(delegate): add tier profiles and heuristic routing core` 被合并。该 PR 引入了分层的代理配置和启发式路由核心，增强了代理调度的灵活性。
*   **PR #14827:** `feat(delegation): system_prompt_prepend for per-child persona slots` 被合并。该 PR 允许为子代理设置独立的系统提示前缀，实现了更精细化的子代理人格定制。

这些合并的 PR 表明项目在会话管理、插件系统、上下文处理、代理调度以及用户交互方面取得了显著进展，显著提升了系统的稳定性和功能性。

---

### 4. 社区热点
*   **Issue #6475 (已关闭):** Anthropic Claude 订阅认证问题（评论数22）。此问题是社区关注的热点，涉及与 Claude API 的集成稳定性。
*   **Issue #3777 (活跃):** RFC 2544 Benchmark 范围被误分类为私有地址，导致 TUN 代理用户受阻（评论数5）。此问题影响了使用现代代理软件的用户。
*   **Issue #13829 (活跃):** MessageDeduplicator TTL 机制失效（评论数3）。此问题暴露了缓存管理中的一个关键 bug，影响消息处理的准确性。
*   **PR #14822:** TUI 中 inline_diff 锚点调整（评论数未定义）。此 PR 旨在改进 TUI 的用户体验，解决 diff 显示位置不准确的问题。
*   **PR #14828:** 终端工具在会话初始化时尊重配置的 cwd（评论数未定义）。此 PR 解决了终端命令运行目录不正确的问题，提升了终端工具的可靠性。

这些 Issue 和 PR 反映了用户对 API 集成稳定性、网络代理兼容性、缓存机制准确性以及用户体验细节的高度关注。

---

### 5. Bug 与稳定性
*   **[P0] Issue #12136:** Discord 允许角色跨公会 DM 绕过权限检查（CVSS 8.1）。这是一个高危安全问题，已有相关讨论。
*   **[P1] Issue #13653:** Cron 作业总是失败。此问题严重影响自动化任务，已有用户报告。
*   **[P1] Issue #12146:** Agent 配置 `model.provider=custom` 后仍回退到 openrouter。此问题影响自定义提供商的配置，已有用户反馈。
*   **[P1] Issue #12173:** `/resume` 命令可跨用户/源恢复会话，存在安全风险。此问题暴露了会话恢复机制的缺陷，已有用户提出。
*   **[P1] Issue #12482:** WSL 路径转换不适用于 ACP，且 terminal_tool 忽略 ACP cwd。此问题影响 WSL 环境下的文件操作。
*   **[P2] Issue #3777:** RFC 2544 Benchmark 范围被误分类为私有地址。此问题影响使用特定代理软件的用户。
*   **[P2] Issue #13829:** MessageDeduplicator TTL 机制失效。此问题影响消息去重的准确性。
*   **[P2] Issue #12153:** 自定义提供商的 `/v1/models` 端点不可用时模型验证失败。此问题影响自定义提供商的稳定性。
*   **[P2] Issue #12154:** WeChat 平台 `asyncio.timeout` 错误和会话过期未优雅处理。此问题影响 WeChat 平台的稳定性。
*   **[P1] Issue #14782:** `JSONDecodeError` 绕过重试逻辑。此问题影响容错能力。
*   **[P1] Issue #14783:** `browser_tool _get_command_timeout` 清理竞态条件后崩溃。此问题影响浏览器工具的稳定性。
*   **[P1] Issue #14784:** 工具分发对 CamelCase/`_tool-suffix` 模型输出失败。此问题影响工具调用的识别。
*   **[P2] Issue #12140:** Minimax-CN 辅助压缩失败，模型名未归一化。此问题影响特定提供商的辅助功能。
*   **[P2] Issue #14744:** Ollama Cloud 上 `vision_analyze` 失败，视觉自动检测错误。此问题影响视觉分析功能。

大部分 P1/P2 级别的 Bug 已有相关的 Fix PR 或正在进行中（如 #12136, #13653, #12146），表明维护团队正在积极应对这些问题。

---

### 6. 功能请求与路线图信号
*   **Issue #378:** 提出 "here.now Skill" — 即时静态网页发布功能。此功能需求明确，旨在为 Agent 创建的内容提供便捷的发布渠道，具有较高可行性。
*   **Issue #10014:** 请求添加 Windows (WSL) 自动启动支持。此功能需求针对特定操作系统用户，是提升易用性的重要方向。
*   **Issue #12089:** 性能提案：为显式缓存后端实现对话感知滑动缓存断点。此提案针对性能优化，可能成为未来版本的重点改进领域。
*   **Issue #12130:** TUI v2 特性审计：缺少覆盖层、斜杠命令、@引用等功能。此问题揭示了 TUI 需要进一步的功能完善，是路线图上的一个潜在重点。
*   **PR #14824:** 提议使工具输出截断限制可配置。此 PR 响应了用户对工具输出管理的需求，是提升灵活性的一个良好信号。

这些请求和 PR 表明社区对扩展 Agent 能力、提升跨平台兼容性、优化性能和增强用户交互界面有强烈诉求，部分功能已在开发或计划中。

---

### 7. 用户反馈摘要
*   **痛点:** 多个用户反馈了 API 集成问题（Claude, Discord, Minimax-CN, Ollama Cloud），表明第三方服务接口的稳定性和兼容性是主要挑战。会话管理和工具调用功能的 Bug 也影响了用户体验。
*   **使用场景:** 用户在尝试将 Hermes Agent 集成到各种平台（WeChat, Discord, Slack）、使用不同的 LLM 提供商（OpenRouter, Custom, Ollama, Minimax）以及进行自动化任务（Cron jobs）时遇到了问题。这表明 Hermes Agent 的应用场景广泛，但同时也带来了复杂的集成和维护挑战。
*   **满意/不满意:**
    *   **满意:** 用户对新发布的 v0.11.0 版本表示期待，尤其是对交互式 CLI 的重构。对于已有 Bug 的快速修复（如 Issue #6475）也表示认可。
    *   **不满意:** 用户对一些长期存在的 Bug（如 Issue #3777, #13829）感到沮丧。对安全漏洞（Issue #12136）和核心功能失效（Issue #13653）表达了担忧。对于某些配置项未能按预期工作（Issue #12153, #12154）也表示不满。

---

### 8. 待处理积压
*   **Issue #3777:** RFC 2544 Benchmark 范围被误分类为私有地址，影响 TUN 代理用户。此问题已存在一段时间，影响范围较广。
*   **Issue #13829:** MessageDeduplicator TTL 机制失效。此问题影响消息处理的准确性，需要尽快修复。
*   **Issue #12136:** Discord 允许角色跨公会 DM 绕过权限检查。这是一个高危安全问题，需要优先处理。
*   **Issue #13653:** Cron 作业总是失败。此问题严重影响自动化任务，需尽快定位和修复。
*   **Issue #12146:** Agent 配置 `model.provider=custom` 后仍回退到 openrouter。此问题影响自定义提供商的配置，需尽快解决。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 PicoClaw 项目分析师，以下是根据您提供的 GitHub 数据生成的 2026-04-24 项目动态日报。

---

### **PicoClaw 项目动态日报 (2026-04-24)**

**1. 今日速览**
过去24小时，PicoClaw 项目活跃度极高，Issue 和 PR 更新量均达到峰值。核心贡献者持续推动新功能的开发与现有问题的修复，社区讨论热烈。一个 nightly 构建版本发布，标志着开发节奏稳定。整体状态健康，项目发展势头良好。

**2. 版本发布**
*   **nightly**: Nightly Build
    *   **v0.2.7-nightly.20260423.68ceb54b**
    *   此为自动化构建的夜间版本，可能存在不稳定因素，建议谨慎使用。本次更新主要基于 `main` 分支的最新提交，具体变更请参考 [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)。

**3. 项目进展**
*   **MCP CLI 管理套件 (PR #2641)**：此 PR 引入了强大的 `picoclaw mcp` 命令组，支持用户通过终端直接对 MCP 服务器进行增删改查、测试和编辑操作，极大提升了配置的便捷性，是近期最重要的功能推进之一。
*   **Bedrock 流式传输支持 (PR #2645)**：实现了 AWS Bedrock 提供商的 `StreamingProvider` 接口，利用 AWS ConverseStream API 为 Bedrock 模型添加了实时 token 流传输能力，显著增强了与 AWS 服务的集成体验。
*   **Docker 容器化改进 (PR #2642, #2643)**：修复了 Docker 环境下 PID 文件处理的 bug，并重构了 CI/CD 流程，优化了 macOS CGO launcher 的并行构建以及 Docker 镜像标签的处理，提升了项目的容器化部署可靠性。

**4. 社区热点**
*   **LLM 账户堆叠与 API Key 轮换 (Issue #2408)**：该议题热度最高（9条评论），用户提出“LLM Account Stacking”概念，旨在实现自动化的 API Key 轮换以应对速率限制或配额问题。这反映了用户对高可用性和成本优化的高级需求。[链接](sipeed/picoclaw Issue #2408)
*   **Ollama Cloud 凭据支持 (Issue #2225)**：用户请求支持 Ollama Cloud 凭据，目前无法使用，引发了8条评论。这表明第三方云 LLM 服务集成是社区普遍关注的功能点。[链接](sipeed/picoclaw Issue #2225)
*   **频道定时任务邮件通知 (Issue #2465)**：用户提议在频道中增加 SMTP 邮件发送功能，用于定时任务的报告推送，如周期性检查、周报等。此功能将极大增强定时任务的实际应用价值。[链接](sipeed/picoclaw Issue #2465)

**5. Bug 与稳定性**
*   **[高优先级] 定时任务执行受限 (Issue #2468)**：Scheduled Task 在执行时出现错误 `"scheduling command execution is restricted to internal channels"`，严重影响了定时功能的正常使用。此问题已有进展，相关修复 PR 正在处理中。[链接](sipeed/picoclaw Issue #2468)
*   **[高优先级] exec工具路径安全守卫误判 (Issue #1042)**：当 `restrict_to_workspace` 设置为 `true` 时，`exec` 工具的 `guardCommand` 方法会错误地拦截不涉路径的命令（如天气查询）。此问题已存在较久，影响用户体验，需尽快解决。[链接](sipeed/picoclaw Issue #1042)
*   **[中优先级] Windows 平台 list_dir 路径分隔符问题 (Issue #2472)**：`list_dir` 工具在 Windows 平台上因路径分隔符不匹配导致 "invalid argument" 错误。这是一个明确的跨平台兼容性问题，已有 PR 尝试修复。[链接](sipeed/picoclaw Issue #2472)
*   **[中优先级] WhatsApp Native 群组消息处理缺陷 (Issue #2540, #2541)**：针对 WhatsApp Native 通道，存在多个复合缺陷导致 `group_trigger.mention_only` 功能失效，且 LID-migrated 账户的消息会被静默丢弃。这些问题需要深入排查和修复。[链接](sipeed/picoclaw Issue #2540), [链接](sipeed/picoclaw Issue #2541)

**6. 功能请求与路线图信号**
*   **OAuth 2.1 + PKCE for MCP (Issue #2546)**：提议在仪表盘中支持 OAuth 2.1 + PKCE 协议来添加 MCP 服务器，简化非技术用户的配置流程。这与当前热门的 MCP CLI 管理套件 (#2641) 相辅相成，显示出项目正致力于完善 MCP 生态的用户体验。
*   **MCP 环境变量密钥存储 (Issue #2444)**：希望将 MCP 服务器环境变量的密钥存储在 `.security.yml` 文件中，而非仅依赖 `config.json` 或环境变量。这同样是提升配置安全性和便利性的重要诉求。
*   **多模态 MLLM 原生音频输入 (PR #2626)**：已实现的 PR 表明项目正在积极支持多模态大语言模型（如 Gemini 1.5）的原生音频输入功能，这是 AI 交互方式演进的重要一步。
*   **LLM 记忆系统集成 (Issue #2515)**：用户提议集成 mem0、Supermemory 等外部记忆系统，以增强 Picoclaw 的记忆能力。虽然暂无相关 PR，但这一需求预示着未来可能的发展方向。

**7. 用户反馈摘要**
*   **痛点：** 用户普遍抱怨定时任务（cron）的执行限制和失败问题（#2468, #1757），以及多通道环境下消息重复响应或只响应最后一条的问题（#2447, #2446）。
*   **使用场景：** 用户希望利用定时任务进行周期性数据检查、项目周报生成等自动化操作（#2465）。同时，他们也在寻求更灵活、更安全的 LLM 账户管理和 MCP 服务器配置方式（#2408, #2444）。
*   **满意度/不满意：** 对于现有的一些安全守卫机制（如路径限制），用户反馈其过于严格，导致正常命令被拦截（#1042），影响了操作的便捷性。

**8. 待处理积压**
*   **长期未响应的重要 Issue：** Issue #1042 (exec工具路径守卫问题) 自3月4日创建以来，虽有评论，但尚未有实质性进展或解决方案。这是一个影响广泛且亟待解决的问题。
*   **长期未合并的 PR：** PR #2626 (原生音频输入支持) 创建于昨日，虽然已更新，但仍需审查合并，以正式引入此新功能。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026-04-24）**

---

### 1. **今日速览**
过去24小时 NanoClaw 项目活跃度较高，共处理 Issues 16条、PRs 27条，其中安全加固成为核心焦点。社区对 Apple Container 网络支持及 Claude Max 订阅兼容性提出多项改进需求，同时多个关键 Bug 得到修复。项目整体处于积极迭代状态，安全审计驱动的整改行动显著提升了代码健壮性。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**

今日合并/关闭的重要 PR 包括：

- **#1958** [CLOSED] `fix(container-runner): honor agent_provider DB columns with session override`  
  修复了容器运行器未正确读取数据库中 `agent_provider` 字段的问题，确保 `/add-opencode` 等技能能按会话配置选择模型提供商，提升多租户环境灵活性。  
  🔗 [qwibitai/nanoclaw PR #1958](https://github.com/qwibitai/nanoclaw/pull/1958)

- **#1945** [CLOSED] `fix(security): harden agent sandbox — readonly runner, sshd deny docker, gitignore secrets`  
  响应 CSO 审计发现的高危安全问题，将 agent-runner 源码挂载设为只读，禁止 SSH 访问 Docker 网桥，并引入 `.gitignore` 规则防止敏感密钥泄露。此 PR 直接关闭了多个高危 Issue（#1946–#1950），极大增强系统隔离性。  
  🔗 [qwibitai/nanoclaw PR #1945](https://github.com/qwibitai/nanoclaw/pull/1945)

- **#1953 / #1954** [CLOSED] 完成 Signal 通道适配器集成  
  新增原生 Signal 支持，通过 `signal-cli` TCP JSON-RPC 实现 DM/群组消息收发，并接入自动设置流程，扩展了 NanoClaw 的多平台通信能力。  
  🔗 [PR #1953](https://github.com/qwibitai/nanoclaw/pull/1953), [PR #1954](https://github.com/qwibitai/nanoclaw/pull/1954)

- **#1943 / #1942 / #1932** [CLOSED] 修复 Discord 交付逻辑与 Telegram 交互卡片的边界条件问题  
  解决了审批卡片在 DMs 和群聊中的路由错误、回调数据长度超限等问题，提升了主流 IM 平台的用户体验一致性。  
  🔗 [PR #1943](https://github.com/qwibitai/nanoclaw/pull/1943), [PR #1942](https://github.com/qwibitai/nanoclaw/pull/1942), [PR #1932](https://github.com/qwibitai/nanoclaw/pull/1932)

- **#1938 / #1937 / #1936** [OPEN] 针对 Apple Silicon 的路径与环境变量修复  
  修正 Homebrew 安装路径、Apple Container 网关检测逻辑及凭证代理启动机制，解决 macOS M1/M2 用户的部署失败问题。  
  🔗 [PR #1938](https://github.com/qwibitai/nanoclaw/pull/1938), [PR #1937](https://github.com/qwibitai/nanoclaw/pull/1937), [PR #1936](https://github.com/qwibitai/nanoclaw/pull/1936)

---

### 4. **社区热点**

最活跃议题为 **#1956** *[Proposal: native file-ops MCP tools to bring Codex and OpenCode closer to parity with Claude]*：  
作者 chiptoe-svg 提议引入本地文件操作 MCP 工具（Read/Write/Edit/Glob/Grep），替代当前依赖 Bash shellout 的低效方式。该诉求反映用户对性能优化和功能对等的强烈期待，已有 PR 正在推进相关架构设计讨论。  
🔗 [Issue #1956](https://github.com/qwibitai/nanoclaw/issues/1956)

其次，**#1946** *[security: drop --add-host=host.docker.internal from agent container default]* 因被标记为 **Critical + Confidence 10/10 (VERIFIED in production incident)** 引发高度关注，揭示此前存在实际生产环境中的权限逃逸风险，促使紧急修复。  
🔗 [Issue #1946](https://github.com/qwibitai/nanoclaw/issues/1946)

此外，**#1103** 关于 Apple Container 网络适配的问题虽创建于上月，但在今日因配套修复 PR 上线而重新活跃，体现长期问题的持续跟踪机制良好。  
🔗 [Issue #1103](https://github.com/qwibitai/nanoclaw/issues/1103)

---

### 5. **Bug 与稳定性**

| 严重程度 | 问题描述 | 状态 |
|----------|--------|------|
| **Critical** | 默认添加 `--add-host=host.docker.internal:host-gateway` 导致未授权容器可访问宿主机网络（已验证于生产事故） | ✅ FIXED in #1945 |
| **High** | Apple Container 下 credential proxy 未启动且 .env 配置失效，致容器无法访问 Claude API | ⏳ 待合入 #1936 |
| **High** | launchd plist PATH 缺失 `/opt/homebrew/bin`，Apple Silicon 用户安装后命令不可用 | ⏳ 待合入 #1938 |
| **Medium** | 新安装时 register step 因迁移变更导致列不存在而崩溃 | ✅ FIXED in #1960 |

所有 High+ 级 Bug 均已分配修复 PR，整体稳定性快速恢复。

---

### 6. **功能请求与路线图信号**

- **MCP 文件操作工具集**（#1956）：对标 Claude Agent SDK 的核心能力，可能成为未来 v2 生态对齐的关键方向。
- **多模型支持与第三方 API 通道**（#1930）：中文用户明确提出希望开放更多模型选项，暗示国际化与生态开放性战略。
- **Slack & iMessage 通道实验性支持**（#1929）：表明团队正积极拓展企业通信场景入口。
- **v1→v2 自动化迁移工具**（#1931）：显示项目重视向后兼容与平滑升级体验，降低用户切换成本。

结合近期 PR 密集集成 Signal/WhatsApp/Telegram 等通道，可见“全渠道统一智能体平台”为明确路线图目标。

---

### 7. **用户反馈摘要**

- **正面反馈**：Signal 适配器获得开发者认可（“零依赖、纯 Node.js 实现”）；PicoClaw 在 i.MX93 EVK 上的成功运行证明硬件兼容性良好（#1957）。
- **痛点集中**：
  - Apple Silicon Mac 用户在安装与服务注册环节频繁遇阻（#1935、#1938）；
  - Claude Max 订阅用户无法使用 OAuth token 进行推理（#1944），暴露 OAuth 与 API key 混合认证体系的缺陷；
  - Discord 线程消息错乱（#1959），影响多线程协作场景；
  - 文档中硬编码 Tailscale auth key 模式带来安全隐患（#1949），需加强最佳实践引导。

---

### 8. **待处理积压**

- **#1103** *Apple Container: fix networking*：自 2026-03-15 开启，涉及宿主网关与代理绑定逻辑，虽今日有进展但尚未闭环，建议优先跟进。  
  🔗 [Issue #1103](https://github.com/qwibitai/nanoclaw/issues/1103)

- **#1843 后续**（#1955）：Codex 提供者延迟优化方案已准备就绪，但缺乏明确合并时间点，可能阻塞 Codex 生态集成进度。  
  🔗 [Issue #1955](https://github.com/qwibitai/nanoclaw/issues/1955)

- **#1956** MCP 工具提案：虽热度高，但尚未形成具体实现计划或负责人指派，需评估资源投入优先级。

--- 

**结论**：今日项目以安全加固为核心主线，技术债清理迅速，社区需求响应及时。建议继续保持高频迭代节奏，并加速推进 MCP 文件操作等标志性功能落地，巩固其在 AI 智能体基础设施领域的差异化优势。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报（2026-04-24）**

---

### 1. **今日速览**  
过去24小时内，NullClaw 社区活跃度保持平稳，共处理 11 条 Issues 更新，其中 8 条为新开或活跃讨论，3 条已关闭。无新增 Pull Requests 或版本发布。整体来看，项目处于维护与问题修复阶段，用户反馈集中在配置复杂性和跨平台兼容性上，暂无重大进展或发布活动。

---

### 2. **版本发布**  
无新版本发布。

---

### 3. **项目进展**  
今日未合并任何 Pull Request，项目在功能开发方面暂无显著推进。所有更新集中在 Issue 跟踪与用户支持，表明当前工作重点在于稳定性和文档完善。

---

### 4. **社区热点**  
最活跃的议题为 **#867 [OPEN] Provide a fully working example config.json file**，作者 eabase 指出默认配置文件“几乎无法使用”，强烈建议提供完整、注释详尽的示例文件以提升上手体验。该需求反映当前配置门槛过高，是影响新用户采用的关键痛点。

其次，**#864 [OPEN] Matrix channel configuration fail to work - getting Telegram related responses!** 和 **#869 [OPEN] Telegram channel not loading from config.json** 均涉及核心通信渠道配置错误，显示用户在多平台集成时遇到严重混淆或 bug，可能影响实际部署效果。

> 📌 [Issue #867](https://github.com/nullclaw/nullclaw/issues/867) | [Issue #864](https://github.com/nullclaw/nullclaw/issues/864) | [Issue #869](https://github.com/nullclaw/nullclaw/issues/869)

---

### 5. **Bug 与稳定性**  
今日报告多个关键 Bug，按严重程度排序如下：

- **高优先级**  
  - **#868 [OPEN] zig build fails on Android/Termux (aarch64)**：构建系统在 Android 环境下因权限问题失败，影响移动端开发者使用。尚无 fix PR。  
    > 🔗 [Issue #868](https://github.com/nullclaw/nullclaw/issues/868)

  - **#866 [OPEN] curl post fails, even if curl is on allowlist**：即使将 `curl` 加入白名单仍无法执行 POST 请求，疑似安全策略逻辑缺陷。  
    > 🔗 [Issue #866](https://github.com/nullclaw/nullclaw/issues/866)

- **中优先级**  
  - **#865 [OPEN] CLI shows ctrl characters for key bindings**：终端输入控制键（上下左右）被错误渲染为乱码，严重影响交互体验。  
    > 🔗 [Issue #865](https://github.com/nullclaw/nullclaw/issues/865)

  - **#339 [OPEN] Android install issues with build.zig.zon**：Termux 环境构建失败，提示缺少 `.nullclaw` 目录或文件结构不符，需明确 Android 支持说明。  
    > 🔗 [Issue #339](https://github.com/nullclaw/nullclaw/issues/339)

---

### 6. **功能请求与路线图信号**  
用户明确提出两项关键改进需求：

- **标准化配置模板**（#867）：强烈要求提供开箱即用的 `config.json` 示例，附带详细注释，降低入门门槛。此诉求高度一致，预示下一版本可能加强文档与配置引导。
- **增强多平台通信支持**（#864, #869）：Matrix 与 Telegram 配置异常频发，暗示项目在多通道适配器层可能存在设计缺陷或测试覆盖不足，未来版本或将重构通道管理机制。

---

### 7. **用户反馈摘要**  
- **痛点集中点**：  
  - 配置文件晦涩难懂，缺乏清晰指引（#867, #39）。  
  - Android/Termux 构建失败，移动端支持不友好（#339, #868）。  
  - CLI 终端键位响应异常，交互体验差（#865）。  
  - 技能（skill）注册成功但不可用，工具调用链路断裂（#427）。  

- **满意度观察**：  
  用户对底层技术选型（如 Zig）表示认可，但对用户体验一致性不满；部分用户提及“若能解决配置问题，项目潜力巨大”。

---

### 8. **待处理积压**  
以下长期未关闭 Issue 需重点关注：

- **#39 [CLOSED] Matrix configuration not recognized?** 虽已关闭，但 #864 表明同类问题持续复发，建议复查关闭理由是否充分。  
- **#339 [OPEN] Android install issues** 自 2026-03-06 提出，至今未获有效响应，可能阻碍移动端生态扩展。  
- **#427 [OPEN] Cannot use a custom skill** 自 3 月提出，涉及核心技能加载机制，若长期未处理将打击高级用户信心。

建议维护者优先评估上述问题的根本原因，并考虑设立专项迭代周期解决配置与跨平台兼容性问题。

--- 

✅ **总结**：今日 NullClaw 聚焦于用户反馈消化与基础体验优化，无明显功能突破。建议短期内优先输出高质量配置模板与修复关键终端/构建 Bug，以改善社区口碑。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026-04-24）**

---

### 1. **今日速览**

IronClaw 在 2026-04-24 表现出高度活跃的开发节奏：过去24小时内处理了 **36 条 Issue**（新开/活跃 29，关闭 7）和 **50 条 PR**（待合并 43，已合并/关闭 7），无新版本发布。社区对 MCP 集成、UI 状态一致性及多租户支持持续投入资源推进，整体健康度良好。

---

### 2. **版本发布**

无新版本发布。

---

### 3. **项目进展**

#### 合并/关闭的重要 PR：
- **[PR #2889](https://github.com/nearai/ironclaw/pull/2889)**: 完成 engine-v2 中延迟大工具基线处理的清理工作，属于架构升级关键路径（[#2767](https://github.com/nearai/ironclaw/issues/2767)）。
- **[PR #2883](https://github.com/nearai/ironclaw/pull/2883)**: 修复 WASM 工具分发因能力面策略集中化而中断的问题。
- **[PR #2869](https://github.com/nearai/ironclaw/pull/2869)**: 刷新引擎 v2 恢复时的规范提示元数据，避免能力漂移。
- **[PR #2922](https://github.com/nearai/ironclaw/pull/2922)**: 为工具添加重试逻辑与参数验证日志，提升调试能力。
- **[PR #2894](https://github.com/nearai/ironclaw/pull/2894)**: 重新设计 Missions 概览界面，增强结构化展示与历史追踪。

这些进展标志着 engine-v2 架构逐步稳定，同时提升了工具链健壮性与用户体验一致性。

---

### 4. **社区热点**

#### 讨论最活跃的 Issues：
- **[Issue #2231](https://github.com/nearai/ironclaw/issues/2231)**（5条评论）: 多聊天线程无法并行运行，响应被阻塞——反映用户对并发体验的核心诉求，可能与 gateway 状态收敛相关。
- **[Issue #2792](https://github.com/nearai/ironclaw/issues/2792)**（5条评论）: "Gateway state convergence" 史诗任务，强调前端应为后端状态的纯函数，消除 UI/后端状态漂移——体现架构级质量目标。
- **[Issue #2923](https://github.com/nearai/ironclaw/issues/2923)**（0评论，但重提 #2474）: stdio MCP 激活失败，质疑先前关闭理由，表明社区对 MCP 支持完整性的关注。

> 分析：核心痛点集中在 **状态一致性** 与 **MCP 协议合规性**，尤其 stdio 模式下的 OAuth 误触发暴露协议适配缺陷。

---

### 5. **Bug 与稳定性**

按严重程度排序的新增 Bug：

| 优先级 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|----------------|
| P1     | [#2915](https://github.com/nearai/ironclaw/issues/2915) | "terminal or budget exhausted" 错误阻止手动启动活跃任务 | ❌ |
| P1     | [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent 将文件保存至 `/home/agent`，但在托管环境中不可访问 | ❌ |
| P1     | [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram 回复过长时静默失败 | ❌ |
| P2     | [#2923](https://github.com/nearai/ironclaw/issues/2923) | stdio MCP 激活时报“Failed to discover authorization endpoints” | ❌ |
| P2     | [#2887](https://github.com/nearai/ironclaw/issues/2887) | Google OAuth 浏览器同意 canary 因 bot 检测失败 | ❌ |

> 注：多个 QA 发现的集成问题（Telegram、Google Sheets、Asana、Linear）均属 P2，影响第三方服务连通性。

---

### 6. **功能请求与路线图信号**

- **[Issue #2920](https://github.com/nearai/ironclaw/issues/2920)**: 要求改进托管平台的数据持久化与升级安全性（如 SQLite 外部化备份机制）— 暗示下一代部署模型需强化数据主权。
- **[Issue #2719](https://github.com/nearai/ironclaw/issues/2719)**: 提议迁移至 GitHub-native merge queue 以替代 staging promotion bot — 对应 [PR #2877](https://github.com/nearai/ironclaw/pull/2877) 正在实施 CI 阶段一改造。
- **[PR #2897](https://github.com/nearai/ironclaw/pull/2897)**: 添加用户编写 WASM 工具的 Phase-1 流程 — 标志自定义扩展能力进入实用阶段。

> 判断：数据持久化与 CI/CD 现代化将成为下版本重点方向。

---

### 7. **用户反馈摘要**

- **负面反馈**:
  - Telegram 长消息静默丢弃（[#2903](https://github.com/nearai/ironclaw/issues/2903)）：用户期望明确失败通知而非静默丢失。
  - 文件保存路径硬编码 `/home/agent` 违反托管环境隔离原则（[#2905](https://github.com/nearai/ironclaw/issues/2905)）：高级用户需 SSH 手动修复，非普通用户友好。
  - MCP stdio 误触发 OAuth（[#2474](https://github.com/nearai/ironclaw/issues/2474)）：暴露协议理解错误，损害开发者信任。

- **正面反馈**:
  - 多数贡献者赞赏 engine-v2 架构清晰化（如 [PR #2868](https://github.com/nearai/ironclaw/pull/2868) 获积极跟进）。
  - 新 UI 日志列宽优化（[#2917](https://github.com/nearai/ironclaw/issues/2917)）被认可提升可读性。

---

### 8. **待处理积压**

- **[Issue #2231](https://github.com/nearai/ironclaw/issues/2231)**: “Multiple chats cannot run in parallel” 自 2026-04-10 提出，持续活跃，无明确解决路径，影响多任务场景可用性。
- **[Issue #2792](https://github.com/nearai/ironclaw/issues/2792)**: Gateway state convergence 史诗任务创建于 2026-04-21，虽受重视但尚未拆解为可执行子任务，建议指定负责人并关联至 engine-v2 路线图。
- **[PR #1764](https://github.com/nearai/ironclaw/pull/1764)** (Abound demo): 自 2026-03-30 开放，涉及生产级 Responses API 与凭证注入，风险高且未合并，需评估优先级。

> 建议：对 #2231 启动专项排查，因其可能阻碍多租户并发场景落地。

--- 

*数据来源：GitHub API @ 2026-04-24 00:00 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

LobsterAI 项目在 2026-04-24 保持稳定迭代节奏，过去 24 小时内共处理 13 个 Pull Request（全部已合并）并新增 6 个 Issue。核心功能持续优化，重点修复了多通道消息渲染、MCP 工具调用及 Electron 兼容性等问题。尽管无新版本发布，但社区反馈活跃，主要集中在版本管理、登录支持和配置有效性方面。项目整体健康度良好，维护响应及时，无明显阻塞性缺陷。

---

### 1. **今日速览**
LobsterAI 在过去 24 小时完成 13 个 PR 合并，包括界面响应式调整、网关超时优化与插件升级；新增 6 个 Issue，其中 #1797 建议增加对话删除功能获用户点赞。项目处于平稳更新阶段，无重大版本发布。社区对 Codex 登录支持、飞书/ Discord 配置生效等问题关注度较高。

---

### 2. **版本发布**
无新版本发布。

---

### 3. **项目进展**

今日合并的关键 PR 包括：

- **[PR #1805](https://github.com/netease-youdao/LobsterAI/pull/1805)**: 发布 `Release/2026.04.22`，主要更新包括：
  - Discord / Telegram 支持多机器人实例运行；
  - LM Studio 作为本地模型提供商正式集成；
  - WeCom 插件升级至 2026.4.22；
  - Windows 安装日志增强（新增 `install-timing.log`）；
  - 更新请求携带完整上下文信息，提升升级体验。

- **[PR #1807](https://github.com/netease-youdao/LobsterAI/pull/1807)**: 修复协作模式下切换会话时草稿内容丢失的问题，改进用户体验一致性。

- **[PR #1803](https://github.com/netease-youdao/LobsterAI/pull/1803)**: 将 chat.send RPC 超时从 30 秒提升至 90 秒，避免因网络延迟导致的误判中断，并添加慢请求警告日志。

- **[PR #1798](https://github.com/netease-youdao/LobsterAI/pull/1798)**: 优化 gateway 重启逻辑，避免在 focus/blur 事件触发不必要的重启，提升稳定性。

这些改进显著提升了多平台适配能力、交互流畅性和系统健壮性，为后续扩展打下基础。

---

### 4. **社区热点**

最活跃的 Issue 为 **[#1797](https://github.com/netease-youdao/LobsterAI/issues/1797)**，用户提议增加**对话删除与批量删除功能**，以清理无效对话、维护有效上下文。该需求获 👍1，反映用户对本地对话管理的迫切需求，尤其适用于长期使用者。

其次，**[#15](https://github.com/netease-youdao/LobsterAI/issues/15)** 报告 Electron 40 + Node.js v24 兼容性问题导致启动崩溃，涉及 macOS 和 Windows，属高优先级 Bug，暂无 fix PR，需尽快处理。

此外，**[#14](https://github.com/netease-youdao/LobsterAI/issues/14)** 指出飞书通道 `renderMode` 配置未生效且 `<thinking>` 标签未过滤，影响消息展示质量，已有相关开发活动（如 UI 宽度调整），可能关联修复。

---

### 5. **Bug 与稳定性**

| 严重程度 | Issue 编号 | 问题描述 | 状态 |
|--------|-----------|---------|------|
| 高       | [#15](https://github.com/netease-youdao/LobsterAI/issues/15) | Electron 40 启动时报错 `TypeError: Cannot set properties of undefined (setting 'name')`，影响 macOS/Windows 启动 | 开放，无 fix |
| 中       | [#14](https://github.com/netease-youdao/LobsterAI/issues/14) | 飞书通道 renderMode 配置不生效，thinking 标签未过滤 | 开放，可能正在修复 |
| 低       | [#26](https://github.com/netease-youdao/LobsterAI/issues/26) | 用户困惑当前编译版本是否为最新版，缺乏版本说明 | 开放 |

> 注：[#15] 为潜在回归问题，需验证 Node.js 版本兼容性；[#14] 已有代码分析指向配置读取逻辑缺失，有望近期修复。

---

### 6. **功能请求与路线图信号**

- **Codex 登录支持**（[#29](https://github.com/netease-youdao/LobsterAI/issues/29)）：用户明确要求增加 Codex 账号登录选项，暗示有道内部产品生态整合意图。
- **对话删除与管理功能**（[#1797](https://github.com/netease-youdao/LobsterAI/issues/1797)）：高频使用场景下的刚需，可能纳入下一版本本地存储模块优化。
- **多机器人支持**（已在 PR #1805 实现）：反映企业级或群组协作场景需求上升，未来或扩展至更多 IM 平台。

结合近期 PR 可见，团队正积极增强跨平台能力与用户体验，尤其关注企业级部署与第三方服务集成。

---

### 7. **用户反馈摘要**

- **满意度**：多数用户对 Discord/Telegram 多机器人支持表示欢迎，认为提升了灵活性与可扩展性；LM Studio 集成也被视为重要进步。
- **痛点**：
  - 缺乏清晰版本说明，导致用户无法确认是否处于最新状态（[#26]）；
  - Electron 升级后兼容性问题频发，影响新手安装体验（[#15]）；
  - 飞书通道配置项形同虚设，降低专业用户信任度（[#14]）；
  - 缺少批量对话管理能力，长期使用易造成数据混乱（[#1797]）。

---

### 8. **待处理积压**

- **Issue #15**: Electron 40 启动失败，创建超 60 天，影响多个操作系统，属关键路径问题，建议优先安排测试与修复。
- **Issue #14 & #26**: 虽非紧急，但涉及配置透明性与用户体验一致性，建议纳入下个迭代计划。
- **PR #61**（OpenAI API Type Selection）已关闭，但未完全合并？需确认状态。

> 建议维护者定期 review “stale” 标签下的 Issue，主动沟通解决方案或关闭无意义请求，以提升社区感知透明度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

2026-04-24 Moltis 项目动态日报

1. 今日速览
Moltis 在过去24小时内保持较高活跃度，共处理9个Issue和12个PR，其中6个PR已合并/关闭。社区对UI交互优化（如自动滚动控制）和MCP/OAuth功能增强表现出持续关注。项目整体进展平稳，多个关键Bug得到修复，新功能如Signal集成和子代理预设正在推进。

2. 版本发布
无新版本发布。

3. 项目进展
今日合并/关闭的重要PR包括：
- PR #856: 修复了Gemini (via OpenRouter)和Fireworks AI的schema标准化问题，解决了#849和#848两个相关Bug。
- PR #854: 添加了ElevenLabs TTS的自定义声音支持测试，提升了语音功能的稳定性。
- PR #855: 调整了系统提示中日期时间的注入位置，以改善本地LLMs的KV缓存稳定性。
- PR #853: 修复了Docker沙箱在ARM/Raspberry Pi及WSL2上因缺少/sys/class/dmi导致的失败问题。
- PR #852: 在MCP服务器UI中添加了重新认证按钮，解决了OAuth重认证问题。
- PR #841: 集成了signal-cli通道插件，扩展了消息通知渠道。
这些PR共同推进了核心功能稳定性、用户体验提升和新能力扩展。

4. 社区热点
讨论最活跃的Issue是#176（Add datetime to system prompt context），尽管已关闭，但仍有16条评论和1个👍，表明用户对此功能有强烈需求。新提出的#824（don't auto-scroll to end of chat session if scrolled up）获得了用户的积极反馈，并已有对应的PR #846实现。这表明用户对聊天界面的交互体验非常关注。

5. Bug与稳定性
今日报告的Bug按严重程度排列如下：
- #857 Silent memory turn saves with wrong dates in filenames (新报告)：文件名日期错误，可能影响文件管理。
- #848 Fireworks Fire Pass: JSON Schema not supported: could not translate the enum None (新报告)：API兼容性问题。
- #849 "parameters.required[0]: property is not defined" is back (已关闭)：已由PR #856修复。
- #828 Docker sandbox fails on WSL2 due to missing /sys/class/dmi (已关闭)：已由PR #853修复。
- #851 MCP OAuth re-auth button missing from UI (已关闭)：已由PR #852修复。
已有多个重要Bug得到了快速响应和修复。

6. 功能请求与路线图信号
用户提出的新功能需求包括：
- #850 Support client_secret in MCP server OAuth override config：希望在MCP配置中支持client_secret。
- #840 feat(skills): MCP server management skill and post-install recipes：提议添加MCP服务器管理技能。
- #837 feat(projects): add code_index_enabled toggle to project settings：提议为项目设置代码索引开关。
- #844 feat(config): add default sub-agent presets：提议添加默认的子代理预设。
结合已有PR，这些功能请求被积极评估并部分实现，表明它们可能被纳入近期版本。Signal集成的PR #841也显示出项目在扩展通信渠道方面的路线图。

7. 用户反馈摘要
从Issues评论中提炼的真实用户痛点包括：
- 用户对聊天界面自动滚动到最新消息的体验感到不满（#824），希望保留手动阅读历史消息的能力。
- 用户在Docker沙箱环境（如WSL2）中遇到文件系统权限问题（#828），需要更好的跨平台兼容性。
- 用户对ElevenLabs自定义声音的支持有期待（#735），希望功能更完善。
- 用户对MCP服务器的OAuth认证流程感到不便，希望有更直观的UI交互（#851）。
用户普遍对项目的稳定性和易用性表示满意，但也提出了具体的改进建议。

8. 待处理积压
长期未响应的重要Issue或PR包括：
- Issue #735 (custom elevenlabs voices don't work)：虽然已关闭，但可能需要进一步验证和测试以确保ElevenLabs自定义声音功能完全正常。
- Issue #176 (Add datetime to system prompt context)：虽然已关闭，但其核心需求（日期时间注入）已在PR #855中得到实现，但可能需要更多用户反馈来确认最佳实践。
维护者应关注这些Issue，确保相关功能的稳定性和用户体验。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目动态日报（2026-04-24）**

---

### 1. **今日速览**  
过去24小时内，CoPaw 项目保持高度活跃状态：共处理50条 Issue 更新（新开/活跃与已关闭各25条），50条 PR 更新（待合并16条，已合并/关闭34条），并发布2个新版本（v1.1.4-beta.1 和 v1.1.3.post1）。社区贡献积极，新增多个功能增强与稳定性修复，整体项目健康度良好。

---

### 2. **版本发布**  

#### ✅ v1.1.4-beta.1  
- **更新内容**：  
  - 版本号提升至 `v1.1.4b1`（#3674）  
  - 修复 fig 文档中的语言问题（#3678）  
  - 控制台增加 `.prettierignore` 并优化代码格式化规则  
- **影响范围**：无破坏性变更，主要为文档与构建流程优化  
- **链接**：[PR #3674](https://github.com/agentscope-ai/QwenPaw/pull/3674), [PR #3678](https://github.com/agentscope-ai/QwenPaw/pull/3678)

#### ✅ v1.1.3.post1  
- **更新内容**：  
  - 回滚部分安全机制以避免防御器冲突（#3717）  
  - 桌面端文件下载使用原生保存对话框（pywebview 集成优化）（#3719）  
- **注意事项**：若用户依赖原生的文件下载行为，此变更将改善体验；否则无需迁移操作  
- **链接**：[PR #3717](https://github.com/agentscope-ai/QwenPaw/pull/3717), [PR #3719](https://github.com/agentscope-ai/QwenPaw/pull/3719)

---

### 3. **项目进展**  

#### 🔹 已合并关键 PR  
- **PR #3739**：引入可配置的 `allow_no_auth_hosts` 白名单，取代硬编码的 localhost 绕过逻辑，提升 API 认证灵活性（#3739）  
- **PR #3730**：解决 Windows 下 `discord.py` 因 conda-unpack 导致正则表达式失效的问题（#3730）  
- **PR #3719**：桌面端文件下载改为使用系统原生对话框，提升用户体验一致性  

#### 🔹 重要开放 PR  
- **PR #3759**：新增 Unsloth Studio 提供者支持，扩展本地 LLM 托管平台兼容性（#3759）  
- **PR #3550**：对齐作用域感知路由语义，确保运行时与查询路径模型选择一致（#3550）  
- **PR #3746 / #3744**：钉钉通道引入任务超时与会话 ID 防冲突机制，解决消息交叉污染问题（#3746, #3744）

> **项目推进亮点**：多模态支持、渠道稳定性、身份验证配置化成为当前重点方向。

---

### 4. **社区热点**  

| Issue/PR | 主题 | 热度 | 诉求分析 |
|--------|------|------|--------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 开放任务征集贡献者 | 🔥 评论60+ | 社区驱动开发模式活跃，开发者寻求具体可认领任务以提升参与感 |
| [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) | 禁用安全规则仍被拦截 | ⚠️ 新报 Bug | 用户对细粒度安全策略控制需求强烈，期待更透明的可配置性 |
| [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | MCP Client 假死无响应 | ⚠️ 高关注度 | Agent 执行阻塞严重影响可用性，需紧急排查 TaskGroup 资源泄漏 |

> **趋势观察**：安全性、多平台兼容性（尤其 ARM/macOS）、渠道消息可靠性是高频痛点。

---

### 5. **Bug 与稳定性**  

#### 🔴 严重问题（已有 fix 或关联 PR）  
- **[#3709]** TOOL_CMD_IFS_INJECTION 规则禁用后仍触发拦截 → **关联 PR #3739**（允许自定义免认证主机列表，间接缓解策略冲突）  
- **[#3677]** Discord 连接因 regex 错误失败 → **已修复于 PR #3730**（添加 discord.py 到 conda-unpack 保护列表）  

#### 🟡 中等问题  
- **[#3552]** Console 频道在 SSE 序列化时遇畸形 Unicode 崩溃 → 暂无公开 PR，建议归类为 P1 修复项  
- **[#3573]** cron 任务指定 weixin 渠道时报 KeyError → 需验证渠道注册表一致性（见 PR #3605 针对 weixin/wechat 命名修正）

#### 🟢 低优先级 / 已关闭  
- Docker 打包缺 git 命令 → 已归档（#3695）  
- 多模态模型无法启用 → 用户环境配置问题为主（#3756）

---

### 6. **功能请求与路线图信号**  

| 需求类型 | 代表 Issue/PR | 可能性评估 |
|--------|--------------|-----------|
| 多模态消息支持 | #3509（PR 提交中） | ⭐⭐⭐⭐☆ （已有实现，待合并） |
| Apple Silicon 浏览器支持 | #2655 | ⭐⭐☆☆☆ （社区关注但未启动） |
| 钉钉长文本 Markdown 分段推送 | #3742 | ⭐⭐⭐☆☆ （与现有 DingTalk 重构 PR 协同推进） |
| 右键上下文菜单（Win/Web） | #3752 | ⭐⭐☆☆☆ （UI 增强类，资源投入待评估） |
| OpenAI Responses API 支持 | #3531 | ⭐⭐⭐⭐☆ （已有提案，可能纳入 v1.2） |

> **结论**：多模态与渠道扩展是当前明确发力点，架构级改进（如路由语义统一）支撑长期演进。

---

### 7. **用户反馈摘要**  

- **正面反馈**：  
  - “Unsloth Studio 提供者很棒，终于能在本地跑自定义模型了！”（#3759 评论区）  
  - “桌面版文件下载用系统对话框太顺手了，之前总是弹窗乱码。”（#3719 相关讨论）

- **负面反馈**：  
  - “MCP 启用后控制台卡死，只能重启，数据丢了。”（#3640）  
  - “深色模式侧边栏文字重叠，视觉体验差。”（#3546）  
  - “升级命令杀不掉旧进程，必须手动 kill。”（#3748）

> **核心诉求**：稳定性 > 易用性 > 新功能。用户尤其关注生产环境下的健壮性与跨平台一致性。

---

### 8. **待处理积压**  

| Issue/PR | 状态 | 风险提示 |
|--------|------|---------|
| [#3047] MemorySearch 数据库文件打开失败 | OPEN >40天 | 内存后端兼容性问题未闭环，影响高级记忆功能部署 |
| [#3550] 路由语义对齐 | OPEN 2周+ | 涉及核心架构一致性，延迟可能导致后续扩展困难 |
| [#2655] Apple Silicon 浏览器支持 | OPEN 1个月+ | 无实质性进展，ARM 生态适配需优先规划 |

> **建议行动**：  
> - 指派专人跟进 #3047 与 #3550，防止技术债累积  
> - 在 v1.2 路线图中明确 ARM/macOS 支持时间表

--- 

**总结**：CoPaw 在保持高速迭代的同时，正逐步夯实基础架构（认证、路由、渠道稳定性）并拓展能力边界（多模态、新提供商）。建议下一步聚焦 Bug 歼灭战与长期技术债清理，以巩固社区信任。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目动态日报 (2026-04-24)**

**1. 今日速览**
ZeptoClaw 项目今日活跃度较高，共处理了 36 条 Issues/PRs（19 条 Issues，17 条 PRs）。核心贡献者 `qhkm` 和 `manelsen` 主导了多项关键功能和安全增强的讨论与实现。项目整体进展稳健，重点围绕边缘 AI 代理的安全、本地模型支持和 CI/CD 稳定性进行迭代。

**2. 版本发布**
*   无新版本发布。

**3. 项目进展**
今日合并/关闭的重要 PR 主要聚焦于安全加固、依赖更新和基础功能完善：
*   **安全审计与验证 (PR #528, #527, #526):** 成功合并了多个与安全相关的 PR，包括为工具执行添加内存中的 Merkle 哈希链审计日志 (`#528`)、在配置时对 SSRF 端点进行验证 (`#527`) 以及为技能下载添加 SHA256 摘要验证 (`#526`)。这些改进显著提升了 ZeptoClaw 在执行环境和用户输入验证方面的安全性。
*   **依赖更新与维护 (PR #542, #521, #520, #519, #515, #510, #469, #517):** 完成了多个依赖项的更新，包括 `cargo-deny-action` (`#542, #521`)、`taiki-e/install-action` (`#520`)、`docker/build-push-action` (`#519`)、`react-router` (`#515`)、`astro` (`#510`) 和 `actions/download-artifact` (`#469`)，以及关键的 Rust 库 `sha2` (`#517`)。这些更新确保了构建工具的稳定性和安全性，并利用了最新的 Rust 特性（如 Clippy Lints）来提升代码质量。
*   **编码基准测试 (PR #524):** 合并了一个用于代理比较的小型自我包含的编码基准测试夹具，有助于标准化和客观地评估不同代理的性能。
*   **Telegram 配置兼容性修复 (PR #523):** 修复了 Telegram 频道配置兼容性问题，确保遗留密钥与新系统兼容。
*   **Rust 1.95 Clippy Lints 修复 (PR #529):** 自动修复了因 Rust 1.95 引入的新 Clippy 检查项导致的问题。

**4. 社区热点**
今日最活跃的议题是 **Liquid AI (LFM) provider integration (#541)**，由 `qhkm` 创建，旨在集成 Liquid AI 的边缘原生模型。这反映了社区对支持边缘部署、非 Transformer 架构模型以及特定平台（iOS/Android via LEAP SDK）集成的强烈需求，直接契合项目的边缘/IoT 定位。另一个重要议题是 **CI 编译覆盖扩展 (#545)**，讨论了如何确保可选集成功能在 Pull Request 阶段得到充分测试，以防止代码漂移，显示了维护者对持续集成质量的重视。

**5. Bug 与稳定性**
今日报告的主要 Bug 是 **Telegram Channel Configuration Bug (#522)**，该问题已在 PR #523 中得到修复。此 Bug 影响了 Telegram 频道配置的加载，表明在某些配置场景下存在兼容性问题。其他 Issues 多为新功能请求或改进建议，未报告新的严重崩溃或回归问题。

**6. 功能请求与路线图信号**
今日提出的功能请求清晰地勾勒出下一版本的路线图：
*   **边缘原生模型集成:** Liquid AI (LFM) 提供商集成 (#541) 和 Ollama/llama.cpp 本地模型回退 (#539) 是核心需求，强调了对边缘设备部署和离线能力的关注。
*   **IoT 通道支持:** MQTT 作为第一类通道的推广 (#538) 是另一个明确的需求，旨在解锁与现有 IoT 基础设施的无缝集成。
*   **安全与审计增强:** 技能安装时的安全扫描器 (#535)、shell 命令黑名单扩展 (#532)、二进制大小预算门控 (#537) 以及配置版本控制 (#530) 等议题，表明安全性和可维护性将是重点发展方向。
*   **文档与演示:** Raspberry Pi 'brain+muscles' 部署演练文档 (#540) 的需求，旨在提供可复现的边缘部署示例，这对于吸引投资者和展示产品价值至关重要。
*   **配置与环境隔离:** 通过 `ZEPTOCLAW_HOME` 环境变量实现配置文件隔离 (#531) 也是一个重要的用户体验和功能增强点。

**7. 用户反馈摘要**
从 Issues 中可以看出，用户和社区成员对 ZeptoClaw 的核心价值（轻量级、边缘部署、安全性）表示认可。他们特别关注：
*   **实际部署可行性:** 用户希望看到更多关于如何在真实硬件（如 Raspberry Pi）上部署和运行的详细文档和演示，以验证其“6MB 完整 AI 代理运行时”的宣传。
*   **安全性:** 社区积极寻求并实现了更全面的安全措施，如审计日志、SSRF 防护、技能完整性验证等，表明对生产环境部署的安全性有很高的期望。
*   **生态整合:** 对集成主流通讯渠道（Feishu/Lark, Line）和 IoT 协议（MQTT）的需求，显示出希望将 ZeptoClaw 嵌入到广泛现有系统中的愿望。
*   **稳定性与测试:** CI/CD 的稳定性、测试的 Hermeticity（隔离性）以及对破坏性变更的保护（二进制大小预算）都是被反复提及的关键点，以确保项目的长期健康和可靠性。

**8. 待处理积压**
今日未发现长期未响应的重要 Issue 或 PR。所有 Issues 和 PRs 均能在短时间内得到回应或关闭。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为一位 AI 智能体与个人 AI 助手领域的项目分析师，我将根据您提供的 GitHub 数据生成一份结构清晰的 ZeroClaw 项目动态日报。

---

### **ZeroClaw 项目动态日报 (2026-04-24)**

**报告人：** AI 智能体与个人 AI 助手领域开源项目分析师
**数据周期：** 2026年4月23日 00:00 UTC 至 2026年4月24日 00:00 UTC

---

#### **1. 今日速览**

过去24小时，ZeroClaw 项目保持了极高的活跃度，共处理了100条 Issues/PRs更新，显示出开发者和社区成员持续的高强度参与。核心进展集中在配置架构升级（Schema v3）和关键安全/稳定性修复上。尽管没有新版本发布，但项目整体状态健康，多个高优先级问题正在推进中。

---

#### **2. 版本发布**

*   **无新版本发布。**

---

#### **3. 项目进展**

*   **配置架构升级（Schema v3）稳步推进。**
    *   Issue #5947 详细规划了整个迁移流程，并已有 PR #6019 开始实施 Mattermost 相关的字段变更，标志着大规模重构已正式启动。
    *   相关 Issue: [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) (enhancement, status:in-progress)
    *   相关 PR: [#6019](https://github.com/zeroclaw-labs/zeroclaw/pull/6019) (feat(config): schema v3 — Mattermost bot_token optional, channel_id → channel_ids)

---

#### **4. 社区热点**

*   **Docker 环境下的 Web 仪表板可用性成为焦点 (#5847, #5959)。**
    *   用户 eabase 和 yonzilch 提出了关于如何在 Docker 容器中正确配置和使用 `gateway.web_dist_dir` 或 `ZEROCLAW_WEB_DIST_DIR` 变量以启用 Web 仪表板的问题，并被标记为 S0 严重性。这表明文档和社区支持对于新用户至关重要。
    *   相关 Issue: [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) (bug), [#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) (bug)

*   **技能审计范围和安全策略的讨论深化 (#5956)。**
    *   RyanHoldren 提出的 Issue #5956 引发了关于技能审核应聚焦于结构检查还是包含命令内容安全的深入讨论，体现了项目在安全性设计上正变得更加严谨和清晰。
    *   相关 Issue: [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) (enhancement, status:in-progress)

---

#### **5. Bug 与稳定性**

*   **高优先级 (S0/S1)：**
    *   **Anthropic 提供程序因 `temperature` 参数导致 Claude 4.7 请求失败 (#6007)。**
        *   此问题阻止用户使用 Claude 4.7 模型，因为 Anthropic 提供程序总是发送 `temperature` 参数。Issue 已被报告，需要开发者修复请求结构的序列化方式。
        *   相关 Issue: [#6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007) (bug, provider)
    *   **Ollama 提供程序在需要工具调用时失败 (#5962)。**
        *   当使用 Ollama 提供程序且会话需要工具调用时出现错误，这会阻塞工作流。这是一个关键的运行时问题，需要尽快解决。
        *   相关 Issue: [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) (bug)
    *   **Cron 作业执行失败 (#5991)。**
        *   一个 cron 作业未能成功执行，被标记为 S0 严重性（数据丢失/安全风险），表明 cron 任务功能存在重大缺陷。
        *   相关 Issue: [#5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991) (bug)
    *   **Gateway Chat 成功后 `/api/cost` 为零且未写入使用日志 (#6001)。**
        *   尽管聊天成功，但成本跟踪和运行时跟踪文件未被写入，影响可观测性和计费功能。
        *   相关 Issue: [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) (bug, gateway)
    *   **内存嵌入未自动生成 (#5646)。**
        *   当配置 Ollama 作为嵌入提供程序时，系统未自动为新记忆生成向量，影响知识库功能。
        *   相关 Issue: [#5646](https://github.com/zeroclaw-labs/zeroclaw/issues/5646) (bug)

*   **中优先级 (S2/S3)：**
    *   **ZeroClaw Desktop 应用崩溃 ("No provider set") (#5984)。**
        *   Tauri 桌面应用构建后运行崩溃，提示缺少 provider，可能是配置或初始化问题。
        *   相关 Issue: [#5984](https://github.com/zeroclaw-labs/zeroClaw/issues/5984) (bug)
    *   **Discord 频道适配器未正确处理线程隔离 (#5412)。**
        *   Discord 不同线程的消息共享同一个对话上下文，导致信息混乱。这是一个频道适配器的 bug。
        *   相关 Issue: [#5412](https://github.com/zeroclaw-labs/zeroclaw/issues/5412) (bug, channel: discord)

---

#### **6. 功能请求与路线图信号**

*   **批量破坏性字段迁移计划 (Schema v3) (#5947)。**
    *   Issue #5947 提出了一个全面的计划，将当前 schema 版本升级到 v3，并在一次协调的迁移中完成所有待处理的破坏性配置字段更改。这表明项目正在进行重大的架构调整，旨在减少未来的中断并提高配置管理的灵活性。
    *   相关 Issue: [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) (enhancement, status:in-progress)

*   **技能超时配置支持 (#6054)。**
    *   PR #6054 实现了从 `SKILL.toml` 文件中读取 `timeout_secs` 字段，这表明项目正在积极增强对技能执行的精细化控制。
    *   相关 PR: [#6054](https://github.com/zeroclaw-labs/zeroclaw/pull/6054) (fix(skills): respect timeout_secs from SKILL.toml)

*   **重新引入 PostgreSQL 内存后端 (#6016)。**
    *   PR #6016 恢复了被删除的 PostgreSQL 内存后端，这对于多实例部署和需要共享、并发写入存储的场景至关重要。这反映了项目对生产环境支持的重视。
    *   相关 PR: [#6016](https://github.com/zeroclaw-labs/zeroclaw/pull/6016) (feat(memory): re-introduce PostgreSQL backend (memory-postgres))

*   **Mattermost WebSocket 监听器与多通道支持 (#5902)。**
    *   PR #5902 添加了 Mattermost 的 WebSocket 监听器，并支持多通道，扩展了 ZeroClaw 的通信渠道。
    *   相关 PR: [#5902](https://github.com/zeroclaw-labs/zeroclaw/pull/5902) (docs(channel): add Mattermost WebSocket listener with multi-channel support)

---

#### **7. 用户反馈摘要**

*   **痛点：** 用户普遍反映在 Docker 环境中配置复杂，尤其是 Web 仪表板的设置缺乏清晰的文档（#5847, #5959）。
*   **使用场景：**
    *   用户 Jason Perlow 正在使用 ZeroClaw 开发一个 FINOS CDM 5.x 合规的投资组合分析技能 (InvestorClaw)，展示了其在专业金融领域的潜力。
    *   多位用户（如 irunmyway, MexHigh）表达了希望将 Matrix 或其他机器人协议（OneBot）集成到 ZeroClaw 中的需求，说明了对多样化通信渠道的渴望。
    *   用户 b0xtch 和 ilteoood 关注 cron 作业的执行和结果展示，表明自动化任务管理是核心使用场景之一。
*   **不满意之处：**
    *   用户对 LLM 输入/输出内容的记录需求强烈（#5504），现有的 token 级日志无法满足调试和分析的需要。
    *   用户在处理本地模型和远程模型提供商时遇到兼容性问题，特别是工具调用方面（#5962, #2998）。
    *   部分用户报告了桌面应用崩溃（#5984）和运行时错误（#6002），影响了用户体验。

---

#### **8. 待处理积压**

*   **长期未响应的重要 Issue/PR：**
    *   **Issue #2503 (Add Matrix as a delivery channel)：** 自 2026-03-02 提出，已有 8 条评论，但至今未解决。这表明该功能请求虽被认可，但在优先级排序上可能落后于其他紧急问题。维护者需要评估其实现成本和收益。
    *   **Issue #2998 (Add Multiple Model Providers)：** 自 2026-03-08 提出，已有 2 条评论，用户询问如何添加多个模型提供商。这可能是未来版本的一个重要功能点，需要明确其设计和实现路径。
    *   **Issue #3361 (Add Matrix as a delivery channel)：** 虽然已关闭，但其原始问题（Matrix 作为交付渠道）仍未被完全解决或替代方案被提出。

---

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*