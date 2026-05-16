# AI CLI 工具社区动态日报 2026-05-16

> 生成时间: 2026-05-16 00:31 UTC | 覆盖工具: 8 个

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

**AI CLI 工具生态横向对比分析报告 (2026-05-16)**

---

### **1. 生态全景**
当前 AI CLI 工具生态呈现“多极竞争、功能趋同、体验分化”的格局。Claude Code 凭借深度插件集成与 Agent 工作流领先，但面临稳定性挑战；OpenCode 以 Effect 驱动的事件系统和后台子代理构建差异化优势；Pi 和 Qwen Code 聚焦多模型推理支持与本地部署扩展；Gemini CLI 和 Kimi Code CLI 则在跨平台兼容性与 Hook 机制上发力。整体趋势是：从单一对话向复杂任务自动化演进，安全与性能成为核心竞争力。

---

### **2. 各工具活跃度对比**

| 工具名称 | Issues 数（活跃） | PR 数（更新） | Release 情况 |
| :------- | :---------------- | :------------ | :----------- |
| **Claude Code** | ~50+（#34255等Top10） | 3（#59508等） | v2.1.143发布，插件依赖管理增强 |
| **OpenAI Codex** | ~20+（#11023等） | 10+（#22878等） | Rust Alpha 版本迭代（v0.131.0-alpha.x） |
| **Gemini CLI** | ~20+（#21409等） | 10+（#27131等） | v0.44.0-nightly.20260515发布，RAG日志支持 |
| **GitHub Copilot CLI** | ~10+（#1697等） | 0 | v1.0.49发布，MCP搜索实验性引入 |
| **Kimi Code CLI** | ~15+（#2077等） | 10+（#2305等） | 无新Release |
| **OpenCode** | ~30+（#20695等） | 10+（#27805等） | v1.15.0 & v1.14.51发布，Effect系统引入 |
| **Pi** | ~15+（#4251等） | 10+（#4562等） | 无新Release |
| **Qwen Code** | ~20+（#3203等） | 10+（#4123等） | v0.15.12-preview.2发布，流处理修复 |

---

### **3. 共同关注的功能方向**

*   **Agent 工作流管理与会话控制:** Claude Code (`/new` PR, Session forking Issue), Qwen Code (`/goal`, `/rewind` PR), OpenCode (后台子代理), Pi (auto-compact) 均致力于提升复杂任务的自动化与上下文管理能力。
*   **插件与 MCP 生态扩展:** Claude Code (插件依赖管理, MCP接口开放), GitHub Copilot CLI (MCP服务器连接, 搜索), OpenCode (VS Code集成, 局域网服务发现) 都在积极构建和深化插件生态系统，尤其是通过 Model Context Protocol (MCP) 实现工具集成。
*   **终端用户体验优化:** Kimi Code CLI (Shift+Enter, UI简化), OpenCode (TUI滚动条, 键位绑定), Pi (TUI渲染修复) 普遍关注终端交互的流畅性、一致性和视觉清晰度。
*   **内存管理与性能:** Qwen Code (OOM崩溃, 内存诊断工具), OpenCode (内存泄漏担忧), Pi (长会话内存优化) 都将内存管理和性能优化视为关键挑战，并探索自动压缩、诊断工具等解决方案。
*   **安全与控制:** Gemini CLI (权限审批, 危险操作拦截), Kimi Code CLI (安全更新, Hook机制), OpenCode (默认分享设置) 都强调用户数据隐私和安全策略的执行。

---

### **4. 差异化定位分析**

*   **Claude Code:** **深度集成与高级 Agent 功能。** 定位为 Anthropic 生态的核心开发助手，强调与 Claude 模型的深度集成、强大的插件系统（尤其是 MCP）、以及复杂的 Agent 工作流管理能力（如 `/new`, 投影成本展示）。目标用户是追求高效、自动化开发流程的高级开发者。技术路线侧重于插件生态和 Agent 行为控制。
*   **OpenAI Codex:** **底层架构重构与跨平台沙箱。** 定位为 OpenAI 技术的 CLI 封装，当前重点在于 Rust 底层重构、Windows 沙箱权限模型升级以及跨平台兼容性改进。目标用户是对底层架构、安全沙箱和跨平台一致性有高要求的开发者。技术路线侧重于底层系统级优化。
*   **Gemini CLI:** **跨平台兼容性与智能 Agent。** 定位为 Google Gemini 模型的开发接口，强调跨平台体验一致性（WSL, Wayland, Windows shell）、智能 Agent 行为（AST感知, 技能推荐）以及安全性（权限控制）。目标用户是希望在多种环境下无缝使用 Gemini 能力的开发者。技术路线侧重于跨平台适配和 Agent 智能化。
*   **GitHub Copilot CLI:** **企业级集成与市场驱动。** 定位为 GitHub 生态的 CLI 工具，强调与企业级模型访问策略、MCP 服务器连接、以及 VS Code 深度集成。目标用户是依赖 GitHub 和 Copilot 的企业开发者和团队。技术路线侧重于企业集成和市场扩展。
*   **Kimi Code CLI:** **IDE 深度集成与 Hook 扩展。** 定位为 Kimi 模型的开发助手，核心优势在于与主流 IDE（如 Zed, Codex）的深度集成、灵活的 Hook 机制（UserPromptSubmit, Stop）以及 CLI 子命令的实用性。目标用户是希望将 Kimi 能力无缝融入现有开发环境的开发者。技术路线侧重于 IDE 插件生态和 Hook API 设计。
*   **OpenCode:** **轻量级、事件驱动与多模态。** 定位为轻量级、可扩展的 AI 开发 CLI，核心特色是基于 Effect 的事件系统、实验性子代理机制以及对多模态（图像读取）和本地 LLM 服务的支持。目标用户是寻求灵活、可定制且能快速集成的开发工具的用户。技术路线侧重于事件驱动架构和模块化设计。
*   **Pi:** **多模型推理与本地部署。** 定位为高度可扩展的多模型 CLI，核心优势在于对多种推理模型（Kimi K2.6, MiMo, Claude 4.6+）的广泛支持、本地 LLM 提供程序扩展潜力以及终端交互优化。目标用户是希望在一个工具中整合多个云和本地模型的开发者。技术路线侧重于多提供商兼容性和终端 UX。
*   **Qwen Code:** **内存优化、诊断与 daemon 模式。** 定位为注重性能和稳定性的 AI 开发 CLI，核心特色在于对 JavaScript 堆内存溢出的深入优化、内置诊断工具（`/doctor memory`, `/stuck`）以及对 daemon mode 架构的探索。目标用户是需要在资源受限或长会话场景下保持稳定运行的开发者。技术路线侧重于内存管理和后端服务架构。

---

### **5. 社区热度与成熟度**

*   **最活跃社区:** **Claude Code** (#34255等Issue高互动)、**OpenCode** (#20695等Memory Megathread)、**Qwen Code** (#3203等政策讨论) 拥有大量高关注度 Issue 和持续活跃的 PR 流，社区参与度高，问题反馈及时。
*   **快速迭代阶段:** **OpenAI Codex** (Rust Alpha 连续发布)、**Gemini CLI** (频繁 Nightly 发布)、**Pi** (LiteLLM/FirePass 快速接入)、**Qwen Code** (daemon mode 设计提案) 显示出极高的迭代速度，功能更新频繁，处于快速演进期。
*   **相对稳定期:** **GitHub Copilot CLI** (v1.0.49 发布后 Issue 相对集中)、**Kimi Code CLI** (无新Release但有持续PR) 可能处于功能收敛或等待下一个重大更新阶段。

---

### **6. 值得关注的趋势信号**

*   **从对话到自动化 Agent 的迁移:** 几乎所有工具都在强化 Agent 功能（工作流管理、会话控制、后台任务），表明行业正从简单的代码补全/问答转向能够自主执行复杂任务的 AI 代理。
*   **MCP 成为通用集成标准:** 多个工具（Claude Code, GitHub Copilot CLI, OpenCode）都将 MCP 作为核心集成方式，预示着未来 AI 工具的插件生态将围绕 MCP 展开，降低集成门槛。
*   **内存与性能成为生死线:** Qwen Code 的 OOM 问题、OpenCode 的 Memory Megathread、Pi 的长会话优化，无一不凸显出内存管理和性能优化是决定 AI CLI 工具能否在生产环境中稳定运行的关键因素。
*   **安全与可控性需求激增:** 权限控制（deny规则失效）、OAuth 中断、自动更新完整性校验、危险操作拦截等 Issue 频发，反映出用户对数据安全、隐私保护和系统可控性的要求日益提高。
*   **本地与混合部署模式兴起:** Pi 的本地 LLM 扩展呼声、OpenCode 的局域网服务发现、Qwen Code 的 daemon mode 提案，都指向开发者希望在减少云 API 依赖、保障数据隐私的同时，利用本地或私有模型的能力，形成混合部署模式。

**对开发者的参考价值:**
*   **优先投资于内存管理和性能优化**，特别是在长会话和大规模文件操作场景中。
*   **密切关注并尽早集成 MCP**，以适应未来的插件生态趋势。
*   **强化安全策略和用户权限控制**，建立完善的错误处理和恢复机制。
*   **考虑支持本地或混合部署选项**，以满足企业对数据主权和成本控制的诉求。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为 Claude Code Skills 生态的技术分析师，以下是截至 2026-05-16 的社区热点报告：

---

## **Claude Code Skills 社区热点报告 (截止 2026-05-16)**

### **1. 热门 Skills 排行**

*   **SAP-RPT-1-OSS Predictor Skill (#181)**
    *   **功能:** 集成 SAP 开源预测模型，用于 SAP 业务数据的预测分析。
    *   **讨论热点:** 企业级数据分析与预测能力的扩展，展示对特定行业工具的深度集成。
    *   **状态:** [OPEN](https://github.com/anthropics/skills/pull/181)
*   **ServiceNow Platform Skill (#568)**
    *   **功能:** 全面的 ServiceNow 平台助手，涵盖 ITSM、ITOM、SecOps、ITAM/SAM、FSM、SPM、CSDM、IntegrationHub 等。
    *   **讨论热点:** 企业 IT 运维自动化，提供从脚本到架构的全面支持。
    *   **状态:** [OPEN](https://github.com/anthropics/skills/pull/568)
*   **AURELION Skill Suite (#444)**
    *   **功能:** 包含 AURELION kernel、advisor、agent、memory 的四技能套件，提供结构化认知框架和记忆系统。
    *   **讨论热点:** AI 代理的长期记忆和结构化思考能力，提升专业协作效率。
    *   **状态:** [OPEN](https://github.com/anthropics/skills/pull/444)
*   **AppDeploy Skill (#360)**
    *   **功能:** 直接部署全栈 Web 应用到公共 URL，管理应用生命周期。
    *   **讨论热点:** AI 驱动的代码部署与发布流程自动化。
    *   **状态:** [OPEN](https://github.com/anthropics/skills/pull/360)
*   **Shodh-Memory Skill (#154)**
    *   **功能:** 为 AI 代理提供持久化上下文记忆系统。
    *   **讨论热点:** 多轮对话中的记忆管理，增强 AI 的理解连贯性。
    *   **状态:** [OPEN](https://github.com/anthropics/skills/pull/154)
*   **Testing-Patterns Skill (#723)**
    *   **功能:** 覆盖完整测试栈的综合性测试模式技能，包括单元测试、React 组件测试等。
    *   **讨论热点:** 提升代码质量和开发效率的自动化测试指导。
    *   **状态:** [OPEN](https://github.com/anthropics/skills/pull/723)

### **2. 社区需求趋势**

*   **企业级自动化与集成:** ServiceNow 和 SAP 技能的提出，反映了社区对将 Claude 集成到复杂企业系统和流程中的强烈需求。
*   **AI Agent 能力提升:** AURELION 和 Shodh-Memory 技能的关注表明，用户希望 Claude 能具备更强的长期记忆和结构化思考能力，以处理更复杂的任务。
*   **文档质量与排版控制:** `document-typography` 技能的提出，说明用户对 AI 生成文档的视觉呈现和专业性有更高要求。
*   **代码质量与审计:** `codebase-inventory-audit` 技能的提出，显示了对代码库健康度、冗余代码和文档缺失的关注。
*   **部署自动化:** AppDeploy 技能的提出，体现了对从代码编写到部署发布全流程自动化的期望。

### **3. 高潜力待合并 Skills**

*   **SAP-RPT-1-OSS Predictor Skill (#181):** 作为企业级分析的重要补充，其落地将极大增强 Claude 在商业智能领域的价值。
*   **ServiceNow Platform Skill (#568):** 企业级 IT 自动化是 Claude 在组织内部推广的关键，该技能的成熟度将直接影响其应用场景。
*   **AURELION Skill Suite (#444):** 代表了 Claude 向更高级别 AI 代理演进的探索，其成功实施将开启新的交互范式。
*   **AppDeploy Skill (#360):** 实现从代码到生产环境的无缝衔接，是开发者工作流程的理想环节。
*   **Shodh-Memory Skill (#154) & Testing-Patterns Skill (#723):** 分别提升了 Claude 的记忆能力和代码健壮性，是增强用户体验和生产力不可或缺的部分。

### **4. Skills 生态洞察**

当前社区最集中的诉求是 **通过 Skills 将 Claude 的能力无缝嵌入到复杂的企业工作流、提升代码质量与效率、以及扩展其在专业领域（如数据分析、IT运维）的深度集成**，从而成为更强大、更可靠的生产力伙伴。

---

**Claude Code 社区动态日报 - 2026年5月16日**

---

### **今日速览**
Anthropic 发布了 Claude Code v2.1.143，重点增强了插件依赖管理能力。社区集中反馈了远程连接重连失败、TUI字符渲染异常等关键稳定性问题，多个高关注度 Bug 持续活跃更新。

---

### **版本发布**
**v2.1.143**  
- 新增插件依赖强制检查机制：`claude plugin disable` 在目标插件被其他启用插件依赖时拒绝操作，并提供可复制的禁用链提示；`enable` 命令支持强制启用传递性依赖。
- 新增每轮和累计的“投影上下文成本”展示（具体细节待完整发布说明补充）。  
🔗 [Release #v2.1.143](https://github.com/anthropics/claude-code/releases/tag/v2.1.143)

---

### **社区热点 Issues（Top 10）**

1. **[#34255] Remote Control 自动重连失效**（👍75, 💬37）  
   macOS/iOS 用户在远程会话中遭遇静默断连且无恢复机制，严重影响协作体验。  
   🔗 https://github.com/anthropics/claude-code/issues/34255

2. **[#15631] 禁止跨会话命令历史上箭头调用**（👍17, 💬15）  
   用户希望仅保留当前会话的历史记录，避免误触过往全局指令。  
   🔗 https://github.com/anthropics/claude-code/issues/15631

3. **[#36800] MCP 通道插件重复实例导致 409 Conflict**（👍6, 💬14）  
   会话中途自动生成重复 Telegram 插件进程，触发冲突并丢失工具注册，属高危稳定性缺陷。  
   🔗 https://github.com/anthropics/claude-code/issues/36800

4. **[#47104] Windows 11 Pro 更新后 Cowork/OAuth 全功能崩溃**（👍3, 💬12）  
   最新自动更新引发 ERR_CONNECTION_RESET 与 OAuthError，影响认证与协同工作流。  
   🔗 https://github.com/anthropics/claude-code/issues/47104

5. **[#14836] /skills 命令无法识别符号链接目录中的技能**（👍34, 💬8）  
   对开发者在复杂项目结构中使用符号链接管理自定义技能造成阻碍。  
   🔗 https://github.com/anthropics/claude-code/issues/14836

6. **[#59163] VS Code 集成终端长会话后 TUI 字符乱码**（👍1, 💬5）  
   macOS 下长时间使用导致 ANSI 渲染异常，虽不影响功能但破坏交互体验。  
   🔗 https://github.com/anthropics/claude-code/issues/59163

7. **[#53454] 模型持续错误使用“load-bearing”一词**（👍8, 💬5）  
   反映模型行为一致性难题，可能涉及系统提示或微调偏差。  
   🔗 https://github.com/anthropics/claude-code/issues/53454

8. **[#29058] Docker-based MCP 容器未随会话结束停止**（👍4, 💬7）  
   资源泄漏风险，尤其在多会话场景下易耗尽系统资源。  
   🔗 https://github.com/anthropics/claude-code/issues/29058

9. **[#51211] permissions.deny 规则未能阻止文件读取**（👍0, 💬3）  
   安全策略执行漏洞，威胁本地文件访问控制有效性。  
   🔗 https://github.com/anthropics/claude-code/issues/51211

10. **[#59245] 请求通过 MCP 暴露 AskUserQuestion 接口**（👍0, 💬2）  
    允许外部插件代理交互式提问，提升跨平台可用性。  
    🔗 https://github.com/anthropics/claude-code/issues/59245

---

### **重要 PR 进展（Top 10）**

1. **[#59508] Fix bash_command_validator regex false negatives**  
   修复 `bash_command_validator_example.py` 中正则表达式逻辑错误，防止合法管道命令（如 `grep foo | wc -l`）被错误拦截。  
   🔗 https://github.com/anthropics/claude-code/pull/59508

2. **[#59275] Add new-session plugin with /new command**  
   引入 `/new` 命令启动全新会话，介于 `/clear`（不清历史）与 `/branch`（分叉历史）之间，优化工作流连续性。  
   🔗 https://github.com/anthropics/claude-code/pull/59275

3. **[#59495] docs: fix GitHub capitalization in README**  
   统一品牌术语，将 "Github" 更正为 "GitHub"。  
   🔗 https://github.com/anthropics/claude-code/pull/59495

*(其余 PR 数量不足 10 条，以上为全部 3 条中的重点项)*

---

### **功能需求趋势**

- **插件生态扩展**：增强插件依赖管理、MCP 接口开放（如 `#59245`）成为高频诉求。
- **终端用户体验优化**：TUI 渲染稳定性（字符乱码、焦点劫持）、命令历史隔离等持续受关注。
- **跨平台一致性**：Windows/macOS/Linux 及 VS Code 集成终端的行为差异亟待收敛。
- **安全与权限控制**：deny 规则失效、OAuth 中断等问题凸显权限体系需强化。
- **Agent 工作流管理**：背景任务归档、会话生命周期控制（如 `/new` 提案）反映复杂任务处理需求上升。

---

### **开发者关注点**

- **稳定性痛点**：远程连接断连、MCP 重复实例、Docker 容器残留构成三大运维风险。
- **调试成本高**：部分 Bug（如 409 Conflict）缺乏明确日志指引，增加排查难度。
- **API 行为不可控**：模型输出一致性（如固定用词）、goal evaluator 无限循环影响自动化流程可靠性。
- **跨平台碎片化**：同一功能在不同 OS 或终端模拟器表现不一，需标准化测试覆盖。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026-05-16）**

---

### 1. 今日速览  
今日 Codex 发布多个 Rust 版本更新（v0.131.0-alpha.19–22），聚焦 Windows 沙箱权限模型重构与 CLI 远程控制体验优化。社区持续关注 Linux 桌面 App 支持、远程连接稳定性及模型行为一致性等核心问题，多个高票 Issue 获得积极反馈。

---

### 2. 版本发布  

- **Rust v0.131.0-alpha.19 / alpha.21 / alpha.22**  
  连续发布三个 Alpha 版本，主要推进 Windows 沙盒安全架构升级（#22896, #22918, #22923），并增强 CLI 速率限制标签逻辑（#22929）。虽无详细变更说明，但 PR 内容指向底层权限系统与跨平台兼容性改进。  
  🔗 [openai/codex/releases](https://github.com/openai/codex/releases)

---

### 3. 社区热点 Issues  

| # | 标题 | 热度 | 关键内容 |
|---|------|------|--------|
| **#11023** | [enhancement, app] Codex desktop app for Linux | 👍204 | 用户强烈呼吁推出 Linux 版桌面应用，解决 macOS 高功耗问题，目前无官方计划但呼声最高。 |
| **#9224** | [enhancement, app, User Request, Feature] Codex Remote Control | 👍401 | 支持通过 ChatGPT App 移动端远程控制桌面 Codex CLI，提升移动开发效率，已被标记为“已关闭”但后续仍有进展。 |
| **#11626** | [enhancement, TUI] CLI: Add /rewind checkpoint restore that reverts both chat context and Codex-applied code edits | 👍130 | 提出 `/rewind` 命令应同时回滚对话状态与代码修改，避免手动恢复麻烦，属高频实用需求。 |
| **#22696** | [bug, app, remote] Failed to authorize remote control after update | 👍45 | 新版更新后远程授权失效，影响 Pro 用户跨设备协作，需紧急修复认证流程。 |
| **#22700** | [bug, iOS, remote] Revoked remote access remains stuck in mobile app | 👍4 | iOS 端无法清除已撤销的连接记录，导致重连失败，暴露移动端状态同步缺陷。 |
| **#22694** | [bug, computer-use] Computer Use has an undocumented hard requirement on macOS 26.0 | 👍7 | 用户发现 Computer Use 依赖特定 Swift 符号，仅在新版 macOS 编译通过，存在平台兼容风险。 |
| **#21218** | [bug, extension, connectivity] VS Code Codex extension DNS failures | 👍5 | VS Code 插件频繁报 DNS 解析错误，影响企业环境内网用户，疑似网络策略拦截所致。 |
| **#20741** | [bug, app, session] Project chat histories disappeared after update | 👍5 | 近期更新导致项目聊天记录丢失，数据持久性问题引发用户担忧。 |
| **#18018** | [bug, rate-limits] Codex keeps running after weekly limit is reached | 👍2 | 达到周配额后仍消耗额度，计费系统异常，可能涉及 API 调用计数逻辑错误。 |
| **#22752** | [bug, app, plugins] Plugins no longer load correctly after update | 👍4 | 新 Composer 版本中 `@` 插件菜单卡死，疑似共享目录接口返回 404 导致加载失败。 |

---

### 4. 重要 PR 进展  

| # | 标题 | 贡献者 | 功能/修复重点 |
|---|------|--------|--------------|
| **#22878** | Improve `codex remote-control` CLI UX | owenlin0 | 默认以交互模式运行，提供清晰状态提示与 Ctrl+C 退出支持，提升命令行用户体验。 |
| **#22782** | Add SubagentStart hook | abhinav-oai | 新增子代理启动钩子，允许在子线程创建时注入自定义初始化逻辑，扩展自动化能力。 |
| **#22923** | windows-sandbox: drive write roots from resolved permissions | bolinfest | 将 Windows 沙箱写入路径决策基于解析后的权限配置，推动旧有 SandboxPolicy 向 PermissionProfile 迁移。 |
| **#22920** | core: set permission profiles from snapshots | bolinfest | 支持从快照加载权限配置文件，实现权限策略的持久化与快速恢复。 |
| **#22931** | core: refresh active permission profiles at runtime | viyatb-oai | 运行时刷新激活权限配置，确保权限切换即时生效，避免 stale state。 |
| **#22928** | core: expose permission profile picker metadata | viyatb-oai | 暴露权限选择器元数据，使 TUI 能区分命名权限组与匿名预设，提升配置透明度。 |
| **#22510** | Sync TUI next-turn state | etraut-openai | 多客户端 TUI 间同步下一轮参数（如模型、权限），消除界面不一致问题。 |
| **#22679** | Support audio input | fjord-oai | 引入音频输入模态，支持语音作为工具输出格式，为未来多模态交互铺路。 |
| **#22873** | Add SubagentStop hook | abhinav-oai | 补充子代理停止钩子，完善生命周期管理，便于资源清理与日志追踪。 |
| **#22769** | exec-server: support auth-backed remote executor registration | miz-openai | 改用标准 Auth Provider 注册远程执行服务，替代原有凭证机制，提升安全性与一致性。 |

---

### 5. 功能需求趋势  

从 Issue 分析可见当前三大需求方向：  
- **跨平台桌面支持**：Linux 桌面 App 缺失（#11023）仍是最大呼声；  
- **远程协作增强**：移动端控制桌面 CLI（#9224）、SSH 主机连接优化（#22857）成热点；  
- **权限与沙箱精细化管控**：Windows/macOS 沙箱策略统一（#22896）、运行时权限刷新（#22931）反映用户对安全可控性的高度关注。

此外，**技能临时模型覆盖**（#22908）、**音频输入支持**（#22679）等创新功能也逐步进入开发视野。

---

### 6. 开发者关注点  

- **认证与连接可靠性**：远程授权失效（#22696）、iOS 连接残留（#22700）暴露身份验证与状态同步漏洞；  
- **平台兼容性风险**：Computer Use 对 macOS 26.0 强依赖（#22694）、Windows 沙箱迁移中的路径处理问题（#22923）；  
- **配置漂移与数据丢失**：聊天记录消失（#20741）、权限设置未实时同步（#22931）影响生产环境使用信心；  
- **扩展性不足**：VS Code 插件 DNS 故障（#21218）、Hook 信任机制缺失（#21615）限制第三方集成。

> 📌 建议优先排查远程授权流程与跨平台沙箱兼容性，同时加强配置变更的原子性与持久化保障。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报（2026-05-16）**

---

### 1. 今日速览  
Gemini CLI 发布 v0.44.0-nightly.20260515，新增 RAG 调试日志支持；同时多个高优先级 Issue 更新进展，涵盖 Agent 稳定性、内存系统安全和跨平台兼容性等关键问题。核心团队正推动权限控制、WSL 路径处理及 MCP 采样功能落地。

---

### 2. 版本发布  
**v0.44.0-nightly.20260515.g928a311fb**  
- 新增 RAG 片段写入本地日志文件，便于调试（[#27016](https://github.com/google-gemini/gemini-cli/pull/27016)）  
- 修复企业网关认证冲突并支持原生 API Key 配置（[#27016](https://github.com/google-gemini/gemini-cli/pull/27016)）

---

### 3. 社区热点 Issues  

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | 通用代理频繁挂起 | **P1**：影响基础操作流畅性，7 条评论 + 7 个赞，用户强烈关注 | 高频重现，需紧急修复 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | 浏览器代理忽略 settings.json 配置 | **P2**：破坏可配置性，3 评论，暴露设置覆盖漏洞 | 企业级用户受影响 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | shell 命令执行后卡在“等待输入” | **P1**：UI 假死，3 评论 + 3 个赞，体验严重受损 | 多平台报告，亟需解决 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件操作影响评估 | **P2**：探索代码理解优化路径，7 评论 + 1 个赞 | 长期技术方向讨论 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | 代理应避免危险操作（如 git reset --force） | **P2**：安全增强需求，2 评论 + 1 个赞 | 生产环境风险警示 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | 自动记忆系统存在敏感信息泄露风险 | **P2**：安全问题，2 评论 | 需前置防护措施 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级行为评估体系构建 | **P1**：质量保障关键进展，6 评论 | 支撑大规模测试框架 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下浏览器代理失败 | **P1**：Linux 桌面端兼容性问题，4 评论 + 1 个赞 | 特定环境阻塞 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | 子代理在无授权时意外运行 | **P2**：权限控制缺陷，2 评论 | 配置误解引发误用 |
| [#21421](https://github.com/google-gemini/gemini-cli/issues/21421) | 代理应主动推荐技能创建/更新 | **P2/P3**：智能化提升方向，2 评论 + 1 个赞 | 减少人工干预 |

---

### 4. 重要 PR 进展  

| # | 类型 | 内容 | 关联 Issue |
|---|------|------|-----------|
| [#27131](https://github.com/google-gemini/gemini-cli/pull/27131) | 修复 | 个人 OAuth 用户路由至稳定模型 | 解决别名解析异常 |
| [#27128](https://github.com/google-gemini/gemini-cli/pull/27128) | 修复 | 无效模型 ID 回退默认模型 | 预防 400 错误 |
| [#27123](https://github.com/google-gemini/gemini-cli/pull/27123) | 修复 | keychain 删除操作幂等化 | 修复 #21768 |
| [#27025](https://github.com/google-gemini/gemini-cli/pull/27025) | 修复 | WSL 下 Windows 路径转换 | 提升跨平台兼容性 |
| [#27130](https://github.com/google-gemini/gemini-cli/pull/27130) | 特性 | 添加 MCP 采样请求处理器 | 实现 #10704 第一阶段 |
| [#27026](https://github.com/google-gemini/gemini-cli/pull/27026) | 特性 | 全权限审批控制开关 | 强化安全策略 |
| [#27127](https://github.com/google-gemini/gemini-cli/pull/27127) | 修复 | 防止沙箱 stdin 重复读取 | 解决消息错乱 |
| [#26565](https://github.com/google-gemini/gemini-cli/pull/26565) | 修复 | 修正 Windows PTY 二进制流误判 | 恢复命令行输出 |
| [#25900](https://github.com/google-gemini/gemini-cli/pull/25900) | 修复 | 优先使用 pwsh.exe 而非 PowerShell 5.1 | 修复引号转义问题 |
| [#27121](https://github.com/google-gemini/gemini-cli/pull/27121) | 特性 | 新增 agent-tui & tui-tester 技能 | 增强自测试能力 |

---

### 5. 功能需求趋势  

- **Agent 智能与效率**：AST 感知工具、自动技能推荐、减少冗余调用（#22745, #21421）
- **安全与权限控制**：审批模式交互优化、危险操作拦截、OAuth 安全路由（#22672, #27026）
- **跨平台体验一致性**：WSL 路径处理、Wayland 支持、Windows shell 兼容性（#27025, #21983）
- **开发者工作流集成**：MCP 协议扩展、CI/CD 内建技能（issue-fixer）、终端 UI 自动化测试（#27130, #26951）
- **内存与知识管理**：Auto Memory 可靠性提升、无效补丁隔离、信号过滤机制（#26522, #26523）

---

### 6. 开发者关注点  

- **稳定性痛点**：通用代理挂起（#21409）、shell 命令卡死（#25166）严重影响开发效率
- **配置失效问题**：settings.json 被忽略（#22267）、子代理意外激活（#22093）导致行为不可控
- **安全顾虑上升**：Auto Memory 潜在数据泄露（#26525）、强制操作缺乏防护（#22672）引发生产环境担忧
- **跨平台摩擦**：Windows/Linux/macOS 差异显著，尤其 WSL 和 Wayland 支持不足
- **调试能力待加强**：RAG 日志虽已开放，但更细粒度的错误追踪与性能分析仍缺失

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

好的，作为 AI 开发工具的技术分析师，我将根据您提供的 GitHub Copilot CLI 数据生成一份结构清晰的社区动态日报。

---

### **GitHub Copilot CLI 社区动态日报 (2026-05-16)**

#### **今日速览**

GitHub Copilot CLI 团队在昨日发布了 v1.0.49 版本，引入了 `/mcp search` 和实验性工具搜索等新功能。与此同时，社区围绕 MCP 服务器连接、模型访问权限以及终端渲染等核心功能持续反馈问题，其中“会话分支”（Session forking）的需求获得了大量关注。

#### **版本发布**

*   **v1.0.49-1 & v1.0.49-0**
    *   **改进:** Prompt mode (-p) 现在会在当前文件夹已被信任时自动加载工作区 MCP 源。
    *   **新增:** 实验性功能 `/mcp search` 命令，用于从注册表搜索并安装 MCP 服务器。
    *   **新增:** 实验性功能，支持 MCP 和外部工具的延迟加载搜索。
    *   **新增:** 在推理努力程度选择器中添加 "None" 选项，以禁用模型推理。
    *   **新增:** `COPILOT_PLUGIN_DIR_ONLY` 环境变量。

#### **社区热点 Issues**

1.  **#2282 [CLOSED] [area:mcp] Not Able to connect to MCP servers**
    *   **重要性:** 此问题是关于 MCP 服务器连接失败的普遍 bug，影响了使用 MCP 功能的用户。
    *   **社区反应:** 9 条评论，1 个点赞。作者 abhaychaubey17 报告了在 Windows 系统上通过 WinGet 安装后无法连接到 'github-mcp-server' 的问题。
    *   [链接](https://github.com/github/copilot-cli/issues/2282)

2.  **#3101 [CLOSED] [area:enterprise, area:models] ✗ Failed to load models: access denied by Copilot policy.**
    *   **重要性:** 企业用户面临的核心模型访问权限问题，直接影响生产力。
    *   **社区反应:** 6 条评论，3 个点赞。kkleeberger 报告了与 Issue #2691 类似的问题，在版本 1.0.40 中仍然出现。
    *   [链接](https://github.com/github/copilot-cli/issues/3101)

3.  **#3318 [OPEN] [area:models] Copilot suddenly refusing to assist with valid requests**
    *   **重要性:** 表明模型或策略判断逻辑可能存在异常，影响用户体验。
    *   **社区反应:** 2 条评论，2 个点赞。alastairlundy 报告了 Copilot 突然拒绝有效请求的情况。
    *   [链接](https://github.com/github/copilot-cli/issues/3318)

4.  **#3257 [OPEN] [area:networking, area:mcp] HTTP MCP servers fail with `TypeError: fetch failed` after idle period — CLI reuses dead pooled TCP connection**
    *   **重要性:** 揭示了网络连接池管理的一个潜在缺陷，可能导致 MCP 服务不稳定。
    *   **社区反应:** 2 条评论，0 个点赞。pjperez 报告了长时间空闲后 HTTP MCP 服务器因重用的死 TCP 连接而失败的问题。
    *   [链接](https://github.com/github/copilot-cli/issues/3257)

5.  **#1697 [OPEN] [area:sessions, area:context-memory] Session forking — branch a conversation into parallel sessions with shared context**
    *   **重要性:** 一个备受期待的功能，允许用户在复杂任务中进行分支讨论，提高工作效率。
    *   **社区反应:** 2 条评论，22 个点赞。Bujo0 提出了一个功能需求，希望在多步骤任务中能够分支会话以并行处理独立问题。
    *   [链接](https://github.com/github/copilot-cli/issues/1697)

6.  **#3340 [OPEN] [area:input-keyboard, area:terminal-rendering] Input Box too Tall in latest update**
    *   **重要性:** UI/UX 调整引发的用户不满，影响使用体验。
    *   **社区反应:** 1 条评论，0 个点赞。searleser97 抱怨输入框变高，占用了更多屏幕空间。
    *   [链接](https://github.com/github/copilot-cli/issues/3340)

7.  **#3331 [OPEN] [area:plugins] Feature request: auto-update plugins on CLI startup via marketplace flag**
    *   **重要性:** 提升插件管理的便捷性和及时性，对依赖插件的用户很重要。
    *   **社区反应:** 1 条评论，2 个点赞。joshgomes-42 建议添加通过市场标志在 CLI 启动时自动更新插件的功能。
    *   [链接](https://github.com/github/copilot-cli/issues/3331)

8.  **#3330 [OPEN] [area:networking] macOS: explicit `tls.getCACertificates("system")` call adds 5+ seconds to every CLI invocation**
    *   **重要性:** 性能问题，显著增加了 CLI 的调用延迟。
    *   **社区反应:** 1 条评论，0 个点赞。Joi 报告了 macOS 上每次 CLI 调用都会增加 5 秒以上的延迟。
    *   [链接](https://github.com/github/copilot-cli/issues/3330)

9.  **#3327 [OPEN] [area:terminal-rendering] Distinguish "agent working" vs "awaiting user input" vs "turn complete" in the title-bar indicator**
    *   **重要性:** UI 状态指示不清晰，影响用户对代理当前状态的判断。
    *   **社区反应:** 1 条评论，0 个点赞。TimothyMothra 希望区分代理工作、等待输入和回合完成的状态指示。
    *   [链接](https://github.com/github/copilot-cli/issues/3327)

10. **#3344 [OPEN] [area:agents, area:input-keyboard] Messages submitted while background subagents are running get stranded...**
    *   **重要性:** 影响代理工作流的消息处理机制，可能导致消息丢失或处理延迟。
    *   **社区反应:** 0 条评论，0 个点赞。sammallon 报告了后台子代理运行时提交的消息会被卡住的问题。
    *   [链接](https://github.com/github/copilot-cli/issues/3344)

#### **重要 PR 进展**

*   **无** (过去24小时内没有更新的 Pull Requests)

#### **功能需求趋势**

1.  **MCP 生态集成:** 社区对 MCP (Model Context Protocol) 的支持和稳定性高度关注，包括 MCP 服务器的搜索、安装和连接问题。
2.  **模型与推理控制:** 用户对模型选择、推理努力程度的控制有强烈需求，同时也有关于模型访问权限和企业策略的痛点。
3.  **会话管理与上下文:** “会话分支” (Session forking) 等高级会话管理功能是热门需求，旨在提升复杂任务的处理效率。
4.  **插件与市场:** 插件的自动更新、机器级自定义 slash 命令等功能受到关注，以提高工作流程的一致性和便捷性。
5.  **UI/UX 优化:** 终端渲染、输入框大小、状态指示器等用户界面细节的调整是持续关注的重点。

#### **开发者关注点**

1.  **MCP 稳定性:** 开发者普遍关心 MCP 服务器的连接稳定性，以及如何在不同环境下正确配置和使用 MCP。
2.  **模型可用性:** 模型的访问权限、特定模型（如 Claude Opus 4.7）的可用性和配置问题是主要痛点之一。
3.  **性能瓶颈:** macOS 上的 TLS CA 证书加载导致的高延迟、网络连接池管理等问题被频繁提及。
4.  **终端交互体验:** 复制长行文本、图像粘贴、键盘快捷键等在终端中的行为需要进一步优化。
5.  **代理工作流:** 主代理与子代理之间的通信、消息队列管理以及工作流中断的处理是开发者关注的重点。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报 - 2026年5月16日**

---

### 今日速览

Kimi Code CLI 过去24小时未发布新版本，但社区活跃度较高。核心焦点集中在 **K2.6 模型过载问题**、**Shell 交互体验优化** 以及 **安全更新与 Hook 机制增强**。多个开发者提交了关于快捷键改进、会话历史显示及权限控制的需求，反映出对生产环境可用性和开发者体验的高度关注。

---

### 版本发布

无新 Release 发布（过去24小时内）。

---

### 社区热点 Issues

1. **[Critical] K2.6 模型持续过载，无法正常使用**  
   [Issue #2077](https://github.com/MoonshotAI/kimi-cli/issues/2077)  
   *作者：Shtef-Inta | 评论数：13*  
   用户报告在使用 Kimi-k2.6 模型时频繁遭遇服务过载错误，即使在 Allegretto 会员套餐下也无法稳定运行。此问题已影响正常编码流程，成为当前最紧急的稳定性问题。

2. **希望增加 `/goal` 命令并支持 Coding Plan 导入 Codex**  
   [Issue #2252](https://github.com/MoonshotAI/kimi-cli/issues/2252)  
   *作者：JialinLiu-codedance | 评论数：9*  
   提出对标 Claude Code 的 `/goal` 功能，允许将 Kimi 生成的开发计划导出至主流 IDE 如 Codex 中执行，显著提升跨平台协作效率。该需求获得积极回应，被视为关键 UX 升级方向。

3. **Web 界面频繁刷新，影响使用体验**  
   [Issue #1623](https://github.com/MoonshotAI/kimi-cli/issues/1623)  
   *作者：Meng-Lan | 评论数：6*  
   Windows 用户反馈 Kimi Web 模式存在间歇性页面自动刷新问题，导致对话中断、状态丢失。此 Bug 自 3 月起持续存在，近期仍未解决，引发用户对前端稳定性的担忧。

4. **Shell 工具缺乏交互式输入支持**  
   [Issue #1117](https://github.com/MoonshotAI/kimi-cli/issues/1117)  
   *作者：wjfjfm | 评论数：2*  
   指出当前 Shell 工具仅通过 PIPE 提供 stdin 但不写入数据，导致 `npm init`、`read` 等需用户输入的命令阻塞超时。该问题是阻碍自动化脚本集成的重大痛点。

5. **UserPromptSubmit Hook 无法捕获实际输入文本**  
   [Issue #2303](https://github.com/MoonshotAI/kimi-cli/issues/2303)  
   *作者：AkaCoder404 | 评论数：0*  
   发现当输入来自 Shell UI 时，Hook 收到的 prompt 字段为空字符串，导致外部工具无法正确处理用户指令。此 Bug 直接影响插件生态扩展能力。

6. **会话历史在 ACP/Web 模式下不显示内容**  
   [Issue #2306](https://github.com/MoonshotAI/kimi-cli/issues/2306)  
   *作者：BrianBoyCN | 评论数：0*  
   指出 `kimi acp`（Zed 集成）和 `kimi web` 切换会话后历史记录空白，疑似协议回放或状态同步异常。影响调试与工作流追溯。

7. **自动更新器无完整性校验，存在安全风险**  
   [Issue #2273](https://github.com/MoonshotAI/kimi-cli/issues/2273)  
   *作者：ktwu01 | 评论数：1*  
   揭露 auto-updater 下载 tarball 后直接使用 `tarfile.extractall()` 解压，未验证 SHA256 或签名，易受中间人攻击。属于高危安全问题，亟需修复。

8. **请求添加“一键导出并发送支持”命令**  
   [Issue #2293](https://github.com/MoonshotAI/kimi-cli/issues/2293)  
   *作者：ktwu01 | 评论数：0*  
   建议在报错（如 429 限流）时提供单步命令直接导出日志并跳转提交支持工单，替代当前手动两步操作，提升故障排查效率。

9. **建议移除持续刷新的上下文使用率指示器**  
   [Issue #2291](https://github.com/MoonshotAI/kimi-cli/issues/2291)  
   *作者：ktwu01 | 评论数：0*  
   认为底部工具栏中实时更新的 context usage 百分比（如 `context: 11.9%`）视觉干扰严重，应仅在接近阈值时显示。

10. **希望引入类似 Claude Code 的 "rewind" 回退功能**  
    [Issue #2290](https://github.com/MoonshotAI/kimi-cli/issues/2290)  
    *作者：ktwu01 | 评论数：0*  
    提议添加会话回滚机制，允许用户撤销某次操作或回溯到早期状态，增强容错性与实验安全性。

---

### 重要 PR 进展

1. **修复 UserPromptSubmit Hook 空输入问题**  
   [PR #2305](https://github.com/MoonshotAI/kimi-cli/pull/2305)  
   修正 Hook payload 中 input text 被错误置为空的问题，确保第三方监听器能正确接收原始用户输入。

2. **Stop Hook 增加 LLM 响应与停止原因字段**  
   [PR #2308](https://github.com/MoonshotAI/kimi-cli/pull/2308)  
   扩展 Stop hook 数据结构，新增 `response` 和 `stop_reason` 字段，便于外部工具分析 Agent 行为终止原因。

3. **支持 Shift+Enter 插入换行符**  
   [PR #2302](https://github.com/MoonshotAI/kimi-cli/pull/2302)  
   添加 Shift+Enter 作为与 Ctrl-J、Alt-Enter 并列的新行快捷键，提升多行输入编辑体验，并更新提示文案。

4. **新增非交互式 `kimi usage` 命令**  
   [PR #2301](https://github.com/MoonshotAI/kimi-cli/pull/2301)  
   实现 `kimi usage` CLI 子命令，支持脚本/CI 环境查询配额使用情况，支持 JSON 输出格式。

5. **隐藏低使用率下的上下文指标**  
   [PR #2300](https://github.com/MoonshotAI/kimi-cli/pull/2300)  
   修改 Shell UI 逻辑：当 token 使用率低于 80% 时不显示实时上下文消耗条，减少视觉干扰。

6. **澄清配额估算说明文档**  
   [PR #2299](https://github.com/MoonshotAI/kimi-cli/pull/2299)  
   更新 README 中关于会员额度估算方式的描述，强调其为基于 token 消耗的动态估算，引导用户使用 `/usage` 获取准确信息。

7. **修复安装脚本中 uv 环境变量加载顺序**  
   [PR #2297](https://github.com/MoonshotAI/kimi-cli/pull/2297)  
   调整 `install.sh` 执行顺序，确保在调用上游 uv 安装器后才 source 其 env 脚本，避免 PATH 未更新问题。

8. **为 auto-updater 添加 tar 提取过滤器**  
   [PR #2298](https://github.com/MoonshotAI/kimi-cli/pull/2298)  
   在 `tarfile.extractall()` 中设置 `filter="data"` 参数，缓解潜在路径遍历风险（防御纵深措施）。

9. **完善开发文档前置依赖说明**  
   [PR #2296](https://github.com/MoonshotAI/kimi-cli/pull/2296)  
   在 README 的 Development 章节添加 Prerequisites 小节，列出必要的构建工具（如 uv, make）及其安装指引。

10. **在 Getting Started 中突出安装命令**  
    [PR #2295](https://github.com/MoonshotAI/kimi-cli/pull/2295)  
    将 `curl ... | bash` 安装命令直接嵌入 README 开头，降低新用户上手门槛。

---

### 功能需求趋势

从 Issue 分析可见，社区当前关注重点如下：

- **IDE 深度集成**：如与 Codex、Zed 等编辑器对接，支持计划导入与无缝工作流迁移。
- **Shell 交互体验**：包括快捷键定制（Shift+Enter）、交互式输入支持、UI 元素精简。
- **Hook 机制扩展性**：要求更丰富的元数据（如响应体、停止原因）注入，以支撑插件生态。
- **安全与可维护性**：对自动更新、文件解压等底层操作提出完整性校验与权限控制诉求。
- **会话管理增强**：支持 rewind、历史持久化、跨会话恢复等功能，提升可靠性。

---

### 开发者关注点

主要痛点集中于：
- **稳定性不足**：K2.6 过载问题直接影响生产可用性；
- **交互设计碎片化**：缺乏统一、可预测的快捷键与提示逻辑；
- **安全盲区**：自动更新流程缺乏加密验证，构成供应链攻击入口；
- **文档缺失**：安装、开发环境准备指引不清，阻碍新手贡献；
- **反馈闭环弱**：错误发生时需手动导出日志再联系支持，流程繁琐。

建议团队优先处理 Critical 级 Bug（如 K2.6 过载），同时系统性梳理 Hook API 与 CLI 子命令体系，以提升可扩展性与用户体验一致性。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报 - 2026年5月16日**

---

### 今日速览

OpenCode 发布了 v1.15.0 版本，引入了基于 Effect 的核心事件系统并实验性支持后台子代理任务；同时社区持续关注内存管理与 TUI 稳定性问题。多个 PR 聚焦 CLI 性能优化与终端渲染改进，反映出对用户体验一致性的高度关注。

---

### 版本发布

**v1.15.0（2026-05-16）**
- **核心改进**：新增基于 Effect 的事件系统，提升跨会话和集成的可靠事件传递能力。
- **Bug 修复**：忽略无效自定义工具导出以避免加载失败；允许项目指令查找错误不影响会话启动。
- 📌 [Release #11302](https://github.com/anomalyco/opencode/releases/tag/v1.15.0)

**v1.14.51（2026-05-15）**
- **核心改进**：实验性引入后台子代理机制，支持任务后台运行；为 NVIDIA 端点添加必要 Billing Origin Header。
- **Bug 修复**：修复工作树创建时 POST 体缺失问题；修复部分会话状态异常。
- 📌 [Release #11298](https://github.com/anomalyco/opencode/releases/tag/v1.14.51)

> *注：无新版本发布时省略此节*

---

### 社区热点 Issues（Top 10）

1. **#20695 Memory Megathread**  
   汇集内存问题报告，呼吁用户提供堆快照协助排查。77 条评论，54 个点赞，反映用户普遍担忧内存泄漏风险。  
   🔗 [anomalyco/opencode/issues/20695](https://github.com/anomalyco/opencode/issues/20695)

2. **#11176 官方 VS Code 扩展请求**  
   强烈建议推出官方 VS Code 插件以提升开发体验。81 个点赞，热度极高，显示 IDE 集成需求迫切。  
   🔗 [anomalyco/opencode/issues/11176](https://github.com/anomalyco/opencode/issues/11176)

3. **#26549 `/exit` 等命令缺失自动补全**  
   v1.14.42 后 `/exit`、`/quit` 不再出现在输入提示中。22 个点赞，影响高频操作效率。  
   🔗 [anomalyco/opencode/issues/26549](https://github.com/anomalyco/opencode/issues/26549)

4. **#26198 终端被原始鼠标转义序列淹没**  
   命令行启用鼠标跟踪后未正确关闭，导致终端输出混乱。15 条评论，影响终端交互体验。  
   🔗 [anomalyco/opencode/issues/26198](https://github.com/anomalyco/opencode/issues/26198)

5. **#27589 Alpine Linux (musl) 下 TUI 启动失败**  
   v1.14.50 起因 `getcontext` 符号缺失导致崩溃。回归问题，影响轻量级发行版用户。  
   🔗 [anomalyco/opencode/issues/27589](https://github.com/anomalyco/opencode/issues/27589)

6. **#27096 键位绑定错乱（尤其 Dvorak 布局）**  
   Ctrl+K 等功能失效，推测为扫描码误读。11 条评论，涉及键盘布局适配痛点。  
   🔗 [anomalyco/opencode/issues/27096](https://github.com/anomalyco/opencode/issues/27096)

7. **#15728 Read 工具无法向视觉模型传递图像数据**  
   使用 qwen3.5-plus 等模型时图像分析失败。9 条评论，阻碍多模态功能落地。  
   🔗 [anomalyco/opencode/issues/15728](https://github.com/anomalyco/opencode/issues/15728)

8. **#7659 聊天窗口不应自动滚动**  
   用户难以回顾历史消息。12 个点赞，强调可读性与控制权重要性。  
   🔗 [anomalyco/opencode/issues/7659](https://github.com/anomalyco/opencode/issues/7659)

9. **#15892 macOS 上美元符号触发 LaTeX 渲染**  
   `$203/month` 等文本被错误解析为数学公式。5 条评论，暴露跨平台渲染不一致问题。  
   🔗 [anomalyco/opencode/issues/15892](https://github.com/anomalyco/opencode/issues/15892)

10. **#17188 默认分享设为“禁用”以保护隐私**  
    当前默认开启分享引发担忧。13 个点赞，体现用户对数据隐私日益重视。  
    🔗 [anomalyco/opencode/issues/17188](https://github.com/anomalyco/opencode/issues/17188)

---

### 重要 PR 进展（Top 10）

1. **#27805 [beta] TUI 发现本地服务实例**  
   新增 Effect 驱动的服务发现机制，支持 `--discoverable` 模式共享服务器状态。  
   🔗 [anomalyco/opencode/pull/27805](https://github.com/anomalyco/opencode/pull/27805)

2. **#27802 feat: fff 搜索工具增强**  
   实现文件/内容/目录搜索的交互式选择器，提升操作效率。  
   🔗 [anomalyco/opencode/pull/27802](https://github.com/anomalyco/opencode/pull/27802)

3. **#27804 fix: edit 工具 replaceAll 字面替换**  
   修复替换字符串中被误识别的正则元字符（如 `$&`），避免意外行为。  
   🔗 [anomalyco/opencode/pull/27804](https://github.com/anomalyco/opencode/pull/27804)

4. **#27803 fix(tui): 启动时显示详细配置错误**  
   将验证错误透传到客户端，便于定位 `.opencode/config.json` 问题。  
   🔗 [anomalyco/opencode/pull/27803](https://github.com/anomalyco/opencode/pull/27803)

5. **#27662 feat(vscode): 推送编辑器选中内容到 TUI**  
   通过 WebSocket + lock file 实现 VS Code 与 OpenCode 的实时联动。  
   🔗 [anomalyco/opencode/pull/27662](https://github.com/anomalyco/opencode/pull/27662)

6. **#26944 fix(tui): 防止引用不存在子会话时的崩溃**  
   静默处理缺失 sessionId，提升鲁棒性。  
   🔗 [anomalyco/opencode/pull/26944](https://github.com/anomalyco/opencode/pull/26944)

7. **#27554 feat: 局域网 LLM 服务自动发现**  
   结合 mDNS 与 HTTP 探测，自动识别本地兼容服务器（如 Ollama）。  
   🔗 [anomalyco/opencode/pull/27554](https://github.com/anomalyco/opencode/pull/27554)

8. **#27800 refactor: CLI 懒加载命令加速帮助/补全**  
   分离 parser-only 路径，显著减少 `--help` 响应时间。  
   🔗 [anomalyco/opencode/pull/27800](https://github.com/anomalyco/opencode/pull/27800)

9. **#27797 fix: 优先使用模型级 temperature 而非代理覆盖**  
   修正 Kimi/K2 等模型强制温度值被覆盖的问题。  
   🔗 [anomalyco/opencode/pull/27797](https://github.com/anomalyco/opencode/pull/27797)

10. **#27795 feat(tui): 会话聊天区显示可见白色滚动条**  
    改善终端内长对话的可视化导航体验。  
    🔗 [anomalyco/opencode/pull/27795](https://github.com/anomalyco/opencode/pull/27795)

---

### 功能需求趋势

从 Issue 池可提炼三大方向：

1. **IDE 深度集成**  
   VS Code 插件呼声最高（#11176），配合 PR #27662 推动编辑器与 TUI 双向通信。

2. **TUI 稳定性与可用性**  
   包括滚动控制（#7659）、键位适配（#27096）、主题持久化（#27784）、滚动条可见性（#27795）等高频反馈。

3. **多模态与本地部署支持**  
   图像读取（#15728）、局域网模型发现（PR #27554）、NVIDIA NIM 兼容性（#19947）反映对私有化与视觉能力的重视。

---

### 开发者关注点

- **内存管理仍是痛点**：大量用户报告内存泄漏或高占用（#20695, #22422），需系统性优化事件监听与资源释放。
- **跨平台一致性不足**：Alpine Linux（musl）崩溃（#27589）、macOS 渲染异常（#15892）暴露构建与依赖兼容性问题。
- **配置错误难排查**：启动时报错信息模糊，PR #27803 正为此改进。
- **CLI 体验待提升**：二进制安装问题（PR #27801）、命令响应慢（PR #27800）影响新手上手速度。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报（2026-05-16）**

---

### 1. **今日速览**
今日 Pi 社区聚焦于 **Kimi K2.6 推理内容缺失** 和 **Anthropic/MiMo 模型兼容性问题** 两大技术挑战，共 45 条 Issue 更新，其中 30 条为高互动议题。核心进展包括新增 LiteLLM 与 FirePass 支持、TUI 渲染修复及自动压缩优化，推动多模型生态扩展。

---

### 2. **版本发布**
无新版本发布（过去24小时无 Release）。

---

### 3. **社区热点 Issues（Top 10）**

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| **[#4251](https://github.com/earendil-works/pi/issues/4251)** | Kimi K2.6 使用 OpenCode Go 时 `reasoning_content` 缺失错误 | ⭐⭐⭐⭐☆ | 17 评论，5 赞；影响多轮对话稳定性，被标记为 `inprogress` |
| **[#3357](https://github.com/earendil-works/pi/issues/3357)** | 官方本地 LLM 提供程序扩展（支持 llama.cpp/Ollama/LM Studio） | ⭐⭐⭐⭐⭐ | 13 评论，23 赞；高频需求，推动本地推理普及 |
| **[#4514](https://github.com/earendil-works/pi/issues/4514)** | Kimi K2.6 报错：Extra inputs not permitted for reasoning field | ⭐⭐⭐⭐☆ | 8 评论，7 赞；与 #4251 同属 Kimi 适配问题，需统一处理 |
| **[#4315](https://github.com/earendil-works/pi/issues/4315)** | package-lock.json 自 v0.74.0 起缺失 resolved/integrity 字段 | ⭐⭐☆☆☆ | 4 评论，6 赞；影响 Nix 等离线构建工具用户 |
| **[#4505](https://github.com/earendil-works/pi/issues/4505)** | MiMo 模型在多轮工具调用中 `reasoning_content` 丢失导致 400 错误 | ⭐⭐⭐☆☆ | 3 评论，2 赞；暴露小米 token plan 提供商兼容缺陷 |
| **[#4522](https://github.com/earendil-works/pi/issues/4522)** | Node.js v26 下 Anthropic 流式响应未解压缩 | ⭐⭐⭐☆☆ | 4 评论；影响 Anthropic SDK 在高版本 Node 下的稳定性 |
| **[#4501](https://github.com/earendil-works/pi/issues/4501)** | pnpm 11 启动时重复执行全局安装 | ⭐⭐☆☆☆ | 3 评论，1 赞；用户体验痛点，涉及包管理效率 |
| **[#4556](https://github.com/earendil-works/pi/issues/4556)** | 终端过窄时 TUI 渲染行溢出崩溃 | ⭐⭐☆☆☆ | 4 评论；边缘场景 Bug，已关闭因重构处理 |
| **[#3974](https://github.com/earendil-works/pi/issues/3974)** | Alacritty 中 backspace 键双击触发 | ⭐⭐☆☆☆ | 4 评论；输入法兼容性问题，Linux 用户关注 |
| **[#4532](https://github.com/earendil-works/pi/issues/4532)** | parseFrontmatter 拒绝合法 Claude Code agent 文件（长描述含 `: `） | ⭐⭐☆☆☆ | 3 评论；元数据解析器鲁棒性待提升 |

> **关键趋势**：**Kimi K2.6** 和 **MiMo** 的推理内容传递问题集中出现，反映主流推理模型集成存在共性挑战；**本地 LLM 扩展** 成为最热呼声。

---

### 4. **重要 PR 进展（Top 10）**

| # | 标题 | 功能/修复内容 | 状态 |
|---|------|----------------|------|
| **[#4562](https://github.com/earendil-works/pi/pull/4562)** | 添加 LiteLLM 提供商支持 | 支持 100+ 后端通过 LiteLLM proxy 统一接入 | ✅ CLOSED |
| **[#4558](https://github.com/earendil-works/pi/pull/4558)** | openai-completions: 缺失 finish-reason 时报错 | 增强 API 合规性检查，防止静默失败 | ⏳ OPEN |
| **[#4566](https://github.com/earendil-works/pi/pull/4566)** | 终端重设大小时强制 TUI 重绘 | 修复 resize 后界面错位/撕裂问题 | ✅ CLOSED |
| **[#4555](https://github.com/earendil-works/pi/pull/4555)** | 新增 "adaptive" 思考模式（Claude 4.6+/Sonnet 4.6） | 允许自适应思考预算，无需手动设置上限 | ✅ CLOSED |
| **[#4543](https://github.com/earendil-works/pi/pull/4543)** | 修复 xiaomi 提供商 reasoning_content 丢失 | 正确传递思考内容至 API，解决 400 错误 | ✅ CLOSED |
| **[#4560](https://github.com/earendil-works/pi/pull/4560)** | 添加 Fireworks FirePass 支持 | 新增订阅制模型渠道（skimi k2p6） | ⏳ OPEN |
| **[#4552](https://github.com/earendil-works/pi/pull/4552)** | Copilot: 改进 auto-compact 机制 | 引入 shouldStopAfterTurn 钩子优化上下文管理 | ✅ CLOSED |
| **[#4550](https://github.com/earendil-works/pi/pull/4550)** | 修复多轮运行中 auto-compact 行为异常 | 确保压缩逻辑在长会话中可靠触发 | ✅ CLOSED |
| **[#4537](https://github.com/earendil-works/pi/pull/4537)** | 添加 /exit 命令别名 | 支持 `/exit` 替代 `/quit` 提升 UX 一致性 | ✅ CLOSED |
| **[#4547](https://github.com/earendil-works/pi/pull/4547)** | UI 增强：Tokyo Night 主题 + Unicode 进度条 | 现代化视觉设计，提升可定制性与可读性 | ✅ CLOSED |

> **重点方向**：**提供商扩展**（LiteLLM, FirePass, adaptive thinking）、**上下文管理优化**（auto-compact）、**终端兼容性修复**（resize, keypress）。

---

### 5. **功能需求趋势**

从 Issue 中提取三大核心需求方向：

1. **多模型支持与推理模式统一**  
   - Kimi K2.6 / MiMo / Claude 4.6+ 的 reasoning_content 处理机制亟需标准化
   - 社区强烈呼吁官方本地 LLM 扩展（#3357），降低对云 API 依赖

2. **终端交互体验优化**  
   - Shift+Enter、Backspace 键在不同终端（Konsole/Alacritty/Terminal.app）中的不一致行为频发
   - TUI 渲染在窄屏/重设尺寸时稳定性不足

3. **配置管理与开发者工具链完善**  
   - package-lock.json 完整性缺失影响离线构建（Nix 用户）
   - 自定义 provider 文档不全（如 notify 类型错误示例）

---

### 6. **开发者关注点**

- **痛点集中区**：
  - **推理模型兼容性差**：Kimi/MiMo 等模型对 `reasoning_content` 要求严格，Pi 内部消息结构转换易出错
  - **Node.js 版本升级副作用**：v26 导致 Anthropic SDK 流式响应未解压，属生态链断裂风险
  - **配置热重载不可靠**：settings.json 修改后部分变更不生效（如 model-cycle 快捷键提示未更新）

- **高频请求**：
  - 支持命令行方式获取 API Key（类似 `pass` 集成）
  - 提供 splash screen 禁用选项，避免 tmux 批量部署等待延迟
  - 模型别名机制（SMALL_MODEL → deepseek-v4）简化配置切换

---

**总结**：今日社区围绕 **推理模型集成** 与 **终端稳定性** 持续迭代，PR 层面积极推进多提供商兼容与 UI 体验升级，Issue 反馈凸显对 **配置灵活性与跨平台一致性** 的深层需求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是根据您提供的 GitHub 数据生成的 Qwen Code 社区动态日报。

---

## Qwen Code 社区动态日报 (2026-05-16)

### 1. 今日速览

Qwen Code 发布了 v0.15.12-preview.2 版本，主要修复了 OpenAI 流处理和 CLI 自动恢复问题。社区焦点集中在长会话内存优化、OAuth 免费额度调整以及 daemon mode 的 daemon mode 功能提案上，相关讨论和 PR 活跃。

### 2. 版本发布

**v0.15.12-preview.2**
*   **更新内容:**
    *   `feat(cli)`: 使用 OSC 8 包装 Markdown 链接，确保 URL 在终端中保持可点击状态。
    *   `fix(core)`: 将累积的 OpenAI 流增量标准化为后缀。
    *   `fix(cli)`: 实现自动恢复功能。
*   [链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.12-preview.2)

### 3. 社区热点 Issues

以下 Issue 在过去24小时内获得了最多的社区关注：

1.  **[#3203] OAuth 免费额度政策调整**: 提议将每日免费请求配额从 1,000 降至 100，并计划完全关闭免费入口点。此议题已引发超过 125 条评论，表明社区对此政策变化高度关注。[链接](https://github.com/QwenLM/qwen-code/issues/3203)
2.  **[#3803] Daemon Mode 设计提案**: 提出了一个完整的 daemon 模式设计方案，旨在为 Qwen Code 提供一个更强大的后台服务框架。该提案已收集到 10 条评论和 1 个赞，显示出开发者对底层架构改进的兴趣。[链接](https://github.com/QwenLM/qwen-code/issues/3803)
3.  **[#3926] 改善输入文本编辑和选择能力**: 用户反馈当前输入框不支持 `Ctrl+Backspace` 删除单词以及文本选择功能，限制了高级编辑操作。此议题有 9 条评论，表明用户对提升交互体验的需求。[链接](https://github.com/QwenLM/qwen-code/issues/3926)
4.  **[#3914] API 连接错误**: 报告在使用特定 API 时出现连接失败问题，影响了正常功能。此议题有 5 条评论和 1 个赞，表明这是一个亟待解决的 bug。[链接](https://github.com/QwenLM/qwen-code/issues/3914)
5.  **[#4167 & #4149] CLI 崩溃 / 内存溢出**: 多个用户报告 CLI 因 JavaScript 堆内存溢出而崩溃，尤其是在长会话或大量文件操作后。这两个议题各有 5 条评论，凸显了内存管理是当前一个关键的稳定性问题。[链接](https://github.com/QwenLM/qwen-code/issues/4167), [链接](https://github.com/QwenLM/qwen-code/issues/4149)
6.  **[#4116] 严重错误**: 用户在特定场景下遇到“critical error”，影响了会话的正常使用。此议题有 5 条评论，需要进一步排查。[链接](https://github.com/QwenLM/qwen-code/issues/4111)
7.  **[#3000] 内存诊断工具缺失**: 强烈呼吁引入内存诊断工具，以便分析 V8 堆、检测内存泄漏和检查内存压力。此议题有 4 条评论，表明开发者对性能监控工具有迫切需求。[链接](https://github.com/QwenLM/qwen-code/issues/3000)
8.  **[#4156] qwen --serve (Mode A) 提案**: 提出在 TUI 进程中运行 daemon 的模式（Mode A），与现有 headless 模式（Mode B）互补，以增强本地用户体验。此议题有 4 条评论，显示了社区对多模式支持的探索。[链接](https://github.com/QwenLM/qwen-code/issues/4156)
9.  **[#4139] 工具调用参数错误**: 使用特定模型时，工具调用的 `tool id` 丢失导致 API 返回 400 错误，且错误发生后后续对话均受影响。此议题有 3 条评论，是一个需要修复的集成 bug。[链接](https://github.com/QwenLM/qwen-code/issues/4139)
10. **[#4178] 工具使用-工具结果不变量保护**: 提议在失败点关闭 `tool_use` 和 `tool_result` 之间的不变量，以增强防御深度。此议题有 2 条评论，涉及核心逻辑的健壮性。[链接](https://github.com/QwenLM/qwen-code/issues/4178)

### 4. 重要 PR 进展

以下是过去24小时内更新的重要 Pull Requests：

1.  **[#4123] feat(cli): 添加会话范围的 `/goal` 命令**: 新增一个内置的 `/goal <condition>` 命令，允许用户设置一个自由格式的会话目标，并由 LLM 法官在每个回合结束时判断条件是否满足。[链接](https://github.com/QwenLM/qwen-code/pull/4123)
2.  **[#4126] feat(telemetry): 统一 span 创建路径**: 重构遥测系统，使 LLM 和工具 span 成为交互 span 的子节点，从而形成更清晰的调用树。[链接](https://github.com/QwenLM/qwen-code/pull/4126)
3.  **[#4186] fix(core): 添加堆压自动压缩安全网**: 在 `GeminiChat.tryCompress()` 中添加堆压安全机制，当 V8 堆使用率超过 70% 时，即使未达到 token 阈值也会尝试自动压缩，以预防 OOM。[链接](https://github.com/QwenLM/qwen-code/pull/4186)
4.  **[#4120] feat(cli): 添加内置状态行预设**: 引入一个预设系统，允许用户通过交互式对话框自定义状态行的显示内容。[链接](https://github.com/QwenLM/qwen-code/pull/4120)
5.  **[#4180] feat(cli): 添加基础 `/doctor memory` 诊断**: 实现了第一个轻量级内存诊断命令 `/doctor memory`，用于收集和报告进程内存、V8 堆统计等信息。[链接](https://github.com/QwenLM/qwen-code/pull/4180)
6.  **[#4188] fix: 添加缓存限制以防止构建/测试期间的 OOM**: 为全局 `crawlCache` 和 `fileReadCache` 添加了有界 FIFO 淘汰策略，并为关键 npm 脚本设置了 `--max-old-space-size=3072` 作为安全网，解决了并行 Vitest worker 共享无界 Map 导致的内存增长问题。[链接](https://github.com/QwenLM/qwen-code/pull/4188)
7.  **[#4133] feat(skills): 添加 `/stuck` 诊断技能**: 新增一个内置技能 `/stuck`，用于诊断卡住或缓慢的会话，检查高 CPU、异常进程状态、内存占用等。[链接](https://github.com/QwenLM/qwen-code/pull/4133)
8.  **[#4064] feat(rewind): 为 `/rewind` 命令添加文件回滚支持**: 扩展 `/rewind` 功能，使其不仅能回滚对话历史，还能备份和恢复文件修改，解决了之前需要手动 `git checkout` 的问题。[链接](https://github.com/QwenLM/qwen-code/pull/4064)
9.  **[#3970] refactor(core): TaskBase 信封 + 前台子代理持久化**: 引入 `TaskBase` 共享信封，为前台子代理提供持久化支持，是任务注册统一化设计的第一步。[链接](https://github.com/QwenLM/qwen-code/pull/3970)
10. **[#4097] feat(telemetry): 添加交互 span 和详细敏感属性**: 为每个用户驱动的 turn 添加顶层 `qwen-code.interaction` span，并在启用时附加丰富的内容属性（用户提示、系统提示、工具 I/O、模型输出）到 LLM 和工具 span 上。[链接](https://github.com/QwenLM/qwen-code/pull/4097)

### 5. 功能需求趋势

从近期 Issues 和 PR 来看，社区最关注的功能方向包括：

*   **内存管理与性能优化:** 这是目前最突出的痛点之一。大量 Issue 和 PR 都围绕着解决 JavaScript 堆内存溢出（OOM）、长会话内存泄漏、以及引入 `/doctor memory` 等诊断工具展开，表明开发者急需更稳定的性能和更有效的内存管理工具。
*   **CLI 功能增强与 UX 改进:** 社区对命令行工具的交互体验有持续的高需求，例如改进输入编辑（如 Ctrl+Backspace）、Tab 键冲突、新增 `/goal`、`/history` 等命令，以及更智能的状态行预设，这些都指向对更强大、更直观的用户界面的追求。
*   **Daemon Mode 架构演进:** 围绕 `qwen serve` 的 daemon mode 功能，社区提出了多种设计提案和实现计划（如 Mode A 和 Mode B），显示出对后端服务架构的深入思考和期待，希望能提供更灵活的服务部署和远程访问能力。
*   **核心功能健壮性与错误处理:** 诸如 `tool_use` 与 `tool_result` 的不变量保护、弱网络下的 SSE 流 watchdog、以及配置存储的安全加固等 PR，反映了社区对核心功能稳定性和安全性的高度重视。
*   **诊断与调试工具:** 除了 `/doctor memory`，还有 `/stuck` 诊断技能和更全面的 telemetry 追踪系统正在开发中，这表明社区越来越重视提供强大的内部诊断能力，以帮助用户和开发者更好地理解和维护系统状态。

### 6. 开发者关注点

开发者反馈的主要痛点和高频需求集中在以下几个方面：

*   **内存溢出 (OOM) 与稳定性问题:** 这是目前最普遍且最严重的痛点，尤其在长会话、大上下文模型、大量 tool output 或文件操作后频繁发生，直接导致 CLI 崩溃，严重影响开发效率和使用体验。
*   **API 集成与认证问题:** 包括 OAuth 免费额度政策调整引发的担忧，以及特定 API（如 OpenRouter, Minimax）的连接错误、参数错误等问题，这些都会影响用户的正常使用和信任度。
*   **输入交互体验不足:** 用户期望更高级的文本编辑功能（如多行选择、Cut/Paste）和更直观的键盘快捷键支持（如 Tab 键冲突），以提升在复杂任务中的操作效率。
*   **缺乏有效的诊断工具:** 对于内存问题和会话卡死，开发者急需像 `/doctor memory`、`/stuck` 这样的内置诊断命令，以便快速定位问题原因，而不是依赖外部工具或复杂的日志分析。
*   **配置与权限管理的复杂性:** 关于配置文件权限、自定义端点 provider type 选项、以及 SessionStart hook 无法注入上下文等问题，反映出用户对配置灵活性、安全性和透明度的需求。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*