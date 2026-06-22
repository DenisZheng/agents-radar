# AI CLI 工具社区动态日报 2026-06-22

> 生成时间: 2026-06-22 00:43 UTC | 覆盖工具: 9 个

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
**日期：2026-06-22 | 分析范围：7 大主流 AI CLI 工具**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从"能用"到"好用"的成熟度爬坡期**。所有工具均无新版本发布，社区精力集中在稳定性修复、架构重构和体验打磨上，而非功能扩张。**上下文管理（compaction）、多模型/多提供商兼容性、安全执行沙箱**成为全行业的三大共性攻坚方向。同时，各工具在差异化定位上逐渐清晰：Claude Code 和 Codex 争夺企业级付费用户，Gemini CLI 和 Qwen Code 押注 MCP 生态与本地化，OpenCode 和 Pi 走开源社区驱动路线，CodeWhale 则从个人工具向可信执行平台演进。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 新版本发布 | 活跃度评级 |
|------|:-----------:|:-------:|:----------:|:----------:|
| **Claude Code** | 50 | 2 | 无 | 🟡 中 |
| **OpenAI Codex** | 50 | 39 | 无 | 🔴 高 |
| **Gemini CLI** | 50 | ~15 | 无 | 🟡 中 |
| **Copilot CLI** | 9 | 1 | 无 | 🟢 低 |
| **OpenCode** | 50 | ~20 | 无 | 🔴 高 |
| **Pi** | 39 | 6 | 无 | 🟡 中 |
| **Qwen Code** | 28 | 46 | v0.18.5 | 🔴 高 |
| **CodeWhale** | ~20 | ~10 | v0.8.63 | 🟡 中 |
| **Kimi Code CLI** | 0 | 0 | 无 | ⚪ 无活动 |

> **数据洞察**：OpenAI Codex（39 PR）和 Qwen Code（46 PR）的工程迭代速度最快；Claude Code 和 OpenCode 的 Issue 讨论量最大，社区反馈最活跃；Copilot CLI 和 Kimi Code CLI 今日活动量最低。

---

## 3. 共同关注的功能方向

### ① 上下文管理与自动压缩（Compaction）
涉及工具：**全部 7 个活跃工具**

| 工具 | 具体诉求 |
|------|---------|
| Claude Code | 模型静默从 1M 上下文切换为非 1M 版本，导致不可恢复错误 |
| Codex | 超长线程 context compaction 导致操作连续性丢失 |
| Gemini CLI | Auto Memory 系统安全日志泄露密钥 |
| OpenCode | 会话数据本地化存储、检查点（Checkpoint）功能 |
| Pi | 自动压缩 opt-in 改造、压缩事件暴露触发原因 |
| Qwen Code | 循环调用防护、长任务稳定性 |
| CodeWhale | 无缝 auto-compaction、token budget 调节器 |

**行业共识**：上下文管理已从"技术优化项"升级为"核心可用性门槛"，长会话场景下的稳定性直接决定用户留存。

### ② 多模型/多提供商兼容性
涉及工具：**Claude Code、Codex、Gemini CLI、OpenCode、Pi、CodeWhale**

- **Claude Code**：MCP 连接器认证失败（Atlassian）、HTTP MCP 兼容性问题
- **Codex**：Windows WSL 路径反序列化失败、代理环境回归
- **Gemini CLI**：MCP Elicitation 协议不支持、工具数超 128 直接 400、图片 MIME 嗅探缺失
- **OpenCode**：Qwen3/Kimi K2 断连、DeepSeek MCP $ref 崩溃、Copilot Opus 4.8 伪工具调用
- **Pi**：vLLM 上下文溢出错误模式、OpenRouter 费用显示、Ollama 兼容性
- **CodeWhale**：MiniMax M3/Qwen/GLM 推理内容解析 bug

**行业共识**：Provider 抽象层的健壮性已成为工具能否覆盖多模型用户群的关键瓶颈，各工具均在碎片化适配中补课。

### ③ 安全执行与权限控制
涉及工具：**Claude Code、Gemini CLI、Copilot CLI、OpenCode、Qwen Code、CodeWhale**

- **Claude Code**：模型生成 `xargs rm -rf` 未使用 `-0` 导致数据丢失
- **Gemini CLI**：子代理权限绕过、Auto Memory 密钥泄露
- **Copilot CLI**：Hook 拒绝不生效、沙箱文档与实现不符
- **OpenCode**：YOLO 模式（👍30 最高赞功能请求）
- **Qwen Code**：符号链接逃逸工作区、Plan Mode 安全边界
- **CodeWhale**：安全加固跟踪器、auto-review 门控、app-server 认证强制

**行业共识**：AI 自主执行能力与安全可控性之间的张力是全行业核心矛盾，"信任但验证"的权限模型成为刚需。

### ④ Windows 平台体验
涉及工具：**Claude Code、Codex、Copilot CLI、Pi、CodeWhale**

- Claude Code：Windows + VSCode 插件 `redacted_thinking` 错误
- Codex：独立安装包缺失（👍153）、WSL 稳定性、沙箱回归、PowerShell 闪烁
- Copilot CLI：ARM64 致命崩溃（BEX64）
- Pi：WSL2 路径支持
- CodeWhale：Windows 11 TUI 间歇性冻结

**行业共识**：Windows 是 AI CLI 工具的最后一块体验短板，企业用户和跨平台开发者对此诉求强烈。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 | 核心优势 | 核心短板 |
|------|---------|---------|---------|---------|---------|
| **Claude Code** | 企业级长会话编码、MCP 生态 | 专业开发者、企业团队 | Anthropic 闭源模型 + MCP 扩展 | 1M 上下文 Opus、深度 IDE 集成 | API 稳定性差、多账户管理缺失 |
| **OpenAI Codex** | 代码执行模型（code-mode）、ChatGPT 集成 | OpenAI 生态用户、数据科学家 | Rust 实现 + Responses API + 沙箱 | 代码模式架构领先、ChatGPT 会话互通 | 速率限制不透明、Windows 体验差 |
| **Gemini CLI** | MCP 协议合规、Auto Memory、子代理 | Google 生态用户、MCP 开发者 | Google 模型 + AgentClientProtocol | MCP 生态投入最深、安全修复响应快 | 子代理可靠性差、Shell 体验鲁棒性不足 |
| **Copilot CLI** | GitHub 生态集成、Hooks 插件、企业安全 | GitHub 企业用户、DevOps | GitHub 模型 + Hooks 机制 + OTel | 与 GitHub 生态深度集成、安全策略体系化 | 社区活跃度低、Windows ARM64 崩溃 |
| **OpenCode** | 多模型聚合、TUI 体验、开源社区 | 开源爱好者、多模型用户 | Effect-TS + 多 Provider 抽象 | 模型覆盖最广、TUI 2.0 架构升级 | 多模型适配层脆弱、渲染稳定性差 |
| **Pi** | 本地 LLM 优先、扩展生态、TUI 交互 | 隐私敏感用户、本地模型用户 | TypeScript + 扩展 API + 本地 Provider | 本地模型支持最好、扩展 API 设计清晰 | Agent 挂起/死锁频发、IME 支持差 |
| **Qwen Code** | 语音输入、Artifact 工具、IDE 集成 | 国内开发者、JetBrains 用户 | Qwen 模型 + MCP + VSCode/JetBrains 插件 | 功能迭代最快（46 PR）、新特性探索积极 | 跨平台路径处理薄弱、CI 反馈循环慢 |
| **CodeWhale** | 安全执行平台、Rust 架构、代码审查 | 安全敏感团队、Rust 开发者 | Rust 单体拆分 + 沙箱 + 审查门控 | 安全架构最严谨、Rust 性能 | 社区规模小、品牌刚更名需认知对齐 |

---

## 5. 社区热度与成熟度

### 社区活跃度排序（基于 Issue + PR 总量）

```
🔴 高活跃（>60 条更新）
├── OpenAI Codex        89 条  — 工程迭代最密集，code-mode 架构重构期
├── Qwen Code           74 条  — 功能发布+PR 合并双高峰，快速迭代期
└── OpenCode            ~70 条 — TUI 2.0 合并后密集修复期

🟡 中活跃（30-60 条更新）
├── Claude Code         52 条  — 用户基数大但 PR 少，维护响应偏慢
├── Gemini CLI          ~65 条  — 安全修复+MCP 兼容性攻坚期
├── Pi                  45 条  — 架构拆分+本地模型支持推进期
└── CodeWhale           ~30 条 — Rust 重构+安全加固期

🟢 低活跃（<30 条更新）
└── Copilot CLI         10 条  — 社区冷清，可能处于版本间静默期

⚪ 无活动
└── Kimi Code CLI       0 条   — 过去 24 小时无任何社区活动
```

### 成熟度评估

| 阶段 | 工具 | 特征 |
|------|------|------|
| **快速迭代期** | Qwen Code、OpenCode、Codex | PR 密集、新功能探索积极、架构重构中 |
| **稳定打磨期** | Claude Code、Gemini CLI、Pi | Issue 量大但 PR 少，核心痛点修复中 |
| **平台转型期** | CodeWhale | 品牌更名、架构重写、安全体系重建 |
| **生态培育期** | Copilot CLI、Kimi Code CLI | 社区规模小，需观察后续动作 |

---

## 6. 值得关注的趋势信号

### 趋势一：上下文管理正在成为"第二战场"
当模型能力趋于同质化后，**上下文窗口的有效利用效率**成为差异化竞争点。从 Claude Code 的 1M 上下文静默切换、Codex 的 compaction 丢失操作上下文，到 Pi 的 auto-compaction opt-in 改造和 CodeWhale 的 token budget 调节器——各工具都在从"被动溢出处理"转向"主动上下文治理"。**对开发者的启示**：选择工具时，应重点评估其上下文管理策略是否透明、可预测、可干预。

### 趋势二：安全执行从"可选"变为"必选"
今日 7 个活跃工具中，**6 个**存在安全相关 Issue 或功能请求。YOLO 模式（OpenCode 👍30）、Hook 拒绝失效（Copilot CLI）、子代理权限绕过（Gemini CLI）、符号链接逃逸（Qwen Code）——社区对 AI 自主执行的信任危机正在集中爆发。**对开发者的启示**：安全执行能力（沙箱隔离、权限审批、操作审计）将成为企业采购 AI CLI 工具的核心评估维度。

### 趋势三：MCP 生态从"协议发布"进入"合规落地"深水区
MCP 已不再是概念，但各工具的实现完整度参差不齐。Gemini CLI 在补 Elicitation 协议和 OAuth 刷新，Claude Code 在修 HTTP MCP 连接器，OpenCode 在解决 $ref Schema 崩溃，Qwen Code 在推 MCP 热重载。**对开发者的启示**：MCP 的实际可用性取决于工具的协议合规深度，选择时应验证目标 MCP 服务器是否经过端到端测试。

### 趋势四：Windows 体验差距正在成为用户流失风险
Codex 的独立安装包需求积压 3 个月（👍153）、Copilot CLI 的 ARM64 致命崩溃、CodeWhale 的 Windows 冻结——Windows 开发者的诉求长期被低估。**对开发者的启示**：跨平台团队应优先测试 Windows 路径下的工具稳定性，尤其是 WSL 混合场景。

### 趋势五：架构重构密集期预示下一波能力跃迁
Codex 的 code-mode 运行时解耦（5+ PR）、OpenCode 的 TUI 2.0 合并、Pi 的 compaction 检查点改造、CodeWhale 的 Rust 大拆分、Qwen Code 的循环检测重构——多个工具正在同步进行底层架构升级。**对开发者的启示**：接下来 1-2 个版本周期内，各工具可能在执行模型、会话管理、UI 渲染等方面出现较大变更，建议关注 changelog 并做好兼容性预案。

---

> **总结**：2026 年 6 月的 AI CLI 工具生态正处于"能力收敛、体验分化"的关键节点。模型能力不再是唯一竞争维度，**上下文管理、安全执行、多模型兼容、平台一致性**正在成为新的护城河。对于技术决策者，建议根据团队的核心诉求（长会话稳定性 vs. 多模型覆盖 vs. 安全合规）进行针对性选型，而非盲目追随模型能力排名。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止 2026-06-22 | 来源: anthropics/skills*

---

## 1. 热门 Skills 排行（按讨论热度与社区关注度排序）

尽管当前数据中评论数字段未完整渲染，以下 PR 按提交质量、议题关联度、社区互动频次综合排序：

| # | Skill / PR | 功能摘要 | 状态 | 关注度驱动因素 |
|---|---|---|---|---|
| 1 | **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档中的悬挂换行、孤行段落、编号错位等排版质量问题 | 🟢 OPEN | 刺痛所有 Claude 用户的"高频低诉"问题，覆盖面极广 |
| 2 | **skill-creator 评估系统修复** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 始终报告 0% 召回率的问题，波及 `run_loop.py` 和 `improve_description.py` | 🟢 OPEN | 解锁整个 Skill 自动优化流水线，关联 #556 这条 12 评热门 Issue |
| 3 | **skill-quality-analyzer + skill-security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83) | 元 Skill：从结构、文档、触发精度等 5 个维度评估 Skill 质量；安全分析器扫描信任边界风险 | 🟢 OPEN | 品类开创性，直接回应 #492 安全信任边界问题 |
| 4 | **ODT Support** — [PR #486](https://github.com/anthropics/skills/pull/486) | 创建/填充/解析 OpenDocument 格式（.ods/.odt），支持 ODF 到 HTML 的转换 | 🟢 OPEN | 填补 LibreOffice / 开源办公格式的空白 |
| 5 | **testing-patterns** — [PR #723](https://github.com/anthropics/skills/pull/723) | 覆盖全栈测试哲学（Testing Trophy 模型）、AAA 模式、React Component Testing | 🟢 OPEN | 开发者刚需；系统化程度高于现有碎片化测试建议 |
| 6 | **ServiceNow Platform Skill** — [PR #568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/ITOM/ITAM/FSM/SPM/Vulnerability Response/IntegrationHub 的企业级助手 | 🟢 OPEN | 企业用户呼声高，覆盖面远宽于普通脚本 Skill |
| 7 | **masonry-generate-image-and-videos** — [PR #335](https://github.com/anthropics/skills/pull/335) | 通过 Masonry CLI 调用 Imagen 3.0 / Veo 3.1 生成图像和视频 | 🟢 OPEN | 多模态生产工作流需求旺盛 |
| 8 | **compact-memory** — [Issue #1329](https://github.com/anthropics/skills/issues/1329) | 符号化压缩 Agent 长期运行状态，对抗上下文窗口膨胀 | 🟢 OPEN | Agent 记忆管理已成社区共识瓶颈 |

---

## 2. 社区需求趋势

从 Issues 讨论方向和 PR 主题分布中，提炼出 **五大新兴 Skill 方向**：

### 🔐 安全与信任治理
- **Issue #492**（9 条评论）指出社区 Skill 冒充 `anthropic/` 命名空间的信任劫持问题 → 需要官方 Skill 签名/验证机制
- **Issue #412** 提出 agent-governance Skill 需求（策略执行、威胁检测、信任评分、审计追踪）
- **Issue #1175** 关注 SharePoint 文档通过 Skill 处理时的安全与上下文窗口风险

### 🧠 Agent 记忆与状态管理
- **Issue #1329** 提出 compact-memory Skill，用符号化记号压缩 Agent 长期上下文
- **PR #154** — shodh-memory skill（跨会话持久化上下文）
- **PR #444** — AURELION 套件（四层认知 + 记忆框架）

### 🖥️ Windows 平台兼容性
- **Issue #1061**（3 条评论）+ **Issue #29**（Bedrock 集成）反映 Windows 用户被 Unix-first 假设挡在门外
- **PR #1050**、**#1099**、**#362** 均在修复 Windows 子进程调用、编码崩溃、UTF-8 panic

### 🏢 企业协作与共享
- **Issue #228**（14 条评论，最高）强烈要求在 Claude.ai 内支持组织级 Skill 共享库，摆脱手动上传 .skill 文件+Slack 转发流程

### 🔧 基础设施与质量工程
- **PR #509** — CONTRIBUTING.md 缺失导致社区健康评分仅 25%
- **PR #723**（testing-patterns）、**#83**（quality-analyzer）反映社区对 Skill 自身质量保障工具链的追求

---

## 3. 高潜力待合并 Skills

以下 PR **技术成熟度高、关联活跃 Issue、社区需求明确**，具备近期合并条件：

| PR | 理由 | 预估合并阻力 |
|---|---|---|
| [PR #1298](https://github.com/anthropics/skills/pull/1298) — run_eval.py 修复 | 直接解锁 Skill 描述优化闭环；多用户独立复现 #556 bug | 低 — 修复级别改动 |
| [PR #83](https://github.com/anthropics/skills/pull/83) — quality/security analyzer | 元 Skill，品类空缺，关联 Issue #492 | 中 — 需要确定评估维度的权威标准 |
| [PR #539](https://github.com/anthropics/skills/pull/539) — YAML 特殊字符检测 | 小改动、大保护；PR #361 类似改动已先行 | 低 — 已在类似 PR 上达成共识 |
| [PR #509](https://github.com/anthropics/skills/pull/509) — CONTRIBUTING.md | 社区健康评分痛点明确；#452 已关闭 | 低 — 纯文档 |
| [PR #723](https://github.com/anthropics/skills/pull/723) — testing-patterns | 系统性强、覆盖面广，开发者基础需求 | 中 — 需与现有 frontend-design 等 Skill 对齐风格 |
| [PR #514](https://github.com/anthropics/skills/pull/514) — document-typography | 痛点普遍、实现优雅，覆盖面广 | 低 — 独立 Skill，无交叉影响 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：从"有没有 Skill"迈向"Skill 能不能被自动评估、质量是否有保障、以及在企业团队中怎样安全共享"。**
>
> 具体体现在三重跃迁：
> - **质量基础设施**：`skill-creator` 评估系统瘫痪（#1298/#1099/#1050/#362 四连 PR 修复）被视为最高优先级瓶颈；
> - **信任与安全**：冒充官方命名空间（#492）和组织级共享机制缺失（#228, 14 评）催生对 Skill 治理框架的期待；
> - **平台覆盖**：Windows 兼容性和 AWS Bedrock 支持仍是明显的生态缺口。

---

*报告由 OWL 基于 anthropics/skills 社区公开数据生成。数据截取至 2026-06-22，PR/Issue 状态可能随时变化。*

---

# Claude Code 社区动态日报 — 2026-06-22

---

## 1. 今日速览

今日社区无新版本发布，但 Issue 活跃度较高，共 50 条更新。**API 稳定性问题集中爆发**：多个用户报告 Anthropic API 出现 502/503 错误（#69942、#69785），且模型在会话中静默从 1M 上下文 Opus 切换为非 1M 版本导致不可恢复的 API 错误（#69772）。**多账户管理**功能请求持续领跑社区热度（#18435，601 👍），成为最受期待的功能。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

以下按热度与影响力排序，精选 10 条：

### 🔴 高优先级 Bug

| # | 标题 | 关键数据 | 为什么重要 |
|---|------|---------|-----------|
| **#69942** | [Bug] Anthropic API Error: Service Unavailable | 👍10 · 评论5 · 今日新开 | 用户报告 API 完全不可用，今日新开即获关注，可能是上游服务中断的集中反馈。[链接](https://github.com/anthropics/claude-code/issues/69942) |
| **#69772** | [Bug] Model silently switches from 1M to non-1M Opus mid-session | 👍2 · 评论5 | 模型在会话中途静默降级，导致不可恢复的 API 错误，`--resume` 也无法修复，严重影响长会话工作流。[链接](https://github.com/anthropics/claude-code/issues/69772) |
| **#69785** | [BUG] 502 error opus 4.8 | 👍1 · 评论2 | 与 #69942 形成呼应，多个用户独立报告 502 错误，指向 Opus 4.8 模型服务端问题。[链接](https://github.com/anthropics/claude-code/issues/69785) |
| **#36179** | [BUG] Unsupported content type: redacted_thinking | 👍18 · 评论29 | Windows + VSCode 插件用户频繁遇到此错误，评论数多说明影响范围广且长期未解决。[链接](https://github.com/anthropics/claude-code/issues/36179) |
| **#69793** | [MODEL] xargs rm -rf without null delimiter caused data loss | 评论2 | 模型生成的命令未使用 `-0` 分隔符，导致路径含空格时发生数据丢失，属于模型行为安全问题。[链接](https://github.com/anthropics/claude-code/issues/69793) |
| **#69939** | Opening a chat re-appends duplicate mode/custom-title record to JSONL | 评论2 · 今日新开 | 每次打开聊天都会向 JSONL 追加重复记录，导致 mtime 变化和最近聊天排序异常，影响会话管理。[链接](https://github.com/anthropics/claude-code/issues/69939) |

### 🟡 持续关注

| # | 标题 | 关键数据 | 为什么重要 |
|---|------|---------|-----------|
| **#18435** | [FEATURE] Add ability to manage multiple Claude accounts | 👍601 · 评论118 | 社区最高赞功能请求，多账户切换是桌面端用户的核心诉求，118 条评论说明讨论深度极高。[链接](https://github.com/anthropics/claude-code/issues/18435) |
| **#37994** | Claude Desktop update breaks LAN SSH/network access | 👍4 · 评论11 | 沙箱网络隔离策略变更导致局域网 SSH/SCP 全部失效，影响开发工作流。[链接](https://github.com/anthropics/claude-code/issues/37994) |
| **#61912** | OAuth refresh corrupts credentials during transient 5xx → persistent 401 loop | 评论5 | OAuth 刷新逻辑在遇到 Cloudflare 5xx 时损坏凭证状态，导致跨会话的 401 死循环，认证系统健壮性问题。[链接](https://github.com/anthropics/claude-code/issues/61912) |
| **#69035** | HTTP MCP connector to Atlassian /v1/mcp/authv2 fails | 👍2 · 评论2 | Atlassian MCP 连接器认证失败，但 SSE 端点正常，说明 HTTP MCP 连接器存在特定兼容性问题。[链接](https://github.com/anthropics/claude-code/issues/69035) |

---

## 4. 重要 PR 进展

过去 24 小时内仅有 2 条 PR 更新：

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| **#69916** | fix: print error message before silent exit in edit-issue-labels.sh | OPEN | 修复 `edit-issue-labels.sh` 在无 `--add-label` 或 `--remove-label` 参数时静默 `exit 1` 的问题，让 Issue Triage 工作流能正确看到错误信息。[链接](https://github.com/anthropics/claude-code/pull/69916) |
| **#4943** | feat: add shell completions (bash, zsh, fish) | OPEN | 为 Claude CLI 添加 bash/zsh/fish 的 Tab 自动补全脚本，提升命令行交互体验。该 PR 自 2025 年 8 月创建以来长期开放。[链接](https://github.com/anthropics/claude-code/pull/4943) |

---

## 5. 功能需求趋势

从今日活跃 Issues 中提炼出社区最关注的 **5 大功能方向**：

| 排名 | 方向 | 代表 Issue | 趋势说明 |
|------|------|-----------|---------|
| 1 | **多账户/多配置文件管理** | #18435 (👍601) | 长期霸榜，桌面端用户强烈需要类似浏览器的 profile 切换能力 |
| 2 | **API 稳定性与错误处理** | #69942, #69772, #69785 | 今日集中爆发，模型静默切换、502 错误缺乏优雅降级是核心痛点 |
| 3 | **MCP 生态扩展** | #69035, #69507, #61537 | MCP 连接器认证、NetSuite 集成中断、运行时 header 更新等需求持续增长 |
| 4 | **跨平台桌面端体验** | #37994, #54461, #36179 | Windows 和 macOS 桌面端的网络隔离、工作目录、VSCode 集成问题持续存在 |
| 5 | **会话管理与 Agent 原语** | #68996, #69939, #61533 | 程序化会话管理、Agent View 已读状态、JSONL 会话文件规范化等高级需求浮现 |

---

## 6. 开发者关注点

### 🔑 今日核心痛点

1. **API 服务不稳定**：多个独立报告指向 Anthropic API 的 502/503 错误，且缺乏客户端侧的优雅降级或重试机制。
2. **模型静默切换**：1M 上下文 Opus 在会话中途被替换为非 1M 版本，用户无法感知也无法恢复，必须重启会话。
3. **认证系统脆弱**：OAuth 刷新在遇到上游 5xx 时进入不可恢复的 401 循环，影响所有依赖认证的会话。
4. **数据丢失风险**：模型生成的 shell 命令未正确处理空格路径（`xargs` 缺 `-0`），已导致实际数据丢失。
5. **桌面端沙箱限制**：网络隔离策略变更未充分通知用户，导致既有开发工作流（SSH/SCP）突然中断。

### 📌 高频需求

- 多账户切换（#18435 持续领跑）
- 更好的错误可见性（静默失败 → 明确报错）
- MCP 连接器运行时动态配置
- Linux RISC-V 原生二进制支持（#59813）
- Shell 自动补全（PR #4943 长期等待合并）

---

> 📊 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) · 统计时间：2026-06-22

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-22

---

## 1. 今日速览

今日 Codex 最突出的动态是**社区对 ChatGPT Plus 计划 `gpt-5.5` 速率限制暴增 10–20 倍的强烈抗议**（Issue #28879，96 条评论、188 赞），该问题自 6 月 16 起已严重冲击付费用户的日常使用体验。工程侧，内部正密集推进**代码模式（code-mode）的会话运行时重构**和**线程存储层 SQLite 性能优化**，多个相关 PR 于今日合并或处于审核阶段。Windows 平台的稳定性与安装体验仍是社区高频痛点。

---

## 2. 版本发布

**今日（过去 24h）无正式 Release**。最新 alpha 版本为 `rust-v0.142.0-alpha.10`，属于持续迭代中的预发布通道，尚未发布带 Release Notes 的正式版本。

---

## 3. 社区热点 Issues

| # | Issue | 热度 | 为什么重要 |
|---|-------|------|-----------|
| ⚠️ | **[[bug] Rate-limit cost per token jumped ~10–20× since June 16](https://github.com/openai/codex/issues/28879)** | 💬 96 / 👍 188 | ChatGPT Plus 用户的 `gpt-5.5` 5h 预算在 2–3 个 prompt 内耗尽，日志显示单 token 消耗比例陡增 10–20 倍。这是今日社区关注度最高的 issue，直接影响付费用户体验，尚未有官方回复。 |
| 🪟 | **[[enhancement] Support standalone Windows installer (codex-setup.exe)](https://github.com/openai/codex/issues/13993)** | 💬 74 / 👍 153 | Windows 环境下企业策略、离线场景、离线安装始终是刚需。仅依赖 Microsoft Store 已劝退大量企业用户。 |
| 🔌 | **[[enhancement] IDE-integrated diff / approval](https://github.com/openai/codex/issues/2998)** | 💬 62 / 👍 197 | 将 Codex CLI 的 terminal diff/approve 流程扩展至 IDE 侧边栏，是提升开发者工作流顺滑度的核心需求。赞成数全站前二。 |
| 🖼️ | **[[bug] Image generation no longer saves files to ~/.codex/generated_images/ (regression)](https://github.com/openai/codex/issues/28881)** | 💬 6 / 👍 11 | 图像生成功能的本地保存路径在 26.611.x 后静默回归，影响自动化工作流。已关闭但根因修复状态待跟进。 |
| 🪟 | **[[bug] Windows sandbox regression in 0.138.0 (os error 740)](https://github.com/openai/codex/issues/26158)** | 💬 12 / 👍 5 | Windows 沙箱执行自 0.136 版本回归，用户被迫回退至 0.132。已关闭，但跨版本兼容性问题值得持续关注。 |
| 🐢 | **[[bug] SQLite feedback logs can write ~640 TB/year and consume SSD endurance](https://github.com/openai/codex/issues/28224)** | 💬 10 / 👍 29 | SQLite WAL 文件（`logs_2.sqlite`）写入量极端，潜在硬件寿命风险。技术影响深远，尤其对高强度日常用户。 |
| 🧩 | **[[bug] WSL agent mode fails: AbsolutePathBuf deserialized without a base path](https://github.com/openai/codex/issues/16815)** | 💬 12 / 👍 9 | Windows WSL 环境切换 Agent 时路径反序列化失败，影响 Windows + WSL 混合开发场景。 |
| 🪟 | **[[bug] apply_patch / fs-helper fails when global proxy env is set](https://github.com/openai/codex/issues/29178)** | 💬 10 / 👍 4 | 全局代理环境下 Windows Desktop 工具调用 26.616.x 版本回归。企业代理用户受影响。 |
| 🔄 | **[[enhancement] ChatGPT integration — move sessions between Codex and ChatGPT](https://github.com/openai/codex/issues/2153)** | 💬 37 / 👍 149 | 希望在 ChatGPT 和 Codex CLI 之间无缝迁移 session，兼顾 CLI 的编程能力和 ChatGPT 的搜索+UI。长期热门需求。 |
| 🪟 | **[[bug] Desktop silently hides project conversations outside recent-50 window](https://github.com/openai/codex/issues/21128)** | 💬 29 / 👍 17 | 桌面端最近 50 条会话窗口之外的 conversation 静默消失，破坏项目连续性和工作记忆。 |

---

## 4. 重要 PR 进展

| PR | 状态 | 内容摘要 |
|----|------|---------|
| [#29371](https://github.com/openai/codex/pull/29371) | ▶️ Propagate safety buffering events to app-server clients | app-server 客户端现在可接收 Responses API 的 `safety_buffering` 元数据，用于渲染安全审查中的中间状态。 |
| [#29290–29292](https://github.com/openai/codex/pull/29290) | ▶️ code-mode: decouple cell creation from observation | 将会话中 cell 的创建与观察解耦，引入 transport-neutral session runtime，是代码执行模型架构重构的核心系列 PR。 |
| [#29289](https://github.com/openai/codex/pull/29289) | ✅ Preserves initial yield at completion | Cell 完成于观察之前时保留首次 `yield_control()` 边界，修复数据丢失问题。已合并。 |
| [#29357](https://github.com/openai/codex/pull/29357) | ▶️ Speed up thread resume without deferred repair | 通过重用已加载历史、避免重复克隆来加速本地 `thread/resume`，直接解决大线程恢复缓慢的问题。 |
| [#29355](https://github.com/openai/codex/pull/29355) | ▶️ Speed up thread list with lightweight SQLite rows | `thread/list` 请求路由至轻量 SQLite 投影，避免全量 materialization，显著降低 TC。 |
| [#29352](https://github.com/openai/codex/pull/29352) | ▶️ Separate thread names and repair ownership in SQLite | 显式线程名与历史衍生标题分离，增加规范父元数据，为后续列表/检索优化奠定基础。 |
| [#29367](https://github.com/openai/codex/pull/29367) | ▶️ Optimize thread resume and fork | 为 `thread/resume` 和 `thread/turns/list` 添加检查点边界 rollout 重建，避免完整长线程 materialization。 |
| [#29358](https://github.com/openai/codex/pull/29358) | ▶️ Allow codex sandbox to consume MCP sandbox state | `codex sandbox` 可直接消费 MCP server（如 `node_repl`）通过的沙箱状态 JSON，统一沙箱语义。 |
| [#29301](https://github.com/openai/codex/pull/29301) | ✅ Updated plan mode prompt | Plan mode 后在相关 follow-up prompt 中主动向用户展示实施计划，用户无需手动切出 plan mode 即可进入实现。已合并。 |
| [#29109](https://github.com/openai/codex/pull/29109) | ▶️ Avoid redundant rollout reads for history | 当 SQLite 已提供 rollout 路径时跳过 summary 重建，直接解析完整历史，减少 I/O 冗余。 |

---

## 5. 功能需求趋势

分析今日更新的 50 条 Issues 与 39 条 PRs，社区需求主要集中在以下方向：

1. **速率限制透明化与费用控制** — 速率限制突增已成为付费用户最直接的痛点（Issue #28879），社区迫切希望获得更清晰的 budget 消耗明细和可预测的限流规则。

2. **Windows 平台成熟度** — 包括独立安装包（#13993）、WSL 稳定性（#16815）、PowerShell 窗口闪烁（#26613）、代理环境兼容性（#29178）、沙箱执行（#26158）等。Windows 作为最大的桌面开发环境，占据了今日 Issues 的显著比例。

3. **IDE / 编辑器深度集成** — Terminal-only 的 diff/approve 流程已被社区视为体验天花板（#2998），IDE 侧边栏集成、扩展冻结问题（#28726）、code-server 兼容性均指向同一趋势。

4. **存储层性能与可靠性** — SQLite WAL 写入量（#28224）、对话列表优化（#21128、#24534）、`thread/list` 和 `thread/resume` 的 PR 密集推送，说明内部正在系统性优化存储 I/O。

5. **跨平台会话迁移与 ChatGPT 集成** — 将 session 在 Codex CLI 和 ChatGPT 之间自由搬运（#2153），是长期高赞需求。

6. **上下文窗口管理** — 超长线程的 context compaction 导致操作连续性丢失（#29356）、project-level skills 消失（#9752）等，显示大上下文场景仍有明显体验缺口。

---

## 6. 开发者关注点

- **付费用户的可信度危机**：`gpt-5.5` 限流规则变更缺乏透明公告，等效于产品条款变更，已引发付费用户强烈不满。OpenAI 需要尽快回应。
- **Windows 体验是短板**：今日数据中 Windows 相关 bug 占明显比例，独立安装包需求积压 3 个月仍未落地，建议 Windows 用户优先关注 alpha 版本的沙箱变更。
- **长线程用户面临结构性瓶颈**：context window 满溢（#9046、#28920）、compaction 丢失操作上下文（#29356）、SQLite 日志暴增（#28224）共同指向长周期开发任务的稳定性需改善。
- **代码执行模型正在重架构**：今日多个 code-mode PR 密集推送，cell 生命周期、会话运行时、transport 层正在解耦重构，预计接下来几个版本会有较大的执行模型变更，开发者需关注兼容性。

---

> 日报基于 `github.com/openai/codex` 2026-06-22 24h 内数据生成，供技术决策参考。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-22

## 1. 今日速览

今日社区焦点集中在 **Auto Memory 系统安全与稳定性修复**系列（3 个 P2 Bug 同日被标记更新）、**Shell 命令执行挂起**问题（P1，👍3）以及 **子代理权限控制回归**。PR 侧主要由 dependabot 驱动的大规模依赖升级潮（8 个 PR，含 eslint → 10.5.0、@types/node → 25.9.3 等重大版本跳跃）和企业贡献者对 **SSRF 安全修复**、**MCP 图片 MIME 嗅探**和 **MCP OAuth 刷新**的持续推进。无新版本发布。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 关键标签 | 热门原因 |
|---|------|----------|----------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs forever | P1 · 👍8 | **今日最高赞 Issue**：用户报告每当 defer 到 generalist agent 时永远挂起，简单操作如创建文件夹也受影响。社区讨论 7 条，是目前最具共鸣的可用性痛点。 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | P1 · 👍2 | 子代理达到最大轮数后被错误报告为"成功"，**掩盖了实际中断**，影响代码库分析可靠性，属严重逻辑缺陷。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command hangs with "Waiting input" after completion | P1 · 👍3 | Shell 命令已执行完毕但 CLI 仍显示"Awaiting user input"卡住，**破坏非交互式流程**（CI/脚本场景尤甚）。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & reduce Auto Memory logging | Security · P2 | Auto Memory 在脱敏前已将含密钥内容送入模型上下文，属**安全漏洞级隐患**，Google 内部已标记维护者主导。 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | (Sub)agents running without permission since v0.33.0 | P2 | 权限配置被忽略、代理在非预期模式下自动激活，**影响安全策略信任**，需排查版本回归。 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | P2 | 工具数量超限直接 400，缺乏优雅降级，**大型 MCP 服务器集成的关键障碍**。 |
| [#22249](https://github.com/google-gemini/gemini-cli/issues/22249) | MCP "Method not found" with Elicitation support | Enhancement · 👍2 | MCP Elicitation 协议不受支持导致交互式数据采集服务器无法使用，**生态兼容性问题**。 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | P1 · Eval Infra | 跟踪 76 个行为评估测试的组件级扩展，**Google 内部质量工程 EPIC**，影响 AI 可靠性基础设施。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | P2 · 👍1 | 探索 AST 感知工具调用以减少 token 浪费和轮次，**长期性能优化方向**讨论活跃。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | P1 · agent/browser | Wayland 桌面用户浏览器代理完全失效，**Linux 桌面场景关键 bug**。 |

---

## 4. 重要 PR 进展

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#27744](https://github.com/google-gemini/gemini-cli/pull/27744) | DNS resolution before SSRF guard | **安全修复** | 在 SSRF 守卫前执行 DNS 解析，阻断 `127.0.0.1.nip.io` 等通配符 DNS 绕过。**SSRF 高危漏洞根治方案**，已开放待合并。 |
| [#27878](https://github.com/google-gemini/gemini-cli/pull/27878) | Sniff MCP image MIME types | **Bug 修复** | 解决 Figma MCP 返回 WebP 图片被错误标为 `image/png` 导致 Gemini API 400 的问题。实现本地二进制签名嗅探，**MCP 集成质量关键修复**。 |
| [#27889](https://github.com/google-gemini/gemini-cli/pull/27889) | Refresh MCP OAuth with stored client ID | **Bug 修复** | 修复 `/mcp auth` 后 OAuth token 刷新路径未使用已持久化的 client ID 的缺陷，确保自动发现服务器的认证流程闭环。 |
| [#28059](https://github.com/google-gemini/gemini-cli/pull/28059) | Don't let unreadable .env (EACCES) break extension loading | **Bug 修复** | 沙箱环境下 `.env` 文件无读权限时不应中断整个扩展加载。根源修复 + Cloud Shell 路径加固。 |
| [#28078](https://github.com/google-gemini/gemini-cli/pull/27878) | Bump npm-dependencies group (76 updates) | **依赖升级** | 一次性升级 76 个 npm 依赖，包含 `@agentclientprotocol/sdk` 0.16.1→0.25.1 等重大版本。**单次规模极大**，需关注兼容性测试。 |
| [#28079](https://github.com/google-gemini/gemini-cli/pull/28079) | Bump eslint 9.24.0 → 10.5.0 | **依赖升级** | ESLint 大版本跨越，可能引入新规则和 breaking changes，影响全仓库 lint 流程。 |
| [#28082](https://github.com/google-gemini/gemini-cli/pull/28082) | Bump chrome-devtools-mcp 0.19.0 → 1.2.0 | **依赖升级** | Chrome DevTools MCP 代理大幅版本更新，涉及浏览器自动化工具的底层变更。 |
| [#28063](https://github.com/google-gemini/gemini-cli/pull/28063) | Fix workspace publish & scheduler event loop starvation | **Bug 修复** | 修复 `npm publish` 生命脚本重复执行导致的发布失败和调度器事件循环饥饿，**稳定性关键修复**，已合并。 |
| [#28071](https://github.com/google-gemini/gemini-cli/pull/28071) | Spawn check on ripgrep before registration | **Bug 修复** | 注册前执行 ripgrep 可用性检查，避免 rg 缺失导致运行时崩溃，**已合并**。 |
| [#27887](https://github.com/google-gemini/gemini-cli/pull/27887) | Honor custom theme border.default with OSC 11 background | **Bug 修复** | 修复文档已声明但实际未生效的自定义主题边框颜色逻辑，**终端体验改进**。 |

---

## 5. 功能需求趋势

从全部 50 条 Issue 的主题分布来看，社区最集中的功能方向为：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **子代理可靠性与控制** | #21409 (挂起), #22323 (MAX_TURNS 误报), #22093 (权限绕过), #22672 (危险操作) | 🔴 最热 |
| **Auto Memory 系统** | #26525 (日志泄露), #26522 (无限重试), #26523 (无效补丁隔离), #26516 (综合 Bug) | 🔴 安全+质量焦点 |
| **MCP 生态兼容** | #22249 (Elicitation), #24246 (工具数限制), #27878 (MIME 嗅探), #27889 (OAuth) | 🟡 持续增长 |
| **AST 感知代码分析** | #22745, #22746, #24353 (评估基础设施) | 🟡 长期技术投入 |
| **安全授权** | #26525 (密钥脱敏), #22672 (#22093 (权限模型回归)) | 🟡 回归风险 |
| **浏览器代理** | #21983 (Wayland), #22267 (配置被忽略), #22232 (会话恢复) | 🟢 小众但停滞 |

---

## 6. 开发者关注点

今日社区痛点总结：

1. **Shell 体验最基本路径断链**：多个 P1 级别 Issue（命令挂起、空 parts 误分类、ripgrep 缺失）表明 CLI 核心执行路径的**鲁棒性仍是首要问题**。

2. **子代理"失控"焦虑**：从挂起、错误报告、权限绕过到危险 git 操作，开发者在赋予 AI 自主操作能力时的**安全感严重不足**，钩子和可观测性是需求核心。

3. **Auto Memory 安全信任危机**（SandyTao520 集中提交 4 个相关 Issue）：日志暴露密钥、无限重试、无效补丁无透明度——社区对记忆系统的**安全边界和可见性**提出明确要求。

4. **MCP 生态"看起来能用、实则缺胳膊少腿"**：Elicitation 不支持、工具数限制直接 400、图片类型嗅探缺失、OAuth 刷新断裂——协议层面的**完整合规性**是扩大 MCP 采用的核心阻碍。

5. **大规模依赖升级的消化压力**：单次 76 个依赖 + eslint/rc/types 大版本跨越，社区贡献者需准备好应对可能的**构建失败和 lint 规则变化**。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-06-22 | 数据源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时内，Copilot CLI 社区共产生 **9 条 Issue 更新**和 **1 条 PR 更新**，无新版本发布。核心焦点集中在 **Windows 平台稳定性**、**计费/配额计算准确性**、**Hooks 插件生态完善**以及 **上下文窗口可见性**等方向。其中 Windows ARM64 下的致命崩溃（#3687）和配额多扣问题（#3881）值得优先关注。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

### 🔴 #3687 — Windows ARM64 下 copilot.exe 高负载时致命崩溃（BEX64 / 0xc0000409）
- **状态：** OPEN | 👍 1 | 💬 6 条评论
- **标签：** `area:sessions` `area:platform-windows`
- **要点：** 在 Windows ARM64 上，`copilot.exe` 在多个会话并发启动（如 Windows Terminal 标签恢复）及内存压力场景下，触发 Windows fatal-app-exit 而非优雅退出。问题在 1.0.57 和 1.0.60 版本均可复现，偶发于会话中途。
- **为何重要：** 直接影响 Windows 平台核心体验，属于高优先级稳定性问题。
- **链接：** https://github.com/github/copilot-cli/issues/3687

### 🔴 #3881 — 配额计算错误：6x 倍率模型一次请求扣减 5% 而非 2%
- **状态：** OPEN | 👍 0 | 💬 0 条评论
- **标签：** `triage`
- **要点：** 用户选择 Claude Sonnet 4.5（6x 倍率），一次请求应扣减 2%（1/300×6），但实际从 20% 降至 15%，扣除了 5%。用户要求退还 3% 的配额差额。
- **为何重要：** 计费准确性直接关系用户信任，属于高优先级 bug。
- **链接：** https://github.com/github/copilot-cli/issues/3881

### 🟡 #3861 — 文档描述的沙箱隔离功能与实际行为不符
- **状态：** OPEN | 👍 0 | 💬 1 条评论
- **标签：** `area:permissions` `area:networking`
- **要点：** 文档和 `/sandbox` 设置界面声称支持 per-host 网络过滤（`allowedHosts`/`blockedHosts`）及跨平台一致隔离体验，但这些功能实际并不生效。
- **为何重要：** 文档与实现不一致会误导用户做出错误的安全决策，存在潜在安全风险。
- **链接：** https://github.com/github/copilot-cli/issues/3861

### 🟡 #3874 — VS Code 中 `preToolUse` Hook 拒绝命令不生效
- **状态：** OPEN | 👍 0 | 💬 1 条评论
- **标签：** `area:permissions` `area:plugins`
- **要点：** 用户在 VS Code 中通过 `.github/hooks/hooks.json` 配置了 `PreToolUse` hook 来拒绝特定命令，但实际执行时 hook 的拒绝行为未生效。
- **为何重要：** Hook 是 Copilot CLI 安全策略的核心机制，拒绝失效意味着安全策略形同虚设。
- **链接：** https://github.com/github/copilot-cli/issues/3874

### 🟡 #3879 — 状态行无法区分"正在生成"与"空闲但后台任务运行中"
- **状态：** OPEN | 👍 0 | 💬 0 条评论
- **标签：** `area:agents` `area:input-keyboard` `area:terminal-rendering`
- **要点：** 当后台子代理或后台 shell 命令运行时，状态行显示"Working / Waiting for background agents"，但父代理实际已完全空闲。用户无法判断何时可以安全输入。
- **为何重要：** 交互体验的核心反馈机制不准确，影响所有使用后台任务的用户。
- **链接：** https://github.com/github/copilot-cli/issues/3879

### 🟡 #3778 — 功能请求：通过 OpenTelemetry 导出费用/高级请求指标
- **状态：** OPEN | 👍 0 | 💬 1 条评论
- **标签：** `area:configuration`
- **要点：** 当前 OpenTelemetry 导出仅包含 token 用量和操作耗时，缺少费用和计费指标。用户希望对标 Claude Code 的 `claude_code.cost.usage`，增加成本可观测性。
- **为何重要：** 企业级用户进行成本分析和预算管理的关键需求。
- **链接：** https://github.com/github/copilot-cli/issues/3778

### 🔵 #3871 — 无法列出已安装的 Hooks（已关闭）
- **状态：** CLOSED | 👍 0 | 💬 2 条评论
- **标签：** `area:plugins`
- **要点：** MCP 服务器有 `copilot mcp list` 命令，但 hooks 没有对应的枚举命令。用户期望 `copilot hooks list` 或类似命令来查看已安装的 hooks。
- **为何重要：** 插件生态的可见性和可管理性，已关闭说明可能已有解决方案或转为功能请求。
- **链接：** https://github.com/github/copilot-cli/issues/3871

### 🔵 #3867 — 聊天会话中无上下文窗口可见性或压缩通知（已关闭）
- **状态：** CLOSED | 👍 0 | 💬 1 条评论
- **标签：** `area:context-memory`
- **要点：** GitHub App 中没有显示上下文窗口使用情况的 UI 指示器，上下文压缩静默发生，用户无法感知。
- **为何重要：** 上下文管理是长会话体验的核心，缺乏可见性让用户难以理解模型行为变化的原因。
- **链接：** https://github.com/github/copilot-cli/issues/3867

### 🔵 #3882 — 空白 Issue 模板（已关闭，标记为 invalid）
- **状态：** CLOSED | 👍 0 | 💬 1 条评论
- **要点：** 用户提交了完全空白的 Issue，被维护者标记为无效并关闭。
- **链接：** https://github.com/github/copilot-cli/issues/3882

---

## 4. 重要 PR 进展

### #3880 — beyond the streets of amaerica
- **状态：** OPEN | 作者：4tha5 | 👍 0
- **要点：** 从 PR 摘要来看，包含前端组件代码（`Card`、`Badge`、`ArtistCard`），涉及 UI 组件开发。PR 标题非描述性标题，评论数为 undefined，可能尚未经过正式 review。
- **链接：** https://github.com/github/copilot-cli/pull/3880

> ⚠️ 过去 24 小时内仅有 1 条 PR 更新，社区当前活跃度主要集中在 Issue 讨论侧。

---

## 5. 功能需求趋势

从本期所有 Issues 中提炼出以下 **五大功能方向**：

| 优先级 | 方向 | 代表 Issue | 说明 |
|--------|------|-----------|------|
| 🔴 P0 | **计费准确性** | #3881 | 配额倍率计算错误，直接影响用户经济利益 |
| 🔴 P0 | **平台稳定性** | #3687 | Windows ARM64 致命崩溃，影响核心可用性 |
| 🟠 P1 | **安全/Hook 机制** | #3874, #3861 | Hook 拒绝失效 + 沙箱文档与实现不符，安全策略可信度受质疑 |
| 🟠 P1 | **交互体验** | #3879 | 状态行反馈不准确，用户无法判断输入时机 |
| 🟡 P2 | **可观测性** | #3778, #3867 | 缺少费用指标导出和上下文窗口可见性 |
| 🟡 P2 | **插件生态** | #3871 | Hooks 管理缺少枚举命令 |

---

## 6. 开发者关注点总结

### 核心痛点

1. **Windows 平台体验差距明显** — ARM64 架构下的致命崩溃（#3687）表明 Windows 平台的测试覆盖和稳定性保障仍需加强，尤其是并发场景和内存压力测试。

2. **计费系统信任危机** — 配额倍率计算偏差（#3881）虽然看似单个 case，但计费准确性是开发者工具的信任基石，任何偏差都会引发社区强烈反应。

3. **安全机制"看起来有效"但实际无效** — Hook 拒绝不生效（#3874）和沙箱功能文档夸大（#3861）同时出现，说明安全相关功能的实现与文档/UI 之间存在系统性脱节，可能导致用户做出错误的安全决策。

4. **后台任务交互不透明** — 状态行无法区分生成中 vs 空闲（#3879），随着子代理和后台命令功能的使用增加，这一痛点将更加突出。

5. **可观测性需求升级** — 从 token 用量到费用指标（#3778），再到上下文窗口可见性（#3867），开发者对可观测性的需求正在从基础用量向成本管理和行为可理解性延伸。

### 高频需求关键词

- **"可见性"** — 上下文窗口、hooks 列表、费用指标，开发者需要更多 UI 反馈
- **"文档对齐"** — 文档描述的功能必须与实际行为一致，尤其是安全相关功能
- **"平台一致性"** — Windows（尤其 ARM64）的体验不应落后于其他平台

---

*日报由 OWL 自动生成 | 数据截至 2026-06-22 | 来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-22

---

## 1. 今日速览

今日最突出的动态是 **TUI 2.0 PR 已合并**（#31796），标志着 OpenCode 终端界面进入全新版本，开发者社区正围绕桌面端渲染 Bug（如 VirtualTimelineRow crash、迭代器空值崩溃）快速跟进修复。**用户体验痛点**集中爆发，RTL（从右到左）语言渲染问题、多个模型提供商异常（Claude Opus 4.x 系列、DeepSeek）、以及 YOLO 权限模式等高赞功能请求的推动下，项目整体处于快速迭代期。

---

## 2. 版本发布

过去 24 小时内 **无新 Release**。TUI 2.0（PR #31796）已合并至主干，预计将随下一版本发布。

---

## 3. 社区热点 Issues 🔥（精选 10 条）

### 🔴 Bug / 稳定性

| # | 标题 | 关键信息 | 为什么重要 | 社区反应 (👍/评论) | 链接 |
|---|------|---------|-----------|-------------------|------|
| 1 | **Qwen3 & Kimi K2 中途停止对话** | Qwen3 工具调用停止并无限循环，KIMI K2 中途断连。通过 OpenRouter 使用。 | 两大主流开源模型连接中断痛点。影响大量使用国产模型的用户。 | 👍7 / 💬10 | [Issue #1522](https://github.com/anomalyco/opencode/issues/1522) |
| 2 | **Zen API CORS 预检 404** | 浏览器客户端无法调用 Zen API，所有 OPTIONS 对 `/zen/v1/*` 返回 404。API POST 端点正常。 | **阻断性地**影响所有 Web/浏览器客户端连接 OpenCode Zen，属于高优级 Bug。 | 👍2 / 💬7 | [Issue #31041](https://github.com/anomalyco/opencode/issues/31041) |
| 3 | **DeepSeek + MCP $ref/$defs 崩溃** | DeepSeek provider 在遇到 Asana、Notion 等 MCP 工具的 JSON Schema `$ref` 时抛出 `AttributeError`。 | 跨平台 MCP 兼容性缺口，影响所有使用 MCP Schema 的高级工具。 | 👍0 / 💬3 | [Issue #32829](https://github.com/anomalyco/opencode/issues/32829) |
| 4 | **TUI 1.17+ Effect.tryPromise 崩溃** | 启动 TUI 即报错 `An error occurred in Effect.tryPromise`，全平台 crash。 | 用户无法启动，**阻塞主流程**。 | 👍2 / 💬2 | [Issue #32706](https://github.com/anomalyco/opencode/issues/32706) |
| 5 | **macOS 内核 panic（内存泄漏）** | opencode.exe 在 macOS 上触发 EndpointSecurity 扩展，导致 `data.kalloc.1024` 区耗尽，系统崩溃。系统级稳定性红线。 | 系统级稳定性红线，影响 macOS 用户日常使用信心。 | 👍0 / 💬2 | [Issue #32002](https://github.com/anomalyco/opencode/issues/32002) |

### 🟡 功能请求

| # | 标题 | 关键信息 | 为什么重要 | 社区反应 (👍/评论) | 链接 |
|---|------|---------|-----------|-------------------|------|
| 6 | **YOLO 模式：自动批准所有权限提示** | 请求添加一键跳过所有权限确认的模式（仍可保留 deny 规则保障安全），面向高级用户。 | 最高赞**功能请求**（👍30），说明"信任 AI"的高阶用户对效率有硬需求。 | 👍30 / 💬9 | [Issue #11831](https://github.com/anomalyco/opencode/issues/11831) |
| 7 | **保存会话数据到项目文件夹** | 当前所有会话数据存于 `~/.opencode`，希望支持存放到项目目录，便于团队共享和版本管理。 | 高赞（👍16），反映团队协作和工作流规范化需求。 | 👍16 / 💬10 | [Issue #14292](https://github.com/anomalyco/opencode/issues/14292) |
| 8 | **RTL（从右到左）语言支持** | 阿拉伯语、希伯来语等内容在桌面端 LTR 错误渲染，标点、列表方向全部错位。 | **国际化必需品**，中东/北非/以色列开发者体验缺陷，已有架构级提案。 | 👍7 / 💬9 | [Issue #10908](https://github.com/anomalyco/opencode/issues/10908) |
| 9 | **检查点功能（Checkpoint）** | 不同于"Undo"，用户需要真正的状态快照回滚点，可跨会话恢复。 | **版本控制能力升级需求**，影响用户试错安全感。 | 👍0 / 💬0 | [Issue #33286](https://github.com/anomalyco/opencode/issues/33286) |
| 10 | **GitHub Copilot Claude Opus 4.8 伪工具调用** | Claude Opus 通过 Copilot 端返回非结构化文本而非完整工具调用，触发 `400: assistant prefill not supported`。 | **模型适配层 Bug**，影响 Copilot 用户在高端模型使用。 | 👍0 / 💬2×2 | [Issue #31807](https://github.com/anomalyco/opencode/issues/31807) |

---

## 4. 重要 PR 进展（精选 10 个）

| # | 标题 | 类型 | 关键变更 | 状态 | 链接 |
|---|------|------|---------|------|------|
| 1 | **TUI 2.0 合并！** | 🔧 架构 | 全新终端用户界面框架已合并。今日热 Bug 跟进渲染层修复。 | ✅ Closed | [PR #31796](https://github.com/anomalyco/opencode/pull/31796) |
| 2 | **feat(tui): YOLO 权限模式** | ✨ 功能 | 添加 `--yolo` 作为 `opencode run` 的自动批准权限提示的规范标志，将 `--dangerously-skip-permissions` 作为别名保留。响应社区最高赞功能请求。 | 🟢 Open | [PR #33279](https://github.com/anomalyco/opencode/pull/33279) |
| 3 | **feat(cli): 独立 v2 会话流程** | ✨ 功能 | 新增 `--standalone` 模式，运行带有认证私有服务器子进程的 TUI，通过 v2 API 创建会话，支持持久化会话共享和回滚状态。 | 🟢 Open | [PR #33281](https://github.com/anomalyco/opencode/pull/33281) |
| 4 | **fix: 修复 VirtualTimelineRow undefined crash** | 🐛 修复 | 防止 `VirtualTimelineRow` 在 `initialItem/row` 为 undefined 时崩溃（`TypeError: Cannot read properties of undefined (reading 'size')`）。 | 🟢 Open | [PR #33287](https://github.com/anomalyco/opencode/pull/33287) |
| 5 | **feat(core): 会话创建后系统提示词不可变** | ✨ 功能 | 按会话 ID 在内存中缓存系统提示词，防止会话中途被意外修改，提升行为一致性。 | 🟢 Open | [PR #33246](https://github.com/anomalyco/opencode/pull/33246) |
| 6 | **feat(mcp): 资源订阅 API + 自动提示** | ✨ 功能 | 实现 MCP 资源订阅能力，支持自动提示推送，补全 MCP 客户端能力集。 | 🟢 Open | [PR #29355](https://github.com/anomalyco/opencode/pull/29355) |
| 7 | **feat(plugin): 通过 PluginInput.skills 暴露技能 API** | ✨ 功能 | 插件可访问 skills 系统，扩展插件生态能力边界。 | 🟢 Open | [PR #29356](https://github.com/anomalyco/opencode/pull/29356) |
| 8 | **fix(session): 限制 OpenAI Responses 工具数量避免 500 错误** | 🐛 修复 | 当启用大量 MCP 服务器时，限制单次请求的工具数量，防止 ChatGPT/Codex OAuth 后端返回 500。 | 🟢 Open | [PR #32998](https://github.com/anomalyco/opencode/pull/32998) |
| 9 | **feat(provider): 支持用户配置中按模型覆盖限制** | ✨ 功能 | 允许在 `opencode.json` 中为特定模型配置 `limit.context/input/output`，之前这些值会被静默丢弃。 | 🟢 Open | [PR #29354](https://github.com/anomalyco/opencode/pull/29354) |
| 10 | **feat: 添加 /reload 斜杠命令** | ✨ 功能 | 热重载配置、插件、MCP 服务器等，无需重启 TUI。有活跃会话时排队等待空闲后执行。 | 🟢 Open | [PR #9871](https://github.com/anomalyco/opencode/pull/9871) |

---

## 5. 功能需求趋势 📊

从今日 50 条 Issues 中提炼出社区最关注的 **5 大方向**：

| 排名 | 方向 | 代表 Issues | 热度信号 |
|------|------|------------|---------|
| 🥇 | **权限与审批流程优化** | YOLO 模式（#11831 👍30）、ACP 权限竞态（#14301） | 最高赞功能请求，开发者对"信任 AI"有强烈效率诉求 |
| 🥈 | **多模型/多提供商兼容性** | Qwen3/Kimi K2 断连（#1522）、Copilot Opus 4.8 伪工具调用（#31247/#31807）、DeepSeek MCP 崩溃（#32829）、Zen API CORS（#31041） | 跨 5+ 个 Issue，模型适配层是最大痛点 |
| 🥉 | **会话管理与持久化** | 保存到项目文件夹（#14292 👍16）、会话重命名（#32375）、检查点（#33286）、v2 会话流程（PR #33281） | 团队协作和工作流规范化需求持续上升 |
| 4 | **国际化与可访问性** | RTL 支持（#10908、#32726）、波斯语缺失（#32810） | 中东/北非用户群体增长，国际化成为必选项 |
| 5 | **TUI/桌面端稳定性** | 渲染 crash（#33285、#33283）、Effect.tryPromise 崩溃（#32706）、子代理任务不可点击（#32773） | TUI 2.0 刚合并，渲染层 Bug 集中暴露，修复窗口期 |

---

## 6. 开发者关注点总结 🎯

### 🔴 高频痛点
1. **模型提供商适配层脆弱** — Qwen3、Kimi K2、Claude Opus 4.x（通过 Copilot/Zen）、DeepSeek 均出现工具调用异常，说明 provider 抽象层需要更健壮的容错和降级机制。
2. **权限提示打断心流** — YOLO 模式（👍30）是今日最高赞 Issue，反映高级用户对"全自动"模式的强烈需求，需要在安全性和效率间找到平衡。
3. **TUI 2.0 渲染稳定性** — 新 UI 框架合并后，VirtualTimelineRow、迭代器空值等 crash 快速跟进，需要密集测试覆盖。

### 🟡 体验改进诉求
4. **会话数据本地化** — 开发者希望会话数据跟随项目而非全局存储，便于团队协作和版本管理。
5. **RTL 语言支持** — 已有翻译文件但渲染层未适配，影响阿拉伯语、希伯来语用户的日常使用。
6. **支付/订阅问题** — 多个用户反馈信用卡被拒（#33264、#33252），可能影响付费转化。

### 🟢 积极信号
- **TUI 2.0 成功合并**，架构升级进入新阶段。
- **YOLO 模式 PR 已开放**（#33279），社区高赞需求快速响应。
- **MCP 生态持续扩展**，资源订阅、技能 API 等高级能力正在落地。

---

> 📌 **编辑点评**：今日社区处于"TUI 2.0 发布后的密集修复期"与"多模型适配攻坚期"的交汇点。建议关注者重点关注 YOLO 模式 PR（#33279）和 Zen API CORS 修复进展，这两项将显著影响日常使用体验。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-22

---

## 1. 今日速览

过去 24 小时 Pi 社区活跃度较高，共处理约 39 条 Issue 更新和 6 个 PR。**无新版本发布**。社区焦点集中在三大方向：上下文压缩（compaction）机制的可靠性修复、TUI 交互体验优化（IME 支持、复制粘贴、滚动行为），以及 vLLM/OpenRouter 等本地/第三方提供商的兼容性问题。多个核心 bug 在同一天内被关闭并合并修复，显示维护团队响应速度较快。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

以下按热度（评论数 + 👍 数）和影响力挑选 10 个最值得关注的 Issue：

### 🔴 #4945 — openai-codex / gpt-5.5 连接可靠性问题
- **链接**: https://github.com/badlogic/pi-mono/issues/4945
- **状态**: OPEN · inprogress · 64 评论 · 👍30
- **为什么重要**: 这是当前社区讨论最活跃的问题。`openai-codex` 和 `gpt-5.5` 模型在交互 TUI 中会卡在 `Working...` 状态，无流式输出、无工具调用、无可见错误，用户只能按 Escape 中止。这直接影响了使用 OpenAI 最新模型的核心工作流，且已持续数天未彻底解决。

### 🟡 #5825 — Streaming Markdown 强制滚动到底部
- **链接**: https://github.com/badlogic/pi-mono/issues/5825
- **状态**: OPEN · bug · 28 评论
- **为什么重要**: 当 agent 输出 markdown 时，即使用户正在向上滚动阅读，Pi 也会强制将视图拉到底部。该问题仅在开启 `clear on shrink` 设置时触发，严重影响长回复的可读性。28 条评论表明大量用户受此困扰。

### 🟡 #3357 — 官方本地 LLM 提供商扩展
- **链接**: https://github.com/badlogic/pi-mono/issues/3357
- **状态**: OPEN · 26 评论 · 👍36
- **为什么重要**: 👍36 是所有展示 Issue 中最高的，反映了社区对 llama.cpp / Ollama / LM Studio / vLLM 等本地模型支持的强烈需求。核心诉求是从 `{baseUrl}/models` 动态获取模型列表，而非手动配置。这是 Pi 走向本地优先工作流的关键功能缺口。

### 🟢 #5916 — 提供商扩展的模型别名与搜索改进
- **链接**: https://github.com/badlogic/pi-mono/issues/5916
- **状态**: OPEN · bug · inprogress · 10 评论
- **为什么重要**: 用户无法通过 UI 配置 OpenRouter 提供商，只能通过 `models.json` 手动覆盖，且模型搜索功能不够完善。这降低了多提供商场景下的可用性。

### 🟢 #5700 — 多 Agent 会话与 TUI 切换
- **链接**: https://github.com/badlogic/pi-mono/issues/5700
- **状态**: OPEN · 7 评论
- **为什么重要**: 当前 `switchSession` 会销毁当前会话，无法让一个后台 agent 运行的同时处理另一个任务。这是高级用户和团队协作场景的核心需求。

### 🟢 #5217 — 扩展事件缺少压缩原因
- **链接**: https://github.com/badlogic/pi-mono/issues/5217
- **状态**: OPEN · 3 评论
- **为什么重要**: `session_before_compact` 和 `session_compact` 事件未暴露压缩触发原因（手动 / 阈值 / 溢出），导致扩展开发者无法做出差异化响应。

### 🔵 #5932 — 向 Agent 暴露 ctx.navigateTree()
- **链接**: https://github.com/badlogic/pi-mono/issues/5932
- **状态**: OPEN · to-discuss · 3 评论
- **为什么重要**: `navigateTree()` 仅在 `ExtensionCommandContext` 上可用，普通 `ExtensionContext` 无法访问，限制了自定义扩展（如 `/goal` 实现）的能力。

### 🔵 #5948 — 将项目 AGENTS.md 作为用户消息发送
- **链接**: https://github.com/badlogic/pi-mono/issues/5948
- **状态**: CLOSED · no-action · 2 评论
- **为什么重要**: 用户希望项目级 `AGENTS.md` 作为 user message 而非 system prompt 发送，以便模型更好地理解其角色。被标记为 no-action，但反映了提示工程层面的需求。

### 🔵 #5933 — 按模型配置默认思考级别
- **链接**: https://github.com/badlogic/pi-mono/issues/5933
- **状态**: CLOSED · no-action · 3 评论
- **为什么重要**: 当前思考级别是全局设置，不同模型有不同的最优配置。被关闭但代表了多模型用户的实际需求。

### 🔵 #5927 — WSL2 路径支持问题
- **链接**: https://github.com/badlogic/pi-mono/issues/5927
- **状态**: CLOSED · bug · 3 评论
- **为什么重要**: WSL2 下使用 UNC 路径（`\\wsl.localhost\...`）时，Pi 将工作目录错误地改为 `C:\WINDOWS\`，这是一个危险的路径变更。

---

## 4. 重要 PR 进展

### ✅ #5937 — 强化 opt-in 自动压缩（between-turn checkpoint）
- **链接**: https://github.com/badlogic/pi-mono/pull/5937
- **状态**: CLOSED（已合并）
- **内容**: 将自动上下文压缩改为 opt-in，并在 assistant turn 完成与下一个 provider request 之间增加检查点，确保长工具循环场景下也能安全压缩。手动 `/compact` 不受影响。

### ✅ #5929 — 添加 vLLM 上下文溢出错误模式
- **链接**: https://github.com/badlogic/pi-mono/pull/5929
- **状态**: CLOSED（已合并）
- **内容**: vLLM 返回的上下文长度超出错误格式未被 `isContextOverflow()` 识别，导致 agent 在 400 错误上无限循环。此 PR 将 vLLM 的错误模式加入 `OVERFLOW_PATTERNS`。

### ✅ #5950 — 使用 OpenRouter 实际费用显示
- **链接**: https://github.com/badlogic/pi-mono/pull/5950
- **状态**: CLOSED（已合并）
- **内容**: OpenRouter 在 API 响应中返回 `usage.cost`（实际 USD 费用），此前 Pi 忽略该字段而使用静态估算。修复后 footer 显示真实费用。

### ✅ #5942 / #5941 — 压缩事件添加 reason 和 willRetry 字段
- **链接**: https://github.com/badlogic/pi-mono/pull/5942
- **状态**: CLOSED（已合并）
- **内容**: 为 `SessionBeforeCompactEvent` 和 `SessionCompactEvent` 添加 `reason`（manual/threshold/overflow）和 `willRetry` 字段，与 RPC 协议对齐，使扩展能区分压缩来源。

### ✅ #5938 — TUI 组件同步到客户端
- **链接**: https://github.com/badlogic/pi-mono/pull/5938
- **状态**: CLOSED（已合并）
- **内容**: 为 d-pi agent 定义添加 `defineTuiComponent` 声明，生成客户端同步的 TUI 组件能力模块，并将内置 `d-pi-message` 渲染器迁移到新架构。

---

## 5. 功能需求趋势

从今日所有 Issues 中可提炼出以下五大功能方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **本地 LLM 支持** | #3357（👍36）、#5929、#5930 | ⭐⭐⭐⭐⭐ |
| **上下文压缩可靠性** | #5937、#5939、#5942、#5217、#5778 | ⭐⭐⭐⭐⭐ |
| **TUI 交互体验** | #5825、#4888、#5931、#5946、#5906 | ⭐⭐⭐⭐ |
| **多提供商/模型管理** | #5916、#5933、#5950、#5501 | ⭐⭐⭐ |
| **多会话/并发 Agent** | #5700、#5952 | ⭐⭐ |

**本地 LLM 支持**和**上下文压缩**是社区最迫切的两大方向，前者关乎 Pi 能否成为真正的本地优先 AI 编码工具，后者直接影响长对话场景下的稳定性。

---

## 6. 开发者关注点

今日开发者反馈中的核心痛点：

1. **Agent 挂起/死锁** — 多个 Issue（#4945、#5778、#5571）报告 agent 在不同场景下无限挂起，涉及 LLM 流断开、工具执行死锁、stdin 管道未关闭等根因。这是影响用户体验最严重的问题类别。

2. **TUI 渲染干扰输入** — IME 预编辑被背景渲染擦除（#4888）、复制粘贴引入额外空格（#5931）、强制滚动打断阅读（#5825），这些问题叠加在一起使得中文/日文等需要 IME 输入的用户体验较差。

3. **提供商兼容性碎片化** — vLLM、OpenRouter、GitHub Copilot、Ollama 等各有不同的错误格式和行为差异，Pi 需要持续适配（#5929、#5928、#5916）。

4. **扩展 API 能力不足** — 扩展开发者需要更多上下文信息（压缩原因、navigateTree 等）和更安全的会话管理 API（#5932、#5952、#5217）。

5. **工具输出截断** — bash/read 工具在折叠模式下仅显示 5-10 行（#5906），且用户希望能自定义截断阈值（#5935），这对调试和日志分析场景影响较大。

---

> 📊 数据来源: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 统计时间: 2026-06-22

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-22

---

## 1. 今日速览

今日社区围绕 **v0.18.5** 正式版发布展开密集修复，重点解决 Plan Mode 安全机制、循环调用防护、CLI 渲染缺陷及跨平台路径安全等关键问题。同时多个高优先级 PR 推进语音输入、Artifact 工具、子代理恢复等新功能，IDE 集成与 CI 基础设施也获得大量关注。

---

## 2. 版本发布

### v0.18.5（正式版）

- **Plan Mode 需显式 opt-in**：修复 plan mode prompt 默认行为，要求用户主动启用而非意外进入（[PR #5433](https://github.com/QwenLM/qwen-code/pull/5433)）
- 修复重复的 gitdiff untracked 计数测试用例

### v0.18.3-nightly.20260621（夜间构建）

- 包含与 v0.18.5 相同的 plan mode 修复

---

## 3. 社区热点 Issues

| # | Issue | 重要性说明 |
|---|-------|-----------|
| **#5019** | [长程任务下大量工具重复调用导致会话终止](https://github.com/QwenLM/qwen-code/issues/5019) | 核心稳定性问题，长任务场景高频触发，社区讨论活跃（4 👍），已有多位开发者跟进修复 PR |
| **#5574** | [exit_plan_mode 在 Shift+Tab 进入 Plan Mode 后自动执行无需确认](https://github.com/QwenLM/qwen-code/issues/5574) | Plan Mode 安全机制缺陷，可能导致未审阅的计划被直接执行，风险较高 |
| **#4888** | [IDEA 插件 ask_user_question 不显示问题文本和输入框](https://github.com/QwenLM/qwen-code/issues/4888) | JetBrains 插件交互功能受阻，10 条评论，影响 IDE 用户体验 |
| **#5562** | [CLI 输入框换行时背景色渲染不连续](https://github.com/QwenLM/qwen-code/issues/5562) | TUI 渲染 bug，影响终端交互视觉体验，已快速修复 |
| **#5555** | [--resume 后 thinking block 预览渲染截断](https://github.com/QwenLM/qwen-code/issues/5555) | 会话恢复功能显示异常，影响用户对思考内容的完整查看 |
| **#5552** | [bare fastModel 在 OpenAI auth 下触发 Qwen OAuth](https://github.com/QwenLM/qwen-code/issues/5552) | 认证类型混淆问题，可能导致非预期的 OAuth 流程 |
| **#5554** | [非交互 loop detection 退出成功但未发布结果](https://github.com/QwenLM/qwen-code/issues/5554) | CI/GitHub Actions 场景下失败信号丢失，影响自动化流程可靠性 |
| **#5512** | [workspace image RPC 跟随符号链接逃逸工作区外](https://github.com/QwenLM/qwen-code/issues/5512) | 安全隐患：符号链接可绕过工作区路径限制读写外部文件 |
| **#5506** | [Desktop session plan path helper 接受兄弟目录路径](https://github.com/QwenLM/qwen-code/issues/5506) | 路径验证不严格，`startsWith` 检查可被同名前缀路径绕过 |
| **#5219** | [CI 集成测试不在 PR/merge 时运行](https://github.com/QwenLM/qwen-code/issues/5219) | 基础设施痛点：回归问题直到 release 才暴露，社区长期关注 |

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| **#5573** | [fix(core): 始终开启连续相同工具调用防护](https://github.com/QwenLM/qwen-code/pull/5573) | 将循环检测从 opt-in 提升为始终开启，修复 #5019 长任务崩溃问题 |
| **#5571** | [fix(core): 默认启用 loop detection 并降低重复阈值](https://github.com/QwenLM/qwen-code/pull/5571) | 解决 `skipLoopDetection` 默认 true 导致检测不生效的根因 |
| **#5557** | [feat(core): 新增 Artifact 工具支持发布交互 HTML 页面](https://github.com/QwenLM/qwen-code/pull/5557) | 实验性功能：模型可生成自包含 HTML 并在浏览器中打开 |
| **#5502** | [feat(voice): 语音输入支持原生捕获、流式传输和 biasing](https://github.com/QwenLM/qwen-code/pull/5502) | 新增 `/voice` 命令，支持按住/轻触两种模式，可切换转录模型 |
| **#5556** | [feat: 可恢复的后台子代理及 transcript TTL](https://github.com/QwenLM/qwen-code/pull/5556) | 已完成的子代理可通过 send_message 重新激活，延长会话生命周期 |
| **#5030** | [feat(core,cli,sdk): 无需合成 continue 消息即可恢复中断的 turn](https://github.com/QwenLM/qwen-code/pull/5030) | 改进 resume 机制，避免在对话记录中插入假用户消息 |
| **#5561** | [feat(mcp): 设置变更时实时同步 MCP 服务器](https://github.com/QwenLM/qwen-code/pull/5561) | 编辑 `mcpServers` 配置后无需重启即可热重载连接 |
| **#5560** | [test(integration): 添加无 AK 集成测试用 fake OpenAI 服务器](https://github.com/QwenLM/qwen-code/pull/5560) | 解决 CI 中模型依赖测试需要真实 API Key 的问题 |
| **#5572** | [ci(release): 稳定版发布后自动发布 VSCode 插件](https://github.com/QwenLM/qwen-code/pull/5572) | 自动化发布流程，减少人工操作遗漏 |
| **#5126** | [feat(vision-bridge): 为纯文本模型自动转译图片为文字](https://github.com/QwenLM/qwen-code/pull/5126) | 当主模型不支持视觉时自动调用图片能力模型处理图片输入 |

---

## 5. 功能需求趋势

从今日 28 条 Issues 和 46 条 PR 中提炼出以下方向：

### 🔴 高优先级
- **循环调用防护与稳定性**：#5019、#5573、#5571 等多条 PR 集中解决工具重复调用问题，反映长任务场景下模型可靠性是社区核心诉求
- **路径安全与沙箱隔离**：#5512（符号链接逃逸）、#5506（plan path 绕过）、#5516（兄弟目录误判）、#5538（UNC 路径处理）等安全相关修复密集

### 🟡 中优先级
- **IDE 集成体验**：#4888（IDEA 交互问答）、#5538（VS Code UNC 路径）、#5572（自动发布 VSCode 插件）显示 IDE 插件生态持续完善
- **CLI/TUI 渲染质量**：#5562（背景色断裂）、#5555（thinking 截断）、#5566（Static 替换 Box）等终端 UI 体验优化
- **CI 基础设施改进**：#5219（集成测试不进 PR）、#5554（非交互 loop 检测）、#5560（fake server）、#5549（autofix）

### 🟢 新功能探索
- **语音输入**（#5502）：语音转文字输入能力
- **Artifact 工具**（#5557）：模型生成可交互 HTML
- **子代理恢复**（#5556）：后台子代理可重新激活
- **Vision Bridge**（#5126）：纯文本模型自动处理图片

---

## 6. 开发者关注点与痛点

1. **长任务稳定性**：工具重复调用导致会话崩溃（#5019）是社区反映最强烈的问题，已有多位贡献者从默认配置和检测阈值两个方向提交修复

2. **跨平台路径处理**：Windows 绝对路径（#5522）、UNC 路径（#5538）、符号链接（#5512）、尾部分隔符（#5518）等路径相关问题频发，桌面端文件操作鲁棒性需系统性提升

3. **认证配置混淆**：bare fastModel 在不同 auth 类型下的解析歧义（#5552）反映配置系统复杂度对用户的困扰

4. **文档与实现不一致**：MCP `--scope` 默认值文档写 `project` 但代码实际为 `user`（#5563），影响用户预期

5. **CI 反馈循环慢**：集成测试仅在 nightly 运行（#5219），PR 合并后问题延迟到 release 才暴露，社区呼吁将关键 e2e 测试纳入 PR 流程

6. **Plan Mode 安全边界**：从今日 v0.18.5 的 opt-in 修复到 #5574 的自动执行漏洞，Plan Mode 的交互安全机制仍在打磨中

---

> 📊 今日统计：28 条 Issues 更新（12 OPEN / 16 CLOSED），46 条 PR 更新（26 OPEN / 20 CLOSED），1 个正式版 + 1 个夜间构建发布。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**2026-06-22 | 项目：CodeWhale (Hmbown/CodeWhale)**

---

## 1. 今日速览

今日社区围绕 **v0.8.64 版本的安全加固、Rust 架构重构、用户体验优化**三条主线展开密集讨论。安全侧，Hmbown 亲自创建 Issue #3368 作为安全加固的公共跟踪器；架构侧，延续 v0.8.63 启动的大型 Rust 单项拆分工作，多个 refactor PR 持续落地；体验侧，自动压缩（auto-compaction）、沙箱 Git worktree 兼容性、模型 Profile 等高频需求反映用户对成熟度的期待不断上升。

---

## 2. 版本发布

### v0.8.63（已发布）

- **项目正式定名为 CodeWhale**：`CodeWhale` 是此后唯一的正式项目名称、命令行工具名、npm 包名和发布资产名称。旧 npm 包 `deepseek-tui` 已废弃，不再接收更新。v0.8.x 老用户请参考 `docs/REBRAND.md` 迁移。

> 🔗 [Release: v0.8.63](https://github.com/Hmbown/CodeWhale/releases)

---

## 3. 社区热点 Issues

| # | Issue | 评论 | 要点 |
|---|-------|------|------|
| 1 | **[#2487] yolo 模式频繁出现 "Turn stalled - no completion signal received"** | 17 | 用户 yahayao 报告 yolo 模式下操作冻结无响应，即使发送 `continue` 也无法恢复。这是当前社区最活跃的问题，反映了高自主模式下的可靠性短板。 | [链接](https://github.com/Hmbown/CodeWhale/issues/2487) |
| 2 | **[#3368] v0.8.64 安全加固/代码扫描修复的公共跟踪器** | 16 | Hmbown 创建，目标是统一分散在 CodeQL、安全审计报告中的修复工作，使发布门禁透明化。权重高，表明 0.8.64 是一次以安全为核心诉求的版本。 | [链接](https://github.com/Hmbown/CodeWhale/issues/3368) |
| 3 | **[#3144] 增加自然语言 auto-review + pre-push review gate** | 11 | Hmbown 提案借鉴 Cursor 的 Bugbot/Security Review 思路，在 CodeWhale 中加入代码审查门控机制，防止未检查的自主执行引发破坏。 | [链接](https://github.com/Hmbown/CodeWhale/issues/3144) |
| 4 | **[#3275] CodeWhale 过度主动，自行提问并自行回答，偏离用户意图** | 9 | 回归自 #3061。用户反馈 CodeWhale 在执行任务时自动扩展范围，形成"提议→回答→执行"的自驱循环，无需用户确认。这直接关系到信任和可控性。 | [链接](https://github.com/Hmbown/CodeWhale/issues/3275) |
| 5 | **[#1812] Windows 11 下 TUI 间歇性冻结** | 8 | aboimpinto 提供了详细日志和线程状态分析，进程存活但 UI 完全无响应。跨平台兼容性是老问题。 | [链接](https://github.com/Hmbown/CodeWhale/issues/1812) |
| 6 | **[#3222] 为 OpenAI chat-completions 增加 `reasoning_style` 覆盖（MiniMax M3, Qwen, GLM）** | 6 | 非旗舰模型（MiniMax M3、Qwen、GLM）的推理内容解析存在 bug，多模型支持社区持续关注。 | [链接](https://github.com/Hmbown/CodeWhale/issues/3222) |
| 7 | **[#2608] 重构：从膨胀的 config 文件提取 provider registry** | 4 | `crates/config/src/lib.rs` 已达 4,719 行，加一个 provider 要改 15-30 处 match arm。此 Issue 直接推动了当天的多个重构 PR。 | [链接](https://github.com/Hmbown/CodeWhale/issues/2608) |
| 8 | **[#3289] 自动生成 subagent 后 UI 冻结** | 5 | Plan 模式下自动 spawn subagent 后界面卡死，涉及 subagent 生命周期管理。 | [链接](https://github.com/Hmbown/CodeWhale/issues/3289) |
| 9 | **[#3363] 默认实现无缝 auto-compaction（携带摘要前推）** | 1 | Hmbown 指出长会话接近上下文上限时体验脆弱，用户不应手动 compact/restart。"最大的体验差距"——直接命中产品成熟度痛点。 | [链接](https://github.com/Hmbown/CodeWhale/issues/3363) |
| 10 | **[#3355] 沙箱阻止 Git worktree 写操作** | 3 | 用户使用 Git worktrees 时，沙箱误杀 Git 元数据写入。关联 PR #3356 已在今日合并修复。 | [链接](https://github.com/Hmbown/CodeWhale/issues/3355) |

---

## 4. 重要 PR 进展

### 架构重构类（延续 v0.8.63 大拆分）

| # | PR | 内容 |
|---|-----|------|
| 1 | **[#3345] refactor(config): move inline tests to module** | 将 `crates/config/src/lib.rs` 中的内联测试模块提取为独立的 `tests.rs`，减少生产代码体积和合并冲突面。关闭 Issue #3307。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3345) |
| 2 | **[#3333] refactor(tui): split MCP header helpers** | 将 MCP HTTP 头构建与过滤逻辑提取为 `mcp::headers` 子模块，为 #3310 的完整传输层拆分铺路。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3333) |
| 3 | **[#3330] replay FEAT-005 Layer 4 command extraction onto main** | 将之前分支上的命令提取重构（Layer/FEAT-005）重放到 `main` 上，是命令策略重构 EPIC 的一部分（Refs #2870）。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3330) |

### Bug 修复类

| # | PR | 内容 |
|---|-----|------|
| 4 | **[#3332] fix(app-server): require auth for non-loopback binds** | 非本地绑定必须显式提供AuthToken，修复 #3258 安全隐患。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3332) |
| 5 | **[#3356] fix(tui): allow worktree git metadata writes in sandbox** | 检测 linked-worktree `.git` 指针文件，放宽沙箱写权限闭合 Issue #3355。今日活跃且已关联 Issue。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3356) |
| 6 | **[#3329] fix(config): restore huggingface env precedence** | 恢复 Hugging Face API 密钥的环境变量优先级，使 CI Lint 门控再次通过。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3329) |
| 7 | **[#3331] fix(tui): enable proxy env for js execution** | 修复 #3273，Node.js 代理环境变量（含 `ALL_PROXY`）正确传播到子进程。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3331) |
| 8 | **[#3344] fix(tui): retry Codex responses requests** | 修复 #3019，Codex Responses 流式传输现在通过 `send_with_retry` 重试可恢复的传输/状态错误。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3344) |
| 9 | **[#3321] fix(workflow): add token budget regulator for high fan-out agent runs** | 为高扇出工作流/子代理编排加入 token budget 调节器，填补协议层与实际执行之间的 enforcement 缺口。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3321) |

### 用户体验 & 迁移

| # | PR | 内容 |
|---|-----|------|
| 10 | **[#3302] fix(tui): keep onboarding marker in codewhale home** | 新用户引导标记切换到 `~/.codewhale/.onboarded`，同时向后兼容 `~/.deepseek/.onboarded`。 | [链接](https://github.com/Hmbown/CodeWhale/pull/3302) |

---

## 5. 功能需求趋势

从本周 Issues 中提炼出以下五大方向（按提及频次和讨论热度排序）：

1. **Rust 架构拆分与代码治理** — 几乎占据 Issues/PRs 的半壁江山。config、runtime_api、runtime_threads、ui、app 等"巨石"模块被系统性拆分，社区共识是**当前代码规模已成为新功能和可靠性的主要瓶颈**。
2. **安全与审查门控** — #3368（安全加固跟踪器）、#3144（auto-review）、#3332（auth 强制）等形成一条完整线索：如何在自主执行与用户可控之间取得平衡。
3. **多模型/多 Provider 兼容** — MiniMax M3、Qwen、GLM、百度千帆等非旗舰模型持续报错或缺失功能；#3365 提出 **ModelProfile** 描述符即为解决"所有模型同等待遇"的根本方案。
4. **上下文管理与自动压缩** — #3363（auto-compaction）、#2900（DSML 上下文爆炸）、#3321（token budget regulator），长会话稳定性是高频话题。
5. **跨平台体验** — Windows 冻结（#1812）、沙箱与 worktree 兼容（#3355）、代理环境（#3331）、app-server 绑定安全（#3329/#3332），"不是 macOS 就好"的跨平台补全需求强烈。

---

## 6. 开发者关注点

> **高频痛点（按反馈频率排序）：**

- **"失控的自主性"** — #3275、#2487 和 #3144 形成共振：用户期望 CodeWhale 放手做事，但又不希望它自作主张。如何在 yolo 模式下保持可控，是本季度社区最核心的矛盾。
- **可靠性 > 新功能** — 冻结、stall、上下文爆满等可靠性问题获得的点赞和评论远高于新功能建议，社区正在从"什么时候支持 X"转向"能不能先不崩"。
- **大型文件成为贡献门槛** — #2608 直接指出：每个新 provider 要改 15-30 处 match arm，导致社区贡献者望而却步。架构拆分是接纳更多社区贡献的前提。
- **安全不再是可选项** — Hmbown 亲自下场创建安全跟踪器和 review gate Issue，app-server 认证从 optional 变为强制，说明项目正在从"个人效率工具"向"可信执行平台"过渡。
- **产品定名与身份明确化** — v0.8.63 正式切换至 **CodeWhale**，废弃 `deepseek-tui`，社区需要对齐认知。

---

*数据来源：[github.com/Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) | 生成日期：2026-06-22*

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*