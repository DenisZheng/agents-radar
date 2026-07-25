# AI CLI 工具社区动态日报 2026-07-25

> 生成时间: 2026-07-25 02:04 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 | 2026-07-25

---

## 1. 生态全景

当前 AI CLI 工具生态呈现 **"模型层解耦、基建层内卷、体验层分化"** 的三大态势：
- **模型即插即用成常态**：Claude Code、Copilot CLI、OpenCode、Qwen Code 同日内均接入/支持 Claude Opus 5 或最新旗舰模型，模型切换成本趋近于零，核心竞争力转移至上下文工程、工具链编排与交互稳定性。
- **企业级与远程协作成硬指标**：OpenAI Codex 推进 `ent26` 企业计划、凭证隔离、审计追踪；Claude Code、Gemini CLI、Copilot CLI 均将 Remote Control/远程会话稳定性列为 P0 级攻坚目标，标志着产品从“个人助手”向“团队基础设施”跨越。
- **基础设施债务集中爆发**：Windows 原生体验（MSIX、Git 进程泄漏）、长会话上下文管理（压缩丢失、5MB 硬限制）、子代理失控（权限越界、僵尸进程）成为跨厂商共性痛点，暴露出早期快速迭代留下的架构短板。
- **评测与自动化运维前置**：Gemini CLI 引入 Caretaker + LLM-as-a-Judge 评测闭环，Qwen Code 上线 DSW SWE-bench 全自动管道，OpenCode 重构无锁调度器，工程效能度量已成核心研发投入方向。
- **本地化与多模态成差异化战场**：DeepSeek TUI (CodeWhale) 推进印地语/乌克兰语本地化矩阵，Qwen Code 攻克数学公式渲染契约，Pi 引入受约束工具采样，垂直场景深耕成为中小工具破局关键。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 热点 Issues (Top 10 入选门槛) | 重要 PR 数量 | 核心研发动态关键词 | 活跃度评级 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 2 (v2.1.219/220) | 极高 (Top 1: 805💬/470👍) | 1 | Opus 5 1M 上下文、计费异常、Remote Control 401、Windows MSIX、子代理失控 | 🔥🔥🔥🔥🔥 **超高** |
| **OpenAI Codex** | 4 (Rust Alpha x4) | 高 (Win Git 进程泄漏 33💬/6👍) | 10 | Windows 稳定性、企业级(ent26)、MCP/插件生态、远程执行追踪 | 🔥🔥🔥🔥 **高** |
| **Gemini CLI** | 0 | 高 (Subagent 误报成功 P1) | 10 | 子代理编排可靠性、Auto Memory 安全/去重、Caretaker 自动化运维、评测基建 | 🔥🔥🔥🔥 **高** |
| **GitHub Copilot CLI** | 1 (v1.0.75) | 高 (Plan 模式回归、僵尸进程、Ctrl+C 失效) | 0 | Opus 5 支持、会话恢复 OOM、配置竞争、ACP 协议、Windows Ink 死循环 | 🔥🔥🔥 **中高** |
| **OpenCode** | 1 (v1.18.5) | 高 (Agent 30s 停止、本地模型自动发现 188👍) | 10 | 无锁调度重构、多提供商兼容性、长任务挂起、跨项目会话 | 🔥🔥🔥 **中高** |
| **Qwen Code** | 2 (Stable + Nightly) | 中高 (TUI 渲染覆盖、后台 Shell 误判) | 10 | SWE-bench 自动化管道、Web Shell 工作区、Review 子系统重构、启动懒加载 | 🔥🔥🔥 **中高** |
| **Pi** | 1 (v0.82.0) | 中高 (Compaction 兼容性、llama.cpp 启动竞态、企业代理) | 10 | 受约束工具采样、TUI O(Viewport) 优化、Prompt Cache 契约、Bedrock 支持 | 🔥🔥🔥 **中高** |
| **Kimi Code CLI** | 0 | 中 (ARM 登录失败、远程控制 16👍) | 2 | 企业代理 SSL_CERT_FILE、VS Code 扩展冻结、Windows TUI 交互、ARM64 原生支持 | 🔥🔥 **中** |
| **DeepSeek TUI (CodeWhale)** | 1 (v0.9.1) | 中 (架构重构 EPIC、本地化矩阵、Docker/Homebrew 交付失败) | 10 | 品牌重塑、Fleet/Workflow 四层编排重构、RuntimeThreadManager 拆分、CI/CD 自动化 | 🔥🔥 **中** |

> **说明**：Issue 热度门槛指进入 Top 10 所需的最低 👍/评论数；PR 数量为日报收录的重要 PR 数。

---

## 3. 共同关注的功能方向

| 方向 | 关注工具 (≥3家) | 具体社区诉求 |
| :--- | :--- | :--- |
| **远程协作与会话持久化** | **Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code, OpenCode** | 指数退避重试、后台心跳/健康检查、JWT 刷新竞态修复、跨设备无缝接管、无人值守会话生产可用。 |
| **长上下文/Token 管理** | **Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Pi, Qwen Code** | 自动压缩触发阈值可配置、锚点文件持久化防丢、CAPI 5MB 硬限制突破、压缩摘要截断修复、上下文压缩循环治理。 |
| **Windows 原生稳定性** | **Claude Code, OpenAI Codex, Copilot CLI, Kimi Code, DeepSeek TUI** | MSIX 更新原子化/免重启、Git/conhost 孤儿进程清理、Ink/ConPTY 渲染死循环、方向键/TUI 交互兼容、高 CPU/磁盘占用治理。 |
| **子代理/多智能体编排安全** | **Claude Code, Gemini CLI, Copilot CLI, OpenCode, Qwen Code** | 权限边界继承与审计、强制中断 API、生命周期可视化、嵌套 Fork 失控治理、用户规则 vs 系统提示优先级冲突。 |
| **企业级网络与认证** | **Claude Code, OpenAI Codex, Gemini CLI, Kimi Code, Pi, DeepSeek TUI** | SSL_CERT_FILE/代理链完整支持、OAuth/设备码流在无头/代理环境成功率、多租户计费隔离、审计日志、SSO 集成。 |
| **模型路由与能力一致性** | **Claude Code, OpenAI Codex, Copilot CLI, OpenCode, Qwen Code, Pi** | 跨客户端（CLI/Desktop/Web）模型能力对齐、企业组/免费Tier 权限矩阵透明化、显式降级提示、本地/兼容模型零配置发现。 |
| **评测驱动开发与自动化运维** | **Gemini CLI, Qwen Code, OpenCode, Pi, DeepSeek TUI** | Behavioral/Component Eval 落地、LLM-as-a-Judge 评分卡、黄金数据集工程化、SWE-bench 全自动管道、Issue 分流修复闭环。 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户画像 | 技术路线特征 | 独特护城河 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **厂商官方旗舰，深度绑定 Anthropic 模型能力** | 企业级专业开发者、重度 Claude 用户 | TypeScript/Node.js、紧跟模型迭代、Hook/插件生态开放 | 1M 上下文独占首发、模型新特性（沙箱网络白名单）同步率最高、企业合规就绪 |
| **OpenAI Codex** | **云原生多工作区代理平台，强调远程执行** | 团队/企业、云端开发倡导者、多仓库协作场景 | Rust 核心 + TS 客户端、强隔离沙箱、MCP 为一等公民、企业级认证/审计优先 | 远程执行架构成熟度最高、`ent26` 企业计划落地快、插件/技能远程分发体系完善 |
| **Gemini CLI** | **Google 生态集成，长期记忆与自动化运维实验田** | Google Cloud 用户、长周期项目维护者、Agent 编排探索者 | Go/TS 混合、Auto Memory 体系完善、Caretaker 智能运维闭环、评测基建最全 | 长期记忆生产化最激进、自动化运维智能体（Caretaker）产品化最彻底、Wayland 等 Linux 桌面适配投入大 |
| **GitHub Copilot CLI** | **GitHub 原生工作流深度融合，ACP 协议推动者** | GitHub 重度用户、PR/Code Review 中心工作流、VS Code 生态用户 | TypeScript/React Ink、ACP (Agent Client Protocol) 标准制定者、Plan 模式核心 | GitHub API/原语（Issue/PR/Action）零摩擦调用、ACP 互操作性愿景、企业级 GitHub 集成无缝 |
| **OpenCode** | **模型中立、本地优先、极客可定制的单二进制工具** | 本地模型玩家、隐私敏感用户、追求极致启动速度/可定制性开发者 | Go 单二进制、Provider 聚合层极薄、TUI 交互精细、无锁并发调度 | OpenAI 兼容端点模型自动发现 (188👍)、多 Profile 切换、极简配置、Bun/Node 双运行时性能优化 |
| **Qwen Code** | **阿里云/通义生态入口，中文/数学垂直场景深耕** | 中文开发者、数学/科研/教育场景、阿里云生态用户、Web Shell 需求者 | TS/Go 混合、Web Shell 守护进程架构、ACP 兼容、DSW 云原生评测管道 | 数学公式渲染契约、Web Shell 多工作区/只读 PR 面板、中文语境下的 TUI 交互打磨、SWE-bench 持续基准 |
| **Pi** | **结构化输出与受约束采样先锋，Provider 中立层** | 依赖函数调用/结构化输出的工程化团队、多模型路由需求者 | TS/Go、Provider-neutral 缓存/采样契约、Vitest 评测框架、Mantle 多云适配 | **受约束工具采样** 技术领先 (JSON Schema/Lark/Regex)、Prompt Cache 标准化、Bedrock/Azure 等多云原生支持 |
| **Kimi Code CLI** | **月之暗面模型入口，追求极简体验与跨设备连续性** | Kimi 模型忠实用户、移动端/远程协作重度需求者、国内网络环境开发者 | Go 单二进制、TUI 交互、OAuth 登录、VS Code 扩展 | 远程会话接管呼声最高 (16👍)、企业代理/ARM64 适配务实、国内网络连通性优化优先 |
| **DeepSeek TUI (CodeWhale)** | **架构极客的实验田，Fleet/Workflow 编排模型探索者** | 关注 Agent 编排理论、多语言本地化、终端美学的高阶开发者 | Rust 核心、四层编排模型、极致模块化拆分、CI/CD 全自动化治理 | "Intent is the artifact" 协作范式、多模态路由一等能力、印地语/乌克兰语等长尾语言本地化矩阵、架构重构透明化 |

---

## 5. 社区热度与成熟度判断

| 梯队 | 工具 | 判断依据 | 当前阶段 |
| :--- | :--- | :--- | :--- |
| **第一梯队：头部成熟/高维竞争** | **Claude Code, OpenAI Codex, GitHub Copilot CLI** | Issue 量级大（百~千级讨论）、厂商全职团队投入、企业级功能落地快、版本节奏稳（周/双周）、生态建设（插件/MCP/ACP）系统化 | **成熟期/规模化商用期** |
| **第二梯队：快速迭代/差异化突围** | **Gemini CLI, OpenCode, Qwen Code, Pi** | 核心架构高频重构（无锁调度、编排模型、记忆体系）、自建评测/基准管道、垂直能力（记忆、数学、结构化输出）深、社区高质量技术讨论多 | **高速成长期/技术攻坚期** |
| **第三梯队：小而美/垂直深耕** | **Kimi Code CLI, DeepSeek TUI (CodeWhale)** | 单一模型绑定/自研模型优先、社区规模较小但粘性高、关注细分痛点（远程接管、本地化、架构纯粹性）、发布节奏受限于核心团队带宽 | **

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-07-25）

---

## 1. 热门 Skills 排行（Top 8）

| # | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|---|------------|----------|--------------|------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator: fix run_eval.py 0% recall` | 修复技能描述优化循环的核心评估失效问题（`run_eval.py`/`run_loop.py`/`improve_description.py` 全链路 recall=0%） | **10+ 独立复现**、**阻塞技能自动优化**、**关联 Issue #556/#1169/#1323**，被视为「最高优先级阻塞性 Bug」 | `OPEN` |
| 2 | **[#492](https://github.com/anthropics/skills/issues/492)** Security: `anthropic/` 命名空间信任边界滥用 | 社区技能以官方命名空间分发，导致用户误授高权限 | **43 条评论**、**安全红线问题**、**需官方回应命名空间治理策略** | `OPEN` (Issue) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit`：机械验证 + 四维推理质量门 | 交付前自审：文件存在性 → 四维推理审计（严重度优先），通用于任意项目/技术栈 | **关联 Issue #1385 提案**、**v1.3.0 迭代**、**「质量门」元技能方向标杆** | `OPEN` |
| 4 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography`：排版质量控制 | 解决 AI 生成文档的孤行/寡行、标题断页、编号错位等通用排版缺陷 | **「每个 Claude 生成文档都会遇到」**、**用户极少主动要求但极度需要** | `OPEN` |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns`：全栈测试模式库 | Testing Trophy、AAA 模式、React/Vue/后端测试、契约测试、E2E、性能/混沌/变异测试 | **覆盖「测试全生命周期」**、**团队标准化诉求强** | `OPEN` |
| 6 | **[#228](https://github.com/anthropics/skills/issues/228)** 组织级技能共享 | 需在 Claude.ai 原生支持技能库共享/一键安装，替代「下载→发送→手动上传」 | **14 评论 / 8 👍**、**企业级协作刚需**、**平台层面能力缺口** | `OPEN` (Issue) |
| 7 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert`：色彩专家技能 | ISCC-NBS/Munsell/XKCD/RAL 命名、色空间选型表、配色方案、无障碍对比度、打印色域 | **设计/前端/数据可视化通用**、**近期更新活跃 (07-21)** | `OPEN` |
| 8 | **[#556](https://github.com/anthropics/skills/issues/556)** `run_eval.py` 触发率 0% 根因 | `claude -p` 无法触发技能/命令，导致评估循环完全失效 | **12 评论 / 7 👍**、**直接阻塞 #1298 修复验证**、**Windows 与 Unix 双平台复现** | `OPEN` (Issue) |

> **备注**：PR 评论数字段显示 `undefined`，综合「更新频率、关联 Issue 热度、作者响应、问题严重度」综合排序。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue / 信号 | 核心诉求 |
|-----------|-------------------|----------|
| **安全与治理** | [#492](https://github.com/anthropics/skills/issues/492) (43💬), [#1175](https://github.com/anthropics/skills/issues/1175) | 命名空间隔离、官方/社区技能信任边界、企业数据权限模型 |
| **平台化协作** | [#228](https://github.com/anthropics/skills/issues/228) (14💬/8👍), [#189](https://github.com/anthropics/skills/issues/189) (6💬/9👍) | 组织级技能库、去重安装、一键分发、版本管理 |
| **技能创作工具链稳定性** | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061), [#362](https://github.com/anthropics/skills/pull/362), [#361](https://github.com/anthropics/skills/pull/361) | `skill-creator` 评估循环跨平台可用、UTF-8/YAML 解析健壮、Windows 原生支持 |
| **质量门/自审元技能** | [#1367](https://github.com/anthropics/skills/pull/1367), [#1385](https://github.com/anthropics/skills/issues/1385), [#83](https://github.com/anthropics/skills/pull/83) | 交付前机械校验、推理质量多维审计、技能自身质量分析 |
| **专业领域深度技能** | [#514](https://github.com/anthropics/skills/pull/514) (排版), [#1302](https://github.com/anthropics/skills/pull/1302) (色彩), [#486](https://github.com/anthropics/skills/pull/486) (ODT), [#525](https://github.com/anthropics/skills/pull/525) (Pyxel), [#181](https://github.com/anthropics/skills/pull/181) (SAP 预测) | 垂直领域「隐性专业知识」显性化为可复用技能 |
| **MCP/协议互通** | [#16](https://github.com/anthropics/skills/issues/16), [#29](https://github.com/anthropics/skills/issues/29) | Skills ↔ MCP 双向暴露、Bedrock 兼容、标准化接口 |

---

## 3. 高潜力待合并 Skills（评论活跃、近期更新、解决实痛点）

| PR | Skill | 判断理由 | 预计落地窗口 |
|----|-------|----------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` 核心修复 | **阻塞整个技能优化闭环**，10+ 复现，官方必须优先 | **极高**（可能已在内部测试） |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` v1.3.0 | 元技能标杆，配套 Issue #1385 设计完整，通用性强 | **高**（近期迭代频繁） |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | 通用刚需、实现完整、无争议依赖 | **高** |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | 覆盖面广、团队标准化需求大、文档详实 | **中高** |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | 近期活跃更新 (07-21)、设计/可视化通用、自包含 | **中高** |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` (OpenDocument) | 企业文档流标准格式、MCP 配套 (`pyxel-mcp` 模式) | **中** |
| [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) / [#539](https://github.com/anthropics/skills/pull/539) | `pdf`/`docx`/`skill-creator` 修复组 | 修复现有技能在跨平台/边界条件下的数据损坏与解析失败 | **中**（维护类易合并） |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` / `skill-security-analyzer` | 元技能生态补全、官方示例集扩充 | **中** |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是：「让技能创作与分发生态在安全、稳定、协作三个维度同时达标」——即修复 `skill-creator` 评估失效等工具链阻塞性缺陷、建立官方/社区技能信任边界与命名空间治理、并提供组织级原生共享分发能力；在此基础上，向「自审质量门」「垂直专业知识显性化」「MCP 互通」三大方向演进。**

---

# Claude Code 社区动态日报 | 2026-07-25

---

## 1. 今日速览

- **重大模型更新**：v2.1.219 发布 **Claude Opus 5** 作为新默认 Opus 模型，提供 1M 上下文窗口与快速模式（$10/$50 per Mtok）；新增沙箱网络严格白名单与 `DirectoryAdded` Hook。
- **核心痛点持续发酵**：#38335（Max 套餐会话额度异常消耗）已积累 **805 条评论、470 👍**，成为社区讨论度最高的长期问题；Windows MSIX 更新失败（#76357）、Remote Control 认证不稳（#78469、#81036）、大上下文连接中断（#67766）等基础设施故障高频出现。
- **新模型落地差异显现**：多个 Issue 反馈 Opus 5 1M 上下文在 Desktop 端仅 200K（#81039）、企业组织不可用时静默降级并覆盖偏好（#81025）、Fable 5 仅限额外积分使用（#81017），模型分发策略与权限矩阵存在不一致。

---

## 2. 版本发布

### v2.1.220 (Latest)
> **类型**：补丁 / 稳定性  
> **内容**：Bug 修复与可靠性改进，未公开具体变更列表。  
> [🔗 Release 页面](https://github.com/anthropics/claude-code/releases/tag/v2.1.220)

### v2.1.219 (Major Feature)
> **类型**：功能发布  
> **核心变更**：
> - **新增 Claude Opus 5 (`claude-opus-5`)**：现为默认 Opus 模型，支持 **1M 上下文**，快速模式定价 $10/$50 per M tokens
> - **新增 `sandbox.network.strictAllowlist` 设置**：拒绝非白名单主机的沙箱命令，无需提示即生效
> - **新增 `DirectoryAdded` Hook**：目录添加后触发，扩展自动化能力  
> [🔗 Release 页面](https://github.com/anthropics/claude-code/releases/tag/v2.1.219)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 核心问题 | 为什么重要 |
|---|-------|------|------|----------|------------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) Max 套餐会话额度自 3/23 起异常快速耗尽 | 🟢 OPEN | **805 💬 / 470 👍** | CLI 使用下 Token 消耗异常，疑似计费/统计逻辑缺陷 | **社区最大痛点**，跨越 4 月仍未修复，直接影响付费用户信任与成本控制 |
| 2 | [#36431](https://github.com/anthropics/claude-code/issues/36431) Telegram 插件：入站 MCP 通道通知未送达会话 | 🟢 OPEN | 21 💬 / 32 👍 | MCP 入站消息丢失，仅出站正常 | 揭示 **MCP 协议栈在插件场景下的可靠性缺口**，阻碍第三方集成生态 |
| 3 | [#76357](https://github.com/anthropics/claude-code/issues/76357) Windows MSIX：每次更新均失败“文件被占用”，需重启才能启动 | 🟢 OPEN | 7 💬 / 4 👍 | 更新流程未正确释放文件句柄，导致应用不可用 | **Windows 原生安装路径严重受损**，影响企业桌面部署体验 |
| 4 | [#67766](https://github.com/anthropics/claude-code/issues/67766) 大上下文会话中频繁出现 `ECONNRESET` / 服务端主动 FIN | 🟢 OPEN | 6 💬 / 4 👍 | 长会话下 Socket 被服务端中途关闭，附带 10 个 requestId | 核心网络稳定性问题，直接导致**长任务中断、状态丢失** |
| 5 | [#78469](https://github.com/anthropics/claude-code/issues/78469) Remote Control 桥接初始化：有效 OAuth Token 间歇性 401（50-70% 失败率） | 🟢 OPEN | 6 💬 / 1 👍 | 后端舰队分片导致 token 校验不一致 | **远程协作核心链路不可用**，严重打击“随时随地编码”承诺 |
| 6 | [#80263](https://github.com/anthropics/claude-code/issues/80263) 插件提交显示“已发布”但从未出现在公共目录，重复条目卡死 | 🟢 OPEN | 7 💬 | 发布流程与目录同步断裂，无法人工干预 | **插件生态分发管道堵塞**，开发者无法触达用户 |
| 7 | [#81025](https://github.com/anthropics/claude-code/issues/81025) 会话默认 `claude-opus-5[1m]` 但组织不可用，静默回退并覆盖保存的模型偏好 | 🟢 OPEN | 3 💬 | 无 `--model` 启动时，企业组被强制降级且偏好被覆写 | **新模型发布后的权限矩阵未同步**，破坏用户显式配置 |
| 8 | [#81039](https://github.com/anthropics/claude-code/issues/81039) Desktop App 固定 200K 上下文，CLI 却用 1M —— 实际分发模型不一致 | 🟢 OPEN | 0 💬 | 同账号同机器，Desktop 分发 `claude-opus-5`（200K），CLI 分发 `claude-opus-5[1m]` | **客户端间模型能力割裂**，用户无法预期实际上下文窗口 |
| 9 | [#81035](https://github.com/anthropics/claude-code/issues/81035) 嵌套 `Agent(subagent_type:"fork")` 仍生成无监管后台进程，执行真实外部动作（合并 PR、删分支） | 🟢 OPEN | 0 💬 | 失败的嵌套 fork 仍启动进程并绕过权限执行管理员操作 | **严重安全/供应链风险**：子代理失控可越权修改生产仓库 |
| 10 | [#81036](https://github.com/anthropics/claude-code/issues/81036) Remote Control 桥接初始化 3 次重试（~1.3s）后永久放弃，无后台重试、无可观测失败态 | 🟢 OPEN | 0 💬 | 启动期网络抖动即导致永久离线，无人值守会话不可用 | **生产级远程会话的可用性缺口**，需指数退避与健康检查端点 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 类型 | 核心内容 | 关联 Issue |
|---|----|------|------|----------|------------|
| 1 | [#80883](https://github.com/anthropics/claude-code/pull/80883) feat: Add context-safety-net plugin to mitigate auto-compact context loss | 🟢 OPEN | 功能 / 插件 | 引入 **context-safety-net 插件**：在自动压缩前持久化关键“锚点文件”（如规范、架构文档），压缩后自动恢复上下文，防止长会话静默退化 | #42542, #13112, #28721 |

> **备注**：过去 24h 仅 1 个 PR 更新，社区贡献集中于 Issue 反馈而非代码提交。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue | 社区呼声核心 |
|----------|--------------|--------------|
| **模型访问与一致性** | #81025, #81039, #81017 | 企业组/免费 tier/不同客户端对新模型（Opus 5 1M、Fable 5）的**权限矩阵透明化**、**显式降级提示**、**跨端能力对齐** |
| **远程协作与 Remote Control 稳定性** | #78469, #81036, #67360 | **指数退避重试、后台心跳、可观测状态机、JWT 刷新竞态修复** —— 让无人值守会话生产可用 |
| **沙箱与安全边界增强** | #81032 (macOS sandbox `ProcessPoolExecutor` 失败), #81035 (fork 失控) | **Seatbelt 策略补全、子代理权限继承与审计、网络白名单默认拒绝** |
| **插件/MCP 生态交付链路** | #80263, #36431 | **发布→目录同步 SLA、MCP 入站通道可靠性、连接器去重加载** |
| **长会话上下文管理** | #80883 (PR), #81029 (Advisor 工具膨胀计数器), #81030 (/tasks 面板过早清理) | **锚点持久化、压缩触发器可配置、子代理生命周期可视化** |
| **Windows 原生体验** | #76357 | **MSIX 更新原子化、文件锁释放、免重启热更新** |
| **计费/额度透明化** | #38335, #62644 | **实时 Token 仪表盘、异常消耗告警、免费 tier 限额修正** |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“信任危机”源于计费与模型分发的不透明**  
   - #38335 805 条评论的核心诉求：**实时用量可视化 + 异常扣费回滚机制**；#81025/#81039 揭示**模型路由逻辑对用户不可见**，导致“以为用 1M 实则 200K”。

2. **Remote Control 仍处于“不可靠原型”阶段**  
   - 401 间歇性失败（#78469）、启动即永久放弃（#81036）、JWT 刷新竞态（#67360）三大问题叠加，**无法支撑生产级远程开发流**，开发者呼吁：`systemd` 级守护进程 + 健康检查端点 + 结构化日志。

3. **子代理/多智能体失控风险上升**  
   - #81035 展示**嵌套 fork 仍能以管理员权限操作 Git**，#81038 指出 20+ 次 STOP 命令被忽略；需 **权限边界继承、强制中断 API、审计日志**。

4. **Windows 与 Desktop 端被视为

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-07-25

---

## 1. 今日速览

- **Windows 平台稳定性问题集中爆发**：多个高热度 Issue 指向 Windows 版 Codex 频繁生成 `git.exe` 孤儿进程、CPU 占用高、甚至导致应用无法启动，已成为社区当前最大痛点。
- **Alpha 版本高频迭代**：过去 24 小时连续发布 4 个 Rust 端 alpha 版本（v0.146.0-alpha.6~9），显示核心运行时正在密集修复与验证中。
- **企业级与多租户能力落地**：多个 PR 合并支持 `ent26` 企业计划、MCP 认证路由、插件远程 ID 追踪、分页线程 Fork 等，生态向企业级、多工作区方向推进。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| `rust-v0.146.0-alpha.9` | Alpha | 连续第 4 次 alpha 发布，配合 CLI/核心运行时的快速修复验证 |
| `rust-v0.146.0-alpha.8` | Alpha | 同上 |
| `rust-v0.146.0-alpha.7` | Alpha | 同上 |
| `rust-v0.146.0-alpha.6` | Alpha | 同上 |

> 💡 **观察**：alpha 版本密集发布通常预示着即将进入 beta 或稳定版候选，建议关注后续 changelog 以确认核心修复是否包含 Windows Git 进程泄漏、上下文压缩等高优问题。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 评论/👍 | 关键信息 | 重要性 |
|---|------|---------|----------|--------|
| [#17229](https://github.com/openai/codex/issues/17229) | **Windows: Codex 反复生成 `git.exe status` 并留下孤儿 `git.exe`/`conhost.exe` 进程** | 33 / 6 | 版本 26.325.3894.0，进程泄漏导致资源耗尽，用户需手动清理 | 🔴 **Critical** — 核心稳定性，影响所有 Windows 用户 |
| [#20880](https://github.com/openai/codex/issues/20880) | **App 静默在 `~/Documents/Codex` 创建空文件夹** | 20 / 39 | 每次启动都创建，用户需手动删除，👍 39 显示强共鸣 | 🟠 **High** — 用户体验细节，易修复但长期未解 |
| [#35057](https://github.com/openai/codex/issues/35057) | **Windows Desktop: 添加第二个文件夹后应用无法启动** | 19 / 5 | 版本 26.721.3404.0，卡在“An error occurred”通用错误页 | 🔴 **Critical** — 多工作区核心场景阻断 |
| [#28078](https://github.com/openai/codex/issues/28078) | **Xcode 27 beta: ChatGPT Pro 账号需邮件 OTP 时登录失败** | 18 / 11 | Go 账号正常，仅 Pro 受影响，阻断 macOS/iOS 开发者 | 🟠 **High** — IDE 集成阻断，付费用户优先 |
| [#25928](https://github.com/openai/codex/issues/25928) | **VS Code/Cursor 扩展：提交的提示词随机消失** | 16 / 8 | 版本 3.6.31，队列中提示词丢失，严重影响工作流 | 🟠 **High** — 编辑器集成核心路径 |
| [#35032](https://github.com/openai/codex/issues/35032) | **Desktop 自动压缩完成但上下文仍 ~80% 满，触发反复压缩** | 14 / 0 | 长会话工具密集型场景，token 浪费显著 | 🟡 **Medium** — 上下文管理效率，影响成本 |
| [#22085](https://github.com/openai/codex/issues/22085) | **Windows: 大量 Git 进程导致持续高 CPU（已关闭）** | 14 / 24 | 近期更新后回归，👍 24 显示广泛影响 | 🔴 **Critical** — 已关闭但需验证修复是否彻底 |
| [#20933](https://github.com/openai/codex/issues/20933) | **Windows: 打开项目触发多 `git.exe add -A` 导致 CPU/磁盘飙升** | 13 / 11 | 并行 Git 操作，严重拖慢开发机 | 🔴 **Critical** — 与 #17229 可能同根因 |
| [#34133](https://github.com/openai/codex/issues/34133) | **Windows: `Page.captureScreenshot` 导致 GPU 进程崩溃（Code Integrity 拒载 `vk_swiftshader.dll`）** | 9 / 0 | 浏览器截图触发，Win10 上复现 | 🟡 **Medium** — 安全策略与捆绑库冲突 |
| [#20930](https://github.com/openai/codex/issues/20930) | **远程连接场景下 App 通知不工作** | 8 / 15 | macOS 连 Linux 远程，轮转完成无通知 | 🟡 **Medium** — 远程开发核心场景缺失 |

> **趋势提示**：Windows 平台问题占据前 10 的 6 席，且多为进程管理、Git 集成、启动崩溃等**基础设施层**缺陷；macOS/Xcode 与远程开发场景次之。

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心变更 | 影响面 |
|---|------|------|----------|--------|
| [#35275](https://github.com/openai/codex/pull/35275) | Trace remote exec-server connection setup | ✅ Closed | 为远程环境启动全链路添加 tracing span（Noise、WS、registry 等） | 可观测性、远程执行调试 |
| [#35271](https://github.com/openai/codex/pull/35271) | Include code-mode tool names in Responses Lite metadata | ✅ Closed | 新增 `code_mode_tool_names` 字段，防止客户端覆盖 | 协议标准化、工具调用审计 |
| [#29752](https://github.com/openai/codex/pull/29752) | feat(core): integrate experimental credential broker | 🟢 Open | 核心集成代理凭证机制，跨命令生命周期保持 brokered 值 | 安全、企业级凭证隔离 |
| [#35267](https://github.com/openai/codex/pull/35267) | Harden network approval cancellation and concurrency | ✅ Closed | 网络审批按 turn/execution 作用域，取消/拒绝时正确清理 | 安全、并发控制 |
| [#35266](https://github.com/openai/codex/pull/35266) | Allow disabling in-process code-mode host fallback | ✅ Closed | 新增 `features.code_mode_host.disable_in_process_fallback` 配置 | 稳定性、沙箱隔离策略 |
| [#35264](https://github.com/openai/codex/pull/35264) | Sign bundled macOS helper binaries | ✅ Closed | `rg`、`zsh` 等助手二进制纳入签名/公证流程 | macOS 合规、供应链安全 |
| [#35262](https://github.com/openai/codex/pull/35262) | Track remote plugin IDs in skill invocation analytics | ✅ Closed | 技能调用事实新增 `remote_plugin_id`，显式/隐式均传播 | 插件生态、用量统计 |
| [#35261](https://github.com/openai/codex/pull/35261) | Propagate remote plugin IDs to skill metadata | ✅ Closed | 从加载到 `SkillMetadata` 携带本地/远程双重身份 | 插件版本管理、多源去重 |
| [#35238](https://github.com/openai/codex/pull/35238) | Support the ent26 enterprise plan | ✅ Closed | 认证、账号协议、限流载荷、schema 全链路识别 `ent26` | 企业级部署、计费隔离 |
| [#35220](https://github.com/openai/codex/pull/35220) | Support paginated thread forks | ✅ Closed | 分页历史线程可 Fork，仅持久化子记录 | 长会话管理、协作分支 |

> **亮点**：本批 PR 以 **“企业级就绪”** 为主线——凭证隔离、多租户计划、审计追踪、插件远程身份、分页线程协作——显示产品正从“个人助手”向“团队/企业基础设施”演进。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表性 Issue | 社区呼声 |
|----------|--------------|----------|
| **Windows 基础稳定性** | #17229, #35057, #22085, #20933, #33450, #35179 | 🔥🔥🔥🔥🔥 最高频、最痛点 |
| **上下文/Token 管理优化** | #35032, #35259, #35050 | 🔥🔥🔥 长会话成本敏感 |
| **IDE 深度集成（Xcode/VS Code/Cursor）** | #28078, #25928, #35258 | 🔥🔥🔥 付费用户核心场景 |
| **远程/WSL 开发体验** | #20930, #35119, #35092 | 🔥🔥 云端/混合开发刚需 |
| **模型路由与行为一致性** | #31967, #34677, #35160, #34306, #33810 | 🔥🔥 Pro/企业用户信任度 |
| **插件/技能生态（MCP、远程插件、发布）** | #35262, #35261, #35254, #31307, #31310 | 🔥🔥 可扩展性基建 |
| **企业级特性（ent26、审计、合规）** | #35238, #35271, #35267, #35264 | 🔥🔥 商业化关键路径 |

---

## 6. 开发者关注点总结

| 痛点/需求 | 高频表现 | 建议关注优先级 |
|-----------|----------|----------------|
| **Windows 进程泄漏与 CPU 飙升** | 多 Issue 重复报告 `git.exe`/`conhost.exe` 孤儿进程，启动/打开项目/添加文件夹均触发 | **P0** — 阻断 Windows 生产力，建议专项攻坚 |
| **“静默副作用”破坏信任** | 自动创建 `~/Documents/Codex`、隐藏 pinned 任务、通知不弹出 | **P1** — 细节体验决定留存，易修复高收益 |
| **上下文压缩

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-25

> 数据来源：`google-gemini/gemini-cli` | 统计窗口：过去 24 小时  
> 本期无新版本发布，核心动态集中在 **子代理稳定性**、**Auto Memory 机制优化**、**浏览器 Agent 兼容性** 以及 **Caretaker 自动化运维体系** 的建设上。

---

## 1. 今日速览
- **核心稳定性攻坚**：多个 P1/P2 级 Bug 聚焦于子代理（Subagent）异常终止上报为成功、Generalist Agent 挂起、Shell 命令执行卡死等阻塞性问题，维护团队正集中回归测试（`status/need-retesting`）。
- **Auto Memory 体系重构**：连续 4 个 Issue（`#26516`、`#26522`、`#26523`、`#26525`）系统性解决内存提取重试风暴、低信号会话隔离、补丁校验缺失及明文泄露风险，标志着长期记忆功能进入“生产级加固”阶段。
- **自动化运维新基建**：Caretaker Agent 相关 PR（`#28467`、`#28530`、`#28532`）密集落地，引入 Firestore Schema 演进、评估框架（LLM-as-a-Judge）与黄金数据集同步工具，推动 Issue 分流/修复流程的智能化闭环。

---

## 2. 版本发布
> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 优先级/标签 | 核心痛点 | 社区热度（👍/评论） | 关注理由 |
|---|-------|-------------|----------|---------------------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent MAX_TURNS 被误报为 GOAL 成功 | **P1**, `area/agent`, `status/need-retesting` | 子代理触及轮次上限实为中断，却上报成功，导致上游编排逻辑误判 | 👍 2 / 12 条 | **最严重编排 Bug**：直接破坏多 Agent 协作可信度，阻塞复杂任务自动化 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 挂起 1 小时不响应 | **P1**, `area/agent`, `status/need-retesting` | 代理转交给 Generalist 后彻底卡死，禁用子代理可规避 | 👍 8 / 8 条 | **高频用户感知故障**，大量 👍 表明影响面广，需尽快 Root Cause |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令已结束仍显示 “Waiting input” | **P1**, `area/core`, `effort/medium` | 简单 CLI 执行完毕后终端状态机不同步，导致后续流程阻塞 | 👍 3 / 4 条 | **核心交互回路断裂**，影响所有依赖 Shell Tool 的工作流 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级鲁棒评估体系建设 | **P1**, `aiq/eval_infra`, `kind/customer-issue` | 76 个行为评测用例跨 6 模型运行，需建立可持续的评估管线 | 👍 0 / 7 条 | **质量保障基建**，关联 `#15300`，决定后续回归测试效能 |
| 5 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | **P2**, `area/agent` | 提取 Agent 跳过低信号会话导致索引未标记“已处理”，触发无限调度 | 👍 0 / 5 条 | **资源泄漏隐患**，长期运行会耗尽配额/算力 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 明文风险与日志过度 | **P2**, `area/security` | 密钥脱敏在模型上下文内进行，服务端仍可能记录原始技能/会话 | 👍 0 / 4 条 | **安全合规硬指标**，需在数据离设备前完成确定性脱敏 |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser Subagent 在 Wayland 下失效 | **P1**, `agent/browser`, `status/need-retesting` | Linux Wayland 会话下浏览器代理启动即报 GOAL 终止 | 👍 1 / 4 条 | **平台兼容性缺口**，影响 Linux 桌面开发者核心场景 |
| 8 | [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) 创建 Vite 应用卡在交互式提示符 | **P2**, `area/agent` | 模型未处理交互式 CLI 提示，导致脚手架流程挂起 | 👍 0 / 2 条 | **典型 E2E 场景失败**，需补充 Behavioral Eval 回归 |
| 9 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知工具链价值评估 | **P2**, `kind/feature`, `kind/customer-issue` | 探索 AST 级读取/搜索/映射是否能减少 Token 与轮次 | 👍 1 / 7 条 | **前瞻性架构调研**，关联 `#22746`，可能重塑代码库理解能力 |
| 10 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 模型主动调用 Skill/Subagent 比例极低 | **P2**, `area/agent` | 即便任务强相关，模型也不自发使用自定义技能/子代理 | 👍 0 / 6 条 | **核心能力释放受限**，提示词/系统指令层面需强化引导机制 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态/规模 | 核心变更 | 关联价值 |
|---|----|-----------|----------|----------|
| 1 | [#28467](https://github.com/google-gemini/gemini-cli/pull/28467) `feat(caretaker): update Firestore schema with error, and pr_number fields` | Open, **size/s** | 引入 `error` 顶层字段、修复自动关闭状态、新增 `pr_number` 追踪 | **Caretaker 观测能力跃升**，支撑端到端 Issue->PR 闭环追踪 |
| 2 | [#28530](https://github.com/google-gemini/gemini-cli/pull/28530) `feat(caretaker-evals): add triage evaluation framework and judge runner` | Open, **size/l** | LLM-as-a-Judge 评分卡、Git Worktree 并行基准运行器、多模型对比矩阵 | **自动化分流质量量化**，为 Prompt 迭代提供科学依据 |
| 3 | [#28532](https://github.com/google-gemini/gemini-cli/pull/28532) `feat(caretaker-evals): add local golden issue collection and firestore sync tools` | Open, **size/l** | 黄金数据集本地采集/校验/同步 CLI，支持增量推送 Firestore | **评估数据工程化**，解决“评测集从哪来、怎么维护” |
| 4 | [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) `fix(core): refresh MCP OAuth tokens with the stored client ID` | Open, **P1**, `area/security`, **size/m** | 修复动态客户端注册场景下 Token 刷新失败导致凭证被删除、强制重登 | **MCP 生产可用性关键修复**，消除无感重认证体验坑 |
| 5 | [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) `fix(auth): use native fetch for OAuth token exchange to avoid "Premature close"` | Open, **P1**, `area/security`, **size/m** | 头部 VPS 环境下 Node `undici` 与 Google OAuth 端点不兼容，改用原生 `fetch` | **登录成功率提升**，解决无头环境高频登录失败 |
| 6 | [#28517](https://github.com/google-gemini/gemini-cli/pull/28517) `fix(core): enforce HTTPS for GoogleCredentialsAuthProvider` | **Closed**, **size/m** | 强制 ADC Token 交换走 HTTPS，防明文泄露 | **零信任网络合规**，安全基线加固 |
| 7 | [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) `fix(core): enforce explicit tag length and validation in file keychain` | Open, **size/m** | 文件凭证存储强制 128-bit 认证标签，跨 Node 版本统一校验 | **密钥存储规范化**，规避运行时差异导致的解密失败 |
| 8 | [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) `fix(vscode-ide-companion): stop leaking gemini.diff.accept and onDidChangeWorkspaceFolders disposables` | Open, **P2**, `area/core`, **size/s** | 修复激活时订阅包裹在逗号表达式导致仅最后一个 Disposable 生效 | **VS 扩展内存泄漏修复**，长时会话稳定性保障 |
| 9 | [#28346](https://github.com/google-gemini/gemini-cli/pull/28346) `Fix trust dialog disclosure for runnable hooks` | **Closed**, **P1**, `area/security`, **size/m** | 信任对话框仅展示规范化后的可执行 Hook，废弃扁平无效条目 | **供应链攻击面收窄**，用户知情权落实 |
| 10 | [#28330](https://github.com/google-gemini/gemini-cli/pull/28330) `fix(ide-companion): set token file mode atomically to close TOCTOU window` | **Closed**, **P2**, `area/security`, **size/s** | `writeFile` + `chmod` 竞态窗口改为原子操作 | **本地提权风险消除**，安全纵深防御细节 |

---

## 5. 功能需求趋势洞察

| 趋势方向 | 代表 Issue/PR | 社区信号强度 | 解读 |
|----------|---------------|--------------|------|
| **多 Agent 编排可靠性** | `#22323` `#21409` `#22093` `#21763` | ⭐⭐⭐⭐⭐ | 从“能跑通”转向“可观测、可调试、可恢复”，Subagent 轨迹共享(`#22598`)、Bug Report 上下文注入(`#21763`)成刚需 |
| **长期记忆生产化** | `#26516` `#26522` `#26523` `#26525` | ⭐⭐⭐⭐ | 安全（脱敏前置）、工程（去重/隔离/校验）、运维（指标/告警）三维度同时推进 |
| **浏览器 Agent 跨平台** | `#21983` `#22232` `#22267` | ⭐⭐⭐ | Wayland 适配、Profile 锁恢复、配置下发生效，补齐 Linux 桌面体验短板 |
| **评估驱动开发** | `#24353` `#28530` `#28532` `#28344` | ⭐⭐⭐⭐ | Behavioral Eval → Component Eval → LLM-as-a-Judge → CI Gate，形成完整质量闭环 |
| **AST/语义级工具链** | `#22745` `#22746` | ⭐⭐ | 探索结构化代码理解替代全文搜索，可能催生新 Tool Schema |
| **自动化运维智能体** | `#28467` `#28530` `#28532` `#28433` `#28434` `#28435` | ⭐⭐⭐⭐ | Caretaker + PR Generator 双引擎，打通 Issue 分流→修复→验证→合并全链路 |

---

## 6. 开发者关注点聚焦

| 痛点/诉求 | 高频表现 | 建议关注动作 |
|-----------|----------|--------------|
| **“Agent 会偷偷跑、偷偷挂、偷偷成功”** | `#22323` `#22093` `#21763` `#22598` | 1. 统一 Subagent 生命周期事件总线 2. `/chat share` 默认包含子轨迹 3. 引入 `maxTurns`/`timeout` 强制熔断 |
| **“Shell 卡死、交互式 CLI 无法自动化”** | `#25166` `#22465` `#22466` | 1. 终端状态机重构（`RenderStatic` 迁移 `#21924`） 2. Behavioral Eval 覆盖常见脚手架交互 3. `expect`/`auto-reply` 机制内置 |
| **“记忆系统不可控、不安全、吵日志”** | `#26522` `#26523` `#26525` `#26516` | 1. 确定性脱敏 SDK 化 2. Inbox 补丁预校验/隔离区 3. 低信号会话显式标记/配额限流 |
| **“登录/认证在无头/异构环境易碎”** | `#28446` `#2

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-25

---

## 1. 今日速览
- **新版本发布**：v1.0.75 正式支持 **Claude Opus 5** 模型，拓展了模型选择范围。
- **社区高活跃度**：过去 24 小时内共有 33 个 Issue 更新，核心围绕 **Plan 模式回归**、**僵尸进程泄漏**、**上下文压缩 5MB 限制**、**Ctrl+C 中断失效** 等严重回归缺陷展开讨论。
- **无 PR 合并**：过去 24 小时无 Pull Request 更新，说明当前处于发布后修复观察期，修复型 PR 可能正在内部酝酿或等待 CI。

---

## 2. 版本发布

### **v1.0.75** (2026-07-24)
- **核心更新**：**新增对 Claude Opus 5 模型的支持**。
- **影响**：用户现可在配置中指定使用 Anthropic 最新旗舰模型，适用于复杂推理、长上下文编码任务。
- **链接**：[Release v1.0.75](https://github.com/github/copilot-cli/releases/tag/v1.0.75)

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 类型/标签 | 核心内容 | 热度 (👍/评论) | 关注理由 |
|---|---|---|---|---|---|
| **1** | [#1128](https://github.com/github/copilot-cli/issues/1128) | Feature: Theming | **新增 `awaitingUserInput` Hook 类型**：解决当前 Hook 机制在“等待用户输入”阶段的空白，支持状态栏/外部工具感知 CLI 就绪状态。 | 👍 28 / 5 条 | **高需求扩展点**，社区期待更精细的生命周期控制，利于 IDE 集成与自动化脚本。 |
| **2** | [#4188](https://github.com/github/copilot-cli/issues/4188) | Regression: Permissions/Tools | **Plan 模式回归：阻断 Shell 命令**（如 `gh cli`），导致无法在规划阶段读取 Issue/创建 PR 等辅助操作。 | 👍 3 / 4 条 | **核心工作流阻断**，Plan 模式定位为“可执行只读探查”，此回归严重削弱规划能力。 |
| **3** | [#4163](https://github.com/github/copilot-cli/issues/4163) | Bug: Linux/Tools | **僵尸进程累积**：v1.0.71+ 子进程未回收，每分钟泄漏 ~2 个僵尸进程，长时间运行导致 PID 耗尽。 | 👍 3 / 3 条 | **严重稳定性缺陷**，Linux 服务器/长会话场景不可用，需紧急修复 `waitpid` 逻辑。 |
| **4** | [#4183](https://github.com/github/copilot-cli/issues/4183) | Bug: Context/Models | **自动压缩无法规避 CAPI 5MB 请求体限制**：工具历史导致序列化请求超 5MB 而非 Token 限制，压缩逻辑未覆盖此路径。 | 👍 10 / 3 条 | **架构级隐患**，Token 窗口未满即报错，长任务会话必现，需调整压缩触发条件或分片策略。 |
| **5** | [#4235](https://github.com/github/copilot-cli/issues/4235) | Regression: Input | **Ctrl+C 无法中断 Agent 运行**：v1.0.74+ 回归，按键被忽略或仅清空输入行，导致失控任务无法停止。 | 👍 0 / 1 条 | **交互基础体验破坏**，开发者肌肉记忆依赖的安全阀失效，优先级极高。 |
| **6** | [#4220](https://github.com/github/copilot-cli/issues/4220) | Bug: Permissions | **Plan 模式误判只读 `gh api` 为写操作**：GET/GraphQL 查询被拦截，提示“可能修改工作区”。 | 👍 1 / 1 条 | **权限判定逻辑过度保守**，直接影响依赖 GitHub API 进行代码库分析的规划流程。 |
| **7** | [#4222](https://github.com/github/copilot-cli/issues/4222) | Regression: Windows/Rendering | **主窗格冻结/渲染循环 (Maximum update depth exceeded)**：#2802 旧疾复发于 v1.0.72+，VS Code 集成终端高频触发。 | 👍 0 / 1 条 | **Windows 主力用户阻断性 Bug**，UI 线程死锁导致会话不可用，需排查 Ink/React 状态更新。 |
| **8** | [#4251](https://github.com/github/copilot-cli/issues/4251) | Regression: Performance | **大型会话 Resume OOM/CPU 狂转 70 分钟**：v1.0.74 回归，内存峰值 3-4 倍于 v1.0.73，疑似状态反序列化算法退化。 | 👍 0 / 0 条 | **大项目核心痛点**，长会话恢复不可用，阻碍企业级长周期开发流。 |
| **9** | [#4252](https://github.com/github/copilot-cli/issues/4252) | Bug: Config | **退出会话时回写启动时 `model` 到 settings.json**：覆盖其他会话/手动修改的配置，导致默认模型“幽灵回滚”。 | 👍 0 / 0 条 | **配置管理数据竞争**，多会话并行场景下配置漂移，破坏用户信任。 |
| **10** | [#3773](https://github.com/github/copilot-cli/issues/3773) | Bug: Theming | **Light 主题损坏**：用户提示栏黑底黑字、选择高亮对比度极低，疑似配置回退或 CSS 变量缺失。 | 👍 3 / 3 条 | **可访问性/易用性基础缺陷**，影响浅色主题用户核心交互阅读。 |

---

## 4. 重要 PR 进展
> **过去 24 小时无 Pull Request 更新。**
> 建议关注后续针对上述高优先级 Regression（#4163, #4188, #4235, #4251, #4252）的修复 PR 合并情况。

---

## 5. 功能需求趋势 (从 Issue 提炼)

1.  **会话与状态管理健壮性** (高频)
    *   需求：工作树自清理/命名规范化 (#3675)、会话恢复性能/OOM 优化 (#4251)、配置并发写入冲突 (#4252)、归档超时与孤儿资源 (#4246)。
    *   趋势：企业级用户将 CLI 视为长周期基础设施，要求**幂等、可恢复、资源可控**。

2.  **Plan 模式与权限模型的精细化** (高频)
    *   需求：只读命令白名单/语义分析 (#4188, #4220)、Plan 画布 Markdown 渲染修复 (#4250)、跨会话 Plan 指示器泄漏 (#4249)。
    *   趋势：从“能跑通”向“语义正确、安全可控”演进，权限粒度需细化到命令参数级别。

3.  **模型生态与上下文工程** (新增/持续)
    *   需求：Claude Opus 5 支持 (已发布)、CAPI 5MB 硬限制突破 (#4183)、指令注入作用域标签化 (#4231)、ACP `usage_update` 事件补全 (#4233)。
    *   趋势：多模型路由常态化，**上下文压缩、预算管理、协议标准化 (ACP)** 成核心竞争力。

4.  **跨平台终端渲染与交互基础体验** (回归高发)
    *   需求：Windows Ink 死循环 (#4222)、Linux PRIMARY 剪贴板支持 (#4236)、Ctrl+C/G 中断编辑器交互 (#4235, #4230)、Light 主题修复 (#3773)。
    *   趋势：React/Ink 架构在高负载/特定终端下稳定性挑战大，**输入输出链路的鲁棒性**是当前技术债集中区。

5.  **插件/MCP 生态落地** (萌芽)
    *   需求：插件安装路径修复 (#2200)、Marketplace 持久化 (#4247)、MCP Server 工作目录注入项目根路径 (#4234)。
    *   趋势：技能/插件机制从“可安装”向“生产级可用”过渡，环境隔离与上下文传递是关键。

---

## 6. 开发者关注点与痛点总结

| 痛点类别 | 典型反馈 | 影响范围 | 紧迫度 |
|---|---|---|---|
| **核心回归阻断工作流** | Plan 模式禁用 `gh`、Ctrl+C 失效、Resume OOM、僵尸进程 | 所有活跃用户，特别是长会话/自动化/企业用户 | **P0 (阻断)** |
| **数据一致性与状态丢失** | 配置被静默覆盖 (#4252)、Plan 指示器泄漏 (#4249)、Marketplace 注册不持久化 (#4247) | 多会话并行、团队协作、插件开发者 | **P0 (信任危机)** |
| **大规模/长会话性能崩溃** | 5MB CAPI 限制 (#4183)、Resume 内存指数级增长 (#4251)、僵尸进程泄漏 (#4163) | 大型代码库、CI/CD 集成、服务端部署 | **P1 (严重)** |
| **跨平台终端兼容性债务** | Windows 渲染死循环 (#4222)、Linux 剪贴板双通道缺失 (#4236)、主题系统失效 (#3773) | Windows/VS Code 终端、Linux 桌面、无障碍用户 | **P1 (体验)** |
| **扩展性接口不完备** | 缺少 `awaitingUserInput` Hook (#1128)、ACP 事件缺失 (#4233)、MCP 缺乏项目上下文 (#4234) | IDE 插件作者、平台集成商、高级自动化玩家 | **P2 (生态建设)** |

---

**💡 分析师建议**：
当前版本 **v1.0.75 虽然引入新模型，但伴随 v1.0.72-74 累积的多个 P0 级回归**（进程管理、中断信号、配置写入、大会话性能），建议**生产环境用户暂缓升级，锁定 v1.0.71 或等待 v1.0.76 热修复版**。团队应优先投入资源修复 **信号处理、子进程回收、配置并发控制、反序列化内存占用** 四大核心稳定性问题，以恢复社区信心。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-25

> 数据来源：`github.com/MoonshotAI/kimi-cli` | 统计周期：2026-07-24 至 2026-07-25

---

## 1. 今日速览
- **无新版本发布**，当前最新稳定版仍为 `0.29.1`（据 Issue #2556 反馈）。
- **社区核心关注点集中在“登录连通性”与“企业级网络兼容性”**：新增登录失败报告（ARM Linux 环境），且有针对 `SSL_CERT_FILE` 代理支持的 PR 正在推进。
- **Windows 终端交互体验** 与 **VS Code 扩展稳定性** 仍存遗留缺陷，亟待修复；**“远程会话接管”** 需求呼声较高（16 👍），显示用户对跨设备工作流连续性有强诉求。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues（按热度/紧迫度排序）

| # | 标题 | 状态 | 关键信息 | 为何重要 |
|---|------|------|----------|----------|
| [#2556](https://github.com/MoonshotAI/kimi-cli/issues/2556) | **kimi login fails** | 🟢 OPEN | **v0.29.1 / Linux ARM64 / OAuth** 登录失败，用户刚购买 VPS 即遇阻。 | **P0 阻断性缺陷**：ARM64 服务器部署场景下登录链路打通是基础能力，直接影响新用户留存。 |
| [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) | **Login failed: Cannot connect to host auth.kimi.com:443** | 🔴 CLOSED | 网络不可达导致 SSL 连接失败，历经 7 条评论后关闭。 | **高频网络问题缩影**：虽已关闭，但反映国内/企业网络直连 `auth.kimi.com` 的不稳定性，需结合 PR #762 代理方案从根治。 |
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **Feature Request: Remote Control - Continue local sessions from any device** | 🟢 OPEN | **16 👍 / 7 评论**，需求从手机/浏览器无缝接管本地 CLI 会话。 | **高价值差异化功能**：对标 Cursor/Codex 的远程协作能力，解决“离工位后长任务无法干预”痛点，社区呼声最高。 |
| [#2326](https://github.com/MoonshotAI/kimi-cli/issues/2326) | **VS code Kimi Freezes** | 🟢 OPEN | **v0.5.10 / Ubuntu**，扩展频繁冻结、响应延迟高。 | **IDE 集成稳定性短板**：VS Code 是主力开发环境，冻结问题严重破坏编码流体验，需优先排查 Language Server/扩展宿主通信机制。 |
| [#2521](https://github.com/MoonshotAI/kimi-cli/issues/2521) | **Windows 版 herdr 无法使用方向键选择** | 🟢 OPEN | **v0.27.0 / Windows NT 10.0.22631**，TUI 交互失效。 | **Windows 原生体验缺失**：`herdr` 为核心交互组件，方向键不可用直接阻断 Windows 用户基础操作，属平台兼容性 P1 Bug。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 作者 | 核心变更 | 影响范围 |
|---|------|------|------|----------|----------|
| [#762](https://github.com/MoonshotAI/kimi-cli/pull/762) | **fix: respect SSL_CERT_FILE env var for corporate proxy support** | 🟢 OPEN | aaraujodata | 新增标准 `SSL_CERT_FILE` 环境变量支持，解决 Zscaler/BlueCoat/Fortinet 等企业代理下的 SSL 证书验证失败。 | **企业级落地关键**：直接解决 Issue #760 及 #1070 类网络拦截问题，建议优先合并进 `main` 并回港至稳定分支。 |
| [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) | **fix: route MCP server log notifications to loguru instead of TUI** | 🟢 OPEN | he-yufeng | 将 MCP Server（如 SearXNG）的日志通知从 RichHandler(stderr) 重定向至 loguru，避免污染 TUI 界面。 | **TUI 稳定性/可观测性**：消除 MCP 集成时的终端刷屏干扰，提升多工具链协作时的界面整洁度。 |

---

## 5. 功能需求趋势（从 Issue 全量语义聚类）

| 趋势方向 | 代表 Issue | 社区热度 | 研发建议 |
|----------|------------|----------|----------|
| **跨设备会话迁移/远程控制** | [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | ⭐⭐⭐⭐⭐ (16 👍) | 设计基于 WebRTC/WebSocket 的会话状态同步协议，提供轻量级 Web/移动端 Viewer，差异化竞争点。 |
| **企业级网络代理与证书链适配** | [#762](https://github.com/MoonshotAI/kimi-cli/pull/762), [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) | ⭐⭐⭐⭐ | 除 `SSL_CERT_FILE` 外，建议补齐 `HTTP_PROXY`/`HTTPS_PROXY`/`NO_PROXY` 完整代理链支持，输出《企业部署网络配置指南》。 |
| **VS Code / JetBrains 深度集成稳定性** | [#2326](https://github.com/MoonshotAI/kimi-cli/issues/2326) | ⭐⭐⭐ | 建立扩展端到端自动化测试（冻结、延迟、上下文丢失），引入 Language Server Protocol 合规性校验。 |
| **Windows 原生终端体验修复** | [#2521](https://github.com/MoonshotAI/kimi-cli/issues/2521) | ⭐⭐⭐ | 适配 Windows Terminal / ConPTY，修复 `herdr` 在非 ANSI 模式下的键位映射，纳入 CI 矩阵测试。 |
| **ARM64 / 非 x86 平台原生支持** | [#2556](https://github.com/MoonshotAI/kimi-cli/issues/2556) | ⭐⭐⭐ | 发布官方 ARM64 二进制/容器镜像，补充 ARM CI 流水线，消除“刚买服务器跑不起来”的首屏挫败感。 |

---

## 6. 开发者关注点（高频痛点汇总）

1. **“登录即入坑”**：OAuth/设备码流在代理、IPv6、ARM、企业 CA 等场景下成功率低，缺乏诊断工具（如 `kimi doctor --network`）。
2. **TUI 组件跨平台一致性差**：Windows 下键位失效、渲染异常；Linux 下终端兼容性（tmux/screen/kitty）未充分测试。
3. **IDE 扩展“黑盒感”强**：冻结、无响应时无日志导出、无重置入口，排查成本极高。
4. **长任务无感知/不可控**：缺乏后台运行、进度推送、远程介入机制，用户不敢在 CLI 发起大规模重构/生成任务。
5. **文档与错误信息滞后**：报错多为底层堆栈（`Network is unreachable`），缺乏可操作的修复建议链接（指向 FAQ/配置指南）。

---

> **下一步建议**：优先合并 **PR #762** 并发布 `0.29.2-hotfix` 解决企业网络/ARM 登录阻断；并行启动 **Remote Control（Issue #1282）** 技术预研，作为 Q3 核心差异化里程碑。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-07-25

---

## 1. 今日速览
- **核心版本发布 v1.18.5**，重点修复了 Claude 思维链处理、OpenAI Responses 相位处理、Mistral 推理历史保持及 grep 符号链接路径保留等稳定性问题。
- **社区高频反馈集中在“智能体意外停止/挂起”**（Issues #38749, #38766, #38782, #38731），多用户报告任务执行约 30 秒或每次工具调用后中断，严重影响可用性。
- **模型兼容性与提供商集成持续发力**：OpenAI 兼容端点自动发现模型（#6231 高热度）、Kimi/Qwen 在 Go 计划下不可用（#38378, #38219）、DeepSeek 空 content 修复（#38778）等 PR 与 Issue 并行推进。

---

## 2. 版本发布
### **v1.18.5** (2026-07-25)
| 类别 | 变更摘要 |
|------|----------|
| **Core / Bugfixes** | • 改进 Claude 自适应思维处理，兼容更多响应结构<br>• 修复 OpenAI Responses 相位处理导致的对话中断风险<br>• 保留 grep 搜索结果中的符号链接路径 (@remixz)<br>• 跨轮次保持 Mistral 推理历史<br>• 稳定 Mistral 提供商表现 |
| **链接** | [Release v1.18.5](https://github.com/anomalyco/opencode/releases/tag/v1.18.5) |

---

## 3. 社区热点 Issues（精选 Top 10）

| # | 标题 | 关键信息 | 热度/反应 | 重要性理由 |
|---|------|----------|-----------|------------|
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | **Auto-discover models from OpenAI-compatible provider endpoints** | 188 👍, 32 评论 | ⭐⭐⭐⭐⭐ | 社区呼声最高的功能需求，解决本地模型频繁变更的配置痛点，涉及 LM Studio/Ollama/llama.cpp 等主流本地推理栈。 |
| [#38749](https://github.com/anomalyco/opencode/issues/38749) | **agent keeps stopping abruptly** | 4 评论, 多截图 | ⭐⭐⭐⭐ | 典型“智能体中断”报告，无报错日志，需排查是否为 v1.18.x 回归或模型侧流控。 |
| [#38766](https://github.com/anomalyco/opencode/issues/38766) | **OpenCode stops executing every task after ~30 seconds** | 2 评论 | ⭐⭐⭐⭐ | 明确复现步骤：约 30 秒必停，疑似超时/心跳机制异常，阻塞长任务。 |
| [#38782](https://github.com/anomalyco/opencode/issues/38782) | **Ling 3.0 Flash Free stopping after each Edit** | 2 评论 | ⭐⭐⭐ | 特定模型（Ling 3.0 Flash）每次 Edit 后强制停顿，提示 “Now let me do...”，疑似模型侧 finish_reason 解析问题。 |
| [#38378](https://github.com/anomalyco/opencode/issues/38378) | **kimi-k3 fails on /v1/messages (Anthropic compat) while /v1/chat/completions works** | 4 评论 | ⭐⭐⭐ | Go 网关层 Anthropic 兼容端点故障，影响 Go 计划用户使用 Kimi/Qwen。 |
| [#38219](https://github.com/anomalyco/opencode/issues/38219) | **Cannot use Kimi or Qwen models in Opencode Go plan** | 3 评论 | ⭐⭐⭐ | 付费计划用户无法使用指定模型，商业影响大，同源于 #38378。 |
| [#25038](https://github.com/anomalyco/opencode/issues/25038) | **Long-running shell commands hang after “BUILD SUCCESSFUL”** | 9 👍, 11 评论 | ⭐⭐⭐ | Gradle 等长进程在成功退出后仍挂起，疑似 stdout/pipe 关闭检测缺陷。 |
| [#38770](https://github.com/anomalyco/opencode/issues/38770) | **Background subagent notification reverts manually-selected model to default** | 3 评论 | ⭐⭐ | 实验功能 `BACKGROUND_SUBAGENTS` 导致模型选择状态丢失，涉及会话状态管理。 |
| [#31932](https://github.com/anomalyco/opencode/issues/31932) | **Cross-project session list / picker for TUI** | 5 👍, 13 评论 | ⭐⭐ | 多仓库工作流刚需，当前 `/sessions` 仅限单项目。 |
| [#38738](https://github.com/anomalyco/opencode/issues/38738) | **opencode serve: bind failures print bare "Unexpected error" without errno** | 2 评论 | ⭐ | 错误观测性缺失，运维排查困难。 |

---

## 4. 重要 PR 进展（精选 Top 10）

| # | 标题 | 类型 | 核心变更 | 关联 Issue |
|---|------|------|----------|------------|
| [#38783](https://github.com/anomalyco/opencode/pull/38783) | **fix(core): keep execute tool cache stable** | Bugfix | 目录为空时保留原生 `execute` 工具可用性，防止权限状态丢失导致模型调用失败。 | — |
| [#38777](https://github.com/anomalyco/opencode/pull/38777) | **fix(ai): preserve response message phases** | Bugfix | 对齐 OpenAI Responses `commentary/final_answer/null` 相位契约，修复流式输出顺序变更导致的上下文丢失。 | — |
| [#38778](https://github.com/anomalyco/opencode/pull/38778) | **fix(opencode): keep DeepSeek assistant content non-empty** | Bugfix | DeepSeek 返回 `reasoning_content` 但 `content` 为空时，避免生成空 assistant turn 导致下游解析异常。 | [#38654](https://github.com/anomalyco/opencode/issues/38654) |
| [#38743](https://github.com/anomalyco/opencode/pull/38743) | **refactor(core): settle steps lock-free by joining tool fibers first** | Refactor | 移除 Runner 12 处 `serialized()` 信号量，工具 fiber 先 join 再结算，锁竞争归零，性能提升显著。 | — |
| [#38786](https://github.com/anomalyco/opencode/pull/38786) | **fix(app): refresh V1 providers after auth** | Bugfix | OAuth/API Key 认证完成后销毁作用域 V1 实例，触发提供商目录从持久化凭证重建。 | — |
| [#38728](https://github.com/anomalyco/opencode/pull/38728) | **fix: keep prompt input inert during Safari IME composition** | Bugfix | 修复 Safari 中 CJK 输入法组合期间输入框异常提交/中止问题。 | [#38674](https://github.com/anomalyco/opencode/issues/38674) |
| [#38776](https://github.com/anomalyco/opencode/pull/38776) | **feat(core): enable fff in node runtimes** | Feature | 引入 `@ff-labs/fff-node`，Node 环境下获得与 Bun 一致的极速文件搜索能力。 | — |
| [#38772](https://github.com/anomalyco/opencode/pull/38772) | **feat(tui): show model variant in subagent footer** | Feature | 子智能体会话页脚显示模型/提供商/变体，持久化非默认会话选择。 | [#26266](https://github.com/anomalyco/opencode/issues/26266) |
| [#36781](https://github.com/anomalyco/opencode/pull/36781) | **feat(auth): add support for multiple profiles per provider** | Feature | 同一提供商支持多命名配置文件（如多 OpenRouter Key），解决多账号切换痛点。 | [#5391](https://github.com/anomalyco/opencode/issues/5391) |
| [#38764](https://github.com/anomalyco/opencode/pull/38764) | **fix(tui): handle Windows path separators in status dialog** | Bugfix | 修复 `/status` 对话框中 Windows 路径分隔符显示异常。 | — |

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **本地/兼容模型零配置接入** | #6231 (188 👍), #38378, #38219 | 🔥🔥🔥🔥🔥 极高——用户期望“插即用”，厌倦手写 `opencode.json`。 |
| **跨项目/跨会话工作流** | #31932, #38770, #38771 | 🔥🔥🔥 高——多仓库、多会话管理为日常刚需。 |
| **长任务/后台任务可靠性** | #25038, #36868, #38766 | 🔥🔥🔥 高——构建、测试、后台子智能体不可中断。 |
| **模型提供商多样化与付费计划兑现** | #38219, #38378, #38722 (GPT-5.6) | 🔥🔥🔥 高——商业计划用户对模型可用性零容忍。 |
| **TUI/Web UI 可观测性增强** | #38666 (工具耗时), #34006 (粘贴行为), #38738 (报错细节) | 🔥🔥 中高——调试效率直接依赖 UI 信息密度。 |
| **Windows 原生体验补齐** | #38715 (控制台闪烁), #38764 (路径分隔符) | 🔥🔥 中——Windows 开发者占比不低，细节决定留存。 |

---

## 6. 开发者关注点 & 痛点总结

1. **“智能体频繁自停”成头号稳定性杀手**  
   - 现象：无报错、无显式 `finish_reason`，约 30 秒或每工具调用后挂起。  
   - 怀疑点：心跳超时、流式解析边界、模型侧 `stop` token 误判、后台子智能体通知竞态。  
   - 建议：v1.18.5 发布后需密切观察是否缓解；若持续，建议引入 `--debug-agent-loop` 追踪模式。

2. **模型提供商适配碎片化严重**  
   - Anthropic 兼容层（/v1/messages）与 OpenAI 兼容层（/v1/chat/completions）行为不一致，导致 Kimi/Qwen/DeepSeek 等高频模型在 Go 计划/网关层不可用。  
   - 需建立**提供商兼容性测试矩阵**（CI 夜ly 跑通主流本地/云端模型）。

3. **长进程工具链（Gradle、Cargo、大型测试）管控薄弱**  
   - 进程已成功退出但 pipe 未关闭导致挂起（#25038），缺乏“进程码+输出流双重判断”机制。

4. **状态管理一致性**  
   - 手动选模型被后台通知覆盖（#38770）、会话关闭/删除崩溃（#38771）、异步提示丢失 agent/model（#35195）——**会话状态机需形式化验证**。

5. **错误可观测性不足**  
   - `opencode serve` 绑定失败仅抛 `Unexpected error`（#38738），建议统一错误码体系并暴露 `errno`/`syscall`。

---

> **下一步关注**：v1.18.5 发布后 24-48h 内 Issue #38749/#38766/#38782 的复现反馈；#38743 无锁重构合并后的性能基准；#6231 自动发现模型 PR 的进展。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-25

---

## 1. 今日速览
- **核心版本 v0.82.0 发布**，引入**受约束工具采样**功能，支持 JSON Schema、OpenAI Lark/Regex 语法强制约束，并通过模型能力元数据防止不支持的请求。
- 社区高度聚焦于 **企业级认证稳定性**（Copilot Enterprise/OAuth/代理）、**Compaction 可靠性**（截断、卡死、模型切换上下文溢出）以及 **llama.cpp 本地模型启动竞态** 等阻塞性问题。
- 性能优化与扩展性增强并行推进：TUI 渲染复杂度降至 O(Viewport)，新增 Vitest 评测框架、Provider-neutral Prompt Cache 契约及 Vault 连接支持。

---

## 2. 版本发布

### **v0.82.0** — Constrained Tool Sampling
- **核心特性**：工具调用现支持**严格 JSON Schema 采样** 与 **OpenAI Lark/Regex 语法约束**；引入模型能力元数据，自动拦截不支持约束的模型请求，避免运行时 400 报错。
- **相关文档**：[Constrained Sampling for Tools](https://github.com/earendil-works/pi/blob/v0.82.0/packages/ai/src/providers/constrained-sampling.md)
- **升级建议**：依赖结构化输出（如函数调用、代码生成）的工作流建议立即升级，可显著降低解析失败率。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心痛点 | 热度/反应 | 关键链接 |
|---|-------|----------|-----------|----------|
| 1 | **#6768** Compaction 与 Copilot Enterprise 不兼容 | OpenAI 返回 `421 Misdirected Request`，Anthropic 同样失败，导致长会话无法压缩上下文 | 👍 11 · 12 评论 | [#6768](https://github.com/earendil-works/pi/issues/6768) |
| 2 | **#6922** 默认模型设为 llama.cpp 时启动报 "No models available" | 启动时模型注册表异步刷新未完成即进入交互，导致本地模型不可用 | 👍 10 · 6 评论 | [#6922](https://github.com/earendil-works/pi/issues/6922) |
| 3 | **#6686** Pi 自动登出 GitHub (Copilot) | 旧问题复发，多设备使用 `copilot-lsp` / `pi` 并行时 Token 失效频发 | 12 评论 | [#6686](https://github.com/earendil-works/pi/issues/6686) |
| 4 | **#7020** Compaction 后会话偶发卡死不继续 | 长会话协调场景高频复现，Compaction 完成后 Agent 停止响应 | 👍 1 · 3 评论 | [#7020](https://github.com/earendil-works/pi/issues/7020) |
| 5 | **#7048** Compaction 摘要被截断（未检查 `stopReason === 'length'`） | 摘要生成击中 token 上限时中断单词，导致上下文语义受损 | 3 评论 | [#7048](https://github.com/earendil-works/pi/issues/7048) |
| 6 | **#6951** Qwen3-8B-Max `thinkingLevelMap` 缺失 | 官方 API 要求 `low/medium/xhigh`，Pi 仍用默认四档，导致 reasoning effort 失效 | 👍 1 · 7 评论 | [#6951](https://github.com/earendil-works/pi/issues/6951) |
| 7 | **#7067** 模型切换中途崩溃（GPT 返回 HTML、Qwen 400） | 切换上下文窗口不兼容模型时，无预校验、思维块未转换、静默失败 | 3 评论 | [#7067](https://github.com/earendil-works/pi/issues/7067) |
| 8 | **#7008** 企业代理环境下 HTTP_PROXY/HTTPS_PROXY 失效 | 0.80.x 后所有 HTTP 请求失败，npm 正常，疑 Undici 版本/代理隧道配置问题 | 2 评论 | [#7008](https://github.com/earendil-works/pi/issues/7008) |
| 9 | **#6970** GitHub Copilot Plugin 机制导致 OAuth Token 失效 | Pi 使用 Plugin 而非 OAuth 流程，与 `copilot-lsp` 等并行工具冲突使 Token 失效 | 👍 1 · 3 评论 | [#6970](https://github.com/earendil-works/pi/issues/6970) |
| 10 | **#6459** 自定义键位首次启动不生效，需 `/reload` | 扩展组件（如 pi-powerline-footer）注册的键位在会话初始化阶段未加载 | 8 评论 | [#6459](https://github.com/earendil-works/pi/issues/6459) |

> **趋势信号**：认证/代理、Compaction 鲁棒性、本地模型启动序列、模型切换安全性构成当前 **Top 4 阻塞性主题**。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 关联 Issue | 状态 |
|---|----|------|----------|------------|------|
| 1 | **#7082** | **Perf** | TUI 转录渲染优化：视口窗口化 + 容器 Memoization，实现 **O(Viewport)** 复杂度，解决 5000+ 行/含 Base64 图片时的输入延迟 | — | Open |
| 2 | **#7072** | **Fix** | 缓存 llama.cpp 模型目录，**修复 #6948 启动竞态**，确保 `defaultProvider/Model` 立即生效 | #6948 | Open |
| 3 | **#7085** | **Feat** | 引入 `packages/evals` (vitest-evals) 评测框架，含隔离凭证解析、用量元数据、Capital-of-France 冒烟测试 | — | Open |
| 4 | **#7046** | **Feat** | **Provider-neutral Prompt Cache 契约**：统一缓存断点、KnownApi 穷尽降级、Codex 传输强化 | — | Closed |
| 5 | **#7081** | **Feat** | **Bedrock 支持 Claude Opus 5**（强制自适应思维），修正错误信息脱敏显示 | #7076 | Open |
| 6 | **#7032** | **Fix** | 暴露不可用的 Scoped 模型至 `/models`，保留诊断信息，允许手动移除持久化 | — | Open |
| 7 | **#7009** | **Fix** | `/copy` 命令 **await `wl-copy` 退出码**，失败自动回退 `xclip`/`OSC 52`，修复沙箱误报成功 | #6872 | Closed |
| 8 | **#7055** | **Fix** | 工具参数校验失败（如 `edits` 重复键）不再触发 429 重试，避免 LLM 产出漂移 | — | Closed |
| 9 | **#7059** | **Feat** | 新增 `setRenderedSession` 扩展 API，允许外部 `AgentSession` 复用主渲染器（转录、Footer、标题） | #7058 | Closed |
| 10 | **#6216** | **Feat** | 新增 **Amazon Bedrock Mantle OpenAI Responses Provider**，复用 OpenAI Node SDK Bedrock 适配器 | — | Open |

> **关注点**：#7082 性能优化已合并可体验；#70

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-25

---

## 1. 今日速览

- **v0.21.0 正式版发布**，包含 Web Shell 工作区选择器、性能优化等核心功能；同步推出夜ly 构建 v0.21.0-nightly.20260725.1183a4c82。
- **DSW SWE-bench 全量基准测试管道上线**（PR #7656），实现从 Release 触发到 500 用例评测的全自动化异步流程，标志着持续基准能力落地。
- 社区聚焦 **TUI 渲染稳定性**（最后一行覆盖、WSL 重复渲染）、**后台 Shell 生命周期管理**、**多 Agent 策略冲突** 及 **数学公式渲染契约** 等核心体验问题。

---

## 2. 版本发布

### v0.21.0 (Stable)
- **Web Shell 新增工作区选择器**（Composer 工具栏下拉菜单，支持添加/切换工作区）[#7390](https://github.com/QwenLM/qwen-code/pull/7390)
- **无破坏性变更**，完整变更日志见 Release Notes

### v0.21.0-nightly.20260725.1183a4c82
- `fix(cli)`: Insight 统计全量改用本地时间计算天/小时 [#7670](https://github.com/QwenLM/qwen-code/pull/7670)
- `refactor(autofix)`: 代码结构调整

### DSW SWE-bench POC 系列（非正式发布）
- 4 次全量 500 用例运行 + 3 次异步 POC，最佳通过率 **332/500 (66.4%)**，用于验证基准管道稳定性  
  → 详见 `dsw-swe-full-poc-20260724-*` 与 `dsw-swe-full-async-poc-20260724-*` 标签

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 关键点 | 重要性 | 链接 |
|---|------|--------|--------|------|
| **#5800** | TUI 静态模式下超高回复最后一行被覆盖 | Ink 上游 #973 导致，阻塞默认渲染路径 | 🔴 P2/阻塞/欢迎 PR | [查看](https://github.com/QwenLM/qwen-code/issues/5800) |
| **#7684** | macOS Command 模式多行 statusline 导致输入法候选框位置偏移 | 影响中文/日文输入体验，附现场截图 | 🟠 P2/macOS/欢迎 PR | [查看](https://github.com/QwenLM/qwen-code/issues/7684) |
| **#7699** | 内联数学公式识别在渲染/复制/表格/流式场景不一致 | `$x$` 单字符漏识别、转义处理分歧 | 🟠 P2/渲染/欢迎 PR | [查看](https://github.com/QwenLM/qwen-code/issues/7699) |
| **#7626** | 长时间运行后台 Shell 输出文件为空时被模型误判为结束而重启 | 缓冲型长任务（训练脚本）受影响 | 🟠 P2/核心/欢迎 PR | [查看](https://github.com/QwenLM/qwen-code/issues/7626) |
| **#7679** | QWEN.md 禁止多 Agent 被系统默认 Explore 指引覆盖 | 用户规则与系统提示优先级冲突，三层原因分析 | 🟠 P2/核心/多 Agent | [查看](https://github.com/QwenLM/qwen-code/issues/7679) |
| **#7659** | Thinking 模式下 `tool_choice: "required"` 被 DashScope 拒绝 | 需手动配置 `thinkingMandatory`，无运行时自适应 | 🟡 P2/核心 | [查看](https://github.com/QwenLM/qwen-code/issues/7659) |
| **#7634** | WSL + Windows Terminal 流式输出逐字重复渲染 | 字符重复次数随长度递增，严重影响可读性 | 🟡 P2/UI/渲染 | [查看](https://github.com/QwenLM/qwen-code/issues/7634) |
| **#7264** | 冷启动懒加载跟进：ACP 子进程 17.24 MiB/2420 模块急性导入审计 | 持续优化启动性能，继 #4748 后续 | 🟡 P2/性能/核心 | [查看](https://github.com/QwenLM/qwen-code/issues/7264) |
| **#7700** | 提议：建立显式、源码保真的数学创作契约 | 回应 #2620 数学密集工作流需求，寻求共识 | 🟡 功能/讨论/渲染 | [查看](https://github.com/QwenLM/qwen-code/issues/7700) |
| **#7696** | Service Agent Engine：面向后台自控 Agent 的运行时层 | 统一现有后台任务调度、监控、触发能力 | 🔵 P3/路线图/自动化 | [查看](https://github.com/QwenLM/qwen-code/issues/7696) |

> **社区反应特征**：TUI/渲染类 Issue 评论密度高（5-8 条），多附带截图/复现步骤；核心架构类 Issue（多 Agent 策略、Thinking 模式工具调用）引发设计层面讨论。

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 类型 | 核心价值 | 状态 | 链接 |
|---|------|------|----------|------|------|
| **#7686** | `perf(core)`: 首次使用依赖懒加载 | 性能 | 减少冷启动急性导入闭包，响应 #7264 | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7686) |
| **#7669** | `fix(core)`: 后台 Shell 写入状态 sidecar 文件 | 修复 | 解决 #7626 模型误读静默 Shell 问题 | **Closed** | [查看](https://github.com/QwenLM/qwen-code/pull/7669) |
| **#7683** | `feat(web-shell)`: 只读 GitHub PR 面板 + `/prs` 命令 | 功能 | Web Shell 原生查看 PR 标题/分支/评审状态/CI 图标 | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7683) |
| **#7691** | `feat(review)`: 强制提交仅写契约 + 清理陷阱 | 功能/安全 | 封堵 `/review` 绕过 `submit` 直接写 PR 的漏洞 | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7691) |
| **#7692** | `feat(review)`: 提交前检测 HEAD 漂移并封顶裁决 | 功能 | 依赖 #7691，防止评审期间上游变更导致误判 | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7692) |
| **#7680** | `perf(web-shell)`: Git 状态完成前先绘制 Composer 分支芯片 | 性能 | 守护进程缓存摘要 + 后台重算 + 推送，首屏感知加速 | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7680) |
| **#7651** | `perf(core)`: 将易变 auto-memory 节移至系统提示末尾 | 性能 | 三层提示架构，减少上下文污染，参考 hermes-agent | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7651) |
| **#7632** | `feat(channels)`: GitHub 轮询适配器（通知即唤醒架构） | 功能 | 替代早期共享抽象方案，信号与上下文分离设计 | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7632) |
| **#7698** | `feat(dingtalk)`: 支持出站图片投递 | 功能 | Agent 可发送本地生成图表/截图，而非仅返回路径 | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7698) |
| **#7656** | `ci`: 隔离式 DSW SWE-bench 发布管道 | 基建 | Release → DSW 分发 → PostgreSQL 队列 → 10 执行器 → 评分 → 发布全自动 | Open | [查看](https://github.com/QwenLM/qwen-code/pull/7656) |

> **PR 簇特征**：`review` 子系统（#7691/7692/7690/7693/7694/7695）集中重构，`web-shell` 与 `serve` 守护进程并行推进，基准管道（#7656）落地标志持续评测能力成熟。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue/PR | 社区呼声强度 |
|----------|---------------|--------------|
| **TUI/渲染稳定性** | #5800, #7684, #7699, #7634, #7652 | 🔥🔥🔥 高频、阻塞、跨平台 |
| **后台/长任务 Shell 管理** | #7626, #7669, #7588, #7694 | 🔥🔥 核心可靠性痛点 |
| **多 Agent 策略与用户规则冲突** | #7679, #7685, #7696 | 🔥🔥 设计层讨论活跃 |
| **数学/公式渲染契约** | #7699, #7700, #3680, #2620 | 🔥 专业工作流刚需 |
| **启动性能与懒加载** | #7264, #7686, #7651, #4748 | 🔥 持续投入 |
| **IDE/编辑器集成增强** | #7697 (VS Code Unity MCP), #7687 (DingTalk 图片), #7632 (GitHub 轮询) | 🔥🔥 生态扩展 |
| **基准与评测自动化** | #7656, DSW POC 系列 Release | 🔥 基建落地 |
| **模型切换与 Thinking 模式适配** | #7659, #7658, #7606, #7685 | 🔥 供应商兼容性 |

---

## 6. 开发者关注点总结

1. **“所见即所得”渲染信任度**  
   - 终端溢出覆盖、WSL 重复渲染、数学公式不一致、输入法候选框错位 —— 开发者对 **默认 TUI 模式在真实环境下的鲁棒性** 容忍度降低，期望修复优先于新功能。

2. **后台任务“火后不管”的可靠性**  
   - 空输出文件导致模型误判重启（#7626）、

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-07-25

> **数据范围**：GitHub 近 24 小时动态 (至 2026-07-24) | **仓库**：`Hmbown/CodeWhale` (原 `DeepSeek-TUI`)  
> **核心提示**：项目已正式更名为 **CodeWhale**，`deepseek-tui` npm 包废弃，v0.9.1 为首个正式发布版本。

---

## 1. 今日速览
**v0.9.1 正式发布并完成品牌重塑**，但 Docker (GHCR) 与 Homebrew 两大分发渠道交付失败，核心团队正通过独立工作流紧急补齐。与此同时，**v0.9.2 架构重构全面展开**：确立 "Fleet/Workflow/Lane/Runtime" 四层编排模型，启动史上最大规模代码拆分行动（主入口、运行时、MCP、历史渲染、测试文件均拆分为百余模块），并同步推进多模态路由、印地语/乌克兰语本地化及 CI/CD 自动化治理。

---

## 2. 版本发布
### **v0.9.1 - CodeWhale 首个公开发布版**
- **品牌迁移**：产品更名为 **CodeWhale** (Shannon Labs 出品)，命令行入口统一为 `codewhale`，旧包 `deepseek-tui` 彻底停止维护。
- **交付状态**：
  - ✅ GitHub Release (34 资产)、crates.io (18 crates)、npm (`latest`)、CNB 镜像
  - ❌ **GHCR 容器镜像**、**Homebrew Tap** 仍停留在 v0.9.0
- **后续动作**：#4801 (已关闭) 尝试补发失败，#4802 (进行中) 重写为独立可派发工作流修复。

---

## 3. 社区热点 Issues (Top 10)

| # | Issue | 状态 | 评论 | 关注理由 |
|---|-------|------|------|----------|
| **#2870** | **[EPIC] 分阶段命令边界重构** | 🟢 Open | 17 | **v0.9.2 核心架构重构总追踪**，拆解自 #2791，关联证明性 PR #2851，牵涉命令解析、边界划分核心逻辑。 |
| **#4175** | **架构规范：Fleet/Workflow/Lane/Runtime 产品模型** | 🔴 Closed | 11 | **v0.9.2 核心词汇与关注点分离的“宪法级”文档**，锁定四大概念定义，防止架构退化，已落地关闭。 |
| **#4178** | **Stopship 工作流作为 Fleet-backed Lane (Dogfood)** | 🔴 Closed | 12 | 以真实阻塞问题 (#4090/#4093/#4094) 为驱动，**端到端验证新编排模型**的实战落地。 |
| **#4179** | **Phase 3: Fleet 角色间 Workflow 门控与交接** | 🔴 Closed | 9 | 明确 `scout → implementer → reviewer → verifier → release_lead` 角色流转的阻塞/通过语义。 |
| **#4177** | **Phase 2: Workflow 步骤引用 Fleet 角色而非原始 Prompt** | 🔴 Closed | 9 | 强制分离关注点：**Workflow 管顺序、Fleet 管人员、AgentProfile 管配置**，消除硬编码提示词。 |
| **#689** | **`deepseek doctor` 通过但 `deepseek run` 无法启动** | 🟢 Open | 8 | **高频用户痛点**：诊断工具失真，v0.8.x 遗留用户迁移受阻，需排查沙箱/环境差异。 |
| **#3480** | **[EPIC] TUI 信息架构与视觉 UX 全面改版** | 🟢 Open | 3 | 解决多 Agent 并发下“原始状态堆砌、决策信息缺失”问题，重构子代理覆盖层、状态栏、任务侧边栏交互。 |
| **#3313** | **拆分 `RuntimeThreadManager` (7k+ 行) 为 Store/Executor/Events/Types** | 🟢 Open | 3 | **技术债核心爆雷点**，单文件承担持久化、编排、执行、工具桥接四大职责，拆分进度直接影响 v0.9.2 交付。 |
| **#4790 / #4791 / #4787** | **本地化战略：印地语/乌克兰语支持 + 矩阵治理** | 🟢 Open | 1/1/1 | **今日新建 3 连击**：针对最大开发者群体 (印度) 补齐 Devanagari 整形，补齐乌克兰语政治正确性，建立 CI 门禁防止本地化漂移。 |
| **#4794** | **模型目录：将 Vision/Modality 作为一等路由能力** | 🟢 Open | 1 | 现有模态数据 (`ModelsDevModalities`) 仅存储未决策，**推动多模态路由从“猜测”转为“显式声明”**。 |

---

## 4. 重要 PR 进展 (Top 10)

| # | PR | 状态 | 核心变更 |
|---|----|------|----------|
| **#4802** | `ci(release): 替换不可用的恢复输入为独立工作流` | 🟢 Open | **修复 v0.9.1 发布事故**：GHCR/Homebrew 缺包，重写派发机制解决 `workflow_dispatch` schema 版本不一致导致的 422 报错。 |
| **#4799** | `fix(web): 推进已发布版本事实至 v0.9.1` | 🔴 Closed | 官网安装页版本号同步，修复 `latest-published-release.json` 滞后导致的安装命令指向旧版本。 |
| **#4776** | `ci(web): 每次推送 main 自动部署 codewhale.net` | 🔴 Closed | 移除 `workflow_dispatch` 手动门禁，**实现文档站零延迟自动部署**，解决线上文档长期滞后主分支问题。 |
| **#4768** | `docs(agents): 采纳 "Intent is the artifact" 作为操作立场` | 🔴 Closed | **团队协作准则落地**：确立“基于当前 main 生成代码比修复旧代码更廉价”的核心立场

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*