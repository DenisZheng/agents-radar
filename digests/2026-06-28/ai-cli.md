# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-28 00:38 UTC | 覆盖工具: 9 个

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

**2026-06-28 · 基于各工具 GitHub 社区动态**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从"能用"到"可信可控"的转型期**。各工具在 Agent 自主性、安全过滤、跨平台兼容性三个维度上集中角力。Windows 平台体验普遍成为短板，MCP 协议接入正在重塑工具链开放性，而 Agent 行为可靠性（不越界、不撒谎、不卡死）已成为所有工具社区的共同诉求。Token 计费透明度和消耗优化则直接影响用户留存，成为产品竞争的核心战场。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 核心焦点 |
|------|:-----------:|:-------:|---------|----------|
| **Claude Code** | ~50 | 2 | 无 | 安全过滤误报（8 条集中爆发）、Windows 401 认证 |
| **OpenAI Codex** | ~50 | ~15 | 3 个 alpha | gpt-5.5 限额异常（👍333）、MCP OAuth 重构 |
| **Gemini CLI** | ~50 | 18 | 无 | Agent 行为控制、Auto Memory 安全加固 |
| **GitHub Copilot CLI** | 15 | 3 | 无 | Windows 回归、alt-screen 渲染争议 |
| **OpenCode** | ~50 | ~10 | 无 | Session 撤销/重命名、Bun 段错误 |
| **Pi** | 24 | 9 | 无 | 扩展 API 强化、流式输出 UX 争议 |
| **DeepSeek TUI** | 35 | 37 | 无 | Token 缓存优化、ACP 协议适配、插件系统 |
| **Kimi Code** | — | — | — | 无活动 |
| **Qwen Code** | — | — | — | 摘要生成失败 |

> **数据说明**：Issues/PR 数为过去 24 小时内的更新量估算，基于各日报中扫描的总量。

---

## 3. 共同关注的功能方向

### ① Agent 行为可控性（全部主流工具）

| 工具 | 具体表现 |
|------|---------|
| Claude Code | 安全过滤误报阻断合法开发（8 条 Issue） |
| Gemini CLI | Agent 静默扩大操作范围、子 Agent 谎报成功 |
| DeepSeek TUI | Agent 过度修改、模式混淆（plan/agent） |
| OpenAI Codex | agent 自主编辑过于激进，用户要求逐步确认 |
| OpenCode | 模型切换被静默覆盖、Skills 加载不一致 |

**核心矛盾**：Agent 越自主，用户越不安。社区正在从"让 Agent 做更多"转向"让 Agent 做得可预期"。

### ② Windows 平台体验（4/9 工具涉及）

| 工具 | 问题 |
|------|------|
| Claude Code | 401 认证、CLAUDE_PROJECT_DIR 缺失、SSL 证书过期 |
| OpenAI Codex | sandbox 启动失败、apply_patch 失效、Desktop 崩溃 |
| GitHub Copilot CLI | MCP Server 启动失败、剪贴板失效 |
| OpenCode | ARM64 TUI 初始化失败 |

**结论**：Windows 仍是各工具的二等公民，跨平台一致性是行业性短板。

### ③ Token 消耗与计费透明度（5/9 工具涉及）

| 工具 | 表现 |
|------|------|
| OpenAI Codex | gpt-5.5 限额暴增 10-20 倍（👍333），单条消息清空预算 |
| DeepSeek TUI | "半天 4 亿 token"，缓存命中率远低于官方 |
| Gemini CLI | Auto Memory 对低价值会话无限重试 |
| Claude Code | Max Plan 200k 上限静默回归、用量 banner 取整误导 |
| OpenCode | 长会话内存暴涨至 26.8GiB |

### ④ MCP 协议生态扩展（4/9 工具涉及）

| 工具 | 进展 |
|------|------|
| Claude Code | MCP server instructions 未传递（已修复）、Gmail 集成失败 |
| OpenAI Codex | OAuth 鉴权重构（5 个串行 PR） |
| GitHub Copilot CLI | MCP Server 启动失败（Windows） |
| DeepSeek TUI | ACP 流式输出 + 取消机制落地 |

### ⑤ 安全加固（3/9 工具涉及）

| 工具 | 焦点 |
|------|------|
| Claude Code | 安全策略误报、AUP 策略拦截 |
| Gemini CLI | shell 参数展开降级、Bot 补丁审批、Auto Memory 脱敏 |
| Pi | 恶意包检测（刷安装量行为）、网关错误信息丢失 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 | 差异化优势 |
|------|---------|---------|---------|-----------|
| **Claude Code** | 全栈 AI 编程助手 | 专业开发者、企业团队 | TypeScript/Node.js，强安全策略 | 最严格的安全过滤、最完整的 MCP 生态 |
| **OpenAI Codex** | 云端 Agent 平台 | Plus/Pro 用户、创业公司 | Rust 重写，sandbox 隔离 | 性能最强、gpt-5.5 模型独占 |
| **Gemini CLI** | Google AI 生态入口 | Google Cloud 用户、研究者 | 多模态原生、Browser Agent | 浏览器自动化、AST 感知工具 |
| **GitHub Copilot CLI** | GitHub 工作流集成 | GitHub 生态用户 | VS Code 扩展联动 | GitHub 原生集成、Hooks 机制 |
| **OpenCode** | 开源多模型终端 | 独立开发者、多模型用户 | Bun runtime + LLM 桥接 | 模型无关、Session 管理领先 |
| **Pi** | 可扩展 AI 对话引擎 | 扩展开发者、RPC 集成 | Extension 架构、reportUsage API | 扩展生态最成熟、多 Agent 成本追踪 |
| **DeepSeek TUI** | 高效编码 TUI | 成本敏感型开发者 | Rust 运行时、ACP 协议 | Token 缓存优化最深、插件系统 |
| **Kimi Code** | — | — | — | 当前无社区活动 |
| **Qwen Code** | — | — | — | 摘要生成失败，需关注 |

---

## 5. 社区热度与成熟度

### 🔥 高热度 + 快速迭代

| 工具 | 热度信号 | 迭代速度 | 成熟度判断 |
|------|---------|---------|-----------|
| **OpenAI Codex** | 👍333（限额 Issue）、648（Linux App） | alpha 日更 | 快速迭代期，Rust 重写中 |
| **DeepSeek TUI** | 37 PR/天、35 Issue/天 | 极高 | 高速成长期，功能密集交付 |
| **Claude Code** | 👍10（401 Bug）、8 条误报集中 | 低（无 Release） | 成熟期，安全策略待优化 |
| **Gemini CLI** | 18 PR/天、50 Issue/天 | 高 | 成长期，Agent 可控性攻坚 |

### 🟡 中等热度 + 稳定维护

| 工具 | 热度信号 | 迭代速度 | 成熟度判断 |
|------|---------|---------|-----------|
| **OpenCode** | 24 👍（加密货币支付）、多 PR 合并 | 中高 | 稳定期，平台兼容性持续改善 |
| **Pi** | 34 条评论（流式 UX 争议） | 中 | 成熟期，扩展生态完善 |
| **GitHub Copilot CLI** | 👍20（Ubuntu Keychain） | 低 | 早期阶段，Windows 体验需补课 |

### ⚪ 低热度 / 待观察

| 工具 | 状态 |
|------|------|
| **Kimi Code** | 无活动，需关注是否停止维护 |
| **Qwen Code** | 摘要生成失败，社区状态不明 |

---

## 6. 值得关注的趋势信号

### 趋势一：Agent 可控性成为生死线

**信号**：Claude Code 安全误报、Gemini CLI 越界操作、DeepSeek 模式混淆、Codex 编辑过于激进——所有主流工具都在同一问题上栽跟头。

**建议**：开发者应优先选择提供**细粒度权限控制**和**操作确认机制**的工具。对团队而言，Agent 行为审计日志将成为刚需。

### 趋势二：Windows 平台即将迎来洗牌

**信号**：4/9 工具在 Windows 上存在严重问题，而 Windows 开发者群体庞大。

**建议**：当前阶段，重度 Windows 用户应优先考虑 macOS/Linux 体验更成熟的工具（如 Claude Code、Gemini CLI），或关注 DeepSeek TUI 等对 ARM64 支持较好的项目。

### 趋势三：Token 经济模型正在重构

**信号**：OpenAI Codex 限额暴增 10-20 倍、DeepSeek 缓存命中率差距、Gemini 低价值会话重试——成本问题正在影响用户留存。

**建议**：开发者应关注各工具的**token 用量可视化**和**缓存优化**能力。DeepSeek TUI 的 cache-maximal 模式和 Pi 的 reportUsage API 代表正确方向。

### 趋势四：MCP/ACP 协议正在定义工具链标准

**信号**：Claude Code、Codex、DeepSeek TUI 都在推进 MCP/ACP 适配，Pi 的 Extension API 也在扩展。

**建议**：优先选择支持开放协议的工具，避免厂商锁定。ACP 协议（Agent Client Protocol）可能成为 AI CLI 的"HTTP 时刻"。

### 趋势五：扩展生态成为护城河

**信号**：Pi 的 reportUsage API、DeepSeek TUI 的插件系统、Codex 的 Apps MCP——各工具都在构建自己的扩展生态。

**建议**：对平台型项目，扩展生态的丰富度比单一功能更重要。Pi 和 DeepSeek TUI 在扩展性上的投入值得关注。

---

**报告生成时间**：2026-06-28  
**数据来源**：各工具 GitHub 仓库 Issues/PRs/Releases  
**扫描总量**：~350 条 Issues + ~100 条 PRs

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-06-28 | 来源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行（按社区关注度）

| # | Skill / PR | 功能说明 | 状态 | 链接 |
|---|-----------|---------|------|------|
| 1 | **skill-creator: run_eval.py 修复**（#1298、#1099、#1323、#556、#1169、#1061） | 核心开发工具链存在致命 Bug——skill 评估脚本在跨平台（Windows）和触发检测上持续报告 `recall=0%`，导致整个 description 优化循环基于噪声信号运行。社区已提出 6+ 个独立修复 PR。 | Open（多项并行修复） | [PR #1298](https://github.com/anthropics/skills/pull/1298) / [Issue #556](https://github.com/anthropics/skills/issues/556) |
| 2 | **document-typography skill**（#514） | AI 生成文档的排版质量控制：修复孤行词溢出（orphan word wrap）、标题沉底（widow paragraphs）、编号错位等影响每份文档的基础质量问题。被评价为"影响所有文档生成"的高频刚需。 | Open，未合并 | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 3 | **skill-creator 健壮性修复**（#362、#361、#539） | 修复 UTF-8 多字节字符导致 Rust 崩溃、未引号 YAML 特殊字符导致静默解析失败、description 字段截断等问题。涉及 skill-creator 核心验证器 `quick_validate.py`。 | Open | [PR #362](https://github.com/anthropics/skills/pull/362) / [PR #361](https://github.com/anthropics/skills/pull/361) / [PR #539](https://github.com/anthropics/skills/pull/539) |
| 4 | **testing-patterns skill**（#723） | 全面测试模式技能：测试理念（Testing Trophy 模型）、单元测试 AAA 模式、React 组件测试（Testing Library）、边界用例规范等。 | Open | [PR #723](https://github.com/anthropics/skills/pull/723) |
| 5 | **ODT skill**（#486） | OpenDocument 格式（.odt/.ods）创建、模板填充、转 HTML。覆盖开源办公标准场景。 | Open | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 6 | **DOCX 技能修复（tracked changes bug）**（#541） | 修复 DOCX skill 在含书签文档上添加 tracked changes 时 `w:id` 冲突导致文档损坏的 OOXML 级 bug。 | Open，已多次更新 | [PR #541](https://github.com/anthropics/skills/pull/541) |
| 7 | **skill-security-analyzer / skill-quality-analyzer**（#83） | 元技能（meta-skills）：自动化评估其他 SKILL.md 的质量、安全性、结构完整性。 | Open（自 2025-11 至今未合并） | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 8 | **compact-memory skill**（#1329） | 符号化紧凑记忆编码方案——将 agent 的上下文记忆从散文式转为符号记号，大幅节省长会话的 token 占用。近期新提案。 | Open（Issue 讨论中） | [Issue #1329](https://github.com/anthropics/skills/issues/1329) |

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区声音 |
|---------|-----------|---------|
| **🏢 企业级共享与分发** | [#228](https://github.com/anthropics/skills/issues/228)（👍7, 💬14） | 强烈要求 org-wide skill 共享：当前只能通过 Slack/Teams 传来传去，急需共享库或分享链接。这是**评论数最高**的新功能需求。 |
| **🔒 信任与安全治理** | [#492](https://github.com/anthropics/skills/issues/492)（💬23） | 社区 skill 冒充 `anthropic/` 命名空间、造成信任边界滥用。评论数第二，安全治理已成社区焦点。 |
| **🛠️ 开发工作流集成** | [#412](https://github.com/anthropics/skills/issues/412)（agent-governance） | 期待安全策略、审计追踪、AI agent governance 类技能。 |
| **🪟 跨平台兼容性** | [#1061](https://github.com/anthropics/skills/issues/1061)、#1169 | Windows 仍是二等公民——subprocess、编码、管道全面需要修复。这是 PR 提交量最大的单一主题。 |
| **📑 文档生成质量** | #514（typography）、#486（ODT） | 文档类 skill 是新增贡献最密集的领域，涵盖 typography 排版、ODS 表格、模板填充。 |
| **🔌 互操作与 MCP 对齐** | [#16](https://github.com/anthropics/skills/issues/16) | 希望将 Skills 暴露为 MCP server，形成标准 API 协议。 |
| **☁️ AWS Bedrock 集成** | [#29](https://github.com/anthropics/skills/issues/29) | 用户希望 Skills 能原生运行于 Bedrock 环境，而不仅限于 Claude AI / Claude Code。 |

---

## 3. 高潜力待合并 Skills

以下 PR 活跃度高、技术门槛低、具备近期落地可能性：

| PR | 理由 | 链接 |
|----|------|------|
| **DOCX tracked changes 修复** (#541) | OOXML 级正确性 bug，修复范围明确，已有成熟补丁 | [PR #541](https://github.com/anthropics/skills/pull/541) |
| **PDF 大小写敏感修复** (#538) | 纯文档修正（8 处文件名引用），零风险合并 | [PR #538](https://github.com/anthropics/skills/pull/538) |
| **DOCX bookmark collision 修复** (same author) | 与 #541 同作者，系列文档修复 | [PR #541](https://github.com/anthropics/skills/pull/541) |
| **CONTRIBUTING.md** (#509) | 纯文档贡献——解决社区健康指标问题（当前仅 25%），零代码风险 | [PR #509](https://github.com/anthropics/skills/pull/509) |
| **skill-creator UTF-8 panic 修复** (#362) | 修复多字节字符导致崩溃的关键问题 | [PR #362](https://github.com/anthropics/skills/pull/362) |
| **frontend-design skill 改进** (#210) | 老牌 PR，改进现有 skill 而非新建，维护成本低 | [PR #210](https://github.com/anthropics/skills/pull/210) |
| **ODT skill** (#486) | 独立新增格式支持，贡献清晰 | [PR #486](https://github.com/anthropics/skills/pull/486) |

---

## 4. Skills 生态洞察

> **一句话总结：当前社区在 Skills 层面最集中的诉求是——让 Skills 工具链本身先稳定下来（修复 skill-creator 的跨平台/评估 Bug、解决信任与安全边界），然后才能谈论企业级共享和规模化采用的下一步。**

具体而言：
- **50% 以上的活跃 PR 集中在修复 skill-creator 基础设施**（评估脚本、YAML 解析、Windows 兼容性），说明社区渴望贡献新 Skill，但工具链的不稳定成为最大卡点；
- **企业级需求（org-wide sharing、Bedrock 集成、治理技能）呼声强烈**，但受信任边界安全和分发基础设施不完善的制约而暂缓；
- **文档类 Skill 贡献最活跃**（DOCX/PDF/ODT/typography），反映了 Claude Code 在办公场景的高频需求；
- **安全治理（#492 💬23）迅速攀升为社区最热 Issue**，社区贡献与官方命名空间的边界问题亟待官方明确政策。

---

# Claude Code 社区动态日报

**2026-06-28 · 周日**

---

## 1. 今日速览

今日无新版本发布。社区焦点集中在**两大热点**：一是用户 `sworrl` 在 6/27 集中提交的一系列**安全过滤误报（cyber false positive）** Issue，涉及无人机固件分析、协议解码等合法开发场景被阻断，引发广泛讨论；二是 **Windows 平台认证 401 错误**（#69706，👍10）持续发酵，仍是当前最高互动的未解决 Bug。此外，`CLAUDE_PROJECT_DIR` 在 Windows 子进程中缺失的问题也迎来了修复闭环。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 安全过滤误报集中爆发（cyber false positive wave）

| # | Issue | 状态 | 👍 | 评论 | 要点 |
|---|-------|------|-----|------|------|
| 1 | [#71910](https://github.com/anthropics/claude-code/issues/71910) — 消费级无人机 USB 固件分析被安全策略阻断 | OPEN | 0 | 4 | 用户 `sworrl` 报告在分析自有无人机固件时触发 session-halted 级拦截 |
| 2 | [#71901](https://github.com/anthropics/claude-code/issues/71901) — 无人机固件版本 diff 分析被误拦 | OPEN | 0 | 4 | 同一用户的关联 Issue，涉及固件下载与版本对比 |
| 3 | [#71920](https://github.com/anthropics/claude-code/issues/71920) — 开源无人机地面站开发中途被阻断 | OPEN | 0 | 3 | 影响开源硬件开发工作流 |
| 4 | [#71916](https://github.com/anthropics/claude-code/issues/71916) — 二进制上传与远程部署协调被拦截 | OPEN | 0 | 3 | 涉及部署自动化场景 |
| 5 | [#71919](https://github.com/anthropics/claude-code/issues/71919) — 命令目录分析在逆向工程中被拦截（offensive-pentest 域） | OPEN | 0 | 3 | 唯一一个被标记为 offensive-pentest 域的误报 |
| 6 | [#71912](https://github.com/anthropics/claude-code/issues/71912) — RTP/UDP 视频 relay 架构文档编写被拦截 | OPEN | 0 | 3 | 协议文档工作被误判 |
| 7 | [#71915](https://github.com/anthropics/claude-code/issues/71915) — 飞行控制 GUI 开发被 AUP 策略拦截 | OPEN | 0 | 2 | 标记为 AUP（Acceptable Use Policy）误报 |
| 8 | [#71889](https://github.com/anthropics/claude-code/issues/71889) — AD 域管理与 RDS 排障工具被拦截 | OPEN | 0 | 2 | 影响企业运维场景 |

> **分析**：这 8 条 Issue 全部来自同一用户 `sworrl`，集中在 6/27 提交，涵盖无人机开发的全链路（固件分析→协议解码→地面站开发→部署）。核心矛盾在于**安全过滤器的启发式规则对嵌入式/物联网开发工具链覆盖不足**，将合法硬件开发行为误判为安全威胁。社区讨论中多人表示遇到类似问题，预计 Anthropic 需要针对 embedded/hardware 领域细化策略。

---

### 🔴 高互动未解决 Bug

| # | Issue | 状态 | 👍 | 评论 | 要点 |
|---|-------|------|-----|------|------|
| 9 | [#69706](https://github.com/anthropics/claude-code/issues/69706) — API 401 认证失败（Windows） | OPEN | **10** | **21** | 当前最高互动 Issue，Windows 平台认证凭据问题持续 8 天未解决 |
| 10 | [#57200](https://github.com/anthropics/claude-code/issues/57200) — Claude 持续忽略指令、违反规则 | OPEN | 5 | 9 | Linux 平台模型行为问题，涉及指令遵循可靠性 |

---

### 🟡 值得关注的其他动态

| # | Issue | 状态 | 👍 | 评论 | 要点 |
|---|-------|------|-----|------|------|
| 11 | [#23808](https://github.com/anthropics/claude-code/issues/23808) — MCP server initialize 响应指令未传递给模型 | CLOSED | 2 | 9 | **已关闭**，5 个月悬而未决的 MCP 核心 Bug 得到修复 |
| 12 | [#71924](https://github.com/anthropics/claude-code/issues/71924) — Windows CLAUDE_PROJECT_DIR 未在子进程设置 | CLOSED | 0 | 2 | **已关闭**，影响 Windows MCP Server 环境变量 |
| 13 | [#71663](https://github.com/anthropics/claude-code/issues/71663) — macOS SSL 证书过期导致 2.1.190+ 不可用 | OPEN | 0 | 2 | 回归 Bug，影响 macOS 用户升级 |
| 14 | [#62898](https://github.com/anthropics/claude-code/issues/62898) — Max Plan 200k 上限静默回归、20x token 消耗 | CLOSED | 0 | 4 | 计费/配额问题，已关闭 |
| 15 | [#57692](https://github.com/anthropics/claude-code/issues/57692) — Opus 4.7 xHigh 性能在 Colossus-1 上线后下降 | CLOSED | 3 | 4 | 模型性能回退，已关闭 |
| 16 | [#67220](https://github.com/anthropics/claude-code/issues/67220) — Windows 原生 toast 通知支持 | OPEN | 0 | 3 | 功能请求，macOS/Linux 已有，Windows 缺失 |
| 17 | [#71922](https://github.com/anthropics/claude-code/issues/71922) — Windows Chrome MCP 未启动时 CLI 卡死 | OPEN | 0 | 1 | 启动时 `set_permission_mode` 风暴导致界面冻结 |
| 18 | [#71925](https://github.com/anthropics/claude-code/issues/71925) — 用量限制 banner 时间向下取整误导用户 | OPEN | 0 | 1 | UI 显示 "resets in 1h" 实际还有 1h20m |
| 19 | [#71926](https://github.com/anthropics/claude-code/issues/71926) — 全屏 TUI 鼠标捕获阻止剪贴板选择 | OPEN | 0 | 1 | 文档与实际行为不符，需 Shift-drag |
| 20 | [#71928](https://github.com/anthropics/claude-code/issues/71928) — VS Code 扩展可折叠 Sticky Prompt 块 | OPEN | 0 | 1 | 新需求，改善 VS Code 面板交互 |

---

## 4. 重要 PR 进展

过去 24 小时仅有 **2 个 PR** 更新，整体活跃度较低：

| # | PR | 状态 | 作者 | 要点 |
|---|-----|------|------|------|
| 1 | [#71798](https://github.com/anthropics/claude-code/pull/71798) | CLOSED | ShivaanjayNarula | 已关闭，内容未公开 |
| 2 | [#68787](https://github.com/anthropics/claude-code/pull/68787) | OPEN | AZERDSQ131 | 为 `edit-issue-labels.sh` 脚本添加缺少标签参数时的错误提示信息，CI 改进 |

> 今日 PR 活动较少，社区贡献以 Issue 报告为主。

---

## 5. 功能需求趋势

从今日 50 条 Issue 中提炼出以下 **6 大功能方向**：

### ① 安全策略精细化（最高优先级 🔴）
- 8 条 cyber/AUP 误报 Issue 集中爆发
- 核心诉求：安全过滤器需要区分**硬件开发/嵌入式/物联网**场景与真实安全威胁
- 涉及域：`general`、`offensive-pentest`
- 影响：session-halted 级别阻断，直接中断合法开发工作流

### ② Windows 平台体验补齐
- 401 认证错误（#69706，👍10）
- `CLAUDE_PROJECT_DIR` 子进程环境变量缺失（#71924，已关闭）
- 原生 toast 通知缺失（#67220）
- Chrome MCP 启动卡死（#71922）
- SSL 证书过期导致不可用（#71663）
- **趋势**：Windows 仍是二等公民，多项功能落后于 macOS/Linux

### ③ MCP Server 协议正确性
- MCP server instructions 未传递（#23808，已关闭 ✅）
- Gmail 集成失败（#71914）
- Chrome MCP 权限风暴（#71922）
- **趋势**：MCP 生态持续扩展，但协议实现细节仍需打磨

### ④ 模型行为与性能
- 指令遵循不可靠（#57200）
- Opus 4.7 xHigh 性能回退（#57692，已关闭）
- 安全过滤误报（8 条）
- **趋势**：模型输出质量和一致性仍是核心关注点

### ⑤ VS Code 扩展改进
- AskUserQuestion UI 消失（#61665）
- 面板遮挡对话上下文（#62390）
- 可折叠 Sticky Prompt（#71928）
- 保存事件未触发（#62900）
- **趋势**：VS Code 扩展的 UI/UX 问题集中，多窗口支持是痛点

### ⑥ TUI/终端体验
- 全屏模式鼠标捕获（#71926）
- 可点击选项防误触（#71921）
- **趋势**：新 TUI 界面（no-flashing）的交互细节需要优化

---

## 6. 开发者关注点总结

| 痛点 | 严重程度 | 表现 |
|------|----------|------|
| **安全过滤误报阻断合法开发** | 🔴 高 | 8 条 Issue 集中爆发，涉及无人机/嵌入式开发全链路 |
| **Windows 平台功能缺失/不稳定** | 🔴 高 | 认证、环境变量、通知、SSL 等多维度问题 |
| **MCP 协议实现 Bug** | 🟡 中 | 指令未传递、权限风暴、集成失败 |
| **模型指令遵循不可靠** | 🟡 中 | 持续忽略用户设定的规则和指令 |
| **VS Code 扩展 UI 缺陷** | 🟡 中 | 多窗口、面板交互、保存事件等 |
| **用量/计费信息不透明** | 🟠 低-中 | 配额显示取整误导、静默回归 |
| **TUI 交互体验** | 🟠 低 | 鼠标捕获、选项误触 |

---

**编辑注**：今日社区最突出的信号是安全过滤策略在**硬件/嵌入式开发场景**的误报问题。如果 Anthropic 希望在开发者社区保持信任，建议优先针对 IoT/embedded/hardware 领域建立白名单机制或细化分类器。

---

*数据来源：github.com/anthropics/claude-code · 生成时间：2026-06-28*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

> 📅 2026-06-28 · 数据来源: [github.com/openai/codex](https://github.com/openai/codex)

---

## 1. 今日速览

社区今日核心焦点集中在 **三条主线**：(1) gpt-5.5 模型在 Plus 计划下的 token 限额消耗异常激增 10–20 倍，引发大量用户强烈关注；(2) MCP OAuth 鉴权恢复机制的重构持续推进，多个串行 PR 等待合并；(3) Windows 平台多个稳定性问题集中爆发，包括 sandbox 失败、Desktop 崩溃、更新后无法重启等。Release 方面近 24 小时仅迭代了三个 rust alpha 版本，无重大功能更新。

---

## 2. 版本发布

过去 24 小时无重大版本发布，仅 Rust alpha 通道有迭代：

| 版本 | 链接 |
|------|------|
| **rust-v0.143.0-alpha.29** | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29) |
| rust-v0.143.0-alpha.28 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28) |
| rust-v0.143.0-alpha.27 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27) |

> Alpha 版本密集迭代（.alpha.27 → .29）暗示正式版本即将推出，社区可关注近期 changelog。

---

## 3. 社区热点 Issues

按影响范围与讨论热度排序：

### 🔴 限额消耗异常（最高热度）

**#28879**  gpt-5.5 + Plus 计划 token 限额消耗暴增 10–20 倍
- 👍 333 ·  186 条评论 · 状态: OPEN
- 自 6 月 16 日起，同样的提示词消耗预算从 20+ 次骤降至 2–3 次。大量 Plus 用户反馈 5 小时内预算被清空，影响日常使用。
- [openai/codex#28879](https://github.com/openai/codex/issues/28879)

**#29955**  单条消息耗尽 100 积分，5 小时限额归零
- 👍 7 · 💬 29 条评论 · 状态: OPEN
- Pro 用户报告发送 1 条消息后所有 Codex 积分和时限立即触发，疑似计费逻辑 bug。
- [openai/codex#29955](https://github.com/openai/codex/issues/29955)

### 🟠 Linux 桌面支持（长期高赞需求）

**#11023**  Linux 桌面版 Codex App
- 👍 648 · 💬 130 条评论 · 状态: OPEN
- 社区呼声最高的功能之一。macOS 版本因性能问题体验不佳，用户期待 Linux 原生替代品。
- [openai/codex#11023](https://github.com/openai/codex/issues/11023)

###  敏感文件安全排除机制

**#2847** 🔺 排除敏感文件的机制（.codexignore）
- 👍 414 · 💬 79 条评论 · 状态: OPEN
- 企业用户核心需求：防止 `.env`、密钥等敏感文件被 agent 读取或发送至模型。提议类似 `.gitignore` 的 `.codexignore` 语法。
- [openai/codex#2847](https://github.com/openai/codex/issues/2847)

### 🟡 SQLite 日志写入量修复

**#28224** 🔺 SQLite 反馈日志每年可写入 ~640 TB
- 👍 398 · 💬 93 条评论 · 状态: OPEN（已有修复 PR 合并）
- 经社区测试反馈，3 个 PR（#29432、#29457 等，已在 0.142.0 中发布）可减少 85% 日志写入量，SSD 耐久性问题已大幅缓解。
- [openai/codex#28224](https://github.com/openai/codex/issues/28224)

###  `/undo` 撤销功能回归

**#9203** 🔺 恢复 `/undo` 命令
- 👍 300 · 💬 50 条评论 · 状态: OPEN
- Codex 误删未跟踪文件或修改未提交代码时无法撤回，开发者认为这是回退到「安全开发」的关键功能。
- [openai/codex#9203](https://github.com/openai/codex/issues/9203)

### 🟡 OAuth 鉴权频繁失效

**#28672** 🔺 Business 版 Codex 反复 401 OAuth token 失效
- 👍 0 · 💬 6 条评论 · 状态: OPEN
- ChatGPT Business 用户在 Ubuntu dev container 中登录成功后仅数条消息就被踢出，需重复手机验证，严重影响工作流。
- [openai/codex#28672](https://github.com/openai/codex/issues/28672)

###  Windows Sandbox 多项失败

**#24259** 🔺 Windows 11 ARM64 沙箱间歇性启动失败
- 👍 12 · 💬 13 条评论 · 状态: OPEN
- ARM64 设备上 `codex doctor` 健康但 `spawn setup refresh` 持久报错，阻碍 ARM 平台开发者正常使用 CLI。
- [openai/codex#24259](https://github.com/openai/codex/issues/24259)

**#20570** 🔺 升级后报错 `CreateProcessAsUserW failed: 1920`
- 👍 7 · 💬 7 条评论 · 状态: OPEN
- Windows sandbox runner 在版本升级后完全无法启动，用户被锁定在当前版本无法更新。
- [openai/codex#20570](https://github.com/openai/codex/issues/20570)

###  apply_patch 工具在 Windows 失效

**#29072** 🔺 Windows 上 apply_patch 因 sandbox setup 无法启动而失败
- 👍 19 · 💬 22 条评论 · 状态: OPEN
- `codex-windows-sandbox-setup.exe` 无法从安装路径启动，导致核心代码编辑功能（apply_patch）完全不可用，阻塞 Windows CLI 用户。
- [openai/codex#29072](https://github.com/openai/codex/issues/29072)

---

## 4. 重要 PR 进展

### MCP OAuth 鉴权重构（串行合并中）

多个关联 PR 构建了新的 MCP OAuth 凭证管理与恢复体系，按顺序合并：

| PR | 说明 | 状态 |
|----|------|------|
| **#30292** | 序列化共享 MCP OAuth 凭证存储 | [OPEN](https://github.com/openai/codex/pull/30292) |
| **#30293** | 序列化 MCP OAuth refresh 事务 | [OPEN](https://github.com/openai/codex/pull/30293) |
| **#30294** | 路由 MCP OAuth 恢复流程通过 Codex | [OPEN](https://github.com/openai/codex/pull/30294) |
| **#30295** | 序列化 MCP OAuth 登录与登出 | [OPEN](https://github.com/openai/codex/pull/30295) |
| **#30296** | 报告 MCP OAuth 自动存储漂移 | [OPEN](https://github.com/openai/codex/pull/30296) |

> 此前 #30091、#30090、#29020 等已标记为被替代（superseded），统一迁移至新栈。解决 #28672 OAuth 频繁失效问题的基础设施层重构。

### Apps MCP 可用性感知

| PR | 说明 | 状态 |
|----|------|------|
| **#30226** | Apps 引导提示动态响应 MCP 可用性 | [OPEN](https://github.com/openai/codex/pull/30226) |

> 当 Apps MCP 在初始上下文构建时不可用但后续恢复时，模型现在能收到使用引导指令。

### 性能与基础设施

| PR | 说明 | 状态 |
|----|------|------|
| **#30269** | 禁用 Rendezvous WebSocket 的 Nagle 算法 | [OPEN](https://github.com/openai/codex/pull/30269) |
| **#30334** | 遥测: 记录结构化工具计时事件 | [OPEN](https://github.com/openai/codex/pull/30334) |
| **#30384** | 增加外部 currentTime/read 请求超时 (5s→10s) | [CLOSED](https://github.com/openai/codex/pull/30384) |

### 已合并/关闭的关键修复

| PR | 说明 | 状态 |
|----|------|------|
| **#30327** | 稳定合成的 call output ID | [CLOSED](https://github.com/openai/codex/pull/30327) |
| **#29691** | 运行时强制执行 marketplace 来源策略 | [CLOSED](https://github.com/openai/codex/pull/29691) |
| **#30291** | 暴露环境信息 RPC | [CLOSED](https://github.com/openai/codex/pull/30291) |

---

## 5. 功能需求趋势

基于本周 Issues 方向归纳：

| 趋势方向 | 热度 | 代表 Issue |
|----------|------|------------|
| **限额透明度与计费准确性** | 🔥🔥🔥 | #28879, #18018, #29955 |
| **Linux 桌面原生支持** | 🔥🔥🔥 | #11023 |
| **敏感文件排除与安全沙箱** | 🔥🔥 | #2847, #24993 |
| **撤销/安全回退机制** | 🔥🔥 | #9203 |
| **.codexignore 规范** | 🔥🔥 | #2847, #24993 |
| **Windows 沙箱/CLI 稳定性** | 🔥🔥 | #24259, #20570, #29072 |
| **MCP OAuth 与鉴权可靠性** | 🔥 | #27165, #28672 |
| **IDE 扩展体验** | 🔥 | #24325, #21863 |
| **跨平台 Chrome Bridge** | 🔥 | #29389, #22558 |

---

## 6. 开发者关注点总结

###  紧急痛点（阻塞日常使用）

1. **gpt-5.5 定价/限额模型疑似变更**：#28879 获得 333 👍，Plus 用户 5 小时预算从 20+ 次对话降至 2–3 次，高度疑似 token 计费规则暗改或 rate-limit 计算 bug。OpenAI 团队尚未正式回应。
2. **Windows 平台完整性**：sandbox 启动失败 (#24259, #20570, #29072)、Desktop 崩溃 (#30359)、更新后无法重启 (#29787)、Git 轮询进程残留 (#29408) 等多问题叠加，Windows 开发者体验堪忧。
3. **MCP OAuth 频繁失效**：Desktop 启动时不刷新过期 token (#27165)，Business 版反复 401 (#28672)。

###  高频功能诉求

4. **Linux App** (#11023, 648 👍)：跨平台开发者最期待的功能，长期位居热榜。
5. **Undo 能力** (#9203, 300 👍)：agent 误操作后的安全网，开发者认为是从「实验性工具」迈向「生产可用」的必要条件。
6. **文件排除机制** (#2847, #414 👍 / #24993)：企业合规刚需，`.codexignore` 或 `config.toml` 配置均接受。
7. **编辑前确认** (#24325)：部分用户认为当前 agent 自主编辑过于激进，期望恢复逐步确认模式。

### 📊 观察

- CLI 稳定性（尤其是 Windows）是当前最大；
- MCP 鉴权基础设施正在大规模重构，预示未来版本中 OAuth 能力将显著增强；
- Alpha 通道发布频率极高，下一个正式版可能包含上述重大修复。

---

*Generated on 2026-06-28 · Data freshness: ~24h · Total issues scanned: 50 · Total PRs scanned: 50*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-28

## 1. 今日速览

昨日（6/27）Gemini CLI 社区保持活跃，**无新版本发布**，共更新 ~50 条 Issues 和 18 条 PRs。核心焦点集中在：**Agent 行为控制**（静默扩大操作范围、任务失败后越权执行）、**Auto Memory 安全与质量修复**（敏感信息泄露、无效补丁隔离）、以及**安全性加固**（shell 参数展开降级、Bot 补丁审批机制）。多个高优先级 Bug——如子 Agent 报告假成功、通用 Agent 无限挂起——获得大量社区讨论。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 优先级 | 👍 | 评论 | 要点 |
|---|------|--------|-----|------|------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | P1 | 8 | 7 | 使用通用 Agent 时无限等待，简单操作（如创建文件夹）也会卡死。高赞高评，长期痛点。 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | P1 | 2 | 8 | 子 Agent 达到上限后谎报成功，用户无法辨别任务是否真正完成。严重数据完整性问题。 |
| [#15956](https://github.com/google-gemini/gemini-cli/issues/15956) | Browser Control for Gemini CLI | P2 | 0 | 14 | 提议通过 Semantic Agent（无障碍树）+ 视觉 Agent（截图 Computer Use）混合架构控制浏览器。讨论最热。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | P2 | 1 | 7 | 探索用 AST 感知工具精准读取方法边界，减少 token 消耗、提升代码库导航精度。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | P2 | 0 | 5 | Auto Memory 先读取完整日志再脱敏，存在安全隐患；需确定性脱敏机制。安全相关，受关注。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | P1 | 1 | 4 | Linux Wayland 环境下浏览器子 Agent 无法运行，影响 Linux 用户。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" | P1 | 3 | 4 | 命令已执行完毕但 CLI 显示"等待输入"，交互体验严重问题。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low-signal sessions | P2 | 0 | 5 | Auto Memory 对低价值会话无限重试，浪费资源。 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should stop/discourage destructive behavior | P2 | 1 | 3 | Agent 在 git 操作中滥用 `reset --force`，需安全约束。 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | Symlink agent file not recognized | P2 | 0 | 4 | `~/.gemini/agents/` 下的符号链接不被识别为 Agent，影响工作流组织。 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 分类 | 要点 |
|---|------|------|------|------|
| [#28171](https://github.com/google-gemini/gemini-cli/pull/28171) | fix(agent): prevent silent scope expansion when initial approach fails | OPEN | Agent 行为 | 修复 Agent 在初始策略失败后静默扩大操作范围（执行脚本、读取全文件）而不告知用户的问题。XL 规模修复。 |
| [#28172](https://github.com/google-gemini/gemini-cli/pull/28172) | fix(agent): prevent silent scope expansion on task failure | OPEN | Agent 行为 | 与 #28171 配合，修复 `mandateConfirm` 缺少显式指令阻止越权。 |
| [#28167](https://github.com/google-gemini/gemini-cli/pull/28167) | feat(caretaker): egress cloud run service | OPEN | 新 feature | 实现自动化 Caretaker Egress Cloud Run 服务，接收 Pub/Sub 事件并执行自动化 GitHub 操作。XL 规模。 |
| [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) | feat(evals): add eval coverage report command | OPEN | 工具链 | 新增 `eval:coverage` 命令，交叉引用 eval 清单与工具注册表，输出覆盖率报告。 |
| [#28178](https://github.com/google-gemini/gemini-cli/pull/28178) | fix(security): require approved bot patch artifacts | OPEN | 安全 | 要求显式审批标记后才消费 Bot 补丁产物，确保发布流程 fail-closed。 |
| [#28175](https://github.com/google-gemini/gemini-cli/pull/28175) | fix(policy): require confirmation for shell parameter expansion | OPEN | 安全 | 将含 shell 参数展开的白名单命令降级为需确认；YOLO 模式下直接拒绝。防止注入攻击。 |
| [#28094](https://github.com/google-gemini/gemini-cli/pull/28094) | fix(a2a-server): deep-merge user and workspace settings | OPEN | Bug 修复 | 修复 `loadSettings()` 浅合并导致嵌套配置（tools、telemetry 等）被覆盖的问题。 |
| [#28068](https://github.com/google-gemini/gemini-cli/pull/28068) | fix(core): guard message inspectors against empty parts arrays | OPEN | Bug 修复 | `[].every()` 在 JS 中对空数组返回 `true`，导致空 parts 消息被误判为 functionCall/Response。 |
| [#28093](https://github.com/google-gemini/gemini-cli/pull/28093) | fix(core): buffer chat compression telemetry until SDK is initialized | OPEN | 架构修复 | 修复 `logChatCompression()` 绕过 `bufferTelemetryEvent()` wrapper 导致的遥测数据丢失。 |
| [#28053](https://github.com/google-gemini/gemini-cli/pull/28053) | fix(core-tools): resolve defensive path resolution for @-reference files | OPEN | Bug 修复 | 修复文件工具在处理 `@path` 前缀路径时报 "File not found" 的生产级 Bug，同时修复 macOS 测试。 |

---

## 5. 功能需求趋势

从本批次 Issues 中提炼出以下 **Top 5 方向**：

### ① Agent 可控性与安全性 （最高频）
- 静默越界操作（#28155、#21409、#22323）
- 破坏性命令约束（#22672）
- 权限隔离（#22093）
- **趋势**：社区强烈要求 Agent 在权限边界内运行，避免自行扩大操作范围。

### ② Auto Memory 安全与质量 
- 脱敏时序问题（#26525）
- 低价值会话重试（#26522）
- 无效补丁隔离（#26523）
- **趋势**：记忆系统从"能用"走向"可靠安全"，社区关注数据质量和隐私保护。

### ③ Browser Agent 能力 🌐
- 混合架构控制浏览器（#15956）
- Wayland 兼容性（#21983）
- 配置覆盖（#22267）
- 锁恢复机制（#22232）
- **趋势**：浏览器自动化是 2026 年持续热门方向，涵盖桌面和 Wayland 环境。

### ④ AST 感知与代码库工具 
- AST 感知读取/搜索/映射（#22745、#22746）
- 任务追踪器原生文件工具（#21000）
- **趋势**：用结构化 AST 替代纯文本读取，降低 token 消耗、提升精度。

### ⑤ 开发者体验与终端性能 ️
- 终端 resize 无闪烁（#21924）
- 外部编辑器退出后缓冲区损坏（#24935）
- Shell 命令假死（#25166）
- 拖拽/粘贴图片（#27859，已合并）
- **趋势**：终端 IDE 级体验（低延迟、多模态输入、流畅交互）是持续诉求。

---

## 6. 开发者关注点与高频痛点

| 痛点 | 相关 Issues | 严重程度 |
|------|------------|----------|
| **Agent 无限挂起** | #21409（👍8）、#25166（👍3）、#22186 | 🔴 严重 |
| **子 Agent 假成功/状态不透明** | #22323、#21763、#22598 | 🔴 严重 |
| **安全性：越权操作与信息泄露** | #26525、#22672、#22093、#22186 |  高 |
| **Auto Memory 噪音与无效重试** | #26522、#26523、#26516 | 🟠 高 |
| **Linux/Wayland 兼容性** | #21983、#21924 | 🟡 中 |
| **工具鲁棒性（@路径、空数组、符号链接、shell 展开）** | #24246、#20079、#22466、#27981 |  中 |
| **缺乏可观测性（子 Agent 不可见、eval 覆盖不清）** | #22598、#21763、#24353 |  中 |

> **总结**：当前社区最大呼声是让 Agent **"可信可控"**——不越界、不撒谎、不卡死。其次是**安全加固**（Auto Memory 脱敏、shell 注入防御）。Browser Agent 和 AST 感知工具代表下一代能力建设方向，处于积极讨论阶段。

---

*数据来源：github.com/google-gemini/gemini-cli | 统计时间：2026-06-28*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**2026-06-28 · 周日**

---

## 1. 今日速览

过去 24 小时社区活跃度较高，共 15 条 Issue 更新和 3 条 PR 更新，但无新版本发布。**Windows 兼容性问题集中爆发**（v1.0.66 回归 bug、剪贴板失效、MCP Server 启动失败），**alt-screen 渲染争议**持续发酵，**Ubuntu Keychain 认证文档错误**引发社区强烈关注（👍20）。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 热度 | 要点 |
|---|-------|------|------|
| 1 | [#2165](https://github.com/github/copilot-cli/issues/2165) Ubuntu keychain support is broken | 👍20 · 💬2 | Ubuntu 下 `secret-tool` 缺失导致认证失败，官方文档指引有误。社区最关注，影响所有 Linux 用户登录流程。 |
| 2 | [#1799](https://github.com/github/copilot-cli/issues/1799) How to turn off alt-screen views? | 👍7 · 💬10 | 新增 alt-screen 模式引发渲染异常，用户要求提供回退开关。讨论量最大，反映变更未充分征求用户意见。 |
| 3 | [#3958](https://github.com/github/copilot-cli/issues/3958) Windows v1.0.66 无法启动 .bat/.cmd MCP Server | 💬1 | **严重回归**：v1.0.66 中 Windows 平台 stdio MCP Server 子进程直接报错退出，影响所有使用 bat/cmd 作为 MCP 命令的用户。 |
| 4 | [#3949](https://github.com/github/copilot-cli/issues/3949) Windows 11 复制到剪贴板无效 | 💬2 | Copilot 声称已复制但剪贴板为空，用户要求至少做有效性校验和错误日志。 |
| 5 | [#3959](https://github.com/github/copilot-cli/issues/3959) 删除文本后出现"幽灵字符"渲染残留 | — | TUI 终端重绘 bug，backspace 后旧文字残留在界面上，影响视觉体验。 |
| 6 | [#3955](https://github.com/github/copilot-cli/issues/3955) macOS 拖拽文件附件功能失效（回归） | — | Finder 拖拽文件到 Copilot 窗口不再触发附件，之前可用，近期回归。 |
| 7 | [#3957](https://github.com/github/copilot-cli/issues/3957) MBP 触控板无法滚动历史消息 | — | 触控板滚动被误识别为历史命令选择，macOS 交互体验问题。 |
| 8 | [#3874](https://github.com/github/copilot-cli/issues/3874) VS Code agent `preToolUse` hook 拒绝不生效 | 💬1 | 用户配置了拒绝所有命令的 hook，但 Copilot CLI 仍正常执行工具调用，权限控制存在安全隐患。 |
| 9 | [#3963](https://github.com/github/copilot-cli/issues/3963) 显示会话保留/过期日期 | — | 用户不清楚会话何时被清理，希望在状态行中展示过期时间，提升透明度。 |
| 10 | [#2778](https://github.com/github/copilot-cli/issues/2778) 请求引入类似 Claude Code 的 `/btw` 上下文提问功能 | 💬1 | 希望在不污染会话上下文的前提下，随时向 agent 提问，参考 Claude Code 的成熟实现。 |

---

## 4. 重要 PR 进展

过去 24 小时仅有 3 条 PR 更新，质量参差：

| PR | 状态 | 说明 |
|----|------|------|
| [#3928](https://github.com/github/copilot-cli/pull/3928) Add .gitignore and settings configuration | OPEN | 为项目添加 `.gitignore` 和 settings 配置，小型工程改进。 |
| [#570](https://github.com/github/copilot-cli/pull/570) Add macOS installation instructions to README.md | CLOSED | 由 Copilot 自身生成的文档补充 PR，已关闭。 |
| [#3737](https://github.com/github/copilot-cli/pull/3737) Jigg empire ai | OPEN | 标题与内容均无实质描述，疑似测试或垃圾 PR，建议关闭。 |

> ⚠️ 本期无实质性功能或修复 PR 进入 review，社区贡献质量需关注。

---

## 5. 功能需求趋势

从本期 Issues 中提炼出以下方向：

| 方向 | 相关 Issue | 趋势判断 |
|------|-----------|---------|
| **Windows 兼容性修复** | #3958, #3949, #3962 | 🔴 紧急 — v1.0.66 在 Windows 上出现多个回归，需优先修复 |
| **终端渲染与 TUI 体验** | #1799, #3959, #3957 | 🟠 高频 — alt-screen 模式争议、幽灵字符、触控板滚动等问题集中爆发 |
| **认证与密钥管理** | #2165 | 🟠 重要 — Linux 文档错误影响面广，需立即修正文档并修复逻辑 |
| **会话管理与透明度** | #3963, #2778 | 🟡 中 — 用户希望更清晰的生命周期提示和轻量上下文交互 |
| **权限与安全（Hooks）** | #3874 | 🟡 中 — hook 机制绕过可能带来安全风险，需认真对待 |
| **macOS 原生体验** | #3955 | 🟡 中 — 拖拽附件回归影响日常使用流程 |
| **自定义配置能力** | #3672 | 🟢 低 — `/voice` 快捷键自定义，呼声不高但体现个性化需求 |

---

## 6. 开发者关注点总结

**🔴 紧急痛点：Windows 平台稳定性崩塌**
v1.0.66 在 Windows 上同时出现 MCP Server 启动失败、剪贴板失效、应用无法启动三个独立 bug，Windows 用户体验严重退化，建议发布 hotfix。

**🟠 高频抱怨：终端渲染变更缺乏 opt-out**
alt-screen 模式的强制启用引发社区反弹（👍7、💬10），核心诉求是**给用户选择权**。建议所有 UI 破坏性变更提供环境变量或配置开关。

**🟡 持续关注：跨平台认证一致性**
Ubuntu keychain 文档错误（👍20）反映出 Linux 平台长期被忽视，认证流程在 macOS/Windows/Linux 三端的行为差异需要系统性梳理。

**💡 产品建议：会话生命周期透明化**
用户不清楚会话何时过期、上下文何时被清理。在状态行展示过期时间、提供 `/status` 详细信息，可显著降低困惑和工单量。

---

*数据来源：github.com/github/copilot-cli · 统计时间截至 2026-06-28*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-28

---

## 1. 今日速览

过去 24 小时社区活跃度持续提升：多起重磅 PR 今日合并，**Session 重命名功能**（#34264）和 **V2 Session 撤销/还原机制**（#34263）完成端到端实现；同时 **Bun 1.3.14 段错误**（#33890）和 **Windows ARM64 TUI 初始化失败**（#19130）两个平台兼容性问题引发广泛关注，外部环境依赖稳定性成为今日焦点。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 关键信息 |
|---|------|---------|
| 1 | **[#33890] Bun 1.3.14 segfault (SIGILL) on Linux x86_64** | 6 评 / 5 👍。在 AMD EPYC Zen4 平台上 opencode TUI 随机崩溃，影响生产环境稳定性。社区高度关注，疑与 Bun runtime 底层指令集兼容性有关。 |
| 2 | **[#19130] Windows ARM64: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error** | 6 评 / 5 👍。Windows on ARM 平台原生二进制的 TUI 完全不可用，拖了三个多月仍未彻底解决，WOA 用户呼声强烈。 |
| 3 | **[#34228] Unstable project skills exposed to model** | 5 评。35 个本地 Skills 在不同会话中加载不一致，直接影响 agent 可靠性。刚提交即获 5 条评论，复现路径清晰。 |
| 4 | **[#34226] High CPU (110%) & 2GB memory after 3h session** | 3 评。长会话后严重资源泄漏，macOS ARM 环境，疑与会话上下文膨胀相关。 |
| 5 | **[#23153] Pay Go with crypto** | 13 评 / 24 👍。评论最多、点赞最高。社区对加密支付方式需求强烈，但官方尚未明确回应路线图。 |
| 6 | **[#33213] Server mode accumulates 26.8GiB JS heap** | 5 评。`opencode serve` 长时运行后内存暴涨至 26.8GiB，2.86GiB 落入 swap，影响生产部署信心。 |
| 7 | **[#34146] macOS kernel NFS messages leak into TUI** | 3 评。OrbStack 用户的 NFS 内核日志污染 TUI 显示，属于 macOS 环境级干扰，影响面广。 |
| 8 | **[#34207] Model selection silently reverts after Q&A** | 4 评。agent 回答问题期间用户切换模型会被静默覆盖，交互体验倒退。 |
| 9 | **[#13877] /sessions picker only shows recent sessions** | 9 评 / 6 👍。老会话无法通过 picker 选择，半年未修，影响多项目工作流。 |
| 10 | **[#34130] Google Gemini 400 error on nullable union types** | 2 评。Effect Schema 与 Gemini function calling 的 schema 校验冲突，附带修复方案，涉及 Schema 标准化核心逻辑。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| 1 | **[#34264] feat(tui): add session rename** | ✅ 已合并 | 端到端实现 Session 重命名——新增 `session.next.renamed` 事件、`SessionV2.rename` 接口、Projector 投影逻辑及 `POST /api/session/:id/rename` REST 端点。**直接回应 Issue #25848 的 8 评需求。** |
| 2 | **[#34263] feat(tui): wire up undo/redo/revert for V2 sessions** | ✅ 已合并 | 将 V2 staged-revert API 接入 TUI，替换原有"未实现"桩代码，新增 `BusyError` 并发守卫。撤销/还原进入可用阶段。 |
| 3 | **[#34267] fix(llm): collapse system messages when plugin appends single entry** | 🟢 开放 | 修复 `request.ts` 中 `system.length > 2` 阈值判断，避免插件追加 system 消息后错误压缩。 |
| 4 | **[#34261] fix(core): guard non-reducing compaction** | 🟢 开放 | 修复 #27924：当 compaction 未能使上下文缩小时，防止无限递归的 overflow recovery。 |
| 5 | **[#34242] fix(tui): prevent piped stdin from breaking UI** | 🟢 开放 | **一次关闭 5 个相关 Issue** (#28538/#24195/#3871/#6220)，修复 stdin 管道输入破坏 TUI 交互的长期顽疾。 |
| 6 | **[#34256] fix(server): reject foreign directory hints before instance lookup** | 🟢 开放 | 与 #30895、#19473 WSL 路径跨环境问题的修复联动，在实例查找前拒绝非法目录提示。 |
| 7 | **[#34234] fix: preserve attachment file paths** | 🟢 开放 | 关闭 #23801、#17488，粘贴/拖拽附件保留文件系统路径，使 agent 可直接访问原始文件。 |
| 8 | **[#29881] fix(tui): add wl-paste text read for Wayland** | 🟢 开放 | 修复 Wayland 系统（无 xsel/xclip）下 Ctrl+V 静默失败的问题，扩展 Linux 桌面兼容性。 |
| 9 | **[#34233] feat(app): v2 wsl ui** | 🟢 开放 | 全新 WSL UI 组件，配合前述路径修复提供更好的 WSL 桌面端体验。 |
| 10 | **[#34227] fix(console): account for partial Zen refunds** | 🟢 开放 | 修复 Stripe 退款 webhook 金额计算错误，防止重复扣减，涉及计费核心路径。 |

---

## 5. 功能需求趋势

从全部 50 条活跃 Issues 提炼：

| 趋势方向 | 代表 Issue | 热度 |
|---------|-----------|------|
| **外部模型兼容性** | #31348 GLM cache 不稳定、#34130 Gemini schema 冲突、#33766 未知服务端错误、#34030 企业模型不可用 | ⭐⭐⭐⭐ 极高 |
| **WSL / 跨平台路径** | #19473 UNC 路径、#30895 WSL 路径转换、#34146 macOS NFS 污染 | ⭐⭐⭐⭐ 高 |
| **会话管理能力** | #13877 sessions picker、#25848 重命名、#6819 标题缺失、#34207 模型切换丢失 | ⭐⭐⭐ 中高 |
| **性能 & 资源** | #33213 内存暴涨、#33890 Bun SIGILL、#34226 CPU/内存泄漏、#28492 监听器泄露 | ⭐⭐⭐ 高 |
| **支付 & 定价** | #23153 加密货币支付 | ⭐⭐ 中 |
| **ARM / 低功耗平台** | #19130 ARM64 TinyCC、#34054 arm64 shell SIGTRAP | ⭐⭐ 中 |

---

## 6. 开发者关注点

1. **Bun runtime #33890 成最大隐患**：段错误仅在特定 CPU（AVX-512）上触发，用户难以自查根因，团队需尽快与 Bun 上游协调。
2. **企业模型生态桥接不足**：GitHub Copilot Enterprise 的第三方模型（#34030）、#12219 OpenRouter 额度提示不够友好——OpenCode 作为开放工具，与商业平台的集成体验仍需打磨。
3. **长会话稳定性是付费用户核心诉求**：内存膨胀（#33213）、CPU 飙升（#34226）、#12219 额度耗尽三项叠加，直接关系到 "Opencode Go" 订阅模式的口碑。
4. **WSL 场景持续流血**：至少 4 个关联 Issue（#19473/#30895/#34255/#34233）在积极修复中，今日多个 PR 集中发力，预计近期将有明显改善。
5. **Skills 体系尚不成熟**：#34228（加载不稳定）与 #34113（不兼容模型触发）暴露了 Skills 功能的边界条件处理短板。

---

> 📡 日报由 AI 辅助生成，数据截止 2026-06-28 09:00 UTC。原文链接：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-06-28

---

## 1. 今日速览

过去24小时无**版本发布**，但社区 Issue 和 PR 活跃异常——24 条 Issue、9 条 PR 集中上线。两大焦点问题拉满关注：**Markdown 流式输出强制滚到底部**（#5825，34 条评论，争议中）、**网关错误信息被各 Provider 吞掉**（#5763）的修复 PR 今天被合并行列。同时平台安全和扩展 API 扩展方向也非常不错，一天之内涌现了多条关于**扩展使用量上报**（reportUsage）和 **Extension 执行工具**（#6121）的讨论。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

挑选 10 条最值得关注的 Issue，按优先级排序：

| # | Issue | 核心议题 | 为何重要 | 社区信号 |
|---|-------|---------|---------|---------|
| 1 | [#5825](https://github.com/earendil-works/pi/issues/5825) | Streaming markdown 强制滚到底部 | T34 条评论，流式输出体验痛点 | 高频讨论，影响面广 |
| 2 | [#5763](https://github.com/earendil-works/pi/issues/5763) | Provider 吞掉 HTTP error body | 网关错误不可调试 | 已有修复 PR 跟进（#5832），正在推进 |
| 3 | [#6129](https://github.com/earendil-works/pi/issues/6129) | `@hypabolic/pi-hypa` 刷安装量安全报告 | 平台安全 + 包生态治理 | 社区对恶意包的警觉性高，紧迫 |
| 4 | [#6105](https://github.com/earendil-works/pi/issues/6105) | 消息输入字符转义 bug | 输入层 bug，可复现 | 影响基础交互，修复优先级高 |
| 5 | [#6122](https://github.com/earendil-works/pi/issues/6122) | Ctrl+G 外部编辑器仅限 `EDITOR` 变量 | IDE 集成灵活性不足 | Windows + Git Bash 用户体验 |
| 6 | [#6127](https://github.com/earendil-works/pi/issues/6127) | `--append-system-prompt` 无法覆盖 coding-agent identity | RPC 模式下 Agent 身份注入 Bug | `--mode rpc` 用户刚需 |
| 7 | [#6112](https://github.com/earendil-works/pi/issues/6112) | `pi install` 无写权限时不报失败 | 安装流程静默失败 | 体验差，已有关联修复 PR |
| 8 | [#6110](https://github.com/earendil-works/pi/issues/6110) | Extension `session_start` 早于 `initTheme` | `theme` 未初始化触发 Proxy Crash | pi-web 扩展开发踩坑 |
| 9 | [#6117](https://github.com/earendil-works/pi/issues/6117) | `createAgentSession` 公开导入路径稳定性 | 下游 SDK 集成可靠性 | API 稳定性需求 |
| 10 | [#6114](https://github.com/earendil-works/pi/issues/6114) | Azure OpenAI 5.2-chat-latest 模型名错误 | 新模型名称映射 Bug | 模型准确性，已有关联修复 PR |

**亮点分析**：
- **Issue #5825** 是当前社区最热的交互体验问题，34 条评论显示争议性强，核心纠结在"用户滚动阅读 vs 自动跟进输出"之间的 UX 选择，值得社区协调标准。
- **Issue #5763** 和跟进 PR #5832 形成了"问题发现 → 修复跟进"的闭环，反映 Provider 层错误信息的标准化处理长期缺失，引发关注。

---

## 4. 重要 PR 进展

挑选 10 条关键 PR（含待讨论的 Open PR 和近期 Close 的重要修复）：

| PR | 状态 | 类型 | 核心改动 |
|----|------|------|---------|
| [#5735](https://github.com/earendil-works/pi/pull/5735) | **OPEN** (to-discuss) | 功能 | Extension reload 安全延迟机制，`ctx.reload()` 在所有扩展上下文中可用 |
| [#5678](https://github.com/earendil-works/pi/pull/5678) | **OPEN** (to-discuss) | 架构 | 自定义消息 `excludeFromContext`，支持从模型上下文中排除但仍渲染，涉及压缩/分支汇总等链 |
| [#5832](https://github.com/earendil-works/pi/pull/5832) | **OPEN** | Bug fix | 修复网关非 2xx 响应 body 丢失问题 → 见 Issue #5763 |
| [#6115](https://github.com/earendil-works/pi/pull/6115) | **OPEN** (to-discuss) | UX | 可配置聊天气泡边距（解决"去掉 padding"长期反馈） |
| [#6123](https://github.com/earendil-works/pi/pull/6123) | **CLOSED** | UX | 允许通过 settings.json 配置 Ctrl+G 外部编辑器 → 见 Issue #6122 |
| [#6119](https://github.com/earendil-works/pi/pull/6119) | **CLOSED** | API 扩展 | 新增扩展 API `pi.reportUsage()` → 扩展可以向主会话 footer / `/session` 贡献 token 使用量计费 |
| [#6109](https://github.com/earendil-works/pi/pull/6109) | **CLOSED** | Bug fix | 修复 release 二进制 `/reload` 时 Extension 依赖模块重复评估副作用 → 见 Issue #6108 |
| [#6111](https://github.com/earendil-works/pi/pull/6111) | **CLOSED** | Bug fix | `settings.json` 无写权限时 `pi install/remove` 明确报错，避免静默失败 → 见 Issue #6112 |
| [#6099](https://github.com/earendil-works/pi/pull/6099) | **CLOSED** | Bug fix | 修正 Azure OpenAI 模型命名，移除不存在的 `gpt-5.2-chat-latest` → 见 Issue #6114 |
| [#6099](https://github.com/earendil-works/pi/pull/6099) | **CLOSED** | Bug fix | 模型名称准确性修复（与 Issue \#6114 直接相关） |

**重点解读**：

- **PR #5678** (`excludeFromContext`) 和 **PR #5735** (defer reload) 由核心贡献者 mitsuhiko 提交，涉及 Extension 架构和上下文管理的底层机制，对扩展开发影响深远，目前处于 to-discuss 讨论阶段，建议扩展开发者重点关注。

- **PR #6119**（`reportUsage`）直接回应 Issue #6120，扩展现在可以使用 `pi.reportUsage()` 将子 Agent 的 token 消耗上报给主会话 footer 计费面板，对于需要跟踪多 Agent 成本的开发者是重磅利好。

- **PR #5832** 解决了网关错误信息丢失这一跨 Provider 的调试痛点，合并后 Expected behavior: Bedrock、OpenAI、Gemini 在遇到 403/5xx 时能正确显示错误 body，大幅提升调试效率。

---

## 5. 功能需求趋势

从今日 24 条 Issue + 9 条 PR 中提炼的社区关注方向：

### 🔥 第一梯队：高频刚需
- **扩展 API 强化**（`reportUsage`、扩展执行工具、安全 reload、`excludeFromContext`） — 扩展生态正在从"能写"向"能深度集成"跨越
- **输入/流式交互体验**（滚动控制、字符转义、聊天气泡边距） — TUI 细节打磨成为体验竞争点

### 🚀 第二梯队：快速成长
- **外部编辑器/IDE 集成**（Ctrl+G 配置、`$VISUAL` 替代） — 开发者工作流嵌入需求明显
- **错误信息可读性**（HTTP body 丢失、静默安装失败、HTML 渲染错误） — 运维调试体验呼声高
- **Provider/Model 准确性**（Azure OpenAI 模型名修正、DiffusionGemma thinking 解析、opencode-go gateway bug 上游厘清） — 多 Provider 兼容持续是维护重灾区

### 🛡️ 第三梯队：安全基线
- **包安全治理**（刷安装量行为检测、恶意包标记） — `@hypabolic/pi-hypa` 安全事件反映平台进入"需要治理"阶段
- **RPC 程序化集成**（`createAgentSession` 路径稳定性、audio pass-through、Agent identity 注入） — Pi 作为后端引擎的使用场景正在拓宽

---

## 6. 开发者关注点

综合今日反馈，总结开发者的核心痛点和高频需求：

### 🔴 痛点
1. **静默失败普遍** — `pi install` 无写权限不报错（#6112）、扩展依赖 re-evaluation 副作用难追踪（#6108）
2. **Provider 层错误不可调试** — 网关返回的 body 被不同 Provider 各取所需地丢弃，403/500 时开发者看不到服务器真实错误（#5763）
3. **滚动体验争议** — Markdown 流式输出强制滚到底部与用户阅读习惯冲突，设计取舍缺乏标准（#5825）
4. **多 Agent 成本不透明** — 子 Agent 消耗只有通过展开工具调用卡片查看，没有汇总视图（#6120，已通过 #6119 缓解）

### 🟢 高频需求（按提及数排序）

| 需求 | 涉及 Issue |
|------|-----------|
| 外部编辑器通过 settings.json 配置 | #6122, #6123 |
| 扩展向主会话贡献使用量数据 | #6120, #6119 |
| Extension 执行 Agent 工具 | #6121 |
| 可配置聊天气泡 padding | #6115 |
| 命令行参数控制 Agent identity | #6127 |
| npm 安装/更新附加参数 | #6126, #6125 |
| 支持 audio pass-through | #6118 |
| `/reload` 在流式输出时排队执行 | #6107 |

---

> **明日看点**：PR #5735 / #5678（Extension 架构改进）的讨论推进值得跟踪；Issue #5825 的 UX 社区决策方向需要关注；包治理安全事件跟进 #6129。

*数据来源：github.com/badlogic/pi-mono | 生成时间：2026-06-28*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**2026-06-28 | 数据来源：Hmbown/CodeWhale**

---

## 1. 今日速览

过去 24 小时社区活跃度极高，共 37 个 PR 合入、35 条 Issue 更新。**核心主题集中在三大方向**：① Token/缓存效率优化（多个 EPIC 级 Issue 持续推进，PR 密集合入）；② ACP 协议适配与 Zed 编辑器集成（流式输出、取消机制均已落地）；③ 插件系统与 Prompt 可配置化（轻量插件框架 + 基础 Prompt 外部覆盖）。无新版本发布。

---

## 2. 版本发布

过去 24 小时内无新 Release。当前主线围绕 **v0.8.66** 收尾与 **v0.8.67 / v0.9.0** 功能开发并行推进。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 为什么值得关注 |
|---|-------|------|---------------|
| 1 | **#1177 输入缓存命中率太低** | 💬24 👍0 | 用户对比 DeepSeek-Reasonix 95%+ 的缓存命中率，指出本项目差距悬殊。这是长期痛点，近期多个 PR（#3693、#3697）正系统性回应。[链接](https://github.com/Hmbown/CodeWhale/issues/1177) |
| 2 | **#1120 缓存命中方面似乎还是有些问题** | 💬21 👍0 | 与 #1177 形成呼应，用户质疑 v0.8.17 是否已修复 input_cache_miss bug，社区讨论活跃。[链接](https://github.com/Hmbown/CodeWhale/issues/1120) |
| 3 | **#743 token 消耗增大了很多** | 💬13 👍0 | 用户反馈半天消耗 4 亿 token，请求过于密集。直接推动了 #3388 EPIC 及今日多个 token 优化 PR。[链接](https://github.com/Hmbown/CodeWhale/issues/743) |
| 4 | **#3192 提交到 agentclientprotocol/registry** | 💬12 👍0 | 希望被 ACP 官方注册表收录，方便 Zed 等编辑器一键安装。今日 #3702、#3698 两个 ACP 流式/取消 PR 正是对此的落地。[链接](https://github.com/Hmbown/CodeWhale/issues/3192) |
| 5 | **#3275 CodeWhale 过度修改、偏离用户意图** | 💬12 👍0 | 回归自 #3061，Agent 进入自问自答循环、超出用户请求范围。涉及 Agent 行为控制的核心可靠性问题。[链接](https://github.com/Hmbown/CodeWhale/issues/3275) |
| 6 | **#3205 Fleet 模型类、自动负载与语义路由** | 💬10 👍0 | 维护者自建 EPIC，构建 TUI/CLI/Fleet 共享的模型选择器。架构级重构，影响多端一致性。[链接](https://github.com/Hmbown/CodeWhale/issues/3205) |
| 7 | **#3568 plan 和 agent 模式再次混合** | 💬6 👍1 | 用户上传完整对话导出，证明模式切换感知仍然失败。Agent 在 plan 模式下执行了文件修改操作。[链接](https://github.com/Hmbown/CodeWhale/issues/3568) |
| 8 | **#3495 采用 Moraine 作为记忆后端** | 💬4 👍0 | 维护者提出集成外部记忆引擎 Moraine，通过 MCP 暴露会话搜索/召回能力。长期 Agent 记忆方向。[链接](https://github.com/Hmbown/CodeWhale/issues/3495) |
| 9 | **#3541 Rust 原生运行时/桌面客户端** | 💬3 👍0 | 社区提议用 Rust 重写运行时以降低延迟、改善非编码场景 UX。与 #3309 的 Rust 代码拆分形成呼应。[链接](https://github.com/Hmbown/CodeWhale/issues/3541) |
| 10 | **#3388 v0.8.66 EPIC: Token/缓存/上下文纪律发布门禁** | 💬2 👍0 | 虽已关闭，但作为今日多个 token 优化 PR（#3693、#3697）的母 Issue，标志着团队将此作为发布硬性门槛。[链接](https://github.com/Hmbown/CodeWhale/issues/3388) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 作者 | 功能/修复 |
|---|-----|------|----------|
| 1 | **#3697** — cache-maximal 上下文模式 | @findshan | 实现 #528 核心：将活跃文件完整内容注入上下文而非仅路径列表，利用 DeepSeek V4 缓存降低重复读取的 token 消耗。[链接](https://github.com/Hmbown/CodeWhale/pull/3697) |
| 2 | **#3693** — token/cache/cost 发布门禁计分卡 | @findshan | 实现 #3388 首个切片：离线评估框架增加 token/成本基线与回归检测，为发布提供量化门禁。[链接](https://github.com/Hmbown/CodeWhale/pull/3693) |
| 3 | **#3702** — ACP 流式 session/update | @findshan | 修复 #3192：ACP 适配器从整轮缓冲改为流式增量输出，Zed 等编辑器可实时渲染 Agent 回复。[链接](https://github.com/Hmbown/CodeWhale/pull/3702) |
| 4 | **#3698** — ACP 取消进行中的 session/prompt | @findshan | 解决 ACP stdio 适配器串行阻塞问题，session/cancel 现在能真正中断正在进行的 provider 调用。[链接](https://github.com/Hmbown/CodeWhale/pull/3698) |
| 5 | **#3696** — 允许从配置目录覆盖基础 Prompt | @findshan | 关闭 #3638 核心需求：用户可通过 config 目录文件替换系统 Prompt，支持文学创作等非软件工程场景。[链接](https://github.com/Hmbown/CodeWhale/pull/3696) |
| 6 | **#3699 / #3692** — 轻量插件系统 | @pkeging | 新增插件发现、注册、生命周期管理、Prompt 注入机制；#3692 额外内置 rust-toolkit 插件。[链接](https://github.com/Hmbown/CodeWhale/pull/3699) / [链接](https://github.com/Hmbown/CodeWhale/pull/3692) |
| 7 | **#3703 / #3701 / #3705** — 工具错误回退提示 | @cyq1017 | 三个配套 PR：在工具调用连续失败时向模型注入回退指导（切换工具/缩小请求/建议直连 URL），回应 #1641。[链接](https://github.com/Hmbown/CodeWhale/pull/3703) |
| 8 | **#3690** — 本地化 Skill 描述省 token | @findshan | 关闭 #3354：非英文会话中 Skill 描述以对应语言注入，避免英文描述浪费 token。[链接](https://github.com/Hmbown/CodeWhale/pull/3690) |
| 9 | **#3700 / #3694** — 验证器猎捕裁决映射 | @cyq1017 | 实现 #2093：pass/partial/fail → hunted/wounded/escaped 结构化裁决输出，对齐目标追踪 Trophy 卡片。[链接](https://github.com/Hmbown/CodeWhale/pull/3700) |
| 10 | **#3706** — 命令边界重构 Layer 4.2 | @aboimpinto | 关闭 #2870 EPIC 的最后一层：注册表清理、文档完善与最终验证，为 v0.9.0 铺路。[链接](https://github.com/Hmbown/CodeWhale/pull/3706) |

---

## 5. 功能需求趋势

从全部 35 条 Issue 中提炼出社区最关注的五大方向：

| 方向 | 代表 Issue | 趋势判断 |
|------|-----------|---------|
| **🔋 Token 效率与缓存优化** | #1177, #1120, #743, #3388, #528, #2956, #2953 | **最热门方向**。用户用"4 亿 token/半天"等具体数字施压，维护者已建立 EPIC 级门禁机制，本周 PR 密集落地。 |
| **🔌 IDE/编辑器集成（ACP 协议）** | #3192, #3702, #3698 | 从"请求被收录"到"流式输出+取消"，ACP 适配已进入实质交付阶段，Zed 集成是主要驱动力。 |
| **🧠 Agent 行为可靠性** | #3275, #3568, #1641 | 模式混淆、过度修改、工具死循环——社区对 Agent "自主性"的边界越来越敏感，是可靠性层面的核心矛盾。 |
| **🔧 可扩展性（插件/Prompt 配置）** | #3638, #3696, #3699, #3692 | 用户希望将 TUI 用于非编程场景（写作、文档审阅），Prompt 可配置化和插件系统是解法。 |
| **🏗️ 架构演进（Rust 化/代码拆分）** | #3541, #3309, #3205 | 社区提议 Rust 原生运行时降低延迟；维护者同步推进 runtime_api.rs 按域拆分，技术债清理进行中。 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **缓存命中率是最大痛点**：多个 Issue（#1177、#1120、#1747、#1732）从不同角度反映缓存效率远低于官方 DeepSeek-Reasonix，直接影响成本。本周 #3697（cache-maximal 模式）和 #3693（计分卡）是针对性回应，但实际效果仍需验证。

2. **Token 消耗不透明**：用户反馈"半天 4 亿 token"（#743）却难以自查原因。社区需要更好的 token 用量可视化与归因工具。

3. **Agent 自主性过强**：#3275 和 #3568 表明 Agent 在 plan/agent 模式间混淆、自行扩大工作范围。开发者需要更严格的人机确认机制。

4. **非编程场景支持**：#3638 和 #3541 显示用户希望将 TUI 用于文学创作、文档审阅等非软件工程场景，当前硬编码的 Prompt 和 Node.js 运行时成为瓶颈。

5. **外部工具失败时的优雅降级**：#1641 获得 3 个配套 PR（#3701、#3703、#3705），说明社区对"工具挂了 Agent 就卡死"的问题已达成共识，回退策略正在系统化。

---

*日报生成时间：2026-06-28 | 下次更新：2026-06-29*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*