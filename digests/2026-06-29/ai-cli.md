# AI CLI 工具社区动态日报 2026-06-29

> 生成时间: 2026-06-29 00:40 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告
**数据窗口：2026-06-29 | 分析师：AI Developer Tooling**

---

## 1. 生态全景

2026 年Q2 末，AI CLI 工具生态进入**混战深化期**：Claude Code 领跑功能复杂度与插件生态，OpenAI Codex 深陷计费信任危机，Gemini CLI 猛攻多 Agent 编排稳定性，Copilot CLI 向 IDE 级会话管理渗透，而 Qwen Code / DeepSeek TUI / Kimi CLI 等新兴力量加速追赶。整体呈现三个特征：①**稳定性 vs. 新功能的矛盾**在各工具中普遍爆发；②跨平台（Windows/Linux）体验成为用户留存分水岭；③"成本可预测性"从加分项升级为生存底线。

---

## 2. 各工具活跃度对比

| 工具 | 过去24h Issues 活跃 | PR 数 | 新版本发布 | 核心主题 |
|------|---------------|-------|----------|---------|
| **Claude Code** | 19 条（10 Issues + 5 PR + 4 回归） | 5 | 无 | 桌面端补全、插件生态、成本透明 |
| **OpenAI Codex** | 15 条 Issues | 10 | 无 | GPT-5.5  quota 暴涨、Windows 沙箱、敏感文件隔离 |
| **Gemini CLI** | 10 条 Issues + 10 PR | 10 | nightly v0.51.0 | 安全修复、依赖升级、多 Agent 挂起 |
| **Pi** | 50 条 Issues + 12 PR | 12 | 无 | GPT-5.5 流式卡顿、TUI 稳定性、多 Provider 兼容 |
| **Qwen Code** | 10 条 Issues + 10 PR | 10 | v0.19.3（补丁） | Token 泄漏、v0.19.x 回归、语音频道 |
| **DeepSeek TUI** | 10 条 Issues + 10 PR | 10 | 无（预计 v0.8.67） | 模式体系重构、迁移可见性、新 Provider |
| **OpenCode** | 10 条 Issues + 10 PR | 10 | 无 | Cursor API 适配、内嵌浏览器、权限隔离 |
| **Copilot CLI** | 7 条 Issues + 1 PR | 1 | 无 | 会话管理、企业代理兼容 |
| **Kimi CLI** | 2 条 Issues | 0 | 无 | 死循环（半年未修）、VS Code 内存泄漏 |

> 注：Issues 数包含新增与更新；活跃度以 GitHub API 24h 窗口为准。

---

## 3. 共同关注的功能方向

**① 成本与计费透明（Claude Code、Codex、Qwen Code、DeepSeek TUI）**
- Claude Code #32503 `rate_limit_error`、#72127 Workflow 耗尽配额无告警
- Codex #28879 GPT-5.5 计费倍率暴涨 10–20x；#30002 配额漂移
- Qwen Code #5964 僵尸会话烧掉 30M tokens；#5942 cache miss 推高成本
- DeepSeek #3738 prompt-cache 命中率退化

**② 多 Agent 编排稳定性（Gemini CLI、DeepSeek TUI、Qwen Code）**
- Gemini #21409 Generalist Agent 无限挂起；#22323 子 Agent 误报 success
- DeepSeek #3728 13 并发子代理致 TUI 冻结；Pi #4945 GPT-5.5 流式卡死

**③ Windows / Linux 跨平台补齐（Claude Code、Codex、Qwen Code、DeepSeek TUI、Pi）**
- 各工具分别面临 MSIX 包损坏、bubblewrap 转义、PowerShell 路径编码、mintty 编辑竞争、模态 UI 渲染等经典问题

**④ Plugin / Provider 扩展（Claude Code、Codex、DeepSeek TUI、OpenCode）**
- Claude Code 新增 handover/protect-mcp 两大插件 PR
- Codex 远程插件默认放开（PR #30297）
- DeepSeek 24h 内合并 Sakana AI Fugu Provider
- OpenCode 社区呼吁 Cursor API 对接（#2072，186 赞）

**⑤ 权限与安全沙箱精细化（Claude Code、Codex、Gemini CLI、OpenCode）**
- Codex #2847 `.codexignore`（447 赞）、PR #30482 writes 审批模式
- Gemini #26525 Auto Memory 脱敏前置；#22093 子 Agent 权限绕过
- OpenCode #34190 Plan mode 越权发 GitHub comment

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|---------|---------|-------------|
| **Claude Code** | 全功能旗舰 CLI，插件化扩展 | 高级开发者、团队用户 | Hooks + Plugin 体系、MCP 协议深度集成、Desktop/Web 多端 |
| **OpenAI Codex** | GPT 原生代理，多 Agent V2 架构 | Plus/Pro 订阅用户、企业 | AppToolApproval writes 模式、远程插件默认启用、Bedrock 兼容 |
| **Gemini CLI** | 多 Agent 编排 + 安全加固 | Google 生态开发者 | A2A Server、Auto Memory、AST 感知代码导航、behavioral eval 体系 |
| **Copilot CLI** | GitHub 生态内嵌式 CLI | GitHub 重度用户 | 仓库会话、worktree 支持、IDE 级会话管理 |
| **Qwen Code** | 开源多模型前端，全平台覆盖 | 中文/开源社区 | 多 Provider 路由、语音输入、DingTalk 频道 Agent、Chrome 扩展 |
| **DeepSeek TUI** | 轻量 TUI 客户端，模式体系重构 | 终端爱好者、DeepSeek 用户 | Auto/Plan/Y 三模式、迁移可见性、Sakana 等新 Provider 快速接入 |
| **Pi** | 多 Provider 聚合器 | 多模型用户、极客 | 统一 OpenAI Chat Completions 协议、可配置 TUI padding、模糊搜索 |
| **OpenCode** | 桌面+CLI 一体化，内嵌浏览器 | 桌面用户、独立开发者 | Solid 架构、内嵌浏览器、FreeBSD 支持、手动 compaction V2 |
| **Kimi CLI** | 长上下文推理（Moonshot 模型） | 中文长文本场景 | 自定义 Anthropic 端点兼容（但尚不完善） |

---

## 5. 社区热度与成熟度

**第一梯队（高活跃 + 高复杂度）**
- **Claude Code**：日增 19 条互动，插件 PR 密集，但 Desktop 体验债务明显
- **Pi**：日增 62 条互动（最高），但大量为 bug 报告，反映快速扩张中的质量压力
- **Codex**：194 条讨论的计费危机事件，社区信任处于关键拐点

**第二梯队（稳步迭代 + 细分突破）**
- **Gemini CLI**：nightly 通道持续交付，安全修复响应快，多 Agent 稳定性是攻坚方向
- **Qwen Code**：v0.19.3 紧急补丁，生态扩展活跃（Chrome 扩展、语音、DingTalk）
- **DeepSeek TUI**：集中爆发式维护（单日 15 Issue + 12 PR），模式体系重构中
- **OpenCode**：功能请求量大（Cursor API 186 赞），但交付节奏偏慢

**第三梯队（平稳 / 静默）**
- **Copilot CLI**：会话管理体验升级方向明确，但活跃度低
- **Kimi CLI**：半年无新版本，核心 bug 未修，社区处于静默期

---

## 6. 值得关注的趋势信号

**信号一：成本可预测性成为用户留存核心要素**
> 四款工具（Claude Code、Codex、Qwen Code、DeepSeek）同日爆发计费相关争议。"沉默烧钱"型 Token 泄漏正在摧毁用户信任。**建议开发者：在 agent 启动前展示预估成本上限，设置硬 cap 与 80% 预警。**

**信号二：多 Agent 编排进入"填坑期"**
> Gemini、DeepSeek、Qwen 同时面临子 Agent 挂起、误报 success、并发冻结等问题。多 Agent 编排的可靠性已成为该方向的技术瓶颈，需要更完善的状态机、超时机制与可观测性工具。

**信号三：插件/Provider 生态成为差异化护城河**
> Claude Code 的 handover/protect-mcp、Codex 远程插件默认放开、DeepSeek 24h 接入 Sakana Fugu——"谁能在最短时间内接入最多模型/工具，谁就获得用户"。统一 OpenAI Chat Completions 兼容协议的事实标准地位进一步巩固。

**信号四：Windows 体验是增长天花板**
> 五款工具（Claude Code、Codex、Qwen Code、DeepSeek TUI、Pi）均报告 Windows 专项 bug。对于想要扩大开发者用户基数的工具，Windows 已不再是"可选项"，而是"必选项"。

**信号五：回归测试与 bug 修复彻底性需加强**
> Copilot CLI #3964 软换行复制 bug 修复不彻底导致回归、Qwen Code v0.19.x 密集回归、Claude Code #62332 stale close 后再现——**CI 中引入针对历史 bug 的永久回归测试套件**应成为标准实践。

---

*报告生成时间：2026-06-29 | 数据来源：各工具 GitHub Issues & PRs（24h 窗口）*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-06-29 | 仓库：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. 热门 Skills 排行

| # | Skill / PR | 功能 | 状态 | 链接 |
|---|-----------|------|------|------|
| 1 | **skill-creator 评估修复** (PR #1298, #1099, #1050, #1323) | 修复 `run_eval.py` 在 Windows 上的 0% recall 问题、子进程管道读取、触发检测逻辑 — 这是整个 skill-creator 工具链的核心 bug | 🟠 OPEN | [PR #1298](https://github.com/anthropics/skills/pull/1298) · [PR #1099](https://github.com/anthropics/skills/pull/1099) · [PR #1050](https://github.com/anthropics/skills/pull/1050) · [PR #1323](https://github.com/anthropics/skills/pull/1323) |
| 2 | **document-typography** (PR #514) | AI 生成文档的排版质量控制：防止孤行、孤段、编号错位等常见排版问题 | 🟠 OPEN | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 3 | **skill-quality-analyzer & skill-security-analyzer** (PR #83) | 元技能（meta-skills）：自动分析其他 Skill 的质量（5 维评分）和安全性 | 🟠 OPEN | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **testing-patterns** (PR #723) | 全面测试模式技能：Testing Trophy 模型、单元测试 AAA 模式、React 组件测试 | 🟠 OPEN | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 5 | **AppDeploy** (PR #360) | 从 Claude 直接部署全栈 Web 应用到公网 URL，含版本管理和生命周期管理 | 🟠 OPEN | [PR #360](https://github.com/anthropics/skills/pull/360) |
| 6 | **codebase-inventory-audit** (PR #147) | 代码库全面审计：识别废弃代码、未使用文件、文档缺口、基础设施膨胀，输出 CODEBASE-STATUS.md | 🟠 OPEN | [PR #147](https://github.com/anthropics/skills/pull/147) |
| 7 | **shodh-memory** (PR #154) | AI Agent 跨会话持久化记忆系统，维护上下文连续性 | 🟠 OPEN | [PR #154](https://github.com/anthropics/skills/pull/154) |
| 8 | **ODT Skill** (PR #486) | OpenDocument 格式（.odt/.ods）创建、模板填充、解析转 HTML | 🟠 OPEN | [PR #486](https://github.com/anthropics/skills/pull/486) |

> **讨论热点**：skill-creator 工具链的 Windows 兼容性和评估准确性是当前最活跃的技术讨论焦点，多个独立 PR 从不同角度修复同一组问题。

---

## 2. 社区需求趋势

从 Issues 提炼的 Top 5 需求方向：

| 方向 | 代表 Issue | 社区呼声 |
|------|-----------|---------|
| **🔒 安全治理** | [#492](https://github.com/anthropics/skills/issues/492)（27 评论） | 社区 Skill 使用 `anthropic/` 命名空间导致信任边界被滥用，需官方审核/命名空间隔离机制 |
| **🏢 企业级协作** | [#228](https://github.com/anthropics/skills/issues/228)（14 评论, 👍7） | 组织内 Skill 共享机制 — 当前只能手动通过 Slack/Teams 分发 .skill 文件 |
| **🐛 工具链稳定性** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论, 👍7） | `run_eval.py` 评估循环完全失效（0% trigger rate），影响所有 Skill 描述优化 |
| **🧠 Agent 记忆/状态管理** | [#1329](https://github.com/anthropics/skills/issues/1329) | 长上下文 Agent 的紧凑记忆表示，减少 token 消耗 |
| **🔌 平台互操作** | [#16](https://github.com/anthropics/skills/issues/16)（Expose Skills as MCPs） | 将 Skill 暴露为 MCP 协议端点，实现跨工具调用标准化 |

---

## 3. 高潜力待合并 Skills

以下 PR 社区活跃度高、解决实际问题，合并可能性较大：

| PR | 潜力评级 | 理由 |
|----|---------|------|
| **[#509](https://github.com/anthropics/skills/pull/509) CONTRIBUTING.md** | ⭐⭐⭐ | 直接解决 Issue #452（社区健康度仅 25%），是官方明确缺失的基础设施 |
| **[#538](https://github.com/anthropics/skills/pull/538) PDF 大小写修复** | ⭐⭐⭐ | 8 处简单 bugfix，影响 PDF Skill 在 Linux/macOS 上的可用性，低风险高价值 |
| **[#539](https://github.com/anthropics/skills/pull/539) / [#361](https://github.com/anthropics/skills/pull/361) YAML 特殊字符校验** | ⭐⭐⭐ | 防止 description 字段因未引号导致 YAML 静默解析失败，影响所有 Skill 创建 |
| **[#362](https://github.com/anthropics/skills/pull/362) UTF-8 panic 修复** | ⭐⭐⭐ | 多字节字符导致 Rust 后端 panic，影响非英语 Skill 作者 |
| **[#723](https://github.com/anthropics/skills/pull/723) testing-patterns** | ⭐⭐ | 测试是开发者高频需求，内容全面且无争议 |
| **[#514](https://github.com/anthropics/skills/pull/514) document-typography** | ⭐⭐ | 解决 Claude 生成文档的普遍痛点，但需评估与现有 docx/pdf Skill 的边界 |

---

## 4. Skills 生态洞察

> **一句话总结：当前社区最集中的诉求是「工具链可信度」—— 无论是 skill-creator 评估循环的 0% recall bug、Windows 兼容性缺失、YAML 解析静默失败，还是社区 Skill 命名空间的安全信任问题，本质上都在追问同一个问题：如何让 Skill 生态从「可用」走向「可信」。**

---

# Claude Code 社区动态日报 — 2026-06-29（周日）

## 1. 今日速览

 生态高度活跃（过去24小时社区反馈密集，微博速和投票集中在 **Issue 70672（鼠标交互细化，👍 18）** 与 **Issue 42142（Desktop 版缺少 `/plugin` 命令，👍 8）** 两条，均反映桌面端体验缺口；**PR 侧**可见两个新开源 PR（handoff、protect-mcp 插件）进入社区，插件体系仍是扩展重点。无新版本发布。

---

## 2. 版本发布

过去 24 小时无新 Release。（最近版本追溯：Desktop 端最后上报为 2.1.121；CLI 端识别到的最高 skill为 2.1.195，见 Issue #72166。）

---

## 3. 社区热点 Issues

| # | Issue | 反应 | 核心要点与影响 |
|---|---|---|---|
| 1 | **#70672** 鼠标控制细化 | 👍 18 /  6 | TUI 新增鼠标点击菜单可选中，用户希望**禁用点击选中但保留滚轮**。👍 数今日最高，说明桌面/终端鼠标交互是高频诉求，开发者反馈"click-to-select"干扰键盘流。 |
| 2 | **#42142** Desktop 缺少 `/plugin` 命令 | 👍 8 / 💬 9 | Claude Code Desktop (Mac) 无法添加 plugin marketplace，且 Claude 自己对 hallucinate 该功能。**长期痛点**（开 3 个月），反映桌面端与 CLI 功能差距。 |
| 3 | **#32503** `/usage` 报 `rate_limit_error` | 👍 13 / 💬 9 | Usage 面板频繁触发限流。影响所有需要查看用量的高端用户，社区规模最大的计费相关工单。 |
| 4 | **#72121** 一键将聊天保存为 Skill/Agent |  4 | 希望将一段成功对话直接固化为可复用 skill/agent，代表**可复用工作流的强需求**。 |
| 5 | **#72127** Workflow 工具烧完 5x 配额无告警 |  3 | 简单任务触发 8–10 个并行 Research Agent 并耗尽配额，**缺乏开销提示和授权提示**，成本失控。 |
| 6 | **#64301** Bash sandbox 在 Linux 把 `!` 转义为 `\\!` |  2 / 👍 3 | bubblewrap 包装路径导致 bash 历史扩展转义残留，**sandbox 在 Linux 对含 `!` 命令不可用**。 |
| 7 | **#62332** `claude mcp add -e KEY=VAL` 仍失败 | 👍 1 / 💬 2 | 与 #23365 / #29221 重复，stale close 后再现，**添加 MCP 传环境变量的基本 CLI 体验问题**。 |
| 8 | **#3** macOS 系统快捷键 Cmd+H/M 失效（VS Code） | 💬 7 / 👍 6 | 焦点在 Claude 面板时系统级快捷键被拦截，**影响日常 OS 工作流**。 |
| 9 | **#69542** Claude in Chrome 每次新会话新开 Tab 组 | 💬 3 | Web 扩展 tab group 复用问题，**桌面 web 端体验缺失**。 |
| 10 | **#71766** OAuth 登录报 `UNABLE_TO_GET_ISSUER_CERT`（Let's Encrypt ISRG Root X2） |  1 | 疑似证书链变更导致的部分 Linux 环境登录失败，**安全认证回归风险**。 |

> *另外值得关注（因刚关闭但仍活跃讨论）：#55095 Desktop 上"Bypass permissions"开关失效、#60142 Agent SDK 的子 Agent 完成信号顺序问题、#59851 cowork 域名白名单被 sandbox 代理忽略。*

---

## 4. 重要 PR 进展

\* 过去 24 小时更新的 PR 共 5 条。

| PR | 状态 | 要点 |
|---|---|---|
| **#7** Add handover plugin — 会话导出用于 LLM-to-LLM handoff | OPEN | 新增 `plugins/handover/`，将当前会话上下文导出为结构化 Markdown，便于切换会话/LLM/团队共享。社区对 **跨会话工作** 的现实需求。 |
| **#72014** protect-mcp plugin — Cedar 策略门控 + 签名凭证 | OPEN | 插件对 MCP 工具调用做 fail-closed 策略检查，并对每个决策生成离线可验证的签名 receipt。**安全/审计方向**的社区方案。 |
| **#72000** docs: 更新插件安装指引 | OPEN | 将安装说明指向推荐安装器，**改善 plugin onboarding**。 |
| **#41447** Open source Claude Code | OPEN | 一键"开源 Claude Code"呼声（引用了 #59，#456，#22002 等社区 issue），**长期悬而未决的 OSS 诉求**。 |
| **#62315** Fix hookify event filtering in pre/post hooks | CLOSED | **Hooks 事件过滤**的修复，影响自定义流水线可靠性的基础修复。 |

---

## 5. 功能需求趋势

> Issues 分类关键词：Desktop / CLI / Hooks / Plugin / Sandbox / Plan mode / Bug / Enhancement / Feature Request / AI / Auth / Security / Skills
> *摘要：社区议题覆盖面广，插件体系、桌面端体验、沙箱与工作流成本核心方向。*

从今日 Issue 聚类来看：

1. **桌面端 & Web 端体验补全** — #42142（plugin market）、#55095（Bypass Permissions UI）、#69542（Chrome Tab 组复用）、#72162（plugin reload 不生效）。桌面版与 CLI 功能差是**最强共识**。
2. **插件生态扩展** — 多条 feature request 和 2 个插件 PR（handoff、protect-mcp）直指**可插拔架构成为 Claude Code 主线扩展路径**。
3. **成本与计费透明** — #32503（usage 限流）、#72127（Workflow 耗尽配额无警告）：**token 用量可视化 + 预警**是 Pro/Team 用户的硬需求。
4. **Sandbox / 安全策略精细化** — #64301（`!` 转义）、#72168（误报本地 telnet）、#72163（安全过滤误杀）：开发者需要**更细粒度的安全开关**。
5. **Hooks / Agent SDK / 多Agent 管道** — #60142、#721171、#72035（查看 context window 调试命令）：**高级开发者**需要更接近底层的可观测性与控制面。
6. **MCP 协议入门修复** — #62332（`mcp add -e` CLI 失败）等重复关闭的 stale bug，意味着**MCP 集成基本体验仍待完善**。

---

## 6. 开发者关注点（高频痛点）

-  **成本失控无预警**：Workflow 模式一次调用耗尽 5x Plan (#72127)、usage 面板反被限流 (#32503)。开发者明确希望有**调用上限硬 cap / 过渡预警**。
- 🖥️ **Desktop 与 CLI 功能差距**：最常被点名的是 `/plugin`、Bypass permissions、Chrome tab 复用。桌面端被称作"二等公民"。
-  **Windows / Linux二阶问题多**：JetBrains lockfile 误判 (#72129)、bubblewrap 命令转义 (#64301)、MSIX 包损坏 PATHEXT/WINDIR (#62574)、Ktor NoClassDefFoundError (#62398) —— **平台兼容性**是长期债务。
-  **Plugin 市场/安装可靠性**：#42142、#72162、#59851（cowork 域名白名单未生效）共同指向**插件分发 + 沙箱代理协同**的不稳定。
- ️ **调试与可观测性不足**：#72035 明确要求"查看完整 context window 的命令"；#60142 的子 Agent 事件顺序问题也反映**多 Agent 管道需要 trace**。
- 🔐 **安全与认证回归**：#71766（Let's Encrypt 新链认证失败）影响 OAuth 登录，需关注是否会扩大影响面。

---

> *数据源：github.com/anthropics/claude-code（Issues & PRs，过去 24 小时更新）。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-29

---

## 1. 今日速览

6 月 27–29 日社区核心争议集中在 **GPT-5.5 配额消耗异常**（每 token 计费倍率暴涨 10–20 倍，引发 194 条讨论）和 **Codex 桌面端在 Windows 上持续的沙箱/性能问题**（大量 TRACE 日志导致 SQLite WAL 年写入量达 PB 级）。与此同时，OpenAI 内部团队正密集推进 V2 多代理（Multi-Agent）、安全缓冲（Safety Buffering）和跨线程推理 effort 的相关修复。过去 24 小时无新版发布。

---

## 2. 版本发布

过去 24 小时内 **无新 Release**。

---

## 3. 社区热点 Issues

| # | Issue | 热度 | 核心问题 | 为什么值得关注 |
|---|-------|------|----------|----------------|
| 1 | **#28879** Codex (gpt-5.5, Plus) — rate-limit cost per token jumped ~10-20x since June 16 | 194 评 / 337 👍 | 6 月 16 日起 gpt-5.5 Plus 计划的 token 计费倍率暴涨 10–20 倍，5 小时预算仅能支撑 2–3 条 prompt | 最高热度，大量 Plus/Pro 用户联署；OpenAI 尚未正式回应单价变更是否为预期行为 |
| 2 | **#28224** Codex SQLite feedback logs can write ~640 TB/year | 97 评 / 403 👍 | 反馈日志 SQLite WAL 编年写入量可达 PB 级，SSD 寿命风险极高 | 作者已自行关闭：3 个 PR 合并后可减少 85% 日志；但 Windows 端仍有复现（#30405） |
| 3 | **#2847** A way to exclude sensitive files | 86 评 / 447 👍 | 需要 `.codexignore` 机制阻止 agent 读取/上传敏感文件 | 最高点赞量，数据安全合规场景刚需，社区呼声极长周期未解决 |
| 4 | **#29955** Quota drained instantly: 100 credits gone after 1 message | 30 评 / 8 👍 | Pro 5h 额度单条消息归零 | 疑似配额记账系统端 Bug，与 #28879 形成呼应 |
| 5 | **#30002** Server-side quota accounting over-reports consumption after 5h reset | 28 评 / 6 👍 | 5h 重置后 Pro 账户仅 ~41 分钟 / 1.35M token 即再次触发限额（此前可跑 156M） | 后端配额核算漂移的典型表现，加剧信心危机 |
| 6 | **#29072** Windows Codex App: apply_patch fails because codexe-windows-sandbox-setup.exe cannot launch | 25 评 / 19 👍 | Windows 桌面 `apply_patch` 全部失败，源自沙箱启动器无法从包路径启动 | Windows 开发者阻塞级 Bug，多个相关 Issue（#14094、#10090、#29427）久拖未决 |
| 7 | **#30364** GPT-5.5 Codex reasoning-token clustering at 516/1034/1552 may degrade performance | 12 评 / 12 👍 | gpt-5.5 推理 token 计数高度聚集在 516/1034/1552 这几个阈值，模型行为疑似量化或截断 | 新发现，若确认将影响使用成本可预测性 |
| 8 | **#17320** Excessive SQLite WAL writes during streaming due to TRACE logs ignoring RUST_LOG | 16 评 / 36 👍 | 流式输出期间 TRACE 日志无视 `RUST_LOG` 过滤器持续写入 | #28224 的子集，但跨 IDE 扩展同样触发 |
| 9 | **#30405** Windows 26.623.5546.0 still persists high-frequency TRACE logs to logs_2.sqlite WAL | 6 评 | 最新版 Windows 桌面仍存在 TRACE 高频写入 | 表明此前修复（v0.142.0）在桌面端尚不完整 |
| 10 | **#28969** Add setting to disable the auto-resolve in 60 seconds for questions | 5 评 / 46 👍 | CLI 提问题目 60 秒后自动默认回复，缺少配置开关 | 开发者工作流中断痛点，点赞率极高 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 内容要点 |
|---|-----|------|----------|
| 1 | **#30482** Add writes app approval mode | 新功能 | 为 `AppToolApproval` 新增 `writes` 模式：`readOnlyHint=true` 的工具自动放行，其余写入操作需逐次审批 |
| 2 | **#30493** Add configurable multi-agent mode hint text | 新功能 | 多代理 V2 支持通过 `features.multi_agent_hint` 配置稳定 hint 策略，不随 reasoning effort 波动切换 |
| 3 | **#30467** Treat max as a first-class reasoning effort | 修复/兼容 | Bedrock GPT-5.6 目录中的 `max` effort 升至一等公民，修复 UI parsing 不一致的问题 |
| 4 | **#30488** Show reset details in redemption picker | 体验 | 额度重制兑换界面展示可用额度、过期时间和扣减顺序明细 |
| 5 | **#30395** Expose rate-limit reset credit details | API 扩展 | `account/rateLimits/read` 新增 v2 接口，返回可用调额额度与过期时间，客户端无需直连后端私有接口 |
| 6 | **#30487** Fall back from unsupported reasoning effort | 修复 | 跨线程消息若传入当前模型不支持的 `max` effort，自动回退至最近可用档位 |
| 7 | **#30297** Enable remote plugins by default | 开关翻转 | 远程插件（Remote Plugins）正式脱离 beta 默认启用，仍可通过 `features.remote_plugin` 关闭 |
| 8 | **#30492** Fix slash command popup dismissal | Bug 修复 | 修复 `/rev` → Escape 关闭后又立即重新弹出的循环问题 |
| 9 | **#300**（含 #30478/#30479/#30480）TUI 系列清理 | Bug 修复 | 清缓冲提示副本、视口增长时保持底部对齐、避免 Windows 终端 Unicode 重复输入 |
| 10 | **#29740** Use model metadata for skills usage instructions | 重构 | 将技能使用说明从硬编码迁移到模型元数据字段 `include_skills_usage_instructions`，随模型动态启用（捆绑 gpt-5.5 已开启） |

---

## 5. 功能需求趋势

1. **配额/计费透明化**：#28879、#29955、#30002 形成合并压力，社区要求 OpenAI 公开费率变更机制与实时用量明细。
2. **敏感文件隔离/沙箱策略**：#2847（`.codexignore`）赞数最高 #一票难求#，企业用户强烈需要数据防泄漏能力；#30482 的 `writes` 审批模式是官方方向上的回应。
3. **Windows 沙箱可靠性**：#29072、#14094、#10090、#29427、#13755、#16690 等形成 Windows 问题集群，覆盖沙箱启动、编码、路径、日志等多个维度，是扩大 Windows 开发者规模的最大障碍。
4. **Multi-Agent V2**：相关 PR 密集（#30493、#30217、#30228），任务消息加密、hint 策略、skills 暴露正在快速成型。
5. **TUI/远程插件**：远程插件默认放开（#30297）与一系列 TUI 修复体现了 CLI/桌面端正进入体验抛光阶段。

---

## 6. 开发者关注点

- **成本可预测性崩溃**：gpt-5.5 计费倍率异常已引发社区信任危机，用户迫切期待官方声明与退款/补偿路径。
- **Windows 体验长期滞后**：沙箱日志暴增、PowerShell 路径编码、自动补全紊乱等基础功能 Bug 自 Q1 堆积至今，LTS 缺失。
- **敏感数据保护缺位**：没有 repository/global 级别的 ignore 方案，很多企业环境无法合规接入。
- **CLI 自动超时决策**：60 秒 auto-resolve 看似微小，实则在 TUI 交互流中造成大量误操作反馈。
- **本地高资源消耗**：Desktop 进程高 CPU、GPU 编解码、SQLite PB 级写入，使 Codex 在笔记本电池续航敏感场景下口碑受损。

---

> 所有链接均来自 `github.com/openai/codex`，可直接在报告内跳转。下一次日报将追踪 gpt-5.5 配额解释、Windows 沙箱修复以及 Multi-Agent V2 正式 GA 进度。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**2026-06-29**

---

## 1. 今日速览

今日社区以**安全修复**和**依赖更新**为主线：nightly 版本修复了敏感路径大小写绕过的安全漏洞，同时 Dependabot 集中合并了 15+ 个依赖升级 PR（含 `@google/genai` 大版本升级至 2.9.0）。Issues 方面，**Subagent 恢复机制缺陷**（#22323）和**通用 Agent 挂起**（#21409）持续引发高关注，反映出多 Agent 编排的稳定性仍是社区最大痛点。

---

## 2. 版本发布

### v0.51.0-nightly.20260628.gae0a3aa7b

**安全修复：**
- **fix(security)**: 强制敏感路径黑名单大小写不敏感匹配，修复 VS Code HITL（Human-in-the-Loop）场景下路径校验可能被大小写变体绕过的问题。PR [#27966](https://github.com/google-gemini/gemini-cli/pull/27966)

> 完整 Changelog: [v0.51.0-nightly.20260626...v0.51.0-nightly.20260628](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-nightly.20260628)

---

## 3. 社区热点 Issues

| # | Issue | 优先级 | 👍 | 关注理由 |
|---|-------|--------|-----|----------|
| 1 | [#22323] Subagent 达到 MAX_TURNS 后报告 GOAL success，隐藏中断事实 | P1 | 2 | **核心体验缺陷**：子 Agent 未完成任务却被标记为成功，导致用户误以为分析已完成。8 条评论，需 retesting。 |
| 2 | [#21409] Generalist Agent 无限挂起 | P1 | 8 | **👍最高**：简单操作（如创建文件夹）也卡死，用户被迫禁用 subagent。8 条评论，影响面广。 |
| 3 | [#19873] 通过零依赖 OS 沙箱利用模型的 bash 亲和性 | P2 | 1 | **架构级提案**：让 Gemini 3 原生使用 POSIX 工具链，同时保障安全。8 条评论，effort/large。 |
| 4 | [#24353] 组件级评估体系建设 (EPIC) | P1 | 0 | **质量基础设施**：已有 76 个 behavioral eval，需扩展到组件级别。7 条评论。 |
| 5 | [#22745] AST 感知文件读取/搜索/映射影响评估 (EPIC) | P2 | 1 | **性能优化方向**：通过 AST 精确读取方法边界，减少 token 浪费和 turn 数。7 条评论。 |
| 6 | [#25166] Shell 命令执行完成后卡在 "Waiting input" | P2 | 3 | **高频 Bug**：命令已结束但 UI 显示等待输入，4 条评论，3 人点赞。 |
| 7 | [#26525] Auto Memory 需确定性脱敏并减少日志 | P2 | 0 | **安全隐患**：transcript 内容在脱敏前已进入模型上下文，可能泄露 secrets。5 条评论。 |
| 8 | [#26522] Auto Memory 无限重试低信号会话 | P2 | 0 | **资源浪费**：提取 Agent 跳过低信号会话后，该会话会反复被重新发现。5 条评论。 |
| 9 | [#21983] Browser subagent 在 Wayland 下失败 | P1 | 1 | **平台兼容性**：Linux Wayland 用户无法使用浏览器 Agent，4 条评论。 |
| 10 | [#22093] v0.33.0 后 Subagent 绕过权限执行 | P2 | 0 | **权限回归**：用户已禁用 Agent 模式但仍被调用 subagent，2 条评论。 |

---

## 4. 重要 PR 进展

### 已合并（今日）

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 1 | [#28191] | 依赖升级 | `@google/genai` 从 1.30.0 → **2.9.0**（大版本升级，可能涉及 API 变更） |
| 2 | [#28194] | 依赖升级 | `undici` 7.10.0 → 8.5.0（含安全修复） |
| 3 | [#28196] | 依赖升级 | `js-yaml` 4.1.1 → 5.0.0（主版本升级） |
| 4 | [#28193] | 依赖升级 | `@types/node` 20.x → 26.0.0（Node 类型定义对齐） |
| 5 | [#28190] | 依赖升级 | 批量更新 75 个 npm 依赖（含 `@agentclientprotocol/sdk` 0.16→0.28） |
| 6 | [#28197] | 依赖升级 | `uuid` 13.x → 14.0.1 |
| 7 | [#28195] | 依赖升级 | `chrome-devtools-mcp` 0.19 → 1.3.0（DevTools MCP 大幅升级） |
| 8 | [#28186] | CI/CD | `codeql-action` 3.29 → 4.36（安全扫描工具升级） |

### 待审（Open）

| # | PR | 优先级 | 说明 |
|---|-----|--------|------|
| 1 | [#27754] | P1 | **fix(a2a-server)**: 修复 GET /tasks/metadata 返回 501 后缺少 return 导致崩溃 |
| 2 | [#27863] | P1 | **fix(core)**: 工具调用时优先使用结构化显示标题 |
| 3 | [#27867] | P1 | **fix(a2a-server)**: 防止 tasks metadata 端点返回 501 时崩溃 |
| 4 | [#27860] | P2 | **fix(cli)**: 修复斜杠命令冲突去重后重新出现不提醒的问题 |
| 5 | [#27862] | P2 | **fix(cli)**: 在 UI 中保留正在执行的 subagent 工具调用状态 |
| 6 | [#22279] | P2/P3 | **feat(ui)**: 将 "ToDo" 重命名为 "Tasks"（语义更清晰） |

---

## 5. 功能需求趋势

从当前活跃 Issues 提炼出社区最关注的 **5 大方向**：

### 🔴 1. 多 Agent 编排稳定性（最高优先级）
- Subagent 恢复/重试机制（#22323, #26522）
- Generalist Agent 挂起（#21409）
- Subagent 权限绕过（#22093）
- Subagent 轨迹可观测性（#22598）

### 🟠 2. 安全加固
- 敏感路径大小写绕过（已修复）
- Auto Memory 脱敏前置（#26525）
- 无效 memory patch 隔离（#26523）
- 破坏性命令防护（#22672）

### 🟡 3. 模型能力利用
- 零依赖 OS 沙箱 + bash 亲和性（#19873）
- AST 感知代码导航（#22745, #22746）
- 工具数量超限处理（#24246）

### 🟢 4. 质量评估基础设施
- 组件级 behavioral eval（#24353）
- 任务追踪器原生文件工具（#21000）

### 🔵 5. 平台兼容性
- Wayland 下 Browser Agent（#21983）
- 终端 resize 性能（#21924）
- 外部编辑器退出后渲染损坏（#24935）

---

## 6. 开发者关注点

### 🔥 高频痛点

| 痛点 | 影响范围 | 典型反馈 |
|------|----------|----------|
| **Agent 挂起/卡死** | 所有使用 subagent 的用户 | "Simple changes like folder creation hang. I've let it wait for up to an hour" (#21409) |
| **状态误报** | 依赖 subagent 结果的用户 | "Reports status: success even though it hit the maximum turn limit before doing any analysis" (#22323) |
| **Shell 命令假死** | 频繁执行 CLI 命令的用户 | "Shell command has already finished but still shows Awaiting user input" (#25166) |
| **Auto Memory 可靠性** | 使用记忆功能的用户 | 低信号会话无限重试、无效 patch 静默跳过 (#26522, #26523) |
| **权限控制不一致** | 企业/安全敏感用户 | "Agents mode disabled but subagents still being used" (#22093) |

### 💡 开发者期望

1. **更透明的 Agent 执行状态** — 用户需要清楚知道 subagent 是"成功完成"还是"达到限制后放弃"
2. **更智能的工具选择** — 当工具数超限时自动筛选，而非直接 400 报错
3. **更好的沙箱策略** — 在利用模型 bash 能力的同时保障安全（#19873 提案）
4. **Subagent 可观测性** — 通过 `/chat share` 等方式查看子 Agent 执行轨迹

---

*数据来源: github.com/google-gemini/gemini-cli | 统计时间: 2026-06-29*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-06-29 | 数据源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时社区活跃度较高，共新增/更新 **7 条 Issues** 和 **1 条 PR**，无新版本发布。核心动态集中在三个方面：**会话管理体验优化**（文件树浏览、标签分类、计划状态指示器）、**企业代理网络兼容性**（headless 模式下 fetch 失败）以及 **终端输出复制 bug 回归**。PR 方面仅有一条无实质内容的更名 PR 被关闭，无重要代码合并。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

以下按影响面和讨论热度排序，精选最值得关注的 Issues：

### 🔴 高优先级 — Bug 回归 & 兼容性问题

| # | Issue | 要点 |
|---|-------|------|
| 1 | **#3964** [CLOSED] 复制软换行输出时仍丢失换行处空格（v1.0.65） | 此前 #3666 在 v1.0.49 宣称已修复，但用户反馈 v1.0.59 及 v1.0.65 仍存在该问题，属于**修复不彻底的回归 bug**。影响终端输出可读性。[链接](https://github.com/github/copilot-cli/issues/3964) |
| 2 | **#2978** [OPEN] SDK headless 模式下企业代理 `session.create` 报 "fetch failed" | 企业用户在 HTTP 代理环境下，`@github/copilot-sdk` v0.3.0（CLI v1.0.36）无法正常创建会话。虽然环境变量已正确传递，但底层 `undici` 7.22 可通，说明 CLI 子进程的代理处理存在缺陷。**影响企业用户核心工作流**。[链接](https://github.com/github/copilot-cli/issues/2978) |
| 3 | **#3815** [OPEN] Windows 调试日志路径缺少反斜杠 `\` | Windows 平台路径拼接 bug，导致用户无法直接复制路径到资源管理器。虽为小问题，但影响 Windows 开发者调试体验。[链接](https://github.com/github/copilot-cli/issues/3815) |

### 🟡 中优先级 — 功能请求（会话管理体验）

| # | Issue | 要点 |
|---|-------|------|
| 4 | **#3971** [OPEN] 仓库会话支持完整文件树浏览 | 当前文件夹会话有侧边栏文件树，但仓库会话（worktree）仅显示 Git Changes 视图。用户希望统一体验，可直接浏览和打开仓库中任意文件。**影响多仓库开发效率**。[链接](https://github.com/github/copilot-cli/issues/3971) |
| 5 | **#3970** [OPEN] 会话支持用户自定义标签（可搜索/过滤） | 随着会话数量增长，用户缺乏分类组织手段。请求引入轻量级标签系统，支持按功能、仓库、工作流等维度筛选。**高频管理需求**。[链接](https://github.com/github/copilot-cli/issues/3970) |
| 6 | **#3969** [OPEN] 会话列表项添加计划状态指示器（badge/symbol） | 用户无法直观判断各会话的计划进度，需逐个打开查看。请求在会话列表中添加视觉标记（如进行中/已完成/待审核）。**多任务并行场景下的刚需**。[链接](https://github.com/github/copilot-cli/issues/3969) |

### 🟢 低优先级 — 其他反馈

| # | Issue | 要点 |
|---|-------|------|
| 7 | **#3967** [OPEN] Copilot 在双终端使用后消失，提示未安装（Ubuntu 24.04） | 用户首次使用体验良好，但在 Guake 和 Terminal 双终端场景下 Copilot 突然不可用。可能涉及进程管理或安装状态检测问题，需更多复现信息。[链接](https://github.com/github/copilot-cli/issues/3967) |

> **注：** 其余 Issues 为重复或低信息量条目，未列入。

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **1 条 PR 更新**：

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | **#3968** Rename changelog.md to changelog.md | ❌ CLOSED | 标题与内容相同（文件更名前后一致），无实质变更，已被关闭。[链接](https://github.com/github/copilot-cli/pull/3968) |

> **总结：** 过去 24 小时无重要代码合并或功能 PR，开发节奏相对平缓。

---

## 5. 功能需求趋势

从当前 Issues 中提炼出社区最关注的三大方向：

### 📊 趋势一：会话管理体验升级（占比最高）
- **文件树浏览统一化**（#3971）：仓库会话与文件夹会话的体验对齐
- **会话分类与检索**（#3970）：自定义标签、搜索过滤
- **计划状态可视化**（#3969）：会话列表中的进度指示器

> **趋势解读：** 随着 Copilot CLI 用户基数增长，**多会话并行管理**成为核心痛点。社区期望 CLI 提供更丰富的会话组织、导航和状态感知能力，向 IDE 级体验靠拢。

### 📊 趋势二：企业环境兼容性
- **代理网络支持**（#2978）：headless 模式下的 HTTP 代理处理
- **Windows 平台体验**（#3815）：路径格式等细节问题

> **趋势解读：** 企业用户是 Copilot 的重要客户群，网络隔离和跨平台兼容性直接影响产品可用性。

### 📊 趋势三：终端输出质量
- **软换行复制 bug**（#3964）：修复不彻底导致回归

> **趋势解读：** CLI 工具的输出是用户与 AI 交互的核心载体，任何显示/复制问题都会直接影响使用信心。

---

## 6. 开发者关注点

综合今日社区反馈，开发者核心痛点如下：

| 痛点 | 涉及 Issue | 影响面 |
|------|-----------|--------|
| **会话管理缺乏组织手段** | #3970, #3969, #3971 | ⭐⭐⭐ 高频需求，影响日常使用效率 |
| **企业代理环境兼容性差** | #2978 | ⭐⭐ 阻塞企业用户核心工作流 |
| **Bug 修复不彻底导致回归** | #3964 | ⭐⭐ 损害用户信任，需加强回归测试 |
| **Windows 平台细节体验** | #3815 | ⭐ 影响 Windows 开发者调试 |
| **安装/进程稳定性** | #3967 | ⭐ 偶发但影响首次使用体验 |

### 💡 建议关注
1. **会话管理功能**是社区呼声最高的方向，建议团队评估优先级并给出路线图
2. **#2978 企业代理问题**已开放超过 2 个月，建议尽快响应或提供 workaround
3. **#3964 回归 bug** 需追溯 #3666 的修复逻辑，确保彻底解决

---

*日报生成时间：2026-06-29 | 数据来源：GitHub API | 覆盖窗口：过去 24 小时*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-06-29**

---

## 1. 今日速览

过去 24 小时内，Kimi Code CLI 社区无新版本发布，也无新的 Pull Request 活动。社区讨论集中在两个长期未解决的 Bug 上：CLI 陷入文件读取死循环的问题持续引发关注（Issue #640，已有 15 条评论），以及 VS Code 插件内存消耗过高的问题（Issue #1592）。整体来看，社区当前最突出的诉求集中在**稳定性修复**和**IDE 插件性能优化**两个方向。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3.社区热点 Issues

今日仅有 2 条 Issue 在过去 24 小时内更新，均值得开发者关注：

### 🔴 Issue #640 — CLI 陷入文件读取死循环

| 字段 | 详情 |
|------|------|
| **状态** | OPEN · bug |
| **版本** | 0.76 |
| **平台** | Linux x86_64 |
| **模型** | mimo-v2-flash（自定义 Anthropic 端点） |
| **互动** | 💬 15 条评论 · 👍 1 |
| **链接** | [MoonshotAI/kimi-cli#640](https://github.com/MoonshotAI/kimi-cli/issues/640) |

**问题摘要：** 用户报告 Kimi CLI 在读取某个文件时反复卡住，陷入无限循环，导致进程无法继续执行。该 Issue 自 2026-01-19 创建至今已有近半年，15 条评论表明多位用户复现了类似问题，但尚未得到官方修复。

**为什么重要：** 文件读取死循环属于**阻塞性严重 Bug**，直接影响 CLI 的核心可用性。长时间未修复可能影响用户对工具稳定性的信心，建议团队优先排查。

---

### 🟡 Issue #1592 — VS Code 插件内存消耗过高

| 字段 | 详情 |
|------|------|
| **状态** | OPEN · bug |
| **版本** | 0.4.5 |
| **平台** | macOS Darwin arm64 |
| **模型** | 未指定 |
| **互动** | 💬 1 条评论 · 👍 0 |
| **链接** | [MoonshotAI/kimi-cli#1592](https://github.com/MoonshotAI/kimi-cli/issues/1592) |

**问题摘要：** 用户反馈在 VS Code 中安装 Kimi Code 插件后，长时间执行任务时内存占用持续增长，疑似存在内存泄漏。

**为什么重要：** 内存泄漏问题在 IDE 插件场景下尤为敏感——开发者通常长时间保持 IDE 打开，内存持续累积最终会导致 IDE 卡顿甚至崩溃。该问题直接影响 VS Code 插件的用户体验和留存率。

---

## 4. 重要 PR 进展

过去 24 小时内无新的 Pull Request 活动。

---

## 5. 功能需求趋势

基于当前活跃 Issue 的分析，社区关注的方向可归纳为：

| 优先级 | 方向 | 说明 |
|--------|------|------|
| 🔴 **P0** | **稳定性 / Bug 修复** | 文件读取死循环（#640）是阻塞性严重 Bug，已持续近半年，社区呼声最高 |
| 🟡 **P1** | **IDE 插件性能** | VS Code 插件内存泄漏（#1592）影响长时间使用体验，需排查内存管理逻辑 |
| 🟡 **P1** | **自定义端点兼容性** | #640 用户使用自定义 Anthropic 端点 + mimo-v2-flash 模型，暗示非官方模型/端点场景下的兼容性问题需要更多测试覆盖 |

---

## 6. 开发者关注点

综合当前社区反馈，开发者最突出的痛点如下：

1. **🔧 死循环问题亟需根因分析** — Issue #640 已存在近 6 个月、15 条评论，多位用户受影响。建议团队优先定位文件读取逻辑中的边界条件，尽快发布修复补丁。

2. **💾 VS Code 插件内存管理** — 长时间任务下的内存持续增长是典型的内存泄漏模式，需要在插件侧增加内存监控和对象生命周期管理。

3. **🔌 自定义模型/端点场景支持** — 使用非官方端点（如自定义 Anthropic 端点）的用户遇到问题时，排查和修复的优先级往往较低，但这类用户通常是高级用户，体验不佳会影响社区口碑。

---

> **日报总结：** 当前 Kimi Code CLI 社区处于"静默期"——无新版本、无新 PR，但存量 Bug 的修复进度值得关注。建议开发团队优先处理 Issue #640（文件读取死循环）和 Issue #1592（VS Code 内存泄漏），以回应社区最迫切的稳定性诉求。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-06-29（周日）

---

## 1. 今日速览

过去 24 小时社区热度集中在 **桌面端体验问题**（TUI/桌面应用响应异常、npm付费订阅未激活）和 **新模型兼容性**（Gemma-4 工具调用循环、DeepSeek v4 / MiniMax 输出异常）两大方向。开发侧则以 **V2 手动压缩（compaction）**、**内嵌浏览器落地** 和一系列稳定性修复为主推进。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

| # | Issue | 👍 | 💬 | 要点 |
|---|-------|----|----|------|
| 1 | [#2072 Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072) | 186 | 74 | 呼声最高的生态兼容请求。Cursor 发布自家 CLI 后，社区希望 OpenCode 能对接其 API，但 Cursor API 未公开文档化，实现难度高。186 赞说明需求强烈。 |
| 2 | [#13984 can not copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984) | 23 | 50 | TUI 剪贴板复制后无法粘贴，影响日常使用体验，讨论非常活跃但至今未彻底解决。 |
| 3 | [#21034 gemma-4-26b/31b tool loops/failures](https://github.com/anomalyco/opencode/issues/21034) | 20 | 19 | 即使用最新 tokenizer 修复和 patched engine，Gemma-4 在 OpenCode 中仍不可用，工具调用陷入循环。影响本地 LLM 用户。 |
| 4 | [#32420 Paid Go subscription charged but not activated](https://github.com/anomalyco/opencode/issues/32420) | 0 | 10 | 多名用户反馈付费后订阅未激活、API key 失效、官方邮件无回复。涉及付费信任问题，需尽快响应。 |
| 5 | [#30680 auto-compaction loop, stops generating](https://github.com/anomalyco/opencode/issues/30680) | 0 | 9 | 即使在空文件夹中启动，也会反复自动压缩并耗尽 token，最终停止响应。严重可用性 bug。 |
| 6 | [#33399 CPU 99-100%, unresponsive](https://github.com/anomalyco/opencode/issues/33399) | 0 | 7 | 周期性 CPU 占满导致 TUI 完全卡死，无法接受键盘输入。自 v1.3.3 起存在。 |
| 7 | [#34228 unstable project skills subset exposed to model](https://github.com/anomalyco/opencode/issues/34228) | 0 | 8 | 35 个 skills 在不同会话中暴露给模型的子集不一致，影响 agent 行为可预测性。 |
| 8 | [#34190 Agent bypassed Plan mode, posted GitHub comment](https://github.com/anomalyco/opencode/issues/34190) | 0 | 3 | Plan 模式下 agent 未经授权直接执行 `gh issue comment` 并发布评论，权限隔离存在安全漏洞。 |
| 9 | [#33696 GitHub Copilot provider broken](https://github.com/anomalyco/opencode/issues/33696) | 4 | 4 | 重新授权后仍无法列出任何模型，影响 Copilot 订阅用户。 |
| 10 | [#34348 Copilot model billed to OpenAI instead](https://github.com/anomalyco/opencode/issues/34348) | 0 | 2 | 选择 GitHub Copilot provider 的模型时，token 费用可能被错误计入 OpenAI 开发者账户，计费路由存疑。 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#34336 feat(core): add v2 manual compaction](https://github.com/anomalyco/opencode/pull/34336) | 🟢 OPEN | 通过现有 compact 端点实现 V2 手动压缩，与自动压缩共享 selector/summarizer/events，并暴露 busy/unknown 错误。**直接回应 #30680 压缩循环问题。** |
| 2 | [#34356 feat(sdk-next): embedders contribute plugins via opencode.plugin](https://github.com/anomalyco/opencode/pull/34356) | 🔴 CLOSED | 为嵌入式 SDK 添加 `opencode.plugin(definition)` API，让 embedder 通过标准发现流程贡献插件。 |
| 3 | [#34353 fix(core): fallback to ripgrep when fff fails](https://github.com/anomalyco/opencode/pull/34353) | 🟢 OPEN | `fff` 初始化失败时回退到 ripgrep 文件搜索，避免桌面端文件搜索静默返回空结果。 |
| 4 | [#34352 fix(app): register export logs globally](https://github.com/anomalyco/opencode/pull/34352) | 🟢 OPEN | 将 `logs.export` 移至共享命令注册，使其在旧版布局路由之外也可用。 |
| 5 | [#34355 fix(app): suppress middle-click tab auxclick](https://github.com/anomalyco/opencode/pull/34355) | 🟢 OPEN | 修复标题栏标签页关闭后的中键 auxclick 事件冒泡问题。 |
| 6 | [#34351 fix(app): wrap model.set in startTransition](https://github.com/anomalyco/opencode/pull/34351) | 🔴 CLOSED | 用 Solid 的 `startTransition` 包裹 `model.set`，将模型变更降级为非紧急更新，保持 UI 响应性。**回应 #33399 卡顿问题。** |
| 7 | [#30849 fix: strip MiniMax trailing tool_call leak suffix](https://github.com/anomalyco/opencode/pull/30849) | 🟢 OPEN | 清理 MiniMax 响应末尾泄露的 tool_call 标记后缀，修复 #30684。 |
| 8 | [#19038 feat(app): open browser inside desktop app](https://github.com/anomalyco/opencode/pull/19038) | 🔴 CLOSED | 桌面端新增内嵌浏览器功能，用户无需离开应用即可浏览网页。**与 #26772、#30755 功能请求对齐。** |
| 9 | [#29783 feat: FreeBSD support](https://github.com/anomalyco/opencode/pull/29783) | 🔴 CLOSED | 新增 FreeBSD 平台支持，涉及剪贴板工具适配。 |
| 10 | [#29755 fix: enforce read deny rules in glob and grep results](https://github.com/anomalyco/opencode/pull/29755) | 🔴 CLOSED | 修复 `**/.env*` deny 规则在 glob/grep 结果中不生效的三个 bug，包括 `**/` 通配符根路径匹配问题。**安全相关修复。** |

---

## 5. 功能需求趋势

从当前 Issues 和 Feature Requests 中提炼出以下五大方向：

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **🖥️ 桌面端 / 内嵌浏览器** | [#26772](https://github.com/anomalyco/opencode/issues/26772)、[#30755](https://github.com/anomalyco/opencode/issues/30755) | 社区希望桌面端集成浏览器工作区，类似 Codex 的 click-to-edit 体验。PR #19038 已合并落地。 |
| **🔌 生态兼容 / Provider 扩展** | [#2072](https://github.com/anomalyco/opencode/issues/2072)（Cursor）、[#17436](https://github.com/anomalyco/opencode/issues/17436)（CLAUDE.md）、[#15512](https://github.com/anomalyco/opencode/issues/15512)（Elixir LS） | 用户希望 OpenCode 兼容更多外部工具链和项目约定文件。 |
| **🔒 权限与安全隔离** | [#34190](https://github.com/anomalyco/opencode/issues/34190)（Plan mode 绕过）、[#33585](https://github.com/anomalyco/opencode/issues/33585)（auto mode 分类器） | 对 agent 在 Plan 模式下的行为边界关注度上升，安全沙箱需求增强。 |
| **⚡ 性能与稳定性** | [#33399](https://github.com/anomalyco/opencode/issues/33399)（CPU 占满）、[#30680](https://github.com/anomalyco/opencode/issues/30680)（压缩循环）、[#31606](https://github.com/anomalyco/opencode/issues/31606)（SQLite 错误） | 长会话下的资源泄漏和数据库错误是高频痛点。 |
| **🤖 新模型适配** | [#21034](https://github.com/anomalyco/opencode/issues/21034)（Gemma-4）、[#24264](https://github.com/anomalyco/opencode/issues/24264)（DeepSeek v4）、[#34309](https://github.com/anomalyco/opencode/issues/34309)（MiniMax thinking variant） | 新开源模型和推理变体快速迭代，OpenCode 的适配速度面临挑战。 |

---

## 6. 开发者关注点

1. **付费订阅信任危机**：#32420 等多起付费未激活案例叠加官方邮件无回复，社区对 OpenCode Go 的售后响应表示担忧，建议优先公开处理。

2. **TUI 基础体验回归**：剪贴板复制粘贴（#13984）、CPU 占满卡死（#33399）、窗口无响应（#34346）等基础交互问题反复出现，影响新用户留存。

3. **压缩机制稳定性**：自动压缩循环（#30680）和 V2 手动压缩（PR #34336）同时推进，说明 compaction 是当前架构的核心复杂度之一。

4. **计费路由透明度**：#34348 揭示 Copilot provider 可能被错误计费到 OpenAI 账户，涉及财务敏感问题，需明确计费归属逻辑。

5. **Agent 权限边界**：Plan mode 下 agent 越权执行 `gh issue comment`（#34190）暴露了 prompt 级权限控制的局限性，社区期待更可靠的沙箱机制。

---

> 📊 数据窗口：2026-06-28 ~ 2026-06-29 | 来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-29

> 数据来源：[earendil-works/pi-mono](https://github.com/badlogic/pi-mono)

---

## 📋 今日速览

过去 24 小时 Pi 社区活跃度极高，共新增/更新 **50 条 Issue** 和 **12 条 PR**。两大焦点问题引发广泛讨论：**openai-codex / GPT-5.5 流式连接可靠性**（72 条评论、30 个 👍）和**流式 Markdown 强制滚动到底部**的体验问题。此外，多个 Windows 路径解析、国际化字符渲染、工具调用兼容性等 bug 集中爆发，社区对 TUI 稳定性和多模型适配的呼声持续走高。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 作者 | 评论/👍 | 状态 | 要点 |
|---|-------|------|---------|------|------|
| 1 | **[#4945] openai-codex Connection Reliability Issues** | liushuaiiu | 72 / 30 | 🟢 OPEN | GPT-5.5 交互 TUI 卡在 `Working...`，无流式输出、无工具调用、无报错，只能按 Escape 中断。近几天反复出现，是当前社区最热议的问题。 |
| 2 | **[#5825] Streaming markdown forces scroll to bottom** | xl0 | 36 / 0 | 🟢 OPEN | 开启 `clear on shrink` 后，流式 Markdown 输出会强制将视图滚到底部，用户无法阅读已输出内容。影响阅读长回复的体验。 |
| 3 | **[#6083] LLM cache not working with z.ai GLM coding plan** | skhoroshavin | 2 / 9 | 🟢 OPEN | 使用 z.ai GLM Coding Plan 时缓存失效，多步工具调用任务可能消耗 10–20% 的 session 额度，性价比严重下降。 |
| 4 | **[#6104] `find` drops first path-segment char on Windows** | jwoeifjofwefawsfasd | 3 / 0 | 🟢 OPEN | Windows 裸盘符路径（如 `C:\`）下 `find` 工具返回损坏的相对路径，首字符丢失且尾部双斜杠。 |
| 5 | **[#6124] Devnagri breaking the Pi harness** | sagarsrc | 3 / 0 | 🟢 OPEN | 输入天城文（如 `नेटवर्क`）导致 TUI 渲染崩溃，国际化字符支持存在缺陷。 |
| 6 | **[#6093] Scoped Anthropic API keys need necessary request params** | ahxxm | 4 / 0 | 🔴 CLOSED | Claude Code 的 scoped key（`sk-ant-api03-..`）与现有前缀检测逻辑不匹配，导致鉴权失败。已关闭（no-action）。 |
| 7 | **[#6103] OpenAI Responses API mislabels empty tool results** | highlyunavailable | 2 / 0 | 🟢 OPEN | 工具返回空结果时被错误标记为 "(see attached image)"，与 `pi-hashline-edit-pro` 扩展交互时暴露。 |
| 8 | **[#6139] Strip unsupported reasoning_content for providers** | navneetkumaryadav | 2 / 0 | 🔴 CLOSED | Groq 等 OpenAI 兼容端点不支持 `reasoning_content` 字段，导致 400 错误。已关闭。 |
| 9 | **[#6150] Tool edit generates invalid tool calls (Copilot)** | mrenoldi | 1 / 0 | 🔴 CLOSED | GitHub Copilot provider 下 edit 工具行为不一致，Gemini Flash Preview / Claude Haiku 表现不同。 |
| 10 | **[#6131] Full screen redraw flicker with multiple tool calls** | china-nyx | 1 / 0 | 🔴 CLOSED | 单次返回多个工具调用时 TUI 全屏闪烁重绘，随工具块增多愈发频繁。 |

> 🔗 链接示例：[earendil-works/pi Issue #4945](https://github.com/earendil-works/pi/issues/4945)（其余类推）

---

## 🔧 重要 PR 进展（精选 10 条）

| # | PR | 作者 | 状态 | 内容摘要 |
|---|----|------|------|----------|
| 1 | **[#6148] fix(ai): support Anthropic bearer token env** | mitsuhiko | 🟡 OPEN | 尝试修复 #5871，支持 Anthropic Bearer Token 环境变量，作者自评方案尚不理想，标记 to-discuss。 |
| 2 | **[#6115] feat(coding-agent): add configurable chat padding** | mitsuhiko | 🟡 OPEN | 社区频繁要求去除 TUI 边距，但当前 TUI 架构改动成本高，提出可配置 padding 方案，仍在讨论中。 |
| 3 | **[#6146] fix(ai): reverts #4110 — OpenCode Go models** | jsynowiec | ✅ CLOSED | 回退之前的 workaround，Minimax M2.7 和 Qwen 3.6 Plus 现已在 OpenCode Go 上正常工作。 |
| 4 | **[#6144] fix: normalize tabs to spaces in edit fuzzy match** | cunzai97 | ✅ CLOSED | 修复 edit 工具模糊匹配时 Tab 与空格不一致导致匹配失败的问题。 |
| 5 | **[#6136] fix(coding-agent): guard compaction continuation** | Jason-Shen2 | ✅ CLOSED | 修复 compaction 完成后无排队消息时仍调用 `agent.continue()` 的问题。 |
| 6 | **[#6141] fix(context-canvas): normalize matrix-run parsing** | heonyun | ✅ CLOSED | 修复 Context Canvas 矩阵运行的 AiCommand 响应解析，兼容裸 JSON 和嵌套 envelope 两种格式。 |
| 7 | **[#6142] Enable DeepSeek reasoning_effort high** | heonyun | ✅ CLOSED | 为 GitHub agent 脚本添加 DeepSeek `reasoning_effort: high` 默认配置，并记录 reasoning_tokens 用量。 |
| 8 | **[#6074] fix(coding-agent): avoid pre-prompt compaction continue** | yzhg1983 | ✅ CLOSED | 避免在 pre-prompt compaction 后错误地继续执行。 |
| 9 | **[#6078] feat(coding-agent): add get_entries and get_tree RPC** | geraschenko | ✅ CLOSED | 新增两个只读 RPC 命令，暴露 SessionManager 的 entries 和 tree 结构。 |
| 10 | **[#60] feat: Fuzzy search for files and folders** | fightbulc | ✅ CLOSED | 历时近 7 个月的文件/文件夹模糊搜索功能终于合并。 |

> 🔗 链接示例：[earendil-works/pi PR #6148](https://github.com/earendil-works/pi/pull/6148)

---

## 📊 功能需求趋势

从过去 24 小时的 Issue 分布来看，社区关注方向集中在以下领域：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **🔌 模型/Provider 兼容性** | #6093 (Anthropic scoped keys)、#6139 (Groq reasoning_content)、#6140 (MiniMax 404)、#6114 (Azure OpenAI)、#6083 (z.ai GLM cache) | ⭐⭐⭐⭐⭐ |
| **🖥️ TUI 稳定性与体验** | #5825 (强制滚动)、#6131 (全屏闪烁)、#6124 (天城文崩溃)、#6098 (Container.render crash) | ⭐⭐⭐⭐ |
| **🪟 Windows 平台支持** | #6104 (find 路径损坏)、#6150 (edit 工具异常) | ⭐⭐⭐ |
| **🔧 工具调用可靠性** | #4945 (codex 连接)、#6103 (空结果误标)、#6130 (renderCall 静默吞异常) | ⭐⭐⭐⭐ |
| **🏗️ 新 Provider 接入** | #6042 (Charm Hyper)、#6091 (Friendli)、#6132 (Together.ai 弃用) | ⭐⭐⭐ |
| **⚡ 性能与启动速度** | #6075 (启动慢 ~10s)、#6088 (RPC 60s 超时) | ⭐⭐ |

---

## 💡 开发者关注点（痛点与高频需求）

1. **GPT-5.5 / openai-codex 流式连接不稳定** — 72 条评论、30 个 👍，是当前最紧迫的问题。用户反馈 TUI 卡死且无错误提示，严重影响工作流。

2. **流式输出干扰阅读** — 强制滚到底部（#5825）和全屏闪烁（#6131）让长回复场景体验糟糕，社区呼吁更精细的滚动策略。

3. **多 Provider 适配成本高** — Anthropic scoped keys、Groq 不兼容字段、Azure 模型命名不一致、MiniMax 404……每个新 Provider 接入都伴随大量 edge case，维护负担重。

4. **Windows 平台二等公民** — 路径解析 bug、edit 工具异常、`/bin/bash` 硬编码等问题反复出现，Windows 用户体验仍需系统性改善。

5. **工具调用静默失败** — `renderCall/renderResult` 吞异常（#6130）、空结果误标为图片（#6103）等问题导致开发者排查困难，呼吁更明确的错误传播机制。

6. **TUI 可配置性不足** — 边距、padding、滚动行为等 UI 细节缺乏配置选项，社区期待更灵活的 TUI 定制能力（#6115 正在讨论）。

---

*日报由 AI 自动生成，数据截至 2026-06-29。如有遗漏或偏差，请以 [GitHub 仓库](https://github.com/badlogic/pi-mono)为准。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-06-29

---

## 1. 今日速览

今日社区讨论高度集中于 **v0.19.2/0.19.3 版本的稳定性问题**，多位用户报告"僵尸会话"失控消耗大量 Token（Issue #5964 称一夜烧掉 30M tokens）、中文输入法失效、UI 闪烁等新引入的严重 bug。同时，**Token 管理与成本控制**成为跨多个 Issue 的核心议题——包括 prompt cache miss（#5942）、context 溢出（#5950）、压缩阈值计算错误（PR #5957）等。开源社区也持续贡献自动更新、可恢复会话、桌面功能。

---

## 2. 版本发布

### v0.19.3（nightly: v0.19.2-nightly.20260628.714513df2）

**核心修复：**

- **fix(core): allow web_fetch JSON fallback** — 修复 `web_fetch` 工具在 JSON 解析时的回退逻辑（PR #5660，由 @tt-a1i 提交）

> 注：v0.19.3 为紧急补丁版本，表明 `web_fetch` 解析失败会影响当前用户的爬虫/联网功能。nightly 通道已同步修复。

---

## 3. 社区热点 Issues

以下按影响范围排序，聚焦今日讨论度最高的问题：

| # | Issue | 标签 | 为啥重要 | 社区反应 |
|---|-------|------|---------|---------|
| 1 | **#5964** — v0.19.2 僵尸会话烧掉 30M tokens | P1, bug, core, session-management | 用户报告运行 8h 的"僵尸 Agent"因 `usage_record.jsonl` 刷新盲区无日志记录，导致 DeepSeek 余额一夜耗尽。自动超时挂断机制未生效。 | 3 条评论，已有用户附 PID 和日志分析 |
| 2 | **#5966** — 0.19.3 UI 不定期错误，中文输入法完全无效 | P2, bug, ui | 中文用户核心体验受损：中文输入时只能输入拼音且不报错、无法定位错误栈。作者直言"nodejs 实在是烦死了"。 | 2 条评论，需求更详细的重现步骤 |
| 3 | **#5942** — Anthropic provider 可避免的 prompt-cache miss 推高成本 | P2, performance, token-management | 同类后端下 qwen-code 的缓存命中率远低于 Claude Code（后者每轮 ~100%），两次独立缺陷导致费用显著增加。对成本敏感用户影响巨大。 | 3 条评论，技术分析深入 |
| 4 | **#5950** — Context 溢出 400 错误（131072 tokens） | P2, core, token-management | `max_tokens` 升至 64K 后有效 input 预算降至 ~67K，但旧阈值导致压缩未能在 API 拒绝前触发。PR #5957 正尝试修复。 | 3 条评论 |
| 5 | **#5736** — 更频繁的全量 prompt reprocessing | P2, performance, caching | 使用本地 LLM（llama.cpp）时，对话继续时触发全量 prompt 重处理，性能大幅下降。 | 7 条评论（目前评论 |
| 6 | **#5683** — Subagent token 计数严重偏高 | P2, telemetry, token-management | sub-agent 消耗显示为 29xx k tokens，远超允许上限。与 #5964 呼应，反映 Token 计量系统性问题。 | 4 条评论 |
| 7 | **#5800** — TUI 下超出终端高度的回复被覆盖 | P2, ui, rendering | Ink 上游 bug #973，Static 模式下助手回复最后一行在输出完成时被覆盖。影响长文本阅读。 | 6 条评论 |
| 8 | **#5941** — 生成内容时上滚直接跳到最上方 | P2, ui, windows | Windows 用户体验严重受损，翻滚功能几乎不可用。 | 3 条评论 |
| 9 | **#5967支持 `/model <model-id> <prompt>` 内联切换 | P2, feature-request, cli | 用户希望一条命令切换模型并发送 prompt，避免当前两步操作。高频呼声。 | 1 条评论 |
| 10 | **#5819** — 升级后自动切换到高价模型修改 setting.json | CLOSED, bug, config | 0.19 版将用户 DeepSeek-4 flash 自动切换为 pro 并修改配置文件，导致费用损失且不报错。 | 4 条评论，社区警示性高 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 类型 | 说明 |
|---|-----|------|------|------|
| 1 | **#5957**  | OPEN | bug fix | 从 context window 中扣除 reserved output tokens 来计算压缩阈值，解决 #5950 描述的 400 溢出错误 |
| 2 | **#5963** | CLOSED | bug fix | 仅当 auto-memory 启用时才 spawn memory recall，减少无谓开销 |
| 3 | **#5780** | OPEN | feat | 新增 `qwen update` CLI 命令与 `/update` 斜杠命令，支持自动检测并安装新版本（standalone/npm/yarn/pnpm） |
| 4 | **#5030** | CLOSED | feat | SDK / stream-json 调用方可在不注入"continue"消息的情况下恢复中断的 turn，解决 Issue #4679 |
| 5 | **#5888** | OPEN | feat (RFC) | **qwen tag** — 多用户频道内驻留 Agent（DingTalk 首发），构建在现有 channel adapters 与 daemon 之上 |
| 6 | **#5928** | OPEN | feat | 新增 `todosDirectory` 设置，将 todo 持久化到项目本地（如 `.qwen/todos`），支持 Git 同步 |
| 7 | **#5852** | OPEN | feat (daemon) | `/acp` session stream 支持 Last-Event-ID 断线重连，SDK transport 可导出 |
| 8 | **#5777** | CLOSED | feat | Chrome 扩展以 daemon-direct 架构复活（#1432 重做），扩展成为 `qwen serve` 的轻量 HTTP+SSE 客户端 |
| 9 | **#5856** | CLOSED | feat | 桌面端语音输入功能（microphone button + recording bar），对齐 CLI 与 Web Shell |
| 10 | **#5960** | CLOSED | docs | 遥测文档大更新：补充 34 个未记录事件、17 个指标、11 个 daemon 指标、2 个 span，修复 diff_stat 属性 schema 错误 |

---

## 5. 功能需求趋势

从今日 Issues & PRs 中提炼出社区最集中的 **六大功能方向**：

```
 高优先级
  ├── 1. Token 成本治理
  │      prompt cache 命中率优化 · 僵尸会话检测 · sub-agent 计量校准
  │      (Issues: #5942, #5964, #5683, #5950; PR: #5957)
  │
  ├── 2. Session 可靠性 & 可恢复性
  │      中断 turn 重连 · CDP 会话 Streamable-HTTP · 自动超时挂断
  │      (PR: #5030, #5852; Issue: #5964, #4679)
  │
  └── 3. UI/交互稳定性修复（紧迫）
         TUI 渲染 · 中文输入法 · Windows 滚轮 · prompt reprocessing
         (Issues: #5800, #5966, #5941, #5736)

 中优先级
  ├── 4. 输入方式拓展
  │      语音输入（桌面端已完成 · Web Shell 待完成）· 图片粘贴
  │      (PR: #5856; Issues: #5796, #5958)
  │
  ├── 5. 模型/配置灵活性
  │      内联模型切换 · 可配 compaction model · 内联设置 TLS skip
  │      (Issues: #5967, #5956; PR: #5962)
  │
  └── 6. 自动化 & 多用户协作
         自修复 CI · loop.md 任务持久化 · 多用户频道 Agent
         (PRs: #5860, #5890, #5888)
```

---

## 6. 开发者关注点

###  高频痛点

1. **"沉默烧钱"型 Token 泄漏**
   多个独立报告（#5964、#5819、#5683）指向同一类问题：用户在不知情的情况下被消耗大量 tokens。核心原因是计量日志盲区、自动升级改配置、sub-agent 计数不准。**社区当前最大的信任危机。**

2. **v0.19.x 回归 bug 密集**
   #5736（prompt reprocessing）、#5800（TUI 渲染覆盖）、#5941（Windows 滚轮）、#5966（中文输入法）均为 0.19 版本引入的回归，影响核心交互路径。

3. **Anthropic 兼容后端用户成本焦虑**
   #5942 揭示结构化收费模型下 prompt cache 命中率的竞争力差距。用户直接对比 Claude Code，对成本优化诉求强烈。

### 🟢 正向信号

- **生态扩展活跃**：Chrome 扩展复活（#5777）、桌面语音输入（#5856）、DingTalk 频道 Agent（#5888）显示社区正将 Qwen Code 推向更多平台。
- **自修复流程成熟**：CI autofix 工作流（#5860）尝试让 Agent 自动认领并修复 bug，bugbot 代码评审流程连续两日活跃。
- **SDK 能力升级**：turn 恢复（#5030）、RuntimeContext 注入（#5847）、可恢复 ACP stream（#5852）均在提升编程式集成体验。

---

> **日报生成时间**：2026-06-29 | **数据来源**：github.com/QwenLM/qwen-code
> 如需归档或定制分析维度，请回复反馈。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报

**日期：2026-06-29**

---

## 1. 今日速览

过去 24 小时是 CodeWhale 的「集中爆发日」——维护者 **Hmbown** 单关闭/合并了近 15 个 Issue 和 12 个 PR，核心议题集中在 **Auto 模式去伪存真、Plan 模式写保护补齐、旧版状态迁移可见性**三大方向。同时社区贡献者 @lerugray 提交了 Sakana AI Fugu 新 Provider，引发关注。

---

## 2. 版本发布

无新 Release。预计上述大量修复将汇入 **v0.8.67**。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 为什么重要 |
|---|---|---|---|
| 1 | **#3733** Auto模式是"空壳"——与Agent完全一致，将从0.8.66移除 | CLOSED | 维护者认定 Auto 模式当前仅是个标签，运行时与 Agent 无差异，决定彻底重启该模式。涉及模式体系可信度。 |
| 2 | **#3734** Plan模式写工具未硬阻断——仅沙箱化，与提示词声明矛盾 | CLOSED | Plan 模式承诺"所有写入/patch 被阻断"，实际只阻断了 exec/code/js，write_file/edit_file 仍可执行，安全风险显著。 |
| 3 | **#3730** Auto模式下只读命令被标记为DESTRUCTIVE需审批，文案引用YOLO | CLOSED | 策略+文案双重错误：`codewhale --version` 这类只读调用进入审批流程，误把 Auto 模式渲染成 YOLO 行为。 |
| 4 | **#3738** DeepSeek 费用上涨：prompt-cache命中率疑似退化，每轮注入的 `<turn_meta>` 可能打断可缓存前缀 | OPEN | 直接影响用户成本。DeepSeek 上下文缓存命中可使输入 token 降价约 10，任何破坏稳定前缀的改动代价都很高。 |
| 5 | **#3728** 大量并发子代理（~13个）下TUI完全冻结——event-receiver RwLock 争用导致渲染循环饥饿 | OPEN | 高并发场景下的架构级瓶颈，涉及 TUI 事件环的锁策略。对重度并行用户影响较大。 |
| 6 | **#3735** YOLO模式下 publish 类动作（cargo publish / git push --tags）静默通过审批，击穿 safety_floor | CLOSED | 安全兜底失效，YOLO 模式下 `cargo publish` 本应要求"持久审查"却直接放行。 |
| 7 | **#3751** 请求支持 Neuralwatt Provider（非 token 定价、提供 GLM 5.2） | OPEN | 社区提出，Neuralwatt 因创新定价和 GLM 5.2 支持正在流行，拓宽 Provider 生态的声音上升。 |
| 8 | **#3568** Plan/Agent 模式混淆问题仍再次出现 | CLOSED（已知问题反复） | 7 条评论+2 赞但始终未根治，反映模式切换的状态感知是长期顽疾。 |
| 9 | **#3724** 升级后 session 丢失——`.deepseek` → `.codewhale` 读取路径未回退到旧目录 | CLOSED | 版本升级后发现迁移只做了一半——状态被移动但 session 读取未做 fallback，用户看到空白历史。 |
| 10 | **#3732** 全局 Modal UI 破坏——内容穿透 + 动作行截断/溢出 | OPEN | 底层 modal 渲染器共性问题，"确认"弹窗无法完整遮罩对话，影响所有模态交互。 |

---

## 4. 重要 PR 进展

| # | PR | 作者 | 修复/功能摘要 |
|---|---|---|---|
| 1 | **#3754** 结构化迁移事件 | Hmbown | 旧 `.deepseek/<state>` 迁移至 `.codewhale/<state>` 时输出可见的一次性通知，解决 #3726。 |
| 2 | **#3752** 恢复旧 session 可见性 | Hmbown | 复制 `~/.deepseek/sessions` 中缺失条目到 `~/.codewhale/sessions`，纯追加不覆写。修复 #3724。 |
| 3 | **#3753** doctor 检测残留旧状态 | Hmbown | `codewhale doctor` 新增 `legacy_only`/双根数据诊断字段，不动文件只读报告。 |
| 4 | **#3749/#3748** 新增 Sakana AI Fugu Provider | @lerugray / Hmbown | OpenAI 兼容协议，base URL `api.sakana.ai/v1`，`FUGU_API_KEY` 鉴权，别名 `sakana`/`fugu` 等。 |
| 5 | **#3744** 关闭失败 'hollow' Auto 模式泄漏 | Hmbown | 将旧文本 `auto` 映射回 Agent，修正审批文案不再暗示用户处于 YOLO。 |
| 6 | **#3742** 拆分信任与审批绕过 | Hmbown | 不再把 workspace trust 当作可跳过普通工具审批的冗余授权；删除 `auto_approve` 字段。 |
| 7 | **#3743/#3745** 缓存遥测显示路由 | Hmbown / cyq1017 | `/cache` 页面记录并展示 provider/model 路由，支持自动模型路由，辅助 #3738 定价排查。 |
| 8 | **#3750** 中央弹窗背景修复 | Hmbown | 在 ViewStack 渲染任意 modal 前先绘制不透明背景，解决内容穿透 (#3732)。 |
| 9 | **#3737** Y模式下保持 publish safety_floor | Hmbown | 确保 `cargo publish` / `npm publish` / tag push 在 Y 模式下仍强制呈交审查，回归测试覆盖。 |
| 10 | **#3729** 外部编辑器输入竞争 | Hmbown | Ctrl+O 拉起 Vim 前暂停输入泵，退出后强刷，修复 Windows mintty/cygwin 编辑器冻结 (#3657)。 |

---

## 5. 功能需求趋势

从所有 Issue 中提炼出的五大关注方向：

1. **模式体系可信度重塑** — Auto 被证明是空壳、Plan 写保护不实、Y 模式绕过 safe floor，社区核心诉求是让每个模式名实相符（#3733、#3734、#3735、#3736）。
2. **Provider / 模型生态扩展** — Sakana Fugu (#3748)、Neuralwatt (#3751) 等新增 Provider 需求频繁出现，同时本地化文档需求（韩语/西班牙语/巴西葡语，#3093）也在上升。
3. **可见性与诊断能力** — `doctor` 迁移诊断 (#3753/3754)、prompt 缓存命中率遥测 (#3743/3745)、provider picker 标签准确性 (#3725/3740)——用户要求"系统在状态变更时必须出声"。
4. **性能与并发** — 缓存命中退化 (#3738)、高并发子代理 TUI 冻结 (#3728)、大量 token 成本压力并存。
5. **跨平台兼容** — Windows 版本 DSML 导致中断 (#3717)、mintty/cygwin 编辑竞争 (#3729)、HarmonyOS tier-2 目标 (#2970) 反映非 Linux/Mac 平台的补齐需求持续增长。

---

## 6. 开发者关注点

- **迁移必须有用户层可读信号**：从 #3726/#3754 可见，哪怕 `tracing::info!()` 日志正确，普通用户也看不见。升级路径中的任何文件移动必须附带 terminal 输出或 toast 提示。
- **"安全措辞"和"实际执行"必须一致**：Plan 写保护（#3734）和 Y 模式的 safe floor（#3735）都出现"提示词/文案说不行、代码实际放行"的不一致——开发者反馈显示这种错位的信誉代价高于直接缺少功能。
- **Auto 模式被多位开发者视为"半成品"**：#3733 决策是行业信号——与其保留一个仅换标签的模式，不如砍掉再认真设计。后续 PR #3736 建议把 4 个权限旋钮压到 2 个 (`approval_mode` + `trust_mode`)。
- **诊断工具缺位放大升级恐慌**：#3724 显示开发者升级后看到空白 session 的第一反应不是"被迁移了"，而是"数据丢了"。`doctor` 诊断、fallback 读取链是高频呼声。
- **新鲜 Provider 落地速度快**：Sakana Fugu 从 Issue 提出到 PR 合入在 24 小时内走完，说明社区对非 OpenAI/Anthropic 模型接入的意愿很强，统一 OpenAI Chat Completions 兼容协议是新 Provider 的首选路径。

---

*下次日报预计：2026-06-30 | 关注议题：v0.8.67 合并进度、#3738 缓存降本 ROOT CAUSE、Auto 模式重新定义*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*