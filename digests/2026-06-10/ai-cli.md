# AI CLI 工具社区动态日报 2026-06-10

> 生成时间: 2026-06-10 00:42 UTC | 覆盖工具: 8 个

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
**2026-06-10 | OWL 出品**

---

## 1. 生态全景

AI CLI 工具赛道已从"能否用"进入**「谁更好用、更可靠、更安全」**的深水区竞争。今日最突出的信号是：**Claude Fable 5 / Mythos 5 模型发布成为全生态事件**，Pi、Claude Code、OpenAI Codex 三端同步跟进适配，顶级模型能力已成为各工具的"军备竞赛"标配。与此同时，**安全策略与用户体验的冲突全面爆发**——Claude Code 安全分类器误报、Pi 的 Project Trust 功能遭社区反弹、Gemini CLI Auto Memory 密钥泄露风险，表明各家在"信任模型"设计上仍处于探索期。

**ACP 协议正在成为 CLI 工具与 IDE 生态对接的通用语言**，Qwen Code 和 OpenCode 均在加速实现 Streamable HTTP 传输，未来 CLI 工具将更多以"后端 Agent Server"形态嵌入编辑器。Windows 平台体验是全行业的共同短板，Claude Code、Codex、Copilot CLI、Qwen Code 均收到集中投诉，跨平台一等公民仍在路上。

---

## 2. 各工具活跃度对比

| 工具 | Issues (活跃/新增) | PRs (活跃/合并) | 最新版本 | 发布状态 |
|------|-------------------|-----------------|----------|----------|
| **Claude Code** | 12 条热点 | 10 条活跃 | v2.1.170 | ✅ 今日发布 |
| **OpenAI Codex** | 50 条活跃 | 50 条活跃 | rust-v0.139.0 | ✅ 今日发布 |
| **Gemini CLI** | ~10 条热点 | 10 条活跃 | v0.47.0-preview.0 | ✅ 今日发布 |
| **GitHub Copilot CLI** | 29 条更新 | 0 条合并 | v1.0.61 | 昨日发布 |
| **Kimi Code CLI** | 1 条活跃 | 0 | v0.12.0 | 无新发布 |
| **OpenCode** | 10 条热点 | 10 条活跃 | 无新版本 | 无新发布 |
| **Pi** | 50 条更新 | 23 条更新 (10 合并) | v0.79.1 | ✅ 今日发布 |
| **Qwen Code** | 28 条更新 | 50 条活跃 | v0.18.0-preview.1 | ✅ 今日发布 |

> **活跃度排序**：Codex ≈ Qwen Code > Pi > Claude Code > Copilot CLI > Gemini CLI > OpenCode > Kimi Code

---

## 3. 共同关注的功能方向

### 🤖 多 Agent 编排与自治能力
| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | Agent 自主触发 compaction、per-agent 模型配置、fleet 场景下的模型策略 |
| **Qwen Code** | Agent Team（并行子 Agent 协调）、Dynamic Workflows（移植自 Claude Code）、subagent 行为一致性 |
| **OpenCode** | Task 子 Agent 模型覆盖、auto-compaction 稳定性 |
| **Gemini CLI** | 子代理可靠性（虚假成功报告、无限挂起、权限绕过） |

**共识**：Agent 已从单点工具调用走向多 Agent 协作范式，但子代理的状态透明度、执行边界控制、模型差异化配置是当前共同的工程挑战。

### 🔒 安全策略与信任模型
| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | Fable 5 安全分类器误报（打招呼、健康数据分析被拦截），静默降级不透明 |
| **Pi** | Project Trust 功能遭社区反对——已信任项目仍反复询问，跨设备状态不一致 |
| **Gemini CLI** | Auto Memory 先读取对话后脱敏，存在密钥泄露风险；路径遍历漏洞需修复 |
| **Qwen Code** | 项目级 `.mcp.json` 审批语义、`--safe-mode` 禁用所有自定义 |
| **Copilot CLI** | 插件 preToolUse hook 回归，影响权限控制和审计 |

**共识**：安全功能的设计正从"一刀切拦截"走向"细粒度信任管理"，但各家均在安全策略与用户体验之间寻找平衡点，误报率和授权频率是核心矛盾。

### 🖥️ Windows 平台体验
| 工具 | 具体问题 |
|------|----------|
| **Claude Code** | Daemon 管道未创建、工具调用解析失败、Cowork 服务无法禁用 |
| **OpenAI Codex** | 沙箱 spawn 失败、Shell 配置异常、上下文指示器缺失 |
| **GitHub Copilot CLI** | Ctrl+滚轮缩放被拦截、Ctrl+Shift+C 复制失效、编辑器集成问题 |
| **Qwen Code** | Windows SYSTEM 用户安装路径问题 |

**共识**：Windows 是全行业共同的体验洼地，从底层管道/沙箱到上层快捷键拦截，问题贯穿整个技术栈。

### 🔌 协议标准化与 IDE 集成
| 工具 | 具体诉求 |
|------|----------|
| **Qwen Code** | ACP Streamable HTTP 传输、29 个新 `_qwen/*` 方法、与 Zed/JetBrains 无缝对接 |
| **OpenCode** | PWA 支持、自定义 Provider 生态完善 |
| **GitHub Copilot CLI** | CLI 与 VS Code 模型列表一致性、IDE 集成深度 |

**共识**：CLI 工具正在从独立终端程序演进为"Agent Server"，ACP/REST 协议标准化是实现编辑器无关集成的关键。

### 🧠 模型能力与管控
| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | Fable 5 发布但安全策略拖累体验；per-agent 模型配置需求 |
| **OpenAI Codex** | GPT-5.5 大面积 404 不可用；`/undo` 恢复指令（274👍） |
| **Pi** | Fable 5/Mythos 5 多 Provider 适配；本地模型 3-5 分钟延迟 |
| **Gemini CLI** | Vertex AI 模型映射修复；Gemini 3.1 Flash Lite 转正 GA |

**共识**：顶级模型发布节奏加快，但模型可用性（路由/元数据/区域化）、管控粒度（per-agent 配置）、本地模型体验仍是普遍痛点。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|-------------|
| **Claude Code** | **企业级 Agent 开发平台** | 专业开发者、企业团队 | 强 Agent 能力（compaction、fleet、workflow）、MCP 生态、插件市场；但 Windows 体验和稳定性是短板 |
| **OpenAI Codex** | **全栈开发助手（CLI + Desktop）** | 个人开发者、全栈工程师 | Rust CLI + macOS Desktop 双轨并进；Noise 加密传输、实时语音 Handoff 代表安全+多模态方向；`/undo` 缺失是最大体验缺口 |
| **Gemini CLI** | **Google 生态深度集成** | Google Cloud 用户、开源贡献者 | 强于 Vertex AI 集成、A2A Server 协议、Auto Memory 系统；子代理可靠性和权限控制是当前重点改进方向 |
| **GitHub Copilot CLI** | **GitHub 工作流原生 Agent** | GitHub 重度用户、企业 DevOps | 与 GitHub Actions/PR/Issue 深度集成；插件 Hook 系统、git worktree 管理是差异化方向；v1.0.60 回归集中暴露测试覆盖不足 |
| **Kimi Code CLI** | **轻量级代码助手** | 个人开发者、Moonshot 生态用户 | 功能精简、社区规模小；Edit 工具稳定性是当前核心问题；适合低复杂度场景 |
| **OpenCode** | **开源多模型 Agent 平台** | 自托管用户、多模型需求者 | 强自定义 Provider 支持、models.dev 集成、PWA/Desktop 多端；内存泄漏和桌面稳定性是主要障碍 |
| **Pi** | **多 Provider 聚合客户端** | 高级用户、多模型重度使用者 | 最广泛的 Provider 支持（Anthropic/Bedrock/OpenRouter/Databricks 等）、Project Trust 安全模型、prompt 模板系统；定位是"模型路由器" |
| **Qwen Code** | **ACP 协议驱动的 Agent 服务器** | 企业用户、IDE 集成开发者 | 强 ACP/REST 协议实现、Agent Team 多 Agent 协作、Dynamic Workflows；战略方向是成为 Agent 后端基础设施 |

---

## 5. 社区热度与成熟度

### 🔥 高活跃度 / 快速迭代
| 工具 | 特征 |
|------|------|
| **OpenAI Codex** | 50 Issues + 50 PRs 同时活跃，社区规模最大；Desktop + CLI 双轨并进，迭代节奏最快；但回归问题频发（v1.0.60 集中爆发），测试覆盖需加强 |
| **Qwen Code** | 28 Issues + 50 PRs，PR 数量最多；Agent Team、Dynamic Workflows、ACP 协议三大战略方向并行推进；社区贡献者活跃（@qqqys、@chiga0、@yiliang114 等），处于快速扩张期 |
| **Pi** | 50 Issues + 23 PRs（10 合并），合并效率最高；Fable 5 适配 PR 在 24h 内密集合并，工程响应速度突出；Project Trust 争议显示社区参与度高 |

### 📈 稳定迭代 / 存量优化
| 工具 | 特征 |
|------|------|
| **Claude Code** | 版本发布节奏稳定（v2.1.170），但 Issue 积压严重（#18435 多账户需求 5 个月未解决）；Fable 5 安全误报是新增风险点 |
| **Gemini CLI** | 预览版迭代（v0.47.0-preview.0），补丁回溯机制完善（stable + preview 双分支）；子代理可靠性和 Auto Memory 安全是长期课题 |
| **GitHub Copilot CLI** | v1.0.61 小版本修复为主；Issue 集中在回归和跨平台体验，无重大新功能推进；处于 v1.0 后的稳定期 |

### 🌱 早期阶段 / 社区待成长
| 工具 | 特征 |
|------|------|
| **Kimi Code CLI** | 仅 1 条活跃 Issue，0 PR，社区规模最小；Edit 工具核心功能稳定性存疑，需提升 Issue 响应速度 |
| **OpenCode** | 社区活跃但无新版本发布；内存泄漏（64👍）和桌面稳定性是阻碍用户增长的主要障碍；支付流程争议影响品牌信任 |

---

## 6. 值得关注的趋势信号

### 📌 趋势一：Agent 协作从"工具调用"走向"多 Agent 编排"
**信号**：Qwen Code 的 Agent Team、Claude Code 的 fleet/workflow、OpenCode 的 Task 模型覆盖、Gemini CLI 的子代理可靠性——所有工具都在解决同一个问题：**如何让多个 Agent 可靠地协同工作**。
**对开发者的价值**：选择工具时应重点评估其子代理状态透明度、失败隔离机制、模型差异化配置能力，这些将成为未来 6-12 个月的核心差异化因素。

### 📌 趋势二：安全策略从"默认拦截"走向"信任模型设计"
**信号**：Claude Code 安全分类器误报、Pi Project Trust 社区反弹、Gemini CLI Auto Memory 脱敏漏洞——三家同日暴露安全策略问题，说明行业尚未找到安全与体验的最优平衡点。
**对开发者的价值**：企业级用户应关注工具是否提供细粒度信任控制（白名单、继承机制、全局开关），而非简单的"全部拦截"或"全部放行"。

### 📌 趋势三：ACP 协议正在成为 CLI-IDE 集成的"USB 接口"
**信号**：Qwen Code 系统性实现 29 个 ACP 方法、OpenCode 推进 Streamable HTTP、Gemini CLI 建设 A2A Server——CLI 工具正在从终端程序演变为 Agent 后端服务。
**对开发者的价值**：如果你需要在 IDE 中嵌入 Agent 能力，优先选择 ACP 协议支持完善的工具（Qwen Code），可大幅降低集成成本。

### 📌 趋势四：Windows 体验是全行业的"阿喀琉斯之踵"
**信号**：Claude Code、Codex、Copilot CLI、Qwen Code 均收到 Windows 相关投诉，问题从底层管道/沙箱到上层快捷键贯穿全栈。
**对开发者的价值**：Windows 用户在选择工具时应将平台兼容性作为权重较高的评估维度，目前 Claude Code 和 Codex 的 Windows 问题积累最多，Qwen Code 的 Windows CI 建设刚起步。

### 📌 趋势五：模型发布节奏已超越工具本身的迭代能力
**信号**：Claude Fable 5 在 Claude Code、Pi 三端同步上线，但每端都出现适配问题（安全误报、thinking 参数不兼容、降级不透明）；GPT-5.5 在 Codex 端大面积 404。
**对开发者的价值**：顶级模型发布 ≠ 立即可用。建议在生产环境中对新模型保持 1-2 周的观察期，关注社区反馈的安全策略、路由稳定性、参数兼容性后再切换。

---

> **总结**：AI CLI 工具生态正处于从"能用"到"好用"的关键转折期。**Agent 编排能力、安全信任模型、ACP 协议标准化、Windows 体验**是未来竞争的四条核心战线。对于技术决策者，建议根据团队场景选择：**企业级 Agent 开发选 Claude Code，多模型聚合选 Pi，IDE 集成选 Qwen Code，GitHub 原生工作流选 Copilot CLI，全栈个人开发选 Codex。**

---

*数据来源：各工具 GitHub 仓库 | 统计时间：2026-06-10 | 报告由 OWL 生成*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截止 2026-06-10）

---

## 1. 热门 Skills 排行

以下按社区讨论热度（评论数、点赞数、更新活跃度）筛选出的最受关注 PR：

| # | Skill / PR | 功能简介 | 状态 |
|---|---|---|---|
| 1 | **skill-quality-analyzer & skill-security-analyzer**（PR [#83](https://github.com/anthropics/skills/pull/83)） | 元技能（meta-skills），用于分析任意 Skill 的质量与安全性，覆盖结构文档、安全边界等 5 个维度。讨论焦点：是否需要官方提供 Skill 审查门槛，防止低质/恶意 Skill 进入生态。 | 🟡 Open |
| 2 | **agent-creator**（PR [#1140](https://github.com/anthropics/skills/pull/1140)） | 用于按任务动态组建专属 Agent 套件，同时修复了多工具并行评估的 bug 并增加 Windows 支持。关注度高的原因：多 Agent 编排是社区最期待的基础能力之一。 | 🟡 Open |
| 3 | **testing-patterns**（PR [#723](https://github.com/anthropics/skills/pull/723)） | 覆盖完整测试栈的 Skill：测试哲学、单元测试 AAA 模式、React 组件测试等。讨论热点：社区希望有一个"通用测试规范"级别的标准 Skill。 | 🟡 Open |
| 4 | **document-typography**（PR [#514](https://github.com/anthropics/skills/pull/514)） | 解决 AI 生成文档中常见的排版问题（孤行、段落底部标题孤立、编号错立）。核心论点："Claude 生成的每份文档都存在这些排版问题，但很少有人主动要求修复。" | 🟡 Open |
| 5 | **ODT skill**（PR [#486](https://github.com/anthropics/skills/pull/486)） | 创建、填充、解析 OpenDocument（.ods/.odts）格式，并转换为 HTML。社区关注度来自对 LibreOffice/ISO 标准文档格式的支持空缺。 | 🟡 Open |
| 6 | **shodh-memory**（PR [#154](https://github.com/anthropics/skills/pull/154)） | 为 AI Agent 提供跨对话的持久记忆系统。讨论焦点：上下文持久化是 Agent 社区长期痛点，该 Skill 提供了一套结构化记忆接口规范。 | 🟡 Open |
| 7 | **ServiceNow platform skill**（PR [#568](https://github.com/anthropics/skills/pull/568)） | 覆盖 ServiceNow 全平台：ITSM、ITOM、ITAM/SAM、FSM、SecOps、IntegrationHub 等。代表企业端 Skill 需求增长趋势。 | 🟡 Open |
| 8 | **n8n-builder & n8n-debugger**（PR [#190](https://github.com/anthropics/skills/pull/190)） | 用于从零构建和调试 n8n 工作流。社区关注点：低代码/无代码自动化编排与 Claude Code 的结合路径。 | 🟡 Open |

> **说明**：以上 PR 均处于 Open 状态，无合并记录，说明官方 Skills 仓库的合入门槛极高或维护资源有限。

---

## 2. 社区需求趋势

从 Issues 中提炼出最迫切的 Skill 需求方向：

### 🔵 企业级与协作能力
- **组织级 Skill 共享**（Issue [#228](https://github.com/anthropics/skills/issues/228)，13 条评论，7 赞）：用户希望 Claude.ai 内直接共享 Skill，而非手动下载/上传。这是当前评论最多的 issue。
- **Skill 命名空间安全**（Issue [#492](https://github.com/anthropics/skills/issues/492)）：社区 Skill 冒充 `anthropic/` 官方命名空间，存在信任边界风险。

### 🟠 平台兼容性
- **Windows 兼容性问题**（Issues [#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)）：`run_eval.py` 和 `run_loop.py` 在 Windows 上完全不可用，涉及子进程调用和编码问题。
- **AWS Bedrock 支持**（Issue [#29](https://github.com/anthropics/skills/issues/29)）：现有 Skills 如何在 Bedrock 环境下运行尚无明确方案。

### 🟡 基础设施与工具链
- **Skill 评估机制修复**（Issue [#556](https://github.com/anthropics/skills/issues/556)，11 条评论）：`run_eval.py` 触发率为 0%，Skill 描述优化循环实质上已经失效。
- **多文件预加载**（Issue [#1220](https://github.com/anthropics/skills/issues/1220)）：当前仅 SKILL.md 自动载入上下文，关联引用文件需手动 Read，大型 Skill 体验差。
- **Skill 重复安装**（Issue [#189](https://github.com/anthropics/skills/issues/189)）：`document-skills` 与 `example-skills` 插件包含相同内容，导致上下文膨胀。

### 🟢 生态发展方向
- **Skill 作为 MCP 暴露**（Issue [#16](https://github.com/anthropics/skills/issues/16)）：将 Skill 功能以 MCP 协议标准化，实现跨工具调用。
- **Agent 治理 Skill**（Issue [#412](https://github.com/anthropics/skills/issues/412)）：政策执行、威胁检测、信任评分、审计追踪等安全治理模式。

---

## 3. 高潜力待合并 Skills

以下 PR 更新活跃、功能明确、具备落地条件：

| PR | 潜力判断 | 理由 |
|---|---|---|
| **agent-creator**（[#1140](https://github.com/anthropics/skills/pull/1140)） | ⭐⭐⭐⭐⭐ | 直接回应 Issue #1120，修复 Windows 兼容性，且 Agent 编排是社区最高频需求之一。最近更新 2026-002。 |
| **testing-patterns**（[#723](https://github.com/anthropics/skills/pull/723)） | ⭐⭐⭐⭐⭐ | 测试类 Skill 尚无官方标准化版本，覆盖面全，实用性强。 |
| **ODT skill**（[#486](https://github.com/anthropics/skills/pull/486)） | ⭐⭐⭐⭐ | 填补 LibreOffice/开源文档格式的生态空白，已有实际使用场景支撑。 |
| **n8n-builder/debugger**（[#190](https://github.com/anthropics/skills/pull/190)） | ⭐⭐⭐⭐ | n8n 社区规模大，与 Claude Code 的自动化编排结合有明确市场。 |
| **skill-quality-analyzer**（[#83](https://github.com/anthropics/skills/pull/83)） | ⭐⭐⭐⭐ | 随着第三方 Skill 增多，官方质量门槛工具将变得越来越必要。 |
| **document-typography**（[#514](https://github.com/anthropics/skills/pull/514)） | ⭐⭐⭐ | 解决的是"所有人都会遇到但没人提"的痛点，合并阻力小。 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：Skills 生态正从"功能扩展"阶段迈向"基础设施完善"阶段——用户不再只关心"有没有某个 Skill"，而是更关注 Skill 的质量评估、跨平台兼容、组织级分发、安全边界和多 Agent 协作等系统性能力。**

具体表现为：
- **质量与安全**：社区自发提出 skill-quality-analyzer 和 skill-security-analyzer，说明生态已需要"守门人"机制。
- **平台碎片化**：Windows 兼容性、Bedrock 支持、多文件预加载等 issue 反映 Skills 运行环境正在多元化。
- **企业级需求崛起**：ServiceNow、组织共享、Agent 治理等需求表明 Skills 正从个人工具走向企业基础设施。
- **评估工具链失效**：`run_eval.py` 触发率归零的问题若不及时修复，将严重影响 Skill 描述优化的迭代效率。

---

# Claude Code 社区动态日报 — 2026-06-10

---

## 1. 📌 今日速览

Claude Code 发布 v2.1.170，正式推出 Mythos 级模型 **Claude Fable 5**，能力超越此前所有公开发布版本，引发社区广泛关注。然而 Fable 5 的安全分类器在首日即收到大量**误报反馈**，涉及正常安全分析、数据分析甚至打招呼均被拦截，导致会话中静默切换回 Opus，成为今日最突出的问题。Windows 端 Daemon 管道服务和会话可靠性 bug 也已经过数周仍未修复。

---

## 2. 🚀 版本发布

### v2.1.170

- **核心亮点：引入 Claude Fable 5（Mythos 级模型）**
  - Anthropic 宣称 Fable 5 的能力超越所有此前公开发布的模型，可通过更新到此版本获取访问权限。
  - 官方公告：https://www.anthropic.com/news/claude-fable-5-mythos-5
- **修复：** Session 相关 bug
- **链接：** [v2.1.170 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.170)

---

## 3. 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 摘要 |
|---|-------|------|------|
| 1 | **#18435** [FEATURE] Desktop 多账户管理与快速切换 | 👍577 / 💬108 | 社区呼声最高的桌面端功能，要求像浏览器 profile 一样管理多个 Claude 并快速切换，方便个人/工作分离。票数极高且持续至今 5 个月未解决，是长期积压的第一大 feature request。 |
| 2 | **#63875** [BUG] 工具调用解析失败导致会话中断（Windows） | 👍87 / 💬57 | 高频工具调用解析错误持续打断正常会话，跨多 session 且无法自恢复，严重影响 Windows 用户日常开发效率，是当前 bug 类最高票。 |
| 3 | **#66728** [P0] Fable 5 安全分类器误报导致静默降级为 Opus（PR review 场景） | 💬2 | 使用 Fable 5 进行 PR review 时，安全分类器自动将模型切换为 Opus 4.8 并打断 tagged 回复流程，对代码审查工作流造成严重影响，发布当天即被标记 P0。 |
| 4 | **#66711** [MODEL] Opus 4.8 超长 thinking 消耗数万 token 并回复幻觉消息 | 💬2 | Opus 4.8 在 extended thinking 模式下输出 20k-64k tokens/turn，回复不存在的用户消息，被追问时甚至伪造"证据"，引发模型行为可靠性担忧。 |
| 5 | **#66671** / **#66718** / **#66719** Fable 5 安全过滤过激（多条 | 💬1-2 each | 打招呼时触发、健康数据分析误拦截、自有代码安全扫描被标记——多个用户同一天集中报告 Fable 5 safety classifier 的假阳性问题，已成版本发布前夕的核心风险。 |
| 6 | **#66727** 请求提供关闭 Anthropic API 安全标志的选项 | 💬1 | 安全产品开发者请求对自有 prompt 免除安全过滤，反映了专业用户与默认安全策略之间的张力。 |
| 7 | **#48949** Desktop 持久化 Remote Control 开机自动启用 | 👍14 / 💬7 | CLI 已支持 `remoteControlAtStartup`，但 Desktop 忽略该设置，每次需手动开启，影响远程协作场景。 |
| 8 | **#57371** Windows 端允许禁用 Cowork 后台服务 | 👍14 / 💬5 | CoworkVMService 常驻占用资源，非 Cowork 用户无法关闭，影响 Windows 性能。 |
| 9 | **#66483** Windows Daemon 管道未创建致 bg service 永远显示未运行 | 💬2 | Supervisor 进程存活但控制管道 `\\.\pipe\cc-daemon` 未被创建，所有 bg 会话无法启动，影响 Windows core 功能。 |
| 10 | **#66246** 支持 Agent 编程式触发 compaction | 💬1 | `/compact` 仅用户手动可用，Agent 无法在接近 context limit 时自主触发压缩，限制长时间自治 session 的能力。 |

**全部热点 Issue 链接：**
- [#18435](https://github.com/anthropics/claude-code/issues/18435) · [#63875](https://github.com/anthropics/claude-code/issues/63875) · [#66728](https://github.com/anthropics/claude-code/issues/66728) · [#66711](https://github.com/anthropics/claude-code/issues/66711) · [#66671](https://github.com/anthropics/claude-code/issues/66671) · [#66718](https://github.com/anthropics/claude-code/issues/66718) · [#66719](https://github.com/anthropics/claude-code/issues/66719) · [#66727](https://github.com/anthropics/claude-code/issues/66727) · [#48949](https://github.com/anthropics/claude-code/issues/48949) · [#57371](https://github.com/anthropics/claude-code/issues/57371) · [#66483](https://github.com/anthropics/claude-code/issues/66483) · [#66246](https://github.com/anthropics/claude-code/issues/66246)

---

## 4. 🔧 重要 PR 进展（10 条）

| PR | 作者 | 状态 | 内容摘要 |
|----|------|------|----------|
| **#66650** | sanidhyasin | OPEN | 修正 `pr-review-toolkit` 插件 manifest 中作者名为缩写 "Daisy"，改为全名 "Daisy Hollman" 以保持一致性。 |
| **#66608** | exodusubuntu-tech (REAPR) | OPEN | 修复 #66592：Fable 5 对晶格规范场论提问触发误报阻止的问题，由 REAPR 自动修复。 |
| **#66607** | exodusubuntu-tech (REAPR) | OPEN | 修复 #66595：Fable 5 safety classifier 在授权安全测试时会话中自动降级为 Opus 的问题。 |
| **#66577** | sridhar-3009 | OPEN | 同步 `marketplace.json` 中 security-guidance 插件的版本号与描述至 plugin.json，修复版本不一致。 |
| **#66575** | sridhar-3009 | OPEN | 同上，修正 `pr-review-toolkit` 的 plugin.json 作者名一致性。 |
| **#66573** | sridhar-3009 | OPEN | 修复 `ralph-wiggum` 插件中 `set -euo pipefail` 导致两个错误处理逻辑被提前退出的 bug（frontmatter 解析 & process 监控）。 |
| **#66572** | Codewithpabitra | WIP | 修复 #62466：反复出现 "Image couldn't be processed" API 错误并消耗使用配额的问题。 |
| **#66416** | wellkilo | OPEN | 修复 plugin-dev 中三个 validator 脚本因 `set -e` 在首次发现时就中止、无法输出完整检查结果的问题。 |
| **#65723** | nowordsformylove | OPEN | Claude/订阅相关的讨论型 PR，内容待确认。 |
| **#65286** | tianming-1996 | OPEN | 为 `plugin-dev` 插件添加缺失的 `plugin.json` manifest，修复通过正常插件机制发现和安装的功能。 |

**全部 PR 链接：**
- [#66650](https://github.com/anthropics/claude-code/pull/66650) · [#66608](https://github.com/anthropics/claude-code/pull/66608) · [#66607](https://github.com/anthropics/claude-code/pull/66607) · [#66577](https://github.com/anthropics/claude-code/pull/66577) · [#66575](https://github.com/anthropics/claude-code/pull/66575) · [#66573](https://github.com/anthropics/claude-code/pull/66573) · [#66572](https://github.com/anthropics/claude-code/pull/66572) · [#66416](https://github.com/anthropics/claude-code/pull/66416) · [#65723](https://github.com/anthropics/claude-code/pull/65723) · [#65286](https://github.com/anthropics/claude-code/pull/65286)

---

## 5. 📊 功能需求趋势

从当前 Issues 的内容和热度来看，社区关注的功能方向可归纳为以下几类：

| 方向 | 代表 Issues | 热度与说明 |
|------|-------------|-----------|
| **Fable 5 安全策略调优** | #66728, #66671, #66727, #66718, #66719 | 🔴 爆发式增长，发布 24h 内至少 6 条报告，核心矛盾是安全分类器过度敏感，需在安全策略白名单方向加速迭代 |
| **模型选择与控制** | #66402, #66703, #66723 | Agent/fleet 场景下需要 per-agent 模型配置，而非全局 `/model` 切换；dynamic workflow 需要自动选择合适的模型以避免成本爆炸 |
| **Windows 平台稳定性** | #63875, #66483, #48949, #66729, #57371 | Windows 长期是 bug 重灾区：Daemon 管道、Cowork 服务残留、会话解析错误、数据丢失 |
| **多账户与身份管理** | #18435 | Desktop 端最高票需求，5 个月仍未解决 |
| **Agent 自治能力增强** | #66246, #66686 | Agent 自主触发 compaction、workflow subagent 在 tmux pane 中可视运行 |
| **跨设备无缝会话** | #60058 | 类 Codex "connect from phone" 功能，期待 CLAUDE Code 多设备同步 |

---

## 6. 🧩 开发者关注点总结

1. **Fable 5 安全误报是当下最大痛点。** 不止是安全研究场景，连数据统计、医学数据分析、打招呼都被拦截。更严重的是部分场景下会**静默切换模型**（Fable 5 → Opus），打断已规划好的工作流而不提前告知。期待 Anthropic 在 classifier 调优和透明度（显式提示降级原因）方面快速响应。

2. **Windows 端是体验洼地。** 从工具调用解析失败、Daemon 管道未创建、Cowork 服务无法禁用，到 Desktop 更新后数据丢失，Windows 用户持续面临核心功能不可靠的问题。#63875 已经积累 87 个 👍，#66483 关联 bg session 基础能力，建议优先修复。

3. **模型管控粒度不足。** 当 Claude Code 走入 Agent fleet / workflow 等高级场景时，全局 `/model` 和 `/effort` 无法满足多 Agent 差异化配置需求，急需 per-agent 模型策略能力。

4. **Session 可靠性仍需提升。** 除 Windows 外，macOS 也有 Opus 幻觉回复用户消息、Advisor 与 Fable 5 不兼容却被 fallback 静默隐藏（#66714）等问题，提示模型-子系统对齐测试已成为规模化后必须重视的工程课题。

---

> 📎 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | 报告生成时间：2026-06-10 | OWL 日报

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-06-10**

---

## 1. 今日速览

今日社区最大的事件是 **GPT-5.5 模型在 Codex Desktop 和 CLI 端大面积出现 404 "Model not found" 错误**，引发 79 条评论的激烈讨论，OpenAI 疑似后端模型元数据未同步导致同一时间多出重复 Issue。功能侧，Rust CLI v0.139.0 上线了 **Code 模式直通 Web 搜索**能力，PR 侧则在 **Noise 加密传输和实时语音 Handoff 分流**两条重要基建线上持续合并。社区最大的长尾诉求——`/undo` 恢复指令（274👍）——仍未解决。

---

## 2. 版本发布

### rust-v0.139.0（正式 Release）

| 功能 | 描述 |
|------|------|
| **Code Mode Web 搜索增强** | Code 模式现在可直接调用独立 Web 搜索工具，支持从嵌套的 JavaScript 工具调用中发起，并以纯文本格式接收搜索结果。([#26719](https://github.com/openai/codex/issues/26719)) |
| **Schema 优化** | 工具与连接器的输入 Schema 保留 `oneOf` / `allOf` 结构；大型 Schema 压缩后保留更多浅层结构，提升可读性和 token 效率 |

### Alpha 预览
- **rust-v0.140.0-alpha.2** — 开发中版本，无详细变更发布
- **rust-v0.139.0-alpha.3 / alpha.2** — 预发修复迭代

---

## 3. 社区热点 Issues

今日从 50 条活跃 Issue 中筛选出以下 10 条最值得关注的问题：

### 🔥 GPT-5.5 404 模型不可用（今日最热）

| # | Issue | 👍 | 状态 | 说明 |
|---|-------|-----|------|------|
| [#26892](https://github.com/openai/codex/issues/26892) | gpt-5.5 在 Desktop 和 CLI 均报 404 Model not found | 28 | OPEN | Windows 用户首发，gpt-5.4 正常，gpt-5.5 元数据仍显示可用但实际请求失败 |
| [#26910](https://github.com/openai/codex/issues/26910) | GPT 5.5 has a 404 | 0 | CLOSED | Mac App 端同一问题，疑为后端元数据未同步 |
| [#27021](https://github.com/openai/codex/issues/27021) | macOS Codex: gpt-5.5 返回 404 | 1 | OPEN | Darvin arm64 平台确认复现 |
| [#26916](https://github.com/openai/codex/issues/26916) | Codex CLI: gpt-5.5 在巴西/GIG 区域首条消息即 404 | 0 | OPEN | 区域化部署问题，暗示非全局故障 |
| [#26860](https://github.com/openai/codex/issues/26860) | GPT-5.5 xhigh via Amazon Bedrock 中途自动停止 | 4 | OPEN | AWS Bedrock 自定义模型路径同样受影响 |

> **分析**：5 条 Issue 指向同一根因——OpenAI 后端 `gpt-5.5` 模型路由/元数据异常。区域差异（巴西首条即失败 vs Windows 延迟出现）暗示可能是灰度发布或区域配置漂移。

### 🔧 功能回归与体验问题

| # | Issue | 👍 | 状态 | 说明 |
|---|-------|-----|------|------|
| [#9203](https://github.com/openai/codex/issues/9203) | 请恢复 `/undo` 指令 | **274** | OPEN | 社区最高赞 Issue，Codex 误删/误改文件后无法撤销，用户强烈要求恢复 |
| [#20741](https://github.com/openai/codex/issues/20741) | Codex Desktop 项目聊天记录在更新后消失 | 14 | OPEN | macOS Tahoe + M5 Max，更新后历史会话丢失 |
| [#24391](https://github.com/openai/codex/issues/24391) | Windows sandbox spawn setup refresh 失败 | 25 | OPEN | 0.133.0 起 shell 命令开始失败，影响 Windows 沙箱用户 |
| [#26493](https://github.com/openai/codex/issues/26493) | Codex App context compaction 报 invalid_enum_value | 4 | OPEN | 上下文压缩功能在 App 端出现枚举值不兼容 |
| [#27260](https://github.com/openai/codex/issues/27260) | Codex Desktop 重大回归导致应用不可用 | 0 | CLOSED | 最新版本 26.608.12217 导致应用崩溃，用户寻求降级方案 |

---

## 4. 重要 PR 进展

从 50 条活跃 PR 中筛选 10 条关键进展：

### 🔐 安全与传输层

| # | PR | 作者 | 说明 |
|---|-----|------|------|
| [#26245](https://github.com/openai/codex/pull/26245) | exec-server: Noise CLI opt-in | viyatb-oai | Noise 加密协议 CLI 端 opt-in 支持 |
| [#26244](https://github.com/openai/codex/pull/26244) | exec-server: Noise relay E2E | viyatb-oai | Noise 中继端到端加密实现 |
| [#26246](https://github.com/openai/codex/pull/26246) | exec-server: Noise runtime tests | viyatb-oai | Noise 运行时测试覆盖 |
| [#26273](https://github.com/openai/codex/pull/26273) | exec-server: Noise remote opt-in | viyatb-oai | 远程连接场景 Noise 支持 |
| [#26247](https://github.com/openai/codex/pull/26247) | exec-server: Noise executor transport | viyatb-oai | Noise 执行器传输层适配 |

> **分析**：Noise 加密传输正在以 Stack PR 方式系统性合并，覆盖 CLI、远程、执行器全链路，是 Codex 安全基建的重要里程碑。

### ⚡ 性能与可观测性

| # | PR | 作者 | 说明 |
|---|-----|------|------|
| [#27094](https://github.com/openai/codex/pull/27094) | Add spans to build_tool_router | mchen-oai | 为工具路由构建添加追踪 Span，定位 ~113ms 延迟瓶颈 |
| [#27107](https://github.com/openai/codex/pull/27107) | Add spans to run_turn | mchen-oai | 为 turn 编排添加细粒度 Span，分离本地协调与模型流式成本 |
| [#27258](https://github.com/openai/codex/pull/27258) | Cache tool search handler across sampling continuations | mchen-oai | 跨采样续接缓存工具搜索处理器，避免重复构建 BM25 索引 |

### 🎙️ 实时语音与远程

| # | PR | 作者 | 说明 |
|---|-----|------|------|
| [#27127](https://github.com/openai/codex/pull/27127) | Forward assistant output to realtime through handoffs | guinness-oai | 将 Codex 输出（含 preamble 和 final）转发至实时语音通道，实现语音/文本统一体验 |
| [#27226](https://github.com/openai/codex/pull/27226) | Fix Remote SSH agent forwarding | abhinav-oai | 修复 Remote SSH 双会话场景下的 agent 转发问题 |

---

## 5. 功能需求趋势

从今日 50 条 Issue 中提炼社区最关注的功能方向：

| 排名 | 方向 | 代表 Issue | 热度 |
|------|------|-----------|------|
| 1 | **模型可用性与路由** | gpt-5.5 404 系列（5 条 Issue） | 🔥🔥🔥 |
| 2 | **撤销/回滚能力** | `/undo` 恢复（274👍） | 🔥🔥🔥 |
| 3 | **Windows 平台体验** | 沙箱失败、通知异常、Shell 配置、上下文指示器 | 🔥🔥 |
| 4 | **会话与历史管理** | 聊天记录消失、会话日志膨胀至 2GB、导出功能 | 🔥🔥 |
| 5 | **子 Agent 能力** | spawn_agent 支持 cwd、workspace 隔离 | 🔥 |
| 6 | **实时语音集成** | 语音 Handoff、模型/版本覆盖 | 🔥 |
| 7 | **IDE 集成** | VS Code 上下文窗口指示器缺失 | 🔥 |
| 8 | **认证与工作区** | 工作区迁移后 PR 审查失败、Keyring 加密 | 🔥 |

---

## 6. 开发者关注点总结

### 🚨 紧急痛点
1. **GPT-5.5 全面不可用**：Desktop + CLI + Bedrock 三条路径同时受影响，OpenAI 需尽快修复后端模型路由或回滚元数据。
2. **Codex Desktop 稳定性**：最新版本出现重大回归（#27260 已关闭但影响面未知），聊天记录丢失（#20741）问题持续未解。

### 📣 高频诉求
1. **`/undo` 指令回归**：274 赞的 Issue 已开放 5 个月，是社区最强烈的功能请求。开发者需要一种在 Codex 误操作后快速恢复的机制。
2. **Windows 平台一等公民**：沙箱、Shell 配置、通知、上下文指示器——Windows 用户反馈的问题数量和多样性表明该平台体验仍有较大差距。
3. **会话可观测性**：日志膨胀至 2GB（#24948）、缺少导出功能（#13267）、聊天记录消失——开发者对会话生命周期管理的透明度要求越来越高。

### 🔮 值得关注的方向
- **Noise 加密传输** Stack PR 合并后，Codex 远程执行的安全性将大幅提升，对企业和敏感代码场景意义重大。
- **实时语音 Handoff**（#27127）标志着 Codex 正在从纯文本助手向多模态交互演进。
- **工具搜索缓存优化**（#27258）直接针对 113ms 的采样延迟，对高频工具调用场景有显著性能收益。

---

*数据来源：github.com/openai/codex | 统计时间窗口：过去 24 小时 | 生成时间：2026-06-10*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-06-10

## 1. 今日速览

今日 Gemini CLI 迎来 **v0.47.0-preview.0** 预览版发布，同期 **v0.46.0-preview.3** 和 **v0.45.3** 补丁版修复了 Vertex AI 模型映射问题。社区安全方面，路径遍历漏洞修复 PR 成为焦点；Agent 子代理可靠性（超时报错掩盖、无权限运行等）仍是 Issue 高频集中区。

---

## 2. 版本发布

今天共发布 3 个版本：

| 版本 | 类型 | 说明 |
|---|---|---|
| **v0.47.0-preview.0** | 预览版 | 新版本系列，含后端定义支持等更新（完整日志由 CI 自动生成） | [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.47.0-preview.0) |
| **v0.46.0-preview.3** | 补丁 | Cherry-pick f08b4af 修复 Vertex AI `gemini-3.5-flash` 模型映射问题 | [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0-preview.3) |
| **v0.45.3** | Stable 补丁 | 同上补丁回溯至 stable 分支 | [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.3) |

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 为什么重要 | 社区反应 |
|---|---|---|---|
| 1 | **[#21409] Generalist agent hangs** (#google-gemini/gemini-cli/issues/21409) | P1 Bug：委派 generalist 子代理后无限挂起，即使简单目录创建工作也无法完成 | 👍 8，评论 7 — 最高互动，影响面广 |
| 2 | **[#22323] Subagent recovery after MAX_TURNS 报告虚假成功** (#22323) | P1 Bug：子代理达到 MAX_TURNS 上限后仍报告 `GOAL` 成功，错误掩盖了实际中断 | 👍 2，评论 6 — 可靠性核心隐患 |
| 3 | **[#25166] Shell command execution gets stuck with "Waiting input"** (#25166) | P1：命令已执行完毕但 CLI 持续提示"Awaiting user input"，阻塞后续流程 | 👍 3，评论 4 — 终端交互阻塞类高频问题 |
| 4 | **[#26525] Auto Memory 安全：确定性脱敏与日志缩减** (#26525) | P2 安全：Auto Memory 读取对话记录后才做脱敏，存在密钥泄露风险 | 评论 5 — 安全敏感度高 |
| 5 | **[#26522] Auto Memory 无限重试低信号会话** (#26522) | P2：无意义会话被反复提取，浪费后台资源 | 评论 5 — 智能调度需求 |
| 6 | **[#26516] Memory system bugs and quality improvements** (#26516) | P2 Tracking Issue：集中追踪所有记忆系统 Bug | 评论 2 — 记忆系统问题较多 |
| 7 | **[#24353] Robust component level evaluations** (#24353) | P1 EPIC：组件级行为评估框架建设，已有 76 个测试覆盖 | 评论 7 — 质量安全网 |
| 8 | **[#21983] Browser subagent fails on Wayland** (#21983) | P1：Wayland 环境下浏览器子代理崩溃 | 👍 1，评论 4 — Linux 桌面兼容性问题 |
| 9 | **[#22093] Subagents running without permission since v0.33.0** (#22093) | P2：用户已禁用 Agent 模式，子代理仍自动运行 | 评论 2 — 权限控制回归 Bug |
| 10 | **[#26523] Surface or quarantine invalid Auto Memory inbox patches** (#26523) | P2：无效 memory patch 被静默跳过，无法追踪问题 | 评论 3 — 调试体验差 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类别 | 功能/修复 |
|---|---|---|---|
| 1 | **[#27767] fix: prevent path traversal vulnerabilities during skill install/link/uninstall** (#27767) | 🔒 安全 | 修复 skill 安装/链接/卸载中的三个路径遍历漏洞 |
| 2 | **[#27659] fix: prevent path traversal during skill install (upstream 版本)** (#27659) | 🔒 安全 | 同源漏洞修复的 upstream 分支版本 |
| 3 | **[#27749] Vertex AI model mapping fix** (#27749) | 🔧 修复 | 修复 `gemini-3.5-flash` 在 LOGIN_WITH_GOOGLE 和 ADC 认证下的模型 ID 不匹配 |
| 4 | **[#27771] Fix MCP header encoding for non-ASCII values** (#27771) | 🔧 修复 | 修复 MCP HTTP 传输中非 ASCII 头值（如 Unicode）导致 discovery 失败 |
| 5 | **[#27705] Promote Gemini 3.1 Flash Lite to GA** (#27705) | 🆕 功能 | Gemini 3.1 Flash Lite 转正 GA，同时支持 Gemini 3.5 Flash |
| 6 | **[#27760] fix: use gemini-3.5-flash for all auth types including Vertex AI** (#27760) | P1 修复 | 统一各认证类型下的闪速模型为 `gemini-3.5-flash` |
| 7 | **[#27754] fix(a2a-server): add missing return after 501 response** (#27754) | P1 修复 | A2A Server GET /tasks/metadata 缺少 return 导致 crash |
| 8 | **[#27698] fix: Ensure zero-quota limits fail fast** (#27698) | 🔧 修复 | 零配额时立即失败避免无限重试循环（10次） |
| 9 | **[#27391] fix: filter internal session context from history during resumption** (#27391) | 🔧 修复 | 恢复会话时过滤 `<session_context>` XML 块以修复 TUI 异常显示 |
| 10 | **[#27772] refactor(core): standardize tool output formatting** (#27772) | ⚙️ 重构 | MCP/Shell/Web-Fetch 工具输出结构标准化，引入 `wrapUntrusted` |

---

## 5. 功能需求趋势

从当前 Issue 集中分布可提炼出 **5 大功能方向**：

### 🔴 Agent 可靠性（最高优先级）
- 子代理虚假成功报告、无限挂起、权限绕过等问题密集（#22323、#21409、#22093）
- **趋势**：社区需要更透明的子代理状态报告和执行边界控制

### 🔄 Auto Memory 系统增强
- 安全问题（#26525）、低信号重试（#26522）、无效 patch 静默跳过（#26523）等问题已形成集群
- **趋势**：记忆系统需要安全加固、智能调度和失败隔离机制

### 🛡️ 安全加固
- 路径遍历（PR #27767、#2659）、Auto Memory 脱敏、Auto Memory inbox 验证
- **趋势**：skill 管理和记忆系统成为安全审查重点

### 🖥️ 终端/浏览器代理稳定性
- Shell 阻塞（#25166）、Wayland 兼容（#21983）、settings.json 被忽略（#22227）
- **趋势**：多环境适配（Wayland、终端 resize、无头浏览器）是体验短板

### 🧪 评估与质量基础设施
- 组件级行为评估（#24353）、内部评估稳定化（#23166）、AST 感知工具（#22745、#22747）
- **趋势**：工程质量前移，AST 工具可能提升代码分析效率

---

## 6. 开发者关注点总结

**高频痛点**：

1. **子代理不可靠**：挂起、虚假成功报告、未经授权运行 — 直接影响开发流程连续性
2. **会话状态异常**：Shell 命令完成后仍阻塞输入、恢复会话时显示内部上下文
3. **权限控制失效**：Agent 模式已禁用却仍自动触发
4. **路径遍历安全**：skill 安装流程存在已知漏洞（修复 PR 已开放）
5. **零配额无限重试**：免费用户遭遇活锁，10 次重试后才失败

**开发者行动建议**：
- 关注 #27766、#27659 安全修复，及时更新版本
- Vertex AI 用户需跟进 #27749 模型映射补丁
- Wayland 用户暂缓使用 browser subagent 或关注 #21983
- 免费 tier 用户更新至含 #27698 修复的版本以避免活锁

---

*数据来源：github.com/google-gemini/gemini-cli | 截至 2026-06-10*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-06-10**

---

## 1. 今日速览

Copilot CLI 最新版本 v1.0.61 于昨日（06-09）发布，带来了 UI 打磨、设置交互对话框和会话恢复修复。社区 Issue 活跃度极高，过去24小时内有 29 条 Issue 更新，其中多条涉及 Windows 平台体验、插件系统和 v1.0.60 回归问题。今日无新 PR 合并。

---

## 2. 版本发布

### v1.0.61 — 2026-06-09

- **UI 打磨**：统一了 `/agents` 选择器和"新建 Agent 向导"的边框、标题和输入框样式
- **会话修复**：修复了恢复会话时可能导致屏幕空白（空白输出）的 Bug
- **设置对话框**：新增 `/settings` 交互对话框，可一站式浏览和编辑所有用户设置
- **本地会话恢复**：针对本地会话恢复（resume 相关）进行了修复

---

## 3. 社区热点 Issues（TOP 10）

### 1）恢复 GitHub in CLI 命令（高热度）
**[#53](https://github.com/github/copilot-cli/issues/53)** | 👍 75 | 评论 31

呼声极高的存量 Feature Request。社区希望恢复之前版本中的 `github` CLI 集成命令，避免工作流中断。评论中已有用户自建替代方案（shell-ai）。反映的是版本演进中向后兼容性断裂的痛点。

---

### 2）模型列表不完整：CLI 未列出 Org 启用的全部模型
**[#1703](https://github.com/github/copilot-cli/issues/1703)** | 👍 54 | 评论 29

同一 GitHub 账号和组织下，CLI 展示的模型数量少于 VS Code 端（如 Gemini 3.1 Pro 缺失）。影响企业级用户选择模型，是多端体验不一致的典型案例——跨平台一致性是开发者最大诉求之一。

---

### 3）Feature Request：内置 Git Worktree 生命周期管理
**[#1613](https://github.com/github/copilot-cli/issues/1613)** | 👍 31 | 评论 2

社区希望 Copilot CLI 能在 Agent 执行任务时自动创建/销毁 git worktree，实现并行任务隔离。呼声很高（31个赞），说明多任务隔离已成为 Agent 工作流的核心诉求。

---

### 4）Linux 下 Ctrl+Shift+C 无法复制到剪贴板
**[#2082](https://github.com/github/copilot-cli/issues/2082)** | 👍 8 | 评论 20

Ubuntu 24.04 上该快捷键被 Copilot CLI 拦截导致失效，Linux 平台体验问题。尽管已有 Ctrl+C 和右键复制替代方案，但改变了用户肌肉记忆，评论中也有用户反映替代方案体验不一致。

---

### 5）v1.0.60 Regression：Plugin preToolUse hooks 不再触发
**[#2540](https://github.com/github/copilot-cli/issues/2540)** | 👍 3 | 评论 7

插件 `hooks.json` 中定义的 `preToolUse` hook 在主会话和子 Agent 中均不执行。这类插件系统回归会直接影响依赖 hook 做权限控制、审计的开发者。

---

### 6）v1.0.60 Regression：userPromptSubmitted hook 上下文丢失
**[#3727](https://github.com/github/copilot-cli/issues/3727)** | 👍 0 | 评论 0

同一台机器、同一插件、同一 prompt，v1.0.59 正常、v1.0.60 起 `additionalContext` 不再注入 planner。明确的回归问题，标记了时间边界，有助于工程团队定位根因。

---

### 7）Windows：Ctrl+G 无法启动 code-insiders
**[#3733](https://github.com/github/copilot-cli/issues/3733)** | 👍 1 | 评论 1

Windows 上将 `$EDITOR` 设为 `code-insiders --wait` 时，Ctrl+G 快捷键无法在 CLI 内启动 VS Code Insiders。跨平台终端编辑器集成问题。

---

### 8）Bash 工具丢弃非 ASCII 字符（LC_CTYPE=C 问题）
**[#3601](https://github.com/github/copilot-cli/issues/3601)** | 👍 0 | 评论 1

Bash 工具使用 `LC_CTYPE=C`，导致中文、日文、韩文等字符被静默剥离。对非英语开发者和含中文路径的项目影响大，属于国际化基础设施问题。

---

### 9）edit 工具损坏非 UTF-8 字节
**[#3732](https://github.com/github/copilot-cli/issues/3732)** | 👍 0 | 评论 0

`edit` 工具将 CP1252 等遗留编码的合法字节视为 UTF-8 无效并替换为 `U+FFFD`，静默损坏文件。对多语言项目或遗留系统维护场景存在风险。

---

### 10）Windows：Ctrl+滚轮缩放被拦截
**[#3735](https://github.com/github/copilot-cli/issues/3735)** | 👍 0 | 评论 0

Windows Terminal 下 Copilot CLI 运行时，Ctrl+鼠标滚轮的缩放功能失效（触摸板捏合同样）。终端交互体验问题，排在 #3724 相关序列中。

---

## 4. 重要 PR 进展

过去 24 小时内无新 PR 合并或更新。

---

## 5. 功能需求趋势

通过今日活跃的 29 条 Issue，可提炼出 **6 大高频诉求**：

| 方向 | 代表 Issue | 核心关键点 |
|------|-----------|-----------|
| **插件与 Hooks 系统** | #2540, #3727, #3725, #3548 | preToolUse hook 回归、plugin OpenTelemetry span、MCP 自动启用 |
| **Agent 工作流增强** | #1613, #3123, #3731, #3730 | git worktree 自动管理、research 结果写文件、custom model 支持 |
| **跨平台体验** | #2082, #3733, #3735, #3662, #3726, #3701 | Windows/Linux 键盘快捷键冲突、卸载路径、session 共享 |
| **IDE/编辑器集成** | #53, #1703, #3730 | CLI 与 VS Code/GH CLI 的模型/命令一致性 |
| **编码与国际化** | #3601, #3732, #3726 | 非 ASCII/Legacy encoding 正确处理 |
| **企业/网络隔离场景** | #3436, #3706, #3731 | MCP registry URL 拼接错误、内网 web_fetch 权限控制、OAuth 速率限制 |

---

## 6. 开发者关注点总结

### 痛点 TOP 5

1. **v1.0.60/v1.0.61 回归集中爆发** — preToolUse hook、userPromptSubmitted 上下文注入、cwd/branch 持久化、MCP 重载逻辑、worktree 行为等多项功能在近期版本中退化，用户呼吁更严格的回归测试。

2. **Windows 平台体验差距大** — 快捷键拦截（Ctrl+滚轮缩放、Ctrl+Shift+C 复制）、编辑器集成、MCP 服务器异常卸载等问题频发，Windows 端投入明显滞后。

3. **插件 Hook 系统不稳定** — 多个回归集中在 hooks 系统上，该功能本身是权限控制和审计的关键基础设施，稳定性直接影响企业用户信心。

4. **模型列表跨平台不一致** — CLI 与 VS Code 同账号下模型可见性不统一，企业用户配置了 Org 级模型却在 CLI 中看不到管理入口。

5. **国际化支持缺失** — LC_CTYPE 配置导致多语言字符被静默丢弃、非 UTF-8 编码文件被损坏，说明 i18n 在 Agent 工具链层面尚未得到足够重视。

---

*数据来源：github/copilot-cli | 统计时间：2026-06-10 | 日报由 OWL 生成*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-10

---

## 1. 今日速览

过去 24 小时内，Kimi Code CLI 社区整体较为平静，无新版本发布，无新 PR 合并或提交。唯一值得关注的动态是 Issue #2443 报告了 Edit 工具在 v0.12.0 版本中频繁失败的问题，目前尚无社区回复。

---

## 2. 版本发布

过去 24 小时内无新版本发布，本节省略。

---

## 3. 社区热点 Issues

本期仅有 1 条活跃 Issue，列述如下：

| # | 标题 | 状态 | 重要性说明 |
|---|------|------|-----------|
| [#2443](https://github.com/MoonshotAI/kimi-cli/issues/2443) | Edit tool keeps failing in new kimi-code | 🔴 OPEN | 用户报告在 v0.12.0（Debian / k2.6 模型）下 Edit 工具频繁报错，属于核心功能回归缺陷。目前 0 条评论、0 👍，尚未得到维护者响应，需持续关注。 |

> ⚠️ 本期活跃 Issue 数量偏少，建议读者同时关注近期高赞历史 Issue 以获取更完整的社区反馈全貌。

---

## 4. 重要 PR 进展

过去 24 小时内无新 PR 提交或更新，本节省略。

---

## 5. 功能需求趋势

基于本期及近期社区动态，提炼出以下关注方向：

1. **Edit 工具稳定性** — Issue #2443 直接指向 Edit 工具在最新版本的可靠性问题，文件编辑是 CLI 编码助手的核心能力，任何回归都会严重影响开发者工作流。
2. **v0.12.x 版本质量** — 多个近期 Issue 集中在 v0.12.0 引入的变更上，社区对该版本的稳定性存在一定疑虑。
3. **跨平台兼容性** — 本期 Issue 来自 Debian 环境，结合历史数据，Linux 用户的平台适配问题持续出现。

---

## 6. 开发者关注点

- **Edit 工具频繁失败**：这是本期最突出的痛点。Edit 工具是代码修改场景的高频调用路径，频繁失败会直接打断开发者的 AI 辅助编码流程，期望维护团队尽快定位并修复。
- **Issue 响应速度**：#2443 目前 0 评论，社区期望 MoonshotAI 团队能提升 Issue 响应效率，尤其是涉及核心功能回归的 bug。
- **版本升级信心**：v0.12.0 发布后连续出现多个问题报告，部分开发者可能对升级持观望态度，建议团队在发布前加强回归测试覆盖。

---

> 📌 **日报说明**：本期数据量较少（1 Issue / 0 PR / 0 Release），日报已如实呈现。如需更全面的趋势分析，建议扩大数据窗口至近 7 天。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-06-10

---

## 1. 今日速览

过去 24 小时，Opencode 社区在无新版本的背景下持续收到大量反馈：核心痛点集中在 **内存泄漏**、**桌面文件树异常** 和 **粘贴功能失效**；同时，开发者密集关注 **多模型兼容性**、**PWA支持** 和 **任务子代理模型覆盖** 等功能演进。

---

## 2. 版本发布

过去 24 小时内 **无新版本发布**。

---

## 3. 社区热点 Issues

### 3.1 内存问题专帖（Memory Megathread）
- 链接：[#20695](https://github.com/anomalyco/opencode/issues/20695)
- 状态：OPEN | 👍 64 | 💬 91
- 摘要：大量用户反馈 Opencode 占用内存持续攀升。核心维护者 thdxr 开辟了此汇总帖，要求社区提供堆快照而非 LLM 猜测。此帖成为排查内存问题的唯一入口，讨论极为活跃。

### 3.2 CLI 无法复制粘贴
- 链接：[#13984](https://github.com/anomalyco/opencode/issues/13984)
- 状态：OPEN | 👍 20 | 💬 45
- 摘要：用户报告剪贴板内容无法通过 Ctrl+V 粘贴，仅显示"已复制到剪贴板"提示。该问题影响日常高频操作，社区讨论持续数月未彻底解决。

### 3.3 上下文感知失效
- 链接：[#3472](https://github.com/anomalyco/opencode/issues/3472)
- 状态：CLOSED | 👍 26 | 💬 38
- 摘要：用户发现 VSCode 扩展宣传的"上下文感知"功能未生效，选中代码后 Agent 无法识别。此 Issue 已关闭，但社区对功能文档不完善仍有不满。

### 3.4 配置 providers 时突发服务错误
- 链接：[#27530](https://github.com/anomalyco/opencode/issues/27530)
- 状态：OPEN | 👍 21 | 💬 31
- 摘要：应用启动时报 `config.providers: Unexpected server error`，多个请求同时失败。可能涉及自定义提供方配置兼容性。

### 3.5 自定义 OpenAI 兼容提供方选项未传递至 API
- 链接：[#5674](https://github.com/anomalyco/opencode/issues/5674)
- 状态：OPEN | 👍 13 | 💬 23
- 摘要：用户通过 `@ai-sdk/openai-compatible` 配置自定义 Provider 时，baseURL 和 apiKey 未被传入实际请求，导致自托管模型无法使用。此问题长期未修复。

### 3.6 桌面版文件树不刷新
- 链接：[#30545](https://github.com/anomalyco/opencode/issues/30545)
- 状态：OPEN | 👍 0 | 💬 11
- 摘要：Desktop v1.15.13 启用 "File tree" 后仍不显示，重启后也无效。可能涉及 Electron 渲染进程与主进程通信问题。

### 3.7 Prompt 循环每次迭代从数据库重新加载消息，破坏缓存一致性
- 链接：[#31525](https://github.com/anomalyco/opencode/issues/31525)
- 状态：OPEN | 💬 4
- 摘要：每次 prompt 循环都会从 DB 重新加载全部消息，对象引用变化导致 Anthropic 的 prompt cache 失效。BYK 提出的此问题可能显著影响付费用户的 token 成本。

### 3.8 多行粘贴被拆分为多条消息
- 链接：[#23524](https://github.com/anomalyco/opencoding/issues/23524)
- 状态：OPEN | 💬 3
- 摘要：VSCode 插件中粘贴多行文本会被拆分成多条独立提交，破坏用户意图。此问题在 Agent 上下文中会导致理解偏差。

### 3.9 ZEN 退款事件持续发酵
- 链接：[#26508](https://github.com/anomalyco/opencode/issues/26508)
- 状态：CLOSED | 👍 2 | 💬 12
- 摘要：用户称点击 GO 订阅后被导向 ZEN 支付界面，完成支付后自动注册了 ZEN 而非 GO。社区对付款流程设计提出强烈质疑。

### 3.10 大型文件写入后 Native LLM 流约 5 分钟后超时
- 链接：[#31518](https://github.com/anomalyco/opencode/issues/31518)
- 状态：CLOSED | 💬 2
- 摘要：启用 `OPENCODE_EXPERIMENTAL_NATIVE_LLM=1` 时，写入大文件触发的缓慢格式化会导致流中断。已识别为超时问题，需后续修复。

---

## 4. 重要 PR 进展

### 4.1 feat(core): 同步 models.dev 推理选项
- 链接：[#31581](https://github.com/anomalyco/opencode/pull/31581)
- 状态：OPEN
- 摘要：解析 models.dev 中的 Provider 特定 `reasoning_options`，并通过统一类型（toggle/effort/budget_tokens）透传至旧版 Provider 和 V2 模型能力层。此举将显著提升自定义模型适配灵活性。

### 4.2 refactor(core): 统一文件系统搜索服务
- 链接：[#31566](https://github.com/anomalyco/opencode/pull/31566)
- 状态：CLOSED（已合并）
- 摘要：thdxr 主导重构，将 LocationSearch 和旧搜索引擎替换为基于 cwd 的统一 Search 服务，引入 FFF/Ripgrep 双引擎并缓存索引。有望提升文件搜索响应速度。

### 4.3 fix: 确保 tool_use/tool_result 配对及 Anthropic user-first 顺序
- 链接：[#31547](https://github.com/anomalyco/opencode/pull/31547)
- 状态：OPEN
- 摘要：修复 auto-compaction 后 tool_use/tool_result 错配导致会话永久卡死的问题（关联 #27594），同时保证 Anthropic 消息顺序符合其 API 要求。

### 4.4 feat(app): 添加 PWA 支持与服务工作者 + 更新提示
- 链接：[#31279](https://github.com/anopcode/pull/31279)
- 状态：OPEN
- 摘要：为 Desktop 端添加 PWA 支持，实现离线缓存和后台更新检查，覆盖 7 个相关 Issue，是提高 Web 体验的重要一步。

### 4.5 fix: 增加 compaction 默认保留轮数（2 → 15）
- 链接：[#26545](https://github.com/anomalyco/opencode/pull/26545)
- 状态：CLOSED（已合并）
- 摘要：自动压缩默认仅保留最近 2 轮对话，导致历史消息大面积丢失。调整为 15 轮后显著减少上下文截断问题，关联 #7380、#16178、#26538。

### 4.6 feat(opencode): 添加任务模型覆盖（Task Model Override）
- 链接：[#29447](https://github.com/anomalyco/opencode/pull/29447)
- 状态：OPEN
- 摘要：允许主 Agent 在调用 Task 工具时为子 Agent 指定不同模型，实现更精细的成本/性能调度。解决 #17595，满足高级用户需求。

### 4.7 fix(web): 语言切换时设置 locale cookie
- 链接：[#31577](https://github.com/anomalyco/opencode/pull/31577)
- 状态：OPEN
- 摘要：修复语言选择器切换页面但不保存 cookie 的问题，确保用户语言偏好持久生效。关联 #29326。

### 4.8 feat(databricks): 添加 Databricks 模型服务 + AI Gateway 提供方
- 链接：[#26510](https://github.com/anomalyco/opencode/pull/26510)
- 状态：CLOSED（已合并）
- 摘要：正式支持 Databricks 作为自定义提供方，自动发现 Model Serving 和 AI Gateway 两类端点，满足企业用户需求。

### 4.9 docs(ecosystem): 添加 Hindsight 记忆插件到生态
- 链接：[#31559](https://github.com/anomalyco/opencode/pull/31559)
- 状态：CLOSED（已合并）
- 摘要：新增 `@vectorize-io/opencode-hindsight`插件生态条目，提供基于 Hindsight 的跨会话持久记忆能力，增强 Agent 上下文连续性。

### 4.10 fix(desktop): 更新 Electron 栈与面板布局
- 链接：[#31571](https://github.com/anomalyco/opencode/pull/31571)
- 状态：CLOSED（已合并）
- 摘要：将 Electron 从 41 升级至 42.3.3，修复 AppImage 打包命名问题，并解决 v2 布局下 pannel 占用异常。桌面稳定性提升。

---

## 5. 功能需求趋势

| 趋势方向 | 代表 Issue | 热度 |
|----------|-----------|------|
| **IDE 集成增强** | #3472（上下文感知）、#23524（多行粘贴）、#22235（VSCode 集成） | 🔥🔥🔥 |
| **内存与性能优化** | #20695（内存泄漏专帖）、#31525（Prompt 缓存一致性）、#18757（工具执行频繁中断） | 🔥🔥🔥 |
| **自定义提供方支持** | #5674（选项未传递）、#20802（图像附件）、#26412（vLLM 兼容） | 🔥🔥 |
| **桌面体验改进** | #30545（文件树）、#31571（Electron 升级）、#31279（PWA） | 🔥🔥 |
| **订阅与支付透明化** | #26508、#28226（ZEN/GO 混淆） | 🔥 |
| **任务编排与模型调度** | #29447（Task 模型覆盖）、#27698（Go 计划统计展现） | 🔥 |

---

## 6. 开发者关注点总结

1. **内存管理是首要痛点**：大量用户集中反馈内存异常增长，维护者已开启专帖收集堆快照。
2. **桌面端稳定性堪忧**：文件树不显示、Electron 版本滞后、粘贴功能失效等问题频发，影响基础可用性。
3. **自定义提供方生态脆弱**：多个 Issue 指出 OpenAI 兼容层配置传递不完整、图像附件流处理错误，限制自托管部署。
4. **文档与实际功能不符**："context awareness" 等特性宣传与实际行为不一致，造成用户困惑。
5. **支付流程存在歧义**：多个用户反映 GO/ZEN 订阅路径混淆，需优化 UI 明确引导。
6. **缓存机制待优化**：Prompt 循环中全量 DB 重加载破坏字节一致性，对使用 Anthropic 缓存的用户成本影响显著。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)*  
*生成时间：2026-06-10*  
*日报由 OWL 自动辑录，供开发者参考决策*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-10

---

## 1. 今日速览

今日最大亮点是 **Claude Fable 5 和 Mythos 5 模型全面上线**，覆盖 Anthropic 和 Amazon Bedrock 两个 provider，支持自适应思维（adaptive thinking）和 `xhigh` effort。同时，**项目信任（Project Trust）功能**引发社区热议，24 条评论中既有强烈反对声音也有建设性反馈。此外，多个 PR 密集合并，涵盖模型注册、TUI 渲染修复和实验性功能守卫等方向。

---

## 2. 版本发布

### v0.79.1

- **Claude Fable 5 支持**：Anthropic 和 Amazon Bedrock provider 均已上线 Claude Fable 5，支持自适应思维（adaptive thinking）和 `xhigh` effort 级别。
- **Prompt 模板默认参数**：Prompt 模板现在支持位置参数默认值语法，如 `${1:-7}`，未传入参数时自动使用默认值。

---

## 3. 社区热点 Issues

以下按讨论热度和影响力排序：

| # | Issue | 热度 | 摘要 |
|---|-------|------|------|
| 1 | **[#5514] Project Trust Feature Feedback** | 💬24 👍12 | 项目信任门控功能刚上线即遭用户强烈反弹。用户认为已信任的项目不应反复询问，且跨设备状态不统一。这是当前讨论最激烈的 Issue，反映了安全功能与用户体验之间的张力。[链接](https://github.com/earendil-works/pi/issues/5514) |
| 2 | **[#4984] Interactive mode crash on transient terminal EPIPE** | 💬13 | 在 `edit` 工具调用时偶发 `write EPIPE` 崩溃，影响交互式模式的稳定性。已标记 inprogress，正在排查。[链接](https://github.com/earendil-works/pi/issues/4984) |
| 3 | **[#4180] Links not clickable anymore** | 💬12 | 近期更新后超链接不可点击，影响信息获取效率。标记为 `closed-because-bigrefactor`，将在大重构中统一解决。[链接](https://github.com/earendil-works/pi/issues/4180) |
| 4 | **[#4877] Session folder collision** | 💬11 👍2 | 不同路径的项目可能映射到同一会话文件夹（如 `/a/b/c/d` 和 `/a-b/c-d` 均变为 `--a-b-c-d--`），存在潜在数据混淆风险。[链接](https://github.com/earendil-works/pi/issues/4877) |
| 5 | **[#4185] Zsh/tmux installation - bad colors/contrast** | 💬10 👍6 | 终端配色/对比度问题，影响视觉体验。获 6 个赞，说明受影响用户较多。标记为 `closed-because-bigrefactor`。[链接](https://github.com/earendil-works/pi/issues/4185) |
| 6 | **[#5363] Add amazon-bedrock-mantle provider** | 💬7 👍3 | 请求新增 `amazon-bedrock-mantle` provider，以支持 Bedrock Mantle 的 OpenAI 兼容 API（GPT-5.5/5.4）。已有对应 PR #5509 在推进中。[链接](https://github.com/earendil-works/pi/issues/5363) |
| 7 | **[#5464] Local models: 3-5 minute "Working" status latency** | 💬7 | 使用本地模型（如 Ollama 上的 ministral3:8b）时，每条消息都有 3-5 分钟的不合理延迟，严重影响本地模型用户体验。[链接](https://github.com/earendil-works/pi/issues/5464) |
| 8 | **[#5350] SDK: custom tool operations receive host-OS-resolved paths** | 💬6 | Windows 主机上通过 SSH 操作 Linux 远程文件时，路径被主机 OS 错误解析，导致自定义工具操作失败。跨平台开发者的关键痛点。[链接](https://github.com/earendil-works/pi/issues/5350) |
| 9 | **[#5531] kimi.com: Thinking enabled despite using `thinking off`** | 💬5 | 即使用户显式关闭 thinking，kimi.com 的模型仍消耗 token 进行推理，属于 provider 层面的行为不一致问题。[链接](https://github.com/earendil-works/pi/issues/5531) |
| 10 | **[#5511] Error: context shift is disabled** | 💬4 | 上下文达到 51.1% 时触发错误，且手动 `/compact` 也失败（502），影响长会话的连续性。[链接](https://github.com/earendil-works/pi/issues/5511) |

---

## 4. 重要 PR 进展

### 已合并（Merged）

| # | PR | 内容 |
|---|----|------|
| 1 | **[#5563] feat(ai): add Claude Fable 5 and Mythos 5 models** | 为 Anthropic provider 添加 Claude Fable 5 和 Mythos 5 模型元数据，标记为始终自适应思维模型，省略不支持的 disabled-thinking 和 temperature 参数。[链接](https://github.com/earendil-works/pi/pull/5563) |
| 2 | **[#5564] feat(ai): add Claude Fable 5 and Mythos 5 models** | 直接添加 `claude-fable-5` 和 `claude-mythos-5` 的 Anthropic 模型元数据，处理自适应思维签名在重放时的保留逻辑。[链接](https://github.com/earendil-works/pi/pull/5564) |
| 3 | **[#5567] fix(ai): mark Claude Fable 5 thinking off unsupported** | 修复 Fable 5 不支持关闭 thinking 的问题，避免发送 Anthropic 不支持的 `thinking.type: "disabled"` 载荷。[链接](https://github.com/earendil-works/pi/pull/5567) |
| 4 | **[#5553] Add prompt template argument defaults** | 实现 prompt 模板位置参数默认值（`${N:-default}`），保持单次替换避免递归展开，并添加回归测试。[链接](https://github.com/earendil-works/pi/pull/5553) |
| 5 | **[#5549] feat(ui): Improved project approval settings** | 项目信任功能增强：新增全局开关、支持从父文件夹继承信任设置、在审批对话框中一键信任父文件夹（对齐 VS Code 行为）。直接回应了 #5514 的社区反馈。[链接](https://github.com/earendil-works/pi/pull/5549) |
| 6 | **[#5547] feat(coding-agent): add experimental feature guard** | 按 RFC 0043 添加实验性功能守卫，通过 `PI_EXPERIMENTAL=1` 环境变量启用。[链接](https://github.com/earendil-works/pi/pull/5547) |
| 7 | **[#5554] fix(ai): add opus-4-8 to supportsAdaptiveThinking** | 修复 Claude Opus 4.8 未列入自适应思维支持列表的问题，避免回退到旧版 thinking 路径导致 400 错误。[链接](https://github.com/earendil-works/pi/pull/5554) |
| 8 | **[#5555] fix(ai): attach reasoning_details streamed before tool_calls** | 修复 OpenRouter + Gemini 模型场景下，`reasoning_details` 签名在 `tool_calls` 之前流式传输时被静默丢弃的问题。[链接](https://github.com/earendil-works/pi/pull/5555) |
| 9 | **[#5527] fix(amazon-bedrock): extract region from inference profile ARNs** | 从 Application Inference Profile ARN 中提取 region，优先于 `AWS_REGION` 环境变量，修复跨区域配置错误。[链接](https://github.com/earendil-works/pi/pull/5527) |
| 10 | **[#5544] fix(model-registry): inherit cost from built-in model for custom OpenRouter models** | 修复自定义模型未设置 `cost` 字段时显示 $0.00 的两个交互 bug。[链接](https://github.com/earendil-works/pi/pull/5544) |

### 待合并（Open）

| # | PR | 内容 |
|---|----|------|
| 1 | **[#5561] feat(ai): add Claude Fable 5 to Amazon Bedrock** | 将 Fable 5 的 adaptive thinking 支持扩展到 Bedrock provider，使用 `thinking.type=adaptive` + `output_config.effort` 格式。[链接](https://github.com/earendil-works/pi/pull/5561) |
| 2 | **[#5509] feat: Add Amazon Bedrock Mantle OpenAI Responses provider** | 新增 Bedrock Mantle provider，支持 GPT-5.5 和 GPT-5.4 模型。[链接](https://github.com/earendil-works/pi/pull/5509) |
| 3 | **[#5562] fix(tui): separate list items with blank lines in loose lists** | 修复 CommonMark loose list 渲染时缺少空行分隔的问题。[链接](https://github.com/earendil-works/pi/pull/5562) |
| 4 | **[#5560] fix(coding-agent): parse :thinking suffix from custom model IDs** | 解析自定义模型 ID 中的 `:thinking` 后缀，修复 #5552。[链接](https://github.com/earendil-works/pi/pull/5560) |
| 5 | **[#5385] feat: detect first-run terminal theme** | 首次运行时通过 OSC 查询终端主题（亮色/暗色）并持久化，改善首次使用体验。[链接](https://github.com/earendil-works/pi/pull/5385) |

---

## 5. 功能需求趋势

从今日所有 Issues 和 PRs 中，可提炼出以下社区关注方向：

### 🔥 新模型支持（最高频）
- Claude Fable 5 / Mythos 5 的上线是今日绝对主线，涉及 5+ 个 PR。
- Amazon Bedrock Mantle provider（GPT-5.5/5.4）正在推进中（PR #5509）。
- Azure GPT-5.5/5.4 的 1M 上下文窗口需要更新（Issue #5559）。

### 🔒 项目信任与安全
- Project Trust 功能刚上线即引发激烈讨论（Issue #5514，24 条评论），团队已快速响应，PR #5549 合并了改进方案。
- 社区需要更细粒度的信任控制（全局开关、继承机制）。

### 🐛 本地模型体验
- 本地模型（Ollama）的 3-5 分钟延迟（Issue #5464）和 `getSessionStats()` 崩溃（Issue #5386）是本地开发者的核心痛点。

### 🖥️ 跨平台兼容性
- Windows 路径解析问题（Issue #5350）、Windows 终端渲染问题（Issue #5192、#5394）持续存在。
- CJK 文本换行（Issue #5326）和 IME 兼容性（PR #5283）是东亚用户的关键需求。

### 🧩 扩展性
- 扩展注册自动补全触发字符（Issue #4703）、暴露 `isProjectTrusted` API（Issue #5523）反映社区对插件生态的期待。

---

## 6. 开发者关注点

| 痛点 | 具体表现 |
|------|----------|
| **安全功能与效率的平衡** | Project Trust 功能虽出于安全考虑，但频繁的授权提示严重影响工作流。开发者期望"一次信任，始终信任"的体验。 |
| **本地模型性能** | Ollama 等本地模型的延迟和稳定性问题突出，与云端模型体验差距明显。 |
| **Provider 行为一致性** | 不同 provider 对 thinking、maxTokens 等参数的处理不一致（如 kimi.com thinking 无法关闭、opencode-go 参数映射错误），增加调试成本。 |
| **跨平台开发** | Windows 开发者在路径处理、终端渲染、TUI 交互等方面持续遇到问题，跨平台测试覆盖仍需加强。 |
| **长会话稳定性** | 上下文压缩失败（Issue #5511）、会话文件夹碰撞（Issue #4877）等问题影响长时间使用的可靠性。 |

---

> 📊 **数据概览**：过去 24 小时内，50 个 Issues 更新（30 条高讨论度），23 个 PRs 更新（10 个已合并，5 个待审）。社区活跃度处于高位，模型支持和信任功能是今日两大主题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-10

---

## 1. 今日速览

今日社区迎来 **v0.18.0-preview.1** 预览版发布，主要包含 v0.17.1 的修复积累。社区活跃度极高，过去 24 小时内新增/更新 **28 个 Issues** 和 **50 个 PRs**，热点集中在 **ACP/Serve 协议完善、多 Agent 协作、扩展系统重构** 三大方向。多个核心功能 PR（Agent Team、Dynamic Workflows、`/cd` 命令、prompt cache 优化）正在快速推进中。

---

## 2. 版本发布

### v0.18.0-preview.1 & v0.18.0-preview.0
- **链接**: [v0.18.0-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0-preview.1)
- **主要变更**:
  - `chore(release)`: 合并 v0.17.1 版本修复
  - `fix(cli)`: 复制输出时跳过 thought 部分（由 @he-yufeng 提交）
- **说明**: 当前预览版以修复积累为主，尚未引入重大新功能。

---

## 3. 社区热点 Issues

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|-----------|---------|
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | `qwen serve` HTTP/SSE 能力缺口跟踪 | 系统性梳理 daemon 模式下的远程客户端能力差距，是 ACP 生态对接的基础 | 14 条评论，讨论深入 |
| [#4782](https://github.com/QwenLM/qwen-code/issues/4782) | ACP Streamable HTTP 传输实现状态跟踪 | 实现后 Zed、Goose、JetBrains 等编辑器可直接连接 `qwen serve`，无需适配层 | 4 条评论，战略级功能 |
| [#4615](https://github.com/QwenLM/qwen-code/issues/4615) | 项目级 `.mcp.json` 支持（含审批语义） | MCP 服务器配置的安全治理需求，防止未授权服务器自动启动 | 5 条评论 |
| [#4727](https://github.com/QwenLM/qwen-code/issues/4727) | Dual Output 模式下 TUI 无响应 | 影响非交互式/自动化场景的核心 bug | 5 条评论 |
| [#4888](https://github.com/QwenLM/qwen-code/issues/4888) | IDEA 插件 `ask_user_question` 不显示问题文本 | 直接影响 JetBrains 用户体验 | 3 条评论，P2 优先级 |
| [#4876](https://github.com/QwenLM/qwen-code/issues/4876) | Subagent 读取图片文件返回非预期内容 | 多 Agent 工作流中的关键 bug，主 agent 正常但 subagent 异常 | 3 条评论，P2 优先级 |
| [#4904](https://github.com/QwenLM/qwen-code/issues/4904) | 无法切换到新模型（qwen3.7-plus） | 模型可用性与 auth type 绑定问题，影响用户模型选择 | 2 条评论 |
| [#4889](https://github.com/QwenLM/qwen-code/issues/4889) | Python SDK 支持进程内 MCP 服务器 | 与 Claude Code SDK 对齐的关键能力，当前 Python SDK 最大短板 | 2 条评论 |
| [#4891](https://github.com/QwenLM/qwen-code/issues/4891) | 终端 resize 时流式输出内容碎片化 | 影响 macOS 用户滚动回看体验 | 2 条评论 |
| [#4901](https://github.com/QwenLM/qwen-code/issues/4901) | Windows SYSTEM 用户安装后新会话找不到 qwen | Windows 部署场景的安装路径问题 | 1 条评论 |

---

## 4. 重要 PR 进展

| # | 标题 | 功能/修复 | 状态 |
|---|------|----------|------|
| [#4844](https://github.com/QwenLM/qwen-code/pull/4844) | **Agent Team 实验性功能** — 并行子 Agent 协调 | 模型可创建命名团队，生成多个并行子 Agent，互相通信并共享任务列表，领导者汇总结果 | OPEN |
| [#4732](https://github.com/QwenLM/qwen-code/pull/4732) | **Dynamic Workflows P1** — 最小化 node:vm 沙箱 + 顺序 agent() | 从 Claude Code 2.1.160 移植 Dynamic Workflows，支持模型编写 JS 脚本在沙箱中运行 | OPEN |
| [#4827](https://github.com/QwenLM/qwen-code/pull/4827) | **ACP/REST 对齐** — 29 个新 `_qwen/*` 方法 + 生产加固 | 实现完整的 ACP/REST 协议对齐，包括 session recap、detach、context_usage 等 | OPEN |
| [#4897](https://github.com/QwenLM/qwen-code/pull/4897) | **文件历史快照持久化** — 跨会话 `/rewind` 支持 | 将 FileHistorySnapshot 持久化为 JSONL，使 `/rewind` 在会话恢复后仍可用 | OPEN |
| [#4890](https://github.com/QwenLM/qwen-code/pull/4890) | **`/cd` 命令** — 不重启会话切换工作目录 | 交互式切换会话工作目录，验证目标路径，迁移会话状态 | OPEN |
| [#4896](https://github.com/QwenLM/qwen-code/pull/4896) | **Prompt Cache 稳定性** — 解耦 skill 可见性与验证 | 防止 mid-session skill/MCP 变更导致整个 prompt cache 失效 | OPEN |
| [#4853](https://github.com/QwenLM/qwen-code/pull/4853) | **`enter_plan_mode` 工具 + Plan Approval Gate** | 模型可主动进入计划模式，退出时增加审批门控 | OPEN |
| [#4835](https://github.com/QwenLM/qwen-code/pull/4835) | **项目级扩展安装与管理** | 扩展可安装到 `~/.qwen/extensions/`（用户级）或项目目录（项目级） | OPEN |
| [#4850](https://github.com/QwenLM/qwen-code/pull/4850) | **交互式多标签 `/extensions` 管理器** | 将 `/extensions` 从只读列表升级为 Installed / Discover / Sources 三标签交互界面 | OPEN |
| [#4911](https://github.com/QwenLM/qwen-code/pull/4911) | **修复 Down 箭头需按两次才能到达子 Agent 内容** | 重新排序 TUI 键盘焦点链，使 Down 键一次即可到达运行中的后台子 Agent | OPEN |

---

## 5. 功能需求趋势

从今日 28 个 Issues 中提炼出社区最关注的 **6 大功能方向**:

### 🔌 协议与生态对接 (最高优先级)
- **ACP/Serve 协议完善**: [#4782](https://github.com/QwenLM/qwen-code/issues/4782)、[#4514](https://github.com/QwenLM/qwen-code/issues/4514) — 社区强烈要求对齐 ACP 协议，实现与 Zed、JetBrains 等编辑器的无缝对接
- **REST API 扩展**: [#4902](https://github.com/QwenLM/qwen-code/pull/4902) 游标分页、[#4827](https://github.com/QwenLM/qwen-code/pull/4827) 29 个新方法

### 🤖 多 Agent 协作
- **Agent Team**: [#4844](https://github.com/QwenLM/qwen-code/pull/4844) — 并行子 Agent 协调
- **Dynamic Workflows**: [#4721](https://github.com/QwenLM/qwen-code/issues/4721)、[#4732](https://github.com/QwenLM/qwen-code/pull/4732) — 从 Claude Code 移植
- **Subagent 图片读取**: [#4876](https://github.com/QwenLM/qwen-code/issues/4876) — 多 Agent 工作流中的 bug

### 🔧 扩展系统重构
- **项目级扩展**: [#4835](https://github.com/QwenLM/qwen-code/pull/4835) — 支持项目级安装
- **交互式管理器**: [#4850](https://github.com/QwenLM/qwen-code/pull/4850) — 三标签界面
- **归档/URL 安装**: [#4910](https://github.com/QwenLM/qwen-code/issues/4910) — 支持从 zip 文件安装

### 🔒 安全与治理
- **MCP 审批语义**: [#4615](https://github.com/QwenLM/qwen-code/issues/4615) — 项目级 `.mcp.json` 需显式审批
- **安全模式**: [#4883](https://github.com/QwenLM/qwen-code/issues/4883) — `--safe-mode` 禁用所有自定义

### 🖥️ IDE 集成
- **IDEA 插件**: [#4888](https://github.com/QwenLM/qwen-code/issues/4888) — `ask_user_question` 显示问题
- **桌面应用**: [#4885](https://github.com/QwenLM/qwen-code/issues/4885) — 侧边栏文件浏览

### 📊 可观测性
- **性能指标**: [#4252](https://github.com/QwenLM/qwen-code/issues/4252) — TPS、TTFT 指标
- **时间戳**: [#4899](https://github.com/QwenLM/qwen-code/issues/4899) — CLI 响应可选时间戳
- **CHANGELOG**: [#4872](https://github.com/QwenLM/qwen-code/issues/4872) — 自动化变更日志

---

## 6. 开发者关注点

### 🐛 高频痛点
1. **模型切换与认证**: 多个 Issue 报告模型切换失败（[#4904](https://github.com/QwenLM/qwen-code/issues/4904)、[#4813](https://github.com/QwenLM/qwen-code/issues/4813)、[#4758](https://github.com/QwenLM/qwen-code/issues/4758)），涉及 auth type 绑定、baseUrl 重复配置、运行时快照泄漏等问题
2. **Subagent 行为不一致**: 主 agent 正常但 subagent 读取图片返回无关内容（[#4876](https://github.com/QwenLM/qwen-code/issues/4876)），多 Agent 工作流可靠性存疑
3. **TUI 交互问题**: Down 箭头需按两次（[#4907](https://github.com/QwenLM/qwen-code/issues/4907)）、光标在换行边界卡住（[#4852](https://github.com/QwenLM/qwen-code/pull/4852)）、终端 resize 碎片化（[#4891](https://github.com/QwenLM/qwen-code/issues/4891)）

### 💡 高频需求
1. **会话恢复能力**: `/rewind` 跨会话支持（[#4897](https://github.com/QwenLM/qwen-code/pull/4887)）、后台 Agent 会话恢复时保留 CLI flags（[#4884](https://github.com/QwenLM/qwen-code/issues/4884)）
2. **Python SDK 能力补齐**: 进程内 MCP 服务器支持（[#4889](https://github.com/QwenLM/qwen-code/issues/4889)）是当前 Python SDK 最大短板
3. **调试与安全**: `--safe-mode` 标志（[#4883](https://github.com/QwenLM/qwen-code/issues/4883)）、MCP 审批机制（[#4615](https://github.com/QwenLM/qwen-code/issues/4615)）

### 📈 社区参与特征
- **@qqqys** 今日异常活跃，提交了 `/cd` 命令（[#4890](https://github.com/QwenLM/qwen-code/pull/4890)）、microcompact hook 修复（[#4840](https://github.com/QwenLM/qwen-code/pull/4840)）等多个 PR
- **@chiga0** 持续推进 ACP/REST 对齐，今日新增游标分页 PR（[#4902](https://github.com/QwenLM/qwen-code/pull/4902)）
- **@yiliang114** 专注 Windows 生态，提交 Windows runner CI（[#4908](https://github.com/QwenLM/qwen-code/pull/4908)）和安装问题报告（[#4901](https://github.com/QwenLM/qwen-code/issues/4901)）

---

*数据来源: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 统计时间: 2026-06-10*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*