# AI CLI 工具社区动态日报 2026-06-18

> 生成时间: 2026-06-18 00:44 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 — 2026-06-18

---

## 1. 生态全景

2026 年 6 月中旬，AI CLI 工具生态正处于**从"单 Agent 辅助"向"多 Agent 系统工程"转型的关键阶段**。一方面，Claude Code、OpenAI Codex、Gemini CLI 等头部工具快速迭代 alpha/preview 版本，多 Agent 编排、插件生态和安全沙箱成为研发重心；另一方面，Qwen Code、DeepSeek TUI（CodeWhale）等新兴工具正密集修复稳定性问题，努力缩小与头部工具的差距。**MCP（Model Context Protocol）已成为事实上的工具集成标准**，但各工具在 MCP 支持深度、schema 统一和 OAuth 可靠性上仍存在显著碎片化。整体来看，社区对 Agent 行为的**可控性、稳定性和安全性**的诉求已达到前所未有的高度，单纯"能用"已无法满足开发者需求。

---

## 2. 各工具活跃度对比

| 工具 | Issues 数（24h） | PRs 数（24h） | Release | 版本 | 整体活跃度 |
|------|:-:|:-:|:-:|:-:|:-:|
| **Claude Code** | ~50+ | 5（更新） | ✅ | v2.1.181 | ⭐⭐⭐⭐⭐ |
| **OpenAI Codex** | ~50+ | 10（更新） | ✅ ×2 | v0.141.0-alpha.5 / .6 | ⭐⭐⭐⭐⭐ |
| **Gemini CLI** | ~30+ | 10 | ✅ | v0.48.0-preview.0 | ⭐⭐⭐⭐ |
| **Copilot CLI** | ~10+ | 0 | ✅ | v1.0.64-0 | ⭐⭐⭐ |
| **Kimi Code CLI** | 2 | 0 | ❌ | — | ⭐ |
| **OpenCode** | ~50+ | 10（更新） | ✅ | v1.17.8 | ⭐⭐⭐⭐⭐ |
| **Pi** | 48 | 15（更新） | ❌ | — | ⭐⭐⭐⭐ |
| **Qwen Code** | ~15+ | 10+（更新） | ✅ | v0.18.3 | ⭐⭐⭐⭐ |
| **DeepSeek TUI** | 16 | 27（更新） | ❌ | —（v0.8.61） | ⭐⭐⭐⭐ |

> 注：Issues 数为基于日报摘要中提及数量的估算；Pi 和 DeepSeek TUI 的 PR 密度尤为突出，显示社区驱动修复效率较高。

---

## 3. 共同关注的功能方向

以下功能方向被 **3 个及以上工具**的社区同时关注：

### 🔹 多 Agent 协作与编排（9 个工具全部涉及）
| 工具 | 具体诉求 |
|------|---------|
| Claude Code | 跨 Session 通信、Agent-to-Agent 协议、嵌套子 Agent、per-teammate 配置 |
| OpenAI Codex | per-turn 委托选择、线程级多智能体模式、resume/fork 历史优化 |
| Gemini CLI | 子代理挂起/假成功修复、Shell 命令卡住、破坏性行为防护 |
| OpenCode | 多 Agent 协作（隔离工作区）、Session Goals + /goal 命令 |
| DeepSeek TUI | Agent Fleet 协议、多 agent 并发调度、Chat-native 工作间愿景 |
| Pi | 多会话 TUI 切换、getActiveExecutableTools API |
| Qwen Code | /loop 自步调唤醒引擎、中断 turn 恢复 |
| Copilot CLI | Subagent MCP 访问缺失 |
| Kimi Code CLI | Agent ↔ 集群模式动态切换 |

### 🔹 Agent 稳定性与可靠性（8 个工具）
高频共性问题包括：会话挂起/冻结（Claude Code #26224、Gemini CLI #21409、OpenCode #29079、Qwen Code #5234）、子 Agent 行为不可控（DeepSeek TUI #3275、Gemini CLI #22323）、命令执行卡住（Gemini CLI #25166）和 CPU/内存资源泄漏（OpenCode #19466、Codex #25921）。

### 🔹 MCP 生态与集成（7 个工具）
- **Copilot CLI**：MCP Registry 安装、Subagent MCP 访问、OAuth 可靠性、schema 与 VSCode 统一
- **Claude Code**：多 Slack 工作区、MCP OAuth 远程场景
- **OpenCode**：OpenAI 兼容提供商 MCP 校验修复
- **Gemini CLI**：MCP 数据来源标注（wrapUntrusted）、MCP header Unicode 编码
- **Pi**：HTTP 错误实体透传（改善代理/MCP 调试）
- **Qwen Code**：自定义 Provider、OpenAI 兼容本地 LLM 接入
- **Codex**：插件安装多选器重构（5 条 PR 系列）

### 🔹 安全与权限精细化（7 个工具）
- 沙箱隔离：Claude Code（Apple Events 沙箱）、Gemini CLI（CI 供应链安全）、OpenCode（Agent 沙箱 #2242）
- 权限模型：Copilot CLI（工具白名单 #1973、Hook 静默执行 #2643）、Qwen Code（ACP 权限超时配置）
- Agent 行为安全：Gemini CLI（阻止 git reset --force #22672）、DeepSeek TUI（scope_discipline 规则 #3290）、Claude Code（权限继承问题 #29214）

### 🔹 跨平台一致性（6 个工具）
Windows/WSL 体验差距是多个工具的共同痛点：Claude Code（WSL 权限继承）、Codex（macOS WebSocket 重连 + syspolicyd + Crashpad 四重问题堆叠）、Gemini CLI（Wayland/ACP token 计数）、OpenCode（Alpine/musl 兼容性、Linux Ctrl+Z 冲突）、DeepSeek TUI（Ubuntu 24.04 安装失败）、Pi（Warp 终端识别、Linux XDG 规范）。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 功能侧重 | 目标用户 | 技术路线特点 |
|------|---------|---------|---------|-------------|
| **Claude Code** | 企业级多 Agent 工作台 | Agent Teams、权限控制、跨仓库协作 | 大型项目团队、企业开发者 | 配置驱动（CLAUDE.md）、交互式 `/config` 语法、强权限模型 |
| **OpenAI Codex** | 研究者/高级用户的多模态 Agent | 多 Agent 架构、图片生成、插件生态 | 付费 Pro 用户、研究型开发者 | Rust 实现层、alpha 快速迭代、多 Agent v2 核心架构推进 |
| **Gemini CLI** | 安全优先的工程级 Agent 工具 | 供应链安全、AST 感知代码理解、多模态终端 | Google Cloud 生态开发者、安全敏感团队 | 依赖锁定策略、MCP 安全标注（wrapUntrusted）、组件级评估体系 |
| **Copilot CLI** | GitHub 生态深度集成的轻量 Agent | MCP Registry、安全审查、企业自定义模型 | GitHub 重度用户、企业开发者 | 服务化架构（gh CLI 扩展）、与 VS Code/GitHub Actions 深度联动 |
| **OpenCode** | 多模型聚合的通用 Agent 平台 | 自动模型发现、多提供商支持、Session Goals | 模型流动性需求强的开发者、自建 LLM 用户 | 插件化提供商架构、ChatGPT OAuth/Ollama/Azure 全覆盖 |
| **Pi** | 面向开发者的可编程 Agent SDK | TUI 体验、提供商错误可观测性、多模态 | 集成 Pi 为依赖的开发者、Terminal 重度用户 | 双包结构（pi-ai + pi-coding-agent）、流式错误透传、思考级别扩展 |
| **Qwen Code** | 国内市场优先的多渠道 Agent | 多模态桥接、i18n、多渠道（QQ/TG/微信/钉钉） | 中文开发者、国内企业用户 | 视觉桥接（图像→文本）、秒级会话唤醒、ACP 协议兼容 |
| **DeepSeek TUI (CodeWhale)** | 下一代聊天原生 Agent 工作间 | Chat-native 工作间愿景、Agent Fleet、品牌重塑 | 追求新交互范式的早期用户 | 品牌重命名过渡中、v0.9.0 架构重构、多 agent 并发调度 |
| **Kimi Code CLI** | 轻量国产 Agent CLI | 执行模式灵活切换、企业环境适配 | 企业内网环境开发者 | 社区处于早期，功能方向聚焦可用性和灵活性 |

---

## 5. 社区热度与成熟度

### 🔥 高活跃度 + 成熟产品
- **Claude Code**：Issue 评论量最高（#26224 达 118 条评论 + 143 👍），功能生态最完善，已进入企业级多 Agent 阶段。当前瓶颈是稳定性（挂起 bug）和跨平台一致性。
- **OpenCode**：Issue #11176（官方 VS Code 扩展）获 110 点赞，Issue #29079（GPT 延迟）达 117 条评论，社区参与度高，模型生态扩展最为激进（Kiro/Microsoft Foundry/Azure 全覆盖）。

### ⚡ 高活跃度 + 快速迭代
- **OpenAI Codex**：同日发布两个 alpha 版本，内部 PR 密集推进（5 条插件多选器 PR 同日涌入），但 macOS 桌面端稳定性积累的债务较重。
- **DeepSeek TUI**：27 条 PR 更新为所有工具最多，社区驱动修复效率极高，但处于品牌重命名过渡期，v0.9.0 架构重构尚在早期。
- **Pi**：15 条 PR 更新，TUI 体验和模型兼容性扩展推进快，但 Shrinkwrap 模块冲突等结构性债务需解决。

### 📈 中等活跃度 + 稳步演进
- **Gemini CLI**：v0.48.0-preview.0 聚焦基础设施加固，P1 bug 集中但响应有序。
- **Copilot CLI**：v1.0.64-0 功能更新重磅（/security-review 全面开放、MCP Registry），但 PR 活动偏低，可能依赖内部私仓开发。
- **Qwen Code**：v0.18.3 聚焦稳定性，视觉桥接和 i18n 是差异化亮点，但免费额度政策调整引发社区信任危机。

### 🌱 早期阶段
- **Kimi Code CLI**：仅 2 个新 Issue，社区冷清，处于产品打磨和需求收集阶段。

---

## 6. 值得关注的趋势信号

### 📌 趋势一：Agent 行为可控性正成为核心护城河
> **信号**：6 个工具的社区同时出现 Agent 行为失控相关诉求 —— Claude Code 的权限继承（#29214）、Gemini CLI 的 MAX_TURNS 假成功（#22323）、DeepSeek TUI 的自问自答循环（#3275）→ scope_discipline prompt 规则（PR #3290）、Copilot CLI 的工具白名单需求（#1973，20 👍）。
>
> **启示**：未来 Agent 工具的竞争力将不再仅仅是模型能力，而是**行为可预测性**。开发者应优先选择提供精细权限控制、行为约束机制和状态透明可见的工具。

### 📌 趋势二：MCP 标准化进程加速，但碎片化仍是最大摩擦
> **信号**：MCP 已成为 7 个工具的共同集成方向，但 Copilot CLI 与 VSCode 的 schema 不兼容（#3835）、Gemini CLI 的 MCP 安全标注（PR #27979）、OpenCode 的 MCP 工具校验修复（v1.117.8）均指向实现层面的不一致。
>
> **启示**：开发者在跨工具环境中需准备多套 MCP 配置。行业需要统一的 MCP 配置 schema 和安全标注标准，这为工具链整合提供了机会。

### 📌 趋势三：多 Agent 编排正从愿景走向工程化落地
> **信号**：OpenAI 同日推进 per-turn 委托 + 线程级多智能体双 PR（#28792 + #28685），OpenCode 推进 Session Goals + /goal 命令（PR #27163 + #32743），Claude Code 多 Agent 相关 Issue 占据 Top 10 中的 3 席，DeepSeek TUI 启动 v0.9.0 Chat-native 工作间 EPIC。
>
> **启示**：多 Agent 编排已从概念验证进入架构实现阶段。技术决策者在选择工具时应重点评估其 Agent 编排原语的成熟度和可扩展性。

### 📌 趋势四：macOS 桌面端稳定性成为付费用户留存关键
> **信号**：OpenAI Codex 的 macOS 四大叠加问题（WebSocket 重连 + syspolicyd 耗尽 + Crashpad 堆积 + 焦点丢失）正在侵蚀 Pro 用户信心；Gemini CLI 和 Claude Code 同样收到 macOS 特有问题报告。
>
> **启示**：macOS 桌面端的稳定性投入不足已成为多个工具的共性短板。对于以 macOS 为主要开发环境的团队，建议优先评估工具的 TUI/CLI 模式体验，而非依赖桌面 App。

### 📌 趋势五：国内工具正走出差异化路线
> **信号**：Qwen Code 的视觉桥接（图像→文本）、多渠道集成（QQ/TG/微信/钉钉）、i18n 工具名称本地化，以及 DeepSeek TUI 的 Chat-native 工作间愿景，均与海外工具形成差异化竞争。Kimi Code 聚焦企业环境适配（SSL 绕过、模式切换）。
>
> **启示**：国内 AI CLI 工具并非简单跟随海外路线，而是在本地化集成、多模态兼容和企业环境适配方面走出了独特路径。对于国内开发者社区和国际市场的交叉需求，这类工具值得重点关注。

---

*数据来源：各工具 GitHub 仓库 2026-06-18 社区动态日报 | 分析生成时间：2026-06-18*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：anthropics/skills 仓库 | 统计截止：2026-06-18

---

## 1. 热门 Skills 排行

以下按社区关注度（评论数 + upvotes）筛选最受关注的 Skills PR：

| # | Skill | 功能概述 | 状态 | 热度信号 |
|---|-------|---------|------|---------|
| 1 | **skill-creator Windows 修复套件** (PR #1050, #1099, #1298) | 修复 `run_eval.py` 在 Windows 下的三个致命 bug：subprocess PATHEXT 路径、cp1252 编码错误、管道 select 崩溃，导致评价循环 recall 始终为 0% | 🟡 OPEN | 3 个独立 PR 交叉回应 Issue #556（12 条讨论），被 10+ 用户独立复现，事实上的**基础设施阻塞问题** |
| 2 | **YAML description 安全校验** (PR #539, #361) | 在 `quick_validate.py` 中增加提前检测机制，防止未加引号的 description 因冒号/井号等字符被 YAML 静默截断或错误解析 | 🟡 OPEN | 涉及所有 skill 的基础校验链，Issue #556 根因之一；作者 Lubrsy706 与 Mr-Neutr0n 从不同角度提交了互补方案 |
| 3 | **skill-creator UTF-8 字节安全** (PR #362) | 将字符长度检查替换为 UTF-8 字节验证，修复多字节（中文/CJK/emoji）字符触发 Rust 内核 panic 的问题 | 🟡 OPEN | 国际化用户核心痛点，直接影响非英语用户创建 skill |
| 4 | **skill-quality-analyzer & skill-security-analyzer** (PR #83) | 元技能（meta-skills）：前者从 5 个维度自动评估任意 Skill 质量评分；后者分析安全边界。形成 Skill 生态的自我质检闭环 | 🟡 OPEN | 提出最早（2025-11），反映社区对 Skill 治理和质量标准的关注 |
| 5 | **document-typography** (PR #514) | 为 Claude 生成的文档增加排版质量控制：防止孤行断词（orphan）、标题沉底（widow）、编号错位 | 🟡 OPEN | 针对"所有文档输出都有但没人明确要求"的高频痛点，直击 Claude 文档输出体验短板 |
| 6 | **服务与平台集成类** (PR #568 ServiceNow, PR #444 AURELION, PR #335 Masonry) | ServiceNow 全平台助手（ITSM/ITOM/SecOps）；AURELION 认知框架（4 个 Skill 套件）；Masonry AI 图像/视频生成 | 🟡 OPEN | 企业级/垂直领域 Skill 开始涌现，说明社区从通用工具向行业纵深扩展 |
| 7 | **testing-patterns** (PR #723) | 完整测试知识体系：Testing Trophy 哲学、AAA 模式、组件测试、React Testing Library | 🟡 OPEN | 开发流程自动化方向，社区对"让 Claude 写出真正可测试代码"需求强烈 |
| 8 | **CONTRIBUTING.md 规范** (PR #509) | 新增贡献指南，解决社区健康度仅 25% 的问题（GitHub 指标） | 🟡 OPEN | 关联合束 Issue #452，说明开源协作流程本身正在成为瓶颈 |

---

## 2. 社区需求趋势

从 Issue 讨论中提炼出的需求方向及热度等级：

| 优先级 | 需求方向 | 代表 Issue | 核心诉求 |
|--------|---------|-----------|---------|
| 🔴 **最高** | **Skill 分发与共享机制** | [#228] 组织级 Skill 共享 (14评/7赞)、[#189] 插件重复安装 (6评/9赞) | 无法在团队内一键分享 Skill，安装体验支离破碎，生产力工具变为生产力损耗 |
| 🔴 **最高** | **Skill 评测基础设施修复** | [#556] `run_eval.py` 问题 (12评/7赞)、[#1169] recall 持续性归零 | Skill 质量评价工具本身失效，导致 description 优化循环基于噪声运行，影响官方能力演进 |
| 🟠 **高** | **安全与信任边界** | [#492] 社区 Skill 冒用 anthropic/ 命名空间 (7评)、[#1175] SharePoint 权限逻辑注入风险 | 用户无法区分官方与社区 Skill，潜在的供应链攻击面 |
| 🟠 **高** | **Skill 与 MCP 融合** | [#16] 将 Skills 暴露为 MCP 协议 (4评) | 统一的 AI 软件接口标准，促进 Skill 的跨平台互操作性 |
| 🟡 **中** | **multi-file 预加载** | [#1220] 多文件预加载与内联打包 | 当前 SKILL.md 单文件约束过严，大型 Skill 无法合理组织引用资源 |
| 🟡 **中** | **跨平台兼容** | [#29] AWS Bedrock 支持、[#1061] Windows 兼容 | 非 macOS 用户和跨云部署需求持续增长 |
| 🟢 **成长** | **垂直领域 Skill** | [#412] Agent 治理 Skill、[#154] shodh-memory | 从代码生成到企业级业务流程和 AI Agent 治理 |

---

## 3. 高潜力待合并 Skills

以下 PR 社区讨论活跃但尚未合并，具有很高的落地概率：

| PR | 潜力依据 | 预估合并可能 |
|----|---------|-------------|
| **#539/#361** — YAML 预校验 | 直接解决保障 Skill 基础设施安全性的底层问题；多个 PR 互补 | ⭐⭐⭐⭐⭐ **极有可能被合并**，属于阻塞性 bug |
| **#1050/#1099/#1298** — Windows 修复 | 同时在 Issue #556 被广泛复现，Windows 用户群体大 | ⭐⭐⭐⭐⭐ 维护团队不可能忽略主流 OS 平台的阻塞问题 |
| **#509** — CONTRIBUTING.md | Issue #452 有官方承认，单一文件改动风险低 | ⭐⭐⭐⭐⭐ 零阻力社区治理改进 |
| **#362** — UTF-8 安全 | 国际化用户共鸣强，改动集中于验证脚本 | ⭐⭐⭐⭐ 需要权衡与现有校验链的兼容性 |
| **#538** — PDF 引用修复 | 低风险文档修复 | ⭐⭐⭐⭐ 纯 bug fix，合并阻力最小 |
| **#83** — 元技能分析器 | 概念优雅但优先级可能低于基础设施 | ⭐⭐⭐ 需要维护团队投入更多 review 资源 |
| **#514** — 排版质量 | 高频痛点但需要设计合适的 hook 接入点 | ⭐⭐⭐ 涉及输出层改动，可能需要更深度评估 |

---

## 4. Skills 生态洞察

> **社区最集中的诉求：打破 Skill 创造—分发—评测链路的系统性断裂。**

具体而言，三重矛盾正在浮现：
1. **创建端**：校验脚本 bug（YAML 编码、UTF-8、Windows）导致"造 Skill 的工具链不可靠"
2. **分发端**：无组织级共享、插件重复、信任边界不清导致"用 Skill 像走迷宫"
3. **评测端**：`run_eval.py` 底层失效导致"Skill 质量无法量化、无法优化"

这表明 Claude Code Skills 生态正处于从 **"爱好者玩具"到"企业级基础设施"** 转型的前夜。社区不仅需要更多新 Skill，更需要 Anthropic 率先解决这些基础架构问题，才能释放社区创造力。

---

*报告生成日期：2026-06-18 | 数据源：[anthropics/skills](https://github.com/anthropics/skills)*

---

# Claude Code 社区动态日报 — 2026-06-18

---

## 1. 今日速览

Claude Code 发布新版本 **v2.1.181**，带来 `/config key=value` 交互式配置语法和 macOS Apple Events 沙箱支持。社区方面，**挂起/冻结问题**（#26224）持续高热，评论已达 118 条、👍 143，成为当前最受关注的 bug；多 Agent 协作、跨工作区 Slack 集成等功能需求持续活跃。

---

## 2. 版本发布

### v2.1.181

- **`/config key=value` 语法**：支持在交互模式、`-p` 模式和 Remote Control 中通过 prompt 直接设置任意配置项（如 `/config thinking=false`），无需退出编辑配置文件。
- **`sandbox.allowAppleEvents` 设置**：新增 opt-in 开关，允许沙箱化命令在 macOS 上发送 Apple Events，扩展了自动化场景能力。
- 其余变更因数据截断未完整展示，建议查看完整 Release Notes。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 摘要 |
|---|-------|------|------|
| 1 | **#26224** [Claude Code hanging / freezing for 5-20min](https://github.com/anthropics/claude-code/issues/26224) | 💬118 👍143 | **最高热度 bug**。大量用户报告 Claude Code 在大量 prompt 下长时间挂起，严重影响日常使用。社区反应激烈，多人提供复现步骤，官方尚未给出根因。 |
| 2 | **#29214** [Remote Control 权限提示未继承 `--dangerously-skip-permissions`](https://github.com/anthropics/claude-code/issues/29214) | 💬30 👍76 | WSL 环境下，即使启动时传入 `--dangerously-skip-permissions`，移动端 Remote Control 仍弹出权限提示。高 👍 表明这是跨平台用户的普遍痛点。 |
| 3 | **#44243** [支持多 Slack 工作区](https://github.com/anthropics/claude-code/issues/44243) | 💬27 👍57 | 内置 Slack MCP 连接器仅支持单工作区。多工作区用户（如顾问、跨团队开发者）需求强烈，社区期待官方扩展。 |
| 4 | **#24798** [跨 Session 通信 — 多 Claude 工作流](https://github.com/anthropics/claude-code/issues/24798) | 💬35 👍16 | 大型项目中多个并行 Claude Session 无法直接通信和编排依赖关系。这是多 Agent 工作流的基础能力诉求。 |
| 5 | **#23669** [Agent Teams：支持 per-teammate 工作目录和配置](https://github.com/anthropics/claude-code/issues/23669) | 💬24 👍28 | 当前 Agent Teammate 继承 Team Lead 的工作目录和 CLAUDE.md，无法跨仓库协作。多仓库项目的刚需。 |
| 6 | **#68721** [2.1.178 回归：TeamCreate/TeamDelete 工具不再暴露](https://github.com/anthropics/claude-code/issues/68721) | 💬6 👍4 | 新版本回归 bug，原生团队管理工具在 2.1.178 中消失。有复现步骤，影响 Agent Teams 用户。 |
| 7 | **#61993** [子 Agent 无法再生成子 Agent](https://github.com/anthropics/claude-code/issues/61993) | 💬18 | Windows 上嵌套 Agent 调用失败，`Task`/`Agent` 原语在嵌套上下文中未暴露。阻碍复杂分层工作流。 |
| 8 | **#48973** [Cowork 中无法在会话中途切换模型](https://github.com/anthropics/claude-code/issues/48973) | 💬5 👍11 | 4月15日桌面端改版后，Cowork 中 Opus/Sonnet 切换功能消失。回归问题，影响需要动态调整模型的用户。 |
| 9 | **#69062** [Agent View：任务间歇性永不启动](https://github.com/anthropics/claude-code/issues/69062) | 💬2 | 交互 Agent View 中按 Enter 后任务状态显示 "working" 但实际未执行，备用 worker 未晋升为 fleet。有复现步骤。 |
| 10 | **#68711** [终端文字显示乱码，需调整窗口才恢复](https://github.com/anthropics/claude-code/issues/68711) | 💬2 👍4 | macOS iTerm2/Warp 下文字渲染损坏，调整窗口大小可恢复。TUI 渲染 bug，影响用户体验。 |

---

## 4. 重要 PR 进展

过去 24 小时内仅有 **5 个 PR 更新**，数量较少：

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | **#69226** [Update frontend-design skill](https://github.com/anthropics/claude-code/pull/69226) | 🟢 OPEN | 改进 frontend-design skill，插件版本升至 1.1.0，已安装用户可自动获取更新。 |
| 2 | **#19867** [fix(code-review): 新 commit push 后允许重新 review](https://github.com/anthropics/claude-code/pull/19867) | 🟢 OPEN | 修复 code-review 插件在新 commit push 后跳过 review 的问题，新增 `--force` 标志绕过检查。 |
| 3 | **#33443** [fix: Dockerfile 改用原生安装器](https://github.com/anthropics/claude-code/pull/33443) | 🟢 OPEN | 更新 `.devcontainer/Dockerfile`，使用 Node 24.14 并通过原生安装器安装 Claude Code，替代已废弃的 npm 安装方式。 |
| 4 | **#60427** [docs: README 使用标准 GitHub 大小写](https://github.com/anthropics/claude-code/pull/60427) | 🔴 CLOSED | 修正 README 中 "GitHub" 的标准大小写。已合并。 |
| 5 | **#60732** [docs: 润色 plugins README 措辞](https://github.com/anthropics/claude-code/pull/60732) | 🔴 CLOSED | 微调插件生态描述语句，提升可读性。已合并。 |

> ⚠️ 今日 PR 数量偏少，且多为文档/插件维护性质，核心功能 PR 不活跃。

---

## 5. 功能需求趋势

从当前 Issues 中提炼出社区最关注的 **5 大功能方向**：

### 🔹 多 Agent 协作与编排（最高频）
- 跨 Session 通信（#24798）、Agent-to-Agent 协议（#28300）、per-teammate 配置（#23669）、嵌套子 Agent（#61993）
- **趋势**：社区正在从"单 Agent 辅助"向"多 Agent 系统工程"演进，编排能力是核心诉求。

### 🔹 权限与沙箱精细化控制
- Remote Control 权限继承（#29214）、Apple Events 沙箱支持（v2.1.181 已部分响应）、GrowthBook A/B 标志覆盖权限设置（#62205）
- **趋势**：用户需要更细粒度的权限控制，尤其在自动化和远程场景下。

### 🔹 跨平台一致性
- WSL 权限问题（#29214）、Windows 子 Agent 失败（#61993）、Windows Terminal 滚动阻塞（#51393）、macOS 模型切换回归（#48973）
- **趋势**：Windows 和 WSL 用户体验落后于 macOS，跨平台一致性是持续痛点。

### 🔹 集成生态扩展
- 多 Slack 工作区（#44243）、MCP OAuth 远程场景（#69205）、GitHub 仓库连接（#59732）
- **趋势**：用户期望 Claude Code 成为连接多平台工具的统一枢纽，集成深度和广度需持续扩展。

### 🔹 性能与稳定性
- 挂起/冻结（#26224）、Agent View 任务不启动（#69062）、终端渲染乱码（#68711）、后台子 Agent 无可见性（#67485）
- **趋势**：随着使用场景复杂化，性能和稳定性问题被放大，尤其在长会话和多 Agent 场景下。

---

## 6. 开发者关注点总结

| 痛点 | 典型 Issue | 影响范围 |
|------|-----------|---------|
| **🔴 会话挂起/冻结** | #26224 | 所有平台，高频使用场景 |
| **🟡 权限模型不一致** | #29214, #62205 | 自动化/Remote Control 用户 |
| **🟡 多 Agent 能力受限** | #24798, #23669, #61993, #28300 | 大型项目/团队协作用户 |
| **🟡 Windows/WSL 体验差距** | #61993, #51393, #29214 | Windows 开发者 |
| **🟢 配置灵活性不足** | v2.1.181 `/config` 语法（已响应） | 所有用户 |
| **🟢 后台任务可见性差** | #67485 | 多 Agent 工作流用户 |

**总结**：当前社区最紧迫的诉求是 **解决会话稳定性问题**（#26224）和 **完善多 Agent 协作能力**。v2.1.181 的 `/config` 语法和 Apple Events 沙箱支持显示团队在积极响应社区需求，但核心架构级问题（挂起、跨 Session 通信）仍需更多关注。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-06-18

---

## 1. 今日速览

⚡ **Codex 连续发布两个 alpha 版本（v0.141.0-alpha.5 → alpha.6）**，迭代节奏明显加快。🔥 **Issue #18960** 以 44 条讨论、34 赞稳坐热度榜首，WebSocket 重连循环问题严重干扰 macOS Pro 用户的生产环境。今日 PR 高度聚焦 **插件安装多选器重构** 和 **多智能体（multi-agent）模式完善**，多条 OpenAI 内部 PR 同日涌入。

---

## 2. 版本发布

| 版本 | 发布时间 | 备注 |
|------|----------|------|
| [rust-v0.141.0-alpha.6](https://github.com/openai/codex/releases) | 2026-06-18 | 在 alpha.5 发布后仅数小时即迭代 |
| [rust-v0.141.0-alpha.5](https://github.com/openai/codex/releases) | 2026-06-18 | Rust 实现层更新 |

> **注：** 两个 alpha 版本均为 Rust 层（codex-rs）的连续发布，Changelog 细节待补充，推测为 alpha.5 中暴露的问题进行快速修复。

---

## 3. 社区热点 Issues

以下按讨论热度与影响力排序，共精选 **10 条**：

### 🥇 #18960 — WebSocket 频繁重连循环
🔗 [openai/codex#18960](https://github.com/openai/codex/issues/18960)
- **状态:** OPEN · 44 评论 · 34 👍 · 创建于 2026-04-22
- **问题：** macOS Codex App 中 WebSocket 在 `response.completed` 之前被服务端关闭，导致无限重连循环，流式输出频繁中断。
- **为何重要：** 持续流行超两个月、评论数最高，直接破坏付费 Pro 用户的核心工作流。多名用户反馈需反复重启 App 才能恢复。

### 🥈 #25670 — CLI 身份认证彻底失效
🔗 [openai/codex#25670](https://github.com/openai/codex/issues/25670)
- **状态:** OPEN · 33 评论 · 19 👍 · 创建于 2026-06-01
- **问题：** 用户已完成 Passkey、手机验证、Authenticator App 三层认证后，仍被反复要求输入旧手机号，无法完成登录。
- **为何重要：** 认证链完全阻断，用户被迫放弃使用，属于 **P0 级别可用性 bug**。且问题持续近三周未修复。

### 🥉 #28190 — macOS 上 `rg` 被系统策略拦截
🔗 [openai/codex#28190](https://github.com/openai/codex/issues/28190)
- **状态:** OPEN · 31 评论 · 53 👍 · 创建于 2026-06-14
- **问题：** macOS 安全策略（syspolicyd/gatekeeper）阻止 Codex CLI 调用 `ripgrep`，导致文件搜索工具链失效。
- **为何重要：** 👍 数最高（53），说明影响面广；直接破坏了 CLI 的核心文件检索能力。

### #28015 — 网络安全安全检测误报频繁阻断本地仓库维护
🔗 [openai/codex#28015](https://github.com/openai/codex/issues/28015)
- **状态:** OPEN · 20 评论 · 创建于 2026-06-13
- **问题：** 安全检测器将日常的本地 DevOps 操作（.git 维护等）误判为网络安全风险，反复弹出安全审查提示，打断付费交互会话。
- **为何重要：** 白名单/误报问题直接降低 Agent 自动化效率，是 "Agent 实用性 vs. 安全性" 矛盾的典型案例。

### #5041 — VS Code 扩展沙箱阻止网络访问
🔗 [openai/codex#5041](https://github.com/openai/codex/issues/5041)
- **状态:** CLOSED · 12 评论 · 10 👍 · 创建于 2025-10-10
- **问题：** 即使设置了 `danger-full-access`，VS Code Codex 扩展仍无法访问网络并持续报沙箱错误（Linux 环境）。
- **为何重要：** 跨时隔 8 个月后于今日重新活动并最终关闭，说明最终得到了解决。

### #25321 — macOS 桌面端输入焦点间歇性消失
🔗 [openai/codex#25321](https://github.com/openai/codex/issues/25321)
- **状态:** OPEN · 11 评论 · 5 👍 · 创建于 2026-05-30
- **问题：** Codex Desktop Composer 的输入光标/焦点不定时消失，需切换 App 焦点才能恢复。
- **为何重要：** 输入体验是 GUI 产品的生命线，此类问题严重影响打字流畅度。

### #28422 — 0.140.0 中 `image_gen` 生成图片未保存（回归）
🔗 [openai/codex#28422](https://github.com/openai/codex/issues/28422)
- **状态:** OPEN · 9 评论 · 2 👍 · 创建于 2026-06-16
- **问题：** v0.140.0 回归——当状态保持 `generating` 时，生成的有效图片未被保存到磁盘。
- **为何重要：** **回归 bug**，图片生成功能在上一版本正常，新版本引入破坏。

### #28071 — Desktop 26.609.41114 耗尽 syspolicyd 导致无法重启
🔗 [openai/codex#28071](https://github.com/openai/codex/issues/28071)
- **状态:** OPEN · 8 评论 · 2 👍 · 创建于 2026-06-13
- **问题：** 特定 Desktop 版本将 macOS `syspolicyd` 进程资源耗尽，App 无法重新启动，必须重启系统。
- **为何重要：** 属于系统级资源泄漏，严重程度高。

### #25921 — Desktop Crashpad 堆积日增 +5GB
🔗 [openai/codex#25921](https://github.com/openai/codex/issues/25921)
- **状态:** OPEN · 8 评论 · 1 👍 · 创建于 2026-06-02
- **问题：** Crashpad pending dumps 目录无限增长，单日可超 5GB、54000+ 文件。
- **为何重要：** 磁盘空间泄漏，重度用户面临存储压力。

### #28811 — 公共速率限制重置未按"银行"方式执行
🔗 [openai/codex#28811](https://github.com/openai/codex/issues/28811)
- **状态:** OPEN · 4 评论 · 3 👍 · 创建于 2026-06-17
- **问题：** Codex 公共速率限制重置被立即强制应用，而非按 OpenAI 承诺的"银行"（banked）方式供用户自选消费时机。
- **为何重要：** 涉及用户对配额机制的信任，与计费透明度直接相关。

---

## 4. 重要 PR 进展

精选 **10 条**最具实质进展的 PR：

### #28813 — Esc 中断前暂停活跃 goal
🔗 [openai/codex#28813](https://github.com/openai/codex/pull/28813)
- **功能：** `/goal` 模式下，当用户按 `Esc` 中断当前轮次时，自动将 goal 状态转为 paused（之前仅 `Ctrl+C` 路径有此处理）。
- **意义：** 修复 state 不一致 bug，改善 goal 模式的中断体验。

### #28822 — 添加 varlatency 配置
🔗 [openai/codex#28822](https://github.com/openai/codex/pull/28822)
- **功能：** 新增门控的 `varlatency` 配置面，解析并锁定提醒间隔和时钟源。
- **意义：** 为延迟抖动测试/模拟提供基础设施支持。

### #28792 / #28685 — 多智能体模式：线程级选择与每轮选择
🔗 [openai/codex#28792](https://github.com/openai/codex/pull/28792) · [openai/codex#28685](https://github.com/openai/codex/pull/28685)
- **功能：**
  - #28685：支持每轮（per-turn）选择多智能体委托模式，而非仅依赖静态提示。
  - #28792：在创建线程时即支持选择多智能体模式，并通过生命周期和设置 API 暴露该状态。
- **意义：** **Multi-agent v2 核心架构推进**，让用户可以精细化控制委托行为。

### #28806 — resume 和 fork 历史优化
🔗 [openai/codex#28806](https://github.com/openai/codex/pull/28806)
- **功能：** 应用 checkpoint 支持的 resume 和 copy-on-write fork 优化，减少冷启动时的历史处理开销。
- **意义：** 提升 CLI/App 长对话场景的响应速度。

### #28819 / #28817 / #28818 / #28802 / #28796 — 插件安装多选器重构（5 条 PR 系列）
🔗 [PR #28819](https://github.com/openai/codex/pull/28819) · [PR #28817](https://github.com/openai/codex/pull/28817) · [PR #28818](https://github.com/openai/codex/pull/28818) · [PR #28802](https://github.com/openai/codex/pull/28802) · [PR #28796](https://github.com/openai/codex/pull/28796)
- **功能：** 将插件安装从单一选择器升级为多选器（plural），包含：
  - (#28796) 新增请求模型
  - (#28802) Schema 与验证
  - (#28818) Core 后端适配
  - (#28817) Extension executor 边界
  - (#28819) Core 侧暴露多选工具
- **意义：** 用户可以一次请求安装多个插件，是 UX 的重大改进。同日 5 条 PR 从同一开发者（zswang-oai）涌现，动作极其密集。

### #28820 — 移除旧的单一插件安装工具
🔗 [openai/codex#28820](https://github.com/openai/codex/pull/28820)
- **功能：** 删除已废弃的 `request_plugin_install` 单数工具及其测试。
- **意义：** 与上述 PR 系列配合，清理遗留 API 面。

### #27190 — 流式文件读写 API
🔗 [openai/codex#27190](https://github.com/openai/codex/pull/27190)
- **功能：** 新增 `fs/readFile` / `fs/writeFile` 的流式（pull-based chunk）版本，适用于大文件和远程 app-server 场景。
- **意义：** 避免一次性将整个文件加载到内存，提升大文件操作的稳定性。

### #28815 — 认证请求中携带 Stable ID
🔗 [openai/codex#28815](https://github.com/openai/codex/pull/28815)
- **功能：** 在 app-server 登录和请求中携带 `oaicom_stable_id` 和 `source_surface_stable_id`，贯穿整个认证链路。
- **意义：** 改进设备追踪与认证可靠性。

---

## 5. 功能需求趋势

从今日 50 条 Issues 中提炼社区最关注的方向：

| 方向 | 代表 Issues | 热度 |
|------|-------------|------|
| **🔌 macOS 桌面端稳定性** | #18960, #25321, #28071, #25921 | 🔴 极高 |
| **🔐 认证与账户管理** | #25670, #28811, #28688 | 🔴 高 |
| **🛡️ 安全检测准确率** | #28015, #28753 | 🟡 中高 |
| **🖼️ 多模态 / 图片生成** | #28422 | 🟡 中 |
| **🧩 插件生态** | #17066, #28754 | 🟡 中 |
| **🌐 IDE 集成（VS Code）** | #5041, #28816 | 🟡 中 |
| **🤖 多智能体 / Subagent** | #24389, #17574 | 🟡 中 |
| **🌍 国际化 / 非英语支持** | #28527, #28262 | 🟢 低中 |
| **⚡ 性能与资源管理** | #28071, #25921, #26293 | 🟡 中 |
| **📊 速率限制与计费** | #28811, #28688 | 🟡 中 |

---

## 6. 开发者关注点总结

### 🔴 最高优先级痛点

1. **macOS 桌面端可靠性堪忧**
   - WebSocket 重连循环（#18960）、syspolicyd 耗尽（#28071）、Crashpad 堆积（#25921）、输入焦点丢失（#25321）——**四个独立但叠加的 macOS 问题**正在严重侵蚀桌面端用户信心。

2. **认证链断裂**
   - #25670 中用户即使完成所有验证步骤仍无法登录，属于 **阻断性 bug**，且已持续近三周。

3. **安全检测误报**
   - #28015 显示 Agent 安全沙箱对正常 DevOps 操作过度敏感，频繁打断自动化流程，**降低 Agent 实际可用性**。

### 🟡 中等优先级

4. **速率限制透明度**
   - #28811 和 #28688 均指向配额机制不透明、`/goal` 模式消耗过快，用户对计费公平性产生质疑。

5. **回归 bug 频发**
   - #28422（image_gen 回归）说明版本迭代中测试覆盖不足，用户对新版本持谨慎态度。

6. **非英语用户体验**
   - #28527（@ 搜索不支持非英语文件名）、#28262（韩文用户名导致崩溃）——国际化支持明显不足。

### 🟢 积极信号

- **插件系统快速演进**：今日 5 条 PR 密集推进多选安装器，显示 OpenAI 内部对插件生态的投入力度。
- **Multi-agent 架构持续完善**：per-turn 委托 + 线程级选择双 PR 同日推进，Agent 编排能力正在快速成熟。
- **流式文件 API**（#27190）为远程执行和大文件场景奠定基础。

---

> 📌 **编辑点评：** 今日 Codex 社区呈现"冰火两重天"——一方面 alpha 版本快速迭代、内部 PR 密集推进插件与多智能体架构；另一方面 macOS 桌面端积累的稳定性债务和认证阻断问题仍未解决，社区情绪趋于焦虑。建议 OpenAI 优先修复 #18960 和 #25670 两个高热度阻断性问题，以稳住付费用户基本盘。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-06-18

---

## 1. 今日速览

Gemini CLI 迎来 **v0.48.0-preview.0** 预览版发布，主要包含依赖管理和 CI 基础设施升级。社区 Agent 稳定性问题持续高热，多个涉及子代理挂起、Auto Memory 安全漏洞和 Shell 命令卡住的 P1 级 Issue 集中活跃。PR 层面则聚焦安全加固（MCP 数据来源标注、工作流防投毒）和跨平台兼容性修复。

---

## 2. 版本发布

### v0.48.0-preview.0
- **依赖锁定**：所有直接依赖精确锁定语义版本，通过 Dependabot 新增 14 天冷却期，降低依赖更新引入破坏性变更的风险（PR `#27948`）
- **CI/CD 优化**：启用 npm 包的 cooldown 依赖更新策略（PR `#27743`）
- 版本号由 nightly 构建自动推进

---

## 3. 社区热点 Issues（Top 10）

| # | 议题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| **#21409** | [Generalist agent 挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | 🔥 P1 — 委派给 generalist subagent 后无限挂起，影响所有多代理工作流 | 👍 8，7 条评论，需等待复现确认 |
| **#24353** | [组件级评估体系](https://github.com/google-gemini/gemini-cli/issues/24353) | 📋 EPIC — 在 76 个行为测试基础上构建更健壮的组件级 eval 框架 | 7 条评论，标记为 customer-issue |
| **#22323** | [子代理隐瞒 MAX_TURNS 中断并报成功](https://github.com/google-gemini/gemini-cli/issues/22323) | 🔥 P1 — `codebase_investigator` 子代理达到最大轮次后仍报告 `GOAL` 成功，掩盖实际未完成分析 | 👍 2，6 条评论 |
| **#22745** | [AST 感知文件读取/搜索/映射评估](https://github.com/google-gemini/gemini-cli/issues/22745) | 🔍 — 调研精准读取方法边界对减少未对齐 reads 和 token 噪声的价值 | 👍 1，7 条评论 |
| **#25166** | [Shell 命令执行后卡在"等待输入"](https://github.com/google-gemini/gemini-cli/issues/25166) | 🔥 P1 — 简单 CLI 命令完成后仍显示"Awaiting user input"，反复出现 | 👍 3，4 条评论 |
| **#26525** | [Auto Memory 确定性脱敏与日志缩减](https://github.com/google-gemini/gemini-cli/issues/26525) | 🔒 安全 — 背景提取 agent 在脱敏前已将内容送入模型上下文，存在密钥泄露风险 | 5 条评论 |
| **#26522** | [Auto Memory 无限重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26525) | 🔒 — 低信号会话因未被标记为已处理而反复被提取 agent 重新发现 | 5 条评论 |
| **#21968** | [Gemini 不主动使用 skills 和子代理](https://github.com/google-gemini/gemini-cli/issues/21968) | 💡 — 模型不会自主调用已定义的自定义 skills 和子代理，需显式指令 | 6 条评论 |
| **#22672** | [Agent 应阻止破坏性行为](https://github.com/google-gemini/gemini-cli/issues/22672) | 🛡️ — 模型在 git 操作中可能使用 `git reset --force` 等危险命令 | 👍 1，3 条评论 |
| **#24246** | [工具数超 128 时 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246) | ⚙️ — 可用工具过多时 API 报错，期望 agent 智能限定工具范围 | 3 条评论 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容摘要 |
|---|-----|------|----------|
| **#27948** | [依赖锁定 + 14 天冷却期](https://github.com/google-gemini/gemini-cli/pull/27948) | 🟢 OPEN | 精确锁定所有直接依赖版本，防止自动更新引入破坏性变更 |
| **#27997** | [移除已废弃的免费/消费级套餐文档](https://github.com/google-gemini/gemini-cli/pull/27997) | 🟢 OPEN | 清理对已停止服务的 consumer tiers 和 free tier 的引用 |
| **#27996** | [web-fetch 按 Content-Type charset 解码](https://github.com/google-gemini/gemini-cli/pull/27996) | 🟢 OPEN | 修复非 UTF-8 编码页面（GBK、ISO-8859-1 等）返回乱码的问题 |
| **#27987** | [parseArguments 改为抛 FatalConfigError](https://github.com/google-gemini/gemini-cli/pull/27987) | 🟢 OPEN | 将 `process.exit(1)` 改为异常抛出，修复 E2E 测试中 `--help/--version` 挂起问题 |
| **#27994** | [系统 prompt 替换中 skill/agent 内容字面量注入](https://github.com/google-gemini/gemini-cli/pull/27994) | 🟢 OPEN | 修复 `applySubstitutions()` 中 `${AgentSkills}` 等占位符被正则特殊字符破坏的问题 |
| **#27979** | [read_mcp_resource 输出包裹 wrapUntrusted()](https://github.com/google-gemini/gemini-cli/pull/27979) | 🟢 OPEN | 统一 MCP 资源返回值的安全标注，与 mcp-tool 保持一致 |
| **#27753** | [CI: 验证 workflow_run 来源防 fork 投毒](https://github.com/google-gemini/gemini-cli/pull/27753) | 🟢 OPEN | 防止 fork PR 通过 `workflow_run` 事件注入恶意代码并获取仓库 secrets |
| **#27859** | [原生拖拽 + Cmd+V 剪贴板图片粘贴](https://github.com/google-gemini/gemini-cli/pull/27859) | 🟢 OPEN | 为终端添加视觉多模态支持，实现拖拽和剪贴板图片直接粘贴 |
| **#27986** | [ACP: 上报 cached 和 thought tokens](https://github.com/google-gemini/gemini-cli/pull/27986) | 🟢 OPEN | ACP 模式下 `PromptResponse.usage` 补充缓存和推理 token 计数，修正成本估算偏差 |
| **#27771** | [MCP header 非 ASCII 编码修复](https://github.com/google-gemini/gemini-cli/pull/27771) | 🟢 OPEN | 修复含 Unicode 字符（如 `mąka`）的 MCP 自定义 header 导致发现失败的问题 |

---

## 5. 功能需求趋势

从当前活跃 Issues 和 PR 中可提炼出以下五大方向：

### 🔒 安全与信任
- **Auto Memory 安全加固**：确定性脱敏（`#26525`）、低信号会话重试控制（`#26522`）、无效 patch 隔离（`#26523`）
- **MCP 数据来源标注**：`read_mcp_resource` 输出统一包裹 `wrapUntrusted()`（PR `#27979`）
- **CI 供应链安全**：fork artifact 投毒防护（PR `#27753`）

### 🤖 Agent 稳定性与可靠性
- **子代理挂起/假成功**：generalist agent 无限挂起（`#21409`）、MAX_TURNS 后仍报成功（`#22323`）
- **Shell 命令卡住**：命令完成后仍等待输入（`#25166`）
- **破坏性行为防护**：阻止 `git reset --force` 等危险操作（`#22672`）

### 🧠 上下文与代码理解
- **AST 感知工具**：精准读取方法边界，减少 token 噪声（`#22745`、`#22746`）
- **Skills/子代理自主调用**：模型不主动使用已定义的自定义能力（`#21968`）
- **工具数量超限**：超 128 工具时 400 错误（`#24246`）

### 🌐 多模态与终端体验
- **终端图片输入**：拖拽 + 剪贴板粘贴（PR `#27859`）
- **跨平台兼容**：macOS symlink 路径不匹配（PR `#27990`）、Wayland 下 browser agent 失败（`#21983`）
- **终端 resize 性能**：迁移到 RenderStatic 消除闪烁（`#21924`）

### 📊 评估与质量
- **组件级评估体系**：从 76 个行为测试扩展到组件级 eval（`#24353`）
- **内部评估稳定性**：消除测试间"渗漏"（`#23166`）

---

## 6. 开发者关注点

| 痛点 | 典型反馈 | 相关 Issue |
|------|----------|------------|
| **子代理不可靠** | "委派给 generalist 后无限挂起，等了 1 小时" | `#21409` |
| **Shell 命令卡住** | "简单命令完成后仍显示 Awaiting user input" | `#25166` |
| **Skills 不被使用** | "有 gradle 和 git skills，但模型从不主动调用" | `#21968` |
| **Auto Memory 安全隐患** | "密钥在脱敏前已送入模型上下文" | `#26525` |
| **大文件读取无文档** | "遇到 20MB 限制错误但找不到文档说明" | PR `#27763` |
| **非 UTF-8 页面乱码** | "抓取中文/日文站点返回乱码" | PR `#27996` |
| **跨平台路径问题** | "macOS 上 symlink 导致测试失败" | PR `#27990` |
| **破坏性操作风险** | "模型在 git 操作中使用了 --force" | `#22672` |
| **ACP 成本估算不准** | "cached tokens 未上报，成本高估 3 倍" | PR `#27986` |
| **E2E 测试不稳定** | "fork PR 可能通过 workflow_run 获取 secrets" | PR `#27753` |

---

> **总结**：本期社区焦点集中在 **Agent 执行可靠性** 和 **安全加固** 两大主题。v0.48.0-preview.0 的发布节奏表明团队正通过依赖锁定提升稳定性，而多个 P1 级 Issue 的集中活跃说明子代理挂起和 Shell 卡住仍是影响开发者体验的核心痛点。建议关注 Auto Memory 安全系列修复和 AST 感知工具的后续进展。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-06-18

---

## 1. 今日速览

Copilot CLI 发布 **v1.0.64-0**，带来 `/diagnose` 命令、MCP registry 安装、`/security-review` 全面开放等多项重磅功能。社区方面，**6月16日 GitHub Copilot 服务中断**的余波持续发酵，多个相关 Issue 集中关闭；同时 MCP 工具集成、插件系统、模型配置等方向的开发者讨论依然活跃。

---

## 2. 版本发布

### v1.0.64-0

本次更新聚焦于 **可观测性、MCP 生态扩展和安全能力**：

- **`/diagnose` 命令**：新增会话日志分析命令，方便用户和开发者排查问题。
- **MCP Registry 安装**：新增 `/mcp registry` 浏览与安装 MCP 服务器的能力，大幅降低 MCP 接入门槛。
- **`/security-review` 全面开放**：不再需要 `--experimental` 标志，所有用户均可使用安全审查功能。
- **插件自动发现 MCP 服务器**：已安装的插件可自动暴露其提供的 MCP 服务器。
- **MCP 工具 CSV 输出支持**：为 MCP 工具增加了 CSV 格式输出选项。

---

## 3. 社区热点 Issues

以下按热度与影响力挑选 10 个最值得关注的 Issue：

### 🔴 高热度 / 高影响

**1. [#3832 — 所有模型显示为 Blocked/Disabled（已关闭）](https://github.com/github/copilot-cli/issues/3832)**
6月16日 GitHub Copilot 服务中断（17:45–18:15 UTC）后，所有模型在 CLI 中被标记为"Blocked / Disabled"，用户无法选择模型或启动新会话。获 👍13，社区反应迅速，已关闭。这是今日最受关注的故障报告。

**2. [#1973 — Interactive Mode 工具白名单功能请求](https://github.com/github/copilot-cli/issues/1973)**
开发者希望为交互模式引入工具白名单机制，让安全的只读操作（grep、cat、find、git log 等）自动通过，而无需 `/allow-all` 一并放行破坏性操作。获 👍20、评论 10 条，是**社区呼声最高的功能请求之一**。

**3. [#2643 — preToolUse hook 静默重写命令时仍弹出确认框](https://github.com/github/copilot-cli/issues/2643)**
当 `preToolUse` hook 通过 `updatedInput` 重写命令并设置 `permissionDecision: allow` 时，CLI 仍弹出交互式确认对话框。插件作者无法实现静默命令重写，影响自动化工作流体验。评论 10 条。

**4. [#3355 — Claude Opus 4.6 上下文窗口被限制在 200K](https://github.com/github/copilot-cli/issues/3355)**
Claude Opus 4.6 原生支持 1M token 上下文，但 Copilot CLI 将其限制为 200K，导致深度技术会话中频繁触发自动压缩（summarization）。获 👍4，开发者希望开放可配置上下文窗口。

**5. [#3730 — 支持企业自定义模型](https://github.com/github/copilot-cli/issues/3730)**
GitHub Copilot Enterprise 管理员可通过管理后台配置自定义 AI 模型和 OpenAI 兼容端点，但这些模型在 VS Code 中可用，在 Copilot CLI 中却不出现。获 👍4，企业用户期待统一体验。

### 🟡 中等热度 / 值得关注

**6. [#3812 — Subagents 无法访问 MCP 工具](https://github.com/github/copilot-cli/issues/3812)**
自定义子代理（subagents）无法看到和调用 MCP 工具，而顶层代理可以正常访问。Copilot 自身分析认为与 MCP 工具的延迟加载有关。影响复杂多代理工作流。

**7. [#3839 — Ollama Cloud 不兼容 custom_tool_call 载荷](https://github.com/github/copilot-cli/issues/3839)**
在 Fleet 模式下通过 Ollama Cloud 使用 BYOK 模型时，Copilot CLI 发送的 `custom_tool_call` 载荷不被支持，导致 400 错误。获 👍1，影响使用第三方模型后端的用户。

**8. [#3841 — Copilot CLI 错误执行内容排除策略](https://github.com/github/copilot-cli/issues/3841)**
CLI 强制执行组织内容排除策略，阻止本地文件工具操作，但 GitHub 文档明确说明内容排除不适用于 Copilot CLI。这是一个**策略执行与文档不一致**的问题。

**9. [#3838 — Drive MCP OAuth 认证后工具仍失败](https://github.com/github/copilot-cli/issues/3838)**
Drive MCP 的 OAuth 浏览器流程报告成功、本地缓存文件已创建，但实际工具调用时请求未携带认证凭据，导致"missing required authentication credential"错误。

**10. [#3835 — mcp.json 与 VSCode 的 schema 不兼容](https://github.com/github/copilot-cli/issues/3835)**
Copilot CLI 使用 `mcpServers` 键，而 VSCode 使用 `servers` 键，且配置文件路径不同（`.github` vs `.vscode`），开发者被迫维护两份配置或使用符号链接。

---

## 4. 重要 PR 进展

过去 24 小时内**无新的 Pull Request 更新**。

---

## 5. 功能需求趋势

从今日所有 Issues 中提炼出社区最关注的五大功能方向：

| 方向 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| **MCP 生态完善** | #3812, #3838, #3835, #3292 | Subagent MCP 访问、OAuth 可靠性、与 VSCode schema 统一、Skill 文件声明 MCP 服务器 |
| **权限与交互模型** | #1973, #2643, #3840 | 工具白名单、Hook 静默执行、`/instructions` 持久化 |
| **模型支持与管理** | #3355, #3730, #3074, #3801 | 更大上下文窗口、企业自定义模型、`/effort` 快速切换推理强度 |
| **可观测性与诊断** | #3832, #3831, #3841 | 服务中断恢复、瞬态错误处理、策略执行透明度 |
| **插件系统增强** | #3842, #3830, #3820 | 安装健壮性（fsmonitor 冲突）、批量更新、Hook matcher 文档 |

---

## 6. 开发者关注点

**今日开发者反馈的三大痛点：**

1. **服务稳定性与恢复**：6月16日中断后，模型被锁定、瞬态 API 错误频发，开发者对 CLI 的容错和恢复机制提出更高要求。（#3832、#3831）

2. **MCP 集成体验碎片化**：从 schema 不兼容到 OAuth 失效、Subagent 不可用，MCP 作为核心扩展机制，其可靠性和一致性是开发者最大的摩擦点。

3. **权限模型过于粗放**：当前只有"每次手动批准"和"全部放行"两个极端，缺乏细粒度控制。插件 Hook 也无法绕过确认框，严重制约自动化场景。（#1973、#2643）

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) | 报告生成时间：2026-06-18*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-06-18

---

## 1. 今日速览

过去 24 小时内，Kimi Code CLI 无新版本发布，也无新 PR 合入。社区活跃度较低，共新增 2 个 Issue，均处于开放状态且暂无评论互动。整体来看，今日社区处于平静期，尚未形成热点讨论。

---

## 2. 版本发布

过去 24 小时内无新版本发布，本节省略。

---

## 3. 社区热点 Issues

今日仅有 2 个新 Issue，均值得关注：

### Issue #2459 — 支持会话运行中切换执行模式（Agent ↔ 集群）

- **链接**: [MoonshotAI/kimi-cli#2459](https://github.com/MoonshotAI/kimi-cli/issues/2459)
- **作者**: PresentXoX | 状态: OPEN | 👍: 0 | 评论: 0
- **摘要**: 用户请求在会话运行过程中能够动态切换执行模式——在 Agent 模式和集群模式之间自由切换，而无需中断当前会话。
- **为什么重要**: 这一需求触及了 CLI 工具的核心交互体验。当前一旦选定执行模式，用户若想切换就必须重启会话，这在长任务场景下代价较高。如果实现，将显著提升工作流的灵活性和效率，尤其适合需要在探索性编码（Agent）和批量处理（集群）之间频繁切换的开发者。
- **社区反应**: 刚提交，暂无评论和互动，但功能方向具有较高实用价值。

### Issue #2458 — 添加忽略 SSL 证书验证的选项

- **链接**: [MoonshotAI/kimi-cli#2458](https://github.com/MoonshotAI/kimi-cli/issues/2458)
- **作者**: dmorsin | 状态: OPEN | 👍: 0 | 评论: 0
- **摘要**: 用户所在企业环境中，杀毒软件通过中间人（MiMtm）方式拦截并替换 SSL 证书，导致 CLI 登录时证书验证失败。用户希望增加一个跳过 SSL 证书验证的选项。
- **为什么重要**: 这反映了企业安全策略与开发者工具之间的常见冲突。许多企业环境部署了 SSL 拦截代理，导致 CLI 工具无法正常认证。提供类似 `--insecure-skip-tls-verify` 的选项是业界常见做法（如 kubectl、curl 均支持），能显著降低企业用户的接入门槛。
- **社区反应**: 刚提交，暂无评论。但此类问题在企业用户群体中具有普遍性，预计会获得后续关注。

---

## 4. 重要 PR 进展

过去 24 小时内无新 PR 提交或更新，本节省略。

---

## 5. 功能需求趋势

基于今日及近期 Issue 分析，社区关注的功能方向包括：

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **执行模式灵活性** | #2459 | 会话内动态切换 Agent/集群模式，减少中断 |
| **企业环境兼容性** | #2458 | SSL 证书验证绕过，适配企业安全代理环境 |

整体来看，当前社区需求集中在**提升工具在复杂环境下的可用性和灵活性**，而非新增模型或 IDE 集成等方向。

---

## 6. 开发者关注点

从今日 Issue 中提炼出以下痛点：

1. **会话连续性不足**：执行模式一旦选定无法动态切换，打断工作流。开发者期望更流畅的交互体验。
2. **企业网络环境适配差**：SSL/TLS 证书验证在企业安全策略下成为障碍，缺乏灵活的配置选项。
3. **社区互动偏冷**：两个 Issue 均无评论和 👍，说明社区参与度有待提升，维护者可考虑主动回应以激活讨论。

---

> 📌 **总结**: 今日 Kimi Code CLI 社区较为平静，无版本发布和 PR 合入。两个新 Issue 分别指向执行模式灵活性和企业环境兼容性，虽暂无社区互动，但需求本身具有实际价值，值得维护团队关注。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-06-18

---

## 1. 今日速览

OpenCode 发布 v1.17.8，主要优化 Session 时间线加载性能并修复 OpenAI 兼容提供商的 MCP 工具校验问题。社区讨论热度最高的话题集中在 **GPT 模型响应延迟**（Issue #29079，117 条评论）和 **Agent 沙箱隔离**（Issue #2242，72 条评论）。多个自动化 PR 集中合并，涵盖 Cloudflare AI Gateway 修复、Microsoft Foundry 新增支持等。

---

## 2. 版本发布

### v1.17.8

**改进：**
- Session 时间线加载速度大幅提升，消除了闪烁和滚动跳动问题。

**Bug 修复：**
- OpenAI 兼容提供商现在可以接受之前校验失败的 MCP 工具 schema。（贡献者：@jquense）
- Cloudflare AI Gateway 现在能正确接收配置的 API Key。（贡献者：@keefetang）

---

## 3. 社区热点 Issues

| # | 标题 | 评论 | 👍 | 为什么重要 |
|---|------|------|-----|-----------|
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | GPT Models takes too long to respond | 117 | 49 | **今日最热 Issue**。用户反馈 GPT 模型（含 GPT-5.4）响应延迟从数秒到数分钟不等，严重影响日常使用体验。社区讨论极为活跃，是性能类问题的焦点。 |
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | Is there a way to sandbox the agent? | 72 | 54 | 用户希望像 Gemini CLI / Codex CLI 的 macOS Seatbelt 一样限制 Agent 的文件系统访问范围。**安全隔离**是 Agent 工具的核心诉求，长期高赞。 |
| [#11176](https://github.com/anomalyco/opencode/issues/11176) | Official OpenCode VS Code extension | 23 | 110 | **点赞数最高的 Issue**（110 👍）。社区强烈希望推出官方 VS Code 扩展，让 OpenCode 作为原生插件运行，而非仅依赖 TUI。 |
| [#6096](https://github.com/anomalyco/opencode/issues/6096) | Tokens per second 计算与展示 | 18 | 55 | 用户希望每条消息响应能看到 TPS 指标，帮助评估模型效率。55 点赞说明这是广泛需求。 |
| [#27589](https://github.com/anomalyco/opencode/issues/27589) | TUI fails on Alpine Linux (musl) | 33 | 12 | v1.14.50 引入的回归 bug，`getcontext` 符号未找到导致 TUI 无法初始化。影响 Alpine/musl 用户群体，已持续一个月。 |
| [#8456](https://github.com/anomalyco/opencode/issues/8456) | 根据任务类型自动切换模型 | 7 | 36 | 类似 Claude Code 的智能模型路由：简单任务用轻量模型，复杂任务用强模型。36 点赞显示社区对**成本优化**的高度关注。 |
| [#20902](https://github.com/anomalyco/opencode/issues/20902) | bash tool hangs on background child processes | 9 | 9 | 当命令产生后台子进程时，bash 工具会挂起直到超时。影响 `npm run build &` 等常见场景。 |
| [#19466](https://github.com/anomalyco/opencode/issues/19466) | opencode 空转时占用 ~50% CPU | 9 | 8 | 等待 API 速率限制重试时 CPU 占用异常高（i9-14900 单核 50%），属于**性能/资源浪费**问题。 |
| [#24817](https://github.com/anomalyco/opencode/issues/24817) | Ctrl+Z 在 Linux 上关闭应用而非撤销 | 5 | 2 | Linux 桌面端 Ctrl+Z 被映射为 SIGTSTP（挂起进程），而非文本撤销操作，影响桌面用户体验。 |
| [#32444](https://github.com/anomalyco/opencode/issues/32444) | GLM-5.2 thinking-effort 变体未暴露 | 3 | 8 | `variants()` 中对 `glm` 前缀的 blanket exclusion 导致 GLM-5.2 的 High/Max 思考强度选项不可用。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|---------|
| [#32731](https://github.com/anomalyco/opencode/pull/32731) | 自动发现 OpenAI 兼容提供商的模型 | 🟢 OPEN | 调用 `GET /models` 自动发现本地/远程 OpenAI 兼容服务器的可用模型，无需手动配置。解决 Issue #6231。 |
| [#27554](https://github.com/anomalyco/opencode/pull/27554) | 本地 LAN 提供商发现 + 自动模型发现 | 🟢 OPEN | 结合 mDNS 扫描局域网内的 OpenAI 兼容服务器，并在 `/connect` 中展示。 |
| [#32612](https://github.com/anomalyco/opencode/pull/32612) | 排除 ChatGPT 账户中的 `-pro` 模型 | 🟢 OPEN | 修复 ChatGPT OAuth 账户下 `gpt-5.5-pro` 等模型可选但请求必败的问题。 |
| [#32052](https://github.com/anomalyco/opencode/pull/32052) | 修复 Cloudflare AI Gateway API Key 传递 | 🔴 CLOSED | `createUnified()` 未传入 apiKey 的 bug 已修复。对应 v1.17.8 的 release note。 |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) | 新增 Kiro (AWS) 提供商 | 🟢 OPEN | 通过 `opencode-kiro` 插件将 AWS Kiro 作为内置提供商接入。 |
| [#27163](https://github.com/anomalyco/opencode/pull/27163) | 原生 Session Goals 支持 | 🟢 OPEN | 添加每会话目标追踪，持久化到服务端，通过 HTTP API 暴露。 |
| [#32743](https://github.com/anomalyco/opencode/pull/32743) | `/goal` 命令 + 自主目标追求 | 🟢 OPEN | 在 #27163 基础上增加 `/goal` 命令和 active/paused/completed 状态管理。 |
| [#28073](https://github.com/anomalyco/opencode/pull/28073) | 新增 Microsoft Foundry 认证提供商 | 🔴 CLOSED | 在 `/login` 中增加 Microsoft Foundry 选项，支持 Foundry 上的 GPT-5.x 部署。 |
| [#28059](https://github.com/anomalyco/opencode/pull/28059) | 修复上下文使用率显示 | 🔴 CLOSED | TUI 中的上下文使用率改为基于可用压缩上限计算，而非原始模型上下文上限，显示更准确。 |
| [#28047](https://github.com/anomalyco/opencode/pull/28047) | 修复 `opencode run` 后台任务等待 | 🔴 CLOSED | 非交互模式下 `opencode run` 现在会等待后台子会话完成后再退出。 |

---

## 5. 功能需求趋势

从当前 Issues 中提炼出社区最关注的 **5 大功能方向**：

| 方向 | 代表 Issue | 热度指标 | 说明 |
|------|-----------|---------|------|
| **IDE 集成** | [#11176](https://github.com/anomalyco/opencode/issues/11176) | 110 👍 | 社区最强烈的功能诉求。用户希望 OpenCode 作为 VS Code 原生扩展运行，与编辑器深度集成。 |
| **模型智能路由** | [#8456](https://github.com/anomalyco/opencode/issues/8456) | 36 👍 | 根据任务复杂度自动选择模型，兼顾成本与效果。对标 Claude Code 的模型选择策略。 |
| **Agent 沙箱/安全** | [#2242](https://github.com/anomalyco/opencode/issues/2242) | 54 👍, 72 评论 | 限制 Agent 的文件系统访问权限，防止越权操作。安全隔离是 Agent 大规模采用的前提。 |
| **多 Agent 编排** | [#17994](https://github.com/anomalyco/opencode/issues/17994) | 21 评论 | 在隔离工作区中运行多个 Agent 协作，类似 CrewAI / AutoGen 的模式。 |
| **可观测性增强** | [#6096](https://github.com/anomalyco/opencode/issues/6096) | 55 👍 | TPS 展示、上下文使用率精确计算等，开发者需要更透明的运行时指标。 |

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **模型响应延迟不可预测** — GPT 系列模型偶发性超长等待（数分钟），严重影响工作流。Issue #29079 已成为社区第一讨论热点。

2. **Agent 缺乏安全边界** — 当前 Agent 拥有完整的终端权限，用户担心误操作或恶意指令造成破坏。沙箱机制呼声极高。

3. **资源占用异常** — 空转等待 API 重试时 CPU 占用达 50%（Issue #19466），存在明显的资源浪费。

4. **桌面端体验问题** — Linux 上 Ctrl+Z 冲突（Issue #24817）、Windows 桌面端 v1.17.8 卡顿（Issue #32746）、Alpine/musl 兼容性回归（Issue #27589）。

### 🟡 高频需求

5. **模型生态扩展** — GLM-5.2 支持不完整（Issue #32444）、Kiro 提供商接入（PR #20491）、自动模型发现（PR #32731）——社区希望更无缝地接入各类模型。

6. **会话管理** — 会话数据无自动清理导致 SQLite 达 700MB（Issue #32630）、旧消息消失（Issue #7380）、缺少 TTL 和归档机制（Issue #16101）。

7. **权限模式切换** — 类似 Claude Code 的 Shift+Tab 运行时权限切换（Issue #7928，已关闭），用户希望动态控制 auto-edit 行为。

---

> 📊 **数据说明**：本报告基于 2026-06-17 至 2026-06-18 的 GitHub 数据生成，涵盖 50 条 Issues 和 50 条 PRs。评论数为 `undefined` 的 PR 表示数据源未提供评论数。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-06-18

---

## 1. 今日速览

过去24小时 Pi 社区活跃度较高，共处理 **48 条 Issues** 和 **15 条 PRs**。本日重点领域集中在：**流式渲染与 TUI 体验优化**（滚动拦截、围栏渲染修复）、**模型兼容性扩展**（Anthropic 自适应思考 `max` 级别、Azure Foundry Claude 提供商），以及**错误信息可读性**（透传 HTTP 错误实体）三大方向。版本发布方面，过去24小时内无新 Release，但多条关键 PR 已合并，预计在下个版本中集中落地。

---

## 2. 版本发布

无新 Release。

---

## 3. 社区热点 Issues

以下按热度与影响力排序：

### ① Streaming Markdown 强制滚动到底部 (Issue #5825)
- **链接**: [earendil-works/pi#5825](https://github.com/earendil-works/pi/issues/5825)
- **评论数**: 12 | **状态**: OPEN · in progress
- **重要性**: 高。开启 `clear on shrink` 流式输出时，用户手动滚回阅读历史内容会被反复强制跳回底部，严重影响阅读长回复的体验。已有对应 PR #5846 正在推进修复，是今天最受关注的 TUI bug。
- **社区反应**: 评论活跃，多位用户复现确认。

### ② 剥离 npm Shrinkwrap (Issue #5653)
- **链接**: [earendil-works/pi#5653](https://github.com/earendil-works/pi/issues/5653)
- **评论数**: 11 | **状态**: OPEN · in progress
- **重要性**: 高。当 `@earendil-works/pi-ai` 和 `@earendil-works/pi-coding-agent` 同时作为直接依赖安装时，磁盘上会存在两份 `pi-ai` 副本，因提供商注册表是模块级 `Map`，两份副本的状态相互独立但冲突，导致各种诡异行为。
- **社区反应**: 用户反馈强烈，属于包管理结构的长期债。

### ③ local-llm 流在 5 分钟后因 undici bodyTimeout 终止 (Issue #3715)
- **链接**: [earendil-works/pi#3715](https://github.com/earendil-works/pi/issues/3715)
- **评论数**: 11 | 👍: 4 | **状态**: CLOSED
- **重要性**: 高。通过本地 OpenAI 兼容接口（如 vLLM 托管 Qwen3）进行长时间工具调用时，约 5 分钟后连接因 undici 默认 `bodyTimeout` 被切断抛出 `UND_ERR_BODY_TIMEOUT`，且 `retry.provider.timeoutMs` 无法提升该上限。
- **社区反应**: 获 4 个 👍，说明影响面较广，已关闭（推测已定位根因）。

### ④ TUI Ctrl+P 切换模型后右下角名称不刷新 (Issue #5696)
- **链接**: [earendil-works/pi#5696](https://github.com/earendil-works/pi/issues/5696)
- **评论数**: 10 | **状态**: CLOSED
- **重要性**: 中。按 Ctrl+P 一次无反应，需按两次才跳跃两个位置，状态栏模型名不同步。属于 UI 状态同步问题。
- **社区反应**: 已关闭，修复落地较快。

### ⑤ Linux 配置文件路径不符合 XDG 规范 (Issue #534)
- **链接**: [earendil-works/pi#534](https://github.com/earendil-works/pi/issues/534)
- **评论数**: 9 | 👍: 20 | **状态**: CLOSED
- **重要性**: 中。Pi 在 Linux 下将配置目录直接置于 `$HOME/` 根目录而非 `$XDG_CONFIG_HOME`，违反 XDG 基准规范，导致用户目录污染。🥇 获 **20 个 👍**，是今天所有 Issues 中获赞最高的，可见 Linux 用户群体诉求强烈。
- **社区反应**: 已关闭，推测已有解决方案（如使用环境变量覆盖或新版本已迁移）。

### ⑥ 提供商吞掉 HTTP 错误实体，网关/鉴权错误无法阅读 (Issue #5763)
- **链接**: [earendil-works/pi#5763](https://github.com/earendil-works/pi/issues/5763)
- **评论数**: 5 | **状态**: OPEN · in progress
- **重要性**: 高。通过代理/网关时，非 2xx 且 SDK 无法解析响应体的情况下，大多数提供商直接丢弃错误实体。同样的 403 在不同提供商处显示为不同格式，调试极为困难。已有对应 PR #5832 修复。

### ⑦ 多 Agent 会话与 TUI 切换支持 (Issue #5700)
- **链接**: [earendil-works/pi#5700](https://github.com/earendil-works/pi/issues/5700)
- **评论数**: 5 | **状态**: OPEN
- **重要性**: 中高。用户希望同时运行多个 agent 会话并在 TUI 中切换，当前 `switchSession` 会销毁正在进行的会话，无法实现"后台任务持续运行+前台切换"的工作流。这是 Pi 向多任务平台演进的关键需求。

### ⑧ 添加 `excludeFromContext` 到 sendMessage 自定义消息 (Issue #5654)
- **链接**: [earendil-works/pi#5654](https://github.com/earendil-works/pi/issues/5654)
- **评论数**: 7 | 👍: 1 | **状态**: OPEN
- **重要性**: 中。已存在的 bash 执行消息支持排除上下文引用的功能，但通过 `pi.sendMessage()` 发送的自定义消息缺少类似机制，限制了扩展开发中的上下文精细控制。

### ⑨ TUI 树形导航截断过长条目 (Issue #5830)
- **链接**: [earendil-works/pi#5830](https://github.com/earendil-works/pi/issues/5830)
- **评论数**: 4 | **状态**: CLOSED · in progress
- **重要性**: 中。`/tree` 或 `doubleEscapeAction: "tree"` 中所有条目使用 `truncateToWidth` 截断，超宽内容完全不可读。已快速关闭，修复迅速。

### ⑩ Warp 终端未识别为支持 Kitty 图像协议 (Issue #5827)
- **链接**: [earendil-works/pi#5827](https://github.com/earendil-works/pi/issues/5827)
- **评论数**: 3 | **状态**: OPEN
- **重要性**: 中。Warp 终端作为流行的现代终端未被 Pi 识别，含图像内容的消息只能回退为文字显示。已有对应 PR #5841 修复中。

---

## 4. 重要 PR 进展

### ① fix(tui): 稳定流式代码围栏渲染 (PR #5846)
- **链接**: [earendil-works/pi#5846](https://github.com/earendil-works/pi/pull/5846)
- **作者**: xl0 | **状态**: OPEN
- **内容**: 修复 Issue #5825。流式 Markdown 输出时，开启 `clear on shrink` 导致 Pi 强制将视图滚回底部的行为，使用户无法回溯阅读已完成的内容。
- **意义**: 直接回应今日热度最高的 TUI 体验问题。

### ② detect Warp terminal and enable Kitty image protocol (PR #5841)
- **链接**: [earendil-works/pi#5841](https://github.com/earendil-works/pi/pull/5841)
- **作者**: dodiego | **状态**: OPEN
- **内容**: 通过匹配 `TERM_PROGRAM=WarpTerminal` / `WARP_SESSION_ID` / `WARP_TERMINAL_SESSION_UUID` 检测 Warp 终端，启用 Kitty 图形协议和 OSC 8 超链接支持。修复 #5827。
- **意义**: Warp 用户日益增多，补齐终端兼容性格局。

### ③ feat(ai): 添加 Azure AI Foundry Anthropic Claude 提供商 (PR #5849) ✅ 已合并
- **链接**: [earendil-works/pi#5849](https://github.com/earendil-works/pi/pull/5849)
- **作者**: pvjagtap | **状态**: CLOSED（已合并）
- **内容**: 新增 `azure-foundry` 提供商，通过专用 SDK 路由和支持 Entra ID（Azure AD）认证，实现 Azure AI Foundry 托管的 Claude 模型一等支持。
- **意义**: 企业用户和 Azure 基础设施用户的刚需提供商。

### ④ fix(ai): 透传提供商 HTTP 错误实体 (PR #5832)
- **链接**: [earendil-works/pi#5832](https://github.com/earendil-works/pi/pull/5832)
- **作者**: stephanmck | **状态**: OPEN
- **内容**: 修复 #5763。在各提供商异常处理中透传原始 HTTP 响应体，而非抛出 `Unknown: UnknownError` 等不透明信息，让网关/代理层的错误诊断成为可能。
- **意义**: 大幅改善 Pi 在代理环境下的可调试性。

### ⑤ fix(ai): 包含原始提供商错误实体（共享格式化器）(PR #5828) ✅ 已合并
- **链接**: [earendil-works/pi#5828](https://github.com/earendil-works/pi/pull/5828)
- **作者**: MackDing | **状态**: CLOSED（已合并）
- **内容**: 添加共享提供商错误格式化器，对 OpenAI、Azure OpenAI、OpenAI Codex、Google、Vertex、Bedrock 和 Mistral 统一回退到原始 HTTP 响应体。
- **意义**: 与 PR #5832 互补，统一了错误处理的用户体验。

### ⑥ feat: 为自适应推理模型添加 "max" 思考级别 (PR #5829) ✅ 已合并
- **链接**: [earendil-works/pi#5829](https://github.com/earendil-works/pi/pull/5829)
- **作者**: mcphailtom | **状态**: CLOSED（已合并）
- **内容**: 将 `ThinkingLevel` 扩展至 `xhigh` 之上的 `max` 级别，覆盖 `claude-opus-4.8`、`claude-opus-4.7`、`claude-opus-4.6`、`claude-sonnet-4.6` 等支持该模式的模型。
- **意义**: 紧跟 Anthropic 最新模型能力，解锁最高推理强度。

### ⑦ fix(ai): 价格计算修正——Anthropic 1h 缓存写入按 2x 计费 (PR #5738) ✅ 已合并
- **链接**: [earendil-works/pi#5738](https://github.com/earendil-works/pi/pull/5738)
- **作者**: theBucky | **状态**: CLOSED（已合并）
- **内容**: 读取 `ephemeral_1h_input_tokens` 并在 `calculateCost` 中对 1h 缓存写入按 2x 基础输入费率计费，修复此前统一按 5min 费率计价导致少计约 1.6x 的问题。
- **意义**: 费用精确度的关键修复，对用户计费透明度至关重要。

### ⑧ fix(ai): 修复 Anthropic 和 Bedrock 提供商中 Opus-4.8 自适应思考 (PR #5554) ✅ 已合并
- **链接**: [earendil-works/pi#5554](https://github.com/earendil-works/pi/pull/5554)
- **作者**: BobBoba | **状态**: CLOSED（已合并）
- **内容**: 将 `claude-opus-4-8` 加入两家提供商的 `supportsAdaptiveThinking` 白名单，修复其回退到旧版思考路径导致 400 报错的问题。
- **意义**: 释放 Opus-4.8 完整能力。

### ⑨ chore(deps): 升级 vitest 3.2.6 并覆盖 esbuild 0.28.1 (PR #5850) ✅ 已合并
- **链接**: [earendil-works/pi#5850](https://github.com/earendil-works/pi/pull/5850)
- **作者**: pvjagtap | **状态**: CLOSED（已合并）
- **内容**: 消除 6 个 `npm audit` 漏洞中的 5 个（1 low + 5 high → 剩余 1 low），无运行时行为变更。
- **意义**: 开发依赖安全维护。

### ⑩ fix(ai): send responses prompts as instructions (PR #5859)
- **链接**: [earendil-works/pi#5859](https://github.com/earendil-works/pi/pull/5859)
- **作者**: theBucky | **状态**: OPEN
- **内容**: OpenAI Responses API 要求系统提示置于顶层 `instructions` 而非回放的 `input` 消息。此 PR 将 `context.systemPrompt` 通过 Responses 专用 `instructions` 通道发送，`input` 仅限会话和工具回放。
- **意义**: 修复 OpenAI Responses 系列提供商的系统提示传递语义错误，对 OpenAI/Azure OpenAI/Codex Responses 均有影响。

---

## 5. 功能需求趋势

综合今日所有 Issues 与 PRs，社区最集中的功能方向如下：

| 方向 | 代表 Issues/PRs | 热度 |
|---|---|---|
| **新模型支持 & 模型配置** | #5770 (GLM-5.2 effort), #5829 (max thinking), #5692 (GLM-5.2 1M), #5768 (GitHub Copilot 1M), #5849 (Azure Foundry), #5860 (Opencode Go GLM-5.2) | 🔥🔥🔥 |
| **TUI/终端体验** | #5825 (滚动), #5827 (Warp), #5830 (树形导航), #5700 (多会话切换), #5696 (模型名刷新) | 🔥🔥🔥 |
| **多 Agent / 会话管理** | #5700 (多会话), #5781 (active tools API), #5810 (RPC get_entries/get_tree) | 🔥🔥 |
| **提供商错误可观测性** | #5763, PR #5832, PR #5828 | 🔥🔥 |
| **大包/包结构优化** | #5653 (Shrinkwrap), #5738 (价格计算), #5850 (依赖升级) | 🔥 |
| **扩展/插件 API** | #5654 (excludeFromContext), #5781 (getActiveExecutableTools) | 🔥 |
| **多模态支持** | #3200 (video/audio prompt) | 🔥 |

**小结**: 模型支持和 TUI 体验是两条最粗的脉络。"多 Agent + 会话切换"正在从功能请求向架构需求演进，预示着 Pi 可能向多任务平台方向发展。

---

## 6. 开发者关注点

### 🔧 高频痛点

1. **Shrinkwrap 导致的模块重复问题 (#5653)** —— 同时安装 `pi-ai` 和 `pi-coding-agent` 时两份副本冲突。这是 Pi 生态中其他项目（如集成 Pi 为依赖的开发者）经常踩的坑，建议关注上游进展或暂时使用覆盖安装。

2. **TUI 在流式输出下的阅读体验 (#5825)** —— 在长回复场景中强制滚底导致无法回溯阅读，是交互层面的核心体验缺陷。PR #5846 已存在，可追踪。

3. **代理/网关环境下的错误不透明 (#5763)** —— 对使用企业代理或中间件的开发者尤为痛苦，403/502 等关键错误信息被吞掉。PR #5832 和 #5828 正在解决。

4. **长时间运行的本地 LLM 超时 (#3715)** —— 使用 vllm/llama.cpp 等本地部署的开发者，超过 5 分钟的 Write 工具调用会被 undici 切断。已标记 CLOSED，建议确认修复版本。

### 📌 实用建议

- 若使用 **Azure** 部署 Claude，PR #5849 合并后可使用新 `azure-foundry` 提供商，无需再通过通用 OpenAI 兼容配置绕行。
- 若使用 **Warp 终端**，PR #5841 修复后即可原生支持 Kitty 图像协议，无需临时环境变量 workaround。
- 若使用 **Anthropic 最新模型**，合并 `max` 思考级别（PR #5829）后即可通过配置解锁最高推理强度，同时 PR #5738 修复了缓存价格低估问题，确保计费准确。

---

*数据来源: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 统计时间: 2026-06-18 · 时间范围: 过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-06-18

---

## 1. 今日速览

Qwen Code 今日发布 **v0.18.3** 正式版，主要修复 CLI 交互问题。社区讨论最激烈的是 **Qwen OAuth 免费额度政策调整**（Issue #3203，151 条评论），用户强烈反对将日免费请求从 1000 次降至 100 次并计划关闭免费入口。同时，**工具调用死循环**（#5234）、**上下文配置文件不生效**（#5267）和 **DeepSeek V4 预设错误**（#5252）等 Bug 集中涌现，多个修复 PR 正在推进中。

---

## 2. 版本发布

### v0.18.3 — 2026-06-18

**主要变更：**
- **fix(cli):** 修复 `ask_user_question` 被取消后未正确停止的问题（PR #5243，作者 @doudouOUC）
- 包含此前 v0.18.2 的所有修复：超大上下文警告、文档默认值修正、CLI 语法和工具命名漂移修复

> 🔗 [Release v0.18.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.3)

---

## 3. 社区热点 Issues

| # | 标题 | 评论数 | 为什么重要 |
|---|------|--------|-----------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | Qwen OAuth Free Tier Policy Adjustment | 151 | 社区最热门议题。提议将免费额度从 1000 次/天降至 100 次/天并最终关闭免费入口，引发大量用户反对和讨论，直接影响免费用户的使用体验和留存。 |
| [#4479](https://github.com/QwenLM/qwen-code/issues/4479) | 需要统计每日 Token 消耗功能 | 16 | 用户反馈单次使用就消耗 3000 万 Token，迫切需要 Token 用量统计功能来监控成本，反映用户对费用透明度的强烈需求。 |
| [#3384](https://github.com/QwenLM/qwen-code/issues/3384) | 无法添加 OpenAI 兼容的本地 LLM | 15 | 用户尝试通过 VLLM 接入本地 Qwen3.6-35B-A3B 模型失败，暴露了自定义 Provider 配置文档和实际行为不一致的问题。 |
| [#5234](https://github.com/QwenLM/qwen-code/issues/5234) | 工具调用陷入死循环 | 4 | 工具调用无法正常结束，严重影响使用体验。已有 PR #5242 跟进修复，引入工具调用熔断机制。 |
| [#5267](https://github.com/QwenLM/qwen-code/issues/5267) | `context.fileName` 设置不生效 | 5 | 用户按文档配置了自定义上下文文件名（如 `QWEN.md`、`README.md`），但实际未生效，影响 Agent 上下文注入的灵活性。 |
| [#5252](https://github.com/QwenLM/qwen-code/issues/5252) | DeepSeek V4 预设错误设置 image/video 模态 | 2 | DeepSeek V4 实际为纯文本模型，但 Qwen Code 的 Provider 预设错误地标记了图像/视频能力，可能导致请求异常。已有 PR #5268 修复。 |
| [#5173](https://github.com/QwenLM/qwen-code/issues/5173) | 多 Provider 共享同一 model id 时消歧失败 | 3 | 当多个 Provider（Token Plan、IdeaLab、BFF）注册相同模型 ID 时，选择后无法跨会话持久化，影响多 Provider 用户的模型切换体验。 |
| [#5147](https://github.com/QwenLM/qwen-code/issues/5147) | `/quit` 后 OOM 内存溢出 | 3 | 短会话执行 `/quit` 后仍可能触发 V8 堆内存溢出，与 managed auto-memory 后台任务处理大文本历史有关，影响稳定性。 |
| [#5270](https://github.com/QwenLM/qwen-code/issues/5270) | settings schema 拒绝合法的 tools.sandbox 值 | 2 | 生成的 JSON Schema 将 `tools.sandbox` 定义为 object 类型，但文档说明应为 boolean 或 string，导致配置校验失败。 |
| [#5090](https://github.com/QwenLM/qwen-code/issues/5090) | 解耦 Provider Identity 与 SDK Protocol | 5 | 架构级重构提案，希望将 `providerId` 改为自由字符串，新增 `Protocol` 枚举控制 SDK 路由，以更好地支持自定义 Provider。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 功能/修复内容 |
|---|------|------|-------------|
| [#5268](https://github.com/QwenLM/qwen-code/pull/5268) | fix(core): keep DeepSeek presets text-only | OPEN | 移除 DeepSeek V4 预设中错误的 image/video 能力标记，修复 Issue #5252。 |
| [#5269](https://github.com/QwenLM/qwen-code/pull/5269) | fix(cli): correct context filename settings schema | OPEN | 修正 `context.fileName` 的 JSON Schema 定义，使其接受 string 或 string[]，修复 Issue #5267 和 #5270。 |
| [#5242](https://github.com/QwenLM/qwen-code/pull/5242) | Fix/tool call circuit breaker | OPEN | 为工具调用添加熔断机制，防止工具调用陷入无限循环，对应 Issue #5234。 |
| [#5220](https://github.com/QwenLM/qwen-code/pull/5220) | feat(i18n): localize tool display names | OPEN | 将 TUI 和 Web Shell 中的工具调用标签（如 `TodoWrite`、`Shell`）通过 i18n 路由，支持中文等非英语界面。 |
| [#5266](https://github.com/QwenLM/qwen-code/pull/5266) | fix(daemon): centralize mid-turn event constant | OPEN | 将 `mid_turn_message_injected` SSE 事件类型提取为共享常量，并修复超时 drain 恢复逻辑，是 #5175 的后续改进。 |
| [#5183](https://github.com/QwenLM/qwen-code/pull/5183) | fix(cli): Preserve mid-turn image messages | OPEN | 修复会话恢复时 mid-turn 图像消息丢失的问题，确保多模态上下文不中断。 |
| [#5126](https://github.com/QwenLM/qwen-code/pull/5126) | feat(vision-bridge): transcribe images to text for text-only models | OPEN | 新增"视觉桥接"功能：当纯文本主模型收到图像时，自动调用多模态模型将图像转为文本再交给主模型，默认关闭。 |
| [#5030](https://github.com/QwenLM/qwen-code/pull/5030) | feat(core,cli,sdk): resume interrupted turn without synthetic "continue" | OPEN | 提供一种无需插入合成"continue"消息即可恢复中断 turn 的一等公民方式，改善崩溃恢复体验。 |
| [#5182](https://github.com/QwenLM/qwen-code/pull/5182) | feat(loop): add second-resolution session wakeup engine | OPEN | 为 `/loop` 添加秒级精度的会话唤醒引擎，实现自步调循环，向 Claude Code 的 `ScheduleWakeup` 对齐。 |
| [#5260](https://github.com/QwenLM/qwen-code/pull/5260) | feat(serve): make ACP permission timeout configurable | OPEN | 为 `qwen serve` 添加 `--permission-response-timeout-ms` 参数，允许配置人类权限响应超时时间。 |

---

## 5. 功能需求趋势

从当前 Issues 和 PRs 来看，社区最关注的功能方向包括：

1. **🔐 认证与计费体系** — OAuth 免费额度政策（#3203）、Token 用量统计（#4479）、多 Provider 模型消歧（#5173）是最高频话题。用户对费用透明度和认证稳定性极为敏感。

2. **🌐 多平台渠道扩展** — QQ Bot Channel Adapter（#5201、#5202）表明社区希望 Qwen Code 覆盖更多即时通讯平台，与已有的 Telegram/微信/钉钉/飞书并列。

3. **🔧 自定义 Provider 与模型支持** — 本地 LLM 接入困难（#3384）、Provider 与 SDK 协议解耦（#5090）、DeepSeek 预设修正（#5252）反映出社区对灵活模型配置和第三方 Provider 支持的强烈需求。

4. **🧠 多模态能力增强** — 视觉桥接（#5126）、LaTeX 数学公式渲染（#3439）、mid-turn 图像消息保留（#5183）显示社区希望 Qwen Code 在终端环境下提供更丰富的内容理解能力。

5. **🔄 会话管理与恢复** — 中断 turn 恢复（#5030）、`/loop` 自步调唤醒引擎（#5182、#5197）、会话列表子命令（#4825）体现社区对长会话、自动化工作流的深度需求。

6. **🌍 国际化（i18n）** — 工具显示名称本地化（#5220）是 i18n 持续完善的一部分，中文用户群体对此尤为关注。

---

## 6. 开发者关注点

**高频痛点：**
- **工具调用稳定性** — 死循环（#5234）和重复工具调用报错（#5237）是近期集中反馈的 Bug，熔断机制 PR 正在跟进。
- **上下文配置不生效** — `context.fileName` 设置（#5267）和 settings schema 校验错误（#5270）暴露了文档与实际行为不一致的问题，修复 PR 已提交。
- **内存与性能** — `/quit` 后 OOM（#5147）和超大上下文警告（v0.18.2 修复）说明大文本历史处理仍有优化空间。
- **认证体验** — OAuth 401 错误（#3335、#1855）、切换认证方式后会话残留（#1855）等问题持续困扰用户。
- **UI/UX 细节** — tmux 下触控板滚动冲突（#5159）、React 错误（#5199）、Vim 模式补全键位（#2561）等交互问题虽小但影响日常使用体验。

**总结：** Qwen Code 社区当前处于快速迭代期，v0.18.3 聚焦稳定性修复，社区反馈的核心矛盾集中在**免费额度政策变动**和**工具调用可靠性**两大方向。多模态支持、自定义 Provider 灵活性和国际化是中期功能演进的重点。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-06-18

---

## 1. 今日速览

今日社区活跃度极高，过去 24 小时内涌现 **16 条 Issue 更新**和 **27 条 PR 更新**，无新版本发布。核心焦点集中在 **v0.8.61 回归 bug 修复**（Plan/Agent 模式切换、快照配置不生效、Kimi 参数 schema 不完整）、**Agent 行为失控**（自问自答循环、偏离用户意图）以及 **v0.9.0 架构重构 EPIC** 的推进。多个修复 PR 同日提交，显示社区响应速度较快。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 为何重要 | 链接 |
|---|------|------|----------|------|
| 1 | **CodeWhale 过度介入修改，自问自答偏离用户意图** (#3275) | OPEN 🔴 | 用户报告 AI Agent 进入自驱循环——未经确认即提出方案、自行回答并执行，严重偏离用户原始意图。这是 Agent 可靠性层面的核心体验问题，已有 4 条评论跟进。 | [Hmbown/CodeWhale#3275](https://github.com/Hmbown/CodeWhale/issues/3275) |
| 2 | **Plan/Agent 模式切换不一致 & 工具权限混乱** (#3279) | OPEN 🔴 | 从 Plan 切换到 Agent 模式后，`write_file`/`exec_shell` 持续报 `denied by user`，但 UI 显示已是 Agent 模式；恢复后 AI 又自动越权执行。模式状态机存在严重 bug，直接影响多阶段工作流。 | [Hmbown/CodeWhale#3279](https://github.com/Hmbown/CodeWhale/issues/3279) |
| 3 | **v0.8.61 UI 在自动 spawn 多个 agent 后冻结** (#3289) | OPEN 🔴 | Plan 模式下输入内容后 UI 完全冻结，疑似多 agent 并发调度导致 TUI 渲染线程阻塞。影响多 agent 核心场景的可用性。 | [Hmbown/CodeWhale#3289](https://github.com/Hmbown/CodeWhale/issues/3289) |
| 4 | **v0.8.61 #3265 修复不完整——Kimi/Moonshot 参数仍缺失 type:object** (#3281) | OPEN 🟡 | `sanitize_for_kimi_parameters` 仅覆盖空 schema / properties / required 等窄条件，`$ref`、`anyOf`、`allOf`、`oneOf` 根 schema 未注入 `type:object`，导致 Kimi API 返回 400。影响 Moonshot 模型用户。 | [Hmbown/CodeWhale#3281](https://github.com/Hmbown/CodeWhale/issues/3281) |
| 5 | **pre_tool_snapshot 未遵守 snapshots.enabled=false** (#3292) | OPEN 🟡 | 用户已在配置中禁用快照，但 `pre_tool_snapshot` 仍在每次写文件前提交 git snapshot，导致 `.git` 目录被完整复制，占用 GB 级磁盘空间。配置信任问题。 | [Hmbown/CodeWhale#3292](https://github.com/Hmbown/CodeWhale/issues/3292) |
| 6 | **EPIC: v0.9.0 分阶段命令边界重构** (#2870) | OPEN 🟢 | 跟踪 v0.9.0 核心架构重构——将命令边界拆分为可独立合并的小层，以 #2851 为参考分支。是下一个大版本的基础设施工作。 | [Hmbown/CodeWhale#2870](https://github.com/Hmbown/CodeWhale/issues/2870) |
| 7 | **EPIC: v0.9.0 Chat-native CodeWhale 工作间** (#3209) | OPEN 🟢 | 提出将 CodeWhale 从终端/本地网页扩展为聊天原生工作间——线程、频道、@提及、可分享链接、GitHub 上下文、多 agent/多模型协作。是产品形态的长期愿景。 | [Hmbown/CodeWhale#3209](https://github.com/Hmbown/CodeWhale/issues/3209) |
| 8 | **config.toml 注释内容在 TUI 修改后被自动擦除** (#3282) | OPEN 🟡 | 用户通过 TUI 修改配置（如 trust zone）时，所有注释行被清除。影响用户添加备注和临时禁用配置的体验。 | [Hmbown/CodeWhale#3282](https://github.com/Hmbown/CodeWhale/issues/3282) |
| 9 | **Cargo 分发：重命名后 `codewhale` 命令找不到** (#2917) | CLOSED ✅ | 从 `deepseek-tui` 更新后，`deepseek update` 报 `codewhale not found on PATH`。已关闭，但反映了品牌重命名过渡期的安装体验问题。 | [Hmbown/CodeWhale#2917](https://github.com/Hmbown/CodeWhale/issues/2917) |
| 10 | **全新 Ubuntu 24.04 安装失败** (#3268) | CLOSED ✅ | 腾讯云 Ubuntu 24.04 环境下 `cargo install` 失败。已关闭，但新用户入门门槛仍需关注。 | [Hmbown/CodeWhale#3268](https://github.com/Hmbown/CodeWhale/issues/3268) |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 修复/功能内容 | 链接 |
|---|------|------|---------------|------|
| 1 | **fix(tui): 将 composer_history 写入 .codewhale 而非遗留 .deepseek** (#3294) | OPEN | 修复 `default_history_path` 硬编码 `~/.deepseek/composer_history.txt`，导致每次非斜杠提示提交都在运行时重建 `~/.deepseek/` 目录。 | [Hmbown/CodeWhale#3294](https://github.com/Hmbown/CodeWhale/pull/3294) |
| 2 | **fix(tui): 遵守 snapshots.enabled 配置，跳过 per-tool 快照** (#3293) | OPEN | 修复 #3292——在 `turn_loop.rs` 的 per-tool 调用点补充 `snapshots.enabled` 守卫，与 pre-turn/post-turn 保持一致。 | [Hmbown/CodeWhale#3293](https://github.com/Hmbown/CodeWhale/pull/3293) |
| 3 | **Fix: 保留 config.toml 中的注释** (#3291) | OPEN | 所有重写 `config.toml`/`settings.toml`/`tui.toml` 的路径改用 `toml_edit` 合并原始注释，用户注释和临时禁用的配置不再丢失。 | [Hmbown/CodeWhale#3291](https://github.com/Hmbown/CodeWhale/pull/3291) |
| 4 | **fix(auto): 允许 flash router 不可用时回退到启发式 auto 路由** (#3280) | OPEN | 修复 `codewhale --provider wanjie-ark --model auto exec` 在无 DeepSeek API key 时报错的问题——允许 router 不可用时使用启发式路由。 | [Hmbown/CodeWhale#3280](https://github.com/Hmbown/CodeWhale/pull/3280) |
| 5 | **fix: Plan/Agent 模式切换——approval_mode 恢复 + 自动执行守卫** (#3283) | OPEN | 修复 #3279——`App::set_mode` 在 Plan→Agent 切换时未正确恢复 `approval_mode`，且缺少自动执行守卫。 | [Hmbown/CodeWhale#3283](https://github.com/Hmbown/CodeWhale/pull/3283) |
| 6 | **fix(prompts): 添加 scope_discipline 规则防止 Agent 自问自答循环** (#3290) | OPEN | 在 `constitution.md` 中新增 47 行 scope_discipline 规则，约束 Agent 不得自行提出并回答超出用户请求范围的问题。 | [Hmbown/CodeWhale#3290](https://github.com/Hmbown/CodeWhale/pull/3290) |
| 7 | **fix(tui): stall/cancel 恢复前持久化 session，确保 --continue 保留历史** (#3285) | OPEN | 修复 #2739——stall watchdog 和 cancel 路径在清理 turn bookkeeping 前先持久化 session，避免长 turn 丢失。 | [Hmbown/CodeWhale#3285](https://github.com/Hmbown/CodeWhale/pull/3285) |
| 8 | **fix(tui): 为所有 schema 形状的 Kimi 参数根注入 type:object** (#3286) | OPEN | 修复 #3281——扩展 `sanitize_for_kimi_parameters` 覆盖 `$ref`、`allOf`、`anyOf`、`oneOf` 根 schema。 | [Hmbown/CodeWhale#3286](https://github.com/Hmbown/CodeWhale/pull/3286) |
| 9 | **perf(tui): 防抖 thinking-stream 重渲染** (#3284) | OPEN | 修复 #1620——`append()` 不再在每个 reasoning delta 时调用 `bump_active_cell_revision()`，改为防抖，显著提升快速推理模型的显示流畅度。 | [Hmbown/CodeWhale#3284](https://github.com/Hmbown/CodeWhale/pull/3284) |
| 10 | **perf(prompts): 将易变 workspace path 移出静态系统前缀** (#3288) | OPEN | 将 `pwd` 从静态系统提示前缀移至动态部分，避免每个 session 因 workspace 路径不同而导致系统提示缓存失效，减少 token 消耗。 | [Hmbown/CodeWhale#3288](https://github.com/Hmbown/CodeWhale/pull/3288) |

---

## 5. 功能需求趋势

从今日所有 Issues 和 PR 中，可提炼出以下 **5 大功能方向**：

### ① Agent 行为可控性（最高优先级）
- **自问自答循环**（#3275、#3290）：Agent 超出用户意图范围自行提案、回答、执行。
- **模式切换状态机**（#3279、#3283）：Plan/Agent/YOLO 模式切换时权限状态不一致。
- **scope_discipline 规则**：社区已开始通过 prompt 层面约束 Agent 行为边界。

### ② 多 Agent 编排与 Fleet 架构
- **EPIC #2007**：协调多 agent 运行的迁移工作。
- **EPIC #3209**：Chat-native 工作间愿景。
- **PR #3171、#3172**（已合并）：Agent Fleet 协议类型和持久化 inbox/ledger。
- **Issue #3289**：多 agent spawn 后 UI 冻结——并发调度稳定性待解决。

### ③ 配置与用户体验
- **config.toml 注释保留**（#3282、#3291）：用户期望 TUI 修改配置时保留注释。
- **快照配置信任**（#3292、#3293）：`snapshots.enabled=false` 未被 per-tool 快照遵守。
- **composer_history 路径迁移**（#3294）：从 `.deepseek` 到 `.codewhale` 的品牌过渡。

### ④ 模型兼容性与 Provider 生态
- **Kimi/Moonshot 参数 schema**（#3281、#3286）：`type:object` 注入不完整。
- **auto 路由回退**（#3280）：无 DeepSeek API key 时的启发式路由。
- **Atlas Cloud 文档**（PR #3239）：新增 OpenAI 兼容后端提供商文档。

### ⑤ 性能与稳定性
- **Thinking stream 渲染性能**（#1620、#3284）：防抖优化。
- **系统提示缓存效率**（#3288）：将易变路径移出静态前缀。
- **Session 持久化**（#2739、#3285）：stall/cancel 后 `--continue` 数据丢失。

---

## 6. 开发者关注点

| 痛点 | 具体表现 | 社区响应 |
|------|----------|----------|
| **Agent 行为不可预测** | 自问自答、越权执行、偏离用户意图 | 已通过 prompt 规则（#3290）和模式状态机修复（#3283）双管齐下 |
| **配置管理体验差** | 注释被擦除、快照配置不生效、历史路径硬编码 | 同日提交 3 个修复 PR（#3291、#3293、#3294），响应迅速 |
| **多 Agent 稳定性** | spawn 多 agent 后 UI 冻结 | 尚在排查，疑似渲染线程阻塞 |
| **品牌重命名过渡** | `deepseek-tui` → `codewhale` 导致 PATH 和目录问题 | 已有修复 PR，但新用户安装体验仍需打磨 |
| **v0.9.0 架构重构复杂度** | 命令边界重构 EPIC 需拆分为小层合并 | 社区正通过 #2870 跟踪，#2791 为设计参考 |

---

> **总结**：今日社区处于 **v0.8.61 密集修 bug + v0.9.0 架构铺垫** 的并行阶段。Agent 行为可控性是最突出的用户体验问题，多个修复 PR 同日提交表明社区响应积极。建议关注 #3279（模式切换）、#3290（scope_discipline）和 #3289（多 agent 冻结）的后续进展。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*