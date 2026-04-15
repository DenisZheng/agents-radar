# OpenClaw 生态日报 2026-04-06

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-06 00:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-04-06

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，24小时内 **500 条 Issues 更新**（361 活跃/新开，139 关闭）与 **500 条 PR 更新**（266 待合并，234 已合并/关闭），无新版本发布。社区焦点集中在**执行稳定性修复**（工具调用泄漏、心跳路由错误、模型回退失效）与**企业级功能扩展**（AWS Bedrock 集成、Lobster 工作流引擎硬化）。值得关注的是，i18n 支持 Issue 经过 120 条评论的长期讨论后于今日正式关闭，维护团队明确当前无多语言支持计划。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#60437](https://github.com/openclaw/openclaw/pull/60437) | steipete | 重构插件更新安装参数共享逻辑，统一 npm/ClawHub/应用市场流的参数构建器 | **工程债务清理**：减少 9 个通道插件的重复代码，为后续插件生态扩展奠定基础设施 |
| [#61560](https://github.com/openclaw/openclaw/pull/61560) | vincentkoc | 修复 GPT-5 覆盖层中的 em dash 字符问题 | **模型兼容性**：避免特定 Unicode 字符导致的解析失败 |
| [#61555](https://github.com/openclaw/openclaw/pull/61555) / [#61533](https://github.com/openclaw/openclaw/pull/61533) / [#61523](https://github.com/openclaw/openclaw/pull/61523) | mbelinky | Lobster 扩展三步走：托管 TaskFlow 模式 → 硬化嵌入式运行时 → 工作流进程内执行 | **工作流引擎成熟**：完成从子进程到进程内的架构迁移，支持状态持久化与审批流，为 Agent 自动化编排提供生产级能力 |
| [#49916](https://github.com/openclaw/openclaw/pull/49916) / [#49792](https://github.com/openclaw/openclaw/pull/49792) | maddwiz | 文档更新：新增 NemoSidecar 与 NovaSpine Memory 社区插件 | **生态建设**：第三方记忆与适配插件正式进入官方推荐列表 |

**整体进展评估**：今日合并 PR 聚焦**内部架构硬化**（Lobster 工作流引擎、插件系统重构）与**边缘修复**，属于"修内功"阶段。无面向终端用户的重大功能发布，但 Lobster 的进程内化是 Agent 工作流可靠性的关键里程碑。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#3460](https://github.com/openclaw/openclaw/issues/3460) - i18n & 本地化支持 | **120** | ⛔ CLOSED | **长期需求 vs 资源现实的冲突**。社区持续 2 个月施压多语言支持，维护团队最终明确关闭："当前无带宽支持多语言"。👍 仅 7 个，反映社区理解但失望。信号：国际化仍是最大未满足需求之一。 |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) - 原生 Agent 身份与信任验证 RFC | **68** | 🟡 OPEN | **企业级安全刚需**。MolTrust 提出的 ERC-8004/W3C DID/VC 集成方案，瞄准跨 Agent 身份验证与信任建立。零 👍 可能因技术门槛高，但评论深度显示企业用户关注。 |
| [#40631](https://github.com/openclaw/openclaw/issues/40631) - 执行停滞：确认任务但无动作 | **21** | 🟡 OPEN | **可靠性核心痛点**。每月 1-2 次的"假开始"执行状态 bug，直接影响生产环境信任度。用户明确区分"非模型质量问题"，要求状态机层面的修复。 |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) - Docker 中 brew 技能安装失败 | **20** | 🟡 OPEN | **容器化体验断裂**。Linux 容器内 brew 不可用导致技能安装失败，👍 15 显示广泛影响。反映技能系统与运行时环境假设的耦合问题。 |
| [#46049](https://github.com/openclaw/openclaw/issues/46049) - LLM 超时配置被忽略 | **20** | 🟡 OPEN | **配置系统失效**。24 小时配置被内部硬编码覆盖，导致长任务中断。企业批处理场景 blocker。 |

### 高反应 Issues
- [#54844](https://github.com/openclaw/openclaw/issues/54844) - GitHub Copilot GPT-5-mini 回归（👍 9）
- [#14593](https://github.com/openclaw/openclaw/issues/14593) - Docker brew 问题（👍 15）

---

## 5. Bug 与稳定性

### 🔴 严重/高优先级

| Issue | 类型 | 状态 | 影响 | Fix PR |
|:---|:---|:---|:---|:---|
| [#40631](https://github.com/openclaw/openclaw/issues/40631) | 执行状态机故障 | 🟡 OPEN | 生产环境任务假开始，无工具调用 | 无 |
| [#46049](https://github.com/openclaw/openclaw/issues/46049) | 配置系统失效 | 🟡 OPEN | 超时配置被忽略，长任务中断 | 无 |
| [#58878](https://github.com/openclaw/openclaw/issues/58878) | 心跳路由错误 | 🟡 OPEN | 子 Agent 会话污染，任务结果损坏 | 无 |
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | 模型工具执行回归 | 🟡 OPEN | GPT-5.3-Codex 更新后零工具调用 | 无 |
| [#54844](https://github.com/openclaw/openclaw/issues/54844) | 模型请求体无效 | 🟡 OPEN | Copilot GPT-5-mini 400 错误 | 无 |

### 🟡 中等优先级

| Issue | 类型 | 状态 | 备注 |
|:---|:---|:---|:---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具间文本泄漏至消息通道 | 🟡 OPEN | UX 问题，内部处理文本外泄 |
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | Session_send 会话未找到 | 🟡 OPEN | 3-22 更新后 Agent 间通信回归 |
| [#51056](https://github.com/openclaw/openclaw/issues/51056) | OpenRouter 认证头缺失 | 🟡 OPEN | 401 错误，配置失效 |
| [#59598](https://github.com/openclaw/openclaw/issues/59598) | 嵌入式运行故障转移超时 | 🟡 OPEN | 4-1 更新后新增 |
| [#61093](https://github.com/openclaw/openclaw/issues/61093) | Claude-cli 后端模型目录注册失败 | ⛔ CLOSED | 4-2 更新回归，👍 3，**已关闭** |
| [#59437](https://github.com/openclaw/openclaw/issues/59437) | WhatsApp 音频转录回归 | ⛔ CLOSED | 4-1 版本失效，3-7 正常，**已关闭** |

### 稳定性趋势
- **回归密集区**：2026.3.22 - 2026.4.2 版本窗口，多次更新引入 Agent 通信、模型执行、通道集成故障
- **配置系统信任危机**：多个 Issue 指向配置项（超时、回退、模型选择）被运行时忽略或覆盖

---

## 6. 功能请求与路线图信号

### 用户提出的关键需求

| Issue | 需求 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | 原生 Agent 身份/信任验证 | 企业 RFC 级别提案，关联 ERC-8004 | ⭐⭐⭐ 中-高（企业市场需要） |
| [#30055](https://github.com/openclaw/openclaw/issues/30055) | OAuth vs API Key 显式选择 + 回退链 | 路由系统改造需求，👍 2 | ⭐⭐⭐ 中（配置系统重构契机） |
| [#22282](https://github.com/openclaw/openclaw/issues/22282) | 基于速率限制头的主动模型回退 | 预防性 429 避免，架构改动小 | ⭐⭐⭐⭐ 高（稳定性投资） |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | 子 Agent 完成后扩展钩子 | 轨迹记录/审计需求 | ⭐⭐⭐ 中（企业合规） |
| [#28106](https://github.com/openclaw/openclaw/issues/28106) | Agent 间任务委托协议（Agent 经济） | 宏大愿景，无具体实现路径 | ⭐⭐ 低-中（长期路线图） |
| [#51372](https://github.com/openclaw/openclaw/issues/51372) | Gemini 上下文缓存支持 | 成本优化，Anthropic 已有实现 | ⭐⭐⭐⭐ 高（对标竞品，PR 就绪） |

### 已有关键 PR 预示的方向

| PR | 功能 | 路线图意义 |
|:---|:---|:---|
| [#38780](https://github.com/openclaw/openclaw/pull/38780) | 上下文压力感知续接（CONTINUE_WORK/DELEGATE） | **Agent 自主性升级**：Agent 自主决定跨轮次继续工作，为长任务自治奠定基础 |
| [#61547](https://github.com/openclaw/openclaw/pull/61547) | Bedrock 嵌入提供商 | **AWS 生态深度集成**：企业级 RAG 基础设施 |
| [#51762](https://github.com/openclaw/openclaw/pull/51762) | 可配置默认 Agent ID | **单 Agent 部署体验**：消除 "main" 幽灵目录，简化自定义命名 |
| [#60951](https://github.com/openclaw/openclaw/pull/60951) | 会话后续轮次 API + 网关重启扩展 | **插件主动能力**：插件可调度 Agent 回合，冷会话激活 |

---

## 7. 用户反馈摘要

### 核心痛点

| 主题 | 典型反馈 | 来源 Issue |
|:---|:---|:---|
| **执行可靠性焦虑** | "助手确认请求但无执行开始...这不是模型质量问题，是执行状态 bug" | [#40631](https://github.com/openclaw/openclaw/issues/40631) |
| **配置系统不信任** | "配置 24 小时超时，请求仍在更短时间内终止" | [#46049](https://github.com/openclaw/openclaw/issues/46049) |
| **容器化体验断裂** | "Docker 官方镜像内 brew 技能安装失败" | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| **更新即回归恐惧** | "3-22 更新后主 Agent 无法联系其他 Agent" | [#52875](https://github.com/openclaw/openclaw/issues/52875) |
| **内部状态外泄** | "工具调用间的文本泄漏到 Slack/iMessage" | [#25592](https://github.com/openclaw/openclaw/issues/25592) |

### 使用场景洞察

- **企业批处理**：长任务超时配置失效直接影响自动化工作流
- **多 Agent 编排**：Agent 间通信故障阻碍复杂任务分解
- **移动优先**：iOS TestFlight 申请持续（[#44074](https://github.com/openclaw/openclaw/issues/44074), [#56265](https://github.com/openclaw/openclaw/issues/56265)），手机作为辅助输入设备需求明确
- **中国用户群体**：飞书通道问题、中文翻译反馈 Issue 活跃

### 满意度信号

- ✅ Lobster 工作流引擎进程内化获积极关注（mbelinky 三连 PR）
- ✅ 社区插件（NovaSpine, NemoSidecar）进入官方文档
- ❌ i18n 明确关闭引发长期需求者失望

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>30天，高影响）

| Issue | 天数 | 核心问题 | 行动建议 |
|:---|:---|:---|:---|
| [#30075](https://github.com/openclaw/openclaw/issues/30075) | 37 | 内存搜索嵌入获取忽略 HTTP_PROXY | 企业网络环境 blocker，需网关侧修复 |
| [#29564](https://github.com/openclaw/openclaw/issues/29564) | 37 | 模型回退配置被静默覆盖 | 配置系统可靠性核心问题 |
| [#30096](https://github.com/openclaw/openclaw/issues/30096) | 37 | Cron 锁在网关重启后持久化 | 定时任务可靠性，生产环境风险 |
| [#30570](https://github.com/openclaw/openclaw/issues/30570) | 36 | OpenClaw 浏览器配置断开连接 | 2.26 版本回归，浏览器自动化场景 |
| [#30316](https://github.com/openclaw/openclaw/issues/30316) | 36 | Telegram 重复消息 | 通道集成质量，用户体验 |
| [#30172](https://github.com/openclaw/openclaw/issues/30172) | 36 | 飞书通道 + 插件验证失败 | 中国市场关键通道 |
| [#22282](https://github.com/openclaw/openclaw/issues/22282) | 44 | 主动速率限制感知回退 | 稳定性投资，实现成本可控 |

### 维护者关注提醒

- **配置系统一致性**：[#46049](https://github.com/openclaw/openclaw/issues/46049)、[#29564](https://github.com/openclaw/openclaw/issues/29564)、[#30055](https://github.com/openclaw/openclaw/issues/30055) 指向同一根因——配置层与运行时层脱节，建议专项重构
- **Agent 通信可靠性**：[#52875](https://github.com/openclaw/openclaw/issues/52875)、[#58878](https://github.com/openclaw/openclaw/issues/58878)、[#40631](https://github.com/openclaw/openclaw/issues/40631) 构成 3-4 月回归集群，需根因分析
- **中国企业用户**：飞书通道 Issue [#30172](https://github.com/openclaw/openclaw/issues/30172) 37 天无响应，可能影响区域采用

---

*日报生成时间：2026-04-06 | 数据来源：GitHub API 聚合 | 项目地址：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-04-06

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能可用"向"生产可靠"的关键跃迁**。头部项目（OpenClaw、NanoClaw、IronClaw）日均 Issue/PR 处理量超 500 条，社区焦点从功能扩展转向稳定性加固（配置系统一致性、Agent 通信可靠性、资源泄漏治理）。多项目同步推进**工作流引擎**（Lobster/Seahorse）、**MCP 协议标准化**、**企业级可观测性**三大基础设施，标志着生态从"玩具级"向"平台级"演进。与此同时，**容器化部署摩擦**（K8s 原生支持、Apple Container、跨平台可移植性）成为共性瓶颈，反映企业采纳加速带来的工程化挑战。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 (361活跃/139关闭) | 500 (266待合并/234已处理) | ❌ 无 | 🔶 **高负荷运转** — 体量最大但配置系统信任危机、3-4月回归集群需根因治理 |
| **NanoBot** | 19 (12/7) | 121 (96/25) | ❌ 无 | 🟢 **质量巩固期** — v0.1.4.post6 回归修复中，安全沙箱与搜索稳定性进展扎实 |
| **PicoClaw** | 16 (13/3) | 16 (14/2) | ✅ Nightly v0.2.5-nightly.20260405 | 🔶 **功能爆发期** — Seahorse LCM 记忆引擎落地，但 PR 积压 14 条需审阅带宽 |
| **NanoClaw** | 7 | 41 (21/20) | ❌ 无 | 🟢 **架构升级期** — OAuth 移除、多实例支持、MCP 标准化，向企业平台演进 |
| **NullClaw** | 9 (0/9) | 14 (0/14) | ✅ v2026.4.4 | 🟢 **高效收敛期** — Issue 清零策略，manelsen 单日闭环 7 个 Issue，响应极快 |
| **IronClaw** | 5 (2/3) | 45 (29/16) | ❌ 无 (staging 晋升中) | 🟢 **质量加固期** — E2E 测试框架、CI 安全加固、供应链安全投入显著 |
| **LobsterAI** | 2 (1/1) | 6 (6/0) | ❌ 无 | 🔶 **审查瓶颈期** — 6 PR 全部待审，功能交付密集但合并吞吐不足 |
| **Moltis** | 6 (0/6) | 9 (1/8) | ✅ 20260405.06 | 🟢 **快速收敛期** — Bug 清零，Artifact Attestations 供应链安全领先 |
| **CoPaw** | 39 (34/5) | 8 (5/3) | ❌ 无 | 🔴 **稳定性攻坚期** — CPU busy loop、进程泄漏、安全漏洞三重危机 |
| **TinyClaw** | 0 | 0 | ❌ 无 | ⚪ **休眠状态** |
| **ZeptoClaw** | 0 | 0 | ❌ 无 | ⚪ **休眠状态** |

> **注**：OpenClaw 数据量级显著高于其他项目（10-50 倍），反映其生态主导地位；NullClaw/Moltis 呈现"小而美"的高效维护模式。

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | 具体表现 |
|:---|:---|
| **生态规模** | 24h 500 Issues/500 PRs，体量超其他项目总和，插件生态（ClawHub）成熟 |
| **企业功能深度** | Lobster 工作流引擎进程内化（[#61555](https://github.com/openclaw/openclaw/pull/61555)）、AWS Bedrock 集成、上下文压力感知续接 |
| **社区基础设施** | i18n 讨论 120 条评论的长期沉淀，RFC 级别提案（ERC-8004 Agent 身份验证） |

### 技术路线差异
| 对比项 | OpenClaw | 竞品（NanoClaw/PicoClaw） |
|:---|:---|:---|
| **架构哲学** | "重内核" — 内置工作流引擎、记忆系统、多通道路由 | "轻内核+插件" — NanoClaw 移 OAuth 简化，PicoClaw 强调 Skill 自主发现 |
| **记忆方案** | 上下文压力感知 + 显式 DELEGATE/CONTINUE_WORK 决策 | PicoClaw Seahorse LCM（SQLite+DAG）、NanoClaw NovaSpine 社区插件 |
| **部署假设** | 传统服务器/Docker，K8s 原生支持滞后 | NanoClaw 探索 Apple Container，IronClaw 明确 K8s Runtime 诉求 |

### 社区规模对比
- **贡献者集中度**：OpenClaw mbelinky 单日 3 PR（Lobster 三步走），但 manelsen（NullClaw）、penso（Moltis）展现更高个人产出效率
- **企业用户占比**：OpenClaw #49971（Agent 身份验证 RFC）、#46049（超时配置失效）反映企业批处理场景；IronClaw #2023（K8s Runtime）直接来自企业安全合规诉求

### 关键风险
> **"配置系统信任危机"** — 多个 Issue 指向配置项被运行时忽略/覆盖（[#46049](https://github.com/openclaw/openclaw/issues/46049)、[#29564](https://github.com/openclaw/openclaw/issues/29564)），与 NanoClaw 的"OAuth 移除简化"形成对比，显示架构债务累积。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **工作流引擎/确定性编排** | OpenClaw (Lobster)、PicoClaw (Seahorse)、IronClaw (#2045 `ironclaw-lobster`)、NullClaw (#778) | 从"LLM 随机推理"到"可预测、可审计、可回滚"的任务编排；Lobster 进程内化是生产级里程碑 | 🔴 高 |
| **MCP 协议标准化** | NanoClaw (#1654 Google Workspace MCP)、Moltis (#555 Streamable HTTP MCP)、CoPaw (MCP Client 热重载泄漏) | 工具/技能生态的互操作性；MCP 服务器配置标准化（全局 `.mcp.json` 合并） | 🟡 中高 |
| **容器化/K8s 原生部署** | IronClaw (#2023 K8s Runtime)、NanoClaw (#1659 Apple Container)、PicoClaw (#2349 Docker 优化)、CoPaw (Windows 容器问题) | Docker-in-Docker 特权模式被安全团队拒绝，需要 cri-o/containerd 集成或原生 Apple 容器 | 🔴 高 |
| **可观测性/错误追踪** | IronClaw (Sentry E2E)、NullClaw (Heartbeat 日志)、Moltis (错误透传)、CoPaw (Token 计数器崩溃) | 生产环境需要分布式追踪、性能监控、错误聚合；从"Service unavailable"到真实错误透传 | 🟡 中高 |
| **Agent 间通信与身份** | OpenClaw (#58878 心跳路由错误、#49971 Agent 身份 RFC)、PicoClaw (SkillManager 动态创建)、NullClaw (#711 Cross-Agent Memory) | 多 Agent 协作的会话隔离、信任建立、内存同步；从"单 Agent"到"Agent 经济" | 🟡 中高 |
| **本地模型/边缘部署** | PicoClaw (#430 Ollama 超时、#2816 ARM 平台)、NanoBot (#2590 MiniMax 失效、#2829 Ollama 工具调用)、CoPaw (llama.cpp 集成) | 隐私优先场景下的离线能力；固定超时与长推理矛盾、ARM 架构支持缺口 | 🟡 中高 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级工作流编排、多通道统一、插件生态 | 中大型团队，需复杂 Agent 自动化 | 重内核，Lobster 进程内工作流引擎；配置系统复杂但功能全 |
| **NanoBot** | 稳定性优先、长期运行可靠性、安全沙箱 | 个人长期助手用户，Windows 桌面环境 | 极简 Rust 内核，bubblewrap 沙箱，"完爆竞品"的口碑定位 |
| **PicoClaw** | 记忆架构创新（Seahorse LCM）、多平台覆盖（Android/WebUI） | 中文用户群体，本地化部署偏好 | SQLite+DAG 摘要层级，Skill 自主发现，配置管理待统一 |
| **NanoClaw** | 多实例多租户、MCP 标准化、供应商解绑 | SaaS 化部署、企业集成商 | TypeScript 全栈，OAuth 移除简化，向平台级演进 |
| **NullClaw** | 快速响应、Issue 清零、知识图谱记忆 | 中小团队，追求维护效率 | 轻量 Rust，manelsen 单人高效维护，确定性工作流诉求强烈 |
| **IronClaw** | WASM 沙箱、多通道 E2E 测试、云原生就绪 | 企业级平台嵌入、NEAR 生态 | WASM 插件体系，Live/Replay 双模式测试，K8s Runtime 探索 |
| **Moltis** | 供应链安全、模型网关、企业通道（Matrix/Teams） | 金融/医疗等合规敏感行业 | SLSA v1.0 Build Level 2，Artifact Attestations 领先 |
| **LobsterAI** | 定时任务自动化、邮件触发、模型故障转移 | 网易有道生态用户，工作流自动化 | 与 OpenClaw Lobster 名称撞车但独立，UI 体验优先 |
| **CoPaw** | 多智能体协作、国产模型接入、即时通讯渠道 | 中国开发者，微信/WhatsApp 集成需求 | Python 异步架构，AnyIO 性能问题凸显，稳定性债务较重 |

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段（功能爆发）
| 项目 | 特征 | 关键信号 |
|:---|:---|:---|
| **PicoClaw** | 记忆引擎落地，PR 积压 | Seahorse LCM 合并，14 条 PR 待审 |
| **NanoClaw** | 架构重构密集 | OAuth 移除、多实例、MCP 标准化三连发 |
| **CoPaw** | 渠道扩展激进 | WhatsApp、MiniMax、心跳机制并行推进 |

### 🛡️ 质量巩固阶段（稳定性优先）
| 项目 | 特征 | 关键信号 |
|:---|:---|:---|
| **NanoBot** | 回归修复，安全沙箱 | post6 版本问题清理，bubblewrap 隔离 |
| **IronClaw** | 测试基础设施，供应链安全 | E2E 双模式框架，Dependabot SHA 锁定 |
| **NullClaw** | Issue 清零，快速响应 | 24h 9 Issue 全关闭，manelsen 高效维护 |
| **Moltis** | Bug 清零，供应链领先 | 6 Issue 全关闭，Artifact Attestations 发布 |

### ⚠️ 风险警示
| 项目 | 风险 | 建议 |
|:---|:---|:---|
| **OpenClaw** | 配置系统信任危机，3-4 月回归集群 | 专项重构配置层，根因分析 Agent 通信故障 |
| **CoPaw** | CPU busy loop、进程泄漏、安全漏洞三重危机 | 暂停功能开发，专注稳定性 hotfix |
| **LobsterAI** | 审查瓶颈，6 PR 全部待审 | 建立优先级队列，48h 内完成安全/修复类初审 |

---

## 7. 值得关注的趋势信号

### 信号一：从"LLM 封装"到"确定性基础设施"
> **证据**：OpenClaw Lobster 进程内化、PicoClaw Seahorse LCM、IronClaw #2045 工作流 Shell 诉求、NullClaw #778 确定性引擎  
> **价值**：AI Agent 开发者需关注**状态机、事件溯源、工作流编排**等传统工作流技术，纯 LLM 随机推理无法满足生产审计需求。

### 信号二：供应链安全成为企业采纳门槛
> **证据**：IronClaw Dependabot + SHA 锁定、Moltis SLSA v1.0 Artifact Attestations、NanoClaw OAuth 移除简化凭证代理  
> **价值**：企业级 Agent 平台需内置**SBOM 生成、签名验证、最小权限凭证管理**，开源项目应优先集成 Sigstore/GitHub Attestations。

### 信号三：容器运行时多元化挑战
> **证据**：IronClaw K8s Runtime 诉求、NanoClaw Apple Container 失败、PicoClaw Docker Alpine→Debian 迁移、CoPaw Windows 容器问题  
> **价值**：不能假设 Docker Desktop 无处不在，需抽象 Runtime 接口，支持 cri-o/containerd/Apple Container 多后端。

### 信号四："观察者 Agent"与静默处理模式兴起
> **证据**：PicoClaw #2126 静默监听诉求、CoPaw 多窗口按任务 ID 合并需求  
> **价值**：群聊场景从"每条消息必响应"向"背景智能体"演进，Agent 需要**显式@触发、轨迹记录、审计日志**能力。

### 信号五：国产模型与本地化部署加速
> **证据**：CoPaw MiniMax/Qwen3、PicoClaw 30B 本地模型、NanoBot MiniMax 失效回归、OpenClaw 飞书通道问题 37 天未响应  
> **价值**：中文市场与边缘部署需求旺盛，但**长推理超时、工具调用兼容性、区域化通道维护**成为差异化竞争点。

---

*报告生成时间：2026-04-06*  
*数据来源：各项目 GitHub 公开数据*  
*分析框架：活跃度-稳定性-成熟度三维评估*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-06

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **19 条 Issue 动态**（12 活跃/新开，7 关闭）和 **121 条 PR 动态**（96 待合并，25 已合并/关闭）。社区聚焦三大主题：**安全加固**（exec 工具沙箱化、环境变量隔离）、**搜索稳定性**（DuckDuckGo 无限挂起问题集中爆发）、**多平台扩展**（WebSocket、Teams、A2A 协议等新通道）。项目技术债务得到积极清理，但 v0.1.4.post6 版本引入的回归问题（MiniMax 失效、嵌入式平台故障）仍需关注。

---

## 2. 版本发布

**无新版本发布**

> 最新版本仍为 v0.1.4.post6（2026-03-28），该版本引入的若干回归问题正在修复中。

---

## 3. 项目进展

### 已合并/关闭的关键 PRs

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#2805](https://github.com/HKUDS/nanobot/pull/2805) | hoaresky | **DuckDuckGo 搜索超时保护**：为 `asyncio.to_thread(ddgs.text)` 添加 asyncio 级超时，修复无限挂起导致会话瘫痪 | [#2804](https://github.com/HKUDS/nanobot/issues/2804), [#2828](https://github.com/HKUDS/nanobot/issues/2828) |
| [#1940](https://github.com/HKUDS/nanobot/pull/1940) | kinchahoy | **exec 沙箱化**：使用 bubblewrap 隔离 exec 调用，阻止访问工作区外文件，缓解 [#1873](https://github.com/HKUDS/nanobot/issues/1873) 安全漏洞 | [#1873](https://github.com/HKUDS/nanobot/issues/1873) |
| [#2794](https://github.com/HKUDS/nanobot/pull/2794) | JackLuguibin | **代码质量**：Hook 方法调用重构，增强错误日志可追溯性 | - |
| [#2793](https://github.com/HKUDS/nanobot/pull/2793) | IlyaSemenov | **Telegram 功能**：支持 DM 线程（2025年10月 Telegram 新特性） | - |
| [#697](https://github.com/HKUDS/nanobot/pull/697) | CyranoB | **Provider 扩展**：新增 Synthetic 开源模型网关支持 | - |
| [#239](https://github.com/HKUDS/nanobot/pull/239) | shubham-kr2002 | **上下文优化**：工具结果智能截断，解决 18+ 工具调用导致的上下文爆炸（70% 失败率→显著改善） | - |

**整体推进评估**：安全架构（沙箱+隔离）和稳定性（搜索超时、上下文管理）取得实质性进展，为生产环境部署奠定基础。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---|:---|
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) **config.json 密钥泄露风险** | 10 | 要求核心 agent 以不同用户运行，禁止访问 config.yaml | 企业/容器部署的安全合规痛点；PR [#1940](https://github.com/HKUDS/nanobot/pull/1940) 部分缓解但未完全解决权限分离 |
| [#2774](https://github.com/HKUDS/nanobot/issues/2774) **与 OpenClaw 实测对比** | 6 | 用户主动分享 Windows 长期运行体验：NanoBot 稳定性"完爆"竞品 | **口碑传播信号**：社区自发竞品对比，认可项目可靠性；可作为营销素材 |
| [#2590](https://github.com/HKUDS/nanobot/issues/2590) **v0.1.4.post6 MiniMax 失效** | 4 | 升级后内置 MiniMax provider 无法工作 | 版本回归问题，影响中文用户群体 |

### 高价值 PR 讨论

| PR | 意义 |
|:---|:---|
| [#2830](https://github.com/HKUDS/nanobot/pull/2830) + [#2831](https://github.com/HKUDS/nanobot/pull/2831) | **安全架构双 PR**：环境变量插值 + exec 环境隔离，构建"网关持有密钥、agent 无法读取"的安全边界 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2828](https://github.com/HKUDS/nanobot/issues/2828) | DuckDuckGo 搜索导致**整个系统挂起**，Proxmox 需强制停止 | ✅ **已修复** [#2805](https://github.com/HKUDS/nanobot/pull/2805) |
| 🔴 **高** | [#2804](https://github.com/HKUDS/nanobot/issues/2804) | DuckDuckGo 无限阻塞，同会话所有消息卡住 8+ 小时 | ✅ 同上 |
| 🟡 **中** | [#2826](https://github.com/HKUDS/nanobot/issues/2826) | `restrictToWorkspace=true` 仍允许删除任意位置文件 | 🔄 **待修复**（安全边界绕过） |
| 🟡 **中** | [#2816](https://github.com/HKUDS/nanobot/issues/2816) | 全志 H618 嵌入式平台 post6 无法回复（CLI+飞书） | 🔄 **待调查**（ARM 架构回归） |
| 🟡 **中** | [#2590](https://github.com/HKUDS/nanobot/issues/2590) | MiniMax provider post6 失效 | 🔄 **待修复** |
| 🟡 **中** | [#2829](https://github.com/HKUDS/nanobot/issues/2829) | Ollama 工具调用完全损坏（gemma4 等模型） | 🔄 **待修复** |
| 🟡 **中** | [#2796](https://github.com/HKUDS/nanobot/issues/2796) | Exec 安全策略过度拦截 localhost，破坏 PinchTab 等本地服务集成 | 🔄 **需策略调整** |
| 🟢 **低** | [#2795](https://github.com/HKUDS/nanobot/issues/2795) | 升级后 Telegram 显示思考过程（非仅结果） | 🔄 行为变更，待确认是否为预期 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 纳入可能性评估 |
|:---|:---|:---|
| [#2820](https://github.com/HKUDS/nanobot/issues/2820) → [#2832](https://github.com/HKUDS/nanobot/pull/2832) | `/status` 命令扩展：显示搜索配额（Tavily 等） | ⭐⭐⭐ **高** — PR 已提交，实现完整 |
| [#2819](https://github.com/HKUDS/nanobot/issues/2819) | WebSocket Server Channel：实时推送 agent 消息 | ⭐⭐⭐ **高** — 架构合理，与现有网关模式契合 |
| [#2798](https://github.com/HKUDS/nanobot/issues/2798) | Unified Session：跨平台（Discord/Telegram 等）共享会话 | ⭐⭐⭐ **高** — 用户粘性关键功能 |
| [#2600](https://github.com/HKUDS/nanobot/pull/2600) | Microsoft Teams 官方通道 | ⭐⭐⭐ **中** — PR 存在，需 review 资源 |
| [#1368](https://github.com/HKUDS/nanobot/pull/1368) | A2A 协议支持（Google Agent2Agent） | ⭐⭐⭐ **中** — 生态互操作性，官方 SDK 集成 |
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) | Web Chat 通道（SSE 流式+多会话 UI） | ⭐⭐⭐ **中** — 与 [#2819](https://github.com/HKUDS/nanobot/issues/2819) 互补 |
| [#722](https://github.com/HKUDS/nanobot/pull/722) | HTTP API 通道（REST 端点） | ⭐⭐⭐ **中** — 与 WebSocket 方案需协调 |

**路线图信号**：项目正从"IM 机器人框架"向"通用 Agent 网关"演进，通道层（Channel）扩展是明确方向。

---

## 7. 用户反馈摘要

### ✅ 满意度亮点
> *"nanobot非常稳定，完爆openclaw... 一如既往的稳定，现在已经养的很好用了"* — [#2774](https://github.com/HKUDS/nanobot/issues/2774)  
> **关键价值**：长期运行稳定性、Windows 环境可靠性

### ❌ 痛点集中区

| 痛点 | 典型反馈 | 来源 |
|:---|:---|:---|
| **搜索可靠性** | DuckDuckGo 挂起导致"只能强制停止" | [#2828](https://github.com/HKUDS/nanobot/issues/2828) |
| **版本回归** | "post5 是好的，post6 之后没办法聊天" | [#2816](https://github.com/HKUDS/nanobot/issues/2816) |
| **安全策略误伤** | "SSRF 保护过度，localhost 也被封" | [#2796](https://github.com/HKUDS/nanobot/issues/2796) |
| **ARM 支持** | 嵌入式/ARM 平台依赖安装失败 | [#2818](https://github.com/HKUDS/nanobot/issues/2818) |
| **工具调用失效** | Ollama 本地模型"完全无法使用工具" | [#2829](https://github.com/HKUDS/nanobot/issues/2829) |

### 🎯 使用场景洞察
- **个人长期助手**：Windows 桌面环境，重视稳定性胜过功能丰富度
- **企业/容器部署**：强烈需求安全隔离（config 密钥保护、工作区限制）
- **本地化优先**：Ollama 本地模型 + 嵌入式设备（ARM）运行

---

## 8. 待处理积压

| 类型 | 条目 | 滞留时间 | 风险/建议 |
|:---|:---|:---|:---|
| **文档 PR** | [#1164](https://github.com/HKUDS/nanobot/pull/1164) 越南语 README | 40 天 | 低冲突，可快速合并以扩大东南亚社区 |
| **核心功能 PR** | [#722](https://github.com/HKUDS/nanobot/pull/722) HTTP API 通道 | 49 天 | 与 [#2819](https://github.com/HKUDS/nanobot/issues/2819) WebSocket 方案需架构决策，避免重复建设 |
| **通道扩展 PR** | [#2600](https://github.com/HKUDS/nanobot/pull/2600) Microsoft Teams | 9 天 | 企业市场关键功能，建议优先 review |
| **安全 Issue** | [#2826](https://github.com/HKUDS/nanobot/issues/2826) 工作区限制绕过 | 1 天（新） | **高优先级** — `restrictToWorkspace` 是核心安全承诺，需快速响应 |
| **ARM 兼容性** | [#2818](https://github.com/HKUDS/nanobot/issues/2818) oauth-cli-kit 安装失败 | 1 天（新） | 嵌入式/边缘部署增长信号，建议 CI 增加 ARM 构建测试 |

---

**报告生成时间**：2026-04-06  
**数据来源**：HKUDS/nanobot GitHub 公开数据

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-06

## 1. 今日速览

PicoClaw 项目今日保持**高活跃度**，24小时内产生 **16 条 Issues 更新**（13 活跃/新开，3 关闭）和 **16 条 PR 更新**（14 待合并，2 已合并/关闭），并发布 1 个 Nightly 版本。社区聚焦三大主线：**WebUI 连接稳定性**（#2213）、**多平台部署体验**（Android App、Docker 优化）以及**Agent 内存与会话管理机制**（Seahorse LCM 内存引擎、结构化上下文压缩）。值得注意的是，多个长期 Bug（Ollama 超时、工具调用提取缺陷）仍在寻求根治方案，而新兴的"观察者 Agent"静默处理需求揭示了生产环境的新场景。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.5-nightly.20260405.71337b6f

| 属性 | 详情 |
|:---|:---|
| 版本类型 | 自动化夜间构建（可能不稳定） |
| 完整变更日志 | [compare/v0.2.5...main](https://github.com/sipeed/picoclaw/compare/v0.2.5...main) |
| 风险提示 | ⚠️ 自动化构建，建议谨慎用于生产环境 |

**关键背景**：该 nightly 版本发布于 v0.2.5 正式版之后，包含 main 分支最新提交。结合今日 PR 动向，可能涉及以下未发布变更：
- Seahorse 短期记忆引擎（LCM）实现（PR #2285，今日已关闭合并）
- 多个 WebSocket 认证与 TUI 配置同步修复

---

## 3. 项目进展

### ✅ 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2285](https://github.com/sipeed/picoclaw/pull/2285) feat(seahorse): implement short-term memory engine (LCM) | liuy | **Seahorse 短期记忆引擎** — 基于 SQLite + DAG 摘要层级实现无损上下文压缩，FTS5 全文检索，预算感知组装 | 🎯 **里程碑级进展**：解决 Issue #1919 提出的 Agent 长期记忆难题，为复杂多轮对话 Agent 提供基础设施 |
| [#2357](https://github.com/sipeed/picoclaw/pull/2357) fix: send forbidden reply when unauthorized user messages bot | sushi30 | 未授权用户现在收到明确拒绝提示，替代静默丢弃；覆盖 WhatsApp Native、Telegram 及 base.go | 🔒 安全体验提升，减少用户困惑 |

### 🔄 待合并高价值 PR（14 条中精选）

| PR | 领域 | 价值评估 |
|:---|:---|:---|
| [#2333](https://github.com/sipeed/picoclaw/pull/2333) 结构化上下文压缩（6 阶段算法） | Agent 核心 | 与 Seahorse 形成互补，提供迭代式摘要 + Token 预算保护，生产就绪度高 |
| [#2332](https://github.com/sipeed/picoclaw/pull/2332) SkillManager 动态技能创建 | Skill 系统 | Agent 自主发现重复模式（5+ 工具调用）并创建可复用过程，迈向自我改进 Agent |
| [#2369](https://github.com/sipeed/picoclaw/pull/2369) PicoWatch — WhatsApp 试用监控菜单栏应用 | 生态工具 | 首个官方生态周边工具（macOS），显示项目向运营工具链延伸 |
| [#2339](https://github.com/sipeed/picoclaw/pull/2339) 标准 HTTP 登录/设置/登出流程 | 用户体验 | 大幅降低新手门槛，解决 Windows PID 锁问题，Dashboard 标准化关键一步 |

**整体进展评估**：今日核心突破在 **Agent 记忆架构**（Seahorse LCM 落地），配合 **配置管理标准化** 和 **安全体验优化**，项目正从"功能可用"向"生产可靠"演进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 背后信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#2213](https://github.com/sipeed/picoclaw/issues/2213) WebUI 无法连接 WebUI 启动的 Gateway | **8 条** | WebUI 自托管场景下 Gateway 连接失败 | **部署模式冲突**：用户期望"一键启动完整服务"，但当前架构分离导致令牌传递问题；PR #2267 已提交修复 |
| 2 | [#430](https://github.com/sipeed/picoclaw/issues/430) Ollama 本地模型 120s 固定超时 | **8 条** | 本地大模型推理超时，直接 API 调用正常 | **边缘部署痛点**：固定 HTTP 超时与本地模型长推理矛盾，需可配置超时或流式处理优化 |
| 3 | [#1714](https://github.com/sipeed/picoclaw/issues/1714) 添加 `<think>` 输出过滤开关 | 3 条 | 推理模型（如 DeepSeek-R1）的 think 内容干扰可读性 | **UI 精细化需求**：推理模型普及带来的 UX 适配，前端过滤即可，实现成本低 |

### 👍 反应最多的 Issue

- **#430**（👍 3）：Ollama 超时问题获最多认同，反映本地部署用户群体规模
- **#2213**（👍 2）：WebUI 连接问题次之

**社区情绪分析**：今日热点呈现 **"部署体验焦虑"** —— 用户在不同场景（WebUI 自托管、本地 Ollama、Docker、Android App）均遇到配置/连接障碍，项目需优先完善**配置管理统一性**和**错误诊断透明度**。

---

## 5. Bug 与稳定性

### 🚨 严重/高优先级（影响核心功能）

| Issue | 严重程度 | 状态 | 说明 |
|:---|:---:|:---|:---|
| [#2213](https://github.com/sipeed/picoclaw/issues/2213) WebUI 无法连接 Gateway | 🔴 **高** | 🛠️ **PR #2267 待合并** | WebUI 核心流程阻断，影响自托管用户 |
| [#2354](https://github.com/sipeed/picoclaw/issues/2354) WebUI 输入框和发送按钮禁用 | 🔴 **高** | 待修复 | 前端状态管理 Bug，F12 显示元素被禁用；PR #2363 涉及 WebSocket 认证修复，可能相关 |
| [#2136](https://github.com/sipeed/picoclaw/issues/2136) 工具调用提取逻辑缺陷 | 🟡 **中高** | 长期未决 | 安全研究者提交，PR 因冲突未合并；可能导致工具调用解析失败，影响 Agent 可靠性 |
| [#430](https://github.com/sipeed/picoclaw/issues/430) Ollama 120s 固定超时 | 🟡 **中** | 已关闭但未根治？ | 今日关闭，但需确认是否真正修复超时可配置性 |

### 🐛 中等优先级（平台/场景特定）

| Issue | 影响范围 | 修复状态 |
|:---|:---|:---|
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) Android App 模型配置后仍显示"未配置" | Android 端 | 待调查，配置同步问题 |
| [#2342](https://github.com/sipeed/picoclaw/issues/2342) Provider 400 错误（多提供商） | Docker Swarm 部署 | 待复现，可能为配置格式问题 |
| [#2334](https://github.com/sipeed/picoclaw/issues/2334) 模型回退（fallback）不工作 | OpenRouter + Ollama 混合 | 待调查，关键可靠性功能 |
| [#2234](https://github.com/sipeed/picoclaw/issues/2234) HistoryFile 硬编码至 os.TempDir() 的安全风险 | 多用户系统 | 待修复，信息泄露 + 符号链接攻击向量 |

### 🔒 安全相关

- **#2234**：命令历史文件权限问题，建议优先级提升
- **#2136**：工具调用提取的正则逻辑缺陷，可能被利用构造绕过

---

## 6. 功能请求与路线图信号

### 📋 今日新增功能请求（精选）

| Issue | 领域 | 可行性 | 版本预测 |
|:---|:---|:---:|:---|
| [#2349](https://github.com/sipeed/picoclaw/issues/2349) 容器部署优化：Debian slim 镜像、时区设置、内置 curl | Docker | ⭐⭐⭐⭐⭐ 高 | v0.2.6 可能纳入，Alpine 生态限制明确 |
| [#2352](https://github.com/sipeed/picoclaw/issues/2352) Telegram 结构化回复（内联键盘） | Channel | ⭐⭐⭐⭐☆ 中高 | 生态扩展需求，实现清晰 |
| [#2351](https://github.com/sipeed/picoclaw/issues/2351) Skill 二进制依赖预校验 | Skill | ⭐⭐⭐⭐☆ 中高 | 与 #2351 配合提升 Skill 可靠性 |
| [#2126](https://github.com/sipeed/picoclaw/issues/2126) 静默处理模式：抑制空响应回退 | Agent 配置 | ⭐⭐⭐⭐⭐ 高 | **生产关键需求**，观察者 Agent 场景明确，实现简单（配置开关） |

### 🔮 路线图信号解读

| 信号 | 证据 | 建议行动 |
|:---|:---|:---|
| **Agent 记忆架构成熟化** | Seahorse LCM 合并 + 结构化压缩 PR | 下一版本重点宣传记忆能力，吸引复杂场景用户 |
| **部署体验标准化** | 登录流程 PR + Docker 优化请求 | 成立"部署体验"专项，统一 WebUI/TUI/Docker/Android 配置逻辑 |
| **运营工具链延伸** | PicoWatch 监控工具 PR | 探索企业级/商业化工具生态 |
| **多语言/国际化债务** | #2367 英文界面残留中文 | 需建立 i18n 流程，技术债累积中 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 痛点 | 来源 Issue | 典型引述/场景 |
|:---|:---|:---|
| **配置分散难同步** | #2368, #2282, #1917 | "Android 添加模型后仍显示未配置"、"TUI 同步写错配置路径"、"微信渠道无法持久化同步游标" |
| **超时不可控** | #430 | "本地 qwen3:8b 直接 API 正常，PicoClaw 固定 120s 超时" |
| **错误信息不透明** | #2354, #2342 | "输入框禁用无提示"、"400 错误无详细日志" |
| **Docker 体验粗糙** | #2349 | "Alpine 时区设置麻烦、缺少 curl" |

### 😊 满意点

- **功能丰富性**：多渠道支持（Telegram、WhatsApp、微信、Feishu）获认可
- **扩展性**：Hook 机制和 Skill 系统支持自定义（#2215 增强文档）
- **记忆能力突破**：Seahorse LCM 实现获期待（#1919 长期跟踪）

### 🎯 新兴使用场景

> **"观察者 Agent"** — #2126 提出的静默监听场景：
> - 处理每条消息但不主动回复
> - 执行工具调用（如写文件维护记忆日志）
> - 仅在显式@时响应
> 
> 这揭示了**群聊助手**向**背景智能体**演进的需求，与当前"每条消息必响应"的假设冲突。

---

## 8. 待处理积压

### ⏰ 长期未响应的重要事项

| Issue/PR | 创建时间 | 最后活动 | 风险 | 建议行动 |
|:---|:---:|:---:|:---|:---|
| [#2136](https://github.com/sipeed/picoclaw/issues/2136) 工具调用提取缺陷 | 2026-03-28 | 今日 | 🔴 **安全/可靠性风险**，已有 PR 因冲突未合并 | 维护者协调 rebase，优先合入 |
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) 短期记忆引擎（母 Issue） | 早期 | PR #2285 今日合并 | ✅ 已解决，需关闭并发布说明 | 官方确认关闭，文档更新 |
| [#2215](https://github.com/sipeed/picoclaw/pull/2215) Hook 增强与文档 | 2026-03-31 | 今日 | 生态扩展关键，文档完善度影响采用 | 审阅合并，补充示例代码 |
| [#2267](https://github.com/sipeed/picoclaw/pull/2267) WebUI 连接修复 | 2026-04-02 | 今日 | 🔴 **阻断性 Bug**，影响自托管核心场景 | 优先测试合并，阻断 v0.2.6 发布 |

### 📊 积压健康度评估

- **PR 队列压力**：14 条待合并，其中 4 条为今日新增，审阅带宽需加强
- **Bug 修复/功能比**：今日 3 关闭 Issues 中 2 为 Bug，但新开 13 条中 8 为 Bug，**债务累积风险**
- **社区贡献活跃度**：diegofornalha 单日提交 3 条高质量 PR，需及时反馈以维持贡献者动力

---

*本日报基于 GitHub 公开数据生成，时间范围：2026-04-05 至 2026-04-06*  
*项目地址：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-04-06

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | **日期**: 2026-04-06 | **分析周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日呈现**高强度开发态势**，24小时内产生 **41 个 PR 更新**（21 待合并/20 已处理）和 **7 个 Issues 更新**，活跃度处于项目近期峰值。核心进展集中在三方面：**架构重构**（OAuth 移除、多实例支持）、**生态扩展**（WhatsApp、Sentry、Google Workspace 集成）以及**安全加固**（只读挂载、凭证模式优化）。社区贡献者 `sargunv` 单日提交 4 个高质量 Issue/PR，聚焦容器运行时的路径一致性与可移植性问题。无新版本发布，但主干代码正经历显著演进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（20 条中精选）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1653](https://github.com/qwibitai/nanoclaw/pull/1653) | martin-goette | **移除 OAuth，改用 API Key 认证** | 架构简化：删除 ~400 行 OAuth 相关代码，降低凭证代理复杂度，提升容器启动可靠性 |
| [#1654](https://github.com/qwibitai/nanoclaw/pull/1654) | martin-goette | **Google Workspace MCP 集成 + 全局 .mcp.json 合并机制** | 生态扩展：原生支持 Gmail/Calendar/Drive/Docs/Sheets，建立 MCP 服务器配置标准化方案 |
| [#1651](https://github.com/qwibitai/nanoclaw/pull/1651) | DorianZheng | **多实例支持 via `AgentLite.createInstance()`** | 架构升级：支持多租户部署模式，实例间数据隔离，为企业级 SaaS 化奠定基础 |
| [#1657](https://github.com/qwibitai/nanoclaw/pull/1657) | shin902 | **`isMain` → `GroupType` 枚举重构** | 类型系统完善：将布尔标志扩展为四级分组类型（override/main/chat/thread），支持更细粒度的权限策略 |
| [#1656](https://github.com/qwibitai/nanoclaw/pull/1656) | mechelon | **Telegram 论坛主题/线程支持** | 用户体验：捕获 `message_thread_id`，Agent 可感知话题上下文，群组场景可用性显著提升 |
| [#1644](https://github.com/qwibitai/nanoclaw/pull/1644) | sargunv | **修复主 Agent 全局内存路径与挂载** | 关键 Bug 修复：解决文档路径与实际挂载点不一致、只读挂载导致无法写入的双重问题 |
| [#1630](https://github.com/qwibitai/nanoclaw/pull/1630) | garagon | **Agent-runner 源目录只读挂载** | 安全加固：防止 Agent 通过 `bypassPermissions` 修改自身运行时源码，阻断持久化攻击向量 |
| [#1623](https://github.com/qwibitai/nanoclaw/pull/1623) | yaniv-golan | **修复 30 分钟消息管道死锁** | 稳定性：解决 `soft-busy` 消息流与 `MessageStream` 的竞态条件，消除生产环境假死风险 |
| [#1629](https://github.com/qwibitai/nanoclaw/pull/1629) | eplisov | **强化 OneCLI 公网部署安全** | 安全：默认绑定 `127.0.0.1`，添加 UFW 绕过警告，防止默认凭证暴露 |
| [#1509](https://github.com/qwibitai/nanoclaw/pull/1509) | mlwynne24 | **组级本地技能 + OpenViking 第二大脑集成** | 架构创新：支持 `groups/{name}/.claude/skills/` 覆盖机制，为垂直领域定制开辟新路径 |

**整体评估**：今日合并的 PR 标志着 NanoClaw 正从"单租户 Claude Code 封装"向"多引擎、多实例、企业级 AI 代理平台"演进。认证体系简化、多实例架构、MCP 生态标准化是三大里程碑。

---

## 4. 社区热点

### 高活跃度议题分析

| 议题 | 类型 | 热度信号 | 核心诉求 |
|:---|:---|:---|:---|
| [#1661](https://github.com/qwibitai/nanoclaw/pull/1661) WhatsApp 频道集成 | PR (Open) | 新功能，高实用性需求 | **即时通讯生态完整性**：社区强烈需要 WhatsApp Business API 的替代方案（Baileys 库），规避 Meta 官方 API 的审核门槛与费用 |
| [#1662](https://github.com/qwibitai/nanoclaw/pull/1662) / [#1631](https://github.com/qwibitai/nanoclaw/pull/1631) Sentry IPC 集成 | PR (重开) | 作者 TriKro 坚持迭代 | **可观测性基建**：生产部署需要错误追踪与性能监控，两次提交显示作者对代码质量的执着 |
| [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) OpenCode SDK 替代后端 | PR (Open) | 多引擎战略关键拼图 | **供应商解绑**：用户担忧 Anthropic 单一依赖，OpenCode（可能指 OpenAI 或开源方案）作为备选引擎需求迫切 |
| [#1655](https://github.com/qwibitai/nanoclaw/issues/1655) `/add-governance` 技能提案 | Issue (Open) | 零评论但高概念价值 | **合规与审计**：Ed25519 签名收据满足金融、医疗等监管严格场景的不可抵赖性需求 |
| [#1659](https://github.com/qwibitai/nanoclaw/issues/1659) Apple Container 构建失败 | Issue (Open) | 平台兼容性痛点 | **Apple Silicon 原生支持**：开发者希望在 macOS 上使用 Apple 原生容器运行时（非 Docker Desktop），遭遇构建工具链冲突 |

**社区情绪**：贡献者积极拥抱架构变革，但对**文档准确性**（#1642 路径错误）、**跨平台可移植性**（#1641 NixOS shebang, #1659 Apple Container）有较高期待。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1636](https://github.com/qwibitai/nanoclaw/issues/1636) | Open | 频道顺序连接阻塞启动：若某一频道挂起，整个系统无法就绪 | **待修复** |
| 🔴 **高** | [#1659](https://github.com/qwibitai/nanoclaw/issues/1659) | Open | Apple Container 构建失败：扫描器读取宿主机包文件，Bun 打包的 SDK 与 esbuild 不兼容 | **待修复** |
| 🟡 **中** | [#1639](https://github.com/qwibitai/nanoclaw/issues/1639) | Open | Agent-runner 源同步仅检查 `index.ts` 的 mtime，遗漏其他文件变更 | **待修复** |
| 🟡 **中** | [#1641](https://github.com/qwibitai/nanoclaw/issues/1641) | Open | `container/build.sh` 使用非可移植 shebang (`#!/bin/bash`)，NixOS 无法运行 | **待修复** |
| 🟢 **低** | [#1642](https://github.com/qwibitai/nanoclaw/issues/1642) | **Closed** | 主 Agent 全局内存路径错误 + 只读挂载无法写入 | ✅ [#1644](https://github.com/qwibitai/nanoclaw/pull/1644) |
| 🟢 **低** | [#1638](https://github.com/qwibitai/nanoclaw/issues/1638) | **Closed** | 误创建 Issue（LID 入站消息未中继） | 已清理 |

**稳定性评估**：今日修复了内存挂载与死锁两个生产级问题，但**启动阻塞**（#1636）和**Apple 原生容器支持**（#1659）是阻碍 macOS 开发者采用的明显短板。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#1661](https://github.com/qwibitai/nanoclaw/pull/1661) WhatsApp 集成 | 通讯频道扩展 | ⭐⭐⭐⭐⭐ 极高 | PR 已提交，Baileys 库成熟，社区刚需 |
| [#1662](https://github.com/qwibitai/nanoclaw/pull/1662) Sentry 监控 | 可观测性 | ⭐⭐⭐⭐☆ 高 | 两次迭代，作者投入度高，生产环境必备 |
| [#1628](https://github.com/qwibitai/nanoclaw/pull/1628) OpenCode SDK | 多引擎架构 | ⭐⭐⭐⭐☆ 高 | 与 #963（OpenAI Codex）形成竞争，架构方向明确 |
| [#1655](https://github.com/qwibitai/nanoclaw/issues/1655) `/add-governance` | 合规审计 | ⭐⭐⭐☆☆ 中 | 概念超前，需 `protect-mcp` 前置，可能进入实验性技能集 |
| [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) Signal 频道 | 隐私通讯 | ⭐⭐⭐☆☆ 中 | 长期悬停（3月16日），需 signal-cli 外部依赖，维护成本高 |
| [#744](https://github.com/qwibitai/nanoclaw/pull/744) S3 存储技能 | 持久化存储 | ⭐⭐☆☆☆ 低 | 3月5日至今阻塞，可能需重新设计 |

**路线图信号**：项目正从"功能堆砌"转向"架构治理"——多实例、多引擎、MCP 标准化是 v1.x 的核心叙事。通讯频道（WhatsApp > Signal）和可观测性（Sentry）是近期落地的高置信度功能。

---

## 7. 用户反馈摘要

> 从 Issues/PR 描述中提炼的真实痛点

| 主题 | 用户原声/行为 | 洞察 |
|:---|:---|:---|
| **文档信任危机** | #1642: "CLAUDE.md tells the agent to use `/workspace/project/groups/global/CLAUDE.md`, but the actual mount point... is `/workspace/global`" | 文档与代码不同步会导致 Agent 行为偏离预期，需建立文档自动化校验机制 |
| **跨平台可移植性** | #1641: "This doesn't work on distros like NixOS"、#1659 Apple Container 失败 | 开发者使用多样化容器运行时，不能假设 Docker Desktop  ubiquitous |
| **安全默认配置** | #1629: "Docker bypasses UFW/iptables — these ports are open to the internet" | 用户期望"安全开箱即用"，而非事后补救 |
| **构建可复现性** | #1659: "scanner reads HOST package files" | Apple Container 的构建上下文隔离性差异暴露工具链假设漏洞 |
| **技能生态焦虑** | #1121 作者持续更新但长期未合并 | 贡献者需要明确的技能审核 SLA 与反馈机制 |

---

## 8. 待处理积压

> 提醒维护者关注的高价值长期议题

| 议题 | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) Signal 频道技能 | 2026-03-16 (21天) | Needs Review | 隐私敏感用户群体的关键需求，竞争对手（WhatsApp PR）已后来居上 |
| [#744](https://github.com/qwibitai/nanoclaw/pull/744) S3 存储技能 | 2026-03-05 (32天) | Blocked | 状态机持久化是 Agent 可靠性的基础，阻塞可能影响其他功能 |
| [#963](https://github.com/qwibitai/nanoclaw/pull/963) OpenAI Codex 引擎 | 2026-03-11 (26天) | Needs Review | 与 #1628（OpenCode）存在功能重叠，需协调合并策略避免生态分裂 |

---

**日报生成时间**: 2026-04-06 | **数据来源**: GitHub API 聚合 | **下次更新**: 2026-04-07

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-04-06

## 1. 今日速览

NullClaw 今日呈现**高活跃度维护期**特征：24小时内完成 **9 个 Issue 关闭**、**14 个 PR 合并/关闭**，并发布 **v2026.4.4 版本**。核心团队聚焦稳定性修复与文档体系建设，manelsen 与 telagod 贡献尤为突出。值得关注的是，社区正围绕 **REST Admin API**、**Knowledge Graph Memory** 和 **Deterministic Workflow Engine** 三大方向展开深度技术探索，项目正从"功能补全"向"企业级可观测性"演进。

---

## 2. 版本发布

### [v2026.4.4](https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.4) | 2026-04-05

| 变更类型 | 内容 |
|---------|------|
| **feat** | Cron 任务路由增强：接入 `session_target` 路由机制，支持 Agent 作业的精细化调度 ([#666](https://github.com/nullclaw/nullclaw/pull/666)) |
| **fix** | Ollama 集成修复：解决默认配置下空响应问题，提升本地模型稳定性 ([#668](https://github.com/nullclaw/nullclaw/pull/668)) |

**迁移注意事项**：Cron 作业配置如需利用新路由特性，需确认 `session_target` 字段已正确配置；Ollama 用户无需变更配置即可获益。

---

## 3. 项目进展

### 今日合并的关键 PR（14 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#705](https://github.com/nullclaw/nullclaw/pull/705) | manelsen | **路由层修复**：强制默认 Agent 回退为 `"main"`，解决 Telegram 子代理识别错乱 | [#696](https://github.com/nullclaw/nullclaw/issues/696) |
| [#710](https://github.com/nullclaw/nullclaw/pull/710) | manelsen | **可观测性增强**：Heartbeat 模块增加详细日志（`.heartbeat` scope + debug 输出） | [#703](https://github.com/nullclaw/nullclaw/issues/703) |
| [#708](https://github.com/nullclaw/nullclaw/pull/708) | manelsen | **工具链补全**：`file_append` 工具正式接入运行时（此前仅实现未注册） | [#699](https://github.com/nullclaw/nullclaw/issues/699) |
| [#707](https://github.com/nullclaw/nullclaw/pull/707) | manelsen | **部署友好性**：Pushover 凭证支持进程环境变量读取，适配 GitOps/容器化场景 | [#698](https://github.com/nullclaw/nullclaw/issues/698) |
| [#706](https://github.com/nullclaw/nullclaw/pull/706) | manelsen | **文档澄清**：明确 `config.json` 不支持 `${VAR}` 环境变量插值，消除配置误解 | [#697](https://github.com/nullclaw/nullclaw/issues/697) |
| [#694](https://github.com/nullclaw/nullclaw/pull/694) | manelsen | **三合一修复包**：Telegram 重复消息、Bifrost 网关兼容、工具缓存失效 | [#680](https://github.com/nullclaw/nullclaw/issues/680) [#682](https://github.com/nullclaw/nullclaw/issues/682) [#684](https://github.com/nullclaw/nullclaw/issues/684) |
| [#675](https://github.com/nullclaw/nullclaw/pull/675) | manelsen | **协议对齐**：gemini-cli ACP 握手兼容 v0.34，修复协议版本字段类型问题 | [#674](https://github.com/nullclaw/nullclaw/issues/674) |
| [#716](https://github.com/nullclaw/nullclaw/pull/716) | festoinc | **新工具**：Calculator 工具（20 种数学运算） | - |
| [#704](https://github.com/nullclaw/nullclaw/pull/704) | Aisht669 | **交互增强**：飞书通道支持消息接收时自动表情回应 | - |

**整体推进评估**：今日合并 PR 覆盖 **稳定性（6 项）、可观测性（2 项）、工具生态（2 项）、部署体验（1 项）、交互体验（1 项）**，项目健康度显著提升。manelsen 单日闭环 7 个 Issue，维护响应效率极高。

---

## 4. 社区热点

### 高讨论潜力议题

| 议题 | 类型 | 核心诉求分析 |
|:---|:---|:---|
| [#778](https://github.com/nullclaw/nullclaw/issues/778) Deterministic Workflow Engine | **Feature Request** | 用户寻求 "Lobster-style" 确定性工作流引擎，暗示 NullClaw 正被用于**复杂业务流程自动化**场景，对可重现性、审计追踪有强需求 |
| [#773](https://github.com/nullclaw/nullclaw/issues/773) Responses API 双 Bug | **Bug Report** | 工具 Schema 格式不匹配 + null 错误误分类，反映 OpenAI 新 API 模式的适配滞后；已有 PR [#772](https://github.com/nullclaw/nullclaw/pull/772) 待审 |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) + [#771](https://github.com/nullclaw/nullclaw/pull/771) REST Admin API | **架构演进** | vernonstinebaker 主导的 Phase 0-4 管理 API，目标覆盖 **22 种通道类型**的健康状态与 CRUD 操作，剑指**企业级运维面板** |

**背后信号**：社区正从"个人 AI 助手"用例向**多 Agent 协作平台**、**生产级服务治理**跃迁。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | Responses API (`api_mode=responses`) 完全不可用：工具 Schema 格式错误 + null 错误误分类 | 待修复 | [#772](https://github.com/nullclaw/nullclaw/pull/772) 待合并 |
| 🟡 **中** | Telegram 子代理识别错乱（已修复） | ✅ 已关闭 | [#705](https://github.com/nullclaw/nullclaw/pull/705) |
| 🟡 **中** | file_append 工具未实际注册（已修复） | ✅ 已关闭 | [#708](https://github.com/nullclaw/nullclaw/pull/708) |
| 🟡 **中** | Bifrost 网关 HTTPS 强制校验与路径解析冲突（已修复） | ✅ 已关闭 | [#694](https://github.com/nullclaw/nullclaw/pull/694) |
| 🟢 **低** | Heartbeat 无日志（已修复） | ✅ 已关闭 | [#710](https://github.com/nullclaw/nullclaw/pull/710) |
| 🟢 **低** | gemini-cli ACP 协议握手失败（已修复） | ✅ 已关闭 | [#675](https://github.com/nullclaw/nullclaw/pull/675) |

**风险评估**：仅剩 [#773](https://github.com/nullclaw/nullclaw/issues/773) 一个高严重度问题待解，预计随 [#772](https://github.com/nullclaw/nullclaw/pull/772) 合并即可闭环。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 技术方向 | 纳入可能性 |
|:---|:---|:---|:---|
| **Deterministic Workflow Engine** | [#778](https://github.com/nullclaw/nullclaw/issues/778) | 状态机/工作流编排 | ⭐⭐⭐ 高 — 与现有 Agent 路由架构天然契合 |
| **Knowledge Graph Memory** | [#712](https://github.com/nullclaw/nullclaw/pull/712) | SQLite + 递归 CTE 实现实体关系图谱 | ⭐⭐⭐ 高 — PR 已开，manelsen 主导 |
| **Cross-Agent Memory Sync** | [#711](https://github.com/nullclaw/nullclaw/pull/711) | 确定性内存事件流 | ⭐⭐⭐ 高 — 多 Agent 协作基础设施 |
| **REST Admin API** | [#770](https://github.com/nullclaw/nullclaw/pull/770) | 运维管控接口 | ⭐⭐⭐ 高 — Phase 0-4 已完整设计 |
| **Provider 自定义 Body 参数** | [#709](https://github.com/nullclaw/nullclaw/pull/709) | 供应商扩展性 | ⭐⭐⭐ 高 — PR 已开 |

**下一版本预测**：v2026.4.x 或 v2026.5 极可能包含 **Knowledge Graph Memory** + **REST Admin API** + **Responses API 修复** 的组合。

---

## 7. 用户反馈摘要

### 痛点
- **配置困惑**：`config.json` 环境变量插值误解（[#697](https://github.com/nullclaw/nullclaw/issues/697)）—— 文档示例已修正
- **部署摩擦**：Pushover 仅支持 `.env` 文件，容器化场景不便（[#698](https://github.com/nullclaw/nullclaw/issues/698)）—— 已支持进程环境变量
- **网关兼容**：Bifrost 等非标准 OpenAI 兼容网关的 HTTPS/路径校验过严（[#682](https://github.com/nullclaw/nullclaw/issues/682)）—— 已放宽

### 满意点
- **响应速度**：manelsen 主导的多 Issue 快速闭环（平均 2-3 天）
- **多语言支持**：中英文双语 Issue/PR 描述成为社区惯例

### 使用场景演进
- 从"个人 CLI 助手" → "Telegram/飞书机器人" → **多 Agent 协作平台** → **企业级服务治理**

---

## 8. 待处理积压

| 项目 | 创建时间 | 状态 | 提醒 |
|:---|:---|:---|:---|
| [#712](https://github.com/nullclaw/nullclaw/pull/712) Knowledge Graph Memory | 2026-03-24 | 🟡 Open（12 天） | 核心功能 PR，建议优先 review |
| [#709](https://github.com/nullclaw/nullclaw/pull/709) Provider 自定义参数 | 2026-03-23 | 🟡 Open（13 天） | 企业集成刚需 |
| [#711](https://github.com/nullclaw/nullclaw/pull/711) Cross-Agent Memory | 2026-03-23 | 🟡 Open（13 天） | 与 #712 存在架构关联，建议协调合并策略 |
| [#761](https://github.com/nullclaw/nullclaw/pull/761) CLI 工具调用标记过滤 | 2026-04-02 | 🟡 Open（4 天） | 用户体验优化，低风险可快速合并 |

**维护者行动建议**：本周重点推进 [#712](https://github.com/nullclaw/nullclaw/pull/712) 与 [#772](https://github.com/nullclaw/nullclaw/pull/772)，为 v2026.4.5 或 v2026.5 版本做准备。

---

*日报生成时间：2026-04-06 | 数据来源：NullClaw GitHub 仓库*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-04-06

> 项目地址：[nearai/ironclaw](https://github.com/nearai/ironclaw)  
> 报告日期：2026-04-06（基于 2026-04-05 数据）

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**：24小时内 45 个 PR 更新（29 待合并/16 已处理），5 个 Issues 闭环 3 个，核心团队 @ilblackdragon、@serrrfirat 主导了 CI 安全加固、生产级工具链、多通道 E2E 测试三大主线。项目正从"功能扩张期"转向"质量加固期"——测试覆盖率、供应链安全、开发者体验成为优先级最高的投入方向。无新版本发布，但 staging 分支持续高频推进。

---

## 2. 版本发布

**无** — 今日未发布新版本。  
注：PR [#2044](https://github.com/nearai/ironclaw/pull/2044) 显示 staging 分支正在进行自动晋升（`staging-promote/733678dd-23996777140`），预计近期将有版本迭代。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2035](https://github.com/nearai/ironclaw/pull/2035) → 被 [#2043](https://github.com/nearai/ironclaw/pull/2043) 替代 | @ilblackdragon | **CI 安全加固**：Dependabot 自动化依赖扫描 + 14 个 workflow SHA 锁定 | 阻断供应链攻击向量，满足企业级安全合规 |
| [#1867](https://github.com/nearai/ironclaw/pull/1867) | @j-bloggs | **Agent 自愈机制修复**：防止卡死任务的无限通知风暴 | 提升生产环境稳定性，减少运维噪音 |
| [#2039](https://github.com/nearai/ironclaw/pull/2039) | @ilblackdragon | **双模式测试框架**：Live 真实 LLM 调用 / Replay 确定性回放 | 解决 E2E 测试的"成本-稳定性"两难，为快速迭代奠基 |
| [#2041](https://github.com/nearai/ironclaw/pull/2041) → 被 [#2042](https://github.com/nearai/ironclaw/pull/2042) 替代 | @serrrfirat | Slack E2E 测试基础设施（后重构为 #2042） | WASM 通道测试范式成熟，可复制到其他通道 |
| [#2036](https://github.com/nearai/ironclaw/pull/2036) | @serrrfirat | Telegram E2E 测试扩展（8 新测试 + 模拟器增强） | 即时通讯通道的可靠性工程体系化 |

**整体进展评估**：今日合并集中在**测试基础设施**与**生产稳定性**两大主题，标志着项目从"功能可用"向"企业可信赖"的关键跃迁。

---

## 4. 社区热点

### 高关注度议题

| 议题 | 类型 | 热度信号 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#2045](https://github.com/nearai/ironclaw/issues/2045) `ironclaw-lobster` — Rust 原生工作流 Shell | Feature Request | 新提、0 评论但概念前沿 | 用户希望 IronClaw 内置**确定性工作流引擎**，对标 OpenClaw 的 `lobster`。诉求本质：AI Agent 需要"可预测、可审计、可回滚"的任务编排能力，而非纯 LLM 的随机性推理。技术路线建议：可作为 WASM 插件或内置 DSL 实现。 |
| [#2023](https://github.com/nearai/ironclaw/issues/2023) Kubernetes 运行时支持 | Feature Request | 新提、0 评论、生产场景明确 | **云原生部署刚需**：Docker-in-Docker 在 K8s 上的特权容器模式被安全团队拒绝。用户需要原生 Kubernetes Runtime 作为沙箱隔离替代方案。与现有 Docker 隔离架构存在冲突，需评估 cri-o/containerd 集成成本。 |
| [#2031](https://github.com/nearai/ironclaw/pull/2031) Agent/Workspace 并发一致性加固 | PR | `size: XL`, `risk: high`, 多 scope 覆盖 | 核心架构级修复，解决 compaction 与 append 的竞态条件。虽无评论但标签显示为**新贡献者**提交，社区技术深度正在扩展。 |

**热点洞察**：社区需求呈现"**底层基础设施化**"趋势——用户不再满足于单点功能，而是要求 IronClaw 成为可嵌入企业技术栈的**平台级组件**（K8s 原生、工作流引擎、审计合规）。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | Gateway 向 Anthropic API 发送 `model: "default"` 导致 404 风暴（330 次失败调用/7小时） | ✅ 已关闭 [#1811](https://github.com/nearai/ironclaw/issues/1811) | 已修复 | 所有使用 Anthropic 后端的 Telegram 轮询部署 |
| 🟡 **High** | Agent 卡死任务无限自修复通知（状态机缺失 `Pending -> Failed` 转移） | ✅ 已关闭 [#1867](https://github.com/nearai/ironclaw/pull/1867) | [#1867](https://github.com/nearai/ironclaw/pull/1867) | 长运行 Agent 实例的运维噪音 |
| 🟡 **High** | Workspace 用户作用域重绑定缺乏直接测试（libsql 提示作用域修复的依赖项） | ✅ 已关闭 [#1652](https://github.com/nearai/ironclaw/issues/1652) | 已修复 | 多租户场景的数据隔离正确性 |
| 🟢 **Medium** | 扩展清单名称连字符/下划线不一致导致 WASM 安装失败（`google-calendar` vs `google_calendar`） | 🔄 修复中 [#2029](https://github.com/nearai/ironclaw/pull/2029) | [#2029](https://github.com/nearai/ironclaw/pull/2029) | 扩展生态的开发者体验 |
| 🟢 **Medium** | Skills 无效目录名安装失败 | 🔄 修复中 [#2040](https://github.com/nearai/ironclaw/pull/2040) | [#2040](https://github.com/nearai/ironclaw/pull/2040) | Skills 市场可用性 |
| 🟢 **Medium** | Gmail OAuth 认证提示未在聊天 UI 即时显示 | 🔄 修复中 [#2038](https://github.com/nearai/ironclaw/pull/2038) | [#2038](https://github.com/nearai/ironclaw/pull/2038) | 第三方工具集成体验 |
| 🟢 **Medium** | 轻量级 Routine Telegram 通知泄露原始工具调用标记 | 🔄 修复中 [#2033](https://github.com/nearai/ironclaw/pull/2033) | [#2033](https://github.com/nearai/ironclaw/pull/2033) | 终端用户可见的 UI 污染 |

**稳定性健康度**：🔶 **良好** — 无开放 Critical Bug，生产级问题响应迅速（Anthropic 网关问题 5 天内闭环）。今日 6 个活跃修复 PR 显示团队对边缘 case 的系统性清理。

---

## 6. 功能请求与路线图信号

| 功能请求 | 成熟度信号 | 纳入下一版本概率 | 关键依赖 |
|:---|:---|:---|:---|
| **AWS Bedrock 嵌入支持** [#1501](https://github.com/nearai/ironclaw/issues/1501) | ✅ 已关闭实现 | **100%** | 已合并，等待版本发布 |
| **结构化 Collections**（类型化 CRUD 工具）[#1937](https://github.com/nearai/ironclaw/pull/1937) | 🔄 XL 级 PR 开放中，@standardtoaster 主导 | **85%** | 需解决与现有 Workspace 文档模型的兼容层 |
| **Routine Agent Review**（结果注入 Agentic 循环）[#1738](https://github.com/nearai/ironclaw/pull/1738) | 🔄 XL 级 PR 开放 8 天，@j-bloggs | **75%** | 消息源类型化重构（`MessageSource` enum）需评审 |
| **生产级编码工具链**（glob/grep/file_undo）[#2025](https://github.com/nearai/ironclaw/pull/2025) | 🔄 XL 级 PR 开放中，@ilblackdragon | **90%** | 与现有工具体系的权限边界设计 |
| **K8s 原生运行时** [#2023](https://github.com/nearai/ironclaw/issues/2023) | 🆕 新提，无 PR | **30%** | 架构决策： cri-o 集成 vs 重构 Runtime 抽象层 |
| **Rust 工作流 Shell (`ironclaw-lobster`)** [#2045](https://github.com/nearai/ironclaw/issues/2045) | 🆕 概念阶段，无 PR | **20%** | 需核心团队评估与现有 Routine 体系的关系 |
| **Web 调试检查器面板** [#1873](https://github.com/nearai/ironclaw/pull/1873) | 🔄 XL 级 PR 开放 5 天 | **60%** | SSE 实时数据流的性能开销评估 |

**路线图信号**：短期（1-2 版本）聚焦**开发者工具链完善**（编码工具、调试面板、Collections）；中期需回应**云原生部署**与**确定性工作流**两大架构级诉求。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issues/PR 上下文）

| 场景 | 痛点 | 来源 |
|:---|:---|:---|
| **企业 AI 部署** | "28 次测试中，Agent 每次创建新文档而非更新列表，或编辑 markdown 导致损坏" — 结构化数据操作缺失 | [#1937](https://github.com/nearai/ironclaw/pull/1937) |
| **多云成本优化** | "已有 AWS Bedrock 访问权限，却需要单独的 OpenAI API key 或本地 Ollama" — 供应商锁定焦虑 | [#1501](https://github.com/nearai/ironclaw/issues/1501) |
| **K8s 生产环境** | "Docker-in-Docker 需要特权容器，安全团队拒绝" — 云原生合规障碍 | [#2023](https://github.com/nearai/ironclaw/issues/2023) |
| **运维可观测性** | 330 次 404 错误无告警，7 小时后才发现 — 网关错误缺乏熔断与监控 | [#1811](https://github.com/nearai/ironclaw/issues/1811) |
| **扩展开发体验** | 清单名称连字符与内部下划线不一致导致安装失败 — 命名规范文档与校验缺失 | [#2029](https://github.com/nearai/ironclaw/pull/2029) |

### 满意度信号
- ✅ AWS Bedrock 嵌入支持快速响应（16 天从请求到关闭）
- ✅ 测试基础设施投入获得隐性认可（无相关投诉，PR 持续合并）

---

## 8. 待处理积压

| 项目 | 滞留时间 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) 阿里云百炼 Coding Plan 支持 | 16 天 | **国际化市场拓展受阻** | XL 级 PR，需核心团队评审 HTTP/1.1 兼容性决策 |
| [#1738](https://github.com/nearai/ironclaw/pull/1738) Routine Agent Review | 8 天 | Agent 工作流智能化关键路径 | 安排架构评审，确认 `MessageSource` enum 设计 |
| [#1873](https://github.com/nearai/ironclaw/pull/1873) Web 调试检查器 | 5 天 | 开发者体验差异化竞争点 | 评估 SSE 性能数据，决定是否合并 |
| [#2023](https://github.com/nearai/ironclaw/issues/2023) K8s 运行时 | 1 天 | 企业销售 blocker | 创建 ADR（架构决策记录），明确 cri-o/containerd 技术选型 |

---

**日报生成器**：IronClaw 开源分析师 | 数据截止：2026-04-05 UTC

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-04-06

## 1. 今日速览

LobsterAI 今日呈现**高活跃开发态势**，24小时内产生 **6 个待合并 PR** 且全部聚焦于核心功能迭代，无合并/关闭记录表明代码审查流程仍在进行中。Issues 侧维持低水位运行（2 条更新），社区反馈以**技能执行兼容性**和**Linux 构建稳定性**为主。整体项目处于**密集功能交付期**，自动化、模型可靠性、定时任务三大模块同步推进，但需注意 PR 积压可能带来的合并冲突风险。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日 **0 个 PR 合并/关闭**，6 个功能 PR 均处于待审查状态，覆盖以下战略方向：

| 方向 | PR | 进展意义 |
|:---|:---|:---|
| **自动化基础设施** | [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) Gmail 邮件触发器 | 补齐与 OpenClaw 的 parity，实现"邮件驱动 Agent"的自动化工作流 |
| **模型可靠性** | [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) 自动故障转移 | 解决单点模型故障导致的服务中断，企业级可用性关键升级 |
| **定时任务 UX** | [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) UI 全面升级 + [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) 快速测试按钮 + [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482) 修复编辑状态丢失 | 从"能用"到"好用"的体验跃迁，表单交互完整性补全 |
| **安全策略** | [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485) 禁用技能强制生效 | 修复权限绕过漏洞，强化多租户场景下的策略一致性 |

> **评估**：项目整体处于**功能爆发期**，但代码审查吞吐成为瓶颈。建议维护者优先处理 [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485)（安全修复）和 [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482)（数据完整性修复），再按 [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) → [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) → [#1486](https://github.com/netease-youdao/LobsterAI/pull/1486) → [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) 顺序推进以避免依赖冲突。

---

## 4. 社区热点

| 热度指标 | Issue/PR | 分析 |
|:---|:---|:---|
| **5 条评论** | [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) Ubuntu 构建白屏 | **已关闭**，但反映 Linux 桌面端构建流程的文档-实际 gap，用户按官方步骤操作仍遇白屏，最终通过社区协作解决。诉求：更健壮的 Linux 构建验证 CI |
| **1 条评论** | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) Python 脚本执行异常 | **开放中**，关键信号：同一 skill 在 Claude Code CLI 正常但在 LobsterAI 异常，指向 **skill runtime 环境隔离问题**。本地 30B 模型场景下出现，可能与沙箱化执行或依赖注入有关 |

**核心诉求洞察**：
- **跨平台一致性**：用户期望"一次编写，到处运行"的 skill 体验，环境差异成为 adoption 障碍
- **本地模型优先**：30B 本地模型用户群体活跃，对离线/隐私场景支持有明确需求

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| 🔴 **高** | 定时任务编辑后描述清空、启用状态强制覆盖 | 有 PR 待审 | [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482) |
| 🟡 **中** | 禁用技能仍可通过 cowork chat 触发（权限绕过） | 有 PR 待审 | [#1485](https://github.com/netease-youdao/LobsterAI/pull/1485) |
| 🟡 **中** | Python 脚本在会话中执行异常（vs Claude Code CLI） | 开放待诊断 | 无 |
| 🟢 **低** | Ubuntu 构建安装后白屏 | **已关闭** | 社区解决 |

> **风险预警**：[#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) 无关联 PR，且涉及 skill 执行引擎核心路径，建议优先分配维护者跟进。

---

## 6. 功能请求与路线图信号

| 已落地 PR（待合并） | 隐含需求 | 版本预测 |
|:---|:---|:---|
| [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) Gmail 触发器 | 用户需要**事件驱动的工作流编排**（邮件 → Agent → 行动） | v1.x 近期 |
| [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) 模型故障转移 | 生产环境对**多模型冗余**的硬性要求 | v1.x 近期 |
| [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) 定时任务 UI 升级 | 从"开发者工具"向"终端用户产品"的体验转型 | v1.x 近期 |

**下一版本信号**：自动化基础设施（触发器 + 故障转移）+ 定时任务体验升级构成**v1.x 核心叙事**，推测官方正推动从"AI 助手"向"AI 工作流平台"的定位演进。

---

## 7. 用户反馈摘要

| 维度 | 具体反馈 | 来源 |
|:---|:---|:---|
| **痛点** | Linux 构建流程"按文档走仍白屏"，构建产物可靠性存疑 | [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) |
| **痛点** | Skill 兼容性碎片化，同一脚本跨平台表现不一致 | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) |
| **场景** | 本地 30B 模型深度用户，重视隐私与离线能力 | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) |
| **满意度** | 社区响应积极，Issue 关闭效率较高（#1418 2天内解决） | [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) |

---

## 8. 待处理积压

| 项目 | 创建时间 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) Python 脚本执行异常 | 2026-04-05（1天） | 技能生态兼容性的关键障碍，影响用户从 Claude Code 迁移 | 分配 `skill-engine` 标签，要求复现步骤和最小 skill 示例 |
| 6 个待合并 PR | 2026-04-05（同日） | 批量积压可能导致合并冲突，尤其 [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488) 涉及 UI 大面积重构 | 建立审查优先级队列，建议 48h 内完成安全/修复类 PR 初审 |

---

*日报生成时间：2026-04-06*  
*数据来源：GitHub API / netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-04-06

---

## 1. 今日速览

Moltis 今日展现**高强度迭代状态**：24小时内完成 **8 PR 合并/关闭**（仅1个待审）、**6 Issue 关闭**，并发布 **1 个新版本**。核心维护者 `penso` 主导了 6 个 PR，集中修复了模型探测、代理配置、多选交互等关键体验问题。项目处于**快速收敛期**，Issue 清零策略明确，无新增待处理问题。版本发布节奏稳定（`20260405.06`），供应链安全能力升级。

---

## 2. 版本发布

### [20260405.06](https://github.com/moltis-org/moltis/releases/tag/20260405.06)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-05 |
| **发布者** | 推测为自动化流水线（关联 PR #562） |

**关键更新内容**（基于关联 PR 推断）：
- **供应链安全强化**：集成 GitHub Artifact Attestations，为二进制文件、容器镜像、SBOM 添加 SLSA v1.0 Build Level 2 来源证明
- **签名体系升级**：在现有 Sigstore 无密钥签名 + GPG 签名基础上，叠加 SHA-pinned 的 `actions/attest-build-provenance@v4`

**迁移注意事项**：
- 下游用户可通过 GitHub CLI 验证制品来源：`gh attestation verify <artifact> --repo moltis-org/moltis`
- 无破坏性变更，纯 CI/CD 层增强

---

## 3. 项目进展

### 今日合并/关闭的核心 PR（8 个）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#562](https://github.com/moltis-org/moltis/pull/562) | penso | **CI 安全加固**：GitHub Artifact Attestations 集成 | - |
| [#561](https://github.com/moltis-org/moltis/pull/561) | penso | **应用级代理支持**：新增 `upstream_proxy` 配置，统一 HTTP 客户端代理能力 | [#548](https://github.com/moltis-org/moltis/issues/548) |
| [#560](https://github.com/moltis-org/moltis/pull/560) | penso | **模型发现修复**：探测前重新查询 `/v1/models`，解决动态添加模型不可见问题 | [#551](https://github.com/moltis-org/moltis/issues/551) |
| [#559](https://github.com/moltis-org/moltis/pull/559) | penso | **错误透传修复**：探针失败时暴露真实错误，消除"Service unavailable"误导 | [#554](https://github.com/moltis-org/moltis/issues/554) |
| [#558](https://github.com/moltis-org/moltis/pull/558) | penso | **视觉能力默认开启**：未知模型默认启用 vision，修复 Mistral/Qwen 图片被静默剥离 | [#556](https://github.com/moltis-org/moltis/issues/556) |
| [#557](https://github.com/moltis-org/moltis/pull/557) | penso | **多选交互重构**：供应商设置支持多模型批量选择，新增全选/反选/显式确认 | [#552](https://github.com/moltis-org/moltis/issues/552) |
| [#555](https://github.com/moltis-org/moltis/pull/555) | volfco | **MCP 协议扩展**：Streamable HTTP MCP 服务器支持 | [#294](https://github.com/moltis-org/moltis/issues/294) |
| [#500](https://github.com/moltis-org/moltis/pull/500) | penso | **Matrix 通道集成**：基于 `matrix-sdk 0.16` 的 DM/群聊/反应/打字指示器完整实现 | - |

**里程碑意义**：今日合并修复了 **4 个用户报告的 Bug**（#551, #552, #554, #556），完成 **2 个功能请求**（#294, #548），并新增 **1 个企业级通道**（Matrix）。项目在企业部署灵活性（代理）、多模态能力（vision）、开发者体验（错误信息、批量操作）三方面同步推进。

---

## 4. 社区热点

### 讨论特征分析

| 维度 | 观察 | 信号解读 |
|:---|:---|:---|
| **评论数** | 所有 Issue/PR 评论数 ≤ 1 | 社区处于**高效执行模式**，非设计辩论期 |
| **👍 反应** | 全为 0 | 功能验证依赖实际使用反馈，非投票驱动 |
| **作者集中度** | `bsarkisov` 报告 3 个 Bug，`brunoxylo` 报告 1 个 | **核心用户深度参与**，连续反馈形成质量闭环 |

### 最具代表性的用户反馈链

**[Issue #554](https://github.com/moltis-org/moltis/issues/554)** → **[PR #559](https://github.com/moltis-org/moltis/pull/559)**（24小时闭环）

- **用户痛点**：API key 有效但探针报 "Service unavailable"，错误信息误导性强
- **根因**：错误映射将非 403 错误统一转为 `UNAVAILABLE`
- **修复策略**：后端改为 `INTERNAL` 透传，前端直接显示原始错误
- **社区信号**：企业用户对**可观测性**和**调试效率**有刚性需求

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#554](https://github.com/moltis-org/moltis/issues/554) | 有效 API key 探针失败，错误信息掩盖真实原因 | [#559](https://github.com/moltis-org/moltis/pull/559) | ✅ 已修复 |
| 🟡 **中** | [#551](https://github.com/moltis-org/moltis/issues/551) | "Detect all models" 仅探测已有模型，不发现新增模型 | [#560](https://github.com/moltis-org/moltis/pull/560) | ✅ 已修复 |
| 🟡 **中** | [#552](https://github.com/moltis-org/moltis/issues/552) | 强制单选模型，无法批量添加同供应商多模型 | [#557](https://github.com/moltis-org/moltis/pull/557) | ✅ 已修复 |
| 🟡 **中** | [#556](https://github.com/moltis-org/moltis/issues/556) | Mistral/Qwen 视觉能力被静默禁用，图片输入被剥离 | [#558](https://github.com/moltis-org/moltis/pull/558) | ✅ 已修复 |

**稳定性评估**：今日 **Bug 清零**，无新增报告。修复覆盖**配置工作流**（多选）、**模型发现**（动态更新）、**多模态能力**（vision 默认）、**可观测性**（错误透传）四大关键路径，项目健康度显著提升。

---

## 6. 功能请求与路线图信号

### 已完成的功能请求

| Issue | 需求 | 实现 PR | 纳入版本 |
|:---|:---|:---|:---|
| [#548](https://github.com/moltis-org/moltis/issues/548) | 应用/通道级 HTTP 代理支持 | [#561](https://github.com/moltis-org/moltis/pull/561) | `20260405.06` |
| [#294](https://github.com/moltis-org/moltis/issues/294) | Streamable HTTP MCP 支持 | [#555](https://github.com/moltis-org/moltis/pull/555) | `20260405.06` |

### 待审功能（路线图信号）

| PR | 功能 | 状态 | 预测 |
|:---|:---|:---|:---|
| [#529](https://github.com/moltis-org/moltis/pull/529) | **Microsoft Teams 完整通道实现** | 🟡 Open（已更新） | **高概率下一版本核心功能** |
| | - JWT 双签发者验证（Bot Framework + Entra） | | |
| | - 智能重试分类（401/403/429/5xx 差异化处理） | | |
| | - Webhook 超时与幂等性保障 | | |

**路线图推断**：Teams 通道是企业级部署的**最后一块拼图**（已有 Slack、Matrix、Web），PR 已打磨 5 天，预计近日合并。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issue 描述）

| 用户 | 场景 | 核心不满 | 修复验证 |
|:---|:---|:---|:---|
| `bsarkisov` | 多供应商模型管理 | "被迫逐个添加模型，无法批量操作" | #557 多选重构 |
| `bsarkisov` | 动态模型更新 | "新模型加了但探测不到，必须重启" | #560 实时重查询 `/v1/models` |
| `bsarkisov` | 生产调试 | "错误只说 Service unavailable，完全不知道哪错了" | #559 错误透传 |
| `brunoxylo` | 多模态应用 | "Mistral 明明支持 vision，但上传图片被静默忽略" | #558 默认开启 vision |

### 满意度信号

- **代理支持**（#548）：企业/防火墙后部署的**刚需**，响应速度极快（3 天提案→实现）
- **MCP 扩展**（#294）：社区贡献者 `volfco` 实现，显示**外部开发者参与度**健康

---

## 8. 待处理积压

### 当前积压评估

| 指标 | 数值 | 健康度 |
|:---|:---|:---|
| Open Issues | **0**（今日关闭 6 个，无新增） | 🟢 优秀 |
| Open PRs | **1**（#529 Teams 通道） | 🟢 可控 |
| 长期未响应 Issue | **无** | 🟢 优秀 |

### 唯一待审项关注

**[PR #529](https://github.com/moltis-org/moltis/pull/529)** — Microsoft Teams 通道实现

- **创建**：2026-03-31（6 天）
- **最后更新**：2026-04-05（今日）
- **建议**：该 PR 是企业功能完整性的关键，建议维护者优先完成代码审查，预计可成为 `20260406.x` 版本的核心发布内容。

---

## 附录：快速链接

| 类别 | 链接 |
|:---|:---|
| 项目主页 | https://github.com/moltis-org/moltis |
| 最新版本 | https://github.com/moltis-org/moltis/releases/tag/20260405.06 |
| 待审 PR | https://github.com/moltis-org/moltis/pull/529 |
| 今日修复 Issue 列表 | #548, #551, #552, #554, #556, #294 |

---

*报告生成时间：2026-04-06*  
*数据来源：GitHub API / moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-04-06

## 1. 今日速览

CoPaw 今日社区活跃度**极高**，24小时内产生 **39 条 Issues 更新**（34条活跃/新开，5条关闭）和 **8 条 PR 更新**（5条待合并，3条已合并/关闭）。核心痛点集中在**稳定性与资源消耗**：CPU空转busy loop、Windows初始化挂起、进程泄漏等问题成为讨论焦点。WhatsApp渠道支持取得实质进展，有贡献者提交了新实现。整体项目处于**功能快速迭代与稳定性攻坚并行**的阶段，安全相关Issue（File Guard绕过）需优先关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR（3条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2070](https://github.com/agentscope-ai/CoPaw/pull/2070) | ixiadao | **修复 Token 计数器崩溃**：处理 LLM 返回 list 格式 content 时的 TypeError，解决 `MemoryCompactionHook` 静默失败问题 | 消除核心内存管理组件的稳定性隐患 |
| [#2951](https://github.com/agentscope-ai/CoPaw/pull/2951) | octo-patch | **修复 CLI 初始化挂起**：`copaw init --defaults` 时跳过安全警告提示，解决 Windows Python 3.13 环境挂起问题（Fixes #2943） | 打通 Windows 自动化部署路径 |
| [#2946](https://github.com/agentscope-ai/CoPaw/pull/2946) | joe2643 | **WhatsApp 渠道探索**（关闭，拆分为 #2962）：基于 neonize/whatsmeow 的直接连接方案 | 为即时通讯渠道扩展积累技术验证 |

**整体进展评估**：今日合并 PR 聚焦**稳定性修复**，解决了内存压缩钩子和 Windows CLI 初始化两个阻塞性问题，但核心架构 PR（MiniMax OAuth、心跳机制等）仍在评审队列。

---

## 4. 社区热点

### 高讨论度 Issues

| 排名 | Issue | 评论数 | 核心诉求分析 |
|:---|:---|:---:|:---|
| 🥇 | [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) 空闲时CPU占用100%（AnyIO busy loop） | **8** | **性能危机**：用户发现空载单核满载，定位到 AnyIO 取消处理的 busy polling。这是生产环境部署的**阻断性问题**，需紧急修复 |
| 🥈 | [#2231](https://github.com/agentscope-ai/CoPaw/issues/2231) 语音按钮始终禁用（已关闭） | **7** | 前端状态管理问题，已解决但反映**多模态交互配置复杂度** |
| 🥉 | [#2943](https://github.com/agentscope-ai/CoPaw/issues/2943) `copaw init` Windows 挂起 | **4** | 新用户入门体验阻断，已有 PR #2951 修复 |

### 高互动 PR
- [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) MiniMax OAuth 设备码流（作者主动催审）：**第三方模型生态扩展**的关键基础设施，作者明确表示有后续开发依赖此 PR

**背后诉求洞察**：社区对**生产级稳定性**（CPU/内存/进程管理）的焦虑显著上升，同时**渠道扩展**（WhatsApp）和**模型接入**（MiniMax、Qwen3）需求旺盛。

---

## 5. Bug 与稳定性

### 🔴 严重（生产阻断）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---:|
| [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) | **空闲 CPU 100%**：AnyIO 取消处理 busy loop | 开放，深度排查中 | ❌ |
| [#2960](https://github.com/agentscope-ai/CoPaw/issues/2960) | **MCP Client 热重载泄漏**：配置保存后 CPU 飙升，客户端初始化两次未清理 | 开放，今日新报 | ❌ |
| [#2967](https://github.com/agentscope-ai/CoPaw/issues/2967) | **🚨 安全漏洞**：`execute_shell_command` 可绕过 File Guard 访问受保护目录 | 开放，今日新报 | ❌ |

### 🟡 中等（功能受损）

| Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---:|
| [#2943](https://github.com/agentscope-ai/CoPaw/issues/2943) | Windows `copaw init` 安全警告挂起 | **已修复** | ✅ [#2951](https://github.com/agentscope-ai/CoPaw/pull/2951) |
| [#2934](https://github.com/agentscope-ai/CoPaw/issues/2934) | Browser use 进程泄漏：chromium 未正确终止 | 开放 | ❌ |
| [#2930](https://github.com/agentscope-ai/CoPaw/issues/2930) | 本地模型工具调用解析失败 + 配置重置 | 开放 | ❌ |
| [#2947](https://github.com/agentscope-ai/CoPaw/issues/2947) | Gemma4 模型工具调用死循环 | 开放 | ❌ |

### 🟢 轻微（体验问题）

| Issue | 描述 | 状态 |
|:---|:---|:---|
| [#2970](https://github.com/agentscope-ai/CoPaw/issues/2970) | Windows 输入框中文红色波浪线 | 开放 |
| [#2965](https://github.com/agentscope-ai/CoPaw/issues/2965) | `view_image` 图片内容传输错误（MD5一致但内容错） | 开放 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 技术可行性 | 版本信号 |
|:---|:---|:---:|:---|
| [#2962](https://github.com/agentscope-ai/CoPaw/pull/2962) WhatsApp 渠道（neonize） | 直接连接 WhatsApp Web，无 Meta API 依赖 | ⭐⭐⭐⭐⭐ | **v1.1 高概率纳入**，替代方案已关闭 |
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) MiniMax OAuth + PKCE | 国内模型生态接入 | ⭐⭐⭐⭐⭐ | 评审中，作者催合并 |
| [#2763](https://github.com/agentscope-ai/CoPaw/issues/2763) `/models` `/model` 快捷命令 | 对话内模型管理 | ⭐⭐⭐⭐☆ | 体验优化，👍2 |
| [#2969](https://github.com/agentscope-ai/CoPaw/issues/2969) 个人知识库原生支持 | RAG 能力控制台集成 | ⭐⭐⭐☆☆ | 架构级需求，需评估 |
| [#2961](https://github.com/agentscope-ai/CoPaw/issues/2961) Skill 分类/文件夹管理 | Agent 技能组织 | ⭐⭐⭐⭐☆ | 高频配置场景 |
| [#2966](https://github.com/agentscope-ai/CoPaw/issues/2966) 自定义全局字体 | UI 个性化 | ⭐⭐⭐☆☆ | 边缘需求 |

**路线图判断**：即时通讯渠道扩展（WhatsApp）和国产模型接入（MiniMax）是**确定性方向**；知识库和 Skill 管理反映用户对**规模化使用**的准备。

---

## 7. 用户反馈摘要

### 💔 核心痛点

> *"Windows版本客户端开着，几个小时以后会自己关闭"* — [#2911](https://github.com/agentscope-ai/CoPaw/issues/2911)

> *"最近几个版本都下载安装过了，根本就用不了"* — [#2952](https://github.com/agentscope-ai/CoPaw/issues/2952)（429限流 + AGENT_UNKNOWN_ERROR）

> *"面板聊天记录显示思考过程，无法关闭...非常影响阅读体验"* — [#2972](https://github.com/agentscope-ai/CoPaw/issues/2972)

### 🎯 使用场景

- **自动化运维**：定时任务 + 微信推送（[#2964](https://github.com/agentscope-ai/CoPaw/issues/2964) 发现频道同步 bug）
- **多智能体协作**：同一 Agent 多窗口混乱，期望按任务 ID 合并（[#2937](https://github.com/agentscope-ai/CoPaw/issues/2937)）
- **本地模型部署**：llama.cpp + CoPaw-Flash-9B 工具调用场景（[#2930](https://github.com/agentscope-ai/CoPaw/issues/2930)）

### ⚠️ 安全敏感

- 发现 `execute_shell_command` 可绕过文件保护机制，用户主动进行安全测试并报告（[#2967](https://github.com/agentscope-ai/CoPaw/issues/2967)）

---

## 8. 待处理积压

### 需维护者优先关注

| Issue/PR | 阻塞时长 | 风险 | 建议动作 |
|:---|:---:|:---|:---|
| [#2888](https://github.com/agentscope-ai/CoPaw/issues/2888) CPU busy loop | 3天 | **生产部署阻断** | 分配核心开发者，发布 hotfix |
| [#2967](https://github.com/agentscope-ai/CoPaw/issues/2967) File Guard 绕过 | 1天 | **安全漏洞** | 安全评审，24h内响应 |
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) MiniMax OAuth | 8天 | 贡献者流失风险 | 明确评审时间表 |
| [#2453](https://github.com/agentscope-ai/CoPaw/pull/2453) 心跳确认机制 | 8天 | 长连接稳定性 | 关联 Issue 确认优先级 |
| [#2523](https://github.com/agentscope-ai/CoPaw/pull/2523) .gitattributes 优化 | 7天 | 低 | 快速合并或关闭 |

---

**日报生成时间**：2026-04-06  
**数据来源**：agentscope-ai/CoPaw GitHub 仓库公开数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*