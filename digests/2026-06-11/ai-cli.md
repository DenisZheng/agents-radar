# AI CLI 工具社区动态日报 2026-06-11

> 生成时间: 2026-06-11 00:42 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**日期：2026-06-11 | 数据来源：各工具 GitHub 仓库 | 生成：OWL**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从功能扩张向稳定性攻坚转型的关键阶段**。六款主流工具今日均无重大功能发布，社区反馈高度集中在**流式处理可靠性、跨平台一致性和安全加固**三个维度。多代理编排（Claude Code 子代理递归）、上下文窗口管理（Codex context window 工具）和 Auto Memory 子系统（Gemini CLI）代表了前沿探索方向，但各工具普遍面临"长任务稳定性"这一共同瓶颈——从 Claude Code 的 41 分钟断连到 Pi 的 5 分钟流式超时，长时运行可靠性已成为生产环境落地的最大障碍。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issues 活跃度 | PR 数 | 社区热度指标 | 整体评估 |
|------|---------|--------------|-------|-------------|---------|
| **Claude Code** | v2.1.172（新功能上线） | 高（10+ 热点 Issue） | 10+（含多个实质性修复） | #5674 💬44 👍36 | 功能迭代 + Bug 修复并行 |
| **OpenAI Codex** | rust-v0.140.0-alpha.7/4 | 极高（50+ Issues） | 10+（架构级 PR 密集） | #14593 💬604 👍265 | 社区反馈最激烈，架构重构中 |
| **Gemini CLI** | v0.46.0（稳定性修复） | 中（10 条精选 Issue） | 10（含 2 个安全 PR） | 多条 P1 Bug 集群 | 安全加固 + 质量债务偿还 |
| **GitHub Copilot CLI** | 无新 Release | 中（42 条更新） | 1（几乎为零） | #223 👍76 / #53 👍75 | 社区诉求高但官方响应冷淡 |
| **Kimi Code CLI** | 无新 Release | 中（10 条热点 Issue） | **24（20 已合入）** | #2448 YOLO 模式失效 | PR 吞吐量最高，快速修复期 |
| **OpenCode** | v1.17.3（密集发版） | 高（10+ 热点 Issue） | 10（含大仓库修复） | #1764 👍165（Vim 键位） | 版本最密集，稳定性攻坚 |
| **Pi** | 无新 Release | 中（10 条热点 Issue） | 12（8 已合入） | #5514 💬25（Project Trust） | Provider 扩展 + TUI 修复 |

**关键发现：**
- **PR 吞吐量最高**：Kimi Code CLI（24 个 PR，83% 已合入），显示极强的执行力和快速响应能力
- **社区声量最大**：OpenAI Codex（#14593 单 Issue 604 条评论），但官方 PR 产出与社区热度不匹配
- **版本发布最密集**：OpenCode（4 个版本/24h），反映紧急修复节奏

---

## 3. 共同关注的功能方向

### 3.1 流式处理与长任务稳定性（6/7 工具涉及）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | Remote Control 41 分钟准时断连（#67282）、macOS ECONNRESET（#5674） |
| OpenAI Codex | Fast 模式流式卡顿（#27491）、Windows 桌面端崩溃（#27320） |
| Gemini CLI | Shell 命令执行后卡死（#25166）、PTY resize crash（已修复） |
| Kimi Code | 文件读取死循环（#640）、Todo 任务无法完成（#2447） |
| OpenCode | 长 shell 命令成功后挂起（#25038）、大仓库启动挂起（#31797） |
| Pi | 本地 LLM 5 分钟断连（#3715）、90s 代理截断（#5611） |

**行业信号**：流式超时配置缺乏统一标准，各工具的超时机制分散且不可配置，是生产环境部署的共同瓶颈。

### 3.2 安全与权限模型细化（5/7 工具涉及）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | 上下文污染安全事件（#67283）、Headless 权限规则被忽略（#67268） |
| OpenAI Codex | Guardian 超时回退手动审批（PR #27440）、Goal 权限降级（#24300） |
| Gemini CLI | 路径遍历漏洞修复（PR #27767）、CI 供应链防护（PR #27753）、Auto Memory 日志泄露（#26525） |
| OpenCode | V1 shell 缺少破坏性命令拦截（#31774）、apply_patch 竞态覆盖（#31776） |
| Pi | Project Trust 功能引发分歧讨论（#5514） |

**行业信号**：安全加固正从"被动修复"转向"主动防御"，供应链安全和数据泄露防护成为新焦点。

### 3.3 多代理编排（3/7 工具涉及）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | v2.1.172 上线子代理递归（最深 5 层），随即涌现多代理协调 Bug（#54393） |
| OpenAI Codex | MCP agent_path 元数据（PR #27495）、context window 工具（PR #27488） |
| Gemini CLI | 子代理挂起（#21409）、误报成功（#22323）、不主动调用工具（#21968） |

**行业信号**：多代理从"概念验证"进入"实际使用"阶段，但协调可靠性和状态管理是普遍短板。

### 3.4 跨平台一致性（4/7 工具涉及）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | macOS 网络断连（#5674）、Linux TUI 鼠标失效（#66808） |
| OpenAI Codex | Windows 桌面端系统性崩溃（#27175, #27320, #27367） |
| Kimi Code | Windows 控制台闪烁（PR #2289）、日志竞争（PR #2354） |
| OpenCode | macOS Unicode NFC/NFD 编辑失败（#31786） |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 | 核心优势 | 核心短板 |
|------|---------|---------|---------|---------|---------|
| **Claude Code** | 多代理编排 + 远程协作 | 高级开发者、团队协作 | TypeScript，子代理递归架构 | 多代理能力领先，Bedrock 企业集成 | macOS 网络稳定性，版本回归频发 |
| **OpenAI Codex** | 桌面端一体化体验 | 付费订阅用户、桌面端重度用户 | Rust CLI + 桌面端双轨 | GPT 模型深度集成，Guardian 安全审查 | Windows 端质量危机，Token 计费不透明 |
| **Gemini CLI** | 代码理解 + 自动记忆 | Google 生态开发者、代码分析场景 | TypeScript，AST 感知 + Auto Memory | 代码库分析能力强，安全加固积极 | Agent 执行不可预测，工具利用率低 |
| **GitHub Copilot CLI** | GitHub 生态集成 | GitHub 企业用户、CI/CD 场景 | TypeScript，GitHub API 深度集成 | GitHub Actions/PR 生态天然优势 | 模型列表与 VS Code 不一致，官方响应慢 |
| **Kimi Code CLI** | 快速迭代 + 跨平台 | 追求新功能的开发者 | Go，Web UI + CLI 双模 | PR 吞吐量最高，修复速度快 | 功能深度不足，YOLO 模式等核心功能不稳定 |
| **OpenCode** | 可扩展 TUI + 多 Provider | Vim 用户、多模型切换者 | TypeScript，插件 + Provider 体系 | 插件生态丰富，Vim 键位支持 | 稳定性回归频繁，本地 Provider 体验差 |
| **Pi** | 多 Provider 聚合 + 企业代理 | 企业用户、本地 LLM 用户 | TypeScript，Provider 抽象层 | 企业代理支持最广（Foundry、Bedrock Mantle） | TUI 崩溃频发，流式超时问题严重 |

---

## 5. 社区热度与成熟度

### 社区活跃度排名（按 Issue 互动量 + PR 吞吐量）

| 排名 | 工具 | 活跃度评级 | 成熟度阶段 | 判断依据 |
|------|------|-----------|-----------|---------|
| 1 | **OpenAI Codex** | ⭐⭐⭐⭐⭐ | 快速迭代期 | 604 条评论超级 Issue，但官方修复节奏滞后于社区期望 |
| 2 | **Claude Code** | ⭐⭐⭐⭐⭐ | 功能扩展期 | 新功能（子代理递归）+ 高热度 Bug 并存，发版节奏快 |
| 3 | **OpenCode** | ⭐⭐⭐⭐ | 稳定性攻坚期 | 4 个版本/24h 密集修复，社区反馈直接驱动发版 |
| 4 | **Kimi Code CLI** | ⭐⭐⭐⭐ | 快速成长期 | PR 合入率 83%，执行力突出，但功能成熟度待提升 |
| 5 | **Gemini CLI** | ⭐⭐⭐ | 质量债务偿还期 | 安全 PR 集中涌现，Agent 可靠性是主要短板 |
| 6 | **Pi** | ⭐⭐⭐ | 生态扩展期 | Provider 扩展活跃，但核心稳定性（TUI 崩溃、流式超时）需优先解决 |
| 7 | **GitHub Copilot CLI** | ⭐⭐ | 社区等待期 | 高社区诉求（#223 👍76）但官方 PR 产出极低，信任度下降 |

### 关键判断

- **最成熟**：Claude Code（功能最完整，但稳定性需提升）
- **最具潜力**：Kimi Code CLI（执行速度最快，社区响应最好）
- **最大风险**：OpenAI Codex（Windows 端系统性问题 + Token 计费危机可能影响付费用户留存）
- **最需要关注**：Gemini CLI（安全加固浪潮可能预示即将进入稳定期）

---

## 6. 值得关注的趋势信号

### 趋势一：从"功能竞赛"转向"稳定性竞赛"

**信号**：今日六款工具均无突破性新功能发布，社区反馈和 PR 集中在 Bug 修复、安全加固和性能优化。Claude Code 的子代理递归是唯一重大新功能，但随即涌现大量协调 Bug。

**对开发者的参考**：如果你正在选型用于生产环境，**稳定性记录比功能清单更重要**。建议优先关注 Kimi Code CLI（修复速度快）和 Claude Code（功能最完整），对 OpenAI Codex Windows 端和 OpenCode 的 v1.17 系列保持观望。

### 趋势二：安全从"附加项"变为"基础设施"

**信号**：Gemini CLI 同日出现路径遍历漏洞修复、CI 供应链攻击防护、Auto Memory 日志泄露三个安全 PR；Claude Code 出现上下文污染安全事件；OpenAI Codex 的 Guardian 安全审查在持续优化。

**对开发者的参考**：AI CLI 工具正在从开发辅助工具演进为生产级基础设施，安全能力（权限控制、数据脱敏、供应链安全）将成为选型的关键评估维度。

### 趋势三：多代理编排进入"实战验证期"

**信号**：Claude Code 上线子代理递归后，社区立即反馈了 12 个协调 Bug（#54393）；Gemini CLI 的子代理挂起、误报成功问题持续未解；OpenAI Codex 正在为 MCP 工具添加 agent_path 元数据以支持多 agent 追踪。

**对开发者的参考**：多代理是确定性方向，但当前工具尚处于"可用不可靠"阶段。如果你的工作流依赖多代理编排，建议先在非关键任务上验证，关注各工具的**状态透明度和失败恢复机制**。

### 趋势四：Windows 端成为质量洼地

**信号**：OpenAI Codex Windows 桌面端出现系统性崩溃集群（#27175, #27320, #27367）；Kimi Code 多个 PR 专门修复 Windows 控制台、日志、编码问题；Claude Code 的 macOS 网络问题长期未解。

**对开发者的参考**：跨平台 AI CLI 工具在 Windows 上的投入普遍不足。Windows 用户建议优先选择基于 Rust 的工具（如 Codex CLI 部分）或等待专门的 Windows 稳定性修复。

### 趋势五：Token 经济透明度成为用户留存关键

**信号**：OpenAI Codex #14593（604 条评论）持续近 3 个月未解决；Pi 报告缓存写入成本低估（#5603）；Codex 正在推进图片缩放减少 Token 消耗（PR #27247）。

**对开发者的参考**：随着 AI CLI 工具从"尝鲜使用"进入"日常依赖"，Token 消耗的可预测性和透明度将直接影响用户信任。建议关注各工具的用量监控和成本归因能力。

---

> **总结**：2026-06-11 是 AI CLI 工具生态的"静默日"——没有革命性发布，但各工具在稳定性、安全和架构层面的积累正在重塑竞争格局。对于技术决策者，当前是**评估稳定性记录和安全能力**的最佳窗口期；对于开发者，Kimi Code CLI 的响应速度和 Claude Code 的功能深度值得重点关注。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-06-11 | 来源：anthropics/skills**

---

## 1. 热门 Skills 排行（PR）

以下按社区互动活跃度（评论数、更新频率、👍 反应）综合排序：

| # | Skill | 状态 | 核心功能 | 社区热点 |
|---|-------|------|----------|----------|
| 1 | **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 🟢 OPEN | 元技能：对 Skills 进行质量五维分析 + 安全审计 | 社区对"如何评估 Skill 质量"有强烈需求，这是两个 meta-skills，被引用为最佳实践参考 |
| 2 | **frontend-design** ([#1046](https://github.com/anthropics/skills/pull/1046) / [#210](https://github.com/anthropics/skills/pull/210)) | 🟢 OPEN | 前端设计指导，提升 Claude 在 UI/UX 方面的输出质量 | 两个 PR 同时推进，说明社区对前端 Skill 的完善有持续热情 |
| 3 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | 🟢 OPEN | 防止 AI 生成文档中的排版问题（孤行、寡行、编号错位） | 解决"每个文档都会遇到"的痛点，实用性强 |
| 4 | **skill-creator 系列修复** ([#539](https://github.com/anthropics/skills/pull/539), [#361](https://github.com/anthropics/skills/pull/361), [#362](https://github.com/anthropics/skills/pull/362), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | 🟢 OPEN | 修复 skill-creator 的 YAML 解析、Windows 兼容、UTF-8 崩溃等问题 | **5 个独立 PR** 集中修复 skill-creator 工具链，说明这是社区最大痛点 |
| 5 | **agent-creator** ([#1140](https://github.com/anthropics/skills/pull/1050)) | 🟢 OPEN | 创建任务专用 Agent 集合的元技能 | 与 Issue #1120 联动，涉及多工具并行调用修复 |
| 6 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 🟢 OPEN | 全栈测试模式：单元测试、React 组件测试、Testing Trophy 模型 | 测试是开发者核心需求，该 Skill 覆盖全面 |
| 7 | **sensory (macOS AppleScript)** ([#806](https://github.com/anthropics/skills/pull/806)) | 🟢 OPEN | 通过 osascript 实现原生 macOS 自动化，替代截图式 computer use | 两级权限设计获得好评，是平台特定自动化的标杆 |
| 8 | **shodh-memory** ([#154](https://github.com/anthropics/skills/pull/154)) | 🟢 OPEN | AI Agent 跨对话持久记忆系统 | 解决"context window 有限"的根本问题，社区关注度高 |

---

## 2. 社区需求趋势（Issues 分析）

从高互动 Issues 中提炼的 **5 大需求方向**：

### 🔥 工作流与协作
- **组织级 Skill 共享** ([#228](https://github.com/anthropics/skills/issues/228), 13 评论, 👍7)：企业用户强烈需要团队内 Skill 库共享机制，而非手动下载-发送-上传
- **Skill 去重机制** ([#189](https://github.com/anthropics/skills/issues/189), 👍8)：document-skills 和 example-skills 内容重复，浪费 context window

### 🔧 工具链稳定性
- **skill-creator 评估循环失效** ([#556](https://github.com/anthropics/skills/issues/556), 12 评论, 👍7)：`run_eval.py` 触发率 0%，这是 skill-creator 的核心 bug
- **Windows 兼容性** ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050))：多个 PR 修复 Windows 下的 subprocess/encoding 问题

### 📄 文档处理
- **多文件预加载** ([#1220](https://github.com/anthropics/skills/issues/1220))：希望 Skill 引用文件能一次性注入 context，而非仅 SKILL.md
- **SharePoint Online 集成** ([#1175](https://github.com/anthropics/skills/issues/1175))：企业级文档管理 + 权限控制写入 Skill

### 🔌 平台扩展
- **Skills 暴露为 MCP** ([#16](https://github.com/anthropics/skills/issues/16))：将 Skill 能力以 MCP 协议标准化，便于跨工具调用
- **AWS Bedrock 支持** ([#29](https://github.com/anthropics/skills/issues/29))：非 Anthropic 原生平台的 Skill 运行方案

### 🛡️ 安全与治理
- **命名空间信任边界** ([#492](https://github.com/anthropics/skills/issues/492))：社区 Skill 冒充 `anthropic/` 官方命名空间的安全风险
- **Agent 治理** ([#412](https://github.com/anthropics/skills/issues/412))：策略执行、威胁检测、审计追踪

---

## 3. 高潜力待合并 Skills

以下 PR **活跃度高、解决实际问题、近期可能落地**：

| 优先级 | PR | 理由 |
|--------|-----|------|
| ⭐⭐⭐ | **skill-creator Windows 修复** ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | 多个独立贡献者同时修复同一问题，说明需求迫切；代码改动小（1-line），合并风险低 |
| ⭐⭐⭐ | **YAML 特殊字符检测** ([#361](https://github.com/anthropics/skills/pull/361), [#539](https://github.com/anthropics/skills/pull/539)) | 解决 skill-creator 静默解析失败的根因，已有 2 个 PR 互补 |
| ⭐⭐⭐ | **DOCX 书签 ID 冲突修复** ([#541](https://github.com/anthropics/skills/pull/541)) | 修复文档损坏 bug，影响核心文档 Skill |
| ⭐⭐ | **agent-creator** ([#1140](https://github.com/anthropics/skills/pull/1140)) | 关联 Issue #1120，包含多工具评估修复，功能完整 |
| ⭐⭐ | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 内容全面，测试是高频需求 |
| ⭐ | **sensory (macOS)** ([#806](https://github.com/anthropics/skills/pull/806)) | 平台特定，受众有限但实现优雅 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：**
> 
> **"让 Skill 工具链本身更可靠"** — 超过 30% 的活跃 PR 集中在修复 skill-creator 的 YAML 解析、Windows 兼容、评估循环等基础设施问题，说明社区已从"创造新 Skill 内容"转向"夯实 Skill 开发体验"。其次是**企业级协作需求**（组织共享、安全治理）和**文档处理质量**（排版、多格式支持）的持续高涨。

---

*报告生成时间：2026-06-11 | 数据来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

# Claude Code 社区动态日报 · 2026-06-11

---

## 1. 今日速览

Claude Code 发布新版本 **v2.1.172**，最大亮点是子代理（Sub-agents）现在可以递归生成子代理，最深支持 5 层嵌套，同时 Amazon Bedrock 区域读取逻辑得到改进。社区 Issue 方面，macOS 网络连接持续报错（#5674）和 Bedrock 权限异常（#51183）仍是高热度话题，多个新 Issue 集中在 TUI 渲染异常、Remote Control 稳定性以及安全误报等方向。

---

## 2. 版本发布

### v2.1.172

- **子代理递归生成**：Sub-agents 现在可以 spawn 自己的子代理，最多支持 5 层深度，为复杂多代理编排任务打开空间。
- **Amazon Bedrock 区域自动检测**：当 `AWS_REGION` 环境变量未设置时，自动从 `~/.aws` 配置文件读取区域，与 AWS SDK 优先级一致；`/status` 命令会显示区域来源。
- **Mark 浏览搜索栏**：浏览 mark 时新增搜索栏，提升导航效率。

---

## 3. 社区热点 Issues

| # | 标题 | 热度 | 为什么值得关注 |
|---|------|------|---------------|
| [#5674](https://github.com/anthropics/claude-code/issues/5674) | macOS 持续 ECONNRESET 网络错误 | 💬44 👍36 | 长期未解决的 macOS 专属网络断连问题，跨平台对比（Windows/Linux 正常）指向 macOS 网络栈处理缺陷，影响大量 Mac 用户日常使用。 |
| [#51183](https://github.com/anthropics/claude-code/issues/51183) | Bedrock Claude Opus 4.7 返回 permission_error | 💬30 👍8 | 已授权用户仍遭遇权限拒绝，涉及 AWS Bedrock 模型访问的核心路径，影响企业级用户。 |
| [#29910](https://github.com/anthropics/claude-code/issues/29910) | 内置密钥管理功能请求 | 💬10 👍30 | 点赞数远超评论数，说明社区对原生 secrets 管理有强烈且广泛的需求，但讨论尚未充分展开。 |
| [#51587](https://github.com/anthropics/claude-code/issues/51587) | 禁用 Launch 预览面板自动打开 | 💬10 👍13 | macOS 桌面端编辑文件时预览面板频繁自动弹出干扰工作流，用户体验痛点明确。 |
| [#54393](https://github.com/anthropics/claude-code/issues/54393) | 多代理协调 12 个 Bug 的事后复盘 | 💬13 | 一份系统性的多代理协调缺陷目录，对构建复杂自动化工作流的开发者有参考价值。 |
| [#60385](https://github.com/anthropics/claude-code/issues/60385) | Remote Control 下 MCP 权限提示不显示 | 💬10 | Web UI 驱动 Remote Control 时 MCP 工具权限弹窗缺失，阻塞自动化流程，是 Remote Control 功能的关键缺陷。 |
| [#67282](https://github.com/anthropics/claude-code/issues/67282) | Remote Control 会话约 41 分钟准时断开 | 💬2 | 新报告，现象高度规律（11+ 次连续复现），疑似超时配置或心跳机制问题，影响长时间无人值守任务。 |
| [#67283](https://github.com/anthropics/claude-code/issues/67283) | 桥接会话上下文污染：出现伪造的工具结果 | 💬1 | 安全问题——模型上下文中出现磁盘记录中不存在的指令和工具结果，涉及数据完整性和潜在注入风险。 |
| [#66808](https://github.com/anthropics/claude-code/issues/66808) | 2.1.170 更新后触控板滚动和复制粘贴失效 | 💬3 👍1 | 版本回归问题，Linux TUI 交互功能受损，已有临时绕过方案（`CLAUDE_CODE_DISABLE_MOUSE=1`）。 |
| [#67268](https://github.com/anthropics/claude-code/issues/67268) | Headless 模式忽略 .claude/ 子路径的 permissions.allow | 💬1 | 无头模式下显式权限规则被静默忽略，影响 CI/CD 自动化场景的配置灵活性。 |

---

## 4. 重要 PR 进展

| # | 标题 | 内容摘要 |
|---|------|---------|
| [#67084](https://github.com/anthropics/claude-code/pull/67084) | 修复 Hookify 提示字段和警告上下文 | 将旧版 `event: prompt` + `pattern:` 规则映射到当前 `UserPromptSubmit` 的 `prompt` 字段，保持向后兼容，并为 Hookify 警告响应添加 `additionalContext`。 |
| [#63460](https://github.com/anthropics/claude-code/pull/63460) | 更新插件 README 中已废弃的 npm 安装指令 | 将 `npm install -g` 替换为推荐的 curl/irm 安装方式，并添加废弃说明，减少新用户踩坑。 |
| [#63686](https://github.com/anthropics/claude-code/pull/63686) | 将 stale/autoclose 超时从 14 天延长至 90 天 | Issue 生命周期管理策略调整，避免活跃 Issue 被过早标记为 stale 或自动关闭。 |
| [#64607](https://github.com/anthropics/claude-code/pull/64607) | 修复插件 .mcp.json 示例中错误的 mcpServers 包装 | `.mcp.json` 应使用扁平格式，`mcpServers` 键属于 `plugin.json` 概念，文档示例存在误导。 |
| [#65875](https://github.com/anthropics/claude-code/pull/65875) | 向 agentic_review 子进程转发 ANTHROPIC_BASE_URL | 修复使用代理/网关（如 LiteLLM、Bifrost）时，advisor 功能因未继承 base URL 而认证失败的问题。 |
| [#65916](https://github.com/anthropics/claude-code/pull/65916) | 澄清 allowed-tools 与 agent tools: 的权限边界 | 文档明确区分：`allowed-tools` 仅为自动审批机制，不限制工具调用；`tools:` 在前言中才是硬限制。 |
| [#65919](https://github.com/anthropics/claude-code/pull/65919) | 记录 ${CLAUDE_PLUGIN_ROOT} 在子代理中的已知限制 | 子代理收到的是字面字符串而非已解析路径（影响 ≤2.1.166），在 SKILL.md 中添加已知限制章节和解决方案矩阵。 |
| [#66372](https://github.com/anthropics/claude-code/pull/66372) | 修复 devcontainer Docker 守护进程检测逻辑 | PowerShell 中原生命令非零退出不抛异常，导致 Docker 未运行时误报检测通过，改用 `$LASTEXITCODE` 判断。 |
| [#66416](https://github.com/anthropics/claude-code/pull/66416) | 修复 plugin-dev 验证脚本因 set -e 首次发现即中止 | 三个验证脚本使用 `set -euo pipefail` 导致遇到第一个问题就退出，修复后能完整报告所有问题。 |
| [#66573](https://github.com/anthropics/claude-code/pull/66573) | 修复 ralph-wiggum stop-hook 中被 set -e 破坏的错误处理 | `set -euo pipefail` 导致 frontmatter 字段提取和迭代计数在错误处理代码前静默退出。 |

---

## 5. 功能需求趋势

从当前 Issue 分布来看，社区最关注的功能方向集中在以下几个领域：

1. **多代理编排（Multi-Agent Orchestration）**：v2.1.172 刚上线子代理递归能力，社区随即涌现大量多代理协调相关的 Bug 报告（#54393）和稳定性问题（#67282），说明这是当前最活跃的探索方向。

2. **Remote Control 稳定性与功能完善**：多个 Issue 涉及 Remote Control 的会话超时（#67282）、认证失败（#62924）、MCP 权限提示缺失（#60385），表明该功能正在被广泛采用但成熟度仍需提升。

3. **安全与权限模型细化**：从内置密钥管理（#29910）到 headless 模式权限规则被忽略（#67268），再到上下文污染安全事件（#67283），社区对细粒度权限控制和安全保障的需求日益增长。

4. **TUI/桌面端体验**：跨平台 TUI 渲染异常（#64007、#66808、#67254、#67277）、桌面端 UI 问题（#51587、#67271）持续出现，Linux 和 macOS 用户反馈尤为集中。

5. **Bedrock/多云支持**：Bedrock 区域检测已在新版本中改进，但权限错误（#51183）和 base URL 转发（PR #65875）表明企业多云部署场景仍有不少边缘情况需要覆盖。

---

## 6. 开发者关注点

- **macOS 网络稳定性**：#5674 已开放近一年、44 条评论仍未解决，是社区最大的痛点之一，Mac 开发者体验受损严重。
- **版本回归频发**：#66808（2.1.170 破坏鼠标交互）、#61114（桌面应用崩溃）显示发版节奏中 QA 覆盖不足，开发者对升级持谨慎态度。
- **安全误报影响工作流**：#67273、#67033 等 Issue 反映安全分类器对合法诊断和科研计算存在误判，开发者希望有更精细的豁免机制。
- **文档与实际行为不一致**：多个 PR（#64607、#65916、#65919）在修复文档与引擎实际行为的偏差，说明文档维护滞后于功能迭代。
- **长时间运行任务可靠性**：Remote Control 41 分钟断连（#67282）和 ECONNRESET（#5674）共同指向长时任务稳定性是生产环境部署的关键障碍。

---

> 📌 **编辑建议**：今日重点关注 v2.1.172 子代理递归功能在实际多代理场景中的表现，以及 #67283 上下文污染问题的后续调查进展。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-11

---

## 1. 今日速览

今日社区焦点集中在 **Windows 桌面端稳定性危机** 和 **Token 消耗过快** 两大问题上。多个 Windows 用户报告 26.608.x 版本崩溃、白屏、透明 UI 等严重 bug，而 #14593 的 Token 燃烧问题已积累 604 条评论、265 个赞，成为社区最高热度 Issue。与此同时，内部开发节奏活跃，今日有 10+ 个 PR 涉及 MCP 工具链、图像处理、TUI 重构和插件认证路由等方向。

---

## 2. 版本发布

过去 24 小时内发布了两个 Rust CLI alpha 版本：

| 版本 | 说明 |
|------|------|
| **rust-v0.140.0-alpha.7** | 最新 alpha 迭代，延续快速发布节奏 |
| **rust-v0.140.0-alpha.4** | 同期发布的早期 alpha |

> 注：Release 页面未提供详细 changelog，具体变更需结合 commit 历史查看。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #14593 — Token 消耗速度异常快
- **链接**: [openai/codex#14593](https://github.com/openai/codex/issues/14593)
- **数据**: 604 评论 | 265 👍 | 自 2026-03-13 持续至今
- **为什么重要**: 这是社区绝对热度的 Issue。大量 Business 订阅用户报告 Token 消耗远超预期，直接影响使用成本和体验。问题跨越数月仍未彻底解决，说明根因复杂，可能涉及模型调用策略或计费逻辑。

### 🖥️ #27175 — Windows 26.602.71036 更新后崩溃/无法访问
- **链接**: [openai/codex#27175](https://github.com/openai/codex/issues/27175)
- **数据**: 8 评论 | 2 👍
- **为什么重要**: 代表了一类高频出现的 Windows 端更新后崩溃问题。ChatGPT Pro 用户（$200/月）受影响，付费用户的稳定性诉求更为迫切。

### 🔐 #24675 — 重新认证后 Codex Desktop 仍使用过期 app connector 链接
- **链接**: [openai/codex#24675](https://github.com/openai/codex/issues/24675)
- **数据**: 22 评论 | 17 👍
- **为什么重要**: 认证缓存失效问题影响 Linear 等第三方连接器用户。重启和重装插件均无效，需要手动清除缓存，说明认证状态管理存在设计缺陷。

### 🐌 #23198 — Windows 桌面端极度卡顿
- **链接**: [openai/codex#23198](https://github.com/openai/codex/issues/23198)
- **数据**: 12 评论 | 31 👍
- **为什么重要**: 31 个赞表明大量用户共鸣。Windows 端性能问题是长期痛点，与 macOS 体验差距明显。

### 📁 #25463 — 项目线程从视图中消失但本地数据仍存在
- **链接**: [openai/codex#25463](https://github.com/openai/codex/issues/25463)
- **数据**: 11 评论 | 1 👍
- **为什么重要**: 数据丢失恐慌是用户最敏感的痛点之一。虽然 JSONL 文件仍在，但 UI 不可见会严重影响信任度。

### 🔒 #26867 — 迁移到 Personal Pro 后 GitHub PR review 仍引用已停用 workspace
- **链接**: [openai/codex#26867](https://github.com/openai/codex/issues/26867)
- **数据**: 13 评论 | 7 👍
- **为什么重要**: 账户迁移场景下的 workspace 状态同步问题，影响从 Business 降级/迁移的用户。

### ⚡ #27491 — Fast 模式流式输出严重卡顿
- **链接**: [openai/codex#27491](https://github.com/openai/codex/issues/27491)
- **数据**: 5 评论 | 0 👍 | 今日新发
- **为什么重要**: GPT-5.5 Fast 模式是高端功能，Pro 用户期望极致速度，但实际体验是"每几秒才输出几个字符"，与产品定位严重不符。

### 💥 #27320 — Windows 26.608.1337 启动即崩溃并生成 Crashpad dump
- **链接**: [openai/codex#27320](https://github.com/openai/codex/issues/27320)
- **数据**: 3 评论 | 0 👍 | 今日新发
- **为什么重要**: 与 #27175 形成集群效应，表明 26.608.x 系列在 Windows 上存在系统性稳定性回归。

### 🤖 #24300 — Goal 自动续转会将 Full Access 降级为只读/按需审批
- **链接**: [openai/codex#24300](https://github.com/openai/codex/issues/24300)
- **数据**: 10 评论 | 0 👍 | 已关闭
- **为什么重要**: 权限模型不一致是安全隐患。UI 显示 Full Access 但实际以只读运行，可能导致用户误判操作权限。

### ⌨️ #27296 — Fn 全局听写快捷键在 26.608.12217 更新后失效
- **链接**: [openai/codex#27296](https://github.com/openai/codex/issues/27296)
- **数据**: 3 评论 | 8 👍
- **为什么重要**: 8 个赞在少量评论中占比极高，说明受影响用户虽少但痛点强烈。全局快捷键失效影响无障碍使用场景。

---

## 4. 重要 PR 进展（Top 10）

### 🔧 PR #27495 — 向 MCP 工具调用传递 agent_path 元数据
- **链接**: [openai/codex#27495](https://github.com/openai/codex/pull/27495)
- **作者**: miaolin-oai
- **内容**: 为 MCP 请求 turn 元数据添加 `agent_path` 字段，区分根会话（`/root`）和子 agent 路径（`/root/worker`），且不污染普通 turn 元数据头。
- **意义**: 增强 MCP 工具调用的可观测性和调试能力，对多 agent 架构的追踪至关重要。

### 🔑 PR #27443 — 添加 Bedrock API Key 作为托管认证模式
- **链接**: [openai/codex#27443](https://github.com/openai/codex/pull/27443)
- **作者**: celia-oai
- **内容**: 将 Amazon Bedrock API Key 纳入统一认证生命周期管理，支持持久化、keyring、重载和登出。
- **意义**: 扩展 Codex 的云服务认证生态，降低 AWS 用户接入门槛。

### 🧹 PR #27487 — 清理 TUI 遗留遥测和迁移依赖
- **链接**: [openai/codex#27487](https://github.com/openai/codex/pull/27487)
- **作者**: etraut-openai
- **内容**: 移除 TUI 对 `legacy_core` 的遥测和人格迁移依赖，推进 TUI 完全迁移到 app-server 层。
- **意义**: 架构清理，减少技术债务，是 TUI 现代化系列工作的一环。

### 🛡️ PR #27440 — Guardian 超时时回退到手动审批
- **链接**: [openai/codex#27440](https://github.com/openai/codex/pull/27440)
- **作者**: kbazzi
- **内容**: 当 Guardian 自动审查因超时而未返回决策时，不再视为硬失败，而是回退到让用户手动决定。
- **意义**: 提升安全审查的可用性，避免因偶发超时阻塞正常操作。

### 🖼️ PR #27247 — 在 feature flag 下统一缩放历史图片
- **链接**: [openai/codex#27247](https://github.com/openai/codex/pull/27247)
- **作者**: fjord-oai
- **内容**: 新增 `resize_all_images` feature flag（默认关闭），在图片插入对话历史前统一解码和缩放，覆盖用户输入、`view_image` 和结构化输出。
- **意义**: 减少 Token 消耗，优化上下文窗口利用率，对多模态场景尤为重要。

### 📐 PR #27246 — 从 Responses Lite 请求中剥离图片 detail 字段
- **链接**: [openai/codex#27246](https://github.com/openai/codex/pull/27246)
- **作者**: fjord-oai
- **内容**: 当启用 `resize_all_images` 时，自动剥离消息图片和工具输出图片中的 `detail` 字段，不修改存储的历史记录。
- **意义**: 与 PR #27247 配合，进一步精简 API 请求体积。

### 🎨 PR #27266 — 缩放图片时保留 ICC 和 EXIF 元数据
- **链接**: [openai/codex#27266](https://github.com/openai/codex/pull/27266)
- **作者**: fjord-oai
- **内容**: 在图片缩放和重编码过程中保留 ICC 色彩配置文件和 EXIF 元数据，支持 PNG、JPEG、WebP 输出。
- **意义**: 确保图片处理后不丢失重要的色彩和方向信息，对设计类工作流很重要。

### 🔄 PR #27488 — 新增 context window 工具
- **链接**: [openai/codex#27488](https://github.com/openai/codex/pull/27488)
- **作者**: pakrym-oai
- **内容**: 允许模型主动请求开启新的 context window，无需生成 compaction summary，下一轮通过初始上下文路径重新建立完整上下文。
- **意义**: 给 agent 更大的上下文自主管理能力，减少 compaction 带来的信息损失。

### 🎯 PR #27337 — 改进 TUI 的 /goal 支持长文本和图片
- **链接**: [openai/codex#27337](https://github.com/openai/codex/pull/27337)
- **作者**: etraut-openai
- **内容**: 允许 goal 定义中包含本地图片和远程图片 URL，TUI 将本地图片字节物化到 goal 专属附件目录。
- **意义**: 增强 goal 功能的多模态能力，使复杂目标定义更直观。

### 🔌 PR #27461 — 有 app 路由时跳过插件 MCP OAuth
- **链接**: [openai/codex#27461](https://github.com/openai/codex/pull/27461)
- **作者**: felixxia-oai
- **内容**: 安装双表面插件时，如果已有 app 路由可用，不再主动探测插件自带的 MCP OAuth 流程。
- **意义**: 插件认证路由优化的第二步，减少安装时的认证冲突和用户困惑。

---

## 5. 功能需求趋势

从今日 50 条 Issues 中提炼出社区最关注的五大方向：

| 排名 | 方向 | 代表 Issues | 趋势判断 |
|------|------|-------------|----------|
| 1 | **Windows 端稳定性** | #27175, #27320, #27367, #25807, #26310, #23198 | 🔴 危机级 — 26.608.x 系列在 Windows 上出现系统性回归，崩溃、白屏、透明 UI 集中爆发 |
| 2 | **Token 消耗与成本控制** | #14593, #22818, #22132 | 🔴 长期痛点 — 604 条评论的超级 Issue，涉及计费公平性 |
| 3 | **认证与账户管理** | #24675, #26867, #24103, #26750 | 🟡 持续高发 — 缓存失效、workspace 迁移、MCP OAuth 等问题频发 |
| 4 | **会话/项目管理** | #25463, #20833, #22796 | 🟡 信任危机 — 数据"消失"（实际在磁盘但 UI 不显示）严重影响用户信心 |
| 5 | **性能与速度** | #27491, #23198, #26843 | 🟡 体验短板 — 流式输出卡顿、磁盘写入爆炸、WindowServer 过载 |

---

## 6. 开发者关注点总结

### 🚨 最紧急：Windows 桌面端质量
多个独立用户报告 26.608.x 版本在 Windows 10/11 上出现启动崩溃、立即退出、透明 UI 等严重问题。CLI 工作正常但桌面端不可用，建议 Windows 用户暂时回退版本或等待 hotfix。

### 💰 最持久：Token 消耗透明度
#14593 已持续近 3 个月、604 条评论，社区对 Token 计费机制的透明度极度不满。用户需要更清晰的 Token 用量归因和预警机制。

### 🔐 最隐蔽：认证状态一致性
认证缓存（#24675）、workspace 迁移（#26867）、MCP OAuth（#24103）三类问题共同指向认证状态管理缺乏统一的失效和同步策略。

### 🏗️ 最活跃：内部架构演进
今日 PR 显示 OpenAI 内部正在推进多项架构工作：TUI 去 legacy_core 化（PR #27487, #27484）、图像处理管线统一（PR #27247, #27246, #27266）、插件认证路由优化（PR #27461, #27465）、MCP 元数据增强（PR #27495）。这些工作短期内不会直接面向用户，但将为未来的稳定性和功能扩展奠定基础。

---

*数据来源: github.com/openai/codex | 统计时间: 2026-06-11 | 生成工具: OWL*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-11

---

## 1. 今日速览

Gemini CLI 今日发布 **v0.46.0**，核心修复了 PTY resize 导致的 native crash 问题。社区方面，**安全类 PR 集中涌现**，包括路径遍历漏洞修复和 CI 流水线 artifact  poisoning 防护；同时 **Auto Memory 子系统的多个质量缺陷**（重试循环、无效 patch 处理、日志泄露）持续受到关注，反映出该功能虽已上线但稳定性仍需打磨。

---

## 2. 版本发布

### v0.46.0 — 2026-06-11

- **fix(core): harden PTY resize against native crashes** — 修复了终端 resize 时可能触发 native 进程崩溃的问题，由 @scidomino 提交（[PR #27496](https://github.com/google-gemini/gemini-cli/pull/27496)）。
- 包含 v0.45.0-preview.0 和 v0.44.0 的 Changelog 补录。

> 这是一个以稳定性修复为主的小版本，未引入新功能。

---

## 3. 社区热点 Issues

以下按关注度（评论数 + 👍 数）排序，挑选 10 个最值得关注的 Issue：

| # | Issue | 标签 | 热度 | 摘要 |
|---|-------|------|------|------|
| 1 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | P1 · bug | 💬7 👍8 | 调用 generalist subagent 时无限挂起，简单操作（如创建文件夹）也会卡死。用户反馈禁用 subagent 后问题消失，是影响日常使用的严重 bug。 |
| 2 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | P1 · bug | 💬6 👍2 | `codebase_investigator` 子 agent 达到最大轮数后仍报告 `status: "success"`，**隐藏了实际中断**，可能导致用户误以为任务完成。 |
| 3 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component level evaluations | P1 · eval_infra | 💬7 | 跟踪组件级行为评估（behavioral evals）的基础设施建设，已有 76 个测试用例，是质量保障的核心 EPIC。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess impact of AST-aware file reads, search, and mapping | P2 · feature | 💬7 👍1 | 探索使用 AST 感知工具减少 agent 读取文件的 token 消耗和轮次，可能显著提升大型代码库的分析效率。 |
| 5 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command execution gets stuck with "Waiting input" | P1 · bug | 💬4 👍3 | 命令执行完毕后 CLI 仍显示"等待用户输入"并卡住，是高频复现的 shell 交互 bug。 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Add deterministic redaction and reduce Auto Memory logging | P2 · security | 💬5 | Auto Memory 在将内容发送给模型后才进行 secret 脱敏，存在安全隐患；同时日志中可能泄露 skill 内容。 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory from retrying low-signal sessions indefinitely | P2 · bug | 💬5 | Auto Memory 对低价值会话无限重试，浪费资源且无退避机制。 |
| 8 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills and sub-agents enough | P2 · bug | 💬6 | 用户反馈 agent 几乎不会主动调用已配置的 custom skills 和 sub-agents，需要显式指令才使用，**工具利用率低**。 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error with > 128 tools | P2 · bug | 💬3 | 可用工具数量超过阈值时触发 400 错误，agent 缺乏智能的工具范围裁剪能力。 |
| 10 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores settings.json overrides | P2 · bug | 💬3 | Browser Agent 完全忽略 `settings.json` 中的 `maxTurns` 等配置覆盖，配置系统存在缺陷。 |

**观察：** 前 10 条中有 6 条与 **agent 行为异常**（挂起、误报成功、不调用工具）相关，说明 agent 可靠性是当前社区最大痛点。

---

## 4. 重要 PR 进展

以下挑选 10 个最具实质内容的 PR（排除纯依赖升级的 chore commits）：

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#27767](https://github.com/google-gemini/gemini-cli/pull/27767) | OPEN | **fix(cli): prevent path traversal vulnerabilities during skill install** — 修复 `installSkill`、`linkSkill`、`uninstallSkill` 中的 3 个路径遍历漏洞，防止恶意 skill 写入任意文件路径。 |
| 2 | [#27753](https://github.com/google-gemini/gemini-cli/pull/27753) | OPEN | **ci: validate workflow_run origin before consuming E2E artifact** — 修复 fork PR 可通过 `workflow_run` 注入恶意 artifact 并获取仓库 secrets 的供应链安全问题。 |
| 3 | [#27839](https://github.com/google-gemini/gemini-cli/pull/27839) | OPEN | **fix(core): make read_background_output delay abort-aware** — 修复 ESC 取消后台输出读取后 spinner 不停转的问题，使 delay 逻辑响应 abort signal。 |
| 4 | [#27698](https://github.com/google-gemini/gemini-cli/pull/27698) | OPEN | **fix(core): Ensure zero-quota limits fail fast** — 修复免费账户配额为 0 时 CLI 陷入 10 次重试循环的 bug，改为快速失败。 |
| 5 | [#27496](https://github.com/google-gemini/gemini-cli/pull/27496) | MERGED | **fix(core): harden PTY resize against native crashes** — 已进入 v0.46.0 的 PTY resize 稳定性修复。 |
| 6 | [#27827](https://github.com/google-gemini/gemini-cli/pull/27827) | CLOSED | **chore(deps): bump zod from 3.25.76 to 4.4.3** — Zod 大版本升级（v3→v4），可能涉及 breaking changes，需关注兼容性。 |
| 7 | [#27824](https://github.com/google-gemini/gemini-cli/pull/27824) | CLOSED | **chore(deps): bump vitest from 3.2.4 to 4.1.8** — 测试框架大版本升级，影响 CI 流水线。 |
| 8 | [#27828](https://github.com/google-gemini/gemini-cli/pull/27828) | CLOSED | **chore(deps-dev): bump chrome-devtools-mcp from 0.19.0 to 1.1.1** — Chrome DevTools MCP 工具大幅升级，可能带来新的浏览器调试能力。 |
| 9 | [#27833](https://github.com/google-gemini/gemini-cli/pull/27833) | CLOSED | **chore(deps): bump comment-json from 4.2.5 to 5.0.0** — 注释解析库大版本升级，可能影响配置文件解析行为。 |
| 10 | [#27826](https://github.com/google-gemini/gemini-cli/pull/27826) | CLOSED | **chore(deps): bump https-proxy-agent from 7.0.6 to 9.0.0** — 代理库大版本升级，影响网络代理功能。 |

**观察：** 今日 PR 呈现明显的 **安全加固浪潮** — 路径遍历、CI 供应链攻击、abort 信号处理等 3 个安全/稳定性 PR 同时推进，说明团队正在集中排查安全债务。依赖升级方面，**Zod v3→v4** 和 **Vitest v3→v4** 是两个需要重点关注的大版本跳跃。

---

## 5. 功能需求趋势

从所有 Issues 中提炼出社区最关注的 **5 大功能方向**：

### ① Agent 可靠性与可观测性 🔥🔥🔥
- 子 agent 挂起（#21409）、误报成功（#22323）、不主动调用工具（#21968）、工具数量超限（#24246）
- **核心诉求：** agent 需要更好的自我监控、超时机制和透明的执行状态反馈

### ② Auto Memory 系统完善 🔥🔥🔥
- 安全脱敏（#26525）、无限重试（#26522）、无效 patch 处理（#26523）、日志质量（#26516）
- **核心诉求：** 作为较新的核心功能，Auto Memory 在安全性、退避策略和错误隔离方面仍需大量打磨

### ③ 代码理解能力增强 🔥🔥
- AST 感知文件读取/搜索（#22745、#22746、#22747）、临时脚本管理（#23571）
- **核心诉求：** 减少 agent 分析大型代码库时的 token 消耗和轮次，提升精确度

### ④ 安全加固 🔥🔥
- 路径遍历（PR #27767）、CI 供应链（PR #27753）、Auto Memory 日志泄露（#26525）
- **核心诉求：** 随着 skill 生态扩展，供应链安全和数据泄露防护成为优先事项

### ⑤ 配置系统一致性 🔥
- Browser Agent 忽略 settings.json（#22267）、symlink agent 文件不识别（#20079）、subagent 权限绕过（#22093）
- **核心诉求：** 配置系统需要统一的行为规范和更完善的文档

---

## 6. 开发者关注点总结

| 痛点 | 具体表现 | 影响范围 |
|------|----------|----------|
| **Agent 执行不可预测** | 挂起、误报成功、不调用已配置工具 | 所有使用 subagent 的用户 |
| **Shell 交互卡死** | 命令完成后仍显示"等待输入" | 所有使用 shell 工具的用户 |
| **Auto Memory 安全隐患** | 先发送后脱敏、日志泄露 | 启用 Auto Memory 的用户 |
| **配置不生效** | Browser Agent 忽略 settings.json、symlink 不识别 | 高级配置用户 |
| **工具数量限制** | > 128 工具时 400 错误 | 配置大量 MCP 工具的用户 |
| **终端体验** | PTY resize crash、外部编辑器退出后渲染损坏 | 所有终端用户 |

**总体评估：** Gemini CLI 当前处于 **功能快速扩展期向稳定性成熟期过渡** 的阶段。v0.46.0 的 PTY 修复和今日多个安全 PR 的推进表明团队正在积极偿还技术债务。社区最迫切的需求集中在 **agent 执行可靠性** 和 **Auto Memory 安全性** 两个维度，建议重点关注相关 Issue 的进展。

---

*数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 报告生成时间：2026-06-11*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-11

---

## 1. 今日速览

今日社区活跃度较高，共 42 条 Issue 在过去 24 小时内更新，无新版本发布。**终端渲染回归问题集中爆发**——多个用户报告 v1.0.60 存在流式输出字符重复/截断的严重 bug；**模型支持不均衡**持续是社区最大痛点，Gemini 系列模型在 CLI 与 VS Code 之间的可用性差异引发大量讨论；此外，**第三方 MCP 服务器被策略拦截**的问题在沉寂数月后再次出现。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

以下按热度与影响力排序，精选 10 条最值得关注的 Issue：

### 🔴 #53 — Bring back the GitHub Copilot in the CLI commands to not break workflows
- **链接**: [github/copilot-cli/issues/53](https://github.com/github/copilot-cli/issues/53)
- **状态**: OPEN | 👍 75 | 💬 34
- **为什么重要**: 这是社区**点赞数最高的 Issue** 之一。用户反映 GitHub 移除了 CLI 中某些 Copilot 命令，导致现有自动化工作流断裂。作者指出，在 GitHub 官方沉默 6 个月后，社区已开始自行开发替代方案（如 `shell-ai`）。这反映了官方 CLI 与社区期望之间的巨大鸿沟。

### 🔴 #223 — "Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens
- **链接**: [github/copilot-cli/issues/223](https://github.com/github/copilot-cli/issues/223)
- **状态**: OPEN | 👍 76 | 💬 29
- **为什么重要**: 企业用户的核心诉求。组织希望在自动化场景中使用组织级 Token 而非个人 PAT，但 "Copilot Requests" 权限在创建组织拥有的 Token 时不可见。这是**企业采用 Copilot CLI 的关键阻塞点**，点赞数高达 76。

### 🟠 #1703 — Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro)
- **链接**: [github/copilot-cli/issues/1703](https://github.com/github/copilot-cli/issues/1703)
- **状态**: CLOSED | 👍 54 | 💬 31
- **为什么重要**: 同一账户和组织下，Copilot CLI 显示的模型列表远少于 VS Code Copilot。以 Gemini 3.1 Pro 为例，组织设置中已启用且在 VS Code 中可用，但 CLI 中缺失。这是**模型一致性**问题的典型代表，社区讨论热烈。

### 🟠 #821 — Enable gemini-3-flash model in CLI
- **链接**: [github/copilot-cli/issues/821](https://github.com/github/copilot-cli/issues/821)
- **状态**: CLOSED | 👍 44 | 💬 5
- **为什么重要**: Gemini 3 Flash 已在 Web Copilot 中可用，但 CLI 中缺失。44 个点赞表明社区对**快速、低成本模型**在 CLI 场景中的需求强烈。

### 🟠 #2334 — Please bring back no-alt-screen
- **链接**: [github/copilot-cli/issues/2334](https://github.com/github/copilot-cli/issues/2334)
- **状态**: CLOSED | 👍 28 | 💬 7
- **为什么重要**: alt-screen 模式导致无法滚动回查历史、无法使用终端查找功能，严重影响可用性。28 个点赞说明这是**终端用户体验的普遍痛点**。

### 🟡 #3749 — Terminal streaming renderer corrupts output - characters doubled/truncated during streaming
- **链接**: [github/copilot-cli/issues/3749](https://github.com/github/copilot-cli/issues/3749)
- **状态**: OPEN | 👍 2 | 💬 2
- **为什么重要**: **今日新报告**的严重 bug。流式输出阶段出现字符重复、token 截断和行重复，影响思考过程和最终回复。这与 #3755 相互印证，可能是 v1.0.60 的渲染回归。

### 🟡 #3727 — Regression in v1.0.60: userPromptSubmitted hook additionalContext no longer injected into planner
- **链接**: [github/copilot-cli/issues/3727](https://github.com/github/copilot-cli/issues/3727)
- **状态**: OPEN | 👍 0 | 💬 3
- **为什么重要**: **精确的回归边界**：v1.0.59 正常，v1.0.60（2026-06-05 发布）起插件的 `userPromptSubmitted` hook 中 `additionalContext` 不再被注入到 planner。这对依赖插件扩展工作流的用户影响严重。

### 🟡 #2082 — ctrl+shift+c no longer copies to clipboard on Linux
- **链接**: [github/copilot-cli/issues/2082](https://github.com/github/copilot-cli/issues/2082)
- **状态**: OPEN | 👍 8 | 💬 21
- **为什么重要**: Linux 用户的核心交互问题。Ctrl+Shift+C 在几乎所有 Linux 终端中用于复制，但 Copilot CLI v1.0.4+ 覆盖了该快捷键。21 条评论表明社区对此分歧较大。

### 🟡 #3596 — Error loading model list: Error: Not authenticated (when resuming session)
- **链接**: [github/copilot-cli/issues/3596](https://github.com/github/copilot-cli/issues/3596)
- **状态**: OPEN | 👍 10 | 💬 5
- **为什么重要**: 恢复特定会话后 `/model` 命令报错"未认证"，但新建会话正常。这是一个**会话状态管理的隐蔽 bug**，影响工作流连续性。

### 🟡 #3756 — Third-party MCP Servers are disabled by your organization's Copilot policy
- **链接**: [github.com/github/copilot-cli/issues/3756](https://github.com/github/copilot-cli/issues/3756)
- **状态**: OPEN | 👍 0 | 💬 0
- **为什么重要**: **今日新报告**，与此前已关闭的 #1707 完全相同的症状。v1.0.59 中第三方 MCP 服务器被策略拦截，但 VS Code 中正常工作。问题似乎**复现**，可能并非真正的组织策略问题而是 CLI 端的 bug。

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **1 条 PR** 更新：

### #3737 — Jigg empire ai
- **链接**: [github/copilot-cli/pull/3737](https://github.com/github/copilot-cli/pull/3737)
- **状态**: OPEN | 作者: j2030aiNotez
- **说明**: PR 描述极为简略（"Let's try this new method"），无具体功能说明或关联 Issue。从标题判断可能是实验性提交，**暂不具备实际合并价值**，社区关注度为零。

> 📌 今日 PR 活动极为冷清，社区贡献主要集中在 Issue 反馈而非代码提交。

---

## 5. 功能需求趋势

从全部 42 条 Issue 中提炼出以下五大功能方向：

| 排名 | 方向 | 代表 Issue | 热度 |
|:---:|------|-----------|:---:|
| 1 | **模型支持与一致性** | #1703, #821, #1664, #2854, #2550, #2434 | ⭐⭐⭐⭐⭐ |
| 2 | **终端渲染与交互** | #3749, #3755, #2334, #2082, #3622, #1437 | ⭐⭐⭐⭐ |
| 3 | **MCP 服务器支持** | #3756, #1707, #2486, #3752 | ⭐⭐⭐⭐ |
| 4 | **企业/组织功能** | #223, #3756 | ⭐⭐⭐ |
| 5 | **插件与扩展性** | #3727, #3048 | ⭐⭐⭐ |

**关键发现**：
- **模型支持**长期占据社区诉求榜首，核心矛盾是 CLI 与 VS Code/Web 之间的**模型列表不一致**，尤其是 Gemini 系列
- **终端渲染**是今日新爆发的热点，v1.0.60 可能引入了流式输出的回归
- **MCP 生态**正在成为新的焦点，第三方服务器的策略拦截和快捷调用方式都是高频话题

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **模型可用性割裂**：CLI 用户无法使用已在组织中启用的全部模型（尤其是 Gemini 3.1 Pro/Flash），迫使用户在 CLI 和 VS Code 之间切换，严重降低 CLI 的独立使用价值。

2. **终端渲染质量下降**：多个独立报告指向 v1.0.60 的流式输出 bug（字符重复、截断），这直接损害了核心使用体验。

3. **MCP 策略一致性**：第三方 MCP 服务器在 CLI 中被错误拦截，而 VS Code 中正常工作，说明 CLI 端的策略检查逻辑存在 bug。

### 🟡 持续痛点

4. **企业 Token 权限缺失**：组织级 Token 缺少 "Copilot Requests" 权限，阻碍企业自动化场景落地。

5. **会话状态管理**：恢复会话后出现认证失效等状态不一致问题。

6. **插件 Hook 回归**：v1.0.60 破坏了 `userPromptSubmitted` hook 的行为，影响插件开发者生态。

### 💡 社区建议

- 优先修复 v1.0.60 的**终端渲染回归**（影响面最广）
- 建立 CLI 与 VS Code 的**模型列表同步机制**
- 对 MCP 策略拦截问题进行**根因排查**（可能是误报）
- 为企业场景提供**完整的组织 Token 权限支持**

---

*数据来源: github.com/github/copilot-cli | 统计时间: 2026-06-11 | 生成工具: OWL*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-11

---

## 1. 今日速览

今日无新版本发布，但代码库异常活跃：**24 个 PR 在过去 24 小时内更新**，其中 20 个已合入，涵盖 Windows 兼容性、Web 会话管理、MCP 启动容错等多项关键修复。Issue 方面，用户集中反馈了 **YOLO 模式失效**、**文件读取死循环** 和 **Todo 任务无法完成** 三个新 bug，均出现在最新版本中，值得开发者关注。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 重要性说明 |
|---|------|------|-----------|
| [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) | **Kimi CLI stuck reading one file in a loop** | OPEN 👍1 | 使用自定义 Anthropic 端点（mimo-v2-flash）时，CLI 反复读取同一文件陷入死循环。已有 7 条评论讨论，是跨模型兼容性的典型问题。 |
| [#2448](https://github.com/MoonshotAI/kimi-cli/issues/2448) | **YOLO 模式下仍反复请求审批** | OPEN | v0.12.0 + k2.6 模型下，`--yolo` 标志未生效，工具调用仍弹出审批提示。这是影响自动化工作流的核心体验问题。 |
| [#2447](https://github.com/MoonshotAI/kimi-cli/issues/2447) | **Final Todo item never completes** | OPEN | Agent 使用 Todo 工具规划任务时，最后一个 Todo 项永远无法标记为完成。影响任务追踪的可靠性。 |
| [#2336](https://github.com/MoonshotAI/kimi-cli/issues/2336) | **Orphan tool_calls when replaying history** | OPEN | 会话被强制终止后，`context.jsonl` 中残留孤立的 `tool_call`，导致后续每轮请求失败。已有 PR #2383 修复中。 |
| [#2343](https://github.com/MoonshotAI/kimi-cli/issues/2343) | **Deferred MCP startup failure aborts turn** | OPEN | MCP 服务器启动失败直接中断整个交互轮次。已有 PR #2355 修复中。 |
| [#2312](https://github.com/MoonshotAI/kimi-cli/issues/2312) | **Cannot open archived sessions from sidebar** | OPEN | Web UI 侧边栏无法打开已归档会话。已有 PR #2333 修复中。 |
| [#2310](https://github.com/MoonshotAI/kimi-cli/issues/2310) | **Shell process tree not terminated on timeout** | OPEN | 超时后 shell 子进程未被正确终止，导致僵尸进程。已有 PR #2327 修复中。 |
| [#2279](https://github.com/MoonshotAI/kimi-cli/issues/2279) | **Web uploads resent after restart** | OPEN | 会话重启后已上传的 Web 文件被重复发送。已有 PR #2288 修复中。 |
| [#2233](https://github.com/MoonshotAI/kimi-cli/issues/2233) | **Empty tools array breaks OpenAI-compatible APIs** | OPEN | 向 vLLM 等兼容 API 发送 `tools: []` 导致请求被拒绝。已有 PR #2235 修复中。 |
| [#2142](https://github.com/MoonshotAI/kimi-cli/issues/2142) | **Shell command headline truncated** | OPEN | 长 shell 命令在 UI 中被过度截断，丢失关键信息。已有 PR #2387 修复中。 |

---

## 4. 重要 PR 进展

### 已合入（20 个）

| # | 标题 | 修复内容 |
|---|------|---------|
| [#2355](https://github.com/MoonshotAI/kimi-cli/pull/2355) | **Continue after deferred MCP startup failures** | MCP 启动失败不再中断交互，改为日志记录并跳过不可用服务器 |
| [#2354](https://github.com/MoonshotAI/kimi-cli/pull/2354) | **Avoid shared rotating logs on Windows** | Windows 上使用 `kimi.<pid>.log` 独立日志文件，避免多进程竞争 |
| [#2334](https://github.com/MoonshotAI/kimi-cli/pull/2334) | **Sanitize surrogates before Kimi requests** | 清理 UTF-16 代理对，防止请求编码错误 |
| [#2333](https://github.com/MoonshotAI/kimi-cli/pull/2333) | **Open archived sessions from sidebar** | 修复 Web UI 归档会话无法打开的问题 |
| [#2327](https://github.com/MoonshotAI/kimi-cli/pull/2327) | **Terminate shell process trees on timeout** | 超时/取消时终止整个 shell 进程树 |
| [#2289](https://github.com/MoonshotAI/kimi-cli/pull/2289) | **Avoid Windows console font reset** | 使用 `CREATE_NO_WINDOW` 标志避免 Windows 控制台闪烁 |
| [#2288](https://github.com/MoonshotAI/kimi-cli/pull/2288) | **Avoid resending web uploads after restart** | 通过 `.sent` 标记避免重启后重复上传 |
| [#2283](https://github.com/MoonshotAI/kimi-cli/pull/2283) | **Source uv env during bash install** | 安装脚本中正确 source uv 环境变量 |
| [#2239](https://github.com/MoonshotAI/kimi-cli/pull/2239) | **Continue latest persisted session** | `--continue` 在无元数据时回退到最新会话 |
| [#2235](https://github.com/MoonshotAI/kimi-cli/pull/2235) | **Omit empty tools in OpenAI legacy requests** | 空工具列表不再序列化为 `tools: []` |

### 待合入（4 个）

| # | 标题 | 修复内容 |
|---|------|---------|
| [#2387](https://github.com/MoonshotAI/kimi-cli/pull/2387) | **Preserve shell command headline details** | 修复长 shell 命令被截断的问题 |
| [#2383](https://github.com/MoonshotAI/kimi-cli/pull/2383) | **Repair orphan tool_calls when replaying history** | 修复会话崩溃后孤立 tool_call 导致请求失败 |
| [#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386) | **Map undo wire turns to context turns** | 修复 `/undo` 和 fork 操作的索引映射问题 |

---

## 5. 功能需求趋势

从当前 Issues 和 PR 分析，社区关注方向集中在：

1. **Windows 兼容性** — 多个 PR 专门处理 Windows 特有的控制台、日志、编码问题，表明 Windows 用户群体在增长
2. **Web UI 体验** — 归档会话、AFK 模式、文件上传等 Web 功能持续优化
3. **MCP 生态集成** — MCP 启动失败容错、工具调用稳定性是高频话题
4. **会话持久化与恢复** — `--continue`、undo、fork 等会话管理功能不断完善
5. **多模型/多端点支持** — 自定义 Anthropic 端点、OpenAI 兼容 API 的适配问题频发

---

## 6. 开发者关注点

**高频痛点：**
- **YOLO 模式失效**（#2448）：自动化场景下审批提示仍弹出，影响 CI/CD 集成
- **文件读取死循环**（#640）：特定模型配置下 CLI 卡死，需手动终止
- **Todo 工具不可靠**（#2447）：任务规划功能存在缺陷，影响复杂任务执行

**稳定性诉求：**
- 会话崩溃后的恢复能力（orphan tool_call 修复）
- 超时场景下的资源清理（进程树终止）
- 跨平台一致性（Windows 用户反馈集中）

**建议关注：** 如果你使用 v0.12.0 + k2.6 模型，建议暂缓启用 YOLO 模式，等待 #2448 修复合入。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-11

---

## 1. 今日速览

OpenCode 近期密集发布了 1.17.0-1.17.3 四个版本，重点围绕新文件搜索工具 `fff`、Cohere North 模型支持、远程配置认证恢复以及 Linux/Desktop 崩溃问题进行修复。今日最活跃的方向是 **稳定性与性能优化**——大型仓库 snapshot 导致的挂起问题被迅速定位并合并修复，同时 Unicode 规范化、LM Studio URL 构造等若干工具链 Bug 引起开发者集中关注。

---

## 2. 版本发布

过去 24 小时内发布 **v1.17.3**，主要变更如下：

| 版本 | 关键内容 |
|------|----------|
| **v1.17.3** | 修复 1.17.2 Desktop 崩溃问题 |
| **v1.17.2** | 远程配置认证过期后重新引导登录；恢复子 Agent 权限配置；修复 Linux 启动器图标 |
| **v1.17.1** | References 支持 `@` 自动补全控制；修复已废弃 config key 的向后兼容；MCP prompt/resource 请求修复 |
| **v1.17.0** | 集成 `fff` 实现大型项目文件快速搜索；新增 `X-Session-Id` 粘性路由 header；Cohere North 模型接入；支持 `reasoning` 交错字段 |

---

## 3. 社区热点 Issues

| # | 标题 | 评论/👍 | 关注度分析 | 链接 |
|---|------|---------|-----------|------|
| #906 | 粘贴粘贴板图片作为附件 | 36/22 | 高频呼声，已有用户实际使用场景（Excalidraw 截图粘贴给 LLM），仅支持拖拽体验割裂 | [链接](https://github.com/anomalyco/opencode/issues/906) |
| #1764 | 输入框支持 Vim 键位 | 32/165 | 👍 数最高的 open issue，Claude Code 已支持，用户期待度高 | [链接](https://github.com/anomalyco/opencode/issues/1764) |
| #14273 | Zen 免费额度超限误报 | 27/1 | 用户账户余额$3却被判定超限，直接影响免费用户日常使用体验 | [链接](https://github.com/anomalyco/opencode/issues/14273) |
| #25038 | 长 shell 命令（Gradle 构建）成功后挂起 | 11/6 | Android 开发者高频场景，命令执行完毕但 OpenCode 未感知返回 | [链接](https://github.com/anomalyco/opencode/issues/25038) |
| #26602 | Desktop 5 分钟 Headers 超时无法覆盖 | 8/0 | 本地慢速 provider（如 Ollama）被硬编码超时阈值阻断，配置项 `timeout: false` 无效 | [链接](https://github.com/anomalyco/opencode/issues/26602) |
| #24610 / #27555 | DeepSeek V4 关闭 Thinking 模式 | 4/5 / 3/0 | 两项均指向 DeepSeek V4 思维链默认开启影响翻译等非推理任务，用户需要切换按钮 | [链接](https://github.com/anomalyco/opencode/issues/24610) |
| #31747 | fff 在 OneDrive File Provider 树上超时扫描 | 4/0 | 直接由 v1.17.0 搜索工具引入，OneDrive 使用场景受影响严重 | [链接](https://github.com/anomalyco/opencode/issues/31747) |
| #31687 | Bedrock Fable 5 reasoning block 后 CachePoint 违规 | 4/0 | 特定模型 + Amazon Bedrock 组合下的 API 合规错误，Provider 适配层需修复 | [链接](https://github.com/anomalyco/opencode/issues/31687) |
| #31797 | Chromium 级大仓库 session 启动挂起（git add --all） | 1/0 | **今日被 PR 合并修复**，大量文件 snapshot 时 git 对象重哈希导致卡死 | [链接](https://github.com/anomalyco/opencode/issues/31797) |
| #31786 | macOS Unicode NFC/NFD 编辑失败 | 1/0 | macOS 开发者特有痛点：AI 生成 NFC 文本与 NFD 存储文件不匹配导致编辑失效 | [链接](https://github.com/anomalyco/opencode/issues/31786) |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 | 链接 |
|---|------|------|------|------|
| #31798 | fix(snapshot): 复用源 git 对象避免大仓库重哈希 | ✅ 已合并 | 解决 Chromium 级仓库 session 启动挂起问题，直接复用已有 git objects | [链接](https://github.com/anomalyco/opencode/pull/31798) |
| #31799 | fix: 将 usage 错误信息透传给用户而非仅打印帮助 | OPEN | 修复 yargs `.fail()` 吞掉参数错误信息的问题，提升 CLI 调试体验 | [链接](https://github.com/anomalyco/opencode/pull/31799) |
| #12679 | feat(tui): 输入框 Vim 键位支持 | OPEN | 对应 Issue #1764，支持模式切换、hjkl 导航等，默认关闭，可通过 `tui.vim: true` 开启 | [链接](https://github.com/anomalyco/opencode/pull/12679) |
| #5422 | feat(provider): Provider 级缓存配置系统 | OPEN | 实现按 Provider 的 prompt 缓存策略，A/B 测试显示 Claude Opus 4.5 Token 消耗显著降低 | [链接](https://github.com/anomalyco/opencode/pull/5422) |
| #7302 | feat: 内置 Playwright 浏览器自动化工具 | OPEN | 对标 Claude in Chrome / Cursor 2.0，通过 `OPENCODE_ENABLE_BROWSER=true` 启用 | [链接](https://github.com/anomalyco/opencode/pull/7302) |
| #5245 | feat: OpenTelemetry 集成 | OPEN | 为 OpenCode 添加可观测性支持，便于生产环境追踪 LLM 调用链路 | [链接](https://github.com/anomalyco/opencode/pull/5245) |
| #8535 | feat(session): 双向游标分页 | OPEN | 解决大量消息场景下的性能问题，覆盖 server/TUI/app/HTTP API 全链路 | [链接](https://github.com/anomalyco/opencode/pull/8535) |
| #4865 | feat: 侧边栏子 Agent 导航 | OPEN | 在侧边栏展示子 Agent 会话，支持点击跳转和 `<leader>+Up` 返回父会话 | [链接](https://github.com/anomalyco/opencode/pull/4865) |
| #9871 | feat: /reload 热重载命令 | OPEN | 无需重启 TUI 即可热加载 opencode.jsonc、插件、MCP 配置 | [链接](https://github.com/anomalyco/opencode/pull/9871) |
| #12490 | feat(cli): plugin enable/disable 命令 | OPEN | 新增 `opencode plugin list/enable/disable` CLI 命令，无需手动编辑配置文件 | [链接](https://github.com/anomalyco/opencode/pull/12490) |

---

## 5. 功能需求趋势

从过去 24 小时更新的 Issues 中，可提炼出以下 **五大功能方向**：

| 方向 | 代表 Issue | 趋势说明 |
|------|-----------|----------|
| **多模态输入** | #906 粘贴图片、#31791 question 工具图片支持 | 用户期望从"仅拖拽"扩展到粘贴板/截图直接粘贴，多模态交互成为标配诉求 |
| **编辑器体验增强** | #1764 Vim 键位、#31786 Unicode 规范化 | 开发者对输入体验要求趋细，Vim 用户群体呼声强烈，macOS 文本兼容性需关注 |
| **模型适配与控制** | #24610/#27555 DeepSeek 思维链开关、#31687 Bedrock CachePoint、#31782 GitLab Duo 映射 | 新模型快速接入时适配层滞后，用户需要更细粒度的模型参数控制（thinking、cache、reasoning） |
| **性能与大规模项目** | #31797 大仓库挂起、#25038 长命令挂起、#26602 超时阈值 | 企业级/大型 monorepo 场景下的稳定性和性能是高频痛点 |
| **可观测性与扩展性** | #5245 OpenTelemetry、#5422 Provider 缓存配置、#7302 浏览器工具 | 社区推动 OpenCode 向生产级工具演进，可观测性和插件生态是长期方向 |

---

## 6. 开发者关注点

**高频痛点总结：**

1. **稳定性回归频繁** — v1.17 系列在引入 `fff` 搜索后接连出现 OneDrive 超时、大仓库挂起、Desktop 崩溃等问题，快速迭代修复中，建议升级前关注 Release Notes。

2. **本地/慢速 Provider 体验差** — 硬编码 5 分钟超时无法覆盖（#26602）、LM Studio URL 构造 Bug（#31766 已关闭），本地部署用户受较大影响。

3. **工具链安全边界模糊** — V1 shell 工具缺少破坏性命令拦截（#31774）、apply_patch 存在竞态覆盖风险（#31776），安全加固需求迫切。

4. **ACP 协议完善度不足** — 模型按 session 选择（#31750）、edit/write 权限请求缺少 diff 内容（#31781），ACP 客户端集成体验有待提升。

5. **配置管理手工成本高** — 插件启停、配置热重载、目录覆盖等需求同时出现在多个 PR 中，反映社区对"无需重启即可管理配置"的强烈诉求。

---

> 📌 **编辑建议**：今日最值得跟进的是 PR #31798（大仓库修复已合并）和 PR #12679（Vim 键位，对应最高👍 Issue），两者均直接回应社区最迫切的痛点。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-11

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) | 统计窗口：过去 24 小时

---

## 1. 今日速览

今日社区以 **Anthropic 流式处理优化** 和 **TUI 稳定性修复** 为主线，共处理 42 条 Issue 和 12 条 PR。核心亮点包括：Anthropic 流现在以 `message_stop` 作为逻辑结束信号（不再等待传输层 EOF），以及新增 Palantir Foundry 代理和 Amazon Bedrock Mantle 两个 provider。此外，Project Trust 功能引发社区热议，25 条评论中用户意见分歧明显。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 评论 | 要点 |
|---|------|------|------|
| 1 | **[Project Trust Feature Feedback](https://github.com/earendil-works/pi/issues/5514)** | 25 👍13 | 新上线的信任门控功能要求用户手动信任项目文件夹，引发大量讨论。部分用户认为多余，部分认为有安全价值。社区分歧明显，值得持续关注。 |
| 2 | **[Links not clickable anymore](https://github.com/earendil-works/pi/issues/4180)** | 13 | 最近的更新导致 pi-coding-agent 中 URL 和 Markdown 链接无法点击，影响信息获取体验。已因大重构关闭。 |
| 3 | **[local-llm streams terminate at 5 min](https://github.com/earendil-works/pi/issues/3715)** | 10 👍4 | 本地 OpenAI 兼容后端（如 vLLM）在约 5 分钟时因 undici 默认 `bodyTimeout` 断连，`retry.provider.timeoutMs` 无法突破该上限。影响本地 LLM 用户的长任务场景。 |
| 4 | **[pi extensions does not play nice with Bun](https://github.com/earendil-works/pi/issues/4160)** | 9 | 使用 Bun 作为运行时且无 node/npm 时，安装扩展会因找不到 `npm` 可执行文件而失败。 |
| 5 | **[pi can no longer work with Claude subscription](https://github.com/earendil-works/pi/issues/3372)** | 7 | 用户反馈无法通过 OpenAI/Codex 商业订阅正常使用 pi，影响付费用户体验。 |
| 6 | **[Sessions hang on "working" with Anthropic subscription](https://github.com/earendil-works/pi/issues/5291)** | 5 👍1 | Anthropic Enterprise 订阅用户频繁遇到会话卡在 "Working..." 状态的问题，中断/恢复有时无效。 |
| 7 | **[Split-turn compaction sends parallel summarization → 429](https://github.com/earendil-works/pi/issues/5536)** | 2 | 自动压缩时并发发送历史和摘要请求，导致单并发本地后端返回 429。**仍 OPEN**，待修复。 |
| 8 | **[GitLab Duo Anthropic streams hit ~90s cutoff](https://github.com/earendil-works/pi/issues/5611)** | 3 | GitLab Duo 的 Anthropic 流在 `message_stop` 前约 90 秒被截断，Pi 误判并重试整个 turn，可能导致重复响应。 |
| 9 | **[MiniMax M3 model switching mid-session breaks thinking](https://github.com/earendil-works/pi/issues/5541)** | 3 | 会话中途从 Claude 切换到 MiniMax M3 后，模型不再启用 thinking，`/compact` 无法修复，需新开会话。 |
| 10 | **[Cost reporting: 1-hour prompt-cache writes priced at 5-min rate](https://github.com/earendil-works/pi/issues/5603)** | 1 | Anthropic 1 小时缓存写入按 2X 计费，但 pi 统一按 1.25X（5 分钟费率）计算，导致成本低估。影响成本敏感用户的预算判断。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| 1 | **[Fix Anthropic stream finalization on message_stop](https://github.com/earendil-works/pi/pull/5594)** | ✅ Merged | Anthropic 流现在以 `message_stop` 作为逻辑结束信号，不再等待传输层 EOF，并在迭代器提前退出时取消 body reader 释放底层传输。修复 [#5592](https://github.com/earendil-works/pi/issues/5592)。 |
| 2 | **[Add Palantir Foundry LLM proxy and OAuth provider](https://github.com/earendil-works/pi/pull/5609)** | ✅ Merged | 新增 `palantir.ts` provider，支持通过 Foundry AIP 代理路由到 Anthropic、Google、xAI、OpenAI 模型，并使用 Foundry OAuth token。 |
| 3 | **[Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/5509)** | 🔲 Open | 新增 Bedrock Mantle 的 OpenAI Responses API provider，支持 GPT 5.5 和 5.4 模型。 |
| 4 | **[Honor Codex SSE header timeout setting](https://github.com/earendil-works/pi/pull/5600)** | 🔲 Open | Codex SSE 响应头等待超时从硬编码 10 秒改为尊重调用方配置的 `timeoutMs`/`httpIdleTimeoutMs`，改善慢连接下的稳定性。 |
| 5 | **[Experimental first-time setup flow](https://github.com/earendil-works/pi/pull/5587)** | ✅ Merged | 在 `PI_EXPERIMENTAL=1` 下，首次启动时显示设置向导：选择终端外观（暗/亮）、是否共享分析数据。 |
| 6 | **[Preserve clickable subscription login URLs](https://github.com/earendil-works/pi/pull/5583)** | ✅ Merged | 修复登录时 URL 因左侧 padding 空格被截断导致无法点击的问题。 |
| 7 | **[Link AWS data retention docs in Bedrock validation errors](https://github.com/earendil-works/pi/pull/5561)** | ✅ Merged | Claude Fable 5 需要启用数据保留时，错误信息现在会指向相关 AWS 文档链接。 |
| 8 | **[Wrap CJK text at character boundaries in editor](https://github.com/earendil-works/pi/pull/5585)** | ✅ Merged | 修复 TUI 编辑器中日韩文本在字符边界处换行的问题。 |
| 9 | **[Separate list items with blank lines in loose lists](https://github.com/earendil-works/pi/pull/5562)** | ✅ Merged | 修复 loose list 渲染时列表项之间缺少空行的问题，符合 CommonMark 规范。 |
| 10 | **[Use resolved apiKey as bearer-token fallback for Bedrock](https://github.com/earendil-works/pi/pull/5586)** | ✅ Merged | 修复 `bedrock-converse-stream` 忽略 `models.json` 中配置的 `apiKey` 作为 bearer token 的问题。 |

---

## 5. 功能需求趋势

从本期所有 Issue 中提炼出以下社区关注方向：

| 方向 | 代表 Issue | 趋势说明 |
|------|-----------|----------|
| **新 Provider / 模型支持** | [#5609](https://github.com/earendil-works/pi/issues/5609) Foundry、[#5509](https://github.com/earendil-works/pi/issues/5509) Bedrock Mantle、[#5541](https://github.com/earendil-works/pi/issues/5541) MiniMax M3 | 社区积极为 pi 扩展企业级代理和新兴模型支持，反映 pi 被用于更多非标准环境。 |
| **流式处理与超时** | [#3715](https://github.com/earendil-works/pi/issues/3715) 5min 断连、[#5592](https://github.com/earendil-works/pi/issues/5592) EOF 等待、[#5611](https://github.com/earendil-works/pi/issues/5611) 90s 截断、[#5600](https://github.com/earendil-works/pi/issues/5600) SSE header timeout | 流式可靠性和超时配置是高频痛点，尤其影响本地 LLM 和慢连接用户。 |
| **TUI 稳定性与渲染** | [#5604](https://github.com/earendil-works/pi/issues/5604) WorkflowEditor crash、[#5597](https://github.com/earendil-works/pi/issues/5597) Box.render crash、[#5599](https://github.com/earendil-works/pi/issues/5599) getTextOutput crash、[#5585](https://github.com/earendil-works/pi/issues/5585) CJK 换行 | TUI 的硬崩溃问题集中爆发，CJK 文本支持是持续需求。 |
| **订阅/登录体验** | [#3372](https://github.com/earendil-works/pi/issues/3372) Claude 订阅、[#5291](https://github.com/earendil-works/pi/issues/5291) 会话卡死、[#5601](https://github.com/earendil-works/pi/issues/5601) GitHub Copilot 登录失败 | 订阅认证流程的易用性需要改善，错误提示不够友好。 |
| **成本计算准确性** | [#5603](https://github.com/earendil-works/pi/issues/5603) 缓存写入计费偏差 | 随着企业用户增长，成本透明度和准确性变得重要。 |
| **扩展性 / SDK** | [#5608](https://github.com/earendil-works/pi/issues/5608) 扩展命令事件、[#5372](https://github.com/earendil-works/pi/issues/5372) 自定义 OAuth 回调、[#5025](https://github.com/earendil-works/pi/issues/5025) 多选列表组件 | 社区希望 pi 提供更丰富的扩展 API 和 UI 组件。 |

---

## 6. 开发者关注点总结

1. **流式超时是最大痛点**：多个 Issue 涉及不同场景下的流式断连（5 分钟 undici 超时、90s 代理截断、EOF 等待），建议优先梳理统一的超时配置体系。
2. **TUI 稳定性需加固**：本期出现 3+ 个导致进程崩溃的 TypeError，涉及渲染器和编辑器组件，建议加强防御性编程和边界条件测试。
3. **企业环境适配需求旺盛**：Foundry 代理、Bedrock Mantle、GitHub Copilot 订阅、Anthropic Enterprise 等 Issue 密集，说明 pi 的企业用户群体在快速增长。
4. **本地 LLM 体验待优化**：5 分钟断连、split-turn compaction 并发 429、MiniMax M3 thinking 失效等问题，影响本地部署用户的核心体验。
5. **首次使用体验改善**：PR #5587 引入实验性首次设置向导，方向正确，后续可期待更多引导流程优化。

---

*日报由 OWL 自动生成 | 如有疏漏请以 [GitHub 原数据](https://github.com/badlogic/pi-mono) 为准*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*