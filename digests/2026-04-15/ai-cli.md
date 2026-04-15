# AI CLI 工具社区动态日报 2026-04-15

> 生成时间: 2026-04-15 00:27 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

**AI CLI 工具生态横向对比分析报告（2026-04-15）**

---

### 1. **生态全景**
AI CLI 工具正经历从“尝鲜”向“生产就绪”的关键转型。主流工具普遍强化了企业级控制能力（如权限钩子、MCP治理），但暴露出跨平台稳定性与成本控制的核心短板。社区对模型行为透明度、TUI体验及第三方服务集成的需求持续高涨，推动工具链向可观测性、安全边界和扩展性演进。

---

### 2. **各工具活跃度对比**

| 工具 | Issues 数 | PR 数 | Release 情况 |
|------|-----------|--------|----------------|
| **Claude Code** | 10+ | 10+ | v2.1.108（功能增强） |
| **OpenAI Codex** | 10+ | 10+ | 无新版本 |
| **Gemini CLI** | 10+ | 10+ | v0.39.0-preview.0（策略优化） |
| **GitHub Copilot CLI** | 10+ | 1~2 | v1.0.26（Bug修复） |
| **Kimi Code CLI** | 10+ | 10+ | v1.34.0（终端优化） |
| **OpenCode** | 10+ | 10+ | v1.4.4（认证/日志修复） |
| **Qwen Code** | 10+ | 10+ | v0.14.4-nightly（性能分析） |

> *注：所有工具均保持高频迭代节奏，其中 Claude Code、Kimi Code、OpenCode 发布频率较高*

---

### 3. **共同关注的功能方向**

| 需求领域 | 涉及工具 | 具体诉求 |
|----------|----------|----------|
| **模型行为可控性** | Claude Code, Kimi Code, OpenAI Codex | 显示完整思考链、限制子代理轮次、避免过度推理 |
| **MCP 工具链成熟度** | OpenAI Codex, GitHub Copilot CLI, Qwen Code | 进程回收、并发连接数扩展、安全沙箱 |
| **TUI 交互优化** | Claude Code, Gemini CLI, OpenCode | 输入框固定、滚动流畅性、键盘导航一致性 |
| **企业权限与安全** | OpenAI Codex, GitHub Copilot CLI, OpenCode | PreToolUse钩子、OAuth稳定性、skill粒度控制 |
| **IDE 集成体验** | Qwen Code, Kimi Code, GitHub Copilot CLI | 会话标签管理、自动滚动卡顿、VSCode插件兼容性 |

---

### 4. **差异化定位分析**

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|-----------|------------|------------|
| **Claude Code** | 开发者工作流深度集成、长会话记忆 | 专业开发者、DevOps工程师 | 强插件化、TUI优先、Bedrock/Vertex多平台支持 |
| **OpenAI Codex** | IDE原生集成、权限审计、生产环境管控 | 企业开发团队、安全敏感场景 | 基于VS Code扩展、强调`PermissionRequest`钩子机制 |
| **Gemini CLI** | 多模态交互（语音/文本）、AST感知代码操作 | 全栈开发者、研究型用户 | Google生态深度绑定、ACP协议适配 |
| **GitHub Copilot CLI** | Git协作增强、CI/CD友好 | GitHub生态用户、自动化流水线开发者 | 紧密耦合GitHub账户体系、侧重提交流程 |
| **Kimi Code CLI** | 终端效率极致优化、模型参数调优 | 命令行重度用户、效率追求者 | 极简TUI设计、突出thinking过程可视化 |
| **OpenCode** | 多云模型统一接入、技能权限细粒度控制 | 多云架构团队、内部工具链整合者 | 抽象提供商层、强调`permission.skill`模式规则 |
| **Qwen Code** | 免费额度透明化、启动性能极致优化 | 个人开发者、预算敏感用户 | 轻量化设计、突出启动速度与历史管理能力 |

---

### 5. **社区热度与成熟度**

- **最活跃社区**：**Claude Code**（Issue #46917获150赞）、**OpenCode**（OAuth问题讨论激烈）
- **最高速迭代**：**Kimi Code CLI**（每日PR更新频繁）、**Qwen Code**（nightly版本日更）
- **最稳定基线**：**GitHub Copilot CLI**（聚焦Bug修复而非新功能）
- **最具潜力增长**：**Gemini CLI**（语音输入等创新功能获高关注）

> *数据表明：头部工具已进入“功能完善+体验打磨”双轨并行阶段*

---

### 6. **值得关注的趋势信号**

#### 🔶 **行业趋势**
1. **成本控制成为核心痛点**：Claude Code缓存token暴增20K/请求、Qwen免费额度争议，反映用户对AI API开销敏感度飙升
2. **安全边界精细化**：7/7工具均在推进Pre/PostToolUse钩子或skill权限规则，企业级审计需求倒逼CLI工具内建安全能力
3. **终端体验军备竞赛**：输入框防丢失、滚动优化、快捷键支持等TUI细节成为标配竞争点，预示CLI将取代部分GUI场景
4. **MCP标准化加速**：各工具陆续支持MCP协议，但并发连接数限制（Qwen仅2个）暴露实现缺陷，生态碎片化仍存

#### 💡 **开发者行动建议**
- **优先评估模型计费策略**：选择提供用量监控（如Claude Code recap）、支持细粒度缓存控制的工具
- **重视跨平台兼容性测试**：Windows路径处理、SSH环境异常（Gemini CLI）、WSL残留文件等问题频发，需纳入CI覆盖
- **关注钩子系统开放性**：PostTurn Hook（Qwen）、PermissionRequest（Codex）等机制决定未来扩展上限
- **警惕“免费陷阱”**：Qwen/Gemini等工具免费额度突变风险显著，生产环境建议提前规划付费方案

--- 

*本报告基于7大主流AI CLI工具当日社区数据生成，供技术决策者与开发者参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（2026-04-15）**

---

### 1. **热门 Skills 排行**
| PR # | Skill 名称 | 功能亮点 | 讨论焦点 | 状态 |
|------|-----------|---------|---------|------|
| **[#514](https://github.com/anthropics/skills/pull/514)** | document-typography | 自动修复 AI 生成文档中的排版问题（孤行、页眉滞留、编号错位） | 强调“每个文档都会受影响”，用户急需基础排版保障 | 🟢 OPEN |
| **[#83](https://github.com/anthropics/skills/pull/83)** | skill-quality-analyzer & skill-security-analyzer | 元技能分析工具，评估 Skill 结构与安全性 | 社区关注 Skill 治理与标准化流程 | 🟢 OPEN |
| **[#210](https://github.com/anthropics/skills/pull/210)** | frontend-design | 提升前端设计指导的清晰度与可操作性 | 讨论如何使指令更具体、可执行 | 🟢 OPEN |
| **[#486](https://github.com/anthropics/skills/pull/486)** | odt | 支持 OpenDocument 格式文件创建、填充与 HTML 转换 | 填补开源办公文档处理空白 | 🟢 OPEN |
| **[#541](https://github.com/anthropics/skills/pull/541)** | docx (fix) | 修复 DOCX 中添加追踪更改时与书签的 ID 冲突问题 | 解决文档损坏的技术细节 | 🟢 OPEN |
| **[#723](https://github.com/anthropics/skills/pull/723)** | testing-patterns | 全栈测试模式库（单元测试、React 组件测试、集成测试） | 企业级开发流程标准化需求强烈 | 🟢 OPEN |

> 注：多数高关注度 Skill 集中于**文档质量优化**、**企业级工作流支持**及**开发者工具链完善**。

---

### 2. **社区需求趋势**
从 Issues 提炼三大方向：
- **文档自动化增强** (#556, #189)：用户反映 `run_eval.py` 无法触发 Skill，暴露评测机制缺陷；同时呼吁统一 `document-skills` 与 `example-skills` 内容以避免重复加载。
- **安全与权限治理** (#492, #532)：社区担忧社区 Skill 使用 `anthropic/` 命名空间造成信任边界风险；企业 SSO 用户无法使用依赖 API Key 的技能创建工具。
- **跨平台/生态集成** (#29, #16, #868)：Bedrock 兼容性、MCP 协议暴露、PPT 编辑功能缺失等需求频发，显示用户对多平台部署与开放生态的期待。

---

### 3. **高潜力待合并 Skills**
- **testing-patterns** (#723)：完整测试体系覆盖，技术价值高，近期活跃更新。
- **shodh-memory** (#154)：持久化上下文记忆系统，解决会话间知识断裂痛点。
- **x402 BSV auth + micropayment** (#374)：去中心化支付集成，具 Web3 前沿性。
- **masonry-generate-image-and-videos** (#335)：AI 多媒体生成能力扩展，契合内容创作趋势。

这些 Skill 均具备明确应用场景与近期迭代记录，极可能于 Q2 落地。

---

### 4. **Skills 生态洞察**
> **当前社区最集中的诉求是：提升 Claude Code 在真实工作场景中的“端到端自动化能力”，尤其聚焦于文档输出质量、企业级流程集成与开发者工具链闭环。**

--- 

*数据来源：GitHub anthropics/skills 仓库（截至 2026-04-15）*

---

**Claude Code 社区动态日报（2026年4月15日）**

---

### **今日速览**
Claude Code 发布 v2.1.108，新增 prompt caching 环境变量控制与 recap 功能；同时多个关键 bug 引发关注，包括 API 超时、认证粘贴失效及成本激增等问题。社区对模型行为退化与 TUI 体验优化持续反馈强烈。

---

### **版本发布**

**v2.1.108（2026-04-15）**
- 新增 `ENABLE_PROMPT_CACHING_1H` 和 `FORCE_PROMPT_CACHING_5M` 环境变量，支持细粒度缓存策略配置（Bedrock/Vertex/Foundry 等平台兼容）
- 引入 **recap 功能**，在长会话中提供上下文摘要，提升多轮交互连续性
- v2.1.107 更新：优化长时间操作中的“思考中”提示显示时机

> 🔗 [Release v2.1.108](https://github.com/anthropics/claude-code/releases/tag/v2.1.108)

---

### **社区热点 Issues（Top 10）**

| 排名 | Issue # | 主题 | 重要性 | 社区反应 |
|------|--------|------|--------|----------|
| 1 | [#46917](https://github.com/anthropics/claude-code/issues/46917) | v2.1.100+ 缓存创建 token 暴增 ~20K/请求 | ⭐⭐⭐⭐⭐ | 👍150 | 严重影响成本控制，被标记为“非账单问题”，属服务端路由异常 |
| 2 | [#36151](https://github.com/anthropics/claude-code/issues/36151) | Claude Mobile 多账户切换（无共享邮箱） | ⭐⭐⭐⭐ | 👍101 | 高频需求，涉及移动端用户体验扩展 |
| 3 | [#46987](https://github.com/anthropics/claude-code/issues/46987) | Stream idle timeout 导致响应中断 | ⭐⭐⭐⭐ | 👍61 | MacOS 用户普遍遭遇，影响稳定性 |
| 4 | [#28817](https://github.com/anthropics/claude-code/issues/28817) | Pro 计划下远程管控仍不可用 | ⭐⭐⭐⭐ | 👍60 | 认证后功能缺失，疑似权限逻辑缺陷 |
| 5 | [#47669](https://github.com/anthropics/claude-code/issues/47669) | Linux 平台粘贴授权码失效 | ⭐⭐⭐⭐ | 👍46 | 登录流程阻塞，影响新用户接入 |
| 6 | [#13591](https://github.com/anthropics/claude-code/issues/13591) | 输入框固定模式（滚动时保持可见） | ⭐⭐⭐ | 👍36 | UX 体验优化类高票请求 |
| 7 | [#47648](https://github.com/anthropics/claude-code/issues/47648) | 粘贴 auth token 失败导致无法认证 | ⭐⭐⭐ | 👍21 | 与 #47669 类似，回归性问题 |
| 8 | [#45959](https://github.com/anthropics/claude-code/issues/45959) | 内容过滤器误判神学与牧灵写作 | ⭐⭐ | 👍0 | 合规性争议，需人工审核介入 |
| 9 | [#47298](https://github.com/anthropics/claude-code/issues/47298) | OpenRouter 点号命名模型识别失败 | ⭐⭐ | 👍0 | 第三方服务集成兼容性缺陷 |
| 10 | [#48188](https://github.com/anthropics/claude-code/issues/48188) | Plan Mode 退出后无法重新进入或切换计划 | ⭐⭐ | 👍0 | 工作流中断痛点，影响复杂任务管理 |

---

### **重要 PR 进展（Top 10）**

| 排名 | PR # | 功能/修复内容 | 状态 |
|------|-----|----------------|------|
| 1 | [#48151](https://github.com/anthropics/claude-code/pull/48151) | 修复 bare repo + worktree 场景下 `--resume` 无法发现会话的问题 | ✅ 已合并 |
| 2 | [#27395](https://github.com/anthropics/claude-code/pull/27395) | 添加 bash/zsh/fish 命令行自动补全脚本 | 🚀 待 review |
| 3 | [#23853](https://github.com/anthropics/claude-code/pull/23853) | Dockerfile 替换 deprecated npm install 为 curl 安装方式 | 🚀 待 review |
| 4 | [#47830](https://github.com/anthropics/claude-code/pull/47830) | 新增 subagent-cleanup 插件，终止孤儿子代理进程 | 🚀 待 review |
| 5 | [#47760](https://github.com/anthropics/claude-code/pull/47760) | 官方 usage-monitor 插件：菜单栏用量监控（含 macOS SwiftBar 安装） | 🚀 待 review |
| 6 | [#47759](https://github.com/anthropics/claude-code/pull/47759) | notify-on-complete 插件：任务完成通知（声音/弹窗） | 🚀 待 review |
| 7 | [#39148](https://github.com/anthropics/claude-code/pull/39148) | preserve-session 插件：路径无关会话历史保留 | 🚀 待 review |
| 8 | [#47836](https://github.com/anthropics/claude-code/pull/47836) | 对齐插件钩子验证器与 hooks.json 格式 | 🚀 待 review |
| 9 | [#46095](https://github.com/anthropics/claude-code/pull/46095) | （重复标题）Veriflow immune system 合同集成 | 🚀 待 review |
| 10 | [#41447](https://github.com/anthropics/claude-code/pull/41447) | 开源 Claude Code 主仓库（关闭多个遗留 issue） | 🚀 长期项目 |

> 注：部分 PR 描述重复或为空，可能涉及内部流程或模板填充

---

### **功能需求趋势**

从近期 Issues 分析，社区最关注的方向包括：

1. **成本控制与透明化**  
   - 缓存 token 计量异常（#46917）、计费模型变化（#46185）成为高频投诉点  
   - 期望提供更精细的用量监控工具（#47760 即为此方向回应）

2. **TUI 用户体验优化**  
   - 输入框固定（#13591）、导航流畅性（#48190）、屏幕适配（#48192）等界面交互改进需求集中  
   - 反映用户对 CLI 长期使用的疲劳感上升

3. **多平台一致性保障**  
   - Linux/macOS/Windows 各平台均出现特定 bug（认证、MCP、TUI），凸显跨平台测试覆盖不足  
   - Chrome 扩展与本地桥接问题持续存在（#24935, #47808）

4. **计划与记忆机制增强**  
   - Plan Mode 不可逆退出（#48188）、内存规则被忽略（#48136）表明核心工作流可靠性待提升  
   - 自动命名混乱（#48129）暴露元数据设计缺陷

5. **第三方服务深度集成**  
   - OpenRouter 模型命名不匹配（#47298）、Telegram 插件误加载（#38098）显示生态扩展需标准化接口

---

### **开发者关注点总结**

- **认证流程脆弱**：粘贴授权码在主流平台均失败，严重阻碍部署自动化
- **模型行为不可控**：Opus 4.6 在高压任务下忽略预设规则，导致生产环境级联故障
- **成本黑箱化**：相同请求 token 消耗突增，缺乏调试手段（如 User-Agent 路由变更未告知）
- **文档与预期不符**：Remote Control 功能宣传与实际可用状态矛盾（#28817）
- **插件系统健壮性不足**：LSP 多实例冲突、子代理残留等问题频发，影响开发效率

> 📌 **建议行动项**：优先处理 #46917（成本异常）、#47669/#47648（认证阻断），并推进 shell completion（#27395）提升开发者体验。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026-04-15）**

---

### 今日速览
Codex 在今日持续推进权限控制与 MCP 工具链优化，多个 PR 围绕 `PermissionRequest` 钩子机制展开，增强安全审计能力。同时，Windows 平台沙箱与资源泄漏问题引发广泛关注，社区反馈集中。

---

### 版本发布
无新版本发布。

---

### 社区热点 Issues

1. **#17809 Context compaction fails with unknown parameter 'prompt_cache_retention'**  
   [链接](https://github.com/openai/codex/issues/17809) | 评论数：37 | 👍：56  
   Mac 客户端在上下文压缩时因参数不兼容报错，影响会话恢复功能。该问题已标记为已关闭，但暴露出 CLI 与 App 版本协同问题，引发用户对向后兼容性的担忧。

2. **#16231 High CPU usage on macOS after VS Code extension update**  
   [链接](https://github.com/openai/codex/issues/16231) | 评论数：27 | 👍：49  
   M5 Pro 机型上更新扩展后出现持续高负载，疑似渲染线程未释放。开发者强烈建议回滚至旧版，反映新版本稳定性风险较高。

3. **#12491 MCP child processes not reaped — 1300+ zombies, 37GB memory leak**  
   [链接](https://github.com/openai/codex/issues/12491) | 评论数：12 | 👍：3  
   Codex.app GUI 中 MCP 子进程未正确回收，导致内存膨胀。此为严重生产环境问题，尤其影响长时间运行任务。

4. **#17624 Review tab stuck on "Loading diff" due to malformed Windows path**  
   [链接](https://github.com/openai/codex/issues/17624) | 评论数：10 | 👍：9  
   Windows 下路径格式错误（如 `/F:/...`）导致 Git diff 解析失败，Review 界面卡死。暴露跨平台路径处理缺陷。

5. **#17832 Playwright MCP stdio processes still leak after fix**  
   [链接](https://github.com/openai/codex/issues/17832) | 评论数：3 | 👍：0  
   尽管 #16895 声称修复，Playwright MCP 仍存在 213 个僵尸进程，RSS 达 13.6 GB。回归问题未根治。

6. **#16088 WSL 模式下创建空 .codex 文件残留**  
   [链接](https://github.com/openai/codex/issues/16088) | 评论数：15 | 👍：53  
   在 WSL 环境中启动项目未初始化 .codex 目录时，留下空配置文件，干扰用户操作。获大量赞同，属基础体验缺陷。

7. **#17767 High CPU in Antigravity IDE with empty project**  
   [链接](https://github.com/openai/codex/issues/17767) | 评论数：7 | 👍：1  
   即使无代码，Codex 扩展仍导致 Google Antigravity 过热，表明轻载场景亦存在资源泄露。

8. **#16732 ApplyPatchHandler 缺失 PreToolUse/PostToolUse 事件**  
   [链接](https://github.com/openai/codex/issues/16732) | 评论数：4 | 👍：6  
   关键钩子事件未覆盖文件修改工具，阻碍自动化质量门禁实施，影响企业级集成。

9. **#14754 Request PreToolUse/PostToolUse hooks for code quality enforcement**  
   [链接](https://github.com/openai/codex/issues/14754) | 评论数：9 | 👍：6  
   明确要求补充工具调用前后钩子，以支持 CI/CD 流程中的安全检查，体现开发者对可观测性与管控的迫切需求。

10. **#12773 Multi-Window Support for macOS**  
    [链接](https://github.com/openai/codex/issues/12773) | 评论数：7 | 👍：16  
    用户呼吁多窗口独立实例，提升多项目管理效率，获高票支持，反映桌面端交互体验亟待增强。

---

### 重要 PR 进展

1. **#17858 Codex/permission request updated input**  
   [链接](https://github.com/openai/codex/pull/17858)  
   新增 `decision.updatedInput` 字段支持，允许钩子在授权前修改工具输入参数，强化运行时干预能力。

2. **#17563 Add PermissionRequest hooks support**  
   [链接](https://github.com/openai/codex/pull/17563)  
   正式引入 `PermissionRequest` 钩子机制，统一 shell、网络、文件操作等权限提示流的拦截与决策入口。

3. **#17739 Add permission suggestions to PermissionRequest hooks**  
   [链接](https://github.com/openai/codex/pull/17739)  
   在钩子输入中增加 `permission_suggestions`，仅基于规则生成命令前缀建议，提升安全策略一致性。

4. **#17850 Render high-risk MCP elicitation warnings in TUI**  
   [链接](https://github.com/openai/codex/pull/17850)  
   高危操作提示现支持副标题与高亮红字显示，改善终端用户体验，避免误执行危险指令。

5. **#17831 Add resource uri meta to tool call item**  
   [链接](https://github.com/openai/codex/pull/17831)  
   在工具调用项中嵌入资源 URI 元数据，实现 MCP 服务端预取资源优化，提升响应速度。

6. **#17854 Update ToolSearch to be enabled by default**  
   [链接](https://github.com/openai/codex/pull/17854)  
   `Feature::ToolSearch` 由实验态升级为默认启用，扩大搜索工具覆盖率，增强智能编码辅助能力。

7. **#17791 Stabilize Windows and integration tests**  
   [链接](https://github.com/openai/codex/pull/17791)  
   修复若干偶发性测试失败，提升 Windows 平台构建可靠性，减少 CI 不稳定因素。

8. **#17852 app-server: refactor connection state**  
   [链接](https://github.com/openai/codex/pull/17852)  
   重构连接状态管理模型，解耦出站就绪信号，提升并发处理能力与代码可维护性。

9. **#17836 Add tmux-aware OSC 9 notifications**  
   [链接](https://github.com/openai/codex/pull/17836)  
   支持 tmux 环境下终端通知透传，确保嵌套会话中仍能接收 Codex 操作提醒。

10. **#17848 Add security boundaries reference in SECURITY.md**  
    [链接](https://github.com/openai/codex/pull/17848)  
    新增安全边界说明文档，引导用户查阅沙箱、审批机制等核心安全设计，完善透明度建设。

---

### 功能需求趋势

从 Issue 分析可见，社区当前关注重点集中在以下方向：

- **MCP 工具链成熟度**：进程泄漏、资源管理、跨工作区支持成为高频痛点；
- **IDE 集成稳定性**：VS Code / Antigravity 等平台均报告 CPU/GPU 异常占用，需优化渲染与通信开销；
- **权限与安全控制**：钩子机制（特别是 `PreToolUse`/`PostToolUse`）被广泛期待用于企业级审计与阻断；
- **跨平台一致性**：Windows 路径处理、WSL 兼容性、macOS 多窗口等功能亟需统一标准；
- **终端体验优化**：通知系统、TUI 渲染性能、会话恢复等直接影响日常使用流畅度。

---

### 开发者关注点

主要痛点包括：

- **性能开销失控**：尤其在图形化界面（App/TUI）中，动画或渲染逻辑导致显著能耗上升；
- **MCP 生命周期管理缺陷**：子进程未及时清理造成累积式资源耗尽；
- **Windows 平台适配不足**：路径转义、ACL 设置、WSL 交互等问题频发；
- **钩子生态碎片化**：现有 `SessionStart`/`Stop` 不足以支撑细粒度控制，亟需补充工具级事件；
- **版本升级风险**：新发布常伴随回归问题（如 context compaction），缺乏充分测试验证。

> 数据来源：GitHub openai/codex 仓库，截至 2026-04-15。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报 - 2026年4月15日**

---

### 1. 今日速览
Gemini CLI 发布了 v0.39.0-preview.0，重点优化了策略优先级逻辑并新增内存使用测试工具。与此同时，社区持续关注权限持久化、SSH 兼容性等核心体验问题，多个高优先级 Issue 获得维护者响应。

---

### 2. 版本发布

#### v0.39.0-preview.0
- **refactor(plan)**: 简化政策优先级并整合只读规则（[#24849](https://github.com/google-gemini/gemini-cli/pull/24849)）
- **feat(test-utils)**: 添加内存占用集成测试框架，提升长期运行稳定性验证能力（[#24876](https://github.com/google-gemini/gemini-cli/pull/24876)）

> *注：v0.38.0 已于昨日发布，主要修复 slash 命令刷新及 README 链接更新。*

---

### 3. 社区热点 Issues

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| **[#25323](https://github.com/google-gemini/gemini-cli/issues/25323)** | RipGrep 下载失败不应阻塞启动 | ⭐⭐⭐⭐ | 用户反馈启动卡顿严重，建议快速失败机制 |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | AST 感知文件操作影响评估 | ⭐⭐⭐⭐ | 维护者主导，探索代码理解精度提升路径 |
| **[#24916](https://github.com/google-gemini/gemini-cli/issues/24916)** | 重复请求文件权限 | ⭐⭐⭐ | 用户体验痛点，需解决权限记忆失效问题 |
| **[#24175](https://github.com/google-gemini/gemini-cli/issues/24175)** | 实时语音模式实现 | ⭐⭐⭐ | 用户强烈需求自然交互方式 |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | Shell 命令执行后卡住“等待输入” | ⭐⭐⭐⭐ | 维护者标记为 urgent，影响自动化流程可靠性 |
| **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** | 模型生成临时脚本位置随机 | ⭐⭐⭐ | 工作流污染问题，需约束模型输出路径 |
| **[#22819](https://github.com/google-gemini/gemini-cli/issues/22819)** | 全局 vs 项目级记忆路由设计 | ⭐⭐⭐⭐ | 获 👍2，反映多项目协作场景关键需求 |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | 子代理 MAX_TURNS 中断未正确上报 | ⭐⭐⭐⭐ | 高优先级 P1，隐藏任务失败状态存在风险 |
| **[#24470](https://github.com/google-gemini/gemini-cli/issues/24470)** | 长对话滚动闪烁 & 滚动条跳动 | ⭐⭐⭐ | UI 稳定性问题，影响阅读流畅性 |
| **[#23823](https://github.com/google-gemini/gemini-cli/issues/23823)** | 升级内部工具至 Gemini 3.1 Flash Lite | ⭐⭐⭐⭐ | 获 👍2，支持最新模型能力迭代 |

---

### 4. 重要 PR 进展

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| **[#25187](https://github.com/google-gemini/gemini-cli/pull/25187)** | 修复 OpenSSL 3.x SSL 错误重试 | 核心修复 | 扩展重试列表以兼容新版 TLS 错误码 |
| **[#18499](https://github.com/google-gemini/gemini-cli/pull/18499)** | 语音输入插件架构（Gemini/Whisper） | 功能增强 | 零安装转录后端 + 本地 Whisper 支持 |
| **[#25240](https://github.com/google-gemini/gemini-cli/pull/25240)** | 迁移至 `@typescript/native-preview` | 基建优化 | TypeScript 编译性能提升 ~5.6x |
| **[#24736](https://github.com/google-gemini/gemini-cli/pull/24736)** | AgentHistory 联合查找压缩 | 性能优化 | 引入语义聚类替代简单截断，降低 token 开销 |
| **[#24664](https://github.com/google-gemini/gemini-cli/pull/24664)** | ACP 主机输入请求支持 | 协议适配 | 允许外部客户端处理 `ask_user` 和 `exit_plan_mode` |
| **[#25383](https://github.com/google-gemini/gemini-cli/pull/25383)** | 工作区相对路径安全解析工具 | 安全增强 | 防止路径穿越攻击，保障扩展沙箱安全 |
| **[#25090](https://github.com/google-gemini/gemini-cli/pull/25090)** | 支持 .mdx 文档检索 | 功能扩展 | 完善内部文档覆盖格式 |
| **[#25412](https://github.com/google-gemini/gemini-cli/pull/25412)** | 使用活跃键绑定配置显示快捷键 | UX 修复 | 解决自定义快捷键不生效的展示问题 |
| **[#25072](https://github.com/google-gemini/gemini-cli/pull/25072)** | 收藏模型与循环切换 | 用户偏好 | 支持常用模型快速访问（待合并） |
| **[#25384](https://github.com/google-gemini/gemini-cli/pull/25384)** | JIT 计划目录动态供给 | 架构演进 | 按需创建扩展目录，提升启动效率 |

---

### 5. 功能需求趋势

从近期 Issue 分析，社区最关注的三大方向为：

1. **智能交互增强**
   - 语音输入（#24175）、AST-aware 代码导航（#22745）成为高频诉求
2. **稳定性与性能优化**
   - 启动速度（#25323）、内存管理（#24736）、UI 渲染流畅度（#24470）持续被强调
3. **企业级可配置性**
   - 权限持久化、全局/项目记忆分离（#22819）、Telemetry 细粒度控制（#25343）体现对生产环境适配的需求

---

### 6. 开发者关注点

- **权限系统不可靠**：Windows 用户报告权限“记住”机制频繁失效（#24916），影响自动化流程。
- **SSH 环境异常**：远程会话下终端显示错乱（#24202），需增强环境检测能力（#24546 已提需求）。
- **子代理行为不可控**：模型生成分散的临时脚本（#23571）和误用高危命令（#22672）暴露安全边界缺失。
- **测试覆盖率不足**：组件级行为评估（#24353）被多次提及，现有 76 项评测难以覆盖复杂场景。

--- 

*数据更新时间：2026-04-15T00:00:00Z*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报（2026-04-15）**

---

### 1. **今日速览**
GitHub Copilot CLI 在昨日发布 v1.0.26 版本，主要修复了 Esc 键响应、find -exec 目录访问提示及会话分割导致工具调用失败等问题；同时新增插件环境变量支持。与此同时，社区集中反馈企业版模型访问策略误报、授权异常及 MCP 服务器连接故障等高频问题。

---

### 2. **版本发布**
#### ✅ v1.0.26（2026-04-14）
- **修复项**：
  - Escape 键可可靠关闭 `ask_user` 和 elicitation 提示框，避免卡死（[#2681](https://github.com/github/copilot-cli/issues/2681)）。
  - 消除 `find -exec` 内部参数误触发目录访问提示的问题。
  - 解决 agent 会话因上下文压缩跨工具调用而崩溃的问题。
- **增强项**：
  - 同步提示中的会话范围选择器更突出且支持左右方向键导航。
- **新增项**：
  - 插件钩子（plugin hooks）获得 `PLUGIN_ROOT`、`COPILOT_PLUGIN_ROOT` 和 `CLAUDE_PLUGIN_ROOT` 环境变量，用于定位插件安装路径（[#2693](https://github.com/github/copilot-cli/pull/2693)）。

---

### 3. **社区热点 Issues**
| Issue | 主题 | 重要性 | 社区反应 |
|------|------|--------|----------|
| [#2686](https://github.com/github/copilot-cli/issues/2686) | Pro Trial 用户遭遇“Server failed to connect”错误 | 高 | 24 评论，8👍 | Active Copilot Pro 订阅用户无法使用 `/models` 命令，显示策略拒绝，但账单页确认订阅有效，严重影响试用体验。 |
| [#1595](https://github.com/github/copilot-cli/issues/1595) | 企业版模型检索间歇性被策略拦截 | 高 | 26 评论，9👍 | 企业账户下所有模型不可见，尽管权限正常，疑为策略逻辑缺陷。 |
| [#2684](https://github.com/github/copilot-cli/issues/2684) | 已登录仍提示“Authorization error, you may need to run /login” | 中高 | 12 评论，0👍 | 多用户报告认证状态不一致，疑似 token 刷新机制失效。 |
| [#1164](https://github.com/github/copilot-cli/issues/1164) | Windows 11 新版 CLI 启动即退出无输出 | 中 | 11 评论，3👍 | 从 v0.0.368 起在 Win11 上无法运行，仅旧版可用，影响广泛部署。 |
| [#2698](https://github.com/github/copilot-cli/issues/2698) | Pro Trial 临时暂停导致模型访问混淆 | 中 | 6 评论，1👍 | 用户因服务短暂中断收到“access denied”，但实际为系统临时状态，提示不够清晰。 |
| [#947](https://github.com/github/copilot-cli/issues/947) | 请求添加 auto_compact 配置以禁用自动对话压缩 | 中 | 5 评论，0👍 | 要求保留完整对话历史供审计或神经模型分析，当前无开关控制。 |
| [#1139](https://github.com/github/copilot-cli/issues/1139) | Hook 不支持注入命令输出到 LLM 上下文（对比 Claude Code） | 中 | 5 评论，5👍 | 功能缺失阻碍动态上下文加载，如 Gas Town 工作流。 |
| [#13](https://github.com/github/copilot-cli/issues/13) | 建议支持 vi/vim 输入模式 | 高 | 4 评论，48👍 | 获最多点赞，反映终端用户对高效编辑的需求强烈。 |
| [#2413](https://github.com/github/copilot-cli/issues/2413) | X11 主选择粘贴（中键粘贴）自 v1.0.11 起失效 | 中 | 4 评论，0👍 | Linux 用户在 SSH+X11 环境下基本输入方式受损。 |
| [#2188](https://github.com/github/copilot-cli/issues/2188) | AI 不遵循指令（如忽略 Co-author trailer） | 低 | 4 评论，0👍 | 指令文件未被严格执行，影响自动化提交流程一致性。 |

---

### 4. **重要 PR 进展**
| PR | 作者 | 内容摘要 | 状态 |
|----|------|---------|------|
| [#2693](https://github.com/github/copilot-cli/pull/2693) | qwfcw79ryj-alt | 为插件钩子添加 PLUGIN_ROOT 等环境变量 | 合并至 v1.0.26 |
| [#2713](https://github.com/github/copilot-cli/pull/2713) | qwfcw79ryj-alt | 创建 my-agent.agent.md | 待审核 |

> 注：过去24小时仅1个PR更新，其余PR暂无新进展。

---

### 5. **功能需求趋势**
从近期 Issue 提炼出三大方向：
1. **终端交互优化**：Vim 模式支持（#13）、中键粘贴（#2413）、键盘导航改进（#2693）。
2. **企业级稳定性**：Pro/Trial 权限校验准确性（#2686, #2698）、企业模型访问策略（#1595）。
3. **MCP 与扩展能力**：显式调用特定 MCP 工具（#2690）、Azure DevOps 支持（#2711）、Hook 上下文注入（#1139）。

---

### 6. **开发者关注点**
- **认证与权限混乱**：已登录用户频繁收到未授权提示，影响可信度。
- **跨平台兼容性差**：Windows 11 新版本启动崩溃，Linux 中 X11 粘贴失效。
- **缺乏细粒度控制**：无法禁用自动压缩、禁止静默重写命令（#2643），限制高级用例。
- **模型支持滞后**：GPT-4o（#2377）、Opus 4.5（#2661）等功能性模型在 CLI 中不可用。

--- 

*数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，遵照您的要求，以下是根据提供的 GitHub 数据生成的 Kimi Code CLI 社区动态日报。

---

### **Kimi Code CLI 社区动态日报 - 2026年4月15日**

**今日速览：**
Kimi Code CLI 发布了 1.34.0 版本，主要修复了终端崩溃问题和优化了 diff 高亮显示。社区中关于新版本模型 k2.6-code-preview 的“超长思考”问题引发了大量讨论和 bug 反馈，成为当前最热门的话题。同时，用户对于配置化和界面改进的需求也十分活跃。

---

#### **1. 版本发布**

*   **v1.34.0 (2026-04-14)**
    *   **更新内容：**
        *   **文档更新:** 更新了英文和中文文档，介绍了新功能及工具变更。
        *   **修复(diff):** 修复了内联高亮偏移与 Tab 扩展文本不一致的问题。
        *   **功能(shell):** 新增了 `show_t` 功能（具体细节需查阅 PR #1872）。
    *   [查看 Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/v1.34.0)

---

#### **2. 社区热点 Issues**

以下 Issue 在过去24小时内获得较多关注：

1.  **[#1864] Please display the full thinking traces in Kimi CLI**
    *   **热度:** ⭐️ 9 👍
    *   **摘要:** 用户强烈请求在 Kimi CLI 中显示完整的“思考过程”，认为其对于理解模型推理至关重要。这直接关系到用户对模型行为透明度的核心诉求。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1864)

2.  **[#1865] thinking的过程为什么没了？这不纯纯负优化吗**
    *   **热度:** ⭐️ 1 👍 (新发布)
    *   **摘要:** 用户抱怨在升级后，关键的“思考过程”不再显示，认为这是一个纯粹的负面优化，降低了使用时的“安全感”。此问题与 Issue #1864 高度相关。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1865)

3.  **[#1859] 为什么 thinking 过程了没** (已关闭)
    *   **摘要:** 同样反映“思考过程”消失的问题，最终已被标记为已解决。这表明开发团队已注意到该问题并着手处理。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1859)

4.  **[#1874] 关于k2.6-code-preview的思考长度问题**
    *   **热度:** ⭐️ 0 👍 (新发布)
    *   **摘要:** 此 Issue 是社区对 k2.6-code-preview 模型最激烈的反馈之一。用户抱怨其“思考轮数”和“token消耗”过高，导致工作流中断，认为这是无意义的过度思考，严重影响了效率。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1874)

5.  **[#1879] Feature request: configurable colors to distinguish user messages from assistant replies**
    *   **热度:** ⭐️ 0 👍 (新发布)
    *   **摘要:** 一个实用的 UI/UX 改进建议，请求允许用户自定义终端中用户消息和助手回复的颜色，以提升长会话中的视觉辨识度。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1879)

6.  **[#1878] Context compaction picks wrong problem from shared workspace filesystem**
    *   **热度:** ⭐️ 0 👍 (新发布)
    *   **摘要:** 报告了一个关键 bug，即上下文压缩器（Context Compaction）错误地从共享工作区文件系统中选择问题，导致会话摘要不准确。这对于多项目管理是一个严重问题。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1878)

7.  **[#1877] VS Code 插件：紧凑模式下 thinking 块无法展开查看完整内**
    *   **热度:** ⭐️ 0 👍 (新发布)
    *   **摘要:** 指出 VS Code 插件在紧凑模式下，thinking 块的展开功能存在缺陷，影响用户体验。这反映了 IDE 集成方面的持续痛点。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1877)

8.  **[#1869] Emacs-style keybindings in plan review is not working**
    *   **热度:** ⭐️ 0 👍 (新发布)
    *   **摘要:** 报告了计划审查（Plan Review）功能中 Emacs 风格的快捷键绑定失效的问题，对于习惯特定编辑器的用户来说是个障碍。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1869)

9.  **[#1867] --yolo should not auto-approve plans in Plan Mode; separate tool approval from plan review**
    *   **热度:** ⭐️ 0 👍 (新发布)
    *   **摘要:** 提出了一个重要的安全/交互设计建议，请求将 `--yolo` 模式下的自动审批逻辑进行分离，避免在计划模式下未经确认就执行高风险操作。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1867)

10. **[#1866] Git仓库中带有中文UTF8文件名时，使用@搜索文件，输入第三个字符后会报错**
    *   **热度:** ⭐️ 0 👍 (新发布)
    *   **摘要:** 暴露了在处理包含非 ASCII 字符（如中文 UTF-8 文件名）的 Git 仓库时，文件搜索功能的不稳定性，属于一个具体的编码或路径处理 bug。
    *   [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1866)

---

#### **3. 重要 PR 进展**

以下 Pull Request 在过去24小时内有显著更新：

1.  **[#1876] feat(soul): register /btw slash command in soul-level registry**
    *   **作者:** LeonEthan | **状态:** 🚀 Open
    *   **摘要:** 此 PR 将 `/btw` 斜杠命令注册到 soul 级别，使其在所有执行模式（不仅是交互式 shell）下都可用。这是一个增强通用性和功能性的改动。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1876)

2.  **[#1875] chore: bump kimi-cli 1.34.0**
    *   **作者:** RealKai42 | **状态:** ✅ Closed
    *   **摘要:** 此 PR 负责将 `kimi-cli` 和 `kimi-code` 的版本号正式更新到 **1.34.0**，标志着新版本已合并到主分支。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1875)

3.  **[#1871] fix(background): keep cancelled task strong reference until runner cleans up**
    *   **作者:** RealKai42 | **状态:** ✅ Closed
    *   **摘要:** 修复了一个后台任务管理器的严重 bug：在取消任务前过早释放引用，导致 Python 垃圾回收机制错误地清理了仍在运行的任务，从而引发异常和终端冻结。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1871)

4.  **[#1872] feat(shell): add show_thinking_stream config and minor UX fixes**
    *   **作者:** RealKai42 | **状态:** ✅ Closed
    *   **摘要:** 此 PR 引入了新的 `show_thinking_stream` 配置选项，允许用户控制是否在流式输出中显示“思考”指示器。同时附带了一些小的用户体验修复。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1872)

5.  **[#1868] feat(ui): show live and average tokens per second in shell UI**
    *   **作者:** cdhcrs | **状态:** 🚀 Open
    *   **摘要:** 一个新的 UI 增强功能，计划在 shell 用户界面中实时显示 token 每秒生成速度（TPS），并在回合结束时显示平均 TPS，为用户提供更直观的模型响应性能反馈。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1868)

6.  **[#1870] docs(config): clarify quoted TOML keys for dotted model names**
    *   **作者:** yongtenglei | **状态:** 🚀 Open
    *   **摘要:** 此 PR 旨在澄清配置文档中关于包含点（`.`）的键的用法，强调在使用点分隔的模型名称时，必须使用引号包裹 TOML 键，以减少配置错误。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1870)

7.  **[#1836] Fix interactive YOLO plan review semantics**
    *   **作者:** WeZZard | **状态:** 🚀 Open
    *   **摘要:** 此 PR 旨在修复交互式 YOLO 计划审查的语义问题，通过将交互式用户反馈可用性从 YOLO 自动批准中分离出来，来改善用户体验。这与 Issue #1867 直接相关。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1836)

8.  **[#1405] feat(web): add Playwright E2E test infrastructure**
    *   **作者:** YoungY620 | **状态:** 🚀 Open
    *   **摘要:** 此 PR 建立了一套基于 Playwright 的端到端（E2E）测试基础设施，用于对 Kimi Web 前端进行全面测试，以在代码变更时尽早发现回归性 bug。这是提升产品质量的重要举措。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1405)

9.  **[#1236] feat(http): enable trust_env in creating aiohttp.ClientSession**
    *   **作者:** CyCle1024 | **状态:** 🚀 Open
    *   **摘要:** 此 PR 在创建 aiohttp.ClientSession 时启用了 `trust_env` 选项，这通常意味着客户端将信任环境变量中的代理设置等，增强了在复杂网络环境下的兼容性。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/1236)

10. **[#884] [dependencies, python:uv] chore(deps-dev): bump ruff from 0.14.14 to 0.15.0**
    *   **作者:** dependabot[bot] | **状态:** 🚀 Open
    *   **摘要:** 这是一个依赖更新 PR，将开发依赖项 `ruff` (一个 Python 代码格式化/检查工具) 从 0.14.14 升级到 0.15.0。此类更新有助于保持代码库的工具链处于最新状态。
    *   [查看 PR](https://github.com/MoonshotAI/kimi-cli/pull/884)

---

#### **4. 功能需求趋势**

从社区 Issues 中提炼出的最关注方向：

*   **模型行为透明度与可控性:**
    *   **“思考过程”显示 (Show Thinking):** 用户迫切希望看到模型的完整推理链，以验证其正确性和理解其思维过程。这是对模型行为透明度的核心诉求。
    *   **模型参数调整 (Model Tuning):** 针对新模型 k2.6-code-preview 的“超长思考”问题，社区反馈表明用户需要更细粒度的控制能力，例如能够降低子代理的轮数或权重，以平衡深度思考与效率。
*   **IDE 集成与终端体验优化:**
    *   **UI/UX 定制:** 包括终端消息颜色区分、快捷键支持（如 Emacs）、以及特定 UI 组件（如 thinking 块）的可操作性，旨在提升用户在特定环境下的工作效率和舒适度。
    *   **VS Code 插件问题:** 插件在紧凑模式下的表现问题也反映了 IDE 集成方面需要持续关注和优化的部分。
*   **核心功能稳定性与健壮性:**
    *   **Bug 修复:** 如上下文压缩器选择错误的问题、Git 仓库中处理中文文件名的错误等，都是确保核心功能稳定可靠的基础。
    *   **安装便利性:** 支持在无管理员权限的系统上安装，降低了用户的使用门槛。

---

#### **5. 开发者关注点**

总结开发者反馈中的痛点或高频需求：

*   **“思考过程”缺失带来的信任危机:** 这是当前最突出的痛点。用户认为新版模型（特别是 k2.6-code-preview）的“思考过程”被隐藏或变得极长且无意义，破坏了用户对模型行为的预期和信任，感觉“安全感降低”。
*   **性能与效率的权衡:** 社区对 k2.6-code-preview 的“超长思考”和“高额 token 消耗”表达了强烈不满，这表明用户希望在模型推理深度和响应速度/成本之间找到更好的平衡点。
*   **配置复杂性与文档清晰度:** 用户请求更清晰的配置文档（如 Issue #1870 所示），说明现有配置方式可能存在学习曲线，需要更友好的引导。
*   **自动化与安全的边界:** 关于 `--yolo` 模式是否应自动批准计划的讨论（Issue #1867 和 PR #1836），揭示了用户希望在自动化效率和操作安全性之间有更明确的控制权。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报（2026-04-15）**

---

### 1. 今日速览

OpenCode v1.4.4 发布，修复了 OAuth 登录、日志上下文及 API 响应格式等关键问题。社区集中反馈了 Azure OpenAI 模型兼容性问题与 TUI 交互体验缺陷，多个高优先级 Bug 正在修复中。同时，移动端支持与虚拟滚动优化成为新功能探索方向。

---

### 2. 版本发布

**v1.4.4**  
- ✅ 恢复 prompt 运行时的实例和日志上下文，确保工具调用与日志输出正常  
- ✅ 保持 GitHub Copilot 压缩请求有效性  
- ✅ 还原 question API 的 flat reply 结构  
- ✅ 持久化立即完成的 MCP OAuth 连接  

> 链接：[Release v1.4.4](https://github.com/anomalyco/opencode/releases/tag/v1.4.4)

---

### 3. 社区热点 Issues（Top 10）

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| [#18267](https://github.com/anomalyco/opencode/issues/18267) | Claude Code OAuth 失效导致无法登录 | ⭐⭐⭐⭐☆ | 151 评论，60 👍，用户强烈抱怨认证流程中断 |
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | OpenTUI 复制到剪贴板功能失效 | ⭐⭐⭐☆☆ | 84 评论，65 👍，影响基础操作体验 |
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | “Preparing write…” 卡死无响应 | ⭐⭐⭐⭐☆ | 55 评论，23 👍，严重影响文件写入任务执行 |
| [#20698](https://github.com/anomalyco/opencode/issues/20698) | Azure GPT-5.4 返回推理字段缺失错误 | ⭐⭐⭐☆☆ | 21 评论，3 👍，Azure 用户大规模遇阻 |
| [#22444](https://github.com/anomalyco/opencode/issues/22444) | 最新更新后 Azure OpenAI 全部不可用 | ⭐⭐⭐☆☆ | 4 评论，3 👍，新发 Issue，疑似回归问题 |
| [#2755](https://github.com/anomalyco/opencode/issues/2755) | 请求增加类似 Vim 的 Copy Mode 文本选择 | ⭐⭐⭐☆☆ | 16 评论，65 👍，高频需求，提升编辑效率 |
| [#6548](https://github.com/anomalyco/opencode/issues/6548) | 建议引入虚拟滚动以优化长会话加载性能 | ⭐⭐☆☆☆ | 7 评论，3 👍，长期性能痛点 |
| [#10288](https://github.com/anomalyco/opencode/issues/10288) | 请求移动端（Android/iOS/Web UI）支持 | ⭐⭐☆☆☆ | 6 评论，48 👍，移动场景刚需 |
| [#21793](https://github.com/anomalyco/opencode/issues/21793) | `permission.skill` 模式规则未正确拦截技能暴露 | ⭐⭐☆☆☆ | 5 评论，0 👍，权限控制逻辑缺陷 |
| [#6815](https://github.com/anomalyco/opencode/issues/6815) | 命令面板添加“重载配置无需重启”功能 | ⭐⭐☆☆☆ | 4 评论，38 👍，配置热更新高频诉求 |

---

### 4. 重要 PR 进展（Top 10）

| # | PR 标题 | 类型 | 说明 |
|---|--------|------|------|
| [#22508](https://github.com/anomalyco/opencode/pull/22508) | 修复 permission modal 弹出时输入框内容丢失 | Bug Fix | 解决 #21120，通过 stash 机制保存用户输入 |
| [#21729](https://github.com/anomalyco/opencode/pull/21729) | 在 prompt_async 中保留当前 agent/model | Feature | 自动继承会话活跃模型，避免上下文丢失 |
| [#14832](https://github.com/anomalyco/opencode/pull/14832) | write.ts 强制将 JSON 对象转为字符串 | Bug Fix | 修复小模型写入 .json/.excalidraw 失败问题 |
| [#1589](https://github.com/anomalyco/opencode/pull/1589) | 支持工具响应中嵌入图片 | Feature | 扩展 read 工具对图像的分析能力 |
| [#7984](https://github.com/anomalyco/opencode/pull/7984) | 新增 Databricks 提供商支持 | Feature | 接入 Databricks Foundation Model APIs |
| [#7156](https://github.com/anomalyco/opencode/pull/7156) | 为子代理添加默认 variant 配置 | Feature | 实现 per-agent 推理强度预设 |
| [#6844](https://github.com/anomalyco/opencode/pull/6844) | 明确 edit/write 成功提示，区分 LSP 诊断 | UX | 避免误判编辑结果，优化“静默成功”体验 |
| [#6629](https://github.com/anomalyco/opencode/pull/6629) | 集成 OpenTelemetry + Aspire Dashboard | DevOps | 增强可观测性与调试能力 |
| [#6154](https://github.com/anomalyco/opencode/pull/6154) | 在状态栏和侧边栏展示已加载技能列表 | Feature | 解决 #7533，提升技能可见性 |
| [#6138](https://github.com/anomalyco/opencode/pull/6138) | 添加 session_list_limit 限制会话加载数 | Performance | 缓解海量会话导致的 TUI 卡顿 |

---

### 5. 功能需求趋势

从近期 Issue 分析，社区最关注的功能方向包括：

- **TUI 交互优化**：复制模式、滚动体验、输入框稳定性（#2755, #6257, #22508）
- **多平台适配**：移动端 Web UI、跨平台编码一致性（#10288）
- **模型与提供商扩展**：Databricks、LLM Gateway、Vertex AI 服务账号支持（#7984, #7847, #6287）
- **权限与配置管理**：细粒度 skill 权限控制、全局/项目级 system prompt 自定义（#7101, #21793）
- **性能与可维护性**：虚拟滚动、分页加载、配置热重载（#6548, #6815）
- **企业级集成**：Azure/GCP 原生认证、CI/CD 友好交互（#20698, #6832）

---

### 6. 开发者关注点

- **OAuth 认证稳定性差**：Claude Code OAuth 频繁报错 429，影响主流 AI 接入（#18267）
- **Azure OpenAI 兼容性倒退**：新版本引入字段顺序错误，导致推理模型崩溃（#20698, #22444）
- **TUI 输入被意外清除**：权限弹窗或异步操作中断用户输入流（#21120, #22479）
- **技能权限规则模糊**：pattern-based deny 不生效，存在安全隐患（#21793）
- **编码/解码问题**：Korean EUC-KR 编码丢失，需加强 charset 处理（#7933）

> 建议优先处理认证流程健壮性和 TUI 输入保护机制，以提升核心用户体验。

--- 

*数据来源：GitHub anomalyco/opencode，统计时间：2026-04-15*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026-04-15）**

---

### 今日速览  
Qwen Code 发布了 v0.14.4-nightly 版本，新增上下文使用数据透出和启动性能分析工具；同时社区对免费额度政策调整反应强烈，多个 Issue 讨论配额缩减问题。此外，VSCode 插件会话标签过长导致布局溢出等问题得到修复，提升了用户体验。

---

### 版本发布  
**v0.14.4-nightly.20260415**  
- 在 CLI/SDK 中暴露 `/context` 使用数据（非交互模式及 API 调用）  
- 新增启动性能分析器，帮助开发者定位初始化瓶颈  
- 实现 fork 子进程支持，为后续分支会话功能打下基础  

> [Release #9f9ffbf95](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.4-nightly.20260415.9f9ffbf95)

---

### 社区热点 Issues  

1. **#3203：免费额度降至每日100次，计划彻底取消免费 tier**  
   - 用户抗议配额骤减，呼吁恢复原额度或明确替代方案  
   - 已获17条评论，热度持续上升  
   > [Issue #3203](https://github.com/QwenLM/qwen-code/issues/3203)

2. **#1742 & #2426：实际可用配额远低于宣传的1000次/天**  
   - 多名用户反馈即使未达宣称上限仍频繁触发429错误  
   - 怀疑存在隐藏限制或统计口径不一致  
   > [Issue #1742](https://github.com/QwenLM/qwen-code/issues/1742) | [Issue #2426](https://github.com/QwenLM/qwen-code/issues/2426)

3. **#3267：新用户刚注册即提示超额，疑似配额重置机制异常**  
   - 首次会话未完成就报错，引发对计费逻辑透明度的质疑  
   > [Issue #3267](https://github.com/QwenLM/qwen-code/issues/3267)

4. **#2873：VSCode 插件会话标签无限拉长占满整行**  
   - UI 设计缺陷严重影响多任务操作体验  
   - 已在 PR #3249 中修复并合并  
   > [Issue #2873](https://github.com/QwenLM/qwen-code/issues/2873)

5. **#3234：请求支持按名称索引对话历史，避免依赖 UUID**  
   - 提升长期项目协作中的可追溯性需求  
   > [Issue #3234](https://github.com/QwenLM/qwen-code/issues/3234)

6. **#3277：MCP 客户端仅允许2个并发连接，阻碍生产环境多节点部署**  
   - 标记为 Critical，影响企业级应用集成  
   > [Issue #3277](https://github.com/QwenLM/qwen-code/issues/3277)

7. **#3095：终端状态栏下方多出多余空行，与 Claude Code 不一致**  
   - 视觉冗余但非功能性问题，属 UX 优化范畴  
   > [Issue #3095](https://github.com/QwenLM/qwen-code/issues/3095)

8. **#3244：提议重构命令平台架构，统一注册表、解析器与执行器**  
   - 推动从“交互式附属能力”升级为通用命令平台  
   > [Issue #3244](https://github.com/QwenLM/qwen-code/issues/3244)

9. **#3074：询问 OAuth 登录模式下每日1000次调用的重置时间点**  
   - 涉及跨日会话连续性计费逻辑澄清需求  
   > [Issue #3074](https://github.com/QwenLM/qwen-code/issues/3074)

10. **#3263：用户推荐第三方替代服务以规避额度限制**  
    - 反映当前免费策略可能加速用户流失至竞品  
    > [Issue #3263](https://github.com/QwenLM/qwen-code/issues/3263)

---

### 重要 PR 进展  

1. **#3239 / #3276：强制并行执行 `/review` 子代理，突破模型串行限制**  
   - 解决 qwen3-plus 等模型无法并发运行审查代理的问题  
   > [PR #3239](https://github.com/QwenLM/qwen-code/pull/3239) | [PR #3276](https://github.com/QwenLM/qwen-code/pull/3276)

2. **#3249：修复 VSCode 会话标签过长溢出问题**  
   - 引入 Unicode 感知截断策略，最大显示50码位+省略号  
   > [PR #3249](https://github.com/QwenLM/qwen-code/pull/3249)

3. **#3251：允许 Gemini 流响应仅含思考内容时不报错**  
   - 兼容 thinking 模型的纯推理输出格式  
   > [PR #3251](https://github.com/QwenLM/qwen-code/pull/3251)

4. **#3261：新增 `/history` 命令管理本地聊天会话**  
   - 支持列出、删除项目级历史记录，提升可维护性  
   > [PR #3261](https://github.com/QwenLM/qwen-code/pull/3261)

5. **#3246：从 SSE 帧中识别速率限制错误（如 429）**  
   - 增强流式接口对配额超限的容错与提示能力  
   > [PR #3246](https://github.com/QwenLM/qwen-code/pull/3246)

6. **#3260：修复 VSCode IDE Companion 自动滚动卡顿问题**  
   - 优化平滑滚动逻辑与输入响应延迟  
   > [PR #3260](https://github.com/QwenLM/qwen-code/pull/3260)

7. **#3258：为 macOS PTY 静默失败添加诊断日志**  
   - 解决 node-pty 在某些环境下无输出却返回非零退出的问题  
   > [PR #3258](https://github.com/QwenLM/qwen-code/pull/3258)

8. **#3079：新增 `/batch` 技能支持大规模文件并行处理**  
   - 基于 glob 匹配自动分片，适用于代码重构等批量任务  
   > [PR #3079](https://github.com/QwenLM/qwen-code/pull/3079)

9. **#3266：添加 PostTurn Hook 事件用于 turn 级别后处理**  
   - 扩展钩子系统，支持在每次模型响应边界插入自定义逻辑  
   > [PR #3266](https://github.com/QwenLM/qwen-code/pull/3266)

10. **#3242：保留 CLI 启动阶段的早期输入，避免按键丢失**  
    - 修复初始化期间 TTY 输入被丢弃的回归问题  
    > [PR #3242](https://github.com/QwenLM/qwen-code/pull/3242)

---

### 功能需求趋势  

- **配额透明度与成本控制**：用户对免费额度突然下调极为敏感，亟需公开详细的用量统计与重置规则。
- **IDE 集成体验优化**：VSCode 插件的多项 UI/UX 问题（标签溢出、滚动卡顿等）集中出现，反映深度 IDE 集成仍是关键战场。
- **会话管理与可观测性**：历史记录命名、分支会话（fork/branch）、内存系统（dream/extract）成为高频需求。
- **MCP 与企业级支持**：MCP 连接数限制暴露出对复杂工作流的支持不足，需增强稳定性和扩展性。
- **钩子系统与自动化扩展**：PostTurn Hook、ACP 完整钩子支持等提案增多，表明社区希望构建更灵活的插件生态。

---

### 开发者关注点  

- **免费额度政策变动缺乏提前通知**，损害用户信任；建议通过邮件/仪表板提前告知变更。
- **OAuth 登录后的配额重置时间点不清晰**（是否按自然日？会话续接如何计算？）。
- **Windows CMD 权限选择不持久化**（#2669），影响自动化脚本运行。
- **Thinking 模型的行为一致性差**，部分模型返回空文本即终止流，需更健壮的语义判断逻辑。
- **死循环检测机制过于激进**，误判正常工具调用链为环路，应区分意图与行为。

</details>

---
*本日报由 [agents-radar](https://github.com/DenisZheng/agents-radar) 自动生成。*