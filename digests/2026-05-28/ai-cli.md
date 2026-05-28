# AI CLI 工具社区动态日报 2026-05-28

> 生成时间: 2026-05-28 00:34 UTC | 覆盖工具: 8 个

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

---

# **AI CLI 工具生态横向对比分析报告（2026-05-28）**

---

## 1. **生态全景**
当前 AI CLI 工具生态呈现 **多模型、跨平台、插件化** 三大核心趋势：  
- **多模型支持**：所有工具均积极适配 DeepSeek、Kimi、GPT-5.5 等第三方模型，OpenCode 甚至提供 WebSocket Realtime API；
- **跨平台兼容性**：Windows/macOS/Linux 路径处理、终端渲染、剪贴板集成是高频优化点（如 Gemini、Claude Code）；
- **插件与扩展性**：MCP 工具链（Claude Code、OpenCode）、技能系统（Qwen Code）、SDK 发布流程（GitHub Copilot）推动开发者生态。

---

## 2. **各工具活跃度对比（2026-05-28）**

| 工具名称       | Issues（今日新增） | PRs（今日新增） | Release（今日） | Release 版本号 |
|----------------|--------------------|------------------|-----------------|----------------|
| **Claude Code** | 3                  | 2                | ✅              | v2.1.152       |
| **OpenAI Codex**| 5                  | 4                | ❌（Alpha）     | rust-v0.135.0-alpha.2 |
| **Gemini CLI**  | 10                 | 10               | ✅              | v0.45.0-preview.0 |
| **GitHub Copilot** | 5               | 0                | ✅              | v1.0.55-7      |
| **Kimi CLI**    | 5                  | 5                | ✅              | 1.45.0         |
| **OpenCode**    | 10                 | 10               | ✅              | v1.15.11       |
| **Pi**          | 10                 | 10               | ✅              | v0.76.0        |
| **Qwen Code**   | 10                 | 10               | ✅              | v0.16.2        |

> **注**：Release 情况以官方仓库为准，部分 Alpha/Preview 版本未计入正式统计。

---

## 3. **共同关注的功能方向**

| **需求类别**           | **涉及工具**                                                                                     | **具体诉求**                                                                 |
|------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **MCP/插件集成**       | Claude Code, OpenCode, Pi                                                                         | 稳定暴露工具链、多服务器配置、跨 IDE 兼容（如 Cursor/Claude Desktop）          |
| **终端交互优化**        | Gemini, GitHub Copilot, Qwen Code                                                                  | 复制粘贴修复、Shift+Enter、TUI 滚动卡顿                                        |
| **模型控制粒度**        | OpenAI Codex, OpenCode                                                                           | `effortLevel` 生效、API Key 池管理、WebSocket 替代 REST                         |
| **企业级权限管控**      | GitHub Copilot, Kimi Code                                                                         | 组织级令牌权限、企业 SSL 代理兼容                                             |
| **跨平台路径/权限**     | Claude Code, OpenAI Codex, Pi                                                                     | Windows `C:\` vs Linux 路径、沙盒工具执行权限                                  |

---

## 4. **差异化定位分析**

| 工具名称       | 功能侧重                          | 目标用户               | 技术路线                     |
|----------------|-----------------------------------|------------------------|------------------------------|
| **Claude Code** | MCP 插件生态、代码审查自动化       | 开源开发者、企业团队    | Anthropic API + 本地 LLM 混合 |
| **OpenAI Codex** | Rust 客户端稳定性、Alpha 迭代      | 高安全环境、自动化脚本  | 渐进式开放模型接入            |
| **Gemini CLI**  | 通用 Agent、终端/浏览器集成        | 全栈开发、Linux 用户    | Google 云原生架构             |
| **GitHub Copilot** | VS Code 深度集成、企业级策略      | 企业级 GitLab/GitHub 用户 | 插件化 + 组织级管控           |
| **Kimi CLI**    | 子任务去重、会话隔离               | 中文开发者、协作场景    | Moonshot 专属优化             |
| **OpenCode**    | Realtime API、多模型动态路由         | 实时协作、低延迟场景    | 混合云 + 自定义提供商支持      |
| **Pi**          | 多 Agent 系统、本地 LLM 集成        | 复杂工程、本地 AI 场景  | 模块化设计 + 实验性扩展       |
| **Qwen Code**   | 插件兼容性、终端 API（WinkTerm）     | 全平台、安全敏感场景    | 阿里云 + 插件生态             |

---

## 5. **社区热度与成熟度**

| **指标**               | 工具名称       | 说明                                                                 |
|------------------------|----------------|----------------------------------------------------------------------|
| **Issue/PR 密度**       | OpenCode, Pi, Qwen Code | 单日 PR > 10，处于快速迭代阶段，反映活跃开发周期                       |
| **Release 频率**        | Claude Code, Kimi Code | 近两周均发布正式更新，功能交付节奏明确                                 |
| **企业级 Issue**        | GitHub Copilot, Kimi Code | #223 (Copilot) 和 #1623 (Kimi) 获超 50+ 赞，企业需求优先级高         |
| **稳定性问题占比**       | OpenAI Codex, Gemini | 线程恢复、终端崩溃等占 Top 10，需持续打磨                              |
| **文档/迁移问题**       | Qwen Code       | Python 版弃用提示 (#2376) 引发社区讨论，影响用户决策                   |

---

## 6. **值得关注的趋势信号**

### （1）**MCP 标准化成为关键战场**
- **信号强度**：Claude Code、OpenCode、Pi 均有多个 MCP 相关 Issue 和 PR，表明生态工具链的开放性与互操作性是下一阶段竞争焦点。
- **开发者价值**：选择支持 MCP 的工具可无缝集成 Cursor/Claude 插件，降低迁移成本。

### （2）**终端体验决定生产力上限**
- **信号强度**：Gemini、GitHub Copilot、Qwen Code 均聚焦终端复制粘贴、Shift+Enter、滚动卡顿，直接影响开发者工作流。
- **开发者价值**：跨平台终端渲染优化（如 Pi 的 tmux 修复）能显著提升工具粘性。

### （3）**企业级管控需求爆发**
- **信号强度**：GitHub Copilot (#223)、Kimi Code (#1623) 均获超 70+ 赞，组织级安全策略是刚需。
- **开发者价值**：支持 OAuth 权限、企业代理兼容的工具更受大客户青睐。

### （4）**多模型路由与性能优化**
- **信号强度**：OpenCode 的 WebSocket API、Kimi 的并行任务限流、Claude 的模型漂移问题反映用户对灵活性和响应速度的双重需求。
- **开发者价值**：支持动态切换模型（如 Gemini 的 GPT-5.5 Bedrock 集成）和 API 池管理的工具更具竞争力。

---

### **总结建议**
- **选型参考**：  
  - **企业团队**：优先 GitHub Copilot（权限管控）、Kimi Code（中文生态）；  
  - **开发者效率**：Claude Code（MCP 生态）、Pi（本地 LLM 集成）；  
  - **跨平台/终端**：Gemini CLI（Agent 统一）、Qwen Code（WinkTerm 支持）。  
- **生态布局**：关注支持 **MCP 桥接** 和 **Realtime API** 的工具，抢占实时协作与插件化先机。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

---

### **Claude Code Skills 社区热点报告（2026-05-28）**

---

#### **1. 热门 Skills 排行**  
| # | PR 编号 | Skill 名称 | 功能描述 | 状态 | 链接 |
|---|---------|-----------|----------|------|------|
| 1 | [#444](https://github.com/anthropics/skills/pull/444) | **AURELION skill suite** | 结构化认知+记忆框架，支持AI代理的知识管理和协作，含`kernel`（思考模板）、`advisor`、`agent`、`memory`模块 | OPEN | [详情](https://github.com/anthropics/skills/pull/444) |
| 2 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow平台技能** | 覆盖ITSM、ITAM、FSM、安全运维等全流程的ServiceNow平台助手 | OPEN | [详情](https://github.com/anthropics/skills/pull/568) |
| 3 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 全栈测试模式指南（单元测试、React组件测试、TDD原则） | OPEN | [详情](https://github.com/anthropics/skills/pull/723) |
| 4 | [#147](https://github.com/anthropics/skills/pull/147) | **codebase-inventory-audit** | 代码库清理审计工具：识别废弃代码、文档缺口和基础设施冗余 | OPEN | [详情](https://github.com/anthropics/skills/pull/147) |
| 5 | [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS预测器** | 基于SAP开源表格大模型的SAP业务数据预测分析 | OPEN | [详情](https://github.com/anthropics/skills/pull/181) |
| 6 | [#154](https://github.com/anthropics/skills/pull/154) | **shodh-memory** | AI代理持久化内存系统，跨会话保持上下文 | OPEN | [详情](https://github.com/anthropics/skills/pull/154) |

---

#### **2. 社区需求趋势**  
从 Issues 中提取的核心诉求方向：  
- **工作流自动化**：如[#228](https://github.com/anthropics/skills/issues/228)（组织级技能共享功能缺失）。  
- **企业级集成**：如[#29](https://github.com/anthropics/skills/issues/29)（Bedrock部署支持）、[#1175](https://github.com/anthropics/skills/issues/1175)（SharePoint权限控制）。  
- **安全与治理**：如[#492](https://github.com/anthropics/skills/issues/492)（社区技能冒充官方风险）。  
- **开发效率工具**：测试生成（如[#723]）、代码审查（如[#147]）、文档优化（如[#514]）。  

---

#### **3. 高潜力待合并 Skills**  
以下评论活跃但未合并的 PR 可能近期落地：  
- **PDF文件处理**：[#541](https://github.com/anthropics/skills/pull/541)（修复DOCX书签冲突问题，涉及Office文档兼容性）。  
- **技能创建工具**：[#1050](https://github.com/anthropics/skills/pull/1050)（Windows子进程编码问题，影响开发者体验）。  
- **MCP优化**：[#1102](https://github.com/anthropics/skills/issues/1102)（MCP返回数据压缩问题，需解决性能瓶颈）。  

---

#### **4. Skills 生态洞察**  
**当前核心诉求**：  
> **企业级集成与标准化**——社区迫切希望Skills支持跨平台（AWS/Azure/SharePoint）、组织级共享，并解决安全与性能痛点（如MCP数据膨胀、Windows兼容性问题），同时急需垂直领域深度工具（如ServiceNow、SAP）。  

--- 

**总结**：Claude Code Skills 正从通用工具向企业级解决方案演进，开发者更关注稳定性、生态整合与垂直场景落地。

---

---

### **Claude Code 社区动态日报（2026-05-28）**

---

#### **1. 今日速览**
- **v2.1.152** 发布，新增 `/code-review --fix` 自动应用代码审查建议，并简化技能与斜杠命令的权限管理。
- **MCP 工具暴露问题** 成为近期高频痛点，涉及 Windows/Linux/macOS 多平台，社区已提交多个复现案例（Issue #12164、#43474）。

---

#### **2. 版本发布：v2.1.152**
- **`/code-review --fix`**  
  支持在代码审查后直接应用改进建议（如重构、简化、效率优化），并可通过 `/simplify` 调用此功能。[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.152)
- **技能与斜杠命令权限增强**  
  允许在 `frontmatter` 中通过 `disallowed-tools` 禁用特定工具，提升安全控制粒度。

---

#### **3. 社区热点 Issues（Top 10）**

| Issue | 重要性 & 社区反应 | 链接 |
|-------|------------------|------|
| **#12164** <br> *MCP 服务器连接成功但工具未暴露* | 高优先级，多平台（macOS/Windows/Linux）均出现，影响插件生态开发，已有 13 条评论和 4 👍。 | [🔗](#) |
| **#62942** <br> *Chrome 扩展 Linux 版无法连接* | 用户反馈浏览器扩展在 Linux 下始终返回“未连接”，需跨平台修复。 | [🔗](#) |
| **#43474** <br> *多 MCP 服务器指令截断* | macOS 下配置多个 MCP 服务器时，系统提示会静默截断，导致功能缺失，2 条评论+2 👍。 | [🔗](#) |
| **#62755** <br> *Windows 桌面端缺少 cowork 功能* | 企业用户急需多会话协作支持，需修复桌面版功能缺失。 | [🔗](#) |
| **#62958** <br> *Claude 4.6 模型漂移问题* | Linux 用户报告模型行为不稳定，频繁偏离指令，需紧急排查。 | [🔗](#) |
| **#62290** <br> *多会话桌面预览面板错乱* | 多窗口环境下预览面板跳转错误，用户体验差，2 👍。 | [🔗](#) |
| **#58365** <br> *pyright-LSP 虚拟环境检测失效* | Python 开发者核心工具链问题，导致误报依赖缺失，3 👍。 | [🔗](#) |
| **#45811** <br> *文档与数据使用条款矛盾* | 用户发现 CLI 提示与官方文档冲突，影响隐私透明度。 | [🔗](#) |
| **#62949** <br> *Cowork 仅显示 Sonnet 4.6 模型* | Max 计划用户因配额限制无法使用更高模型，需 API 支持。 | [🔗](#) |
| **#52534** <br> *Opus 4.7 忽略 effortLevel 设置* | 自动化工作流中断，需环境变量/配置文件生效。 | [🔗](#) |

---

#### **4. 重要 PR 进展（Top 10）**

| PR | 内容 | 链接 |
|----|------|------|
| **#62941** <br> *Ralph Wiggum 插件修复* | 修正转录文件读取逻辑，避免循环终止异常。 | [🔗](#) |
| **#62906** <br> *Windows 路径兼容修复* | 为 Bash Hook 添加前缀，确保跨平台路径安全。 | [🔗](#) |
| **#61742** <br> *Agent View TUI 目录限制* | 明确文档说明多项目需独立终端/Tmux 的局限。 | [🔗](#) |
| **#62821** <br> *Plugin-MCP 会话 ID 桥接方案* | 提供插件开发者临时解决方案，跟踪 #61752。 | [🔗](#) |
| **#41447** <br> *开源 Claude Code* | 长期里程碑，推动社区贡献（已关联多个 Issue）。 | [🔗](#) |

---

#### **5. 功能需求趋势**
- **MCP 集成稳定性**：多服务器配置、工具暴露、跨平台连接为最核心需求（占 Issues 的 25%）。
- **模型控制粒度**：`effortLevel` 环境变量生效、模型选择（如 Opus/Sonnet 上下文切换）受自动化流程依赖。
- **企业级功能**：多会话协作（cowork）、企业策略（HKLM 权限）是团队刚需。
- **插件生态兼容性**：LSP（pyright）、MCP 注册方式等开发者工具链问题频发。

---

#### **6. 开发者关注点**
- **痛点**：
  - **MCP 工具链断裂**：多服务器配置失败、插件工具不可见。
  - **模型行为不可预测**：4.6 版本漂移问题影响生产环境可靠性。
  - **权限与配置冲突**：如 `CLAUDE.md` 与 `MEMORY.md` 绑定开关需解耦（Issue #52488）。
- **高频需求**：
  - **跨平台一致性**：Windows/macOS/Linux 均需统一修复（如 Git Bash PATH 检测）。
  - **调试支持**：用户强烈需要更详细的诊断日志（如 #62950 更新失败报错）。

--- 

**总结**：Claude Code 正面临插件生态与多模型协同的挑战，社区期待更开放的 MCP 支持和企业级稳定性增强。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

---

### **OpenAI Codex 社区动态日报（2026-05-28）**

---

#### **1. 今日速览**
- **版本发布**：`rust-v0.135.0-alpha.1/alpha.2` 发布，主要涉及 Alpha 版本迭代。
- **核心问题**：用户报告 **Codex Desktop 上下文指示器丢失**（Issue #23794，评论 142+，👍 131），以及 **Windows 下线程恢复路径异常**（Issue #23803、#22854）。
- **PR 进展**：新增 Python SDK Beta 独立发布流程（PR #24828）、支持 MCP 服务器状态暴露（PR #24698）、修复 Windows 沙盒配置工具（PR #24831）。

---

#### **2. 版本发布**
- **rust-v0.135.0-alpha.2**  
  最新 Alpha 版本更新，持续优化 Rust 客户端稳定性，为后续正式版铺路。  
  [Release 0.135.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.135.0-alpha.2)

---

#### **3. 社区热点 Issues（Top 10）**

| Issue | 重要性 | 社区反应 |
|------|--------|----------|
| **[#23794](https://github.com/openai/codex/issues/23794)** | **最高优先级**：桌面版上下文/Token 使用指示器消失，影响用户体验 | 142条评论，131个点赞，多平台复现（Windows/macOS） |
| **[#24665](https://github.com/openai/codex/issues/24665)** | OAuth 认证崩溃，影响团队协作 | 31条评论，51个点赞，需紧急修复 |
| **[#23803](https://github.com/openai/codex/issues/23803)** | Windows 线程恢复因路径格式 `C:\` vs `\\?\C\` 失败 | 4条评论，但影响会话持久化 |
| **[#22854](https://github.com/openai/codex/issues/22854)** | 同 #23803，Windows 线程恢复需重启进程 | 3条评论，重复问题 |
| **[#24269](https://github.com/openai/codex/issues/24269)** | `/Goal` 指令频繁失败，新功能稳定性问题 | 9条评论，Pro 订阅用户反馈 |
| **[#24341](https://github.com/openai/codex/issues/24341)** | Linux 沙盒工具执行权限错误（`~/.local/bin/codex` 路径问题） | 2条评论，需环境适配 |
| **[#17931](https://github.com/openai/codex/pull/17931)** | 修复 Windows Credential Manager 存储限制（关键安全修复） | 无评论，但解决长期痛点 |
| **[#24837](https://github.com/openai/codex/pull/24837)** | 预算限制下编辑目标逻辑优化（API 行为调整） | 无评论，内部改进 |
| **[#24834](https://github.com/openai/codex/pull/24834)** | Linux 沙盒隐藏用户会话套接字（安全加固） | 无评论，但提升隔离性 |
| **[#24701](https://github.com/openai/codex/pull/24701)** | 将 GPT-5.5 加入 Amazon Bedrock 模型目录 | 无评论，生态扩展 |

---

#### **4. 重要 PR 进展（Top 10）**

| PR | 功能/修复 |
|----|-----------|
| **[#24828](https://github.com/openai/codex/pull/24828)** | 独立 Python SDK Beta 发布流程，避免依赖运行时版本锁定 |
| **[#24837](https://github.com/openai/codex/pull/24837)** | 修复预算限制下 `/goal` 编辑逻辑，保留原有令牌预算 |
| **[#24701](https://github.com/openai/codex/pull/24701)** | 支持 GPT-5.5 在 Amazon Bedrock 中上线 |
| **[#24805](https://github.com/openai/codex/pull/24805)** | 添加 `CODEX_ENV_FILE` 环境变量，支持 Shell 会话状态持久化 |
| **[#24698](https://github.com/openai/codex/pull/24698)** | 暴露 MCP 服务器信息到 App Server，增强集成体验 |
| **[#24816](https://github.com/openai/codex/pull/24816)** | 去重技能加载警告日志，减少重复输出 |
| **[#24831](https://github.com/openai/codex/pull/24831)** | 新增 Windows 沙盒预配命令，解决非管理员权限问题 |
| **[#24834](https://github.com/openai/codex/pull/24834)** | Linux 沙盒隐藏用户会话套接字，防止敏感数据泄露 |
| **[#17931](https://github.com/openai/codex/pull/17931)** | 加密本地密钥环存储，修复 Windows 认证限制 |
| **[#24108](https://github.com/openai/codex/pull/24108)** | Windows 沙盒传递工作根目录，支持符号链接解析 |

---

#### **5. 功能需求趋势**
- **模型与生态扩展**：  
  - 持续支持新模型（如 `gpt-5.5` 在 Bedrock 上线，[#24701](https://github.com/openai/codex/pull/24701)）。
- **跨平台兼容性**：  
  - 重点修复 Windows/macOS/Linux 的沙盒、路径、权限问题（如 [#23803](https://github.com/openai/codex/issues/23803)、[#24341](https://github.com/openai/codex/issues/24341)）。
- **性能与稳定性**：  
  - 会话恢复、工具调用延迟（如 [#22854](https://github.com/openai/codex/issues/22854)）、OAuth 崩溃（[#24665](https://github.com/openai/codex/issues/24665)）。
- **开发者工具链**：  
  - CLI 功能增强（如 `/archive` 请求 [#14076](https://github.com/openai/codex/issues/14076)）、MCP 集成（[#24698](https://github.com/openai/codex/pull/24698)）。

---

#### **6. 开发者关注点**
- **高频痛点**：  
  - **路径与权限**：Windows `C:\` 路径格式导致会话恢复失败（#23803、#22854）。  
  - **沙盒与安全**：Linux 工具执行权限（#24341）、套接字暴露（#24834）。  
  - **日志冗余**：技能加载重复警告（#24816）。  
  - **认证与存储**：Windows Credential Manager 容量限制（#17931）。  
- **协作问题**：  
  - OAuth 团队级故障（#24665）、移动端项目列表缺失（#23952）。  

--- 

**总结**：近期聚焦 **稳定性修复**（尤其是 Windows）、**跨平台沙盒适配** 和 **模型扩展**，社区对上下文显示、会话恢复的反馈尤为突出。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

---

# **Gemini CLI 社区动态日报 - 2026-05-28**

---

## **1. 今日速览**
- Gemini CLI 发布 `v0.45.0-preview.0`，重点修复了 Termux 终端重挂载循环问题，并优化了工具包打包逻辑；
- 社区热议 **子代理行为控制**、**浏览器 Agent 崩溃（Wayland）** 和 **工具链稳定性** 等核心问题，多个高优先级 Issue 引发讨论。

---

## **2. 版本发布**
### **Release v0.45.0-preview.0**
- **关键更新**：
  - 修复 Termux 终端重挂载循环（[PR #27110](https://github.com/google-gemini/gemini-cli/pull/27110)）；
  - 解决工具包 `devtools` 包打包时的解析错误（[PR #27250](https://github.com/google-gemini/gemini-cli/pull/27250)）。

---

## **3. 社区热点 Issues（Top 10）**

| Issue | 重要性 | 社区反应 |
|-------|--------|----------|
| **[#21409: Generalist agent hangs](#)** (p1)<br>作者: turmanticant | 核心功能阻塞 | 👍8，评论7，用户反馈“简单文件夹创建也会卡死” |
| **[#27499: UnixTerminal.resize crash (EBADF)](#)** (p1)<br>作者: angelrancelantigravity | 影响多终端平台 | 👍2，评论3，涉及 Node.js PTY 稳定性问题 |
| **[#21983: Browser subagent fails in Wayland](#)** (p1)<br>作者: sigmaSd | Linux 用户痛点 | 👍1，评论4，Wayland 兼容性需紧急修复 |
| **[#25166: Shell command stuck after execution](#)** (p1)<br>作者: rnett | 命令行交互体验差 | 👍3，评论4，命令执行后仍显示“等待输入” |
| **[#22323: Subagent recovery hides interruptions](#)** (p1)<br>作者: matei-anghel | 结果可信度 | 👍2，评论6，子代理误报成功导致分析中断 |
| **[#22745: AST-aware file read impact](#)** (p2)<br>作者: gundermanc | 代码导航效率 | 👍1，评论7，AST 工具对代码映射的潜在价值 |
| **[#21968: Subagent underutilization](#)** (p2)<br>作者: rnett | 智能体能力局限 | 👍0，评论6，模型未主动调用自定义技能 |
| **[#22672: Prevent destructive actions](#)** (p2)<br>作者: abhipatel12 | 安全关键 | 👍1，评论2，需限制危险命令如 `git --force` |
| **[#27325: Custom slash commands compatibility](#)** (p2)<br>作者: eorroe | 迁移痛点 | 👍2，评论4，Antigravity CLI 是否支持旧命令？ |
| **[#26525: Auto Memory redaction improvement](#)** (p2)<br>作者: SandyTao520 | 隐私合规 | 👍0，评论3，敏感数据日志需确定性擦除 |

🔗 [查看全部 Issues](https://github.com/google-gemini/gemini-cli/issues)

---

## **4. 重要 PR 进展（Top 10）**

| PR | 内容 |
|----|------|
| **[#27496: Harden PTY resize crashes](#)**<br>作者: scidomino | 修复终端调整时 C++ 原生崩溃（`libc++abi`），增强稳定性 |
| **[#27467: Multi-line escaped quotes fix](#)**<br>作者: sanchezcoraspe | 解决 `stripShellWrapper` 无法正确处理多行转义引号的问题 |
| **[#27497: Prompt Replay Cache](#)**<br>作者: ujjwalv01 | 引入本地缓存机制，减少重复 API 调用，节省令牌 |
| **[#27101: /tasks/metadata 501 fallback](#)**<br>作者: MukundaKatta | 非内存任务存储返回 501 时立即退出，避免无限阻塞 |
| **[#22590: Include all subagent tool calls](#)**<br>作者: TravisHaa | 确保根过滤器包含所有执行中的子代理工具调用，提升状态同步 |
| **[#23113: CodebaseInvestigator schema validation loop](#)**<br>作者: kunal-10-cloud | 修复缺失 `objective` 参数导致的无限验证循环，最多重试 3 次 |
| **[#22325: Surface subagent termination reasons](#)**<br>作者: matei-anghel | 恢复时保留原始终止原因，避免误报成功状态 |
| **[#23236: Linux headless/Wayland fallback](#)**<br>作者: kunal-10-cloud | 无 X 服务器时自动降级为无头模式，兼容 Wayland |
| **[#23176: Config spread-safety](#)**<br>作者: mattKorwel | 确保配置类在克隆时属性不丢失，修复上下文初始化错误 |
| **[#25605: Signal forwarding to child process](#)**<br>作者: Sway-Chan | 主进程信号（SIGTERM）传递到子进程，增强优雅退出 |

🔗 [查看全部 PRs](https://github.com/google-gemini/gemini-cli/pulls)

---

## **5. 功能需求趋势**
- **子代理行为控制**：如何优化子代理的触发条件、结果展示与恢复逻辑（[#22323](#), [#22325](#)）；
- **终端与 IDE 集成**：解决终端崩溃（Wayland/X11）、命令执行后状态残留（[#27499](#), [#25166](#)）；
- **工具链增强**：AST 工具（tilth/glyph）用于文件读取与代码映射（[#22745](#, [#22747](#)）；
- **安全与权限**：MCP 服务器在非交互模式的安全策略（[#27215](#）；
- **性能优化**：终端调整卡顿、脚本生成临时文件清理（[#23571](#)）。

---

## **6. 开发者关注点**
- **稳定性**：终端崩溃、子代理死锁、工具链解析错误（高频 p1/p2 问题）；
- **用户体验**：命令执行后状态残留、浏览器 Agent 兼容性（X11/Wayland）；
- **可观测性**：子代理恢复原因透明化、内存补丁无效检测（[#22323](#, [#26523](#)）；
- **安全边界**：危险命令拦截（如 `git reset`）、MCP 默认拒绝策略；
- **性能瓶颈**：令牌消耗、响应延迟（Prompt Replay Cache 相关 PR）。

---

**数据来源**：GitHub 官方仓库 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

---

# GitHub Copilot CLI 社区动态日报（2026-05-28）

---

## 1. 今日速览
- **v1.0.55-7** 发布，修复了计划模式下工具仅提供给模型、原生二进制崩溃回退到 JS 等关键问题。  
- 社区热议企业环境认证权限（Issue #223，👍 72）、终端滚动卡顿（Issue #2205，👍 12）和 Linux 复制粘贴回归性问题（Issue #3483、#3414）。

---

## 2. 版本发布：v1.0.55-7
**主要更新：**
- **修复项**  
  - 计划模式 (`exit_plan_mode`) 下仅对模型提供工具支持  
  - 原生二进制崩溃时回退至 JavaScript 实现（避免静默退出）  
  - [Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.55-7)

**新增功能：**
- `/autopilot <objective>` 命令（别名 `/goal`）聚焦任务  
- 钩子进度实时流式显示长运行操作状态  

**改进：**
- 默认启用基于单元格的终端渲染器  
- 组织策略禁用远程控制时提示警告  
- MCP 配置界面优化为可滚动列表  
- 插件日志捕获增强  

---

## 3. 社区热点 Issues（Top 10）

| Issue | 重要性 | 社区反应 | 链接 |
|------|--------|----------|------|
| **#223**<br>企业令牌权限缺失 | **高**<br>影响企业自动化场景 | 👍72，评论22<br>用户强烈要求组织级权限管控 | [详情](https://github.com/github/copilot-cli/issues/223) |
| **#2205**<br>终端滚动失效 | **高**<br>核心交互障碍 | 👍12，评论11<br>用户反馈“完全无用”的输入导航替代历史记录 | [详情](https://github.com/github/copilot-cli/issues/2205) |
| **#146**<br>VS Code 配置同步 | **中高**<br>用户体验一致性 | 👍10，评论6<br>希望统一编辑器与 CLI 设置行为 | [详情](https://github.com/github/copilot-cli/issues/146) |
| **#3483**<br>Linux 复制失效 | **中**<br>跨平台兼容性 | 👍5，评论3<br>Wayland/GNOME 用户报告剪贴板异常 | [详情](https://github.com/github/copilot-cli/issues/3483) |
| **#333**<br>企业 SSL 拦截故障 | **中**<br>企业环境痛点 | 👍4，评论4<br>证书安装后仍连接失败 | [详情](https://github.com/github/copilot-cli/issues/333) |
| **#1826**<br>多根工作区支持 | **中低**<br>扩展性需求 | 👍11，评论3<br>.code-workspace 文件未读取指令文件 | [详情](https://github.com/github/copilot-cli/issues/1826) |
| **#3545**<br>启动更新提示冗余 | **低**<br>UX优化 | 新提交，评论1<br>建议静默自动更新 | [详情](https://github.com/github/copilot-cli/issues/3545) |
| **#3543**<br>启动输入延迟 | **中**<br>性能瓶颈 | 新提交，评论1<br>大目录导致 15–30s 冻结 | [详情](https://github.com/github/copilot-cli/issues/3543) |
| **#3541**<br>响应截断 | **低**<br>TUI渲染问题 | 新提交，评论1<br>长回复丢失部分内容 | [详情](https://github.com/github/copilot-cli/issues/3541) |
| **#2734**<br>插件自动更新 | **中**<br>运维需求 | 👍3，评论1<br>手动更新繁琐易过时 | [详情](https://github.com/github/copilot-cli/issues/2734) |

---

## 4. 重要 PR 进展（无更新）
*无近期 PR*

---

## 5. 功能需求趋势

| 方向 | 高频需求点 |
|------|------------|
| **企业集成** | 组织级令牌权限 (#223)、SSL 企业代理兼容 (#333) |
| **终端体验** | 滚动修复 (#2205)、复制粘贴稳定性 (#3483/#3414) |
| **多上下文支持** | 长上下文窗口配置 (#3527)、MCP 工具内容转发 (#3258) |
| **插件生态** | 自动更新 (#2734)、跨 CLI 技能兼容 (#3531) |
| **跨平台适配** | WSL2/ARM 剪贴板 (#3534)、GNOME Wayland (#3467) |

---

## 6. 开发者关注点总结

- **企业级安全管控**：组织令牌权限、SSL 企业环境是最大痛点（#223、#333）。  
- **终端交互缺陷**：滚动和复制粘贴在 Linux/Wayland 下普遍失效（#2205、#3483），需优先修复。  
- **性能与配置**：启动延迟（#3543）、上下文窗口配置未生效（#3527）影响生产力。  
- **插件管理**：用户期待自动更新机制（#2734）和跨版本技能兼容（#3531）。  
- **跨平台一致性**：Windows/Linux/macOS 剪贴板和输入事件差异显著（#3188、#3534）。  

---

**数据来源：[GitHub Copilot CLI Issues/PRs](https://github.com/github/copilot-cli)**

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

---

# Kimi Code CLI 社区动态日报（2026-05-28）

---

## 1. **今日速览**
- **版本更新**：发布 `1.45.0`，修复了 Shell 工具链的误导性配额提示问题，并优化了子任务去重逻辑。
- **活跃开发**：针对并行子任务 API 限流（Issue #2368）、Markdown TUI 渲染（Issue #2379）等高频问题，社区已提交修复 PR。

---

## 2. **版本发布：v1.45.0**
### 主要更新：
- **Bugfix**  
  - 修正 Shell 工具中 `403` 错误时显示误导性的“配额已耗尽”提示 ([#2342](https://github.com/MoonshotAI/kimi-cli/pull/2342))。
- **功能优化**  
  - 改进稀疏提醒和标准化参数的子任务去重逻辑 ([#2341](https://github.com/MoonshotAI/kimi-cli/pull/2341))。

---

## 3. **社区热点 Issues**

| Issue | 重要性 & 社区反馈 |
|-------|------------------|
| **[#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623)**<br>Kimi Web 页面自动刷新影响体验 | **高频痛点**，Windows 用户报告频繁刷新破坏多标签页工作流，评论数 5+，急需前端稳定性优化。 |
| **[#2368](https://github.com/MoonshotAI/kimi-cli/issues/2368)**<br>并行子任务共享 API Key 导致 429 限流 | **核心阻塞点**，开发者反馈并发执行时因单 Key 限流崩溃，已有 PR (#2369) 提出 API Key 池方案。 |
| **[#2379](https://github.com/MoonshotAI/kimi-cli/issues/2379)**<br>TUI Markdown 列表渲染字符丢失 | **UI 体验缺陷**，Linux 用户发现换行时字符截断，PR (#2380) 已同步提交修复。 |
| **[#2376](https://github.com/MoonshotAI/kimi-cli/issues/2376)**<br>文档未标注 Python 版弃用 | **迁移风险**，用户可能误读旧版文档，需添加醒目弃用横幅（PR #2377 进行中）。 |
| **[#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774)**<br>@mention 文件路径解析错误 | **跨平台兼容性**，macOS 用户报告波浪符路径处理异常，已关闭但需长期跟踪。 |

---

## 4. **重要 PR 进展**

| PR | 内容 & 关联 Issue |
|----|------------------|
| **[#2380](https://github.com/MoonshotAI/kimi-cli/pull/2380)**<br>fix(tui): 保留 Markdown 列表换行字符 | 修复 Linux/macOS 下 TUI 渲染异常，直接解决 Issue #2379。 |
| **[#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369)**<br>feat(subagent): API Key 池支持并行执行 | 为 Issue #2368 设计轮询分配器，缓解多子任务限流问题。 |
| **[#2377](https://github.com/MoonshotAI/kimi-cli/pull/2377)**<br>docs: 添加 Kimi Code 迁移公告 | 在文档首页、README 增加 TypeScript 版项目迁移提示。 |
| **[#2378](https://github.com/MoonshotAI/kimi-cli/pull/2378)**<br>fix(router): 修复多语言路由跳转 | 确保中文用户访问文档根目录时自动重定向到 `/zh/`。 |
| **[#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350)**<br>fix: 容忍非 UTF-8 子进程输出 | 解决 Windows 下子进程编码导致的崩溃（Issue #2313）。 |

---

## 5. **功能需求趋势**
- **性能与稳定性**：  
  - 并行任务限流（#2368）、TUI 渲染优化（#2379）是近期核心议题。
- **文档与迁移**：  
  - 明确 Python 版弃用状态（#2376），引导至 TypeScript 版。
- **跨平台兼容性**：  
  - 文件路径解析（#1774）、子进程编码（#2350）需重点覆盖 Windows/macOS/Linux。

---

## 6. **开发者关注点**
- **API 限流瓶颈**：  
  多子任务场景下共享 API Key 导致 429 错误，亟需资源隔离机制（如 #2369 的 Key 池）。
- **工具链一致性**：  
  Shell/TUI 的 Markdown 渲染差异（#2379）、日志输出混乱（#1637）影响开发体验。
- **文档清晰度**：  
  新旧版本混用风险（#2376）需通过醒目提示降低用户困惑。

--- 

**完整数据源**：[GitHub Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

---

# **OpenCode 社区日报 | 2026-05-28**

---

## **今日速览**
- OpenCode 发布 `v1.15.11`，新增 `headerTimeout` 配置项，优化背景任务推送机制；
- 社区反馈集中围绕 **模型兼容性（DeepSeek、Kimi）**、**TUI 交互问题（Shift+Enter、复制功能失效）** 及 **MCP 服务启动卡顿**。

---

## **版本发布**
### v1.15.11（核心更新）
- **新增**：  
  - 提供 `headerTimeout` 配置项（默认 10s），解决 OpenAI 请求超时问题 [#29548](https://github.com/anomalyco/opencode/issues/29548)；
  - 支持仅设置 `modalities.input`/`modalities.output` 配置项 [#27906](https://github.com/anomalyco/opencode/issues/27906)；
  - 实验性背景任务改为无轮询推送 [#20802](https://github.com/anomalyco/opencode/issues/20802)。

---

## **社区热点 Issues（Top 10）**

| **Issue ID** | **标题** | **重要性 & 社区反馈** |
|-------------|----------|----------------------|
| **[#1505](https://github.com/anomalyco/opencode/issues/1505)**<br>**Shift+Enter 快捷键失效**<br>👍 100, 💬 125 | 用户反馈 Shift+Enter 无法换行，替代键 Ctrl+j 正常。<br>高频需求，影响基础输入体验。 |
| **[#29079](https://github.com/anomalyco/opencode/issues/29079)**<br>**GPT 响应延迟波动**<br>👍 46, 💬 96 | GPT 模型响应时间从秒到分钟不等，影响开发效率。<br>需排查负载或路由逻辑。 |
| **[#28945](https://github.com/anomalyco/opencode/issues/28945)**<br>**DeepSeek reasoning_content 丢失**<br>👍 7, 💬 5 | 工具调用后触发 HTTP 400 错误，阻碍推理模式使用。<br>需修复上下文传递逻辑。 |
| **[#17796](https://github.com/anomalyco/opencode/issues/17796)**<br>**TUI 复制失效**<br>👍 1, 💬 15 | 选中文本提示已复制但未实际写入剪贴板。<br>影响多平台协作流程。 |
| **[#14891](https://github.com/anomalyco/opencode/issues/14891)**<br>**OpenAI Realtime API 支持**<br>👍 20, 💬 8 | 社区强烈建议 WebSocket 替代 REST，提升实时交互能力。 |
| **[#26338](https://github.com/anomalyco/opencode/issues/26338)**<br>**CommandCode 提供商集成**<br>👍 7, 💬 6 | 请求支持 [commandcode.ai](https://commandcode.ai/) 作为可选供应商。 |
| **[#24569](https://github.com/anomalyco/opencode/issues/24569)**<br>**DeepSeek V4 Pro 报错**<br>👍 12, 💬 28 | 推理模式下 `reasoning_content` 缺失导致 API 错误。<br>影响特定模型兼容性。 |
| **[#17519](https://github.com/anomalyco/opencode/issues/17519)**<br>**Vertex AI Gemini 中断**<br>👍 5, 💬 5 | 会话中频繁崩溃，需检查参数序列化逻辑。 |
| **[#20755](https://github.com/anomalyco/opencode/issues/20755)**<br>**MCP 同步阻塞启动**<br>👍 0, 💬 4 | 远程 MCP 服务（如 exa）加载过慢，需异步化改进。 |
| **[#29589](https://github.com/anomalyco/opencode/issues/29589)**<br>**Windows 文件监控异常**<br>👍 0, 💬 5 | 桌面任务中断并报 `Invalid handle`，影响 Windows 稳定性。 |

---

## **重要 PR 进展（Top 10）**

| **PR ID** | **内容** | **链接** |
|-----------|----------|---------|
| **[#29637](https://github.com/anomalyco/opencode/pull/29637)**<br>TUI 终端标签页显示会话状态 | 直观标识会话空闲/工作中，增强用户体验。 |
| **[#29615](https://github.com/anomalyco/opencode/pull/29615)**<br>远程工作空间事件回放修复 | 修复中央实例同步时 `session.next.*` 事件丢失问题。 |
| **[#29597](https://github.com/anomalyco/opencode/pull/29597)**<br>MCP 客户端按需启动 | 仅打开目录时加载 MCP，减少启动延迟。 |
| **[#29636](https://github.com/anomalyco/opencode/pull/29636)**<br>OpenAI WebSocket 自定义 URL 支持 | 适配非标准端点，扩展提供商灵活性。 |
| **[#26090](https://github.com/anomalyco/opencode/pull/26090)**<br>LLM 响应头透出 | 通过 LiteLLM 代理时显示实际模型名称。 |
| **[#29635](https://github.com/anomalyco/opencode/pull/29635)**<br>无效配置友好报错 | 避免因 Agent/Mode 配置崩溃，提升调试体验。 |
| **[#28937](https://github.com/anomalyco/opencode/pull/28937)**<br>MCP 按需加载优化 | 仅活动目录触发 MCP 读取，降低资源占用。 |
| **[#27231](https://github.com/anomalyco/opencode/pull/27231)**<br>提供商编辑按钮 | 允许用户直接修改 OpenRouter/Google 等提供商配置。 |
| **[#28071](https://github.com/anomalyco/opencode/pull/28071)**<br>认证服务标准化 | 迁移至 `well-known.json`，统一环境变量和文件替换语法。 |
| **[#29631](https://github.com/anomalyco/opencode/pull/29631)**<br>MCP 通知处理 | 修复 TUI 提示条消息同步问题。 |

---

## **功能需求趋势**
1. **多模型兼容性**：DeepSeek、Kimi、Vertex AI 的推理模式支持（`reasoning_content` 传递）；
2. **交互优化**：Shift+Enter、复制功能、快捷键映射；
3. **性能与稳定性**：  
   - MCP 异步加载 [#20755](https://github.com/anomalyco/opencode/issues/20755)；  
   - Windows 文件监控异常 [#29589](https://github.com/anomalyco/opencode/issues/29589)；
4. **API 扩展**：Realtime WebSocket、自定义端点 [#29636](https://github.com/anomalyco/opencode/pull/29636)；
5. **工具链集成**：CommandCode、freemodel.dev 等第三方提供商支持 [#26338](https://github.com/anomalyco/opencode/issues/26338)。

---

## **开发者关注点**
1. **配置与错误处理**：  
   - 无效配置应友好提示而非崩溃 [#29635](https://github.com/anomalyco/opencode/pull/29635)；
2. **日志与诊断**：  
   - 模型选择信息透出 [#26090](https://github.com/anomalyco/opencode/pull/26090)；
3. **环境兼容性**：  
   - Bun/NPM 安装脚本限制 [#27906](https://github.com/anomalyco/opencode/issues/27906)；
4. **调试工具**：  
   - 会话状态可视化 [#29637](https://github.com/anomalyco/opencode/pull/29637)；
5. **性能瓶颈**：  
   - MCP 启动阻塞 [#28937](https://github.com/anomalyco/opencode/pull/28937)。

--- 

**数据来源**: [anomalyco/opencode GitHub](https://github.com/anomalyco/opencode)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

---

# Pi 社区动态日报 | 2026-05-28

---

## 1. 今日速览
- **Pi v0.76.0** 发布，新增自动化脚本支持显式会话 ID，RPC 命令可排除 Bash 输出进入模型上下文。
- 社区聚焦于 **工具调用稳定性、多 Agent 系统、本地 LLM 集成** 等议题，多个 Issue 和 PR 正在积极处理中。

---

## 2. 版本发布  
**[v0.76.0](https://github.com/earendil-works/pi/releases/tag/v0.76.0)**  

### 新特性：
- **`--session-id <id>`**：允许脚本创建或恢复精确项目本地会话，避免会话冲突。[docs/usage.md#sessions](https://github.com/earendil-works/pi/blob/main/docs/usage.md#sessions)
- **`bash RPC` 新增 `excludeFromContext`**：客户端可通过此标志防止 Bash 输出污染模型上下文。[#5039](https://github.com/earendil-works/pi/issues/5039)

---

## 3. 社区热点 Issues（Top 10）

| #   | 标题/摘要                                                                 | 重要性 & 社区反应                                                                 |
|-----|--------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | `openai-codex` 交互式 TUI 卡死，需手动按 Escape 恢复，影响用户体验，评论最多（37）。 | 高频反馈，用户急需修复。 |
| [#3357](https://github.com/earendil-works/pi/issues/3357) | 官方本地 LLM 提供商扩展请求（如 llama.cpp），动态获取模型列表，👍 33。               | 本地模型集成需求强烈。 |
| [#3259](https://github.com/earendil-works/pi/issues/3259) | Zellij 终端内 Shift+Enter 换行失效，仅外部终端正常。                              | 终端兼容性痛点。 |
| [#2023](https://github.com/earendil-works/pi/issues/2023) | 请求 `pi.runWhenIdle()` 在 AI 代理完全空闲后调度任务，👍 5。                     | 异步任务调度需求。 |
| [#5023](https://github.com/earendil-works/pi/issues/5023) | 终端随机跳转至缓冲区起始位置，无交互触发，评论 7。                               | UI 稳定性问题。 |
| [#5092](https://github.com/earendil-works/pi/issues/5092) | 0.74.1 后代码 diff 块失去语法高亮（绿色/红色标记），评论 3。                     | 可视化体验退化。 |
| [#5089](https://github.com/earendil-works/pi/issues/5089) | `timeoutMs` 超时设置失效，大文件读取时崩溃，评论 6。                             | 超时控制缺陷。 |
| [#5077](https://github.com/earendil-works/pi/issues/5077) | **提案：多 Agent 编排系统**，定义独立 Agent 并动态协作。                         | 复杂任务核心需求。 |
| [#5040](https://github.com/earendil-works/pi/issues/5040) | `PI_CODING_AGENT_SESSION_DIR` 导致会话存储扁平化，评论 3。                      | 存储路径配置问题。 |
| [#4829](https://github.com/earendil-works/pi/issues/4829) | `readPipedStdin` 计时错误包含会话创建时间，影响性能分析，👍 2。                  | 性能监控准确性。 |

---

## 4. 重要 PR 进展（Top 10）

| #    | 标题/摘要                                                                 | 关键内容                                                                 |
|------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [#5100](https://github.com/earendil-works/pi/pull/5100) | 修复 Git 源无 `@ref` 时默认分支更新逻辑，修复 #5099。                       | 依赖管理改进。 |
| [#5097](https://github.com/earendil-works/pi/pull/5097) | 修复 tmux 下图片渲染和方向键支持，修复 #5098。                             | 终端兼容性。 |
| [#5093](https://github.com/earendil-works/pi/pull/5093) | Windows 环境变量解析修复，API Key 字符串转义错误，修复 #5095。             | 跨平台健壮性。 |
| [#5085](https://github.com/earendil-works/pi/pull/5085) | 暴露完整工具定义给扩展（读/写权限），替代 #4954。                          | 开发者工具增强。 |
| [#5090](https://github.com/earendil-works/pi/pull/5090) | 集成 NVIDIA NIM 为 OpenAI 兼容提供商，新增 `models.json` 支持。              | 新模型接入。 |
| [#5076](https://github.com/earendil-works/pi/pull/5076) | 实现 `--session-id` 显式会话命名，修复 #4874。                            | 会话管理优化。 |
| [#5088](https://github.com/earendil-works/pi/pull/5088) | 实验性工具调用分组功能，提升可读性。                                      | UI 改进。 |
| [#5068](https://github.com/earendil-works/pi/pull/5068) | 输入框与编辑器 Unicode 分词对齐，修复粘贴体验。                           | 输入一致性。 |
| [#5081](https://github.com/earendil-works/pi/pull/5081) | 添加 `--no-system-prompt-docs` 选项，减少冗余文档提示词。                  | 上下文优化。 |
| [#5072](https://github.com/earendil-works/pi/pull/5072) | `enabledModels` 保存到项目级而非全局，修复跨项目污染。                    | 配置隔离性。 |

---

## 5. 功能需求趋势
- **本地 LLM 集成**（llama.cpp/ollama）：[#3357](https://github.com/earendil-works/pi/issues/3357)
- **多 Agent 系统**：[#5077](https://github.com/earendil-works/pi/issues/5077)
- **终端兼容性**（Zellij/tmux）：[#3259](https://github.com/earendil-works/pi/issues/3259), [#5098](https://github.com/earendil-works/pi/issues/5098)
- **工具调用稳定性**（超时/分组）：[#5089](https://github.com/earendil-works/pi/issues/5089), [#5088](https://github.com/earendil-works/pi/pull/5088)
- **会话管理**（显式 ID 存储）：[#4874](https://github.com/earendil-works/pi/issues/4874), [#5076](https://github.com/earendil-works/pi/pull/5076)

---

## 6. 开发者关注点
- **性能与调试**：`PI_TIMING=1` 指标准确性 [#4829](https://github.com/earendil-works/pi/issues/4829)
- **工具链适配**：Bun 运行时扩展安装问题 [#4160](https://github.com/earendil-works/pi/issues/4160)
- **配置隔离**：`enabledModels` 项目级保存 [#5071](https://github.com/earendil-works/pi/pull/5071)
- **跨平台问题**：Windows API Key 解析 [#5095](https://github.com/earendil-works/pi/issues/5095)
- **扩展开发**：暴露完整工具定义 [#5085](https://github.com/earendil-works/pi/pull/5085)

--- 

**数据来源**：[GitHub earendil-works/pi](https://github.com/earendil-works/pi)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

---

## Qwen Code 社区动态日报（2026-05-28）

---

### 1. **今日速览**
- **v0.16.2** 发布，修复了 TypeScript 构建中残留输出文件导致的问题（[Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.2)）。
- 多个核心 PR 推进，包括 **MCP 服务桥接**、**上下文用量统计 API**、**压缩会话错误修复** 等。
- 社区活跃度高，共新增 **30+ Issues** 和 **50+ Pull Requests**，主要集中在 **工具链稳定性** 和 **终端集成体验** 优化。

---

### 2. **版本发布**
#### v0.16.2  
- **修复问题**：清理 `tsc --build` 前的残留输出文件，避免 TypeScript 编译错误（TS5055）。  
- **影响范围**：开发者环境构建流程。  
- [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.2)

---

### 3. **社区热点 Issues**

| # | Issue标题 | 重要性 & 社区反应 | 链接 |
|---|----------|------------------|------|
| **#4493** | Rider无法登录Qwen Code | OAuth 登录状态重定向问题，4 条评论，需阿里云 Token Plan 支持 | [#4493](https://github.com/QwenLM/qwen-code/issues/4493) |
| **#4317** | Google Auth 504 Gateway Time-out | 认证流程超时，影响用户登录体验 | [#4317](https://github.com/QwenLM/qwen-code/issues/4317) |
| **#4579** | Rewind时误报“压缩回合”错误 | 开发调试关键功能，误导性错误日志 | [#4579](https://github.com/QwenLM/qwen-code/issues/4579) |
| **#4452** | 安装 Microsoft Claude Code 插件失败 | 插件兼容性问题，3 条评论 | [#4452](https://github.com/QwenLM/qwen-code/issues/4452) |
| **#4566** | WinkTerm Agent API 集成提案 | 终端 SSH 会话 AI 协作需求，2 条评论 | [#4566](https://github.com/QwenLM/qwen-code/issues/4566) |
| **#4446** | `npm install` 生成无效 SDK 条目 | 依赖管理问题，NOTICES.txt 污染 | [#4446](https://github.com/QwenLM/qwen-code/issues/4446) |
| **#4561** | Windows 紧缩模式频繁闪屏 | 终端渲染性能问题，1 条评论 | [#4561](https://github.com/QwenLM/qwen-code/issues/4561) |
| **#4575** | Auto-mode与Auto-accept编辑指示器颜色相同 | UI 视觉混淆，1 条评论 | [#4575](https://github.com/QwenLM/qwen-code/issues/4575) |
| **#4568** | `@` 子模块文件补全失效 | Git 集成痛点，1 条评论 | [#4568](https://github.com/QwenLM/qwen-code/issues/4568) |
| **#4537** | CLI 被 `taskkill` 意外终止 | 安全策略缺陷，会话中断风险 | [#4537](https://github.com/QwenLM/qwen-code/issues/4537) |

---

### 4. **重要 PR 进展**

| # | PR标题 | 核心内容 | 链接 |
|---|--------|---------|------|
| **#4580** | Fix Rewind误报压缩错误 | 修复工具执行中用户消息导致UI计数错误 | [#4580](https://github.com/QwenLM/qwen-code/pull/4580) |
| **#4576** | 新增服务器端 `!` 命令执行 | 绕过LLM直接执行Shell命令，提升响应速度 | [#4576](https://github.com/QwenLM/qwen-code/pull/4576) |
| **#4563** | 提取DaemonWorkspaceService | 重构服务层，分离文件/认证/代理逻辑 | [#4563](https://github.com/QwenLM/qwen-code/pull/4563) |
| **#4570** | `/triage` 技能集成 | 自动化PR/Issue分类，统一工作流 | [#4570](https://github.com/QwenLM/qwen-code/pull/4570) |
| **#4556** | OpenTelemetry追踪提示生命周期 | 增强服务端请求链路监控 | [#4556](https://github.com/QwenLM/qwen-code/pull/4556) |
| **#4555** | 添加serve-bridge MCP Server | 使Qoder/Cursor/MCP客户端通过stdio连接Agent | [#4555](https://github.com/QwenLM/qwen-code/pull/4555) |
| **#4560** | JSON设置损坏警告对话框 | 自动恢复配置并提示用户 | [#4560](https://github.com/QwenLM/qwen-code/pull/4560) |
| **#4528** | 缺失用量数据仍允许压缩 | 保障会话压缩安全性 | [#4528](https://github.com/QwenLM/qwen-code/pull/4528) |
| **#4531** | 超大历史记录硬限制保护 | 防止请求超限崩溃 | [#4531](https://github.com/QwenLM/qwen-code/pull/4531) |
| **#4519** | 侧查询语言一致性 | 遵循用户设置的输出语言 | [#4519](https://github.com/QwenLM/qwen-code/pull/4519) |

---

### 5. **功能需求趋势**
- **IDE 深度集成**：  
  - 插件兼容性（如Claude Code）、终端API（WinkTerm）、MCP服务桥接（Cursor/Claude Desktop）是高频需求。  
- **安全与稳定性**：  
  - Shell命令执行权限控制（[#4093]）、`taskkill`意外终止问题（[#4537]）引发关注。  
- **多模态支持**：  
  - PNG图片在OpenAI接口中的格式兼容性问题（[#4513]）。  
- **成本透明化**：  
  - 新增token用量统计API（[#4564]），导出CSV/JSON功能。  

---

### 6. **开发者关注点**
- **构建与依赖管理**：  
  - `npm install`污染问题（[#4446]）和TypeScript残留文件（v0.16.2修复）。  
- **终端体验**：  
  - Windows闪屏（[#4561]）、命令补全失效（[#4568]）。  
- **调试友好性**：  
  - 错误日志误导性改进（[#4579]）、压缩会话保护（[#4531]）。  
- **扩展性**：  
  - 插件安装失败（[#4452]）和MCP服务桥接（[#4555]）推动生态扩展。  

--- 

**数据来源**：[GitHub仓库](https://github.com/QwenLM/qwen-code)

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*