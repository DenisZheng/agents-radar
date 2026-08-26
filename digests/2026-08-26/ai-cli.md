# AI CLI 工具社区动态日报 2026-08-26

> 生成时间: 2026-08-26 00:55 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 | 2026-08-26

---

## 1. 生态全景

当前 AI CLI 赛道呈现 **“平台级基建内卷，独立工具架构外科手术”** 的双轨态势。头部厂商工具（Claude Code、Codex、Copilot CLI、Qwen Code）集中火力补齐 **Windows 原生体验、企业级合规认证、MCP 协议兼容性** 等商业化落地短板，发版节奏从“功能竞速”转为“稳定性攻坚”；社区驱动工具（OpenCode、Pi、CodeWhale）则在 **进程控制平面、Provider 中立性、长会话工程化契约、TUI 渲染内核** 等底层架构上推进破坏性重构。整体生态正从“能用”向“可管、可观、可复现”的生产级工程工具演进，**上下文/状态管理** 与 **跨平台一致性** 成为共识的最高优先级技术债。

---

## 2. 各工具活跃度对比

| 工具 | 核心仓库 | 今日 Release | 近期 Issue 活跃度 (估算) | 近期 PR 活跃度 (合并/更新) | 核心研发模式 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | anthropics/claude-code | **2** (v2.1.245/246, 修复崩溃+权限UI) | 高 (~50/天, 含历史积压回归) | 低 (1 PR, 官方主导) | 官方闭源核心+社区反馈驱动修复 |
| **OpenAI Codex** | openai/codex | **3** (Rust Alpha 连发 v0.150.0-a.9/10/11) | 高 (~50/天, Win阻塞型居多) | **极高 (20 PR 批量合并)** | 官方主导基建狂飙 (Bazel/Guardian/OAuth) |
| **GitHub Copilot CLI** | github/copilot-cli | **1** (Pre-release v1.0.81-10) | 中高 (~45/天, 回归+长期需求) | 低 (1 PR, 备战热修复) | 预发版快速迭代+社区高呼声积压 |
| **Qwen Code** | QwenLM/qwen-code | 0 | 中 (~10 精选, 自动化介入多) | 高 (10 PR, 含 `autofix` 自动化) | 官方主导+自动化流水线深度融合 |
| **OpenCode** | anomalyco/opencode | **1** (v1.18.23 热修复) | 高 (多个 P0 级故障发酵) | 高 (10 PR, 多Provider/企业认证) | 社区驱动+官方核心维护, 多模型聚合策略 |
| **Pi** | earendil-works/pi | 0 | **极高 (50 Issue 更新/天)** | **极高 (31 PR 更新/天)** | 社区高频协作, 极快响应修复 |
| **DeepSeek TUI (CodeWhale)** | Hmbown/CodeWhale | 0 (RC 集成分支 72 commits) | 中 (聚焦 EPIC 级架构议题) | 高 (10 PR, 架构重构主导) | 核心维护者主导架构演进, 社区配合测试 |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 0 | 低 (仅 2 条更新, 均为 P0/P1) | **0** | 官方维护, 响应滞后, 处于稳定性危机期 |

> **数据说明**：Issue/PR 数据基于各日报“精选 Top 10”及“全量分析基数(50条)”推算，反映社区响应速度与核心团队投入强度。

---

## 3. 共同关注的功能方向

| 共性方向 | 关注工具 (代表性 Issue/PR) | 核心诉求与痛点 |
| :--- | :--- | :--- |
| **Windows 原生体验补齐** | **Claude** (#80444 GPU崩溃, #85891 置顶窗口), **Codex** (#13993

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-26）

---

## 1. 热门 Skills 排行（基于 Issue 热度 + PR 关联度）

| 排名 | Skill / PR | 核心功能 | 社区讨论热点 | 状态 |
|------|------------|----------|--------------|------|
| 1 | **skill-creator 评测体系修复** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | 修复 `run_eval.py` 在 Windows 上读取 subprocess pipe 失败、召回率恒为 0% 的核心缺陷 | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 条评论、7 👍），直接阻断技能描述优化闭环 | 🔴 OPEN |
| 2 | **skill-quality-analyzer / skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 元技能：从结构、文档、安全、维护性、测试五个维度自动评审 Skill 质量 | 回应社区对“技能质量把关”强烈诉求；配合 Issue [#492](https://github.com/anthropics/skills/issues/492)（43 条评论、2 👍）的安全命名空间担忧 | 🔴 OPEN |
| 3 | **self-audit（自我审计）** ([#1367](https://github.com/anthropics/skills/pull/1367)) | 机械性文件存在性校验 → 四维推理质量门控（严重度优先），通用于任意技术栈 | 关联 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（4 条评论、1 👍）提出的“推理质量三闸管线” | 🔴 OPEN |
| 4 | **Hivemind：零成本多智能体编排** ([#1628](https://github.com/anthropics/skills/pull/1628)) | 将机械性工作委派给 headless opencode（免费模型），Claude 仅作规划/审查/合并 | 直击“昂贵模型上下文是稀缺资源”痛点，社区对“模型分层协作”关注度极高 | 🔴 OPEN |
| 5 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | 全栈测试模式库：Trophy 模型、AAA、React Testing Library、契约测试、E2E、性能/混沌/变异测试 | 回应 Issue [#556](https://github.com/anthropics/skills/issues/556) 隐含的“技能缺乏自测能力”问题 | 🔴 OPEN |
| 6 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质量控制：孤行/寡行、标题分页、编号对齐 | 解决“Claude 生成文档排版差”通病，用户极少主动要求但极其在意 | 🔴 OPEN |
| 7 | **ODT / docx 格式修复系列** ([#486](https://github.com/anthropics/skills/pull/486), [#541](https://github.com/anthropics/skills/pull/541), [#538](https://github.com/anthropics/skills/pull/538)) | ODT 创建/填充/解析；docx 修订冲突修复；PDF 大小写路径修复 | 关联 Issue [#12](https://github.com/anthropics/skills/issues/12)（4 条评论、1 👍）docx 空白重排导致文档损坏 | 🔴 OPEN |
| 8 | **mcp-builder 评测修复** ([#1602](https://github.com/anthropics/skills/pull/1602)) | 修复 MCP 工具调用序列化、TextContent 非 JSON 序列化、编码与基准指标计算 | 关联 Issue [#1390](https://github.com/anthropics/skills/issues/1390)（4 条评论）评测对接真实 MCP 全部得 0 分 | 🔴 OPEN |

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表性 Issue | 核心诉求 | 热度指标 |
|----------|--------------|----------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 社区技能以 `anthropic/` 命名空间分发，冒充官方技能，诱导用户授予高权限 | **43 评论、2 👍**（全库最高） |
| **组织级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) | 团队内一键共享/同步技能，避免手动下载→发送→上传流程 | **16 评论、8 👍** |
| **技能创建/评测工具链稳定性** | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` 触发率 0%，导致技能描述优化完全失效；Windows 兼容性差 | **12 评论、7 👍** |
| **技能去重与分发规范** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` 与 `example-skills` 插件内容重复，污染上下文窗口 | **6 评论、9 👍** |
| **上下文窗口压缩/管理** | [#1329](https://github.com/anthropics/skills/issues/1329), [#1487](https://github.com/anthropics/skills/issues/1487) | 长期运行 Agent 的记忆压缩（compact-memory）；`claude-api` 单次注入 156k tokens 撑爆窗口 | **9/4 评论** |
| **治理与合规类技能** | [#412](https://github.com/anthropics/skills/issues/412) | Agent 治理：策略执行、威胁检测、信任评分、审计追踪 | **6 评论**（已关闭但显示需求） |
| **企业级集成** | [#568](https://github.com/anthropics/skills/pull/568), [#1175](https://github.com/anthropics/skills/issues/1175) | ServiceNow 全平台、SharePoint Online 权限控制 | PR 活跃更新至 8 月 |
| **云厂商适配** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 环境下技能可用性 | **4 评论**持续关注 |

---

## 3. 高潜力待合并 Skills（评论活跃、解决核心痛点、近期持续更新）

| PR | Skill | 解决痛点 | 近期活跃度 | 落地可能性 |
|----|-------|----------|------------|------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评测全链路修复** | 召回率 0%、Windows pipe 读取、并行 worker、触发检测 | 6/10–6/23 持续更新，关联最高热度 Issue | ⭐⭐⭐⭐⭐ |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **评测/基准/序列化/编码全栈修复** | MCP 序列化、TextContent、指标计算、脚本稳定性 | 8/17–8/24 高频更新，关联 #1390 | ⭐⭐⭐⭐ |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit v1.3.0** | 交付前机械校验 + 四维推理审计，通用质量门控 | 6/28–7/02 版本迭代，响应 #1385 提案 | ⭐⭐⭐⭐ |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind 多智能体编排** | 昂贵模型仅做规划，廉价模型做执行，零成本扩展并行度 | 8/21–8/24 新建，架构创新性强 | ⭐⭐⭐ |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 为技能开发提供标准化测试模式库，填补“技能缺乏自测”空白 | 3/22–4/21 长周期打磨，内容极全 | ⭐⭐⭐ |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow 全平台技能** | ITSM/ITOM/ITAM/FSM/HRSD/CSM/SPM/SecOps 覆盖 | 3/8–8/12 持续 5 个月更新，企业级需求明确 | ⭐⭐⭐ |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / security-analyzer** | 自动化技能质量/安全审计，配合命名空间治理 | 11/6–1/07 早期 PR，近期无更新但 Issue #492 持续发酵 | ⭐⭐ |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 解决 AI 文档排版通病，用户无感但极高价值 | 3/4–3/13 短周期，未见后续推进 | ⭐⭐ |

---

## 4. Skills 生态洞察（一句话总结）

> **社区核心诉求已从“要更多技能”转向“要可信、可测、可共享、可治理的技能基础设施”——安全命名空间、评测工具链稳定性、组织级分发、上下文窗口管理、质量门控五大基建缺口正成为阻碍生态规模化的关键瓶颈。**

---

# Claude Code 社区动态日报 | 2026-08-26

---

## 1. 今日速览

- **两个小版本连发**：v2.1.245 修复 Linux glibc 2.44 启动崩溃，v2.1.246 新增 Bash 通配符规则启动警告与 `/permissions` Auto mode 标签页。
- **社区关注焦点集中在桌面端稳定性**：Windows MSIX 打包缺陷导致 GPU 崩溃、AppX 更新失败、始终置顶窗口等问题高居 Issue 热榜；macOS 亦有类似置顶与权限弹窗反馈。
- **核心体验回归**：TUI 滚动轮失效（#65833，99 👍）、`/compact` 静默失败（#89040）、OSC 8 超链接缺失（#79839）等长期回归仍未修复，开发者呼声高。

---

## 2. 版本发布

### v2.1.246 (2026-08-25)
| 变更 | 说明 |
|------|------|
| **Bash 通配符规则启动警告** | 检测 `Bash(git * main)` 这类规则：通配符在子命令前会匹配插入的选项，提示开发者收紧规则。 |
| **`/permissions` 新增 Auto mode 标签页** | 可视化查看/编辑自动模式分类器规则，便于调试权限自动化策略。 |
| **其他** | 部分内容截断，完整日志见 [Release 页面](https://github.com/anthropics/claude-code/releases/tag/v2.1.246) |

### v2.1.245 (2026-08-25)
| 变更 | 说明 |
|------|------|
| **修复 Linux glibc 2.44 启动崩溃** | 影响 Arch Linux、CachyOS、Fedora Rawhide 等发行版，属阻塞性 Bug 修复。 |

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论/👍 | 关注理由 |
|---|------|------|---------|----------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | CVP 通过的组织仍触发网络安全防护拦截 | 🟢 Open | 155 / 24 | **企业级阻塞**：认证流程与运行时拦截不一致，导致合规组织无法正常使用。 |
| [#65833](https://github.com/anthropics/claude-code/issues/65833) | v2.1.150 起 TUI 滚动轮变发送方向键 | 🟢 Open | 41 / **99** | **最高 👍 回归**：核心交互破坏，影响所有 TUI 用户，持续 2.5 月未修。 |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | Windows Desktop GPU 进程崩溃导致 MSIX 不可启动 | 🟢 Open | 56 / 9 | **平台阻塞**：需 Repair 才能恢复，涉及 Electron/Chrome 底层，复现率高。 |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | Windows Desktop 窗口强制置顶且无设置关闭 | 🟢 Open | 25 / **37** | **交互体验重伤**：对应 macOS 同类 #66516，跨平台一致性缺失。 |
| [#82049](https://github.com/anthropics/claude-code/issues/82049) | Magic Link 邮件延迟 2–5 分钟 | 🟢 Open | 14 / 25 | **登录链路拖慢**：间接导致 Claude Code 会话过期后重登耗时激增。 |
| [#86142](https://github.com/anthropics/claude-code/issues/86142) | MCP draft-07 outputSchema 导致 "unsupported dialect" 客户端拒绝 | 🔴 Closed | 29 / 12 | **协议兼容性**：已关闭但揭示 MCP 版本演进对生态工具链的冲击。 |
| [#89040](https://github.com/anthropics/claude-code/issues/89040) | `/compact` 超大对话静默失败：摘要生成但边界未写入 | 🟢 Open | 2 / 0 | **上下文管理失效**：无报错、无回滚、上下文不收缩，隐患大。 |
| [#78027](https://github.com/anthropics/claude-code/issues/78027) | 注入 grep wrapper (ugrep) 正则导致 20+ GB 内存爆炸 | 🟢 Open | 2 / 0 | **资源耗尽风险**：受限重复正则触发，可能冻结宿主机。 |
| [#74719](https://github.com/anthropics/claude-code/issues/74719) | worktree GC 误删脏/未推送 agent-* 工作树 | 🟢 Open | 2 / 1 | **数据丢失风险**：清理策略与文档不符，自动化清理不可信。 |
| [#89663](https://github.com/anthropics/claude-code/issues/89663) | Windows 打包 Node v26.3.0 流式请求频发 ECONNRESET | 🟢 Open | 0 / 0 | **新增阻塞**：仅 CLI/VS Code 复现，浏览器正常，疑似打包运行时问题。 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 核心变更 |
|---|------|------|------|----------|
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | `validate-agent.sh`：不在首个警告中止 & 修复误判合法 agent | bcherny | 🟢 Open | 修复 `set -euo pipefail` 下算术自增导致的非零退出、假阳性报错，解决 #83803。 |

> 过去 24h 仅 1 个 PR 更新，说明核心团队近期侧重发版与 Issue 分流，社区贡献处于低潮。

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|----------|------------|----------|
| **桌面端原生体验修补** | #80444, #85891, #66516, #73694, #82277 | 窗口管理、GPU 稳定性、MSIX 打包完整性、后台代理存活 |
| **TUI/终端交互完善** | #65833, #80734, #79015, #79839, #85972 | 滚动、文本选择、鼠标模式清理、OSC 8 超链接、减动画模式计时器 |
| **权限与规则系统增强** | #87804, #89244, #89464, #89669 | 按主题触发 `.claude/rules`、约束规则生效机制、技能级 Hook 生命周期 |
| **MCP/工具链协议跟进** | #86142, #89302, #89665 | draft-07 兼容、Chrome 扩展设备持久化、Slack 连接器可见性 |
| **大对话/上下文管理** | #89040, #61012 | `/compact` 可靠性、用量统计准确性 |
| **企业/合规功能** | #84352, #82049 | CVP 认证联动、Magic Link 送达 SLA |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“能不能先把基础体验修好再加新功能？”**  
   - TUI 滚动、文本选择、窗口置顶、OSC 8 链接等 **基础交互回归超 2 月未修**，开发者在 #65833、#80734 中明确表达挫败感。

2. **Windows MSIX 打包质量不达标**  
   - 缺少 `CodeIntegrity.cat` 导致 Code Integrity 拦截 (#85901)、AppX 更新锁冲突 (#73694)、服务自动更新杀后台代理 (#82277) —— **打包/分发流程缺乏门禁测试**。

3. **权限/规则系统的“可观测性”与“可控性”不足**  
   - Auto mode 分类器不透明、规则生效时机不可预测、技能 Hook 污染全局会话 —— 开发者呼吁 **可视化调试面板** 与 **细粒度作用域**。

4. **MCP 生态版本碎片化**  
   - draft-07 破坏性变更导致现有服务器不可用 (#86142)，社区期望 **版本兼容层** 或 **更长迁移窗口期**。

5. **大对话场景下的工程化短板**  
   - `/compact` 静默失败、用量统计漂移、上下文边界管理缺乏可编程接口 —— **长上下文工程化工具链缺失**。

---

> **数据来源**：`github.com/anthropics/claude-code` — Releases / Issues / PRs（过去 24h 增量）  
> **生成时间**：2026-08-26 08:00 UTC  
> **下一期预告**：关注 v2.1.247 是否回合 TUI 滚动轮、Windows MSIX 修复进度、MCP 兼容性文档更新。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-08-26

---

## 1. 今日速览

- **版本发布**：Rust CLI 连续推送三个 Alpha 版本（v0.150.0-alpha.9/10/11），显示核心引擎正在高频迭代。
- **Windows 生态痛点集中爆发**：过去 24 小时新增/更新的高热度 Issue 中，**7 个直接关联 Windows 平台**（安装器缺失、MCP 配置失效、沙箱崩溃、进程泄漏、启动闪退等），且多为阻塞性 Bug。
- **企业级能力落地加速**：合并的 20 个 PR 集中在 **MCP OAuth 企业身份解析、Guardian 审查隔离、Bazel 构建体系、遥测增强、凭据清洗** 等基础设施层，显示向企业级生产可用性迈进。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| `rust-v0.150.0-alpha.9/10/11` | Alpha | 核心 Rust CLI 连续小步快跑发布，未附带变更日志；推测为 0.150 稳定版前的回归修复与内部重构。 |

> 🔗 [Releases 页面](https://github.com/openai/codex/releases)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 核心诉求 | 为什么重要 |
|---|-------|------|----------|------------|
| 1 | [#13993](https://github.com/openai/codex/issues/13993) **Support standalone Windows installer** | 81 💬 · 187 👍 | 提供 `codex-setup.exe` 离线安装包，绕过 Microsoft Store 限制 | **企业/离线环境首要阻碍**，持续 5 个月高居榜首，社区呼声极高 |
| 2 | [#34035](https://github.com/openai/codex/issues/34035) **Make 5-hour usage limit removal permanent** | 14 💬 · 140 👍 | 将临时取消的 5 小时配额限制永久化（保留周配额） | 关乎 Plus/Pro/Business 订阅价值感知，官方曾承诺“临时取消”，用户担心回滚 |
| 3 | [#28919](https://github.com/openai/codex/issues/28919) **Windows app missing “Control other devices” tab** | 44 💬 · 42 👍 | 设置 > 连接 中缺少远程控制入口 | 多设备协作核心功能缺失，影响远程开发/演示场景 |
| 4 | [#40715](https://github.com/openai/codex/issues/40715) **Windows 26.820: MCP “invalid transport” 启动失败** | 17 💬 · 9 👍 | 稳定版 26.820.60940 无法解析 `mcp_servers.codex_app` transport | **最新稳定版阻塞性回归**，Beta 版正常，急需热修复 |
| 5 | [#39841](https://github.com/openai/codex/issues/39841) **Workspace terminal “setup refresh had errors”** | 13 💬 · 1 👍 | Windows 上终端无法启动任何命令 | 直接阻断本地代码执行能力，复现率高 |
| 6 | [#40700](https://github.com/openai/codex/issues/40700) **Windows 26.820: codex.exe 从 WindowsApps 复制失败导致无法启动** | 6 💬 | AppX 打包机制导致二进制重定向失效 | 安装/启动链路彻底中断，属于 P0 级发布阻断 |
| 7 | [#35485](https://github.com/openai/codex/issues/35485) **Windows: node_repl MCP 进程泄漏（每线程一个，仅退出时回收）** | 7 💬 | 长时间运行导致句柄/内存耗尽 | 生产环境稳定性隐患，随会话数线性增长 |
| 8 | [#13018](https://github.com/openai/codex/issues/13018) **Allow deleting threads (not just archive)** | 29 💬 · 105 👍 | ✅ **已关闭/已修复** | 用户数据自主权诉求，归档目录手动清理极不友好 |
| 9 | [#39819](https://github.com/openai/codex/issues/39819) **Add Tool Call Visibility config option** | 3 💬 · 10 👍 | ✅ **已关闭/已修复** | 恢复可折叠工具调用视图的配置开关，兼顾极简/详细偏好 |
| 10 | [#23411](https://github.com/openai/codex/issues/23411) **Code Mode `exec` 不触发 `PreToolUse` hooks** | 9 💬 · 3 👍 | 附带修复补丁，同类问题 #18391 已修 | Hook 生态一致性缺口，影响自动化审计/合规流程 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#40742](https://github.com/openai/codex/pull/40742) **Prepare isolated Guardian reviewer sessions** | ✅ Merged | 引入独立 Guardian 审查会话：策略提示词、低 reasoning effort、回退模型隔离 | 安全/合规审查链路隔离，防止提示词注入污染主会话 |
| 2 | [#40739](https://github.com/openai/codex/pull/40739) **Enterprise IdP identity resolution for MCP OAuth** | ✅ Merged | 解析企业 IdP 会话 → 发现授权元数据 → 强制公共客户端认证 + ID-JAG 交换 | **企业级 MCP 接入关键链路**，支持零信任架构 |
| 3 | [#40722](https://github.com/openai/codex/pull/40722) **Add enterprise ID-JAG exchange for MCP OAuth** | ✅ Merged | 非交互式两步交换：获取 ID-JAG → 换取资源绑定 MCP bearer token | 配合 #40739 完整闭环企业 OAuth 流程 |
| 4 | [#40728](https://github.com/openai/codex/pull/40728) **Honor attachment-owned permissions for MCP servers** | ✅ Merged | MCP 服务器保留所有者权限档案，不再继承线程级沙箱权限 | 最小权限原则落地，多租户/多项目隔离增强 |
| 5 | [#40737](https://github.com/openai/codex/pull/40737) **Preserve MCP tool output as content items** | ✅ Merged | 非结构化结果 → typed function-call output items；结构化保留媒体/加密/未知类型 | 结构化工具调用链路，便于下游 Agent 编排与审计 |
| 6 | [#40718](https://github.com/openai/codex/pull/40718) **Add Bazel repositories for pinned Codex releases** | ✅ Merged | 模块扩展下载 checksum-pinned Linux x86-64 包，生成 `codex`/`package` filegroup | **可复现构建/供应链安全**，支撑内部单体仓与外部分发 |
| 7 | [#40726](https://github.com/openai/codex/pull/40726) **Add telemetry for SQLite log persistence** | ✅ Merged | 批大小、写入延迟、失败、丢弃条目指标；导出器不回写 SQLite | 可观测性基建，定位日志丢失/性能抖动 |
| 8 | [#40713](https://github.com/openai/codex/pull/40713) **Sanitize credentials from Git remote metadata** | ✅ Merged | 新增 `SanitizedGitUrl`，在进入 turn/thread 元数据前剥离用户名/密码/Token | **凭据泄露防御纵深**，防止 URL 经由遥测/日志外泄 |
| 9 | [#40720](https://github.com/openai/codex/pull/40720) **Preserve composer hyperlinks across wrapped lines** | ✅ Merged | 检测可见 URL 并为每个换行片段附加完整 OSC 8 目标 | TUI/终端超链接体验修复，长链接换行不再失效 |
| 10 | [#40710](https://github.com/openai/codex/pull/40710) **Explicit remote executor connection refresh** | ✅ Merged | `Environment::refresh_connection`：Noise 注册表环境主动刷新，不等待旧会话恢复 | 计划内执行器替换/蓝绿部署的无缝切换能力 |

> 注：全部 20 个展示 PR 均于 8/25-8/26 合并，呈现**批量落地**特征，多为基础设施/企业级特性。

---

## 5. 功能需求趋势（从全部 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区信号强度 |
|----------|------------|--------------|
| **Windows 原生体验补齐** | #13993、#28919、#40715、#40700、#39841、#39443、#28392 | ⭐⭐⭐⭐⭐ （阻塞性 Bug 密集、高赞、长期未决） |
| **企业级部署与合规** | #40739、#40722、#40728、#40713、#21615 | ⭐⭐⭐⭐ （PR 侧已大量落地，Issue 侧仍在补齐信任机制） |
| **会话/线程生命周期管理** | #13018✅、#30385、#37041、#40219、#40674、#39823 | ⭐⭐⭐⭐ （删除、搜索、幽灵子代理、服务端删除同步、恢复锁竞争） |
| **MCP 生态稳定性** | #40715、#35485、#17598、#39251 | ⭐⭐⭐ （Transport 解析、进程泄漏、自定义模型兼容、沙箱恢复） |
| **配额/限额透明化** | #34035、#31818✅ | ⭐⭐⭐ （用户对“临时政策”焦虑，需明确承诺） |
| **Hook/工具调用可观测性** | #23411、#32491、#39819✅ |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-08-26

---

## 1. 今日速览

- **新版本发布**：v1.0.81-10 推出插件仪表板（`/plugin`、`/mcp`、`/skills`）全量可用，并统一将 `x` 设为各配置界面的删除键。
- **社区聚焦**：Vim 模式输入（#13，74 👍）与多模型切换（#3709，28 👍）仍是高呼声长期需求；v1.0.81 预发版引入的 `store_memory` 失效（#4535）、MCP 令牌注入丢失（#4604）、预发版更新卡在 1.0.81-9（#4605）等回归问题集中爆发。
- **下一步预发**：PR #4607 已合并，v1.0.81-11 即将推出，预期修复上述回归。

---

## 2. 版本发布

### v1.0.81-10 (2026-08-26)
| 类型 | 内容 |
|------|------|
| **New** | 插件仪表板全量开放：运行 `/plugin`、`/mcp` 或 `/skills` 即可访问；可通过 `PLUGINS_DASHBOARD=false` 或 `copilot plugins` 退出。 |
| **Improved** | 统一删除键：`x` 现在在 `/sandbox config`、`/settings`、`/mcp`、会话对话框、diff 视图等所有交互界面均为删除键。 |

> 🔗 [Release v1.0.81-10](https://github.com/github/copilot-cli/releases/tag/v1.0.81-10)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 关键信息 | 为什么重要 | 社区反应 |
|---|------|----------|------------|----------|
| [#13](https://github.com/github/copilot-cli/issues/13) | **CLI input should have a vi/vim input mode** | 缺乏模态编辑支持，影响 Vim 用户交互效率 | **最高呼声功能**（74 👍），跨版本长期未解决，阻碍资深终端用户采用 | 8 条评论，持续跟进 10 个月 |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **Allow /model to switch between multiple models, including BYOK/local providers** | `/model` 仅列出 GitHub 托管模型，无法切换本地/BYOK 模型 | 直接关联**模型灵活性**，企业与本地部署场景刚需 | 28 👍，6 条评论，2 个月持续热度 |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | **`store_memory` fails in v1.0.81 prereleases: `Instance id is required`** | 原生内存写入器缺少必需的 instance ID，导致记忆存储全面失效 | **v1.0.81 预发版核心回归**，破坏上下文记忆核心能力 | 6 条评论，近期创建（8/20），紧急度高 |
| [#4604](https://github.com/github/copilot-cli/issues/4604) | **MCP: user-configured api.githubcopilot.com/mcp/ server loses injected Copilot token on 1.0.81-10** | 用户自定义 MCP 服务器不再注入 Token，OAuth 又因无动态客户端注册而不可用 | **认证体系破坏**，导致官方 MCP 服务器在最新版本不可用 | 0 评论（刚创建），但阻断生产使用 |
| [#4605](https://github.com/github/copilot-cli/issues/4605) | **latest-prerelease lookup strands users on 1.0.81-9** | 多个预发版 `created_at` 相同，GitHub 排序导致 `-10` 排在 `-2` 后，更新卡住 | **自动更新机制失效**，用户无法通过 `copilot update prerelease` 获取最新修复 | 0 评论，影响所有预发版用户 |
| [#4542](https://github.com/github/copilot-cli/issues/4542) | **Workspace .mcp.json detected but not connected in actual agent session** | `mcp list` 显示已启用，但交互会话中实际未连接 | **MCP 工作区配置虚假成功**，调试成本极高 | 1 👍，2 条评论，复现明确 |
| [#4035](https://github.com/github/copilot-cli/issues/4035) | **Voice installer fails: tries private Azure Artifacts feed causing 401** | 语音运行时安装器尝试从私有源下载公开 NuGet 包 | **语音功能安装完全受阻**，包其实已公开发布 | 4 条评论，持续 1.5 个月未修 |
| [#4272](https://github.com/github/copilot-cli/issues/4272) | **new models are greyed out and can't be selected** | 新模型提示“组织策略禁用”，但设置页无启用入口 | **企业级模型访问受阻**，文档与实际不符 | 3 👍，1 条评论，影响团队采用 |
| [#4560](https://github.com/github/copilot-cli/issues/4560) | **Model "auto" always runs with reasoning effort disabled** | `auto` 模式强制 `reasoningEffort: null`，拒绝任何配置尝试 | **推理能力被静默关闭**，影响复杂任务表现 | 1 条评论，隐性性能损耗 |
| [#4593](https://github.com/github/copilot-cli/issues/4593) | **Archiving a worktree session fails on Windows (os error 32)** | 归档 worktree 会话时进程树未停止导致文件占用，Windows 下必现 | **Windows 工作流核心阻断**，数据丢失风险 | 1 条评论，近期创建（8/24） |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#4607](https://github.com/github/copilot-cli/pull/4607) | **Prepare public prerelease v1.0.81-11** | ✅ Closed | 推进公共仓库时间戳以发布 v1.0.81-11，预期包含上述回归修复。 |

> ⚠️ 过去 24 小时仅此一条 PR 活动，说明团队正集中精力准备 v1.0.81-11 热修复版本。

---

## 5. 功能需求趋势（从全部 45 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|----------|------------|----------|
| **终端交互增强** | #13 (Vim 模式)、#3323 (ask_user 逃生口) | 键盘驱动、模态编辑、交互式提示的灵活性 |
| **模型选择自由度** | #3709 (多模型/BYOK)、#4272 (组织策略)、#4560 (auto 推理关闭) | 统一入口切换云/本地模型、策略透明化、推理参数可控 |
| **MCP 生态完善** | #4542 (工作区 MCP 失效)、#3380 (禁用 repo MCP)、#4604/4606 (认证/Token 问题) | 工作区级发现与实际连接一致、粒度化控制、认证流程健壮 |
| **会话/上下文持久化与共享** | #1153 (导出上下文)、#3537 (跨机器/人共享)、#4268 (退出摘要丢失) | 会话资产化、协作化、状态完整性 |
| **Windows 兼容性** | #4593 (worktree 归档失败)、#4035 (语音安装 401) | 文件锁处理、安装器公开源支持 |
| **预发版分发可靠性** | #4605 (latest-prerelease 排序)、#4535 (预发版回归) | 语义化版本排序、发布质量门禁 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **预发版质量波动大**  
   v1.0.81 系列连续引入 `store_memory` 失效、MCP Token 丢失、预发版更新卡死等阻断性 Bug，开发者呼吁**加强预发版门禁测试**或提供**一键回滚稳定版**命令。

2. **Vim/模态编辑支持缺位**  
   #13 以 74 👍 位居历史首位，但迟迟无排期。终端重度用户认为这是**“能否作为主力 CLI”的门槛**。

3. **模型策略不透明**  
   企业用户遇到“新模型灰化、设置页无入口”（#4272）、`auto` 模式强制关闭推理（#4560），需**策略可视化 CLI 子命令**（如 `copilot policy show`）。

4. **MCP 工作区配置“检测通过、运行不通”**  
   `mcp list` 绿灯却在会话中失效（#4542），调试依赖 `--debug` 日志，**建议增加 `copilot mcp doctor` 诊断命令**。

5. **Windows 文件锁与安装器私有源**  
   worktree 归档失败（#4593）、语音安装 401（#4035）均为 Windows 专属，**CI 缺乏 Windows 端到端测试**是根因。

6. **会话资产化与协作**  
   导出上下文（#1153）、跨机器共享（#3537）呼声稳定，**Session JSONL 标准化与导入/导出 CLI** 是期待方向。

---

> **下一期预告**：关注 v1.0.81-11 是否修复 #4535、#4604、#4605 三大回归，以及 Vim 模式（#13）是否纳入 1.0.82 里程碑。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-08-26

---

## 1. 今日速览
过去 24 小时**无新版本发布**，社区核心关注点集中在**核心工具链可靠性故障**。新增高优先级 Issue #2617 报告 `Edit`/`Write` 工具在 macOS 0.38.0 版本中**静默失败（报成功实未写盘）**，严重阻塞开发流程；旧 Issue #2523 确认上下文压缩机制存在任务状态回滚缺陷。当前无 PR 活动，官方修复响应速度值得持续跟踪。

---

## 2. 版本发布
**过去 24 小时无新 Release 发布。** 当前最新稳定版仍为 `0.38.0`（据 Issue #2617 反馈环境）。

---

## 3. 社区热点 Issues
> 仅过去 24 小时有更新的 2 条 Issue，均为高严重度 Bug，建议优先关注。

| # | 标题 | 状态 | 关键信息 | 重要性评估 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#2617** | **Edit/Write tools report success but never write to disk (0.38.0, macOS)** | `OPEN` `New` | **核心破坏性 Bug**。`Edit`/`Write` 返回成功提示但磁盘零写入，100% 复现。环境：macOS, v0.38.0 (`~/.kimi-code` 安装)。已有 2 条评论讨论排查方向。 | 🔴 **P0 - 阻塞级**<br>基础文件操作失效，直接导致 CLI 不可用，影响所有 macOS 0.38.0 用户。 | [#2617](https://github.com/MoonshotAI/kimi-cli/issues/2617) |
| **#2523** | **[bug] Context compaction bug — Kimi Code reopens an already completed and deleted task** | `OPEN` `Updated` | **上下文/状态管理缺陷**。v0.6.3 (Win) 上下文压缩后错误恢复已删除/完成的任务。附带 PDF 复现录像。今日有新评论跟进。 | 🟠 **P1 - 严重**<br>破坏会话状态一致性，导致重复工作或逻辑混乱，长任务场景高频触发。 | [#2523](https://github.com/MoonshotAI/kimi-cli/issues/2523) |

---

## 4. 重要 PR 进展
**过去 24 小时无 Pull Request 创建或更新。**
> ⚠️ **关注点**：针对 #2617 这种 P0 级回归，官方仓库当前无可见的修复 PR 进度，建议关注后续 `main` 分支提交或 Hotfix 分支动态。

---

## 5. 功能需求趋势
基于近期高频 Issue 类型（含历史积压）推断，社区核心诉求集中于 **“基础设施稳定性”** 而非新功能：

1.  **工具链原子性与可靠性** (`#2617`)：文件系统操作必须保证 **Write-Ahead Log / 事务语义**，彻底消除“虚假成功”返回。
2.  **会话状态持久化一致性** (`#2523`)：上下文压缩、任务检查点、历史记录需引入 **版本向量或 CRDT** 机制，防止状态回滚/分叉。
3.  **跨平台兼容性基线**：macOS (Arm/Intel) 与 Windows (NTFS/WSL) 的文件锁、路径解析、权限模型差异需纳入 CI/CD 矩阵测试。
4.  **可观测性增强**：开发者缺乏工具侧日志/埋点（如 `#2617` 难以定位是 SDK、Node 层还是 Rust 核心问题），呼吁内置 `--debug-fs` 或结构化日志输出。

---

## 6. 开发者关注点（痛点与高频需求）

| 痛点分类 | 典型反馈 | 影响面 | 建议优先级 |
| :--- | :--- | :--- | :--- |
| **静默数据丢失** | `#2617` "Returns success but nothing written to disk" | **全量 macOS 0.38.0 用户** | **最高**<br>信任度崩塌风险，需 Hotfix 回滚或紧急补丁。 |
| **会话状态幻觉** | `#2523` "Reopens completed/deleted task after compaction" | 长会话/复杂任务用户 | **高**<br>导致 Token 浪费、逻辑错误、安全风险（重复执行副作用）。 |
| **版本回归缺乏守门** | 0.38.0 引入核心工具回归，无 PR/Changelog 说明变更 | 所有升级用户 | **高**<br>建议引入 `tool-integration` 自动化测试套件作为发布门禁。 |
| **排查工具缺失** | 无内置机制验证工具调用真实副作用 | 插件/二次开发者 | **中**<br>提供 `kimi-code doctor --verify-tools` 诊断命令。 |

---

> **分析师备注**：当前版本 `0.38.0` 存在 **P0 级文件系统写入回归**，建议生产环境用户**暂缓升级**或回退至 `0.37.x`，并锁定 `package.json` 依赖版本。等待官方发布 `0.38.1` Hotfix 并验证 `#2617` 修复后再升级。建议关注 `main` 分支 `packages/core/src/tools/` 目录近期提交记录以确认修复进度。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-08-26

---

## 1. 今日速览

- **核心故障持续发酵**：Ox Alpha Free / Zen 免费模型在调用工具时持续报错 "Endpoint is unavailable"（Issue #44300, #44850, #45073, #45020），已影响大量免费用户，官方尚未给出修复时间表。
- **严重资源泄漏曝光**：自动更新器因版本检测逻辑缺陷，导致 `opencode2 serve --service` 进程每 10 分钟重装一次，单机累计写入 266 GB 缓存（Issue #45087），需紧急热修复。
- **生态扩展加速**：合并 3 个新模型提供商原生支持（Groq, DeepInfra, Cerebras, Together AI），并新增 Azure CLI 认证、目录级项目识别、深链接打开会话等核心功能，v2 架构落地明显提速。

---

## 2. 版本发布

### v1.18.23 (2026-08-25)
**类型**：热修复补丁  
**核心变更**：
- **Cloudflare AI Gateway 路由修复**：解决第三方提供商（非 Workers 模型）通过网关 REST API 调用失败的问题 (@superhighfives)
- **Anthropic 模型兼容性**：修复通过 Cloudflare AI Gateway 使用 Anthropic 模型时，点分模型 ID（如 `claude-haiku-4.5`）未正确转换为破折号 slug 的问题

> 🔗 [Release v1.18.23](https://github.com/anomalyco/opencode/releases/tag/v1.18.23)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 核心问题 | 优先级 |
|---|-------|--------|----------|--------|
| 1 | **[#44300](https://github.com/anomalyco/opencode/issues/44300)** Zen API: 免费模型工具调用全面失效 | 💬13 👍5 | `x-preview-f-free` / `ox-alpha-free` 只要带 `tools` 数组即报 "Endpoint is unavailable"，影响所有免费用户 | 🔴 **P0 阻塞** |
| 2 | **[#45087](https://github.com/anomalyco/opencode/issues/45087)** 自动更新器疯狂重装吞噬 266 GB 磁盘 | 💬4 | `opencode2 serve --service` 进程每 10 分钟重装，缓存目录 `~/.npm/_cacache` 爆增，需立即止损 | 🔴 **P0 严重** |
| 3 | **[#33618](https://github.com/anomalyco/opencode/issues/33618)** Qwen 3.7 Plus/Max (OpenRouter) 工具调用名为空 | 💬10 👍4 | 新版 Qwen 通过 OpenRouter 调用工具时名为 `""`，导致重试风暴与会话中止 | 🟠 **P1 高** |
| 4 | **[#19143](https://github.com/anomalyco/opencode/issues/19143)** Desktop App 缺失消息搜索 | 💬9 👍8 | 长会话无法检索历史，用户强烈呼声最高的功能缺失 | 🟡 **P2 功能** |
| 5 | **[#43277](https://github.com/anomalyco/opencode/issues/43277)** 会话永久卡死，重启也无法恢复 | 💬5 | 正常使用中会话拒绝新消息，跨重启持久化，无法通过重启服务恢复 | 🔴 **P0 数据** |
| 6 | **[#14524](https://github.com/anomalyco/opencode/issues/14524)** 模型选择器显示成本 | 💬5 👍11 | TUI/Desktop 模型列表无价格信息，用户无法直观权衡成本 | 🟡 **P2 UX** |
| 7 | **[#7712](https://github.com/anomalyco/opencode/issues/7712)** 支持编辑上下文删除消息 | 💬4 👍12 | 模型陷入死胡同时需手动清理上下文，现无入口 | 🟡 **P2 功能** |
| 8 | **[#35434](https://github.com/anomalyco/opencode/issues/35434)** TUI 多问题工具调用静默失败 | 💬7 | v1.17.13 回归：`question` tool 多问题时 Enter 无响应，单问题正常 | 🟠 **P1 回归** |
| 9 | **[#44910](https://github.com/anomalyco/opencode/issues/44910)** Zen Go `/v1/responses` 非 DeepSeek 模型全 500 | 💬2 | Go 网关新增端点仅 DeepSeek 可用，mimo/glm/ox-alpha 全挂 | 🔴 **P0 服务** |
| 10 | **[#39632](https://github.com/anomalyco/opencode/issues/39632)** v2 Prompt 输入框 IME 首键破坏 | 💬3 👍2 | 中日韩输入法首字符直接落格，无法组合，旧布局正常 | 🟠 **P1 i18n** |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心内容 | 影响面 |
|---|----|------|----------|--------|
| 1 | **[#45107](https://github.com/anomalyco/opencode/pull/45107)** feat(core): add directory projects | 🟢 Open | 无标记目录按规范化绝对路径生成确定性 ID 视为独立项目；Git/Hg 仓库优先保留现有语义 | 核心架构、项目发现 |
| 2 | **[#45108](https://github.com/anomalyco/opencode/pull/45108)** feat(ai): add native Groq and DeepInfra providers | 🟢 Open | 基于 OpenAI Chat 协议新增 Groq、DeepInfra 一级提供商，Core 直接解析 SDK 标识 | 模型生态扩展 |
| 3 | **[#45098](https://github.com/anomalyco/opencode/pull/45098)** feat(ai): add native Cerebras and Together AI providers | ✅ Closed | 同批次合并，新增 Cerebras、Together AI 原生支持 | 模型生态扩展 |
| 4 | **[#45106](https://github.com/anomalyco/opencode/pull/45106)** fix(app): stream running shell tool output | 🟢 Open | Desktop 会话 UI 通过现有端口轮询增量流式展示 Shell 输出，与 TUI 对齐 | Desktop UX、实时反馈 |
| 5 | **[#45103](https://github.com/anomalyco/opencode/pull/45103)** feat(desktop): open existing sessions from deep links | 🟢 Open | 新增 `opencode://open-session?server=...&session=...` 深链接，Copy Link 直接生成 | Desktop 分享协作 |
| 6 | **[#45086](https://github.com/anomalyco/opencode/pull/45086)** feat(core): support Azure CLI authentication | 🟢 Open | V2 Azure 提供商集成 Azure CLI 登录态（Entra ID），保留 API Key 回退 | 企业认证、Azure 生态 |
| 7 | **[#45079](https://github.com/anomalyco/opencode/pull/45079)** feat(opencode): support Azure CLI authentication | 🟢 Open | 旧版 Azure 提供商同步增加 CLI 认证路径 | 兼容性、企业认证 |
| 8 | **[#45002](https://github.com/anomalyco/opencode/pull/45002)** feat(core): repair malformed tool arguments before validation | 🟢 Open | 内置插件在校验前自动修补常见工具参数畸形（缺键、类型错配），仅用无歧义 schema 信息 | 容错性、Agent 稳健性 |
| 9 | **[#44845](https://github.com/anomalyco/opencode/pull/44845)** test(core): isolate host configuration and credentials | ✅ Closed | 测试套件彻底与开发者 $HOME、配置、凭证、MCP、npm 解耦，`bun test` 零副作用 | CI 稳定性、开发体验 |
| 10 | **[#45100](https://github.com/anomalyco/opencode/pull/45100)** fix(tui): detect clipped transcript bottom | ✅ Closed | 修复终端最后一行被裁剪时仍误判“已在底部”，导致自动滚动失效 | TUI 交互细节 |

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声 | 备注 |
|----------|------------|----------|------|
| **模型成本透明化** | #14524 (👍11) | 极高 | 用户在模型选择器、对话中均需实时见到预估成本 |
| **上下文可编辑/可清理** | #7712 (👍12), #19143 (👍8) | 高 | 长会话下“删除/搜索/编辑”上下文成为刚需 |
| **多模态/国际化完善** | #39632 (IME), #42447 (Hebrew) | 中 | v2 输入框 IME 破坏、缺失 RTL 语言支持 |
| **企业级

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-26

> 数据来源：`github.com/earendil-works/pi` | 统计周期：过去 24 小时（至 2026-08-25/26）

---

## 1. 今日速览

- **无新版本发布**，社区活动集中在 **Issue 修复与 PR 合并**，共计 50 个 Issue 更新、31 个 PR 更新。  
- 核心主题聚焦于 **Windows 体验统一**、**TUI 渲染稳定性**、**Agent 会话可靠性**、**多模态图片处理** 以及 **新模型/Provider 接入**。  
- 高热度 Issue `#7547`（Windows 策略讨论，49 条评论）揭示社区对跨平台一致性的强烈诉求；多个“untriaged”快速修复 PR 表明维护团队响应极快。

---

## 2. 版本发布

> 过去 24 小时无 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 核心内容 | 为何关键 |
|---|-------|------|------|----------|----------|
| 1 | [#7547 Windows 策略讨论](https://github.com/earendil-works/pi/issues/7547) | OPEN | 💬49 👍2 | 讨论 Pi 在 Windows 的运行方式（WSL、原生、PowerShell 版本等），寻求统一最佳实践 | **战略级议题**，关乎数亿 Windows 开发者的开箱即用体验 |
| 2 | [#8584 TUI 流式输出行损坏](https://github.com/earendil-works/pi/issues/8584) | CLOSED | 💬9 👍5 | 长工具输出后，Assistant 文本变成“每词一行” | **严重 UX 回归**，已修复合入 |
| 3 | [#5886 AgentSession 结算/续跑生命周期 Bug](https://github.com/earendil-works/pi/issues/5886) | OPEN | 💬9 👍4 | 透传 transcript 继续跑时出现各类竞态与状态不一致 | **核心架构痛点**，关联长任务可靠性 |
| 4 | [#7855 “Response was truncated before completion”](https://github.com/earendil-works/pi/issues/7855) | CLOSED | 💬7 👍4 | 任意 OpenAI 兼容 API 随机报 truncation，需手动 continue | **可用性阻断**，已标记 no-action（可能上游问题） |
| 5 | [#8582 内置 powershell 工具交互模式仍用 5.1](https://github.com/earendil-works/pi/issues/8582) | CLOSED | 💬6 | 有 `pwsh` 却 fallback 到 Windows PowerShell 5.1 | **Windows 原生体验细节**，已修复 |
| 6 | [#8468 GitHub Copilot 登录超时](https://github.com/earendil-works/pi/issues/8468) | CLOSED | 💬6 | `The operation was aborted due to timeout` | **热门集成受阻**，等待 `#8254` 发布 |
| 7 | [#6596 Node.js 24 `taskkill` ENOENT](https://github.com/earendil-works/pi/issues/6596) | OPEN | 💬5 | `spawn("taskkill")` 找不到可执行文件 | **运行时兼容性**，in-progress，影响 CI/生产 |
| 8 | [#8456 Gemini 3.7 Flash 拒绝 MINIMAL thinking](https://github.com/earendil-works/pi/issues/8456) | CLOSED | 💬4 👍2 | `/tree` 摘要因 thinking level 不支持失败 | **新模型适配细节**，已修复 |
| 9 | [#8138 Codex 瞬态错误重试分类](https://github.com/earendil-works/pi/issues/8138) | OPEN | 💬4 | `Sorry, something went wrong` 应判定为可重试 | **提升 Codex 稳定性**，社区贡献提案 |
| 10 | [#6600 npm 11.16.0 阻断扩展更新脚本](https://github.com/earendil-works/pi/issues/6600) | OPEN | 💬4 | 默认拒绝 `install` 脚本导致 `pi update --extensions` 失败 | **扩展生态阻塞**，in-progress |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | [#8623 read tool 修正行计数](https://github.com/earendil-works/pi/pull/8623) | CLOSED | `split("\n")` 导致尾换行多算一行，改用 `splitLines()` | [#7329](https://github.com/earendil-works/pi/issues/7329) |
| 2 | [#8642 Bedrock OpenAI 模型图片提升](https://github.com/earendil-works/pi/pull/8642) | CLOSED | 将 `toolResult.content` 中的图片提升为同级 user content block | [#8643](https://github.com/earendil-works/pi/issues/8643) |
| 3 | [#8629 激进工具执行](https://github.com/earendil-works/pi/pull/8629) | CLOSED | 对显式可丢弃的 `read` 调用在 `toolcall_end` 即启动，复用结果 | 性能优化实验 |
| 4 | [#8627 cwd-sensitive 工具使用 `ctx.cwd`](https://github.com/earendil-works/pi/pull/8627) | CLOSED | `read/write/edit/grep/glob/ls` 统一落实到执行时 cwd | 路径解析一致性 |
| 5 | [#8639 新增 Opper Provider](https://github.com/earendil-works/pi/pull/8639) | CLOSED | 内置 OpenAI-compat Provider，含模型目录生成、测试矩阵 | 生态扩展 |
| 6 | [#8633 / #8650 省略无工具时的 `tool_choice`](https://github.com/earendil-works/pi/pull/8633) | CLOSED | 修复 xAI Grok 等厂商拒绝 `tool_choice: "none"` 且无 tools 的 400 | 压缩/溢出压缩解锁 |
| 7 | [#8570 保留 Codex 线程亲和性头](https://github.com/earendil-works/pi/pull/8570) | CLOSED | 补全 `thread-id` 等头，对齐上游 Codex 客户端行为 | Codex 会话复用 |
| 8 | [#8615 保留交织 user content 顺序](https://github.com/earendil-works/pi/pull/8615) | OPEN | `sendUserMessage` 的 text/image 顺序透传至 idle prompt / steer | 多模态上下文保真 |
| 9 | [#8613 并发 `/share` 隔离](https://github.com/earendil-works/pi/pull/8613) | OPEN | 每次导出建立唯一临时目录，

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-08-26

---

## 1. 今日速览

今日无新版本发布。社区核心精力集中在 **核心稳定性修复**（推理努力度钳制、循环检测误判、压缩逻辑）、**多智能体协作增强**（后台代理协调、Review 流水线隔离）以及 **WebShell 体验重构**（仅保留紧凑模式、Token 面板、工作流驾驶舱）。自动化修复机制（`autofix/takeover`）高频介入 PR 流程，CI/CD 治理（ENOSPC、ossutil 复用、Vitest 超时）同步推进。

---

## 2. 版本发布

> 过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 核心内容 | 关注理由 / 社区反应 |
|---|-------|----------|---------------------|
| 1 | [#9459](https://github.com/QwenLM/qwen-code/issues/9459) **`/effort max` 导致 OpenAI 兼容提供商全链路 400** | `clampReasoningEffort()` 未钳制 `max`，一旦设置后续所有请求失败，需切回 tier 恢复。**P1 / Closed** | **阻断性 Bug**，影响所有 OpenAI 兼容模型用户；修复后标记 Closed，回归风险需关注。 |
| 2 | [#8097](https://github.com/QwenLM/qwen-code/issues/8097) **后台 Explore 子代理协作三大缺口** | 并行子代理重复工作、过早完成、`send_message` 非交互式。**P2 / Open** | 多智能体编排核心痛点，关联 `roadmap/multi-agent`，8 条评论显示社区强烈诉求。 |
| 3 | [#6762](https://github.com/QwenLM/qwen-code/issues/6762) **Skill 上下文生命周期管理** | SKILL.md 永久驻留对话历史，无卸载/压缩机制。**P2 / Open** | 上下文窗口压力源头，关联 `roadmap/context-performance`，长期高频需求。 |
| 4 | [#9198](https://github.com/QwenLM/qwen-code/issues/9198) **长跑 OOM & tmux 终端失控** | 1T 内存服务器跑周出 OOM，终端按键乱码、鼠标失效。**P2 / Open** | 疑似原生内存泄漏或 WASM/Node 交互问题，Kimi Code 正常，对比明显。 |
| 5 | [#9309](https://github.com/QwenLM/qwen-code/issues/9309) **压缩逻辑异常：`/compress-fast` 后再 `/compress` 反增 Token** | 170k→70k 后再压缩反弹，**P3 / Closed** | 压缩幂等性缺陷，可能与上下文分段策略有关。 |
| 6 | [#9733](https://github.com/QwenLM/qwen-code/issues/9733) **循环检测误杀合法验证周期** | Write→Run→Edit→Re-run 等推进态序列被误判，终止后不可自动恢复。**P2 / Open** | 自动化流水线核心阻滞，需人工介入恢复，严重影响无人值守场景。 |
| 7 | [#9827](https://github.com/QwenLM/qwen-code/issues/9827) **`permissions.allow` 仅限制 CLI 显示，API 仍发全量工具集** | 安全/Token 双重风险，**P2 / Closed** | 权限模型与模型端不一致，已修复但需验证回归。 |
| 8 | [#9757](https://github.com/QwenLM/qwen-code/issues/9757) **OpenRouter 下 Auto Mode 分类器 Stage 1 不可用** | 回退手动审批，**P2 / Closed** | 多模型路由兼容性缺口，影响生产环境自动化比例。 |
| 9 | [#10051](https://github.com/QwenLM/qwen-code/issues/10051) **原生 DAP 集成需求** | 让 Agent 能以编程方式驱动调试器，**P3 / Open** | 从“终端解析”向“运行时可观测”进化的关键特性，4 条评论讨论热烈。 |
| 10 | [#10057](https://github.com/QwenLM/qwen-code/issues/10057) **`review cleanup` 前缀清理误删并发 Review 产物** | `src/foo` 与 `src/foo-bar` token 冲突，**P2 / Open** | 并发 Review 场景数据竞争，刚创建即获 2 评论，修复迫切。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 类型 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#9995](https://github.com/QwenLM/qwen-code/pull/9995) | **Fix** | 中途媒体附件保留 Bridge 自身超时/重试策略，保持取消信号透传 | 多模态交互稳定性 |
| 2 | [#8583](https://github.com/QwenLM/qwen-code/pull/8583) | **Feat** | 实验性 Session Workflow Cockpit：计划捕获→审批→依赖图→Agent 执行→WebShell 全链路 | 可视化编排入口，`autofix/takeover` |
| 3 | [#9406](https://github.com/QwenLM/qwen-code/pull/9406) | **Feat** | 无头守护进程隐藏 Workspace Browse，改为能力广播 | 安全/服务端部署规范 |
| 4 | [#9761](https://github.com/QwenLM/qwen-code/pull/9761) | **Feat** | Review 延期建议离线可恢复，不再仅依赖 PR 页面 | 审查知识沉淀 |
| 5 | [#8927](https://github.com/QwenLM/qwen-code/pull/8927) | **Feat** | 引入 `sessionRotation`（`maxTurns`/`maxAge`）绑定会话生命周期 | 长会话上下文污染治理 |
| 6 | [#9305](https://github.com/QwenLM/qwen-code/pull/9305) | **Fix** | VP 模式短内容底部对齐，消除 Composer 上方留白 | 终端 UI 体验 |
| 7 | [#9993](https://github.com/QwenLM/qwen-code/pull/9993) | **Feat** | WebShell 仅保留紧凑模式，移除切换开关/快捷键/i18n | UI 简化，减少维护面 |
| 8 | [#9940](https://github.com/QwenLM/qwen-code/pull/9940) | **Fix** | 多轮 Review 复贴 Findings 回原线程，修复标记自动回流 PR | 审查协作闭环 |
| 9 | [#9988](https://github.com/QwenLM/qwen-code/pull/9988) | **Feat** | WebShell 新增 Session Token Usage 面板：总量/模型/子代理/工具维度 | 成本可观测性 |
| 10 | [#9659](https://github.com/QwenLM/qwen-code/pull/9659) | **Feat** | 本地 Review-Fix 循环引入内容锚点增量轮次（2/2） | Review 效率指数级提升 |

> **注**：多数 PR 标记 `autofix/takeover`，显示自动化修复流水线已常态化参与核心模块演进。

---

## 5. 功能需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 |
|----------|------------|--------------|
| **多智能体编排与隔离** | #8097, #9784, #9659 | ⭐⭐⭐⭐⭐ 核心路线图 |
| **上下文/Token 精细化治理** | #6762, #8927, #10015, #9309 | ⭐⭐⭐⭐ 长跑稳定性刚需 |
| **Review 流水线工程化** | #9761, #9940, #9768, #9902, #10057 | ⭐⭐⭐⭐ 代码审查自动化深水区 |
| **原生调试/运行时可观测** | #10051 (DAP), #9198 (OOM/终端) | ⭐⭐⭐ 从静态分析向动态调试延伸 |
| **WebShell 产品化体验** | #8583, #9993, #9988, #10014, #9769 | ⭐⭐⭐ 替代 VS Code 扩展的独立入口 |
| **多模型/提供商兼容性** | #9459, #9757, #10027, #9827 | ⭐⭐⭐ 生态中立性基石 |
| **CI/CD 自治与成本控制** | #10035, #10019, #10050, #10055 | ⭐⭐ 研发效能内循环 |

---

## 6. 开发者关注点（痛点与高频诉求）

1. **“设置后不可逆/难恢复”**  
   - `/effort max` 一键毁会话（#9459）、循环检测误杀后无法自愈（#9733）、Review 锚点丢失永久回退全量（#9902）。

2. **“看不见、管不住”的后台自动化**  
   - Cron 任务静默触发无可见性（#5823）、后台子代理协作无编排（#8097）、权限允许列表仅限 CLI 显示（#9827）。

3. **上下文膨胀无治理工具**  
   - Skill 永久驻留（#6762）、压缩反增 Token（#9309）、无 Token 用量可视化（新增 PR #9988 回应）。

4. **原生环境集成缺失**  
   - Windows 符号链接保护失效（#8227）、MCP SSE 挂起丢权限（#10056）、DAP 调试协议缺席（#10051）。

5. **CI/CD 资源抖动拖慢交付**  
   - ENOSPC 瞬时磁盘满（#10035）、ossutil 重复封装（#10019）、Vitest RPC 超时（#10050）。

---

> **下一观测点**：`#9459` 修复回归验证、`#8097` 多智能体协作 PR 落地、`#8927` sessionRotation 实战反馈、WebShell 紧凑模式单一化后的用户适应度。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 | 2026-08-26

---

## 1. 今日速览

v0.9.12 发布倒计时进入**代码冻结阶段**，集成分支 #5576 已完成 72 个提交的阻塞项修复，仅待版本号递增与 changelog 门禁通过。社区并行推进三大基建：`/relaunch` 热重启、控制套接字、生命周期事件流，彻底解决长期运行会话的外部监管与自更新痛点。Provider 中立性审计（#5588）清理 18 处 DeepSeek 专属硬编码，为多模型生态扫清障碍。

---

## 2. 版本发布

> 过去 24 小时无新 Release。v0.9.12 RC 正在集成分支 `#5576` 验证，预计近日切 Tag。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心价值 | 社区热度 | 链接 |
|---|-------|----------|----------|------|
| 1 | **EPIC-005: TUI Crate 分解** | 将单体 `codewhale-tui` 拆分为独立 crate，解耦渲染/事件/命令，利于测试与二进制体积控制 | 16 条评论，跨 6 周持续更新 | [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) |
| 2 | **Provider 中立性：18 处 DeepSeek 专属门控** | 审计 279 文件 2281 行 `deepseek` 出现，修复 NVIDIA NIM 环境变量泄漏等 18 处概念上应通用的逻辑 | 5 条评论，维护者 Hmbown 主导 | [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) |
| 3 | **控制面：会话级 Unix Socket (JSON-RPC)** | 为外部监管器（CI/自动化/终端多路复用器）提供 `message/interrupt/relaunch/status` 原语，解锁无人值守运行 | 3 条评论，已由 #5594 闭环 | [#5533](https://github.com/Hmbown/CodeWhale/issues/5533) |
| 4 | **`/relaunch`：运行中会话热切新二进制** | 消除 `/update` 后需手动重启的摩擦，实现进程内自替换，保持终端/遥测/状态不丢失 | 4 条评论，已由 #5593 合并 | [#5532](https://github.com/Hmbown/CodeWhale/issues/5532) |
| 5 | **生命周期事件外发箱** | JSONL + Webhook 双通道输出 `turn_stalled/turn_failed` 等事件，配合 #5533 实现完整可观测性 | 3 条评论，已由 #5592 合并 | [#5531](https://github.com/Hmbown/CodeWhale/issues/5531) |
| 6 | **压缩：结构化生存契约** | 为上下文压缩制定显式契约（Plan/Todo/Subagent 状态保留规则），解决长会话可靠性核心短板 | 4 条评论，长期跟踪 | [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) |
| 7 | **后台 `git` 命令竞争 `.git/index.lock`** | 频繁 `git status` 等只读探测导致用户 `git commit` 报锁冲突，计划替换为 `gix` 纯 Rust 实现 | 2 条评论，引出 #5618 | [#5617](https://github.com/Hmbown/CodeWhale/issues/5617) |
| 8 | **文档中文化 EPIC** | 系统性重构 `docs/` 目录，消除机翻错误与过期内容，覆盖不断增长的中文用户群 | 2 条评论，持续推进 | [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) |
| 9 | **事件粒度审计：Turn 边界卡顿** | 识别 20+ 仅在 `TurnComplete` 刷新的面板，推动逐步迁移至 per-step 流式更新 | 2 条评论，技术债清单 | [#5581](https://github.com/Hmbown/CodeWhale/issues/5581) |
| 10 | **MiniMax/Xiaomi 首配 404** | 新装用户配置两模型即报错，暴露内置 endpoint 模板缺陷，已热修复 | 3 条评论，已关闭 | [#5601](https://github.com/Hmbown/CodeWhale/issues/5601) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心变更 | 关联 Issue |
|---|----|------|----------|------------|
| 1 | **#5576 v0.9.12 集成分支** | Open (WIP) | 72 commits：Provider 中立性、Workflows 修复、Fleet 成本上限、Sandbox 读权限收敛、MCP OAuth 刷新等所有阻塞项 | #5573 (tracker) |
| 2 | **#5616 移 `git_status/git_diff` 离异步执行器** | Merged | 阻塞 tokio worker pool 的同步 `Command::output()` 改为 `spawn_blocking`，消除会话无感挂起 | #5617 |
| 3 | **#5594 控制 Socket Part D (Final)** | Merged | 单会话 Unix JSON-RPC Socket，支持 `enabled = true` 即插即用，零破坏现有行为 | #5533 |
| 4 | **#5593 `/relaunch` Part C** | Merged | 进程内 `exec` 替换二进制，保留终端/遥测/状态，配合 `/update` 实现一键热更 | #5532 |
| 5 | **#5592 生命周期外发箱 Part B** | Merged | `[lifecycle_outbox]` 配置表，JSONL + Webhook 双通道，覆盖 TUI 与 `codewhale exec` | #5531 |
| 6 | **#5608 / #5611 聚焦块操作 & Tool/MCP Token 成本展示** | Merged | `y/Y/Enter/r` 四键位复制/全屏/原文；`/context` 新增工具目录与 MCP 逐项估算 | #5551, #5553 |
| 7 | **#5613 修正英文文档 + 首批 Tier-2 中译** | Merged | 修复 `provider_defaults.rs` 等源码不一致，补齐 `docs/zh_hans/` 关键页面 | #5482 |
| 8 | **#5614 CI：Release 门禁强制失败** | Merged | `check-versions.sh` 抓取上一 Tag 失败时不再静默跳过 receipt/check-contributor 校验 | — |
| 9 | **#5584 子 Agent 审批凭证持久化** | Merged | 继承会话级 receipt store，`Asked` 入库前置，终态落盘后再关闭 prompt | #5543 |
| 10 | **#5610 Windows 逐字路径保留** | Merged | 修复 POSIX word-split 破坏 `\\?\` 前缀，解锁 FEAT-019 两项 CI 红单元 | #5609 |

---

## 5. 功能需求趋势（从 Issue/PR 聚类推导）

| 趋势 | 代表 Issue/PR | 信号强度 |
|------|---------------|----------|
| **长会话工程化** | `/relaunch`、控制 Socket、生命周期外发箱、压缩契约 (#4394) | ⭐⭐⭐⭐⭐ |
| **多 Provider 生态** | Provider 中立性审计 (#5588)、Opencode 模型列表自动更新 (#5607)、MiniMax/Xiaomi 修复 (#5601) | ⭐⭐⭐⭐ |
| **可观测与成本透明** | Tool/MCP Token 成本展示 (#5553/#5611)、Fleet 成本天花板 (#5567)、Detached 成本回收 (#5597) | ⭐⭐⭐⭐ |
| **安全边界收敛** | Sandbox 读权限 Opt-in deny-list (#5568)、子 Agent 审计 ID 去重 (#5615)、MCP OAuth 刷新 (#5572) | ⭐⭐⭐ |
| **中文本地化** | 文档 EPIC (#5482)、Tier-2 翻译 (#5613)、REBRAND.md 纠错 (#5564) | ⭐⭐⭐ |
| **性能与原生化** | `git` CLI → `gix` (#5617/#5618)、rio-vt/tower-http 依赖升级 (#5539/#5387) | ⭐⭐ |

---

## 6. 开发者关注点（痛点与高频诉求）

1. **“别让我手动重启”** —— `/update` 后仍需手动重启是最大摩擦，`/relaunch` 直接击中痛点（#5532 4 💬）。
2. **“我想在 CI 里跑 CodeWhale”** —— 缺乏标准化控制面与事件流，#5533/#5531 合并后终于可编程化监管。
3. **“压缩后丢上下文”** —— 长会话压缩缺乏契约，Plan/Todo/Subagent 状态易丢（#4394 持续 40+ 天）。
4. **“Git 锁冲突太频繁”** —— 后台探测与用户操作争 `.git/index.lock`，推动 `gix` 替代方案（#5617/#5618）。
5. **“文档英文化门槛高”** —— 中文用户占

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*