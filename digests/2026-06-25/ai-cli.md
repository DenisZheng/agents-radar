# AI CLI 工具社区动态日报 2026-06-25

> 生成时间: 2026-06-25 00:39 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向分析报告

**2026-06-25 | 基于 GitHub 社区公开数据**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**"从功能竞速转向质量深耕"**的关键拐点。各工具在核心能力（Codex、Claude Code、Gemini CLI、Copilot CLI、Kimi Code、OpenCode、Pi、Qwen Code、DeepSeek TUI）上已形成差异化定位，但共同面临三大主题：**安全与信任**成为用户留存的基础门槛，**上下文效率与成本控制**决定产品竞争力，**跨平台与 IDE 平等化**则反映企业级市场的现实需求。社区反馈正从"能不能做"升级为"做起来是否可靠、可观测、可负担"。

---

## 2. 各工具活跃度对比

| 工具 | Issues 活跃度 | PR 活跃度 | 近期 Release | 当前阶段 |
|------|:---:|:---:|---|---|
| **Claude Code** | 🔴 高 | 🔴 高 | v2.1.191（当日迭代） | 快速迭代 + 安全加固 |
| **OpenAI Codex** | 🔴 高 | 🔴 高 | rust-v0.142.1 + 5 个 alpha | 密集开发，0.143.0 功能冻结 |
| **Gemini CLI** | 🟠 中高 | 🟠 中高 | 无新 Release | 安全/稳定性专项修补期 |
| **Copilot CLI** | 🟡 中 | 🟡 中 | v1.0.65（前一日） | 功能迭代稳定期 |
| **Kimi Code CLI** | 🟡 中 | 🟡 中 | 无新 Release | 关键 Bug 处置期 |
| **OpenCode** | 🟡 中 | 🟠 中高 | v1.17.10（当日迭代） | MCP 生态快速扩展 |
| **Pi** | 🟡 中 | 🟡 中 | 无新 Release | 稳定性加固 + 新 Provider |
| **Qwen Code** | 🟠 中高 | 🟠 中高 | v0.19.2（当日迭代） | 安全/后台任务密集修复 |
| **DeepSeek TUI** | 🟡 中 | 🟠 中高 | 无新 Release（v0.8.65 里程碑收尾） | 架构落地点，稳定性转向 |

> **注**：Issues/PR 活跃度基于 24 小时内变动量级判断，🔴 代表单日 ≥30 条更新，🟠 代表 15–30 条，🟡 代表 <15 条。

---

## 3. 共同关注的功能方向

以下方向在多个工具社区中同步出现，具有高度行业共性：

| 功能方向 | 涉及工具 | 核心诉求 |
|---------|---------|---------|
| **安全加固与注入防护** | Claude Code（URL/命令注入）、Gemini CLI（路径绕过/密钥泄露）、Qwen Code（路径遍历）、DeepSeek TUI（模型行为边界）、Pi（主机名泄露） | 社区对 Agent 自主操作的安全边界正在收紧，插件生态与用户输入处理被视为高危面 |
| **上下文管理与 Token 效率** | Codex（后台轮询浪费、rate-limit 突变）、Claude Code（Compaction 主动触发）、Gemini CLI（子 Agent 挂起）、Kimi Code（全量重载系统提示）、OpenCode（/unavailable tool 循环） | 长上下文场景下，用户对"被动等待"失去耐心，要求主动干预、增量缓存、智能压缩 |
| **多 Provider / 模型路由** | DeepSeek TUI（多 Provider 路由架构）、OpenCode（MCP OAuth/多 Provider）、Pi（Bedrock Mantle、本地 LLM）、Copilot CLI（企业代理/Kerberos） | 企业用户拒绝厂商锁定，要求跨云、跨平台、跨模型的统一调度能力 |
| **Windows / 跨平台平等化** | Codex（沙箱/编辑器/断电恢复三大 Windows Bug）、Claude Code（Defender 冲突/安装错误）、OpenCode（Bun 段错误/PATH 丢失）、Copilot CLI（Linux AppImage 库泄漏） | Windows 长期处于"二等公民"体验，多个平台持续收到兼容性投诉 |
| **Hook / 自动化体系对齐** | Codex（对标 Claude Code 29+ Hooks）、Claude Code（MCP 热重载）、Copilot CLI（插件 Hook 静默执行）、Gemini CLI（子 Agent 不主动用技能） | 成熟用户要求 CI/CD 级别的细粒度自动化控制，而非 IDE 内的被动触发 |
| **多账户与多用户** | Claude Code（👍372 多账户切换）、Codex（service_tier 控制）、Copilot CLI（企业集中配置）、Qwen Code（任务清单跨设备共享） | 从个人工具向团队协作场景渗透，账户隔离与资源共享成为刚需 |

---

## 4. 差异化定位分析

| 工具 | 核心侧重 | 目标用户 | 技术路线 |
|-----|---------|---------|---------|
| **Claude Code** | 上下文管理 + IDE 平等化 + 多账户生态 | 全栈开发者、JetBrains/GitLab 企业用户 | TypeScript 驱动，安全 PR 精细，社区运营成熟 |
| **OpenAI Codex** | 状态持久化（WorldState）+ Ultra 推理 + 多 Agent | 自动化工作流构建者、长任务执行者 | Rust 实现，架构层重构中（3-PR 系列），设计深度显著 |
| **Gemini CLI** | Auto Memory + 子 Agent + 代码理解（AST） | Google 生态开发者、代码库分析场景 | 安全加固 PR 密集，EPIC 长线规划清晰（组件级评估、AST 感知） |
| **Copilot CLI** | 会话持久化 + 企业部署 + 移动端远程 | 已深度使用 GitHub 生态的团队 | v1.0 正式版后进入功能精细化，插件/Hook 系统逐步完善 |
| **Kimi Code CLI** | 用量争议处理 + MCP 子代理 + 自定义模型 | 成本敏感型用户、自定义端点用户 | 待修复长期 Bug（文件读取死循环 5 个月），社区信任需修复 |
| **OpenCode** | MCP 协议完整支持 + Session 快照/回滚 + TUI 交互 | MCP 重度用户、终端原生交互偏好者 | Bun 运行时，Windows 稳定性是短板，MCP 生态追赶速度快 |
| **Pi** | Provider 多样性 + 并行 Agent + 本地 LLM | 多模型路由需求者、私有化部署用户 | monorepo 架构，流式超时机制创新，但数据安全红线问题需警惕 |
| **Qwen Code** | 语音输入 + 后台任务可控性 + 安全修复 | 中文场景用户、语音交互早期采用者 | 语音功能差异化明显，CI/CD 工程化程度高，安全响应快 |
| **DeepSeek TUI** | 多 Provider 路由 + Fleet 多 Agent + 中文本地化 | 多模型调度用户、中文开发者 | Rust 实现，v0.8.65 里程碑集中合并，架构设计文档化程度高 |

---

## 5. 社区热度与成熟度

### 🔥 高活跃度 / 快速迭代

- **Claude Code**：社区声量最大，👍372 多账户需求领跑，安全 PR 当日响应，版本迭代节奏稳定（v2.1.191）。已进入"功能成熟 + 体验优化"阶段。
- **OpenAI Codex**：架构升级密集（WorldState 3-PR 系列、Ultra 推理、多 Agent），5 个 alpha 版本连续推送，处于"重大版本前夜"的紧张收尾期。
- **DeepSeek TUI**：v0.8.65 里程碑集中合并，多 Provider 路由、Fleet 框架、能力感知回退等架构级 PR 密集落地，属于"架构定型后的稳定性转向"。

### 🟡 中等活跃度 / 关键修复期

- **Gemini CLI**：无新 Release 但安全 PR 密集（路径绕过、密钥泄露、思考内容泄露），属于"安全债务偿还期"。
- **Qwen Code**：v0.19.2 发布但变更量小，社区讨论深度提升（语音、后台任务、安全），处于"功能稳定期 + 差异化深挖"。
- **OpenCode**：v1.17.10 发布含 MCP 重大增强，PR 活跃度高（MCP 搜索、资源订阅、Session 快照），属于"MCP 生态快速扩展期"。

### 🟢 温和活跃度 / 长期问题待解

- **Copilot CLI**：v1.0.65 发布节奏稳定，但 Issues 以企业部署、移动端缺失为主，社区增长温和。
- **Pi**：Bedrock Mantle、本地 LLM 两大长期 Issue 仍未解决，数据安全红线问题（静默截断文件）需优先处理。
- **Kimi Code CLI**：无新 Release，文件读取死循环（5 个月）、用量争议（👍7）等长期问题待解，社区信任度需修复。

---

## 6. 值得关注的趋势信号

### 📌 信号一：安全成为 Agent CLI 的"准入门槛"

Claude Code 两个 CRITICAL 安全 PR（URL 注入、命令注入）当日出现、Gemini CLI 路径绕过修复、Qwen Code 路径遍历修复、DeepSeek TUI 模型行为边界争议——**社区正在用安全审计的标准审视每一个 CLI 工具**。对于开发者：在插件生态设计中，默认权限最小化与输入校验不再是"锦上添花"，而是"生存线"。

### 📌 信号二：Token 经济学进入"透明化"时代

Codex 的 GPT-5.5 rate-limit 突变（👍269，620 条评论）、Claude Code 的 token 消耗异常（#42249）、Kimi Code 的用量争议（#1994）、Copilot CLI 的配额计算错误（#3881）——**用户对"黑盒计费"的容忍度正在归零**。工具需要提供用量预估、消耗明细、异常告警，否则将面临社区信任危机。

### 📌 信号三：上下文管理从"被动"走向"主动"

Claude Code 的"自发起 Context Compaction"（#33026）、Codex 的后台进程轮询优化（#13733）、Gemini CLI 的子 Agent 挂起问题（#21409）、Kimi Code 的 compaction 全量重载（#2472）——**用户不再接受"模型自己看着办"的上下文策略**。主动干预、增量缓存、智能压缩将成为下一阶段的核心竞争力。

### 📌 信号四：Windows 体验是"企业市场的入场券"

Codex（3 个 Windows Bug）、Claude Code（Defender 冲突）、OpenCode（Bun 段错误）、Copilot CLI（Linux AppImage 泄漏）——**跨平台不是"加分项"，而是"企业采购的必备条件"**。在 Windows 上的体验差距，将直接影响工具在企业市场的渗透率。

### 📌 信号五：语音交互正在成为 CLI 的"第二输入通道"

Qwen Code 社区密集讨论语音关键词定制、Web Shell 接入、转录精炼、Daemon 语音 API——**语音不是"附加功能"，而是 CLI 正在探索的新型交互范式**。对于面向终端用户的产品，语音输入可能成为下一个差异化战场。

### 📌 信号六：MCP 协议成为 CLI 的"插件标准"

OpenCode 集中提交 MCP 资源订阅、模板、搜索等 PR；Codex 推进 MCP 认证模型；Copilot CLI 讨论插件 Hook 静默执行；Gemini CLI 修复 MCP URI 冲突——**MCP 正在成为 CLI 工具对接外部能力的"USB-C"接口**。对开发者而言，深度参与 MCP 生态建设，意味着获得跨工具的互操作能力。

---

> **总结**：2026 年 6 月的 AI CLI 生态，正处于"能力同质化"与"体验差异化"的交汇点。安全、成本可控性、跨平台一致性、上下文智能管理——这四个维度将决定谁能在下一阶段赢得企业用户的信任。对于技术决策者，建议优先评估工具在这四个维度的成熟度，而非单纯比较功能清单。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据来源：** [anthropics/skills](https://github.com/anthropics/skills) · 截至 2026-06-25

---

## 1. 热门 Skills 排行（按评论数排序，取前 5 条有效评论数据）

> 注：本次抓取的 PR 评论数字段均为 `undefined`（GitHub API 未返回），以下按 **Issue 评论数 + PR 更新活跃度 + 内容相关性** 综合排名。

### 🏆 Top Issues（按实际评论数排名）

| # | Issue | 👍 | 💬 | 核心诉求 | 状态 |
|---|-------|----|----|----------|------|
| 1 | [#492 — 社区 Skills 冒充 anthropic/ 命名空间](https://github.com/anthropics/skills/issues/492) | 2 | 16 | 防止社区 Skills 伪装官方 | 🔴 OPEN |
| 2 | [#228 — 组织内 Skills 共享](https://github.com/anthropics/skills/issues/228) | 7 | 14 | 企业级 Skills 分发 | 🔴 OPEN |
| 3 | [#556 — run_eval.py 触发率 0%](https://github.com/anthropics/skills/issues/556) | 7 | 12 | 修复描述优化循环 | 🔴 OPEN |
| 4 | [#62 — Skills 全部消失](https://github.com/anthropics/skills/issues/62) | 2 | 10 | Skills 持久化稳定性 | 🔴 OPEN |
| 5 | [#189 — 插件重复安装相同 Skills](https://github.com/anthropics/skills/issues/189) | 9 | 6 | 插件去重 | 🔴 OPEN |

### 🔥 最受关注的 PR 主题（按更新频率与关联 Issue 热度）

| # | PR | 功能 | 状态 |
|---|-----|------|------|
| 1 | [#509 — 新增 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509) | 填补社区健康度空白 | 🟡 OPEN |
| 2 | [#360 — AppDeploy 部署技能](https://github.com/anthropics/skills/pull/360) | 一键部署全栈 Web 应用到公网 | 🟡 OPEN |
| 3 | [#210 — 前端设计技能优化](https://github.com/anthropics/skills/pull/210) | 提升前端设计可用性 | 🟡 OPEN |
| 4 | [#486 — ODT 文档技能](https://github.com/anthropics/skills/pull/486) | 创建/读取/转换 OpenDocument | 🟡 OPEN |
| 5 | [#723 — 测试模式技能](https://github.com/anthropics/skills/pull/723) | 全栈测试方法论与模式 | 🟡 OPEN |
| 6 | [#514 — 文档排版质量](https://github.com/anthropics/skills/pull/514) | 防止 AI 文档孤儿词/孤行 | 🟡 OPEN |
| 7 | [#83 — Skills 质量/安全分析器](https://github.com/anthropics/skills/pull/83) | 元技能：评估 Skills 质量 | 🟡 OPEN |
| 8 | [#147 — 代码库清单审计](https://github.com/anthropics/skills/pull/147) | 死代码/文档缺失检测 | 🟡 OPEN |

---

## 2. 社区需求趋势（从 Issues 高频关键词提炼）

```
🔒 安全与信任边界        ████████████████  #492 — 伪造官方命名空间
🔄 Windows 兼容性        ███████████████  #1061, #1099, #1050, #362
🐛 测试基础设施缺陷      ██████████████  #556, #1169 — recall=0%
📦 Skills 分发与共享     █████████████  #228 — 组织共享
📄 文档格式处理          ████████████  #486(ODT), #514(排版), #538/#541(DOCX)
🎯 Skills 质量治理       ███████████  #83(分析器), #202(最佳实践)
🧠 Agent 状态管理        ██████████  #1329(compact-memory), #154(持久记忆)
```

**八大趋势方向：**

| 趋势 | 代表 Issue | 社区信号 |
|------|-----------|----------|
| **① Skills 安全信任** | [#492](https://github.com/anthropics/skills/issues/492) | 要求签名/命名空间隔离 |
| **② Windows 一等公民** | [#1061](https://github.com/anthropics/skills/issues/1061) | 4 个独立 PR 修复兼容 |
| **③ 测试框架修复** | [#556](https://github.com/anthropics/skills/issues/556) | 10+ 复现，优化循环失效 |
| **④ 企业内部分发** | [#228](https://github.com/anthropics/skills/issues/228) | 组织级 Skills 库 |
| **⑤ ODT/DOCX 办公** | [#486](https://github.com/anthropics/skills/pull/486), [#541](https://github.com/anthropics/skills/pull/541) | 文档技能修复不绝 |
| **⑥ Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412) | 安全策略/审计追踪 |
| **⑦ 记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 长上下文状态管理 |
| **⑧ MCP 暴露** | [#16](https://github.com/anthropics/skills/issues/16) | Skills 即 MCP Server |

---

## 3. 高潜力待合并 Skills（评论活跃 + 近期更新）

| PR | 作者 | 最后更新 | 潜力评估 | 链接 |
|----|------|---------|---------|------|
| **#1323** — run_eval 触发检测修复 | Polluelo978 | 2026-06-23 | ⭐⭐⭐ 关键 bug 修复 | [PR #1323](https://github.com/anthropics/skills/pull/1323) |
| **#1298** — run_eval recall=0% 根因 | MartinCajiao | 2026-06-23 | ⭐⭐⭐ 阻塞性修复 | [PR #1298](https://github.com/anthropics/skills/pull/1298) |
| **#361** — YAML 特殊字符检测 | Mr-Neutr0n | 2026-06-10 | ⭐⭐⭐ 数据质量 | [PR #361](https://github.com/anthropics/skills/pull/361) |
| **#362** — UTF-8 多字节修复 | Mr-Neutr0n | 2026-06-10 | ⭐⭐ 国际化 | [PR #362](https://github.com/anthropics/skills/pull/362) |
| **#1050** — Windows subprocess 修复 | gstreet-ops | 2026-05-24 | ⭐⭐ 平台兼容 | [PR #1050](https://github.com/anthropics/skills/pull/1050) |
| **#1099** — Windows 管道读取修复 | joshuawowk | 2026-05-24 | ⭐⭐ 平台兼容 | [PR #1099](https://github.com/anthropics/skills/pull/1099) |
| **#509** — CONTRIBUTING.md | narenkatakam | 2026-03-19 | ⭐⭐ 社区基建 | [PR #509](https://github.com/anthropics/skills/pull/509) |
| **#360** — AppDeploy 部署 | avimak | 2026-05-04 | ⭐ 实用工具 | [PR #360](https://github.com/anthropics/skills/pull/360) |

> 📌 **判断依据：** 6 月更新的 PR 有 7 个，其中 5 个属于 `skill-creator` 测试基础设施修复——**测试框架合并窗口正在打开**。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：修复 `skill-creator` 测试基础设施（Windows 兼容性 + 触发检测 + 编码问题），同时推动 Skills 安全信任边界与企业级分发能力。**

### 一句话总结

```
┌─────────────────────────────────────────────────────────────┐
│  社区在 Skills 层面最核心的诉求：                              │
│                                                              │
│  "先修自己的枪，再上战场" —— 5 个独立 PR 围攻 run_eval.py   │
│  的 Windows 兼容与触发检测 bug，是当前最高优先级共识。         │
│                                                              │
│  与此同时，#492 安全信任边界和 #228 组织共享代表了            │
│  社区对 Skills 生态从"能用"到"可信、可治理"的升级诉求。       │
└─────────────────────────────────────────────────────────────┘
```

---

**报告生成时间：** 2026-06-25  
**数据来源：** [github.com/anthropics/skills](https://github.com/anthropics/skills)  
**分析工具：** OWL · ZOO

---

# Claude Code 社区动态日报 | 2026-06-25

---

## 📌 今日速览

Claude Code 发布了 v2.1.191，带来对话回退、流式读取滚动修复及后台代理停止逻辑修正；社区同日涌现多个安全相关 PR，修复插件中 URL 注入与命令注入的 CRITICAL 漏洞。此外，多账户切换（👍372）、技能子目录支持（👍159）、GitLab 集成（👍108）三大功能需求持续占据热度榜首，JetBrains 插件支持与 Context Compaction 自发起等议题也引发广泛讨论。

---

## 🚀 版本发布

### v2.1.191
- **`/rewind` 对话回退**：支持在 `/clear` 之前恢复对话，为上下文管理提供"后悔药"。
- **流式响应滚动修复**：解决读取早期输出时滚动条意外跳到底部的体验问题。
- **后台代理停止逻辑修正**：彻底修复后台代理被停止后"复活"的 bug。

### v2.1.190
- 可靠性改进与常规 bug 修复。

---

## 🔥 社区热点 Issues

| # | 标题 | 👍 | 关注理由 |
|---|-----:|---:|------|
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | Mobile App 多账户切换（无需共享邮箱） | 372 | 高赞需求榜首，移动办公多账户用户刚需。 |
| [#12433](https://github.com/anthropics/claude-code/issues/12433) | macOS 活动监视器显示版本号而非 "claude" | 23 | 进程名称错乱影响运维排查。 |
| [#42249](https://github.com/anthropics/claude-code/issues/42249) | Token 消耗异常——正常用量数分钟耗尽配额 | 17 | 直接影响成本，疑似计量或上下文泄漏。 |
| [#10238](https://github.com/anthropics/claude-code/issues/10238) | Skills 支持子目录 | 159 | 技能组织灵活性诉求，长期开放的增强议题。 |
| [#12346](https://github.com/anthropics/claude-code/issues/12346) | GitLab 集成（仓库关联、MR、移动端访问） | 108 | 与 GitHub 对等的企业需求，GitLab 市场占有率持续上升。 |
| [#52151](https://github.com/anthropics/claude-code/issues/52151) | Opus 4.7 1M 上下文通过 Bedrock 在 VSCode 扩展报错 | 34 | 企业 Bedrock 用户主流模型工作流受阻。 |
| [#69238](https://github.com/anthropics/claude-code/issues/69238) | Advisor 触发 "No response from API" 错误 | 34 | 影响 Opus 4.8 新功能体验。 |
| [#2254](https://github.com/anthropics/claude-code/issues/2254) | 关闭欢迎横幅 | 91 | 高频老需求，终端空间利用率关切。 |
| [#24057](https://github.com/anthropics/claude-code/issues/24057) | MCP Servers/Hooks/Plugins 配置变更应自动热重载 | 13 | 开发者频繁调参时断裂流程。 |
| [#47166](https://github.com/anthropics/claude-code/issues/47166) | JetBrains 需要真正的 Claude AI Assist 插件 | 2 | VSCode/CLI 之外，JetBrains 用户正式呼吁原生插件。 |

> ⚠️ 值得额外关注 [#65512](https://github.com/anthropics/claude-code/issues/65512)（OpusPlan 在 200K 后降级为 Sonnet，已关闭但影响体验）及 [#33026](https://github.com/anthropics/claude-code/issues/33026)（让 Claude 主动发起 Context Compaction，已关闭），两项虽已关闭但代表社区对智能上下文管理的深层诉求。

---

## 🔧 重要 PR 进展

| PR | 核心功能 | 印象 |
|---|----------|------|
| [#70634](https://github.com/anthropics/claude-code/pull/70634) | 修复正常限流场景：服务端限流处理 | 可靠性增强 |
| [#70633](https://github.com/anthropics/claude-code/pull/70633) | 处理 Anthropic API 的限速头 | API 吞吐量优化 |
| [#70582](https://github.com/anthropics/claude-code/pull/70582) | **CRITICAL 安全修复**：user-controlled URL 在 llm.py 中的处理 | 防止 URL 注入攻击 |
| [#70538](https://github.com/anthropics/claude-code/pull/70538) | **CRITICAL 安全修复**：修复 gitutil.py 中的 subprocess 注入风险 | 防止命令注入 |
| [#66854](https://github.com/anthropics/claude-code/pull/66854) | Token 符号化问题修复 | 词法解析细节 |

> ☀️ **安全专项关注**：今日社区 [orbisai0security](https://github.com/anthropics/claude-code/pull/70582) [提交两个安全 PR](https://github.com/anthropics/claude-code/pull/70538)，覆盖 URL 注入与 subprocess 注入，恰好对应 OWASP 注入类高频风险，反映社区对插件安全模型的严格审视。

---

## 📊 功能需求趋势

从当前活跃 issues 可提炼以下趋势：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|---------|
| **IDE 集成平等化** | #12346（GitLab） #47166（JetBrains） #46151（Bedrock-VDI） | VSCode 之外，JetBrains、GitLab、Bedrock 成为企业级用户刚需。 |
| **上下文智能管理** | #10238（子目录） #65512（自动降级） #33026（自发起 compaction） | 大模型长上下文场景下，用户不再满足于被动等待，期望主动干预。 |
| **跨平台可观测性** | #12433（进程名） #70309（滚动） #69786（认证） | macOS、Linux、Windows 的进程管理与显示一致性要求提升。 |
| **多账户/多用户** | #36151（多账户切换） #66407（模型被锁定） #69786（订阅识别） | Pro 订阅在多用户场景下的体验改善呼声强烈。 |
| **安全与隔离** | #67406（Windows Agent 渲染卡顿） #67595（Windows Defender 冲突） #68792（Windows 安装错误） | Windows 平台持续经历兼容性阵痛，需长期跟进。 |

---

## 🎯 开发者关注点（痛点与高频需求）

1. **🙋 高赞需求 #36151（多账户切换）**：👍372，用户需要在手机上无缝切换多个 Claude 账户，而不必反复注销。这是 **最大公约数** 需求。

2. **🐛 性能与成本**：#42249 异常 token 消耗、#52151 模型输出截断，直接影响企业的 API 成本与集成稳定性。开发团队需关注是否存在上下文泄漏或模型推理流程异常。

3. **🔒 安全加固**：两个 CRITICAL 安全 PR（URL 注入、命令注入）意味着社区对插件生态的安全模型正在收紧。自定义插件与 hook 的代码审查将成为常态。

4. **🧠 Context 自治**：从主动 compaction (#33026) 到滚动体验 (#70309)，终端交互的流畅度与"智能"属性成为用户感知的核心维度。

5. **🖥️ 跨平台一致性**：Windows 用户持续反馈安装、渲染、认证问题；JetBrains 用户对 IDE 插件的呼声愈发迫切——**Claude Code 需要在 VSCode 之外建立对等能力**。

6. **🛠️ 可观测性与调试**：进程名显示（#12433）、滚动查找困难（#70309）、限流重试策略（#69238），说明开发者对调试可视化与透明度的期望值在上升。

> 📌 **总结**：今天的 Claude Code 社区既有关键安全修复、版本迭代，也有大量围绕多账户、跨平台、IDE 平等的用户呼声。建议持续关注安全 PR 的合并状态，以及 JetBrains/GitLab 两条 IDE 路线图的社区讨论跟进。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-06-25

---

## 1. 今日速览

本周 Codex 社区的核心矛盾集中在 **token 消耗异常激增** 相关的多个高热度 Issue，社区对 GPT-5.5 模型在 Plus/Business 计划下的 rate-limit 策略变化反应强烈。同时，OpenAI 内部正推进 **WorldState 持久化**、**Ultra 推理模式** 和 **App Server 架构改进** 等多项重大技术 PR，Windows 平台兼容性问题也持续获得关注。

---

## 2. 版本发布

### rust-v0.142.1（稳定版）
- **Windows 系统代理支持**：新增对 PAC、WPAD 静态代理及绕过规则的 opt-in 支持，改善企业网络环境下的认证体验。
- [对比链接](https://github.com/openai/codex/compare/rust-v0.142.0...rust-v0.142.1)

### rust-v0.143.0-alpha.11 ~ alpha.15（预发布通道）
- 过去 24 小时内连续推送 5 个 alpha 版本，表明 0.143.0 功能已冻结，正处于密集集成测试阶段。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 高热度 Bug — Token 消耗与 Rate Limit

| # | Issue | 👍 | 评论 | 要点 |
|---|-------|-----|------|------|
| 1 | [#14593](https://github.com/openai/codex/issues/14593) Burning tokens very fast | 271 | 620 | 长期存在的 token 快速消耗问题，VS Code 扩展用户持续反馈，讨论最活跃的 Issue |
| 2 | [#28879](https://github.com/openai/codex/issues/28879) GPT-5.5 rate-limit cost per token jumped ~10-20x since June 16 | 269 | 133 | **本周最热门**：6月16日起 Plus 计划 GPT-5.5 预算从 20+ 次骤降至 2-3 次 prompt，社区质疑定价策略变更未公告 |

### 🟡 性能与资源浪费

| # | Issue | 👍 | 评论 | 要点 |
|---|-------|-----|------|------|
| 3 | [#13733](https://github.com/openai/codex/issues/13733) Background process polling wastes tokens | 23 | 29 | 后台进程轮询每次触发完整 API 调用（含全量历史），导致 token 浪费与历史长度成正比 |
| 4 | [#24389](https://github.com/openai/codex/issues/24389) multi_agent_v1.close_agent can hang for hours | 0 | 11 | 关闭无响应子代理时父线程阻塞超 8 小时，缺少超时机制 |

### 🟡 Windows 平台兼容性

| # | Issue | 👍 | 评论 | 要点 |
|---|-------|-----|------|------|
| 5 | [#29072](https://github.com/openai/codex/issues/29072) Windows apply_patch fails — sandbox exe cannot launch | 16 | 17 | Windows 应用 `apply_patch` 工具因沙箱安装程序无法从包路径启动而失败 |
| 6 | [#21863](https://github.com/openai/codex/issues/21863) VS Code central editor panel opens blank on Windows | 1 | 12 | 自定义 URI 路由使用 `fsPath` 导致 Windows 上编辑器面板空白 |
| 7 | [#26990](https://github.com/openai/codex/issues/26990) Windows Desktop local state not crash-safe after power loss | 0 | 6 | 断电后本地状态丢失，pins/projects 重置、配置回退、时间戳异常 |

### 🟢 功能增强与架构

| # | Issue | 👍 | 评论 | 要点 |
|---|-------|-----|------|------|
| 8 | [#21753](https://github.com/openai/codex/issues/21753) Full Claude Code Hook Parity (29+) | 17 | 18 | 要求 Codex hooks 对齐 Claude Code 的完整自动化表面（29+ 事件），社区呼声高 |
| 9 | [#2916](https://github.com/openai/codex/issues/2916) OpenAI service tier support | 50 | 17 | 请求支持 `service_tier` 配置以优化成本与延迟，👍数最高的功能请求之一 |
| 10 | [#14722](https://github.com/openai/codex/issues/14722) Sync CLI and app-server sessions | 15 | 6 | 期望 `codex resume` 连接后会话内容实时同步，支持跨设备协作场景 |

---

## 4. 重要 PR 进展（Top 10）

### 🏗️ WorldState 持久化（3-PR 系列）

| PR | 作者 | 说明 |
|----|------|------|
| [#29833](https://github.com/openai/codex/pull/29833) | sayan-oai | **[1/3]** 使 WorldState 快照可序列化，为持久化提供基础 |
| [#29835](https://github.com/openai/codex/pull/29835) | sayan-oai | **[2/3]** 将 WorldState 持久化到 rollout，支持 resume/fork/rollback |
| [#29837](https://github.com/openai/codex/pull/29837) | sayan-oai | **[3/3]** 重放持久化的 WorldState，确保恢复时 diff baseline 精确一致 |

> **意义**：这是 Codex 核心架构升级，解决当前 resume/fork 时只能从 `TurnContextItem` 近似重建状态的问题。

### 🧠 Ultra 推理模式

| PR | 作者 | 说明 |
|----|------|------|
| [#29899](https://github.com/openai/codex/pull/29899) | shijie-oai | 新增 Ultra reasoning effort 作为单一用户入口，整合最大推理 + 主动多代理委派 |
| [#29709](https://github.com/openai/codex/pull/29709) | shijie-oai | 门控 Ultra 推理 effort，仅在模型目录和多代理模式均 opt-in 时可发现 |
| [#29710](https://github.com/openai/codex/pull/29710) | shijie-oai | 从 Ultra effort 派生多代理模式，消除竞争配置源（已合并） |

### 🔌 MCP 与 App Server 改进

| PR | 作者 | 说明 |
|----|------|------|
| [#29934](https://github.com/openai/codex/pull/29934) | martinauyeung-oai | MCP app context 新增 `appName` 和 `templateId` 字段 |
| [#29924](https://github.com/openai/codex/pull/29924) | aibrahim-oai | 用枚举表示 MCP 认证方式（OAuth vs ChatGPT-session） |
| [#29920](https://github.com/openai/codex/pull/29920) | kbazzi | 重试失败的 Codex Apps MCP 启动，提升可靠性 |
| [#29754](https://github.com/openai/codex/pull/29754) | JaviSoto | App Server 重连后保留完整 turn 历史，解决断连后状态丢失 |
| [#29930](https://github.com/openai/codex/pull/29930) | jif-oai | 按 executor 跟踪 capability readiness，支持动态执行器 |
| [#29917](https://github.com/openai/codex/pull/29917) | anp-oai | exec-server 并发处理 post-init 请求，减少长轮询阻塞 |

### ⚙️ 配置与模型管理

| PR | 作者 | 说明 |
|----|------|------|
| [#29683](https://github.com/openai/codex/pull/29683) | hefuc-oai | 管理员可为新线程设置默认模型、reasoning effort 和 service tier |
| [#29910](https://github.com/openai/codex/pull/29910) | rka-oai | sleep 配置移至 `current_time_reminder` 命名空间下 |
| [#29923](https://github.com/openai/codex/pull/29923) | rka-oai | 支持外部时钟 sleep，最大时长提升至 12 小时 |

---

## 5. 功能需求趋势

基于过去 24 小时内 50 条 Issues 的分析：

| 趋势方向 | 热度 | 代表 Issue |
|----------|------|-----------|
| **Rate Limit / Token 消耗透明化** | 🔥🔥🔥 | #14593, #28879, #13733 — 用户对计费机制和消耗速度高度敏感 |
| **Windows 平台体验** | 🔥🔥 | #29072, #21863, #26990, #22965 — 沙箱、编辑器、崩溃恢复、远程 SSH 多维度问题 |
| **Hook 与自动化** | 🔥🔥 | #21753 — 社区明确要求对齐 Claude Code 的 29+ hook 事件体系 |
| **MCP 生态扩展** | 🔥 | #15299, #19871, #29924 — 入站通知、自定义 provider 兼容性、认证模型 |
| **多代理 / 子代理稳定性** | 🔥 | #24389, #19197 — 孤儿代理、会话冻结等生命周期管理问题 |
| **Service Tier / 成本控制** | 🔥 | #2916 — 企业用户需要细粒度的服务层级控制 |
| **后台进程与长任务** | 🔥 | #2062, #22003, #13733 — 长构建/服务器运行不阻塞、日志检查 |

---

## 6. 开发者关注点总结

### ⚠️ 核心痛点

1. **Token 经济学突变**：GPT-5.5 在 Plus 计划下的 rate-limit 策略调整导致可用次数从 20+ 骤降至 2-3，社区要求透明沟通定价/配额变更。
2. **Windows 二等公民**：多个 Windows 特有 Bug 长期未解决（沙箱启动、编辑器面板、断电恢复、远程 SSH），影响企业用户。
3. **后台任务资源浪费**：轮询机制未做增量优化，每次检查都发送全量对话历史，在长会话中造成显著 token 开销。
4. **子代理生命周期缺失**：缺少超时控制、孤儿检测和强制终止机制，可能导致线程无限期挂起。

### 💡 高频诉求

- **Hook 完整度**：开发者希望 Codex 的自动化表面能对标 Claude Code，特别是在 CI/CD 和 IDE 集成场景。
- **Service Tier 控制**：企业用户需要 `service_tier` 参数在延迟和成本之间做权衡。
- **跨设备会话同步**：CLI 和 App Server 之间的实时状态同步，支持移动办公场景。
- **App Server 稳定性**：JSON-RPC 客户端的 compaction 状态同步、重连历史恢复等可靠性问题。

---

> 📊 本期关键词：**Rate Limit 争议** · **WorldState 持久化** · **Ultra 推理** · **Windows 体验**
> 下次日报：2026-06-26

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-25

---

## 1. 今日速览

过去 24 小时无新版本发布，但社区 Issue 和 PR 活跃度高。核心焦点集中在：**Auto Memory 系统安全性与稳定性修复**、**子 Agent 可靠性问题**（挂起/误报成功）、以及**安全加固**（路径绕过、密钥泄露）。多条高优先级 Issue 获得维护者响应，PR 集中在安全、性能和工具链优化。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #22323 — 子 Agent 达到 MAX_TURNS 却报告"GOAL 成功"
- **优先级**: P1 | **👍**: 2 | **评论**: 8
- `codebase_investigator` 子 agent 在达到最大轮数、未执行任何分析的情况下，错误地报告 `status: "success"` 且 `Termination Reason: "GOAL"`，掩盖了中断事实。
- **影响**: 用户误以为任务完成，可能导致后续流程基于空结果执行。
- 🔗 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 🔴 #21409 — 通用ist Agent 无限挂起
- **优先级**: P1 | **👍**: 8（最高互动之一） | **评论**: 7
- 调用通用ist agent 执行简单操作（如创建文件夹）时，CLI 永久挂起，用户等待超一小时。禁用子 agent 可规避。
- **影响**: 核心工作流阻断，影响日常使用。
- 🔗 [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 🟠 #25166 — Shell 命令完成后卡在"等待输入"
- **优先级**: P1 | **👍**: 3 | **评论**: 4
- 简单 shell 命令执行完毕后，CLI 仍显示"Awaiting user input"，实际命令已退出。
- **影响**: 交互体验严重受损，需手动中断。
- 🔗 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 🟠 #26525 — Auto Memory 密钥泄露风险
- **优先级**: P2 | **评论**: 5
- Auto Memory 读取本地对话记录后，在发送给提取 agent 之前，内容已进入模型上下文。虽然后续 prompt 要求脱敏，但为时已晚。
- **影响**: 敏感信息（API Key 等）可能被记录或上传。
- 🔗 [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

### 🟠 #26522 — Auto Memory 无限重试低信号会话
- **优先级**: P2 | **评论**: 5
- 提取 agent 判定某会话为"低信号"后不读取，但该会话仍标记为未处理，导致被反复 surfaced。
- **影响**: 后台任务资源浪费，可能影响正常记忆提取。
- 🔗 [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 🟡 #24353 — 组件级评估体系建设（EPIC）
- **优先级**: P1 | **评论**: 7
- 继 #15300 引入 76 个行为评估测试后，推进组件级评估基础设施，覆盖 6 个受支持 Gemini 模型。
- **影响**: 质量保障核心工程，影响后续迭代速度。
- 🔗 [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

### 🟡 #22745 — AST 感知文件读取/搜索/代码库映射评估（EPIC）
- **优先级**: P2 | **👍**: 1 | **评论**: 7
- 调研 AST 感知工具能否减少 tool call 次数、降低 token 噪声，更精确地读取方法边界。
- **影响**: 若落地，将显著提升代码理解能力和效率。
- 🔗 [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 🟡 #22672 — Agent 应阻止破坏性操作
- **优先级**: P2 | **👍**: 1 | **评论**: 3
- 复杂 git 操作中，模型可能使用 `git reset --hard` 或 `--force` 而非更安全的替代方案。
- **影响**: 数据安全，社区对 Agent 自主操作边界高度关注。
- 🔗 [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

### 🟡 #24246 — 工具超 128 个时出现 400 错误
- **优先级**: P2 | **评论**: 3
- 可用工具超 400 个时 API 返回 400 错误，期望 agent 能智能裁剪工具范围。
- **影响**: 重度 MCP 用户（多服务器连接）直接受阻。
- 🔗 [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### 🟡 #21968 — Gemini 不主动使用技能和子 Agent
- **优先级**: P2 | **评论**: 6
- 用户配置了相关 skill 和 sub-agent，但模型不会主动调用，需显式指示。
- **影响**: 自定义能力未被充分利用，用户体验低于预期。
- 🔗 [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

---

## 4. 重要 PR 进展（Top 10）

### 🔒 #27966 — 安全：强制大小写不敏感敏感路径拦截 + VSCode HITL
- **状态**: OPEN | **作者**: luisfelipe-alt
- 修复 `.git`、`.env`、`node_modules` 等目录的大小写绕过漏洞，同时处理 prompt injection 风险。
- 🔗 [PR #27966](https://github.com/google-gemini/gemini-cli/pull/27966)

### 🔒 #27971 — 修复 Thought Leakage（思考内容泄露到历史轮次）
- **状态**: OPEN | **作者**: amelidev
- 模型内部推理"思维"泄露到纯文本历史轮次，导致后续轮次模型行为异常或进入无限独白循环。此 PR 从 scrubbed history turns 中剥离 thoughts。
- 🔗 [PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)

### 🔒 #28053 — 修复 @ 引用文件路径解析（生产级 Bug）
- **状态**: OPEN | **作者**: luisfelipe-alt
- 当模型传递 `@` 前缀路径时，`read_file`、`replace`、`write_file` 报 "File not found"。此 PR 实现防御性路径解析。
- 🔗 [PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053)

### ⚡ #27636 — 性能：优化 VirtualizedList 并修复点击处理
- **状态**: OPEN (P1) | **作者**: jacob314
- 优化大数据集渲染和滚动性能，改进静态项点击处理机制。对长对话/大量工具输出场景体验提升显著。
- 🔗 [PR #27636](https://github.com/google-gemini/gemini-cli/pull/27636)

### ☁️ #28015 — feat(caretaker): Cloud Run webhook 接入服务
- **状态**: OPEN | **作者**: chadd28
- 为 Caretaker Agent 实现 GitHub webhook 入口：验证 payload 签名、Firestore 事务存储、Pub/Sub 消息发布。
- 🔗 [PR #28015](https://github.com/google-gemini/gemini-cli/pull/28015)

### 🔧 #28054 — 修复登录错误消息中的 URL 标点
- **状态**: OPEN (help wanted) | **作者**: terminalchai
- 修复 #28052：在交互式登录错误中去除 HTTP(S) URL 末尾句号，使链接可点击。
- 🔗 [PR #28054](https://github.com/google-gemini/gemini-cli/pull/28054)

### 🔧 #27964 — 修复 MCP 资源解析跨服务器 URI 混淆
- **状态**: CLOSED | **作者**: herdiyana256
- 未限定的 `findResourceByUri` 回退导致多 MCP 服务器 URI 冲突时静默返回错误结果。现改为冲突时 fail-closed。
- 🔗 [PR #27964](https://github.com/google-gemini/gemini-cli/pull/27964)

### 🔧 #27101 — 修复 A2A 不支持 metadata 列出后继续执行
- **状态**: CLOSED (P1) | **作者**: MukundaKatta
- 修复 #21729：非内存任务存储在 `/tasks/metadata` 返回 501 后立即终止，增加回归测试。
- 🔗 [PR #27101](https://github.com/google-gemini/gemini-cli/pull/27101)

### 🔧 #28132 — 防止 release 验证中 workspace 二进制遮蔽
- **状态**: CLOSED | **作者**: galz10
- `npm ci --ignore-scripts` 导致集成测试运行本地源码而非发布包。修复确保验证针对实际发布产物。
- 🔗 [PR #28132](https://github.com/google-gemini/gemini-cli/pull/28132)

### 🔧 #28130 — 改进 "Install source not found" 错误提示
- **状态**: CLOSED | **作者**: ompatel-aiml
- 优化 `inferInstallMetadata` 错误消息，指向正确 GitHub URL 和认证修复方案，降低用户困惑。
- 🔗 [PR #28130](https://github.com/google-gemini/gemini-cli/pull/28130)

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **Auto Memory 安全与稳定** | #26525, #26522, #26523, #26516 | 🔥🔥🔥 高 |
| **子 Agent 可靠性** | #22323, #21409, #21968, #22093 | 🔥🔥🔥 高 |
| **安全加固（路径/注入）** | #26525, #22672 | 🔥🔥 高 |
| **AST 感知代码理解** | #22745, #22746 | 🔥 中 |
| **组件级评估基础设施** | #24353 | 🔥 中 |
| **工具数量扩展/裁剪** | #24246 | 🔥 中 |
| **性能与渲染优化** | #21924, #27636 | 🔥 中 |
| **Agent 自我认知** | #21432 | 低 |
| **子 Agent 可观测性** | #22598, #21763 | 低 |

---

## 6. 开发者关注点与痛点总结

1. **子 Agent 稳定性是最大痛点**：多个 P1 Issue 涉及 agent 挂起、误报成功、不主动使用技能，反映子 agent 在生产级场景仍不可靠。

2. **Auto Memory 安全隐患引发广泛关注**：密钥泄露、无限重试、无效 patch 静默跳过等问题集中爆发，社区期待系统性修复。

3. **安全加固需求迫切**：路径大小写绕过、prompt injection、破坏性操作防护等议题频繁出现，说明社区对 Agent 自主操作边界的担忧。

4. **工具扩展性瓶颈**：工具超 400 个即报错，MCP 多服务器 URI 冲突，限制了重度 MCP 用户的使用场景。

5. **代码理解能力升级诉求**：AST 感知读取、代码库映射等 EPIC Issue 表明社区期待更精准的代码分析能力，减少 token 浪费。

6. **性能体验持续优化**：终端 resize 性能、VirtualizedList 优化等 PR 活跃，说明 CLI 在大型项目中的流畅度仍是关注焦点。

---

> 📊 本期总结：社区重心从"新功能"转向"稳定性与安全"，Auto Memory 和子 Agent 可靠性是当前最大短板，也是维护者重点攻方向。安全加固类 PR 活跃度高，预计近期将有相关更新发布。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-06-25 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

Copilot CLI 发布 v1.0.0.65，带来会话目录持久化和斜杠命令权限提示修复。社区讨论聚焦于**插件系统权限静默执行**、**技能文件夹组织**以及**移动端远程会话体验**。多个终端渲染 Bug 在 24 小时内被快速关闭，显示团队响应积极。

---

## 2. 版本发布

### v1.0.65（发布于 2026-06-24）

- **`/cd` 命令现在持久化工作目录**，恢复会话时自动回到上次目录，并在新目录中自动发现自定义 Agent
- **修复斜杠前缀字符串参数误触发文件系统权限提示**的问题（如 `--body "/azp run"` 不再弹出权限确认）
- 全屏时间线保持锚定行为优化

---

## 3. 社区热点 Issues

| # | 标题 | 👍 | 评论 | 要点 |
|---|------|-----|------|------|
| [#1632](https://github.com/github/copilot-cli/issues/1632) | 支持技能子文件夹组织 | 21 | 9 | 用户拥有 10+ 技能，扁平结构难以管理，需求明确且获得最多赞同 |
| [#3832](https://github.com/github/copilot-cli/issues/3832) | 6月16日中断后所有模型显示"已阻止/已禁用" | 13 | 6 | 已关闭；影响所有用户选择模型，属严重可用性问题 |
| [#2643](https://github.com/github/copilot-cli/issues/2643) | preToolUse 静默命令重写仍弹出确认对话框 | 2 | 11 | 插件 hook 无法静默改写命令，影响自动化工作流 |
| [#3881](https://github.com/github/copilot-cli/issues/3881) | 配额计算错误：6x 乘数扣减 5% 而非 2% | 0 | 3 | 计费准确性问题，影响高级模型用户 |
| [#2419](https://github.com/github/copilot-cli/issues/2419) | 可配置快捷键（快速切换模型） | 5 | 2 | 提升操作效率，社区呼声较高 |
| [#1729](https://github.com/github/copilot-cli/issues/1729) | 可配置键绑定 | 5 | 2 | 与 #2419 类似，用户希望自定义快捷键 |
| [#3913](https://github.com/github/copilot-cli/issues/3913) | 恢复会话时模型选择为空 | 1 | 3 | 已关闭；v1.0.64 恢复会话功能异常 |
| [#3909](https://github.com/github/copilot-cli/issues/3909) | 企业/组织托管本地 CLI 配置（含环境变量） | 0 | 1 | 企业级需求，管理员无法集中推送配置 |
| [#3925](https://github.com/github/copilot-cli/issues/3925) | Linux AppImage 泄漏 LD_LIBRARY_PATH 导致 git HTTPS 失败 | 0 | 0 | Linux 平台关键 Bug，影响会话创建 |
| [#3916](https://github.com/github/copilot-cli/issues/3916) | 允许 Agent 程序化调用 /compact | 0 | 0 | 上下文管理自动化，提升长任务效率 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|------|------|------|
| [#2587](https://github.com/github/copilot-cli/pull/2587) | 使用 GitHub Agentic Workflows 自动分类 Issue | 已关闭 | 引入 AI 驱动的自动标签系统，新 Issue 自动打上 `area:` 和 `triage` 标签，提升维护效率 |

---

## 5. 功能需求趋势

从当前 Issues 中提炼出以下五大方向：

### 🔧 插件与 Hook 系统
- 静默命令重写（#2643）
- 插件安装/市场管理交互优化（#3917）
- 企业托管配置（#3909）

### ⌨️ 键盘与输入体验
- 可配置快捷键（#2419、#1729）
- 编辑中切换模型不丢失草稿（#3138）
- Escape 键行为优化（#3692）
- `/cd` 自动补全键绑定一致性（#3918）

### 📱 移动端远程会话
- 发送 `/` 命令（#3922）
- 发送 `!` Shell 命令（#3924）
- 上传文件/图片（#3923）

### 🖥️ 终端渲染与 UI
- Markdown 渲染器双连字符触发删除线（#3920）
- 多选问题 UI 截断（#3921）
- 活动指示器时序问题（#3915）

### 🏢 企业与网络支持
- Kerberos 代理支持（#523）
- 企业代理下 SDK headless 模式失败（#2978）
- Linux AppImage 库路径泄漏（#3925）

---

## 6. 开发者关注点

| 痛点 | 相关 Issues | 说明 |
|------|------------|------|
| **权限与确认体验** | #2643, #3760 | 用户频繁遭遇非预期确认弹窗，影响流畅度 |
| **会话恢复体验** | #3913, #3926 | 恢复会话后模型丢失、历史提示词丢失 |
| **移动端功能缺失** | #3922-#3924 | 远程会话缺少核心 CLI 功能（斜杠命令、Shell、文件上传） |
| **配额计费透明** | #3881 | 高级模型乘数扣减不准确，影响付费用户信任 |
| **企业部署困难** | #3909, #523, #2978 | 企业代理、集中配置、认证支持不足 |
| **上下文管理** | #3916, #3915 | 长任务中 /compact 体验不佳，Agent 无法自主触发压缩 |

---

*本报告由 OWL 基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-06-25 | 数据来源：MoonshotAI/kimi-cli**

---

## 1. 今日速览

过去24小时无新版本发布，但社区 Issue 和 PR 活跃度较高。核心讨论集中在**上下文压缩机制导致 token 浪费**、**用量计算争议**以及**MCP 工具在子代理中的配置传播**等关键体验问题。多个历史 PR 完成合并，涉及 MCP 子代理修复和 Vim 键导航支持。

---

## 2. 版本发布

过去24小时内无新版本发布。

---

## 3. 社区热点 Issues

| # | 状态 | 标题 | 作者 | 👍 | 评论 | 要点 |
|---|------|------|------|-----|------|------|
| #1994 | OPEN | 用量计算有问题 | wanghonghust | 7 | 7 | 用户反映 K2.6 思维链过长导致 token 消耗极快，2小时额度仅完成2次请求，与官方宣传的 300-1200 次严重不符，争议较大。 |
| #640 | OPEN | CLI 反复读取同一文件陷入死循环 | isbafatima90-arch | 1 | 14 | 使用 mimo-v2-flash 模型时出现文件读取循环 bug，已持续5个月，社区反复复现，影响自定义 Anthropic 端点用户。 |
| #2472 | OPEN | 上下文压缩重新加载系统提示，浪费约 20k tokens | 865x44 | 0 | 0 | 新提：context compaction 触发后全量重载 AGENTS.md、skills 等，造成显著 token 开销，直接影响成本和响应效率。 |
| #2469 | CLOSED | `kimi web` 从 CLI 安装目录启动 MCP，破坏工作区相对路径 | Zehee | 0 | 0 | MCP 服务器启动路径错误，导致工作区相对路径工具不可用，已于今日关闭。 |
| #2473 | CLOSED | `/web` 指令报错 | DCY501 | 0 | 0 | 使用 kimi-for-coding/k2.7 时 `/web` 命令报错，当日提当日关闭，疑为快速修复或重复报告。 |

**重点解读：**

- **#1994 用量争议**是本周最具热度的话题（👍7，评论7条），核心矛盾在于官方以"请求次数"宣传，但实际按 token 计费，K2.6 的长思维链放大了这一差距。官方尚未正式回应。
- **#2472 上下文压缩 token 浪费**虽为新提，但直击成本痛点，与 #1994 形成呼应——社区对 token 效率的关注正在上升。
- **#640 文件读取死循环**是长期悬而未决的 bug，影响自定义模型用户，社区呼吁优先修复。

---

## 4. 重要 PR 进展

| # | 状态 | 标题 | 作者 | 关闭日期 | 内容 |
|---|------|------|------|----------|------|
| #1942 | CLOSED | fix(mcp): 将 MCP 配置传播至子代理并立即恢复 | msenol | 2026-06-24 | 修复子代理（explore、coder、plan 等）无法接收 MCP 配置的问题；同时修复恢复会话时 MCP 工具不可用的问题。SubagentBuilder 此前硬编码 `mcp_configs=[]`，导致所有子代理完全缺失 MCP 工具。 |
| #1377 | CLOSED | feat: 为审批和问答添加 Vim 风格 j/k 键盘导航 | IAMLEIzZ | 2026-06-24 | 在审批和问答交互中支持 `j`/`k` 上下移动选择，提升键盘流用户操作效率。 |

**重点解读：**

- **PR #1942** 是过去24小时最重要的技术修复。MCP 工具在子代理中的缺失严重制约了多步任务的能力（如让子代理调用外部工具），该修复将显著提升子代理场景的实用性。
- **PR #1377** 是社区贡献的 UX 改进，虽非关键功能，但体现了终端用户对 Vim 键绑定的强烈偏好。

---

## 5. 功能需求趋势

从近期 Issues 和 PRs 中可提炼出以下方向：

| 趋势方向 | 代表 Issue | 社区信号 |
|----------|-----------|----------|
| **Token 用量透明与优化** | #1994、#2472 | 用户对 token 消耗快、context compaction 浪费高度敏感，期待更精确的用量预估和压缩策略优化 |
| **MCP 工具链完善** | #2469、#1942 | 工作区路径解析、子代理传播、会话恢复是 MCP 三大痛点，社区对 MCP 作为核心扩展机制有强需求 |
| **自定义模型/端点兼容性** | #640 | 非官方模型（mimo-v2-flash 等）接入时出现兼容性问题，社区希望 CLI 对自定义 Anthropic 端点更健壮 |
| **终端交互体验优化** | #1377 | Vim 键导航、快捷键自定义等需求持续出现，反映终端重度用户对效率工具的期待 |
| **Web 界面稳定性** | #2473、#2469 | `kimi web` 相关 bug 频发，Web 版 CLI 的稳定性仍需加强 |

---

## 6. 开发者关注点

**🔴 高频痛点：**

1. **成本可预测性**：K2.6 思维链导致 token 消耗远超预期，用户需要更清晰的用量预估和配额告警机制。
2. **上下文管理效率**：context compaction 不应全量重载系统提示和项目指令，建议实现增量缓存或摘要复用。
3. **子代理可靠性**：子代理缺失 MCP 配置是重大能力缺口，#1942 的修复值得期待合入主线。

**🟡 持续关注：**

4. **自定义模型兼容性**：使用非官方模型时的异常行为（如死循环）需要更完善的测试覆盖和错误恢复。
5. **Web 端体验**：`kimi web` 的路径管理和命令稳定性需与 CLI 保持一致。

**🟢 积极信号：**

6. **社区贡献活跃**：Vim 导航等 UX 改进 PR 被快速合入，说明维护者对社区持开放态度。

---

> 📌 **明日关注**：官方是否对 #1994 用量争议做出回应；#2472 context compaction 优化是否有开发者跟进；#1942 MCP 子代理修复是否已合入主线版本。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**2026-06-25 | 数据来源: github.com/anomalyco/opencode**

---

## 1. 今日速览

本次发布的 **v1.17.10** 版本聚焦于 MCP（Model Context Protocol）生态的重大增强，包括资源模板读取、指令上下文注入和新的 CLI `--mini` 模式。社区讨论的核心议题 MCP OAuth 认证流程的修复、跨平台 TUI 稳定性（区段错误与键盘快捷键冲突）以及 OpenCode Go 托管服务的模型响应稳定性上。

---

## 2. 版本发布

### v1.17.10

**核心改进 (Improvements):**
- 新增 MCP server instructions 注入 session context
- 支持 OpenCode 管理的 provider 集成
- 新增 MCP resource template 列表与 resource read 工具
- 新增 `--mini` CLI 模式

**Bugfixes:**
- 修复了 MCP resource 模板工具在某些情况下的隐藏异常

> GitHub Release: anomalyco/opencode v1.17.10

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 👍 | 评论 | 要点 |
|---|------|------|-----|------|------|
| [#10416](https://github.com/anomalyco/opencode/issues/10416) | OpenCode is not private by default? | CLOSED | 39 | 59 | 用户发现 session 标题会发送到外部网络生成，引发隐私担忧。社区对此反应热烈，要求默认本地化。 |
| [#28567](https://github.com/anomalyco/opencode/issues/28567) | [FEATURE]: Full MCP client capabilities | OPEN | 25 | 18 | OpenCode 的 MCP 客户端能力落后于最新 MCP 标准，社区呼吁全面对齐协议规范。 |
| [#21090](https://github.com/anomalyco/opencode/issues/21090) | Always "error=Model tried to call unavailable tool" | OPEN | 7 | 11 | 模型反复尝试调用不可用工具，严重影响代码分析工作流，是高频痛点。 |
| [#24817](https://github.com/anomalyco/opencode/issues/24817) | Ctrl+Z closes OpenCode instead of undoing (Linux) | OPEN | 4 | 7 | Linux 下 Ctrl+Z 发送 SIGTSTP 而非撤销操作，违反用户预期。 |
| [#19256](https://github.com/anomalyco/opencode/issues/19256) | [FEATURE]: Ctrl+Z cannot undo input messages | OPEN | 0 | 6 | 与 #24817 相呼应，用户希望 Ctrl+Z 恢复输入历史而非退出应用。 |
| [#31119](https://github.com/anomalyco/opencode/issues/31119) | [BUG]: Error: no such column: name | OPEN | 5 | 8 | 版本升级后 SQLite 数据库架构不兼容导致崩溃，影响回归体验。 |
| [#32706](https://github.com/anomalyco/opencode/issues/32706) | TUI crash with Effect.tryPromise on 1.17.0+ | OPEN | 2 | 5 | v1.17 引入的回归问题，Windows 上 TUI 启动即崩溃。 |
| [#28121](https://github.com/anomalyco/opencode/issues/28121) | panic: Segmentation fault (Bun/Windows) | OPEN | 1 | 3 | Bun 运行时在 Windows 上触发段错误，持续多个版本未根治。 |
| [#32678](https://github.com/anomalyco/opencode/issues/32678) | Why doesn't opencode follow the paths? | CLOSED | 0 | 7 | 用户配置的 AGENTS.md 路径继承未被正确读取，影响自定义指令执行。 |
| [#17232](https://github.com/anomalyco/opencode/issues/17232) | [FEATURE]: Support `opencode.local.json` | OPEN | 8 | 4 | 希望支持项目级本地配置覆盖，实现团队共享基础配置+个人覆盖。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#33738](https://github.com/anomalyco/opencode/pull/33738) | feat(opencode): add experimental MCP tool search | OPEN | 引入 `mcp_search`、`mcp_describe`、`mcp_call` 实验性统一 MCP 工具接口 |
| [#33739](https://github.com/anomalyco/opencode/pull/33739) | fix(app): preserve terminals across session tabs | OPEN | 修复切换 session tab 时 terminal 丢失的问题，key 由 session ID 改为 server identity |
| [#33737](https://github.com/anomalyco/opencode/pull/33737) | fix(event): remove directory filter from SSE stream | OPEN | 修复 SSE 事件因目录匹配过滤导致 TUI 消息不可见的问题 |
| [#33733](https://github.com/anomalyco/opencode/pull/33733) | fix(opencode): cap retry backoff when headers lack retry-after | OPEN | 修复缺少 retry-after 头时指数退避无限制增长的 bug |
| [#33734](https://github.com/anomalyco/opencode/pull/33734) | feat(tui): publish tui.session.select on in-TUI session navigation | OPEN | TUI 内切换 session 时发布事件，解决插件无法感知 session 切换的问题 |
| [#33281](https://github.com/anomalyco/opencode/pull/33281) | feat(cli): add standalone v2 session flow | OPEN | 新增独立模式，通过 v2 API 创建 session，支持 share/revert 状态持久化 |
| [#33226](https://github.com/anomalyco/opencode/pull/33226) | feat(core): add session snapshot and revert system | CLOSED (已合并) | 基于 Git 的 session 快照与回滚系统 |
| [#32936](https://github.com/anomalyco/opencode/pull/32936) | feat(mcp): support resource subscriptions | OPEN | 为 MCP 添加资源变更订阅能力，推进完整 MCP 客户端支持 |
| [#32943](https://github.com/anomalyco/opencode/pull/32943) | feat(mcp): support templates and completion | OPEN | 支持 MCP resource templates 与自动补全 |
| [#32480](https://github.com/anomalyco/opencode/pull/32480) | feat(mcp): surface tool progress | OPEN | 将 MCP progress 通知桥接为 OpenCode 原生工具进度展示 |

---

## 5. 功能需求趋势

基于近 24 小时更新的 50 条 Issues 与 PRs 分析：

| 方向 | 热度 | 典型议题 |
|------|------|----------|
| **MCP 协议完整支持** | 🔥🔥🔥 | 资源订阅、模板列表、OAuth 流程修复、搜索能力 — 社区最大的功能诉求 |
| **Windows 稳定性** | 🔥🔥 | 段错误、Bun 崩溃、PATH 丢失 — Windows 用户体验仍需大幅改善 |
| **TUX/UX 交互修复** | 🔥🔥 | Ctrl+Z 行为、Home/End 键、鼠标可用性 — 基础交互问题持续反馈 |
| **配置系统增强** | 🔥 | `opencode.local.json` 支持、scope-discipline 规则 — 企业/团队场景需求增长 |
| **OpenCode Go (托管服务)** | 🔥 | qwen3.7 模型超时、Cloudflare 120s 限制 — 付费用户对稳定性有高期待 |
| **Session 管理** | 🔥 | 快照/回滚、跨 tab 保留、session 切换事件 — 复杂开发工作流的核心需求 |
| **认证与安全** |  | mTLS 支持、Entra 认证、Basic Auth SSE 传递 — 企业级部署门槛 |

---

## 6. 开发者关注点

### 高频痛点

1. **MCP 认证链路碎片化** — OAuth scope 不传递、mTLS 缺失、Basic Auth 不覆盖 SSE stream，企业用户在集成远程 MCP 服务器时面临多重阻碍。多个 Issue 表明这不是个例，而是系统性问题。

2. **Windows 平台二等公民体验** — 从段错误到 Powershell 识别问题，Windows 用户的负面反馈集中在运行时层面，建议优先排查 Bun 版本和 Windows 特定的构建配置。

3. **版本升级回归** — 数据库迁移失败 (#31119)、v1.17 TUI 崩溃 (#32706) 等回归问题影响用户信心，建议加强升级路径的自动化测试。

4. **工具可用性** — "Model tried to call unavailable tool" (#21090) 被列为 OPEN 状态且获得 7 👍
，说明工具注册与发现机制是影响日常使用体验的关键。

### 积极信号

- MCP 生态正在快速追赶标准（资源订阅、模板、搜索等 PR 集中涌现）
- Session 快照/回滚系统已合并，为 checkpoint 工作流奠定基础
- TUI 交互优化 PR（鼠标支持、Home/End 修复）显示团队在基础体验上的投入

---

*日报由 OWL 生成 | 数据截止 2026-06-25*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-06-25

---

## 1. 今日速览

今日社区活跃度保持稳定，共收到约 48 条 Issue 更新与 13 条 PR 贡献。核心焦点集中在**提供商连接稳定性修复**与**新模型适配器集成**，Amazon Bedrock Mantle 与本地 LLM 支持这两个长期 Issue 继续推进讨论。新 PR 侧，Bedrock 超时恢复、Microsoft Foundry 端点标准化及并行 Agent 任务支持是重要的功能增量。

---

## 2. 版本发布

过去 24 小时无新的 Release 发布。

---

## 3. 社区热点 Issues

以下是本期最值得关注的 10 条 Issue：

| # | 标题 | 作者 | 评论数 / 👍 | 为什么重要 |
|---|------|------|-------------|------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | openai-codex Connection Reliability Issues | liushuaiiu | 69 / 30 | 🔴 **最高热度**：`openai-codex` / `gpt-5.5` 在交互模式下频繁卡在 "Working..." 无响应，影响大量用户。社区响应非常活跃，是当前最紧迫的连接稳定性问题。 |
| [#3357](https://github.com/earendil-works/pi/issues/3357) | Official local LLM provider extension | julien-c | 28 / 37 | 👇 👍 数为本期最高。社区对通过 `baseUrl` 动态拉取模型列表（对接 Ollama/LM Studio/vLLM 等）有强烈且持久的需求。 |
| [#5653](https://github.com/earendil-works/pi/issues/5653) | Move off Shrinkwrap | yoyofield | 16 / 0 | 同时安装 `pi-ai` 和 `pi-coding-agent` 时出现双副本 bug，导致 Provider 注册表分裂。影响 monorepo 架构的依赖管理设计。 |
| [#5363](https://github.com/earendil-works/pi/issues/5363) | Add amazon-bedrock-mantle provider | tasadurian | 14 / 4 | Bedrock Mantle 使用独立于 Converse 的 OpenAI Responses API 后端，需要独立 Provider 适配。已有对应 PR 在跟进。 |
| [#5291](https://github.com/earendil-works/pi/issues/5291) | Sessions hang on "working" with Anthropic subscription | eyalroth | 7 / 2 | 使用 Anthropic Enterprise 订阅时偶发会话卡死。PR #6051 已提交修复，可能即将解决。 |
| [#5509](https://github.com/earendil-works/pi/pull/5509) — 对应 Issue | Amazon Bedrock Mantle OpenAI Responses provider | unexge | — | 已在 PR 章节详述。该 Issue 驱动的 Provider 实现已被正式 PR 跟进。 |
| [#6009](https://github.com/earendil-works/pi/issues/6009) | OpenAI Responses drops reasoning state on out-of-order output | chenbo515 | 2 / 0 | 流式响应顺序错乱时 `thinkingSignature` 丢失，导致后续请求无法复现加密思维链，影响推理模型的上下文保持。 |
| [#6002](https://github.com/earendil-works/pi/issues/6002) | `SessionManager.open()` silently truncates non-session files | e4779 | 2 / 0 | **数据安全红线**：向 `SessionManager` 传入非会话文件路径时，文件被静默截断至 133 字节且无任何警告。社区对此破坏性行为的严重性反应强烈。 |
| [#5992](https://github.com/earendil-works/pi/issues/5992) | Pi crashes: "value.startsWith is not a function" | devtingz | 3 / 0 | 长时间会话重载后触发自动补全匹配的致命崩溃，典型的大规模上下文场景稳定性隐患。 |
| [#6037](https://github.com/earendil-works/pi/issues/6037) | Hostname Information Exposed via System Prompt Leakage | vijayfl | 2 / 0 | Agent 通过系统提示泄露内部主机名信息。标注为 `no-action` 但引发了关于沙箱隔离与信息泄露风险的讨论。 |

---

## 4. 重要 PR 进展

| PR | 标题 & 作者 | 状态 | 关键内容 |
|----|------------|------|----------|
| [#6051](https://github.com/earendil-works/pi/pull/6051) | fix(ai): recover from hung streams and retry unmodeled Bedrock errors — eyalroth | ✅ Closed (已合并) | **流式超时机制**：新增 `streamIdleTimeoutMs`（默认 240s 空闲超时）与 `connectTimeoutMs`，将假死连接转为可重试错误，解决 Issue #5291 的卡死问题。 |
| [#5509](https://github.com/earendil-works/pi/pull/5509) | feat: Add Amazon Bedrock Mantle OpenAI Responses provider — unexge | 🟡 Open | 新增独立 Provider，支持 `bedrock-mantle.{region}.api.aws/openai/v1/responses` 端点，适配 GPT-5.5/5.4。 |
| [#6054](https://github.com/earendil-works/pi/pull/6054) | feat: add runParallelAgentTasks + parallel batching system prompt — kshivam654 | ✅ Closed | 在 `@earendil-works/pi-agent-core` 中新增 `runParallelAgentTasks` 工具，支持并行的独立 Agent 子循环，附带定制的并行批处理系统提示。 |
| [#6032](https://github.com/earendil-works/pi/pull/6032) | fix(ai): pass custom fetch to openai clients — denghongcai | ✅ Closed | 将用户自定义 `fetch` 正确透传给 OpenAI SDK 实例，修复代理/拦截器等场景下无法注入的问题。 |
| [#6004](https://github.com/earendil-works/pi/pull/6004) | feat: Normalize modern Microsoft Foundry endpoints — gukoff | ✅ Closed | 修复 `*.ai.azure.com` 端点规范化逻辑，处理现代 Foundry URL 的冗余路径后缀。 |
| [#6048](https://github.com/earendil-works/pi/pull/6048) | fix: show resources before messages when resuming session — haoqixu | ✅ Closed | 会话恢复后重排 UI：Context/Skills/Prompts 资源现在出现在消息列表上方。 |
| [#6018](https://github.com/earendil-works/pi/pull/6018) | feat: show context estimates in session tree — Perlence | ✅ Closed | 会话树中新增上下文用量概览，快速定位大型 Agent 会话。 |
| [#6030](https://github.com/earendil-works/pi/pull/6030) | fix: print benchmark timings after TUI stop — xl0 | ✅ Closed | 修复 TUI 退出后 benchmark 计时数据不显示的问题。 |
| [#5268](https://github.com/earendil-works/pi/pull/5268) | fix(tui): render hardware cursor by default — gotgenes | ✅ Closed | 失焦时光标从实心块切换为空心描边（硬件光标），修复 Issue #3896。 |
| [#6056](https://github.com/earendil-works/pi/pull/6056) | feat(subagent): simplify agent configs with minimax model — amp-rh | ✅ Closed | 子代理 Extension 示例全部切换至 MiniMax-M2.7 模型，新增通用 `default.md` Agent 配置。 |

---

## 5. 功能需求趋势

从本期 Issue 与 PR 中可以提炼出以下 **4 大功能方向**：

### 🔌 新 Provider 集成与连接稳定性（最高优先级）
- Amazon Bedrock Mantle Provider（Issue #5363 / PR #5509）
- Charm Hyper Provider 请求（Issue #6042）
- OpenAI Codex 流连接稳定性修复（Issue #4945）
- Anthropic Enterprise 订阅的会话卡死修复（Issue #5291 / PR #6051）
- Bedrock 空闲超时与 Connect 超时配置（PR #6051）

### 🏠 本地 / 私有化模型支持
- 官方本地 LLM Provider 扩展（Issue #3357，👍 数本期最高）
- Ollama / llama.cpp / LM Studio / vLLM 动态模型列表拉取

### 🏗️ Agent 与子代理能力演进
- 并行 Agent 任务支持 `runParallelAgentTasks`（PR #6054 / Issue #6053）
- Agent 会话生命周期与 transcript 管理重构（Issue #5886）
- 子代理配置简化与默认 Agent 模板（PR #6056）
- Exit code 信息不明确修复（Issue #6043）

### 🖥️ TUI / 终端体验优化
- Termux 屏幕旋转导致挂死（Issue #6038）
- Termux 长请求期间无法滚动回看（Issue #4690）
- 超长行终端崩溃（Issue #6058）
- `value.startsWith` 崩溃修复（Issue #5992）
- 主机名信息泄露风险（Issue #6037）

---

## 6. 开发者关注点总结

**高频痛点（按影响面排序）：**

1. **会话与会话文件安全** — `SessionManager.open()` 静默截断非会话文件（Issue #6002）是最严重的数据安全反馈，开发者要求增加路径校验与保护机制。

2. **长时间会话稳定性** — 多例崩溃（Issue #5992、#5291）和流中断（Issue #4945、#6019）表明在大规模上下文 / 长连接场景下仍需加强容错。

3. **推理模型上下文保持** — 流式响应乱序导致 `thinkingSignature` 丢失（Issue #6009），对使用加密思维链推理的用户影响直接。

4. **自定义 `fetch` 注入** — 部分开发者依赖代理或请求拦截，缺少 `fetch` 透传（已修复 PR #6032）长期限制了 Pi 在受控网络环境中的部署。

5. **命名会话快捷操作** — 类似 `/new sessionname` 的一键命名会话功能（Issue #6046），反映用户对终端交互效率的持续追求。

6. **安全审计关注** — `@hypabolic/pi-hypa` 被多次标记可疑（Issues #6052、#6044、#6049），引发社区对第三方 Extension 包安全审查机制的呼吁。

---

> 📊 **本期总结**：社区正处于 **稳定性加固**（Bedrock 超时、流式恢复）与 **新生态扩展**（本地 LLM、Bedrock Mantle、并行 Agent）并行推进的阶段。长期高热度 Issue #4945 与 #3357 仍未解决，建议重点关注其进展。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-25

---

## 1. 今日速览

Qwen Code 今日发布 v0.19.2 正式版，主要包含远程 LSP 状态路由等底层能力提升。社区讨论集中在**安全性修复**（source deletion 路径遍历漏洞）、**循环任务（/loop）的优雅取消机制**、以及**语音输入功能的扩展性改进**。此外，多个 CI/CD 优化 PR 持续推进，旨在缩短 PR 关键路径并修复发布流程稳定性问题。

---

## 2. 版本发布

### v0.19.2（正式版）
- **feat(serve)**: 新增远程 LSP 状态路由（remote LSP status route），由 @doudouOUC 提交
- 🔗 [PR #5762](https://github.com/QwenLM/qwen-code/pull/5762)

### v0.19.2-preview.0 / v0.19.1-nightly.20260624 / v0.18.5-preview.0
- 均为自动发布的预览/nightly 版本，变更内容与正式版一致

---

## 3. 社区热点 Issues

| # | Issue | 关注原因 |
|---|-------|----------|
| **#5834** | [Source deletion 路径遍历漏洞](https://github.com/QwenLM/qwen-code/issues/5834) | **P1 安全问题**。Desktop 端 source 删除接口接受用户构造的 `sourceSlug`，可逃逸出 workspace sources 目录，存在路径遍历风险。已有 PR #5829 修复中。 |
| **#5837** | [Agent 最后一条回复被截断](https://github.com/QwenLM/qwen-code/issues/5837) | UI 渲染问题，agent 输出在特定条件下被截断，影响使用体验。4 条评论，社区关注度高。 |
| **#5838** | [允许用户调整 Agent 命令超时时间](https://github.com/QwenLM/qwen-code/issues/5838) | 用户希望能自定义 AI Agent 启动进程的超时设置，避免长时间挂起。新需求，3 条评论。 |
| **#5836** | [任务清单持久化到项目目录](https://github.com/QwenLM/qwen-code/issues/5836) | 希望 todos/plans/memories 支持存储在项目内（如 `.qwen/todos`），实现跨设备同步和多人协作。3 条评论，切中团队协作痛点。 |
| **#5819** | [升级后自动切换高单价 Model](https://github.com/QwenLM/qwen-code/issues/5819) | 用户反馈 v0.19 升级后 settings.json 被自动修改为 DeepSeek-4 pro，导致 token 消耗剧增。涉及模型切换策略的合理性争议。 |
| **#5823** | [/loop cron 任务静默触发](https://github.com/QwenLM/qwen-code/issues/5823) | 用户发现之前设置的 cron 任务在每次新会话中自动静默执行，模型无法列出或停止自己的定时任务。后台自动化可见性不足。 |
| **#5806** | [/loop 用户中断后仍继续触发](https://github.com/QwenLM/qwen-code/issues/5806) | Esc 取消当前 loop tick 后，pending wakeup 未被取消，导致 loop 静默恢复。已有 PR #5808 修复。 |
| **#5800** | [Static 模式下回复超终端高度时被覆盖](https://github.com/QwenLM/qwen-code/issues/5800) | TUI 渲染 bug，当 assistant 回复超过终端高度时最后一行被覆盖。上游 Ink 库问题。 |
| **#5736** | [全量 prompt 重新处理频率增加](https://github.com/QwenLM/qwen-code/issues/5736) | 用户发现更新后本地 LLM 在继续对话时更频繁地触发全量 prompt 重处理，影响性能。5 条评论，社区讨论最热。 |
| **#5219** | [集成测试不在 PR 时运行](https://github.com/QwenLM/qwen-code/issues/5219) | 架构级问题：e2e 集成测试仅在 nightly release 时执行，导致回归问题只能在发布时才暴露。长期讨论中。 |

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| **#5829** | [fix(desktop): 拒绝不安全的 source slug](https://github.com/QwenLM/qwen-code/pull/5829) | 修复 #5834 路径遍历漏洞，在删除前校验 source 标识符，阻止目录逃逸。**安全关键修复**。 |
| **#5808** | [fix(cli): 取消 pending loop wakeup](https://github.com/QwenLM/qwen-code/pull/5808) | 修复 #5806，Esc 取消 loop tick 时同时取消 pending 的 wakeup，防止静默恢复。 |
| **#5817** | [feat(cli): 用户可配置的语音关键词文件](https://github.com/QwenLM/qwen-code/pull/5817) | 新增 `general.voice.keytermsFile` 设置，允许用户扩展 ASR 关键词列表，解决 #5816 的需求。 |
| **#5835** | [fix(core): 重新应用 provider 安装计划时保留选中 model](https://github.com/QwenLM/qwen-code/pull/5835) | 修复 #5819 相关问题——重新认证/刷新 token 不再切换当前活跃模型。 |
| **#5827** | [fix(core): OpenAI pipeline 添加流式不活动超时](https://github.com/QwenLM/qwen-code/pull/5827) | 修复流式响应中 chunk 间无超时限制的问题，防止连接无限挂起。 |
| **#5804** | [feat(telemetry): 敏感 span 属性长度限制可配置](https://github.com/QwenLM/qwen-code/pull/5804) | 将敏感 OpenTelemetry span 属性截断上限提升至 1 MiB，并支持配置覆盖。 |
| **#5826** | [feat(cli): 添加技能使用统计](https://github.com/QwenLM/qwen-code/pull/5826) | 新增实时技能调用统计，通过 `/stats skills` 暴露，支持 daemon session。 |
| **#5832** | [ci(release): 发布流程适配 merge queue](https://github.com/QwenLM/qwen-code/pull/5832) | 使自动发布兼容 main 分支的 merge queue，并从 release notes 中排除自动化 PR。 |
| **#5799** | [fix(cli): 修复非 VP 模式滚动回弹](https://github.com/QwenLM/qwen-code/pull/5799) | 修复 #5798，多 agent 运行时非 VP 模式下滚动无法保持、画面闪烁的问题。 |
| **#5616** | [feat(memory): 自动生成的技能持久化前需确认](https://github.com/QwenLM/qwen-code/pull/5616) | 解决 #5263，background skill-review agent 生成的技能在入库前需用户审核。 |

---

## 5. 功能需求趋势

从近 24 小时 25 条 Issues 和 50 条 PRs 中提炼出以下方向：

### 🔒 安全与稳定性（高优先级）
- 路径遍历漏洞修复（#5834 / #5829）
- 流式超时控制（#5827）
- IDE server 端口校验（#5675）

### 🎙️ 语音输入生态扩展
- 用户可配置 ASR 关键词文件（#5816 / #5817）
- 语音转录接入 Web Shell 和 Desktop UI（#5796）
- 语音转录后用快速模型精炼（#5770）
- Daemon 语音 API（#5765）

### 🔄 后台任务与自动化可见性
- /loop 任务的中断与取消机制（#5806 / #5808）
- Cron 任务需要 list/stop 能力（#5823）
- 定时任务静默触发缺乏可见性

### 📁 跨设备/协作支持
- 任务清单持久化到项目目录（#5836）
- Plans、memories 跨设备共享

### ⚡ CI/CD 与发布工程
- 集成测试前置到 PR 阶段（#5219 / #5665）
- PR 关键路径优化从 25min 缩短（#5027）
- Merge queue 适配（#4805 / #5832）
- Release 流程稳定性（#5831）

### 🖥️ TUI/UX 改进
- 工具按类型分区展示（#5661）
- Ctrl+O transcript 全详情屏设计（#5666）
- 状态栏默认启用（#5789）
- 会话恢复时折叠预览优化（#5759）

---

## 6. 开发者关注点与痛点

1. **模型切换策略争议**：升级后自动切换到高单价模型（#5819）引发社区对自动模型选择逻辑的质疑，用户期望版本升级不改变已有配置。

2. **本地 LLM 性能问题**：全量 prompt 重处理频率增加（#5736）是讨论最热的 issue，使用 llama.cpp 等本地后端的用户对缓存命中率敏感。

3. **后台任务"黑盒"体验**：cron/loop 任务缺乏可见性和控制力（#5823），用户期望 AI agent 的定时行为可审计、可管理。

4. **集成测试缺口**：多位贡献者（@yiliang114）持续推动将 e2e 测试从 nightly 前置到 PR 阶段，反映社区对 CI 信心不足。

5. **语音输入作为一等公民**：社区对语音功能的扩展诉求密集（关键词定制、多平台支持、转录精炼），显示语音交互正在成为核心输入方式。

6. **安全审计意识提升**：白帽用户（@VectorPeak）主动提交路径遍历漏洞，说明社区安全参与度在提高。

---

> 📊 本期总结：v0.19.2 版本变更量不大，但社区 issue 讨论深度显著提升，尤其在**安全**、**后台任务可控性**和**语音输入**三个方向形成了密集讨论。CI/CD 优化工作由核心维护者持续推进，多条长期 issue 正在通过 PR 逐步收束。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-06-25**

---

## 一、今日速览

今日无新 Release 发布，但开发活动极为活跃：过去 24 小时内共处理 ~47 条 Issue 更新与 ~50 条 PR 更新。本周核心工作集中在 **v0.8.65 里程碑收尾** —— Provider 路由架构、Fleet 多 Agent 框架、`/provider` 仪表盘、能力感知回退链等大量功能合并到 `main`。同时社区出现了若干新反馈，最突出的是 **模型在修改范围之外"过度主动"（#3275）** 的回归报告，引发 12 条评论热议。

---

## 二、版本发布

过去 24 小时无新版发布。当前主线仍指向 **v0.8.65** 的正式 cut， ledger 已在 #3493 / #3564 中对齐真实发布状态。

---

## 三、社区热点 Issues（精选 10 条）

### 1. #3275 — CodeWhale 过度主动修改代码、偏离用户意图
- **作者**：yekern | **状态**：OPEN | 👍 0 | 💬 12
- **标签**：bug, question, security, reliability, v0.8.66
- **要点**：模型在用户仅提出小改动时，自行进入"提问 → 自答 → 执行"的循环，大幅扩展修改范围。这是一个在 #3061 已修复的问题上的回归。12 条评论让它成为本周最受关注的 bug。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3275)

### 2. #3222 — v0.8.65：reasoning stream 样式覆盖
- **作者**：buko | **状态**：CLOSED | 💬 11
- **标签**：bug, documentation, enhancement, v0.8.65
- **要点**：为 OpenAI 兼容的 inline `<think>...</think>` 推理块支持路线级别的 stream 样式覆盖，确保不同 gateway 的推理内容在 TUI 中正确渲染。经过 11 轮讨论已关闭。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3222)

### 3. #3063 — v0.8.59 发布追踪器
- **作者**：Hmbown | **状态**：CLOSED | 💬 11
- **标签**：bug, documentation, enhancement, release-blocker, v0.8.59
- **要点**：作为 v0.8.59 的 stabilization 发布追踪器，整合了 macOS TUI mouse-report 输入泄漏修复及 PR 队列分类。已于 06-24 关闭。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3063)

### 4. #3205 — Fleet 模型类、自动 loadout 与语义路由角色
- **作者**：Hmbown | **状态**：OPEN | 💬 10
- **标签**：bug, enhancement, workflow-runtime, model-lab, subagents, v0.8.65
- **要点**：为 TUI、CLI、exec、subagents 和 Fleet workers 构建统一的模型选择器。核心概念是 **Fleet loadout auto** —— 根据角色/槽位自动解析完整算力配置。这个 Issue 的规模说明 Fleet 架构仍在密集设计中。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3205)

### 5. #3461 — MCP 重复服务实例生命周期问题
- **作者**：stream2stream | **状态**：CLOSED | 💬 8
- **标签**：bug, tools, reliability, v0.8.65
- **要点**：一个 `mcp.json` 条目被 fork 出两个 MCP server 进程，其中一个是孤儿进程，白白浪费约 4MB RAM。已通过 #3562 在 06-24 修复。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3461)

### 6. #2608 — 分离 Provider 事实、Model 事实、产品和路由解析
- **作者**：Hmbown | **状态**：CLOSED | 💬 8
- **标签**：bug, enhancement, v0.8.65
- **要点**：整个 v0.8.65 多 Provider 路由架构的顶层设计 Issue。确立了核心不变量："单独的模型字符串永远不足以选择一条路线"。多个子 Issue 的合并使其在 06-24 关闭。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/2608)

### 7. #3466 — 审批弹窗取消与 review-required 语义争议
- **作者**：Artenx | **状态**：OPEN | 💬 4
- **标签**：enhancement, question, security, ux, reliability, v0.8.66
- **要点**：用户反馈 0.8.64 更新后每次破坏性操作都需要审批，询问能否回到过去完全不需要确认的逻辑。反映了安全策略升级与用户体验之间的张力——一些用户更偏好 YOLO 模式下的无感操作。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3466)

### 8. #3192 — 注册到 Agent Client Protocol Registry
- **作者**：Jengro777 | **状态**：OPEN | 💬 7
- **标签**：enhancement, v0.8.69
- **要点**：建议 CodeWhale 进入 Agent Client Protocol 公共注册表，方便 Zed 等 IDE 直接发现和安装。具有生态战略意义。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3192)

### 9. #3384 — 通过 ReadyRouteCandidate 原子化所有 Provider/Model 切换
- **作者**：Hmbown | **状态**：CLOSED | 💬 6
- **标签**：bug, documentation, enhancement, model-lab, reliability, v0.8.65
- **要点**：确保 TUI、slash 命令、fallback、model picker 等所有切换路径在修改任何应用/配置/压缩预算之前，先解析完整的路由候选。这是防止状态不一致的关键架构修复。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3384)

### 10. #3439 — 接入智谱 GLM-5.2 作为 Provider 路由 fixture
- **作者**：413057leebobo | **状态**：CLOSED | 💬 6
- **标签**：enhancement, model-lab, v0.8.65
- **要点**：社区用户请求支持智谱 GLM-5.2 模型，用于中文长文档理解和中文创作场景。提供了完整的 API 信息（open.bigmodel.cn），并讨论了通过 `agent` 工具指定 `model: "glm-5.2"` 分发子任务的方案。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3439)

---

## 四、重要 PR 进展（精选 10 条）

### 1. #3565 — fix(tui): 在 engine event loop 中捕获 UTF-8 字节边界 panic
- **作者**：Nikita-Tikhomirov | **状态**：OPEN
- **内容**：当模型或工具输出包含多字节 UTF-8 字符（西里尔文、CJK 等）时，TUI 文本处理管道中的字节边界 panic 会杀死引擎事件循环，导致 UI 冻结。此 PR 用 `catch_unwind` 让引擎循环存活下来。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3565)

### 2. #3563 — v0.8.65：事实模型参考数据库 + /modeldb 浏览
- **作者**：Hmbown | **状态**：CLOSED
- **内容**：为每个模型建立事实属性（context window、价格、模态、provider/kid、原始 model id）并存入参考数据库，支持 `/modeldb` 浏览命令。关联 #3205 / #2300。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3563)

### 3. #3562 — v0.8.65：被动 MCP 工具发现 + 自定义 Provider 行
- **作者**：Hmbown | **状态**：CLOSED
- **内容**：两个独立修复：(1) 默认不主动 spawn stdio MCP 进程（修复 #3461 的孤儿进程问题）；(2) 支持配置自定义 Provider 行（#1519）。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3562)

### 4. #3555 — feat(tui): /provider 就绪仪表盘 — 能力/元数据徽章
- **作者**：Hmbown | **状态**：CLOSED
- **内容**：完成 #3083 的 `/provider` 仪表盘，展示推理就绪状态、支持的控制方式、流式可见性、当前配置等能力徽章。整合了 #3504 中的 reasoning-readiness 提交。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3555)

### 5. #3554 — test(tui): #2574 回退链验收覆盖 + 本地/私有护栏
- **作者**：Hmbown | **状态**：CLOSED
- **内容**：为能力感知 Provider 回退链（#2574）补齐测试覆盖，关闭了最后一个缺口。包含本地/私有部署的护栏测试。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3554)

### 6. #3553 — fix(tui): 在 YOLO 模式下抑制 typed ask-rule 弹窗
- **作者**：Hmbown | **状态**：CLOSED
- **内容**：修复 YOLO 模式下 shell/文件命令仍弹出审批弹窗的 bug。根因是 `ApprovalMode::Auto` 未正确映射 YOLO 语义。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3553)

### 7. #3556 — feat(client): Provider 实时 /models 拉取 + 无密钥缓存刷新
- **作者**：Hmbown | **状态**：CLOSED
- **内容**：推进 #3385 —— 让 hosted aggregators、本地运行时和自定义端点能暴露当前 Provider 作用域的模型列表，无需硬编码。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3556)

### 8. #3549 / #3559 — feat(i18n): 中文翻译提取到独立 JSON 文件
- **作者**：cy2311 / Hmbown | **状态**：CLOSED
- **内容**：将 5385 行 `localization.rs` 中的 408 条简体中文 UI 字符串提取到 `locales/zh-Hans.json`，是 #3537 i18n 重构的第一步。
- [查看 PR #3549](https://github.com/Hmbown/CodeWhale/pull/3549) | [查看 PR #3559](https://github.com/Hmbown/CodeWhale/pull/3559)

### 9. #3547 — feat(tui): 从写入审批中保存精确文件 ask rules
- **作者**：greyfreedom | **状态**：CLOSED
- **内容**：扩展审批弹窗的"保存 ask rule"动作到 `write_file` 和 `edit_file`（之前仅支持 `exec_shell`）。按 `S` 键可持久化精确的工作区相对路径规则。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3547)

### 10. #3564 — ci/release: 冻结标签并加速 Rust PR 门禁
- **作者**：Hmbown | **状态**：CLOSED
- **内容**：将 release tag helper 改为手动模式（不再每次版本 bump 自动打 tag），记录发布前 source-freeze 检查流程，更新 v0.8.65 ledger。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/3564)

---

## 五、功能需求趋势

从本期所有 Issues/PRs 中提炼出的社区关注方向：

| 趋势方向 | 热度 | 代表 Issue/PR |
|---|---|---|
| **多 Provider 路由架构** | 🔥🔥🔥 | #2608, #3384, #3385, #3556, #3555 |
| **Fleet 多 Agent 框架** | 🔥🔥🔥 | #3205, #3167, #3154, #3166 |
| **模型生态扩展** | 🔥🔥 | #3439 (GLM-5.2), #2300, #3563, #2984 (OpenAI OAuth) |
| **TUI 稳定性与输入处理** | 🔥🔥 | #3565 (UTF-8 panic), #3466 (审批 UX), #3553 (YOLO 模式) |
| **安全与权限模型** | 🔥🔥 | #3466, #3547, #3553, #3275 (行为安全) |
| **i18n / 中文本地化** | 🔥 | #3549, #3559, #3087 (README 重写) |
| **IDE / 工具生态集成** | 🔥 | #3192 (Agent Client Protocol Registry), #2934 (侧边栏会话面板) |
| **MCP 工具集成** | 🔥 | #3461, #3562 |

---

## 六、开发者关注点与痛点

### 🔴 高优先级痛点

1. **模型"过度主动"行为（#3275，12 条评论）**
   - 用户报告模型在小请求下自行扩展修改范围，进入自问自答循环。这是安全性和可靠性的交叉问题，也是从 #3061 修复后的回归，社区期待快速响应。

2. **审批弹窗过于频繁（#3466，4 条评论）**
   - 0.8.64 更新后破坏性操作每次都需要确认，部分用户怀念旧版"零确认"逻辑。反映了安全策略升级需要更细粒度的用户控制。

3. **UTF-8 字节边界导致 TUI 冻结（#3565）**
   - 多字节字符（CJK、西里尔文）在模型输出中导致引擎 event loop panic。影响所有非英语用户，是影响面广的稳定性问题。

### 🟡 中优先级反馈

4. **MCP 孤儿进程浪费资源（#3461）**
   - 单个 MCP 配置 fork 出两个进程，其中一个永远不工作。虽已修复，但说明 MCP 服务生命周期管理需要更严谨。

5. **YOLO 模式下仍弹审批（#3553）**
   - 显式选择"全工具无审批"模式后仍被 ask-rule 弹窗打断，是权限系统映射的语义缺陷。

6. **缺乏会话侧边栏（#2934）**
   - 用户只能通过 `Ctrl+R` 弹出切换会话，无法浏览历史会话列表。是 TUI 长期 UX 改进需求。

### 🟢 长期方向

7. **Agent Client Protocol 注册（#3192）**
   - 社区推动 CodeWhale 进入公共 Agent 注册表，便于 Zed 等 IDE 发现和安装，具有开放生态战略价值。

8. **中文本地化（#3549/#3559）**
   - 中文翻译从硬编码 Rust 文件提取到独立 JSON，是国际化的基础工作，有助于后续多语言扩展。

---

> **日报总结**：本周是 v0.8.65 的"收割周"——大量之前设计的多 Provider 路由、Fleet 框架、能力感知回退等核心架构 PR 集中合并到 `main`。社区反馈的焦点开始从"要什么功能"转向"现有功能的边界和体验"——模型行为控制、审批频率、字符编码稳定性等"最后一公里"问题正成为新的讨论热点。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*