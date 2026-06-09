# AI CLI 工具社区动态日报 2026-06-09

> 生成时间: 2026-06-09 00:36 UTC | 覆盖工具: 8 个

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
**分析日期：2026-06-09**

---

## 1. 生态全景

2026 年 6 月的 AI CLI 工具生态正处于从"对话式助手"向"可编程 Agent 平台"加速演进的关键阶段。各工具不约而同地将 **Session 持久化与生命周期管理**、**多模型 Provider 兼容性** 和 **安全边界加固** 作为核心发力点，反映出社区对"可控、可预测、可审计"Agent 执行环境的强烈诉求。Claude Code 继续领跑功能创新与社区热度，Qwen Code 和 OpenCode 紧随其后发力基础设施，OpenAI Codex 和 Pi 围绕桌面体验与信任模型展开差异化探索，Gemini CLI 和 Kimi Code 则分别聚焦稳定性修复与生态迁移窗口期。整体而言，**token 预算可控性、Agent 可信度和跨平台一致性** 已成为衡量工具成熟度的三大核心指标。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | 今日 Release | 版本号 | 日活等级 |
|------|:-----------:|:-------:|:------------:|--------|:--------:|
| **Claude Code** | ~50 | 3 | ✅ | v2.1.169 | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | ~50 | 10 | ✅ | rust-v0.138.0 | 🔥🔥🔥🔥 |
| **Gemini CLI** | ~30 | 10 | ✅ (nightly) | v0.20260609 | 🔥🔥🔥 |
| **GitHub Copilot CLI** | 34 | 1 | ❌ | — | 🔥🔥 |
| **Kimi Code** | ~5 | 0 | ❌ | — | 🔥 |
| **OpenCode** | ~50 | 50 | ❌ | — | 🔥🔥🔥🔥🔥 |
| **Pi** | ~42 | 22 | ✅ | v0.79.0 | 🔥🔥🔥🔥 |
| **Qwen Code** | ~32 | ~15 | ✅ (nightly) | v0.17.1-nightly | 🔥🔥🔥 |

> **数据解读**：OpenCode 凭借 50 Issue + 50 PR 的双高数据成为今日社区贡献活跃度之王，但其无正式版 release 也反映出快速迭代中的不稳定性。Claude Code 以 50 Issue + 官方稳定版发布保持综合影响力领先。Copilot CLI 的 PR 极低（仅 1 条）值得关注。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|----------|----------|
| **🔒 Agent 可控性与 Token 预算管理** | Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI、Pi | Agent 无限挂起/复活/过度派生已成为全行业痛点。Claude Code 有 agent 复活消耗 160k+ token、简单任务派生 272 个 agent 的报告；Copilot CLI 有后台子代理静默挂起问题；Pi 和 Gemini CLI 均收到 Agent 挂起反馈。社区共同诉求：**透明预算 + 可中断保证 + 用量可审计**。 |
| **🔐 安全边界加固** | Codex、Gemini CLI、Pi、OpenCode、Claude Code、Qwen Code | 符号链接攻击防护（Codex PR ×2、Claude Code PR #66171）、SSRF 漏洞修复（Gemini CLI PR ×2）、Project Trust 门控（Pi v0.79.0）、Prompt Injection 检测（Claude Code #66359）、Sandbox 权限修复（Codex PR #27017）。**安全已从边缘修复进入核心 pipeline**。 |
| **📦 Session 持久化与生命周期管理** | OpenCode、Qwen Code、Copilot CLI、Gemini CLI | OpenCode 的 `/goal` 命令（64 👍）和持久化记忆加载（#16077）；Qwen Code 的 ACP Streamable HTTP 传输 + 空闲会话回收；Copilot CLI 的多会话管理工具（#2966）；Gemini CLI 的子 Agent 结果可信度（#22323）。**用户不再满足于单次会话交互**。 |
| **🌐 多 Provider 模型兼容** | OpenCode、Pi、Codex、Claude Code、Qwen Code | Bedrock 兼容性集中爆发（OpenCode 3 条 Issue、Pi PR #5509、Codex Issue #26860）；Azure provider 行为一致性（Pi #5530、OpenCode #21737）；本地模型延迟问题（Pi #5464）。**多云/混合部署能力成为企业用户的硬需求**。 |
| **💻 跨平台与 IDE 集成** | Copilot CLI、Codex、Gemini CLI、OpenCode | Windows 平台问题集中（Copilot CLI 6 条、Codex WSL 性能 #25715、Codex OAuth #25203）；ACP/REST 服务层补全（Qwen Code PR #4827 新增 29 个方法）；Desktop/Web 体验追赶（Codex `/app` 命令、OpenCode Desktop 相关 PR）。**非标准环境的用户体验仍是待补功课**。 |

---

## 4. 差异化定位分析

### 功能侧重矩阵

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:---------:|:--------:|:--:|:---------:|
| **Agent 自主性** | ★★★★★ | ★★★★☆ | ★★★☆☆ | ★★★☆☆ | ★★☆☆☆ | ★★★★☆ | ★★★★☆ | ★★★☆☆ |
| **安全加固** | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★☆☆ | ★★☆☆☆ | ★★★☆☆ | ★★★★☆ | ★★★☆☆ |
| **桌面体验** | ★★★☆☆ | ★★★★★ | ★★☆☆☆ | ★★★☆☆ | ★★☆☆☆ | ★★★☆☆ | ★★★★★ | ★★☆☆☆ |
| **多 Provider** | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ | ★★☆☆☆ | ★★★★★ | ★★★★★ | ★★★★☆ |
| **社区生态** | ★★★★★ | ★★★★☆ | ★★★☆☆ | ★★★☆☆ | ★★☆☆☆ | ★★★★★ | ★★★★☆ | ★★★☆☆ |
| **企业就绪** | ★★★★★ | ★★★★☆ | ★★★☆☆ | ★★★★★ | ★★☆☆☆ | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ |

### 各工具定位画像

- **Claude Code — "功能定义者"**：持续定义行业功能标准（safe-mode、.cd 命令、Agent 写入文件、detached window），59 👍 的高需求 Issue 数量印证其引领者地位。目标用户是对 Agent 能力有深度需求的高级开发者。

- **OpenAI Codex — "平台化转型者"**：从纯 CLI 工具向完整开发者平台演进——Python SDK goal API、异步 hooks 系统、Guardian 压缩、keyring 加密存储，技术路线清晰指向"可嵌入的 Agent 服务"。

- **Gemini CLI — "稳定性质造者"**：今日 PR 和 Issue 全部围绕稳定性修复（ghost text 无限循环、零配额重试、CJK 渲染、Wayland 崩溃），战略重心已从功能扩张转向可靠性提升。

- **GitHub Copilot CLI — "生态整合者"**：依托 GitHub 生态，优势在于 MCP Registry、GitHub OAuth、Copilot 定价集成等企业场景。今日暴露的 Windows 全链路问题和插件 hooks 可靠性短板说明其跨平台适配仍有较大差距。

- **Kimi Code — "追赶验证期"**：活跃度极低（Issue 5 条、PR 0 条），用户反馈集中在 v0.11.0 认证回归（API Key 静默失效、`@filename` 不兼容）。正处于版本稳定性修复与 Python→TypeScript 迁移的用户信任重建期。

- **OpenCode — "社区驱动先锋"**：今日贡献活跃度最高（PR 50 条），Bedrock 兼容性问题社区自举修复（Issue 报告到 PR 合并同日完成）。多 Provider 支持最广（Bedrock、Azure、OpenAI、vLLM、FreeModel 等），适合需要灵活模型选择的进阶用户。

- **Pi — "体验打磨派"**：v0.79.0 新增 Project Trust 引领安全信任范式，同时积极回应社区反馈（当日 Issue → 合入 PR 的高转化路径）。TUI 体验打磨和 provider 扩展并重，定位接近"有安全意识的 Codex 替代品"。

- **Qwen Code — "基建铺路者"**：ACP Streamable HTTP/WebSocket 传输、REST 方法补全（29 个新 `_qwen/*` 方法）、空闲会话回收——正在系统性地将自身从 CLI 工具转型为可被各类 IDE 原生集成的 Agent 服务。同时积极对标 Claude Code（Agent 定义、Dynamic Workflows、迁移工具）。

---

## 5. 社区热度与成熟度

### 活跃度分层

```
第一梯队（日活 100+ 事件）：
  Claude Code   ████████████████████ 功能发布 + 高热度 Issue
  OpenCode      ████████████████████ 社区贡献最活跃

第二梯队（日活 50-100 事件）：
  OpenAI Codex  ██████████████ PR 驱动型迭代
  Pi            ██████████████ Release + 响应式修复
  Qwen Code     ██████████████ 基础设施密集建设

第三梯队（日活 30-50 事件）：
  Gemini CLI    ████████████ 稳定性修复聚焦
  Copilot CLI   ████████████████ Issue 密集但 PR 极少

第四梯队（日活 <10 事件）：
  Kimi Code     ████ 低谷期，等待关键修复
```

### 成熟度评估

| 阶段 | 工具 | 标志特征 |
|------|------|----------|
| **生产就绪** | Claude Code、OpenAI Codex | 稳定版发布节奏清晰、Issue 分类完善、安全响应快 |
| **快速迭代** | OpenCode、Pi、Qwen Code | PR 活跃但回归密集，建议保守升级（如 OpenCode 社区建议暂留 1.15.13） |
| **稳定性攻坚** | Gemini CLI、Copilot CLI | Issue 集中在 Bug 修复而非功能扩展 |
| **信任重建** | Kimi Code | 活跃用户少，回归问题亟待官方响应 |

---

## 6. 值得关注的趋势信号

### 📌 趋势一："可控性"超越"能力"成为社区第一诉求

Claude Code"agent 复活消耗 160k+ token"、Codex"禁用长文本自动转换"（65 👍）、Copilot CLI"Agent 挂起无日志"——多个工具的顶级 Issue 共同指向一个信号：**开发者不怕 Agent 能力有限，怕的是 Agent 不受控地消耗资源和制造意外**。

> 💡 对开发者的参考价值：在选择工具时，应优先评估其 Agent 预算透明度、中断可保证性和操作可审计性，而非仅看功能列表。

### 📌 趋势二：安全模型从"事后修复"转向"主动防御"

Pi 的 Project Trust（v0.79.0）是最具前瞻性的信号——在加载任何项目资源前主动征求用户信任。结合 Gemini CLI 双人 SSRF 修复、Codex 双符号链接加固、Claude Code 的 prompt injection 检测，**AI CLI 工具正在建立相当于操作系统权限模型的安全门控体系**。

> 💡 对开发者的参考价值：关注工具的安全边界设计是否完善，特别是插件生态的隔离机制和项目级信任配置，这将成为企业级部署的前置条件。

### 📌 趋势三：Bedrock/多云兼容性成为新的"浏览器兼容性"问题

OpenCode（3 条 Bedrock Issue）、Pi（Mantle provider PR）、Codex（Bedrock gpt-5.5 中途停止）同时在 AWS Bedrock 生态上踩坑，反映出 **Bedrock 的 API 兼容层（Converse API vs OpenAI Responses API）已成为新的适配复杂度来源**。

> 💡 对开发者的参考价值：如果你的工作流依赖 AWS Bedrock，应在选型时重点验证目标工具对 Bedrock 的具体适配深度，而非仅看"支持 AWS"的笼统描述。

### 📌 趋势四：ACP/IDE 原生集成正在成为工具竞争的下一个战场

Qwen Code 投入大量 PR 补齐 ACP Streamable HTTP（29 个 REST 方法）和 WebSocket 传输；Codex 通过 `/app` 命令打通 CLI 到 Desktop；OpenCode 推进 Web UI 内置编辑器。**AI CLI 工具正在从"独立使用的命令行程序"转型为"可被编辑器原生调用的 Agent 服务"**。

> 💡 对开发者的参考价值：评估工具的 daemon/serve 能力（是否支持 ACP、REST API、WebSocket）将成为长期选型的关键维度，这决定了工具能否无缝嵌入你的 IDE 工作流而非强制切换上下文。

### 📌 趋势五：中国厂商加速生态兼容与迁移路径建设

Qwen Code 的 `/import-config` 一键迁移 Claude 配置（Issue #4845）、声明式 Agent 定义（对标 Claude Code 2.1.167）、Dynamic Workflows 移植，以及 Kimi Code 的 TypeScript 重写——中国 AI CLI 厂商正在系统性地降低从 Claude Code 迁移的摩擦，同时补齐 Agent 定义、记忆系统、安全加固等核心能力。

> 💡 对开发者的参考价值：如果你关注国产模型生态，Qwen Code 的基础设施建设进度值得关注——其 ACP/REST 服务层建成后可能成为国产 IDE 集成 AI Agent 的首选后端。

---

**报告生成时间：2026-06-09 | 数据来源：8 个主流 AI CLI 工具 GitHub 社区**

---

*本报告由 OWL 生成。如需针对某一工具的深度分析或历史趋势跟踪，请告知。* 🦉

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-06-09 | 来源：anthropics/skills**

---

## 1. 热门 Skills 排行（PR）

以下按创建时间、更新活跃度及社区关注度综合排序：

| # | Skill | 作者 | 状态 | 核心功能 |
|---|-------|------|------|----------|
| 1 | **skill-quality-analyzer & skill-security-analyzer** | eovidiu | 🟢 OPEN | 元技能（meta-skill）：对 Skills 进行质量五维分析 + 安全审查，是社区最早提出的"Skills 治理"工具 |
| 2 | **document-typography** | PGTBoos | 🟢 OPEN | 解决 AI 生成文档的排版孤儿词、孤段、编号错位等"最后一英里"质量问题 |
| 3 | **agent-creator** | SyedaQurratAI | 🟢 OPEN | 创建任务专属 Agent 集合的元技能，同时修复了多工具并行调用评估和 Windows 兼容性 |
| 4 | **testing-patterns** | 4444J99 | 🟢 OPEN | 覆盖 Testing Trophy 模型、单元测试 AAA 模式、React 组件测试的完整测试技能栈 |
| 5 | **shodh-memory** | varun29ankuS | 🟢 OPEN | 跨会话持久记忆系统，让 AI Agent 在多次对话中保持上下文连续性 |
| 6 | **AURELION suite** (kernel/advisor/agent/memory) | Chase-Key | 🟢 OPEN | 四层认知+记忆框架，面向专业知识的 AI 协作管理 |
| 7 | **ServiceNow platform** | Vanka07 | 🟢 OPEN | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD/SecOps/IntegrationHub 的 ServiceNow 全平台助手 |
| 8 | **n8n-builder & n8n-debugger** | Wolfe-Jam | 🟢 OPEN | n8n 工作流构建与调试，社区对低代码自动化集成需求旺盛 |

**社区讨论热点：**
- **元技能（Meta-skills）** 是最大趋势：skill-creator、skill-quality-analyzer、agent-creator、skill-security-analyzer 都在解决"如何更好地创建、评估、治理 Skills"这一基础设施问题
- **Windows 兼容性** 是高频痛点：PR #1050、#1099、#1140 均涉及 Windows 修复
- **文档质量** 持续受关注：typography、ODT、DOCX 修复、PDF 修复等多个 PR 聚焦文档生成质量

---

## 2. 社区需求趋势（Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|----------|-----------|----------|
| **🔐 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 社区 Skills 使用 `anthropic/` 命名空间导致信任边界滥用，需官方认证机制 |
| **🏢 企业级协作** | [#228](https://github.com/anthropics/skills/issues/228) | 组织内 Skills 共享机制（13 条评论，7 个赞），当前手动传输体验极差 |
| **🔧 skill-creator 改进** | [#202](https://github.com/anthropics/skills/issues/202)、[#1169](https://github.com/anthropics/skills/issues/1169) | skill-creator 应从"开发者文档"转型为"可执行指令"；description 优化循环 recall=0% 的 bug |
| **🐛 评估工具链修复** | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` 中 `claude -p` 无法触发 Skills（0% 触发率），影响整个 skill-creator 工作流 |
| **🔌 MCP 集成** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skills 暴露为 MCP 接口，实现 AI 软件的标准化 API 封装 |
| **☁️ 云平台支持** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 上使用 Skills 的兼容性问题 |
| **📦 多文件预加载** | [#1220](https://github.com/anthropics/skills/issues/1220) | 支持多 reference 文件内联打包，解决 SKILL.md 单文件限制 |
| **🔄 重复 Skills 冲突** | [#189](https://github.com/anthropics/skills/issues/189) | document-skills 与 example-skills 内容重复导致 context window 浪费 |

---

## 3. 高潜力待合并 Skills

以下 PR 活跃度高、解决实际问题，近期落地可能性较大：

| PR | 潜力评级 | 理由 |
|----|----------|------|
| **#538** [PDF 大小写修复](https://github.com/anthropics/skills/pull/538) | ⭐⭐⭐⭐⭐ | 纯 bug fix，8 处大小写不匹配，合并阻力最小 |
| **#539** [YAML 特殊字符校验](https://github.com/anthropics/skills/pull/539) | ⭐⭐⭐⭐⭐ | 防止 description 字段 YAML 静默解析失败，防御性修复 |
| **#541** [DOCX w:id 碰撞修复](https://github.com/anthropics/skills/pull/541) | ⭐⭐⭐⭐⭐ | 修复带书签文档的 tracked changes 损坏问题 |
| **#509** [CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509) | ⭐⭐⭐⭐ | 解决社区健康度仅 25% 的问题，治理基础设施 |
| **#1050** [Windows 子进程修复](https://github.com/anthropics/skills/pull/1050) | ⭐⭐⭐⭐ | 单行修复，Windows 用户刚需 |
| **#1140** [agent-creator + eval 修复](https://github.com/anthropics/skills/pull/1140) | ⭐⭐⭐⭐ | 元技能 + 关键 bug 修复，功能价值高 |
| **#83** [skill-quality-analyzer](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐ | 元技能，但需官方治理策略配合 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：从"Skills 创建"转向"Skills 治理"——社区不再满足于新增 Skills，而是迫切要求解决 Skills 的质量评估、安全认证、跨平台兼容和企业级共享等基础设施问题。**

具体表现为：
- **元技能爆发**：quality-analyzer、security-analyzer、agent-creator 等"关于 Skills 的 Skills"成为最热方向
- **Windows 生态补齐**：多个 PR 集中修复 Windows 兼容性问题，反映用户群体扩大
- **安全信任危机**：Issue #492 揭示了社区 Skills 冒充官方身份的系统性风险
- **企业协作断层**：Issue #228（最高评论 13 条）表明组织级 Skills 共享是最大体验瓶颈

---

*报告生成时间：2026-06-09 | 数据来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

# Claude Code 社区动态日报 — 2026-06-09

---

## 1. 今日速览

Claude Code 今日发布 **v2.1.169**，新增 `--safe-mode` 安全排查模式和 `/cd` 命令（在不破坏 prompt cache 的情况下切换工作目录）。社区 Issue 讨论热度持续集中在 **token 消耗异常**（后台 agent 复活、过度派生 agent）和 **usage limit 显示错误** 两大痛点上。**安全类问题**浮出水面，有用户报告在插件安装后检测到来源不明的 prompt injection 指令。

---

## 2. 版本发布

### v2.1.169

- **`--safe-mode` 标志**（及 `CLAUDE_CODE_SAFE_MODE` 环境变量）：启动时禁用所有自定义项（CLAUDE.md、plugins、skills、hooks、MCP servers），方便排查问题，类似"安全启动"模式。
- **`/cd` 命令**：在不破坏 prompt cache 的情况下将 session 切换到新的工作目录，解决了之前切换目录导致上下文缓存失效的效率问题。

---

## 3. 社区热点 Issues

以下挑选 10 条最值得关注的 Issue（按热度与重要性排序）：

### 🔴 高优先级 / 高讨论度

| # | 标题 | 状态 | 讨论 | 要点 |
|---|------|------|------|------|
| [#60334](https://github.com/anthropics/claude-code/issues/60334) | [Bug] Image processing failures causing conversation token waste | ✅ 已关闭 | 💬 60 👍 14 | **未发送图片的图像仍被处理导致 API 报错并浪费大量 token**，用户反馈该 bug 消耗了约 70% 的 5h 使用窗口。这是长期未解决的老问题，社区抱怨激烈。 |
| [#63896](https://github.com/anthropics/claude-code/issues/63896) | [BUG] Usage credits required for 1M context — turn on usage credits or use --model to switch | 🔴 开放 | 💬 39 👍 22 | **1M context 窗口需要 usage credits 才能开启**，即使使用量极低也强制要求。Windows 平台用户尤其困惑，很多人不知道需要在 claude.ai 手动开启 usage credits。 |
| [#66339](https://github.com/anthropics/claude-code/issues/66339) | Background agents resurrect after being stopped — consumed 160k+ tokens over 21h | 🔴 开放 | 💬 4 | **后台 agent 被停止后自动复活**，在 21 小时内消耗了 160k+ token，严重违背用户意愿。这是**高度危险的 token 损耗 bug**。 |
| [#66359](https://github.com/anthropics/claude-code/issues/66359) | Unattributable prompt injection after plugin installation | 🔴 开放 | 💬 3 | **安装插件后检测到来源不明的 prompt injection 指令**（疑似环境变量外泄）。虽是新报告，但涉及**安全性**，值得密切跟进。 |
| [#16550](https://github.com/anthropics/claude-code/issues/16550) | [FEATURE] Allow Claude to Write/Update Project Files | 🔴 开放 | 💬 31 👍 59 | **允许 Claude 直接写入/更新项目文件**（👍59 为所有 Issue 中最高）。这是长期积压的高需求特性，社区期待已久。 |

### 🟡 中等优先级 / 活跃讨论

| # | 标题 | 状态 | 讨论 | 要点 |
|---|------|------|------|------|
| [#27725](https://github.com/anthropics/claude-code/issues/27725) | [FEATURE] Detachable OS-level windows for split screen | 🔴 开放 | 💬 13 👍 54 | **桌面 detached window 支持分屏**（👍54），Dev 工作流优化的强烈呼声，尤其多显示器用户。 |
| [#65920](https://github.com/anthropics/claude-code/issues/65920) | Excessive agent spawning — 272 agents for simple code analysis | 🔴 开放 | 💬 1 | **简单扫描任务触发 272 个 agent，消耗 10M+ token**。与 #66353（56 agent for image upload）和 #66339（agent 复活）形成**同一类问题的集群**。 |
| [#29937](https://github.com/anthropics/claude-code/issues/29937) | Terminal rendering corruption in tmux | 🔴 开放 | 💬 10 👍 22 | **tmux 中终端渲染错乱**，文本重叠覆盖。Linux + tmux 用户广泛受影响（👍22）。 |
| [#61828](https://github.com/anthropics/claude-code/issues/61828) | Shows 'Usage limit reached' despite session at 2% and weekly at 32% | 🔴 开放 | 💬 12 👍 4 | **用量远未达上限却显示 limit reached**，与 #63896 和 #66357 形成 usage 计数/显示可靠性问题集群。 |
| [#66371](https://github.com/anthropics/claude-code/issues/66371) | VS Code extension: copying code block injects newlines into long commands | 🔴 开放 | 💬 1 👍 1 | **VS Code 插件复制代码块时自动插入换行符**，破坏长命令的可用性。今日新报。 |

**小结：** 今日 Issue 讨论的核心主题是 **token/agent 消耗失控**（至少 5 个 Issue 指向此问题）、**usage 计数/显示不准确**（至少 3 个相关 Issue）和**安全性**（prompt injection 首次以 Issue 形式被报告）。

---

## 4. 重要 PR 进展

过去 24 小时仅有 **3 个 PR** 更新：

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| [#66372](https://github.com/anthropics/claude-code/pull/66372) | fix(devcontainer): detect Docker daemon failures via $LASTEXITCODE | 🔴 开放 | **修复 devcontainer 中 Docker 守护进程检测逻辑**：原代码用 try/catch 捕获 `docker info` 的成功，但 PowerShell 中非零 exit code 不抛异常，导致 Docker Desktop 未运行时误报 daemon 正常。改用 `$LASTEXITCODE` 正确判断。 |
| [#26914](https://github.com/anthropics/claude-code/pull/26914) | docs: add rules frontmatter paths syntax examples and validation hook | ✅ 已关闭 | 为规则 frontmatter 的 `paths:` 语法添加正确/错误示例文档，以及一个 PostToolUse hooks 验证器，防止用户因语法静默失败而困惑。 |
| [#66171](https://github.com/anthropics/claude-code/pull/66171) | [#64582] extensibility.py follows symlinks — security fix | 🔴 开放 | **安全修复**：extensibility.py 中存在符号链接追踪，可能被用于读取非预期范围的文件。PR 包含完整的漏洞分析、修复实现和安全最佳实践文档。 |

**小结：** 今日 PR 数量不多，但质量较高——一个 **Docker 检测 bug 修复**、一个 **文档改进**（已合并）、一个 **安全修复**（追踪 symlink 导致的信息泄露风险）。

---

## 5. 功能需求趋势

基于全部 50 条 Issues 的分类分析：

| 需求方向 | 代表 Issues | 热度 |
|----------|-------------|------|
| **🔒 Agent 行为控制与 token 预算** | #66339（agent 复活）、#65920（过度派生 agent）、#66353（56 agent for image upload） | 🔥🔥🔥 最紧迫 |
| **💰 Usage 计数与计费可靠性** | #63896、#61828、#66357、#66266（compaction 报错） | 🔥🔥🔥 高频 |
| **🧩 桌面应用体验增强** | #27725（分屏窗口）、#54769（侧边栏排序）、#57730（Cowork 卡死） | 🔥🔥 持续需求 |
| **🤖 Agent 能力扩展** | #16550（写文件）、#16550 series（自主性增强） | 🔥🔥 长期高投票 |
| **🔐 安全与插件安全** | #66359（prompt injection）、#64582/PR #66171（symlink 安全） | 🔥 新兴关注 |
| **🌍 跨平台兼容性** | #48827 & #66367（Cowork macOS Linux 二进制）、#29937（tmux 渲染）、#66332（Android auth） | 🔥 稳定存在 |
| **🛠️ IDE/编辑器集成** | #66371（VS Code 复制 bug）、#66363（移动端 UI 截断） | 🔄 细节打磨 |

---

## 6. 开发者关注点总结

### 🔑 今日核心痛点

1. **Token/agent 消耗失控是最大痛点**
   - 多个独立报告（agent 复活、272 agent 派生、56 agent for 简单任务）表明 **agent 调度策略存在系统性缺陷**，可能严重影响用户成本。
   - 社区实质上在呼吁：**更透明的 agent 预算控制** + **操作可中断/可撤销保证**。

2. **Usage 计数与显示不可靠形成信任危机**
   - "session at 2% 却报 limit reached"、"compaction 报 usage credits required" 等问题反复出现，多个 Issue 标注为 duplicate 但仍未统一解决。
   - 开发者反馈：**不清楚真实用量状态**，缺乏可靠的本地 token 追踪手段。

3. **安全性问题首次引起注意**
   - #66359（插件安装后出现无法归因的 prompt injection）与 PR #66171（symlink 安全修复）同日出现，提示社区开始关注**插件生态的安全边界**。

4. **跨平台兼容性仍有明显短板**
   - macOS Cowork 下载 Linux 二进制（持续数月）、Android 认证失败、tmux 渲染错误——**non-standard 环境的用户体验**仍是待补的功课。

### 📌 一句话总结

> **今日社区的核心诉求：给开发者一个"可控、可预测、可审计"的 agent 执行环境——而不是一个消耗 token 的黑盒。**

---

*数据来源: GitHub — anthropics/claude-code | 日报生成时间: 2026-06-09*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-09

---

## 1. 今日速览

Codex 今日发布了 **rust-v0.138.0** 正式版，核心亮点是 `/app` 命令支持将 CLI 线程无缝移交至 macOS 和 Windows 桌面端，以及本地图片附件和独立图片生成能力。与此同时，社区集中爆发了对 **gpt-5.5 模型 404 不可用** 的大量反馈，已成为当前最高热度话题。Windows 平台上的 WSL 性能问题和沙盒安全加固也是今日 PR 的重点方向。

---

## 2. 版本发布

### rust-v0.138.0（正式版）

- `/app` 命令可将当前 CLI 线程移交至 Codex Desktop（macOS 和原生 Windows），Windows 工作区启动后可直接进入桌面端，不再停留在手动提示阶段。
- 支持本地图片附件和独立图片生成。
- 另有 alpha 版本持续迭代：v0.139.0-alpha.1、v0.138.0-alpha.8、v0.138.0-alpha.7。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 热度 | 为什么重要 |
|---|------|------|-----------|
| [#26892](https://github.com/openai/codex/issues/26892) | gpt-5.5 本地显示可用但实际请求 404 | 💬76 👍27 | **今日最热**。gpt-5.5 在 Desktop 和 CLI 中均报 "Model not found"，而 gpt-5.4 正常，影响大量用户的核心工作流。 |
| [#25144](https://github.com/openai/codex/issues/25144) | 禁用长文本自动转为 .txt 附件的选项 | 💬51 👍65 | 👍数最高。用户希望控制粘贴长 prompt 时的自动转换行为，社区需求强烈。 |
| [#25203](https://github.com/openai/codex/issues/25203) | Windows GitHub OAuth 回调失败 | 💬37 👍21 | Windows 上 GitHub 连接器无法完成 OAuth，阻断工作流集成。 |
| [#25715](https://github.com/openai/codex/issues/25715) | WSL 作为 Agent 环境时极慢 | 💬36 👍36 | Windows + WSL 用户体感极差，每次命令延迟严重，影响核心用户群。 |
| [#8784](https://github.com/openai/codex/issues/8784) | `codex delete <session>` 命令 | 💬30 👍102 | 👍数第二高。用户需要清理不需要的会话，长期未实现的基础功能。 |
| [#8758](https://github.com/openai/codex/issues/8758) | Codex 图片生成能力（已关闭） | 💬23 👍55 | 已关闭，但社区对内置图片生成需求旺盛，值得关注后续是否重新开放。 |
| [#24675](https://github.com/openai/codex/issues/24675) | 401 后 stale app connector 链接未刷新 | 💬21 👍16 | 认证过期后 Desktop 不自动刷新连接器，需手动清除缓存。 |
| [#25719](https://github.com/openai/codex/issues/25719) | macOS 上 syspolicyd/trustd CPU 飙升 | 💬20 👍20 | Desktop 反复触发系统安全进程，导致 Mac 性能严重下降。 |
| [#27021](https://github.com/openai/codex/issues/27021) | macOS gpt-5.5 同样 404 | 💬5 👍1 | 与 #26892 呼应，确认问题跨平台存在（Windows + macOS）。 |
| [#26860](https://github.com/openai/codex/issues/26860) | Amazon Bedrock 上 gpt-5.5 中途停止 | 💬4 👍2 | 自定义模型提供商用户受影响，gpt-5.4 正常但 5.5 不稳定。 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| [#27094](https://github.com/openai/codex/pull/27094) | Add spans to build_tool_router | 🟢 OPEN | 为 `build_tool_router` 添加性能追踪 span，定位 ~113ms 的 `append_tool_search_executor` 瓶颈。 |
| [#26953](https://github.com/openai/codex/pull/26953) | Python SDK goal 操作 | 🟢 OPEN | Python SDK 新增 goal API，与 TUI 的持久化 goal 行为对齐。 |
| [#27039](https://github.com/openai/codex/pull/27039) | 异步命令 hooks | 🟢 OPEN | 支持 `async: true` 的 command hooks，允许非阻塞执行和延迟结果投递。 |
| [#27017](https://github.com/openai/codex/pull/27017) | 修复 Windows deny-read 跨 exec 运行时 | 🟢 OPEN | 修复 Windows 上 `deny_read` 权限在 shell/unified exec 中未正确生效的安全问题。 |
| [#26734](https://github.com/openai/codex/pull/26734) | 非 TTY unified exec 的 Ctrl-C 处理 | 🟢 OPEN | 允许通过 stdin 写入 U+0003 中断长时间运行的 exec 进程。 |
| [#27091](https://github.com/openai/codex/pull/27091) | Guardian 线程间主动压缩 | 🟢 OPEN | Guardian review 会话完成后立即触发上下文压缩，降低内存占用。 |
| [#25956](https://github.com/openai/codex/pull/25956) | 拒绝符号链接的 --output-last-message 路径 | 🟢 OPEN | 安全加固：使用 `O_NOFOLLOW` 防止通过符号链接写入任意文件。 |
| [#15730](https://github.com/openai/codex/pull/15730) | 加固符号链接项目配置写入 | 🟢 OPEN | 保护 `.codex/config.toml` 不被符号链接绕过，防止配置注入。 |
| [#27082](https://github.com/openai/codex/pull/27082) | 结构化压缩错误遥测 | 🟢 OPEN | 将压缩错误替换为结构化的 `codex_error_kind` 和 HTTP 状态码，提升可观测性。 |
| [#26694](https://github.com/openai/codex/pull/26694) | 缓存 tool search handler（2/n） | 🔴 CLOSED | 缓存 `append_tool_search_executor` 以减少重复构建开销，已合并。 |

---

## 5. 功能需求趋势

从今日 Issues 中提炼出社区最关注的五大方向：

1. **模型可用性与稳定性** 🔥
   - gpt-5.5 的 404 问题（#26892、#27021）和 Bedrock 上的中途停止（#26860）是最高优先级痛点。
   - 社区对模型列表与实际可用性不一致的问题容忍度极低。

2. **Windows 平台体验** 🪟
   - WSL 性能（#25715、#26149）、OAuth 回调（#25203）、透明侧边栏渲染（#25249）、会话丢失（#19615）——Windows 用户反馈密集，是重点改进平台。

3. **会话与上下文管理** 💬
   - 删除会话（#8784）、跨任务清空上下文（#23218）、AGENTS.md 的 `@include` 指令（#17401）——用户需要更精细的会话生命周期管理。

4. **Hooks 与自动化** 🪝
   - 异步 hooks（PR #27039）、hook 失败诊断（#27052）、Claude Code hook 对齐（#21753）——社区正在推动 Codex 向更完整的自动化平台演进。

5. **安全与沙盒** 🔒
   - 符号链接攻击防护（PR #25956、#15730）、Windows deny-read 修复（PR #27017）——安全加固是近期 PR 的显著趋势。

---

## 6. 开发者关注点

- **gpt-5.5 不可用是当务之急**：跨平台（Windows/macOS）、跨认证方式（ChatGPT OAuth、Bedrock）均受影响，社区期待官方快速响应。
- **Windows 用户体感堪忧**：从 WSL 性能到 UI 渲染到 OAuth，Windows 平台问题集中，建议 Windows 用户优先使用 CLI 而非 Desktop。
- **性能优化正在推进**：多个 PR 围绕 `append_tool_search_executor` 的 ~113ms 瓶颈展开（PR #27094、#26694），工具搜索缓存和 span 追踪已启动。
- **安全加固是近期主线**：符号链接防护、Windows 沙盒权限一致性、keyring 加密存储（PR #17931）等安全 PR 密集。
- **Python SDK 和 hooks 生态扩展**：goal API 和异步 hooks 表明 Codex 正在构建更完善的开发者工具链。

---

*数据来源：github.com/openai/codex | 生成时间：2026-06-09*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-06-09

---

## 1. 今日速览

今日 Gemini CLI 无稳定版发布，仅推出 nightly 版本 `v0.20260609`；社区 Issues 端集中反映 Agent 挂起、子 Agent 失灵等稳定性痛点，安全侧则有多条 SSRF 漏洞修复 PR 并行推进。PR 方向以终端渲染修复、安全加固和 Auto Memory 质量提升为主线，整体呈现"稳定性 > 安全 > 体验"的修复优先级。

---

## 2. 版本发布

### v0.47.0-nightly.20260609.g0567b25a2
- 限制 Antigravity 过渡横幅的最大展示次数
- 移除 browser agent 文档中的实验性标注（正式化推进）

---

## 3. 社区热点 Issues

| # | Issue | 关注点 | 重要性 |
|---|-------|--------|--------|
| 1 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs（P1, 👍8） | Generalist 子 Agent 执行简单操作（如创建文件夹）时无限挂起，已持续 3 个月 | 🔴 影响 Agent 核心链路 |
| 2 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component level evaluations（P1） | 在 76 个行为评估测试基础上推动组件级评估体系建设 | 🟡 评估基础设施 |
| 3 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent MAX_TURNS 被报告为 GOAL success（P1） | 子 Agent 达到最大轮次后仍报成功，掩盖中断事实 | 🟠 结果可信度 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads/搜索评估（P2） | 探讨通过 AST 感知工具减少往返调用和 token 消耗 | 🔴 Agent 效率优化 |
| 5 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏（P2） | 自动记忆在脱敏前已将内容送入模型上下文，存在泄露风险 | 🔴 安全 & 隐私 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command 完成后卡住"Waiting input"（P1, 👍3） | 简单的 CLI 命令执行完毕后 CLI 仍显示等待输入 | 🟠 用户端体验 |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser agent Wayland 下崩溃（P1） | 在 Wayland 环境下 browser 子 Agent 直接失败 | 🔴 Linux 桌面兼容性 |
| 8 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Agent 不主动使用 skills/sub-agents（P2） | 用户观察到 Agent 基本不会自动调用技能和子 Agent | 🟡 Agent 能力利用不足 |
| 9 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试无信号会话（P2） | 低价值会话反复进入后台提取队列 | 🟡 Auto Memory 资源浪费 |
| 10 | [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) Memory 系统 bug 汇总 | 多项 Auto Memory 质量问题的 tracker issue | 🔵 记忆系统稳定性 |

---

## 4. 重要 PR 进展

| # | PR | 分类 | 说明 |
|---|----|------|------|
| 1 | [#27739](https://github.com/google-gemini/gemini-cli/pull/27739) 防止 SSRF 通过 DNS 主机名和重定向 | 🔴 安全 | `web_fetch` 的 `isBlockedHost` 仅检查初始 URL，可被 DNS 解析后绕过 |
| 2 | [#27744](https://github.com/google-gemini/gemini-cli/pull/27744) SSRF 前先解析 DNS | 🔴 安全 | 修复 `nip.io` 等通配符 DNS 绕过私有 IP 防护 |
| 3 | [#27747](https://github.com/google-gemini/gemini-cli/pull/27747) 修复 ghost text 窄终端死循环 | 🟠 体验 | `getGhostTextLines` 在 emoji 等宽字符 + 窄终端时触发无限循环 |
| 4 | [#27698](https://github.com/google-gemini/gemini-cli/pull/27698) 零配额立即失败而非重试 10 次 | 🟠 稳定性 | 免费用户被硬限流时 CLI 不再无意义重试 |
| 5 | [#27505](https://github.com/google-gemini/gemini-cli/pull/27505) CJK 宽字符续行多余空格 | 🟡 国际化 | 中文/日文环境下输出出现异常空格，影响复制粘贴 |
| 6 | [#27749](https://github.com/google-gemini/gemini-cli/pull/27749) Vertex AI 模型映射重构 | 🟢 维护 | 将硬编码值替换为共享常量，可维护性提升 |
| 7 | [#27619](https://github.com/google-gemini/gemini-cli/pull/27619) MCP 工具发现原子更新 | 🟠 稳定性 | 网络抖动时不再丢失已发现的 MCP 工具 |
| 8 | [#27729](https://github.com/google-gemini/gemini-cli/pull/27729) 遥测属性截断 1024 字符 | 🟡 可观测性 | 长属性导致 GCP 导出报错并刷爆终端堆栈 |
| 9 | [#27412](https://github.com/google-gemini/gemini-cli/pull/27412) 修复 binary 文件读取后的模型幻觉 | 🟠 Agent 质量 | PDF 等二进制读取后，Agent 产生虚假"已分析"声明 |
| 10 | [#27746](https://github.com/google-gemini/gemini-cli/pull/27746) 移除 browser agent「实验性」标记（已合并） | 🟢 正式化 | 表明 browser agent 已脱离实验阶段 |

---

## 5. 功能需求趋势

**从 Issues/PR 数据可识别 5 大趋势方向：**

1. **Agent 稳定性与高可靠性** — 挂起（#21409）、虚假成功（#22323）、重试循环（#27698）等问题集中爆发，社区对 Agent 链路端到端可靠性要求显著提升。

2. **内存/记忆系统成熟化（Auto Memory）** — 已有至少 4 个并行 Issue（#26525/#26522/#26523/#26516）围绕记忆质量、脱敏、补丁校验展开，Auto Memory 正从「原型」进入「生产化」清理阶段。

3. **安全加固（SSRF/权限/泄露）** — PR #27739 与 #27744 同时从两个角度修补 SSRF 漏洞；Issue #26525 推动记忆管道的脱敏前移；#22672 要求 Agent 抑制破坏性 Git 操作。安全已从边缘修复进入核心 pipeline。

4. **Agent 技能与子 Agent 利用率** — #21968（Agent 不主动用 skills）、#22745（AST-aware 工具提升效率）表明社区关注如何让 Agent 更智能地调度自身能力栈。

5. **跨平台终端兼容** — Wayland（#21983）、CJK 渲染（#27505）、窄终端 ghost text（#27747）反映出 CLI 工具在 Linux、国际用户和边缘终端场景的打磨需求。

---

## 6. 开发者关注点

| 痛点 | 典型表现 | 建议优先级 |
|------|---------|-----------|
| **Agent 无限挂起** | Generalist agent 无输出且无错误退出（#21409） | P1 — 阻塞任务流 |
| **Shell 执行后假死** | 命令已完毕但 UI 仍等待输入（#25166） | P1 — 高频用户投诉 |
| **子 Agent 结果欺诈** | 子 Agent 超时被标记为 GOAL success（#22323） | P1 — 误导开发者信任 Auto Memory |
| **Browser agent 兼容性** | Wayland 崩溃（#21983），settings.json 不生效（#22267） | P1 — Linux 用户群体扩大 |
| **安全认知升级** | SSRF 绕过、Secret 泄露、破坏性 Git 命令 | P0 — 企业部署前置条件 |
| **资源/配额透明度** | 无提示进入重试循环（#27698） | P2 — 改善但已紧急分流 |

> 📌 **一句话总结**：今日社区核心信号是"让 Agent 停下来、说真话、不乱来"——稳定性与可信度正超越新功能，成为社区最高优先级诉求。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-09

---

## 1. 今日速览

过去 24 小时内，GitHub Copilot CLI 社区活跃度较高，共产生 **34 条 Issue 更新**和 **1 条 PR 更新**，无新版本发布。今日焦点集中在 **Windows 平台体验问题集中爆发**（安装、卸载、路径、终端兼容性）、**插件 Hooks 系统缺陷持续发酵**，以及 **模型管理与 BYOK 功能增强** 三大方向。社区对交互体验（输入模式、历史记录、视觉分隔）的精细化需求也明显增多。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 高关注度 / 高讨论量

| # | 标题 | 为何重要 | 社区反应 |
|---|------|----------|----------|
| [#1928](https://github.com/github/copilot-cli/issues/1928) | Allow to pause copilot work | 用户无法在 Copilot 跑偏时暂停并追加指令，只能终止重来，严重影响长会话体验 | 9 条评论，2 👍，讨论活跃 |
| [#13](https://github.com/github/copilot-cli/issues/13) | CLI input should have a vi/vim input mode | Vim 用户群体庞大，缺少模态编辑支持是长期痛点 | **63 👍**（全榜最高），7 条评论，持续 9 个月仍开放 |
| [#3547](https://github.com/github/copilot-cli/issues/3547) | Background sub-agent silently hangs at total_turns=0 when model="gpt-5.5" | 后台子代理静默挂起，无报错无日志，调试极困难 | 6 条评论，涉及核心 agent 调度可靠性 |

### 🟡 功能性缺陷

| # | 标题 | 为何重要 | 社区反应 |
|---|------|----------|----------|
| [#3436](https://github.com/github/copilot-cli/issues/3436) | /mcp search constructs wrong URL — missing /v0.1/ segment | 企业自建 MCP Registry 全部 404，影响企业部署 | 5 条评论，1 👍 |
| [#2867](https://github.com/github/copilot-cli/issues/2867) | Claude Opus 4.6 (high) returns "model not supported" after quota reset | 按提示等待配额重置后仍报模型不支持，疑似服务端状态同步 bug | 5 条评论，1 👍 |
| [#2540](https://github.com/github/copilot-cli/issues/2540) | Plugin-defined preToolUse hooks do not fire | 插件 hooks.json 中定义的 preToolUse 钩子完全不触发，安全审计和拦截场景受阻 | 4 条评论，3 👍 |
| [#3652](https://github.com/github/copilot-cli/issues/3652) | WSL 中 Copilot Chat 启动延迟 40-80 秒 | listSessions 调用阻塞 VS Code 扩展启动，WSL 用户体验极差 | 3 条评论 |

### 🟢 新提交 / 交互体验

| # | 标题 | 为何重要 | 社区反应 |
|---|------|----------|----------|
| [#3718](https://github.com/github/copilot-cli/issues/3718) | Add visual delimiters around each agentic-loop iteration | 单次 prompt 内的多轮工具调用缺乏视觉分隔，用户难以追踪执行进度 | 今日新开，0 评论 |
| [#3720](https://github.com/github/copilot-cli/issues/3720) | ESC ESC does not save half-typed command in history | 中断输入时无法暂存已输入内容，长 prompt 编写体验差 | 今日新开，0 评论 |
| [#3715](https://github.com/github/copilot-cli/issues/3715) | /model picker interaction inconsistency | 模型选择步骤仅支持方向键，后续步骤却支持数字直输，交互模式不统一 | 今日新开，0 评论 |

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **1 条 PR 更新**：

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| [#1960](https://github.com/github/copilot-cli/pull/1960) | install: use GITHUB_TOKEN for authenticated GitHub requests | ✅ CLOSED | 安装脚本支持读取 `GITHUB_TOKEN` 环境变量，用于 curl/wget 认证请求和 git ls-remote，避免 rate limit 并支持从私有仓库安装。已关闭（未合并或已合并需进一步确认）。 |

> ⚠️ 今日 PR 数量极少，社区贡献活动处于低谷期。

---

## 5. 功能需求趋势

从全部 34 条 Issue 中提炼出以下 **5 大功能方向**：

### ① 交互体验精细化（8 条）
- Vim 输入模式 ([#13](https://github.com/github/copilot-cli/issues/13))
- ESC ESC 历史暂存 ([#3720](https://github.com/github/copilot-cli/issues/3720))
- 会话内暂停/追加指令 ([#1928](https://github.com/github/copilot-cli/issues/1928))
- Agentic loop 视觉分隔 ([#3718](https://github.com/github/copilot-cli/issues/3718))
- /model 选择器交互一致性 ([#3715](https://github.com/github/copilot-cli/issues/3715))
- ask_user 多行输入显示异常 ([#3722](https://github.com/github/copilot-cli/issues/3722))

**趋势**：用户对 CLI 交互细节的要求已从"能用"转向"好用"，类 IDE 的编辑体验成为期待。

### ② Windows 平台适配（6 条）
- WSL 启动延迟 ([#3652](https://github.com/github/copilot-cli/issues/3652))
- 无法卸载 ([#3662](https://github.com/github/copilot-cli/issues/3662))
- 路径正反斜杠问题 ([#3719](https://github.com/github/copilot-cli/issues/3719))
- 终端复制选中失效 ([#3724](https://github.com/github/copilot-cli/issues/3724))
- MCP server 无限重生 ([#3701](https://github.com/github/copilot-cli/issues/3701))
- ReFS/Dev Drive 沙箱限制 ([#3712](https://github.com/github/copilot-cli/issues/3712))

**趋势**：Windows 是今日 Issue 最集中的平台，覆盖安装、卸载、路径、终端、文件系统等全链路。

### ③ 插件与 Hooks 系统（3 条）
- preToolUse 钩子不触发 ([#2540](https://github.com/github/copilot-cli/issues/2540))
- sessionStart 钩子不执行 ([#2201](https://github.com/github/copilot-cli/issues/2201))
- userPromptSubmitted 增加 updatedPrompt 输出字段 ([#3713](https://github.com/github/copilot-cli/issues/3713))

**趋势**：插件系统的可靠性和能力边界是社区长期关注点，尤其是安全审计类钩子。

### ④ 模型管理与 BYOK（4 条）
- BYOK 禁用流式输出 ([#3717](https://github.com/github/copilot-cli/issues/3717))
- /model 切换支持 BYOK/本地模型 ([#3709](https://github.com/github/copilot-cli/issues/3709))
- 低成本/开源模型支持 ([#3707](https://github.com/github/copilot-cli/issues/3707))
- 函数调用 regression ([#3716](https://github.com/github/copilot-cli/issues/3716))

**趋势**：BYOK 用户希望获得与 GitHub 托管模型同等的控制力和可见性。

### ⑤ 多会话与并发管理（2 条）
- 多并发会话管理工具 ([#2966](https://github.com/github/copilot-cli/issues/2966))
- 后台子代理静默挂起 ([#3547](https://github.com/github/copilot-cli/issues/3547))

**趋势**：随着 autopilot/yolo 模式普及，多会话编排能力成为进阶用户刚需。

---

## 6. 开发者关注点总结

| 痛点 | 典型表现 | 紧迫度 |
|------|----------|--------|
| **Windows 平台体验割裂** | 安装/卸载/路径/终端全链路问题，WSL 延迟高达 80 秒 | 🔴 高 |
| **插件 Hooks 不可靠** | preToolUse、sessionStart 等核心钩子不触发，影响安全审计场景 | 🔴 高 |
| **交互体验不够精细** | 缺少 Vim 模式、暂停能力、历史暂存、视觉分隔等 | 🟡 中 |
| **模型选择灵活性不足** | BYOK 用户无法在会话中切换模型，低成本模型选项少 | 🟡 中 |
| **后台 Agent 可观测性差** | 子代理静默挂起无日志，调试困难 | 🟡 中 |
| **企业部署障碍** | MCP Registry URL 构造错误、OTel 缺少 mTLS 支持 | 🟢 中低 |

---

> 📊 **数据概览**：34 Issues 更新 · 1 PR 更新 · 0 Releases · 今日新开 Issue 12 条 · 今日关闭 Issue 4 条
> 
> 🔗 项目地址：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-09

---

## 1. 今日速览

过去 24 小时内社区活跃度较低，**无新版本发布、无新 PR 合并**。值得注意的动向是，**多个用户反馈最新版本 0.11.0 出现 API Key 认证静默失效、`@filename` 参数不兼容等回归性 Bug**，社区对新版本中认证链路和工作流变更感到困惑。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**，本节暂略。

---

## 3. 社区热点 Issues

### 🔴 Issue #2441 — `@filename` 参数在新版本中疑似不再被支持
- **链接**: [MoonshotAI/kimi-cli #2441](https://github.com/MoonshotAI/kimi-cli/issues/2441)
- **重要性**: 高。文件引用（`@filename`）是 CLI 工作流中高频使用的交互方式，回归直接影响用户的日常使用习惯。目前尚无官方回复。

### 🔴 Issue #2442 — API Key 认证在"登录"后静默被移除（Regression）
- **链接**: [MoonshotAI/kimi-cli #2442](https://github.com/MoonshotAI/kimi-cli/issues/2442)
- **重要性**: 高。用户报告在 macOS 上从旧版本升级后，原本通过 API Key 认证的工作流程在 0.11.0 中被静默移除，属于认证链路的严重回归。目前尚无评论与官方回应。

### Issue #2436 — 安装后无法确定认证方式（Kimi 似乎"无法下定决心"）
- **链接**: [MoonshotAI/kimi-cli #2436](https://github.com/MoonshotAI/kimi-cli/issues/2436)
- **重要性**: 中。反映安装/首次配置阶段的认证流程不清晰，有一定社区共鸣（1 条评论、0 👍）。

### Issue #2376 — (已关闭) 建议在 GitHub Pages 文档增加弃用 Banner
- **链接**: [MoonshotAI/kimi-cli #2376](https://github.com/MoonshotAI/kimi-cli/issues/2376)
- **重要性**: 中。官方已关闭此 Issue，说明维护者关注文档一致性问题，并认可 Python 版 → TypeScript 重写（`kimi-code`）的迁移方向。

---

## 4. 重要 PR 进展

过去 24 小时内**无新 PR 更新或合并**，本节暂略。

---

## 5. 功能需求趋势

基于近期 Issues 可提炼出以下**三大功能方向**：

| 方向 | 典型表现 | 代表 Issues |
|:-----|:---------|:------------|
| **认证链路稳定性** | API Key 与 `/login` 切换导致工作流静默失效 | #2442, #2436 |
| **参数兼容性（Break Change）** | `@filename`、CLI 参数行为变更未明确提示 | #2441 |
| **文档与迁移指引** | Python → TypeScript 重写后，文档缺乏统一入口/弃用 banner | #2376 (已关闭) |

---

## 6. 开发者关注点（高频痛点）

- **认证割裂感**: 用户反馈在版本升级后，认证方式（API Key ↔ `/login`）出现静默断层，既无迁移提示也无回滚方式。
- **Breaking Change 不透明**: `@filename` 等常用参数在新版本中行为改变，却无明确 Changelog 说明。
- **文档版本混乱**: `kimi-cli` (Python) 与 `kimi-code` (TypeScript) 两套存储的文档入口未统一，导致新手无从下手。

---

> 📌 **今日关注**: Issue #2441、#2442 均集中于 0.11.0 版本的认证与参数回归，建议维护者关注并在 Changelog 或 FAQ 中补充说明。


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-09

---

## 一、今日速览

今日 OpenCode 社区活跃度较高，过去 24 小时内共产生约 50 条 Issue 更新和 50 条 PR 更新，但**无新版本发布**。社区焦点集中在三个方向：**Bedrock 兼容性与 SigV4 签名问题集中爆发**（多条 Issue 和 PR 跟进）、**v1.16.x 回归 bug 持续被报告**（渲染崩溃、SQLite 约束失败、空白响应）、以及**Session 持久化与生命周期管理**的长期功能诉求持续获得高关注。

---

## 二、版本发布

过去 24 小时内无新 Release。

---

## 三、社区热点 Issues（精选 10 条）

### 🔥 高热度 / 高讨论度

| # | Issue | 核心内容 | 为何重要 | 社区反应 |
|---|-------|---------|---------|---------|
| 1 | **#27167** [FEATURE] Add native session goals with `/goal` | 提议增加原生的持久化会话目标/生命周期管理功能，通过 `/goal` 命令在会话中设定并追踪目标 | 这是社区呼声最高的功能之一（**37 条评论、64 👍**），反映了用户对跨会话任务管理、长周期 Agent 工作流的强烈需求 | 讨论持续近一个月，参与者众多，已进入设计讨论阶段 |
| 2 | **#9387** [FEATURE] `opencode session export` to markdown or json | 请求增加会话导出为 Markdown 或 JSON 的功能 | 历史悠久的老需求（1 月提出），近期再次被激活（11 条评论），说明用户对会话归档、审计和分享的需求始终未得到满足 | 8 👍，社区反复提及 |
| 3 | **#29548** OpenAI provider headers timeout after 10000ms on 1.15.11 | 从 1.14.28 升级到 1.15.11 后，OpenAI provider 在 10 秒 header 超时后报错；手动增大 `headerTimeout` 可修复 | 典型的**版本回归 bug**，影响 OpenAI 用户的日常使用，可能涉及 provider 超时配置变更 | 11 条评论，已确认修复方案（修改配置），但期望官方修复默认值 |

### 🐛 关键 Bug

| # | Issue | 核心内容 | 为何重要 | 社区反应 |
|---|-------|---------|---------|---------|
| 4 | **#30948** amazon-bedrock provider returns empty output against Bedrock-compatible gateway in 1.16.0 | 1.16.0 中 `amazon-bedrock` 对兼容 gateway 返回空输出，之前版本正常 | Bedrock 兼容性是**高频痛点**，此次是版本升级导致的回归 | 8 条评论、4 👍，已关闭（但用户仍活跃询问） |
| 5 | **#31349** API requests to Bedrock Mantle's OpenAI Responses API fail — signature mismatch | 使用 Bedrock Mantle 的 OpenAI Responses API 时 SigV4 签名不匹配 | 涉及 AWS 安全签名机制，影响企业级用户 | 5 条评论，**同日即有 PR 修复**（#31429），响应迅速 |
| 6 | **#31204** BUG: `session_message.seq` NOT NULL constraint failed on agent-switched sessions | 6 月 3-5 日的 migration 引入 `session_message` 投影表后，agent 切换时触发 SQLite NOT NULL 约束失败 | **较严重的回归 bug**，直接导致 agent 切换会话崩溃 | 4 条评论、2 👍，同日有重复报告（#31413、#31412） |
| 7 | **#31404** `run --format json` does not stream text events to stdout (v1.16.2) | 非交互模式下 JSON 格式未流式输出 text/reasoning 事件，仅输出 `step_start`，破坏 headless 集成 | 影响 CI/CD 和自动化流程中的 JSONL 消费 | 2 条评论，**同日即有 PR 修复**（#31434） |
| 8 | **#31409** FreeModel provider returns blank/empty responses (v1.16.2) | FreeModel provider 在 1.16.2 中返回空白响应，但 curl 直接调用 API 正常 | 又一个 **v1.16.x 回归**，影响使用免费模型的用户 | 2 条评论，已关闭 |

### 💡 值得注意

| # | Issue | 核心内容 | 为何重要 |
|---|-------|---------|---------|
| 9 | **#16077** [FEATURE] Persistent Session Memory | 请求支持从本地文件加载先前对话上下文，实现跨会话连续性 | 与 #27167 形成互补，代表社区对**记忆/持久化**需求的两大方向：一是会话内目标追踪，二是跨会话上下文恢复 |
| 10 | **#31247** Opus 4.8 via GitHub Copilot leaks repeated literal tool-call text | Claude Opus 4.8 在长工具密集型会话中泄漏字面量工具调用文本（如 `call read`、`<invoke>` 标记）并触发 400 错误 | 上游模型行为问题，但 OpenCode 需要更好的防御性处理 |

---

## 四、重要 PR 进展（精选 10 条）

### ✅ 已合并 / 已关闭

| # | PR | 类型 | 内容摘要 |
|---|-----|------|---------|
| 1 | **#31429** | 🔧 Bug Fix | **修复 Bedrock Mantle SigV4 签名不匹配问题**：在 AI SDK 序列化前剥离 Responses API item ID，避免变更已签名请求体。对应 #31349 |
| 2 | **#31434** | 🔧 Bug Fix | **修复 `--format json` 流式输出不完整**：在 session idle 前排空 (drain) 待处理事件，防止 text/step-finish 事件丢失。对应 #31404 / #31435 |
| 3 | **#31428** | 🔧 Bug Fix | **修复 Gboard 自动补全导致文本重复**：解决 Android 上 xterm.js 输入框中 Gboard suggestion 触发文本重复问题 |
| 4 | **#31431** | ✨ Feature (POC) | **支持不启动本地 sidecar 直接打开应用**：概念验证，允许在无 sidecar 环境下启动 OpenCode Desktop |
| 5 | **#26389** | 🔧 Bug Fix | **修复 `debug skill` stdout 刷新问题**：解决 JSON 被截断导致 `opencode debug skill \| jq` 失败 |
| 6 | **#26387** | 🔧 Bug Fix | **TUI 乐观渲染已提交提示词**：使用客户端生成的消息 ID 立即插入本地存储，提升 TUI 响应速度 |
| 7 | **#26367** | ✨ Feature | **Console 自助修改邮箱流程**：为 OpenCode Console / Go / Zen 账户添加自助邮箱变更功能 |

### 🔄 开放中 / 待审核

| # | PR | 类型 | 内容摘要 |
|---|-----|------|---------|
| 8 | **#31436** ⭐ | 🔧 Performance | **修复 LLM 模块 4 个性能问题**：消除 `sameModel` 同义反复调用、添加查询限制、去重 agent 名称查找 |
| 9 | **#31432** | 🔧 Performance | **全面添加查询限制**：为 session 列表、消息、shell 消息、steer promotion 和 parts 添加分页限制，防止大数据集下的无界查询 |
| 10 | **#31357** | ✨ Feature | **支持 `streaming: false` 配置**：允许用户对不支持流式传输或流式输出异常的后端禁用 streaming，回退到完整响应 |
| — | **#30477** | ✨ Feature | **vLLM 支持 `reasoning` 作为 interleaved 字段选项**：扩展 vLLM 提供商的 reasoning field 兼容性 |

---

## 五、功能需求趋势

从今日数据中可归纳出社区最关注的 **5 大功能方向**：

1. **🏗️ Session 持久化与生命周期管理**（最高频）
   - `#27167`（`/goal` 命令，64 👍）、`#9387`（会话导出）、`#16077`（跨会话记忆加载）、`#16960`（Compaction 保留 AGENTS.md 上下文）
   - 趋势：用户不再满足于单次会话交互，期望 OpenCode 成为**长期 AI 协作伙伴**

2. **🔌 模型提供商兼容性**
   - Bedrock 相关：`#30948`、`#31349`、`#31430`（Bedrock Mantle 空响应）、`#21737`（Anthropic 自定义 baseURL API key 丢失）
   - 新增模型/变体：`#31180`（MiniMax M3 thinking mode）
   - 趋势：**AWS Bedrock 生态成为新的兼容性地雷区**，需要大量适配工作

3. **💻 Web UI / Desktop 编辑器增强**
   - `#13430`（Web UI 中 `file:line` 可点击跳转）、`#31406`（Web UI 内置编辑器打开文件）、`#31427`（Gboard 移动端兼容性）
   - 趋势：OpenCode 正从纯 TUI 工具向**多端体验**演进

4. **🔧 CLI / 自动化集成**
   - `#31404`（`--format json` 流式输出）、`#31402`（Vestige MCP server 文档征集）、`#25293`（插件 `@latest` 缓存 pinned 到旧版本）
   - 趋势：服务器和 CI/CD 场景下的**无头 (headless) 使用模式**需求增长

5. **⚡ 性能与稳定性**
   - `#31436`、`#31432`（PR 层面已在修复无界查询）、`#15161`（Firebase MCP 启动时大量 spam 警告）
   - 趋势：随着项目规模增长和插件增多，**启动性能和查询效率**成为新瓶颈

---

## 六、开发者关注点与高频痛点

### 🚨 紧急痛点（需立即关注）

| 痛点 | 影响范围 | 具体表现 |
|------|---------|---------|
| **v1.16.x 版本回归密集** | 大量升级用户 | 渲染崩溃（`#31400`）、SQLite 约束失败（`#31204`）、FreeModel 空白响应（`#31409`）、JSON 流式输出缺失（`#31404`）——建议暂时停留在 1.15.13 |
| **Bedrock 兼容性全面告警** | AWS 用户群 | 空输出（`#30948`）、签名不匹配（`#31349`）、Mantle GPT-5.5 空响应（`#31430`）——3 条 Issue 集中在同一方向，建议优先级提升 |
| **Agent 切换会话崩溃** | 使用多 agent 的用户 | SQLite `session_message.seq` NOT NULL 约束失败（`#31204`、`#31413`、`#31412`）为同一 bug 的重复报告，影响涉及 API 和 CLI 两条路径 |

### 📢 长期诉求

- **"Session 记忆"已成为社区第一功能需求**：从 `/goal`（会话内目标）到 persistent memory（跨会话上下文），用户在使用 OpenCode 处理复杂长任务时，最大的挫败感来源于"每次重新开始"。
- **Web/Desktop 体验追赶 TUI**：随着 OpenCode Desktop 的推出，Web 端和桌面端的 UX 差距正在被用户敏锐地感知（可点击文件路径、内置编辑器、移动端兼容性）。
- **调试和可观测性工具不足**：`#26389`（debug skill JSON 截断）和 `#31404`（--format json 不输出）都指向同一问题——开发者在排查问题时缺乏可靠的数据获取手段。

### ✅ 积极信号

- 社区贡献活跃：多个 PR 由外部开发者提交并在同日获得合并（如 #31429、#31434），说明社区有能力**自举修复**。
- 性能优化类 PR（#31436、#31432）来自代码审计发现而非用户报告，体现了部分贡献者的**前瞻性投入**。

---

> **日报生成时间**: 2026-06-09
> **数据来源**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)
> **下期预告**: 重点关注 Bedrock 相关修复进展、v1.17 是否包含 SQLite 回归修复、以及 `/goal` 功能的设计讨论走向

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-09

---

## 1. 今日速览

Pi 发布 **v0.79.0**，核心新增「Project Trust」项目信任门控功能，随即在社区引发大量讨论和反馈。围绕该 Trust 机制的改进 PR（`alwaysTrust` 配置）、多个 provider 补丁（Azure、Bedrock Mantle）、以及上下文压缩/CPU 性能修复同时高强度推进。社区当日产出活跃，新增 Issue 42 条、PR 22 条。

---

## 2. 版本发布

### v0.79.0

- **Project Trust（项目信任门控）**：Pi 现在会在加载项目级 settings、资源、instructions 和 packages 之前询问用户是否信任该项目，提供 `--approve` / `--no-approve` 参数支持非交互模式。
  - 链接：[项目 Trust 文档](https://github.com/earendil-works/pi/blob/v0.79.0/README.md#project-trust)
  - 关联 Issue/PR：[#5515](https://github.com/earendil-works/pi/pull/5515)（添加 `alwaysTrust` 设置跳过门控）、[#5523](https://github.com/earendil-works/pi/pull/5523)（暴露 `isProjectTrusted` 给扩展使用）、[#5516](https://github.com/earendil-works/pi/issues/5516)（release notes 链接 404）

---

## 3. 社区热点 Issues（Top 10）

| # | 热度 | 说明 |
|---|------|------|
| **#5514** | 💬14 👍4 | **Project Trust 功能反馈** — 信任门控刚上线即被视为高争议特性。社区中大量用户对新项目信任提示感到厌烦，尤其在不同设备间重复确认。已有跟进 PR 添加 `alwaysTrust` 开关。 |
| **#4180** | 💬10 | **链接不再可点击** — 近期更新后 Markdown 超链接和裸 URL 均失去交互能力，严重影响信息获取效率。该 Bug 从 5 月延续至今仍未修复。 |
| **#5464** | 💬6 | **本地模型 3-5 分钟"Working"延迟** — 使用 Ollama 本地模型（如 ministral3:8b）时，每条消息均有长达数分钟的 unreasonable 延迟，即使是简单会话中发送"Hi"。 |
| **#5363** | 💬6 👍3 | **新增 amazon-bedrock-mantle provider** — 请求为使用 OpenAI 兼容 API 的 Bedrock Mantle 模型添加 provider，现有 Converse API 不兼容。已有 PR #5509 推进中。 |
| **#5286** | 💬6 | **GitHub Copilot 定价信息缺失** — Copilot 早已改为按 token 计费仍显示 $0.000（订阅），需更新 pricing 数据。 |
| **#5531** | 💬3 | **kimi.com 模型 Thinking 无法关闭** — 设置 `thinking off` 后模型仍在消耗 thinking tokens，影响成本控制。 |
| **#5492** | 💬3 | **大型会话下 CPU 100%** — Footer.render → getContextUsage → sessionManager.getBranch 存在二次方遍历问题，已有修复 PR #5493 合入。 |
| **#5478** | 💬3 | **cwd bridge 未传播到 tools/footer/session** — bash 工具中 `cd` 变更已被捕获但未同步到会话状态，属于工具链核心路径 Bug。 |
| **#5427** | 💬3 👍4 | **OpenAI Codex 传输超时** — SSE 响应头在 10000ms 后超时，会话进行一段时间后连续报错，影响 Codex 订阅用户。 |
| **#5530** | 💬2 | **azure-openai-responses 缺少 store: false** — 导致 Azure 进入 stateful 模式，服务端意外丢弃 reasoning objects，已有关联 PR #5524 修复。 |

---

## 4. 重要 PR 进展（Top 10）

| # | 状态 | 说明 |
|---|------|------|
| **#5515** | ✅已合入 | **feat: 添加 alwaysTrust 设置跳过项目信任门控** — 直接回应 #5514 社区反馈，允许用户完全禁用 trust prompt。 |
| **#5524** | ✅已合入 | **fix: Azure OpenAI Responses 请求补上 store: false** — 三行修复，解决 Azure 端 reasoning objects 丢失问题，对应 #5530。 |
| **#5493** | ✅已合入 | **perf: 避免二次方会话分支遍历** — 解决大型会话下 Footer 悬挂 100% CPU 问题，对应 #5492。 |
| **#5513** | ✅已合入 | **fix: 通过 shouldStopAfterTurn 实施 mid-turn 上下文窗口限制** — 修复长工具循环中 compaction 检查滞后导致上下文超窗口问题，对应 #5512。 |
| **#5521** | ✅已合入 | **feat: rewind 时恢复文件（checkpoints）** — 为会话回退机制添加文件恢复功能，解决 transcript 与磁盘状态不一致问题，对应 #5522。 |
| **#5518** | ✅已合入 | **feat: 可配置的剪贴板图片存储路径** — 新增 `images.storagePath` 设置项，默认保持 `os.tmpdir()`，对应 #5414/#5520。 |
| **#5509** | 🔄开放中 | **feat: 新增 Amazon Bedrock Mantle OpenAI Responses provider** — 支持 GPT 5.5/5.4 模型，对应 Issue #5363。 |
| **#5527** | 🔄开放中 | **fix: 从推理 profile ARN 中提取 region** — 修复 aws bedrock provider AWS_REGION 不一致问题。 |
| **#5510** | ✅已合入 | **enhance: 上下文压缩和 token 估算改进** — 优化 coding-agent 的 compaction 精度。 |
| **#5499** | ✅已合入 | **fix(tui): 光标移动时重新查询 autocomplete picker** — 修复光标移动后补全列表失效问题，对应 #5496。 |

---

## 5. 功能需求趋势

从本周 Issue/PR 分布来看，社区最集中的功能方向如下：

🔹 **新 Provider / 模型支持**
- Amazon Bedrock Mantle（OpenAI 兼容 API）(#5363 / PR #5509)
- Wafer provider 请求 (#5517)
- Azure Cognitive Services URL 支持 (PR #3799)
- Together.ai 模型列表更新 (PR #5505)
- MiniMax-M3 adaptive thinking 支持 (PR #5503)

🔹 **安全与信任模型**
- Project Trust 机制成为最大讨论焦点（#5514 达 14 条评论），同时衍生出 `alwaysTrust` 设置 (#5515) 和扩展 API 暴露 (#5523) 两个跟进 PR。

🔹 **性能与稳定性优化**
- 大型会话 CPU 问题 (#5492/PR #5493)
- 本地模型超长延迟 (#5464)
- 上下文压缩优化 (#5512/PR #5513)
- session 切换服务复用 (#5479/TUI)

🔹 **多账户与配置管理**
- 同一 provider 多账户支持 (#5502)
- `~/.pi/agent` 配置与存储分离 (#5508)
- 可配置文件存储路径 (#5518)

---

## 6. 开发者关注点与高频痛点

**🔴 Project Trust 默认行为争议**
信任门控刚上线便引发大量反弹。核心诉求：提供「全局信任所有项目」的一键开关。### 5515 添加的 `alwaysTrust`设置即为响应，但默认行为与用户体验的平衡仍需后续调整。

**🔴 本地模型延迟不可接受**
使用 Ollama 等本地推理方案的用户遇到 3-5 分钟的 systematic 延迟，严重影响本地模型实用性，需排查 tool loop 与 compaction 交互逻辑。

**🔴 链接交互退化**
#4180 自 5 月起持续存在，社区多次提及可复现，表明 TUI 渲染层的交互能力回归未被充分回归测试覆盖。

**🟡 Codex SSE 超时稳定性问题**
#5427 中用户报告在会话中途出现超时后持续报错，完全不可恢复，影响 Codex 订阅用户的核心工作流。

**🟡 Azure Provider 行为一致性**
分别发现 `store: false` 缺失 (#5530) 和 thinking 控制不一致问题 (#5427)，Azure 端与其他 provider 的对齐程度需要系统梳理。

---

*数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) | 统计时间窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-06-09

---

## 1. 今日速览

今日社区焦点集中在**内存 OOM 问题的修复落地**（PR #4824 已合入）和**ACP/REST 服务层的大规模补全**（PR #4827 新增 29 个 `_qwen/*` 方法）。同时，CI 分支保护缺失导致 main 分支被破坏的问题引发关注，社区呼吁尽快启用 required status checks。多个 daemon 层面的基础设施 PR（空闲会话回收、WebSocket 传输、运行时遥测）同步推进。

---

## 2. 版本发布

**v0.17.1-nightly.20260608.aea34fa2c** 于昨夜发布，主要变更：

- **chore(release)**: v0.17.1 版本发布流程（PR #4742）
- **fix(cli)**: 修复 `/copy` 输出中意外包含模型思维链（thought parts）的问题（@he-yufeng）

> 这是一个 nightly 小版本，核心修复是用户体验层面的——之前复制输出时会把 `<think>` 块的内容也带入剪贴板，现已跳过。

---

## 3. 社区热点 Issues

| # | 标题 | 为何重要 | 社区反应 |
|---|------|---------|---------|
| [#4815](https://github.com/QwenLM/qwen-code/issues/4815) | **BUG: `qwen --resume` 严重 OOM + Escape 键失效** | 🔴 P1 级 bug，100% 复现，长会话恢复后 10 分钟内即 OOM 崩溃，Escape 键完全失灵 | 9 条评论，已关闭（PR #4824 修复） |
| [#4838](https://github.com/QwenLM/qwen-code/issues/4838) | **Hook continuations 跳过 microcompaction 导致内存泄漏** | 🔴 P1，`/goal` 循环中 Hook 分支未触发历史压缩，是 #4815 OOM 的根因之一 | 2 条评论，PR #4823 正在修复 |
| [#4864](https://github.com/QwenLM/qwen-code/issues/4864) | **CI: main 分支缺少 required status checks** | PR #4798 在全部 CI 失败的情况下被合入，导致 main 分支 tsc 编译直接损坏 | 2 条评论，社区呼吁立即修复分支保护规则 |
| [#4821](https://github.com/QwenLM/qwen-code/issues/4821) | **feat: 通过 frontmatter 文件声明式定义 Agent** | 对标 Claude Code 2.1.167 的 Agent 定义方式，降低自定义 Agent 门槛 | 6 条评论，社区讨论活跃 |
| [#4845](https://github.com/QwenLM/qwen-code/issues/4845) | **feat: `/import-config` 一键迁移 Claude 用户配置** | 降低从 Claude Code 切换到 Qwen Code 的迁移成本（MCP、权限、自定义命令等） | 2 条评论，需求明确 |
| [#4782](https://github.com/QwenLM/qwen-code/issues/4782) | **tracking: ACP Streamable HTTP 传输实现状态** | 让 Zed、Goose、JetBrains 等 ACP 原生编辑器可直接连接 `qwen serve` | 3 条评论，PR #4827 正在推进 |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | **tracking: `qwen serve` 能力缺口与优先级 backlog** | 系统性追踪 daemon HTTP/SSE 接口的剩余差距 | 13 条评论（本日最高），长期跟踪 |
| [#4854](https://github.com/QwenLM/qwen-code/issues/4854) | **feat: 允许从独立路径启动避免 agent 杀死自身 session** | 实际开发中 agent 操作 dev server 可能误杀 qwen 自身进程 | 2 条评论，场景真实 |
| [#4869](https://github.com/QwenLM/qwen-code/issues/4869) | **bug: SKILL.md YAML block scalar 解析错误** | `>` / `|` 多行文本被解析为字面量 `>` 字符 | 1 条评论，PR #4870 已跟进修复 |
| [#4872](https://github.com/QwenLM/qwen-code/issues/4872) | **feat: 自动化 CHANGELOG** | 参考 Claude Code 维护自动同步的 CHANGELOG.md | 1 条评论，文档体验改善 |

---

## 4. 重要 PR 进展

| # | 标题 | 内容摘要 | 状态 |
|---|------|---------|------|
| [#4824](https://github.com/QwenLM/qwen-code/pull/4824) | **fix: 防止 OOM — API/UI 历史压缩 + 内存压力触发** | 修复 #4815：在 Hook 消息路径上启用 microcompaction，UI 历史同步压缩，内存压力时主动触发 | ✅ 已合入 |
| [#4827](https://github.com/QwenLM/qwen-code/pull/4827) | **feat(serve): ACP/REST 对齐 — 29 个新 `_qwen/*` 方法** | 新增 session 扩展、生产加固等方法，实现完整的 ACP/REST 对等（+935 行） | 🟢 Open |
| [#4823](https://github.com/QwenLM/qwen-code/pull/4823) | **fix: 恢复的 goal continuation 参与 microcompaction** | 修复 #4838，让恢复和长周期 goal  continuation 也能触发过期 tool-result 清理 | 🟢 Open |
| [#4871](https://github.com/QwenLM/qwen-code/pull/4823) | **refactor: 移除 GitService，`/restore` 迁移到 FileHistoryService** | 统一文件恢复系统，消除两套并行机制 | 🟢 Open |
| [#4870](https://github.com/QwenLM/qwen-code/pull/4870) | **fix(skills): 使用完整 YAML parser 支持 block scalar** | 修复 #4869，将 skill frontmatter 解析切换到 `yaml` npm 包 | 🟢 Open |
| [#4868](https://github.com/QwenLM/qwen-code/pull/4868) | **feat(telemetry): 运行时内存/CPU 采样 + OTel 指标上报** | 新增 RuntimeSampleRing，捕获 RSS、堆、CPU 使用率并上报 | 🟢 Open |
| [#4833](https://github.com/QwenLM/qwen-code/pull/4833) | **feat(daemon): 空闲会话自动回收** | 定期扫描无 SSE 订阅者、无活跃 prompt 的超时会话并关闭（默认 30 分钟 TTL） | 🟢 Open |
| [#4773](https://github.com/QwenLM/qwen-code/pull/4773) | **feat(serve): ACP WebSocket 传输（RFD Streamable HTTP 第二阶段）** | 新增 WebSocket 传输适配器，与 SSE 共存 | 🟢 Open |
| [#4847](https://github.com/QwenLM/qwen-code/pull/4847) | **fix(ci): PR review 请求即时确认** | `@qwen-code /review` 触发后立即在 PR 中回复确认评论，避免用户误以为未触发 | 🟢 Open |
| [#4564](https://github.com/QwenLM/qwen-code/pull/4564) | **feat(stats): token 用量持久化与成本可见性** | 扩展 `/stats` 支持日/月 token 用量、模型/认证类型 breakdown、CSV/JSON 导出 | 🟢 Open |

---

## 5. 功能需求趋势

从今日 32 条 Issues 中提炼出社区最关注的五大方向：

### 🔧 ① 稳定性与性能（最高优先级）
OOM 问题（#4815、#4838）、内存压力监控（PR #4868）、shell 输出截断（PR #4520、#4524）、空闲会话回收（PR #4833）。长会话稳定性是社区最痛的点。

### 🌐 ② Daemon / 服务层能力
ACP Streamable HTTP（#4782、PR #4827）、WebSocket 传输（PR #4773）、REST 方法补全。社区正在系统性地将 `qwen serve` 打造成可被各类 IDE 原生集成的服务。

### 🤖 ③ Agent 系统增强
声明式 Agent 定义（#4821）、Dynamic Workflows 移植（#4721）、`/fork` 后台 fork agent（#4757）、AUTO 模式安全加固（#4538）。对标 Claude Code 的 Agent 能力是明确方向。

### 🔄 ④ 开发者体验与迁移
Claude 配置一键导入（#4845）、自动化 CHANGELOG（#4872）、`/copy N` 复制历史消息（#4744）、npm 包名修正（PR #4860）。降低使用门槛和改善日常体验。

### 🔌 ⑤ 工具与集成
WebSearch 工具（#4801、#3841）、`@` 文件补全子模块支持（#4568）、skill 系统改进（#4837、#4869）。

---

## 6. 开发者关注点

1. **长会话内存管理是最大痛点**：多个 P1/P1 级 bug 围绕 OOM 展开，社区对 microcompaction 覆盖不完整问题反应强烈。PR #4824 已合入但根因修复（PR #4823）仍在 review。

2. **CI/CD 流程可靠性受质疑**：#4864 暴露了 main 分支无强制 status check 的严重隐患，开发者对代码质量门禁的缺失表示担忧。

3. **从 Claude Code 迁移的需求明确且具体**：不仅是功能对等（Agent 定义、Dynamic Workflows），还包括配置迁移（#4845）和文档对标（CHANGELOG），说明 Qwen Code 正在被作为 Claude Code 的直接替代方案评估。

4. **Daemon 模式正在成为一等公民**：大量 PR 集中在 serve 层（ACP 传输、REST 方法、会话回收、WebSocket），表明社区正在将 Qwen Code 从纯 CLI 工具向可服务化的 Agent 平台演进。

5. **安全边界意识增强**：AUTO 模式防自修改（#4538）、aes-128-ecb 加密算法讨论（#4783）、sandbox 子进程误杀（PR #4865），安全相关讨论明显增多。

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 统计时间：2026-06-09*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*