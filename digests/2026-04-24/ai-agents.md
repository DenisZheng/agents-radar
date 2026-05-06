# OpenClaw 生态日报 2026-04-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-24 00:18 UTC

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

# OpenClaw 项目动态日报 | 2026-04-24

## 1. 今日速览

OpenClaw 昨日（2026-04-23）保持极高活跃度：**500 条 Issues 更新**（356 新开/活跃，144 关闭）与 **500 条 PR 更新**（318 待合并，182 已合并/关闭），社区讨论密度达到近期峰值。项目刚发布 v2026.4.22 版本，重点补齐 xAI 多模态能力。当前最突出的风险是 **v2026.4.21 引入的扩展依赖缺失问题**——Feishu/Nostr 等扩展的 npm 依赖未正确打包，导致全新安装大面积崩溃，24 小时内已涌现 5+ 相关 Issue 且已有紧急修复 PR 待合并。此外，AI 辅助代码贡献占比显著上升，需关注代码审查深度。

---

## 2. 版本发布

### [v2026.4.22](https://github.com/openclaw/openclaw/releases/tag/v2026.4.22) — openclaw 2026.4.22

**发布日期**：2026-04-22（昨日发布）

**核心更新**：
| 模块 | 变更内容 |
|:---|:---|
| **xAI 图像生成** | 新增 `grok-imagine-image` / `grok-imagine-image-pro` 模型，支持参考图编辑（reference-image edits） |
| **xAI 语音合成 (TTS)** | 6 种实时 xAI 语音，支持 MP3/WAV/PCM/G.711 格式 |
| **xAI 语音识别 (STT)** | 新增 `grok-stt` 音频转录 |
| **xAI 实时转录** | 实时语音识别流式支持 |

**迁移注意事项**：
- 本次为能力扩展版本，无已知破坏性变更
- 使用 xAI 新功能需确保 `providers.xai.apiKey` 已配置

**已知关联风险**：v2026.4.21 的依赖打包问题可能影响部分用户升级路径，建议从 v2026.4.20 或更早版本直接升级至 v2026.4.22 以跳过问题版本。

---

## 3. 项目进展

### 昨日合并/关闭的关键 PR（按影响力排序）

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#70488](https://github.com/openclaw/openclaw/pull/70488) | @ottodeng | **已合并** | **Azure OpenAI 图像生成路由修复**：解决 `gpt-image-2` 在 Azure 端点硬编码指向 `api.openai.com` 的问题，支持企业私有化部署 |
| [#70503](https://github.com/openclaw/openclaw/pull/70503) | @ottodeng | **已合并** | **gpt-image-2 生产级参数暴露**：新增 `quality` / `output_format` / `background` / `moderation` 控制，支持低成本预览渲染（`quality: "low"`） |
| [#70741](https://github.com/openclaw/openclaw/pull/70741) | @Patrick-Erichsen | **已合并** | **Control UI 设备配对认证修复**：接受配对设备 token 进行 assistant-media 认证，解决媒体播放权限问题 |
| [#67344](https://github.com/openclaw/openclaw/pull/67344) / [#67254](https://github.com/openclaw/openclaw/pull/67254) | @oliviareid-svg / @Joel-Claw | **已合并** | **Google Generative AI 私网代理修复**：尊重用户 `allowPrivateNetwork` 配置，解决代理环境下 Gemini 图像生成被 SSRF 策略阻断 |
| [#46325](https://github.com/openclaw/openclaw/pull/46325) | @dt-chenwenxiong | **已合并** | **OpenAI 兼容提供商图像格式修复**：停止对所有提供商硬编码 Anthropic `input_image` 格式，OpenRouter 等视觉模型恢复正常 |
| [#50492](https://github.com/openclaw/openclaw/pull/50492) | @mculp | **已合并** | **OpenRouter 媒体理解提供商**：`image` 工具支持 OpenRouter 视觉模型（如 `mimo-v2-omni`）|
| [#56678](https://github.com/openclaw/openclaw/pull/56678) | @YoungMoneyInvestments | **已合并** | **openai-codex / github-copilot 媒体理解 ID 规范化**：修复这两个 OAuth 提供商的图像分析功能注册 |
| [#57357](https://github.com/openclaw/openclaw/pull/57357) | @Aoiujz | **已合并** | **image_generate 可配置超时**：为慢速图像提供商提供独立超时控制 |
| [#70832](https://github.com/openclaw/openclaw/pull/70832) | @ayesha-aziz123 | **已合并** | **Cron 超时竞争条件修复**：防止超时后后台任务覆盖超时结果 |

**整体推进评估**：昨日合并 PR 集中在**多模态能力补全**（图像生成/理解的路由、格式、参数）和**企业部署适配**（Azure、私网代理、SSRF），项目在生产就绪度上迈出关键一步。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 🔥1 | [#49971](https://github.com/openclaw/openclaw/issues/49971) RFC: Native Agent Identity & Trust Verification | **102** | **去中心化身份基础设施**：MolTrust 提出基于 ERC-8004 + W3C DID/VC 的原生代理身份验证框架，试图解决 AI 代理间的信任建立问题——这是 OpenClaw 向多代理协作网络演进的关键提案 |
| 🔥2 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | **92** / 👍71 | **跨平台桌面客户端 parity**：macOS/iOS/Android 已有原生应用，Linux/Windows 用户长期被排除在完整功能集外，这是**最高票功能请求** |
| 🔥3 | [#70457](https://github.com/openclaw/openclaw/issues/70457) npm 全局安装缺失 `@larksuiteoapi/node-sdk` 和 `nostr-tools` | **26** / 👍3 | **v2026.4.21 依赖灾难**：全新安装即崩溃，影响 Feishu/Lark 和 Nostr 扩展，24 小时内密集涌现 |
| 4 | [#7200](https://github.com/openclaw/openclaw/issues/7200) 实时语音对话支持 | **22** / 👍23 | **电话级实时语音**：Twilio/WebRTC 双向流式音频，与昨日发布的 xAI TTS/STT 能力形成需求-供给呼应 |
| 5 | [#36994](https://github.com/openclaw/openclaw/issues/36994) Exec 和工具持续损坏 | **19** | **工具系统稳定性**：browser/exec/read/write 在首次运行后反复失效，Pinokio 安装路径尤甚 |

**诉求分析**：社区正从"能用"向"好用+可信"跃迁——身份验证（#49971）反映多代理协作的信任焦虑，实时语音（#7200）与 xAI 发布同步验证需求真实性，而平台覆盖缺口（#75）持续制约用户基数扩张。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 类型 | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|:---|
| **P0 🔴** | [#70457](https://github.com/openclaw/openclaw/issues/70457) / [#70292](https://github.com/openclaw/openclaw/issues/70292) / [#70198](https://github.com/openclaw/openclaw/issues/70198) / [#70346](https://github.com/openclaw/openclaw/issues/70346) / [#70587](https://github.com/openclaw/openclaw/issues/70587) | **回归：全局安装依赖缺失** | 3 关闭 / 2 开放 | **所有新用户**（macOS/Ubuntu/Windows），`npm install -g` 即崩溃 | [#70819](https://github.com/openclaw/openclaw/pull/70819) 已开（符号链接信任修复）|
| **P0 🔴** | [#70096](https://github.com/openclaw/openclaw/issues/70096) | **升级事故：v2026.4.21 doctor --fix 失败并破坏配置** | 已关闭 | 升级用户，`openclaw.json` 被覆写为无效最小配置 | 已修复（v2026.4.22）|
| **P1 🟡** | [#68735](https://github.com/openclaw/openclaw/issues/68735) | **回归：LLM 请求被提供商拒绝 schema** | 开放 | GitHub Copilot / gpt-5-mini 用户，v2026.4.15 引入 | 待调查 |
| **P1 🟡** | [#67936](https://github.com/openclaw/openclaw/issues/67936) | **回归：Matrix 频道启动失败** | 开放 | Matrix 用户，`Cannot find package 'openclaw'` | 待调查 |
| **P1 🟡** | [#53317](https://github.com/openclaw/openclaw/issues/53317) | **回归：Gateway OAuth token 被缓存覆盖** | 开放 | openai-codex 用户，v2026.3.22 引入 | 待调查 |
| **P1 🟡** | [#67888](https://github.com/openclaw/openclaw/issues/67888) | **Opus 4.7 前向兼容：adaptive thinking 检测缺失** | 开放 | `claude-opus-4-7` 用户，每次首回合 400 错误 | [#70828](https://github.com/openclaw/openclaw/pull/70828) 已开（stdout buffer 配置）|
| **P2 🟢** | [#60213](https://github.com/openclaw/openclaw/issues/60213) | **上下文压缩后静默丢失会话** | 开放 | 长会话用户，数据丢失 | 待调查 |
| **P2 🟢** | [#51056](https://github.com/openclaw/openclaw/issues/51056) | **OpenRouter 401 认证头缺失** | 开放 | OpenRouter 用户 | [#46325](https://github.com/openclaw/openclaw/pull/46325) 已合并（相关但可能未完全覆盖）|

**稳定性评估**：v2026.4.21 是近期质量最差版本，依赖打包与升级路径双重故障。建议维护者考虑**紧急热修复（v2026.4.21-hotfix）**或加速 v2026.4.22 的推广。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 热度 | 与现有 PR 的关联 | 纳入下一版本概率 |
|:---|:---|:---:|:---|:---:|
| **实时语音通话** | [#7200](https://github.com/openclaw/openclaw/issues/7200) | 👍23 | xAI TTS/STT 刚发布；[#70765](https://github.com/openclaw/openclaw/pull/70765) 新增 Google Meet 插件含语音通话 DTMF | **高** |
| **Linux/Windows 桌面应用** | [#75](https://github.com/openclaw/openclaw/issues/75) | 👍71 | 无活跃 PR | 中（资源密集型）|
| **NVIDIA NIM 原生提供商** | [#50898](https://github.com/openclaw/openclaw/issues/50898) | 👍5 | 无 | 中 |
| **插件 UI 扩展系统** | [#66944](https://github.com/openclaw/openclaw/issues/66944) | 👍3 | [#65972](https://github.com/openclaw/openclaw/pull/65972) Bluesky MCP 技能（架构验证）| 中高 |
| **Bluesky 社交技能** | — | — | [#65972](https://github.com/openclaw/openclaw/pull/65972) 待合并 | **高** |
| **Discord 实时 QA 通道** | — | — | [#70792](https://github.com/openclaw/openclaw/pull/70792) 待合并 | **高** |
| **网络级 SSRF 防护** | — | — | [#70044](https://github.com/openclaw/openclaw/pull/70044) 待合并（Caddy 正向代理）| 中高 |
| **不可绕过的出站策略执行** | [#56349](https://github.com/openclaw/openclaw/issues/56349) | — | 无 | 中（安全基础设施）|
| **原生代理身份验证** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | 102 评论 | 无 | 中（生态位，需标准化）|

---

## 7. 用户反馈摘要

### 痛点（ verbatim 提炼）

> *"Fresh installation using `npm install -g openclaw@latest` fails... required extension dependencies such as `@larksuiteoapi/node-sdk` and `nostr-tools` are missing"* — [#70457](https://github.com/openclaw/openclaw/issues/70457)

> *"After upgrading from 2026.4.14 to 2026.4.15, configured use model github-copilot/gpt-5-mini, worked at first message, failed in later messages"* — [#68735](https://github.com/openclaw/openclaw/issues/68735)

> *"Session was silently abandoned after compaction, causing complete loss of conversation context"* — [#60213](https://github.com/openclaw/openclaw/issues/60213)

> *"Gateway startup takes approximately 20 minutes... chat.history fails to load"* — [#70050](https://github.com/openclaw/openclaw/issues/70050)

### 使用场景与满意度

| 场景 | 满意度 | 典型反馈 |
|:---|:---|:---|
| **macOS 原生应用** | ✅ 高 | 功能完整，但 Cron UI 有 JSON 反序列化问题 [#38971](https://github.com/openclaw/openclaw/issues/38971) |
| **多提供商图像生成** | ⚠️ 波动 | Azure/OpenRouter 修复后改善，但配置验证仍易误删 key [#50659](https://github.com/openclaw/openclaw/issues/50659) |
| **长会话/记忆管理** | ❌ 低 | 压缩丢失上下文、启动阻塞、wiki bridge 模式报告 0 导出 [#66082](https://github.com/openclaw/openclaw/issues/66082) |
| **企业/私有化部署** | ⚠️ 改善中 | Azure 路由、私网代理修复后可用性提升 |
| **Windows 体验** | ❌ 低 | 安装崩溃、后台命令行窗口闪烁 [#70238](https://github.com/openclaw/openclaw/issues/70238)、节点程序卡死 [#39038](https://github.com/openclaw/openclaw/issues/39038) |

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>30 天，高价值/高影响）

| Issue | 创建日期 | 天数 | 核心问题 | 提醒 |
|:---|:---|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 2026-01-01 | **113** | **最高票功能请求**，平台覆盖缺口制约增长 | 需产品决策与资源分配 |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) 实时语音对话 | 2026-02-02 | **81** | 与 xAI 发布战略契合，技术基础已具备 | 建议与 [#70765](https://github.com/openclaw/openclaw/pull/70765) Google Meet 插件统筹规划 |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) 代理身份验证 RFC | 2026-03-18 | **37** | 102 评论的去中心化身份提案，生态位关键 | 需核心维护者 RFC 评审回应 |
| [#17101](https://github.com/openclaw/openclaw/issues/17101) Telegram 语音消息未转录 | 2026-02-15 | **68** | Opus 音频格式支持问题 | 与 xAI STT 能力可联动解决 |
| [#18598](https://github.com/openclaw/openclaw/issues/18598) macOS Sequoia 隔离 Chrome 下载失效 | 2026-02-16 | **67** | 浏览器工具核心功能，影响数据导出工作流 | 需 browser 模块专项修复 |
| [#51056](https://github.com/openclaw/openclaw/issues/51056) OpenRouter 401 认证头缺失 | 2026-03-20 | **35** | 提供商集成质量 | [#46325](https://github.com/openclaw/openclaw/pull/46325) 已合并，需验证是否完全解决 |
| [#32638](https://github.com/openclaw/openclaw/issues/32638) Groq + 推理模型 400 错误 | 2026-03-03 | **52** | 提供商特定参数兼容性 | 推理模型生态扩展 blocker |

---

**日报生成时间**：2026-04-24  
**数据来源**：github.com/openclaw/openclaw

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-04-24

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从"功能可用"向"生产就绪"跃迁的关键拐点**。头部项目（OpenClaw、ZeroClaw、Hermes Agent）日均 Issues+PR 突破 100 条，社区吞吐量达到商业级开源项目水平；安全可信（审计链、SSRF 防护、权限隔离）成为共同优先级，反映 B 端采购决策的渗透；边缘/离线部署（Ollama、llama.cpp、Liquid AI）与多模态能力（TTS/STT、图像生成）构成下一轮差异化竞争的核心战场。与此同时，质量回归风险显著上升——多个项目因版本发布节奏过快出现 P0 级故障，稳定性债务正在累积。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 合并/关闭率 | 健康度评估 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 (356 新开/活跃, 144 关闭) | 500 (318 待合并, 182 已合并/关闭) | v2026.4.22 | PR 36% | 🔶 **高活跃+高风险**：v2026.4.21 依赖打包 P0 回归，社区密度峰值但质量门禁承压 |
| **NanoBot** | 14 (5 活跃, 9 关闭) | 20 (11 待合并, 9 已合并/关闭) | 无 | PR 45% | 🟢 **稳健迭代**：Agent 内存治理系列 4 PR 闭环，v0.1.5.post2 内存回归待观察 |
| **Hermes Agent** | 50 (44 活跃, 6 关闭) | 50 (35 待合并, 15 已合并/关闭) | v0.11.0 "The Interface" | PR 30% | 🔶 **里程碑发布+稳定性承压**：React/Ink CLI 重写完成，但 Issue 关闭率仅 12% |
| **PicoClaw** | 36 (36 活跃, 0 关闭) | 45 (39 待合并, 6 已处理) | v0.2.7-nightly | PR 13% | 🔴 **高积压**：Issues 零关闭、39 PR 待审，审查瓶颈阻碍 v0.3.0 推进 |
| **NanoClaw** | 16 (15 活跃, 1 关闭) | 27 (9 待合并, 18 已合并/关闭) | 无 | PR 67% | 🟢 **高质量交付日**：7 项安全修复+Signal 全链路闭环，v2 生产可靠性提升 |
| **NullClaw** | 11 (8 活跃, 3 关闭) | 0 | 无 | — | 🔴 **警示状态**：PR 活动为零，配置系统缺陷+Android 兼容性危机未响应 |
| **IronClaw** | 37 (30 活跃, 7 关闭) | 50 (43 待合并, 7 已合并/关闭) | 无 | PR 14% | 🔶 **架构重构期**：Engine V2 Epic 推进中，43 PR 积压+QA Bash 暴露集成质量缺口 |
| **LobsterAI** | 6 (6 活跃, 0 关闭) | 13 (0 待合并, 13 已合并/关闭) | 无 (2026.04.22 内容合并) | PR 100% | 🟢 **开发高效，社区响应滞后**：13/13 PR 合并但 Issues 零关闭，文档/积压处理不足 |
| **Moltis** | 9 (4 活跃, 5 关闭) | 12 (6 待合并, 6 已合并/关闭) | 无 | PR 50% | 🟢 **健康平衡**：100% 高严重度 Bug 当日修复，UI/UX 债务开始显现 |
| **CoPaw** | 50 (26 活跃, 24 关闭) | 50 (16 待合并, 34 已合并/关闭) | v1.1.3.post1 + v1.1.4-beta.1 | PR 68% | 🟢 **快速响应型**：Defender 问题 24h 热修复，但可靠性债务（假死、中断）累积 |
| **ZeptoClaw** | 19 (11 活跃, 8 关闭) | 17 (3 待合并, 14 已合并/关闭) | 无 | PR 82% | 🟢 **高效+战略聚焦**：安全基建三连发，"6MB 护城河"定位清晰，商业化前夜 |
| **ZeroClaw** | 50 (45 活跃, 5 关闭) | 50 (34 待合并, 16 已合并/关闭) | 无 (v0.7.4 冲刺中) | PR 32% | 🔶 **密集开发期**：Schema v3 批量迁移阻塞主干，Anthropic/Claude 4.7 兼容性断裂 |

> **活跃度分层**：OpenClaw、ZeroClaw、CoPaw、Hermes Agent 处于 **>100 条/日 超活跃带**；NanoBot、Moltis、ZeptoClaw 构成 **30-50 条/日 稳健带**；NullClaw、TinyClaw 落入 **<20 条/日 低活跃/停滞带**。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues + 500 PR / 24h，绝对量级第一 | ZeroClaw、CoPaw、Hermes Agent 同量级但分散于多个子系统；NanoClaw、ZeptoClaw 量级差 10 倍 |
| **技术路线** | **多提供商优先**：xAI、Azure OpenAI、OpenRouter、Google Generative AI 同日修复/发布 | ZeroClaw 侧重企业配置系统（Schema v3）；NanoClaw 聚焦容器安全+渠道矩阵；ZeptoClaw 押注边缘/体积约束 |
| **核心优势** | ① **多模态能力密度最高**（图像生成/理解/TTS/STT 全链路同日补齐）；② **企业部署适配最快**（Azure 私有化、私网代理、SSRF 策略 24h 响应）；③ **社区讨论深度**（#49971 代理身份验证 RFC 102 评论） | 对比：Hermes Agent 子代理编排更深；Moltis 本地 LLM KV 缓存优化更专；NanoClaw 安全审计更系统 |
| **结构性风险** | **版本质量波动大**：v2026.4.21 依赖打包 P0 回归 vs. v2026.4.22 能力爆发，"发布-救火"模式不可持续 | ZeroClaw 同样受困于 Schema v3 迁移阻塞；CoPaw 热修复机制更成熟但底层架构债务更深 |

**定位判断**：OpenClaw 是生态中 **"广度优先、速度驱动"** 的标杆——最快覆盖新提供商能力、最广泛的企业部署场景，但需向 **"深度+质量"** 转型以匹配其社区体量。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **实时语音/电话级对话** | OpenClaw (#7200, 22 评论, 👍23)、NanoBot (Issue #2152)、NanoClaw (#1879 PR) | xAI TTS/STT 发布验证需求真实性；Twilio/WebRTC 双向流式音频 | 🔥🔥🔥 |
| **Claude/Anthropic 兼容性断裂** | OpenClaw (#67888, Opus 4.7 adaptive thinking)、NanoBot (#3417, temperature 硬编码)、ZeroClaw (#6007, temperature 强制发送)、CoPaw | 模型供应商 API 变更监控机制缺失，"每次首回合 400 错误"成为共性痛点 | 🔥🔥🔥 |
| **安全可信/审计合规** | NanoClaw (7 项 CSO 审计)、ZeptoClaw (SHA-256 审计链+SSRF+SHA256 三连发)、ZeroClaw (多通道审批 #6010)、OpenClaw (#49971 DID/VC) | 从"功能可用"到"采购合规"的门槛跨越，hash-chain、权限隔离、重新认证成为标配 | 🔥🔥🔥 |
| **本地/边缘/离线部署** | ZeptoClaw (#539 Ollama/llama.cpp 回退, #541 Liquid AI)、CoPaw (#3759 Unsloth, #1427 Ollama/LMStudio)、Moltis (#855 KV 缓存优化)、ZeroClaw (#5962 Ollama 工具调用)、PicoClaw (#2496 Intel OpenVINO) | "仅支持云 LLM 的 Agent 不适合工厂/矿船/远程传感器"——场景驱动架构分化 | 🔥🔥🔥 |
| **MCP 生态完善** | Moltis (#851/#852 OAuth 重新认证, #840 MCP Skill)、ZeroClaw (WASM 桥 #5912)、OpenClaw、Hermes Agent (#3947 参数序列化) | 工具描述截断、OAuth 过期、Zod 验证失败、客户端假死——MCP 从"协议标准"到"工程可靠"的 gap | 🔥🔥🔥 |
| **配置系统硬化/迁移** | ZeroClaw (Schema v3 #5947)、ZeptoClaw (#530 配置版本化)、NanoClaw (v1→v2 迁移 #1931)、OpenClaw (v2026.4.21 doctor --fix 破坏配置) | 快速迭代下的配置向后兼容性危机，"升级即崩溃"反复出现 | 🔥🔥 |
| **多平台桌面客户端** | OpenClaw (#75, 👍71, 113 天)、Hermes Agent (TUI v2 功能补齐 #12130)、CoPaw (#3555 Windows 启动挂起)、LobsterAI (#15 Electron 40 崩溃) | macOS 优先→Linux/Windows parity 的公平性诉求，与平台碎片化成本的张力 | 🔥🔥 |
| **记忆/上下文治理** | NanoBot (4 PR 根治 history.jsonl 膨胀)、OpenClaw (#60213 压缩丢失会话)、ZeroClaw (#5844 记忆权重过高)、IronClaw (Engine V2 capability/action 分离) | Agent 长期运行后的状态膨胀、token 失控、上下文污染——Agent 架构的核心挑战 | 🔥🔥 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 多提供商覆盖、多模态能力、企业部署适配 | 技术团队/企业开发者 | Node.js 扩展生态，npm 依赖模型（今日暴露打包缺陷） |
| **NanoBot** | Agent 内存治理、多通道 IM（WhatsApp/飞书/Telegram） | 中小企业/团队自动化 | Python Gateway-Agent 耦合架构，定时任务需重启 |
| **Hermes Agent** | 子代理编排、React/Ink TUI、插件系统 | 开发者/高级个人用户 | Rust+TypeScript 混合，子代理工具集解耦架构领先 |
| **PicoClaw** | 嵌入式/边缘部署（Raspberry Pi、NXP i.MX93） | IoT/硬件开发者 | 轻量化设计，但审查瓶颈阻碍迭代 |
| **NanoClaw** | 容器安全、Signal/隐私渠道、Apple Silicon 原生 | 安全敏感企业/隐私用户 | Docker 沙箱+渠道隔离，CSO 审计驱动安全基线 |
| **NullClaw** | Zig 构建、极简依赖 | 系统编程爱好者 | Zig 语言实验性项目，当前处于停滞 |
| **IronClaw** | 托管平台、Engine V2 架构、WASM 插件隔离 | SaaS 提供商/平台开发者 | 重度架构重构期，PostgreSQL 后端+状态收敛设计 |
| **LobsterAI** | 多机器人 IM（Discord/Telegram/WeCom）、LM Studio | 中国企业/微信生态用户 | Electron+RPC 架构，版本发布透明度不足 |
| **Moltis** | 本地 LLM 优化、MCP 生态、Signal 渠道 | 欧洲隐私合规用户/本地部署者 | Rust 核心，KV 缓存优化+schema 规范化精细 |
| **CoPaw** | Windows 桌面端、安全策略、Unsloth 本地模型 | 中文用户/Windows 企业环境 | Python 全栈，Defender 兼容性+conda-unpack 问题突出 |
| **ZeptoClaw** | 极致体积（6MB）、边缘/离线、可信执行 | 工业/IoT/投资者 | Rust 全栈，"体积预算门控"写入 CI，商业化前夜 |
| **ZeroClaw** | 企业配置系统、多通道审批、PostgreSQL 共享状态 | 企业 DevOps/平台运营 | Schema v3 配置迁移阻塞，Tauri 桌面端不稳定 |

**架构路线分化**：
- **云原生/多提供商**：OpenClaw、ZeroClaw
- **边缘/离线/体积约束**：ZeptoClaw、PicoClaw、CoPaw（部分）
- **安全/合规/审计**：NanoClaw、ZeptoClaw
- **本地 LLM 优先**：Moltis、CoPaw、NanoBot
- **平台/托管**：IronClaw、LobsterAI

---

## 6. 社区热度与成熟度

| 阶段 | 项目 | 特征 |
|:---|:---|:---|
| **🔥 快速迭代/功能爆发期** | OpenClaw、Hermes Agent、ZeroClaw | 版本发布密集、新能力快速覆盖、社区吞吐量峰值，但质量回归风险高（OpenClaw v2026.4.21、ZeroClaw Schema v3 阻塞、Hermes TUI v2 功能缺口） |
| **🛠 质量巩固/架构重构期** | NanoBot、NanoClaw、Moltis、ZeptoClaw | 核心问题根治（内存治理、安全审计、KV 缓存、可信执行）、合并率高、响应速度快，逐步从"可用"走向"可靠" |
| **⚠️ 瓶颈/债务累积期** | PicoClaw、IronClaw、CoPaw | PicoClaw 审查瓶颈（39 PR 待审）；IronClaw 架构重构与 QA Bash 并行，43 PR 积压；CoPaw 可靠性债务（假死、中断）未纳入阻塞性 issue |
| **🔴 停滞/流失风险期** | NullClaw、TinyClaw | NullClaw PR 活动为零、Android 兼容性 48 天未响应；TinyClaw 完全无活动 |

**成熟度跃迁信号**：ZeptoClaw 提出 P1-critical 二进制体积预算门控（#537），NanoClaw 完成 CSO 审计闭环，标志着 **"功能优先"向"约束驱动"的范式转移**——这是开源项目从社区玩具走向商业产品的关键分水岭。

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **① "可信执行"成为 Agent 基础设施标配** | ZeptoClaw SHA-256 审计链、NanoClaw 容器沙箱加固、ZeroClaw 多通道审批、OpenClaw DID/VC RFC | **安全不再是可选功能**。企业采购中，hash-chain、权限隔离、重新认证机制将成为 RFP 标准条款，建议早期纳入架构设计而非后期补丁 |
| **② 模型供应商 API 变更监控成为运维刚需** | OpenClaw/NanoBot/ZeroClaw 同日 Claude 4.7 兼容性断裂 | **"适配层"需要自动化**。temperature 弃用、adaptive thinking、schema 拒绝等变更需建立供应商变更订阅+自动化测试矩阵，避免"每次首回合 400"的重复救火 |
| **③ 边缘/离线叙事从"极客选项"变为"场景刚需"** | ZeptoClaw "工厂/矿船/远程传感器"、CoPaw RK3318 ARM 盒子、PicoClaw NXP i.MX93 | **云-边-端梯度架构**。建议 Agent 框架设计时预留本地模型回退路径（Ollama/llama.cpp/Liquid AI），而非硬编码云端依赖 |
| **④ MCP 生态进入"工程化深水区"** | Moltis OAuth 重新认证、ZeroClaw WASM 桥、Hermes 参数序列化、CoPaw TaskGroup 假死 | **协议标准 ≠ 生产可靠**。MCP 客户端需投入异常传播、超时治理、状态隔离等工程细节，建议参考 Moltis 的"技能不污染核心"架构原则 |
| **⑤ 配置系统成为规模化瓶颈** | ZeroClaw Schema v3 批量迁移、ZeptoClaw 配置版本化、OpenClaw v2026.4.21 doctor --fix 破坏配置、NanoClaw v1→v2 迁移 | **"升级即崩溃"反模式**。建议引入配置 schema 版本化+自动迁移测试+降级路径，将配置变更纳入与代码变更同等严格的门禁 |
| **⑥ 实时语音从"演示功能"走向"电话级可靠性"** | OpenClaw xAI TTS/STT 发布、#7200 需求验证、NanoClaw 语音转写 V2 PR | **多模态交互的下一个主战场**。建议关注 WebRTC 双向流式、DTMF 信令、回声消除等电信级工程，而非仅封装 API |
| **⑦ 社区治理模式分化：速度 vs 深度** | OpenClaw 500/500 吞吐量但质量波动；ZeptoClaw 82% 合并率+"6MB 门控"；PicoClaw 0% Issue 关闭率 | **规模不等于健康**。建议建立与社区体量匹配的审查带宽（如 ZeptoClaw 的 CI 门控自动化），避免"高活跃+高积压"的虚假繁荣 |

---

*分析基于 2026-04-24 各项目 GitHub 公开数据，适合技术决策者评估项目健康度、开发者选择技术栈参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-24

## 1. 今日速览

NanoBot 今日呈现**高强度迭代态势**：24小时内 14 条 Issues 更新（9 关闭/5 活跃）、20 条 PR 更新（9 已合并关闭/11 待合并），无新版本发布。核心开发团队聚焦**Agent 内存治理**与**多通道体验优化**，连续合并 4 个关联 PR 根治 `history.jsonl` 膨胀顽疾；社区侧 WhatsApp、飞书、Telegram 等企业级通道功能持续补强，但 v0.1.5.post2 引入的内存回归与 Claude Opus 4.7 兼容性问题成为新隐患。整体项目健康度**良好**，但需关注质量回归风险。

---

## 2. 版本发布

**无新版本发布**（最新版本仍为 v0.1.5.post2）

> ⚠️ 值得注意的是，v0.1.5.post2 正成为用户投诉焦点：Issue #3410 报告该版本内存占用从 ~200MB 飙升至 ~600MB，Issue #3406 报告 WhatsApp 登录失效，建议维护者评估是否需要紧急补丁。

---

## 3. 项目进展

### 🔧 Agent 内存治理系列 PR 全部合并（核心里程碑）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#3412** | chengyongru | **主修复**：移除 `_cap_consolidation_boundary` 60 消息上限导致的 consolidation 死锁；`raw_archive` 不再污染 `history.jsonl`；新增 32K 字符截断保护 | [HKUDS/nanobot#3412](https://github.com/HKUDS/nanobot/pull/3412) |
| **#3413** | chengyongru | 上述修复的 `nightly` 分支 cherry-pick | [HKUDS/nanobot#3413](https://github.com/HKUDS/nanobot/pull/3413) |
| **#3414** | chengyongru | `context.py` 独立防护：系统提示词中"Recent History"截断至 32K 字符 | [HKUDS/nanobot#3414](https://github.com/HKUDS/nanobot/pull/3414) |
| **#3415** | Re-bin | **边界加固**：封堵 `archive()` 成功路径、错误路径、summary 写入等 4 处相邻泄漏点，防止 LLM 异常输出重新引发污染 | [HKUDS/nanobot#3415](https://github.com/HKUDS/nanobot/pull/3415) |

**技术意义**：这一系列 PR 彻底解决了长期存在的 Agent 长期运行后上下文膨胀、系统提示词被污染、token 消耗失控的根因，是 Agent 架构稳定性的关键升级。

### 📨 邮件自回复循环修复

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#3234** | mohamed-elkholy95 | 修复 Issue #3215：SMTP/IMAP 同账户时 bot 自发自收导致无限邮件循环，通过匹配 `from_address`/`smtp_username`/`imap_username` 跳过自身邮件 | [HKUDS/nanobot#3234](https://github.com/HKUDS/nanobot/pull/3234) |

### 💬 Telegram 交互增强

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#3398** | gthieleb | 新增内联键盘按钮支持（默认关闭），按钮点击通过 `CallbackQueryHandler` 回传为用户消息，使用 `@tool_parameters` DSL 定义按钮模式 | [HKUDS/nanobot#3398](https://github.com/HKUDS/nanobot/pull/3398) |

---

## 4. 社区热点

### 讨论最活跃：定时任务机制设计争议
- **Issue #2892** [CLOSED] | 15 评论 | [链接](https://github.com/HKUDS/nanobot/issues/2892)
- **核心矛盾**：用户 `yg1031` 质疑"Agent 创建定时任务后必须重启 Gateway 才能生效"的设计反直觉。维护团队关闭 Issue 但未明确回应设计 rationale，社区存在**隐性不满**——该模式对热更新场景极不友好，可能阻碍生产环境采用。

### 技能系统生态张力
- **Issue #2049** [CLOSED] | 13 评论 | [链接](https://github.com/HKUDS/nanobot/issues/2049)
- **Issue #1932** [OPEN] | 7 评论, `good first issue` | [链接](https://github.com/HKUDS/nanobot/issues/1932)
- **诉求分析**：技能创建能力在版本升级后"静默消失"（#2049），且现有技能仅支持删除不支持禁用（#1932），反映**技能生命周期管理**仍是生态短板。PR #3403 的 `project-manager` skill 尝试以项目维度隔离上下文，可视为对技能管理复杂性的间接回应。

### 配置格式现代化辩论
- **Issue #3402** [CLOSED] | 7 评论 | [链接](https://github.com/HKUDS/nanobot/issues/3402)
- **信号**：用户 `cschur` 推动 JSON→TOML 迁移，强调人类可编辑性（注释支持、无尾随逗号错误、更宽松语法）。Issue 被快速关闭，可能意味着维护团队**短期内无意重构配置层**，但社区对开发者体验的诉求持续累积。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-回归** | [#3410](https://github.com/HKUDS/nanobot/issues/3410) | v0.1.5.post2 内存占用 3 倍膨胀（~200MB→~600MB），疑似新 "dream" 功能导致 | **OPEN**，0 评论 | ❌ 无 |
| 🔴 **P0-兼容性** | [#3417](https://github.com/HKUDS/nanobot/issues/3417) | `anthropic_provider` 硬编码 `temperature=1.0`，Claude Opus 4.7 已弃用该参数，返回 400 错误 | **OPEN**，0 评论 | ❌ 无 |
| 🟡 **P1-功能** | [#3406](https://github.com/HKUDS/nanobot/issues/3406) | WhatsApp 升级 v0.1.5.post2 后登录失败，报 "Invalid token" (4003)，清除凭证无效 | **CLOSED** | 疑似版本回滚或配置修复，无明确 PR |
| 🟡 **P1-功能** | [#3390](https://github.com/HKUDS/nanobot/issues/3390) | Tool Call 返回 "Sorry, I encountered an error"，清理工作空间后无响应，后续调用全部失败 | **OPEN**，1 评论 | ❌ 无 |
| 🟢 **P2-体验** | [#3377](https://github.com/HKUDS/nanobot/issues/3377) | 多子 Agent 并行任务导致主 Agent 重复回复 | **CLOSED** | 无明确关联 PR，可能通过内存治理系列间接缓解 |

> **风险评估**：两个 P0 问题均指向 **v0.1.5.post2 质量管控缺口**——新功能（dream）引入性能回归、模型适配层未跟进供应商 API 变更。建议维护者优先处理 #3417（单点修复成本低）并调查 #3410 根因。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **OpenRouter 免费模型优选** | PR #3416 [待合并](https://github.com/HKUDS/nanobot/pull/3416) | 代码就绪 | ⭐⭐⭐⭐⭐ 高，社区呼声明确 |
| **OpenTelemetry 可观测性** | PR #3173 [待合并](https://github.com/HKUDS/nanobot/pull/3173) | 代码就绪，支持 Langfuse/LangSmith | ⭐⭐⭐⭐☆ 高，企业级需求 |
| **MGP 跨会话记忆治理** | PR #3408 [待合并](https://github.com/HKUDS/nanobot/pull/3408) | 实验性 sidecar 架构 | ⭐⭐⭐☆☆ 中，架构激进需评估 |
| **模型预设快速切换** | PR #3358 [待合并](https://github.com/HKUDS/nanobot/pull/3358) | 代码就绪 | ⭐⭐⭐⭐☆ 高，提升多模型工作流效率 |
| **Dream 身份文件编辑控制** | PR #3400 [待合并](https://github.com/HKUDS/nanobot/pull/3400) | 代码就绪，默认允许编辑 | ⭐⭐⭐⭐☆ 高，回应 #3410 类担忧 |
| **飞书 LaTeX 公式渲染** | PR #3411 [待合并](https://github.com/HKUDS/nanobot/pull/3411) | 依赖 CodeCogs 外部服务 | ⭐⭐⭐☆☆ 中，网络延迟隐患 |
| **Embeddings API 支持** | PR #3401 [待合并](https://github.com/HKUDS/nanobot/pull/3401) | 代码就绪，含测试 | ⭐⭐⭐⭐☆ 高，RAG 场景基础设施 |
| **WhatsApp 原生语音消息** | Issue #2152 [OPEN](https://github.com/HKUDS/nanobot/issues/2152) | 社区 skill 存在，需桥接补丁 | ⭐⭐☆☆☆ 低，维护团队未响应 |
| **技能禁用/启用切换** | Issue #1932 [OPEN](https://github.com/HKUDS/nanobot/issues/1932) | 标记 `good first issue` | ⭐⭐⭐☆☆ 中，入门级贡献机会 |

---

## 7. 用户反馈摘要

### 😤 痛点
- **升级焦虑**："升级最新版后技能创建能力消失"（#2049）、"v0.1.5.post2 内存暴涨 3 倍"（#3410）——版本升级缺乏兼容性保障和变更日志透明度
- **Gateway-Agent 耦合**：定时任务必须重启 Gateway 生效（#2892），分布式部署场景下成为阻塞点
- **桥接脆弱性**：WhatsApp 每次更新需手动补丁（#2152、#3406），第三方通道维护成本高

### 😊 满意点
- WebUI 体验获认可："clean and user-friendly"（#3407），文件上传功能请求本身即是对产品方向的肯定
- 社区贡献活跃：Fish Audio 语音集成（#2152）、Olostep 搜索后端（#3405）等第三方扩展涌现

### 🎯 使用场景洞察
- **企业 IM 集成**：飞书 LaTeX（#3411）、Telegram 内联键盘（#3398）、WhatsApp 语音（#2152）——用户正在将 NanoBot 从个人助手推向**团队协作基础设施**
- **长期项目连续性**：`project-manager` skill（#3403）和 MGP 集成（#3408）反映用户对**跨会话状态保持**的强需求，与 Agent 无状态本质形成架构张力

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|:---|
| **Issue** | [#2152](https://github.com/HKUDS/nanobot/issues/2152) WhatsApp 原生语音支持 | 2026-03-17 | 2026-04-23 | 38 天无维护者回应，社区已自行维护补丁，存在生态分裂风险 |
| **Issue** | [#1932](https://github.com/HKUDS/nanobot/issues/1932) 技能禁用功能 | 2026-03-12 | 2026-04-23 | 标记 `good first issue` 但 43 天无 PR，入门级贡献者可能流失 |
| **PR** | [#3173](https://github.com/HKUDS/nanobot/pull/3173) OpenTelemetry 可观测性 | 2026-04-15 | 2026-04-23 | 9 天待审，企业用户关键需求，延迟可能转向竞品 |
| **PR** | [#3303](https://github.com/HKUDS/nanobot/pull/3303) Spawn 状态/取消工具 | 2026-04-19 | 2026-04-23 | 5 天待审，子 Agent 治理基础设施，与今日内存治理主题高度相关 |
| **PR** | [#3268](https://github.com/HKUDS/nanobot/pull/3268) 飞书 reactEmoji 动态更新 | 2026-04-18 | 2026-04-23 | 6 天待审，通道配置安全模型细化，影响企业部署灵活性 |

---

> **分析师备注**：建议维护团队设立 **v0.1.6 质量修复里程碑**，优先解决 #3410（内存回归）和 #3417（Claude 兼容性），并发布热更新或降级指南以恢复用户信任。长期需建立**版本升级兼容性测试矩阵**和**模型供应商 API 变更监控机制**，避免类似回归重复发生。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-24

## 1. 今日速览

Hermes Agent 今日呈现**高强度开发态势**：24小时内 50 个 Issues 和 50 个 PR 更新，社区活跃度极高。v0.11.0 "The Interface" 版本昨日发布，标志着 CLI 完成 React/Ink 全面重写，是项目里程碑式进展。PR 合并/关闭率达 30%（15/50），Issue 关闭率仅 12%（6/50），大量新 Bug 随新版本涌入，稳定性压力显著。核心贡献者 **Fizzilith** 单日密集提交 4 个 PR，主导子代理（delegation）架构升级；**Tranquil-Flow** 单日报告 4 个新 Bug，工具链质量成为焦点。

---

## 2. 版本发布

### [v0.11.0 "The Interface"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.23) ⭐ 重大版本

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-23 |
| **代码量** | 1,556 commits · 761 merged PRs · 1,314 files changed · 224,174 insertions |
| **社区贡献** | 29 位核心贡献者（含 co-authors 290 人）|

**核心变更：**
- **React/Ink 交互式 CLI 全面重写** — 取代旧版 TUI 架构，为后续插件化界面奠定基础
- 官方摘要截断为 "a plugg..."，暗示插件系统（plugin system）可能是未完成公开的新能力

**迁移注意事项：**
- TUI v2 与 v1 存在功能差距（见 [#12130](https://github.com/NousResearch/hermes-agent/issues/12130)）：缺失 25/48 个 slash 命令、`@file:`/`@diff`/`@git:N` 等上下文引用、Skills Hub/Tools Config/Cron/Rollback/Snapshot/Plugins/Insights/Agents/Browser/Platform 等面板
- 使用 `--tui` 的用户需评估功能回退影响

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（15 条中的核心项）

| PR | 作者 | 进展 | 影响 |
|:---|:---|:---|:---|
| [#9183](https://github.com/NousResearch/hermes-agent/pull/9183) | MestreY0d4-Uninter | **上下文增强套件**：search 预览行、多语言文件提示、压缩检查点 | 减少工具调用轮次，保护长对话状态 |
| [#14754](https://github.com/NousResearch/hermes-agent/pull/14754) | Fizzilith | **HTTP API 暴露子代理注册表**：`GET /api/spawns` | 运维可观测性提升，支持外部监控 |
| [#14747](https://github.com/NousResearch/hermes-agent/pull/14747) | Fizzilith | **子代理工具集解耦**：子代理可拥有父代理未启用的工具 | 突破编排器模式瓶颈，架构灵活性质变 |
| [#14677](https://github.com/NousResearch/hermes-agent/pull/14677) | Fizzilith | **插件工具上下文注入**：通过 contextvar 暴露当前 agent | 插件生态基础设施完善 |
| [#14827](https://github.com/NousResearch/hermes-agent/pull/14827) | Fizzilith | **子代理个性化 prompt**：`system_prompt_prepend` 支持 | 多角色编排场景就绪 |
| [#10358](https://github.com/NousResearch/hermes-agent/pull/10358) | quant9527 | **工具描述自动截断**：适配 Moonshot/Kimi 等大小限制提供商 | 兼容性修复，生产稳定性 |
| [#14724](https://github.com/NousResearch/hermes-agent/issues/14724) | steezkelly | **关闭关键 Bug**：`delegate_task` 在 web+长上下文+高迭代时挂起 | 解除子代理死锁风险 |

**架构演进判断**：Fizzilith 的 4 个 PR 形成完整叙事——子代理系统正从"安全但受限"走向"灵活可编排"，预计成为 v0.12 的核心竞争力。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论 | 反应 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 🔥1 | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) Claude 订阅认证失效 | 22 | 👍15 | **付费用户核心痛点**：Anthropic 额度耗尽后无法恢复，即使重新登录/重启，商务场景阻塞 |
| 2 | [#3777](https://github.com/NousResearch/hermes-agent/issues/3777) RFC 2544 地址误分类为私有 | 5 | 0 | 代理软件（Clash/Mihomo/Sing-box）TUN 模式用户群体庞大，SSRF 防护过度 |
| 3 | [#3947](https://github.com/NousResearch/hermes-agent/issues/3947) MCP 参数类型序列化错误 | 3 | 0 | **MCP 生态兼容性**：Zod 验证失败阻断 number/array 类型工具调用 |
| 4 | [#13829](https://github.com/NousResearch/hermes-agent/issues/13829) MessageDeduplicator TTL 永不过期 | 3 | 0 | 消息去重机制存在内存泄漏隐患，高并发场景风险 |
| 5 | [#12153](https://github.com/NousResearch/hermes-agent/issues/12153) 自定义提供商模型验证失败 | 3 | 0 | 企业私有化部署障碍：`/v1/models` 不可用即无法切换模型 |

**诉求分析**：热点议题呈现"企业级部署"与"开发者工具链"双主线——付费认证、私有部署、代理兼容、MCP 标准，均指向从个人玩具向生产基础设施的跃迁压力。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | 数量 | 代表 Issue | 状态 | 风险说明 |
|:---|:---:|:---|:---|:---|
| **P0 紧急** | 1 | [#12136](https://github.com/NousResearch/hermes-agent/issues/12136) Discord 跨服务器 DM 绕过（CVSS 8.1） | 🟡 开放 | **安全漏洞**：`DISCORD_ALLOWED_ROLES` 未按 guild 隔离，DM 中角色权限全局生效 |
| **P1 高** | 6 | [#12153](https://github.com/NousResearch/hermes-agent/issues/12153) 自定义提供商验证失败 | 🟡 开放 | 企业部署阻断 |
| | | [#12146](https://github.com/NousResearch/hermes-agent/issues/12146) 配置 `model.provider=custom` 回退 openrouter | 🟡 开放 | 配置系统优先级逻辑错误 |
| | | [#12173](https://github.com/NousResearch/hermes-agent/issues/12173) `/resume` 跨用户会话解析 | 🟡 开放 | **数据隔离漏洞**：会话标题全局可见 |
| | | [#13653](https://github.com/NousResearch/hermes-agent/issues/13653) Cron 任务全失败（Gemini/OpenRouter） | 🟡 开放 | 定时任务核心功能不可用 |
| | | [#12131](https://github.com/NousResearch/hermes-agent/issues/12131) 上下文压缩失败丢失永久上下文 | 🟡 开放 | 长对话数据丢失 |
| | | [#14782](https://github.com/NousResearch/hermes-agent/issues/14782) JSONDecodeError 绕过重试逻辑 | 🟡 开放 | 瞬态故障变为硬失败 |
| | | [#14784](https://github.com/NousResearch/hermes-agent/issues/14784) CamelCase/`_tool` 后缀工具名识别失败 | 🟡 开放 | 模型输出格式兼容性 |
| **P2 中** | 8+ | [#3777](https://github.com/NousResearch/hermes-agent/issues/3777) 代理软件 IP 范围误封 | 🟡 开放 | 中国大陆/开发者群体影响大 |
| | | [#12154](https://github.com/NousResearch/hermes-agent/issues/12154) 微信 asyncio.timeout 上下文错误 | 🟡 开放 | 平台集成稳定性 |
| | | [#7142](https://github.com/NousResearch/hermes-agent/issues/7142) cron `repeat='once'` 类型错误 | 🟢 **有修复 PR** | 已测试修复待合并 |
| | | [#14783](https://github.com/NousResearch/hermes-agent/issues/14783) browser_tool 清理竞态 TypeError | 🟡 开放 | 浏览器自动化崩溃 |
| | | [#14744](https://github.com/NousResearch/hermes-agent/issues/14744) Ollama Cloud 视觉模型回退非视觉 | 🟡 开放 | 本地部署视觉能力不可用 |
| | | [#14486](https://github.com/NousResearch/hermes-agent/issues/14486) WhatsApp LID 格式迁移 | 🟡 开放 | 平台 API 变更适配 |

**Fix PR 覆盖情况**：P1 级别 6 个 Bug 中 **0 个有明确修复 PR**，修复响应滞后；P2 级别仅 [#7142](https://github.com/NousResearch/hermes-agent/issues/7142) 有测试通过的修复方案。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **here.now 静态托管 Skill** | [#378](https://github.com/NousResearch/hermes-agent/issues/378) | ⭐⭐⭐ 高 | teknium1（核心维护者）自提，设计完整，Agent 内容发布基础设施 |
| **Windows WSL 自动启动** | [#10014](https://github.com/NousResearch/hermes-agent/issues/10014) | ⭐⭐⭐ 高 | 用户痛点明确，Windows 生态扩张关键 |
| **TUI v2 功能补齐** | [#12130](https://github.com/NousResearch/hermes-agent/issues/12130) | ⭐⭐⭐ **已纳入** | v0.11.0 发布即启动，Teknium1 主导 |
| **工具输出截断可配置** | [#14824](https://github.com/NousResearch/hermes-agent/pull/14824) | ⭐⭐⭐ **PR 已开** | teknium1 直接提交，移植自 OpenCode 成熟方案 |
| **Anthropic 1h 提示缓存** | [#14812](https://github.com/NousResearch/hermes-agent/pull/14812) | ⭐⭐⭐ **PR 已开** | 基础设施已支持，仅缺暴露接口 |
| **CUA 通用计算机使用** | [#14817](https://github.com/NousResearch/hermes-agent/pull/14817) | ⭐⭐⭐ **PR 已开** | 重磅功能：任何模型驱动 macOS 桌面，无焦点窃取 |
| **API 用量透明度** | [#14823](https://github.com/NousResearch/hermes-agent/pull/14823) | ⭐⭐⭐ **PR 已开** | 提示缓存 token、实际模型暴露 |
| **委派就绪诊断工具** | [#14297](https://github.com/NousResearch/hermes-agent/pull/14297) | ⭐⭐☆ 中 | 生态工具，NplusM420 推进中 |

**路线图信号**：v0.12 大概率聚焦 **"可观测性 + 成本优化 + 跨模型计算机使用"**——API 用量透明、缓存 TTL 控制、CUA 后端构成完整的企业降本增效叙事。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---:|
| "Claude 订阅明明有额度，Hermes 却持续报 'out of extra usage'，重启重装均无效" | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | 😤 愤怒 |
| "公司内网 Ollama，配了 custom provider 还是走 openrouter，配置文件像摆设" | [#12146](https://github.com/NousResearch/hermes-agent/issues/12146) | 😤 愤怒 |
| "WSL 里装完每次开机手动起，Task Scheduler 配了也不稳" | [#10014](https://github.com/NousResearch/hermes-agent/issues/10014) | 😩 疲惫 |
| "TUI v2 漂亮但 slash 命令少一半，@文件引用全没了，被迫切回 v1" | [#12130](https://github.com/NousResearch/hermes-agent/issues/12130) | 😕 失望 |
| "Cron 定时任务完全跑不起来，普通聊天却正常" | [#13653](https://github.com/NousResearch/hermes-agent/issues/13653) | 🤷 困惑 |

### 满意点

- v0.11.0 界面"终于现代化了"（隐含于 Teknium1 的 TUI v2 推进）
- 子代理系统架构持续进化，"编排复杂工作流成为可能"（Fizzilith 系列 PR）

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue | 创建时间 | 天数 | 风险 |
|:---|:---|:---:|:---|
| [#12136](https://github.com/NousResearch/hermes-agent/issues/12136) Discord CVSS 8.1 安全漏洞 | 2026-04-18 | 6 | **安全事件升级风险**，0xyg3n（原功能作者）自报，无修复 PR |
| [#12173](https://github.com/NousResearch/hermes-agent/issues/12173) `/resume` 跨用户会话 | 2026-04-18 | 6 | **数据隐私合规风险**，多租户场景致命 |
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) Claude 认证失效 | 2026-04-09 | 15 | 付费用户流失，22 评论未解决即关闭（需验证是否真修复） |
| [#378](https://github.com/NousResearch/hermes-agent/issues/378) here.now Skill | 2026-03-04 | 51 | 核心维护者自提长期搁置，生态扩展机会成本 |
| [#3777](https://github.com/NousResearch/hermes-agent/issues/3777) 代理软件兼容 | 2026-03-29 | 26 | 中国/开发者市场技术壁垒 |

### PR 侧积压

| PR | 创建时间 | 状态 | 阻塞原因 |
|:---|:---|:---|:---|
| [#12098](https://github.com/NousResearch/hermes-agent/pull/12098) 模型/提供商解析后回填 | 2026-04-18 | 开放 | P1 Bug 修复，6 天未合并 |
| [#12095](https://github.com/NousResearch/hermes-agent/pull/12095) ChatGPT Codex 流超时 | 2026-04-18 | 开放 | OpenAI 兼容性，6 天未合并 |

---

**日报生成时间**：2026-04-24  
**数据截止**：GitHub 活动 24h 滚动窗口

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-24

## 1. 今日速览

PicoClaw 今日呈现**高度活跃的开发态势**：24小时内产生36条活跃Issues（零关闭）和45条PR更新（39条待合并、6条已处理），社区讨论密度显著。项目发布了v0.2.7 nightly构建，但核心功能PR如Bedrock流式传输、MCP CLI工具集、多模态音频输入等集中涌现，显示团队正加速向v0.3.0里程碑推进。**风险提示**：待合并PR积压达39条，代码审查瓶颈可能影响发布节奏；Issues零关闭率表明问题消化速度滞后于产生速度。

---

## 2. 版本发布

### Nightly Build: v0.2.7-nightly.20260423.68ceb54b
- **发布类型**：自动化夜间构建（**不稳定，生产环境慎用**）
- **变更范围**：自v0.2.7至main分支的累积更新
- **完整对比**：[v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)
- **迁移注意**：无官方Release Notes，需手动审查commit历史；建议等待正式v0.2.7补丁或v0.3.0版本

---

## 3. 项目进展

### 已合并/关闭的关键PR（6条中的代表性进展）

| PR | 作者 | 核心贡献 | 项目意义 |
|:---|:---|:---|:---|
| [#2640](https://github.com/sipeed/picoclaw/pull/2640) | dependabot[bot] | AWS Bedrock Runtime SDK 1.50.4→1.50.5 | 云基础设施依赖维护 |
| ~~其他4条~~ | — | 依赖升级（TypeScript 6.0.3、vite 8.0.10等） | 前端技术栈现代化 |

### 高价值待合并PR（推动项目边界）

| PR | 作者 | 功能突破 | 状态 |
|:---|:---|:---|:---|
| [#2645](https://github.com/sipeed/picoclaw/pull/2645) | loafoe | **Bedrock流式传输实现**：AWS ConverseStream API实时token流 | 🔥 待审 |
| [#2641](https://github.com/sipeed/picoclaw/pull/2641) | afjcjsbx | **MCP CLI全生命周期管理**：add/show/list/remove/test/edit命令 | 🔥 待审 |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | webhtb | **原生音频输入多模态**：Gemini 1.5等模型音频直接编码 | 🔥 待审 |
| [#2496](https://github.com/sipeed/picoclaw/pull/2496) | JohnLeFeng | **Intel OpenVINO本地推理**：CPU/GPU/NPU全平台覆盖 | 🔥 待审 |
| [#2644](https://github.com/sipeed/picoclaw/pull/2644) | afjcjsbx | 工具反馈消息模式分离（修复Telegram等频道回归） | 🔥 待审 |

**整体评估**：今日PR矩阵覆盖**云提供商扩展**（Bedrock、OpenVINO）、**开发者体验**（MCP CLI）、**多模态能力**（音频输入）、**平台稳定性**（Docker PID处理、OGG解码修复），技术纵深显著。

---

## 4. 社区热点

### 讨论最活跃的Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 深层信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#2408](https://github.com/sipeed/picoclaw/issues/2408) LLM Account Stacking (Cartridge-Belt) | 9 | API key轮转机制应对限流/配额 | **企业级可靠性刚需**：用户愿为同一服务商配置多账户，但缺乏自动化failover |
| 2 | [#2225](https://github.com/sipeed/picoclaw/issues/2225) Ollama cloud credentials | 8 | 云端Ollama实例的认证支持 | **混合部署趋势**：本地+云端Ollama并存，认证模型需统一 |
| 3 | [#2468](https://github.com/sipeed/picoclaw/issues/2468) 定时任务执行失败 | 6 | `cron`工具被限制为"internal channels" | **权限模型过度收紧**：安全策略误伤合法自动化场景 |
| 4 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) 每小时任务触发channel error | 5 | 高频定时任务导致Telegram频道异常 | **长周期任务状态管理缺陷**：Raspberry Pi等低功耗设备上的稳定性问题 |
| 5 | [#2377](https://github.com/sipeed/picoclaw/issues/2377) exec/logs终端控制字符安全风险 | 5 | ANSI序列、Unicode双向字符的过滤 | **供应链安全**：MCP工具输出可能包含终端注入攻击 |

**社区情绪**：Provider生态扩展（Ollama、硅基流动、双重HEAD认证）和定时任务可靠性是最高频痛点，用户正在将PicoClaw推向更复杂的生产场景。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 现象 | 影响范围 | Fix PR状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2602](https://github.com/sipeed/picoclaw/issues/2602) OAuth认证错误 | OpenAI/Antigravity OAuth授权失败 | 多提供商认证流程 | ❌ 无 |
| 🔴 **高** | [#2540](https://github.com/sipeed/picoclaw/issues/2540) WhatsApp LID格式静默丢消息 | 迁移至Linked-Device ID的账户消息被drop | whatsapp_native频道 | ❌ 无 |
| 🔴 **高** | [#2483](https://github.com/sipeed/picoclaw/issues/2483) Gateway启动按钮失效 | Web UI核心功能无响应 | 所有Web用户 | ❌ 无 |
| 🟡 **中** | [#2468](https://github.com/sipeed/picoclaw/issues/2468) 定时任务执行受限 | `scheduling command execution is restricted to internal channels` | cron工具用户 | ❌ 无 |
| 🟡 **中** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) list_dir Windows路径分隔符错误 | `invalid argument`因反斜杠传入`os.Root` | Windows用户 | ❌ 无 |
| 🟡 **中** | [#2519](https://github.com/sipeed/picoclaw/issues/2519) workspace外目录读写 | 系统频繁尝试访问/tmp等非工作区路径 | 安全敏感部署 | ❌ 无 |
| 🟡 **中** | [#2446](https://github.com/sipeed/picoclaw/issues/2446) 多频道消息回显 | 跨频道任务pending时消息被错误回显 | 多频道配置用户 | ❌ 无 |
| 🟡 **中** | [#2447](https://github.com/sipeed/picoclaw/issues/2447) 仅处理最新消息 | 连续消息丢失（与#2464飞书问题同源） | 所有频道 | ❌ 无 |
| 🟢 **低** | [#2280](https://github.com/sipeed/picoclaw/issues/2280) 硅基流动API启动失败+QQ缺AppSecret | 服务商兼容配置缺失 | 特定Provider/频道组合 | ❌ 无 |

**回归风险**：[#2644](https://github.com/sipeed/picoclaw/pull/2644) 明确提到"animated tool feedback unification work"引入的回归，表明近期UI重构存在质量波动。

---

## 6. 功能请求与路线图信号

### 高可行性（已有PR或强技术匹配）

| 需求 | Issue | 匹配PR | 纳入概率 |
|:---|:---|:---|:---:|
| Bedrock流式传输 | — | [#2645](https://github.com/sipeed/picoclaw/pull/2645) | ⭐⭐⭐⭐⭐ |
| MCP CLI管理工具 | — | [#2641](https://github.com/sipeed/picoclaw/pull/2641) | ⭐⭐⭐⭐⭐ |
| 原生音频多模态 | — | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | ⭐⭐⭐⭐⭐ |
| Intel OpenVINO本地推理 | — | [#2496](https://github.com/sipeed/picoclaw/pull/2496) | ⭐⭐⭐⭐☆ |

### 待评估需求（无PR，需设计决策）

| 需求 | Issue | 技术挑战 | 路线图信号 |
|:---|:---|:---|:---|
| LLM Account Stacking/Key轮转 | [#2408](https://github.com/sipeed/picoclaw/issues/2408) | 需抽象"账户池"概念，与现有Provider配置模型冲突 | **v0.3.0+**：基础设施级变更 |
| 外部记忆系统集成（mem0/Supermemory） | [#2515](https://github.com/sipeed/picoclaw/issues/2515) | 需定义Memory Provider接口，与Seahorse上下文压缩共存 | **长期**：生态位扩展 |
| SMTP邮件频道 | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | 与现有频道模型（即时通讯）差异大，需批处理语义 | **中期**：定时任务生态完善 |
| OAuth 2.1+PKCE for MCP | [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 与[#2641](https://github.com/sipeed/picoclaw/pull/2641) CLI工具互补，需Dashboard集成 | **v0.3.0**：安全合规刚需 |
| seahorse fresh_tail_size可配置 | [#2527](https://github.com/sipeed/picoclaw/issues/2527) | 单常量提取，低侵入性 | **快速跟进**：社区易贡献 |

---

## 7. 用户反馈摘要

### 真实痛点（直接引用场景）

| 场景 | 来源Issue | 情绪强度 |
|:---|:---|:---:|
| **"光是运行一个查询资料，出现超过上百行的同样错误"** — workspace外路径访问导致日志淹没 | [#2519](https://github.com/sipeed/picoclaw/issues/2519) | 😤 高 |
| **"Took a while to track down because nothing appears in the logs at INFO level"** — WhatsApp静默丢消息无日志 | [#2540](https://github.com/sipeed/picoclaw/issues/2540) | 😤 高 |
| **"I have to manually go to the 'Credentials' menu...very frequently"** — 认证会话不持久 | [#2302](https://github.com/sipeed/picoclaw/issues/2302) | 😠 中高 |
| Raspberry Pi Zero W上每小时任务触发频道错误，低功耗设备稳定性差 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | 😕 中 |
| **"What kind of idiots give this one stars?"** — 控制台输入重复字符+模型加载失败 | [#2429](https://github.com/sipeed/picoclaw/issues/2429) | 🤬 极高（需优先响应） |

### 满意度亮点
- 用户主动提出"Stacked Authorized LLM Accounts"概念（Cartridge-Belt类比），显示社区参与深度
- 中文用户群体活跃（飞书、QQ频道反馈），本土化需求明确

---

## 8. 待处理积压

### 需维护者优先关注的长期Issue

| Issue | 创建日期 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---:|:---|
| [#2429](https://github.com/sipeed/picoclaw/issues/2429) 控制台输入重复+模型加载失败 | 2026-04-08 | 2026-04-23 | 16天 | **用户体验灾难**，用户情绪爆发，可能引发负面口碑 |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) exec guardCommand路径误判 | 2026-03-04 | 2026-04-23 | **51天** | 安全机制误伤正常命令（curl天气查询），影响工具可信度 |
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) 定时任务频道错误 | 2026-03-18 | 2026-04-23 | **37天** | 边缘设备部署核心障碍 |
| [#2169](https://github.com/sipeed/picoclaw/issues/2169) 双重HEAD认证支持 | 2026-03-30 | 2026-04-23 | 25天 | 企业自建模型适配受阻 |

### PR审查瓶颈
- **39条待合并PR**中，[#2645](https://github.com/sipeed/picoclaw/pull/2645) Bedrock流式、[#2641](https://github.com/sipeed/picoclaw/pull/2641) MCP CLI等核心功能已就绪，建议维护者集中资源加速审查，避免贡献者流失。

---

*日报生成时间：2026-04-24 | 数据来源：GitHub API /sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-24

---

## 1. 今日速览

NanoClaw 今日呈现**高强度安全响应与多平台扩展并进**的态势。24小时内 27 个 PR 流转（18 条已合并/关闭），16 条 Issues 中仅 1 条关闭，反映社区活跃但积压压力显著。**CSO 安全审计引发的 7 项安全修复**构成今日核心事件，其中 2 项 CRITICAL 级别漏洞已有关键 PR 落地；同时 Signal 渠道适配、Apple Container 支持、语音转写等功能线并行推进，项目处于**功能扩张与安全加固的交叉期**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（18 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1945](https://github.com/qwibitai/nanoclaw/pull/1945) | alecburrett | **安全沙箱加固**：只读挂载 agent-runner、sshd 拒绝 Docker 网段、gitignore 敏感文件 | 直接回应生产事故（Trevor 容器逃逸 SSH 回主机事件），关闭审计 7 项发现中的 3 项，为 v2 安全基线奠基 |
| [#1953](https://github.com/qwibitai/nanoclaw/pull/1953) + [#1954](https://github.com/qwibitai/nanoclaw/pull/1954) | ddaniels / gavrielc | **Signal 原生渠道适配**（signal-cli TCP JSON-RPC）+ 自动安装流集成 | NanoClaw 成为少数支持 Signal 全账户注册（非 bot API）的 AI 助手框架，隐私场景竞争力提升 |
| [#1875](https://github.com/qwibitai/nanoclaw/pull/1875) | ira-at-work | **Signal V2 技能文档**（`/add-signal-v2`） | 完成 Signal 支持的文档闭环，降低用户接入门槛 |
| [#1941](https://github.com/qwibitai/nanoclaw/pull/1941) | gavrielc | **容器重启消息丢失修复**：过期心跳 + 孤儿容器认领循环 | 解决核心稳定性痛点——容器重启后消息静默丢弃，直接影响所有渠道的可靠性 |
| [#1943](https://github.com/qwibitai/nanoclaw/pull/1943) | gavrielc | **待处理问题/审批幂等插入** | 消除重试机制导致的唯一约束冲突，适配器层健壮性提升 |
| [#1942](https://github.com/qwibitai/nanoclaw/pull/1942) | gavrielc | **Telegram callback_data 64 字节限制编码** | 修复长选项值（ISO 时间、URL）导致的问题卡片投递失败，Telegram 渠道可用性修复 |
| [#1932](https://github.com/qwibitai/nanoclaw/pull/1932) | Koshkoshinsk | **Discord 审批卡片修复**：DM 用户 ID 解析 + `isGroup` 路由 | v2 Discord 渠道核心交互修复，DM 场景从不可用变为可用 |
| [#1929](https://github.com/qwibitai/nanoclaw/pull/1929) | gavrielc | **Slack + iMessage 渠道流**（实验性） | 渠道矩阵扩展至 7+ 平台（Telegram/WhatsApp/Signal/Discord/Slack/iMessage/T-Watch） |
| [#1928](https://github.com/qwibitai/nanoclaw/pull/1928) | lazer-sketch | **孤儿收割机按安装标签隔离**：防止多实例互相杀伤 | 解决多租户/多版本共存场景的生产级稳定性问题 |
| [#1933](https://github.com/qwibitai/nanoclaw/pull/1933) | gavrielc | **Atomic Chat MCP 工具重构**：技能文件夹自包含，回退 src 编辑 | 确立"技能不污染核心"的架构原则，为后续技能生态扩展定规范 |

**整体迈进评估**：今日合并 PR 覆盖**安全基线（1 项生产事故级）、渠道扩展（Signal 全链路）、核心稳定性（消息投递+容器生命周期）、架构规范**四大维度，属于**高质量交付日**。v2 从"功能可用"向"生产可靠"的转型明确。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 深层分析 |
|:---|:---|:---|:---|:---|
| 1 | [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) Apple Container 网络修复 | 2 条评论 | macOS Apple Container 的 `bridge100` 接口与 Docker Desktop VM 路由差异 | **平台碎片化痛点**：Apple Silicon 原生容器（非 Docker Desktop）成为新目标平台，但网络模型差异（`host.docker.internal` 不可解析、`127.0.0.1` 不可达）暴露容器运行时抽象不足。社区需要统一的主机发现机制 |
| 2 | [#1956](https://github.com/qwibitai/nanoclaw/issues/1956) 原生文件操作 MCP 工具 | 1 条评论 | 对标 Claude Agent SDK 的 `Read/Write/Edit/Glob/Grep` 内置工具 | **性能与安全性博弈**：当前通过 `bash` 外包文件操作导致高延迟+注入风险。提出者 chiptoe-svg 同时是 Codex 延迟优化 PR 作者，显示核心贡献者推动"NanoClaw 作为 Claude/Codex/OpenCode 统一运行时"的定位升级 |

### 反应信号（👍）观察

今日所有议题 👍 均为 0，反映社区**深度参与但广度不足**——核心开发者密集交互，普通用户/观望者尚未形成投票习惯。建议维护者启用 GitHub Discussions 分流设计讨论，降低 Issue 区的参与门槛。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| **CRITICAL** | [#1946](https://github.com/qwibitai/nanoclaw/issues/1946) `--add-host=host.docker.internal:host-gateway` 默认注入容器 | 🔴 OPEN | 所有容器默认获得主机网关可达性，配合 `bypassPermissions` 可直接 SSH 回主机（已验证生产事故） | **#1945 部分修复**（移除默认注入，但需确认是否完全关闭） |
| **CRITICAL** | [#1947](https://github.com/qwibitai/nanoclaw/issues/1947) `bypassPermissions` + `Bash` 工具与不可信渠道组合 | 🔴 OPEN | 任何被攻陷的入站渠道（Telegram/Discord 等）可直接获得无限制容器内代码执行 | **待评估**：需架构决策（是否限制 `bypassPermissions` 仅特定渠道？是否移除 `Bash` 白名单？） |
| **HIGH** | [#1951](https://github.com/qwibitai/nanoclaw/issues/1951) Docker 默认桥接网段 SSH 访问 | 🟡 有缓解脚本 | 容器可扫描 172.17.0.0/16 并 SSH 爆破主机 | **#1945 提供 `scripts/harden-sshd-against-docker.sh`** |
| **HIGH** | [#1950](https://github.com/qwibitai/nanoclaw/issues/1950) agent-runner 源码可写挂载 | 🟢 **FIXED in #1945** | 容器可篡改自身运行时源码实现持久化 | ✅ **已关闭** |
| **HIGH** | [#1949](https://github.com/qwibitai/nanoclaw/issues/1949) Tailscale 侧车模板硬编码 `TS_AUTHKEY` | 🔴 OPEN | 密钥泄露至 git 历史/文件系统 | 待 PR |
| **HIGH** | [#1948](https://github.com/qwibitai/nanoclaw/issues/1948) 集成令牌存放于可写组文件夹 | 🔴 OPEN | 组内任意成员可读取其他集成密钥 | 待 PR |
| **HIGH** | [#1944](https://github.com/qwibitai/nanoclaw/issues/1944) Max 订阅 OAuth 令牌无法用于 Sonnet 推理 | 🔴 OPEN | Claude Max 20x 订阅用户无法使用 NanoClaw（仅 API 额度用户可用） | 待 PR，涉及 Anthropic 商业模型对接 |
| **MEDIUM** | [#1952](https://github.com/qwibitai/nanoclaw/issues/1952) `@anthropic-ai/claude-code` 版本未锁定 | 🟡 临时措施 | 供应链攻击风险（全局安装最新版） | **#1945 临时 pin 至 `@2.1.91`**，需长期版本策略 |
| **HIGH** | [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) Apple Container 网络不可达 | 🔴 OPEN（3 月遗留） | Apple Silicon 原生容器完全不可用 | **#1936** + **#1937** 待合并，解决 credential proxy 启动 + 网桥检测 |
| **HIGH** | [#1934](https://github.com/qwibitai/nanoclaw/issues/1934) credential proxy 从未启动 + `CREDENTIAL_PROXY_HOST` 未读取 | 🔴 OPEN | Apple Container 分支阻塞 | **#1936** 待合并 |
| **MEDIUM** | [#1935](https://github.com/qwibitai/nanoclaw/issues/1935) launchd PATH 缺失 `/opt/homebrew/bin` | 🔴 OPEN | Apple Silicon Mac 服务启动失败 | **#1938** 待合并 |
| **MEDIUM** | [#1959](https://github.com/qwibitai/nanoclaw/issues/1959) Discord 回复基于容器初始化而非消息源 | 🔴 OPEN | 线程外消息仍进入初始线程，用户体验混乱 | 待 PR |

**稳定性健康度评估**：🔶 **黄灯**。生产事故已响应但根因（`bypassPermissions` 架构）未解决；Apple Container 平台支持处于"几乎可用"边缘，3 个关联 PR 待合并即可闭环。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 与现有 PR 关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **原生文件操作 MCP 工具**（`Read/Write/Edit/Glob/Grep`） | [#1956](https://github.com/qwibitai/nanoclaw/issues/1956) chiptoe-svg | 作者已有 Codex 延迟优化 PR #1955 在途 | **高**。技术方案明确（对标 Claude SDK），且与"减少 bash 依赖"的安全方向一致。预计 v2.1 或 v2.2 |
| **多模型/第三方 API 通道支持** | [#1930](https://github.com/qwibitai/nanoclaw/issues/1930) hello532（中文） | 无直接 PR，但 #1875 Atomic Chat MCP 是同类思路 | **中**。社区呼声存在，但需抽象 provider 接口（当前 Codex/Claude/OpenCode 已有多实现，可泛化） |
| **语音转写 V2**（本地 Whisper + OpenAI 回退，任意渠道） | [#1879](https://github.com/qwibitai/nanoclaw/pull/1879) jorgenclaw | PR 已开 3 天，今日更新 | **高**。技术完成度高，渠道无关设计符合架构方向，预计近期合并 |
| **v1 → v2 自动迁移流** | [#1931](https://github.com/qwibitai/nanoclaw/pull/1931) gabi-simons | PR 实验性标记 | **中**。v1 用户存量迁移关键，但"尽力而为"表述暗示边界情况多，需测试完善 |

**路线图信号**：项目正从"渠道扩展"转向"**运行时能力深化**"——文件工具、语音、迁移工具均指向"让 v2 成为更完整的 Agent 操作系统"。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---|
| "容器重启后消息石沉大海，日志里只有 `Killing orphaned container`" | #1941 背景描述 | 😤 挫败——核心功能静默失效 |
| "Apple Container 分支上 agent 永远无响应，查了一天才发现 proxy 根本没启动" | #1934 / #1936 | 😤 调试成本极高，平台支持文档与实现脱节 |
| "Max 订阅用户花了钱却用不了，OAuth token 和 API key 混为一谈" | #1944 | 😤 商业模式理解成本高 |
| "Discord 里 @ 机器人创建了线程，之后所有回复都进那个线程，即使我在主频道说话" | #1959 | 😵 交互模型混乱 |

### 满意点

| 场景 | 来源 |
|:---|:---|
| "PicoClaw 在 NXP i.MX93 EVK 上成功启动，CLI 和 headless 模式都工作" | #1957（已关闭）——**边缘/嵌入式场景验证** |
| "Signal 不需要 bot API，完整账户注册，隐私场景终于可用" | #1953 设计说明 |

---

## 8. 待处理积压

### 需维护者关注的高风险/长期项

| Issue/PR | 创建时间 | 风险说明 | 行动建议 |
|:---|:---|:---|:---|
| [#1103](https://github.com/qwibitai/nanoclaw/issues/1103) Apple Container 网络 | 2026-03-15（**40 天**） | 平台战略（Apple Silicon 原生）受阻，关联 #1934/#1936/#1937/#1938 四个 PR 已形成修复矩阵 | **优先合并 #1936+#1937+#1938**，关闭 Apple Container 里程碑 |
| [#1960](https://github.com/qwibitai/nanoclaw/pull/1960) setup/register 迁移 010 后列缺失 | 今日 | **v2 全新安装阻断性 Bug**，迁移 010 替换列后 register 步骤未同步 | **紧急**：合并前 v2 新用户无法完成安装 |
| [#1947](https://github.com/qwibitai/nanoclaw/issues/1947) `bypassPermissions` + `Bash` 架构安全 | 今日 | CRITICAL 级，但需**产品决策**（是否限制 `Bash`？是否分渠道权限？）非纯技术修复 | 维护者需明确安全模型：默认拒绝 `Bash` for 不可信渠道？或引入渠道信任等级？ |
| [#1944](https://github.com/qwibitai/nanoclaw/issues/1944) Max 订阅 OAuth 推理失败 | 今日 | 商业用户流失风险，Anthropic 产品线对接复杂 | 联系 Anthropic 确认 Max 订阅的 API 兼容策略，或文档明确区分 |
| [#1956](https://github.com/qwibitai/nanoclaw/issues/1956) 原生文件 MCP 工具 | 今日 | 有明确技术路径和社区贡献者意愿 | 维护者回应是否接受该方向，避免贡献者重复工作 |

---

## 附录：数据总览

| 指标 | 数值 |
|:---|:---|
| Issues 更新（24h） | 16（新开/活跃 15，关闭 1） |
| PRs 更新（24h） | 27（待合并 9，已合并/关闭 18） |
| 新版本 | 0 |
| CRITICAL 安全 Issue | 2（均待完全关闭） |
| 平台扩展（Signal） | 3 PR 闭环（适配+文档+安装流） |
| Apple Container 修复 PR 待合并 | 3 |

---

*日报生成时间：2026-04-24 | 数据来源：qwibitai/nanoclaw GitHub 公开数据*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-24

---

## 1. 今日速览

NullClaw 今日社区活跃度**中等偏高**，过去 24 小时产生 **11 条 Issues 更新**（8 条新开/活跃，3 条关闭），但 **PR 活动为零**，无版本发布。项目呈现"高问题报告、低代码贡献"的典型状态：用户侧配置困惑和平台兼容性（Android/Termux、Matrix/Telegram 频道）成为主要痛点，而维护者响应以 Issue 关闭为主，缺乏主动代码修复。整体健康度**偏警示**——社区需求旺盛但开发吞吐量不足。

---

## 2. 版本发布

**无新版本发布。**

最新版本仍为 **v2026.4.17**（据 #868 用户环境信息推断）。值得注意的是，今日密集出现的配置相关问题（#864、#867、#869）表明该版本在配置解析和频道初始化方面可能存在系统性缺陷，亟需补丁版本。

---

## 3. 项目进展

**今日无合并 PR，代码层面零推进。**

关闭的 3 个 Issue 均为**问题解答/配置澄清型关闭**，非代码修复：

| Issue | 状态 | 实质进展 | 链接 |
|:---|:---|:---|:---|
| #167 curl/wget 硬编码限制 | 关闭 | 确认设计行为（安全限制），非 Bug | [nullclaw/nullclaw#167](https://github.com/nullclaw/nullclaw/issues/167) |
| #39 Matrix 配置不识别 | 关闭 | 历史问题，今日被 #864 引用后关闭，可能为重复 | [nullclaw/nullclaw#39](https://github.com/nullclaw/nullclaw/issues/39) |
| #811 自定义 OpenAI-compatible 提供商连接失败 | 关闭 | **实际 Bug 修复**（👍×2），子代理连接问题获解决 | [nullclaw/nullclaw#811](https://github.com/nullclaw/nullclaw/issues/811) |

**评估**：仅 #811 代表真实代码修复，其余为文档/设计解释。项目今日**实质性前进有限**。

---

## 4. 社区热点

### 🔥 最高讨论热度：#167 — curl/wget 硬编码限制（7 评论）
- **链接**：[nullclaw/nullclaw#167](https://github.com/nullclaw/nullclaw/issues/167)
- **诉求分析**：用户期望 NullClaw 作为"AI 智能体"具备完整的 Shell 工具能力，但项目出于安全考虑硬编码限制了 `curl`/`wget`。深层矛盾是**产品定位认知差**——用户将其视为通用自动化工具，而设计者将其视为受控 AI 运行时。该 Issue 今日关闭但可能持续引发类似质疑。

### 🔥 最活跃新开 Issue 集群：eabase 的配置困境（#864/#865/#866/#867）
- **链接**：[nullclaw/nullclaw#864](https://github.com/nullclaw/nullclaw/issues/864) | [nullclaw/nullclaw#867](https://github.com/nullclaw/nullclaw/issues/867)
- **诉求分析**：核心贡献者 eabase 在单日提交 4 个 Issues，形成**系统性使用障碍报告**：Matrix 配置串扰 Telegram（#864）、CLI 终端控制字符失效（#865）、curl POST 白名单失效（#866）、缺完整配置示例（#867）。这揭示 **v2026.4.17 存在配置系统的不一致性和文档真空**，用户被迫通过试错逆向工程。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 平台/组件 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **P0-严重** | #868 | Android/Termux `zig build` 失败：`linkat` 系统调用 `AccessDenied` | Android aarch64/Termux/Zig 0.16.0 | ❌ 无 | [nullclaw/nullclaw#868](https://github.com/nullclaw/nullclaw/issues/868) |
| **P1-高** | #864 | Matrix 频道配置生效但返回 Telegram 响应 | Matrix 频道配置系统 | ❌ 无 | [nullclaw/nullclaw#864](https://github.com/nullclaw/nullclaw/issues/864) |
| **P1-高** | #869 | Telegram 配置解析正确但 `channel list` 显示"未配置" | Telegram 频道状态检测 | ❌ 无 | [nullclaw/nullclaw#869](https://github.com/nullclaw/nullclaw/issues/869) |
| **P1-高** | #866 | curl 已加入 allowlist 但 POST 请求仍失败 | Shell 工具权限系统 | ❌ 无 | [nullclaw/nullclaw#866](https://github.com/nullclaw/nullclaw/issues/866) |
| **P2-中** | #865 | CLI 方向键输出 CTRL 字符而非移动光标 | 终端/交互层 | ❌ 无 | [nullclaw/nullclaw#865](https://github.com/nullclaw/nullclaw/issues/865) |
| **P2-中** | #339 | Android 构建 `build.zig.zon` 解析错误 | Android/Termux/Zig | ❌ 无 | [nullclaw/nullclaw#339](https://github.com/nullclaw/nullclaw/issues/339) |
| **P2-中** | #427 | 自定义 Skill 注册后不可用（`tool not found`） | Skill 系统 | ❌ 无 | [nullclaw/nullclaw#427](https://github.com/nullclaw/nullclaw/issues/427) |

**关键发现**：#868 与 #339 形成 **Android/Termux 平台兼容性危机**，Zig 构建系统在移动 Linux 环境存在系统性问题。频道配置类 Bug（#864/#869）高度关联，可能共享同一配置加载逻辑缺陷。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 需求描述 | 纳入可能性评估 |
|:---|:---|:---|:---|
| #867 | 文档/体验 | 提供完整可工作的 `config.json` 示例，含注释说明 | **极高** — 零成本高收益，可立即缓解 #864/#869 类问题 |
| #167（隐性） | 设计变更 | 放宽 curl/wget 硬编码限制，或提供显式覆盖机制 | **中** — 需安全模型讨论，但用户压力持续 |
| #427（隐性） | 功能完善 | Skill 热加载/自动注册机制修复 | **中高** — 属于核心功能缺陷，非新需求 |

**路线图信号**：项目急需 **配置系统重构** 和 **Android 构建链修复** 两个主题版本，否则用户流失风险显著。

---

## 7. 用户反馈摘要

### 真实痛点
- **"配置考古学"**：用户 eabase 明确表示默认配置"crippled so badly"，必须通过 grep 历史 Issue 拼凑可用配置（#864 引用 #39）
- **平台二等公民**：Android/Termux 用户（NOTJuangamer10、OniSong）遭遇构建系统级失败，且问题长期未获响应（#339 创建于 3 月 6 日）
- **权限系统不可预测**：allowlist 机制存在"注册但不生效"的灰色地带（#866、#427）

### 使用场景
- **跨平台部署**：Termux/Android 作为边缘计算/移动自动化场景被实际尝试
- **多协议桥接**：Matrix + Telegram 双频道配置是常见需求，但频道隔离性存疑（#864）

### 情绪指标
- 😤 **挫败**：eabase 单日 4 Issues 的密集提交显示"尝试-失败-再尝试"的恶性循环
- 😐 **观望**：#811 获 2 👍 后关闭，显示用户对"实际修复"的稀缺感激

---

## 8. 待处理积压

| Issue | 创建日期 | 积压天数 | 风险说明 | 链接 |
|:---|:---|:---|:---|:---|
| #339 Android 安装/build.zig.zon 错误 | 2026-03-06 | **48 天** | 平台兼容性核心问题，今日被 #868 叠加恶化 | [nullclaw/nullclaw#339](https://github.com/nullclaw/nullclaw/issues/339) |
| #427 自定义 Skill 不可用 | 2026-03-11 | **44 天** | 扩展性核心功能瘫痪，影响生态建设 | [nullclaw/nullclaw#427](https://github.com/nullclaw/nullclaw/issues/427) |

**维护者行动建议**：
1. **紧急**：为 #868/#339 建立 Android/Termux CI 测试环境，或声明平台支持范围
2. **高优**：合并 #867 的文档需求，提供官方完整配置模板
3. **本周**：审查频道配置加载逻辑，修复 Matrix/Telegram 状态检测的串扰问题（#864/#869）

---

*日报基于 GitHub 公开数据生成，未包含私有讨论或分支活动。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-24

## 1. 今日速览

IronClaw 今日维持**极高开发强度**，24小时内产生 **37 条 Issue 更新**（30 活跃/新开，7 关闭）和 **50 条 PR 更新**（43 待合并，7 已合并/关闭），无新版本发布。核心团队正全力推进 **Engine V2 架构重构**（#2767 Epic），同时大规模 **QA Bug Bash** 产出密集——仅 joe-rlo 单日即提交 12 条生产环境缺陷报告，覆盖 Telegram、Google Sheets、Missions、集成状态一致性等关键路径。CI/CD 基础设施面临转型压力，merge queue  redesign（#2877）与 staging promotion 机制（#2916）并行推进，43 个待合并 PR 中 XL 级大型变更占比显著，集成风险需密切关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 说明 | 关联 Epic/Issue |
|:---|:---|:---|:---|
| [#2922](https://github.com/nearai/ironclaw/pull/2922) | zetyquickly | 为工具调用添加重试逻辑与参数验证，增强调试日志覆盖 | 工具可靠性 |
| [#2869](https://github.com/nearai/ironclaw/pull/2869) | henrypark133 | Engine V2：移除重复的可调用工具描述文本，刷新 resume/checkpoint 路径的 canonical capability 元数据 | [#2767](https://github.com/nearai/ironclaw/issues/2767) |
| [#2876](https://github.com/nearai/ironclaw/pull/2876) | henrypark133 | Engine V2：为 `ActionDef` 添加 canonical discovery 元数据，重构 mission action 元数据至独立 bridge 模块 | [#2767](https://github.com/nearai/ironclaw/issues/2767) |
| [#2889](https://github.com/nearai/ironclaw/pull/2889) | henrypark133 | Engine V2：完成 deferred action inventory 清理（Section 7 切片） | [#2767](https://github.com/nearai/ironclaw/issues/2767) |
| [#2168](https://github.com/nearai/ironclaw/pull/2168) | pranavraja99 | **路径级凭证匹配**：`CredentialMapping` 新增 `path_patterns`，支持同一 host 下不同端点使用不同 secret | 安全/多租户 |

**核心推进**：Engine V2 Epic 今日完成 **3 个 XL 级子 PR 合并**，标志着 capability/action 分离架构进入收尾阶段；路径级凭证匹配功能落地，为后续多租户部署奠定安全基础。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#2767](https://github.com/nearai/ironclaw/issues/2767) Epic: Separate engine v2 capability background from callable tool schemas | **6 条** | **架构解耦**：要求 Engine V2 将"能力描述背景"与"可调用工具模式"分离，避免 LLM 上下文污染，提升工具调用精确度 |
| 2 | [#2231](https://github.com/nearai/ironclaw/issues/2231) Multiple chats cannot run in parallel | **5 条** | **并发性能**：多聊天线程排队阻塞，影响高并发场景用户体验，P2 优先级待修复 |
| 3 | [#2792](https://github.com/nearai/ironclaw/issues/2792) Epic: Gateway state convergence | **5 条** | **状态一致性**：前端应为后端纯函数，消除 UI/后端状态漂移，要求所有 UI 可见概念成为持久化版本实体 |

**分析**：三大热点均指向 **系统架构深层重构**——从引擎内部解耦到网关状态同步，反映社区对 IronClaw **可靠性工程**的高度关注，而非表层功能诉求。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent 在 hosted 环境将文件保存至 `/home/agent`，用户无法访问 | **OPEN** | 无 |
| **P1** | [#2903](https://github.com/nearai/ironclaw/issues/2903) | Telegram 长回复静默失败，无错误提示 | **OPEN** | 无 |
| **P1** | [#1998](https://github.com/nearai/ironclaw/issues/1998) | Slack connect flow 完全损坏，bot 无响应 | **CLOSED** | 已修复 |
| **P2** | [#2915](https://github.com/nearai/ironclaw/issues/2915) | Mission "terminal or budget exhausted" 错误阻止手动 Fire | **OPEN** | 无 |
| **P2** | [#2914](https://github.com/nearai/ironclaw/issues/2914) | Skill 安装失败：SKILL.md YAML frontmatter 解析错误 | **OPEN** | 无 |
| **P2** | [#2913](https://github.com/nearai/ironclaw/issues/2913) | 单次工作流重复创建 Google Sheets | **OPEN** | 无 |
| **P2** | [#2912](https://github.com/nearai/ironclaw/issues/2912) | Google Sheets 创建后需重新认证 | **OPEN** | 无 |
| **P2** | [#2911](https://github.com/nearai/ironclaw/issues/2911) | Asana 集成状态不一致：错误指示器与"无需配置"并存 | **OPEN** | 无 |
| **P2** | [#2910](https://github.com/nearai/ironclaw/issues/2910) | Linear 集成同时显示成功与失败状态 | **OPEN** | 无 |
| **P2** | [#2909](https://github.com/nearai/ironclaw/issues/2909) | CSV 文件以文本摘要而非文档附件发送至 Telegram | **OPEN** | 无 |
| **P2** | [#2908](https://github.com/nearai/ironclaw/issues/2908) | Mission Telegram 通知延迟 ~5 分钟，使用原始内部格式 | **OPEN** | 无 |
| **P2** | [#2907](https://github.com/nearai/ironclaw/issues/2907) | 同一请求重复创建 Mission | **OPEN** | 无 |
| **P2** | [#2906](https://github.com/nearai/ironclaw/issues/2906) | 工具调用无人类可读描述 | **OPEN** | 无 |
| **Regression** | [#2883](https://github.com/nearai/ironclaw/issues/2883) | WASM 工具分派在 capability surface policy 集中化后损坏 | **CLOSED** | [#2889](https://github.com/nearai/ironclaw/pull/2889) |
| **Regression** | [#2884](https://github.com/nearai/ironclaw/issues/2884) | 新用户侧边栏重构后无可用线程 | **CLOSED** | 已修复 |
| **Regression** | [#2887](https://github.com/nearai/ironclaw/issues/2887) | Auth Browser Consent canary 因 Google bot 检测失败 | **OPEN** | 无 |

**关键信号**：**12 条 P2 级 QA 缺陷全部来自同一测试日**（2026-04-23），表明 hosted-staging 环境存在系统性集成质量问题；**2 条 P1 生产缺陷**涉及文件系统隔离与消息可靠性，需紧急响应。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#2920](https://github.com/nearai/ironclaw/issues/2920) | 功能请求 | 托管平台数据持久化与升级安全：SQLite → 外置卷/Postgres | **高**——与 [#2841](https://github.com/nearai/ironclaw/pull/2841) 多租户控制平面 Phase 1 的 DB 迁移方向一致 |
| [#2921](https://github.com/nearai/ironclaw/pull/2921) | PR | 工具驱动 Webhook 入口 + Linear 集成 | **高**——已提交 XL 级实现，扩展性设计良好 |
| [#2897](https://github.com/nearai/ironclaw/pull/2897) | PR | Phase-1 用户自编 WASM 工具流 | **中**——明确标记为 multi-tenant 部署阻塞，待 ToolRegistry 隔离完成 |
| [#2900](https://github.com/nearai/ironclaw/issues/2900) | 功能请求 | 解耦统一 webhook 监听地址与命名 HTTP 通道启用 | **中**——配置架构清理，技术债类需求 |
| [#2719](https://github.com/nearai/ironclaw/issues/2719) | 基础设施 | 从 staging promotion bot 迁移至 GitHub-native merge queue | **高**——[#2877](https://github.com/nearai/ironclaw/pull/2877) Phase 1 CI redesign 已实施 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **Hosted 平台文件黑洞** | [#2905](https://github.com/nearai/ironclaw/issues/2905) | Agent 生成文件保存于容器内路径，用户完全无法获取，"高级用户才能 SSH 备份"的设计与托管定位矛盾 |
| **集成状态认知混乱** | [#2911](https://github.com/nearai/ironclaw/issues/2911), [#2910](https://github.com/nearai/ironclaw/issues/2910) | Asana/Linear 同时显示错误与成功指示器，用户无法判断配置是否完成 |
| **Telegram 可靠性缺口** | [#2903](https://github.com/nearai/ironclaw/issues/2903), [#2908](https://github.com/nearai/ironclaw/issues/2908), [#2909](https://github.com/nearai/ironclaw/issues/2909) | 长消息静默丢弃、通知延迟、文件格式错误，作为关键输出通道不可信 |
| **Mission 生命周期失控** | [#2907](https://github.com/nearai/ironclaw/issues/2907), [#2915](https://github.com/nearai/ironclaw/issues/2915) | 重复创建、无法手动触发、终端状态误判，自动化工作流缺乏治理 |

### 正向信号

- Engine V2 架构重构获得 **系统性推进**（4 个 PR 闭环），核心贡献者 henrypark133 展现高度代码掌控力
- 路径级凭证匹配（[#2168](https://github.com/nearai/ironclaw/pull/2168)）体现安全设计的精细化演进

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) 阿里云 Coding Plan 支持 | 2026-03-20 | 2026-04-23 | **35 天未合并**，XL 级跨域变更，涉及 15+ scope，可能因 Engine V2 重构产生持续合并冲突 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) Abound demo — Responses API, credential injection, skills, guardrails | 2026-03-30 | 2026-04-23 | **26 天未合并**，high risk，与 V2 架构分支并行开发，集成复杂度极高 |
| [#1044](https://github.com/nearai/ironclaw/issues/1044) E2E test powered by Claude Code with Chrome MCP | 2026-03-12 | 2026-04-23 | **44 天开放**，仅 2 条评论，测试基础设施债务，阻碍质量门禁建设 |
| [#2231](https://github.com/nearai/ironclaw/issues/2231) 多聊天并行阻塞 | 2026-04-10 | 2026-04-23 | **14 天开放**，5 条评论，P2 优先级但影响核心交互体验 |

---

*日报基于 IronClaw GitHub 公开数据生成 | nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-24

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-04-24  
> **数据周期**: 过去 24 小时（2026-04-23）

---

## 1. 今日速览

LobsterAI 今日展现**高强度迭代状态**：13 个 PR 全部完成合并/关闭，0 个待合并，代码流转效率极高。社区侧有 6 个 Issue 获得更新（均为既有 Issue 被重新激活或新增评论），但无新增关闭，显示**用户反馈处理存在滞后**。值得关注的是，一个沉寂 2 个月的旧 PR（#61 OpenAI API 类型选择）今日被关闭，可能意味着相关功能已通过其他分支实现。整体项目健康度：**开发活跃，社区响应待加强**。

---

## 2. 版本发布

**无新版本发布**

但需注意：PR [#1805](https://github.com/netease-youdao/LobsterAI/pull/1805) 为 **Release/2026.04.22** 合并，包含多项新功能，预计正式版本即将推送。

---

## 3. 项目进展

### 🔥 核心发布：2026.04.22 版本合并
**PR [#1805](https://github.com/netease-youdao/LobsterAI/pull/1805)** | [area: renderer, docs, main, openclaw, cowork, im, platform: windows]
- **Discord/Telegram 多机器人支持**：同一 IM 平台可配置多个机器人实例（#1792, #1794）
- **LM Studio 本地推理支持**：模型配置页新增本地模型提供商（#1787）
- **WeCom 插件升级**：wecom-openclaw-plugin → 2026.4.22
- **Windows 日志诊断增强**：导出包含 `install-timing.log`
- **更新请求携带客户端版本号**：便于服务端做兼容性判断

### 🛠 关键稳定性修复

| PR | 作者 | 核心改进 |
|:---|:---|:---|
| [#1807](https://github.com/netease-youdao/LobsterAI/pull/1807) | btc69m979y-dotcom | **会话草稿保护**：修复"新建对话"时草稿内容丢失问题，仅当已在首页时才清空输入 |
| [#1804](https://github.com/netease-youdao/LobsterAI/pull/1804) | btc69m979y-dotcom | **恢复 sharp 原生绑定**：修复 #1685 引入的图片处理回归，添加 `cfmind/node_modules` 至 `NODE_PATH` |
| [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) | liuzhq1986 | **RPC 超时调优**：`chat.send` 超时从 30s → 90s，解决 Gateway 就绪后内部初始化延迟导致的超时 |
| [#1801](https://github.com/netease-youdao/LobsterAI/pull/1801) | btc69m979y-dotcom | **关键 Bug 修复**：阻止 MCP 工具执行时的陈旧回复循环 + 中止信号误触发 |

### ⚡ 性能与体验优化

| PR | 说明 |
|:---|:---|
| [#1809](https://github.com/netease-youdao/LobsterAI/pull/1809) | 更新"更新就绪"提示文案国际化 |
| [#1808](https://github.com/netease-youdao/LobsterAI/pull/1808) | 首页输入框最大宽度限制为 768px（原 1024px 内容区） |
| [#1799](https://github.com/netease-youdao/LobsterAI/pull/1799) | 工具调用摘要宽度扩展（400px → 全宽）+ 内容区 896px → 1024px |
| [#1800](https://github.com/netease-youdao/LobsterAI/pull/1800) | Windows 日志导出包含安装耗时日志 |
| [#1798](https://github.com/netease-youdao/LobsterAI/pull/1798) | **优化 Gateway 重启策略**：focus/blur 时不再重启 Gateway，减少中断 |
| [#1806](https://github.com/netease-youdao/LobsterAI/pull/1806) | 升级 popo 插件，修复 token 过期问题 |

### 🧪 测试维护
- [#1802](https://github.com/netease-youdao/LobsterAI/pull/1802)：更新 LM Studio、Telegram 多实例、备份管理器的过时测试用例

### 📋 历史 PR 清理
- [#61](https://github.com/netease-youdao/LobsterAI/pull/61) **已关闭**：OpenAI API 类型选择（Responses/Chat Completions）功能，2 个月前提交，今日关闭——推测功能已通过其他实现路径落地

---

## 4. 社区热点

### 最活跃讨论：Linux 自编译版本困惑
**Issue [#26](https://github.com/netease-youdao/LobsterAI/issues/26)** | 4 条评论 | [stale]
> **用户核心诉求**：`ray0019` 反复拉取代码后编译仍为 0.1.16，质疑版本更新机制，官方主页缺乏版本说明。

**分析**：反映项目**版本发布透明度不足**，自编译用户与官方 release 渠道信息不同步。建议维护者明确文档化版本号规则、tag 策略及编译产物标识。

### 高影响 Bug 持续未解
**Issue [#15](https://github.com/netease-youdao/LobsterAI/issues/15)** | Electron 40 启动崩溃 | 2 条评论 | [stale]
- `TypeError: Cannot set properties of undefined (setting 'name')`
- 影响 macOS + Windows，关联 Electron 40.2.1 + Node.js v24.11.1 兼容性

**严重度**：🔴 **高** — 阻碍升级路径，今日无 fix PR 关联。

### IM 集成质量反馈
**Issue [#14](https://github.com/netease-youdao/LobsterAI/issues/14)** | 飞书通道双 Bug | 1 条评论 | [stale]
- `renderMode` 配置硬编码为 `text`，`auto`/`raw`/`card` 均未实现
- `<thinking>` 标签未过滤泄漏至用户端

**矛盾点**：今日发布的 2026.04.22 版本大力扩展 Discord/Telegram/WeCom，但**飞书基础体验缺陷 2 个月未修复**，资源分配引发社区质疑。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#15](https://github.com/netease-youdao/LobsterAI/issues/15) | Electron 40 启动崩溃，阻断升级 | ❌ 无 PR |
| 🟡 **中** | [#14](https://github.com/netease-youdao/LobsterAI/issues/14) | 飞书 renderMode 无效 + thinking 标签泄漏 | ❌ 无 PR |
| 🟡 **中** | [#35](https://github.com/netease-youdao/LobsterAI/issues/35) | Discord 连接诊断（仅截图，缺乏上下文） | ❌ 无 PR |
| 🟢 **低** | — | 今日合并 PR 已修复多项内部 Bug（见第 3 节） | ✅ 已修复 |

**今日内部修复的关键稳定性问题**：
- MCP 工具中止时的陈旧回复循环 ([#1801](https://github.com/netease-youdao/LobsterAI/pull/1801))
- Gateway RPC 超时误判 ([#1803](https://github.com/netease-youdao/LobsterAI/pull/1803))
- sharp 图片处理原生绑定丢失 ([#1804](https://github.com/netease-youdao/LobsterAI/pull/1804))

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 信号强度 | 纳入可能性分析 |
|:---|:---|:---|:---|
| **Codex 登录支持** | [#29](https://github.com/netease-youdao/LobsterAI/issues/29) | ⭐⭐⭐ | 中等 — 认证体系扩展，需评估 OAuth 优先级 |
| **对话批量删除** | [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) | ⭐⭐⭐⭐ | **高** — 基础 UX 需求，👍 已获 1 票，实现成本低 |
| **OpenAI API 类型选择** | 原 PR [#61](https://github.com/netease-youdao/LobsterAI/pull/61) | — | **已实现** — PR 关闭推测功能已内置 |
| **LM Studio 本地推理** | — | — | **已发布** — 今日合并 #1805 |

**路线图推断**：项目正聚焦**多平台 IM 扩展**（Discord/Telegram/WeCom）与**本地模型支持**（LM Studio），企业集成权重高于个人用户功能。对话管理类需求（#1797）可能是下一波个人体验优化的切入点。

---

## 7. 用户反馈摘要

### 😤 痛点
| 来源 | 反馈 |
|:---|:---|
| [#26](https://github.com/netease-youdao/LobsterAI/issues/26) | **版本信息黑洞**："主页上没看到"版本说明，自编译用户无所适从 |
| [#14](https://github.com/netease-youdao/LobsterAI/issues/14) | **飞书二等公民**：配置项存在但代码硬编码，thinking 标签污染输出 |
| [#15](https://github.com/netease-youdao/LobsterAI/issues/15) | **升级即崩溃**：Electron 40 兼容性未验证即推进 |

### 😊 潜在满意点
- 多机器人支持（Discord/Telegram）满足复杂部署场景
- LM Studio 接入回应了本地部署/隐私合规诉求

### 📊 使用场景洞察
- **企业用户**：飞书、WeCom 集成活跃，但稳定性要求未满足
- **开发者/极客**：Linux 自编译、LM Studio、Codex 登录需求集中
- **普通用户**：对话管理功能（删除、上下文控制）缺失影响日常使用

---

## 8. 待处理积压

### ⚠️ 需维护者紧急关注

| Issue | 年龄 | 风险 |
|:---|:---|:---|
| [#15](https://github.com/netease-youdao/LobsterAI/issues/15) Electron 40 启动崩溃 | 63 天 | 🔴 **阻断升级路径**，Electron 版本持续迭代，技术债务累积 |
| [#14](https://github.com/netease-youdao/LobsterAI/issues/14) 飞书双 Bug | 63 天 | 🟡 **与企业用户信任相关**，与今日发布的 WeCom 升级形成反差 |
| [#26](https://github.com/netease-youdao/LobsterAI/issues/26) Linux 版本困惑 | 62 天 | 🟡 **开发者社区流失风险** |
| [#35](https://github.com/netease-youdao/LobsterAI/issues/35) Discord 连接诊断 | 62 天 | 🟢 信息不足，需用户补充日志 |

### 📌 建议行动
1. **#15**：指定 Electron 升级专项负责人，复现并给出降级/修复方案
2. **#14**：在 2026.04.22 版本周期内插入飞书 hotfix，或公开排期
3. **#1797**：对话删除功能实现简单，可作为社区 good-first-issue 或快速迭代

---

> **日报生成依据**: GitHub Issues/PRs 元数据、标签、时间戳、评论数及内容摘要  
> **健康度评分**: 开发迭代 ⭐⭐⭐⭐⭐ / 社区响应 ⭐⭐⭐☆☆ / 积压处理 ⭐⭐☆☆☆

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-24

> **项目**: moltis-org/moltis | **日期**: 2026-04-24 | **分析周期**: 过去24小时

---

## 1. 今日速览

Moltis 今日展现出**高活跃度的工程推进状态**：24小时内完成 **6个 PR 合并/关闭**（含5个功能修复+1个测试补充），同时 **5个 Issue 得到解决**，关闭率超过55%。核心贡献者 `penso` 单日产出5个高质量 PR，主导了 schema 规范化、KV 缓存优化、Docker 沙箱兼容性及 MCP OAuth 修复等关键路径。社区侧有4个新 Issue/PR 待处理，集中在 UI 交互细节（智能滚动、项目下拉框）和第三方集成（Fireworks AI、MCP OAuth 配置）。**整体健康度良好**：修复响应迅速，但 UI/UX 债务开始显现，需要关注前端代码与实际 DOM 的同步问题。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#856](https://github.com/moltis-org/moltis/pull/856) `fix(providers): deep-merge properties in schema union collapse, strip redundant boolean enum` | penso | **关键修复**：解决 Gemini（经 OpenRouter）和 Fireworks AI 的 schema 规范化双重问题——`anyOf`/`oneOf` 联合类型深度合并 + 去除冗余布尔枚举 | [#849](https://github.com/moltis-org/moltis/issues/849), [#848](https://github.com/moltis-org/moltis/issues/848) |
| [#855](https://github.com/moltis-org/moltis/pull/855) `fix(prompt): move datetime from system message to user content for KV cache stability` | penso | **架构优化**：将时间戳注入从系统消息移至用户消息内容，修复本地 LLM（llama.cpp/Ollama/LM Studio）KV 缓存前缀失效问题 | [#176](https://github.com/moltis-org/moltis/issues/176) |
| [#853](https://github.com/moltis-org/moltis/pull/853) `fix(sandbox): skip sysfs tmpfs mounts for missing paths (ARM/Raspberry Pi)` | penso | **兼容性扩展**：Docker 沙箱支持 ARM/Raspberry Pi 和 WSL2，替换 WSL2 专属检测为按路径存在性检查 | [#828](https://github.com/moltis-org/moltis/issues/828) |
| [#852](https://github.com/moltis-org/moltis/pull/852) `fix(mcp): show re-auth button when OAuth server needs re-authentication` | penso | **UX 修复**：MCP 服务器 OAuth 重新认证按钮缺失问题 | [#851](https://github.com/moltis-org/moltis/issues/851) |
| [#854](https://github.com/moltis-org/moltis/pull/854) `test(voice): add ElevenLabs TTS tests for custom voice support` | penso | **质量加固**：为 ElevenLabs 自定义音色（克隆/生成）补充 wiremock 单元测试和真实 API 集成测试 | [#735](https://github.com/moltis-org/moltis/issues/735) |
| [#841](https://github.com/moltis-org/moltis/pull/841) `feat(signal): add signal-cli channel` | penso | **新渠道**：新增 Signal 消息渠道插件，完整集成 signal-cli 守护进程（HTTP JSON-RPC + SSE 事件） | — |

**整体推进评估**：今日合并集中在 **"稳定性+兼容性"双主线**——底层 LLM 推理优化（KV 缓存）、多平台部署（ARM/WSL2）、第三方 AI 提供商集成（Gemini/Fireworks/ElevenLabs）、以及通信渠道扩展（Signal）。项目在技术债务清理和功能广度上均有实质进展。

---

## 4. 社区热点

| 排名 | 议题 | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#176](https://github.com/moltis-org/moltis/issues/176) `[Feature]: Add datetime to system prompt context` | **16 评论**, 👍×1 | **历时2个月的长尾讨论**，最终通过 #855 以"非直观"方式解决——社区最初期望系统提示注入，但技术实现发现会破坏 KV 缓存。反映**功能需求与底层架构约束的张力**，维护者需在用户体验和性能间权衡 |
| 2 | [#824](https://github.com/moltis-org/moltis/issues/824) `[Feature]: don't auto-scroll to end of chat session if scrolled up` | 1 评论, 👍×0 | **典型的 UX 细节诉求**，用户阅读历史消息时被强制拉回底部打断心流。已有 PR [#846](https://github.com/moltis-org/moltis/pull/846) 实现"智能滚动+新消息指示器"方案 |
| 3 | [#828](https://github.com/moltis-org/moltis/issues/828) `[Bug]: Docker sandbox fails on WSL2 due to missing /sys/class/dmi` | 1 评论, 👍×0 | **开发环境兼容性痛点**，WSL2 用户无法使用沙箱功能，影响 Windows 开发者体验 |

**社区情绪判断**：用户对**本地部署体验**（WSL2、ARM、本地 LLM KV 缓存）和**聊天交互细节**（滚动行为）高度敏感，这些是"日常高频触点"，虽小但影响留存。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 根因 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | [#848](https://github.com/moltis-org/moltis/issues/848) Fireworks Fire Pass: JSON Schema enum None 不支持 | **已修复** | schema 规范化时未处理 `None` 枚举值，导致 Fireworks AI HTTP 400 | [#856](https://github.com/moltis-org/moltis/pull/856) | Fireworks AI 用户无法使用工具调用 |
| 🔴 **高** | [#849](https://github.com/moltis-org/moltis/issues/849) `parameters.required[0]: property is not defined` 回归 | **已修复** | `anyOf`/`oneOf` 联合类型合并时属性浅拷贝，Gemini 经 OpenRouter 时 schema 损坏 | [#856](https://github.com/moltis-org/moltis/pull/856) | Gemini/OpenRouter 工具调用失败 |
| 🟡 **中** | [#857](https://github.com/moltis-org/moltis/issues/857) Silent memory turn saves with wrong dates in filenames | **待处理** | 静默记忆轮次的文件名日期格式/时区错误 | — | 记忆文件管理混乱，可能影响记忆检索 |
| 🟡 **中** | [#828](https://github.com/moltis-org/moltis/issues/828) Docker sandbox fails on WSL2 | **已修复** | 尝试挂载宿主机不存在的 sysfs 路径 | [#853](https://github.com/moltis-org/moltis/pull/853) | WSL2/ARM 用户沙箱功能不可用 |
| 🟢 **低** | [#851](https://github.com/moltis-org/moltis/issues/851) MCP OAuth re-auth button missing from UI | **已修复** | UI 未暴露重新认证入口 | [#852](https://github.com/moltis-org/moltis/pull/852) | MCP OAuth 过期后需手动配置 |
| 🟢 **低** | [#735](https://github.com/moltis-org/moltis/issues/735) custom elevenlabs voices don't work | **已验证** | 自定义音色 ID 处理路径与预制音色不一致 | [#854](https://github.com/moltis-org/moltis/pull/854) | ElevenLabs 克隆/生成音色不可用 |

**稳定性评估**：今日 **100% 高严重度 Bug 当日修复**（#848/#849/#828），响应速度极佳。唯一待处理 #857 为数据一致性问题，建议优先跟进。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 纳入下一版本概率 | 关键信号 |
|:---|:---|:---|:---|:---|
| **MCP OAuth client_secret 配置支持** | [#850](https://github.com/moltis-org/moltis/issues/850) | 🔶 需求明确 | **高** | 与刚修复的 #851/#852 同属 MCP OAuth 体验，逻辑连贯 |
| **智能聊天滚动** | [#824](https://github.com/moltis-org/moltis/issues/824) + [#846](https://github.com/moltis-org/moltis/pull/846) | 🟢 PR 已提交 | **极高** | 前端实现完整，待代码审查 |
| **项目下拉框连接** | [#847](https://github.com/moltis-org/moltis/pull/847) | 🟢 PR 已提交 | **极高** | 修复"脚手架代码未连接 DOM"的技术债务，#838 关联 |
| **代码索引开关** | [#837](https://github.com/moltis-org/moltis/pull/837) | 🟢 PR 已提交 | **高** | 项目级功能控制，影响性能与隐私 |
| **内置子 Agent 预设** | [#844](https://github.com/moltis-org/moltis/pull/844) | 🟢 PR 已提交 | **高** | 降低新用户配置门槛，对标 Hermes/OpenClaw |
| **MCP 服务器管理 Skill** | [#840](https://github.com/moltis-org/moltis/pull/840) | 🟢 PR 已提交 | **中高** | 文档+配置驱动，提升 Agent 自治能力 |
| **Signal 渠道** | [#841](https://github.com/moltis-org/moltis/pull/841) | 🟢 **已合并** | ✅ 已纳入 | 通信渠道扩展，隐私导向用户场景 |

**路线图洞察**：Moltis 正从"功能堆砌期"进入**"体验打磨+企业就绪"阶段**——MCP 生态完善、多平台部署、预设配置降低门槛，均指向**生产环境可用性**。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **本地 LLM 部署** | #176 讨论 | 时间戳注入导致每次请求 KV 缓存失效，"本地模型慢上加慢" |
| **Windows 开发环境** | #828 | WSL2 二等公民体验，"Docker 沙箱直接崩溃" |
| **聊天阅读体验** | #824 | "被迫看底部新消息，历史上下文被打断" |
| **第三方 AI 提供商** | #848, #849 | "Fireworks/Gemini 工具调用突然 400 错误，无法定位" |
| **MCP 认证流程** | #851 | OAuth 过期后无重新认证入口，"只能删配置重来" |

### 满意信号

- **修复响应速度**：#849 回归问题当日报告当日修复，用户未留负面评论
- **架构透明性**：#855 的解决方案虽非用户最初预期，但 PR 详细解释了 KV 缓存机制，技术社区认可

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| **长期 Issue** | [#176](https://github.com/moltis-org/moltis/issues/176) datetime 上下文 | 2026-02-17（67天） | 已解决但讨论历史长，需关闭并更新文档 | 维护者确认 #855 方案后正式关闭，更新相关文档 |
| **待审查 PR** | [#846](https://github.com/moltis-org/moltis/pull/846) 智能滚动 | 2026-04-23 | UX 改进明确，拖久影响用户满意度 | 优先审查，前端改动风险低 |
| **待审查 PR** | [#847](https://github.com/moltis-org/moltis/pull/847) 项目下拉框 | 2026-04-23 | **技术债务典型**——脚手架代码未连接实际 DOM，反映开发流程问题 | 合并后建议复盘：如何避免"死代码"进入主干 |
| **待审查 PR** | [#837](https://github.com/moltis-org/moltis/pull/837) 代码索引开关 | 2026-04-22 | 功能完整，影响项目配置 schema | 2天内审查，避免与 #844 预设配置冲突 |
| **待审查 PR** | [#840](https://github.com/moltis-org/moltis/pull/840) MCP Skill | 2026-04-22 | 文档+代码量大，需验证 Agent 实际调用路径 | 安排核心维护者深度 review |
| **待审查 PR** | [#844](https://github.com/moltis-org/moltis/pull/844) 子 Agent 预设 | 2026-04-22 | 架构决策（Modes 设计）需确认 | 建议设计文档 review，影响长期扩展性 |
| **依赖更新** | [#845](https://github.com/moltis-org/moltis/pull/845) cargo bump | 2026-04-23 | 安全更新（openssl, rand） | 自动化合并或快速审查 |

---

## 附录：数据速查

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 9（新开/活跃 4，关闭 5）|
| PRs 更新 | 12（待合并 6，已合并/关闭 6）|
| 新版本 | 0 |
| 核心贡献者活跃 | `penso`（5 PR）、`Cstewart-HC`（3 PR）、`dependabot`（1 PR）|
| 当日修复率 | 高严重度 Bug 100%，整体 Issue 关闭率 55.6%（5/9）|

---

*本报告基于 GitHub 公开数据生成，不代表项目官方立场。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-24

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（曾用名 QwenPaw）  
> **报告日期**: 2026-04-24  
> **数据周期**: 过去 24 小时

---

## 1. 今日速览

CoPaw 昨日保持**高强度开发节奏**，50 条 Issues 和 50 条 PR 的双线活跃表明社区参与度健康。版本迭代加速，24 小时内连发 **v1.1.3.post1**（热修复）和 **v1.1.4-beta.1**（功能预览）两个版本，显示维护团队对稳定性的快速响应。PR 合并率高达 68%（34/50），Issue 关闭率 48%（24/50），项目整体吞吐效率良好。值得关注的是，**安全策略绕过、MCP 客户端假死、Windows 桌面端体验**三类问题形成集中反馈，可能成为近期技术债务清理的重点方向。

---

## 2. 版本发布

### [v1.1.3.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.3.post1) — 热修复版本
| 属性 | 内容 |
|:---|:---|
| **发布类型** | 紧急补丁（post-release） |
| **核心修复** | 回退 Defender 相关变更以避免误拦截（[#3717](https://github.com/agentscope-ai/QwenPaw/pull/3717)） |
| **桌面端改进** | pywebview 文件下载改用原生系统保存对话框，解决下载路径问题（[#3719](https://github.com/agentscope-ai/QwenPaw/pull/3719)） |

> **迁移注意**: 若从 v1.1.3 升级后遇到安全软件误报，此版本已回退相关代码。桌面端用户下载文件时将看到系统原生对话框而非内置路径选择器。

---

### [v1.1.4-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.4-beta.1) — 功能预览版本
| 属性 | 内容 |
|:---|:---|
| **发布类型** | 预发布（beta） |
| **变更内容** | 版本号升级至 1.1.4b1；文档图表语言问题修复；控制台增加 `.prettierignore` 并更新代码格式规范 |

> **风险提示**: 当前 beta 变更以工程化改进为主，无显著功能新增，适合愿意提前验证格式兼容性的开发者。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（推进功能与修复）

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#3739](https://github.com/agentscope-ai/QwenPaw/pull/3739) | rayrayraykk | **可配置免认证 IP 白名单** `allow_no_auth_hosts` | 🔴 高 — 替代硬编码 localhost 绕过，解决企业内网/容器场景下的 401 认证问题，直接回应 [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) |
| [#3730](https://github.com/agentscope-ai/QwenPaw/pull/3730) | hongxicheng | **修复 discord.py 正则表达式损坏**（conda-unpack Windows 路径转义问题） | 🟡 中 — 解决 Windows 打包后 Discord 频道无法导入的崩溃问题，回应 [#3677](https://github.com/agentscope-ai/QwenPaw/issues/3677) |
| [#1427](https://github.com/agentscope-ai/QwenPaw/pull/1427) | pan-x-c | **修复 Ollama/LMStudio 上下文长度限制** | 🟡 中 — 将 `max_tokens` 显式设为 `null` 解除默认短输出限制，改善本地模型任务完成率 |
| [#3652](https://github.com/agentscope-ai/QwenPaw/pull/3652) | misskaori | **安全策略命中时增加确认按钮** | 🟡 中 — 替代手动输入 `/approve` 命令，降低工具调用审批的操作摩擦 |
| [#3741](https://github.com/agentscope-ai/QwenPaw/pull/3741) | x1n95c | **ACP 文档润色与链接补充** | 🟢 低 — 提升 Agent Communication Protocol 文档可发现性 |

**整体迈进**: 安全认证体系从"硬编码特例"演进为"可配置策略"，Windows 打包生态的 conda-unpack 兼容性得到系统性修补，本地模型（Ollama/LMStudio）体验持续优化。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 🐾 Help Wanted: Open Tasks | **60** | OPEN | **社区贡献入口** — 长期维护的任务看板，P0-P2 优先级分层，但"认领后需 @维护者更新状态"的流程存在单点瓶颈，可能阻碍贡献者积极性 |
| 2 | [#2831](https://github.com/agentscope-ai/QwenPaw/issues/2831) Web console 写文件失败无法停止 | 9 | CLOSED | **控制中断可靠性** — AI 编码时参数缺失导致循环重试，用户点击停止按钮无效，暴露工具执行状态的"软中断"缺陷 |
| 3 | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) 禁用安全规则后仍被拦截 | 7 | OPEN | **安全策略可预测性** — `TOOL_CMD_IFS_INJECTION` 规则禁用后对 `git commit -m "$(date)"` 仍拦截，cron 场景下的命令注入检测存在误报，用户需要更细粒度的规则控制 |
| 4 | [#2317](https://github.com/agentscope-ai/QwenPaw/issues/2317) 部署后无法正常对话 | 7 | CLOSED | **新手 onboarding** — exe 部署后的配置诊断，典型"部署成功、运行失败"的入门摩擦 |
| 5 | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) MCP client TaskGroup 异常致 Agent 假死 | 5 | OPEN | **异步可靠性** — 钉钉/微信无响应但进程存活、console 可对话，MCP 内部 TaskGroup 异常未向上传播，诊断困难 |

**诉求聚类**: 社区对**"可控的中断机制"**（停止按钮有效）、**"可预测的安全策略"**（规则禁用即真禁用）、**"可观测的异步故障"**（假死而非崩溃）有强烈需求，均指向生产环境可靠性。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 修复状态 | 关联 PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) | 安全规则禁用后仍拦截 cron 命令 | **待修复** — 需规则引擎逻辑审查 | 无 |
| 🔴 **高** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | MCP TaskGroup 异常致 Agent 假死（无响应、无报错） | **待修复** — 需异常传播机制重构 | 无 |
| 🟡 **中** | [#3748](https://github.com/agentscope-ai/QwenPaw/issues/3748) | `qwenpaw update` 无法关闭已有进程，陷入循环提示 | **待修复** — 进程检测与 shutdown 命令状态不一致 | 无 |
| 🟡 **中** | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) | Windows Desktop 启动挂起 "Waiting for HTTP ready..." | **根因已定位** — TCP 300s 超时，HTTP 服务未响应 | [#3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) WIP |
| 🟡 **中** | [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) | Console SSE Unicode surrogate 序列化崩溃 | **待修复** — Pydantic 序列化层需处理非法 UTF-16 | 无 |
| 🟡 **中** | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) | cron 任务 `channel=weixin` 报 `KeyError` | **PR 待合并** — 注册名 `"weixin"` 与实例属性 `"wechat"` 不匹配 | [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) |
| 🟢 **低** | [#3546](https://github.com/agentscope-ai/QwenPaw/issues/3546) | 深色模式侧边栏文字重叠 | **待修复** — 纯前端 CSS 布局问题 | 无 |

> **回归风险**: v1.1.3.post1 回退的 Defender 相关代码可能重新引入 [#3717](https://github.com/agentscope-ai/QwenPaw/pull/3717) 原本试图解决的问题，需监控后续是否有新的安全软件兼容性报告。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|:---|
| **Unsloth Studio 本地模型提供商** | [#3759](https://github.com/agentscope-ai/QwenPaw/pull/3759) | PR 已开 | ⭐⭐⭐⭐⭐ | 复用现有 `OpenAIProvider` 模式，实现简洁，社区本地模型需求强劲 |
| **多模态消息支持（图片/文件）** | [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) | PR 已开（首贡献） | ⭐⭐⭐⭐☆ | 架构完整（MediaContent、Base64/URL/本地路径、向后兼容），但测试覆盖待确认 |
| **OpenAI Responses API 自定义提供商** | [#3531](https://github.com/agentscope-ai/QwenPaw/issues/3531) | Issue + 初步讨论 | ⭐⭐⭐☆☆ | 需求明确，但无对应 PR，需评估与现有 provider 体系的整合成本 |
| **钉钉长内容分段推送 + Card 消息** | [#3742](https://github.com/agentscope-ai/QwenPaw/issues/3742) | Issue 新开 | ⭐⭐⭐☆☆ | 企业场景刚需，但涉及通道协议变更，需设计 review |
| **右键上下文菜单（桌面/Web）** | [#3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) | Issue 新开 | ⭐⭐☆☆☆ | 体验优化类，非阻塞需求，优先级可能低于可靠性修复 |
| **Apple Silicon ARM 原生浏览器** | [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | Issue 长期开放 | ⭐⭐☆☆☆ | Playwright/Chromium 生态依赖，非 CoPaw 可控范围，可能需文档 workaround |

**路线图信号**: 本地模型提供商生态（Ollama → LM Studio → Unsloth）的扩展是明确方向；多模态能力是下一代交互的必争之地，首贡献者 PR 值得优先 review 以激励社区。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 痛点 | 典型反馈来源 | 场景 |
|:---|:---|:---|
| **"假死比崩溃更可怕"** | [#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) | 生产环境钉钉/微信静默无响应，后台日志正常，无法自动恢复，必须人工重启 |
| **"停止按钮是摆设"** | [#2831](https://github.com/agentscope-ai/QwenPaw/issues/2831) | AI 编码陷入循环重试时，UI 停止操作无法终止底层工具执行 |
| **"规则开关不可信"** | [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) | 安全策略 UI 禁用后，底层仍生效，导致自动化脚本（cron）被误拦截 |
| **"Windows 二等公民"** | [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555), [#3748](https://github.com/agentscope-ai/QwenPaw/issues/3748) | 桌面端启动挂起、更新时进程管理失效、任务栏图标为 Python 默认图标 |

### 🙂 满意点

- **快速迭代**: v1.1.3.post1 对 Defender 问题的 24 小时内响应
- **文档完善**: 备份恢复指南补充 Docker 卷挂载说明（[#3736](https://github.com/agentscope-ai/QwenPaw/pull/3736)）
- **安全审批简化**: 确认按钮替代 `/approve` 命令（[#3652](https://github.com/agentscope-ai/QwenPaw/pull/3652)）

### 🔍 使用场景洞察

> "使用 armbian RK3318 盒子运行 CoPaw" — [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549)  
> 边缘/嵌入式部署场景出现，对资源占用和 ARM 兼容性提出新需求。

> "通过 web 对话创建定时任务，AI 误操作为系统 crontab" — [#3513](https://github.com/agentscope-ai/QwenPaw/issues/3513)  
> 自然语言到特定领域 API 的意图对齐仍有 gap，需强化 function calling 的边界提示。

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高价值积压

| Issue/PR | 创建时间 | 当前状态 | 风险说明 |
|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 🐾 Open Tasks | 2026-03-25 | **31 天开放** | 社区贡献入口的单点瓶颈（需 @cuiyuebing 人工更新）可能抑制外部贡献者转化 |
| [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) Apple Silicon ARM 浏览器 | 2026-03-31 | **24 天开放** | M 系列 Mac 用户增长，性能劣化影响口碑，需评估是否文档 workaround 或推动上游 |
| [#3047](https://github.com/agentscope-ai/QwenPaw/issues/3047) MemorySearch 数据库文件无法打开 | 2026-04-07 | **17 天开放** | 内存搜索组件假设 SQLite 存在，与配置化存储后端设计冲突，影响多后端部署 |
| [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) ValidationError: call_id 非字符串 | 2026-04-17 | **7 天开放** | ARM 边缘设备上的运行时类型校验失败，可能涉及序列化层与架构的兼容性问题 |
| [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) 多模态消息支持 | 2026-04-16 | **8 天待 review** | 首贡献者 PR，长期无响应将打击社区积极性，建议优先分配 reviewer |

---

> **健康度评分**: 🟢 活跃（日均 100 条 Issues+PR 吞吐，版本迭代快）  
> **风险预警**: 🟡 可靠性债务累积（假死、中断、规则一致性），需从"功能交付"转向"质量加固"  
> **建议行动**: 设立 **v1.1.4 稳定性专项**，将 #3709、#3640、#3555、#3552 纳入阻塞性 issue，优先于新功能合入。

---

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-04-24

## 1. 今日速览

ZeptoClaw 今日呈现**高强度迭代态势**：24小时内 Issues 更新 19 条（11 活跃/新开，8 关闭）、PR 更新 17 条（14 已合并/关闭，3 待审），无新版本发布。核心贡献者 qhkm 与 manelsen 主导了安全基建、渠道扩展与 CI 稳固三大主线。项目处于**"功能爆发+质量加固"并行期**——单日关闭 8 个 Issue 和 14 个 PR 表明合并流水线运转高效，但同期新开 11 个 Issue 也显示产品边界快速扩张带来的需求压力。特别值得关注的是 **P1-critical 级别 Issue #537（二进制体积预算门控）** 的提出，标志着项目从"功能优先"转向"约束驱动"的成熟阶段。

---

## 2. 版本发布

**无新版本发布**（v0.x 延续）

---

## 3. 项目进展

### 已合并/关闭的关键 PR（14 条）

| PR | 作者 | 关联 Issue | 进展说明 |
|:---|:---|:---|:---|
| [#528](https://github.com/qhkm/zeptoclaw/pull/528) | manelsen | [#221](https://github.com/qhkm/zeptoclaw/issues/221) | **安全基建：工具执行审计链** — 实现内存级 SHA-256 哈希链，为每次工具调用生成防篡改记录，支持完整性验证 API。项目获得"可信执行"能力，满足企业合规诉求。 |
| [#527](https://github.com/qhkm/zeptoclaw/pull/527) | manelsen | [#450](https://github.com/qhkm/zeptoclaw/issues/450) | **安全加固：配置时 SSRF 验证** — 在 `onboard` 和配置加载阶段拦截恶意端点，新增 `--allow-private-endpoints` 标志。将运行时防御前移至配置层，降低攻击面。 |
| [#526](https://github.com/qhkm/zeptoclaw/pull/526) | manelsen | [#449](https://github.com/qhkm/zeptoclaw/issues/449) | **供应链安全：Skill 下载 SHA256 校验** — 扩展 ClawHub 元数据支持 digest，安装时自动验证响应头。补齐与 NemoClaw 的安全差距。 |
| [#524](https://github.com/qhkm/zeptoclaw/pull/524) | manelsen | [#340](https://github.com/qhkm/zeptoclaw/issues/340) | **可重复性：编码基准测试夹具** — 提供 `test-coding/` 与镜像原始失败状态的 `test-coding-pristine/`，支持不同 Agent 的公平对比。 |
| [#525](https://github.com/qhkm/zeptoclaw/pull/525) | manelsen | [#389](https://github.com/qhkm/zeptoclaw/issues/389) | **架构决策：拒绝 utility/lib crate 方案** — 经评估 Rig 框架后，记录"不采纳"决策，避免过早抽象带来的维护负担。 |
| [#523](https://github.com/qhkm/zeptoclaw/pull/523) | manelsen | [#522](https://github.com/qhkm/zeptoclaw/issues/522) | **兼容性修复：Telegram 配置解析** — 恢复遗留键兼容性，支持 `enabled` 省略时自动推断。 |
| [#529](https://github.com/qhkm/zeptoclaw/pull/529) | qhkm | [#534](https://github.com/qhkm/zeptoclaw/issues/534) | **CI 修复：Rust 1.95 Clippy 新 lint** — 自动修复 `collapsible_match` 和 `unnecessary_sort_by`，解除全仓库 CI 阻塞。 |
| [#542](https://github.com/qhkm/zeptoclaw/pull/542) / [#521](https://github.com/qhkm/zeptoclaw/pull/521) | qhkm / dependabot | — | **依赖维护：cargo-deny-action 2.0.16** — 解决 dependabot OAuth 工作流权限问题。 |
| [#520](https://github.com/qhkm/zeptoclaw/pull/520) | dependabot | — | taiki-e/install-action 2.68.21 → 2.75.7 |
| [#519](https://github.com/qhkm/zeptoclaw/pull/519) | dependabot | — | docker/build-push-action 7.0.0 → 7.1.0 |
| [#515](https://github.com/qhkm/zeptoclaw/pull/515) | dependabot | — | react-router 7.13.1 → 7.13.2 (panel) |
| [#510](https://github.com/qhkm/zeptoclaw/pull/510) | dependabot | — | astro 5.18.1 → 6.0.5 (landing/docs) |
| [#469](https://github.com/qhkm/zeptoclaw/pull/469) | dependabot | — | actions/download-artifact 8.0.0 → 8.0.1 |

**整体推进评估**：今日合并的 4 个功能 PR 全部聚焦**安全可信**（审计链、SSRF、SHA256、配置修复），构成 ZeptoClaw 从"实验性工具"向"生产级 Agent 运行时"跃迁的关键基础设施。manelsen 单日贡献 6 个 PR，成为事实上的第二维护者。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#541 Liquid AI (LFM) provider integration](https://github.com/qhkm/zeptoclaw/issues/541) | 2 | **边缘 AI 芯片叙事** — 非 Transformer 架构 + 端侧部署（LEAP SDK）与 ZeptoClaw "6MB 机器人大脑"定位高度契合，但评论仅 2 条表明社区对 Liquid AI 实际成熟度存疑，需技术验证。 |
| 2 | [#536 Feishu/Lark + Line 渠道](https://github.com/qhkm/zeptoclaw/issues/536) | 1 | **SEA 市场落地** — 明确指向新加坡/印尼 SMB 和中国出海企业，与 [#541](https://github.com/qhkm/zeptoclaw/issues/541) 共同构成"亚太边缘"战略双翼。已关闭，说明决策已定或拆分执行。 |
| 3 | [#221 Merkle hash-chain audit trail](https://github.com/qhkm/zeptoclaw/issues/221) | 1 | **信任基础设施** — "Tamper-evident"作为营销关键词被明确写入动机，反映 B 端客户采购决策需求。 |

**诉求洞察**：社区核心关切从"功能有无"转向**"可信可审"**——hash-chain、SSRF、SHA256 三连发并非偶然，而是 300+ stars 后商业化前夜的合规储备。qhkm 在 [#530](https://github.com/qhkm/zeptoclaw/issues/530) 中直言"about to pitch investors"，验证了这一判断。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 说明 |
|:---|:---|:---|:---|:---|
| **已修复** | Telegram 配置加载失败 ([#522](https://github.com/qhkm/zeptoclaw/issues/522)) | ✅ Closed | [#523](https://github.com/qhkm/zeptoclaw/pull/523) | 网关模式无法识别 `channels.telegram` 配置，遗留键兼容性问题 |
| **已修复** | CI 全面失败：Clippy lint + rustls-webpki 安全告警 ([#534](https://github.com/qhkm/zeptoclaw/issues/534)) | ✅ Closed | [#529](https://github.com/qhkm/zeptoclaw/pull/529) | Rust 1.95 引入新 lint，阻塞所有 PR 合并；RUSTSEC-2026-0098 漏洞 |
| **待观察** | 测试环境泄漏：`ZEPTOCLAW_AGENTS_DEFAULTS_MODEL` 跨测试污染 ([#533](https://github.com/qhkm/zeptoclaw/issues/533)) | 🟡 Open | — | 已知 flaky test，需 hermetic wrapper 根治 |

**稳定性评估**：今日无新增生产级 Bug，CI 阻塞问题已快速解除（<24h）。测试隔离债务 ([#533](https://github.com/qhkm/zeptoclaw/issues/533)) 为长期技术债，不影响主分支但拖累开发体验。

---

## 6. 功能请求与路线图信号

### 高优先级新功能（P1-P2）

| Issue | 优先级 | 纳入概率 | 路线图信号 |
|:---|:---|:---|:---|
| [#537 二进制体积预算门控](https://github.com/qhkm/zeptoclaw/issues/537) | **P1-critical** | 🔥 极高 | **战略防御工事** — "6MB 是护城河"写入项目记忆，CI 强制执行将锁定核心优势，预计 1-2 周内实现 |
| [#530 配置版本化 + 迁移](https://github.com/qhkm/zeptoclaw/issues/530) | **P1-critical** | 🔥 极高 | **商业化前必备** — 明确提及"pitch investors"，schema 锁定迫在眉睫，参考 Hermes Agent 模式 |
| [#531 ZEPTOCLAW_HOME 环境隔离](https://github.com/qhkm/zeptoclaw/issues/531) | P2-high | 🔥 高 | 多租户/容器化前提，与 [#530](https://github.com/qhkm/zeptoclaw/issues/530) 协同 |
| [#539 离线模式：Ollama/llama.cpp 回退](https://github.com/qhkm/zeptoclaw/issues/539) | P2-high | 🔥 高 | **边缘叙事核心** — "工厂机器人、矿船、远程传感器"场景，与 [#541](https://github.com/qhkm/zeptoclaw/issues/541) Liquid AI 形成"云-边-端"梯度 |
| [#538 MQTT 一级渠道](https://github.com/qhkm/zeptoclaw/issues/538) | P2-high | 🔥 高 | IoT 生态接入标准，Home Assistant/Node-RED/AWS IoT 即插即用 |
| [#540 Raspberry Pi 部署 walkthrough](https://github.com/qhkm/zeptoclaw/issues/540) | P2-high | 🔥 高 | **营销转化关键** — "6MB 营销文案需具体 demo"，R8r 硬件联动展示 |
| [#541 Liquid AI 提供商](https://github.com/qhkm/zeptoclaw/issues/541) | P2-high | 🔥 高 | PR [#543](https://github.com/qhkm/zeptoclaw/pull/543) 已开，纯 registry plumbing，实现成本低 |
| [#544 CI 扩展可选功能编译](https://github.com/qhkm/zeptoclaw/pull/544) | — | 🔥 高 | 防止功能漂移，与 [#545](https://github.com/qhkm/zeptoclaw/issues/545) 关联，待合并 |

### 中等优先级（P3）

| Issue | 说明 |
|:---|:---|
| [#535 Skill 安全扫描](https://github.com/qhkm/zeptoclaw/issues/535) | 社区 hub 信任机制，模式匹配实现成本低 |
| [#532 Shell 黑名单扩展](https://github.com/qhkm/zeptoclaw/issues/532) | 对标 Hermes Agent 33+ 模式，纯审计工作 |

**路线图判断**：下一版本（推测 v0.4.x）将聚焦 **"边缘就绪 + 可信交付"** ——离线能力、MQTT、体积门控、配置迁移构成核心交付包，Raspberry Pi walkthrough 作为发布亮点。

---

## 7. 用户反馈摘要

### 痛点与场景

| 来源 | 反馈内容 | 类型 |
|:---|:---|:---|
| [#522](https://github.com/qhkm/zeptoclaw/issues/522) Gantzfried | Telegram 配置在网关模式下静默失效，文档与实现脱节 | **文档/兼容性债务** |
| [#539](https://github.com/qhkm/zeptoclaw/issues/539) qhkm (产品) | "仅支持云 LLM 的 Agent 不适合工厂/矿船/远程传感器" | **场景缺失：离线刚需** |
| [#540](https://github.com/qhkm/zeptoclaw/issues/540) qhkm (产品) | "6MB 是营销文案，缺具体 demo" | **信任缺口：验证困难** |
| [#530](https://github.com/qhkm/zeptoclaw/issues/530) qhkm (产品) | "配置 schema 演变将破坏现有用户" | **升级焦虑** |
| [#533](https://github.com/qhkm/zeptoclaw/issues/533) | 并行测试环境泄漏导致 flaky，"root cause 是 env-leakage" | **开发体验** |

### 满意度信号

- **安全投入获认可**：审计链、SSRF、SHA256 三连发无社区阻力，反映企业用户沉默需求被准确捕捉
- **合并响应速度**：[#522](https://github.com/qhkm/zeptoclaw/issues/522) 从报告到修复 <48h，[#534](https://github.com/qhkm/zeptoclaw/issues/534) CI 阻塞 <24h 解除

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#517 bump sha2 0.10.9 → 0.11.0](https://github.com/qhkm/zeptoclaw/pull/517) | 2026-04-14 | dependabot 自动 PR，可能因审计链 PR [#528](https://github.com/qhkm/zeptoclaw/pull/528) 引入 sha2 依赖冲突 | 评估与 [#528](https://github.com/qhkm/zeptoclaw/pull/528) 的兼容性后合并，或关闭替换 |
| [#389 Evaluate utility/lib crate](https://github.com/qhkm/zeptoclaw/issues/389) | 2026-03-18 | 已有关闭 PR [#525](https://github.com/qhkm/zeptoclaw/pull/525) 记录决策，但 Issue 未显式关闭 | 维护者确认后关闭，避免僵尸 Issue |
| [#544 CI 扩展可选功能编译](https://github.com/qhkm/zeptoclaw/pull/544) | 2026-04-23 | 待审，涉及 `channel-email`, `google`, `provider-vertex`, `whatsapp-web` 四个可选路径 | 优先合并，防止新 PR 引入漂移 |

---

**日报生成依据**：GitHub Issues/PR 元数据、标签优先级、作者意图推断、项目历史上下文（Hermes Agent 模式引用、"6MB 护城河"项目记忆）。数据截止 2026-04-24 00:00 UTC。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-04-24

## 1. 今日速览

ZeroClaw 今日保持**极高活跃度**：24小时内 Issues 更新 50 条（90% 为活跃/新开，仅 10% 关闭），PR 更新 50 条（68% 待合并，32% 已合并/关闭），无新版本发布。社区讨论集中在 **v0.7.4 里程碑冲刺**、**Schema v3 破坏性迁移**、**多通道审批机制补全**及 **Anthropic/Gemini/Ollama 等提供商兼容性修复**。项目处于密集开发期，代码变动量大，稳定性风险需关注。

---

## 2. 版本发布

**无新版本发布。**

v0.7.4 里程碑正在推进中（[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)），原为 v0.7.2，因紧急发布 v0.7.3（broken tags blowout）后重新编号。当前多项 PR 阻塞于 Schema v3 批量迁移（[#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)），需全部完成后方可合并至 master。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（16 条中筛选）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #5492 | theonlyhennygod | **品牌统一**：所有 README 中代号 "Smooth Crab" → "Icy Crab"，含 30 个 i18n 翻译文件 | [PR #5492](https://github.com/zeroclaw-labs/zeroclaw/pull/5492) |
| #5304 | theonlyhennygod | **Bedrock 稳定性**：过滤空 content blocks，修复 daemon 重启后 400 错误 | [PR #5304](https://github.com/zeroclaw-labs/zeroclaw/pull/5304) |
| #5365 | theonlyhennygod | **Gateway 可靠性**：预构建 web dashboard 纳入 git，解决 brew 安装后 "Web dashboard not available" | [PR #5365](https://github.com/zeroclaw-labs/zeroclaw/pull/5365) |
| #5302 | theonlyhennygod | **成本追踪补全**：CLI/cron/gateway 场景补充成本上下文，此前仅通道代理有成本记录 | [PR #5302](https://github.com/zeroclaw-labs/zeroclaw/pull/5302) |
| #5305 | theonlyhennygod | **Qwen 认证修复**：通道提供商缓存中刷新过期 OAuth token | [PR #5305](https://github.com/zeroclaw-labs/zeroclaw/pull/5305) |
| #5369 | theonlyhennygod | **WebSocket 协议合规**：Canvas 端点回显 `Sec-WebSocket-Protocol`，修复浏览器连接拒绝 | [PR #5369](https://github.com/zeroclaw-labs/zeroclaw/pull/5369) |

**整体推进评估**：今日关闭 PR 以**修复类为主**，覆盖 Bedrock 兼容性、安装体验、成本可观测性、认证持久化等生产痛点。无重大功能 PR 合并，v0.7.4 核心功能（Schema v3、WASM 桥、PostgreSQL 后端回归）仍在待合并队列。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **#5719** [CLOSED] runtime.kind="native" 未绕过 Docker 执行 shell | 12 | **安全/运行时隔离**：用户期望 native 模式彻底禁用 Docker，实际仍被调用，存在供应链风险 | [Issue #5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) |
| 2 | **#2503** NapCat/OneBot 通道缺失 | 8 | **国内 IM 生态接入**：QQ 机器人协议支持，社区长期诉求 | [Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) |
| 3 | **#5877** v0.7.4 里程碑追踪 | 6 | **发布透明度**：维护者与贡献者协调 blocker 清单，体现治理成熟度 | [Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) |
| 4 | **#5847** `gateway.web_dist_dir` 文档缺失 | 6 | **文档-代码 gap**：配置项存在但无说明，用户无法启用 Web 仪表板 | [Issue #5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| 5 | **#5947** Schema v3 批量破坏性迁移 | 5 | **技术债务集中清理**：Mattermost 字段变更等需协调合并，避免部分着陆 | [Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |

**诉求分析**：社区核心矛盾在于 **"功能广度 vs 稳定性深度"** —— 用户迫切需求更多通道（QQ/Matrix）、更清晰的文档、更可控的安全模型，而维护团队正集中资源做架构重构（Schema v3、WASM、配置系统重写）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **S0 - 数据丢失/安全风险** | #5991 | Cron 任务失败：生成晨间摘要时数据获取异常 | 无 | [Issue #5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991) |
| **S0 - 数据丢失/安全风险** | #5847 | `gateway.web_dist_dir` 未文档化，用户无法安全配置 Web 仪表板路径 | 无 | [Issue #5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| **S1 - 工作流阻塞** | #6007 | **Anthropic provider 强制发送 `temperature`，Claude 4.7 拒绝请求** | 无 | [Issue #6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007) |
| **S1 - 工作流阻塞** | #5962 | **Ollama provider 工具调用失败，会话完全锁死** | 无 | [Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| **S1 - 工作流阻塞** | #6002 | Telegram → llama.cpp 链路中助手身份识别混乱，回复未定向到用户 | 无 | [Issue #6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) |
| **S1 - 工作流阻塞** | #5984 | **zeroclaw-desktop 启动崩溃："No provider set"** | 无 | [Issue #5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984) |
| **S2 - 降级行为** | #5844 | 记忆权重过高，cron 任务中当前 prompt 被历史记忆淹没 | 无 | [Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) |
| **S3 - 次要问题** | #5959 | Docker 镜像未复制 `web/dist`，仪表板不可用 | 无 | [Issue #5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959) |

**关键风险**：**Anthropic/Claude 4.7 兼容性断裂**（#6007）和 **Ollama 工具调用崩溃**（#5962）直接影响两大主流本地/云端提供商，且均无 fix PR。桌面端崩溃（#5984）阻碍 Tauri 应用推广。

---

## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 状态 | 纳入 v0.7.4 概率 | 链接 |
|:---|:---|:---|:---|:---|
| **Schema v3 配置迁移** | #5947 / #6019 | PR 待合并 | **高（blocker）** | [Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |
| **PostgreSQL 后端回归** | #6016 | PR 待合并 | **高** | [PR #6016](https://github.com/zeroclaw-labs/zeroclaw/pull/6016) |
| **WASM 执行桥（Extism）** | #5912 | 开发中 | **中** | [Issue #5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) |
| **多通道审批机制** | #6010 | PR 待合并 | **高** | [PR #6010](https://github.com/zeroclaw-labs/zeroclaw/pull/6010) |
| **Mattermost 多通道支持** | #5902 | PR 待合并 | **中** | [PR #5902](https://github.com/zeroclaw-labs/zeroclaw/pull/5902) |
| **Matrix 通道** | #3361 | 已关闭 | 已落地 | [Issue #3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361) |
| **NapCat/OneBot（QQ）** | #2503 | 开放，无 PR | **低** | [Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) |
| **多模型提供商并发** | #2998 | 开放，无 PR | **低** | [Issue #2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) |
| **Slack 线程严格提及** | #5992 | PR 待合并 | **中** | [PR #5992](https://github.com/zeroclaw-labs/zeroclaw/pull/5992) |

**路线图信号**：v0.7.4 聚焦 **"企业部署就绪"** —— 共享状态存储（PostgreSQL）、配置系统硬化（Schema v3）、安全审批全覆盖、插件隔离（WASM）。消费级功能（QQ 接入、多模型并发）被明确后置。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 反馈 |
|:---|:---|:---|
| **金融合规开发** | #5719 评论 | Jason Perlow（独立贡献者）开发 FINOS CDM 5.x 组合分析技能时，发现 native 模式 Docker 逃逸风险，**安全模型与宣传不符** |
| **Docker 部署困惑** | #5959, #5847 | 官方镜像 Web 仪表板不可用，文档缺失配置项，**"开箱即用"体验断裂** |
| **本地模型工具链** | #5962, #6002 | Ollama + llama.cpp 用户遭遇**会话锁死、身份识别混乱**，本地部署稳定性显著低于云端 |
| **Cron 自动化** | #5991, #5844 | 定时任务场景下**记忆干扰严重、错误恢复差**，生产自动化可靠性不足 |
| **成本可观测性** | #6001 | Gateway 聊天成功但 `/api/cost` 为零，**无 trace/cost 文件输出**，计费盲区 |

### 满意点

- Matrix 通道终于落地（#3361 关闭）
- 多通道审批补全进行中（#6010），安全机制逐步完善

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| **#2503 NapCat/OneBot 通道** | 2026-03-02 | 2026-04-23 | 国内用户流失 | 53 天无实质进展，需维护者回应是否纳入路线图 |
| **#2998 多模型提供商** | 2026-03-08 | 2026-04-23 | 企业扩展性 | 47 天开放，有 👍1 但无 PR，架构层面需 Schema v3 后评估 |
| **#2973 循环打印性能优化** | 2026-03-08 | 2026-04-23 | 大规模输出体验 | 47 天，附详细截图，无维护者认领 |
| **#5646 Ollama 嵌入未持久化** | 2026-04-11 | 2026-04-23 | 本地 RAG 功能残缺 | 13 天，brain.db 向量为空，影响记忆检索质量 |
| **#5735 解耦 gateway/tui-onboarding** | 2026-04-14 | 2026-04-24 | 编译时依赖膨胀 | 10 天，架构清洁度关键 PR，阻塞通道独立编译 |

---

**日报生成时间**：2026-04-24  
**数据范围**：GitHub 活动 2026-04-23 至 2026-04-24

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*