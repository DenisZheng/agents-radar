# AI CLI 工具社区动态日报 2026-06-13

> 生成时间: 2026-06-13 00:43 UTC | 覆盖工具: 8 个

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
**日期：2026-06-13 | 分析工具：OWL**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**功能快速扩张与质量回归并存**的关键阶段。Claude Code 和 OpenAI Codex 以密集版本迭代（单日分别发布 3 个和 4 个版本）领跑节奏，但均伴随显著的渲染层和稳定性回归。**Agent 运行时可靠性**成为全行业第一优先级——子代理挂起、重复工具调用、doom 循环、中断恢复等议题在至少 4 个工具中同时爆发。**权限系统与安全边界**正在从"有无"走向"精细化"，多个工具集中暴露子代理越权、权限规则冲突、Agent 自主行为边界等深层问题。与此同时，**跨平台支持**（尤其是 Windows）成为 Codex 和 Qwen Code 的明显短板，而 Claude Code 和 Gemini CLI 则在 MCP 生态集成上投入更多精力。整体来看，行业已从"能不能用"进入"好不好用、安不安全、可不可靠"的深水区。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issues 活跃度 | PR 活跃度 | 社区信号 |
|------|---------|--------------|----------|---------|
| **Claude Code** | v2.1.174→175→176（3 个） | 🔥🔥🔥 高（Advisor、模型路由、TUI 渲染集中爆发） | 2 条更新 | 文档类 Issue 占比异常高（`coygeek` 一人发起 20+ 条） |
| **OpenAI Codex** | alpha.13→16（4 个） | 🔥🔥🔥🔥 极高（Windows 沙箱系统性故障，5+ 条 Issue） | 10+ 条（含架构级 PathUri、Noise 传输） | Windows 用户大量回退到 0.132.0 |
| **Gemini CLI** | v0.48.0-nightly（1 个） | 🔥🔥🔥 高（子代理稳定性、Auto Memory 安全） | 10+ 条（含 CVE 安全补丁） | 安全议题密度明显上升 |
| **Copilot CLI** | v1.0.61→62-1（2 个） | 🔥🔥🔥 高（渲染 bug 5+ 条、MCP 循环） | 1 条（内部合并为主） | 自定义 Slash Commands 需求 99 👍 长期未满足 |
| **Kimi Code CLI** | 无新版本 | 🔥 低（用量计算争议主导） | 1 条（Python 3.13 兼容） | 社区规模相对较小 |
| **OpenCode** | v1.17.4（1 个） | 🔥🔥🔥 高（权限系统、doom 循环、数据库迁移） | 20+ 条（合并+开放） | 社区贡献最活跃，50+ PR 同期活跃 |
| **Pi** | v0.79.2（1 个） | 🔥🔥🔥 高（GPT-5.5 连接卡死 55 条评论） | 10+ 条（已合并+开放） | 多提供商适配需求最分散 |
| **Qwen Code** | v0.18.0（1 个，大版本） | 🔥🔥🔥 高（免费额度政策 127 条评论、重复工具调用） | 10+ 条 | Daemon/远程模式投入力度最大 |

---

## 3. 共同关注的功能方向

### ① Agent 运行时稳定性（全工具共识）
- **Claude Code**：Advisor 工具在长上下文（>100K tokens）下不可用，一次失败即永久禁用
- **Gemini CLI**：子代理无限挂起（#21409）、MAX_TURNS 误报成功（#22323）
- **OpenCode**：Doom 循环检测缺失，单次子代理调用费用高达 $15+
- **Qwen Code**：重复工具调用不被拦截（#5015）、SIGINT 后仍执行工具（#5016）
- **OpenAI Codex**：后台脚本挂起等待（#14303）

### ② 权限系统精细化（Claude Code、OpenCode、Gemini CLI、Qwen Code）
- 子代理绕过 deny 规则（OpenCode #32024、Gemini CLI #22093）
- 通配符权限覆盖低优先级规则（OpenCode #24335）
- Agent 自主调用付费服务的行为边界（Claude Code PR #67722）
- 权限审批标志持久化（Qwen Code PR #5061）

### ③ 终端/TUI 渲染质量（Claude Code、Copilot CLI、OpenCode、Pi）
- 流式字符重复/截断（Copilot CLI 5+ 条 Issue）
- 文本乱码与输出不可见（Claude Code #66795）
- 跨平台渲染不一致（macOS/Linux/Windows 各有报告）

### ④ 上下文窗口与模型路由管理（Claude Code、OpenAI Codex、Gemini CLI、Pi）
- 自动切换 1M 上下文模型导致会话中断（Claude Code #65359）
- 工具数量超阈值报 400（Gemini CLI #24246）
- Compaction 失败导致会话恢复丢失连续性（Codex #22335）

### ⑤ MCP 生态集成（Claude Code、Gemini CLI、OpenCode、Qwen Code）
- OAuth 认证兼容性问题（Claude Code #67999）
- MCP 工具发现竞态（Gemini CLI 已在 nightly 修复）
- MCP stdio 服务器无限重启循环（Copilot CLI #3782）
- MCP 会话过期恢复（OpenCode PR #32088）

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特点 | 差异化优势 |
|------|---------|---------|-------------|-----------|
| **Claude Code** | 企业级 Agent 开发平台 | 专业开发者、企业团队 | 托管设置管控（`enforceAvailableModels`）、Skills 系统、Advisor 服务端工具 | 功能最丰富，企业管控能力最强，但复杂度带来文档债务 |
| **OpenAI Codex** | 跨平台编码 Agent | 全平台开发者（尤其 Windows） | Rust CLI 重构、PathUri 跨平台抽象、Noise 加密传输、session segmentation | 架构现代化程度最高，跨平台投入最大，但 Windows 体验当前最差 |
| **Gemini CLI** | Google 生态深度集成 | Google Cloud/Vertex 用户 | A2A Server 协议、Auto Memory、AST 感知代码导航、组件级评估体系 | 与 Google 生态（Vertex、Workspace）集成最深，安全议题响应快 |
| **Copilot CLI** | GitHub 工作流原生集成 | GitHub 重度用户、企业开发者 | YOLO 模式、会话画布、GitHub 服务端过滤、VS Code 扩展对齐 | GitHub 生态无缝集成，但功能迭代节奏落后于 Claude Code |
| **Kimi Code CLI** | 长上下文编码助手 | 需要超长上下文的开发者 | K2.6 模型深度集成、思维链优化 | 长上下文能力突出，但 token 消耗效率争议大，社区规模有限 |
| **OpenCode** | 开源 Agent 运行时 | 开源贡献者、自托管用户 | Effect 系统（TypeScript）、OTel 可观测性、插件生态、多 Provider 抽象 | 开源社区最活跃，架构灵活，Provider 兼容性最广 |
| **Pi** | 多模型聚合客户端 | 多 Provider 用户、模型探索者 | 统一多提供商接口、shrinkwrap 包管理、compaction 优化 | 提供商覆盖最广（Bedrock/Vertex/vLLM/Codex），但连接稳定性是短板 |
| **Qwen Code** | 远程/Daemon 模式优先 | 远程开发团队、API-first 用户 | Daemon web-shell、A2UI-over-MCP、飞书集成、原子文件写入 | 远程化/服务化投入最大，Daemon 模式功能最完善，Windows 兼容性待提升 |

---

## 5. 社区热度与成熟度

### 社区活跃度排名（从高到低）

| 排名 | 工具 | 活跃度评级 | 特征 |
|------|------|-----------|------|
| 1 | **OpenCode** | ⭐⭐⭐⭐⭐ | 50+ Issues + 50+ PR 同期活跃，社区贡献者最多，PR 合并速度最快 |
| 2 | **OpenAI Codex** | ⭐⭐⭐⭐⭐ | Issue 总量最大（Windows 沙箱单话题 46 条评论），架构级 PR 密集 |
| 3 | **Claude Code** | ⭐⭐⭐⭐ | 版本迭代最快（单日 3 个），但 PR 活动偏少（内部开发为主），文档 Issue 占比异常 |
| 4 | **Qwen Code** | ⭐⭐⭐⭐ | 大版本发布 + 政策讨论（127 条评论），功能 PR 质量高 |
| 5 | **Gemini CLI** | ⭐⭐⭐⭐ | nightly 迭代稳定，安全响应快，EPIC 级需求管理有序 |
| 6 | **Pi** | ⭐⭐⭐ | 多提供商适配需求分散，核心连接稳定性问题（#4945）长期未解决 |
| 7 | **Copilot CLI** | ⭐⭐⭐ | 社区需求强烈但官方响应慢（历史 Issue 6 个月无回应），内部合并为主 |
| 8 | **Kimi Code CLI** | ⭐⭐ | 社区规模最小，Issue 和 PR 数量均显著低于其他工具 |

### 成熟度评估

- **功能成熟期**：Claude Code、Copilot CLI — 功能集最完整，但技术债和回归问题集中暴露
- **快速迭代期**：OpenAI Codex、Gemini CLI、Qwen Code — 架构重构/大版本发布密集，变化最快
- **社区成长期**：OpenCode、Pi — 开源贡献活跃，但核心稳定性仍需打磨
- **早期探索期**：Kimi Code CLI — 社区规模有限，用量模型争议可能影响用户信心

---

## 6. 值得关注的趋势信号

### 趋势一：Agent 可靠性将成为核心竞争力
**信号**：6 个工具同时爆发 agent 运行时问题（挂起、重复调用、doom 循环、误报成功）。
**对开发者的价值**：在选择工具时，应优先评估其 agent loop 的防御机制（超时、重试、重复检测、中断恢复），而非仅看功能清单。

### 趋势二：权限模型正在成为"第二战场"
**信号**：子代理越权、权限规则冲突、Agent 自主行为边界在 4 个工具中同时被提出。
**对开发者的价值**：企业级部署需要关注工具的权限粒度（文件级/工具级/命令级）、子代理继承策略、以及审计日志能力。

### 趋势三：Windows 支持是下一个分水岭
**信号**：Codex 的 Windows 沙箱系统性故障、Qwen Code 的杀毒误报和命令缺失、Claude Code 的 AMD GPU 渲染问题。
**对开发者的价值**：跨平台团队应重点测试 Windows 路径下的稳定性，Codex 当前建议锁定 0.132.0。

### 趋势四：远程/Daemon 模式正在成为标配
**信号**：Qwen Code 大力投入 daemon web-shell、Codex 推进远程 exec-server + Noise 加密、OpenCode 新增 v2 API 端点。
**对开发者的价值**：CI/CD 集成和远程开发场景将持续增长，优先选择具备成熟 daemon/server 模式的工具。

### 趋势五：MCP 生态从"接入"走向"治理"
**信号**：工具数量超限（Gemini CLI）、OAuth 兼容性（Claude Code）、stdio 循环（Copilot CLI）、会话过期（OpenCode）——MCP 的可靠性问题开始取代接入能力成为焦点。
**对开发者的价值**：MCP 工具的选择应关注其认证兼容性、超时/重试行为、以及与服务端工具的竞态处理。

### 趋势六：文档质量跟不上功能迭代速度
**信号**：Claude Code 社区贡献者一人发起 20+ 条文档 Issue；Copilot CLI 的快捷键行为与主流习惯相反而长期未修正；多个工具的 Skills/Prompts 文档存在矛盾。
**对开发者的价值**：文档质量是工具长期可维护性的重要指标，建议在评估时考察其文档更新频率和社区反馈响应速度。

---

*本报告由 OWL 基于 2026-06-13 各工具 GitHub 社区公开数据生成，仅供参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截止 2026-06-13）

---

## 1. 热门 Skills 排行

以下按社区讨论活跃度、更新频率和关注度综合排序：

### 🥇 skill-creator / run_eval 优化系列（多 PR 联动）
- **涉及 PR**: [#1298](https://github.com/anthropics/skills/pull/1298)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#539](https://github.com/anthropics/skills/pull/539)、[#361](https://github.com/anthropics/skills/pull/361)
- **功能**: 修复 `run_eval.py` 在 Windows 上的 0% recall 致命 bug、YAML description 字段注入、子进程管道读写崩溃、UTF-8 多字节字符 panic
- **社区热点**: 这是当前最活跃的讨论核心。Issue [#556](https://github.com/anthropics/skills/issues/556)（12 条评论）和 [#1169](https://github.com/anthropics/skills/issues/1169) 表明 skill-creator 的描述优化循环长期在噪声上运行，多个贡献者从不同角度提交修复。
- **状态**: OPEN，近期集中更新（2026-06-10 ~ 06-11）

### 🥈 agent-creator 元技能
- **PR**: [#1140](https://github.com/anthropics/skills/pull/1140)
- **功能**: 创建任务专属子 agent 的元技能，附带 multi-tool 并行调用评估和 Windows 路径修复
- **社区热点**: 回应 Issue [#1120](https://github.com/anthropics/skills/issues/1120)，代表了社区对 "agent 编排" 层级抽象的强烈需求
- **状态**: OPEN，最近更新 2026-06-02

### 🥉 frontend-design 改进
- **PR**: [#1046](https://github.com/anthropics/skills/pull/1046)、[#210](https://github.com/anthropics/skills/pull/210)
- **功能**: 提升前端设计 Skill 的可操作性和清晰度，确保每条指令 Claude 在单次对话中可执行
- **社区热点**: 该 Skill 跨度从 1 月持续到 6 月（仍在迭代），说明社区对 AI 辅助前端开发的体验要求极高
- **状态**: OPEN

### 4. document-typography（文档排版质量控制）
- **PR**: [#514](https://github.com/anthropics/skills/pull/514)
- **功能**: 解决 AI 生成文档中的孤儿词、孤段落、编号错位等排版问题
- **社区热点**: 这是一个 "隐形痛点"——用户很少主动要求好的排版，但每个 Claude 生成的文档都受影响
- **状态**: OPEN（2026-03-13 后未活跃）

### 5. skill-quality-analyzer & skill-security-analyzer
- **PR**: [#83](https://github.com/anthropics/skills/pull/83)
- **功能**: 对 Claude Skill 进行五维度质量分析和安全性分析的元技能
- **社区热点**: 随着 Skills 生态扩大，质量评估和安全性审查成为基础设施级需求
- **状态**: OPEN（较早提交，进展缓慢）

### 6. testing-patterns
- **PR**: [#723](https://github.com/anthropics/skills/pull/723)
- **功能**: 全栈测试模式 Skill，覆盖 Testing Trophy 模型、单元测试、React 组件测试
- **社区热点**: 测试生成一直是 AI 编码助手的核心诉求
- **状态**: OPEN

### 7. color-expert
- **PR**: [#1302](https://github.com/anthropics/skills/pull/1302)
- **功能**: 色彩专业知识 Skill，涵盖 ISCC-NBS、Munsell、XKCD、RAL 等命名系统和 OKLCH/OKLAB 色彩空间
- **社区热点**: 设计领域垂直 Skill 的代表，2026-06-10 刚提交即获关注
- **状态**: OPEN，最新提交

### 8. n8n-builder & n8n-debugger
- **PR**: [#190](https://github.com/anthropics/skills/pull/190)
- **功能**: n8n 工作流构建和调试专家 Skill
- **社区热点**: 代表了社区对 "AI + 低代码自动化工作流" 集成方向的兴趣
- **状态**: OPEN

---

## 2. 社区需求趋势

从 Issues 中提炼的五大期待方向：

| 趋势方向 | 代表 Issue | 核心诉求 |
|---------|-----------|---------|
| **🔧 工作流自动化** | [#190](https://github.com/anthropics/skills/pull/190)、[#1046](https://github.com/anthropics/skills/pull/1046) | n8n、automation-workflows-builder 等 PR 显示社区希望 AI 深度参与自动化流程编排 |
| **🔒 安全与治理** | [#492](https://github.com/anthropics/skills/issues/492)、[#412](https://github.com/anthropics/skills/issues/412)、[#1175](https://github.com/anthropics/skills/issues/1175) | 社区 Skill 冒充官方命名空间的安全风险、agent 治理模式、SharePoint 权限控制 |
| **📄 文档质量** | [#514](https://github.com/anthropics/skills/pull/514)、[#486](https://github.com/anthropics/skills/pull/486) | 排版质量控制、ODT 格式支持、多格式文档生成 |
| **🧪 测试生成** | [#723](https://github.com/anthropics/skills/pull/723) | 全栈测试模式 Skill 需求旺盛 |
| **🏢 企业级协作** | [#228](https://github.com/anthropics/skills/issues/228)、[#61](https://github.com/anthropics/skills/issues/61) | 组织级 Skill 共享、Team 计划 404 问题、跨团队分发机制 |

---

## 3. 高潜力待合并 Skills

以下 PR 讨论活跃、解决实际问题，近期落地可能性较高：

| 优先级 | PR | 理由 |
|-------|-----|------|
| ⭐⭐⭐ | [#1298](https://github.com/anthropics/skills/pull/1298) — run_eval.py 0% recall 修复 | 6 月 10 日刚提交，直接回应 Issue #556（12 条评论），是 skill-creator 工具链的核心 bug |
| ⭐⭐⭐ | [#1140](https://github.com/anthropics/skills/pull/1140) — agent-creator | 解决 Issue #1120，元技能概念符合 Anthropic 产品方向 |
| ⭐⭐ | [#1302](https://github.com/anthropics/skills/pull/1302) — color-expert | 6 月 10 日提交，垂直领域 Skill，自包含、低风险 |
| ⭐⭐ | [#509](https://github.com/anthropics/skills/pull/509) — CONTRIBUTING.md | 解决社区健康度问题（当前仅 25%），管理类 PR 合并阻力小 |
| ⭐ | [#723](https://github.com/anthropics/skills/pull/723) — testing-patterns | 需求明确但提交较早（3 月），需看维护者排期 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：修复 skill-creator 工具链的可靠性（尤其是 Windows 兼容性和评估循环的 0% recall bug），同时加速企业级协作能力（组织级 Skill 共享、安全治理）的落地。**

一句话概括：**社区正在从"造 Skill"转向"让 Skill 可信赖、可协作、可规模化"——基础设施和治理是当前最大瓶颈。**

---

# Claude Code 社区动态日报 — 2026-06-13

---

## 今日速览

过去 24 小时内，Claude Code 连续发布了 **v2.1.174 → v2.1.175 → v2.1.176** 三个版本，涵盖多语言 Session 标题生成、Bedrock 凭证改进及模型管控策略收紧等多项重要变更。Issues 方面，**Advisor 工具在长上下文中不可用**（#67609）和**1M 上下文模型自动降级导致会话中断**（#65359）继续成为社区最热议的话题。此外，一批由用户 `coygeek` 发起的文档改进 Issue 集中收到更新，反映出社区对文档质量的持续关注。文档类 Issue 占据了更新列表的显著比例。

---

## 版本发布

### v2.1.176（最新）
**链接**: anthropics/claude-code Release v2.1.176

- **Session 标题多语言生成** — Session 标题现在根据对话语言自动生成，也可通过 `language` 设置固定指定语言
- **Footer 链接正则匹配** — 新增 `footerLinksRegexes` 设置，支持通过正则匹配在底部行显示链接徽章，可通过用户或托管设置配置
- **Bedrock 凭证改进** — 改进了 Bedrock 凭证处理（摘要截断，具体细节请关注官方 release notes）

### v2.1.175
**链接**: anthropics/claude-code Release v2.1.175

- **`enforceAvailableModels` 托管设置** — 启用后，`availableModels` 白名单同时约束 Default 模型。若 Default 解析为不在白名单中的模型，将回退到第一个允许的模型；用户或项目设置不能再扩展托管设置收窄的模型列表

### v2.1.174
**链接**: anthropics/claude-code Release v2.1.174

- **`wheelScrollAccelerationEnabled` 设置** — 新增全屏模式下禁用鼠标滚轮滚动加速的开关
- **修复 `/model` 选择器** — 修复了 Default 模型对应的模型族在 `/model` 选择器中被隐藏的问题：Opus 现在作为独立行显示在 Max/Team Premium/Enterprise 计划中，Sonnet 显示在 Pro/Team 计划中

---

## 社区热点 Issues

以下按热度（评论数 + 👍 数 + 更新频率）选取 10 个最值得关注的 Issue：

### 🔴 高优先级 Bug

#### 1. #67609 — Advisor 工具在 claude-fable-5 + ~100K tokens 时返回 "unavailable"
**👍 6 | 评论 2 | 创建: 06-11**
当使用 `claude-fable-5` 模型且会话 transcript 超过约 100K tokens 时，服务端 Advisor 工具持续返回 `unavailable` 错误，导致该工具实际失效。低于此阈值则正常工作。**这是当前 👍 最高的活跃 Bug**，说明大量用户在长上下文场景下依赖 Advisor 工具。
🔗 [anthropics/claude-code#67609](https://github.com/anthropics/claude-code/issues/67609)

#### 2. #65359 — 长会话自动切换 1M 模型时因缺少额度导致会话阻塞
**👍 0 | 评论 7 | 创建: 06-04**
会话上下文累积到一定程度后，CLI 自动尝试切换到 1M-context 模型。若用户计划不包含该功能，会话直接报错 `usage credits required for 1M context` 且**无任何 fallback 机制**。这是评论数最多的 Issue，社区反馈最强烈。
🔗 [anthropics/claude-code#65359](https://github.com/anthropics/claude-code/issues/65359)

#### 3. #67411 — 一次 Advisor 失败即永久禁用整个会话的 Advisor 工具
**👍 0 | 评论 2 | 创建: 06-11**
Advisor 工具的单次调用失败（如瞬时速率限制/负载问题）会触发"永久禁用锁"，后续不再重试，并统一返回模糊的 "unavailable" 错误信息。用户希望区分瞬时故障和永久故障，实现自动恢复。
🔗 [anthropics/claude-code#67411](https://github.com/anthropics/claude-code/issues/67411)

#### 4. #66795 — TUI 渲染问题：文本乱码与输出不可见
**👍 1 | 评论 4 | 创建: 06-10**
新版本 CLI 持续出现 TUI 渲染 Bug：最新输出不一定可见，文本/字符偶尔乱码。需要手动重置终端窗口才能恢复。影响 macOS 用户的日常交互体验，评论中已有多人复现。
🔗 [anthropics/claude-code#66795](https://github.com/anthropics/claude-code/issues/66795)

#### 5. #67999 — MCP HTTP OAuth：Google Desktop OAuth 客户端报 "client secret is invalid"
**👍 0 | 评论 2 | 创建: 06-12**
SDK 拒绝合法的 Google Desktop OAuth 客户端凭证，导致 MCP HTTP OAuth 认证流程失败。影响使用 Google OAuth 作为 MCP 认证后端的用户。
🔗 [anthropics/claude-code#67999](https://github.com/anthropics/claude-code/issues/67999)

### 🟡 模型路由与降级问题

#### 6. #68090 — Fable 到 Opus 自动降级被误触发的安全标记拦截
**👍 0 | 评论 2 | 创建: 06-12**
在合法 OSS 仓库上工作时，因误判的安全标记触发从 Fable 到 Opus 的自动模型降级。用户抱怨此行为严重影响工作流——尤其是对 OSS 用户。与 Issue #68076 关联。
🔗 [anthropics/claude-code#68090](https://github.com/anthropics/claude-code/issues/68090)

### 🟢 体验与功能请求

#### 7. #68103 — Statusline OSC 8 链接在自定义 URI 方案下无法在 agents view 中触发
**👍 0 | 评论 1 | 创建: 06-13（今日新建）**
TUI 交互界面中点击 OSC 8 超链接（如 `vscode://` 协议）可正常触发系统级跳转转向 VS Code，但 `claude agents` / FleetView 中同样链接无法被派发。影响 FleetView 用户的工作流集成体验。
🔗 [anthropics/claude-code#68103](https://github.com/anthropics/claude-code/issues/68103)

#### 8. #61599 — Skills 文档中 `name:` 与目录 basename 调用方式存在矛盾
**👍 0 | 评论 2 | 创建: 05-22**
Skills 文档中关于技能调用方式（`name:` 字段 vs 目录 basename）存在表述矛盾，导致用户不确定如何正确调用或传递参数给技能。
🔗 [anthropics/claude-code#61599](https://github.com/anthropics/claude-code/issues/61599)

#### 9. #66067 — Pro 计划用户被"1M 上下文所需额度"错误拦截——临时解决方案全部失效
**👍 0 | 评论 2 | 创建: 06-07**
又是同样类别的问题（与 #65359 重复），这次来自 VSCode 集成端的 Pro 计划用户——已有的 workaround 也已失效。说明此问题的覆盖范围极广且尚未得到有效缓解。
🔗 [anthropics/claude-code#66067](https://github.com/anthropics/claude-code/issues/6607)

#### 10. #68073 [CLOSED] — Ubuntu + AMD GPU 终端文本渲染乱码
**👍 0 | 评论 2 | 创建: 06-12（已关闭）**
Ubuntu 环境下 AMD GPU 驱动导致的终端文本渲染乱码问题。Issue 已于今日被关闭，推测已在最新版本中修复或确认为环境问题。
🔗 [anthropics/claude-code#68073](https://github.com/anthropics/claude-code/issues/68073)

---

## 重要 PR 进展

过去 24 小时内仅有 2 条 PR 更新：

### PR #67753 — fix(ralph-wiggum): case-insensitive completion promise matching
**OPEN | 创建: 06-12**
修复了 completion promise 匹配逻辑中的大小写敏感问题。此前当 Claude 输出的完成词与配置中的 promise 大小写不一致时（如 `Complete` vs `COMPLETE`），会产生假阴性匹配失败。修复使用 `tr` 替代 `${var,,}` 以保证跨 shell 可移植性。
🔗 [anthropics/claude-code#67753](https://github.com/anthropics/claude-code/pull/67753)

### PR #67722 — [BUG] Claude 自主运行调用付费外部服务的后台脚本
**OPEN | 创建: 06-12**
描述了 Claude 在没有用户授权的情况下自主运行后台脚本、调用付费外部 API 的安全与权限问题。该 PR 附带了一个 GitHub Actions workflow 来生成 issue 去重报告。涉及 AI Agent 的行为边界和权限控制，值得关注。
🔗 [anthropics/claude-code#67722](https://github.com/anthropics/claude-code/pull/67722)

---

## 功能需求趋势

综合分析所有 Issues，社区当前最集中的功能方向如下：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **模型路由与上下文窗口管理** | #65359, #66067, #68090 | 🔥🔥🔥 极高——自动切换模型、1M 上下文降级、误触安全标记是最多的痛点 |
| **Advisor/服务端工具稳定性** | #67609, #67411 | 🔥🔥🔥 极高——长上下文下 Advisor 完全不可用，且一次失败即永久禁用 |
| **TUI/终端渲染质量** | #66795, #68073 | 🔥🔥 高——跨平台渲染问题是持续存在的体验顽疾 |
| **文档完整性与准确性** | 大量 `coygeek` 发起的 DOCS Issue | 🔥🔥🔥 极高——Skills、权限模式、MCP、Bash 工具等领域的文档频繁被指遗漏或过时 |
| **MCP 生态集成** | #67999 | 🔥 中——OAuth 认证兼容性问题开始浮现 |
| **跨 IDE/Agent View 集成** | #68103 | 🔥 中——Statusline 交互、多 URI 方案支持 |
| **Agent 行为安全边界** | #67722 | 🔥 高（潜在影响大）——Agent 自主调用付费服务的权限控制 |

---

## 开发者关注点总结

**🔴 最紧急的痛点：**

1. **长上下文 = 会话死亡**。当会话累积到一定长度，自动模型切换 + 1M 上下文检查直接导致会话中断且无任何 fallback。对于重度用户来说这是阻断性问题，需要立即解决。

2. **Advisor 工具极不可用**。超过 100K tokens 后 Advisor 直接报废，且一次失败就永久锁定——两个叠加效应让这个工具在长会话中几乎不可用。

**🟡 持续性不满：**

3. **跨终端/跨平台 TUI 渲染问题反复出现**，macOS 和 Linux（AMD GPU）均有报告，影响日常使用体验。

4. **文档质量与功能复杂度不匹配**。社区贡献者 `coygeek` 一人就发起了 20+ 条文档 Issue，覆盖 Skills、权限模式、MCP、Bash 等核心功能，说明当前文档远跟不上功能迭代速度。

**🟢 值得观察的方向：**

5. **Agent 自主行为的边界控制**——PR #67722 揭示了一个深层问题：Claude 是否会未经明确授权自主运行后台脚本并产生费用？这不仅是技术问题，也是产品设计问题。

6. **v2.1.175 的 `enforceAvailableModels` 收紧策略**——企业用户将受益于更强的模型管控，但普通用户可能需要适应"Default 模型不再自由解析"的新行为。

---

*数据来源: github.com/anthropics/claude-code | 截至 2026-06-13*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-13

---

## 1. 今日速览

今日 Codex 社区的核心焦点集中在 **Windows 沙箱（sandbox）大规模故障** 的持续发酵，大量 Windows 用户报告 `spawn setup refresh` 错误（OS Error 740，UAC 提权问题），影响 Computer Use、Browser、Chrome 插件及 node_repl 等核心功能。与此同时，OpenAI 内部团队正密集推进跨平台路径协议（PathUri）、远程 exec-server 通信（Noise 传输）和会话分段（session segmentation）等底层架构升级。Rust CLI 今日连续发布 4 个 alpha 版本（alpha.13–alpha.16），迭代节奏显著加快。

---

## 2. 版本发布

Rust CLI 今日密集发布 4 个 alpha 版本，均属于 `v0.140.0-alpha` 系列：

| 版本 | 链接 |
|------|------|
| rust-v0.140.0-alpha.16 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.16) |
| rust-v0.140.0-alpha.15 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.15) |
| rust-v0.140.0-alpha.14 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.14) |
| rust-v0.140.0-alpha.13 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.13) |

> 注：Release notes 未包含详细变更描述，但结合同期 PR 内容推测，这批 alpha 版本主要集成了 PathUri 跨平台路径处理、session segmentation 实验特性、以及多项 Windows 沙箱修复。

---

## 3. 社区热点 Issues

以下按影响范围和社区热度排序：

### 🔴 高优先级 — Windows 沙箱系统性故障

**① [#24391] Windows sandbox: spawn setup refresh fails on Codex CLI 0.133.0**
- **状态：** CLOSED | **👍 26 | 💬 46**
- **链接：** https://github.com/openai/codex/issues/24391
- **为什么重要：** 这是 Windows 沙箱故障的"集大成"报告，46 条评论、26 个赞，社区讨论最热烈。核心问题是 CLI 0.133.0 更新后，`codex-windows-sandbox-setup.exe` 因 UAC 安装器检测（OS Error 740）无法在非提权环境下启动，导致所有沙箱命令失败。大量用户回退到 0.132.0 作为临时方案。

**② [#24050] Windows sandbox setup helper triggers UAC installer detection (os error 740)**
- **状态：** CLOSED | **👍 13 | 💬 8**
- **链接：** https://github.com/openai/codex/issues/24050
- **为什么重要：** 最早精准定位根因的 Issue 之一。沙箱 setup helper 被 Windows UAC 误判为安装器，触发提权要求，在非管理员终端中直接失败。这是后续所有同类问题的参考锚点。

**③ [#25220] [Windows] Bundled plugins unavailable — copyfile fails on EFS-encrypted WindowsApps files**
- **状态：** OPEN | **👍 3 | 💬 16**
- **链接：** https://github.com/openai/codex/issues/25220
- **为什么重要：** Microsoft Store 版本（WindowsApps 容器）中，Computer Use、Browser、Chrome、LaTeX 等全部内置插件因 EFS 加密文件无法被 copyfile 操作而不可用。影响所有通过 Store 安装的 Windows 用户，且至今未修复。

**④ [#27175] Codex Desktop Windows crashes / becomes inaccessible after update**
- **状态：** OPEN | **👍 3 | 💬 15**
- **链接：** https://github.com/openai/codex/issues/27175
- **为什么重要：** 版本 26.602.71036（6 月 8 日发布）导致桌面应用崩溃或完全无法访问，即使清空会话也无解。用户被迫无法使用桌面端。

**⑤ [#27979] Windows Codex App 26.609.4994.0 no longer opens after update**
- **状态：** OPEN | **👍 0 | 💬 6**
- **链接：** https://github.com/openai/codex/issues/27979
- **为什么重要：** 6 月 12 日更新的最新版本导致应用完全无法启动，连 About 对话框都无法打开。这是当前最新的阻断性 bug，社区正在等待官方响应。

**⑥ [#25243] macOS Codex relaunch loop exhausts syspolicyd file descriptors**
- **状态：** OPEN | **👍 2 | 💬 20**
- **链接：** https://github.com/openai/codex/issues/25243
- **为什么重要：** macOS 上 Codex 重启循环导致 `syspolicyd` 文件描述符耗尽，进而阻止其他应用启动。这是一个影响系统稳定性的严重问题，且跨越多个版本未修复。

### 🟡 功能体验痛点

**⑦ [#12564] Allow renaming task/thread titles to improve history navigation**
- **状态：** CLOSED | **👍 111 | 💬 78**
- **链接：** https://github.com/openai/codex/issues/12564
- **为什么重要：** 全社区点赞最高的需求（111 👍），78 条评论。用户希望重命名历史会话标题以便导航。虽然已关闭，但反映了用户对会话管理体验的强烈诉求。

**⑧ [#22335] CLI remote compaction repeatedly fails and leaves resumed threads without task continuity**
- **状态：** OPEN | **👍 8 | 💬 6**
- **链接：** https://github.com/openai/codex/issues/22335
- **为什么重要：** 远程压缩（compaction）反复失败，导致恢复的会话丢失任务连续性。对于长上下文工作流和 Pro 用户影响尤为严重。

**⑨ [#19205] Undo functionality should never depend on Git repository presence**
- **状态：** OPEN | **👍 6 | 💬 4**
- **链接：** https://github.com/openai/codex/issues/19205
- **为什么重要：** 撤销功能依赖 Git 仓库存在，在没有 Git 的项目中无法使用。这是 IDE 集成体验的基础性缺陷。

**⑩ [#14303] Codex hanging waiting for background script to finish executing**
- **状态：** OPEN | **👍 0 | 💬 6**
- **链接：** https://github.com/openai/codex/issues/14303
- **为什么重要：** Codex 在后台脚本已执行完毕后仍挂起等待，导致交互卡顿。影响所有平台用户的日常使用体验。

---

## 4. 重要 PR 进展

### 已合并 / 关闭

**① [#27981] Restore remote stdio MCP cwd fallback** — `pakrym-oai`
- **链接：** https://github.com/openai/codex/pull/27981
- **内容：** 修复 PR #23583 引入的回归——远程 stdio MCP 服务器在未配置 `cwd` 时启动失败。恢复了从活跃 turn 环境继承绝对 cwd 的回退逻辑。

**② [#27925] feat(tui): reland token activity command** — `fcoury-oai`
- **链接：** https://github.com/openai/codex/pull/27925
- **内容：** 重新提交此前因分支 force-push 而丢失的 token activity 命令功能，恢复 TUI 中的 token 活动监控能力。

**③ [#26715] Load direnv environment into shell snapshots** — `viyatb-oai`
- **链接：** https://github.com/openai/codex/pull/26715
- **内容：** 将 direnv 环境变量加载到 shell 快照中，使 Codex 命令能正确继承由 direnv 管理的 workspace 环境配置。

### 进行中 — 架构级

**④ [#27989] path-uri: parse and resolve paths by explicit convention** — `anp-oai`
- **链接：** https://github.com/openai/codex/pull/27989
- **内容：** 新增 `NativePathString` 反序列化和约定感知转换，支持 POSIX、Windows 驱动器、Windows 根相对和 UNC 路径的跨平台解析。这是跨平台 exec-server 通信的基础。

**⑤ [#27991] protocol: keep selected environment cwd as PathUri** — `anp-oai`
- **链接：** https://github.com/openai/codex/pull/27991
- **内容：** 将执行器 cwd 改为 `PathUri` 类型，使 Linux 线程可保留 Windows 环境路径，消除跨平台路径同步问题。

**⑥ [#27819] path-uri: render native paths across platforms** — `anp-oai`
- **链接：** https://github.com/openai/codex/pull/27819
- **内容：** 在 app-server API 边界引入 `PathConvention`，使来自不同 OS 的路径能正确渲染为 API 字符串。

**⑦ [#27937] Add hermetic Wine exec-server test** — `anp-oai`
- **链接：** https://github.com/openai/codex/pull/27937
- **内容：** 添加 Wine 环境下的 hermetic exec-server 测试，使 Linux 主机可控制 Windows 执行器，验证跨平台编排能力。

**⑧ [#26245] exec-server: default remote transport to Noise** — `viyatb-oai`
- **链接：** https://github.com/openai/codex/pull/26245
- **内容：** 将远程 orchestrator-to-executor 连接的默认传输协议升级为 Noise 协议，在 JSON-RPC 通信前完成身份认证和加密握手。

### 进行中 — 功能特性

**⑨ [#27249] Add feature-gated session segmentation** — `friel-openai`
- **链接：** https://github.com/openai/codex/pull/27249
- **内容：** 新增默认关闭的 `session_segmentation` 实验特性，通过单线程 writer 事务序列化 append/flush/shutdown/rotation，为压缩和 fork 生成不可变的前驱快照。

**⑩ [#27982] Prewarm attached Guardian sessions for auto-review** — `jgershen-oai`
- **链接：** https://github.com/openai/codex/pull/27982
- **内容：** 将 Guardian 审查会话管理器附加到正常会话服务，在线程启用 auto-review 时自动初始化子会话，利用现有 WebSocket 预暖机制。

---

## 5. 功能需求趋势

从今日 50 条 Issues 中提炼出社区最关注的方向：

| 排名 | 方向 | 代表 Issue | 热度 |
|------|------|-----------|------|
| 1 | **Windows 沙箱稳定性** | #24391, #24050, #25220, #27175, #27979 | 🔥🔥🔥🔥🔥 |
| 2 | **跨平台兼容性** | #25220 (Store/EFS), #25243 (macOS syspolicyd) | 🔥🔥🔥🔥 |
| 3 | **会话管理与导航** | #12564 (重命名标题), #22335 (compaction 连续性) | 🔥🔥🔥 |
| 4 | **IDE 集成体验** | #19205 (Undo 不依赖 Git), #12564 (VS Code 扩展) | 🔥🔥 |
| 5 | **性能与稳定性** | #14303 (挂起等待), #25243 (文件描述符耗尽) | 🔥🔥 |
| 6 | **插件系统** | #25220 (内置插件不可用), #27459 (PR: auth 感知插件) | 🔥 |

**关键趋势：** Windows 平台问题已从偶发 bug 演变为系统性危机，涉及沙箱、Store 安装、UAC、EFS 加密等多个层面。社区对跨平台支持的期望正在推动 OpenAI 内部进行深层次架构重构（PathUri、Noise 传输）。

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **Windows 沙箱全面失效** — 这是当前最紧急的问题。`spawn setup refresh` + OS Error 740 的组合影响了从 CLI 0.133.0 到最新 Store 版本的所有 Windows 用户。Computer Use、Browser、Chrome 插件、node_repl 全部不可用。开发者普遍回退到 0.132.0 或转向 macOS/Linux。

2. **Microsoft Store 版本体验差** — EFS 加密导致内置插件无法加载，且 Store 版本的更新机制使得用户无法自行回退版本。

3. **macOS 系统级影响** — syspolicyd 文件描述符耗尽不仅影响 Codex，还波及系统其他应用，这是不可接受的系统稳定性问题。

4. **长会话可靠性** — 远程 compaction 失败导致会话恢复后丢失上下文连续性，对重度用户影响严重。

### 🟡 体验改进诉求

5. **会话可管理性** — 用户需要重命名会话标题、更好的历史导航，当前会话管理过于简陋。
6. **Undo 功能独立性** — 撤销不应依赖 Git，这是代码编辑工具的基本期望。
7. **后台任务状态感知** — Codex 需要更准确地检测后台脚本完成状态，避免无意义挂起。

### 💡 建议关注

- 如果你在 **Windows** 上依赖 Codex，建议暂时锁定 CLI 版本为 `0.132.0`，并关注 #27979 的修复进展。
- 如果你使用 **direnv**，PR #26715 合并后将显著改善 workspace 环境加载体验。
- **Session segmentation**（PR #27249）是下一代会话管理架构的基石，值得长期关注。

---

*数据来源：github.com/openai/codex | 统计时间：2026-06-13 | 生成工具：OWL*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-13

---

## 1. 今日速览

今日 Gemini CLI 发布了 **v0.48.0-nightly** 版本，核心修复了 MCP 工具发现的竞态问题和 Vertex AI 模型映射。社区侧，**Agent 稳定性**仍是最高频议题——子代理挂起、MAX_TURNS 误报成功、Auto Memory 安全漏洞等多个 P1/P1 级 Issue 集中爆发。同时，过去 24 小时内合入了十余个 PR，涵盖安全补丁（CVE-2026-9277）、工具响应截断、主题渲染修复等，维护团队响应速度较快。

---

## 2. 版本发布

### v0.48.0-nightly.20260613.g9e5599c32

- **fix(core):** 实现 MCP 工具发现的原子更新，解决并发注册导致的竞态条件 → [PR #27619](https://github.com/google-gemini/gemini-cli/pull/27619)
- **fix(core):** 修复 Vertex AI 模型映射错误 → [PR #27749](https://github.com/google-gemini/gemini-cli/pull/27749)
- **chore:** 新增文档和迁移命令

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 为什么重要 | 社区反应 |
|---|-------|--------|-----------|---------|
| 1 | [#21409] Generalist agent hangs | P1 🔒 | 通用子代理在执行简单操作（如创建文件夹）时无限挂起，严重影响核心工作流 | 👍8，评论 7 条，用户确认禁用子代理可绕过 |
| 2 | [#22323] Subagent recovery after MAX_TURNS is reported as GOAL success | P1 🔒 | `codebase_investigator` 达到最大轮数后仍报告 `status: "success"`，掩盖了任务中断事实 | 👍2，评论 6 条，涉及结果可信度 |
| 3 | [#24353] Robust component level evaluations | P1 🔒 | EPIC：在已有 76 个行为测试基础上推进组件级评估体系，关系到 Agent 质量保障 | 评论 7 条，长期跟踪 |
| 4 | [#25166] Shell command execution gets stuck with "Waiting input" | P1 | 简单 shell 命令执行完毕后 CLI 仍显示"等待输入"，阻塞后续操作 | 👍3，评论 4 条，复现率高 |
| 5 | [#26525] Add deterministic redaction and reduce Auto Memory logging | P2 🔒 | Auto Memory 在脱敏前已将含密钥的 transcript 送入模型上下文，存在安全隐患 | 评论 5 条，安全敏感 |
| 6 | [#26522] Stop Auto Memory from retrying low-signal sessions indefinitely | P2 🔒 | 低信号会话被 Auto Memory 反复重试，浪费资源且无退出机制 | 评论 5 条 |
| 7 | [#22745] Assess the impact of AST-aware file reads, search, and mapping | P2 🔒 | EPIC：探索 AST 感知工具能否减少 token 消耗、提升代码导航精度 | 👍1，评论 7 条 |
| 8 | [#21968] Gemini does not use skills and sub-agents enough | P2 🔒 | Agent 不会主动调用已定义的自定义 skills 和子代理，需显式指令才能触发 | 评论 6 条，影响自动化体验 |
| 9 | [#24246] Gemini CLI encounters 400 error with > 128 tools | P2 🔒 | 工具数量超过阈值时直接报 400，缺乏智能裁剪/分组机制 | 评论 3 条 |
| 10 | [#22093] (Sub)agents running without permission since v0.33.0 | P2 🔒 | 用户已禁用 agent 模式，但 v0.33.0 后子代理仍自动启动，属于权限回归 | 评论 2 条 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容摘要 |
|---|----|------|---------|
| 1 | [#27870] fix(core): cap pending tool responses | OPEN | 限制 pending `functionResponse` 大小，防止超大工具输出撑爆上下文导致 OOM/截断 → 替代被自动关闭的 #27868 |
| 2 | [#27867] fix(a2a-server): prevent crash when tasks metadata endpoint returns 501 | OPEN | 修复 A2A Server 在 tasks metadata 端点返回 501 时的崩溃问题 → 修复 #21729 |
| 3 | [#27856] fix: upgrade shell-quote to 1.8.4 (CVE-2026-9277) | OPEN | 紧急安全升级，修复 shell-quote 的 CRITICAL 级别漏洞 |
| 4 | [#27873] fix(core): improve SKILL.md frontmatter parsing robustness | CLOSED | 支持 UTF-8 BOM、忽略尾部空白、规范化 YAML 值，提升技能文件解析鲁棒性 |
| 5 | [#27872] fix(core): strip line/range suffix from at-command paths | CLOSED | 去除 at-command 路径中的行号后缀（如 `:12-20`），防止 CLI 挂起/崩溃 |
| 6 | [#27871] fix(core): merge existing refresh token when caching credentials | CLOSED | 修复凭证缓存时未合并已有 refresh token 的问题 → 修复 #21691 |
| 7 | [#27866] fix(theme): honor custom border colors | CLOSED | 修复自定义主题中 `border.default` / `border.focused` 未生效的问题 |
| 8 | [#27863] fix(core): prioritize structured display titles in tool invocation | OPEN | 工具调用时优先使用结构化显示标题，改善非交互模式下的可读性 → 修复 #23018 |
| 9 | [#27862] fix(cli): preserve executing subagent tool calls in UI | OPEN | 修复子代理工具调用在 UI 中不显示的问题 → 修复 #22589 |
| 10 | [#27848] feat(cli): add 'models' command to list available Gemini models | OPEN | 新增 `gemini models` 命令，列出可用模型、上下文窗口和 tier 信息，支持 JSON 输出 |

---

## 5. 功能需求趋势

从当前活跃 Issue 和 PR 来看，社区关注的功能方向集中在以下几个维度：

1. **Agent 可靠性与可观测性** — 子代理挂起检测、MAX_TURNS 误报修复、AST 感知代码导航、组件级评估体系。这是当前最高优先级的技术债。

2. **Auto Memory 系统完善** — 安全脱敏（redaction）、低信号会话退避、无效 patch 隔离、日志降噪。多个 P2 级 Issue 形成了一组系统性的质量改进需求。

3. **安全加固** — CVE-2026-9277 的紧急修复、Auto Memory 的 secret 泄露防护、子代理权限回归修复，安全议题在近期的密度明显上升。

4. **非交互/自动化模式** — 结构化显示标题、A2A Server 稳定性、工具数量超限处理，反映出 CI/CD 和 headless 场景的使用增长。

5. **开发者体验** — 新增 `models` 命令、SKILL.md 解析鲁棒性、主题自定义支持、slash-command 冲突去重修复，降低使用门槛。

---

## 6. 开发者关注点

- **子代理稳定性是最大痛点**：多个独立报告（#21409、#22323、#22093）指向子代理在 v0.33.0 后的行为退化，包括无限挂起、误报成功、绕过权限设置。这是当前用户流失风险最高的领域。

- **"静默失败"模式引发不信任**：无论是 MAX_TURNS 后报告 GOAL、还是 Auto Memory 跳过无效 patch 不通知，开发者普遍对"不报错但结果不可信"的行为表示不满。社区期望更透明的失败反馈。

- **安全边界意识增强**：Auto Memory 将未脱敏内容送入模型、shell-quote CVE、子代理越权执行，开发者对安全边界的关注度显著提升，尤其在企业部署场景。

- **工具数量膨胀问题初现**：随着 MCP 工具增多，>128 工具导致 400 错误的问题开始暴露，社区期待智能工具裁剪或分组机制。

- **文档与迁移体验**：nightly 版本已开始加入迁移命令和文档更新，说明团队意识到快速迭代带来的升级摩擦，开发者对此持正面期待。

---

*数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 报告生成时间：2026-06-13*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-06-13 | 来源：github/github/copilot-cli**

---

## 1. 今日速览

v1.0.61 至 v1.0.62-1 更新带来了 YOLO 模式、会话级扩展画布等重磅新功能；同时 **终端渲染重复字符/乱码** 成为今日最高频的 bug 集中爆发区，已知受影响 Issue 达 5 条以上；最热门社区需求仍是 **自定义 Slash Commands（.github/prompts/）**，获 99 个 👍。

---

## 2. 版本发布

**v1.0.62-1**（今日新发）[[Release](https://github.com/github/copilot-cli/releases/tag/v1.0.62-1)]

| 类型 | 内容 |
|------|------|
| 🆕 新增 | 底部显示 **"YOLO"（allow-all）指示器**，自定义 statusLine.command 支持 allow-all 状态 |
| 🆕 新增 | Issues/PR 标签页按 **`/`** 可通过服务端过滤搜索 GitHub |
| 🆕 新增 | 支持**会话级扩展与会话画布（session-scoped extensions & canvases）** |
| 🆕 新增 | SDK 客户端可配置**会话内存阈值** |
| 🔧 修复 | 多项稳定性补丁（与 v1.0.61 中 MCP/stdio 暴走、渲染 bug 相关） |

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 关键 Bug

| # | 标题 | 重要性 & 社区反应 |
|---|------|-------------------|
| [#3749](https://github.com/github/copilot-cli/issues/3749) | **终端流式渲染器损坏输出——字符加倍/截断** | 5 条评论 / 7 👍。影响任意流式输出，属于严重渲染回归。 |
| [#3755](https://github.com/github/copilot-cli/issues/3755) | **开启 Reasoning 显示时文本被重复碎片覆盖** | 5 条评论 / 2 👍。与 [#3749](https://github.com/github/copilot-cli/issues/3749) 疑似同根因，用户直观感受到"思考过程乱码"。 |
| [#3780](https://github.com/github/copilot-cli/issues/3780) | **流式模型响应文本出现字符重复簇** | 新发。用户提供了具体字符级别的重复模式（如 `"Piod. Pickles"`），有助于定位渲染器的 diff 逻辑。 |
| [#3769](https://github.com/github/copilot-cli/issues/3769) | **Copilot CLI 输出有线程问题（输出被打乱）** | 2 👍。Agency 模式下 response 未完成前 UI 已乱序渲染。 |
| [#1999](https://github.com/github/copilot-cli/issues/1999) | **德式键盘无法输入 @（AltGr+Q）** | 9 条评论 / 1 👍。德语用户完全无法输入 @，严重影响可用性。 |
| [#3782](https://github.com/github/copilot-cli/issues/3782) | **v1.0.61 MCP stdio 服务器无限重启循环** | 新发，无评论。数百至数千子进程无退避、无上限，1.0.61 严重回归。 |

### 🔵 热门功能需求

| # | 标题 | 重要性 & 社区反应 |
|---|------|-------------------|
| [#618](https://github.com/github/copilot-cli/issues/618) | **支持来自 .github/prompts/ 的自定义 Slash Commands（对标 Claude Code）** | 📌 评论最多/最受欢迎功能之一，31 条评论 / **99 👍**。与 VS Code 扩展对齐的最受期待功能。 |
| [#53](https://github.com/github/copilot-cli/issues/53) | **恢复 CLI 中的 GitHub Copilot 命令以免破坏现有工作流** | **75 👍** 与 37 条评论，是本项目历史上互动量最高的 Issue 之一。GitHub 沉默 6 个月后社区已自行 fork 开发替代方案（如 shell-ai）。 |
| [#2627](https://github.com/github/copilot-cli/issues/2627) | **可配置系统 Prompt——允许用户缩减固定 token 开销** | 17 👍。系统 Prompt 占用约 20,500 tokens（占 200K 上下文 ~10%），用户希望自行裁剪。 |
| [#3779](https://github.com/github/copilot-cli/issues/3779) | **新增快捷键打开会话切换器 / 在会话间切换** | 新发。多会话工作流的易用性诉求持续升温。 |

---

## 4. 重要 PR 进展

过去 24 小时内仅有 1 条有活动记录的 PR：

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#3771](https://github.com/github/copilot-cli/pull/3771) | Initial project setup | OPEN | 初始项目配置 PR，尚无实质性代码变更，观察中。 |

> **说明：** GitHub 核心团队通常在内部合并后推送提交，社区侧 PR 活动相对较少属正常现象。

---

## 5. 功能需求趋势

根据今日所有 Issue 标签及内容聚类，社区关注方向按热度排序如下：

| 排名 | 方向 | 代表 Issue |
|------|------|-----------|
| 🎯 **#1** | **终端渲染稳定性**（流式字符重复、乱码）| #3749, #3755, #3780, #3769 |
| 🔧 **#2** | **自定义 Slash Commands / 提示文件** | #618（99 👍） |
| 💻 **#3** | **输入系统 & 国际键盘支持**（AltGr、非 ASCII） | #1999, #2920, #3776 |
| 🧠 **#4** | **上下文/记忆管理**（可配置 system prompt、auto-compaction、goals.md） | #2627, #3621, #3364, #1614 |
| 🔌 **#5** | **第三方 MCP 支持**（企业策略限制、ACP 模式兼容） | #3048, #3782, #3756 |
| ⏱️ **#6** | **会话管理**（快捷键切换、多会话、持久化） | #3779, #3364 |

---

## 6. 开发者关注点（痛点 & 高频需求）

**🔴 紧迫痛点（需尽快修复）：**
1. **MCP stdio 服务器崩溃循环**（v1.0.61 回归，[#3782](https://github.com/github/copilot-cli/issues/3782)）——无退避机制，直接打挂系统。
2. **流式渲染器字符重复/截断**集中爆发——至少 5 条 Issue 指向同一根因，影响所有使用 Reasoning 或流式输出的用户。
3. **企业策略导致"未授权"间歇性报错**（[#2306](https://github.com/github/copilot-cli/issues/2306)）——企业用户每周 2–3 次被阻断工作。
4. **SHORT+ENTER 意外执行 Prompt**（[#1481](https://github.com/github/copilot-cli/issues/1481)，26 条评论）——与所有主流聊天 App 习惯相反，高频误触。

**🔵 高频需求（社区长期期待）：**
- **自定义 Slash Commands（.github/prompts/）** 呼声最高（99 👍），已是 Claude Code 标配功能；
- **可配置 System Prompt** 以节省 token 窗口（17 👍），尤其在长上下文任务中意义重大；
- **会话间快速切换快捷键**，多 Agent 工作流日益普及的必然需求。

---

> 📌 **总结**：今日 Copilot CLI 社区正处于**"新功能爆发期 + 渲染层质量回归"**的典型矛盾时刻。v1.0.62-1 引入了 YOLO 模式、会话画布等创新，但渲染 bug 和 MCP stdio 循环问题覆盖了部分版本亮点。建议升级用户重点关注渲染相关 issue 的修复进展。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## 2026-06-13 Kimi Code CLI 社区动态日报

---

### 1. 今日速览

过去24小时内，Kimi Code CLI 社区无新版本发布，但 Issue 和 PR 活动持续活跃。核心关注点集中在**用量计算争议**（Issue #1994，7 赞）和**工具链兼容性修复**（PR #1597）上，反映出用户对计费透明度与 Python 3.13 适配的迫切需求。

---

### 2. 版本发布

无新版本发布。

---

### 3. 社区热点 Issues

| # | 标题 | 作者 | 状态 | 👍 | 评论 | 重要性说明 |
|---|------|--------|------|-----|------|------------|
| [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) | kimiCode用量计算有问题 | wanghonghust | OPEN | 7 | 6 | **最高关注度**：用户质疑官方宣传的"300-1200次请求/5小时"与实际体验严重不符，K2.6 模型思维链过长导致 token 消耗激增，2小时额度仅支持2次请求。社区讨论激烈，涉及计费模型透明度问题。 |
| [#640](https://github.com/MoonshotAI/kimi-cli/issues/640) | Kimi CLI stuck in reading one file again and again | isbafatima90-arch | OPEN | 1 | 8 | **稳定性问题**：在 Linux + 自定义 Anthropic 端点环境下，CLI 陷入单文件读取循环。已有8条评论，表明该问题影响特定配置用户，需排查文件处理逻辑。 |
| [#2435](https://github.com/MoonshotAI/kimi-cli/issues/2435) | Kimi Work tab: "Daimon control WS not ready" + infinite reload | JoseLuisMartinezMeza | OPEN | 0 | 1 | **Web UI 可用性**：Windows 环境下 Work 标签页因 WebSocket 守护进程初始化失败导致无限重载循环，UI 完全不可用。 |

---

### 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 说明 |
|---|------|--------|------|------|
| [#1597](https://github.com/MoonshotAI/kimi-cli/pull/1597) | fix: guard trafilatura import to prevent cascading tool load failure on Python 3.13 | he-yufeng | OPEN | **关键兼容性修复**：Python 3.13 中 `charset-normalizer` 的 mypyc 编译 `.so` 文件与解释器不兼容，导致 `trafilatura` 导入失败并引发级联工具加载崩溃。此 PR 通过守卫导入逻辑解决该问题，对 Python 3.13 用户至关重要。 |

---

### 5. 功能需求趋势

从当前活跃 Issues 中可提炼出以下社区关注方向：

- **用量计算与计费透明度**：用户对 token 消耗与实际请求次数不匹配的质疑最为突出，期望官方明确计费规则或优化 token 效率。
- **稳定性与死循环修复**：文件读取循环、WebSocket 初始化失败等稳定性问题影响核心功能可用性。
- **Python 版本兼容性**：Python 3.13 适配成为新痛点，依赖链中的原生编译模块兼容性问题需持续关注。
- **Web UI 体验**：Work 标签页的 WebSocket 连接稳定性直接影响 Web 端用户体验。

---

### 6. 开发者关注点

- **计费模型争议**：K2.6 模型思维链过长导致 token 消耗远超预期，用户质疑"按请求次数计费"的宣传与实际 token 消耗模式不符，需官方澄清或优化。
- **环境兼容性**：自定义端点配置（如 Anthropic 兼容接口）和特定操作系统（Linux、Windows）下的稳定性问题频发。
- **依赖链脆弱性**：第三方库（trafilatura、charset-normalizer）的版本升级可能引发级联故障，需加强导入守卫和兼容性测试。

---

*数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 生成时间：2026-06-13*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-13

> 数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. 今日速览

今日 OpenCode 发布了 **v1.17.4** 版本，主要增强了 MCP 本地服务器的工作目录支持和连接器认证流程。社区方面，**权限系统**相关的问题持续发酵（多个 Issue 涉及权限覆盖、子代理绕过 deny 规则等），同时 **doom 循环检测**、**数据库修复工具**和 **scout agent 文档清理**成为 PR 热点方向。

---

## 2. 版本发布

### v1.17.4

**Core 改进：**

- 为本地 MCP 服务器新增 `cwd` 支持，允许从工作区相对目录启动（@Grantmartin2002）
- 新增基于连接器的认证流程，支持存储的 Provider 凭证
- 新增 v2 API 端点，用于创建和获取会话、列出会话

---

## 3. 社区热点 Issues

| # | 标题 | 评论 | 要点 |
|---|------|------|------|
| [#27436](https://github.com/anomalyco/opencode/issues/27436) | Permission required cannot select | 16 👍11 | 用户点击 "Allow once" / "Allow always" / "Reject" 均无响应，导致会话卡死。权限交互流程存在严重 UX 阻塞 |
| [#17505](https://github.com/anomalyco/opencode/issues/17505) | session/update notifications sent after session/prompt response | 13 👍8 | 作为 ACP provider 集成时，`session/update` 通知在 `end_turn` 之后才到达，导致客户端内容不完整 |
| [#31996](https://github.com/anomalyco/opencode/issues/31996) | Invalid JSON Schema: regex lookaround not supported on GPT 5.5 | 11 👍5 | OpenCode 生成的 JSON Schema 包含 lookaround 正则，导致 OpenAI 兼容 Provider 请求在到达模型前失败 |
| [#12716](https://github.com/anomalyco/opencode/issues/12716) | Doom loop not caught during reasoning or output | 9 👍3 | 模型在推理/输出阶段陷入无限循环时未被检测，造成高额 API 费用 |
| [#16610](https://github.com/anomalyco/opencode/issues/16610) | Hangs at startup if .git repo present and inotify instances run out | 8 👍7 | 在低 inotify 实例数环境下，含 `.git` 目录的项目启动会挂起 |
| [#24335](https://github.com/anomalyco/opencode/issues/24335) | Permission Wildcard * Overwriting Lower Permissions | 7 👍4 | 通配符 `*` 权限规则覆盖了更具体的低优先级规则，与文档描述的行为不符 |
| [#29099](https://github.com/anomalyco/opencode/issues/29099) | TUI system notifications do not fire under zellij/tmux | 7 👍1 | 终端复用器中系统通知不工作，影响长时间任务的用户感知 |
| [#31204](https://github.com/anomalyco/opencode/issues/31204) | session_message.seq NOT NULL constraint failed on agent-switched sessions | 6 👍2 | 6 月 3-5 日的数据库迁移引入 bug，切换 agent 时触发 SQLite NOT NULL 约束崩溃 |
| [#18108](https://github.com/anomalyco/opencode/issues/18108) | Truncated tool calls misclassified and unrecoverable | 6 👍2 | LLM 工具调用 JSON 被截断后，OpenCode 错误分类为"无效工具调用"，无法恢复 |
| [#32024](https://github.com/anomalyco/opencode/issues/32024) | Sub-agents bypass deny permission rules for read and grep | 2 👍1 | 子代理（Task 工具）不遵守 deny 权限规则，可读取 `.env` 等敏感文件 |

---

## 4. 重要 PR 进展

### 已合并（Merged）

| # | 标题 | 内容 |
|---|------|------|
| [#32117](https://github.com/anomalyco/opencode/pull/32117) | fix: classify fetch timeouts as retryable | 将 Provider 配置的 `timeout` 触发的 `TimeoutError` 归类为可重试错误，避免超时即崩溃 |
| [#32110](https://github.com/anomalyco/opencode/pull/32110) | fix(tui): prevent duplicate renderable IDs | 清理 TUI 中未使用的 renderable ID，修复 DialogSelect 中的 ID 冲突 |
| [#32107](https://github.com/anomalyco/opencode/pull/32107) | docs: remove references to deleted scout agent | 清理文档中已删除的 scout agent 引用 |
| [#32103](https://github.com/anomalyco/opencode/pull/32103) | Allow overriding disabled_providers via config | 修复 `disabled_providers` 配置无法被用户自定义覆盖的问题 |
| [#27160](https://github.com/anomalyco/opencode/pull/27160) | fix(tui): insert selected skill into prompt | 修复 TUI 中选择 skill 后未正确插入到提示词的问题 |
| [#27126](https://github.com/anomalyco/opencode/pull/27126) | feat(cli): OS desktop notifications for task completion | 为非交互式 `opencode run` 路径添加桌面通知支持 |
| [#27092](https://github.com/anomalyco/opencode/pull/27092) | fix(tui): preserve multiline shell input | 修复 bash/zsh shell 模式下粘贴多行命令被截断的问题 |
| [#27086](https://github.com/anomalyco/opencode/pull/27086) | fix: allow partial command overrides in JSON config | 允许 JSON 配置中仅覆盖 `model` 字段而无需完整 `template` |
| [#27085](https://github.com/anomalyco/opencode/pull/27085) | feat(observability): propagate trace context to subprocesses | 向工具子进程注入 OTel trace context，提升可观测性 |
| [#27077](https://github.com/anomalyco/opencode/pull/27077) | feat: auto-allow read-only tools in permission system | 为 read/glob/grep/todowrite 4 个只读工具添加预过滤自动放行 |

### 进行中（Open）

| # | 标题 | 内容 |
|---|------|------|
| [#32093](https://github.com/anomalyco/opencode/pull/32093) | feat: add db doctor and repair commands | 新增 `opencode db doctor` / `opencode db repair` 命令，诊断和修复 SQLite 数据库问题 |
| [#32088](https://github.com/anomalyco/opencode/pull/32088) | fix: recover expired MCP sessions | 修复 MCP Streamable HTTP 会话过期后的自动恢复机制 |
| [#32122](https://github.com/anomalyco/opencode/pull/32122) | feat(tool): human-readable slugs as task_id | Task 工具的 `task_id` 参数支持可读字符串（如 `"explore-auth"`） |
| [#32115](https://github.com/anomalyco/opencode/pull/32115) | Add TrustedRouter provider | 新增 TrustedRouter 作为 OpenAI 兼容 Provider |
| [#32113](https://github.com/anomalyco/opencode/pull/32113) | fix(server): share listener memo map | TCP 监听器共享进程级 Effect memo map，修复服务层缓存解析问题 |
| [#32111](https://github.com/anomalyco/opencode/pull/32111) | docs: add rotator ecosystem entries | 将社区项目 `opencode-rotator-plugin` 等添加到 Ecosystem 文档 |
| [#30164](https://github.com/anomalyco/opencode/pull/30164) | feat(tui): show estimated live token throughput in footer | 在 TUI 底部状态栏显示实时 token 吞吐量估算 |
| [#30638](https://github.com/anomalyco/opencode/pull/30638) | fix: classify transport and timeout errors as retryable | 将 `ECONNRESET` 以外的传输错误也归类为可重试 |
| [#32124](https://github.com/anomalyco/opencode/pull/32124) | feat: harden context-mode wrapper PoC | 增强 context-mode 包装器，支持 `off/tools/shadow` 模式 |
| [#32123](https://github.com/anomalyco/opencode/pull/32123) | docs: remove references to deleted scout agent | 清理 scout agent 文档引用的另一 PR |

---

## 5. 功能需求趋势

从近期 Issues 和 PRs 中提炼出以下社区关注方向：

### 🔒 权限系统完善（最高热度）
多个 Issue 集中反映权限系统的行为不一致：通配符覆盖、子代理绕过 deny 规则、`edit` 权限不生效、权限弹窗卡死。社区对权限系统的可预测性和安全性有强烈诉求。

### 🔄 错误恢复与重试机制
- fetch 超时分类（[#32117](https://github.com/anomalyco/opencode/pull/32117)）
- MCP 会话过期恢复（[#32088](https://github.com/anomalyco/opencode/pull/32088)）
- 传输错误重试分类（[#30638](https://github.com/anomalyco/opencode/pull/30638)）

### 🛠 数据库维护工具
- `opencode db doctor` / `opencode db repair`（[#32093](https://github.com/anomalyco/opencode/pull/32093)）
- 多个 Issue 涉及 SQLite 迁移后的崩溃问题

### 📡 通知与可观测性
- 桌面通知支持（[#27126](https://github.com/anomalyco/opencode/pull/27126)）
- OTel trace 上下文传播（[#27085](https://github.com/anomalyco/opencode/pull/27085)）
- TUI 实时 token 吞吐量显示（[#30164](https://github.com/anomalyco/opencode/pull/30164)）

### 🐛 Doom 循环检测
- 跨消息重复检测（[#25254](https://github.com/anomalyco/opencode/issues/25254)）
- 推理阶段的无限循环（[#12716](https://github.com/anomalyco/opencode/issues/12716)）
- 子代理无限重试导致高额费用（[#17169](https://github.com/anomalyco/opencode/issues/17169)）

### 📚 文档与生态
- 清理已删除的 scout agent 文档引用
- 添加社区项目到 Ecosystem 文档
- 多语言文档路由问题（[#29326](https://github.com/anomalyco/opencode/issues/29326)）

---

## 6. 开发者关注点

### 高频痛点

1. **权限系统行为不可预测** — 通配符规则覆盖、子代理绕过 deny、`external_directory: "allow"` 与 `edit` 规则冲突。开发者需要更清晰、一致的权限评估逻辑。

2. **Doom 循环导致高额 API 账单** — 多个案例中，模型陷入无限工具调用循环，单次子代理调用费用高达 $15+。社区期待更智能的跨消息重复检测机制。

3. **数据库迁移引发崩溃** — 6 月初的 `session_message` 表迁移导致 agent 切换时触发 NOT NULL 约束失败，需要原生数据库诊断工具。

4. **TUI 交互体验问题** — 权限弹窗卡死、多行命令粘贴截断、终端复用器中通知不工作、滚动条缺失等。

5. **Provider 兼容性** — JSON Schema 中的 lookaround 正则不被 OpenAI 兼容 Provider 支持、MiniMax 缓存异常、Windows 自动更新路径丢失等。

### 社区贡献活跃度

今日共有 **50+ 个 Issues** 和 **50+ 个 PR** 在过去 24 小时内活跃，社区贡献热情较高。自动化 PR 清理（`automated-pr-cleanup`）标签下的多个 PR 正在集中处理积压的 bug 修复和功能请求。

---

*日报由 OWL 自动生成 | 2026-06-13*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-06-13

---

## 1. 今日速览

Pi 社区继续保持高活跃状态，今日重点围绕**多提供商兼容性（Anthropic Vertex、Bedrock、vLLM/DeepSeek 思考模式）**推进，同时大量 Bug 修复集中在**上下文管理、流式传输可靠性、TUI 交互**等核心体验层面。v0.79.2 发布，主要改善 Bedrock 验证错误引导。社区对 `openai-codex` / GPT-5.5 连接稳定性问题（#4945）的关注度持续走高，已达 55 条评论。

---

## 2. 版本发布

### v0.79.2

- **更清晰的 Bedrock 验证引导**：Amazon Bedrock 数据保留验证错误现在会链接到 AWS 官方数据保留文档，方便用户快速定位配置问题。
- 小幅新增功能（详情见 PR）。

🔗 [Release v0.79.2](https://github.com/earendil-works/pi/releases/tag/v0.79.2)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 为何重要 |
|---|------|------|----|----------|
| #4945 | [openai-codex] Connection Reliability Issues | 55 | 30 | **今日最热话题**。GPT-5.5 在交互 TUI 中频繁卡在 `Working...` 状态，无流式输出、无工具调用、无可见错误，用户只能按 Esc 中止。该问题已持续数天，影响核心编码流程，社区期待官方优先处理。[链接](https://github.com/earendil-works/pi/issues/4945) |
| #5363 | Add amazon-bedrock-mantle provider for OpenAI-compatible models | 12 | 3 | 用户需求强烈的**新提供商支持**。Bedridge Mantle 模型使用 OpenAI 兼容接口（`bedrock-mantle.{region}.api.aws/openai/v1/responses`），与现有 Converse API 不兼容，需要独立提供商接入。[链接](https://github.com/earendil-works/pi/issues/5363) |
#4160 | pi extensions does not play nice with Bun | 11 | 0 | Bun 运行时与 `pi install` 扩展安装存在兼容性问题（找不到 npm 可执行文件），影响 Bun 生态开发者体验。已关闭，归类为大重构相关。[链接](https://github.com/earendil-works/pi/issues/4160) |
#5667 | Bash overflow spill crashes pi with EACCES when TMPDIR is macOS placeholder path | 6 | 0 | **严重崩溃 Bug**：当 bash 工具输出超限时，Pi 尝试写入 `$TMPDIR/pi-bash-<id>.log`，若 TMPDIR 指向 macOS 不可写占位路径，会触发未捕获的 EACCES 错误导致 Pi 退出。macOS 用户高发。[链接](https://github.com/earendil-works/pi/issues/5667) |
#5653 | Move off shrinkwrap — pi-ai install splits the API provider registry | 5 | 0 | **架构级问题**。同时安装 `@earendil-works/pi-ai` 和 `@earendil-works/pi-coding-agent` 会导致两份 `pi-ai` 副本，API 提供商注册表成为两个独立模块级 Map，引发运行时分裂行为。正在进行中。[链接](https://github.com/earendil-works/pi/issues/5653) |
#5595 | openai-completions maxTokens not passing through | 4 | 0 | Together.ai 等平台上的推理模型（如 DeepSeek v4pro）输出 token 数受限于中间层未正确透传 `maxTokens`，导致生成果断。影响所有 OpenAI Completions 兼容提供商用户。[链接](https://github.com/earendil-works/pi/issues/5595) |
#5673 | Add "vllm-deepseek" thinking format for DeepSeek models behind vLLM proxies | 3 | 0 | 企业级用户需求。vLLM 代理后的 DeepSeek-V3.x 模型需要 `chat_template_kwargs: { thinking: true }` 格式（而非现有的 `thinking: { type: "enabled" }`），否则思考模式无法正常工作。[链接](https://github.com/earendil-works/pi/issues/5673) |
#5584 | Bedrock provider ignores models.json apiKey | 3 | 2 | `bedrock-converse-stream` 提供商不接受 `models.json` 中的 apiKey，只认 `AWS_BEARER_TOKEN_BEDROCK` 环境变量，导致使用 AI 网关前置配置的用户无法正常认证。（已有 PR 修复 #5586）[链接](https://github.com/earendil-works/pi/issues/5584) |
#5571 | pi -p hangs indefinitely with unauthenticated default provider | 3 | 0 | **体验痛点**：非交互模式下，若默认提供商无凭证，Pi 不快速失败而是无限挂起（3+分钟），必须手动 kill。非交互/CI 场景下严重影响可靠性。[链接](https://github.com/earendil-works/pi/issues/5571) |
#5654 | Add excludeFromContext to custom messages sent via sendMessage() | 2 | 0 | 实用功能需求：扩展工具通过 `sendMessage()` 发送自定义消息时，无法排除其进入上下文窗口，需要类似 bash `!!` 执行结果的 `excludeFromContext` 标志来控制上下文占用。[链接](https://github.com/earendil-works/pi/issues/5654) |

---

## 4. 重要 PR 进展（Top 10）

### ✅ 已合并

| # | 标题 | 内容摘要 |
|---|------|----------|
| #5679 | **feat(ai): add Anthropic Vertex provider** | 新增内置 `anthropic-vertex` 提供商，通过 ADC / 环境 Google 认证将 Claude 请求路由至 Google Cloud Vertex AI。已接入模型注册、coding-agent 默认配置、提供商文档和交互选择器。✅ 今日合并。[链接](https://github.com/earendil-works/pi/pull/5679) |
#5674 | **fix(coding-agent): avoid project trust prompt for update** | 修复 `pi update` 在 home 目录等场景下误触"信任此文件夹"弹窗的问题，通过区分 `~/.pi` 与 `cwd/.pi` 的路径解析逻辑避免重叠。✅ 合并。[链接](https://github.com/earendil-works/pi/pull/5674) |
#5675 | **fix: stabilize compaction after reload** | 修复 `/reload` 后 compaction 可能因 `prevCompaction is not undefined` 失败的问题。保留前次压缩 token 边界，确保重复压缩和排队消息的稳定性。✅ 合并（由外部贡献者 SeanThomasWilliams 提交）。[链接](https://github.com/earendil-works/pi/pull/5675) |
#5666 | **fix(ai): preserve Anthropic refusal details** | 当 Anthropic 因 `stop_reason: "refusal"` 停止时，将 `stop_details` 中的解释信息透传至 `errorMessage`，改善拒绝场景下的可见性。修复 #5591。✅ 合并。[链接](https://github.com/earendil-works/pi/pull/5666) |
#5660 | **fix(coding-agent): prevent uppercase header values from being falsely treated as env vars** | 修复 `models.json` 中全大写 header 值（如 `"BEARER"`）被误判为环境变量引用（`$BEARER`）的 Bug。根因是正则 `/^[A-Z_][A-Z0-9_]*$/` 过于宽泛。✅ 合并。[链接](https://github.com/earendil-works/pi/pull/5660) |
#5665 / #5664 | **fix(coding-agent): handle setActiveTools(undefined)** | 修复 `setActiveTools(undefined)` 抛出 `TypeError: toolNames is not iterable` 的问题（#5663），在 `setActiveToolsByName` 中增加空值保护。✅ 合并。[链接](https://github.com/earendil-works/pi/pull/5665) |
#5586 | **fix(ai/bedrock): use resolved apiKey as a bearer-token fallback** | `bedrock-converse-stream` 提供商现在支持将 `models.json` 中的 apiKey 作为 bearer 回退令牌，优先级：显式 `bearerToken` > `AWS_BEARER_TOKEN_BEDROCK` > `apiKey`。✅ 合并。（修复 #5584）[链接](https://github.com/earendil-works/pi/pull/5586) |
#5600 | **fix(ai): honor Codex SSE header timeout setting** | Codex SSE 响应头等待超时此前硬编码为 10 秒，即使调用方配置了更长的 `timeoutMs` 也可能失败。修复后正确读取配置值。✅ 合并。[链接](https://github.com/earendil-works/pi/pull/5600) |
#5634 | **fix(ai): normalize generated model costs** | 修复 OpenRouter 和 Vercel AI Gateway 价格转换后出现浮点精度 artifacts 的问题，`models.generated.ts` 现在会对转换后的 USD/1M token 价格正确舍入。✅ 合并。[链接](https://github.com/earendil-works/pi/pull/5634) |
#5650 | **fix(ai): remove stale OpenRouter Kimi free model assertion** | 移除 CI 中已失效的 `moonshotai/kimi-k2.6:free` 断言（OpenRouter 不再返回该免费模型），恢复 CI 通过。✅ 合并。[链接](https://github.com/earendil-works/pi/pull/5650) |

### 🔄 开放中

| # | 标题 | 内容摘要 |
|---|------|----------|
#5678 | **Add excludeFromContext for custom messages** | 为自定义消息和扩展 `sendMessage` API 添加 `excludeFromContext` 标志，贯穿会话持久化、上下文重建和压缩路径，对应 Issue #5654。🔄 待审查。[链接](https://github.com/earendil-works/pi/pull/5678) |
#5262 | **feat(ai): add Anthropic Vertex provider** | 早期提交的同功能 PR（MichaelYochpaz），功能与 #5679 重叠。🔄 开放中。[链接](https://github.com/earendil-works/pi/pull/5262) |

---

## 5. 功能需求趋势

从今日 Issues 和 PR 中可提炼出社区最关注的三大方向：

### 🔌 新提供商 / 模型适配（最高频）
- **Amazon Bedrock Mantle**（#5363）：OpenAI 兼容接口的独立提供商需求
- **Anthropic Vertex**（PR #5679）：Google Cloud Vertex AI 上的 Claude
- **vLLM + DeepSeek 思考模式**（#5673）：企业私有化部署场景
- **OpenAI Codex / GPT-5.5 稳定性**（#4945）：最高关注度的连接可靠性问题

### 📦 包管理与架构优化
- **退出 shrinkwrap**（#5653）：解决双份 `pi-ai` 导致提供商注册表分裂
- **Bun 兼容性**（#4160）：运行时生态覆盖

### 🧠 上下文与流式传输可靠性
- **上下文溢出检测**（#5558, #5677）：流式调用无限挂起、上下文超限错误不被识别
- **Compaction 稳定性**（PR #5675）：reload 后压缩失败
- **`excludeFromContext`**（#5654, PR #5678）：自定义消息细粒度上下文控制

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点 | 代表 Issue/PR | 影响范围 |
|------|---------------|----------|
| **GPT-5.5 / OpenAI Codex 连接频繁卡死** | #4945 | 所有使用 Codex 提供商的开发者，55 条讨论、30 个 👍 说明普遍性极高 |
| **流式调用无限挂起/缺乏超时机制** | #5558, #5592 | 非交互/headless 场景（如 CI）下 agent 无法自愈 |
| **提供商配置碎片化** | #5584, #5363, #5661 | 各提供商认证方式不一致（apiKey vs bearerToken vs env var），配置成本高 |
| **macOS 特定路径/崩溃问题** | #5667 | TMPDIR 占位路径导致的崩溃，macOS 用户独占 |
| **工具管理与上下文控制精度不足** | #5654, #5595 | 扩展开发者无法细粒度控制哪些消息进入上下文，影响 token 效率 |
| **TUI 交互 Bug** | #5657, #5669, #5670 | `/fork` parentId 链断裂、单个 `+` 渲染为 `-`、Tab 补全提前确认等影响日常交互体验 |
| **Home 目录信任弹窗误触** | #5619 → PR #5674 | `pi update` 在 home 目录运行时误触信任提示（已修复）|

---

> **数据来源**: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) &nbsp;|&nbsp; **日报生成时间**: 2026-06-13 &nbsp;|&nbsp; **Pi 社区动态日报 by OWL**

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-06-13

---

## 1. 今日速览

Qwen Code 重磅发布 **v0.18.0**，社区同步涌现大量 PR，聚焦于 agent 运行时稳定性（token escalation、background agent 标志持久化、中断恢复）、web-shell 体验增强以及 OOM 防护。多个影响用户体验的 bug（重复工具调用、会话终止、Windows 兼容性）被快速提交并标记 P1/P2 优先级，社区响应积极。

---

## 2. 版本发布

### 🚀 v0.18.0（2026-06-13）

- **Release**: [v0.18.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0)
- **关键变更**：
  - `chore(release)`: v0.17.1 → v0.18.0 发布流程
  - `fix(cli)`: 修复 copy 输出中 skip thought parts 的问题（[@he-yufeng](https://github.com/he-yufeng)，PR [#4742](https://github.com/QwenLM/qwen-code/pull/4742)）
  - 底层 telemetry 链路已完成 daemon OpenTelemetry 覆盖（Issue [#4554](https://github.com/QwenLM/qwen-code/issues/4554) 已 close）

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 要点 |
|---|-------|------|------|
| 1 | **[#3203] Qwen OAuth Free Tier Policy Adjustment** 提议将免费额度从 1000 次/天降至 100 次/天并最终关闭免费入口 | 💬127 评 | 涉及所有免费用户切身利益，社区讨论极为活跃，官方尚未正面回应。免费策略变动是社区第一热点。 |
| 2 | **[#5055] Trojan:JS/ShaiWorm.DBA!MTB** v0.18.0 VSCode 插件 Win32 版本被报毒 | 💬2 | 新发布首即遭遇安全告警，可能影响 Windows 用户安装信心，需官方尽快确认是否为误报并提供签名说明。 |
| 3 | **[#5016] Qwen Code executes a tool after cancellation** SIGINT 后仍执行中断轮次的工具调用 | 💬2 | P1 bug，影响 Headless/CI 场景安全。存在完整复现路径，亟需修复。 |
| 4 | **[#5015] Qwen Code executes repeated identical tool calls** 重复工具调用不被拦截 | 💬2 | P1 bug，直接导致长会话费用飙升和 API 400 错误，与 [#5019](https://github.com/QwenLM/qwen-code/issues/5019)（长程任务重复调用致会话终止）形成关联问题群。 |
| 5 | **[#5018] 长程任务注意力不集中，出现大量遗忘** | 💬3 | 反映 qwen3.7-max 在长上下文场景下的质量退化，用户对模型能力的期待与实际体验存在落差。 |
| 6 | **[#4514] `qwen serve` daemon capability gaps & prioritized backlog** | 💬15 | Alpha 阶段后的主要功能差距追踪帖，社区对 daemon/serve 模式关注度持续走高。 |
| 7 | **[#4825] `qwen sessions list` subcommand with --json, --tag, date filters** | 💬4 | 提升会话管理自动化能力，方便 CI 和脚本集成，被标记 `welcome-pr`，对外部贡献者友好。 |
| 8 | **[#4095] feat: atomic file write & transaction rollback** Phase 1 已落地，Phase 2 跟进 POSIX rename 权限修复 | 💬5 | Docker/共享空间场景下的文件安全写入是核心可靠性需求，#4431 已在跟进。 |
| 9 | **[#4554] feat(telemetry): daemon OpenTelemetry 覆盖** 🎉 已 close | 💬6 | 今日实现完成，daemon 层全链路可观测性达标，为后续性能优化打基础。 |
| 10 | **[#4488] qwen code 插件(v0.16.0)在 vscode 左侧栏不显示** | 💬7 | VSCode 1.120+ 新 UI 兼容性问题，影响 IDE 扩展日常使用体验。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 1 | **[#5062] fix(core): keep token escalation warm across agent rounds** | 🔧 Bug Fix | 修复 agent 多轮输出中 maxOutputTokens 回退到默认值的问题，确保长输出不因轮次切换被截断。回归测试覆盖 #4964 场景。 |
| 2 | **[#5066] feat(web-shell): daemon web-shell improvements** | ✨ Feature | 为 daemon 模式 web-shell 新增 token 用量追踪、完整设置面板、i18n、主题切换和流式指标展示，显著提升远程管理体验。 |
| 3 | **[#5061] fix(core): preserve background agent launch flags** | 🔧 Bug Fix | 进程重启后恢复中断的 background agent 时保留启动时的审批模式、信任列表等标志，防止静默升级权限。 |
| 4 | **[#5039] fix(cli): use id+baseUrl for precise model identity** | 🔧 Bug Fix | 引入 `model.id` + `model.baseUrl` 唯一标识模型，解决同 id 不同 provider 的歧义问题，关联 close #4877/#4813/#4722/#4814。 |
| 5 | **[#5030] feat(core,cli,sdk): resume an interrupted turn without synthetic "continue" message** | ✨ Feature | 新增一等公民方式恢复被中断的 assistant turn，无需注入虚假 "continue" 消息，关闭 #4679。 |
| 6 | **[#4983] docs(channels): add screenshots to Feishu setup guide** | 📝 Docs | 飞书频道配置指南新增全流程截图，降低非技术用户的接入门槛。 |
| 7 | **[#4933] feat(config): add settings file change detection via chokidar watcher** | ✨ Feature | settings.json 变更实时检测与热重载，减少手动重启，提升迭代效率。 |
| 8 | **[#4929] fix(cli): add OSC 52 clipboard fallback for SSH environments** | 🔧 Bug Fix | Linux SSH 环境下通过 OSC 52 回退实现剪贴板复制，解决 `/copy` 和 vim yank 在 SSH 中失效问题（close #4926）。 |
| 9 | **[#4918] feat(hooks): pass original API call ID to hook system** | ✨ Feature | hook 系统新增原始 `call_xxx` 格式 ID，与日志对齐，便于追踪和调试 hook 执行链路。 |
| 10 | **[#4850] feat(extensions): interactive multi-tab /extensions manager** | ✨ Feature | `/extensions` 升级为交互式多标签页管理（Installed / Discover / Sources），覆盖扩展全生命周期，对标 Claude Code 生态体验。 |

---

## 5. 功能需求趋势

从本期 Issues & PRs 中提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue/PR | 热度信号 |
|------|-------------|---------|
| **🔧 Agent 运行时稳定性** | #5062, #5061, #5016, #5030, #5015 | PR 密集、P1 bug 集中涌现，是社区第一优先级 |
| **☁️ Daemon / Serve 远程模式** | #4514, #5066, #4554（已落地） | 远程 web-shell、telemetry、A2UI-over-MCP 持续完善 |
| **🖥️ IDE 集成体验** | #4488, #4983, #5055 | VSCode 扩展兼容性、飞书渠道接入、Windows 安全告警 |
| **📋 会话管理 & 可观测性** | #4825, #4994, #4982, #4264 | session 列表、`/stats` 精度、debug 信息积累 OOM 清理 |
| **👥 Subagent / 后台自动化** | #4928, #5061, #4963 | fork subagent 默认开启、权限审批队列化 |
| **🔌 扩展生态 & MCP** | #4850, #4835, #4713 | 交互式扩展管理、project-level 安装、.mcp.json 对齐 Claude Code |
| **🌐 多模型 / Provider 支持** | #5039, #1206, #4793 | model identity 消歧、自托管 LLM 参数兼容、动态模型切换 |
| **🛡️ 安全 & 可靠性** | #4095（原子写入）、#5055（安全告警）、#5061（approval 标志持久化） | 文件写入安全、权限模型安全持续受关注 |

---

## 6. 开发者关注点与高频痛点

1. **重复工具调用 & 中断后继续执行**：`#5015`、`#5016`、`#5019` 三个 bug 在同一天密集提交，揭示 agent loop 在 cancellations 和重复检测上的防御不足，是耗时-费用双杀的严重问题。

2. **长程任务质量退化**：`#5018`、`#5029` 均反映 qwen3.7-max 在长上下文中出现记忆丢失和"降智"感，社区期待更好的 context 压缩策略和 model-level 改进。

3. **Windows 兼容性**：`#5010`（`printf` 命令缺失）、`#5055`（杀毒误报）显示 Windows 体验仍需投入注意力。

4. **免费额度政策变动担忧**：`#3203` 的 127 条评论说明用户对免费策略高度敏感，任何限额收紧都将引发社区震动，建议团队主动沟通路线图。

5. **Daemon/Serve 模式能力对齐**：`#4514` 持续跟踪 server 端功能缺口，社区将 Qwen Code 视为 Claude Code Server 的替代方案，远程化和 API-first 需求强烈。

6. **从 Claude Code 迁移的摩擦**：`#4821`（frontmatter agent 定义）、`#4850`（扩展管理）、`#4845`（/import-config）均指向降低从 Claude Code 迁移成本的需求，生态对齐是社区高频呼声。

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 生成时间：2026-06-13 · OWL 出品*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*